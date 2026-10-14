/* ============================================================
   Reasoning GP — structured data for search engines (assets/seo-jsonld.js)
   ------------------------------------------------------------
   Builds schema.org JSON-LD from what the page ALREADY says — its
   <title>, meta description, canonical link, heading and the review
   strip drawn by provenance.js. It never adds a claim of its own:
   no review date unless the strip shows one, no reviewer unless the
   page names one.

     clinical pages (protocols, pathways, cases, tools) → MedicalWebPage
     site pages (pages/*)                               → WebPage
     home page                                          → WebSite + SearchAction

   Where the page carries the members-only markup (data-rgp-paywall),
   that same script element is upgraded in place so the page has ONE
   page entity, still marked isAccessibleForFree:false.

   Skips print copies and pages marked noindex. Loaded once per page by
   assets/site.js and assets/provenance.js.
   ============================================================ */
(function(){
  'use strict';
  if (window.__rgpSeoLdDone) return;
  window.__rgpSeoLdDone = true;

  var HOST = 'https://gpreasoning.uk';
  var PUBLISHER = { '@type': 'Organization', name: 'Reasoning GP', url: HOST + '/' };
  var MON = { jan:1, feb:2, mar:3, apr:4, may:5, jun:6, jul:7, aug:8, sep:9, sept:9, oct:10, nov:11, dec:12,
              january:1, february:2, march:3, april:4, june:6, july:7, august:8, september:9, october:10, november:11, december:12 };

  function txt(el){ return el ? String(el.textContent || '').replace(/\s+/g, ' ').trim() : ''; }
  function meta(name){ var m = document.querySelector('meta[name="' + name + '"]'); return m ? String(m.getAttribute('content') || '').trim() : ''; }
  function pad(n){ return (n < 10 ? '0' : '') + n; }

  function isPrint(){ return /-print\.html?$/i.test(location.pathname) || !!document.querySelector('meta[name="omelette-print-source"]'); }
  function noindex(){ return /noindex/i.test(meta('robots')); }

  function path(){ return location.pathname.replace(/\/index\.html$/, '/'); }
  function kind(){
    var p = path();
    if (/\/$/.test(p) && !/\/(tools|cases|pages)\//.test(p)) return 'home';
    if (/\/tools\/management\//.test(p)) return 'protocol';
    if (/\/tools\/algorithms\//.test(p)) return 'algorithm';
    if (/\/cases\//.test(p)) return 'case';
    if (/\/pages\//.test(p)) return 'page';
    return 'tool';
  }
  function canonical(){
    var l = document.querySelector('link[rel="canonical"]');
    var h = l && l.getAttribute('href');
    if (h && /^https?:\/\//.test(h)) return h;
    var p = path();
    return HOST + (p === '/' ? '/' : p);
  }
  function pageName(){
    var t = String(document.title || '').replace(/\s+/g, ' ').trim();
    t = t.replace(/\s*[·|—–-]\s*(Reasoning GP|GP \/ SCA Clinical Reasoning(?: Tool)?|GP Clinical Reasoning Framework v\d+)\s*$/i, '');
    return t || txt(document.querySelector('h1'));
  }
  // The condition or presentation the page is about, taken from the page's own heading.
  function topicName(k){
    var d = window.MG && window.MG._data;
    var n = (d && d.title) || txt(document.querySelector('.mg-stem-title')) || txt(document.querySelector('main h1, .main h1, h1'));
    if (!n) n = pageName();
    n = n.replace(/^[^A-Za-z0-9(]+/, '');                       // leading emoji / icons
    n = n.replace(/\s+(Algorithm|Protocol|Pathway)$/i, '');
    n = n.replace(/\s*[—–]\s*(Protocol|Algorithm|Pathway|Full case).*$/i, '');
    return n.trim();
  }
  // "Oct 2026" / "6 Sep 2026" / "October 2026" / "2026-10-06" → ISO 8601
  function isoDate(s){
    s = String(s || '').trim();
    var m = s.match(/^(\d{4})-(\d{2})(?:-(\d{2}))?$/);
    if (m) return m[3] ? s : m[1] + '-' + m[2];
    m = s.match(/^(?:(\d{1,2})\s+)?([A-Za-z]+)\.?\s+(\d{4})$/);
    if (!m) return '';
    var mo = MON[m[2].toLowerCase()];
    if (!mo) return '';
    return m[3] + '-' + pad(mo) + (m[1] ? '-' + pad(+m[1]) : '');
  }
  // Read the review strip (provenance.js). Only a recorded value counts.
  function review(){
    var out = {};
    var strip = document.getElementById('rgpProvStrip');
    if (!strip) return out;
    strip.querySelectorAll('dt').forEach(function(dt){
      var dd = dt.nextElementSibling;
      if (!dd || dd.classList.contains('pv-unset')) return;
      var label = txt(dt).toLowerCase();
      if (label === 'last reviewed') out.lastReviewed = isoDate(txt(dd));
      else if (label === 'reviewed by') out.reviewedBy = txt(dd);
    });
    return out;
  }

  function build(){
    var k = kind();
    var url = canonical();
    var desc = meta('description');
    if (k === 'home'){
      return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': HOST + '/#website',
        name: 'Reasoning GP',
        url: HOST + '/',
        inLanguage: 'en-GB',
        description: desc || undefined,
        publisher: PUBLISHER,
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: HOST + '/pages/search.html?q={search_term_string}' },
          'query-input': 'required name=search_term_string'
        }
      };
    }
    var clinical = k !== 'page';
    var o = {
      '@context': 'https://schema.org',
      '@type': clinical ? 'MedicalWebPage' : 'WebPage',
      '@id': url,
      name: pageName(),
      url: url,
      inLanguage: 'en-GB',
      isPartOf: { '@type': 'WebSite', '@id': HOST + '/#website', name: 'Reasoning GP', url: HOST + '/' },
      publisher: PUBLISHER
    };
    if (desc) o.description = desc;
    if (clinical){
      o.audience = { '@type': 'MedicalAudience', audienceType: 'Clinician' };
      if (k === 'protocol' || k === 'algorithm' || k === 'case'){
        var topic = topicName(k);
        if (topic) o.about = { '@type': k === 'algorithm' ? 'MedicalSignOrSymptom' : 'MedicalCondition', name: topic };
        var r = review();
        if (r.lastReviewed) o.lastReviewed = r.lastReviewed;
        if (r.reviewedBy) o.reviewedBy = { '@type': 'Person', name: r.reviewedBy };
      }
    }
    return o;
  }

  function write(){
    try {
      if (isPrint() || noindex()) return;
      if (document.documentElement.getAttribute('lang') === 'en') document.documentElement.setAttribute('lang', 'en-GB');
      var data = build();
      // members-only markup already on the page → carry it over and upgrade that element
      var pw = document.querySelector('script[type="application/ld+json"][data-rgp-paywall]');
      if (!pw){
        [].slice.call(document.querySelectorAll('script[type="application/ld+json"]:not(#rgpSeoLd)')).some(function(s){
          try { var j = JSON.parse(s.textContent || '{}'); if (j && j['@type'] === 'WebPage' && j.isAccessibleForFree === false){ pw = s; return true; } } catch (e) {}
          return false;
        });
      }
      if (pw && data['@type'] !== 'WebSite'){
        data.isAccessibleForFree = false;
        data.hasPart = { '@type': 'WebPageElement', isAccessibleForFree: false, cssSelector: 'body' };
        pw.setAttribute('data-rgp-paywall', '1');
        pw.id = 'rgpSeoLd';
        pw.textContent = JSON.stringify(data);
        return;
      }
      var el = document.getElementById('rgpSeoLd');
      if (!el){
        el = document.createElement('script');
        el.type = 'application/ld+json';
        el.id = 'rgpSeoLd';
        (document.head || document.documentElement).appendChild(el);
      }
      el.textContent = JSON.stringify(data);
    } catch (e) { /* never break the page */ }
  }

  // Wait for the review strip on clinical pages (provenance.js draws it after the
  // page renders), but never more than ~4 s.
  function start(){
    var k = kind(), tries = 0;
    var wantsStrip = (k === 'protocol' || k === 'algorithm' || k === 'case') && !!document.querySelector('script[src*="assets/provenance.js"]');
    (function tick(){
      if (!wantsStrip || document.getElementById('rgpProvStrip') || ++tries > 16) return write();
      setTimeout(tick, 250);
    })();
  }
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();
