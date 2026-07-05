/* ============================================
   Diagnostic Tool pack — Vision Loss
   Shared-id triage + differential. CKS · NICE NG12 (GCA) · stroke.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'vascular', kind: 'check', label: 'Vascular risk / AF / anticoagulant' },

    { group: 'Tempo', id: 'transient', kind: 'check', label: 'Transient (fully recovered) — like a curtain coming down (amaurosis fugax)' },
    { group: 'Tempo', id: 'persistent_sudden', kind: 'check', label: 'Sudden and persistent' },

    { group: 'Character', id: 'painless_total', kind: 'check', label: 'Painless, profound, one eye (CRAO / CRVO / ION)' },
    { group: 'Character', id: 'flashes_floaters_curtain', kind: 'check', label: 'Preceded by flashes/floaters + curtain (retinal detachment)' },
    { group: 'Character', id: 'painful_movement', kind: 'check', label: 'Pain on eye movement + reduced colour (optic neuritis)' },
    { group: 'Character', id: 'homonymous', kind: 'check', label: 'Field loss in both eyes / hemianopia + neuro signs (stroke)' },

    { group: 'Red flags', id: 'gca', kind: 'check', label: 'Age ≥50 + headache / jaw claudication / scalp tenderness (GCA)' },
    { group: 'Red flags', id: 'aacg', kind: 'check', label: 'Painful red eye + halos + nausea (acute glaucoma)' },
  ];

  if (window.RGPTriage) RGPTriage.register('vision-loss-triage', {
    title: 'Vision loss — triage',
    subtitle: 'Tick features. Vision loss is an emergency until proven otherwise — surfaces GCA, occlusion, detachment, stroke.',
    guideline: 'CKS · NICE NG12 · NG128',
    inputs: INPUTS,
    defaultMessage: 'Sudden vision loss is sight-threatening — arrange same-day emergency ophthalmology unless clearly chronic/refractive. Always check acuity, pupils (RAPD), fields and fundus.',
    rules: [
      {
        id: 'gca', tier: 'emergency',
        label: 'Possible GCA — ≥50 with vision loss + headache / jaw claudication',
        action: 'Same-day high-dose steroid + emergency ophthalmology/rheumatology — protect the other eye.',
        patientPhrase: '"This can cause permanent blindness from artery inflammation — I am starting steroids and arranging emergency assessment now."',
        source: 'BSR GCA',
        when: i => i.gca,
      },
      {
        id: 'amaurosis', tier: 'emergency',
        label: 'Transient monocular vision loss (amaurosis fugax) — TIA equivalent',
        action: 'Treat as TIA — aspirin 300 mg, same-day stroke/TIA + carotid pathway; also exclude GCA.',
        patientPhrase: '"A curtain of vision loss that recovered is a warning stroke of the eye — I am starting aspirin and arranging urgent assessment."',
        source: 'NICE NG128',
        when: i => i.transient,
      },
      {
        id: 'acute', tier: 'emergency',
        label: 'Sudden persistent vision loss — occlusion / detachment / acute glaucoma / optic neuritis',
        action: 'Same-day emergency ophthalmology (± neurology).',
        source: 'CKS',
        when: i => i.persistent_sudden || i.painless_total || i.flashes_floaters_curtain || i.aacg || i.painful_movement,
      },
      {
        id: 'stroke', tier: 'emergency',
        label: 'Homonymous field loss + neurology — possible stroke',
        action: '999 / acute stroke pathway.',
        source: 'NICE NG128',
        when: i => i.homonymous,
      },
      {
        id: 'assess', tier: 'routine',
        label: 'Assess vision loss',
        action: 'Acuity, pupils, fields, fundus; refer per cause; chronic/refractive → optician/ophthalmology routine.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Giant cell arteritis', url: 'https://cks.nice.org.uk/topics/giant-cell-arteritis/' },
      { label: 'NICE NG128 — Stroke and TIA', url: 'https://www.nice.org.uk/guidance/ng128' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('vision-loss-dx', {
    title: 'Vision loss — differential',
    subtitle: 'The engine sorts by tempo and character — surfacing GCA, retinal artery/vein occlusion, retinal detachment, optic neuritis and stroke, and treating amaurosis fugax as a TIA.',
    guideline: 'CKS · NICE NG12 · NG128',
    patientPresenting: "I've suddenly lost vision in one eye, doctor.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'occlusion', name: 'Retinal artery / vein occlusion / ION', summary: 'Sudden painless profound monocular loss', baseline: 6, category: 'cant-miss',
        keyExam: 'RAPD, pale/cherry-red retina (CRAO) or haemorrhages (CRVO).', nextIx: '\u26A1 Same-day ophthalmology; exclude GCA (CRAO/ION); vascular risk workup.',
        patientPhrase: 'A blockage of the eye\u2019s blood supply has caused sudden loss — same-day eye assessment and finding the cause are vital.',
        ciksUrl: 'https://cks.nice.org.uk/topics/', redFlagAction: '\u26A1 Same-day ophthalmology' },
      { id: 'detachment', name: 'Retinal detachment', summary: 'Flashes/floaters then curtain/shadow', baseline: 4, category: 'cant-miss',
        keyExam: 'Field defect; detached retina on fundus.', nextIx: '\u26A1 Same-day ophthalmology — surgical repair.',
        patientPhrase: 'The retina is peeling away — urgent surgery can save the sight.',
        ciksUrl: 'https://cks.nice.org.uk/topics/', redFlagAction: '\u26A1 Same-day ophthalmology' },
      { id: 'optic_neuritis', name: 'Optic neuritis', summary: 'Pain on movement + reduced colour vision, younger', baseline: 3, category: 'less-common',
        keyExam: 'RAPD, reduced colour vision.', nextIx: 'Urgent ophthalmology/neurology; MRI (MS).',
        patientPhrase: 'Inflammation of the optic nerve, often reversible, sometimes linked to MS — urgent specialist assessment.',
        ciksUrl: 'https://cks.nice.org.uk/topics/' },
      { id: 'amaurosis', name: 'Amaurosis fugax (TIA)', summary: 'Transient monocular loss, recovered', baseline: 3, category: 'cant-miss',
        keyExam: 'Often normal after recovery; carotid bruit.', nextIx: '\u26A1 Treat as TIA — aspirin, TIA clinic, carotid imaging; exclude GCA.',
        patientPhrase: 'Temporary loss like a curtain is a warning — we treat it like a mini-stroke to prevent a permanent one.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng128', redFlagAction: '\u26A1 TIA pathway' },
      { id: 'stroke', name: 'Occipital stroke', summary: 'Homonymous field loss + neurology', baseline: 2, category: 'cant-miss',
        keyExam: 'Homonymous hemianopia, other deficits.', nextIx: '\u26A1 999 / acute stroke pathway.',
        patientPhrase: 'Loss of the same field in both eyes can mean a stroke — that is an emergency.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng128', redFlagAction: '\u26A1 999 stroke pathway' },

      { id: 'gca', name: 'Giant cell arteritis', summary: '≥50 + headache / jaw claudication', baseline: 1, category: 'cant-miss',
        keyExam: 'Scalp tenderness, reduced temporal pulse.', nextIx: '\u26A1 Same-day steroid + emergency referral; protect fellow eye.',
        patientPhrase: 'An artery inflammation that can blind both eyes — we start steroids and refer emergently today.',
        ciksUrl: 'https://cks.nice.org.uk/topics/giant-cell-arteritis/', redFlagAction: '\u26A1 Steroid + emergency referral' },
    ],
    effects: {
      age: (v) => v >= 60 ? { occlusion: +6, gca: +4 } : (v < 45 ? { optic_neuritis: +6 } : {}),
      vascular: { occlusion: +8, amaurosis: +8 },

      transient: { amaurosis: +26 },
      persistent_sudden: { occlusion: +6, detachment: +4 },

      painless_total: { occlusion: +22 },
      flashes_floaters_curtain: { detachment: +26 },
      painful_movement: { optic_neuritis: +24 },
      homonymous: { stroke: +28 },

      gca: { gca: +30, occlusion: +6 },
      aacg: { occlusion: +2 },
    },
    askAbout: {
      occlusion: ['painless_total', 'vascular'],
      detachment: ['flashes_floaters_curtain'],
      optic_neuritis: ['painful_movement'],
      amaurosis: ['transient'],
      stroke: ['homonymous'],
      gca: ['gca'],
    },
    sources: [
      { label: 'NICE CKS — Giant cell arteritis', url: 'https://cks.nice.org.uk/topics/giant-cell-arteritis/' },
      { label: 'NICE NG128 — Stroke and TIA', url: 'https://www.nice.org.uk/guidance/ng128' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'vision-loss', label: 'Vision loss', triage: 'vision-loss-triage', dx: 'vision-loss-dx' }
  );
})();
