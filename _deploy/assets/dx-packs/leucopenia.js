/* ============================================
   Diagnostic Tool pack — Leucopenia (low WCC / neutropenia)
   Shared-id triage + differential. BSH · NICE NG143.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'ethnic_benign', kind: 'check', label: 'Mild isolated neutropenia, well (? ethnic / benign)' },
    { group: 'Drivers', id: 'drugs', kind: 'check', label: 'Drug cause (carbimazole, chemo, clozapine, DMARD, antibiotic)' },
    { group: 'Drivers', id: 'viral', kind: 'check', label: 'Recent viral infection' },
    { group: 'Drivers', id: 'autoimmune', kind: 'check', label: 'Autoimmune disease (SLE, Felty\u2019s)' },
    { group: 'Drivers', id: 'b12_folate', kind: 'check', label: 'B12 / folate deficiency / alcohol' },

    { group: 'Counts', id: 'neutrophils', kind: 'number', label: 'Neutrophils', unit: '×10⁹/L', step: 0.1 },
    { group: 'Counts', id: 'other_lines', kind: 'check', label: 'Also low Hb / platelets (? marrow)' },

    { group: 'Red flags', id: 'fever', kind: 'check', label: 'Fever / signs of infection (febrile neutropenia)' },
    { group: 'Red flags', id: 'b_symptoms', kind: 'check', label: 'Weight loss / night sweats / splenomegaly / blasts' },
  ];

  if (window.RGPTriage) RGPTriage.register('leucopenia-triage', {
    title: 'Leucopenia / neutropenia — triage',
    subtitle: 'Enter neutrophils / tick features. Surfaces febrile neutropenia and marrow pathways.',
    guideline: 'BSH · NICE NG143',
    inputs: INPUTS,
    defaultMessage: 'No emergency rule fired. Repeat FBC + film; review drugs; check B12/folate; assess for infection/autoimmune; refer haematology if severe, persistent, or other lines affected.',
    rules: [
      {
        id: 'febrile_neutropenia', tier: 'emergency',
        label: 'Febrile neutropenia — neutrophils <1.0 + fever / unwell',
        action: 'Call 999 / same-day admission — neutropenic sepsis pathway (antibiotics within 1h, NICE NG143).',
        patientPhrase: '"Your immune cells are very low and you have a fever — that is an emergency, I am arranging admission now."',
        source: 'NICE NG143', sourceUrl: 'https://www.nice.org.uk/guidance/ng143',
        when: i => (i.neutrophils != null && i.neutrophils < 1.0) && (i.fever || false) || (i.fever && i.drugs),
      },
      {
        id: 'severe', tier: 'urgent',
        label: 'Severe neutropenia (<0.5) without fever, or drug-induced agranulocytosis',
        action: 'Same-day haematology advice; stop culprit drug (e.g. carbimazole, clozapine).',
        source: 'BSH',
        when: i => (i.neutrophils != null && i.neutrophils < 0.5) || (i.drugs && i.neutrophils != null && i.neutrophils < 1.0),
      },
      {
        id: 'marrow_2ww', tier: 'cancer',
        label: 'Leucopenia + other cytopenias / B-symptoms / blasts',
        action: 'Urgent FBC + film; haematology (NICE NG12).',
        source: 'NICE NG12',
        when: i => i.other_lines || i.b_symptoms,
      },
      {
        id: 'investigate', tier: 'urgent',
        label: 'Unexplained / persistent neutropenia',
        action: 'Repeat with film; drug review; B12/folate, autoimmune screen; haematology if persists.',
        source: 'BSH',
        when: i => i.neutrophils != null && i.neutrophils < 1.5,
      },
      {
        id: 'benign', tier: 'routine',
        label: 'Mild isolated neutropenia, well',
        action: 'Repeat to confirm; consider ethnic/benign neutropenia; safety-net for infection.',
        source: 'BSH',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG143 — Neutropenic sepsis', url: 'https://www.nice.org.uk/guidance/ng143' },
      { label: 'BSH — Neutropenia', url: 'https://b-s-h.org.uk/guidelines/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('leucopenia-dx', {
    title: 'Leucopenia / neutropenia — differential',
    subtitle: 'The engine weights benign, drug, viral, autoimmune and nutritional causes, and always surfaces febrile neutropenia and marrow malignancy.',
    guideline: 'BSH · NICE NG143',
    patientPresenting: "My white cell count is low, doctor — should I be worried about infections?",
    inputs: INPUTS,
    diagnoses: [
      { id: 'benign', name: 'Benign / ethnic neutropenia', summary: 'Mild, isolated, stable, well', baseline: 8, category: 'common',
        keyExam: 'Well; no infections.', nextIx: 'Confirm with repeat/film; reassure; safety-net.',
        patientPhrase: 'A mildly low count can be normal for you, especially certain backgrounds. It does not increase infection risk.',
        ciksUrl: 'https://b-s-h.org.uk/guidelines/' },
      { id: 'viral', name: 'Viral / post-infective', summary: 'Recent viral illness, transient', baseline: 7, category: 'common',
        keyExam: 'Viral features.', nextIx: 'Repeat FBC after recovery; usually normalises.',
        patientPhrase: 'Viruses commonly lower the count briefly. It recovers as you get better.',
        ciksUrl: 'https://b-s-h.org.uk/guidelines/' },
      { id: 'drug', name: 'Drug-induced', summary: 'Carbimazole, clozapine, chemo, DMARD, antibiotic', baseline: 6, category: 'common',
        keyExam: 'Medication timeline.', nextIx: 'Stop culprit (urgent if agranulocytosis); haematology advice.',
        patientPhrase: 'A medication is lowering the white cells. Stopping it usually recovers the count.',
        ciksUrl: 'https://b-s-h.org.uk/guidelines/' },
      { id: 'nutritional', name: 'B12 / folate deficiency / alcohol', summary: 'Macrocytosis, poor diet, alcohol', baseline: 3, category: 'less-common',
        keyExam: 'Nutritional status.', nextIx: 'B12/folate; replace; reduce alcohol.',
        patientPhrase: 'A vitamin deficiency or alcohol can lower the count. Correcting it helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/anaemia-b12-and-folate-deficiency/' },
      { id: 'autoimmune', name: 'Autoimmune (SLE / Felty\u2019s)', summary: 'Autoimmune disease, often with other features', baseline: 2, category: 'less-common',
        keyExam: 'Arthritis, rash, splenomegaly.', nextIx: 'Autoimmune screen; rheumatology.',
        patientPhrase: 'An autoimmune condition can lower white cells. We test for it and treat the underlying disease.',
        ciksUrl: 'https://b-s-h.org.uk/guidelines/' },

      { id: 'febrile_neutropenia', name: 'Febrile neutropenia', summary: 'Neutrophils <1.0 + fever / unwell', baseline: 1, category: 'cant-miss',
        keyExam: 'Fever, septic, source.', nextIx: '\u26A1 999 / admission — antibiotics within 1h (NICE NG143).',
        patientPhrase: 'Low immune cells with a fever is an emergency needing hospital antibiotics today.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng143', redFlagAction: '\u26A1 Neutropenic sepsis pathway' },
      { id: 'marrow', name: 'Marrow failure / malignancy', summary: 'Other cytopenias, B-symptoms, blasts', baseline: 1, category: 'cant-miss',
        keyExam: 'Pallor, bruising, organomegaly.', nextIx: '\u26A1 Urgent FBC + film; haematology (leukaemia/MDS/aplastic).',
        patientPhrase: 'Low white cells with other low counts need urgent specialist tests to exclude a marrow problem.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Urgent haematology' },
    ],
    effects: {
      ethnic_benign: { benign: +22 },
      drugs: { drug: +22 },
      viral: { viral: +18 },
      autoimmune: { autoimmune: +20 },
      b12_folate: { nutritional: +18 },

      neutrophils: (v) => v == null ? {} : (v < 0.5 ? { febrile_neutropenia: +6, drug: +4, marrow: +4 } : (v >= 1.5 ? { benign: +6, viral: +4 } : {})),
      other_lines: { marrow: +20, benign: -8 },

      fever: { febrile_neutropenia: +20 },
      b_symptoms: { marrow: +22 },
    },
    askAbout: {
      benign: ['ethnic_benign'],
      viral: ['viral'],
      drug: ['drugs'],
      nutritional: ['b12_folate'],
      autoimmune: ['autoimmune'],
      febrile_neutropenia: ['fever', 'neutrophils'],
      marrow: ['other_lines', 'b_symptoms'],
    },
    sources: [
      { label: 'NICE NG143 — Neutropenic sepsis', url: 'https://www.nice.org.uk/guidance/ng143' },
      { label: 'BSH — Neutropenia', url: 'https://b-s-h.org.uk/guidelines/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'leucopenia', label: 'Leucopenia', triage: 'leucopenia-triage', dx: 'leucopenia-dx' }
  );
})();
