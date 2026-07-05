/* ============================================
   Diagnostic Tool pack — Urinary Incontinence (female)
   Shared-id triage + differential. NICE NG123 · CKS.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'parity', kind: 'check', label: 'Vaginal deliveries / obesity / menopause' },

    { group: 'Symptom pattern', id: 'stress_leak', kind: 'check', label: 'Leak on cough / laugh / exertion' },
    { group: 'Symptom pattern', id: 'urge_leak', kind: 'check', label: 'Urgency with leak before reaching toilet' },
    { group: 'Symptom pattern', id: 'frequency_nocturia', kind: 'check', label: 'Frequency / nocturia / urgency' },
    { group: 'Symptom pattern', id: 'continuous', kind: 'check', label: 'Continuous leak (? fistula / overflow)' },
    { group: 'Symptom pattern', id: 'voiding_poor', kind: 'check', label: 'Poor stream / incomplete emptying / palpable bladder' },
    { group: 'Symptom pattern', id: 'prolapse', kind: 'check', label: 'Vaginal bulge / prolapse sensation' },

    { group: 'Contributing', id: 'uti_sx', kind: 'check', label: 'Dysuria / cloudy urine (UTI)' },
    { group: 'Contributing', id: 'caffeine_meds', kind: 'check', label: 'High caffeine / diuretic / contributing drug' },

    { group: 'Red flags', id: 'haematuria', kind: 'check', label: 'Visible haematuria / recurrent UTI / pelvic mass' },
    { group: 'Red flags', id: 'neuro', kind: 'check', label: 'New neurological symptoms (? cauda equina / cord)' },
  ];

  if (window.RGPTriage) RGPTriage.register('urinary-incontinence-female-triage', {
    title: 'Female urinary incontinence — triage',
    subtitle: 'Tick features. Surfaces malignancy red flags, neurological causes and the symptom-based pathway (NICE NG123).',
    guideline: 'NICE NG123',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Bladder diary + urine dip; categorise stress / urgency / mixed; start conservative care (pelvic-floor exercises ≥3 months for stress, bladder training for urgency).',
    rules: [
      {
        id: 'neuro', tier: 'emergency',
        label: 'New neurology with incontinence — exclude cauda equina / cord compression',
        action: 'Same-day neuro exam (saddle sensation, tone); urgent MRI if red flags.',
        source: 'NICE NG59',
        when: i => i.neuro,
      },
      {
        id: 'cancer_2ww', tier: 'cancer',
        label: 'Visible haematuria / pelvic mass / recurrent UTI ≥45 — exclude malignancy',
        action: 'Urology / gynae 2WW as appropriate (NICE NG12).',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.haematuria,
      },
      {
        id: 'retention', tier: 'urgent',
        label: 'Voiding difficulty / overflow / palpable bladder',
        action: 'Post-void residual / bladder scan; treat retention; review drugs.',
        source: 'NICE NG123',
        when: i => i.voiding_poor || i.continuous,
      },
      {
        id: 'uti', tier: 'urgent',
        label: 'Symptomatic UTI',
        action: 'Treat infection; reassess continence after treatment.',
        source: 'CKS',
        when: i => i.uti_sx,
      },
      {
        id: 'conservative', tier: 'routine',
        label: 'Stress / urgency / mixed incontinence — conservative care',
        action: 'Bladder diary; pelvic-floor training; bladder training; lifestyle; antimuscarinic/mirabegron or refer if refractory.',
        source: 'NICE NG123',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG123 — Urinary incontinence (women)', url: 'https://www.nice.org.uk/guidance/ng123' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('urinary-incontinence-female-dx', {
    title: 'Female urinary incontinence — differential',
    subtitle: 'The engine weights stress, urgency, mixed, overflow and prolapse-related incontinence, and surfaces fistula and neurological/malignant causes when triggered.',
    guideline: 'NICE NG123 · CKS',
    patientPresenting: "I keep leaking urine, doctor — it's affecting everything I do and I'm too embarrassed to exercise.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'stress', name: 'Stress incontinence', summary: 'Leak on cough/laugh/exertion, parity / menopause', baseline: 10, category: 'common',
        keyExam: 'Leak on cough; assess pelvic floor; prolapse.', nextIx: 'Bladder diary; supervised pelvic-floor muscle training ≥3 months; refer for surgery if persistent.',
        patientPhrase: 'The pelvic-floor support has weakened, so effort leaks urine. Pelvic-floor exercises are very effective.',
        ciksUrl: 'https://cks.nice.org.uk/topics/incontinence-urinary-in-women/', caseLink: '../cases/urinary-incontinence.html' },
      { id: 'urge', name: 'Urgency incontinence / OAB', summary: 'Urgency, frequency, nocturia, leak before reaching toilet', baseline: 8, category: 'common',
        keyExam: 'Often normal.', nextIx: 'Bladder diary; bladder training; antimuscarinic / mirabegron.',
        patientPhrase: 'The bladder contracts before you are ready. Bladder training and medication settle the urgency.',
        ciksUrl: 'https://cks.nice.org.uk/topics/incontinence-urinary-in-women/' },
      { id: 'mixed', name: 'Mixed incontinence', summary: 'Both stress and urgency features', baseline: 6, category: 'common',
        keyExam: 'Features of both.', nextIx: 'Treat the predominant symptom first; bladder diary.',
        patientPhrase: 'You have a mix of both types. We treat whichever bothers you most first.',
        ciksUrl: 'https://cks.nice.org.uk/topics/incontinence-urinary-in-women/' },
      { id: 'prolapse', name: 'Prolapse-related', summary: 'Vaginal bulge with voiding/storage symptoms', baseline: 4, category: 'common',
        keyExam: 'Speculum: prolapse.', nextIx: 'Pelvic-floor exercises; pessary; gynae referral.',
        patientPhrase: 'A prolapse is affecting bladder function. Exercises, a pessary or surgery can help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/prolapse-uterine-vaginal/' },
      { id: 'overflow', name: 'Overflow incontinence', summary: 'Poor stream, incomplete emptying, palpable bladder', baseline: 2, category: 'less-common',
        keyExam: 'Palpable bladder; post-void residual high.', nextIx: 'Bladder scan; treat retention; review drugs; exclude neuro cause.',
        patientPhrase: 'The bladder is overfull and overflowing. We relieve it and look for why it is not emptying.',
        ciksUrl: 'https://cks.nice.org.uk/topics/incontinence-urinary-in-women/' },

      { id: 'fistula_neuro', name: 'Fistula / neurological cause', summary: 'Continuous leak, or new neurology', baseline: 1, category: 'cant-miss',
        keyExam: 'Continuous wetness; neuro exam.', nextIx: '\u26A1 Continuous leak → gynae (fistula); new neurology → urgent MRI (cauda equina/cord).',
        patientPhrase: 'A constant leak or new nerve symptoms need urgent specialist assessment to find a treatable cause.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng123', redFlagAction: '\u26A1 Urgent gynae / neuro' },
      { id: 'malignancy', name: 'Bladder / pelvic malignancy', summary: 'Visible haematuria / mass / recurrent UTI ≥45', baseline: 1, category: 'cant-miss',
        keyExam: 'Pelvic mass; haematuria.', nextIx: '\u26A1 Urology / gynae 2WW (NICE NG12).',
        patientPhrase: 'These features need an urgent specialist look to exclude a serious cause — most are clear.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 2WW' },
    ],
    effects: {
      age: (v) => v >= 60 ? { urge: +3, malignancy: +2 } : {},
      parity: { stress: +10, prolapse: +4 },

      stress_leak: { stress: +20, mixed: +6 },
      urge_leak: { urge: +20, mixed: +6 },
      frequency_nocturia: { urge: +12 },
      continuous: { fistula_neuro: +20, overflow: +6 },
      voiding_poor: { overflow: +20 },
      prolapse: { prolapse: +20 },

      uti_sx: { urge: +4 },
      caffeine_meds: { urge: +6 },

      haematuria: { malignancy: +24 },
      neuro: { fistula_neuro: +24 },
    },
    askAbout: {
      stress: ['stress_leak', 'parity'],
      urge: ['urge_leak', 'frequency_nocturia'],
      mixed: ['stress_leak', 'urge_leak'],
      prolapse: ['prolapse'],
      overflow: ['voiding_poor'],
      fistula_neuro: ['continuous', 'neuro'],
      malignancy: ['haematuria'],
    },
    sources: [
      { label: 'NICE NG123 — Urinary incontinence (women)', url: 'https://www.nice.org.uk/guidance/ng123' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'urinary-incontinence-female', label: 'Urinary incontinence (female)', triage: 'urinary-incontinence-female-triage', dx: 'urinary-incontinence-female-dx' }
  );
})();
