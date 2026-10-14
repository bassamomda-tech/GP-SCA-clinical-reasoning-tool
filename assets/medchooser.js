/* ============================================
   Reasoning GP — Medication options by condition
   (formerly "Medication Chooser")
   Topic-agnostic component, mounts into any host
   ============================================

   OWNER DECISION, OCTOBER 2026 — reference, not a medical device.
   This component no longer takes patient factors and no longer
   re-ranks or re-tiers anything for a patient. For each condition it
   shows STATIC guideline cards: the options in the order the topic
   file lists them (the guideline's own order), each with its step,
   source, side effects, monitoring and the guideline's own cautions
   and conditions, written out as a fixed list.

   USAGE (unchanged, so every page that embeds it keeps working)
   -----
   <link rel="stylesheet" href="assets/medchooser.css" />
   <div data-medchooser="hypertension"></div>
   <script src="assets/medchooser.js"></script>
   <script src="assets/meds/hypertension.js"></script>

   Or programmatically:
   MedChooser.mount(elem, 'hypertension');

   TOPIC DATA SHAPE (unchanged — assets/meds/*.js)
   ----------------
   MedChooser.register('hypertension', {
     title, subtitle, guideline,
     factors: [{ group, id, label, note, options?, numeric? }, ...],
     drugs: [{ id, name, examples, step, source, sourceUrl,
               sideEffects, monitor, counsel, detail:{...},
               evaluate(f) -> { tier, reasons:[{kind, text}] } }, ...],
     sources: [{ label, url }, ...],
     flags?: (f) => [{ tone, text }],
   });

   How the fixed "cautions and conditions" list is built: each drug's
   own evaluate() rules are read ONE FACTOR AT A TIME, with no patient
   attached, and every statement a factor adds is written out next to
   that factor's name ("Avoid — eGFR <30: …"). The reader sees all of
   them at once; nothing is selected, hidden or re-ordered for anyone.
   ============================================ */
(function(){
  const TOPICS = {};

  const esc = s => String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  /* interface hints written for the old interactive tool ("switch the decision toggle") are not guidance */
  const UI_HINT = /toggle|switch the decision/i;

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
      const inst = new StaticCards(el, topicName);
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
    },
    /* exposed for checking: the fixed list of cautions for one drug */
    cautions(topic, drug){ return cautionsFor(topic, drug); }
  };

  /* ---------- the fixed cautions list (no patient attached) ---------- */
  function run(d, f){
    try { const r = d.evaluate ? d.evaluate(f) : null; return r && r.tier ? r : { tier:'acceptable', reasons:(r && r.reasons) || [] }; }
    catch(e){ return null; }
  }
  function cautionsFor(topic, d){
    if (!d.evaluate) return [];
    const base = run(d, {});
    if (!base) return [];
    const baseTexts = new Set((base.reasons || []).map(r => r.text));
    const out = [], seen = new Set();
    const consider = (label, f) => {
      const r = run(d, f);
      if (!r) return;
      const texts = (r.reasons || []).filter(x => x && x.text && !baseTexts.has(x.text) && !UI_HINT.test(x.text));
      if (!texts.length) return;
      let kind;
      if (r.tier === 'avoid') kind = 'avoid';
      else if (texts.some(x => x.kind === 'bad')) kind = 'caution';
      else if (texts.some(x => x.kind === 'good')) kind = 'favoured';
      else kind = 'note';
      const text = texts.map(x => x.text).join(' · ');
      const key = label + '|' + text;
      if (seen.has(key)) return;
      seen.add(key);
      out.push({ kind, label, text });
    };
    (topic.factors || []).forEach(f => {
      if (f.numeric) return;                       /* numeric thresholds are stated in the card text itself */
      if (f.options) { f.options.forEach(o => consider(f.label + ': ' + o.label, { [f.id]: o.value })); return; }
      consider(f.label, { [f.id]: true });
    });
    const rank = { avoid:0, caution:1, favoured:2, note:3 };
    return out.sort((a, b) => rank[a.kind] - rank[b.kind]);
  }
  function safetyPoints(topic){
    if (typeof topic.flags !== 'function') return [];
    const out = [], seen = new Set();
    let always = [];
    try { always = topic.flags({}) || []; } catch(e){ always = []; }
    always.forEach(x => {
      if (!x || !x.text || UI_HINT.test(x.text) || seen.has(x.text)) return;
      seen.add(x.text);
      out.push({ tone:x.tone || 'amber', label:'', text:x.text });
    });
    (topic.factors || []).forEach(f => {
      if (f.numeric) return;
      const vals = f.options ? f.options.map(o => ({ v:o.value, l:f.label + ': ' + o.label })) : [{ v:true, l:f.label }];
      vals.forEach(({ v, l }) => {
        let fl = [];
        try { fl = topic.flags({ [f.id]: v }) || []; } catch(e){ fl = []; }
        fl.forEach(x => {
          if (!x || !x.text || UI_HINT.test(x.text) || seen.has(x.text)) return;
          seen.add(x.text);
          out.push({ tone:x.tone || 'amber', label:l, text:x.text });
        });
      });
    });
    return out;
  }
  function cleanSubtitle(s){
    return String(s || '').replace(/\s*Tick the [^.]*\./g, '').trim();
  }

  const KIND_LABEL = { avoid:'Avoid', caution:'Caution', favoured:'Favoured', note:'Note' };

  class StaticCards {
    constructor(host, topicName){
      this.host = host;
      this.topicName = topicName;
      host.classList.add('mc', 'mc-static');
      host.innerHTML = `<div class="mc-results"><div class="mc-tier-empty">Loading medication options…</div></div>`;
    }

    setTopic(topicName, data){
      this.topicName = topicName;
      this.topic = data;
      this.render();
    }

    render(){
      if (!this.topic) return;
      const t = this.topic;
      const sub = cleanSubtitle(t.subtitle);
      const flags = safetyPoints(t);
      const drugs = t.drugs || [];

      this.host.className = 'mc mc-static';
      this.host.innerHTML = `
        <div class="mc-head">
          <div class="mc-head-l">
            <div class="mc-eyebrow">Medication options by condition</div>
            <div class="mc-title">${t.title}</div>
            ${sub ? `<div class="mc-sub">${sub}</div>` : ''}
            ${t.guideline ? `<div class="mc-source-pill">${t.guideline}</div>` : ''}
          </div>
        </div>
        <p class="mc-static-note">The options below are listed in the order the guideline gives them, with the guideline’s own cautions and conditions. Nothing here is ranked or chosen for a patient — check the cited source, the BNF or SPC, and the patient in front of you.</p>
        ${flags.length ? `
          <section class="mc-safety" aria-label="Safety points in the guidance">
            <h4>Safety points in the guidance</h4>
            <ul>${flags.map(f => `<li class="mc-flag flag-${esc(f.tone)}">${f.label ? `<b>${f.label}:</b> ` : ''}${f.text}</li>`).join('')}</ul>
          </section>` : ''}
        <div class="mc-static-list">
          ${drugs.map((d, i) => this.renderCard(d, i)).join('')}
        </div>
        <footer class="mc-footer">
          <div class="mc-footer-l">
            <h5>Sources</h5>
            <div class="mc-sources-list">
              ${((t.sources&&t.sources.length)?t.sources:[{label:'UK-based guidelines'}]).map(s => (s.url ? `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label} ↗</a>` : `<span>${s.label}</span>`)).join('')}
            </div>
          </div>
          <div class="mc-disclaimer">
            <strong>Reference only.</strong> A summary of what the cited guidance says about each option. Always verify against the live guideline, the BNF/SPC and your local formulary before prescribing; doses are the BNF’s.
          </div>
        </footer>
      `;
    }

    renderCard(d, i){
      const conds = cautionsFor(this.topic, d);
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
      const condHtml = conds.length ? `
        <details class="mc-conds">
          <summary>Cautions and conditions in the guidance (${conds.length})</summary>
          <ul>
            ${conds.map(c => `<li class="mc-cond k-${c.kind}"><span class="mc-cond-k">${KIND_LABEL[c.kind]}</span> <b>${c.label}:</b> ${c.text}</li>`).join('')}
          </ul>
        </details>
      ` : '';
      const src = d.source
        ? (d.sourceUrl ? `<div class="mc-card-source"><a href="${d.sourceUrl}" target="_blank" rel="noopener noreferrer">${d.source} ↗</a></div>` : `<div class="mc-card-source">${d.source}</div>`)
        : '';

      return `
        <article class="mc-card">
          <div class="mc-card-top">
            <div>
              <div class="mc-card-name"><span class="mc-card-n">${i + 1}.</span> ${d.name}</div>
              ${d.examples ? `<div class="mc-card-ex">${d.examples}</div>` : ''}
            </div>
            ${d.step ? `<span class="mc-card-step step-${(d.step+'').replace(/\D/g,'')||'x'}">${d.step}</span>` : ''}
          </div>
          ${d.counsel ? `<div class="mc-counsel">${d.counsel}</div>` : ''}
          ${meta}
          ${src}
          ${condHtml}
          ${detail}
        </article>
      `;
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
