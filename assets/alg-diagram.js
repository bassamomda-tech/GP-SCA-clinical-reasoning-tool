/* Reasoning GP — Steps / Diagram view toggle (shared).
   Looks for .vt-btn buttons; persists the choice per-pathway.
   No-op on pages that have no toggle. */
(function () {
  var btns = document.querySelectorAll('.vt-btn');
  if (!btns.length) return;
  var file = (location.pathname.split('/').pop() || 'alg').replace(/\.html?$/, '');
  var KEY = 'rgp.alg.view.v2.' + file;

  function setView(v, scroll) {
    document.body.classList.toggle('diagram-mode', v === 'diagram');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-selected', String(btns[i].dataset.view === v));
    }
    try { localStorage.setItem(KEY, v); } catch (e) {}
    if (scroll) window.scrollTo(0, 0);
  }

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () { setView(this.dataset.view, true); });
  }

  var saved = 'steps';
  try { saved = localStorage.getItem(KEY) || 'steps'; } catch (e) {}
  setView(saved, false);
})();


/* RGP dark-header injector (shared): same dark header bar on every pathway. */
(function(){
  if (document.querySelector('.alg-header')) return;
  var sb = document.querySelector('.stem-banner'); if (!sb) return;
  var ic = sb.querySelector('.sb-icon');
  var icon = ic ? ic.textContent.trim() : '';
  var b = sb.querySelector('b');
  // Prefer the page's own clean title ("Hypertension") over the stem sentence
  // ("New presentation of high blood pressure"), which reads badly in the header.
  var t = (document.title || '').split(/[·|\u2013]/)[0].replace(/\s*algorithm\s*$/i, '').trim();
  if (!t || /reasoning gp/i.test(t)) t = b ? b.textContent.split(/\s+[\u2014\u2013-]\s+/)[0].trim() : '';
  var title = t;
  var chips = [];
  var foot = document.querySelector('.alg-foot');
  if (foot) {
    var src = (foot.textContent.split(/Based on:/i)[1] || '');
    var re = /(NICE\s+(?:NG|CG)\s*\d+|SIGN\s*\d+|\bCKS\b)/gi, m;
    while ((m = re.exec(src)) && chips.length < 3) { var t = m[1].replace(/\s+/g,' ').trim(); if (chips.indexOf(t) < 0) chips.push(t); }
  }
  if (!chips.length) chips.push('RCGP SCA');
  chips.push('10-min consult');
  var h = document.createElement('div');
  h.className = 'alg-header';
  h.innerHTML = '<h1>' + icon + ' ' + title + '</h1>'
    + '<p>RCGP SCA Algorithm \u2014 UK Primary Care</p>'
    + '<div class="alg-meta">' + chips.map(function(c){ return '<span>' + c + '</span>'; }).join('') + '</div>';
  sb.parentNode.insertBefore(h, sb);
})();


/* RGP flat-node wrapper (shared): older templates place .node-num/.node-head/.node-tick
   as direct children of .node; wrap them in a .node-header so the canonical flex-row
   layout applies uniformly. Skips pages that already have a .node-header. */
(function(){
  var nodes = document.querySelectorAll('.alg-flow .node[data-step]');
  for (var i=0;i<nodes.length;i++){
    var node=nodes[i];
    if (node.querySelector(':scope > .node-header')) continue;
    var head=node.querySelector(':scope > .node-head'); if(!head) continue;
    var num=node.querySelector(':scope > .node-num');
    var tick=node.querySelector(':scope > .node-tick');
    var hdr=document.createElement('div'); hdr.className='node-header';
    node.insertBefore(hdr, num||head);
    if(num) hdr.appendChild(num);
    hdr.appendChild(head);
    if(tick) hdr.appendChild(tick);
  }
})();


/* RGP why-drawer relocation (shared): the hypertension-generation template nests
   the .why-drawer INSIDE .why-row, but its own toggle script looks for it as
   .why-row's next sibling — so "Why?" never opened and the explanation text was
   unreachable. Move the drawer to where the page script expects it. Idempotent;
   pages whose drawers are already outside the row (ankle) are untouched. */
(function(){
  document.querySelectorAll('.alg-flow .why-row > .why-drawer').forEach(function(d){
    var row = d.parentElement;
    row.parentNode.insertBefore(d, row.nextSibling);
  });
})();


/* RGP review stamp (shared): appended after the July 2026 full-library audit —
   every algorithm's footer citations were verified. Idempotent. */
(function(){
  var f = document.querySelector('.alg-foot');
  if(!f || f.querySelector('.rgp-reviewed')) return;
  var d = document.createElement('div');
  d.className = 'rgp-reviewed';
  d.style.cssText = 'margin-top:8px;font-size:12px;color:#6b7280';
  d.innerHTML = '<strong style="color:#0f766e">Reviewed: July 2026</strong> · citations verified against current NICE / UK guidance';
  f.appendChild(d);
})();


/* RGP reasoning mode (shared): a toggle that reveals ALL
   the per-step "Why?" reasoning drawers at once, so a learner sees the clinical
   reasoning without hunting for each button. Persisted site-wide in localStorage.
   Forces drawers open purely via a body.rgp-teach CSS rule (!important) so it is
   independent of each page-generation's own toggle wiring — turning it OFF simply
   drops the class and the page's native click-to-reveal behaviour resumes intact.
   Idempotent; only runs on pathway pages that actually have .why-drawer blocks. */
(function(){
  var flow = document.querySelector('.alg-flow');
  if(!flow) return;
  var drawers = document.querySelectorAll('.alg-flow .why-drawer');
  if(!drawers.length) return;                       // diagram-only / no reasoning => skip
  if(document.getElementById('rgp-teach-css')) return;

  var KEY = 'rgp-teach-mode';
  var st = document.createElement('style');
  st.id = 'rgp-teach-css';
  st.textContent =
    'body.rgp-teach .alg-flow .why-drawer{display:block !important;}' +
    'body.rgp-teach .alg-flow .why-btn{color:var(--text);}' +
    '.rgp-teach-toggle{display:inline-flex;align-items:center;gap:8px;cursor:pointer;' +
      'font:600 12.5px/1 system-ui,-apple-system,"Segoe UI",sans-serif;color:#0e5c58;' +
      'background:#eef6f4;border:1px solid #cfe5e0;border-radius:999px;padding:7px 12px;' +
      'user-select:none;transition:background .15s,border-color .15s;}' +
    '.rgp-teach-toggle:hover{background:#e2efec;border-color:#b6d8d1;}' +
    '.rgp-teach-toggle .tt-track{width:30px;height:17px;border-radius:999px;background:#c3d3cf;' +
      'position:relative;transition:background .18s;flex:0 0 auto;}' +
    '.rgp-teach-toggle .tt-knob{position:absolute;top:2px;left:2px;width:13px;height:13px;' +
      'border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:left .18s;}' +
    '.rgp-teach-toggle[aria-pressed="true"]{background:#0e5c58;border-color:#0e5c58;color:#fff;}' +
    '.rgp-teach-toggle[aria-pressed="true"] .tt-track{background:rgba(255,255,255,.45);}' +
    '.rgp-teach-toggle[aria-pressed="true"] .tt-knob{left:15px;}' +
    '.rgp-teach-wrap{display:flex;justify-content:flex-end;max-width:720px;margin:0 auto 10px;padding:0 24px;}';
  document.head.appendChild(st);

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'rgp-teach-toggle';
  btn.setAttribute('aria-pressed','false');
  btn.title = 'Reveal all the clinical-reasoning "Why?" panels — ideal when you are learning the pathway';
  btn.innerHTML = '<span aria-hidden="true">🎓</span><span class="tt-label">Reasoning mode</span>' +
                  '<span class="tt-track"><span class="tt-knob"></span></span>';

  // Place the toggle: prefer the dark .alg-header; else a wrapper just above the flow.
  var hdr = document.querySelector('.alg-header');
  if(hdr){ btn.style.marginLeft = 'auto'; hdr.appendChild(btn); }
  else {
    var wrap = document.createElement('div');
    wrap.className = 'rgp-teach-wrap';
    wrap.appendChild(btn);
    flow.parentNode.insertBefore(wrap, flow);
  }

  function apply(on){
    document.body.classList.toggle('rgp-teach', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.querySelector('.tt-label').textContent = on ? 'Reasoning mode: on' : 'Reasoning mode';
    // Keep each button's caret/aria in sync with what the learner sees.
    document.querySelectorAll('.alg-flow .why-btn').forEach(function(b){
      b.setAttribute('aria-expanded', on ? 'true' : 'false');
      var dr = b.nextElementSibling && b.nextElementSibling.classList && b.nextElementSibling.classList.contains('why-drawer')
             ? b.nextElementSibling
             : (b.parentElement && b.parentElement.nextElementSibling && b.parentElement.nextElementSibling.classList
                && b.parentElement.nextElementSibling.classList.contains('why-drawer')
                ? b.parentElement.nextElementSibling : null);
      if(dr) dr.classList.toggle('open', on);
    });
  }

  var saved = false;
  try { saved = localStorage.getItem(KEY) === '1'; } catch(e){}
  apply(saved);

  btn.addEventListener('click', function(){
    var on = btn.getAttribute('aria-pressed') !== 'true';
    apply(on);
    try { localStorage.setItem(KEY, on ? '1' : '0'); } catch(e){}
  });
})();


/* RGP why-drawer toggle repair (shared): the relocation IIFE above moves the
   .why-drawer to AFTER its .why-row, which breaks the ankle-generation's native
   inline handler (it does btn.nextElementSibling.classList — now null - and
   throws on every click, so click-to-reveal silently fails). This installs ONE
   canonical, timing-proof toggle: a capture-phase delegated listener that
   resolves the drawer for BOTH template generations and stopImmediatePropagation
   pre-empts the page's own (broken or working) per-button handler, so there is
   exactly one source of truth and no TypeError. Runs only on pathway pages. */
(function(){
  if(!document.querySelector('.alg-flow .why-drawer')) return;
  if(window.__rgpWhyToggle) return; window.__rgpWhyToggle = true;

  function resolveDrawer(btn){
    var n = btn.nextElementSibling;
    if(n && n.classList && n.classList.contains('why-drawer')) return n;      // drawer sits inside the row, after the button
    var p = btn.parentElement, pn = p && p.nextElementSibling;
    if(pn && pn.classList && pn.classList.contains('why-drawer')) return pn;  // drawer relocated to after .why-row (ankle) OR hypertension generation
    return null;
  }

  document.addEventListener('click', function(e){
    var t = e.target;
    var btn = (t.closest ? t.closest('.why-btn') : null);
    if(!btn) return;
    var dr = resolveDrawer(btn);
    if(!dr) return;                              // let anything unexpected fall through untouched
    e.stopImmediatePropagation();               // pre-empt the page's native (broken/duplicate) handler
    e.preventDefault();
    var open = dr.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }, true);                                      // capture phase = fires before the button's own listener
})();


