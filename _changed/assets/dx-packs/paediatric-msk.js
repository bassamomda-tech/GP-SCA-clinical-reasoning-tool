/* ============================================
   Diagnostic Tool pack — Paediatric MSK presentations
   Shared-id triage + differential. CKS · pGALS.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Age', id: 'age_years', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 18, step: 1 },

    { group: 'Pattern', id: 'growing_pains', kind: 'check', label: 'Bilateral leg pain, evening/night, normal by morning, normal exam (growing pains)' },
    { group: 'Pattern', id: 'hypermobility', kind: 'check', label: 'Activity-related pain, hypermobile joints (Beighton)' },
    { group: 'Pattern', id: 'mechanical_overuse', kind: 'check', label: 'Sport/overuse, localised (e.g. Osgood-Schlatter)' },
    { group: 'Pattern', id: 'jia', kind: 'check', label: 'Persistent joint swelling >6 weeks / morning stiffness / limp (JIA)' },

    { group: 'Red flags', id: 'septic', kind: 'check', label: 'Fever + hot swollen joint + refusing to use limb (septic arthritis)' },
    { group: 'Red flags', id: 'systemic_malig', kind: 'check', label: 'Night pain waking from sleep / weight loss / bruising / pallor (malignancy)' },
    { group: 'Red flags', id: 'unilateral_persistent', kind: 'check', label: 'Persistent unilateral pain / regression of function / safeguarding concern' },
  ];

  if (window.RGPTriage) RGPTriage.register('paediatric-msk-triage', {
    title: 'Paediatric MSK — triage',
    subtitle: 'Tick features. Surfaces septic arthritis, malignancy and JIA; otherwise reassures benign patterns.',
    guideline: 'CKS · pGALS',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Use pGALS screen; benign patterns (growing pains, hypermobility, overuse) are common — reassure and manage; safety-net for night pain, swelling >6 weeks, systemic features.',
    rules: [
      {
        id: 'septic', tier: 'emergency',
        label: 'Septic arthritis / osteomyelitis',
        action: 'Same-day orthopaedic/paediatric — bloods, USS, aspiration.',
        source: 'BSCOS',
        when: i => i.septic,
      },
      {
        id: 'malignancy', tier: 'cancer',
        label: 'Possible malignancy — night pain / systemic features',
        action: 'Urgent FBC + film; paediatric/haematology referral.',
        source: 'NICE NG12',
        when: i => i.systemic_malig,
      },
      {
        id: 'jia', tier: 'urgent',
        label: 'Possible JIA — persistent synovitis',
        action: 'Paediatric rheumatology referral; eye screening for uveitis.',
        source: 'CKS',
        when: i => i.jia || i.unilateral_persistent,
      },
      {
        id: 'benign', tier: 'routine',
        label: 'Benign MSK pattern',
        action: 'Reassure; analgesia/physio; activity advice; review if features change.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Musculoskeletal pain (children)', url: 'https://cks.nice.org.uk/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('paediatric-msk-dx', {
    title: 'Paediatric MSK — differential',
    subtitle: 'The engine weights growing pains, hypermobility and overuse against JIA, and always surfaces septic arthritis and malignancy.',
    guideline: 'CKS · pGALS',
    patientPresenting: "My child keeps getting joint and limb pains, doctor.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'growing_pains', name: 'Growing pains', summary: 'Bilateral, evening/night, normal by morning, normal exam', baseline: 11, category: 'common',
        keyExam: 'Normal joints; normal pGALS.', nextIx: 'Reassure; massage/analgesia; benign.',
        patientPhrase: 'A benign, common pattern of evening leg pains with a normal examination. Reassurance and simple measures help.',
        ciksUrl: 'https://cks.nice.org.uk/' },
      { id: 'hypermobility', name: 'Hypermobility-related pain', summary: 'Activity-related, lax joints', baseline: 6, category: 'common',
        keyExam: 'High Beighton score.', nextIx: 'Physio, muscle strengthening, pacing; reassure.',
        patientPhrase: 'Flexible joints can ache with activity. Strengthening exercises and pacing improve it.',
        ciksUrl: 'https://cks.nice.org.uk/' },
      { id: 'overuse', name: 'Mechanical / overuse', summary: 'Sport-related, localised (e.g. Osgood-Schlatter)', baseline: 5, category: 'common',
        keyExam: 'Localised tenderness; otherwise well.', nextIx: 'Relative rest, analgesia, physio.',
        patientPhrase: 'An overuse strain from sport. Rest and gradual return resolve it.',
        ciksUrl: 'https://cks.nice.org.uk/' },
      { id: 'jia', name: 'Juvenile idiopathic arthritis', summary: 'Persistent swelling >6 weeks, stiffness, limp', baseline: 3, category: 'cant-miss',
        keyExam: 'Persistent synovitis.', nextIx: '\u26A1 Paediatric rheumatology; uveitis screening.',
        patientPhrase: 'Persistent joint swelling can be childhood arthritis — a specialist confirms and treats it early to protect joints and eyes.',
        ciksUrl: 'https://cks.nice.org.uk/', redFlagAction: '\u26A1 Paediatric rheumatology' },

      { id: 'septic', name: 'Septic arthritis / osteomyelitis', summary: 'Fever + hot swollen joint + refusing to use limb', baseline: 1, category: 'cant-miss',
        keyExam: 'Hot swollen joint; toxic.', nextIx: '\u26A1 Same-day orthopaedics.',
        patientPhrase: 'A joint infection is an emergency needing same-day hospital care.',
        ciksUrl: 'https://cks.nice.org.uk/', redFlagAction: '\u26A1 Same-day orthopaedics' },
      { id: 'malignancy', name: 'Malignancy (leukaemia / bone tumour)', summary: 'Night pain, systemic, bruising, pallor', baseline: 1, category: 'cant-miss',
        keyExam: 'Pallor, bruising, bone tenderness.', nextIx: '\u26A1 Urgent FBC + film; referral.',
        patientPhrase: 'Night pain with these features needs urgent blood tests to exclude a serious cause.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Urgent FBC + referral' },
    ],
    effects: {
      growing_pains: { growing_pains: +22 },
      hypermobility: { hypermobility: +22 },
      mechanical_overuse: { overuse: +22 },
      jia: { jia: +24 },

      septic: { septic: +30 },
      systemic_malig: { malignancy: +28 },
      unilateral_persistent: { jia: +8, malignancy: +6 },
    },
    askAbout: {
      growing_pains: ['growing_pains'],
      hypermobility: ['hypermobility'],
      overuse: ['mechanical_overuse'],
      jia: ['jia', 'unilateral_persistent'],
      septic: ['septic'],
      malignancy: ['systemic_malig'],
    },
    sources: [
      { label: 'NICE CKS — Musculoskeletal pain (children)', url: 'https://cks.nice.org.uk/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'paediatric-msk', label: 'Paediatric MSK', triage: 'paediatric-msk-triage', dx: 'paediatric-msk-dx' }
  );
})();
