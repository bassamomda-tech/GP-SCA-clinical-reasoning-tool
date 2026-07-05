/* ============================================
   Diagnostic Tool pack — Raynaud's Phenomenon
   Shared-id triage + differential. CKS Raynaud's.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'female_young', kind: 'check', label: 'Young woman, symmetrical, FH (primary pattern)' },

    { group: 'Pattern', id: 'classic_triphasic', kind: 'check', label: 'Triphasic colour change (white → blue → red) with cold/stress' },
    { group: 'Primary clues', id: 'normal_exam_nailfold', kind: 'check', label: 'Normal nailfold capillaries, no systemic features, normal ANA' },

    { group: 'Secondary clues', id: 'late_onset_asym', kind: 'check', label: 'Onset >40 / asymmetrical / severe' },
    { group: 'Secondary clues', id: 'ctd_features', kind: 'check', label: 'Arthralgia / rash / dry eyes & mouth / dysphagia / skin tightening (CTD)' },
    { group: 'Secondary clues', id: 'abnormal_nailfold_ana', kind: 'check', label: 'Abnormal nailfold capillaries / positive ANA' },
    { group: 'Secondary clues', id: 'drugs_vibration', kind: 'check', label: 'Beta-blocker / vibrating tools / smoking' },

    { group: 'Red flags', id: 'ulcers_gangrene', kind: 'check', label: 'Digital ulcers / gangrene / critical ischaemia' },
  ];

  if (window.RGPTriage) RGPTriage.register('raynauds-triage', {
    title: 'Raynaud\u2019s — triage',
    subtitle: 'Tick features. Surfaces digital ischaemia and secondary (connective-tissue-disease) Raynaud\u2019s.',
    guideline: 'CKS Raynaud\u2019s',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Primary Raynaud\u2019s (young, symmetrical, normal ANA/nailfold) → conservative (keep warm, stop smoking) ± nifedipine. Screen for secondary causes if atypical.',
    rules: [
      {
        id: 'digital_ischaemia', tier: 'emergency',
        label: 'Critical digital ischaemia — ulcers / gangrene / persistent ischaemic digit',
        action: 'Urgent rheumatology/vascular; consider IV prostanoid.',
        patientPhrase: '"A finger that stays white/blue with ulcers needs urgent specialist treatment to save the tissue."',
        source: 'CKS Raynaud\u2019s',
        when: i => i.ulcers_gangrene,
      },
      {
        id: 'secondary', tier: 'urgent',
        label: 'Suspected secondary Raynaud\u2019s — CTD features / abnormal nailfold / positive ANA / onset >40',
        action: 'ANA, nailfold capillaroscopy; rheumatology referral (scleroderma/lupus screen).',
        source: 'CKS', sourceUrl: 'https://cks.nice.org.uk/topics/raynauds-phenomenon/',
        when: i => i.late_onset_asym || i.ctd_features || i.abnormal_nailfold_ana,
      },
      {
        id: 'primary', tier: 'routine',
        label: 'Primary Raynaud\u2019s',
        action: 'Keep warm, gloves, stop smoking, avoid triggers/beta-blockers; nifedipine if severe; reassure.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Raynaud\u2019s phenomenon', url: 'https://cks.nice.org.uk/topics/raynauds-phenomenon/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('raynauds-dx', {
    title: 'Raynaud\u2019s — primary vs secondary',
    subtitle: 'The engine distinguishes primary Raynaud\u2019s from secondary (connective tissue disease) and drug/occupational causes, and surfaces critical digital ischaemia.',
    guideline: 'CKS Raynaud\u2019s',
    patientPresenting: "My fingers go white and numb in the cold, doctor, then blue and red.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'primary', name: 'Primary Raynaud\u2019s', summary: 'Young woman, symmetrical, normal ANA/nailfold, FH', baseline: 12, category: 'common',
        keyExam: 'Normal nailfold capillaries; no systemic features.', nextIx: 'Clinical; conservative measures ± nifedipine; reassure.',
        patientPhrase: 'The small blood vessels overreact to cold — common and benign on its own. Keeping warm and stopping smoking help; medication if needed.',
        ciksUrl: 'https://cks.nice.org.uk/topics/raynauds-phenomenon/' },
      { id: 'drug_occupational', name: 'Drug / occupational', summary: 'Beta-blocker, vibrating tools, smoking', baseline: 4, category: 'common',
        keyExam: 'Drug/occupational history.', nextIx: 'Review drug; vibration exposure (HAVS); smoking cessation.',
        patientPhrase: 'A medication, smoking or vibrating tools can trigger this. Addressing the cause helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/raynauds-phenomenon/' },

      { id: 'secondary_ctd', name: 'Secondary Raynaud\u2019s (CTD)', summary: 'Onset >40, asymmetrical, CTD features, abnormal nailfold/ANA', baseline: 3, category: 'cant-miss',
        keyExam: 'Abnormal nailfold capillaries, skin/joint features.', nextIx: '\u26A1 ANA, capillaroscopy; rheumatology (scleroderma/lupus).',
        patientPhrase: 'Some features suggest an underlying autoimmune condition — we screen for it so it can be treated early.',
        ciksUrl: 'https://cks.nice.org.uk/topics/raynauds-phenomenon/', redFlagAction: '\u26A1 ANA + rheumatology' },
      { id: 'digital_ischaemia', name: 'Critical digital ischaemia', summary: 'Ulcers / gangrene / persistent ischaemic digit', baseline: 1, category: 'cant-miss',
        keyExam: 'Digital ulcer / gangrene.', nextIx: '\u26A1 Urgent rheumatology/vascular; IV prostanoid.',
        patientPhrase: 'A finger that stays starved of blood with ulcers needs urgent treatment to save the tissue.',
        ciksUrl: 'https://cks.nice.org.uk/topics/raynauds-phenomenon/', redFlagAction: '\u26A1 Urgent rheum/vascular' },
    ],
    effects: {
      age: (v) => v != null && v > 40 ? { secondary_ctd: +8, primary: -6 } : (v < 30 ? { primary: +6 } : {}),
      female_young: { primary: +14 },

      classic_triphasic: { primary: +8 },
      normal_exam_nailfold: { primary: +18, secondary_ctd: -10 },

      late_onset_asym: { secondary_ctd: +14 },
      ctd_features: { secondary_ctd: +20 },
      abnormal_nailfold_ana: { secondary_ctd: +22 },
      drugs_vibration: { drug_occupational: +20 },

      ulcers_gangrene: { digital_ischaemia: +30, secondary_ctd: +8 },
    },
    askAbout: {
      primary: ['female_young', 'normal_exam_nailfold'],
      drug_occupational: ['drugs_vibration'],
      secondary_ctd: ['ctd_features', 'abnormal_nailfold_ana', 'late_onset_asym'],
      digital_ischaemia: ['ulcers_gangrene'],
    },
    sources: [
      { label: 'NICE CKS — Raynaud\u2019s phenomenon', url: 'https://cks.nice.org.uk/topics/raynauds-phenomenon/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'raynauds', label: 'Raynaud\u2019s phenomenon', triage: 'raynauds-triage', dx: 'raynauds-dx' }
  );
})();
