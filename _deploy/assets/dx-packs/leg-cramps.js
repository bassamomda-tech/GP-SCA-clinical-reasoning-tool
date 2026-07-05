/* ============================================
   Diagnostic Tool pack — Leg Cramps
   Shared-id triage + differential. CKS Leg cramps.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'pregnant', kind: 'check', label: 'Pregnant' },
    { group: 'Demographics & context', id: 'drugs', kind: 'check', label: 'Diuretic / statin / beta-agonist / nifedipine' },

    { group: 'Pattern', id: 'nocturnal_idiopathic', kind: 'check', label: 'Nocturnal, calf, brief, relieved by stretching, otherwise well' },
    { group: 'Metabolic', id: 'dehydration_electrolyte', kind: 'check', label: 'Dehydration / D&V / known low K/Mg/Ca' },
    { group: 'Vascular', id: 'walking_pain', kind: 'check', label: 'Pain on walking, eased by rest (claudication)' },
    { group: 'Neuro', id: 'neuro_features', kind: 'check', label: 'Numbness / weakness / sciatica / neuropathy' },
    { group: 'Endocrine', id: 'thyroid', kind: 'check', label: 'Thyroid symptoms' },

    { group: 'Red flags', id: 'persistent_progressive', kind: 'check', label: 'Persistent / worsening / muscle wasting / very high CK' },
    { group: 'Red flags', id: 'critical_ischaemia', kind: 'check', label: 'Rest pain / cold pale foot / non-healing ulcer' },
  ];

  if (window.RGPTriage) RGPTriage.register('leg-cramps-triage', {
    title: 'Leg cramps — triage',
    subtitle: 'Tick features. Surfaces critical ischaemia and progressive neuromuscular causes; otherwise reassure idiopathic.',
    guideline: 'CKS Leg cramps',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Idiopathic nocturnal cramps are common and benign — stretching, hydration; review drugs; check U&E/Ca/Mg/glucose/TFT if atypical. Quinine only if severe/refractory and after risk discussion.',
    rules: [
      {
        id: 'critical_ischaemia', tier: 'urgent',
        label: 'Possible critical limb ischaemia — rest pain / cold pale foot / ulcer',
        action: 'Pulses, ABPI; urgent vascular referral.',
        source: 'NICE CG147',
        when: i => i.critical_ischaemia,
      },
      {
        id: 'neuromuscular', tier: 'urgent',
        label: 'Persistent/progressive cramps with neuromuscular features',
        action: 'CK, U&E, TFT; neurology if progressive weakness/wasting; review statin.',
        source: 'CKS',
        when: i => i.persistent_progressive,
      },
      {
        id: 'secondary', tier: 'urgent',
        label: 'Secondary cause — electrolyte / drug / endocrine / vascular',
        action: 'U&E, Ca, Mg, glucose, TFT; correct; review drugs; assess pulses.',
        source: 'CKS',
        when: i => i.dehydration_electrolyte || i.walking_pain || i.thyroid || i.neuro_features,
      },
      {
        id: 'idiopathic', tier: 'routine',
        label: 'Idiopathic nocturnal cramps',
        action: 'Reassure; stretching, hydration; review drugs; quinine only if severe/refractory.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Leg cramps', url: 'https://cks.nice.org.uk/topics/leg-cramps/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('leg-cramps-dx', {
    title: 'Leg cramps — differential',
    subtitle: 'The engine weights idiopathic nocturnal cramps against drug, electrolyte, vascular, neurological and endocrine causes, and surfaces critical ischaemia.',
    guideline: 'CKS Leg cramps',
    patientPresenting: "I keep getting painful cramps in my calves, doctor, especially at night.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'idiopathic', name: 'Idiopathic nocturnal cramps', summary: 'Calf, brief, night-time, relieved by stretching', baseline: 12, category: 'common',
        keyExam: 'Normal exam.', nextIx: 'Reassure; stretching, hydration; usually benign.',
        patientPhrase: 'Night cramps are very common and usually harmless. Stretching and hydration help most people.',
        ciksUrl: 'https://cks.nice.org.uk/topics/leg-cramps/' },
      { id: 'drug', name: 'Drug-induced', summary: 'Diuretic / statin / beta-agonist / nifedipine', baseline: 5, category: 'common',
        keyExam: 'Medication review.', nextIx: 'Review/switch drug; check CK if statin.',
        patientPhrase: 'A medication may be triggering the cramps. We can review it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/leg-cramps/' },
      { id: 'electrolyte', name: 'Electrolyte / dehydration', summary: 'Low K/Mg/Ca, D&V, dehydration, pregnancy', baseline: 4, category: 'common',
        keyExam: 'Hydration.', nextIx: 'U&E, Ca, Mg; correct; hydration.',
        patientPhrase: 'An imbalance of salts or fluid can cause cramps. A blood test checks it and correcting it helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/leg-cramps/' },
      { id: 'vascular', name: 'Peripheral arterial disease', summary: 'Pain on walking, eased by rest, CV risk', baseline: 3, category: 'common',
        keyExam: 'Reduced pulses, low ABPI.', nextIx: 'ABPI; CV risk management.',
        patientPhrase: 'If the pain comes on walking, the circulation may be the issue — we check the pulses and manage risk.',
        ciksUrl: 'https://cks.nice.org.uk/topics/peripheral-arterial-disease/' },
      { id: 'neuro', name: 'Neurological (radiculopathy / neuropathy)', summary: 'Numbness, weakness, sciatica', baseline: 3, category: 'common',
        keyExam: 'Neuro exam.', nextIx: 'Assess; treat cause.',
        patientPhrase: 'A nerve issue can cause cramps and other symptoms — examination helps identify it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/leg-cramps/' },
      { id: 'endocrine', name: 'Hypothyroidism', summary: 'Thyroid symptoms', baseline: 2, category: 'less-common',
        keyExam: 'Thyroid signs.', nextIx: 'TSH; treat.',
        patientPhrase: 'An underactive thyroid can cause muscle cramps. A blood test checks it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypothyroidism/' },

      { id: 'critical_ischaemia', name: 'Critical limb ischaemia', summary: 'Rest pain / cold pale foot / ulcer', baseline: 1, category: 'cant-miss',
        keyExam: 'Cold pulseless foot; rest pain.', nextIx: '\u26A1 Urgent vascular referral.',
        patientPhrase: 'Pain at rest with a cold pale foot means the circulation is critically reduced — urgent vascular review.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg147', redFlagAction: '\u26A1 Urgent vascular' },
    ],
    effects: {
      pregnant: { electrolyte: +6 },
      drugs: { drug: +20 },

      nocturnal_idiopathic: { idiopathic: +22 },
      dehydration_electrolyte: { electrolyte: +22 },
      walking_pain: { vascular: +22 },
      neuro_features: { neuro: +22 },
      thyroid: { endocrine: +20 },

      persistent_progressive: { neuro: +6 },
      critical_ischaemia: { critical_ischaemia: +30 },
    },
    askAbout: {
      idiopathic: ['nocturnal_idiopathic'],
      drug: ['drugs'],
      electrolyte: ['dehydration_electrolyte'],
      vascular: ['walking_pain'],
      neuro: ['neuro_features'],
      endocrine: ['thyroid'],
      critical_ischaemia: ['critical_ischaemia'],
    },
    sources: [
      { label: 'NICE CKS — Leg cramps', url: 'https://cks.nice.org.uk/topics/leg-cramps/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'leg-cramps', label: 'Leg cramps', triage: 'leg-cramps-triage', dx: 'leg-cramps-dx' }
  );
})();
