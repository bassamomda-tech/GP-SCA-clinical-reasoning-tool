/* ============================================
   Reasoning GP — Medication Chooser engine
   Topic-agnostic component, mounts into any host
   ============================================

   USAGE
   -----
   <link rel="stylesheet" href="assets/medchooser.css" />
   <div data-medchooser="hypertension"></div>
   <script src="assets/medchooser.js"></script>
   <script src="assets/meds/hypertension.js"></script>

   Or programmatically:
   MedChooser.mount(elem, 'hypertension');

   TOPIC DATA SHAPE
   ----------------
   MedChooser.register('hypertension', {
     title, subtitle, guideline,
     factors: [{ group, id, label, note, numeric?: {min,max,step,unit,default} }, ...],
     drugs: [{
       id, name, examples, step,
       source, sourceUrl,
       sideEffects, monitor, counsel,
       detail: { interactions, dose, key },          // optional, shown in expand
       evaluate(f) -> { tier: 'preferred'|'acceptable'|'avoid', reasons: [{kind:'good'|'bad'|'neutral', text}] }
     }, ...],
     sources: [{ label, url }, ...],
     flags?: (f) => [{ tone:'red'|'amber', text }],  // global safety flags
   });
   ============================================ */
(function(){
  const TOPICS = {};

  const MedChooser = {
    register(name, data){ TOPICS[name] = data; this._notify(name); },
    list(){ return Object.keys(TOPICS); },
    get(name){ return TOPICS[name]; },
    _pending: [],
    _notify(name){
      this._pending = this._pending.filter(item => {
        if (item.name === name) { item.cb(TOPICS[name]); return false; }
        return true;
      });
    },
    _whenReady(name, cb){
      if (TOPICS[name]) cb(TOPICS[name]);
      else this._pending.push({name, cb});
    },
    mount(el, topicName){
      const inst = new ChooserInstance(el, topicName);
      this._whenReady(topicName, data => inst.setTopic(topicName, data));
      return inst;
    },
    autoMount(){
      document.querySelectorAll('[data-medchooser]').forEach(el => {
        if (el.__mc_mounted) return;
        el.__mc_mounted = true;
        const t = el.dataset.medchooser;
        if (t) this.mount(el, t);
      });
    }
  };

  class ChooserInstance {
    constructor(host, topicName){
      this.host = host;
      this.topicName = topicName;
      this.state = {
        factors: {},        // id -> true | numeric value
        mode: 'clinic',     // clinic | sca
        reasoning: false,
        topics: null,       // populated for topic-picker pages
      };
      // Loading skeleton
      host.classList.add('mc');
      host.innerHTML = `<div class="mc-results"><div class="mc-tier-empty">Loading medication data…</div></div>`;
    }

    setTopic(topicName, data){
      this.topicName = topicName;
      this.topic = data;
      this.state.factors = {};
      // Pre-fill numeric defaults
      (data.factors||[]).forEach(f => {
        if (f.numeric && f.numeric.default !== undefined) this.state.factors[f.id] = f.numeric.default;
      });
      this.render();
    }

    setMode(m){ this.state.mode = m; this.render(); }
    toggleFactor(id, val){
      if (val === undefined) {
        if (this.state.factors[id]) delete this.state.factors[id];
        else this.state.factors[id] = true;
      } else if (val === false || val === null) {
        delete this.state.factors[id];
      } else {
        this.state.factors[id] = val;
      }
      this.renderResults();
    }
    resetFactors(){
      this.state.factors = {};
      (this.topic.factors||[]).forEach(f => {
        if (f.numeric && f.numeric.default !== undefined) this.state.factors[f.id] = f.numeric.default;
      });
      this.render();
    }
    toggleReasoning(v){ this.state.reasoning = v; this.renderResults(); }

    // ---------- rendering ----------
    render(){
      if (!this.topic) return;
      const t = this.topic;
      this.host.className = 'mc' + (this.state.mode === 'sca' ? ' is-sca' : '');

      const topicPicker = this.host.dataset.topicPicker === '1'
        ? this.renderTopicPicker() : '';

      this.host.innerHTML = `
        <div class="mc-head">
          <div class="mc-head-l">
            <div class="mc-eyebrow">Medication Chooser</div>
            <div class="mc-title">${t.title}</div>
            ${t.subtitle ? `<div class="mc-sub">${t.subtitle}</div>` : ''}
            ${t.guideline ? `<div class="mc-source-pill">${t.guideline}</div>` : ''}
          </div>
          <div class="mc-head-r">
            <div class="mc-mode" role="tablist" aria-label="Display mode">
              <button data-mode="clinic" class="${this.state.mode==='clinic'?'active':''}">Clinic detail</button>
              <button data-mode="sca" class="${this.state.mode==='sca'?'active':''}">SCA view</button>
            </div>
            <div class="mc-toggles">
              <label><input type="checkbox" data-toggle="reasoning" ${this.state.reasoning?'checked':''}/> Show reasoning</label>
            </div>
          </div>
        </div>
        ${topicPicker}
        <div class="mc-body">
          <aside class="mc-factors" aria-label="Patient factors"></aside>
          <div class="mc-results"></div>
        </div>
        <footer class="mc-footer">
          <div class="mc-footer-l">
            <h5>Sources</h5>
            <div class="mc-sources-list">
              ${(t.sources||[]).map(s => `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label} ↗</a>`).join('')}
            </div>
          </div>
          <div class="mc-disclaimer">
            <strong>Educational use only.</strong> Always verify against the live NICE CKS and BNF before prescribing. Recommendations are illustrative reasoning aids, not clinical advice.
          </div>
        </footer>
      `;

      // Wire mode + toggles
      this.host.querySelectorAll('.mc-mode button').forEach(btn => {
        btn.addEventListener('click', () => this.setMode(btn.dataset.mode));
      });
      this.host.querySelector('[data-toggle="reasoning"]').addEventListener('change', e => {
        this.toggleReasoning(e.target.checked);
      });

      // Topic picker wiring
      this.host.querySelectorAll('.mc-topic-pill').forEach(b => {
        b.addEventListener('click', () => {
          const t = b.dataset.topic;
          if (TOPICS[t]) this.setTopic(t, TOPICS[t]);
        });
      });

      this.renderFactors();
      this.renderResults();
    }

    renderTopicPicker(){
      const all = MedChooser.list();
      return `
        <div class="mc-topic-picker">
          <span class="mc-topic-picker-label">Topic</span>
          <div class="mc-topic-pills">
            ${all.map(t => `<button class="mc-topic-pill ${t===this.topicName?'active':''}" data-topic="${t}">${TOPICS[t].title}</button>`).join('')}
          </div>
        </div>
      `;
    }

    renderFactors(){
      const panel = this.host.querySelector('.mc-factors');
      if (!panel) return;
      const factors = this.topic.factors || [];

      // Group factors
      const groups = {};
      const order = [];
      factors.forEach(f => {
        const g = f.group || 'Other';
        if (!groups[g]) { groups[g] = []; order.push(g); }
        groups[g].push(f);
      });

      panel.innerHTML = `
        <div class="mc-factors-head">
          <h4>Patient factors</h4>
          <button class="mc-reset" type="button">Reset</button>
        </div>
        ${order.map(g => `
          <div class="mc-fgroup">
            <div class="mc-fgroup-t">${g}</div>
            <div class="mc-fopts">
              ${groups[g].map(f => this.renderFactor(f)).join('')}
            </div>
          </div>
        `).join('')}
      `;

      panel.querySelector('.mc-reset').addEventListener('click', () => this.resetFactors());

      panel.querySelectorAll('input[type="checkbox"][data-factor]').forEach(cb => {
        cb.addEventListener('change', e => this.toggleFactor(e.target.dataset.factor));
      });
      panel.querySelectorAll('input[type="number"][data-factor]').forEach(inp => {
        inp.addEventListener('input', e => {
          const v = e.target.value === '' ? null : Number(e.target.value);
          this.toggleFactor(e.target.dataset.factor, v);
        });
      });
      panel.querySelectorAll('select[data-factor]').forEach(sel => {
        sel.addEventListener('change', e => {
          const v = e.target.value === '' ? null : e.target.value;
          this.toggleFactor(e.target.dataset.factor, v);
        });
      });
    }

    renderFactor(f){
      if (f.numeric) {
        const v = this.state.factors[f.id] ?? '';
        return `
          <div class="mc-fopt" style="cursor:default">
            <span class="mc-fopt-lbl">
              <b style="font-weight:600">${f.label}</b>
              ${f.note ? `<span class="mc-fopt-note">${f.note}</span>` : ''}
            </span>
          </div>
          <div class="mc-fnum">
            <input type="number" data-factor="${f.id}" value="${v}"
              min="${f.numeric.min ?? ''}" max="${f.numeric.max ?? ''}" step="${f.numeric.step ?? 1}"
              style="width:70px"/>
            ${f.numeric.unit ? `<span style="font-size:11px;color:var(--muted)">${f.numeric.unit}</span>` : ''}
          </div>
        `;
      }
      if (f.options) {
        const v = this.state.factors[f.id] ?? '';
        return `
          <label class="mc-fopt" style="cursor:default">
            <span class="mc-fopt-lbl">
              <b style="font-weight:600">${f.label}</b>
              ${f.note ? `<span class="mc-fopt-note">${f.note}</span>` : ''}
            </span>
          </label>
          <div class="mc-fnum">
            <select data-factor="${f.id}">
              <option value="">—</option>
              ${f.options.map(o => `<option value="${o.value}" ${v===o.value?'selected':''}>${o.label}</option>`).join('')}
            </select>
          </div>
        `;
      }
      const checked = !!this.state.factors[f.id];
      return `
        <label class="mc-fopt">
          <input type="checkbox" data-factor="${f.id}" ${checked?'checked':''}/>
          <span class="mc-fopt-lbl">
            ${f.label}
            ${f.note ? `<span class="mc-fopt-note">${f.note}</span>` : ''}
          </span>
        </label>
      `;
    }

    renderResults(){
      const panel = this.host.querySelector('.mc-results');
      if (!panel) return;
      const drugs = this.topic.drugs || [];
      const f = this.state.factors;

      const tiers = { preferred: [], acceptable: [], avoid: [] };
      drugs.forEach(d => {
        let res;
        try {
          res = d.evaluate ? d.evaluate(f) : { tier: 'acceptable', reasons: [] };
        } catch(e) {
          console.error('evaluate error', d.id, e);
          res = { tier: 'acceptable', reasons: [] };
        }
        if (!res || !res.tier) res = { tier: 'acceptable', reasons: res?.reasons || [] };
        tiers[res.tier] = tiers[res.tier] || [];
        tiers[res.tier].push({ drug: d, reasons: res.reasons || [] });
      });

      const activeCount = Object.keys(f).filter(k => f[k] && f[k] !== false).length;
      const globalFlags = (this.topic.flags ? this.topic.flags(f) : []) || [];

      panel.innerHTML = `
        <div class="mc-summary">
          <div class="mc-summary-l">
            <strong>${activeCount}</strong> factor${activeCount===1?'':'s'} selected ·
            <strong style="color:var(--mc-pref)">${tiers.preferred.length}</strong> preferred ·
            <strong style="color:var(--mc-ok)">${tiers.acceptable.length}</strong> acceptable ·
            <strong style="color:var(--mc-avoid)">${tiers.avoid.length}</strong> avoid
          </div>
          <div class="mc-summary-flags">
            ${globalFlags.map(fl => `<span class="mc-flag flag-${fl.tone}">${fl.text}</span>`).join('')}
          </div>
        </div>
        <div class="mc-tiers">
          ${this.renderTier('preferred', '✓ Preferred', tiers.preferred)}
          ${this.renderTier('acceptable', '○ Acceptable', tiers.acceptable)}
          ${this.renderTier('avoid', '✗ Avoid', tiers.avoid)}
        </div>
      `;
    }

    renderTier(tier, label, entries){
      return `
        <section class="mc-tier t-${tier}">
          <div class="mc-tier-head">
            <span class="mc-tier-dot"></span>
            <span>${label}</span>
            <span class="mc-tier-count">${entries.length}</span>
          </div>
          ${entries.length === 0
            ? `<div class="mc-tier-empty">No drugs in this tier for the current profile.</div>`
            : entries.map(e => this.renderCard(e.drug, e.reasons, tier)).join('')}
        </section>
      `;
    }

    renderCard(d, reasons, tier){
      const isSca = this.state.mode === 'sca';
      const showReason = this.state.reasoning && reasons.length > 0;

      const meta = `
        <div class="mc-card-meta">
          ${d.sideEffects ? `<span><b>Side effects:</b> ${d.sideEffects}</span>` : ''}
          ${d.monitor ? `<span><b>Monitor:</b> ${d.monitor}</span>` : ''}
        </div>
      `;

      const detail = d.detail ? `
        <details>
          <summary>More detail</summary>
          <div class="mc-card-detail">
            ${Object.keys(d.detail).map(k => `
              <dt>${k}</dt><dd>${d.detail[k]}</dd>
            `).join('')}
          </div>
        </details>
      ` : '';

      // The headline "rule" line — what makes this drug land in this tier
      const headline = this.summariseReasons(reasons, tier) || d.rule || '';

      return `
        <article class="mc-card">
          <div class="mc-card-top">
            <div>
              <div class="mc-card-name">${d.name}</div>
              ${d.examples ? `<div class="mc-card-ex">${d.examples}</div>` : ''}
            </div>
            ${d.step ? `<span class="mc-card-step step-${(d.step+'').replace(/\D/g,'')||'x'}">${d.step}</span>` : ''}
          </div>
          ${headline ? `<div class="mc-card-rule">${headline}</div>` : ''}
          ${d.counsel ? `<div class="mc-counsel">${d.counsel}</div>` : ''}
          ${isSca ? '' : meta}
          ${d.source ? `<div class="mc-card-source">${d.source}</div>` : ''}
          ${isSca ? '' : detail}
          ${showReason ? `
            <div class="mc-reasons">
              <div class="mc-reasons-t">Why this tier</div>
              <ul>
                ${reasons.map(r => `<li class="r-${r.kind||'neutral'}">${r.text}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </article>
      `;
    }

    summariseReasons(reasons, tier){
      if (!reasons || reasons.length === 0) return '';
      // Show first "headline" reason matching tier polarity
      const want = tier === 'avoid' ? 'bad' : 'good';
      const hit = reasons.find(r => r.kind === want) || reasons[0];
      return hit ? hit.text : '';
    }
  }

  window.MedChooser = MedChooser;

  // Auto-mount any data-medchooser elements on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => MedChooser.autoMount());
  } else {
    MedChooser.autoMount();
  }
})();
