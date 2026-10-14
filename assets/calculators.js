/* ============================================
   Reasoning GP — Medical Calculator Tool (scores and formulae: reference)
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

  /* ==========================================================
     REFERENCE, NOT A MEDICAL DEVICE (owner decision, October 2026)
     - Scores: every item and its points are shown, the arithmetic is
       shown, and the result is placed against the PUBLISHED
       interpretation bands only. The data files' interpret() "action"
       and "detail" text (next steps for a patient) is never shown.
     - No dose calculators, no hidden lookup logic: OME, NEWS2 and the
       PSA age-threshold lookup are reference cards (tables, no inputs).
     - Cockcroft-Gault keeps its formula and shows the number only — it
       produces no dose and no dosing band.
     ========================================================== */
  const REFERENCE = {
    'news2': {
      html: '<p class="cc-ref-p">Each parameter scores 0–3 points; the NEWS2 total is the sum. This is the chart the old calculator used, shown in full so every threshold can be checked.</p>' +
        '<div class="cc-tablewrap"><table class="cc-bands cc-reftable"><thead><tr><th>Parameter</th><th>3</th><th>2</th><th>1</th><th>0</th><th>1</th><th>2</th><th>3</th></tr></thead><tbody>' +
        '<tr><td>Respiration rate (/min)</td><td>≤8</td><td></td><td>9–11</td><td>12–20</td><td></td><td>21–24</td><td>≥25</td></tr>' +
        '<tr><td>SpO₂ scale 1 (%)</td><td>≤91</td><td>92–93</td><td>94–95</td><td>≥96</td><td></td><td></td><td></td></tr>' +
        '<tr><td>Air or oxygen?</td><td></td><td>Oxygen</td><td></td><td>Air</td><td></td><td></td><td></td></tr>' +
        '<tr><td>Systolic BP (mmHg)</td><td>≤90</td><td>91–100</td><td>101–110</td><td>111–219</td><td></td><td></td><td>≥220</td></tr>' +
        '<tr><td>Pulse (/min)</td><td>≤40</td><td></td><td>41–50</td><td>51–90</td><td>91–110</td><td>111–130</td><td>≥131</td></tr>' +
        '<tr><td>Consciousness</td><td></td><td></td><td></td><td>Alert</td><td></td><td></td><td>New confusion, V, P or U</td></tr>' +
        '<tr><td>Temperature (°C)</td><td>≤35.0</td><td></td><td>35.1–36.0</td><td>36.1–38.0</td><td>38.1–39.0</td><td>≥39.1</td><td></td></tr>' +
        '</tbody></table></div>' +
        '<h5 class="cc-h5">Published clinical-risk bands (aggregate score)</h5>' +
        '<table class="cc-bands"><tbody><tr><td>0–4</td><td>Low</td></tr><tr><td>3 in any single parameter</td><td>Low–medium</td></tr><tr><td>5–6</td><td>Medium</td></tr><tr><td>7 or more</td><td>High</td></tr></tbody></table>' +
        '<p class="cc-ref-p">SpO₂ scale 2 (for people with hypercapnic respiratory failure) and the response each band calls for are set out in the RCP NEWS2 chart — use it, and your local escalation policy.</p>'
    },
    'psa-threshold': {
      html: '<table class="cc-bands"><thead><tr><th>Age</th><th>Age-specific PSA threshold</th></tr></thead><tbody>' +
        '<tr><td>40–49</td><td>2.5 µg/L</td></tr><tr><td>50–59</td><td>3.5 µg/L</td></tr><tr><td>60–69</td><td>4.5 µg/L</td></tr><tr><td>70–79</td><td>6.5 µg/L</td></tr>' +
        '</tbody></table><p class="cc-ref-p">Read the full criterion, including the role of rectal examination, in NICE NG12 itself.</p>'
    },
    'ome': {
      html: '<p class="cc-ref-p"><b>Formula:</b> <code>OME (mg/day) = total daily oral dose × conversion factor</code></p>' +
        '<table class="cc-bands"><thead><tr><th>Opioid (oral)</th><th>Conversion factor to oral morphine</th></tr></thead><tbody>' +
        '<tr><td>Morphine</td><td>1</td></tr><tr><td>Codeine</td><td>0.1</td></tr><tr><td>Dihydrocodeine</td><td>0.1</td></tr><tr><td>Tramadol</td><td>0.1</td></tr><tr><td>Oxycodone</td><td>1.5</td></tr><tr><td>Tapentadol</td><td>0.4</td></tr>' +
        '</tbody></table><p class="cc-ref-p">Conversion ratios are approximate and vary between sources. Check the BNF and the Faculty of Pain Medicine’s Opioids Aware before any switch or dose change; this page does not calculate doses.</p>'
    }
  };

  /* (Descriptions and "Use for" lines that described a decision for a patient were reworded in the
     data files themselves, so the search index and this page show the same words.) */

  /* labels that named an action rather than the published band */
  const LABEL = {
    'feverpain': s => s <= 1 ? 'Score 0–1: strep likelihood ~13–18%' : s <= 3 ? 'Score 2–3: strep likelihood ~34–40%' : 'Score 4–5: strep likelihood ~62–65%',
    'whooley':   s => s === 0 ? 'Negative' : 'Positive'
  };

  /* fixed source notes about how a score may be used (not about a patient) */
  const NOTE = {
    'abcd2':    'NICE NG128: all people with suspected TIA need specialist assessment within 24 hours, regardless of score. ABCD² is no longer recommended for triage.',
    'has-bled': 'A high HAS-BLED is not a reason to withhold anticoagulation — it identifies modifiable bleeding risk factors (NICE NG196 prefers ORBIT).',
    'alcohol-units': 'UK CMO low-risk guideline: ≤ 14 units/week spread over ≥ 3 days, with drink-free days.',
    'bmi':      'NICE NG246: use lower thresholds (overweight ≥23, obesity ≥27.5 kg/m²) for people of South Asian, Chinese, other Asian, Middle Eastern, Black African or African-Caribbean family background.',
    'epds':     'Item 10 asks about thoughts of self-harm; the score alone does not assess risk.'
  };

  /* full formulas where the data file only named the equation */
  const FORMULA = {
    'egfr': 'eGFR = 142 × min(SCr/κ, 1)^α × max(SCr/κ, 1)^−1.200 × 0.9938^age × 1.012 [if female] — SCr in mg/dL (µmol/L ÷ 88.4); κ = 0.7 (F) / 0.9 (M); α = −0.241 (F) / −0.302 (M)  (CKD-EPI 2021)'
  };

  /* published bands for continuous results, written out so each threshold can be read and checked */
  const BANDS = {
    'egfr': [
      { r:'≥ 90', l:'G1 — Normal or high', sev:'low',   t:x => x >= 90 },
      { r:'60–89', l:'G2 — Mildly decreased', sev:'low', t:x => x >= 60 && x < 90 },
      { r:'45–59', l:'G3a', sev:'med',  t:x => x >= 45 && x < 60 },
      { r:'30–44', l:'G3b', sev:'high', t:x => x >= 30 && x < 45 },
      { r:'15–29', l:'G4',  sev:'severe', t:x => x >= 15 && x < 30 },
      { r:'< 15', l:'G5 — Kidney failure', sev:'severe', t:x => x < 15 }
    ],
    'bmi': [
      { r:'< 18.5', l:'Underweight', sev:'med', t:x => x.bmi < 18.5 },
      { r:'18.5–24.9', l:'Healthy weight', sev:'low', t:x => x.bmi >= 18.5 && x.bmi < 25 },
      { r:'25–29.9', l:'Overweight', sev:'med', t:x => x.bmi >= 25 && x.bmi < 30 },
      { r:'30–34.9', l:'Obese class I', sev:'high', t:x => x.bmi >= 30 && x.bmi < 35 },
      { r:'35–39.9', l:'Obese class II', sev:'high', t:x => x.bmi >= 35 && x.bmi < 40 },
      { r:'≥ 40', l:'Obese class III', sev:'severe', t:x => x.bmi >= 40 },
      { r:'Waist:height < 0.5', l:'Healthy waist:height', sev:'low', t:x => x.wHR != null && x.wHR < 0.5, extra:true },
      { r:'Waist:height 0.5–0.59', l:'Increased risk', sev:'med', t:x => x.wHR != null && x.wHR >= 0.5 && x.wHR < 0.6, extra:true },
      { r:'Waist:height ≥ 0.6', l:'Very high risk', sev:'high', t:x => x.wHR != null && x.wHR >= 0.6, extra:true }
    ],
    'das28': [
      { r:'< 2.6', l:'Remission', sev:'low', t:x => x < 2.6 },
      { r:'2.6 to < 3.2', l:'Low activity', sev:'low', t:x => x >= 2.6 && x < 3.2 },
      { r:'3.2–5.1', l:'Moderate activity', sev:'med', t:x => x >= 3.2 && x <= 5.1 },
      { r:'> 5.1', l:'High activity', sev:'high', t:x => x > 5.1 }
    ],
    'qtc': [
      { r:'< 440 ms', l:'Normal', sev:'low', t:(x, v) => x < 440 },
      { r:'440 ms to the upper limit (450 ms men, 470 ms women)', l:'Borderline', sev:'med', t:(x, v) => x >= 440 && x <= (v.qtc_female ? 470 : 450) },
      { r:'Above 450 ms (men) / 470 ms (women), below 500 ms', l:'Prolonged', sev:'high', t:(x, v) => x > (v.qtc_female ? 470 : 450) && x < 500 },
      { r:'≥ 500 ms', l:'Markedly prolonged', sev:'severe', t:x => x >= 500 }
    ],
    'hba1c-convert': [
      { r:'< 42 mmol/mol (< 6.0%)', l:'Normal / non-diabetic', sev:'low', t:x => x.ifcc < 42 },
      { r:'42–47 mmol/mol (6.0–6.4%)', l:'Pre-diabetes (high risk)', sev:'med', t:x => x.ifcc >= 42 && x.ifcc < 48 },
      { r:'≥ 48 mmol/mol (≥ 6.5%)', l:'Diabetes range', sev:'high', t:x => x.ifcc >= 48 }
    ],
    'corrected-calcium': [
      { r:'< 2.20 mmol/L', l:'Hypocalcaemia', sev:'med', t:x => x < 2.20 },
      { r:'2.20–2.60 mmol/L', l:'Normal', sev:'low', t:x => x >= 2.20 && x <= 2.60 },
      { r:'> 2.60 to < 3.00 mmol/L', l:'Mild hypercalcaemia', sev:'high', t:x => x > 2.60 && x < 3.00 },
      { r:'≥ 3.00 mmol/L', l:'Significant hypercalcaemia', sev:'severe', t:x => x >= 3.00 }
    ],
    'fib4': [
      { r:'< 1.30 (< 2.0 if age ≥ 65)', l:'Low risk of advanced fibrosis', sev:'low', t:(x, v) => x < (v.fib_age >= 65 ? 2.0 : 1.30) },
      { r:'1.30 (or 2.0) to 2.67', l:'Indeterminate', sev:'med', t:(x, v) => x >= (v.fib_age >= 65 ? 2.0 : 1.30) && x <= 2.67 },
      { r:'> 2.67', l:'High risk of advanced fibrosis', sev:'high', t:x => x > 2.67 }
    ]
  };
  /* results shown as a number only: no published bands, or a band would read as a dose or plan */
  const NUMBER_ONLY = new Set(['crcl', 'pack-years', 'alcohol-units']);
  /* the result is a date or age fact; the interpret() label states it (no action shown) */
  const FACT_LABEL = new Set(['edd-lmp', 'ga-from-edd', 'corrected-age']);
  const MIN = { 'cfs':1, 'mrc-dyspnoea':1 };

  function copyOf(c, k){ return c[k]; }
  function isSumScore(c){ return !!(c.resultMax && !c.formula && !REFERENCE[c.id] && c.inputs && c.inputs.length); }

  /* published bands for an integer score, read from the score's own band boundaries */
  function scoreBands(c){
    if (c.__bands) return c.__bands;
    const out = [];
    if (BANDS[c.id]) { c.__bands = BANDS[c.id]; return c.__bands; }
    if (!isSumScore(c) || !c.interpret) { c.__bands = null; return null; }
    const step = (c.resultMax % 1) ? 0.5 : 1;
    for (let s = (MIN[c.id] || 0); s <= c.resultMax; s += step){
      let r = null; try { r = c.interpret(s, {}); } catch(e){}
      const l = LABEL[c.id] ? LABEL[c.id](s) : (r && r.label) || '';
      const last = out[out.length - 1];
      if (last && last.l === l) last.hi = s;
      else out.push({ lo:s, hi:s, l:l, sev:(r && r.severity) || 'neutral' });
    }
    out.forEach(b => { b.r = b.lo === b.hi ? String(b.lo) : (b.lo + '–' + b.hi); b.t = (x => x >= b.lo && x <= b.hi); });
    c.__bands = out;
    return out;
  }
  function currentBand(c, result, values){
    const bands = scoreBands(c);
    if (!bands) return null;
    const hits = bands.filter(b => { try { return b.t(result, values); } catch(e){ return false; } });
    return hits;
  }

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
        const search = (c.title + ' ' + c.category + ' ' + (copyOf(c,'description')||'') + ' ' + (copyOf(c,'usefulFor')||'')).toLowerCase();
        return '<div class="alg-card calc-item" data-id="' + c.id + '" data-search="' + esc(search) + '">' +
            '<button class="calc-item-head" type="button" aria-expanded="false">' +
              '<span class="ci-icon">' + icon + '</span>' +
              '<span class="ci-text"><b>' + esc(c.title) + (REFERENCE[c.id] ? ' <em class="ci-ref">reference card</em>' : '') + '</b><small>' + esc(copyOf(c,'description')||'') + '</small></span>' +
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
    const useful = copyOf(c, 'usefulFor');
    if (REFERENCE[c.id]){
      return (useful ? '<div class="cc-useful"><b>Use for:</b> ' + useful + '</div>' : '') +
        '<div class="cc-refcard">' + REFERENCE[c.id].html + '</div>' +
        renderRefs(c);
    }
    const bands = scoreBands(c);
    const formula = FORMULA[c.id] || c.formula;
    return '' +
      (useful ? '<div class="cc-useful"><b>Use for:</b> ' + useful + '</div>' : '') +
      (isExternal ? renderExternalNote(c) : '') +
      (c.inputs && c.inputs.length ?
        '<div class="cc-inputs">' +
          '<div class="cc-inputs-head"><h4>' + (isSumScore(c) ? 'Items and points' : 'Inputs') + '</h4><button class="cc-reset" data-reset type="button">Reset</button></div>' +
          renderInputs(c, {}) +
        '</div>' : '') +
      '<div class="cc-result-slot"></div>' +
      (formula ? '<div class="cc-formula"><b>Formula:</b> <code>' + esc(formula) + '</code></div>' : '') +
      (bands && bands.length && !NUMBER_ONLY.has(c.id) ?
        '<div class="cc-bandbox"><h5 class="cc-h5">Published interpretation bands</h5>' +
          '<table class="cc-bands"><tbody>' + bands.map((b, i) => '<tr data-band="' + i + '"><td>' + esc(b.r) + '</td><td>' + esc(b.l) + '</td></tr>').join('') + '</tbody></table>' +
          '<p class="cc-bandnote">Bands as the source states them — a description of the score, not an action for a patient. Read what follows in the cited guideline.</p>' +
        '</div>' : '') +
      (NOTE[c.id] ? '<p class="cc-srcnote">' + esc(NOTE[c.id]) + '</p>' : '') +
      (NUMBER_ONLY.has(c.id) && c.id === 'crcl' ? '<p class="cc-srcnote">Cockcroft-Gault has no interpretation bands of its own. No dose is given here: check the BNF and the SPC for the drug.</p>' : '') +
      renderRefs(c);
  }

  function renderRefs(c){
    return (c.refs && c.refs.length ?
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
    const sum = isSumScore(c);
    c.inputs.forEach(inp => { inp.__sum = sum; });
    const groups = {}; const order = [];
    /* an input without its own group belongs to the group above it (the data sets a group on the first item only) */
    let cur = ' ';
    c.inputs.forEach(inp => { const g = inp.group || cur; cur = g; if (!groups[g]){ groups[g] = []; order.push(g); } groups[g].push(inp); });
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
          const pts = opt.points != null ? opt.points : (inp.__sum && typeof opt.value === 'number' && String(opt.label).indexOf('(' + opt.value + ')') === -1 ? opt.value : null);
          return '<option value="' + ov + '"' + sel + '>' + opt.label + (pts != null ? ' (+' + pts + ')' : '') + '</option>';
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

  /* the arithmetic, item by item, so the user can check the sum */
  function working(c, values){
    if (!isSumScore(c)) return '';
    const parts = []; let naive = 0;
    c.inputs.forEach(inp => {
      const v = values[inp.id];
      if (v == null || v === false) return;
      if (inp.kind === 'check'){
        const p = inp.points != null ? inp.points : 1;
        parts.push(esc(String(inp.label).replace(/<[^>]+>/g,'')) + ' <b>+' + p + '</b>'); naive += p;
      } else if (inp.kind === 'select' || inp.kind === 'likert'){
        const opt = (inp.options || []).find(o => String(o.value) === String(v));
        const p = opt && opt.points != null ? opt.points : Number(v);
        parts.push(esc(String(inp.label).replace(/<[^>]+>/g,'')) + (opt && inp.kind === 'select' ? ': ' + esc(opt.label) : '') + ' <b>+' + p + '</b>'); naive += p;
      }
    });
    return parts.length ? '<div class="cc-working"><span class="cc-k">How the total is made</span>' + parts.join(' · ') + ' = <b>' + naive + '</b></div>' : '';
  }

  function recompute(c, body){
    const slot = body.querySelector('.cc-result-slot');
    if (!slot) return;
    const values = body.__values;
    let result = null, interp = null;
    try {
      if (c.compute) result = c.compute(values);
      /* only the band LABEL of interpret() is ever used (dates: the stated gestation / age) */
      if (result !== null && result !== undefined && c.interpret && FACT_LABEL.has(c.id)) interp = c.interpret(result, values);
    } catch(e){ console.warn('calc error', c.id, e); }

    body.querySelectorAll('.cc-bands tr[data-band]').forEach(tr => tr.classList.remove('is-cur'));
    const hasValue = Object.keys(values).length > 0;
    if (!hasValue && !c.kind){ slot.innerHTML = '<div class="cc-result-empty">Enter inputs to calculate.</div>'; return; }
    if (result === null || result === undefined){ slot.innerHTML = ''; return; }

    let label = '', sev = 'neutral';
    if (!NUMBER_ONLY.has(c.id)){
      const hits = currentBand(c, result, values);
      if (hits && hits.length){
        label = hits.map(b => b.l).join(' · ');
        sev = hits[0].sev || 'neutral';
        const all = scoreBands(c);
        hits.forEach(b => { const tr = body.querySelector('.cc-bands tr[data-band="' + all.indexOf(b) + '"]'); if (tr) tr.classList.add('is-cur'); });
      } else if (interp){ label = interp.label || ''; sev = 'neutral'; }
      if (c.id === 'ottawa-ankle' && result && typeof result === 'object'){
        label = (result.ankle && result.foot) ? 'Criteria met: ankle and foot zones' : result.ankle ? 'Criteria met: ankle zone' : result.foot ? 'Criteria met: foot zone' : 'Criteria not met';
        sev = (result.ankle || result.foot) ? 'high' : 'low';
      }
    }
    let resultText = typeof result === 'object' ? (result.display || JSON.stringify(result)) : String(result);
    if (c.id === 'ottawa-ankle') resultText = (result.ankle || result.foot) ? 'Rule positive' : 'Rule negative';
    const resultMax = c.resultMax;
    const pct = (typeof result === 'number' && resultMax) ? Math.min(100, Math.round((result / resultMax) * 100)) : null;

    slot.innerHTML =
      '<div class="cc-result cc-result-' + sev + '">' +
        '<div class="cc-result-head"><div class="cc-result-l">' +
          '<div class="cc-result-lbl">' + (c.resultLabel || 'Score') + '</div>' +
          '<div class="cc-result-num">' + resultText + '<span class="cc-result-unit">' + (c.resultUnit || '') + (resultMax ? ' / ' + resultMax : '') + '</span></div>' +
        '</div>' +
        (label ? '<div class="cc-result-r"><div class="cc-result-tag cc-sev-' + sev + '">' + esc(label) + '</div>' +
          (isSumScore(c) || BANDS[c.id] ? '<div class="cc-result-band">Published band</div>' : '') + '</div>' : '') +
        '</div>' +
        (pct != null ? '<div class="cc-result-bar"><div class="cc-result-bar-fill cc-sev-' + sev + '" style="width:' + pct + '%"></div></div>' : '') +
        working(c, values) +
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
