/* ============================================
   Triage Tool — Hypertension
   NICE NG136 · CKS Hypertension · NG12
   ============================================ */
RGPTriage.register('hypertension-triage', {
  title: 'Hypertension — triage',
  subtitle: 'Once an elevated BP is identified, what action does THIS reading demand? Same-day admission for hypertensive emergency, urgent specialist for accelerated/secondary, or routine ABPM pathway.',
  guideline: 'NICE NG136 · CKS HTN · NG12',

  inputs: [
    { group:'Demographics & context', id:'age', kind:'number', label:'Age', unit:'yrs', step:1 },
    { group:'Demographics & context', id:'preg', kind:'check', label:'Pregnant / postpartum (<6 weeks)' },
    { group:'Demographics & context', id:'paroxysmal', kind:'check', label:'Episodic sweating + palpitations + pallor', note:'Phaeo triad' },

    { group:'BP readings', id:'sbp',  kind:'number', label:'Systolic BP',  unit:'mmHg', step:1 },
    { group:'BP readings', id:'dbp',  kind:'number', label:'Diastolic BP', unit:'mmHg', step:1 },

    { group:'End-organ symptoms', id:'thunderclap', kind:'check', label:'Sudden severe headache / "worst ever"' },
    { group:'End-organ symptoms', id:'focal_neuro', kind:'check', label:'Focal neurology / facial droop / limb weakness' },
    { group:'End-organ symptoms', id:'chest_pain', kind:'check', label:'Chest pain / interscapular pain', note:'Consider ACS / dissection' },
    { group:'End-organ symptoms', id:'sob', kind:'check', label:'Acute breathlessness / orthopnoea', note:'? Acute LVF' },
    { group:'End-organ symptoms', id:'visual', kind:'check', label:'Visual disturbance', note:'? Retinal haemorrhage / papilloedema' },
    { group:'End-organ symptoms', id:'reduced_consc', kind:'check', label:'Drowsy / confused / seizure' },
    { group:'End-organ symptoms', id:'fits_preg', kind:'check', label:'Seizure / hyperreflexia / RUQ pain in pregnant patient', note:'Eclampsia' },
    { group:'End-organ symptoms', id:'haematuria', kind:'check', label:'Haematuria with no UTI' },

    { group:'Bloods / context', id:'cr', kind:'number', label:'Creatinine', unit:'µmol/L', step:1 },
    { group:'Bloods / context', id:'k', kind:'number', label:'Potassium', unit:'mmol/L', step:0.1 },
    { group:'Bloods / context', id:'na', kind:'number', label:'Sodium', unit:'mmol/L', step:1 },
    { group:'Bloods / context', id:'metanephrines_high', kind:'check', label:'Plasma/24h metanephrines raised' },
  ],

  defaultMessage: 'No emergency or urgent thresholds met — proceed with NICE NG136 routine pathway (ABPM, end-organ screen, QRISK).',

  rules: [
    // EMERGENCY
    {
      tier:'emergency',
      label:'Hypertensive emergency — BP ≥180/120 with end-organ damage',
      action:'Call 999 — same-day admission',
      source:'NICE NG136 §1.5.5 · CKS HTN',
      sourceUrl:'https://www.nice.org.uk/guidance/ng136',
      patientPhrase:'"Your blood pressure is dangerously high AND we have signs that it\'s already affecting your organs. I need to send you to hospital straight away."',
      referralTemplate:'HYPERTENSIVE EMERGENCY — admission.\nBP [SBP]/[DBP] mmHg.\nEnd-organ signs: chest pain / focal neuro / visual loss / acute LVF / encephalopathy / pre-eclampsia / haematuria.\nCreatinine [value], K⁺ [value].',
      when: i => (i.sbp != null && i.sbp >= 180 || i.dbp != null && i.dbp >= 120) &&
        (i.thunderclap || i.focal_neuro || i.chest_pain || i.sob || i.visual || i.reduced_consc || i.haematuria || i.fits_preg)
    },
    {
      tier:'emergency',
      label:'Eclampsia / severe pre-eclampsia',
      action:'Call 999 — obstetric emergency',
      source:'NICE NG133 §1.5',
      sourceUrl:'https://www.nice.org.uk/guidance/ng133',
      patientPhrase:'"This is a pregnancy emergency. I\'m calling an ambulance to get you to the maternity unit right now."',
      referralTemplate:'? Eclampsia / severe pre-eclampsia.\nBP [SBP]/[DBP] mmHg in pregnancy / postpartum.\nFeatures: seizure / RUQ pain / hyperreflexia / proteinuria / visual disturbance.',
      when: i => (i.preg && (i.sbp != null && i.sbp >= 160 || i.dbp != null && i.dbp >= 110)) || (i.preg && i.fits_preg)
    },
    {
      tier:'emergency',
      label:'Suspected aortic dissection — high BP + interscapular pain',
      action:'Call 999 — CT aortogram in hospital',
      source:'NICE CG175 / ACS pathway',
      patientPhrase:'"Your pattern of pain with this blood pressure can be a tear in a major artery — I need to send you in urgently."',
      referralTemplate:'? Aortic dissection.\nBP [SBP]/[DBP], inter-arm difference [value]. Chest/back pain radiating.',
      when: i => i.chest_pain && i.sbp != null && i.sbp >= 160
    },
    {
      tier:'emergency',
      label:'Severe hyperkalaemia (K⁺ >6.5)',
      action:'Call 999 — ECG immediately',
      source:'Renal Association',
      patientPhrase:'"Your potassium is dangerously high and that affects the heart\'s rhythm. I\'m sending you straight to hospital."',
      when: i => i.k != null && i.k > 6.5
    },

    // CANCER (2WW)
    {
      tier:'cancer',
      label:'Visible haematuria ≥45 with HTN — urological 2WW',
      action:'2-week-wait urological',
      source:'NICE NG12 §1.6 · NG136',
      sourceUrl:'https://www.nice.org.uk/guidance/ng12',
      patientPhrase:'"Blood in the urine at your age needs an urgent specialist look to rule out a kidney or bladder cause."',
      referralTemplate:'2WW — urological cancer (NG12 §1.6.1).\nVisible haematuria, HTN, age [value]. UTI excluded.',
      when: i => i.haematuria && i.age != null && i.age >= 45
    },
    {
      tier:'cancer',
      label:'Suspected phaeochromocytoma — paroxysmal triad ± raised metanephrines',
      action:'Urgent endocrine — 2-week-wait local pathway',
      source:'CKS Hypertension / Endocrine Society',
      patientPhrase:'"The pattern you describe — bursts of sweating, palpitations and pallor with raised BP — can be a rare adrenal tumour. We\'ll do specific tests and refer urgently."',
      referralTemplate:'? Phaeochromocytoma.\nParoxysmal triad. Plasma/24h metanephrines: [pending / value].\nRefer endocrinology. Alpha-blocker before beta-blocker if treatment needed.',
      when: i => i.paroxysmal || i.metanephrines_high
    },

    // URGENT NON-CANCER
    {
      tier:'urgent',
      label:'Accelerated / malignant HTN — BP ≥180/120 with retinal signs OR rapid renal decline',
      action:'Same-day specialist assessment',
      source:'NICE NG136 §1.5.5',
      patientPhrase:'"Your blood pressure is very high and there are early signs of organ strain. We need a same-day specialist review."',
      referralTemplate:'Accelerated / malignant HTN.\nBP [SBP]/[DBP]. Fundoscopy: papilloedema / retinal haemorrhage. ACR / creatinine rise [values].',
      when: i => (i.sbp != null && i.sbp >= 180 || i.dbp != null && i.dbp >= 120) && (i.visual || (i.cr != null && i.cr > 200))
    },
    {
      tier:'urgent',
      label:'Severe HTN ≥180/120 without end-organ damage — same-day clinical review',
      action:'Same-day clinical assessment + immediate end-organ screen (urine, ECG, fundoscopy, U&E)',
      source:'NICE NG136 §1.4.1',
      patientPhrase:'"Your reading is very high — even though you feel well, we need to make sure your organs are okay today and start treatment immediately."',
      referralTemplate:'Severe HTN (≥180/120), no acute end-organ damage on initial assessment.\nU&E, urinalysis, fundoscopy, 12-lead ECG arranged. ABPM not required at this stage. Start treatment per NG136.',
      when: i => (i.sbp != null && i.sbp >= 180 || i.dbp != null && i.dbp >= 120)
    },
    {
      tier:'urgent',
      label:'Suspected secondary hypertension — under 40 or treatment-resistant pattern',
      action:'Urgent investigation — renal, endocrine causes',
      source:'NICE NG136 §1.1.6',
      patientPhrase:'"You\'re young to have high BP — there may be a specific cause we should look for."',
      referralTemplate:'Secondary HTN workup.\nAge [value], K⁺ [value], Cr [value], ACR [value], TSH, fasting cortisol, aldo:renin ratio, renal USS.',
      when: i => i.age != null && i.age < 40 && i.sbp != null && i.sbp >= 140
    },
    {
      tier:'urgent',
      label:'Pre-eclampsia possible — BP ≥140/90 in pregnant patient',
      action:'Same-week obstetric review · MAP / proteinuria today',
      source:'NICE NG133',
      patientPhrase:'"This BP needs an urgent maternity check — we want to make sure it\'s not pre-eclampsia."',
      when: i => i.preg && (i.sbp != null && i.sbp >= 140 || i.dbp != null && i.dbp >= 90) &&
        !(i.fits_preg || (i.sbp != null && i.sbp >= 160) || (i.dbp != null && i.dbp >= 110))
    },

    // ROUTINE
    {
      tier:'routine',
      label:'Stage 2 HTN — clinic 160–179 / 100–119 — confirm with ABPM',
      action:'Routine: ABPM ± HBPM, full end-organ screen, treat per NG136',
      source:'NICE NG136 §1.2',
      patientPhrase:'"Your blood pressure is high enough that we need to act, but not so high that we need to do anything today. I\'ll explain the next steps."',
      when: i => (i.sbp != null && i.sbp >= 160 && i.sbp < 180) || (i.dbp != null && i.dbp >= 100 && i.dbp < 120)
    },
    {
      tier:'routine',
      label:'Stage 1 HTN — clinic 140–159 / 90–99 — confirm with ABPM',
      action:'ABPM/HBPM · treat if <80 yrs with end-organ damage, CVD, DM, renal disease, or QRISK ≥10%',
      source:'NICE NG136 §1.2',
      patientPhrase:'"This is mild-to-moderate high blood pressure. We\'ll confirm with a 24-hour monitor and discuss whether treatment is right for you."',
      when: i => (i.sbp != null && i.sbp >= 140 && i.sbp < 160) || (i.dbp != null && i.dbp >= 90 && i.dbp < 100)
    },
  ],

  sources: [
    { label:'NICE NG136 — Hypertension in adults', url:'https://www.nice.org.uk/guidance/ng136' },
    { label:'NICE NG133 — Hypertension in pregnancy', url:'https://www.nice.org.uk/guidance/ng133' },
    { label:'NICE NG12 — Suspected cancer', url:'https://www.nice.org.uk/guidance/ng12' },
    { label:'Macmillan Rapid Referral Guidelines', url:'https://www.macmillan.org.uk/healthcare-professionals/cancer-pathways/prevention-and-diagnosis/rapid-referral-guidelines' },
    { label:'NICE CKS — Hypertension', url:'https://cks.nice.org.uk/topics/hypertension/' },
  ],
});
