/* ============================================================
   alg-ui.js — gpreasoning.uk algorithm page UI (opt-in)
   The approved protocol design's shared parts, carried over to the algorithm
   pages (tools/algorithms/<slug>.html). The decision flow (#flow), its nodes,
   the progress bar, the Why? drawers and the Steps | Snapshot tabs stay as
   they are: there is no step rail, and no clinical text is reworded.
   Opt in per page, after the existing scripts at the end of <body>:
     <script src="../../assets/alg-ui.js"></script>   (+ alg-ui.css in <head>)
   Later roll-out: alg-nav.js (loaded by every live algorithm) can load this file.
   Adds:
     - consult bar  Red flags · Snapshot · Script · Search · Top  (phone: full width;
       desktop: a floating pill)
     - References & sources at the end (guideline pills + provenance "Anchored to")
     - the accepted urgency colours on the existing urgency pills / red-flag tiles
     - Copy to notes per step + Copy safety-net script (plain text, verbatim)
     - Search within the page; the "Updated" badge; Give to patient (QR)
     - drug boxes (curated drug directly followed by a dose); "Red flags" step name
   Guards: runs once; never on print copies, never outside tools/algorithms/<slug>.html
   (so never inside the Snapshot iframe), never edits the Snapshot (#viewSummary).
   Every added control is .pxa-chrome / .px-chrome, hidden by print CSS; moved
   originals stay in place as print-only, so Ctrl+P output is unchanged.
   Library: assets/rgp-ui-core.js (window.RGPUI), lazy-loaded from this folder.
   ============================================================ */
/* Skip list: algorithms that keep today's page (no algorithm UI at all). One slug per entry. */
var ALG_UI_SKIP = [];
(function(){
  'use strict';
  var W = window, D = document;
  if(W.__algUi) return; W.__algUi = true;                                   /* never twice */
  var m = location.pathname.match(/\/tools\/algorithms\/([^\/?#]+?)\.html?$/);
  if(!m) return;                                                            /* algorithm pages only (not one-page/ or summaries/) */
  var SLUG = m[1];
  if(ALG_UI_SKIP.indexOf(SLUG) >= 0 || W.ALG_UI_NO_BOOT) return;
  if(D.querySelector('meta[name="omelette-print-source"]') || /-print$/i.test(SLUG)) return;   /* never on print copies */

  var SCRIPT = D.currentScript;
  var ASSETS = (function(){
    var s = SCRIPT && SCRIPT.src; if(s) return s.replace(/[^\/]*$/, '');
    var x = D.querySelector('script[src*="assets/alg-ui.js"], script[src*="assets/alg-nav.js"]');
    return x ? x.src.replace(/[^\/]*$/, '') : '../../assets/';
  })();
  var ROOT = ASSETS.replace(/assets\/$/, '');
  var V = '?v=1';   /* bump with the files this script adds: alg-ui.css, rgp-ui-core.js, algorithm-leaflets.js */

  /* the stylesheet: a page may link it in <head> (no flash); otherwise load it here */
  if(!D.querySelector('link[href*="assets/alg-ui.css"]')){
    var l = D.createElement('link'); l.rel = 'stylesheet'; l.href = ASSETS + 'alg-ui.css' + V; D.head.appendChild(l);
  }
  function core(){ return W.RGPUI && W.RGPUI._loaded ? Promise.resolve() : new Promise(function(res, rej){ var s = D.createElement('script'); s.src = ASSETS + 'rgp-ui-core.js' + V; s.onload = res; s.onerror = rej; D.head.appendChild(s); }); }
  function domReady(){ return new Promise(function(res){ if(D.readyState === 'loading') D.addEventListener('DOMContentLoaded', res); else res(); }); }
  /* after provenance.js (review box) and topic-links.js have rendered */
  function settled(){ return new Promise(function(res){ var n = 0; (function t(){ if(D.getElementById('rgpProvStrip') || ++n > 60) res(); else setTimeout(t, 50); })(); }); }

  domReady().then(core).then(settled).then(function(){ setTimeout(start, 0); }).catch(function(e){ if(W.console) console.warn('alg-ui: not started', e); });

  function start(){
    var U = W.RGPUI, $ = U.$, $$ = U.$$, el = U.el, squash = U.squash;
    var flow = D.getElementById('flow');
    if(!flow || !flow.classList.contains('alg-flow') || D.documentElement.classList.contains('au')) return;
    var NODES = $$('.node[data-step]', flow);
    if(!NODES.length) return;
    D.documentElement.classList.add('au', 'pxa');
    var API = W.AlgUI = {slug: SLUG, version: 1};

    /* ---------------- page helpers ---------------- */
    function h3(n){ return n.querySelector('.node-head h3, h3'); }
    function stepNo(n){ return parseInt(n.getAttribute('data-step'), 10); }
    function bareTitle(n){
      var h = h3(n); if(!h) return '';
      var o = h.querySelector('.pxa-rf-orig'); if(o) return squash(o.textContent);
      var x = h.cloneNode(true); $$('.pxa-chrome, .px-chrome', x).forEach(function(c){ c.remove(); });
      return squash(x.textContent);
    }
    function body(n){ return n.querySelector(':scope > .node-body') || n.querySelector('.node-body'); }
    function viewBtn(v){ return D.querySelector('.vt-btn[data-view="' + v + '"]'); }
    function inSteps(){ return !D.body.classList.contains('summary-mode') && !D.body.classList.contains('diagram-mode'); }
    function toSteps(){ if(!inSteps()){ var b = viewBtn('steps'); if(b) b.click(); } }
    function stickyTop(){
      var h = 0;
      $$('.alg-topbar, .alg-header').forEach(function(x){
        var cs = getComputedStyle(x); if(cs.position !== 'sticky' && cs.position !== 'fixed') return;
        var r = x.getBoundingClientRect(); if(r.top <= 1 && r.bottom > h) h = r.bottom;
        else if(r.top > 1) h = Math.max(h, (parseFloat(cs.top) || 0) + r.height);
      });
      return h + 14;
    }
    function scrollToNode(n, center){
      var r = n.getBoundingClientRect();
      var top = r.top + W.pageYOffset - (center ? Math.max(stickyTop(), (W.innerHeight - 140) / 2 - 40) : stickyTop());
      W.scrollTo({top: Math.max(0, top), behavior: 'auto'});
    }
    function flash(t){ t.classList.remove('px-flash'); void t.offsetWidth; t.classList.add('px-flash'); }
    function go(t){ if(!t) return; toSteps(); scrollToNode(t, false); flash(t); }
    function drawerBtn(d){
      var p = d.previousElementSibling;
      if(p && p.classList.contains('why-row')) return p.querySelector('.why-btn');
      if(p && p.classList.contains('why-btn')) return p;
      return d.parentNode && d.parentNode.querySelector ? d.parentNode.querySelector('.why-btn') : null;
    }
    function reveal(node){
      toSteps();
      var n = node.nodeType === 1 ? node : node.parentNode;
      while(n && n !== D.body){
        if(n.matches && n.matches('.why-drawer') && !n.classList.contains('open') && getComputedStyle(n).display === 'none'){
          n.classList.add('open'); var b = drawerBtn(n); if(b) b.setAttribute('aria-expanded', 'true');
        }
        if(n.matches && n.matches('details') && !n.open) n.open = true;
        n = n.parentNode;
      }
    }

    /* =========================================================
       1. REFERENCES & SOURCES at the end — guideline pills + "Anchored to".
          The originals stay where they are as print-only (Ctrl+P unchanged);
          the review box itself is left as it is.
       ========================================================= */
    function buildRefs(){
      var meta = $('.alg-header .alg-meta');
      var chips = meta ? $$(':scope > span', meta).filter(function(s){ return !/(\bconsult\b|^RCGP SCA$|^\d+-min)/i.test(squash(s.textContent)); }) : [];
      var src = $('#rgpProvStrip .pv-src');
      if(!chips.length && !src) return null;
      var refs = el('<section id="au-refs" class="au-refs px-screen-only" aria-labelledby="au-refs-h">'+
        '<div class="px-refs-head"><span class="px-refs-ic" aria-hidden="true">§</span><div><span class="px-refs-k">At the end, for checking</span>'+
        '<h2 id="au-refs-h">References &amp; sources</h2></div></div><div class="px-refs-top"></div></section>');
      var top = refs.querySelector('.px-refs-top');
      if(chips.length){
        var b1 = el('<div class="px-refs-blk"><h3>Guidelines this page follows</h3><div class="au-meta-clone"></div></div>');
        chips.forEach(function(s){ b1.lastChild.appendChild(s.cloneNode(true)); s.classList.add('px-print-only'); });
        top.appendChild(b1);
      }
      if(src){
        var b2 = el('<div class="px-refs-blk"><h3>Anchored to</h3></div>');
        var sc = src.cloneNode(true); sc.classList.add('px-src-clone');
        var lbl = sc.querySelector('.pv-lbl'); if(lbl) lbl.remove();      /* the block heading carries the label */
        b2.appendChild(sc); top.appendChild(b2);
        src.classList.add('px-print-only');
      }
      var foot = $('.alg-foot');
      if(foot && foot.parentNode){ foot.parentNode.insertBefore(refs, foot); var mw = getComputedStyle(foot).maxWidth; if(mw && mw !== 'none') refs.style.maxWidth = mw; }
      else flow.parentNode.insertBefore(refs, flow.nextSibling);
      return refs;
    }

    /* =========================================================
       2. URGENCY COLOURS — the accepted tokens on the existing urgency pills and
          red-flag tiles. Recolour only (screen): labels, classes and print unchanged.
          Mapped by LABEL, never by class (pill colours also carry other meanings).
       ========================================================= */
    var PILL_COLOURED = /\bpill-(red|amber|orange|purple|green|grey|gray|yellow)\b/;
    var URG_ALG = [   /* the protocol order (stronger wins), plus algorithm label forms */
      ['999', /(\b999\b|A&E|(?<!non-)(?<!same[- ]day )emergenc|\bimmediate(ly)?\b|straight away)/i, '999 / A&E'],
      ['same-day', /same[- ]day|same day|\btoday\b/i, 'Same day'],
      ['2ww', /(suspected[- ]cancer|\b2WW\b|\bNG12\b)/i, 'Suspected cancer'],
      ['urgent', /(\burgent\b|next day|≤ ?48 ?h|\b48 ?h|within (a|one|1|2) weeks?|expedited|\b2\/52\b)/i, 'Urgent'],
      ['routine', /(\broutine\b|GP management|primary care manag|manage in primary care|prompt \(non-emergency\))/i, 'Routine']
    ];
    function urgOf(t){ for(var i = 0; i < URG_ALG.length; i++) if(URG_ALG[i][1].test(t)) return URG_ALG[i]; return null; }
    API.urgencyOf = urgOf;
    var RANK = {'999':0, 'same-day':1, '2ww':2, 'urgent':3, 'routine':4};
    function addUrgency(){
      var pills = 0, tiles = 0, rows = [];
      $$('.pill', flow).forEach(function(p){
        if(!PILL_COLOURED.test(p.className) || p.closest('.pxa-chrome')) return;
        var t = squash(p.textContent), u = urgOf(t); if(!u) return;
        p.classList.add('u-pill', 'u-pill-' + u[0]); p.setAttribute('data-u', u[0]); pills++;
        rows.push([t, (p.className.match(PILL_COLOURED) || [])[1], u[0]]);
      });
      $$('.rftile', flow).forEach(function(tile){
        var best = null;
        $$('.u-pill', tile).forEach(function(p){ var k = p.getAttribute('data-u'); if(best === null || RANK[k] < RANK[best]) best = k; });
        if(best === null){
          /* no urgency pill: the action after the tile's last "→", if it names one */
          var x = tile.cloneNode(true); $$('b', x).slice(0, 1).forEach(function(b){ b.remove(); });
          var t = squash(x.textContent), i = t.lastIndexOf('→');
          var u = i >= 0 ? urgOf(t.slice(i + 1).split(/[.;(]/)[0]) : null; if(u) best = u[0];
        }
        if(best !== null){ tile.classList.add('u-tile', 'u-tile-' + best); tiles++; }
      });
      API.urgency = {pills: pills, tiles: tiles, list: rows};
    }

    /* =========================================================
       3. "RED FLAGS" STEP NAME — the protocol rule. At most one step.
          Algorithms carry no section ids, so the protocol's "red-flag id" path reads
          the node's own type: a SAFETY node whose first title clause says red flag,
          emergency, severe, urgent, same-day, 999, alarm or danger.
       ========================================================= */
    var RF = U.RF, rfTarget = null;
    function applyRedFlags(){
      var info = {renamed: false, n: '', title: '', reason: ''};
      /* already labelled: the title starts with "Red flag(s)", or its first clause names them ("Screen for red flags — …") */
      var already = NODES.filter(function(n){ var t = bareTitle(n); return RF.ALREADY.test(t) || /\bred[ -]?flags?\b/i.test(t.split(/\s+[—–-]\s+|,\s+|:\s+/)[0]); })[0];
      if(already){
        info.n = String(stepNo(already)); info.title = bareTitle(already); info.reason = 'already labelled Red flags — left as it is'; rfTarget = already;
      } else {
        var cands = NODES.filter(function(n){
          var type = (n.getAttribute('data-type') || '').toUpperCase();
          if(/^(REFER|TREAT|LIFESTYLE|FOLLOWUP)$/.test(type)) return false;
          if(!(stepNo(n) <= RF.MAX_STEP)) return false;
          var t = bareTitle(n), first = t.split(/\s+[—–-]\s+|,\s+|:\s+/)[0];
          var hit = RF.START.test(t) || (type === 'SAFETY' && RF.WORDS.test(first));
          return hit && RF.ACTION.test((body(n) || n).textContent || '');
        });
        if(cands.length === 1){
          var s = cands[0], t = bareTitle(s);
          info.renamed = true; info.n = String(stepNo(s)); info.title = t;
          info.reason = RF.START.test(t) ? 'step title starts with "' + t.match(RF.START)[0] + '"' : 'SAFETY step; first title clause says "' + t.split(/\s+[—–-]\s+|,\s+|:\s+/)[0].match(RF.WORDS)[0] + '"';
          info.reason += '; step holds urgent-action wording';
          var h = h3(s), orig = D.createElement('span'); orig.className = 'pxa-rf-orig';
          while(h.firstChild) orig.appendChild(h.firstChild);             /* the original nodes are moved, not copied */
          h.appendChild(el('<span class="pxa-rf-name pxa-chrome">Red flags</span>')); h.appendChild(orig);
          h.classList.add('pxa-rf-h'); s.classList.add('pxa-rf-step');
          rfTarget = s;
        } else {
          info.reason = cands.length ? 'ambiguous: ' + cands.length + ' steps qualify — none renamed' : 'no step clearly qualifies — none renamed';
        }
      }
      if(!rfTarget) rfTarget = NODES.filter(function(n){ return n.querySelector('.rftile'); })[0] || NODES[0];
      API.redFlags = info;
    }
    function redFlagGoal(){ return rfTarget ? (rfTarget.querySelector('.rfgrid') ? rfTarget : rfTarget) : null; }

    /* =========================================================
       4. DRUG BOXES — only where a curated drug is directly followed by a dose,
          and no other medicine is named in the same item. The text is never hidden:
          the box adds a "Check · BNF" panel (verbatim clauses + a BNF search link).
       ========================================================= */
    var DRUG_SKIP = '.why-drawer, .why-row, .kv, .rftile, .lstile, .dbox, table, .warn, .caution, .intro-note, .override, .pxa-chrome, h1, h2, h3, h4, h5, .node-header, .node-head-row';
    function addDrugBoxes(){
      var n = 0, list = [];
      $$('.b-card, .rung .rt, li, p', flow).forEach(function(e){
        if(e.closest(DRUG_SKIP) || e.closest('.au-drug') || e.querySelector('.b-card, li, p, ul, ol, table')) return;
        if(e.closest('.b-card') && e !== e.closest('.b-card')) return;
        var src = e.matches('.b-card') ? e.querySelector('.b-drug') : e;
        if(!src) return;
        var text = squash(e.textContent);
        if(text.length < 8 || text.length > 900) return;
        var f = U.findDrugs(squash(src.textContent));
        if(!f.drugs.length || f.drugs.length > 2) return;                /* uncertain → plain text */
        if(e.matches('.b-card') && U.findDrugs(text).drugs.length !== f.drugs.length) return;
        if(U.otherDrug(text, f.drugs)) return;                           /* another medicine on the same item → plain text */
        build(e, text, f); n++; list.push(f.drugs.map(function(d){ return d[0]; }).join(' · '));
      });
      API.drugBoxes = list;
      return n;
    }
    function build(e, text, f){
      var names = f.drugs.map(function(d){ return d[0]; }).join(' · ');
      e.classList.add('au-drug');
      var bar = el('<div class="au-drug-bar pxa-chrome"><button type="button" class="pxa-drug-h" aria-expanded="false"><span class="pxa-drug-ic" aria-hidden="true">💊</span><span class="pxa-drug-n"></span><span class="pxa-drug-more-l">Check · BNF</span><span class="pxa-drug-chev" aria-hidden="true">▾</span></button>'+
        '<div class="pxa-drug-more" hidden><div class="pxa-check-h">Check</div><ul class="pxa-check"></ul><div class="pxa-bnf"></div></div></div>');
      var head = bar.querySelector('.pxa-drug-h'), more = bar.querySelector('.pxa-drug-more');
      head.querySelector('.pxa-drug-n').textContent = names;
      head.setAttribute('aria-label', names + ': show safety checks and BNF link');
      var ul = more.querySelector('ul'), checks = U.drugChecks(text);
      if(checks.length) checks.forEach(function(c){ var li = el('<li><b></b> <span></span></li>'); li.querySelector('b').textContent = c[0]; li.querySelector('span').textContent = c[1]; ul.appendChild(li); });
      else ul.appendChild(el('<li class="pxa-check-none">No safety points stated in this line — check the BNF.</li>'));
      f.drugs.forEach(function(d){
        var a = el('<a target="_blank" rel="noopener noreferrer"></a>'); a.href = U.bnfUrl(d); a.textContent = 'BNF: ' + d[0] + ' ↗';
        a.setAttribute('aria-label', 'Open ' + d[0] + ' in the BNF (opens in a new tab)'); more.querySelector('.pxa-bnf').appendChild(a);
      });
      head.addEventListener('click', function(){ var o = more.hidden; more.hidden = !o; head.setAttribute('aria-expanded', String(o)); bar.classList.toggle('open', o); });
      if(e.tagName === 'P'){ e.insertAdjacentElement('afterend', bar); bar.classList.add('au-drug-after'); }
      else e.appendChild(bar);
    }

    /* =========================================================
       5. COPY TO NOTES (per step) + the patient SAFETY-NET SCRIPT
       ========================================================= */
    function special(n, out, indent, inl){
      if(n.matches('.kv')){
        var kids = Array.prototype.filter.call(n.children, function(c){ return !c.matches('.pxa-chrome, .px-chrome'); });
        for(var i = 0; i < kids.length; i += 2){ var a = inl(kids[i]), b = kids[i+1] ? inl(kids[i+1]) : ''; if(a || b) out.push(indent + '- ' + a + (b ? ': ' + b : '')); }
        return true;
      }
      if(n.matches('.rftile, .lstile, .dbox-r, .rung, .b-card')){
        var parts;
        if(n.matches('.rftile, .lstile')){
          var c = n.cloneNode(true), lab = c.querySelector(':scope > b');
          var l = lab ? inl(lab) : ''; if(lab) lab.remove();
          parts = [l, inl(c)];
        } else parts = Array.prototype.map.call(n.children.length ? n.childNodes : [n], function(x){ return x.nodeType === 1 || x.nodeType === 3 ? inl(x) : ''; });
        parts = parts.filter(Boolean);
        if(parts.length) out.push(indent + '- ' + parts[0] + (parts.length > 1 ? ': ' + parts.slice(1).join(' — ') : ''));
        return true;
      }
      if(n.matches('.dbox-h, .b-cond-head')){ var h = inl(n); if(h){ out.push(''); out.push(indent + h.toUpperCase()); } return true; }
      return false;
    }
    var NOTE_DROP = '.why-row, .why-drawer, .node-tick, .node-tag, .connector';
    function stepText(n){
      var title = bareTitle(n);
      return U.notesFrom([body(n)], {head: ('Step ' + stepNo(n) + ': ' + U.noEmoji(title)).toUpperCase().replace(/\s+/g, ' ').trim(), drop: NOTE_DROP, special: special});
    }
    API.stepText = function(i){ return stepText(NODES[i]); };

    /* the patient safety-net rows: label cells of the follow-up / safety-net step's grid
       ("999 Safety-Net", "Same-Day GP Safety-Net", "Call 999 if:", "Return immediately"…) */
    var SN_LABEL = /(safety.?net|^(call )?999\b|^return immediately|^immediate\b|^urgent help|^seek urgent|^same[- ]day( gp)?\b|^gp same[- ](day|week)|^a&e\b)/i;
    function snRows(){
      var node = NODES.slice().reverse().filter(function(n){ return /safety.?net/i.test(bareTitle(n)); })[0];
      var pick = function(scope, re){
        var out = [];
        $$('.kv', scope).forEach(function(kv){
          var kids = Array.prototype.filter.call(kv.children, function(c){ return !c.matches('.pxa-chrome, .px-chrome'); });
          for(var i = 0; i + 1 < kids.length; i += 2) if(re.test(squash(kids[i].textContent))) out.push({kv: kv, label: kids[i], value: kids[i+1]});
        });
        return out;
      };
      var rows = node ? pick(node, SN_LABEL) : [];
      if(!rows.length) rows = pick(flow, /safety.?net/i);
      return rows;
    }
    function scriptText(rows){
      return rows.map(function(r){ return U.inl(r.label) + ': ' + U.inl(r.value); }).join('\n\n');
    }
    var SN = [], snBar = null;
    function addCopy(){
      NODES.forEach(function(n){
        var b = body(n); if(!b) return;
        var tools = el('<div class="au-steptools pxa-chrome"></div>');
        tools.appendChild(U.copyBtn('Copy to notes', 'Copy step ' + stepNo(n) + ', ' + bareTitle(n) + ', to the clinical notes as plain text', function(){ return stepText(n); }, 'Copied — step ' + stepNo(n) + ' as plain text'));
        b.insertBefore(tools, b.firstChild);
      });
      SN = snRows();
      if(SN.length){
        SN.forEach(function(r){ r.label.classList.add('au-sn-cell', 'au-sn-l'); r.value.classList.add('au-sn-cell'); });
        var lastKv = SN[SN.length - 1].kv;
        snBar = el('<div class="pc-copybar au-snbar px-chrome"><span class="pc-copy-k">Patient safety-net</span><span class="pc-copy-btns"></span></div>');
        var btn = el('<button type="button" class="pc-copy px-chrome" aria-label="Copy the patient safety-net script"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg><span>Copy safety-net script</span></button>');
        btn.addEventListener('click', function(){
          var t = scriptText(SN);
          U.copyText(t).then(function(){ U.lastCopied = t; U.toast('Copied — safety-net script as plain text'); }, function(){ U.toast('Could not copy — select the text instead'); });
        });
        snBar.querySelector('.pc-copy-btns').appendChild(btn);
        lastKv.insertAdjacentElement('afterend', snBar);
      }
      API.safetyNet = SN.map(function(r){ return squash(r.label.textContent); });
      API.scriptText = function(){ return scriptText(SN); };
    }

    /* =========================================================
       6. GIVE TO PATIENT — assets/algorithm-leaflets.js → leaflets-data.js → QR
       ========================================================= */
    function leafletSlugs(){
      var mp = W.RGP_ALGORITHM_LEAFLETS && W.RGP_ALGORITHM_LEAFLETS[SLUG];
      return (mp || []).map(function(x){ return typeof x === 'string' ? x : x[0]; });
    }
    API.leafletSlugs = leafletSlugs;
    function addGive(){
      var ready = W.RGP_ALGORITHM_LEAFLETS ? Promise.resolve() : U.loadScript(ASSETS + 'algorithm-leaflets.js' + V).catch(function(){});
      return ready.then(function(){
        if(!leafletSlugs().length) return;                                  /* no clear match → no button */
        var slot = snBar ? snBar.querySelector('.pc-copy-btns') : null;
        if(!slot){
          var n = NODES.slice().reverse().filter(function(x){ return /safety.?net|follow.?up/i.test(bareTitle(x)); })[0] || NODES[NODES.length - 1];
          slot = n.querySelector('.au-steptools');
        }
        if(!slot) return;
        slot.appendChild(U.leafletButton({slugs: leafletSlugs, assets: ASSETS, root: ROOT,
          host: function(b){ return b.closest('.au-snbar, .au-steptools') || b.parentNode; }}));
      });
    }

    /* =========================================================
       7. SEARCH WITHIN THE PAGE — Steps content only (#flow); never the Snapshot
       ========================================================= */
    var search = null, sheet = null, findBtn = null;
    function openSheet(){ sheet.hidden = false; sheet.classList.add('on'); findBtn.setAttribute('aria-expanded', 'true'); setTimeout(function(){ search.box.querySelector('input').focus(); }, 30); }
    function closeSheet(){ sheet.classList.remove('on'); sheet.hidden = true; findBtn.setAttribute('aria-expanded', 'false'); }
    function addSearch(bar){
      search = U.createSearch({
        scope: function(){ return [flow]; }, skip: '.connector',
        reveal: reveal, scroll: function(h){ scrollToNode(h, true); },
        label: 'Search this algorithm', placeholder: 'e.g. troponin, 999, pregnancy',
        onEscape: function(){ closeSheet(); findBtn.focus(); }
      });
      API.search = search;
      sheet = el('<div class="pxa-sheet pxa-chrome" hidden role="dialog" aria-label="Search this algorithm"><div class="pxa-sheet-h"><b>Search</b><button type="button" class="pxa-x" aria-label="Close search">×</button></div><div class="pxa-sheet-find"></div></div>');
      sheet.querySelector('.pxa-sheet-find').appendChild(search.box);
      sheet.querySelector('.pxa-x').addEventListener('click', function(){ search.clear(); closeSheet(); findBtn.focus(); });
      sheet.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ search.clear(); closeSheet(); findBtn.focus(); } });
      D.body.appendChild(sheet);
      findBtn = bar.querySelector('[data-a="find"]');
      findBtn.addEventListener('click', function(){ sheet.classList.contains('on') ? (search.clear(), closeSheet()) : openSheet(); });
    }

    /* =========================================================
       8. CONSULT BAR — Red flags · Snapshot · Script · Search · Top
       ========================================================= */
    var ICON = {
      red:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
      snap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="2"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="13" y2="16"/></svg>',
      script:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
      find:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>',
      top:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>'
    };
    function addBar(){
      var snapBtn = viewBtn('summary');
      var nav = el('<nav class="pc-bar px-chrome" aria-label="Consultation shortcuts">'+
        '<button type="button" data-a="red" class="pc-b pc-b-red" aria-label="Go to the red flags">'+ICON.red+'<span>Red flags</span></button>'+
        '<button type="button" data-a="snap" class="pc-b" aria-pressed="false" aria-label="Show the one-page Snapshot"'+(snapBtn ? '' : ' disabled')+'>'+ICON.snap+'<span>Snapshot</span></button>'+
        '<button type="button" data-a="script" class="pc-b" aria-label="Go to the patient safety-net script"'+(SN.length ? '' : ' disabled')+'>'+ICON.script+'<span>Script</span></button>'+
        '<button type="button" data-a="find" class="pc-b pxa-findbtn" aria-label="Search this algorithm" aria-haspopup="dialog" aria-expanded="false">'+ICON.find+'<span>Search</span></button>'+
        '<button type="button" data-a="top" class="pc-b" aria-label="Back to top">'+ICON.top+'<span>Top</span></button></nav>');
      D.body.appendChild(nav);
      D.documentElement.classList.add('pd', 'pxa-has-bar');
      function sync(){ nav.querySelector('[data-a="snap"]').setAttribute('aria-pressed', String(D.body.classList.contains('summary-mode'))); }
      $$('.vt-btn').forEach(function(b){ b.addEventListener('click', function(){ setTimeout(sync, 0); }); });
      sync();
      nav.addEventListener('click', function(e){
        var b = e.target.closest('button[data-a]'); if(!b || b.disabled) return;
        var a = b.getAttribute('data-a');
        if(a === 'top'){ W.scrollTo({top: 0, behavior: 'smooth'}); return; }
        if(a === 'find') return;
        if(a === 'snap'){
          var t = D.body.classList.contains('summary-mode') ? viewBtn('steps') : snapBtn;
          if(t) t.click(); sync();
          var tg = D.querySelector('.view-toggle') || D.querySelector('.alg-progress');
          if(tg) W.scrollTo({top: Math.max(0, tg.getBoundingClientRect().top + W.pageYOffset - stickyTop()), behavior: 'smooth'});
          return;
        }
        if(a === 'red') go(redFlagGoal());
        if(a === 'script' && SN.length){ go(SN[0].label); SN.forEach(function(r){ flash(r.label); flash(r.value); }); }
      });
      return nav;
    }

    /* =========================================================
       9. "UPDATED" BADGE — in the dark page header, with the remaining chips
       ========================================================= */
    function addBadge(){
      var hdr = $('.alg-header'); if(!hdr || hdr.querySelector('.pxa-upd')) return;
      return U.badge('tools/algorithms/' + SLUG + '.html', U.provReviewed(), ASSETS, ROOT).then(function(b){
        if(!b) return;
        var meta = hdr.querySelector('.alg-meta');
        if(meta) meta.insertBefore(b, meta.firstChild);
        else { var h1 = hdr.querySelector('h1'); (h1 || hdr.firstChild).insertAdjacentElement('afterend', b); }
        API.badge = squash(b.textContent);
      });
    }

    /* ---------------- run (each feature isolated) ---------------- */
    var bar = null;
    [buildRefs, applyRedFlags, addUrgency, addDrugBoxes, addCopy,
     function(){ bar = addBar(); }, function(){ addSearch(bar); }, addGive, addBadge
    ].forEach(function(fn){ try{ var r = fn(); if(r && r.catch) r.catch(function(e){ if(W.console) console.warn('alg-ui: feature skipped', e); }); }catch(e){ if(W.console) console.warn('alg-ui: feature skipped', fn.name, e); } });
    API.ready = true;
  }
})();
