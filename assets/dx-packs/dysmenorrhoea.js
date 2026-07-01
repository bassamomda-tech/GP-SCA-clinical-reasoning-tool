/* ============================================
   Diagnostic Tool pack — Dysmenorrhoea
   Shared-id triage + differential. CKS Dysmenorrhoea · NICE NG73 endometriosis.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 60, step: 1 },
    { group: 'Onset', id: 'since_menarche', kind: 'check', label: 'Started with periods (within 6–12 months of menarche)' },
    { group: 'Onset', id: 'later_onset', kind: 'check', label: 'New / worsening later in life (secondary)' },

    { group: 'Pattern', id: 'crampy_first_days', kind: 'check', label: 'Crampy, first 1–3 days, relieved by NSAID' },
    { group: 'Pattern', id: 'noncyclical_chronic', kind: 'check', label: 'Pain also between periods / chronic pelvic pain' },
    { group: 'Pattern', id: 'deep_dyspareunia', kind: 'check', label: 'Deep dyspareunia / dyschezia (endometriosis)' },
    { group: 'Pattern', id: 'heavy_bulky', kind: 'check', label: 'Heavy periods + bulky tender uterus (adenomyosis)' },
    { group: 'Associated', id: 'imb_discharge', kind: 'check', label: 'IMB / discharge / STI risk (PID)' },
    { group: 'Associated', id: 'iud', kind: 'check', label: 'Copper IUD in situ' },

    { group: 'Red flags', id: 'severe_acute', kind: 'check', label: 'Severe acute pain + pregnancy possible / peritonism (? ectopic/torsion)' },
    { group: 'Vitals', id: 'preg_possible', kind: 'check', label: 'Pregnancy possible / positive test' },
  ];

  if (window.RGPTriage) RGPTriage.register('dysmenorrhoea-triage', {
    title: 'Dysmenorrhoea — triage',
    subtitle: 'Tick features. Surfaces acute gynae emergencies and the primary-vs-secondary pathway.',
    guideline: 'CKS · NICE NG73',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Primary dysmenorrhoea (since menarche, typical pattern) → NSAID ± hormonal contraception, trial 3–6 months. Examine + investigate if secondary features.',
    rules: [
      {
        id: 'acute_emergency', tier: 'emergency',
        label: 'Severe acute pelvic pain with pregnancy possible / peritonism',
        action: 'Same-day assessment — pregnancy test; exclude ectopic / ovarian torsion.',
        patientPhrase: '"This severe pain with a possible pregnancy needs urgent assessment today."',
        source: 'CKS Ectopic',
        when: i => i.severe_acute || (i.preg_possible && i.noncyclical_chronic),
      },
      {
        id: 'pid', tier: 'urgent',
        label: 'Possible PID — pain + IMB / discharge / STI risk',
        action: 'STI screen; empirical PID antibiotics if clinical suspicion; trace contacts.',
        source: 'BASHH',
        when: i => i.imb_discharge,
      },
      {
        id: 'secondary', tier: 'urgent',
        label: 'Secondary dysmenorrhoea — endometriosis / adenomyosis features',
        action: 'Pelvic ± TV USS; gynae referral; hormonal treatment; consider laparoscopy for endometriosis.',
        source: 'NICE NG73',
        when: i => i.later_onset || i.noncyclical_chronic || i.deep_dyspareunia || i.heavy_bulky,
      },
      {
        id: 'primary', tier: 'routine',
        label: 'Primary dysmenorrhoea',
        action: 'NSAID first-line ± hormonal contraception; review at 3–6 months; investigate if not responding.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Dysmenorrhoea', url: 'https://cks.nice.org.uk/topics/dysmenorrhoea/' },
      { label: 'NICE NG73 — Endometriosis', url: 'https://www.nice.org.uk/guidance/ng73' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('dysmenorrhoea-dx', {
    title: 'Dysmenorrhoea — differential',
    subtitle: 'The engine separates primary from secondary dysmenorrhoea (endometriosis, adenomyosis, PID, IUD) and surfaces ectopic / torsion when acute red flags fire.',
    guideline: 'CKS · NICE NG73',
    patientPresenting: "My period pains are crippling, doctor — painkillers barely touch them.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'primary', name: 'Primary dysmenorrhoea', summary: 'Since menarche, crampy first days, NSAID-responsive, normal exam', baseline: 11, category: 'common',
        keyExam: 'Normal pelvic exam.', nextIx: 'Clinical; NSAID ± hormonal contraception; review.',
        patientPhrase: 'This is the common type with no underlying disease — prostaglandins make the womb cramp. Anti-inflammatories and hormones help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/dysmenorrhoea/' },
      { id: 'endometriosis', name: 'Endometriosis', summary: 'Secondary, chronic/non-cyclical pain, deep dyspareunia, dyschezia', baseline: 6, category: 'common',
        keyExam: 'Tender nodularity, fixed retroverted uterus.', nextIx: 'TV USS (often normal); gynae referral; laparoscopy is diagnostic.',
        patientPhrase: 'Womb-lining tissue growing outside the womb causes this. Hormonal treatment and sometimes surgery help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/endometriosis/' },
      { id: 'adenomyosis', name: 'Adenomyosis', summary: 'Heavy painful periods, bulky tender uterus, older/parous', baseline: 4, category: 'common',
        keyExam: 'Bulky tender uterus.', nextIx: 'TV USS/MRI; LNG-IUS / hormonal treatment.',
        patientPhrase: 'Lining tissue within the womb muscle causes heavy painful periods. Hormonal treatment usually helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/dysmenorrhoea/' },
      { id: 'pid', name: 'Pelvic inflammatory disease', summary: 'Pain + IMB/discharge + STI risk', baseline: 3, category: 'less-common',
        keyExam: 'Cervical excitation, adnexal tenderness, discharge.', nextIx: 'STI screen; empirical antibiotics; contact tracing.',
        patientPhrase: 'An infection of the pelvic organs can cause pain. Antibiotics treat it and we screen for STIs.',
        ciksUrl: 'https://cks.nice.org.uk/topics/pelvic-inflammatory-disease/' },
      { id: 'iud', name: 'IUD-related', summary: 'Copper coil causing cramping / heavier periods', baseline: 2, category: 'less-common',
        keyExam: 'Coil in situ.', nextIx: 'Review device; alternatives if persistent.',
        patientPhrase: 'A copper coil can increase cramps. We can review whether to change it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/dysmenorrhoea/' },

      { id: 'acute_gynae', name: 'Ectopic / ovarian torsion', summary: 'Severe acute pain, pregnancy possible / peritonism', baseline: 1, category: 'cant-miss',
        keyExam: 'Peritonism, adnexal mass/tenderness.', nextIx: '\u26A1 Pregnancy test + urgent gynae/USS — exclude ectopic and torsion.',
        patientPhrase: 'Sudden severe pain needs urgent assessment to rule out a pregnancy in the tube or a twisted ovary.',
        ciksUrl: 'https://cks.nice.org.uk/topics/ectopic-pregnancy/', redFlagAction: '\u26A1 Urgent gynae + pregnancy test' },
    ],
    effects: {
      age: (v) => v < 20 ? { primary: +6 } : (v >= 30 ? { endometriosis: +3, adenomyosis: +4 } : {}),
      since_menarche: { primary: +18, endometriosis: -4 },
      later_onset: { endometriosis: +8, adenomyosis: +8, primary: -8 },

      crampy_first_days: { primary: +14 },
      noncyclical_chronic: { endometriosis: +16 },
      deep_dyspareunia: { endometriosis: +20 },
      heavy_bulky: { adenomyosis: +22 },
      imb_discharge: { pid: +22 },
      iud: { iud: +20 },

      severe_acute: { acute_gynae: +26 },
      preg_possible: { acute_gynae: +12 },
    },
    askAbout: {
      primary: ['since_menarche', 'crampy_first_days'],
      endometriosis: ['deep_dyspareunia', 'noncyclical_chronic'],
      adenomyosis: ['heavy_bulky'],
      pid: ['imb_discharge'],
      iud: ['iud'],
      acute_gynae: ['severe_acute', 'preg_possible'],
    },
    sources: [
      { label: 'NICE CKS — Dysmenorrhoea', url: 'https://cks.nice.org.uk/topics/dysmenorrhoea/' },
      { label: 'NICE NG73 — Endometriosis', url: 'https://www.nice.org.uk/guidance/ng73' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'dysmenorrhoea', label: 'Dysmenorrhoea', triage: 'dysmenorrhoea-triage', dx: 'dysmenorrhoea-dx' }
  );
})();
