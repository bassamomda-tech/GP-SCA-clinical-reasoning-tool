/* ============================================================
   Reasoning GP — LAB RESULTS REFERENCE (assets/labs-reference.js)

   A browsable reference: test → threshold bands → what the guidance
   says at each band, with the source. Reads the same ruleset as the
   old "Lab Results Actioning" tool (assets/labs/<set>.js) but uses
   only its TEXT: the band wording, what the guidance says, the time
   frame and the source. It never runs the rules, takes no patient
   values and no patient context, and computes nothing for a patient
   (owner decision, October 2026: reference, not a medical device).

   Load order on the page:
     1. the tiny RGPLabs capture shim (inline, in tools/lab-results.html)
     2. assets/retired-pathways.js (pathway links)
     3. assets/labs/generic.js     (the ruleset text)
     4. this file
   Mounts into <div data-labs-ref="generic">.
   ============================================================ */
(function(){
'use strict';
var D = document;

/* how the SOURCE classes the urgency at each band (labels only — no ranking, no "headline") */
var CLASS = {
  emergency: { icon:'🔴', label:'Emergency',                cls:'lr-emer' },
  cancer:    { icon:'🟣', label:'Suspected cancer pathway', cls:'lr-canc' },
  urgent:    { icon:'🟠', label:'Urgent',                   cls:'lr-urg'  },
  review:    { icon:'⚠',       label:'Drug review',              cls:'lr-rev'  },
  treat:     { icon:'💊', label:'Treat',                    cls:'lr-treat'},
  refer:     { icon:'↗',       label:'Refer (non-urgent)',       cls:'lr-refer'},
  repeat:    { icon:'♻',       label:'Repeat',                   cls:'lr-rep'  },
  recall:    { icon:'📞', label:'Routine recall',           cls:'lr-rec'  },
  annotate:  { icon:'📝', label:'Annotate',                 cls:'lr-ann'  }
};

function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function nl2br(s){ return esc(s).replace(/\n/g, '<br>'); }
function slugify(s){ return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); }

/* the reference range as the ruleset states it (sex-specific ranges shown for both sexes) */
function refText(t){
  var u = t.unit ? ' ' + t.unit : '';
  function rng(r){ return r && r.length === 2 ? (r[0] + '–' + r[1]) : ''; }
  if (typeof t.refByCtx === 'function'){
    var f, m;
    try { f = t.refByCtx({ female:true }); m = t.refByCtx({ female:false }); } catch(e){}
    if (f && m) return 'Women ' + rng(f) + u + ' · Men ' + rng(m) + u;
  }
  if (t.ref) return rng(t.ref) + u;
  return '';
}

function pathLinks(t){
  var list = t.pathways || (t.pathway ? [{ slug:t.pathway, label:t.label }] : []);
  if (!list.length) return '';
  var resolve = (typeof window.RGP_RESOLVE_PATHWAY === 'function')
    ? function(s){ return window.RGP_RESOLVE_PATHWAY(s, '../tools/'); }
    : function(s){ return { url:'../tools/algorithms/' + s + '.html', retired:false }; };
  return '<div class="lr-paths"><span class="lr-paths-t">Full pathway:</span> ' + list.map(function(p){
    var r = resolve(p.slug);
    return '<a href="' + esc(r.url) + '">' + esc(p.label) + ' ↗</a>';
  }).join(' ') + '</div>';
}

function bandRow(r){
  var c = CLASS[r.action] || { icon:'', label:r.action || '', cls:'lr-ann' };
  var src = r.sourceUrl
    ? '<a href="' + esc(r.sourceUrl) + '" target="_blank" rel="noopener noreferrer">' + esc(r.source) + ' ↗</a>'
    : esc(r.source || '');
  var extra = '';
  if (r.patientPhrase || r.noteTemplate){
    extra = '<details class="lr-more"><summary>Example wording (education)</summary>' +
      (r.patientPhrase ? '<div class="lr-more-b"><b>Explaining it — example phrase</b><p>' + esc(r.patientPhrase) + '</p></div>' : '') +
      (r.noteTemplate ? '<div class="lr-more-b"><b>Example record wording</b><p class="lr-note">' + nl2br(r.noteTemplate) + '</p></div>' : '') +
      '</details>';
  }
  return '<li class="lr-band ' + c.cls + '">' +
      '<div class="lr-band-when"><span class="lr-k">Band</span>' + esc(r.rule || '') + '</div>' +
      '<div class="lr-band-says"><span class="lr-k">What the guidance says</span>' +
        '<span class="lr-tag ' + c.cls + '" title="How the source classes this band">' + c.icon + ' ' + esc(c.label) + '</span> ' +
        '<b class="lr-says">' + esc(r.label || '') + '</b>' +
        (r.timeframe ? '<span class="lr-tf">Time frame in the source: ' + esc(r.timeframe) + '</span>' : '') +
      '</div>' +
      '<div class="lr-band-src"><span class="lr-k">Source</span>' + src + '</div>' +
      extra +
    '</li>';
}

function testCard(panel, t){
  var rules = t.rules || [];
  var search = (t.label + ' ' + t.id + ' ' + panel.label + ' ' + (t.note || '')).toLowerCase();
  var ref = refText(t);
  return '<article class="lr-test" id="lab-' + esc(t.id) + '" data-panel="' + esc(panel.id) + '" data-search="' + esc(search) + '">' +
      '<header class="lr-test-h">' +
        '<h3>' + esc(t.label) + (t.unit ? ' <small>(' + esc(t.unit) + ')</small>' : '') + '</h3>' +
        (ref ? '<div class="lr-ref"><span class="lr-k">Typical reference range</span>' + esc(ref) + ' <span class="lr-ref-n">— your laboratory’s range takes precedence</span></div>' : '') +
        (t.note ? '<div class="lr-ref lr-ref-note">' + esc(t.note) + '</div>' : '') +
        pathLinks(t) +
      '</header>' +
      (rules.length
        ? '<ol class="lr-bands">' + rules.map(bandRow).join('') + '</ol>'
        : '<p class="lr-none">No threshold bands are listed for this test here — see the full pathway or your laboratory’s guidance.</p>') +
    '</article>';
}

function render(host, set){
  var panels = set.panels || [];
  var total = 0;
  panels.forEach(function(p){ total += (p.tests || []).length; });
  var chips = '<button type="button" class="lr-chip on" data-p="">All panels</button>' +
    panels.map(function(p){ return '<button type="button" class="lr-chip" data-p="' + esc(p.id) + '">' + esc(p.label) + '</button>'; }).join('');
  var body = panels.map(function(p){
    return '<section class="lr-panel" data-panel="' + esc(p.id) + '">' +
        '<h2 class="lr-panel-h" id="panel-' + esc(p.id) + '">' + esc(p.label) + '</h2>' +
        (p.tests || []).map(function(t){ return testCard(p, t); }).join('') +
      '</section>';
  }).join('');
  var srcs = (set.sources || []).map(function(s){
    return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.label) + ' ↗</a></li>';
  }).join('');
  host.innerHTML =
    '<div class="lr-controls">' +
      '<label class="lr-search"><span class="lr-sr">Search by test name</span>' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
        '<input type="search" id="lrSearch" placeholder="Search by test — e.g. potassium, ferritin, TSH, PSA" autocomplete="off"></label>' +
      '<span class="lr-count"><b id="lrShown">' + total + '</b> / ' + total + ' tests</span>' +
    '</div>' +
    '<div class="lr-chips" role="group" aria-label="Filter by panel">' + chips + '</div>' +
    '<p class="lr-empty" id="lrEmpty" hidden>No test matches that search. Try the test name or its abbreviation.</p>' +
    body +
    (srcs ? '<section class="lr-sources"><h2 class="lr-panel-h">Sources</h2><ul>' + srcs + '</ul></section>' : '');

  var input = host.querySelector('#lrSearch');
  var shown = host.querySelector('#lrShown');
  var empty = host.querySelector('#lrEmpty');
  var panelSel = '';
  function apply(){
    var q = (input.value || '').trim().toLowerCase();
    var n = 0;
    host.querySelectorAll('.lr-test').forEach(function(card){
      var ok = (!panelSel || card.getAttribute('data-panel') === panelSel) && (!q || card.getAttribute('data-search').indexOf(q) !== -1);
      card.hidden = !ok; if (ok) n++;
    });
    host.querySelectorAll('.lr-panel').forEach(function(sec){
      sec.hidden = !sec.querySelector('.lr-test:not([hidden])');
    });
    shown.textContent = n;
    empty.hidden = n > 0;
  }
  input.addEventListener('input', apply);
  host.querySelectorAll('.lr-chip').forEach(function(b){
    b.addEventListener('click', function(){
      panelSel = b.getAttribute('data-p') || '';
      host.querySelectorAll('.lr-chip').forEach(function(x){ x.classList.toggle('on', x === b); });
      apply();
    });
  });
  /* deep link: #lab-<test id> opens straight at that test */
  function openHash(){
    var id = (location.hash || '').slice(1);
    if (!id) return;
    var el = D.getElementById(id);
    if (el && el.classList.contains('lr-test')){ el.hidden = false; el.scrollIntoView({ block:'start' }); }
  }
  window.addEventListener('hashchange', openHash);
  openHash();
}

function mount(){
  D.querySelectorAll('[data-labs-ref]').forEach(function(host){
    if (host.__lr) return;
    var name = host.getAttribute('data-labs-ref') || 'generic';
    var set = (window.RGP_LAB_SETS || {})[name];
    if (!set){ host.innerHTML = '<p class="lr-none">The lab reference could not be loaded. Please refresh the page.</p>'; return; }
    host.__lr = true;
    render(host, set);
  });
}
if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', mount); else mount();
})();
