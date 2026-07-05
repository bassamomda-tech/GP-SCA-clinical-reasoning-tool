/* ============================================
   Diagnostic Tool pack — Premature Ejaculation
   Shared-id triage + differential. NICE CKS · EAU/ISSM.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Type', id: 'lifelong', kind: 'check', label: 'Lifelong (since first sexual experiences)' },
    { group: 'Type', id: 'acquired', kind: 'check', label: 'Acquired (new change from previous normal)' },
    { group: 'Type', id: 'variable', kind: 'check', label: 'Variable / situational only' },

    { group: 'Associated', id: 'ed', kind: 'check', label: 'Co-existing erectile dysfunction (rushing to ejaculate)' },
    { group: 'Associated', id: 'anxiety', kind: 'check', label: 'Performance anxiety / relationship stress' },
    { group: 'Associated', id: 'prostatitis_thyroid', kind: 'check', label: 'Prostatitis symptoms / thyroid symptoms (acquired)' },
    { group: 'Associated', id: 'distress', kind: 'check', label: 'Significant personal / relationship distress' },
  ];

  if (window.RGPTriage) RGPTriage.register('premature-ejaculation-triage', {
    title: 'Premature ejaculation — triage',
    subtitle: 'Tick features. Identifies treatable contributors (ED, prostatitis, thyroid) and directs management.',
    guideline: 'NICE CKS · EAU/ISSM',
    inputs: INPUTS,
    defaultMessage: 'No specific contributor flagged. Confirm distress-causing PE, exclude/treat co-existing ED, and offer behavioural techniques ± topical anaesthetic or SSRI (e.g. dapoxetine).',
    rules: [
      {
        id: 'treat_ed', tier: 'urgent',
        label: 'Co-existing erectile dysfunction — treat ED first',
        action: 'Treat ED (PDE5 inhibitor); PE often improves; assess CV risk (see ED).',
        source: 'EAU/ISSM',
        when: i => i.ed,
      },
      {
        id: 'secondary', tier: 'urgent',
        label: 'Acquired PE with prostatitis / thyroid symptoms',
        action: 'Treat underlying cause (prostatitis, thyrotoxicosis); reassess.',
        source: 'EAU/ISSM',
        when: i => i.acquired && i.prostatitis_thyroid,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'Premature ejaculation — behavioural + pharmacological',
        action: 'Behavioural techniques (stop-start/squeeze), topical anaesthetic, SSRI (dapoxetine on-demand); psychosexual therapy if relationship/anxiety factors.',
        source: 'NICE CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Ejaculatory dysfunction', url: 'https://cks.nice.org.uk/topics/erectile-dysfunction/' },
      { label: 'EAU/ISSM — Premature ejaculation', url: 'https://uroweb.org/guidelines' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('premature-ejaculation-dx', {
    title: 'Premature ejaculation — type & contributors',
    subtitle: 'The engine distinguishes lifelong, acquired and variable PE, and weights the treatable contributors (ED, anxiety, prostatitis/thyroid).',
    guideline: 'NICE CKS · EAU/ISSM',
    patientPresenting: "I finish far too quickly, doctor — it's really affecting my relationship.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'lifelong', name: 'Lifelong PE', summary: 'Present since first sexual experiences, consistent', baseline: 8, category: 'common',
        keyExam: 'Normal exam.', nextIx: 'Behavioural techniques; topical anaesthetic; daily/on-demand SSRI (dapoxetine).',
        patientPhrase: 'This has been lifelong and is common. A mix of techniques and medication usually improves control well.',
        ciksUrl: 'https://cks.nice.org.uk/topics/erectile-dysfunction/' },
      { id: 'acquired', name: 'Acquired PE', summary: 'New change, often with an identifiable contributor', baseline: 6, category: 'common',
        keyExam: 'Assess for ED, prostatitis, thyroid.', nextIx: 'Identify & treat contributor; behavioural + pharmacological measures.',
        patientPhrase: 'This is a change from before, so we look for and treat a cause — that often restores control.',
        ciksUrl: 'https://cks.nice.org.uk/topics/erectile-dysfunction/' },
      { id: 'variable', name: 'Variable / situational PE', summary: 'Inconsistent, situational — often normal variation', baseline: 4, category: 'less-common',
        keyExam: 'Normal.', nextIx: 'Reassurance, education, behavioural techniques.',
        patientPhrase: 'This varies with situation and is within the normal range. Education and simple techniques help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/erectile-dysfunction/' },
      { id: 'ed_related', name: 'ED-related PE', summary: 'Rushing to ejaculate before losing erection', baseline: 4, category: 'common',
        keyExam: 'Assess erectile function.', nextIx: 'Treat ED first (PDE5i); PE often resolves; assess CV risk.',
        patientPhrase: 'Difficulty maintaining an erection can drive rushing. Treating that usually improves both.',
        ciksUrl: 'https://cks.nice.org.uk/topics/erectile-dysfunction/' },
      { id: 'psychogenic', name: 'Anxiety / relationship-related', summary: 'Performance anxiety, relationship stress', baseline: 4, category: 'common',
        keyExam: 'Psychosexual history.', nextIx: 'Psychosexual therapy; behavioural techniques; treat anxiety.',
        patientPhrase: 'Anxiety can worsen the problem and create a cycle. Addressing it, sometimes with a therapist, helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/erectile-dysfunction/' },
    ],
    effects: {
      lifelong: { lifelong: +22, variable: -6 },
      acquired: { acquired: +20 },
      variable: { variable: +20 },

      ed: { ed_related: +24, acquired: +6 },
      anxiety: { psychogenic: +20 },
      prostatitis_thyroid: { acquired: +14 },
      distress: { lifelong: +2, acquired: +2 },
    },
    askAbout: {
      lifelong: ['lifelong'],
      acquired: ['acquired', 'prostatitis_thyroid'],
      variable: ['variable'],
      ed_related: ['ed'],
      psychogenic: ['anxiety'],
    },
    sources: [
      { label: 'NICE CKS — Ejaculatory dysfunction', url: 'https://cks.nice.org.uk/topics/erectile-dysfunction/' },
      { label: 'EAU/ISSM — Premature ejaculation', url: 'https://uroweb.org/guidelines' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'premature-ejaculation', label: 'Premature ejaculation', triage: 'premature-ejaculation-triage', dx: 'premature-ejaculation-dx' }
  );
})();
