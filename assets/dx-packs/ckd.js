/* ============================================
   Diagnostic Tool pack — Chronic Kidney Disease
   Shared-id triage + differential (cause + referral). NICE NG203.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'diabetes', kind: 'check', label: 'Diabetes' },
    { group: 'Demographics & context', id: 'hypertension', kind: 'check', label: 'Hypertension' },
    { group: 'Demographics & context', id: 'nephrotoxic', kind: 'check', label: 'NSAID / ACEi-ARB / lithium / other nephrotoxic' },
    { group: 'Demographics & context', id: 'fh_renal', kind: 'check', label: 'FH renal disease / polycystic kidneys' },

    { group: 'Bloods / urine', id: 'egfr', kind: 'number', label: 'eGFR', unit: 'ml/min/1.73m²', step: 1 },
    { group: 'Bloods / urine', id: 'acr', kind: 'number', label: 'Urine ACR', unit: 'mg/mmol', step: 0.1 },
    { group: 'Bloods / urine', id: 'haematuria', kind: 'check', label: 'Persistent non-visible haematuria' },
    { group: 'Bloods / urine', id: 'rapid_decline', kind: 'check', label: 'Rapid eGFR decline (>15/yr or sustained drop)' },

    { group: 'Cause clues', id: 'diabetic_retinopathy', kind: 'check', label: 'Diabetic + retinopathy + proteinuria' },
    { group: 'Cause clues', id: 'obstruction', kind: 'check', label: 'LUTS / palpable bladder / obstruction signs' },
    { group: 'Cause clues', id: 'systemic', kind: 'check', label: 'Systemic illness (rash, arthralgia, haemoptysis — ? GN/vasculitis)' },

    { group: 'Red flags', id: 'hyperk', kind: 'check', label: 'Hyperkalaemia / acidosis / fluid overload' },
    { group: 'Red flags', id: 'aki_on_ckd', kind: 'check', label: 'Acute drop suggesting AKI on CKD' },
  ];

  if (window.RGPTriage) RGPTriage.register('ckd-triage', {
    title: 'CKD — triage & referral',
    subtitle: 'Enter eGFR/ACR. Surfaces AKI, nephrology-referral and reversible-factor pathways (NICE NG203).',
    guideline: 'NICE NG203',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Confirm CKD (two eGFR ≥90 days apart), stage by G/A (eGFR + ACR), optimise BP + ACEi/ARB if ACR raised, manage CV risk, and recheck. Refer per NG203 criteria.',
    rules: [
      {
        id: 'urgent_metabolic', tier: 'emergency',
        label: 'Hyperkalaemia / acidosis / fluid overload, or AKI on CKD',
        action: 'Same-day assessment — bloods, hold nephrotoxics, treat hyperkalaemia; admit if severe.',
        patientPhrase: '"Your kidney bloods need urgent attention today to keep you safe."',
        source: 'NICE NG203 / AKI',
        when: i => i.hyperk || i.aki_on_ckd,
      },
      {
        id: 'refer', tier: 'urgent',
        label: 'Nephrology referral criteria — eGFR <30, ACR ≥70, rapid decline, haematuria+proteinuria, or suspected GN',
        action: 'Refer nephrology; ACR, urine dip, renal USS; review meds.',
        source: 'NICE NG203', sourceUrl: 'https://www.nice.org.uk/guidance/ng203',
        when: i => (i.egfr != null && i.egfr < 30) || (i.acr != null && i.acr >= 70) || i.rapid_decline || (i.haematuria && i.acr != null && i.acr >= 3) || i.systemic,
      },
      {
        id: 'obstruction', tier: 'urgent',
        label: 'Possible obstructive cause',
        action: 'Renal tract USS; treat obstruction (catheter / urology).',
        source: 'NICE NG203',
        when: i => i.obstruction,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'CKD — primary-care management',
        action: 'BP target + ACEi/ARB if ACR raised; SGLT2i where indicated; CV risk; annual review; avoid nephrotoxics.',
        source: 'NICE NG203',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG203 — Chronic kidney disease', url: 'https://www.nice.org.uk/guidance/ng203' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('ckd-dx', {
    title: 'CKD — differential (cause)',
    subtitle: 'Once CKD is confirmed, the cause guides management. The engine weights diabetic, hypertensive, obstructive and other causes, and surfaces glomerulonephritis/vasculitis and AKI-on-CKD when triggered.',
    guideline: 'NICE NG203',
    patientPresenting: "My blood test showed my kidney function is reduced, doctor — what does that mean for me?",
    inputs: INPUTS,
    diagnoses: [
      { id: 'diabetic', name: 'Diabetic kidney disease', summary: 'Diabetes + albuminuria ± retinopathy', baseline: 10, category: 'common',
        keyExam: 'Retinopathy, peripheral neuropathy, oedema.', nextIx: 'ACR, optimise glucose + BP; ACEi/ARB + SGLT2i; annual review.',
        patientPhrase: 'Diabetes has affected the kidney filters. Tight control of sugar and blood pressure, plus protective tablets, slows it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/chronic-kidney-disease/', caseLink: '../cases/ckd.html' },
      { id: 'hypertensive', name: 'Hypertensive nephrosclerosis', summary: 'Long-standing hypertension, low-grade proteinuria', baseline: 8, category: 'common',
        keyExam: 'Hypertensive changes, LVH.', nextIx: 'BP control (ACEi/ARB if ACR raised); CV risk; monitor eGFR/ACR.',
        patientPhrase: 'High blood pressure over years has strained the kidneys. Controlling it protects them.',
        ciksUrl: 'https://cks.nice.org.uk/topics/chronic-kidney-disease/' },
      { id: 'obstructive', name: 'Obstructive / urological', summary: 'LUTS, retention, stones, prostate enlargement', baseline: 4, category: 'common',
        keyExam: 'Palpable bladder, enlarged prostate.', nextIx: 'Renal USS; relieve obstruction; urology.',
        patientPhrase: 'A blockage in the urinary system is backing up pressure on the kidneys. Relieving it helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/chronic-kidney-disease/' },
      { id: 'drug', name: 'Drug-induced / interstitial', summary: 'NSAID, lithium, PPI; chronic interstitial nephritis', baseline: 3, category: 'less-common',
        keyExam: 'Medication review.', nextIx: 'Stop nephrotoxics; reassess eGFR.',
        patientPhrase: 'A medication may be harming the kidneys. Stopping it can stabilise function.',
        ciksUrl: 'https://cks.nice.org.uk/topics/chronic-kidney-disease/' },
      { id: 'pkd', name: 'Polycystic / inherited kidney disease', summary: 'FH, cysts, hypertension young', baseline: 2, category: 'less-common',
        keyExam: 'Palpable kidneys, hypertension.', nextIx: 'Renal USS; FH; nephrology / genetics.',
        patientPhrase: 'An inherited kidney condition may be the cause. We confirm with a scan and involve a specialist.',
        ciksUrl: 'https://cks.nice.org.uk/topics/chronic-kidney-disease/' },

      { id: 'gn_vasculitis', name: 'Glomerulonephritis / vasculitis', summary: 'Haematuria + proteinuria + systemic features, declining eGFR', baseline: 1, category: 'cant-miss',
        keyExam: 'Rash, arthralgia, haemoptysis, oedema.', nextIx: '\u26A1 Urgent nephrology — urine dip, ACR, immunology (ANCA, complement), consider biopsy.',
        patientPhrase: 'Inflammation of the kidney filters can move fast — that needs urgent specialist assessment to protect the kidneys.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng203', redFlagAction: '\u26A1 Urgent nephrology' },
      { id: 'aki_on_ckd', name: 'AKI on CKD', summary: 'Acute deterioration on background CKD', baseline: 1, category: 'cant-miss',
        keyExam: 'Volume status, drug chart, obstruction.', nextIx: '\u26A1 Same-day bloods, hold nephrotoxics, treat cause; admit if severe / hyperkalaemic.',
        patientPhrase: 'Your kidney function has dropped suddenly on top of the long-term change — that needs urgent attention today.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng203', redFlagAction: '\u26A1 Same-day assessment' },
    ],
    effects: {
      diabetes: { diabetic: +18 },
      hypertension: { hypertensive: +14, diabetic: +2 },
      nephrotoxic: { drug: +18 },
      fh_renal: { pkd: +18 },

      egfr: (v) => v != null && v < 30 ? { gn_vasculitis: +2, aki_on_ckd: +2 } : {},
      acr: (v) => v == null ? {} : (v >= 70 ? { diabetic: +6, gn_vasculitis: +6 } : (v >= 3 ? { diabetic: +3, hypertensive: +2 } : {})),
      haematuria: { gn_vasculitis: +14 },
      rapid_decline: { gn_vasculitis: +12, aki_on_ckd: +8 },

      diabetic_retinopathy: { diabetic: +16 },
      obstruction: { obstructive: +22 },
      systemic: { gn_vasculitis: +20 },

      hyperk: { aki_on_ckd: +12 },
      aki_on_ckd: { aki_on_ckd: +24 },
    },
    askAbout: {
      diabetic: ['diabetes', 'diabetic_retinopathy', 'acr'],
      hypertensive: ['hypertension'],
      obstructive: ['obstruction'],
      drug: ['nephrotoxic'],
      pkd: ['fh_renal'],
      gn_vasculitis: ['haematuria', 'systemic', 'rapid_decline'],
      aki_on_ckd: ['aki_on_ckd', 'hyperk'],
    },
    sources: [
      { label: 'NICE NG203 — Chronic kidney disease', url: 'https://www.nice.org.uk/guidance/ng203' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'ckd', label: 'Chronic kidney disease', triage: 'ckd-triage', dx: 'ckd-dx' }
  );
})();
