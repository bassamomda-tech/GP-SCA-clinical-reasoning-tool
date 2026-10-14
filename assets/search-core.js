/* ============================================================
   Reasoning GP — site search core (RGPSearchCore)
   ------------------------------------------------------------
   Shared text normaliser for the whole-site word search. The SAME
   file is used by three callers, so a word is cut into identical
   tokens everywhere:
     1. governance/build-search-index.mjs  (builds the index, in Node)
     2. assets/site-search.js              (the search box + results page)
     3. assets/search-highlight.js         (highlights the word on arrival)
   Change a rule here → rebuild the index (node governance/build-search-index.mjs).

   Steps for every word: lower-case → strip accents → UK/US spelling
   collapse (anaemia = anemia, oesophagus = esophagus, tumour = tumor,
   centre = center, -ise = -ize) → light English stemmer (plurals, -ing,
   -ed, final -e) → stop words removed.
   No DOM, no dependencies.
   ============================================================ */
(function(root){
  'use strict';

  var STOP = {};
  ('a about above after again against all also am an and any are as at be because been before being below between both but by ' +
   'can could did do does doing down during each few for from further had has have having he her here hers herself him himself his ' +
   'how i if in into is it its itself just me more most my myself no nor not now of off on once only or other our ours ourselves out ' +
   'over own same she should so some such than that the their theirs them themselves then there these they this those through to too ' +
   'under until up very was we were what when where which while who whom why will with would you your yours yourself yourselves ' +
   'etc eg ie via per may might must shall upon within without whether yet ' +
   'it\'s don\'t can\'t').split(/\s+/).forEach(function(w){ if (w) STOP[w] = 1; });

  // Pure numbers are not indexed (doses and years are everywhere) — except these.
  var KEEP_NUM = { '999': 1, '111': 1, '112': 1 };

  // UK/US spelling collapse. Both the index and the query go through this,
  // so either spelling finds the other. Only applied to words of 5+ letters
  // so short words ("toe", "does", "hour") are never touched.
  function spell(w){
    if (w.length < 5) return w;
    w = w.replace(/ae/g, 'e').replace(/oe/g, 'e');                 // anaemia, oesophagus, haem-, paediatric, diarrhoea, coeliac
    w = w.replace(/our$/, 'or').replace(/ours$/, 'ors');            // tumour, colour, behaviour
    w = w.replace(/([tb])re$/, '$1er').replace(/([tb])res$/, '$1ers'); // centre, fibre, litre
    w = w.replace(/yz(e|es|ed|ing)$/, 'ys$1');                      // analyze
    w = w.replace(/iz(e|es|ed|ing|ation|ations|er|ers)$/, 'is$1');  // immunization, hospitalized
    w = w.replace(/ogue$/, 'og');                                   // catalogue
    w = w.replace(/mme$/, 'm');                                     // programme
    return w;
  }

  var VOW = /[aeiouy]/;
  // Light stemmer — deliberately conservative: plurals, -ing, -ed, a final -e,
  // then undoubles a final consonant (referred → refer, netting → net).
  function stem(w){
    if (w.length <= 3 || /\d/.test(w)) return w;
    var o = w;
    if (/ies$/.test(w) && w.length > 4) w = w.slice(0, -3) + 'y';
    else if (/sses$/.test(w)) w = w.slice(0, -2);
    else if (/(x|z|ch|sh|ss)es$/.test(w)) w = w.slice(0, -2);
    else if (/[^su]s$/.test(w) && !/(is|ys|us|ss)$/.test(w)) w = w.slice(0, -1);
    if (w.length >= 6 && /ing$/.test(w) && VOW.test(w.slice(0, -3))) w = w.slice(0, -3);
    else if (w.length >= 5 && /[^e]ed$/.test(w) && VOW.test(w.slice(0, -2))) w = w.slice(0, -2);
    if (w !== o && /([b-df-hj-np-tv-z])\1$/.test(w) && !/(ll|ss|zz|ff)$/.test(w)) w = w.slice(0, -1);
    if (w.length >= 4 && /e$/.test(w)) w = w.slice(0, -1);
    return w;
  }

  // Raw word list (lower-cased, accents stripped), in order. Used for highlighting.
  function words(text){
    var s = String(text || '').toLowerCase();
    try { s = s.normalize('NFKD').replace(/[̀-ͯ]/g, ''); } catch (e) {}
    s = s.replace(/[’‘']/g, '');
    return s.split(/[^a-z0-9]+/).filter(Boolean);
  }

  // One raw word → its index term ('' when it is not indexed).
  function term(w){
    if (!w || STOP[w]) return '';
    if (/^\d+$/.test(w)) return KEEP_NUM[w] ? w : '';
    if (w.length < 2) return '';
    var t = stem(spell(w));
    return t.length >= 2 ? t : '';
  }

  function tokens(text){
    var out = [], ws = words(text);
    for (var i = 0; i < ws.length; i++){ var t = term(ws[i]); if (t) out.push(t); }
    return out;
  }

  root.RGPSearchCore = { version: 1, words: words, term: term, tokens: tokens, stem: stem, spell: spell, STOP: STOP };
})(typeof window !== 'undefined' ? window : globalThis);
