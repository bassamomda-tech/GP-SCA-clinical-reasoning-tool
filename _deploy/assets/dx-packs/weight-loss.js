/* ============================================
   Diagnostic Tool pack — Unintentional Weight Loss
   Shared-id triage + differential. NICE NG12 · CKS.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Quantify', id: 'significant', kind: 'check', label: 'Unintentional loss >5% in 6 months / clothes looser' },

    { group: 'Cancer red flags', id: 'site_symptom', kind: 'check', label: 'Site-specific symptom (haemoptysis, dysphagia, rectal bleeding, PMB, mass, jaundice)' },
    { group: 'Cancer red flags', id: 'systemic_b', kind: 'check', label: 'Night sweats / lymphadenopathy / bone pain' },

    { group: 'Metabolic clues', id: 'thyroid_sx', kind: 'check', label: 'Heat intolerance / tremor / palpitations (hyperthyroid)' },
    { group: 'Metabolic clues', id: 'diabetes_sx', kind: 'check', label: 'Polyuria / polydipsia / thirst (diabetes)' },
    { group: 'GI clues', id: 'malabsorption', kind: 'check', label: 'Diarrhoea / steatorrhoea / abdominal symptoms (malabsorption/coeliac)' },

    { group: 'Psychosocial', id: 'mood_appetite', kind: 'check', label: 'Low mood / poor appetite / social isolation' },
    { group: 'Psychosocial', id: 'eating_disorder', kind: 'check', label: 'Body-image concerns / restriction / purging (eating disorder)' },
    { group: 'Other', id: 'chronic_disease', kind: 'check', label: 'Known chronic disease (COPD, HF, CKD, IBD) / frailty' },
  ];

  if (window.RGPTriage) RGPTriage.register('weight-loss-triage', {
    title: 'Unintentional weight loss — triage',
    subtitle: 'Tick features. Surfaces site-specific and non-site-specific cancer pathways (NICE NG12).',
    guideline: 'NICE NG12 · CKS',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Confirm and quantify loss; baseline bloods (FBC, U&E, LFT, calcium, glucose/HbA1c, TFT, CRP, coeliac, ferritin) + urinalysis + CXR; targeted exam; review at 1–2 weeks.',
    rules: [
      {
        id: 'site_2ww', tier: 'cancer',
        label: 'Weight loss + site-specific symptom — site-specific 2WW',
        action: 'Refer per symptom (lung / upper & lower GI / gynae / urological) — NICE NG12.',
        patientPhrase: '"Weight loss with this symptom needs a faster referral to rule out a serious cause."',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.site_symptom,
      },
      {
        id: 'nonspecific_2ww', tier: 'cancer',
        label: 'Unexplained weight loss ≥60, or with systemic B-symptoms — non-site-specific 2WW',
        action: 'CXR, FIT, bloods; non-site-specific symptoms pathway / haematology if B-symptoms.',
        source: 'NICE NG12 §1.18',
        when: i => (i.age != null && i.age >= 60 && i.significant) || i.systemic_b,
      },
      {
        id: 'endocrine', tier: 'urgent',
        label: 'Hyperthyroidism / new diabetes',
        action: 'TFT / HbA1c-glucose; treat; safety-net DKA if lean + ketotic.',
        source: 'CKS',
        when: i => i.thyroid_sx || i.diabetes_sx,
      },
      {
        id: 'eating_disorder', tier: 'urgent',
        label: 'Possible eating disorder',
        action: 'Risk assess (MEED/medical instability); refer eating-disorder service.',
        source: 'NICE NG69',
        when: i => i.eating_disorder,
      },
      {
        id: 'assess', tier: 'routine',
        label: 'Weight loss — structured workup',
        action: 'Bloods + CXR + urinalysis; address mood/appetite/chronic disease; review.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE CKS — Weight loss (unintentional)', url: 'https://cks.nice.org.uk/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('weight-loss-dx', {
    title: 'Unintentional weight loss — differential',
    subtitle: 'The engine weights metabolic, GI, psychiatric and chronic-disease causes, and always surfaces malignancy.',
    guideline: 'NICE NG12 · CKS',
    patientPresenting: "I've lost a lot of weight without trying, doctor — my clothes are hanging off me.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'malignancy', name: 'Malignancy', summary: 'Site-specific symptom, ≥60, B-symptoms', baseline: 4, category: 'cant-miss',
        keyExam: 'Mass, lymphadenopathy, organomegaly, cachexia.', nextIx: '\u26A1 Site-specific / non-site-specific 2WW (NICE NG12); CXR, FIT, bloods.',
        patientPhrase: 'Unexplained weight loss can be the first sign of a cancer, so we investigate urgently — many come back clear.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 2WW pathway' },
      { id: 'hyperthyroid', name: 'Hyperthyroidism', summary: 'Weight loss + heat intolerance + tremor', baseline: 7, category: 'common',
        keyExam: 'Tremor, tachycardia, goitre.', nextIx: 'TSH/FT4; treat.',
        patientPhrase: 'An overactive thyroid burns energy and causes weight loss. A blood test confirms it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyperthyroidism/' },
      { id: 'diabetes', name: 'New / poorly-controlled diabetes', summary: 'Polyuria, polydipsia, thirst', baseline: 6, category: 'common',
        keyExam: 'Glucose; dehydration.', nextIx: 'HbA1c/glucose; safety-net DKA in lean/young.',
        patientPhrase: 'Uncontrolled diabetes can cause weight loss. We confirm it and start management.',
        ciksUrl: 'https://cks.nice.org.uk/topics/diabetes-type-2/' },
      { id: 'gi', name: 'GI / malabsorption (coeliac, IBD, pancreatic)', summary: 'Diarrhoea, steatorrhoea, abdominal symptoms', baseline: 5, category: 'common',
        keyExam: 'Abdominal exam; nutritional state.', nextIx: 'Coeliac serology, faecal calprotectin, faecal elastase; refer per cause.',
        patientPhrase: 'A gut condition may be stopping you absorbing food. Tests identify which, and treatment restores weight.',
        ciksUrl: 'https://cks.nice.org.uk/topics/coeliac-disease/' },
      { id: 'psychiatric', name: 'Depression / eating disorder', summary: 'Low mood, poor appetite, restriction/purging', baseline: 6, category: 'common',
        keyExam: 'Mental state; BMI; medical-instability signs.', nextIx: 'Mood screen; eating-disorder risk assessment; refer as needed.',
        patientPhrase: 'Mood or eating difficulties can drive weight loss. We address these supportively, with specialist help if needed.',
        ciksUrl: 'https://cks.nice.org.uk/topics/depression/' },
      { id: 'chronic_disease', name: 'Chronic disease / frailty', summary: 'COPD, HF, CKD, IBD, advanced age', baseline: 4, category: 'common',
        keyExam: 'Features of the underlying disease.', nextIx: 'Optimise disease; nutritional support; dietitian.',
        patientPhrase: 'A long-term condition or frailty can cause weight loss. We optimise treatment and support nutrition.',
        ciksUrl: 'https://cks.nice.org.uk/' },
    ],
    effects: {
      age: (v) => v >= 65 ? { malignancy: +6, chronic_disease: +4 } : (v < 30 ? { psychiatric: +6, diabetes: +2 } : {}),
      significant: { malignancy: +2 },

      site_symptom: { malignancy: +22 },
      systemic_b: { malignancy: +18 },

      thyroid_sx: { hyperthyroid: +22 },
      diabetes_sx: { diabetes: +22 },
      malabsorption: { gi: +20 },

      mood_appetite: { psychiatric: +16 },
      eating_disorder: { psychiatric: +18 },
      chronic_disease: { chronic_disease: +18 },
    },
    askAbout: {
      malignancy: ['site_symptom', 'systemic_b', 'age'],
      hyperthyroid: ['thyroid_sx'],
      diabetes: ['diabetes_sx'],
      gi: ['malabsorption'],
      psychiatric: ['mood_appetite', 'eating_disorder'],
      chronic_disease: ['chronic_disease'],
    },
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE NG69 — Eating disorders', url: 'https://www.nice.org.uk/guidance/ng69' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'weight-loss', label: 'Unintentional weight loss', triage: 'weight-loss-triage', dx: 'weight-loss-dx' }
  );
})();
