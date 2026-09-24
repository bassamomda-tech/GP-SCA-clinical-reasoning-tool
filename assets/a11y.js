/* ============================================================
   Reasoning GP — ACCESSIBILITY TOOLKIT  (assets/a11y.js)
   Self-contained: injects its own styles, button and panel.
   Loaded once per page by provenance.js (clinical pages) or
   site.js (hubs and tools) — both guard on window.__rgpA11y.

   Preferences persist in localStorage under 'rgp-a11y' and are
   applied as data-* attributes on <html>, so every rule below is
   a plain attribute selector and nothing depends on JS at paint.
   ============================================================ */
(function(){
'use strict';
/* The guard is set only after a SUCCESSFUL build (see ensure() below), not on
   entry: a partial run used to set it immediately, which permanently blocked
   the second loader from retrying and left ~173 pages with no control at all. */
if(window.__rgpA11yDone) return;

var KEY = 'rgp-a11y';
var DEFAULTS = {text:'100', font:'default', space:'default', contrast:'off', motion:'auto', noise:'off'};
var FONT_URL = 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap';

function read(){
  try{ return Object.assign({}, DEFAULTS, JSON.parse(localStorage.getItem(KEY) || '{}')); }
  catch(e){ return Object.assign({}, DEFAULTS); }
}
function write(s){ try{ localStorage.setItem(KEY, JSON.stringify(s)); }catch(e){} }

var state = read();

function loadFont(){
  if(document.getElementById('rgpA11yFont')) return;
  var l = document.createElement('link');
  l.id = 'rgpA11yFont'; l.rel = 'stylesheet'; l.href = FONT_URL;
  document.head.appendChild(l);
}

function apply(){
  var h = document.documentElement;
  h.setAttribute('data-a11y-text', state.text);
  h.setAttribute('data-a11y-font', state.font);
  h.setAttribute('data-a11y-space', state.space);
  h.setAttribute('data-a11y-contrast', state.contrast);
  h.setAttribute('data-a11y-motion', state.motion);
  h.setAttribute('data-a11y-noise', state.noise);
  if(state.font === 'readable') loadFont();
  var on = (state.text !== '100') || state.font !== 'default' || state.space !== 'default'
        || state.contrast === 'on' || state.motion === 'off' || state.noise === 'on';
  h.setAttribute('data-a11y-active', on ? 'on' : 'off');
}

var CSS = [
/* --- text size: browser-zoom semantics, so layout reflows rather than clips --- */
'html[data-a11y-text="115"] body{zoom:1.15}',
'html[data-a11y-text="130"] body{zoom:1.3}',

/* --- readable font: Atkinson Hyperlegible, designed for low vision --- */
'html[data-a11y-font="readable"] body,html[data-a11y-font="readable"] body *:not(.material-icons):not([class*="icon"]){font-family:"Atkinson Hyperlegible","Verdana",sans-serif!important}',
'html[data-a11y-font="readable"] body{letter-spacing:.012em;word-spacing:.08em}',

/* --- spacing: WCAG 2.2 text-spacing targets --- */
'html[data-a11y-space="loose"] p,html[data-a11y-space="loose"] li,html[data-a11y-space="loose"] td,html[data-a11y-space="loose"] dd{line-height:1.85!important}',
'html[data-a11y-space="loose"] p{margin-bottom:1.1em}',
'html[data-a11y-space="loose"] li{margin-bottom:.45em}',

/* --- higher contrast: darken ink, strengthen every hairline --- */
'html[data-a11y-contrast="on"]{--ink:#000;--ink-2:#13181f;--muted:#40474f;--muted-2:#40474f;--line:#9aa1a8;--line-2:#6f767d;--teal-2:#0a3d3a;--rust:#8c3a1f;--rust-2:#7a3019}',
'html[data-a11y-contrast="on"] body{color:#13181f}',
'html[data-a11y-contrast="on"] a{text-decoration:underline}',
'html[data-a11y-contrast="on"] .pv-facts dt,html[data-a11y-contrast="on"] .pv-lbl{color:#40474f}',
'html[data-a11y-contrast="on"] table,html[data-a11y-contrast="on"] th,html[data-a11y-contrast="on"] td{border-color:#9aa1a8!important}',

/* --- reduced motion --- */
'html[data-a11y-motion="off"] *,html[data-a11y-motion="off"] *::before,html[data-a11y-motion="off"] *::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;scroll-behavior:auto!important}',

/* --- lower visual noise: decoration only, never a safety colour --- */
'html[data-a11y-noise="on"] .page-hero{background:var(--bg-soft)!important}',
'html[data-a11y-noise="on"] *{box-shadow:none!important}',
'html[data-a11y-noise="on"] .page-card:hover,html[data-a11y-noise="on"] .btn:hover{transform:none!important}',

/* --- the control itself --- */
'.rgp-a11y-btn{position:fixed;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));z-index:9500;width:46px;height:46px;border-radius:50%;border:1px solid rgba(255,255,255,.18);background:#0c4a47;color:#f3ede0;cursor:pointer;display:grid;place-items:center;box-shadow:0 8px 22px rgba(8,40,38,.3);font:inherit;padding:0}',
'.rgp-a11y-btn:hover{background:#0e5c58}',
'.rgp-a11y-btn:focus-visible{outline:3px solid #136a65;outline-offset:3px}',
'.rgp-a11y-btn svg{width:24px;height:24px;fill:currentColor}',
'html[data-a11y-active="on"] .rgp-a11y-btn::after{content:"";position:absolute;top:-1px;right:-1px;width:12px;height:12px;border-radius:50%;background:#caa23f;border:2px solid #0c4a47}',

'.rgp-a11y-panel{position:fixed;right:16px;bottom:calc(72px + env(safe-area-inset-bottom));z-index:9501;width:min(340px,calc(100vw - 32px));max-height:min(78vh,620px);overflow:auto;background:#fbf8f1;border:1px solid #d8cfba;border-radius:14px;box-shadow:0 18px 50px rgba(8,40,38,.24);padding:18px 18px 16px;font-family:"DM Sans","Helvetica Neue",Helvetica,Arial,sans-serif;color:#15202b}',
'.rgp-a11y-panel[hidden]{display:none}',
'.rgp-a11y-panel h2{font-size:15px;font-weight:700;margin:0 0 2px;color:#15202b;font-family:inherit}',
'.rgp-a11y-panel .a11y-sub{font-size:12.5px;color:#5d6673;margin:0 0 14px;line-height:1.5}',
'.a11y-grp{margin-bottom:14px}',
'.a11y-grp > legend,.a11y-lbl{font-size:10.5px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:#5d6673;margin-bottom:6px;padding:0;display:block}',
'.a11y-grp{border:none;padding:0;margin-inline:0}',
'.a11y-opts{display:flex;gap:6px;flex-wrap:wrap}',
'.a11y-opts button{flex:1 1 auto;min-width:64px;font:inherit;font-size:12.5px;font-weight:600;padding:8px 10px;border-radius:8px;border:1px solid #d8cfba;background:#fff;color:#2a3744;cursor:pointer}',
'.a11y-opts button:hover{border-color:#136a65}',
'.a11y-opts button[aria-pressed="true"]{background:#0c4a47;border-color:#0c4a47;color:#f6f2e9}',
'.a11y-opts button:focus-visible{outline:2px solid #136a65;outline-offset:2px}',
'.rgp-a11y-foot{display:flex;justify-content:space-between;align-items:center;gap:10px;border-top:1px solid #e7e0d1;padding-top:12px;margin-top:4px}',
'.rgp-a11y-foot a{font-size:12px;font-weight:600;color:#0e5c58}',
'.rgp-a11y-foot button{font:inherit;font-size:12px;font-weight:600;background:none;border:none;color:#b54c2b;cursor:pointer;padding:4px;text-decoration:underline}',
'@media print{.rgp-a11y-btn,.rgp-a11y-panel{display:none!important}}'
].join('');

function injectCSS(){
  var s = document.createElement('style');
  s.id = 'rgpA11yCSS'; s.textContent = CSS;
  document.head.appendChild(s);
}

var GROUPS = [
  {k:'text',     label:'Text size',        opts:[['100','Normal'],['115','Larger'],['130','Largest']]},
  {k:'font',     label:'Typeface',         opts:[['default','Standard'],['readable','Readable']]},
  {k:'space',    label:'Line spacing',     opts:[['default','Normal'],['loose','Roomy']]},
  {k:'contrast', label:'Contrast',         opts:[['off','Standard'],['on','Higher']]},
  {k:'motion',   label:'Motion',           opts:[['auto','Standard'],['off','Reduced']]},
  {k:'noise',    label:'Visual noise',     opts:[['off','Standard'],['on','Calmer']]}
];

function root(){
  var el = document.querySelector('script[src*="assets/a11y.js"], script[src*="assets/provenance.js"], link[href*="assets/site.css"]');
  var u = el ? (el.getAttribute('src') || el.getAttribute('href') || '') : '';
  var m = u.match(/^(.*?)assets\//);
  return m ? m[1] : '';
}

function build(){
  var btn = document.createElement('button');
  btn.className = 'rgp-a11y-btn';
  btn.type = 'button';
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'rgpA11yPanel');
  btn.setAttribute('aria-label', 'Reading and accessibility settings');
  btn.title = 'Reading and accessibility settings';
  btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="4" r="2"/><path d="M20.5 7.5c-2.6.8-5.4 1.2-8.5 1.2s-5.9-.4-8.5-1.2a1 1 0 0 0-.6 1.9c2 .6 4.1 1 6.3 1.2l-.6 3.3-2 6.4a1.1 1.1 0 0 0 2.1.7l2.1-6.2h1.4l2.1 6.2a1.1 1.1 0 0 0 2.1-.7l-2-6.4-.6-3.3c2.2-.2 4.3-.6 6.3-1.2a1 1 0 0 0-.6-1.9Z"/></svg>';

  var panel = document.createElement('div');
  panel.className = 'rgp-a11y-panel';
  panel.id = 'rgpA11yPanel';
  panel.hidden = true;
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Reading and accessibility settings');

  var html = '<h2>Reading settings</h2>'
    + '<p class="a11y-sub">Applies across the whole site and is remembered on this device.</p>';
  GROUPS.forEach(function(g){
    html += '<fieldset class="a11y-grp"><legend>' + g.label + '</legend><div class="a11y-opts">'
      + g.opts.map(function(o){
          return '<button type="button" data-k="' + g.k + '" data-v="' + o[0] + '" aria-pressed="'
            + (state[g.k] === o[0]) + '">' + o[1] + '</button>';
        }).join('')
      + '</div></fieldset>';
  });
  html += '<div class="rgp-a11y-foot"><a href="' + root() + 'pages/accessibility.html">Accessibility statement</a>'
        + '<button type="button" data-reset>Reset all</button></div>';
  panel.innerHTML = html;

  function sync(){
    panel.querySelectorAll('.a11y-opts button').forEach(function(b){
      b.setAttribute('aria-pressed', String(state[b.dataset.k] === b.dataset.v));
    });
  }
  panel.addEventListener('click', function(e){
    var b = e.target.closest('button');
    if(!b) return;
    if(b.hasAttribute('data-reset')){ state = Object.assign({}, DEFAULTS); }
    else if(b.dataset.k){ state[b.dataset.k] = b.dataset.v; }
    else return;
    write(state); apply(); sync();
  });

  function open(v){
    panel.hidden = !v;
    btn.setAttribute('aria-expanded', String(v));
    if(v) panel.querySelector('button').focus();
  }
  btn.addEventListener('click', function(){ open(panel.hidden); });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !panel.hidden){ open(false); btn.focus(); }
  });
  document.addEventListener('click', function(e){
    if(panel.hidden) return;
    if(!panel.contains(e.target) && !btn.contains(e.target)) open(false);
  });

  document.body.appendChild(btn);
  document.body.appendChild(panel);
}

function start(){
  /* print copies are documents, not the app — no floating controls */
  if(document.querySelector('meta[name="omelette-print-source"]')) return;
  if(!document.getElementById('rgpA11yCSS')) injectCSS();
  apply();
  if(!document.querySelector('.rgp-a11y-btn')) build();
  window.__rgpA11yDone = true;
}

/* Re-assert rather than assume. site.js renders the nav/footer shell and runs a
   member gate after this file loads; anything on that path that rebuilds the
   document would otherwise silently take the control with it. ensure() is
   idempotent and cheap, and reports rather than failing silently. */
function ensure(){
  try{ start(); }
  catch(err){ console.warn('RGP a11y toolkit failed to initialise:', err); }
}

try{ apply(); }catch(e){ console.warn('RGP a11y: could not apply saved settings', e); }
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ensure);
else ensure();
window.addEventListener('load', ensure);
setTimeout(ensure, 1200);
setTimeout(ensure, 3000);

window.RGP_A11Y = {get:function(){ return Object.assign({}, state); }, apply:apply, ensure:ensure};
})();
