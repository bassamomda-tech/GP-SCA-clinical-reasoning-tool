/* ============================================================
   Reasoning GP — anonymous page counts (assets/analytics.js)
   ------------------------------------------------------------
   Loads Cloudflare Web Analytics: cookieless, no personal data,
   no consent banner needed. See pages/privacy.html.

   OWNER: paste the token from Cloudflare (Web Analytics → your site →
   "Manage site" → the JS snippet → the value of "token") between the
   quotes on the TOKEN line below. While it says PASTE_TOKEN_HERE this
   file does nothing at all.

   It also does nothing:
     • off the live domains (previews, localhost, file copies)
     • on print copies (…-print.html)
     • when the browser sends "Do Not Track" or Global Privacy Control
     • when the visitor chose "Essential only" on the cookie notice
   Loaded once per page by assets/site.js and assets/provenance.js.
   ============================================================ */
(function(){
  'use strict';
  var TOKEN = 'PASTE_TOKEN_HERE';

  var LIVE_HOSTS = ['gpreasoning.uk', 'www.gpreasoning.uk', 'reasoninggp.com', 'www.reasoninggp.com'];

  if (window.__rgpAnalyticsDone) return;
  window.__rgpAnalyticsDone = true;
  try {
    if (!TOKEN || TOKEN === 'PASTE_TOKEN_HERE' || !/^[A-Za-z0-9_-]{16,64}$/.test(TOKEN)) return;
    var host = String(location.hostname || '').toLowerCase();
    if (!host || host === 'localhost' || /^127\./.test(host) || host === '[::1]' || location.protocol === 'file:') return;
    if (LIVE_HOSTS.indexOf(host) === -1) return;
    if (/-print\.html?$/i.test(location.pathname) || document.querySelector('meta[name="omelette-print-source"]')) return;
    if (navigator.doNotTrack === '1' || window.doNotTrack === '1' || navigator.globalPrivacyControl === true) return;
    // Someone who chose "Essential only" on the cookie notice is not counted either.
    try { var c = JSON.parse(localStorage.getItem('rgp.cookie.consent.v1') || 'null'); if (c && c.choice === 'essential') return; } catch (e) {}
    if (document.querySelector('script[src*="static.cloudflareinsights.com/beacon"]')) return;
    var s = document.createElement('script');
    s.defer = true;
    s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    s.setAttribute('data-cf-beacon', JSON.stringify({ token: TOKEN }));
    (document.head || document.documentElement).appendChild(s);
  } catch (e) { /* never break the page */ }
})();
