/* ============================================
   Diagnostic Tool pack — Acute Kidney Injury
   Shared-id triage + differential (pre/intrinsic/post). NICE NG148.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'ckd', kind: 'check', label: 'Background CKD / single kidney' },
    { group: 'Demographics & context', id: 'nephrotoxic', kind: 'check', label: 'ACEi/ARB / NSAID / diuretic / contrast / gentamicin' },

    { group: 'Pre-renal', id: 'volume_depletion', kind: 'check', label: 'D&V / sepsis / haemorrhage / poor intake (hypovolaemia)' },
    { group: 'Pre-renal', id: 'cardiac_hepatic', kind: 'check', label: 'Heart failure / cirrhosis (reduced perfusion)' },

    { group: 'Post-renal', id: 'obstruction', kind: 'check', label: 'Anuria / palpable bladder / LUTS / known obstruction' },

    { group: 'Intrinsic', id: 'glomerular', kind: 'check', label: 'Haematuria + proteinuria + systemic (GN/vasculitis)' },
    { group: 'Intrinsic', id: 'rhabdo', kind: 'check', label: 'Crush / immobility / very high CK (rhabdomyolysis)' },
    { group: 'Intrinsic', id: 'interstitial', kind: 'check', label: 'New drug + rash/eosinophilia (interstitial nephritis)' },

    { group: 'Bloods', id: 'creat_rise', kind: 'check', label: 'Creatinine rise ≥26 µmol/L in 48h or ≥1.5× baseline' },
    { group: 'Bloods', id: 'oliguria', kind: 'check', label: 'Oliguria (<0.5 ml/kg/h)' },

    { group: 'Red flags', id: 'hyperk_overload', kind: 'check', label: 'Hyperkalaemia / acidosis / fluid overload / uraemia' },
  ];

  if (window.RGPTriage) RGPTriage.register('aki-triage', {
    title: 'Acute kidney injury — triage',
    subtitle: 'Tick features. Surfaces emergency complications, obstruction and the pre/intrinsic/post workup (NICE NG148).',
    guideline: 'NICE NG148',
    inputs: INPUTS,
    defaultMessage: 'No emergency rule fired. Assess volume status, review/stop nephrotoxics (sick-day rules), dip urine, bladder scan, send U&E + bicarbonate; identify pre-renal vs intrinsic vs post-renal.',
    rules: [
      {
        id: 'complications', tier: 'emergency',
        label: 'AKI with hyperkalaemia / acidosis / fluid overload / uraemia',
        action: 'Same-day admission — ECG, treat hyperkalaemia, ? dialysis.',
        patientPhrase: '"Your kidneys have shut down enough to be dangerous — you need hospital treatment today."',
        source: 'NICE NG148', sourceUrl: 'https://www.nice.org.uk/guidance/ng148',
        when: i => i.hyperk_overload,
      },
      {
        id: 'obstruction', tier: 'urgent',
        label: 'Obstruction (anuria / palpable bladder)',
        action: 'Catheterise / urgent renal USS; relieve obstruction same day.',
        source: 'NICE NG148',
        when: i => i.obstruction,
      },
      {
        id: 'intrinsic', tier: 'urgent',
        label: 'Possible intrinsic AKI (GN / vasculitis / rhabdo / interstitial)',
        action: 'Urgent nephrology; urine dip, CK, immunology; stop culprit drug.',
        source: 'NICE NG148',
        when: i => i.glomerular || i.rhabdo || i.interstitial,
      },
      {
        id: 'prerenal', tier: 'urgent',
        label: 'AKI present — treat reversible cause',
        action: 'Volume resuscitation if hypovolaemic; stop nephrotoxics; recheck U&E within 24–48h.',
        source: 'NICE NG148',
        when: i => i.creat_rise || i.oliguria || i.volume_depletion,
      },
      {
        id: 'monitor', tier: 'routine',
        label: 'At-risk / mild — monitor',
        action: 'Sick-day rules, medication review, recheck renal function.',
        source: 'NICE NG148',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG148 — Acute kidney injury', url: 'https://www.nice.org.uk/guidance/ng148' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('aki-dx', {
    title: 'AKI — differential (pre / intrinsic / post)',
    subtitle: 'The classic framework. The engine weights pre-renal, intrinsic and post-renal causes from the history and urine, and always surfaces GN/vasculitis and rhabdomyolysis when triggered.',
    guideline: 'NICE NG148',
    patientPresenting: "My bloods showed my kidney function has suddenly dropped, doctor.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'prerenal', name: 'Pre-renal (hypoperfusion)', summary: 'Volume depletion, sepsis, cardiac/hepatic failure, NSAID/ACEi', baseline: 11, category: 'common',
        keyExam: 'Postural hypotension, dry/overloaded depending on cause.', nextIx: 'Assess volume; fluids if depleted; stop nephrotoxics; urine usually concentrated, bland.',
        patientPhrase: 'The kidneys are not getting enough blood flow. Restoring fluid and stopping certain tablets usually recovers function.',
        ciksUrl: 'https://cks.nice.org.uk/topics/acute-kidney-injury/' },
      { id: 'atn', name: 'Acute tubular necrosis', summary: 'Prolonged pre-renal insult / nephrotoxins / contrast', baseline: 5, category: 'common',
        keyExam: 'History of sustained hypotension / toxin.', nextIx: 'Supportive; remove insult; muddy-brown casts; recovery over days–weeks.',
        patientPhrase: 'A sustained lack of blood flow or a toxin has injured the kidney tubules. They usually recover with support.',
        ciksUrl: 'https://cks.nice.org.uk/topics/acute-kidney-injury/' },
      { id: 'postrenal', name: 'Post-renal (obstruction)', summary: 'Anuria, palpable bladder, stones, prostate', baseline: 5, category: 'common',
        keyExam: 'Palpable bladder, enlarged prostate.', nextIx: 'Bladder scan, renal USS; catheter / relieve obstruction.',
        patientPhrase: 'A blockage is backing pressure up to the kidneys. Relieving it lets them recover.',
        ciksUrl: 'https://cks.nice.org.uk/topics/acute-kidney-injury/' },
      { id: 'interstitial', name: 'Acute interstitial nephritis', summary: 'New drug + rash/fever/eosinophilia', baseline: 2, category: 'less-common',
        keyExam: 'Rash, fever.', nextIx: 'Stop culprit drug; urine white cells; nephrology ± biopsy.',
        patientPhrase: 'A drug reaction has inflamed the kidney. Stopping it usually allows recovery.',
        ciksUrl: 'https://cks.nice.org.uk/topics/acute-kidney-injury/' },

      { id: 'gn_vasculitis', name: 'Glomerulonephritis / vasculitis', summary: 'Haematuria + proteinuria + systemic features', baseline: 1, category: 'cant-miss',
        keyExam: 'Rash, arthralgia, haemoptysis, oedema.', nextIx: '\u26A1 Urgent nephrology — urine dip, immunology (ANCA, anti-GBM, complement), biopsy.',
        patientPhrase: 'Inflammation of the kidney filters can progress fast — urgent specialist tests protect the kidneys.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng148', redFlagAction: '\u26A1 Urgent nephrology' },
      { id: 'rhabdo', name: 'Rhabdomyolysis', summary: 'Crush / immobility / statin, very high CK, dark urine', baseline: 1, category: 'cant-miss',
        keyExam: 'Muscle tenderness, dark urine.', nextIx: '\u26A1 CK, U&E, urine myoglobin; aggressive IV fluids; admit.',
        patientPhrase: 'Breakdown of muscle is releasing substances that injure the kidneys — that needs urgent fluids in hospital.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng148', redFlagAction: '\u26A1 IV fluids + admit' },
    ],
    effects: {
      ckd: { prerenal: +2 },
      nephrotoxic: { prerenal: +8, atn: +6, interstitial: +6 },

      volume_depletion: { prerenal: +22, atn: +6 },
      cardiac_hepatic: { prerenal: +14 },
      obstruction: { postrenal: +26 },

      glomerular: { gn_vasculitis: +24 },
      rhabdo: { rhabdo: +26 },
      interstitial: { interstitial: +22 },

      creat_rise: { prerenal: +2 },
      oliguria: { prerenal: +4, postrenal: +4, atn: +4 },
      hyperk_overload: { atn: +4 },
    },
    askAbout: {
      prerenal: ['volume_depletion', 'cardiac_hepatic'],
      atn: ['nephrotoxic'],
      postrenal: ['obstruction'],
      interstitial: ['interstitial'],
      gn_vasculitis: ['glomerular'],
      rhabdo: ['rhabdo'],
    },
    sources: [
      { label: 'NICE NG148 — Acute kidney injury', url: 'https://www.nice.org.uk/guidance/ng148' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'aki', label: 'Acute kidney injury', triage: 'aki-triage', dx: 'aki-dx' }
  );
})();
