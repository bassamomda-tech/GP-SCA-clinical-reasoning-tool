/* ============================================
   Diagnostic Tool pack — Haematospermia
   Shared-id triage + differential. CKS · EAU · NICE NG12.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'anticoag', kind: 'check', label: 'On anticoagulant' },
    { group: 'Demographics & context', id: 'recent_procedure', kind: 'check', label: 'Recent prostate biopsy / instrumentation / vasectomy' },

    { group: 'Pattern', id: 'single_young', kind: 'check', label: 'Single / few episodes, age <40, otherwise well' },
    { group: 'Pattern', id: 'persistent', kind: 'check', label: 'Persistent / recurrent (≥1 month)' },

    { group: 'Associated', id: 'infection_sx', kind: 'check', label: 'Dysuria / discharge / STI risk / prostatitis symptoms' },
    { group: 'Associated', id: 'luts_prostate', kind: 'check', label: 'LUTS / abnormal prostate / raised PSA' },
    { group: 'Associated', id: 'haematuria', kind: 'check', label: 'Haematuria' },

    { group: 'Red flags', id: 'over40_persistent', kind: 'check', label: 'Age ≥40 with persistent haematospermia' },
    { group: 'Red flags', id: 'systemic', kind: 'check', label: 'Weight loss / bone pain / hard prostate' },
  ];

  if (window.RGPTriage) RGPTriage.register('haematospermia-triage', {
    title: 'Haematospermia — triage',
    subtitle: 'Tick features. Reassure the young/transient; surfaces urology referral and prostate-cancer pathways.',
    guideline: 'CKS · EAU · NICE NG12',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Examine (BP, genital + PR), urine dip/STI screen, PSA if ≥40 after counselling; reassure isolated episodes in younger men.',
    rules: [
      {
        id: 'prostate_2ww', tier: 'cancer',
        label: 'Hard prostate / raised PSA / weight loss — suspected prostate cancer',
        action: 'Urology 2WW (NICE NG12).',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.systemic || i.luts_prostate,
      },
      {
        id: 'urology', tier: 'urgent',
        label: 'Age ≥40 with persistent haematospermia, or haematuria',
        action: 'Refer urology — examination, PSA, ± TRUS/MRI to exclude prostate/seminal-vesicle pathology.',
        source: 'EAU',
        when: i => i.over40_persistent || (i.age != null && i.age >= 40 && i.persistent) || i.haematuria,
      },
      {
        id: 'infection', tier: 'urgent',
        label: 'Infective cause (prostatitis / STI)',
        action: 'Urine + STI screen; treat; reassess.',
        source: 'CKS',
        when: i => i.infection_sx,
      },
      {
        id: 'reassure', tier: 'routine',
        label: 'Isolated haematospermia, young, no red flags',
        action: 'Reassure (usually benign/self-limiting); safety-net to return if persistent or red flags.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Haematospermia', url: 'https://cks.nice.org.uk/topics/scrotal-pain-swelling/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('haematospermia-dx', {
    title: 'Haematospermia — differential',
    subtitle: 'Usually benign in younger men. The engine weights idiopathic, infective and procedure-related causes, and surfaces prostate malignancy when red flags fire.',
    guideline: 'CKS · EAU',
    patientPresenting: "I noticed blood in my semen, doctor — it really worried me.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'idiopathic', name: 'Idiopathic / benign', summary: 'Young, isolated episodes, normal exam', baseline: 11, category: 'common',
        keyExam: 'Normal genital + PR exam.', nextIx: 'Reassure; usually self-limiting; safety-net.',
        patientPhrase: 'In younger men this is almost always harmless and settles on its own — but we examine to be sure.',
        ciksUrl: 'https://cks.nice.org.uk/topics/scrotal-pain-swelling/' },
      { id: 'infection', name: 'Prostatitis / seminal-vesicle infection / STI', summary: 'Dysuria, discharge, perineal pain', baseline: 6, category: 'common',
        keyExam: 'Tender prostate; STI signs.', nextIx: 'Urine + STI screen; antibiotics; reassess.',
        patientPhrase: 'An infection of the prostate or related glands can cause this. Treatment usually clears it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/prostatitis-acute/' },
      { id: 'procedure', name: 'Post-procedure / anticoagulant', summary: 'Recent biopsy/instrumentation or on anticoagulant', baseline: 4, category: 'less-common',
        keyExam: 'History.', nextIx: 'Reassure; resolves; review anticoagulation only if clinically indicated.',
        patientPhrase: 'A recent procedure or blood thinner explains this. It typically settles by itself.',
        ciksUrl: 'https://cks.nice.org.uk/topics/scrotal-pain-swelling/' },

      { id: 'prostate_cancer', name: 'Prostate / GU malignancy', summary: 'Age ≥40 persistent, hard prostate, raised PSA, weight loss', baseline: 1, category: 'cant-miss',
        keyExam: 'Hard nodular prostate.', nextIx: '\u26A1 PSA + urology 2WW; mpMRI ± biopsy (NICE NG12).',
        patientPhrase: 'Persistent blood at your age warrants an urgent specialist check of the prostate — most prove benign.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 PSA + urology 2WW' },
    ],
    effects: {
      age: (v) => v == null ? {} : (v < 40 ? { idiopathic: +12, prostate_cancer: -4 } : { prostate_cancer: +6 }),
      anticoag: { procedure: +14 },
      recent_procedure: { procedure: +20 },

      single_young: { idiopathic: +16 },
      persistent: { prostate_cancer: +6, infection: +2 },

      infection_sx: { infection: +20 },
      luts_prostate: { prostate_cancer: +18 },
      haematuria: { prostate_cancer: +8 },

      over40_persistent: { prostate_cancer: +16 },
      systemic: { prostate_cancer: +20 },
    },
    askAbout: {
      idiopathic: ['single_young'],
      infection: ['infection_sx'],
      procedure: ['recent_procedure', 'anticoag'],
      prostate_cancer: ['over40_persistent', 'luts_prostate', 'systemic'],
    },
    sources: [
      { label: 'NICE CKS — Scrotal pain & swelling', url: 'https://cks.nice.org.uk/topics/scrotal-pain-swelling/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'haematospermia', label: 'Haematospermia', triage: 'haematospermia-triage', dx: 'haematospermia-dx' }
  );
})();
