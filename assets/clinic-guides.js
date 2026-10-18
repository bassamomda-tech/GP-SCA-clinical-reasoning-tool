/* ============================================================
   Reasoning GP — Clinic Guides (shared script)
   Loaded by every guide page (tools/clinic-guides/<slug>.html, added by
   governance/import_clinic_guides.py) and by the hub (tools/clinic-guides.html).

   On a guide page:
     - access check (the guide pages do not load site.js, so the site.js
       paywall never runs on them; this mirrors it, like the content gate in
       alg-nav.js / mgmt-nav.js, from the auth cache site.js keeps in
       localStorage). Live hosts only, so previews and local copies stay open;
     - #print in the address opens the print dialogue once the page has loaded
       (the hub's "Print" button);
     - inside a frame (the "Clinic Guide" tab on a protocol page) the guide's
       own top bar is hidden, because the host page shows its own.
   On the hub: marks the free samples with a "Free" badge.

   Access: Clinic Guides are Clinic content — Silver, Platinum and the admin
   account. The free samples below open to everyone, signed in or not, on any
   plan. The hub page itself is public.
   ============================================================ */
(function(){
  'use strict';

  /* ---- THE free-sample list (the ONE place to change it) ----
     Slugs of the Clinic Guides that are open to everyone, e.g. 'hypertension'
     for tools/clinic-guides/hypertension.html. Also read by
     governance/build-search-index.mjs (search snippets) and exposed as
     RGP_CONFIG.clinicGuidesFree / window.RGP_CLINIC_GUIDES_FREE. */
  var RGP_CLINIC_GUIDES_FREE = ['hypertension'];

  window.RGP_CLINIC_GUIDES_FREE = RGP_CLINIC_GUIDES_FREE;
  // Mirror onto RGP_CONFIG only when site.js has already created it — never
  // create RGP_CONFIG here (site.js keeps an existing one, paywall settings and all).
  try { if (window.RGP_CONFIG) window.RGP_CONFIG.clinicGuidesFree = RGP_CLINIC_GUIDES_FREE; } catch(e){}

  var HOSTS = ['gpreasoning.uk','www.gpreasoning.uk','reasoninggp.com','www.reasoninggp.com'];
  var path = location.pathname;
  function isFree(slug){ return RGP_CLINIC_GUIDES_FREE.indexOf(String(slug || '').toLowerCase()) !== -1; }
  window.RGP_CLINIC_GUIDES = { free: RGP_CLINIC_GUIDES_FREE, isFree: isFree };

  function onReady(fn){ if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }

  /* ---------------- hub: Free badges ---------------- */
  if (/\/tools\/clinic-guides\.html$/.test(path)){
    onReady(function(){
      document.querySelectorAll('.cg-card[data-cg-slug]').forEach(function(c){
        if (!isFree(c.getAttribute('data-cg-slug')) || c.querySelector('.cg-free')) return;
        var b = document.createElement('span'); b.className = 'cg-free'; b.textContent = 'Free';
        c.appendChild(b);
      });
    });
    return;
  }

  /* ---------------- guide pages ---------------- */
  var m = path.match(/\/tools\/clinic-guides\/([a-z0-9-]+)\.html$/i);
  if (!m) return;
  var slug = m[1].toLowerCase();
  var framed = false; try { framed = window.self !== window.top; } catch(e){ framed = true; }

  if (framed){
    var fs = document.createElement('style'); fs.id = 'cg-framed';
    fs.textContent = '.bar{display:none!important}';
    document.head.appendChild(fs);
  }

  function me(){
    try {
      if (!localStorage.getItem('rgp.auth.token.v1')) return null;
      var u = JSON.parse(localStorage.getItem('rgp.auth.me.v1') || 'null');
      if (!u) return null;
      return u.user || u;
    } catch(e){ return null; }
  }
  var armed = HOSTS.indexOf(location.hostname) !== -1;
  function allowed(){
    if (!armed) return true;                                 // previews / local copies never lock
    if (isFree(slug)) return true;                           // free sample: everyone, any plan
    var u = me();
    if (u && u.admin) return true;                           // admin account
    var t = (u && u.tier) || 'bronze';                       // signed-out == bronze
    return t === 'silver' || t === 'platinum';               // Clinic content
  }
  window.RGP_CLINIC_GUIDES.allowed = allowed;

  function lock(){
    var u = me(), t = (u && u.tier) || 'bronze';
    var sample = RGP_CLINIC_GUIDES_FREE[0];
    var head = (u && t === 'gold') ? 'Your plan doesn’t cover this side' : 'Clinic Guides are for members';
    var body = (u && t === 'gold')
      ? 'Gold covers the SCA exam suite. Clinic Guides are part of the Clinic toolkit — upgrade to Silver or Platinum to unlock them.'
      : 'Clinic Guides are part of the Silver (Clinic) and Platinum plans. Sign in on the Clinic Guides page if you already have a plan.';
    var st = document.createElement('style'); st.id = 'cg-lock-css';
    st.textContent = '@media print{.page{display:none!important}}';
    document.head.appendChild(st);
    document.documentElement.classList.add('cg-locked');
    var el = document.createElement('div');
    el.className = 'rgp-gate cg-gate';
    el.setAttribute('style','position:fixed;inset:0;z-index:9000;display:grid;place-items:center;padding:20px;background:rgba(28,25,23,.55);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);font-family:\'DM Sans\',system-ui,sans-serif');
    var btn = 'display:block;text-align:center;font-weight:700;font-size:14px;padding:11px 14px;border-radius:10px;text-decoration:none;margin-bottom:8px;';
    el.innerHTML = '<div role="dialog" aria-modal="true" aria-labelledby="cgGateH" style="background:#f6f2e9;border:1px solid #d9d2c4;border-radius:18px;max-width:430px;width:100%;padding:26px 24px;box-shadow:0 30px 70px rgba(0,0,0,.35);box-sizing:border-box">'
      + '<div style="font-size:26px;margin-bottom:8px" aria-hidden="true">🔐</div>'
      + '<h2 id="cgGateH" style="font-family:\'Source Serif 4\',Georgia,serif;font-size:22px;font-weight:600;color:#1c1917;margin:0 0 6px">' + head + '</h2>'
      + '<p style="font-size:13.5px;line-height:1.55;color:#57534e;margin:0 0 14px">' + body + '</p>'
      + '<a style="' + btn + 'background:#0c4a47;color:#fff" href="../../pages/pricing.html">See the plans →</a>'
      + (sample ? '<a style="' + btn + 'background:#fff;color:#0c4a47;border:1px solid #c9c1b2" href="' + sample + '.html">Open the free sample guide</a>' : '')
      + '<a style="' + btn + 'background:#fff;color:#0c4a47;border:1px solid #c9c1b2;margin-bottom:0" href="../clinic-guides.html">Back to Clinic Guides</a>'
      + '</div>';
    document.documentElement.style.overflow = 'hidden';
    (document.body || document.documentElement).appendChild(el);
  }

  onReady(function(){
    if (!allowed()){ lock(); return; }
    if (/^#print$/i.test(location.hash) && !framed){
      var go = function(){ setTimeout(function(){ try { window.print(); } catch(e){} }, 250); };
      if (document.readyState === 'complete') go(); else window.addEventListener('load', go);
      // drop the hash so a reload or Back doesn't print again
      try { history.replaceState(null, '', location.pathname + location.search); } catch(e){}
    }
  });
})();
