/* ============================================================
   Reasoning GP — SCA Practice tool controller
   Handles: case picker, 12-min timer, script rendering,
   scorecard, recording (audio+video), AI feedback hook.
   ============================================================ */

(function(){
  'use strict';
  const CASES = window.SCA_CASES || [];
  // Merge per-case extras (record-format stem, time map, word pictures, CEG tags, avoid-phrases)
  (function(){ const EX = window.SCA_EXTRAS || {}; CASES.forEach(c => { if (EX[c.id]) Object.assign(c, EX[c.id]); }); })();
  const $ = (q, r=document) => r.querySelector(q);
  const $$ = (q, r=document) => [...r.querySelectorAll(q)];

  const state = {
    case: null,
    timerSec: 12 * 60,
    timerRunning: false,
    timerInterval: null,
    scores: { tasks:null, rto:null, gs:null },
    checkpoints: {},
    mediaStream: null,
    recorder: null,
    recChunks: [],
    recordings: [],
    notesA: '',
    notesB: '',
    keepText: '',
    improveText: '',
    transcript: '',
    chatMessages: [],   // [{role:'doctor'|'patient'|'system', text:''}]
    chatBusy: false,
    chatMic: null,
    voiceOn: true,
    liveOn: false,
    liveRec: null,
    cueChecks: {},
    timeChecks: {},
  };

  const DOM_META = {
    tasks:{ic:'🎯', title:'Tasks', sub:'Data gathering, diagnosis & management'},
    rto:  {ic:'🤝', title:'Relating to others', sub:'ICE, rapport, shared decisions'},
    gs:   {ic:'🌐', title:'Global skills', sub:'Structure, language, safety, time'}
  };
  function domMeta(d){ return DOM_META[d] || {ic:'•',title:d,sub:''}; }

  /* ---------- Case picker ---------- */
  // Specialty = one canonical RCGP clinical topic (official list), classified from the
  // case's clinical system + title so the dropdown stays short and meaningful.
  var SPEC_RULES = [
    ['Allergy and immunology', /allerg|anaphylax|urticaria|angio-?oedema|latex/i],
    ['Smoking, alcohol and Substance Misuse', /smoking|cessation|alcohol|substance|cannabis|\bdrug (misuse|abuse|use)\b|addiction|gambling|diazepam|opioid misuse/i],
    ['Neurodevelopmental disorders, intellectual and social disability', /neurodevelop|autis|\bADHD\b|attention deficit|\btics\b|tourette|learning disab|intellectual disab/i],
    ['Mental Health', /mental health|depress|anxiety|panic|psychos|schizo|\bOCD\b|obsessive|\bPTSD\b|post-traumatic|bipolar|eating disorder|anorexia|bulimia|personality disorder|bereav|insomnia|self-harm|suicid/i],
    ['Sexual Health', /sexual health|\bSTI\b|chlamydia|gonorrh|genital herpes|contracept|premature ejacul|erectile|\bPID\b|gender (identity|dysphoria|health)/i],
    ['Infectious Disease and Travel Health', /infectious|infection|dengue|malaria|\blyme\b|glandular|mononucle|\bHIV\b|hepatitis|tuberculos|\bTB\b|covid|travel|threadworm|needlestick/i],
    ['Genomic Medicine', /genomic|genetic|familial adenomatous|\bFAP\b|cystic fibrosis|huntington|polycystic kidney/i],
    ['Eyes and Vision', /ophthalm|eyes|vision|glaucoma|retinal|macular|uveitis|squint|leukocoria|dry eye/i],
    ['Ear, Nose and Throat, Speech and Hearing', /\bENT\b|ear\b|nose|throat|hearing|tinnitus|epistaxis|otitis|laryng|sinus|eustachian|halitosis|speech|tonsil/i],
    ['Neurology', /neurolog|migraine|headache|seizure|epilep|\bstroke\b|\bTIA\b|dementia|parkinson|neuropath|trigeminal|sclerosis|myasthenia|motor neurone|narcolepsy|tremor|restless leg|diplopia|\bPoTS\b|postherpetic|hydroceph|wilson/i],
    ['Respiratory Health', /respirat|asthma|\bCOPD\b|pneumonia|breathless|\blung\b|\bcough\b|sleep apnoea|\bOSA\b|pulmonary|rhinitis/i],
    ['Cardiovascular Health', /cardiovascular|cardiac|cardiolog|hypertens|\bheart\b|angina|atrial fibrill|\bAF\b|palpitat|phaeochrom|aortic|\bDVT\b|peripheral arter/i],
    ['Gynaecology and Breast', /gynae|breast|menstr|menopaus|\bPMDD\b|\bPMB\b|fibroid|ovarian|\bHRT\b|cervical|menorrhag|pregnan|obstetric|hyperemesis|antenatal/i],
    ['Haematology', /haematolog|leukaem|lymphoma|myeloma|anaemia|\bCLL\b|thrombocyt|\bB12\b|platelet|\bINR\b|sickle/i],
    ['Kidney and Urology', /renal|kidney|urolog|prostat|\bLUTS\b|incontinence|bladder|\bUTI\b|\bAKI\b|haematospermia|testic|scrotal|undescended|phimosis|balanitis|peyronie|pilonidal/i],
    ['Metabolic Problems and Endocrinology', /endocrin|metabolic|diabet|thyroid|addison|cushing|aldosteron|insulin|polyphagia|obesity|osteoporos|precocious pubert|testosterone|weight management/i],
    ['Musculoskeletal Health', /musculoskeletal|\bMSK\b|\bjoint\b|arthrit|tendin|tendon|epicondyl|plantar|fasciit|carpal|meniscal|shoulder|back pain|sciatica|hypermobility|ehlers|quervain|costochond|fragility fracture|rheumat|\bgout\b/i],
    ['Dermatology', /dermat|\bskin\b|eczema|psoriasis|\bacne\b|lichen|pityriasis|molluscum|tinea|hyperhidrosis|keloid|melanoma|\bBCC\b|\bSCC\b|hidraden|scabies|alopecia|hair loss|head lice|shingles|herpes zoster/i],
    ['Gastroenterology', /gastro|\bGI\b|bowel|colon|rectal|\banal\b|haemorrhoid|fissure|reflux|dyspepsia|\bIBD\b|crohn|colitis|coeliac|diverticul|constipat|liver|hepatob|pancrea|abdominal|\bcolic\b|GORD/i],
    ['Urgent and Unscheduled Care', /urgent|unscheduled|emergenc|\bSJS\b|toxic epidermal|kawasaki|carbon monoxide|poisoning|\bDKA\b|collapse|sepsis/i]
  ];
  function specOf(c){
    var hay = ((c.meta && c.meta.system) || '') + ' ' + (c.title || '');
    for (var i = 0; i < SPEC_RULES.length; i++){ if (SPEC_RULES[i][1].test(hay)) return SPEC_RULES[i][0]; }
    return 'Other / General practice';
  }
  // Family = the home-page library grouping this case belongs to (via its live id).
  var LIBFAM = (function(){
    var m = {};
    (window.SCA_LIBRARY || []).forEach(function(fam){
      (fam.v || []).forEach(function(it){ if (it.live) m[it.live] = fam.f; });
    });
    return m;
  })();
  function famOf(c){ return LIBFAM[c.id] || 'Other'; }

  function renderCaseGrid(){
    const grid = $('#caseGrid');
    grid.innerHTML = CASES.map(c => {
      const typeLbl = ({video:'Video',telephone:'Telephone',f2f:'Face-to-face',home:'Home visit',data:'Data interp.'})[c.type] || c.type;
      const spec = specOf(c), fam = famOf(c);
      return `
      <button class="case-tile" data-id="${c.id}" data-ceg="${(c.ceg||[]).map(escapeHtml).join('|')}" data-spec="${escapeHtml(spec)}" data-fam="${escapeHtml(fam)}">
        <span class="ct-type" data-type="${c.type}">${typeLbl}</span>
        <h3>${escapeHtml(c.title)}</h3>
        <div class="ct-meta">${c.meta.age}y · ${escapeHtml(c.meta.sex)} · ${escapeHtml(c.meta.system||'')}</div>
        <div class="ct-setting">${escapeHtml(c.meta.setting||'')}</div>
        ${(c.ceg && c.ceg.length) ? `<div class="ct-cegs">${c.ceg.map(g => `<span class="ct-ceg">${escapeHtml(g)}</span>`).join('')}</div>` : ''}
        <div class="ct-cta">Open this case →</div>
      </button>`;
    }).join('');
    grid.querySelectorAll('.case-tile').forEach(t => {
      t.addEventListener('click', () => startCase(t.dataset.id));
    });
    buildCaseFilters(grid);
    buildCaseRail(grid);
  }

  // Specialty + Family filter bar (mirrors the home-page grouping).
  function buildCaseFilters(grid){
    const tiles = Array.prototype.slice.call(grid.querySelectorAll('.case-tile'));
    const specs = Array.from(new Set(tiles.map(t => t.dataset.spec))).sort(function(a,b){ return a.localeCompare(b); });
    const fams  = Array.from(new Set(tiles.map(t => t.dataset.fam))).sort(function(a,b){ return a.localeCompare(b); });

    let bar = document.getElementById('caseFilters');
    if (!bar){
      bar = document.createElement('div');
      bar.id = 'caseFilters';
      bar.className = 'case-filters';
      bar.innerHTML =
        '<div class="cf-group"><label for="cfSpec">Specialty</label><select id="cfSpec"></select></div>' +
        '<div class="cf-group"><label for="cfFam">Family</label><select id="cfFam"></select></div>' +
        '<span class="cf-count" id="cfCount"></span>' +
        '<button type="button" class="cf-reset" id="cfReset">Reset</button>';
      grid.parentNode.insertBefore(bar, grid);
      bar.querySelector('#cfSpec').addEventListener('change', applyCaseFilters);
      bar.querySelector('#cfFam').addEventListener('change', applyCaseFilters);
      bar.querySelector('#cfReset').addEventListener('click', function(){
        bar.querySelector('#cfSpec').value = '';
        bar.querySelector('#cfFam').value = '';
        applyCaseFilters();
      });
    }
    const specSel = bar.querySelector('#cfSpec'), famSel = bar.querySelector('#cfFam');
    const curS = specSel.value, curF = famSel.value;
    specSel.innerHTML = '<option value="">All specialties (' + tiles.length + ')</option>' +
      specs.map(function(s){ return '<option value="' + escapeHtml(s) + '">' + escapeHtml(s) + ' (' + tiles.filter(function(t){ return t.dataset.spec === s; }).length + ')</option>'; }).join('');
    famSel.innerHTML = '<option value="">All families (' + tiles.length + ')</option>' +
      fams.map(function(f){ return '<option value="' + escapeHtml(f) + '">' + escapeHtml(f) + ' (' + tiles.filter(function(t){ return t.dataset.fam === f; }).length + ')</option>'; }).join('');
    specSel.value = curS; famSel.value = curF;
    applyCaseFilters();
  }

  function applyCaseFilters(){
    const grid = $('#caseGrid'); if (!grid) return;
    const bar = document.getElementById('caseFilters'); if (!bar) return;
    const s = bar.querySelector('#cfSpec').value, f = bar.querySelector('#cfFam').value;
    let n = 0;
    Array.prototype.slice.call(grid.querySelectorAll('.case-tile')).forEach(function(t){
      const ok = (!s || t.dataset.spec === s) && (!f || t.dataset.fam === f);
      t.style.display = ok ? '' : 'none';
      if (ok) n++;
    });
    const cnt = bar.querySelector('#cfCount');
    if (cnt) cnt.textContent = n + ' case' + (n === 1 ? '' : 's') + ((s || f) ? ' shown' : '');
  }

  /* Left consultation-type filter rail (GPatlas-style, like Pathways) */
  function buildCaseRail(grid){
    const section = grid.closest('#landing') || grid.parentNode;
    if (!section || section.querySelector('.dir-layout')) return;

    const TYPES = [
      ['video','Video'], ['telephone','Telephone (audio-only)']
    ];
    const counts = {};
    CASES.forEach(c => { counts[c.type] = (counts[c.type]||0) + 1; });
    const present = TYPES.filter(t => counts[t[0]]);

    // RCGP clinical experience groups present across the bank
    const cegCounts = {};
    CASES.forEach(c => (c.ceg||[]).forEach(g => { cegCounts[g] = (cegCounts[g]||0) + 1; }));
    const cegList = Object.keys(cegCounts).sort();

    const layout = document.createElement('div'); layout.className = 'dir-layout';
    const rail = document.createElement('aside'); rail.className = 'dir-rail';
    const main = document.createElement('div'); main.className = 'dir-main';
    layout.append(rail, main);
    grid.parentNode.insertBefore(layout, grid);
    main.appendChild(grid);

    rail.innerHTML =
      '<div class="dir-rail-top"><span class="dir-rail-title">Filter</span>' +
        '<span class="dir-rail-actions"><button type="button" class="dir-reset" hidden>Reset all</button>' +
        '<button type="button" class="dir-rail-min" title="Hide filters" aria-label="Hide filters"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button></span>' +
      '</div>' +
      '<div class="dir-rail-sec"><div class="dir-rail-h">Consultation type</div><div class="dir-rail-list">' +
        present.map(t => '<label class="dir-check" data-ctype="'+t[0]+'"><input type="checkbox" value="'+t[0]+'">' +
          '<span class="dir-check-box"></span><span class="dir-check-label">'+t[1]+'</span>' +
          '<span class="dir-check-n">'+counts[t[0]]+'</span></label>').join('') +
      '</div></div>' +
      (cegList.length ? '<div class="dir-rail-sec"><div class="dir-rail-h">RCGP experience group</div><div class="dir-rail-list">' +
        cegList.map(g => '<label class="dir-check dir-check-ceg"><input type="checkbox" data-ceg-filter value="'+escapeHtml(g)+'">' +
          '<span class="dir-check-box"></span><span class="dir-check-label">'+escapeHtml(g)+'</span>' +
          '<span class="dir-check-n">'+cegCounts[g]+'</span></label>').join('') +
      '</div></div>' : '');

    const reset  = rail.querySelector('.dir-reset');
    const minBtn = rail.querySelector('.dir-rail-min');
    const tiles  = Array.prototype.slice.call(grid.querySelectorAll('.case-tile'));

    const toggle = document.createElement('button');
    toggle.className = 'dir-filters-toggle';
    toggle.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="10" y1="18" x2="14" y2="18"/></svg>Filters<span class="n" hidden>0</span>';
    main.insertBefore(toggle, grid);

    const RKEY = 'rgp-rail-collapsed';
    const isDesktop = () => window.matchMedia('(min-width:861px)').matches;
    const setCollapsed = v => { layout.classList.toggle('rail-collapsed', v); try { localStorage.setItem(RKEY, v?'1':'0'); } catch(e){} };
    minBtn.addEventListener('click', () => { if (isDesktop()) setCollapsed(true); else rail.classList.remove('open'); });
    toggle.addEventListener('click', () => { if (isDesktop()) setCollapsed(false); else rail.classList.toggle('open'); });
    try { if (localStorage.getItem(RKEY) === '1') setCollapsed(true); } catch(e){}

    function typeOf(tile){ const b = tile.querySelector('.ct-type'); return b ? b.dataset.type : ''; }
    function apply(){
      const selT = new Set(Array.prototype.slice.call(rail.querySelectorAll('.dir-check input:not([data-ceg-filter]):checked')).map(i => i.value));
      const selG = new Set(Array.prototype.slice.call(rail.querySelectorAll('.dir-check input[data-ceg-filter]:checked')).map(i => i.value));
      tiles.forEach(t => {
        const okT = selT.size === 0 || selT.has(typeOf(t));
        const groups = (t.dataset.ceg || '').split('|');
        const okG = selG.size === 0 || groups.some(g => selG.has(g));
        t.style.display = (okT && okG) ? '' : 'none';
      });
      const n = selT.size + selG.size;
      reset.hidden = n === 0;
      const tn = toggle.querySelector('.n');
      tn.hidden = n === 0; tn.textContent = n;
    }
    rail.addEventListener('change', e => { if (e.target.matches('.dir-check input')) apply(); });
    reset.addEventListener('click', () => { rail.querySelectorAll('.dir-check input:checked').forEach(i => i.checked = false); apply(); });
  }

  function startCase(id){
    const c = CASES.find(x => x.id === id);
    if (!c) return;
    state.case = c;
    state.timerSec = (c.duration || 12) * 60;
    state.scores = { tasks:null, rto:null, gs:null };
    state.checkpoints = {};
    state.cueChecks = {};
    state.timeChecks = {};
    state.recordings = [];
    state.notesA = state.notesB = state.keepText = state.improveText = state.transcript = '';
    if (audio.playing) { try { speechSynthesis.cancel(); } catch(e){} }
    audio.playing = false; audio.idx = 0; audio.turns = [];

    renderSession();
    $('#landing').style.display = 'none';
    $('#session').classList.add('is-on');
    window.scrollTo({top:0});
  }

  function exitSession(){
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.timerInterval = null;
    state.timerRunning = false;
    stopLive();
    stopRecording();
    if (audio.playing || audio.idx) stopAudio(false);
    audio.idx = 0; audio.turns = [];
    if (state.mediaStream) {
      state.mediaStream.getTracks().forEach(t => t.stop());
      state.mediaStream = null;
    }
    $('#session').classList.remove('is-on');
    $('#landing').style.display = '';
  }

  /* ---------- Render session ---------- */
  function renderSession(){
    const c = state.case;
    const typeLbl = ({video:'VIDEO',telephone:'TELEPHONE',f2f:'F2F',home:'HOME VISIT',data:'DATA'})[c.type] || c.type.toUpperCase();
    $('#shType').textContent = typeLbl;
    $('#shType').dataset.type = c.type;
    $('#shTitle').textContent = c.title;
    $('#shMeta').textContent = `${c.meta.age}y · ${c.meta.sex} · ${c.meta.system || ''} — ${c.meta.setting || ''}`;
    $('#briefText').innerHTML = renderStem(c);

    // Reset subnav to step 1
    $$('.subnav button').forEach(b => b.classList.toggle('is-on', b.dataset.step === 'brief'));
    $$('.session-step').forEach(s => s.classList.toggle('is-on', s.dataset.step === 'brief'));

    // Script body
    renderScript();
    // Rich per-case scorecard + knowledge
    renderScorecard();
    renderKnowledge();
    renderModelReady();
    $('#reflectKeep').value = '';
    $('#reflectImprove').value = '';
    $('#notesArea').value = '';
    $('#notesArea2').value = '';

    // Timer
    updateTimerDisplay();
    $('#timerStart').style.display = '';
    $('#timerPause').style.display = 'none';
    $('#aiOutput').textContent = '';
    $('#aiStatus').textContent = '';

    // Recording UI
    $('#recList').innerHTML = '';
    $('#recLabel').textContent = 'Start recording';
    $('#recToggle').classList.remove('is-rec');

    // Chat reset
    state.chatMessages = [];
    renderChat();
    setPracticeMode('script');
    $('#chatPatientLabel').textContent = `${c.meta.age}y ${c.meta.sex === 'M' ? 'male' : c.meta.sex === 'F' ? 'female' : c.meta.sex} — ${c.title}`;
    $('#chatStatus').textContent = '';
    $('#examinerOut').textContent = '';

    // Model consultation + voice reset
    stopLive();
    state.voiceOn = true; updateVoiceBtn();
    if ($('#modelOut')) $('#modelOut').innerHTML = '';
    if ($('#modelStatus')) $('#modelStatus').textContent = '';
    if ($('#modelLegend')) $('#modelLegend').style.display = 'none';
  }

  function timeMapHtml(c){
    const tm = c.timeMap;
    if (!tm || !tm.length) return '';
    const COLS = ['#1d4ed8','#0e7490','#7e22ce','#15803d','#b45309'];
    return `
      <details class="tmap">
        <summary class="tmap-hdr"><span class="tmap-ic">⏱️</span><div class="tmap-htxt"><div class="tmap-t">Your 12 minutes — the time map</div><div class="tmap-s">The commonest mechanical fail is running out of road. Pace the station like this. <em>Tap to expand.</em></div></div><span class="tmap-chev" aria-hidden="true">▾</span></summary>
        <div class="tmap-rows">
          ${tm.map((p, i) => `
            <div class="tmap-row" style="--tc:${COLS[i % COLS.length]}">
              <span class="tmap-time">${escapeHtml(p.t)}</span>
              <div class="tmap-body"><div class="tmap-h">${escapeHtml(p.h)}</div><div class="tmap-d">${escapeHtml(p.d)}</div></div>
            </div>`).join('')}
        </div>
        <div class="tmap-warn">⚠ If you have not <b>summarised and begun management by minute 7</b>, the Clinical Management mark is already at risk — close the history and move.</div>
      </details>`;
  }

  function renderStem(c){
    const s = c.stem;
    const typeLbl = ({video:'Video consultation', telephone:'Telephone consultation', f2f:'Face-to-face', home:'Home visit', data:'Results review'})[c.type] || 'Consultation';
    if (!s) {
      return `<div class="stem-card"><div class="stem-hdr"><span class="stem-type">${typeLbl}</span><div class="stem-name">${escapeHtml(c.title)}</div></div><div class="stem-body"><div class="stem-row"><div class="stem-k">Doctor brief</div><div class="stem-v">${escapeHtml(c.brief)}</div></div></div></div>` + timeMapHtml(c);
    }
    const list = (arr) => '<ul class="stem-list">' + arr.map(x => `<li>${escapeHtml(x)}</li>`).join('') + '</ul>';
    const recentCls = (s.recent && s.recent.indexOf('⚠') === 0) ? ' stem-warn' : '';
    return `
      <div class="stem-card">
        <div class="stem-hdr">
          <span class="stem-type">${typeLbl}</span>
          <div class="stem-name">${escapeHtml(s.name)}</div>
          <div class="stem-age">${escapeHtml(s.age)}</div>
        </div>
        <div class="stem-body">
          <div class="stem-row"><div class="stem-k">Past medical history</div><div class="stem-v">${list(s.pmh)}</div></div>
          <div class="stem-row"><div class="stem-k">Drug &amp; allergy history</div><div class="stem-v">${list(s.meds)}<div class="stem-allergy">${escapeHtml(s.allergy)}</div></div></div>
          <div class="stem-row"><div class="stem-k">Recent notes</div><div class="stem-v${recentCls}">${escapeHtml(s.recent)}</div></div>
          <div class="stem-row stem-reason"><div class="stem-k">Reason for consultation</div><div class="stem-v">${escapeHtml(s.reason)}</div></div>
        </div>
        <div class="stem-foot">You have <b>${c.duration || 12} minutes</b>. When ready, press <b>Start</b> on the timer and move to the Consultation.</div>
      </div>` + timeMapHtml(c);
  }

  function renderScript(){
    const c = state.case;
    const s = c.script;
    const body = $('#scriptBody');

    let html = `
      <div class="script-section">
        <h3>Opening line — patient says</h3>
        <div class="script-opening">${escapeHtml(s.opening)}</div>
      </div>`;

    if (c.script.data) {
      const d = c.script.data;
      html += `<div class="script-section data-pkt">
        <h3>${escapeHtml(d.kind || 'Investigation results')}</h3>
        <table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>
          ${d.values.map(v => `<tr><td>${escapeHtml(v[0])}</td><td><b>${escapeHtml(v[1])}</b></td><td>${escapeHtml(v[2]||'')}</td></tr>`).join('')}
        </tbody></table>
      </div>`;
    }

    html += `<div class="script-section">
      <h3>Facts — release when asked</h3>
      <div class="facts-grid">
        ${s.facts.map(f => `<div class="fact-row"><div class="ft">${escapeHtml(f.topic)}</div><div class="ft-text">${escapeHtml(f.text)}</div></div>`).join('')}
      </div>
    </div>`;

    html += `<div class="script-section">
      <h3>ICE</h3>
      <div class="ice-grid">
        <div class="ice-card"><div class="il">💭 Ideas</div><div class="it">${escapeHtml(s.ice.ideas||'')}</div></div>
        <div class="ice-card"><div class="il">😟 Concerns</div><div class="it">${escapeHtml(s.ice.concerns||'')}</div></div>
        <div class="ice-card"><div class="il">🎯 Expectations</div><div class="it">${escapeHtml(s.ice.expectations||'')}</div></div>
      </div>
    </div>`;

    if (s.cues && s.cues.length) {
      html += `<div class="script-section">
        <h3>Hidden cues — invite probing</h3>
        <ul class="cue-list">
          ${s.cues.map(cu => `<li>${escapeHtml(cu)}</li>`).join('')}
        </ul>
      </div>`;
    }

    body.innerHTML = html;
  }

  function renderScorecard(){
    const c = state.case;
    const mount = $('#scorecardMount');
    if (!mount) return;
    const sc = c.scorecard;

    // Fallback to the simple checkpoint card if no full scorecard authored
    if (!sc) { renderScorecardSimple(); return; }

    const DOMS = [
      { key:'gs',    cls:'gs-domain',   ic:'🌐', title:'Global Skills',     sub:'Structure, language, responsiveness',        items:sc.gs,    max:sc.maxGs,    scoreId:'sc-gs-score' },
      { key:'tasks', cls:'task-domain', ic:'📋', title:'Tasks',             sub:'Data gathering, diagnosis, management',       items:sc.tasks, max:sc.maxTasks, scoreId:'sc-tasks-score' },
      { key:'ro',    cls:'ro-domain',   ic:'🤝', title:'Relating to Others', sub:'Communication, rapport, shared decisions',  items:sc.ro,    max:sc.maxRo,    scoreId:'sc-ro-score' }
    ];

    mount.innerHTML = `
      <div class="scwrap">
        <div class="scwrap-hdr">
          <div>
            <div class="scwrap-title">${escapeHtml(c.title)} — SCA Consultation Scorecard</div>
            <div class="scwrap-sub">Based on the official SCA Consultation Tool · tick what you demonstrated · use after every practice consultation</div>
          </div>
          <div style="display:flex;gap:8px;align-items:center">
            <div class="scwrap-total-wrap"><span class="scwrap-total" id="sc-total">0</span><span class="scwrap-total-label">/ ${sc.total} pts</span></div>
            <button class="sc-reset-btn" id="scReset" type="button">↺ Reset</button>
          </div>
        </div>

        <div class="scwrap-grid">
          ${DOMS.map(d => `
            <div class="sc-domain">
              <div class="sc-domain-hdr ${d.cls}">
                <span class="sc-domain-icon">${d.ic}</span>
                <div><div class="sc-domain-title">${d.title}</div><div class="sc-domain-sub">${d.sub}</div></div>
                <div class="sc-domain-score"><span id="${d.scoreId}">0</span><span class="sc-domain-max">/${d.max}</span></div>
              </div>
              <div class="sc-items">
                ${d.items.map((it, i) => `
                  <label class="sc-item" data-dom="${d.key}" data-i="${i}" data-pts="${it.pts}">
                    <input type="checkbox" data-dom="${d.key}" data-i="${i}" data-pts="${it.pts}">
                    <span class="sc-item-text"><strong>${escapeHtml(it.t)}</strong> — ${escapeHtml(it.d)}</span>
                    <span class="sc-pts">${it.pts}pt</span>
                  </label>`).join('')}
              </div>
            </div>`).join('')}
        </div>

        <div class="sc-rag">
          <div class="sc-rag-t">RAG self-assessment — tick an item only when fully (green) achieved</div>
          <div class="sc-rag-row">
            <div class="sc-rag-cell rag-r"><div class="rag-h">🔴 Red — not achieved</div><div class="rag-d">Clearly missed: wrong/absent decision, red flags not screened, ICE not explored, generic plan. Leave unticked.</div></div>
            <div class="sc-rag-cell rag-a"><div class="rag-h">🟠 Amber — partial</div><div class="rag-d">Attempted but incomplete — right idea, key detail or explanation missing. Leave unticked and note it.</div></div>
            <div class="sc-rag-cell rag-g"><div class="rag-h">🟢 Green — fully achieved</div><div class="rag-d">Clearly demonstrated to pass standard, in plain language, tailored to this patient. Tick it.</div></div>
          </div>
        </div>

        <div class="scwrap-interp">
          <div class="interp-bar-wrap">
            <div class="interp-bar-track"><div class="interp-bar-fill" id="sc-bar-fill" style="width:0%"></div></div>
            <div class="interp-labels"><span>0</span><span>${Math.round(sc.total*0.33)}</span><span>${Math.round(sc.total*0.515)}</span><span>${Math.round(sc.total*0.758)}</span><span>${sc.total}</span></div>
            <div class="interp-zones">
              <div class="interp-zone iz-r">Fail</div><div class="interp-zone iz-a">Borderline</div>
              <div class="interp-zone iz-g">Pass</div><div class="interp-zone iz-gg">Strong pass</div>
            </div>
          </div>
          <div class="interp-msg" id="sc-interp-msg">
            <div class="interp-icon">📋</div>
            <div class="interp-text">Complete the checklist above to see your score interpretation and feedback.</div>
          </div>
        </div>

        <div class="sc-missed-wrap" id="sc-missed-section" style="display:none">
          <div class="sc-missed-title">⚠ Items not yet ticked — areas to develop</div>
          <div id="sc-missed-list" class="sc-missed-list"></div>
        </div>
      </div>`;

    mount.querySelectorAll('.sc-item input').forEach(cb => {
      cb.addEventListener('change', () => {
        const key = cb.dataset.dom + ':' + cb.dataset.i;
        state.checkpoints[key] = cb.checked;
        cb.closest('.sc-item').classList.toggle('checked', cb.checked);
        computeScore();
      });
    });
    $('#scReset').addEventListener('click', () => {
      mount.querySelectorAll('.sc-item input').forEach(cb => { cb.checked = false; cb.closest('.sc-item').classList.remove('checked'); });
      state.checkpoints = {};
      computeScore();
    });
    computeScore();
  }

  function computeScore(){
    const c = state.case; if (!c || !c.scorecard) return;
    const sc = c.scorecard;
    const groups = { gs:sc.gs, tasks:sc.tasks, ro:sc.ro };
    const got = { gs:0, tasks:0, ro:0 };
    let total = 0;
    Object.keys(groups).forEach(key => {
      groups[key].forEach((it, i) => {
        if (state.checkpoints[key + ':' + i]) { got[key] += it.pts; total += it.pts; }
      });
    });
    const setT = (id, v) => { const e = $('#' + id); if (e) e.textContent = v; };
    setT('sc-total', total);
    setT('sc-gs-score', got.gs); setT('sc-tasks-score', got.tasks); setT('sc-ro-score', got.ro);
    const fill = $('#sc-bar-fill'); if (fill) fill.style.width = Math.round(total / sc.total * 100) + '%';

    const t = sc.total;
    let icon, msg;
    if (total === 0) { icon = '📋'; msg = 'Complete the checklist above to see your score interpretation and feedback.'; }
    else if (total < t*0.33) { icon = '🔴'; msg = '<strong>Below pass standard.</strong> Key parts of the consultation are missing — revisit the model consultation and the unticked items below before your next attempt.'; }
    else if (total < t*0.515) { icon = '🟠'; msg = '<strong>Borderline.</strong> The structure is there but important marks are being dropped. Focus on the unticked items, especially data gathering and ICE.'; }
    else if (total < t*0.758) { icon = '🟢'; msg = '<strong>Pass standard.</strong> Sound clinical reasoning and patient-centred consulting. Close the remaining gaps below for a strong pass.'; }
    else { icon = '🟢'; msg = '<strong>Strong pass.</strong> Comprehensive across all three domains — data gathering, relating to others and clinical management.'; }
    const im = $('#sc-interp-msg');
    if (im) im.innerHTML = `<div class="interp-icon">${icon}</div><div class="interp-text">${msg}</div>`;

    const missed = [];
    Object.keys(groups).forEach(key => {
      groups[key].forEach((it, i) => { if (!state.checkpoints[key + ':' + i]) missed.push(it.t); });
    });
    const ms = $('#sc-missed-section');
    const totalItems = sc.gs.length + sc.tasks.length + sc.ro.length;
    if (ms) {
      if (missed.length && missed.length < totalItems) {
        ms.style.display = 'block';
        $('#sc-missed-list').innerHTML = missed.map(m => `<div class="sc-missed-item">— ${escapeHtml(m)}</div>`).join('');
      } else ms.style.display = 'none';
    }
  }

  // Legacy simple card — kept as a fallback for any case without a full scorecard
  function renderScorecardSimple(){
    const c = state.case;
    const mount = $('#scorecardMount');
    const order = ['tasks','rto','gs'];
    const byDom = { tasks:[], rto:[], gs:[] };
    c.checkpoints.forEach((cp, i) => { (byDom[cp.dom] || byDom.gs).push({ ...cp, i }); });
    const max = c.checkpoints.length;
    mount.innerHTML = `
      <div class="sccard">
        <div class="sccard-hdr">
          <div><div class="sccard-title">${escapeHtml(c.title)} — SCA Consultation Scorecard</div>
          <div class="sccard-sub">Tick what you demonstrated · self-assess after every attempt</div></div>
          <div style="display:flex;gap:10px;align-items:center">
            <div class="sccard-total-wrap"><span class="sccard-total" id="scTotal">0</span><span class="sccard-total-label">/ ${max} pts</span></div>
            <button class="sc-reset" id="scReset" type="button">↺ Reset</button></div>
        </div>
        <div class="sccard-bar"><div class="sccard-bar-fill" id="scBar"></div></div>
        <div class="sccard-grid">
          ${order.map(d => { const items = byDom[d]; const m = domMeta(d);
            return `<div class="scd"><div class="scd-hdr dom-${d}"><span class="scd-ic">${m.ic}</span>
              <div><div class="scd-title">${m.title}</div><div class="scd-sub">${m.sub}</div></div>
              <div class="scd-score"><b id="scDom-${d}">0</b><span class="scd-max">/${items.length}</span></div></div>
              <div class="scd-items">${items.map(it => `<label class="sci" data-i="${it.i}"><input type="checkbox" data-i="${it.i}"><span class="sci-text">${escapeHtml(it.text)}</span></label>`).join('')}</div></div>`;
          }).join('')}
        </div>
        <div class="sccard-interp" id="scInterp"><span class="ii">📋</span><span class="it">Tick the behaviours you demonstrated.</span></div>
        <div class="sc-missed" id="scMissed" style="display:none"><div class="sc-missed-t">Not yet ticked</div><div id="scMissedList"></div></div>
      </div>`;
    mount.querySelectorAll('.sci input').forEach(cb => cb.addEventListener('change', () => {
      const i = +cb.dataset.i; state.checkpoints[i] = cb.checked;
      cb.closest('.sci').classList.toggle('checked', cb.checked); computeScoreSimple();
    }));
    $('#scReset').addEventListener('click', () => {
      mount.querySelectorAll('.sci input').forEach(cb => { cb.checked = false; cb.closest('.sci').classList.remove('checked'); });
      state.checkpoints = {}; computeScoreSimple();
    });
    computeScoreSimple();
  }

  function computeScoreSimple(){
    const c = state.case; if (!c) return;
    const doms = { tasks:{n:0,t:0}, rto:{n:0,t:0}, gs:{n:0,t:0} };
    let total = 0; const max = c.checkpoints.length;
    c.checkpoints.forEach((cp, i) => { const d = doms[cp.dom] || doms.gs; d.t++; if (state.checkpoints[i]) { d.n++; total++; } });
    const setT = (sel, v) => { const e = $(sel); if (e) e.textContent = v; };
    setT('#scTotal', total);
    ['tasks','rto','gs'].forEach(d => setT('#scDom-'+d, doms[d].n));
    const bar = $('#scBar'); if (bar) bar.style.width = Math.round(total/max*100) + '%';
    const missed = c.checkpoints.filter((cp, i) => !state.checkpoints[i]);
    const ms = $('#scMissed');
    if (ms) { if (missed.length && missed.length < max) { ms.style.display = 'block'; $('#scMissedList').innerHTML = missed.map(m => `<div class="sc-missed-i">${escapeHtml(m.text)}</div>`).join(''); } else ms.style.display = 'none'; }
  }

  /* ---------- SCA knowledge ---------- */
  // Shared builder: the "Why candidates fail this station" panel (used in the
  // Knowledge step behind a spoiler, and in full on the Feedback step).
  function pitfallsPanelHtml(c){
    if (!(c.pitfalls && c.pitfalls.items && c.pitfalls.items.length)) return '';
    return `
      <section class="kn-pit">
        <div class="kn-pit-hdr"><span class="kn-pit-ic">⚠️</span><div><div class="kn-cat-t">Why candidates fail this station</div><div class="kn-cat-sub">Recurring examiner feedback — written with internationally-trained graduates in mind</div></div></div>
        ${c.pitfalls.intro ? `<p class="kn-pit-intro">${escapeHtml(c.pitfalls.intro)}</p>` : ''}
        <div class="kn-pit-items">
          ${c.pitfalls.items.map(p => `
            <div class="kn-pit-i">
              <span class="kn-pit-dom ${p.dom}">${({tasks:'Tasks', rto:'Relating to others', gs:'Global skills'})[p.dom] || ''}</span>
              <div class="kn-pit-fail">✗ ${escapeHtml(p.fail)}</div>
              <div class="kn-pit-why">${escapeHtml(p.why)}</div>
              <div class="kn-pit-fix">✓ ${escapeHtml(p.fix)}</div>
            </div>`).join('')}
        </div>
      </section>`;
  }

  function renderKnowledge(){
    const c = state.case; const mount = $('#knowledgeMount');
    if (!mount) return;
    const k = c.knowledge;
    if (!k) { mount.innerHTML = '<div class="kn-wrap"><p style="color:var(--muted)">No structured knowledge note for this case yet.</p></div>'; return; }
    const kb = c.kb || {};
    const pb = c.playbook || {};
    const hist = (pb.history && !Array.isArray(pb.history)) ? pb.history : {};
    const mgmt = (pb.management && !Array.isArray(pb.management)) ? pb.management : {};
    const li = arr => (arr || []).map(x => `<li>${escapeHtml(x)}</li>`).join('');
    const taskBlock = (cls, ic, label, sub, inner) => inner ? `
      <div class="kn-task ${cls}">
        <div class="kn-task-h"><span class="kt-ic">${ic}</span><span class="kt-l">${label}</span><span class="kt-s">${sub}</span></div>
        <div class="kn-task-b">${inner}</div>
      </div>` : '';
    const tasksHtml = [
      taskBlock('t-red','🚩','Red flags','screen these', (hist.redFlags && hist.redFlags.length) ? `<ul>${li(hist.redFlags)}</ul>` : ''),
      taskBlock('t-psy','🧩','Psychosocial & impact','tailor to this patient', (hist.psychosocial && hist.psychosocial.length) ? `<ul>${li(hist.psychosocial)}</ul>` : ''),
      taskBlock('t-ice','💭','ICE','draw it out — then use it in the plan', (hist.ice && hist.ice.length) ? `<ul>${li(hist.ice)}</ul>` : ''),
      taskBlock('t-dx','🗣️','Phrase the diagnosis','tailored wording', pb.diagnosis ? `<p class="kn-task-q">${escapeHtml(pb.diagnosis)}</p>${pb.diagnosisLay ? `<p class="kn-task-q lay">${escapeHtml(pb.diagnosisLay)}</p>` : ''}` : ''),
      taskBlock('t-net','🛟','Safety-net','before they leave', (mgmt.safetyNet && mgmt.safetyNet.length) ? `<ul>${li(mgmt.safetyNet)}</ul>` : '')
    ].join('');

    // Clinical points: classify into pathway stages and render in clinical order
    const CLIN_STAGES = {
      dx:  { l:'Diagnose',     c:'#1d4ed8', bg:'#eff6ff', o:1 },
      red: { l:'Red flags',    c:'#b91c1c', bg:'#fef2f2', o:2 },
      ix:  { l:'Investigate',  c:'#0e7490', bg:'#ecfeff', o:3 },
      mgmt:{ l:'Manage',       c:'#15803d', bg:'#f0fdf4', o:4 },
      ref: { l:'Refer',        c:'#7e22ce', bg:'#faf5ff', o:5 },
      net: { l:'Safety-net',   c:'#b45309', bg:'#fffbeb', o:6 },
      edge:{ l:'Marking edge', c:'#be185d', bg:'#fdf2f8', o:7 }
    };
    function clinStage(p){
      const h = p.h || '';
      if (/safety-?net/i.test(h)) return 'net';
      if (/red flag|same-day action|danger|don.t miss|can.t-miss/i.test(h)) return 'red';
      if (/marking edge|spot the real|mind first|faith|carer is part|name the worry/i.test(h)) return 'edge';
      if (/\brefer|2ww|who gets an urgent|suspected.cancer|get the patient in/i.test(h)) return 'ref';
      if (/diagnos|confirm|vs dementia|pivot|read the pattern|grade then|behavioural, not medical|confidentiality line/i.test(h)) return 'dx';
      if (/work-?up|investigat|baseline|quantify|assessment on|differential/i.test(h)) return 'ix';
      return 'mgmt';
    }
    const clinPts = (k.points || []).map((p, idx) => ({ p, idx, st: clinStage(p) }))
      .sort((a, b) => (CLIN_STAGES[a.st].o - CLIN_STAGES[b.st].o) || (a.idx - b.idx));
    const clinHtml = clinPts.length ? `
      <div class="kn-clin">
        ${clinPts.map((x, i) => {
          const s = CLIN_STAGES[x.st];
          return `<div class="kn-clin-i" style="--cc:${s.c}; --cb:${s.bg}"><span class="kn-clin-n">${i + 1}</span><div class="kn-clin-b"><div class="kn-clin-h"><span class="kn-clin-tag">${s.l}</span><span>${escapeHtml(x.p.h)}</span></div><div class="kn-pt-t">${escapeHtml(x.p.t)}</div></div></div>`;
        }).join('')}
      </div>` : '';

    const CATS = [
      { key:'clinical',     ic:'🩺', label:'Clinical', sub:'NICE CKS & UK clinical guidance — in consultation order', cls:'cat-clinical', items:(k.points||[]), html: clinHtml },
      { key:'social',       ic:'🤝', label:'Social & holistic', sub:'Carer, psychosocial, occupational', cls:'cat-social', items:(kb.social||[]) },
      { key:'legal',        ic:'⚖️', label:'Legal', sub:'DVLA, statutory duties, safeguarding law', cls:'cat-legal', items:(kb.legal||[]) },
      { key:'professional', ic:'👔', label:'Professional', sub:'GMC: consent, confidentiality, capacity', cls:'cat-prof', items:(kb.professional||[]) },
      { key:'community',    ic:'🌐', label:'Community', sub:'Support groups & online resources', cls:'cat-comm', items:(kb.community||[]) }
    ].filter(cat => cat.items && cat.items.length);

    const catsHtml = CATS.map((cat, i) => `
      <details class="kn-cat ${cat.cls}" ${i === 0 ? 'open="open"' : ''}>
        <summary class="kn-cat-hdr"><span class="kn-cat-ic">${cat.ic}</span><div class="kn-cat-tt"><div class="kn-cat-t">${cat.label}</div><div class="kn-cat-sub">${cat.sub}</div></div><span class="kn-cat-n">${cat.items.length}</span><svg class="kn-cat-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><polyline points="6 9 12 15 18 9"></polyline></svg></summary>
        ${cat.html || `<div class="kn-cat-items">
          ${cat.items.map(p => `<div class="kn-pt"><div class="kn-pt-h">${escapeHtml(p.h)}</div><div class="kn-pt-t">${escapeHtml(p.t)}</div></div>`).join('')}
        </div>`}
      </details>`).join('');

    const links = c.links || [];
    const linksHtml = links.length ? `
      <div class="kn-sec-h">📚 On Reasoning GP — go deeper</div>
      <div class="kn-links">
        ${links.map(l => `<a class="kn-link" href="${l.href}"><span class="kl-ic">${l.ic}</span><span class="kl-b"><b>${escapeHtml(l.t)}</b><small>${escapeHtml(l.s || '')}</small></span><span class="kl-arr">→</span></a>`).join('')}
      </div>` : '';

    mount.innerHTML = `
      <div class="kn-wrap">
        <div class="kn-eyebrow">SCA knowledge · what you’re expected to know</div>
        <div class="kn-h">${escapeHtml(c.title)}</div>
        <div class="kn-guideline">📘 ${escapeHtml(k.guideline)}</div>
        <div class="kn-summary">${escapeHtml(k.summary)}</div>
        ${tasksHtml ? `<div class="kn-sec-h">🎯 In the room — what this station rewards</div><div class="kn-tasks">${tasksHtml}</div>` : ''}
        <div class="kn-sec-h">🗂 Knowledge by theme — tap a theme to expand</div>
        <div class="kn-cats">${catsHtml}</div>
        ${linksHtml}
        ${(c.pitfalls && c.pitfalls.items && c.pitfalls.items.length) ? `
        <details class="kn-pit-reveal">
          <summary>⚠️ <b>Why candidates fail this station</b> — best read AFTER your first attempt, so the traps diagnose you rather than prime you. Tap to reveal.</summary>
          ${pitfallsPanelHtml(c)}
        </details>` : ''}
        <div class="kn-expand"><button class="head-btn" id="knAsk" type="button">✨ Ask the examiner to expand</button></div>
        <div class="kn-ai-out" id="knAiOut"></div>
        <div class="kn-foot">Educational summary anchored to UK guidance — always verify against the live NICE CKS and your local formulary.</div>
      </div>`;
    const ask = $('#knAsk'); if (ask) ask.addEventListener('click', expandKnowledge);
  }

  async function expandKnowledge(){
    if (!window.claude || !window.claude.complete) { $('#knAiOut').textContent = 'AI helper not available in this preview.'; return; }
    const c = state.case, k = c.knowledge;
    const out = $('#knAiOut'); out.textContent = 'Examiner is writing…';
    const prompt = `You are an RCGP SCA examiner and GP trainer. Give a concise, exam-focused knowledge briefing for this station, anchored to current UK guidance (${k.guideline}). Cover: the key diagnostic and management decisions, first-line choices with doses where relevant, red flags and safety-netting, and the one or two facts candidates most often get wrong. Use short headed bullets. Be accurate to NICE CKS / national UK guidance. Keep it under ~250 words.

CASE: ${c.title} — ${c.meta.age}${c.meta.sex}, ${c.meta.system}. ${c.brief}`;
    try { out.textContent = await window.claude.complete(prompt); }
    catch (e) { out.textContent = 'Failed: ' + (e.message || e); }
  }

  /* ---------- Model (expert) consultation ---------- */
  // Render the PRE-WRITTEN, ready model consultation for this case (instant).
  function renderModelReady(){
    const c = state.case;
    const out = $('#modelOut');
    if (!out) return;
    if (c.model && c.model.length) {
      renderModel(c.model);
      $('#modelStatus').textContent = `Complete model consultation — ${c.model.length} turns, ~${c.duration || 12} minutes. Highlighted lines trigger marks.`;
      $('#modelLegend').style.display = 'flex';
    } else {
      out.innerHTML = '';
      $('#modelStatus').textContent = 'Press the button to generate a model consultation for this station.';
      $('#modelLegend').style.display = 'none';
    }
  }

  async function generateModel(){
    if (!window.claude || !window.claude.complete) {
      $('#modelStatus').textContent = 'The AI helper isn’t available in this preview — open the page in a normal browser tab to generate the model consultation.';
      return;
    }
    const c = state.case;
    const cps = c.checkpoints.map(cp => `- [${cp.dom}] ${cp.text}`).join('\n');
    const worked = (c.worked || []).map(w => `- ${w.lbl}: ${w.txt}`).join('\n');
    $('#modelStatus').textContent = 'Writing the model consultation…';
    $('#modelOut').innerHTML = '';
    $('#modelLegend').style.display = 'none';
    $('#genModel').disabled = true;

    // Line-based format (NOT JSON): one turn per line, pipe-delimited, so a
    // truncated response (1024-token cap) only loses the final partial line
    // instead of breaking the whole parse.
    const prompt = `You are an RCGP SCA examiner writing a GOLD-STANDARD model consultation for a GP trainee: the whole ~12-minute station performed at clear/excellent-pass standard.

OUTPUT FORMAT — one turn per line, pipe-delimited, nothing else (no preamble, no markdown, no numbering):
WHO | spoken line | DOMAIN | why-this-scores
- WHO is DR or PT.
- DOMAIN is one of tasks, rto, gs for the strongest ~6 DOCTOR lines (the ones that earn marks); use "-" for every other line.
- why-this-scores: a SHORT phrase, only when a DOMAIN is given; otherwise leave empty.
- Keep lines concise so the whole consultation fits. Aim for 12–16 turns: open → ICE → focused history → red-flag/exam → explanation in plain English → shared management plan → safety-net → close.
- UK-idiomatic, warm, clinically correct to current UK guidance.

EXAMPLE LINES:
DR | Hello, I'm Dr Lee — thanks for coming in. What's brought you today? | rto | Open question, builds rapport
PT | I've had this cough for weeks and it's not shifting. | - |
DR | Before we go on, what's been worrying you most about it? | tasks | Elicits ICE early

CASE: ${c.title} (${c.type}) — ${c.meta.age}${c.meta.sex}, ${c.meta.system}. ${c.brief}
PATIENT OPENING: ${c.script.opening}
HIDDEN CONCERN: ${c.script.ice.concerns}
KEY SCORING POINTS:
${cps}
MODEL PHRASES TO WEAVE IN:
${worked}`;

    try {
      const raw = await window.claude.complete(prompt);
      const turns = parseModelLines(raw);
      if (turns.length >= 3) {
        renderModel(turns);
        $('#modelStatus').textContent = `Model consultation — ${turns.length} turns. Highlighted lines trigger marks.`;
        $('#modelLegend').style.display = 'flex';
      } else {
        // Last-resort fallback: show the raw text readably so the user still gets value.
        $('#modelOut').innerHTML = `<div class="mt-turn dr"><span class="mt-who">Model consultation</span><div class="mt-line" style="white-space:pre-wrap">${escapeHtml((raw||'').trim() || 'No content returned — please try again.')}</div></div>`;
        $('#modelStatus').textContent = '';
      }
    } catch (e) {
      $('#modelStatus').textContent = 'Could not generate just now (' + (e.message || e) + '). Press the button to try again.';
    }
    $('#genModel').disabled = false;
  }

  // Parse pipe-delimited turn lines; tolerate blank lines, stray prose and a
  // truncated final line. Returns [{who,text,hl,dom,why}].
  function parseModelLines(raw){
    if (!raw) return [];
    const turns = [];
    raw.split(/\r?\n/).forEach(line => {
      const l = line.trim();
      if (!l || l.indexOf('|') === -1) return;
      const parts = l.split('|').map(s => s.trim());
      const whoRaw = (parts[0] || '').toUpperCase();
      const who = whoRaw.startsWith('DR') ? 'dr' : whoRaw.startsWith('PT') ? 'pt' : null;
      if (!who) return;
      const text = parts[1] || '';
      if (!text) return;
      let dom = (parts[2] || '').toLowerCase();
      if (['tasks','rto','gs'].indexOf(dom) === -1) dom = null;
      const why = parts[3] || '';
      turns.push({ who, text, hl: who === 'dr' && !!dom, dom, why: dom ? why : '' });
    });
    return turns;
  }

  function renderModel(turns){
    const domEl = $('#modelOut');
    if (!domEl) return;
    const dlbl = { tasks:'Tasks', rto:'Relating', gs:'Global' };
    // Domain coverage across highlighted doctor lines
    const cov = { tasks:0, rto:0, gs:0 };
    turns.forEach(t => { if (t.who === 'dr' && t.dom && cov[t.dom] != null) cov[t.dom]++; });
    const drCount = turns.filter(t => t.who === 'dr').length;
    const ptCount = turns.filter(t => t.who === 'pt').length;
    const coverHtml = `
      <div class="mt-cover">
        <div class="mt-cover-h">This model run demonstrates all three marking domains</div>
        <div class="mt-cover-row">
          <span class="mt-cov tasks">📋 Tasks · ${cov.tasks} marking points</span>
          <span class="mt-cov rto">🤝 Relating to others · ${cov.rto}</span>
          <span class="mt-cov gs">🌐 Global skills · ${cov.gs}</span>
        </div>
        <div class="mt-cover-sub">${drCount} doctor turns · ${ptCount} patient turns · a full ~12-minute consultation. Tinted lines are the ones an examiner would award marks for.</div>
        <div class="mt-cover-note"><b>Examiner’s note — how to use this:</b> don’t memorise the lines; rehearsed scripts are explicitly flagged in SCA feedback. Steal the <i>skeleton</i> — the phase headings and their clock — and the scored moves, then say them in your own words. Cross-check against “Why candidates fail this station” in the Knowledge step: every trap listed there is dodged somewhere in this run.</div>
      </div>`;

    const body = turns.map(t => {
      const phase = t.phase ? `<div class="mt-phase"><span class="mt-phase-n">${escapeHtml(t.phase)}</span><span class="mt-phase-clock">${t.clock || ''}</span></div>` : '';
      const who = t.who === 'dr' ? 'Doctor' : 'Patient';
      const cls = t.who === 'dr' ? 'dr' : 'pt';
      const isHl = (t.hl || (t.who === 'dr' && !!t.dom));
      const hl = isHl ? ' hl' : '';
      const why = (isHl && t.why) ? `<div class="mt-why ${t.dom||'gs'}"><span class="mw-tag">${dlbl[t.dom||'gs']||'Global'}</span>${escapeHtml(t.why)}</div>` : '';
      return `${phase}<div class="mt-turn ${cls}${hl}"><span class="mt-who">${who}</span><div class="mt-line">${escapeHtml(t.text)}</div>${why}</div>`;
    }).join('');
    domEl.innerHTML = coverHtml + body;
  }

  /* ---------- Live voice (patient TTS + continuous listening) ---------- */
  function updateVoiceBtn(){ const b = $('#voiceToggle'); if (b) b.textContent = state.voiceOn ? '🔊 Voice on' : '🔇 Voice off'; }
  function toggleVoice(){ state.voiceOn = !state.voiceOn; updateVoiceBtn(); if (!state.voiceOn) { try { speechSynthesis.cancel(); } catch(e){} } }

  function pickVoice(){
    if (!('speechSynthesis' in window)) return null;
    const all = speechSynthesis.getVoices() || [];
    const gb = all.filter(v => /en[-_]?GB/i.test(v.lang));
    const pool = gb.length ? gb : all.filter(v => /^en/i.test(v.lang));
    const list = pool.length ? pool : all;
    const female = /F/.test(state.case.meta.sex) && !/caller is|mother is|husband/i.test(state.case.meta.sex);
    const named = list.find(v => female
      ? /female|hazel|serena|kate|amy|sonia|libby|fiona/i.test(v.name)
      : /male|daniel|george|arthur|brian|ryan|oliver/i.test(v.name));
    return named || list[0] || null;
  }
  function speakPatient(text){
    if (!state.voiceOn || !('speechSynthesis' in window) || !text) { if (state.liveOn) startLiveListen(); return; }
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      const v = pickVoice(); if (v) u.voice = v;
      u.lang = 'en-GB'; u.rate = 1; u.pitch = /F/.test(state.case.meta.sex) ? 1.08 : 0.95;
      if (state.liveOn) setLiveState('speaking', 'Patient is speaking — listen…');
      u.onend = () => { if (state.liveOn) startLiveListen(); };
      u.onerror = () => { if (state.liveOn) startLiveListen(); };
      speechSynthesis.speak(u);
    } catch(e){ if (state.liveOn) startLiveListen(); }
  }

  /* ---------- Model consultation: play as AUDIO ---------- */
  // Reads the rendered model transcript aloud, alternating a doctor voice and a
  // patient voice, highlighting the current line and tracking progress. Supports
  // play / pause(resume) / stop and a speed control. Uses the Web Speech API.
  const audio = { playing:false, idx:0, turns:[], rate:1 };

  function pickVoiceFor(role){
    if (!('speechSynthesis' in window)) return null;
    const all = speechSynthesis.getVoices() || [];
    const gb = all.filter(v => /en[-_]?GB/i.test(v.lang));
    const pool = gb.length ? gb : all.filter(v => /^en/i.test(v.lang));
    const list = pool.length ? pool : all;
    if (!list.length) return null;
    // Try to give doctor and patient distinct voices when more than one exists.
    const female = list.find(v => /female|woman|Hazel|Serena|Kate|Sonia|Libby|Aria|Emma/i.test(v.name));
    const male   = list.find(v => /male|man|Daniel|George|Ryan|Arthur|Brian|Oliver/i.test(v.name));
    if (role === 'dr') return male || list[0];
    // patient: match the case sex if we can, else the "other" voice
    const wantF = state.case && /F/i.test(state.case.meta.sex || '');
    return (wantF ? female : male) || (list[1] || list[0]);
  }

  function updateAudioBtn(){
    const ic = $('#audioPlay .ap-ic'), lbl = $('#audioPlay .ap-lbl');
    if (!ic) return;
    if (audio.playing) { ic.textContent = '❚❚'; lbl.textContent = 'Pause'; }
    else { ic.textContent = '▶'; lbl.textContent = audio.idx > 0 ? 'Resume' : 'Play as audio'; }
    const stop = $('#audioStop'); if (stop) stop.disabled = (audio.idx === 0 && !audio.playing);
  }

  function highlightAudioLine(i){
    const turns = $$('#modelOut .mt-turn');
    turns.forEach((el, n) => el.classList.toggle('mt-speaking', n === i));
    const cur = turns[i];
    if (cur) {
      const who = cur.classList.contains('dr') ? 'Doctor' : 'Patient';
      const now = $('#audioNow'); if (now) now.textContent = `▶ ${who}: “${(cur.querySelector('.mt-line')?.textContent || '').slice(0, 80)}…”`;
      const fill = $('#audioFill'); if (fill) fill.style.width = Math.round((i) / turns.length * 100) + '%';
      // keep the speaking line in view within the transcript
      const box = $('#modelOut');
      if (box) { const top = cur.offsetTop - box.offsetTop - 60; box.scrollTo({ top, behavior:'smooth' }); }
    }
  }

  function speakAudioLine(){
    if (!audio.playing) return;
    const turns = audio.turns;
    if (audio.idx >= turns.length) { stopAudio(true); return; }
    const t = turns[audio.idx];
    highlightAudioLine(audio.idx);
    let u;
    try {
      u = new SpeechSynthesisUtterance(t.text.replace(/\([^)]*\)/g, ' ').trim() || t.text);
    } catch(e) { return; }
    const v = pickVoiceFor(t.who); if (v) u.voice = v;
    u.lang = 'en-GB';
    u.rate = audio.rate * (t.who === 'dr' ? 1 : 1.02);
    u.pitch = t.who === 'dr' ? 0.96 : 1.08;
    u.onend = () => { if (audio.playing) { audio.idx++; speakAudioLine(); } };
    u.onerror = () => { if (audio.playing) { audio.idx++; speakAudioLine(); } };
    try { speechSynthesis.speak(u); } catch(e){}
  }

  function startAudio(){
    if (!('speechSynthesis' in window)) { const now = $('#audioNow'); if (now) now.textContent = 'Audio isn’t supported in this browser — try Chrome, Edge or Safari.'; return; }
    // Build the turn list from the case model (text + who), skipping phase markers.
    const model = (state.case && (state.case.model || (window.SCA_MODELS && window.SCA_MODELS[state.case.id]))) || [];
    audio.turns = model.filter(t => t.who && t.text).map(t => ({ who: t.who, text: t.text }));
    if (!audio.turns.length) return;
    try { speechSynthesis.cancel(); } catch(e){}
    audio.playing = true;
    if (audio.idx >= audio.turns.length) audio.idx = 0;
    updateAudioBtn();
    speakAudioLine();
  }

  function pauseAudio(){
    audio.playing = false;
    try { speechSynthesis.cancel(); } catch(e){}
    updateAudioBtn();
    const now = $('#audioNow'); if (now && audio.idx < audio.turns.length) now.textContent = '⏸ Paused — press Resume to continue.';
  }

  function stopAudio(finished){
    audio.playing = false; audio.idx = 0;
    try { speechSynthesis.cancel(); } catch(e){}
    $$('#modelOut .mt-turn').forEach(el => el.classList.remove('mt-speaking'));
    const fill = $('#audioFill'); if (fill) fill.style.width = finished ? '100%' : '0%';
    const now = $('#audioNow'); if (now) now.textContent = finished ? '✓ Finished — press Play to listen again.' : 'Listen to the full consultation read aloud — doctor and patient in different voices.';
    updateAudioBtn();
  }

  function toggleAudio(){
    if (audio.playing) pauseAudio();
    else startAudio();
  }

  /* ---------- Live consultation stage ---------- */
  function setLiveUI(on){
    const pane = document.querySelector('.practice-mode[data-mode="aipt"]');
    if (pane) pane.classList.toggle('is-live', !!on);
    if (!on) return;
    const c = state.case;
    const name = (c.stem && c.stem.name) ? c.stem.name.split('(')[0].trim() : 'Patient';
    const age = (c.meta && c.meta.age) || 40;
    const isF = /F/.test((c.meta && c.meta.sex) || '');
    const face = age >= 70 ? (isF ? '👵' : '👴') : age <= 12 ? '🧒' : (isF ? '👩' : '👨');
    const nm = $('#lsName'); if (nm) nm.textContent = name;
    const fc = $('#lsFace'); if (fc) fc.textContent = face;
    const pc = $('#lsPtCap'); if (pc) { pc.hidden = true; pc.textContent = ''; }
    const dc = $('#lsDrCap'); if (dc) { dc.hidden = true; dc.textContent = ''; }
  }
  function setLiveState(mode, text){
    const st = $('#liveStage'); if (!st) return;
    st.classList.remove('is-listening','is-speaking','is-thinking');
    if (mode) st.classList.add('is-' + mode);
    const t = $('#lsStateTxt'); if (t) t.textContent = text || '';
  }
  function liveCaption(which, text){
    const el = $(which === 'pt' ? '#lsPtCap' : '#lsDrCap');
    if (!el) return;
    const v = (text || '').trim();
    el.hidden = !v;
    el.textContent = v;
  }

  function startLiveListen(){
    if (!state.liveOn) return;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { $('#chatStatus').textContent = 'Speech recognition not available in this browser — type instead.'; stopLive(); return; }
    if (state.liveRec) { try { state.liveRec.stop(); } catch(e){} }
    const rec = new SR();
    rec.lang = 'en-GB'; rec.interimResults = true; rec.continuous = false;
    let finalText = '';
    rec.onresult = (e) => {
      let interim = '', fin = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) fin += t + ' '; else interim += t;
      }
      if (fin) finalText += fin;
      $('#chatInput').value = (finalText + interim).trim();
      liveCaption('dr', (finalText + interim).trim());
    };
    rec.onerror = () => { state.liveRec = null; };
    rec.onend = () => {
      state.liveRec = null;
      if (!state.liveOn) return;
      const text = $('#chatInput').value.trim();
      if (text) sendDoctorMessage();   // reply will be spoken, then listening resumes
      else startLiveListen();          // nothing heard — keep listening
    };
    try { rec.start(); state.liveRec = rec; $('#liveBanner').classList.add('is-on'); setLiveState('listening', 'Listening — speak naturally, pause when you finish…'); } catch(e){}
  }
  function stopLive(){
    state.liveOn = false;
    setLiveUI(false);
    if (state.recorder && state.recorder.state === 'recording') stopRecording();
    const btn = $('#liveStart'); if (btn) { btn.classList.remove('is-live'); btn.textContent = '🎙 Start live consultation'; }
    const bn = $('#liveBanner'); if (bn) bn.classList.remove('is-on');
    if (state.liveRec) { try { state.liveRec.stop(); } catch(e){} state.liveRec = null; }
    try { speechSynthesis.cancel(); } catch(e){}
  }
  function toggleLive(){
    if (state.liveOn) { stopLive(); return; }
    setPracticeMode('aipt');
    state.liveOn = true; state.voiceOn = true; updateVoiceBtn();
    setLiveUI(true);
    const btn = $('#liveStart'); if (btn) { btn.classList.add('is-live'); btn.textContent = '⏹ End live consultation'; }
    $('#liveBanner').classList.add('is-on');
    if (!state.timerRunning) startTimer();
    const last = state.chatMessages[state.chatMessages.length - 1];
    if (last && last.role === 'patient') { liveCaption('pt', last.text); speakPatient(last.text); }  // speaks opening, then listens via onend
    else startLiveListen();
  }

  function renderCheckpoints(){ /* replaced by renderScorecard */ }

  /* ---------- Timer ---------- */
  function updateTimerDisplay(){
    const m = Math.floor(state.timerSec / 60);
    const s = state.timerSec % 60;
    const el = $('#timer');
    el.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    el.classList.toggle('is-amber', state.timerSec <= 120 && state.timerSec > 30);
    el.classList.toggle('is-red',   state.timerSec <= 30);
  }
  function tickTimer(){
    if (!state.timerRunning) return;
    state.timerSec--;
    if (state.timerSec <= 0) {
      state.timerSec = 0;
      updateTimerDisplay();
      pauseTimer();
      try { new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=').play(); } catch(e){}
      alert('Time is up. Move to the Scorecard to mark.');
      goToStep('score');
      return;
    }
    updateTimerDisplay();
  }
  function startTimer(){
    if (state.timerRunning) return;
    state.timerRunning = true;
    state.timerInterval = setInterval(tickTimer, 1000);
    $('#timerStart').style.display = 'none';
    $('#timerPause').style.display = '';
  }
  function pauseTimer(){
    state.timerRunning = false;
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.timerInterval = null;
    $('#timerStart').style.display = '';
    $('#timerPause').style.display = 'none';
  }
  function resetTimer(){
    pauseTimer();
    state.timerSec = (state.case?.duration || 12) * 60;
    updateTimerDisplay();
  }

  /* ---------- Recording ---------- */
  async function ensureStream(){
    if (state.mediaStream) return state.mediaStream;
    try {
      state.mediaStream = await navigator.mediaDevices.getUserMedia({ video:true, audio:true });
      $('#recVideo').srcObject = state.mediaStream;
      return state.mediaStream;
    } catch(e) {
      $('#recStatus').textContent = 'Camera / mic blocked: ' + (e.message || e.name);
      return null;
    }
  }
  async function toggleRecording(){
    if (state.recorder && state.recorder.state === 'recording') {
      stopRecording();
      return;
    }
    // Immediate click feedback while the camera permission resolves
    const tg = $('#recToggle');
    if (tg) { tg.classList.add('is-wait'); $('#recLabel').textContent = 'Allowing camera…'; }
    const lrW = $('#lsRec'); if (lrW) lrW.textContent = '⏳ Allowing camera…';
    const s = await ensureStream();
    if (tg) tg.classList.remove('is-wait');
    if (!s) {
      if (tg) $('#recLabel').textContent = 'Start recording';
      if (lrW) lrW.textContent = '⏺ Record me';
      const hint = document.querySelector('.ls-hint');
      if (hint) hint.textContent = '⚠️ Camera/microphone blocked — click the camera icon in the address bar, allow access, then press Record again.';
      return;
    }
    state.recChunks = [];
    const mime = MediaRecorder.isTypeSupported('video/webm;codecs=vp8,opus') ? 'video/webm;codecs=vp8,opus' : 'video/webm';
    state.recorder = new MediaRecorder(s, { mimeType: mime });
    state.recorder.ondataavailable = e => { if (e.data && e.data.size) state.recChunks.push(e.data); };
    state.recorder.onstop = () => {
      const blob = new Blob(state.recChunks, { type: mime });
      const url = URL.createObjectURL(blob);
      const stamp = new Date().toLocaleTimeString();
      const secs = state.recStart ? Math.round((Date.now() - state.recStart) / 1000) : 0;
      const dur = Math.floor(secs/60) + ':' + String(secs%60).padStart(2,'0');
      state.recordings.push({ url, blob, time: stamp, dur });
      renderRecList();
      $('#recStatus').textContent = `✓ Saved Recording ${state.recordings.length} (${dur}) — play it back below or download it.`;
      const hint = document.querySelector('.ls-hint');
      if (hint) hint.textContent = `✓ Recording saved (${dur}) — play or download it from the “Record & review” card in Read-script mode (toggle at the top of this step).`;
    };
    state.recorder.start();
    state.recStart = Date.now();
    const badge = $('#lsRecBadge'), rt = $('#lsRecTime');
    if (badge) badge.hidden = false;
    if (state.recTick) clearInterval(state.recTick);
    state.recTick = setInterval(() => {
      const secs = Math.round((Date.now() - state.recStart) / 1000);
      const dur = Math.floor(secs/60) + ':' + String(secs%60).padStart(2,'0');
      if (rt) rt.textContent = dur;
      $('#recStatus').textContent = `● Recording… ${dur} — audio + video, browser-only.`;
    }, 1000);
    $('#recLabel').textContent = 'Stop recording';
    $('#recToggle').classList.add('is-rec');
    $('#recStatus').textContent = 'Recording — audio + video. Browser-only.';
    const lr = $('#lsRec'); if (lr) { lr.textContent = '⏹ Stop recording'; lr.classList.add('is-rec'); }
  }
  function stopRecording(){
    if (state.recorder && state.recorder.state === 'recording') {
      state.recorder.stop();
    }
    $('#recLabel').textContent = 'Start recording';
    $('#recToggle').classList.remove('is-rec');
    if (state.recTick) { clearInterval(state.recTick); state.recTick = null; }
    const badge = $('#lsRecBadge'); if (badge) badge.hidden = true;
    const lr = $('#lsRec'); if (lr) { lr.textContent = '⏺ Record me'; lr.classList.remove('is-rec'); }
  }
  function renderRecList(){
    const list = $('#recList');
    list.innerHTML = state.recordings.map((r, i) => `
      <li>
        <span>Recording ${i+1} · ${escapeHtml(r.time)}${r.dur ? ' · ' + r.dur : ''}</span>
        <a href="${r.url}" download="sca-${state.case.id}-${i+1}.webm">Download</a>
      </li>
    `).join('') + (state.recordings.length ? `
      <li style="background:transparent">
        <video controls style="width:100%;border-radius:6px" src="${state.recordings[state.recordings.length-1].url}"></video>
      </li>
    ` : '');
  }

  /* ---------- AI patient chat ---------- */
  function setPracticeMode(mode){
    $$('.mp-btn').forEach(b => b.classList.toggle('is-on', b.dataset.mode === mode));
    $$('.practice-mode').forEach(p => p.classList.toggle('is-on', p.dataset.mode === mode));
    if (mode !== 'aipt') stopLive();
    if (mode === 'aipt' && state.chatMessages.length === 0) {
      // Seed with the patient's opening line so the user knows where to begin
      const op = state.case.script.opening;
      state.chatMessages.push({ role:'patient', text: op });
      renderChat();
      // Auto-start the timer when AI patient mode begins
      if (!state.timerRunning) startTimer();
    }
  }

  function buildPatientPrompt(){
    const c = state.case;
    const s = c.script;
    // Provide ALL facts; instruct the model not to volunteer them
    const factsBlock = s.facts.map(f => `- ${f.topic}: ${f.text}`).join('\n');
    const cuesBlock  = (s.cues || []).map(c2 => `- ${c2}`).join('\n');
    return `You are role-playing a UK general-practice patient for an SCA-style mock consultation. Stay in character at all times — never break the fourth wall, never narrate, never quote the brief. Speak as the patient would, in plain English, with natural hesitations.

PATIENT FACTS YOU KNOW (but only reveal when the doctor asks about that topic — do not list them, do not volunteer them all at once):
${factsBlock}

YOUR IDEAS / CONCERNS / EXPECTATIONS (these are the patient's internal world — drop hints when relevant; do not blurt them out unprompted):
- Ideas: ${s.ice.ideas}
- Concerns: ${s.ice.concerns}
- Expectations: ${s.ice.expectations}

HIDDEN CUES (lay these gently into your replies when invited; do not bring them up out of nowhere):
${cuesBlock || '- (none)'}

YOUR PERSONA: ${c.meta.age}-year-old ${c.meta.sex === 'M' ? 'man' : c.meta.sex === 'F' ? 'woman' : 'patient'}. Setting: ${c.meta.setting}. Consultation type: ${c.type}.

RULES:
1. Answer only what the doctor actually asked. Short, natural replies (1–3 sentences usually).
2. Reveal a fact only when the doctor opens that door. If they don't ask, don't tell.
3. Show emotion through phrasing — your concerns are the most important thing.
4. If the doctor is rushing, missing your cues, or being technical, react like a real patient might (quiet, confused, frustrated, etc.).
5. If the doctor asks about a topic not in your facts list, improvise sensibly but stay consistent.
6. Never list bullet points or use medical terminology unless the patient would. Never say "as the patient I…". Just be the patient.
7. Do not break character to end the consultation — only the doctor decides when it's over.`;
  }

  async function sendDoctorMessage(){
    if (state.chatBusy) return;
    const ta = $('#chatInput');
    const text = ta.value.trim();
    if (!text) return;
    ta.value = '';
    state.chatMessages.push({ role:'doctor', text });
    renderChat();
    if (state.liveOn) { liveCaption('dr', text); setLiveState('thinking', 'Patient is thinking…'); }
    state.chatBusy = true;
    $('#chatStatus').textContent = 'Patient is thinking…';

    // Construct messages for the model: stitch system prompt into the first user message
    const systemPrompt = buildPatientPrompt();
    const history = state.chatMessages.filter(m => m.role !== 'system');
    const msgs = [];
    // First doctor message gets the role-play primer appended above it
    let primerInjected = false;
    history.forEach((m, i) => {
      if (m.role === 'doctor') {
        const content = primerInjected ? m.text : (systemPrompt + '\n\n---\n\nDoctor: ' + m.text);
        primerInjected = true;
        msgs.push({ role:'user', content });
      } else if (m.role === 'patient') {
        msgs.push({ role:'assistant', content: m.text });
      }
    });

    try {
      const reply = await window.claude.complete({ messages: msgs });
      const replyText = (reply || '').trim();
      state.chatMessages.push({ role:'patient', text: replyText });
      $('#chatStatus').textContent = '';
      state.chatBusy = false;
      renderChat();
      if (state.liveOn) liveCaption('pt', replyText);
      speakPatient(replyText);   // voice the patient (resumes listening on end in live mode)
      return;
    } catch (err) {
      state.chatMessages.push({ role:'system', text: 'AI patient failed: ' + (err.message || err) });
      $('#chatStatus').textContent = '';
      if (state.liveOn) startLiveListen();
    }
    state.chatBusy = false;
    renderChat();
  }

  function renderChat(){
    const stream = $('#chatStream');
    if (!stream) return;
    stream.innerHTML = state.chatMessages.map(m => {
      if (m.role === 'system') return `<div class="bubble system">${escapeHtml(m.text)}</div>`;
      const lbl = m.role === 'doctor' ? 'You · Doctor' : 'Patient';
      return `<div class="bubble ${m.role}"><div class="b-lbl">${lbl}</div>${escapeHtml(m.text)}</div>`;
    }).join('');
    if (state.chatBusy) stream.insertAdjacentHTML('beforeend', `<div class="bubble typing">Patient is thinking…</div>`);
    stream.scrollTop = stream.scrollHeight;
  }

  function resetChat(){
    state.chatMessages = [];
    renderChat();
    setPracticeMode('aipt'); // also re-seeds opening line
  }

  function toggleChatMic(){
    const btn = $('#chatMic');
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { $('#chatStatus').textContent = 'Speech recognition not available in this browser.'; return; }
    if (state.chatMic) {
      try { state.chatMic.stop(); } catch(e){}
      state.chatMic = null;
      btn.classList.remove('chat-mic-on');
      btn.textContent = '🎙 Speak';
      return;
    }
    const rec = new SR();
    rec.lang = 'en-GB';
    rec.interimResults = true;
    rec.continuous = true;
    const ta = $('#chatInput');
    const initial = ta.value;
    rec.onresult = (e) => {
      let interim = '', final = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) final += t + ' '; else interim += t;
      }
      ta.value = (initial + ' ' + final + interim).replace(/\s+/g, ' ').trim();
    };
    rec.onend = () => {
      btn.classList.remove('chat-mic-on');
      btn.textContent = '🎙 Speak';
      state.chatMic = null;
    };
    rec.onerror = () => {
      btn.classList.remove('chat-mic-on');
      btn.textContent = '🎙 Speak';
      state.chatMic = null;
    };
    rec.start();
    state.chatMic = rec;
    btn.classList.add('chat-mic-on');
    btn.textContent = '⏹ Stop';
  }

  async function getExaminerNudge(){
    if (!window.claude || !window.claude.complete) {
      $('#examinerOut').textContent = 'AI helper not available in this preview.';
      return;
    }
    const transcript = state.chatMessages
      .filter(m => m.role !== 'system')
      .map(m => (m.role === 'doctor' ? 'Doctor' : 'Patient') + ': ' + m.text)
      .join('\n');
    if (!transcript.trim()) {
      $('#examinerOut').textContent = 'Speak to the patient first — I need at least a couple of exchanges to comment.';
      return;
    }
    $('#examinerOut').textContent = 'Examiner is watching…';
    const c = state.case;
    const prompt = `You are an experienced RCGP SCA examiner watching a 12-minute simulated consultation. Read the transcript so far and give ONE concise nudge — one sentence — that would unlock the next mark. Do not give a full critique; just the single best thing to do next. Anchor to the RCGP three-domain framework (Tasks / Relating to Others / Global) but only name the domain if it clarifies the nudge. Keep it warm, not patronising.

CASE: ${c.title} (${c.type})
HIDDEN PATIENT CONCERN: ${c.script.ice.concerns}

TRANSCRIPT SO FAR:
${transcript}

Your one-sentence nudge:`;
    try {
      const out = await window.claude.complete(prompt);
      $('#examinerOut').textContent = out.trim();
    } catch (err) {
      $('#examinerOut').textContent = 'Examiner failed: ' + (err.message || err);
    }
  }

  /* ---------- Step nav ---------- */
  function goToStep(step){
    const order = ['brief','script','knowledge','score','model','feedback'];
    const idx = order.indexOf(step);
    $$('.subnav button').forEach(b => {
      b.classList.toggle('is-on', b.dataset.step === step);
      const bi = order.indexOf(b.dataset.step);
      b.classList.toggle('done', bi > -1 && idx > -1 && bi < idx);
    });
    $$('.session-step').forEach(s => s.classList.toggle('is-on', s.dataset.step === step));
    if (step !== 'model' && audio.playing) stopAudio(false);
    if (step === 'feedback') {
      renderFeedbackSummary();
    }
    if (step === 'model') {
      // Guaranteed render path: if the ready model isn't on screen yet, render it now.
      const out = $('#modelOut');
      if (out && !out.querySelector('.mt-turn')) renderModelReady();
    }
  }

  /* ---------- Scorecard + feedback ---------- */
  function wireScoreScale(){
    $$('.rcgp-scale').forEach(scale => {
      scale.addEventListener('click', e => {
        const btn = e.target.closest('button');
        if (!btn) return;
        const dom = scale.dataset.dom;
        const v = +btn.dataset.v;
        state.scores[dom] = v;
        scale.querySelectorAll('button').forEach(b => b.classList.toggle('is-on', +b.dataset.v === v));
      });
    });
  }

  /* ---------- Shared scorecard tally (full /33 weighted) ---------- */
  // Reads the scorecard ticks (string keys 'dom:i') against c.scorecard and
  // returns weighted points + met/missed item lists per domain. Falls back to
  // the brief checkpoints if a case has no full scorecard authored.
  function scorecardResult(){
    const c = state.case;
    const sc = c.scorecard;
    if (sc) {
      const groups = { gs:sc.gs, tasks:sc.tasks, rto:sc.ro };
      const out = { byDom:{}, total:0, max:sc.total, met:[], missed:[] };
      Object.keys(groups).forEach(dom => {
        const items = groups[dom];
        const tickDom = (dom === 'rto') ? 'ro' : dom; // scorecard ticks are keyed 'ro:i'
        let n = 0, t = 0;
        items.forEach((it, i) => {
          t += it.pts;
          if (state.checkpoints[tickDom + ':' + i]) { n += it.pts; out.met.push({ dom, text: it.t, pts: it.pts }); }
          else out.missed.push({ dom, text: it.t, pts: it.pts });
        });
        out.byDom[dom] = { n, t };
        out.total += n;
      });
      return out;
    }
    // Fallback: brief checkpoints (1pt each, integer keys)
    const out = { byDom:{ tasks:{n:0,t:0}, rto:{n:0,t:0}, gs:{n:0,t:0} }, total:0, max:c.checkpoints.length, met:[], missed:[] };
    c.checkpoints.forEach((cp, i) => {
      const d = out.byDom[cp.dom] || out.byDom.gs; d.t++;
      if (state.checkpoints[i]) { d.n++; out.total++; out.met.push({ dom:cp.dom, text:cp.text, pts:1 }); }
      else out.missed.push({ dom:cp.dom, text:cp.text, pts:1 });
    });
    return out;
  }

  function renderFeedbackSummary(){
    const c = state.case;
    // Save reflections + notes
    state.keepText    = $('#reflectKeep').value;
    state.improveText = $('#reflectImprove').value;
    state.notesA      = $('#notesArea').value;
    state.notesB      = $('#notesArea2').value;

    const res = scorecardResult();
    const DOM = { tasks:{lbl:'Tasks', col:'#1e40af'}, rto:{lbl:'Relating', col:'#9d174d'}, gs:{lbl:'Global', col:'#15803d'} };
    const ORDER = ['gs','tasks','rto'];

    // Part 1 — "What you should do" playbook (History / Diagnosis / Management)
    const pbMount = $('#playbookMount');
    if (pbMount) {
      const pb = c.playbook;
      if (pb) {
        const esc = escapeHtml;
        const list = arr => (arr||[]).map(x => `<li>${esc(x)}</li>`).join('');
        // Sub-block: a labelled mini-section inside a card
        const sub = (ic, label, body) => body ? `<div class="pb-sub"><div class="pb-sub-h"><span>${ic}</span>${esc(label)}</div>${body}</div>` : '';
        const subList = (ic, label, arr) => (arr && arr.length) ? sub(ic, label, `<ul class="pb-list">${list(arr)}</ul>`) : '';
        const subText = (ic, label, txt) => txt ? sub(ic, label, `<p class="pb-sub-t">${esc(txt)}</p>`) : '';

        // History — structured (red flags / psychosocial / ICE) or legacy array
        let historyBody;
        if (pb.history && !Array.isArray(pb.history)) {
          historyBody =
            subList('🚩', 'Red flags to screen', pb.history.redFlags) +
            subList('🧩', 'Tailor psychosocial & impact', pb.history.psychosocial) +
            subList('💭', 'Draw out ICE', pb.history.ice) +
            subList('📋', 'Core data gathering', pb.history.core);
        } else {
          historyBody = `<ul class="pb-list">${list(pb.history)}</ul>`;
        }

        // Diagnosis — clinical phrasing + plain-English explanation
        const dxBody =
          (pb.diagnosis ? `<p class="pb-dx-text">${esc(pb.diagnosis)}</p>` : '') +
          (pb.diagnosisLay ? `<div class="pb-lay"><div class="pb-lay-h"><span>🗣️</span>In very plain English</div><p>${esc(pb.diagnosisLay)}</p></div>` : '');

        // Management — structured (reflect ICE / psychosocial / shared plan) or legacy array
        let mgmtBody;
        if (pb.management && !Array.isArray(pb.management)) {
          mgmtBody =
            subText('🪞', 'Reflect back their ICE', pb.management.reflectIce) +
            subText('🧩', 'Address the psychosocial aspect', pb.management.psychosocial) +
            subList('🤝', 'Build the plan together (shared decision)', pb.management.sharedPlan) +
            subList('🛟', 'Safety-net & follow-up', pb.management.safetyNet);
        } else {
          mgmtBody = `<ul class="pb-list">${list(pb.management)}</ul>`;
        }

        pbMount.innerHTML = `
          <div class="pb-stack">
            <div class="pb-card pb-history">
              <div class="pb-hdr"><span class="pb-ic">🩺</span><div><div class="pb-t">History</div><div class="pb-s">What to ask — red flags, psychosocial &amp; ICE</div></div></div>
              <div class="pb-body">${historyBody}</div>
            </div>
            <div class="pb-card pb-dx">
              <div class="pb-hdr"><span class="pb-ic">🎯</span><div><div class="pb-t">Diagnosis</div><div class="pb-s">How to phrase it — and in plain English</div></div></div>
              <div class="pb-body">${dxBody}</div>
            </div>
            <div class="pb-card pb-mgmt">
              <div class="pb-hdr"><span class="pb-ic">💊</span><div><div class="pb-t">Management</div><div class="pb-s">Reflect ICE, address psychosocial, share the plan</div></div></div>
              <div class="pb-body">${mgmtBody}</div>
            </div>
          </div>`;
      } else {
        pbMount.innerHTML = '';
      }
    }

    // Part 3 — Why candidates fail this station (own collapsible part)
    const pitMount = $('#pitfallsMount');
    if (pitMount) pitMount.innerHTML = pitfallsPanelHtml(c) || '<p style="font-size:13px;color:var(--muted)">No failure-pattern notes for this case yet.</p>';

    // Headline score out of 33 (or the case max) + band
    const pct = res.max ? res.total / res.max : 0;
    let band, bandCol;
    if (pct < 0.33) { band = 'Below pass standard'; bandCol = '#dc2626'; }
    else if (pct < 0.515) { band = 'Borderline'; bandCol = '#d97706'; }
    else if (pct < 0.758) { band = 'Pass standard'; bandCol = '#15803d'; }
    else { band = 'Strong pass'; bandCol = '#15803d'; }
    const score = $('#fbScore');
    if (score) score.innerHTML = `
      <div class="fb-score-num"><span class="fb-score-big">${res.total}</span><span class="fb-score-max">/ ${res.max} pts</span></div>
      <div class="fb-score-band" style="color:${bandCol}">${band}</div>
      <div class="fb-score-track"><div class="fb-score-fill" style="width:${Math.round(pct*100)}%;background:${bandCol}"></div></div>`;

    // Heatmap — weighted points per domain
    const h = $('#heatmap');
    const cellColor = (n,t)=>{ if(!t) return '#f1f5f9'; const p=n/t; return p>=0.75?'#d1fae5':p>=0.5?'#fef3c7':'#fee2e2'; };
    if (h) h.innerHTML = ORDER.map(d => `
      <div class="heat-cell" style="background:${cellColor(res.byDom[d].n,res.byDom[d].t)}">
        <div class="hc-lbl">${DOM[d].lbl}</div>
        <div class="hc-val">${res.byDom[d].n}/${res.byDom[d].t}</div>
      </div>`).join('');

    // Score summary + missed items (grouped by domain)
    const cp = $('#cpSummary');
    if (cp) {
      const missedByDom = ORDER.map(d => {
        const items = res.missed.filter(m => m.dom === d);
        if (!items.length) return '';
        return `<div style="margin-top:8px"><b style="color:${DOM[d].col}">${DOM[d].lbl} — not ticked:</b><br>${items.map(m => '• ' + escapeHtml(m.text) + (m.pts>1?` <span style="color:#94a3b8">(${m.pts}pt)</span>`:'')).join('<br>')}</div>`;
      }).join('');
      cp.innerHTML = `
        <b>Total score:</b> ${res.total}/${res.max} points across the three SCA domains.<br>
        <span style="color:${DOM.tasks.col}">Tasks:</span> ${res.byDom.tasks.n}/${res.byDom.tasks.t} ·
        <span style="color:${DOM.rto.col}">Relating:</span> ${res.byDom.rto.n}/${res.byDom.rto.t} ·
        <span style="color:${DOM.gs.col}">Global:</span> ${res.byDom.gs.n}/${res.byDom.gs.t}
        ${res.missed.length && res.missed.length < (res.met.length + res.missed.length) ? missedByDom : (res.missed.length ? '' : '<br><br>✓ Every scorecard point ticked — a comprehensive consultation.')}`;
    }

    // Word-pictures — what each grade sounds like on THIS station
    const wpMount = $('#wordPicMount');
    if (wpMount) {
      if (c.wordPics) {
        const hl = pct < 0.515 ? 'fail' : pct < 0.758 ? 'pass' : 'exc';
        const WP = [
          ['fail','🔴','What a Fail sounds like','#b91c1c','#fef2f2'],
          ['pass','🟢','What a Pass sounds like','#15803d','#f0fdf4'],
          ['exc','🏆','What Excellent sounds like','#7e22ce','#faf5ff']
        ];
        wpMount.innerHTML = `
          <div class="wp-title">Examiner word-pictures — where does your attempt honestly sit?</div>
          <div class="wp-grid">${WP.map(k => `
            <div class="wp-card${(res.total > 0 && k[0] === hl) ? ' wp-here' : ''}" style="--wc:${k[3]};--wb:${k[4]}">
              <div class="wp-h">${k[1]} ${k[2]}</div>
              <div class="wp-t">${escapeHtml(c.wordPics[k[0]])}</div>
              ${(res.total > 0 && k[0] === hl) ? '<div class="wp-flag">Your scorecard ticks put you here</div>' : ''}
            </div>`).join('')}</div>`;
      } else wpMount.innerHTML = '';
    }

    // Cue recognition + time discipline
    const ctMount = $('#cueTimeMount');
    if (ctMount) {
      const cues = (c.script && c.script.cues) || [];
      const TIMECHK = [
        'Opened with a genuinely open question and let the patient finish — the first minute was theirs, uninterrupted',
        'Summarised back and shared my working diagnosis by minute 6',
        'Started management — options offered, not a monologue — by minute 7',
        'Safety-netted with named symptoms, a timeframe and a route back before the buzzer'
      ];
      ctMount.innerHTML = `
        <div class="ct-block">
          <div class="ct-block-h"><span class="ctb-ic">🎭</span><div><b>Cue recognition</b><small>This station planted ${cues.length} cues. The Relating-to-Others differentiator is noticing them AND responding out loud — tick only if you did both.</small></div></div>
          <div class="ct-items">${cues.map((cu, i) => `<label class="ct-item"><input type="checkbox" data-cue="${i}"${state.cueChecks[i] ? ' checked' : ''}><span>${escapeHtml(cu)}</span></label>`).join('')}</div>
          <div class="ct-verdict" id="cueVerdict"></div>
        </div>
        <div class="ct-block">
          <div class="ct-block-h"><span class="ctb-ic">⏱️</span><div><b>Time discipline</b><small>The mechanical reasons candidates fail — tick what you actually did, honestly</small></div></div>
          <div class="ct-items">${TIMECHK.map((tc, i) => `<label class="ct-item"><input type="checkbox" data-time="${i}"${state.timeChecks[i] ? ' checked' : ''}><span>${escapeHtml(tc)}</span></label>`).join('')}</div>
          <div class="ct-verdict" id="timeVerdict"></div>
        </div>`;
      const cueVerdict = () => {
        const n = Object.values(state.cueChecks).filter(Boolean).length;
        const v = $('#cueVerdict'); if (!v) return;
        if (!cues.length) { v.textContent = ''; return; }
        if (n === cues.length) { v.className = 'ct-verdict ok'; v.innerHTML = '✓ All ' + cues.length + ' cues caught and answered — this is what Excellent sounds like in Relating to Others.'; }
        else if (n === 0) { v.className = 'ct-verdict bad'; v.innerHTML = '✗ No cues responded to. However good the medicine, Relating to Others caps at borderline when the planted cues go unanswered. Re-read the patient script and re-run the station.'; }
        else { v.className = 'ct-verdict mid'; v.innerHTML = n + '/' + cues.length + ' cues caught — go back to the script and find the ones that floated past you.'; }
      };
      const timeVerdict = () => {
        const v = $('#timeVerdict'); if (!v) return;
        const t = state.timeChecks;
        if (!t[2]) { v.className = 'ct-verdict bad'; v.innerHTML = '⚠ <b>Management not reached by minute 7.</b> This is the single commonest mechanical fail: a beautiful history with no plan scores nothing in Clinical Management. Practise closing the history at 5–6 minutes.'; }
        else if (!t[3]) { v.className = 'ct-verdict mid'; v.innerHTML = 'Management on time — but a consultation without a specific safety-net (named symptoms + timeframe + route back) drops marks at the close.'; }
        else if (t[0] && t[1] && t[2] && t[3]) { v.className = 'ct-verdict ok'; v.innerHTML = '✓ Exam-shaped pacing — open start, summary by 6, management by 7, safety-netted close.'; }
        else { v.className = 'ct-verdict mid'; v.innerHTML = 'Management arrived on time — tighten the opening and the mid-consultation summary to buy yourself more planning minutes.'; }
      };
      ctMount.querySelectorAll('input[data-cue]').forEach(cb => cb.addEventListener('change', () => { state.cueChecks[cb.dataset.cue] = cb.checked; cueVerdict(); }));
      ctMount.querySelectorAll('input[data-time]').forEach(cb => cb.addEventListener('change', () => { state.timeChecks[cb.dataset.time] = cb.checked; timeVerdict(); }));
      cueVerdict(); timeVerdict();
    }

    // Worked phrases + learning
    if ($('#workedList')) $('#workedList').innerHTML = (c.worked || []).map(w => `
      <div class="worked-item">
        <div class="wl-lbl">${escapeHtml(w.lbl)}</div>
        <div class="wl-txt">${escapeHtml(w.txt)}</div>
      </div>`).join('');
    if ($('#learningBox')) $('#learningBox').innerHTML = `<b>Learning point.</b> ${escapeHtml(c.learning || '')}`;

    // "Don't say" — formulaic phrases examiners hear all day, paired with the real thing
    const av = $('#avoidList');
    if (av) {
      av.innerHTML = (c.avoid && c.avoid.length) ? `
        <div class="av-title"><span>🚫</span><div><b>Don't say it like this</b><small>Examiners hear these rehearsed lines ten times a day — formulaic empathy reads as no empathy. Learn the principle, not the script.</small></div></div>
        <div class="av-list">${c.avoid.map(a => `
          <div class="av-pair">
            <div class="av-dont"><span class="av-tag">Heard all day</span>${escapeHtml(a.dont)}</div>
            <div class="av-do"><span class="av-tag">Sounds like you</span>${escapeHtml(a.instead)}</div>
            ${a.why ? `<div class="av-why">${escapeHtml(a.why)}</div>` : ''}
          </div>`).join('')}</div>` : '';
    }
  }

  /* ---------- AI feedback ---------- */
  async function getAIFeedback(){
    if (!window.claude || !window.claude.complete) {
      $('#aiStatus').textContent = 'AI helper not available in this preview.';
      return;
    }
    state.keepText    = $('#reflectKeep').value;
    state.improveText = $('#reflectImprove').value;

    const c = state.case;
    const res = scorecardResult();
    const dl = { tasks:'Tasks', rto:'Relating to others', gs:'Global skills' };
    const ticked = res.met.map(m => `- [${dl[m.dom]||m.dom}] ${m.text}${m.pts>1?` (${m.pts}pt)`:''}`);
    const missed = res.missed.map(m => `- [${dl[m.dom]||m.dom}] ${m.text}${m.pts>1?` (${m.pts}pt)`:''}`);
    const scoreLine = `Total ${res.total}/${res.max} points — Tasks ${res.byDom.tasks.n}/${res.byDom.tasks.t}, Relating ${res.byDom.rto.n}/${res.byDom.rto.t}, Global ${res.byDom.gs.n}/${res.byDom.gs.t}.`;
    // Prefer the chat transcript if the user used AI patient mode
    const chatTranscript = state.chatMessages
      .filter(m => m.role !== 'system')
      .map(m => (m.role === 'doctor' ? 'Doctor' : 'Patient') + ': ' + m.text)
      .join('\n');
    const transcript = chatTranscript || state.transcript || '';

    // Model-answer skeleton — the scored doctor moves (the UI promises "feedback
    // vs the model answer", so the examiner must actually see the model)
    const modelMoves = (c.model || [])
      .filter(t => t.who === 'dr' && t.dom)
      .map(t => `- [${dl[t.dom]||t.dom}] ${t.text.length > 150 ? t.text.slice(0,150) + '…' : t.text}`);
    // Known failure patterns for this station (examiner pitfall library)
    const failPatterns = ((c.pitfalls && c.pitfalls.items) || [])
      .map(p => `- [${dl[p.dom]||p.dom}] ${p.fail.length > 120 ? p.fail.slice(0,120) + '…' : p.fail}`);

    const prompt = `You are an RCGP SCA examiner giving structured, constructive feedback to a GP trainee after a 12-minute simulated consultation.

CASE: ${c.title} (${c.type} · ${c.meta.system})
DOCTOR BRIEF: ${c.brief}
PATIENT'S HIDDEN CONCERNS: ${c.script.ice.concerns}

MODEL-ANSWER KEY MOVES (the gold-standard run candidates are compared against):
${modelMoves.join('\n') || '(none on file)'}

KNOWN FAILURE PATTERNS FOR THIS STATION (check the candidate against these):
${failPatterns.join('\n') || '(none on file)'}

CANDIDATE SCORE (against the full SCA consultation scorecard, max ${res.max} points): ${scoreLine}
SCORECARD POINTS THE CANDIDATE ACHIEVED:
${ticked.join('\n') || '(none)'}
SCORECARD POINTS THE CANDIDATE DID NOT ACHIEVE:
${missed.join('\n') || '(none)'}

SELF-REFLECTION — KEEP: ${state.keepText || '(empty)'}
SELF-REFLECTION — IMPROVE: ${state.improveText || '(empty)'}
TRANSCRIPT (if any): ${(transcript || '').slice(0, 3500) || '(none provided)'}

Give feedback in exactly this format, using the RCGP three domains. If there is no transcript, base it on the scorecard ticks and reflections and say so in one short sentence first.

**Three things to keep**
1. (specific, behavioural — name where it matched a model-answer move)
2. (specific, behavioural)
3. (specific, behavioural)

**Three things to improve**
1. (specific gap — if it matches a known failure pattern above, name it — with a phrased example of what to do instead, taken or adapted from the model answer)
2. (specific)
3. (specific)

**Domain grades** (grade each Clear Fail / Fail / Pass / Clear Pass, as in the real SCA)
- Data gathering & diagnosis (Tasks): grade — 1 sentence
- Relating to Others: grade — 1 sentence
- Clinical management (Global): grade — 1 sentence

**Single most important learning** (one sentence).

Tone: warm, direct, RCGP-style. Reference UK guidance briefly where relevant. Keep the whole response under ~380 words.`;

    $('#aiStatus').textContent = 'Thinking…';
    $('#aiOutput').textContent = '';
    try {
      const out = await window.claude.complete(prompt);
      $('#aiOutput').innerHTML = mdLite(out);
      $('#aiStatus').textContent = 'AI feedback generated.';
    } catch (err) {
      $('#aiStatus').textContent = 'AI feedback failed: ' + (err.message || err);
    }
  }

  // Minimal markdown for examiner output: escape, then **bold** + line breaks.
  function mdLite(s){
    return escapeHtml(String(s || '').trim())
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  /* ---------- Browser speech recognition for transcript ---------- */
  function transcribeRecording(){
    // We can't decode a webm blob with Web Speech API directly.
    // Instead: re-run the live mic for a quick playback summary.
    // Simpler best-effort: ask the user to dictate a 60-second summary now.
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      $('#aiStatus').textContent = 'Browser speech recognition not available. Use the Reflection boxes instead — AI will use them.';
      return;
    }
    const rec = new SR();
    rec.lang = 'en-GB';
    rec.interimResults = true;
    rec.continuous = true;
    let chunks = [];
    rec.onresult = (e) => {
      let interim = '', final = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) final += t + ' '; else interim += t;
      }
      chunks.push(final);
      state.transcript = chunks.join(' ').trim() + ' ' + interim;
      $('#aiStatus').textContent = 'Transcribing… speak a summary of your consultation. Click "Stop transcribing" when done.';
      $('#aiOutput').textContent = state.transcript;
    };
    rec.onerror = (e) => { $('#aiStatus').textContent = 'Transcription error: ' + e.error; };
    rec.onend = () => {
      $('#aiTranscribe').textContent = 'Transcribe last recording (browser SR)';
      $('#aiTranscribe').onclick = transcribeRecording;
      $('#aiStatus').textContent = 'Transcript captured. Now click "Get AI feedback".';
    };
    rec.start();
    $('#aiTranscribe').textContent = 'Stop transcribing';
    $('#aiTranscribe').onclick = () => { try { rec.stop(); } catch(e){} };
  }

  /* ---------- Util ---------- */
  function escapeHtml(s){ return String(s||'').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

  /* ---------- Wire ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    renderCaseGrid();
    try {
      var qp = new URLSearchParams(location.search).get('case');
      if (qp && CASES.some(function(c){ return c.id === qp; })) startCase(qp);
    } catch(e){}

    // Timer buttons
    $('#timerStart').addEventListener('click', startTimer);
    $('#timerPause').addEventListener('click', pauseTimer);
    $('#timerReset').addEventListener('click', resetTimer);
    $('#exitSession').addEventListener('click', exitSession);

    // Subnav
    $$('.subnav button').forEach(b => b.addEventListener('click', () => goToStep(b.dataset.step)));

    // Reveal/hide script
    $('#revealAll').addEventListener('click', () => $('#scriptBody').style.opacity = '1');
    $('#hideScript').addEventListener('click', () => $('#scriptBody').style.opacity = '0.04');

    // Recording
    $('#recToggle').addEventListener('click', toggleRecording);

    // AI
    $('#aiFeedback').addEventListener('click', getAIFeedback);
    $('#aiTranscribe').addEventListener('click', transcribeRecording);

    // Practice-mode toggle (script vs AI patient)
    $$('.mp-btn').forEach(b => b.addEventListener('click', () => setPracticeMode(b.dataset.mode)));
    $('#chatSend').addEventListener('click', sendDoctorMessage);
    $('#chatInput').addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendDoctorMessage(); }
    });
    $('#chatReset').addEventListener('click', resetChat);
    $('#chatMic').addEventListener('click', toggleChatMic);
    const lsEnd = $('#lsEnd'); if (lsEnd) lsEnd.addEventListener('click', stopLive);
    const lsRec = $('#lsRec'); if (lsRec) lsRec.addEventListener('click', toggleRecording);
    const lsRepeat = $('#lsRepeat'); if (lsRepeat) lsRepeat.addEventListener('click', () => {
      const lastPt = [...state.chatMessages].reverse().find(m => m.role === 'patient');
      if (lastPt) { if (state.liveRec) { try { state.liveRec.stop(); } catch(e){} state.liveRec = null; } liveCaption('pt', lastPt.text); speakPatient(lastPt.text); }
    });
    $('#examinerNudge').addEventListener('click', getExaminerNudge);

    // Live voice + model consultation
    const ls = $('#liveStart'); if (ls) ls.addEventListener('click', toggleLive);
    const vt = $('#voiceToggle'); if (vt) vt.addEventListener('click', toggleVoice);
    const gm = $('#genModel'); if (gm) gm.addEventListener('click', generateModel);
    const ap = $('#audioPlay'); if (ap) ap.addEventListener('click', toggleAudio);
    const asp = $('#audioStop'); if (asp) asp.addEventListener('click', () => stopAudio(false));
    const asd = $('#audioSpeed'); if (asd) asd.addEventListener('change', () => {
      audio.rate = parseFloat(asd.value) || 1;
      if (audio.playing) { try { speechSynthesis.cancel(); } catch(e){} speakAudioLine(); }
    });
    if ('speechSynthesis' in window) { try { speechSynthesis.onvoiceschanged = () => {}; speechSynthesis.getVoices(); } catch(e){} }

    // Notes synced between step 1 and step 2 (single textarea-in-2-places convenience)
    $('#notesArea').addEventListener('input',  e => { state.notesA = e.target.value; $('#notesArea2').value = e.target.value; });
    $('#notesArea2').addEventListener('input', e => { state.notesB = e.target.value; $('#notesArea').value  = e.target.value; });
  });
})();
