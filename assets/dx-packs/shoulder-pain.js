/* ============================================
   Diagnostic Tool pack — Shoulder Pain
   Shared-id triage + differential. CKS Shoulder pain.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'diabetes', kind: 'check', label: 'Diabetes (frozen shoulder risk)' },
    { group: 'Demographics & context', id: 'trauma', kind: 'check', label: 'Trauma / fall / dislocation' },

    { group: 'Pattern', id: 'painful_arc', kind: 'check', label: 'Painful arc / weakness on resisted movement (rotator cuff)' },
    { group: 'Pattern', id: 'global_stiff', kind: 'check', label: 'Global loss of movement, esp. external rotation (frozen shoulder)' },
    { group: 'Pattern', id: 'crepitus_oa', kind: 'check', label: 'Older, crepitus, gradual (OA)' },
    { group: 'Pattern', id: 'instability', kind: 'check', label: 'Apprehension / recurrent subluxation (instability)' },
    { group: 'Pattern', id: 'neck_radiating', kind: 'check', label: 'Pain from neck / dermatomal (cervical referred)' },

    { group: 'Red flags', id: 'cardiac_diaphragm', kind: 'check', label: 'Exertional / tip-of-shoulder pain + cardiac/abdominal symptoms (referred visceral)' },
    { group: 'Red flags', id: 'hot_swollen_fever', kind: 'check', label: 'Hot swollen joint + fever (septic)' },
    { group: 'Red flags', id: 'mass_systemic', kind: 'check', label: 'Mass / weight loss / unremitting night pain (tumour)' },
  ];

  if (window.RGPTriage) RGPTriage.register('shoulder-pain-triage', {
    title: 'Shoulder pain — triage',
    subtitle: 'Tick features. Surfaces referred cardiac/visceral pain, septic arthritis and tumour pathways.',
    guideline: 'CKS Shoulder pain',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Examine (active/passive range, resisted tests); most shoulder pain is rotator cuff, frozen shoulder or OA — analgesia, physio, consider injection; image/refer if not improving.',
    rules: [
      {
        id: 'visceral', tier: 'emergency',
        label: 'Referred cardiac / diaphragmatic pain',
        action: 'Assess for ACS / intra-abdominal cause; ECG; do not anchor on the shoulder.',
        patientPhrase: '"Shoulder-tip pain with these features can come from the heart or abdomen — I need to check those first."',
        source: 'CKS',
        when: i => i.cardiac_diaphragm,
      },
      {
        id: 'septic', tier: 'emergency',
        label: 'Septic arthritis — hot swollen joint + fever',
        action: 'Same-day — urgent joint aspiration + admission before antibiotics.',
        source: 'BSR septic arthritis',
        when: i => i.hot_swollen_fever,
      },
      {
        id: 'tumour', tier: 'cancer',
        label: 'Possible bony / soft-tissue tumour — mass / systemic / unremitting night pain',
        action: 'Urgent imaging ± sarcoma/2WW pathway.',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.mass_systemic,
      },
      {
        id: 'trauma', tier: 'urgent',
        label: 'Acute trauma — fracture / dislocation',
        action: 'X-ray; reduce dislocation; orthopaedics as needed.',
        source: 'CKS',
        when: i => i.trauma,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'Mechanical shoulder pain — assess & manage',
        action: 'Analgesia, physio, subacromial/intra-articular injection; image/refer if not improving.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Shoulder pain', url: 'https://cks.nice.org.uk/topics/shoulder-pain/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('shoulder-pain-dx', {
    title: 'Shoulder pain — differential',
    subtitle: 'The engine weights rotator cuff, frozen shoulder, OA, instability and cervical-referred pain, and always surfaces referred visceral pain, septic arthritis and tumour.',
    guideline: 'CKS Shoulder pain',
    patientPresenting: "I can't lift my arm without pain, doctor, and it's keeping me awake at night.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'rotator_cuff', name: 'Rotator cuff disorder', summary: 'Painful arc, weakness on resisted abduction/rotation', baseline: 12, category: 'common',
        keyExam: 'Painful arc, positive resisted tests, normal passive range early.', nextIx: 'Analgesia, physio; subacromial injection; USS/MRI if not improving.',
        patientPhrase: 'The tendons over the shoulder are irritated or torn. Physiotherapy and sometimes an injection help most people.',
        ciksUrl: 'https://cks.nice.org.uk/topics/shoulder-pain/' },
      { id: 'frozen', name: 'Adhesive capsulitis (frozen shoulder)', summary: 'Global stiffness, loss of external rotation, diabetes', baseline: 6, category: 'common',
        keyExam: 'Reduced active AND passive range, esp. external rotation.', nextIx: 'Analgesia, physio; intra-articular steroid; reassure (self-limiting over months–years).',
        patientPhrase: 'The shoulder capsule has tightened, restricting all movement. It is frustrating but improves; physio and injections help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/shoulder-pain/' },
      { id: 'oa', name: 'Glenohumeral / AC joint OA', summary: 'Older, crepitus, gradual', baseline: 4, category: 'common',
        keyExam: 'Crepitus, AC joint tenderness.', nextIx: 'Analgesia, physio, injection; X-ray; refer if severe.',
        patientPhrase: 'Wear-and-tear arthritis of the shoulder. We manage pain and keep it moving.',
        ciksUrl: 'https://cks.nice.org.uk/topics/shoulder-pain/' },
      { id: 'instability', name: 'Instability', summary: 'Younger, apprehension, recurrent subluxation', baseline: 3, category: 'less-common',
        keyExam: 'Apprehension test positive.', nextIx: 'Physio (rehab); refer if recurrent dislocations.',
        patientPhrase: 'The shoulder slips partly out of joint. Strengthening exercises usually stabilise it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/shoulder-pain/' },
      { id: 'referred_neck', name: 'Cervical-referred pain', summary: 'Pain from the neck, dermatomal', baseline: 3, category: 'common',
        keyExam: 'Full shoulder range; neck signs.', nextIx: 'Assess neck; treat radiculopathy.',
        patientPhrase: 'The pain may be coming from the neck rather than the shoulder itself — examination tells us which.',
        ciksUrl: 'https://cks.nice.org.uk/topics/neck-pain-cervical-radiculopathy/' },

      { id: 'visceral', name: 'Referred cardiac / visceral pain', summary: 'Exertional / tip-of-shoulder + systemic symptoms', baseline: 1, category: 'cant-miss',
        keyExam: 'Normal shoulder exam; CV/abdominal signs.', nextIx: '\u26A1 ECG ± troponin; assess intra-abdominal cause.',
        patientPhrase: 'Shoulder-tip pain can be referred from the heart or abdomen — I will check those to be safe.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg95', redFlagAction: '\u26A1 ECG / assess viscera' },
      { id: 'septic_tumour', name: 'Septic arthritis / tumour', summary: 'Hot swollen + fever, or mass / unremitting night pain', baseline: 1, category: 'cant-miss',
        keyExam: 'Hot effusion, fever; or mass/systemic signs.', nextIx: '\u26A1 Septic → aspirate + admit; tumour → urgent imaging ± 2WW.',
        patientPhrase: 'A hot swollen joint or a mass needs urgent assessment to exclude infection or tumour.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Aspirate / urgent imaging' },
    ],
    effects: {
      age: (v) => v >= 60 ? { oa: +6, rotator_cuff: +2, instability: -4 } : (v < 40 ? { instability: +6 } : {}),
      diabetes: { frozen: +12 },
      trauma: { instability: +4 },

      painful_arc: { rotator_cuff: +22 },
      global_stiff: { frozen: +24 },
      crepitus_oa: { oa: +20 },
      instability: { instability: +22 },
      neck_radiating: { referred_neck: +22 },

      cardiac_diaphragm: { visceral: +28 },
      hot_swollen_fever: { septic_tumour: +28 },
      mass_systemic: { septic_tumour: +22 },
    },
    askAbout: {
      rotator_cuff: ['painful_arc'],
      frozen: ['global_stiff', 'diabetes'],
      oa: ['crepitus_oa'],
      instability: ['instability'],
      referred_neck: ['neck_radiating'],
      visceral: ['cardiac_diaphragm'],
      septic_tumour: ['hot_swollen_fever', 'mass_systemic'],
    },
    sources: [
      { label: 'NICE CKS — Shoulder pain', url: 'https://cks.nice.org.uk/topics/shoulder-pain/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'shoulder-pain', label: 'Shoulder pain', triage: 'shoulder-pain-triage', dx: 'shoulder-pain-dx' }
  );
})();
