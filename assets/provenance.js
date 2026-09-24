/* ============================================================
   Reasoning GP — PROVENANCE STRIP  (assets/provenance.js)
   Renders a visible "Last reviewed · Next review · Sources" band
   directly under the page title on protocols, algorithms and cases.

   IT NEVER INVENTS A DATE. Where no clinical review has been
   recorded it says so, which is the point: the strip makes the
   governance gap visible instead of hiding it in 12px grey type
   at the foot of the page.

   Data resolution order:
     1. window.RGP_PROV_DATA set by the page
     2. RGP_PROV.DATES[slug]  — the governance registry below
     3. the MG protocol data object (reviewed / nextReview / guideline)
     4. the page's own legacy .rgp-reviewed stamp
   ============================================================ */
(function(){
'use strict';

/* ---- review cycle policy -------------------------------------------- */
var CYCLE_STD = 12, CYCLE_HIGH = 6;   // months
var DUE_WINDOW = 60;                  // days before next review = "review due"

/* High-risk topics: 6-monthly cycle + enhanced review, per the P0 list.
   Matched against the page slug. */
var HIGH_RISK = ['chest-pain','acs','sepsis','anaphylaxis','asthma','asthma-adults','asthma-children',
'copd','copd-exacerbation','anticoagulation','doac','doac-prescribing','warfarin','atrial-fibrillation',
'dka','diabetic-ketoacidosis','hhs','insulin','insulin-type-2-diabetes','hyperkalaemia','hypokalaemia',
'aki','acute-kidney-injury','headache','subarachnoid-haemorrhage','stroke','tia','tia-stroke','red-eye',
'visual-loss','sudden-visual-loss','meningitis','suicidal-ideation','self-harm','depression',
'domestic-abuse','safeguarding','safeguarding-children','cauda-equina','spinal-cord-compression',
'ectopic-pregnancy','testicular-torsion','pe','dvt','vte','heart-failure','pregnancy-medicines',
'nausea-vomiting-pregnancy','breathlessness','palpitations','sepsis-children','febrile-child',
'haematological-cancers','breast-cancer','suspected-cancer',
/* NG12 two-week-wait triage pathways — a missed cancer threshold is the
   highest-consequence error on the site, so these follow the 6-monthly cycle.
   Governance owns this list; add a slug here when a pathway's primary action
   is a 2WW referral or a direct-access cancer investigation. */
'dyspepsia','dysphagia','rectal-bleeding','haematuria','haematuria-children','high-psa',
'neck-lump','pigmented-skin-lesions','weight-loss','jaundice','abdominal-mass','nipple-problems',
'vaginal-bleeding','vaginal-bleeding-pregnancy','lymphadenopathy','purpura-petechiae',
'paediatric-cancer-referral','splenomegaly','testicular-lump','abnormal-cancer-markers',
'abnormal-immunoglobulin','pancytopenia','mscc','svco','neutropenic-sepsis','cauda-equina',
/* time-critical non-cancer emergencies */
'anaphylaxis','hypoglycaemia','hypernatraemia','hyponatraemia','confusion','delirium','tloc',
'fits-funny-turns','fever-children','vision-loss','flashes-floaters','scrotal-pain','renal-colic'];

/* ---- governance registry --------------------------------------------
   Fill in as pages are clinically reviewed. Keys are page slugs.
     reviewed : date the named clinician signed the page off
     next     : override the computed next-review date (optional)
     version  : page version string (optional)
     by       : reviewer role/name for the tooltip (optional)
   Anything absent renders honestly as "not recorded".                   */
var DATES = {
  /* 'hypertension': {reviewed:'6 September 2026', next:'6 March 2027', version:'v3.0'}, */
};

/* ---- review rounds --------------------------------------------------
   A round is a dated sign-off across a whole class of pages. It is an
   ASSERTION BY THE CLINICAL LEAD, not an automatic publishing stamp — that
   distinction is the whole point of this file, so a round must only be
   added when the reviewer has actually read the set.

   Rounds apply by page KIND. Where a page also carries its own `reviewed`
   date, the LATER of the two wins, so a round never backdates a page that
   was signed off more recently.

   Every kind now carries a round. If a NEW kind of clinical page is added
   later it must be added here explicitly — it will report "Review not
   verified" until it is, which is the correct default.

   `by` is deliberately unset: the strip states THAT the page was reviewed
   and when, and the named accountable clinician is published once on
   pages/content-safety.html rather than repeated on every page. Setting
   `by` here would put the name back into the strip on all 519 pages.  */
var ROUNDS = [
  {kind:'protocol',  date:'20 September 2026'},
  {kind:'algorithm', date:'20 September 2026'},
  {kind:'case',      date:'20 September 2026'}
];
function roundFor(k){
  for(var i = 0; i < ROUNDS.length; i++) if(ROUNDS[i].kind === k) return ROUNDS[i];
  return null;
}

/* ---- date helpers ---------------------------------------------------- */
var M = {january:0,february:1,march:2,april:3,may:4,june:5,july:6,august:7,september:8,october:9,
november:10,december:11,jan:0,feb:1,mar:2,apr:3,jun:5,jul:6,aug:7,sep:8,sept:8,oct:9,nov:10,dec:11};
var MSHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function parseDate(s){
  if(!s) return null;
  s = String(s).trim();
  var m = s.match(/^(\d{1,2})\s+([A-Za-z]+)\.?\s+(\d{4})$/);
  if(m && M[m[2].toLowerCase()] !== undefined) return {d:new Date(+m[3], M[m[2].toLowerCase()], +m[1]), day:true};
  m = s.match(/^([A-Za-z]+)\.?\s+(\d{4})$/);
  if(m && M[m[1].toLowerCase()] !== undefined) return {d:new Date(+m[2], M[m[1].toLowerCase()], 1), day:false};
  m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if(m) return {d:new Date(+m[1], +m[2]-1, +m[3]), day:true};
  return null;
}
function fmt(p){
  if(!p) return null;
  return (p.day ? p.d.getDate()+' ' : '') + MSHORT[p.d.getMonth()] + ' ' + p.d.getFullYear();
}
function addMonths(p, n){
  var d = new Date(p.d.getTime()); d.setMonth(d.getMonth() + n);
  return {d:d, day:p.day};
}

/* ---- page identity --------------------------------------------------- */
function slug(){
  var f = location.pathname.split('/').pop() || '';
  return f.replace(/\.html?$/i,'').toLowerCase();
}
/* Relative prefix to the site root, taken from this script's own path rather
   than from location.pathname — the pages sit at two different depths and the
   site is also served from nested preview paths, where counting URL segments
   gives the wrong number of ../ steps. */
function root(){
  var el = document.querySelector('script[src*="assets/provenance.js"], link[href*="assets/provenance.css"]');
  var u = el ? (el.getAttribute('src') || el.getAttribute('href') || '') : '';
  var m = u.match(/^(.*?)assets\//);
  return m ? m[1] : '';
}
function kind(){
  var p = location.pathname;
  if(/\/tools\/management\//.test(p)) return 'protocol';
  if(/\/tools\/algorithms\//.test(p)) return 'algorithm';
  if(/\/cases\//.test(p)) return 'case';
  return 'page';
}

/* ---- gather what the page already knows ------------------------------ */
/* Capture the protocol data object as the engine renders it, so the strip reads
   the SOURCE fields rather than the engine's rendered fallback text. The engine
   prints "Reviewed: July 2026" when a page has set no date at all; reading that
   back would turn a missing review into a fake one. Requires this script to load
   after management-engine.js and before the page's MG.render(...) call. */
if(window.MG && typeof window.MG.render === 'function' && !window.MG._wrapped){
  var _render = window.MG.render;
  window.MG._wrapped = true;
  window.MG.render = function(d){ window.MG._data = d; return _render.apply(this, arguments); };
}
function fromMG(){
  var d = window.MG && window.MG._data;
  if(!d) return {};
  return {reviewed:d.reviewed, next:d.nextReview, guideline:d.guideline, stampOnly:!d.reviewed};
}
function fromLegacyStamp(){
  var el = document.querySelector('.rgp-reviewed');
  if(!el) return {};
  var m = (el.textContent||'').match(/Reviewed:\s*([^·\n]+)/i);
  var n = (el.textContent||'').match(/next review due\s+([^·\n]+)/i);
  /* The legacy stamp is applied site-wide as a default, so a month-only value
     from it is a PUBLISHING stamp, not evidence that a named clinician signed
     the page off. Flag it rather than promote it to a review date. */
  return {reviewed: m ? m[1].trim() : null, next: n ? n[1].trim() : null, stampOnly:true};
}
function fromVersionTag(){
  /* No \b before the v: textContent concatenates adjacent pills with no
     separator ("…haematuria 2WWv3.0 · reviewed Sep 2026"), so a word boundary
     never matches and this silently returned nothing on every page. */
  var t = document.body.textContent.match(/v(\d+\.\d+)\s*·\s*(?:reviewed\s+|updated\s+|published\s+)?([A-Z][a-z]{2,8})\.?\s+(20\d\d)/);
  return t ? {version:'v'+t[1], published:t[2]+' '+t[3]} : {};
}

/* ---- sources --------------------------------------------------------- */
var NICE_RE = /\bNICE\s+(NG|CG|TA|QS|DG|MTG|IPG|PH|ES)\s?(\d+)/gi;
var BODY_RE = /\b(BNFC|BNF|SIGN\s?\d{2,3}|SIGN|UKHSA|MHRA|NHS\s+England|RCGP|RCOG|RCPCH|RCEM|BASHH|BSG|BTS|BAD|BSR|BOA|BHIVA|FSRH|JBDS|KDIGO|GOLD|ESC|EULAR|GMC|BHS|BSH|UKMEC|BAUS|RCOphth|Resuscitation Council UK)\b/g;

function explicitSources(){
  var out = [], seen = {};
  document.querySelectorAll('#evidence .mg-ev li > b, #evidence .evlist li > b, .evlist li > b').forEach(function(b){
    var t = (b.textContent||'').trim().replace(/[—–-]\s*$/,'').trim();
    if(t && !/^No NICE guideline/i.test(t) && !seen[t]){ seen[t] = 1; out.push(t); }
  });
  return out;
}
function citedGuidance(){
  var txt = document.body.textContent || '';
  var seen = {}, nice = [], other = [], m;
  NICE_RE.lastIndex = 0;
  while((m = NICE_RE.exec(txt))){
    var code = 'NICE ' + m[1].toUpperCase() + m[2];
    if(!seen[code]){ seen[code] = 1; nice.push(code); }
  }
  BODY_RE.lastIndex = 0;
  while((m = BODY_RE.exec(txt))){
    var b = m[1].replace(/\s+/g,' ');
    if(!seen[b]){ seen[b] = 1; other.push(b); }
  }
  return nice.concat(other);
}
function niceUrl(label){
  var m = label.match(/^NICE\s+(NG|CG|TA|QS|DG|MTG|IPG|PH|ES)(\d+)$/i);
  return m ? 'https://www.nice.org.uk/guidance/' + (m[1]+m[2]).toLowerCase() : null;
}

/* ---- build ----------------------------------------------------------- */
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function build(){
  var s = slug(), k = kind();
  var reg = DATES[s] || {};
  if(reg.reviewed) reg = Object.assign({}, reg, {stampOnly:false});
  var pd = window.RGP_PROV_DATA || {};
  if(pd.reviewed) pd = Object.assign({}, pd, {stampOnly:false});
  var data = Object.assign({}, fromVersionTag(), fromLegacyStamp(), fromMG(), reg, pd);

  var highRisk = HIGH_RISK.indexOf(s) !== -1 || !!data.risk;
  var cycle = data.cycle || (highRisk ? CYCLE_HIGH : CYCLE_STD);

  var rev = parseDate(data.reviewed);
  var stamp = data.stampOnly ? rev : null;   /* site-wide publishing stamp, not a sign-off */
  if(stamp) rev = null;

  /* A review round signs off a whole class of pages on one date. Take the
     LATER of the page's own sign-off and the round, so a round can never
     backdate a page that was verified more recently. */
  var rd = roundFor(k), by = data.by || null, nextOverride = data.next;
  if(rd){
    var rdd = parseDate(rd.date);
    if(rdd && (!rev || rdd.d > rev.d)){
      rev = rdd; by = rd.by; stamp = null;
      /* The page's own nextReview was computed from the date the round has now
         superseded, so it is stale by definition — recompute from the round. */
      nextOverride = null;
    }
    else if(rev && !by){ by = rd.by; }
  }

  var next = parseDate(nextOverride) || (rev ? addMonths(rev, cycle) : null);

  var state = 'unrecorded', word = 'Review not recorded', glyph = '–';
  if(rev && next){
    var days = Math.round((next.d - new Date()) / 86400000);
    if(days < 0){ state='overdue'; word='Review overdue'; glyph='!'; }
    else if(days <= DUE_WINDOW){ state='due'; word='Review due'; glyph='!'; }
    else { state='current'; word='Current'; glyph='✓'; }
  } else if(stamp){
    word = 'Review not verified';
  }

  var facts = [];
  facts.push(['Last reviewed', rev ? fmt(rev) : null, 'no sign-off recorded']);
  if(rev && by) facts.push(['Reviewed by', by, '']);
  facts.push(['Next review', next ? fmt(next) : null, cycle + '-monthly cycle']);
  if(stamp) facts.push(['Content stamp', fmt(stamp), '']);
  if(data.version) facts.push(['Version', data.version, '']);
  else if(data.published && !stamp) facts.push(['Published', data.published, '']);
  if(next) facts.push(['Review cycle', cycle + '-monthly' + (highRisk ? ' · high-risk' : ''), '']);
  else if(highRisk) facts.push(['Risk tier', 'High-risk · 6-monthly', '']);

  var factHtml = facts.map(function(f){
    var cls = f[0] === 'Reviewed by' ? ' class="pv-by"' : '';
    var dd = f[1]
      ? '<dd' + cls + '>' + esc(f[1]) + '</dd>'
      : '<dd class="pv-unset">' + esc(f[2] || 'not recorded') + '</dd>';
    return '<div><dt>' + esc(f[0]) + '</dt>' + dd + '</div>';
  }).join('');

  var title = (document.querySelector('h1, .mg-stem-title, .sb-t') || {}).textContent || document.title;
  title = title.trim().slice(0, 90);
  var concern = 'mailto:bassamomda@gmail.com'
    + '?subject=' + encodeURIComponent('Content concern: ' + title)
    + '&body=' + encodeURIComponent('Page: ' + location.href + '\n\nWhat appears to be wrong:\n\n\nWhat the correct guidance says (and its source):\n\n');

  /* sources row */
  var ex = explicitSources(), chips, moreHtml = '', note = '';
  var noNice = /No NICE guideline/.test(document.body.textContent || '');
  if(ex.length){
    chips = ex.slice(0, 6);
    moreHtml = document.querySelector('#evidence')
      ? '<a class="pv-more" href="#evidence">Evidence panel · all ' + ex.length + ' sources →</a>' : '';
  } else {
    var cited = citedGuidance();
    chips = cited.slice(0, 8);
    if(cited.length > chips.length) moreHtml = '<span class="pv-chip pv-chip-rest">+' + (cited.length - chips.length) + ' more</span>';
    if(!chips.length) note = 'Sources are named in the footnote at the end of this page.';
  }
  if(noNice){
    chips = chips.filter(function(c){ return !/^(?:NICE|NICE\s+NICE|No NICE guideline.*)$/i.test(String(c).trim()); });
    var g = (window.MG && window.MG._data && window.MG._data.guideline) || '';
    note = g === 'No NICE guideline' ? 'No NICE guideline covers this condition. The sources named on this page are under review.'
                                     : 'NICE guidance on this condition is limited in scope \u2014 see the Evidence panel. Sources are under review.';
  }
  var chipHtml = chips.map(function(c){
    var u = niceUrl(c);
    return u ? '<a class="pv-chip" href="' + u + '" target="_blank" rel="noopener">' + esc(c) + '</a>'
             : '<span class="pv-chip">' + esc(c) + '</span>';
  }).join('');

  var srcRow = '<div class="pv-row pv-src"><span class="pv-lbl">Anchored to</span>'
    + '<span class="pv-chips">' + chipHtml + '</span>' + moreHtml
    + (note ? '<p class="pv-note">' + esc(note) + '</p>' : '')
    + '</div>';

  var unrecordedNote = '';
  if(state === 'unrecorded'){
    unrecordedNote = stamp
      ? '<p class="pv-note">This ' + k + ' carries the site-wide content stamp of ' + esc(fmt(stamp))
        + ', but no named clinical sign-off has been logged against it. Its guidance links are listed below — check doses against the current BNF and thresholds against live NICE.</p>'
      : '<p class="pv-note">No clinical review has been logged for this ' + k
        + ' yet. Check doses against the current BNF and thresholds against live NICE.</p>';
  }

  var el = document.createElement('section');
  el.className = 'rgp-prov rgp-prov-' + state;
  el.id = 'rgpProvStrip';
  el.setAttribute('aria-label', 'Review status and evidence sources for this page');
  el.innerHTML =
    '<div class="pv-row">'
      + '<span class="pv-status"><span class="pv-glyph" aria-hidden="true">' + glyph + '</span>' + esc(word) + '</span>'
      + '<dl class="pv-facts">' + factHtml + '</dl>'
      + '<span class="pv-links">'
        + '<a class="pv-report" href="' + root() + 'pages/content-safety.html">How we keep content safe</a>'
        + '<a class="pv-report" href="' + concern + '">Report a concern</a>'
      + '</span>'
      + unrecordedNote
    + '</div>'
    + (chips.length || note ? srcRow : '');
  return el;
}

/* ---- mount ----------------------------------------------------------- */
function anchor(){
  var ph = document.getElementById('rgpProv');
  if(ph) return {node:ph, mode:'replace'};
  var mg = document.querySelector('#mgRoot .mg-meta') || document.querySelector('#mgRoot .mg-stem');
  if(mg) return {node:mg, mode:'after'};
  var st = document.querySelector('.stem-banner');
  if(st) return {node:st, mode:'after'};
  var ch = document.querySelector('.case-head');
  if(ch) return {node:ch, mode:'after'};
  var h1 = document.querySelector('.tool-page h1, main h1, h1');
  if(h1) return {node:h1.closest('header, .hero, .stem, div') || h1, mode:'after'};
  return null;
}

function mount(){
  if(document.getElementById('rgpProvStrip')) return true;
  var a = anchor();
  if(!a) return false;
  var el = build();
  if(a.mode === 'replace') a.node.replaceWith(el);
  else a.node.insertAdjacentElement('afterend', el);
  /* the strip absorbs the legacy foot stamp — don't say it twice */
  document.querySelectorAll('.rgp-reviewed').forEach(function(n){ n.hidden = true; });
  return true;
}

function start(){
  if(mount()) return;
  /* protocols render asynchronously into #mgRoot — wait for it */
  var tries = 0;
  var iv = setInterval(function(){
    if(mount() || ++tries > 40) clearInterval(iv);
  }, 75);
}

if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
else start();

/* The accessibility toolkit rides along with this file: provenance.js is the
   one asset present on every clinical page, so loading a11y.js from here saves
   adding a second script tag to 519 pages. site.js loads it for the hubs and
   tools; both sides guard on window.__rgpA11yDone and use the same ?v= so the two
   entry points share one cache entry.

   NOT on print copies: they are documents, not the app. a11y.js also refuses to
   build there, but a print copy should not even fetch it. */
(function(){
  if(document.querySelector('meta[name="omelette-print-source"]')) return;
  if(window.__rgpA11yDone || document.querySelector('script[src*="assets/a11y.js"]')) return;
  var s = document.createElement('script');
  s.src = root() + 'assets/a11y.js?v=2';
  document.head.appendChild(s);
})();

window.RGP_PROV = {DATES:DATES, ROUNDS:ROUNDS, HIGH_RISK:HIGH_RISK, mount:mount, build:build, parseDate:parseDate, roundFor:roundFor};
})();
