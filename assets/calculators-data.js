/* ============================================
   Reasoning GP — Medical Calculator Data
   Each calculator: id, title, category, description,
   usefulFor, inputs, compute, interpret, resultLabel,
   resultUnit, resultMax, refs, [formula], [kind:external].
   ============================================ */

window.RGP_CALCULATORS = [

  // ============================================
  // CARDIOVASCULAR
  // ============================================
  {
    id: 'chads-vasc',
    title: 'CHA₂DS₂-VASc',
    category: 'Cardiovascular',
    description: 'Stroke risk in non-valvular AF — decides anticoagulation.',
    usefulFor: 'Newly diagnosed AF, AF review. Decides if DOAC indicated.',
    resultLabel: 'CHA₂DS₂-VASc score', resultMax: 9,
    inputs: [
      { id:'chf',      kind:'check', label:'Congestive heart failure / LV dysfunction', points:1 },
      { id:'htn',      kind:'check', label:'Hypertension (history or treated)', points:1 },
      { id:'age75',    kind:'check', label:'Age ≥ 75', points:2, note:'Adds 2 — significant risk factor' },
      { id:'dm',       kind:'check', label:'Diabetes mellitus', points:1 },
      { id:'stroke',   kind:'check', label:'Previous stroke / TIA / thromboembolism', points:2, note:'Adds 2' },
      { id:'vasc',     kind:'check', label:'Vascular disease (MI / PVD / aortic plaque)', points:1 },
      { id:'age6574',  kind:'check', label:'Age 65–74', points:1, note:'Mutually exclusive with age ≥75' },
      { id:'female',   kind:'check', label:'Female sex', points:1, note:'Only counts if ≥1 other risk factor' },
    ],
    compute(v){
      let s = 0;
      if (v.chf) s += 1;
      if (v.htn) s += 1;
      if (v.age75) s += 2;
      else if (v.age6574) s += 1;
      if (v.dm) s += 1;
      if (v.stroke) s += 2;
      if (v.vasc) s += 1;
      // Female sex only adds if at least one other point exists
      if (v.female && s > 0) s += 1;
      return s;
    },
    interpret(s, v){
      const isMale = !v.female;
      if (s === 0)            return { label:'Very low risk', severity:'low',  action:'No anticoagulation. Stroke risk ~0.2%/yr.', detail:'Reassess annually as new risk factors emerge.' };
      if (s === 1 && isMale)  return { label:'Low risk',      severity:'low',  action:'Consider anticoagulation. Discuss with patient.', detail:'Annual stroke risk ~0.6%. Most guidelines (NICE NG196) recommend offering DOAC unless contraindications.' };
      if (s === 1 && !isMale) return { label:'Low risk',      severity:'low',  action:'No anticoagulation (sex alone insufficient).', detail:'Score of 1 from female sex alone does not mandate anticoagulation.' };
      if (s === 2)            return { label:'Moderate-high', severity:'med',  action:'Anticoagulation recommended (DOAC 1st line).', detail:'Annual stroke risk ~2%. NICE NG196: offer DOAC (apixaban, rivaroxaban, edoxaban, dabigatran).' };
      if (s >= 3 && s <= 5)   return { label:'High risk',     severity:'high', action:'Anticoagulation strongly recommended.', detail:`Annual stroke risk rises with score (3 → ~3%; 5 → ~7%). Calculate HAS-BLED to inform — not to refuse — anticoagulation.` };
      return                       { label:'Very high risk',  severity:'severe', action:'Anticoagulation indicated unless absolute contraindication.', detail:'Annual stroke risk ≥9%. Modify bleeding risk factors. Anticoagulant choice — see NICE NG196.' };
    },
    refs:[
      { label:'NICE NG196 Atrial fibrillation', url:'https://www.nice.org.uk/guidance/ng196' },
      { label:'ESC AF 2024', url:'https://www.escardio.org/Guidelines' },
    ],
  },

  {
    id: 'has-bled',
    title: 'HAS-BLED',
    category: 'Cardiovascular',
    description: 'Major bleeding risk on anticoagulation for AF.',
    usefulFor: 'Identifying modifiable bleeding risk factors — does NOT mean withholding anticoagulation.',
    resultLabel: 'HAS-BLED score', resultMax: 9,
    inputs: [
      { id:'h_htn',  kind:'check', label:'Hypertension uncontrolled (SBP > 160)', points:1 },
      { id:'a_renal',kind:'check', label:'Abnormal renal function (Cr > 200 / dialysis / transplant)', points:1 },
      { id:'a_liver',kind:'check', label:'Abnormal liver function (cirrhosis / bili > 2× / AST/ALT > 3×)', points:1 },
      { id:'s_stroke',kind:'check',label:'Previous stroke', points:1 },
      { id:'b_bleed',kind:'check', label:'Major bleeding history / predisposition', points:1 },
      { id:'l_labile',kind:'check',label:'Labile INR (warfarin TTR < 60%)', points:1 },
      { id:'e_age',  kind:'check', label:'Elderly (age > 65)', points:1 },
      { id:'d_drugs',kind:'check', label:'Concomitant antiplatelet / NSAID', points:1 },
      { id:'d_alcohol',kind:'check',label:'Alcohol > 8 units / week', points:1 },
    ],
    compute(v){ return Object.entries(v).filter(([k,val]) => val).length; },
    interpret(s){
      if (s <= 2) return { label:'Low bleeding risk', severity:'low',  action:'Standard anticoagulation appropriate.', detail:'Annual major bleed risk ~1–3%.' };
      if (s === 3) return { label:'Moderate risk',   severity:'med',  action:'Anticoagulate + modify risk factors.', detail:'Address: BP control, reduce alcohol, stop unnecessary NSAID/antiplatelet, monitor labs.' };
      return        { label:'High risk',             severity:'high', action:'Anticoagulate, modify all reversible factors, review 3-monthly.', detail:'A high HAS-BLED is NOT a reason to withhold anticoagulation — it identifies what to fix (NICE NG196).' };
    },
    refs:[
      { label:'NICE NG196 Atrial fibrillation', url:'https://www.nice.org.uk/guidance/ng196' },
      { label:'Pisters et al. 2010 (original)', url:'https://pubmed.ncbi.nlm.nih.gov/20299623/' },
    ],
  },

  {
    id: 'orbit',
    title: 'ORBIT',
    category: 'Cardiovascular',
    description: 'Alternative bleeding risk score for AF — may outperform HAS-BLED.',
    usefulFor: 'Bleeding risk in AF (alternative to HAS-BLED).',
    resultLabel: 'ORBIT score', resultMax: 7,
    inputs: [
      { id:'orb_hb',     kind:'check', label:'Hb < 130 (M) / < 120 (F) OR Hct < 40%/36%', points:2 },
      { id:'orb_age',    kind:'check', label:'Age > 74', points:1 },
      { id:'orb_bleed',  kind:'check', label:'Bleeding history (any prior major bleed)', points:2 },
      { id:'orb_egfr',   kind:'check', label:'eGFR < 60', points:1 },
      { id:'orb_antipl', kind:'check', label:'Concomitant antiplatelet treatment', points:1 },
    ],
    compute(v){
      let s = 0;
      if (v.orb_hb) s += 2;
      if (v.orb_age) s += 1;
      if (v.orb_bleed) s += 2;
      if (v.orb_egfr) s += 1;
      if (v.orb_antipl) s += 1;
      return s;
    },
    interpret(s){
      if (s <= 2) return { label:'Low risk',      severity:'low',  action:'Major bleed ~ 2.4%/yr.' };
      if (s === 3)return { label:'Medium risk',   severity:'med',  action:'Major bleed ~ 4.7%/yr — modify factors.' };
      return         { label:'High risk',         severity:'high', action:'Major bleed ~ 8.1%/yr — review need + modify.' };
    },
    refs:[{ label:'O\u2019Brien et al. ORBIT 2015', url:'https://academic.oup.com/eurheartj/article/36/46/3258/2293252' }],
  },

  {
    id: 'qrisk3',
    title: 'QRISK3 (10-year CV risk)',
    category: 'Cardiovascular',
    description: 'Predicts 10-year risk of MI / stroke. Proprietary algorithm.',
    usefulFor: 'Statin decisions (NICE NG181: offer statin if ≥10%).',
    kind: 'external',
    externalUrl: 'https://qrisk.org/',
    externalReason: 'QRISK3 uses a complex, regularly-updated algorithm (BMI, ethnicity, deprivation, atypical antipsychotics, SLE, etc.). Use the official ClinRisk site for the score — primary-care GP systems integrate this directly.',
    refs:[
      { label:'qrisk.org', url:'https://qrisk.org/' },
      { label:'NICE NG181 CVD risk', url:'https://www.nice.org.uk/guidance/ng181' },
    ],
  },

  {
    id: 'abcd2',
    title: 'ABCD₂ (TIA stroke risk)',
    category: 'Cardiovascular',
    description: 'Risk of stroke after TIA within 7 days.',
    usefulFor: 'Historical — note: NICE NG128 NO LONGER recommends ABCD² for triage. ALL suspected TIA need same-day specialist assessment. Score is for educational context only.',
    resultLabel: 'ABCD² score', resultMax: 7,
    inputs: [
      { id:'a_age',     kind:'check',  label:'Age ≥ 60', points:1 },
      { id:'b_bp',      kind:'check',  label:'BP ≥ 140/90 at presentation', points:1 },
      { id:'c_clinical',kind:'select', label:'Clinical features',
        options:[ { value:0, label:'Other', points:0 }, { value:1, label:'Speech disturbance only', points:1 }, { value:2, label:'Unilateral weakness', points:2 } ] },
      { id:'d_duration',kind:'select', label:'Duration',
        options:[ { value:0, label:'< 10 min', points:0 }, { value:1, label:'10–59 min', points:1 }, { value:2, label:'≥ 60 min', points:2 } ] },
      { id:'d_dm',      kind:'check',  label:'Diabetes mellitus', points:1 },
    ],
    compute(v){
      let s = 0;
      if (v.a_age) s += 1;
      if (v.b_bp) s += 1;
      s += Number(v.c_clinical || 0);
      s += Number(v.d_duration || 0);
      if (v.d_dm) s += 1;
      return s;
    },
    interpret(s){
      const action = '⚠ Regardless of score: NICE NG128 — ALL suspected TIA need specialist assessment within 24 h.';
      if (s <= 3) return { label:'"Lower" risk', severity:'med', action, detail:'Historical 2-day stroke risk ~1%. Note ABCD² is no longer recommended for triage — every TIA is same-day TIA clinic.' };
      if (s <= 5) return { label:'"Moderate" risk', severity:'high', action, detail:'Historical 2-day stroke risk ~4%.' };
      return         { label:'"High" risk', severity:'severe', action, detail:'Historical 2-day stroke risk ~8%.' };
    },
    refs:[
      { label:'NICE NG128 Stroke and TIA', url:'https://www.nice.org.uk/guidance/ng128' },
      { label:'Johnston et al. Lancet 2007', url:'https://pubmed.ncbi.nlm.nih.gov/17258668/' },
    ],
  },

  // ============================================
  // VTE — Wells scores
  // ============================================
  {
    id: 'wells-pe',
    title: "Wells' score — PE",
    category: 'VTE',
    description: 'Pre-test probability of pulmonary embolism.',
    usefulFor: 'PE workup. Score ≤ 4 → D-dimer; > 4 → CTPA (NICE NG158).',
    resultLabel: "Wells' (PE) score", resultMax: 12.5,
    inputs: [
      { id:'wp_signs', kind:'check', label:'Clinical signs / symptoms of DVT', points:3 },
      { id:'wp_alt',   kind:'check', label:'PE as likely as or more likely than alternative diagnosis', points:3 },
      { id:'wp_hr',    kind:'check', label:'HR > 100/min', points:1.5 },
      { id:'wp_immob', kind:'check', label:'Immobilisation ≥ 3 days OR surgery in last 4 weeks', points:1.5 },
      { id:'wp_prev',  kind:'check', label:'Previous DVT / PE', points:1.5 },
      { id:'wp_hae',   kind:'check', label:'Haemoptysis', points:1 },
      { id:'wp_cancer',kind:'check', label:'Active malignancy (treatment within 6 months / palliative)', points:1 },
    ],
    compute(v){
      let s = 0;
      if (v.wp_signs) s += 3;
      if (v.wp_alt) s += 3;
      if (v.wp_hr) s += 1.5;
      if (v.wp_immob) s += 1.5;
      if (v.wp_prev) s += 1.5;
      if (v.wp_hae) s += 1;
      if (v.wp_cancer) s += 1;
      return s;
    },
    interpret(s){
      if (s <= 4) return { label:'PE unlikely', severity:'low',
        action:'D-dimer (high-sensitivity).', detail:'If D-dimer negative → PE excluded. If positive → CTPA (or V/Q if contraindication). NICE NG158.' };
      return         { label:'PE likely', severity:'high',
        action:'CTPA directly (do NOT delay for D-dimer).', detail:'If CTPA delayed > 1 h → start interim anticoagulation (DOAC) per NICE NG158.' };
    },
    refs:[
      { label:'NICE NG158 VTE', url:'https://www.nice.org.uk/guidance/ng158' },
      { label:'Wells et al. 2000', url:'https://pubmed.ncbi.nlm.nih.gov/10744147/' },
    ],
  },

  {
    id: 'wells-dvt',
    title: "Wells' score — DVT",
    category: 'VTE',
    description: 'Pre-test probability of deep vein thrombosis.',
    usefulFor: 'Suspected DVT. Score ≥ 2 → DVT likely (USS); < 2 → D-dimer.',
    resultLabel: "Wells' (DVT) score", resultMax: 8,
    inputs: [
      { id:'wd_cancer', kind:'check', label:'Active cancer (within 6 months / palliative)', points:1 },
      { id:'wd_paresis',kind:'check', label:'Paralysis, paresis, or recent leg plaster', points:1 },
      { id:'wd_immob',  kind:'check', label:'Bedridden ≥ 3 days OR major surgery within 12 weeks', points:1 },
      { id:'wd_tender', kind:'check', label:'Localised tenderness along deep venous system', points:1 },
      { id:'wd_whole',  kind:'check', label:'Whole leg swollen', points:1 },
      { id:'wd_calf3cm',kind:'check', label:'Calf swelling > 3 cm vs other side', points:1 },
      { id:'wd_pitting',kind:'check', label:'Pitting oedema (greater in symptomatic leg)', points:1 },
      { id:'wd_collat', kind:'check', label:'Collateral non-varicose superficial veins', points:1 },
      { id:'wd_prev',   kind:'check', label:'Previously documented DVT', points:1 },
      { id:'wd_alt',    kind:'check', label:'Alternative diagnosis at least as likely', points:-2, note:'Subtracts 2 — e.g. cellulitis, Baker cyst' },
    ],
    compute(v){
      let s = 0;
      Object.keys(v).forEach(k => {
        if (k === 'wd_alt' && v[k]) s -= 2;
        else if (v[k]) s += 1;
      });
      return s;
    },
    interpret(s){
      if (s >= 2) return { label:'DVT likely',  severity:'high',
        action:'Proximal-leg USS within 4 h. If delayed → interim therapeutic DOAC + D-dimer + USS within 24 h.',
        detail:'NICE NG158 pathway.' };
      return         { label:'DVT unlikely', severity:'low',
        action:'D-dimer (high-sensitivity). If positive → USS within 4 h. If negative → DVT excluded.',
        detail:'NICE NG158.' };
    },
    refs:[
      { label:'NICE NG158 VTE', url:'https://www.nice.org.uk/guidance/ng158' },
      { label:'Wells et al. 2003', url:'https://pubmed.ncbi.nlm.nih.gov/14507948/' },
    ],
  },

  // ============================================
  // RESPIRATORY
  // ============================================
  {
    id: 'crb-65',
    title: 'CRB-65',
    category: 'Respiratory',
    description: 'Community-acquired pneumonia severity for primary care.',
    usefulFor: 'Decides home vs hospital for CAP (NICE NG138). No bloods needed.',
    resultLabel: 'CRB-65', resultMax: 4,
    inputs: [
      { id:'crb_c', kind:'check', label:'Confusion — AMT ≤ 8 or new disorientation', points:1 },
      { id:'crb_r', kind:'check', label:'Respiratory rate ≥ 30 / min', points:1 },
      { id:'crb_b', kind:'check', label:'BP — SBP < 90 OR DBP ≤ 60', points:1 },
      { id:'crb_65',kind:'check', label:'Age ≥ 65', points:1 },
    ],
    compute(v){ return Object.values(v).filter(Boolean).length; },
    interpret(s){
      if (s === 0) return { label:'Low risk',       severity:'low',  action:'Manage in community — oral amoxicillin.', detail:'30-day mortality < 1%.' };
      if (s <= 2)  return { label:'Intermediate',   severity:'med',  action:'Consider hospital — assess social factors, hypoxia, comorbidities.', detail:'30-day mortality ~8%.' };
      return          { label:'High risk',          severity:'severe', action:'Same-day hospital admission. Urgent treatment.', detail:'30-day mortality ≥ 31%.' };
    },
    refs:[
      { label:'NICE NG138 Pneumonia', url:'https://www.nice.org.uk/guidance/ng138' },
      { label:'BTS CAP 2009', url:'https://www.brit-thoracic.org.uk/' },
    ],
  },

  {
    id: 'feverpain',
    title: 'FeverPAIN (sore throat)',
    category: 'Respiratory',
    description: 'Likelihood of streptococcal sore throat — guides antibiotics.',
    usefulFor: 'Sore throat without red-flag features. Decides immediate vs delayed vs no antibiotic.',
    resultLabel: 'FeverPAIN score', resultMax: 5,
    inputs: [
      { id:'fp_fever',  kind:'check', label:'Fever in last 24 h', points:1 },
      { id:'fp_pus',    kind:'check', label:'Purulence (tonsils / pharynx)', points:1 },
      { id:'fp_attend', kind:'check', label:'Attended rapidly (within 3 days of onset)', points:1 },
      { id:'fp_inflam', kind:'check', label:'Severely inflamed tonsils', points:1 },
      { id:'fp_nocough',kind:'check', label:'No cough or coryza', points:1 },
    ],
    compute(v){ return Object.values(v).filter(Boolean).length; },
    interpret(s){
      if (s <= 1) return { label:'No antibiotic',        severity:'low',  action:'Self-care advice. Likely viral.', detail:'Strep risk ~13–18%. Safety-net + analgesia.' };
      if (s <= 3) return { label:'Backup antibiotic',    severity:'med',  action:'Delayed prescription (if no improvement at 3–5 days).', detail:'Strep risk ~34–58%. Phenoxymethylpenicillin 500 mg QDS × 10d (or clarithromycin 500 mg BD × 5d if allergic).' };
      return         { label:'Immediate antibiotic',     severity:'high', action:'Phenoxymethylpenicillin 500 mg QDS × 10 days.', detail:'Strep risk ~62–65%. Macrolide if pen-allergic.' };
    },
    refs:[
      { label:'NICE NG84 Sore throat', url:'https://www.nice.org.uk/guidance/ng84' },
      { label:'Little et al. 2013', url:'https://pubmed.ncbi.nlm.nih.gov/24144122/' },
    ],
  },

  {
    id: 'centor',
    title: 'Centor (sore throat)',
    category: 'Respiratory',
    description: 'Alternative streptococcal probability score.',
    usefulFor: 'Acute pharyngitis — alternative to FeverPAIN. NICE prefers FeverPAIN.',
    resultLabel: 'Centor score', resultMax: 4,
    inputs: [
      { id:'cn_exudate',kind:'check', label:'Tonsillar exudate', points:1 },
      { id:'cn_nodes',  kind:'check', label:'Tender anterior cervical lymphadenopathy', points:1 },
      { id:'cn_fever',  kind:'check', label:'Fever > 38°C (or history of)', points:1 },
      { id:'cn_nocough',kind:'check', label:'Absence of cough', points:1 },
    ],
    compute(v){ return Object.values(v).filter(Boolean).length; },
    interpret(s){
      if (s <= 1) return { label:'Low probability',  severity:'low',  action:'No antibiotic.', detail:'Strep risk ~2–10%. Self-care.' };
      if (s <= 2) return { label:'Moderate',         severity:'med',  action:'Delayed antibiotic if symptoms worsen.', detail:'Strep risk ~10–18%.' };
      return         { label:'High probability',     severity:'high', action:'Empirical antibiotic.', detail:'Strep risk ~38–63%. Phenoxymethylpenicillin 500 mg QDS × 10d.' };
    },
    refs:[
      { label:'NICE CKS Sore throat', url:'https://cks.nice.org.uk/topics/sore-throat-acute/' },
    ],
  },

  // ============================================
  // ACUTE / SEPSIS
  // ============================================
  {
    id: 'news2',
    title: 'NEWS2',
    category: 'Acute / sepsis',
    description: 'Aggregate physiological score for acute illness severity.',
    usefulFor: 'Telephone triage, home visits, walk-ins — sepsis recognition, escalation decisions.',
    resultLabel: 'NEWS2', resultMax: 20,
    inputs: [
      { group:'Vitals', id:'n_rr',   kind:'number', label:'Respiratory rate', unit:'/min', min:0, max:80, step:1 },
      { group:'Vitals', id:'n_spo2', kind:'number', label:'SpO\u2082', unit:'%', min:0, max:100, step:1 },
      { group:'Vitals', id:'n_o2',   kind:'check',  label:'On supplemental oxygen', note:'+2 points' },
      { group:'Vitals', id:'n_sbp',  kind:'number', label:'Systolic BP', unit:'mmHg', min:0, max:300, step:1 },
      { group:'Vitals', id:'n_hr',   kind:'number', label:'Heart rate', unit:'/min', min:0, max:300, step:1 },
      { group:'Vitals', id:'n_temp', kind:'number', label:'Temperature', unit:'\u00b0C', min:30, max:43, step:0.1 },
      { group:'Vitals', id:'n_consc',kind:'select', label:'Consciousness (ACVPU)',
        options:[ { value:0, label:'A \u2014 Alert' }, { value:3, label:'C/V/P/U \u2014 New confusion or worse' } ] },
    ],
    compute(v){
      let s = 0;
      const rr = v.n_rr;
      if (rr != null){
        if (rr <= 8 || rr >= 25) s += 3;
        else if (rr >= 21) s += 2;
        else if (rr >= 9 && rr <= 11) s += 1;
      }
      const spo2 = v.n_spo2;
      if (spo2 != null){
        if (spo2 <= 91) s += 3;
        else if (spo2 <= 93) s += 2;
        else if (spo2 <= 95) s += 1;
      }
      if (v.n_o2) s += 2;
      const sbp = v.n_sbp;
      if (sbp != null){
        if (sbp <= 90 || sbp >= 220) s += 3;
        else if (sbp <= 100) s += 2;
        else if (sbp <= 110) s += 1;
      }
      const hr = v.n_hr;
      if (hr != null){
        if (hr <= 40 || hr >= 131) s += 3;
        else if (hr >= 111) s += 2;
        else if (hr <= 50 || hr >= 91) s += 1;
      }
      const t = v.n_temp;
      if (t != null){
        if (t <= 35.0) s += 3;
        else if (t >= 39.1) s += 2;
        else if ((t >= 35.1 && t <= 36.0) || (t >= 38.1 && t <= 39.0)) s += 1;
      }
      s += Number(v.n_consc || 0);
      return s;
    },
    interpret(s, v){
      const single3 = (v.n_rr != null && (v.n_rr <= 8 || v.n_rr >= 25))
        || (v.n_spo2 != null && v.n_spo2 <= 91)
        || (v.n_sbp != null && (v.n_sbp <= 90 || v.n_sbp >= 220))
        || (v.n_hr != null && (v.n_hr <= 40 || v.n_hr >= 131))
        || (v.n_temp != null && (v.n_temp <= 35.0))
        || (Number(v.n_consc || 0) >= 3);

      if (s === 0)              return { label:'Low',       severity:'low',     action:'Routine monitoring.', detail:'12-hourly observations.' };
      if (s <= 4 && !single3)   return { label:'Low\u2013medium', severity:'med', action:'Increase observations + nurse / GP review.', detail:'4\u20136 hourly NEWS2.' };
      if (s <= 4 && single3)    return { label:'Single-parameter red', severity:'high', action:'Urgent clinician review.', detail:'Even with total \u2264 4, a single parameter scoring 3 triggers escalation per RCP guidance.' };
      if (s <= 6)               return { label:'Medium',    severity:'high',    action:'Urgent clinician review within 1 h.', detail:'Hourly observations. Consider sepsis pathway.' };
      return                          { label:'High',       severity:'severe',  action:'\u26a1 Emergency response \u2014 999 / blue-light admission.', detail:'Consider sepsis. Continuous monitoring. Senior clinician review.' };
    },
    refs:[
      { label:'RCP NEWS2', url:'https://www.rcp.ac.uk/improving-care/resources/national-early-warning-score-news-2/' },
      { label:'NICE NG51 Sepsis', url:'https://www.nice.org.uk/guidance/ng51' },
    ],
  },

  // ============================================
  // MENTAL HEALTH
  // ============================================
  {
    id: 'phq9',
    title: 'PHQ-9 (depression)',
    category: 'Mental health',
    description: 'Depression severity over the last 2 weeks (9 items, 0\u201327).',
    usefulFor: 'New depression diagnosis, monitoring response. NICE NG222 stepped care.',
    resultLabel: 'PHQ-9', resultMax: 27,
    inputs: [
      { group:'Over the last 2 weeks, how often have you been bothered by:', id:'p1', kind:'likert', label:'1. Little interest or pleasure in doing things' },
      { id:'p2', kind:'likert', label:'2. Feeling down, depressed, or hopeless' },
      { id:'p3', kind:'likert', label:'3. Trouble falling/staying asleep, or sleeping too much' },
      { id:'p4', kind:'likert', label:'4. Feeling tired or having little energy' },
      { id:'p5', kind:'likert', label:'5. Poor appetite or overeating' },
      { id:'p6', kind:'likert', label:'6. Feeling bad about yourself \u2014 failure or letting family down' },
      { id:'p7', kind:'likert', label:'7. Trouble concentrating' },
      { id:'p8', kind:'likert', label:'8. Moving / speaking slowly, or being fidgety / restless' },
      { id:'p9', kind:'likert', label:'9. Thoughts you would be better off dead or hurting yourself' },
    ],
    compute(v){
      return ['p1','p2','p3','p4','p5','p6','p7','p8','p9'].reduce(function(s,k){ return s + Number(v[k]||0); }, 0);
    },
    interpret(s, v){
      const suicide = Number(v.p9 || 0);
      const suicideNote = suicide > 0 ? ' \u26a0 Item 9 (suicidal ideation) is positive \u2014 assess risk regardless of total score.' : '';
      if (s <= 4)  return { label:'Minimal',           severity:'low',     action:'No depression treatment.', detail:'Reassess if symptoms emerge.' + suicideNote };
      if (s <= 9)  return { label:'Mild',              severity:'med',     action:'Active monitoring; low-intensity psychological intervention (NICE NG222).', detail:'Self-help, sleep hygiene, behavioural activation.' + suicideNote };
      if (s <= 14) return { label:'Moderate',          severity:'high',    action:'High-intensity psychological + consider antidepressant.', detail:'SSRI (sertraline / citalopram) + therapy (CBT or BA).' + suicideNote };
      if (s <= 19) return { label:'Moderately severe', severity:'high',    action:'Antidepressant + high-intensity psychological intervention.', detail:'Same-week review; consider MH team referral.' + suicideNote };
      return            { label:'Severe',              severity:'severe',  action:'Urgent intervention \u2014 antidepressant + CMHT / urgent psychiatric review.', detail:'Same-day MH review if active risk.' + suicideNote };
    },
    refs:[
      { label:'NICE NG222 Depression', url:'https://www.nice.org.uk/guidance/ng222' },
      { label:'PHQ-9 (Spitzer 2001)', url:'https://pubmed.ncbi.nlm.nih.gov/11556941/' },
    ],
  },

  {
    id: 'gad7',
    title: 'GAD-7 (anxiety)',
    category: 'Mental health',
    description: 'Generalised anxiety severity over the last 2 weeks (7 items, 0\u201321).',
    usefulFor: 'Anxiety diagnosis & monitoring. NICE NG113 stepped care.',
    resultLabel: 'GAD-7', resultMax: 21,
    inputs: [
      { group:'Over the last 2 weeks, how often have you been bothered by:', id:'g1', kind:'likert', label:'1. Feeling nervous, anxious or on edge' },
      { id:'g2', kind:'likert', label:'2. Not being able to stop or control worrying' },
      { id:'g3', kind:'likert', label:'3. Worrying too much about different things' },
      { id:'g4', kind:'likert', label:'4. Trouble relaxing' },
      { id:'g5', kind:'likert', label:'5. Being so restless that it is hard to sit still' },
      { id:'g6', kind:'likert', label:'6. Becoming easily annoyed or irritable' },
      { id:'g7', kind:'likert', label:'7. Feeling afraid as if something awful might happen' },
    ],
    compute(v){
      return ['g1','g2','g3','g4','g5','g6','g7'].reduce(function(s,k){ return s + Number(v[k]||0); }, 0);
    },
    interpret(s){
      if (s <= 4)  return { label:'Minimal',  severity:'low',    action:'No specific intervention.', detail:'' };
      if (s <= 9)  return { label:'Mild',     severity:'med',    action:'Step 2 \u2014 guided self-help / psychoeducation.', detail:'IAPT referral, low-intensity psychological.' };
      if (s <= 14) return { label:'Moderate', severity:'high',   action:'Step 3 \u2014 high-intensity CBT or pharmacological (SSRI).', detail:'Sertraline first-line; review at 4\u20136 wks.' };
      return            { label:'Severe',     severity:'severe', action:'Step 3+ \u2014 pharmacological + high-intensity CBT; specialist if no response.', detail:'Consider MH referral. Assess function and risk.' };
    },
    refs:[
      { label:'NICE NG113 Generalised anxiety', url:'https://www.nice.org.uk/guidance/cg113' },
      { label:'GAD-7 (Spitzer 2006)', url:'https://pubmed.ncbi.nlm.nih.gov/16717171/' },
    ],
  },

  {
    id: 'audit-c',
    title: 'AUDIT-C (alcohol screen)',
    category: 'Mental health',
    description: 'Brief alcohol-use screen (3 items, 0\u201312).',
    usefulFor: 'Routine screening. Positive \u2192 full AUDIT-10.',
    resultLabel: 'AUDIT-C', resultMax: 12,
    inputs: [
      { id:'ac1', kind:'select', label:'1. How often do you have a drink containing alcohol?',
        options:[ { value:0, label:'Never' }, { value:1, label:'Monthly or less' }, { value:2, label:'2\u20134 / month' }, { value:3, label:'2\u20133 / week' }, { value:4, label:'4+ / week' } ] },
      { id:'ac2', kind:'select', label:'2. How many drinks on a typical day when you are drinking?',
        options:[ { value:0, label:'1\u20132' }, { value:1, label:'3\u20134' }, { value:2, label:'5\u20136' }, { value:3, label:'7\u20139' }, { value:4, label:'10+' } ] },
      { id:'ac3', kind:'select', label:'3. How often have you had 6+ drinks on one occasion?',
        options:[ { value:0, label:'Never' }, { value:1, label:'Less than monthly' }, { value:2, label:'Monthly' }, { value:3, label:'Weekly' }, { value:4, label:'Daily / almost daily' } ] },
    ],
    compute(v){ return Number(v.ac1||0) + Number(v.ac2||0) + Number(v.ac3||0); },
    interpret(s){
      if (s <= 4)  return { label:'Low risk',           severity:'low',  action:'No further action.', detail:'Re-screen annually.' };
      if (s <= 7)  return { label:'Increasing risk',    severity:'med',  action:'Complete full AUDIT-10.', detail:'Brief advice + AUDIT-10. \u2265 8 on AUDIT-10 triggers structured intervention.' };
      if (s <= 10) return { label:'Higher risk',        severity:'high', action:'Structured brief intervention; consider referral.', detail:'AUDIT-10 + alcohol service referral.' };
      return            { label:'Probable dependence', severity:'severe', action:'Refer alcohol service. Plan for assisted withdrawal.', detail:'Do NOT advise abrupt cessation without medical supervision (withdrawal seizure risk).' };
    },
    refs:[
      { label:'NICE CKS Alcohol \u2014 problem drinking', url:'https://cks.nice.org.uk/topics/alcohol-problem-drinking/' },
      { label:'PHE AUDIT-C', url:'https://www.gov.uk/government/publications/alcohol-use-screening-tests' },
    ],
  },

  {
    id: 'audit',
    title: 'AUDIT (full, 10-item)',
    category: 'Mental health',
    description: 'Detailed alcohol-use disorder screen (0\u201340).',
    usefulFor: 'After positive AUDIT-C. Plans intervention vs referral.',
    resultLabel: 'AUDIT-10', resultMax: 40,
    inputs: [
      { id:'au1',  kind:'select', label:'1. Frequency of drinking',
        options:[ { value:0, label:'Never' }, { value:1, label:'Monthly or less' }, { value:2, label:'2\u20134 / month' }, { value:3, label:'2\u20133 / week' }, { value:4, label:'4+ / week' } ] },
      { id:'au2',  kind:'select', label:'2. Typical drinks per day',
        options:[ { value:0, label:'1\u20132' }, { value:1, label:'3\u20134' }, { value:2, label:'5\u20136' }, { value:3, label:'7\u20139' }, { value:4, label:'10+' } ] },
      { id:'au3',  kind:'select', label:'3. Frequency of \u2265 6 drinks on one occasion',
        options:[ { value:0, label:'Never' }, { value:1, label:'< monthly' }, { value:2, label:'Monthly' }, { value:3, label:'Weekly' }, { value:4, label:'Daily / almost daily' } ] },
      { id:'au4',  kind:'select', label:'4. Frequency of being unable to stop once started',
        options:[ { value:0, label:'Never' }, { value:1, label:'< monthly' }, { value:2, label:'Monthly' }, { value:3, label:'Weekly' }, { value:4, label:'Daily / almost daily' } ] },
      { id:'au5',  kind:'select', label:'5. Failed to do what was expected because of drinking',
        options:[ { value:0, label:'Never' }, { value:1, label:'< monthly' }, { value:2, label:'Monthly' }, { value:3, label:'Weekly' }, { value:4, label:'Daily / almost daily' } ] },
      { id:'au6',  kind:'select', label:'6. Needed a drink in the morning',
        options:[ { value:0, label:'Never' }, { value:1, label:'< monthly' }, { value:2, label:'Monthly' }, { value:3, label:'Weekly' }, { value:4, label:'Daily / almost daily' } ] },
      { id:'au7',  kind:'select', label:'7. Guilt or remorse after drinking',
        options:[ { value:0, label:'Never' }, { value:1, label:'< monthly' }, { value:2, label:'Monthly' }, { value:3, label:'Weekly' }, { value:4, label:'Daily / almost daily' } ] },
      { id:'au8',  kind:'select', label:'8. Memory loss because of drinking',
        options:[ { value:0, label:'Never' }, { value:1, label:'< monthly' }, { value:2, label:'Monthly' }, { value:3, label:'Weekly' }, { value:4, label:'Daily / almost daily' } ] },
      { id:'au9',  kind:'select', label:'9. You or someone injured because of drinking',
        options:[ { value:0, label:'No' }, { value:2, label:'Yes, but not last year' }, { value:4, label:'Yes, last year' } ] },
      { id:'au10', kind:'select', label:'10. Concern from others / suggested cutting down',
        options:[ { value:0, label:'No' }, { value:2, label:'Yes, but not last year' }, { value:4, label:'Yes, last year' } ] },
    ],
    compute(v){
      return ['au1','au2','au3','au4','au5','au6','au7','au8','au9','au10']
        .reduce(function(s,k){ return s + Number(v[k]||0); }, 0);
    },
    interpret(s){
      if (s <= 7)  return { label:'Lower risk',         severity:'low',  action:'No intervention beyond brief advice.', detail:'' };
      if (s <= 15) return { label:'Increasing risk',    severity:'med',  action:'Brief intervention + advice.', detail:'5-minute structured advice on units, harms, motivation.' };
      if (s <= 19) return { label:'Higher risk',        severity:'high', action:'Extended brief intervention + consider specialist referral.', detail:'' };
      return            { label:'Probable dependence', severity:'severe', action:'Refer alcohol service. Plan for assisted withdrawal.', detail:'Withdrawal can cause seizures / DTs \u2014 do NOT advise abrupt cessation without medical supervision.' };
    },
    refs:[
      { label:'PHE AUDIT-10', url:'https://www.gov.uk/government/publications/alcohol-use-screening-tests' },
      { label:'WHO AUDIT', url:'https://www.who.int/publications/i/item/audit-the-alcohol-use-disorders-identification-test-guidelines-for-use-in-primary-health-care' },
    ],
  },

  // ============================================
  // SLEEP
  // ============================================
  {
    id: 'epworth',
    title: 'Epworth Sleepiness Scale',
    category: 'Sleep',
    description: 'Daytime sleepiness score (8 items, 0\u201324).',
    usefulFor: 'Screening for OSA, narcolepsy. \u2265 11 suggests significant sleepiness \u2014 refer sleep clinic.',
    resultLabel: 'Epworth', resultMax: 24,
    inputs: [
      { group:'How likely are you to doze off? (0 = never, 3 = high chance)',
        id:'e1', kind:'likert', label:'1. Sitting and reading',
        options:[ { value:0,label:'Never' },{ value:1,label:'Slight' },{ value:2,label:'Moderate' },{ value:3,label:'High' } ] },
      { id:'e2', kind:'likert', label:'2. Watching TV',
        options:[ { value:0,label:'Never' },{ value:1,label:'Slight' },{ value:2,label:'Moderate' },{ value:3,label:'High' } ] },
      { id:'e3', kind:'likert', label:'3. Sitting inactive in a public place',
        options:[ { value:0,label:'Never' },{ value:1,label:'Slight' },{ value:2,label:'Moderate' },{ value:3,label:'High' } ] },
      { id:'e4', kind:'likert', label:'4. Passenger in a car for an hour without break',
        options:[ { value:0,label:'Never' },{ value:1,label:'Slight' },{ value:2,label:'Moderate' },{ value:3,label:'High' } ] },
      { id:'e5', kind:'likert', label:'5. Lying down to rest in the afternoon',
        options:[ { value:0,label:'Never' },{ value:1,label:'Slight' },{ value:2,label:'Moderate' },{ value:3,label:'High' } ] },
      { id:'e6', kind:'likert', label:'6. Sitting and talking to someone',
        options:[ { value:0,label:'Never' },{ value:1,label:'Slight' },{ value:2,label:'Moderate' },{ value:3,label:'High' } ] },
      { id:'e7', kind:'likert', label:'7. Sitting quietly after lunch (no alcohol)',
        options:[ { value:0,label:'Never' },{ value:1,label:'Slight' },{ value:2,label:'Moderate' },{ value:3,label:'High' } ] },
      { id:'e8', kind:'likert', label:'8. In a car, stopped for a few minutes in traffic',
        options:[ { value:0,label:'Never' },{ value:1,label:'Slight' },{ value:2,label:'Moderate' },{ value:3,label:'High' } ] },
    ],
    compute(v){ return ['e1','e2','e3','e4','e5','e6','e7','e8'].reduce(function(s,k){ return s + Number(v[k]||0); }, 0); },
    interpret(s){
      if (s <= 5)  return { label:'Normal',            severity:'low',  action:'No further action.', detail:'' };
      if (s <= 10) return { label:'Higher normal',     severity:'low',  action:'Reassess if symptoms emerge.', detail:'' };
      if (s <= 15) return { label:'Mild excessive',    severity:'med',  action:'Sleep history + STOP-BANG. Consider sleep clinic referral.', detail:'' };
      return            { label:'Severe excessive',   severity:'high', action:'Refer sleep clinic. Advise NOT to drive professional / heavy vehicles.', detail:'DVLA: stop driving group 2 vehicles; group 1 \u2014 only if untreated OSA causing excessive sleepiness, must inform DVLA.' };
    },
    refs:[
      { label:'Johns 1991 (original)', url:'https://pubmed.ncbi.nlm.nih.gov/1798888/' },
      { label:'NICE CKS OSA', url:'https://cks.nice.org.uk/topics/obstructive-sleep-apnoea-syndrome/' },
    ],
  },

  {
    id: 'stop-bang',
    title: 'STOP-BANG (OSA risk)',
    category: 'Sleep',
    description: 'OSA risk score (8 yes/no items, 0\u20138).',
    usefulFor: 'Pre-operative assessment, screening for OSA referral.',
    resultLabel: 'STOP-BANG', resultMax: 8,
    inputs: [
      { id:'sb_snore', kind:'check', label:'S \u2014 Snore loudly (heard through door)', points:1 },
      { id:'sb_tired', kind:'check', label:'T \u2014 Tired / fatigued / sleepy during day', points:1 },
      { id:'sb_obs',   kind:'check', label:'O \u2014 Observed stop breathing during sleep', points:1 },
      { id:'sb_bp',    kind:'check', label:'P \u2014 Pressure (high blood pressure, treated or not)', points:1 },
      { id:'sb_bmi',   kind:'check', label:'B \u2014 BMI > 35', points:1 },
      { id:'sb_age',   kind:'check', label:'A \u2014 Age > 50', points:1 },
      { id:'sb_neck',  kind:'check', label:'N \u2014 Neck circumference > 40 cm', points:1 },
      { id:'sb_gender',kind:'check', label:'G \u2014 Male sex', points:1 },
    ],
    compute(v){ return Object.values(v).filter(Boolean).length; },
    interpret(s){
      if (s <= 2) return { label:'Low risk OSA',    severity:'low',  action:'Reassess if symptoms develop.', detail:'' };
      if (s <= 4) return { label:'Intermediate',    severity:'med',  action:'Sleep history; consider sleep clinic.', detail:'' };
      return         { label:'High risk OSA',      severity:'high', action:'Refer sleep clinic for polysomnography / overnight oximetry.', detail:'Especially if Epworth \u2265 11 or daytime sleepiness driving.' };
    },
    refs:[
      { label:'Chung et al. 2008 (STOP-BANG)', url:'https://pubmed.ncbi.nlm.nih.gov/18431116/' },
      { label:'NICE CKS OSA', url:'https://cks.nice.org.uk/topics/obstructive-sleep-apnoea-syndrome/' },
    ],
  },

  // ============================================
  // RENAL / METABOLIC
  // ============================================
  {
    id: 'egfr',
    title: 'eGFR (CKD-EPI 2021)',
    category: 'Renal / metabolic',
    description: 'Estimated GFR \u2014 race-free 2021 equation.',
    usefulFor: 'CKD staging, drug dose adjustment, contrast safety.',
    resultLabel: 'eGFR', resultUnit:'mL/min/1.73m\u00b2',
    formula: 'CKD-EPI 2021 \u2014 uses creatinine, age, sex (race factor removed)',
    inputs: [
      { id:'eg_cr',     kind:'number', label:'Serum creatinine', unit:'\u00b5mol/L', min:10, max:2000, step:1 },
      { id:'eg_age',    kind:'number', label:'Age', unit:'yrs', min:18, max:120, step:1 },
      { id:'eg_female', kind:'check',  label:'Female sex' },
    ],
    compute(v){
      const cr = v.eg_cr, age = v.eg_age;
      if (!cr || !age) return null;
      const isF = !!v.eg_female;
      const sCr = cr / 88.4;
      const kappa = isF ? 0.7 : 0.9;
      const alpha = isF ? -0.241 : -0.302;
      const sexFactor = isF ? 1.012 : 1.0;
      const minTerm = Math.min(sCr / kappa, 1);
      const maxTerm = Math.max(sCr / kappa, 1);
      const egfr = 142 * Math.pow(minTerm, alpha) * Math.pow(maxTerm, -1.200) * Math.pow(0.9938, age) * sexFactor;
      return Math.round(egfr);
    },
    interpret(s){
      if (s >= 90) return { label:'G1 \u2014 Normal', severity:'low',  action:'No CKD unless markers (ACR/proteinuria).', detail:'G1 only "CKD" if other markers (ACR \u2265 3 mg/mmol).' };
      if (s >= 60) return { label:'G2 \u2014 Mild',   severity:'low',  action:'No CKD unless markers.', detail:'Annual review if other risk factors.' };
      if (s >= 45) return { label:'G3a',              severity:'med',  action:'CKD \u2014 annual review, BP/ACR/cardio-renal optimisation.', detail:'NICE NG203 management.' };
      if (s >= 30) return { label:'G3b',              severity:'high', action:'CKD \u2014 6-monthly review; refer renal if ACR \u2265 70.', detail:'NICE NG203.' };
      if (s >= 15) return { label:'G4',               severity:'severe', action:'Refer renal team.', detail:'Plan for renal replacement therapy discussion.' };
      return         { label:'G5 \u2014 Kidney failure', severity:'severe', action:'Urgent renal referral.', detail:'Renal replacement therapy.' };
    },
    refs:[
      { label:'NICE NG203 CKD', url:'https://www.nice.org.uk/guidance/ng203' },
      { label:'CKD-EPI 2021 (Inker et al.)', url:'https://pubmed.ncbi.nlm.nih.gov/34554658/' },
    ],
  },

  {
    id: 'crcl',
    title: 'Creatinine clearance (Cockcroft-Gault)',
    category: 'Renal / metabolic',
    description: 'Drug-dosing renal function \u2014 still used for DOAC dosing.',
    usefulFor: 'DOAC dose adjustment (apixaban, dabigatran, rivaroxaban \u2014 use CrCl, NOT eGFR).',
    resultLabel: 'CrCl', resultUnit:'mL/min',
    formula: '((140 \u2212 age) \u00d7 weight \u00d7 (0.85 if F)) / (0.814 \u00d7 Cr \u00b5mol/L)',
    inputs: [
      { id:'cc_age',    kind:'number', label:'Age', unit:'yrs', min:18, max:120, step:1 },
      { id:'cc_weight', kind:'number', label:'Weight', unit:'kg', min:30, max:250, step:0.1 },
      { id:'cc_cr',     kind:'number', label:'Serum creatinine', unit:'\u00b5mol/L', min:10, max:2000, step:1 },
      { id:'cc_female', kind:'check',  label:'Female sex (\u00d70.85)' },
    ],
    compute(v){
      if (!v.cc_age || !v.cc_weight || !v.cc_cr) return null;
      const sex = v.cc_female ? 0.85 : 1;
      const crcl = ((140 - v.cc_age) * v.cc_weight * sex) / (0.814 * v.cc_cr);
      return Math.round(crcl);
    },
    interpret(s){
      if (s >= 80) return { label:'Normal range', severity:'low', action:'Standard dosing.', detail:'' };
      if (s >= 50) return { label:'Mild impairment', severity:'med', action:'Most drugs standard; check apixaban / dabigatran dose.', detail:'' };
      if (s >= 30) return { label:'Moderate', severity:'high', action:'Dose-adjust DOACs (apixaban 2.5 mg BD if 2 of: \u226580, \u226460 kg, Cr \u2265133). Avoid dabigatran if CrCl <30.', detail:'Avoid NSAIDs, review metformin.' };
      return         { label:'Severe', severity:'severe', action:'Avoid most DOACs except apixaban 2.5 mg BD (with caution). Refer renal.', detail:'Many drugs need significant dose reduction or avoidance.' };
    },
    refs:[
      { label:'Cockcroft-Gault 1976', url:'https://pubmed.ncbi.nlm.nih.gov/1244564/' },
      { label:'BNF DOAC dosing', url:'https://bnf.nice.org.uk/' },
    ],
  },

  {
    id: 'bmi',
    title: 'BMI + waist:height ratio',
    category: 'Renal / metabolic',
    description: 'Body mass index and central adiposity.',
    usefulFor: 'Obesity classification, CV/diabetes risk. Waist:height < 0.5 = healthy.',
    resultLabel: 'BMI', resultUnit:'kg/m\u00b2',
    formula: 'BMI = weight (kg) / height\u00b2 (m). Waist:height = waist / height.',
    inputs: [
      { id:'bmi_w',     kind:'number', label:'Weight', unit:'kg', min:20, max:300, step:0.1 },
      { id:'bmi_h',     kind:'number', label:'Height', unit:'cm', min:120, max:230, step:0.5 },
      { id:'bmi_waist', kind:'number', label:'Waist circumference', unit:'cm', min:40, max:200, step:0.5, note:'Optional \u2014 midway iliac crest to costal margin' },
    ],
    compute(v){
      if (!v.bmi_w || !v.bmi_h) return null;
      const hM = v.bmi_h / 100;
      const bmi = v.bmi_w / (hM * hM);
      const wHR = v.bmi_waist ? (v.bmi_waist / v.bmi_h) : null;
      const display = bmi.toFixed(1) + (wHR ? (' \u00b7 W:H ratio ' + wHR.toFixed(2)) : '');
      return { display: display, bmi: bmi, wHR: wHR };
    },
    interpret(r){
      const bmi = r.bmi;
      const wHR = r.wHR;
      let sev = 'low', label = 'Healthy weight';
      const detail = wHR != null ? ('Waist:height ratio ' + wHR.toFixed(2) + ' \u2014 ' + (wHR < 0.5 ? 'healthy (<0.5)' : wHR < 0.6 ? 'increased risk (\u22650.5)' : 'very high risk (\u22650.6)') + '.') : '';
      if (bmi < 18.5)      { sev = 'med';    label = 'Underweight'; }
      else if (bmi < 25)   { sev = 'low';    label = 'Healthy weight'; }
      else if (bmi < 30)   { sev = 'med';    label = 'Overweight'; }
      else if (bmi < 35)   { sev = 'high';   label = 'Obese class I'; }
      else if (bmi < 40)   { sev = 'high';   label = 'Obese class II'; }
      else                 { sev = 'severe'; label = 'Obese class III'; }
      const action = bmi >= 30
        ? 'Offer NICE NG246 weight-management pathway. Consider tier-3 / pharmacotherapy if BMI \u2265 35 + comorbidities.'
        : (bmi >= 25 ? 'Lifestyle advice \u2014 diet + exercise.' : 'Routine.');
      return { label: label, severity: sev, action: action, detail: detail };
    },
    refs:[
      { label:'NICE NG246 Obesity', url:'https://www.nice.org.uk/guidance/ng246' },
      { label:'NICE CG189 Obesity', url:'https://www.nice.org.uk/guidance/cg189' },
    ],
  },

  // ============================================
  // BONE / FRACTURE
  // ============================================
  {
    id: 'frax',
    title: 'FRAX (10-year fracture risk)',
    category: 'Bone',
    description: 'WHO 10-year probability of major osteoporotic / hip fracture.',
    usefulFor: 'Osteoporosis treatment decisions (NICE NG222 / NOGG).',
    kind: 'external',
    externalUrl: 'https://frax.shef.ac.uk/FRAX/tool.aspx?country=1',
    externalReason: 'FRAX uses a proprietary algorithm with 12 country-calibrated inputs (age, sex, BMI, prior fracture, parent hip Hx, smoker, glucocorticoid, RA, secondary osteoporosis, alcohol, optional BMD). Use the official UK tool.',
    refs:[
      { label:'FRAX UK', url:'https://frax.shef.ac.uk/FRAX/tool.aspx?country=1' },
      { label:'NOGG 2021', url:'https://www.nogg.org.uk/' },
    ],
  },
  {
    id: 'qfracture',
    title: 'QFracture (10-year fracture risk)',
    category: 'Bone',
    description: 'UK fracture risk calculator \u2014 preferred by NICE NG222.',
    usefulFor: 'Initial osteoporosis risk assessment ages 30\u201399.',
    kind: 'external',
    externalUrl: 'https://qfracture.org/',
    externalReason: 'Proprietary algorithm. Use the official ClinRisk site.',
    refs:[
      { label:'qfracture.org', url:'https://qfracture.org/' },
      { label:'NICE NG222 Osteoporosis', url:'https://www.nice.org.uk/guidance/ng222' },
    ],
  },

  // ============================================
  // UROLOGY
  // ============================================
  {
    id: 'ipss',
    title: 'IPSS (BPH symptom score)',
    category: 'Urology',
    description: 'International Prostate Symptom Score \u2014 7 items 0\u20135.',
    usefulFor: 'Male LUTS severity & monitoring response. Score guides treatment intensification.',
    resultLabel: 'IPSS', resultMax: 35,
    inputs: [
      { group:'Over the past month, how often:',
        id:'i1', kind:'likert', label:'1. Incomplete emptying',
        options:[ {value:0,label:'Not at all'},{value:1,label:'< 1/5'},{value:2,label:'< \u00bd'},{value:3,label:'\u2248 \u00bd'},{value:4,label:'> \u00bd'},{value:5,label:'Almost always'} ] },
      { id:'i2', kind:'likert', label:'2. Frequency (< 2 h apart)',
        options:[ {value:0,label:'Not at all'},{value:1,label:'< 1/5'},{value:2,label:'< \u00bd'},{value:3,label:'\u2248 \u00bd'},{value:4,label:'> \u00bd'},{value:5,label:'Almost always'} ] },
      { id:'i3', kind:'likert', label:'3. Intermittency',
        options:[ {value:0,label:'Not at all'},{value:1,label:'< 1/5'},{value:2,label:'< \u00bd'},{value:3,label:'\u2248 \u00bd'},{value:4,label:'> \u00bd'},{value:5,label:'Almost always'} ] },
      { id:'i4', kind:'likert', label:'4. Urgency',
        options:[ {value:0,label:'Not at all'},{value:1,label:'< 1/5'},{value:2,label:'< \u00bd'},{value:3,label:'\u2248 \u00bd'},{value:4,label:'> \u00bd'},{value:5,label:'Almost always'} ] },
      { id:'i5', kind:'likert', label:'5. Weak stream',
        options:[ {value:0,label:'Not at all'},{value:1,label:'< 1/5'},{value:2,label:'< \u00bd'},{value:3,label:'\u2248 \u00bd'},{value:4,label:'> \u00bd'},{value:5,label:'Almost always'} ] },
      { id:'i6', kind:'likert', label:'6. Straining',
        options:[ {value:0,label:'Not at all'},{value:1,label:'< 1/5'},{value:2,label:'< \u00bd'},{value:3,label:'\u2248 \u00bd'},{value:4,label:'> \u00bd'},{value:5,label:'Almost always'} ] },
      { id:'i7', kind:'likert', label:'7. Nocturia \u2014 times per night',
        options:[ {value:0,label:'None'},{value:1,label:'1'},{value:2,label:'2'},{value:3,label:'3'},{value:4,label:'4'},{value:5,label:'\u2265 5'} ] },
    ],
    compute(v){ return ['i1','i2','i3','i4','i5','i6','i7'].reduce(function(s,k){ return s + Number(v[k]||0); }, 0); },
    interpret(s){
      if (s <= 7)  return { label:'Mild',     severity:'low',  action:'Watchful waiting + lifestyle advice.', detail:'Reduce caffeine / evening fluids.' };
      if (s <= 19) return { label:'Moderate', severity:'med',  action:'1st-line \u03b1-blocker (tamsulosin) or 5-ARI if prostate >30 g.', detail:'Combination if both bother and large prostate. Review 4\u20136 wks.' };
      return            { label:'Severe',     severity:'high', action:'Refer urology. Consider combination medical therapy.', detail:'NICE CG97 LUTS pathway. Surgical options if refractory.' };
    },
    refs:[
      { label:'NICE CG97 LUTS', url:'https://www.nice.org.uk/guidance/cg97' },
    ],
  },

  // ============================================
  // NUTRITION
  // ============================================
  {
    id: 'must',
    title: 'MUST (malnutrition)',
    category: 'Nutrition',
    description: 'Malnutrition Universal Screening Tool \u2014 3 parameters.',
    usefulFor: 'Care home / housebound / chronic illness review. Triggers nutritional intervention.',
    resultLabel: 'MUST', resultMax: 6,
    inputs: [
      { id:'m_bmi',  kind:'select', label:'1. BMI',
        options:[ { value:0, label:'> 20 (or > 30 obese) \u2014 0' }, { value:1, label:'18.5\u201320 \u2014 1' }, { value:2, label:'< 18.5 \u2014 2' } ] },
      { id:'m_loss', kind:'select', label:'2. Unplanned weight loss (3\u20136 months)',
        options:[ { value:0, label:'< 5% \u2014 0' }, { value:1, label:'5\u201310% \u2014 1' }, { value:2, label:'> 10% \u2014 2' } ] },
      { id:'m_acute',kind:'select', label:'3. Acute disease effect',
        options:[ { value:0, label:'No / minimal \u2014 0' }, { value:2, label:'Acutely ill + no intake / unlikely >5 days \u2014 2' } ] },
    ],
    compute(v){ return Number(v.m_bmi||0) + Number(v.m_loss||0) + Number(v.m_acute||0); },
    interpret(s){
      if (s === 0) return { label:'Low risk',    severity:'low',  action:'Routine screening.', detail:'Hospital weekly \u00b7 care home monthly \u00b7 community annually.' };
      if (s === 1) return { label:'Medium risk', severity:'med',  action:'Document dietary intake \u00d7 3 days. Repeat MUST in 1 wk (hospital) / 1 mo (community).', detail:'' };
      return            { label:'High risk',     severity:'high', action:'Refer dietitian. Improve nutritional intake / supplements.', detail:'Treat underlying cause; oral nutritional supplements (Fortisip etc.).' };
    },
    refs:[
      { label:'BAPEN MUST', url:'https://www.bapen.org.uk/screening-and-must/must-calculator' },
      { label:'NICE CG32 Nutrition support', url:'https://www.nice.org.uk/guidance/cg32' },
    ],
  },

  // ============================================
  // RHEUMATOLOGY
  // ============================================
  {
    id: 'das28',
    title: 'DAS28-CRP (RA activity)',
    category: 'Rheumatology',
    description: 'Disease activity score for rheumatoid arthritis (28-joint count + CRP).',
    usefulFor: 'RA monitoring & treat-to-target. < 2.6 = remission; > 5.1 = high activity.',
    resultLabel: 'DAS28-CRP',
    formula: '0.56\u221a(TJC28) + 0.28\u221a(SJC28) + 0.36 ln(CRP+1) + 0.014\u00d7VAS + 0.96',
    inputs: [
      { id:'das_tjc', kind:'number', label:'Tender joint count (of 28)', unit:'/28', min:0, max:28, step:1 },
      { id:'das_sjc', kind:'number', label:'Swollen joint count (of 28)', unit:'/28', min:0, max:28, step:1 },
      { id:'das_crp', kind:'number', label:'CRP', unit:'mg/L', min:0, max:300, step:0.1 },
      { id:'das_vas', kind:'number', label:'Patient global assessment (VAS)', unit:'mm', min:0, max:100, step:1, note:'0\u2013100 mm' },
    ],
    compute(v){
      const tjc = v.das_tjc, sjc = v.das_sjc, crp = v.das_crp, vas = v.das_vas;
      if (tjc == null || sjc == null || crp == null || vas == null) return null;
      const d = 0.56 * Math.sqrt(tjc) + 0.28 * Math.sqrt(sjc) + 0.36 * Math.log(crp + 1) + 0.014 * vas + 0.96;
      return Math.round(d * 100) / 100;
    },
    interpret(s){
      if (s < 2.6) return { label:'Remission',   severity:'low',  action:'Maintain therapy. Target = remission.', detail:'NICE NG100 \u2014 treat-to-target.' };
      if (s < 3.2) return { label:'Low activity',severity:'low',  action:'Maintain or slight reduction.', detail:'' };
      if (s <= 5.1) return { label:'Moderate',   severity:'med',  action:'Escalate therapy \u2014 consider biologic if not yet on one.', detail:'Biologics (anti-TNF / JAK / etc.) per NICE TA if 2 DMARDs failed.' };
      return            { label:'High activity', severity:'high', action:'Urgent rheumatology review \u2014 escalate to biologic / change regimen.', detail:'' };
    },
    refs:[
      { label:'NICE NG100 RA', url:'https://www.nice.org.uk/guidance/ng100' },
      { label:'EULAR DAS28-CRP', url:'https://www.eular.org/' },
    ],
  },

  // ============================================
  // COGNITION
  // ============================================
  {
    id: '6cit',
    title: '6-CIT (cognitive screen)',
    category: 'Cognition',
    description: '6-item cognitive impairment test \u2014 NICE NG97 first-line.',
    usefulFor: 'Memory clinic referral threshold. \u2265 8 suggests cognitive impairment.',
    resultLabel: '6-CIT', resultMax: 28,
    inputs: [
      { id:'c1', kind:'select', label:'1. What year is it?',
        options:[ { value:0, label:'Correct (0)' }, { value:4, label:'Incorrect (4)' } ] },
      { id:'c2', kind:'select', label:'2. What month is it?',
        options:[ { value:0, label:'Correct (0)' }, { value:3, label:'Incorrect (3)' } ] },
      { id:'c3', kind:'select', label:'3. About what time is it? (within 1 h)',
        options:[ { value:0, label:'Correct (0)' }, { value:3, label:'Incorrect (3)' } ] },
      { id:'c4', kind:'select', label:'4. Count backwards 20\u20131',
        options:[ { value:0, label:'0 errors' }, { value:2, label:'1 error' }, { value:4, label:'> 1 error' } ] },
      { id:'c5', kind:'select', label:'5. Say the months in reverse',
        options:[ { value:0, label:'0 errors' }, { value:2, label:'1 error' }, { value:4, label:'> 1 error' } ] },
      { id:'c6', kind:'select', label:'6. Repeat the 5-item address',
        options:[ { value:0, label:'0 errors' }, { value:2, label:'1 error' }, { value:4, label:'2 errors' }, { value:6, label:'3 errors' }, { value:8, label:'4 errors' }, { value:10, label:'5 errors' } ] },
    ],
    compute(v){ return ['c1','c2','c3','c4','c5','c6'].reduce(function(s,k){ return s + Number(v[k]||0); }, 0); },
    interpret(s){
      if (s <= 7)  return { label:'Normal',    severity:'low',  action:'No further action.', detail:'' };
      if (s <= 9)  return { label:'Mild impairment', severity:'med', action:'Repeat & investigate. Bloods (TFTs, B12, folate, U&E, FBC, glucose).', detail:'Consider memory clinic referral.' };
      return            { label:'Significant impairment', severity:'high', action:'Refer memory clinic. Exclude reversible causes; consider depression screen.', detail:'Discuss capacity, driving (DVLA), social support.' };
    },
    refs:[
      { label:'NICE NG97 Dementia', url:'https://www.nice.org.uk/guidance/ng97' },
      { label:'6-CIT Brooke & Bullock 1999', url:'https://pubmed.ncbi.nlm.nih.gov/10489651/' },
    ],
  },

  {
    id: 'mmse-moca',
    title: 'MMSE / MoCA / ACE-III',
    category: 'Cognition',
    description: 'Detailed cognitive assessments \u2014 paper-administered.',
    usefulFor: 'Confirmation of cognitive impairment after 6-CIT positive.',
    kind: 'external',
    externalReason: 'MMSE and MoCA are copyrighted; ACE-III is the most-used UK memory clinic tool. Use the official paper / app versions.',
    externalUrl: 'https://www.alzheimers.org.uk/about-dementia/symptoms-and-diagnosis/diagnosis/tests-doctors-use',
    refs:[
      { label:'ACE-III (Hodges)', url:'https://www.sydney.edu.au/brain-mind/resources-for-clinicians/dementia-test.html' },
      { label:'MoCA', url:'https://mocacognition.com/' },
    ],
  },

];
