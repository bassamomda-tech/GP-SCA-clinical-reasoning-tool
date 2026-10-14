/* ============================================================
   rgp-ui-core.js — gpreasoning.uk shared page-UI library (window.RGPUI)
   The page-agnostic parts of the approved protocol add-ons, factored out of
   assets/protocol-ui.js (Upload 78 / roll-out 82) so algorithm pages can use
   the same code: plain-text "Copy to notes", in-page search, the curated
   patient-leaflet QR panel, the "Updated" badge rules, the urgency tokens,
   drug detection and the "Red flags" naming rule.
   - No side effects: it builds nothing until a page script (alg-ui.js) calls it.
   - Never rewrites clinical text: it copies text verbatim, wraps or moves nodes,
     and adds separate chrome (class .pxa-chrome), which print CSS hides.
   - Makes no third-party requests. Lazy-loads only same-folder assets.
   protocol-ui.js is NOT changed in this upload; it still carries its own copy of
   these functions. Moving it onto this file is a separate step (see NOTES.md).
   ============================================================ */
(function(){
  'use strict';
  var W = window, D = document;
  if(W.RGPUI && W.RGPUI._loaded) return;
  var U = W.RGPUI = W.RGPUI || {};
  U._loaded = true;

  /* ---------------- small helpers (from protocol-ui.js) ---------------- */
  function $(s, c){ return (c||D).querySelector(s); }
  function $$(s, c){ return Array.prototype.slice.call((c||D).querySelectorAll(s)); }
  function el(html){ var t = D.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function noEmoji(s){ return String(s).replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}\u{20E3}]/gu, ''); }
  function squash(s){ return String(s).replace(/\s+/g, ' ').trim(); }
  function pageSlug(){ var m = location.pathname.match(/([^\/]+?)(?:\.html)?$/); return m ? m[1] : 'page'; }
  function pagePath(){ var m = location.pathname.match(/(tools\/[^?#]+?\.html)$/); return m ? m[1] : location.pathname.replace(/^\//, ''); }
  /* a print copy: the print meta tag, or a -print.html file name (5 print twins have no meta tag) */
  function isPrintCopy(){ return !!D.querySelector('meta[name="omelette-print-source"]') || /-print\.html?$/i.test(location.pathname); }
  function loadScript(src){
    return new Promise(function(res, rej){ var s = D.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; D.head.appendChild(s); });
  }
  var uid = 0; function nextId(p){ return (p || 'rgp') + (++uid); }
  U.$ = $; U.$$ = $$; U.el = el; U.esc = esc; U.noEmoji = noEmoji; U.squash = squash; U.pageSlug = pageSlug; U.pagePath = pagePath;
  U.isPrintCopy = isPrintCopy; U.loadScript = loadScript; U.nextId = nextId;

  /* where the calling script lives → the site's assets/ folder and the site root */
  U.base = function(re){
    var s = $$('script[src]').filter(function(x){ return re.test(x.getAttribute('src')); })[0];
    var a = s ? s.src.replace(/[^\/]*$/, '') : null;
    return {assets: a, root: a ? a.replace(/assets\/$/, '') : null};
  };

  function copyText(text){
    if(navigator.clipboard && W.isSecureContext) return navigator.clipboard.writeText(text).catch(function(){ return legacyCopy(text); });
    return legacyCopy(text);
  }
  function legacyCopy(text){
    return new Promise(function(res, rej){
      var t = D.createElement('textarea'); t.value = text; t.setAttribute('readonly', '');
      t.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0'; D.body.appendChild(t); t.select();
      var ok = false; try{ ok = D.execCommand('copy'); }catch(e){}
      t.remove(); ok ? res() : rej(new Error('copy failed'));
    });
  }
  function toast(msg){
    var t = $('.pxa-toast') || D.body.appendChild(el('<div class="pxa-toast pxa-chrome" role="status" aria-live="polite"></div>'));
    t.textContent = msg; t.classList.add('on'); clearTimeout(t._h); t._h = setTimeout(function(){ t.classList.remove('on'); }, 2400);
  }
  U.copyText = copyText; U.toast = toast;

  var COPY_SVG = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';
  U.COPY_SVG = COPY_SVG;
  /* a "Copy …" button: copies getText() and shows a toast; the last copy is kept in RGPUI.lastCopied (tests) */
  U.copyBtn = function(label, aria, getText, msg, cls){
    var b = el('<button type="button" class="pxa-btn pxa-copy pxa-chrome">' + COPY_SVG + '<span></span></button>');
    if(cls) b.className += ' ' + cls;
    b.querySelector('span').textContent = label; b.setAttribute('aria-label', aria);
    b.addEventListener('click', function(e){
      e.stopPropagation();
      var t = getText();
      copyText(t).then(function(){ U.lastCopied = t; toast(msg || 'Copied to clipboard'); }, function(){ toast('Could not copy — select the text instead'); });
    });
    return b;
  };

  /* =========================================================
     1. COPY TO NOTES — verbatim plain text for EMIS / SystmOne
        headings in CAPITALS, list items / rows as "- " lines, lines ≤100 characters.
        opts.drop: extra selectors to drop; opts.special(n, out, indent, inl): a page
        hook that may write lines for a node and return true.
     ========================================================= */
  var NOTE_DROP = '.src, .mg-src, .mg-chev, .mg-sec-n, .mg-why, .pxa-chrome, .px-chrome, .pa-prev, .pc-prev, button, script, style, .px-print-only, .px-screen-hide, svg, [aria-hidden="true"]';
  var BLOCK = /^(ADDRESS|ARTICLE|ASIDE|BLOCKQUOTE|DD|DIV|DL|DT|FIGURE|FOOTER|FORM|H1|H2|H3|H4|H5|H6|HEADER|HR|LI|MAIN|NAV|OL|P|PRE|SECTION|TABLE|TBODY|THEAD|TFOOT|TR|TD|TH|UL|CAPTION)$/;
  /* an element's text on one line; a <br> or a block-level child reads as a space (not "yourselfAspirin") */
  function flat(n){
    if(n.nodeType === 3) return n.data;
    if(n.nodeType !== 1) return '';
    if(n.tagName === 'BR') return ' ';
    var t = Array.prototype.map.call(n.childNodes, flat).join('');
    return BLOCK.test(n.tagName) ? ' ' + t + ' ' : t;
  }
  function inl(n){ return squash(noEmoji(n.nodeType === 1 ? Array.prototype.map.call(n.childNodes, flat).join('') : n.textContent)); }
  function hasBlockKids(n){ return Array.prototype.some.call(n.children, function(c){ return BLOCK.test(c.tagName) || /^(SPAN)$/.test(c.tagName) && c.matches('.stepno, .mg-tl-when, .sp-cond, .sp-drug, .sp-note, .bcond, .rd-lbl, .arrow-lbl'); }); }
  function isHeading(n){ return /^H[1-6]$/.test(n.tagName) || n.matches('.stepno, .mg-tl-when, .dec-q, .mg-loop-head b, .bcond'); }
  function toLines(n, out, indent, opts){
    indent = indent || '';
    if(n.nodeType === 3){ var t = squash(noEmoji(n.data)); if(t) out.push(indent + t); return; }
    if(n.nodeType !== 1) return;
    if(opts && opts.special && opts.special(n, out, indent, inl)) return;
    var tag = n.tagName;
    if(isHeading(n)){ var h = inl(n); if(h){ out.push(''); out.push(indent + h.toUpperCase()); } return; }
    if(tag === 'TR'){
      var cells = $$(':scope > td, :scope > th', n).map(inl);
      var allTh = $$(':scope > th', n).length === cells.length;
      var line = cells.filter(Boolean).join(' | ');
      if(line) out.push(indent + (allTh ? line.toUpperCase() : '- ' + line));
      return;
    }
    if(tag === 'LI'){
      var c = n.cloneNode(true); $$(':scope > ul, :scope > ol', c).forEach(function(x){ x.remove(); });
      var own = inl(c); if(own) out.push(indent + '- ' + own);
      $$(':scope > ul > li, :scope > ol > li', n).forEach(function(li){ toLines(li, out, indent + '  ', opts); });
      return;
    }
    if(n.matches('.say, .mg-dl-row, .mg-split, .mg-kv')){
      if(n.matches('.mg-kv')){ $$(':scope > dt', n).forEach(function(dt){ var dd = dt.nextElementSibling; out.push(indent + '- ' + inl(dt) + ': ' + (dd ? inl(dd) : '')); }); return; }
      var parts = Array.prototype.map.call(n.children.length ? n.childNodes : [n], function(x){ return x.nodeType === 1 || x.nodeType === 3 ? inl(x) : ''; }).filter(Boolean);
      if(parts.length) out.push(indent + '- ' + parts[0] + (parts.length > 1 ? ': ' + parts.slice(1).join(' — ') : ''));
      return;
    }
    if(!hasBlockKids(n)){ var t2 = inl(n); if(t2) out.push(indent + t2); return; }
    Array.prototype.forEach.call(n.childNodes, function(c){ toLines(c, out, indent, opts); });
  }
  function wrap(line, max){
    if(line.length <= max) return [line];
    var m = line.match(/^(\s*)(- )?/), ind = m[1] + (m[2] || ''), pad = m[1] + (m[2] ? '  ' : '');
    var words = line.slice(ind.length).split(' ').filter(Boolean), out = [], cur = ind, has = false;
    words.forEach(function(w){
      if(has && (cur + ' ' + w).length > max){ out.push(cur); cur = pad + w; }
      else cur = has ? cur + ' ' + w : cur + w;
      has = true;
    });
    if(has) out.push(cur);
    return out;
  }
  /* nodes → plain text. opts.head: a first line (already in capitals); opts.drop; opts.special */
  function notesFrom(nodes, opts){
    opts = opts || {};
    var out = [];
    if(opts.head) out.push(opts.head);
    var drop = NOTE_DROP + (opts.drop ? ', ' + opts.drop : '');
    nodes.forEach(function(node){
      var c = node.cloneNode(true);
      $$(drop, c).forEach(function(x){ x.remove(); });
      toLines(c, out, '', opts);
      for(var k = 0; k < out.length; k++) out[k] = out[k].replace(/ +([.,;:)])/g, '$1').replace(/\( +/g, '(');
      out.push('');
    });
    var lines = [], prevBlank = true;
    out.forEach(function(l){
      var blank = !l.trim();
      if(blank && prevBlank) return;
      wrap(l.replace(/\s+$/, ''), 100).forEach(function(x){ lines.push(x); });
      prevBlank = blank;
    });
    while(lines.length && !lines[lines.length - 1].trim()) lines.pop();
    return lines.join('\n');
  }
  U.notesFrom = notesFrom; U.inl = inl;

  /* =========================================================
     2. "UPDATED" BADGE rules — a NICE archive entry for this page dated within
        3 months, else "Reviewed <Mon YYYY>" when the review date is within 3 months,
        else nothing. Never invents a date.
     ========================================================= */
  var MON = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  function within3m(d){
    var now = new Date(), lim = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 3, now.getUTCDate()));
    return d >= lim && d <= now;
  }
  function parseISO(s){ var m = String(s||'').match(/^(\d{4})-(\d{2})(?:-(\d{2}))?$/); return m ? new Date(Date.UTC(+m[1], +m[2]-1, m[3] ? +m[3] : 1)) : null; }
  function parseMonYear(s){
    var m = String(s||'').match(/(?:(\d{1,2})\s+)?(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+(\d{4})/i);
    if(!m) return null;
    var mi = MON.map(function(x){ return x.toLowerCase(); }).indexOf(m[2].slice(0,3).toLowerCase());
    return new Date(Date.UTC(+m[3], mi, m[1] ? +m[1] : 1));
  }
  function fmtMon(d){ return MON[d.getUTCMonth()] + ' ' + d.getUTCFullYear(); }
  function archiveAnchor(it){ return 'nice-' + String(it.code||'').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '-' + it.date; }
  /* the newest archive entry for repo path `path` within 3 months, or null */
  function archiveHit(path){
    var hit = null;
    ((W.RGP_NICE_ARCHIVE || {}).items || []).forEach(function(it){
      var d = parseISO(it.date);
      if(!d || !within3m(d)) return;
      if(!(it.site || []).some(function(s){ return s[1] === path; })) return;
      if(!hit || d > hit.d) hit = {it: it, d: d};
    });
    return hit;
  }
  /* the review date the provenance strip shows ("Last reviewed"), or null when it is unset */
  function provReviewed(){
    var dt = $$('#rgpProvStrip .pv-facts dt').filter(function(x){ return /^last reviewed$/i.test(squash(x.textContent)); })[0];
    var dd = dt && dt.nextElementSibling;
    if(!dd || dd.classList.contains('pv-unset')) return null;
    return parseMonYear(dd.textContent);
  }
  /* builds the badge element (or null). assets/root: where updates-nice-archive.js and pages/ live */
  function badge(path, reviewed, assets, root){
    var ready = W.RGP_NICE_ARCHIVE ? Promise.resolve() : (assets ? loadScript(assets + 'updates-nice-archive.js').catch(function(){}) : Promise.resolve());
    return ready.then(function(){
      var hit = archiveHit(path), b;
      if(hit){
        b = el('<div class="pxa-upd pxa-chrome"><span class="pxa-upd-dot" aria-hidden="true"></span><span class="pxa-upd-t"></span> <a class="pxa-upd-a"></a></div>');
        b.querySelector('.pxa-upd-t').textContent = 'Updated ' + fmtMon(hit.d) + ' —';
        var a = b.querySelector('a'); a.href = (root || '../../') + 'pages/updates.html#' + archiveAnchor(hit.it); a.textContent = 'what changed →';
        a.setAttribute('aria-label', 'What changed in ' + fmtMon(hit.d) + ': ' + (hit.it.code || '') + ' — ' + (hit.it.title || '') + ' (Updates archive)');
        a.title = (hit.it.code ? hit.it.code + ': ' : '') + (hit.it.summary || hit.it.title || '');
        b.setAttribute('data-src', 'archive:' + archiveAnchor(hit.it));
        return b;
      }
      var rd = reviewed;
      if(!rd || !within3m(rd)) return null;
      b = el('<div class="pxa-upd pxa-upd-rev pxa-chrome"><span class="pxa-upd-dot" aria-hidden="true"></span><span class="pxa-upd-t"></span></div>');
      b.querySelector('.pxa-upd-t').textContent = 'Reviewed ' + fmtMon(rd);
      b.setAttribute('data-src', 'review-box');
      return b;
    });
  }
  U.within3m = within3m; U.parseISO = parseISO; U.parseMonYear = parseMonYear; U.fmtMon = fmtMon;
  U.archiveAnchor = archiveAnchor; U.archiveHit = archiveHit; U.provReviewed = provReviewed; U.badge = badge;

  /* =========================================================
     3. SEARCH WITHIN THE PAGE
        cfg: {scope() → [roots], skip: selector, reveal(node), scroll(node), label, placeholder}
        Matched text nodes are replaced by fragments; the originals are kept and put
        back exactly on clear, so the DOM text is restored node for node.
     ========================================================= */
  U.createSearch = function(cfg){
    var S = {q:'', hits:[], recs:[], cur:-1, box:null};
    var SKIP = '.pxa-chrome, .px-chrome, .px-print-only, .px-screen-hide, script, style, [aria-hidden="true"], iframe' + (cfg.skip ? ', ' + cfg.skip : '');
    function clearMarks(){
      for(var i = S.recs.length - 1; i >= 0; i--){
        var r = S.recs[i], first = r.parts[0]; if(!first || !first.parentNode) continue;
        first.parentNode.insertBefore(r.orig, first);
        r.parts.forEach(function(p){ if(p.parentNode) p.parentNode.removeChild(p); });
      }
      S.recs = []; S.hits = []; S.cur = -1;
    }
    function run(q){
      clearMarks(); S.q = q;
      var ql = q.toLowerCase();
      if(q.length >= 2){
        cfg.scope().forEach(function(sec){
          var w = D.createTreeWalker(sec, NodeFilter.SHOW_TEXT, {acceptNode: function(n){
            if(!n.data || n.data.toLowerCase().indexOf(ql) < 0) return NodeFilter.FILTER_REJECT;
            var p = n.parentNode; if(p && p.closest && p.closest(SKIP)) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
          }});
          var list = [], n; while((n = w.nextNode())) list.push(n);
          list.forEach(function(tn){
            var txt = tn.data, low = txt.toLowerCase(), i = 0, j, parts = [], frag = D.createDocumentFragment();
            while((j = low.indexOf(ql, i)) >= 0){
              if(j > i){ var a = D.createTextNode(txt.slice(i, j)); frag.appendChild(a); parts.push(a); }
              var m = D.createElement('mark'); m.className = 'pxa-hit'; m.textContent = txt.slice(j, j + q.length);
              frag.appendChild(m); parts.push(m); S.hits.push(m);
              i = j + q.length;
            }
            if(i < txt.length){ var b = D.createTextNode(txt.slice(i)); frag.appendChild(b); parts.push(b); }
            S.recs.push({orig: tn, parts: parts});
            tn.parentNode.replaceChild(frag, tn);
          });
        });
      }
      S.cur = S.hits.length ? 0 : -1;
      count();
      if(S.cur >= 0) go(0);
    }
    function count(){
      if(!S.box) return;
      S.box.querySelector('.pxa-find-n').textContent = S.q.length < 2 ? '' : (S.hits.length ? (S.cur + 1) + ' of ' + S.hits.length : 'No matches');
      $$('.pxa-find-prev, .pxa-find-next', S.box).forEach(function(b){ b.disabled = S.hits.length < 2; });
    }
    function go(i){
      if(!S.hits.length) return;
      S.cur = (i + S.hits.length) % S.hits.length;
      S.hits.forEach(function(h, k){ h.classList.toggle('pxa-hit-cur', k === S.cur); });
      var h = S.hits[S.cur];
      if(cfg.reveal) cfg.reveal(h);
      if(cfg.scroll) cfg.scroll(h);
      count();
    }
    var t = null;
    function clear(){
      clearTimeout(t); if(S.box) S.box.querySelector('input').value = '';
      clearMarks(); S.q = ''; count();
      if(cfg.onClear) cfg.onClear();
    }
    var id = nextId('pxaFind'), label = cfg.label || 'Search this page';
    var box = el('<div class="pxa-find pxa-chrome" role="search">'+
      '<label class="pxa-find-l" for="'+id+'"></label>'+
      '<div class="pxa-find-row"><input type="search" id="'+id+'" class="pxa-find-i" autocomplete="off" spellcheck="false">'+
      '<button type="button" class="pxa-find-x" aria-label="Clear search">×</button></div>'+
      '<div class="pxa-find-nav"><span class="pxa-find-n" aria-live="polite"></span>'+
      '<button type="button" class="pxa-find-prev" aria-label="Previous match" disabled>↑</button>'+
      '<button type="button" class="pxa-find-next" aria-label="Next match" disabled>↓</button></div></div>');
    box.setAttribute('aria-label', label);
    box.querySelector('label').textContent = label;
    var inp = box.querySelector('input');
    inp.placeholder = cfg.placeholder || ''; inp.setAttribute('aria-label', label + ' (2 or more letters)');
    inp.addEventListener('input', function(){ clearTimeout(t); t = setTimeout(function(){ run(inp.value.trim()); }, 140); });
    inp.addEventListener('keydown', function(e){
      if(e.key === 'Enter'){ e.preventDefault(); clearTimeout(t); if(inp.value.trim() !== S.q) run(inp.value.trim()); else go(S.cur + (e.shiftKey ? -1 : 1)); }
      if(e.key === 'Escape'){ e.preventDefault(); e.stopPropagation(); clear(); if(cfg.onEscape) cfg.onEscape(); }
    });
    box.querySelector('.pxa-find-x').addEventListener('click', function(){ clear(); inp.focus(); });
    box.querySelector('.pxa-find-prev').addEventListener('click', function(){ go(S.cur - 1); });
    box.querySelector('.pxa-find-next').addEventListener('click', function(){ go(S.cur + 1); });
    S.box = box;
    return {box: box, run: run, clear: clear, go: go, state: S};
  };

  /* =========================================================
     4. URGENCY — one token set (accepted 13 Oct 2026). The stronger term wins.
     ========================================================= */
  var URG = [
    ['999', /(\b999\b|A&E|(?<!non-)emergenc|immediately|straight away)/i, '999 / A&E'],
    ['same-day', /same[- ]day|same day/i, 'Same day'],
    ['2ww', /(suspected cancer|\b2WW\b|\bNG12\b)/i, 'Suspected cancer'],
    ['urgent', /(\burgent\b|next day|≤ ?48 ?h|within (a|one) (week|working day)|expedited)/i, 'Urgent'],
    ['routine', /(\broutine\b|GP management|prompt \(non-emergency\))/i, 'Routine']
  ];
  U.URG = URG;
  U.urgencyOf = function(t){ for(var i = 0; i < URG.length; i++) if(URG[i][1].test(t)) return URG[i]; return null; };

  /* =========================================================
     5. GIVE TO PATIENT — the site's curated patient leaflets, as a QR code
        Leaflets: assets/leaflets-data.js (window.LEAFLET_CONDITIONS, LEAFLET_ORGS),
        the data behind tools/leaflets.html. The QR encodes the resource URL itself.
     ========================================================= */
  /* verbatim from tools/leaflets.html ("Reference tool…" footer) */
  var LEAFLET_NOTE = 'Always preview the leaflet yourself before sharing it with a patient — content changes, and the right leaflet for the patient depends on language, literacy, and context.';
  U.LEAFLET_NOTE = LEAFLET_NOTE;
  /* resources to offer, primary first: [{cond, org, u, d, tier}] */
  function resourcesFor(slugs){
    var conds = (W.LEAFLET_CONDITIONS || []), orgs = W.LEAFLET_ORGS || {}, out = [], used = [];
    slugs.forEach(function(sl){
      var c = conds.filter(function(x){ return x.s === sl; })[0]; if(!c) return;
      used.push(c);
      [c.p].concat(c.a || []).forEach(function(r, i){
        if(!r || !/^https:\/\//.test(r.u || '')) return;
        out.push({cond: c, org: orgs[r.o] || {name: r.o, short: r.o, tone: '#475569'}, u: r.u, d: r.d || '', tier: i ? 'Alternative' : 'Best leaflet'});
      });
    });
    return {list: out, conds: used};
  }
  U.resourcesFor = resourcesFor;
  function drawQR(text, host, label, assets){
    var go = function(){
      try{
        var q = W.qrcode(0, 'M'); q.addData(text); q.make();
        host.innerHTML = q.createSvgTag({cellSize: 5, margin: 3, scalable: true});
        var svg = host.querySelector('svg'); svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', 'QR code: ' + (label || text));
        host.setAttribute('data-qr', text);
      }catch(e){ host.textContent = 'QR code unavailable — use Copy link.'; }
    };
    if(W.qrcode) return go();
    if(!assets){ host.textContent = 'QR code unavailable — use Copy link.'; return; }
    loadScript(assets + 'qrcode-generator.js').then(go, function(){ host.textContent = 'QR code unavailable — use Copy link.'; });
  }
  U.drawQR = drawQR;
  /* cfg: {slugs() → leaflet slugs, assets, root, host(btn) → element the panel goes after} */
  U.leafletButton = function(cfg){
    var panel = null;
    var b = el('<button type="button" class="pxa-btn pxa-give pxa-chrome" aria-haspopup="dialog" aria-expanded="false" aria-label="Give to patient: patient information leaflets to share by QR code or link"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4v-3"/></svg><span>Give to patient</span></button>');
    function close(){ if(panel){ b.setAttribute('aria-expanded', 'false'); panel.remove(); panel = null; } }
    function loadLeaflets(){ return W.LEAFLET_CONDITIONS || !cfg.assets ? Promise.resolve() : loadScript(cfg.assets + 'leaflets-data.js').catch(function(){}); }
    b.addEventListener('click', function(e){
      e.stopPropagation();
      if(panel){ close(); return; }
      panel = el('<div class="pxa-qr pxa-chrome" role="dialog" aria-label="Patient information to share">'+
        '<div class="pxa-qr-h"><b>Patient information to share</b><button type="button" class="pxa-x" aria-label="Close">×</button></div>'+
        '<div class="pxa-qr-body"><p class="pxa-qr-wait">Loading patient leaflets…</p></div></div>');
      panel.querySelector('.pxa-x').addEventListener('click', function(){ close(); b.focus(); });
      panel.addEventListener('keydown', function(ev){ if(ev.key === 'Escape'){ ev.stopPropagation(); close(); b.focus(); } });
      (cfg.host ? cfg.host(b) : b.parentNode).insertAdjacentElement('afterend', panel);
      b.setAttribute('aria-expanded', 'true');
      panel.querySelector('.pxa-x').focus();
      var me = panel;
      loadLeaflets().then(function(){ if(panel === me) fill(me); });
    });
    function fill(pn){
      var R = resourcesFor(cfg.slugs()), body = pn.querySelector('.pxa-qr-body');
      if(!R.list.length){ body.innerHTML = '<p class="pxa-qr-wait">Patient leaflets could not be loaded. Open the Patient Leaflets page instead.</p>'; return; }
      var multi = R.conds.length > 1, tid = nextId('pxaLf');
      body.innerHTML =
        '<div class="pxa-lf-tabs" role="tablist" aria-label="Choose a patient resource"></div>'+
        '<div class="pxa-qr-grid" role="tabpanel" id="'+tid+'"><div class="pxa-qr-code"></div>'+
        '<div class="pxa-qr-side"><div class="pxa-lf-tier"></div><div class="pxa-lf-title"><span class="pxa-lf-badge"></span><b class="pxa-lf-name"></b></div>'+
        '<p class="pxa-lf-d"></p><a class="pxa-qr-url" target="_blank" rel="noopener noreferrer"></a>'+
        '<div class="pxa-qr-btns"><button type="button" class="pxa-btn pxa-lf-copy">'+COPY_SVG+'<span>Copy link</span></button>'+
        (navigator.share ? '<button type="button" class="pxa-btn pxa-lf-share">Share</button>' : '')+'</div></div></div>'+
        '<div class="pxa-lf-extra"></div>'+
        '<p class="pxa-qr-note"></p>'+
        '<a class="pxa-lf-more" target="_blank" rel="noopener">More leaflets for this condition →</a>'+
        '<p class="pxa-qr-priv">The QR code is made on this device. Nothing is sent from this site — no texts or emails; "Share" uses your own device’s share options.</p>';
      var tabs = body.querySelector('.pxa-lf-tabs'), cur = 0;
      R.list.forEach(function(r, i){
        var t = el('<button type="button" role="tab" class="pxa-lf-tab" aria-controls="'+tid+'"><span class="pxa-lf-dot" aria-hidden="true"></span><span></span></button>');
        t.querySelector('.pxa-lf-dot').style.background = r.org.tone;
        t.querySelector('span:last-child').textContent = r.org.short + (multi ? ' · ' + r.cond.n : '');
        t.setAttribute('aria-label', r.org.name + ' — ' + r.cond.n + (i ? '' : ' (best leaflet)'));
        t.addEventListener('click', function(){ select(i); });
        t.addEventListener('keydown', function(e){
          var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if(!k) return;
          e.preventDefault(); var j = (i + k + R.list.length) % R.list.length; select(j); tabs.children[j].focus();
        });
        tabs.appendChild(t);
      });
      function select(i){
        cur = i; var r = R.list[i];
        Array.prototype.forEach.call(tabs.children, function(t, k){ t.setAttribute('aria-selected', String(k === i)); t.tabIndex = k === i ? 0 : -1; });
        body.querySelector('.pxa-lf-tier').textContent = r.tier + (i ? '' : ' · UK lead source for this topic');
        var bd = body.querySelector('.pxa-lf-badge'); bd.textContent = r.org.short; bd.style.background = r.org.tone;
        body.querySelector('.pxa-lf-name').textContent = r.org.name + ' — ' + r.cond.n;
        body.querySelector('.pxa-lf-d').textContent = r.d;
        var a = body.querySelector('.pxa-qr-url'); a.href = r.u; a.textContent = r.u.replace(/^https:\/\//, '');
        a.setAttribute('aria-label', 'Open ' + r.org.name + ' — ' + r.cond.n + ' (opens in a new tab)');
        var c = r.cond, ex = body.querySelector('.pxa-lf-extra');
        ex.innerHTML = c.t && c.t.length ? '<div class="pxa-lf-trans"><b>Translations:</b> <span></span></div>' : '';
        if(c.t && c.t.length) ex.querySelector('span').textContent = c.t.join(' · ');
        var more = body.querySelector('.pxa-lf-more'); more.href = (cfg.root || '../../') + 'tools/leaflets.html#' + encodeURIComponent(c.s);
        more.setAttribute('aria-label', 'More leaflets for ' + c.n + ' on the Patient Leaflets page (opens in a new tab)');
        drawQR(r.u, body.querySelector('.pxa-qr-code'), r.org.name + ' — ' + c.n, cfg.assets);
      }
      body.querySelector('.pxa-qr-note').textContent = LEAFLET_NOTE;
      body.querySelector('.pxa-lf-copy').setAttribute('aria-label', 'Copy the link to this patient leaflet');
      body.querySelector('.pxa-lf-copy').addEventListener('click', function(){ var u = R.list[cur].u; copyText(u).then(function(){ U.lastCopied = u; toast('Link copied'); }, function(){ toast('Could not copy — select the link instead'); }); });
      var sh = body.querySelector('.pxa-lf-share');
      if(sh){ sh.setAttribute('aria-label', 'Share the link to this patient leaflet using this device'); sh.addEventListener('click', function(){ var r = R.list[cur]; navigator.share({title: r.org.name + ' — ' + r.cond.n, url: r.u}).catch(function(){}); }); }
      select(0);
    }
    return b;
  };

  /* =========================================================
     6. DRUG DETECTION — curated list; a dose must directly follow the drug name.
     ========================================================= */
  /* [display name, regex source, proposed BNF slug (UNVERIFIED), in Ready Prescriptions data] — as protocol-ui.js */
  var DRUGS = [
    ['Ramipril','ramipril','ramipril',0], ['Amlodipine','amlodipine','amlodipine',0], ['Indapamide','indapamide','indapamide',0],
    ['Spironolactone','spironolactone','spironolactone',1], ['Aspirin','aspirin','aspirin',0], ['Atorvastatin','atorvastatin','atorvastatin',0],
    ['Clopidogrel','clopidogrel','clopidogrel',0], ['Dexamethasone','dexamethasone','dexamethasone',1],
    ['Metformin','metformin','metformin-hydrochloride',0], ['Gliclazide','gliclazide','gliclazide',0],
    ['Empagliflozin','empagliflozin','empagliflozin',0], ['Dapagliflozin','dapagliflozin','dapagliflozin',0],
    ['Pioglitazone','pioglitazone','pioglitazone',0], ['Sitagliptin','sitagliptin','sitagliptin',0],
    ['Liraglutide','liraglutide','liraglutide',0], ['Semaglutide','semaglutide','semaglutide',0],
    ['Folic acid','folic acid','folic-acid',1], ['Prednisolone','prednisolone','prednisolone',1], ['Montelukast','montelukast','montelukast',0],
    ['Salbutamol','salbutamol','salbutamol',1], ['Ipratropium bromide','ipratropium(?: bromide)?','ipratropium-bromide',0],
    ['Magnesium sulfate','magnesium sulph?f?ate','magnesium-sulfate',0], ['Hydrocortisone','hydrocortisone','hydrocortisone',1],
    ['Adrenaline','adrenaline','adrenaline-epinephrine',0], ['Beclometasone','beclometasone(?: dipropionate)?','beclometasone-dipropionate',0],
    ['Budesonide','budesonide','budesonide',1], ['Naproxen','naproxen','naproxen',1], ['Ibuprofen','ibuprofen','ibuprofen',1],
    ['Codeine','codeine(?: phosphate)?','codeine-phosphate',1], ['Amitriptyline','amitriptyline','amitriptyline-hydrochloride',1],
    ['Lansoprazole','lansoprazole','lansoprazole',1], ['Omeprazole','omeprazole','omeprazole',1]
  ];
  var DOSE = '(?:\\s+(?:MR|m/r|modified-release|hydrochloride|bromide|dipropionate))?\\s*(?:\\([^)]{0,24}\\)\\s*)?(?:(?:up to|about|initially|at)\\s+)?\\d+(?:\\.\\d+)?(?:\\s*[–-]\\s*\\d+(?:\\.\\d+)?)?\\s*(?:mg|micrograms?|mcg|g|units?|mL|ml)\\b';
  var DRUG_RE = DRUGS.map(function(d){ return {d: d, re: new RegExp('(^|[^A-Za-z-])(' + d[1] + ')' + DOSE, 'gi')}; });
  /* BNF links go to the BNF search page (owner decision); the /drugs/ slugs are unverified. */
  var BNF_SLUGS_VERIFIED = false;
  U.bnfUrl = function(d){ return BNF_SLUGS_VERIFIED ? 'https://bnf.nice.org.uk/drugs/' + d[2] + '/' : 'https://bnf.nice.org.uk/search/?q=' + encodeURIComponent(d[0].toLowerCase()); };
  U.DRUGS = DRUGS;
  U.findDrugs = function(text){
    var found = [], doses = [];
    DRUG_RE.forEach(function(x){
      x.re.lastIndex = 0; var m;
      while((m = x.re.exec(text))){
        if(found.indexOf(x.d) < 0) found.push(x.d);
        doses.push({i: m.index + m[1].length, s: m[0].slice(m[1].length)});
      }
    });
    return {drugs: found, doses: doses};
  };
  /* other medicines that may share a line with a curated drug: if one is named, a box would be
     labelled with only part of the line, so the line is left as plain text (a missed box is fine) */
  var OTHER_DRUG = /\b(paracetamol|diltiazem|verapamil|bisoprolol|atenolol|propranolol|metoprolol|nifedipine|isosorbide|nicorandil|ranolazine|ivabradine|glyceryl trinitrate|GTN|famotidine|ranitidine|esomeprazole|pantoprazole|rabeprazole|sertraline|citalopram|fluoxetine|mirtazapine|diclofenac|celecoxib|etoricoxib|tramadol|morphine|oxycodone|gabapentin|pregabalin|colchicine|allopurinol|warfarin|apixaban|rivaroxaban|edoxaban|dabigatran|heparin|enoxaparin|dalteparin|tinzaparin|ticagrelor|prasugrel|simvastatin|rosuvastatin|pravastatin|ezetimibe|losartan|candesartan|lisinopril|perindopril|enalapril|furosemide|bumetanide|bendroflumethiazide|doxazosin|levothyroxine|insulin|amoxicillin|clarithromycin|doxycycline|nitrofurantoin|trimethoprim|metronidazole|flucloxacillin|phenoxymethylpenicillin|cefalexin|ciprofloxacin|azithromycin|sumatriptan|zolmitriptan|rizatriptan|topiramate|propranolol|candesartan|pizotifen|metoclopramide|domperidone|prochlorperazine|ondansetron|cyclizine|betahistine|carbimazole|methotrexate|hydroxychloroquine|sulfasalazine|loperamide|lactulose|macrogol|senna|docusate|mebeverine|hyoscine|tamsulosin|finasteride|oxybutynin|mirabegron|sildenafil|tadalafil|vardenafil|nitrates?|hydroxocobalamin|cyanocobalamin|zinc|methylprednisolone|triamcinolone|antihistamines?|ICS|LABA|SABA|MART|\w+(?:olol|pril|sartan|dipine|statin|floxacin|cillin|mycin|cycline|tidine|azepam|oxetine|triptan|parin|xaban|gliptin|gliflozin|glutide|lukast|semide|thiazide))\b/i;
  U.otherDrug = function(text, found){
    var re = new RegExp(OTHER_DRUG.source, 'gi'), m;
    while((m = re.exec(text))){
      var w = m[1].toLowerCase();
      if(!found.some(function(d){ return new RegExp('^(' + d[1] + ')$', 'i').test(w); })) return m[1];
    }
    return null;
  };
  var CHECKS = [
    ['eGFR / renal', /\beGFR\b|\brenal\b|\bkidney|\bcreatinine\b|\bCKD\b/i],
    ['K⁺ / U&E', /K⁺|potassium|U&E|hyperkal/i],
    ['Interactions', /interact|never combine|do not double|with (?:an? )?(?:NSAID|PDE5|ACE|ARB)|alongside/i],
    ['Pregnancy', /pregnan|breastfeed|conception/i],
    ['Monitoring', /\bmonitor|\brecheck|\bre-check|\bcheck |\bbaseline|\bwithin \d|\brepeat/i],
    ['Caution', /caution|contraindicat|avoid|warning|MHRA|DKA|hypoglyc|sick-day|stop /i]
  ];
  function clauses(text){ return text.split(/(?<=[.;])\s+|\s+—\s+|\s+·\s+/).map(squash).filter(function(c){ return c.length > 6; }); }
  /* the "Check" clauses already in this text, verbatim (max 6) */
  U.drugChecks = function(text){
    var checks = [];
    clauses(text).forEach(function(c){ for(var i = 0; i < CHECKS.length; i++){ if(CHECKS[i][1].test(c)){ checks.push([CHECKS[i][0], c]); break; } } });
    return checks.slice(0, 6);
  };

  /* =========================================================
     7. "RED FLAGS" STEP NAME — the protocol rule's word lists
     ========================================================= */
  U.RF = {
    ALREADY: /^red[ -]?flags?\b/i,
    START: /^(red[ -]flag|emergenc|urgent|same[- ]day|999|alarm|danger|limb threat|admit now|unstable)/i,
    WORDS: /(red[ -]?flag|emergenc|severe|urgent|same[- ]day|\b999\b|alarm|danger)/i,
    ACTION: /(\b999\b|same[- ]day|A&E|emergency|immediate|admit|urgent|today)/i,
    MAX_STEP: 6
  };
})();
