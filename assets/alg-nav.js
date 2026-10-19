/* ============================================
   Reasoning GP — Algorithm page integrated nav
   Injected into every standalone algorithm page under
   tools/algorithms/. Adds a slim top bar that ties the
   page back into the site (home · all algorithms) and a
   floating "back to launcher" control. Self-contained —
   no dependency on site.js or the app shell.
   ============================================ */
(function(){
  /* Reading width (19 Oct 2026). Many older pathway pages cap their own width in inline CSS
     (body 860px, .alg-wrap 800px, .alg-flow 720px). The compact header card used to widen
     them, but it was switched off on 15 Oct 2026, so they fell back to a narrow column on
     desktop screens. One rule for every algorithm page: a 1140px reading column on screens
     wider than 900px. Screen only (print untouched); not inside frames (Snapshot, one-page). */
  (function(){
    var inFrame = false; try { inFrame = window.self !== window.top; } catch(e){ inFrame = true; }
    if (inFrame || !/\/tools\/algorithms\/[^\/]+\.html$/.test(location.pathname) || /-print\.html$/.test(location.pathname)) return;
    var st = document.createElement('style'); st.id = 'alg-width';
    st.textContent = '@media screen and (min-width:900px){'
      + 'html.alg-w body{max-width:1172px!important}'
      + 'html body .alg-wrap{max-width:1180px!important}'
      + 'html body .alg-flow,html body .alg-foot,html body .stem-banner,html body .alg-progress,html body .page-header,html body .au-refs{max-width:1140px!important;margin-left:auto!important;margin-right:auto!important}'
      + '}'
      /* Label/value rows (.kv): labels were set never to wrap, so in a narrow column a long label
         ("Tendon and pulley disorders") ran over its text. Labels now wrap inside their own column. */
      + '@media screen{'
      + '.kv>div{min-width:0}'
      + '.kv>div:nth-child(odd){white-space:normal!important;overflow-wrap:break-word;hyphens:auto}'
      + '}'
      + '@media screen and (min-width:761px){.kv{grid-template-columns:minmax(130px,24%) minmax(0,1fr)!important}}'
      /* Large monitors (1500px+): a wider column, in step with the protocols (1400px). */
      + '@media screen and (min-width:1500px){html.alg-w body{max-width:1392px!important}html body .alg-wrap{max-width:1400px!important}'
      + 'html body .alg-flow,html.au body .alg-flow,html body .alg-foot,html body .stem-banner,html body .alg-progress,html body .page-header,html body .au-refs{max-width:1360px!important}}';
    (document.head || document.documentElement).appendChild(st);
    function bodyCap(){
      // Only widen a body that the page itself capped; an uncapped body stays as it is.
      var mw = parseFloat(getComputedStyle(document.body).maxWidth);
      if (mw && mw < 1100) document.documentElement.classList.add('alg-w');
    }
    if (document.body) bodyCap(); else document.addEventListener('DOMContentLoaded', bodyCap);
  })();

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
    /* provenance.js shows the page's review date in the footer (same date as the top strip) — don't show a second, different one */
    if (window.RGP_PROV) return;
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
    var el = document.createElement('script'); el.src = base + 'cpd-tracker.js?v=2'; el.defer = true;
    document.head.appendChild(el);
    var cl = document.createElement('script'); cl.src = base + 'cite-links.js?v=2'; cl.defer = true;
    document.head.appendChild(cl);
    /* Guided stepper (Upload 106), then the algorithm UI (Upload 97), on tools/algorithms/<slug>.html
       only (not print copies, one-page summaries or the Snapshot frame). The stepper loads first so
       its "Step 0" exists before the algorithm UI starts. Each file also guards itself, so a page
       that links them directly (chest pain, Uploads 97 and 104) never runs them twice. */
    if (/\/tools\/algorithms\/[^\/]+\.html?$/i.test(location.pathname) && !/-print\.html?$/i.test(location.pathname)) {
      /* No flicker (Oct 2026): readers used to see the old layout for a moment before the stepper,
         the algorithm UI and the header card rearranged it. Hide the page until the header card is
         styled (or the card is switched off for this page), then fade in. Never longer than 2.5 s. */
      (function(){
        var R = document.documentElement, t0 = Date.now();
        if (R.classList.contains('alg-ready') || window.self !== window.top) { R.classList.add('alg-ready'); return; }
        if (!document.getElementById('alg-boot-css')) {
          var bs = document.createElement('style'); bs.id = 'alg-boot-css';
          bs.textContent = 'html.alg-boot body{opacity:0}html.alg-ready body{opacity:1;transition:opacity .18s ease-out}@media print{html.alg-boot body{opacity:1}}';
          document.head.appendChild(bs);
        }
        R.classList.add('alg-boot');
        var show = function(){ R.classList.remove('alg-boot'); R.classList.add('alg-ready'); };
        (function wait(){
          var card = document.querySelector('.ah-card');
          var styled = card && getComputedStyle(card).borderTopLeftRadius === '18px';
          var skipped = window.__algHead && !R.classList.contains('ah') && Date.now() - t0 > 700;
          /* Header card switched off (15 Oct 2026): show once the stepper and the algorithm UI have run */
          if (!styled && window.__algUi && window.__algStepper && document.readyState !== 'loading') { if (!wait.ui) wait.ui = Date.now(); if (Date.now() - wait.ui > 120) skipped = true; }
          if (styled || skipped || Date.now() - t0 > 2500) { requestAnimationFrame(show); return; }
          setTimeout(wait, 40);
        })();
      })();
      var ui = function(){
        if (window.__algUi || document.querySelector('script[src*="alg-ui.js"]')) return;
        var u = document.createElement('script'); u.src = base + 'alg-ui.js?v=3'; document.head.appendChild(u);
      };
      /* Compact header card (Upload 112): after the stepper and the algorithm UI; guards itself too */
      var head = function(){
        if (window.__algHead || document.querySelector('script[src*="alg-head.js"]')) return;
        var h = document.createElement('script'); h.src = base + 'alg-head.js?v=2'; document.head.appendChild(h);
      };
      /* Owner decision 15 Oct 2026: back to the previous header (dark title band); the compact header card (alg-head.js) is no longer loaded */
      var both = function(){ ui(); };
      if (window.__algStepper) both();
      else { var st = document.createElement('script'); st.src = base + 'alg-stepper.js?v=3'; st.onload = both; st.onerror = both; document.head.appendChild(st); }
    }
  })();
})();


/* ============================================================
   RGP content gate — pathway (alg-nav.js) and protocol (mgmt-nav.js)
   pages do NOT load site.js, so the site.js paywall gate never runs
   on them. This standalone gate mirrors the same policy using the
   auth cache site.js maintains in localStorage. Idempotent (one flag),
   appended identically to BOTH files. Live hosts only.
   ============================================================ */
(function(){
  if (window.__rgpContentGate) return; window.__rgpContentGate = true;
  var HOSTS = ['gpreasoning.uk','www.gpreasoning.uk','reasoninggp.com','www.reasoninggp.com'];
  if (HOSTS.indexOf(location.hostname) === -1) return;
  var path = location.pathname, base = (path.split('/').pop()||'').toLowerCase();
  var isAlg = /\/tools\/algorithms\//.test(path), isMgmt = /\/tools\/management\//.test(path);
  if (!isAlg && !isMgmt) return;
  if (/^(algorithms|management|lab-results)\.html$/.test(base)) return; // hub pages load site.js and are gated there
  var FREE = isAlg
    ? ['chest-pain.html','headache.html','abdominal-pain.html','back-pain.html','breathlessness.html']
    : ['hypertension.html','asthma.html','type-2-diabetes.html','gout.html','migraine.html'];
  function me(){
    try {
      if (!localStorage.getItem('rgp.auth.token.v1')) return null;
      var m = JSON.parse(localStorage.getItem('rgp.auth.me.v1')||'null');
      if (!m) return null;
      return m.user || m;
    } catch(e){ return null; }
  }
  function allowed(){
    var u = me();
    if (u && u.admin) return true;                          // admin account
    var t = (u && u.tier) || 'bronze';                      // signed-out == bronze free tier
    if (t === 'platinum' || t === 'silver') return true;    // clinic content covered
    if (u && t === 'gold') return false;                    // SCA-only plan
    return FREE.indexOf(base) !== -1;                       // bronze or signed-out — 5 free samples
  }
  function show(){
    if (allowed()) return;
    var u = me();
    var kind = isAlg ? 'pathway' : 'protocol';
    var el = document.createElement('div');
    el.setAttribute('style','position:fixed;inset:0;z-index:9000;display:grid;place-items:center;padding:20px;background:rgba(28,25,23,.55);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);font-family:\'DM Sans\',system-ui,sans-serif');
    el.innerHTML = '<div style="background:#f6f2e9;border:1px solid #d9d2c4;border-radius:18px;max-width:430px;width:100%;padding:26px 24px;box-shadow:0 30px 70px rgba(0,0,0,.35)">'
      + '<div style="font-size:26px;margin-bottom:8px">\ud83d\udd10</div>'
      + '<h2 style="font-family:\'Source Serif 4\',Georgia,serif;font-size:22px;font-weight:600;color:#1c1917;margin:0 0 6px">That\u2019s beyond the free samples</h2>'
      + '<p style="font-size:13.5px;line-height:1.55;color:#57534e;margin:0 0 14px">The 5 sample ' + kind + 's are free for everyone — no sign-up needed. Unlock the full library with Silver or Platinum, or sign in if you already have a plan.</p>'
      + '<a style="display:block;text-align:center;background:#0c4a47;color:#fff;font-weight:700;font-size:14px;padding:11px 14px;border-radius:10px;text-decoration:none;margin-bottom:8px" href="../../index.html#subscriptions">See the plans \u2192</a>'
      + '<a style="display:block;text-align:center;background:#fff;color:#0c4a47;border:1px solid #c9c1b2;font-weight:700;font-size:14px;padding:11px 14px;border-radius:10px;text-decoration:none" href="../../' + (isAlg?'tools/algorithms.html':'tools/management.html') + '">Back to the ' + kind + ' library</a>'
      + '</div>';
    document.documentElement.style.overflow = 'hidden';
    (document.body || document.documentElement).appendChild(el);
  }
  if (document.readyState !== 'loading') show(); else document.addEventListener('DOMContentLoaded', show);
})();

/* ── Canonical + paywall markup (SEO). Static tags win; this only fills gaps
   on the large generated pages (tools/algorithms/*, cases/*) that are not
   hand-edited. Canonical host: https://gpreasoning.uk (apex, no www). ── */
(function(){
  if (window.__rgpCanonical) return; window.__rgpCanonical = true;
  var HOST = 'https://gpreasoning.uk';
  // Keep in step with FREE_CASES in assets/site.js (both the gate near the top
  // and the canonical/paywall block at the foot). All three must agree.
  var FREE_CASES = ['chest-pain.html','hypertension.html','type-2-diabetes.html','headache.html','anaemia.html'];
  var FREE_ALGS  = ['chest-pain.html','headache.html','abdominal-pain.html','back-pain.html','breathlessness.html'];
  var path = location.pathname.replace(/\/index\.html$/, '/');
  var base = (path.split('/').pop() || '');
  if (!document.querySelector('link[rel="canonical"]')) {
    var l = document.createElement('link');
    l.rel = 'canonical'; l.href = HOST + (path === '/' ? '/' : path);
    document.head.appendChild(l);
  }
  var gated = null;
  if (/\/cases\//.test(path))                 gated = FREE_CASES.indexOf(base) === -1;
  else if (/\/tools\/algorithms\//.test(path)) gated = FREE_ALGS.indexOf(base) === -1;
  if (gated && !document.querySelector('script[data-rgp-paywall]')) {
    var s = document.createElement('script');
    s.type = 'application/ld+json'; s.setAttribute('data-rgp-paywall','1');
    s.textContent = JSON.stringify({'@context':'https://schema.org','@type':'WebPage',isAccessibleForFree:false,hasPart:{'@type':'WebPageElement',isAccessibleForFree:false,cssSelector:'body'}});
    document.head.appendChild(s);
  }
})();

/* ── Clinic Guide entry point (pathway pages). When a 2-page printable Clinic Guide
   exists for this pathway — looked up by the page's path in assets/clinic-guides.json,
   written by governance/import_clinic_guides.py — a "Clinic Guide" button joins the
   Steps / Snapshot toggle (or sits under the title on a page without one). It opens
   the guide, whose own bar has "Print (2 pages)". Pathway pages are static HTML, so
   adding or removing a guide needs no change to them. Not on print copies. ── */
(function(){
  if (window.__rgpCgEntry) return; window.__rgpCgEntry = true;
  var m = location.pathname.match(/\/tools\/algorithms\/([a-z0-9-]+)\.html$/i);
  if (!m || /-print$/i.test(m[1]) || !window.fetch) return;
  if (document.querySelector('meta[name="omelette-print-source"]')) return;
  var page = 'tools/algorithms/' + m[1].toLowerCase() + '.html';
  var me = document.querySelector('script[src*="alg-nav.js"]');
  var mm = me && (me.getAttribute('src') || '').match(/^(.*?)assets\/alg-nav\.js/);
  var pre = mm ? mm[1] : '../../';
  function ready(fn){ if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  fetch(pre + 'assets/clinic-guides.json', { cache: 'no-cache' }).then(function(r){ return r.ok ? r.json() : null; }).then(function(j){
    var g = j && (j.guides || []).filter(function(x){ return x && x.protocol === page && x.slug; })[0];
    if (!g) return;
    ready(function(){
      if (document.querySelector('.cg-entry')) return;
      var css = document.createElement('style'); css.id = 'cgEntryCss';
      css.textContent = 'a.cg-entry{display:inline-flex;align-items:center;gap:6px;font-family:inherit;font-size:.78rem;font-weight:700;line-height:1.2;color:#0c4a47;background:#e3efed;border:1px solid #99c4bf;border-radius:6px;padding:4px 11px;text-decoration:none;white-space:nowrap;cursor:pointer}'
        + 'a.cg-entry:hover{background:#0c4a47;border-color:#0c4a47;color:#fff}'
        + 'a.cg-entry .cg-entry-tag{font-size:.62rem;font-weight:800;letter-spacing:.04em;text-transform:uppercase;opacity:.8}'
        + '.view-toggle a.cg-entry{margin-left:2px}'
        + '.cg-entry-row{margin:0 0 14px}'
        + '@media (max-width:480px){a.cg-entry .cg-entry-tag{display:none}}'
        + '@media print{a.cg-entry,.cg-entry-row{display:none!important}}';
      document.head.appendChild(css);
      var a = document.createElement('a');
      a.className = 'cg-entry';
      a.href = pre + 'tools/clinic-guides/' + g.slug + '.html';
      a.title = 'Clinic Guide: ' + (g.title || '') + ' (2-page printable desk guide)';
      a.innerHTML = 'Clinic Guide <span class="cg-entry-tag">2-page print</span>';
      var tg = document.querySelector('.view-toggle');
      if (tg) { tg.appendChild(a); return; }
      var host = document.querySelector('.alg-progress') || document.querySelector('.stem-banner');
      if (!host) return;
      var row = document.createElement('div'); row.className = 'cg-entry-row'; row.appendChild(a);
      host.parentNode.insertBefore(row, host.nextSibling);
    });
  }).catch(function(){});
})();
