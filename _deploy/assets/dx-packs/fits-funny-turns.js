/* ============================================
   Diagnostic Tool pack — Fits / Funny Turns
   Shared-id triage + differential (seizure vs syncope vs other).
   NICE NG217 epilepsy · ESC syncope · CKS Blackouts.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'cardiac_hx', kind: 'check', label: 'Cardiac disease / FH sudden death <40' },
    { group: 'Demographics & context', id: 'diabetes', kind: 'check', label: 'Diabetes on insulin / sulfonylurea' },

    { group: 'Before the event', id: 'prodrome_vasovagal', kind: 'check', label: 'Warning: hot/sweaty/nauseated, prolonged standing' },
    { group: 'Before the event', id: 'exertional', kind: 'check', label: 'Occurred on exertion / lying / no warning' },
    { group: 'Before the event', id: 'aura', kind: 'check', label: 'Epileptic aura (déjà vu, rising epigastric sensation)' },

    { group: 'During the event', id: 'tonic_clonic', kind: 'check', label: 'Sustained rhythmic jerking / stiffening' },
    { group: 'During the event', id: 'tongue_lateral', kind: 'check', label: 'Lateral tongue biting' },
    { group: 'During the event', id: 'incontinence', kind: 'check', label: 'Urinary incontinence' },
    { group: 'During the event', id: 'brief_jerks', kind: 'check', label: 'Brief jerks only / rapid recovery (convulsive syncope)' },
    { group: 'During the event', id: 'eyes_closed_long', kind: 'check', label: 'Eyes closed, prolonged, fluctuating, no injury (functional)' },

    { group: 'After the event', id: 'postictal', kind: 'check', label: 'Prolonged confusion / drowsiness afterwards' },
    { group: 'After the event', id: 'rapid_recovery', kind: 'check', label: 'Rapid full recovery' },

    { group: 'Red flags', id: 'palpitations_injury', kind: 'check', label: 'Palpitations before / injury / abnormal ECG' },
  ];

  if (window.RGPTriage) RGPTriage.register('fits-funny-turns-triage', {
    title: 'Fits / funny turns — triage',
    subtitle: 'Tick features. Surfaces cardiac syncope, first seizure and hypoglycaemia pathways.',
    guideline: 'NICE NG217 · ESC Syncope · CKS',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Take a detailed eyewitness account, 12-lead ECG, lying/standing BP and glucose; classify and refer (first-seizure clinic vs syncope pathway).',
    rules: [
      {
        id: 'cardiac_syncope', tier: 'urgent',
        label: 'Possible cardiac syncope — exertional / no warning / palpitations / abnormal ECG / FH sudden death',
        action: 'Urgent cardiology + 12-lead ECG; advise not to drive; same-week if high risk.',
        patientPhrase: '"Blacking out like this can come from the heart — I want urgent heart tests before anything else."',
        source: 'ESC Syncope 2018',
        when: i => i.exertional || i.palpitations_injury || i.cardiac_hx,
      },
      {
        id: 'hypoglycaemia', tier: 'urgent',
        label: 'Hypoglycaemia in a diabetic on treatment',
        action: 'Capillary glucose; treat; review diabetes medication.',
        source: 'CKS Hypoglycaemia',
        when: i => i.diabetes,
      },
      {
        id: 'first_seizure', tier: 'urgent',
        label: 'Suspected first seizure',
        action: 'Refer first-seizure clinic (seen within 2 weeks); ECG; do not drive; safety advice.',
        source: 'NICE NG217', sourceUrl: 'https://www.nice.org.uk/guidance/ng217',
        when: i => i.tonic_clonic || i.tongue_lateral || i.aura,
      },
      {
        id: 'syncope', tier: 'routine',
        label: 'Likely vasovagal / situational syncope',
        action: 'Reassure; lying/standing BP; avoidance/counter-pressure advice; ECG to exclude cardiac.',
        source: 'CKS Blackouts',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG217 — Epilepsies', url: 'https://www.nice.org.uk/guidance/ng217' },
      { label: 'NICE CKS — Blackouts', url: 'https://cks.nice.org.uk/topics/blackouts/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('fits-funny-turns-dx', {
    title: 'Transient loss of consciousness — differential',
    subtitle: 'The history is the test. The engine weights epileptic seizure, vasovagal and cardiac syncope, hypoglycaemia and functional events from the before/during/after features, and always surfaces cardiac syncope when triggered.',
    guideline: 'NICE NG217 · ESC · CKS',
    patientPresenting: "I blacked out, doctor — my partner said I went stiff and jerked for a minute or so.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'vasovagal', name: 'Vasovagal / reflex syncope', summary: 'Prodrome (hot, nauseated), prolonged standing, rapid recovery', baseline: 11, category: 'common',
        keyExam: 'Normal exam; reproducible triggers.', nextIx: 'Clinical; lying/standing BP; ECG to exclude cardiac; reassurance + counter-pressure advice.',
        patientPhrase: 'A reflex briefly dropped your blood pressure and you fainted. It is common and benign once the heart is checked.',
        ciksUrl: 'https://cks.nice.org.uk/topics/blackouts/' },
      { id: 'seizure', name: 'Epileptic seizure', summary: 'Aura, sustained jerking, lateral tongue bite, post-ictal confusion', baseline: 7, category: 'common',
        keyExam: 'Tongue-bite (lateral), post-ictal state, focal signs.', nextIx: 'First-seizure clinic; ECG, EEG, MRI; driving advice.',
        patientPhrase: 'The description fits a seizure. We arrange specialist tests and give safety and driving advice.',
        ciksUrl: 'https://cks.nice.org.uk/topics/epilepsy/', caseLink: '../cases/blackouts.html' },
      { id: 'hypoglycaemia', name: 'Hypoglycaemia', summary: 'Diabetic on treatment, sweating/tremor, resolves with glucose', baseline: 3, category: 'less-common',
        keyExam: 'Low capillary glucose.', nextIx: 'Glucose; review medication.',
        patientPhrase: 'A low blood sugar can cause collapse and odd behaviour. We check glucose and adjust your treatment.',
        ciksUrl: 'https://cks.nice.org.uk/topics/diabetes-type-2/' },
      { id: 'functional', name: 'Functional / dissociative event', summary: 'Prolonged, eyes closed, fluctuating, no injury, atypical', baseline: 3, category: 'less-common',
        keyExam: 'Resisted eye opening, asynchronous movements.', nextIx: 'Specialist assessment; avoid anticonvulsants; psychological therapy.',
        patientPhrase: 'These events are real but not caused by epilepsy or the heart — a specialist helps with the right treatment.',
        ciksUrl: 'https://cks.nice.org.uk/topics/blackouts/' },

      { id: 'cardiac_syncope', name: 'Cardiac syncope / arrhythmia', summary: 'Exertional or no warning, palpitations, abnormal ECG, FH sudden death', baseline: 1, category: 'cant-miss',
        keyExam: 'Murmur, abnormal ECG (long QT, blocks, pre-excitation).', nextIx: '\u26A1 Urgent cardiology + 12-lead ECG; ambulatory monitoring; advise not to drive.',
        patientPhrase: 'Fainting from the heart can be dangerous — I want urgent heart tests before anything else.',
        ciksUrl: 'https://www.escardio.org/Guidelines', redFlagAction: '\u26A1 Urgent cardiology + ECG' },
    ],
    effects: {
      age: (v) => v >= 60 ? { cardiac_syncope: +5 } : (v < 35 ? { vasovagal: +4, functional: +2 } : {}),
      cardiac_hx: { cardiac_syncope: +16 },
      diabetes: { hypoglycaemia: +14 },

      prodrome_vasovagal: { vasovagal: +20, cardiac_syncope: -6 },
      exertional: { cardiac_syncope: +20, vasovagal: -8 },
      aura: { seizure: +18 },

      tonic_clonic: { seizure: +12 },
      tongue_lateral: { seizure: +22 },
      incontinence: { seizure: +6 },
      brief_jerks: { vasovagal: +10, seizure: -4 },
      eyes_closed_long: { functional: +22 },

      postictal: { seizure: +16, vasovagal: -6 },
      rapid_recovery: { vasovagal: +10, cardiac_syncope: +2, seizure: -6 },

      palpitations_injury: { cardiac_syncope: +18 },
    },
    askAbout: {
      vasovagal: ['prodrome_vasovagal', 'rapid_recovery'],
      seizure: ['tongue_lateral', 'aura', 'postictal'],
      hypoglycaemia: ['diabetes'],
      functional: ['eyes_closed_long'],
      cardiac_syncope: ['exertional', 'palpitations_injury', 'cardiac_hx'],
    },
    sources: [
      { label: 'NICE NG217 — Epilepsies', url: 'https://www.nice.org.uk/guidance/ng217' },
      { label: 'NICE CKS — Blackouts', url: 'https://cks.nice.org.uk/topics/blackouts/' },
      { label: 'ESC 2018 — Syncope', url: 'https://www.escardio.org/Guidelines' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'fits-funny-turns', label: 'Fits / funny turns', triage: 'fits-funny-turns-triage', dx: 'fits-funny-turns-dx' }
  );
})();
