/* ============================================================
   alg-stepper.js — "Guided stepper" for every algorithm page (Upload 106; trial was Upload 104).
   Loaded on all tools/algorithms/<slug>.html pages by assets/alg-nav.js (before alg-ui.js),
   or by a page's own <script> tag (chest pain, Upload 104). Never runs twice, never on
   print copies, one-page summaries or inside the Snapshot iframe.
   - "Step 0 · Before you start": clinical content that sits before step 1 (inside the flow,
     or a scope box placed above the Steps | Snapshot row) is MOVED, never copied or
     reworded, into one card at the top of the timeline, open by default, no Done box,
     not counted in Progress. Built before alg-ui.js starts, so Copy to notes, search,
     the Red flags/Script jumps and section links treat it like any other step.
   - Steps that a page's markup accidentally nests inside an earlier step are moved back
     into the flow, so each step can open and close on its own.
   - Before printing, everything moved goes back to its original place, and it returns
     afterwards: Print / PDF is exactly as before.
   - One step open at a time; "Show all steps" switch near the top (remembered per viewer).
   - Decision boxes (.dbox) become choice chips. Picking one shows that row's own action
     text, word for word, highlighted. No urgency is worked out or added.
   - Search, Red flags, Script (alg-ui) and links to #anchors open the step they land in.
   - Desktop/tablet: a small "Search" button (the shortcut bar is phone-only).
   No text is changed or removed: only classes and ARIA states are set, nodes are moved as
   described, and controls are added as chrome (pxa-chrome: not searched, not copied to
   notes, hidden in print).
   ============================================================ */
/* Skip list: algorithm slugs that keep the page without the stepper (alg-ui still runs). */
var ALG_STEPPER_SKIP = [];
(function(){
  'use strict';
  var D = document, W = window, H = D.documentElement;
  if(W.__algStepper) return; W.__algStepper = true;                         /* never twice */
  var m = location.pathname.match(/\/tools\/algorithms\/([^\/?#]+?)\.html?$/);
  if(!m) return;
  var SLUG = m[1];
  if(ALG_STEPPER_SKIP.indexOf(SLUG) >= 0 || W.ALG_STEPPER_NO_BOOT) return;
  if(D.querySelector('meta[name="omelette-print-source"]') || /-print$/i.test(SLUG)) return;
  if(W.self !== W.top && /one-page|summaries/.test(location.pathname)) return;
  function $$(s, r){ return Array.prototype.slice.call((r || D).querySelectorAll(s)); }
  function esc(t){ return String(t).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function squash(t){ return String(t || '').replace(/\s+/g, ' ').trim(); }
  function store(k, v){ try{ if(v === undefined) return W.localStorage.getItem(k); W.localStorage.setItem(k, v); }catch(e){ return null; } }

  var SCRIPT = D.currentScript;
  var ASSETS = (function(){ var s = SCRIPT && SCRIPT.src; if(s) return s.replace(/[^\/]*$/, '');
    var x = D.querySelector('script[src*="assets/alg-nav.js"]'); return x ? x.src.replace(/[^\/]*$/, '') : '../../assets/'; })();
  var CSS_V = '?v=3';
  var cssLink = D.querySelector('link[href*="assets/alg-stepper.css"]');
  if(!cssLink){ cssLink = D.createElement('link'); cssLink.rel = 'stylesheet'; cssLink.href = ASSETS + 'alg-stepper.css' + CSS_V; D.head.appendChild(cssLink); }

  /* ---------- phase 1 (DOM ready, before alg-ui.js starts): Step 0 and un-nesting ---------- */
  var MOVED = [];            /* [node, placeholder comment] — put back for printing */
  function move(node, dest, before){
    var ph = D.createComment('alg-stepper: moved'); node.parentNode.insertBefore(ph, node);
    MOVED.push([node, ph]); dest.insertBefore(node, before || null);
  }
  var STEP = '.st-zero, .node[data-step]';     /* Step 0 + the page's steps, in page order */
  var NOT_CONTENT = '.tl-strip, .rgp-prov, .alg-progress, .view-toggle, #viewSummary, .pxa-chrome, .px-chrome, .connector, script, style, template, noscript';
  function pre(){
    var flow = D.getElementById('flow');
    if(!flow || !flow.classList.contains('alg-flow') || flow.querySelector('.st-zero')) return;
    var nodes = $$('.node[data-step]', flow); if(!nodes.length) return;
    /* steps nested inside an earlier step (unclosed markup): move them, with the connector
       before each, back into the flow straight after the outermost step */
    nodes.forEach(function(n){
      if(n.parentElement === flow) return;
      var top = n; while(top.parentElement && top.parentElement !== flow) top = top.parentElement;
      if(top.parentElement !== flow) return;
      var after = top; while(after.nextElementSibling && after.nextElementSibling.classList.contains('st-unnested')) after = after.nextElementSibling;
      var prev = n.previousElementSibling;
      if(prev && prev.classList.contains('connector')){ prev.classList.add('st-unnested'); move(prev, flow, after.nextSibling); after = prev; }
      n.classList.add('st-unnested'); move(n, flow, after.nextSibling);
    });
    var first = $$('.node[data-step]', flow)[0];
    /* what Step 0 holds: (a) scope boxes placed above the Steps | Snapshot row, (b) flow content before step 1 */
    var items = [];
    $$('.alg-foot').forEach(function(f){
      if(f.closest('#flow') || f.closest('.alg-header, .alg-topbar, .stem-banner')) return;
      if(f.compareDocumentPosition(flow) & 4) items.push(f);                  /* sits before the flow */
    });
    var c = flow.firstElementChild;
    while(c && c !== first){ if(!c.matches(NOT_CONTENT) && squash(c.textContent)) items.push(c); c = c.nextElementSibling; }
    if(!items.length) return;
    var zero = D.createElement('div');
    /* not a ".node": the pages' own progress scripts loop over .node and expect a Done box in each */
    zero.className = 'st-zero'; zero.setAttribute('data-st-step', '0'); zero.id = 'step-0';
    zero.innerHTML = '<div class="node-header"><div class="node-num">0</div><div class="node-head"><span class="node-tag">Start</span><h3>Before you start</h3></div></div><div class="node-body"></div>';
    var body = zero.lastChild;
    flow.insertBefore(zero, first);
    items.forEach(function(it){ move(it, body); });
    var conn = D.createElement('div'); conn.className = 'connector st-zero-conn'; flow.insertBefore(conn, first);
    H.classList.add('st-has-zero');
  }
  /* printing: everything moved goes back to where the page author put it, then returns */
  var away = false;
  W.addEventListener('beforeprint', function(){
    if(away) return; away = true;
    MOVED.slice().reverse().forEach(function(x){ x[0]._stBack = {p: x[0].parentNode, n: x[0].nextSibling}; x[1].parentNode.insertBefore(x[0], x[1].nextSibling); });
  });
  W.addEventListener('afterprint', function(){
    if(!away) return; away = false;
    MOVED.forEach(function(x){ var b = x[0]._stBack; if(b && b.p) b.p.insertBefore(x[0], b.n && b.n.parentNode === b.p ? b.n : null); });
  });
  if(D.readyState === 'loading') D.addEventListener('DOMContentLoaded', pre); else pre();
  W.AlgStepperMoved = function(){ return MOVED.map(function(x){ return x[0]; }); };

  var tries = 0;
  (function wait(){
    if(H.classList.contains('au') && W.AlgUI && D.querySelector('.pc-bar')) return init();
    if(++tries < 160) setTimeout(wait, 50);
  })();

  /* desktop search: a small "Search" button that opens alg-ui's own search sheet
     through the bar's Search button (the bar itself is hidden on desktop) */
  function addFind(host, before){
    var src = D.querySelector('.pc-bar [data-a="find"]'); if(!host || !src || D.querySelector('.st-find')) return;
    var b = D.createElement('button'); b.type = 'button'; b.className = 'st-find pxa-chrome';
    b.setAttribute('aria-haspopup', 'dialog'); b.setAttribute('aria-expanded', 'false');
    b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg><span>Search</span>';
    host.insertBefore(b, before || null);
    var watched = false;
    b.addEventListener('click', function(){
      src.click();
      var sheet = D.querySelector('.pxa-sheet');
      if(sheet && !watched){ watched = true;
        new MutationObserver(function(){
          var open = !sheet.hidden; b.setAttribute('aria-expanded', open ? 'true' : 'false');
          if(!open && !src.getClientRects().length) setTimeout(function(){ var x = D.activeElement; if(!x || x === D.body || sheet.contains(x)) b.focus(); }, 0);
        }).observe(sheet, {attributes: true, attributeFilter: ['hidden']});
        b.setAttribute('aria-expanded', sheet.hidden ? 'false' : 'true');
      }
    });
  }

  function init(){
    if(H.classList.contains('st')) return;
    var flow = D.getElementById('flow'); if(!flow) return;
    pre();                                                                   /* no-op when already built */
    if(!flow.querySelector('.node[data-step]')) return;
    var nodes = $$(STEP, flow);
    H.classList.add('st');
    /* this stylesheet after alg-ui.css, whichever was loaded first */
    var auCss = D.querySelector('link[href*="assets/alg-ui.css"]');
    if(auCss && cssLink && (auCss.compareDocumentPosition(cssLink) & 2)) auCss.parentNode.insertBefore(cssLink, auCss.nextSibling);
    var zero = flow.querySelector('.st-zero');
    /* alg-ui puts "References & sources" above the first .alg-foot; on pages whose first .alg-foot
       is a scope box (now in Step 0) that is at the top, so put it above the closing footer instead */
    var refs = D.getElementById('au-refs');
    if(refs && (flow.contains(refs) || (refs.compareDocumentPosition(flow) & 4))){
      var feet = $$('.alg-foot').filter(function(f){ return !flow.contains(f) && (flow.compareDocumentPosition(f) & 4); });
      if(feet.length) feet[feet.length - 1].parentNode.insertBefore(refs, feet[feet.length - 1]); else flow.parentNode.insertBefore(refs, flow.nextSibling);
    }
    function title(n){
      var h = n.querySelector('.node-head h3, h3'); if(!h) return '';
      var o = h.querySelector('.pxa-rf-name'); if(o) return squash(o.textContent);
      var x = h.cloneNode(true); $$('.pxa-chrome, .px-chrome', x).forEach(function(c){ c.remove(); });
      return squash(x.textContent);
    }
    function stickyTop(){
      var h = 0;
      $$('.alg-topbar, .alg-header, .page-header').forEach(function(x){
        var cs = getComputedStyle(x); if(cs.position !== 'sticky' && cs.position !== 'fixed') return;
        var r = x.getBoundingClientRect(); if(r.top <= 1 && r.bottom > h) h = r.bottom;
      });
      return h + 14;
    }
    function scrollToEl(el){ W.scrollTo({top: Math.max(0, el.getBoundingClientRect().top + W.pageYOffset - stickyTop()), behavior: 'auto'}); }

    /* ---- one step open at a time ---- */
    var cur = null;
    function isAll(){ return H.classList.contains('st-all'); }
    function sync(){
      nodes.forEach(function(n, i){
        var on = n === cur;
        n.classList.toggle('st-cur', on);
        n.classList.toggle('st-next', !!cur && nodes[i - 1] === cur);
        var t = n.querySelector('.st-tog');
        if(t){ var open = on || isAll(); t.setAttribute('aria-expanded', open ? 'true' : 'false');
          t.querySelector('.st-tog-l').textContent = on ? 'Close' : 'Open step'; }
      });
    }
    function setCur(n, scroll, keep){
      /* keep: the header the user clicked stays where it was on screen, so closing a
         longer step above it never pushes it off the top of the page */
      var y0 = keep ? keep.getBoundingClientRect().top : 0;
      cur = n; sync();
      if(scroll && n){ scrollToEl(n); return; }
      if(keep){
        var y1 = keep.getBoundingClientRect().top;
        if(Math.abs(y1 - y0) > 1) W.scrollBy(0, y1 - y0);
        if(keep.getBoundingClientRect().top < stickyTop() - 14) scrollToEl(keep);
      }
    }

    nodes.forEach(function(n, i){
      var hdr = n.firstElementChild, body = n.querySelector('.node-body');
      if(!hdr || !body || hdr === body) return;
      var no = n.getAttribute('data-step') || n.getAttribute('data-st-step');
      if(!body.id) body.id = 'st-step-' + (no || i);
      var tog = D.createElement('button');
      tog.type = 'button'; tog.className = 'st-tog pxa-chrome';
      tog.setAttribute('aria-controls', body.id);
      tog.setAttribute('aria-label', 'Step ' + no + ': ' + title(n));
      tog.innerHTML = '<span class="st-tog-l">Open step</span><span class="st-chev" aria-hidden="true">▾</span>';
      var tk = hdr.querySelector(':scope > .node-tick'); hdr.insertBefore(tog, tk || null);
      tog.addEventListener('click', function(e){ e.stopPropagation(); setCur(cur === n ? null : n, false, n); });
      hdr.addEventListener('click', function(e){
        if(e.target.closest('.node-tick, a, button, input, label')) return;
        if(cur !== n) setCur(n, false, n);
      });
      var nx = nodes[i + 1];
      if(nx){
        var box = D.createElement('div'); box.className = 'st-next-row pxa-chrome';
        box.innerHTML = '<button type="button" class="st-next-b"><span><small>Next · step ' + esc(nx.getAttribute('data-step') || nx.getAttribute('data-st-step')) + '</small>' + esc(title(nx)) + '</span><span aria-hidden="true">→</span></button>';
        box.firstChild.addEventListener('click', function(){ setCur(nx, true); var t = nx.querySelector('.st-tog'); if(t) t.focus({preventScroll: true}); });
        n.appendChild(box);
      }
    });
    /* Step 0: Copy to notes, in the same plain-text format alg-ui.js uses for steps */
    function special(n, out, indent, inl){
      if(n.matches('.kv')){
        var kids = Array.prototype.filter.call(n.children, function(c){ return !c.matches('.pxa-chrome, .px-chrome'); });
        for(var i = 0; i < kids.length; i += 2){ var a = inl(kids[i]), b = kids[i+1] ? inl(kids[i+1]) : ''; if(a || b) out.push(indent + '- ' + a + (b ? ': ' + b : '')); }
        return true;
      }
      if(n.matches('.rftile, .lstile, .dbox-r, .rung, .b-card')){
        var parts;
        if(n.matches('.rftile, .lstile')){
          var c = n.cloneNode(true), lab = c.querySelector(':scope > b');
          var l = lab ? inl(lab) : ''; if(lab) lab.remove();
          parts = [l, inl(c)];
        } else parts = Array.prototype.map.call(n.children.length ? n.childNodes : [n], function(x){ return x.nodeType === 1 || x.nodeType === 3 ? inl(x) : ''; });
        parts = parts.filter(Boolean);
        if(parts.length) out.push(indent + '- ' + parts[0] + (parts.length > 1 ? ': ' + parts.slice(1).join(' — ') : ''));
        return true;
      }
      if(n.matches('.dbox-h, .b-cond-head')){ var h = inl(n); if(h){ out.push(''); out.push(indent + h.toUpperCase()); } return true; }
      return false;
    }
    function zeroText(){ return W.RGPUI.notesFrom([zero.querySelector('.node-body')], {head: 'STEP 0: BEFORE YOU START', drop: '.why-row, .why-drawer, .node-tick, .node-tag, .connector', special: special}); }
    if(zero && W.RGPUI && W.RGPUI.copyBtn && !zero.querySelector('.au-steptools')){
      var tools = D.createElement('div'); tools.className = 'au-steptools pxa-chrome';
      tools.appendChild(W.RGPUI.copyBtn('Copy to notes', 'Copy step 0, Before you start, to the clinical notes as plain text', zeroText, 'Copied — step 0 as plain text'));
      var zb = zero.querySelector('.node-body'); zb.insertBefore(tools, zb.firstChild);
    }
    var first = zero || null;     /* Step 0 is open by default; otherwise the first step not yet ticked Done */
    if(!first) nodes.some(function(n){ var cb = n.querySelector('.node-tick input'); if(!cb || !cb.checked){ first = n; return true; } return false; });
    setCur(first || nodes[0], false);

    /* ---- "Show all steps": an obvious switch right under the Steps | Snapshot row ---- */
    var bar = D.createElement('div'); bar.className = 'st-mode pxa-chrome';
    bar.innerHTML = '<span class="st-mode-t"><b>One step at a time.</b> <span class="st-mode-s">Open any step, or show them all.</span></span>' +
      '<span class="st-mode-btns"></span>' +
      '<button type="button" class="st-switch" role="switch" aria-checked="false"><span class="st-sw-track" aria-hidden="true"><span class="st-sw-knob"></span></span><span>Show all steps</span></button>';
    var prog = D.querySelector('.alg-progress');
    if(prog && prog.parentNode) prog.parentNode.insertBefore(bar, prog.nextSibling); else flow.parentNode.insertBefore(bar, flow);
    var sw = bar.querySelector('.st-switch');
    function setAll(on, save){
      H.classList.toggle('st-all', on); sw.setAttribute('aria-checked', on ? 'true' : 'false');
      bar.querySelector('.st-mode-t').innerHTML = on ? '<b>All steps shown.</b> <span class="st-mode-s">Switch off to go back to one step at a time.</span>' : '<b>One step at a time.</b> <span class="st-mode-s">Open any step, or show them all.</span>';
      if(save) store('rgp.alg.stepper.all', on ? '1' : '0'); sync();
    }
    sw.addEventListener('click', function(){ setAll(!isAll(), true); });
    if(store('rgp.alg.stepper.all') === '1') setAll(true, false);
    addFind(bar.querySelector('.st-mode-btns'), null);

    /* ---- decision boxes as choice chips: the chosen row's own action, word for word ---- */
    $$('.dbox', flow).forEach(function(box){
      var rows = $$(':scope > .dbox-r', box);
      if(rows.length < 2 || !rows.every(function(r){ return r.firstElementChild && r.firstElementChild.tagName === 'B' && r.children.length >= 2; })) return;
      box.classList.add('st-chips');
      rows.forEach(function(r){
        var chip = r.firstElementChild;
        chip.nextElementSibling.classList.add('st-out');
        chip.setAttribute('role', 'button'); chip.setAttribute('tabindex', '0'); chip.setAttribute('aria-pressed', 'false');
        function pick(){
          var on = !r.classList.contains('st-sel');
          rows.forEach(function(o){ o.classList.remove('st-sel'); o.firstElementChild.setAttribute('aria-pressed', 'false'); });
          if(on){ r.classList.add('st-sel'); chip.setAttribute('aria-pressed', 'true'); }
        }
        chip.addEventListener('click', pick);
        chip.addEventListener('keydown', function(e){ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); pick(); } });
      });
      var hint = D.createElement('div'); hint.className = 'st-chip-hint pxa-chrome';
      hint.textContent = 'Choose the one that fits to see its action here. "Show all steps" shows every row.';
      box.appendChild(hint);
    });

    /* ---- whatever a jump lands on is opened ---- */
    function openFor(t){
      var n = t.matches && t.matches(STEP) ? t : (t.closest ? t.closest(STEP) : null);
      if(n && n !== cur && !isAll()){ setCur(n, false); return true; }
      return false;
    }
    /* Red flags / Script / search "next" flash their target (alg-ui) */
    new MutationObserver(function(ms){
      ms.forEach(function(m){
        var t = m.target;
        if(!t.classList || !t.classList.contains('px-flash') || /\bpx-flash\b/.test(m.oldValue || '')) return;
        if(openFor(t)) scrollToEl(t);
      });
    }).observe(flow, {subtree: true, attributes: true, attributeFilter: ['class'], attributeOldValue: true});
    /* the current search hit: open its step, and its decision row */
    new MutationObserver(function(){
      var c = flow.querySelector('mark.pxa-hit-cur'); if(!c) return;
      var n = c.closest(STEP);
      if(n && n !== cur && !isAll()){ setCur(n, false); c.scrollIntoView({block: 'center'}); }
    }).observe(flow, {subtree: true, childList: true, attributes: true, attributeFilter: ['class']});
    /* links to #anchors inside a step */
    function hash(){ var id = decodeURIComponent((location.hash || '').slice(1)); if(!id) return; var t = D.getElementById(id); if(t && flow.contains(t) && openFor(t)) scrollToEl(t); }
    W.addEventListener('hashchange', hash); hash();

    W.AlgStepper = {zeroText: zero ? zeroText : null, open: function(step){ var n = nodes.filter(function(x){ return (x.getAttribute('data-step') || x.getAttribute('data-st-step')) === String(step); })[0]; if(n) setCur(n, true); },
      showAll: function(on){ setAll(!!on, false); }};
  }
})();
