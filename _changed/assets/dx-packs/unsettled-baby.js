/* ============================================
   Diagnostic Tool pack — Unsettled / Crying Baby
   Shared-id triage + differential. CKS · sepsis red flags.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Age', id: 'age_weeks', kind: 'number', label: 'Age', unit: 'weeks', min: 0, max: 52, step: 1 },

    { group: 'Pattern', id: 'colic_pattern', kind: 'check', label: 'Rule-of-3 crying, paroxysmal, evenings, thriving, otherwise well (colic)' },
    { group: 'Feeding', id: 'feeding_difficulty', kind: 'check', label: 'Feeding/winding difficulty / hunger / overfeeding' },
    { group: 'Feeding', id: 'reflux', kind: 'check', label: 'Posseting, arching, distress after feeds (reflux)' },
    { group: 'Allergy', id: 'cmpa', kind: 'check', label: 'Eczema / GI symptoms / blood-mucus stool / FH atopy (CMPA)' },
    { group: 'Carer', id: 'maternal_mh', kind: 'check', label: 'Parental exhaustion / low mood / not coping' },

    { group: 'Red flags', id: 'sepsis', kind: 'check', label: 'Fever / poor feeding / lethargy / non-blanching rash / inconsolable + unwell (sepsis)' },
    { group: 'Red flags', id: 'surgical', kind: 'check', label: 'Bilious vomiting / distension / blood in stool / scrotal swelling (surgical)' },
    { group: 'Red flags', id: 'injury', kind: 'check', label: 'Inconsolable + bruise / hair-tourniquet / corneal abrasion / non-mobile injury' },
  ];

  if (window.RGPTriage) RGPTriage.register('unsettled-baby-triage', {
    title: 'Unsettled baby — triage',
    subtitle: 'Tick features. Surfaces sepsis, surgical causes and occult injury before reassuring colic.',
    guideline: 'CKS · NG143',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Examine fully (temperature, fontanelle, abdomen, hips, scrotum, eyes, skin, digits/hair-tourniquet). Colic is common but a diagnosis of exclusion — support feeding & parents; safety-net.',
    rules: [
      {
        id: 'sepsis', tier: 'emergency',
        label: 'Possible sepsis / serious illness',
        action: '999 / same-day paediatric — full assessment; <3 months with fever needs urgent review.',
        patientPhrase: '"Your baby has warning signs of serious illness — they need to be seen urgently today."',
        source: 'NICE NG143',
        when: i => i.sepsis,
      },
      {
        id: 'surgical', tier: 'emergency',
        label: 'Possible surgical cause — bilious vomiting / distension / blood in stool / scrotal swelling',
        action: 'Same-day surgical/paediatric assessment.',
        source: 'CKS',
        when: i => i.surgical,
      },
      {
        id: 'injury', tier: 'urgent',
        label: 'Occult injury / safeguarding — examine fully',
        action: 'Look for hair-tourniquet, corneal abrasion, fracture, bruising; safeguarding pathway if concern.',
        source: 'NICE CG89',
        when: i => i.injury,
      },
      {
        id: 'maternal', tier: 'urgent',
        label: 'Parental wellbeing / not coping',
        action: 'Assess parental mental health; health-visitor support; safety-net for shaking risk.',
        source: 'CKS',
        when: i => i.maternal_mh,
      },
      {
        id: 'benign', tier: 'routine',
        label: 'Colic / feeding / reflux',
        action: 'Reassure; feeding & winding support; reflux measures; CMPA trial if features; review.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Colic (infantile)', url: 'https://cks.nice.org.uk/topics/colic-infantile/' },
      { label: 'NICE NG143 — Fever in under 5s', url: 'https://www.nice.org.uk/guidance/ng143' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('unsettled-baby-dx', {
    title: 'Unsettled baby — differential',
    subtitle: 'The engine weights colic, feeding/reflux and CMPA against parental factors, and always surfaces sepsis, surgical causes and occult injury.',
    guideline: 'CKS · NG143',
    patientPresenting: "My baby won't stop crying, doctor, and we're exhausted.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'colic', name: 'Infantile colic', summary: 'Rule-of-3, evenings, thriving, well between', baseline: 12, category: 'common',
        keyExam: 'Thriving; normal exam.', nextIx: 'Reassure (resolves by 3–4 months); feeding/winding support; parental support.',
        patientPhrase: 'Colic is common and benign — paroxysms of crying in a thriving baby that settle by a few months. Support and reassurance are key.',
        ciksUrl: 'https://cks.nice.org.uk/topics/colic-infantile/' },
      { id: 'feeding', name: 'Feeding difficulty', summary: 'Hunger / overfeeding / wind / technique', baseline: 6, category: 'common',
        keyExam: 'Feeding observation.', nextIx: 'Feeding support; health visitor.',
        patientPhrase: 'Feeding amount or technique often underlies crying. Support usually settles it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/colic-infantile/' },
      { id: 'reflux', name: 'GORD', summary: 'Posseting, arching, distress after feeds', baseline: 5, category: 'common',
        keyExam: 'Reflux pattern; thriving.', nextIx: 'Positioning/feeding advice; review if faltering/distressed.',
        patientPhrase: 'Reflux can make feeds uncomfortable. Simple measures help, and we review if it persists.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng1' },
      { id: 'cmpa', name: 'Cow\u2019s milk protein allergy', summary: 'Eczema / GI symptoms / blood-mucus stool / FH atopy', baseline: 3, category: 'common',
        keyExam: 'Eczema; GI features.', nextIx: 'CMP elimination trial + reintroduction; dietitian.',
        patientPhrase: 'Milk-protein allergy can cause distress and gut/skin symptoms. A short elimination trial helps confirm it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/cows-milk-allergy-in-children/' },
      { id: 'parental', name: 'Parental exhaustion / mental health', summary: 'Not coping, low mood', baseline: 3, category: 'common',
        keyExam: 'Parental wellbeing.', nextIx: 'Support; health visitor; safety-net (never shake).',
        patientPhrase: 'Exhaustion is real and important — supporting you is part of helping your baby. Practical help and rest matter.',
        ciksUrl: 'https://cks.nice.org.uk/topics/colic-infantile/' },

      { id: 'serious', name: 'Sepsis / surgical / occult injury', summary: 'Fever, bilious vomiting, distension, hair-tourniquet, fracture', baseline: 2, category: 'cant-miss',
        keyExam: 'Toxic, abdominal/scrotal signs, occult injury.', nextIx: '\u26A1 Same-day paediatric/surgical; full examination including digits & eyes; safeguarding if indicated.',
        patientPhrase: 'Before reassuring, we make sure there is no serious infection, surgical problem or hidden injury — that is why we examine fully.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng143', redFlagAction: '\u26A1 Same-day assessment' },
    ],
    effects: {
      age_weeks: (v) => v != null && v < 6 ? { serious: +3 } : {},

      colic_pattern: { colic: +22 },
      feeding_difficulty: { feeding: +20 },
      reflux: { reflux: +20 },
      cmpa: { cmpa: +22 },
      maternal_mh: { parental: +20 },

      sepsis: { serious: +28 },
      surgical: { serious: +26 },
      injury: { serious: +22 },
    },
    askAbout: {
      colic: ['colic_pattern'],
      feeding: ['feeding_difficulty'],
      reflux: ['reflux'],
      cmpa: ['cmpa'],
      parental: ['maternal_mh'],
      serious: ['sepsis', 'surgical', 'injury'],
    },
    sources: [
      { label: 'NICE CKS — Colic (infantile)', url: 'https://cks.nice.org.uk/topics/colic-infantile/' },
      { label: 'NICE NG143 — Fever in under 5s', url: 'https://www.nice.org.uk/guidance/ng143' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'unsettled-baby', label: 'Unsettled baby', triage: 'unsettled-baby-triage', dx: 'unsettled-baby-dx' }
  );
})();
