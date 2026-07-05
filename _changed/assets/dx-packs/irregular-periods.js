/* ============================================
   Diagnostic Tool pack — Irregular Periods (oligomenorrhoea / AUB)
   Shared-id triage + differential. CKS · NICE NG12.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 10, max: 60, step: 1 },
    { group: 'Demographics & context', id: 'preg_possible', kind: 'check', label: 'Pregnancy possible (always test)' },
    { group: 'Demographics & context', id: 'contraception', kind: 'check', label: 'Hormonal contraception / recent change' },

    { group: 'PCOS', id: 'pcos_features', kind: 'check', label: 'Acne / hirsutism / obesity / subfertility' },
    { group: 'Thyroid / prolactin', id: 'thyroid_sx', kind: 'check', label: 'Thyroid symptoms' },
    { group: 'Thyroid / prolactin', id: 'galactorrhoea', kind: 'check', label: 'Galactorrhoea / headache / visual field loss (prolactin)' },
    { group: 'Hypothalamic', id: 'low_weight_stress', kind: 'check', label: 'Low BMI / excessive exercise / stress (hypothalamic)' },
    { group: 'Perimenopause', id: 'vasomotor_45', kind: 'check', label: 'Age ≥45 + flushes / cycle change (perimenopause)' },

    { group: 'Red flags', id: 'imb_pcb', kind: 'check', label: 'Persistent IMB / PCB' },
    { group: 'Red flags', id: 'pmb_or_endo_risk', kind: 'check', label: 'PMB, or ≥45 with persistent AUB / unopposed-oestrogen risk' },
  ];

  if (window.RGPTriage) RGPTriage.register('irregular-periods-triage', {
    title: 'Irregular periods — triage',
    subtitle: 'Tick features. Always exclude pregnancy; surfaces endometrial pathway and prolactinoma.',
    guideline: 'CKS · NICE NG12',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Pregnancy test first; assess by likely cause (PCOS, thyroid, prolactin, perimenopause, hypothalamic); treat cause / regulate cycle.',
    rules: [
      {
        id: 'endometrial_2ww', tier: 'cancer',
        label: 'PMB, or ≥45 with persistent AUB / IMB / unopposed-oestrogen risk — endometrial pathway',
        action: 'Gynae 2WW + TV USS (NICE NG12).',
        source: 'NICE NG12 §1.7', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.pmb_or_endo_risk,
      },
      {
        id: 'prolactinoma', tier: 'urgent',
        label: 'Galactorrhoea + headache / visual field loss — ? prolactinoma',
        action: 'Prolactin; if very high or visual symptoms → pituitary MRI + endocrine.',
        source: 'CKS',
        when: i => i.galactorrhoea,
      },
      {
        id: 'imb', tier: 'urgent',
        label: 'Persistent IMB / PCB — exclude structural / cervical cause',
        action: 'Examine cervix; TV USS ± referral; STI screen.',
        source: 'CKS',
        when: i => i.imb_pcb,
      },
      {
        id: 'assess', tier: 'routine',
        label: 'Irregular cycles — investigate cause',
        action: 'Pregnancy test; TFT, prolactin, FSH/LH, testosterone/SHBG; pelvic USS if needed; manage by cause.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Amenorrhoea', url: 'https://cks.nice.org.uk/topics/amenorrhoea/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('irregular-periods-dx', {
    title: 'Irregular periods — differential',
    subtitle: 'The engine weights PCOS, thyroid, hyperprolactinaemia, perimenopause and hypothalamic causes, always excluding pregnancy and surfacing endometrial cancer when risk fires.',
    guideline: 'CKS · NICE NG12',
    patientPresenting: "My periods have become really unpredictable, doctor — sometimes weeks apart.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'pcos', name: 'PCOS', summary: 'Oligomenorrhoea + hyperandrogenism / obesity / subfertility', baseline: 11, category: 'common',
        keyExam: 'Acne, hirsutism, BMI.', nextIx: 'Rotterdam criteria; testosterone/SHBG, LH/FSH, USS; metabolic screen.',
        patientPhrase: 'PCOS is the commonest cause — a hormonal imbalance affecting ovulation. We manage symptoms and longer-term risks.',
        ciksUrl: 'https://cks.nice.org.uk/topics/polycystic-ovary-syndrome/', caseLink: '../cases/pcos.html' },
      { id: 'thyroid', name: 'Thyroid dysfunction', summary: 'Hyper- or hypothyroid features', baseline: 4, category: 'common',
        keyExam: 'Thyroid signs.', nextIx: 'TSH ± FT4; treat.',
        patientPhrase: 'A thyroid imbalance can disrupt periods. A blood test checks it and treatment regularises cycles.',
        ciksUrl: 'https://cks.nice.org.uk/topics/amenorrhoea/' },
      { id: 'hyperprolactinaemia', name: 'Hyperprolactinaemia', summary: 'Galactorrhoea, ± headache / visual symptoms', baseline: 3, category: 'less-common',
        keyExam: 'Galactorrhoea, visual fields.', nextIx: 'Prolactin; pituitary MRI if high; endocrine.',
        patientPhrase: 'A raised prolactin hormone can stop periods. We check it and look for the cause.',
        ciksUrl: 'https://cks.nice.org.uk/topics/amenorrhoea/' },
      { id: 'perimenopause', name: 'Perimenopause', summary: 'Age ≥45, vasomotor symptoms, cycle change', baseline: 5, category: 'common',
        keyExam: 'Age, vasomotor symptoms.', nextIx: 'Clinical >45; manage symptoms / HRT; still investigate AUB red flags.',
        patientPhrase: 'Around the menopause cycles naturally become irregular. We manage symptoms and stay alert to red flags.',
        ciksUrl: 'https://cks.nice.org.uk/topics/menopause/' },
      { id: 'hypothalamic', name: 'Hypothalamic (low weight / stress / exercise)', summary: 'Low BMI, athletes, stress', baseline: 3, category: 'less-common',
        keyExam: 'Low BMI.', nextIx: 'Low FSH/LH; address energy balance; bone health.',
        patientPhrase: 'Low body weight, heavy exercise or stress can switch off the cycle. Restoring balance usually restarts it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/amenorrhoea/' },
      { id: 'iatrogenic', name: 'Contraception-related', summary: 'Progestogen / recent method change', baseline: 4, category: 'common',
        keyExam: 'Contraceptive history.', nextIx: 'Reassure; review method; settle over 3–6 months.',
        patientPhrase: 'Your contraception commonly changes the bleeding pattern. It often settles or we can adjust it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/amenorrhoea/' },

      { id: 'endometrial', name: 'Endometrial hyperplasia / cancer', summary: 'PMB, ≥45 persistent AUB, unopposed-oestrogen risk', baseline: 1, category: 'cant-miss',
        keyExam: 'Risk factors (obesity, PCOS, nulliparity).', nextIx: '\u26A1 Gynae 2WW + TV USS / hysteroscopy (NICE NG12).',
        patientPhrase: 'Persistent abnormal bleeding at your age needs an urgent specialist check of the womb lining.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Gynae 2WW' },
    ],
    effects: {
      age: (v) => v >= 45 ? { perimenopause: +12, endometrial: +4, pcos: -4 } : (v < 20 ? { pcos: +2 } : {}),
      contraception: { iatrogenic: +18 },

      pcos_features: { pcos: +22 },
      thyroid_sx: { thyroid: +20 },
      galactorrhoea: { hyperprolactinaemia: +24 },
      low_weight_stress: { hypothalamic: +22 },
      vasomotor_45: { perimenopause: +18 },

      imb_pcb: { endometrial: +8 },
      pmb_or_endo_risk: { endometrial: +24 },
    },
    askAbout: {
      pcos: ['pcos_features'],
      thyroid: ['thyroid_sx'],
      hyperprolactinaemia: ['galactorrhoea'],
      perimenopause: ['vasomotor_45', 'age'],
      hypothalamic: ['low_weight_stress'],
      iatrogenic: ['contraception'],
      endometrial: ['pmb_or_endo_risk', 'imb_pcb'],
    },
    sources: [
      { label: 'NICE CKS — Amenorrhoea', url: 'https://cks.nice.org.uk/topics/amenorrhoea/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'irregular-periods', label: 'Irregular periods', triage: 'irregular-periods-triage', dx: 'irregular-periods-dx' }
  );
})();
