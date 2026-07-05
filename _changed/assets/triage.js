/* ============================================
   Reasoning GP — Triage Tool engine
   Symptom + blood-result triage, NICE/Macmillan
   ============================================

   USAGE — embedded as accordion in a case:
     <link rel="stylesheet" href="assets/triage.css" />
     <div data-triage="tiredness" data-mode="accordion"></div>
     <script src="assets/triage.js"></script>
     <script src="assets/triage/tiredness.js"></script>

   USAGE — standalone with topic picker:
     <div data-triage="generic" data-topic-picker="1"></div>

   TOPIC DATA SHAPE
   ----------------
   RGPTriage.register('tiredness', {
     title, subtitle, guideline,
     inputs: [{ group, id, label, kind:'check'|'number', unit, default, min, max, step, note }],
     rules: [{
       id, tier:'emergency'|'cancer'|'urgent'|'routine',
       label, action, proformaUrl, proformaLabel,
       patientPhrase, referralTemplate,
       source, sourceUrl,
       when(i) -> bool
     }],
     defaultMessage: 'shown when no rule fires',
     sources: [{label, url}, ...]
   });
   ============================================ */
(function(){
  const TOPICS = {};
  const TIERS = {
    emergency: { label:'Emergency', cls:'is-emer', tcls:'t-emer', icon:'🔴', rank:4 },
    cancer:    { label:'Suspected cancer (2WW)', cls:'is-canc', tcls:'t-canc', icon:'🟣', rank:3 },
    urgent:    { label:'Urgent — non-cancer', cls:'is-urg', tcls:'t-urg', icon:'🟠', rank:2 },
    routine:   { label:'Routine', cls:'is-rt', tcls:'t-rt', icon:'🟢', rank:1 },
  };
  const TIER_ORDER = ['emergency','cancer','urgent','routine'];

  const RGPTriage = {
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
      const inst = new TriageInstance(el, topic);
      this._whenReady(topic, data => inst.setTopic(topic, data));
      return inst;
    },
    autoMount(){
      document.querySelectorAll('[data-triage]').forEach(el => {
        if (el.__tr_mounted) return;
        el.__tr_mounted = true;
        const t = el.dataset.triage;
        if (t) this.mount(el, t);
      });
    }
  };

  class TriageInstance {
    constructor(host, topicName){
      this.host = host;
      this.topicName = topicName;
      this.state = { inputs:{}, mode:'clinic', trail:false };
      this.accordion = host.dataset.mode === 'accordion';
      this.topicPicker = host.dataset.topicPicker === '1';
      host.classList.add('tr');
      host.innerHTML = `<div class="tr-stack" style="padding:20px"><div style="color:#64748b;font-size:13px;font-style:italic">Loading triage data…</div></div>`;
    }

    setTopic(name, data){
      this.topicName = name; this.topic = data;
      // numeric defaults
      const ins = {};
      (data.inputs||[]).forEach(f => {
        if (f.kind === 'number' && f.default !== undefined) ins[f.id] = f.default;
      });
      this.state.inputs = ins;
      this.render();
    }

    setMode(m){ this.state.mode = m; this.render(); }
    setInput(id, val){
      if (val === undefined || val === '' || val === null || val === false) delete this.state.inputs[id];
      else this.state.inputs[id] = val;
      this.renderResults();
    }
    reset(){
      const ins = {};
      (this.topic.inputs||[]).forEach(f => {
        if (f.kind === 'number' && f.default !== undefined) ins[f.id] = f.default;
      });
      this.state.inputs = ins;
      this.render();
    }
    toggleTrail(v){ this.state.trail = v; this.renderResults(); }

    // -------------- render --------------
    render(){
      if (!this.topic) return;
      const t = this.topic;
      this.host.className = 'tr' + (this.state.mode === 'sca' ? ' is-sca' : '');

      if (this.accordion) {
        // collapsible details wrapper
        this.host.innerHTML = `
          <details class="tr-acc">
            <summary class="tr-acc-btn">
              <span class="tr-acc-lbl">
                <span class="tr-acc-ic">🚦</span>
                <span class="tr-acc-text">
                  <b>Run the live triage tool</b>
                  <small>Symptom + blood-result triage · NICE NG12 · Macmillan rapid-referral</small>
                </span>
              </span>
              <span class="tr-acc-caret">▶</span>
            </summary>
            <div class="tr-acc-body">
              ${this._innerMarkup()}
            </div>
          </details>
        `;
      } else {
        this.host.innerHTML = this._innerMarkup();
      }

      this._wire();
      this.renderInputs();
      this.renderResults();
    }

    _innerMarkup(){
      const t = this.topic;
      const topicPicker = this.topicPicker ? this._renderTopicPicker() : '';
      return `
        <div class="tr-head">
          <div class="tr-head-l">
            <div class="tr-eyebrow">Triage Tool</div>
            <div class="tr-title">${t.title}</div>
            ${t.subtitle ? `<div class="tr-sub">${t.subtitle}</div>` : ''}
            ${t.guideline ? `<div class="tr-source-pill">${t.guideline}</div>` : ''}
          </div>
          <div class="tr-head-r">
            <div class="tr-mode" role="tablist" aria-label="Display mode">
              <button data-mode="clinic" class="${this.state.mode==='clinic'?'active':''}">Clinic detail</button>
              <button data-mode="sca" class="${this.state.mode==='sca'?'active':''}">SCA view</button>
            </div>
            <div class="tr-toggles">
              <label><input type="checkbox" data-toggle="trail" ${this.state.trail?'checked':''}/> Show working</label>
            </div>
          </div>
        </div>
        ${topicPicker}
        <div class="tr-body">
          <aside class="tr-inputs" aria-label="Inputs"></aside>
          <div class="tr-verdict"></div>
        </div>
        <footer class="tr-footer">
          <div class="tr-footer-l">
            <h5>Sources</h5>
            <div class="tr-sources-list">
              ${(t.sources||[]).map(s => `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label} ↗</a>`).join('')}
            </div>
          </div>
          <div class="tr-disclaimer">
            <strong>Educational use only.</strong> The tool surfaces published NICE/Macmillan thresholds — it is not a replacement for clinical judgement, full history, or local pathways. Always verify and document.
          </div>
        </footer>
      `;
    }

    _renderTopicPicker(){
      const all = RGPTriage.list();
      return `
        <div class="tr-topic-picker">
          <span class="tr-topic-picker-label">Topic</span>
          <div class="tr-topic-pills">
            ${all.map(t => `<button class="tr-topic-pill ${t===this.topicName?'active':''}" data-topic="${t}">${TOPICS[t].title}</button>`).join('')}
          </div>
        </div>
      `;
    }

    _wire(){
      this.host.querySelectorAll('.tr-mode button').forEach(btn => {
        btn.addEventListener('click', () => this.setMode(btn.dataset.mode));
      });
      const trail = this.host.querySelector('[data-toggle="trail"]');
      if (trail) trail.addEventListener('change', e => this.toggleTrail(e.target.checked));

      this.host.querySelectorAll('.tr-topic-pill').forEach(b => {
        b.addEventListener('click', () => {
          const t = b.dataset.topic;
          if (TOPICS[t]) this.setTopic(t, TOPICS[t]);
        });
      });
    }

    renderInputs(){
      const panel = this.host.querySelector('.tr-inputs');
      if (!panel) return;
      const inputs = this.topic.inputs || [];
      const groups = {}; const order = [];
      inputs.forEach(f => {
        const g = f.group || 'Other';
        if (!groups[g]) { groups[g] = []; order.push(g); }
        groups[g].push(f);
      });

      panel.innerHTML = `
        <div class="tr-inputs-head">
          <h4>Symptoms · Vitals · Bloods · Context</h4>
          <button class="tr-reset" type="button">Reset</button>
        </div>
        ${order.map(g => `
          <div class="tr-igroup">
            <div class="tr-igroup-t">${g}</div>
            <div class="tr-iopts">
              ${groups[g].map(f => this._renderInput(f)).join('')}
            </div>
          </div>
        `).join('')}
      `;

      panel.querySelector('.tr-reset').addEventListener('click', () => this.reset());
      panel.querySelectorAll('input[type="checkbox"][data-input]').forEach(cb => {
        cb.addEventListener('change', e => this.setInput(e.target.dataset.input, e.target.checked));
      });
      panel.querySelectorAll('input[type="number"][data-input]').forEach(inp => {
        inp.addEventListener('input', e => {
          const v = e.target.value === '' ? null : Number(e.target.value);
          this.setInput(e.target.dataset.input, v);
        });
      });
    }

    _renderInput(f){
      if (f.kind === 'number') {
        const v = this.state.inputs[f.id] ?? '';
        return `
          <div class="tr-inum">
            <span class="tr-inum-l">${f.label}${f.note ? `<small>${f.note}</small>` : ''}</span>
            <input type="number" data-input="${f.id}" value="${v}"
              min="${f.min ?? ''}" max="${f.max ?? ''}" step="${f.step ?? 1}"
              placeholder="—"/>
            <span class="tr-inum-unit">${f.unit || ''}</span>
          </div>
        `;
      }
      const checked = !!this.state.inputs[f.id];
      return `
        <label class="tr-iopt">
          <input type="checkbox" data-input="${f.id}" ${checked?'checked':''}/>
          <span class="tr-iopt-lbl">
            ${f.label}
            ${f.note ? `<span class="tr-iopt-note">${f.note}</span>` : ''}
          </span>
        </label>
      `;
    }

    renderResults(){
      const panel = this.host.querySelector('.tr-verdict');
      if (!panel) return;

      const fired = [];
      const inputs = this.state.inputs;
      (this.topic.rules || []).forEach(r => {
        try {
          if (r.when && r.when(inputs)) fired.push(r);
        } catch(e){ console.error('triage rule error', r.id, e); }
      });

      // Highest tier wins for the headline
      let headlineTier = 'routine';
      let headlineRule = null;
      if (fired.length) {
        const sorted = [...fired].sort((a,b) => TIERS[b.tier].rank - TIERS[a.tier].rank);
        headlineRule = sorted[0];
        headlineTier = headlineRule.tier;
      }

      const grouped = { emergency:[], cancer:[], urgent:[], routine:[] };
      fired.forEach(r => grouped[r.tier].push(r));

      const tinfo = TIERS[headlineTier];
      const headline = `
        <header class="tr-headline ${tinfo.cls}">
          <div class="tr-hl-ic">${tinfo.icon}</div>
          <div class="tr-hl-text">
            <div class="tr-hl-tier">${tinfo.label}</div>
            <div class="tr-hl-title">${
              headlineRule ? headlineRule.label : (this.topic.defaultMessage || 'No red-flag rules have fired — proceed with routine workup.')
            }</div>
            ${headlineRule ? `<div class="tr-hl-action">${headlineRule.action || ''}</div>` : ''}
            <div class="tr-hl-btns">
              <button class="tr-btn" data-act="copy" ${!fired.length?'disabled':''}>
                <span class="tr-btn-ic">📋</span> Copy referral text
              </button>
              ${headlineRule && headlineRule.proformaUrl ? `
                <a class="tr-btn" href="${headlineRule.proformaUrl}" target="_blank" rel="noopener noreferrer">
                  <span class="tr-btn-ic">↗</span> ${headlineRule.proformaLabel || 'Open 2WW proforma'}
                </a>` : ''}
              <button class="tr-btn" data-act="print">
                <span class="tr-btn-ic">🖨</span> Print summary
              </button>
            </div>
          </div>
        </header>
      `;

      const tierBlocks = TIER_ORDER.map(tier => {
        const items = grouped[tier];
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
              ${items.map(r => this._renderRule(r)).join('')}
            </div>
          </section>
        `;
      }).join('');

      const noRules = fired.length === 0;

      const trail = this.state.trail ? this._renderTrail(fired) : '';

      panel.innerHTML = headline + `<div class="tr-stack">
        ${noRules ? `
          <section class="tr-tier t-rt">
            <div class="tr-tier-h">
              <span class="tr-tier-dot"></span><span>🟢 Routine</span>
            </div>
            <div class="tr-tier-body">
              <div class="tr-rule">
                <div class="tr-rule-l">
                  <div><strong>No red-flag rules triggered for the current inputs.</strong> Continue history, examination, and a targeted workup as per the topic guidance.</div>
                  <span class="tr-rule-action" style="color:var(--tr-rt)">Routine</span>
                </div>
              </div>
            </div>
          </section>
        ` : tierBlocks}
        ${trail}
      </div>`;

      panel.querySelector('[data-act="copy"]')?.addEventListener('click', () => this._copyReferral(fired, headlineRule));
      panel.querySelector('[data-act="print"]')?.addEventListener('click', () => this._print());
    }

    _renderRule(r){
      return `
        <div class="tr-rule">
          <div class="tr-rule-l">
            <div>
              <strong>${r.label}</strong>
              ${r.source ? `<div class="tr-rule-src">${r.sourceUrl ? `<a href="${r.sourceUrl}" target="_blank" rel="noopener noreferrer">${r.source}</a>` : r.source}</div>` : ''}
            </div>
            ${r.action ? `<span class="tr-rule-action">${r.action}</span>` : ''}
          </div>
          ${(r.patientPhrase || r.referralTemplate) ? `
            <details>
              <summary>Patient phrase + referral note</summary>
              <div class="tr-rule-detail">
                ${r.patientPhrase ? `<div class="tr-rule-phrase">${r.patientPhrase}</div>` : ''}
                ${r.referralTemplate ? `<div class="tr-rule-ref">${r.referralTemplate}</div>` : ''}
              </div>
            </details>
          ` : ''}
        </div>
      `;
    }

    _renderTrail(fired){
      const inputs = this.state.inputs;
      const inputList = Object.keys(inputs).map(k => {
        const f = (this.topic.inputs||[]).find(x => x.id === k);
        const val = inputs[k];
        if (!f) return null;
        const label = f.label;
        const display = (f.kind === 'number') ? `${val}${f.unit?' '+f.unit:''}` : 'present';
        return `<li><b>${label}:</b> ${display}</li>`;
      }).filter(Boolean);

      const ruleList = fired.map(r => `<li><b>[${TIERS[r.tier].icon} ${r.tier}]</b> ${r.label} <span style="color:#64748b">— ${r.source || 'no source tag'}</span></li>`);

      return `
        <div class="tr-trail">
          <div class="tr-trail-t">Inputs active</div>
          <ul>${inputList.length ? inputList.join('') : '<li><em>(none)</em></li>'}</ul>
          <div class="tr-trail-t" style="margin-top:7px">Rules fired (${fired.length})</div>
          <ul>${ruleList.length ? ruleList.join('') : '<li><em>(none)</em></li>'}</ul>
        </div>
      `;
    }

    _copyReferral(fired, headlineRule){
      const inputs = this.state.inputs;
      const topic = this.topic;
      const stamp = new Date().toISOString().split('T')[0];

      const inputLines = Object.keys(inputs).map(k => {
        const f = (topic.inputs||[]).find(x => x.id === k);
        if (!f) return null;
        const v = inputs[k];
        return `- ${f.label}: ${f.kind==='number' ? `${v}${f.unit?' '+f.unit:''}` : 'YES'}`;
      }).filter(Boolean).join('\n');

      const ruleLines = fired.map(r =>
        `[${r.tier.toUpperCase()}] ${r.label}\n  Action: ${r.action || '—'}${r.source?`\n  Source: ${r.source}`:''}${r.referralTemplate?`\n  Note: ${r.referralTemplate.replace(/\n/g,' ')}`:''}`
      ).join('\n\n');

      const txt = [
        `TRIAGE SUMMARY — ${topic.title}`,
        `Date: ${stamp}`,
        '',
        'INPUTS:',
        inputLines || '(none entered)',
        '',
        `VERDICT: ${headlineRule ? headlineRule.label + ' — ' + (headlineRule.action||'') : 'No red-flag rules triggered — routine workup'}`,
        '',
        fired.length ? 'RULES FIRED:' : '',
        ruleLines,
        '',
        '— Generated by Reasoning GP triage tool (educational use only; verify against live NICE/local pathway).'
      ].filter(s => s !== '').join('\n');

      if (navigator.clipboard) {
        navigator.clipboard.writeText(txt).then(() => {
          this._toast('Referral text copied to clipboard');
        }, () => this._fallbackCopy(txt));
      } else {
        this._fallbackCopy(txt);
      }
    }
    _fallbackCopy(text){
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); this._toast('Referral text copied'); }
      catch(e){ this._toast('Copy failed — please select manually', true); }
      document.body.removeChild(ta);
    }
    _toast(msg, isError){
      let t = document.getElementById('__tr_toast');
      if (!t) {
        t = document.createElement('div');
        t.id = '__tr_toast';
        t.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#15202b;color:#fff;padding:10px 18px;border-radius:8px;font:600 13px/1.4 system-ui;z-index:9999;box-shadow:0 6px 18px rgba(0,0,0,.25);opacity:0;transition:opacity .2s;';
        document.body.appendChild(t);
      }
      t.textContent = (isError ? '⚠ ' : '✓ ') + msg;
      t.style.background = isError ? '#b91c1c' : '#15202b';
      t.style.opacity = '1';
      clearTimeout(this._toastTo);
      this._toastTo = setTimeout(() => { t.style.opacity = '0'; }, 2200);
    }
    _print(){ window.print(); }
  }

  window.RGPTriage = RGPTriage;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => RGPTriage.autoMount());
  } else {
    RGPTriage.autoMount();
  }
})();
