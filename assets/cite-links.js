/* ============================================================
   Reasoning GP — citation linkifier
   Turns plain-text NICE product codes (NG/CG/TA/QS + number)
   anywhere in page content into click-through links to the
   official guideline on nice.org.uk. Runs on every content
   page (loaded by the shared injector in site.js + alg-nav.js).

   Design notes:
   - Only NG / CG / TA / QS are linked. PH/DG/pH etc. are
     deliberately excluded to avoid false positives (e.g. "pH 7").
   - Skips <a>, form controls, code/pre, SVG, editable regions,
     and anything under [data-no-cite].
   - Re-scans script-generated content (algorithms, protocols,
     SCA cases) via a debounced MutationObserver — no infinite
     loop because the injected <a> is itself skipped.
   ============================================================ */
(function(){
  if (window.__rgpCiteLinks) return; window.__rgpCiteLinks = true;

  var RE   = /\b(NG|CG|TA|QS)\s?-?\s?(\d{1,4})\b/g;
  var HINT = /[A-Za-z]{2}\s?-?\s?\d/;              // cheap pre-filter
  var SKIP = { A:1, SCRIPT:1, STYLE:1, TEXTAREA:1, INPUT:1, SELECT:1,
               OPTION:1, BUTTON:1, CODE:1, PRE:1, KBD:1, NOSCRIPT:1,
               SVG:1, PATH:1, CANVAS:1 };

  function urlFor(kind, num){ return 'https://www.nice.org.uk/guidance/' + kind.toLowerCase() + num; }

  function eligible(node){
    var p = node.parentNode;
    while (p && p.nodeType === 1){
      if (SKIP[p.tagName]) return false;
      if (p.isContentEditable) return false;
      if (p.classList && p.classList.contains('cite-link')) return false;
      if (p.hasAttribute && p.hasAttribute('data-no-cite')) return false;
      p = p.parentNode;
    }
    return true;
  }

  function processText(tn){
    var s = tn.nodeValue;
    if (!s || s.length < 3) return;
    RE.lastIndex = 0;
    if (!RE.test(s)) return;
    if (!eligible(tn)) return;
    RE.lastIndex = 0;
    var frag = document.createDocumentFragment(), last = 0, m, any = false;
    while ((m = RE.exec(s))){
      if (m.index > last) frag.appendChild(document.createTextNode(s.slice(last, m.index)));
      var kind = m[1].toUpperCase();
      var a = document.createElement('a');
      a.href = urlFor(kind, m[2]);
      a.target = '_blank'; a.rel = 'noopener noreferrer';
      a.className = 'cite-link';
      a.setAttribute('title', 'Open ' + kind + m[2] + ' on nice.org.uk');
      a.textContent = m[0];
      frag.appendChild(a);
      last = m.index + m[0].length; any = true;
    }
    if (!any) return;
    if (last < s.length) frag.appendChild(document.createTextNode(s.slice(last)));
    tn.parentNode.replaceChild(frag, tn);
  }

  function scan(root){
    if (!root) return;
    if (root.nodeType === 3){ processText(root); return; }
    if (root.nodeType !== 1 && root.nodeType !== 9) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [], n;
    while ((n = w.nextNode())){ if (HINT.test(n.nodeValue)) nodes.push(n); }
    nodes.forEach(processText);
  }

  function injectCss(){
    if (document.getElementById('rgp-cite-css')) return;
    var st = document.createElement('style');
    st.id = 'rgp-cite-css';
    st.textContent =
      '.cite-link{color:#0e5c58;text-decoration:underline;text-decoration-thickness:1px;' +
      'text-underline-offset:2px;text-decoration-color:#9cc7c2;cursor:pointer;}' +
      '.cite-link:hover{color:#b54c2b;text-decoration-color:currentColor;}';
    document.head.appendChild(st);
  }

  function start(){
    injectCss();
    try { scan(document.body); } catch(e){}
    // Re-scan script-generated content (algorithms / protocols / SCA cases)
    if (typeof MutationObserver === 'function'){
      var queue = [], timer = null;
      var flush = function(){
        timer = null; var rs = queue; queue = [];
        rs.forEach(function(r){ try { if (r.isConnected !== false) scan(r); } catch(e){} });
      };
      var mo = new MutationObserver(function(muts){
        for (var i = 0; i < muts.length; i++){
          var added = muts[i].addedNodes;
          for (var j = 0; j < added.length; j++){
            var nd = added[j];
            if (nd.nodeType === 1) queue.push(nd);
            else if (nd.nodeType === 3) try { processText(nd); } catch(e){}
          }
        }
        if (queue.length && !timer) timer = setTimeout(flush, 150);
      });
      try { mo.observe(document.body, { childList: true, subtree: true }); } catch(e){}
      // A couple of catch-up passes for pages that render just after load.
      setTimeout(function(){ try { scan(document.body); } catch(e){} }, 400);
      window.addEventListener('load', function(){ setTimeout(function(){ try { scan(document.body); } catch(e){} }, 200); });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
