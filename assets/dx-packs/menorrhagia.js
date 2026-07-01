/* ============================================
   Diagnostic Tool pack — Menorrhagia (heavy menstrual bleeding)
   Shared-id triage + differential. NICE NG88 · NICE NG12.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 80, step: 1 },
    { group: 'Bloods', id: 'anaemia', kind: 'check', label: 'Iron-deficiency anaemia' },

    { group: 'Pattern (PALM-COEIN)', id: 'regular_heavy', kind: 'check', label: 'Regular cycles, heavy but no other features' },
    { group: 'Pattern (PALM-COEIN)', id: 'bulk_pressure', kind: 'check', label: 'Bulk symptoms / palpable mass (fibroids)' },
    { group: 'Pattern (PALM-COEIN)', id: 'imb_pcb', kind: 'check', label: 'Intermenstrual / post-coital bleeding (polyp/structural)' },
    { group: 'Pattern (PALM-COEIN)', id: 'irregular', kind: 'check', label: 'Irregular cycles (anovulation / PCOS / perimenopause)' },
    { group: 'Pattern (PALM-COEIN)', id: 'dysmenorrhoea_dyspareunia', kind: 'check', label: 'Severe pain / deep dyspareunia (adenomyosis/endometriosis)' },
    { group: 'Pattern (PALM-COEIN)', id: 'bleeding_disorder', kind: 'check', label: 'Bleeding since menarche / FH / easy bruising (vWD)' },
    { group: 'Pattern (PALM-COEIN)', id: 'iud_anticoag', kind: 'check', label: 'Copper IUD / anticoagulant' },

    { group: 'Red flags', id: 'pmb_or_45_imb', kind: 'check', label: 'Postmenopausal bleeding, or persistent IMB / treatment failure ≥45' },
    { group: 'Red flags', id: 'cervix_suspicious', kind: 'check', label: 'Suspicious cervix on examination' },
  ];

  if (window.RGPTriage) RGPTriage.register('menorrhagia-triage', {
    title: 'Heavy menstrual bleeding — triage',
    subtitle: 'Tick features. Surfaces endometrial / cervical cancer pathways and structural referral (NICE NG88).',
    guideline: 'NICE NG88 · NG12',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. FBC (ferritin), pregnancy test; examine; consider USS if structural features. First-line treatment (no structural cause): LNG-IUS, then tranexamic/mefenamic acid or COC.',
    rules: [
      {
        id: 'endometrial_2ww', tier: 'cancer',
        label: 'Postmenopausal bleeding, or persistent IMB / HMB ≥45 not responding — endometrial pathway',
        action: 'Gynae 2WW + transvaginal USS (endometrial thickness).',
        patientPhrase: '"This pattern of bleeding needs an urgent specialist look at the womb lining to be safe."',
        source: 'NICE NG12 §1.7', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.pmb_or_45_imb,
      },
      {
        id: 'cervical', tier: 'cancer',
        label: 'Suspicious cervix — cervical cancer pathway',
        action: 'Urgent colposcopy / gynae 2WW (do not rely on smear).',
        source: 'NICE NG12',
        when: i => i.cervix_suspicious,
      },
      {
        id: 'structural', tier: 'urgent',
        label: 'Structural cause likely — fibroids / polyp / adenomyosis',
        action: 'Pelvic + transvaginal USS; gynae referral if large fibroids / structural lesion.',
        source: 'NICE NG88',
        when: i => i.bulk_pressure || i.imb_pcb || i.dysmenorrhoea_dyspareunia,
      },
      {
        id: 'bleeding_disorder', tier: 'urgent',
        label: 'Possible inherited bleeding disorder',
        action: 'Coagulation screen + von Willebrand studies; haematology.',
        source: 'NICE NG88',
        when: i => i.bleeding_disorder,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'HMB — assess & treat',
        action: 'FBC/ferritin; LNG-IUS first-line; tranexamic/mefenamic acid or COC; treat anaemia.',
        source: 'NICE NG88',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG88 — Heavy menstrual bleeding', url: 'https://www.nice.org.uk/guidance/ng88' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('menorrhagia-dx', {
    title: 'Heavy menstrual bleeding — differential (PALM-COEIN)',
    subtitle: 'The engine weights structural (fibroid, polyp, adenomyosis) and non-structural (ovulatory dysfunction, coagulopathy, iatrogenic, idiopathic) causes, and surfaces endometrial / cervical cancer.',
    guideline: 'NICE NG88 · FIGO PALM-COEIN',
    patientPresenting: "My periods have become really heavy, doctor — I'm flooding and exhausted.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'dub', name: 'Ovulatory / idiopathic HMB', summary: 'Regular heavy cycles, no structural cause', baseline: 11, category: 'common',
        keyExam: 'Normal exam.', nextIx: 'FBC/ferritin; LNG-IUS first-line; tranexamic/mefenamic acid or COC.',
        patientPhrase: 'Often there is no single cause and the lining simply sheds heavily. Effective treatments, especially the hormone coil, control it well.',
        ciksUrl: 'https://cks.nice.org.uk/topics/menorrhagia/' },
      { id: 'fibroids', name: 'Fibroids', summary: 'Bulk symptoms, palpable mass, pressure', baseline: 7, category: 'common',
        keyExam: 'Enlarged irregular uterus.', nextIx: 'Pelvic/TV USS; treatment by size/symptoms (medical, ablation, embolisation, surgery).',
        patientPhrase: 'Benign muscle growths in the womb cause heavy bleeding and pressure. Several treatments can shrink or remove them.',
        ciksUrl: 'https://cks.nice.org.uk/topics/fibroids/' },
      { id: 'adenomyosis', name: 'Adenomyosis / endometriosis', summary: 'Heavy + painful periods, deep dyspareunia, bulky tender uterus', baseline: 4, category: 'common',
        keyExam: 'Bulky tender uterus; pelvic tenderness.', nextIx: 'TV USS/MRI; LNG-IUS, hormonal treatment; gynae referral.',
        patientPhrase: 'Womb-lining tissue in the muscle causes heavy painful periods. Hormonal treatment usually helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/endometriosis/' },
      { id: 'polyp', name: 'Endometrial / cervical polyp', summary: 'Intermenstrual / post-coital bleeding', baseline: 3, category: 'less-common',
        keyExam: 'Polyp at cervix possibly.', nextIx: 'TV USS ± hysteroscopy; remove polyp.',
        patientPhrase: 'A small benign growth can cause bleeding between periods. It is easily removed.',
        ciksUrl: 'https://cks.nice.org.uk/topics/menorrhagia/' },
      { id: 'anovulation', name: 'Ovulatory dysfunction (PCOS / perimenopause)', summary: 'Irregular cycles', baseline: 4, category: 'common',
        keyExam: 'PCOS features / perimenopausal age.', nextIx: 'Cycle history; manage hormonally; still exclude endometrial cancer if risk factors.',
        patientPhrase: 'Irregular ovulation makes the lining build up and shed unpredictably. Hormonal regulation helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/menorrhagia/' },
      { id: 'coagulopathy', name: 'Bleeding disorder (vWD)', summary: 'Since menarche, FH, other bleeding', baseline: 2, category: 'less-common',
        keyExam: 'Bruising; bleeding score.', nextIx: 'Coagulation + vWF studies; haematology; tranexamic acid.',
        patientPhrase: 'A clotting disorder can cause heavy periods from the start. A blood test checks for it and treatment helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/menorrhagia/' },
      { id: 'iatrogenic', name: 'Iatrogenic', summary: 'Copper IUD, anticoagulant', baseline: 2, category: 'less-common',
        keyExam: 'Device / drug history.', nextIx: 'Review device/anticoagulant; alternatives.',
        patientPhrase: 'Your coil or blood thinner may be increasing bleeding. We can review the options.',
        ciksUrl: 'https://cks.nice.org.uk/topics/menorrhagia/' },

      { id: 'malignancy', name: 'Endometrial / cervical cancer', summary: 'PMB, persistent IMB ≥45, suspicious cervix', baseline: 1, category: 'cant-miss',
        keyExam: 'Suspicious cervix; bulky uterus.', nextIx: '\u26A1 Gynae 2WW + TV USS / colposcopy (NICE NG12).',
        patientPhrase: 'This bleeding pattern needs an urgent specialist assessment to exclude cancer — most are benign.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Gynae 2WW' },
    ],
    effects: {
      age: (v) => v >= 45 ? { anovulation: +6, malignancy: +4, fibroids: +3 } : (v < 30 ? { coagulopathy: +3 } : {}),
      anaemia: { dub: +2, fibroids: +2 },

      regular_heavy: { dub: +18 },
      bulk_pressure: { fibroids: +24 },
      imb_pcb: { polyp: +18, malignancy: +6 },
      irregular: { anovulation: +20 },
      dysmenorrhoea_dyspareunia: { adenomyosis: +22 },
      bleeding_disorder: { coagulopathy: +24 },
      iud_anticoag: { iatrogenic: +22 },

      pmb_or_45_imb: { malignancy: +24 },
      cervix_suspicious: { malignancy: +22 },
    },
    askAbout: {
      dub: ['regular_heavy'],
      fibroids: ['bulk_pressure'],
      adenomyosis: ['dysmenorrhoea_dyspareunia'],
      polyp: ['imb_pcb'],
      anovulation: ['irregular'],
      coagulopathy: ['bleeding_disorder'],
      iatrogenic: ['iud_anticoag'],
      malignancy: ['pmb_or_45_imb', 'cervix_suspicious'],
    },
    sources: [
      { label: 'NICE NG88 — Heavy menstrual bleeding', url: 'https://www.nice.org.uk/guidance/ng88' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'menorrhagia', label: 'Menorrhagia (HMB)', triage: 'menorrhagia-triage', dx: 'menorrhagia-dx' }
  );
})();
