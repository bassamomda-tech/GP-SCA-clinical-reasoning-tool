/* ============================================================
   Reasoning GP — Cloudflare Worker API
   ------------------------------------------------------------
   One Worker provides:
     • Secure accounts (register / login / me) — PBKDF2-hashed
       passwords, bearer tokens in KV (multi-device).
     • AI proxy (/api/ai) — keeps your AI key server-side so the
       browser never sees it; gated to paying users.
     • PayPal subscription webhook — verifies the event with
       PayPal, then sets the user's tier (entitlement).
     • Entitlement is returned by /api/auth/me so the site can
       unlock the right area (clinic / sca / all).

   DEPLOY: see backend/README.md. You need two KV namespaces
   (USERS, TOKENS) and a handful of secrets/vars (below).

   Required secrets (wrangler secret put NAME):
     AI_API_KEY            your Anthropic API key (sk-ant-…)
     PAYPAL_CLIENT_ID      PayPal LIVE client id
     PAYPAL_SECRET         PayPal LIVE secret
     PAYPAL_WEBHOOK_ID     the webhook id from PayPal dashboard
   Required vars (wrangler.toml [vars]):
     ALLOWED_ORIGIN        e.g. https://www.reasoninggp.com
     AI_MODEL              e.g. claude-3-5-sonnet-20241022
     PLAN_SILVER_MONTHLY, PLAN_SILVER_YEARLY,
     PLAN_GOLD_MONTHLY, PLAN_GOLD_3MONTHLY, PLAN_GOLD_YEARLY,
     PLAN_PLATINUM_MONTHLY, PLAN_PLATINUM_YEARLY  (PayPal plan ids)
   ============================================================ */

const PAYPAL_API = 'https://api-m.paypal.com'; // live. Sandbox: https://api-m.sandbox.paypal.com

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = corsHeaders(env, request);
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });

    try {
      if (url.pathname === '/api/auth/register') return json(await register(request, env), 200, cors);
      if (url.pathname === '/api/auth/login')    return json(await login(request, env), 200, cors);
      if (url.pathname === '/api/auth/me')        return json(await me(request, env), 200, cors);
      if (url.pathname === '/api/data')           return await userData(request, env, cors);
      if (url.pathname === '/api/group')          return await groupSession(request, env, cors);
      if (url.pathname === '/api/redeem')         return await redeemCode(request, env, cors);
      if (url.pathname === '/api/admin/codes')    return await adminCodes(request, env, cors);
      if (url.pathname === '/api/ai')             return await aiProxy(request, env, cors);
      if (url.pathname === '/api/embed')          return await embedProxy(request, env, cors);
      if (url.pathname === '/api/feedback')       return await feedback(request, env, cors);
      if (url.pathname === '/api/admin/ask')      return await adminAsk(request, env, cors);
      if (url.pathname === '/api/updates')        return await updatesFeed(request, env, cors);
      if (url.pathname === '/api/updates/archive') return await updatesArchive(request, env, cors);
      if (url.pathname === '/api/paypal/webhook') return await paypalWebhook(request, env);
      if (url.pathname === '/api/health')         return json({ ok: true }, 200, cors);
      return json({ error: 'Not found' }, 404, cors);
    } catch (e) {
      return json({ error: e.message || 'Server error' }, e.status || 400, cors);
    }
  },

  // Optional Cron Trigger — warms the updates cache so the live feed is instant.
  async scheduled(event, env, ctx) {
    ctx.waitUntil((async () => {
      const data = await fetchUpdates(env);
      try { if (env.UPDATES) await mergeArchive(env, data.items); } catch(e){}
    })());
  }
};

/* ---------------- helpers ---------------- */
// ALLOWED_ORIGIN may be a single origin or a comma-separated list
// (e.g. "https://gpreasoning.uk, https://www.gpreasoning.uk, https://reasoninggp.com").
// We echo back whichever allowed origin the request actually came from, so
// www / non-www / a second domain all work without a separate deploy.
function corsHeaders(env, request) {
  const list = String(env.ALLOWED_ORIGIN || '').split(',').map(s => s.trim()).filter(Boolean);
  const reqOrigin = request && request.headers ? request.headers.get('Origin') : null;
  let allow = '*';
  if (list.length) {
    allow = (reqOrigin && list.includes(reqOrigin)) ? reqOrigin : list[0];
  } else if (reqOrigin) {
    allow = reqOrigin;
  }
  return {
    'Access-Control-Allow-Origin': allow,
    'Vary': 'Origin',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400'
  };
}
function json(obj, status, headers) {
  return new Response(JSON.stringify(obj), { status: status || 200, headers: Object.assign({ 'Content-Type': 'application/json' }, headers || {}) });
}
function fail(msg, status) { const e = new Error(msg); e.status = status || 400; return e; }
const hex = buf => [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
function randHex(n) { const a = new Uint8Array(n); crypto.getRandomValues(a); return hex(a); }
function validEmail(e) { return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e); }

async function pbkdf2(password, saltHex) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']);
  const salt = Uint8Array.from(saltHex.match(/.{2}/g).map(h => parseInt(h, 16)));
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' }, key, 256);
  return hex(bits);
}
function tierFromPlan(planId, env) {
  const map = {
    [env.PLAN_SILVER_MONTHLY]: 'silver', [env.PLAN_SILVER_YEARLY]: 'silver',
    [env.PLAN_GOLD_MONTHLY]: 'gold', [env.PLAN_GOLD_3MONTHLY]: 'gold', [env.PLAN_GOLD_YEARLY]: 'gold',
    [env.PLAN_PLATINUM_MONTHLY]: 'platinum', [env.PLAN_PLATINUM_YEARLY]: 'platinum'
  };
  return map[planId] || null;
}
/* Effective tier: the ADMIN_EMAIL account is always platinum; a tier granted
   with an expiry (discount codes) lapses back to bronze after tierUntil. */
function effectiveTier(u, env) {
  const admin = env && String(env.ADMIN_EMAIL || '').trim().toLowerCase();
  if (admin && u.email === admin) return 'platinum';
  let t = u.tier || 'bronze';
  if (t !== 'bronze' && u.tierUntil && Date.now() > u.tierUntil) t = 'bronze';
  return t;
}
const publicUser = (u, env) => ({
  name: u.name, email: u.email, stage: u.stage || '', created: u.created,
  tier: effectiveTier(u, env),
  tierUntil: u.tierUntil || null,
  admin: !!(env && String(env.ADMIN_EMAIL || '').trim().toLowerCase() === u.email)
});

async function userFromToken(request, env) {
  const auth = request.headers.get('Authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
  if (!token) throw fail('Not signed in', 401);
  const email = await env.TOKENS.get(token);
  if (!email) throw fail('Session expired — please sign in again', 401);
  const raw = await env.USERS.get(email);
  if (!raw) throw fail('Account not found', 401);
  return JSON.parse(raw);
}

/* ---------------- auth ---------------- */
async function register(request, env) {
  const { name, email, password, stage } = await request.json();
  const e = (email || '').trim().toLowerCase();
  if (!name || !name.trim()) throw fail('Please enter your name.');
  if (!validEmail(e)) throw fail('Please enter a valid email address.');
  if (!password || password.length < 8) throw fail('Password must be at least 8 characters.');
  if (await env.USERS.get(e)) throw fail('An account with this email already exists — try signing in.');
  const salt = randHex(16);
  const hash = await pbkdf2(password, salt);
  const user = { name: name.trim(), email: e, stage: stage || '', salt, hash, created: Date.now(), tier: 'bronze' };
  await env.USERS.put(e, JSON.stringify(user));
  const token = randHex(32);
  await env.TOKENS.put(token, e, { expirationTtl: 60 * 60 * 24 * 30 });
  return { token, user: publicUser(user, env) };
}
async function login(request, env) {
  const { email, password } = await request.json();
  const e = (email || '').trim().toLowerCase();
  const raw = await env.USERS.get(e);
  if (!raw) throw fail('No account found with that email — create one first.');
  const user = JSON.parse(raw);
  const hash = await pbkdf2(password || '', user.salt);
  if (hash !== user.hash) throw fail('Incorrect password — please try again.');
  const token = randHex(32);
  await env.TOKENS.put(token, e, { expirationTtl: 60 * 60 * 24 * 30 });
  return { token, user: publicUser(user, env) };
}
async function me(request, env) {
  const user = await userFromToken(request, env);
  return { user: publicUser(user, env) };
}

/* ---------------- per-user data sync (e.g. Scribe consultations) ----------------
   GET  /api/data?k=scribe          -> { data, ts }   (null data if never saved)
   POST /api/data?k=scribe {data}   -> { ok, ts }
   Stored in USERS KV as udata:<email>:<key>. Signed-in users only, any tier. */
async function userData(request, env, cors) {
  let user;
  try { user = await userFromToken(request, env); }
  catch (e) { return json({ error: e.message }, e.status || 401, cors); }
  const url = new URL(request.url);
  const k = (url.searchParams.get('k') || '').replace(/[^a-z0-9_-]/gi, '').slice(0, 32);
  if (!k) return json({ error: 'Missing data key' }, 400, cors);
  const kvKey = 'udata:' + user.email + ':' + k;
  if (request.method === 'GET') {
    const raw = await env.USERS.get(kvKey);
    if (!raw) return json({ data: null, ts: 0 }, 200, cors);
    try { return json(JSON.parse(raw), 200, cors); } catch (e) { return json({ data: null, ts: 0 }, 200, cors); }
  }
  if (request.method === 'POST' || request.method === 'PUT') {
    const body = await request.json();
    const ts = Date.now();
    const payload = JSON.stringify({ data: body.data ?? null, ts });
    if (payload.length > 800 * 1024) return json({ error: 'Too large to sync (800 KB limit) — delete some old items.' }, 413, cors);
    await env.USERS.put(kvKey, payload);
    return json({ ok: true, ts }, 200, cors);
  }
  return json({ error: 'method' }, 405, cors);
}

/* ---------------- live group mock sessions (SCA) ----------------
   Three trainees run one SCA case together from different places:
   candidate / patient / examiner share a 5-letter code (they run their own
   video call alongside — this endpoint only syncs case, clock, roles, marks).
   State lives in USERS KV as grp:<CODE>, 6-hour TTL refreshed on every write.
   Signed-in users only, ANY tier — a free account can join a friend's session.
   No patient-identifiable data is ever stored: caseId + first names + grades.
     POST {op:'create', caseId}            -> {code, state, now}
     GET  ?code=ABCDE                      -> {state, now}
     POST {op:'patch', code, patch:{…}}    -> {state, now}
   patch merges shallowly; patch.roles merges per-role (null = leave role). */
const GRP_TTL = 21600;
function cleanGroupCode(c){ return String(c || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 5); }
async function groupSession(request, env, cors) {
  try { await userFromToken(request, env); }
  catch (e) { return json({ error: e.message }, e.status || 401, cors); }
  const url = new URL(request.url);
  if (request.method === 'GET') {
    const code = cleanGroupCode(url.searchParams.get('code'));
    const raw = code.length === 5 ? await env.USERS.get('grp:' + code) : null;
    if (!raw) return json({ error: 'Session not found — codes last 6 hours. Check it and try again.' }, 404, cors);
    return json({ state: JSON.parse(raw), now: Date.now() }, 200, cors);
  }
  if (request.method !== 'POST') return json({ error: 'method' }, 405, cors);
  const body = await request.json();
  if (body.op === 'create') {
    const caseId = String(body.caseId || '').replace(/[^a-z0-9_-]/gi, '').slice(0, 80);
    if (!caseId) return json({ error: 'Missing caseId' }, 400, cors);
    const AB = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // no 0/O/1/I/L — read-aloud safe
    let code = '';
    for (let t = 0; t < 5 && !code; t++) {
      let c = ''; const r = crypto.getRandomValues(new Uint8Array(5));
      for (const b of r) c += AB[b % AB.length];
      if (!(await env.USERS.get('grp:' + c))) code = c;
    }
    if (!code) return json({ error: 'Could not allocate a code — try again.' }, 500, cors);
    const state = { v: 1, code, caseId, phase: 'lobby', roles: {}, prepTs: 0, startTs: 0, marks: null, created: Date.now() };
    await env.USERS.put('grp:' + code, JSON.stringify(state), { expirationTtl: GRP_TTL });
    return json({ code, state, now: Date.now() }, 200, cors);
  }
  if (body.op === 'patch') {
    const code = cleanGroupCode(body.code);
    const raw = code.length === 5 ? await env.USERS.get('grp:' + code) : null;
    if (!raw) return json({ error: 'Session not found — it may have expired (6-hour limit).' }, 404, cors);
    const state = JSON.parse(raw);
    const patch = body.patch || {};
    for (const k of ['phase', 'prepTs', 'startTs', 'marks']) if (k in patch) state[k] = patch[k];
    if (patch.roles && typeof patch.roles === 'object') {
      state.roles = state.roles || {};
      for (const r of ['candidate', 'patient', 'examiner']) {
        if (r in patch.roles) {
          if (patch.roles[r] === null) delete state.roles[r];
          else state.roles[r] = String(patch.roles[r]).slice(0, 40);
        }
      }
    }
    state.v = (state.v || 0) + 1;
    const out = JSON.stringify(state);
    if (out.length > 40 * 1024) return json({ error: 'Session state too large.' }, 413, cors);
    await env.USERS.put('grp:' + code, out, { expirationTtl: GRP_TTL });
    return json({ state, now: Date.now() }, 200, cors);
  }
  return json({ error: 'Unknown op' }, 400, cors);
}

/* ---------------- discount / free-entry codes ----------------
   POST /api/redeem {code} (signed in) — grants the code's tier to the account.
   Codes live in USERS KV as code:<CODE> =
     { tier, days|null, maxUses, used, usedBy[], expires|null, note }         */
async function redeemCode(request, env, cors) {
  if (request.method !== 'POST') return json({ error: 'method' }, 405, cors);
  let user;
  try { user = await userFromToken(request, env); }
  catch (e) { return json({ error: e.message }, e.status || 401, cors); }
  const { code } = await request.json();
  const c = String(code || '').trim().toUpperCase().replace(/[^A-Z0-9-]/g, '');
  if (!c) return json({ error: 'Enter a code.' }, 400, cors);
  const raw = await env.USERS.get('code:' + c);
  if (!raw) return json({ error: 'That code isn\u2019t valid \u2014 check it and try again.' }, 404, cors);
  const meta = JSON.parse(raw);
  if (meta.expires && Date.now() > meta.expires) return json({ error: 'That code has expired.' }, 410, cors);
  if (meta.maxUses && (meta.used || 0) >= meta.maxUses) return json({ error: 'That code has reached its maximum number of uses.' }, 410, cors);
  if ((meta.usedBy || []).includes(user.email)) return json({ error: 'You\u2019ve already redeemed this code.' }, 409, cors);
  meta.used = (meta.used || 0) + 1;
  meta.usedBy = (meta.usedBy || []).concat(user.email).slice(-1000);
  await env.USERS.put('code:' + c, JSON.stringify(meta));
  // Only ever UPGRADE — never shorten access or downgrade a tier a member already holds.
  // So an existing annual member who also redeems a 7-day trial keeps their annual access.
  const RANK = { silver: 1, gold: 2, platinum: 3 };
  const newTier = ['silver', 'gold', 'platinum'].includes(meta.tier) ? meta.tier : 'platinum';
  const newUntil = meta.days ? Date.now() + meta.days * 864e5 : null; // null = no expiry (forever)
  const curTier = ['silver', 'gold', 'platinum'].includes(user.tier) ? user.tier : null;
  const curUntil = user.tierUntil || null;
  const curActive = curTier && (!curUntil || curUntil > Date.now()); // do they hold live access now?
  // Tier: keep the higher-ranked of current (if still active) vs the code's tier.
  user.tier = (curActive && RANK[curTier] >= RANK[newTier]) ? curTier : newTier;
  // Expiry: keep whichever access lasts longer. null (forever) always wins.
  if (!curActive) {
    user.tierUntil = newUntil;                       // no live access → take the code's window
  } else if (curUntil === null || newUntil === null) {
    user.tierUntil = null;                           // either side is no-expiry → forever
  } else {
    user.tierUntil = Math.max(curUntil, newUntil);   // both dated → the later expiry
  }
  // Record the source, preserving the earlier one so it's clear access was stacked.
  user.tierSource = (curActive && user.tierSource && user.tierSource !== 'code:' + c)
    ? user.tierSource + '+code:' + c
    : 'code:' + c;
  await env.USERS.put(user.email, JSON.stringify(user));
  return json({ ok: true, user: publicUser(user, env) }, 200, cors);
}

/* Admin console for codes (tools/access-codes.html):
   GET  /api/admin/codes                          -> { codes:[{key,value}] }
   POST {action:'create', code?, tier, days?, maxUses?, expireDays?, note?}
   POST {action:'delete', code}                                              */
async function adminCodes(request, env, cors) {
  try { await requireAdmin(request, env); }
  catch (e) { return json({ error: e.message }, e.status || 401, cors); }
  if (request.method === 'GET') {
    // listKV flattens meta onto the row ({key, ...meta}); the admin page expects
    // {key, value:meta}. Reshape so every field (days/used/maxUses/expires/created)
    // renders instead of falling back to placeholder defaults.
    const rows = await listKV(env, 'code:', 200);
    const codes = rows.map(function (r) {
      const value = Object.assign({}, r);
      delete value.key;
      return { key: r.key, value: value };
    });
    return json({ codes }, 200, cors);
  }
  if (request.method !== 'POST') return json({ error: 'method' }, 405, cors);
  const b = await request.json();
  if (b.action === 'create') {
    const code = String(b.code || ('RGP-' + randHex(3).toUpperCase())).trim().toUpperCase().replace(/[^A-Z0-9-]/g, '');
    if (!code) return json({ error: 'Bad code' }, 400, cors);
    if (await env.USERS.get('code:' + code)) return json({ error: 'That code already exists.' }, 409, cors);
    const meta = {
      tier: ['silver', 'gold', 'platinum'].includes(b.tier) ? b.tier : 'platinum',
      days: b.days ? Math.max(1, Math.min(3650, +b.days)) : null,
      maxUses: b.maxUses ? Math.max(1, Math.min(10000, +b.maxUses)) : 1,
      used: 0, usedBy: [], created: Date.now(),
      expires: b.expireDays ? Date.now() + (+b.expireDays) * 864e5 : null,
      note: String(b.note || '').slice(0, 120)
    };
    await env.USERS.put('code:' + code, JSON.stringify(meta));
    return json({ ok: true, code, meta }, 200, cors);
  }
  if (b.action === 'delete') {
    const c = String(b.code || '').trim().toUpperCase().replace(/[^A-Z0-9-]/g, '');
    if (c) await env.USERS.delete('code:' + c);
    return json({ ok: true }, 200, cors);
  }
  return json({ error: 'Unknown action' }, 400, cors);
}

/* ---------------- Live updates feed (auto-updating) ----------------
   Pulls official UK sources server-side (no CORS limit in a Worker) and
   returns a normalised JSON digest the Updates page renders. Cached at the
   edge for 6h so it refreshes itself without any manual editing.
   Add a Cron Trigger in wrangler.toml to warm the cache on a schedule:
     [triggers]
     crons = ["0 7 * * *"]   # 07:00 daily
   (the scheduled() handler below pre-fetches the same feeds).            */
const UPDATE_FEEDS = [
  { src:'MHRA',  tag:'\uD83D\uDC8A MHRA',  url:'https://www.gov.uk/drug-safety-update.atom' },
  { src:'UKHSA', tag:'\u26A0 UKHSA', url:'https://www.gov.uk/government/organisations/uk-health-security-agency.atom' },
  { src:'NICE',  tag:'\uD83D\uDCCB NICE', url:'https://www.nice.org.uk/guidance/published/rss' },
  { src:'CKS',   tag:'\uD83D\uDCDD NICE CKS / Prescriber', url:'https://www.prescriber.org.uk/feed/' }
];
function decodeEnt(s){
  return String(s||'')
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>')
    .replace(/&quot;/g,'"').replace(/&#0?39;/g,"'").replace(/&#x27;/gi,"'").replace(/&nbsp;/g,' ')
    .replace(/\s+/g,' ').trim();
}
function parseFeed(xml, feed){
  const out = [];
  // Atom <entry> or RSS <item>
  const blocks = xml.split(/<(?:entry|item)[\s>]/i).slice(1);
  blocks.slice(0, 6).forEach(block=>{
    const title = (block.match(/<title[^>]*>([\s\S]*?)<\/title>/i)||[])[1];
    let link = (block.match(/<link[^>]*href="([^"]+)"/i)||[])[1];
    if(!link){ link = (block.match(/<link[^>]*>([\s\S]*?)<\/link>/i)||[])[1]; }
    const date = (block.match(/<updated>([^<]+)<\/updated>/i)||[])[1]
              || (block.match(/<published>([^<]+)<\/published>/i)||[])[1]
              || (block.match(/<pubDate>([^<]+)<\/pubDate>/i)||[])[1] || '';
    const summary = (block.match(/<summary[^>]*>([\s\S]*?)<\/summary>/i)||[])[1]
                 || (block.match(/<description[^>]*>([\s\S]*?)<\/description>/i)||[])[1]
                 || (block.match(/<content[^>]*>([\s\S]*?)<\/content>/i)||[])[1] || '';
    if(title && link){
      out.push({
        src:feed.src, tag:feed.tag,
        title: decodeEnt(title),
        url: link.trim(),
        date: (date||'').trim(),
        summary: decodeEnt(summary).slice(0, 240)
      });
    }
  });
  return out;
}
async function fetchUpdates(env){
  const all = [];
  await Promise.all(UPDATE_FEEDS.map(async f=>{
    try{
      const r = await fetch(f.url, {
        cf:{ cacheTtl: 21600, cacheEverything: true },
        headers:{ 'User-Agent':'ReasoningGP/1.0 (updates digest)', 'Accept':'application/atom+xml, application/rss+xml, application/xml' }
      });
      if(!r.ok) return;
      const xml = await r.text();
      parseFeed(xml, f).forEach(it=> all.push(it));
    }catch(e){ /* skip a failing feed */ }
  }));
  all.sort((a,b)=> String(b.date||'').localeCompare(String(a.date||'')));
  return { generated: new Date().toISOString(), items: all.slice(0, 15) };
}
async function updatesFeed(request, env, cors){
  const data = await fetchUpdates(env);
  // opportunistically grow the archive even if no cron is configured
  try { if (env.UPDATES) await mergeArchive(env, data.items); } catch(e){}
  return json(data, 200, Object.assign({ 'Cache-Control':'public, max-age=3600' }, cors));
}

/* ---- 12-month rolling archive (KV-backed “memory” of weekly updates) ---- */
const ARCHIVE_KEY = 'updates:archive';
const YEAR_MS = 365 * 24 * 60 * 60 * 1000;
function itemKey(it){ return (it.url || '') + '|' + (it.title || ''); }
function itemTime(it){
  const t = Date.parse(it.date || '');
  if (!isNaN(t)) return t;
  const s = Date.parse(it.seen || '');
  return isNaN(s) ? Date.now() : s;
}
async function getArchive(env){
  if (!env.UPDATES) return [];
  try { return JSON.parse(await env.UPDATES.get(ARCHIVE_KEY) || '[]') || []; } catch(e){ return []; }
}
async function mergeArchive(env, items){
  if (!env.UPDATES || !items || !items.length) return;
  const existing = await getArchive(env);
  const byKey = new Map(existing.map(it => [itemKey(it), it]));
  const now = new Date().toISOString();
  items.forEach(it => { const k = itemKey(it); if (!byKey.has(k)) byKey.set(k, Object.assign({ seen: now }, it)); });
  const cutoff = Date.now() - YEAR_MS;
  const merged = [...byKey.values()]
    .filter(it => itemTime(it) >= cutoff)
    .sort((a, b) => itemTime(b) - itemTime(a))
    .slice(0, 600);
  await env.UPDATES.put(ARCHIVE_KEY, JSON.stringify(merged));
}
async function updatesArchive(request, env, cors){
  let items = await getArchive(env);
  // if the archive hasn't been populated yet, fall back to a live pull so it's never empty
  if (!items.length) { try { items = (await fetchUpdates(env)).items || []; } catch(e){ items = []; } }
  const src = new URL(request.url).searchParams.get('source');
  if (src) items = items.filter(it => String(it.src||'').toLowerCase() === src.toLowerCase());
  return json({ generated: new Date().toISOString(), count: items.length, items }, 200,
    Object.assign({ 'Cache-Control':'public, max-age=1800' }, cors));
}

/* ---------------- AI proxy (Anthropic) ---------------- */
async function aiProxy(request, env, cors) {
  // Access model: FREE ACCOUNT REQUIRED (Option B).
  // The user must be signed in, but any tier (incl. free "bronze") may use the AI.
  // To require payment instead, add back:
  //   if (!user.tier || user.tier === 'bronze') return json({ error: 'subscription_required' }, 402, cors);
  // To open the AI to everyone (no sign-in), delete the try/catch below.
  let user;
  try { user = await userFromToken(request, env); }
  catch (e) { return json({ error: 'sign_in_required' }, 401, cors); }

  const { messages, cacheKey, stream, nosearch, temperature } = await request.json();
  if (!Array.isArray(messages) || !messages.length) return json({ error: 'no_messages' }, 400, cors);

  // Common-answer cache: the site sends cacheKey (the normalised question) for
  // FIRST-TURN questions only. A repeat of a popular question is served straight
  // from KV — instant, zero AI cost. Cached answers expire after 30 days unless
  // the owner approves them in the Quality Console (then they persist as vetted).
  const model = env.AI_MODEL || 'claude-sonnet-5';
  let ansKey = null;
  if (cacheKey && typeof cacheKey === 'string' && cacheKey.trim() && cacheKey.length <= 300) {
    const norm = cacheKey.trim().toLowerCase();
    // 'p4' is the prompt version salt — bump it whenever the answer framing changes
    // materially, so stale answers generated under the OLD rules can never be served
    // (old entries just stop matching and age out via their 30-day TTL).
    ansKey = 'ans:' + hex(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(model + '|p6|' + norm)));
    const hitRaw = await env.USERS.get(ansKey);
    if (hitRaw) {
      try {
        const c = JSON.parse(hitRaw);
        c.hits = (c.hits || 0) + 1;
        await env.USERS.put(ansKey, JSON.stringify(c), c.approved ? {} : { expirationTtl: 60 * 60 * 24 * 30 });
        return json({ completion: c.completion, sources: c.sources || [], cached: true }, 200, cors);
      } catch (e) { /* corrupt entry — regenerate below */ }
    }
  }

  // Prompt caching: the first message is the large, constant clinical-instruction
  // primer (identical on every question). Marking it cache_control:ephemeral means
  // repeat calls are billed ~10% for it — a real cost saving that lets us ground
  // the answer in richer context while staying inside a small monthly budget.
  const anthMessages = messages.map((m, i) => {
    const role = m.role === 'assistant' ? 'assistant' : 'user';
    const text = String(m.content || '');
    if (i === 0 && text.length > 1200) {
      return { role, content: [{ type: 'text', text, cache_control: { type: 'ephemeral' } }] };
    }
    return { role, content: text };
  });

  // Live web search, restricted to trusted UK clinical domains. The model only
  // searches when the answer depends on current guidance it is unsure of (new
  // thresholds, safety alerts, updated guidelines). Each search costs ~1p on top
  // of tokens. Turn off by setting a WEB_SEARCH env var to "off".
  // Role-play / marking calls (SCA patient simulator, examiner) send nosearch:true —
  // a simulated patient must never stall mid-consultation to search the web.
  const tools = (env.WEB_SEARCH === 'off' || nosearch === true) ? null : [{
    type: 'web_search_20250305',
    name: 'web_search',
    max_uses: 2,   // 2 so a verification search isn't starved when the library match is weak
    allowed_domains: [
      'nice.org.uk',            // NICE + CKS + BNF (cks./bnf. subdomains included)
      'fsrh.org',               // FSRH — UKMEC + contraception guidance (legacy domain)
      'cosrh.org',              // CoSRH (formerly FSRH) — UKMEC 2025 lives here
      'medicines.org.uk',       // emc — SPCs (licensed doses, contraindications)
      'sign.ac.uk',
      'bestpractice.bmj.com',
      'gov.uk',                 // UKHSA, MHRA Drug Safety Update, Green Book
      'brit-thoracic.org.uk',
      'bashh.org',
      'rcog.org.uk',
      'bad.org.uk',
      'bihsoc.org',
      'resus.org.uk',
      'ginasthma.org'
    ]
  }];

  const wantStream = !!stream;
  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': env.AI_API_KEY, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify(Object.assign({
      model: model,
      max_tokens: 1600,
      // Deterministic (0) for clinical answers; role-play callers may request up to 1
      // so the simulated patient varies naturally between runs of the same case.
      temperature: (typeof temperature === 'number' && temperature > 0) ? Math.min(1, temperature) : 0,
      messages: anthMessages,
      stream: wantStream
    }, tools ? { tools } : {}))
  });
  if (!resp.ok) {
    // Anthropic failed — most commonly the prepaid credit has run out (HTTP 400
    // "credit balance too low"), but also any outage.
    // POLICY (July 2026): the free backup model is DISABLED by default for clinical
    // answers — a wrong cheap answer is worse than no answer. Ask shows "temporarily
    // unavailable" instead. To re-enable the old behaviour set env var FALLBACK="on".
    if (env.AI && env.FALLBACK === 'on') {
      try {
        const fb = await workersAiAnswer(env, messages);
        if (fb && fb.trim()) return json({ completion: fb, sources: [], fallback: true }, 200, cors);
      } catch (e) { /* fall through to error */ }
    }
    return json({ error: 'ai_upstream_' + resp.status }, 502, cors);
  }
  // ---- If streaming was requested, pipe Anthropic's SSE back to the browser as a simple
  //      token stream so the answer appears word-by-word (feels instant). ----
  if (wantStream) {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const reader = resp.body.getReader();
    const ts = new TransformStream();
    const writer = ts.writable.getWriter();
    (async () => {
      let full = ''; const ssrc = []; const sseen = new Set(); let buf = '';
      const send = (o) => writer.write(encoder.encode('data: ' + JSON.stringify(o) + '\n\n'));
      try {
        for (;;) {
          const { value, done } = await reader.read();
          if (done) break;
          buf += decoder.decode(value, { stream: true });
          let nl;
          while ((nl = buf.indexOf('\n')) >= 0) {
            const line = buf.slice(0, nl).trim(); buf = buf.slice(nl + 1);
            if (!line.startsWith('data:')) continue;
            const p = line.slice(5).trim();
            if (!p || p === '[DONE]') continue;
            let ev; try { ev = JSON.parse(p); } catch (e) { continue; }
            if (ev.type === 'content_block_delta' && ev.delta) {
              if (ev.delta.type === 'text_delta' && ev.delta.text) { full += ev.delta.text; await send({ t: ev.delta.text }); }
              else if (ev.delta.type === 'citations_delta' && ev.delta.citation && ev.delta.citation.url && !sseen.has(ev.delta.citation.url)) {
                sseen.add(ev.delta.citation.url); ssrc.push({ url: ev.delta.citation.url, title: String(ev.delta.citation.title || '').slice(0, 120) });
              }
            }
          }
        }
        if (ansKey && full && full.length > 40) {
          try { await env.USERS.put(ansKey, JSON.stringify({ q: cacheKey.slice(0, 300), completion: full, sources: ssrc, ts: Date.now(), hits: 0, model }), { expirationTtl: 60 * 60 * 24 * 30 }); } catch (e) {}
        }
        await send({ done: true, sources: ssrc });
      } catch (e) {
        await send({ error: String((e && e.message) || e) });
      } finally { await writer.close(); }
    })();
    return new Response(ts.readable, { status: 200, headers: Object.assign({}, cors, { 'Content-Type': 'text/event-stream; charset=utf-8', 'Cache-Control': 'no-cache' }) });
  }

  const data = await resp.json();
  // With web search on, the reply arrives as multiple content blocks (text
  // interleaved with search activity). Join the text; collect cited live pages.
  let text = '';
  const sources = []; const seen = new Set();
  for (const b of (data.content || [])) {
    if (b && b.type === 'text') {
      text += b.text || '';
      for (const c of (b.citations || [])) {
        if (c && c.url && !seen.has(c.url)) { seen.add(c.url); sources.push({ url: c.url, title: String(c.title || '').slice(0, 120) }); }
      }
    }
  }
  // store for next time (30-day TTL; the Quality Console can approve → permanent)
  if (ansKey && text && text.length > 40) {
    try { await env.USERS.put(ansKey, JSON.stringify({ q: cacheKey.slice(0, 300), completion: text, sources, ts: Date.now(), hits: 0, model }), { expirationTtl: 60 * 60 * 24 * 30 }); } catch (e) {}
  }
  return json({ completion: text, sources }, 200, cors);
}

/* Free fallback answer via Cloudflare Workers AI (Llama 3.3). Used only when the
   Anthropic call fails (e.g. prepaid credit exhausted). No web search, shorter,
   lower clinical depth than Claude — always returned flagged as fallback:true. */
async function workersAiAnswer(env, messages) {
  const msgs = (messages || []).map((m, i) => ({
    role: i === 0 ? 'system' : (m.role === 'assistant' ? 'assistant' : 'user'),
    content: typeof m.content === 'string' ? m.content : String((m.content && m.content.text) || m.content || '')
  }));
  const model = env.FALLBACK_MODEL || '@cf/meta/llama-3.3-70b-instruct-fp8-fast';
  const out = await env.AI.run(model, { messages: msgs, max_tokens: 900 });
  return (out && (out.response || out.result || out.text || '')) || '';
}

/* ---------------- Answer feedback + owner Quality Console ----------------
   POST /api/feedback  (any signed-in user)  { verdict:'up'|'down', q, answer, comment }
   GET  /api/admin/ask?what=feedback|cache   (ADMIN_EMAIL only) → { items }
   POST /api/admin/ask                        (ADMIN_EMAIL only)
        { action:'delete', key }              remove a feedback item / cached answer
        { action:'approve', key, completion? } vet a cached answer (persists, optional edit)
   Stored in the USERS KV under fb: / ans: prefixes — no new namespace needed. */
async function feedback(request, env, cors) {
  if (request.method !== 'POST') return json({ error: 'method' }, 405, cors);
  let user;
  try { user = await userFromToken(request, env); }
  catch (e) { return json({ error: 'sign_in_required' }, 401, cors); }
  const b = await request.json();
  const entry = {
    verdict: b.verdict === 'up' ? 'up' : 'down',
    q: String(b.q || '').slice(0, 500),
    answer: String(b.answer || '').slice(0, 4000),
    comment: String(b.comment || '').slice(0, 1000),
    email: user.email,
    ts: Date.now()
  };
  const key = 'fb:' + String(entry.ts).padStart(14, '0') + ':' + randHex(4);
  await env.USERS.put(key, JSON.stringify(entry), { expirationTtl: 60 * 60 * 24 * 180 });
  return json({ ok: true }, 200, cors);
}

async function requireAdmin(request, env) {
  const user = await userFromToken(request, env);
  const admin = String(env.ADMIN_EMAIL || '').trim().toLowerCase();
  if (!admin || user.email !== admin) throw fail('Admin only — set ADMIN_EMAIL in the Worker vars to your account email', 403);
  return user;
}
async function listKV(env, prefix, max) {
  const res = await env.USERS.list({ prefix, limit: max || 100 });
  const out = [];
  for (const k of res.keys) {
    const raw = await env.USERS.get(k.name);
    if (!raw) continue;
    try { out.push(Object.assign({ key: k.name }, JSON.parse(raw))); } catch (e) {}
  }
  out.sort((a, b) => (b.ts || 0) - (a.ts || 0));
  return out;
}
async function adminAsk(request, env, cors) {
  try { await requireAdmin(request, env); }
  catch (e) { return json({ error: e.message }, e.status || 401, cors); }
  if (request.method === 'GET') {
    const what = new URL(request.url).searchParams.get('what') || 'feedback';
    return json({ items: await listKV(env, what === 'cache' ? 'ans:' : 'fb:', 100) }, 200, cors);
  }
  const { action, key, completion } = await request.json();
  if (!key || !/^(fb|ans):/.test(key)) return json({ error: 'bad_key' }, 400, cors);
  if (action === 'delete') { await env.USERS.delete(key); return json({ ok: true }, 200, cors); }
  if (action === 'approve' && key.indexOf('ans:') === 0) {
    const raw = await env.USERS.get(key);
    if (!raw) return json({ error: 'not_found' }, 404, cors);
    const c = JSON.parse(raw);
    c.approved = true;
    if (completion && String(completion).trim()) c.completion = String(completion);
    await env.USERS.put(key, JSON.stringify(c)); // no TTL — vetted answers persist
    return json({ ok: true }, 200, cors);
  }
  return json({ error: 'bad_action' }, 400, cors);
}

/* ---------------- Embeddings proxy (Cloudflare Workers AI) ----------------
   Powers semantic retrieval for the Ask assistant. Free tier; needs a Workers
   AI binding named AI in wrangler.toml ([ai] binding = "AI"). If the binding
   is absent the endpoint returns 501 and the site silently falls back to
   lexical search — so this is OPTIONAL and never breaks Ask.
   Body: { texts: ["...", ...] }  →  { vectors: [[...], ...] }              */
async function embedProxy(request, env, cors) {
  // Same gate as the AI proxy (Option B: signed-in, any tier).
  try { await userFromToken(request, env); }
  catch (e) { return json({ error: 'sign_in_required' }, 401, cors); }
  if (!env.AI || typeof env.AI.run !== 'function') return json({ error: 'embeddings_unavailable' }, 501, cors);
  const { texts } = await request.json();
  const list = Array.isArray(texts) ? texts.map(t => String(t || '').slice(0, 512)).filter(Boolean) : [];
  if (!list.length) return json({ error: 'no_texts' }, 400, cors);
  const model = env.EMBED_MODEL || '@cf/baai/bge-base-en-v1.5';
  try {
    const out = await env.AI.run(model, { text: list });
    const vectors = (out && out.data) ? out.data : [];
    return json({ vectors }, 200, cors);
  } catch (e) {
    return json({ error: 'embed_failed' }, 502, cors);
  }
}

/* ---------------- PayPal subscription webhook ---------------- */
async function paypalAccessToken(env) {
  const basic = btoa(`${env.PAYPAL_CLIENT_ID}:${env.PAYPAL_SECRET}`);
  const r = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: 'POST',
    headers: { 'Authorization': `Basic ${basic}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'grant_type=client_credentials'
  });
  const d = await r.json();
  return d.access_token;
}
async function paypalWebhook(request, env) {
  const bodyText = await request.text();
  const headers = request.headers;
  const access = await paypalAccessToken(env);

  // Verify the event really came from PayPal
  const verifyRes = await fetch(`${PAYPAL_API}/v1/notifications/verify-webhook-signature`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${access}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      auth_algo: headers.get('paypal-auth-algo'),
      cert_url: headers.get('paypal-cert-url'),
      transmission_id: headers.get('paypal-transmission-id'),
      transmission_sig: headers.get('paypal-transmission-sig'),
      transmission_time: headers.get('paypal-transmission-time'),
      webhook_id: env.PAYPAL_WEBHOOK_ID,
      webhook_event: JSON.parse(bodyText)
    })
  });
  const verify = await verifyRes.json();
  if (verify.verification_status !== 'SUCCESS') return new Response('bad signature', { status: 400 });

  const event = JSON.parse(bodyText);
  const type = event.event_type || '';
  const res = event.resource || {};
  // custom_id is set when the subscription is created on the site = the user's email
  const email = (res.custom_id || (res.subscriber && res.subscriber.email_address) || '').trim().toLowerCase();
  if (!email) return new Response('no user', { status: 200 });
  const raw = await env.USERS.get(email);
  if (!raw) return new Response('unknown user', { status: 200 });
  const user = JSON.parse(raw);

  if (type === 'BILLING.SUBSCRIPTION.ACTIVATED' || type === 'BILLING.SUBSCRIPTION.UPDATED' || type === 'PAYMENT.SALE.COMPLETED') {
    const tier = tierFromPlan(res.plan_id, env);
    if (tier) { user.tier = tier; user.sub = { id: res.id, plan: res.plan_id, status: res.status, ts: Date.now() }; }
  } else if (type === 'BILLING.SUBSCRIPTION.CANCELLED' || type === 'BILLING.SUBSCRIPTION.EXPIRED' || type === 'BILLING.SUBSCRIPTION.SUSPENDED') {
    user.tier = 'bronze';
    if (user.sub) user.sub.status = 'cancelled';
  }
  await env.USERS.put(email, JSON.stringify(user));
  return new Response('ok', { status: 200 });
}
