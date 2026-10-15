/* ============================================
   Reasoning GP — Medical Calculator Data (supplement 4)
   Date-based calculators — Women's / obstetric · Paediatrics
   Appends to window.RGP_CALCULATORS.
   ============================================ */
(function(){
  if (!window.RGP_CALCULATORS) window.RGP_CALCULATORS = [];

  // --- date helpers (parse YYYY-MM-DD as a calendar date, diff in whole days) ---
  function parseD(s){
    if (!s) return null;
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
    if (!m) return null;
    const d = new Date(Date.UTC(+m[1], +m[2]-1, +m[3]));
    return isNaN(d.getTime()) ? null : d;
  }
  function today(){
    const n = new Date();
    return new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()));
  }
  function addDays(d, n){ return new Date(d.getTime() + n*86400000); }
  function diffDays(a, b){ return Math.round((a.getTime() - b.getTime()) / 86400000); }
  function fmt(d){
    if (!d) return '—';
    const days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const mon=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return days[d.getUTCDay()] + ' ' + d.getUTCDate() + ' ' + mon[d.getUTCMonth()] + ' ' + d.getUTCFullYear();
  }
  function wkd(days){
    if (days < 0) return '0+0';
    return Math.floor(days/7) + '+' + (days%7);
  }
  function trimester(days){
    if (days < 14*7) return '1st trimester';
    if (days < 28*7) return '2nd trimester';
    return '3rd trimester';
  }

  window.RGP_CALCULATORS.push(

    // ============================================
    // EDD & gestational age from LMP (Naegele)
    // ============================================
    {
      id: 'edd-lmp',
      title: 'EDD & gestational age (from LMP)',
      category: "Women's / obstetric",
      description: 'Estimated due date and current gestation from the last menstrual period (Naegele\u2019s rule).',
      usefulFor: 'Confirming pregnancy dates before the dating scan; antenatal booking. A USS at 11\u201314 weeks supersedes LMP dating.',
      resultLabel: 'Result', resultUnit:'',
      formula: 'EDD = LMP + 280 days (+ adjustment for cycle length \u2260 28)',
      inputs: [
        { id:'lmp_date', kind:'date', label:'First day of last menstrual period (LMP)', note:'Reliable, certain dates only' },
        { id:'lmp_cycle', kind:'number', label:'Usual cycle length', unit:'days', min:20, max:45, step:1, note:'Optional \u2014 defaults to 28' },
      ],
      compute(v){
        const lmp = parseD(v.lmp_date);
        if (!lmp) return null;
        const cycle = v.lmp_cycle ? Number(v.lmp_cycle) : 28;
        const adj = cycle - 28;
        const edd = addDays(lmp, 280 + adj);
        const gaDays = diffDays(today(), lmp) - adj; // gestational age adjusted to conception timing
        return { display: 'EDD ' + fmt(edd) + '  ·  GA today ' + wkd(gaDays) + ' weeks', edd: edd, gaDays: gaDays };
      },
      interpret(r){
        const d = r.gaDays;
        if (d < 0) return { label:'LMP is in the future', severity:'neutral', action:'Check the date entered.', detail:'' };
        if (d > 300) return { label:'Past dates / post-term range', severity:'med', action:'Re-check dating; if genuinely post-term follow local post-dates pathway.', detail:'Gestation appears > 42 weeks \u2014 likely a date error.' };
        const tri = trimester(d);
        if (d < 70)  return { label:tri + ' \u2014 ' + wkd(d) + ' weeks', severity:'low', action:'Arrange booking bloods + dating scan (11\u201314 weeks). Check folic acid supplementation (see the antenatal care guidance).', detail:'EDD ' + fmt(r.edd) + '. Dating USS will confirm/adjust.' };
        if (d < 196) return { label:tri + ' \u2014 ' + wkd(d) + ' weeks', severity:'low', action:'Routine antenatal care; anomaly scan ~18\u201320+6 weeks.', detail:'EDD ' + fmt(r.edd) + '.' };
        if (d < 259) return { label:tri + ' \u2014 ' + wkd(d) + ' weeks', severity:'low', action:'Third-trimester care; GBS/whooping-cough vaccine; growth surveillance if indicated.', detail:'EDD ' + fmt(r.edd) + '.' };
        if (d < 294) return { label:'Term \u2014 ' + wkd(d) + ' weeks', severity:'med', action:'Term (37\u201342 weeks). Discuss birth plan; monitor for labour.', detail:'EDD ' + fmt(r.edd) + '.' };
        return { label:'Post-term \u2014 ' + wkd(d) + ' weeks', severity:'high', action:'\u2265 42 weeks \u2014 follow post-dates pathway (membrane sweep / induction discussion).', detail:'EDD ' + fmt(r.edd) + '.' };
      },
      refs:[
        { label:'NICE NG201 Antenatal care', url:'https://www.nice.org.uk/guidance/ng201' },
        
      ],
    },

    // ============================================
    // Gestational age from a known EDD (e.g. dating scan)
    // ============================================
    {
      id: 'ga-from-edd',
      title: 'Gestational age (from EDD)',
      category: "Women's / obstetric",
      description: 'Current gestation and trimester from a known estimated due date (e.g. the dating-scan EDD).',
      usefulFor: 'Quick "how many weeks?" from the scan EDD — for scan timing and reading medicine-safety information.',
      resultLabel: 'Result', resultUnit:'',
      formula: 'GA today = 280 \u2212 (EDD \u2212 today),  in weeks+days',
      inputs: [
        { id:'edd_date', kind:'date', label:'Estimated due date (EDD)', note:'From dating scan or LMP' },
      ],
      compute(v){
        const edd = parseD(v.edd_date);
        if (!edd) return null;
        const gaDays = 280 - diffDays(edd, today());
        const conception = addDays(edd, -266);
        return { display: 'GA today ' + wkd(gaDays) + ' weeks  ·  ' + trimester(Math.max(0,gaDays)), gaDays: gaDays, conception: conception };
      },
      interpret(r){
        const d = r.gaDays;
        if (d < 0) return { label:'EDD already passed by ' + Math.abs(d) + ' days', severity:'high', action:'Post-dates \u2014 follow local pathway.', detail:'' };
        const tri = trimester(d);
        if (d < 70)  return { label:tri + ' \u2014 ' + wkd(d) + ' weeks', severity:'low', action:'Avoid teratogens; review any medication for pregnancy safety. Approx conception ' + fmt(r.conception) + '.', detail:'Anomaly scan ~18\u201320+6 weeks.' };
        if (d < 196) return { label:tri + ' \u2014 ' + wkd(d) + ' weeks', severity:'low', action:'Routine antenatal milestones.', detail:'' };
        if (d < 259) return { label:tri + ' \u2014 ' + wkd(d) + ' weeks', severity:'low', action:'Third-trimester care.', detail:'' };
        return { label:'Term \u2014 ' + wkd(d) + ' weeks', severity:'med', action:'Term/near-term \u2014 monitor for labour; reduced fetal movements = same-day assessment.', detail:'' };
      },
      refs:[
        { label:'NICE NG201 Antenatal care', url:'https://www.nice.org.uk/guidance/ng201' },
      ],
    },

    // ============================================
    // Corrected age for prematurity (paediatrics)
    // ============================================
    {
      id: 'corrected-age',
      title: 'Corrected age (prematurity)',
      category: 'Paediatrics',
      description: 'Chronological and corrected age for an infant born preterm.',
      usefulFor: 'Interpreting development, growth charts and immunisation timing for premature babies (correct until ~2 years).',
      resultLabel: 'Result', resultUnit:'',
      formula: 'Corrected age = chronological age \u2212 (40 weeks \u2212 gestation at birth)',
      inputs: [
        { id:'ca_dob', kind:'date', label:'Date of birth' },
        { id:'ca_ga_wk', kind:'number', label:'Gestation at birth \u2014 weeks', unit:'wks', min:22, max:42, step:1 },
        { id:'ca_ga_d',  kind:'number', label:'Gestation at birth \u2014 extra days', unit:'days', min:0, max:6, step:1, note:'Optional' },
      ],
      compute(v){
        const dob = parseD(v.ca_dob);
        if (!dob || !v.ca_ga_wk) return null;
        const gaBirth = Number(v.ca_ga_wk)*7 + Number(v.ca_ga_d||0);
        const chronoDays = diffDays(today(), dob);
        if (chronoDays < 0) return { display:'Date of birth is in the future', err:true };
        const prematureDays = (40*7) - gaBirth;
        const correctedDays = chronoDays - prematureDays;
        const chronoMo = (chronoDays/30.4375);
        const corrMo = (correctedDays/30.4375);
        return {
          display: 'Chronological ' + chronoMo.toFixed(1) + ' mo  ·  Corrected ' + (correctedDays<0?'\u2212':'') + Math.abs(corrMo).toFixed(1) + ' mo',
          chronoDays: chronoDays, correctedDays: correctedDays, prematureDays: prematureDays, gaBirth: gaBirth
        };
      },
      interpret(r){
        if (r.err) return { label:'Check the date', severity:'neutral', action:'Date of birth cannot be in the future.', detail:'' };
        const wkBirth = Math.floor(r.gaBirth/7) + '+' + (r.gaBirth%7);
        const correctUntil = r.chronoDays < 730;
        if (r.gaBirth >= 37*7) return { label:'Born at term (' + wkBirth + ')', severity:'low', action:'No correction needed \u2014 use chronological age.', detail:'Correction only applies to preterm infants.' };
        if (r.correctedDays < 0) return { label:'Corrected age below term-equivalent', severity:'med', action:'Plot growth at corrected age; expect catch-up. Immunise by CHRONOLOGICAL age regardless of prematurity.', detail:'Born ' + wkBirth + '; ' + Math.abs(Math.round(r.correctedDays)) + ' days below term-equivalent.' };
        return { label:'Born preterm (' + wkBirth + ')', severity:'low',
          action: (correctUntil ? 'Use CORRECTED age for development & growth-chart plotting (until ~2 years). ' : 'Past ~2 years \u2014 correction no longer needed. ') + 'Immunise by chronological age.',
          detail: 'Chronological ' + Math.round(r.chronoDays/7) + ' weeks; correction = ' + r.prematureDays + ' days.' };
      },
      refs:[
        { label:'RCPCH growth charts (preterm)', url:'https://www.rcpch.ac.uk/resources/growth-charts' },
        { label:'NICE NG72 Developmental follow-up of preterm', url:'https://www.nice.org.uk/guidance/ng72' },
      ],
        },

    // ============================================
    // KFRE — 4-variable Kidney Failure Risk Equation (Upload 130)
    // Tangri 2011 / 2016; non-North American calibration (UK); NICE NG203
    // ============================================
    {
      id: 'kfre',
      title: 'Kidney Failure Risk Equation (KFRE, 4-variable)',
      category: 'Renal / metabolic',
      description: '2- and 5-year risk of kidney failure needing dialysis or transplant, from age, sex, eGFR and urine ACR.',
      usefulFor: 'Adults with CKD G3a–G5 (eGFR < 60). NICE NG203 (2021) uses the 4-variable KFRE 5-year risk as one of its referral criteria. The non-North American calibration used by UK laboratories is applied here.',
      resultLabel: 'Kidney failure risk', resultUnit: '',
      formula: 'Risk = 1 − S₀^exp(−0.2201×(age/10 − 7.036) + 0.2467×(male − 0.5642) − 0.5567×(eGFR/5 − 7.222) + 0.4510×(ln ACR[mg/g] − 5.137));  S₀ = 0.9832 (2 years), 0.9365 (5 years), non-North American calibration;  ACR mg/g = mg/mmol × 8.84',
      inputs: [
        { id:'kf_age', kind:'number', label:'Age', unit:'yrs', min:18, max:110, step:1 },
        { id:'kf_sex', kind:'select', label:'Sex', options:[ { value:'m', label:'Male' }, { value:'f', label:'Female' } ] },
        { id:'kf_egfr', kind:'number', label:'eGFR (CKD-EPI)', unit:'mL/min/1.73m²', min:1, max:120, step:1 },
        { id:'kf_acr', kind:'number', label:'Urine albumin:creatinine ratio (ACR)', unit:'mg/mmol', min:0.1, max:2000, step:0.1, note:'Use mg/mmol as reported by UK laboratories' },
      ],
      compute(v){
        if (!v.kf_age || !v.kf_sex || !v.kf_egfr || !v.kf_acr) return null;
        const male = v.kf_sex === 'm' ? 1 : 0;
        const acrMgG = Number(v.kf_acr) * 8.84;
        const lp = -0.2201*(v.kf_age/10 - 7.036) + 0.2467*(male - 0.5642) - 0.5567*(v.kf_egfr/5 - 7.222) + 0.4510*(Math.log(acrMgG) - 5.137);
        const r2 = (1 - Math.pow(0.9832, Math.exp(lp))) * 100;
        const r5 = (1 - Math.pow(0.9365, Math.exp(lp))) * 100;
        const f = x => (x < 0.1 ? '<0.1' : x.toFixed(1));
        return { display: '5-year ' + f(r5) + '%  ·  2-year ' + f(r2) + '%', r5: r5, r2: r2, egfr: Number(v.kf_egfr), acr: Number(v.kf_acr) };
      },
      interpret(r){
        return { label: r.r5 > 5 ? '5-year risk above 5%' : '5-year risk 5% or less', severity: r.r5 > 5 ? 'high' : 'low', action:'', detail:'' };
      },
      refs:[
        { label:'NICE NG203 Chronic kidney disease (2021, updated 2021) — referral criteria', url:'https://www.nice.org.uk/guidance/ng203' },
        { label:'Tangri et al. JAMA 2011 — KFRE derivation', url:'https://pubmed.ncbi.nlm.nih.gov/21482743/' },
        { label:'Tangri et al. JAMA 2016 — multinational validation and non-North American calibration', url:'https://pubmed.ncbi.nlm.nih.gov/26757465/' },
        { label:'Major et al. PLoS Med 2019 — KFRE in UK primary care', url:'https://doi.org/10.1371/journal.pmed.1002955' },
      ],
    },

    // ============================================
    // Glasgow-Blatchford bleeding score (Upload 130)
    // ============================================
    {
      id: 'glasgow-blatchford',
      title: 'Glasgow-Blatchford score (upper GI bleed)',
      category: 'Gastro / hepatology',
      description: 'Pre-endoscopy risk score for acute upper gastrointestinal bleeding.',
      usefulFor: 'Acute upper GI bleeding in people aged 16 and over. NICE CG141 (2012, updated 2016) uses the Blatchford score at first assessment; the score needs a blood urea and haemoglobin, so in primary care it is mainly a reference for what the receiving team will use.',
      resultLabel: 'Glasgow-Blatchford score', resultMax: 23,
      inputs: [
        { group:'Blood tests', id:'gb_urea', kind:'select', label:'Blood urea (mmol/L)', options:[
          { value:'u0', label:'< 6.5', points:0 }, { value:'u2', label:'6.5 to < 8.0', points:2 }, { value:'u3', label:'8.0 to < 10.0', points:3 },
          { value:'u4', label:'10.0 to < 25.0', points:4 }, { value:'u6', label:'≥ 25.0', points:6 } ] },
        { id:'gb_hb', kind:'select', label:'Haemoglobin (g/L) — by sex', options:[
          { value:'h0', label:'Men ≥ 130 / Women ≥ 120', points:0 }, { value:'hm1', label:'Men 120 to < 130', points:1 },
          { value:'hf1', label:'Women 100 to < 120', points:1 }, { value:'hm3', label:'Men 100 to < 120', points:3 },
          { value:'h6', label:'Men or women < 100', points:6 } ] },
        { group:'Observations', id:'gb_sbp', kind:'select', label:'Systolic blood pressure (mmHg)', options:[
          { value:'s0', label:'≥ 110', points:0 }, { value:'s1', label:'100–109', points:1 }, { value:'s2', label:'90–99', points:2 }, { value:'s3', label:'< 90', points:3 } ] },
        { id:'gb_pulse', kind:'check', label:'Pulse ≥ 100 /min', points:1 },
        { group:'Presentation and history', id:'gb_mel', kind:'check', label:'Presentation with melaena', points:1 },
        { id:'gb_sync', kind:'check', label:'Presentation with syncope', points:2 },
        { id:'gb_liver', kind:'check', label:'Hepatic disease (history or clinical/laboratory evidence)', points:2 },
        { id:'gb_hf', kind:'check', label:'Cardiac failure (history or clinical evidence)', points:2 },
      ],
      compute(v){
        const pts = (id, opts) => { const o = opts.find(x => x.value === v[id]); return o ? o.points : 0; };
        const c = this.inputs;
        let s = pts('gb_urea', c[0].options) + pts('gb_hb', c[1].options) + pts('gb_sbp', c[2].options);
        if (v.gb_pulse) s += 1; if (v.gb_mel) s += 1; if (v.gb_sync) s += 2; if (v.gb_liver) s += 2; if (v.gb_hf) s += 2;
        return s;
      },
      interpret(s){
        if (s === 0) return { label:'Score 0 — NICE CG141: consider early discharge before endoscopy', severity:'low', action:'', detail:'' };
        if (s === 1) return { label:'Score 1 — above NICE’s early-discharge threshold (some international guidance uses ≤ 1)', severity:'med', action:'', detail:'' };
        return { label:'Score ≥ 2 — not low risk; higher scores predict need for intervention', severity:'high', action:'', detail:'' };
      },
      refs:[
        { label:'NICE CG141 Acute upper GI bleeding in over 16s (2012, updated 2016)', url:'https://www.nice.org.uk/guidance/cg141' },
        { label:'Blatchford et al. Lancet 2000', url:'https://pubmed.ncbi.nlm.nih.gov/11073021/' },
      ],
    },

    // ============================================
    // Keele STarT Back (Upload 130)
    // ============================================
    {
      id: 'start-back',
      title: 'Keele STarT Back screening tool',
      category: 'MSK / pain',
      description: 'Stratifies low back pain into low, medium or high risk of poor prognosis (9 items).',
      usefulFor: 'Low back pain with or without sciatica at the first point of contact. NICE NG59 (2016, updated 2020): consider a risk stratification tool such as STarT Back to inform shared decision-making about stratified management.',
      resultLabel: 'STarT Back total', resultMax: 9,
      inputs: [
        { group:'Thinking about the last 2 weeks — tick if the patient agrees', id:'sb1', kind:'check', label:'1. My back pain has spread down my leg(s) at some time', points:1 },
        { id:'sb2', kind:'check', label:'2. I have had pain in the shoulder or neck at some time', points:1 },
        { id:'sb3', kind:'check', label:'3. I have only walked short distances because of my back pain', points:1 },
        { id:'sb4', kind:'check', label:'4. I have dressed more slowly than usual because of back pain', points:1 },
        { id:'sb5', kind:'check', label:'5. It’s not really safe for a person with a condition like mine to be physically active', points:1, note:'Psychosocial subscale item' },
        { id:'sb6', kind:'check', label:'6. Worrying thoughts have been going through my mind a lot of the time', points:1, note:'Psychosocial subscale item' },
        { id:'sb7', kind:'check', label:'7. I feel that my back pain is terrible and it’s never going to get any better', points:1, note:'Psychosocial subscale item' },
        { id:'sb8', kind:'check', label:'8. In general I have not enjoyed all the things I used to enjoy', points:1, note:'Psychosocial subscale item' },
        { id:'sb9', kind:'select', label:'9. Overall, how bothersome has your back pain been? (psychosocial subscale item)', options:[
          { value:'b0', label:'Not at all / slightly / moderately', points:0 }, { value:'b1', label:'Very much / extremely', points:1 } ] },
      ],
      compute(v){
        let s = 0; ['sb1','sb2','sb3','sb4','sb5','sb6','sb7','sb8'].forEach(k => { if (v[k]) s += 1; });
        if (v.sb9 === 'b1') s += 1;
        return s;
      },
      subscale(v){ let s = 0; ['sb5','sb6','sb7','sb8'].forEach(k => { if (v[k]) s += 1; }); if (v.sb9 === 'b1') s += 1; return s; },
      interpret(s){ return { label: s <= 3 ? 'Low risk' : 'Medium or high risk (see subscale)', severity:'neutral', action:'', detail:'' }; },
      refs:[
        { label:'NICE NG59 Low back pain and sciatica in over 16s (2016, updated 2020)', url:'https://www.nice.org.uk/guidance/ng59' },
        { label:'Keele University — STarT Back', url:'https://www.keele.ac.uk/sbst/' },
        { label:'Hill et al. Arthritis Rheum 2008 — development and scoring', url:'https://pubmed.ncbi.nlm.nih.gov/18438893/' },
      ],
    },

    // ============================================
    // NICE NG143 traffic-light (fever in under 5s) — reference checker (Upload 130)
    // ============================================
    {
      id: 'ng143-traffic-light',
      title: 'Fever in under 5s — NICE NG143 traffic-light checker',
      category: 'Paediatrics',
      description: 'Tick the features present; shows the highest traffic-light band reached and the NICE NG143 position. No drugs or doses.',
      usefulFor: 'Children under 5 with a fever. NICE NG143 (2019, updated 2021) traffic-light system for identifying risk of serious illness. Reference only: clinical judgement, the full NG143 table and specific-illness assessments (for example meningococcal disease, UTI, Kawasaki disease) still apply.',
      resultLabel: 'Highest band reached', resultUnit: '',
      inputs: [
        { group:'Immediately life-threatening', id:'tl_life', kind:'check', label:'Compromised airway, breathing or circulation, or decreased level of consciousness', points:0 },
        { group:'RED features (high risk)', id:'tl_r_col', kind:'check', label:'Colour: pale, mottled, ashen or blue (skin, lips or tongue)', points:0 },
        { id:'tl_r_social', kind:'check', label:'No response to social cues; appears ill to a healthcare professional', points:0 },
        { id:'tl_r_wake', kind:'check', label:'Does not wake, or if roused does not stay awake', points:0 },
        { id:'tl_r_cry', kind:'check', label:'Weak, high-pitched or continuous cry', points:0 },
        { id:'tl_r_resp', kind:'check', label:'Grunting; respiratory rate > 60 /min; moderate or severe chest indrawing', points:0 },
        { id:'tl_r_turgor', kind:'check', label:'Reduced skin turgor', points:0 },
        { id:'tl_r_age', kind:'check', label:'Age 0–3 months with temperature ≥ 38°C', points:0 },
        { id:'tl_r_neuro', kind:'check', label:'Non-blanching rash; bulging fontanelle; neck stiffness; status epilepticus; focal neurological signs; focal seizures', points:0 },
        { group:'AMBER features (intermediate risk)', id:'tl_a_pallor', kind:'check', label:'Pallor of skin, lips or tongue reported by parent or carer', points:0 },
        { id:'tl_a_social', kind:'check', label:'Not responding normally to social cues; no smile; wakes only with prolonged stimulation; decreased activity', points:0 },
        { id:'tl_a_resp', kind:'check', label:'Nasal flaring; respiratory rate > 50 /min (6–12 months) or > 40 /min (over 12 months); SpO₂ ≤ 95% in air; crackles in the chest', points:0 },
        { id:'tl_a_hr', kind:'check', label:'Heart rate > 160 (under 12 months), > 150 (12–24 months) or > 140 (2–5 years) /min', points:0 },
        { id:'tl_a_circ', kind:'check', label:'Capillary refill time ≥ 3 seconds; dry mucous membranes; poor feeding in infants; reduced urine output', points:0 },
        { id:'tl_a_age', kind:'check', label:'Age 3–6 months with temperature ≥ 39°C', points:0 },
        { id:'tl_a_other', kind:'check', label:'Fever for ≥ 5 days; rigors; swelling of a limb or joint; non-weight bearing or not using an extremity', points:0 },
      ],
      compute(v){
        const any = keys => keys.some(k => v[k]);
        const life = !!v.tl_life;
        const red = any(['tl_r_col','tl_r_social','tl_r_wake','tl_r_cry','tl_r_resp','tl_r_turgor','tl_r_age','tl_r_neuro']);
        const amber = any(['tl_a_pallor','tl_a_social','tl_a_resp','tl_a_hr','tl_a_circ','tl_a_age','tl_a_other']);
        const band = life ? 'life' : red ? 'red' : amber ? 'amber' : 'green';
        const txt = { life:'Life-threatening features', red:'RED', amber:'AMBER', green:'GREEN (no amber or red feature ticked)' }[band];
        return { display: txt, band: band };
      },
      interpret(r){ return { label: r.band, severity:'neutral', action:'', detail:'' }; },
      refs:[
        { label:'NICE NG143 Fever in under 5s: assessment and initial management (2019, updated 2021)', url:'https://www.nice.org.uk/guidance/ng143' },
      ],
    },

    // ============================================
    // Head injury — NICE NG232 criteria checklist (Canadian CT Head Rule-based adult CT criteria) (Upload 130)
    // ============================================
    {
      id: 'head-injury-ng232',
      title: 'Head injury — NICE NG232 referral and CT criteria',
      category: 'Trauma / head injury',
      description: 'Checklist of the NICE NG232 criteria for referral from the community to an emergency department, and the adult CT head criteria (derived from the Canadian CT Head Rule).',
      usefulFor: 'Head injury seen in general practice or by phone. NICE NG232 (2023). The ED-referral criteria apply to all ages; the CT criteria shown are the adult ones (children have separate criteria in NG232). Reference only — the CT decision is made by the emergency department.',
      resultLabel: 'NG232 criteria met', resultUnit: '',
      inputs: [
        { group:'A. Referral from the community to an emergency department (NG232) — any of:', id:'hi_gcs15', kind:'check', label:'GCS less than 15 on initial assessment', points:0 },
        { id:'hi_loc', kind:'check', label:'Any loss of consciousness as a result of the injury', points:0 },
        { id:'hi_focal', kind:'check', label:'Any focal neurological deficit since the injury', points:0 },
        { id:'hi_skull', kind:'check', label:'Any suspicion of a skull fracture or penetrating head injury', points:0 },
        { id:'hi_amnesia', kind:'check', label:'Amnesia for events before or after the injury', points:0 },
        { id:'hi_headache', kind:'check', label:'Persistent headache since the injury', points:0 },
        { id:'hi_vomit', kind:'check', label:'Any vomiting episodes since the injury (clinical judgement in young children)', points:0 },
        { id:'hi_seizure', kind:'check', label:'Any seizure since the injury', points:0 },
        { id:'hi_surgery', kind:'check', label:'Any previous brain surgery', points:0 },
        { id:'hi_energy', kind:'check', label:'A high-energy head injury (e.g. pedestrian struck by a vehicle, ejected from a vehicle, fall from > 1 m or > 5 stairs)', points:0 },
        { id:'hi_bleed', kind:'check', label:'Any history of bleeding or clotting disorders', points:0 },
        { id:'hi_anticoag', kind:'check', label:'Current anticoagulant or antiplatelet treatment (except aspirin monotherapy)', points:0 },
        { id:'hi_intox', kind:'check', label:'Current drug or alcohol intoxication', points:0 },
        { id:'hi_safeg', kind:'check', label:'Safeguarding concerns (including suspected non-accidental injury)', points:0 },
        { id:'hi_behav', kind:'check', label:'Irritability or altered behaviour, particularly in infants and children under 5', points:0 },
        { id:'hi_concern', kind:'check', label:'Continuing concern by the professional about the diagnosis', points:0 },
        { group:'B. Adults — CT head within 1 hour of risk factor identified (as assessed in ED) — any of:', id:'ct_gcs13', kind:'check', label:'GCS less than 13 on initial assessment in the emergency department', points:0 },
        { id:'ct_gcs2h', kind:'check', label:'GCS less than 15 at 2 hours after the injury', points:0 },
        { id:'ct_open', kind:'check', label:'Suspected open or depressed skull fracture', points:0 },
        { id:'ct_basal', kind:'check', label:'Any sign of basal skull fracture (haemotympanum, ‘panda’ eyes, CSF from ear or nose, Battle’s sign)', points:0 },
        { id:'ct_seiz', kind:'check', label:'Post-traumatic seizure', points:0 },
        { id:'ct_focal', kind:'check', label:'Focal neurological deficit', points:0 },
        { id:'ct_vom', kind:'check', label:'More than 1 episode of vomiting', points:0 },
        { group:'C. Adults — CT head within 8 hours: loss of consciousness or amnesia since the injury AND any of:', id:'ct8_locam', kind:'check', label:'Loss of consciousness or amnesia since the injury (required for this section)', points:0 },
        { id:'ct8_65', kind:'check', label:'Age 65 or over', points:0 },
        { id:'ct8_bleed', kind:'check', label:'History of bleeding or clotting disorders', points:0 },
        { id:'ct8_mech', kind:'check', label:'Dangerous mechanism of injury', points:0 },
        { id:'ct8_retro', kind:'check', label:'More than 30 minutes’ retrograde amnesia of events immediately before the injury', points:0 },
      ],
      compute(v){
        const any = keys => keys.some(k => v[k]);
        const ed = any(['hi_gcs15','hi_loc','hi_focal','hi_skull','hi_amnesia','hi_headache','hi_vomit','hi_seizure','hi_surgery','hi_energy','hi_bleed','hi_anticoag','hi_intox','hi_safeg','hi_behav','hi_concern']);
        const ct1 = any(['ct_gcs13','ct_gcs2h','ct_open','ct_basal','ct_seiz','ct_focal','ct_vom']);
        const ct8 = !!v.ct8_locam && any(['ct8_65','ct8_bleed','ct8_mech','ct8_retro']);
        const parts = [];
        if (ed) parts.push('ED referral criteria met'); if (ct1) parts.push('adult CT within 1 h criteria met'); else if (ct8) parts.push('adult CT within 8 h criteria met');
        return { display: parts.length ? parts.join(' · ') : 'No NG232 criterion ticked', ed: ed, ct1: ct1, ct8: ct8, any: ed || ct1 || ct8 };
      },
      interpret(r){ return { label: r.any ? 'Criteria met' : 'No criterion ticked', severity:'neutral', action:'', detail:'' }; },
      refs:[
        { label:'NICE NG232 Head injury: assessment and early management (2023)', url:'https://www.nice.org.uk/guidance/ng232' },
        { label:'Stiell et al. Lancet 2001 — Canadian CT Head Rule', url:'https://pubmed.ncbi.nlm.nih.gov/11356436/' },
      ],
    }

  );
})();
