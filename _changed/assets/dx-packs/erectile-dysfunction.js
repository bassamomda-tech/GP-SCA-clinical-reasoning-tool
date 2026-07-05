/* ============================================
   Diagnostic Tool pack — Erectile Dysfunction
   Shared-id triage + differential. NICE CKS ED · BSSM. ED is a CV risk marker.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'CV risk', id: 'cv_risk', kind: 'check', label: 'Diabetes / hypertension / smoking / hyperlipidaemia / obesity' },
    { group: 'CV risk', id: 'known_cvd', kind: 'check', label: 'Known cardiovascular disease' },

    { group: 'Onset / pattern', id: 'gradual', kind: 'check', label: 'Gradual onset, global, reduced spontaneous erections' },
    { group: 'Onset / pattern', id: 'sudden_situational', kind: 'check', label: 'Sudden onset, situational, morning erections preserved' },
    { group: 'Onset / pattern', id: 'relationship_stress', kind: 'check', label: 'Anxiety / relationship / psychological stress' },

    { group: 'Endocrine / other', id: 'low_libido_endocrine', kind: 'check', label: 'Low libido / fatigue / small testes (low testosterone)' },
    { group: 'Endocrine / other', id: 'drugs', kind: 'check', label: 'Drug cause (beta-blocker, thiazide, SSRI, antiandrogen, finasteride)' },
    { group: 'Endocrine / other', id: 'neuro_pelvic', kind: 'check', label: 'Neurological / pelvic surgery / radiotherapy' },

    { group: 'Red flags', id: 'cardiac_sx', kind: 'check', label: 'Chest pain / exertional symptoms (assess CV before treatment)' },
  ];

  if (window.RGPTriage) RGPTriage.register('erectile-dysfunction-triage', {
    title: 'Erectile dysfunction — triage',
    subtitle: 'ED is an early cardiovascular risk marker. Tick features — surfaces CV-risk assessment and endocrine pathways.',
    guideline: 'NICE CKS ED · BSSM',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Treat ED as a CV risk marker: bloods (HbA1c, lipids, U&E), morning testosterone, BP; manage CV risk; PDE5 inhibitor first-line unless contraindicated.',
    rules: [
      {
        id: 'cardiac', tier: 'urgent',
        label: 'Cardiac symptoms — assess CV risk before treatment',
        action: 'Do not start PDE5i with cardiac symptoms / nitrates; assess CV status, ECG; manage angina.',
        patientPhrase: '"ED can be an early warning of heart disease — I want to check your heart before we treat it."',
        source: 'BSSM / Princeton consensus',
        when: i => i.cardiac_sx,
      },
      {
        id: 'endocrine', tier: 'urgent',
        label: 'Endocrine cause likely — low libido / small testes',
        action: 'Morning testosterone (×2 if low) + LH/FSH, prolactin; refer endocrine if confirmed hypogonadism.',
        source: 'NICE CKS ED',
        when: i => i.low_libido_endocrine,
      },
      {
        id: 'cv_marker', tier: 'urgent',
        label: 'ED with cardiovascular risk factors — opportunistic CV assessment',
        action: 'QRISK, bloods, BP; lifestyle + risk-factor management alongside ED treatment.',
        source: 'BSSM',
        when: i => i.cv_risk || i.known_cvd,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'Erectile dysfunction — assess & treat',
        action: 'History (organic vs psychogenic), bloods, testosterone; PDE5 inhibitor; address drugs and psychological factors.',
        source: 'NICE CKS ED',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Erectile dysfunction', url: 'https://cks.nice.org.uk/topics/erectile-dysfunction/' },
      { label: 'BSSM — ED guideline', url: 'https://www.bssm.org.uk/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('erectile-dysfunction-dx', {
    title: 'Erectile dysfunction — differential',
    subtitle: 'The engine weights vasculogenic, psychogenic, endocrine, drug and neurogenic causes from onset pattern and risk factors, and always flags ED as a cardiovascular risk marker.',
    guideline: 'NICE CKS ED · BSSM',
    patientPresenting: "I've been having trouble getting and keeping an erection, doctor — it's knocking my confidence.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'vasculogenic', name: 'Vasculogenic / cardiovascular', summary: 'Gradual, global, CV risk factors — early marker of vascular disease', baseline: 10, category: 'common',
        keyExam: 'BP, BMI, peripheral pulses, CV exam.', nextIx: 'HbA1c, lipids, U&E, QRISK; manage CV risk; PDE5 inhibitor.',
        patientPhrase: 'Reduced blood flow is the commonest cause — and an early warning to look after your heart. Treatments work well alongside lifestyle change.',
        ciksUrl: 'https://cks.nice.org.uk/topics/erectile-dysfunction/' },
      { id: 'psychogenic', name: 'Psychogenic', summary: 'Sudden, situational, preserved morning erections, stress/anxiety', baseline: 7, category: 'common',
        keyExam: 'Normal physical exam.', nextIx: 'Psychosexual history; address anxiety/relationship; PDE5i can still help.',
        patientPhrase: 'Stress and anxiety can be the main driver, especially when morning erections are preserved. Addressing this often resolves it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/erectile-dysfunction/' },
      { id: 'drug', name: 'Drug-induced', summary: 'Beta-blocker, thiazide, SSRI, antiandrogen, finasteride', baseline: 4, category: 'common',
        keyExam: 'Medication review.', nextIx: 'Review/switch offending drug where possible.',
        patientPhrase: 'A medication may be contributing. We see whether it can be changed.',
        ciksUrl: 'https://cks.nice.org.uk/topics/erectile-dysfunction/' },
      { id: 'endocrine', name: 'Endocrine (hypogonadism / prolactinoma / thyroid)', summary: 'Low libido, fatigue, small testes', baseline: 3, category: 'less-common',
        keyExam: 'Testicular size, gynaecomastia, visual fields.', nextIx: 'Morning testosterone ×2, LH/FSH, prolactin, TFT; endocrine referral.',
        patientPhrase: 'A hormone deficiency can reduce both desire and function. Blood tests check for it and treatment helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/erectile-dysfunction/' },
      { id: 'neurogenic', name: 'Neurogenic / post-surgical', summary: 'Diabetes, neuro disease, pelvic surgery / radiotherapy', baseline: 2, category: 'less-common',
        keyExam: 'Neurological assessment.', nextIx: 'Treat cause; PDE5i ± specialist andrology.',
        patientPhrase: 'Nerve damage from diabetes or surgery can affect erections. We tailor treatment to this.',
        ciksUrl: 'https://cks.nice.org.uk/topics/erectile-dysfunction/' },

      { id: 'cv_marker', name: 'Occult cardiovascular disease', summary: 'ED preceding cardiac events — assess CV risk', baseline: 1, category: 'cant-miss',
        keyExam: 'CV risk assessment; cardiac symptoms.', nextIx: '\u26A1 Treat ED as a CV warning — QRISK, bloods, BP; cardiac assessment if symptomatic; caution with nitrates + PDE5i.',
        patientPhrase: 'ED can appear years before heart problems — so this is also a prompt to protect your heart.',
        ciksUrl: 'https://www.bssm.org.uk/', redFlagAction: '\u26A1 CV risk assessment' },
    ],
    effects: {
      age: (v) => v >= 60 ? { vasculogenic: +6, endocrine: +2 } : (v < 40 ? { psychogenic: +6, vasculogenic: -3 } : {}),
      cv_risk: { vasculogenic: +16, cv_marker: +8 },
      known_cvd: { vasculogenic: +10, cv_marker: +10 },

      gradual: { vasculogenic: +14, psychogenic: -6 },
      sudden_situational: { psychogenic: +22, vasculogenic: -6 },
      relationship_stress: { psychogenic: +16 },

      low_libido_endocrine: { endocrine: +22 },
      drugs: { drug: +20 },
      neuro_pelvic: { neurogenic: +20 },

      cardiac_sx: { cv_marker: +20 },
    },
    askAbout: {
      vasculogenic: ['cv_risk', 'gradual'],
      psychogenic: ['sudden_situational', 'relationship_stress'],
      drug: ['drugs'],
      endocrine: ['low_libido_endocrine'],
      neurogenic: ['neuro_pelvic'],
      cv_marker: ['cardiac_sx', 'cv_risk'],
    },
    sources: [
      { label: 'NICE CKS — Erectile dysfunction', url: 'https://cks.nice.org.uk/topics/erectile-dysfunction/' },
      { label: 'BSSM — ED guideline', url: 'https://www.bssm.org.uk/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'erectile-dysfunction', label: 'Erectile dysfunction', triage: 'erectile-dysfunction-triage', dx: 'erectile-dysfunction-dx' }
  );
})();
