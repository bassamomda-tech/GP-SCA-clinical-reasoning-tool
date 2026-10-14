/* Reasoning GP — owner review-due dashboard (pages/review-due.html)
   Reads assets/review-index.json (built by governance/build-review-index.mjs).
   Status is worked out in the browser from today's date. */
(function(){
'use strict';

var INDEX_URL = '../assets/review-index.json';
var SITE = 'https://gpreasoning.uk/';
var TYPE_LABEL = {protocol:'Protocol', algorithm:'Algorithm', snapshot:'Snapshot', 'case':'Case', summary:'2-page summary'};
var STATUS_LABEL = {overdue:'Overdue', due:'Due ≤ 3 months', ok:'OK', none:'No date'};
var STATUS_ORDER = ['overdue', 'due', 'ok', 'none'];
var MSHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

var $ = function(id){ return document.getElementById(id); };
function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }

var DATA = null, ITEMS = [], GUIDE = {}, FILTER = {q:'', type:'', status:'', flags:false}, SHOWN = [];

/* ---------- dates ---------- */
function today(){ var d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
function parseIso(s){ var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || ''); return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null; }
function addMonths(d, n){ var x = new Date(d.getTime()); x.setMonth(x.getMonth() + n); return x; }
function isoOf(d){ return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function longDate(d){ return d.getDate() + ' ' + MSHORT[d.getMonth()] + ' ' + d.getFullYear(); }

function statusOf(item, now, soon){
  var d = parseIso(item.next_iso);
  if(!d) return {s:'none', days:null};
  var days = Math.round((d - now) / 86400000);
  if(d < now) return {s:'overdue', days:days};
  if(d <= soon) return {s:'due', days:days};
  return {s:'ok', days:days};
}
function relDays(days){
  if(days == null) return '';
  if(days < 0) return Math.abs(days) + ' day' + (days === -1 ? '' : 's') + ' ago';
  if(days === 0) return 'today';
  if(days < 62) return 'in ' + days + ' day' + (days === 1 ? '' : 's');
  return 'in ' + Math.round(days / 30.44) + ' months';
}

/* ---------- guidance ---------- */
function gLabel(k){ var g = GUIDE[k]; if(!g) return k; return g.type === 'nice' ? g.label.replace(/^NICE\s+/, 'NICE ') : (g.label || k); }
function gLine(k){
  var g = GUIDE[k] || {};
  var bits = [g.status || 'unknown'];
  if(g.last_checked) bits.push('checked ' + g.last_checked);
  if(g.replacement) bits.push('→ ' + g.replacement);
  return bits.join(' · ') + (g.note ? ' — ' + g.note : '');
}
function niceOf(item){ return (item.guidance || []).filter(function(k){ return GUIDE[k] && GUIDE[k].type === 'nice'; }); }

/* ---------- filtering ---------- */
function haystack(item){
  if(item._h) return item._h;
  item._h = [item.title, item.slug, item.url, TYPE_LABEL[item.type], item.guideline_text || '',
    (item.guidance || []).map(gLabel).join(' '), (item.guidance || []).map(function(k){ return (GUIDE[k] || {}).replacement || ''; }).join(' '),
    (item.flags || []).join(' ')].join(' ').toLowerCase();
  return item._h;
}
function matches(item){
  if(FILTER.type && item.type !== FILTER.type) return false;
  if(FILTER.status && item._st.s !== FILTER.status) return false;
  if(FILTER.flags && !(item.flags && item.flags.length)) return false;
  if(FILTER.q){
    var h = haystack(item), words = FILTER.q.toLowerCase().split(/\s+/).filter(Boolean);
    for(var i = 0; i < words.length; i++) if(h.indexOf(words[i]) === -1) return false;
  }
  return true;
}

/* ---------- render ---------- */
function renderCounts(){
  var c = {overdue:0, due:0, ok:0, none:0}, scope = ITEMS.filter(function(it){ return !FILTER.type || it.type === FILTER.type; });
  scope.forEach(function(it){ c[it._st.s]++; });
  var cards = STATUS_ORDER.map(function(s){
    return '<button type="button" class="rd-count s-' + s + '" data-status="' + s + '" aria-pressed="' + (FILTER.status === s) + '">'
      + '<span class="n">' + c[s] + '</span><span class="l">' + esc(STATUS_LABEL[s]) + '</span></button>';
  });
  cards.push('<button type="button" class="rd-count s-all" data-status="" aria-pressed="' + (!FILTER.status) + '"><span class="n">' + scope.length
    + '</span><span class="l">' + (FILTER.type ? esc(TYPE_LABEL[FILTER.type]) + 's' : 'All pages') + '</span></button>');
  $('rdCounts').innerHTML = cards.join('');
}

function rowHtml(it){
  var st = it._st, nice = niceOf(it), other = (it.guidance || []).length - nice.length;
  var sub = '<span class="rd-type">' + esc(TYPE_LABEL[it.type] || it.type) + '</span>';
  if(it.high_risk) sub += '<span class="rd-hr" title="6-monthly review cycle">High-risk</span>';
  if(it.print) sub += '<a href="../' + esc(it.print) + '">print</a>';
  if(it.snapshot) sub += '<a href="../' + esc(it.snapshot) + '">Snapshot</a>';
  if(it.parent) sub += '<a href="../' + esc(it.parent) + '">full ' + esc(it.parent_type || 'page') + '</a>';
  var flags = (it.flags || []).map(function(f){ return '<span class="rd-flag">' + esc(f) + '</span>'; }).join('');

  var last = it.reviewed ? esc(it.reviewed) + (it.basis === 'round' ? '<small>review round</small>' : it.basis === 'page' ? '<small>page sign-off</small>' : '') : '<span class="rd-none">—</span>';
  var next = it.next ? esc(it.next) + '<small>' + esc(relDays(st.days)) + (it.cycle ? ' · ' + it.cycle + '-monthly' : '') + '</small>' : '<span class="rd-none">—</span>';

  var chips = nice.slice(0, 6).map(function(k){
    var g = GUIDE[k] || {};
    return '<span class="rd-gc g-' + esc(g.status || 'unknown') + '" title="' + esc(gLine(k)) + '">' + esc(gLabel(k).replace(/^NICE /, '')) + '</span>';
  }).join('');
  var g = nice.length ? '<div class="rd-g">' + chips + '</div>' : '<span class="rd-none">' + (other ? 'No NICE guidance' : 'None recorded') + '</span>';
  var extra = (it.guidance || []).length || it.guideline_text;
  if(extra){
    g += '<details class="rd-more"><summary>' + (it.guidance || []).length + ' source' + ((it.guidance || []).length === 1 ? '' : 's')
      + (nice.length > 6 ? ' (' + (nice.length - 6) + ' more NICE)' : '') + (it.guidance_from === 'parent' ? ' · from full page' : '') + '</summary>'
      + (it.guideline_text ? '<p class="rd-gl"><b>On the page:</b> ' + esc(it.guideline_text) + '</p>' : '')
      + '<ul>' + (it.guidance || []).map(function(k){ return '<li><b>' + esc(gLabel(k)) + '</b> — ' + esc(gLine(k)) + '</li>'; }).join('') + '</ul></details>';
  }
  return '<tr class="s-' + st.s + '">'
    + '<td data-label="Page"><a class="rd-title" href="../' + esc(it.url) + '">' + esc(it.title || it.slug) + '</a><div class="rd-sub">' + sub + '</div>' + flags + '</td>'
    + '<td class="rd-c-last rd-date" data-label="Last reviewed">' + last + '</td>'
    + '<td class="rd-c-next rd-date" data-label="Next review due">' + next + '</td>'
    + '<td class="rd-c-status" data-label="Status"><span class="rd-chip s-' + st.s + '">' + esc(STATUS_LABEL[st.s]) + '</span></td>'
    + '<td data-label="Guidance cited">' + g + '</td>'
    + '</tr>';
}

function render(){
  SHOWN = ITEMS.filter(matches);
  renderCounts();
  $('rdBody').innerHTML = SHOWN.map(rowHtml).join('');
  $('rdEmpty').hidden = SHOWN.length > 0;
  $('rdShown').textContent = 'Showing ' + SHOWN.length + ' of ' + ITEMS.length + ' pages, sorted by next review date (earliest first).';
}

/* ---------- CSV ---------- */
function csvCell(v){
  var s = String(v == null ? '' : v);
  if(/^[=+\-@\t\r]/.test(s)) s = "'" + s;           // spreadsheet formula guard
  return /[",\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}
function exportCsv(){
  var head = ['Title','Type','Status','Last reviewed','Next review due','Next review (ISO)','Days until due','Cycle (months)','High-risk','NICE guidance (status, last checked)','Other sources','Guideline line on page','Flags','URL'];
  var rows = SHOWN.map(function(it){
    var nice = niceOf(it);
    return [it.title, TYPE_LABEL[it.type] || it.type, STATUS_LABEL[it._st.s], it.reviewed || '', it.next || '', it.next_iso || '',
      it._st.days == null ? '' : it._st.days, it.cycle || '', it.high_risk ? 'yes' : '',
      nice.map(function(k){ var g = GUIDE[k] || {}; return gLabel(k) + ' (' + (g.status || '?') + (g.last_checked ? ', ' + g.last_checked : '') + (g.replacement ? ', now ' + g.replacement : '') + ')'; }).join('; '),
      (it.guidance || []).length - nice.length, it.guideline_text || '', (it.flags || []).join('; '), SITE + it.url];
  });
  var csv = '﻿' + [head].concat(rows).map(function(r){ return r.map(csvCell).join(','); }).join('\r\n');
  var blob = new Blob([csv], {type:'text/csv;charset=utf-8'});
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'review-due-' + isoOf(today()) + '.csv';
  document.body.appendChild(a); a.click();
  setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 0);
}

/* ---------- wiring ---------- */
function readUrl(){
  try{
    var p = new URLSearchParams(location.search);
    FILTER.q = p.get('q') || ''; FILTER.type = p.get('type') || ''; FILTER.status = p.get('status') || ''; FILTER.flags = p.get('flags') === '1';
  }catch(e){}
  $('rdQ').value = FILTER.q; $('rdType').value = FILTER.type; $('rdStatus').value = FILTER.status; $('rdFlags').checked = FILTER.flags;
  if($('rdType').value !== FILTER.type) FILTER.type = '';
  if($('rdStatus').value !== FILTER.status) FILTER.status = '';
}
function writeUrl(){
  try{
    var p = new URLSearchParams();
    if(FILTER.q) p.set('q', FILTER.q); if(FILTER.type) p.set('type', FILTER.type);
    if(FILTER.status) p.set('status', FILTER.status); if(FILTER.flags) p.set('flags', '1');
    var s = p.toString();
    history.replaceState(null, '', location.pathname + (s ? '?' + s : ''));
  }catch(e){}
}
function wire(){
  var t;
  $('rdQ').addEventListener('input', function(){ clearTimeout(t); t = setTimeout(function(){ FILTER.q = $('rdQ').value.trim(); render(); writeUrl(); }, 120); });
  $('rdType').addEventListener('change', function(){ FILTER.type = this.value; render(); writeUrl(); });
  $('rdStatus').addEventListener('change', function(){ FILTER.status = this.value; render(); writeUrl(); });
  $('rdFlags').addEventListener('change', function(){ FILTER.flags = this.checked; render(); writeUrl(); });
  $('rdCounts').addEventListener('click', function(e){
    var b = e.target.closest('.rd-count'); if(!b) return;
    var s = b.getAttribute('data-status');
    FILTER.status = (FILTER.status === s) ? '' : s; $('rdStatus').value = FILTER.status; render(); writeUrl();
  });
  $('rdCsv').addEventListener('click', exportCsv);
}

function start(){
  readUrl(); wire();
  fetch(INDEX_URL, {cache:'no-cache'}).then(function(r){
    if(!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  }).then(function(d){
    DATA = d; GUIDE = d.guidance || {};
    var now = today(), soon = addMonths(now, 3);
    ITEMS = (d.items || []).slice();
    ITEMS.forEach(function(it){ it._st = statusOf(it, now, soon); });
    ITEMS.sort(function(a, b){ return (a.next_iso || '9999').localeCompare(b.next_iso || '9999') || String(a.title).localeCompare(String(b.title)); });
    var gc = d.guidance_check || {}, pol = d.policy || {};
    $('rdMeta').innerHTML = 'Today: <b>' + esc(longDate(now)) + '</b> · index built <b>' + esc(d.generated || '?') + '</b>'
      + ' · cycles: ' + esc(pol.cycle_high_risk_months || 6) + ' months high-risk, ' + esc(pol.cycle_standard_months || 12) + ' months standard'
      + (gc.next_due ? ' · 6-monthly guidance check: last <b>' + esc(gc.last_full_check || '—') + '</b>, next due <b>' + esc(gc.next_due) + '</b>'
        + (isoOf(now).slice(0, 7) > gc.next_due ? ' <b style="color:#a02c1e">(overdue)</b>' : '') : '');
    render();
  }).catch(function(e){
    $('rdMeta').textContent = 'Could not load the review index (' + e.message + '). Ask Claude to rebuild assets/review-index.json and upload it.';
  });
}

if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
