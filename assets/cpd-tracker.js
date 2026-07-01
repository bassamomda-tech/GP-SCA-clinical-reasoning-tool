/* ============================================================
   Reasoning GP — Automatic CPD reading tracker
   Runs on every content page (loaded via site.js and alg-nav.js).
   Counts ACTIVE reading time (pauses when the tab is hidden or the
   reader is idle), and accrues it per page into localStorage so the
   CPD page can turn time-on-site into a reflective-CPD log + cert —
   the way Medwise / BMJ Best Practice auto-log reading time.
   Storage: localStorage 'rgp-cpd-v1' = { "<path>": {href,title,kind,seconds,visits,first,last,reflection} }
   ============================================================ */
(function(){
  if (window.__rgpCpd) return; window.__rgpCpd = true;

  var KEY      = 'rgp-cpd-v1';
  var IDLE_MS  = 60000;   // pause counting after 60s with no interaction
  var FLUSH_MS = 12000;   // persist every 12s
  var MIN_LOG  = 25;      // don't record a page until 25 active seconds
  var PILL_AT  = 45;      // show the CPD pill after 45 active seconds

  function load(){ try{ return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; }catch(e){ return {}; } }
  function save(d){ try{ localStorage.setItem(KEY, JSON.stringify(d)); }catch(e){} }

  function kindFromPath(p){
    if (/\/cases\/[^/]+\.html$/.test(p))                 return 'Case';
    if (/\/tools\/algorithms\/[^/]+\.html$/.test(p))     return 'Pathway';
    if (/\/tools\/management\/[^/]+\.html$/.test(p))      return 'Protocol';
    if (/\/pages\/articles\.html$/.test(p))              return null;   // directory, skip
    if (/\/tools\/[^/]+\.html$/.test(p))                 return 'Tool';
    return null;
  }

  var path = (location.pathname || '/').replace(/index\.html$/,'').replace(/\/+$/,'') || '/';
  // canonical key uses the real pathname (with filename) for tools/cases/pathways
  var rawPath = location.pathname;
  var SKIP = /\/(index|cpd|cases|algorithms|management|leaflets|governance|articles|ask|updates|audios|cpd|ebm|resources)\.html$|\/$/;
  var kind = kindFromPath(rawPath);
  var track = !!kind && !SKIP.test(rawPath);

  // expose a read API even on untracked pages (so cpd.html can read the log)
  function list(){
    var d = load(), out = [];
    for (var k in d){ if(d.hasOwnProperty(k)) out.push(d[k]); }
    out.sort(function(a,b){ return (b.last||0)-(a.last||0); });
    return out;
  }
  function totalSeconds(){ return list().reduce(function(s,r){ return s + (r.seconds||0); }, 0); }
  function setReflection(href, text){ var d=load(); if(d[href]){ d[href].reflection = text||''; save(d); } }
  function remove(href){ var d=load(); delete d[href]; save(d); }
  function clearAll(){ try{ localStorage.removeItem(KEY); }catch(e){} }
  window.RGPCPD = { list:list, totalSeconds:totalSeconds, setReflection:setReflection, remove:remove, clearAll:clearAll, KEY:KEY };

  if (!track) return;   // page is read-only for CPD purposes; don't accrue

  var active = 0, last = Date.now(), idle = false, lastInteract = Date.now(), visitCounted = false;

  function title(){
    var t = (document.title || '').split(/[·|—]/)[0].trim();
    return t || document.title || rawPath;
  }
  function tick(){
    var now = Date.now();
    if (!document.hidden && !idle) active += now - last;
    last = now;
    if (now - lastInteract > IDLE_MS) idle = true;
    if (active >= PILL_AT*1000) showPill();
  }
  function flush(){
    tick();
    if (active < MIN_LOG*1000) return;
    var d = load();
    var rec = d[rawPath] || { href:rawPath, title:title(), kind:kind, seconds:0, visits:0, first:Date.now(), reflection:'' };
    rec.title = title(); rec.kind = kind;
    rec.seconds = Math.round((rec.seconds||0) + active/1000);
    rec.last = Date.now();
    if (!visitCounted){ rec.visits = (rec.visits||0) + 1; visitCounted = true; }
    d[rawPath] = rec; save(d);
    active = 0;            // reset accumulator after persisting
    updatePill(rec.seconds);
  }

  ['mousemove','keydown','scroll','click','touchstart','pointerdown'].forEach(function(ev){
    window.addEventListener(ev, function(){ lastInteract = Date.now(); if (idle){ idle = false; last = Date.now(); } }, { passive:true });
  });
  document.addEventListener('visibilitychange', function(){ tick(); last = Date.now(); if (document.hidden) flush(); });
  window.addEventListener('pagehide', flush);
  window.addEventListener('beforeunload', flush);
  setInterval(tick, 1000);
  setInterval(flush, FLUSH_MS);

  /* ---- tiny, dismissible "logging to CPD" pill ---- */
  var pill = null;
  function fmt(s){ s=Math.round(s); var m=Math.floor(s/60); return m>=1 ? (m+' min') : (s+'s'); }
  function cpdHref(){ return /\/(cases|tools|pages)\//.test(rawPath) ? (rawPath.indexOf('/pages/')>-1 ? 'cpd.html' : '../pages/cpd.html') : 'pages/cpd.html'; }
  function showPill(){
    if (pill || sessionStorage.getItem('rgp-cpd-pill-off')) return;
    var css = document.createElement('style');
    css.textContent = '.rgp-cpd-pill{position:fixed;left:16px;bottom:16px;z-index:140;display:flex;align-items:center;gap:9px;'+
      'font-family:"DM Sans",system-ui,sans-serif;font-size:12.5px;color:#0c4a47;background:rgba(255,255,255,.96);'+
      'border:1px solid #cfe6e3;border-radius:99px;padding:7px 9px 7px 12px;box-shadow:0 8px 24px rgba(12,40,38,.16);}'+
      '.rgp-cpd-pill a{color:#0c4a47;text-decoration:none;font-weight:700;}.rgp-cpd-pill a:hover{color:#b54c2b;}'+
      '.rgp-cpd-pill b{font-weight:700;}.rgp-cpd-pill .x{cursor:pointer;border:none;background:#f0fdfa;color:#0c4a47;'+
      'width:20px;height:20px;border-radius:50%;font-size:14px;line-height:1;display:grid;place-items:center;}'+
      '.rgp-cpd-pill .x:hover{background:#0c4a47;color:#fff;}@media print{.rgp-cpd-pill{display:none!important}}';
    document.head.appendChild(css);
    pill = document.createElement('div');
    pill.className = 'rgp-cpd-pill';
    pill.innerHTML = '<span>⏱ <b class="t">'+fmt(active/1000)+'</b> reading → <a href="'+cpdHref()+'">CPD log</a></span>'+
      '<button class="x" type="button" aria-label="Hide">×</button>';
    pill.querySelector('.x').addEventListener('click', function(){ try{ sessionStorage.setItem('rgp-cpd-pill-off','1'); }catch(e){} pill.remove(); pill=null; });
    document.body.appendChild(pill);
  }
  function updatePill(totalSec){
    if (!pill) return;
    var t = pill.querySelector('.t'); if (t) t.textContent = fmt(totalSec || 0);
  }
})();
