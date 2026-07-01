/* ============================================
   Reasoning GP — Lab Results Actioning Tool engine
   Per-result action rows + headline acuity verdict
   ============================================

   USAGE — standalone:
     <link rel="stylesheet" href="assets/labs.css">
     <div data-labs="generic"></div>
     <script src="assets/labs.js"></script>
     <script src="assets/labs/generic.js"></script>

   USAGE — embedded as accordion in a case:
     <div data-labs="generic" data-mode="accordion" data-filter="hypertension"></div>

   DATA SHAPE
   ----------
   RGPLabs.register('generic', {
     title, subtitle, guideline,
     context: [{id, kind:'check'|'number'|'select', label, options, default}],
     panels: [{
       id, label, topics:['hypertension', 'tatt', ...],   // filter hints
       tests: [{
         id, label, unit, ref:[lo, hi] | refByCtx(ctx) => [lo,hi], step,
         topics:['hypertension', ...],                    // per-test topic filter
         rules: [{
           id, action:'emergency'|'cancer'|'urgent'|'treat'|'review'|'repeat'|'refer'|'recall'|'annotate',
           label, rule, timeframe,
           patientPhrase, noteTemplate,
           source, sourceUrl,
           handoff: {tool:'triage'|'medchooser', topic, label},
           when(v, ctx, all) -> bool
         }]
       }]
     }],
     sources:[{label,url}]
   })
   ============================================ */
(function(){
  const TOPICS = {};
  const ACTIONS = {
    emergency:  { icon:'🔴', cls:'a-emer',  hl:'is-emer',  label:'Emergency',          rank:9 },
    cancer:     { icon:'🟣', cls:'a-canc',  hl:'is-canc',  label:'Suspected cancer · 2WW', rank:8 },
    urgent:     { icon:'🟠', cls:'a-urg',   hl:'is-urg',   label:'Urgent',             rank:7 },
    review:     { icon:'⚠',  cls:'a-rev',   hl:'is-rev',   label:'Drug review',        rank:6 },
    treat:      { icon:'💊', cls:'a-treat', hl:'is-treat', label:'Treat',              rank:5 },
    refer:      { icon:'↗',  cls:'a-ref',   hl:'is-ref',   label:'Refer (non-urgent)', rank:4 },
    repeat:     { icon:'♻',  cls:'a-rep',   hl:'is-rep',   label:'Repeat',             rank:3 },
    recall:     { icon:'📞', cls:'a-rec',   hl:'is-rec',   label:'Routine recall',     rank:2 },
    annotate:   { icon:'📝', cls:'a-ann',   hl:'is-ann',   label:'Annotate',           rank:1 },
  };

  const RGPLabs = {
    register(name, data){ TOPICS[name] = data; this._notify(name); },
    list(){ return Object.keys(TOPICS); },
    get(n){ return TOPICS[n]; },
    actions: ACTIONS,
    _pending:[],
    _notify(name){
      this._pending = this._pending.filter(it => {
        if (it.name === name) { it.cb(TOPICS[name]); return false; }
        return true;
      });
    },
    _whenReady(name, cb){
      if (TOPICS[name]) cb(TOPICS[name]);
      else this._pending.push({name, cb});
    },
    mount(el, topic){
      const inst = new LabInstance(el, topic);
      this._whenReady(topic, data => inst.setTopic(topic, data));
      return inst;
    },
    autoMount(){
      document.querySelectorAll('[data-labs]').forEach(el => {
        if (el.__la_mounted) return;
        el.__la_mounted = true;
        const t = el.dataset.labs;
        if (t) this.mount(el, t);
      });
    }
  };

  // -------- PASTE PARSER --------
  // Best-effort parsing of multi-line lab dumps. Maps common aliases.
  const ALIASES = {
    hb:['hb','haemoglobin','hgb','haemoglobin (g/l)','haemoglobin g/l'],
    mcv:['mcv','mean cell volume'],
    wcc:['wcc','wbc','white cell count','white cells','leucocyte count'],
    neut:['neut','neutrophils','neut count','neutrophil count'],
    lymph:['lymph','lymphocytes','lymphocyte count'],
    plt:['plt','platelets','platelet count','plat'],
    na:['na','sodium','sodium level'],
    k:['k','potassium','potassium level'],
    cr:['cr','creatinine','serum creatinine'],
    urea:['urea','blood urea'],
    egfr:['egfr','egfr (ckdepi)','egfr ckdepi','glomerular filtration rate'],
    acr:['acr','urine acr','urine albumin/creatinine','albumin/creatinine ratio'],
    alt:['alt','alanine aminotransferase'],
    ast:['ast','aspartate aminotransferase'],
    alp:['alp','alkaline phosphatase'],
    ggt:['ggt','gamma-gt','gamma glutamyl'],
    bili:['bili','bilirubin','total bilirubin'],
    alb:['alb','albumin','serum albumin'],
    tsh:['tsh','thyroid stimulating hormone'],
    ft4:['ft4','free t4','free thyroxine'],
    ft3:['ft3','free t3','free triiodothyronine'],
    hba1c:['hba1c','glycated haemoglobin','hba1c ifcc'],
    glucose:['glucose','random glucose','fasting glucose','plasma glucose'],
    tc:['tc','total cholesterol','cholesterol'],
    hdl:['hdl','hdl cholesterol'],
    ldl:['ldl','ldl cholesterol'],
    tg:['tg','triglycerides'],
    nonhdl:['non-hdl','non hdl','non-hdl cholesterol'],
    ca:['ca','adj ca','adjusted calcium','corrected calcium','calcium'],
    po4:['po4','phosphate','serum phosphate'],
    vitd:['vit d','vitamin d','25-oh vit d','25 oh vit d','25-hydroxyvitamin d'],
    ferritin:['ferritin','serum ferritin'],
    transferrin:['transferrin','transferrin saturation'],
    b12:['b12','vitamin b12','cobalamin'],
    folate:['folate','serum folate'],
    inr:['inr','international normalised ratio'],
    aptt:['aptt','activated partial thromboplastin time'],
    fib:['fibrinogen'],
    crp:['crp','c reactive protein','c-reactive protein'],
    esr:['esr','erythrocyte sedimentation rate'],
    pv:['pv','plasma viscosity'],
    psa:['psa','prostate specific antigen'],
    fit:['fit','faecal immunochemical test','qfit'],
    calpro:['calprotectin','faecal calprotectin'],
    urate:['urate','serum urate','uric acid'],
    amylase:['amylase','serum amylase','lipase'],
    troponin:['troponin','trop','trop i','troponin i','troponin t','hs trop'],
  };

  function parsePaste(text){
    const out = {};
    // Split on newlines, semicolons, and commas — NOT on "." (would break decimals like K 6.3)
    const lines = text.split(/\r?\n|;|,/);
    const aliasMap = {};
    for (const id of Object.keys(ALIASES)) {
      for (const al of ALIASES[id]) aliasMap[al.toLowerCase()] = id;
    }
    for (const raw of lines) {
      const line = raw.toLowerCase().trim();
      if (!line) continue;
      // Try formats: "Hb 102", "Hb: 102", "Hb = 102", "Hb 102 g/L", "Hb 102 g/l 120-170"
      // Find the longest matching alias at the start of the line
      let matchedId = null, matchedAlias = '';
      for (const a in aliasMap) {
        if (line.startsWith(a + ' ') || line.startsWith(a + ':') || line.startsWith(a + '=') || line.startsWith(a + '\t')) {
          if (a.length > matchedAlias.length) { matchedAlias = a; matchedId = aliasMap[a]; }
        }
      }
      if (!matchedId) {
        // also try "value" appearing after the alias name with no separator (e.g. "K+ 6.2 mmol/L")
        const trimmed = line.replace(/[\+\-\*]/g, '').trim();
        for (const a in aliasMap) {
          if (trimmed.startsWith(a + ' ')) {
            if (a.length > matchedAlias.length) { matchedAlias = a; matchedId = aliasMap[a]; }
          }
        }
      }
      if (!matchedId) continue;
      const rest = line.slice(matchedAlias.length);
      const numMatch = rest.match(/-?\d+(\.\d+)?/);
      if (numMatch) out[matchedId] = parseFloat(numMatch[0]);
    }
    return out;
  }

  class LabInstance {
    constructor(host, topicName){
      this.host = host;
      this.topicName = topicName;
      this.state = { values:{}, prev:{}, ctx:{}, mode:'clinic', prevOpen:{}, panelOpen:{} };
      this.accordion = host.dataset.mode === 'accordion';
      this.topicPicker = host.dataset.topicPicker === '1';
      this.filter = host.dataset.filter || null;  // topic filter for panels
      host.classList.add('la');
      host.innerHTML = `<div class="la-rows" style="padding:24px;color:#64748b;font-style:italic;font-size:13px">Loading lab data…</div>`;
    }

    setTopic(name, data){
      this.topicName = name;
      this.topic = data;
      // default ctx
      const ctx = {};
      (data.context||[]).forEach(c => {
        if (c.default !== undefined) ctx[c.id] = c.default;
      });
      this.state.ctx = ctx;
      if (!this.state.panelOpen) this.state.panelOpen = {};
      // remember the first panel id so it opens by default
      this._firstPanelId = (data.panels && data.panels[0]) ? data.panels[0].id : null;
      this.render();
    }

    setMode(m){ this.state.mode = m; this.render(); }
    setValue(id, v){
      if (v === '' || v === null || isNaN(v)) delete this.state.values[id];
      else this.state.values[id] = v;
      this.renderResults();
      this.markAbnormal();
    }
    setPrev(id, v, days){
      const cur = this.state.prev[id] || {};
      if (v !== undefined) cur.v = (v === '' || v === null || isNaN(v)) ? null : v;
      if (days !== undefined) cur.days = (days === '' || days === null || isNaN(days)) ? null : days;
      if (cur.v == null && cur.days == null) delete this.state.prev[id];
      else this.state.prev[id] = cur;
      this.renderResults();
    }
    togglePrevOpen(id){
      this.state.prevOpen[id] = !this.state.prevOpen[id];
      // Re-render just the inputs so the row expands
      this.renderInputs();
      this.markAbnormal();
    }
    // Collapsible test panels (FBC, U&E, LFTs …)
    _panelOpen(p){
      if (this.state.panelOpen && (p.id in this.state.panelOpen)) return this.state.panelOpen[p.id];
      // default: open the first visible panel, plus any panel that already has values
      const hasVal = (p.tests||[]).some(t => this.state.values[t.id] != null);
      return hasVal || p.id === this._firstPanelId;
    }
    togglePanelOpen(id, panel){
      if (!this.state.panelOpen) this.state.panelOpen = {};
      const cur = panel ? this._panelOpen(panel) : !!this.state.panelOpen[id];
      this.state.panelOpen[id] = !cur;
      this.renderInputs();
      this.markAbnormal();
    }
    expandAllPanels(open){
      if (!this.state.panelOpen) this.state.panelOpen = {};
      (this.topic.panels||[]).forEach(p => { this.state.panelOpen[p.id] = open; });
      this.renderInputs();
      this.markAbnormal();
    }
    // Compute trend metadata for a test
    _meta(testId){
      const cur = this.state.values[testId];
      const p = this.state.prev[testId];
      if (cur == null || !p || p.v == null) return { trend: cur == null ? null : 'new', prev: p || null };
      const deltaAbs = cur - p.v;
      const deltaPct = p.v !== 0 ? (deltaAbs / Math.abs(p.v)) * 100 : null;
      // ~5% threshold for "stable"; tunable per assay
      const stableThresh = 5;
      let trend = 'stable';
      if (deltaPct != null && deltaPct > stableThresh) trend = 'rising';
      else if (deltaPct != null && deltaPct < -stableThresh) trend = 'falling';
      return {
        trend, deltaAbs, deltaPct,
        prev: { v: p.v, days: p.days != null ? p.days : null },
        daysSince: p.days != null ? p.days : null,
      };
    }
    setCtx(id, v){
      if (v === '' || v === null || v === false) delete this.state.ctx[id];
      else this.state.ctx[id] = v;
      this.renderResults();
      this.markAbnormal();
    }
    reset(){
      this.state.values = {};
      this.state.prev = {};
      this.state.prevOpen = {};
      this.state.panelOpen = {};
      const ctx = {};
      (this.topic.context||[]).forEach(c => { if (c.default !== undefined) ctx[c.id] = c.default; });
      this.state.ctx = ctx;
      this.render();
    }

    fillFromPaste(text){
      const parsed = parsePaste(text);
      Object.assign(this.state.values, parsed);
      // auto-open any panel that received a pasted value
      (this.topic.panels||[]).forEach(p => {
        if ((p.tests||[]).some(t => parsed[t.id] != null)) this.state.panelOpen[p.id] = true;
      });
      this.render();
      this._toast(`Parsed ${Object.keys(parsed).length} value${Object.keys(parsed).length===1?'':'s'} from paste`);
    }

    // -------- render --------
    render(){
      if (!this.topic) return;
      this.host.className = 'la' + (this.state.mode === 'sca' ? ' is-sca' : '');
      const inner = this._inner();
      if (this.accordion) {
        this.host.innerHTML = `
          <details class="la-acc">
            <summary class="la-acc-btn">
              <span class="la-acc-lbl">
                <span class="la-acc-ic">🧪</span>
                <span class="la-acc-text">
                  <b>Lab results actioning tool</b>
                  <small>Per-result GP next-steps · NICE / BSH / Renal / BMJ Best Practice</small>
                </span>
              </span>
              <span class="la-acc-caret">▶</span>
            </summary>
            <div class="la-acc-body">${inner}</div>
          </details>`;
      } else {
        this.host.innerHTML = inner;
      }
      this._wire();
      this.renderInputs();
      this.renderResults();
      this.markAbnormal();
    }

    _inner(){
      const t = this.topic;
      return `
        <div class="la-head">
          <div class="la-head-l">
            <div class="la-eyebrow">Lab results actioning</div>
            <div class="la-title">${t.title}</div>
            ${t.subtitle ? `<div class="la-sub">${t.subtitle}</div>` : ''}
            ${t.guideline ? `<div class="la-source-pill">${t.guideline}</div>` : ''}
          </div>
          <div class="la-head-r">
            <div class="la-mode" role="tablist" aria-label="Display mode">
              <button data-mode="clinic" class="${this.state.mode==='clinic'?'active':''}">Clinic detail</button>
              <button data-mode="sca" class="${this.state.mode==='sca'?'active':''}">SCA view</button>
            </div>
          </div>
        </div>
        ${this.topicPicker ? this._topicPicker() : ''}
        <div class="la-paste-strip">
          <div class="la-paste-strip-l">
            <h5>Paste lab results from EMIS / SystmOne</h5>
            <textarea data-paste placeholder="Paste lines like:\nHb 102 g/L (130-170)&#10;K+ 6.2 mmol/L&#10;HbA1c 62 mmol/mol&#10;Ferritin 8 µg/L"></textarea>
          </div>
          <div class="la-paste-strip-r">
            <button class="la-btn-fill" data-act="fill">⤴ Parse &amp; fill</button>
            <div class="la-paste-hint">Handles common lab formats — anything it can't parse just stays blank, fill manually.</div>
          </div>
        </div>
        <div class="la-body">
          <aside class="la-inputs" aria-label="Inputs"></aside>
          <div class="la-verdict"></div>
        </div>
        <footer class="la-footer">
          <div class="la-footer-l">
            <h5>Sources</h5>
            <div class="la-sources-list">
              ${(t.sources||[]).map(s => `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label} ↗</a>`).join('')}
            </div>
          </div>
          <div class="la-disclaimer">
            <strong>Educational use only.</strong> Always verify against the live NICE CKS, BNF, BMJ Best Practice, and your local pathway. Lab thresholds shift with assay and population — treat the tool as a checklist, not a clinician.
          </div>
        </footer>`;
    }

    _topicPicker(){
      const all = RGPLabs.list();
      return `
        <div class="la-topic-picker">
          <span class="la-topic-picker-label">Topic</span>
          <div class="la-topic-pills">
            ${all.map(t => `<button class="la-topic-pill ${t===this.topicName?'active':''}" data-topic="${t}">${TOPICS[t].title}</button>`).join('')}
          </div>
        </div>`;
    }

    _wire(){
      this.host.querySelectorAll('.la-mode button').forEach(btn => btn.addEventListener('click', () => this.setMode(btn.dataset.mode)));
      this.host.querySelectorAll('.la-topic-pill').forEach(b => b.addEventListener('click', () => {
        const t = b.dataset.topic;
        if (TOPICS[t]) this.setTopic(t, TOPICS[t]);
      }));
      const fillBtn = this.host.querySelector('[data-act="fill"]');
      const textarea = this.host.querySelector('[data-paste]');
      if (fillBtn && textarea) {
        fillBtn.addEventListener('click', () => this.fillFromPaste(textarea.value));
      }
    }

    // ---- inputs ----
    renderInputs(){
      const panel = this.host.querySelector('.la-inputs');
      if (!panel) return;
      const t = this.topic;

      const ctxHtml = (t.context||[]).map(c => this._renderCtx(c)).join('');
      const panels = (t.panels||[]).filter(p => {
        if (!this.filter) return true;
        const allowed = (p.topics||[]);
        return allowed.length === 0 || allowed.includes(this.filter);
      });

      panel.innerHTML = `
        <div class="la-inputs-head">
          <h4>Patient context · Lab values</h4>
          <div class="la-inputs-head-btns">
            <button class="la-expand-all" type="button" data-expand-all>Expand all</button>
            <button class="la-expand-all" type="button" data-collapse-all>Collapse all</button>
            <button class="la-reset" type="button">Reset</button>
          </div>
        </div>
        ${ctxHtml ? `<div class="la-ctx"><div class="la-ctx-t">Patient context</div><div class="la-ctx-row">${ctxHtml}</div></div>` : ''}
        <div class="la-panels-hint">Tap a panel to open it and enter its results.</div>
        ${panels.map(p => this._renderPanel(p)).join('')}
      `;

      panel.querySelector('.la-reset').addEventListener('click', () => this.reset());
      panel.querySelector('[data-expand-all]')?.addEventListener('click', () => this.expandAllPanels(true));
      panel.querySelector('[data-collapse-all]')?.addEventListener('click', () => this.expandAllPanels(false));
      panel.querySelectorAll('[data-panel-toggle]').forEach(btn => {
        btn.addEventListener('click', e => { e.preventDefault(); this.togglePanelOpen(btn.dataset.panelToggle); });
      });

      // ctx
      panel.querySelectorAll('[data-ctx-num]').forEach(inp => {
        inp.addEventListener('input', e => {
          const v = e.target.value === '' ? null : Number(e.target.value);
          this.setCtx(e.target.dataset.ctxNum, v);
        });
      });
      panel.querySelectorAll('[data-ctx-bool]').forEach(inp => {
        inp.addEventListener('change', e => this.setCtx(e.target.dataset.ctxBool, e.target.checked));
      });
      panel.querySelectorAll('[data-ctx-sel]').forEach(sel => {
        sel.addEventListener('change', e => {
          const v = e.target.value === '' ? null : e.target.value;
          this.setCtx(e.target.dataset.ctxSel, v);
        });
      });

      // values
      panel.querySelectorAll('input[data-test]').forEach(inp => {
        inp.addEventListener('input', e => {
          const v = e.target.value === '' ? null : Number(e.target.value);
          this.setValue(e.target.dataset.test, v);
        });
      });

      // Prev toggles
      panel.querySelectorAll('[data-prev-toggle]').forEach(btn => {
        btn.addEventListener('click', e => {
          e.preventDefault();
          this.togglePrevOpen(btn.dataset.prevToggle);
        });
      });
      panel.querySelectorAll('[data-prev-v]').forEach(inp => {
        inp.addEventListener('input', e => {
          const v = e.target.value === '' ? null : Number(e.target.value);
          this.setPrev(e.target.dataset.prevV, v, undefined);
        });
      });
      panel.querySelectorAll('[data-prev-d]').forEach(inp => {
        inp.addEventListener('input', e => {
          const d = e.target.value === '' ? null : Number(e.target.value);
          this.setPrev(e.target.dataset.prevD, undefined, d);
        });
      });
    }

    _renderCtx(c){
      const v = this.state.ctx[c.id];
      if (c.kind === 'number') {
        return `<label><span style="font-size:11.5px">${c.label}</span> <input type="number" data-ctx-num="${c.id}" value="${v ?? ''}" placeholder="—" /> <span style="font-size:10.5px;color:#64748b">${c.unit||''}</span></label>`;
      }
      if (c.kind === 'select') {
        return `<label><span style="font-size:11.5px">${c.label}</span> <select data-ctx-sel="${c.id}"><option value="">—</option>${(c.options||[]).map(o => `<option value="${o.value}" ${v===o.value?'selected':''}>${o.label}</option>`).join('')}</select></label>`;
      }
      return `<label><input type="checkbox" data-ctx-bool="${c.id}" ${v?'checked':''}/> <span style="font-size:11.5px">${c.label}</span></label>`;
    }

    _renderPanel(p){
      const tests = (p.tests||[]).filter(t => {
        if (!this.filter) return true;
        const allowed = t.topics || [];
        return allowed.length === 0 || allowed.includes(this.filter);
      });
      if (!tests.length) return '';
      // count tests with values that have at least one rule firing
      const fired = tests.filter(t => {
        const v = this.state.values[t.id];
        if (v == null) return false;
        return (t.rules||[]).some(r => { try { return r.when(v, this.state.ctx, this.state.values); } catch(e){ return false; }});
      }).length;
      const valCount = tests.filter(t => this.state.values[t.id] != null).length;
      const open = this._panelOpen(p);
      return `
        <div class="la-panel ${open ? 'is-open' : ''}" data-panel="${p.id}">
          <button class="la-panel-t" type="button" data-panel-toggle="${p.id}" aria-expanded="${open}">
            <span class="la-panel-caret" aria-hidden="true">›</span>
            <span class="la-panel-name">${p.label}</span>
            <span class="la-panel-badges">
              ${valCount ? `<span class="la-panel-count">${valCount} entered</span>` : ''}
              ${fired ? `<span class="la-panel-count has-action">${fired} action${fired===1?'':'s'}</span>` : ''}
            </span>
          </button>
          <div class="la-panel-tests" ${open ? '' : 'hidden'}>
            ${tests.map(t => this._renderTest(t)).join('')}
          </div>
        </div>`;
    }

    _renderTest(t){
      const v = this.state.values[t.id] ?? '';
      const prev = this.state.prev[t.id] || {};
      const isOpen = !!this.state.prevOpen[t.id] || prev.v != null || prev.days != null;
      const meta = this._meta(t.id);
      const trendChip = (v !== '' && meta.trend && meta.trend !== 'new') ? this._trendChip(meta) : '';
      return `
        <div class="la-test" data-test-row="${t.id}">
          <span class="la-test-l">${t.label}${t.note ? `<small>${t.note}</small>` : ''}${this._pathLinks(t)}</span>
          <input type="number" data-test="${t.id}" value="${v}" step="${t.step ?? 0.1}" placeholder="—" />
          <span class="la-test-unit">
            ${t.unit || ''}
            <button class="la-prev-toggle ${isOpen?'is-on':''}" type="button" data-prev-toggle="${t.id}" title="Add previous result">↺</button>
          </span>
          ${isOpen ? `
            <div class="la-prev-row" data-prev-row="${t.id}">
              <span class="la-prev-lbl">Previous</span>
              <input type="number" data-prev-v="${t.id}" value="${prev.v ?? ''}" step="${t.step ?? 0.1}" placeholder="prev value" />
              <span class="la-prev-sep">·</span>
              <input type="number" data-prev-d="${t.id}" value="${prev.days ?? ''}" step="1" placeholder="days ago" />
              ${trendChip}
            </div>
          ` : ''}
        </div>`;
    }

    _pathLinks(t){
      const list = t.pathways || (t.pathway ? [{ slug:t.pathway, label:t.label }] : []);
      if (!list.length) return '';
      return `<small class="la-test-paths">${list.map(p =>
        `<a class="la-test-path" href="../tools/algorithms/${p.slug}.html" target="_blank" rel="noopener" title="Open full pathway: ${p.label}">${p.label} ↗</a>`
      ).join('')}</small>`;
    }

    _trendChip(meta){      if (!meta || !meta.trend) return '';
      const t = meta.trend;
      const sym = t === 'rising' ? '▲' : t === 'falling' ? '▼' : t === 'stable' ? '→' : '✦';
      const label = t === 'rising' ? 'Rising' : t === 'falling' ? 'Falling' : t === 'stable' ? 'Stable' : 'New';
      const pct = meta.deltaPct != null ? ` ${meta.deltaPct > 0 ? '+' : ''}${meta.deltaPct.toFixed(0)}%` : '';
      const since = meta.daysSince != null ? ` · ${meta.daysSince}d` : '';
      return `<span class="la-trend la-trend-${t}" title="${label}${pct}${since}">${sym} ${label}${pct}${since}</span>`;
    }

    // Highlight abnormal values
    markAbnormal(){
      const t = this.topic;
      if (!t) return;
      const ctx = this.state.ctx;
      (t.panels||[]).forEach(p => (p.tests||[]).forEach(test => {
        const inp = this.host.querySelector(`input[data-test="${test.id}"]`);
        if (!inp) return;
        const v = this.state.values[test.id];
        inp.classList.remove('abn-lo','abn-hi');
        if (v == null) return;
        const ref = typeof test.refByCtx === 'function' ? test.refByCtx(ctx) : test.ref;
        if (!ref) return;
        if (v < ref[0]) inp.classList.add('abn-lo');
        else if (v > ref[1]) inp.classList.add('abn-hi');
      }));
    }

    // ---- results ----
    renderResults(){
      const panel = this.host.querySelector('.la-verdict');
      if (!panel) return;
      const t = this.topic;
      const ctx = this.state.ctx;
      const vals = this.state.values;

      // For each test with a value, find every rule that fires
      const rows = [];
      (t.panels||[]).forEach(p => (p.tests||[]).forEach(test => {
        const v = vals[test.id];
        if (v == null) return;
        if (this.filter) {
          const allowed = test.topics || [];
          if (allowed.length && !allowed.includes(this.filter)) return;
        }
        const meta = this._meta(test.id);
        (test.rules||[]).forEach(r => {
          try {
            if (r.when(v, ctx, vals, meta)) rows.push({ test, value:v, rule:r, meta });
          } catch(e){ console.error('lab rule error', test.id, r.id, e); }
        });
      }));

      // Sort by action rank, then by test name
      rows.sort((a, b) => (ACTIONS[b.rule.action]?.rank||0) - (ACTIONS[a.rule.action]?.rank||0) || a.test.label.localeCompare(b.test.label));

      // Headline = highest-rank rule
      let headline = null;
      if (rows.length) headline = rows[0];

      const hlHtml = this._renderHeadline(headline, rows);
      const rowsHtml = rows.length
        ? rows.map(r => this._renderRow(r)).join('')
        : `<div class="la-empty"><div class="la-empty-ic">🧪</div><p>Enter lab values (or paste from EMIS) to see action recommendations.<br/>The tool will fire rules from NICE / BSH / Renal Association / BMJ Best Practice as you type.</p></div>`;

      // Build synthesis (Option C: top lead + bottom plan)
      const synthesis = this._synthesise(rows, ctx, vals);
      const leadHtml = this._renderSynthesisLead(synthesis);
      const planHtml = this._renderPlan(synthesis, rows);

      panel.innerHTML = hlHtml + leadHtml + `<div class="la-rows">${rowsHtml}</div>` + planHtml;

      panel.querySelector('[data-act="copy-all"]')?.addEventListener('click', () => this._copyAll(rows));
      panel.querySelector('[data-act="copy-plan"]')?.addEventListener('click', () => this._copyPlan(synthesis, rows));
      panel.querySelector('[data-act="copy-patient"]')?.addEventListener('click', () => this._copyPatient(synthesis));
      panel.querySelector('[data-act="print"]')?.addEventListener('click', () => window.print());
      panel.querySelectorAll('[data-mini-copy]').forEach(btn => {
        btn.addEventListener('click', e => {
          const idx = Number(btn.dataset.miniCopy);
          this._copyRow(rows[idx]);
        });
      });
      panel.querySelectorAll('[data-mini-letter]').forEach(btn => {
        btn.addEventListener('click', e => {
          const idx = Number(btn.dataset.miniLetter);
          this._copyLetter(rows[idx]);
        });
      });
    }

    _renderHeadline(headline, rows){
      if (!rows.length) {
        return `
          <header class="la-headline is-none">
            <div class="la-hl-ic">🟢</div>
            <div class="la-hl-text">
              <div class="la-hl-tier">No action triggers</div>
              <div class="la-hl-title">Enter values to start</div>
              <div class="la-hl-action">Tool surfaces every NICE / BSH / Renal / BMJ Best Practice rule that fires for the entered results.</div>
            </div>
          </header>`;
      }
      const a = ACTIONS[headline.rule.action];
      const counts = {};
      rows.forEach(r => { counts[r.rule.action] = (counts[r.rule.action]||0) + 1; });
      const breakdown = Object.keys(counts)
        .sort((x, y) => ACTIONS[y].rank - ACTIONS[x].rank)
        .map(k => `<span style="font-weight:600">${ACTIONS[k].icon} ${counts[k]} ${ACTIONS[k].label}</span>`)
        .join(' · ');
      return `
        <header class="la-headline ${a.hl}">
          <div class="la-hl-ic">${a.icon}</div>
          <div class="la-hl-text">
            <div class="la-hl-tier">${a.label} · highest-acuity action</div>
            <div class="la-hl-title">${headline.rule.label}</div>
            <div class="la-hl-action">${headline.rule.timeframe || ''} ${headline.rule.timeframe && headline.rule.action ? '·' : ''} ${rows.length} action${rows.length===1?'':'s'} total — ${breakdown}</div>
            <div class="la-hl-btns">
              <button class="la-btn" data-act="copy-all">📋 Copy full report</button>
              <button class="la-btn" data-act="print">🖨 Print</button>
            </div>
          </div>
        </header>`;
    }

    _renderRow(r, idx){
      const a = ACTIONS[r.rule.action];
      const ctx = this.state.ctx;
      const ref = typeof r.test.refByCtx === 'function' ? r.test.refByCtx(ctx) : r.test.ref;
      let vtag = '';
      if (ref) {
        if (r.value < ref[0]) vtag = `<span class="v-tag" style="background:#f5f3ff;color:#5b21b6">LOW</span>`;
        else if (r.value > ref[1]) vtag = `<span class="v-tag" style="background:#fef2f2;color:#991b1b">HIGH</span>`;
      }
      const idxStr = this._rowIndex(r);
      const refStr = ref ? `<span style="opacity:.6">[ref ${ref[0]}–${ref[1]}]</span>` : '';

      // Trend chip + prev comparison
      const m = r.meta || {};
      const trendChip = (m.trend && m.trend !== 'new') ? this._trendChip(m) : '';
      const prevLine = (m.prev && m.prev.v != null) ? `<div class="la-row-prev">vs <b>${m.prev.v} ${r.test.unit || ''}</b>${m.prev.days != null ? ` (${m.prev.days} day${m.prev.days===1?'':'s'} ago)` : ''}${m.deltaAbs != null ? ` · Δ ${m.deltaAbs > 0 ? '+' : ''}${m.deltaAbs.toFixed(m.deltaAbs % 1 ? 1 : 0)} ${r.test.unit || ''}` : ''}${m.deltaPct != null ? ` (${m.deltaPct > 0 ? '+' : ''}${m.deltaPct.toFixed(0)}%)` : ''}</div>` : '';

      return `
        <article class="la-row ${a.cls}">
          <div class="la-row-h">
            <div class="la-row-l">
              <div class="la-row-name">${r.test.label}
                <span class="la-row-val">${r.value} ${r.test.unit || ''} ${vtag} ${refStr}</span>
                ${trendChip}
              </div>
              ${prevLine}
              <div class="la-row-headline"><strong>${r.rule.label}</strong>${r.rule.rule ? ` — <em>${r.rule.rule}</em>` : ''}</div>
            </div>
            <span class="la-row-action">${a.icon} ${a.label}</span>
          </div>
          <div class="la-row-meta">
            ${r.rule.timeframe ? `<span><b>Timeframe:</b> ${r.rule.timeframe}</span>` : ''}
            ${r.rule.source ? `<span><b>Source:</b> ${r.rule.sourceUrl ? `<a href="${r.rule.sourceUrl}" target="_blank" rel="noopener noreferrer">${r.rule.source}</a>` : r.rule.source}</span>` : ''}
            ${r.rule.handoff ? `<span><b>Hand-off:</b> <a href="${this._handoffUrl(r.rule.handoff)}" target="_blank">${r.rule.handoff.label || r.rule.handoff.tool} ↗</a></span>` : ''}
          </div>
          ${(r.rule.patientPhrase || r.rule.noteTemplate) ? `
            <details>
              <summary>Patient phrase + notes template</summary>
              <div class="la-row-detail">
                ${r.rule.patientPhrase ? `<div class="la-row-phrase">${r.rule.patientPhrase}</div>` : ''}
                ${r.rule.noteTemplate ? `<div class="la-row-note">${r.rule.noteTemplate}</div>` : ''}
                <div class="la-row-mini-btns">
                  <button class="la-row-mini-btn" data-mini-copy="${idxStr}">📋 Copy note</button>
                  <button class="la-row-mini-btn" data-mini-letter="${idxStr}">✉ Copy patient SMS / letter</button>
                </div>
              </div>
            </details>
          ` : ''}
        </article>`;
    }

    _rowIndex(r){
      // index will be assigned at template render below
      if (!this._idxMap) this._idxMap = new Map();
      let i = this._idxMap.get(r);
      if (i == null) { i = this._idxMap.size; this._idxMap.set(r, i); }
      return i;
    }

    // -------- SYNTHESIS (Option C: top lead + bottom plan) --------
    _synthesise(rows, ctx, vals){
      const TONE_BY_ACTION = {
        emergency:'emer', cancer:'canc', urgent:'urg', review:'rev',
        treat:'treat', refer:'ref', repeat:'rep', recall:'rec', annotate:'ann'
      };
      const ICONS = { emer:'🔴', canc:'🟣', urg:'🟠', rev:'⚠',
        treat:'💊', ref:'↗', rep:'♻', rec:'🟢', ann:'📝' };

      // No values entered
      const anyValue = Object.keys(vals).length > 0;
      if (!anyValue) {
        return { tone:'rec', lead:'Enter lab values to generate a synthesis recommendation.', sections:[], patient:'' };
      }
      // Values entered, no rules fired
      if (!rows.length) {
        const allBloodLines = [];
        return {
          tone:'rec',
          lead:'No urgent thresholds met — proceed with routine workup and reassurance if symptoms allow.',
          sections:[{
            title:'Plan',
            bullets:[
              'No threshold-based action triggered for the values entered.',
              ctx.symptoms ? 'Patient symptomatic — continue history + examination; consider further targeted investigations.' : 'Patient asymptomatic — reassure; complete remaining baseline tests if not already done.',
              'Annotate results; routine recall at standard interval; safety-net.'
            ]
          }],
          patient: ctx.symptoms
            ? '"Your blood tests are largely reassuring — but because you\'re symptomatic, we may need a few more investigations to find the cause."'
            : '"Your blood tests look reassuring and you\'re feeling well — we\'ll continue at our usual recall."'
        };
      }

      // Group rows by action
      const byAction = {};
      rows.forEach(r => { (byAction[r.rule.action] = byAction[r.rule.action] || []).push(r); });
      const top = rows[0];
      const topAction = top.rule.action;
      const tone = TONE_BY_ACTION[topAction] || 'rec';

      // Trend / stability analysis across all entered values
      const metas = Object.keys(vals).map(id => this._meta(id));
      const trends = metas.map(m => m.trend).filter(Boolean);
      const allStable = trends.length > 0 && trends.every(t => t === 'stable');
      const anyRising = trends.includes('rising');
      const anyFalling = trends.includes('falling');
      const anyNew = trends.includes('new') || trends.length < Object.keys(vals).length;
      const stableCount = trends.filter(t => t === 'stable').length;

      let lead, sections = [], patient = '';

      if (topAction === 'emergency') {
        lead = `${ICONS.emer} Escalate now — ${top.rule.label}.`;
        sections.push({ title:'Immediate', bullets: byAction.emergency.map(r => `${r.rule.timeframe || 'Same day'} — ${r.rule.label}`) });
        ['cancer','urgent','review','treat'].forEach(k => {
          if (byAction[k]) sections.push({
            title: `Parallel · ${ACTIONS[k].label}`,
            bullets: byAction[k].map(r => r.rule.label)
          });
        });
        patient = '"Your blood tests show something that needs urgent hospital attention today — I\'m acting on this now."';
      }
      else if (topAction === 'cancer') {
        const n = byAction.cancer.length;
        lead = `${ICONS.canc} ${n} two-week-wait trigger${n===1?'':'s'} — refer urgently while completing parallel workup.`;
        sections.push({ title:'2-week-wait referral', bullets: byAction.cancer.map(r => r.rule.label) });
        if (byAction.urgent) sections.push({ title:'Same-day / same-week (parallel)', bullets: byAction.urgent.map(r => r.rule.label) });
        if (byAction.review) sections.push({ title:'Drug review (parallel)', bullets: byAction.review.map(r => r.rule.label) });
        if (byAction.treat) sections.push({ title:'Treat (parallel)', bullets: byAction.treat.map(r => r.rule.label) });
        sections.push({ title:'Communication & safety-net', bullets:[
          'Use plain language: "We need a faster specialist appointment — this is standard, not a sign anything is definitely wrong."',
          'Document the referral conversation, ICE, and what to do if symptoms worsen before the appointment.',
        ]});
        patient = '"At your age and with this result pattern, the safest next step is a faster specialist referral — it doesn\'t mean anything is definitely wrong, it\'s standard practice."';
      }
      else if (topAction === 'urgent') {
        const n = byAction.urgent.length;
        lead = `${ICONS.urg} ${n} urgent action${n===1?'':'s'} — same-day / same-week workup, prioritise highest-yield first.`;
        sections.push({ title:'Urgent', bullets: byAction.urgent.map(r => `${r.rule.timeframe || 'Same week'} — ${r.rule.label}`) });
        if (byAction.review) sections.push({ title:'Drug review', bullets: byAction.review.map(r => r.rule.label) });
        if (byAction.treat) sections.push({ title:'Treat', bullets: byAction.treat.map(r => r.rule.label) });
        if (byAction.repeat) sections.push({ title:'Repeat', bullets: byAction.repeat.map(r => `${r.rule.timeframe||''} — ${r.rule.label}`) });
        patient = '"There are some results that need attention soon — let me explain what we\'re going to do and in what order."';
      }
      else if (topAction === 'review') {
        lead = `${ICONS.rev} Drug review needed — review/adjust offending medication, then repeat bloods.`;
        sections.push({ title:'Drug review', bullets: byAction.review.map(r => r.rule.label) });
        if (byAction.treat) sections.push({ title:'Treat', bullets: byAction.treat.map(r => r.rule.label) });
        if (byAction.repeat) sections.push({ title:'Recheck', bullets: byAction.repeat.map(r => `${r.rule.timeframe||''} — ${r.rule.label}`) });
        patient = '"One of your tablets is partly responsible for this result — we\'ll adjust the dose and recheck shortly."';
      }
      else if (topAction === 'treat') {
        lead = anyNew
          ? `${ICONS.treat} Treat — new abnormality identified, start therapy and arrange recheck.`
          : `${ICONS.treat} Treat — ongoing pattern, optimise therapy and recheck.`;
        sections.push({ title:'Start / optimise treatment', bullets: byAction.treat.map(r => r.rule.label) });
        if (byAction.repeat) sections.push({ title:'Recheck', bullets: byAction.repeat.map(r => `${r.rule.timeframe||''} — ${r.rule.label}`) });
        if (byAction.refer) sections.push({ title:'Refer (non-urgent)', bullets: byAction.refer.map(r => r.rule.label) });
        patient = '"Your tests show something we can treat — here\'s the plan and how we\'ll keep an eye on it."';
      }
      else if (topAction === 'refer') {
        lead = `${ICONS.ref} Non-urgent specialist referral + continue current management.`;
        sections.push({ title:'Referral', bullets: byAction.refer.map(r => r.rule.label) });
        if (byAction.treat) sections.push({ title:'Continue', bullets: byAction.treat.map(r => r.rule.label) });
        patient = '"There\'s nothing urgent — I\'d still like a specialist to weigh in routinely."';
      }
      else if (topAction === 'repeat') {
        lead = `${ICONS.rep} Repeat to confirm — no urgent action otherwise.`;
        sections.push({ title:'Repeat', bullets: byAction.repeat.map(r => `${r.rule.timeframe||''} — ${r.rule.label}`) });
        patient = '"Nothing here that needs immediate action — let\'s recheck to be sure."';
      }
      else if (topAction === 'recall' || topAction === 'annotate') {
        // Reassurance pattern: stable + asymptomatic + no higher-acuity rules
        const onlyLowAcuity = !byAction.emergency && !byAction.cancer && !byAction.urgent && !byAction.review;
        const asymptomatic = !ctx.symptoms;

        if (onlyLowAcuity && allStable && asymptomatic) {
          lead = `${ICONS.rec} Stable, asymptomatic, no urgent triggers — reassure and continue routine recall.`;
          sections.push({ title:'Reassure & recall', bullets:[
            `Pattern is stable across the entered timeframe (${stableCount} test${stableCount===1?'':'s'} unchanged).`,
            'No new or escalating findings; patient asymptomatic.',
            'Continue current management; routine follow-up at standard interval.',
            'Safety-net: any new symptoms or rapid change → reassess sooner.',
          ]});
          patient = '"Your tests have been the same for a while, and you\'re feeling well. I\'m not worried — we\'ll continue as we are and recheck at our usual time. Come back sooner if anything changes."';
        } else {
          lead = `${ICONS.rec} Routine recall — document and phone patient with plan.`;
          if (byAction.recall) sections.push({ title:'Routine recall', bullets: byAction.recall.map(r => r.rule.label) });
          if (byAction.annotate) sections.push({ title:'Annotate / document', bullets: byAction.annotate.map(r => r.rule.label) });
          if (byAction.repeat) sections.push({ title:'Repeat', bullets: byAction.repeat.map(r => `${r.rule.timeframe||''} — ${r.rule.label}`) });
          if (byAction.treat) sections.push({ title:'Treat', bullets: byAction.treat.map(r => r.rule.label) });
          patient = '"Nothing here that needs urgent attention — I\'ll give you a ring to talk through the plan."';
        }
      }

      // Trend modifiers — surface as a warning section when not already top-acuity
      if (anyRising && !['emergency','cancer','urgent','review'].includes(topAction)) {
        sections.unshift({
          title:'⚠ Trend warning',
          bullets:[
            'One or more values are rising compared to previous — escalate sooner than the absolute value suggests.',
            'Consider repeating within days rather than weeks; review for reversible causes (drug, hydration, intercurrent illness).'
          ]
        });
      }

      return { tone, lead, sections, patient };
    }

    _renderSynthesisLead(s){
      if (!s) return '';
      const toneCls = `is-${s.tone||'rec'}`;
      return `
        <div class="la-synth ${toneCls}">
          <div class="la-synth-l">
            <div class="la-synth-eyebrow">Recommendation</div>
            <div class="la-synth-lead">${s.lead}</div>
          </div>
        </div>`;
    }

    _renderPlan(s, rows){
      if (!s || (!s.sections.length && !s.patient)) return '';
      const toneCls = `is-${s.tone||'rec'}`;
      return `
        <section class="la-plan ${toneCls}">
          <div class="la-plan-h">
            <div class="la-plan-eyebrow">Plan</div>
            <div class="la-plan-title">Recommended next steps</div>
          </div>
          ${s.sections.map(sec => `
            <div class="la-plan-section">
              <div class="la-plan-section-t">${sec.title}</div>
              <ul>${sec.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
            </div>
          `).join('')}
          ${s.patient ? `
            <div class="la-plan-patient">
              <div class="la-plan-section-t">💬 Patient-facing summary</div>
              <p>${s.patient}</p>
            </div>
          ` : ''}
          <div class="la-plan-btns">
            <button class="la-btn" data-act="copy-plan">📋 Copy plan</button>
            ${s.patient ? `<button class="la-btn" data-act="copy-patient">✉ Copy patient summary</button>` : ''}
          </div>
        </section>`;
    }

    _copyPlan(s, rows){
      const stamp = new Date().toISOString().split('T')[0];
      const lines = [
        `RECOMMENDATION — ${this.topic.title}`,
        `Date: ${stamp}`,
        '',
        `Lead: ${(s.lead||'').replace(/^[^A-Za-z]+\s*/, '')}`,
        '',
      ];
      s.sections.forEach(sec => {
        lines.push(`${sec.title.toUpperCase()}:`);
        sec.bullets.forEach(b => lines.push(`  - ${b}`));
        lines.push('');
      });
      if (s.patient) {
        lines.push('PATIENT SUMMARY:');
        lines.push(`  ${s.patient}`);
        lines.push('');
      }
      lines.push('— Generated by Reasoning GP lab results actioning tool (educational use only).');
      this._writeClip(lines.join('\n'), 'Plan copied');
    }
    _copyPatient(s){
      if (!s.patient) return;
      this._writeClip(s.patient.replace(/^"|"$/g,''), 'Patient summary copied');
    }

    _handoffUrl(h){
      if (h.url) return h.url;
      if (h.tool === 'triage') return '../tools/triage-tool.html';
      if (h.tool === 'medchooser') return '../tools/medication-chooser.html';
      return '#';
    }

    // ---- clipboard ----
    _copyAll(rows){
      const t = this.topic;
      const ctx = this.state.ctx;
      const vals = this.state.values;
      const stamp = new Date().toISOString().split('T')[0];

      const ctxLines = (t.context||[]).map(c => {
        const v = ctx[c.id];
        if (v == null || v === false) return null;
        return `- ${c.label}: ${v}${c.unit?' '+c.unit:''}`;
      }).filter(Boolean);

      const valueLines = (t.panels||[]).flatMap(p => (p.tests||[]).map(test => {
        const v = vals[test.id];
        if (v == null) return null;
        const p2 = this.state.prev[test.id];
        const prevStr = (p2 && p2.v != null) ? ` (prev ${p2.v}${p2.days != null ? `, ${p2.days}d ago` : ''})` : '';
        return `- ${test.label}: ${v}${test.unit?' '+test.unit:''}${prevStr}`;
      })).filter(Boolean);

      const actionLines = rows.map(r => {
        const a = ACTIONS[r.rule.action];
        return `[${a.label.toUpperCase()}] ${r.test.label} ${r.value}${r.test.unit?' '+r.test.unit:''}\n  Action: ${r.rule.label}${r.rule.timeframe?` (${r.rule.timeframe})`:''}\n  Rule: ${r.rule.rule || '—'}${r.rule.source?`\n  Source: ${r.rule.source}`:''}${r.rule.noteTemplate?`\n  Notes: ${r.rule.noteTemplate.replace(/\n/g,' ')}`:''}`;
      }).join('\n\n');

      const txt = [
        `LAB RESULTS — ${t.title}`,
        `Date: ${stamp}`,
        '',
        'PATIENT CONTEXT:',
        ctxLines.length ? ctxLines.join('\n') : '(none entered)',
        '',
        'VALUES:',
        valueLines.length ? valueLines.join('\n') : '(none entered)',
        '',
        'ACTIONS:',
        actionLines || '(no rules fired)',
        '',
        '— Generated by Reasoning GP lab results actioning tool (educational use only; verify against live NICE / local pathway).'
      ].join('\n');

      this._writeClip(txt, 'Full lab report copied');
    }
    _copyRow(r){
      const a = ACTIONS[r.rule.action];
      const txt = `${r.test.label}: ${r.value} ${r.test.unit||''}\nAction: ${a.label} — ${r.rule.label}\n${r.rule.timeframe?`Timeframe: ${r.rule.timeframe}\n`:''}${r.rule.source?`Source: ${r.rule.source}\n`:''}${r.rule.noteTemplate ? '\n'+r.rule.noteTemplate : ''}`;
      this._writeClip(txt, 'Note template copied');
    }
    _copyLetter(r){
      const txt = r.rule.patientPhrase || `Your ${r.test.label.toLowerCase()} result was ${r.value} ${r.test.unit||''}. We need to ${r.rule.label.toLowerCase()}.`;
      this._writeClip(txt, 'Patient phrase copied');
    }
    _writeClip(text, msg){
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => this._toast(msg), () => this._fallbackCopy(text, msg));
      } else this._fallbackCopy(text, msg);
    }
    _fallbackCopy(text, msg){
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.cssText='position:fixed;opacity:0';
      document.body.appendChild(ta); ta.select();
      try{ document.execCommand('copy'); this._toast(msg||'Copied'); }
      catch(e){ this._toast('Copy failed', true); }
      document.body.removeChild(ta);
    }
    _toast(msg, isError){
      let t = document.getElementById('__la_toast');
      if (!t) {
        t = document.createElement('div');
        t.id = '__la_toast';
        t.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#15202b;color:#fff;padding:10px 18px;border-radius:8px;font:600 13px/1.4 system-ui;z-index:9999;box-shadow:0 6px 18px rgba(0,0,0,.25);opacity:0;transition:opacity .2s';
        document.body.appendChild(t);
      }
      t.textContent = (isError ? '⚠ ' : '✓ ') + msg;
      t.style.background = isError ? '#b91c1c' : '#15202b';
      t.style.opacity = '1';
      clearTimeout(this._toastTo);
      this._toastTo = setTimeout(() => { t.style.opacity = '0'; }, 2200);
    }
  }

  window.RGPLabs = RGPLabs;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => RGPLabs.autoMount());
  } else {
    RGPLabs.autoMount();
  }
})();
