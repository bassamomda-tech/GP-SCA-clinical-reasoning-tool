/* ============================================
   Diagnostic Tool pack — LUTS in Men
   Shared-id triage + differential. NICE NG97 · NICE NG12 · CKS LUTS.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },

    { group: 'Symptom type', id: 'voiding', kind: 'check', label: 'Voiding: hesitancy, weak stream, straining, dribbling' },
    { group: 'Symptom type', id: 'storage', kind: 'check', label: 'Storage: frequency, urgency, nocturia' },
    { group: 'Symptom type', id: 'incontinence', kind: 'check', label: 'Urgency incontinence' },

    { group: 'Examination / tests', id: 'enlarged_smooth', kind: 'check', label: 'PR: enlarged, smooth prostate' },
    { group: 'Examination / tests', id: 'hard_nodular', kind: 'check', label: 'PR: hard / craggy / nodular prostate' },
    { group: 'Examination / tests', id: 'psa_raised', kind: 'check', label: 'PSA raised for age' },
    { group: 'Examination / tests', id: 'dysuria', kind: 'check', label: 'Dysuria / cloudy urine (infection)' },
    { group: 'Examination / tests', id: 'polyuria_glucose', kind: 'check', label: 'Polyuria + thirst (diabetes / polyuria)' },

    { group: 'Red flags', id: 'haematuria', kind: 'check', label: 'Visible haematuria' },
    { group: 'Red flags', id: 'bone_pain_wl', kind: 'check', label: 'Bone pain / weight loss' },
    { group: 'Red flags', id: 'retention', kind: 'check', label: 'Acute retention / palpable bladder, or chronic retention + renal impairment' },
  ];

  if (window.RGPTriage) RGPTriage.register('luts-men-triage', {
    title: 'LUTS in men — triage',
    subtitle: 'Tick features. Surfaces retention, prostate-cancer 2WW and infection pathways.',
    guideline: 'NICE NG97 · NG12',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Assess with IPSS, urine dip, PR exam, U&E and PSA (after counselling); manage by predominant symptom (conservative → alpha-blocker / 5-ARI / antimuscarinic).',
    rules: [
      {
        id: 'retention', tier: 'emergency',
        label: 'Acute urinary retention, or chronic retention with renal impairment',
        action: 'Catheterise (same-day); acute retention → urology; check U&E for obstructive AKI.',
        patientPhrase: '"Your bladder is not emptying — we need to relieve it today and check the kidneys."',
        source: 'NICE NG97',
        when: i => i.retention,
      },
      {
        id: 'prostate_2ww', tier: 'cancer',
        label: 'Suspected prostate cancer — hard/nodular prostate or raised PSA, or bone pain/weight loss',
        action: 'Urology 2WW (NICE NG12).',
        patientPhrase: '"The prostate findings mean I want a specialist to assess this quickly to be safe."',
        source: 'NICE NG12 §1.6', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.hard_nodular || i.psa_raised || i.bone_pain_wl,
      },
      {
        id: 'haematuria_2ww', tier: 'cancer',
        label: 'Visible haematuria ≥45 — urological 2WW',
        action: 'Urology 2WW (bladder cancer pathway).',
        source: 'NICE NG12 §1.6',
        when: i => i.haematuria && i.age != null && i.age >= 45,
      },
      {
        id: 'infection', tier: 'urgent',
        label: 'UTI / prostatitis',
        action: 'Urine culture; treat; reassess LUTS after treatment.',
        source: 'CKS',
        when: i => i.dysuria,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'Uncomplicated LUTS — assess & manage by symptom',
        action: 'IPSS, frequency-volume chart; lifestyle; alpha-blocker (voiding), antimuscarinic (storage), 5-ARI if large prostate.',
        source: 'NICE NG97',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG97 — LUTS in men', url: 'https://www.nice.org.uk/guidance/cg97' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('luts-men-dx', {
    title: 'LUTS in men — differential',
    subtitle: 'The engine weights BPH, overactive bladder, prostatitis/UTI and polyuria, and always surfaces prostate cancer and retention when triggered.',
    guideline: 'NICE NG97 · CKS',
    patientPresenting: "I'm up several times a night to pass water, doctor, and my stream isn't what it was.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'bph', name: 'Benign prostatic enlargement', summary: 'Voiding symptoms + smooth enlarged prostate, older man', baseline: 12, category: 'common',
        keyExam: 'Smooth enlarged prostate; check bladder for residual.', nextIx: 'IPSS, urine dip, U&E, PSA after counselling; alpha-blocker ± 5-ARI.',
        patientPhrase: 'The prostate enlarges with age and restricts flow. Medication usually improves the symptoms well.',
        ciksUrl: 'https://cks.nice.org.uk/topics/luts-in-men/', caseLink: '../cases/male-luts.html' },
      { id: 'oab', name: 'Overactive bladder', summary: 'Storage symptoms: urgency, frequency, nocturia ± urge incontinence', baseline: 7, category: 'common',
        keyExam: 'Often normal.', nextIx: 'Bladder diary; bladder training; antimuscarinic / mirabegron.',
        patientPhrase: 'The bladder muscle is overactive, causing urgency. Bladder training and medication help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/luts-in-men/' },
      { id: 'uti_prostatitis', name: 'UTI / prostatitis', summary: 'Dysuria, cloudy urine, perineal pain', baseline: 4, category: 'common',
        keyExam: 'Tender prostate (prostatitis); dip positive.', nextIx: 'Urine culture; antibiotics; reassess.',
        patientPhrase: 'An infection can cause these urinary symptoms. Antibiotics treat it and we reassess afterwards.',
        ciksUrl: 'https://cks.nice.org.uk/topics/prostatitis-acute/' },
      { id: 'polyuria', name: 'Polyuria (diabetes / diabetes insipidus / diuretic)', summary: 'Large volumes, thirst', baseline: 3, category: 'less-common',
        keyExam: 'Hydration; glucose.', nextIx: 'Glucose/HbA1c, U&E; treat cause; review evening fluids/diuretic.',
        patientPhrase: 'You may simply be producing more urine — we check for diabetes and review fluids and medication.',
        ciksUrl: 'https://cks.nice.org.uk/topics/luts-in-men/' },

      { id: 'prostate_cancer', name: 'Prostate cancer', summary: 'Hard/nodular prostate, raised PSA, bone pain / weight loss', baseline: 1, category: 'cant-miss',
        keyExam: 'Hard craggy asymmetric prostate, bone tenderness.', nextIx: '\u26A1 Urology 2WW; PSA, mpMRI ± biopsy (NICE NG12).',
        patientPhrase: 'The prostate findings need an urgent specialist assessment to exclude cancer — many turn out benign.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Urology 2WW' },
      { id: 'retention', name: 'Urinary retention', summary: 'Acute or chronic, palpable bladder ± renal impairment', baseline: 1, category: 'cant-miss',
        keyExam: 'Palpable distended bladder.', nextIx: '\u26A1 Catheterise; U&E for obstructive AKI; urology.',
        patientPhrase: 'The bladder is not emptying properly — we relieve it and protect the kidneys.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg97', redFlagAction: '\u26A1 Catheterise + U&E' },
    ],
    effects: {
      age: (v) => v >= 60 ? { bph: +6, prostate_cancer: +3 } : {},

      voiding: { bph: +18, retention: +2 },
      storage: { oab: +18 },
      incontinence: { oab: +12 },

      enlarged_smooth: { bph: +16, prostate_cancer: -6 },
      hard_nodular: { prostate_cancer: +28 },
      psa_raised: { prostate_cancer: +18 },
      dysuria: { uti_prostatitis: +20 },
      polyuria_glucose: { polyuria: +20 },

      haematuria: { prostate_cancer: +6 },
      bone_pain_wl: { prostate_cancer: +18 },
      retention: { retention: +26 },
    },
    askAbout: {
      bph: ['voiding', 'enlarged_smooth'],
      oab: ['storage', 'incontinence'],
      uti_prostatitis: ['dysuria'],
      polyuria: ['polyuria_glucose'],
      prostate_cancer: ['hard_nodular', 'psa_raised', 'bone_pain_wl'],
      retention: ['retention'],
    },
    sources: [
      { label: 'NICE CG97 — LUTS in men', url: 'https://www.nice.org.uk/guidance/cg97' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'luts-men', label: 'LUTS in men', triage: 'luts-men-triage', dx: 'luts-men-dx' }
  );
})();
