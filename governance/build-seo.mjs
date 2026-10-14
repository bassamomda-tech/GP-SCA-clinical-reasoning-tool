#!/usr/bin/env node
/* ============================================================
   Reasoning GP — search-engine check + sitemap builder
   ------------------------------------------------------------
   Run from the repository root:

     node governance/build-seo.mjs            rebuild sitemap.xml and write
                                              governance/reports/seo-audit.md
     node governance/build-seo.mjs --check    report only, leave sitemap.xml alone

   Options:
     --report <file>        where to write the report (default governance/reports/seo-audit.md)
     --summary-out <file>   also save the headline numbers as JSON
     --before <file>        a summary JSON from an earlier run → adds a "before" column
     --print-noindex        also require noindex on print copies (off by default, see below)

   What it checks on every PUBLIC page (not a redirect, not a print copy, not
   noindex, not blocked in robots.txt):
     • <title> present, unique, ideally ≤ 60 characters
     • <meta name="description"> present, unique, 70–160 characters
     • <link rel="canonical"> present and pointing at the page's own address
     • Open Graph basics: og:title, og:description, og:url, og:type
     • <html lang="en-GB">
     • exactly one <h1> in the HTML (pages that draw their heading with a
       script are listed separately — check those in a browser)
   Owner/console pages must carry noindex. Print copies must point their
   canonical at the main page; noindex is NOT required on them because Google
   advises against mixing noindex with a canonical that points elsewhere.
   robots.txt must name the sitemap.

   sitemap.xml lists every public page once (no print twins, owner pages,
   redirects or noindex pages). <lastmod> is the page's review date where the
   page or the review register gives one: the later of the review round for
   its kind (assets/provenance.js ROUNDS) and the page's own "Reviewed" date.

   Only Node's standard library is used. No network.
   ============================================================ */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SITE = 'https://gpreasoning.uk/';
const args = process.argv.slice(2);
const opt = (name) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : null; };
const CHECK_ONLY = args.includes('--check');
const PRINT_NOINDEX = args.includes('--print-noindex');
const REPORT = opt('--report') || 'governance/reports/seo-audit.md';
const SUMMARY_OUT = opt('--summary-out');
const BEFORE = opt('--before');

const SKIP_DIRS = new Set(['.git', 'node_modules', 'governance', '.github', 'uploads', 'notes', 'screenshots', '_deploy']);
const MONTHS = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, sept: 9, oct: 10, nov: 11, dec: 12,
  january: 1, february: 2, march: 3, april: 4, june: 6, july: 7, august: 8, september: 9, october: 10, november: 11, december: 12 };

/* ---------- helpers ---------- */
function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') && e.name !== '.well-known') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name)) walk(p, out); }
    else if (e.name.endsWith('.html')) out.push(path.relative(ROOT, p).split(path.sep).join('/'));
  }
  return out;
}
const decode = (s) => String(s || '')
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'")
  .replace(/&middot;/g, '·').replace(/&mdash;/g, '—').replace(/&ndash;/g, '–').replace(/&nbsp;/g, ' ')
  .replace(/&#(\d+);/g, (m, n) => String.fromCodePoint(+n));
const metaContent = (head, attr, name) => {
  // content="…" may hold apostrophes (Bell's palsy) and content='…' may hold quotes
  const val = `content=(?:"([^"]*)"|'([^']*)')`;
  const re1 = new RegExp(`<meta[^>]*${attr}=["']${name}["'][^>]*${val}`, 'i');
  const re2 = new RegExp(`<meta[^>]*${val}[^>]*${attr}=["']${name}["']`, 'i');
  const m = head.match(re1) || head.match(re2);
  return m ? decode(m[1] != null ? m[1] : m[2]).trim() : null;
};
function parseDate(s) {
  s = String(s || '').trim().replace(/\s+/g, ' ');
  let m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (m) return `${m[1]}-${m[2]}-${m[3]}`;
  m = s.match(/^(\d{1,2}) ([A-Za-z]+)\.? (\d{4})$/);
  if (m && MONTHS[m[2].toLowerCase()]) return `${m[3]}-${String(MONTHS[m[2].toLowerCase()]).padStart(2, '0')}-${m[1].padStart(2, '0')}`;
  m = s.match(/^([A-Za-z]+)\.? (\d{4})$/);
  if (m && MONTHS[m[1].toLowerCase()]) return `${m[2]}-${String(MONTHS[m[1].toLowerCase()]).padStart(2, '0')}-01`;
  return null;
}
const later = (a, b) => (!a ? b : !b ? a : (a > b ? a : b));
const urlFor = (rel) => SITE + (rel === 'index.html' ? '' : rel.replace(/(^|\/)index\.html$/, '$1'));

/* ---------- robots.txt ---------- */
const robotsTxt = fs.existsSync('robots.txt') ? fs.readFileSync('robots.txt', 'utf8') : '';
const disallow = [...robotsTxt.matchAll(/^Disallow:\s*(\S+)/gim)].map((m) => m[1]);
const blocked = (rel) => disallow.some((d) => ('/' + rel).startsWith(d));
const robotsHasSitemap = /^Sitemap:\s*https:\/\/gpreasoning\.uk\/sitemap\.xml\s*$/im.test(robotsTxt);

/* ---------- review rounds (assets/provenance.js) ---------- */
const prov = fs.existsSync('assets/provenance.js') ? fs.readFileSync('assets/provenance.js', 'utf8') : '';
const ROUNDS = {};
for (const m of prov.matchAll(/\{\s*kind:\s*'(\w+)'\s*,\s*date:\s*'([^']+)'/g)) ROUNDS[m[1]] = parseDate(m[2]);
const kindOf = (rel) => rel.startsWith('tools/management/') ? 'protocol' : rel.startsWith('tools/algorithms/') ? 'algorithm' : rel.startsWith('cases/') ? 'case' : 'page';
function ownReviewDate(html) {
  const c = [];
  let m = html.match(/\breviewed:\s*["']([^"']+)["']/);                       // protocol data (MG.render)
  if (m) c.push(parseDate(m[1]));
  m = html.match(/Reviewed:\s*([0-9]{0,2}\s*[A-Z][a-z]+\.?\s+20\d\d)/);          // .rgp-reviewed stamp
  if (m) c.push(parseDate(m[1]));
  m = html.match(/Last reviewed\s+([0-9]{0,2}\s*[A-Z][a-z]+\.?\s+20\d\d)/);      // hub review stamp
  if (m) c.push(parseDate(m[1]));
  return c.filter(Boolean).sort().pop() || null;
}

/* ---------- scan ---------- */
const files = walk(ROOT, []).sort();
const pages = [];
for (const rel of files) {
  const html = fs.readFileSync(rel, 'utf8');
  const hi = html.search(/<\/head>/i);
  const head = hi > 0 ? html.slice(0, hi) : html.slice(0, 6000);
  const robots = (metaContent(head, 'name', 'robots') || '').toLowerCase();
  const p = {
    rel,
    redirect: /http-equiv=["']refresh/i.test(head) || /location\.replace\(/.test(html.slice(0, 4000)),
    print: /-print\.html$/.test(rel) || /name=["']omelette-print-source["']/.test(head),
    noindex: /noindex/.test(robots),
    blocked: blocked(rel),
    title: (head.match(/<title>([\s\S]*?)<\/title>/i) || [])[1],
    desc: metaContent(head, 'name', 'description'),
    canon: (head.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) || [])[1] || null,
    og: Object.fromEntries(['og:title', 'og:description', 'og:url', 'og:type'].map((k) => [k, !!metaContent(head, 'property', k)])),
    lang: (html.slice(0, 600).match(/<html[^>]*\blang=["']([^"']+)["']/i) || [])[1] || '',
    h1: (html.match(/<h1[\s>]/gi) || []).length,
    jsonld: (html.match(/application\/ld\+json/g) || []).length,
    review: ownReviewDate(html)
  };
  if (p.title != null) p.title = decode(p.title.replace(/\s+/g, ' ').trim());
  p.public = !p.redirect && !p.print && !p.noindex && !p.blocked;
  p.owner = !p.redirect && !p.print && (p.blocked || p.noindex);
  pages.push(p);
}
const pub = pages.filter((p) => p.public);
const prints = pages.filter((p) => p.print && !p.redirect);
const owners = pages.filter((p) => p.owner);

/* ---------- checks ---------- */
const issues = {};
const add = (k, rel, note) => { (issues[k] = issues[k] || []).push(note ? `${rel} — ${note}` : rel); };
const count = (arr, f) => arr.reduce((m, x) => { const k = f(x); if (k) m.set(k, (m.get(k) || 0) + 1); return m; }, new Map());
const titleCount = count(pub, (p) => p.title);
const descCount = count(pub, (p) => p.desc);
for (const p of pub) {
  if (!p.title) add('title missing', p.rel);
  else {
    if (titleCount.get(p.title) > 1) add('title duplicated', p.rel, p.title);
    if (p.title.length > 60) add('title over 60 characters (advisory)', p.rel, `${p.title.length}`);
  }
  if (!p.desc) add('description missing', p.rel);
  else {
    if (descCount.get(p.desc) > 1) add('description duplicated', p.rel);
    if (p.desc.length < 70) add('description under 70 characters', p.rel, `${p.desc.length}`);
    if (p.desc.length > 160) add('description over 160 characters (advisory)', p.rel, `${p.desc.length}`);
  }
  if (!p.canon) add('canonical missing', p.rel);
  else if (p.canon !== urlFor(p.rel)) add('canonical points elsewhere', p.rel, p.canon);
  const miss = Object.entries(p.og).filter(([, v]) => !v).map(([k]) => k);
  if (miss.length) add('Open Graph basics missing', p.rel, miss.join(', '));
  if (p.lang !== 'en-GB') add('lang is not en-GB', p.rel, p.lang || '(none)');
  if (p.h1 === 0) add('no <h1> in the HTML (drawn by script? check in a browser)', p.rel);
  if (p.h1 > 1) add('more than one <h1>', p.rel, `${p.h1}`);
}
for (const p of owners) if (!p.noindex) add('owner page without noindex', p.rel, p.blocked ? 'blocked in robots.txt only' : '');
for (const p of prints) {
  const main = urlFor(p.rel.replace(/-print\.html$/, '.html'));
  if (!p.canon) add('print copy without canonical', p.rel);
  else if (p.canon !== main && !p.noindex) add('print copy canonical not the main page', p.rel, p.canon);
  if (PRINT_NOINDEX && !p.noindex) add('print copy without noindex', p.rel);
}
if (!robotsHasSitemap) add('robots.txt does not name the sitemap', 'robots.txt');

/* ---------- sitemap ---------- */
const smEntries = pub.map((p) => {
  const k = kindOf(p.rel);
  const lastmod = later(ROUNDS[k] || null, p.review);
  return { loc: urlFor(p.rel), lastmod };
}).sort((a, b) => (a.loc === SITE ? -1 : b.loc === SITE ? 1 : a.loc.localeCompare(b.loc)));
const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  smEntries.map((e) => `  <url><loc>${e.loc}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}</url>`).join('\n') +
  '\n</urlset>\n';
const oldSitemap = fs.existsSync('sitemap.xml') ? fs.readFileSync('sitemap.xml', 'utf8') : '';
const oldLocs = new Set([...oldSitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
const newLocs = new Set(smEntries.map((e) => e.loc));
const smMissing = [...newLocs].filter((l) => !oldLocs.has(l));
const smExtra = [...oldLocs].filter((l) => !newLocs.has(l));
const smNoLastmod = [...oldSitemap.matchAll(/<url>(?:(?!<\/url>)[\s\S])*<\/url>/g)].filter((m) => !/<lastmod>/.test(m[0])).length;
if (!CHECK_ONLY) fs.writeFileSync('sitemap.xml', sitemap);

/* ---------- report ---------- */
const n = (k) => (issues[k] || []).length;
const summary = {
  'HTML files scanned': files.length,
  'public pages': pub.length,
  'print copies': prints.length,
  'owner / noindex pages': owners.length,
  'redirect stubs': pages.filter((p) => p.redirect).length,
  'title missing': n('title missing'),
  'title duplicated': n('title duplicated'),
  'title over 60 characters (advisory)': n('title over 60 characters (advisory)'),
  'description missing': n('description missing'),
  'description duplicated': n('description duplicated'),
  'description under 70 characters': n('description under 70 characters'),
  'description over 160 characters (advisory)': n('description over 160 characters (advisory)'),
  'canonical missing': n('canonical missing'),
  'canonical points elsewhere': n('canonical points elsewhere'),
  'Open Graph basics missing': n('Open Graph basics missing'),
  'lang is not en-GB': n('lang is not en-GB'),
  'no <h1> in the HTML (drawn by script? check in a browser)': n('no <h1> in the HTML (drawn by script? check in a browser)'),
  'more than one <h1>': n('more than one <h1>'),
  'owner page without noindex': n('owner page without noindex'),
  'print copy canonical not the main page': n('print copy canonical not the main page') + n('print copy without canonical'),
  'robots.txt names the sitemap': robotsHasSitemap ? 'yes' : 'NO',
  'sitemap.xml: public pages missing from it': CHECK_ONLY ? smMissing.length : 0,
  'sitemap.xml: entries that should not be there': CHECK_ONLY ? smExtra.length : 0,
  'sitemap.xml: entries without lastmod': CHECK_ONLY ? smNoLastmod : smEntries.filter((e) => !e.lastmod).length
};
const before = BEFORE && fs.existsSync(BEFORE) ? JSON.parse(fs.readFileSync(BEFORE, 'utf8')) : null;
let md = `# Search-engine (SEO) check\n\nBuilt by \`node governance/build-seo.mjs${CHECK_ONLY ? ' --check' : ''}\` on ${new Date().toISOString().slice(0, 10)}.` +
  ` ${CHECK_ONLY ? 'sitemap.xml was not changed.' : `sitemap.xml rebuilt: ${smEntries.length} pages (${smMissing.length} added, ${smExtra.length} removed).`}\n\n`;
md += before ? '| Check | Before | Now |\n|---|---:|---:|\n' : '| Check | Count |\n|---|---:|\n';
for (const [k, v] of Object.entries(summary)) md += before ? `| ${k} | ${before[k] ?? '–'} | ${v} |\n` : `| ${k} | ${v} |\n`;
md += `\nAdvisory rows are worth fixing when a page is next edited; they do not stop a page being indexed.\n`;
md += `Pages whose heading is drawn by a script (protocols, many pathways) have a rendered <h1> in the browser; the structured data script (assets/seo-jsonld.js) adds MedicalWebPage data at run time.\n`;
if (!CHECK_ONLY && (smMissing.length || smExtra.length)) {
  md += `\n## sitemap.xml changes\n`;
  if (smMissing.length) md += `\nAdded:\n` + smMissing.map((l) => `- ${l}`).join('\n') + '\n';
  if (smExtra.length) md += `\nRemoved (redirect, print copy, owner or noindex page):\n` + smExtra.map((l) => `- ${l}`).join('\n') + '\n';
}
md += `\n## Details\n`;
for (const [k, list] of Object.entries(issues)) {
  md += `\n### ${k} (${list.length})\n\n` + list.slice(0, 400).map((x) => `- ${x}`).join('\n') + (list.length > 400 ? `\n- …and ${list.length - 400} more` : '') + '\n';
}
if (!Object.keys(issues).length) md += '\nNo issues.\n';
fs.mkdirSync(path.dirname(REPORT), { recursive: true });
fs.writeFileSync(REPORT, md);
if (SUMMARY_OUT) fs.writeFileSync(SUMMARY_OUT, JSON.stringify(summary, null, 1));
console.log(`SEO check: ${pub.length} public pages · ${Object.values(issues).reduce((s, l) => s + l.length, 0)} findings · report ${REPORT}` +
  (CHECK_ONLY ? '' : ` · sitemap.xml ${smEntries.length} URLs`));
