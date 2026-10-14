#!/usr/bin/env node
/* ============================================================
   Reasoning GP — build the whole-site word search index
   ------------------------------------------------------------
   Run from the site root after any content change:

       node governance/build-search-index.mjs

   Writes assets/search/manifest.json plus one shard per content type
   (assets/search/idx-<type>.json). The search box loads them only when
   someone starts typing. No dependencies beyond Node 18+.

   After the same content changes, also rebuild the owner review-due index:
       node governance/build-review-index.mjs   (writes assets/review-index.json)

   What is indexed (public, indexable pages only):
     protocols  tools/management/*.html      (the MG.render data, not the script shell)
     pathways   tools/algorithms/*.html      (the Steps, #flow — never the retired Diagram/Summary views)
     snapshots  tools/algorithms/one-page/*, tools/management/summaries/*
     articles   assets/articles-data-*.js    (one entry per article)
     cases      cases/*.html
     sca        tools/sca-*.html             (the static text of each SCA tool page)
     rx         assets/prescriptions-data*.js (one entry per ready prescription)
     calc       assets/calculators-data*.js  (one entry per calculator)
     audio      assets/audio-scripts-*.js    (one entry per audio briefing)
     pages      pages/*.html, tools/*.html hub/tool pages, index.html
   Skipped: meta-refresh redirect stubs, *-print.html twins, noindex pages
   other than the Snapshots, robots-disallowed/admin pages (incl. the owner
   page pages/review-due.html), withheld pages
   (Consult Scribe), the directory hubs (their cards are already in the
   topic results), and the retired 2-page algorithm summaries.

   Paid content: the index stores words as a bag (no positions, so page text
   cannot be rebuilt from it) plus ONE short snippet per section — at most
   160 characters on members-only pages, 240 on free pages. Run with
   --gated-headings-only to index members-only pages by title and headings alone.
   ============================================================ */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'assets', 'search');
const SNIP_GATED = 160, SNIP_FREE = 240;
const args = new Set(process.argv.slice(2));
const QUIET = args.has('--quiet');
// Owner switch: --gated-headings-only indexes members-only pages by title and headings
// alone (no body words, no snippets). Default: body words + a ≤160-character snippet.
const GATED_HEADINGS_ONLY = args.has('--gated-headings-only');

/* ---------- shared tokeniser (the browser uses the same file) ---------- */
const coreSrc = fs.readFileSync(path.join(ROOT, 'assets', 'search-core.js'), 'utf8');
const coreCtx = { globalThis: {} }; coreCtx.globalThis = coreCtx;
vm.runInNewContext(coreSrc, coreCtx);
const C = coreCtx.RGPSearchCore;

/* ---------- paywall mirror (keep in step with bronzeReason() in assets/site.js) ---------- */
const OPEN = ['articles.html','resources.html','leaflets.html','consultation-spine.html','sca-guide.html','sca-group.html','clinic-guide.html','privacy.html','terms.html','disclaimer.html','pricing.html','content-safety.html','ai-safety.html','accessibility.html','search.html','index.html'];
const FREE_CASES = ['chest-pain.html','hypertension.html','type-2-diabetes.html','headache.html','anaemia.html'];
const FREE_ALGS = ['chest-pain.html','headache.html','abdominal-pain.html','back-pain.html','breathlessness.html'];
const FREE_PROTOCOLS = ['hypertension.html','asthma.html','type-2-diabetes.html','gout.html','migraine.html'];
function isGated(url){
  const base = url.split('/').pop();
  if (OPEN.includes(base)) return false;
  if (/^cases\//.test(url)) return !FREE_CASES.includes(base);
  if (/^tools\/algorithms\//.test(url)) return !FREE_ALGS.includes(base);
  if (/^tools\/management\//.test(url)) return !FREE_PROTOCOLS.includes(base);
  return true;
}

/* ---------- small helpers ---------- */
const ENT = { amp:'&', lt:'<', gt:'>', quot:'"', apos:"'", nbsp:' ', middot:'·', mdash:'—', ndash:'–', hellip:'…', rarr:'→', larr:'←', ge:'≥', le:'≤', times:'×', deg:'°', micro:'µ', plusmn:'±', pound:'£', copy:'©', reg:'®', lsquo:'‘', rsquo:'’', ldquo:'“', rdquo:'”', bull:'•', check:'✓', uarr:'↑', darr:'↓', alpha:'α', beta:'β', gamma:'γ', delta:'δ', mu:'μ', frac12:'½', frac14:'¼', sup2:'²', sup3:'³', eacute:'é', ouml:'ö', uuml:'ü', szlig:'ß' };
function decode(s){
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z0-9]+);/gi, (m, e) => {
    if (e[0] === '#') { const n = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10); try { return String.fromCodePoint(n); } catch (x) { return ' '; } }
    return ENT[e.toLowerCase()] ?? m;
  });
}
const squash = s => s.replace(/\s+/g, ' ').replace(/\s+([,.;:!?)\]])/g, '$1').replace(/([(\[])\s+/g, '$1').trim();
const stripTags = h => squash(decode(String(h || '').replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ')));
// Leading emoji / symbols off a title ("🫀 Chest Pain" → "Chest Pain")
const cleanTitle = t => squash(String(t || '').replace(/^[^\p{L}\p{N}(]+/u, '').replace(/\s*[·|]\s*Reasoning GP\s*$/i, ''));
function snippet(text, max){
  text = squash(text);
  if (text.length <= max) return text;
  let cut = text.slice(0, max - 1);
  const sp = cut.lastIndexOf(' ');
  if (sp > max * 0.6) cut = cut.slice(0, sp);
  return cut.replace(/[\s,;:·—–-]+$/, '') + '…';
}

/* ---------- HTML → sections ---------- */
const VOID = new Set('area base br col embed hr img input link meta param source track wbr'.split(' '));
const SKIP_TAGS = new Set('nav footer button select option input label form aside dialog'.split(' '));
const WRAPPER_IDS = new Set(['bodyEl','flow','mgRoot','app','main','artRoot','root','content','page']);
const SKIP_IDS = new Set(['viewSummary','viewDiagram','case-nav-mount','artRail','sc-missed-section']);
const SKIP_CLASS = /(^|\s)(rgp-nav|sidebar|sb-overlay|alg-progress|node-tick|collapse-controls|mode-group|mode-bar|view-toggle|vt-btn|sum-bar|tl-strip|alg-foot|bar|tool-breadcrumb|skip-link|why-btn|step-toggle|ct-toc|case-toc|rgp-footer|footer-disclaimer|print-only|sr-only|chips|g-toc)(\s|$)/;
const HEAD_SKIP_CLASS = /(^|\s)(n|eyebrow|step-label|node-num|node-tag|sti-icon|sti-text)(\s|$)/;
// tags that sit inside a word (CHA<sub>2</sub>DS<sub>2</sub>): no space at their edges. Every other
// tag boundary counts as a word break — <strong>Suspected ACS</strong>Central… is two phrases on screen.
const INLINE_TIGHT = new Set('sub sup u mark abbr s wbr'.split(' '));
const TOKEN_RE = /<!--[\s\S]*?-->|<(script|style|svg|noscript|template|textarea|select|iframe)\b[^>]*>[\s\S]*?<\/\1\s*>|<(\/?)([a-zA-Z][a-zA-Z0-9-]*)\b((?:[^>"']|"[^"]*"|'[^']*')*)>|[^<]+|</g;

function attr(a, name){ const m = new RegExp('(?:^|\\s)' + name + '\\s*=\\s*(?:"([^"]*)"|\'([^\']*)\'|([^\\s>]+))', 'i').exec(a || ''); return m ? decode(m[1] ?? m[2] ?? m[3] ?? '') : ''; }

function extractHtml(html, opts = {}){
  const bi = html.search(/<body\b/i);
  const body = bi >= 0 ? html.slice(bi) : html;
  const sections = [{ h: '', a: '', text: [] }];
  const stack = []; // {tag, id, skip, inc, head, emitted}
  let emitted = 0;       // chars of text seen so far (for anchor proximity)
  let headBuf = null, headDepth = -1, headId = '';
  const include = opts.include ? new Set(opts.include) : null;
  TOKEN_RE.lastIndex = 0;
  let m;
  const cur = () => sections[sections.length - 1];
  while ((m = TOKEN_RE.exec(body))){
    const tok = m[0];
    if (tok.startsWith('<!--') || m[1]) continue;
    if (m[3] !== undefined && tok[0] === '<' && m[3]){
      const tag = m[3].toLowerCase(), close = m[2] === '/', a = m[4] || '';
      if (close){
        let i = stack.length - 1;
        while (i >= 0 && stack[i].tag !== tag) i--;
        if (i < 0) continue;
        while (stack.length > i){
          const e = stack.pop();
          if (headBuf !== null && stack.length === headDepth){
            const h = squash(headBuf.join(''));
            headBuf = null; headDepth = -1;
            if (h && h.length < 200){
              // anchor: the heading's own id, else an ancestor that opened just before it
              // anchor: the heading's own id, else the nearest enclosing element with an id
              // (page-wide wrappers excluded) — the highlighter then finds the heading itself
              let anc = headId;
              if (!anc) for (let k = stack.length - 1; k >= 0; k--){ if (stack[k].id && !WRAPPER_IDS.has(stack[k].id)){ anc = stack[k].id; break; } }
              sections.push({ h, a: anc, text: [] });
            }
          }
        }
        if (!INLINE_TIGHT.has(tag)) (headBuf !== null ? headBuf : cur().text).push(' ');
        continue;
      }
      const id = attr(a, 'id'), cls = attr(a, 'class');
      const parent = stack[stack.length - 1];
      const skip = (parent && parent.skip) || SKIP_TAGS.has(tag) || SKIP_IDS.has(id) || SKIP_CLASS.test(cls) ||
                   /\bhidden\b/.test(a.replace(/"[^"]*"|'[^']*'/g, '')) || (headBuf !== null && HEAD_SKIP_CLASS.test(cls));
      const inc = include ? ((parent && parent.inc) || include.has(id)) : true;
      const isHead = !skip && inc && headBuf === null && (/^h[1-4]$/.test(tag) || /(^|\s)(step-title|art-letter-h)(\s|$)/.test(cls));
      if (!INLINE_TIGHT.has(tag)) (headBuf !== null ? headBuf : cur().text).push(' ');
      if (VOID.has(tag) || /\/\s*$/.test(a)) continue;
      stack.push({ tag, id, skip, inc, emitted });
      if (isHead){ headBuf = []; headDepth = stack.length - 1; headId = id; }
      continue;
    }
    if (tok === '<') continue;
    const top = stack[stack.length - 1];
    if (top && (top.skip || !top.inc)) continue;
    if (!top && include) continue;
    const t = decode(tok);
    if (!t.trim()) continue;
    emitted += t.length;
    if (headBuf !== null) headBuf.push(t); else cur().text.push(t);
  }
  return sections.map(s => ({ h: s.h, a: s.a, text: squash(s.text.join('')) })).filter((s, i) => i === 0 || s.text || s.h);
}

function pageTitle(html){
  const h1 = /<h1\b[^>]*>([\s\S]*?)<\/h1>/i.exec(html.slice(Math.max(0, html.search(/<body\b/i))));
  const t = /<title>([\s\S]*?)<\/title>/i.exec(html);
  let title = h1 ? stripTags(h1[1].replace(/<span class="(n|eyebrow)"[^>]*>[\s\S]*?<\/span>/g, '')) : '';
  if (!title && t) title = stripTags(t[1]).split(/\s[·|—]\s/)[0];
  return cleanTitle(title);
}
function metaDesc(html){ const m = /<meta\s+name="description"\s+content="([^"]*)"/i.exec(html); return m ? decode(m[1]) : ''; }
const isRedirect = html => /http-equiv=["']refresh["']/i.test(html);
const isNoindex = html => /<meta\s+name=["']robots["'][^>]*noindex/i.test(html);

/* ---------- protocol engine data (MG.render) → sections ---------- */
const MG_SKIP_KEYS = new Set(['tone','b','id','icon','alert','cls','kind','href','src','snapshot','reviewed','nextReview','docTitle','eyebrow','nav','arrow','arrowShort','lead','label','step','fromLabel','when']);
function mgStrings(v, key, out){
  if (v == null) return;
  if (typeof v === 'string'){
    if (MG_SKIP_KEYS.has(key)) return;
    if (key === 't' && /^[a-z0-9-]+$/.test(v)) return;
    out.push(stripTags(v)); return;
  }
  if (Array.isArray(v)){ v.forEach(x => mgStrings(x, key, out)); return; }
  if (typeof v === 'object'){ for (const k of Object.keys(v)) mgStrings(v[k], k, out); }
}
// A section's blocks split further at card/ladder headings so the snippet sits near the hit
function mgBlocks(blocks, anchor, out, secTitle){
  let curSec = { h: secTitle, a: anchor, text: [] };
  out.push(curSec);
  (blocks || []).forEach(b => {
    const items = b.items || b.steps || null;
    if (items && items.length && items.some(it => it && (it.h || it.title))){
      items.forEach(it => {
        const h = stripTags(it.h || it.title || '');
        const parts = []; mgStrings(it, '', parts);
        if (h){ curSec = { h: secTitle + ' › ' + h, a: anchor, text: parts.filter(p => p !== h) }; out.push(curSec); }
        else curSec.text.push(...parts);
      });
      curSec = { h: secTitle, a: anchor, text: [] }; out.push(curSec);
    } else {
      const parts = []; mgStrings(b, '', parts); curSec.text.push(...parts);
    }
  });
}
function extractMG(html){
  const m = /MG\.render\(/.exec(html);
  if (!m) return null;
  const start = html.lastIndexOf('<script>', m.index);
  const end = html.indexOf('</script>', m.index);
  const src = html.slice(start + 8, end);
  let data = null;
  const ctx = { MG: { render: d => { data = d; } }, window: {}, document: { querySelector: () => null, getElementById: () => null } };
  try { vm.runInNewContext(src, ctx, { timeout: 2000 }); } catch (e) { return null; }
  if (!data) return null;
  const out = [];
  const lead = [data.stemTitle, data.stemSub, data.guideline].map(stripTags).filter(Boolean);
  out.push({ h: '', a: '', text: lead });
  if (data.glance) { const p = []; mgStrings(data.glance, '', p); out[0].text.push(...p); }
  if (data.quick && data.quick.length){
    const s = []; mgBlocks([{ b: 'cards', items: data.quick }], 'quick', s, 'The 30-second answer'); out.push(...s);
    if (data.quickSub) out[out.length - s.length].text.unshift(stripTags(data.quickSub));
  }
  if (data.pathway && data.pathway.length){ const p = []; mgStrings(data.pathway, '', p); out.push({ h: 'The 3-minute pathway', a: 'pathway', text: p }); }
  (data.sections || []).forEach(s => {
    const secs = []; mgBlocks(s.blocks, s.id || '', secs, stripTags(s.title || s.nav || ''));
    if (s.sub) secs[0].text.unshift(stripTags(s.sub));
    out.push(...secs);
  });
  if (data.flow && data.flow.length){
    data.flow.forEach(it => { const p = []; mgStrings(it, '', p); out.push({ h: stripTags(it.title || it.h || 'Pathway'), a: '', text: p }); });
  }
  // the Evidence panel (reference list) and version history are not indexed
  return {
    title: cleanTitle(String(data.title || '').replace(/\s+\u2014\s+the complete (prescribing )?guide$/i, '')),
    sections: out.map(s => ({ h: s.h, a: s.a, text: squash(s.text.join(' · ')) })).filter((s, i) => i === 0 || s.text)
  };
}

/* ---------- data files (articles, prescriptions, calculators, audio) ---------- */
function loadData(files, globalName){
  const ctx = { window: {}, document: { addEventListener(){}, querySelector: () => null, getElementById: () => null, readyState: 'complete' }, console, Math, Date, navigator: { platform: '' } };
  ctx.window.window = ctx.window; ctx.self = ctx.window;
  for (const f of files){
    const src = fs.readFileSync(f, 'utf8');
    try { vm.runInNewContext(src.replace(/\bwindow\./g, 'window.'), Object.assign(ctx, { window: ctx.window }), { timeout: 4000, filename: f }); }
    catch (e) { console.warn('  ! could not read', path.relative(ROOT, f), '—', e.message); }
  }
  return ctx.window[globalName] || [];
}
function dataStrings(obj, skip){
  const out = [];
  (function walk(v, k){
    if (v == null || typeof v === 'function') return;
    if (typeof v === 'string'){ if (!skip.has(k) && !/^[a-z0-9_-]+$/.test(v)) out.push(stripTags(v)); return; }
    if (typeof v === 'number' || typeof v === 'boolean') return;
    if (Array.isArray(v)) return v.forEach(x => walk(x, k));
    if (typeof v === 'object') for (const kk of Object.keys(v)) walk(v[kk], kk);
  })(obj, '');
  return squash(out.join(' · '));
}
const glob = (dir, re) => fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => re.test(f)).sort().map(f => path.join(dir, f)) : [];
const numSort = (a, b) => (parseInt(a.replace(/\D+/g, '')) || 0) - (parseInt(b.replace(/\D+/g, '')) || 0);

/* ---------- collect every document ---------- */
const docs = [];   // {type, url, title, gated, mode, sections:[{h,a,text}]}
const skipped = { redirect: 0, print: 0, noindex: 0, other: 0 };
function addDoc(d){ if (d && d.sections && d.sections.length && d.title) docs.push(d); }
function readHtml(rel){ return fs.readFileSync(path.join(ROOT, rel), 'utf8'); }
function htmlDoc(rel, type, opts = {}){
  const html = readHtml(rel);
  if (isRedirect(html)) { skipped.redirect++; return null; }
  if (/-print\.html$/.test(rel)) { skipped.print++; return null; }
  if (isNoindex(html) && !opts.allowNoindex) { skipped.noindex++; return null; }
  let title = pageTitle(html), sections;
  const mg = type === 'protocol' ? extractMG(html) : null;
  if (mg) { sections = mg.sections; title = mg.title || title; }
  else {
    sections = extractHtml(html, opts);
    const intro = [metaDesc(html)];
    if (opts.lead){ const lm = opts.lead.exec(html); if (lm) intro.push(stripTags(lm[1])); }
    sections[0].text = squash(intro.filter(Boolean).join(' · ') + ' ' + sections[0].text);
  }
  // a heading equal to the page title adds nothing
  sections.forEach(s => { if (s.h && s.h.toLowerCase() === title.toLowerCase()) s.h = ''; });
  return { type, url: rel, title, gated: isGated(rel), mode: opts.mode || 0, sections };
}

const MODE_CLINIC = 2, MODE_SCA = 4;

// Protocols
for (const f of glob(path.join(ROOT, 'tools/management'), /^[a-z0-9].*\.html$/)){
  const rel = path.relative(ROOT, f).split(path.sep).join('/');
  addDoc(htmlDoc(rel, 'protocol', { mode: MODE_CLINIC, include: null }));
}
// Pathways (Steps only)
for (const f of glob(path.join(ROOT, 'tools/algorithms'), /^[a-z0-9].*\.html$/)){
  const rel = path.relative(ROOT, f).split(path.sep).join('/');
  const html = readHtml(rel);
  const opts = { mode: MODE_CLINIC, lead: /<div class="stem-banner">([\s\S]*?)<\/div>\s*<\/div>/ };
  if (/id="flow"/.test(html)) opts.include = ['flow'];
  addDoc(htmlDoc(rel, 'pathway', opts));
}
// Snapshots (noindex for Google — they canonicalise to their parent — but they are real pages people open)
for (const dir of ['tools/algorithms/one-page', 'tools/management/summaries']){
  for (const f of glob(path.join(ROOT, dir), /^[a-z0-9].*\.html$/)){
    const rel = path.relative(ROOT, f).split(path.sep).join('/');
    const d = htmlDoc(rel, 'snapshot', { mode: MODE_CLINIC, allowNoindex: true });
    // one entry per Snapshot (it condenses its parent page, which is indexed section by section)
    if (d) { d.title = d.title.replace(/\s+—\s+1-page summary$/i, ''); d.sections = [{ h: '', a: '', text: d.sections.map(s => s.text).join(' ') }]; addDoc(d); }
  }
}
// Cases
for (const f of glob(path.join(ROOT, 'cases'), /^[a-z0-9].*\.html$/)){
  const rel = path.relative(ROOT, f).split(path.sep).join('/');
  addDoc(htmlDoc(rel, 'case', { mode: 0 }));
}
// Tool and site pages
const HUBS = new Set(['tools/algorithms.html','tools/management.html','cases.html','pages/articles.html','pages/audios.html','tools/prescriptions.html','tools/calculators.html','pages/search.html']);
const WITHHELD = new Set(['tools/scribe.html']);
const ADMIN = new Set(['tools/access-codes.html','tools/ask-quality.html','pages/ask-quality.html','pages/logo-preview.html','pages/review-due.html','offline.html']);
const pageFiles = [...glob(path.join(ROOT, 'tools'), /\.html$/), ...glob(path.join(ROOT, 'pages'), /\.html$/), path.join(ROOT, 'index.html')];
for (const f of pageFiles){
  const rel = path.relative(ROOT, f).split(path.sep).join('/');
  if (HUBS.has(rel) || WITHHELD.has(rel) || ADMIN.has(rel)) { skipped.other++; continue; }
  const sca = /^tools\/sca-/.test(rel);
  addDoc(htmlDoc(rel, sca ? 'sca' : 'page', { mode: sca ? MODE_SCA : 0 }));
}
// Articles (free: pages/articles.html is open to everyone)
{
  const files = glob(path.join(ROOT, 'assets'), /^articles-data-\d+\.js$/).sort(numSort);
  const arts = loadData(files, 'RGP_ARTICLES');
  arts.forEach(a => {
    if (!a || !a.title) return;
    const url = 'pages/articles.html?q=' + encodeURIComponent(a.title);
    const sec = [{ h: '', a: '', text: squash([a.aka, a.category, a.overview].filter(Boolean).map(stripTags).join(' · ')) }];
    if (a.features && a.features.length) sec.push({ h: 'Key features', a: '', text: a.features.map(stripTags).join(' · ') });
    if (a.management && a.management.length) sec.push({ h: 'Primary-care approach', a: '', text: a.management.map(stripTags).join(' · ') });
    if (a.referral && a.referral.length) sec.push({ h: 'Refer / red flags', a: '', text: a.referral.map(stripTags).join(' · ') });
    docs.push({ type: 'article', url, title: cleanTitle(a.title), gated: false, mode: 0, sections: sec, hs: a.title });
  });
}
// Ready prescriptions (members) — one entry per prescription, opened by #id
{
  const files = glob(path.join(ROOT, 'assets'), /^prescriptions-data.*\.js$/);
  const order = ['prescriptions-data.js'];
  files.sort((a, b) => (order.includes(path.basename(b)) - order.includes(path.basename(a))) || a.localeCompare(b));
  const rx = loadData(files, 'RGP_PRESCRIPTIONS');
  const SK = new Set(['id','category','route','freq','days','icon','tone']);
  rx.forEach(p => {
    if (!p || !p.id || !p.title) return;
    docs.push({ type: 'rx', url: 'tools/prescriptions.html#' + p.id, title: cleanTitle(p.title), gated: true, mode: MODE_CLINIC,
      sections: [{ h: '', a: '', text: dataStrings(p, SK).replace(stripTags(p.title), '') }] });
  });
}
// Calculators (members) — one entry per calculator, opened by #id
{
  const files = glob(path.join(ROOT, 'assets'), /^calculators-data.*\.js$/).sort(numSort);
  const calcs = loadData(files, 'RGP_CALCULATORS');
  const SK = new Set(['id','kind','resultUnit','unit','category']);
  calcs.forEach(c => {
    if (!c || !c.id || !c.title) return;
    docs.push({ type: 'calc', url: 'tools/calculators.html#' + c.id, title: cleanTitle(c.title), gated: true, mode: MODE_CLINIC,
      sections: [{ h: '', a: '', text: dataStrings(c, SK).replace(stripTags(c.title), '') }] });
  });
}
// Audio briefings (members) — the script that is read aloud
{
  const files = glob(path.join(ROOT, 'assets'), /^audio-scripts-\d+\.js$/).sort(numSort);
  const aud = loadData(files, 'RGP_AUDIO_LIST');
  aud.forEach(a => {
    if (!a || !a.title || !a.body) return;
    const t = cleanTitle(a.title);
    docs.push({ type: 'audio', url: 'pages/audios.html', title: t, gated: true, mode: 0, hs: a.title,
      sections: [{ h: '', a: '', text: squash([a.cat, a.sub, stripTags(a.body)].filter(Boolean).join(' · ')) }] });
  });
}

/* ---------- index ---------- */
const SHARDS = [
  { type: 'protocol', label: 'Protocol' },
  { type: 'pathway',  label: 'Pathway' },
  { type: 'snapshot', label: 'Snapshot' },
  { type: 'article',  label: 'Article' },
  { type: 'case',     label: 'Case' },
  { type: 'sca',      label: 'SCA' },
  { type: 'rx',       label: 'Prescription' },
  { type: 'calc',     label: 'Calculator' },
  { type: 'audio',    label: 'Audio' },
  { type: 'page',     label: 'Page' },
];

// Neighbouring small sections that share an anchor are merged (keeps the index small;
// the snippet still comes from the first of them, and the highlighter finds the word on the page).
const MERGE_UNDER = 1600;
function mergeSections(secs){
  const out = [];
  secs.forEach((s, i) => {
    const prev = out[out.length - 1];
    if (i > 1 && prev && prev.a === s.a && prev.text.length < MERGE_UNDER){
      prev.text = squash(prev.text + ' · ' + (s.h && s.h !== prev.h ? s.h.split(' › ').pop() + ': ' : '') + s.text);
      return;
    }
    out.push({ h: s.h, a: s.a, text: s.text });
  });
  return out;
}

// Words in more than this share of a shard's sections are indexed per page, not per section.
const DOC_LEVEL_SHARE = 0.03, DOC_LEVEL_MIN_SECS = 300;

function buildShard(type){
  const list = docs.filter(d => d.type === type);
  const D = [], S = [], P = new Map();
  list.forEach(d => {
    const di = D.length;
    // url, title, flags (1 = members-only, 2 = clinic, 4 = SCA), section-title hint for the highlighter
    D.push(d.hs ? [d.url, d.title, (d.gated ? 1 : 0) | d.mode, d.hs] : [d.url, d.title, (d.gated ? 1 : 0) | d.mode]);
    const titleT = new Set(C.tokens(d.title));
    mergeSections(d.sections).forEach((s, si) => {
      const bodyT = (d.gated && GATED_HEADINGS_ONLY) ? [] : C.tokens(s.text);
      const headT = si === 0 ? titleT : new Set(C.tokens(s.h));
      if (!bodyT.length && !headT.size) return;
      const sIdx = S.length;
      S.push([di, s.h, s.a || '', (d.gated && GATED_HEADINGS_ONLY) ? '' : snippet(s.text, d.gated ? SNIP_GATED : SNIP_FREE), bodyT.length]);
      const tf = new Map();
      bodyT.forEach(t => tf.set(t, (tf.get(t) || 0) + 1));
      headT.forEach(t => { if (!tf.has(t)) tf.set(t, 0); });
      tf.forEach((n, t) => {
        // weight: 4 = word is in this section's heading (or the page title for the lead section);
        //         0–3 = body frequency bucket (0 none, 1 once, 2 twice, 3 three or more)
        const w = (headT.has(t) ? 2 : 0) + (n >= 2 ? 1 : 0);
        let p = P.get(t); if (!p) P.set(t, p = []);
        p.push(sIdx, w);
      });
    });
  });
  // postings, per term, as a string of base-36 numbers:
  //   terms[t]  — section level: (sectionGap * 4 + weight)
  //   dterms[t] — page level, for words found in more than DOC_LEVEL_SHARE of the shard's
  //               sections ("treatment", "review", "blood"): (pageGap * 4 + weight), where
  //               weight 2 = in a heading or the title, 1 = in two or more sections.
  //               Such a word also keeps its section postings where it is in a heading.
  //   Page-level words still filter and rank pages; the section shown comes from the
  //   rarer words in the query or a heading, and the highlighter finds the word on the page.
  const terms = {}, dterms = {};
  const limit = S.length >= DOC_LEVEL_MIN_SECS ? S.length * DOC_LEVEL_SHARE : Infinity;
  [...P.keys()].sort().forEach(t => {
    const p = P.get(t);
    let last = 0; const parts = [];
    if (p.length / 2 > limit){
      const per = new Map();
      for (let i = 0; i < p.length; i += 2){
        const doc = S[p[i]][0], o = per.get(doc) || { h: 0, n: 0 };
        o.n++; if (p[i + 1] & 2) o.h = 2; per.set(doc, o);
      }
      for (const [doc, o] of per){ parts.push(((doc - last) * 4 + o.h + (o.n >= 2 ? 1 : 0)).toString(36)); last = doc; }
      dterms[t] = parts.join(',');
      // …and keep its section postings where it is in a heading (few, and they rank best)
      const hp = []; last = 0;
      for (let i = 0; i < p.length; i += 2) if (p[i + 1] & 2){ hp.push(((p[i] - last) * 4 + p[i + 1]).toString(36)); last = p[i]; }
      if (hp.length) terms[t] = hp.join(',');
      return;
    }
    for (let i = 0; i < p.length; i += 2){ parts.push(((p[i] - last) * 4 + p[i + 1]).toString(36)); last = p[i]; }
    terms[t] = parts.join(',');
  });
  return { v: 1, type, docs: D, secs: S, terms, dterms };
}

/* ---------- synonyms ---------- */
function loadSynonyms(){
  const f = path.join(ROOT, 'governance', 'search-synonyms.txt');
  if (!fs.existsSync(f)) return [];
  const groups = [];
  fs.readFileSync(f, 'utf8').split(/\r?\n/).forEach((line, n) => {
    line = line.replace(/#.*$/, '').trim();
    if (!line) return;
    const alts = line.split('=').map(s => s.trim()).filter(Boolean).map(s => C.tokens(s));
    const ok = alts.filter(a => a.length);
    if (ok.length > 1) groups.push(ok.map(a => a.join(' ')));
    else console.warn('  ! synonyms line ' + (n + 1) + ' ignored (needs two or more terms):', line);
  });
  return groups;
}

/* ---------- write ---------- */
fs.mkdirSync(OUT, { recursive: true });
const manifest = { v: 1, built: new Date().toISOString(), hash: '', snippetMax: { gated: GATED_HEADINGS_ONLY ? 0 : SNIP_GATED, free: SNIP_FREE }, gatedHeadingsOnly: GATED_HEADINGS_ONLY, syn: loadSynonyms(), shards: [] };
const hash = crypto.createHash('sha256');
let totalRaw = 0, totalGz = 0, totalSecs = 0, totalDocs = 0;
const rows = [];
for (const sh of SHARDS){
  const data = buildShard(sh.type);
  if (!data.docs.length) continue;
  const json = JSON.stringify(data);
  const file = 'idx-' + sh.type + '.json';
  fs.writeFileSync(path.join(OUT, file), json);
  const gz = zlib.gzipSync(json, { level: 9 }).length;
  hash.update(json);
  manifest.shards.push({ type: sh.type, label: sh.label, file, docs: data.docs.length, secs: data.secs.length, terms: new Set([...Object.keys(data.terms), ...Object.keys(data.dterms)]).size, bytes: json.length, gz });
  totalRaw += json.length; totalGz += gz; totalSecs += data.secs.length; totalDocs += data.docs.length;
  rows.push([sh.label, data.docs.length, data.secs.length, new Set([...Object.keys(data.terms), ...Object.keys(data.dterms)]).size, (json.length / 1024).toFixed(0) + ' KB', (gz / 1024).toFixed(0) + ' KB']);
}
manifest.hash = hash.digest('hex').slice(0, 16);
manifest.totals = { docs: totalDocs, secs: totalSecs, bytes: totalRaw, gz: totalGz };
// remove shards from an earlier build that no longer exist
for (const f of fs.readdirSync(OUT)) if (/^idx-.*\.json$/.test(f) && !manifest.shards.some(s => s.file === f)) fs.unlinkSync(path.join(OUT, f));
fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 1));

if (!QUIET){
  console.log('Search index built ' + manifest.built + '  hash ' + manifest.hash);
  console.log('type'.padEnd(13) + 'docs'.padStart(6) + 'sections'.padStart(10) + 'terms'.padStart(8) + 'raw'.padStart(10) + 'gzip'.padStart(9));
  rows.forEach(r => console.log(String(r[0]).padEnd(13) + String(r[1]).padStart(6) + String(r[2]).padStart(10) + String(r[3]).padStart(8) + r[4].padStart(10) + r[5].padStart(9)));
  console.log('TOTAL'.padEnd(13) + String(totalDocs).padStart(6) + String(totalSecs).padStart(10) + ''.padStart(8) + ((totalRaw / 1048576).toFixed(2) + ' MB').padStart(10) + ((totalGz / 1048576).toFixed(2) + ' MB').padStart(9));
  console.log('skipped: ' + skipped.redirect + ' redirect stubs, ' + skipped.print + ' print twins, ' + skipped.noindex + ' noindex, ' + skipped.other + ' hubs/admin/withheld');
  console.log('synonym groups: ' + manifest.syn.length);
}
