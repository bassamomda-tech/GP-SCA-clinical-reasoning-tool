/* ============================================
   Diagnostic Tool pack — Faltered Growth in Children
   Shared-id triage + differential. NICE NG75.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Age', id: 'age_months', kind: 'number', label: 'Age', unit: 'months', min: 0, max: 72, step: 1 },
    { group: 'Severity', id: 'centile_fall', kind: 'check', label: 'Sustained fall across ≥2 centile spaces / below 0.4th centile' },

    { group: 'Inadequate intake', id: 'feeding_problem', kind: 'check', label: 'Feeding difficulty / inadequate intake / poor latch' },
    { group: 'Inadequate intake', id: 'psychosocial', kind: 'check', label: 'Psychosocial / maternal mental health / neglect concern' },

    { group: 'Losses / malabsorption', id: 'vomiting_reflux', kind: 'check', label: 'Significant vomiting / reflux' },
    { group: 'Losses / malabsorption', id: 'diarrhoea_malabs', kind: 'check', label: 'Chronic diarrhoea / steatorrhoea (coeliac / CF / CMPA)' },

    { group: 'Increased requirement / organic', id: 'chronic_illness', kind: 'check', label: 'Chronic illness (cardiac, renal, respiratory)' },
    { group: 'Increased requirement / organic', id: 'dysmorphic_syndromic', kind: 'check', label: 'Dysmorphic / syndromic / global delay' },

    { group: 'Red flags', id: 'acute_unwell', kind: 'check', label: 'Acutely unwell / severe malnutrition / dehydration' },
    { group: 'Red flags', id: 'safeguarding', kind: 'check', label: 'Safeguarding concern' },
  ];

  if (window.RGPTriage) RGPTriage.register('faltered-growth-triage', {
    title: 'Faltered growth — triage',
    subtitle: 'Tick features. Surfaces severe malnutrition and safeguarding; otherwise structured assessment (NICE NG75).',
    guideline: 'NICE NG75',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Most faltering growth is multifactorial / feeding-related. Plot accurately on growth chart; feeding assessment + health visitor; targeted investigations only if indicated; monitor.',
    rules: [
      {
        id: 'severe', tier: 'emergency',
        label: 'Severe malnutrition / acutely unwell',
        action: 'Same-day paediatric assessment / admission.',
        source: 'NICE NG75',
        when: i => i.acute_unwell,
      },
      {
        id: 'safeguarding', tier: 'urgent',
        label: 'Safeguarding concern',
        action: 'Follow safeguarding pathway alongside assessment.',
        source: 'NICE CG89',
        when: i => i.safeguarding,
      },
      {
        id: 'organic', tier: 'urgent',
        label: 'Possible organic cause — malabsorption / chronic illness / syndromic',
        action: 'Targeted tests (coeliac, FBC, U&E, CF where indicated); paediatric referral.',
        source: 'NICE NG75',
        when: i => i.diarrhoea_malabs || i.chronic_illness || i.dysmorphic_syndromic,
      },
      {
        id: 'assess', tier: 'routine',
        label: 'Faltering growth — feeding & multidisciplinary assessment',
        action: 'Accurate plotting; feeding history & observation; health visitor + dietitian; review.',
        source: 'NICE NG75', sourceUrl: 'https://www.nice.org.uk/guidance/ng75',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG75 — Faltering growth', url: 'https://www.nice.org.uk/guidance/ng75' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('faltered-growth-dx', {
    title: 'Faltered growth — differential',
    subtitle: 'The engine weights inadequate intake (commonest), losses/malabsorption and increased requirement, and surfaces severe malnutrition and safeguarding.',
    guideline: 'NICE NG75',
    patientPresenting: "My baby isn't putting on weight, doctor.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'inadequate_intake', name: 'Inadequate intake / feeding difficulty', summary: 'Commonest — feeding problems, volume/technique', baseline: 12, category: 'common',
        keyExam: 'Feeding observation; latch; intake history.', nextIx: 'Feeding support, health visitor, dietitian; monitor.',
        patientPhrase: 'Most often the issue is feeding — amount or technique. Support and monitoring usually get growth back on track.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng75' },
      { id: 'psychosocial', name: 'Psychosocial / maternal factors', summary: 'Maternal mental health, social stress', baseline: 5, category: 'common',
        keyExam: 'Family/social assessment.', nextIx: 'Support services; health visitor; safeguarding if concerns.',
        patientPhrase: 'Family circumstances and parental wellbeing affect feeding and growth. We support the whole family.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng75' },
      { id: 'reflux', name: 'Significant GORD', summary: 'Vomiting/reflux limiting intake', baseline: 4, category: 'common',
        keyExam: 'Vomiting pattern.', nextIx: 'Reflux management; review weight.',
        patientPhrase: 'Reflux can limit how much stays down. Managing it helps growth.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng1' },
      { id: 'malabsorption', name: 'Malabsorption (coeliac / CF / CMPA)', summary: 'Chronic diarrhoea / steatorrhoea', baseline: 3, category: 'less-common',
        keyExam: 'Stool pattern; nutritional state.', nextIx: 'Coeliac serology, faecal elastase, CF screen, CMPA trial; paediatrics.',
        patientPhrase: 'A gut condition may stop nutrients being absorbed. Tests identify which, and treatment restores growth.',
        ciksUrl: 'https://cks.nice.org.uk/topics/coeliac-disease/' },
      { id: 'organic', name: 'Chronic illness / syndromic', summary: 'Cardiac/renal/respiratory disease, dysmorphism', baseline: 2, category: 'less-common',
        keyExam: 'Features of underlying disease.', nextIx: 'Targeted investigation; paediatric referral.',
        patientPhrase: 'An underlying condition can increase needs or limit growth — we investigate and support.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng75' },

      { id: 'severe', name: 'Severe malnutrition / neglect', summary: 'Acutely unwell / safeguarding', baseline: 1, category: 'cant-miss',
        keyExam: 'Wasting, dehydration; safeguarding indicators.', nextIx: '\u26A1 Same-day paediatric ± safeguarding pathway.',
        patientPhrase: 'Significant weight concerns with these features need urgent assessment and support today.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng75', redFlagAction: '\u26A1 Same-day paediatric / safeguarding' },
    ],
    effects: {
      centile_fall: { severe: +2 },
      feeding_problem: { inadequate_intake: +22 },
      psychosocial: { psychosocial: +20 },
      vomiting_reflux: { reflux: +20 },
      diarrhoea_malabs: { malabsorption: +22 },
      chronic_illness: { organic: +20 },
      dysmorphic_syndromic: { organic: +16 },

      acute_unwell: { severe: +28 },
      safeguarding: { severe: +14, psychosocial: +8 },
    },
    askAbout: {
      inadequate_intake: ['feeding_problem'],
      psychosocial: ['psychosocial'],
      reflux: ['vomiting_reflux'],
      malabsorption: ['diarrhoea_malabs'],
      organic: ['chronic_illness', 'dysmorphic_syndromic'],
      severe: ['acute_unwell', 'safeguarding'],
    },
    sources: [
      { label: 'NICE NG75 — Faltering growth', url: 'https://www.nice.org.uk/guidance/ng75' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'faltered-growth', label: 'Faltered growth', triage: 'faltered-growth-triage', dx: 'faltered-growth-dx' }
  );
})();
