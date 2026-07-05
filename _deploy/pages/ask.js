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
  async function grounding(q){
    if(!RET) return [];
    try{ return await RET.grounding(q, 4); }
    catch(e){ return RET.searchScored(q, 4).map(x=>x.it); }
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
  function hitsFromSlugs(slugs){ if(!slugs || !RET) return []; return slugs.map(s=>RET.bySlug(s)).filter(Boolean); }

  function clearThreadDOM(){ thread.querySelectorAll('.msg').forEach(m=>m.remove()); }
  function renderThread(){
    clearThreadDOM();
    if(!history.length){ welcome.style.display=''; clearBtn.hidden=true; return; }
    welcome.style.display='none'; clearBtn.hidden=false;
    history.forEach((m,i)=>{
      if(m.role==='user') addUser(m.content);
      else addBot(`<div class="ans">${mdToHtml(m.content)}</div>${srcHtml(hitsFromSlugs(m.hitSlugs), m.q)}${webHtml(m.web)}${refHtml(m.content, m.q||m.content)}<div class="ans-note">Generated from Reasoning GP notes + NICE-aligned guidance. Always confirm against current NICE CKS / BNF.</div>${fbHtml(i, m.fb)}`);
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
    // Grounding notes (hybrid semantic + lexical). Anchored on the thread topic for follow-ups.
    let hits = await grounding(effectiveQ);

    // build message list (framing primer + recent conversation + grounded question)
    const msgs = [ {role:'user', content:FRAMING}, {role:'assistant', content:PRIMER_ACK} ];
    history.slice(-6).forEach(m=> msgs.push({role:m.role, content:m.content}) );
    msgs.push({ role:'user', content: buildContext(hits) + '\n\n---\nCLINICIAN QUESTION (a follow-up in the conversation above unless it clearly changes subject): ' + q });

    let answer = '';
    const canStream = window.claude && typeof window.claude.stream === 'function';
    let streamEl = null, streamAns = null;   // live bubble while streaming
    try{
      if(!(window.claude && (window.claude.stream || window.claude.complete))) throw new Error('assistant-unavailable');
      // First-turn questions carry a cache key: a repeat of a popular question is
      // served instantly from the Worker's vetted answer cache (zero AI cost).
      const cacheKey = history.length ? null : qt.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim().slice(0,300);
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
    history.push({ role:'assistant', content:answer, q:q, hitSlugs:hits.map(h=>h.slug), web:webSrcs });
    const tail = `${srcHtml(hits, q)}${webHtml(webSrcs)}${refHtml(answer, q)}<div class="ans-note">${wasFallback ? '⚠️ Answered by a free backup model (the main AI was unavailable — e.g. credit ran out). No live guidance search was used — check this answer carefully against NICE CKS / BNF. ' : ''}${wasCached ? '⚡ Instant — this exact question was answered before; served from the vetted cache. ' : ''}Generated from Reasoning GP notes + NICE-aligned guidance. Always confirm against current NICE CKS / BNF.</div>${fbHtml(history.length-1)}`;
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
