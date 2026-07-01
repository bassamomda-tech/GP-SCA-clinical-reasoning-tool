/* ============================================
   Triage Tool — Type 2 Diabetes
   NICE NG28 · NG17 · NG3 · NG12
   ============================================ */
RGPTriage.register('type-2-diabetes-triage', {
  title: 'Type 2 Diabetes — triage',
  subtitle: 'New or established T2DM presentation: rule out emergencies (DKA, HHS, sepsis, AKI), suspected pancreatic/GI cancer in unexplained weight loss, urgent referrals (pregnancy, foot ulcer, retinopathy), or routine workup.',
  guideline: 'NICE NG28 · NG17 · NG12',

  inputs: [
    { group:'Demographics & context', id:'age', kind:'number', label:'Age', unit:'yrs', step:1 },
    { group:'Demographics & context', id:'lean_young', kind:'check', label:'Lean / young — consider T1DM', note:'<35y, normal-low BMI' },
    { group:'Demographics & context', id:'preg', kind:'check', label:'Pregnant / planning pregnancy' },
    { group:'Demographics & context', id:'steroids', kind:'check', label:'On systemic steroids' },

    { group:'Acute symptoms', id:'vomiting', kind:'check', label:'Vomiting / can\'t keep fluids down' },
    { group:'Acute symptoms', id:'kussmaul', kind:'check', label:'Deep, sighing breathing' },
    { group:'Acute symptoms', id:'altered_consc', kind:'check', label:'Drowsy / confused' },
    { group:'Acute symptoms', id:'fever_unwell', kind:'check', label:'Fevers / systemically unwell' },
    { group:'Acute symptoms', id:'weight_loss', kind:'check', label:'Unintentional weight loss >5% / 6 months' },
    { group:'Acute symptoms', id:'poly', kind:'check', label:'Polyuria / polydipsia / nocturia' },

    { group:'Foot / eye / kidney', id:'foot_ulcer', kind:'check', label:'Active foot ulcer / cellulitis / wet gangrene' },
    { group:'Foot / eye / kidney', id:'charcot', kind:'check', label:'Red, hot, swollen foot — ? Charcot' },
    { group:'Foot / eye / kidney', id:'sudden_vision', kind:'check', label:'Sudden visual loss / floaters' },
    { group:'Foot / eye / kidney', id:'haematuria', kind:'check', label:'Visible haematuria (no UTI)' },

    { group:'Vitals', id:'hr', kind:'number', label:'Heart rate', unit:'/min', step:1 },
    { group:'Vitals', id:'sbp', kind:'number', label:'Systolic BP', unit:'mmHg', step:1 },
    { group:'Vitals', id:'rr', kind:'number', label:'Resp rate', unit:'/min', step:1 },

    { group:'Bloods / capillary', id:'glucose', kind:'number', label:'Glucose', unit:'mmol/L', step:0.1 },
    { group:'Bloods / capillary', id:'ketones', kind:'number', label:'Capillary ketones', unit:'mmol/L', step:0.1 },
    { group:'Bloods / capillary', id:'hba1c', kind:'number', label:'HbA1c', unit:'mmol/mol', step:1 },
    { group:'Bloods / capillary', id:'cr', kind:'number', label:'Creatinine', unit:'µmol/L', step:1 },
    { group:'Bloods / capillary', id:'egfr', kind:'number', label:'eGFR', unit:'mL/min', step:1 },
    { group:'Bloods / capillary', id:'k', kind:'number', label:'Potassium', unit:'mmol/L', step:0.1 },
    { group:'Bloods / capillary', id:'na', kind:'number', label:'Sodium', unit:'mmol/L', step:1 },
  ],

  defaultMessage: 'No urgent thresholds met — manage in primary care: confirm Dx, lifestyle ± metformin, cardio-renal screen, structured education, annual review.',

  rules: [
    // EMERGENCY
    {
      tier:'emergency',
      label:'Diabetic ketoacidosis (DKA) — glucose >11 + ketones ≥3 mmol/L',
      action:'Call 999 — DKA pathway',
      source:'JBDS-IP DKA guidance · NICE NG17',
      sourceUrl:'https://www.nice.org.uk/guidance/ng17',
      patientPhrase:'"This is a diabetes emergency called DKA. I\'m calling an ambulance — please don\'t eat or drive."',
      referralTemplate:'DKA — emergency admission.\nGlucose [value] mmol/L, ketones [value], pH if known.\nVomiting [Y/N], drowsy [Y/N]. K⁺ [value], Na⁺ [value].',
      when: i => i.glucose != null && i.glucose > 11 && i.ketones != null && i.ketones >= 3
    },
    {
      tier:'emergency',
      label:'Probable HHS — glucose >30 ± dehydration in older patient',
      action:'Call 999 — HHS pathway',
      source:'JBDS-IP HHS guidance',
      patientPhrase:'"Your sugars are dangerously high — we need to send you in today to bring them down safely."',
      referralTemplate:'? HHS.\nGlucose [value] mmol/L, ketones [value] (typically low), Na⁺ [value], osmolality if known.\nElderly / fluid-deplete.',
      when: i => i.glucose != null && i.glucose > 30
    },
    {
      tier:'emergency',
      label:'Suspected new T1DM — lean/young + weight loss + hyperglycaemia',
      action:'Same-day specialist diabetes referral · DO NOT start metformin alone',
      source:'NICE NG17',
      patientPhrase:'"This pattern fits Type 1 diabetes more than Type 2 — that needs insulin, not just tablets. I\'m getting you seen today."',
      referralTemplate:'? Type 1 DM.\nLean adult, weight loss, glucose [value], ketones [value]. Anti-GAD / C-peptide pending.',
      when: i => i.lean_young && (i.weight_loss || (i.glucose != null && i.glucose >= 11)) && !(i.glucose != null && i.glucose > 11 && i.ketones != null && i.ketones >= 3)
    },
    {
      tier:'emergency',
      label:'Sepsis with hyperglycaemia — high NEWS2 + infection source',
      action:'Call 999 — sepsis pathway',
      source:'NICE NG51',
      sourceUrl:'https://www.nice.org.uk/guidance/ng51',
      patientPhrase:'"You\'ve got signs of a serious infection. I need to send you in straight away."',
      when: i => i.fever_unwell && i.hr != null && i.hr > 110 && i.rr != null && i.rr > 22
    },
    {
      tier:'emergency',
      label:'Severe hyperkalaemia (K⁺ >6.5)',
      action:'Call 999',
      source:'Renal Association',
      patientPhrase:'"Potassium is dangerously high — straight to hospital for an ECG."',
      when: i => i.k != null && i.k > 6.5
    },

    // CANCER (2WW)
    {
      tier:'cancer',
      label:'New diabetes ≥60 + unexplained weight loss — consider pancreatic cancer 2WW',
      action:'Urgent abdominal USS + CA19-9 + 2WW pancreatic/upper GI per NG12',
      source:'NICE NG12 §1.2.10 pancreatic',
      sourceUrl:'https://www.nice.org.uk/guidance/ng12',
      patientPhrase:'"New diabetes with weight loss in your age group needs us to rule out a pancreas problem urgently — this is standard, not a sign anything is wrong."',
      referralTemplate:'2WW — pancreatic cancer (NG12 §1.2.10).\nAge [value], new T2DM, unexplained weight loss.\nUSS abdomen + CA19-9 + LFTs sent.',
      when: i => i.age != null && i.age >= 60 && i.weight_loss && i.hba1c != null && i.hba1c >= 48
    },
    {
      tier:'cancer',
      label:'Visible haematuria + diabetes ≥45 — urological 2WW',
      action:'2WW urological',
      source:'NICE NG12 §1.6',
      patientPhrase:'"Blood in the urine in someone of your age needs an urgent specialist look."',
      when: i => i.haematuria && i.age != null && i.age >= 45
    },

    // URGENT NON-CANCER
    {
      tier:'urgent',
      label:'Active foot ulcer / cellulitis / wet gangrene — same-day MDT foot pathway',
      action:'Same-day diabetic foot clinic / on-call podiatry',
      source:'NICE NG19 diabetic foot',
      sourceUrl:'https://www.nice.org.uk/guidance/ng19',
      patientPhrase:'"This foot wound is an emergency for diabetes — we need a same-day specialist team to assess it."',
      referralTemplate:'Active diabetic foot ulcer / infection.\nLocation: [site]. Discharge / fever: [Y/N]. Pulses + monofilament documented.\nNICE NG19: same-day MDT foot pathway.',
      when: i => i.foot_ulcer
    },
    {
      tier:'urgent',
      label:'Suspected Charcot foot — red hot swollen foot, often painless',
      action:'Same-day MDT foot pathway · offload immediately',
      source:'NICE NG19',
      patientPhrase:'"This is an urgent diabetic foot problem — please don\'t walk on it. I\'m referring same-day."',
      when: i => i.charcot
    },
    {
      tier:'urgent',
      label:'Sudden visual change in DM — same-week ophthalmology',
      action:'Urgent ophthalmology — possible vitreous haemorrhage / retinal detachment',
      source:'NICE NG28 / RCOphth',
      patientPhrase:'"Sudden visual changes in diabetes need a same-week eye assessment — there are treatable causes if caught early."',
      when: i => i.sudden_vision
    },
    {
      tier:'urgent',
      label:'Pregnant / planning + diabetes — urgent DM-in-pregnancy clinic',
      action:'Within 2 weeks · folic acid 5 mg · stop teratogens (SGLT2/GLP-1/statin/ACEi)',
      source:'NICE NG3',
      sourceUrl:'https://www.nice.org.uk/guidance/ng3',
      patientPhrase:'"Diabetes in pregnancy is something we can manage well — but it needs a specialist team, and there are a couple of medications we\'ll switch today."',
      referralTemplate:'? Diabetes in pregnancy.\nPlanning / pregnant. HbA1c [value]. Current meds (review).\nFolic acid 5 mg started. Refer DM-in-pregnancy clinic.',
      when: i => i.preg
    },
    {
      tier:'urgent',
      label:'AKI — creatinine markedly raised',
      action:'Same-day repeat + medication review (metformin, ACEi/ARB, SGLT2i, NSAID)',
      source:'NICE CG169',
      sourceUrl:'https://www.nice.org.uk/guidance/cg169',
      patientPhrase:'"Your kidney function has dropped. We need to repeat blood tests today and review your medications."',
      when: i => (i.cr != null && i.cr > 200) || (i.egfr != null && i.egfr < 30)
    },
    {
      tier:'urgent',
      label:'Symptomatic hyperglycaemia (glucose 15–30 + polyuria/weight loss) — same-day review',
      action:'Same-day senior review · ketones · consider admission if dehydrated',
      source:'NICE NG28',
      patientPhrase:'"Your sugar is quite high and you\'ve got symptoms. Let\'s check ketones now and see whether you need hospital or whether we can manage this today."',
      when: i => i.glucose != null && i.glucose >= 15 && i.glucose <= 30 && (i.poly || i.weight_loss)
    },

    // ROUTINE
    {
      tier:'routine',
      label:'New diagnosis of T2DM — routine pathway',
      action:'Lifestyle ± metformin · annual review · QRISK · ACR · foot · eyes',
      source:'NICE NG28',
      sourceUrl:'https://www.nice.org.uk/guidance/ng28',
      patientPhrase:'"Your blood tests confirm Type 2 diabetes. The good news: we caught it early. Here\'s what happens now…"',
      referralTemplate:'New T2DM.\nHbA1c [value], confirm with repeat if asymptomatic. Lifestyle, structured education (DESMOND), metformin if BMI/age appropriate.\nFull pack: U&E + ACR + lipids + LFTs + eyes referral + foot check + QRISK.',
      when: i => i.hba1c != null && i.hba1c >= 48 && !i.weight_loss && !(i.lean_young) && !(i.glucose != null && i.glucose > 20)
    },
    {
      tier:'routine',
      label:'Pre-diabetes (HbA1c 42–47)',
      action:'NHS DPP · lifestyle · annual HbA1c',
      source:'NICE NG28',
      patientPhrase:'"You\'re not diabetic yet — we have a real chance to prevent it."',
      when: i => i.hba1c != null && i.hba1c >= 42 && i.hba1c < 48
    },
  ],

  sources: [
    { label:'NICE NG28 — Type 2 diabetes', url:'https://www.nice.org.uk/guidance/ng28' },
    { label:'NICE NG17 — Type 1 diabetes / DKA', url:'https://www.nice.org.uk/guidance/ng17' },
    { label:'NICE NG3 — Diabetes in pregnancy', url:'https://www.nice.org.uk/guidance/ng3' },
    { label:'NICE NG19 — Diabetic foot', url:'https://www.nice.org.uk/guidance/ng19' },
    { label:'NICE CG169 — Acute kidney injury', url:'https://www.nice.org.uk/guidance/cg169' },
    { label:'NICE NG12 — Suspected cancer', url:'https://www.nice.org.uk/guidance/ng12' },
    { label:'JBDS-IP DKA / HHS guidance', url:'https://abcd.care/joint-british-diabetes-societies-jbds-inpatient-care-group' },
    { label:'Macmillan Rapid Referral', url:'https://www.macmillan.org.uk/healthcare-professionals/cancer-pathways/prevention-and-diagnosis/rapid-referral-guidelines' },
  ],
});
