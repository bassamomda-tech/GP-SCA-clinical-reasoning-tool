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
    var body = b.rows.map(function(r){
      return '<tr>'+r.map(function(c){ return '<td>'+c+'</td>'; }).join('')+'</tr>';
    }).join('');
    return '<div class="mg-table-wrap"><table class="mg-table"><thead>'+head+'</thead><tbody>'+body+'</tbody></table></div>';
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
    var html = '<div class="mg-ladder">';
    b.steps.forEach(function(s, i){
      var danger = s.danger ? ' style="border-color:var(--m-safety-bd);background:var(--m-safety-bg)"' : '';
      var stepStyle = s.danger ? ' style="background:var(--m-safety)"' : '';
      var whenStyle = s.danger ? ' style="color:var(--m-safety)"' : '';
      html += '<div class="mg-rung"'+danger+'>';
      html += '<div class="mg-rung-head">';
      html += '<span class="mg-rung-step"'+stepStyle+'>'+s.step+'</span>';
      html += '<span class="mg-rung-title">'+s.title+'</span>';
      if(s.when) html += '<span class="mg-rung-when"'+whenStyle+'>'+s.when+'</span>';
      html += '</div>';
      if(s.html) html += '<div class="mg-rung-body"'+(s.danger?' style="color:#7f1d1d"':'')+'>'+s.html+'</div>';
      if(s.splits){
        html += '<div class="mg-splits"'+(s.danger?' style="margin-top:9px"':'')+'>';
        s.splits.forEach(function(sp){
          var bd = s.danger ? ' style="border-color:var(--m-safety-bd)"' : '';
          var cd = s.danger ? ' style="color:var(--m-safety)"' : '';
          html += '<div class="mg-split"'+bd+'><div class="sp-cond"'+cd+'>'+sp.cond+'</div><div class="sp-drug">'+sp.drug+'</div><div class="sp-note">'+sp.note+'</div></div>';
        });
        html += '</div>';
      }
      if(s.warn) html += '<div class="mg-warn">'+s.warn+'</div>';
      html += '</div>';
      // down-arrow between rungs
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

  var BLOCKS = { p:bP, kv:bKv, table:bTable, tiles:bTiles, ladder:bLadder, timeline:bTimeline, say:bSay, warn:bWarn, why:bWhy };

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

  var LEGEND = [
    ['found','Foundation'],['life','Non-drug'],['drug','Medication'],
    ['monitor','Monitoring'],['follow','Follow-up'],['safety','Safety-net'],['refer','Refer']
  ];

  function render(data){
    var root = document.getElementById('mgRoot');
    if(!root){ console.warn('MG: #mgRoot not found'); return; }
    if(data.title) document.title = data.docTitle || (data.title + ' — Protocol · Reasoning GP');

    var html = '';

    // stem
    html += '<div class="mg-stem"><div class="mg-stem-ic">'+(data.icon||'🩺')+'</div><div>'+
            '<span class="mg-stem-eyebrow">'+(data.eyebrow||'Protocol · Already diagnosed')+'</span>'+
            '<b>'+data.stemTitle+'</b>'+
            '<small>'+data.stemSub+'</small></div></div>';

    // glance
    if(data.glance && data.glance.length){
      html += '<div class="mg-glance">'+data.glance.map(function(g){
        return '<div class="gi"><span class="gi-lbl">'+g.lbl+'</span><span class="gi-val">'+g.val+'</span>'+
               (g.sub?'<span class="gi-sub">'+g.sub+'</span>':'')+'</div>';
      }).join('')+'</div>';
    }

    // legend
    html += '<div class="mg-legend">'+LEGEND.map(function(l){
      return '<span class="lg lg-'+l[0]+'"><span class="lg-dot"></span>'+l[1]+'</span>';
    }).join('')+'</div>';

    // flow with auto arrows
    html += '<div class="mg-flow">';
    data.flow.forEach(function(item, i){
      if(i>0) html += arrow(item.arrow, item.arrowShort);
      var fn = FLOW[item.t || 'node'];
      html += fn ? fn(item) : '';
    });
    html += '</div>';

    // footnote
    html += '<div class="mg-foot"><strong>Educational use only.</strong> '+
            (data.foot || 'Management pathway for an already-confirmed diagnosis. Not a substitute for clinical judgement, the patient\u2019s individual context, or your local formulary. Verify drugs and doses against the current BNF and live NICE CKS.')+
            (data.guideline ? ' Anchored to '+data.guideline+'.' : '')+'<span class="rgp-reviewed" style="display:block;margin-top:6px;font-size:12px;color:#6b7280"><b>Reviewed: July 2026</b> · citations verified against current NICE / UK guidance</span></div>';

    root.innerHTML = html;

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

  window.MG = { render: render };
})();
