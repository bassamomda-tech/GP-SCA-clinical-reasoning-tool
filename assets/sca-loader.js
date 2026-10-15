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

  var FILES = [
    'sca-cases.js?v=4', 'sca-extras.js?v=4',
    'sca-cases2.js?v=5', 'sca-cases3.js?v=4', 'sca-cases4.js?v=4', 'sca-cases5.js?v=3',
    'sca-cases6.js?v=3', 'sca-cases7.js?v=4', 'sca-cases8.js?v=4', 'sca-cases9.js?v=3',
    'sca-cases10.js?v=4', 'sca-cases11.js?v=4', 'sca-cases12.js?v=5', 'sca-cases13.js?v=3',
    'sca-cases14.js?v=6', 'sca-cases15.js?v=5', 'sca-cases16.js?v=4', 'sca-cases17.js?v=4',
    'sca-cases18.js?v=4', 'sca-cases19.js?v=4', 'sca-cases20.js?v=4', 'sca-cases21.js?v=5',
    'sca-cases22.js?v=5', 'sca-cases23.js?v=3', 'sca-cases24.js?v=5', 'sca-cases25.js?v=4',
    'sca-cases26.js?v=5', 'sca-cases27.js?v=4', 'sca-cases28.js?v=5', 'sca-cases29.js?v=3',
    'sca-cases30.js?v=4', 'sca-cases31.js?v=4', 'sca-cases32.js?v=5', 'sca-cases33.js?v=5',
    'sca-cases34.js?v=4', 'sca-cases35.js?v=4', 'sca-cases36.js?v=4', 'sca-cases37.js?v=4',
    'sca-cases38.js?v=4', 'sca-cases39.js?v=5', 'sca-cases40.js?v=3', 'sca-cases41.js?v=4',
    'sca-cases42.js?v=3', 'sca-cases43.js?v=4', 'sca-cases44.js?v=3', 'sca-cases45.js?v=4',
    'sca-cases46.js?v=4', 'sca-cases47.js?v=4', 'sca-cases48.js?v=3', 'sca-cases49.js?v=5',
    'sca-cases50.js?v=4', 'sca-cases51.js?v=3', 'sca-cases52.js?v=4', 'sca-cases53.js?v=3',
    'sca-cases54.js?v=5', 'sca-cases55.js?v=3', 'sca-cases56.js?v=3', 'sca-cases57.js?v=4',
    'sca-cases58.js?v=5', 'sca-cases59.js?v=4', 'sca-cases60.js?v=3', 'sca-cases61.js?v=5',
    'sca-cases62.js?v=3', 'sca-cases63.js?v=3', 'sca-cases64.js?v=5', 'sca-cases65.js?v=4',
    'sca-cases66.js?v=4', 'sca-cases67.js?v=4', 'sca-cases68.js?v=3', 'sca-cases69.js?v=3',
    'sca-cases70.js?v=4', 'sca-cases71.js?v=3', 'sca-cases72.js?v=4', 'sca-cases73.js?v=3',
    'sca-cases74.js?v=4', 'sca-cases75.js?v=6', 'sca-cases76.js?v=4', 'sca-cases77.js?v=4',
    'sca-cases78.js?v=7', 'sca-cases79.js?v=4', 'sca-cases80.js?v=5', 'sca-cases-new-p.js?v=1', 'sca-cases-new-q.js?v=1', 'sca-cases-new-r.js?v=1',
    'sca-models.js?v=11', 'sca-sc-tasks-extra.js?v=1', 'sca-enrich.js?v=17', 'sca-knowledge.js?v=10', 'sca-pitfalls.js?v=4',
    'sca-addons-1.js?v=6', 'sca-addons-2.js?v=5', 'sca-addons-3.js?v=7', 'sca-addons-4.js?v=8',
    'sca-addons-5.js?v=6', 'sca-addons-6.js?v=5', 'sca-addons-7.js?v=6', 'sca-addons-8.js?v=4',
    'sca-addons-9.js?v=5', 'sca-addons-10.js?v=5', 'sca-addons-11.js?v=5', 'sca-addons-12.js?v=3',
    'sca-addons-13.js?v=4', 'sca-addons-14.js?v=4', 'sca-addons-15.js?v=7'
  ];

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

  /* ---------- load the case library ---------- */
  if (me && me.getAttribute('data-cases') === 'none') { if (window.SCA_RCGP) window.SCA_RCGP.normaliseAll(); return; }
  if (document.readyState !== 'loading') { if (window.console) console.warn('sca-loader.js must be a plain script tag in the page'); return; }
  var base = (me && me.src) ? me.src.replace(/sca-loader\.js[^\/]*$/, '') : '../assets/';
  var html = '';
  for (var i = 0; i < FILES.length; i++) html += '<script src="' + base + FILES[i] + '"><\/script>';
  html += '<script>window.SCA_RCGP && window.SCA_RCGP.normaliseAll();<\/script>';
  document.write(html);
})();
