/* ============================================================
   Reasoning GP — whole-site word search (RGPSearch)
   ------------------------------------------------------------
   Loaded by the search box (assets/site.js, on the first keystroke)
   and by pages/search.html. Nothing here runs until then.

   Index: assets/search/manifest.json + one shard per content type,
   built by `node governance/build-search-index.mjs`. Shards download
   in parallel (most-used types first) and results appear as each one
   arrives; the service worker / HTTP cache keeps them afterwards.

   Ranking (per section, then grouped per page):
     page title  > section heading > body text
     × rarity of the word (IDF) × mild length normalisation
     × phrase bonus when the words appear together in the heading/snippet
     × content-type weight × current Clinic/SCA mode (that side first)
   Every word must match (synonyms and UK/US spellings count); if no page
   has them all, the best partial matches are shown and labelled.
   The last word matches as a prefix while you type.

   Public API (window.RGPSearch):
     load()                        → Promise (index fully loaded)
     search(q, {type})             → {results, counts, partial, ms}
     paletteFill(list, q, idx, active)  used by the site.js palette
     mountPage(el)                 pages/search.html
     link(result, q)               URL that opens the page at the section with ?hl=
     stats()                       {loadMs, bytes, built, hash, docs, ready}
   ============================================================ */
(function(){
  'use strict';
  if (window.RGPSearch) return;

  var me = document.currentScript || [].slice.call(document.querySelectorAll('script[src]')).filter(function(s){ return /assets\/site-search\.js/.test(s.getAttribute('src')); }).pop();
  var ROOT = me ? me.getAttribute('src').replace(/assets\/site-search\.js.*$/, '') : '';
  var BASE = ROOT + 'assets/search/';

  var TYPES = {
    protocol: { label: 'Protocol',     w: 1.00 },
    pathway:  { label: 'Pathway',      w: 1.00 },
    snapshot: { label: 'Snapshot',     w: 0.72 },
    guide:    { label: 'Clinic Guide', w: 0.74 },
    article:  { label: 'Article',      w: 0.92 },
    'case':   { label: 'Case',         w: 0.95 },
    sca:      { label: 'SCA',          w: 0.90 },
    rx:       { label: 'Prescription', w: 0.95 },
    calc:     { label: 'Calculator',   w: 0.95 },
    audio:    { label: 'Audio',        w: 0.80 },
    page:     { label: 'Page',         w: 0.70 }
  };
  var ORDER = ['protocol', 'pathway', 'case', 'article', 'snapshot', 'guide', 'rx', 'calc', 'sca', 'audio', 'page'];

  var C = null;            // RGPSearchCore
  var manifest = null;
  var shards = [];         // loaded shards, in ORDER
  var SYN = [];            // [[["mi"],["myocard","infarction"]], …]
  var loadP = null, ready = false, failed = [], loadStart = 0, loadMs = 0, bytes = 0;
  var listeners = [];
  var cache = { key: '', val: null };

  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function now(){ return (window.performance && performance.now) ? performance.now() : Date.now(); }
  function notify(){ cache.key = ''; listeners.forEach(function(f){ try { f(); } catch (e) {} }); if (typeof api.onUpdate === 'function') { try { api.onUpdate(); } catch (e) {} } }

  function loadScript(src){
    return new Promise(function(res, rej){
      var s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s);
    });
  }
  function ensureCore(){
    if (window.RGPSearchCore) { C = window.RGPSearchCore; return Promise.resolve(); }
    return loadScript(ROOT + 'assets/search-core.js?v=1').then(function(){ C = window.RGPSearchCore; });
  }

  /* ---------------- loading ---------------- */
  function addShard(meta, d){
    var sh = { type: meta.type, docs: d.docs, secs: d.secs, terms: d.terms || {}, dterms: d.dterms || {}, keys: null, dec: {}, title: [], first: [], last: [], secTok: {} };
    for (var i = 0; i < d.secs.length; i++){
      var di = d.secs[i][0];
      if (sh.first[di] === undefined) sh.first[di] = i;
      sh.last[di] = i;
    }
    var L = 0; for (var j = 0; j < d.secs.length; j++) L += d.secs[j][4] || 0;
    sh.avgLen = d.secs.length ? (L / d.secs.length) || 1 : 1;
    sh.secsPerDoc = d.docs.length ? d.secs.length / d.docs.length : 1;
    d.docs.forEach(function(doc){ sh.title.push(new Set(C.tokens(doc[1]))); });
    shards.push(sh);
    shards.sort(function(a, b){ return ORDER.indexOf(a.type) - ORDER.indexOf(b.type); });
  }

  function load(){
    if (loadP) return loadP;
    loadStart = now();
    // the tokeniser and the manifest download side by side
    var manP = fetch(BASE + 'manifest.json', { cache: 'no-cache' }).then(function(r){ if (!r.ok) throw new Error('manifest ' + r.status); return r.json(); });
    loadP = Promise.all([ensureCore(), manP]).then(function(x){ return x[1]; }).then(function(man){
      manifest = man;
      SYN = (man.syn || []).map(function(g){ return g.map(function(a){ return a.split(' '); }); });
      var list = (man.shards || []).slice().sort(function(a, b){ return ORDER.indexOf(a.type) - ORDER.indexOf(b.type); });
      function get(meta){
        return fetch(BASE + meta.file + '?v=' + encodeURIComponent(man.hash || '')).then(function(r){
          if (!r.ok) throw new Error(meta.file + ' ' + r.status);
          return r.json();
        }).then(function(d){ bytes += meta.gz || 0; addShard(meta, d); notify(); }).catch(function(){ failed.push(meta.type); });
      }
      // On a slow connection parallel downloads share the bandwidth, so the most useful
      // shard (protocols) and the tiny ones go first; the larger rest follow together.
      var first = list.filter(function(m){ return m.type === ORDER[0] || (m.gz || 0) < 60000; });
      var rest = list.filter(function(m){ return first.indexOf(m) < 0; });
      return Promise.all(first.map(get)).then(function(){ return Promise.all(rest.map(get)); });
    }).then(function(){ ready = true; loadMs = Math.round(now() - loadStart); notify(); })
      .catch(function(e){ ready = true; failed.push('manifest'); loadMs = Math.round(now() - loadStart); notify(); });
    return loadP;
  }

  /* ---------------- postings ---------------- */
  function parsePost(s){
    var m = new Map(), last = 0, parts = s.split(',');
    for (var i = 0; i < parts.length; i++){
      var n = parseInt(parts[i], 36);
      last += Math.floor(n / 4);
      m.set(last, n & 3);
    }
    return m;
  }
  // → null, or {sec: Map(section → weight) | null, doc: Map(page → weight) | null}
  //   sec only  = a rarer word, indexed per section
  //   doc (+sec) = a common word, indexed per page (+ the sections where it is in a heading)
  function decode(sh, t){
    if (sh.dec[t] !== undefined) return sh.dec[t];
    var s = sh.terms[t], d = sh.dterms[t];
    if (s === undefined && d === undefined) return (sh.dec[t] = null);
    return (sh.dec[t] = { sec: s !== undefined ? parsePost(s) : null, doc: d !== undefined ? parsePost(d) : null });
  }
  function sortedKeys(sh){
    if (!sh.keys){
      var seen = {}, k = Object.keys(sh.terms);
      k.forEach(function(x){ seen[x] = 1; });
      Object.keys(sh.dterms).forEach(function(x){ if (!seen[x]) k.push(x); });
      sh.keys = k.sort();
    }
    return sh.keys;
  }
  function prefixTerms(p, max){
    var out = new Set();
    shards.forEach(function(sh){
      var k = sortedKeys(sh), lo = 0, hi = k.length;
      while (lo < hi){ var mid = (lo + hi) >> 1; if (k[mid] < p) lo = mid + 1; else hi = mid; }
      for (var i = lo; i < k.length && out.size < max && k[i].lastIndexOf(p, 0) === 0; i++) out.add(k[i]);
    });
    return Array.from(out);
  }
  var dfCache = {};
  function idf(t){
    if (dfCache[t] !== undefined) return dfCache[t];
    var N = 0, df = 0;
    shards.forEach(function(sh){
      N += sh.secs.length;
      var s;
      if ((s = sh.dterms[t]) !== undefined) df += s.split(',').length * sh.secsPerDoc;
      else if ((s = sh.terms[t]) !== undefined) df += s.split(',').length;
    });
    return (dfCache[t] = Math.log(1 + (N || 1) / (df || 0.5)));
  }

  /* ---------------- query parsing ---------------- */
  function commonPrefix(a, b){ var i = 0; while (i < a.length && i < b.length && a[i] === b[i]) i++; return a.slice(0, i); }
  function parse(q){
    var raw = String(q || '').slice(0, 200);
    var words = C.words(raw);
    var partial = raw.length && !/[\s"]$/.test(raw);
    var seq = [];
    words.forEach(function(w, i){
      var t = C.term(w);
      if (t) seq.push({ t: t, w: w, last: i === words.length - 1 });
    });
    var concepts = [];
    for (var i = 0; i < seq.length; ){
      var best = null, bestLen = 0;
      for (var g = 0; g < SYN.length; g++){
        for (var a = 0; a < SYN[g].length; a++){
          var alt = SYN[g][a];
          if (alt.length <= bestLen || i + alt.length > seq.length) continue;
          var ok = true;
          for (var k = 0; k < alt.length; k++) if (seq[i + k].t !== alt[k]) { ok = false; break; }
          if (ok){ best = g; bestLen = alt.length; }
        }
      }
      if (best !== null){
        concepts.push({ alts: SYN[best].map(function(a){ return a.slice(); }), syn: true, label: seq.slice(i, i + bestLen).map(function(x){ return x.w; }).join(' '), last: bestLen === 1 && seq[i].last });
        i += bestLen;
      } else {
        concepts.push({ alts: [[seq[i].t]], label: seq[i].w, last: seq[i].last });
        i++;
      }
    }
    // prefix matching for the word being typed
    var lastW = words[words.length - 1] || '';
    var prefix = '';
    if (partial && lastW.length >= 3 && !/^\d+$/.test(lastW)){
      var t2 = C.term(lastW), sp = C.spell(lastW);
      prefix = t2 ? commonPrefix(sp, t2) : sp;
      if (prefix.length < 3) prefix = '';
    }
    if (prefix){
      var c = concepts.length && concepts[concepts.length - 1].last ? concepts[concepts.length - 1] : null;
      if (!c){ c = { alts: [], label: lastW, soft: !C.term(lastW) }; concepts.push(c); }
      c.prefix = prefix;
    }
    return { raw: raw.trim(), words: words, concepts: concepts };
  }

  /* ---------------- scoring ---------------- */
  function wScore(w){ return 1 + ((w & 1) ? 0.4 : 0) + ((w & 2) ? 1.6 : 0); }

  // One alternative (a sequence of index terms) in one shard →
  //   {sec: Map(section → score), doc: Map(page → score)}
  // A page qualifies when every term is in it. A section scores fully for each term it
  // holds; a common word known only at page level counts at 0.8 of its page score.
  function altHits(sh, alt, factor){
    var per = [];
    for (var i = 0; i < alt.length; i++){
      var p = decode(sh, alt[i]);
      if (!p) return null;
      per.push({ p: p, g: idf(alt[i]) });
    }
    // page level: every term present
    var docs = null;
    per.forEach(function(x){
      var dm = new Map();
      if (x.p.doc) x.p.doc.forEach(function(w, di){ dm.set(di, x.g * 0.8 * wScore(w)); });
      if (x.p.sec) x.p.sec.forEach(function(w, s){ var di = sh.secs[s][0], v = x.g * wScore(w); if (!x.p.doc && (dm.get(di) || 0) < v) dm.set(di, v); });
      x.dm = dm;
      if (!docs) docs = dm;
      else { var nd = new Map(); docs.forEach(function(v, di){ if (dm.has(di)) nd.set(di, v); }); docs = nd; }
    });
    var res = { sec: new Map(), doc: new Map() };
    if (!docs || !docs.size) return res;
    // sections that hold at least one of the terms, in qualifying pages
    var secs = new Set();
    per.forEach(function(x){ if (x.p.sec) x.p.sec.forEach(function(w, s){ if (docs.has(sh.secs[s][0])) secs.add(s); }); });
    secs.forEach(function(s){
      var di = sh.secs[s][0], sc = 0, own = 0;
      for (var j = 0; j < per.length; j++){
        var x = per[j], w = x.p.sec ? x.p.sec.get(s) : undefined;
        if (w !== undefined){ sc += x.g * wScore(w); own++; }
        else if (x.p.doc) sc += x.dm.get(di) || 0;      // common word: somewhere in the page
        else sc += 0.3 * (x.dm.get(di) || 0);           // rarer word that sits in another section
      }
      var len = sh.secs[s][4] || sh.avgLen;
      sc = sc * factor / (0.75 + 0.25 * Math.min(4, len / sh.avgLen));
      res.sec.set(s, sc);
    });
    docs.forEach(function(v, di){
      var sc = 0;
      per.forEach(function(x){ sc += x.dm.get(di) || 0; });
      res.doc.set(di, sc * factor);
    });
    return res;
  }

  function conceptHits(sh, c){
    var out = { sec: new Map(), doc: new Map() };
    function merge(r){
      if (!r) return;
      r.sec.forEach(function(v, k){ if ((out.sec.get(k) || 0) < v) out.sec.set(k, v); });
      r.doc.forEach(function(v, k){ if ((out.doc.get(k) || 0) < v) out.doc.set(k, v); });
    }
    c.alts.forEach(function(alt){ merge(altHits(sh, alt, 1)); });
    // completions of the word being typed count less — much less once the word is complete
    if (c.pre) c.pre.forEach(function(t){ if (!c.alts.some(function(a){ return a.length === 1 && a[0] === t; })) merge(altHits(sh, [t], c.exact ? 0.3 : 0.75)); });
    return out;
  }

  function secTokens(sh, s){
    if (sh.secTok[s]) return sh.secTok[s];
    var row = sh.secs[s];
    return (sh.secTok[s] = new Set(C.tokens(row[1] + ' ' + row[3])));
  }

  function curMode(){
    try { return (window.RGP_getMode && window.RGP_getMode()) || localStorage.getItem('rgp.mode.v1') || 'clinic'; } catch (e) { return 'clinic'; }
  }

  function phraseNorm(s){ return ' ' + String(s).toLowerCase().replace(/[^a-z0-9]+/g, ' ') + ' '; }

  // a page matched only at page level: show the section whose heading/snippet holds a query word
  function resolve(r){
    if (!r._sh) return r;
    var sh = r._sh, di = r._di, want = r._want, pick = sh.first[di];
    for (var s = sh.first[di]; s <= sh.last[di]; s++){
      var tk = secTokens(sh, s), hit = false;
      for (var i = 0; i < want.length; i++) if (tk.has(want[i])) { hit = true; break; }
      if (hit){ pick = s; break; }
    }
    var row = sh.secs[pick];
    r.heading = row[1]; r.anchor = row[2]; r.snippet = row[3];
    r._sh = null;
    return r;
  }

  function run(q){
    var t0 = now();
    var P = parse(q);
    var cs = P.concepts;
    if (!cs.length || !C) return { results: [], counts: {}, partial: false, ms: 0, query: P, terms: new Set(), prefix: [] };
    cs.forEach(function(c){
      if (!c.prefix) return;
      c.pre = prefixTerms(c.prefix, 40);
      // is the typed word already a complete indexed word?
      c.exact = c.alts.some(function(a){ return a.length === 1 && c.pre.indexOf(a[0]) > -1; });
    });
    var hard = cs.filter(function(c){ return !c.soft; });
    var mode = curMode();
    var phrase = P.words.length > 1 ? phraseNorm(P.words.join(' ')) : '';
    var want = [];
    cs.forEach(function(c){ c.alts.forEach(function(a){ want = want.concat(a); }); if (c.pre) want = want.concat(c.pre); });
    var all = [], partialAll = [];
    shards.forEach(function(sh){
      var tw = (TYPES[sh.type] || {}).w || 0.8;
      var hits = cs.map(function(c){ return conceptHits(sh, c); });
      // best section per page
      var bestSec = new Map();
      hits.forEach(function(h){
        h.sec.forEach(function(v, s){
          var di = sh.secs[s][0], o = bestSec.get(di);
          if (!o) bestSec.set(di, o = { secs: new Map() });
          o.secs.set(s, (o.secs.get(s) || 0) + v);
        });
      });
      var cand = new Map();
      hits.forEach(function(h, ci){ h.doc.forEach(function(v, di){ var o = cand.get(di); if (!o) cand.set(di, o = { hardN: 0, docSc: 0 }); if (!cs[ci].soft) o.hardN++; o.docSc += v; }); });
      cand.forEach(function(o, di){
        var full = hard.length > 0 && o.hardN === hard.length;
        if (!full && !(hard.length > 1 && o.hardN >= 1)) return;
        var bs = bestSec.get(di), best = -1, bestS = -1, matched = 0;
        if (bs){
          bs.secs.forEach(function(v, s){
            // a section's own score plus the page-level score of concepts it lacks
            var sc = 0;
            hits.forEach(function(h){ var x = h.sec.get(s); sc += x !== undefined ? x : 0.35 * (h.doc.get(di) || 0); });
            matched++;
            if (sc > best){ best = sc; bestS = s; }
          });
        }
        if (bestS < 0) best = o.docSc;
        // page-title bonus: the word is in the page's own title
        var title = sh.title[di], tb = 0, inTitle = 0;
        cs.forEach(function(c){
          var g = 0;
          c.alts.forEach(function(a){ if (a.every(function(t){ return title.has(t); })){ var s2 = 0; a.forEach(function(t){ s2 += idf(t); }); if (s2 > g) g = s2; } });
          if (!g && c.pre && !c.exact) c.pre.forEach(function(t){ if (title.has(t)) g = Math.max(g, 0.8 * idf(t)); });
          if (g){ tb += 3 * g; inTitle++; }
        });
        if (hard.length && inTitle >= hard.length) tb *= 1.5;
        var doc = sh.docs[di];
        var r = { type: sh.type, url: doc[0], title: doc[1], gated: !!((doc[2] || 0) & 1), hs: doc[3] || '', heading: '', anchor: '', snippet: '', more: Math.max(0, matched - 1), score: 0, full: full };
        if (bestS > -1){ var row = sh.secs[bestS]; r.heading = row[1]; r.anchor = row[2]; r.snippet = row[3]; }
        else { r._sh = sh; r._di = di; r._want = want; r.snippet = sh.secs[sh.first[di]][3]; }
        // pages that mention the words in several sections rank higher
        var score = (best + tb) * (1 + 0.12 * Math.min(10, Math.max(0, matched - 1)));
        if (phrase && phraseNorm(doc[1] + ' ' + r.heading + ' ' + r.snippet).indexOf(phrase) > -1) score *= 1.4;
        var flags = doc[2] || 0;
        if (mode === 'clinic' && (flags & 2)) score *= 1.2;
        else if (mode === 'sca' && (flags & 4)) score *= 1.35;
        else if (mode === 'sca' && sh.type === 'case') score *= 1.15;
        r.score = score * tw;
        (full ? all : partialAll).push(r);
      });
    });
    var partial = false, list = all;
    if (!all.length && partialAll.length){ list = partialAll; partial = true; }
    list.sort(function(a, b){ return b.score - a.score; });
    for (var i = 0; i < list.length && i < 10; i++) resolve(list[i]);
    var counts = {};
    list.forEach(function(r){ counts[r.type] = (counts[r.type] || 0) + 1; });
    return { results: list, counts: counts, partial: partial, ms: now() - t0, query: P, terms: new Set(want), prefix: cs.filter(function(c){ return c.prefix; }).map(function(c){ return c.prefix; }) };
  }

  function search(q, opts){
    opts = opts || {};
    var key = String(q) + '\u0001' + curMode() + '\u0001' + shards.length;
    var res;
    if (cache.key === key) res = cache.val;
    else { res = run(q); cache = { key: key, val: res }; }
    api.lastMs = res.ms;
    if (opts.type && opts.type !== 'all'){
      return { results: res.results.filter(function(r){ return r.type === opts.type; }), counts: res.counts, partial: res.partial, ms: res.ms, query: res.query, terms: res.terms, prefix: res.prefix, total: res.results.length };
    }
    res.total = res.results.length;
    return res;
  }

  /* ---------------- snippets + links ---------------- */
  var WORD = /[A-Za-z0-9À-ɏ₀-₉]+/g;
  function isHit(w, terms, prefixes){
    var lw = w.toLowerCase();
    var t = C.term(lw);
    if (t && terms.has(t)) return true;
    var sp = C.spell(lw);
    for (var i = 0; i < prefixes.length; i++) if (sp.lastIndexOf(prefixes[i], 0) === 0 || (t && t.lastIndexOf(prefixes[i], 0) === 0)) return true;
    return false;
  }
  function markText(text, res, max){
    text = String(text || '');
    var terms = res.terms || new Set(), prefixes = res.prefix || [];
    var hits = [], m;
    WORD.lastIndex = 0;
    while ((m = WORD.exec(text))) if (isHit(m[0], terms, prefixes)) hits.push([m.index, m.index + m[0].length]);
    var start = 0, end = text.length, pre = '', post = '';
    if (max && text.length > max){
      if (hits.length && hits[0][0] > max * 0.45){
        start = text.lastIndexOf(' ', hits[0][0] - Math.round(max * 0.3));
        if (start < 0) start = 0; else { start++; pre = '… '; }
      }
      end = Math.min(text.length, start + max);
      if (end < text.length){ var sp = text.lastIndexOf(' ', end); if (sp > start + max * 0.6) end = sp; post = ' …'; }
    }
    var out = '', pos = start;
    hits.forEach(function(h){
      if (h[0] < start || h[1] > end) return;
      out += esc(text.slice(pos, h[0])) + '<mark>' + esc(text.slice(h[0], h[1])) + '</mark>';
      pos = h[1];
    });
    out += esc(text.slice(pos, end));
    return { html: pre + out + post, hit: hits.some(function(h){ return h[0] >= start && h[1] <= end; }) };
  }
  function link(r, q){
    var url = r.url, hash = '';
    var hi = url.indexOf('#');
    if (hi > -1){ hash = url.slice(hi); url = url.slice(0, hi); }
    else if (r.anchor) hash = '#' + r.anchor;
    var qs = 'hl=' + encodeURIComponent(String(q || '').trim().slice(0, 80));
    var hs = r.hs || (r.heading ? r.heading.split(' › ').pop() : '');
    if (hs) qs += '&hs=' + encodeURIComponent(hs.slice(0, 120));
    return ROOT + url + (url.indexOf('?') > -1 ? '&' : '?') + qs + hash;
  }

  /* ---------------- styles ---------------- */
  function css(){
    if (document.getElementById('rgpFtsCss')) return;
    var st = document.createElement('style'); st.id = 'rgpFtsCss';
    st.textContent =
      '.rgp-fts{border-top:1px solid var(--line,#e7e0d1);margin-top:6px;padding-top:2px}' +
      '.rgp-fts-h{display:flex;align-items:center;gap:8px;justify-content:space-between}' +
      '.rgp-fts-h small{font-weight:600;letter-spacing:0;text-transform:none;color:var(--muted-2,#64748b)}' +
      '.rgp-fts-chips{display:flex;flex-wrap:wrap;gap:6px;padding:4px 18px 8px}' +
      '.rgp-fts-chip{font:inherit;font-size:12px;font-weight:600;line-height:1.2;padding:5px 10px;border-radius:999px;border:1px solid var(--line-2,#d8cfba);background:var(--surface,#fff);color:var(--ink-2,#2a3744);cursor:pointer;min-height:30px}' +
      '.rgp-fts-chip[aria-pressed="true"]{background:var(--teal,#0c4a47);border-color:var(--teal,#0c4a47);color:#fff}' +
      '.rgp-fts-chip:focus-visible{outline:2px solid var(--teal-3,#136a65);outline-offset:2px}' +
      '.rgp-fts-chip span{opacity:.7;font-weight:500;margin-left:3px}' +
      '.rgp-pl-item.rgp-fts-item{grid-template-columns:minmax(0,1fr) auto;align-items:start}' +
      '.rgp-fts-mid{min-width:0;display:block}' +
      '.rgp-fts-top{display:block;font-size:13.5px;font-weight:600;line-height:1.3;color:inherit;overflow-wrap:anywhere}' +
      '.rgp-fts-top em{font-style:normal;font-weight:500;color:var(--muted,#5d6673)}' +
      '.rgp-fts-snip{display:block;font-size:12.5px;line-height:1.45;color:var(--ink-2,#2a3744);margin-top:3px;overflow-wrap:anywhere;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}' +
      '.rgp-fts-snip mark,.rgp-fts-top mark{background:#fde68a;color:inherit;border-radius:2px;padding:0 1px}' +
      '.rgp-fts-more{display:block;font-size:11px;color:var(--muted,#5d6673);margin-top:3px}' +
      '.rgp-fts-badge{display:inline-block;font-size:9.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:2px 6px;border-radius:4px;margin-right:6px;vertical-align:2px;background:#e8eef0;color:#24424a}' +
      '.rgp-fts-badge.t-protocol{background:#d5e6e4;color:#0c4a47}.rgp-fts-badge.t-pathway{background:#dbe7f7;color:#1e4f8f}' +
      '.rgp-fts-badge.t-snapshot{background:#f6e9c8;color:#7a5512}.rgp-fts-badge.t-guide{background:#e3efed;color:#0c4a47}.rgp-fts-badge.t-article{background:#ece6f7;color:#5b3596}' +
      '.rgp-fts-badge.t-case{background:#f7e3da;color:#8f3a1f}.rgp-fts-badge.t-sca{background:#fbe1ee;color:#9d1d5a}' +
      '.rgp-fts-badge.t-rx{background:#dff2e5;color:#1d6b38}.rgp-fts-badge.t-calc{background:#fdecd2;color:#8a4b06}' +
      '.rgp-fts-badge.t-audio{background:#e6e9ee;color:#39424e}.rgp-fts-badge.t-page{background:#eceae4;color:#4a4740}' +
      '.rgp-fts-lock{font-size:11px;margin-left:4px;opacity:.75}' +
      '.rgp-fts-status{padding:8px 18px 10px;font-size:12.5px;color:var(--muted,#5d6673)}' +
      '.rgp-fts-all b{color:var(--teal,#0c4a47)}' +
      '.rgp-fts-jump{display:block;width:calc(100% - 24px);margin:0 12px 6px;text-align:left;font:inherit;font-size:12px;font-weight:700;color:var(--teal,#0c4a47);background:var(--teal-soft,#d5e6e4);border:0;border-radius:8px;padding:7px 12px;cursor:pointer}' +
      '.rgp-fts-partial{padding:0 18px 6px;font-size:11.5px;color:var(--muted,#5d6673)}' +
      // phones: one swipeable row of chips instead of three wrapped rows
      '@media (max-width:600px){.rgp-palette .rgp-fts-chips{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch;padding-bottom:10px}.rgp-palette .rgp-fts-chips::-webkit-scrollbar{display:none}.rgp-fts-chip{flex:0 0 auto}}';
    document.head.appendChild(st);
  }

  /* ---------------- the search box (palette) ---------------- */
  var palType = 'all';
  var PAL_MAX = 8;
  function resultHtml(r, res, idx, active, cls){
    var t = TYPES[r.type] || { label: r.type };
    var head = r.heading ? r.heading.split(' › ').pop() : '';
    var sn = markText(r.snippet, res, 190);
    var also = '';
    if (!sn.hit){
      also = ' <span class="rgp-fts-more" style="display:inline">· mentions ' + res.query.words.slice(0, 4).map(function(w){ return '<mark>' + esc(w) + '</mark>'; }).join(' ') + '</span>';
    }
    return '<a class="rgp-pl-item rgp-fts-item ' + (cls || '') + (idx === active ? ' is-active' : '') + '" href="' + esc(link(r, res.query.raw)) + '" data-idx="' + idx + '" role="option">' +
      '<span class="rgp-fts-mid"><span class="rgp-fts-top"><span class="rgp-fts-badge t-' + r.type + '">' + esc(t.label) + '</span>' +
      markText(r.title, res).html + (head ? ' <em>› ' + markText(head, res).html + '</em>' : '') +
      (r.gated ? '<span class="rgp-fts-lock" title="Members">🔒</span>' : '') + '</span>' +
      '<span class="rgp-fts-snip">' + sn.html + also + '</span>' +
      (r.more ? '<span class="rgp-fts-more">' + r.more + ' more in this page</span>' : '') +
      '</span><span class="rgp-pl-key">↵</span></a>';
  }

  function paletteFill(list, q, startIdx, active){
    css();
    q = String(q || '');
    if (!q.trim()){ missCancel(); return; }
    load();
    var box = document.createElement('div');
    box.className = 'rgp-fts';
    var idx = startIdx;
    var html = '';
    var res = shards.length ? search(q, { type: palType }) : null;
    var total = res ? res.total : 0;
    html += '<div class="rgp-pl-group rgp-fts-h"><span>Matches in pages</span><small>' + (res ? (total ? total + (total === 1 ? ' page' : ' pages') : '') : '') + (ready ? '' : ' · loading…') + '</small></div>';
    if (res && total){
      missCancel();
      var counts = res.counts;
      var chips = '<button type="button" class="rgp-fts-chip" data-fts-type="all" aria-pressed="' + (palType === 'all') + '">All<span>' + total + '</span></button>';
      ORDER.forEach(function(ty){ if (counts[ty]) chips += '<button type="button" class="rgp-fts-chip" data-fts-type="' + ty + '" aria-pressed="' + (palType === ty) + '">' + TYPES[ty].label + '<span>' + counts[ty] + '</span></button>'; });
      html += '<div class="rgp-fts-chips" role="toolbar" aria-label="Filter matches by type">' + chips + '</div>';
      if (res.partial) html += '<div class="rgp-fts-partial">No page has every word — closest matches:</div>';
      res.results.slice(0, PAL_MAX).forEach(function(r){ html += resultHtml(resolve(r), res, idx, active); idx++; });
      html += '<a class="rgp-pl-item rgp-fts-item rgp-fts-all' + (idx === active ? ' is-active' : '') + '" href="' + esc(ROOT + 'pages/search.html?q=' + encodeURIComponent(q.trim()) + (palType !== 'all' ? '&type=' + palType : '')) + '" data-idx="' + idx + '" role="option"><span class="rgp-fts-mid"><span class="rgp-fts-top">Search all results for <b>‘' + esc(q.trim()) + '’</b> →</span></span><span class="rgp-pl-key">↵</span></a>';
      idx++;
    } else if (res && ready){
      // nothing in the topic list either (startIdx 0) → a search with no results at all
      if (startIdx === 0 && !failed.length) missWatch(q); else missCancel();
      html += '<div class="rgp-fts-status">No page mentions <b>‘' + esc(q.trim()) + '’</b>.</div>';
      html += '<a class="rgp-pl-item rgp-fts-item' + (idx === active ? ' is-active' : '') + '" href="' + esc(ROOT + 'pages/ask.html?q=' + encodeURIComponent(q.trim())) + '" data-idx="' + idx + '" role="option"><span class="rgp-fts-mid"><span class="rgp-fts-top">Try Ask for a question in plain English →</span><span class="rgp-fts-snip">Ask answers from the whole library, in your own words.</span></span><span class="rgp-pl-key">↵</span></a>';
      idx++;
    } else {
      html += '<div class="rgp-fts-status">Searching every page…</div>';
    }
    box.innerHTML = html;
    list.appendChild(box);
    // the topic list can be long: a jump link to the page matches
    if (startIdx > 5 && res && total && !list.querySelector('.rgp-fts-jump')){
      var j = document.createElement('button');
      j.type = 'button'; j.className = 'rgp-fts-jump';
      j.textContent = '↓ ' + total + ' matches in pages';
      j.addEventListener('mousedown', function(e){ e.preventDefault(); });
      j.addEventListener('click', function(){ box.scrollIntoView({ block: 'start' }); });
      list.insertBefore(j, list.firstChild);
    }
    box.querySelectorAll('.rgp-fts-chip').forEach(function(b){
      b.addEventListener('mousedown', function(e){ e.preventDefault(); });
      b.addEventListener('click', function(e){
        e.preventDefault();
        palType = b.getAttribute('data-fts-type');
        var input = list.parentNode && list.parentNode.querySelector('.rgp-palette-input');
        if (typeof api.onUpdate === 'function') api.onUpdate();
        var nb = list.querySelector('.rgp-fts-chip[data-fts-type="' + palType + '"]');
        if (nb && document.activeElement !== input && e.detail === 0) nb.focus(); else if (input) input.focus();
        var bx = list.querySelector('.rgp-fts'); if (bx) bx.scrollIntoView({ block: 'nearest' });
      });
    });
  }

  /* ---------------- searches with no results (anonymous) ----------------
     When a search finds nothing at all, its words — and nothing else — are sent
     to the Worker so the owner can see what the site is missing
     (pages/search-misses.html). Sent at most once per distinct search per page
     view, and only after typing stops for 1.5 s or Enter is pressed. Before
     sending, the words are lower-cased, spaces collapsed and cut to 60
     characters, and dropped entirely if they could hold personal data: a run of
     6+ digits (NHS number, phone), an email, a UK postcode or a date. The Worker
     applies the same rules again. No account, token, cookie or page address is
     sent, and nothing is sent until RGP_CONFIG.workerUrl is set and the Worker
     has the /api/search-miss endpoint. See pages/privacy.html. */
  var MISS_WAIT = 1500;
  var miss = { q: '', t: null, sent: {} };
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
  function missSend(s){
    if (!s || miss.sent[s]) return;
    var cfg = window.RGP_CONFIG || {};
    var base = cfg.workerUrl ? String(cfg.workerUrl).replace(/\/$/, '') : '';
    if (!base) return;
    miss.sent[s] = 1;
    var url = base + '/api/search-miss', body = JSON.stringify({ q: s });
    try {
      if (navigator.sendBeacon && navigator.sendBeacon(url, new Blob([body], { type: 'text/plain;charset=UTF-8' }))) return;
    } catch (e) {}
    try {
      fetch(url, { method: 'POST', body: body, headers: { 'Content-Type': 'text/plain;charset=UTF-8' }, credentials: 'omit', keepalive: true, referrerPolicy: 'no-referrer' }).catch(function(){});
    } catch (e) {}
  }
  function missCancel(){ if (miss.t) clearTimeout(miss.t); miss.t = null; miss.q = ''; }
  // a search is showing no results: (re)start the 1.5 s wait, unless it is the same search
  function missWatch(q){
    var s = missClean(q);
    if (!s){ missCancel(); return; }
    if (s === miss.q && miss.t) return;
    missCancel();
    miss.q = s;
    miss.t = setTimeout(function(){ miss.t = null; var x = miss.q; miss.q = ''; missSend(x); }, MISS_WAIT);
  }
  // Enter pressed: send a waiting no-result search now
  function missNow(q){
    var s = missClean(q);
    if (s && s === miss.q && miss.t){ clearTimeout(miss.t); miss.t = null; miss.q = ''; missSend(s); }
  }
  // Enter in the header search box (assets/site.js palette)
  document.addEventListener('keydown', function(e){
    var t = e.target;
    if (e.key === 'Enter' && t && t.classList && t.classList.contains('rgp-palette-input')) missNow(t.value);
  }, true);

  /* ---------------- pages/search.html ---------------- */
  function mountPage(root){
    css();
    var params = new URLSearchParams(location.search);
    var st = { q: params.get('q') || '', type: params.get('type') || 'all', p: Math.max(1, parseInt(params.get('p') || '1', 10) || 1) };
    var PER = 20;
    root.innerHTML =
      '<form class="srp-form" role="search"><label class="srp-sr" for="srpQ">Search every page</label>' +
      '<input id="srpQ" class="srp-input" type="search" autocomplete="off" spellcheck="false" placeholder="Search every page — a drug, a test, a phrase…" value="' + esc(st.q) + '">' +
      '<button class="srp-go" type="submit">Search</button></form>' +
      '<div class="srp-chips" role="toolbar" aria-label="Filter by type"></div>' +
      '<p class="srp-status" aria-live="polite"></p><ol class="srp-list"></ol><nav class="srp-pager" aria-label="Pages"></nav>';
    var input = root.querySelector('.srp-input'), chipsEl = root.querySelector('.srp-chips'), statusEl = root.querySelector('.srp-status'),
        listEl = root.querySelector('.srp-list'), pagerEl = root.querySelector('.srp-pager');
    var activeIdx = -1;
    function sync(push){
      var u = new URL(location.href);
      u.searchParams.set('q', st.q);
      if (st.type !== 'all') u.searchParams.set('type', st.type); else u.searchParams.delete('type');
      if (st.p > 1) u.searchParams.set('p', String(st.p)); else u.searchParams.delete('p');
      try { history[push ? 'pushState' : 'replaceState'](null, '', u.toString()); } catch (e) {}
      document.title = (st.q ? '‘' + st.q + '’ — ' : '') + 'Search · Reasoning GP';
    }
    function draw(){
      activeIdx = -1;
      if (!st.q.trim()){ missCancel(); statusEl.textContent = 'Type a word or phrase — every protocol, pathway, case, article and tool is searched.'; listEl.innerHTML = ''; chipsEl.innerHTML = ''; pagerEl.innerHTML = ''; return; }
      if (!shards.length){ statusEl.textContent = 'Loading the search index…'; return; }
      var res = search(st.q, { type: st.type });
      var total = res.total, shown = res.results.length;
      var chips = '<button type="button" class="rgp-fts-chip" data-t="all" aria-pressed="' + (st.type === 'all') + '">All<span>' + total + '</span></button>';
      ORDER.forEach(function(ty){ if (res.counts[ty]) chips += '<button type="button" class="rgp-fts-chip" data-t="' + ty + '" aria-pressed="' + (st.type === ty) + '">' + TYPES[ty].label + '<span>' + res.counts[ty] + '</span></button>'; });
      chipsEl.innerHTML = total ? chips : '';
      var pages = Math.max(1, Math.ceil(shown / PER));
      if (st.p > pages) st.p = pages;
      var slice = res.results.slice((st.p - 1) * PER, st.p * PER).map(resolve);
      if (!shown){
        if (ready && !failed.length && !total) missWatch(st.q); else missCancel();
        statusEl.innerHTML = ready ? 'No page mentions <b>‘' + esc(st.q) + '’</b>' + (st.type !== 'all' ? ' in ' + TYPES[st.type].label + 's' : '') + '.' : 'Searching…';
        listEl.innerHTML = ready ? '<li class="srp-empty">Try fewer or different words, or <a href="' + esc(ROOT + 'pages/ask.html?q=' + encodeURIComponent(st.q)) + '">try Ask for a question in plain English →</a></li>' : '';
        pagerEl.innerHTML = '';
        return;
      }
      missCancel();
      statusEl.innerHTML = shown + (shown === 1 ? ' page' : ' pages') + ' mention <b>‘' + esc(st.q) + '’</b>' + (res.partial ? ' (closest matches — no page has every word)' : '') +
        ' · page ' + st.p + ' of ' + pages + (ready ? '' : ' · still loading…') + ' <span class="srp-ms">' + res.ms.toFixed(0) + ' ms</span>';
      listEl.innerHTML = slice.map(function(r){
        var t = TYPES[r.type] || { label: r.type };
        var head = r.heading ? r.heading.split(' › ').pop() : '';
        var sn = markText(r.snippet, res, 260);
        return '<li class="srp-item"><a class="srp-a" href="' + esc(link(r, st.q)) + '">' +
          '<span class="srp-top"><span class="rgp-fts-badge t-' + r.type + '">' + esc(t.label) + '</span>' +
          '<span class="srp-title">' + markText(r.title, res).html + '</span>' + (r.gated ? '<span class="rgp-fts-lock" title="Members">🔒</span>' : '') + '</span>' +
          (head ? '<span class="srp-head">' + markText(head, res).html + '</span>' : '') +
          '<span class="srp-snip">' + sn.html + (sn.hit ? '' : ' <span class="srp-more">· mentions ' + res.query.words.slice(0, 4).map(function(w){ return '<mark>' + esc(w) + '</mark>'; }).join(' ') + '</span>') + '</span>' +
          (r.more ? '<span class="srp-more">' + r.more + ' more in this page</span>' : '') + '</a></li>';
      }).join('');
      var pg = '';
      if (pages > 1){
        pg += '<button type="button" data-p="' + (st.p - 1) + '"' + (st.p === 1 ? ' disabled' : '') + '>← Previous</button>';
        pg += '<span>Page ' + st.p + ' of ' + pages + '</span>';
        pg += '<button type="button" data-p="' + (st.p + 1) + '"' + (st.p === pages ? ' disabled' : '') + '>Next →</button>';
      }
      pagerEl.innerHTML = pg;
    }
    root.querySelector('.srp-form').addEventListener('submit', function(e){ e.preventDefault(); st.q = input.value.trim(); st.p = 1; sync(true); draw(); missNow(st.q); });
    var tmr = null;
    input.addEventListener('input', function(){ clearTimeout(tmr); tmr = setTimeout(function(){ st.q = input.value; st.p = 1; sync(false); draw(); }, 120); });
    chipsEl.addEventListener('click', function(e){ var b = e.target.closest('[data-t]'); if (!b) return; st.type = b.getAttribute('data-t'); st.p = 1; sync(true); draw(); var nb = chipsEl.querySelector('[data-t="' + st.type + '"]'); if (nb) nb.focus(); });
    pagerEl.addEventListener('click', function(e){ var b = e.target.closest('[data-p]'); if (!b || b.disabled) return; st.p = parseInt(b.getAttribute('data-p'), 10); sync(true); draw(); root.scrollIntoView({ block: 'start' }); });
    // keyboard: ↑↓ move through results, Enter opens, Esc clears
    root.addEventListener('keydown', function(e){
      var items = [].slice.call(listEl.querySelectorAll('.srp-a'));
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp'){
        if (!items.length) return;
        e.preventDefault();
        activeIdx = e.key === 'ArrowDown' ? Math.min(items.length - 1, activeIdx + 1) : Math.max(-1, activeIdx - 1);
        if (activeIdx < 0) input.focus(); else items[activeIdx].focus();
      } else if (e.key === 'Escape'){
        input.value = ''; st.q = ''; sync(false); draw(); input.focus();
      }
    });
    window.addEventListener('popstate', function(){ var p = new URLSearchParams(location.search); st.q = p.get('q') || ''; st.type = p.get('type') || 'all'; st.p = parseInt(p.get('p') || '1', 10) || 1; input.value = st.q; draw(); });
    listeners.push(draw);
    draw();
    if (st.q) load(); else input.addEventListener('focus', function(){ load(); }, { once: true });
    if (!st.q) setTimeout(function(){ input.focus(); }, 30);
  }

  var api = {
    load: load,
    search: search,
    paletteFill: paletteFill,
    mountPage: mountPage,
    link: link,
    markText: markText,
    resolve: resolve,
    onUpdate: null,
    lastMs: 0,
    types: TYPES,
    missClean: missClean,
    stats: function(){ return { ready: ready, loadMs: loadMs, gz: bytes, built: manifest && manifest.built, hash: manifest && manifest.hash, docs: manifest && manifest.totals && manifest.totals.docs, failed: failed.slice(), shards: shards.length, loaded: shards.map(function(x){ return x.type; }) }; }
  };
  window.RGPSearch = api;
})();
