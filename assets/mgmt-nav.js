/* ============================================
   Reasoning GP — Management page integrated nav
   Injected into every standalone management page under
   tools/management/. Adds a slim top bar tying the page
   back into the site (home · all management algorithms)
   plus a Print / PDF control. Self-contained.
   ============================================ */
(function(){
  function build(){
    if (document.querySelector('.mg-nav')) return;

    var title =
      (document.querySelector('.mg-stem b') && document.querySelector('.mg-stem b').textContent.trim()) ||
      (document.title || '').replace(/·.*$/, '').replace(/—.*$/, '').trim() ||
      'Management';

    var css = document.createElement('style');
    css.textContent = [
      '.mg-nav{position:sticky;top:0;z-index:200;display:flex;align-items:center;gap:14px;',
      '  padding:10px 18px;background:rgba(255,255,255,.92);backdrop-filter:blur(8px);',
      '  border-bottom:1px solid #e4e2db;font-family:"DM Sans",system-ui,sans-serif;}',
      '.mg-nav a{text-decoration:none;color:inherit}',
      '.mg-nav-back{display:inline-flex;align-items:center;gap:7px;font-size:13px;font-weight:600;',
      '  color:#0e5c58;padding:6px 12px;border:1px solid #cfe6e3;border-radius:99px;background:#f0fdfa;',
      '  transition:all .15s ease;white-space:nowrap;flex-shrink:0;}',
      '.mg-nav-back:hover{background:#0e5c58;border-color:#0e5c58;color:#fff;}',
      '.mg-nav-crumb{display:flex;align-items:center;gap:7px;font-size:12.5px;color:#a8a29d;min-width:0;flex:1;}',
      '.mg-nav-crumb .home{font-weight:700;color:#6b6560;letter-spacing:.02em;text-transform:uppercase;font-size:11px;flex-shrink:0;}',
      '.mg-nav-crumb .home:hover{color:#0e5c58;}',
      '.mg-nav-crumb .sep{color:#d6d3cd;flex-shrink:0;}',
      '.mg-nav-crumb .now{color:#1c1917;font-weight:600;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}',
      '.mg-nav-crumb .seg{flex-shrink:0;}',
      '.mg-nav-crumb .seg:hover{color:#0e5c58;}',
      '@media(max-width:560px){.mg-nav-crumb .seg{display:none}.mg-nav-crumb .sep{display:none}}',
      '.mg-nav-print{margin-left:auto;display:inline-flex;align-items:center;gap:7px;font-family:inherit;',
      '  font-size:13px;font-weight:600;cursor:pointer;color:#b54c2b;padding:6px 13px;border:1px solid #e7c3b4;',
      '  border-radius:99px;background:#f7e3da;transition:all .15s ease;white-space:nowrap;flex-shrink:0;}',
      '.mg-nav-print:hover{background:#b54c2b;border-color:#b54c2b;color:#fff;}',
      '@media(max-width:560px){.mg-nav-print .lbl{display:none}}',
      '@media print{.mg-nav{display:none !important}}'
    ].join('\n');
    document.head.appendChild(css);

    var bar = document.createElement('div');
    bar.className = 'mg-nav';
    bar.innerHTML =
      '<a class="mg-nav-back" href="../management.html">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>' +
        'All management' +
      '</a>' +
      '<div class="mg-nav-crumb">' +
        '<a class="home" href="../../index.html">Reasoning GP</a>' +
        '<span class="sep">›</span>' +
        '<a class="seg" href="../management.html">Management</a>' +
        '<span class="sep">›</span>' +
        '<span class="now"></span>' +
      '</div>' +
      '<button class="mg-nav-print" type="button" aria-label="Print this pathway">' +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>' +
        '<span class="lbl">Print / PDF</span>' +
      '</button>';
    bar.querySelector('.now').textContent = title;
    var printBtn = bar.querySelector('.mg-nav-print');
    if (printBtn) printBtn.addEventListener('click', function(){ window.print(); });
    document.body.insertBefore(bar, document.body.firstChild);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
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
