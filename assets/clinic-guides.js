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
   On the hub: marks the free samples with a "Free" badge, and runs the
   handbook shop (div.cg-handbook[data-cg-product], e.g. the Lab Results
   Handbook): a separate one-off £20 PayPal purchase, NOT part of any plan,
   checked server-side by the Worker (see the block below).

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
      /* ---- Handbook shop (div.cg-handbook[data-cg-product], e.g. the Lab Results Handbook) ----
         Handbooks are SEPARATE one-off purchases (£20 each via PayPal). They are
         NOT part of any plan: Silver/Platinum do not include them. The Worker
         (backend/worker.js, "Handbook shop") sets the price, creates and captures
         the PayPal order, records the purchase and streams the PDF from a private
         R2 bucket to its buyer only. States of .cg-hb-buy:
           signed out             -> "Sign in to buy" (opens the site's sign-in box)
           signed in, not bought  -> PayPal button (JS SDK, intent=capture, GBP):
                                     createOrder -> POST /api/shop/order,
                                     onApprove   -> POST /api/shop/capture -> Download
           bought (or admin)      -> "Download PDF" (GET /api/download/<id>)
           no workerUrl / paypalClientId, an old Worker without the shop, or the
           PayPal SDK blocked     -> a plain message + an email fallback.
         The public file in data-cg-local is NEVER the sales channel: it is used
         only on previews/local copies and for the admin account (until it is
         deleted from the site, backend/README.md, "Handbook shop"). */
      var SUPPORT = 'bassamomda@gmail.com';
      var LIVE = HOSTS.indexOf(location.hostname) !== -1;
      function token(){ try { return localStorage.getItem('rgp.auth.token.v1'); } catch(e){ return null; } }
      function cachedUser(){
        var u = null;
        try {
          if (token()) {
            u = JSON.parse(localStorage.getItem('rgp.auth.me.v1') || 'null');
            u = u && (u.user || u);
          }
        } catch(e){ u = null; }
        return u;
      }
      function api(){ var c = window.RGP_CONFIG || {}; return c.workerUrl ? String(c.workerUrl).replace(/\/$/, '') : ''; }
      function call(method, p, body){
        var h = { 'Authorization': 'Bearer ' + (token() || '') };
        if (body) h['Content-Type'] = 'application/json';
        return fetch(api() + p, { method: method, headers: h, body: body ? JSON.stringify(body) : undefined, cache: 'no-store' })
          .then(function(res){ return res.json().catch(function(){ return {}; }).then(function(j){ j = j || {}; j._status = res.status; return j; }); });
      }
      function el(tag, cls, text){ var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
      function mailto(title){ return 'mailto:' + SUPPORT + '?subject=' + encodeURIComponent(title + ' (£20)'); }
      function localOK(){ var u = cachedUser(); return !LIVE || !!(u && u.admin); }

      /* PayPal JS SDK: loaded once, only when a buy button is needed. */
      var sdkP = null;
      function loadSdk(){
        if (window.paypal && window.paypal.Buttons) return Promise.resolve(window.paypal);
        if (sdkP) return sdkP;
        var cfg = window.RGP_CONFIG || {};
        sdkP = new Promise(function(resolve, reject){
          var t = setTimeout(function(){ reject(new Error('timeout')); }, 12000);  // blocked silently (NHS networks, blockers)
          var s = document.createElement('script');
          s.src = 'https://www.paypal.com/sdk/js?client-id=' + encodeURIComponent(cfg.paypalClientId) +
                  '&currency=GBP&intent=capture&components=buttons';
          s.onload = function(){ clearTimeout(t); (window.paypal && window.paypal.Buttons) ? resolve(window.paypal) : reject(new Error('no-buttons')); };
          s.onerror = function(){ clearTimeout(t); reject(new Error('blocked')); };
          document.head.appendChild(s);
        });
        sdkP.catch(function(){ sdkP = null; });                               // allow a retry on the next render
        return sdkP;
      }

      function setupShop(card){
        var id = card.getAttribute('data-cg-product');
        var title = card.getAttribute('data-cg-title') || 'Handbook';
        var local = card.getAttribute('data-cg-local') || '';
        var box = card.querySelector('.cg-hb-buy');
        var noteEl = card.querySelector('.cg-hb-note');
        if (!id || !box) return;
        var seenTok = token(), poll = null;

        function note(msg, html){
          if (!noteEl) return;
          if (!msg){ noteEl.hidden = true; noteEl.textContent = ''; return; }
          noteEl.textContent = msg;
          if (html) noteEl.appendChild(html);
          noteEl.hidden = false;
        }
        function clear(){ box.innerHTML = ''; box.removeAttribute('data-state'); }
        function emailLine(lead){
          var p = el('p', 'cg-hb-msg', lead + ' ');
          var a = el('a', null, 'Email ' + SUPPORT); a.href = mailto(title);
          p.appendChild(a); p.appendChild(document.createTextNode(' and I’ll send you a payment link.'));
          return p;
        }
        function localLink(){
          if (!local || !localOK()) return null;
          var p = el('p', 'cg-hb-small', '');
          var a = el('a', null, LIVE ? 'Admin copy (site file)' : 'Preview copy (local file)');
          a.href = local; a.setAttribute('download', ''); a.rel = 'nofollow';
          p.appendChild(a); return p;
        }
        function watchSignIn(){
          if (poll) return;
          poll = setInterval(function(){
            var t = token();
            if (t !== seenTok){ seenTok = t; if (t){ clearInterval(poll); poll = null; render(); } }
          }, 1000);
        }

        function stateSoon(why){
          clear(); box.setAttribute('data-state', 'soon');
          var b = el('a', 'cg-btn pri cg-hb-btn', 'Coming soon — £20'); b.href = mailto(title);
          box.appendChild(b);
          box.appendChild(emailLine(why || 'Online checkout for the handbook opens soon.'));
          var l = localLink(); if (l) box.appendChild(l);
        }
        function stateSignIn(){
          clear(); box.setAttribute('data-state', 'signin');
          var b = el('button', 'cg-btn pri cg-hb-btn', 'Sign in to buy · £20'); b.type = 'button';
          b.addEventListener('click', function(){
            if (window.RGP_openAuth) window.RGP_openAuth('signin');
            else location.href = '../index.html';
          });
          box.appendChild(b);
          var p = el('p', 'cg-hb-small', 'A free account links the purchase to you, so you can download it again on any device. ');
          var a = el('a', null, 'Create one'); a.href = '#';
          a.addEventListener('click', function(e){ e.preventDefault(); if (window.RGP_openAuth) window.RGP_openAuth('signup'); });
          p.appendChild(a); box.appendChild(p);
          watchSignIn();
        }
        function stateOwned(fresh){
          clear(); box.setAttribute('data-state', 'owned');
          var b = el('button', 'cg-btn pri cg-hb-btn', null); b.type = 'button';
          b.appendChild(document.createTextNode('Download PDF '));
          b.appendChild(el('span', 'cg-hb-size', '2.6 MB'));
          b.addEventListener('click', function(){ download(b); });
          box.appendChild(b);
          box.appendChild(el('p', 'cg-hb-small', fresh ? '✓ Purchased — thank you. Download it any time from this page.' : '✓ You own this handbook.'));
        }
        function stateBuy(){
          clear(); box.setAttribute('data-state', 'buy');
          var host = el('div', 'cg-hb-pp'); box.appendChild(host);
          var wait = el('p', 'cg-hb-small', 'Loading secure checkout…'); box.appendChild(wait);
          loadSdk().then(function(pp){
            var btns = pp.Buttons({
              style: { layout: 'vertical', shape: 'pill', label: 'pay', height: 40 },
              createOrder: function(){
                note('');
                return call('POST', '/api/shop/order', { product: id }).then(function(j){
                  if (j.owned){ stateOwned(false); throw new Error('owned'); }
                  if (j._status === 401){ stateSignIn(); throw new Error('signin'); }
                  if (!j.orderId) throw new Error(j.error || 'order_failed');
                  return j.orderId;
                });
              },
              onApprove: function(data, actions){
                return call('POST', '/api/shop/capture', { orderId: data.orderID }).then(function(j){
                  if (j.ok){ note(''); stateOwned(true); return; }
                  if (j.error === 'instrument_declined' && actions && actions.restart) return actions.restart();
                  if (j.pending){ note(j.message || 'PayPal is still processing the payment. Your download unlocks as soon as it clears.'); return; }
                  note((j.message || 'The payment didn’t go through.') + ' ');
                });
              },
              onCancel: function(){ note('Payment cancelled — nothing was charged.'); },
              onError: function(err){
                var m = String((err && err.message) || err || '');
                if (m === 'owned' || m === 'signin') return;
                note('That didn’t go through. Please try again, or email ' + SUPPORT + ' and I’ll sort it out.');
              }
            });
            var done = btns.render(host);
            if (done && typeof done.then === 'function'){
              done.then(function(){ wait.remove(); }).catch(function(){ wait.remove(); sdkFail(); });
            } else wait.remove();
          }).catch(function(){ sdkFail(); });
        }
        function sdkFail(){
          clear(); box.setAttribute('data-state', 'blocked');
          var b = el('a', 'cg-btn pri cg-hb-btn', 'Buy by email · £20'); b.href = mailto(title);
          box.appendChild(b);
          box.appendChild(emailLine('Card checkout couldn’t load (some work networks block it). Try a personal phone or Wi-Fi — or'));
        }

        function saveBlob(blob, name){
          var href = URL.createObjectURL(blob);
          var s = document.createElement('a');
          s.href = href; s.download = name; s.style.display = 'none';
          document.body.appendChild(s); s.click(); s.remove();
          setTimeout(function(){ URL.revokeObjectURL(href); }, 60000);
        }
        function download(b){
          if (b.getAttribute('aria-busy') === 'true') return;
          var label = b.firstChild, was = label.nodeValue;
          b.setAttribute('aria-busy', 'true'); label.nodeValue = 'Preparing… ';
          function done(){ b.removeAttribute('aria-busy'); label.nodeValue = was; }
          fetch(api() + '/api/download/' + encodeURIComponent(id), {
            method: 'GET', headers: { 'Authorization': 'Bearer ' + (token() || '') }, cache: 'no-store'
          }).then(function(res){
            if (res.ok) return res.blob().then(function(blob){
              done();
              var m = (res.headers.get('Content-Disposition') || '').match(/filename="?([^";]+)"?/i);
              saveBlob(blob, (m && m[1]) || 'handbook.pdf');
            });
            return res.json().catch(function(){ return {}; }).then(function(j){
              done();
              if (res.status === 401){ stateSignIn(); return; }
              if (res.status === 402){ render(); return; }
              if (localOK() && local && (res.status === 503 || res.status === 404)){ location.href = local; return; }
              note('The download didn’t start. Please try again in a minute, or email ' + SUPPORT + '.');
            });
          }).catch(function(){ done(); note('Couldn’t reach the server. Check your connection and try again.'); });
        }

        function render(){
          var cfg = window.RGP_CONFIG || {};
          if (!cfg.workerUrl || !cfg.paypalClientId){ stateSoon(); return; }
          seenTok = token();
          if (!seenTok){ stateSignIn(); return; }
          box.setAttribute('aria-busy', 'true');
          call('GET', '/api/shop/purchases').then(function(j){
            box.removeAttribute('aria-busy');
            if (j._status === 401){ stateSignIn(); return; }
            if (j._status !== 200 || !Array.isArray(j.purchases)){ stateSoon(); return; }   // old Worker without the shop
            if (j.purchases.indexOf(id) !== -1 || j.admin) stateOwned(false);
            else stateBuy();
          }).catch(function(){
            box.removeAttribute('aria-busy');
            stateSoon('Couldn’t reach the shop just now.');
          });
        }
        render();
      }
      document.querySelectorAll('.cg-handbook[data-cg-product]').forEach(setupShop);
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
