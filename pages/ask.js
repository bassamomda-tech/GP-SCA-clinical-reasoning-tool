/* ============================================================
   Reasoning GP — Ask the assistant
   A grounded clinical-reasoning chat. Retrieves the most relevant
   Reasoning GP topic notes for each question and answers from them
   via window.claude.complete, with deterministic source links.
   ============================================================ */
(function(){
  'use strict';

  const $  = (s,r)=> (r||document).querySelector(s);
  const thread   = $('#thread');
  const welcome  = $('#welcome');
  const form     = $('#composer');
  const input    = $('#input');
  const sendBtn  = $('#send');
  const clearBtn = $('#clearBtn');

  /* ---------- escape ---------- */
  function esc(s){ return String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
  function slugify(s){ return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,''); }

  /* ---------- case pages that exist (for richer deep-links) ---------- */
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

  /* ---------- build the knowledge index ---------- */
  const STOP = new Set(('the a an and or of to in for with on at is are be do does what when which how why who whom can could '+
    'should would may might will my his her their your our this that these those i you he she it we they not no yes any some '+
    'about into from over under after before during patient patients management treat treatment cause causes diagnosis '+
    'first line need please tell me give explain whats what\'s vs versus').split(/\s+/));

  // Clinical synonyms / abbreviations → canonical token, so e.g. "folic acid" finds the
  // "Low folate" topic and common acronyms resolve to the condition. Values are written in
  // their already-collapsed spelling (ae/oe→e) so they match indexed title tokens.
  const SYN = {
    folic:'folate',
    htn:'hypertension', hypertensive:'hypertension',
    ckd:'kidney',
    gord:'reflux', gerd:'reflux',
    uti:'urinary',
    bph:'prostate',
    t2dm:'diabetes', t1dm:'diabetes', diabetic:'diabetes',
    osa:'apnea',
    tia:'stroke'
  };
  function tokens(s){
    return String(s||'').toLowerCase().replace(/[^a-z0-9\s]/g,' ').split(/\s+/)
      .filter(w => w.length>2 && !STOP.has(w))
      .map(w => w.replace(/ae|oe/g,'e').replace(/iz/g,'is'))   // collapse UK/US spelling for ALL words (haem/hem, -aemia/-emia, -ize/-ise)
      .map(w => SYN[w] || w);                                  // map clinical synonyms/abbreviations to a canonical token
  }

  const ARTICLES = (window.RGP_ARTICLES || []);
  function caseHref(title){
    // try the title minus parentheticals, the parenthetical content itself, and the raw title
    const cands = new Set();
    cands.add(slugify(title.replace(/\(.*?\)/g,'')));
    cands.add(slugify(title));
    const pm = title.match(/\(([^)]+)\)/);
    if(pm) cands.add(slugify(pm[1]));
    for(const c of cands){ if(c && CASE_SLUGS.has(c)) return '../cases/'+c+'.html'; }
    return null;
  }
  const INDEX = ARTICLES.map(a=>{
    const slug = slugify(a.title.replace(/\(.*?\)/g,''));
    const body = [a.overview, (a.features||[]).join(' '), (a.management||[]).join(' '), (a.referral||[]).join(' '), a.aka||''].join(' ');
    const titleTok = new Set(tokens(a.title + ' ' + (a.aka||'')));
    const bodyTok = {};
    tokens(body).forEach(w=>{ bodyTok[w] = (bodyTok[w]||0)+1; });
    const ch = caseHref(a.title);
    const href = ch || 'articles.html';
    const kind = ch ? 'Case walkthrough' : 'Article';
    return { a, slug, titleTok, bodyTok, href, kind };
  });

  /* ---------- also index every casebook, pathway & protocol ---------- */
  const KB = (window.RGP_KB_TOPICS || window.RGP_ALG_TOPICS || []);
  KB.forEach(t=>{
    const cleanTitle = String(t.title||'').replace(/\s*[—-]\s.*$/,'').trim() || t.title;  // drop trailing subtitle after dash
    const a = { title:cleanTitle, overview:t.sub||'', category:t.kind||'Pathway', source:'NICE CKS / NG12', icon:t.icon||'🗺️' };
    // Title tokens come from the TITLE only (not the subtitle) so a topic that merely
    // mentions the query word in its descriptive subtitle (e.g. Splenomegaly → "portal
    // hypertension") is NOT treated as an on-topic title match. The subtitle still counts
    // as body context for grounding.
    const titleTok = new Set(tokens(cleanTitle));
    const bodyTok = {};
    tokens(t.sub||'').forEach(w=>{ bodyTok[w] = (bodyTok[w]||0)+1; });
    const href = t.href || ('../tools/algorithms/'+t.slug+'.html');
    INDEX.push({ a, slug:(t.kind||'kb')+'-'+slugify(cleanTitle)+'-'+(href), titleTok, bodyTok, href, kind:t.kind||'Pathway' });
  });

  // Generic qualifier words that appear across many titles ("X deficiency", "chronic Y").
  // A title match on these is weak — the *specific* word (folate, sodium…) should decide
  // ranking, so a hit here scores far less and doesn't inflate the coverage bonus.
  const GENERIC = new Set(('deficiency disease syndrome disorder chronic acute low high raised elevated '+
    'primary secondary infection infections problem problems abnormal abnormality test results result blood').split(/\s+/));

  function retrieveScored(q, n){
    const qt = tokens(q);
    if(!qt.length) return [];
    const scored = INDEX.map(it=>{
      let sc = 0, tHit = false, titleHits = 0;
      const tArr = it._tArr || (it._tArr = Array.from(it.titleTok));
      qt.forEach(w=>{
        if(it.titleTok.has(w)){ const gen = GENERIC.has(w); sc += gen ? 2 : 6; tHit = true; if(!gen) titleHits++; return; }
        const bf = it.bodyTok[w]; if(bf) sc += Math.min(bf,4);
        if(w.length>=4){
          // partial / prefix match so e.g. "hyponatr" finds "hyponatremia"
          for(let i=0;i<tArr.length;i++){ const tw=tArr[i]; if(tw.length>=4 && (tw.indexOf(w)===0 || w.indexOf(tw)===0)){ sc += 4; tHit = true; if(!GENERIC.has(tw)) titleHits++; break; } }
        }
      });
      // Coverage bonus: reward titles that are *mostly* the query topic, so the exact
      // condition ("Hypertension") outranks compound mentions ("Pulmonary hypertension").
      if(titleHits && tArr.length){ sc += 6 * (titleHits / tArr.length); }
      return { it, sc, tHit };
    }).filter(x=>x.sc>0).sort((a,b)=>b.sc-a.sc);
    return scored.slice(0,n);
  }
  function retrieveN(q, n){ return retrieveScored(q, n).map(x=>x.it); }
  function retrieve(q){
    const scored = retrieveScored(q, 8);
    if(!scored.length) return [];
    // Ground only on notes whose TITLE matches the question (the topic itself),
    // never on a note that merely mentions a query word in its body. Fall back
    // to the single best note so the answer is still grounded.
    const tHits = scored.filter(x=>x.tHit);
    return (tHits.length ? tHits : scored.slice(0,1)).slice(0,4).map(x=>x.it);
  }

  /* ---------- grouped "related in the library" links ---------- */
  const KIND_GROUPS = [
    { keys:['Pathway'],                 label:'Pathways',          ic:'🗺️' },
    { keys:['Protocol'],                label:'Protocols',         ic:'💠' },
    { keys:['Case walkthrough','Case'], label:'Case walkthroughs', ic:'📋' },
    { keys:['Article'],                 label:'Topic notes',       ic:'📚' },
  ];
  function relatedHtml(q, excludeHrefs){
    const scored = retrieveScored(q, 40);
    if(!scored.length) return '';
    // Only genuinely relevant topics: the query must match the topic's TITLE
    // (so a "hypertension" question surfaces the hypertension pathway / protocol /
    // case — not every note that merely mentions an age or a stray word).
    let items = scored.filter(x=>x.tHit).map(x=>x.it);
    if(!items.length) return '';
    // Tighten further: keep only topics whose TITLE contains the MAIN condition
    // word(s) from the question — not ones matching merely on a demographic
    // modifier ("children", "adult", "pregnancy"). So "constipation in children"
    // lists only constipation topics, not every paediatric note.
    const MODIFIER = new Set(['child','children','childhood','adult','adults','elderly','old','young','infant','infants','baby','babies','neonate','neonatal','pregnancy','pregnant','antenatal','postnatal','men','man','male','males','women','woman','female','females','teenage','teenager','adolescent','adolescents','paediatric','pediatric','geriatric']);
    const mainTok = tokens(q).filter(w=>!GENERIC.has(w) && !MODIFIER.has(w));
    if(mainTok.length){
      const matchesMain = it => {
        const tArr = it._tArr || (it._tArr = Array.from(it.titleTok));
        return mainTok.some(w => it.titleTok.has(w) || (w.length>=4 && tArr.some(tw=>tw.length>=4 && (tw.indexOf(w)===0 || w.indexOf(tw)===0))));
      };
      const tightened = items.filter(matchesMain);
      if(tightened.length) items = tightened;
    }
    const seen = new Set(excludeHrefs||[]);
    const groups = [];
    KIND_GROUPS.forEach(g=>{
      const uniq = [], hs = new Set();
      items.forEach(it=>{
        if(!g.keys.includes(it.kind)) return;
        if(seen.has(it.href) || hs.has(it.href)) return;
        hs.add(it.href); uniq.push(it);
      });
      const take = uniq.slice(0,5);
      take.forEach(it=>seen.add(it.href));
      if(take.length) groups.push({ g, items:take });
    });
    if(!groups.length) return '';
    return '<div class="ans-related"><div class="ans-src-l">Explore related in the library</div>' +
      groups.map(x=>'<div class="rel-grp"><span class="rel-grp-l">'+x.g.ic+' '+esc(x.g.label)+'</span><div class="src-chips">'+
        x.items.map(it=>`<a class="src-chip" href="${esc(it.href)}"><span class="sc-ic">${it.a.icon||x.g.ic}</span><span>${esc(it.a.title)}</span></a>`).join('')+
      '</div></div>').join('') + '</div>';
  }

  /* ---------- tool destinations (keyword-routed suggestion chips) ---------- */
  const TOOLS = [
    { test:/\b(dose|doses|prescrib|prescription|regimen|mg |course|how much|titrat|stat|treat|treatment|replac|supplement|deficien|deplet|manage|management)\b/, ic:'📝', label:'Ready Prescriptions', href:'../tools/prescriptions.html' },
    { test:/\b(which drug|what drug|choose|choice of|first[- ]?line|second[- ]?line|switch to|add[- ]?on)\b/, ic:'💊', label:'Medication Chooser', href:'../tools/medication-chooser.html' },
    { test:/\b(differential|present(s|ing)? with|work ?up|undifferentiated|triage|could it be|rule out)\b/, ic:'🩺', label:'Diagnostic Tool', href:'../tools/diagnostic.html' },
    { test:/\b(blood test|result|ferritin|hba1c|tft|lft|u&e|fbc|sodium|potassium|egfr|abnormal)\b/, ic:'🧪', label:'Lab Results Actioning', href:'../tools/lab-results.html' },
    { test:/\b(score|calculat|chads|qrisk|phq|gad|news2|frax|risk of)\b/, ic:'🧮', label:'Medical Calculators', href:'../tools/calculators.html' },
    { test:/\b(examin|auscultat|palpat|technique|inspection)\b/, ic:'🩻', label:'Examinations', href:'../tools/examinations.html' },
    { test:/\b(sca|examiner|station|marked|marking|scorecard|relating to others|data gathering|consultation skill)\b/, ic:'🎓', label:'The Hot Seat (SCA)', href:'../tools/sca-practice.html' },
    { test:/\b(pathway|flow ?chart|algorithm|decision tree)\b/, ic:'🗺️', label:'Pathways', href:'../tools/algorithms.html' },
    { test:/\b(leaflet|patient information|self[- ]?care advice|charity)\b/, ic:'📄', label:'Patient Leaflets', href:'../tools/leaflets.html' },
  ];
  function toolChips(q){
    const ql = ' ' + q.toLowerCase() + ' ';
    return TOOLS.filter(t=>t.test.test(ql)).slice(0,2);
  }

  /* ---------- context block for the model ---------- */
  function clip(arr, n){ return (arr||[]).slice(0,n); }
  function buildContext(hits){
    if(!hits.length) return 'No closely-matching note was found in the Reasoning GP library for this question. Follow the SOURCE HIERARCHY: answer from current UK guidance — NICE CKS / NICE guidelines and the BNF first; if those do not cover it, draw on other authoritative UK sources (BMJ Best Practice, SIGN, UK specialist-society guidance, UKHSA, MHRA, GOV.UK). State which source you relied on, keep it cautious, and note that no specific Reasoning GP library note matched.';
    let out = 'REASONING GP LIBRARY — relevant topic notes (your source of truth; ground the answer in these):\n';
    hits.forEach((it,i)=>{
      const a = it.a;
      out += `\n[${i+1}] ${a.title}  (${a.category||'General'} · source: ${a.source||'NICE CKS'})\n`;
      if(a.overview) out += 'Overview: ' + a.overview + '\n';
      if(a.features && a.features.length) out += 'Key features: ' + clip(a.features,6).join('; ') + '\n';
      if(a.management && a.management.length) out += 'Primary-care approach: ' + clip(a.management,7).join('; ') + '\n';
      if(a.referral && a.referral.length) out += 'Refer / red flags: ' + clip(a.referral,5).join('; ') + '\n';
    });
    return out;
  }

  /* ---------- the model framing ---------- */
  const FRAMING = [
    'You are the Reasoning GP assistant — a clinical-reasoning aide for the UK primary-care team and RCGP/SCA candidates.',
    'Answer in British English, concisely (aim under ~220 words), the way an experienced GP trainer would at the point of care.',
    'SOURCE HIERARCHY — follow it in order and ground every answer accordingly:',
    '  1) The provided "Reasoning GP library" notes (your primary source of truth);',
    '  2) then current NICE CKS / NICE guidelines and the BNF (doses, interactions, monitoring);',
    '  3) only if 1 and 2 do not cover the question, draw on other authoritative UK sources — BMJ Best Practice, SIGN, UK specialist-society guidance (e.g. BHS, BTS, BASHH, RCOG, BAD), UKHSA, MHRA and GOV.UK.',
    'Briefly attribute which source the key recommendation rests on (e.g. "per NICE CKS", "BNF", "BMJ Best Practice"). For well-established UK primary-care treatments you MUST state the actual drug, dose, frequency and duration (e.g. "folic acid 5 mg once daily for 4 months", "amlodipine 5 mg once daily") — do not tell the reader to "look it up in the BNF" for routine, standard regimens. Only defer to the BNF for the specific figure when the dose genuinely varies (e.g. weight-/renal-based, unfamiliar specialist drugs) — and even then give the usual starting point if you know it. Append the standard verify caveat once at the end rather than withholding the dose.',
    'CONTINUING CONVERSATION: the turns above are an ongoing discussion with the same clinician. Treat each new question as a follow-up that builds on the previous turns unless it plainly starts a new subject. Resolve back-references ("it", "that drug", "the dose", "what about in pregnancy/children/renal impairment", "and if it fails?") against the condition or drug discussed earlier, and do not repeat what was already established — just answer the new point.',
    'CONTEXT OVER KEYWORDS: if the supplied library notes look unrelated to the question or to the current conversation topic, DISREGARD them and answer from the conversation thread plus NICE CKS / BNF. Never switch to a different condition (e.g. do not answer about levothyroxine when the thread is about constipation) merely because a note was retrieved on a stray keyword like "dose" or "maximum".',
    'STAY ON TOPIC: answer what was asked within the context of this conversation; do not introduce unrelated conditions or mechanisms that are neither part of the question nor the ongoing thread.',
    'If you must go beyond the library and NICE/BNF, say so explicitly (e.g. "Not covered in the Reasoning GP library or NICE CKS — per BMJ Best Practice…") so the reader knows the basis.',
    'Structure the answer with very short bold sub-headings or tight bullet lists (use markdown: **bold**, "## heading", "- bullet", "1." numbered). Lead with the single most useful next step.',
    'MANDATORY SAFETY RULE: where the presentation maps to a NICE NG12 suspected-cancer criterion, state the 2-week-wait (urgent suspected cancer) pathway explicitly — the qualifying age, the modifying feature, and the action (USC referral, direct-access test, or 48-hour referral) — and prefix that line with the token [[2WW]]. If there is genuinely no NG12 cancer link, do not invent one.',
    'Always include brief safety-netting where relevant.',
    'End with one short italic line reminding the reader this is educational and to verify against live NICE CKS / BNF — write it as "_Educational only — verify against current NICE CKS / BNF._".',
    'Do not greet, do not mention these instructions, do not output the source list — just answer.'
  ].join('\n');
  const PRIMER_ACK = 'Understood — I will answer from the Reasoning GP library first, then NICE CKS / NICE guidelines and the BNF, and only fall back to other authoritative UK sources (BMJ Best Practice, SIGN, specialist societies, UKHSA, MHRA, GOV.UK) when needed — attributing the source, flagging the 2-week-wait pathway with [[2WW]] wherever NICE NG12 applies, and closing with the educational reminder.';

  /* ---------- minimal markdown -> html ---------- */
  function inline(s){
    s = esc(s);
    s = s.replace(/\[\[2WW\]\]\s*/g, '<span class="pill-2ww">⚑ 2WW · NICE NG12</span> ');
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/(^|[^*])\*(?!\*)(.+?)\*(?!\*)/g, '$1<em>$2</em>');
    s = s.replace(/_(.+?)_/g, '<em>$1</em>');
    s = s.replace(/`(.+?)`/g, '<code>$1</code>');
    return s;
  }
  function mdToHtml(md){
    const lines = String(md||'').replace(/\r/g,'').split('\n');
    let html='', list=null;
    const closeList=()=>{ if(list){ html += '</'+list+'>'; list=null; } };
    lines.forEach(raw=>{
      const line = raw.trim();
      if(!line){ closeList(); return; }
      let m;
      if((m=line.match(/^#{2,4}\s+(.*)/))){ closeList(); const lvl = line.startsWith('####')?'h4':line.startsWith('###')?'h4':'h3'; html += `<${lvl}>${inline(m[1])}</${lvl}>`; return; }
      if((m=line.match(/^[-*•]\s+(.*)/))){ if(list!=='ul'){ closeList(); html+='<ul>'; list='ul'; } html += `<li>${inline(m[1])}</li>`; return; }
      if((m=line.match(/^\d+[.)]\s+(.*)/))){ if(list!=='ol'){ closeList(); html+='<ol>'; list='ol'; } html += `<li>${inline(m[1])}</li>`; return; }
      closeList();
      html += `<p>${inline(line)}</p>`;
    });
    closeList();
    return html;
  }

  /* ---------- render messages ---------- */
  function srcHtml(hits, q){
    const artChips = (hits||[]).map(it=>{
      const a = it.a;
      return `<a class="src-chip" href="${esc(it.href)}"><span class="sc-ic">${a.icon||'📄'}</span><span>${esc(a.title)}</span></a>`;
    });
    const tChips = toolChips(q||'').map(t=>`<a class="src-chip" href="${esc(t.href)}"><span class="sc-ic">${t.ic}</span><span>${esc(t.label)}</span></a>`);
    const all = artChips.concat(tChips);
    if(!all.length) return '';
    return `<div class="ans-src"><div class="ans-src-l">From the Reasoning GP library</div><div class="src-chips">${all.join('')}</div></div>`;
  }

  /* ---------- external references (shown when the answer cites a source NOT on this site) ----------
     The model attributes its key recommendation ("per NICE CKS", "BNF", "BMJ Best Practice"…).
     We scan the generated answer for those named UK sources and surface a clickable reference for
     each, so anything grounded outside the Reasoning GP library is properly cited. Ambiguous
     acronyms (SIGN, BHS, BTS, BASHH, RCOG, BAD) are matched case-sensitively to avoid false hits
     on ordinary words ("sign", "bad"). */
  function refHtml(answer, q){
    const text = String(answer||'');
    const qq = String(q||'');
    const chips = [];
    const add = (label, ic, url)=> chips.push(`<a class="src-chip ext" href="${esc(url)}" target="_blank" rel="noopener noreferrer"><span class="sc-ic">${ic}</span><span>${esc(label)}</span><span class="ext-ar" aria-hidden="true">↗</span></a>`);

    const ng12 = /\bNG12\b|two[-\s]?week[-\s]?wait|2[-\s]?week[-\s]?wait|suspected cancer/i.test(text) || /\[\[2WW\]\]/.test(text);
    const cks  = /\bNICE\s+CKS\b|clinical knowledge summar/i.test(text);
    const niceG = /\bNICE\b/i.test(text);
    if(cks)  add('NICE CKS', '🔗', 'https://cks.nice.org.uk/search/?q='+encodeURIComponent(qq));
    if(ng12) add('NICE NG12 · suspected cancer', '⚑', 'https://www.nice.org.uk/guidance/ng12');
    if(niceG && !cks && !ng12) add('NICE guidance', '🔗', 'https://www.nice.org.uk/search?q='+encodeURIComponent(qq));
    if(/\bBNF\b|British National Formulary/i.test(text)) add('BNF', '💊', 'https://bnf.nice.org.uk/');
    if(/\bBMJ Best Practice\b/i.test(text)) add('BMJ Best Practice', '📘', 'https://bestpractice.bmj.com/search?q='+encodeURIComponent(qq));
    if(/\bSIGN\b/.test(text)) add('SIGN', '🔗', 'https://www.sign.ac.uk/our-guidelines/');
    if(/\bUKHSA\b|Green Book/.test(text)) add('UKHSA / Green Book', '🔗', 'https://www.gov.uk/government/collections/immunisation-against-infectious-disease-the-green-book');
    if(/\bMHRA\b|Drug Safety Update/i.test(text)) add('MHRA Drug Safety Update', '⚠️', 'https://www.gov.uk/drug-safety-update');
    if(/\bBHS\b|British (?:and Irish )?Hypertension Society/.test(text)) add('British & Irish Hypertension Society', '🔗', 'https://bihsoc.org/resources/');
    if(/\bBTS\b|British Thoracic Society/.test(text)) add('British Thoracic Society', '🔗', 'https://www.brit-thoracic.org.uk/quality-improvement/guidelines/');
    if(/\bBASHH\b/.test(text)) add('BASHH', '🔗', 'https://www.bashh.org/guidelines/');
    if(/\bRCOG\b/.test(text)) add('RCOG', '🔗', 'https://www.rcog.org.uk/guidance/browse-all-guidance/');
    if(/\bBAD\b|British Association of Dermatologists/.test(text)) add('British Association of Dermatologists', '🔗', 'https://www.bad.org.uk/clinical-guidelines/');
    if(/\bGINA\b/.test(text)) add('GINA (asthma)', '🔗', 'https://ginasthma.org/reports/');
    if(/\bResus(?:citation)? Council\b|\bRCUK\b/i.test(text)) add('Resuscitation Council UK', '🔗', 'https://www.resus.org.uk/library/2021-resuscitation-guidelines');

    if(!chips.length) return '';
    return `<div class="ans-src ans-ext"><div class="ans-src-l">References · external guidance cited</div><div class="src-chips">${chips.join('')}</div></div>`;
  }

  function addUser(text){
    const el = document.createElement('div');
    el.className = 'msg user';
    el.innerHTML = `<div class="msg-av">🩺</div><div class="msg-bubble">${esc(text)}</div>`;
    thread.appendChild(el);
    el.scrollIntoView({ behavior:'smooth', block:'start' });
  }
  function addBot(htmlInner){
    const el = document.createElement('div');
    el.className = 'msg bot';
    el.innerHTML = `<div class="msg-av">R</div><div class="msg-bubble">${htmlInner}</div>`;
    thread.appendChild(el);
    el.scrollIntoView({ behavior:'smooth', block:'nearest' });
    return el;
  }
  function botTyping(){
    return addBot('<div class="typing"><i></i><i></i><i></i></div>');
  }

  /* ---------- sessions / persistence (multi-chat) ---------- */
  const SESS_KEY = 'rgp.ask.sessions.v1';
  const OLD_KEY  = 'rgp.ask.thread.v1';
  let sessions = [];
  let activeId = null;
  let history  = [];   // alias to the active session's .messages array

  function uid(){ return 's'+Date.now().toString(36)+Math.random().toString(36).slice(2,6); }
  function newSessionObj(){ return { id:uid(), title:'New chat', created:Date.now(), updated:Date.now(), messages:[] }; }
  function activeSession(){ return sessions.find(s=>s.id===activeId); }
  function deriveTitle(msgs){
    const u = (msgs||[]).find(m=>m.role==='user');
    if(!u) return 'New chat';
    const t = String(u.content).replace(/\s+/g,' ').trim();
    return t.length>46 ? t.slice(0,46).trim()+'\u2026' : t;
  }
  function saveSessions(){ try{ localStorage.setItem(SESS_KEY, JSON.stringify({sessions, activeId})); }catch(e){} }
  function save(){ const s=activeSession(); if(s){ s.updated=Date.now(); if(!s.title || s.title==='New chat') s.title=deriveTitle(s.messages); } saveSessions(); renderChatList(); }

  function loadSessions(){
    try{ const r=JSON.parse(localStorage.getItem(SESS_KEY)||'null'); if(r && Array.isArray(r.sessions)){ sessions=r.sessions; activeId=r.activeId; } }catch(e){ sessions=[]; }
    if(!sessions.length){
      // migrate the old single-thread store, if present
      let old=[]; try{ old=JSON.parse(localStorage.getItem(OLD_KEY)||'[]')||[]; }catch(e){}
      const s=newSessionObj();
      if(old.length){ s.messages=old; s.title=deriveTitle(old); }
      sessions=[s]; activeId=s.id; saveSessions();
    }
    if(!activeId || !activeSession()) activeId=sessions[0].id;
    history = activeSession().messages;
  }
  function hitsFromSlugs(slugs){ if(!slugs) return []; return slugs.map(s=>INDEX.find(it=>it.slug===s)).filter(Boolean); }

  function clearThreadDOM(){ thread.querySelectorAll('.msg').forEach(m=>m.remove()); }
  function renderThread(){
    clearThreadDOM();
    if(!history.length){ welcome.style.display=''; clearBtn.hidden=true; return; }
    welcome.style.display='none'; clearBtn.hidden=false;
    history.forEach(m=>{
      if(m.role==='user') addUser(m.content);
      else addBot(`<div class="ans">${mdToHtml(m.content)}</div>${srcHtml(hitsFromSlugs(m.hitSlugs), m.q)}${refHtml(m.content, m.q||m.content)}<div class="ans-note">Generated from Reasoning GP notes + NICE-aligned guidance. Always confirm against current NICE CKS / BNF.</div>`);
    });
  }

  /* ---------- chat list drawer ---------- */
  const chatDrawer=$('#chatDrawer'), chatOverlay=$('#chatOverlay'), chatList=$('#chatList');
  function openDrawer(){ renderChatList(); chatDrawer.hidden=false; chatOverlay.hidden=false; }
  function closeDrawer(){ chatDrawer.hidden=true; chatOverlay.hidden=true; }
  function renderChatList(){
    if(!chatList) return;
    const ordered = sessions.slice().sort((a,b)=>(b.updated||0)-(a.updated||0));
    if(!ordered.length){ chatList.innerHTML='<div class="cd-empty">No chats yet.</div>'; return; }
    chatList.innerHTML = ordered.map(s=>`<div class="cd-item${s.id===activeId?' active':''}" data-id="${s.id}"><span class="cd-item-ic">💬</span><span class="cd-item-t">${esc(s.title||'New chat')}</span><button class="cd-item-x" data-del="${s.id}" title="Delete chat" aria-label="Delete chat">✕</button></div>`).join('');
    chatList.querySelectorAll('.cd-item').forEach(el=>{
      el.addEventListener('click', e=>{ if(e.target.closest('.cd-item-x')) return; switchChat(el.dataset.id); });
    });
    chatList.querySelectorAll('.cd-item-x').forEach(b=>{
      b.addEventListener('click', e=>{ e.stopPropagation(); deleteChat(b.dataset.del); });
    });
  }
  function switchChat(id){
    if(id===activeId){ closeDrawer(); return; }
    const s=sessions.find(x=>x.id===id); if(!s) return;
    activeId=id; history=s.messages; saveSessions();
    renderThread(); renderChatList(); closeDrawer(); input.focus();
  }
  function newChat(){
    const cur=activeSession();
    if(cur && !cur.messages.length){ renderThread(); closeDrawer(); input.focus(); return; } // reuse current blank chat
    const s=newSessionObj(); sessions.unshift(s); activeId=s.id; history=s.messages;
    saveSessions(); renderThread(); renderChatList(); closeDrawer(); input.focus();
  }
  function deleteChat(id){
    const i=sessions.findIndex(s=>s.id===id); if(i<0) return;
    sessions.splice(i,1);
    if(!sessions.length){ const s=newSessionObj(); sessions.push(s); activeId=s.id; }
    if(id===activeId){ activeId=sessions[0].id; history=activeSession().messages; renderThread(); }
    saveSessions(); renderChatList();
  }

  /* ---------- ask flow ---------- */
  let busy = false;
  async function ask(q){
    if(busy) return; busy = true; sendBtn.disabled = true;
    welcome.style.display='none';
    clearBtn.hidden = false;
    addUser(q);

    // Retrieval: for follow-ups, reuse the previous question's topic so the context
    // stays on the same thread instead of being hijacked by a stray keyword match.
    let hits = retrieve(q);
    const prevUserQ = [...history].reverse().find(m=>m.role==='user');
    const qt = q.trim();
    const wc = qt.split(/\s+/).length;
    const FOLLOWUP_RE = /^(what about|how about|and\b|also\b|what if|in\b|the\b|that\b|it\b|its\b|dose|max|maximum|side[- ]?effect|contraindicat|interaction|monitor|pregnan|breastfeed|child|paediatric|elderly|renal|hepatic|if it fails|alternative|second[- ]?line|why\b|when\b|how long|duration|frequency|titrat|stop|switch)/i;
    const isFollowup = prevUserQ && (wc <= 5 || FOLLOWUP_RE.test(qt));
    if(isFollowup){
      // Anchor on the previous topic. Replacing (not merging) the standalone hits
      // means a stray keyword match (e.g. "dose" → Levothyroxine) can never inject
      // an off-topic note; if nothing matches, hits=[] and the model answers from
      // the conversation thread + NICE/BNF instead.
      hits = retrieve(prevUserQ.content + ' ' + q);
    }
    const typingEl = botTyping();

    // build message list (framing primer + recent conversation + grounded question)
    const msgs = [ {role:'user', content:FRAMING}, {role:'assistant', content:PRIMER_ACK} ];
    history.slice(-8).forEach(m=> msgs.push({role:m.role, content:m.content}) );
    msgs.push({ role:'user', content: buildContext(hits) + '\n\n---\nCLINICIAN QUESTION (a follow-up in the conversation above unless it clearly changes subject): ' + q });

    let answer = '';
    try{
      if(!(window.claude && window.claude.complete)) throw new Error('assistant-unavailable');
      answer = await window.claude.complete({ messages: msgs });
      if(!answer || !answer.trim()) throw new Error('empty');
    }catch(err){
      typingEl.remove();
      const msg = (err && err.message==='assistant-unavailable')
        ? 'The assistant isn\'t available in this preview. Open the page from the live site to ask questions.'
        : 'Sorry — I couldn\'t generate an answer just then. Please try again in a moment.';
      addBot(`<div class="ask-err">${esc(msg)}</div>`);
      busy=false; sendBtn.disabled = !input.value.trim();
      return;
    }

    typingEl.remove();
    addBot(`<div class="ans">${mdToHtml(answer)}</div>${srcHtml(hits, q)}${refHtml(answer, q)}<div class="ans-note">Generated from Reasoning GP notes + NICE-aligned guidance. Always confirm against current NICE CKS / BNF.</div>`);

    history.push({ role:'user', content:q });
    history.push({ role:'assistant', content:answer, q:q, hitSlugs:hits.map(h=>h.slug) });
    save();
    busy=false; sendBtn.disabled = !input.value.trim();
    input.focus();
  }

  /* ---------- suggestions ---------- */
  const SUGGESTIONS = [
    { ic:'🩺', t:'First-line for newly diagnosed hypertension in a 52-year-old?' },
    { ic:'🧠', t:'What are the red flags in a patient presenting with headache?' },
    { ic:'🩸', t:'Man of 67 with unexplained weight loss and iron-deficiency anaemia — what now?' },
    { ic:'💊', t:'Stepwise inhaler management for COPD with frequent exacerbations' },
    { ic:'🌸', t:'How do I manage post-menopausal bleeding in a 58-year-old?' },
    { ic:'🎓', t:'How is the "Relating to others" domain marked in the SCA?' },
  ];
  function buildSuggestions(){
    const grid = $('#suggGrid');
    grid.innerHTML = SUGGESTIONS.map(s=>`<button class="sugg" type="button"><span class="sg-ic">${s.ic}</span><span>${esc(s.t)}</span></button>`).join('');
    grid.querySelectorAll('.sugg').forEach((b,i)=> b.addEventListener('click', ()=>{ ask(SUGGESTIONS[i].t); }) );
  }

  /* ---------- composer ---------- */
  function autosize(){ input.style.height='auto'; input.style.height = Math.min(input.scrollHeight,160)+'px'; }
  input.addEventListener('input', ()=>{ autosize(); sendBtn.disabled = busy || !input.value.trim(); });
  input.addEventListener('keydown', e=>{
    if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); if(input.value.trim() && !busy) submit(); }
  });
  function submit(){
    const q = input.value.trim(); if(!q) return;
    input.value=''; autosize(); sendBtn.disabled=true;
    ask(q);
  }
  form.addEventListener('submit', e=>{ e.preventDefault(); submit(); });

  clearBtn.addEventListener('click', ()=>{
    const s=activeSession(); if(s){ s.messages.length=0; s.title='New chat'; }
    history=activeSession().messages;
    saveSessions(); renderThread(); renderChatList();
    input.focus();
  });

  /* ---------- init ---------- */
  buildSuggestions();
  loadSessions();
  renderThread();
  renderChatList();
  $('#chatsToggle').addEventListener('click', openDrawer);
  $('#cdClose').addEventListener('click', closeDrawer);
  $('#newChatBtn').addEventListener('click', newChat);
  $('#newChatTop').addEventListener('click', newChat);
  chatOverlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e=>{ if(e.key==='Escape' && !chatDrawer.hidden) closeDrawer(); });
  // Prefill from a ?q= deep link (e.g. the homepage search "Ask a question" button).
  try{ var _q=new URLSearchParams(location.search).get('q'); if(_q && _q.trim()){ input.value=_q.trim(); autosize(); sendBtn.disabled=false; } }catch(e){}
  input.focus();
})();
