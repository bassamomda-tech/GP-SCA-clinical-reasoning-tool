/* Reasoning GP — Steps / Diagram view toggle (shared).
   Looks for .vt-btn buttons; persists the choice per-pathway.
   No-op on pages that have no toggle. */
(function () {
  var btns = document.querySelectorAll('.vt-btn');
  if (!btns.length) return;
  var file = (location.pathname.split('/').pop() || 'alg').replace(/\.html?$/, '');
  var KEY = 'rgp.alg.view.v2.' + file;

  function setView(v, scroll) {
    document.body.classList.toggle('diagram-mode', v === 'diagram');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-selected', String(btns[i].dataset.view === v));
    }
    try { localStorage.setItem(KEY, v); } catch (e) {}
    if (scroll) window.scrollTo(0, 0);
  }

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () { setView(this.dataset.view, true); });
  }

  var saved = 'steps';
  try { saved = localStorage.getItem(KEY) || 'steps'; } catch (e) {}
  setView(saved, false);
})();


/* RGP dark-header injector (shared): same dark header bar on every pathway. */
(function(){
  if (document.querySelector('.alg-header')) return;
  var sb = document.querySelector('.stem-banner'); if (!sb) return;
  var ic = sb.querySelector('.sb-icon');
  var icon = ic ? ic.textContent.trim() : '';
  var b = sb.querySelector('b');
  var title = (b ? b.textContent : (document.title||'')).split(/\s+[\u2014\u2013-]\s+/)[0].trim();
  var chips = [];
  var foot = document.querySelector('.alg-foot');
  if (foot) {
    var src = (foot.textContent.split(/Based on:/i)[1] || '');
    var re = /(NICE\s+(?:NG|CG)\s*\d+|SIGN\s*\d+|\bCKS\b)/gi, m;
    while ((m = re.exec(src)) && chips.length < 3) { var t = m[1].replace(/\s+/g,' ').trim(); if (chips.indexOf(t) < 0) chips.push(t); }
  }
  if (!chips.length) chips.push('RCGP SCA');
  chips.push('10-min consult');
  var h = document.createElement('div');
  h.className = 'alg-header';
  h.innerHTML = '<h1>' + icon + ' ' + title + '</h1>'
    + '<p>RCGP SCA Algorithm \u2014 UK Primary Care</p>'
    + '<div class="alg-meta">' + chips.map(function(c){ return '<span>' + c + '</span>'; }).join('') + '</div>';
  sb.parentNode.insertBefore(h, sb);
})();


/* RGP flat-node wrapper (shared): older templates place .node-num/.node-head/.node-tick
   as direct children of .node; wrap them in a .node-header so the canonical flex-row
   layout applies uniformly. Skips pages that already have a .node-header. */
(function(){
  var nodes = document.querySelectorAll('.alg-flow .node[data-step]');
  for (var i=0;i<nodes.length;i++){
    var node=nodes[i];
    if (node.querySelector(':scope > .node-header')) continue;
    var head=node.querySelector(':scope > .node-head'); if(!head) continue;
    var num=node.querySelector(':scope > .node-num');
    var tick=node.querySelector(':scope > .node-tick');
    var hdr=document.createElement('div'); hdr.className='node-header';
    node.insertBefore(hdr, num||head);
    if(num) hdr.appendChild(num);
    hdr.appendChild(head);
    if(tick) hdr.appendChild(tick);
  }
})();
