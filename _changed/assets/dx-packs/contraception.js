/* ============================================
   Diagnostic Tool pack — Women Requesting Contraception
   Shared-id triage (UKMEC safety) + method-suitability ranking. FSRH 2023.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 12, max: 60, step: 1 },
    { group: 'Need', id: 'emergency_need', kind: 'check', label: 'Unprotected sex needing emergency contraception' },
    { group: 'Preference', id: 'wants_larc', kind: 'check', label: 'Wants long-acting / most effective / "forgettable"' },
    { group: 'Preference', id: 'wants_oral', kind: 'check', label: 'Prefers a pill' },
    { group: 'Preference', id: 'heavy_periods', kind: 'check', label: 'Also wants help with heavy / painful periods' },

    { group: 'CHC contraindications (UKMEC 3/4)', id: 'migraine_aura', kind: 'check', label: 'Migraine with aura' },
    { group: 'CHC contraindications (UKMEC 3/4)', id: 'vte_history', kind: 'check', label: 'VTE / known thrombophilia / immobility' },
    { group: 'CHC contraindications (UKMEC 3/4)', id: 'smoker_35', kind: 'check', label: 'Smoker and age ≥35' },
    { group: 'CHC contraindications (UKMEC 3/4)', id: 'bp_high_bmi', kind: 'check', label: 'Hypertension / BMI ≥35 / vascular disease' },
    { group: 'General', id: 'breast_cancer', kind: 'check', label: 'Current / past breast cancer' },
    { group: 'General', id: 'postpartum_bf', kind: 'check', label: 'Postpartum / breastfeeding' },
    { group: 'General', id: 'pregnant_possible', kind: 'check', label: 'Could already be pregnant' },
  ];

  if (window.RGPTriage) RGPTriage.register('contraception-triage', {
    title: 'Contraception — UKMEC safety triage',
    subtitle: 'Tick history. Surfaces emergency contraception timing and UKMEC contraindications.',
    guideline: 'FSRH UKMEC 2023',
    inputs: INPUTS,
    defaultMessage: 'No contraindication flagged. Pregnancy-risk assess; offer the full range (LARC most effective); UKMEC-screen the chosen method; provide quick-start where appropriate.',
    rules: [
      {
        id: 'emergency', tier: 'urgent',
        label: 'Emergency contraception needed',
        action: 'Cu-IUD most effective (up to 120h) — offer first; or ulipristal/levonorgestrel by timing. Quick-start ongoing method.',
        patientPhrase: '"The most effective emergency option is the copper coil — I can also offer a tablet depending on timing."',
        source: 'FSRH Emergency contraception',
        when: i => i.emergency_need,
      },
      {
        id: 'chc_contra', tier: 'urgent',
        label: 'Combined hormonal contraception contraindicated (UKMEC 4) — avoid oestrogen',
        action: 'Avoid CHC (migraine+aura, VTE, smoker ≥35, BP/BMI high, breast cancer). Offer progestogen-only / LARC / Cu-IUD.',
        patientPhrase: '"The oestrogen pill is not safe for you, but there are excellent alternatives without oestrogen."',
        source: 'FSRH UKMEC', sourceUrl: 'https://www.fsrh.org/standards-and-guidance/',
        when: i => i.migraine_aura || i.vte_history || i.smoker_35 || i.breast_cancer || i.bp_high_bmi,
      },
      {
        id: 'pregnant', tier: 'urgent',
        label: 'Could already be pregnant',
        action: 'Pregnancy test / pregnancy-risk assessment before starting hormonal method.',
        source: 'FSRH',
        when: i => i.pregnant_possible,
      },
      {
        id: 'choose', tier: 'routine',
        label: 'Choose & start a method',
        action: 'Discuss effectiveness (LARC first), non-contraceptive benefits, UKMEC; provide and safety-net.',
        source: 'FSRH',
        when: i => true,
      },
    ],
    sources: [
      { label: 'FSRH — UKMEC 2023', url: 'https://www.fsrh.org/standards-and-guidance/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('contraception-dx', {
    title: 'Contraception — best-fit method',
    subtitle: 'Not a diagnosis — the engine ranks the most suitable methods from preferences and UKMEC eligibility, with the most effective (LARC) weighted up and oestrogen down-weighted by contraindications.',
    guideline: 'FSRH UKMEC 2023',
    patientPresenting: "I'd like to talk about contraception, doctor — I'm not sure what's best for me.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'larc', name: 'LARC (implant / IUS / Cu-IUD)', summary: 'Most effective, "fit and forget"', baseline: 10, category: 'common',
        keyExam: 'BP/BMI; bimanual for IUD fitting.', nextIx: 'Offer as first-line for effectiveness; IUS also treats heavy periods.',
        patientPhrase: 'Long-acting methods are the most effective and need little upkeep — a great default option.',
        ciksUrl: 'https://www.fsrh.org/standards-and-guidance/' },
      { id: 'ius', name: 'Levonorgestrel IUS', summary: 'LARC + lightens periods, no oestrogen', baseline: 6, category: 'common',
        keyExam: 'Bimanual for fitting.', nextIx: 'Excellent if heavy/painful periods; safe when CHC contraindicated.',
        patientPhrase: 'The hormone coil prevents pregnancy and usually makes periods much lighter — ideal if they are heavy.',
        ciksUrl: 'https://www.fsrh.org/standards-and-guidance/' },
      { id: 'chc', name: 'Combined hormonal (pill/patch/ring)', summary: 'Cycle control; only if no oestrogen contraindication', baseline: 6, category: 'common',
        keyExam: 'BP, BMI, migraine history.', nextIx: 'UKMEC screen; avoid if migraine+aura/VTE/smoker≥35/breast cancer.',
        patientPhrase: 'The combined pill is effective and gives cycle control — but only if it is safe for you.',
        ciksUrl: 'https://www.fsrh.org/standards-and-guidance/' },
      { id: 'pop', name: 'Progestogen-only pill', summary: 'No oestrogen; suitable in most contraindications', baseline: 5, category: 'common',
        keyExam: 'Minimal.', nextIx: 'Good oral option when CHC contraindicated / breastfeeding.',
        patientPhrase: 'A pill without oestrogen — suitable for almost everyone, including breastfeeding.',
        ciksUrl: 'https://www.fsrh.org/standards-and-guidance/' },
      { id: 'cu_iud', name: 'Copper IUD', summary: 'Hormone-free LARC; also emergency contraception', baseline: 4, category: 'common',
        keyExam: 'Bimanual for fitting.', nextIx: 'Hormone-free option; most effective emergency contraception.',
        patientPhrase: 'A hormone-free coil — highly effective and also the best emergency option.',
        ciksUrl: 'https://www.fsrh.org/standards-and-guidance/' },
      { id: 'emergency', name: 'Emergency contraception', summary: 'Cu-IUD or oral (ulipristal/levonorgestrel) by timing', baseline: 2, category: 'common',
        keyExam: 'Timing of UPSI.', nextIx: 'Cu-IUD first-line; quick-start ongoing method.',
        patientPhrase: 'We will sort out emergency cover now and set up ongoing contraception.',
        ciksUrl: 'https://www.fsrh.org/standards-and-guidance/' },
    ],
    effects: {
      emergency_need: { emergency: +26, cu_iud: +10 },
      wants_larc: { larc: +16, ius: +8, cu_iud: +6 },
      wants_oral: { pop: +12, chc: +10 },
      heavy_periods: { ius: +18 },

      migraine_aura: { chc: -30, pop: +8, ius: +6 },
      vte_history: { chc: -30, pop: +6, ius: +4, cu_iud: +6 },
      smoker_35: { chc: -24, pop: +6 },
      bp_high_bmi: { chc: -18, pop: +6, ius: +4 },
      breast_cancer: { chc: -30, ius: -20, pop: -20, cu_iud: +20 },
      postpartum_bf: { pop: +10, chc: -10 },
      pregnant_possible: { cu_iud: +2 },
    },
    askAbout: {
      larc: ['wants_larc'],
      ius: ['heavy_periods', 'wants_larc'],
      chc: ['migraine_aura', 'vte_history', 'smoker_35'],
      pop: ['wants_oral'],
      cu_iud: ['breast_cancer'],
      emergency: ['emergency_need'],
    },
    sources: [
      { label: 'FSRH — UKMEC 2023', url: 'https://www.fsrh.org/standards-and-guidance/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'contraception', label: 'Contraception request', triage: 'contraception-triage', dx: 'contraception-dx' }
  );
})();
