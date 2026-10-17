/* ============================================================
   Reasoning GP — PayPal subscribe buttons (home page only)
   Activates ONLY when RGP_CONFIG.paypalClientId and the plan
   ids are set. Until then the cards keep their email CTAs.

   Failure-safe by design: the card's own CTA is only hidden
   AFTER a PayPal button has actually rendered. If the SDK is
   blocked (NHS networks, tracker blockers), a plan id is
   inactive, or render() rejects, the CTA stays visible and we
   show a plain-English fallback — a card can never end up with
   no way to pay.
   ============================================================ */
(function () {
  'use strict';
  var cfg = window.RGP_CONFIG || {};
  var plans = cfg.paypalPlans || {};
  if (!cfg.paypalClientId) return; // not configured → leave email CTAs in place

  var SUPPORT = 'bassamomda@gmail.com';

  // Which plan id each card maps to, per billing period.
  var CARDS = [
    { sel: '.rgp-tier-silver',   monthly: 'silver_monthly',   yearly: 'silver_yearly',   name: 'Silver' },
    { sel: '.rgp-tier-gold',     monthly: 'gold_monthly',     yearly: 'gold_yearly',     name: 'Gold',
      threeMonthly: 'gold_3monthly', threeLabel: 'Or \u00a340 every 3 months' },
    { sel: '.rgp-tier-platinum', monthly: 'platinum_monthly', yearly: 'platinum_yearly', name: 'Platinum' }
  ];

  function ready(fn){ if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  ready(function () { waitForSubs(0); });

  // The subscriptions section is rendered into the page by site.js — if it
  // isn't in the DOM yet when we run, retry briefly instead of giving up.
  function waitForSubs(n){
    var subs = document.querySelector('[data-subs]');
    if (!subs) { if (n < 20) setTimeout(function(){ waitForSubs(n+1); }, 300); return; }
    start(subs);
  }

  function start(subs) {
    var sdkFailed = false;

    // Consent before payment (Consumer Contracts Regulations 2013, reg 37): the
    // buyer asks for access to start now and acknowledges losing the 14-day
    // cancellation right. Subscribe is refused until this box is ticked.
    var consent = subs.querySelector('#rgpPayConsent');
    if (!consent) {
      var wrap = document.createElement('label');
      wrap.className = 'rgp-pay-consent';
      wrap.style.cssText = 'display:flex;gap:10px;align-items:flex-start;max-width:760px;margin:0 auto 16px;padding:12px 14px;border:1px solid #d9cfbf;border-radius:12px;background:#fffdf8;font-size:13.5px;line-height:1.5;color:#2b2b2b;cursor:pointer';
      wrap.innerHTML = '<input type="checkbox" id="rgpPayConsent" style="margin-top:3px;width:18px;height:18px;flex-shrink:0">' +
        '<span>I want my paid access to start immediately, and I understand that I then lose my 14-day right to cancel and get a refund. I can still cancel at any time to stop future payments (<a href="' + (location.pathname.indexOf('/pages/') > -1 ? '' : 'pages/') + 'terms.html#billing">terms</a>).</span>';
      var grid = subs.querySelector(CARDS[0].sel);
      var anchor = grid && grid.parentNode ? grid.parentNode : subs;
      anchor.parentNode.insertBefore(wrap, anchor);
      consent = wrap.querySelector('input');
    }
    function consented(){ return !!(consent && consent.checked); }

    // Guard against the SDK silently never arriving (blocked by a network or
    // extension): after 12s, fall back on every card instead of showing nothing.
    var sdkTimer = setTimeout(function(){
      if (!window.paypal || !window.paypal.Buttons) { sdkFailed = true; fallbackAll('blocked'); }
    }, 12000);

    var s = document.createElement('script');
    s.src = 'https://www.paypal.com/sdk/js?client-id=' + encodeURIComponent(cfg.paypalClientId) +
            '&vault=true&intent=subscription&components=buttons&currency=GBP';
    s.setAttribute('data-sdk-integration-source', 'button-factory');
    s.onload = function(){ clearTimeout(sdkTimer); render(); };
    s.onerror = function(){ clearTimeout(sdkTimer); sdkFailed = true; fallbackAll('blocked'); };
    document.head.appendChild(s);

    function billing(){ return subs.classList.contains('bill-yearly') ? 'yearly' : 'monthly'; }

    function eachCard(fn){
      CARDS.forEach(function (c) {
        var card = subs.querySelector(c.sel);
        if (card) fn(card, c);
      });
    }

    // Show a clear, actionable fallback on a card and make sure its own CTA is visible.
    function fallback(card, c, why) {
      var cta = card.querySelector('.rgp-sub-cta');
      if (cta) cta.style.display = ''; // never leave a card with no way to act
      var host = card.querySelector('.rgp-pp-host');
      var msg = (why === 'blocked')
        ? 'Card checkout couldn\u2019t load (some work networks block it). Try a personal phone or Wi-Fi \u2014 or use the button above and I\u2019ll send you a payment link.'
        : 'Card checkout is briefly unavailable. Use the button above and I\u2019ll send you a payment link right away.';
      if (host) {
        host.innerHTML = '<p style="font-size:12px;line-height:1.5;color:#8a3a20;margin:8px 0 0">' + msg +
          ' <a href="mailto:' + SUPPORT + '?subject=' + encodeURIComponent(c.name + ' subscription') +
          '" style="color:#0c4a47;font-weight:700">Email me</a></p>';
      }
    }
    function fallbackAll(why){ eachCard(function(card, c){ fallback(card, c, why); }); }

    function render() {
      if (!window.paypal || !window.paypal.Buttons) { sdkFailed = true; fallbackAll('blocked'); return; }
      eachCard(function (card, c) {
        var host = card.querySelector('.rgp-pp-host');
        if (!host) {
          host = document.createElement('div');
          host.className = 'rgp-pp-host';
          host.style.marginTop = '12px';
          card.appendChild(host);
        }
        draw(card, host, c);
      });
      // Re-draw when the user flips monthly/yearly
      subs.querySelectorAll('[data-bill]').forEach(function (b) {
        b.addEventListener('click', function () {
          if (sdkFailed) return;
          eachCard(function (card, c) {
            var host = card.querySelector('.rgp-pp-host');
            if (host) { host.innerHTML = ''; draw(card, host, c); }
          });
        });
      });
    }

    function draw(card, host, c) {
      var planId = plans[c[billing()]];
      var cta = card.querySelector('.rgp-sub-cta');
      var old3 = card.querySelector('.rgp-pp-host-3m');
      if (old3) old3.parentNode.removeChild(old3);
      // No plan id for this period → keep the card's own CTA, say so plainly.
      if (!planId) {
        if (cta) cta.style.display = '';
        host.innerHTML = '<p style="font-size:12px;color:#8a3a20;margin:8px 0 0">' +
          (billing() === 'yearly' ? 'Yearly billing isn\u2019t set up for this plan yet — switch to Monthly.' : 'This plan isn\u2019t available just now.') + '</p>';
        return;
      }
      if (!window.paypal || !window.paypal.Buttons) { fallback(card, c, 'blocked'); return; }

      var btn = makeButtons(host, planId);

      // Only hide the fallback CTA once a real button is on the page.
      var done = btn.render(host);
      if (done && typeof done.then === 'function') {
        done.then(function(){ if (cta) cta.style.display = 'none'; })
            .catch(function(){ fallback(card, c, 'render'); });
      } else if (cta) {
        cta.style.display = 'none';
      }

      // Extra billing option on this card (Gold every 3 months), monthly view only.
      var threeId = c.threeMonthly && plans[c.threeMonthly];
      if (threeId && billing() === 'monthly') {
        var h3 = document.createElement('div');
        h3.className = 'rgp-pp-host-3m';
        h3.style.marginTop = '10px';
        h3.innerHTML = '<p style="font-size:12.5px;font-weight:700;color:#0c4a47;margin:0 0 6px">' + c.threeLabel + '</p>';
        host.parentNode.insertBefore(h3, host.nextSibling);
        var b3 = makeButtons(h3, threeId).render(h3);
        if (b3 && typeof b3.catch === 'function') b3.catch(function(){ h3.parentNode && h3.parentNode.removeChild(h3); });
      }
    }

    // One PayPal subscribe button for planId; messages go to host.
    function makeButtons(host, planId) {
      return window.paypal.Buttons({
        style: { layout: 'vertical', shape: 'pill', label: 'subscribe' },
        onClick: function (data, actions) {
          if (!consented()) {
            note(host, 'Please tick the box above the plans to confirm you want access to start now — then tap Subscribe again.');
            if (consent && consent.focus) consent.focus();
            return actions.reject();
          }
          return actions.resolve();
        },
        createSubscription: function (data, actions) {
          var user = window.RGPAuth && RGPAuth.current ? RGPAuth.current() : null;
          if (!user) {
            // An account is required so the webhook can attribute the payment.
            // Tell the user plainly and open sign-up rather than dying silently.
            note(host, 'Create a free account first (it takes a few seconds) so your access can be linked to you — then tap Subscribe again.');
            if (window.RGP_openAuth) window.RGP_openAuth('signup');
            return actions.reject ? actions.reject() : Promise.reject(new Error('account_required'));
          }
          return actions.subscription.create({ plan_id: planId, custom_id: user.email });
        },
        onApprove: function () {
          host.innerHTML = '<p style="font-size:13px;color:#15803d;font-weight:700">\u2713 Subscription started — your access unlocks shortly. Refresh if it doesn\u2019t appear.</p>';
          if (window.RGPAuth && RGPAuth.refresh) setTimeout(function(){ RGPAuth.refresh().then(function(){ if (window.RGP_renderAuthState) RGP_renderAuthState(); }); }, 2500);
        },
        onError: function () { note(host, 'That didn\u2019t go through. Please try again — or email ' + SUPPORT + ' and I\u2019ll sort it out.'); }
      });
    }

    function note(host, text) {
      var p = host.querySelector('.rgp-pp-note');
      if (!p) {
        p = document.createElement('p');
        p.className = 'rgp-pp-note';
        p.style.cssText = 'font-size:12px;line-height:1.5;color:#8a3a20;margin:8px 0 0';
        host.appendChild(p);
      }
      p.textContent = text;
    }
  }
})();
