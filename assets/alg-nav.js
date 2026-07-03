/* ============================================
   Reasoning GP — Algorithm page integrated nav
   Injected into every standalone algorithm page under
   tools/algorithms/. Adds a slim top bar that ties the
   page back into the site (home · all algorithms) and a
   floating "back to launcher" control. Self-contained —
   no dependency on site.js or the app shell.
   ============================================ */
(function(){
  function build(){
    // Avoid double-inject
    if (document.querySelector('.alg-topbar')) return;

    // Derive the algorithm title
    var title =
      (document.querySelector('.stem-banner b') && document.querySelector('.stem-banner b').textContent.trim()) ||
      (document.title || '').replace(/·.*$/, '').replace(/—.*$/, '').trim() ||
      'Algorithm';

    // Hide any pre-existing standalone header (e.g. headache page)
    var oldHeader = document.querySelector('header.site-header');
    if (oldHeader) oldHeader.style.display = 'none';

    // CSS
    var css = document.createElement('style');
    css.textContent = [
      '.alg-topbar{position:sticky;top:0;z-index:200;display:flex;align-items:center;gap:14px;',
      '  padding:10px 18px;background:rgba(255,255,255,.92);backdrop-filter:blur(8px);',
      '  border-bottom:1px solid #e4e2db;font-family:"DM Sans",system-ui,sans-serif;}',
      '.alg-topbar a{text-decoration:none;color:inherit}',
      '.alg-tb-back{display:inline-flex;align-items:center;gap:7px;font-size:13px;font-weight:600;',
      '  color:#0e5c58;padding:6px 12px;border:1px solid #cfe6e3;border-radius:99px;background:#f0fdfa;',
      '  transition:all .15s ease;white-space:nowrap;flex-shrink:0;}',
      '.alg-tb-back:hover{background:#0e5c58;border-color:#0e5c58;color:#fff;}',
      '.alg-tb-crumb{display:flex;align-items:center;gap:7px;font-size:12.5px;color:#a8a29d;min-width:0;flex:1;}',
      '.alg-tb-crumb .home{font-weight:700;color:#6b6560;letter-spacing:.02em;text-transform:uppercase;font-size:11px;flex-shrink:0;}',
      '.alg-tb-crumb .home:hover{color:#0e5c58;}',
      '.alg-tb-crumb .sep{color:#d6d3cd;flex-shrink:0;}',
      '.alg-tb-crumb .now{color:#1c1917;font-weight:600;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}',
      '.alg-tb-crumb .seg{flex-shrink:0;}',
      '.alg-tb-crumb .seg:hover{color:#0e5c58;}',
      '@media(max-width:560px){.alg-tb-crumb .seg{display:none}.alg-tb-crumb .sep{display:none}}',
      '.alg-tb-print{margin-left:auto;display:inline-flex;align-items:center;gap:7px;font-family:inherit;',
      '  font-size:13px;font-weight:600;cursor:pointer;color:#b54c2b;padding:6px 13px;border:1px solid #e7c3b4;',
      '  border-radius:99px;background:#f7e3da;transition:all .15s ease;white-space:nowrap;flex-shrink:0;}',
      '.alg-tb-print:hover{background:#b54c2b;border-color:#b54c2b;color:#fff;}',
      '@media(max-width:560px){.alg-tb-print .lbl{display:none}}',
      '@media print{.alg-topbar{display:none !important}}',

      /* ============ PRINT: condense any algorithm to 1–2 pages ============ */
      '@media print{',
      '  @page{size:A4 portrait;margin:8mm 9mm;}',
      '  html,body{background:#fff !important;margin:0 !important;}',
      '  *{box-shadow:none !important;-webkit-print-color-adjust:exact;print-color-adjust:exact;}',
      '  .alg-topbar,.site-header,.sb-toggle,.sb-overlay,.alg-progress,.pbar,.pbar-fill,.reset,.pcount,',
      '  .node-tick,.why-btn,.why-drawer,.connector,.alg-foot,footer{display:none !important;}',
      /* hide the bare progress wrapper used on some pages */
      '  div:has(> .pbar){display:none !important;}',
      /* compact banner into a print masthead */
      '  .stem-banner{display:flex !important;align-items:center;gap:9px !important;padding:0 0 5px !important;',
      '    margin:0 0 7px !important;background:none !important;border:none !important;border-bottom:2px solid #0c4a47 !important;border-radius:0 !important;}',
      '  .stem-banner .sb-icon{font-size:20px !important;}',
      '  .stem-banner h1,.stem-banner b{font-size:15px !important;line-height:1.1 !important;}',
      '  .stem-banner small,.stem-banner p,.stem-banner span{font-size:8.5px !important;line-height:1.3 !important;}',
      /* two-column flow, keep each step whole */
      '  .alg-flow{display:block !important;column-count:2;column-gap:9px;}',
      '  .node{break-inside:avoid;-webkit-column-break-inside:avoid;page-break-inside:avoid;display:block !important;',
      '    margin:0 0 6px !important;border:1px solid #c9c4ba !important;border-left-width:3px !important;',
      '    border-radius:4px !important;overflow:hidden;opacity:1 !important;}',
      '  .node-num{width:15px !important;height:15px !important;min-width:15px !important;font-size:9px !important;line-height:15px !important;}',
      '  .node-head-row,.node-head{padding:3px 6px !important;}',
      '  .node-head h3{font-size:10px !important;line-height:1.18 !important;margin:0 !important;}',
      '  .node-tag{font-size:7px !important;padding:1px 4px !important;margin:0 0 1px !important;}',
      '  .node-body{padding:4px 6px !important;font-size:8.4px !important;line-height:1.3 !important;}',
      '  .node-intro{font-size:8px !important;margin:0 0 3px !important;}',
      '  .node-body p,.node-body div,.node-body li,.node-body td,.node-body th,.node-body b,.node-body span{font-size:8.4px !important;line-height:1.3 !important;}',
      '  table,.kv,.rfgrid,.rftile,.ladder,.rung,.lsgrid,.lstile,.bands,.b-cond{font-size:8px !important;}',
      '  .pill{font-size:6.8px !important;padding:0 4px !important;}',
      '  a{color:inherit !important;text-decoration:none !important;}',
      '  .node.done .node-head h3{text-decoration:none !important;}',
      '}'
    ].join('\n');
    document.head.appendChild(css);

    // Bar
    var bar = document.createElement('div');
    bar.className = 'alg-topbar';
    bar.innerHTML =
      '<a class="alg-tb-back" href="../algorithms.html">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>' +
        'All algorithms' +
      '</a>' +
      '<div class="alg-tb-crumb">' +
        '<a class="home" href="../../index.html">Reasoning GP</a>' +
        '<span class="sep">›</span>' +
        '<a class="seg" href="../algorithms.html">Algorithms</a>' +
        '<span class="sep">›</span>' +
        '<span class="now"></span>' +
      '</div>' +
      '<button class="alg-tb-print" type="button" aria-label="Print this algorithm">' +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>' +
        '<span class="lbl">Print / PDF</span>' +
      '</button>';
    bar.querySelector('.now').textContent = title;
    var printBtn = bar.querySelector('.alg-tb-print');
    if (printBtn) printBtn.addEventListener('click', function(){ window.print(); });
    document.body.insertBefore(bar, document.body.firstChild);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();

  /* ---- Review-currency stamp (rolling 12-month review) ---- */
  function reviewStamp(){
    var foot = document.querySelector('.alg-foot');
    if (!foot || document.querySelector('.alg-review')) return;
    fetch('../../assets/review-register.json').then(function(r){ return r.json(); }).then(function(reg){
      var isLab = /lab-results/.test(location.pathname);
      var col = (reg.collections||[]).filter(function(c){ return c.id === (isLab ? 'lab-pathways' : 'pathways'); })[0];
      if (!col) return;
      var winM = reg.reviewWindowMonths || 12;
      var amberM = reg.amberWithinMonths || 2;
      // device override
      var d = col.lastReviewed;
      try {
        var m = JSON.parse(localStorage.getItem('rgp.review.marks.v1')||'{}')['col:'+col.id];
        if (m) d = m;
      } catch(e){}
      var p = d.split('-'); var ageM = (new Date().getFullYear()-(+p[0]))*12 + (new Date().getMonth()-((+p[1])-1));
      var rem = winM - ageM;
      var next = nextYM(d, winM);
      var state = rem <= 0 ? 'red' : rem <= amberM ? 'amber' : 'green';
      var color = state==='red' ? '#c0392b' : state==='amber' ? '#c9921f' : '#1f8a5b';
      var bg = state==='red' ? '#fbe6e3' : state==='amber' ? '#fbf1d8' : '#eef7f1';
      var label = state==='red' ? 'Review overdue' : 'Reviewed';
      var s = document.createElement('div');
      s.className = 'alg-review';
      s.style.cssText = 'margin-top:10px;display:inline-flex;align-items:center;gap:8px;font:600 12px/1 "DM Sans",system-ui,sans-serif;padding:6px 12px;border-radius:99px;background:'+bg+';color:'+color+';border:1px solid '+color+'33;';
      s.innerHTML = '<span style="width:8px;height:8px;border-radius:50%;background:'+color+'"></span>'
        + label + ' ' + prettyYM(d) + ' · next review ' + prettyYM(next)
        + ' &nbsp;<a href="../governance.html" style="color:inherit;text-decoration:underline">review board</a>';
      foot.appendChild(s);
    }).catch(function(){});
  }
  function nextYM(ym, n){ var p=ym.split('-'); var y=+p[0], m=(+p[1]-1)+n; y+=Math.floor(m/12); m=((m%12)+12)%12; return y+'-'+String(m+1).padStart(2,'0'); }
  function prettyYM(ym){ var MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; var p=ym.split('-'); return MON[(+p[1])-1]+' '+p[0]; }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', reviewStamp);
  else reviewStamp();

  /* ---- Load the automatic CPD reading tracker (same /assets dir as this file) ---- */
  (function(){
    if (window.__rgpCpdLoad) return; window.__rgpCpdLoad = 1;
    var base = '', ss = document.getElementsByTagName('script');
    for (var i=0;i<ss.length;i++){ var m=(ss[i].src||'').match(/^(.*\/)(site|alg-nav)\.js(\?.*)?$/); if(m){ base=m[1]; break; } }
    var el = document.createElement('script'); el.src = base + 'cpd-tracker.js?v=1'; el.defer = true;
    document.head.appendChild(el);
    var cl = document.createElement('script'); cl.src = base + 'cite-links.js?v=1'; cl.defer = true;
    document.head.appendChild(cl);
  })();
})();
