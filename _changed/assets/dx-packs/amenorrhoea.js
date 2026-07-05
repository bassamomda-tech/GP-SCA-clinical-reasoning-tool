/* ============================================
   Diagnostic Tool pack — Amenorrhoea
   Shared-id triage + differential (primary & secondary). CKS Amenorrhoea.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 10, max: 60, step: 1 },
    { group: 'Type', id: 'primary', kind: 'check', label: 'Primary (never menstruated)' },
    { group: 'Type', id: 'secondary', kind: 'check', label: 'Secondary (periods stopped ≥3–6 months)' },

    { group: 'Always exclude', id: 'pregnant', kind: 'check', label: 'Pregnant / breastfeeding (commonest cause)' },

    { group: 'Cause clues', id: 'pcos_features', kind: 'check', label: 'Hirsutism / acne / obesity (PCOS)' },
    { group: 'Cause clues', id: 'low_weight_stress', kind: 'check', label: 'Low BMI / excessive exercise / stress (hypothalamic)' },
    { group: 'Cause clues', id: 'galactorrhoea', kind: 'check', label: 'Galactorrhoea / visual fields (prolactin)' },
    { group: 'Cause clues', id: 'thyroid_sx', kind: 'check', label: 'Thyroid symptoms' },
    { group: 'Cause clues', id: 'vasomotor_poi', kind: 'check', label: 'Flushes / night sweats <40 (premature ovarian insufficiency)' },
    { group: 'Cause clues', id: 'short_stature_turner', kind: 'check', label: 'Primary + short stature / absent secondary sexual characteristics' },
    { group: 'Cause clues', id: 'outflow', kind: 'check', label: 'Cyclical pain, no bleeding, normal secondary characteristics (outflow obstruction)' },
    { group: 'Cause clues', id: 'uterine_surgery', kind: 'check', label: 'After D&C / endometritis (Asherman\u2019s)' },
  ];

  if (window.RGPTriage) RGPTriage.register('amenorrhoea-triage', {
    title: 'Amenorrhoea — triage',
    subtitle: 'Tick features. Always exclude pregnancy; surfaces prolactinoma, POI and outflow obstruction.',
    guideline: 'CKS Amenorrhoea',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Pregnancy test first. Secondary: FSH/LH, oestradiol, prolactin, TFT, testosterone. Primary: assess puberty/secondary sexual characteristics; refer if delayed.',
    rules: [
      {
        id: 'prolactinoma', tier: 'urgent',
        label: 'Galactorrhoea + headache / visual field loss — ? prolactinoma',
        action: 'Prolactin; pituitary MRI + endocrine if high / visual symptoms.',
        source: 'CKS',
        when: i => i.galactorrhoea,
      },
      {
        id: 'poi', tier: 'urgent',
        label: 'Premature ovarian insufficiency (<40, raised FSH / vasomotor)',
        action: 'FSH ×2 (4 weeks apart); refer; offer HRT for bone/CV protection.',
        source: 'NICE NG23',
        when: i => i.vasomotor_poi || (i.secondary && i.age != null && i.age < 40 && i.thyroid_sx === undefined && false),
      },
      {
        id: 'outflow_turner', tier: 'urgent',
        label: 'Primary with structural / genetic features (outflow obstruction / Turner\u2019s)',
        action: 'Examine; pelvic USS; karyotype; gynae/endocrine referral.',
        source: 'CKS',
        when: i => i.outflow || i.short_stature_turner,
      },
      {
        id: 'assess', tier: 'routine',
        label: 'Amenorrhoea — investigate cause',
        action: 'Pregnancy test; hormone profile; manage PCOS / hypothalamic / thyroid; restore cycle / protect bone.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Amenorrhoea', url: 'https://cks.nice.org.uk/topics/amenorrhoea/' },
      { label: 'NICE NG23 — Menopause (POI)', url: 'https://www.nice.org.uk/guidance/ng23' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('amenorrhoea-dx', {
    title: 'Amenorrhoea — differential',
    subtitle: 'The engine weights pregnancy, PCOS, hypothalamic, prolactin, thyroid and POI causes, and the structural causes (outflow obstruction, Turner\u2019s, Asherman\u2019s) in primary/post-surgical cases.',
    guideline: 'CKS Amenorrhoea',
    patientPresenting: "My periods have stopped completely, doctor, and I'm not pregnant.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'pregnancy', name: 'Pregnancy', summary: 'Commonest cause of secondary amenorrhoea', baseline: 9, category: 'common',
        keyExam: 'Pregnancy signs.', nextIx: 'Pregnancy test — always first.',
        patientPhrase: 'The most important first step is a pregnancy test, as that is the commonest reason periods stop.',
        ciksUrl: 'https://cks.nice.org.uk/topics/amenorrhoea/' },
      { id: 'pcos', name: 'PCOS', summary: 'Hyperandrogenism, obesity, oligo/amenorrhoea', baseline: 8, category: 'common',
        keyExam: 'Acne, hirsutism, BMI.', nextIx: 'Testosterone/SHBG, LH/FSH, USS; metabolic screen.',
        patientPhrase: 'PCOS commonly causes absent or infrequent periods. We manage the hormones and metabolic risks.',
        ciksUrl: 'https://cks.nice.org.uk/topics/polycystic-ovary-syndrome/', caseLink: '../cases/pcos.html' },
      { id: 'hypothalamic', name: 'Hypothalamic amenorrhoea', summary: 'Low BMI, exercise, stress; low FSH/LH', baseline: 5, category: 'common',
        keyExam: 'Low BMI.', nextIx: 'Low FSH/LH/oestradiol; restore energy balance; bone health.',
        patientPhrase: 'Low weight, intense exercise or stress can switch off the cycle. Restoring balance usually restarts it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/amenorrhoea/' },
      { id: 'hyperprolactinaemia', name: 'Hyperprolactinaemia', summary: 'Galactorrhoea ± visual symptoms', baseline: 3, category: 'less-common',
        keyExam: 'Galactorrhoea, visual fields.', nextIx: 'Prolactin; MRI if high; endocrine.',
        patientPhrase: 'A raised prolactin hormone stops periods. We check it and image the pituitary if needed.',
        ciksUrl: 'https://cks.nice.org.uk/topics/amenorrhoea/' },
      { id: 'thyroid', name: 'Thyroid dysfunction', summary: 'Hyper-/hypothyroid', baseline: 3, category: 'common',
        keyExam: 'Thyroid signs.', nextIx: 'TSH; treat.',
        patientPhrase: 'A thyroid imbalance can stop periods. Treating it restores cycles.',
        ciksUrl: 'https://cks.nice.org.uk/topics/amenorrhoea/' },
      { id: 'poi', name: 'Premature ovarian insufficiency', summary: '<40, raised FSH, vasomotor symptoms', baseline: 2, category: 'less-common',
        keyExam: 'Vasomotor symptoms.', nextIx: 'FSH ×2; refer; HRT for protection.',
        patientPhrase: 'The ovaries are becoming less active early. HRT protects bones and heart and relieves symptoms.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng23' },

      { id: 'structural', name: 'Structural / genetic (outflow / Turner\u2019s / Asherman\u2019s)', summary: 'Primary with anatomical/genetic cause, or post-surgical', baseline: 1, category: 'cant-miss',
        keyExam: 'Absent characteristics, short stature, cyclical pain without bleeding.', nextIx: '\u26A1 Pelvic USS, karyotype, gynae/endocrine referral.',
        patientPhrase: 'An anatomical or genetic cause needs specialist assessment to diagnose and manage properly.',
        ciksUrl: 'https://cks.nice.org.uk/topics/amenorrhoea/', redFlagAction: '\u26A1 Gynae/endocrine referral' },
    ],
    effects: {
      age: (v) => v != null && v < 40 ? { poi: +2 } : {},
      pregnant: { pregnancy: +30 },

      pcos_features: { pcos: +22 },
      low_weight_stress: { hypothalamic: +22 },
      galactorrhoea: { hyperprolactinaemia: +24 },
      thyroid_sx: { thyroid: +20 },
      vasomotor_poi: { poi: +24 },
      short_stature_turner: { structural: +22 },
      outflow: { structural: +24 },
      uterine_surgery: { structural: +18 },

      primary: { structural: +6, pregnancy: -6 },
      secondary: { pregnancy: +4, pcos: +2 },
    },
    askAbout: {
      pregnancy: ['pregnant'],
      pcos: ['pcos_features'],
      hypothalamic: ['low_weight_stress'],
      hyperprolactinaemia: ['galactorrhoea'],
      thyroid: ['thyroid_sx'],
      poi: ['vasomotor_poi'],
      structural: ['outflow', 'short_stature_turner', 'uterine_surgery'],
    },
    sources: [
      { label: 'NICE CKS — Amenorrhoea', url: 'https://cks.nice.org.uk/topics/amenorrhoea/' },
      { label: 'NICE NG23 — Menopause / POI', url: 'https://www.nice.org.uk/guidance/ng23' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'amenorrhoea', label: 'Amenorrhoea', triage: 'amenorrhoea-triage', dx: 'amenorrhoea-dx' }
  );
})();
