/* ============================================
   Diagnostic Tool pack — Hyperthyroidism
   Shared-id triage + differential. NICE NG145 · CKS Hyperthyroidism · BTA.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'female', kind: 'check', label: 'Female sex' },
    { group: 'Demographics & context', id: 'pregnant', kind: 'check', label: 'Pregnant / postpartum' },
    { group: 'Demographics & context', id: 'amiodarone', kind: 'check', label: 'On amiodarone / lithium / iodine / levothyroxine' },

    { group: 'Symptoms / signs', id: 'weight_loss', kind: 'check', label: 'Weight loss with good appetite' },
    { group: 'Symptoms / signs', id: 'tremor_sweats', kind: 'check', label: 'Tremor / heat intolerance / sweating' },
    { group: 'Symptoms / signs', id: 'palpitations', kind: 'check', label: 'Palpitations / AF' },
    { group: 'Symptoms / signs', id: 'eye', kind: 'check', label: 'Eye signs (proptosis, lid lag, diplopia)' },
    { group: 'Symptoms / signs', id: 'goitre', kind: 'check', label: 'Diffuse goitre / bruit' },
    { group: 'Symptoms / signs', id: 'nodule', kind: 'check', label: 'Solitary / multinodular goitre' },
    { group: 'Symptoms / signs', id: 'painful_thyroid', kind: 'check', label: 'Painful/tender thyroid / recent viral illness' },

    { group: 'Bloods', id: 'tsh', kind: 'number', label: 'TSH', unit: 'mU/L', step: 0.01 },
    { group: 'Bloods', id: 'high_t4', kind: 'check', label: 'Free T4 / T3 raised' },
    { group: 'Bloods', id: 'trab', kind: 'check', label: 'TRAb / TPO positive' },

    { group: 'Red flags', id: 'storm', kind: 'check', label: 'Fever + tachyarrhythmia + agitation/confusion (? thyroid storm)' },
    { group: 'Red flags', id: 'cardiac', kind: 'check', label: 'New AF / heart failure / chest pain' },
  ];

  if (window.RGPTriage) RGPTriage.register('hyperthyroidism-triage', {
    title: 'Hyperthyroidism — triage',
    subtitle: 'Tick features / enter TSH. Surfaces thyroid storm, cardiac and pregnancy pathways.',
    guideline: 'NICE NG145 · CKS · BTA',
    inputs: INPUTS,
    defaultMessage: 'No emergency rule fired. Confirm with TSH + free T4/T3; request TRAb and consider isotope uptake to define cause; start beta-blocker for symptoms and refer endocrinology per NG145.',
    rules: [
      {
        id: 'storm', tier: 'emergency',
        label: 'Possible thyroid storm — fever + tachyarrhythmia + agitation/confusion',
        action: 'Call 999 — medical emergency; admit for supportive care + antithyroid treatment.',
        patientPhrase: '"Your thyroid appears dangerously overactive — this needs emergency hospital care now."',
        source: 'BTA / endocrine emergencies',
        when: i => i.storm,
      },
      {
        id: 'cardiac', tier: 'urgent',
        label: 'Thyrotoxic cardiac complication — new AF / heart failure / chest pain',
        action: 'ECG; rate control (beta-blocker); same-week endocrinology; anticoagulation decision for AF.',
        source: 'NICE NG145 / NG196',
        when: i => i.cardiac || i.palpitations,
      },
      {
        id: 'pregnancy', tier: 'urgent',
        label: 'Hyperthyroidism in pregnancy / planning',
        action: 'Urgent endocrine + obstetric referral; avoid radioiodine; specialist antithyroid choice.',
        source: 'NICE NG145',
        when: i => i.pregnant,
      },
      {
        id: 'confirmed', tier: 'urgent',
        label: 'Biochemical thyrotoxicosis (suppressed TSH + raised T4/T3)',
        action: 'Beta-blocker for symptoms; TRAb ± uptake scan; refer endocrinology for antithyroid therapy.',
        source: 'NICE NG145',
        when: i => (i.tsh != null && i.tsh < 0.1) || i.high_t4,
      },
      {
        id: 'subclinical', tier: 'routine',
        label: 'Subclinical / mild (low TSH, normal T4/T3)',
        action: 'Repeat TFTs in 2–3 months; treat/refer if persistent, symptomatic, AF, or low BMD.',
        source: 'NICE NG145',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG145 — Thyroid disease', url: 'https://www.nice.org.uk/guidance/ng145' },
      { label: 'NICE CKS — Hyperthyroidism', url: 'https://cks.nice.org.uk/topics/hyperthyroidism/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('hyperthyroidism-dx', {
    title: 'Hyperthyroidism — differential (cause)',
    subtitle: 'Thyrotoxicosis confirmed biochemically — the engine weights the underlying cause from eye signs, goitre type, antibodies and pain pattern, and flags thyroid storm.',
    guideline: 'NICE NG145 · BTA',
    patientPresenting: "I've lost weight without trying, doctor, my heart races and I feel hot and shaky all the time.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'graves', name: 'Graves\u2019 disease', summary: 'Diffuse goitre + eye signs + TRAb positive, younger female', baseline: 11, category: 'common',
        keyExam: 'Diffuse goitre with bruit, proptosis, lid lag, pretibial myxoedema.', nextIx: 'TRAb positive; diffuse uptake on isotope scan; antithyroid drugs / RAI / surgery.',
        patientPhrase: 'Your immune system is over-stimulating the thyroid. It is very treatable — medication calms it and we monitor closely.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyperthyroidism/' },
      { id: 'toxic_nodular', name: 'Toxic nodular goitre / adenoma', summary: 'Older patient, nodular goitre, no eye signs, TRAb negative', baseline: 6, category: 'common',
        keyExam: 'Solitary nodule or multinodular goitre.', nextIx: 'Isotope scan (hot nodule[s]); RAI or surgery often definitive.',
        patientPhrase: 'One or more thyroid lumps are producing too much hormone. Treatment targets the overactive tissue.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyperthyroidism/' },
      { id: 'thyroiditis', name: 'Thyroiditis (de Quervain / post-partum)', summary: 'Painful or postpartum, transient, low uptake', baseline: 4, category: 'less-common',
        keyExam: 'Tender thyroid (subacute) or recent delivery; often self-limiting.', nextIx: 'Low isotope uptake; raised inflammatory markers (subacute); supportive (NSAID, beta-blocker).',
        patientPhrase: 'The thyroid is temporarily inflamed and leaking hormone. It usually settles by itself over weeks.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyperthyroidism/' },
      { id: 'drug', name: 'Drug-induced (amiodarone / iodine / levothyroxine)', summary: 'Relevant drug exposure', baseline: 3, category: 'less-common',
        keyExam: 'Medication review.', nextIx: 'Review drug with specialist (amiodarone types I/II); adjust levothyroxine if over-replaced.',
        patientPhrase: 'A medication is driving the thyroid. We work with the specialist to adjust it safely.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyperthyroidism/' },

      { id: 'storm', name: 'Thyroid storm', summary: 'Fever + tachyarrhythmia + agitation / confusion', baseline: 1, category: 'cant-miss',
        keyExam: 'Hyperpyrexia, AF/SVT, agitation, signs of decompensation.', nextIx: '\u26A1 999 — emergency admission for supportive care + antithyroid therapy.',
        patientPhrase: 'This is a dangerous overactivity of the thyroid needing emergency treatment today.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyperthyroidism/', redFlagAction: '\u26A1 999 / emergency admission' },
    ],
    effects: {
      age: (v) => v >= 60 ? { toxic_nodular: +8, graves: -3 } : (v < 40 ? { graves: +4 } : {}),
      female: { graves: +4, thyroiditis: +2 },
      pregnant: { thyroiditis: +4, graves: +2 },
      amiodarone: { drug: +20 },

      weight_loss: { graves: +4, toxic_nodular: +3 },
      tremor_sweats: { graves: +3, toxic_nodular: +2 },
      palpitations: { graves: +2, toxic_nodular: +3 },
      eye: { graves: +24 },
      goitre: { graves: +14 },
      nodule: { toxic_nodular: +22, graves: -6 },
      painful_thyroid: { thyroiditis: +24 },

      tsh: (v) => v != null && v < 0.1 ? { graves: +4, toxic_nodular: +4 } : {},
      high_t4: { graves: +3, toxic_nodular: +3, storm: +2 },
      trab: { graves: +20, toxic_nodular: -6 },

      storm: { storm: +34 },
      cardiac: { toxic_nodular: +4, graves: +2 },
    },
    askAbout: {
      graves: ['eye', 'goitre', 'trab'],
      toxic_nodular: ['nodule', 'age'],
      thyroiditis: ['painful_thyroid', 'pregnant'],
      drug: ['amiodarone'],
      storm: ['storm'],
    },
    sources: [
      { label: 'NICE NG145 — Thyroid disease', url: 'https://www.nice.org.uk/guidance/ng145' },
      { label: 'NICE CKS — Hyperthyroidism', url: 'https://cks.nice.org.uk/topics/hyperthyroidism/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'hyperthyroidism', label: 'Hyperthyroidism', triage: 'hyperthyroidism-triage', dx: 'hyperthyroidism-dx' }
  );
})();
