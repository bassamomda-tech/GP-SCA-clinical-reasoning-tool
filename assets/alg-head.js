/* ============================================================
   alg-head.js — compact header card for every algorithm page (Upload 112, Oct 2026;
   owner chose design option A). Loaded by assets/alg-nav.js after the guided stepper and
   alg-ui.js, on tools/algorithms/<slug>.html only; never twice, never on print copies,
   one-page summaries or inside the Snapshot frame. Loads assets/alg-head.css itself.
   One white card: eyebrow line + Reasoning mode (corner) · title · subtitle (the title
   banner's own text) · chips (Reviewed · 10-min · Next review · "Review details", which
   opens the review strip unchanged) · toolkit links · the Reference-only line. Then ONE
   toolbar row (not sticky): Steps|Snapshot · progress · Search · Show all steps · Reset.
   Blocks are MOVED, never copied, reworded or removed; before printing they all go back
   to where the page author put them, so Print / PDF is unchanged.
   ============================================================ */
/* Skip list: algorithm slugs that keep the previous header (the stepper and alg-ui still run). */
var ALG_HEAD_SKIP = [];
(function(){
var AH_LAYOUT = function(api, p){
  var D = api.D;
  var card = api.el('<section class="ah-card ah-x" aria-label="About this algorithm"></section>');
  var chips = api.el('<div class="ah-chips"></div>');
  var next = api.el('<span class="ah-chip ah-next pxa-chrome" hidden></span>');
  var rbtn = api.el('<button type="button" class="ah-chip ah-rev-btn pxa-chrome"><span>Review details</span><span class="ah-chev" aria-hidden="true">▾</span></button>');
  var rpanel = api.el('<div class="ah-rev" id="ah-rev" role="region" aria-label="Review details"></div>');
  var tl = api.el('<div class="ah-tl"></div>');
  var bar = api.el('<div class="ah-bar ah-x" role="group" aria-label="Steps toolbar"></div>');
  chips.appendChild(next); chips.appendChild(rbtn);
  card.appendChild(chips); card.appendChild(rpanel); card.appendChild(tl);
  api.disclose(rbtn, rpanel, 'rev');
  var anchor = p.ph || p.hdr;          /* the card takes the header's place */
  anchor.parentNode.insertBefore(card, p.ph ? p.ph.nextSibling : p.hdr);
  card.parentNode.insertBefore(bar, card.nextSibling);
  return { place: function(p){
    api.put(p.hdr, card, chips);
    if(p.stem) api.put(p.stem, card, chips);
    if(p.meta) api.put(p.meta, chips, next);
    if(p.teach && p.teach.parentNode !== card) api.put(p.teach, card, card.firstChild);
    if(p.prov){ api.put(p.prov, rpanel);
      var nr = api.fact(p.prov, 'next review'); if(nr && next.textContent !== 'Next review ' + nr){ next.textContent = 'Next review ' + nr; next.hidden = false; } }
    rbtn.hidden = !p.prov;
    if(p.tl) api.put(p.tl, tl);
    tl.hidden = !p.tl;
    if(p.notice) api.put(p.notice, card);
    if(p.prog) api.put(p.prog, bar, bar.firstChild);
    if(p.mode) api.put(p.mode, bar);
  }};
};

/* ---- how it works ----
   Screen-only re-layout of the algorithm page intro. MOVES the page's own blocks
   (header, title banner, review strip, reference notice, Steps|Snapshot + progress row,
   stepper switch, toolkit strip) into a compact head; never copies, rewords or removes
   text. Before printing everything goes back where the page author put it (as the
   stepper does), and returns afterwards, so Print / PDF is unchanged.
   The layout function (AH_LAYOUT, defined per option) builds the empty skeleton once
   and says which slot each block goes into. */
(function(){
  'use strict';
  var D = document, W = window, H = D.documentElement;
  if(W.__algHead) return; W.__algHead = true;
  var m = location.pathname.match(/\/tools\/algorithms\/([^\/?#]+?)\.html?$/);
  if(!m || /-print$/i.test(m[1]) || D.querySelector('meta[name="omelette-print-source"]')) return;
  if(W.self !== W.top && /one-page|summaries/.test(location.pathname)) return;
  if(ALG_HEAD_SKIP.indexOf(m[1]) >= 0 || W.ALG_HEAD_NO_BOOT) return;
  var LAYOUT = AH_LAYOUT;
  /* the stylesheet, from the same folder as this script */
  var SCRIPT = D.currentScript;
  var ASSETS = (function(){ var s = SCRIPT && SCRIPT.src; if(s) return s.replace(/[^\/]*$/, '');
    var x = D.querySelector('script[src*="assets/alg-nav.js"]'); return x ? x.src.replace(/[^\/]*$/, '') : '../../assets/'; })();
  var cssLink = D.querySelector('link[href*="assets/alg-head.css"]');
  if(!cssLink){ cssLink = D.createElement('link'); cssLink.rel = 'stylesheet'; cssLink.href = ASSETS + 'alg-head.css?v=1'; D.head.appendChild(cssLink); }

  function $$(s, r){ return Array.prototype.slice.call((r || D).querySelectorAll(s)); }
  var MOVED = [];          /* [node, placeholder] */
  function put(node, slot, before){
    if(!node || !slot) return;
    if(node.parentNode === slot) return;            /* order is set when first placed */
    if(!node._ahPh){ var ph = D.createComment('alg-head: moved'); node.parentNode.insertBefore(ph, node); node._ahPh = ph; MOVED.push([node, ph]); }
    slot.insertBefore(node, before || null);
  }
  function parts(){
    var hdr = D.querySelector('.alg-header');
    return {
      hdr: hdr,
      h1: hdr && hdr.querySelector(':scope > h1'),
      eyebrow: hdr && hdr.querySelector(':scope > p'),
      meta: D.querySelector('.alg-header .alg-meta, .ah-x .alg-meta'),
      teach: D.querySelector('.rgp-teach-toggle'),
      stem: D.querySelector('.stem-banner'),
      prov: D.getElementById('rgpProvStrip'),
      notice: D.querySelector('.rgp-ref-notice.rgp-rn-clinical'),
      prog: D.querySelector('.alg-progress'),
      mode: D.querySelector('.st-mode'),
      tl: D.querySelector('.tl-strip'),
      ph: D.querySelector('.page-header')
    };
  }
  var api = {
    D: D, W: W, put: put, $$: $$,
    el: function(html){ var t = D.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; },
    /* a button that opens/closes a panel (keyboard: it is a real <button>) */
    disclose: function(btn, panel, key){
      panel.hidden = true; btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-controls', panel.id);
      function set(on){ panel.hidden = !on; btn.setAttribute('aria-expanded', on ? 'true' : 'false'); H.classList.toggle('ah-open-' + key, on); }
      btn.addEventListener('click', function(){ set(panel.hidden); });
      panel.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ set(false); btn.focus(); } });
      return set;
    },
    fact: function(prov, label){
      if(!prov) return '';
      var r = ''; $$('.pv-facts > div', prov).forEach(function(d){ var dt = d.querySelector('dt'), dd = d.querySelector('dd'); if(dt && dd && dt.textContent.trim().toLowerCase() === label) r = dd.textContent.trim(); });
      return r;
    }
  };

  var skel = null, away = false, busy = false;
  function place(){
    if(away || busy || !skel) return;
    busy = true;
    try{
      var P = parts();
      /* alg-ui writes the "Reviewed/Updated" badge late, into .alg-meta inside .alg-header;
         if .alg-meta has already moved, it lands after the h1: put it where it would have gone */
      var bd = P.hdr && P.hdr.querySelector(':scope > .pxa-upd');
      if(bd && P.meta && !P.hdr.contains(P.meta)) P.meta.insertBefore(bd, P.meta.firstChild);
      skel.place(P);
    }catch(e){ if(W.console) console.warn('alg-head', e); }
    busy = false;
  }
  function boot(){
    if(skel) return;
    H.classList.add('ah');
    if(cssLink && cssLink.parentNode === D.head && D.head.lastElementChild !== cssLink) D.head.appendChild(cssLink);   /* after the stepper's and alg-ui's styles */
    skel = LAYOUT(api, parts());
    place();
    /* blocks written late by other scripts (badge, review strip, notice, toolkit strip) */
    var q = false;
    new MutationObserver(function(){ if(q) return; q = true; requestAnimationFrame(function(){ q = false; place(); }); })
      .observe(D.body, {childList: true, subtree: true});
  }
  /* printing: everything moved goes back to the author's place, then returns */
  W.addEventListener('beforeprint', function(){
    if(away) return; away = true;
    MOVED.slice().reverse().forEach(function(x){ x[1].parentNode && x[1].parentNode.insertBefore(x[0], x[1].nextSibling); });
  });
  W.addEventListener('afterprint', function(){ if(!away) return; away = false; place(); });

  var tries = 0;
  (function wait(){
    if(H.classList.contains('st') && D.querySelector('.st-mode') && D.querySelector('.alg-header')) return boot();
    if(++tries < 200) setTimeout(wait, 40);
  })();
})();
})();
