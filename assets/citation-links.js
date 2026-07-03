/* ============================================================
   Reasoning GP — citation linkifier (shared)
   Turns guideline references in body text (NICE NG12, CG113, TA534,
   QS29, MTG/DG/IPG codes, NICE CKS, BNF/BNFc, UKMEC) into click-through
   links to the official source. Every citation becomes verifiable —
   and a dead link is a self-flagging wrong citation.
   Loaded on every content page via the cpd-tracker.js injector.
   Idempotent; skips existing links, code, inputs and editable regions.
   ============================================================ */
(function () {
  'use strict';
  if (window.__rgpCiteRun) return;
  window.__rgpCiteRun = true;

  // ---- source resolvers ------------------------------------------------
  function niceGuidance(code) {
    return 'https://www.nice.org.uk/guidance/' + code.toLowerCase().replace(/\s+/g, '');
  }
  // one master matcher: NICE guidance codes OR named sources
  var MASTER = /\b(?:(NG|CG|TA|QS|MTG|DG|IPG)\s?(\d{1,4})|NICE\s+CKS|BNFc|BNF|UKMEC)\b/g;

  function resolve(m) {
    if (m[1]) {                                   // NICE guidance code e.g. NG12
      var code = m[1] + m[2];
      return { url: niceGuidance(code), title: 'Open NICE ' + code + ' on nice.org.uk' };
    }
    var t = m[0].toUpperCase();
    if (t === 'NICE CKS') return { url: 'https://cks.nice.org.uk/', title: 'Open NICE Clinical Knowledge Summaries' };
    if (t === 'BNFC')     return { url: 'https://bnfc.nice.org.uk/', title: 'Open the BNF for Children' };
    if (t === 'BNF')      return { url: 'https://bnf.nice.org.uk/', title: 'Open the BNF' };
    if (t === 'UKMEC')    return { url: 'https://www.fsrh.org/ukmec', title: 'Open the UK Medical Eligibility Criteria (FSRH)' };
    return null;
  }

  // ---- DOM guards ------------------------------------------------------
  var SKIP_TAGS = { A: 1, SCRIPT: 1, STYLE: 1, CODE: 1, PRE: 1, TEXTAREA: 1, BUTTON: 1,
                    SELECT: 1, OPTION: 1, KBD: 1, NOSCRIPT: 1, INPUT: 1, H1: 0 };
  function inSkippable(node) {
    for (var el = node.parentNode; el && el.nodeType === 1; el = el.parentNode) {
      if (SKIP_TAGS[el.tagName]) return true;
      if (el.isContentEditable) return true;
      if (el.classList && el.classList.contains('rgp-cite-skip')) return true;
    }
    return false;
  }

  // ---- one-time style --------------------------------------------------
  function ensureStyle() {
    if (document.getElementById('rgp-cite-style')) return;
    var s = document.createElement('style');
    s.id = 'rgp-cite-style';
    s.textContent =
      '.rgp-cite{color:inherit;text-decoration:underline;text-decoration-style:dotted;' +
      'text-decoration-thickness:1px;text-underline-offset:2px;text-decoration-color:currentColor;' +
      'cursor:pointer;opacity:.92}' +
      '.rgp-cite:hover{text-decoration-style:solid;opacity:1}';
    (document.head || document.documentElement).appendChild(s);
  }

  // ---- linkify a single text node --------------------------------------
  function linkifyTextNode(node) {
    var text = node.nodeValue;
    if (!text || text.length < 2 || !/[A-Z]/.test(text)) return;
    MASTER.lastIndex = 0;
    if (!MASTER.test(text)) return;
    MASTER.lastIndex = 0;

    var frag = document.createDocumentFragment();
    var last = 0, m, made = false;
    while ((m = MASTER.exec(text)) !== null) {
      var res = resolve(m);
      if (!res) continue;
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      var a = document.createElement('a');
      a.className = 'rgp-cite';
      a.href = res.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.title = res.title;
      a.textContent = m[0];
      frag.appendChild(a);
      last = m.index + m[0].length;
      made = true;
    }
    if (!made) return;
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    node.parentNode.replaceChild(frag, node);
  }

  // ---- sweep the document ---------------------------------------------
  function run(root) {
    try {
      ensureStyle();
      var scope = root || document.body;
      if (!scope) return;
      var walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) {
          if (!n.nodeValue || !/[A-Z]/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
          if (inSkippable(n)) return NodeFilter.FILTER_REJECT;
          MASTER.lastIndex = 0;
          return MASTER.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      });
      var nodes = [], cur;
      while ((cur = walker.nextNode())) nodes.push(cur);   // collect first (we mutate the tree)
      for (var i = 0; i < nodes.length; i++) linkifyTextNode(nodes[i]);
    } catch (e) { /* never break the page for a cosmetic enhancement */ }
  }

  window.RGPCiteLinks = { run: run };

  // initial pass + delayed passes to catch JS-rendered content
  // (algorithm/protocol pages build their DOM after load).
  function kick() { run(); setTimeout(run, 900); setTimeout(run, 2200); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', kick);
  } else {
    kick();
  }
})();
