/* ============================================
   Reasoning GP — Workup Tool (combined)
   Replaces Triage Tool + Diagnostic Tool.
   Reads existing data from RGPTriage + RGPDiagnostic.
   ============================================ */

(function(){
  // ---------- Topic registry ----------
  // Maps a single workup topic to the existing triage / diagnostic data names.
  const TOPICS = [
    { id:'tiredness',        label:'Tired all the time',  triage:'tiredness',                dx:'tatt' },
    { id:'headache',         label:'Headache',            triage:'headache-triage',          dx:'headache' },
    { id:'dizziness',        label:'Dizziness / collapse',triage:'dizziness-triage',         dx:'dizziness' },
    { id:'chest-pain',       label:'Chest pain',          triage:'chest-pain-triage',        dx:'chest-pain' },
    { id:'breathlessness',   label:'Breathlessness',      triage:'breathlessness-triage',    dx:'breathlessness' },
    { id:'abdo-pain',        label:'Abdominal pain',      triage:'abdo-pain-triage',         dx:'abdo-pain' },
    { id:'hypertension',     label:'Raised BP / new HTN diagnosis',    triage:'hypertension-triage',      dx:'hypertension' },
    { id:'type-2-diabetes',  label:'Raised HbA1c / hyperglycaemia',    triage:'type-2-diabetes-triage',   dx:'type-2-diabetes' },
    { id:'asthma',           label:'Wheeze / chronic cough',           triage:'asthma-triage',            dx:'asthma' },
  ];

  // Allow additional presentations to register themselves via packs
  // (assets/dx-packs/<slug>.js sets window.RGP_EXTRA_TOPICS before this file loads).
  if (Array.isArray(window.RGP_EXTRA_TOPICS)) {
    window.RGP_EXTRA_TOPICS.forEach(t => {
      if (t && t.id && !TOPICS.some(x => x.id === t.id)) TOPICS.push(t);
    });
  }

  // ---------- Triage tier definitions ----------
  const TIERS = {
    emergency: { label:'Emergency',                   cls:'is-emer', tcls:'t-emer', icon:'🔴', rank:4 },
    cancer:    { label:'Suspected cancer (2WW)',      cls:'is-canc', tcls:'t-canc', icon:'🟣', rank:3 },
    urgent:    { label:'Urgent — non-cancer',         cls:'is-urg',  tcls:'t-urg',  icon:'🟠', rank:2 },
    routine:   { label:'Routine',                     cls:'is-rt',   tcls:'t-rt',   icon:'🟢', rank:1 },
  };
  const TIER_ORDER = ['emergency','cancer','urgent','routine'];

  // ---------- Engine ----------
  class Workup {
    constructor(host, topicId){
      this.host = host;
      this.topicId = topicId;
      this.state = {
        inputs: {},
        dxView: 'percent',        // 'percent' | 'buckets' | 'procon'
        showTrail: false,
      };
      host.classList.add('wu');
      this.render();
    }

    // ---- Topic resolution ----
    _topicCfg(){ return TOPICS.find(t => t.id === this.topicId); }
    triageTopic(){
      const cfg = this._topicCfg();
      return cfg?.triage ? window.RGPTriage?.get(cfg.triage) : null;
    }
    dxTopic(){
      const cfg = this._topicCfg();
      return cfg?.dx ? window.RGPDiagnostic?.get(cfg.dx) : null;
    }
    hasTriage(){ return !!this.triageTopic(); }
    hasDx(){ return !!this.dxTopic(); }

    // ---- Merged inputs ----
    mergedInputs(){
      const triageT = this.triageTopic();
      const dxT = this.dxTopic();
      const out = [];
      const seen = new Set();
      const push = (inputs, source) => {
        (inputs || []).forEach(i => {
          if (seen.has(i.id)) return;
          seen.add(i.id);
          out.push({ ...i, _source: source });
        });
      };
      // Prefer dx inputs first (often richer with notes), then triage-only ones
      if (dxT) push(dxT.inputs, 'dx');
      if (triageT) push(triageT.inputs, 'triage');
      return out;
    }

    // ---- Setters ----
    setTopic(id){
      this.topicId = id;
      // Reset inputs but keep numeric defaults
      const ins = {};
      this.mergedInputs().forEach(f => {
        if (f.kind === 'number' && f.default !== undefined) ins[f.id] = f.default;
      });
      this.state.inputs = ins;
      this.render();
    }
    setDxView(v){ this.state.dxView = v; this.renderResults(); }
    setInput(id, val){
      if (val === undefined || val === '' || val === null || val === false) delete this.state.inputs[id];
      else this.state.inputs[id] = val;
      this.renderResults();
    }
    reset(){
      this.setTopic(this.topicId);
    }
    toggleTrail(v){ this.state.showTrail = v; this.renderResults(); }

    // ====================================================
    // SCORING — triage
    // ====================================================
    scoreTriage(){
      const topic = this.triageTopic();
      if (!topic) return null;
      const inputs = this.state.inputs;
      const fired = [];
      (topic.rules || []).forEach(r => {
        try { if (r.when && r.when(inputs)) fired.push(r); }
        catch(e){ console.warn('rule error', r.id, e); }
      });
      const sorted = [...fired].sort((a,b) => TIERS[b.tier].rank - TIERS[a.tier].rank);
      const headlineRule = sorted[0] || null;
      const headlineTier = headlineRule ? headlineRule.tier : 'routine';
      const grouped = { emergency:[], cancer:[], urgent:[], routine:[] };
      fired.forEach(r => grouped[r.tier].push(r));
      return { topic, fired, headlineRule, headlineTier, grouped };
    }

    // ====================================================
    // SCORING — diagnostic
    // ====================================================
    scoreDx(){
      const topic = this.dxTopic();
      if (!topic) return null;
      const inputs = this.state.inputs;
      const fxMap = topic.effects || {};
      const result = {};
      const reasons = {};
      const triggeredCantMiss = new Set();

      (topic.diagnoses || []).forEach(d => {
        result[d.id] = d.baseline ?? 10;
        reasons[d.id] = [];
      });

      (topic.inputs || []).forEach(inp => {
        const val = inputs[inp.id];
        if (inp.kind === 'check' && !val) return;
        if (val === undefined || val === null || val === '') return;
        const fx = fxMap[inp.id];
        let applied = null;
        if (typeof fx === 'function') {
          try { applied = fx(val, inputs); } catch(e){ applied = null; }
        } else if (fx && typeof fx === 'object') applied = fx;
        if (!applied) return;
        Object.entries(applied).forEach(([dxId, w]) => {
          if (!(dxId in result)) return;
          result[dxId] += w;
          reasons[dxId].push({ inputId: inp.id, label: inp.label, weight: w });
          const dxObj = topic.diagnoses.find(d => d.id === dxId);
          if (dxObj && dxObj.category === 'cant-miss' && w > 0) triggeredCantMiss.add(dxId);
        });
      });

      Object.keys(result).forEach(k => { if (result[k] < 1) result[k] = 1; });

      let total = 0;
      Object.entries(result).forEach(([id, s]) => {
        const d = topic.diagnoses.find(dd => dd.id === id);
        if (d && d.category === 'cant-miss' && !triggeredCantMiss.has(id)) return;
        total += s;
      });
      const pct = {};
      Object.entries(result).forEach(([id, s]) => {
        const d = topic.diagnoses.find(dd => dd.id === id);
        if (d && d.category === 'cant-miss' && !triggeredCantMiss.has(id)) { pct[id] = 0; return; }
        pct[id] = total > 0 ? (s / total) * 100 : 0;
      });
      return { topic, raw: result, pct, reasons, triggeredCantMiss };
    }

    // ====================================================
    // MAIN RENDER
    // ====================================================
    render(){
      this.host.innerHTML = `
        ${this._renderHead()}
        ${this._renderTopicPicker()}
        <div class="wu-body">
          <aside class="wu-inputs"></aside>
          <div class="wu-verdict"></div>
        </div>
        ${this._renderFooter()}
      `;
      this._wire();
      this.renderInputs();
      this.renderResults();
    }

    _renderHead(){
      const cfg = this._topicCfg();
      const triageT = this.triageTopic();
      const dxT = this.dxTopic();
      const guideline = [
        triageT?.guideline,
        dxT?.guideline,
      ].filter(Boolean).join(' · ');

      return `
        <div class="wu-head">
          <div class="wu-head-l">
            <div class="wu-eyebrow">Diagnostic Tool</div>
            <div class="wu-title">${cfg?.label || 'Workup'}</div>
            <div class="wu-sub">
              ${this.hasTriage() && this.hasDx() ?
                'Tick symptoms. The tool surfaces every <b>NICE / Macmillan triage rule</b> that fires AND ranks the <b>differential</b> using ICHD-3 / TiTrATE / NICE CKS criteria.' :
                this.hasTriage() ?
                  'Tick symptoms. The tool surfaces every <b>NICE / Macmillan triage rule</b> that fires — emergency, 2WW cancer, urgent non-cancer, routine.' :
                  'Tick symptoms. The engine ranks the <b>differential</b> live using ICHD-3 / TiTrATE / NICE CKS source criteria.'
              }
            </div>
            ${guideline ? `<div class="wu-source-pill">${guideline}</div>` : ''}
          </div>
          <div class="wu-head-r">
            <div class="wu-modes-avail">
              ${this.hasTriage() ? `<span class="wu-mode-badge wu-mb-tr">🚦 Triage</span>` : ''}
              ${this.hasDx() ?     `<span class="wu-mode-badge wu-mb-dx">🩺 Differential</span>` : ''}
            </div>
            ${this.hasDx() ? `
              <div class="wu-dx-view-toggle">
                <span class="wu-dx-view-lbl">DDx view:</span>
                <button data-dxview="percent" class="${this.state.dxView==='percent'?'active':''}">%</button>
                <button data-dxview="buckets" class="${this.state.dxView==='buckets'?'active':''}">Buckets</button>
                <button data-dxview="procon"  class="${this.state.dxView==='procon'?'active':''}">Pro / Con</button>
              </div>
            ` : ''}
            ${this.hasTriage() ? `
              <label class="wu-trail-toggle">
                <input type="checkbox" data-toggle="trail" ${this.state.showTrail?'checked':''}/>
                Show triage rule trail
              </label>
            ` : ''}
          </div>
        </div>
      `;
    }

    _renderTopicPicker(){
      const cfg = this._topicCfg();
      return `
        <div class="wu-topic-picker">
          <span class="wu-topic-picker-label">Presenting complaint</span>
          <div class="wu-topic-pills">
            ${TOPICS.map(t => {
              const isActive = t.id === this.topicId;
              const triage = t.triage ? `<span class="wu-tp-flag" title="Triage available">🚦</span>` : '';
              const dx = t.dx ? `<span class="wu-tp-flag" title="Differential available">🩺</span>` : '';
              return `<button class="wu-topic-pill ${isActive?'active':''}" data-topic="${t.id}">
                <span class="wu-tp-l">${t.label}</span>
                ${triage}${dx}
              </button>`;
            }).join('')}
          </div>
        </div>
      `;
    }

    _renderFooter(){
      const triageT = this.triageTopic();
      const dxT = this.dxTopic();
      const sources = [];
      (triageT?.sources || []).forEach(s => sources.push(s));
      (dxT?.sources || []).forEach(s => sources.push(s));
      // Dedup by URL
      const seen = new Set();
      const uniq = sources.filter(s => { if (seen.has(s.url)) return false; seen.add(s.url); return true; });

      return `
        <footer class="wu-footer">
          <div>
            <h5>Sources & evidence</h5>
            <div class="wu-sources-list">
              ${uniq.map(s => `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label} ↗</a>`).join('')}
            </div>
          </div>
          <div class="wu-disclaimer">
            <strong>Educational use only.</strong> Triage thresholds come from published NICE / Macmillan rules. Diagnostic weights are tuned to NICE CKS / ICHD-3 / SNNOOP10 / TiTrATE criteria but are <em>not</em> a validated clinical decision rule. Always confirm with full history, examination, and your local pathway.
          </div>
        </footer>
      `;
    }

    _wire(){
      // Topic picker
      this.host.querySelectorAll('.wu-topic-pill').forEach(b => {
        b.addEventListener('click', () => this.setTopic(b.dataset.topic));
      });
      // DDx view toggle
      this.host.querySelectorAll('.wu-dx-view-toggle button').forEach(b => {
        b.addEventListener('click', () => this.setDxView(b.dataset.dxview));
      });
      // Trail toggle
      const trail = this.host.querySelector('[data-toggle="trail"]');
      if (trail) trail.addEventListener('change', e => this.toggleTrail(e.target.checked));
    }

    // ====================================================
    // INPUTS PANEL
    // ====================================================
    renderInputs(){
      const panel = this.host.querySelector('.wu-inputs');
      if (!panel) return;
      const inputs = this.mergedInputs();
      const groups = {}; const order = [];
      inputs.forEach(f => {
        const g = f.group || 'Other';
        if (!groups[g]) { groups[g] = []; order.push(g); }
        groups[g].push(f);
      });

      panel.innerHTML = `
        <div class="wu-inputs-head">
          <h4>Symptoms · vitals · context</h4>
          <button class="wu-reset" type="button">Reset</button>
        </div>
        ${order.map(g => `
          <div class="wu-igroup">
            <div class="wu-igroup-t">${g}</div>
            <div class="wu-iopts">
              ${groups[g].map(f => this._renderInput(f)).join('')}
            </div>
          </div>
        `).join('')}
      `;
      panel.querySelector('.wu-reset').addEventListener('click', () => this.reset());
      panel.querySelectorAll('input[type="checkbox"][data-input]').forEach(cb => {
        cb.addEventListener('change', e => this.setInput(e.target.dataset.input, e.target.checked));
      });
      panel.querySelectorAll('input[type="number"][data-input]').forEach(inp => {
        inp.addEventListener('input', e => {
          const v = e.target.value === '' ? null : Number(e.target.value);
          this.setInput(e.target.dataset.input, v);
        });
      });
      panel.querySelectorAll('select[data-input]').forEach(sel => {
        sel.addEventListener('change', e => this.setInput(e.target.dataset.input, e.target.value));
      });
    }

    _renderInput(f){
      if (f.kind === 'number') {
        const v = this.state.inputs[f.id] ?? '';
        return `
          <div class="wu-inum">
            <span class="wu-inum-l">${f.label}${f.note ? `<small>${f.note}</small>` : ''}</span>
            <input type="number" data-input="${f.id}" value="${v}"
              min="${f.min ?? ''}" max="${f.max ?? ''}" step="${f.step ?? 1}" placeholder="—"/>
            <span class="wu-inum-unit">${f.unit || ''}</span>
          </div>
        `;
      }
      if (f.kind === 'select') {
        const v = this.state.inputs[f.id] ?? '';
        return `
          <div class="wu-iselect">
            <div class="wu-iselect-l">${f.label}${f.note ? `<small>${f.note}</small>` : ''}</div>
            <select data-input="${f.id}">
              <option value="">— select —</option>
              ${(f.options || []).map(opt => {
                const ov = typeof opt === 'string' ? opt : opt.value;
                const ol = typeof opt === 'string' ? opt : opt.label;
                return `<option value="${ov}" ${ov===v?'selected':''}>${ol}</option>`;
              }).join('')}
            </select>
          </div>
        `;
      }
      const checked = !!this.state.inputs[f.id];
      return `
        <label class="wu-iopt">
          <input type="checkbox" data-input="${f.id}" ${checked?'checked':''}/>
          <span class="wu-iopt-lbl">
            ${f.label}
            ${f.note ? `<span class="wu-iopt-note">${f.note}</span>` : ''}
          </span>
        </label>
      `;
    }

    // ====================================================
    // RESULTS RENDER (combined: triage on top → dx below)
    // ====================================================
    renderResults(){
      const panel = this.host.querySelector('.wu-verdict');
      if (!panel) return;

      const hasInput = Object.keys(this.state.inputs).filter(k => {
        const v = this.state.inputs[k];
        return v !== '' && v !== false && v !== null && v !== undefined;
      }).length > 0;

      // No input yet — empty state with patient line if dx topic
      if (!hasInput) {
        const patient = this.dxTopic()?.patientPresenting;
        panel.innerHTML = `
          ${patient ? `
            <div class="wu-patient">
              <h4>Presenting</h4>
              <p>“${patient}”</p>
            </div>
          ` : ''}
          <div class="wu-empty">
            <span class="wu-empty-ic">🩺</span>
            <div><b>Tick what the patient describes on the left.</b><br/>
              ${this.hasTriage() && this.hasDx() ? 'The tool will surface every triage rule that fires <em>and</em> rank the differential live.' :
                this.hasTriage() ? 'The tool will surface every NICE / Macmillan triage rule that fires.' :
                'The differential ranks live.'}
            </div>
          </div>
        `;
        return;
      }

      const triageScore = this.scoreTriage();
      const dxScore = this.scoreDx();

      let html = '';
      if (triageScore) html += this._renderTriagePanel(triageScore);
      if (dxScore) html += this._renderDxPanel(dxScore);

      panel.innerHTML = html;
      this._wireExpanders();
    }

    _wireExpanders(){
      this.host.querySelectorAll('.dx-pct-head').forEach(h => {
        h.addEventListener('click', () => h.parentElement.classList.toggle('is-open'));
      });
    }

    // ---------- TRIAGE PANEL ----------
    _renderTriagePanel(s){
      const tinfo = TIERS[s.headlineTier];
      const headline = `
        <header class="tr-headline ${tinfo.cls}">
          <div class="tr-hl-ic">${tinfo.icon}</div>
          <div class="tr-hl-text">
            <div class="tr-hl-tier">${tinfo.label}</div>
            <div class="tr-hl-title">${
              s.headlineRule ? s.headlineRule.label :
              (s.topic.defaultMessage || 'No red-flag rules have fired — proceed with routine workup.')
            }</div>
            ${s.headlineRule ? `<div class="tr-hl-action">${s.headlineRule.action || ''}</div>` : ''}
            ${s.headlineRule ? `
              <div class="tr-hl-btns">
                ${s.headlineRule.proformaUrl ? `
                  <a class="tr-btn" href="${s.headlineRule.proformaUrl}" target="_blank" rel="noopener noreferrer">
                    <span class="tr-btn-ic">↗</span> ${s.headlineRule.proformaLabel || 'Open 2WW proforma'}
                  </a>` : ''}
                <button class="tr-btn" onclick="window.print()" type="button">
                  <span class="tr-btn-ic">🖨</span> Print summary
                </button>
              </div>
            ` : ''}
          </div>
        </header>
      `;

      const tierBlocks = TIER_ORDER.map(tier => {
        const items = s.grouped[tier];
        if (!items.length) return '';
        const ti = TIERS[tier];
        return `
          <section class="tr-tier ${ti.tcls}">
            <div class="tr-tier-h">
              <span class="tr-tier-dot"></span>
              <span>${ti.icon} ${ti.label}</span>
              <span class="tr-tier-count">${items.length}</span>
            </div>
            <div class="tr-tier-body">
              ${items.map(r => this._renderTriageRule(r)).join('')}
            </div>
          </section>
        `;
      }).join('');

      return `
        <section class="wu-section wu-sect-triage">
          <div class="wu-section-h">
            <span class="wu-section-ic">🚦</span>
            <span>Triage — how urgent</span>
          </div>
          <div class="tr">
            ${headline}
            <div class="tr-stack">
              ${tierBlocks || `<div class="tr-empty">No triage rules fired beyond routine. Continue topic-specific workup.</div>`}
            </div>
          </div>
        </section>
      `;
    }

    _renderTriageRule(r){
      const trail = this.state.showTrail ? `
        <div class="tr-rule-trail">
          <small>Rule id: <code>${r.id}</code></small>
          ${r.source ? `<small>Source: ${r.sourceUrl ? `<a href="${r.sourceUrl}" target="_blank" rel="noopener noreferrer">${r.source}↗</a>` : r.source}</small>` : ''}
        </div>
      ` : '';
      return `
        <div class="tr-rule">
          <div class="tr-rule-l">
            <div class="tr-rule-label">${r.label}</div>
            ${r.action ? `<div class="tr-rule-action">${r.action}</div>` : ''}
            ${r.patientPhrase ? `<div class="tr-rule-phrase">${r.patientPhrase}</div>` : ''}
            ${trail}
          </div>
          ${r.proformaUrl ? `<a class="tr-rule-btn" href="${r.proformaUrl}" target="_blank" rel="noopener noreferrer">${r.proformaLabel || '2WW proforma'} ↗</a>` : ''}
        </div>
      `;
    }

    // ---------- DX PANEL ----------
    _renderDxPanel(s){
      const cantMissStrip = this._renderCantMiss(s);
      let body = '';
      if (this.state.dxView === 'percent') body = this._renderDxPercent(s);
      else if (this.state.dxView === 'buckets') body = this._renderDxBuckets(s);
      else if (this.state.dxView === 'procon') body = this._renderDxProCon(s);

      return `
        <section class="wu-section wu-sect-dx">
          <div class="wu-section-h">
            <span class="wu-section-ic">🩺</span>
            <span>Differential diagnosis — what is it</span>
          </div>
          <div class="dx">
            <div class="dx-verdict" style="padding:0;max-height:none">
              <div class="dx-verdict-body">
                ${cantMissStrip}
                ${body}
              </div>
            </div>
          </div>
        </section>
      `;
    }

    _renderCantMiss(s){
      const topic = s.topic;
      if (!s.triggeredCantMiss.size) return '';
      const items = Array.from(s.triggeredCantMiss).map(id => {
        const d = topic.diagnoses.find(x => x.id === id);
        if (!d) return '';
        const triggers = (s.reasons[id] || []).filter(r => r.weight > 0)
          .map(r => r.label).slice(0, 3).join(' · ');
        return `
          <div class="dx-cantmiss-item">
            <b>${d.name}</b>
            ${d.summary ? `<small><em>${d.summary}</em></small>` : ''}
            ${triggers ? `<small>Triggered by: ${triggers}</small>` : ''}
            ${d.redFlagAction ? `<span class="dx-cantmiss-action">${d.redFlagAction}</span>` : ''}
          </div>
        `;
      }).join('');
      return `
        <section class="dx-cantmiss">
          <div class="dx-cantmiss-h">🔴 Don't miss · Red-flag features triggered</div>
          <div class="dx-cantmiss-list">${items}</div>
        </section>
      `;
    }

    _renderDxPercent(s){
      const topic = s.topic;
      const rows = (topic.diagnoses || [])
        .map(d => ({ d, pct: s.pct[d.id] || 0 }))
        .filter(r => r.pct > 0.3 || (r.d.category === 'cant-miss' && s.triggeredCantMiss.has(r.d.id)))
        .sort((a,b) => b.pct - a.pct);
      if (!rows.length) return `<div class="dx-empty"><span class="dx-empty-ic">🤔</span>Not enough information to differentiate yet. Tick more features.</div>`;
      const topPct = rows[0].pct;
      return `
        <div class="dx-pct-list">
          ${rows.map((r,i) => this._renderDxPctRow(r.d, r.pct, i, s, topPct)).join('')}
        </div>
      `;
    }
    _renderDxPctRow(d, pct, idx, s, topPct){
      const w = Math.max(2, Math.round((pct / topPct) * 100));
      const cls = d.category === 'cant-miss' ? 'is-miss' :
                  (idx === 0 ? 'is-top' :
                  (pct >= 12 ? '' : 'is-consider'));
      const reasonsPro = (s.reasons[d.id] || []).filter(r => r.weight > 0).map(r => r.label);
      const reasonsCon = (s.reasons[d.id] || []).filter(r => r.weight < 0).map(r => r.label);
      return `
        <div class="dx-pct-row ${cls}" data-dx="${d.id}">
          <div class="dx-pct-head">
            <div class="dx-pct-rank">${idx+1}</div>
            <div class="dx-pct-mid">
              <div class="dx-pct-name">${d.name}${d.summary ? `<span class="dx-pct-summary">— ${d.summary}</span>` : ''}</div>
              <div class="dx-pct-bar"><div class="dx-pct-bar-fill" style="width:${w}%"></div></div>
            </div>
            <div style="display:flex;align-items:center">
              <div class="dx-pct-num">${pct.toFixed(0)}<span style="font-size:12px;color:var(--muted)">%</span></div>
              <span class="dx-pct-caret">▶</span>
            </div>
          </div>
          <div class="dx-pct-body">
            ${d.patientPhrase ? `
              <div class="dx-info" style="margin-bottom:10px;background:var(--bg-soft)">
                <h5><span class="dx-info-ic">💬</span> In plain English</h5>
                <p style="font-family:'Source Serif 4',serif;font-style:italic">${d.patientPhrase}</p>
              </div>
            ` : ''}
            <div class="dx-body-grid">
              ${d.keyExam ? `
                <div class="dx-info">
                  <h5><span class="dx-info-ic">👀</span> Key examination finding</h5>
                  <p>${d.keyExam}</p>
                </div>` : ''}
              ${d.nextIx ? `
                <div class="dx-info">
                  <h5><span class="dx-info-ic">🧪</span> Next investigation</h5>
                  <p>${d.nextIx}</p>
                </div>` : ''}
            </div>
            ${(reasonsPro.length || reasonsCon.length) ? `
              <div class="dx-info" style="margin-top:10px">
                <h5><span class="dx-info-ic">📊</span> Why this score</h5>
                <p style="font-size:12px">
                  ${reasonsPro.length ? `<span style="color:#15803d"><b>Supports:</b> ${reasonsPro.join(' · ')}</span>` : ''}
                  ${reasonsPro.length && reasonsCon.length ? '<br/>' : ''}
                  ${reasonsCon.length ? `<span style="color:#b91c1c"><b>Against:</b> ${reasonsCon.join(' · ')}</span>` : ''}
                </p>
              </div>` : ''}
            <div style="display:flex;gap:14px;align-items:center;margin-top:10px;flex-wrap:wrap">
              ${d.ciksUrl ? `<a href="${d.ciksUrl}" target="_blank" rel="noopener noreferrer" style="font-size:12px;font-weight:600">NICE CKS reference ↗</a>` : ''}
              ${d.caseLink ? `<a class="dx-case-link" href="${d.caseLink}">→ Open full case on Reasoning GP</a>` : ''}
            </div>
          </div>
        </div>
      `;
    }

    _renderDxBuckets(s){
      const topic = s.topic;
      const ranked = (topic.diagnoses || [])
        .filter(d => d.category !== 'cant-miss')
        .map(d => ({ d, pct: s.pct[d.id] || 0 }))
        .filter(r => r.pct > 0.5)
        .sort((a,b) => b.pct - a.pct);
      const likely = ranked.filter((r,i) => r.pct >= 25 || i === 0).slice(0, 3);
      const likelyIds = new Set(likely.map(r => r.d.id));
      const consider = ranked.filter(r => !likelyIds.has(r.d.id) && r.pct >= 3);
      const cantMiss = (topic.diagnoses || []).filter(d => d.category === 'cant-miss');

      const card = r => `
        <div class="dx-bucket-card">
          <b>${r.d.name}</b>
          <small>${r.d.summary || ''}</small>
          ${r.pct ? `<span class="dx-bc-pct">${r.pct.toFixed(0)}%</span>` : ''}
        </div>
      `;
      const missCard = d => {
        const triggered = s.triggeredCantMiss.has(d.id);
        return `
          <div class="dx-bucket-card" style="${triggered?'border-color:var(--dx-miss-bd);background:#fff5f5':''}">
            <b>${d.name}${triggered?' 🔴':''}</b>
            <small>${d.summary || ''}</small>
            ${triggered ? `<span class="dx-bc-pct">RED FLAG FIRED</span>` : `<span class="dx-bc-pct" style="background:#f1f5f9;color:#64748b">screen for</span>`}
          </div>
        `;
      };
      return `
        <div class="dx-buckets">
          <section class="dx-bucket is-likely">
            <div class="dx-bucket-h">✓ Most likely</div>
            <div class="dx-bucket-body">
              ${likely.length ? likely.map(card).join('') : '<div class="dx-bucket-empty">Need more info to narrow…</div>'}
            </div>
          </section>
          <section class="dx-bucket is-consider">
            <div class="dx-bucket-h">⚖ Consider</div>
            <div class="dx-bucket-body">
              ${consider.length ? consider.map(card).join('') : '<div class="dx-bucket-empty">—</div>'}
            </div>
          </section>
          <section class="dx-bucket is-miss">
            <div class="dx-bucket-h">⚠ Don't miss</div>
            <div class="dx-bucket-body">
              ${cantMiss.length ? cantMiss.map(missCard).join('') : '<div class="dx-bucket-empty">—</div>'}
            </div>
          </section>
        </div>
      `;
    }

    _renderDxProCon(s){
      const topic = s.topic;
      const ranked = (topic.diagnoses || [])
        .map(d => ({ d, pct: s.pct[d.id] || 0 }))
        .filter(r => r.pct > 0.5 || (r.d.category === 'cant-miss' && s.triggeredCantMiss.has(r.d.id)))
        .sort((a,b) => b.pct - a.pct)
        .slice(0, 6);
      if (!ranked.length) return `<div class="dx-empty"><span class="dx-empty-ic">🤔</span>Tick more features to populate the pro/con view.</div>`;
      const askAbout = topic.askAbout || {};
      const inputById = id => (topic.inputs || []).find(i => i.id === id);
      return `
        <div class="dx-procon-list">
          ${ranked.map((r,i) => {
            const d = r.d;
            const pros = (s.reasons[d.id] || []).filter(x => x.weight > 0)
              .map(x => `<li>${x.label}<small>+${x.weight} weight</small></li>`).join('');
            const cons = (s.reasons[d.id] || []).filter(x => x.weight < 0)
              .map(x => `<li>${x.label}<small>${x.weight} weight</small></li>`).join('');
            const asks = (askAbout[d.id] || [])
              .filter(fid => !this.state.inputs[fid])
              .map(fid => {
                const f = inputById(fid);
                return f ? `<li>${f.label}<small>not yet asked</small></li>` : '';
              }).join('');
            const cls = d.category === 'cant-miss' ? 'is-miss' : (i === 0 ? 'is-top' : '');
            return `
              <div class="dx-procon-card ${cls}">
                <div class="dx-procon-h">
                  <span class="dx-procon-name">${d.name}</span>
                  <span class="dx-procon-summary">${d.summary || ''}</span>
                  <span class="dx-procon-pct">${r.pct.toFixed(0)}%</span>
                </div>
                <div class="dx-procon-grid">
                  <div class="dx-procon-col dx-pc-pro">
                    <h6>✓ Supports</h6>
                    <ul>${pros || '<li style="color:var(--muted);font-style:italic">— none ticked</li>'}</ul>
                  </div>
                  <div class="dx-procon-col dx-pc-con">
                    <h6>✗ Against</h6>
                    <ul>${cons || '<li style="color:var(--muted);font-style:italic">— none ticked</li>'}</ul>
                  </div>
                  <div class="dx-procon-col dx-pc-ask">
                    <h6>💡 Ask about</h6>
                    <ul>${asks || '<li style="color:var(--muted);font-style:italic">— no priority asks</li>'}</ul>
                  </div>
                </div>
                <div style="display:flex;gap:14px;align-items:center;margin-top:10px;flex-wrap:wrap;font-size:12px">
                  ${d.keyExam ? `<span><b style="color:var(--teal)">👀 Exam:</b> ${d.keyExam}</span>` : ''}
                  ${d.nextIx ? `<span><b style="color:var(--teal)">🧪 Next Ix:</b> ${d.nextIx}</span>` : ''}
                  ${d.caseLink ? `<a class="dx-case-link" href="${d.caseLink}">→ Full case</a>` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }
  }

  // ---------- Public API ----------
  const RGPWorkup = {
    TOPICS,
    mount(el, topicId){ return new Workup(el, topicId); },
    autoMount(){
      document.querySelectorAll('[data-workup]').forEach(el => {
        if (el.__wu_mounted) return;
        el.__wu_mounted = true;
        const t = el.dataset.workup;
        if (t) new Workup(el, t);
      });
    },
  };
  window.RGPWorkup = RGPWorkup;

  function init(){
    // Wait briefly for data files to register, then auto-mount.
    const tryMount = (n=0) => {
      const ready = (window.RGPTriage && window.RGPDiagnostic);
      if (ready || n > 30) { RGPWorkup.autoMount(); wireHashDeepLink(); return; }
      setTimeout(() => tryMount(n+1), 20);
    };
    tryMount();
  }

  // ---------- Hash deep-linking ----------
  // tools/workup.html#headache → opens the Headache topic
  function wireHashDeepLink(){
    function applyHash(){
      const h = (location.hash || '').replace(/^#/, '').trim();
      if (!h) return;
      const topic = TOPICS.find(t => t.id === h);
      if (!topic) return;
      // Find the mounted Workup instance and switch topic
      document.querySelectorAll('[data-workup]').forEach(el => {
        // The Workup instance is stashed on the element via __wu_mounted; we re-mount cleanly.
        // Simplest: scan for active instance and call setTopic via a re-mount.
        // Since constructors stash no back-ref, we re-instantiate.
        el.__wu_mounted = false;
        el.innerHTML = '';
        new Workup(el, topic.id);
        el.__wu_mounted = true;
        // Scroll target element into view (avoid scrollIntoView per app conventions)
        const rect = el.getBoundingClientRect();
        const y = window.scrollY + rect.top - 90;
        window.scrollTo({ top: y, behavior:'smooth' });
      });
    }
    applyHash();
    window.addEventListener('hashchange', applyHash);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
