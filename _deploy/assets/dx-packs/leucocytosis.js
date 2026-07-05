/* ============================================
   Diagnostic Tool pack — Leucocytosis (raised WCC)
   Shared-id triage + differential. BSH · NICE NG12.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Drivers', id: 'infection', kind: 'check', label: 'Acute infection / inflammation' },
    { group: 'Drivers', id: 'steroids_stress', kind: 'check', label: 'Steroids / acute stress / post-op / smoking' },

    { group: 'Differential count', id: 'neutrophilia', kind: 'check', label: 'Neutrophil predominance' },
    { group: 'Differential count', id: 'lymphocytosis', kind: 'check', label: 'Lymphocyte predominance' },
    { group: 'Differential count', id: 'eosinophilia', kind: 'check', label: 'Eosinophilia (allergy / parasites / drug)' },

    { group: 'WCC level', id: 'wcc', kind: 'number', label: 'WCC', unit: '×10⁹/L', step: 0.1 },
    { group: 'Persistence', id: 'persistent', kind: 'check', label: 'Persistent after infection resolves' },

    { group: 'Red flags', id: 'blasts', kind: 'check', label: 'Blasts on film / very high WCC' },
    { group: 'Red flags', id: 'b_symptoms', kind: 'check', label: 'Weight loss / night sweats / splenomegaly / lymphadenopathy' },
  ];

  if (window.RGPTriage) RGPTriage.register('leucocytosis-triage', {
    title: 'Leucocytosis — triage',
    subtitle: 'Enter WCC / differential. Surfaces acute leukaemia and myeloproliferative pathways.',
    guideline: 'BSH · NICE NG12',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Most leucocytosis is reactive — review the differential and clinical context, treat infection, repeat FBC + film; investigate if persistent or with B-symptoms.',
    rules: [
      {
        id: 'acute_leukaemia', tier: 'emergency',
        label: 'Blasts on film / very high WCC — possible acute leukaemia',
        action: 'Same-day haematology — urgent FBC + film discussed immediately.',
        patientPhrase: '"Your blood test needs an urgent specialist look today to rule out a serious blood-cell condition."',
        source: 'NICE NG12 §1.10', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.blasts || (i.wcc != null && i.wcc > 50),
      },
      {
        id: 'mpn_2ww', tier: 'cancer',
        label: 'Persistent unexplained leucocytosis + B-symptoms / splenomegaly',
        action: 'Haematology 2WW — ? CML / lymphoproliferative disorder.',
        source: 'NICE NG12',
        when: i => i.b_symptoms || (i.persistent && i.lymphocytosis),
      },
      {
        id: 'investigate', tier: 'urgent',
        label: 'Persistent leucocytosis, no obvious cause',
        action: 'Repeat FBC + film; haematology referral.',
        source: 'BSH',
        when: i => i.persistent,
      },
      {
        id: 'reactive', tier: 'routine',
        label: 'Likely reactive leucocytosis',
        action: 'Treat infection/inflammation; review steroids/smoking; repeat FBC after recovery.',
        source: 'BSH',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'BSH — Haematology guidelines', url: 'https://b-s-h.org.uk/guidelines/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('leucocytosis-dx', {
    title: 'Leucocytosis — differential',
    subtitle: 'The differential count directs the cause. The engine weights reactive neutrophilia, lymphocytosis and eosinophilia, and always surfaces acute leukaemia and CML.',
    guideline: 'BSH · NICE NG12',
    patientPresenting: "My white cell count came back high, doctor.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'reactive_neutrophilia', name: 'Reactive neutrophilia', summary: 'Infection, inflammation, steroids, stress, smoking', baseline: 12, category: 'common',
        keyExam: 'Source of infection/inflammation.', nextIx: 'Treat cause; repeat FBC after recovery.',
        patientPhrase: 'The body raises neutrophils to fight infection or inflammation. It settles once the cause is treated.',
        ciksUrl: 'https://b-s-h.org.uk/guidelines/' },
      { id: 'reactive_lymphocytosis', name: 'Reactive lymphocytosis', summary: 'Viral infection (EBV, CMV, pertussis)', baseline: 6, category: 'common',
        keyExam: 'Viral features, lymphadenopathy.', nextIx: 'Monospot/serology; repeat FBC; usually resolves.',
        patientPhrase: 'A viral infection commonly raises lymphocytes. It normalises as you recover.',
        ciksUrl: 'https://b-s-h.org.uk/guidelines/' },
      { id: 'eosinophilia', name: 'Eosinophilia', summary: 'Allergy, asthma, drug reaction, parasites', baseline: 3, category: 'less-common',
        keyExam: 'Atopy, rash, travel.', nextIx: 'Review drugs; stool O&P if travel; refer if marked/persistent.',
        patientPhrase: 'Eosinophils rise with allergy, certain drugs or parasites. We look for the trigger.',
        ciksUrl: 'https://b-s-h.org.uk/guidelines/' },
      { id: 'cml_cll', name: 'Chronic leukaemia (CML / CLL)', summary: 'Persistent high count, splenomegaly / lymphocytosis, older', baseline: 2, category: 'less-common',
        keyExam: 'Splenomegaly, lymphadenopathy.', nextIx: 'Film, haematology; BCR-ABL (CML), immunophenotyping (CLL).',
        patientPhrase: 'A chronic blood-cell condition can raise the count persistently. A specialist confirms and monitors it.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12' },

      { id: 'acute_leukaemia', name: 'Acute leukaemia', summary: 'Blasts on film, very high WCC, B-symptoms, cytopenias', baseline: 1, category: 'cant-miss',
        keyExam: 'Pallor, bruising, infections, organomegaly.', nextIx: '\u26A1 Same-day haematology — urgent film.',
        patientPhrase: 'These features need an urgent specialist review today to exclude an acute leukaemia.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Same-day haematology' },
    ],
    effects: {
      age: (v) => v >= 60 ? { cml_cll: +4 } : {},
      infection: { reactive_neutrophilia: +18 },
      steroids_stress: { reactive_neutrophilia: +14 },

      neutrophilia: { reactive_neutrophilia: +12, cml_cll: +4 },
      lymphocytosis: { reactive_lymphocytosis: +14, cml_cll: +6 },
      eosinophilia: { eosinophilia: +24 },

      wcc: (v) => v != null && v > 50 ? { acute_leukaemia: +8, cml_cll: +6 } : {},
      persistent: { cml_cll: +12, reactive_neutrophilia: -6 },

      blasts: { acute_leukaemia: +30 },
      b_symptoms: { cml_cll: +12, acute_leukaemia: +8 },
    },
    askAbout: {
      reactive_neutrophilia: ['infection', 'neutrophilia'],
      reactive_lymphocytosis: ['lymphocytosis'],
      eosinophilia: ['eosinophilia'],
      cml_cll: ['persistent', 'b_symptoms'],
      acute_leukaemia: ['blasts', 'wcc'],
    },
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'BSH — Haematology guidelines', url: 'https://b-s-h.org.uk/guidelines/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'leucocytosis', label: 'Leucocytosis', triage: 'leucocytosis-triage', dx: 'leucocytosis-dx' }
  );
})();
