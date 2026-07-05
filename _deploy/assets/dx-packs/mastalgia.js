/* ============================================
   Diagnostic Tool pack — Mastalgia (breast pain)
   Shared-id triage + differential. NICE NG12 · CKS Breast pain.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 12, max: 90, step: 1 },

    { group: 'Pattern', id: 'cyclical', kind: 'check', label: 'Cyclical, bilateral, worse premenstrually' },
    { group: 'Pattern', id: 'noncyclical_focal', kind: 'check', label: 'Non-cyclical, localised to one area' },
    { group: 'Pattern', id: 'chest_wall', kind: 'check', label: 'Reproduced by pressing chest wall / movement (costochondritis)' },
    { group: 'Associated', id: 'mastitis', kind: 'check', label: 'Lactating + red, hot, tender + fever (mastitis/abscess)' },
    { group: 'Associated', id: 'cardiac', kind: 'check', label: 'Exertional / radiating left-sided pain (cardiac)' },

    { group: 'Red flags', id: 'lump', kind: 'check', label: 'Discrete lump' },
    { group: 'Red flags', id: 'skin_nipple', kind: 'check', label: 'Skin change / nipple retraction / bloody discharge' },
    { group: 'Red flags', id: 'age50_unilateral', kind: 'check', label: 'Age ≥50 with unexplained unilateral symptoms' },
  ];

  if (window.RGPTriage) RGPTriage.register('mastalgia-triage', {
    title: 'Breast pain — triage',
    subtitle: 'Tick features. Surfaces breast-cancer 2WW, mastitis/abscess and a cardiac mimic.',
    guideline: 'NICE NG12 · CKS',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Breast pain alone rarely signifies cancer. Examine; reassure cyclical/non-cyclical mastalgia; supportive bra, analgesia; review.',
    rules: [
      {
        id: 'breast_2ww', tier: 'cancer',
        label: 'Lump / skin or nipple change, or ≥50 with unexplained unilateral symptoms — breast 2WW',
        action: 'Breast 2WW (triple assessment).',
        source: 'NICE NG12 §1.5', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.lump || i.skin_nipple || i.age50_unilateral,
      },
      {
        id: 'cardiac', tier: 'urgent',
        label: 'Exertional / radiating pain — exclude cardiac',
        action: 'ECG ± troponin; treat as ?ACS if acute.',
        source: 'NICE CG95',
        when: i => i.cardiac,
      },
      {
        id: 'mastitis', tier: 'urgent',
        label: 'Mastitis / breast abscess',
        action: 'Continue feeding/expressing; antibiotics if not settling; USS + drainage if abscess.',
        source: 'CKS Mastitis',
        when: i => i.mastitis,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'Mastalgia — reassure & manage',
        action: 'Supportive bra, analgesia/topical NSAID; breast-pain diary; review.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE CKS — Breast pain', url: 'https://cks.nice.org.uk/topics/breast-pain-cyclical/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('mastalgia-dx', {
    title: 'Breast pain — differential',
    subtitle: 'The engine weights cyclical, non-cyclical and chest-wall causes and mastitis, and always surfaces breast cancer and a cardiac mimic.',
    guideline: 'NICE NG12 · CKS',
    patientPresenting: "My breast has been really painful, doctor — I'm worried it could be something serious.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'cyclical', name: 'Cyclical mastalgia', summary: 'Bilateral, premenstrual, hormonal', baseline: 11, category: 'common',
        keyExam: 'Diffuse bilateral tenderness; no lump.', nextIx: 'Reassure; supportive bra; analgesia; diary.',
        patientPhrase: 'Hormonal breast pain before periods is very common and harmless. Simple measures help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/breast-pain-cyclical/' },
      { id: 'noncyclical', name: 'Non-cyclical mastalgia', summary: 'Localised, unrelated to cycle', baseline: 6, category: 'common',
        keyExam: 'Focal tenderness; no lump.', nextIx: 'Examine; reassure; analgesia; review.',
        patientPhrase: 'Pain not linked to your cycle, usually from the breast tissue itself — typically benign.',
        ciksUrl: 'https://cks.nice.org.uk/topics/breast-pain-cyclical/' },
      { id: 'chest_wall', name: 'Chest-wall / costochondritis', summary: 'Reproduced by palpation/movement', baseline: 4, category: 'common',
        keyExam: 'Reproducible on chest-wall pressure.', nextIx: 'Reassure; NSAID; the breast itself is normal.',
        patientPhrase: 'The pain is coming from the chest wall, not the breast. Anti-inflammatories help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/breast-pain-cyclical/' },
      { id: 'mastitis', name: 'Mastitis / abscess', summary: 'Lactating, red hot tender, fever', baseline: 3, category: 'less-common',
        keyExam: 'Red tender segment ± fluctuance.', nextIx: 'Continue feeding; antibiotics; USS/drainage if abscess.',
        patientPhrase: 'An infection of the breast, common when breastfeeding. Antibiotics and continued feeding treat it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/mastitis-and-breast-abscess/' },

      { id: 'breast_cancer', name: 'Breast cancer', summary: 'Lump, skin/nipple change, ≥50 unilateral', baseline: 1, category: 'cant-miss',
        keyExam: 'Discrete lump, skin tethering, nipple change.', nextIx: '\u26A1 Breast 2WW — triple assessment (NICE NG12).',
        patientPhrase: 'A lump or skin/nipple change needs urgent specialist assessment to exclude cancer — most prove benign.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Breast 2WW' },
      { id: 'cardiac', name: 'Cardiac pain (mimic)', summary: 'Exertional / radiating left-sided pain', baseline: 1, category: 'cant-miss',
        keyExam: 'CV risk; recreate on exertion.', nextIx: '\u26A1 ECG ± troponin; treat as ?ACS if acute.',
        patientPhrase: 'Left-sided pain on exertion can come from the heart, so I will check that to be safe.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg95', redFlagAction: '\u26A1 ECG / troponin' },
    ],
    effects: {
      age: (v) => v >= 50 ? { breast_cancer: +4 } : (v < 40 ? { cyclical: +3 } : {}),
      cyclical: { cyclical: +22 },
      noncyclical_focal: { noncyclical: +18, breast_cancer: +2 },
      chest_wall: { chest_wall: +24 },
      mastitis: { mastitis: +26 },
      cardiac: { cardiac: +24 },

      lump: { breast_cancer: +24 },
      skin_nipple: { breast_cancer: +22 },
      age50_unilateral: { breast_cancer: +14 },
    },
    askAbout: {
      cyclical: ['cyclical'],
      noncyclical: ['noncyclical_focal'],
      chest_wall: ['chest_wall'],
      mastitis: ['mastitis'],
      breast_cancer: ['lump', 'skin_nipple', 'age50_unilateral'],
      cardiac: ['cardiac'],
    },
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE CKS — Breast pain', url: 'https://cks.nice.org.uk/topics/breast-pain-cyclical/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'mastalgia', label: 'Mastalgia', triage: 'mastalgia-triage', dx: 'mastalgia-dx' }
  );
})();
