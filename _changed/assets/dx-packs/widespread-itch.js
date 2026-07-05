/* ============================================
   Diagnostic Tool pack — Widespread Itch (pruritus without rash)
   Shared-id triage + differential. CKS · NICE NG12.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'drugs', kind: 'check', label: 'New drug (opioid, ACEi, statin, allopurinol)' },

    { group: 'Skin vs systemic', id: 'primary_rash', kind: 'check', label: 'Primary skin rash present (eczema/scabies/urticaria)' },
    { group: 'Skin vs systemic', id: 'no_rash', kind: 'check', label: 'No primary rash (only excoriations) — systemic cause likely' },

    { group: 'Systemic clues', id: 'cholestatic', kind: 'check', label: 'Jaundice / pale stool / dark urine (cholestasis)' },
    { group: 'Systemic clues', id: 'renal', kind: 'check', label: 'Known CKD / uraemia' },
    { group: 'Systemic clues', id: 'iron_def', kind: 'check', label: 'Pallor / heavy periods / iron deficiency' },
    { group: 'Systemic clues', id: 'thyroid', kind: 'check', label: 'Thyroid symptoms' },
    { group: 'Systemic clues', id: 'polycythaemia', kind: 'check', label: 'Itch after warm bath / ruddy complexion (polycythaemia)' },

    { group: 'Red flags', id: 'lymphoma_b', kind: 'check', label: 'Weight loss / night sweats / lymphadenopathy (lymphoma)' },
  ];

  if (window.RGPTriage) RGPTriage.register('widespread-itch-triage', {
    title: 'Widespread itch — triage',
    subtitle: 'Tick features. Surfaces lymphoma and the systemic (liver / renal / haematological / endocrine) workup.',
    guideline: 'CKS · NICE NG12',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Examine for a primary skin cause; if none (only scratch marks), screen systemically: FBC, ferritin, U&E, LFT, TFT, glucose, ± HIV; treat cause + symptomatic relief.',
    rules: [
      {
        id: 'lymphoma_2ww', tier: 'cancer',
        label: 'Itch + B-symptoms — exclude lymphoma',
        action: 'FBC, film, LDH; haematology 2WW (NICE NG12).',
        source: 'NICE NG12 §1.10', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.lymphoma_b,
      },
      {
        id: 'cholestasis', tier: 'urgent',
        label: 'Cholestatic itch — jaundice / abnormal LFTs',
        action: 'LFTs + bile acids; USS; investigate obstruction (consider malignancy if painless + weight loss).',
        source: 'CKS',
        when: i => i.cholestatic,
      },
      {
        id: 'systemic', tier: 'urgent',
        label: 'Systemic cause — renal / iron / thyroid / polycythaemia',
        action: 'Targeted bloods (U&E, ferritin, TFT, FBC/Hct); treat cause.',
        source: 'CKS',
        when: i => i.renal || i.iron_def || i.thyroid || i.polycythaemia,
      },
      {
        id: 'skin', tier: 'routine',
        label: 'Primary skin / drug cause',
        action: 'Treat dermatosis (eczema/scabies/urticaria); review drugs; emollients + antihistamine.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Itch (pruritus)', url: 'https://cks.nice.org.uk/topics/itch-widespread/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('widespread-itch-dx', {
    title: 'Widespread itch — differential',
    subtitle: 'The engine separates primary skin disease and drug cause from systemic itch (cholestatic, renal, iron, thyroid, polycythaemia), and surfaces lymphoma.',
    guideline: 'CKS · NICE NG12',
    patientPresenting: "I'm itching all over, doctor, but there's no rash to show for it.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'skin', name: 'Primary skin disease', summary: 'Eczema / scabies / urticaria / xerosis', baseline: 11, category: 'common',
        keyExam: 'Rash, burrows, dry skin.', nextIx: 'Treat dermatosis; emollients; scabies treatment if burrows.',
        patientPhrase: 'A skin condition is the commonest cause. Examination identifies it and targeted treatment relieves the itch.',
        ciksUrl: 'https://cks.nice.org.uk/topics/itch-widespread/' },
      { id: 'drug', name: 'Drug-induced', summary: 'Opioid / ACEi / statin / allopurinol', baseline: 5, category: 'common',
        keyExam: 'Medication timeline.', nextIx: 'Review/stop offending drug.',
        patientPhrase: 'A medication can cause generalised itch. Reviewing it usually helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/itch-widespread/' },
      { id: 'cholestatic', name: 'Cholestatic / liver disease', summary: 'Jaundice, abnormal LFTs', baseline: 3, category: 'less-common',
        keyExam: 'Jaundice, scratch marks.', nextIx: 'LFTs + bile acids; USS; treat cause.',
        patientPhrase: 'A liver/bile problem can cause intense itch. Blood tests and a scan find the cause.',
        ciksUrl: 'https://cks.nice.org.uk/topics/itch-widespread/' },
      { id: 'renal', name: 'Uraemic (CKD) itch', summary: 'Known CKD', baseline: 3, category: 'less-common',
        keyExam: 'CKD features.', nextIx: 'Optimise CKD; emollients; specific therapies.',
        patientPhrase: 'Reduced kidney function can cause itch. Managing the kidneys and the skin helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/chronic-kidney-disease/' },
      { id: 'iron', name: 'Iron deficiency', summary: 'Pallor, heavy periods', baseline: 3, category: 'common',
        keyExam: 'Pallor.', nextIx: 'Ferritin; replace iron.',
        patientPhrase: 'Iron deficiency can cause itch. Correcting it relieves it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/anaemia-iron-deficiency/' },
      { id: 'thyroid', name: 'Thyroid disease', summary: 'Hyper- or hypothyroid', baseline: 2, category: 'less-common',
        keyExam: 'Thyroid signs.', nextIx: 'TFT; treat.',
        patientPhrase: 'A thyroid imbalance can cause itch. A blood test checks it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/itch-widespread/' },
      { id: 'polycythaemia', name: 'Polycythaemia / myeloproliferative', summary: 'Itch after warm bath, ruddy complexion', baseline: 1, category: 'less-common',
        keyExam: 'Plethora, splenomegaly.', nextIx: 'FBC/Hct; JAK2; haematology.',
        patientPhrase: 'Aquagenic itch can signal a blood condition. A blood count checks for it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/itch-widespread/' },

      { id: 'lymphoma', name: 'Lymphoma / malignancy', summary: 'Itch + weight loss / night sweats / lymphadenopathy', baseline: 1, category: 'cant-miss',
        keyExam: 'Lymphadenopathy, hepatosplenomegaly.', nextIx: '\u26A1 FBC, film, LDH; haematology 2WW.',
        patientPhrase: 'Persistent itch with these features needs urgent tests to exclude a lymph-gland cancer.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Haematology 2WW' },
    ],
    effects: {
      age: (v) => v >= 60 ? { lymphoma: +2, polycythaemia: +1 } : {},
      drugs: { drug: +20 },

      primary_rash: { skin: +22, lymphoma: -6 },
      no_rash: { cholestatic: +4, renal: +4, iron: +4, lymphoma: +4, skin: -10 },

      cholestatic: { cholestatic: +24 },
      renal: { renal: +22 },
      iron_def: { iron: +20 },
      thyroid: { thyroid: +20 },
      polycythaemia: { polycythaemia: +22 },

      lymphoma_b: { lymphoma: +26 },
    },
    askAbout: {
      skin: ['primary_rash'],
      drug: ['drugs'],
      cholestatic: ['cholestatic'],
      renal: ['renal'],
      iron: ['iron_def'],
      thyroid: ['thyroid'],
      polycythaemia: ['polycythaemia'],
      lymphoma: ['lymphoma_b'],
    },
    sources: [
      { label: 'NICE CKS — Itch (pruritus)', url: 'https://cks.nice.org.uk/topics/itch-widespread/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'widespread-itch', label: 'Widespread itch', triage: 'widespread-itch-triage', dx: 'widespread-itch-dx' }
  );
})();
