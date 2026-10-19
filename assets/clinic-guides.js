/* ============================================================
   Reasoning GP — Clinic Guides (shared script)
   Loaded by every guide page (tools/clinic-guides/<slug>.html, added by
   governance/import_clinic_guides.py), by the hub (tools/clinic-guides.html)
   and by the Shop (pages/shop.html).

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
   On ANY page with a handbook card (div.cg-handbook[data-cg-product]: the hub's
   Lab results section, pages/shop.html): runs the handbook shop, a separate
   one-off £20 purchase per handbook (several can go in one basket and one
   PayPal payment), NOT part of any plan, checked
   server-side by the Worker (see the block below). Such a page also loads
   site.js (sign-in box, RGP_CONFIG).

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

  /* ---- Handbook shop (div.cg-handbook[data-cg-product]) ----
     Runs on ANY page that has a handbook card and loads this script (with
     site.js for the sign-in box and RGP_CONFIG): the Clinic Guides hub
     (Lab results), pages/shop.html, ... Paths are worked out from this
     script's own address, so the cards behave the same from tools/ or pages/.
     Handbooks are SEPARATE one-off purchases (£20 each via PayPal). They are
     NOT part of any plan: Silver/Platinum do not include them. The Worker
     (backend/worker.js, "Handbook shop") sets the price, creates and captures
     the PayPal order, records the purchase and streams the PDF from a private
     R2 bucket to its buyer only. States of .cg-hb-buy:
       not bought             -> "Add to basket" / "In basket ✓ · Go to checkout"
       the basket panel       -> signed out: "Sign in to check out"; signed in:
                                 the list and total, a tick box (immediate supply +
                                 no 14-day cancel / no refund unless faulty) above
                                 the PayPal button (JS SDK, intent=capture, GBP),
                                 disabled until the box is ticked:
                                 createOrder -> POST /api/shop/order {products:[…], waiver:true},
                                 onApprove   -> POST /api/shop/capture -> Download
       bought (or admin)      -> "Download PDF" (GET /api/download/<id>); the
                                 copy is stamped in the browser with its order
                                 number (header X-Order-Ref) on every page
       no workerUrl / paypalClientId, an old Worker without the shop, or the
       PayPal SDK blocked     -> a plain message + an email fallback.
     The public file in data-cg-local (optional) is NEVER the sales channel: it
     is used only on previews/local copies and for the admin account (until it
     is deleted from the site, backend/README.md, "Handbook shop").
     data-cg-size (optional) is the size shown on the Download button. */
  function initShop(cards){
    var SUPPORT = 'bassamomda@gmail.com';
    var LIVE = HOSTS.indexOf(location.hostname) !== -1;
    // Site root, from this script's own address ("../" from tools/ or pages/).
    var ROOT = (function(){
      var s = document.querySelector('script[src*="assets/clinic-guides.js"]');
      var m = s ? (s.getAttribute('src') || '').match(/^(.*?)assets\/clinic-guides\.js/) : null;
      return m ? m[1] : '';
    })();
    var TERMS = ROOT + 'pages/terms.html#downloads';
    // Wording of the tick box. The Worker records WAIVER_TEXT_VERSION with each
    // purchase: change that constant in backend/worker.js if this text changes.
    var WAIVER = 'I want the download now. I understand that once it is available I lose my 14-day right to cancel, and that this purchase is not refundable unless the file is faulty.';
    var PDFLIB = 'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js';
    if (!document.getElementById('cg-hb-css')){
      var css = document.createElement('style'); css.id = 'cg-hb-css';
      css.textContent = '.cg-hb-waiver{display:flex;gap:8px;align-items:flex-start;margin:0;font-size:12.5px;line-height:1.45;color:var(--ink-2,#3a3530);text-align:left;cursor:pointer}'
        + '.cg-hb-waiver input{flex:0 0 auto;width:17px;height:17px;margin:1px 0 0;accent-color:#0c4a47;cursor:pointer}'
        + '.cg-hb-pp[data-locked="true"]{opacity:.55}';
      document.head.appendChild(css);
    }
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

    /* pdf-lib: loaded once, only when a download is stamped (15 s, then give up). */
    var libP = null;
    function loadPdfLib(){
      if (window.PDFLib && window.PDFLib.PDFDocument) return Promise.resolve(window.PDFLib);
      if (libP) return libP;
      libP = new Promise(function(resolve, reject){
        var t = setTimeout(function(){ reject(new Error('pdf-lib timeout')); }, 15000);
        var s = document.createElement('script');
        s.src = PDFLIB; s.async = true; s.crossOrigin = 'anonymous';
        s.onload = function(){ clearTimeout(t); (window.PDFLib && window.PDFLib.PDFDocument) ? resolve(window.PDFLib) : reject(new Error('pdf-lib missing')); };
        s.onerror = function(){ clearTimeout(t); reject(new Error('pdf-lib blocked')); };
        document.head.appendChild(s);
      });
      libP.catch(function(){ libP = null; });
      return libP;
    }
    /* Stamp the order number on every page (top right, 6 pt grey) and in the PDF
       metadata. Resolves to the stamped Blob; rejects if pdf-lib fails. */
    function stampPdf(blob, ref){
      return loadPdfLib().then(function(L){
        return blob.arrayBuffer().then(function(buf){
          return L.PDFDocument.load(buf, { updateMetadata: false });
        }).then(function(doc){
          return doc.embedFont(L.StandardFonts.Helvetica).then(function(font){
            var MM = 72 / 25.4, size = 6;
            var text = 'Licensed copy · Order ' + ref + ' · gpreasoning.uk · Not for redistribution';
            var w = font.widthOfTextAtSize(text, size), h = font.heightAtSize(size, { descender: false });
            doc.getPages().forEach(function(pg){
              var box = pg.getCropBox ? pg.getCropBox() : { x: 0, y: 0, width: pg.getWidth(), height: pg.getHeight() };
              pg.drawText(text, {
                x: box.x + box.width - 9 * MM - w,
                y: box.y + box.height - 4 * MM - h,
                size: size, font: font, color: L.rgb(0.55, 0.55, 0.55)
              });
            });
            doc.setSubject('Licensed copy, order ' + ref);
            doc.setKeywords([ref]);
            doc.setAuthor('Reasoning GP');
            return doc.save();
          });
        }).then(function(bytes){ return new Blob([bytes], { type: 'application/pdf' }); });
      });
    }

    /* ---- Basket: one PayPal payment for one or more handbooks ----
       Each card shows "Add to basket" (or "In basket ✓ · Remove", or
       "Download PDF" once owned). The basket panel (#cg-basket on the page, or
       made after the cards) lists the handbooks, the total, the tick box and the
       PayPal buttons: createOrder -> POST /api/shop/order {products:[…], waiver:true},
       onApprove -> POST /api/shop/capture -> every card bought turns into Download.
       The basket list is kept in this browser only (localStorage), as a
       convenience; the Worker always sets the prices and checks ownership. */
    var BKEY = 'rgp.basket.v1';
    var state = { cfg: false, signedIn: false, owned: [], orders: {}, admin: false, loaded: false };
    var cardsById = {}, order = [];
    function readBasket(){
      try { var b = JSON.parse(localStorage.getItem(BKEY) || '[]'); return Array.isArray(b) ? b.filter(function(id){ return cardsById[id]; }) : []; }
      catch(e){ return []; }
    }
    var basket = [];
    function saveBasket(){ try { localStorage.setItem(BKEY, JSON.stringify(basket)); } catch(e){} }
    function inBasket(id){ return basket.indexOf(id) !== -1; }
    function owns(id){ return state.admin || state.owned.indexOf(id) !== -1; }
    function priceOf(id){ var p = parseFloat(cardsById[id].card.getAttribute('data-cg-price') || '20'); return isFinite(p) ? p : 20; }
    function money(n){ return '£' + (Math.round(n * 100) % 100 ? n.toFixed(2) : String(Math.round(n))); }
    function toBuy(){ return basket.filter(function(id){ return !owns(id); }); }
    function addItem(id){ if (!inBasket(id)){ basket.push(id); saveBasket(); } renderAll(); showPanel(); }
    function removeItem(id){ basket = basket.filter(function(x){ return x !== id; }); saveBasket(); renderAll(); }

    if (!document.getElementById('cg-bk-css')){
      var bcss = document.createElement('style'); bcss.id = 'cg-bk-css';
      bcss.textContent =
          '.cg-bk{display:none;margin:18px 0 0;background:var(--surface,#fff);border:1px solid var(--line,#dcd5c6);border-top:4px solid #0c4a47;border-radius:12px;padding:16px;scroll-margin-top:90px}'
        + '.cg-bk[data-open="true"]{display:block}'
        + '.cg-bk h3{margin:0 0 10px;font-family:"Source Serif 4",Georgia,serif;font-size:20px;font-weight:600;color:var(--ink,#14212b)}'
        + '.cg-bk-grid{display:grid;grid-template-columns:1fr;gap:16px}'
        + '@media (min-width:760px){.cg-bk-grid{grid-template-columns:minmax(0,1.2fr) minmax(0,1fr)}}'
        + '.cg-bk ul{list-style:none;margin:0;padding:0}'
        + '.cg-bk li{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--line,#dcd5c6);font-size:14px;color:var(--ink,#14212b);margin:0}'
        + '.cg-bk li span{flex:1;min-width:0}.cg-bk li b{font-weight:700}'
        + '.cg-bk-rm{border:0;background:none;color:#8a3a20;font:inherit;font-size:12.5px;text-decoration:underline;cursor:pointer;padding:2px 4px}'
        + '.cg-bk-tot{display:flex;justify-content:space-between;padding:10px 0 0;font-size:15px;font-weight:700;color:var(--ink,#14212b)}'
        + '.cg-bk-pay{display:flex;flex-direction:column;gap:8px;min-width:0}'
        + '.cg-bk-msg{margin:6px 0 0;font-size:12.5px;line-height:1.5;color:#0c4a47;font-weight:600}'
        + '.cg-bk-bar{position:fixed;left:50%;bottom:14px;transform:translateX(-50%);z-index:60;display:none;align-items:center;gap:12px;background:#0c4a47;color:#fff;border-radius:999px;padding:9px 10px 9px 18px;box-shadow:0 6px 24px rgba(0,0,0,.25);font-size:14px;font-weight:600;max-width:calc(100vw - 32px);box-sizing:border-box}'
        + '.cg-bk-bar[data-show="true"]{display:flex}'
        + '.cg-bk-bar button{border:0;border-radius:999px;background:#fff;color:#0c4a47;font:inherit;font-weight:700;padding:7px 14px;cursor:pointer;white-space:nowrap}'
        + '.cg-hb-in{display:flex;gap:8px;align-items:center;justify-content:center;font-size:13px;color:#0c4a47;font-weight:700}';
      document.head.appendChild(bcss);
    }

    function setupCard(card){
      var id = card.getAttribute('data-cg-product');
      var box = card.querySelector('.cg-hb-buy');
      if (!id || !box || cardsById[id]) return;
      var c = { id: id, card: card, box: box, title: card.getAttribute('data-cg-title') || 'Handbook',
                local: card.getAttribute('data-cg-local') || '', size: card.getAttribute('data-cg-size') || '',
                noteEl: card.querySelector('.cg-hb-note'), fresh: false };
      cardsById[id] = c; order.push(id);
      c.note = function(msg){
        if (!c.noteEl) return;
        if (!msg){ c.noteEl.hidden = true; c.noteEl.textContent = ''; return; }
        c.noteEl.textContent = msg; c.noteEl.hidden = false;
      };
    }
    function clearBox(c, st){ c.box.innerHTML = ''; c.box.setAttribute('data-state', st); }
    function emailLine(title, lead){
      var p = el('p', 'cg-hb-msg', lead + ' ');
      var a = el('a', null, 'Email ' + SUPPORT); a.href = mailto(title);
      p.appendChild(a); p.appendChild(document.createTextNode(' and I’ll send you a payment link.'));
      return p;
    }
    function localLink(c){
      if (!c.local || !localOK()) return null;
      var p = el('p', 'cg-hb-small', '');
      var a = el('a', null, LIVE ? 'Admin copy (site file)' : 'Preview copy (local file)');
      a.href = c.local; a.setAttribute('download', ''); a.rel = 'nofollow';
      p.appendChild(a); return p;
    }
    function cardSoon(c, why){
      clearBox(c, 'soon');
      var b = el('a', 'cg-btn pri cg-hb-btn', 'Coming soon — ' + money(priceOf(c.id))); b.href = mailto(c.title);
      c.box.appendChild(b);
      c.box.appendChild(emailLine(c.title, why || 'Online checkout for the handbook opens soon.'));
      var l = localLink(c); if (l) c.box.appendChild(l);
    }
    function cardOwned(c){
      clearBox(c, 'owned');
      var b = el('button', 'cg-btn pri cg-hb-btn', null); b.type = 'button';
      b.appendChild(document.createTextNode('Download PDF '));
      if (c.size) b.appendChild(el('span', 'cg-hb-size', c.size));
      b.addEventListener('click', function(){ download(c, b); });
      c.box.appendChild(b);
      var ref = state.orders[c.id] ? String(state.orders[c.id]) : '';
      c.box.appendChild(el('p', 'cg-hb-small', (c.fresh ? '✓ Purchased — thank you. Download it any time from this page.' : '✓ You own this handbook.')
        + (ref && ref !== 'ADMIN-COPY' ? ' Order ' + ref + '.' : '')));
    }
    function cardBuy(c){
      clearBox(c, inBasket(c.id) ? 'inbasket' : 'buy');
      if (inBasket(c.id)){
        var go = el('button', 'cg-btn pri cg-hb-btn', 'In basket ✓ · Go to checkout'); go.type = 'button';
        go.addEventListener('click', showPanel);
        c.box.appendChild(go);
        var rm = el('button', 'cg-bk-rm', 'Remove from basket'); rm.type = 'button';
        rm.addEventListener('click', function(){ removeItem(c.id); });
        var p = el('p', 'cg-hb-small', ''); p.appendChild(rm); c.box.appendChild(p);
      } else {
        var add = el('button', 'cg-btn pri cg-hb-btn', 'Add to basket · ' + money(priceOf(c.id))); add.type = 'button';
        add.addEventListener('click', function(){ addItem(c.id); });
        c.box.appendChild(add);
        c.box.appendChild(el('p', 'cg-hb-small', 'Buy one, or add several and pay once.'));
      }
    }
    function cardBlocked(c){
      clearBox(c, 'blocked');
      var b = el('a', 'cg-btn pri cg-hb-btn', 'Buy by email · ' + money(priceOf(c.id))); b.href = mailto(c.title);
      c.box.appendChild(b);
      c.box.appendChild(emailLine(c.title, 'Card checkout couldn’t load (some work networks block it). Try a personal phone or Wi-Fi — or'));
    }

    /* ---- basket panel + floating bar ---- */
    var panel = document.getElementById('cg-basket');
    if (!panel){
      panel = el('section', null);
      var last = cards[cards.length - 1], host = last.closest('.sh-grid') || last;
      host.parentNode.insertBefore(panel, host.nextSibling);
    }
    panel.className = 'cg-bk'; panel.id = 'cg-basket'; panel.setAttribute('aria-labelledby', 'cg-bk-h');
    var bar = el('div', 'cg-bk-bar'); bar.setAttribute('role', 'region'); bar.setAttribute('aria-label', 'Basket');
    var barText = el('span', null, ''); var barBtn = el('button', null, 'Checkout'); barBtn.type = 'button';
    barBtn.addEventListener('click', showPanel);
    bar.appendChild(barText); bar.appendChild(barBtn); document.body.appendChild(bar);
    var panelVisible = false;
    if ('IntersectionObserver' in window){
      new IntersectionObserver(function(es){ panelVisible = es[0].isIntersecting; syncBar(); }).observe(panel);
    }
    function syncBar(){
      var n = toBuy().length;
      barText.textContent = 'Basket · ' + n + (n === 1 ? ' handbook · ' : ' handbooks · ') + money(toBuy().reduce(function(t, id){ return t + priceOf(id); }, 0));
      bar.setAttribute('data-show', (n && !panelVisible && state.loaded) ? 'true' : 'false');
    }
    function showPanel(){
      if (!toBuy().length) return;
      panel.setAttribute('data-open', 'true');
      try { panel.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch(e){ panel.scrollIntoView(); }
    }

    var payHost = null, payMsg = null, waiverBox = null, ppReady = false, ppFailed = false;
    function panelMsg(m){ if (payMsg){ payMsg.textContent = m || ''; payMsg.hidden = !m; } }
    function renderPanel(){
      var items = toBuy();
      if (!items.length || !state.loaded){ panel.setAttribute('data-open', 'false'); syncBar(); return; }
      panel.setAttribute('data-open', 'true');
      // Rebuild the list and total; keep the tick box and the PayPal buttons alive.
      var listWrap = panel.querySelector('.cg-bk-list');
      if (!listWrap){
        panel.innerHTML = '';
        panel.appendChild(el('h3', null, 'Your basket')).id = 'cg-bk-h';
        var grid = el('div', 'cg-bk-grid'); panel.appendChild(grid);
        listWrap = el('div', 'cg-bk-list'); grid.appendChild(listWrap);
        var pay = el('div', 'cg-bk-pay'); grid.appendChild(pay);
        buildPay(pay);
      }
      listWrap.innerHTML = '';
      var ul = el('ul'); listWrap.appendChild(ul);
      var total = 0;
      items.forEach(function(id){
        var li = el('li'); li.appendChild(el('span', null, cardsById[id].title + ' (PDF)'));
        li.appendChild(el('b', null, money(priceOf(id)))); total += priceOf(id);
        var rm = el('button', 'cg-bk-rm', 'Remove'); rm.type = 'button'; rm.setAttribute('aria-label', 'Remove ' + cardsById[id].title);
        rm.addEventListener('click', function(){ removeItem(id); });
        li.appendChild(rm); ul.appendChild(li);
      });
      var tot = el('div', 'cg-bk-tot'); tot.appendChild(el('span', null, 'Total · one payment'));
      tot.appendChild(el('span', null, money(total))); listWrap.appendChild(tot);
      listWrap.appendChild(el('p', 'cg-hb-small', 'One-off purchase, not part of any plan. Each handbook carries your order number.'));
      syncBar();
    }
    function buildPay(pay){
      if (!state.signedIn){
        var b = el('button', 'cg-btn pri cg-hb-btn', 'Sign in to check out'); b.type = 'button';
        b.addEventListener('click', function(){ if (window.RGP_openAuth) window.RGP_openAuth('signin'); else location.href = ROOT + 'index.html'; });
        pay.appendChild(b);
        var p = el('p', 'cg-hb-small', 'A free account links the purchase to you, so you can download it again on any device. ');
        var a = el('a', null, 'Create one'); a.href = '#';
        a.addEventListener('click', function(e){ e.preventDefault(); if (window.RGP_openAuth) window.RGP_openAuth('signup'); });
        p.appendChild(a); pay.appendChild(p);
        watchSignIn();
        return;
      }
      // Consent to immediate supply + acknowledgement (Consumer Contracts
      // Regulations 2013): the PayPal buttons stay disabled until it is ticked.
      var lab = el('label', 'cg-hb-waiver');
      var cb = document.createElement('input'); cb.type = 'checkbox'; cb.id = 'cg-waiver-basket';
      lab.setAttribute('for', cb.id); lab.appendChild(cb); lab.appendChild(el('span', null, WAIVER));
      pay.appendChild(lab); waiverBox = cb;
      var tp = el('p', 'cg-hb-small', ''); var ta = el('a', null, 'Terms'); ta.href = TERMS; tp.appendChild(ta); pay.appendChild(tp);
      payHost = el('div', 'cg-hb-pp'); payHost.setAttribute('data-locked', 'true'); pay.appendChild(payHost);
      payMsg = el('p', 'cg-bk-msg', ''); payMsg.hidden = true; pay.appendChild(payMsg);
      var wait = el('p', 'cg-hb-small', 'Loading secure checkout…'); pay.appendChild(wait);
      function ticked(){ return cb.checked === true; }
      cb.addEventListener('change', function(){ payHost.setAttribute('data-locked', ticked() ? 'false' : 'true'); if (ticked()) panelMsg(''); });
      loadSdk().then(function(pp){
        var btns = pp.Buttons({
          style: { layout: 'vertical', shape: 'pill', label: 'pay', height: 40 },
          onInit: function(data, actions){
            function sync(){ if (ticked()) actions.enable(); else actions.disable(); }
            sync(); cb.addEventListener('change', sync);
          },
          onClick: function(data, actions){
            if (!ticked()){ panelMsg('Please tick the box above to confirm you want the downloads now, then pay.'); try { cb.focus(); } catch(e){} return actions.reject(); }
            if (!toBuy().length){ return actions.reject(); }
            panelMsg(''); return actions.resolve();
          },
          createOrder: function(){
            panelMsg('');
            if (!ticked()) return Promise.reject(new Error('waiver'));
            return call('POST', '/api/shop/order', { products: toBuy(), waiver: true }).then(function(j){
              if (j.owned){ refresh(); throw new Error('owned'); }
              if (j._status === 401){ state.signedIn = false; rebuildPanel(); throw new Error('signin'); }
              if (j.error === 'waiver_required'){ panelMsg(j.message || 'Please tick the box above to continue.'); throw new Error('waiver'); }
              if (!j.orderId) throw new Error(j.error || 'order_failed');
              return j.orderId;
            });
          },
          onApprove: function(data, actions){
            return call('POST', '/api/shop/capture', { orderId: data.orderID }).then(function(j){
              if (j.ok){
                var got = j.products || [j.product];
                got.forEach(function(id){ if (cardsById[id]) cardsById[id].fresh = true; });
                basket = basket.filter(function(id){ return got.indexOf(id) === -1; }); saveBasket();
                panelMsg(''); refresh(got[0]);
                return;
              }
              if (j.error === 'instrument_declined' && actions && actions.restart) return actions.restart();
              if (j.pending){ panelMsg(j.message || 'PayPal is still processing the payment. Your downloads unlock as soon as it clears.'); return; }
              panelMsg(j.message || 'The payment didn’t go through.');
            });
          },
          onCancel: function(){ panelMsg('Payment cancelled — nothing was charged.'); },
          onError: function(err){
            var m = String((err && err.message) || err || '');
            if (m === 'owned' || m === 'signin' || m === 'waiver') return;
            panelMsg('That didn’t go through. Please try again, or email ' + SUPPORT + ' and I’ll sort it out.');
          }
        });
        var done = btns.render(payHost);
        if (done && typeof done.then === 'function') done.then(function(){ wait.remove(); }).catch(function(){ wait.remove(); payBlocked(pay); });
        else wait.remove();
      }).catch(function(){ wait.remove(); payBlocked(pay); });
    }
    function payBlocked(pay){
      ppFailed = true;
      pay.innerHTML = '';
      var titles = toBuy().map(function(id){ return cardsById[id].title; }).join(', ');
      var b = el('a', 'cg-btn pri cg-hb-btn', 'Buy by email'); b.href = mailto(titles || 'Handbooks');
      pay.appendChild(b);
      pay.appendChild(emailLine(titles, 'Card checkout couldn’t load (some work networks block it). Try a personal phone or Wi-Fi — or'));
    }
    function rebuildPanel(){ panel.innerHTML = ''; renderPanel(); }

    var seenTok = token(), poll = null;
    function watchSignIn(){
      if (poll) return;
      poll = setInterval(function(){
        var t = token();
        if (t !== seenTok){ seenTok = t; if (t){ clearInterval(poll); poll = null; refresh(); } }
      }, 1000);
    }

    function renderAll(){
      order.forEach(function(id){
        var c = cardsById[id];
        if (!state.cfg){ cardSoon(c); return; }
        if (state.error){ cardSoon(c, 'Couldn’t reach the shop just now.'); return; }
        if (owns(id)) cardOwned(c); else cardBuy(c);
      });
      if (state.cfg && !state.error) renderPanel();
    }
    function refresh(scrollTo){
      var cfg = window.RGP_CONFIG || {};
      state.cfg = !!(cfg.workerUrl && cfg.paypalClientId);
      seenTok = token(); state.signedIn = !!seenTok; state.error = false;
      if (!state.cfg){ state.loaded = true; renderAll(); return; }
      function after(){
        state.loaded = true; rebuildPanel(); renderAll();
        if (scrollTo && cardsById[scrollTo]){ try { cardsById[scrollTo].card.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch(e){} }
      }
      if (!state.signedIn){ state.owned = []; state.orders = {}; state.admin = false; after(); return; }
      call('GET', '/api/shop/purchases').then(function(j){
        if (j._status === 401){ state.signedIn = false; state.owned = []; after(); return; }
        if (j._status !== 200 || !Array.isArray(j.purchases)){ state.cfg = false; after(); return; }   // old Worker without the shop
        state.owned = j.purchases; state.orders = j.orders || {}; state.admin = !!j.admin;
        basket = basket.filter(function(id){ return !owns(id); }); saveBasket();
        after();
      }).catch(function(){ state.error = true; after(); });
    }

    function saveBlob(blob, name){
      var href = URL.createObjectURL(blob);
      var s = document.createElement('a');
      s.href = href; s.download = name; s.style.display = 'none';
      document.body.appendChild(s); s.click(); s.remove();
      setTimeout(function(){ URL.revokeObjectURL(href); }, 60000);
    }
    function download(c, b){
      if (b.getAttribute('aria-busy') === 'true') return;
      var label = b.firstChild, was = label.nodeValue, sz = b.querySelector('.cg-hb-size');
      b.setAttribute('aria-busy', 'true'); label.nodeValue = 'Preparing… ';
      function done(){ b.removeAttribute('aria-busy'); label.nodeValue = was; if (sz) sz.hidden = false; }
      fetch(api() + '/api/download/' + encodeURIComponent(c.id), {
        method: 'GET', headers: { 'Authorization': 'Bearer ' + (token() || '') }, cache: 'no-store'
      }).then(function(res){
        if (res.ok) return res.blob().then(function(blob){
          var m = (res.headers.get('Content-Disposition') || '').match(/filename="?([^";]+)"?/i);
          var name = (m && m[1]) || 'handbook.pdf';
          // Order number for the stamp: the buyer's PayPal transaction ID, or ADMIN-COPY.
          var ref = String(res.headers.get('X-Order-Ref') || '').replace(/[^A-Za-z0-9-]/g, '').slice(0, 40);
          if (!ref){ done(); saveBlob(blob, name); return; }
          label.nodeValue = 'Preparing your copy… '; if (sz) sz.hidden = true;
          // Never block the buyer: if pdf-lib can't load or throws, save the unstamped file.
          return stampPdf(blob, ref).then(function(stamped){ done(); saveBlob(stamped, name); },
            function(err){
              try { console.warn('Handbook stamp skipped:', err && err.message ? err.message : err); } catch(e){}
              done(); saveBlob(blob, name);
            });
        });
        return res.json().catch(function(){ return {}; }).then(function(j){
          done();
          if (res.status === 401 || res.status === 402){ refresh(); return; }
          if (localOK() && c.local && (res.status === 503 || res.status === 404)){ location.href = c.local; return; }
          c.note('The download didn’t start. Please try again in a minute, or email ' + SUPPORT + '.');
        });
      }).catch(function(){ done(); c.note('Couldn’t reach the server. Check your connection and try again.'); });
    }

    Array.prototype.forEach.call(cards, setupCard);
    basket = readBasket();
    refresh();
  }
  onReady(function(){
    var cards = document.querySelectorAll('.cg-handbook[data-cg-product]');
    if (cards.length) initShop(cards);
  });

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
