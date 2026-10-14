#!/usr/bin/env node
/* ============================================================
   Reasoning GP — monthly broken-link check
   ------------------------------------------------------------
   Run from anywhere (the script finds the site root itself):

       node governance/check-links.mjs

   Collects every external link on the site, checks each one once and
   writes two reports:

       governance/reports/link-check.md    (for people — grouped by domain)
       governance/reports/link-check.json  (for the workflow and for Claude)

   Where links are collected from:
     protocols + print twins   tools/management/*.html
     Snapshots                 tools/management/summaries/*, tools/algorithms/one-page/*
     algorithms                tools/algorithms/*.html (+ any summaries/ still live)
     cases                     cases/*.html
     pages and hubs            pages/*.html, tools/*.html, index.html, cases.html …
     data files                assets/ .js files (any depth) — Ready Prescriptions, leaflet maps,
                               articles, audio scripts, SCA data, calculators …
   Only links a reader can click are collected: href="…" attributes (also
   inside JavaScript strings) and URL values in the data files. Fonts,
   stylesheets, scripts, images, canonical/meta tags, schema.org, our own
   domain and URLs built at run time ('…?q=' + term) are left out.

   How each link is checked: HEAD first, then GET if HEAD is refused or
   fails; redirects followed; 20 s timeout; at most 6 requests at once and
   at most 2 at once to any one website, with a short gap between them;
   a normal browser User-Agent. Slow or flaky answers get one retry.

   Results:
     OK        the page answered 2xx at the same address
     REDIRECT  it answered 2xx, but at a different address — NICE, BNF and
               gov.uk move pages often; update the link to the final address
     BROKEN    404 or 410, or the website name no longer exists (DNS)
     BLOCKED   403, 401, 429, 5xx or another refusal — usually the site
               blocking automated checks. Listed separately; open by hand.
     ERROR     could not connect at all (timeout, TLS, connection reset).
               Listed separately; not counted as broken.

   If more than half of the links fail at the network level the run is
   marked "network_suspect" and the workflow does not open an issue.

   Options:
     --collect-only      list the links, do not check them
     --limit N           check only the first N links (testing)
     --concurrency N     default 6 (maximum 6)
     --timeout MS        default 20000
     --quiet

   No npm packages. Needs Node 20+ (built-in fetch).
   ============================================================ */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'governance', 'reports');
const argv = process.argv.slice(2);
const flag = n => argv.includes(n);
const opt = (n, d) => { const i = argv.indexOf(n); return i > -1 && argv[i + 1] ? argv[i + 1] : d; };
const COLLECT_ONLY = flag('--collect-only');
const LIMIT = parseInt(opt('--limit', '0'), 10) || 0;
const CONCURRENCY = Math.max(1, Math.min(6, parseInt(opt('--concurrency', '6'), 10) || 6));
const PER_HOST = 2;
const HOST_GAP_MS = 400;
const TIMEOUT = parseInt(opt('--timeout', '20000'), 10) || 20000;
const QUIET = flag('--quiet');
const DEBUG = flag('--debug');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';
const log = (...a) => { if (!QUIET) console.log(...a); };

/* ---------- 1. which files ---------- */
const SKIP_DIRS = new Set(['.git', '.github', 'node_modules', 'governance', 'backend', 'search']);
function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') && e.name !== '.') { if (e.isDirectory()) continue; }
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name)) walk(p, out); }
    else if (/\.(html?|js)$/i.test(e.name)) out.push(p);
  }
  return out;
}
const rel = p => path.relative(ROOT, p).split(path.sep).join('/');
const files = walk(ROOT, []).map(rel)
  .filter(f => f !== 'service-worker.js')
  .filter(f => !/^assets\/search\//.test(f))
  .sort();

function kindOf(f) {
  if (/^tools\/management\/summaries\//.test(f) || /^tools\/algorithms\/one-page\//.test(f)) return 'Snapshot';
  if (/^tools\/management\/.*-print\.html$/.test(f)) return 'Protocol (print)';
  if (/^tools\/management\//.test(f)) return 'Protocol';
  if (/^tools\/algorithms\/summaries\//.test(f)) return 'Algorithm summary';
  if (/^tools\/algorithms\//.test(f)) return 'Algorithm';
  if (/^cases\//.test(f)) return 'Case';
  if (/prescriptions-data/.test(f)) return 'Ready Rx';
  if (/leaflet/.test(f)) return 'Leaflets';
  if (/^assets\//.test(f)) return 'Data file';
  return 'Page';
}

/* ---------- 2. which links ---------- */
const SKIP_HOST = /(^|\.)(gpreasoning\.uk|fonts\.googleapis\.com|fonts\.gstatic\.com|schema\.org|w3\.org|cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|unpkg\.com|cdn\.tailwindcss\.com|code\.jquery\.com|static\.cloudflareinsights\.com|cloudflareinsights\.com|workers\.dev|googletagmanager\.com|google-analytics\.com|js\.stripe\.com|api\.stripe\.com|api\.anthropic\.com|localhost|127\.0\.0\.1|example\.com|example\.org)$/i;
const URL_RE = /https?:\/\/[^\s"'`<>\\\]}|^]+/g;
// tags whose URLs are not links a reader clicks
const NON_LINK_TAG = /^<(link|script|meta|img|source|iframe|video|audio|base|svg|path|use|image|object|embed)\b/i;

function cleanUrl(u) {
  u = u.replace(/&amp;/g, '&').replace(/&#38;/g, '&');
  u = u.replace(/&(quot|#34|#39|apos|gt|lt|nbsp);.*$/i, '');
  // trailing punctuation from prose / markup, and an unbalanced closing bracket
  for (;;) {
    if (/[.,;:!?*'’”]$/.test(u)) { u = u.slice(0, -1); continue; }
    if (u.endsWith(')') && (u.match(/\(/g) || []).length < (u.match(/\)/g) || []).length) { u = u.slice(0, -1); continue; }
    break;
  }
  return u;
}

function contextSkip(src, idx, end, isJs) {
  // inside an HTML tag? find the nearest '<' before the URL with no '>' between
  const lt = src.lastIndexOf('<', idx), gt = src.lastIndexOf('>', idx);
  if (lt > gt && idx - lt < 1500 && /^<[a-zA-Z]/.test(src.slice(lt, lt + 2))) {
    const tag = src.slice(lt, Math.min(idx, lt + 40));
    if (NON_LINK_TAG.test(tag)) return 'tag';
    // <a …> etc.: only the href attribute counts (not data-*, title, content…)
    const before = src.slice(Math.max(lt, idx - 12), idx);
    if (!/href\s*=\s*\\?["']?$/i.test(before)) return 'attr';
  }
  // in a code comment (// … or /* … */) — library credits, notes to developers
  const lineStart = src.lastIndexOf('\n', idx) + 1;
  if (/(^|[^:\\])\/\//.test(src.slice(lineStart, idx))) return 'comment';
  if (isJs && src.lastIndexOf('/*', idx) > src.lastIndexOf('*/', idx)) return 'comment';
  const pre = src.slice(Math.max(0, idx - 12), idx);
  if (/src\s*=\s*\\?["']?$/i.test(pre) || /xmlns(:\w+)?\s*=\s*\\?["']?$/i.test(pre)) return 'src';
  // built at run time: '…?q=' + term, `${…}`
  const after = src.slice(end, end + 6);
  if (/^\\?["'`]\s*\+/.test(after) || /^\$\{/.test(after)) return 'dynamic';
  if (/\+\s*\\?["'`]$/.test(src.slice(Math.max(0, idx - 4), idx))) return 'dynamic';
  // fetch('https://…') and API constants
  if (/fetch\(\s*["'`]$/.test(src.slice(Math.max(0, idx - 9), idx))) return 'api';
  return null;
}

const links = new Map(); // key (no #fragment) -> {url, pages:Set, kinds:Set}
let rawCount = 0;
const skippedCtx = {};
for (const f of files) {
  let src;
  try { src = fs.readFileSync(path.join(ROOT, f), 'utf8'); } catch { continue; }
  if (/\.html?$/i.test(f) && /http-equiv=["']refresh["']/i.test(src.slice(0, 4000)) && src.length < 8000) continue; // redirect stub
  const s = src.replace(/\\\//g, '/');
  URL_RE.lastIndex = 0;
  let m;
  while ((m = URL_RE.exec(s))) {
    const raw = m[0];
    const why = contextSkip(s, m.index, m.index + raw.length, /\.js$/i.test(f));
    if (why) {
      skippedCtx[why] = (skippedCtx[why] || 0) + 1;
      if (DEBUG && !/fonts\.g|gpreasoning|schema\.org|w3\.org/.test(raw)) console.log('skip', why, f, s.slice(Math.max(0, m.index - 50), m.index + raw.length).replace(/\s+/g, ' '));
      continue;
    }
    const u = cleanUrl(raw);
    let host;
    try { host = new URL(u).hostname; } catch { continue; }
    if (!/^[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/i.test(host) || SKIP_HOST.test(host)) continue;
    if (/[{}$]/.test(u)) continue;
    rawCount++;
    const key = u.split('#')[0];
    let e = links.get(key);
    if (!e) { e = { url: key, pages: new Set(), kinds: new Set() }; links.set(key, e); }
    e.pages.add(f); e.kinds.add(kindOf(f));
  }
}
let todo = [...links.values()].sort((a, b) => a.url.localeCompare(b.url));
if (DEBUG) console.log('skipped by context', skippedCtx);
log(`collected ${rawCount} external link occurrences in ${files.length} files → ${todo.length} unique URLs`);
if (LIMIT) todo = todo.slice(0, LIMIT);

/* ---------- 3. check ---------- */
const sleep = ms => new Promise(r => setTimeout(r, ms));
const normForCompare = u => { try { const x = new URL(u); x.hash = ''; let s = x.href; return s.replace(/\/$/, '').toLowerCase(); } catch { return u; } };

function errCode(e) {
  const c = e && (e.cause && (e.cause.code || e.cause.name)) || (e && (e.code || e.name)) || 'ERR';
  return String(c);
}
async function req(url, method) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), TIMEOUT);
  try {
    const r = await fetch(url, {
      method, redirect: 'follow', signal: ac.signal,
      headers: { 'User-Agent': UA, 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,application/pdf,*/*;q=0.8', 'Accept-Language': 'en-GB,en;q=0.9' },
    });
    if (r.body) { try { await r.body.cancel(); } catch {} }
    return { code: r.status, final: r.url || url };
  } catch (e) {
    return { code: 0, err: ac.signal.aborted ? 'TIMEOUT' : errCode(e) };
  } finally { clearTimeout(t); }
}
const DNS_GONE = /ENOTFOUND/;
function classify(url, r) {
  if (r.code === 0) return DNS_GONE.test(r.err) ? 'BROKEN' : 'ERROR';
  if (r.code === 404 || r.code === 410) return 'BROKEN';
  if (r.code >= 200 && r.code < 300) return normForCompare(r.final) === normForCompare(url) ? 'OK' : 'REDIRECT';
  return 'BLOCKED'; // 401/403/429/5xx/other refusals
}
async function check(url) {
  let r = await req(url, 'HEAD');
  // many sites refuse or mis-answer HEAD: confirm with GET
  if (r.code === 0 || r.code >= 400) {
    const g = await req(url, 'GET');
    if (g.code !== 0 || r.code === 0) r = g;
  }
  let status = classify(url, r);
  if (r.code === 0 || r.code === 429 || r.code >= 500) { // one polite retry (also for DNS, which can blip)
    await sleep(3000);
    const g = await req(url, 'GET');
    // an HTTP answer always wins; two network failures in a row: the latest decides
    // (DNS twice = BROKEN); a 429/5xx followed by a network failure stays BLOCKED
    if (g.code !== 0 || r.code === 0) { r = g; status = classify(url, g); }
  }
  return { status, code: r.code, final_url: r.final && r.final !== url ? r.final : '', error: r.err || '' };
}

const hostActive = new Map(), hostLast = new Map();
const hostOf = u => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return '?'; } };
async function runPool(items) {
  const results = new Array(items.length);
  const pending = items.map((it, i) => i);
  let done = 0;
  async function worker() {
    while (pending.length) {
      const now = Date.now();
      const pi = pending.findIndex(i => {
        const h = hostOf(items[i].url);
        return (hostActive.get(h) || 0) < PER_HOST && now - (hostLast.get(h) || 0) >= HOST_GAP_MS;
      });
      if (pi < 0) { await sleep(60); continue; }
      const i = pending.splice(pi, 1)[0];
      const h = hostOf(items[i].url);
      hostActive.set(h, (hostActive.get(h) || 0) + 1); hostLast.set(h, Date.now());
      try { results[i] = await check(items[i].url); }
      finally { hostActive.set(h, hostActive.get(h) - 1); hostLast.set(h, Date.now()); }
      done++;
      if (!QUIET && (done % 50 === 0 || done === items.length)) log(`  checked ${done}/${items.length}`);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  return results;
}

const started = new Date();
let results = [];
if (!COLLECT_ONLY) results = await runPool(todo);

/* ---------- 4. report ---------- */
const rows = todo.map((e, i) => ({
  url: e.url,
  domain: hostOf(e.url),
  status: COLLECT_ONLY ? 'NOT_CHECKED' : results[i].status,
  code: COLLECT_ONLY ? null : results[i].code,
  final_url: COLLECT_ONLY ? '' : results[i].final_url,
  error: COLLECT_ONLY ? '' : results[i].error,
  kinds: [...e.kinds].sort(),
  pages: [...e.pages].sort(),
}));
const count = s => rows.filter(r => r.status === s).length;
const totals = { urls: rows.length, occurrences: rawCount, files_scanned: files.length,
  OK: count('OK'), REDIRECT: count('REDIRECT'), BROKEN: count('BROKEN'), BLOCKED: count('BLOCKED'), ERROR: count('ERROR'), NOT_CHECKED: count('NOT_CHECKED') };
const netFail = rows.filter(r => r.code === 0).length;
const networkSuspect = !COLLECT_ONLY && rows.length > 0 && netFail / rows.length > 0.5;
const domains = {};
for (const r of rows) { const d = domains[r.domain] || (domains[r.domain] = { urls: 0, OK: 0, REDIRECT: 0, BROKEN: 0, BLOCKED: 0, ERROR: 0, NOT_CHECKED: 0 }); d.urls++; d[r.status]++; }

fs.mkdirSync(OUT_DIR, { recursive: true });
const json = { generated: started.toISOString(), finished: new Date().toISOString(), mode: COLLECT_ONLY ? 'collect-only' : (LIMIT ? `limit-${LIMIT}` : 'full'),
  settings: { concurrency: CONCURRENCY, per_host: PER_HOST, timeout_ms: TIMEOUT, user_agent: UA },
  network_suspect: networkSuspect, totals, domains, results: rows };
fs.writeFileSync(path.join(OUT_DIR, 'link-check.json'), JSON.stringify(json, null, 1));

const md = [];
const day = started.toISOString().slice(0, 10);
const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;
const pageList = r => {
  const p = r.pages.slice(0, 12).map(x => '`' + x + '`').join(', ');
  return p + (r.pages.length > 12 ? ` and ${r.pages.length - 12} more` : '');
};
function byDomain(list) {
  const g = new Map();
  for (const r of list) { if (!g.has(r.domain)) g.set(r.domain, []); g.get(r.domain).push(r); }
  return [...g.entries()].sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
}
md.push(`# Link check — ${day}`, '');
if (COLLECT_ONLY) md.push('**Collect-only run: links were listed but not checked.**', '');
if (networkSuspect) md.push(`> **Warning — network problem.** ${netFail} of ${rows.length} links could not be reached at all. That usually means the machine running the check had no internet access, not that the links are broken. No issue is opened for a run like this; run it again.`, '');
md.push(`${COLLECT_ONLY ? 'Found' : 'Checked'} **${totals.urls}** unique external links (${totals.occurrences} uses in ${totals.files_scanned} files).`, '');
if (!COLLECT_ONLY) md.push(
  '| Result | Links | What to do |', '|---|---:|---|',
  `| BROKEN | ${totals.BROKEN} | Fix: find the new address (search the site that published it) and update every page listed. |`,
  `| REDIRECT | ${totals.REDIRECT} | Works today, but the page has moved. Update to the final address when convenient. |`,
  `| BLOCKED | ${totals.BLOCKED} | The website refused an automated check (403/429/5xx). Open by hand; only fix if it is really gone. |`,
  `| ERROR | ${totals.ERROR} | Could not connect (timeout/connection). Usually temporary; check again next month. |`,
  `| OK | ${totals.OK} | Nothing to do. |`, '');

md.push(`## Broken links (${totals.BROKEN})`, '');
const broken = rows.filter(r => r.status === 'BROKEN');
if (!broken.length) md.push('None.', '');
for (const [d, list] of byDomain(broken)) {
  md.push(`### ${d} (${list.length})`, '');
  for (const r of list) md.push(`- ${r.url} — **${r.code ? r.code : r.error}** — used on ${plural(r.pages.length, 'file')}: ${pageList(r)}`);
  md.push('');
}
function section(title, status, line, open) {
  const list = rows.filter(r => r.status === status);
  md.push(`## ${title} (${list.length})`, '');
  if (!list.length) { md.push('None.', ''); return; }
  md.push(`<details${open ? ' open' : ''}><summary>Show ${list.length}</summary>`, '');
  for (const [d, l] of byDomain(list)) {
    md.push(`**${d}** (${l.length})`, '');
    for (const r of l) md.push('- ' + line(r));
    md.push('');
  }
  md.push('</details>', '');
}
section('Moved (redirected)', 'REDIRECT', r => `${r.url} → ${r.final_url} — ${pageList(r)}`);
section('Blocked — check by hand', 'BLOCKED', r => `${r.url} — ${r.code} — ${pageList(r)}`);
section('Could not connect', 'ERROR', r => `${r.url} — ${r.error} — ${pageList(r)}`);
md.push('## By domain', '', '| Domain | Links | OK | Moved | Broken | Blocked | Error |', '|---|---:|---:|---:|---:|---:|---:|');
for (const [d, c] of Object.entries(domains).sort((a, b) => b[1].urls - a[1].urls || a[0].localeCompare(b[0])))
  md.push(`| ${d} | ${c.urls} | ${c.OK} | ${c.REDIRECT} | ${c.BROKEN} | ${c.BLOCKED} | ${c.ERROR} |`);
md.push('', `_Generated by \`governance/check-links.mjs\` on ${started.toISOString()} · HEAD then GET · ${CONCURRENCY} at a time, ${PER_HOST} per site · ${TIMEOUT / 1000} s timeout. How to read this: see "Monthly link check" in \`governance/UPDATE-PROCESS.md\`._`, '');
fs.writeFileSync(path.join(OUT_DIR, 'link-check.md'), md.join('\n'));

log(`OK ${totals.OK} · REDIRECT ${totals.REDIRECT} · BROKEN ${totals.BROKEN} · BLOCKED ${totals.BLOCKED} · ERROR ${totals.ERROR}${COLLECT_ONLY ? ' (collect only)' : ''}${networkSuspect ? ' · NETWORK SUSPECT' : ''}`);
log('wrote governance/reports/link-check.md and .json');

if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `broken=${totals.BROKEN}\nnetwork_suspect=${networkSuspect}\ntotal=${totals.urls}\n`);
}
