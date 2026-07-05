/* ============================================
   Diagnostic Tool pack — Developmental Delay
   Shared-id triage + differential. CKS · Healthy Child Programme.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Age', id: 'age_months', kind: 'number', label: 'Age', unit: 'months', min: 0, max: 72, step: 1 },

    { group: 'Domain', id: 'global', kind: 'check', label: 'Delay across ≥2 domains (global)' },
    { group: 'Domain', id: 'motor', kind: 'check', label: 'Gross/fine motor delay (not sitting/walking by limits)' },
    { group: 'Domain', id: 'speech_language', kind: 'check', label: 'Speech & language delay' },
    { group: 'Domain', id: 'social_communication', kind: 'check', label: 'Social-communication concerns (?autism)' },

    { group: 'Cause clues', id: 'hearing_vision', kind: 'check', label: 'Hearing / vision concern' },
    { group: 'Cause clues', id: 'perinatal_risk', kind: 'check', label: 'Prematurity / perinatal / FH genetic' },

    { group: 'Red flags', id: 'regression', kind: 'check', label: 'Loss of previously acquired skills (regression)' },
    { group: 'Red flags', id: 'neuro_signs', kind: 'check', label: 'Abnormal tone / asymmetry / large or small head / seizures' },
    { group: 'Red flags', id: 'safeguarding', kind: 'check', label: 'Neglect / safeguarding concern' },
  ];

  if (window.RGPTriage) RGPTriage.register('developmental-delay-triage', {
    title: 'Developmental delay — triage',
    subtitle: 'Tick features. Surfaces regression (urgent), neuro signs and the multidisciplinary pathway.',
    guideline: 'CKS · HCP',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Confirm with a structured developmental history/screen; check hearing & vision; refer to community paediatrics / appropriate therapy; involve health visitor.',
    rules: [
      {
        id: 'regression', tier: 'urgent',
        label: 'Developmental regression / neurological signs',
        action: 'Urgent paediatric/neurology referral — regression needs prompt investigation.',
        patientPhrase: '"Losing skills already gained needs a prompt specialist assessment to find the cause."',
        source: 'CKS',
        when: i => i.regression || i.neuro_signs,
      },
      {
        id: 'sensory', tier: 'urgent',
        label: 'Hearing / vision concern',
        action: 'Audiology + ophthalmology assessment (treatable contributors).',
        source: 'HCP',
        when: i => i.hearing_vision,
      },
      {
        id: 'safeguarding', tier: 'urgent',
        label: 'Safeguarding / neglect concern',
        action: 'Follow safeguarding pathway alongside developmental assessment.',
        source: 'NICE CG89',
        when: i => i.safeguarding,
      },
      {
        id: 'refer', tier: 'routine',
        label: 'Developmental delay — assess & refer',
        action: 'Community paediatrics; speech & language / physio / OT; hearing & vision check; review.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Developmental delay / disability', url: 'https://cks.nice.org.uk/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('developmental-delay-dx', {
    title: 'Developmental delay — pattern & cause',
    subtitle: 'The engine characterises the delay (global vs domain-specific), highlights treatable sensory contributors, and always surfaces regression and neurological causes.',
    guideline: 'CKS · HCP',
    patientPresenting: "I'm worried my child isn't developing like other children, doctor.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'speech', name: 'Speech & language delay', summary: 'Isolated language delay', baseline: 8, category: 'common',
        keyExam: 'Language behind milestones; check hearing.', nextIx: 'Hearing test; speech & language therapy referral.',
        patientPhrase: 'Language delay is common and often improves with support — we check hearing and involve speech therapy.',
        ciksUrl: 'https://cks.nice.org.uk/' },
      { id: 'motor', name: 'Motor delay', summary: 'Gross/fine motor behind milestones', baseline: 5, category: 'common',
        keyExam: 'Tone, posture, milestones.', nextIx: 'Physiotherapy/OT; paediatric assessment if persistent/asymmetric.',
        patientPhrase: 'Motor skills are behind expected — therapy supports progress, and we look for any underlying cause.',
        ciksUrl: 'https://cks.nice.org.uk/' },
      { id: 'asd', name: 'Autism spectrum / social-communication', summary: 'Social-communication concerns', baseline: 5, category: 'common',
        keyExam: 'Social interaction, communication, repetitive behaviours.', nextIx: 'Autism assessment pathway; multidisciplinary.',
        patientPhrase: 'Differences in social communication may suggest autism — a specialist assessment helps understand and support your child.',
        ciksUrl: 'https://cks.nice.org.uk/topics/autism-in-children/' },
      { id: 'global', name: 'Global developmental delay', summary: 'Delay across ≥2 domains', baseline: 4, category: 'common',
        keyExam: 'Multiple domains affected; dysmorphism.', nextIx: 'Community paediatrics; investigations per cause (genetic, metabolic).',
        patientPhrase: 'Delay across several areas needs a fuller assessment to find a cause and arrange the right support.',
        ciksUrl: 'https://cks.nice.org.uk/' },
      { id: 'sensory', name: 'Hearing / vision impairment', summary: 'Treatable sensory contributor', baseline: 3, category: 'common',
        keyExam: 'Hearing/vision testing.', nextIx: 'Audiology + ophthalmology.',
        patientPhrase: 'A hearing or vision problem can slow development — correcting it can make a big difference.',
        ciksUrl: 'https://cks.nice.org.uk/' },

      { id: 'regression_neuro', name: 'Regression / neurological cause', summary: 'Loss of skills, abnormal tone, head size, seizures', baseline: 1, category: 'cant-miss',
        keyExam: 'Loss of skills, neuro signs, abnormal head growth.', nextIx: '\u26A1 Urgent paediatric/neurology referral + investigation.',
        patientPhrase: 'Losing skills already gained needs a prompt specialist assessment to find and treat the cause.',
        ciksUrl: 'https://cks.nice.org.uk/', redFlagAction: '\u26A1 Urgent paediatric/neurology' },
    ],
    effects: {
      global: { global: +22 },
      motor: { motor: +20 },
      speech_language: { speech: +20 },
      social_communication: { asd: +22 },

      hearing_vision: { sensory: +22 },
      perinatal_risk: { global: +6, motor: +4 },

      regression: { regression_neuro: +28 },
      neuro_signs: { regression_neuro: +22 },
      safeguarding: { global: +2 },
    },
    askAbout: {
      speech: ['speech_language'],
      motor: ['motor'],
      asd: ['social_communication'],
      global: ['global'],
      sensory: ['hearing_vision'],
      regression_neuro: ['regression', 'neuro_signs'],
    },
    sources: [
      { label: 'NICE CKS — Developmental delay', url: 'https://cks.nice.org.uk/' },
      { label: 'NICE CKS — Autism in children', url: 'https://cks.nice.org.uk/topics/autism-in-children/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'developmental-delay', label: 'Developmental delay', triage: 'developmental-delay-triage', dx: 'developmental-delay-dx' }
  );
})();
