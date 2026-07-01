/* ============================================
   Diagnostic Tool pack — Hip Pain
   Shared-id triage + differential. CKS Hip pain.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'osteoporosis_fall', kind: 'check', label: 'Fall / osteoporosis / unable to weight-bear (fracture)' },
    { group: 'Demographics & context', id: 'steroid_alcohol', kind: 'check', label: 'Steroids / alcohol excess (avascular necrosis)' },

    { group: 'Pattern', id: 'groin_oa', kind: 'check', label: 'Groin pain, reduced internal rotation, activity-related (OA)' },
    { group: 'Pattern', id: 'lateral_gtps', kind: 'check', label: 'Lateral hip pain, tender greater trochanter, lying on side (GTPS)' },
    { group: 'Pattern', id: 'back_referred', kind: 'check', label: 'Buttock/back pain, normal hip movement (referred spine)' },
    { group: 'Pattern', id: 'inflammatory', kind: 'check', label: 'Morning stiffness, younger, improves with activity (inflammatory)' },

    { group: 'Red flags', id: 'septic', kind: 'check', label: 'Hot joint + fever / systemically unwell' },
    { group: 'Red flags', id: 'pmr_shoulder', kind: 'check', label: 'Age ≥50, bilateral shoulder/hip girdle stiffness, raised ESR (PMR)' },
    { group: 'Red flags', id: 'mass_night', kind: 'check', label: 'Mass / unremitting night pain / weight loss' },
  ];

  if (window.RGPTriage) RGPTriage.register('hip-pain-triage', {
    title: 'Hip pain — triage',
    subtitle: 'Tick features. Surfaces fracture, septic arthritis, PMR and tumour pathways.',
    guideline: 'CKS Hip pain',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Examine (range, esp. internal rotation; trochanter; spine); most hip pain is OA, GTPS or referred — analgesia, physio; image/refer by cause.',
    rules: [
      {
        id: 'fracture', tier: 'emergency',
        label: 'Possible hip fracture — fall + unable to weight-bear / shortened externally rotated leg',
        action: 'Same-day — X-ray; orthopaedic admission.',
        patientPhrase: '"You may have fractured the hip — that needs hospital assessment and an X-ray today."',
        source: 'NICE NG124',
        when: i => i.osteoporosis_fall,
      },
      {
        id: 'septic', tier: 'emergency',
        label: 'Septic arthritis — hot joint + fever',
        action: 'Same-day — aspiration/imaging + admission.',
        source: 'BSR septic arthritis',
        when: i => i.septic,
      },
      {
        id: 'pmr', tier: 'urgent',
        label: 'Possible PMR — ≥50, girdle stiffness, raised inflammatory markers',
        action: 'ESR/CRP; trial steroid with rapid response; watch for GCA.',
        source: 'CKS PMR',
        when: i => i.pmr_shoulder,
      },
      {
        id: 'tumour', tier: 'cancer',
        label: 'Possible bony tumour / metastasis — mass / night pain / systemic',
        action: 'Urgent X-ray ± 2WW.',
        source: 'NICE NG12',
        when: i => i.mass_night,
      },
      {
        id: 'avn', tier: 'urgent',
        label: 'Possible avascular necrosis — steroids / alcohol, groin pain, normal X-ray',
        action: 'MRI if suspected; orthopaedics.',
        source: 'CKS',
        when: i => i.steroid_alcohol && i.groin_oa,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'Mechanical hip pain — assess & manage',
        action: 'Analgesia, physio; OA → exercise/weight loss; GTPS → load management/injection; referred → treat spine.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Hip pain', url: 'https://cks.nice.org.uk/topics/hip-pain/' },
      { label: 'NICE NG124 — Hip fracture', url: 'https://www.nice.org.uk/guidance/cg124' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('hip-pain-dx', {
    title: 'Hip pain — differential',
    subtitle: 'The engine weights OA, greater-trochanteric pain syndrome, referred spinal pain and inflammatory causes, and always surfaces fracture, septic arthritis, AVN and tumour.',
    guideline: 'CKS Hip pain',
    patientPresenting: "My hip's been aching, doctor — it's worse when I walk and it's stiffening up.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'oa', name: 'Hip osteoarthritis', summary: 'Groin pain, reduced internal rotation, activity-related', baseline: 12, category: 'common',
        keyExam: 'Reduced/painful internal rotation, antalgic gait.', nextIx: 'Clinical; exercise, weight loss, analgesia; X-ray + refer if severe.',
        patientPhrase: 'Wear-and-tear arthritis of the hip. Exercise, weight management and pain relief help; joint replacement is very effective if severe.',
        ciksUrl: 'https://cks.nice.org.uk/topics/osteoarthritis/', caseLink: '../cases/osteoarthritis.html' },
      { id: 'gtps', name: 'Greater trochanteric pain syndrome', summary: 'Lateral hip pain, tender trochanter, worse lying on side', baseline: 7, category: 'common',
        keyExam: 'Point tenderness over greater trochanter; normal hip range.', nextIx: 'Load management, physio; injection if refractory.',
        patientPhrase: 'Inflammation of the tendons/bursa on the side of the hip. Exercises and sometimes an injection help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hip-pain/' },
      { id: 'referred', name: 'Referred spinal / SIJ pain', summary: 'Buttock/back pain, normal hip movement', baseline: 4, category: 'common',
        keyExam: 'Full hip range; spine/SIJ signs.', nextIx: 'Examine spine/SIJ; treat source.',
        patientPhrase: 'The pain may come from the back or pelvis rather than the hip joint — examination tells us which.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hip-pain/' },
      { id: 'inflammatory', name: 'Inflammatory arthritis', summary: 'Younger, morning stiffness, improves with activity', baseline: 3, category: 'less-common',
        keyExam: 'Other joints; stiffness.', nextIx: 'CRP/ESR, rheumatology if persistent.',
        patientPhrase: 'An inflammatory arthritis behaves differently and needs specific treatment — blood tests and a rheumatology opinion help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hip-pain/' },

      { id: 'fracture', name: 'Hip fracture', summary: 'Fall, unable to weight-bear, shortened externally rotated leg', baseline: 1, category: 'cant-miss',
        keyExam: 'Shortened externally rotated leg; cannot weight-bear.', nextIx: '\u26A1 X-ray + orthopaedic admission today.',
        patientPhrase: 'A broken hip needs hospital assessment and surgery — we arrange that today.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg124', redFlagAction: '\u26A1 X-ray + admit' },
      { id: 'avn', name: 'Avascular necrosis', summary: 'Steroids / alcohol, groin pain, normal X-ray early', baseline: 1, category: 'cant-miss',
        keyExam: 'Painful restricted hip; X-ray may be normal early.', nextIx: '\u26A1 MRI; orthopaedic referral.',
        patientPhrase: 'The blood supply to the hip bone may be affected — an MRI detects it early so we can act.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hip-pain/', redFlagAction: '\u26A1 MRI + orthopaedics' },
      { id: 'septic_tumour', name: 'Septic arthritis / tumour', summary: 'Hot joint + fever, or mass / night pain / systemic', baseline: 1, category: 'cant-miss',
        keyExam: 'Hot joint, fever; or mass/systemic.', nextIx: '\u26A1 Aspirate + admit (septic) / urgent X-ray ± 2WW (tumour).',
        patientPhrase: 'These features need urgent assessment to exclude infection or a tumour.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Urgent assessment' },
    ],
    effects: {
      age: (v) => v >= 60 ? { oa: +8, fracture: +3 } : (v < 40 ? { inflammatory: +4, oa: -6 } : {}),
      osteoporosis_fall: { fracture: +24 },
      steroid_alcohol: { avn: +16 },

      groin_oa: { oa: +20, gtps: -6 },
      lateral_gtps: { gtps: +24 },
      back_referred: { referred: +22 },
      inflammatory: { inflammatory: +20 },

      septic: { septic_tumour: +28 },
      pmr_shoulder: { inflammatory: +6 },
      mass_night: { septic_tumour: +18 },
    },
    askAbout: {
      oa: ['groin_oa', 'age'],
      gtps: ['lateral_gtps'],
      referred: ['back_referred'],
      inflammatory: ['inflammatory'],
      fracture: ['osteoporosis_fall'],
      avn: ['steroid_alcohol'],
      septic_tumour: ['septic', 'mass_night'],
    },
    sources: [
      { label: 'NICE CKS — Hip pain', url: 'https://cks.nice.org.uk/topics/hip-pain/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'hip-pain', label: 'Hip pain', triage: 'hip-pain-triage', dx: 'hip-pain-dx' }
  );
})();
