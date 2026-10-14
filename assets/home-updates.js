/* ============================================================
   HOME PAGE — updates panel, phone "What's new" line, continue row
   ------------------------------------------------------------
   Reads:
   - window.RGP_NICE_ARCHIVE  (assets/updates-nice-archive.js) — titles/dates, newest first
   - window.RGP_HOME_UPDATES  (assets/home-updates-data.js)    — "What to do" lines + MHRA items
   - localStorage 'rgp.updates.archive.v1' — newer MHRA/UKHSA items this device has seen
     on pages/updates.html (same behaviour the old home "Latest updates" block had)
   - localStorage 'rgp-cpd-v1' — the site's own reading log (cpd-tracker.js), for
     "Continue where you left off". Read only; nothing is written.
   Fills, in index.html:
   - [data-hu-panel]    the floating "Latest in UK primary care" panel (one per mode)
   - [data-hu-new]      the one-line phone "What's new" link (one per mode)
   - [data-hu-continue] the "Continue where you left off" row (one per mode)
   Motion: the highlighted item advances every 7 s; it holds on hover/focus, has a
   Pause/Play button, stops when an item is chosen, and never runs with
   prefers-reduced-motion.
   ============================================================ */
(function(){
  'use strict';
  if (window.__rgpHomeUpdates) return; window.__rgpHomeUpdates = 1;

  var ARCH = window.RGP_NICE_ARCHIVE || {}, CFG = window.RGP_HOME_UPDATES || {};
  var DO = CFG.DO || {}, SAFETY = CFG.SAFETY || [];
  var UPDATES = 'pages/updates.html';
  var ADVANCE_MS = 7000;

  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function parts(iso){ var p = String(iso || '').split('-'); return { y:+p[0], m:+p[1], d:+(p[2] || 0) }; }
  function utc(iso){ var p = parts(iso); return Date.UTC(p.y, (p.m || 1) - 1, p.d || 1); }
  function fmt(iso){
    var p = parts(iso); if (!p.y || !p.m) return '';
    var dt = new Date(Date.UTC(p.y, p.m - 1, p.d || 1));
    return dt.toLocaleDateString('en-GB', p.d ? {day:'numeric', month:'short', year:'numeric', timeZone:'UTC'} : {month:'short', year:'numeric', timeZone:'UTC'});
  }
  function store(key){ try { return JSON.parse(window.localStorage.getItem(key) || 'null'); } catch (e) { return null; } }
  function reducedMotion(){ try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  function safeHref(h){ h = String(h || ''); return /^[a-z0-9][a-z0-9_\-\/.]*$/i.test(h) && h.indexOf('..') < 0 ? h : ''; }

  /* NICE items, newest first (archive order breaks ties), only those with a "What to do" line. */
  function niceItems(){
    var items = (ARCH.items || []).map(function(x, i){ return { x:x, i:i }; });
    items.sort(function(a, b){ return (utc(b.x.date) - utc(a.x.date)) || (a.i - b.i); });
    return items.map(function(o){ return o.x; });
  }
  function niceWithAction(n){
    return niceItems().filter(function(x){ return DO[x.code + '|' + x.date]; }).slice(0, n);
  }

  /* MHRA items from the data file, plus newer MHRA/UKHSA items seen in the live feed. */
  // Routine statistics releases (surveillance reports, coverage data) are not safety alerts — keep them off the home panel.
  var ROUTINE = /^(official statistics|research and analysis)\b|surveillance|data to week|quarterly data|annual data|epidemiology update/i;
  function safetyItems(){
    var base = SAFETY.map(function(s){ return { src:s.src || 'MHRA', date:s.date, title:s.title, action:s.action || '' }; });
    var newest = base.length ? Math.max.apply(null, base.map(function(s){ return utc(s.date); })) : 0;
    var cutoff = Date.now() - 365 * 864e5;
    var live = store('rgp.updates.archive.v1');
    live = (Array.isArray(live) ? live : []).filter(function(x){
      var s = String(x && (x.src || x.tag) || '').toUpperCase();
      return x && x.title && x.date && (s.indexOf('MHRA') >= 0 || s.indexOf('UKHSA') >= 0);
    }).map(function(x){
      var s = String(x.src || x.tag).toUpperCase().indexOf('UKHSA') >= 0 ? 'UKHSA' : 'MHRA';
      var d = String(x.date).slice(0, 10), sm = String(x.summary || ''), cut = sm.search(/\.\s/);
      return { src:s, date:d, title:String(x.title), action: cut > 0 ? sm.slice(0, cut + 1) : sm, _t: Date.parse(d) };
    }).filter(function(x){ return !isNaN(x._t) && x._t > newest && x._t >= cutoff && !ROUTINE.test(x.title); })
      .sort(function(a, b){ return b._t - a._t; });
    return live.slice(0, 1).concat(base);
  }

  function badge(src){ var s = String(src).toUpperCase(); return '<span class="hu-badge hu-' + esc(s.toLowerCase()) + '">' + esc(s) + '</span>'; }

  /* ---------- Panel ---------- */
  function renderPanel(el){
    var mode = el.getAttribute('data-hu-panel');
    var items = niceWithAction(3), safety = safetyItems();
    var list = el.querySelector('.hu-list'), saf = el.querySelector('.hu-safety'), asof = el.querySelector('.hu-asof');
    if (asof && ARCH.asOf) asof.textContent = 'Newest first · NICE archive checked ' + fmt(ARCH.asOf);
    if (list && items.length){
      list.innerHTML = items.map(function(it, i){
        var site = it.site && it.site[0], id = 'hu-' + mode + '-' + i, on = i === 0;
        var siteHref = site ? safeHref(site[1]) : '';
        return '<li class="hu-item' + (on ? ' on' : '') + '">' +
          '<button type="button" class="hu-head" aria-expanded="' + on + '" aria-controls="' + id + '">' +
            badge('NICE') + '<span class="hu-meta"><span class="hu-code">' + esc(it.code) + '</span> · <time datetime="' + esc(it.date) + '">' + esc(fmt(it.date)) + '</time></span>' +
            '<span class="hu-t">' + esc(it.title) + '</span><span class="hu-bar" aria-hidden="true"></span>' +
          '</button>' +
          '<div class="hu-body" id="' + id + '"' + (on ? '' : ' hidden') + '>' +
            '<p class="hu-do"><b>What to do:</b> ' + esc(DO[it.code + '|' + it.date]) + '</p>' +
            '<p class="hu-links">' + (siteHref ? '<a href="' + esc(siteHref) + '">' + esc(site[0]) + ' →</a>' : '') +
            '<a class="hu-all" href="' + UPDATES + '">In Updates →</a></p>' +
          '</div></li>';
      }).join('');
    }
    if (saf && safety.length){
      saf.innerHTML = '<span class="hu-sl">Safety</span>' + safety.map(function(it){
        return '<a href="' + UPDATES + '">' + badge(it.src) +
          '<span class="hu-st"><b>' + esc(it.title) + '</b>' + (it.action ? '<small>' + esc(it.action) + '</small>' : '') + '</span>' +
          '<time datetime="' + esc(it.date) + '">' + esc(fmt(it.date)) + '</time></a>';
      }).join('');
      saf.hidden = false;
    }
    wire(el);
  }

  function wire(el){
    var items = [].slice.call(el.querySelectorAll('.hu-item'));
    var btn = el.querySelector('.hu-pause');
    if (items.length < 2){ if (btn) btn.hidden = true; return; }
    var cur = 0, timer = null, paused = false, hold = false, reduced = reducedMotion();
    function show(i){
      items.forEach(function(li, k){
        var on = k === i; li.classList.toggle('on', on);
        li.querySelector('.hu-head').setAttribute('aria-expanded', on ? 'true' : 'false');
        li.querySelector('.hu-body').hidden = !on;
      });
      cur = i;
    }
    function tick(){ if (!paused && !hold && !document.hidden) show((cur + 1) % items.length); }
    function stop(){ if (timer) clearInterval(timer); timer = null; el.classList.remove('is-auto'); }
    function start(){ stop(); if (reduced || paused) return; timer = setInterval(tick, ADVANCE_MS); el.classList.add('is-auto'); }
    function setPaused(p){
      paused = p;
      if (btn){ btn.setAttribute('aria-pressed', p ? 'true' : 'false'); btn.textContent = p ? 'Play' : 'Pause';
        btn.setAttribute('aria-label', p ? 'Play: move through the updates automatically' : 'Pause: stop moving through the updates'); }
      p ? stop() : start();
    }
    items.forEach(function(li, k){
      li.querySelector('.hu-head').addEventListener('click', function(){ show(k); setPaused(true); });
    });
    if (btn) btn.addEventListener('click', function(){ setPaused(!paused); });
    el.addEventListener('mouseenter', function(){ hold = true; el.classList.add('is-hold'); });
    el.addEventListener('mouseleave', function(){ hold = false; el.classList.remove('is-hold'); });
    el.addEventListener('focusin', function(){ hold = true; el.classList.add('is-hold'); });
    el.addEventListener('focusout', function(e){ if (!el.contains(e.relatedTarget)){ hold = false; el.classList.remove('is-hold'); } });
    if (reduced){ if (btn) btn.hidden = true; return; }
    if (btn) btn.hidden = false;
    start();
    // Follow a change to the reduced-motion setting while the page is open.
    try {
      var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      var onChange = function(){ reduced = mq.matches; if (btn) btn.hidden = reduced; reduced ? stop() : (paused || start()); };
      mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange);
    } catch (e) {}
  }

  /* ---------- Phone "What's new" line ---------- */
  function renderNew(el){
    var top = niceItems()[0]; if (!top) return;
    var t = el.querySelector('.hu-new-t');
    if (t) t.innerHTML = '<b>NICE ' + esc(top.code) + '</b><span class="hu-w"> updated</span><span class="hu-n" aria-hidden="true"> ·</span> ' + esc(fmt(top.date));
    el.setAttribute('aria-label', "What's new: NICE " + top.code + ' updated ' + fmt(top.date) + ' — open Updates');
    el.hidden = false;
  }

  /* ---------- Continue where you left off ---------- */
  function recent(n){
    var d = store('rgp-cpd-v1'); if (!d || typeof d !== 'object') return [];
    var out = [];
    for (var k in d){
      if (!Object.prototype.hasOwnProperty.call(d, k)) continue;
      var r = d[k]; if (!r || !r.href) continue;
      var href = String(r.href).replace(/^\/+/, '');
      if (!/^(tools|cases|pages)\/[a-z0-9_\-\/]+\.html$/i.test(href) || href.indexOf('..') >= 0) continue;
      out.push({ href:href, title:String(r.title || href), kind:String(r.kind || ''), last:+r.last || 0 });
    }
    out.sort(function(a, b){ return b.last - a.last; });
    return out.slice(0, n);
  }
  function renderContinue(el){
    var r = recent(3); if (!r.length){ el.hidden = true; return; }
    var host = el.querySelector('.hu-cont-links'); if (!host) return;
    host.innerHTML = r.map(function(x){
      return '<a href="' + esc(x.href) + '">' + (x.kind ? '<span class="hu-kind">' + esc(x.kind) + '</span>' : '') + esc(x.title) + '</a>';
    }).join('');
    el.hidden = false;
  }

  function init(){
    [].forEach.call(document.querySelectorAll('[data-hu-panel]'), function(el){ try { renderPanel(el); } catch (e) {} });
    [].forEach.call(document.querySelectorAll('[data-hu-new]'), function(el){ try { renderNew(el); } catch (e) {} });
    [].forEach.call(document.querySelectorAll('[data-hu-continue]'), function(el){ try { renderContinue(el); } catch (e) {} });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
