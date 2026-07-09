/* ============================================================
   Reasoning GP — Ask retrieval engine (RGPRetrieval)
   ------------------------------------------------------------
   Point-of-care retrieval over the whole library (~975 topics:
   clinical pathways, SCA casebooks, management protocols, A–Z
   topic notes). Built for TRUST: the right topic must surface
   from rushed, colloquial clinic queries ("SOB in a smoker",
   "sugar 15", "can't wee", "feeling flat"), so the answer is
   grounded in the correct note rather than free-recalled.

   Two layers, blended:
     1) LEXICAL  — IDF-weighted term matching with a large
        colloquial→clinical synonym/phrase map. Always on, works
        offline/in-preview, needs no backend.
     2) SEMANTIC — sentence embeddings (cosine similarity) over
        every topic, via the deployed Worker's /api/embed
        (Cloudflare Workers AI). OPTIONAL: if embeddings aren't
        available it silently falls back to pure lexical, so
        nothing ever breaks. Topic vectors are cached in
        IndexedDB so it embeds the library only once per device.

   Public API (window.RGPRetrieval):
     .ready                      index built?
     .bySlug(slug)               item by slug (for persisted chats)
     .searchScored(q, n)         [{it, sc, titleHit}] lexical, sync
     .grounding(q)               async → [it,…] best notes to ground on
     .relatedItems(q, exclude)   grouped related topics (sync, lexical)
     .semantic                   {available, ready, count} status
     .tokens/.GENERIC/.MODIFIER  shared helpers
   ============================================================ */
(function(){
  'use strict';

  /* ---------------- text utilities ---------------- */
  function slugify(s){ return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,''); }

  const STOP = new Set(('the a an and or of to in for with on at is are be do does what when which how why who whom can could '+
    'should would may might will my his her their your our this that these those i you he she it we they not no yes any some '+
    'about into from over under after before during need please tell me give explain whats what\'s vs versus my a').split(/\s+/));

  // Words that appear across many titles ("X disease", "chronic Y"). IDF already damps them,
  // and they must not count as the discriminating word when filtering related topics.
  const GENERIC = new Set(('deficiency disease syndrome disorder chronic acute low high raised elevated new onset '+
    'primary secondary infection infections problem problems abnormal abnormality test results result blood level levels '+
    'management manage treat treatment treating cause causes causing diagnosis diagnose symptom symptoms sign signs '+
    'patient patients care first line second').split(/\s+/));

  // Demographic modifiers — a related-topic list keyed on the CONDITION, not on "children"/"pregnancy".
  const MODIFIER = new Set(('child children childhood kid kids adult adults elderly old older young infant infants baby '+
    'babies neonate neonatal pregnancy pregnant antenatal postnatal men man male males women woman female females '+
    'teenage teenager adolescent adolescents paediatric pediatric geriatric').split(/\s+/));

  // Multi-word colloquial / point-of-care phrases → canonical clinical terms. Applied to the
  // RAW query string BEFORE tokenising, so clinic shorthand maps onto the library's wording.
  // (Order matters: longer/more specific phrases first.)
  const PHRASES = [
    [/\bshort(ness)? of breath\b/g,'breathlessness dyspnoea'],
    [/\bout of breath\b/g,'breathlessness dyspnoea'],
    [/\bcan'?t breathe\b/g,'breathlessness dyspnoea'],
    [/\bpassing out\b/g,'blackout syncope'],
    [/\bpass(ed|ing)? out\b/g,'blackout syncope'],
    [/\bfainting?\b/g,'blackout syncope'],
    [/\bwaters?works?\b/g,'urinary'],
    [/\bcan'?t (wee|pee|pass urine)\b/g,'urinary retention'],
    [/\b(burning|stinging) (when|on)?\s*(weeing|peeing|urinat\w*)\b/g,'dysuria urinary tract infection'],
    [/\bblood in (the )?(wee|pee|urine)\b/g,'haematuria'],
    [/\bblood in (the )?(poo|stool|motions?)\b/g,'rectal bleeding'],
    [/\bpassing blood\b/g,'rectal bleeding haematuria'],
    [/\btummy (ache|pain)\b/g,'abdominal pain'],
    [/\bbelly (ache|pain)\b/g,'abdominal pain'],
    [/\bwater infection\b/g,'urinary tract infection'],
    [/\bfeeling (down|low|flat|sad|blue)\b/g,'low mood depression'],
    [/\blow mood\b/g,'depression'],
    [/\bcan'?t sleep\b/g,'insomnia'],
    [/\btrouble sleeping\b/g,'insomnia'],
    [/\bhigh sugar\b/g,'hyperglycaemia diabetes'],
    [/\bblood sugar\b/g,'glucose diabetes'],
    [/\bsugar (level|reading)?s?\b/g,'glucose diabetes'],
    [/\bheart racing\b/g,'palpitations'],
    [/\bracing heart\b/g,'palpitations'],
    [/\bpins and needles\b/g,'paraesthesia neuropathy'],
    [/\bfeeling dizzy\b/g,'dizziness vertigo'],
    [/\bthe room spinning\b/g,'vertigo'],
    [/\bringing in (the )?ears?\b/g,'tinnitus'],
    [/\brunny nose\b/g,'rhinitis'],
    [/\bblocked nose\b/g,'nasal congestion rhinitis'],
    [/\bchest infection\b/g,'lower respiratory tract infection'],
    [/\bwater(y)? eyes?\b/g,'epiphora'],
    [/\bhigh bp\b/g,'hypertension'],
    [/\bhigh blood pressure\b/g,'hypertension'],
    [/\bweight loss\b/g,'weight-loss'],
    [/\bloss of weight\b/g,'weight-loss'],
    [/\btired all the time\b/g,'fatigue tatt'],
    [/\balways tired\b/g,'fatigue'],
    [/\bwaking (up )?at night\b/g,'insomnia nocturia'],
    [/\bman flu\b/g,'viral upper respiratory tract infection'],
    [/\bwon'?t settle\b/g,'crying infant'],
    [/\bpost[- ]?pregnancy\b/g,'postpartum'],
    [/\b(weeks?|months?|days?) (after|post|since) (giving )?(birth|delivery|pregnancy)\b/g,'postpartum'],
    [/\bafter (giving )?birth\b/g,'postpartum'],
    [/\bafter (the )?delivery\b/g,'postpartum'],
    [/\bcombined (contraceptive |hormonal )?pill\b/g,'combined hormonal contraception chc'],
    [/\bcontraceptive (pill|patch|ring|injection|implant)s?\b/g,'contraception $1'],
    [/\bfits?\b/g,'seizure epilepsy']
  ];

  // Single-token clinical synonyms / abbreviations → canonical token. Applied AFTER the
  // ae/oe spelling collapse so values are written already-collapsed (haem→hem etc).
  const SYN = {
    // shorthand & abbreviations
    htn:'hypertension', hypertensive:'hypertension', bp:'hypertension',
    ckd:'kidney', esrf:'kidney', aki:'kidney',
    gord:'reflux', gerd:'reflux', heartburn:'reflux', indigestion:'dyspepsia',
    uti:'urinary', luts:'urinary', dysuria:'urinary',
    bph:'prostate',
    t2dm:'diabetes', t1dm:'diabetes', dm:'diabetes', diabetic:'diabetes', sugar:'glucose',
    osa:'apnea', apnoea:'apnea',
    tia:'stroke', cva:'stroke',
    af:'fibrillation', afib:'fibrillation',
    mi:'infarction', nstemi:'infarction', stemi:'infarction', acs:'coronary',
    copd:'copd', ild:'lung',
    dvt:'thrombosis', pe:'embolism', vte:'thrombosis',
    ibs:'bowel', ibd:'bowel',
    pmb:'postmenopausal', pv:'vaginal',
    sob:'breathlessness', dyspnea:'breathlessness', dyspnoea:'breathlessness', breathless:'breathlessness',
    palpitation:'palpitations',
    folic:'folate',
    tatt:'fatigue', tired:'fatigue', tiredness:'fatigue', exhausted:'fatigue', exhaustion:'fatigue', lethargy:'fatigue', lethargic:'fatigue',
    dizzy:'dizziness', giddy:'dizziness',
    itchy:'itch', itching:'itch', pruritus:'itch',
    rash:'rash', spots:'rash',
    lump:'lump', swelling:'lump',
    cough:'cough', coughing:'cough',
    headaches:'headache',
    depressed:'depression', anxious:'anxiety', panic:'anxiety',
    seizures:'seizure', fits:'seizure', fit:'seizure', convulsion:'seizure',
    faint:'syncope', fainting:'syncope', collapse:'syncope', blackout:'syncope', blackouts:'syncope',
    period:'menstrual', periods:'menstrual', menses:'menstrual',
    contraceptive:'contraception', contraceptives:'contraception',
    cocp:'contraception', chc:'contraception',
    postnatal:'postpartum', postnatally:'postpartum', puerperium:'postpartum',
    thyroid:'thyroid', underactive:'hypothyroidism', overactive:'hyperthyroidism',
    anaemic:'anaemia', anemia:'anaemia',
    piles:'haemorrhoids', hemorrhoids:'haemorrhoids',
    shingles:'zoster',
    chesty:'respiratory', wheezy:'wheeze', wheezing:'wheeze',
    constipated:'constipation', diarrhea:'diarrhoea', loose:'diarrhoea',
    vomiting:'vomiting', sick:'nausea', nauseous:'nausea',
    jaundiced:'jaundice', yellow:'jaundice',
    numb:'numbness', tingling:'paraesthesia', tingly:'paraesthesia'
  };

  function tokens(s){
    let str = ' ' + String(s||'').toLowerCase() + ' ';
    PHRASES.forEach(([re,rep])=>{ str = str.replace(re, ' '+rep+' '); });
    return str.replace(/[^a-z0-9\s]/g,' ').split(/\s+/)
      .filter(w => w.length>2 && !STOP.has(w))
      .map(w => w.replace(/ae|oe/g,'e').replace(/iz/g,'is'))  // collapse UK/US spelling (haem/hem, -ise/-ize)
      .map(w => SYN[w] || w);
  }

  /* ---------------- case pages that exist (richer deep-links) ---------------- */
  const CASE_SLUGS = new Set(('abdominal-pain abnormal-lfts adhd allergic-rhinitis anaemia angina anxiety asthma '+
    'atrial-fibrillation autism axial-spa blackouts breast-cancer breathlessness chest-pain chronic-pain ckd coeliac '+
    'constipation contraception copd crohns dementia depression diverticulosis dyspepsia enuresis epilepsy fatigue gout '+
    'headache hearing-loss heart-failure hiv hypercalcaemia hypercholesterolaemia hypertension hyperthyroidism hyponatraemia '+
    'hypothyroidism ibs infertility insomnia low-back-pain male-luts menopause migraine ocd osa osteoarthritis osteoporosis '+
    'palpitations parkinsons pcos peripheral-arterial-disease ptsd red-eye sciatica tia-stroke tinnitus tremor type-1-diabetes '+
    'type-2-diabetes ulcerative-colitis urinary-incontinence urticaria vertigo '+
    'acne aki alcohol breast-disorders cmpa-reflux constipation-children dry-eye eating-disorders eczema '+
    'mi-secondary-prevention neuropathic-pain palliative-care shoulder-pain '+
    'uti-women wheeze-children vaginal-discharge erectile-dysfunction perinatal-mental-health back-pain '+
    'dvt obesity glaucoma neck-pain premenstrual-disorder addisons-disease amenorrhoea hip-pain diarrhoea psychosis-schizophrenia '+
    'cervical-screening chest-infections childhood-limp fungal-infections pruritus '+
    'drug-dependence gender-dysphoria haematological-cancers multimorbidity-polypharmacy analgesia-primary-care safeguarding childhood-msk').split(/\s+/));

  function caseHref(title){
    const cands = new Set();
    cands.add(slugify(title.replace(/\(.*?\)/g,'')));
    cands.add(slugify(title));
    const pm = title.match(/\(([^)]+)\)/);
    if(pm) cands.add(slugify(pm[1]));
    for(const c of cands){ if(c && CASE_SLUGS.has(c)) return '../cases/'+c+'.html'; }
    return null;
  }

  /* ---------------- build the index ---------------- */
  const INDEX = [];
  const bySlugMap = new Map();

  function buildIndex(){
    INDEX.length = 0; bySlugMap.clear();
    const ARTICLES = (window.RGP_ARTICLES || []);
    ARTICLES.forEach(a=>{
      const slug = slugify(a.title.replace(/\(.*?\)/g,''));
      const body = [a.overview, (a.features||[]).join(' '), (a.management||[]).join(' '), (a.referral||[]).join(' '), a.aka||''].join(' ');
      const titleTok = new Set(tokens(a.title + ' ' + (a.aka||'')));
      const bodyTok = {}; tokens(body).forEach(w=>{ bodyTok[w]=(bodyTok[w]||0)+1; });
      const ch = caseHref(a.title);
      push({ a, slug, titleTok, bodyTok, href: ch || 'articles.html', kind: ch?'Case walkthrough':'Article',
             embedText: a.title + '. ' + (a.aka?a.aka+'. ':'') + (a.overview||'') });
    });
    const KB = (window.RGP_KB_TOPICS || window.RGP_ALG_TOPICS || []);
    KB.forEach(t=>{
      const cleanTitle = String(t.title||'').replace(/\s*[—-]\s.*$/,'').trim() || t.title;
      const a = { title:cleanTitle, overview:t.sub||'', category:t.kind||'Pathway', source:'NICE CKS / NG12', icon:t.icon||'🗺️' };
      const titleTok = new Set(tokens(cleanTitle));
      const bodyTok = {}; tokens(t.sub||'').forEach(w=>{ bodyTok[w]=(bodyTok[w]||0)+1; });
      const href = t.href || ('../tools/algorithms/'+t.slug+'.html');
      push({ a, slug:(t.kind||'kb')+'-'+slugify(cleanTitle)+'-'+href, titleTok, bodyTok, href, kind:t.kind||'Pathway',
             embedText: cleanTitle + '. ' + (t.sub||'') });
    });
    computeIDF();
  }
  function push(it){ it._tArr = Array.from(it.titleTok); INDEX.push(it); bySlugMap.set(it.slug, it); }

  /* ---------------- IDF over title tokens (975 topics → specific terms must dominate) ---------------- */
  const idf = new Map();
  function computeIDF(){
    idf.clear();
    const N = INDEX.length || 1;
    const df = new Map();
    INDEX.forEach(it=>{ it.titleTok.forEach(w=> df.set(w, (df.get(w)||0)+1)); });
    df.forEach((d,w)=> idf.set(w, Math.log(1 + N/d)) );
  }
  function tokIDF(w){ return idf.has(w) ? idf.get(w) : Math.log(1+INDEX.length); } // unseen query word = maximally specific

  /* ---------------- lexical scoring ---------------- */
  const W_TITLE = 3.0, W_PREFIX = 1.8, W_BODY = 0.5, COVERAGE = 4.0;
  function searchScored(q, n){
    const qt = tokens(q);
    if(!qt.length) return [];
    const uniq = Array.from(new Set(qt));
    const scored = INDEX.map(it=>{
      let sc = 0, titleHits = 0;
      const tArr = it._tArr;
      uniq.forEach(w=>{
        const w4 = w.length>=4;
        if(it.titleTok.has(w)){ sc += W_TITLE * tokIDF(w); if(!GENERIC.has(w)) titleHits++; return; }
        // prefix / partial title match ("hyponatr" ↔ "hyponatremia")
        if(w4){
          for(let i=0;i<tArr.length;i++){ const tw=tArr[i]; if(tw.length>=4 && (tw.indexOf(w)===0 || w.indexOf(tw)===0)){ sc += W_PREFIX * tokIDF(tw); if(!GENERIC.has(tw)) titleHits++; return; } }
        }
        const bf = it.bodyTok[w]; if(bf) sc += W_BODY * Math.min(bf,3) * tokIDF(w);
      });
      // Precision bonus: reward titles that ARE mostly the query topic (exact "Hypertension"
      // over "Pulmonary hypertension"), scaled so it can't swamp a strong specific-term match.
      if(titleHits && tArr.length){ sc += COVERAGE * (titleHits / tArr.length); }
      return { it, sc, titleHit: titleHits>0 };
    }).filter(x=>x.sc>0).sort((a,b)=>b.sc-a.sc);
    return n ? scored.slice(0,n) : scored;
  }

  /* ---------------- semantic layer (embeddings, optional) ---------------- */
  const SEM = { available:false, ready:false, count:0, vecs:null, dim:0 };
  const EMBED_BATCH = 48;
  const DB_NAME = 'rgp-ask', STORE = 'kv';

  function idbGet(key){
    return new Promise(res=>{
      try{
        const r = indexedDB.open(DB_NAME,1);
        r.onupgradeneeded = ()=> r.result.createObjectStore(STORE);
        r.onerror = ()=> res(null);
        r.onsuccess = ()=>{ try{ const db=r.result; const g=db.transaction(STORE).objectStore(STORE).get(key); g.onsuccess=()=>res(g.result||null); g.onerror=()=>res(null); }catch(e){ res(null); } };
      }catch(e){ res(null); }
    });
  }
  function idbSet(key,val){
    return new Promise(res=>{
      try{
        const r = indexedDB.open(DB_NAME,1);
        r.onupgradeneeded = ()=> r.result.createObjectStore(STORE);
        r.onerror = ()=> res(false);
        r.onsuccess = ()=>{ try{ const db=r.result; const tx=db.transaction(STORE,'readwrite'); tx.objectStore(STORE).put(val,key); tx.oncomplete=()=>res(true); tx.onerror=()=>res(false); }catch(e){ res(false); } };
      }catch(e){ res(false); }
    });
  }
  // cheap fingerprint so cache invalidates if the library changes
  function libFingerprint(){
    const n = INDEX.length;
    const first = INDEX[0] ? INDEX[0].a.title : '';
    const last = INDEX[n-1] ? INDEX[n-1].a.title : '';
    return 'v2:'+n+':'+first+':'+last;
  }

  async function embed(texts){
    if(!(window.claude && typeof window.claude.embed==='function')) throw new Error('no-embed');
    const v = await window.claude.embed(texts);
    if(!Array.isArray(v) || !v.length || !Array.isArray(v[0])) throw new Error('bad-embed');
    return v;
  }
  function normVec(v){ let s=0; for(let i=0;i<v.length;i++) s+=v[i]*v[i]; s=Math.sqrt(s)||1; const o=new Float32Array(v.length); for(let i=0;i<v.length;i++) o[i]=v[i]/s; return o; }

  let warmupPromise = null;
  async function warmup(){
    if(!(window.claude && typeof window.claude.embed==='function')) return; // no backend → lexical only
    SEM.available = true;
    if(warmupPromise) return warmupPromise;
    warmupPromise = (async ()=>{
      const fp = libFingerprint();
      // try cache
      try{
        const cached = await idbGet('kbvecs');
        if(cached && cached.fp===fp && cached.buf && cached.dim && cached.count===INDEX.length){
          SEM.dim = cached.dim; SEM.count = cached.count;
          SEM.vecs = new Float32Array(cached.buf);
          SEM.ready = true; return;
        }
      }catch(e){}
      // build: embed every topic in batches
      try{
        let dim = 0; let all = null; let filled = 0;
        for(let i=0;i<INDEX.length;i+=EMBED_BATCH){
          const chunk = INDEX.slice(i,i+EMBED_BATCH).map(it=>it.embedText.slice(0,512));
          const vecs = await embed(chunk);
          if(!dim){ dim = vecs[0].length; all = new Float32Array(INDEX.length*dim); }
          for(let j=0;j<vecs.length;j++){ const nv = normVec(vecs[j]); all.set(nv, (i+j)*dim); filled++; }
        }
        if(all && dim){
          SEM.vecs = all; SEM.dim = dim; SEM.count = INDEX.length; SEM.ready = true;
          try{ await idbSet('kbvecs', { fp, dim, count:INDEX.length, buf: all.buffer }); }catch(e){}
        }
      }catch(e){ SEM.ready = false; /* stay lexical */ }
    })();
    return warmupPromise;
  }

  function semanticScores(qvecNorm){
    const { vecs, dim, count } = SEM;
    const out = new Float32Array(count);
    for(let i=0;i<count;i++){ let s=0; const base=i*dim; for(let k=0;k<dim;k++) s+=qvecNorm[k]*vecs[base+k]; out[i]=s; }
    return out; // cosine (both normalised) in [-1,1]
  }

  /* ---------------- grounding: the notes the model actually answers from ----------------
     Hybrid when embeddings are ready (semantic recall + lexical precision), else lexical.
     groundingMeta additionally reports WHICH layer answered and how confident the
     match is, so the caller can force a live web-search when the library match is weak. */
  async function groundingMeta(q, k){
    k = k || 5;
    const lex = searchScored(q); // full ranked list
    const lexTop = lex.slice(0, 40);

    // try semantic (non-blocking: if not ready yet, just use lexical this turn)
    let sem = null;
    if(SEM.available){
      try{
        if(!SEM.ready) await Promise.race([ warmup(), new Promise(r=>setTimeout(r, 2500)) ]);
        if(SEM.ready){
          const qv = normVec((await embed([q.slice(0,512)]))[0]);
          sem = semanticScores(qv);
        }
      }catch(e){ sem = null; }
    }

    if(!sem){
      // pure lexical: ground only on TITLE-matching notes (never a stray body keyword),
      // fall back to the single best note so the answer is still anchored.
      const tHits = lex.filter(x=>x.titleHit);
      const items = (tHits.length ? tHits : lex.slice(0,1)).slice(0,k).map(x=>x.it);
      return { items, mode:'lexical', confident: tHits.length > 0 };
    }

    // hybrid blend. Normalise lexical top to [0,1]; take semantic relu.
    const maxLex = lexTop.length ? lexTop[0].sc : 1;
    const lexNorm = new Map(); lexTop.forEach(x=> lexNorm.set(x.it, x.sc/maxLex));
    const titleHit = new Map(); lex.forEach(x=> titleHit.set(x.it, x.titleHit));
    // candidate union: lexical top 40 ∪ semantic top 40
    const semIdx = Array.from(sem.keys()).sort((a,b)=>sem[b]-sem[a]).slice(0,40);
    const cand = new Set(lexTop.map(x=>x.it));
    semIdx.forEach(i=> cand.add(INDEX[i]));
    const idxOf = new Map(INDEX.map((it,i)=>[it,i]));
    const blended = Array.from(cand).map(it=>{
      const s = Math.max(0, sem[idxOf.get(it)] || 0);
      const l = lexNorm.get(it) || 0;
      let f = 0.55*s + 0.45*l;
      if(titleHit.get(it)) f += 0.08;              // exact title match is a strong precision signal
      return { it, f, s, l };
    }).sort((a,b)=>b.f-a.f);

    // guard against a purely-semantic false friend: if the top pick has no lexical overlap
    // at all AND a clear lexical title-hit exists, prefer surfacing the lexical one too.
    const top = blended[0];
    const confident = !!top && (top.f >= 0.45 || !!titleHit.get(top.it));
    return { items: blended.slice(0,k).map(x=>x.it), mode:'semantic', confident };
  }
  async function grounding(q, k){ return (await groundingMeta(q, k)).items; }

  /* ---------------- related topics (sync, lexical; for the "explore" chips) ---------------- */
  function relatedItems(q, excludeHrefs){
    const scored = searchScored(q, 60);
    let items = scored.filter(x=>x.titleHit).map(x=>x.it);
    if(!items.length) return [];
    const mainTok = tokens(q).filter(w=>!GENERIC.has(w) && !MODIFIER.has(w));
    if(mainTok.length){
      const matchesMain = it => mainTok.some(w => it.titleTok.has(w) || (w.length>=4 && it._tArr.some(tw=>tw.length>=4 && (tw.indexOf(w)===0 || w.indexOf(tw)===0))));
      const tightened = items.filter(matchesMain);
      if(tightened.length) items = tightened;
    }
    const GROUPS = [
      { keys:['Pathway'],                 label:'Pathways',          ic:'🗺️' },
      { keys:['Protocol'],                label:'Protocols',         ic:'💠' },
      { keys:['Case walkthrough','Case'], label:'Case walkthroughs', ic:'📋' },
      { keys:['Article'],                 label:'Topic notes',       ic:'📚' }
    ];
    const seen = new Set(excludeHrefs||[]);
    const groups = [];
    GROUPS.forEach(g=>{
      const uniq = [], hs = new Set();
      items.forEach(it=>{ if(!g.keys.includes(it.kind)) return; if(seen.has(it.href)||hs.has(it.href)) return; hs.add(it.href); uniq.push(it); });
      const take = uniq.slice(0,5); take.forEach(it=>seen.add(it.href));
      if(take.length) groups.push({ label:g.label, ic:g.ic, items:take });
    });
    return groups;
  }

  /* ---------------- boot ---------------- */
  buildIndex();
  // kick semantic warmup on idle so vectors are ready before the first question (no-op w/o backend)
  try{
    const kick = ()=>{ try{ warmup(); }catch(e){} };
    if('requestIdleCallback' in window) requestIdleCallback(kick, { timeout:4000 }); else setTimeout(kick, 1500);
  }catch(e){}

  window.RGPRetrieval = {
    ready: true,
    bySlug: s => bySlugMap.get(s) || null,
    searchScored,
    grounding,
    groundingMeta,
    relatedItems,
    tokens, GENERIC, MODIFIER,
    get semantic(){ return { available:SEM.available, ready:SEM.ready, count:SEM.count }; },
    _index: INDEX
  };
})();
