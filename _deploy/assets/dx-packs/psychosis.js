/* ============================================
   Diagnostic Tool pack — Psychosis (first episode)
   Shared-id triage + differential. NICE NG178 · risk + organic exclusion.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },

    { group: 'Presentation', id: 'hallucinations_delusions', kind: 'check', label: 'Hallucinations / delusions / thought disorder' },
    { group: 'Presentation', id: 'functional_decline', kind: 'check', label: 'Social withdrawal / functional decline / suspiciousness' },

    { group: 'Cause clues', id: 'substance', kind: 'check', label: 'Substance use / intoxication / withdrawal' },
    { group: 'Cause clues', id: 'mood', kind: 'check', label: 'Prominent mood symptoms (mania / severe depression)' },
    { group: 'Cause clues', id: 'delirium_organic', kind: 'check', label: 'Acute onset / fluctuating / confusion / fever / new neuro signs (organic/delirium)' },
    { group: 'Cause clues', id: 'postpartum', kind: 'check', label: 'Within weeks of childbirth (postpartum psychosis)' },

    { group: 'Risk red flags', id: 'self_harm', kind: 'check', label: 'Suicidal ideation / command hallucinations / self-harm intent' },
    { group: 'Risk red flags', id: 'risk_others', kind: 'check', label: 'Risk to others / vulnerable dependants' },
    { group: 'Risk red flags', id: 'severe_neglect', kind: 'check', label: 'Severe self-neglect / unable to keep safe' },
  ];

  if (window.RGPTriage) RGPTriage.register('psychosis-triage', {
    title: 'Psychosis — triage',
    subtitle: 'Tick features. Surfaces acute risk, organic causes and postpartum psychosis (NICE NG178).',
    guideline: 'NICE NG178',
    inputs: INPUTS,
    defaultMessage: 'No emergency rule fired. Refer urgently to Early Intervention in Psychosis (do not delay); exclude organic causes (bloods, urine drug screen, consider imaging); risk assessment; involve carers; do not start antipsychotics in primary care without specialist advice.',
    rules: [
      {
        id: 'acute_risk', tier: 'emergency',
        label: 'Acute risk — suicidality / command hallucinations / risk to others / unable to keep safe',
        action: 'Same-day crisis / mental-health assessment; consider Mental Health Act; do not leave alone.',
        patientPhrase: '"I am very concerned for safety right now — I am arranging an urgent mental-health assessment today."',
        source: 'NICE NG178',
        when: i => i.self_harm || i.risk_others || i.severe_neglect,
      },
      {
        id: 'organic', tier: 'emergency',
        label: 'Possible organic cause / delirium',
        action: 'Same-day medical assessment — bloods, infection screen, glucose, imaging as indicated.',
        patientPhrase: '"This sudden change could have a physical cause — I want urgent medical tests today."',
        source: 'NICE NG178',
        when: i => i.delirium_organic,
      },
      {
        id: 'postpartum', tier: 'emergency',
        label: 'Postpartum psychosis',
        action: 'Same-day perinatal mental-health / crisis assessment — psychiatric emergency.',
        source: 'NICE CG192',
        when: i => i.postpartum,
      },
      {
        id: 'eip', tier: 'urgent',
        label: 'Suspected first-episode psychosis',
        action: 'Urgent Early Intervention in Psychosis referral; organic screen; risk assessment; carer involvement.',
        source: 'NICE NG178', sourceUrl: 'https://www.nice.org.uk/guidance/ng178',
        when: i => i.hallucinations_delusions || i.functional_decline,
      },
      {
        id: 'assess', tier: 'urgent',
        label: 'Assess & refer',
        action: 'Mental-state exam, risk assessment, organic screen; specialist referral.',
        source: 'NICE NG178',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG178 — Psychosis & schizophrenia', url: 'https://www.nice.org.uk/guidance/ng178' },
      { label: 'NICE CG192 — Antenatal & postnatal mental health', url: 'https://www.nice.org.uk/guidance/cg192' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('psychosis-dx', {
    title: 'Psychosis — differential',
    subtitle: 'The engine weights primary psychotic, substance-induced and mood-related causes, and always surfaces organic/delirium and postpartum psychosis. Acute risk is paramount.',
    guideline: 'NICE NG178',
    patientPresenting: "My son hasn't been himself, doctor — he believes things that aren't real and has withdrawn.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'primary_psychosis', name: 'Primary psychotic disorder (schizophrenia spectrum)', summary: 'Hallucinations/delusions + functional decline, young adult', baseline: 9, category: 'common',
        keyExam: 'Mental-state exam; thought disorder.', nextIx: 'Urgent EIP referral; organic screen; do not start antipsychotic without specialist advice.',
        patientPhrase: 'This may be a first episode of psychosis. Early specialist treatment greatly improves outcomes — I will refer urgently.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng178' },
      { id: 'substance', name: 'Substance-induced psychosis', summary: 'Intoxication / withdrawal (stimulants, cannabis, alcohol)', baseline: 6, category: 'common',
        keyExam: 'Intoxication signs; collateral.', nextIx: 'Urine drug screen; treat; reassess when substance-free.',
        patientPhrase: 'Substances can trigger psychotic symptoms. We test, treat, and reassess once they have cleared.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng178' },
      { id: 'mood', name: 'Mood disorder with psychosis', summary: 'Mania or severe depression with psychotic features', baseline: 4, category: 'common',
        keyExam: 'Mood state; biological symptoms.', nextIx: 'Psychiatric referral; treat underlying mood disorder.',
        patientPhrase: 'Severe mood illness can cause psychotic symptoms. Treating the mood disorder is central.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng178' },

      { id: 'organic', name: 'Organic / delirium', summary: 'Acute, fluctuating, confusion, fever, neuro signs', baseline: 1, category: 'cant-miss',
        keyExam: 'Confusion, fever, focal neurology.', nextIx: '\u26A1 Same-day medical assessment — bloods, infection screen, imaging.',
        patientPhrase: 'A sudden change like this can have a physical cause — we exclude that urgently with medical tests.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng178', redFlagAction: '\u26A1 Same-day medical' },
      { id: 'postpartum', name: 'Postpartum psychosis', summary: 'Onset within weeks of childbirth', baseline: 1, category: 'cant-miss',
        keyExam: 'Rapidly changing mood/psychosis postnatally.', nextIx: '\u26A1 Same-day perinatal psychiatry / crisis — emergency.',
        patientPhrase: 'Psychosis after birth is a psychiatric emergency needing same-day specialist care for mother and baby.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg192', redFlagAction: '\u26A1 Same-day perinatal psychiatry' },
    ],
    effects: {
      age: (v) => v != null && (v >= 15 && v <= 35) ? { primary_psychosis: +6, substance: +4 } : (v >= 60 ? { organic: +4 } : {}),

      hallucinations_delusions: { primary_psychosis: +10 },
      functional_decline: { primary_psychosis: +8 },

      substance: { substance: +24 },
      mood: { mood: +22 },
      delirium_organic: { organic: +30 },
      postpartum: { postpartum: +30 },

      self_harm: { mood: +4 },
    },
    askAbout: {
      primary_psychosis: ['hallucinations_delusions', 'functional_decline'],
      substance: ['substance'],
      mood: ['mood'],
      organic: ['delirium_organic'],
      postpartum: ['postpartum'],
    },
    sources: [
      { label: 'NICE NG178 — Psychosis & schizophrenia', url: 'https://www.nice.org.uk/guidance/ng178' },
      { label: 'NICE CG192 — Perinatal mental health', url: 'https://www.nice.org.uk/guidance/cg192' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'psychosis', label: 'Psychosis', triage: 'psychosis-triage', dx: 'psychosis-dx' }
  );
})();
