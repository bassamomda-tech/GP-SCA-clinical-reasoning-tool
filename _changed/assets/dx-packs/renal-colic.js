/* ============================================
   Diagnostic Tool pack — Renal / Ureteric Colic
   Shared-id triage + differential. NICE NG118 · CKS Renal colic.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'prev_stones', kind: 'check', label: 'Previous stones' },
    { group: 'Demographics & context', id: 'single_kidney', kind: 'check', label: 'Single / transplant kidney' },

    { group: 'Pain pattern', id: 'loin_groin', kind: 'check', label: 'Loin-to-groin colicky pain, cannot get comfortable' },
    { group: 'Pain pattern', id: 'haematuria', kind: 'check', label: 'Visible / non-visible haematuria' },
    { group: 'Pain pattern', id: 'nausea', kind: 'check', label: 'Nausea / vomiting' },

    { group: 'Infection / obstruction', id: 'fever', kind: 'check', label: 'Fever / rigors / systemically unwell' },
    { group: 'Infection / obstruction', id: 'anuria', kind: 'check', label: 'Anuria / known solitary kidney obstructed' },

    { group: 'Mimic clues', id: 'aaa_features', kind: 'check', label: 'Age >60, tearing pain, pulsatile mass, collapse (AAA)' },
    { group: 'Mimic clues', id: 'gynae', kind: 'check', label: 'Female + pregnancy possible / pelvic pain (ectopic/ovarian)' },
    { group: 'Mimic clues', id: 'urinary_sx', kind: 'check', label: 'Dysuria / frequency only (UTI/pyelonephritis)' },
    { group: 'Mimic clues', id: 'msk', kind: 'check', label: 'Positional / reproducible musculoskeletal pain' },

    { group: 'Vitals', id: 'sbp', kind: 'number', label: 'Systolic BP', unit: 'mmHg', step: 1 },
  ];

  if (window.RGPTriage) RGPTriage.register('renal-colic-triage', {
    title: 'Renal colic — triage',
    subtitle: 'Tick features. Surfaces infected obstruction, AAA and the imaging pathway (NICE NG118).',
    guideline: 'NICE NG118 · CKS',
    inputs: INPUTS,
    defaultMessage: 'No emergency rule fired. Give an NSAID (first-line analgesia), arrange urgent low-dose CT KUB (within 24h), urine dip, U&E; most stones <5 mm pass spontaneously.',
    rules: [
      {
        id: 'aaa', tier: 'emergency',
        label: 'Possible AAA mimicking renal colic (≥60, first presentation)',
        action: 'Call 999 — exclude ruptured AAA before labelling renal colic.',
        patientPhrase: '"In your age group I must rule out a problem with the main blood vessel first — I am arranging emergency assessment."',
        source: 'NICE NG118 / NG156',
        when: i => i.aaa_features || (i.age != null && i.age >= 60 && !i.prev_stones && (i.sbp != null && i.sbp < 100)),
      },
      {
        id: 'infected_obstruction', tier: 'emergency',
        label: 'Obstructed, infected kidney — fever + stone, or anuria/solitary kidney',
        action: 'Same-day urology — emergency decompression (nephrostomy/stent) + antibiotics.',
        patientPhrase: '"A blocked, infected kidney is an emergency — you need urgent hospital treatment today."',
        source: 'NICE NG118', sourceUrl: 'https://www.nice.org.uk/guidance/ng118',
        when: i => (i.fever && (i.loin_groin || i.haematuria)) || i.anuria || (i.single_kidney && i.loin_groin),
      },
      {
        id: 'ectopic', tier: 'urgent',
        label: 'Female of reproductive age — exclude ectopic pregnancy',
        action: 'Urgent pregnancy test ± early pregnancy unit.',
        source: 'CKS',
        when: i => i.gynae,
      },
      {
        id: 'colic', tier: 'urgent',
        label: 'Likely renal colic',
        action: 'NSAID analgesia; urgent CT KUB <24h; U&E, urine dip; urology if stone >5 mm or not passing.',
        source: 'NICE NG118',
        when: i => i.loin_groin,
      },
      {
        id: 'other', tier: 'routine',
        label: 'Atypical — reassess the alternative',
        action: 'Consider UTI/pyelonephritis, MSK, gynae; investigate accordingly.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG118 — Renal & ureteric stones', url: 'https://www.nice.org.uk/guidance/ng118' },
      { label: 'NICE CKS — Renal/ureteric colic', url: 'https://cks.nice.org.uk/topics/renal-or-ureteric-colic-acute/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('renal-colic-dx', {
    title: 'Loin pain — differential',
    subtitle: 'The engine weights ureteric stone against its important mimics, and always surfaces AAA and an obstructed infected kidney when triggered.',
    guideline: 'NICE NG118 · CKS',
    patientPresenting: "I've got this agonising pain in my side that comes in waves, doctor — I can't keep still.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'stone', name: 'Ureteric / renal stone', summary: 'Loin-to-groin colic + haematuria, restless', baseline: 12, category: 'common',
        keyExam: 'Loin tenderness, restless, often non-visible haematuria.', nextIx: 'Low-dose CT KUB <24h; NSAID; U&E; manage by size/position.',
        patientPhrase: 'A stone is passing down the tube from the kidney. Pain relief plus a scan guide whether it will pass or needs help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/renal-or-ureteric-colic-acute/' },
      { id: 'pyelonephritis', name: 'Pyelonephritis / UTI', summary: 'Loin pain + fever + urinary symptoms', baseline: 5, category: 'common',
        keyExam: 'Renal-angle tenderness, fever.', nextIx: 'Urine culture; antibiotics; admit if septic / obstructed.',
        patientPhrase: 'A kidney infection causes loin pain with fever. Antibiotics treat it, urgently if you are very unwell.',
        ciksUrl: 'https://cks.nice.org.uk/topics/pyelonephritis-acute/' },
      { id: 'msk', name: 'Musculoskeletal loin pain', summary: 'Positional, reproducible, no haematuria', baseline: 4, category: 'common',
        keyExam: 'Reproducible on movement/palpation.', nextIx: 'Clinical; analgesia; no imaging if clearly MSK.',
        patientPhrase: 'This looks like a muscular cause rather than a stone — it usually settles with simple measures.',
        ciksUrl: 'https://cks.nice.org.uk/topics/renal-or-ureteric-colic-acute/' },
      { id: 'gynae', name: 'Gynaecological (ovarian / ectopic)', summary: 'Female, pelvic pain, pregnancy possible', baseline: 2, category: 'less-common',
        keyExam: 'Pelvic tenderness; pregnancy test.', nextIx: 'Pregnancy test, pelvic USS; exclude ectopic.',
        patientPhrase: 'In women, the ovary or an early pregnancy can cause this pain — a test and scan help tell them apart.',
        ciksUrl: 'https://cks.nice.org.uk/topics/ectopic-pregnancy/' },

      { id: 'aaa', name: 'Abdominal aortic aneurysm', summary: '≥60, tearing pain, pulsatile mass, collapse', baseline: 1, category: 'cant-miss',
        keyExam: 'Pulsatile expansile mass, hypotension.', nextIx: '\u26A1 999 — first presentation of "renal colic" ≥60 is AAA until excluded.',
        patientPhrase: 'In your age group, sudden severe pain can come from the main blood vessel — that must be ruled out immediately.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng156', redFlagAction: '\u26A1 999 / urgent imaging' },
      { id: 'obstructed_infected', name: 'Obstructed infected kidney', summary: 'Stone + fever / anuria / solitary kidney', baseline: 1, category: 'cant-miss',
        keyExam: 'Fever, septic, loin tenderness.', nextIx: '\u26A1 Same-day urology — decompression + antibiotics.',
        patientPhrase: 'A blocked, infected kidney is an emergency needing urgent drainage and antibiotics today.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng118', redFlagAction: '\u26A1 Same-day urology' },
    ],
    effects: {
      age: (v) => v >= 60 ? { aaa: +6 } : (v < 50 ? { stone: +3 } : {}),
      prev_stones: { stone: +10 },
      single_kidney: { obstructed_infected: +6 },

      loin_groin: { stone: +18 },
      haematuria: { stone: +12 },
      nausea: { stone: +4 },

      fever: { pyelonephritis: +18, obstructed_infected: +12 },
      anuria: { obstructed_infected: +20 },

      aaa_features: { aaa: +30 },
      gynae: { gynae: +22 },
      urinary_sx: { pyelonephritis: +12 },
      msk: { msk: +22, stone: -6 },
    },
    askAbout: {
      stone: ['loin_groin', 'haematuria', 'prev_stones'],
      pyelonephritis: ['fever', 'urinary_sx'],
      msk: ['msk'],
      gynae: ['gynae'],
      aaa: ['aaa_features', 'age'],
      obstructed_infected: ['fever', 'anuria'],
    },
    sources: [
      { label: 'NICE NG118 — Renal & ureteric stones', url: 'https://www.nice.org.uk/guidance/ng118' },
      { label: 'NICE NG156 — Abdominal aortic aneurysm', url: 'https://www.nice.org.uk/guidance/ng156' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'renal-colic', label: 'Renal colic', triage: 'renal-colic-triage', dx: 'renal-colic-dx' }
  );
})();
