/* ============================================
   Diagnostic Tool pack — Intermittent Claudication
   Shared-id triage + differential. NICE CG147 PAD · CKS.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'cv_risk', kind: 'check', label: 'Smoker / diabetes / known vascular disease' },

    { group: 'Pattern', id: 'calf_walking_rest', kind: 'check', label: 'Calf pain on walking, relieved within minutes of rest (vascular)' },
    { group: 'Pattern', id: 'flexion_relief', kind: 'check', label: 'Eased by sitting / bending forward, variable distance (spinal stenosis)' },
    { group: 'Pattern', id: 'venous_aching', kind: 'check', label: 'Aching/heaviness, eased by elevation, varicosities (venous)' },
    { group: 'Pattern', id: 'joint_related', kind: 'check', label: 'Pain localised to a joint, worse with use (OA)' },

    { group: 'Signs', id: 'absent_pulses', kind: 'check', label: 'Absent/reduced pulses / low ABPI' },

    { group: 'Critical-limb red flags', id: 'rest_pain', kind: 'check', label: 'Rest pain (esp. at night, relieved by hanging foot down)' },
    { group: 'Critical-limb red flags', id: 'tissue_loss', kind: 'check', label: 'Ulceration / gangrene / non-healing wound' },
    { group: 'Acute', id: 'acute_ischaemia', kind: 'check', label: 'Sudden painful, pale, pulseless, cold, paraesthetic leg (acute ischaemia)' },
  ];

  if (window.RGPTriage) RGPTriage.register('claudication-triage', {
    title: 'Claudication — triage',
    subtitle: 'Tick features. Surfaces acute and critical limb ischaemia, then weights the claudication mimics.',
    guideline: 'NICE CG147 · CKS',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Confirm PAD (ABPI); manage CV risk aggressively (statin, antiplatelet, smoking cessation, BP/glucose); supervised exercise; refer vascular if lifestyle-limiting.',
    rules: [
      {
        id: 'acute', tier: 'emergency',
        label: 'Acute limb ischaemia — pale, pulseless, painful, cold, paraesthetic',
        action: 'Call 999 — emergency vascular (limb-threatening, time-critical).',
        patientPhrase: '"A suddenly cold, painful, pale leg is an emergency — I am arranging immediate vascular assessment."',
        source: 'NICE CG147',
        when: i => i.acute_ischaemia,
      },
      {
        id: 'critical', tier: 'urgent',
        label: 'Critical limb ischaemia — rest pain / tissue loss',
        action: 'Same-day/urgent vascular referral.',
        patientPhrase: '"Pain at rest or a non-healing wound means the circulation is critically reduced — urgent vascular review is needed."',
        source: 'NICE CG147', sourceUrl: 'https://www.nice.org.uk/guidance/cg147',
        when: i => i.rest_pain || i.tissue_loss,
      },
      {
        id: 'pad', tier: 'urgent',
        label: 'Peripheral arterial disease — claudication',
        action: 'ABPI; CV risk management (statin + antiplatelet + smoking cessation); supervised exercise; vascular if lifestyle-limiting.',
        source: 'NICE CG147',
        when: i => i.calf_walking_rest || i.absent_pulses,
      },
      {
        id: 'mimic', tier: 'routine',
        label: 'Non-vascular cause likely',
        action: 'Assess spinal stenosis / venous / MSK; treat accordingly; still check pulses.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CG147 — Peripheral arterial disease', url: 'https://www.nice.org.uk/guidance/cg147' },
      { label: 'NICE CKS — Peripheral arterial disease', url: 'https://cks.nice.org.uk/topics/peripheral-arterial-disease/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('claudication-dx', {
    title: 'Leg pain on walking — differential',
    subtitle: 'The engine weights PAD against neurogenic claudication, venous and MSK causes, and always surfaces acute and critical limb ischaemia.',
    guideline: 'NICE CG147 · CKS',
    patientPresenting: "My calf cramps up when I walk, doctor, and I have to stop until it eases.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'pad', name: 'Peripheral arterial disease', summary: 'Calf pain on walking, relieved by rest, CV risk, weak pulses', baseline: 12, category: 'common',
        keyExam: 'Reduced pulses, low ABPI, cool foot, hair loss.', nextIx: 'ABPI; aggressive CV risk reduction; supervised exercise; vascular if limiting.',
        patientPhrase: 'Narrowed leg arteries limit blood flow on walking. Risk-factor treatment and exercise are key — and protect heart and brain too.',
        ciksUrl: 'https://cks.nice.org.uk/topics/peripheral-arterial-disease/' },
      { id: 'spinal_stenosis', name: 'Neurogenic claudication (spinal stenosis)', summary: 'Eased by flexion/sitting, variable distance, normal pulses', baseline: 5, category: 'common',
        keyExam: 'Normal pulses; relief on flexion.', nextIx: 'Clinical; MRI if considering intervention; physio.',
        patientPhrase: 'A narrowed spinal canal pinches the nerves on walking; leaning forward relieves it — the circulation is fine.',
        ciksUrl: 'https://cks.nice.org.uk/topics/sciatica-lumbar-radiculopathy/' },
      { id: 'venous', name: 'Venous claudication / insufficiency', summary: 'Aching/heaviness, eased by elevation, varicosities', baseline: 3, category: 'less-common',
        keyExam: 'Varicosities, skin changes.', nextIx: 'Compression; venous assessment.',
        patientPhrase: 'Poor vein drainage causes aching that eases on raising the leg. Compression helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/peripheral-arterial-disease/' },
      { id: 'msk', name: 'Musculoskeletal / OA', summary: 'Joint-localised, use-related', baseline: 3, category: 'common',
        keyExam: 'Joint signs; normal pulses.', nextIx: 'Treat OA/MSK cause.',
        patientPhrase: 'The pain may be from a joint rather than the circulation — examination clarifies it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/osteoarthritis/' },

      { id: 'critical', name: 'Critical limb ischaemia', summary: 'Rest pain / tissue loss', baseline: 1, category: 'cant-miss',
        keyExam: 'Rest pain, ulceration, gangrene; very low ABPI.', nextIx: '\u26A1 Urgent vascular referral.',
        patientPhrase: 'Pain at rest or a non-healing wound means the circulation is critically reduced — urgent vascular care is needed.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg147', redFlagAction: '\u26A1 Urgent vascular' },
      { id: 'acute', name: 'Acute limb ischaemia', summary: 'Sudden pale, pulseless, painful, cold, paraesthetic leg', baseline: 1, category: 'cant-miss',
        keyExam: 'The 6 Ps; cold pulseless limb.', nextIx: '\u26A1 999 — emergency vascular (time-critical).',
        patientPhrase: 'A suddenly cold, painful, pale leg is a limb-threatening emergency needing immediate treatment.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg147', redFlagAction: '\u26A1 999 vascular emergency' },
    ],
    effects: {
      age: (v) => v >= 60 ? { pad: +4, spinal_stenosis: +4 } : {},
      cv_risk: { pad: +16 },

      calf_walking_rest: { pad: +22 },
      flexion_relief: { spinal_stenosis: +24, pad: -8 },
      venous_aching: { venous: +22 },
      joint_related: { msk: +22 },

      absent_pulses: { pad: +18, spinal_stenosis: -6 },

      rest_pain: { critical: +28 },
      tissue_loss: { critical: +24 },
      acute_ischaemia: { acute: +32 },
    },
    askAbout: {
      pad: ['calf_walking_rest', 'cv_risk', 'absent_pulses'],
      spinal_stenosis: ['flexion_relief'],
      venous: ['venous_aching'],
      msk: ['joint_related'],
      critical: ['rest_pain', 'tissue_loss'],
      acute: ['acute_ischaemia'],
    },
    sources: [
      { label: 'NICE CG147 — Peripheral arterial disease', url: 'https://www.nice.org.uk/guidance/cg147' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'claudication', label: 'Intermittent claudication', triage: 'claudication-triage', dx: 'claudication-dx' }
  );
})();
