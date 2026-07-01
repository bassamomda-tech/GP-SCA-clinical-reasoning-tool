/* ============================================
   Triage Tool — Tiredness ("TATT")
   NICE NG12 (suspected cancer) · CKS TATT ·
   Macmillan Rapid Referral · NICE NG56 multimorbidity
   ============================================ */
RGPTriage.register('tiredness', {
  title: 'Tiredness — symptom + blood-result triage',
  subtitle: 'Tick symptoms, enter vitals/bloods. Tool surfaces every emergency, 2WW cancer pathway, urgent non-cancer, or routine rule that fires — referenced to NICE NG12 / CKS TATT / Macmillan.',
  guideline: 'NICE NG12 · CKS Tiredness · Macmillan',

  inputs: [
    // ---------- Demographics / context ----------
    { group:'Demographics & context', id:'age', kind:'number', label:'Age', unit:'yrs', min:0, max:120, step:1, note:'Several rules are age-gated' },
    { group:'Demographics & context', id:'female', kind:'check', label:'Sex: female' },
    { group:'Demographics & context', id:'preg', kind:'check', label:'Pregnant / could be pregnant' },
    { group:'Demographics & context', id:'smoker', kind:'check', label:'Current / ex-smoker' },
    { group:'Demographics & context', id:'immuno', kind:'check', label:'Immunosuppressed', note:'incl. chemo, biologics, transplant, HIV+' },
    { group:'Demographics & context', id:'anticoag', kind:'check', label:'On anticoagulant', note:'DOAC / warfarin / treatment-dose LMWH' },
    { group:'Demographics & context', id:'fh_cancer', kind:'check', label:'1st-degree FH of relevant cancer' },

    // ---------- Symptoms — generic red-flags ----------
    { group:'General red-flags', id:'weight_loss', kind:'check', label:'Unintentional weight loss', note:'>5% body weight in 6 months' },
    { group:'General red-flags', id:'fevers', kind:'check', label:'Persistent fevers / drenching night sweats' },
    { group:'General red-flags', id:'chest_pain', kind:'check', label:'Chest pain at rest or on exertion' },
    { group:'General red-flags', id:'breathlessness', kind:'check', label:'New / worsening breathlessness' },
    { group:'General red-flags', id:'syncope', kind:'check', label:'Syncope / pre-syncope on exertion' },
    { group:'General red-flags', id:'altered_consc', kind:'check', label:'Drowsy / confused / GCS not 15' },

    // ---------- Symptoms — cancer-site specific ----------
    { group:'Cancer-site symptoms', id:'lymph_node', kind:'check', label:'Persistent unexplained lymphadenopathy', note:'>6 weeks' },
    { group:'Cancer-site symptoms', id:'haematuria', kind:'check', label:'Visible haematuria' },
    { group:'Cancer-site symptoms', id:'pr_bleed', kind:'check', label:'Rectal bleeding' },
    { group:'Cancer-site symptoms', id:'bowel_change', kind:'check', label:'Persistent change in bowel habit', note:'≥6 weeks' },
    { group:'Cancer-site symptoms', id:'abdo_mass', kind:'check', label:'Abdominal / pelvic / breast mass' },
    { group:'Cancer-site symptoms', id:'haemoptysis', kind:'check', label:'Haemoptysis' },
    { group:'Cancer-site symptoms', id:'cough_3wk', kind:'check', label:'Cough or hoarseness >3 weeks' },
    { group:'Cancer-site symptoms', id:'dysphagia', kind:'check', label:'Progressive dysphagia' },
    { group:'Cancer-site symptoms', id:'pmb', kind:'check', label:'Post-menopausal bleeding' },
    { group:'Cancer-site symptoms', id:'bone_pain', kind:'check', label:'New unexplained bone pain' },
    { group:'Cancer-site symptoms', id:'bruising', kind:'check', label:'Easy bruising / petechiae / mucosal bleeding' },

    // ---------- Vitals ----------
    { group:'Vitals (NEWS2)', id:'rr',   kind:'number', label:'Resp rate',   unit:'/min',  step:1 },
    { group:'Vitals (NEWS2)', id:'spo2', kind:'number', label:'SpO₂',       unit:'%',      step:1 },
    { group:'Vitals (NEWS2)', id:'sbp',  kind:'number', label:'Systolic BP', unit:'mmHg',  step:1 },
    { group:'Vitals (NEWS2)', id:'hr',   kind:'number', label:'Heart rate',  unit:'/min',  step:1 },
    { group:'Vitals (NEWS2)', id:'temp', kind:'number', label:'Temperature', unit:'°C',    step:0.1 },

    // ---------- Bloods ----------
    { group:'Bloods', id:'hb',    kind:'number', label:'Haemoglobin',   unit:'g/L',  step:1, note:'Anaemia thresholds: M <130, F <120' },
    { group:'Bloods', id:'mcv',   kind:'number', label:'MCV',          unit:'fL',   step:0.1 },
    { group:'Bloods', id:'plt',   kind:'number', label:'Platelets',    unit:'×10⁹/L', step:1, note:'NG12: ≥400 + symptom = cancer flag' },
    { group:'Bloods', id:'wcc',   kind:'number', label:'WCC',          unit:'×10⁹/L', step:0.1 },
    { group:'Bloods', id:'neut',  kind:'number', label:'Neutrophils',  unit:'×10⁹/L', step:0.1 },
    { group:'Bloods', id:'k',     kind:'number', label:'Potassium',    unit:'mmol/L', step:0.1 },
    { group:'Bloods', id:'na',    kind:'number', label:'Sodium',       unit:'mmol/L', step:1 },
    { group:'Bloods', id:'cr',    kind:'number', label:'Creatinine',   unit:'µmol/L', step:1 },
    { group:'Bloods', id:'ca',    kind:'number', label:'Adjusted Ca²⁺', unit:'mmol/L', step:0.01 },
    { group:'Bloods', id:'crp',   kind:'number', label:'CRP',          unit:'mg/L', step:1 },
    { group:'Bloods', id:'ferritin', kind:'number', label:'Ferritin',  unit:'µg/L', step:1 },
    { group:'Bloods', id:'tsh',   kind:'number', label:'TSH',          unit:'mU/L', step:0.01 },
    { group:'Bloods', id:'glucose', kind:'number', label:'Random glucose', unit:'mmol/L', step:0.1 },
    { group:'Bloods', id:'hba1c', kind:'number', label:'HbA1c',        unit:'mmol/mol', step:1 },
    { group:'Bloods', id:'b12',   kind:'number', label:'Vitamin B12',  unit:'ng/L', step:1 },
    { group:'Bloods', id:'folate',kind:'number', label:'Folate',       unit:'µg/L', step:0.1 },
    { group:'Bloods', id:'vitd',  kind:'number', label:'25-OH Vit D',  unit:'nmol/L', step:1 },
  ],

  defaultMessage: 'No red-flag rules fired — proceed with structured TATT workup (CKS recommends FBC, U&E, LFT, TFT, HbA1c, ferritin, B12/folate, CRP, calcium ± coeliac screen).',

  // -------------- RULES --------------
  // Order doesn't matter — engine sorts by tier rank for the headline.
  rules: [
    // ============ EMERGENCY ============
    {
      id:'shock',
      tier:'emergency',
      label:'Possible shock — SBP <90 or HR >130 with symptoms',
      action:'Call 999 — same-day admission',
      patientPhrase:'"Your blood pressure / heart rate is low/high enough that I need to send you straight to hospital — I\'m going to call an ambulance now."',
      referralTemplate:'EMERGENCY ADMISSION — haemodynamic instability\nVitals: [enter SBP/HR/RR/SpO₂]\nPresenting symptom: tiredness with red-flags as documented.\nNEWS2 calculated and communicated to crew.',
      source:'NEWS2 / NICE NG51 sepsis',
      sourceUrl:'https://www.nice.org.uk/guidance/ng51',
      when: i => (i.sbp != null && i.sbp < 90) || (i.hr != null && i.hr > 130 && (i.altered_consc || i.chest_pain))
    },
    {
      id:'hypoxia',
      tier:'emergency',
      label:'Hypoxia — SpO₂ <92% in air',
      action:'Same-day admission · 999 if symptomatic',
      patientPhrase:'"Your oxygen level is lower than it should be. We need to investigate this in hospital today."',
      referralTemplate:'Acute hypoxia, presenting symptom tiredness.\nSpO₂ [value]% in air. RR [value].\nDifferentials to exclude: PE, pneumonia, decompensated HF, anaemia, sepsis.',
      source:'BTS oxygen guidance',
      when: i => i.spo2 != null && i.spo2 < 92
    },
    {
      id:'severe_hyperk',
      tier:'emergency',
      label:'Severe hyperkalaemia (K⁺ >6.5)',
      action:'Call 999 — risk of arrhythmia',
      patientPhrase:'"Your potassium is dangerously high — I need to send you to hospital straight away for an ECG and treatment."',
      referralTemplate:'Severe hyperkalaemia: K⁺ [value] mmol/L\nAction: ECG immediately if available; admit for IV calcium gluconate + insulin/dextrose.\nReview ACEi/ARB/spiro/K-sparing meds + NSAIDs.',
      source:'Renal Association hyperkalaemia (2023)',
      sourceUrl:'https://ukkidney.org/health-professionals/guidelines',
      when: i => i.k != null && i.k > 6.5
    },
    {
      id:'mod_hyperk',
      tier:'emergency',
      label:'Moderate hyperkalaemia (K⁺ 6.0–6.5)',
      action:'Same-day admission or urgent renal advice',
      patientPhrase:'"Your potassium is high enough to be dangerous. I need to act on this today."',
      referralTemplate:'Hyperkalaemia: K⁺ [value] mmol/L\nECG required. Hold ACEi/ARB/spiro/K-sparing.',
      source:'Renal Association hyperkalaemia',
      when: i => i.k != null && i.k > 6.0 && i.k <= 6.5
    },
    {
      id:'severe_hypoNa',
      tier:'emergency',
      label:'Severe hyponatraemia (Na⁺ <125) — esp. with altered consciousness',
      action:'Same-day admission',
      patientPhrase:'"Your salt level is dangerously low — we need to correct this in hospital."',
      referralTemplate:'Hyponatraemia: Na⁺ [value] mmol/L\nNeurological symptoms: [Y/N]. Stop offending drugs (thiazide, SSRI, carbamazepine).',
      source:'NICE CKS Hyponatraemia',
      sourceUrl:'https://cks.nice.org.uk/topics/hyponatraemia/',
      when: i => (i.na != null && i.na < 125) || (i.na != null && i.na < 130 && i.altered_consc)
    },
    {
      id:'severe_anaemia',
      tier:'emergency',
      label:'Severe anaemia (Hb <70) or symptomatic anaemia (Hb <80 + chest pain/syncope/SOB)',
      action:'Same-day admission for transfusion',
      patientPhrase:'"Your blood count is very low — that\'s why you\'ve been so tired. We need to send you in today to get blood and find out why."',
      referralTemplate:'Severe / symptomatic anaemia.\nHb [value] g/L, MCV [value] fL.\nSymptoms: [chest pain/SOB/syncope].\nRequest: same-day admission, group & save, GI/gynae source workup in hospital.',
      source:'BSH transfusion guidelines',
      when: i => (i.hb != null && i.hb < 70) || (i.hb != null && i.hb < 80 && (i.chest_pain || i.breathlessness || i.syncope))
    },
    {
      id:'neutropenic_sepsis',
      tier:'emergency',
      label:'Neutropenic sepsis risk — neutrophils <1.0 + fever ≥38°C or immunosuppressed',
      action:'Call 999 — neutropenic sepsis pathway',
      patientPhrase:'"Your immune system is dangerously low and you\'ve got a fever — that\'s a medical emergency. I\'m calling an ambulance now."',
      referralTemplate:'? Neutropenic sepsis.\nNeutrophils [value] ×10⁹/L, Temp [value] °C.\nImmunosuppressed: [Y/N].\nNICE NG143: empirical piperacillin/tazobactam within 1 hour of arrival.',
      source:'NICE NG143 neutropenic sepsis',
      sourceUrl:'https://www.nice.org.uk/guidance/ng143',
      when: i => i.neut != null && i.neut < 1.0 && ((i.temp != null && i.temp >= 38) || i.immuno || i.fevers)
    },
    {
      id:'severe_hypercalc',
      tier:'emergency',
      label:'Severe hypercalcaemia (Ca²⁺ >3.0)',
      action:'Same-day admission',
      patientPhrase:'"Your calcium level is very high — we need to send you in today to bring it down safely and look for the cause."',
      referralTemplate:'Severe hypercalcaemia: adjusted Ca²⁺ [value] mmol/L\nAdmit for IV fluids ± bisphosphonate. Investigate cause: malignancy, primary hyperparathyroidism, sarcoid.',
      source:'NICE CKS Hypercalcaemia',
      when: i => i.ca != null && i.ca > 3.0
    },
    {
      id:'dka_risk',
      tier:'emergency',
      label:'Possible DKA — glucose >20 + tiredness, esp. lean / young / weight loss',
      action:'Capillary ketones now · 999 if ≥3 mmol/L or acidotic',
      patientPhrase:'"This pattern can be the start of something called DKA — I need to check your ketones and possibly send you in today."',
      referralTemplate:'? Diabetic ketoacidosis.\nGlucose [value] mmol/L. Weight loss: [Y/N]. Ketones (capillary): pending.\nAvoid metformin alone if T1DM suspected.',
      source:'NICE NG17 / Joint British Diabetes Societies',
      when: i => i.glucose != null && i.glucose > 20
    },

    // ============ SUSPECTED CANCER (2WW) ============
    // NICE NG12 — direct rules
    {
      id:'unexplained_wl',
      tier:'cancer',
      label:'Unexplained weight loss + tiredness ≥60 yrs — consider lung, GI, urological 2WW',
      action:'2-week-wait — chest X-ray + FIT + USS as triage',
      patientPhrase:'"Tiredness with weight loss in your age group needs us to rule out a few things urgently — I\'m going to send some tests and a faster referral. This doesn\'t mean it IS cancer, but we don\'t wait."',
      referralTemplate:'2WW — non-site-specific symptoms (NG12 §1.18)\nAge [value], unexplained weight loss + fatigue.\nBloods: FBC, U&E, LFT, Ca, CRP, ferritin attached.\nCXR ordered. FIT requested. Discuss further imaging at MDT.',
      source:'NICE NG12 §1.18 (non-site-specific)',
      sourceUrl:'https://www.nice.org.uk/guidance/ng12',
      when: i => i.age != null && i.age >= 60 && i.weight_loss
    },
    {
      id:'cancer_thrombocyt',
      tier:'cancer',
      label:'Thrombocytosis (platelets ≥400) + cancer-relevant symptom — consider lung, oesophageal, gastric, colorectal, endometrial, ovarian 2WW',
      action:'2-week-wait + targeted imaging',
      patientPhrase:'"One of your blood markers is raised — combined with your symptoms it\'s a signal we shouldn\'t ignore. I\'d like to send a faster referral to be safe."',
      referralTemplate:'2WW — raised platelets (NG12 §1.5.21)\nPlt [value] ×10⁹/L + [haemoptysis / weight loss / dysphagia / change in bowel habit / PMB / abdominal mass / cough].\nSite-specific 2WW: lung / upper GI / lower GI / gynae as triggered.',
      source:'NICE NG12 §1.5.21 thrombocytosis',
      sourceUrl:'https://www.nice.org.uk/guidance/ng12/chapter/recommendations-organised-by-site-of-cancer',
      when: i => i.plt != null && i.plt >= 400 && (i.weight_loss || i.haemoptysis || i.dysphagia || i.bowel_change || i.pmb || i.abdo_mass || i.cough_3wk)
    },
    {
      id:'cancer_ida_50',
      tier:'cancer',
      label:'Iron-deficiency anaemia ≥50 (men or post-menopausal women) — colorectal 2WW',
      action:'Suspected colorectal cancer pathway — FIT + lower GI 2WW',
      patientPhrase:'"Your blood test shows iron-deficient anaemia. In your age group, the safest thing is to rule out a bowel cause urgently."',
      referralTemplate:'2WW — colorectal cancer (NG12 §1.3.1).\nIDA: Hb [value] g/L, MCV [value] fL, ferritin [value] µg/L.\nFIT requested. Refer regardless of FIT result if IDA + age ≥60.\nDigital rectal exam performed and documented.',
      source:'NICE NG12 §1.3 colorectal',
      sourceUrl:'https://www.nice.org.uk/guidance/ng12',
      when: i => i.age != null && i.age >= 50 && i.hb != null && i.hb < 120 && i.ferritin != null && i.ferritin < 30
    },
    {
      id:'cancer_haematuria',
      tier:'cancer',
      label:'Visible haematuria ≥45 — bladder/renal 2WW',
      action:'Urological 2WW',
      patientPhrase:'"Blood in your urine at your age has to be referred quickly to rule out a problem in the bladder or kidneys."',
      referralTemplate:'2WW — urological cancer (NG12 §1.6.1)\nAge [value], visible haematuria. UTI excluded: [Y/N].\nU&E, eGFR attached.',
      source:'NICE NG12 §1.6 urological',
      when: i => i.age != null && i.age >= 45 && i.haematuria
    },
    {
      id:'cancer_pr_bleed_50',
      tier:'cancer',
      label:'Rectal bleeding ≥50 — colorectal 2WW',
      action:'Lower GI 2WW',
      patientPhrase:'"At your age, rectal bleeding always needs to be referred urgently — this is standard, not a sign anything terrible has been found."',
      referralTemplate:'2WW — colorectal cancer (NG12 §1.3.2).\nAge [value], rectal bleeding. Bowel habit change: [Y/N].',
      source:'NICE NG12 §1.3 colorectal',
      when: i => i.age != null && i.age >= 50 && i.pr_bleed
    },
    {
      id:'cancer_bowel_change_60',
      tier:'cancer',
      label:'Change in bowel habit ≥60 (or ≥50 with anaemia / bleeding) — colorectal 2WW',
      action:'Lower GI 2WW',
      patientPhrase:'"A change in your bowel pattern at this age needs a faster referral to rule out a bowel cause."',
      referralTemplate:'2WW — colorectal cancer.\nAge [value], persistent bowel-habit change.\nFIT result if available.',
      source:'NICE NG12 §1.3 colorectal',
      when: i => i.age != null && i.bowel_change && (i.age >= 60 || (i.age >= 50 && (i.pr_bleed || (i.hb != null && i.hb < 120))))
    },
    {
      id:'cancer_haemoptysis',
      tier:'cancer',
      label:'Haemoptysis ≥40 — urgent CXR + suspected lung cancer 2WW',
      action:'Urgent CXR (≤2 weeks) ± lung 2WW',
      patientPhrase:'"Coughing up blood at your age has to be checked urgently — I\'m organising a fast chest X-ray, and a respiratory clinic visit as well."',
      referralTemplate:'2WW — lung cancer (NG12 §1.1).\nAge [value], haemoptysis. Smoker: [Y/N]. Weight loss: [Y/N].\nUrgent CXR ordered.',
      source:'NICE NG12 §1.1 lung',
      when: i => i.age != null && i.age >= 40 && i.haemoptysis
    },
    {
      id:'cancer_cough_smoker',
      tier:'cancer',
      label:'Cough/hoarseness >3 weeks ≥40 + smoker — consider lung 2WW',
      action:'Urgent CXR (≤2 weeks)',
      patientPhrase:'"A cough that\'s lasted this long in someone who smokes is something we have to check with an X-ray quickly."',
      referralTemplate:'Urgent CXR (NG12 §1.1) — suspected lung cancer.\nAge [value], cough/hoarseness >3 weeks, smoker.',
      source:'NICE NG12 §1.1 lung',
      when: i => i.age != null && i.age >= 40 && i.cough_3wk && i.smoker
    },
    {
      id:'cancer_dysphagia',
      tier:'cancer',
      label:'Progressive dysphagia — upper GI 2WW',
      action:'Upper GI 2WW (≤2 weeks)',
      patientPhrase:'"Difficulty swallowing always needs an urgent referral to look at the food pipe."',
      referralTemplate:'2WW — upper GI cancer (NG12 §1.2.1).\nProgressive dysphagia.\nWeight loss: [Y/N], reflux: [Y/N].',
      source:'NICE NG12 §1.2 upper GI',
      when: i => i.dysphagia
    },
    {
      id:'cancer_pmb',
      tier:'cancer',
      label:'Post-menopausal bleeding — endometrial 2WW',
      action:'Gynae 2WW (TVUSS in 2 weeks)',
      patientPhrase:'"Any bleeding after the menopause has to be referred urgently — even though most causes turn out to be benign."',
      referralTemplate:'2WW — endometrial cancer (NG12 §1.7.4).\nPMB, on HRT: [Y/N], anticoagulant: [Y/N].',
      source:'NICE NG12 §1.7 gynaecological',
      when: i => i.pmb
    },
    {
      id:'cancer_abdo_mass',
      tier:'cancer',
      label:'Unexplained abdominal / pelvic / breast mass — site-specific 2WW',
      action:'Site-specific 2WW + USS',
      patientPhrase:'"This lump needs a specialist look quickly — I\'m going to refer you on a fast pathway."',
      referralTemplate:'2WW — site-specific cancer (NG12).\nMass location: [abdominal / pelvic / breast / testicular].\nAge [value], duration [value], FH cancer: [Y/N].',
      source:'NICE NG12 (multiple sites)',
      when: i => i.abdo_mass
    },
    {
      id:'cancer_lymph_node',
      tier:'cancer',
      label:'Persistent unexplained lymphadenopathy >6 weeks — haematological 2WW',
      action:'Haematology 2WW (NG12 §1.10)',
      patientPhrase:'"This swollen gland has been there too long without an obvious cause — I\'d like a specialist to look at it quickly."',
      referralTemplate:'2WW — haematological cancer (NG12 §1.10).\nLymphadenopathy >6 weeks, site [neck/axilla/groin], size [cm].\nB-symptoms: weight loss [Y/N], night sweats [Y/N], fevers [Y/N].\nFBC + film + LDH attached.',
      source:'NICE NG12 §1.10 haematological',
      when: i => i.lymph_node
    },
    {
      id:'cancer_b_sx',
      tier:'cancer',
      label:'B-symptoms (fevers / night sweats / weight loss) — consider haematological 2WW',
      action:'Haematology 2WW + urgent FBC + film',
      patientPhrase:'"This combination of symptoms can occasionally point to a problem in the blood cells — I want a specialist to rule it out."',
      referralTemplate:'2WW — suspected lymphoma / haematological cancer.\nFevers + drenching night sweats + weight loss.\nFBC, film, LDH, urgent CXR.',
      source:'NICE NG12 §1.10 haematological',
      when: i => (i.fevers && i.weight_loss) || (i.lymph_node && i.weight_loss)
    },
    {
      id:'cancer_bone_pain',
      tier:'cancer',
      label:'Unexplained bone pain + anaemia / hypercalcaemia — consider myeloma',
      action:'Urgent myeloma screen (FBC, ESR, plasma viscosity, Ca, U&E, immunoglobulins, electrophoresis, Bence-Jones) — refer ≤2 weeks',
      patientPhrase:'"Tiredness with bone pain and these blood changes can sometimes mean a blood-cell problem called myeloma — I\'ll send some blood tests and a fast referral."',
      referralTemplate:'2WW — suspected myeloma (NG12 §1.10.5).\nBone pain + anaemia (Hb [value]) ± hypercalcaemia (Ca [value]).\nMyeloma screen sent.',
      source:'NICE NG12 §1.10.5 myeloma',
      when: i => i.bone_pain && ((i.hb != null && i.hb < 120) || (i.ca != null && i.ca > 2.6))
    },
    {
      id:'cancer_pancytopenia',
      tier:'cancer',
      label:'Pancytopenia (Hb low + Plt low + WCC low) — consider acute leukaemia / aplastic anaemia',
      action:'Same-day haematology phone advice — likely admission',
      patientPhrase:'"Several of your blood lines are very low — that needs an urgent specialist opinion today, not in a few weeks."',
      referralTemplate:'Pancytopenia — urgent haematology.\nHb [value] g/L, WCC [value], Plt [value]. Petechiae: [Y/N], fevers: [Y/N].\nFilm + reticulocytes + LDH + urgent haematology call.',
      source:'NICE NG12 §1.10 + BSH',
      when: i => i.hb != null && i.hb < 100 && i.plt != null && i.plt < 100 && i.wcc != null && i.wcc < 3.5
    },
    {
      id:'cancer_easy_bruise',
      tier:'cancer',
      label:'Bruising / petechiae + isolated thrombocytopenia (Plt <50)',
      action:'Same-day haematology referral',
      patientPhrase:'"Your platelets are low enough to cause bleeding — we need a specialist to look at why today."',
      referralTemplate:'? Acute leukaemia / ITP.\nPlt [value], petechiae/bruising [Y/N].\nNo recent infection / drug cause.',
      source:'NICE NG12 §1.10 + BSH',
      when: i => i.bruising && i.plt != null && i.plt < 50
    },

    // ============ URGENT (NON-CANCER) ============
    {
      id:'mod_anaemia',
      tier:'urgent',
      label:'Moderate anaemia (Hb 70–100) without emergency features — urgent workup',
      action:'Urgent: identify source, iron studies, treat cause; transfuse if symptomatic',
      patientPhrase:'"Your blood count is low. We need to find the cause urgently — that\'s what\'s been making you tired."',
      referralTemplate:'Urgent anaemia workup.\nHb [value] g/L, MCV [value] fL, ferritin [value] µg/L, B12 [value], folate [value].\nIron-deficient: yes/no. Stool, gynae history, dietary review.',
      source:'CKS Anaemia',
      when: i => i.hb != null && i.hb >= 70 && i.hb < 100 && !(i.chest_pain || i.breathlessness || i.syncope)
    },
    {
      id:'aki_creatinine',
      tier:'urgent',
      label:'Likely AKI — creatinine markedly raised',
      action:'Same-day repeat + medication review; refer renal if not improving',
      patientPhrase:'"Your kidney function has dropped — we need to act fast: review medications, fluid, and recheck blood tests."',
      referralTemplate:'? AKI.\nCreatinine [value] µmol/L (baseline ?), K⁺ [value], drug review (ACEi/ARB/diuretic/NSAID).\nFluid status, urine output, ACR.',
      source:'NICE CG169 AKI',
      sourceUrl:'https://www.nice.org.uk/guidance/cg169',
      when: i => i.cr != null && i.cr > 200
    },
    {
      id:'severe_hypothyroid',
      tier:'urgent',
      label:'Profound hypothyroidism (TSH >20)',
      action:'Start levothyroxine + urgent endocrinology if myxoedema features',
      patientPhrase:'"Your thyroid is very underactive — that explains a lot of the tiredness. We\'ll start treatment now and recheck soon."',
      referralTemplate:'Profound hypothyroidism.\nTSH [value] mU/L, fT4 pending.\nLevothyroxine 25–50 mcg OD started; repeat TFTs 6–8 weeks.\nRefer endocrinology if elderly, IHD, myxoedema.',
      source:'NICE NG145 thyroid disease',
      sourceUrl:'https://www.nice.org.uk/guidance/ng145',
      when: i => i.tsh != null && i.tsh > 20
    },
    {
      id:'mod_hypoNa',
      tier:'urgent',
      label:'Moderate hyponatraemia (Na⁺ 125–129)',
      action:'Urgent same-day review, fluid + drug review',
      patientPhrase:'"Your salt level is low. We need to look at why and what medications could be contributing."',
      referralTemplate:'Hyponatraemia: Na⁺ [value].\nMedication review (thiazide / SSRI / carbamazepine / PPI). Volume status. Paired serum + urine osmolality if cause unclear.',
      source:'CKS Hyponatraemia',
      when: i => i.na != null && i.na >= 125 && i.na < 130
    },
    {
      id:'mod_hypercalc',
      tier:'urgent',
      label:'Moderate hypercalcaemia (Ca²⁺ 2.6–3.0)',
      action:'Urgent: PTH, vitamin D, myeloma screen, malignancy review',
      patientPhrase:'"Your calcium is high — there are a few causes and we need to investigate them quickly."',
      referralTemplate:'Hypercalcaemia: adjusted Ca²⁺ [value].\nDiff: malignancy (myeloma, bone mets), primary hyperparathyroidism, sarcoid, thiazide, vit D toxicity.\nSent: PTH, vit D, myeloma screen, CXR.',
      source:'NICE CKS Hypercalcaemia',
      when: i => i.ca != null && i.ca >= 2.6 && i.ca <= 3.0
    },
    {
      id:'pregnancy_first',
      tier:'urgent',
      label:'Pregnant — booking + medication review now',
      action:'Same-week midwife booking; stop teratogenic meds',
      patientPhrase:'"Tiredness is very normal in pregnancy — we just need to make sure your bloods are okay and your medications are safe."',
      referralTemplate:'Pregnant patient — antenatal booking referral.\nMedication review: stop ACEi/ARB, SGLT2/GLP-1, statin, isotretinoin, methotrexate, warfarin etc.\nFBC + ferritin + TFT + booking bloods. Folic acid 400 mcg (5 mg if DM/BMI≥30/AED).',
      source:'NICE NG201 antenatal care',
      sourceUrl:'https://www.nice.org.uk/guidance/ng201',
      when: i => i.preg
    },
    {
      id:'undiag_diabetes',
      tier:'urgent',
      label:'New diabetes likely (HbA1c ≥48 or random glucose ≥11.1)',
      action:'Confirm Dx · same-week review · safety-net DKA in lean/young',
      patientPhrase:'"This looks like diabetes. We\'ll confirm it and start a clear plan together — don\'t worry, this is very manageable."',
      referralTemplate:'? New T2DM.\nHbA1c [value] mmol/mol / random glucose [value].\nIf asymptomatic — repeat HbA1c. If symptoms + weight loss + lean — same-day urinary ketones (rule out T1DM/DKA).\nBaseline: lipids, U&E, ACR, BP, eyes, foot.',
      source:'NICE NG28 / NG17',
      when: i => (i.hba1c != null && i.hba1c >= 48) || (i.glucose != null && i.glucose >= 11.1 && i.glucose <= 20)
    },
    {
      id:'severe_b12',
      tier:'urgent',
      label:'Severe B12 deficiency (B12 <100 ng/L) or B12 + neurology',
      action:'Start IM hydroxocobalamin loading; urgent if neurological signs',
      patientPhrase:'"Your B12 is very low — that\'s a fixable cause of tiredness. We\'ll start an injection straight away."',
      referralTemplate:'B12 deficiency.\nB12 [value] ng/L, MCV [value], IF antibody pending.\nHydroxocobalamin 1 mg IM alternate days × 6 (or daily if neurology).\nIf neurology — refer same-week.',
      source:'BSH B12/folate guidelines · BNF',
      when: i => i.b12 != null && i.b12 < 100
    },
    {
      id:'symptomatic_inf',
      tier:'urgent',
      label:'Possible sepsis — fevers + tachycardia + tachypnoea (NEWS2 ≥5)',
      action:'Same-day senior review / admission per local sepsis pathway',
      patientPhrase:'"You\'ve got signs that suggest a serious infection. I need to send you in to be checked properly today."',
      referralTemplate:'? Sepsis — NICE NG51.\nNEWS2: HR [value], RR [value], SpO₂ [value], Temp [value], SBP [value], AVPU [value].\nSource: [?]. Blood cultures + lactate on arrival.',
      source:'NICE NG51 sepsis',
      sourceUrl:'https://www.nice.org.uk/guidance/ng51',
      when: i => i.fevers && i.hr != null && i.hr > 110 && i.rr != null && i.rr > 22
    },

    // ============ ROUTINE — common explanatory findings ============
    {
      id:'mild_anaemia',
      tier:'routine',
      label:'Mild anaemia (Hb 100–120) — work up cause',
      action:'Routine: full iron studies, B12/folate, coeliac, dietary review',
      patientPhrase:'"Your blood count is mildly low — this often explains tiredness. We\'ll work out which type of anaemia and treat it."',
      referralTemplate:'Mild anaemia, no red flags.\nHb [value], MCV [value], ferritin [value], B12 [value], folate [value].\nIf IDA + <50 yrs F + menorrhagia — treat + dietary advice. If unclear cause or ≥60 — escalate.',
      source:'CKS Anaemia',
      when: i => i.hb != null && i.hb >= 100 && i.hb < 120 && i.age != null && (i.age < 60 || (!i.weight_loss && !i.bowel_change && !i.pr_bleed))
    },
    {
      id:'subclin_hypothyroid',
      tier:'routine',
      label:'Subclinical hypothyroidism (TSH 4.5–10) — review',
      action:'Repeat TFTs in 3 months · TPO antibodies · treat if symptomatic, planning pregnancy, or TSH >10',
      patientPhrase:'"Your thyroid is mildly underactive. We\'ll repeat the test and decide whether starting treatment is right for you."',
      referralTemplate:'Subclinical hypothyroidism.\nTSH [value] mU/L, fT4 normal. TPO Ab pending.\nRepeat 3/12. Consider starting levothyroxine if symptomatic, pregnant/planning, or TSH >10.',
      source:'NICE NG145',
      when: i => i.tsh != null && i.tsh > 4.5 && i.tsh <= 10
    },
    {
      id:'low_b12',
      tier:'routine',
      label:'Mild B12 deficiency (100–200 ng/L)',
      action:'Routine: oral cyanocobalamin trial OR IM if absorption concerns, recheck',
      patientPhrase:'"Your B12 is on the low side. We\'ll top it up and recheck."',
      referralTemplate:'Mild B12 deficiency.\nB12 [value]. Dietary review (vegan/vegetarian, alcohol).\nCyanocobalamin 50 mcg OD oral × 1 month or IM if absorption concern.',
      source:'BSH B12 / BNF',
      when: i => i.b12 != null && i.b12 >= 100 && i.b12 < 200
    },
    {
      id:'low_vitd',
      tier:'routine',
      label:'Vitamin D deficiency (<25 nmol/L)',
      action:'Loading regimen + maintenance · check Ca²⁺',
      patientPhrase:'"Your vitamin D is low — we\'ll give you a loading dose, then a daily supplement to keep it topped up."',
      referralTemplate:'Vitamin D deficient — 25-OH [value] nmol/L.\nLoading: colecalciferol 50,000 IU weekly × 6 OR 20,000 IU twice weekly × 7. Maintenance 800–2000 IU OD.',
      source:'NOS / BNF',
      when: i => i.vitd != null && i.vitd < 25
    },
    {
      id:'prediabetes',
      tier:'routine',
      label:'Pre-diabetes (HbA1c 42–47)',
      action:'NHS Diabetes Prevention Programme · lifestyle · annual HbA1c',
      patientPhrase:'"You\'re not diabetic — but you\'re in a window where we can prevent it. There\'s an NHS programme that helps with this."',
      referralTemplate:'Pre-diabetes.\nHbA1c [value] mmol/mol. Refer NHS DPP, BMI / BP / lipids documented, lifestyle plan, annual HbA1c.',
      source:'NICE NG28 / NHS DPP',
      when: i => i.hba1c != null && i.hba1c >= 42 && i.hba1c < 48
    },
  ],

  sources: [
    { label:'NICE NG12 — Suspected cancer: recognition and referral', url:'https://www.nice.org.uk/guidance/ng12' },
    { label:'Macmillan Rapid Referral Guidelines', url:'https://www.macmillan.org.uk/healthcare-professionals/cancer-pathways/prevention-and-diagnosis/rapid-referral-guidelines' },
    { label:'NICE CKS — Tiredness / Fatigue', url:'https://cks.nice.org.uk/topics/tiredness-fatigue/' },
    { label:'NICE NG51 — Sepsis', url:'https://www.nice.org.uk/guidance/ng51' },
    { label:'NICE NG143 — Neutropenic sepsis', url:'https://www.nice.org.uk/guidance/ng143' },
    { label:'NICE NG145 — Thyroid disease', url:'https://www.nice.org.uk/guidance/ng145' },
    { label:'NICE CG169 — Acute kidney injury', url:'https://www.nice.org.uk/guidance/cg169' },
    { label:'NICE NG28 — Type 2 diabetes', url:'https://www.nice.org.uk/guidance/ng28' },
    { label:'Royal Marsden / BSH — Haematology referral pathways', url:'https://b-s-h.org.uk/guidelines/' },
  ],
});
