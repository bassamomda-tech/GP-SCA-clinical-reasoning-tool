/* ============================================
   Diagnostic Tool pack — Neck Lump
   Shared-id triage + differential. NICE NG12 · CKS.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'smoker_alcohol', kind: 'check', label: 'Smoker / high alcohol (head & neck cancer risk)' },

    { group: 'Lump character', id: 'recent_infection', kind: 'check', label: 'Tender, recent URTI / dental infection (reactive)' },
    { group: 'Lump character', id: 'midline_moves_swallow', kind: 'check', label: 'Midline, moves with swallowing (thyroid/thyroglossal)' },
    { group: 'Lump character', id: 'salivary', kind: 'check', label: 'At angle of jaw / below ear, meal-related swelling (salivary)' },
    { group: 'Lump character', id: 'cystic_young', kind: 'check', label: 'Soft cystic, lateral, young (branchial cyst)' },

    { group: 'Red flags', id: 'persistent_3wk', kind: 'check', label: 'Persistent unexplained lump >3 weeks' },
    { group: 'Red flags', id: 'hard_fixed_node', kind: 'check', label: 'Hard / fixed / >2cm node, or supraclavicular' },
    { group: 'Red flags', id: 'head_neck_sx', kind: 'check', label: 'Hoarseness / dysphagia / oral ulcer / unilateral ear pain >3 weeks' },
    { group: 'Red flags', id: 'b_symptoms', kind: 'check', label: 'Weight loss / night sweats / generalised lymphadenopathy (lymphoma)' },
  ];

  if (window.RGPTriage) RGPTriage.register('neck-lump-triage', {
    title: 'Neck lump — triage',
    subtitle: 'Tick features. Surfaces head & neck and haematological 2WW pathways (NICE NG12).',
    guideline: 'NICE NG12 · CKS',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Examine; reactive nodes with clear infection → review after treatment; persistent unexplained lump → urgent imaging/referral.',
    rules: [
      {
        id: 'head_neck_2ww', tier: 'cancer',
        label: 'Suspected head & neck cancer — persistent lump >3 weeks / hard fixed node / red-flag symptoms',
        action: 'Head & neck 2WW (NICE NG12); USS-guided FNA.',
        patientPhrase: '"A lump that has lasted this long needs an urgent specialist assessment to be safe."',
        source: 'NICE NG12 §1.9', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.persistent_3wk || i.hard_fixed_node || i.head_neck_sx,
      },
      {
        id: 'lymphoma_2ww', tier: 'cancer',
        label: 'Possible lymphoma — node + B-symptoms / generalised lymphadenopathy',
        action: 'Urgent FBC, film, LDH; haematology 2WW.',
        source: 'NICE NG12 §1.10',
        when: i => i.b_symptoms,
      },
      {
        id: 'thyroid', tier: 'urgent',
        label: 'Thyroid nodule / goitre',
        action: 'TFT + USS (U-grading); refer per findings.',
        source: 'NICE NG12',
        when: i => i.midline_moves_swallow,
      },
      {
        id: 'reactive', tier: 'routine',
        label: 'Likely reactive lymphadenopathy',
        action: 'Treat infection; review in 2–3 weeks; refer if persists / red flags develop.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE CKS — Neck lump', url: 'https://cks.nice.org.uk/topics/neck-lump/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('neck-lump-dx', {
    title: 'Neck lump — differential',
    subtitle: 'The engine weights reactive nodes, thyroid, salivary and congenital cysts, and always surfaces head & neck cancer and lymphoma.',
    guideline: 'NICE NG12 · CKS',
    patientPresenting: "I've found a lump in my neck, doctor — it's been there a few weeks.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'reactive', name: 'Reactive lymphadenopathy', summary: 'Tender, mobile, recent infection, resolves', baseline: 12, category: 'common',
        keyExam: 'Tender mobile node; source of infection.', nextIx: 'Treat infection; review 2–3 weeks; refer if persists.',
        patientPhrase: 'A gland reacting to a nearby infection is the commonest cause. It usually settles once the infection clears.',
        ciksUrl: 'https://cks.nice.org.uk/topics/neck-lump/' },
      { id: 'thyroid', name: 'Thyroid nodule / goitre', summary: 'Midline, moves with swallowing', baseline: 5, category: 'common',
        keyExam: 'Moves on swallowing; assess thyroid status.', nextIx: 'TFT + USS (U-grading); FNA per grading.',
        patientPhrase: 'A thyroid lump. We check thyroid function and scan it to decide if anything more is needed.',
        ciksUrl: 'https://cks.nice.org.uk/topics/neck-lump/' },
      { id: 'salivary', name: 'Salivary gland lump', summary: 'Angle of jaw / below ear, meal-related', baseline: 3, category: 'less-common',
        keyExam: 'Salivary swelling; stone vs mass.', nextIx: 'USS; ENT if persistent mass.',
        patientPhrase: 'A salivary gland swelling, often from a stone. A scan tells us the cause.',
        ciksUrl: 'https://cks.nice.org.uk/topics/neck-lump/' },
      { id: 'congenital', name: 'Branchial / thyroglossal cyst', summary: 'Young, soft cystic; thyroglossal moves with tongue protrusion', baseline: 3, category: 'less-common',
        keyExam: 'Cystic lump; location.', nextIx: 'USS; ENT for excision.',
        patientPhrase: 'A benign developmental cyst. It is harmless but often removed if bothersome.',
        ciksUrl: 'https://cks.nice.org.uk/topics/neck-lump/' },

      { id: 'head_neck_cancer', name: 'Head & neck cancer', summary: 'Persistent hard/fixed node, smoker, red-flag symptoms', baseline: 1, category: 'cant-miss',
        keyExam: 'Hard fixed node, oral lesion, hoarseness.', nextIx: '\u26A1 Head & neck 2WW (NICE NG12).',
        patientPhrase: 'A persistent firm lump needs an urgent specialist assessment to exclude cancer — many prove benign.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Head & neck 2WW' },
      { id: 'lymphoma', name: 'Lymphoma', summary: 'Node + B-symptoms / generalised lymphadenopathy', baseline: 1, category: 'cant-miss',
        keyExam: 'Rubbery nodes, hepatosplenomegaly.', nextIx: '\u26A1 FBC, film, LDH; haematology 2WW.',
        patientPhrase: 'Painless gland swelling with these features needs urgent tests to exclude a lymph-gland cancer.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Haematology 2WW' },
    ],
    effects: {
      age: (v) => v >= 45 ? { head_neck_cancer: +6, reactive: -2 } : (v < 30 ? { reactive: +4, congenital: +4 } : {}),
      smoker_alcohol: { head_neck_cancer: +12 },

      recent_infection: { reactive: +20 },
      midline_moves_swallow: { thyroid: +24 },
      salivary: { salivary: +22 },
      cystic_young: { congenital: +22 },

      persistent_3wk: { head_neck_cancer: +12, reactive: -8 },
      hard_fixed_node: { head_neck_cancer: +20 },
      head_neck_sx: { head_neck_cancer: +16 },
      b_symptoms: { lymphoma: +28 },
    },
    askAbout: {
      reactive: ['recent_infection'],
      thyroid: ['midline_moves_swallow'],
      salivary: ['salivary'],
      congenital: ['cystic_young'],
      head_neck_cancer: ['persistent_3wk', 'hard_fixed_node', 'head_neck_sx'],
      lymphoma: ['b_symptoms'],
    },
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE CKS — Neck lump', url: 'https://cks.nice.org.uk/topics/neck-lump/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'neck-lump', label: 'Neck lump', triage: 'neck-lump-triage', dx: 'neck-lump-dx' }
  );
})();
