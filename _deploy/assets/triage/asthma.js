/* ============================================
   Triage Tool — Asthma
   NICE NG245 · BTS-SIGN · NG12
   ============================================ */
RGPTriage.register('asthma-triage', {
  title: 'Asthma — triage',
  subtitle: 'Acute or new presentation: is this a life-threatening attack, severe acute exacerbation, moderate exacerbation, suspected lung cancer, or routine review?',
  guideline: 'NICE NG245 · BTS-SIGN · NG12',

  inputs: [
    { group:'Demographics & context', id:'age', kind:'number', label:'Age', unit:'yrs', step:1 },
    { group:'Demographics & context', id:'smoker', kind:'check', label:'Current / ex-smoker' },
    { group:'Demographics & context', id:'prior_itu', kind:'check', label:'Previous ITU / ventilation for asthma' },
    { group:'Demographics & context', id:'frequent_ed', kind:'check', label:'≥2 hospital attendances for asthma in past year' },
    { group:'Demographics & context', id:'high_saba', kind:'check', label:'≥3 SABA inhalers/year', note:'Marker of poor control + death risk' },
    { group:'Demographics & context', id:'ocs_recent', kind:'check', label:'Oral steroid course in last 12 months' },

    { group:'Symptoms now', id:'silent_chest', kind:'check', label:'Silent chest on auscultation' },
    { group:'Symptoms now', id:'cyanosis', kind:'check', label:'Cyanosis / exhaustion' },
    { group:'Symptoms now', id:'confused', kind:'check', label:'Confusion / drowsiness' },
    { group:'Symptoms now', id:'cant_speak', kind:'check', label:'Can\'t complete sentences in one breath' },
    { group:'Symptoms now', id:'accessory', kind:'check', label:'Using accessory muscles' },
    { group:'Symptoms now', id:'nocturnal', kind:'check', label:'Night-time waking from asthma' },
    { group:'Symptoms now', id:'sx_3wk', kind:'check', label:'Symptoms / SABA ≥3×/week' },
    { group:'Symptoms now', id:'haemoptysis', kind:'check', label:'Haemoptysis' },
    { group:'Symptoms now', id:'cough_3wk', kind:'check', label:'Cough / hoarseness >3 weeks' },
    { group:'Symptoms now', id:'weight_loss', kind:'check', label:'Unintentional weight loss' },

    { group:'Vitals', id:'sbp', kind:'number', label:'Systolic BP', unit:'mmHg', step:1 },
    { group:'Vitals', id:'hr', kind:'number', label:'Heart rate', unit:'/min', step:1 },
    { group:'Vitals', id:'rr', kind:'number', label:'Resp rate', unit:'/min', step:1 },
    { group:'Vitals', id:'spo2', kind:'number', label:'SpO₂ in air', unit:'%', step:1 },
    { group:'Vitals', id:'pefr_pct', kind:'number', label:'PEFR (% predicted/best)', unit:'%', step:1 },
    { group:'Vitals', id:'temp', kind:'number', label:'Temperature', unit:'°C', step:0.1 },
  ],

  defaultMessage: 'No acute or red-flag features triggered — proceed with structured asthma review (NG245 ladder, technique, action plan, annual review).',

  rules: [
    // EMERGENCY
    {
      tier:'emergency',
      label:'Life-threatening asthma',
      action:'Call 999 — high-flow O₂, nebulised salbutamol + ipratropium, IV hydrocortisone, blue-light',
      source:'BTS/SIGN 2024 · NICE NG245',
      sourceUrl:'https://www.brit-thoracic.org.uk',
      patientPhrase:'"This is a life-threatening asthma attack. I\'m calling an ambulance right now — please stay sitting up and use your inhaler."',
      referralTemplate:'LIFE-THREATENING ACUTE ASTHMA.\nFeatures: silent chest / cyanosis / poor effort / confusion / SpO₂ <92% / PEFR <33% / SBP <90 / bradycardia.\nGiven: high-flow O₂, nebulised salbutamol 5 mg + ipratropium 500 mcg, IV hydrocortisone 100 mg.',
      when: i => i.silent_chest || i.cyanosis || i.confused || (i.spo2 != null && i.spo2 < 92) || (i.pefr_pct != null && i.pefr_pct < 33) || (i.sbp != null && i.sbp < 90)
    },
    {
      tier:'emergency',
      label:'Severe acute asthma — admit',
      action:'Same-day admission · nebulised salbutamol, prednisolone 40 mg, O₂ if SpO₂ <94%',
      source:'BTS/SIGN · NICE NG245',
      patientPhrase:'"This is a severe asthma attack — we need to send you in for proper treatment and observation."',
      referralTemplate:'Severe acute asthma.\nPEFR 33–50% predicted / RR ≥25 / HR ≥110 / can\'t complete sentences.\nSpO₂ [value]%. Treatment given: salbutamol nebuliser, prednisolone 40 mg PO, O₂ titrated.',
      when: i => (i.pefr_pct != null && i.pefr_pct >= 33 && i.pefr_pct < 50) ||
        (i.rr != null && i.rr >= 25) ||
        (i.hr != null && i.hr >= 110) ||
        i.cant_speak
    },

    // CANCER (2WW)
    {
      tier:'cancer',
      label:'Haemoptysis ≥40 — urgent CXR + suspected lung cancer 2WW',
      action:'Urgent CXR (≤2 wk) · lung 2WW',
      source:'NICE NG12 §1.1.1',
      sourceUrl:'https://www.nice.org.uk/guidance/ng12',
      patientPhrase:'"Coughing up blood at your age has to be checked urgently — I\'m organising a fast chest X-ray."',
      referralTemplate:'2WW — lung cancer (NG12 §1.1.1).\nAge [value], haemoptysis. Smoker [Y/N]. Weight loss [Y/N]. CXR urgent.',
      when: i => i.age != null && i.age >= 40 && i.haemoptysis
    },
    {
      tier:'cancer',
      label:'Cough/hoarseness >3 wks + smoker ≥40 + weight loss — suspect lung cancer',
      action:'Urgent CXR · lung 2WW if X-ray suggestive',
      source:'NICE NG12 §1.1',
      patientPhrase:'"A long-standing cough in someone who smokes, with weight loss, needs us to rule out a lung cause urgently."',
      when: i => i.age != null && i.age >= 40 && i.smoker && i.cough_3wk && i.weight_loss
    },

    // URGENT NON-CANCER
    {
      tier:'urgent',
      label:'Moderate acute asthma — treat in surgery + same-day review',
      action:'Salbutamol via spacer (10 puffs) · prednisolone 40 mg PO · re-assess after 30 min',
      source:'BTS/SIGN · NICE NG245',
      patientPhrase:'"This is a moderate attack — we\'ll give a steroid course and watch you. If you don\'t improve in 30 minutes, we go to hospital."',
      referralTemplate:'Moderate acute asthma.\nPEFR 50–75%. Speech normal. SpO₂ ≥94%.\nGiven: 10 puffs salbutamol via spacer + prednisolone 40 mg × 5/7. Follow-up <48h.',
      when: i => i.pefr_pct != null && i.pefr_pct >= 50 && i.pefr_pct < 75
    },
    {
      tier:'urgent',
      label:'Brittle/high-risk asthma history — full review now',
      action:'Same-week respiratory team if poor control · written action plan + technique',
      source:'NICE NG245',
      patientPhrase:'"Your history of severe attacks puts you in a higher-risk group — we need to look at this carefully and improve your plan."',
      when: i => i.prior_itu || i.frequent_ed || i.high_saba
    },
    {
      tier:'urgent',
      label:'Recent oral-steroid course + poor control — step up + review',
      action:'Step up MART per NG245 · written PAAP · 4-week review',
      source:'NICE NG245',
      patientPhrase:'"You\'ve had a course of steroid recently — that means your asthma isn\'t controlled enough. Let\'s improve the plan today."',
      when: i => i.ocs_recent && (i.sx_3wk || i.nocturnal || i.high_saba)
    },

    // ROUTINE
    {
      tier:'routine',
      label:'Poor control on current step (symptoms ≥3×/wk or nocturnal) — step up',
      action:'AIR → MART (NG245 ladder) · technique review · trigger review · annual review',
      source:'NICE NG245',
      patientPhrase:'"Your asthma isn\'t as well-controlled as it could be — let\'s adjust your inhaler plan."',
      when: i => (i.sx_3wk || i.nocturnal) && !(i.pefr_pct != null && i.pefr_pct < 75) && !i.prior_itu
    },
    {
      tier:'routine',
      label:'Stable asthma — routine annual review',
      action:'Annual review · PAAP · technique · trigger · flu vaccine',
      source:'NICE NG245',
      patientPhrase:'"You\'re well-controlled — let\'s confirm your plan and check inhaler technique."',
      when: i => !(i.sx_3wk || i.nocturnal || i.haemoptysis || i.cough_3wk || i.weight_loss || i.silent_chest || i.cyanosis)
    },
  ],

  sources: [
    { label:'NICE NG245 — Asthma (2024)', url:'https://www.nice.org.uk/guidance/ng245' },
    { label:'BTS/SIGN — Asthma guidance', url:'https://www.brit-thoracic.org.uk' },
    { label:'NICE NG12 — Suspected cancer', url:'https://www.nice.org.uk/guidance/ng12' },
    { label:'Macmillan Rapid Referral', url:'https://www.macmillan.org.uk/healthcare-professionals/cancer-pathways/prevention-and-diagnosis/rapid-referral-guidelines' },
    { label:'NICE CKS — Asthma', url:'https://cks.nice.org.uk/topics/asthma/' },
  ],
});
