/* ============================================
   Diagnostic Tool pack — Epistaxis (nosebleed)
   Shared-id triage + differential. CKS Epistaxis · NG12.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'anticoag', kind: 'check', label: 'Anticoagulant / antiplatelet / bleeding disorder' },

    { group: 'Current bleed', id: 'active_heavy', kind: 'check', label: 'Active heavy bleeding / not controlled by pressure' },
    { group: 'Current bleed', id: 'posterior', kind: 'check', label: 'Bleeding from both nostrils / down throat (posterior)' },
    { group: 'Current bleed', id: 'haemodynamic', kind: 'check', label: 'Dizzy / tachycardic / large blood loss' },

    { group: 'Cause clues', id: 'local_trauma_dry', kind: 'check', label: 'Nose-picking / trauma / dry air / URTI (local)' },
    { group: 'Cause clues', id: 'recurrent_anterior', kind: 'check', label: 'Recurrent anterior bleeds, visible Little\u2019s area vessel' },
    { group: 'Cause clues', id: 'bleeding_elsewhere', kind: 'check', label: 'Bruising / bleeding elsewhere (coagulopathy)' },

    { group: 'Red flags', id: 'unilateral_persistent', kind: 'check', label: 'Persistent unilateral blood-stained discharge / obstruction (tumour)' },
  ];

  if (window.RGPTriage) RGPTriage.register('epistaxis-triage', {
    title: 'Epistaxis — triage',
    subtitle: 'Tick features. Surfaces uncontrolled/posterior bleeds and the sinonasal tumour red flag.',
    guideline: 'CKS Epistaxis · NG12',
    inputs: INPUTS,
    defaultMessage: 'No emergency rule fired. First aid (lean forward, pinch soft part 10–15 min); if vessel visible → cautery; topical antiseptic; manage cause; safety-net.',
    rules: [
      {
        id: 'uncontrolled', tier: 'emergency',
        label: 'Uncontrolled / posterior bleed or haemodynamic compromise',
        action: 'Same-day ED/ENT — resuscitate; packing; consider posterior bleed management.',
        patientPhrase: '"This bleed isn\u2019t settling — you need hospital treatment to stop it safely."',
        source: 'CKS Epistaxis',
        when: i => i.active_heavy || i.posterior || i.haemodynamic,
      },
      {
        id: 'anticoag', tier: 'urgent',
        label: 'On anticoagulant / bleeding disorder',
        action: 'Check INR/clotting; manage bleed; review anticoagulation; ENT if recurrent/severe.',
        source: 'CKS',
        when: i => i.anticoag || i.bleeding_elsewhere,
      },
      {
        id: 'tumour_2ww', tier: 'cancer',
        label: 'Persistent unilateral blood-stained discharge / obstruction — exclude sinonasal tumour',
        action: 'ENT referral (consider 2WW head & neck).',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.unilateral_persistent,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'Anterior epistaxis — manage',
        action: 'First aid, cautery if vessel seen, Naseptin/antiseptic; humidification; review.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Epistaxis', url: 'https://cks.nice.org.uk/topics/epistaxis-nosebleeds/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('epistaxis-dx', {
    title: 'Epistaxis — differential',
    subtitle: 'The engine weights local (anterior), coagulopathic and drug causes, and surfaces posterior bleeds and sinonasal tumour.',
    guideline: 'CKS Epistaxis',
    patientPresenting: "I keep getting nosebleeds, doctor — some are quite heavy.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'local_anterior', name: 'Local anterior epistaxis', summary: 'Little\u2019s area, trauma/dryness/URTI', baseline: 12, category: 'common',
        keyExam: 'Visible vessel at Little\u2019s area.', nextIx: 'First aid; cautery; antiseptic cream; humidify.',
        patientPhrase: 'Most nosebleeds come from fragile vessels at the front of the nose. First aid and a little cautery usually fix it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/epistaxis-nosebleeds/' },
      { id: 'drug', name: 'Anticoagulant / antiplatelet-related', summary: 'On blood thinners', baseline: 6, category: 'common',
        keyExam: 'Medication review.', nextIx: 'Check clotting; manage bleed; review medication.',
        patientPhrase: 'A blood thinner makes nosebleeds more likely and heavier. We manage the bleed and review the medication.',
        ciksUrl: 'https://cks.nice.org.uk/topics/epistaxis-nosebleeds/' },
      { id: 'coagulopathy', name: 'Bleeding disorder', summary: 'Bleeding elsewhere, FH', baseline: 3, category: 'less-common',
        keyExam: 'Bruising, mucosal bleeding.', nextIx: 'FBC, coagulation, vWF; haematology.',
        patientPhrase: 'A clotting problem can cause recurrent bleeds. Blood tests check for it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/epistaxis-nosebleeds/' },
      { id: 'hypertension', name: 'Hypertension-associated', summary: 'Difficult-to-control bleed with high BP', baseline: 2, category: 'less-common',
        keyExam: 'Check BP.', nextIx: 'Manage bleed; address BP (not usually sole cause).',
        patientPhrase: 'High blood pressure can make bleeds harder to stop. We control both.',
        ciksUrl: 'https://cks.nice.org.uk/topics/epistaxis-nosebleeds/' },

      { id: 'posterior', name: 'Posterior bleed', summary: 'Heavy, both nostrils / throat, older / anticoagulated', baseline: 1, category: 'cant-miss',
        keyExam: 'No anterior source; blood in oropharynx.', nextIx: '\u26A1 ED/ENT — packing, possible posterior management.',
        patientPhrase: 'A bleed from the back of the nose is harder to control and needs hospital treatment.',
        ciksUrl: 'https://cks.nice.org.uk/topics/epistaxis-nosebleeds/', redFlagAction: '\u26A1 ED/ENT' },
      { id: 'tumour', name: 'Sinonasal / nasopharyngeal tumour', summary: 'Persistent unilateral discharge / obstruction', baseline: 1, category: 'cant-miss',
        keyExam: 'Unilateral mass / obstruction.', nextIx: '\u26A1 ENT ± 2WW head & neck.',
        patientPhrase: 'Persistent one-sided symptoms need an ENT look to exclude a growth — uncommon but important.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 ENT / 2WW' },
    ],
    effects: {
      age: (v) => v >= 60 ? { posterior: +3 } : (v < 16 ? { local_anterior: +4 } : {}),
      anticoag: { drug: +20, posterior: +3 },

      active_heavy: { posterior: +8 },
      posterior: { posterior: +26 },
      haemodynamic: { posterior: +8 },

      local_trauma_dry: { local_anterior: +18 },
      recurrent_anterior: { local_anterior: +16 },
      bleeding_elsewhere: { coagulopathy: +24 },

      unilateral_persistent: { tumour: +30 },
    },
    askAbout: {
      local_anterior: ['local_trauma_dry', 'recurrent_anterior'],
      drug: ['anticoag'],
      coagulopathy: ['bleeding_elsewhere'],
      hypertension: ['active_heavy'],
      posterior: ['posterior'],
      tumour: ['unilateral_persistent'],
    },
    sources: [
      { label: 'NICE CKS — Epistaxis', url: 'https://cks.nice.org.uk/topics/epistaxis-nosebleeds/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'epistaxis', label: 'Epistaxis', triage: 'epistaxis-triage', dx: 'epistaxis-dx' }
  );
})();
