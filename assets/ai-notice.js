/* ============================================================
   Reasoning GP — AI TOOL NOTICE  (assets/ai-notice.js)
   A short, consistent notice at the top of every AI-assisted tool:
   the one data rule, who is accountable for the output, and a link
   to the full policy. Self-contained — injects its own styles.

   Add to an AI tool with:
     <script src="../assets/ai-notice.js?v=2"></script>
   Optionally set window.RGP_AI_NOTICE = {use:'…'} before it loads
   to state what this particular tool is for, or {unavailable:'reason'}
   to state that the tool is withheld (suppresses the usage guidance).
   ============================================================ */
(function(){
'use strict';
if(document.getElementById('rgpAiNotice')) return;

var CFG = window.RGP_AI_NOTICE || {};

var CSS = ''
+ '.rgp-ai-notice{display:flex;gap:12px;align-items:flex-start;margin:0 0 18px;padding:12px 15px;'
+ 'background:#fffbeb;border:1px solid #fde68a;border-radius:10px;'
+ 'font-family:"DM Sans","Helvetica Neue",Helvetica,Arial,sans-serif;font-size:13px;line-height:1.55;color:#3f2d09}'
+ '.rgp-ai-notice .ain-ic{flex:none;width:22px;height:22px;border-radius:50%;background:#92400e;color:#fffbeb;'
+ 'display:grid;place-items:center;font-size:12px;font-weight:700;margin-top:1px}'
+ '.rgp-ai-notice p{margin:0}'
+ '.rgp-ai-notice p + p{margin-top:5px}'
+ '.rgp-ai-notice b{color:#7c2d12}'
+ '.rgp-ai-notice a{color:#7c2d12;font-weight:600;text-decoration:underline}'
+ '.rgp-ai-notice a:hover{color:#92400e}'
+ '@media print{.rgp-ai-notice{display:none}}';

function root(){
  var el = document.querySelector('script[src*="assets/ai-notice.js"], link[href*="assets/site.css"]');
  var u = el ? (el.getAttribute('src') || el.getAttribute('href') || '') : '';
  var m = u.match(/^(.*?)assets\//);
  return m ? m[1] : '';
}

function build(){
  var box = document.createElement('aside');
  box.id = 'rgpAiNotice';
  box.className = 'rgp-ai-notice' + (CFG.unavailable ? ' is-unavailable' : '');
  box.setAttribute('aria-label', CFG.unavailable ? 'This AI tool is unavailable' : 'How to use this AI tool safely');
  // A withheld tool must not be told to "check doses" — that presumes it is in use.
  // Set window.RGP_AI_NOTICE = {unavailable:'reason'} to state the hold instead.
  box.innerHTML = CFG.unavailable
    ? '<span class="ain-ic" aria-hidden="true">AI</span><div>'
      + '<p><b>Unavailable — ' + CFG.unavailable + '.</b> '
      + 'This tool is not part of any plan at present and its AI features are disabled for every account.</p>'
      + '<p><a href="' + root() + 'pages/ai-safety.html">AI safety and data</a></p>'
      + '</div>'
    : '<span class="ain-ic" aria-hidden="true">AI</span><div>'
    + '<p><b>AI-assisted' + (CFG.use ? ' — ' + CFG.use : '') + '.</b> '
    + 'Output can be wrong or out of date. <b>You remain the author and the decision-maker</b>: read it in full, '
    + 'check doses against the BNF and thresholds against current NICE.</p>'
    + '<p><b>Do not enter patient-identifiable data</b> — no names, dates of birth, NHS numbers or addresses. '
    + 'Age, sex and clinical facts only. <a href="' + root() + 'pages/ai-safety.html">AI safety and data</a></p>'
    + '</div>';
  return box;
}

function mount(){
  if(document.getElementById('rgpAiNotice')) return true;
  var host = document.querySelector('.tool-page') || document.querySelector('.main') || document.body;
  if(!host) return false;
  if(!document.getElementById('rgpAiNoticeCSS')){
    var s = document.createElement('style'); s.id = 'rgpAiNoticeCSS'; s.textContent = CSS;
    document.head.appendChild(s);
  }
  var hero = host.querySelector(':scope > .page-hero, :scope > .tool-hero, :scope > header');
  if(hero) hero.insertAdjacentElement('afterend', build());
  else host.insertBefore(build(), host.firstChild);
  return true;
}

function go(){ try{ mount(); }catch(e){ console.warn('RGP AI notice failed:', e); } }
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go);
else go();
window.addEventListener('load', go);
})();
