/* ============================================================
   Reasoning GP — PayPal subscribe buttons (home page only)
   Activates ONLY when RGP_CONFIG.paypalClientId and the plan
   ids are set. Until then the cards keep their email CTAs.
   Loads the PayPal JS SDK, renders a Subscribe button into
   each tier card, and tags the subscription with the signed-in
   user's email (custom_id) so the Worker webhook can grant the
   right tier. Apple Pay rides on the same SDK once your domain
   is verified (see backend/README.md §Apple Pay).
   ============================================================ */
(function () {
  'use strict';
  var cfg = window.RGP_CONFIG || {};
  var plans = cfg.paypalPlans || {};
  if (!cfg.paypalClientId) return; // not configured → leave email CTAs in place

  // Which plan id each card maps to, per billing period.
  var CARDS = [
    { sel: '.rgp-tier-silver',   monthly: 'silver_monthly',   yearly: 'silver_yearly' },
    { sel: '.rgp-tier-gold',     monthly: 'gold_monthly',     yearly: 'gold_yearly' },
    { sel: '.rgp-tier-platinum', monthly: 'platinum_monthly', yearly: 'platinum_yearly' }
  ];

  function ready(fn){ if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }

  ready(function () {
    var subs = document.querySelector('[data-subs]');
    if (!subs) return;

    var s = document.createElement('script');
    s.src = 'https://www.paypal.com/sdk/js?client-id=' + encodeURIComponent(cfg.paypalClientId) +
            '&vault=true&intent=subscription&components=buttons';
    s.setAttribute('data-sdk-integration-source', 'button-factory');
    s.onload = render;
    s.onerror = function(){ /* leave email CTAs */ };
    document.head.appendChild(s);

    function billing(){ return subs.classList.contains('bill-yearly') ? 'yearly' : 'monthly'; }

    function render() {
      CARDS.forEach(function (c) {
        var card = subs.querySelector(c.sel);
        if (!card) return;
        var cta = card.querySelector('.rgp-sub-cta');
        var host = document.createElement('div');
        host.className = 'rgp-pp-host';
        host.style.marginTop = '12px';
        if (cta) cta.style.display = 'none';
        card.appendChild(host);
        draw(card, host, c);
      });
      // Re-draw when the user flips monthly/yearly
      subs.querySelectorAll('[data-bill]').forEach(function (b) {
        b.addEventListener('click', function () {
          subs.querySelectorAll('.rgp-pp-host').forEach(function (h) { h.innerHTML = ''; });
          CARDS.forEach(function (c) {
            var card = subs.querySelector(c.sel);
            var host = card && card.querySelector('.rgp-pp-host');
            if (host) draw(card, host, c);
          });
        });
      });
    }

    function draw(card, host, c) {
      var planKey = c[billing()];
      var planId = plans[planKey];
      if (!planId) { host.innerHTML = '<p style="font-size:12px;color:#92400e">Plan not configured yet.</p>'; return; }
      if (!window.paypal || !window.paypal.Buttons) return;
      window.paypal.Buttons({
        style: { layout: 'vertical', shape: 'pill', label: 'subscribe' },
        createSubscription: function (data, actions) {
          var user = window.RGPAuth && RGPAuth.current ? RGPAuth.current() : null;
          if (!user) {
            // Require an account first so the webhook can attribute the payment.
            if (window.RGP_openAuth) window.RGP_openAuth('signup');
            throw new Error('account_required');
          }
          return actions.subscription.create({ plan_id: planId, custom_id: user.email });
        },
        onApprove: function () {
          host.innerHTML = '<p style="font-size:13px;color:#15803d;font-weight:700">✓ Subscription started — your access unlocks shortly. Refresh if it doesn\u2019t appear.</p>';
          if (window.RGPAuth && RGPAuth.refresh) setTimeout(function(){ RGPAuth.refresh().then(function(){ if (window.RGP_renderAuthState) RGP_renderAuthState(); }); }, 2500);
        }
      }).render(host);
    }
  });
})();
