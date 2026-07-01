/* ============================================
   Diagnostic Tool pack — Limping Child
   Shared-id triage + differential. CKS · septic arthritis / SUFE red flags.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Age', id: 'age_years', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 18, step: 1 },

    { group: 'Acute', id: 'recent_viral', kind: 'check', label: 'Recent viral illness, well, low-grade, hip (transient synovitis)' },
    { group: 'Acute', id: 'trauma', kind: 'check', label: 'Clear injury / focal bony tenderness (fracture)' },
    { group: 'Acute', id: 'reactive', kind: 'check', label: 'Recent GI/throat infection, multiple joints (reactive)' },

    { group: 'Subacute / chronic', id: 'overweight_adolescent', kind: 'check', label: 'Overweight adolescent, hip/knee pain, externally rotated leg (SUFE)' },
    { group: 'Subacute / chronic', id: 'perthes', kind: 'check', label: 'Boy 4–8yr, insidious hip/knee pain + limp (Perthes)' },
    { group: 'Subacute / chronic', id: 'jia', kind: 'check', label: 'Persistent joint swelling >6 weeks, morning stiffness (JIA)' },

    { group: 'Red flags', id: 'septic', kind: 'check', label: 'Fever + refusing to weight-bear + hot swollen joint (septic arthritis)' },
    { group: 'Red flags', id: 'systemic_malig', kind: 'check', label: 'Night pain / weight loss / bruising / pallor / bone pain (malignancy)' },
    { group: 'Red flags', id: 'nai', kind: 'check', label: 'Non-mobile child / inconsistent history (safeguarding)' },
  ];

  if (window.RGPTriage) RGPTriage.register('limping-children-triage', {
    title: 'Limping child — triage',
    subtitle: 'Tick features. Surfaces septic arthritis, SUFE, malignancy and safeguarding.',
    guideline: 'CKS · NICE',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Examine all joints + spine; a limp in a child is never ignored. Transient synovitis is common but a diagnosis of exclusion — safety-net carefully and review.',
    rules: [
      {
        id: 'septic', tier: 'emergency',
        label: 'Septic arthritis / osteomyelitis — fever + refusing to weight-bear',
        action: 'Same-day — urgent orthopaedic/paediatric; bloods, USS, joint aspiration.',
        patientPhrase: '"A hot painful joint with fever and refusing to walk is an emergency — your child needs hospital today."',
        source: 'Kocher criteria / BSCOS',
        when: i => i.septic,
      },
      {
        id: 'sufe', tier: 'emergency',
        label: 'Possible SUFE — overweight adolescent, externally rotated leg',
        action: 'Same-day orthopaedics; non-weight-bearing; AP + frog-lateral hip X-ray.',
        patientPhrase: '"This needs same-day orthopaedic assessment to protect the hip joint."',
        source: 'CKS',
        when: i => i.overweight_adolescent,
      },
      {
        id: 'malignancy', tier: 'cancer',
        label: 'Possible malignancy — night pain / systemic / bruising / pallor',
        action: 'Urgent FBC + film + bloods; paediatric/haematology referral.',
        source: 'NICE NG12',
        when: i => i.systemic_malig,
      },
      {
        id: 'nai', tier: 'urgent',
        label: 'Safeguarding concern',
        action: 'Follow safeguarding pathway; imaging; senior review.',
        source: 'NICE CG89',
        when: i => i.nai,
      },
      {
        id: 'perthes_jia', tier: 'urgent',
        label: 'Perthes / JIA pattern',
        action: 'X-ray hips (Perthes); persistent synovitis → paediatric rheumatology (JIA).',
        source: 'CKS',
        when: i => i.perthes || i.jia,
      },
      {
        id: 'transient', tier: 'routine',
        label: 'Likely transient synovitis / minor injury',
        action: 'Analgesia, rest, review in 48h; return if fever / not weight-bearing.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Acute childhood limp', url: 'https://cks.nice.org.uk/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('limping-children-dx', {
    title: 'Limping child — differential',
    subtitle: 'Age guides the differential. The engine weights transient synovitis, trauma, Perthes and JIA, and always surfaces septic arthritis, SUFE, malignancy and safeguarding.',
    guideline: 'CKS · NICE',
    patientPresenting: "My child has started limping, doctor.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'transient', name: 'Transient synovitis (irritable hip)', summary: 'Well child, recent viral illness, 3–8yr', baseline: 11, category: 'common',
        keyExam: 'Reduced hip range; afebrile/low fever; able to weight-bear partially.', nextIx: 'Diagnosis of exclusion; analgesia, rest, 48h review; exclude septic arthritis.',
        patientPhrase: 'A temporary irritable hip after a viral illness is the commonest cause. It settles in days — but we make sure it is not an infection.',
        ciksUrl: 'https://cks.nice.org.uk/' },
      { id: 'trauma', name: 'Trauma / fracture', summary: 'Clear injury, focal tenderness', baseline: 6, category: 'common',
        keyExam: 'Focal bony tenderness; swelling.', nextIx: 'X-ray; manage fracture.',
        patientPhrase: 'An injury is the likely cause. An X-ray confirms and guides treatment.',
        ciksUrl: 'https://cks.nice.org.uk/' },
      { id: 'reactive', name: 'Reactive arthritis', summary: 'Recent GI/throat infection', baseline: 3, category: 'less-common',
        keyExam: 'Joint swelling post-infection.', nextIx: 'Supportive; exclude septic arthritis.',
        patientPhrase: 'A joint can react after an infection elsewhere. It usually settles, but we exclude infection in the joint.',
        ciksUrl: 'https://cks.nice.org.uk/' },
      { id: 'perthes', name: 'Perthes disease', summary: 'Boy 4–8yr, insidious hip/knee pain + limp', baseline: 2, category: 'less-common',
        keyExam: 'Reduced hip abduction/internal rotation.', nextIx: 'Hip X-ray; orthopaedic referral.',
        patientPhrase: 'Reduced blood supply to the hip ball in young boys. Early orthopaedic care protects the joint.',
        ciksUrl: 'https://cks.nice.org.uk/' },
      { id: 'jia', name: 'Juvenile idiopathic arthritis', summary: 'Persistent swelling >6 weeks, morning stiffness', baseline: 2, category: 'less-common',
        keyExam: 'Persistent synovitis.', nextIx: 'Paediatric rheumatology; eye screening.',
        patientPhrase: 'Persistent joint swelling can be childhood arthritis — a specialist confirms and treats it to protect the joints and eyes.',
        ciksUrl: 'https://cks.nice.org.uk/' },

      { id: 'septic', name: 'Septic arthritis / osteomyelitis', summary: 'Fever + refusing to weight-bear + hot joint', baseline: 1, category: 'cant-miss',
        keyExam: 'Hot swollen joint; non-weight-bearing; toxic.', nextIx: '\u26A1 Same-day — bloods, USS, aspiration; orthopaedics.',
        patientPhrase: 'A joint infection is an emergency — same-day hospital assessment protects the joint.',
        ciksUrl: 'https://cks.nice.org.uk/', redFlagAction: '\u26A1 Same-day orthopaedics' },
      { id: 'sufe', name: 'SUFE', summary: 'Overweight adolescent, externally rotated leg', baseline: 1, category: 'cant-miss',
        keyExam: 'Loss of internal rotation; out-turned leg.', nextIx: '\u26A1 Same-day orthopaedics; frog-lateral X-ray; non-weight-bearing.',
        patientPhrase: 'The growth plate of the hip can slip in adolescence — same-day orthopaedic care protects the hip.',
        ciksUrl: 'https://cks.nice.org.uk/', redFlagAction: '\u26A1 Same-day orthopaedics' },
      { id: 'malignancy', name: 'Malignancy (leukaemia / bone tumour)', summary: 'Night pain, systemic, bruising, pallor', baseline: 1, category: 'cant-miss',
        keyExam: 'Pallor, bruising, lymphadenopathy, bone tenderness.', nextIx: '\u26A1 Urgent FBC + film; paediatric/haematology referral.',
        patientPhrase: 'A few features mean urgent blood tests to exclude a serious cause of the limp.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Urgent FBC + referral' },
    ],
    effects: {
      age_years: (v) => v == null ? {} : (v >= 10 ? { sufe: +4 } : (v >= 4 && v <= 8 ? { perthes: +4, transient: +2 } : {})),

      recent_viral: { transient: +20 },
      trauma: { trauma: +22 },
      reactive: { reactive: +20 },

      overweight_adolescent: { sufe: +28 },
      perthes: { perthes: +22 },
      jia: { jia: +22 },

      septic: { septic: +30 },
      systemic_malig: { malignancy: +28 },
      nai: { trauma: +4 },
    },
    askAbout: {
      transient: ['recent_viral'],
      trauma: ['trauma'],
      reactive: ['reactive'],
      perthes: ['perthes'],
      jia: ['jia'],
      septic: ['septic'],
      sufe: ['overweight_adolescent'],
      malignancy: ['systemic_malig'],
    },
    sources: [
      { label: 'NICE CKS — Acute childhood limp', url: 'https://cks.nice.org.uk/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'limping-children', label: 'Limping child', triage: 'limping-children-triage', dx: 'limping-children-dx' }
  );
})();
