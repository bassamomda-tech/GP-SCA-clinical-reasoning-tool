/* ============================================
   Diagnostic Tool pack — Hirsutism
   Shared-id triage + differential. NICE CKS Hirsutism · Endocrine Society.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'fh', kind: 'check', label: 'Family history of hirsutism / similar ethnicity pattern' },
    { group: 'Demographics & context', id: 'drugs', kind: 'check', label: 'Androgenic drug (anabolic steroid, danazol, valproate)' },

    { group: 'Menstrual / metabolic', id: 'oligomenorrhoea', kind: 'check', label: 'Irregular / infrequent periods' },
    { group: 'Menstrual / metabolic', id: 'acne_obese', kind: 'check', label: 'Acne / obesity / insulin resistance' },
    { group: 'Menstrual / metabolic', id: 'subfertility', kind: 'check', label: 'Subfertility' },

    { group: 'Severity / onset', id: 'gradual_pubertal', kind: 'check', label: 'Gradual onset around puberty, slowly progressive' },
    { group: 'Severity / onset', id: 'rapid_virilisation', kind: 'check', label: 'Rapid onset + virilisation (deep voice, clitoromegaly, balding)' },
    { group: 'Severity / onset', id: 'cushing', kind: 'check', label: 'Cushingoid (striae, central obesity, easy bruising, hypertension)' },

    { group: 'Bloods (if done)', id: 'high_testosterone', kind: 'check', label: 'Total testosterone markedly raised (>5 nmol/L)' },
    { group: 'Bloods (if done)', id: 'high_17ohp', kind: 'check', label: '17-OH-progesterone raised (CAH)' },
  ];

  if (window.RGPTriage) RGPTriage.register('hirsutism-triage', {
    title: 'Hirsutism — triage',
    subtitle: 'Tick features. Surfaces androgen-secreting tumour and Cushing\u2019s pathways.',
    guideline: 'CKS Hirsutism · Endocrine Society',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Check total testosterone (+ SHBG); if mildly raised and periods irregular, assess for PCOS (Rotterdam); cosmetic measures ± hormonal treatment.',
    rules: [
      {
        id: 'tumour', tier: 'urgent',
        label: 'Rapid virilisation / very high testosterone — exclude androgen-secreting tumour',
        action: 'Urgent endocrine referral; testosterone, DHEAS, imaging (ovary/adrenal).',
        patientPhrase: '"The speed of these changes means I want a specialist to check the hormone-producing glands urgently."',
        source: 'Endocrine Society',
        when: i => i.rapid_virilisation || i.high_testosterone,
      },
      {
        id: 'cushing', tier: 'urgent',
        label: 'Cushingoid features',
        action: 'Investigate Cushing\u2019s (overnight dexamethasone / 24h urinary cortisol); endocrine referral.',
        source: 'CKS Cushing\u2019s',
        when: i => i.cushing,
      },
      {
        id: 'cah', tier: 'urgent',
        label: 'Possible non-classical CAH (raised 17-OHP)',
        action: 'Endocrine referral; 17-OH-progesterone (early-morning, follicular).',
        source: 'Endocrine Society',
        when: i => i.high_17ohp,
      },
      {
        id: 'pcos', tier: 'routine',
        label: 'Hirsutism with PCOS features / idiopathic',
        action: 'Assess Rotterdam criteria; metabolic screen; cosmetic measures ± COC / antiandrogen.',
        source: 'CKS Hirsutism',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Hirsutism', url: 'https://cks.nice.org.uk/topics/hirsutism/' },
      { label: 'Endocrine Society — Hirsutism 2018', url: 'https://www.endocrine.org/clinical-practice-guidelines' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('hirsutism-dx', {
    title: 'Hirsutism — differential',
    subtitle: 'The engine weights PCOS and idiopathic hirsutism against CAH and Cushing\u2019s, and always surfaces an androgen-secreting tumour when rapid virilisation or very high testosterone fires.',
    guideline: 'CKS Hirsutism',
    patientPresenting: "I'm getting coarse dark hair on my face and chest, doctor, and my periods are all over the place.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'pcos', name: 'Polycystic ovary syndrome', summary: 'Hirsutism + irregular periods + acne / obesity, mildly raised testosterone', baseline: 12, category: 'common',
        keyExam: 'Acne, central adiposity, acanthosis nigricans.', nextIx: 'Rotterdam criteria; testosterone/SHBG, LH/FSH, exclude others; pelvic USS; manage metabolic + cosmetic.',
        patientPhrase: 'This pattern fits PCOS — a common hormonal condition. We manage the symptoms and the longer-term metabolic risks together.',
        ciksUrl: 'https://cks.nice.org.uk/topics/polycystic-ovary-syndrome/', caseLink: '../cases/pcos.html' },
      { id: 'idiopathic', name: 'Idiopathic / familial hirsutism', summary: 'Gradual, regular periods, normal androgens, family/ethnic pattern', baseline: 7, category: 'common',
        keyExam: 'Normal exam; regular cycles.', nextIx: 'Normal testosterone; cosmetic measures ± topical eflornithine; reassure.',
        patientPhrase: 'Your hair follicles are simply more sensitive to normal hormone levels — it is harmless, and treatments help cosmetically.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hirsutism/' },
      { id: 'drug', name: 'Drug-induced', summary: 'Androgenic medication', baseline: 3, category: 'less-common',
        keyExam: 'Medication review.', nextIx: 'Review / stop offending drug.',
        patientPhrase: 'A medication is driving the hair growth. Changing it usually helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hirsutism/' },
      { id: 'cah', name: 'Non-classical CAH', summary: 'Raised 17-OHP, may mimic PCOS', baseline: 2, category: 'less-common',
        keyExam: 'Similar to PCOS.', nextIx: '17-OH-progesterone; endocrine referral; steroid if needed.',
        patientPhrase: 'A mild inherited enzyme difference can raise male hormones. A specific blood test checks for it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hirsutism/' },
      { id: 'cushing', name: 'Cushing\u2019s syndrome', summary: 'Striae, central obesity, bruising, hypertension', baseline: 1, category: 'less-common',
        keyExam: 'Moon face, striae, proximal weakness.', nextIx: 'Overnight dexamethasone / 24h urinary cortisol; endocrine referral.',
        patientPhrase: 'Excess cortisol can cause these changes. Tests confirm it and treatment targets the source.',
        ciksUrl: 'https://cks.nice.org.uk/topics/cushings-syndrome/' },

      { id: 'tumour', name: 'Androgen-secreting tumour', summary: 'Rapid virilisation, very high testosterone', baseline: 1, category: 'cant-miss',
        keyExam: 'Virilisation: deep voice, clitoromegaly, temporal balding.', nextIx: '\u26A1 Urgent endocrine — testosterone, DHEAS, ovarian / adrenal imaging.',
        patientPhrase: 'Rapid masculinising changes need urgent tests to rule out a hormone-producing growth.',
        ciksUrl: 'https://www.endocrine.org/clinical-practice-guidelines', redFlagAction: '\u26A1 Urgent endocrine + imaging' },
    ],
    effects: {
      fh: { idiopathic: +16 },
      drugs: { drug: +20 },

      oligomenorrhoea: { pcos: +18, idiopathic: -6 },
      acne_obese: { pcos: +14 },
      subfertility: { pcos: +8 },

      gradual_pubertal: { idiopathic: +12, pcos: +4, tumour: -8 },
      rapid_virilisation: { tumour: +30 },
      cushing: { cushing: +24 },

      high_testosterone: { tumour: +18, pcos: +2 },
      high_17ohp: { cah: +24 },
    },
    askAbout: {
      pcos: ['oligomenorrhoea', 'acne_obese'],
      idiopathic: ['gradual_pubertal', 'fh'],
      drug: ['drugs'],
      cah: ['high_17ohp'],
      cushing: ['cushing'],
      tumour: ['rapid_virilisation', 'high_testosterone'],
    },
    sources: [
      { label: 'NICE CKS — Hirsutism', url: 'https://cks.nice.org.uk/topics/hirsutism/' },
      { label: 'NICE CKS — PCOS', url: 'https://cks.nice.org.uk/topics/polycystic-ovary-syndrome/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'hirsutism', label: 'Hirsutism', triage: 'hirsutism-triage', dx: 'hirsutism-dx' }
  );
})();
