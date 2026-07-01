/* ============================================
   Diagnostic Tool pack — Thrombocytosis
   Shared-id triage + differential. NICE NG12 · BSH.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Reactive drivers', id: 'infection_inflam', kind: 'check', label: 'Recent infection / inflammation / surgery / trauma' },
    { group: 'Reactive drivers', id: 'iron_deficiency', kind: 'check', label: 'Iron deficiency / bleeding' },
    { group: 'Reactive drivers', id: 'splenectomy', kind: 'check', label: 'Post-splenectomy / hyposplenism' },

    { group: 'Platelet count', id: 'plt', kind: 'number', label: 'Platelets', unit: '×10⁹/L', step: 1 },
    { group: 'Persistence', id: 'persistent', kind: 'check', label: 'Persistent (repeat raised after cause treated)' },

    { group: 'MPN clues', id: 'mpn_features', kind: 'check', label: 'Splenomegaly / thrombosis / very high persistent count (? ET)' },

    { group: 'Cancer red flags (NG12)', id: 'cancer_sx', kind: 'check', label: 'Weight loss / haemoptysis / dysphagia / abdo pain / PMB' },
  ];

  if (window.RGPTriage) RGPTriage.register('thrombocytosis-triage', {
    title: 'Thrombocytosis — triage',
    subtitle: 'Enter platelets. Surfaces the NG12 cancer pathway and myeloproliferative referral.',
    guideline: 'NICE NG12 · BSH',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Most thrombocytosis is reactive — treat the cause (infection, iron deficiency, inflammation) and repeat; investigate if persistent or unexplained.',
    rules: [
      {
        id: 'cancer_2ww', tier: 'cancer',
        label: 'Platelets ≥400 + cancer symptom — NG12 pathway',
        action: 'Consider lung / upper GI / colorectal / endometrial / ovarian 2WW per symptom (NICE NG12 §1.5.21).',
        patientPhrase: '"A raised platelet count with your symptom is a signal we should investigate quickly to be safe."',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => (i.plt != null && i.plt >= 400) && i.cancer_sx,
      },
      {
        id: 'mpn', tier: 'urgent',
        label: 'Possible essential thrombocythaemia — persistent + splenomegaly / thrombosis',
        action: 'Haematology referral; JAK2/CALR; exclude reactive causes.',
        source: 'BSH',
        when: i => i.mpn_features || (i.persistent && i.plt != null && i.plt > 600),
      },
      {
        id: 'reactive', tier: 'routine',
        label: 'Likely reactive thrombocytosis',
        action: 'Treat infection/inflammation/iron deficiency; repeat platelets after recovery.',
        source: 'BSH',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'BSH — Myeloproliferative neoplasms', url: 'https://b-s-h.org.uk/guidelines/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('thrombocytosis-dx', {
    title: 'Thrombocytosis — differential',
    subtitle: 'Most is reactive. The engine weights reactive causes against essential thrombocythaemia, and surfaces the NG12 occult-cancer pathway.',
    guideline: 'NICE NG12 · BSH',
    patientPresenting: "My platelet count came back high, doctor — is that dangerous?",
    inputs: INPUTS,
    diagnoses: [
      { id: 'reactive', name: 'Reactive thrombocytosis', summary: 'Infection, inflammation, surgery, trauma', baseline: 12, category: 'common',
        keyExam: 'Features of the underlying acute illness.', nextIx: 'Treat cause; repeat platelets after recovery.',
        patientPhrase: 'The body raises platelets in response to infection or inflammation. It settles once the cause is treated.',
        ciksUrl: 'https://b-s-h.org.uk/guidelines/' },
      { id: 'iron', name: 'Iron deficiency', summary: 'Thrombocytosis with microcytosis / bleeding', baseline: 6, category: 'common',
        keyExam: 'Signs of anaemia.', nextIx: 'Ferritin; treat iron deficiency; recheck.',
        patientPhrase: 'Iron deficiency can push platelets up. Correcting the iron normalises them.',
        ciksUrl: 'https://cks.nice.org.uk/topics/anaemia-iron-deficiency/' },
      { id: 'hyposplenism', name: 'Post-splenectomy / hyposplenism', summary: 'After splenectomy or functional hyposplenism', baseline: 4, category: 'less-common',
        keyExam: 'Splenectomy history; Howell-Jolly bodies on film.', nextIx: 'Usually persistent; ensure vaccination/prophylaxis.',
        patientPhrase: 'Without a working spleen the platelet count runs higher. We make sure you have the right protective measures.',
        ciksUrl: 'https://b-s-h.org.uk/guidelines/' },

      { id: 'et', name: 'Essential thrombocythaemia (MPN)', summary: 'Persistent high count, splenomegaly, thrombosis', baseline: 2, category: 'cant-miss',
        keyExam: 'Splenomegaly, thrombotic events.', nextIx: '\u26A1 Haematology — JAK2/CALR/MPL; exclude reactive; risk-stratify for aspirin/cytoreduction.',
        patientPhrase: 'A bone-marrow condition can overproduce platelets. A specialist confirms it and reduces clotting risk.',
        ciksUrl: 'https://b-s-h.org.uk/guidelines/', redFlagAction: '\u26A1 Haematology + JAK2' },
      { id: 'occult_cancer', name: 'Occult malignancy', summary: 'Thrombocytosis + cancer symptom (NG12)', baseline: 1, category: 'cant-miss',
        keyExam: 'Site-directed exam.', nextIx: '\u26A1 Site-specific 2WW per NG12 (lung/GI/gynae).',
        patientPhrase: 'A raised platelet count with these symptoms can point to a hidden cancer, so we investigate quickly.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Site-specific 2WW' },
    ],
    effects: {
      age: (v) => v >= 60 ? { occult_cancer: +3, et: +2 } : {},
      infection_inflam: { reactive: +20 },
      iron_deficiency: { iron: +20 },
      splenectomy: { hyposplenism: +22 },

      plt: (v) => v != null && v > 600 ? { et: +6 } : {},
      persistent: { et: +10, reactive: -6 },

      mpn_features: { et: +24 },
      cancer_sx: { occult_cancer: +24 },
    },
    askAbout: {
      reactive: ['infection_inflam'],
      iron: ['iron_deficiency'],
      hyposplenism: ['splenectomy'],
      et: ['mpn_features', 'persistent'],
      occult_cancer: ['cancer_sx'],
    },
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'BSH — Myeloproliferative neoplasms', url: 'https://b-s-h.org.uk/guidelines/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'thrombocytosis', label: 'Thrombocytosis', triage: 'thrombocytosis-triage', dx: 'thrombocytosis-dx' }
  );
})();
