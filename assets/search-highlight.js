/* ============================================================
   Reasoning GP — highlight the searched words on arrival
   ------------------------------------------------------------
   A search result links to  page.html?hl=<words>&hs=<section heading>#<anchor>.
   This file (loaded only when ?hl= is present — by site.js on app pages and by
   provenance.js on protocol / pathway / case pages) then:
     1. marks every occurrence of the words (same tokeniser as the index, so
        "anemia" marks "anaemia", plurals and synonyms count);
     2. picks the first occurrence after the named section heading;
     3. opens whatever hides it — a folded protocol section, a pathway "Why?"
        drawer or the Snapshot tab, a collapsed case step, a closed article card,
        a Clinic/SCA-only block — and scrolls it into view;
     4. shows a small bar: "2 of 9 · ‹ › · ✕" to step through the matches.
   Nothing is stored; ✕ removes the marks and tidies the address bar.
   ============================================================ */
(function(){
  'use strict';
  if (window.__rgpHlDone) return;
  var params; try { params = new URLSearchParams(location.search); } catch (e) { return; }
  var HL = (params.get('hl') || '').trim().slice(0, 120);
  if (!HL) return;
  window.__rgpHlDone = true;
  var HS = (params.get('hs') || '').trim().slice(0, 160);
  if (document.querySelector('meta[name="omelette-print-source"]')) return;

  var me = document.currentScript || [].slice.call(document.querySelectorAll('script[src]')).filter(function(s){ return /assets\/search-highlight\.js/.test(s.getAttribute('src')); }).pop();
  var ROOT = me ? me.getAttribute('src').replace(/assets\/search-highlight\.js.*$/, '') : '';
  var C = null, TERMS = new Set(), PREFIX = '', PHRASES = [];
  var marks = [], cur = -1, bar = null;

  function loadScript(src){ return new Promise(function(res, rej){ var s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); }
  function norm(s){ return ' ' + String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim() + ' '; }

  function prepare(syn){
    var words = C.words(HL);
    words.forEach(function(w){ var t = C.term(w); if (t) TERMS.add(t); });
    var last = words[words.length - 1] || '';
    if (last.length >= 3 && !/^\d+$/.test(last)){
      var t2 = C.term(last), sp = C.spell(last), i = 0;
      if (t2){ while (i < sp.length && i < t2.length && sp[i] === t2[i]) i++; PREFIX = sp.slice(0, i); } else PREFIX = sp;
      if (PREFIX.length < 3) PREFIX = '';
    }
    // synonyms / abbreviations from the index manifest ("AF" also marks "atrial fibrillation")
    var seq = C.tokens(HL);
    (syn || []).forEach(function(group){
      var alts = group.map(function(a){ return a.split(' '); });
      var present = alts.some(function(a){
        for (var i = 0; i + a.length <= seq.length; i++){ var ok = true; for (var k = 0; k < a.length; k++) if (seq[i + k] !== a[k]) { ok = false; break; } if (ok) return true; }
        return false;
      });
      if (present) alts.forEach(function(a){ if (a.length === 1) TERMS.add(a[0]); else PHRASES.push(a); });
    });
  }
  function isHit(w){
    var lw = w.toLowerCase(), t = C.term(lw);
    if (t && TERMS.has(t)) return true;
    if (PREFIX){ var sp = C.spell(lw); if (sp.lastIndexOf(PREFIX, 0) === 0 || (t && t.lastIndexOf(PREFIX, 0) === 0)) return true; }
    return false;
  }

  var SKIP = /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA|INPUT|SELECT|OPTION|SVG|TITLE|IFRAME|BUTTON|MARK)$/;
  function skipEl(el){
    for (var e = el; e && e !== document.body; e = e.parentElement){
      if (SKIP.test(e.tagName)) return true;
      var c = e.className && typeof e.className === 'string' ? e.className : '';
      if (/(^|\s)(rgp-nav|rgp-palette|rgp-hl-bar|rgp-gate|rgp-footer|sidebar|mg-secnav|cn-nav|case-nav)(\s|$)/.test(c)) return true;
      if (e.id === 'viewDiagram' || e.id === 'case-nav-mount') return true;
    }
    return false;
  }
  var WORD = /[A-Za-z0-9À-ɏ₀-₉]+/g;

  function markAll(){
    var root = document.getElementById('mgRoot') || document.querySelector('main') || document.body;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [], n;
    while ((n = walker.nextNode())) if (n.nodeValue && /[A-Za-z0-9]/.test(n.nodeValue)) nodes.push(n);
    var out = [];
    for (var i = 0; i < nodes.length && out.length < 400; i++){
      var tn = nodes[i];
      if (!tn.parentElement || skipEl(tn.parentElement)) continue;
      var text = tn.nodeValue, ranges = [], m, words = [];
      WORD.lastIndex = 0;
      while ((m = WORD.exec(text))) words.push([m.index, m.index + m[0].length, m[0]]);
      for (var k = 0; k < words.length; k++){
        if (isHit(words[k][2])) { ranges.push([words[k][0], words[k][1]]); continue; }
        // multi-word synonyms ("atrial fibrillation")
        for (var p = 0; p < PHRASES.length; p++){
          var ph = PHRASES[p], ok = k + ph.length <= words.length;
          for (var q = 0; ok && q < ph.length; q++) if (C.term(words[k + q][2].toLowerCase()) !== ph[q]) ok = false;
          if (ok){ ranges.push([words[k][0], words[k + ph.length - 1][1]]); k += ph.length - 1; break; }
        }
      }
      if (!ranges.length) continue;
      var frag = document.createDocumentFragment(), pos = 0;
      ranges.forEach(function(r){
        if (r[0] > pos) frag.appendChild(document.createTextNode(text.slice(pos, r[0])));
        var mk = document.createElement('mark'); mk.className = 'rgp-hl'; mk.textContent = text.slice(r[0], r[1]);
        frag.appendChild(mk); out.push(mk); pos = r[1];
      });
      if (pos < text.length) frag.appendChild(document.createTextNode(text.slice(pos)));
      tn.parentNode.replaceChild(frag, tn);
    }
    return out;
  }

  // open anything that hides the element (protocol folds, pathway drawers/tabs, case steps, article cards, mode blocks)
  function reveal(el){
    var body = document.body;
    if (body.classList.contains('summary-mode') || body.classList.contains('diagram-mode')){
      var flow = document.getElementById('flow');
      if (flow && flow.contains(el)){ var sb = document.querySelector('.vt-btn[data-view="steps"]'); if (sb) sb.click(); }
    }
    var snapTabs = document.querySelector('.mg-viewtabs button[data-v="full"][aria-selected="false"]');
    if (snapTabs) snapTabs.click();
    for (var e = el.parentElement; e && e !== body; e = e.parentElement){
      var cl = e.classList;
      if (cl.contains('mg-fold') && e.getAttribute('data-open') === '0'){
        e.setAttribute('data-open', '1');
        var h = e.querySelector(':scope>.mg-sec-h'); if (h) h.setAttribute('aria-expanded', 'true');
      }
      if ((cl.contains('why-drawer') || cl.contains('mg-why-body')) && !cl.contains('open')){
        cl.add('open');
        var btn = e.parentElement && e.parentElement.querySelector('.why-btn, .mg-why-btn');
        if (btn){ btn.setAttribute('aria-expanded', 'true'); var ca = btn.querySelector('.caret'); if (ca) ca.textContent = '▴'; }
      }
      if (cl.contains('step-body') && cl.contains('closed')){
        cl.remove('closed');
        var hdr = e.previousElementSibling;
        if (hdr && hdr.classList.contains('step-hdr')){
          hdr.classList.add('is-open');
          var ic = hdr.querySelector('.sti-icon'), tx = hdr.querySelector('.sti-text');
          if (ic) ic.textContent = '▲'; if (tx) tx.textContent = 'collapse';
        }
      }
      if (cl.contains('closed') && /^sum-body-/.test(e.id || '')) cl.remove('closed');
      if (e.tagName === 'DETAILS' && !e.open) e.open = true;
      if ((cl.contains('sca-only') || cl.contains('clinic-only')) && getComputedStyle(e).display === 'none'){
        if (typeof window.setMode === 'function' && document.getElementById('btn-both')) { try { window.setMode('both'); } catch (x) {} }
      }
    }
  }
  function visible(el){ return !!(el && el.getClientRects().length); }

  function findHeading(){
    if (!HS) return null;
    var want = norm(HS);
    var cands = document.querySelectorAll('h1,h2,h3,h4,h5,summary,.step-title,.mg-sec-h,.art-t,.node-head,.dbox-h,.rx-title,.au-title,b,strong');
    var best = null;
    for (var i = 0; i < cands.length; i++){
      var t = norm(cands[i].textContent);
      if (t.length > want.length + 60) continue;
      if (t === want) return cands[i];
      if (!best && t.indexOf(want) > -1 && !/^(B|STRONG)$/.test(cands[i].tagName)) best = cands[i];
    }
    return best;
  }
  function pick(){
    if (!marks.length) return 0;
    var head = findHeading();
    var anchor = head || (location.hash.length > 1 ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null);
    if (anchor){
      for (var i = 0; i < marks.length; i++){
        if (anchor.contains(marks[i]) || (anchor.compareDocumentPosition(marks[i]) & Node.DOCUMENT_POSITION_FOLLOWING)) return i;
      }
    }
    for (var j = 0; j < marks.length; j++) if (visible(marks[j])) return j;
    return 0;
  }
  function go(i, smooth){
    if (!marks.length) return;
    if (cur > -1 && marks[cur]) marks[cur].classList.remove('rgp-hl-cur');
    cur = (i + marks.length) % marks.length;
    var mk = marks[cur];
    reveal(mk);
    mk.classList.add('rgp-hl-cur');
    var doScroll = function(){ try { mk.scrollIntoView({ block: 'center', behavior: smooth ? 'smooth' : 'auto' }); } catch (e) { mk.scrollIntoView(); } };
    doScroll();
    if (!smooth) settle(mk);
    if (bar) bar.querySelector('.rgp-hl-n').textContent = (cur + 1) + ' of ' + marks.length;
  }
  // The page may still be moving on arrival (fonts, late renders, its own #hash scroll):
  // for ~2.5 s keep the match in view, unless the reader has started scrolling themselves.
  var touched = false;
  ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(function(ev){ window.addEventListener(ev, function(){ touched = true; }, { passive: true, once: true }); });
  function settle(mk){
    var n = 0;
    var iv = setInterval(function(){
      if (touched || ++n > 10 || marks[cur] !== mk){ clearInterval(iv); return; }
      var r = mk.getBoundingClientRect();
      if (r.top < 60 || r.bottom > window.innerHeight - 70) mk.scrollIntoView({ block: 'center' });
    }, 250);
  }
  function clear(){
    marks.forEach(function(m){ var p = m.parentNode; if (!p) return; p.replaceChild(document.createTextNode(m.textContent), m); p.normalize(); });
    marks = []; if (bar) bar.remove(); bar = null;
    try { var u = new URL(location.href); u.searchParams.delete('hl'); u.searchParams.delete('hs'); history.replaceState(history.state, '', u.toString()); } catch (e) {}
  }
  function css(){
    var st = document.createElement('style');
    st.textContent = 'mark.rgp-hl{background:#fde68a;color:inherit;border-radius:2px;padding:0 1px;box-shadow:0 0 0 1px rgba(202,138,4,.35)}' +
      'mark.rgp-hl.rgp-hl-cur{background:#f59e0b;box-shadow:0 0 0 2px #b45309}' +
      '.rgp-hl-bar{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:8000;display:flex;align-items:center;gap:6px;max-width:calc(100vw - 24px);box-sizing:border-box;' +
      'background:#15202b;color:#fff;border-radius:999px;padding:6px 8px 6px 14px;font:600 13px/1.2 "DM Sans",system-ui,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.25)}' +
      '.rgp-hl-bar .rgp-hl-q{max-width:38vw;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#fde68a}' +
      '.rgp-hl-bar .rgp-hl-n{white-space:nowrap;font-weight:500;opacity:.85}' +
      '.rgp-hl-bar button{font:inherit;min-width:34px;height:34px;border-radius:999px;border:0;background:rgba(255,255,255,.12);color:#fff;cursor:pointer}' +
      '.rgp-hl-bar button:hover,.rgp-hl-bar button:focus-visible{background:rgba(255,255,255,.25);outline:none}' +
      '@media print{.rgp-hl-bar{display:none}mark.rgp-hl{background:none;box-shadow:none}}';
    document.head.appendChild(st);
  }
  function makeBar(){
    bar = document.createElement('div');
    bar.className = 'rgp-hl-bar'; bar.setAttribute('role', 'region'); bar.setAttribute('aria-label', 'Search matches on this page');
    bar.innerHTML = '<span class="rgp-hl-q"></span><span class="rgp-hl-n" aria-live="polite"></span>' +
      '<button type="button" data-d="-1" aria-label="Previous match">‹</button><button type="button" data-d="1" aria-label="Next match">›</button>' +
      '<button type="button" data-x aria-label="Clear highlights">✕</button>';
    bar.querySelector('.rgp-hl-q').textContent = '‘' + HL + '’';
    bar.addEventListener('click', function(e){
      var b = e.target.closest('button'); if (!b) return;
      if (b.hasAttribute('data-x')) clear(); else go(cur + parseInt(b.getAttribute('data-d'), 10), true);
    });
    document.addEventListener('keydown', function(e){
      if (!bar) return;
      if (e.key === 'Escape' && !document.querySelector('.rgp-palette:not([hidden])')) clear();
    });
    document.body.appendChild(bar);
  }

  var tries = 0;
  function attempt(){
    marks = markAll();
    if (!marks.length && ++tries < 12) { setTimeout(attempt, 300); return; }
    if (!marks.length) return;
    css(); makeBar(); go(pick(), false);
    window.RGP_HL = { count: marks.length, current: function(){ return marks[cur]; }, next: function(){ go(cur + 1, false); }, clear: clear };
  }
  function start(){
    var core = window.RGPSearchCore ? Promise.resolve() : loadScript(ROOT + 'assets/search-core.js?v=1');
    core.then(function(){
      C = window.RGPSearchCore;
      return fetch(ROOT + 'assets/search/manifest.json').then(function(r){ return r.ok ? r.json() : {}; }).catch(function(){ return {}; });
    }).then(function(man){
      prepare(man && man.syn);
      // let the page finish its own rendering (protocol engine, article list, prescriptions grid)
      setTimeout(attempt, 60);
    }).catch(function(){});
  }
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();
