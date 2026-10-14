/* ============================================
   Reasoning GP — Diagnostic reference (practice packs)
   Reads the existing presentation packs (RGPTriage + RGPDiagnostic registries)
   and shows them as REFERENCE and TEACHING material only:
     · the red-flag and urgency rules each pack lists, grouped by tier, in the pack's own order;
     · every differential in the pack's own order, with its key features, the features
       that point towards or away from it, the key examination finding, the next
       investigation and the guidance link;
     · a "Compare" table of the same differentials side by side;
     · a "Self-test" checklist: ticking a feature only reveals the teaching text for
       that one feature. Nothing is added up, weighted, ranked or calculated.
   Route 1 (Oct 2026): the per-patient % ranking, the "rules that fire" engine and the
   headline verdict were removed. The packs' clinical text is shown word for word.
   ============================================ */

(function(){
  // ---------- Topic registry ----------
  // Maps a single presentation to the existing triage / diagnostic data names.
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

  // Additional presentations register themselves via packs
  // (assets/dx-packs/<slug>.js sets window.RGP_EXTRA_TOPICS before this file loads).
  if (Array.isArray(window.RGP_EXTRA_TOPICS)) {
    window.RGP_EXTRA_TOPICS.forEach(t => {
      if (t && t.id && !TOPICS.some(x => x.id === t.id)) TOPICS.push(t);
    });
  }

  // ---------- Fixed tier headings (a label, not a result) ----------
  const TIERS = {
    emergency: { label:'Emergency',                   tcls:'t-emer', icon:'🔴' },
    cancer:    { label:'Suspected cancer pathway',    tcls:'t-canc', icon:'🟣' },
    urgent:    { label:'Urgent — non-cancer',         tcls:'t-urg',  icon:'🟠' },
    routine:   { label:'Routine',                     tcls:'t-rt',   icon:'🟢' },
  };
  const TIER_ORDER = ['emergency','cancer','urgent','routine'];
  const CAT = {
    'common':      { label:'Common',      cls:'is-common' },
    'less-common': { label:'Less common', cls:'is-less' },
    'cant-miss':   { label:"Don't miss",  cls:'is-miss' },
  };

  // ---------- Static teaching links derived from the pack (same for every reader) ----------
  // A feature "points towards" a differential where the pack links them, and "away" where the
  // pack links them the other way. Only the fixed links are used; no numbers are shown.
  function buildLinks(dxT){
    const byDx = {}, byInput = {};
    if (!dxT) return { byDx, byInput };
    const inputs = dxT.inputs || [];
    const dxs = dxT.diagnoses || [];
    dxs.forEach(d => { byDx[d.id] = { towards:[], away:[] }; });
    inputs.forEach(i => { byInput[i.id] = { towards:[], away:[] }; });
    const fx = dxT.effects || {};
    inputs.forEach(inp => {
      const e = fx[inp.id];
      if (!e || typeof e !== 'object') return;          // threshold rules on numbers are not shown
      dxs.forEach(d => {
        if (!(d.id in e)) return;
        const w = e[d.id];
        if (w > 0) { byDx[d.id].towards.push(inp.id); byInput[inp.id].towards.push(d.id); }
        else if (w < 0) { byDx[d.id].away.push(inp.id); byInput[inp.id].away.push(d.id); }
      });
    });
    return { byDx, byInput };
  }
  // Which red-flag rules mention a feature (read from the rule's own wording of its criteria).
  function ruleMentions(rule){
    const src = String(rule.when || '');
    const m = src.match(/^\s*(?:function\s*\(\s*(\w+)|\(?\s*(\w+)\s*\)?\s*=>)/);
    const p = m && (m[1] || m[2]);
    if (!p) return [];
    const re = new RegExp('\\b' + p + '\\.(\\w+)', 'g');
    const out = []; let mm;
    while ((mm = re.exec(src))) if (out.indexOf(mm[1]) < 0) out.push(mm[1]);
    return out;
  }

  // ---------- Reference view ----------
  class Workup {
    constructor(host, topicId){
      this.host = host;
      this.topicId = topicId;
      this.state = { view:'cards', ticked:{} };
      host.classList.add('wu', 'wu-ref');
      this.render();
    }

    _topicCfg(){ return TOPICS.find(t => t.id === this.topicId); }
    triageTopic(){ const c = this._topicCfg(); return c && c.triage && window.RGPTriage ? window.RGPTriage.get(c.triage) : null; }
    dxTopic(){ const c = this._topicCfg(); return c && c.dx && window.RGPDiagnostic ? window.RGPDiagnostic.get(c.dx) : null; }

    allInputs(){
      const t = this.triageTopic(), d = this.dxTopic();
      const out = [], seen = new Set();
      const push = list => (list || []).forEach(i => { if (seen.has(i.id)) return; seen.add(i.id); out.push(i); });
      if (d) push(d.inputs);
      if (t) push(t.inputs);
      return out;
    }
    inputLabel(id){ const f = this.allInputs().find(i => i.id === id); return f ? f.label : null; }
    dxName(id){ const d = (this.dxTopic()?.diagnoses || []).find(x => x.id === id); return d ? d.name : id; }

    setTopic(id){ this.topicId = id; this.state.ticked = {}; this.render(); }
    setView(v){ this.state.view = v; this.render(); }

    render(){
      const v = this.state.view;
      this.host.innerHTML = `
        ${this._renderHead()}
        <div class="wu-ref-body">
          ${v === 'compare' ? this._renderCompare() : v === 'selftest' ? this._renderSelfTest() : this._renderCards()}
        </div>
        ${this._renderFooter()}
      `;
      this._wire();
    }

    _renderHead(){
      const cfg = this._topicCfg();
      const t = this.triageTopic(), d = this.dxTopic();
      const guideline = [t?.guideline, d?.guideline].filter(Boolean)
        .filter((g, i, a) => a.indexOf(g) === i).join(' · ');
      const v = this.state.view;
      const tab = (id, label) => `<button type="button" role="tab" data-view="${id}" aria-selected="${v===id}" class="${v===id?'active':''}">${label}</button>`;
      return `
        <div class="wu-head">
          <div class="wu-head-l">
            <div class="wu-eyebrow">Diagnostic reference · practice pack</div>
            <div class="wu-title">${cfg?.label || 'Presentation'}</div>
            <div class="wu-sub">What the guidance lists for this presentation: the <b>red-flag and urgency rules</b>, then each <b>differential</b> with its key features, discriminators and what the guidance says. Shown in the pack's own fixed order — nothing here is calculated from your answers.</div>
            ${guideline ? `<div class="wu-source-pill">${guideline}</div>` : ''}
          </div>
          <div class="wu-head-r">
            <div class="wu-ref-tabs" role="tablist" aria-label="View">
              ${tab('cards', 'Reference')}${d ? tab('compare', 'Compare') : ''}${tab('selftest', 'Self-test')}
            </div>
          </div>
        </div>
      `;
    }

    // ----- Reference cards -----
    _renderCards(){
      const t = this.triageTopic(), d = this.dxTopic();
      const patient = d?.patientPresenting;
      let html = '';
      if (patient) html += `
        <div class="wu-patient">
          <h4>Example presentation (fictional, for practice)</h4>
          <p>“${patient}”</p>
        </div>`;
      if (t) html += this._renderRules(t);
      if (d) html += this._renderDifferential(d);
      return html || '<div class="wu-empty">No reference content for this presentation.</div>';
    }

    _renderRules(t){
      const rules = t.rules || [];
      const blocks = TIER_ORDER.map(tier => {
        const items = rules.filter(r => r.tier === tier);
        if (!items.length) return '';
        const ti = TIERS[tier];
        return `
          <section class="tr-tier ${ti.tcls}">
            <div class="tr-tier-h">
              <span class="tr-tier-dot"></span>
              <span>${ti.icon} ${ti.label}</span>
              <span class="tr-tier-count">${items.length}</span>
            </div>
            <div class="tr-tier-body">${items.map(r => this._renderRule(r)).join('')}</div>
          </section>`;
      }).join('');
      return `
        <section class="wu-section wu-sect-triage">
          <div class="wu-section-h"><span class="wu-section-ic">🚦</span><span>Red flags &amp; urgency rules — as the guidance states them</span></div>
          <div class="tr">
            <div class="tr-stack">${blocks}</div>
            ${t.defaultMessage ? `<div class="wu-ref-default"><b>When none of these applies:</b> ${t.defaultMessage}</div>` : ''}
          </div>
        </section>`;
    }

    _renderRule(r){
      return `
        <div class="tr-rule">
          <div class="tr-rule-l">
            <div class="tr-rule-label">${r.label}</div>
            ${r.action ? `<div class="tr-rule-action">${r.action}</div>` : ''}
            ${r.patientPhrase ? `<div class="tr-rule-phrase">${r.patientPhrase}</div>` : ''}
            ${r.source ? `<div class="tr-rule-trail"><small>Source: ${r.sourceUrl ? `<a href="${r.sourceUrl}" target="_blank" rel="noopener noreferrer">${r.source}↗</a>` : r.source}</small></div>` : ''}
          </div>
          ${r.proformaUrl ? `<a class="tr-rule-btn" href="${r.proformaUrl}" target="_blank" rel="noopener noreferrer">${r.proformaLabel || 'Suspected cancer referral proforma'} ↗</a>` : ''}
        </div>`;
    }

    _renderDifferential(d){
      const links = buildLinks(d);
      const ask = d.askAbout || {};
      const lbl = id => this.inputLabel(id);
      const list = ids => ids.map(lbl).filter(Boolean);
      const cards = (d.diagnoses || []).map((x, i) => {
        const c = CAT[x.category] || { label: x.category || '', cls:'' };
        const key = list(ask[x.id] || []);
        const tw = list(links.byDx[x.id]?.towards || []);
        const aw = list(links.byDx[x.id]?.away || []);
        return `
          <article class="wu-dxc ${c.cls}" id="wu-dx-${x.id}">
            <header class="wu-dxc-h">
              <span class="wu-dxc-n">${i + 1}</span>
              <div class="wu-dxc-t"><b>${x.name}</b>${x.summary ? `<span>${x.summary}</span>` : ''}</div>
              ${c.label ? `<span class="wu-cat ${c.cls}">${c.label}</span>` : ''}
            </header>
            ${x.redFlagAction ? `<div class="wu-dxc-rf">${x.redFlagAction}</div>` : ''}
            <div class="wu-dxc-grid">
              ${key.length ? `<div class="dx-info"><h5><span class="dx-info-ic">💡</span> Key features to ask about</h5><ul>${key.map(k => `<li>${k}</li>`).join('')}</ul></div>` : ''}
              ${tw.length || aw.length ? `<div class="dx-info"><h5><span class="dx-info-ic">⚖</span> Discriminators</h5>
                ${tw.length ? `<p class="wu-tw"><b>Points towards:</b> ${tw.join(' · ')}</p>` : ''}
                ${aw.length ? `<p class="wu-aw"><b>Points away:</b> ${aw.join(' · ')}</p>` : ''}
              </div>` : ''}
              ${x.keyExam ? `<div class="dx-info"><h5><span class="dx-info-ic">👀</span> Key examination finding</h5><p>${x.keyExam}</p></div>` : ''}
              ${x.nextIx ? `<div class="dx-info"><h5><span class="dx-info-ic">🧪</span> What the guidance says next</h5><p>${x.nextIx}</p></div>` : ''}
            </div>
            ${x.patientPhrase ? `<div class="dx-info wu-plain"><h5><span class="dx-info-ic">💬</span> In plain English</h5><p>${x.patientPhrase}</p></div>` : ''}
            <div class="wu-dxc-links">
              ${x.guideUrl ? `<a href="${x.guideUrl}" target="_blank" rel="noopener noreferrer">${x.guideLabel || 'Guideline'} ↗</a>` : (x.guideLabel ? `<span>Source: ${x.guideLabel}</span>` : '')}
              ${x.caseLink ? `<a class="dx-case-link" href="${x.caseLink}">→ Open full case on Reasoning GP</a>` : ''}
            </div>
          </article>`;
      }).join('');
      return `
        <section class="wu-section wu-sect-dx">
          <div class="wu-section-h"><span class="wu-section-ic">🩺</span><span>Differential — in the pack's own order (not ranked)</span></div>
          <div class="wu-dxlist">${cards}</div>
        </section>`;
    }

    // ----- Compare -----
    _renderCompare(){
      const d = this.dxTopic();
      if (!d) return '<div class="wu-empty">This presentation has no differential to compare.</div>';
      const dxs = d.diagnoses || [];
      const links = buildLinks(d);
      const feats = (d.inputs || []).filter(i => (links.byInput[i.id]?.towards.length || links.byInput[i.id]?.away.length));
      const head = `<tr><th scope="col">Feature</th>${dxs.map(x => `<th scope="col"><span>${x.name}</span>${CAT[x.category] ? `<small class="wu-cat ${CAT[x.category].cls}">${CAT[x.category].label}</small>` : ''}</th>`).join('')}</tr>`;
      const row = (label, cells) => `<tr><th scope="row">${label}</th>${cells}</tr>`;
      const txt = key => dxs.map(x => `<td>${x[key] || ''}</td>`).join('');
      const rows = [
        row('Summary', txt('summary')),
        row('Key examination finding', txt('keyExam')),
        row('What the guidance says next', txt('nextIx')),
      ].join('');
      const frows = feats.map(f => row(f.label, dxs.map(x => {
        const L = links.byDx[x.id] || { towards:[], away:[] };
        if (L.towards.indexOf(f.id) >= 0) return '<td class="wu-c-tw" title="Points towards">▲ towards</td>';
        if (L.away.indexOf(f.id) >= 0) return '<td class="wu-c-aw" title="Points away">▼ away</td>';
        return '<td class="wu-c-0"></td>';
      }).join(''))).join('');
      return `
        <section class="wu-section wu-sect-dx">
          <div class="wu-section-h"><span class="wu-section-ic">⚖</span><span>Compare the differentials side by side</span></div>
          <p class="wu-ref-note">Each column is one differential from the pack, in the pack's order. ▲ marks a feature the pack links towards that diagnosis, ▼ one it links away. It is a teaching grid, not a score.</p>
          <div class="wu-cmp-wrap" tabindex="0" role="region" aria-label="Comparison table">
            <table class="wu-cmp"><thead>${head}</thead><tbody>${rows}${frows ? `<tr class="wu-cmp-sep"><th scope="rowgroup" colspan="${dxs.length + 1}">Discriminating features</th></tr>${frows}` : ''}</tbody></table>
          </div>
        </section>`;
    }

    // ----- Self-test -----
    _renderSelfTest(){
      const t = this.triageTopic(), d = this.dxTopic();
      const links = buildLinks(d);
      const rules = (t?.rules || []).map(r => ({ r, ids: ruleMentions(r) }));
      const inputs = this.allInputs();
      const groups = {}, order = [];
      inputs.forEach(f => { const g = f.group || 'Other'; if (!groups[g]) { groups[g] = []; order.push(g); } groups[g].push(f); });
      const patient = d?.patientPresenting;
      const item = f => {
        const on = !!this.state.ticked[f.id];
        const L = links.byInput[f.id] || { towards:[], away:[] };
        const tw = L.towards.map(id => this.dxName(id));
        const aw = L.away.map(id => this.dxName(id));
        const rr = rules.filter(x => x.ids.indexOf(f.id) >= 0).map(x => x.r);
        const unit = f.kind === 'number' && f.unit ? ` <small>(${f.unit})</small>` : '';
        const reveal = `
          <div class="wu-st-reveal">
            ${f.note ? `<p>${f.note}</p>` : ''}
            ${tw.length ? `<p class="wu-tw"><b>Points towards:</b> ${tw.join(' · ')}</p>` : ''}
            ${aw.length ? `<p class="wu-aw"><b>Points away from:</b> ${aw.join(' · ')}</p>` : ''}
            ${rr.length ? `<p><b>Appears in the red-flag rule${rr.length > 1 ? 's' : ''}:</b> ${rr.map(r => `${TIERS[r.tier] ? TIERS[r.tier].icon + ' ' : ''}${r.label}`).join(' · ')}</p>` : ''}
            ${!f.note && !tw.length && !aw.length && !rr.length ? '<p class="wu-st-none">Context for the history — the pack attaches no specific teaching point to it.</p>' : ''}
          </div>`;
        return `
          <li class="wu-st-item ${on ? 'on' : ''}">
            <label><input type="checkbox" data-st="${f.id}" ${on ? 'checked' : ''}/> <span>${f.label}${unit}</span></label>
            ${on ? reveal : ''}
          </li>`;
      };
      return `
        <section class="wu-section wu-sect-st">
          <div class="wu-section-h"><span class="wu-section-ic">📝</span><span>Self-test — learning checklist</span></div>
          <div class="wu-st-intro">
            ${patient ? `<p><b>Practice prompt (fictional):</b> “${patient}”</p>` : ''}
            <p>Decide which features you would ask about and why, then tick a feature to reveal what the pack teaches about it. Ticking only opens the teaching note for that one feature — nothing is added up, ranked or scored.</p>
            <div class="wu-st-btns"><button type="button" data-st-all="1">Reveal all</button><button type="button" data-st-none="1">Hide all</button></div>
          </div>
          ${order.map(g => `
            <div class="wu-igroup">
              <div class="wu-igroup-t">${g}</div>
              <ul class="wu-st-list">${groups[g].map(item).join('')}</ul>
            </div>`).join('')}
        </section>`;
    }

    _renderFooter(){
      const sources = [];
      (this.triageTopic()?.sources || []).forEach(s => sources.push(s));
      (this.dxTopic()?.sources || []).forEach(s => sources.push(s));
      const seen = new Set();
      const uniq = sources.filter(s => { const k = s.url || s.label; if (seen.has(k)) return false; seen.add(k); return true; });
      return `
        <footer class="wu-footer">
          <div>
            <h5>Sources & evidence</h5>
            <div class="wu-sources-list">
              ${(uniq.length ? uniq : [{label:'UK-based guidelines'}]).map(s => (s.url ? `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label} ↗</a>` : `<span>${s.label}</span>`)).join('')}
            </div>
          </div>
          <div class="wu-disclaimer">
            <strong>Educational use only.</strong> Red-flag and urgency rules are shown as published (NICE NG12, updated April 2026, other numbered NICE guidelines, Macmillan). The differentials and their features are a teaching summary for learning and revision; they do not diagnose, triage or rank anything for a real patient. Always confirm with full history, examination, and your local pathway.
          </div>
        </footer>
      `;
    }

    _wire(){
      this.host.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => this.setView(b.dataset.view)));
      this.host.querySelectorAll('input[data-st]').forEach(cb => cb.addEventListener('change', e => {
        const id = e.target.dataset.st;
        if (e.target.checked) this.state.ticked[id] = true; else delete this.state.ticked[id];
        const y = window.scrollY; this.render(); window.scrollTo(0, y);
      }));
      const all = this.host.querySelector('[data-st-all]');
      if (all) all.addEventListener('click', () => { this.allInputs().forEach(f => { this.state.ticked[f.id] = true; }); const y = window.scrollY; this.render(); window.scrollTo(0, y); });
      const none = this.host.querySelector('[data-st-none]');
      if (none) none.addEventListener('click', () => { this.state.ticked = {}; const y = window.scrollY; this.render(); window.scrollTo(0, y); });
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
  // tools/diagnostic.html#headache → opens the Headache reference
  function wireHashDeepLink(){
    function applyHash(){
      const h = (location.hash || '').replace(/^#/, '').trim();
      if (!h) return;
      const topic = TOPICS.find(t => t.id === h);
      if (!topic) return;
      document.querySelectorAll('[data-workup]').forEach(el => {
        el.__wu_mounted = false;
        el.innerHTML = '';
        new Workup(el, topic.id);
        el.__wu_mounted = true;
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
