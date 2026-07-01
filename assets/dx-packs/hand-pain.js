/* ============================================
   Diagnostic Tool pack — Hand Pain
   Shared-id triage + differential. CKS (OA / RA / carpal tunnel / gout).
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Pattern', id: 'oa_pattern', kind: 'check', label: 'Older, DIP/CMC (base of thumb) nodes, activity-related' },
    { group: 'Pattern', id: 'ra_pattern', kind: 'check', label: 'Symmetrical MCP/PIP, >30 min morning stiffness, soft swelling' },
    { group: 'Pattern', id: 'carpal_tunnel', kind: 'check', label: 'Thumb/index/middle tingling, worse at night, shaking relieves' },
    { group: 'Pattern', id: 'gout_acute', kind: 'check', label: 'Acute hot swollen single joint (gout)' },
    { group: 'Pattern', id: 'dequervain', kind: 'check', label: 'Radial wrist pain, thumb use, positive Finkelstein (de Quervain)' },
    { group: 'Pattern', id: 'trigger', kind: 'check', label: 'Finger catching / locking in flexion (trigger finger)' },
    { group: 'Pattern', id: 'trauma', kind: 'check', label: 'Injury / fall onto hand' },

    { group: 'Red flags', id: 'ra_systemic', kind: 'check', label: 'Persistent synovitis ≥1 joint / positive RF / functional loss' },
    { group: 'Red flags', id: 'septic', kind: 'check', label: 'Hot joint + fever' },
  ];

  if (window.RGPTriage) RGPTriage.register('hand-pain-triage', {
    title: 'Hand pain — triage',
    subtitle: 'Tick features. Surfaces early inflammatory arthritis (urgent rheumatology) and septic arthritis.',
    guideline: 'NICE NG100 RA · CKS',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Examine joints + nerves; most hand pain is OA, carpal tunnel or soft-tissue — analgesia, splints, injection; treat by cause.',
    rules: [
      {
        id: 'septic', tier: 'emergency',
        label: 'Septic arthritis — hot joint + fever',
        action: 'Same-day — aspiration + admission.',
        source: 'BSR septic arthritis',
        when: i => i.septic,
      },
      {
        id: 'ra_referral', tier: 'urgent',
        label: 'Suspected inflammatory arthritis — persistent synovitis',
        action: 'Urgent rheumatology referral (do not delay for bloods); RF/anti-CCP, CRP/ESR, X-rays; early DMARDs.',
        patientPhrase: '"Persistent joint swelling like this needs an urgent specialist review — early treatment protects the joints."',
        source: 'NICE NG100', sourceUrl: 'https://www.nice.org.uk/guidance/ng100',
        when: i => i.ra_pattern || i.ra_systemic,
      },
      {
        id: 'fracture', tier: 'urgent',
        label: 'Acute injury — fracture (e.g. scaphoid)',
        action: 'X-ray; scaphoid views + immobilise if anatomical-snuffbox tenderness.',
        source: 'CKS',
        when: i => i.trauma,
      },
      {
        id: 'gout', tier: 'urgent',
        label: 'Acute gout',
        action: 'NSAID/colchicine/steroid; urate after acute phase; lifestyle.',
        source: 'CKS Gout',
        when: i => i.gout_acute,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'Mechanical / nerve hand pain — assess & manage',
        action: 'OA → analgesia/splint/injection; carpal tunnel → splint/injection/surgery; de Quervain/trigger → splint/injection.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG100 — Rheumatoid arthritis', url: 'https://www.nice.org.uk/guidance/ng100' },
      { label: 'NICE CKS — Carpal tunnel syndrome', url: 'https://cks.nice.org.uk/topics/carpal-tunnel-syndrome/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('hand-pain-dx', {
    title: 'Hand pain — differential',
    subtitle: 'The engine weights OA, carpal tunnel, de Quervain, trigger finger and gout, and always surfaces inflammatory arthritis (RA) and septic arthritis.',
    guideline: 'CKS · NICE NG100',
    patientPresenting: "My hands ache and stiffen up, doctor, and some fingers tingle at night.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'oa', name: 'Hand osteoarthritis', summary: 'DIP/CMC nodes, activity-related, older', baseline: 11, category: 'common',
        keyExam: 'Heberden/Bouchard nodes, squaring at thumb base.', nextIx: 'Analgesia, hand exercises, thumb-base splint/injection.',
        patientPhrase: 'Wear-and-tear arthritis of the hand joints. Exercises, splints and pain relief help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/osteoarthritis/', caseLink: '../cases/osteoarthritis.html' },
      { id: 'carpal_tunnel', name: 'Carpal tunnel syndrome', summary: 'Median tingling, worse at night, shaking relieves', baseline: 8, category: 'common',
        keyExam: 'Tinel/Phalen positive; thenar wasting if severe.', nextIx: 'Splint; injection; nerve conduction + surgery if severe; check thyroid/diabetes.',
        patientPhrase: 'A nerve is compressed at the wrist. A night splint often helps; an operation cures it if needed.',
        ciksUrl: 'https://cks.nice.org.uk/topics/carpal-tunnel-syndrome/' },
      { id: 'dequervain', name: 'De Quervain tenosynovitis', summary: 'Radial wrist pain, positive Finkelstein', baseline: 4, category: 'common',
        keyExam: 'Tenderness over radial styloid; Finkelstein positive.', nextIx: 'Splint, NSAID, injection.',
        patientPhrase: 'Inflamed thumb tendons at the wrist, common after repetitive use or with a new baby. Splinting and injection help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/carpal-tunnel-syndrome/' },
      { id: 'trigger', name: 'Trigger finger', summary: 'Catching/locking of a finger in flexion', baseline: 3, category: 'common',
        keyExam: 'Palpable nodule at A1 pulley; catching.', nextIx: 'Splint; steroid injection; surgery if persistent.',
        patientPhrase: 'A tendon catches as it passes a pulley, causing locking. An injection usually resolves it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/carpal-tunnel-syndrome/' },
      { id: 'gout', name: 'Gout', summary: 'Acute hot swollen single joint', baseline: 3, category: 'common',
        keyExam: 'Red hot tender joint; tophi.', nextIx: 'NSAID/colchicine/steroid; urate later.',
        patientPhrase: 'A crystal arthritis flare — painful but treatable, and we prevent future attacks.',
        ciksUrl: 'https://cks.nice.org.uk/topics/gout/', caseLink: '../cases/gout.html' },

      { id: 'ra', name: 'Rheumatoid / inflammatory arthritis', summary: 'Symmetrical MCP/PIP, prolonged stiffness, synovitis', baseline: 2, category: 'cant-miss',
        keyExam: 'Soft symmetrical synovitis, MCP squeeze tenderness.', nextIx: '\u26A1 Urgent rheumatology; RF/anti-CCP, CRP/ESR; early DMARDs protect joints.',
        patientPhrase: 'Persistent symmetrical swelling suggests inflammatory arthritis — early specialist treatment prevents joint damage.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng100', redFlagAction: '\u26A1 Urgent rheumatology' },
      { id: 'septic', name: 'Septic arthritis', summary: 'Hot joint + fever', baseline: 1, category: 'cant-miss',
        keyExam: 'Hot tender joint, fever.', nextIx: '\u26A1 Aspirate + admit.',
        patientPhrase: 'A hot swollen joint with fever could be infected — an emergency today.',
        ciksUrl: 'https://cks.nice.org.uk/topics/gout/', redFlagAction: '\u26A1 Aspirate + admit' },
    ],
    effects: {
      age: (v) => v >= 55 ? { oa: +8 } : (v < 45 ? { ra: +2, dequervain: +2, oa: -4 } : {}),

      oa_pattern: { oa: +22 },
      ra_pattern: { ra: +22, oa: -6 },
      carpal_tunnel: { carpal_tunnel: +24 },
      gout_acute: { gout: +24 },
      dequervain: { dequervain: +24 },
      trigger: { trigger: +24 },
      trauma: { oa: +2 },

      ra_systemic: { ra: +18 },
      septic: { septic: +30 },
    },
    askAbout: {
      oa: ['oa_pattern'],
      carpal_tunnel: ['carpal_tunnel'],
      dequervain: ['dequervain'],
      trigger: ['trigger'],
      gout: ['gout_acute'],
      ra: ['ra_pattern', 'ra_systemic'],
      septic: ['septic'],
    },
    sources: [
      { label: 'NICE NG100 — Rheumatoid arthritis', url: 'https://www.nice.org.uk/guidance/ng100' },
      { label: 'NICE CKS — Carpal tunnel syndrome', url: 'https://cks.nice.org.uk/topics/carpal-tunnel-syndrome/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'hand-pain', label: 'Hand pain', triage: 'hand-pain-triage', dx: 'hand-pain-dx' }
  );
})();
