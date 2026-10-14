#!/usr/bin/env node
/* ============================================================
   Reasoning GP — build the owner review-due index
   ------------------------------------------------------------
   Run from anywhere after content changes (or ask Claude to):

       node governance/build-review-index.mjs

   Writes assets/review-index.json, which pages/review-due.html reads.
   No npm packages. Node 18+.

   Where the review dates come from (the same places the page itself
   uses, so the dashboard shows what a reader sees):

   Protocols, algorithms, cases — the provenance strip under the title
   (assets/provenance.js). Its rules are copied here exactly:
     • a page's own date: the protocol data (MG.render reviewed / nextReview),
       window.RGP_PROV_DATA, or the DATES registry in provenance.js;
     • the review ROUND for the page kind (e.g. "October 2026") — the LATER
       of the round and the page's own date wins; when the round wins, the
       next review is recomputed from the round;
     • next review = last review + cycle: 6 months for slugs on the
       HIGH_RISK list, 12 months for everything else (CYCLE_HIGH / CYCLE_STD).
     ROUNDS, HIGH_RISK, the cycles and DATES are read from provenance.js
     itself, so changing them there changes this index the next time it runs.
   Snapshots (tools/management/summaries/, tools/algorithms/one-page/) —
     the printed line "Reviewed <Month YYYY> · next review <Month YYYY>".
   Retired 2-page summaries (tools/algorithms/summaries/) — the line
     "Reviewed: … · next review due …" if the page is still live.

   Guidance cited by each page: governance/guidance-register.json (status,
   last_checked, replacement, note), plus the protocol's own "guideline"
   line, which carries the guideline years.

   Not listed: print twins (they mirror the protocol), redirect stubs,
   layout templates.
   ============================================================ */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'assets', 'review-index.json');
const rd = p => fs.readFileSync(path.join(ROOT, p), 'utf8');
const exists = p => fs.existsSync(path.join(ROOT, p));
const list = dir => exists(dir) ? fs.readdirSync(path.join(ROOT, dir)).filter(f => f.endsWith('.html')).sort().map(f => dir + '/' + f) : [];

/* ---------- provenance.js policy ---------- */
const provSrc = rd('assets/provenance.js');
const a = provSrc.indexOf('var CYCLE_STD'), b = provSrc.indexOf('function roundFor');
if (a < 0 || b < 0) throw new Error('provenance.js layout changed: cannot find CYCLE_STD … roundFor');
const POL = vm.runInNewContext(provSrc.slice(a, b) + ';({CYCLE_STD:CYCLE_STD, CYCLE_HIGH:CYCLE_HIGH, DUE_WINDOW:DUE_WINDOW, HIGH_RISK:HIGH_RISK, DATES:DATES, ROUNDS:ROUNDS})');

const MONTHS = { january:0,february:1,march:2,april:3,may:4,june:5,july:6,august:7,september:8,october:9,november:10,december:11,
  jan:0,feb:1,mar:2,apr:3,jun:5,jul:6,aug:7,sep:8,sept:8,oct:9,nov:10,dec:11 };
const MSHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function parseDate(s) {           // same rules as provenance.js parseDate()
  if (!s) return null;
  s = String(s).trim();
  let m = s.match(/^(\d{1,2})\s+([A-Za-z]+)\.?\s+(\d{4})$/);
  if (m && MONTHS[m[2].toLowerCase()] !== undefined) return { y: +m[3], m: MONTHS[m[2].toLowerCase()], d: +m[1], day: true };
  m = s.match(/^([A-Za-z]+)\.?\s+(\d{4})$/);
  if (m && MONTHS[m[1].toLowerCase()] !== undefined) return { y: +m[2], m: MONTHS[m[1].toLowerCase()], d: 1, day: false };
  m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (m) return { y: +m[1], m: +m[2] - 1, d: +m[3], day: true };
  return null;
}
const asTime = p => Date.UTC(p.y, p.m, p.d);
function addMonths(p, n) { const d = new Date(Date.UTC(p.y, p.m, p.d)); d.setUTCMonth(d.getUTCMonth() + n); return { y: d.getUTCFullYear(), m: d.getUTCMonth(), d: d.getUTCDate(), day: p.day }; }
const fmt = p => p ? (p.day ? p.d + ' ' : '') + MSHORT[p.m] + ' ' + p.y : '';
const iso = p => p ? `${p.y}-${String(p.m + 1).padStart(2, '0')}-${String(p.d).padStart(2, '0')}` : '';

/* ---------- text helpers ---------- */
const ENT = { amp:'&', lt:'<', gt:'>', quot:'"', apos:"'", nbsp:' ', middot:'·', mdash:'—', ndash:'–', rsquo:'’', lsquo:'‘', ldquo:'“', rdquo:'”', hellip:'…' };
const decode = s => String(s || '')
  .replace(/\\u([0-9a-fA-F]{4})/g, (m, h) => String.fromCharCode(parseInt(h, 16)))
  .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => e[0] === '#' ? String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : +e.slice(1)) : (ENT[e.toLowerCase()] ?? m));
const strip = s => decode(String(s || '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const noEmoji = s => s.replace(/^[^A-Za-z0-9(]+/u, '').trim();
const isRedirect = h => /http-equiv=["']refresh["']/i.test(h.slice(0, 4000)) && h.length < 8000;
const titleTag = h => { const m = h.match(/<title>([\s\S]*?)<\/title>/i); return m ? strip(m[1]).split(/\s+[·|]\s+/)[0].replace(/\s+—\s+1-page summary$/i, '').trim() : ''; };
const firstH1 = h => { const m = h.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i); return m ? noEmoji(strip(m[1])) : ''; };
const jsField = (h, k) => { const m = h.match(new RegExp('\\b' + k + '\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"')); return m ? decode(m[1]) : ''; };
const slugOf = p => p.split('/').pop().replace(/\.html?$/i, '').toLowerCase();

/* ---------- guidance register ---------- */
const reg = JSON.parse(rd('governance/guidance-register.json'));
const byPage = new Map();   // page path -> [register keys]
for (const [k, e] of Object.entries(reg.entries || {})) for (const p of e.pages || []) {
  if (!byPage.has(p)) byPage.set(p, []);
  byPage.get(p).push(k);
}
const KEEP_TYPES = new Set(['nice', 'mhra-dsu', 'cks', 'gov-uk', 'other-guidance']);   // papers and BNF drug pages are left out (too many, no review dates)
const usedKeys = new Set();
function guidanceFor(paths) {
  const keys = new Set();
  for (const p of paths) for (const k of byPage.get(p) || []) if (KEEP_TYPES.has(reg.entries[k].type)) keys.add(k);
  const arr = [...keys].sort((x, y) => (reg.entries[x].type === 'nice' ? 0 : 1) - (reg.entries[y].type === 'nice' ? 0 : 1) || x.localeCompare(y, 'en', { numeric: true }));
  arr.forEach(k => usedKeys.add(k));
  return arr;
}

/* ---------- provenance computation (mirror of provenance.js build()) ---------- */
function roundFor(kind) { return (POL.ROUNDS || []).find(r => r.kind === kind) || null; }
function provenance(kind, slug, own) {
  // own: {reviewed, next, stampOnly, risk, cycle}
  const highRisk = POL.HIGH_RISK.includes(slug) || !!own.risk;
  const cycle = own.cycle || (highRisk ? POL.CYCLE_HIGH : POL.CYCLE_STD);
  let rev = own.stampOnly ? null : parseDate(own.reviewed);
  let nextOverride = own.next, source = rev ? 'page' : '';
  const r = roundFor(kind);
  if (r) {
    const rdd = parseDate(r.date);
    if (rdd && (!rev || asTime(rdd) > asTime(rev))) { rev = rdd; nextOverride = null; source = 'round'; }
  }
  const next = parseDate(nextOverride) || (rev ? addMonths(rev, cycle) : null);
  const flags = [];
  if (rev && next && highRisk && asTime(next) > asTime(addMonths(rev, POL.CYCLE_HIGH)) + 86400000)
    flags.push(`High-risk topic (${POL.CYCLE_HIGH}-monthly cycle), but the page's own next-review date is ${fmt(next)}`);
  return { rev, next, cycle, highRisk, source, flags };
}

/* ---------- collect ---------- */
const items = [];
const skipped = { print: 0, redirect: 0, template: 0, noStrip: 0 };
function push(o) { items.push(o); }

// Protocols
for (const p of list('tools/management')) {
  if (/-print\.html$/.test(p)) { skipped.print++; continue; }
  if (/\/_/.test(p)) { skipped.template++; continue; }
  const h = rd(p);
  if (isRedirect(h)) { skipped.redirect++; continue; }
  if (!/assets\/provenance\.js/.test(h)) { skipped.noStrip++; continue; }
  const slug = slugOf(p);
  const own = { ...(POL.DATES[slug] || {}) };
  const mgReviewed = jsField(h, 'reviewed'), mgNext = jsField(h, 'nextReview');
  if (!own.reviewed && mgReviewed) { own.reviewed = mgReviewed; own.next = own.next || mgNext; }
  const pv = provenance('protocol', slug, own);
  const print = p.replace(/\.html$/, '-print.html');
  const snap = (h.match(/snapshot\s*:\s*"([^"]+)"/) || [])[1];
  push({ type: 'protocol', slug, url: p, title: jsField(h, 'title') || firstH1(h) || titleTag(h),
    reviewed: fmt(pv.rev), next: fmt(pv.next), next_iso: iso(pv.next), cycle: pv.cycle, high_risk: pv.highRisk, basis: pv.source, flags: pv.flags,
    page_reviewed: mgReviewed, page_next: mgNext,
    guideline_text: jsField(h, 'guideline'),
    print: exists(print) ? print : '', snapshot: snap ? 'tools/management/' + snap : '',
    guidance: guidanceFor([p, print]) });
}

// Algorithms
for (const p of list('tools/algorithms')) {
  const h = rd(p);
  if (isRedirect(h)) { skipped.redirect++; continue; }
  if (!/assets\/provenance\.js/.test(h)) { skipped.noStrip++; continue; }
  const slug = slugOf(p);
  const pd = h.match(/RGP_PROV_DATA\s*=\s*(\{[^}]*\})/);
  let own = { ...(POL.DATES[slug] || {}) };
  if (pd) { try { own = { ...own, ...vm.runInNewContext('(' + pd[1] + ')') }; } catch {} }
  const pv = provenance('algorithm', slug, own);
  const snap = exists('tools/algorithms/one-page/' + slug + '.html') ? 'tools/algorithms/one-page/' + slug + '.html' : '';
  push({ type: 'algorithm', slug, url: p, title: firstH1(h) || titleTag(h),
    reviewed: fmt(pv.rev), next: fmt(pv.next), next_iso: iso(pv.next), cycle: pv.cycle, high_risk: pv.highRisk, basis: pv.source, flags: pv.flags,
    snapshot: snap, guidance: guidanceFor([p]) });
}

// Snapshots + any live retired 2-page summaries
const SNAP_RE = /Reviewed:?\s*([A-Za-z]+\.?\s+\d{4}|\d{1,2}\s+[A-Za-z]+\s+\d{4})\s*(?:<\/b>)?\s*(?:·|&middot;|·)\s*next review(?: due)?\s+([A-Za-z]+\.?\s+\d{4}|\d{1,2}\s+[A-Za-z]+\s+\d{4})/i;
for (const [dir, parentDir, type] of [['tools/management/summaries', 'tools/management', 'snapshot'], ['tools/algorithms/one-page', 'tools/algorithms', 'snapshot'], ['tools/algorithms/summaries', 'tools/algorithms', 'summary']]) {
  for (const p of list(dir)) {
    const h = rd(p);
    if (isRedirect(h)) { skipped.redirect++; continue; }
    const m = h.match(SNAP_RE);
    const rev = m ? parseDate(m[1]) : null, next = m ? parseDate(m[2]) : null;
    const slug = slugOf(p);
    const parent = parentDir + '/' + slug + '.html';
    // The register predates most Snapshots: fall back to what the parent page cites.
    let g = guidanceFor([p]), gFrom = 'page';
    if (!g.length && exists(parent)) { g = guidanceFor([parent, parent.replace(/\.html$/, '-print.html')]); gFrom = 'parent'; }
    push({ type, slug, url: p, title: firstH1(h) || titleTag(h), parent_type: parentDir.endsWith('management') ? 'protocol' : 'algorithm',
      reviewed: fmt(rev), next: fmt(next), next_iso: iso(next), basis: m ? 'stated' : '',
      parent: exists(parent) ? parent : '', flags: m ? [] : ['No review line found on the page'], guidance: g, guidance_from: gFrom });
  }
}

// Cases
for (const p of list('cases')) {
  const h = rd(p);
  if (isRedirect(h)) { skipped.redirect++; continue; }
  if (!/assets\/provenance\.js/.test(h)) { skipped.noStrip++; continue; }
  const slug = slugOf(p);
  const own = { ...(POL.DATES[slug] || {}) };
  const pv = provenance('case', slug, own);
  push({ type: 'case', slug, url: p, title: firstH1(h) || titleTag(h),
    reviewed: fmt(pv.rev), next: fmt(pv.next), next_iso: iso(pv.next), cycle: pv.cycle, high_risk: pv.highRisk, basis: pv.source, flags: pv.flags,
    guidance: guidanceFor([p]) });
}

/* ---------- guidance lookup (only entries a listed page cites) ---------- */
const guidance = {};
for (const k of [...usedKeys].sort()) {
  const e = reg.entries[k];
  guidance[k] = { type: e.type, label: e.label, status: e.status || '', last_checked: e.last_checked || '', replacement: e.replacement || '', note: e.note || '' };
}

items.sort((x, y) => (x.next_iso || '9999') .localeCompare(y.next_iso || '9999') || x.type.localeCompare(y.type) || x.title.localeCompare(y.title));
const counts = {};
for (const i of items) counts[i.type] = (counts[i.type] || 0) + 1;

const out = {
  generated: new Date().toISOString().slice(0, 10),
  how_to_use: 'Read by pages/review-due.html. Rebuild with: node governance/build-review-index.mjs (after any content change).',
  policy: {
    source: 'assets/provenance.js',
    cycle_standard_months: POL.CYCLE_STD, cycle_high_risk_months: POL.CYCLE_HIGH,
    rounds: POL.ROUNDS, high_risk_slugs: POL.HIGH_RISK.length,
    snapshots: 'own printed "Reviewed … · next review …" line',
  },
  guidance_check: { last_full_check: reg.last_full_check || '', next_due: reg.next_due || '', register_generated: reg.generated || '' },
  counts, skipped,
  items, guidance,
};
fs.writeFileSync(OUT, JSON.stringify(out));
console.log(`review index: ${items.length} pages (${Object.entries(counts).map(([k, v]) => v + ' ' + k).join(', ')}), ${Object.keys(guidance).length} guidance entries`);
console.log(`skipped: ${skipped.print} print twins, ${skipped.redirect} redirects, ${skipped.template} templates, ${skipped.noStrip} without a review strip`);
console.log('wrote assets/review-index.json (' + Math.round(fs.statSync(OUT).size / 1024) + ' KB)');
