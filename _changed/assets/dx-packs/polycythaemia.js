/* ============================================
   Diagnostic Tool pack — Polycythaemia (raised Hb/Hct)
   Shared-id triage + differential. BSH · CKS.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'smoker', kind: 'check', label: 'Smoker / COPD / hypoxic lung disease' },
    { group: 'Demographics & context', id: 'osa', kind: 'check', label: 'Obstructive sleep apnoea / obesity' },
    { group: 'Demographics & context', id: 'diuretic_alcohol', kind: 'check', label: 'Diuretic / alcohol / dehydration (relative)' },
    { group: 'Demographics & context', id: 'testosterone_epo', kind: 'check', label: 'Testosterone / EPO / anabolic use' },

    { group: 'Bloods', id: 'hct', kind: 'number', label: 'Haematocrit', unit: '(ratio)', step: 0.01, note: 'M >0.52, F >0.48 raised' },
    { group: 'Persistence', id: 'persistent', kind: 'check', label: 'Persistent on repeat (not just dehydration)' },

    { group: 'PV clues', id: 'pv_features', kind: 'check', label: 'Aquagenic pruritus / splenomegaly / thrombosis / facial plethora' },
    { group: 'PV clues', id: 'jak2', kind: 'check', label: 'JAK2 positive / low EPO' },

    { group: 'Secondary clues', id: 'hypoxia', kind: 'check', label: 'Low SpO₂ / cyanotic heart disease' },
    { group: 'Secondary clues', id: 'renal_tumour', kind: 'check', label: 'Renal mass / EPO-secreting tumour suspected' },

    { group: 'Red flags', id: 'thrombosis', kind: 'check', label: 'Recent thrombosis / TIA / very high Hct' },
  ];

  if (window.RGPTriage) RGPTriage.register('polycythaemia-triage', {
    title: 'Polycythaemia — triage',
    subtitle: 'Enter haematocrit. Surfaces thrombosis risk, polycythaemia vera and secondary causes.',
    guideline: 'BSH · CKS',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Repeat Hb/Hct (exclude dehydration), assess smoking/hypoxia/OSA, send EPO + JAK2 if persistent true polycythaemia; refer haematology if primary suspected.',
    rules: [
      {
        id: 'thrombosis', tier: 'urgent',
        label: 'Polycythaemia + thrombosis / very high haematocrit',
        action: 'Urgent haematology; manage CV risk; consider venesection per specialist; aspirin if PV.',
        patientPhrase: '"Thickened blood raises clot risk — I want a specialist to assess and reduce that quickly."',
        source: 'BSH',
        when: i => i.thrombosis || (i.hct != null && i.hct > 0.60),
      },
      {
        id: 'pv', tier: 'urgent',
        label: 'Likely polycythaemia vera — JAK2 / low EPO / PV features',
        action: 'Haematology referral; JAK2, EPO; venesection + aspirin per specialist.',
        source: 'BSH',
        when: i => i.jak2 || i.pv_features,
      },
      {
        id: 'secondary', tier: 'urgent',
        label: 'Secondary polycythaemia — hypoxia / EPO-driven',
        action: 'Treat hypoxia (smoking, COPD, OSA); investigate renal/EPO tumour if unexplained.',
        source: 'CKS',
        when: i => i.hypoxia || i.renal_tumour,
      },
      {
        id: 'relative', tier: 'routine',
        label: 'Relative / smoker / unconfirmed',
        action: 'Rehydrate and repeat; smoking cessation; OSA assessment; investigate if persistent.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'BSH — Polycythaemia / erythrocytosis', url: 'https://b-s-h.org.uk/guidelines/' },
      { label: 'NICE CKS — Polycythaemia', url: 'https://cks.nice.org.uk/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('polycythaemia-dx', {
    title: 'Polycythaemia — differential',
    subtitle: 'The engine separates relative, secondary (hypoxic / EPO-driven) and primary (polycythaemia vera) causes, and surfaces thrombosis risk.',
    guideline: 'BSH · CKS',
    patientPresenting: "My blood count is high — too many red cells, the doctor said.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'relative', name: 'Relative (pseudo) polycythaemia', summary: 'Dehydration, diuretic, alcohol; normal red-cell mass', baseline: 8, category: 'common',
        keyExam: 'Volume status.', nextIx: 'Rehydrate; review diuretic/alcohol; repeat Hct.',
        patientPhrase: 'The blood is concentrated rather than truly overproducing cells. Hydration corrects it.',
        ciksUrl: 'https://b-s-h.org.uk/guidelines/' },
      { id: 'smoking', name: 'Smoking-related', summary: 'Carbon-monoxide driven, smoker', baseline: 7, category: 'common',
        keyExam: 'Smoking history.', nextIx: 'Smoking cessation; repeat Hct.',
        patientPhrase: 'Smoking raises the red-cell count. Stopping is the most effective treatment.',
        ciksUrl: 'https://b-s-h.org.uk/guidelines/' },
      { id: 'hypoxic', name: 'Secondary hypoxic', summary: 'COPD, OSA, cyanotic heart disease', baseline: 5, category: 'common',
        keyExam: 'Low SpO₂, respiratory signs.', nextIx: 'Treat hypoxia/OSA; EPO appropriately raised.',
        patientPhrase: 'Low oxygen drives the body to make more red cells. Treating the cause helps.',
        ciksUrl: 'https://b-s-h.org.uk/guidelines/' },
      { id: 'epo_drug', name: 'EPO / testosterone / tumour', summary: 'Exogenous EPO/testosterone or EPO-secreting tumour (renal)', baseline: 2, category: 'less-common',
        keyExam: 'Drug history; renal mass.', nextIx: 'EPO level; imaging if tumour suspected; stop exogenous source.',
        patientPhrase: 'A medication or, rarely, a growth can drive red-cell production. We test for and treat the cause.',
        ciksUrl: 'https://b-s-h.org.uk/guidelines/' },

      { id: 'pv', name: 'Polycythaemia vera', summary: 'JAK2 positive, low EPO, splenomegaly, pruritus, thrombosis', baseline: 2, category: 'cant-miss',
        keyExam: 'Plethora, splenomegaly, aquagenic pruritus.', nextIx: '\u26A1 Haematology — JAK2, EPO; venesection + aspirin; manage thrombosis risk.',
        patientPhrase: 'A bone-marrow condition may be overproducing red cells, raising clot risk. A specialist treats it effectively.',
        ciksUrl: 'https://b-s-h.org.uk/guidelines/', redFlagAction: '\u26A1 Haematology + JAK2/EPO' },
    ],
    effects: {
      smoker: { smoking: +20, hypoxic: +6 },
      osa: { hypoxic: +16 },
      diuretic_alcohol: { relative: +20 },
      testosterone_epo: { epo_drug: +22 },

      hct: (v) => v != null && v > 0.60 ? { pv: +6, hypoxic: +2 } : {},
      persistent: { pv: +6, smoking: +2, relative: -8 },

      pv_features: { pv: +26 },
      jak2: { pv: +30 },

      hypoxia: { hypoxic: +20 },
      renal_tumour: { epo_drug: +18 },

      thrombosis: { pv: +10 },
    },
    askAbout: {
      relative: ['diuretic_alcohol'],
      smoking: ['smoker'],
      hypoxic: ['hypoxia', 'osa'],
      epo_drug: ['testosterone_epo', 'renal_tumour'],
      pv: ['pv_features', 'jak2'],
    },
    sources: [
      { label: 'BSH — Polycythaemia / erythrocytosis', url: 'https://b-s-h.org.uk/guidelines/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'polycythaemia', label: 'Polycythaemia', triage: 'polycythaemia-triage', dx: 'polycythaemia-dx' }
  );
})();
