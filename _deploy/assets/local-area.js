/* Local area / ICB preference — lets a clinician set their ICB/APC once so
   area-specific guidance (e.g. the prescribing RAG list) personalises itself.
   Stored in localStorage 'rgp-area-v1'. Greater Manchester localities map to
   GMMMG (the worked example used across the site); everyone else gets a clear
   "follow your local APC/ICB formulary" prompt with a find-my-formulary link. */
(function(){
  var KEY = 'rgp-area-v1';

  // apc:'gmmmg' marks areas the on-site GMMMG worked example actually matches.
  var AREAS = [
    { id:'gm',        name:'Greater Manchester (GMMMG)',                apc:'gmmmg', url:'https://gmmmg.nhs.uk/' },
    { id:'gm-bolton', name:'NHS GM — Bolton',                          apc:'gmmmg', url:'https://gmmmg.nhs.uk/' },
    { id:'gm-bury',   name:'NHS GM — Bury',                            apc:'gmmmg', url:'https://gmmmg.nhs.uk/' },
    { id:'gm-hmr',    name:'NHS GM — Heywood, Middleton & Rochdale',   apc:'gmmmg', url:'https://gmmmg.nhs.uk/' },
    { id:'gm-man',    name:'NHS GM — Manchester',                      apc:'gmmmg', url:'https://gmmmg.nhs.uk/' },
    { id:'gm-old',    name:'NHS GM — Oldham',                          apc:'gmmmg', url:'https://gmmmg.nhs.uk/' },
    { id:'gm-sal',    name:'NHS GM — Salford',                         apc:'gmmmg', url:'https://gmmmg.nhs.uk/' },
    { id:'gm-stk',    name:'NHS GM — Stockport',                       apc:'gmmmg', url:'https://gmmmg.nhs.uk/' },
    { id:'gm-tam',    name:'NHS GM — Tameside & Glossop',              apc:'gmmmg', url:'https://gmmmg.nhs.uk/' },
    { id:'gm-traf',   name:'NHS GM — Trafford',                        apc:'gmmmg', url:'https://gmmmg.nhs.uk/' },
    { id:'gm-wig',    name:'NHS GM — Wigan',                           apc:'gmmmg', url:'https://gmmmg.nhs.uk/' },
    // Other English ICBs — GMMMG shown only as an example; follow local APC.
    { id:'cheshire',  name:'NHS Cheshire & Merseyside',                apc:null },
    { id:'lancs',     name:'NHS Lancashire & South Cumbria',           apc:null },
    { id:'wyorks',    name:'NHS West Yorkshire',                       apc:null },
    { id:'syorks',    name:'NHS South Yorkshire',                      apc:null },
    { id:'nenc',      name:'NHS North East & North Cumbria',           apc:null },
    { id:'birmingham',name:'NHS Birmingham & Solihull',               apc:null },
    { id:'blackcountry',name:'NHS Black Country',                      apc:null },
    { id:'staffs',    name:'NHS Staffordshire & Stoke-on-Trent',       apc:null },
    { id:'notts',     name:'NHS Nottingham & Nottinghamshire',         apc:null },
    { id:'leics',     name:'NHS Leicester, Leicestershire & Rutland',  apc:null },
    { id:'nwlondon',  name:'NHS North West London',                    apc:null },
    { id:'nclondon',  name:'NHS North Central London',                 apc:null },
    { id:'nelondon',  name:'NHS North East London',                    apc:null },
    { id:'swlondon',  name:'NHS South West London',                    apc:null },
    { id:'selondon',  name:'NHS South East London',                    apc:null },
    { id:'kent',      name:'NHS Kent & Medway',                        apc:null },
    { id:'sussex',    name:'NHS Sussex',                               apc:null },
    { id:'hampshire', name:'NHS Hampshire & Isle of Wight',            apc:null },
    { id:'frimley',   name:'NHS Frimley',                              apc:null },
    { id:'bob',       name:'NHS Buckinghamshire, Oxfordshire & Berkshire West', apc:null },
    { id:'bristol',   name:'NHS Bristol, North Somerset & South Gloucestershire', apc:null },
    { id:'devon',     name:'NHS Devon',                                apc:null },
    { id:'cornwall',  name:'NHS Cornwall & the Isles of Scilly',       apc:null },
    { id:'norfolk',   name:'NHS Norfolk & Waveney',                    apc:null },
    { id:'suffolk',   name:'NHS Suffolk & North East Essex',           apc:null },
    { id:'wales',     name:'Wales (AWMSG / local health board)',       apc:null },
    { id:'scotland',  name:'Scotland (SMC / area formulary)',          apc:null },
    { id:'ni',        name:'Northern Ireland (HSC formulary)',         apc:null },
    { id:'other',     name:'Other / not listed',                       apc:null }
  ];

  function get(){
    try{ var id = localStorage.getItem(KEY); return AREAS.filter(function(a){return a.id===id;})[0] || null; }
    catch(e){ return null; }
  }
  function set(id){
    try{ if(id) localStorage.setItem(KEY, id); else localStorage.removeItem(KEY); }catch(e){}
    document.dispatchEvent(new CustomEvent('rgp-area-change', { detail: get() }));
    apply();
  }
  function findUrl(area){
    if(area && area.url) return area.url;
    var q = area ? area.name.replace(/^NHS\s+/,'').replace(/\s*\(.*\)\s*/,'') : 'my ICB';
    return 'https://www.google.com/search?q=' + encodeURIComponent(q + ' APC ICB formulary RAG traffic light');
  }

  /* Update any registered placeholders on the page. Elements:
     [data-area-name]      -> set text to area name (or "your area")
     [data-area-matches]   -> shown only when chosen area uses GMMMG
     [data-area-other]     -> shown only when chosen area does NOT use GMMMG
     [data-area-unset]     -> shown only when no area chosen
     [data-area-formulary] -> <a> whose href is set to the local formulary link */
  function apply(){
    var area = get();
    var isGm = !!(area && area.apc === 'gmmmg');
    document.querySelectorAll('[data-area-name]').forEach(function(el){
      el.textContent = area ? area.name : 'your area';
    });
    document.querySelectorAll('[data-area-matches]').forEach(function(el){ el.style.display = isGm ? '' : 'none'; });
    document.querySelectorAll('[data-area-other]').forEach(function(el){ el.style.display = (area && !isGm) ? '' : 'none'; });
    document.querySelectorAll('[data-area-unset]').forEach(function(el){ el.style.display = area ? 'none' : ''; });
    document.querySelectorAll('[data-area-set]').forEach(function(el){ el.style.display = area ? '' : 'none'; });
    document.querySelectorAll('a[data-area-formulary]').forEach(function(el){
      el.href = findUrl(area); el.target='_blank'; el.rel='noopener';
    });
    // reflect current selection into any picker selects
    document.querySelectorAll('select.rgp-area-select').forEach(function(sel){ sel.value = area ? area.id : ''; });
    // chip label
    document.querySelectorAll('[data-area-chip-label]').forEach(function(el){
      el.textContent = area ? area.name.replace(/^NHS\s+/,'') : 'Set your area';
    });
    document.querySelectorAll('[data-area-chip]').forEach(function(el){ el.classList.toggle('set', !!area); });
  }

  /* Render a <select> picker into a mount element (id or element). */
  function renderSelect(mount){
    var el = (typeof mount==='string') ? document.getElementById(mount) : mount;
    if(!el) return;
    var cur = get();
    var sel = document.createElement('select');
    sel.className = 'rgp-area-select';
    sel.setAttribute('aria-label','Choose your ICB / area');
    var opt0 = document.createElement('option'); opt0.value=''; opt0.textContent='Select your ICB / area…'; sel.appendChild(opt0);
    AREAS.forEach(function(a){
      var o=document.createElement('option'); o.value=a.id; o.textContent=a.name;
      if(cur && cur.id===a.id) o.selected=true;
      sel.appendChild(o);
    });
    sel.addEventListener('change', function(){ set(sel.value); });
    el.innerHTML=''; el.appendChild(sel);
  }

  window.RGPArea = { get:get, set:set, list:AREAS, formulary:findUrl, apply:apply, renderSelect:renderSelect };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', apply); else apply();
})();
