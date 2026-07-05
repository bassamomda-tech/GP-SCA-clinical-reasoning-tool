/* ============================================
   Diagnostic Tool pack — Sciatica (lumbar radiculopathy)
   Shared-id triage + differential. NICE NG59 · CKS.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'cancer_immuno', kind: 'check', label: 'Cancer history / immunosuppressed / fever / weight loss' },

    { group: 'Pattern', id: 'dermatomal_leg', kind: 'check', label: 'Leg pain below knee in a dermatome' },
    { group: 'Pattern', id: 'root_signs', kind: 'check', label: 'Single-root signs (SLR positive, focal weakness/reflex loss)' },
    { group: 'Pattern', id: 'claudication_flexion', kind: 'check', label: 'Bilateral leg pain on walking, eased by flexion (stenosis)' },
    { group: 'Pattern', id: 'buttock_hip', kind: 'check', label: 'Buttock/hip pain, no below-knee radiation (referred/MSK)' },
    { group: 'Pattern', id: 'vascular', kind: 'check', label: 'Calf pain on walking, eased by standing still, absent pulses (vascular)' },

    { group: 'Cauda equina red flags', id: 'cauda', kind: 'check', label: 'Saddle numbness / bladder-bowel change / bilateral / progressive' },
  ];

  if (window.RGPTriage) RGPTriage.register('sciatica-triage', {
    title: 'Sciatica — triage',
    subtitle: 'Tick features. Surfaces cauda equina and serious-pathology pathways (NICE NG59).',
    guideline: 'NICE NG59 · CKS',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Most sciatica improves over weeks — stay active, neuropathic analgesia, physio; MRI only if persisting >4–6 weeks and intervention considered. Safety-net cauda equina.',
    rules: [
      {
        id: 'cauda', tier: 'emergency',
        label: 'Suspected cauda equina syndrome',
        action: 'EMERGENCY — same-day spinal assessment + urgent MRI.',
        patientPhrase: '"These symptoms can mean nerve compression at the base of the spine — an emergency, I am sending you now."',
        source: 'NICE NG59', sourceUrl: 'https://www.nice.org.uk/guidance/ng59',
        when: i => i.cauda,
      },
      {
        id: 'serious', tier: 'cancer',
        label: 'Cancer / infection features',
        action: 'Urgent spinal imaging ± 2WW; admission if infection.',
        source: 'NICE NG12',
        when: i => i.cancer_immuno,
      },
      {
        id: 'vascular', tier: 'urgent',
        label: 'Possible vascular claudication (not neurogenic)',
        action: 'Pulses, ABPI; PAD pathway.',
        source: 'NICE NG147 PAD',
        when: i => i.vascular,
      },
      {
        id: 'radiculopathy', tier: 'routine',
        label: 'Sciatica / radiculopathy or stenosis',
        action: 'Stay active, neuropathic analgesia, physio; MRI + specialist if persistent/progressive.',
        source: 'NICE NG59',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG59 — Low back pain & sciatica', url: 'https://www.nice.org.uk/guidance/ng59' },
      { label: 'NICE CKS — Sciatica', url: 'https://cks.nice.org.uk/topics/sciatica-lumbar-radiculopathy/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('sciatica-dx', {
    title: 'Leg pain — sciatica vs mimics',
    subtitle: 'The engine weights disc radiculopathy against spinal stenosis, referred/MSK and vascular claudication, and always surfaces cauda equina and serious spinal pathology.',
    guideline: 'NICE NG59 · CKS',
    patientPresenting: "I've got a shooting pain from my back down my leg, doctor — pins and needles too.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'radiculopathy', name: 'Disc radiculopathy (sciatica)', summary: 'Dermatomal leg pain below knee + root signs', baseline: 12, category: 'common',
        keyExam: 'Positive SLR, dermatomal sensory loss, myotomal weakness, reflex change.', nextIx: 'Clinical; neuropathic analgesia + physio; MRI if persists >4–6 weeks.',
        patientPhrase: 'A disc is pressing on a nerve root, sending pain down the leg. Most settle over weeks without surgery.',
        ciksUrl: 'https://cks.nice.org.uk/topics/sciatica-lumbar-radiculopathy/' },
      { id: 'stenosis', name: 'Spinal stenosis (neurogenic claudication)', summary: 'Older, bilateral leg pain on walking, eased by flexion', baseline: 5, category: 'common',
        keyExam: 'Relief on flexion/sitting; preserved pulses.', nextIx: 'Clinical; MRI if considering decompression; physio.',
        patientPhrase: 'A narrowed spinal canal pinches the nerves on walking; leaning forward relieves it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/sciatica-lumbar-radiculopathy/' },
      { id: 'referred', name: 'Referred / MSK (hip, SIJ, gluteal)', summary: 'Buttock/hip pain, no below-knee radiation', baseline: 5, category: 'common',
        keyExam: 'Hip/SIJ provocation; no root signs.', nextIx: 'Examine hip/SIJ; physio; treat source.',
        patientPhrase: 'The pain may be coming from the hip or pelvis rather than a trapped nerve — examination tells us which.',
        ciksUrl: 'https://cks.nice.org.uk/topics/sciatica-lumbar-radiculopathy/' },
      { id: 'vascular', name: 'Vascular claudication (PAD)', summary: 'Calf pain on walking, eased by rest, absent pulses', baseline: 3, category: 'less-common',
        keyExam: 'Absent pulses, cool foot; ABPI low.', nextIx: 'ABPI; PAD pathway; CV risk management.',
        patientPhrase: 'Narrowed leg arteries can cause calf pain on walking. We check the circulation and manage it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/peripheral-arterial-disease/' },

      { id: 'cauda_equina', name: 'Cauda equina syndrome', summary: 'Saddle anaesthesia, bladder/bowel change, bilateral, progressive', baseline: 1, category: 'cant-miss',
        keyExam: 'Saddle loss, reduced anal tone, post-void residual.', nextIx: '\u26A1 Emergency spinal assessment + urgent MRI.',
        patientPhrase: 'These features can mean nerve compression at the base of the spine — that needs an emergency scan tonight.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng59', redFlagAction: '\u26A1 Emergency spinal + MRI' },
      { id: 'serious', name: 'Spinal malignancy / infection', summary: 'Cancer history, fever, weight loss, progressive', baseline: 1, category: 'cant-miss',
        keyExam: 'Systemic features, focal tenderness.', nextIx: '\u26A1 Urgent imaging ± 2WW / admission.',
        patientPhrase: 'A few features mean urgent tests to exclude a serious spinal cause.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Urgent imaging' },
    ],
    effects: {
      age: (v) => v >= 60 ? { stenosis: +8, vascular: +4, radiculopathy: -2 } : {},
      cancer_immuno: { serious: +22 },

      dermatomal_leg: { radiculopathy: +20 },
      root_signs: { radiculopathy: +16 },
      claudication_flexion: { stenosis: +24 },
      buttock_hip: { referred: +22, radiculopathy: -6 },
      vascular: { vascular: +24 },

      cauda: { cauda_equina: +32 },
    },
    askAbout: {
      radiculopathy: ['dermatomal_leg', 'root_signs'],
      stenosis: ['claudication_flexion', 'age'],
      referred: ['buttock_hip'],
      vascular: ['vascular'],
      cauda_equina: ['cauda'],
      serious: ['cancer_immuno'],
    },
    sources: [
      { label: 'NICE NG59 — Low back pain & sciatica', url: 'https://www.nice.org.uk/guidance/ng59' },
      { label: 'NICE CKS — Sciatica', url: 'https://cks.nice.org.uk/topics/sciatica-lumbar-radiculopathy/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'sciatica', label: 'Sciatica', triage: 'sciatica-triage', dx: 'sciatica-dx' }
  );
})();
