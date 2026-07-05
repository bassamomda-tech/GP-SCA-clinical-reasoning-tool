/* ============================================
   Diagnostic Tool pack — Sensory (peripheral) Neuropathy
   Shared-id triage + differential. CKS Neuropathic pain · peripheral neuropathy workup.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'diabetes', kind: 'check', label: 'Diabetes / impaired glucose / metabolic syndrome' },
    { group: 'Demographics & context', id: 'alcohol', kind: 'check', label: 'Alcohol excess / poor nutrition' },
    { group: 'Demographics & context', id: 'b12_risk', kind: 'check', label: 'B12 deficiency risk (vegan, PPI, metformin, pernicious anaemia)' },
    { group: 'Demographics & context', id: 'drugs', kind: 'check', label: 'Neurotoxic drug (chemo, isoniazid, amiodarone)' },
    { group: 'Demographics & context', id: 'ckd_thyroid', kind: 'check', label: 'CKD / hypothyroidism' },

    { group: 'Distribution', id: 'symmetrical_gloves', kind: 'check', label: 'Symmetrical glove-and-stocking, distal' },
    { group: 'Distribution', id: 'median_focal', kind: 'check', label: 'Focal: thumb/index, worse at night, wrist (median)' },
    { group: 'Distribution', id: 'asymmetric_painful', kind: 'check', label: 'Asymmetric / multiple nerves, painful (mononeuritis multiplex)' },

    { group: 'Tempo', id: 'chronic', kind: 'check', label: 'Gradual, chronic, slowly progressive' },
    { group: 'Tempo', id: 'ascending_rapid', kind: 'check', label: 'Rapidly ascending weakness over days (± areflexia)' },

    { group: 'Features', id: 'systemic_vasculitis', kind: 'check', label: 'Rash / arthralgia / weight loss / systemic illness' },

    { group: 'Red flags', id: 'motor_breathing', kind: 'check', label: 'Limb weakness / breathing or swallowing difficulty / autonomic upset' },
  ];

  if (window.RGPTriage) RGPTriage.register('sensory-neuropathy-triage', {
    title: 'Sensory neuropathy — triage',
    subtitle: 'Tick features. Surfaces Guillain-Barré, vasculitic neuropathy and the metabolic workup.',
    guideline: 'CKS · peripheral neuropathy workup',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Send first-line workup (HbA1c/glucose, B12/folate, U&E, TFT, FBC, LFT, ESR ± immunoglobulins); treat reversible causes; neuropathic-pain management; refer neurology if cause unclear or atypical.',
    rules: [
      {
        id: 'gbs', tier: 'emergency',
        label: 'Possible Guillain-Barré — rapidly ascending weakness ± areflexia / breathing or swallowing difficulty',
        action: 'Same-day admission — neurology, spirometry (FVC), supportive care.',
        patientPhrase: '"Weakness spreading this quickly needs emergency hospital assessment today."',
        source: 'CKS / neurology',
        when: i => i.ascending_rapid || i.motor_breathing,
      },
      {
        id: 'vasculitic', tier: 'urgent',
        label: 'Mononeuritis multiplex / systemic features — possible vasculitis',
        action: 'Urgent neurology/rheumatology; ESR/CRP, ANCA, immunology.',
        source: 'CKS',
        when: i => i.asymmetric_painful || i.systemic_vasculitis,
      },
      {
        id: 'metabolic', tier: 'routine',
        label: 'Chronic symmetrical neuropathy — metabolic workup',
        action: 'Bloods (glucose/HbA1c, B12/folate, TFT, U&E, FBC, LFT, ESR); treat cause; neuropathic-pain ladder.',
        source: 'CKS Neuropathic pain',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Neuropathic pain', url: 'https://cks.nice.org.uk/topics/neuropathic-pain-drug-treatment/' },
      { label: 'NICE CKS — Diabetes (neuropathy)', url: 'https://cks.nice.org.uk/topics/diabetes-type-2/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('sensory-neuropathy-dx', {
    title: 'Sensory neuropathy — differential (cause)',
    subtitle: 'The engine weights the common metabolic/toxic causes by distribution and tempo, separates focal entrapment, and always surfaces Guillain-Barré and vasculitic neuropathy when triggered.',
    guideline: 'CKS · peripheral neuropathy',
    patientPresenting: "My feet feel numb and tingly, doctor, like walking on cotton wool — it's been creeping up over months.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'diabetic', name: 'Diabetic / metabolic neuropathy', summary: 'Symmetrical glove-and-stocking, diabetes / IGT', baseline: 11, category: 'common',
        keyExam: 'Reduced distal sensation/vibration, absent ankle reflexes, foot-risk assessment.', nextIx: 'HbA1c/glucose; optimise glycaemic + CV risk; neuropathic-pain treatment; foot care.',
        patientPhrase: 'High glucose has damaged the small nerves to the feet. Tight control plus pain treatment and foot care are key.',
        ciksUrl: 'https://cks.nice.org.uk/topics/diabetes-type-2/' },
      { id: 'b12', name: 'B12 deficiency', summary: 'Distal sensory loss + loss of vibration/proprioception (SCDC)', baseline: 6, category: 'common',
        keyExam: 'Lost vibration/proprioception, brisk reflexes paradoxically.', nextIx: 'B12, folate, FBC; replace with hydroxocobalamin (urgent if neuro features).',
        patientPhrase: 'Low B12 damages nerves but is very treatable with injections — earlier treatment protects the nerves.',
        ciksUrl: 'https://cks.nice.org.uk/topics/anaemia-b12-and-folate-deficiency/' },
      { id: 'alcohol', name: 'Alcohol / nutritional neuropathy', summary: 'Chronic symmetrical, alcohol excess / poor diet', baseline: 4, category: 'common',
        keyExam: 'Distal sensory loss; signs of alcohol excess.', nextIx: 'Reduce alcohol; thiamine + B-vitamins; treat deficiency.',
        patientPhrase: 'Alcohol and poor nutrition damage nerves. Cutting down and replacing vitamins helps recovery.',
        ciksUrl: 'https://cks.nice.org.uk/topics/neuropathic-pain-drug-treatment/' },
      { id: 'entrapment', name: 'Entrapment (e.g. carpal tunnel)', summary: 'Focal: median territory, worse at night', baseline: 5, category: 'common',
        keyExam: 'Tinel/Phalen positive; thenar wasting if severe.', nextIx: 'Clinical ± nerve conduction; splint, steroid injection, decompression; check thyroid/diabetes.',
        patientPhrase: 'A nerve is being pinched at the wrist. Splinting often helps, and a small procedure cures it if needed.',
        ciksUrl: 'https://cks.nice.org.uk/topics/carpal-tunnel-syndrome/' },
      { id: 'drug', name: 'Drug-induced / toxic', summary: 'Chemo, isoniazid, amiodarone', baseline: 3, category: 'less-common',
        keyExam: 'Medication review.', nextIx: 'Review offending drug with specialist; pyridoxine with isoniazid.',
        patientPhrase: 'A medication can damage nerves. We review whether it can be changed.',
        ciksUrl: 'https://cks.nice.org.uk/topics/neuropathic-pain-drug-treatment/' },
      { id: 'endocrine_renal', name: 'Hypothyroid / uraemic neuropathy', summary: 'CKD or hypothyroidism', baseline: 2, category: 'less-common',
        keyExam: 'Features of thyroid/renal disease.', nextIx: 'TFT, U&E; treat underlying condition.',
        patientPhrase: 'Thyroid or kidney problems can affect nerves. Treating them improves symptoms.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypothyroidism/' },

      { id: 'gbs', name: 'Guillain-Barré syndrome', summary: 'Rapidly ascending weakness, areflexia, ± respiratory compromise', baseline: 1, category: 'cant-miss',
        keyExam: 'Ascending weakness, areflexia, autonomic instability, reduced FVC.', nextIx: '\u26A1 Same-day admission — neurology, FVC monitoring, IVIG/plasma exchange.',
        patientPhrase: 'Weakness spreading rapidly upward is an emergency needing hospital treatment today.',
        ciksUrl: 'https://cks.nice.org.uk/topics/neuropathic-pain-drug-treatment/', redFlagAction: '\u26A1 Same-day admission' },
      { id: 'vasculitic', name: 'Vasculitic neuropathy (mononeuritis multiplex)', summary: 'Asymmetric, painful, multiple nerves, systemic illness', baseline: 1, category: 'cant-miss',
        keyExam: 'Asymmetric deficits, rash, systemic features.', nextIx: '\u26A1 Urgent neurology/rheumatology — ESR/CRP, ANCA, nerve conduction ± biopsy.',
        patientPhrase: 'Inflammation of the nerve blood supply needs urgent specialist assessment and treatment.',
        ciksUrl: 'https://cks.nice.org.uk/topics/neuropathic-pain-drug-treatment/', redFlagAction: '\u26A1 Urgent neurology/rheum' },
    ],
    effects: {
      diabetes: { diabetic: +22, entrapment: +4 },
      alcohol: { alcohol: +20 },
      b12_risk: { b12: +18 },
      drugs: { drug: +20 },
      ckd_thyroid: { endocrine_renal: +18, entrapment: +4 },

      symmetrical_gloves: { diabetic: +10, b12: +6, alcohol: +6 },
      median_focal: { entrapment: +24, diabetic: -4 },
      asymmetric_painful: { vasculitic: +24 },

      chronic: { diabetic: +4, b12: +3, alcohol: +3, gbs: -8 },
      ascending_rapid: { gbs: +30 },

      systemic_vasculitis: { vasculitic: +18 },
      motor_breathing: { gbs: +20 },
    },
    askAbout: {
      diabetic: ['diabetes', 'symmetrical_gloves'],
      b12: ['b12_risk', 'symmetrical_gloves'],
      alcohol: ['alcohol'],
      entrapment: ['median_focal'],
      drug: ['drugs'],
      endocrine_renal: ['ckd_thyroid'],
      gbs: ['ascending_rapid', 'motor_breathing'],
      vasculitic: ['asymmetric_painful', 'systemic_vasculitis'],
    },
    sources: [
      { label: 'NICE CKS — Neuropathic pain', url: 'https://cks.nice.org.uk/topics/neuropathic-pain-drug-treatment/' },
      { label: 'NICE CKS — B12 & folate deficiency', url: 'https://cks.nice.org.uk/topics/anaemia-b12-and-folate-deficiency/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'sensory-neuropathy', label: 'Sensory neuropathy', triage: 'sensory-neuropathy-triage', dx: 'sensory-neuropathy-dx' }
  );
})();
