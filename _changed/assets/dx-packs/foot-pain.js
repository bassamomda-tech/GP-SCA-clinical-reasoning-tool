/* ============================================
   Diagnostic Tool pack — Foot Pain
   Shared-id triage + differential. CKS (plantar fasciitis / gout / neuroma).
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'diabetes', kind: 'check', label: 'Diabetes / neuropathy' },

    { group: 'Pattern', id: 'heel_first_steps', kind: 'check', label: 'Heel pain, worst first steps in morning (plantar fasciitis)' },
    { group: 'Pattern', id: 'gout_first_mtp', kind: 'check', label: 'Acute hot swollen big-toe joint (gout)' },
    { group: 'Pattern', id: 'forefoot_burning', kind: 'check', label: 'Burning between toes, clicking, numbness (Morton neuroma)' },
    { group: 'Pattern', id: 'oa_midfoot', kind: 'check', label: 'Midfoot/1st MTP stiffness, activity-related (OA)' },
    { group: 'Pattern', id: 'overuse_stress', kind: 'check', label: 'Activity-related forefoot pain, runner (stress fracture/tendinopathy)' },

    { group: 'Diabetic red flags', id: 'ulcer_charcot', kind: 'check', label: 'Diabetic + ulcer / hot swollen deformed foot (Charcot / infection)' },
    { group: 'Red flags', id: 'ischaemia', kind: 'check', label: 'Rest pain / cold pale foot / absent pulses (critical ischaemia)' },
    { group: 'Red flags', id: 'septic', kind: 'check', label: 'Hot swollen joint + fever (septic)' },
  ];

  if (window.RGPTriage) RGPTriage.register('foot-pain-triage', {
    title: 'Foot pain — triage',
    subtitle: 'Tick features. Surfaces critical ischaemia, diabetic foot emergency and septic arthritis.',
    guideline: 'CKS · NICE NG19 diabetic foot',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Examine (site, joints, pulses, sensation); most foot pain is plantar fasciitis, gout, OA or soft-tissue — analgesia, footwear, podiatry; treat by cause.',
    rules: [
      {
        id: 'critical_ischaemia', tier: 'emergency',
        label: 'Critical limb ischaemia — rest pain / cold pale foot / absent pulses',
        action: 'Same-day vascular referral.',
        patientPhrase: '"The circulation to your foot may be critically reduced — that needs urgent vascular assessment today."',
        source: 'NICE CKS PAD',
        when: i => i.ischaemia,
      },
      {
        id: 'diabetic_foot', tier: 'emergency',
        label: 'Diabetic foot emergency — ulcer / hot swollen deformed foot',
        action: 'Same-day multidisciplinary diabetic-foot service (infection / Charcot).',
        patientPhrase: '"A diabetic foot problem needs same-day specialist assessment to prevent serious complications."',
        source: 'NICE NG19', sourceUrl: 'https://www.nice.org.uk/guidance/ng19',
        when: i => i.ulcer_charcot,
      },
      {
        id: 'septic', tier: 'emergency',
        label: 'Septic arthritis — hot joint + fever',
        action: 'Same-day — aspiration + admission.',
        source: 'BSR',
        when: i => i.septic,
      },
      {
        id: 'gout', tier: 'urgent',
        label: 'Acute gout',
        action: 'NSAID/colchicine/steroid; urate later; lifestyle.',
        source: 'CKS Gout',
        when: i => i.gout_first_mtp,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'Mechanical foot pain — assess & manage',
        action: 'Plantar fasciitis → stretches/orthotics; neuroma → footwear/injection; OA/overuse → load management, podiatry.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG19 — Diabetic foot', url: 'https://www.nice.org.uk/guidance/ng19' },
      { label: 'NICE CKS — Plantar fasciitis', url: 'https://cks.nice.org.uk/topics/plantar-fasciitis/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('foot-pain-dx', {
    title: 'Foot pain — differential',
    subtitle: 'The engine weights plantar fasciitis, gout, Morton neuroma, OA and overuse injuries, and always surfaces critical ischaemia, the diabetic foot and septic arthritis.',
    guideline: 'CKS · NICE NG19',
    patientPresenting: "My foot's been really painful, doctor — especially my heel first thing in the morning.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'plantar', name: 'Plantar fasciitis', summary: 'Heel pain worst on first steps, eases with walking', baseline: 11, category: 'common',
        keyExam: 'Tenderness at medial calcaneal tuberosity.', nextIx: 'Stretches, supportive footwear/orthotics, analgesia; usually self-limiting.',
        patientPhrase: 'Inflammation of the sole ligament causes that first-step heel pain. Stretches and good footwear resolve most cases.',
        ciksUrl: 'https://cks.nice.org.uk/topics/plantar-fasciitis/' },
      { id: 'gout', name: 'Gout', summary: 'Acute hot swollen first MTP joint', baseline: 6, category: 'common',
        keyExam: 'Red hot tender first MTP; tophi.', nextIx: 'NSAID/colchicine/steroid; urate later.',
        patientPhrase: 'A crystal arthritis flare in the big toe — painful but treatable, and we prevent recurrence.',
        ciksUrl: 'https://cks.nice.org.uk/topics/gout/', caseLink: '../cases/gout.html' },
      { id: 'neuroma', name: 'Morton neuroma', summary: 'Burning forefoot pain between toes, clicking', baseline: 4, category: 'common',
        keyExam: 'Mulder click; interdigital tenderness.', nextIx: 'Footwear/metatarsal pad; injection; USS; surgery if refractory.',
        patientPhrase: 'A thickened nerve between the toes causes burning pain. Wider shoes and sometimes an injection help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/plantar-fasciitis/' },
      { id: 'oa', name: 'Foot/1st MTP osteoarthritis', summary: 'Stiffness, activity-related, older', baseline: 4, category: 'common',
        keyExam: 'Reduced 1st MTP/midfoot range, crepitus.', nextIx: 'Footwear, analgesia, podiatry.',
        patientPhrase: 'Wear-and-tear arthritis of the foot joints. Supportive footwear and pain relief help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/osteoarthritis/' },
      { id: 'overuse', name: 'Stress fracture / tendinopathy', summary: 'Activity-related, runner, focal bony/tendon pain', baseline: 3, category: 'less-common',
        keyExam: 'Focal bony tenderness; pain on loading.', nextIx: 'Rest, graded loading; X-ray/MRI if stress fracture suspected.',
        patientPhrase: 'Overuse can cause a tendon strain or a small stress crack. Rest and gradual return usually heal it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/plantar-fasciitis/' },

      { id: 'diabetic_foot', name: 'Diabetic foot (ulcer / Charcot / infection)', summary: 'Diabetic + ulcer / hot swollen deformed foot', baseline: 1, category: 'cant-miss',
        keyExam: 'Ulcer, warmth, deformity, neuropathy.', nextIx: '\u26A1 Same-day diabetic-foot MDT.',
        patientPhrase: 'A diabetic foot problem needs urgent specialist care to prevent serious complications.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng19', redFlagAction: '\u26A1 Same-day diabetic-foot MDT' },
      { id: 'ischaemia', name: 'Critical ischaemia', summary: 'Rest pain, cold pale foot, absent pulses', baseline: 1, category: 'cant-miss',
        keyExam: 'Cold, pale, pulseless; rest pain.', nextIx: '\u26A1 Same-day vascular referral.',
        patientPhrase: 'Critically reduced blood flow to the foot is an emergency needing urgent vascular assessment.',
        ciksUrl: 'https://cks.nice.org.uk/topics/peripheral-arterial-disease/', redFlagAction: '\u26A1 Same-day vascular' },
    ],
    effects: {
      age: (v) => v >= 55 ? { oa: +4, gout: +2 } : (v < 35 ? { overuse: +4 } : {}),
      diabetes: { diabetic_foot: +4, ischaemia: +4 },

      heel_first_steps: { plantar: +24 },
      gout_first_mtp: { gout: +26 },
      forefoot_burning: { neuroma: +24 },
      oa_midfoot: { oa: +20 },
      overuse_stress: { overuse: +20 },

      ulcer_charcot: { diabetic_foot: +30 },
      ischaemia: { ischaemia: +30 },
      septic: { gout: +4 },
    },
    askAbout: {
      plantar: ['heel_first_steps'],
      gout: ['gout_first_mtp'],
      neuroma: ['forefoot_burning'],
      oa: ['oa_midfoot'],
      overuse: ['overuse_stress'],
      diabetic_foot: ['ulcer_charcot', 'diabetes'],
      ischaemia: ['ischaemia'],
    },
    sources: [
      { label: 'NICE NG19 — Diabetic foot', url: 'https://www.nice.org.uk/guidance/ng19' },
      { label: 'NICE CKS — Plantar fasciitis', url: 'https://cks.nice.org.uk/topics/plantar-fasciitis/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'foot-pain', label: 'Foot pain', triage: 'foot-pain-triage', dx: 'foot-pain-dx' }
  );
})();
