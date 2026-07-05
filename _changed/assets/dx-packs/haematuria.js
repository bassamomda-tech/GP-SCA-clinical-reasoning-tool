/* ============================================
   Diagnostic Tool pack — Haematuria
   Shared-id triage + differential. NICE NG12 · CKS Haematuria.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'smoker', kind: 'check', label: 'Smoker / occupational dye exposure' },
    { group: 'Demographics & context', id: 'anticoag', kind: 'check', label: 'On anticoagulant (still needs investigation)' },

    { group: 'Type', id: 'visible', kind: 'check', label: 'Visible (macroscopic) haematuria' },
    { group: 'Type', id: 'nonvisible', kind: 'check', label: 'Persistent non-visible haematuria (dip)' },
    { group: 'Type', id: 'clots', kind: 'check', label: 'Clots / painless' },

    { group: 'Associated', id: 'dysuria_frequency', kind: 'check', label: 'Dysuria / frequency / urgency (UTI)' },
    { group: 'Associated', id: 'loin_colic', kind: 'check', label: 'Loin pain / renal colic' },
    { group: 'Associated', id: 'luts', kind: 'check', label: 'LUTS / enlarged prostate' },
    { group: 'Associated', id: 'proteinuria_systemic', kind: 'check', label: 'Proteinuria / oedema / hypertension / systemic illness (glomerular)' },
    { group: 'Associated', id: 'recent_exercise_menses', kind: 'check', label: 'Transient: vigorous exercise / menstrual contamination' },

    { group: 'Red flags', id: 'weight_loss', kind: 'check', label: 'Weight loss / mass' },
    { group: 'Vitals', id: 'sbp', kind: 'number', label: 'Systolic BP', unit: 'mmHg', step: 1 },
  ];

  if (window.RGPTriage) RGPTriage.register('haematuria-triage', {
    title: 'Haematuria — triage',
    subtitle: 'Tick features. Surfaces urological 2WW, nephrology and infection pathways (NICE NG12).',
    guideline: 'NICE NG12 · CKS Haematuria',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Exclude UTI/transient cause and repeat dip; persistent non-visible haematuria needs BP, eGFR and ACR; refer per age and type.',
    rules: [
      {
        id: 'clot_retention', tier: 'emergency',
        label: 'Heavy haematuria with clot retention / haemodynamic compromise',
        action: 'Same-day urology / admission — catheter + bladder washout.',
        source: 'CKS Haematuria',
        when: i => i.clots && (i.sbp != null && i.sbp < 100),
      },
      {
        id: 'visible_2ww', tier: 'cancer',
        label: 'Visible haematuria ≥45, or non-visible ≥60 with dysuria/raised WCC — urological 2WW',
        action: 'Urology 2WW (cystoscopy + upper-tract imaging).',
        patientPhrase: '"Blood in the urine at your age needs an urgent specialist look at the bladder and kidneys to be safe."',
        source: 'NICE NG12 §1.6', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => (i.visible && i.age != null && i.age >= 45) || (i.nonvisible && i.age != null && i.age >= 60 && i.dysuria_frequency),
      },
      {
        id: 'glomerular', tier: 'urgent',
        label: 'Glomerular pattern — haematuria + proteinuria / hypertension / declining eGFR',
        action: 'Nephrology referral; ACR, eGFR, BP, immunology.',
        source: 'NICE NG203',
        when: i => i.proteinuria_systemic,
      },
      {
        id: 'infection', tier: 'routine',
        label: 'Likely UTI / transient cause',
        action: 'Treat UTI and re-dip after treatment; exclude menstrual/exercise contamination; refer if persists.',
        source: 'CKS Haematuria',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE CKS — Haematuria', url: 'https://cks.nice.org.uk/topics/haematuria/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('haematuria-dx', {
    title: 'Haematuria — differential',
    subtitle: 'The engine weights UTI, stones and benign causes against glomerular disease, and always surfaces urological malignancy when its triggers fire.',
    guideline: 'NICE NG12 · CKS',
    patientPresenting: "I've seen blood in my urine, doctor — it gave me a real fright.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'uti', name: 'Urinary tract infection', summary: 'Dysuria, frequency, urgency, often non-visible blood', baseline: 10, category: 'common',
        keyExam: 'Suprapubic tenderness; urine dip nitrites/leucocytes.', nextIx: 'Urine culture; treat; re-dip after treatment to ensure resolution.',
        patientPhrase: 'An infection is the commonest cause of blood in the urine. We treat it and re-check the urine afterwards.',
        ciksUrl: 'https://cks.nice.org.uk/topics/lower-urinary-tract-infection/' },
      { id: 'stones', name: 'Renal / bladder stones', summary: 'Loin-to-groin colic with haematuria', baseline: 6, category: 'common',
        keyExam: 'Loin tenderness, restless in pain.', nextIx: 'CT KUB; analgesia; urology if obstruction/infection.',
        patientPhrase: 'A stone in the urinary tract can cause pain and bleeding. A scan locates it and guides treatment.',
        ciksUrl: 'https://cks.nice.org.uk/topics/renal-or-ureteric-colic-acute/' },
      { id: 'bph', name: 'BPH / prostate', summary: 'Older man, LUTS, enlarged prostate', baseline: 4, category: 'common',
        keyExam: 'Enlarged smooth prostate on PR.', nextIx: 'Still investigate per 2WW criteria; PSA after counselling; manage BPH.',
        patientPhrase: 'An enlarged prostate can cause bleeding, but we still rule out other causes with the right tests.',
        ciksUrl: 'https://cks.nice.org.uk/topics/luts-in-men/' },
      { id: 'glomerular', name: 'Glomerular disease', summary: 'Haematuria + proteinuria ± hypertension / oedema', baseline: 3, category: 'less-common',
        keyExam: 'Hypertension, oedema.', nextIx: 'ACR, eGFR, immunology; nephrology referral.',
        patientPhrase: 'The kidney filters may be leaking blood and protein. Kidney specialist tests find the cause.',
        ciksUrl: 'https://cks.nice.org.uk/topics/haematuria/' },
      { id: 'transient', name: 'Transient / benign', summary: 'Exercise, menstrual contamination, anticoagulant', baseline: 3, category: 'less-common',
        keyExam: 'History; repeat dip negative.', nextIx: 'Repeat dip when not menstruating / after rest; anticoagulant alone does not explain it — still investigate.',
        patientPhrase: 'Sometimes blood appears briefly from exercise or contamination — we repeat the test to confirm it has cleared.',
        ciksUrl: 'https://cks.nice.org.uk/topics/haematuria/' },

      { id: 'malignancy', name: 'Urological malignancy (bladder / renal)', summary: 'Painless visible haematuria, ≥45, smoker', baseline: 1, category: 'cant-miss',
        keyExam: 'Often normal; flank mass rarely.', nextIx: '\u26A1 Urology 2WW — cystoscopy + upper-tract imaging (NICE NG12).',
        patientPhrase: 'Painless blood in the urine at your age needs an urgent specialist look to rule out cancer — most are clear.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Urology 2WW' },
    ],
    effects: {
      age: (v) => v >= 45 ? { malignancy: +8, bph: +3, uti: -2 } : (v < 40 ? { glomerular: +3, uti: +2, malignancy: -3 } : {}),
      smoker: { malignancy: +10 },

      visible: { malignancy: +10, stones: +4 },
      nonvisible: { glomerular: +6, uti: +4 },
      clots: { malignancy: +12, bph: +4 },

      dysuria_frequency: { uti: +20 },
      loin_colic: { stones: +24 },
      luts: { bph: +18 },
      proteinuria_systemic: { glomerular: +24 },
      recent_exercise_menses: { transient: +20 },

      weight_loss: { malignancy: +14 },
    },
    askAbout: {
      uti: ['dysuria_frequency'],
      stones: ['loin_colic'],
      bph: ['luts'],
      glomerular: ['proteinuria_systemic'],
      transient: ['recent_exercise_menses'],
      malignancy: ['visible', 'smoker', 'age'],
    },
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE CKS — Haematuria', url: 'https://cks.nice.org.uk/topics/haematuria/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'haematuria', label: 'Haematuria', triage: 'haematuria-triage', dx: 'haematuria-dx' }
  );
})();
