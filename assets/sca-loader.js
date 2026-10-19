/* ============================================================
   Reasoning GP — SCA case loader + shared candidate-view helpers
   ------------------------------------------------------------
   1. Loads the FULL SCA case library (all 312 cases plus the
      enrichment files) in exactly the same order as
      tools/sca-practice.html, so every SCA tool sees the same cases.
      Use it as a plain (non-async) script, after site.js:
        <script src="../assets/sca-loader.js?v=2"></script>
      Add data-cases="none" when the page already lists the case
      files itself (sca-practice.html) and only wants the helpers.
      KEEP THE FILE LIST BELOW IN STEP WITH sca-practice.html: when
      a case file is added or its ?v= changes there, change it here.
   2. window.SCA_UI — small helpers that keep the diagnosis hidden
      from the candidate before and during a consultation:
        title(c)      case title without a trailing "(diagnosis)"
        meta(c)       neutral line: type · age/sex · life stage (who(c) = without type)
        fullMeta(c)   the full label incl. meta.system (after the case)
        record(c)     the candidate's medical-record stem as HTML
        reason(c)     one-line booking note (stem "reason")
        isFree(id) / freeFirst(list) / freeOnly(list)
   The free sample list itself lives in assets/site.js
   (window.SCA_FREE_IDS).
   ============================================================ */
(function(){
  'use strict';

  /* Since Upload 148 the case library is a pre-built bundle (governance/build_sca_bundle.js):
     a light index of every case, plus one JSON file per case loaded on demand by SCA_LOAD(id). */
  var FILES = [ 'sca-enrich.js?v=17', 'sca-data/index.js?v=3b3c370328dd', 'sca-blueprint.js?v=1' ];  /* enrich first: its load-time passes then skip */

  var me = document.currentScript;

  /* ---------- helpers ---------- */
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(m){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]; }); }
  var TYPE = { video:'Video', telephone:'Telephone', phone:'Telephone', f2f:'Face-to-face', home:'Home visit', visit:'Home visit', data:'Results review' };

  function freeIds(){
    var ids = window.SCA_FREE_IDS;
    if (ids && ids.length) return ids;
    return (window.SCA_CASES || []).slice(0, 5).map(function(c){ return c.id; }); // stale site.js fallback
  }
  function isFree(id){ return freeIds().indexOf(id) > -1; }
  function freeFirst(list){
    var ids = freeIds();
    return list.filter(function(c){ return ids.indexOf(c.id) > -1; })
      .sort(function(a, b){ return ids.indexOf(a.id) - ids.indexOf(b.id); })
      .concat(list.filter(function(c){ return ids.indexOf(c.id) === -1; }));
  }
  function freeOnly(list){
    var ids = freeIds();
    return list.filter(function(c){ return ids.indexOf(c.id) > -1; })
      .sort(function(a, b){ return ids.indexOf(a.id) - ids.indexOf(b.id); });
  }

  // Title as the candidate sees it: drop a trailing "(perimenopause)"-style label.
  function title(c){ return String((c && c.title) || '').replace(/\s*\([^()]*\)\s*$/, ''); }
  // Life stage only: never derived from meta.system, which often names the diagnosis.
  function stage(c){
    var a = parseInt((c && c.meta && c.meta.age), 10);
    if (isNaN(a)) return 'General practice';
    if (a < 18) return 'Child / young person';
    if (a >= 70) return 'Older adult';
    return 'Adult';
  }
  function ageSex(c){
    var m = (c && c.meta) || {};
    return [m.age != null && m.age !== '' ? m.age + 'y' : '', m.sex || ''].filter(Boolean).join(' · ');
  }
  function who(c){ return [ageSex(c), stage(c)].filter(Boolean).join(' · '); }
  function meta(c){ return [TYPE[c && c.type] || 'Consultation', who(c)].filter(Boolean).join(' · '); }
  function fullMeta(c){ var m = (c && c.meta) || {}; return [ageSex(c), m.system || ''].filter(Boolean).join(' · '); }

  function stemOf(c){
    if (!c) return null;
    return c.stem || ((window.SCA_EXTRAS || {})[c.id] || {}).stem || (window.SCA_STEM || {})[c.id] || null;
  }
  function reason(c){ var s = stemOf(c); return s ? (s.reason || '') : ''; }

  var cssDone = false;
  function css(){
    if (cssDone) return; cssDone = true;
    var st = document.createElement('style');
    st.textContent =
      '.sca-rec{display:grid;grid-template-columns:minmax(0,8.5em) minmax(0,1fr);gap:6px 14px;margin-top:6px;font-size:13.5px;line-height:1.55}' +
      '.sca-rec .k{font-size:11px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;opacity:.65;padding-top:2px}' +
      '.sca-rec .v{min-width:0;overflow-wrap:anywhere}.sca-rec ul{margin:0;padding-left:1.1em}.sca-rec .who{grid-column:1/-1;font-weight:700}' +
      '@media (max-width:480px){.sca-rec{grid-template-columns:minmax(0,1fr);gap:2px}.sca-rec .v{margin-bottom:6px}}';
    (document.head || document.documentElement).appendChild(st);
  }
  // The candidate's record-style notes. Falls back to a neutral line, never to the examiner brief.
  function record(c){
    css();
    var s = stemOf(c);
    if (!s) return '<div class="sca-rec"><div class="who">' + esc(meta(c)) + '</div><div class="k">Setting</div><div class="v">' + esc((c && c.meta && c.meta.setting) || '') + '</div></div>';
    var list = function(a){ a = [].concat(a || []); return a.length ? '<ul>' + a.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : '—'; };
    return '<div class="sca-rec">' +
      '<div class="who">' + esc(s.name || '') + (s.age ? ' · ' + esc(s.age) : '') + '</div>' +
      '<div class="k">Past history</div><div class="v">' + list(s.pmh) + '</div>' +
      '<div class="k">Medication</div><div class="v">' + list(s.meds) + '</div>' +
      '<div class="k">Allergies</div><div class="v">' + esc(s.allergy || '—') + '</div>' +
      '<div class="k">Recent notes</div><div class="v">' + esc(s.recent || '—') + '</div>' +
      '<div class="k">Reason for contact</div><div class="v">' + esc(s.reason || '—') + '</div>' +
    '</div>';
  }

  window.SCA_UI = { title:title, meta:meta, who:who, fullMeta:fullMeta, stage:stage, record:record, reason:reason,
    stem:stemOf, isFree:isFree, freeFirst:freeFirst, freeOnly:freeOnly, freeIds:freeIds, files:FILES.slice() };

  /* ---------- on-demand case material ----------
     SCA_LOAD(id) fetches assets/sca-data/c/<id>.json once, merges its fields into the case in
     window.SCA_CASES and its lookup-table entries (SCA_MODELS, SCA_SC_TASKS, ...) into the
     window maps, then resolves with that case. SCA_LOAD_INTO(copy) does the same and also
     copies the material onto a tool's own copy of the case. */
  var ASSET_BASE = (me && me.src) ? me.src.replace(/sca-loader\.js[^\/]*$/, '') : '../assets/';
  var loading = {};
  function findCase(id){ var L = window.SCA_CASES || []; for (var i = 0; i < L.length; i++) if (L[i].id === id) return L[i]; return null; }
  window.SCA_LOAD = function(id){
    var c = findCase(id);
    if (!c) return Promise.resolve(null);
    if (c._full) return Promise.resolve(c);
    if (loading[id]) return loading[id];
    var url = ASSET_BASE + 'sca-data/c/' + encodeURIComponent(id) + '.json?v=' + (window.SCA_DATA_STAMP || '1');
    loading[id] = fetch(url, { credentials:'same-origin' }).then(function(r){
      if (!r.ok) throw new Error('Case ' + id + ' could not be loaded (' + r.status + ')');
      return r.json();
    }).then(function(d){
      var f = d.f || {}, m = d.m || {};
      Object.keys(f).forEach(function(k){ c[k] = f[k]; });
      Object.keys(m).forEach(function(M){ (window[M] = window[M] || {})[id] = m[M]; });
      try { Object.defineProperty(c, '_full', { value:true, enumerable:false, configurable:true }); } catch(e){ c._full = true; }
      try { Object.defineProperty(c, '_heavy', { value:Object.keys(f), enumerable:false, configurable:true }); } catch(e){}
      try { Object.defineProperty(c, '_rcgp', { value:true, enumerable:false, configurable:true }); } catch(e){}
      return c;
    }).catch(function(e){ delete loading[id]; throw e; });
    return loading[id];
  };
  window.SCA_LOAD_INTO = function(target){
    if (!target) return Promise.resolve(target);
    return window.SCA_LOAD(target.id).then(function(c){
      if (c && c !== target) (c._heavy || Object.keys(c)).forEach(function(k){ target[k] = c[k]; });
      return target;
    });
  };
  window.SCA_LOAD_ALL = function(ids){ return Promise.all((ids || (window.SCA_CASES || []).map(function(c){ return c.id; })).map(window.SCA_LOAD)); };

  /* ---------- load the case library ---------- */
  if (me && me.getAttribute('data-cases') === 'none') { if (window.SCA_RCGP) window.SCA_RCGP.normaliseAll(); return; }
  if (document.readyState !== 'loading') { if (window.console) console.warn('sca-loader.js must be a plain script tag in the page'); return; }
  var base = (me && me.src) ? me.src.replace(/sca-loader\.js[^\/]*$/, '') : '../assets/';
  var html = '';
  for (var i = 0; i < FILES.length; i++) html += '<script src="' + base + FILES[i] + '"><\/script>';
  html += '<script>window.SCA_RCGP && window.SCA_RCGP.normaliseAll();<\/script>';
  document.write(html);
})();
