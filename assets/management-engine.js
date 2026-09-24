/* ============================================
   Reasoning GP — Management Card engine
   Renders the visual management "spine" from a
   structured data object into #mgRoot, using the
   classes defined in management.css. One disease
   page = one MG.render({...}) call.
   ============================================ */
(function(){
  "use strict";

  function el(html){ var t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstChild; }

  /* ---- block renderers (inside a node) ---- */
  function bP(b){ return '<p class="mg-node-sub">'+b.html+'</p>'; }

  function bKv(b){
    var rows = b.rows.map(function(r){ return '<dt>'+r[0]+'</dt><dd>'+r[1]+'</dd>'; }).join('');
    return '<dl class="mg-kv">'+rows+'</dl>';
  }

  function bTable(b){
    var head = '<tr>'+b.head.map(function(h){ return '<th>'+h+'</th>'; }).join('')+'</tr>';
    // plain-text column labels for the phone stacked view (strip tags + quotes)
    var labels = b.head.map(function(h){ return String(h).replace(/<[^>]*>/g,'').replace(/"/g,'&quot;'); });
    var body = b.rows.map(function(r){
      return '<tr>'+r.map(function(c,i){ return '<td data-label="'+(labels[i]||'')+'">'+c+'</td>'; }).join('')+'</tr>';
    }).join('');
    return '<div class="mg-table-wrap"><table class="mg-table mg-table-stack"><thead>'+head+'</thead><tbody>'+body+'</tbody></table></div>';
  }

  function bTiles(b){
    var v = b.v || 'life';
    var items = b.items.map(function(it){
      var extra = '';
      if(it.target) extra += '<span class="target">'+it.target+'</span>';
      if(it.effect) extra += '<span class="effect">'+it.effect+'</span>';
      var head = it.t ? '<b>'+it.t+'</b>' : '';
      return '<div class="mg-tile mg-tile-'+v+'">'+head+(it.html||'')+extra+'</div>';
    }).join('');
    return '<div class="mg-tiles">'+items+'</div>';
  }

  function bLadder(b){
    // Hypertension's stepwise ladder is `.ladder` > `.card` with a `.stepno`
    // badge and a serif h3 — the user's preferred treatment. Emitting that
    // markup here gives every protocol's ladder the same design, since this is
    // the single shared renderer. The CSS already exists (extracted from
    // hypertension v2.3), so no stylesheet change is needed.
    var html = '<div class="ladder">';
    b.steps.forEach(function(s, i){
      // `danger:true` is the legacy red hook; `tone:` accepts any legal card tone
      // so a rung can carry the palette's meaning (amber = caution, cream = GP
      // management). Backwards compatible: steps with neither render plain.
      var tone = s.danger ? ' red' : (s.tone ? ' '+s.tone : '');
      html += '<div class="card'+tone+'">';
      html += '<span class="stepno">'+(/^\d+$/.test(String(s.step)) ? 'Step '+s.step : s.step)+
              (s.when ? ' — '+s.when : '')+'</span>';
      html += '<h3>'+s.title+'</h3>';
      if(s.html) html += '<p>'+s.html+'</p>';
      if(s.splits){
        html += '<div class="mg-splits">';
        s.splits.forEach(function(sp){
          html += '<div class="mg-split"><div class="sp-cond">'+sp.cond+'</div><div class="sp-drug">'+sp.drug+'</div><div class="sp-note">'+sp.note+'</div></div>';
        });
        html += '</div>';
      }
      if(s.warn) html += '<div class="mg-warn">'+s.warn+'</div>';
      html += '</div>';
      if(i < b.steps.length-1){
        var lbl = b.steps[i+1].fromLabel || s.toLabel || '';
        html += '<div class="mg-rung-down">'+(lbl?'<span class="rd-lbl">'+lbl+'</span>':'')+'</div>';
      }
    });
    html += '</div>';
    return html;
  }

  function bTimeline(b){
    var items = b.items.map(function(it){
      return '<div class="mg-tl-item"><div class="mg-tl-dot">'+(it.n||'')+'</div>'+
             '<div class="mg-tl-body"><span class="mg-tl-when">'+it.when+'</span>'+
             '<h5>'+it.title+'</h5><p>'+it.html+'</p></div></div>';
    }).join('');
    return '<div class="mg-timeline">'+items+'</div>';
  }

  function bSay(b){ return '<div class="mg-say">'+b.html+'</div>'; }
  function bWarn(b){ return '<div class="mg-warn">'+b.html+'</div>'; }
  function bWhy(b){
    return '<div class="mg-why"><button class="mg-why-btn" aria-expanded="false">'+(b.label||'Why?')+
           ' <span class="caret">▾</span></button><div class="mg-why-body">'+b.html+'</div></div>';
  }

  /* ---- v5 blocks: the hypertension card vocabulary ---- */
  function bCards(b){
    var cls = (b.cols === 2) ? 'mg-cards mg-cards-2' : 'mg-cards';
    var items = (b.items||[]).map(function(c){
      return '<div class="mg-card mg-card-'+(c.tone||'plain')+'">'+
        (c.h ? '<h3>'+c.h+'</h3>' : '')+
        (c.html ? '<p>'+c.html+'</p>' : '')+
        (c.src ? '<span class="mg-src">'+c.src+'</span>' : '')+
      '</div>';
    }).join('');
    return '<div class="'+cls+'">'+items+'</div>';
  }

  function bDl(b){
    var rows = (b.rows||[]).map(function(r){ return '<div class="mg-dl-row"><dt>'+r[0]+'</dt><dd>'+r[1]+'</dd></div>'; }).join('');
    return '<div class="mg-dl">'+rows+'</div>';
  }

  function bHtml(b){ return b.html; }

  var BLOCKS = { p:bP, kv:bKv, table:bTable, tiles:bTiles, ladder:bLadder, timeline:bTimeline, say:bSay, warn:bWarn, why:bWhy, cards:bCards, dl:bDl, html:bHtml };

  function renderBlocks(blocks){
    if(!blocks) return '';
    return blocks.map(function(b){ var fn = BLOCKS[b.b]; return fn ? fn(b) : ''; }).join('');
  }

  /* ---- flow item renderers ---- */
  function renderNode(item){
    var d = item.d || 'found';
    var extra = item.style ? ' style="'+item.style+'"' : '';
    var html = '<div class="mg-node" data-d="'+d+'"'+extra+'>';
    html += '<div class="mg-node-head">';
    if(item.n) html += '<span class="mg-node-num">'+item.n+'</span>';
    if(item.tag) html += '<span class="mg-node-tag">'+item.tag+'</span>';
    html += '<h3>'+item.title+'</h3></div>';
    html += renderBlocks(item.blocks);
    html += '</div>';
    return html;
  }

  function renderDecision(item){
    return '<div class="mg-decision"><div class="dec-q">'+item.q+'</div>'+
           (item.note ? '<div class="dec-note">'+item.note+'</div>' : '')+'</div>';
  }

  function renderBranch2(item){
    var cols = item.cols.map(function(c){
      var condCls = c.kind === 'yes' ? 'yes' : 'no';
      var border = c.kind === 'yes' ? 'var(--m-drug)' : 'var(--m-follow)';
      var d = c.kind === 'yes' ? 'drug' : 'life';
      return '<div class="bcol"><span class="bcond '+condCls+'">'+c.cond+'</span>'+
             '<div class="mg-node" data-d="'+d+'" style="border-left-color:'+border+'">'+
             '<div class="mg-node-head" style="gap:8px"><h3 style="font-size:16px">'+c.title+'</h3></div>'+
             '<p class="mg-node-sub">'+c.html+'</p></div></div>';
    }).join('');
    return '<div class="mg-branch2">'+cols+'</div>';
  }

  function renderLoop(item){
    var checks = item.checks.map(function(c){
      return '<div class="mg-loop-check"><b>'+c.b+'</b>'+c.html+'</div>';
    }).join('');
    var back = item.back ? '<div class="mg-loop-back">'+
      '<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/></svg>'+
      item.back+'</div>' : '';
    return '<div class="mg-loop"><div class="mg-loop-head"><span class="li-ic">'+(item.icon||'🔁')+'</span><b>'+item.title+'</b></div>'+
           (item.intro ? '<p style="font-size:12.5px;color:#7c4a06;line-height:1.5;margin-bottom:4px">'+item.intro+'</p>' : '')+
           '<div class="mg-loop-steps">'+checks+'</div>'+back+'</div>';
  }

  var FLOW = { node:renderNode, decision:renderDecision, branch2:renderBranch2, loop:renderLoop };

  function arrow(label, short){
    return '<div class="mg-arrow'+(short?' short':'')+'">'+(label?'<span class="arrow-lbl">'+label+'</span>':'')+'</div>';
  }

  /* ---- v4 sections: the hypertension v2.3 layout, data-driven ---- */
  function secHead(n, title, sub){
    return '<div class="mg-sec-h"><span class="mg-sec-n">'+n+'</span><h2>'+title+'</h2></div>'+
           (sub ? '<p class="mg-sec-sub">'+sub+'</p>' : '');
  }

  function renderSection(s, n){
    return '<section'+(s.id?' id="'+s.id+'"':'')+'>'+secHead(n, s.title, s.sub)+renderBlocks(s.blocks)+'</section>';
  }

  function renderSecNav(items){
    if(!items.length) return '';
    return '<nav class="mg-secnav">'+items.map(function(i){
      return '<a href="#'+i.id+'">'+i.label+'</a>';
    }).join('')+'</nav>';
  }

  function renderMeta(list){
    return '<div class="mg-meta">'+list.map(function(m){
      var cls = m.tone ? ' mg-pill-'+m.tone : '';
      return '<span class="mg-pill'+cls+'">'+(m.t||m)+'</span>';
    }).join('')+'</div>';
  }

  function renderQuick(list, sub){
    return '<section id="quick">'+secHead('01','The 30-second answer', sub || 'If you read nothing else on this page, read these cards. Every number traces to the recommendation cited in the Evidence panel.')+
      '<div class="mg-quick">'+list.map(function(q){
        return '<div class="mg-qcard mg-q-'+(q.tone||'plain')+'"><h3>'+q.h+'</h3><p>'+q.html+'</p></div>';
      }).join('')+'</div></section>';
  }

  function renderPathway(list, sub){
    return '<section id="pathway">'+secHead('02','The 3-minute pathway', sub || 'The whole consultation in a few moves. Red steps are where patients come to harm — do not skip them.')+
      '<div class="mg-path">'+list.map(function(p){
        return '<div class="mg-pstep'+(p.alert?' alert':'')+'"><h3>'+p.title+'</h3><p>'+p.html+'</p></div>';
      }).join('')+'</div></section>';
  }

  function renderEvidence(list, sub, n){
    return '<section id="evidence">'+secHead(n||'03','Evidence panel', sub || 'Every clinical claim on this page maps to these sources. Doses are deferred to the BNF.')+
      '<div class="mg-ev"><ul>'+list.map(function(e){
        return '<li><b>'+e.t+'</b>'+
          (e.url ? '<br><a href="'+e.url+'" rel="noopener">'+(e.urlText||e.url.replace(/^https?:\/\//,''))+'</a>' : '')+
          (e.detail ? '<span class="rd"> — '+e.detail+'</span>' : '')+'</li>';
      }).join('')+'</ul></div></section>';
  }

  function renderCoverage(cov, n){
    return '<section id="coverage">'+secHead(n||'04','Merge coverage — what came from where', cov.intro || 'Checked line-by-line against the legacy pages. Every element of each now has a home here.')+
      '<div class="mg-cov"><table class="mg-table mg-table-stack"><thead><tr><th>Legacy page section</th><th>Where it lives now</th></tr></thead><tbody>'+
      cov.rows.map(function(r){
        return '<tr><td data-label="Legacy section">'+r[0]+'</td><td data-label="Now">'+r[1]+'</td></tr>';
      }).join('')+'</tbody></table></div></section>';
  }

  function renderHistory(list, n){
    return '<section id="history">'+secHead(n||'05','Version history','')+
      '<div class="mg-hist"><table class="mg-table mg-table-stack"><thead><tr><th>Version</th><th>Date</th><th>Change</th></tr></thead><tbody>'+
      list.map(function(h){
        return '<tr><td data-label="Version"><b>'+h.v+'</b></td><td data-label="Date">'+h.date+'</td><td data-label="Change">'+h.change+'</td></tr>';
      }).join('')+'</tbody></table></div></section>';
  }

  var LEGEND = [
    ['found','Foundation'],['life','Non-drug'],['drug','Medication'],
    ['monitor','Monitoring'],['follow','Follow-up'],['safety','Safety-net'],['refer','Refer']
  ];

  function render(data){
    if(window.MG) window.MG._data = data;
    var root = document.getElementById('mgRoot');
    if(!root){ console.warn('MG: #mgRoot not found'); return; }
    if(data.title) document.title = data.docTitle || (data.title + ' — Protocol · Reasoning GP');

    var html = '';

    // stem
    html += '<div class="mg-stem"><div class="mg-stem-ic">'+(data.icon||'🩺')+'</div><div>'+
            '<span class="mg-stem-eyebrow">'+(data.eyebrow||'Protocol · Already diagnosed')+'</span>'+
            '<b class="mg-stem-title">'+data.stemTitle+'</b>'+
            '<small>'+data.stemSub+'</small></div></div>';

    // meta pills (guidelines / review dates / version)
    if(data.meta && data.meta.length) html += renderMeta(data.meta);

    // optional raw lead block (cross-layer links etc.)
    if(data.lead) html += data.lead;

    // at-a-glance strip — rendered up top (before the 30-second answer) so that on
    // merged-protocol pages (sections, no flow) it never lands after the version history
    if(data.glance && data.glance.length){
      html += '<div class="mg-glance">'+data.glance.map(function(g){
        return '<div class="gi"><span class="gi-lbl">'+g.lbl+'</span><span class="gi-val">'+g.val+'</span>'+
               (g.sub?'<span class="gi-sub">'+g.sub+'</span>':'')+'</div>';
      }).join('')+'</div>';
    }

    // jump nav across the numbered sections — built and rendered BEFORE the
    // 30-second answer, so the whole contents list sits at the top of the page
    // rather than wedged between section 01 and section 02.
    var navItems = [];
    if(data.quick && data.quick.length) navItems.push({id:'quick', label:'30-second answer'});
    if(data.pathway && data.pathway.length) navItems.push({id:'pathway', label:'3-minute pathway'});
    (data.sections||[]).forEach(function(s){ if(s.id && s.nav !== false) navItems.push({id:s.id, label:s.nav || s.title}); });
    if(data.evidence && data.evidence.length) navItems.push({id:'evidence', label:'Evidence'});
    if(navItems.length > 2) html += renderSecNav(navItems);

    // 30-second answer
    if(data.quick && data.quick.length) html += renderQuick(data.quick, data.quickSub);


    // 3-minute pathway
    if(data.pathway && data.pathway.length) html += renderPathway(data.pathway, data.pathwaySub);
    html += '<!--MG-SECTIONS-->';

    // legend + flow (only when the page uses the flow vocabulary)
    if(data.flow && data.flow.length){
      html += '<div class="mg-legend">'+LEGEND.map(function(l){
        return '<span class="lg lg-'+l[0]+'"><span class="lg-dot"></span>'+l[1]+'</span>';
      }).join('')+'</div>';
      html += '<div class="mg-flow">';
      data.flow.forEach(function(item, i){
        if(i>0) html += arrow(item.arrow, item.arrowShort);
        var fn = FLOW[item.t || 'node'];
        html += fn ? fn(item) : '';
      });
      html += '</div>';
    }

    // evidence panel / merge coverage / version history
    var secN = 2; // 01 = 30-second answer, 02 = 3-minute pathway
    function nextN(){ secN++; return (secN<10?'0':'')+secN; }
    // generic numbered sections (hypertension layout)
    if(data.sections && data.sections.length){
      var secHtml = data.sections.map(function(s){ return renderSection(s, nextN()); }).join('');
      html = html.replace('<!--MG-SECTIONS-->', secHtml);
    }
    if(data.evidence && data.evidence.length) html += renderEvidence(data.evidence, data.evidenceSub, nextN());
    if(data.coverage && data.coverage.rows) html += renderCoverage(data.coverage, nextN());
    if(data.history && data.history.length) html += renderHistory(data.history, nextN());

    // footnote
    html += '<div class="mg-foot"><strong>Educational use only.</strong> '+
            (data.foot || 'Management pathway for an already-confirmed diagnosis. Not a substitute for clinical judgement, the patient\u2019s individual context, or your local formulary. Verify drugs and doses against the current BNF and live NICE.')+
            (function(){ var g=data.guideline||'', noNice=/No NICE guideline/.test(JSON.stringify(data)); if(g==='No NICE guideline') return ' No NICE guideline covers this condition.'; return (g?' Anchored to '+g+'.':'')+(noNice?' NICE guidance on this condition is limited in scope \u2014 see the Evidence panel.':''); })()+'<span class="rgp-reviewed" style="display:block;margin-top:6px;font-size:12px;color:#6b7280"><b>Reviewed: '+(data.reviewed||'July 2026')+'</b>'+(data.nextReview?' · next review due '+data.nextReview:'')+(/No NICE guideline/.test(JSON.stringify(data))?' · sources under review':' · citations verified against the named sources')+'</span></div>';

    root.innerHTML = html;


    // TABLE FIT PASS — every table in the rendered page gets a colgroup of
    // CONTENT-PROPORTIONAL column widths, so a narrow label column stops
    // taking an equal share of a phone's width and the prose column stops
    // wrapping two words to a line. Tables STAY TABLES at every width: an
    // earlier version of this pass restacked each row into a labelled card on
    // phones, which was rejected on review — the table is the thing being read.
    // Runs on hand-written <table>s inside {b:"html"} cards as well as bTable's
    // output, which is why it lives here rather than in bTable.
    root.querySelectorAll('table').forEach(function(t){
      var cols = 0;
      t.querySelectorAll('tr').forEach(function(tr){
        var n = 0;
        Array.prototype.forEach.call(tr.cells, function(c){ n += c.colSpan || 1; });
        if(n > cols) cols = n;
      });
      if(cols < 2 || cols > 8) return;
      // a colspan breaks the cell-index → column mapping, so such a table keeps
      // the browser's automatic layout rather than being given wrong widths
      var skip = false;
      t.querySelectorAll('tr').forEach(function(tr){
        if(tr.cells.length !== cols) skip = true;
        Array.prototype.forEach.call(tr.cells, function(c){ if((c.colSpan||1) > 1) skip = true; });
      });
      if(skip || t.querySelector('colgroup')) return;

      var sum = [], cnt = [];
      for(var i = 0; i < cols; i++){ sum[i] = 0; cnt[i] = 0; }
      t.querySelectorAll('tbody tr').forEach(function(tr){
        Array.prototype.forEach.call(tr.cells, function(c, i){
          sum[i] += (c.textContent || '').trim().length; cnt[i]++;
        });
      });
      var heads = t.querySelectorAll('thead th');
      // Longest ATOMIC token per column. Mean length alone is not enough: a
      // column of short values like "<135/85" or "1.4.15–1.4.16" has a small
      // mean but must never be broken mid-token — a BP threshold or a NICE
      // reference split across two lines is a clinical defect, not a cosmetic
      // one. Each column therefore gets a floor wide enough for its longest
      // token, and the remaining width is shared out by prose weight.
      var maxTok = [];
      for(var m = 0; m < cols; m++) maxTok[m] = 1;
      function scanTokens(cells){
        Array.prototype.forEach.call(cells, function(c, i){
          if(i >= cols) return;
          (c.textContent || '').trim().split(/\s+/).forEach(function(tok){
            if(tok.length > maxTok[i]) maxTok[i] = tok.length;
          });
        });
      }
      t.querySelectorAll('tbody tr').forEach(function(tr){ scanTokens(tr.cells); });
      scanTokens(heads);

      var weights = [], total = 0;
      for(var j = 0; j < cols; j++){
        var mean = cnt[j] ? sum[j] / cnt[j] : 1;
        // the header is a floor: a column of one-word values still has to fit
        // its own column name without wrapping to four lines
        var head = heads[j] ? (heads[j].textContent || '').trim().length * 0.55 : 0;
        // ^0.62 compresses the extremes — raw length would give a long prose
        // column 80% of the table and squeeze everything else to nothing
        weights[j] = Math.pow(Math.max(mean, head, 3), 0.62);
        total += weights[j];
      }
      if(!total) return;
      // ~60 characters fit across a protocol table at phone width, so a token
      // of N characters needs about N/60 of the table to stay unbroken
      var floors = [], fsum = 0;
      for(var q = 0; q < cols; q++){
        floors[q] = Math.max(8, Math.min(34, maxTok[q] * 100 / 60));
        fsum += floors[q];
      }
      // if the floors alone would overflow, scale them back together rather
      // than letting one column win
      if(fsum > 94){
        for(var r = 0; r < cols; r++) floors[r] *= 94 / fsum;
        fsum = 94;
      }
      var spare = 100 - fsum;
      var cg = document.createElement('colgroup');
      for(var k = 0; k < cols; k++){
        var col = document.createElement('col');
        col.style.width = (floors[k] + spare * (weights[k] / total)).toFixed(2) + '%';
        cg.appendChild(col);
      }
      t.insertBefore(cg, t.firstChild);
      t.classList.add('mg-t-prop');
    });

    wireFolds(root);

    // wire why-drawers
    root.querySelectorAll('.mg-why-btn').forEach(function(btn){
      btn.addEventListener('click', function(){
        var body = btn.parentElement.querySelector('.mg-why-body');
        if(!body) return;
        var open = body.classList.toggle('open');
        btn.setAttribute('aria-expanded', open?'true':'false');
        var caret = btn.querySelector('.caret');
        if(caret) caret.textContent = open?'▴':'▾';
      });
    });
  }

  /* ---- collapsible sections (Sept 2026) ----
     Every top-level section folds to its numbered header, so a protocol opens as a
     one-screen index of itself. Section 01 open, the rest folded.
     Print copies load this engine too, so they are excluded by their provenance
     meta — a folded section must never be missing from a PDF. */
  function wireFolds(root){
    if(document.querySelector('meta[name="omelette-print-source"]')) return;
    var secs = [].slice.call(root.querySelectorAll('section')).filter(function(s){
      return s.querySelector(':scope>.mg-sec-h');
    });
    if(secs.length < 3) return;
    function setOpen(s, open){
      s.setAttribute('data-open', open ? '1' : '0');
      s.querySelector(':scope>.mg-sec-h').setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    secs.forEach(function(s, i){
      var head = s.querySelector(':scope>.mg-sec-h');
      var body = document.createElement('div');
      body.className = 'mg-sbody';
      // everything after the numbered header folds, including the standfirst
      while(head.nextSibling) body.appendChild(head.nextSibling);
      s.appendChild(body);
      var chev = document.createElement('span');
      chev.className = 'mg-chev';
      chev.setAttribute('aria-hidden', 'true');
      chev.textContent = '\u25BE';
      head.appendChild(chev);
      head.setAttribute('role', 'button');
      head.setAttribute('tabindex', '0');
      s.classList.add('mg-fold');
      setOpen(s, i === 0);
      function toggle(){ setOpen(s, s.getAttribute('data-open') !== '1'); }
      head.addEventListener('click', toggle);
      head.addEventListener('keydown', function(e){
        if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); toggle(); }
      });
    });
    var nav = root.querySelector('.mg-secnav');
    if(nav){
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'mg-allbtn';
      btn.textContent = 'Expand all';
      btn.addEventListener('click', function(){
        var expand = btn.textContent === 'Expand all';
        secs.forEach(function(s){ setOpen(s, expand); });
        btn.textContent = expand ? 'Collapse all' : 'Expand all';
      });
      nav.parentNode.insertBefore(btn, nav);
    }
    // a contents-row click or deep link must never land on a folded section
    function reveal(){
      var id = location.hash.slice(1);
      if(!id) return;
      var t = document.getElementById(id);
      if(t && t.classList.contains('mg-fold')) setOpen(t, true);
    }
    window.addEventListener('hashchange', reveal);
    reveal();
  }

  window.MG = { render: render };
})();
