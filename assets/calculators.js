/* ============================================
   Reasoning GP — Medical Calculator Tool
   Casebook filter-rail (left) + right-hand list of expandable
   calculator cards. Each card has a chevron "drop" icon and
   reveals the interactive calculator inline. Consumes
   window.RGP_CALCULATORS.
   ============================================ */
(function(){
  const DIR = document.getElementById('calcGroups');
  if (!DIR) return;
  if (!window.RGP_CALCULATORS){
    DIR.innerHTML = '<div style="padding:30px;color:#94a3b8">Calculator dataset not loaded.</div>';
    return;
  }
  const ALL = window.RGP_CALCULATORS;

  const CAT_ICONS = {
    'Cardiovascular':'🫀', 'VTE':'🩸', 'Respiratory':'🫁',
    'Diabetes / endocrine':'🦋', 'Renal / metabolic':'🧪', 'Gastro / hepatology':'🫃',
    'Urology':'💧', 'Mental health':'🧠', 'Cognition':'🧩', 'Frailty':'🧓',
    "Women's / obstetric":'🌸', 'MSK / pain':'🦴', 'General / anthropometry':'📏', 'Paediatrics':'🧒',
  };
  const esc = s => String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

  function categories(){ const o = []; ALL.forEach(c => { if (o.indexOf(c.category) === -1) o.push(c.category); }); return o; }
  function byCat(cat){ return ALL.filter(c => c.category === cat); }
  function find(id){ return ALL.find(c => c.id === id); }

  const CHEV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

  // ---------- directory of expandable cards ----------
  function renderDirectory(){
    DIR.innerHTML = categories().map(cat => {
      const items = byCat(cat);
      const icon = CAT_ICONS[cat] || '🧮';
      const cards = items.map(c => {
        const search = (c.title + ' ' + c.category + ' ' + (c.description||'') + ' ' + (c.usefulFor||'')).toLowerCase();
        return '<div class="alg-card calc-item" data-id="' + c.id + '" data-search="' + esc(search) + '">' +
            '<button class="calc-item-head" type="button" aria-expanded="false">' +
              '<span class="ci-icon">' + icon + '</span>' +
              '<span class="ci-text"><b>' + esc(c.title) + '</b><small>' + esc(c.description||'') + '</small></span>' +
              '<span class="ci-chev">' + CHEV + '</span>' +
            '</button>' +
            '<div class="calc-item-body" hidden></div>' +
          '</div>';
      }).join('');
      return '<section class="alg-group" data-group="' + esc(cat) + '">' +
          '<div class="alg-group-head"><span class="agh-icon">' + icon + '</span><h2>' + esc(cat) + '</h2><span class="agh-count">' + items.length + '</span></div>' +
          '<div class="alg-grid">' + cards + '</div>' +
        '</section>';
    }).join('');
    const total = document.getElementById('calcTotal');
    const shown = document.getElementById('calcShown');
    if (total) total.textContent = ALL.length;
    if (shown) shown.textContent = ALL.length;
  }

  // ---------- expand / collapse ----------
  function toggleCard(card, open){
    const head = card.querySelector('.calc-item-head');
    const body = card.querySelector('.calc-item-body');
    const id = card.dataset.id;
    const want = open != null ? open : card.classList.contains('is-open') ? false : true;
    if (want){
      if (!body.__built){
        const c = find(id);
        body.__values = {};
        body.innerHTML = renderCalcBody(c);
        wireBody(c, body);
        recompute(c, body);
        body.__built = true;
      }
      card.classList.add('is-open');
      head.setAttribute('aria-expanded','true');
      body.hidden = false;
    } else {
      card.classList.remove('is-open');
      head.setAttribute('aria-expanded','false');
      body.hidden = true;
    }
  }

  // ---------- calculator body ----------
  function renderCalcBody(c){
    const isExternal = c.kind === 'external';
    return '' +
      (c.usefulFor ? '<div class="cc-useful"><b>Use for:</b> ' + c.usefulFor + '</div>' : '') +
      (isExternal ? renderExternalNote(c) : '') +
      (c.inputs && c.inputs.length ?
        '<div class="cc-inputs">' +
          '<div class="cc-inputs-head"><h4>Inputs</h4><button class="cc-reset" data-reset type="button">Reset</button></div>' +
          renderInputs(c, {}) +
        '</div>' : '') +
      '<div class="cc-result-slot"></div>' +
      (c.formula ? '<div class="cc-formula"><b>Formula:</b> <code>' + esc(c.formula) + '</code></div>' : '') +
      (c.refs && c.refs.length ?
        '<div class="cc-refs"><h5>References</h5>' +
          c.refs.map(r => '<a href="' + r.url + '" target="_blank" rel="noopener noreferrer">' + esc(r.label) + ' ↗</a>').join('') +
        '</div>' : '');
  }

  function renderExternalNote(c){
    return '<div class="cc-external"><span class="cc-external-ic">🔗</span><div>' +
      '<b>' + (c.externalReason || 'This calculator uses a proprietary algorithm and is best run on the official site.') + '</b>' +
      (c.externalUrl ? '<br/><a href="' + c.externalUrl + '" target="_blank" rel="noopener noreferrer">Open the official calculator ↗</a>' : '') +
      '</div></div>';
  }

  function renderInputs(c, values){
    const groups = {}; const order = [];
    c.inputs.forEach(inp => { const g = inp.group || ' '; if (!groups[g]){ groups[g] = []; order.push(g); } groups[g].push(inp); });
    return order.map(g =>
      (g.trim() ? '<div class="cc-igroup-t">' + esc(g) + '</div>' : '') +
      '<div class="cc-igroup">' + groups[g].map(inp => renderInput(inp, values)).join('') + '</div>'
    ).join('');
  }

  function renderInput(inp, values){
    const v = values[inp.id];
    if (inp.kind === 'check'){
      return '<label class="cc-iopt"><input type="checkbox" data-input="' + inp.id + '"' + (v ? ' checked' : '') + '/>' +
        '<span class="cc-iopt-lbl">' + inp.label + (inp.note ? '<small>' + inp.note + '</small>' : '') + '</span>' +
        (inp.points ? '<span class="cc-pts">+' + inp.points + '</span>' : '') + '</label>';
    }
    if (inp.kind === 'number'){
      return '<div class="cc-inum"><label class="cc-inum-lbl">' + inp.label + (inp.note ? '<small>' + inp.note + '</small>' : '') + '</label>' +
        '<div class="cc-inum-row"><input type="number" data-input="' + inp.id + '" value="' + (v ?? '') + '" min="' + (inp.min ?? '') + '" max="' + (inp.max ?? '') + '" step="' + (inp.step ?? 1) + '" placeholder="—"/>' +
        '<span class="cc-inum-unit">' + (inp.unit || '') + '</span></div></div>';
    }
    if (inp.kind === 'date'){
      return '<div class="cc-inum"><label class="cc-inum-lbl">' + inp.label + (inp.note ? '<small>' + inp.note + '</small>' : '') + '</label>' +
        '<div class="cc-inum-row"><input type="date" data-input="' + inp.id + '" value="' + (v ?? '') + '"' + (inp.max ? ' max="' + inp.max + '"' : '') + (inp.min ? ' min="' + inp.min + '"' : '') + '/></div></div>';
    }
    if (inp.kind === 'select'){
      return '<div class="cc-iselect"><label class="cc-iselect-lbl">' + inp.label + (inp.note ? '<small>' + inp.note + '</small>' : '') + '</label>' +
        '<select data-input="' + inp.id + '"><option value="">— select —</option>' +
        (inp.options || []).map(opt => {
          const ov = String(opt.value); const sel = String(v) === ov ? ' selected' : '';
          return '<option value="' + ov + '"' + sel + '>' + opt.label + (opt.points != null ? ' (+' + opt.points + ')' : '') + '</option>';
        }).join('') + '</select></div>';
    }
    if (inp.kind === 'likert'){
      const opts = inp.options || [{value:0,label:'Not at all'},{value:1,label:'Several days'},{value:2,label:'More than half'},{value:3,label:'Nearly every day'}];
      return '<div class="cc-likert"><div class="cc-likert-lbl">' + inp.label + '</div><div class="cc-likert-opts">' +
        opts.map(o => '<button type="button" class="cc-likert-opt' + (String(v) === String(o.value) ? ' is-active' : '') + '" data-input="' + inp.id + '" data-likert="' + o.value + '">' +
          '<span class="cc-likert-n">' + o.value + '</span><span class="cc-likert-t">' + o.label + '</span></button>').join('') +
        '</div></div>';
    }
    return '';
  }

  function recompute(c, body){
    const slot = body.querySelector('.cc-result-slot');
    if (!slot) return;
    const values = body.__values;
    let result = null, interp = null;
    try {
      if (c.compute) result = c.compute(values);
      if (result !== null && result !== undefined && c.interpret) interp = c.interpret(result, values);
    } catch(e){ console.warn('calc error', c.id, e); }

    const hasValue = Object.keys(values).length > 0;
    if (!hasValue && !c.kind){ slot.innerHTML = '<div class="cc-result-empty">Enter inputs to calculate.</div>'; return; }
    if (result === null || result === undefined){ slot.innerHTML = ''; return; }

    const sev = (interp && interp.severity) || 'neutral';
    const resultText = typeof result === 'object' ? (result.display || JSON.stringify(result)) : String(result);
    const resultMax = c.resultMax;
    const pct = (typeof result === 'number' && resultMax) ? Math.min(100, Math.round((result / resultMax) * 100)) : null;

    slot.innerHTML =
      '<div class="cc-result cc-result-' + sev + '">' +
        '<div class="cc-result-head"><div class="cc-result-l">' +
          '<div class="cc-result-lbl">' + (c.resultLabel || 'Score') + '</div>' +
          '<div class="cc-result-num">' + resultText + '<span class="cc-result-unit">' + (c.resultUnit || '') + (resultMax ? ' / ' + resultMax : '') + '</span></div>' +
        '</div>' +
        (interp ? '<div class="cc-result-r"><div class="cc-result-tag cc-sev-' + sev + '">' + (interp.label || '') + '</div>' +
          (interp.action ? '<div class="cc-result-action">' + interp.action + '</div>' : '') + '</div>' : '') +
        '</div>' +
        (pct != null ? '<div class="cc-result-bar"><div class="cc-result-bar-fill cc-sev-' + sev + '" style="width:' + pct + '%"></div></div>' : '') +
        (interp && interp.detail ? '<div class="cc-result-detail">' + interp.detail + '</div>' : '') +
      '</div>';
  }

  function setInput(values, id, value){
    if (value === '' || value === null || value === undefined || value === false) delete values[id];
    else values[id] = value;
  }

  function wireBody(c, body){
    const values = body.__values;
    body.querySelector('[data-reset]')?.addEventListener('click', () => {
      body.__values = {};
      body.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
      body.querySelectorAll('input[type="number"],input[type="date"]').forEach(i => i.value = '');
      body.querySelectorAll('select').forEach(s => s.value = '');
      body.querySelectorAll('.cc-likert-opt.is-active').forEach(b => b.classList.remove('is-active'));
      recompute(c, body);
    });
    body.querySelectorAll('input[type="checkbox"][data-input]').forEach(cb => cb.addEventListener('change', e => { setInput(body.__values, e.target.dataset.input, e.target.checked); recompute(c, body); }));
    body.querySelectorAll('input[type="number"][data-input]').forEach(inp => inp.addEventListener('input', e => { setInput(body.__values, e.target.dataset.input, e.target.value === '' ? null : Number(e.target.value)); recompute(c, body); }));
    body.querySelectorAll('input[type="date"][data-input]').forEach(inp => inp.addEventListener('change', e => { setInput(body.__values, e.target.dataset.input, e.target.value || null); recompute(c, body); }));
    body.querySelectorAll('select[data-input]').forEach(sel => sel.addEventListener('change', e => { const val = e.target.value === '' ? null : (isNaN(Number(e.target.value)) ? e.target.value : Number(e.target.value)); setInput(body.__values, e.target.dataset.input, val); recompute(c, body); }));
    body.querySelectorAll('.cc-likert-opt').forEach(b => b.addEventListener('click', () => {
      const id = b.dataset.input;
      body.querySelectorAll('.cc-likert-opt[data-input="' + id + '"]').forEach(x => x.classList.remove('is-active'));
      b.classList.add('is-active');
      setInput(body.__values, id, Number(b.dataset.likert));
      recompute(c, body);
    }));
  }

  // ---------- wiring ----------
  DIR.addEventListener('click', e => {
    const head = e.target.closest('.calc-item-head');
    if (!head) return;
    const card = head.closest('.calc-item');
    toggleCard(card);
    if (card.classList.contains('is-open')){
      try { history.replaceState(null, '', '#' + card.dataset.id); } catch(err){}
    }
  });

  renderDirectory();

  // deep-link: #id expands + scrolls that calculator
  function openHash(){
    const id = (location.hash || '').replace(/^#/, '').trim();
    if (!id) return;
    const card = DIR.querySelector('.calc-item[data-id="' + (window.CSS && CSS.escape ? CSS.escape(id) : id) + '"]');
    if (card){ toggleCard(card, true); card.scrollIntoView({ block:'center' }); }
  }
  window.addEventListener('hashchange', openHash);
  requestAnimationFrame(openHash);
})();
