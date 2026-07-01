/* ============================================
   Diagnostic Tool pack — Neck Pain
   Shared-id triage + differential. CKS Neck pain · NICE NG12.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'cancer_hx', kind: 'check', label: 'Cancer history / weight loss / night pain' },
    { group: 'Demographics & context', id: 'immuno_fever', kind: 'check', label: 'Fever / IVDU / immunosuppressed (infection)' },
    { group: 'Demographics & context', id: 'trauma', kind: 'check', label: 'Significant trauma / osteoporosis' },

    { group: 'Pain pattern', id: 'mechanical', kind: 'check', label: 'Worse on movement, postural, eased by rest' },
    { group: 'Pain pattern', id: 'whiplash', kind: 'check', label: 'After acceleration/deceleration injury' },
    { group: 'Pain pattern', id: 'radicular_arm', kind: 'check', label: 'Arm pain / dermatomal numbness / single-root weakness' },
    { group: 'Pain pattern', id: 'inflammatory', kind: 'check', label: 'Morning stiffness, improves with activity, younger' },

    { group: 'Myelopathy red flags', id: 'myelopathy', kind: 'check', label: 'Gait/balance disturbance, hand clumsiness, UMN signs, bladder/bowel' },
  ];

  if (window.RGPTriage) RGPTriage.register('neck-pain-triage', {
    title: 'Neck pain — triage',
    subtitle: 'Tick features. Surfaces cervical myelopathy, infection, fracture and malignancy pathways.',
    guideline: 'CKS · NICE NG12',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired — pattern fits mechanical or radicular neck pain. Encourage movement, analgesia, reassurance; review at 4–6 weeks; image only if red flags or persisting radiculopathy.',
    rules: [
      {
        id: 'myelopathy', tier: 'emergency',
        label: 'Cervical myelopathy — gait/hand dysfunction, UMN signs, sphincter involvement',
        action: 'Urgent neurosurgical/spinal referral + MRI; same-day if rapidly progressive.',
        patientPhrase: '"These features suggest pressure on the spinal cord — I want an urgent scan and specialist opinion."',
        source: 'CKS Neck pain',
        when: i => i.myelopathy,
      },
      {
        id: 'infection', tier: 'emergency',
        label: 'Possible spinal infection — fever + risk factors',
        action: 'Same-day admission — CRP, cultures, urgent MRI.',
        source: 'CKS',
        when: i => i.immuno_fever,
      },
      {
        id: 'malignancy', tier: 'cancer',
        label: 'Suspected malignancy — cancer history / weight loss / progressive night pain',
        action: 'Urgent spinal imaging ± 2WW (NICE NG12).',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.cancer_hx,
      },
      {
        id: 'fracture', tier: 'urgent',
        label: 'Possible fracture — trauma / osteoporosis',
        action: 'Imaging (consider CT); immobilise if unstable injury suspected.',
        source: 'CKS',
        when: i => i.trauma,
      },
      {
        id: 'radiculopathy', tier: 'urgent',
        label: 'Cervical radiculopathy',
        action: 'Analgesia (neuropathic), physio; MRI + specialist if persists >4–6 weeks or progressive.',
        source: 'CKS',
        when: i => i.radicular_arm,
      },
      {
        id: 'mechanical', tier: 'routine',
        label: 'Mechanical / whiplash / inflammatory pattern',
        action: 'Keep active, analgesia; whiplash → reassurance + mobilise; inflammatory pattern → bloods/rheumatology.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Neck pain', url: 'https://cks.nice.org.uk/topics/neck-pain-cervical-radiculopathy/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('neck-pain-dx', {
    title: 'Neck pain — differential',
    subtitle: 'The engine weights mechanical, whiplash, radicular and inflammatory neck pain, and always surfaces cervical myelopathy, infection and malignancy.',
    guideline: 'CKS · NICE NG12',
    patientPresenting: "My neck's been stiff and painful, doctor, and now it's shooting down my arm.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'mechanical', name: 'Mechanical / non-specific neck pain', summary: 'Postural, movement-related, no neurology', baseline: 13, category: 'common',
        keyExam: 'Reduced/painful range, paraspinal tenderness, normal neuro.', nextIx: 'Clinical; keep active, analgesia; review.',
        patientPhrase: 'This is a strain of the neck muscles and joints — painful but not dangerous, and movement helps recovery.',
        ciksUrl: 'https://cks.nice.org.uk/topics/neck-pain-cervical-radiculopathy/' },
      { id: 'whiplash', name: 'Whiplash-associated disorder', summary: 'After acceleration/deceleration injury', baseline: 6, category: 'common',
        keyExam: 'Reduced range; normal neuro.', nextIx: 'Reassure, mobilise early, analgesia; avoid collar.',
        patientPhrase: 'A whiplash injury causes pain and stiffness that settles with early gentle movement.',
        ciksUrl: 'https://cks.nice.org.uk/topics/neck-pain-cervical-radiculopathy/' },
      { id: 'radiculopathy', name: 'Cervical radiculopathy', summary: 'Arm pain in a dermatome ± single-root signs', baseline: 7, category: 'common',
        keyExam: 'Dermatomal sensory loss, myotomal weakness, reduced reflex.', nextIx: 'Neuropathic analgesia + physio; MRI if persists/progressive.',
        patientPhrase: 'A nerve root in the neck is irritated, sending pain down the arm. Most settle over weeks.',
        ciksUrl: 'https://cks.nice.org.uk/topics/neck-pain-cervical-radiculopathy/' },
      { id: 'inflammatory', name: 'Inflammatory (spondyloarthritis / PMR)', summary: 'Morning stiffness, improves with activity', baseline: 3, category: 'less-common',
        keyExam: 'Stiffness; check shoulders/girdle (PMR).', nextIx: 'CRP/ESR; rheumatology if persistent inflammatory pattern.',
        patientPhrase: 'An inflammatory cause behaves differently — stiff in the morning, better with movement. Blood tests help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/polymyalgia-rheumatica/' },

      { id: 'myelopathy', name: 'Cervical myelopathy', summary: 'Gait/hand dysfunction, UMN signs, sphincter involvement', baseline: 1, category: 'cant-miss',
        keyExam: 'Hyperreflexia, Hoffmann\u2019s, gait ataxia, clumsy hands.', nextIx: '\u26A1 Urgent MRI + spinal/neurosurgical referral.',
        patientPhrase: 'Pressure on the spinal cord can affect the hands and walking — that needs an urgent scan and specialist.',
        ciksUrl: 'https://cks.nice.org.uk/topics/neck-pain-cervical-radiculopathy/', redFlagAction: '\u26A1 Urgent MRI + spinal referral' },
      { id: 'serious', name: 'Infection / malignancy', summary: 'Fever + risk factors, or cancer history / systemic features', baseline: 1, category: 'cant-miss',
        keyExam: 'Fever, focal tenderness, systemic signs.', nextIx: '\u26A1 Urgent imaging; admission for infection; 2WW for malignancy.',
        patientPhrase: 'A few features mean I want urgent tests to exclude an infection or tumour in the spine.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Urgent imaging / 2WW' },
    ],
    effects: {
      age: (v) => v >= 55 ? { mechanical: +2, serious: +2 } : (v < 40 ? { inflammatory: +3 } : {}),
      cancer_hx: { serious: +20 },
      immuno_fever: { serious: +16 },
      trauma: { mechanical: +2 },

      mechanical: { mechanical: +16 },
      whiplash: { whiplash: +24 },
      radicular_arm: { radiculopathy: +22 },
      inflammatory: { inflammatory: +20 },

      myelopathy: { myelopathy: +30 },
    },
    askAbout: {
      mechanical: ['mechanical'],
      whiplash: ['whiplash'],
      radiculopathy: ['radicular_arm'],
      inflammatory: ['inflammatory'],
      myelopathy: ['myelopathy'],
      serious: ['cancer_hx', 'immuno_fever'],
    },
    sources: [
      { label: 'NICE CKS — Neck pain', url: 'https://cks.nice.org.uk/topics/neck-pain-cervical-radiculopathy/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'neck-pain', label: 'Neck pain', triage: 'neck-pain-triage', dx: 'neck-pain-dx' }
  );
})();
