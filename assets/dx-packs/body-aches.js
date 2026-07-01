/* ============================================
   Diagnostic Tool pack — Generalised Body Aches
   Shared-id triage + differential. CKS (PMR / fibromyalgia / vit D / statin).
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'statin', kind: 'check', label: 'On a statin / new myalgic drug' },

    { group: 'Pattern', id: 'viral_recent', kind: 'check', label: 'Recent viral illness, self-limiting' },
    { group: 'Pattern', id: 'girdle_stiff_50', kind: 'check', label: 'Age ≥50, shoulder/hip girdle stiffness, raised ESR/CRP (PMR)' },
    { group: 'Pattern', id: 'widespread_tender', kind: 'check', label: 'Chronic widespread pain, fatigue, poor sleep, normal bloods (fibromyalgia)' },
    { group: 'Pattern', id: 'thyroid_sx', kind: 'check', label: 'Cold intolerance / weight gain / fatigue (hypothyroid)' },
    { group: 'Pattern', id: 'low_vit_d', kind: 'check', label: 'Bone/muscle aches, low sunlight / dietary risk (vitamin D)' },
    { group: 'Pattern', id: 'inflammatory_joints', kind: 'check', label: 'Joint swelling / symmetrical synovitis / morning stiffness' },

    { group: 'Red flags', id: 'gca', kind: 'check', label: 'New headache / scalp tenderness / jaw claudication / visual symptoms (GCA)' },
    { group: 'Red flags', id: 'myositis', kind: 'check', label: 'Proximal weakness + very high CK (myositis)' },
    { group: 'Red flags', id: 'systemic_cancer', kind: 'check', label: 'Weight loss / night sweats / bone pain (malignancy)' },
  ];

  if (window.RGPTriage) RGPTriage.register('body-aches-triage', {
    title: 'Generalised body aches — triage',
    subtitle: 'Tick features. Surfaces GCA, myositis and malignancy pathways, then weights the common causes.',
    guideline: 'CKS · NICE NG12',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Targeted bloods (FBC, ESR/CRP, TFT, calcium/vit D, CK, U&E, LFT); review statins; most cases are viral, PMR, fibromyalgia, thyroid or vitamin D — treat by cause.',
    rules: [
      {
        id: 'gca', tier: 'emergency',
        label: 'Possible giant cell arteritis — headache / jaw claudication / visual symptoms',
        action: 'Same-day high-dose steroid + urgent rheumatology / ophthalmology (sight-threatening).',
        patientPhrase: '"These features can mean an inflammation of the arteries that threatens sight — I am starting steroids and referring you urgently today."',
        source: 'BSR GCA',
        when: i => i.gca,
      },
      {
        id: 'myositis', tier: 'urgent',
        label: 'Possible inflammatory myositis — proximal weakness + raised CK',
        action: 'CK, urgent rheumatology; stop statin; consider malignancy screen.',
        source: 'CKS',
        when: i => i.myositis,
      },
      {
        id: 'malignancy', tier: 'cancer',
        label: 'Systemic features — weight loss / night sweats / bone pain',
        action: 'Investigate per NICE NG12 (myeloma screen, imaging) by pattern.',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.systemic_cancer,
      },
      {
        id: 'pmr', tier: 'urgent',
        label: 'Possible PMR — ≥50, girdle stiffness, raised inflammatory markers',
        action: 'ESR/CRP; steroid trial with rapid response; monitor for GCA.',
        source: 'BSR PMR',
        when: i => i.girdle_stiff_50,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'Common cause — assess & treat',
        action: 'Viral → reassure; thyroid/vit D → replace; statin myalgia → review; fibromyalgia → explain + non-drug management.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Polymyalgia rheumatica', url: 'https://cks.nice.org.uk/topics/polymyalgia-rheumatica/' },
      { label: 'NICE CKS — Fibromyalgia', url: 'https://cks.nice.org.uk/topics/fibromyalgia/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('body-aches-dx', {
    title: 'Generalised aches — differential',
    subtitle: 'The engine weights viral, PMR, fibromyalgia, thyroid, vitamin D and statin causes, and always surfaces GCA, myositis and malignancy.',
    guideline: 'CKS · NICE NG12',
    patientPresenting: "I ache all over, doctor — it's been going on for weeks and I'm exhausted.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'viral', name: 'Post-viral myalgia', summary: 'Recent viral illness, self-limiting', baseline: 8, category: 'common',
        keyExam: 'Recent infection; otherwise well.', nextIx: 'Reassure; simple analgesia; review if persists.',
        patientPhrase: 'Aching after a viral illness is common and settles over days to weeks.',
        ciksUrl: 'https://cks.nice.org.uk/topics/fibromyalgia/' },
      { id: 'pmr', name: 'Polymyalgia rheumatica', summary: '≥50, girdle stiffness, raised ESR/CRP, rapid steroid response', baseline: 6, category: 'common',
        keyExam: 'Shoulder/hip girdle stiffness, reduced range.', nextIx: 'ESR/CRP; steroid trial; watch for GCA.',
        patientPhrase: 'An inflammatory condition of the shoulders and hips, common over 50. It responds dramatically to steroids.',
        ciksUrl: 'https://cks.nice.org.uk/topics/polymyalgia-rheumatica/' },
      { id: 'fibromyalgia', name: 'Fibromyalgia', summary: 'Chronic widespread pain, fatigue, poor sleep, normal bloods', baseline: 6, category: 'common',
        keyExam: 'Widespread tenderness; normal joints.', nextIx: 'Exclude organic causes; explain; exercise, sleep, psychological therapies, neuropathic agents.',
        patientPhrase: 'A condition where the nervous system amplifies pain. It is real and benign; the mainstay is activity, sleep and self-management.',
        ciksUrl: 'https://cks.nice.org.uk/topics/fibromyalgia/' },
      { id: 'thyroid', name: 'Hypothyroidism', summary: 'Cold intolerance, weight gain, fatigue', baseline: 3, category: 'common',
        keyExam: 'Thyroid signs.', nextIx: 'TSH; treat.',
        patientPhrase: 'An underactive thyroid can cause aches and fatigue. A blood test checks it and treatment helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypothyroidism/' },
      { id: 'vit_d', name: 'Vitamin D deficiency', summary: 'Bone/muscle aches, low sunlight/diet', baseline: 3, category: 'common',
        keyExam: 'Proximal tenderness.', nextIx: '25-OH vit D + calcium; replace.',
        patientPhrase: 'Low vitamin D can cause widespread aches. Supplements correct it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/vitamin-d-deficiency-in-adults/' },
      { id: 'statin', name: 'Statin-related myalgia', summary: 'Symmetrical muscle aches on a statin', baseline: 3, category: 'common',
        keyExam: 'Medication timeline; CK usually normal/mildly raised.', nextIx: 'Check CK; review/switch statin; recheck.',
        patientPhrase: 'A statin can cause muscle aches. We can adjust the dose or switch, and recheck.',
        ciksUrl: 'https://cks.nice.org.uk/topics/fibromyalgia/' },

      { id: 'gca', name: 'Giant cell arteritis', summary: 'Headache / jaw claudication / visual symptoms ± PMR', baseline: 1, category: 'cant-miss',
        keyExam: 'Scalp/temporal tenderness, reduced pulse.', nextIx: '\u26A1 Same-day high-dose steroid + urgent referral (sight-threatening).',
        patientPhrase: 'These features can threaten sight — we start steroids and refer urgently today.',
        ciksUrl: 'https://cks.nice.org.uk/topics/giant-cell-arteritis/', redFlagAction: '\u26A1 Steroid now + urgent referral' },
      { id: 'myositis_malig', name: 'Inflammatory myositis / malignancy', summary: 'Proximal weakness + high CK, or systemic red flags', baseline: 1, category: 'cant-miss',
        keyExam: 'Proximal weakness; systemic signs.', nextIx: '\u26A1 CK + urgent rheumatology; malignancy screen per NG12.',
        patientPhrase: 'Muscle weakness with these features needs urgent tests to exclude inflammation of the muscles or an underlying cancer.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 CK + urgent referral' },
    ],
    effects: {
      age: (v) => v >= 50 ? { pmr: +6, gca: +2 } : (v < 50 ? { fibromyalgia: +4, pmr: -6 } : {}),
      statin: { statin: +18 },

      viral_recent: { viral: +20 },
      girdle_stiff_50: { pmr: +22 },
      widespread_tender: { fibromyalgia: +22 },
      thyroid_sx: { thyroid: +20 },
      low_vit_d: { vit_d: +20 },
      inflammatory_joints: { pmr: +4 },

      gca: { gca: +30 },
      myositis: { myositis_malig: +24 },
      systemic_cancer: { myositis_malig: +18 },
    },
    askAbout: {
      viral: ['viral_recent'],
      pmr: ['girdle_stiff_50'],
      fibromyalgia: ['widespread_tender'],
      thyroid: ['thyroid_sx'],
      vit_d: ['low_vit_d'],
      statin: ['statin'],
      gca: ['gca'],
      myositis_malig: ['myositis', 'systemic_cancer'],
    },
    sources: [
      { label: 'NICE CKS — Polymyalgia rheumatica', url: 'https://cks.nice.org.uk/topics/polymyalgia-rheumatica/' },
      { label: 'NICE CKS — Fibromyalgia', url: 'https://cks.nice.org.uk/topics/fibromyalgia/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'body-aches', label: 'Generalised body aches', triage: 'body-aches-triage', dx: 'body-aches-dx' }
  );
})();
