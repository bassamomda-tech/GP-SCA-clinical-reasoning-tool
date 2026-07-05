/* ============================================
   Diagnostic Tool pack — Night Sweats
   Shared-id triage + differential. NICE NG12 · CKS.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'menopausal', kind: 'check', label: 'Perimenopausal (flushes, cycle change)' },
    { group: 'Demographics & context', id: 'drugs', kind: 'check', label: 'SSRI / opioid / antipyretic withdrawal / hormone therapy' },

    { group: 'B-symptoms (red flags)', id: 'drenching', kind: 'check', label: 'Drenching (change of bedclothes) sweats' },
    { group: 'B-symptoms (red flags)', id: 'weight_loss', kind: 'check', label: 'Unintentional weight loss' },
    { group: 'B-symptoms (red flags)', id: 'lymphadenopathy', kind: 'check', label: 'Lymphadenopathy / splenomegaly' },

    { group: 'Infection', id: 'fever_focal', kind: 'check', label: 'Fever / focal infection symptoms' },
    { group: 'Infection', id: 'tb_risk', kind: 'check', label: 'TB risk (cough, travel, immunosuppression)' },

    { group: 'Endocrine', id: 'thyroid_sx', kind: 'check', label: 'Heat intolerance / tremor / weight loss (hyperthyroid)' },
    { group: 'Endocrine', id: 'hypoglyc_phaeo', kind: 'check', label: 'Episodic sweats + palpitations + hunger (hypoglycaemia / phaeo)' },

    { group: 'Other', id: 'anxiety', kind: 'check', label: 'Anxiety / situational' },
  ];

  if (window.RGPTriage) RGPTriage.register('night-sweats-triage', {
    title: 'Night sweats — triage',
    subtitle: 'Tick features. Surfaces lymphoma/malignancy, TB and endocrine pathways.',
    guideline: 'NICE NG12 · CKS',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Most night sweats are benign (menopause, anxiety, environment, drugs). If persistent/unexplained, send FBC, film, LDH, ESR/CRP, TFT, HIV, CXR; review.',
    rules: [
      {
        id: 'lymphoma_2ww', tier: 'cancer',
        label: 'B-symptoms — drenching sweats + weight loss / lymphadenopathy',
        action: 'Urgent FBC, film, LDH; haematology 2WW (NICE NG12).',
        patientPhrase: '"Night sweats with weight loss and gland swelling need urgent tests to rule out a blood-cell cancer."',
        source: 'NICE NG12 §1.10', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => (i.drenching && i.weight_loss) || i.lymphadenopathy,
      },
      {
        id: 'tb_infection', tier: 'urgent',
        label: 'Possible TB / chronic infection',
        action: 'CXR, inflammatory markers, HIV; sputum if cough; treat / refer.',
        source: 'NICE NG33 TB',
        when: i => i.tb_risk || i.fever_focal,
      },
      {
        id: 'endocrine', tier: 'urgent',
        label: 'Endocrine cause — thyrotoxicosis / phaeo / hypoglycaemia',
        action: 'TFT; if paroxysmal + hypertension → metanephrines; review diabetes treatment.',
        source: 'CKS',
        when: i => i.thyroid_sx || i.hypoglyc_phaeo,
      },
      {
        id: 'benign', tier: 'routine',
        label: 'Likely benign (menopause / anxiety / drugs / environment)',
        action: 'Address cause; menopause → HRT options; review meds; reassure; safety-net for B-symptoms.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE CKS — Night sweats', url: 'https://cks.nice.org.uk/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('night-sweats-dx', {
    title: 'Night sweats — differential',
    subtitle: 'The engine weights menopause, anxiety, drug and infective causes, and always surfaces lymphoma/malignancy, TB and phaeochromocytoma.',
    guideline: 'NICE NG12 · CKS',
    patientPresenting: "I keep waking up drenched in sweat, doctor — I have to change the sheets.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'menopause', name: 'Menopausal vasomotor', summary: 'Perimenopausal, flushes, cycle change', baseline: 10, category: 'common',
        keyExam: 'Vasomotor symptoms.', nextIx: 'Clinical; HRT/non-hormonal options.',
        patientPhrase: 'Hormonal changes of the menopause commonly cause night sweats — effective treatments exist.',
        ciksUrl: 'https://cks.nice.org.uk/topics/menopause/', caseLink: '../cases/menopause.html' },
      { id: 'anxiety_environment', name: 'Anxiety / environmental', summary: 'Situational, warm room/bedding', baseline: 7, category: 'common',
        keyExam: 'Normal exam.', nextIx: 'Address triggers; manage anxiety; sleep environment.',
        patientPhrase: 'Stress or a warm environment commonly cause sweats. Simple measures help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/generalized-anxiety-disorder/' },
      { id: 'drug', name: 'Drug-induced', summary: 'SSRI / opioid / withdrawal / hormone therapy', baseline: 4, category: 'common',
        keyExam: 'Medication review.', nextIx: 'Review/adjust drug.',
        patientPhrase: 'A medication or withdrawal can cause sweats. Reviewing it usually helps.',
        ciksUrl: 'https://cks.nice.org.uk/' },
      { id: 'infection', name: 'Chronic infection (TB / endocarditis / HIV)', summary: 'Fever, TB risk, focal symptoms', baseline: 3, category: 'less-common',
        keyExam: 'Fever, focal signs.', nextIx: 'CXR, cultures, HIV, inflammatory markers; treat.',
        patientPhrase: 'A hidden infection can cause night sweats. We look for and treat it.',
        ciksUrl: 'https://cks.nice.org.uk/' },
      { id: 'thyrotoxicosis', name: 'Thyrotoxicosis', summary: 'Heat intolerance, tremor, weight loss', baseline: 3, category: 'common',
        keyExam: 'Tremor, tachycardia, goitre.', nextIx: 'TSH/FT4; treat.',
        patientPhrase: 'An overactive thyroid can cause sweats. A blood test checks it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyperthyroidism/' },

      { id: 'lymphoma', name: 'Lymphoma / malignancy', summary: 'Drenching sweats + weight loss + lymphadenopathy', baseline: 1, category: 'cant-miss',
        keyExam: 'Lymphadenopathy, hepatosplenomegaly.', nextIx: '\u26A1 FBC, film, LDH; haematology 2WW.',
        patientPhrase: 'These features together need urgent tests to exclude a blood-cell cancer.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Haematology 2WW' },
      { id: 'phaeo', name: 'Phaeochromocytoma', summary: 'Paroxysmal sweats + palpitations + headache + hypertension', baseline: 1, category: 'cant-miss',
        keyExam: 'Paroxysmal hypertension.', nextIx: '\u26A1 Plasma/urine metanephrines; endocrine.',
        patientPhrase: 'Episodes of sweating, palpitations and high blood pressure can rarely signal an adrenal tumour — a test screens for it.',
        ciksUrl: 'https://cks.nice.org.uk/', redFlagAction: '\u26A1 Metanephrines' },
    ],
    effects: {
      age: (v) => (v >= 45 && v <= 56) ? { menopause: +8 } : (v >= 60 ? { lymphoma: +2 } : {}),
      menopausal: { menopause: +18 },
      drugs: { drug: +20 },

      drenching: { lymphoma: +8, infection: +4 },
      weight_loss: { lymphoma: +16, thyrotoxicosis: +6, infection: +4 },
      lymphadenopathy: { lymphoma: +22 },

      fever_focal: { infection: +18 },
      tb_risk: { infection: +18 },

      thyroid_sx: { thyrotoxicosis: +22 },
      hypoglyc_phaeo: { phaeo: +18 },

      anxiety: { anxiety_environment: +18 },
    },
    askAbout: {
      menopause: ['menopausal'],
      anxiety_environment: ['anxiety'],
      drug: ['drugs'],
      infection: ['tb_risk', 'fever_focal'],
      thyrotoxicosis: ['thyroid_sx'],
      lymphoma: ['drenching', 'weight_loss', 'lymphadenopathy'],
      phaeo: ['hypoglyc_phaeo'],
    },
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE CKS — Menopause', url: 'https://cks.nice.org.uk/topics/menopause/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'night-sweats', label: 'Night sweats', triage: 'night-sweats-triage', dx: 'night-sweats-dx' }
  );
})();
