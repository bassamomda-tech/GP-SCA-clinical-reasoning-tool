/* ============================================
   Diagnostic Tool pack — TIA
   Shared-id triage + differential. NICE NG128 · CKS TIA/Stroke.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'anticoag', kind: 'check', label: 'On anticoagulant' },
    { group: 'Demographics & context', id: 'af', kind: 'check', label: 'Known AF / vascular risk factors' },

    { group: 'Timing', id: 'ongoing', kind: 'check', label: 'Symptoms still present right now' },
    { group: 'Timing', id: 'resolved_24h', kind: 'check', label: 'Fully resolved within 24h' },
    { group: 'Timing', id: 'crescendo', kind: 'check', label: '≥2 episodes in a week (crescendo)' },

    { group: 'Focal deficit', id: 'unilateral_weak', kind: 'check', label: 'Unilateral face/arm/leg weakness' },
    { group: 'Focal deficit', id: 'speech', kind: 'check', label: 'Speech disturbance (dysphasia/dysarthria)' },
    { group: 'Focal deficit', id: 'visual', kind: 'check', label: 'Sudden monocular vision loss / hemianopia' },
    { group: 'Focal deficit', id: 'sensory', kind: 'check', label: 'Unilateral sensory loss' },

    { group: 'Mimic clues', id: 'spreading_positive', kind: 'check', label: 'Spreading/positive symptoms + headache (migraine aura)' },
    { group: 'Mimic clues', id: 'twitching_loc', kind: 'check', label: 'Rhythmic twitching / loss of consciousness (seizure)' },
    { group: 'Mimic clues', id: 'hypoglyc', kind: 'check', label: 'Hypoglycaemia / diabetic on insulin' },
    { group: 'Mimic clues', id: 'gradual_nonfocal', kind: 'check', label: 'Gradual / non-focal / global symptoms only' },
  ];

  if (window.RGPTriage) RGPTriage.register('tia-triage', {
    title: 'TIA — triage',
    subtitle: 'Tick features. Surfaces acute stroke, crescendo TIA and the 24h specialist pathway (NICE NG128).',
    guideline: 'NICE NG128',
    inputs: INPUTS,
    defaultMessage: 'If this is a suspected TIA: give aspirin 300 mg immediately (unless contraindicated) and refer to be seen by a stroke specialist within 24 hours (NICE NG128). Do not use ABCD2 to delay.',
    rules: [
      {
        id: 'acute_stroke', tier: 'emergency',
        label: 'Ongoing focal deficit — possible acute stroke',
        action: 'Call 999 — FAST positive, time-critical for thrombolysis/thrombectomy.',
        patientPhrase: '"These symptoms could be a stroke happening now — I am calling an ambulance immediately."',
        source: 'NICE NG128', sourceUrl: 'https://www.nice.org.uk/guidance/ng128',
        when: i => i.ongoing && (i.unilateral_weak || i.speech || i.visual || i.sensory),
      },
      {
        id: 'crescendo', tier: 'urgent',
        label: 'Crescendo TIA / TIA on anticoagulant — high risk',
        action: 'Discuss with stroke team for same-day assessment; aspirin 300 mg unless on anticoagulant/contraindicated.',
        source: 'NICE NG128',
        when: i => i.crescendo || (i.anticoag && i.resolved_24h),
      },
      {
        id: 'suspected_tia', tier: 'urgent',
        label: 'Suspected TIA (resolved focal deficit)',
        action: 'Aspirin 300 mg now; specialist assessment within 24 hours; do not drive; manage risk factors.',
        patientPhrase: '"You have had a warning stroke. I am starting aspirin and arranging a specialist to see you within 24 hours."',
        source: 'NICE NG128',
        when: i => i.resolved_24h || i.unilateral_weak || i.speech || i.visual || i.sensory,
      },
      {
        id: 'mimic', tier: 'routine',
        label: 'Likely TIA mimic — assess the alternative',
        action: 'Evaluate migraine / seizure / hypoglycaemia / functional cause; treat accordingly; safety-net.',
        source: 'CKS TIA',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG128 — Stroke and TIA', url: 'https://www.nice.org.uk/guidance/ng128' },
      { label: 'NICE CKS — TIA', url: 'https://cks.nice.org.uk/topics/stroke-tia/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('tia-dx', {
    title: 'Transient neurological episode — TIA vs mimic',
    subtitle: 'The engine weights TIA against its common mimics (migraine aura, seizure, hypoglycaemia, functional) from the timing and symptom quality, and always surfaces acute stroke when a deficit is ongoing.',
    guideline: 'NICE NG128 · CKS',
    patientPresenting: "My arm went weak and my speech slurred for about twenty minutes, doctor, then it cleared completely.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'tia', name: 'Transient ischaemic attack', summary: 'Sudden focal deficit, fully resolved, vascular risk', baseline: 11, category: 'common',
        keyExam: 'Often normal after resolution; check pulse (AF), BP, carotids, neuro exam.', nextIx: 'Aspirin 300 mg; specialist <24h; ECG, carotid imaging, brain imaging, risk-factor workup.',
        patientPhrase: 'A brief interruption of blood supply to the brain caused a warning. Urgent assessment and treatment greatly reduce stroke risk.',
        ciksUrl: 'https://cks.nice.org.uk/topics/stroke-tia/' },
      { id: 'migraine_aura', name: 'Migraine with aura', summary: 'Gradual spreading positive symptoms + headache, younger', baseline: 6, category: 'common',
        keyExam: 'Normal; typical aura history.', nextIx: 'Clinical; distinguish from TIA (spreading, positive symptoms, longer); manage migraine.',
        patientPhrase: 'A migraine aura can mimic a mini-stroke but spreads gradually and brings positive symptoms like flashing lights.',
        ciksUrl: 'https://cks.nice.org.uk/topics/migraine/' },
      { id: 'seizure', name: 'Focal seizure', summary: 'Rhythmic twitching, positive symptoms, post-ictal confusion', baseline: 4, category: 'less-common',
        keyExam: 'Tongue-biting, post-ictal state.', nextIx: 'First-seizure clinic; ECG, EEG, imaging.',
        patientPhrase: 'A brief seizure can cause transient symptoms. We arrange the right tests to confirm.',
        ciksUrl: 'https://cks.nice.org.uk/topics/epilepsy/' },
      { id: 'hypoglycaemia', name: 'Hypoglycaemia', summary: 'Diabetic on treatment, resolves with glucose', baseline: 3, category: 'less-common',
        keyExam: 'Sweating, tremor; capillary glucose low.', nextIx: 'Capillary glucose; treat; review diabetes medication.',
        patientPhrase: 'A low blood sugar can mimic a stroke. Checking and correcting glucose sorts it out.',
        ciksUrl: 'https://cks.nice.org.uk/topics/diabetes-type-2/' },
      { id: 'functional', name: 'Functional / non-focal episode', summary: 'Gradual, non-focal, global symptoms (dizziness/fatigue) only', baseline: 3, category: 'less-common',
        keyExam: 'Normal neuro exam.', nextIx: 'Reassess; non-focal symptoms alone are rarely TIA; safety-net.',
        patientPhrase: 'Your symptoms do not fit a stroke pattern. We look for another explanation and keep you safe.',
        ciksUrl: 'https://cks.nice.org.uk/topics/stroke-tia/' },

      { id: 'stroke', name: 'Acute stroke (ongoing deficit)', summary: 'Focal deficit still present', baseline: 1, category: 'cant-miss',
        keyExam: 'Persisting focal neurology, FAST positive.', nextIx: '\u26A1 999 — time-critical for thrombolysis/thrombectomy.',
        patientPhrase: 'These symptoms could be a stroke happening now — that is an emergency, I am calling an ambulance.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng128', redFlagAction: '\u26A1 999 — acute stroke pathway' },
    ],
    effects: {
      age: (v) => v >= 60 ? { tia: +6, stroke: +2, migraine_aura: -3 } : (v < 40 ? { migraine_aura: +5, tia: -3 } : {}),
      anticoag: { tia: +3, stroke: +3 },
      af: { tia: +10 },

      ongoing: { stroke: +20, tia: -6 },
      resolved_24h: { tia: +10 },
      crescendo: { tia: +8 },

      unilateral_weak: { tia: +14, stroke: +8, migraine_aura: -4 },
      speech: { tia: +12, stroke: +6 },
      visual: { tia: +8, migraine_aura: +6 },
      sensory: { tia: +8, migraine_aura: +4 },

      spreading_positive: { migraine_aura: +24, tia: -8 },
      twitching_loc: { seizure: +24, tia: -6 },
      hypoglyc: { hypoglycaemia: +24 },
      gradual_nonfocal: { functional: +18, tia: -10 },
    },
    askAbout: {
      tia: ['resolved_24h', 'af', 'unilateral_weak'],
      migraine_aura: ['spreading_positive', 'age'],
      seizure: ['twitching_loc'],
      hypoglycaemia: ['hypoglyc'],
      functional: ['gradual_nonfocal'],
      stroke: ['ongoing'],
    },
    sources: [
      { label: 'NICE NG128 — Stroke and TIA', url: 'https://www.nice.org.uk/guidance/ng128' },
      { label: 'NICE CKS — TIA', url: 'https://cks.nice.org.uk/topics/stroke-tia/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'tia', label: 'TIA', triage: 'tia-triage', dx: 'tia-dx' }
  );
})();
