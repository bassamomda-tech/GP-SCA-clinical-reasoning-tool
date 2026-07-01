/* ============================================
   Diagnostic Tool pack — Diplopia (double vision)
   Shared-id triage + differential. CKS · stroke / GCA / aneurysm red flags.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'vascular', kind: 'check', label: 'Vascular risk (diabetes/hypertension)' },

    { group: 'Type', id: 'monocular', kind: 'check', label: 'Persists with one eye covered (monocular)' },
    { group: 'Type', id: 'binocular', kind: 'check', label: 'Resolves when either eye covered (binocular)' },

    { group: 'Binocular cause clues', id: 'variable_fatigable', kind: 'check', label: 'Variable / worse when tired, ptosis (myasthenia)' },
    { group: 'Binocular cause clues', id: 'thyroid_eye', kind: 'check', label: 'Proptosis / lid retraction / thyroid disease (thyroid eye)' },
    { group: 'Binocular cause clues', id: 'isolated_nerve', kind: 'check', label: 'Isolated nerve palsy, vascular risk, pupil-sparing (microvascular)' },

    { group: 'Red flags', id: 'painful_third_pupil', kind: 'check', label: 'Painful IIIrd-nerve palsy with dilated pupil (aneurysm)' },
    { group: 'Red flags', id: 'other_neuro', kind: 'check', label: 'Other neurology / sudden onset (stroke / raised ICP)' },
    { group: 'Red flags', id: 'gca', kind: 'check', label: 'Age ≥50 + headache / jaw claudication / scalp tenderness (GCA)' },
  ];

  if (window.RGPTriage) RGPTriage.register('diplopia-triage', {
    title: 'Diplopia — triage',
    subtitle: 'Tick features. Monocular is usually benign; binocular needs urgent neuro assessment — surfaces aneurysm, stroke and GCA.',
    guideline: 'CKS · NG128 · GCA',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Cover test to confirm monocular vs binocular: monocular → optician/ophthalmology (refractive/cataract); binocular → urgent assessment for the cause.',
    rules: [
      {
        id: 'aneurysm', tier: 'emergency',
        label: 'Painful IIIrd-nerve palsy with dilated pupil — possible posterior communicating aneurysm',
        action: '999 / same-day — urgent neuroimaging (CT + CTA).',
        patientPhrase: '"This pattern can mean an aneurysm pressing on a nerve — an emergency needing an urgent brain scan today."',
        source: 'CKS',
        when: i => i.painful_third_pupil,
      },
      {
        id: 'stroke', tier: 'emergency',
        label: 'Binocular diplopia + other neurology / sudden onset — stroke / raised ICP',
        action: '999 / acute stroke pathway; urgent imaging.',
        source: 'NICE NG128',
        when: i => i.other_neuro || (i.binocular && i.vascular === undefined && false),
      },
      {
        id: 'gca', tier: 'emergency',
        label: 'Possible GCA — ≥50 + headache / jaw claudication',
        action: 'Same-day steroid + urgent referral.',
        source: 'BSR GCA',
        when: i => i.gca,
      },
      {
        id: 'binocular', tier: 'urgent',
        label: 'Binocular diplopia — needs cause identified',
        action: 'Urgent ophthalmology/neurology; bloods (glucose, TFT, AChR), imaging by pattern.',
        source: 'CKS',
        when: i => i.binocular || i.variable_fatigable || i.thyroid_eye || i.isolated_nerve,
      },
      {
        id: 'monocular', tier: 'routine',
        label: 'Monocular diplopia — usually ocular',
        action: 'Optician/ophthalmology — refractive error, cataract, dry eye, astigmatism.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Diplopia', url: 'https://cks.nice.org.uk/' },
      { label: 'NICE NG128 — Stroke and TIA', url: 'https://www.nice.org.uk/guidance/ng128' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('diplopia-dx', {
    title: 'Diplopia — differential',
    subtitle: 'Monocular vs binocular is the pivot. The engine weights ocular causes (monocular), microvascular palsy, myasthenia and thyroid eye disease, and always surfaces aneurysm, stroke and GCA.',
    guideline: 'CKS · NG128',
    patientPresenting: "I'm seeing double, doctor — it started a couple of days ago.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'ocular', name: 'Ocular / monocular cause', summary: 'Refractive, cataract, dry eye, astigmatism', baseline: 9, category: 'common',
        keyExam: 'Persists with one eye covered; improves with pinhole.', nextIx: 'Optician/ophthalmology; usually benign.',
        patientPhrase: 'Double vision in one eye usually comes from the eye itself — often a refractive or lens issue, treatable by an optician/eye clinic.',
        ciksUrl: 'https://cks.nice.org.uk/' },
      { id: 'microvascular', name: 'Microvascular cranial nerve palsy', summary: 'Isolated III/IV/VI palsy, vascular risk, pupil-sparing III', baseline: 6, category: 'common',
        keyExam: 'Isolated palsy, pupil-sparing (microvascular IIIrd).', nextIx: 'Vascular risk workup; usually recovers over weeks; image if not resolving/atypical.',
        patientPhrase: 'A small blood-vessel problem has temporarily weakened an eye-movement nerve — most recover over weeks; we manage the risk factors.',
        ciksUrl: 'https://cks.nice.org.uk/' },
      { id: 'myasthenia', name: 'Myasthenia gravis', summary: 'Variable, fatigable, ptosis', baseline: 3, category: 'less-common',
        keyExam: 'Fatigable ptosis, variable squint.', nextIx: 'AChR antibodies; neurology; watch for bulbar/respiratory involvement.',
        patientPhrase: 'A condition where muscles tire easily can cause variable double vision — a blood test and neurology assessment confirm it.',
        ciksUrl: 'https://cks.nice.org.uk/' },
      { id: 'thyroid_eye', name: 'Thyroid eye disease', summary: 'Proptosis, lid retraction, thyroid disease', baseline: 3, category: 'less-common',
        keyExam: 'Proptosis, restricted movement.', nextIx: 'TFT, TRAb; ophthalmology; manage thyroid.',
        patientPhrase: 'Thyroid-related swelling behind the eyes can cause double vision — we treat the thyroid and involve eye specialists.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyperthyroidism/' },

      { id: 'aneurysm', name: 'Compressive IIIrd palsy (aneurysm)', summary: 'Painful, dilated pupil', baseline: 1, category: 'cant-miss',
        keyExam: 'IIIrd palsy with dilated pupil, pain.', nextIx: '\u26A1 999 — urgent CT + CTA.',
        patientPhrase: 'A painful nerve palsy with a dilated pupil can mean an aneurysm — an emergency brain scan is needed today.',
        ciksUrl: 'https://cks.nice.org.uk/', redFlagAction: '\u26A1 Emergency neuroimaging' },
      { id: 'stroke_icp', name: 'Stroke / raised ICP', summary: 'Other neurology, sudden, headache', baseline: 1, category: 'cant-miss',
        keyExam: 'Additional deficits; papilloedema.', nextIx: '\u26A1 999 / acute imaging.',
        patientPhrase: 'Double vision with other neurological signs needs an urgent scan to exclude a stroke or pressure on the brain.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng128', redFlagAction: '\u26A1 Urgent imaging' },
      { id: 'gca', name: 'Giant cell arteritis', summary: '≥50 + headache / jaw claudication', baseline: 1, category: 'cant-miss',
        keyExam: 'Scalp tenderness.', nextIx: '\u26A1 Same-day steroid + urgent referral.',
        patientPhrase: 'This can threaten sight — we start steroids and refer urgently today.',
        ciksUrl: 'https://cks.nice.org.uk/topics/giant-cell-arteritis/', redFlagAction: '\u26A1 Steroid + referral' },
    ],
    effects: {
      age: (v) => v >= 60 ? { microvascular: +6, gca: +2 } : (v < 45 ? { myasthenia: +3, thyroid_eye: +2 } : {}),
      vascular: { microvascular: +14 },

      monocular: { ocular: +24, microvascular: -8 },
      binocular: { microvascular: +8 },

      variable_fatigable: { myasthenia: +24 },
      thyroid_eye: { thyroid_eye: +24 },
      isolated_nerve: { microvascular: +16 },

      painful_third_pupil: { aneurysm: +30 },
      other_neuro: { stroke_icp: +26 },
      gca: { gca: +30 },
    },
    askAbout: {
      ocular: ['monocular'],
      microvascular: ['isolated_nerve', 'vascular'],
      myasthenia: ['variable_fatigable'],
      thyroid_eye: ['thyroid_eye'],
      aneurysm: ['painful_third_pupil'],
      stroke_icp: ['other_neuro'],
      gca: ['gca'],
    },
    sources: [
      { label: 'NICE CKS — Diplopia', url: 'https://cks.nice.org.uk/' },
      { label: 'NICE NG128 — Stroke and TIA', url: 'https://www.nice.org.uk/guidance/ng128' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'diplopia', label: 'Diplopia', triage: 'diplopia-triage', dx: 'diplopia-dx' }
  );
})();
