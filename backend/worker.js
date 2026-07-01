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
    const cors = corsHeaders(env);
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });

    try {
      if (url.pathname === '/api/auth/register') return json(await register(request, env), 200, cors);
      if (url.pathname === '/api/auth/login')    return json(await login(request, env), 200, cors);
      if (url.pathname === '/api/auth/me')        return json(await me(request, env), 200, cors);
      if (url.pathname === '/api/ai')             return await aiProxy(request, env, cors);
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
function corsHeaders(env) {
  return {
    'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || '*',
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
const publicUser = u => ({ name: u.name, email: u.email, stage: u.stage || '', created: u.created, tier: u.tier || 'bronze' });

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
  return { token, user: publicUser(user) };
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
  return { token, user: publicUser(user) };
}
async function me(request, env) {
  const user = await userFromToken(request, env);
  return { user: publicUser(user) };
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
  let user;
  try { user = await userFromToken(request, env); }
  catch (e) { return json({ error: 'sign_in_required' }, 401, cors); }
  if (!user.tier || user.tier === 'bronze') return json({ error: 'subscription_required' }, 402, cors);

  const { messages } = await request.json();
  if (!Array.isArray(messages) || !messages.length) return json({ error: 'no_messages' }, 400, cors);

  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': env.AI_API_KEY, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({
      model: env.AI_MODEL || 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      messages: messages.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: String(m.content || '') }))
    })
  });
  if (!resp.ok) return json({ error: 'ai_upstream_' + resp.status }, 502, cors);
  const data = await resp.json();
  const text = (data.content && data.content[0] && data.content[0].text) || '';
  return json({ completion: text }, 200, cors);
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
