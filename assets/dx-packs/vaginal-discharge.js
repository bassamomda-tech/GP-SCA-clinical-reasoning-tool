/* ============================================
   Diagnostic Tool pack — Vaginal Discharge
   Shared-id triage + differential. BASHH 2023 · NICE CKS.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 12, max: 90, step: 1 },
    { group: 'Demographics & context', id: 'sti_risk', kind: 'check', label: 'STI risk (new/multiple partners, <25, partner symptoms)' },
    { group: 'Demographics & context', id: 'pregnant', kind: 'check', label: 'Pregnant' },

    { group: 'Discharge character', id: 'thin_grey_fishy', kind: 'check', label: 'Thin grey, fishy odour, non-itchy (BV)' },
    { group: 'Discharge character', id: 'thick_white_itch', kind: 'check', label: 'Thick white "curd", vulval itch/soreness (thrush)' },
    { group: 'Discharge character', id: 'frothy_yellow_itch', kind: 'check', label: 'Frothy yellow-green, itch, strawberry cervix (trichomonas)' },
    { group: 'Discharge character', id: 'mucopurulent_imb', kind: 'check', label: 'Mucopurulent / IMB / PCB / contact bleeding (chlamydia/gonorrhoea)' },

    { group: 'Red flags', id: 'pelvic_pain_fever', kind: 'check', label: 'Pelvic pain / deep dyspareunia / fever (PID)' },
    { group: 'Red flags', id: 'pregnant_ruptured', kind: 'check', label: 'Pregnant + fluid leak / offensive discharge (? rupture/chorioamnionitis)' },
    { group: 'Red flags', id: 'retained_foreign', kind: 'check', label: 'Offensive discharge + retained tampon / foreign body' },
  ];

  if (window.RGPTriage) RGPTriage.register('vaginal-discharge-triage', {
    title: 'Vaginal discharge — triage',
    subtitle: 'Tick features. Surfaces PID and pregnancy red flags; otherwise directs to the likely organism.',
    guideline: 'BASHH 2023 · CKS',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Risk-assess for STIs; treat BV/thrush clinically; STI risk → NAAT (chlamydia/gonorrhoea) ± exam/microscopy; partner notification where relevant.',
    rules: [
      {
        id: 'pid', tier: 'urgent',
        label: 'Possible PID — discharge + pelvic pain / deep dyspareunia / fever',
        action: 'Empirical PID antibiotics (low threshold); STI screen; contact tracing; admit if severe.',
        patientPhrase: '"This may be an infection spreading to the pelvic organs — I want to treat it promptly to protect your fertility."',
        source: 'BASHH PID',
        when: i => i.pelvic_pain_fever,
      },
      {
        id: 'pregnancy', tier: 'urgent',
        label: 'Pregnant with offensive discharge / fluid leak',
        action: 'Same-day obstetric assessment — exclude rupture of membranes / chorioamnionitis.',
        source: 'CKS',
        when: i => i.pregnant_ruptured,
      },
      {
        id: 'foreign_body', tier: 'urgent',
        label: 'Retained foreign body / tampon',
        action: 'Remove; consider toxic shock if systemically unwell.',
        source: 'CKS',
        when: i => i.retained_foreign,
      },
      {
        id: 'sti', tier: 'urgent',
        label: 'STI risk — test & treat',
        action: 'NAAT for chlamydia/gonorrhoea; treat per result; partner notification.',
        source: 'BASHH',
        when: i => i.sti_risk || i.mucopurulent_imb || i.frothy_yellow_itch,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'Non-STI discharge — treat by likely organism',
        action: 'BV → metronidazole; thrush → antifungal; reassure physiological discharge.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'BASHH — Vaginal discharge 2023', url: 'https://www.bashh.org/guidelines' },
      { label: 'NICE CKS — Vaginal discharge', url: 'https://cks.nice.org.uk/topics/vaginal-discharge/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('vaginal-discharge-dx', {
    title: 'Vaginal discharge — differential',
    subtitle: 'The engine weights BV, candida, trichomonas and chlamydia/gonorrhoea from the discharge character and risk, and always surfaces PID.',
    guideline: 'BASHH · CKS',
    patientPresenting: "I've got an abnormal discharge, doctor — it's bothering me.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'bv', name: 'Bacterial vaginosis', summary: 'Thin grey, fishy odour, non-itchy, pH >4.5', baseline: 9, category: 'common',
        keyExam: 'Homogeneous discharge; positive whiff test.', nextIx: 'Clinical ± microscopy; metronidazole.',
        patientPhrase: 'An imbalance of the normal vaginal bacteria. A short antibiotic course usually clears it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/bacterial-vaginosis/' },
      { id: 'candida', name: 'Vulvovaginal candidiasis (thrush)', summary: 'Thick white discharge, vulval itch/soreness', baseline: 8, category: 'common',
        keyExam: 'Vulval erythema, curd-like discharge.', nextIx: 'Clinical; antifungal (oral or pessary/cream).',
        patientPhrase: 'A yeast infection. Antifungal treatment settles the itch and discharge.',
        ciksUrl: 'https://cks.nice.org.uk/topics/candida-female-genital/' },
      { id: 'trichomonas', name: 'Trichomoniasis', summary: 'Frothy yellow-green, itch, strawberry cervix; STI', baseline: 3, category: 'less-common',
        keyExam: 'Frothy discharge, punctate cervix.', nextIx: 'NAAT/microscopy; metronidazole; treat partner; full STI screen.',
        patientPhrase: 'A sexually transmitted infection causing this discharge. Treatment for you and partners clears it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/trichomoniasis/' },
      { id: 'chlamydia_gonorrhoea', name: 'Chlamydia / gonorrhoea', summary: 'Mucopurulent, IMB/PCB, contact bleeding, STI risk', baseline: 5, category: 'common',
        keyExam: 'Mucopurulent cervicitis, contact bleeding.', nextIx: 'NAAT; treat per result; partner notification.',
        patientPhrase: 'A common sexually transmitted infection — often with few symptoms. A swab/urine test confirms it and treatment is simple.',
        ciksUrl: 'https://cks.nice.org.uk/topics/chlamydia-uncomplicated-genital/' },
      { id: 'physiological', name: 'Physiological discharge', summary: 'Normal cyclical discharge, no symptoms', baseline: 4, category: 'common',
        keyExam: 'Normal.', nextIx: 'Reassure.',
        patientPhrase: 'Some discharge is normal and varies through the cycle. If there is no infection, reassurance is all that is needed.',
        ciksUrl: 'https://cks.nice.org.uk/topics/vaginal-discharge/' },

      { id: 'pid', name: 'Pelvic inflammatory disease', summary: 'Discharge + pelvic pain / deep dyspareunia / fever', baseline: 1, category: 'cant-miss',
        keyExam: 'Cervical excitation, adnexal tenderness.', nextIx: '\u26A1 Empirical PID antibiotics (low threshold); STI screen; protect fertility.',
        patientPhrase: 'Infection spreading to the pelvic organs needs prompt antibiotics to protect your fertility.',
        ciksUrl: 'https://cks.nice.org.uk/topics/pelvic-inflammatory-disease/', redFlagAction: '\u26A1 Treat PID promptly' },
    ],
    effects: {
      age: (v) => v < 25 ? { chlamydia_gonorrhoea: +4 } : {},
      sti_risk: { chlamydia_gonorrhoea: +14, trichomonas: +8 },
      pregnant: { candida: +4, bv: +4 },

      thin_grey_fishy: { bv: +24 },
      thick_white_itch: { candida: +24 },
      frothy_yellow_itch: { trichomonas: +24 },
      mucopurulent_imb: { chlamydia_gonorrhoea: +22 },

      pelvic_pain_fever: { pid: +30 },
    },
    askAbout: {
      bv: ['thin_grey_fishy'],
      candida: ['thick_white_itch'],
      trichomonas: ['frothy_yellow_itch', 'sti_risk'],
      chlamydia_gonorrhoea: ['mucopurulent_imb', 'sti_risk'],
      physiological: ['age'],
      pid: ['pelvic_pain_fever'],
    },
    sources: [
      { label: 'BASHH — Vaginal discharge 2023', url: 'https://www.bashh.org/guidelines' },
      { label: 'NICE CKS — Vaginal discharge', url: 'https://cks.nice.org.uk/topics/vaginal-discharge/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'vaginal-discharge', label: 'Vaginal discharge', triage: 'vaginal-discharge-triage', dx: 'vaginal-discharge-dx' }
  );
})();
