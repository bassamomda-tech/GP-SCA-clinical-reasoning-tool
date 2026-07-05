/* ============================================
   Diagnostic Tool pack — Ankle Swelling (oedema)
   Shared-id triage + differential. CKS · DVT (Wells) · HF.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'ccb', kind: 'check', label: 'Calcium-channel blocker / NSAID / gabapentinoid / pioglitazone' },

    { group: 'Laterality', id: 'bilateral', kind: 'check', label: 'Bilateral / symmetrical' },
    { group: 'Laterality', id: 'unilateral', kind: 'check', label: 'Unilateral' },

    { group: 'Systemic clues', id: 'breathless_orthopnoea', kind: 'check', label: 'Breathless / orthopnoea / raised JVP (heart failure)' },
    { group: 'Systemic clues', id: 'frothy_urine_renal', kind: 'check', label: 'Frothy urine / known renal disease (nephrotic/renal)' },
    { group: 'Systemic clues', id: 'liver_ascites', kind: 'check', label: 'Chronic liver disease / ascites' },
    { group: 'Local clues', id: 'venous_skin', kind: 'check', label: 'Chronic skin changes / varicosities / worse on standing (venous)' },

    { group: 'Unilateral red flags', id: 'dvt_features', kind: 'check', label: 'Hot, tender, calf swelling >3cm, recent immobility/surgery/cancer (DVT)' },
    { group: 'Unilateral red flags', id: 'cellulitis', kind: 'check', label: 'Hot red tender + fever (cellulitis)' },

    { group: 'Acute red flags', id: 'acute_breathless_chest', kind: 'check', label: 'Acute swelling + breathlessness / chest pain (? PE / acute HF)' },
  ];

  if (window.RGPTriage) RGPTriage.register('ankle-swelling-triage', {
    title: 'Ankle swelling — triage',
    subtitle: 'Tick features. Surfaces DVT/PE, heart failure and nephrotic pathways.',
    guideline: 'CKS · Wells · NG106',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Bilateral → assess cardiac/renal/hepatic/venous + drug review; unilateral → exclude DVT (Wells + D-dimer/USS). Examine, urine dip, bloods (FBC, U&E, LFT, BNP, albumin).',
    rules: [
      {
        id: 'pe_acutehf', tier: 'emergency',
        label: 'Acute swelling + breathlessness / chest pain — ? PE or acute heart failure',
        action: '999 / same-day — assess; PE pathway / acute HF management.',
        patientPhrase: '"Leg swelling with breathlessness or chest pain needs urgent assessment today."',
        source: 'NICE NG158 / NG106',
        when: i => i.acute_breathless_chest,
      },
      {
        id: 'dvt', tier: 'urgent',
        label: 'Suspected DVT — unilateral hot tender calf swelling',
        action: 'Two-level Wells; D-dimer + proximal-leg USS pathway (same-day per local).',
        patientPhrase: '"A hot swollen calf can be a clot — I am arranging the urgent clot pathway today."',
        source: 'NICE NG158', sourceUrl: 'https://www.nice.org.uk/guidance/ng158',
        when: i => i.dvt_features,
      },
      {
        id: 'cellulitis', tier: 'urgent',
        label: 'Cellulitis — hot red tender + fever',
        action: 'Antibiotics; mark margins; admit if systemic/spreading.',
        source: 'CKS Cellulitis',
        when: i => i.cellulitis,
      },
      {
        id: 'hf_renal', tier: 'urgent',
        label: 'Bilateral oedema with systemic features — HF / nephrotic / hepatic',
        action: 'BNP + echo (HF); urine ACR + albumin (nephrotic); LFTs; treat cause.',
        source: 'NICE NG106',
        when: i => i.breathless_orthopnoea || i.frothy_urine_renal || i.liver_ascites,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'Dependent / venous / drug-related oedema',
        action: 'Review drugs (CCB); compression for venous; elevation; treat cause.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG158 — Venous thromboembolism', url: 'https://www.nice.org.uk/guidance/ng158' },
      { label: 'NICE CKS — Oedema', url: 'https://cks.nice.org.uk/topics/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('ankle-swelling-dx', {
    title: 'Ankle swelling — differential',
    subtitle: 'Laterality is the pivot. The engine weights venous, cardiac, renal, hepatic and drug causes (bilateral) vs DVT and cellulitis (unilateral), always surfacing DVT/PE.',
    guideline: 'CKS · NICE NG158',
    patientPresenting: "My ankles have swelled up, doctor — is something wrong with my heart?",
    inputs: INPUTS,
    diagnoses: [
      { id: 'venous', name: 'Chronic venous insufficiency / dependent', summary: 'Bilateral, worse on standing, skin changes', baseline: 10, category: 'common',
        keyExam: 'Varicosities, haemosiderin, oedema improving overnight.', nextIx: 'Compression, elevation, skin care; exclude systemic cause.',
        patientPhrase: 'The leg veins are not draining well, so fluid pools. Compression and elevation help most.',
        ciksUrl: 'https://cks.nice.org.uk/topics/' },
      { id: 'drug', name: 'Drug-induced oedema', summary: 'CCB / NSAID / gabapentinoid / pioglitazone', baseline: 6, category: 'common',
        keyExam: 'Medication review.', nextIx: 'Review/switch drug; reassess.',
        patientPhrase: 'A medication can cause fluid retention in the ankles. Adjusting it usually helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/' },
      { id: 'heart_failure', name: 'Heart failure', summary: 'Bilateral + breathless / orthopnoea / raised JVP', baseline: 5, category: 'common',
        keyExam: 'Raised JVP, basal crackles, displaced apex.', nextIx: 'BNP → echo; treat per NICE NG106.',
        patientPhrase: 'The heart is not pumping efficiently, so fluid backs up into the legs and lungs. Treatment improves symptoms and outlook.',
        ciksUrl: 'https://cks.nice.org.uk/topics/heart-failure-chronic/', caseLink: '../cases/heart-failure.html' },
      { id: 'renal', name: 'Renal (nephrotic) / hepatic', summary: 'Frothy urine / low albumin / chronic liver disease', baseline: 3, category: 'less-common',
        keyExam: 'Periorbital oedema (nephrotic), ascites (hepatic).', nextIx: 'Urine ACR/PCR, albumin, U&E, LFTs; treat cause.',
        patientPhrase: 'Low protein from the kidneys or liver lets fluid leak into the tissues. We test and treat the cause.',
        ciksUrl: 'https://cks.nice.org.uk/topics/' },

      { id: 'dvt', name: 'Deep vein thrombosis', summary: 'Unilateral hot tender calf, risk factors', baseline: 1, category: 'cant-miss',
        keyExam: 'Unilateral swelling >3cm, tenderness, warmth.', nextIx: '\u26A1 Wells + D-dimer/USS; anticoagulate per pathway. Exclude PE.',
        patientPhrase: 'A clot in the leg vein needs the urgent clot pathway today — and we check it has not travelled to the lungs.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng158', redFlagAction: '\u26A1 DVT pathway' },
      { id: 'cellulitis', name: 'Cellulitis', summary: 'Hot red tender + fever', baseline: 1, category: 'cant-miss',
        keyExam: 'Spreading erythema, warmth, fever.', nextIx: '\u26A1 Antibiotics; mark margins; admit if systemic.',
        patientPhrase: 'A skin infection of the leg — antibiotics treat it, urgently if you are unwell.',
        ciksUrl: 'https://cks.nice.org.uk/topics/cellulitis/', redFlagAction: '\u26A1 Antibiotics ± admit' },
    ],
    effects: {
      age: (v) => v >= 65 ? { heart_failure: +4, venous: +2 } : {},
      ccb: { drug: +20 },

      bilateral: { venous: +8, heart_failure: +6, drug: +4, renal: +4, dvt: -10, cellulitis: -6 },
      unilateral: { dvt: +12, cellulitis: +8, venous: -2 },

      breathless_orthopnoea: { heart_failure: +20 },
      frothy_urine_renal: { renal: +20 },
      liver_ascites: { renal: +12 },
      venous_skin: { venous: +18 },

      dvt_features: { dvt: +26 },
      cellulitis: { cellulitis: +26 },
      acute_breathless_chest: { heart_failure: +6, dvt: +6 },
    },
    askAbout: {
      venous: ['venous_skin', 'bilateral'],
      drug: ['ccb'],
      heart_failure: ['breathless_orthopnoea'],
      renal: ['frothy_urine_renal', 'liver_ascites'],
      dvt: ['dvt_features', 'unilateral'],
      cellulitis: ['cellulitis'],
    },
    sources: [
      { label: 'NICE NG158 — VTE', url: 'https://www.nice.org.uk/guidance/ng158' },
      { label: 'NICE CKS — Heart failure', url: 'https://cks.nice.org.uk/topics/heart-failure-chronic/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'ankle-swelling', label: 'Ankle swelling', triage: 'ankle-swelling-triage', dx: 'ankle-swelling-dx' }
  );
})();
