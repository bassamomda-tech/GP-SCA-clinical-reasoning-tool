/* ============================================
   Diagnostic Tool pack — Falls (older adults)
   Shared-id triage + differential. NICE NG249/CG161 · multifactorial.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'recurrent', kind: 'check', label: '≥2 falls in 12 months / fear of falling' },
    { group: 'Demographics & context', id: 'polypharmacy', kind: 'check', label: 'Polypharmacy / sedatives / antihypertensives / anticholinergics' },

    { group: 'Mechanism', id: 'postural', kind: 'check', label: 'On standing / lying-standing BP drop ≥20/10 (postural hypotension)' },
    { group: 'Mechanism', id: 'trip_environment', kind: 'check', label: 'Trip / environmental hazard, no LOC (mechanical)' },
    { group: 'Mechanism', id: 'gait_balance', kind: 'check', label: 'Gait/balance problem / Parkinsonism / neuropathy' },
    { group: 'Mechanism', id: 'vision', kind: 'check', label: 'Visual impairment' },

    { group: 'Syncope red flags', id: 'syncope', kind: 'check', label: 'Loss of consciousness / collapse' },
    { group: 'Syncope red flags', id: 'cardiac', kind: 'check', label: 'Exertional / no warning / palpitations / abnormal ECG / FH sudden death' },

    { group: 'Injury red flags', id: 'head_injury_anticoag', kind: 'check', label: 'Head injury on anticoagulant / fracture / unable to weight-bear' },
  ];

  if (window.RGPTriage) RGPTriage.register('falls-triage', {
    title: 'Falls — triage',
    subtitle: 'Tick features. Surfaces cardiac syncope, intracranial injury and the multifactorial assessment (NICE NG249).',
    guideline: 'NICE NG249 / CG161',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Multifactorial falls assessment: medication review, lying/standing BP, gait & balance (TUG), vision, cognition, bone health (FRAX/DXA), home hazards; strength & balance exercise programme.',
    rules: [
      {
        id: 'head_injury', tier: 'emergency',
        label: 'Head injury on anticoagulant / significant injury',
        action: 'Same-day — CT head (anticoagulated head injury); manage fracture.',
        patientPhrase: '"A head injury while on a blood thinner needs an urgent brain scan today."',
        source: 'NICE NG232 head injury',
        when: i => i.head_injury_anticoag,
      },
      {
        id: 'cardiac_syncope', tier: 'urgent',
        label: 'Fall with syncope / cardiac features',
        action: 'Urgent cardiology + 12-lead ECG; lying/standing BP; review driving.',
        patientPhrase: '"A blackout causing the fall can come from the heart — I want urgent heart tests."',
        source: 'ESC Syncope',
        when: i => i.syncope || i.cardiac,
      },
      {
        id: 'postural', tier: 'urgent',
        label: 'Postural hypotension',
        action: 'Lying/standing BP; review antihypertensives/diuretics; hydration; conservative measures.',
        source: 'NICE NG249',
        when: i => i.postural,
      },
      {
        id: 'multifactorial', tier: 'routine',
        label: 'Multifactorial falls assessment',
        action: 'Medication review, gait/balance, vision, cognition, bone health, home hazards; exercise programme.',
        source: 'NICE NG249', sourceUrl: 'https://www.nice.org.uk/guidance/ng249',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG249 — Falls (assessment & prevention)', url: 'https://www.nice.org.uk/guidance/ng249' },
      { label: 'NICE NG232 — Head injury', url: 'https://www.nice.org.uk/guidance/ng232' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('falls-dx', {
    title: 'Falls — contributing causes',
    subtitle: 'Falls are usually multifactorial. The engine weights postural hypotension, mechanical, gait/neurological, visual and drug causes, and always surfaces cardiac syncope and intracranial injury.',
    guideline: 'NICE NG249',
    patientPresenting: "I keep having falls, doctor — I'm worried about hurting myself.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'mechanical', name: 'Mechanical / environmental', summary: 'Trip, hazard, no LOC', baseline: 9, category: 'common',
        keyExam: 'Gait; footwear; home hazards.', nextIx: 'Home-hazard assessment; footwear; exercise.',
        patientPhrase: 'A trip or hazard is the commonest cause. Addressing the home and balance reduces future falls.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng249' },
      { id: 'postural', name: 'Postural hypotension', summary: 'On standing, BP drop, antihypertensives', baseline: 7, category: 'common',
        keyExam: 'Lying/standing BP drop ≥20/10.', nextIx: 'Medication review; hydration; conservative measures.',
        patientPhrase: 'Your blood pressure drops on standing, causing dizziness and falls. Adjusting medication and fluids helps.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng249' },
      { id: 'drug', name: 'Drug-related', summary: 'Sedatives, antihypertensives, anticholinergics, polypharmacy', baseline: 6, category: 'common',
        keyExam: 'Medication review.', nextIx: 'Deprescribe falls-risk medications.',
        patientPhrase: 'Medications can increase falls risk. A careful review and reduction helps.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng249' },
      { id: 'gait_neuro', name: 'Gait / neurological', summary: 'Parkinsonism, neuropathy, stroke, balance disorder', baseline: 5, category: 'common',
        keyExam: 'Gait, tone, sensation, balance.', nextIx: 'Treat cause; physio; balance training.',
        patientPhrase: 'A balance or nerve problem is contributing. Physiotherapy and treating the cause help.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng249' },
      { id: 'vision', name: 'Visual impairment', summary: 'Poor vision contributing', baseline: 3, category: 'common',
        keyExam: 'Acuity.', nextIx: 'Optician; cataract referral; lighting.',
        patientPhrase: 'Poor vision increases falls. Correcting it and improving lighting helps.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng249' },

      { id: 'cardiac_syncope', name: 'Cardiac syncope / arrhythmia', summary: 'LOC, exertional, palpitations, abnormal ECG', baseline: 1, category: 'cant-miss',
        keyExam: 'Murmur, abnormal ECG.', nextIx: '\u26A1 Urgent cardiology + ECG; ambulatory monitoring.',
        patientPhrase: 'If a blackout from the heart caused the fall, that can be dangerous — urgent heart tests are needed.',
        ciksUrl: 'https://www.escardio.org/Guidelines', redFlagAction: '\u26A1 Urgent cardiology + ECG' },
      { id: 'intracranial', name: 'Intracranial injury', summary: 'Head injury on anticoagulant / new neurology', baseline: 1, category: 'cant-miss',
        keyExam: 'Head injury; neurology.', nextIx: '\u26A1 Same-day CT head.',
        patientPhrase: 'A head injury, especially on a blood thinner, needs an urgent scan to exclude a bleed.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng232', redFlagAction: '\u26A1 CT head' },
    ],
    effects: {
      age: (v) => v >= 75 ? { postural: +3, gait_neuro: +3, mechanical: +2 } : {},
      recurrent: { gait_neuro: +4, postural: +2 },
      polypharmacy: { drug: +18, postural: +4 },

      postural: { postural: +22 },
      trip_environment: { mechanical: +20 },
      gait_balance: { gait_neuro: +22 },
      vision: { vision: +20 },

      syncope: { cardiac_syncope: +18 },
      cardiac: { cardiac_syncope: +20 },
      head_injury_anticoag: { intracranial: +30 },
    },
    askAbout: {
      mechanical: ['trip_environment'],
      postural: ['postural'],
      drug: ['polypharmacy'],
      gait_neuro: ['gait_balance'],
      vision: ['vision'],
      cardiac_syncope: ['syncope', 'cardiac'],
      intracranial: ['head_injury_anticoag'],
    },
    sources: [
      { label: 'NICE NG249 — Falls', url: 'https://www.nice.org.uk/guidance/ng249' },
      { label: 'NICE NG232 — Head injury', url: 'https://www.nice.org.uk/guidance/ng232' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'falls', label: 'Falls', triage: 'falls-triage', dx: 'falls-dx' }
  );
})();
