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
     • Manage my plan (/api/plan, /api/plan/pause|resume|cancel) and
       the owner's /api/admin/plan — pause, resume and cancel the
       member's PayPal subscription. See the block at the end.
     • Searches with no results (/api/search-miss, owner view
       /api/search-misses) — anonymous monthly counts of search words.
     • Handbook shop (/api/shop/order|capture|purchases) and paid
       downloads (/api/download/<id>, e.g. the Lab Results Handbook PDF)
       — one-off £20 PayPal purchases, NOT part of any plan; the file is
       streamed from a private R2 bucket (binding DOWNLOADS) to its buyer.
       See the block before the webhook.

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
const PAYPAL_SANDBOX_API = 'https://api-m.sandbox.paypal.com';
// Set PAYPAL_MODE = "sandbox" in wrangler.toml [vars] (with sandbox secrets) to
// send EVERY PayPal call — webhook verification, plan look-ups and the
// Manage-my-plan actions — to the sandbox together. Unset = live.
function ppBase(env) { return String((env && env.PAYPAL_MODE) || '').trim().toLowerCase() === 'sandbox' ? PAYPAL_SANDBOX_API : PAYPAL_API; }

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
      if (url.pathname === '/api/referral')       return await referral(request, env, cors);
      if (url.pathname === '/api/plan')           return await planGet(request, env, cors);
      if (url.pathname === '/api/plan/pause')     return await planAction(request, env, cors, 'pause');
      if (url.pathname === '/api/plan/resume')    return await planAction(request, env, cors, 'resume');
      if (url.pathname === '/api/plan/cancel')    return await planAction(request, env, cors, 'cancel');
      if (url.pathname === '/api/admin/plan')     return await adminPlan(request, env, cors);
      if (url.pathname === '/api/admin/codes')    return await adminCodes(request, env, cors);
      if (url.pathname === '/api/admin/user')     return await adminUser(request, env, cors);
      if (url.pathname === '/api/admin/stats')    return await adminStats(request, env, cors);
      if (url.pathname === '/api/ai')             return await aiProxy(request, env, cors);
      if (url.pathname === '/api/embed')          return await embedProxy(request, env, cors);
      if (url.pathname === '/api/feedback')       return await feedback(request, env, cors);
      if (url.pathname === '/api/admin/ask')      return await adminAsk(request, env, cors);
      if (url.pathname === '/api/updates')        return await updatesFeed(request, env, cors);
      if (url.pathname === '/api/updates/archive') return await updatesArchive(request, env, cors);
      if (url.pathname === '/api/search-miss')    return await searchMiss(request, env, cors);
      if (url.pathname === '/api/search-misses')  return await searchMisses(request, env, cors);
      if (url.pathname === '/api/shop/order')     return await shopOrder(request, env, cors);
      if (url.pathname === '/api/shop/capture')   return await shopCapture(request, env, cors);
      if (url.pathname === '/api/shop/purchases') return await shopPurchases(request, env, cors);
      if (url.pathname.startsWith('/api/download/')) return await paidDownload(request, env, cors, url.pathname.slice('/api/download/'.length));
      if (url.pathname === '/api/paypal/webhook') return await paypalWebhook(request, env);
      if (url.pathname === '/api/health')         return json({ ok: true }, 200, cors);
      return json({ error: 'Not found' }, 404, cors);
    } catch (e) {
      return json({ error: e.message || 'Server error' }, e.status || 400, cors);
    }
  },

  // Cron Triggers (wrangler.toml): every run restarts paused plans whose pause
  // has ended; the daily 07:00 run also warms the updates cache.
  async scheduled(event, env, ctx) {
    ctx.waitUntil(resumeDuePlans(env).catch(() => {}));
    if (event && event.cron && event.cron !== '0 7 * * *') return;
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
    'Access-Control-Allow-Methods': 'POST, GET, DELETE, OPTIONS',
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
  tierSource: u.tierSource || '',
  // Expose just enough of the subscription for the account menu to show the
  // renewal date — never the PayPal ids beyond the subscription reference.
  sub: u.sub ? { status: u.sub.status || '', nextBilling: u.sub.nextBilling || null, id: u.sub.id || '',
                 resumeAt: (u.pause && u.pause.resumeAt) || null, pausedFrom: (u.pause && u.pause.from) || null } : null,
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
  const user = await maybeAutoResume(await userFromToken(request, env), env);
  return { user: publicUser(user, env) };
}

/* ---------------- per-user data sync (e.g. Scribe consultations, CPD log) ----------------
   GET    /api/data?k=scribe                -> { data, ts }   (null data if never saved)
   POST   /api/data?k=scribe {data}         -> { ok, ts }
   POST   /api/data?k=cpd {data, baseTs}    -> { ok, ts }, or 409 { error, data, ts } when the
          stored copy changed since baseTs (the client merges and retries — no lost updates)
   DELETE /api/data?k=cpd                   -> { ok }   (user deletes their own server copy)
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
    let ts = Date.now();
    if (JSON.stringify({ data: body.data ?? null, ts }).length > 800 * 1024) return json({ error: 'Too large to sync (800 KB limit) — delete some old items.' }, 413, cors);
    // Optional optimistic concurrency: a client that sends baseTs (the ts it last read)
    // is told about a newer write from another device instead of overwriting it.
    if (body.baseTs !== undefined && body.baseTs !== null) {
      const curRaw = await env.USERS.get(kvKey);
      if (curRaw) {
        let cur = null; try { cur = JSON.parse(curRaw); } catch (e) {}
        if (cur && cur.ts && cur.ts !== Number(body.baseTs)) return json({ error: 'conflict', data: cur.data, ts: cur.ts }, 409, cors);
        if (cur && cur.ts >= ts) ts = cur.ts + 1;
      }
    }
    await env.USERS.put(kvKey, JSON.stringify({ data: body.data ?? null, ts }));
    return json({ ok: true, ts }, 200, cors);
  }
  if (request.method === 'DELETE') {
    await env.USERS.delete(kvKey);
    return json({ ok: true }, 200, cors);
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
  // Only ever UPGRADE — never shorten access or downgrade a tier a member already
  // holds. So an existing annual member who also redeems a 7-day trial keeps their
  // annual access. Shared with the referral path via grantWindow() so the two
  // cannot drift apart.
  grantWindow(user, meta.tier, meta.days, 'code:' + c);
  await env.USERS.put(user.email, JSON.stringify(user));
  return json({ ok: true, user: publicUser(user, env) }, 200, cors);
}

/* ---------------- referrals: give a month, get a month ----------------
   GET  /api/referral            -> { code, claimed, earned, canClaim }
   POST /api/referral {code}     -> claims someone else's code

   KV keys (both in USERS):
     ref:<CODE>        = owner email        (the code -> owner index)
     a user record gains: refCode, refEarned, refClaimedFrom

   Rules, deliberately conservative because this grants paid access for free:
     • you cannot claim your own code
     • an account can claim ONCE, ever (refClaimedFrom is permanent)
     • only an account that has NEVER held paid access can claim, so an
       existing subscriber cannot top themselves up via a friend's code
     • no cap on how many months a referrer can earn (owner's decision)
   Both sides get PLATINUM for 30 days, applied through grantWindow() so the
   upgrade-only rules are identical to code redemption — nobody is ever
   downgraded or has their access shortened by a referral.                     */
const REF_DAYS = 30;
const REF_MAX_EARNED = 3;   // referrer credit stops after 3 successful claims (3 months)
const REF_AB = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no I/O/0/1 — read aloud safely

/* Shared with redeemCode's semantics: only ever extend or upgrade.
   `additive` is for earned credit (referrals) rather than granted access (codes).
   A code must never shorten existing access, so it takes the LATER of the two
   expiries. A referral credit is different — it was earned on top of whatever the
   member already holds, so it ADDS to the end of their current period.
   While a PayPal subscription is live the member has no expiry at all
   (tierUntil === null), so there is nothing to add to: the days are banked in
   refCreditDays and released by the webhook when the subscription ends. */
function grantWindow(user, tier, days, source, opts) {
  const additive = !!(opts && opts.additive);
  const RANK = { silver: 1, gold: 2, platinum: 3 };
  const newTier = ['silver', 'gold', 'platinum'].includes(tier) ? tier : 'platinum';
  const newUntil = days ? Date.now() + days * 864e5 : null;
  const curTier = ['silver', 'gold', 'platinum'].includes(user.tier) ? user.tier : null;
  const curUntil = user.tierUntil || null;
  const curActive = curTier && (!curUntil || curUntil > Date.now());
  user.tier = (curActive && RANK[curTier] >= RANK[newTier]) ? curTier : newTier;
  if (additive && days) {
    if (!curActive) user.tierUntil = newUntil;                                        // nothing live — start now
    else if (curUntil === null) user.refCreditDays = (user.refCreditDays || 0) + days; // bank it
    else user.tierUntil = curUntil + days * 864e5;                                    // add to the end
  } else if (!curActive) {
    user.tierUntil = newUntil;
  } else if (curUntil === null || newUntil === null) {
    user.tierUntil = null;
  } else {
    user.tierUntil = Math.max(curUntil, newUntil);
  }
  // Record where the access came from, preserving any earlier source so stacked
  // access is visible. The append is IDEMPOTENT: without the indexOf guard a
  // prolific referrer accumulates 'paypal+referral-credit+referral-credit+…',
  // which is exposed by publicUser() and rendered in the admin lookup — the
  // record degrades exactly as the scheme succeeds. refEarned is the count;
  // tierSource only needs to say the kinds of access held.
  if (!curActive || !user.tierSource) user.tierSource = source;
  else if (String(user.tierSource).split('+').indexOf(source) === -1) user.tierSource = user.tierSource + '+' + source;
  return user;
}

/* Earned/granted time lives in TWO places depending on account state: a dated
   window in `tierUntil`, or banked days in `refCreditDays` when there is no
   window to extend (a live subscription has no expiry at all). Every transition
   between those states therefore has to convert — and a missed conversion
   silently destroys access the member is entitled to.

   This helper owns the conversion so the rule exists in one place. Call it at
   any point that is about to clear `tierUntil`: it moves whatever time was left
   into the bank, which the REVOKE handlers already know how to release. */
function bankRemaining(user) {
  const until = user.tierUntil || null;
  if (!until || until <= Date.now()) return user;
  const days = Math.ceil((until - Date.now()) / 864e5);
  user.refCreditDays = Math.min(730, (user.refCreditDays || 0) + days); // 2-year sanity cap
  return user;
}

/* Has this account ever paid or been granted access? Used to keep referral
   claims to genuinely new accounts. */
function hasHeldPaidAccess(u) {
  return !!(u.sub || u.tierSource || (u.tier && u.tier !== 'bronze'));
}

async function referral(request, env, cors) {
  let user;
  try { user = await userFromToken(request, env); }
  catch (e) { return json({ error: e.message }, e.status || 401, cors); }

  /* --- issue (or return) this account's own code --- */
  if (request.method === 'GET') {
    if (!user.refCode) {
      let code = null;
      for (let i = 0; i < 6 && !code; i++) {
        let c = 'RGP-';
        const r = crypto.getRandomValues(new Uint8Array(6));
        for (const b of r) c += REF_AB[b % REF_AB.length];
        if (!(await env.USERS.get('ref:' + c))) code = c;
      }
      if (!code) return json({ error: 'Could not allocate a code — please try again.' }, 500, cors);
      user.refCode = code;
      await env.USERS.put('ref:' + code, user.email);
      await env.USERS.put(user.email, JSON.stringify(user));
    }
    return json({
      code: user.refCode,
      earned: user.refEarned || 0,
      max: REF_MAX_EARNED,
      claimed: !!user.refClaimedFrom,
      canClaim: !user.refClaimedFrom && !hasHeldPaidAccess(user),
      days: REF_DAYS
    }, 200, cors);
  }

  if (request.method !== 'POST') return json({ error: 'method' }, 405, cors);

  /* --- claim someone else's code --- */
  const body = await request.json().catch(() => ({}));
  const c = String(body.code || '').trim().toUpperCase().replace(/[^A-Z0-9-]/g, '');
  if (!c) return json({ error: 'Enter the code you were given.' }, 400, cors);
  if (user.refCode && c === user.refCode) return json({ error: 'That’s your own code — share it with a colleague instead.' }, 400, cors);
  if (user.refClaimedFrom) return json({ error: 'You’ve already used a referral code on this account.' }, 409, cors);
  if (hasHeldPaidAccess(user)) return json({ error: 'Referral codes are for new accounts — yours already has access.' }, 409, cors);

  const ownerEmail = await env.USERS.get('ref:' + c);
  if (!ownerEmail) return json({ error: 'That referral code isn’t valid — check it and try again.' }, 404, cors);
  if (ownerEmail === user.email) return json({ error: 'That’s your own code — share it with a colleague instead.' }, 400, cors);

  const ownerRaw = await env.USERS.get(ownerEmail);
  if (!ownerRaw) return json({ error: 'That code’s account no longer exists.' }, 410, cors);
  const owner = JSON.parse(ownerRaw);

  /* Referee first: if this write succeeds but the referrer credit fails, the
     person who just typed the code still gets what they were promised. */
  user.refClaimedFrom = c;
  grantWindow(user, 'platinum', REF_DAYS, 'referral:' + c);
  await env.USERS.put(user.email, JSON.stringify(user));

  /* Then the referrer's free month — capped at REF_MAX_EARNED. The claim is still
     recorded and the claimer still gets their month; only the referrer's credit
     stops. */
  owner.refClaims = (owner.refClaims || []).concat({ email: user.email, ts: Date.now() }).slice(-500);
  if ((owner.refEarned || 0) < REF_MAX_EARNED) {
    owner.refEarned = (owner.refEarned || 0) + 1;
    grantWindow(owner, 'platinum', REF_DAYS, 'referral-credit', { additive: true });
  }
  await env.USERS.put(ownerEmail, JSON.stringify(owner));

  return json({ ok: true, days: REF_DAYS, user: publicUser(user, env) }, 200, cors);
}

/* Admin: how many accounts exist, split by tier + how many are recently active.
   GET /api/admin/stats -> { total, tiers:{}, active7, active30, paying }        */
async function adminStats(request, env, cors) {
  try { await requireAdmin(request, env); }
  catch (e) { return json({ error: e.message }, e.status || 401, cors); }
  const tiers = { bronze: 0, silver: 0, gold: 0, platinum: 0 };
  let total = 0, active7 = 0, active30 = 0, paying = 0, expired = 0;
  const members = [];
  const now = Date.now();
  let cursor;
  // Accounts are stored under their email; skip our prefixed bookkeeping keys.
  for (let i = 0; i < 40; i++) {
    const res = await env.USERS.list({ limit: 1000, cursor });
    for (const k of res.keys) {
      if (k.name.indexOf(':') !== -1) continue; // code:, payissue:, store:, grp: …
      if (k.name.indexOf('@') === -1) continue;
      total++;
      const raw = await env.USERS.get(k.name);
      if (!raw) continue;
      let u; try { u = JSON.parse(raw); } catch (e) { continue; }
      const t = ['silver', 'gold', 'platinum'].indexOf(u.tier) !== -1 ? u.tier : 'bronze';
      const live = t !== 'bronze' && (!u.tierUntil || u.tierUntil > now);
      tiers[live ? t : 'bronze']++;
      if (live) paying++;
      if (t !== 'bronze' && u.tierUntil && u.tierUntil <= now) expired++;
      const seen = u.lastSeen || u.lastLogin || u.created || 0;
      if (seen > now - 7 * 864e5) active7++;
      if (seen > now - 30 * 864e5) active30++;
      members.push({
        email: u.email || k.name, name: u.name || '', stage: u.stage || '',
        tier: live ? t : 'bronze', until: u.tierUntil || null,
        source: u.tierSource || '', created: u.created || 0, seen: seen
      });
    }
    if (!res.list_complete && res.cursor) cursor = res.cursor; else break;
  }
  members.sort((a, b) => (b.created || 0) - (a.created || 0));
  return json({ total, tiers, paying, expired, active7, active30, members }, 200, cors);
}

/* Admin: look up a member and set their tier by hand (ADMIN_EMAIL only).
   GET  /api/admin/user?email=someone@nhs.net        -> { user }
   POST /api/admin/user { email, tier, until? }      -> { ok, user }
   Used to rescue a customer whose payment webhook didn't apply.            */
async function adminUser(request, env, cors) {
  try { await requireAdmin(request, env); }
  catch (e) { return json({ error: e.message }, e.status || 401, cors); }
  const url = new URL(request.url);
  if (request.method === 'GET') {
    const email = String(url.searchParams.get('email') || '').trim().toLowerCase();
    if (!email) {
      // No email = return the recent payment-issue trail, so it's possible to see
      // whether PayPal webhooks are arriving at all and why they didn't apply.
      const rows = await listKV(env, 'payissue:', 50);
      return json({ payIssues: rows }, 200, cors);
    }
    const raw = await env.USERS.get(email);
    if (!raw) return json({ error: 'no such user' }, 404, cors);
    const u = JSON.parse(raw);
    const adminEmail = String(env.ADMIN_EMAIL || '').trim().toLowerCase();
    return json({
      user: u,
      effectiveTier: effectiveTier(u, env),
      isAdmin: !!adminEmail && u.email === adminEmail
    }, 200, cors);
  }
  if (request.method !== 'POST') return json({ error: 'method' }, 405, cors);
  const b = await request.json();
  const email = String(b.email || '').trim().toLowerCase();
  const tier = String(b.tier || '').trim().toLowerCase();
  if (!email) return json({ error: 'email required' }, 400, cors);
  if (['bronze', 'silver', 'gold', 'platinum'].indexOf(tier) === -1) return json({ error: 'bad tier' }, 400, cors);
  const raw = await env.USERS.get(email);
  if (!raw) return json({ error: 'no such user' }, 404, cors);
  const user = JSON.parse(raw);
  user.tier = tier;
  // days = a dated grant (e.g. 30 for a month someone paid for outside PayPal);
  // until = an explicit timestamp; neither = open-ended access.
  const days = Number(b.days || 0);
  user.tierUntil = days > 0 ? Date.now() + days * 864e5 : (b.until ? Number(b.until) : null);
  user.tierSource = 'admin';
  delete user.payIssue;
  await env.USERS.put(email, JSON.stringify(user));
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
  { src:'Prescriber', tag:'\uD83D\uDCDD Prescriber', url:'https://www.prescriber.org.uk/feed/' }
];
function decodeEnt(s){
  return String(s||'')
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>')
    .replace(/&quot;/g,'"').replace(/&#0?39;/g,"'").replace(/&#x27;/gi,"'").replace(/&nbsp;/g,' ')
    .replace(/\s+/g,' ').trim();
}
// Feed items that report changes to secondary summary services are not NICE updates — drop them.
const SUMMARY_SRC_RE = /\bCKS\b|Clinical Knowledge Summar|cks\.nice\.org\.uk/i;
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
    if(title && link && !SUMMARY_SRC_RE.test(title + ' ' + summary)){
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
    .filter(it => !SUMMARY_SRC_RE.test((it.title||'') + ' ' + (it.summary||'')))
    .sort((a, b) => itemTime(b) - itemTime(a))
    .slice(0, 600);
  await env.UPDATES.put(ARCHIVE_KEY, JSON.stringify(merged));
}
async function updatesArchive(request, env, cors){
  let items = await getArchive(env);
  items = items.filter(it => !SUMMARY_SRC_RE.test((it.title||'') + ' ' + (it.summary||'')));
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
    ansKey = 'ans:' + hex(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(model + '|p12|' + norm)));
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
      // NOTE: the allow-list works per domain and cannot exclude a subdomain, so
      // 'nice.org.uk' also permits its summary subdomains. The system prompt
      // (assets/ask-core.js, PERMITTED NICE HOSTS) therefore limits the model to
      // www.nice.org.uk and bnf.nice.org.uk, treats any other nice.org.uk subdomain
      // as absent — no practicality exception — and credits NICE for the guidance.
      // Do NOT add summary/aggregator search services here beyond medwise.ai (they
      // reintroduce the same third-party content at one remove, under their own terms).
      'nice.org.uk',            // NICE + BNF (nice./bnf. subdomains included)
      'fsrh.org',               // FSRH — UKMEC + contraception guidance (legacy domain)
      'cosrh.org',              // CoSRH (formerly FSRH) — UKMEC 2025 lives here
      'medicines.org.uk',       // emc — SPCs (licensed doses, contraindications)
      'sign.ac.uk',
      'gov.uk',                 // UKHSA, MHRA Drug Safety Update, Green Book
      'brit-thoracic.org.uk',
      'bashh.org',
      'rcog.org.uk',
      'bad.org.uk',
      'bihsoc.org',
      'resus.org.uk',
      'ginasthma.org',
      'medwise.ai'              // Medwise AI — UK clinical search; cite as "Medwise AI" and
                                // follow through to the primary guideline it surfaces
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

/* ---------------- Searches with no results (anonymous) ----------------
   POST /api/search-miss  {q}                (public; sent by the site search with
                                              navigator.sendBeacon as text/plain)
   GET  /api/search-misses?month=YYYY-MM     (ADMIN_EMAIL only — requireAdmin, exactly
                                              like the other /api/admin/* endpoints)
   What is kept: the search words and how many times they were searched, per
   calendar month, in the existing USERS KV under miss:YYYY-MM — nothing else.
   No IP address, account, cookie, page or time beyond the month. Each month's
   key expires automatically 12 months after that month ends.
   The words are filtered again here (the browser already did it): lower-case,
   spaces collapsed, max 60 characters, and dropped entirely if they contain a
   run of 6+ digits, an email address, a UK postcode or a date.
   At most MISS_MAX_TERMS different searches a month; past that only a count.
   Rate limit: MISS_RL_MAX a minute per visitor, counted against a salted hash
   of the IP address in a KV key that expires after 60 seconds (the same
   KV-with-expiry pattern as planRateLimit). The IP itself is never stored.
   Always answers 204 so the browser learns nothing. No new KV namespace. */
const MISS_MAX_TERMS = 2000;
const MISS_RL_MAX = 20;
let MISS_SALT_RUNTIME = '';   // made on first use (random values are not allowed at global scope); used when no MISS_SALT secret is set
// Same rules in the browser (assets/site-search.js) and the Worker (backend/worker.js).
var MISS_MON = '(?:jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|june?|july?|aug(?:ust)?|sept?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)';
var MISS_DROP = [
  /\d(?:[\s.\/-]?\d){5,}/,                                                    // 6+ digits in a row (NHS number, phone, hospital number)
  /@/,                                                                         // email address
  /\b[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}\b/,                                     // UK postcode (sw1a 1aa, m1 1ae)
  /\b\d{1,2}([\/.-])\d{1,2}\1\d{2,4}\b|\b\d{4}([\/.-])\d{1,2}\2\d{1,2}\b/,      // 12/03/1980, 1980-03-12
  new RegExp('\\b\\d{1,2}(?:st|nd|rd|th)?\\s+(?:of\\s+)?' + MISS_MON + '\\b'),   // 12 march, 1st of may
  new RegExp('\\b' + MISS_MON + '\\.?\\s+(?:\\d{1,2}(?:st|nd|rd|th)?,?\\s+)?(?:19|20)\\d\\d\\b') // march 1980, march 12, 1980
];
function missClean(q){
  var s = String(q == null ? '' : q).toLowerCase().replace(/[\u0000-\u001f<>"`\\]/g, ' ').replace(/\s+/g, ' ').trim();
  if (s.length < 3) return '';
  for (var i = 0; i < MISS_DROP.length; i++) if (MISS_DROP[i].test(s)) return '';
  return s.slice(0, 60).trim();
}
function missMonth(d) { d = d || new Date(); return d.getUTCFullYear() + '-' + String(d.getUTCMonth() + 1).padStart(2, '0'); }
// expire 12 months after the END of the month (first day of month + 13 months)
function missExpiry(month) { const [y, m] = month.split('-').map(Number); return Math.floor(Date.UTC(y, m - 1 + 13, 1) / 1000); }
async function missRateOk(request, env) {
  const ip = request.headers.get('CF-Connecting-IP') || '';
  if (!ip) return true;
  if (!env.MISS_SALT && !MISS_SALT_RUNTIME) MISS_SALT_RUNTIME = randHex(16);
  const salt = String(env.MISS_SALT || MISS_SALT_RUNTIME);
  const h = hex(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(salt + '|' + missMonth() + '|' + ip))).slice(0, 24);
  const k = 'missrl:' + h;
  let n = 0;
  try { n = parseInt((await env.USERS.get(k)) || '0', 10) || 0; } catch (e) {}
  if (n >= MISS_RL_MAX) return false;
  await env.USERS.put(k, String(n + 1), { expirationTtl: 60 });
  return true;
}
async function searchMiss(request, env, cors) {
  if (request.method !== 'POST') return json({ error: 'method' }, 405, cors);
  const done = new Response(null, { status: 204, headers: cors });
  // only the site itself may report (the browser sends Origin on a beacon)
  const allowed = String(env.ALLOWED_ORIGIN || '').split(',').map(s => s.trim()).filter(Boolean);
  if (allowed.length && !allowed.includes(request.headers.get('Origin') || '')) return done;
  if (!env.USERS) return done;
  let term = '';
  try {
    const raw = (await request.text()).slice(0, 2000);
    term = missClean(JSON.parse(raw).q);
  } catch (e) { return done; }
  if (!term) return done;
  try {
    if (!(await missRateOk(request, env))) return done;
    const month = missMonth();
    const key = 'miss:' + month;
    let rec = null;
    try { rec = JSON.parse((await env.USERS.get(key)) || 'null'); } catch (e) {}
    if (!rec || typeof rec.terms !== 'object' || !rec.terms) rec = { month, terms: {}, overflow: 0 };
    if (Object.prototype.hasOwnProperty.call(rec.terms, term)) rec.terms[term] = (Number(rec.terms[term]) || 0) + 1;
    else if (Object.keys(rec.terms).length < MISS_MAX_TERMS) rec.terms[term] = 1;
    else rec.overflow = (Number(rec.overflow) || 0) + 1;
    await env.USERS.put(key, JSON.stringify(rec), { expiration: missExpiry(month) });
  } catch (e) {}
  return done;
}
async function searchMisses(request, env, cors) {
  try { await requireAdmin(request, env); }
  catch (e) { return json({ error: e.message }, e.status || 401, cors); }
  if (request.method !== 'GET') return json({ error: 'method' }, 405, cors);
  let month = String(new URL(request.url).searchParams.get('month') || '').trim();
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month)) month = missMonth();
  let rec = null;
  try { rec = JSON.parse((await env.USERS.get('miss:' + month)) || 'null'); } catch (e) {}
  const terms = Object.entries((rec && rec.terms) || {})
    .map(([term, count]) => ({ term, count: Number(count) || 0 }))
    .sort((a, b) => b.count - a.count || a.term.localeCompare(b.term));
  const months = [];
  try { const res = await env.USERS.list({ prefix: 'miss:', limit: 100 }); for (const k of res.keys) months.push(k.name.slice(5)); } catch (e) {}
  months.sort().reverse();
  return json({ month, terms, total: terms.reduce((s, t) => s + t.count, 0), distinct: terms.length,
                overflow: (rec && Number(rec.overflow)) || 0, cap: MISS_MAX_TERMS, months }, 200, cors);
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

/* ---------------- Handbook shop: one-off purchases (PayPal Orders v2) ----------------
   Handbooks are SEPARATE one-off purchases (£20 each). They are NOT part of any
   plan: a Silver or Platinum subscription does not include them. The individual
   Clinic Guides stay in the Clinic plans (assets/clinic-guides.js).

   PRODUCTS is THE catalogue and THE download allow-list: only ids listed here can
   be bought or downloaded, the browser never names an R2 key, and the price is
   always taken from here (never from the browser). To add a handbook (e.g. an SCA
   handbook): upload the PDF to the R2 bucket and add ONE line below
   (backend/README.md, "Handbook shop").

     POST /api/shop/order   {products:[ids], waiver:true}   signed in -> { orderId, products } | { owned:true }
          (the older {product:id} form still works: a basket of one)
          Creates ONE PayPal order server-side for the whole basket: intent CAPTURE,
          one line item per handbook at its catalogue price, the total in GBP,
          custom_id "<account email>|<id>,<id>…", no shipping. Handbooks the account
          already owns are left out; if every one is owned -> { owned:true }.
          waiver must be exactly true (400 waiver_required otherwise): the buyer
          ticked the box consenting to immediate supply and acknowledging the loss
          of the 14-day right to cancel (Consumer Contracts Regulations 2013,
          digital content). The consent is kept as waiver:<orderId> (90 days) and
          copied onto the purchase when it is recorded (see recordPurchase).
     POST /api/shop/capture {orderId}   signed in -> { ok:true, products:[ids], product }
          Captures the order and records every handbook in it only if PayPal says
          COMPLETED, in GBP, for exactly the sum of their catalogue prices, and the
          order's custom_id is this account and real products. Every handbook bought
          together shares one order number (the capture id). Repeating it is harmless.
          A capture PayPal holds as PENDING answers 202 { pending:true }: the
          PAYMENT.CAPTURE.COMPLETED webhook records it when it clears.
     GET  /api/shop/purchases          signed in -> { purchases:[ids], orders:{id:captureId}, products:{…} }
     GET  /api/download/<id>   (Authorization: Bearer <token>, like every other call)
       200  the file, streamed from the private R2 bucket bound as DOWNLOADS, with
            header X-Order-Ref = the buyer's captureId (PayPal's transaction ID, also
            on their PayPal receipt) or 'ADMIN-COPY'. The browser stamps it on every
            page of its copy (assets/clinic-guides.js); the R2 file stays the clean master.
       401  not signed in / session expired
       402  { error:'purchase_required', reason:'purchase_required', price:'20.00' }
            not bought (whatever the plan); the admin account is always allowed
       404  unknown id, or the file is not uploaded to R2 yet
       503  the DOWNLOADS binding is missing (R2 not set up yet)
   Webhook (/api/paypal/webhook, signature-verified as before):
     PAYMENT.CAPTURE.COMPLETED  records the purchase if the browser's capture call
                                was lost (closed tab, network drop)
     PAYMENT.CAPTURE.REFUNDED / PAYMENT.CAPTURE.REVERSED  remove it (a partial
                                refund keeps it; see shopWebhook)
   Refund policy: downloads are NOT refundable once available (the buyer consented
   to immediate supply), except for a faulty file (Consumer Rights Act 2015). The
   owner can still refund by hand in PayPal, e.g. for a faulty file; a full refund
   or a chargeback removes access, a partial refund keeps it.
   A full refund or reversal of a basket order removes every handbook in it.
   Stored on the user record: purchases[<id>] = { orderId, captureId, amount,
   currency, date, via, waiverAt, waiverText } (amount = that handbook's price).
   Index purchase:<captureId> = "<email>|<id>,<id>…" (for refunds). Consent record: waiver:<orderId> = { email,
   product, at, text: WAIVER_TEXT_VERSION } (USERS KV, expires after 90 days; the
   copy on the purchase is kept).
   Counts, a number only (no account, no IP), in USERS KV:
     buy:<id>:YYYY-MM  purchases per month      dl:<id>:YYYY-MM  downloads per month */
const PRODUCTS = {
  'lab-handbook': { title: 'Lab Results Handbook', price: '20.00', currency: 'GBP', r2Key: 'lab-results-handbook-v2.0.pdf', filename: 'Reasoning-GP-Lab-Results-Handbook-v2.0.pdf', type: 'application/pdf' },
  'sca-casebook-1':    { title: 'SCA Casebook Vol 1',     price: '20.00', currency: 'GBP', r2Key: 'sca-casebook-vol1-v1.0.pdf',      filename: 'Reasoning-GP-SCA-Casebook-Vol1-v1.0.pdf',      type: 'application/pdf' },
  'sca-communication': { title: 'SCA Communication Book', price: '20.00', currency: 'GBP', r2Key: 'sca-communication-book-v1.0.pdf', filename: 'Reasoning-GP-SCA-Communication-Book-v1.0.pdf', type: 'application/pdf' },
};
const SHOP_BRAND = 'Reasoning GP';
// Version of the tick-box wording the buyer agreed to (assets/clinic-guides.js,
// stateBuy). Change it whenever that wording changes, so each record says which text.
const WAIVER_TEXT_VERSION = 'v1-2026-10';
const WAIVER_TTL = 60 * 60 * 24 * 90;   // waiver:<orderId> kept 90 days (copied onto the purchase)
function productId(raw) { return String(raw || '').toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 64); }
function productOf(id) { return Object.prototype.hasOwnProperty.call(PRODUCTS, id) ? PRODUCTS[id] : null; }
function isAdminUser(user, env) {
  const admin = String((env && env.ADMIN_EMAIL) || '').trim().toLowerCase();
  return !!admin && user.email === admin;
}
function ownsProduct(user, id) { return !!(user && user.purchases && user.purchases[id] && user.purchases[id].captureId); }
function ownedIds(user) { return Object.keys((user && user.purchases) || {}).filter(id => productOf(id) && ownsProduct(user, id)); }
function sameMoney(a, b) { const x = Number(a), y = Number(b); return isFinite(x) && isFinite(y) && x.toFixed(2) === y.toFixed(2); }
// custom_id = "<email>|<id>" or, for a basket, "<email>|<id>,<id>,…". Split on the
// LAST bar so an odd email can't confuse it. Every id must be a real product, once.
function parseShopCustom(c) {
  const s = String(c || ''); const i = s.lastIndexOf('|');
  if (i <= 0) return null;
  const email = s.slice(0, i).trim().toLowerCase();
  const raw = s.slice(i + 1).split(',');
  const products = raw.map(productId);
  if (!email || !products.length) return null;
  for (let k = 0; k < products.length; k++) {
    if (!productOf(products[k]) || raw[k] !== products[k] || products.indexOf(products[k]) !== k) return null;
  }
  return { email, products, product: products[0] };
}
// Total catalogue price of a list of products, as a 2-dp string (all GBP).
function priceOf(ids) { return ids.reduce((t, id) => t + Number(PRODUCTS[id].price), 0).toFixed(2); }
const SHOP_CURRENCY = 'GBP';
async function bumpCount(env, key) {
  try { const n = parseInt((await env.USERS.get(key)) || '0', 10) || 0; await env.USERS.put(key, String(n + 1)); } catch (e) {}
}
async function paypalCall(env, access, method, path, body) {
  const r = await fetch(`${ppBase(env)}${path}`, {
    method,
    headers: Object.assign({ 'Authorization': `Bearer ${access}`, 'Content-Type': 'application/json' }, method === 'POST' ? { 'Prefer': 'return=representation' } : {}),
    body: body === undefined ? undefined : JSON.stringify(body)
  });
  const data = await r.json().catch(() => ({}));
  return { ok: r.ok, status: r.status, data };
}
/* Record a verified, completed capture on the account. Idempotent: a second call
   for the same purchase (client + webhook) changes nothing. A capture that was
   refunded is never recorded again by a late or replayed event. */
async function recordPurchase(env, email, product, rec) {
  const raw = await env.USERS.get(email);
  if (!raw) return { ok: false, why: 'unknown-user' };
  const user = JSON.parse(raw);
  if (ownsProduct(user, product)) return { ok: true, already: true, user };
  const gone = user.refundedPurchases && user.refundedPurchases[product];
  if (gone && gone.captureId === rec.captureId) return { ok: false, why: 'refunded' };
  // The buyer's tick-box consent (stored by shopOrder under the PayPal order id).
  // Read for both paths: the client capture and the webhook (which knows the
  // order id from supplementary_data when PayPal sends it).
  let waiver = null;
  if (rec.orderId) { try { waiver = JSON.parse((await env.USERS.get('waiver:' + rec.orderId)) || 'null'); } catch (e) { waiver = null; } }
  user.purchases = user.purchases || {};
  user.purchases[product] = { orderId: rec.orderId || '', captureId: rec.captureId, amount: rec.amount, currency: rec.currency, date: Date.now(), via: rec.via,
                              waiverAt: (waiver && waiver.at) || null, waiverText: (waiver && waiver.text) || null };
  await env.USERS.put(email, JSON.stringify(user));
  try { await env.USERS.put('purchase:' + rec.captureId, email + '|' + ((rec.allProducts && rec.allProducts.join(',')) || product)); } catch (e) {}
  await bumpCount(env, 'buy:' + product + ':' + missMonth());
  await logPlan(env, { email, action: 'purchase ' + product, by: rec.via === 'webhook' ? 'paypal' : 'member', sub: rec.captureId, result: 'recorded £' + rec.amount });
  return { ok: true, user };
}

async function shopOrder(request, env, cors) {
  if (request.method !== 'POST') return json({ error: 'method' }, 405, cors);
  let user;
  try { user = await userFromToken(request, env); }
  catch (e) { return json({ error: 'sign_in_required', message: e.message }, 401, cors); }
  const body = await request.json().catch(() => ({}));
  // A basket: {products:[…]}; the older single form {product} is a basket of one.
  const asked = Array.isArray(body.products) ? body.products : [body.product];
  if (!asked.length || asked.length > 20) return json({ error: 'Unknown product' }, 404, cors);
  const ids = [];
  for (const raw of asked) {
    const id = productId(raw);
    if (!productOf(id)) return json({ error: 'Unknown product' }, 404, cors);
    if (ids.indexOf(id) === -1) ids.push(id);
  }
  const want = ids.filter(id => !ownsProduct(user, id));
  if (!want.length) return json({ owned: true, product: ids[0], products: ids }, 200, cors);
  // Express consent to immediate supply + acknowledgement of losing the 14-day
  // right to cancel: required before any PayPal order is made.
  if (body.waiver !== true) return json({ error: 'waiver_required', message: 'Please tick the box to confirm you want the download now and understand it is then not refundable unless the file is faulty.' }, 400, cors);
  const custom = user.email + '|' + want.join(',');
  if (custom.length > 127) return json({ error: 'Your email address is too long for PayPal. Please email bassamomda@gmail.com to buy.' }, 400, cors);
  const access = await paypalAccessToken(env);
  if (!access) return json({ error: 'Couldn’t reach PayPal just now. Please try again in a few minutes.' }, 502, cors);
  const total = { currency_code: SHOP_CURRENCY, value: priceOf(want) };
  const r = await paypalCall(env, access, 'POST', '/v2/checkout/orders', {
    intent: 'CAPTURE',
    purchase_units: [{
      reference_id: want.length === 1 ? want[0] : 'basket',
      description: (want.length === 1 ? PRODUCTS[want[0]].title : want.length + ' handbooks') + ' (PDF, one-off purchase)',
      custom_id: custom,
      amount: Object.assign({}, total, { breakdown: { item_total: total } }),
      items: want.map(id => ({ name: PRODUCTS[id].title, quantity: '1', sku: id, category: 'DIGITAL_GOODS',
                               unit_amount: { currency_code: SHOP_CURRENCY, value: PRODUCTS[id].price } }))
    }],
    application_context: { brand_name: SHOP_BRAND, shipping_preference: 'NO_SHIPPING', user_action: 'PAY_NOW' }
  });
  if (!r.ok || !r.data.id) {
    await logPayIssue(env, 'shop-order-failed:' + r.status, 'shop/order', { id: want.join(',') });
    return json({ error: 'PayPal didn’t accept the order. Please try again, or email bassamomda@gmail.com.' }, 502, cors);
  }
  // Record the consent against this order (recordPurchase copies it onto each purchase).
  try {
    await env.USERS.put('waiver:' + r.data.id, JSON.stringify({ email: user.email, product: want.join(','), at: Date.now(), text: WAIVER_TEXT_VERSION }), { expirationTtl: WAIVER_TTL });
  } catch (e) { await logPayIssue(env, 'shop-waiver-not-stored:' + user.email, 'shop/order', { id: r.data.id }); }
  return json({ orderId: r.data.id, products: want }, 200, cors);
}

/* Pull the first capture out of an order (a capture response or GET order). */
function captureOfOrder(order) {
  const pu = (order && order.purchase_units && order.purchase_units[0]) || {};
  const cap = (pu.payments && pu.payments.captures && pu.payments.captures[0]) || null;
  return { pu, cap };
}

async function shopCapture(request, env, cors) {
  if (request.method !== 'POST') return json({ error: 'method' }, 405, cors);
  let user;
  try { user = await userFromToken(request, env); }
  catch (e) { return json({ error: 'sign_in_required', message: e.message }, 401, cors); }
  const body = await request.json().catch(() => ({}));
  const orderId = String(body.orderId || '').replace(/[^A-Za-z0-9-]/g, '').slice(0, 64);
  if (!orderId) return json({ error: 'Missing orderId' }, 400, cors);
  const access = await paypalAccessToken(env);
  if (!access) return json({ error: 'Couldn’t reach PayPal just now. Please try again in a few minutes.' }, 502, cors);

  // 1. Read the order first: it must have been made for THIS account and a real product.
  const got = await paypalCall(env, access, 'GET', '/v2/checkout/orders/' + encodeURIComponent(orderId));
  if (!got.ok) return json({ error: 'Order not found' }, 404, cors);
  const want = parseShopCustom(captureOfOrder(got.data).pu.custom_id);
  if (!want || want.email !== user.email) return json({ error: 'This order belongs to a different account.' }, 403, cors);
  if (want.products.every(id => ownsProduct(user, id))) return json({ ok: true, product: want.product, products: want.products, already: true }, 200, cors);

  // 2. Capture (or, if it was already captured, read the existing capture back).
  let order = got.data;
  if (String(order.status).toUpperCase() !== 'COMPLETED') {
    const cr = await paypalCall(env, access, 'POST', '/v2/checkout/orders/' + encodeURIComponent(orderId) + '/capture', {});
    if (cr.ok) order = cr.data;
    else {
      const again = await paypalCall(env, access, 'GET', '/v2/checkout/orders/' + encodeURIComponent(orderId));
      if (again.ok && String(again.data.status).toUpperCase() === 'COMPLETED') order = again.data;
      else {
        const issue = (cr.data && cr.data.details && cr.data.details[0] && cr.data.details[0].issue) || cr.status;
        await logPayIssue(env, 'shop-capture-failed:' + issue + ':' + user.email, 'shop/capture', { id: orderId });
        const declined = issue === 'INSTRUMENT_DECLINED';
        return json({ error: declined ? 'instrument_declined' : 'capture_failed',
                      message: declined ? 'Your card or bank declined the payment. Please try another way to pay.' : 'The payment didn’t go through. Nothing has been charged. Please try again.' }, declined ? 402 : 502, cors);
      }
    }
  }

  // 3. Verify what PayPal says was actually paid.
  const { pu, cap } = captureOfOrder(order);
  const custom = parseShopCustom((cap && cap.custom_id) || pu.custom_id || captureOfOrder(got.data).pu.custom_id);
  const amt = (cap && cap.amount) || {};
  const problems = [];
  if (!cap) problems.push('no capture');
  if (!custom || custom.email !== user.email || custom.products.join(',') !== want.products.join(',')) problems.push('custom_id');
  if (String(amt.currency_code || '').toUpperCase() !== SHOP_CURRENCY) problems.push('currency ' + amt.currency_code);
  if (!sameMoney(amt.value, priceOf(want.products))) problems.push('amount ' + amt.value);
  if (problems.length) {
    await logPayIssue(env, 'shop-capture-mismatch:' + problems.join(',') + ':' + user.email, 'shop/capture', { id: orderId });
    return json({ error: 'payment_mismatch', message: 'The payment didn’t match the price. Please email bassamomda@gmail.com with your PayPal receipt and it will be sorted.' }, 409, cors);
  }
  const st = String(cap.status || '').toUpperCase();
  if (st === 'PENDING') return json({ pending: true, product: want.product, products: want.products, message: 'PayPal is still processing the payment. Your download unlocks as soon as it clears.' }, 202, cors);
  if (st !== 'COMPLETED') {
    await logPayIssue(env, 'shop-capture-status:' + st + ':' + user.email, 'shop/capture', { id: orderId });
    return json({ error: 'capture_failed', message: 'The payment didn’t complete (' + st.toLowerCase() + '). Please try again.' }, 402, cors);
  }
  for (const id of want.products) {
    const rec = await recordPurchase(env, user.email, id, { orderId, captureId: cap.id, amount: PRODUCTS[id].price, currency: SHOP_CURRENCY, via: 'client', allProducts: want.products });
    if (!rec.ok) return json({ error: 'not_recorded', message: rec.why === 'refunded' ? 'This payment was refunded.' : 'Could not record the purchase. Please email bassamomda@gmail.com.' }, 409, cors);
  }
  return json({ ok: true, product: want.product, products: want.products }, 200, cors);
}

async function shopPurchases(request, env, cors) {
  if (request.method !== 'GET') return json({ error: 'method' }, 405, cors);
  let user;
  try { user = await userFromToken(request, env); }
  catch (e) { return json({ error: 'sign_in_required', message: e.message }, 401, cors); }
  const products = {};
  for (const id of Object.keys(PRODUCTS)) products[id] = { title: PRODUCTS[id].title, price: PRODUCTS[id].price, currency: PRODUCTS[id].currency };
  // Order number per owned handbook = the PayPal capture id (on the buyer's PayPal receipt).
  const owned = ownedIds(user), orders = {};
  for (const id of owned) orders[id] = user.purchases[id].captureId;
  return json({ purchases: owned, orders, admin: isAdminUser(user, env), products }, 200, cors);
}

/* Webhook part of the shop (called from paypalWebhook AFTER the signature check). */
const SHOP_EVENTS = ['PAYMENT.CAPTURE.COMPLETED', 'PAYMENT.CAPTURE.REFUNDED', 'PAYMENT.CAPTURE.REVERSED'];
async function shopWebhook(env, type, res, access) {
  if (type === 'PAYMENT.CAPTURE.COMPLETED') {
    const c = parseShopCustom(res.custom_id);
    if (!c) { await logPayIssue(env, 'shop-webhook-no-custom', type, res); return new Response('ignored', { status: 200 }); }
    const amt = res.amount || {};
    if (String(amt.currency_code || '').toUpperCase() !== SHOP_CURRENCY || !sameMoney(amt.value, priceOf(c.products)) || String(res.status || '').toUpperCase() !== 'COMPLETED') {
      await logPayIssue(env, 'shop-webhook-mismatch:' + c.email, type, res);
      return new Response('mismatch', { status: 200 });
    }
    const orderId = (res.supplementary_data && res.supplementary_data.related_ids && res.supplementary_data.related_ids.order_id) || '';
    for (const id of c.products) {
      const rec = await recordPurchase(env, c.email, id, { orderId, captureId: res.id, amount: PRODUCTS[id].price, currency: SHOP_CURRENCY, via: 'webhook', allProducts: c.products });
      if (!rec.ok) await logPayIssue(env, 'shop-webhook-' + rec.why + ':' + c.email, type, res);
    }
    return new Response('ok', { status: 200 });
  }
  // REFUNDED: the resource is the refund; its "up" link names the capture.
  // REVERSED: usually the capture itself. Accept either.
  let captureId = null;
  const up = (res.links || []).find(l => l && l.rel === 'up' && /\/captures\//.test(String(l.href || '')));
  if (up) captureId = String(up.href).split('/captures/')[1].split(/[/?#]/)[0];
  if (!captureId && res.id && /^(REFUNDED|REVERSED|PARTIALLY_REFUNDED)$/i.test(String(res.status || ''))) captureId = res.id;
  if (!captureId) { await logPayIssue(env, 'shop-refund-no-capture', type, res); return new Response('ignored', { status: 200 }); }
  // Who bought it: our own index first, then PayPal's copy of the capture.
  let owner = parseShopCustom(await env.USERS.get('purchase:' + captureId));
  let capStatus = '';
  const cr = await paypalCall(env, access, 'GET', '/v2/payments/captures/' + encodeURIComponent(captureId));
  if (cr.ok) { capStatus = String(cr.data.status || '').toUpperCase(); if (!owner) owner = parseShopCustom(cr.data.custom_id); }
  if (!owner) owner = parseShopCustom(res.custom_id);
  if (!owner) { await logPayIssue(env, 'shop-refund-unknown:' + captureId, type, res); return new Response('ignored', { status: 200 }); }
  // Policy: no refunds once the download is available, except for a faulty file.
  // The owner can still refund by hand in PayPal (e.g. a faulty file): a full
  // refund or a reversal (chargeback) removes the handbook; a partial refund (a
  // goodwill discount) keeps it.
  if (type === 'PAYMENT.CAPTURE.REFUNDED' && capStatus === 'PARTIALLY_REFUNDED') {
    await logPlan(env, { email: owner.email, action: 'partial refund ' + owner.products.join(','), by: 'paypal', sub: captureId, result: 'kept' });
    return new Response('ok', { status: 200 });
  }
  const raw = await env.USERS.get(owner.email);
  if (!raw) { await logPayIssue(env, 'unknown-user:' + owner.email, type, res); return new Response('unknown user', { status: 200 }); }
  const user = JSON.parse(raw);
  user.refundedPurchases = user.refundedPurchases || {};
  let removed = 0;
  // Every handbook bought in this order (a basket shares one capture) loses access.
  for (const id of owner.products) {
    const cur = user.purchases && user.purchases[id];
    user.refundedPurchases[id] = Object.assign({}, cur || {}, { captureId, refunded: Date.now(), event: type });
    if (cur && (!cur.captureId || cur.captureId === captureId)) { delete user.purchases[id]; removed++; }
  }
  await env.USERS.put(owner.email, JSON.stringify(user));
  await logPlan(env, { email: owner.email, action: (type === 'PAYMENT.CAPTURE.REVERSED' ? 'reversal ' : 'refund ') + owner.products.join(','), by: 'paypal', sub: captureId, result: removed ? 'access removed' : 'no purchase on record' });
  return new Response('ok', { status: 200 });
}

/* GET /api/download/<id>: the product's file, for its buyer or the admin account. */
async function paidDownload(request, env, cors, rawId) {
  if (request.method !== 'GET') return json({ error: 'method' }, 405, cors);
  const id = productId(rawId);
  const item = productOf(id);
  if (!item) return json({ error: 'Unknown download' }, 404, cors);
  let user;
  try { user = await userFromToken(request, env); }
  catch (e) { return json({ error: 'sign_in_required', message: e.message }, 401, cors); }
  const owns = ownsProduct(user, id);
  if (!owns && !isAdminUser(user, env)) {
    return json({ error: 'purchase_required', reason: 'purchase_required', product: id, price: item.price, currency: item.currency,
                  message: 'The ' + item.title + ' is a separate one-off purchase (£' + item.price + '). It is not included in any plan.' }, 402, cors);
  }
  if (!env.DOWNLOADS) return json({ error: 'downloads_not_configured' }, 503, cors);
  const obj = await env.DOWNLOADS.get(item.r2Key);
  if (!obj) return json({ error: 'File not uploaded yet' }, 404, cors);
  await bumpCount(env, 'dl:' + id + ':' + missMonth());
  // Order number the browser stamps on every page: the buyer's PayPal capture id
  // (their PayPal receipt shows the same transaction ID), or ADMIN-COPY.
  const orderRef = owns ? String(user.purchases[id].captureId) : 'ADMIN-COPY';
  const headers = Object.assign({}, cors, {
    'Content-Type': item.type || 'application/octet-stream',
    'Content-Disposition': 'attachment; filename="' + item.filename + '"',
    'Cache-Control': 'private, no-store',
    'X-Content-Type-Options': 'nosniff',
    'X-Order-Ref': orderRef,
    'Access-Control-Expose-Headers': 'Content-Disposition, Content-Length, X-Order-Ref'
  });
  if (obj.size != null) headers['Content-Length'] = String(obj.size);
  return new Response(obj.body, { status: 200, headers });
}

/* ---------------- PayPal subscription webhook ---------------- */
async function paypalAccessToken(env) {
  const basic = btoa(`${env.PAYPAL_CLIENT_ID}:${env.PAYPAL_SECRET}`);
  const r = await fetch(`${ppBase(env)}/v1/oauth2/token`, {
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
  const verifyRes = await fetch(`${ppBase(env)}/v1/notifications/verify-webhook-signature`, {
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
  const verify = await verifyRes.json().catch(() => ({}));
  if (verify.verification_status !== 'SUCCESS') {
    // Log it: a wrong PAYPAL_WEBHOOK_ID (or one from a different PayPal app) makes
    // every real payment fail here silently, which is the usual cause of
    // "customer paid but has no access".
    let ev = {}; try { ev = JSON.parse(bodyText); } catch (e) {}
    await logPayIssue(env, 'signature-failed:' + (verify.verification_status || verifyRes.status), ev.event_type || '?', (ev.resource || {}));
    return new Response('bad signature', { status: 400 });
  }

  const event = JSON.parse(bodyText);
  const type = event.event_type || '';
  let res = event.resource || {};

  // One-off handbook purchases (the shop block above). Subscriptions never send
  // PAYMENT.CAPTURE.* events (they use PAYMENT.SALE.*), so the two never mix.
  if (SHOP_EVENTS.indexOf(type) !== -1) return await shopWebhook(env, type, res, access);

  const GRANT = ['BILLING.SUBSCRIPTION.ACTIVATED', 'BILLING.SUBSCRIPTION.UPDATED', 'BILLING.SUBSCRIPTION.RE-ACTIVATED', 'PAYMENT.SALE.COMPLETED'];
  const REVOKE = ['BILLING.SUBSCRIPTION.CANCELLED', 'BILLING.SUBSCRIPTION.EXPIRED', 'BILLING.SUBSCRIPTION.SUSPENDED'];
  if (GRANT.indexOf(type) === -1 && REVOKE.indexOf(type) === -1) return new Response('ignored', { status: 200 });

  // PAYMENT.SALE.COMPLETED carries a sale resource: no plan_id and usually no
  // custom_id. Resolve the real subscription so recurring payments still work.
  const subId = res.id && String(res.id).indexOf('I-') === 0 ? res.id : (res.billing_agreement_id || null);
  if ((!res.plan_id || !res.custom_id) && subId) {
    try {
      const sr = await fetch(`${ppBase(env)}/v1/billing/subscriptions/${encodeURIComponent(subId)}`, {
        headers: { 'Authorization': `Bearer ${access}` }
      });
      if (sr.ok) { const full = await sr.json(); res = Object.assign({}, full, { id: full.id || subId }); }
    } catch (e) { /* fall through to what the event gave us */ }
  }

  // custom_id is set when the subscription is created on the site = the user's email
  const email = (res.custom_id || (res.subscriber && res.subscriber.email_address) || '').trim().toLowerCase();
  if (!email) { await logPayIssue(env, 'no-email', type, res); return new Response('no user', { status: 200 }); }
  const raw = await env.USERS.get(email);
  if (!raw) { await logPayIssue(env, 'unknown-user:' + email, type, res); return new Response('unknown user', { status: 200 }); }
  const user = JSON.parse(raw);
  const thisSub = !!(user.sub && user.sub.id && user.sub.id === (res.id || subId));

  // A grant-type event must not undo a pause or cancellation. Events can arrive
  // late or out of order, so for a paused member ask PayPal for the subscription's
  // CURRENT status; a resource that is already CANCELLED/EXPIRED never grants.
  if (GRANT.indexOf(type) !== -1) {
    let st = String(res.status || '').toUpperCase();
    if (thisSub && user.pause) {
      const cur = await ppGetSub(env, user.sub.id, access);
      if (cur && cur.status) st = String(cur.status).toUpperCase();
      if (st !== 'ACTIVE') { await logPlan(env, { email, action: 'webhook ' + type, by: 'paypal', sub: user.sub.id, result: 'ignored: plan is paused' }); return new Response('ok', { status: 200 }); }
    }
    if ((st === 'CANCELLED' || st === 'EXPIRED') && thisSub && ['cancelled', 'expired'].indexOf(String(user.sub.status).toLowerCase()) !== -1) {
      await logPlan(env, { email, action: 'webhook ' + type, by: 'paypal', sub: user.sub.id, result: 'ignored: subscription already ended' });
      return new Response('ok', { status: 200 });
    }
  }

  if (GRANT.indexOf(type) !== -1) {
    let tier = tierFromPlan(res.plan_id, env);
    // The PLAN_* vars can drift from the live plans (e.g. plans recreated under a
    // new PayPal app). Rather than silently granting nothing to someone who has
    // just paid, fall back to the plan's NAME from the PayPal API.
    if (!tier && res.plan_id) tier = await tierFromPlanName(res.plan_id, access, env);
    if (tier) {
      user.tier = tier;
      // A live paid subscription never carries a code expiry. Clearing this is
      // essential: a leftover tierUntil from a trial code would lapse the paying
      // customer straight back to bronze. But the time left in that window is
      // theirs — earned referral months or a code they redeemed — so bank it
      // first, and the REVOKE handlers give it back when the subscription ends.
      bankRemaining(user);
      user.tierUntil = null;
      user.tierSource = 'paypal';
      // Capture the next billing date so the member can see when their monthly plan
      // renews. A live subscription has no access expiry (tierUntil stays null) —
      // this is the renewal date, not a cut-off.
      const nextBill = (res.billing_info && res.billing_info.next_billing_time) ? Date.parse(res.billing_info.next_billing_time) : null;
      const started = res.start_time ? Date.parse(res.start_time) : NaN;
      user.sub = {
        id: res.id || subId, plan: res.plan_id || null, status: res.status || 'ACTIVE',
        nextBilling: (nextBill && !isNaN(nextBill)) ? nextBill : null,
        cycle: (res.billing_info && res.billing_info.cycle_executions && res.billing_info.cycle_executions[0] && res.billing_info.cycle_executions[0].tenure_type) || null,
        start: !isNaN(started) ? started : ((thisSub && user.sub.start) || Date.now()),
        ts: Date.now()
      };
      // Live and paying again (first payment, renewal, or a resume done inside
      // PayPal): any pause or cancellation recorded here is over.
      if (user.pause) { delete user.pause; await env.USERS.delete('pause:' + email); }
      delete user.cancel;
    } else {
      // Paid but unmappable — record it so it can be fixed by hand, never silent.
      user.payIssue = { plan: res.plan_id || null, sub: res.id || subId || null, type, ts: Date.now() };
      await logPayIssue(env, 'unmapped-plan:' + email, type, res);
    }
  } else {
    // A monthly subscription must keep running until it's genuinely finished.
    // Only EXPIRED (PayPal says the agreement is over) cuts access immediately.
    if (type === 'BILLING.SUBSCRIPTION.SUSPENDED' && thisSub && user.pause) {
      // The member (or the owner) paused this plan from Manage my plan. Access
      // already runs to the end of the paid period (tierUntil = pause.from);
      // no payment-failure grace on top of it.
      user.sub.status = 'paused';
    } else if (type === 'BILLING.SUBSCRIPTION.SUSPENDED') {
      // Usually a temporarily failed payment — PayPal retries for days. Don't strip
      // access off a paying member over a declined card: hold the tier and give a
      // 7-day grace window, and let a later success clear it.
      const grace = Date.now() + 7 * 864e5;
      user.tierUntil = Math.max(user.tierUntil || 0, grace) || grace;
      if (user.sub) { user.sub.status = 'suspended'; user.sub.graceUntil = grace; }
    } else if (type === 'BILLING.SUBSCRIPTION.CANCELLED' && thisSub && String(user.sub.status).toLowerCase() === 'cancelled') {
      // Already cancelled from Manage my plan: tierUntil (paid period + any
      // released referral days) was set then. Re-deriving it here would drop
      // the released days, so keep it.
    } else if (type === 'BILLING.SUBSCRIPTION.CANCELLED') {
      // Cancelled inside PayPal (or by the owner in the PayPal dashboard). If the
      // plan was paused, the paid period ended when the pause began.
      if (user.pause) {
        if (user.sub) user.sub.nextBilling = Math.min(user.sub.nextBilling || user.pause.from, user.pause.from);
        delete user.pause; await env.USERS.delete('pause:' + email);
      }
      user.cancel = user.cancel || { at: Date.now(), by: 'paypal', reason: '' };
      // They've cancelled but already paid for the current month — let them keep
      // what they bought until the period ends, then it lapses on its own.
      // Any referral months banked while the subscription was live (it had no
      // expiry to add to) are released here, on the end of the paid period.
      const paidTo = (user.sub && user.sub.nextBilling) ? user.sub.nextBilling : Date.now();
      const bank = Math.max(0, +user.refCreditDays || 0);
      user.tierUntil = (paidTo > Date.now() ? paidTo : Date.now()) + bank * 864e5;
      if (bank) user.refCreditDays = 0;
      if (user.sub) user.sub.status = 'cancelled';
    } else {
      if (user.pause) { delete user.pause; await env.USERS.delete('pause:' + email); }
      // Expired. Release any banked referral months rather than dropping the
      // member straight to bronze — those were earned, not bought.
      const bank = Math.max(0, +user.refCreditDays || 0);
      if (bank) {
        user.tier = 'platinum';
        user.tierUntil = Date.now() + bank * 864e5;
        user.refCreditDays = 0;
        user.tierSource = 'referral-credit';
      } else {
        user.tier = 'bronze';
        user.tierUntil = null;
      }
      if (user.sub) user.sub.status = 'expired';
    }
  }
  await env.USERS.put(email, JSON.stringify(user));
  await logPlan(env, { email, action: 'webhook ' + type, by: 'paypal', sub: (user.sub && user.sub.id) || subId || '', result: 'applied' });
  return new Response('ok', { status: 200 });
}
/* Map a plan to a tier by its NAME when the PLAN_* ids don't match. */
async function tierFromPlanName(planId, access, env) {
  try {
    const r = await fetch(`${ppBase(env)}/v1/billing/plans/${encodeURIComponent(planId)}`, {
      headers: { 'Authorization': `Bearer ${access}` }
    });
    if (!r.ok) return null;
    const p = await r.json();
    const n = ((p.name || '') + ' ' + (p.description || '')).toLowerCase();
    if (n.indexOf('platinum') !== -1) return 'platinum';
    if (n.indexOf('gold') !== -1) return 'gold';
    if (n.indexOf('silver') !== -1) return 'silver';
  } catch (e) {}
  return null;
}
/* Keep a short trail of payment events that couldn't be applied. */
async function logPayIssue(env, why, type, res) {
  try {
    await env.USERS.put('payissue:' + Date.now() + ':' + Math.random().toString(36).slice(2, 7),
      JSON.stringify({ why, type, plan: (res && res.plan_id) || null, sub: (res && res.id) || null, ts: Date.now() }),
      { expirationTtl: 60 * 60 * 24 * 30 });
  } catch (e) {}
}

/* ---------------- Manage my plan: pause / resume / cancel ----------------
   GET  /api/plan                    -> { plan }        the signed-in member's own plan
   POST /api/plan/pause  {months}    -> { ok, plan }    months = 1 | 2 | 3
   POST /api/plan/resume             -> { ok, plan }
   POST /api/plan/cancel {reason?, details?} -> { ok, plan }
   GET  /api/admin/plan?email=x      -> { plan, user, log }   (ADMIN_EMAIL only)
   GET  /api/admin/plan              -> { log }               recent actions, all members
   POST /api/admin/plan {email, action:'cancel'|'pause'|'resume', months?, reason?, details?}

   The rules (also explained to members on pages/account-plan.html):
   • PAUSE = PayPal suspend. The pause starts when the period already paid for
     ends, so paid days are never lost. While paused the account is on free
     Bronze. PayPal is reactivated automatically on resumeAt (hourly cron, and
     on the member's next visit) and billing restarts. Recurring plans only.
   • CANCEL = PayPal cancel. No further payments. Access runs to the end of
     the paid period, then the account drops to Bronze. Banked referral days
     are released on top, exactly as the CANCELLED webhook does.
   • A cancelled PayPal subscription cannot be reactivated (PayPal's rule), so
     "restart" means a new subscription from the pricing page; any days still
     left are banked by bankRemaining() when the new one starts.
   • Every action is idempotent (repeating it changes nothing), rate-limited
     per member, and logged as planlog:* (time, email, action, reason, who) —
     never card or PayPal payer data.                                         */
const PLAN_INFO = {
  PLAN_SILVER_MONTHLY:   { tier: 'silver',   months: 1,  price: 10 },
  PLAN_SILVER_YEARLY:    { tier: 'silver',   months: 12, price: 100 },
  PLAN_GOLD_MONTHLY:     { tier: 'gold',     months: 1,  price: 15 },
  PLAN_GOLD_3MONTHLY:    { tier: 'gold',     months: 3,  price: 40 },
  PLAN_GOLD_YEARLY:      { tier: 'gold',     months: 12, price: 100 },
  PLAN_PLATINUM_MONTHLY: { tier: 'platinum', months: 1,  price: 20 },
  PLAN_PLATINUM_YEARLY:  { tier: 'platinum', months: 12, price: 180 }
};
const PAUSE_MONTHS = [1, 2, 3];
const PLAN_RL_MAX = 6;                       // plan changes per member per hour
const PLAN_RL_ADMIN_MAX = 40;                // owner acting for members, per hour
const PLAN_LOG_TTL = 60 * 60 * 24 * 730;     // keep the owner's action log 2 years
const CANCEL_REASONS = ['too-expensive', 'not-using', 'exam-done', 'missing-content', 'technical', 'other-service', 'other'];
const TIER_NAME = { silver: 'Silver', gold: 'Gold', platinum: 'Platinum', bronze: 'Bronze (free)' };

function planInfo(planId, env) {
  if (!planId) return null;
  for (const k of Object.keys(PLAN_INFO)) {
    if (env[k] && env[k] === planId) return Object.assign({ key: k }, PLAN_INFO[k]);
  }
  return null;
}
/* Same day-of-month N months later (clamped: 31 Jan + 1 month = 28/29 Feb). */
function addMonths(ts, n) {
  const d = new Date(ts);
  const day = d.getUTCDate();
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + n, 1, d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds()));
  const last = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth() + 1, 0)).getUTCDate();
  t.setUTCDate(Math.min(day, last));
  return t.getTime();
}
function ukDate(ts) {
  try { return new Date(ts).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/London' }); }
  catch (e) { return new Date(ts).toISOString().slice(0, 10); }
}
function failCode(msg, status, code) { const e = fail(msg, status); e.code = code; return e; }

/* What the member sees. Derived from the stored record only — never trusts the
   browser. `status` is one of: active | paused | payment_problem | cancelled |
   expired | free. `kind` is subscription (recurring PayPal) | fixed (a code,
   referral or manual grant: no recurring payment) | none. */
function planView(user, env) {
  const now = Date.now();
  const sub = user.sub && user.sub.id ? user.sub : null;
  const info = sub ? planInfo(sub.plan, env) : null;
  const tier = ['silver', 'gold', 'platinum'].includes(user.tier) ? user.tier : 'bronze';
  const live = tier !== 'bronze' && (!user.tierUntil || user.tierUntil > now);
  const sst = String((sub && sub.status) || '').toLowerCase();
  let kind = sub ? 'subscription' : (tier !== 'bronze' || user.tierUntil ? 'fixed' : 'none');
  let status;
  if (kind === 'subscription') {
    if (sst === 'cancelled' || sst === 'expired') status = live ? 'cancelled' : 'expired';
    else if (user.pause) status = 'paused';
    else if (sst === 'suspended') status = live ? 'payment_problem' : 'expired';
    else status = 'active';
  } else if (kind === 'fixed') status = live ? 'active' : 'expired';
  else status = 'free';

  const view = {
    kind, status,
    tier: (kind === 'subscription' && info) ? info.tier : tier,
    accessTier: live ? tier : 'bronze',
    planName: TIER_NAME[(kind === 'subscription' && info) ? info.tier : tier] || 'Bronze (free)',
    price: info ? info.price : null,
    currency: 'GBP',
    periodMonths: info ? info.months : null,
    nextPayment: null,
    accessUntil: null,
    startDate: sub ? (sub.start || null) : (kind === 'fixed' ? (user.tierStart || null) : null),
    method: kind === 'subscription' ? 'PayPal' : (kind === 'fixed' ? 'No recurring payment' : null),
    source: kind === 'fixed' ? String(user.tierSource || '').split('+')[0].replace(/:.*/, '') : (kind === 'subscription' ? 'paypal' : ''),
    subRef: sub ? ('…' + String(sub.id).slice(-4)) : null,
    pause: null,
    cancel: null,
    canPause: false, canCancel: false, canResume: false, canRestart: false,
    pauseOptions: [],
    bankedDays: Math.max(0, +user.refCreditDays || 0)
  };
  if (status === 'active' && kind === 'subscription') {
    view.nextPayment = sub.nextBilling || null;
    view.canPause = true; view.canCancel = true;
    const from = sub.nextBilling && sub.nextBilling > now ? sub.nextBilling : now;
    view.pauseOptions = PAUSE_MONTHS.map(m => ({ months: m, from, resumeAt: addMonths(from, m) }));
  } else if (status === 'paused') {
    view.pause = { months: user.pause.months, from: user.pause.from, resumeAt: user.pause.resumeAt };
    view.accessUntil = user.pause.from > now ? user.pause.from : null;
    view.nextPayment = user.pause.resumeAt;
    view.canResume = true; view.canCancel = true;
  } else if (status === 'payment_problem') {
    view.accessUntil = user.tierUntil || null;
    view.canCancel = true;
  } else if (status === 'cancelled') {
    view.accessUntil = user.tierUntil || null;
    view.canRestart = true;
  } else if (status === 'expired') {
    view.accessUntil = user.tierUntil || (sub && sub.nextBilling) || null;
    view.canRestart = true;
  } else if (kind === 'fixed') {
    view.accessUntil = user.tierUntil || null;
  }
  if (user.cancel) view.cancel = { at: user.cancel.at, accessUntil: user.cancel.accessUntil || user.tierUntil || null, by: String(user.cancel.by || 'member').indexOf('admin') === 0 ? 'owner' : 'member' };
  return view;
}

async function planRateLimit(env, key, max) {
  const k = 'planrl:' + key;
  let r = null;
  try { r = JSON.parse((await env.USERS.get(k)) || 'null'); } catch (e) {}
  if (!r || Date.now() - r.start > 3600e3) r = { n: 0, start: Date.now() };
  if (r.n >= (max || PLAN_RL_MAX)) throw failCode('Too many plan changes in a short time. Please wait an hour, or email bassamomda@gmail.com and it will be done for you.', 429, 'rate_limited');
  r.n++;
  await env.USERS.put(k, JSON.stringify(r), { expirationTtl: 3600 });
}

/* Log for the owner. Keys sort newest-first (inverted timestamp) so a prefix
   listing returns the latest actions. Free text is capped and any long digit
   run is masked, so a card number typed into the reason box is never kept. */
function scrubText(s, max) {
  return String(s || '').replace(/[\u0000-\u001f]/g, ' ').replace(/\d[\d \-]{10,}\d/g, '[number removed]').trim().slice(0, max || 300);
}
async function logPlan(env, e) {
  const ts = Date.now();
  const row = {
    ts, email: e.email || '', action: e.action || '', by: e.by || 'member',
    reason: e.reason || '', details: scrubText(e.details, 300), result: e.result || 'ok',
    sub: e.sub ? String(e.sub) : ''
  };
  try {
    await env.USERS.put('planlog:' + String(9e13 - ts).padStart(14, '0') + ':' + randHex(3), JSON.stringify(row), { expirationTtl: PLAN_LOG_TTL });
  } catch (err) {}
  return row;
}

async function ppGetSub(env, subId, access) {
  try {
    const r = await fetch(`${ppBase(env)}/v1/billing/subscriptions/${encodeURIComponent(subId)}`, { headers: { 'Authorization': `Bearer ${access}` } });
    if (!r.ok) return null;
    return await r.json();
  } catch (e) { return null; }
}
/* POST /v1/billing/subscriptions/{id}/{suspend|activate|cancel}. PayPal answers
   204 on success and 422 when the subscription is not in a state that allows the
   change, which is also what a REPEATED call gets. So on any failure, read the
   subscription back: if it is already where we wanted it, that is success
   (idempotent); otherwise report PayPal's status. */
async function ppSubAction(env, subId, action, reason) {
  const access = await paypalAccessToken(env);
  if (!access) throw failCode('Couldn’t reach PayPal just now. Please try again in a few minutes.', 502, 'paypal_unavailable');
  const want = { suspend: 'SUSPENDED', activate: 'ACTIVE', cancel: 'CANCELLED' }[action];
  const r = await fetch(`${ppBase(env)}/v1/billing/subscriptions/${encodeURIComponent(subId)}/${action}`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${access}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ reason: String(reason || 'Requested by the member').slice(0, 128) })
  });
  if (r.ok) return { access, already: false };
  const cur = await ppGetSub(env, subId, access);
  if (cur && String(cur.status || '').toUpperCase() === want) return { access, already: true, sub: cur };
  if (cur && action !== 'cancel' && ['CANCELLED', 'EXPIRED'].includes(String(cur.status || '').toUpperCase())) {
    throw failCode('This PayPal subscription has already ended, so it can’t be paused or restarted. Choose a plan on the pricing page to start again.', 409, 'resubscribe');
  }
  throw failCode('PayPal didn’t accept that change' + (cur && cur.status ? ' (the subscription is ' + String(cur.status).toLowerCase() + ')' : ' (' + r.status + ')') + '. Please try again, or email bassamomda@gmail.com.', 502, 'paypal_rejected');
}
function readNextBilling(ps) {
  const t = ps && ps.billing_info && ps.billing_info.next_billing_time ? Date.parse(ps.billing_info.next_billing_time) : NaN;
  return isNaN(t) ? null : t;
}

async function doPause(user, env, months, by) {
  months = Number(months);
  if (!PAUSE_MONTHS.includes(months)) throw failCode('Choose a pause of 1, 2 or 3 months.', 400, 'bad_months');
  const view = planView(user, env);
  if (view.status === 'paused') {
    if (user.pause.months === months) return { user, idempotent: true };
    throw failCode('Your plan is already paused until ' + ukDate(user.pause.resumeAt) + '. Resume it first if you want a different length.', 409, 'already_paused');
  }
  if (view.kind !== 'subscription') throw failCode('Pausing only applies to a recurring PayPal plan. Your access isn’t a recurring payment, so there is nothing to pause.', 409, 'not_recurring');
  if (view.status !== 'active') throw failCode('Only an active plan can be paused.', 409, 'not_active');
  const now = Date.now();
  const from = user.sub.nextBilling && user.sub.nextBilling > now ? user.sub.nextBilling : now;
  await ppSubAction(env, user.sub.id, 'suspend', 'Member paused for ' + months + ' month' + (months > 1 ? 's' : ''));
  user.pause = { months, from, resumeAt: addMonths(from, months), at: now, by };
  user.sub.status = 'paused';
  user.tierUntil = from;            // paid access to the end of the paid period, then Bronze
  delete user.cancel;
  await env.USERS.put('pause:' + user.email, String(user.pause.resumeAt));
  return { user };
}

async function doResume(user, env, by) {
  const view = planView(user, env);
  if (view.status === 'active' && view.kind === 'subscription') return { user, idempotent: true };
  if (view.status === 'cancelled' || view.status === 'expired') {
    throw failCode('A cancelled PayPal subscription can’t be restarted. Choose a plan on the pricing page to start a new one; any days you still have are kept.', 409, 'resubscribe');
  }
  if (view.status !== 'paused') throw failCode('There is no paused plan to resume.', 409, 'not_paused');
  const r = await ppSubAction(env, user.sub.id, 'activate', by === 'auto' ? 'Pause ended' : 'Member resumed early');
  const ps = r.sub || await ppGetSub(env, user.sub.id, r.access);
  const nb = readNextBilling(ps);
  // Resumed early, inside the period already paid for: keep that renewal date.
  if (nb) user.sub.nextBilling = nb;
  delete user.pause;
  user.sub.status = 'active';
  user.tierUntil = null;
  await env.USERS.delete('pause:' + user.email);
  return { user };
}

async function doCancel(user, env, reason, details, by) {
  const view = planView(user, env);
  if (view.kind === 'subscription' && (view.status === 'cancelled' || view.status === 'expired')) return { user, idempotent: true };
  if (view.kind !== 'subscription') {
    throw failCode(view.status === 'active' && view.accessUntil
      ? 'There is no recurring payment to cancel. Your access ends by itself on ' + ukDate(view.accessUntil) + ' and nothing will be charged.'
      : 'There is no recurring payment to cancel.', 409, 'not_recurring');
  }
  const now = Date.now();
  const paidTo = user.pause ? user.pause.from : (user.sub.nextBilling || now);
  const code = CANCEL_REASONS.includes(reason) ? reason : (reason ? 'other' : '');
  await ppSubAction(env, user.sub.id, 'cancel', 'Cancelled by ' + (String(by).indexOf('admin') === 0 ? 'the owner for the member' : 'the member') + (code ? ' (' + code + ')' : ''));
  const until = Math.max(paidTo, now);
  const bank = Math.max(0, +user.refCreditDays || 0);
  user.tierUntil = until + bank * 864e5;
  if (bank) user.refCreditDays = 0;
  user.sub.status = 'cancelled';
  user.cancel = { at: now, by, reason: code, accessUntil: user.tierUntil };
  delete user.pause;
  await env.USERS.delete('pause:' + user.email);
  return { user, reason: code, details: scrubText(details, 300) };
}

async function runPlanAction(user, env, action, body, by) {
  let out;
  if (action === 'pause') out = await doPause(user, env, body.months, by);
  else if (action === 'resume') out = await doResume(user, env, by);
  else if (action === 'cancel') out = await doCancel(user, env, body.reason, body.details, by);
  else throw failCode('Unknown action', 400, 'bad_action');
  const row = await logPlan(env, {
    email: user.email, action, by, sub: user.sub && user.sub.id,
    reason: out.reason || (action === 'pause' ? (body.months + 'm') : ''), details: out.details || '',
    result: out.idempotent ? 'no change (already done)' : 'ok'
  });
  if (!out.idempotent) {
    user.planLog = (user.planLog || []).concat({ ts: row.ts, action, by, reason: row.reason }).slice(-20);
    await env.USERS.put(user.email, JSON.stringify(user));
  }
  return out;
}

/* Restart a pause that is due. Used on the member's visit (/api/auth/me,
   /api/plan) and by the hourly cron. Never throws: a PayPal hiccup just means
   the next visit or cron run tries again. */
async function maybeAutoResume(user, env) {
  if (!user || !user.pause || !(user.pause.resumeAt <= Date.now())) return user;
  try { await runPlanAction(user, env, 'resume', {}, 'auto'); }
  catch (e) { await logPlan(env, { email: user.email, action: 'resume', by: 'auto', result: 'error: ' + String(e.message || e).slice(0, 140) }); }
  return user;
}
async function resumeDuePlans(env) {
  let cursor, done = 0;
  for (let i = 0; i < 20; i++) {
    const res = await env.USERS.list({ prefix: 'pause:', limit: 1000, cursor });
    for (const k of res.keys) {
      const raw = await env.USERS.get(k.name);
      if (!raw || Number(raw) > Date.now()) continue;
      const email = k.name.slice(6);
      const ur = await env.USERS.get(email);
      if (!ur) { await env.USERS.delete(k.name); continue; }
      const u = JSON.parse(ur);
      if (!u.pause) { await env.USERS.delete(k.name); continue; }
      await maybeAutoResume(u, env); done++;
    }
    if (!res.list_complete && res.cursor) cursor = res.cursor; else break;
  }
  return done;
}

async function planGet(request, env, cors) {
  if (request.method !== 'GET') return json({ error: 'method' }, 405, cors);
  let user;
  try { user = await userFromToken(request, env); }
  catch (e) { return json({ error: e.message }, e.status || 401, cors); }
  user = await maybeAutoResume(user, env);
  // Older records were stored before the start date was captured: fill it once.
  if (user.sub && user.sub.id && !user.sub.start) {
    try {
      const access = await paypalAccessToken(env);
      const ps = access ? await ppGetSub(env, user.sub.id, access) : null;
      if (ps && ps.start_time) {
        user.sub.start = Date.parse(ps.start_time) || null;
        if (!user.sub.nextBilling) user.sub.nextBilling = readNextBilling(ps);
        await env.USERS.put(user.email, JSON.stringify(user));
      }
    } catch (e) {}
  }
  return json({ plan: planView(user, env) }, 200, cors);
}

async function planAction(request, env, cors, action) {
  if (request.method !== 'POST') return json({ error: 'method' }, 405, cors);
  let user;
  try { user = await userFromToken(request, env); }
  catch (e) { return json({ error: e.message }, e.status || 401, cors); }
  const body = await request.json().catch(() => ({}));
  try {
    await planRateLimit(env, user.email, PLAN_RL_MAX);
    const out = await runPlanAction(user, env, action, body || {}, 'member');
    return json({ ok: true, idempotent: !!out.idempotent, plan: planView(out.user, env), user: publicUser(out.user, env) }, 200, cors);
  } catch (e) {
    if (e.status !== 429) await logPlan(env, { email: user.email, action, by: 'member', result: 'error: ' + String(e.message || '').slice(0, 140) });
    return json({ error: e.message || 'Something went wrong.', code: e.code || '' }, e.status || 400, cors);
  }
}

/* Owner tool: see and act on a member's plan (people email to ask). Protected
   exactly like the other admin endpoints (requireAdmin = ADMIN_EMAIL only). */
async function adminPlan(request, env, cors) {
  let admin;
  try { admin = await requireAdmin(request, env); }
  catch (e) { return json({ error: e.message }, e.status || 401, cors); }
  const url = new URL(request.url);
  if (request.method === 'GET') {
    const email = String(url.searchParams.get('email') || '').trim().toLowerCase();
    if (!email) return json({ log: await listKV(env, 'planlog:', 100) }, 200, cors);
    const raw = await env.USERS.get(email);
    if (!raw) return json({ error: 'no such user' }, 404, cors);
    const u = JSON.parse(raw);
    return json({ plan: planView(u, env), sub: u.sub || null, pause: u.pause || null, cancel: u.cancel || null, log: u.planLog || [] }, 200, cors);
  }
  if (request.method !== 'POST') return json({ error: 'method' }, 405, cors);
  const b = await request.json().catch(() => ({}));
  const email = String(b.email || '').trim().toLowerCase();
  if (!email) return json({ error: 'email required' }, 400, cors);
  const raw = await env.USERS.get(email);
  if (!raw) return json({ error: 'no such user' }, 404, cors);
  const user = JSON.parse(raw);
  try {
    await planRateLimit(env, 'admin', PLAN_RL_ADMIN_MAX);
    const out = await runPlanAction(user, env, String(b.action || ''), b, 'admin:' + admin.email);
    return json({ ok: true, idempotent: !!out.idempotent, plan: planView(out.user, env) }, 200, cors);
  } catch (e) {
    await logPlan(env, { email, action: String(b.action || ''), by: 'admin:' + admin.email, result: 'error: ' + String(e.message || '').slice(0, 140) });
    return json({ error: e.message || 'Something went wrong.', code: e.code || '' }, e.status || 400, cors);
  }
}
