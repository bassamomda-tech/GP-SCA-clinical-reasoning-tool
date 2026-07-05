/* ============================================
   Reasoning GP — Diagnostic Tool engine
   Symptom-based differential diagnosis
   ============================================

   USAGE:
     <link rel="stylesheet" href="assets/diagnostic.css" />
     <div data-diagnostic="headache" data-topic-picker="1"></div>
     <script src="assets/diagnostic.js"></script>
     <script src="assets/diagnostic/headache.js"></script>

   TOPIC DATA SHAPE:
   RGPDiagnostic.register('headache', {
     title, subtitle, guideline,
     patientPresenting: 'Patient quote at top, like a vignette opener',
     xlink: { topic:'tiredness', label:'…' }, // optional triage tool cross-link

     // Inputs the clinician ticks/enters
     inputs: [
       { group, id, label, kind:'check'|'number'|'select', options, note, unit, min, max, step }
     ],

     // Diagnoses (DDx items the tool reasons about)
     diagnoses: [
       {
         id, name, plainName, summary, // 1-line description
         baseline,                      // base "points" (rough pre-test weight)
         category: 'common'|'less-common'|'rare'|'cant-miss',
         keyExam, nextIx, caseLink, ciksUrl,
         patientPhrase,                 // plain-English explanation
         redFlagAction,                 // for can't-miss diagnoses only
       }
     ],

     // Effects map: each input id => { dxId: weight, ... }
     // Positive weight = supports that Dx; negative = refutes.
     // For numeric/select inputs, use `effectFn(value, inputs) -> { dxId: w }`
     effects: {
       'photophobia': { migraine:+12, tth:-3, sah:+6, meningitis:+5 },
       'age':         (val,ins) => val >= 50 ? { gca:+15, tumour:+4 } : {},
     },

     // Optional: ask-about features that strongly disambiguate top Dx, surfaced when key info missing
     askAbout: { dxId: ['feature_id', ...] },

     sources: [{label, url}],
     defaultMessage: 'shown when no inputs yet',
   });
   ============================================ */
(function(){
  const TOPICS = {};

  const RGPDiagnostic = {
    register(name, data){ TOPICS[name] = data; this._notify(name); },
    list(){ return Object.keys(TOPICS); },
    get(n){ return TOPICS[n]; },
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
      const inst = new DxInstance(el, topic);
      this._whenReady(topic, data => inst.setTopic(topic, data));
      return inst;
    },
    autoMount(){
      document.querySelectorAll('[data-diagnostic]').forEach(el => {
        if (el.__dx_mounted) return;
        el.__dx_mounted = true;
        const t = el.dataset.diagnostic;
        if (t) this.mount(el, t);
      });
    }
  };

  // ---------- INSTANCE ----------
  class DxInstance {
    constructor(host, topicName){
      this.host = host;
      this.topicName = topicName;
      this.state = {
        inputs: {},
        view: 'percent', // 'percent' | 'buckets' | 'procon'
      };
      this.topicPicker = host.dataset.topicPicker === '1';
      host.classList.add('dx');
      host.innerHTML = `<div style="padding:30px;color:#64748b;font-size:13px;font-style:italic">Loading diagnostic data…</div>`;
    }

    setTopic(name, data){
      this.topicName = name; this.topic = data;
      const ins = {};
      (data.inputs||[]).forEach(f => {
        if (f.kind === 'number' && f.default !== undefined) ins[f.id] = f.default;
        if (f.kind === 'select' && f.default !== undefined) ins[f.id] = f.default;
      });
      this.state.inputs = ins;
      this.render();
    }

    setView(v){ this.state.view = v; this.render(); }
    setInput(id, val){
      if (val === undefined || val === '' || val === null || val === false) delete this.state.inputs[id];
      else this.state.inputs[id] = val;
      this.renderResults();
      // NOTE: do NOT re-render the inputs panel here — it would destroy the
      // focused <input> mid-typing. Checkbox highlighting is handled by CSS
      // (`.dx-iopt:has(input:checked)`), so no rebuild is needed.
    }
    reset(){
      const ins = {};
      (this.topic.inputs||[]).forEach(f => {
        if (f.kind === 'number' && f.default !== undefined) ins[f.id] = f.default;
        if (f.kind === 'select' && f.default !== undefined) ins[f.id] = f.default;
      });
      this.state.inputs = ins;
      this.render();
    }

    // -------- core scoring --------
    score(){
      const t = this.topic;
      const inputs = this.state.inputs;
      const fxMap = t.effects || {};
      const result = {};
      const reasons = {}; // dxId -> [{ inputId, label, weight }]
      const triggeredCantMiss = new Set();

      // Init each Dx with its baseline
      (t.diagnoses||[]).forEach(d => {
        result[d.id] = d.baseline ?? 10;
        reasons[d.id] = [];
      });

      // Apply effects from each input
      (t.inputs||[]).forEach(inp => {
        const val = inputs[inp.id];
        // For checks, only fire if true
        if (inp.kind === 'check' && !val) return;
        if (val === undefined || val === null || val === '') return;

        const fx = fxMap[inp.id];
        let appliedEffects = null;
        if (typeof fx === 'function') {
          try { appliedEffects = fx(val, inputs); } catch(e){ appliedEffects = null; }
        } else if (fx && typeof fx === 'object') {
          appliedEffects = fx;
        }
        if (!appliedEffects) return;

        Object.entries(appliedEffects).forEach(([dxId, w]) => {
          if (!(dxId in result)) return;
          result[dxId] += w;
          reasons[dxId].push({ inputId: inp.id, label: inp.label, weight: w, value: val });
          // Trigger can't-miss surfacing
          const dxObj = t.diagnoses.find(d => d.id === dxId);
          if (dxObj && dxObj.category === 'cant-miss' && w > 0) {
            triggeredCantMiss.add(dxId);
          }
        });
      });

      // Clamp negative scores to a small floor
      Object.keys(result).forEach(k => { if (result[k] < 1) result[k] = 1; });

      // Compute relative %
      let total = 0;
      Object.entries(result).forEach(([id, s]) => {
        const d = t.diagnoses.find(dd => dd.id === id);
        // exclude can't-miss from the "normal" % bar UNLESS triggered
        if (d && d.category === 'cant-miss' && !triggeredCantMiss.has(id)) return;
        total += s;
      });
      const pct = {};
      Object.entries(result).forEach(([id, s]) => {
        const d = t.diagnoses.find(dd => dd.id === id);
        if (d && d.category === 'cant-miss' && !triggeredCantMiss.has(id)) {
          pct[id] = 0;
          return;
        }
        pct[id] = total > 0 ? (s / total) * 100 : 0;
      });

      return { raw: result, pct, reasons, triggeredCantMiss };
    }

    // -------- render --------
    render(){
      if (!this.topic) return;
      const t = this.topic;
      this.host.innerHTML = this._innerMarkup();
      this._wire();
      this.renderInputs();
      this.renderResults();
    }

    _innerMarkup(){
      const t = this.topic;
      const tp = this.topicPicker ? this._renderTopicPicker() : '';
      const xlink = t.xlink ? `
        <div class="dx-xlink">
          <span class="dx-xlink-ic">🚦</span>
          <div class="dx-xlink-text">
            <b>This presentation also has a triage view.</b><br/>
            ${t.xlink.label || 'Use the Triage Tool to surface 2WW and emergency thresholds for the same patient.'}
          </div>
          <a href="${t.xlink.url || '../tools/triage-tool.html'}">Open Triage Tool ↗</a>
        </div>
      ` : '';

      return `
        <div class="dx-head">
          <div class="dx-head-l">
            <div class="dx-eyebrow">Diagnostic Tool</div>
            <div class="dx-title">${t.title || 'Differential Diagnosis'}</div>
            ${t.subtitle ? `<div class="dx-sub">${t.subtitle}</div>` : ''}
            ${t.guideline ? `<div class="dx-source-pill">${t.guideline}</div>` : ''}
          </div>
          <div class="dx-head-r">
            <div class="dx-view-toggle" role="tablist" aria-label="Display view">
              <button data-view="percent"  class="${this.state.view==='percent'?'active':''}">% Likelihood</button>
              <button data-view="buckets"  class="${this.state.view==='buckets'?'active':''}">Buckets</button>
              <button data-view="procon"   class="${this.state.view==='procon'?'active':''}">Pro / Con</button>
            </div>
          </div>
        </div>
        ${tp}
        <div class="dx-body">
          <aside class="dx-inputs"></aside>
          <div class="dx-verdict">${xlink}<div class="dx-verdict-body"></div></div>
        </div>
        <footer class="dx-footer">
          <div>
            <h5>Sources & evidence</h5>
            <div class="dx-sources-list">
              ${(t.sources||[]).map(s => `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label} ↗</a>`).join('')}
            </div>
          </div>
          <div class="dx-disclaimer">
            <strong>Educational use only.</strong> Probabilities are calculated from feature-weight heuristics aligned to NICE CKS, BMJ Best Practice and named guidelines — they are <em>not</em> validated clinical decision rules. Always confirm with full history, examination, and your local pathway.
          </div>
        </footer>
      `;
    }

    _renderTopicPicker(){
      const all = RGPDiagnostic.list();
      return `
        <div class="dx-topic-picker">
          <span class="dx-topic-picker-label">Presenting complaint</span>
          <div class="dx-topic-pills">
            ${all.map(t => `<button class="dx-topic-pill ${t===this.topicName?'active':''}" data-topic="${t}">${TOPICS[t].title}</button>`).join('')}
          </div>
        </div>
      `;
    }

    _wire(){
      this.host.querySelectorAll('.dx-view-toggle button').forEach(btn => {
        btn.addEventListener('click', () => this.setView(btn.dataset.view));
      });
      this.host.querySelectorAll('.dx-topic-pill').forEach(b => {
        b.addEventListener('click', () => {
          const t = b.dataset.topic;
          if (TOPICS[t]) this.setTopic(t, TOPICS[t]);
        });
      });
    }

    // -------- INPUTS render --------
    renderInputs(preserve){
      const panel = this.host.querySelector('.dx-inputs');
      if (!panel) return;
      const inputs = this.topic.inputs || [];
      const groups = {}; const order = [];
      inputs.forEach(f => {
        const g = f.group || 'Other';
        if (!groups[g]) { groups[g] = []; order.push(g); }
        groups[g].push(f);
      });

      const scrollTop = preserve ? panel.scrollTop : 0;
      panel.innerHTML = `
        <div class="dx-inputs-head">
          <h4>Symptoms · features · context</h4>
          <button class="dx-reset" type="button">Reset</button>
        </div>
        ${order.map(g => `
          <div class="dx-igroup">
            <div class="dx-igroup-t">${g}</div>
            <div class="dx-iopts">
              ${groups[g].map(f => this._renderInput(f)).join('')}
            </div>
          </div>
        `).join('')}
      `;
      panel.scrollTop = scrollTop;

      panel.querySelector('.dx-reset').addEventListener('click', () => this.reset());
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
          <div class="dx-inum">
            <span class="dx-inum-l">${f.label}${f.note ? `<small>${f.note}</small>` : ''}</span>
            <input type="number" data-input="${f.id}" value="${v}"
              min="${f.min ?? ''}" max="${f.max ?? ''}" step="${f.step ?? 1}" placeholder="—"/>
            <span class="dx-inum-unit">${f.unit || ''}</span>
          </div>
        `;
      }
      if (f.kind === 'select') {
        const v = this.state.inputs[f.id] ?? '';
        return `
          <div class="dx-iselect">
            <div class="dx-iselect-l">${f.label}${f.note ? `<small style="display:block;font-size:11px;color:var(--muted);margin-top:2px">${f.note}</small>` : ''}</div>
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
        <label class="dx-iopt">
          <input type="checkbox" data-input="${f.id}" ${checked?'checked':''}/>
          <span class="dx-iopt-lbl">
            ${f.label}
            ${f.note ? `<span class="dx-iopt-note">${f.note}</span>` : ''}
          </span>
        </label>
      `;
    }

    // -------- RESULTS render --------
    renderResults(){
      const panel = this.host.querySelector('.dx-verdict-body');
      if (!panel) return;
      const t = this.topic;
      const scoring = this.score();
      const hasInput = Object.keys(this.state.inputs).filter(k => {
        const v = this.state.inputs[k];
        return v !== '' && v !== false && v !== null && v !== undefined;
      }).length > 0;

      if (!hasInput) {
        panel.innerHTML = `
          ${this._renderPatientLine()}
          <div class="dx-empty">
            <span class="dx-empty-ic">🩺</span>
            <div><b>Tick symptoms on the left.</b><br/>The tool will rank the differential live — by % likelihood, in three buckets, or as a pros-and-cons breakdown per diagnosis.</div>
          </div>
        `;
        return;
      }

      // Don't-miss strip
      const cantMissStrip = this._renderCantMiss(scoring);

      // Body by view
      let body = '';
      if (this.state.view === 'percent') body = this._renderPercent(scoring);
      else if (this.state.view === 'buckets') body = this._renderBuckets(scoring);
      else if (this.state.view === 'procon') body = this._renderProCon(scoring);

      panel.innerHTML = `
        ${this._renderPatientLine()}
        ${cantMissStrip}
        ${this._renderMetaRow(scoring)}
        ${body}
      `;

      // Wire row expanders for the % view
      panel.querySelectorAll('.dx-pct-head').forEach(h => {
        h.addEventListener('click', () => h.parentElement.classList.toggle('is-open'));
      });
      panel.querySelectorAll('[data-bucket-jump]').forEach(c => {
        c.addEventListener('click', () => {
          const id = c.dataset.bucketJump;
          this.setView('percent');
          setTimeout(()=> {
            const row = this.host.querySelector(`.dx-pct-row[data-dx="${id}"]`);
            if (row) {
              row.classList.add('is-open');
              row.scrollIntoView({block:'nearest', behavior:'smooth'});
            }
          }, 40);
        });
      });
    }

    _renderPatientLine(){
      const t = this.topic;
      if (!t.patientPresenting) return '';
      return `
        <div class="dx-summary-box">
          <h4>Presenting</h4>
          <p>“${t.patientPresenting}”</p>
        </div>
      `;
    }

    _renderMetaRow(scoring){
      const tickedCount = Object.keys(this.state.inputs).filter(k => {
        const v = this.state.inputs[k];
        return v !== '' && v !== false && v !== null && v !== undefined;
      }).length;
      const dxCount = (this.topic.diagnoses||[]).length;
      return `
        <div class="dx-meta-row">
          <div><b>${tickedCount}</b> features entered · weighing <b>${dxCount}</b> differentials</div>
          <div class="dx-action-btns">
            <button data-act="copy" type="button">📋 Copy summary</button>
            <button data-act="print" type="button" onclick="window.print()">🖨 Print</button>
          </div>
        </div>
      `;
    }

    _renderCantMiss(scoring){
      const t = this.topic;
      if (!scoring.triggeredCantMiss.size) return '';
      const items = Array.from(scoring.triggeredCantMiss).map(id => {
        const d = t.diagnoses.find(x => x.id === id);
        if (!d) return '';
        const triggers = (scoring.reasons[id]||[]).filter(r => r.weight > 0)
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

    _renderPercent(scoring){
      const t = this.topic;
      // Build a sorted list
      const rows = (t.diagnoses||[])
        .map(d => ({ d, pct: scoring.pct[d.id] || 0 }))
        .filter(r => r.pct > 0.3 || r.d.category === 'cant-miss' && scoring.triggeredCantMiss.has(r.d.id))
        .sort((a,b) => b.pct - a.pct);
      if (!rows.length) {
        return `<div class="dx-empty"><span class="dx-empty-ic">🤔</span>Not enough information to differentiate yet. Tick more features.</div>`;
      }
      const topPct = rows[0].pct;
      return `
        <div class="dx-pct-list">
          ${rows.map((r,i) => this._renderPctRow(r.d, r.pct, i, scoring, topPct)).join('')}
        </div>
      `;
    }

    _renderPctRow(d, pct, idx, scoring, topPct){
      const w = Math.max(2, Math.round((pct/topPct) * 100));
      const cls = d.category === 'cant-miss' ? 'is-miss' :
                  (idx === 0 ? 'is-top' :
                  (pct >= 12 ? '' : 'is-consider'));
      const reasonsPro = (scoring.reasons[d.id]||[]).filter(r => r.weight > 0).map(r => r.label);
      const reasonsCon = (scoring.reasons[d.id]||[]).filter(r => r.weight < 0).map(r => r.label);
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

    _renderBuckets(scoring){
      const t = this.topic;
      const ranked = (t.diagnoses||[])
        .filter(d => d.category !== 'cant-miss')
        .map(d => ({ d, pct: scoring.pct[d.id] || 0 }))
        .filter(r => r.pct > 0.5)
        .sort((a,b) => b.pct - a.pct);

      const likely = ranked.filter((r,i) => r.pct >= 25 || i === 0).slice(0, 3);
      const likelyIds = new Set(likely.map(r => r.d.id));
      const consider = ranked.filter(r => !likelyIds.has(r.d.id) && r.pct >= 3);
      const cantMiss = (t.diagnoses||[]).filter(d => d.category === 'cant-miss');

      const card = (r, bucketCls) => `
        <div class="dx-bucket-card" data-bucket-jump="${r.d.id}">
          <b>${r.d.name}</b>
          <small>${r.d.summary || ''}</small>
          ${r.pct ? `<span class="dx-bc-pct">${r.pct.toFixed(0)}%</span>` : ''}
        </div>
      `;
      const missCard = d => {
        const triggered = scoring.triggeredCantMiss.has(d.id);
        return `
          <div class="dx-bucket-card" data-bucket-jump="${d.id}" style="${triggered?'border-color:var(--dx-miss-bd);background:#fff5f5':''}">
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
              ${likely.length ? likely.map(r=>card(r)).join('') : '<div class="dx-bucket-empty">Need more info to narrow…</div>'}
            </div>
          </section>
          <section class="dx-bucket is-consider">
            <div class="dx-bucket-h">⚖ Consider</div>
            <div class="dx-bucket-body">
              ${consider.length ? consider.map(r=>card(r)).join('') : '<div class="dx-bucket-empty">—</div>'}
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

    _renderProCon(scoring){
      const t = this.topic;
      const ranked = (t.diagnoses||[])
        .map(d => ({ d, pct: scoring.pct[d.id] || 0 }))
        .filter(r => r.pct > 0.5 || (r.d.category==='cant-miss' && scoring.triggeredCantMiss.has(r.d.id)))
        .sort((a,b) => b.pct - a.pct)
        .slice(0, 6); // top 6
      if (!ranked.length) {
        return `<div class="dx-empty"><span class="dx-empty-ic">🤔</span>Tick more features to populate the pro/con view.</div>`;
      }

      const askAbout = t.askAbout || {};
      const inputById = id => (t.inputs||[]).find(i => i.id === id);

      return `
        <div class="dx-procon-list">
          ${ranked.map((r,i) => {
            const d = r.d;
            const pros = (scoring.reasons[d.id]||[]).filter(x => x.weight > 0)
              .map(x => `<li>${x.label}<small>+${x.weight} weight</small></li>`).join('');
            const cons = (scoring.reasons[d.id]||[]).filter(x => x.weight < 0)
              .map(x => `<li>${x.label}<small>${x.weight} weight</small></li>`).join('');
            const asks = (askAbout[d.id]||[])
              .filter(fid => !this.state.inputs[fid])
              .map(fid => {
                const f = inputById(fid);
                return f ? `<li>${f.label}<small>not yet asked</small></li>` : '';
              }).join('');
            const cls = d.category === 'cant-miss' ? 'is-miss' : (i===0?'is-top':'');
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

  // export & auto-mount
  window.RGPDiagnostic = RGPDiagnostic;
  function init(){ RGPDiagnostic.autoMount(); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
