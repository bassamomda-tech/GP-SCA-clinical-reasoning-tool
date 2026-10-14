/* ============================================================
   protocol-ui.js — gpreasoning.uk protocol page UI (opt-in)
   Opt in per page with, at the end of <body>, after the engine scripts:
     <script src="../../assets/protocol-ui.js"></script>
   - Does nothing on pages without #mgRoot, on -print.html copies, or if loaded twice.
   - Layout (A + C's bar) only on protocols with 3+ sections; add-ons on any protocol.
   - Lazy-loads, from the same assets/ folder: qrcode-generator.js (MIT), protocol-leaflets.js,
     leaflets-data.js (only when "Give to patient" is opened) and updates-nice-archive.js.
   - Makes no third-party requests and sends nothing anywhere.
   Built from design/options/{common,optionA,optionD} — do not edit by hand.
   ============================================================ */
/* Skip list: protocols that keep today's layout (no protocol UI at all). One slug per entry. */
var PROTOCOL_UI_SKIP = [];
(function(){
  var m = location.pathname.match(/([^\/]+?)(?:\.html)?$/);
  if(m && PROTOCOL_UI_SKIP.indexOf(m[1]) >= 0) window.PROTOCOL_UI_NO_BOOT = true;
})();
(function(){
  'use strict';
  if(window.__protocolUiLayout) return; window.__protocolUiLayout = true;
  function boot(){
    if(window.PROTOCOL_UI_NO_BOOT || !document.getElementById('mgRoot')) return;
    if(document.querySelector('meta[name="omelette-print-source"]')) return;
/* ============================================================
   PROTOTYPE COMMON LAYER (shared by options A, B, C)
   Runs after management-engine.js, provenance.js and topic-links.js
   have rendered. Restructures the DOM only — never rewrites text.
   - References & sources: the guideline pills (.mg-meta) and the
     review box's "Anchored to" row are shown at the END of the page,
     merged with the existing Evidence section. The originals stay
     in place as print-only, so Ctrl+P output is unchanged.
   ============================================================ */
var PX = (function(){
  'use strict';
  var root = document.getElementById('mgRoot');
  function $(s, c){ return (c||document).querySelector(s); }
  function $$(s, c){ return Array.prototype.slice.call((c||document).querySelectorAll(s)); }
  function el(html){ var t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstChild; }
  function isPrint(){ return !!document.querySelector('meta[name="omelette-print-source"]'); }

  function ready(fn){
    function go(){
      var n = 0;
      (function wait(){
        if((document.getElementById('rgpProvStrip') && root && root.children.length) || ++n > 60){ try{ fn(); }catch(e){ console.error(e); } }
        else setTimeout(wait, 50);
      })();
    }
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
  }

  function sections(){ return $$(':scope > section, :scope .px-sections > section, :scope .pa-main > section', root).filter(function(s){ return s.querySelector(':scope > .mg-sec-h'); }); }
  function head(s){ return s.querySelector(':scope > .mg-sec-h'); }
  function title(s){ var h = s.querySelector(':scope > .mg-sec-h h2'); return h ? h.textContent.trim() : ''; }
  function num(s){ var n = s.querySelector(':scope > .mg-sec-h .mg-sec-n'); return n ? n.textContent.trim() : ''; }
  function setOpen(s, open){
    if(!s.classList.contains('mg-fold')) return;
    s.setAttribute('data-open', open ? '1' : '0');
    var h = head(s); if(h) h.setAttribute('aria-expanded', open ? 'true' : 'false');
    s.dispatchEvent(new CustomEvent('px:toggle', {bubbles:true}));
  }
  function isOpen(s){ return !s.classList.contains('mg-fold') || s.getAttribute('data-open') === '1'; }

  /* nav label for a section: the page's own data.sections[].nav, else its h2 */
  function navLabel(s){
    var d = (window.MG && window.MG._data) || {};
    if(s.id === 'quick') return '30-second answer';
    if(s.id === 'pathway') return '3-minute pathway';
    var hit = (d.sections||[]).filter(function(x){ return x.id === s.id; })[0];
    if(hit && typeof hit.nav === 'string') return hit.nav;
    return title(s);
  }

  function evidenceSection(){
    return sections().filter(function(s){ return s.querySelector('.evlist, .mg-ev'); }).pop() ||
           document.getElementById('evidence') || null;
  }

  /* first sentence of a block of text (verbatim slice) */
  function firstSentence(txt, max){
    txt = String(txt||'').replace(/\s+/g,' ').trim();
    var m = txt.match(/^.+?[.!?](?=\s+["“(]?[A-Z0-9]|$)/);
    var s = m ? m[0] : txt;
    if(max && s.length > max) s = s.slice(0, max).replace(/\s+\S*$/,'') + '…';
    return s;
  }

  /* a one-line preview for a folded section: its standfirst, else its first text */
  function preview(s){
    var sub = s.querySelector('.mg-sec-sub');
    var t = sub ? sub.textContent : '';
    if(!t){
      var c = s.querySelector('.mg-sbody h3, .mg-sbody h4, .mg-sbody th, .mg-sbody p, .mg-sbody td');
      var bits = $$('.mg-sbody h3', s).slice(0,4).map(function(h){ return h.textContent.trim(); });
      t = bits.length > 1 ? bits.join(' · ') : (c ? c.textContent : '');
    }
    return firstSentence(t, 160);
  }

  /* ---------- References & sources (moved to the end) ---------- */
  function buildRefs(){
    if(document.getElementById('px-refs')) return document.getElementById('px-refs');
    var meta = root.querySelector('.mg-meta');
    var prov = document.getElementById('rgpProvStrip');
    var src = prov ? prov.querySelector('.pv-src') : null;
    var ev = evidenceSection();

    var refs = el('<section id="px-refs" class="px-refs" aria-labelledby="px-refs-h">'+
      '<div class="px-refs-head"><span class="px-refs-ic" aria-hidden="true">§</span><div><span class="px-refs-k">At the end, for checking</span>'+
      '<h2 id="px-refs-h">References &amp; sources</h2></div></div>'+
      '<div class="px-refs-top px-screen-only"></div></section>');
    var top = refs.querySelector('.px-refs-top');
    if(meta){
      var b1 = el('<div class="px-refs-blk"><h3>Guidelines this page follows</h3></div>');
      var mc = meta.cloneNode(true); mc.classList.add('px-meta-clone'); b1.appendChild(mc);
      top.appendChild(b1);
      meta.classList.add('px-print-only');
    }
    if(src){
      var b2 = el('<div class="px-refs-blk"><h3>Anchored to</h3></div>');
      var sc = src.cloneNode(true); sc.classList.add('px-src-clone');
      var lbl = sc.querySelector('.pv-lbl'); if(lbl) lbl.remove();   /* the block heading carries the label */
      b2.appendChild(sc);
      top.appendChild(b2);
      src.classList.add('px-print-only');
    }
    if(ev){
      ev.classList.add('px-ev-in-refs');
      /* folded by default (owner decision, Oct 2026): click or tap the Evidence heading to open it;
         search and links still open it when they land inside */
      if(ev.classList.contains('mg-fold')){ ev.setAttribute('data-open','0'); var h = head(ev); if(h) h.setAttribute('aria-expanded','false'); }
      var parent = ev.parentNode, next = ev.nextSibling;
      parent.insertBefore(refs, next);
      refs.appendChild(ev);
      /* the whole block folds as one (owner decision, Oct 2026): the guideline and source lists sit
         inside the Evidence step, first; only the Evidence heading shows while it is closed */
      var evBody = ev.querySelector(':scope > .mg-sbody');
      if(evBody && ev.classList.contains('mg-fold')){
        evBody.insertBefore(top, evBody.firstChild);
        refs.classList.add('px-refs-in-ev');
        var rh = refs.querySelector('.px-refs-head'); if(rh) rh.classList.add('px-screen-hide');
        refs.setAttribute('aria-labelledby', (head(ev) && head(ev).querySelector('h2') && (head(ev).querySelector('h2').id || (head(ev).querySelector('h2').id = 'px-ev-h'))) || 'px-refs-h');
        var openEv = function(){ setOpen(ev, true); };
        document.addEventListener('click', function(e){ var a = e.target.closest && e.target.closest('a[href="#px-refs"]'); if(a) openEv(); });
        if(location.hash === '#px-refs') openEv();
      }
    } else {
      var foot = root.querySelector('.mg-foot');
      root.insertBefore(refs, foot || null);
      /* no Evidence step: the References heading itself opens and closes the lists */
      var rh2 = refs.querySelector('.px-refs-head');
      refs.classList.add('px-refs-fold'); refs.setAttribute('data-open', '0');
      rh2.setAttribute('role', 'button'); rh2.setAttribute('tabindex', '0'); rh2.setAttribute('aria-expanded', 'false');
      rh2.appendChild(el('<span class="mg-chev px-refs-chev" aria-hidden="true">▾</span>'));
      var tog = function(on){ refs.setAttribute('data-open', on ? '1' : '0'); rh2.setAttribute('aria-expanded', on ? 'true' : 'false'); };
      rh2.addEventListener('click', function(){ tog(refs.getAttribute('data-open') !== '1'); });
      rh2.addEventListener('keydown', function(e){ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); tog(refs.getAttribute('data-open') !== '1'); } });
      document.addEventListener('click', function(e){ var a = e.target.closest && e.target.closest('a[href="#px-refs"]'); if(a) tog(true); });
      if(location.hash === '#px-refs') tog(true);
    }
    return refs;
  }

  /* ---------- finders shared by the options ---------- */
  function findSection(re){
    return sections().filter(function(s){ return re.test((s.id||'')+' '+title(s)); })[0] || null;
  }
  function redFlagTarget(){
    return findSection(/red flag|cauda|severe|emergenc|danger|safety\b/i) || document.getElementById('quick');
  }
  /* the patient safety-net script: a card headed "Safety-net…" holding .say lines,
     else a section titled "…safety-net…" holding a .mg-say / .say, else any .mg-say */
  function scriptBlock(){
    var h = $$('#mgRoot .card h3, #mgRoot .card h4, #mgRoot .mg-card h3').filter(function(x){ return /safety.?net/i.test(x.textContent) && x.closest('.card, .mg-card').querySelector('.say, .mg-say'); })[0];
    if(h){ var c = h.closest('.card, .mg-card'); return {box:c, lines:$$('.say, .mg-say', c), heading:h.textContent.trim()}; }
    var s = findSection(/safety.?net/i);
    if(s){ var say = $$('.mg-say, .say', s); if(say.length) return {box:say[0], lines:[say[0]], heading:title(s)}; }
    var any = $('#mgRoot .mg-say, #mgRoot .say');
    return any ? {box:any, lines:[any], heading:'Patient script'} : null;
  }
  function scriptText(sb){
    return sb.lines.map(function(n){
      var b = n.querySelector(':scope > b');
      var label = b ? b.textContent.trim() : '';
      var body = n.textContent.trim(); if(label && body.indexOf(label) === 0) body = body.slice(label.length).trim();
      if(n.classList.contains('mg-say')) body = '“' + body + '”';
      return (label ? label + ': ' : '') + body;
    }).join('\n\n');
  }

  function openAndGo(target, flash){
    if(!target) return;
    var s = target.closest ? target.closest('section') : null;
    if(s && s.classList.contains('mg-fold')) setOpen(s, true);
    var top = target.getBoundingClientRect().top + window.pageYOffset - (navH() + 14);
    window.scrollTo({top: Math.max(0, top), behavior: 'smooth'});
    if(flash){ target.classList.remove('px-flash'); void target.offsetWidth; target.classList.add('px-flash'); }
  }
  function navH(){
    var n = $('.mg-nav'), h = n ? n.getBoundingClientRect().height : 0;
    var r = $('.pa-rail');   /* option A's phone step scroller is sticky under the top bar */
    if(r && window.innerWidth <= 900 && getComputedStyle(r).position === 'sticky') h += r.getBoundingClientRect().height;
    return h;
  }

  function hideOnScreen(nodes){ nodes.forEach(function(n){ if(n) n.classList.add('px-screen-hide'); }); }

  function copy(text){
    if(navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function(res, rej){
      var t = document.createElement('textarea'); t.value = text; t.setAttribute('readonly','');
      t.style.cssText = 'position:fixed;left:-9999px;top:0'; document.body.appendChild(t); t.select();
      try{ document.execCommand('copy') ? res() : rej(); }catch(e){ rej(e); } t.remove();
    });
  }
  function toast(msg){
    var t = $('.px-toast') || document.body.appendChild(el('<div class="px-toast" role="status" aria-live="polite"></div>'));
    t.textContent = msg; t.classList.add('on'); clearTimeout(t._h); t._h = setTimeout(function(){ t.classList.remove('on'); }, 2200);
  }

  /* the stem's long scope note folds to N lines behind a toggle (screen only) */
  function clampStem(cls){
    var small = root.querySelector('.mg-stem small');
    if(!small) return;
    small.classList.add('px-clamp', cls || 'px-clamp-1');
    var more = el('<button type="button" class="px-more px-chrome" aria-expanded="false">More about this page</button>');
    small.insertAdjacentElement('afterend', more);
    more.addEventListener('click', function(){
      var on = small.classList.toggle('open');
      more.setAttribute('aria-expanded', String(on)); more.textContent = on ? 'Less' : 'More about this page';
    });
  }

  /* the layer strip's links to OTHER pages (e.g. a casebook chapter) are kept:
     they join the "Across the toolkit" strip, which is where cross-links live */
  function keepLayerLinks(){
    var layers = root.querySelector('.mg-layers'); if(!layers) return;
    var ext = $$('a', layers).filter(function(a){ return !/^#/.test(a.getAttribute('href')||''); });
    if(!ext.length) return;
    var host = root.querySelector('.tl-strip .tl-cards');
    if(!host){
      var strip = el('<div class="tl-strip px-tl-fallback"><div class="tl-head"><span class="tl-eyebrow">Across the toolkit</span></div><div class="tl-cards"></div></div>');
      layers.insertAdjacentElement('beforebegin', strip); host = strip.querySelector('.tl-cards');
    }
    ext.forEach(function(a){
      var c = el('<a class="tl-card"><span class="tl-ic">📖</span><span class="tl-tx"><b></b><small></small></span><span class="tl-arr">→</span></a>');
      c.href = a.getAttribute('href');
      var b = a.querySelector('b'), sm = a.querySelector('small');
      c.querySelector('b').textContent = b ? b.textContent : a.textContent;
      c.querySelector('small').textContent = sm ? sm.textContent : '';
      host.appendChild(c);
    });
  }

  return {keepLayerLinks:keepLayerLinks, clampStem:clampStem, root:root, $:$, $$:$$, el:el, ready:ready, isPrint:isPrint, sections:sections, head:head, title:title, num:num,
          setOpen:setOpen, isOpen:isOpen, navLabel:navLabel, evidenceSection:evidenceSection, firstSentence:firstSentence,
          preview:preview, buildRefs:buildRefs, findSection:findSection, redFlagTarget:redFlagTarget,
          scriptBlock:scriptBlock, scriptText:scriptText, openAndGo:openAndGo, navH:navH, hideOnScreen:hideOnScreen,
          copy:copy, toast:toast};
})();
    window.PX = PX;
/* ============================================================
   OPTION A — "Clean stepper"
   name → one-line summary → red "Refer today / 999" strip →
   review box → one sticky step navigation (left rail on desktop,
   horizontal scroller on phone) → numbered steps, first open,
   the rest folded with a one-line preview → References at the end.
   ============================================================ */
PX.ready(function(){
  'use strict';
  if(PX.isPrint() || PX.sections().length < 3) return;
  var root = PX.root, $ = PX.$, $$ = PX.$$, el = PX.el;
  document.documentElement.classList.add('pa');

  var stem = $('.mg-stem', root), tabs = $('.mg-viewtabs', root), snap = $('.mg-snap', root);
  var prov = document.getElementById('rgpProvStrip'), tl = $('.tl-strip', root);
  var layers = $('.mg-layers', root), secnav = $('.mg-secnav', root), allbtn = $('.mg-allbtn', root);

  PX.buildRefs();

  /* ---- 1. stem: the long scope note folds to one line ---- */
  PX.clampStem('px-clamp-1');

  /* ---- 2. red "Refer today / 999" strip, verbatim first sentences of the red 30-second cards ---- */
  var reds = $$('#quick .mg-q-red').filter(function(c){
    return /refer|999|same.day|emergenc|cauda|A&E|immediate|urgent/i.test(c.textContent);
  });
  var urgent = null;
  if(reds.length){
    urgent = el('<aside class="pa-urgent px-chrome" aria-label="Refer today or call 999"><div class="pa-urgent-k"><span class="pa-siren" aria-hidden="true"></span>Refer today / 999</div><div class="pa-urgent-list"></div></aside>');
    var list = urgent.querySelector('.pa-urgent-list');
    reds.forEach(function(c){
      var h = c.querySelector('h3'), p = c.querySelector('p');
      var row = el('<div class="pa-urgent-row"><b></b><span></span> <a href="#" class="pa-urgent-go">Full criteria ↓</a></div>');
      row.querySelector('b').textContent = h ? h.textContent.replace(/^[⚠\s]+/, '') : '';
      row.querySelector('span').textContent = PX.firstSentence(p ? p.textContent : '');
      row.querySelector('a').addEventListener('click', function(e){ e.preventDefault(); PX.openAndGo(c, true); });
      list.appendChild(row);
    });
  }

  /* ---- 3. order the head of the page ---- */
  var after = stem;
  function put(n){ if(!n) return; after.insertAdjacentElement('afterend', n); after = n; }
  put(urgent); put(tabs); put(snap); put($('.mg-meta', root)); put(prov); put(tl);

  /* ---- 4. the step rail replaces layer cards + chip row + Expand all ---- */
  /* ---- 3b. the "3-minute pathway" step becomes a one-line Route under the 30-second answer (owner decision, Oct 2026).
         The original step cards and sub-line are MOVED, not copied or reworded; numbering closes up. ---- */
  (function routeFold(){
    var pw = document.getElementById('pathway'), q = document.getElementById('quick');
    var qb = q && q.querySelector(':scope > .mg-sbody'), path = pw && pw.querySelector('.mg-path');
    if(!pw || !qb || !path) return;
    var steps = PX.$$('.mg-pstep', path); if(!steps.length) return;
    var box = PX.el('<div class="px-route" id="px-route"><div class="px-route-h"><span class="px-route-k">Route</span><ol class="px-route-chips"></ol>'+
      '<button type="button" class="px-route-all px-chrome" aria-expanded="false" aria-controls="px-route-body">Show the route in full</button></div>'+
      '<div class="px-route-body" id="px-route-body" hidden></div></div>');
    var ol = box.querySelector('.px-route-chips'), body = box.querySelector('.px-route-body'), all = box.querySelector('.px-route-all');
    var sub = pw.querySelector('.mg-sec-sub'); if(sub) body.appendChild(sub);
    body.appendChild(path);
    function open(on){ body.hidden = !on; all.setAttribute('aria-expanded', String(on)); all.textContent = on ? 'Hide the route' : 'Show the route in full'; }
    steps.forEach(function(st, i){
      var h = st.querySelector('h3'); if(!h) return;
      var li = PX.el('<li><button type="button" class="px-route-chip"><span class="px-route-n">'+(i+1)+'</span><span class="px-route-t"></span></button></li>');
      li.querySelector('.px-route-t').textContent = h.textContent.trim();
      if(st.classList.contains('alert')) li.firstChild.classList.add('is-alert');
      li.firstChild.setAttribute('aria-label', 'Route step ' + (i+1) + ': ' + h.textContent.trim() + (st.classList.contains('alert') ? ' (where patients come to harm)' : ''));
      li.firstChild.addEventListener('click', function(){
        open(true); st.scrollIntoView({behavior:'smooth', block:'center'});
        st.classList.remove('px-route-flash'); void st.offsetWidth; st.classList.add('px-route-flash');
      });
      ol.appendChild(li);
    });
    all.addEventListener('click', function(){ open(body.hidden); });
    /* search: open the route when a match lands inside it */
    new MutationObserver(function(){ if(body.hidden && body.querySelector('mark')) open(true); }).observe(body, {subtree:true, childList:true});
    qb.appendChild(box);
    pw.parentNode.removeChild(pw);
    /* close up the step numbers (01, 03, 04 … → 01, 02, 03 …) */
    var k = 0;
    PX.sections().forEach(function(s){
      var n = s.querySelector(':scope > .mg-sec-h .mg-sec-n');
      if(n && /^\d+$/.test(n.textContent.trim())){ k++; s.setAttribute('data-px-orig-n', n.textContent.trim()); n.textContent = (k < 10 ? '0' : '') + k; }
    });
  })();
  PX.hideOnScreen([layers, secnav, allbtn]);
  var secs = PX.sections();
  var refs = document.getElementById('px-refs');
  var body = el('<div class="pa-body"><nav class="pa-rail px-chrome" aria-label="Steps"><div class="pa-rail-h">Steps</div><ol class="pa-steps"></ol><div class="pa-rail-foot"></div></nav><div class="pa-main"></div></div>');
  var main = body.querySelector('.pa-main'), ol = body.querySelector('.pa-steps'), foot = body.querySelector('.pa-rail-foot');
  secs[0].parentNode.insertBefore(body, secs[0]);
  secs.forEach(function(s){ main.appendChild(s); });
  if(refs) main.appendChild(refs);

  var items = [];
  secs.forEach(function(s, i){
    if(!s.id) s.id = 'pa-s' + i;
    var n = PX.num(s) || String(i+1);
    var li = el('<li><a href="#'+s.id+'"><span class="pa-n">'+n.replace(/^0/,'')+'</span><span class="pa-l"></span></a></li>');
    li.querySelector('.pa-l').textContent = PX.navLabel(s);
    if(s.classList.contains('px-ev-in-refs')) return;
    ol.appendChild(li); items.push({s:s, a:li.querySelector('a')});
  });
  if(refs){
    var li = el('<li class="pa-step-refs"><a href="#px-refs"><span class="pa-n">§</span><span class="pa-l">References &amp; sources</span></a></li>');
    ol.appendChild(li); items.push({s:refs, a:li.querySelector('a')});
  }
  /* keep the layer strip's links to OTHER pages (e.g. the casebook chapter) */
  if(layers) $$('a', layers).forEach(function(a){
    if(/^#/.test(a.getAttribute('href'))) return;
    var x = a.cloneNode(true); x.className = 'pa-ext'; foot.appendChild(x);
  });
  var openAll = el('<button type="button" class="pa-openall">Open all steps</button>');
  foot.appendChild(openAll);
  openAll.addEventListener('click', function(){
    var expand = openAll.textContent === 'Open all steps';
    secs.forEach(function(s){ PX.setOpen(s, expand); });
    openAll.textContent = expand ? 'Fold all steps' : 'Open all steps';
  });

  items.forEach(function(it){
    it.a.addEventListener('click', function(e){
      e.preventDefault();
      PX.openAndGo(it.s, false);
      history.replaceState(null, '', '#' + it.s.id);
    });
  });

  /* ---- 5. steps: one-line preview while folded ---- */
  secs.forEach(function(s){
    if(!s.classList.contains('mg-fold')) return;
    var h = PX.head(s), h2 = h.querySelector('h2');
    var wrap = el('<div class="pa-ht"></div>'); h2.parentNode.insertBefore(wrap, h2); wrap.appendChild(h2);
    var pv = el('<span class="pa-prev" aria-hidden="true"></span>'); pv.textContent = PX.preview(s); wrap.appendChild(pv);
  });

  /* ---- 6. scroll-spy ---- */
  var cur = null;
  function spy(){
    var line = PX.navH() + 90, best = items[0];
    items.forEach(function(it){ if(it.s.getBoundingClientRect().top <= line) best = it; });
    if((window.innerHeight + window.pageYOffset) >= document.documentElement.scrollHeight - 4) best = items[items.length-1];
    if(best !== cur){
      if(cur) cur.a.removeAttribute('aria-current');
      cur = best; cur.a.setAttribute('aria-current', 'step');
      /* phone: keep the active chip in view */
      if(window.matchMedia('(max-width:900px)').matches){
        var r = cur.a.getBoundingClientRect(), rr = ol.getBoundingClientRect();
        if(r.left < rr.left || r.right > rr.right) ol.scrollTo({left: ol.scrollLeft + (r.left - rr.left) - 14, behavior:'smooth'});
      }
    }
    items.forEach(function(it){ it.a.classList.toggle('is-open', PX.isOpen(it.s)); });
  }
  var topbar = $('.mg-nav'); document.documentElement.style.setProperty('--pa-top', Math.round(topbar ? topbar.getBoundingClientRect().height : 0) + 'px');
  window.addEventListener('scroll', spy, {passive:true});
  root.addEventListener('px:toggle', spy);
  root.addEventListener('click', function(e){ if(e.target.closest('.mg-sec-h')) setTimeout(spy, 0); });
  spy();
});
/* ============================================================
   OPTION D — Option A ("Clean stepper") + Option C's bottom bar
   Runs after optionA.js. Adds, from Option C, unchanged in behaviour:
   - the sticky bottom bar  Red flags · Snapshot · Script · Top
     (full-width on phone, a floating pill on desktop);
   - the "Copy safety-net script" button where the page has a patient script.
   Restructures nothing else: A's layout stays as it is.
   ============================================================ */
PX.ready(function(){
  'use strict';
  if(PX.isPrint() || !PX.root || document.querySelector('.pc-bar')) return;
  var root = PX.root, $ = PX.$, el = PX.el;
  document.documentElement.classList.add('pd');
  var tabs = $('.mg-viewtabs', root);

  /* ---- copy the safety-net script (Option C) ---- */
  var sb = PX.scriptBlock();
  var scriptAnchor = null;
  if(sb){
    var btn = el('<button type="button" class="pc-copy px-chrome" aria-label="Copy the patient safety-net script"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg><span>Copy safety-net script</span></button>');
    btn.addEventListener('click', function(){
      PX.copy(PX.scriptText(sb)).then(function(){ PX.toast('Safety-net script copied'); }, function(){ PX.toast('Could not copy — select the text instead'); });
    });
    var bar = el('<div class="pc-copybar px-chrome"><span class="pc-copy-k">Patient script</span><span class="pc-copy-btns"></span></div>');
    bar.querySelector('.pc-copy-btns').appendChild(btn);
    if(sb.box.classList.contains('card') || sb.box.classList.contains('mg-card')){
      var h3 = sb.box.querySelector('h3, h4');
      (h3 || sb.box.firstChild).insertAdjacentElement(h3 ? 'afterend' : 'beforebegin', bar);
    } else sb.box.insertAdjacentElement('beforebegin', bar);
    scriptAnchor = bar;
  }

  /* ---- bottom bar (Option C) ---- */
  var ICON = {
    red:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    snap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="2"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="13" y2="16"/></svg>',
    script:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    top:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>'
  };
  var nav = el('<nav class="pc-bar px-chrome" aria-label="Consultation shortcuts">'+
    '<button type="button" data-a="red" class="pc-b pc-b-red" aria-label="Go to red flags">'+ICON.red+'<span>Red flags</span></button>'+
    '<button type="button" data-a="snap" class="pc-b" aria-pressed="false" aria-label="Show the one-page Snapshot"'+(tabs?'':' disabled')+'>'+ICON.snap+'<span>Snapshot</span></button>'+
    '<button type="button" data-a="script" class="pc-b" aria-label="Go to the patient safety-net script"'+(sb?'':' disabled')+'>'+ICON.script+'<span>Script</span></button>'+
    '<button type="button" data-a="top" class="pc-b" aria-label="Back to top">'+ICON.top+'<span>Top</span></button></nav>');
  document.body.appendChild(nav);

  function inSnap(){ var b = tabs && tabs.querySelector('[data-v="snap"]'); return b && b.getAttribute('aria-selected') === 'true'; }
  function steps(){ if(inSnap()) tabs.querySelector('[data-v="full"]').click(); }
  function sync(){ nav.querySelector('[data-a="snap"]').setAttribute('aria-pressed', String(!!inSnap())); }
  if(tabs) tabs.addEventListener('click', function(){ setTimeout(sync, 0); });
  nav.addEventListener('click', function(e){
    var b = e.target.closest('button[data-a]'); if(!b || b.disabled) return;
    var a = b.getAttribute('data-a');
    if(a === 'top'){ window.scrollTo({top:0, behavior:'smooth'}); return; }
    if(a === 'snap'){
      if(!tabs) return;
      tabs.querySelector('[data-v="'+(inSnap() ? 'full' : 'snap')+'"]').click(); sync();
      window.scrollTo({top: Math.max(0, tabs.getBoundingClientRect().top + window.pageYOffset - PX.navH() - 10), behavior:'smooth'});
      return;
    }
    steps();
    if(a === 'red') PX.openAndGo(PX.redFlagTarget(), true);
    if(a === 'script' && scriptAnchor) PX.openAndGo(scriptAnchor, true);
  });
});
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
/* ============================================================
   PROTOCOL ADD-ONS (6) — self-contained, layout-agnostic.
   Works on the current page, on Option A, B, C or D. Never rewrites
   clinical text: every feature either copies existing text verbatim,
   wraps existing nodes, or adds clearly separate chrome (.pxa-chrome).
     1 Copy to notes          4 One urgency colour scheme (tokens + labelled badges)
     2 "Updated" badge        5 Give to patient (curated leaflets as QR / link / share)
     3 Search in protocol     6 Collapsible drug boxes
     7 "Red flags" step name (the protocol's red-flag / emergency step)
   (A 7th add-on, per-section feedback, was removed at the owner's request.)
   Library functions (no side effects) are exposed as window.ProtocolUI.
   ============================================================ */
(function(){
  'use strict';
  var W = window, D = document;
  if(W.ProtocolUI && W.ProtocolUI._loaded) return;
  var API = W.ProtocolUI = W.ProtocolUI || {};
  API._loaded = true;

  /* where this file was loaded from → the site's assets/ folder and site root */
  var SCRIPT = D.currentScript;
  var ASSETS = (function(){
    var s = SCRIPT && SCRIPT.src;
    if(s) return s.replace(/[^\/]*$/, '');
    var any = D.querySelector('script[src*="assets/management-engine.js"]');
    return any ? any.src.replace(/[^\/]*$/, '') : null;
  })();
  var SITE_ROOT = ASSETS ? ASSETS.replace(/assets\/$/, '') : null;

  /* ---------------- small helpers ---------------- */
  function $(s, c){ return (c||D).querySelector(s); }
  function $$(s, c){ return Array.prototype.slice.call((c||D).querySelectorAll(s)); }
  function el(html){ var t = D.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function noEmoji(s){ return String(s).replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}\u{20E3}]/gu, ''); }
  function squash(s){ return String(s).replace(/\s+/g, ' ').trim(); }
  function isPrintCopy(){ return !!D.querySelector('meta[name="omelette-print-source"]'); }
  function pageSlug(){ var m = location.pathname.match(/([^\/]+?)(?:\.html)?$/); return m ? m[1] : 'page'; }
  function pagePath(){
    var m = location.pathname.match(/(tools\/[^?#]+?\.html)$/);
    return m ? m[1] : location.pathname.replace(/^\//, '');
  }

  function root(){ return D.getElementById('mgRoot'); }
  function sections(){
    var r = root(); if(!r) return [];
    return $$('section', r).filter(function(s){ return s.querySelector(':scope > .mg-sec-h'); });
  }
  function secTitle(s){ var h = s.querySelector(':scope > .mg-sec-h h2'); return h ? squash(h.textContent) : ''; }
  function secBody(s){ return s.querySelector(':scope > .mg-sbody') || s; }
  function secData(s){
    var d = (W.MG && W.MG._data) || {};
    return (d.sections || []).filter(function(x){ return x.id === s.id; })[0] || null;
  }
  function secNav(s){ var d = secData(s); return d && typeof d.nav === 'string' ? d.nav : ''; }
  function isRefs(s){ return s.classList.contains('px-ev-in-refs') || /^(evidence|evidence-legacy|provenance|history|coverage)$/.test(s.id) || /^evidence$/i.test(secTitle(s)); }

  function setSecOpen(s, open){
    if(!s || !s.classList.contains('mg-fold')) return;
    if(W.PX && W.PX.setOpen) return W.PX.setOpen(s, open);
    s.setAttribute('data-open', open ? '1' : '0');
    var h = s.querySelector(':scope > .mg-sec-h'); if(h) h.setAttribute('aria-expanded', open ? 'true' : 'false');
    s.dispatchEvent(new CustomEvent('px:toggle', {bubbles:true}));
  }
  /* make a node visible: steps view, its section, any drawer or drug box around it */
  function reveal(node){
    var tabs = D.querySelector('.mg-viewtabs [data-v="full"]');
    if(tabs && tabs.getAttribute('aria-selected') !== 'true') tabs.click();
    var n = node.nodeType === 1 ? node : node.parentNode;
    while(n && n !== D.body){
      if(n.matches){
        if(n.matches('section.mg-fold') && n.getAttribute('data-open') !== '1') setSecOpen(n, true);
        if(n.matches('.mg-why-body') && !n.classList.contains('open')){
          n.classList.add('open'); var b = n.parentNode.querySelector('.mg-why-btn'); if(b) b.setAttribute('aria-expanded','true');
        }
        if(n.matches('.pxa-drug') && n.getAttribute('data-open') !== '1') drugToggle(n, true);
        if(n.matches('details') && !n.open) n.open = true;
      }
      n = n.parentNode;
    }
  }
  function stickyOffset(){
    var h = 0, nav = D.querySelector('.mg-nav'); if(nav) h += nav.getBoundingClientRect().height;
    var r = D.querySelector('.pa-rail');
    if(r && getComputedStyle(r).position === 'sticky' && W.innerWidth <= 900) h += r.getBoundingClientRect().height;
    return h + 16;
  }
  function scrollToNode(n, center){
    var r = n.getBoundingClientRect();
    var top = r.top + W.pageYOffset - (center ? Math.max(stickyOffset(), (W.innerHeight - 140) / 2 - 40) : stickyOffset());
    W.scrollTo({top: Math.max(0, top), behavior: 'auto'});
  }

  function copyText(text){
    if(navigator.clipboard && W.isSecureContext){
      return navigator.clipboard.writeText(text).catch(function(){ return legacyCopy(text); });
    }
    return legacyCopy(text);
  }
  function legacyCopy(text){
    return new Promise(function(res, rej){
      var t = D.createElement('textarea'); t.value = text; t.setAttribute('readonly', '');
      t.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0'; D.body.appendChild(t); t.select();
      var ok = false; try{ ok = D.execCommand('copy'); }catch(e){}
      t.remove(); ok ? res() : rej(new Error('copy failed'));
    });
  }
  function toast(msg){
    var t = $('.pxa-toast') || D.body.appendChild(el('<div class="pxa-toast pxa-chrome" role="status" aria-live="polite"></div>'));
    t.textContent = msg; t.classList.add('on'); clearTimeout(t._h); t._h = setTimeout(function(){ t.classList.remove('on'); }, 2400);
  }
  function loadScript(src){
    return new Promise(function(res, rej){
      var s = D.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; D.head.appendChild(s);
    });
  }

  /* =========================================================
     CLASSIFICATION — which sections are "plan", which blocks are "safety-net"
     ========================================================= */
  var PLAN_ID = /^(treat|treatment|ladder|lifestyle|active|activity|protect|manage|management|plan|prescribe|prescribing|monitor|monitoring|follow|followup|follow-up|review)$/i;
  var PLAN_TXT = /(what to (actually )?prescribe|drug ladder|glucose ladder|\bladder\b|who gets drug treatment|treat the risk|lifestyle|stay active|activity, physiotherapy|monitoring|review rhythm|review and escalation|follow.?up)/i;
  var NOT_PLAN = /^(quick|pathway|sca|loop|refer|confirm|diagnose|exam|workup|stage|severe|safety|special|targets|risk|acute|foundations|donot|evidence|evidence-legacy|provenance|history|coverage)$/i;
  function isPlan(s){
    if(isRefs(s) || NOT_PLAN.test(s.id || '')) return false;
    return PLAN_ID.test(s.id || '') || PLAN_TXT.test(secTitle(s) + ' ' + secNav(s));
  }
  var URG_HEAD = /(\b999\b|A&E|straight away|same[- ]day|same day|call us|contact us|come back|emergenc)/i;
  var QUOTE_RE = /[“"]([^”"]{20,})[”"]/g;
  function inSkipped(n){ return !!(n.closest && n.closest('#sca, #quick, #pathway, .px-refs, .mg-why-body')); }
  function cardHead(c){
    var h = c.querySelector(':scope > h3, :scope > h4'); if(!h) return '';
    var x = h.cloneNode(true); $$('.pxa-chrome, .px-chrome', x).forEach(function(n){ n.remove(); });
    return squash(x.textContent);
  }
  function cardBody(c){
    var b = c.cloneNode(true);
    $$(':scope > h3, :scope > h4, .src, .mg-src, .pxa-chrome, .px-chrome', b).forEach(function(x){ x.remove(); });
    return squash(b.textContent);
  }
  /* returns [{el, kind:'say-card'|'cards'|'say', section}] in document order */
  function safetyNetBlocks(scope){
    var r = scope || root(); if(!r) return [];
    var out = [];
    $$('.card, .mg-card', r).forEach(function(c){
      if(inSkipped(c)) return;
      if(/safety.?net/i.test(cardHead(c)) && c.querySelector('.say, .mg-say')) out.push({el:c, kind:'say-card'});
    });
    $$('.mg-cards', r).forEach(function(g){
      if(inSkipped(g)) return;
      var cards = $$(':scope > .mg-card', g);
      var quoted = cards.filter(function(c){ QUOTE_RE.lastIndex = 0; return QUOTE_RE.test(cardBody(c)); }).length;
      var urgent = cards.some(function(c){ return URG_HEAD.test(cardHead(c)); });
      if(quoted >= 2 && urgent) out.push({el:g, kind:'cards'});
    });
    $$('.mg-say', r).forEach(function(s){
      if(inSkipped(s)) return;
      var sec = s.closest('section');
      if(sec && /safety.?net/i.test(secTitle(sec))) out.push({el:s, kind:'say'});
    });
    out.forEach(function(b){ b.section = b.el.closest('section'); });
    out.sort(function(a, b){ return a.el.compareDocumentPosition(b.el) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1; });
    return out;
  }
  API.safetyNetBlocks = safetyNetBlocks;

  /* =========================================================
     1. COPY TO NOTES — verbatim plain text for EMIS / SystmOne
     ========================================================= */
  var NOTE_DROP = '.src, .mg-src, .mg-chev, .mg-sec-n, .mg-why, .pxa-chrome, .px-chrome, .pa-prev, .pc-prev, button, script, style, .px-print-only, .px-screen-hide, svg, [aria-hidden="true"]';
  var BLOCK = /^(ADDRESS|ARTICLE|ASIDE|BLOCKQUOTE|DD|DIV|DL|DT|FIGURE|FOOTER|FORM|H1|H2|H3|H4|H5|H6|HEADER|HR|LI|MAIN|NAV|OL|P|PRE|SECTION|TABLE|TBODY|THEAD|TFOOT|TR|TD|TH|UL|CAPTION)$/;
  function inl(n){ return squash(noEmoji(n.textContent)); }
  function hasBlockKids(n){ return Array.prototype.some.call(n.children, function(c){ return BLOCK.test(c.tagName) || /^(SPAN)$/.test(c.tagName) && c.matches('.stepno, .mg-tl-when, .sp-cond, .sp-drug, .sp-note, .bcond, .rd-lbl, .arrow-lbl'); }); }
  function isHeading(n){ return /^H[1-6]$/.test(n.tagName) || n.matches('.stepno, .mg-tl-when, .dec-q, .mg-loop-head b, .bcond'); }
  function toLines(n, out, indent){
    indent = indent || '';
    if(n.nodeType === 3){ var t = squash(noEmoji(n.data)); if(t) out.push(indent + t); return; }
    if(n.nodeType !== 1) return;
    var tag = n.tagName;
    if(isHeading(n)){ var h = inl(n); if(h){ out.push(''); out.push(indent + h.toUpperCase()); } return; }
    if(tag === 'TR'){
      var cells = $$(':scope > td, :scope > th', n).map(inl);
      var allTh = $$(':scope > th', n).length === cells.length;
      var line = cells.filter(Boolean).join(' | ');
      if(line) out.push(indent + (allTh ? line.toUpperCase() : '- ' + line));
      return;
    }
    if(tag === 'LI'){
      var c = n.cloneNode(true); var sub = $$(':scope > ul, :scope > ol', c); sub.forEach(function(x){ x.remove(); });
      var own = inl(c); if(own) out.push(indent + '- ' + own);
      $$(':scope > ul > li, :scope > ol > li', n).forEach(function(li){ toLines(li, out, indent + '  '); });
      return;
    }
    if(n.matches('.say, .mg-dl-row, .mg-split, .mg-kv')){
      if(n.matches('.mg-kv')){ $$(':scope > dt', n).forEach(function(dt){ var dd = dt.nextElementSibling; out.push(indent + '- ' + inl(dt) + ': ' + (dd ? inl(dd) : '')); }); return; }
      var parts = Array.prototype.map.call(n.children.length ? n.childNodes : [n], function(x){ return x.nodeType === 1 || x.nodeType === 3 ? inl(x) : ''; }).filter(Boolean);
      if(parts.length) out.push(indent + '- ' + parts[0] + (parts.length > 1 ? ': ' + parts.slice(1).join(' — ') : ''));
      return;
    }
    if(!hasBlockKids(n)){ var t2 = inl(n); if(t2) out.push(indent + t2); return; }
    Array.prototype.forEach.call(n.childNodes, function(c){ toLines(c, out, indent); });
  }
  function wrap(line, max){
    if(line.length <= max) return [line];
    var m = line.match(/^(\s*)(- )?/), ind = m[1] + (m[2] || ''), pad = m[1] + (m[2] ? '  ' : '');
    var words = line.slice(ind.length).split(' ').filter(Boolean), out = [], cur = ind, has = false;
    words.forEach(function(w){
      if(has && (cur + ' ' + w).length > max){ out.push(cur); cur = pad + w; }
      else cur = has ? cur + ' ' + w : cur + w;
      has = true;
    });
    if(has) out.push(cur);
    return out;
  }
  function notesFrom(nodes, opts){
    opts = opts || {};
    var out = [];
    nodes.forEach(function(node){
      var c = node.cloneNode(true);
      $$(NOTE_DROP, c).forEach(function(x){ x.remove(); });
      (opts.exclude || []).forEach(function(ex){ var id = ex.getAttribute('data-pxa-id'); if(id){ var m = c.querySelector('[data-pxa-id="'+id+'"]'); if(m) m.remove(); } });
      toLines(c, out, '');
      for(var k = 0; k < out.length; k++) out[k] = out[k].replace(/ +([.,;:)])/g, '$1').replace(/\( +/g, '(');
      out.push('');
    });
    var lines = [], prevBlank = true;
    out.forEach(function(l){
      var blank = !l.trim();
      if(blank && prevBlank) return;
      wrap(l.replace(/\s+$/, ''), 100).forEach(function(x){ lines.push(x); });
      prevBlank = blank;
    });
    while(lines.length && !lines[lines.length - 1].trim()) lines.pop();
    return lines.join('\n');
  }
  API.notesFrom = notesFrom;
  var uid = 0; function tagId(n){ if(!n.getAttribute('data-pxa-id')) n.setAttribute('data-pxa-id', 'n' + (++uid)); return n; }

  var COPY_SVG = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';
  function copyBtn(label, aria, getText, msg){
    var b = el('<button type="button" class="pxa-btn pxa-copy pxa-chrome">' + COPY_SVG + '<span></span></button>');
    b.querySelector('span').textContent = label; b.setAttribute('aria-label', aria);
    b.addEventListener('click', function(e){
      e.stopPropagation();
      var t = getText();
      copyText(t).then(function(){ API.lastCopied = t; toast(msg || 'Copied to clipboard'); }, function(){ toast('Could not copy — select the text instead'); });
    });
    return b;
  }

  var PLAN = [], SN = [];
  function addCopy(){
    PLAN = sections().filter(isPlan);
    SN = safetyNetBlocks();
    SN.forEach(function(b){ tagId(b.el); });
    PLAN.forEach(function(s){
      var body = secBody(s);
      var bar = el('<div class="pxa-sectools pxa-chrome"></div>');
      bar.appendChild(copyBtn('Copy to notes', 'Copy this section to the clinical notes as plain text', function(){ return notesFrom([s]); }, 'Copied — ' + (secNav(s) || 'section') + ' as plain text'));
      body.insertBefore(bar, body.firstChild);
    });
    SN.forEach(function(b, i){
      var host = b.el.previousElementSibling && b.el.previousElementSibling.classList.contains('pc-copybar') ? b.el.previousElementSibling.querySelector('.pc-copy-btns') : (b.el.querySelector(':scope > .pc-copybar .pc-copy-btns'));
      var tools = host || el('<div class="pxa-sntools pxa-chrome"><span class="pxa-sntools-k">Safety-net</span><span class="pxa-sntools-b"></span></div>');
      var slot = host || tools.querySelector('.pxa-sntools-b');
      slot.appendChild(copyBtn('Copy to notes', 'Copy the safety-net advice to the clinical notes as plain text', function(){ return notesFrom([b.el]); }, 'Copied — safety-net as plain text'));
      if(!host){
        if(b.kind === 'say-card'){ var h = b.el.querySelector(':scope > h3, :scope > h4'); (h || b.el.firstChild).insertAdjacentElement(h ? 'afterend' : 'beforebegin', tools); }
        else b.el.insertAdjacentElement('beforebegin', tools);
      }
    });
  }

  /* =========================================================
     5. GIVE TO PATIENT — the site's curated patient leaflets, as a QR code
        Protocol → leaflet map: assets/protocol-leaflets.js (window.RGP_PROTOCOL_LEAFLETS)
        Leaflets: assets/leaflets-data.js (window.LEAFLET_CONDITIONS, window.LEAFLET_ORGS),
        the data behind tools/leaflets.html. The QR encodes the resource URL itself.
     ========================================================= */
  /* verbatim from tools/leaflets.html ("Reference tool…" footer) */
  var LEAFLET_NOTE = 'Always preview the leaflet yourself before sharing it with a patient — content changes, and the right leaflet for the patient depends on language, literacy, and context.';
  function leafletSlugs(){
    var m = W.RGP_PROTOCOL_LEAFLETS && W.RGP_PROTOCOL_LEAFLETS[pageSlug()];
    return (m || []).map(function(x){ return typeof x === 'string' ? x : x[0]; });
  }
  API.leafletSlugs = leafletSlugs;
  function loadLeafletMap(){
    if(W.RGP_PROTOCOL_LEAFLETS || !ASSETS) return Promise.resolve();
    return loadScript(ASSETS + 'protocol-leaflets.js').catch(function(){});
  }
  function loadLeaflets(){
    if(W.LEAFLET_CONDITIONS || !ASSETS) return Promise.resolve();
    return loadScript(ASSETS + 'leaflets-data.js').catch(function(){});
  }
  /* resources to offer, primary first: [{cond, org, u, d, tier}] */
  function resourcesFor(slugs){
    var conds = (W.LEAFLET_CONDITIONS || []), orgs = W.LEAFLET_ORGS || {}, out = [], used = [];
    slugs.forEach(function(sl){
      var c = conds.filter(function(x){ return x.s === sl; })[0]; if(!c) return;
      used.push(c);
      [c.p].concat(c.a || []).forEach(function(r, i){
        if(!r || !/^https:\/\//.test(r.u || '')) return;
        out.push({cond: c, org: orgs[r.o] || {name: r.o, short: r.o, tone: '#475569'}, u: r.u, d: r.d || '', tier: i ? 'Alternative' : 'Best leaflet'});
      });
    });
    return {list: out, conds: used};
  }
  API.resourcesFor = resourcesFor;
  var panel = null;
  function giveBtn(){
    var b = el('<button type="button" class="pxa-btn pxa-give pxa-chrome" aria-haspopup="dialog" aria-expanded="false" aria-label="Give to patient: patient information leaflets to share by QR code or link"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4v-3"/></svg><span>Give to patient</span></button>');
    b.addEventListener('click', function(e){ e.stopPropagation(); togglePanel(b); });
    return b;
  }
  function togglePanel(btn){
    if(panel && panel.parentNode){ closePanel(); return; }
    panel = el('<div class="pxa-qr pxa-chrome" role="dialog" aria-label="Patient information to share">'+
      '<div class="pxa-qr-h"><b>Patient information to share</b><button type="button" class="pxa-x" aria-label="Close">×</button></div>'+
      '<div class="pxa-qr-body"><p class="pxa-qr-wait">Loading patient leaflets…</p></div></div>');
    panel.querySelector('.pxa-x').addEventListener('click', function(){ closePanel(); btn.focus(); });
    panel.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ closePanel(); btn.focus(); } });
    var host = btn.closest('.pxa-sntools, .pc-copybar, .pxa-sectools') || btn.parentNode;
    host.insertAdjacentElement('afterend', panel);
    panel._btn = btn; btn.setAttribute('aria-expanded', 'true');
    panel.querySelector('.pxa-x').focus();
    var me = panel;
    loadLeaflets().then(function(){ if(panel === me) fillPanel(me); });
  }
  function fillPanel(pn){
    var R = resourcesFor(leafletSlugs()), body = pn.querySelector('.pxa-qr-body');
    if(!R.list.length){ body.innerHTML = '<p class="pxa-qr-wait">Patient leaflets could not be loaded. Open the Patient Leaflets page instead.</p>'; }
    else {
      var multi = R.conds.length > 1, tid = 'pxaLf' + (++uid);
      body.innerHTML =
        '<div class="pxa-lf-tabs" role="tablist" aria-label="Choose a patient resource"></div>'+
        '<div class="pxa-qr-grid" role="tabpanel" id="'+tid+'"><div class="pxa-qr-code"></div>'+
        '<div class="pxa-qr-side"><div class="pxa-lf-tier"></div><div class="pxa-lf-title"><span class="pxa-lf-badge"></span><b class="pxa-lf-name"></b></div>'+
        '<p class="pxa-lf-d"></p><a class="pxa-qr-url" target="_blank" rel="noopener noreferrer"></a>'+
        '<div class="pxa-qr-btns"><button type="button" class="pxa-btn pxa-lf-copy">'+COPY_SVG+'<span>Copy link</span></button>'+
        (navigator.share ? '<button type="button" class="pxa-btn pxa-lf-share">Share</button>' : '')+'</div></div></div>'+
        '<div class="pxa-lf-extra"></div>'+
        '<p class="pxa-qr-note"></p>'+
        '<a class="pxa-lf-more" target="_blank" rel="noopener">More leaflets for this condition →</a>'+
        '<p class="pxa-qr-priv">The QR code is made on this device. Nothing is sent from this site — no texts or emails; "Share" uses your own device’s share options.</p>';
      var tabs = body.querySelector('.pxa-lf-tabs');
      R.list.forEach(function(r, i){
        var t = el('<button type="button" role="tab" class="pxa-lf-tab" aria-controls="'+tid+'"><span class="pxa-lf-dot" aria-hidden="true"></span><span></span></button>');
        t.querySelector('.pxa-lf-dot').style.background = r.org.tone;
        t.querySelector('span:last-child').textContent = r.org.short + (multi ? ' · ' + r.cond.n : '');
        t.setAttribute('aria-label', r.org.name + ' — ' + r.cond.n + (i ? '' : ' (best leaflet)'));
        t.addEventListener('click', function(){ select(i); });
        t.addEventListener('keydown', function(e){
          var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if(!k) return;
          e.preventDefault(); var j = (i + k + R.list.length) % R.list.length; select(j); tabs.children[j].focus();
        });
        tabs.appendChild(t);
      });
      var cur = 0;
      function select(i){
        cur = i; var r = R.list[i];
        Array.prototype.forEach.call(tabs.children, function(t, k){ t.setAttribute('aria-selected', String(k === i)); t.tabIndex = k === i ? 0 : -1; });
        body.querySelector('.pxa-lf-tier').textContent = r.tier + (i ? '' : ' · UK lead source for this topic');
        var bd = body.querySelector('.pxa-lf-badge'); bd.textContent = r.org.short; bd.style.background = r.org.tone;
        body.querySelector('.pxa-lf-name').textContent = r.org.name + ' — ' + r.cond.n;
        body.querySelector('.pxa-lf-d').textContent = r.d;
        var a = body.querySelector('.pxa-qr-url'); a.href = r.u; a.textContent = r.u.replace(/^https:\/\//, '');
        a.setAttribute('aria-label', 'Open ' + r.org.name + ' — ' + r.cond.n + ' (opens in a new tab)');
        var c = r.cond, ex = body.querySelector('.pxa-lf-extra');
        ex.innerHTML = c.t && c.t.length ? '<div class="pxa-lf-trans"><b>Translations:</b> <span></span></div>' : '';
        if(c.t && c.t.length) ex.querySelector('span').textContent = c.t.join(' · ');
        var more = body.querySelector('.pxa-lf-more'); more.href = (SITE_ROOT || '../../') + 'tools/leaflets.html#' + encodeURIComponent(c.s);
        more.setAttribute('aria-label', 'More leaflets for ' + c.n + ' on the Patient Leaflets page (opens in a new tab)');
        drawQR(r.u, body.querySelector('.pxa-qr-code'), r.org.name + ' — ' + c.n);
      }
      body.querySelector('.pxa-qr-note').textContent = LEAFLET_NOTE;
      body.querySelector('.pxa-lf-copy').setAttribute('aria-label', 'Copy the link to this patient leaflet');
      body.querySelector('.pxa-lf-copy').addEventListener('click', function(){ var u = R.list[cur].u; copyText(u).then(function(){ API.lastCopied = u; toast('Link copied'); }, function(){ toast('Could not copy — select the link instead'); }); });
      var sh = body.querySelector('.pxa-lf-share');
      if(sh){ sh.setAttribute('aria-label', 'Share the link to this patient leaflet using this device'); sh.addEventListener('click', function(){ var r = R.list[cur]; navigator.share({title: r.org.name + ' — ' + r.cond.n, url: r.u}).catch(function(){}); }); }
      select(0);
    }
  }
  function closePanel(){ if(panel){ if(panel._btn) panel._btn.setAttribute('aria-expanded', 'false'); panel.remove(); panel = null; } }
  function drawQR(text, host, label){
    var go = function(){
      try{
        var q = W.qrcode(0, 'M'); q.addData(text); q.make();
        host.innerHTML = q.createSvgTag({cellSize: 5, margin: 3, scalable: true});
        var svg = host.querySelector('svg'); svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', 'QR code: ' + (label || text));
        host.setAttribute('data-qr', text);
      }catch(e){ host.textContent = 'QR code unavailable — use Copy link.'; }
    };
    if(W.qrcode) return go();
    if(!ASSETS){ host.textContent = 'QR code unavailable — use Copy link.'; return; }
    loadScript(ASSETS + 'qrcode-generator.js').then(go, function(){ host.textContent = 'QR code unavailable — use Copy link.'; });
  }
  /* button placement: the first safety-net block's tools; else the first plan section's tools.
     Hidden altogether (never added) when no leaflet is mapped for this protocol. */
  function addGive(){
    return loadLeafletMap().then(function(){
      if(!leafletSlugs().length) return;
      var slot = D.querySelector('.pxa-sntools-b, .pc-copybar .pc-copy-btns') || D.querySelector('.pxa-sectools');
      if(slot) slot.appendChild(giveBtn());
    });
  }

  /* =========================================================
     2. "UPDATED" BADGE — from the NICE archive, else the review date
     ========================================================= */
  var MON = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  function within3m(d){
    var now = new Date(), lim = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 3, now.getUTCDate()));
    return d >= lim && d <= now;
  }
  function parseISO(s){ var m = String(s||'').match(/^(\d{4})-(\d{2})(?:-(\d{2}))?$/); return m ? new Date(Date.UTC(+m[1], +m[2]-1, m[3] ? +m[3] : 1)) : null; }
  function parseMonYear(s){
    var m = String(s||'').match(/(?:(\d{1,2})\s+)?(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+(\d{4})/i);
    if(!m) return null;
    var mi = MON.map(function(x){ return x.toLowerCase(); }).indexOf(m[2].slice(0,3).toLowerCase());
    return new Date(Date.UTC(+m[3], mi, m[1] ? +m[1] : 1));
  }
  function fmtMon(d){ return MON[d.getUTCMonth()] + ' ' + d.getUTCFullYear(); }
  function archiveAnchor(it){ return 'nice-' + String(it.code||'').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '-' + it.date; }
  API.archiveAnchor = archiveAnchor;
  function reviewedDate(){
    var prov = D.getElementById('rgpProvStrip');
    if(prov){
      var t = prov.textContent || '';
      var m = t.match(/Last reviewed\s*([^\n]+)/i) || t.match(/LAST REVIEWED\s*\n?\s*([^\n]+)/);
      var d = m && parseMonYear(m[1]); if(d) return d;
    }
    var data = (W.MG && W.MG._data) || {};
    return parseMonYear(data.reviewed);
  }
  function addBadge(){
    var stem = D.querySelector('.mg-stem'); if(!stem || stem.querySelector('.pxa-upd')) return;
    var anchor = stem.querySelector('.mg-stem-title') || stem.querySelector('.mg-stem-name');
    if(!anchor) return;
    var path = pagePath();
    var ready = W.RGP_NICE_ARCHIVE ? Promise.resolve() : (ASSETS ? loadScript(ASSETS + 'updates-nice-archive.js').catch(function(){}) : Promise.resolve());
    ready.then(function(){
      var hit = null;
      ((W.RGP_NICE_ARCHIVE || {}).items || []).forEach(function(it){
        var d = parseISO(it.date);
        if(!d || !within3m(d)) return;
        if(!(it.site || []).some(function(s){ return s[1] === path; })) return;
        if(!hit || d > hit.d) hit = {it: it, d: d};
      });
      var b;
      if(hit){
        var href = (SITE_ROOT || '../../') + 'pages/updates.html#' + archiveAnchor(hit.it);
        b = el('<div class="pxa-upd pxa-chrome"><span class="pxa-upd-dot" aria-hidden="true"></span><span class="pxa-upd-t"></span> <a class="pxa-upd-a"></a></div>');
        b.querySelector('.pxa-upd-t').textContent = 'Updated ' + fmtMon(hit.d) + ' —';
        var a = b.querySelector('a'); a.href = href; a.textContent = 'what changed →';
        a.setAttribute('aria-label', 'What changed in ' + fmtMon(hit.d) + ': ' + (hit.it.code || '') + ' — ' + (hit.it.title || '') + ' (Updates archive)');
        a.title = (hit.it.code ? hit.it.code + ': ' : '') + (hit.it.summary || hit.it.title || '');
        b.setAttribute('data-src', 'archive:' + archiveAnchor(hit.it));
      } else {
        var rd = reviewedDate();
        if(!rd || !within3m(rd)) return;
        b = el('<div class="pxa-upd pxa-upd-rev pxa-chrome"><span class="pxa-upd-dot" aria-hidden="true"></span><span class="pxa-upd-t"></span></div>');
        b.querySelector('.pxa-upd-t').textContent = 'Reviewed ' + fmtMon(rd);
        b.setAttribute('data-src', 'review-box');
      }
      anchor.insertAdjacentElement('afterend', b);
    });
  }

  /* =========================================================
     3. SEARCH WITHIN THE PROTOCOL (Steps content only)
     ========================================================= */
  var S = {q:'', hits:[], recs:[], cur:-1, box:null};
  var SKIP_SEL = '.pxa-chrome, .px-chrome, .px-print-only, .px-screen-hide, .pa-prev, .pc-prev, .mg-chev, script, style, [aria-hidden="true"], .mg-snap, .pxa-drug-sum';
  function searchScope(){ return sections(); }
  function clearMarks(){
    S.recs.forEach(function(r){
      var first = r.parts[0]; if(!first || !first.parentNode) return;
      first.parentNode.insertBefore(r.orig, first);
      r.parts.forEach(function(p){ if(p.parentNode) p.parentNode.removeChild(p); });
    });
    S.recs = []; S.hits = []; S.cur = -1;
  }
  function runSearch(q){
    clearMarks(); S.q = q;
    var ql = q.toLowerCase();
    if(q.length >= 2){
      searchScope().forEach(function(sec){
        var w = D.createTreeWalker(sec, NodeFilter.SHOW_TEXT, {acceptNode: function(n){
          if(!n.data || n.data.toLowerCase().indexOf(ql) < 0) return NodeFilter.FILTER_REJECT;
          var p = n.parentNode; if(p && p.closest && p.closest(SKIP_SEL)) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }});
        var list = [], n; while((n = w.nextNode())) list.push(n);
        list.forEach(function(tn){
          var txt = tn.data, low = txt.toLowerCase(), i = 0, j, parts = [], frag = D.createDocumentFragment();
          while((j = low.indexOf(ql, i)) >= 0){
            if(j > i){ var a = D.createTextNode(txt.slice(i, j)); frag.appendChild(a); parts.push(a); }
            var m = D.createElement('mark'); m.className = 'pxa-hit'; m.textContent = txt.slice(j, j + q.length);
            frag.appendChild(m); parts.push(m); S.hits.push(m);
            i = j + q.length;
          }
          if(i < txt.length){ var b = D.createTextNode(txt.slice(i)); frag.appendChild(b); parts.push(b); }
          S.recs.push({orig: tn, parts: parts});
          tn.parentNode.replaceChild(frag, tn);
        });
      });
    }
    S.cur = S.hits.length ? 0 : -1;
    updateCount();
    if(S.cur >= 0) go(0);
  }
  function updateCount(){
    if(!S.box) return;
    var n = S.box.querySelector('.pxa-find-n');
    n.textContent = S.q.length < 2 ? '' : (S.hits.length ? (S.cur + 1) + ' of ' + S.hits.length : 'No matches');
    $$('.pxa-find-prev, .pxa-find-next', S.box).forEach(function(b){ b.disabled = S.hits.length < 2; });
  }
  function go(i){
    if(!S.hits.length) return;
    S.cur = (i + S.hits.length) % S.hits.length;
    S.hits.forEach(function(h, k){ h.classList.toggle('pxa-hit-cur', k === S.cur); });
    var h = S.hits[S.cur];
    reveal(h);
    scrollToNode(h, true);
    updateCount();
  }
  function findWidget(){
    var id = 'pxaFind' + (++uid);
    var box = el('<div class="pxa-find pxa-chrome" role="search" aria-label="Search this protocol">'+
      '<label class="pxa-find-l" for="'+id+'">Search this protocol</label>'+
      '<div class="pxa-find-row"><input type="search" id="'+id+'" class="pxa-find-i" placeholder="e.g. eGFR, 999, pregnancy" autocomplete="off" spellcheck="false" aria-label="Search this protocol (2 or more letters)">'+
      '<button type="button" class="pxa-find-x" aria-label="Clear search">×</button></div>'+
      '<div class="pxa-find-nav"><span class="pxa-find-n" aria-live="polite"></span>'+
      '<button type="button" class="pxa-find-prev" aria-label="Previous match" disabled>↑</button>'+
      '<button type="button" class="pxa-find-next" aria-label="Next match" disabled>↓</button></div></div>');
    var inp = box.querySelector('input'), t = null;
    inp.addEventListener('input', function(){ clearTimeout(t); t = setTimeout(function(){ runSearch(inp.value.trim()); }, 140); });
    inp.addEventListener('keydown', function(e){
      if(e.key === 'Enter'){ e.preventDefault(); clearTimeout(t); if(inp.value.trim() !== S.q) runSearch(inp.value.trim()); else go(S.cur + (e.shiftKey ? -1 : 1)); }
      if(e.key === 'Escape'){ e.preventDefault(); clearSearch(); }
    });
    box.querySelector('.pxa-find-x').addEventListener('click', function(){ clearSearch(); inp.focus(); });
    box.querySelector('.pxa-find-prev').addEventListener('click', function(){ go(S.cur - 1); });
    box.querySelector('.pxa-find-next').addEventListener('click', function(){ go(S.cur + 1); });
    S.box = box;
    return box;
  }
  function clearSearch(){
    clearTimeout(S._t); if(S.box) S.box.querySelector('input').value = '';
    clearMarks(); S.q = ''; updateCount();
    if(sheet && sheet.classList.contains('on') && D.activeElement && sheet.contains(D.activeElement)) closeSheet();
  }
  API.search = {run: runSearch, clear: clearSearch, state: S};

  /* phone (and any page without a rail): a sheet above the bottom bar, opened by 🔍 */
  var sheet = null, findBtn = null;
  function openSheet(){
    if(!sheet) return;
    if(S.box.parentNode !== sheet.querySelector('.pxa-sheet-find')) sheet.querySelector('.pxa-sheet-find').appendChild(S.box);
    sheet.classList.add('on'); sheet.hidden = false; if(findBtn) findBtn.setAttribute('aria-expanded', 'true');
    setTimeout(function(){ S.box.querySelector('input').focus(); }, 30);
  }
  function closeSheet(){
    if(!sheet) return; sheet.classList.remove('on'); sheet.hidden = true; if(findBtn) findBtn.setAttribute('aria-expanded', 'false');
    placeFind();
  }
  function railHost(){
    var rail = D.querySelector('.pa-rail');
    return rail && W.matchMedia('(min-width:901px)').matches ? rail : null;
  }
  function placeFind(){
    var rail = railHost();
    if(rail){
      var slot = rail.querySelector('.pxa-rail-find') || (function(){ var s = el('<div class="pxa-rail-find pxa-chrome"></div>'); rail.insertBefore(s, rail.firstChild); return s; })();
      if(S.box.parentNode !== slot) slot.appendChild(S.box);
      if(sheet && sheet.classList.contains('on')){ sheet.classList.remove('on'); sheet.hidden = true; }
    } else if(sheet && !sheet.classList.contains('on')){
      sheet.querySelector('.pxa-sheet-find').appendChild(S.box);
    }
    D.documentElement.classList.toggle('pxa-rail-mode', !!rail);
  }
  var FIND_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>';
  function addSearch(){
    findWidget();
    sheet = el('<div class="pxa-sheet pxa-chrome" hidden role="dialog" aria-label="Search this protocol"><div class="pxa-sheet-h"><b>Search</b><button type="button" class="pxa-x" aria-label="Close search">×</button></div><div class="pxa-sheet-find"></div></div>');
    sheet.querySelector('.pxa-x').addEventListener('click', function(){ clearSearch(); closeSheet(); });
    sheet.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ clearSearch(); closeSheet(); if(findBtn) findBtn.focus(); } });
    D.body.appendChild(sheet);

    /* the bottom bar (C / D) gets a 🔍 button; otherwise a small dock */
    var bar = D.querySelector('.pc-bar');
    findBtn = el('<button type="button" class="pc-b pxa-findbtn pxa-chrome" aria-label="Search this protocol" aria-haspopup="dialog" aria-expanded="false">' + FIND_SVG + '<span>Search</span></button>');
    findBtn.addEventListener('click', function(){ sheet.classList.contains('on') ? closeSheet() : openSheet(); });
    if(bar){
      var top = bar.querySelector('[data-a="top"]'); bar.insertBefore(findBtn, top || null);
      D.documentElement.classList.add('pxa-has-bar');
    } else {
      var dock = el('<div class="pxa-dock pxa-chrome"></div>'); dock.appendChild(findBtn); D.body.appendChild(dock);
      D.documentElement.classList.add('pxa-has-dock');
    }
    placeFind();
    var mq = W.matchMedia('(min-width:901px)');
    (mq.addEventListener ? mq.addEventListener('change', placeFind) : mq.addListener(placeFind));
  }

  /* =========================================================
     4. URGENCY — one token set, labelled badges (prototype pages)
     ========================================================= */
  var URG = [
    ['999', /(\b999\b|A&E|(?<!non-)emergenc|immediately|straight away)/i, '999 / A&E'],
    ['same-day', /same[- ]day|same day/i, 'Same day'],
    ['2ww', /(suspected cancer|\b2WW\b|\bNG12\b)/i, 'Suspected cancer'],
    ['urgent', /(\burgent\b|next day|≤ ?48 ?h|within (a|one) (week|working day)|expedited)/i, 'Urgent'],
    ['routine', /(\broutine\b|GP management|prompt \(non-emergency\))/i, 'Routine']
  ];
  var URG_SECTION = /^(refer|monitor|severe|safety|acute|follow|redflags?)$/i;
  function urgencyOf(t){ for(var i = 0; i < URG.length; i++) if(URG[i][1].test(t)) return URG[i]; return null; }
  API.urgencyOf = urgencyOf;
  function addUrgency(){
    sections().forEach(function(s){
      if(!URG_SECTION.test(s.id || '') && !/(refer|red flag|safety.?net|severe|escalat)/i.test(secTitle(s))) return;
      $$('.mg-card > h3, .mg-card > h4, .card > h3, .card > h4', s).forEach(function(h){
        if(inSkipped(h) || h.querySelector('.u-badge')) return;
        var u = urgencyOf(h.textContent); if(!u) return;
        var card = h.parentNode;
        card.classList.add('u-card', 'u-card-' + u[0]);
        var b = el('<span class="u-badge u-' + u[0] + ' pxa-chrome"></span>'); b.textContent = u[2];
        h.insertBefore(b, h.firstChild);
      });
    });
  }

  /* =========================================================
     6. COLLAPSIBLE DRUG BOXES — curated list, verbatim text
     ========================================================= */
  /* [display name, regex source, proposed BNF slug (UNVERIFIED — see notes), in Ready Prescriptions data] */
  var DRUGS = [
    ['Ramipril','ramipril','ramipril',0], ['Amlodipine','amlodipine','amlodipine',0], ['Indapamide','indapamide','indapamide',0],
    ['Spironolactone','spironolactone','spironolactone',1], ['Aspirin','aspirin','aspirin',0], ['Atorvastatin','atorvastatin','atorvastatin',0],
    ['Clopidogrel','clopidogrel','clopidogrel',0], ['Dexamethasone','dexamethasone','dexamethasone',1],
    ['Metformin','metformin','metformin-hydrochloride',0], ['Gliclazide','gliclazide','gliclazide',0],
    ['Empagliflozin','empagliflozin','empagliflozin',0], ['Dapagliflozin','dapagliflozin','dapagliflozin',0],
    ['Pioglitazone','pioglitazone','pioglitazone',0], ['Sitagliptin','sitagliptin','sitagliptin',0],
    ['Liraglutide','liraglutide','liraglutide',0], ['Semaglutide','semaglutide','semaglutide',0],
    ['Folic acid','folic acid','folic-acid',1], ['Prednisolone','prednisolone','prednisolone',1], ['Montelukast','montelukast','montelukast',0],
    ['Salbutamol','salbutamol','salbutamol',1], ['Ipratropium bromide','ipratropium(?: bromide)?','ipratropium-bromide',0],
    ['Magnesium sulfate','magnesium sulph?f?ate','magnesium-sulfate',0], ['Hydrocortisone','hydrocortisone','hydrocortisone',1],
    ['Adrenaline','adrenaline','adrenaline-epinephrine',0], ['Beclometasone','beclometasone(?: dipropionate)?','beclometasone-dipropionate',0],
    ['Budesonide','budesonide','budesonide',1], ['Naproxen','naproxen','naproxen',1], ['Ibuprofen','ibuprofen','ibuprofen',1],
    ['Codeine','codeine(?: phosphate)?','codeine-phosphate',1], ['Amitriptyline','amitriptyline','amitriptyline-hydrochloride',1],
    ['Lansoprazole','lansoprazole','lansoprazole',1], ['Omeprazole','omeprazole','omeprazole',1]
  ];
  /* a dose must FOLLOW the drug name closely: "ramipril 1.25–10 mg", "spironolactone 25 mg", "semaglutide up to 1 mg" */
  var DOSE = '(?:\\s+(?:MR|m/r|modified-release|hydrochloride|bromide|dipropionate))?\\s*(?:\\([^)]{0,24}\\)\\s*)?(?:(?:up to|about|initially|at)\\s+)?\\d+(?:\\.\\d+)?(?:\\s*[–-]\\s*\\d+(?:\\.\\d+)?)?\\s*(?:mg|micrograms?|mcg|g|units?|mL|ml)\\b';
  var DRUG_RE = DRUGS.map(function(d){ return {d: d, re: new RegExp('(^|[^A-Za-z-])(' + d[1] + ')' + DOSE, 'gi')}; });
  /* BNF slugs could not be verified from this environment (bnf.nice.org.uk unreachable, no search-index
     hits), so per the brief every link goes to the BNF search page. Flip BNF_SLUGS_VERIFIED once checked. */
  var BNF_SLUGS_VERIFIED = false;
  function bnfUrl(d){ return BNF_SLUGS_VERIFIED ? 'https://bnf.nice.org.uk/drugs/' + d[2] + '/' : 'https://bnf.nice.org.uk/search/?q=' + encodeURIComponent(d[0].toLowerCase()); }
  var CHECKS = [
    ['eGFR / renal', /\beGFR\b|\brenal\b|\bkidney|\bcreatinine\b|\bCKD\b/i],
    ['K⁺ / U&E', /K⁺|potassium|U&E|hyperkal/i],
    ['Interactions', /interact|never combine|do not double|with (?:an? )?(?:NSAID|PDE5|ACE|ARB)|alongside/i],
    ['Pregnancy', /pregnan|breastfeed|conception/i],
    ['Monitoring', /\bmonitor|\brecheck|\bre-check|\bcheck |\bbaseline|\bwithin \d|\brepeat/i],
    ['Caution', /caution|contraindicat|avoid|warning|MHRA|DKA|hypoglyc|sick-day|stop /i]
  ];
  var DRUG_SKIP = 'table, .say, .mg-say, h1, h2, h3, h4, h5, .mg-why-btn, .pa-urgent, .px-refs, .mg-quick, .mg-path, #sca, #quick, #pathway, .pxa-chrome, .px-chrome, .mg-snap, .mg-stem';
  function findDrugs(text){
    var found = [], doses = [];
    DRUG_RE.forEach(function(x){
      x.re.lastIndex = 0; var m;
      while((m = x.re.exec(text))){
        if(found.indexOf(x.d) < 0) found.push(x.d);
        doses.push({i: m.index + m[1].length, s: m[0].slice(m[1].length)});
      }
    });
    return {drugs: found, doses: doses};
  }
  API.findDrugs = findDrugs;
  function clauses(text){ return text.split(/(?<=[.;])\s+|\s+—\s+|\s+·\s+/).map(squash).filter(function(c){ return c.length > 6; }); }
  function drugToggle(box, open){
    box.setAttribute('data-open', open ? '1' : '0');
    var h = box.querySelector('.pxa-drug-h'); if(h) h.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  function addDrugBoxes(){
    var n = 0;
    sections().forEach(function(sec){
      if(isRefs(sec) || /^(quick|pathway|sca)$/.test(sec.id || '')) return;
      $$('li, p, dd, .sp-drug', secBody(sec)).forEach(function(e){
        if(e.closest(DRUG_SKIP) || e.querySelector('li, p, dd, ul, ol, table, .pxa-drug')) return;
        var text = squash(e.textContent);
        if(text.length < 8 || text.length > 900) return;
        var f = findDrugs(text);
        if(!f.drugs.length || f.drugs.length > 2) return;          /* uncertain → leave as plain text */
        buildBox(e, text, f); n++;
      });
    });
    return n;
  }
  function buildBox(e, text, f){
    var names = f.drugs.map(function(d){ return d[0]; }).join(' · ');
    var long = text.length > 240;
    var box = el('<div class="pxa-drug" data-open="0"></div>');
    var head = el('<button type="button" class="pxa-drug-h pxa-chrome" aria-expanded="false"><span class="pxa-drug-ic" aria-hidden="true">💊</span><span class="pxa-drug-n"></span><span class="pxa-drug-more-l">Check · BNF</span><span class="pxa-drug-chev" aria-hidden="true">▾</span></button>');
    head.querySelector('.pxa-drug-n').textContent = names;
    head.setAttribute('aria-label', names + ': show safety checks and BNF link');
    box.appendChild(head);
    if(long){
      /* collapsed: the dose sentence(s), copied verbatim; the full text shows when opened */
      var sents = text.split(/(?<=[.;])\s+/), pick = sents.filter(function(s){ return f.doses.some(function(d){ return s.indexOf(d.s.trim()) >= 0; }); });
      if(pick.length){
        var sum = el('<div class="pxa-drug-sum pxa-chrome" aria-hidden="true"></div>'); sum.textContent = pick.join(' … ');
        box.appendChild(sum); box.classList.add('pxa-long');
        head.querySelector('.pxa-drug-more-l').textContent = 'Full text · Check · BNF';
        head.setAttribute('aria-label', names + ': show the full text, safety checks and BNF link');
      }
    }
    var checks = [];
    clauses(text).forEach(function(c){
      for(var i = 0; i < CHECKS.length; i++){ if(CHECKS[i][1].test(c)){ checks.push([CHECKS[i][0], c]); break; } }
    });
    var more = el('<div class="pxa-drug-more pxa-chrome"><div class="pxa-check-h">Check</div><ul class="pxa-check"></ul><div class="pxa-bnf"></div></div>');
    var ul = more.querySelector('ul');
    if(checks.length) checks.slice(0, 6).forEach(function(c){ var li = el('<li><b></b> <span></span></li>'); li.querySelector('b').textContent = c[0]; li.querySelector('span').textContent = c[1]; ul.appendChild(li); });
    else ul.appendChild(el('<li class="pxa-check-none">No safety points stated in this line — check the BNF.</li>'));
    var bnf = more.querySelector('.pxa-bnf');
    f.drugs.forEach(function(d){
      var a = el('<a target="_blank" rel="noopener noreferrer"></a>'); a.href = bnfUrl(d); a.textContent = 'BNF: ' + d[0] + ' ↗';
      a.setAttribute('aria-label', 'Open ' + d[0] + ' in the BNF (opens in a new tab)'); bnf.appendChild(a);
    });
    head.addEventListener('click', function(){ drugToggle(box, box.getAttribute('data-open') !== '1'); });
    if(e.tagName === 'P' || e.tagName === 'DIV' && !e.classList.contains('sp-drug')){
      e.parentNode.insertBefore(box, e); e.classList.add('pxa-drug-body'); box.insertBefore(e, null);
    } else {
      var body = D.createElement('div'); body.className = 'pxa-drug-body';
      while(e.firstChild) body.appendChild(e.firstChild);
      box.appendChild(body); e.appendChild(box); e.classList.add('pxa-drug-host');
    }
    box.appendChild(more);
  }

  /* =========================================================
     7. RED FLAGS STEP — name the protocol's red-flag / emergency step "Red flags"
        At most one step. The original title stays visible as a subtitle and in print.
     ========================================================= */
  var RF_ALREADY = /^red[ -]?flags?\b/i;
  /* "severe" is deliberately not a start word ("Severe forms…" is disease severity, not red flags);
     it counts only through the section id "severe" (e.g. hypertension "Severe BP"). */
  var RF_START = /^(red[ -]flag|emergenc|urgent|same[- ]day|999|alarm|danger|limb threat|admit now|unstable)/i;
  var RF_MAX_STEP = 6;   /* the red-flag step sits early: steps 01–06 only */
  var RF_IDS = /^(severe|emergency|emergencies|urgent|redflags|red-flags|flags|danger|alarm)$/i;
  var RF_WORDS = /(red[ -]?flag|emergenc|severe|urgent|same[- ]day|\b999\b|alarm|danger)/i;
  var RF_NEVER = /^(quick|pathway|refer|referral|sca|loop|monitor|workup|confirm|diagnose|exam|treat|ladder|lifestyle|evidence|evidence-legacy|provenance|history|coverage)$/i;
  var RF_ACTION = /(\b999\b|same[- ]day|A&E|emergency|immediate|admit|urgent|today)/i;
  function bareTitle(s){
    var h = s.querySelector(':scope > .mg-sec-h h2'); if(!h) return '';
    var x = h.cloneNode(true); $$('.pxa-chrome, .px-chrome, .pa-prev, .pc-prev', x).forEach(function(n){ n.remove(); });
    return squash(x.textContent);
  }
  function decideRedFlags(){
    var secs = sections().filter(function(s){ return !isRefs(s) && !s.closest('.px-refs'); });
    var info = {renamed: false, n: '', title: '', nav: '', reason: ''};
    var already = secs.filter(function(s){ return RF_ALREADY.test(bareTitle(s)) || RF_ALREADY.test(secNav(s)); })[0];
    if(already){
      info.n = sectionNum(already); info.title = bareTitle(already); info.nav = secNav(already); info.el = already;
      info.reason = 'already labelled Red flags (' + (RF_ALREADY.test(bareTitle(already)) ? 'step title' : 'rail label') + ') — left as it is';
      return info;
    }
    var cands = secs.filter(function(s){
      if(RF_NEVER.test(s.id || '')) return false;
      var num = parseInt(s.getAttribute('data-px-orig-n') || sectionNum(s), 10); if(!(num <= RF_MAX_STEP)) return false;
      var t = bareTitle(s), n = secNav(s), first = t.split(/\s+[—–-]\s+|,\s+/)[0];
      /* an id match needs the keyword in the rail label or the title's first clause — never a passing mention */
      var hit = RF_START.test(t) || RF_START.test(n) || (RF_IDS.test(s.id || '') && RF_WORDS.test(n + ' ' + first));
      if(!hit) return false;
      var body = secBody(s).textContent || '';
      return RF_ACTION.test(body);
    });
    if(cands.length !== 1){
      info.reason = cands.length ? 'ambiguous: ' + cands.length + ' steps qualify (' + cands.map(function(s){ return sectionNum(s) + ' ' + (secNav(s) || bareTitle(s)); }).join('; ') + ') — none renamed' : 'no step clearly qualifies — none renamed';
      return info;
    }
    var s = cands[0], t = bareTitle(s), n = secNav(s);
    info.el = s; info.n = sectionNum(s); info.title = t; info.nav = n; info.renamed = true;
    info.reason = RF_START.test(t) ? 'step title starts with "' + t.match(RF_START)[0] + '"' : RF_START.test(n) ? 'rail label starts with "' + n.match(RF_START)[0] + '"' : 'section id "' + s.id + '" + rail label / first title clause says "' + (n + ' ' + t.split(/\s+[—–-]\s+|,\s+/)[0]).match(RF_WORDS)[0] + '"';
    info.reason += '; step holds urgent-action wording';
    return info;
  }
  function sectionNum(s){ var n = s.querySelector(':scope > .mg-sec-h .mg-sec-n'); return n ? squash(n.textContent) : ''; }
  function applyRedFlags(){
    var info = decideRedFlags(); API.redFlags = {renamed: info.renamed, n: info.n, title: info.title, nav: info.nav, reason: info.reason, id: info.el ? info.el.id : ''};
    /* Red flags button: the red-flags step; else a step whose title or rail label says "red flags";
       else the Refer step (owner decision, Oct 2026); else the original fallback */
    if(W.PX){
      var rfSecs = sections().filter(function(s){ return !isRefs(s) && !s.closest('.px-refs'); });
      var target = info.el
        || rfSecs.filter(function(s){ return /\bred[ -]?flags?\b/i.test(secNav(s) + ' ' + bareTitle(s)); })[0]
        || rfSecs.filter(function(s){ return /^refer/i.test(s.id || ''); })[0]
        || rfSecs.filter(function(s){ return /\brefer(ral)?s?\b/i.test(secNav(s) + ' ' + bareTitle(s)); })[0]
        || null;
      if(target) W.PX.redFlagTarget = function(){ return target; };
    }
    if(!info.renamed) return;
    var s = info.el, h2 = s.querySelector(':scope > .mg-sec-h h2');
    /* header: "Red flags" + the original title as a subtitle (the original nodes are kept, not copied) */
    var orig = D.createElement('span'); orig.className = 'pxa-rf-orig';
    while(h2.firstChild) orig.appendChild(h2.firstChild);
    var lab = el('<span class="pxa-rf-name pxa-chrome">Red flags</span>');
    h2.appendChild(lab); h2.appendChild(orig); h2.classList.add('pxa-rf-h');
    s.classList.add('pxa-rf-step');
    /* rail / phone chips */
    if(s.id) $$('a[href="#' + s.id + '"]').forEach(function(a){
      var l = a.querySelector('.pa-l'); if(!l) return;
      var short = (info.nav || info.title);
      l.innerHTML = ''; l.appendChild(D.createTextNode('Red flags'));
      var sm = D.createElement('small'); sm.className = 'pxa-rf-sub'; sm.textContent = short; l.appendChild(sm);
      a.setAttribute('aria-label', 'Red flags: ' + short);
    });
  }

  /* =========================================================
     START — after the layout (A/B/C/D) has run, if any
     ========================================================= */
  function start(){
    if(isPrintCopy() || !root() || API._started) return;
    if(!sections().length) return;
    API._started = true;
    D.documentElement.classList.add('pxa');
    var steps = [applyRedFlags, addUrgency, addDrugBoxes, addCopy, addGive, addSearch, addBadge];
    steps.forEach(function(fn){ try{ fn(); }catch(e){ if(W.console) console.warn('protocol add-on skipped:', fn.name, e); } });
  }
  API.start = start;
  function wait(){
    var n = 0;
    (function tick(){
      var r = root();
      var rendered = r && r.children.length && (D.getElementById('rgpProvStrip') || n > 40);
      if(rendered || n > 80){ if(r && r.children.length) start(); return; }
      n++; setTimeout(tick, 50);
    })();
  }
  function boot(){
    if(W.PROTOCOL_UI_NO_BOOT || isPrintCopy()) return;
    if(!root()) return;                                   /* not a protocol page: do nothing */
    if(W.PX && W.PX.ready) W.PX.ready(function(){ setTimeout(start, 0); });   /* after the layout */
    else wait();
  }
  if(D.readyState === 'loading') D.addEventListener('DOMContentLoaded', boot); else boot();
})();
