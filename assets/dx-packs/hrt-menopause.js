/* ============================================
   Diagnostic Tool pack — HRT Request / Suspected Menopause
   Shared-id triage + differential. NICE NG23 · MHRA.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 30, max: 70, step: 1 },
    { group: 'Symptoms', id: 'vasomotor', kind: 'check', label: 'Flushes / night sweats' },
    { group: 'Symptoms', id: 'cycle_change', kind: 'check', label: 'Cycle change / 12 months amenorrhoea' },
    { group: 'Symptoms', id: 'gsm', kind: 'check', label: 'Vaginal dryness / urinary symptoms (GSM)' },
    { group: 'Symptoms', id: 'mood_sleep', kind: 'check', label: 'Mood / sleep / cognitive symptoms' },

    { group: 'Mimics to exclude', id: 'thyroid_sx', kind: 'check', label: 'Thyroid symptoms' },
    { group: 'Mimics to exclude', id: 'anaemia_fatigue', kind: 'check', label: 'Fatigue + pallor (anaemia)' },
    { group: 'Mimics to exclude', id: 'under40', kind: 'check', label: 'Age <40 with menopausal symptoms (POI)' },

    { group: 'HRT risk / red flags', id: 'vte_risk', kind: 'check', label: 'VTE history / high VTE risk (favour transdermal)' },
    { group: 'HRT risk / red flags', id: 'breast_cancer', kind: 'check', label: 'Current / past breast cancer / undiagnosed breast lump' },
    { group: 'HRT risk / red flags', id: 'unscheduled_bleeding', kind: 'check', label: 'Postmenopausal / unscheduled bleeding' },
    { group: 'HRT type', id: 'has_uterus', kind: 'check', label: 'Has a uterus (needs progestogen)' },
  ];

  if (window.RGPTriage) RGPTriage.register('hrt-menopause-triage', {
    title: 'Menopause / HRT — triage',
    subtitle: 'Tick features. Surfaces PMB pathway, breast red flags, POI and VTE-driven HRT route.',
    guideline: 'NICE NG23 · MHRA',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Diagnose menopause clinically in women >45 with typical symptoms (no FSH needed). Offer HRT (transdermal if VTE risk; add progestogen if uterus); review at 3 months.',
    rules: [
      {
        id: 'pmb_2ww', tier: 'cancer',
        label: 'Postmenopausal / unscheduled bleeding — endometrial pathway',
        action: 'Gynae 2WW + TV USS before/alongside HRT decisions (NICE NG12).',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.unscheduled_bleeding,
      },
      {
        id: 'breast', tier: 'urgent',
        label: 'Breast cancer history / undiagnosed lump',
        action: 'Systemic HRT generally contraindicated; assess lump (2WW if suspicious); non-hormonal options + vaginal oestrogen for GSM with specialist advice.',
        source: 'NICE NG23',
        when: i => i.breast_cancer,
      },
      {
        id: 'poi', tier: 'urgent',
        label: 'Possible premature ovarian insufficiency (<40)',
        action: 'FSH ×2 (4 weeks apart); offer HRT/COC until ~51 for bone/CV protection; refer.',
        source: 'NICE NG23',
        when: i => i.under40,
      },
      {
        id: 'mimics', tier: 'urgent',
        label: 'Exclude mimics — thyroid / anaemia',
        action: 'TFT, FBC if atypical/fatigue-predominant; treat cause.',
        source: 'NICE NG23',
        when: i => i.thyroid_sx || i.anaemia_fatigue,
      },
      {
        id: 'prescribe', tier: 'routine',
        label: 'Menopause — manage / start HRT',
        action: 'Transdermal oestrogen if VTE risk; add progestogen if uterus; vaginal oestrogen for GSM; review 3 months.',
        source: 'NICE NG23',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG23 — Menopause', url: 'https://www.nice.org.uk/guidance/ng23' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('hrt-menopause-dx', {
    title: 'Menopausal symptoms — cause & HRT fit',
    subtitle: 'The engine confirms menopause/perimenopause vs POI, excludes mimics (thyroid, anaemia), and weights the HRT route (transdermal vs oral, ± progestogen).',
    guideline: 'NICE NG23',
    patientPresenting: "I think I'm going through the menopause, doctor — and I'd like to talk about HRT.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'menopause', name: 'Menopause / perimenopause', summary: '>45 with vasomotor + cycle change', baseline: 11, category: 'common',
        keyExam: 'BP, BMI; clinical diagnosis >45.', nextIx: 'No FSH needed >45; offer HRT; lifestyle; review.',
        patientPhrase: 'Your symptoms fit the menopause transition. HRT is effective and we tailor it to you.',
        ciksUrl: 'https://cks.nice.org.uk/topics/menopause/', caseLink: '../cases/menopause.html' },
      { id: 'gsm', name: 'Genitourinary syndrome of menopause', summary: 'Vaginal dryness / urinary symptoms', baseline: 5, category: 'common',
        keyExam: 'Atrophic changes.', nextIx: 'Vaginal oestrogen (safe long-term, even alongside systemic HRT).',
        patientPhrase: 'Local dryness responds very well to vaginal oestrogen, which is safe to use long term.',
        ciksUrl: 'https://cks.nice.org.uk/topics/menopause/' },
      { id: 'poi', name: 'Premature ovarian insufficiency', summary: '<40 with menopausal symptoms, raised FSH', baseline: 3, category: 'less-common',
        keyExam: 'Vasomotor symptoms <40.', nextIx: 'FSH ×2; HRT/COC to ~51; refer; bone protection.',
        patientPhrase: 'The ovaries are slowing early. Replacing hormones until the usual menopause age protects bones and heart.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng23' },
      { id: 'thyroid', name: 'Thyroid dysfunction (mimic)', summary: 'Thyroid symptoms overlapping', baseline: 3, category: 'common',
        keyExam: 'Thyroid signs.', nextIx: 'TSH; treat; reassess.',
        patientPhrase: 'A thyroid imbalance can mimic the menopause. A blood test tells them apart.',
        ciksUrl: 'https://cks.nice.org.uk/topics/menopause/' },
      { id: 'anaemia', name: 'Anaemia (mimic)', summary: 'Fatigue-predominant, pallor', baseline: 2, category: 'less-common',
        keyExam: 'Pallor.', nextIx: 'FBC/ferritin; treat.',
        patientPhrase: 'Low iron can cause similar tiredness. We check and treat it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/anaemia-iron-deficiency/' },

      { id: 'endometrial', name: 'Endometrial pathology (bleeding)', summary: 'PMB / unscheduled bleeding — exclude before/around HRT', baseline: 1, category: 'cant-miss',
        keyExam: 'Bleeding history.', nextIx: '\u26A1 Gynae 2WW + TV USS (NICE NG12).',
        patientPhrase: 'Any unexpected bleeding needs an urgent womb-lining check before we are reassured.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Gynae 2WW' },
    ],
    effects: {
      age: (v) => v >= 45 ? { menopause: +10, poi: -6 } : (v < 40 ? { poi: +8, menopause: -6 } : {}),
      vasomotor: { menopause: +14, poi: +4 },
      cycle_change: { menopause: +10 },
      gsm: { gsm: +20 },
      mood_sleep: { menopause: +6, thyroid: +3, anaemia: +3 },

      thyroid_sx: { thyroid: +20, menopause: -4 },
      anaemia_fatigue: { anaemia: +18 },
      under40: { poi: +24 },

      unscheduled_bleeding: { endometrial: +26 },
      has_uterus: { menopause: +2 },
    },
    askAbout: {
      menopause: ['vasomotor', 'cycle_change', 'age'],
      gsm: ['gsm'],
      poi: ['under40'],
      thyroid: ['thyroid_sx'],
      anaemia: ['anaemia_fatigue'],
      endometrial: ['unscheduled_bleeding'],
    },
    sources: [
      { label: 'NICE NG23 — Menopause', url: 'https://www.nice.org.uk/guidance/ng23' },
      { label: 'NICE CKS — Menopause', url: 'https://cks.nice.org.uk/topics/menopause/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'hrt-menopause', label: 'HRT / menopause', triage: 'hrt-menopause-triage', dx: 'hrt-menopause-dx' }
  );
})();
