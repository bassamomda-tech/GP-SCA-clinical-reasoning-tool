/* ============================================
   Reasoning GP — Medical Calculator Data (supplement 2)
   Respiratory · Cardio / metabolic · VTE
   Appends to window.RGP_CALCULATORS (same schema as the main file).
   ============================================ */
(function(){
  if (!window.RGP_CALCULATORS) window.RGP_CALCULATORS = [];

  window.RGP_CALCULATORS.push(

    // ============================================
    // RESPIRATORY
    // ============================================
    {
      id: 'curb-65',
      title: 'CURB-65',
      category: 'Respiratory',
      description: 'CAP severity where urea is available (hospital / nursing-home).',
      usefulFor: 'Pneumonia severity when bloods are to hand. Primary care without bloods → use CRB-65.',
      resultLabel: 'CURB-65', resultMax: 5,
      inputs: [
        { id:'cu_c',   kind:'check', label:'Confusion — AMT ≤ 8 or new disorientation', points:1 },
        { id:'cu_u',   kind:'check', label:'Urea > 7 mmol/L', points:1 },
        { id:'cu_r',   kind:'check', label:'Respiratory rate ≥ 30 / min', points:1 },
        { id:'cu_b',   kind:'check', label:'BP — SBP < 90 OR DBP ≤ 60', points:1 },
        { id:'cu_65',  kind:'check', label:'Age ≥ 65', points:1 },
      ],
      compute(v){ return Object.values(v).filter(Boolean).length; },
      interpret(s){
        if (s <= 1) return { label:'Low severity',  severity:'low',  action:'Consider home treatment — oral amoxicillin.', detail:'30-day mortality < 3%.' };
        if (s === 2) return { label:'Moderate',     severity:'med',  action:'Consider hospital / short-stay assessment.', detail:'30-day mortality ~9%.' };
        return        { label:'High severity',      severity:'severe', action:'Urgent hospital admission; assess for critical care.', detail:'30-day mortality 15–40%. Score 4–5 — consider ITU review.' };
      },
      refs:[
        { label:'NICE NG138 Pneumonia', url:'https://www.nice.org.uk/guidance/ng138' },
        { label:'BTS CAP guideline', url:'https://www.brit-thoracic.org.uk/' },
      ],
    },

    {
      id: 'mrc-dyspnoea',
      title: 'MRC Dyspnoea Scale',
      category: 'Respiratory',
      description: 'Breathlessness grade (1–5) — disability, not lung function.',
      usefulFor: 'COPD assessment & pulmonary rehab referral (grade ≥ 3). Tracks functional impact.',
      resultLabel: 'MRC grade', resultMax: 5,
      inputs: [
        { id:'mrc', kind:'select', label:'Breathlessness grade',
          options:[
            { value:1, label:'1 — Only on strenuous exercise' },
            { value:2, label:'2 — Short of breath hurrying / slight hill' },
            { value:3, label:'3 — Walks slower than peers / stops for breath on the flat' },
            { value:4, label:'4 — Stops for breath after ~100 m / few minutes on the flat' },
            { value:5, label:'5 — Too breathless to leave the house / on dressing' },
          ] },
      ],
      compute(v){ return v.mrc ? Number(v.mrc) : null; },
      interpret(s){
        if (s <= 2) return { label:'Mild functional limitation', severity:'low', action:'Optimise inhalers; encourage activity.', detail:'Grade 1–2.' };
        if (s === 3) return { label:'Moderate', severity:'med', action:'Refer pulmonary rehabilitation (MRC ≥ 3).', detail:'NICE NG115: offer pulmonary rehab to functionally limited COPD.' };
        return        { label:'Severe', severity:'high', action:'Pulmonary rehab + review for LTOT assessment / specialist input.', detail:'Grade 4–5 — significant disability.' };
      },
      refs:[
        { label:'NICE NG115 COPD', url:'https://www.nice.org.uk/guidance/ng115' },
        { label:'Fletcher MRC scale', url:'https://www.primarycaresociety.com/' },
      ],
    },

    {
      id: 'cat',
      title: 'COPD Assessment Test (CAT)',
      category: 'Respiratory',
      description: 'Health-status impact of COPD (8 items, 0–40).',
      usefulFor: 'COPD review & response to treatment / rehab. ≥ 10 = significant symptom burden.',
      resultLabel: 'CAT', resultMax: 40,
      inputs: [
        { group:'Score each 0 (none) to 5 (worst):',
          id:'cat1', kind:'likert', label:'Cough', options:linrange() },
        { id:'cat2', kind:'likert', label:'Phlegm / mucus', options:linrange() },
        { id:'cat3', kind:'likert', label:'Chest tightness', options:linrange() },
        { id:'cat4', kind:'likert', label:'Breathlessness on stairs / hills', options:linrange() },
        { id:'cat5', kind:'likert', label:'Activity limitation at home', options:linrange() },
        { id:'cat6', kind:'likert', label:'Confidence leaving home', options:linrange() },
        { id:'cat7', kind:'likert', label:'Sleep', options:linrange() },
        { id:'cat8', kind:'likert', label:'Energy', options:linrange() },
      ],
      compute(v){ return ['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8'].reduce(function(s,k){ return s + Number(v[k]||0); }, 0); },
      interpret(s){
        if (s < 10) return { label:'Low impact',    severity:'low',  action:'Maintain therapy; review at next routine visit.', detail:'' };
        if (s <= 20) return { label:'Medium impact', severity:'med',  action:'Optimise inhalers + pulmonary rehab; check technique/adherence.', detail:'' };
        if (s <= 30) return { label:'High impact',   severity:'high', action:'Escalate therapy; rehab; review exacerbation plan.', detail:'' };
        return         { label:'Very high impact',   severity:'severe', action:'Specialist review; comprehensive management.', detail:'' };
      },
      refs:[
        { label:'NICE NG115 COPD', url:'https://www.nice.org.uk/guidance/ng115' },
        { label:'catestonline.org', url:'https://www.catestonline.org/' },
      ],
    },

    {
      id: 'rcp3',
      title: 'RCP 3 Questions (asthma control)',
      category: 'Respiratory',
      description: 'Quick asthma morbidity screen (3 yes/no).',
      usefulFor: 'Every asthma review. Any "yes" suggests suboptimal control — assess and step up.',
      resultLabel: 'RCP "yes" answers', resultMax: 3,
      inputs: [
        { id:'rcp_sleep',  kind:'check', label:'In the last week/month: difficulty sleeping due to asthma (incl. cough)?', points:1 },
        { id:'rcp_day',    kind:'check', label:'Usual asthma symptoms during the day (cough, wheeze, chest tightness, breathlessness)?', points:1 },
        { id:'rcp_activity', kind:'check', label:'Asthma interfering with usual activities (housework, work, school)?', points:1 },
      ],
      compute(v){ return Object.values(v).filter(Boolean).length; },
      interpret(s){
        if (s === 0) return { label:'Good control', severity:'low', action:'Continue current therapy; check inhaler technique + adherence.', detail:'All three "no" = good control this period.' };
        if (s === 1) return { label:'Suboptimal', severity:'med', action:'Review technique/adherence/triggers; consider stepping up.', detail:'Any "yes" indicates morbidity.' };
        return        { label:'Poor control', severity:'high', action:'Assess for exacerbation; optimise/step up therapy; written action plan.', detail:'Multiple positives — poorly controlled asthma.' };
      },
      refs:[
        { label:'NICE/BTS/SIGN NG245 Asthma', url:'https://www.nice.org.uk/guidance/ng245' },
        { label:'RCP Three Questions', url:'https://www.rcp.ac.uk/' },
      ],
    },

    {
      id: 'pack-years',
      title: 'Smoking pack-years',
      category: 'Respiratory',
      description: 'Cumulative tobacco exposure.',
      usefulFor: 'COPD / lung-cancer risk, targeted CT screening eligibility, documentation.',
      resultLabel: 'Pack-years', resultUnit:'pack-yrs',
      formula: '(cigarettes per day ÷ 20) × years smoked',
      inputs: [
        { id:'py_cigs',  kind:'number', label:'Cigarettes per day', unit:'/day', min:1, max:120, step:1 },
        { id:'py_years', kind:'number', label:'Years smoked', unit:'yrs', min:1, max:90, step:1 },
      ],
      compute(v){
        if (!v.py_cigs || !v.py_years) return null;
        return Math.round((v.py_cigs / 20) * v.py_years * 10) / 10;
      },
      interpret(s){
        if (s < 20) return { label:'Lower cumulative exposure', severity:'low', action:'Offer very brief advice + cessation support.', detail:'' };
        if (s < 30) return { label:'Significant exposure', severity:'med', action:'Cessation support; COPD risk — spirometry if symptomatic.', detail:'' };
        return        { label:'Heavy exposure', severity:'high', action:'Cessation support; consider targeted lung-health check / CT screening pathway where available.', detail:'≥ 30 pack-years is a common lung-cancer screening threshold.' };
      },
      refs:[
        { label:'NICE NG115 COPD', url:'https://www.nice.org.uk/guidance/ng115' },
        { label:'NHS Targeted Lung Health Checks', url:'https://www.england.nhs.uk/contact-us/privacy-notice/national-screening-programmes/lung-health-checks/' },
      ],
    },

    // ============================================
    // VTE
    // ============================================
    {
      id: 'perc',
      title: 'PERC rule (PE rule-out)',
      category: 'VTE',
      description: 'Rule-out criteria for PE in low pre-test probability.',
      usefulFor: 'When clinical gestalt is low-risk: if ALL 8 criteria are negative, PE is excluded without D-dimer.',
      resultLabel: 'PERC positive items', resultMax: 8,
      inputs: [
        { id:'perc_age',   kind:'check', label:'Age ≥ 50', points:1 },
        { id:'perc_hr',    kind:'check', label:'HR ≥ 100', points:1 },
        { id:'perc_spo2',  kind:'check', label:'SpO₂ < 95% on room air', points:1 },
        { id:'perc_haemo', kind:'check', label:'Haemoptysis', points:1 },
        { id:'perc_oest',  kind:'check', label:'Oestrogen use (COC / HRT)', points:1 },
        { id:'perc_dvt',   kind:'check', label:'Prior DVT / PE', points:1 },
        { id:'perc_surg',  kind:'check', label:'Recent surgery / trauma (≤ 4 weeks, needing GA)', points:1 },
        { id:'perc_leg',   kind:'check', label:'Unilateral leg swelling', points:1 },
      ],
      compute(v){ return Object.values(v).filter(Boolean).length; },
      interpret(s){
        if (s === 0) return { label:'PERC negative', severity:'low', action:'In a low-risk patient, PE is excluded — no D-dimer needed.', detail:'ALL 8 criteria absent + low clinical gestalt → < 2% PE risk.' };
        return        { label:'PERC positive', severity:'med', action:'Cannot exclude PE on PERC — proceed to Wells + D-dimer / imaging (NICE NG158).', detail:'One or more criteria present.' };
      },
      refs:[
        { label:'Kline et al. PERC 2004', url:'https://pubmed.ncbi.nlm.nih.gov/15304025/' },
        { label:'NICE NG158 VTE', url:'https://www.nice.org.uk/guidance/ng158' },
      ],
    },

    // ============================================
    // CARDIOVASCULAR (prescribing safety)
    // ============================================
    {
      id: 'qtc',
      title: 'QTc (Bazett)',
      category: 'Cardiovascular',
      description: 'Heart-rate-corrected QT interval.',
      usefulFor: 'Before/after QT-prolonging drugs (citalopram, escitalopram, antipsychotics, macrolides, methadone).',
      resultLabel: 'QTc', resultUnit:'ms',
      formula: 'QTc = QT / √(RR),  RR = 60 / HR (seconds)',
      inputs: [
        { id:'qtc_qt', kind:'number', label:'Measured QT interval', unit:'ms', min:200, max:800, step:1 },
        { id:'qtc_hr', kind:'number', label:'Heart rate', unit:'/min', min:30, max:200, step:1 },
        { id:'qtc_female', kind:'check', label:'Female (higher normal threshold)' },
      ],
      compute(v){
        if (!v.qtc_qt || !v.qtc_hr) return null;
        const rr = 60 / v.qtc_hr;
        return Math.round(v.qtc_qt / Math.sqrt(rr));
      },
      interpret(s, v){
        const f = !!v.qtc_female;
        const upper = f ? 470 : 450;
        if (s >= 500) return { label:'Markedly prolonged', severity:'severe', action:'High torsades risk — stop/avoid QT-prolonging drugs; correct K⁺/Mg²⁺; cardiology advice.', detail:'QTc ≥ 500 ms (or rise > 60 ms from baseline) is high-risk.' };
        if (s > upper) return { label:'Prolonged', severity:'high', action:'Review QT-prolonging drugs & electrolytes; avoid additive agents; repeat ECG.', detail:`Above the ${f?'female':'male'} upper limit (~${upper} ms).` };
        if (s >= 440) return { label:'Borderline', severity:'med', action:'Caution with QT-prolonging drugs; recheck after starting.', detail:'' };
        return         { label:'Normal', severity:'low', action:'No QTc concern.', detail:'' };
      },
      refs:[
        { label:'BNF — QT-interval prolongation', url:'https://bnf.nice.org.uk/' },
        { label:'MHRA citalopram/escitalopram QT', url:'https://www.gov.uk/drug-safety-update' },
      ],
    },

    // ============================================
    // DIABETES / ENDOCRINE
    // ============================================
    {
      id: 'hba1c-convert',
      title: 'HbA1c converter (IFCC ↔ DCCT)',
      category: 'Diabetes / endocrine',
      description: 'Convert HbA1c mmol/mol ↔ % and estimate average glucose.',
      usefulFor: 'Interpreting old/new units and explaining "average glucose" to patients.',
      resultLabel: 'HbA1c', resultUnit:'',
      formula: 'DCCT% = (IFCC ÷ 10.929) + 2.15 · eAG (mmol/L) = 1.59 × % − 2.59',
      inputs: [
        { id:'hb_ifcc', kind:'number', label:'HbA1c (IFCC)', unit:'mmol/mol', min:20, max:200, step:1 },
      ],
      compute(v){
        if (v.hb_ifcc == null) return null;
        const pct = (v.hb_ifcc / 10.929) + 2.15;
        const eag = 1.59 * pct - 2.59;
        return { display: pct.toFixed(1) + ' %  ·  eAG ' + eag.toFixed(1) + ' mmol/L', pct: pct, ifcc: v.hb_ifcc };
      },
      interpret(r){
        const i = r.ifcc;
        if (i < 42) return { label:'Normal / non-diabetic', severity:'low', action:'No diabetes (HbA1c < 42).', detail:'< 42 mmol/mol (< 6.0%).' };
        if (i < 48) return { label:'Pre-diabetes (high risk)', severity:'med', action:'Lifestyle + annual HbA1c; NHS Diabetes Prevention Programme.', detail:'42–47 mmol/mol (6.0–6.4%).' };
        if (i < 58) return { label:'Diabetes range', severity:'high', action:'Diagnose diabetes (with symptoms / repeat). Target often ≤ 48–53.', detail:'≥ 48 mmol/mol (≥ 6.5%).' };
        return        { label:'Above target', severity:'high', action:'Intensify glucose management per NG28.', detail:'≥ 58 mmol/mol (≥ 7.5%).' };
      },
      refs:[
        { label:'NICE NG28 Type 2 diabetes', url:'https://www.nice.org.uk/guidance/ng28' },
        { label:'IFCC–DCCT master equation', url:'https://www.ifcc.org/' },
      ],
    },

    {
      id: 'qdiabetes',
      title: 'QDiabetes (10-yr T2DM risk)',
      category: 'Diabetes / endocrine',
      description: 'Predicts 10-year risk of type 2 diabetes. Proprietary algorithm.',
      usefulFor: 'Risk-stratifying who needs HbA1c/fasting glucose & prevention.',
      kind: 'external',
      externalUrl: 'https://qdiabetes.org/',
      externalReason: 'QDiabetes uses a multi-variable algorithm (ethnicity, BMI, deprivation, steroids, antipsychotics, etc.). Use the official ClinRisk site.',
      refs:[
        { label:'qdiabetes.org', url:'https://qdiabetes.org/' },
        { label:'NICE PH38 / NG38 diabetes prevention', url:'https://www.nice.org.uk/guidance/ph38' },
      ],
    },

    // ============================================
    // RENAL / METABOLIC
    // ============================================
    {
      id: 'corrected-calcium',
      title: 'Corrected (adjusted) calcium',
      category: 'Renal / metabolic',
      description: 'Albumin-adjusted serum calcium.',
      usefulFor: 'Interpreting calcium with low/high albumin — hypercalcaemia work-up, myeloma, bone profile.',
      resultLabel: 'Corrected Ca²⁺', resultUnit:'mmol/L',
      formula: 'Corrected Ca = measured Ca + 0.02 × (40 − albumin g/L)',
      inputs: [
        { id:'cc_ca',  kind:'number', label:'Measured calcium', unit:'mmol/L', min:1, max:4, step:0.01 },
        { id:'cc_alb', kind:'number', label:'Albumin', unit:'g/L', min:10, max:60, step:1 },
      ],
      compute(v){
        if (v.cc_ca == null || v.cc_alb == null) return null;
        const corr = v.cc_ca + 0.02 * (40 - v.cc_alb);
        return Math.round(corr * 100) / 100;
      },
      interpret(s){
        if (s < 2.20) return { label:'Hypocalcaemia', severity:'med', action:'Check PTH, vitamin D, Mg²⁺, renal function. Symptomatic/<1.9 → urgent.', detail:'See hypocalcaemia pathway; ECG (QT) if low.' };
        if (s <= 2.60) return { label:'Normal', severity:'low', action:'Within reference range.', detail:'~2.20–2.60 mmol/L.' };
        if (s < 3.00) return { label:'Mild hypercalcaemia', severity:'high', action:'Recheck fasting + PTH; review drugs (thiazide, calcium/vit D, lithium).', detail:'NICE NG12: persistent raised calcium → consider myeloma screen.' };
        return         { label:'Significant hypercalcaemia', severity:'severe', action:'Corrected Ca ≥ 3.0 — urgent: IV saline, find cause (PTH, myeloma, malignancy); admit if ≥ 3.5 or symptomatic.', detail:'' };
      },
      refs:[
        { label:'NICE CKS Hypercalcaemia', url:'https://cks.nice.org.uk/topics/hypercalcaemia/' },
        { label:'NICE NG12 (myeloma)', url:'https://www.nice.org.uk/guidance/ng12' },
      ],
    },

    // ============================================
    // GASTRO / HEPATOLOGY
    // ============================================
    {
      id: 'fib4',
      title: 'FIB-4 (liver fibrosis)',
      category: 'Gastro / hepatology',
      description: 'Non-invasive fibrosis estimate in NAFLD / chronic liver disease.',
      usefulFor: 'Risk-stratifying fatty liver / abnormal LFTs — who needs ELF / fibroscan / hepatology.',
      resultLabel: 'FIB-4', resultUnit:'',
      formula: '(age × AST) / (platelets ×10⁹/L × √ALT)',
      inputs: [
        { id:'fib_age', kind:'number', label:'Age', unit:'yrs', min:18, max:100, step:1 },
        { id:'fib_ast', kind:'number', label:'AST', unit:'U/L', min:5, max:1000, step:1 },
        { id:'fib_alt', kind:'number', label:'ALT', unit:'U/L', min:5, max:1000, step:1 },
        { id:'fib_plt', kind:'number', label:'Platelets', unit:'×10⁹/L', min:10, max:600, step:1 },
      ],
      compute(v){
        if (!v.fib_age || !v.fib_ast || !v.fib_alt || !v.fib_plt) return null;
        const val = (v.fib_age * v.fib_ast) / (v.fib_plt * Math.sqrt(v.fib_alt));
        return Math.round(val * 100) / 100;
      },
      interpret(s, v){
        const old = v.fib_age >= 65;
        const low = old ? 2.0 : 1.30;
        if (s < low) return { label:'Low risk advanced fibrosis', severity:'low', action:'Reassure; manage metabolic risk; recheck periodically.', detail:`Below ${low} — advanced fibrosis unlikely.` };
        if (s <= 2.67) return { label:'Indeterminate', severity:'med', action:'Next-line test: ELF blood test or transient elastography (FibroScan).', detail:'1.30–2.67 — needs further assessment.' };
        return         { label:'High risk advanced fibrosis', severity:'high', action:'Refer hepatology for assessment of cirrhosis.', detail:'> 2.67 — advanced fibrosis likely.' };
      },
      refs:[
        { label:'NICE NG49 NAFLD', url:'https://www.nice.org.uk/guidance/ng49' },
        { label:'Sterling FIB-4 2006', url:'https://pubmed.ncbi.nlm.nih.gov/16729309/' },
      ],
    },

    // ============================================
    // UROLOGY
    // ============================================
    {
      id: 'psa-threshold',
      title: 'PSA age-specific threshold',
      category: 'Urology',
      description: 'Age-referenced PSA cut-offs for suspected prostate cancer.',
      usefulFor: 'NICE NG12 — refer on a suspected cancer pathway if PSA above the age-specific range.',
      resultLabel: 'PSA vs threshold', resultUnit:'',
      inputs: [
        { id:'psa_age', kind:'select', label:'Age band',
          options:[
            { value:45, label:'40–49' },
            { value:55, label:'50–59' },
            { value:65, label:'60–69' },
            { value:75, label:'≥ 70' },
          ] },
        { id:'psa_val', kind:'number', label:'PSA', unit:'µg/L', min:0, max:200, step:0.1 },
      ],
      compute(v){
        if (v.psa_age == null) return null;
        const map = { 45:2.5, 55:3.5, 65:4.5, 75:6.5 };
        const thr = map[v.psa_age];
        const txt = 'Threshold ' + thr.toFixed(1) + ' µg/L' + (v.psa_val != null ? (' · PSA ' + v.psa_val) : '');
        return { display: txt, thr: thr, val: v.psa_val };
      },
      interpret(r){
        if (r.val == null) return { label:'Enter PSA to compare', severity:'neutral', action:'Use age-specific threshold (PCRMP). Always examine the prostate (DRE).', detail:'' };
        if (r.val > r.thr) return { label:'Above age-specific range', severity:'high', action:'NICE NG12 — refer on suspected prostate cancer pathway (2-week-wait).', detail:'Also refer if DRE feels malignant regardless of PSA.' };
        return { label:'Within age range', severity:'low', action:'Reassure; safety-net. Refer anyway if abnormal DRE or rising PSA.', detail:'Repeat/track if symptomatic.' };
      },
      refs:[
        { label:'NICE NG12 Suspected cancer', url:'https://www.nice.org.uk/guidance/ng12' },
        { label:'PCRMP age-specific PSA', url:'https://www.gov.uk/government/publications/prostate-cancer-risk-management-programme-psa-test-benefits-and-risks' },
      ],
    }

  );

  // local helper — 0..5 likert options for CAT
  function linrange(){
    return [ {value:0,label:'0'},{value:1,label:'1'},{value:2,label:'2'},{value:3,label:'3'},{value:4,label:'4'},{value:5,label:'5'} ];
  }
})();
