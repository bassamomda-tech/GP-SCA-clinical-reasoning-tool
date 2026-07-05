/* ============================================
   Diagnostic Tool pack — Knee Pain
   Shared-id triage + differential. CKS Knee pain.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'trauma', kind: 'check', label: 'Acute injury / twisting / inability to weight-bear' },

    { group: 'Pattern', id: 'oa_pattern', kind: 'check', label: 'Older, activity-related, crepitus, stiffness <30 min' },
    { group: 'Pattern', id: 'locking_giving', kind: 'check', label: 'Locking / catching / giving way (meniscal/ligament)' },
    { group: 'Pattern', id: 'anterior_young', kind: 'check', label: 'Anterior pain, young, worse on stairs/sitting (PFPS)' },
    { group: 'Pattern', id: 'acute_mono_crystals', kind: 'check', label: 'Acute hot swollen joint, gout/pseudogout history' },
    { group: 'Pattern', id: 'bursitis', kind: 'check', label: 'Swelling over kneecap, kneeling (bursitis)' },
    { group: 'Pattern', id: 'hip_referred', kind: 'check', label: 'Knee pain but hip pathology (referred)' },

    { group: 'Red flags', id: 'septic', kind: 'check', label: 'Hot swollen joint + fever / systemically unwell' },
    { group: 'Red flags', id: 'mass_night', kind: 'check', label: 'Mass / unremitting night pain / weight loss (tumour)' },
  ];

  if (window.RGPTriage) RGPTriage.register('knee-pain-triage', {
    title: 'Knee pain — triage',
    subtitle: 'Tick features. Surfaces septic arthritis, fracture and tumour pathways.',
    guideline: 'CKS Knee pain',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Examine (effusion, range, ligaments, menisci); most knee pain is OA, soft-tissue or PFPS — analgesia, physio; image/refer by cause.',
    rules: [
      {
        id: 'septic', tier: 'emergency',
        label: 'Septic arthritis — hot swollen joint + fever',
        action: 'Same-day — urgent joint aspiration + admission before antibiotics.',
        patientPhrase: '"A hot swollen joint with fever could be infected — that needs urgent hospital assessment today."',
        source: 'BSR septic arthritis',
        when: i => i.septic,
      },
      {
        id: 'fracture', tier: 'urgent',
        label: 'Acute injury — fracture / significant ligament or meniscal tear',
        action: 'X-ray (Ottawa knee rules); orthopaedics if fracture / locked knee / instability.',
        source: 'CKS',
        when: i => i.trauma,
      },
      {
        id: 'crystal', tier: 'urgent',
        label: 'Acute crystal arthritis (gout / pseudogout)',
        action: 'Aspirate if doubt (exclude sepsis); NSAID/colchicine/steroid; urate after acute phase.',
        source: 'CKS Gout',
        when: i => i.acute_mono_crystals,
      },
      {
        id: 'tumour', tier: 'cancer',
        label: 'Possible bone tumour — mass / night pain / systemic',
        action: 'Urgent X-ray; sarcoma/2WW pathway.',
        source: 'NICE NG12',
        when: i => i.mass_night,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'Mechanical knee pain — assess & manage',
        action: 'Analgesia, physio, quads strengthening; image/refer by cause (OA, meniscal, PFPS, bursitis).',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Knee pain', url: 'https://cks.nice.org.uk/topics/knee-pain-assessment/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('knee-pain-dx', {
    title: 'Knee pain — differential',
    subtitle: 'The engine weights OA, meniscal/ligament injury, PFPS, crystal arthritis, bursitis and referred hip pain, and always surfaces septic arthritis and bone tumour.',
    guideline: 'CKS Knee pain',
    patientPresenting: "My knee's been painful and swollen, doctor — it catches when I bend it.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'oa', name: 'Osteoarthritis', summary: 'Older, activity-related, crepitus, brief stiffness', baseline: 12, category: 'common',
        keyExam: 'Crepitus, bony swelling, reduced range.', nextIx: 'Clinical (no X-ray needed to diagnose); exercise, weight loss, analgesia.',
        patientPhrase: 'Wear-and-tear arthritis of the knee. Strengthening, weight management and pain relief help most people.',
        ciksUrl: 'https://cks.nice.org.uk/topics/osteoarthritis/', caseLink: '../cases/osteoarthritis.html' },
      { id: 'meniscal_ligament', name: 'Meniscal / ligament injury', summary: 'Twisting injury, locking, giving way, effusion', baseline: 7, category: 'common',
        keyExam: 'Joint-line tenderness, effusion, instability tests.', nextIx: 'RICE, physio; MRI + orthopaedics if locked/unstable or not improving.',
        patientPhrase: 'A cartilage or ligament tear can cause catching and instability. Many settle with rehab; some need a scan.',
        ciksUrl: 'https://cks.nice.org.uk/topics/knee-pain-assessment/' },
      { id: 'pfps', name: 'Patellofemoral pain', summary: 'Young, anterior pain, worse on stairs/prolonged sitting', baseline: 5, category: 'common',
        keyExam: 'Anterior pain, normal joint.', nextIx: 'Quads/VMO physio; activity modification; reassure.',
        patientPhrase: 'Pain around the kneecap, common in younger people. Targeted exercises usually fix it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/knee-pain-assessment/' },
      { id: 'crystal', name: 'Gout / pseudogout', summary: 'Acute hot swollen joint, crystal history', baseline: 3, category: 'common',
        keyExam: 'Red hot tender joint.', nextIx: 'Aspirate if doubt; NSAID/colchicine/steroid; urate later.',
        patientPhrase: 'A crystal arthritis flare — very painful but treatable, and we prevent future attacks.',
        ciksUrl: 'https://cks.nice.org.uk/topics/gout/', caseLink: '../cases/gout.html' },
      { id: 'bursitis', name: 'Bursitis', summary: 'Swelling over the kneecap, kneeling', baseline: 3, category: 'less-common',
        keyExam: 'Localised prepatellar swelling.', nextIx: 'Rest, avoid kneeling; exclude septic bursitis.',
        patientPhrase: 'An inflamed cushion in front of the knee, often from kneeling. Rest settles it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/knee-pain-assessment/' },
      { id: 'referred_hip', name: 'Referred hip pain', summary: 'Knee pain but hip pathology', baseline: 2, category: 'less-common',
        keyExam: 'Restricted hip rotation reproduces pain.', nextIx: 'Examine/image hip.',
        patientPhrase: 'Hip problems often present as knee pain — examination of the hip clarifies it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/knee-pain-assessment/' },

      { id: 'septic', name: 'Septic arthritis', summary: 'Hot swollen joint + fever', baseline: 1, category: 'cant-miss',
        keyExam: 'Hot effusion, fever, very painful.', nextIx: '\u26A1 Urgent aspiration + admission before antibiotics.',
        patientPhrase: 'A hot swollen joint with fever could be infected — that is an emergency today.',
        ciksUrl: 'https://cks.nice.org.uk/topics/knee-pain-assessment/', redFlagAction: '\u26A1 Aspirate + admit' },
      { id: 'tumour', name: 'Bone tumour', summary: 'Mass, unremitting night pain, systemic, young', baseline: 1, category: 'cant-miss',
        keyExam: 'Mass, tenderness.', nextIx: '\u26A1 Urgent X-ray; sarcoma/2WW pathway.',
        patientPhrase: 'Night pain with a mass needs an urgent X-ray to exclude a bone tumour.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Urgent X-ray / 2WW' },
    ],
    effects: {
      age: (v) => v >= 55 ? { oa: +10, pfps: -4 } : (v < 35 ? { pfps: +8, meniscal_ligament: +2, oa: -6 } : {}),
      trauma: { meniscal_ligament: +14 },

      oa_pattern: { oa: +20 },
      locking_giving: { meniscal_ligament: +22 },
      anterior_young: { pfps: +22 },
      acute_mono_crystals: { crystal: +24 },
      bursitis: { bursitis: +22 },
      hip_referred: { referred_hip: +22 },

      septic: { septic: +30 },
      mass_night: { tumour: +24 },
    },
    askAbout: {
      oa: ['oa_pattern', 'age'],
      meniscal_ligament: ['locking_giving', 'trauma'],
      pfps: ['anterior_young'],
      crystal: ['acute_mono_crystals'],
      bursitis: ['bursitis'],
      referred_hip: ['hip_referred'],
      septic: ['septic'],
      tumour: ['mass_night'],
    },
    sources: [
      { label: 'NICE CKS — Knee pain', url: 'https://cks.nice.org.uk/topics/knee-pain-assessment/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'knee-pain', label: 'Knee pain', triage: 'knee-pain-triage', dx: 'knee-pain-dx' }
  );
})();
