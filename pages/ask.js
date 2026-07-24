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

  /* ---------- retrieval delegated to RGPRetrieval (assets/ask-retrieval.js) ----------
     A single engine builds & searches the whole ~975-topic library: IDF-weighted
     lexical matching + a large clinical/colloquial synonym & phrase map, blended with
     optional sentence embeddings (semantic search) when the Worker exposes them.
     Falls back to pure lexical everywhere else. See assets/ask-retrieval.js. */
  const RET = window.RGPRetrieval || null;
  const tokens   = RET ? RET.tokens   : (s=>String(s||'').toLowerCase().replace(/[^a-z0-9\s]/g,' ').split(/\s+/).filter(Boolean));
  const GENERIC  = RET ? RET.GENERIC  : new Set();
  const MODIFIER = RET ? RET.MODIFIER : new Set();
  // Sync lexical scoring (used by the "related topics" chips).
  function retrieveScored(q, n){ return RET ? RET.searchScored(q, n||40).map(x=>({ it:x.it, sc:x.sc, tHit:x.titleHit })) : []; }
  // Async grounding: the notes the answer is actually built from (hybrid semantic+lexical
  // when embeddings are ready, else lexical). Degrades gracefully on any error.
  // Returns {items, mode:'semantic'|'lexical'|'none', confident:boolean} — when confident
  // is false the model is ORDERED to verify by live web search instead of trusting notes.
  async function groundingMeta(q, k){
    k = k || 4;
    if(!RET) return { items:[], mode:'none', confident:false };
    try{
      if(RET.groundingMeta) return await RET.groundingMeta(q, k);
      return { items: await RET.grounding(q, k), mode:'lexical', confident:true };
    }
    catch(e){ return { items: RET.searchScored(q, 4).map(x=>x.it), mode:'lexical', confident:false }; }
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

  /* ---------- shared answer core (assets/ask-core.js) ---------- */
  const FRAMING = window.RGPAskCore.FRAMING,
        PRIMER_ACK = window.RGPAskCore.PRIMER_ACK,
        buildContext = window.RGPAskCore.buildContext;

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
    let html='', list=null, evidence=false, dx=false;
    const closeList=()=>{ if(list){ html += '</'+list+'>'; list=null; } };
    // The "What the guidance says" block is the direct, source-quoted answer.
    // Wrap it in a coloured evidence box so it's instantly findable in a busy clinic.
    const isEvidenceHead = t => /^what the guidance says\b/i.test(t.replace(/[:—-]\s*$/,'').trim());
    const closeEvidence=()=>{ if(evidence){ closeList(); html += '</div>'; evidence=false; } };
    // The "Working diagnosis" block is the ranked differential on diagnostic questions.
    const isDxHead = t => /^working diagnosis\b/i.test(t.replace(/[:—-]\s*$/,'').trim());
    const closeDx=()=>{ if(dx){ closeList(); html += '</div>'; dx=false; } };
    lines.forEach(raw=>{
      const line = raw.trim();
      if(!line){ closeList(); return; }
      let m;
      if((m=line.match(/^#{2,4}\s+(.*)/))){
        closeList();
        const label = m[1].replace(/\*\*/g,'');
        if(isEvidenceHead(label)){
          closeEvidence(); closeDx();
          html += '<div class="ans-evidence"><div class="ans-evidence-h"><span class="ans-evidence-ic" aria-hidden="true">📋</span>'+inline(m[1])+'</div>';
          evidence = true;
          return;
        }
        if(isDxHead(label)){
          closeEvidence(); closeDx();
          html += '<div class="ans-dx"><div class="ans-dx-h"><span class="ans-dx-ic" aria-hidden="true">🧭</span>'+inline(m[1])+'</div>';
          dx = true;
          return;
        }
        closeEvidence(); closeDx(); // any other heading ends the boxed section
        const lvl = line.startsWith('####')?'h4':line.startsWith('###')?'h4':'h3';
        html += `<${lvl}>${inline(m[1])}</${lvl}>`;
        return;
      }
      if((m=line.match(/^>\s?(.*)/))){ closeList(); html += `<blockquote>${inline(m[1])}</blockquote>`; return; }
      if((m=line.match(/^[-*•]\s+(.*)/))){ if(list!=='ul'){ closeList(); html+='<ul>'; list='ul'; } html += `<li>${inline(m[1])}</li>`; return; }
      if((m=line.match(/^\d+[.)]\s+(.*)/))){ if(list!=='ol'){ closeList(); html+='<ol>'; list='ol'; } html += `<li>${inline(m[1])}</li>`; return; }
      closeList();
      if((dx || evidence) && /^(\*\*guidelines used|_educational)/i.test(line)){ closeEvidence(); closeDx(); }
      html += `<p>${inline(line)}</p>`;
    });
    closeList();
    closeEvidence();
    closeDx();
    return html;
  }

  /* ---------- render messages ---------- */
  // confident=false → the library match was weak, so DON'T show the topic chips
  // (they'd be unrelated topics — the exact noise the user flagged). Tool chips
  // are only added when they genuinely match the question, so they can stay.
  function srcHtml(hits, q, confident){
    const seenT = new Set();
    const artChips = (confident === false ? [] : (hits||[]))
      .filter(it=>{ const k=((it.a&&it.a.title)||'').toLowerCase().replace(/[^a-z0-9]+/g,''); if(!k||seenT.has(k)) return false; seenT.add(k); return true; })
      .map(it=>{
        const a = it.a;
        return `<a class="src-chip" href="${esc(it.href)}"><span class="sc-ic">${a.icon||'📄'}</span><span>${esc(a.title)}</span></a>`;
      });
    const tChips = toolChips(q||'').map(t=>`<a class="src-chip" href="${esc(t.href)}"><span class="sc-ic">${t.ic}</span><span>${esc(t.label)}</span></a>`);
    const all = artChips.concat(tChips);
    if(!all.length) return '';
    const label = (confident === false && artChips.length === 0 && tChips.length)
      ? 'Related tools' : 'From the Reasoning GP library';
    return `<div class="ans-src"><div class="ans-src-l">${label}</div><div class="src-chips">${all.join('')}</div></div>`;
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

  /* Live web pages the answer actually cited (trusted-domain search via the Worker). */
  function webHtml(srcs){
    if(!srcs || !srcs.length) return '';
    const chips = srcs.slice(0,6).map(s=>{
      let host=''; try{ host=new URL(s.url).hostname.replace(/^www\./,''); }catch(e){}
      const label = String(s.title||host||s.url).slice(0,70);
      return `<a class="src-chip ext" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer"><span class="sc-ic">🌐</span><span>${esc(label)}</span><span class="ext-ar" aria-hidden="true">↗</span></a>`;
    });
    return `<div class="ans-src ans-ext"><div class="ans-src-l">Live sources · checked on the web just now</div><div class="src-chips">${chips.join('')}</div></div>`;
  }

  /* ---------- answer feedback (the quality flywheel) ----------
     👍/👎 on every answer → POST /api/feedback on the Worker. The owner reviews
     them in tools/ask-quality.html and fixes the library note behind any 👎. */
  function fbHtml(idx, state){
    if(state) return `<div class="fb-row done">✓ Feedback noted — thank you</div>`;
    return `<div class="fb-row" data-fb-idx="${idx}"><span class="fb-l">Was this answer right &amp; useful?</span><button type="button" class="fb-btn" data-v="up" title="Good answer">👍</button><button type="button" class="fb-btn" data-v="down" title="Something wrong or missing">👎</button></div>`;
  }
  async function sendFeedback(payload){
    try{
      const cfg = window.RGP_CONFIG || {};
      if(!cfg.workerUrl) return; // preview / backend not connected — nothing to send to
      let token=null; try{ token = localStorage.getItem('rgp.auth.token.v1'); }catch(e){}
      await fetch(cfg.workerUrl.replace(/\/$/,'') + '/api/feedback', {
        method:'POST',
        headers: Object.assign({'Content-Type':'application/json'}, token?{'Authorization':'Bearer '+token}:{}),
        body: JSON.stringify(payload)
      });
    }catch(e){ /* feedback must never break the page */ }
  }
  thread.addEventListener('click', (e)=>{
    const btn = e.target.closest('.fb-btn'); if(!btn) return;
    const row = btn.closest('.fb-row'); if(!row) return;
    const idx = +row.getAttribute('data-fb-idx');
    const m = history[idx]; if(!m) return;
    if(btn.getAttribute('data-v')==='up'){
      m.fb='up'; save();
      sendFeedback({ verdict:'up', q:m.q||'', answer:String(m.content||'').slice(0,4000) });
      row.outerHTML = fbHtml(idx,'up');
      return;
    }
    // 👎 → ask what was wrong before sending (optional free text)
    row.innerHTML = `<span class="fb-l">What was wrong or missing?</span><input type="text" class="fb-in" placeholder="e.g. dose out of date, missed the 2WW criterion (optional)"><button type="button" class="fb-send">Send</button>`;
    const inp = row.querySelector('.fb-in'); inp.focus();
    const send = ()=>{
      m.fb='down'; save();
      sendFeedback({ verdict:'down', q:m.q||'', answer:String(m.content||'').slice(0,4000), comment: inp.value.trim() });
      row.outerHTML = fbHtml(idx,'down');
    };
    row.querySelector('.fb-send').addEventListener('click', send);
    inp.addEventListener('keydown', ev=>{ if(ev.key==='Enter'){ ev.preventDefault(); send(); } });
  });

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
  const SESS_KEY = 'rgp.ask.sessions.v1';   // canonical key (synced per-account by RGPSync)
  const OLD_KEY  = 'rgp.ask.thread.v1';
  let sessions = [];
  let activeId = null;
  let history  = [];   // alias to the active session's .messages array

  // Chat history is private to the signed-in account. localStorage is shared by the
  // whole browser, so we namespace each account's chats under their own key and stamp
  // the store with an `owner`. Guests never write the canonical key, so signed-out
  // chats can't leak into — or sync up as — the next person who signs in on the same device.
  function askIdentity(){
    try{ const u=window.RGPAuth&&RGPAuth.current(); const id=u&&(u.email||u.id);
      return id ? 'u:'+String(id).toLowerCase() : 'guest'; }catch(e){ return 'guest'; }
  }
  function nsKey(id){ return SESS_KEY+'::'+id; }
  let curIdent = askIdentity();
  // Guests (signed-out) get EPHEMERAL history: kept in sessionStorage (per-tab, cleared
  // when the tab closes) and never written to shared localStorage — so on a shared or
  // clinic browser one visitor's questions can't be seen by the next person. Signed-in
  // accounts persist privately in localStorage (and sync across devices via RGPSync).
  function storeFor(id){ try{ return id==='guest' ? window.sessionStorage : window.localStorage; }catch(e){ return window.localStorage; } }

  function uid(){ return 's'+Date.now().toString(36)+Math.random().toString(36).slice(2,6); }
  function newSessionObj(){ return { id:uid(), title:'New chat', created:Date.now(), updated:Date.now(), messages:[] }; }
  function activeSession(){ return sessions.find(s=>s.id===activeId); }
  function deriveTitle(msgs){
    const u = (msgs||[]).find(m=>m.role==='user');
    if(!u) return 'New chat';
    const t = String(u.content).replace(/\s+/g,' ').trim();
    return t.length>46 ? t.slice(0,46).trim()+'\u2026' : t;
  }
  function saveSessions(){
    const payload = JSON.stringify({sessions, activeId, owner:curIdent});
    try{ storeFor(curIdent).setItem(nsKey(curIdent), payload); }catch(e){}
    // Signed-in: mirror to the canonical key so RGPSync pushes the right person's chats.
    // Guest: leave NOTHING in localStorage — clear the canonical key and any legacy
    // guest store so signed-out chats can't leak to the next user of this browser.
    try{
      if(curIdent!=='guest'){ localStorage.setItem(SESS_KEY, payload); }
      else { localStorage.removeItem(SESS_KEY); localStorage.removeItem(nsKey('guest')); }
    }catch(e){}
  }
  function save(){ const s=activeSession(); if(s){ s.updated=Date.now(); if(!s.title || s.title==='New chat') s.title=deriveTitle(s.messages); } saveSessions(); renderChatList(); }

  function readStore(key, st){
    try{ const r=JSON.parse((st||localStorage).getItem(key)||'null'); if(r && Array.isArray(r.sessions)) return r; }catch(e){}
    return null;
  }
  function loadSessions(){
    curIdent = askIdentity();
    // Purge any legacy guest chats left in shared localStorage by an older build.
    if(curIdent==='guest'){ try{ localStorage.removeItem(nsKey('guest')); localStorage.removeItem(SESS_KEY); }catch(e){} }
    // Prefer this identity's own namespaced store (guest = sessionStorage, account =
    // localStorage). For a signed-in account, the canonical key may hold cloud-merged
    // data (via RGPSync) — accept it only if it's unowned (legacy) or owned by THIS
    // account, never another user's.
    let r = readStore(nsKey(curIdent), storeFor(curIdent));
    if(!r && curIdent!=='guest'){ const c=readStore(SESS_KEY, localStorage); if(c && (!c.owner || c.owner===curIdent)) r=c; }
    if(r){ sessions=r.sessions||[]; activeId=r.activeId; } else { sessions=[]; activeId=null; }
    if(!sessions.length){
      // migrate the old single-thread store once, then remove it so it can't re-leak.
      // Guests never adopt it (it could be a previous person's chat) — just clear it.
      let old=[]; try{ old=JSON.parse(localStorage.getItem(OLD_KEY)||'[]')||[]; }catch(e){}
      try{ localStorage.removeItem(OLD_KEY); }catch(e){}
      const s=newSessionObj();
      if(old.length && curIdent!=='guest'){ s.messages=old; s.title=deriveTitle(old); }
      sessions=[s]; activeId=s.id; saveSessions();
    }
    if(!activeId || !activeSession()) activeId=sessions[0].id;
    history = activeSession().messages;
  }
  // When the signed-in account changes (sign in/out, or in another tab), archive the
  // current chats under their owner and load the new account's own history.
  function syncIdentity(){
    if(askIdentity()===curIdent) return false;
    saveSessions();          // stamp + archive the outgoing identity's chats
    loadSessions();          // curIdent is refreshed inside
    saveSessions();          // stamp canonical for the incoming identity
    renderThread(); renderChatList();
    return true;
  }
  function hitsFromSlugs(slugs){ if(!slugs || !RET) return []; return slugs.map(s=>RET.bySlug(s)).filter(Boolean); }

  function clearThreadDOM(){ thread.querySelectorAll('.msg').forEach(m=>m.remove()); }
  function renderThread(){
    clearThreadDOM();
    if(!history.length){ welcome.style.display=''; clearBtn.hidden=true; return; }
    welcome.style.display='none'; clearBtn.hidden=false;
    history.forEach((m,i)=>{
      if(m.role==='user') addUser(m.content);
      else addBot(`<div class="ans">${mdToHtml(m.content)}</div>${srcHtml(hitsFromSlugs(m.hitSlugs), m.q, m.conf)}${webHtml(m.web)}${refHtml(m.content, m.q||m.content)}<div class="ans-note">Generated from Reasoning GP notes + NICE-aligned guidance. Always confirm against current NICE CKS / BNF.</div>${fbHtml(i, m.fb)}`);
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

    // Retrieval: for follow-ups, anchor on the previous question's topic so the context
    // stays on-thread instead of being hijacked by a stray keyword match.
    const prevUserQ = [...history].reverse().find(m=>m.role==='user');
    const qt = q.trim();
    const wc = qt.split(/\s+/).length;
    const FOLLOWUP_RE = /^(what about|how about|and\b|also\b|what if|in\b|the\b|that\b|it\b|its\b|dose|max|maximum|side[- ]?effect|contraindicat|interaction|monitor|pregnan|breastfeed|child|paediatric|elderly|renal|hepatic|if it fails|alternative|second[- ]?line|why\b|when\b|how long|duration|frequency|titrat|stop|switch)/i;
    const isFollowup = prevUserQ && (wc <= 5 || FOLLOWUP_RE.test(qt));
    const effectiveQ = isFollowup ? (prevUserQ.content + ' ' + q) : q;
    const typingEl = botTyping();
    // Query-type: diagnostic questions get WIDER retrieval (each extra note is a
    // candidate diagnosis for the ranked differential) + an explicit dx-mode order.
    const qType = (window.RGPAskCore && window.RGPAskCore.classify) ? window.RGPAskCore.classify(effectiveQ) : 'general';
    // Grounding notes (hybrid semantic + lexical). Anchored on the thread topic for follow-ups.
    const gMeta = await groundingMeta(effectiveQ, qType==='dx' ? 7 : 4);
    let hits = gMeta.items;

    // Retrieval-confidence gate: when the library match is WEAK, the single biggest
    // failure mode is the model leaning on mismatched notes or on its own memory.
    // Tell it so explicitly and make a live guidance search mandatory.
    const weakNote = gMeta.confident ? '' :
      '\n\nRETRIEVAL WARNING — LOW-CONFIDENCE LIBRARY MATCH: the notes above were retrieved with low confidence and may not cover this question. Do NOT force an answer from them if they do not clearly match, and do NOT answer from memory. You MUST verify the key recommendation with a live web search of current UK guidance (NICE/CKS/BNF/GOV.UK/CoSRH) before answering; if you cannot verify a specific figure or category, say plainly which named current source the clinician should check and give only the safe general position.';

    // Diagnostic mode: restate the ranked-differential order at question time so it
    // cannot be lost in a long primer; note the widened notes are candidate diagnoses.
    const dxNote = qType!=='dx' ? '' :
      '\n\nDIAGNOSTIC MODE: this reads as an undifferentiated / diagnostic question. Answer with the ranked "## Working diagnosis" differential shape — **Most likely** (one named front-runner with likelihood wording), **Also possible** (ranked, each with its discriminating feature), **Must not miss** (each with the excluding action, [[2WW]] where NG12 applies), **To narrow it down**, **Safety-net** — never a single over-confident diagnosis and never an unranked list. The library notes above are candidate diagnoses for the differential — use only those that genuinely fit this presentation.';

    // build message list (framing primer + recent conversation + grounded question)
    const msgs = [ {role:'user', content:FRAMING}, {role:'assistant', content:PRIMER_ACK} ];
    history.slice(-6).forEach(m=> msgs.push({role:m.role, content:m.content}) );
    msgs.push({ role:'user', content: buildContext(hits) + weakNote + dxNote + '\n\n---\nCLINICIAN QUESTION (a follow-up in the conversation above unless it clearly changes subject): ' + q });

    let answer = '';
    const canStream = window.claude && typeof window.claude.stream === 'function';
    let streamEl = null, streamAns = null;   // live bubble while streaming
    try{
      if(!(window.claude && (window.claude.stream || window.claude.complete))) throw new Error('assistant-unavailable');
      // First-turn questions carry a cache key: a repeat of a popular question is
      // served instantly from the Worker's vetted answer cache (zero AI cost).
      // Normalised hard (filler words stripped, light stemming) so trivial wording
      // differences ("who gave birth" vs "who give birth") hit the SAME vetted answer.
      const STOP = new Set(['a','an','the','is','are','am','be','been','being','was','were','i','me','my','we','our','you','your','it','its','that','this','these','those','who','whom','which','what','whats','how','can','could','do','does','did','doing','have','has','had','having','would','should','shall','may','might','will','please','just','so','and','or','of','to','in','on','at','for','with','about','ago']);
      const IRREG = { gave:'give', given:'give', took:'take', taken:'take', went:'go', gone:'go' };
      const normKey = s => s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim().split(/\s+/)
        .map(w => IRREG[w] || w)
        .filter(w => !STOP.has(w))
        .map(w => w.length > 4 ? w.replace(/(ing|ed|es|s)$/,'') : w)
        .join(' ').slice(0,300);
      const cacheKey = history.length ? null : normKey(qt);
      const arg = Object.assign({ messages: msgs }, cacheKey ? { cacheKey } : {});
      if(canStream){
        answer = await window.claude.stream(arg, (chunk, full)=>{
          if(!streamEl){
            typingEl.remove();
            streamEl = addBot('<div class="ans"></div>');
            streamAns = streamEl.querySelector('.ans');
          }
          streamAns.innerHTML = mdToHtml(full);
          thread.scrollTop = thread.scrollHeight;
        });
      } else {
        answer = await window.claude.complete(arg);
      }
      if(!answer || !answer.trim()) throw new Error('empty');
    }catch(err){
      typingEl.remove();
      if(streamEl) streamEl.remove();
      let msg;
      if(err && err.code===401){
        msg = 'Please sign in (a free account is fine) to use the assistant — then ask again.';
      } else if(err && err.code===402){
        msg = 'The assistant is available on a paid plan — sign in and subscribe to ask questions.';
      } else if(err && err.message==='assistant-unavailable'){
        msg = 'The AI assistant isn\'t connected on this site yet. If you\'re the site owner, deploy the backend Worker and paste its URL into RGP_CONFIG.workerUrl in assets/site.js (see backend/README.md). Otherwise please check back soon.';
      } else if(err && /^ai_error_/.test(err.message||'')){
        msg = 'The AI service is temporarily unavailable. To protect answer quality, no backup model is used for clinical questions — please try again shortly, and check NICE CKS / BNF directly if it\u2019s urgent.';
      } else {
        msg = 'Sorry — I couldn\'t generate an answer just then. Please try again in a moment.';
      }
      addBot(`<div class="ask-err">${esc(msg)}</div>`);
      busy=false; sendBtn.disabled = !input.value.trim();
      return;
    }

    typingEl.remove();
    const webSrcs = (window.claude && Array.isArray(window.claude.lastSources)) ? window.claude.lastSources : [];
    const wasCached = !!(window.claude && window.claude.lastCached);
    const wasFallback = !!(window.claude && window.claude.lastFallback);
    history.push({ role:'user', content:q });
    // Topic chips: show ONLY library topics whose title matched a discriminating term
    // (relevantSlugs). Independent of the coarse confidence flag, this stops semantic
    // near-neighbours / stray common-word hits from listing unrelated topics — the exact
    // "irrelevant website topics" the user flagged. Grounding above already used full hits.
    const relSet = (RET && RET.relevantSlugs) ? RET.relevantSlugs(effectiveQ) : null;
    const chipHits = relSet ? hits.filter(h=>relSet.has(h.slug)) : hits;
    history.push({ role:'assistant', content:answer, q:q, hitSlugs:chipHits.map(h=>h.slug), web:webSrcs, conf:gMeta.confident });
    const retChip = gMeta.mode==='semantic'
      ? '🧠 Library matched by meaning. '
      : (gMeta.mode==='lexical' ? '🔤 Library matched by keywords (semantic layer warming up or offline). ' : '');
    const weakChip = gMeta.confident ? '' : '📡 Weak library match — the assistant was instructed to verify against a live guideline search. ';
    const tail = `${srcHtml(chipHits, q, gMeta.confident)}${webHtml(webSrcs)}${refHtml(answer, q)}<div class="ans-note">${wasFallback ? '⚠️ Answered by a free backup model (the main AI was unavailable — e.g. credit ran out). No live guidance search was used — check this answer carefully against NICE CKS / BNF. ' : ''}${wasCached ? '⚡ Instant — this exact question was answered before; served from the vetted cache. ' : ''}${retChip}${weakChip}Generated from Reasoning GP notes + NICE-aligned guidance. Always confirm against current NICE CKS / BNF.</div>${fbHtml(history.length-1)}`;
    if(streamEl){
      // finalise the streamed bubble: lock in the markdown + append sources/feedback
      streamAns.innerHTML = mdToHtml(answer);
      streamAns.insertAdjacentHTML('afterend', tail);
    } else {
      addBot(`<div class="ans">${mdToHtml(answer)}</div>${tail}`);
    }
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
  // The signed-in account can resolve AFTER this script runs (auth is async), and a
  // user may sign in/out or switch account without reloading the page. syncIdentity()
  // reloads the right person's chats whenever the identity changes — without it, chats
  // get written under a stale/guest identity and leak to everyone on the device.
  setInterval(syncIdentity, 1500);
  window.addEventListener('focus', syncIdentity);
  document.addEventListener('visibilitychange', ()=>{ if(!document.hidden) syncIdentity(); });
  window.addEventListener('storage', e=>{ if(e.key==='rgp.auth.me.v1' || e.key==='rgp.auth.token.v1') syncIdentity(); });
  // Cross-device sync: RGPSync merges rgp.ask.sessions.v1 from the account —
  // when it lands, reload from localStorage and re-render (keep the chat the
  // user is looking at if it survived the merge).
  window.addEventListener('rgp-sync-updated', e=>{
    const keys=(e && e.detail && e.detail.keys)||[];
    if(!keys.includes(SESS_KEY)) return;
    if(syncIdentity()) return;   // identity changed — that reload already applied the right data
    const prev=activeId;
    try{
      const r=JSON.parse(localStorage.getItem(SESS_KEY)||'null');
      // Only adopt the canonical store if it belongs to the account now signed in.
      if(r && (!r.owner || r.owner===curIdent) && Array.isArray(r.sessions) && r.sessions.length){
        sessions=r.sessions;
        activeId = sessions.some(s=>s.id===prev) ? prev
                 : (r.activeId && sessions.some(s=>s.id===r.activeId)) ? r.activeId
                 : sessions[0].id;
        history=activeSession().messages;
      }
    }catch(err){}
    renderThread(); renderChatList();
  });
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
