/* ============================================================
   Reasoning GP — REFERENCE NOTICE + CLINICAL-JUDGEMENT FOOTER
   (assets/ref-notice.js)

   One shared component for the "reference, not a medical device"
   position (owner decision, October 2026 — Route 1):

   1. The site-wide footer line: "Education and reference for
      healthcare professionals …" + the company / ICO line.
   2. The short notice that sits above every decision-type tool:
      "Reference only — supports, never replaces, clinical
      judgement. Check the source and the patient."

   Loaded once per page by site.js (hubs, tools, marketing pages)
   and by provenance.js (protocols, pathways, cases). It guards
   against running twice. Not on print copies.

   Where the notice goes:
     - any element with a data-ref-notice attribute (filled in);
     - above any embedded tool: [data-medchooser], [data-labs];
     - pathway and protocol pages: straight under the review strip.
   In embed mode (a tool shown inside a hub page) neither the
   notice nor the footer line is added: the hub page carries them.
   ============================================================ */
(function(){
'use strict';
if (window.__rgpRefNotice) return;
window.__rgpRefNotice = true;

/* ===== OWNER: the four company values. Replace each [[...]] once; nothing else changes. ===== */
var RGP_LEGAL = { COMPANY_NAME:'BDYAM Medical Services Ltd', COMPANY_NUMBER:'16892799', REGISTERED_OFFICE:'[[REGISTERED_OFFICE]]', ICO_NUMBER:'[[ICO_NUMBER]]' };

var NOTICE_TEXT = 'Reference only — supports, never replaces, clinical judgement. Check the source and the patient.';
var FOOT_TEXT = 'Education and reference for healthcare professionals. It supports, but never replaces, clinical judgement — always check against the source guidance and the patient in front of you.';

var D = document;
var PRINT = !!D.querySelector('meta[name="omelette-print-source"]') || /-print\.html?$/i.test(location.pathname);
if (PRINT) return;
var EMBED = /[?&]embed=1/.test(location.search) || D.documentElement.hasAttribute('data-rgp-embed');

function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

/* site root, worked out from this script's own address (pages sit 0–3 folders deep) */
function root(){
  var el = D.querySelector('script[src*="assets/ref-notice.js"]') || D.querySelector('script[src*="assets/site.js"], script[src*="assets/provenance.js"], link[href*="assets/site.css"]');
  var u = el ? (el.getAttribute('src') || el.getAttribute('href') || '') : '';
  var m = u.match(/^(.*?)assets\//);
  return m ? m[1] : '';
}
var ROOT = root();
var HAS_SITE = !!D.querySelector('script[src*="assets/site.js"]');
var IP_URL = ROOT + 'pages/intended-purpose.html';

/* a value still holding its [[PLACEHOLDER]] shows highlighted, so a gap is never hidden */
function val(k){
  var v = RGP_LEGAL[k] || '';
  return /^\[\[.*\]\]$/.test(v) ? '<span class="rgp-legal-fill">' + esc(v) + '</span>' : esc(v);
}

/* company line: only the values the owner has filled in are shown; an unfilled [[PLACEHOLDER]] is left out */
function filled(k){ var v = RGP_LEGAL[k] || ''; return v && !/^\[\[.*\]\]$/.test(v) ? esc(v) : ''; }
function legalLine(){
  var parts = [];
  if (filled('COMPANY_NAME')) parts.push('© ' + new Date().getFullYear() + ' ' + filled('COMPANY_NAME'));
  if (filled('COMPANY_NUMBER')) parts.push('Company no. ' + filled('COMPANY_NUMBER'));
  if (filled('REGISTERED_OFFICE')) parts.push('Registered office: ' + filled('REGISTERED_OFFICE'));
  if (filled('ICO_NUMBER')) parts.push('ICO registration: ' + filled('ICO_NUMBER'));
  return parts.length ? '<p class="rgp-legal-line">' + parts.join(' · ') + '</p>' : '';
}

/* ---- styles (one block, injected once) ---- */
function css(){
  if (D.getElementById('rgp-ref-notice-css')) return;
  var s = D.createElement('style');
  s.id = 'rgp-ref-notice-css';
  s.textContent = [
    '.rgp-ref-notice{display:flex;align-items:flex-start;gap:9px;box-sizing:border-box;max-width:100%;margin:10px 0 16px;padding:9px 13px;border:1px solid #e7d9b0;border-left:4px solid #caa23f;border-radius:0 10px 10px 0;background:#fffbeb;color:#5b4410;font:500 13px/1.5 "DM Sans",system-ui,sans-serif;overflow-wrap:anywhere}',
    '.rgp-ref-notice .rgp-rn-ic{flex:none;font-size:14px;line-height:1.45}',
    '.rgp-ref-notice b{font-weight:700;color:#3f2f08}',
    '.rgp-ref-notice a{color:#0f5a55;font-weight:700;text-decoration:underline;text-underline-offset:2px;white-space:nowrap}',
    '.rgp-ref-notice a:hover{color:#b54c2b}',
    '.rgp-ref-notice.rgp-rn-clinical{margin-top:-8px;margin-bottom:18px}',
    'body > .rgp-ref-notice{max-width:1140px;margin-left:auto;margin-right:auto}',
    '.rgp-cj-line{font-size:12px;line-height:1.6;color:rgba(231,242,240,.82);max-width:820px;margin:0 auto}',
    '.rgp-cj-line a{color:#fff;font-weight:600;text-decoration:underline;text-underline-offset:2px;white-space:nowrap}',
    '.rgp-legal-line{font-size:11.5px;line-height:1.6;color:rgba(231,242,240,.66);max-width:820px;margin:8px auto 0}',
    '.rgp-legal-fill{background:rgba(202,162,63,.18);border:1px dashed rgba(202,162,63,.7);border-radius:4px;padding:0 4px;color:#b7791f;font-weight:600}',
    '.rgp-footer .rgp-legal-fill{color:#ffe6a8}',
    '.rgp-cj-foot{box-sizing:border-box;margin:28px 0 0;padding:16px 20px 20px;border-top:1px solid #e5e1d8;background:#f7f5ef;text-align:center;font:400 12px/1.6 "DM Sans",system-ui,sans-serif;color:#57534e}',
    '.rgp-cj-foot .rgp-cj-line{color:#44403c}',
    '.rgp-cj-foot .rgp-cj-line a{color:#0f5a55}',
    '.rgp-cj-foot .rgp-legal-line{color:#78716c}',
    '@media print{.rgp-ref-notice,.rgp-cj-foot{display:none!important}}'
  ].join('\n');
  (D.head || D.documentElement).appendChild(s);
}

/* ---- 1. the notice ---- */
function noticeEl(extraClass){
  var d = D.createElement('div');
  d.className = 'rgp-ref-notice' + (extraClass ? ' ' + extraClass : '');
  d.setAttribute('role', 'note');
  d.innerHTML = '<span class="rgp-rn-ic" aria-hidden="true">ℹ️</span><span><b>Reference only</b> — supports, never replaces, clinical judgement. Check the source and the patient. <a href="' + esc(IP_URL) + '">Intended purpose</a></span>';
  return d;
}
function hasNoticeBefore(node){
  var p = node.previousElementSibling;
  return !!(p && p.classList && p.classList.contains('rgp-ref-notice'));
}
function placeExplicit(){
  D.querySelectorAll('[data-ref-notice]').forEach(function(slot){
    if (slot.__rgpRn) return;
    slot.__rgpRn = true;
    slot.replaceWith(noticeEl());
  });
}
function placeEmbedded(){
  D.querySelectorAll('[data-medchooser], [data-labs], [data-labs-ref]').forEach(function(host){
    if (host.__rgpRn || hasNoticeBefore(host)) return;
    host.__rgpRn = true;
    host.insertAdjacentElement('beforebegin', noticeEl());
  });
}
/* pathways and protocols: under the review strip (provenance.js), or under the title */
var CLINICAL = /\/tools\/(algorithms|management)\/[^\/]+\.html?$/i.test(location.pathname);
function placeClinical(force){
  if (!CLINICAL || D.querySelector('.rgp-ref-notice.rgp-rn-clinical')) return true;
  var strip = D.getElementById('rgpProvStrip');
  var anchor = strip;
  if (!anchor && force){
    var h1 = D.querySelector('#mgRoot .mg-stem, .stem-banner, main h1, h1');
    if (h1) anchor = h1.closest('header, .hero, .stem, .mg-stem') || h1;
  }
  if (!anchor) return false;
  anchor.insertAdjacentElement('afterend', noticeEl('rgp-rn-clinical'));
  return true;
}

/* ---- 2. the footer line ---- */
function footLineHtml(){
  return '<p class="rgp-cj-line">' + esc(FOOT_TEXT) + ' <a href="' + esc(IP_URL) + '">Intended purpose →</a></p>' +
    legalLine();
}
function placeFooter(){
  if (EMBED || D.querySelector('.rgp-cj-line')) return true;
  /* site.js pages: fill the legal slot of the site footer */
  var slot = D.querySelector('.rgp-footer [data-rgp-legal]');
  if (slot){ slot.innerHTML = footLineHtml(); return true; }
  var legal = D.querySelector('.rgp-footer .rgp-foot-legal-inner');
  if (legal){ legal.insertAdjacentHTML('afterbegin', footLineHtml()); return true; }
  if (D.querySelector('.rgp-footer')) return false;
  return false;
}
function placeFooterStandalone(){
  /* protocols, pathways and cases without the site footer: a small band at the end of the page */
  if (EMBED || D.querySelector('.rgp-cj-line') || D.querySelector('.rgp-footer')) return;
  var f = D.createElement('div');
  f.className = 'rgp-cj-foot';
  f.setAttribute('data-screen-label', 'Clinical judgement line');
  f.innerHTML = footLineHtml();
  D.body.appendChild(f);
}

/* ---- run ---- */
function tick(final){
  css();
  if (!EMBED){
    placeExplicit();
    placeEmbedded();
    placeClinical(final);
  }
  var done = placeFooter();
  if (!done && (final || !HAS_SITE)) placeFooterStandalone();
}
function start(){
  tick(false);
  /* protocols render into #mgRoot and the review strip / site footer arrive a moment later */
  var n = 0;
  var iv = setInterval(function(){
    n++;
    var last = n >= 30;
    tick(last);
    if (last || (D.querySelector('.rgp-cj-line') && (!CLINICAL || D.querySelector('.rgp-rn-clinical')))) {
      clearInterval(iv);
      if (!last) { placeExplicit(); placeEmbedded(); }
    }
  }, 100);
}
if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', start); else start();

window.RGPRefNotice = { text: NOTICE_TEXT, footText: FOOT_TEXT, legal: RGP_LEGAL, el: noticeEl, refresh: function(){ tick(false); } };
})();
