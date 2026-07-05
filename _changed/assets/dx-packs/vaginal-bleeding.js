/* ============================================
   Diagnostic Tool pack — Vaginal Bleeding (abnormal)
   Shared-id triage + differential. NICE NG12 · CKS.
   Covers postmenopausal, pregnancy-related, and non-pregnancy AUB.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 10, max: 90, step: 1 },
    { group: 'Demographics & context', id: 'postmenopausal', kind: 'check', label: 'Postmenopausal' },
    { group: 'Demographics & context', id: 'on_hrt', kind: 'check', label: 'On HRT / tamoxifen' },

    { group: 'Pregnancy', id: 'preg_possible', kind: 'check', label: 'Pregnant / could be pregnant' },
    { group: 'Pregnancy', id: 'early_preg_pain', kind: 'check', label: 'Early pregnancy + pain / shoulder tip / collapse (ectopic)' },

    { group: 'Pattern', id: 'pcb', kind: 'check', label: 'Post-coital bleeding' },
    { group: 'Pattern', id: 'imb', kind: 'check', label: 'Intermenstrual bleeding' },
    { group: 'Pattern', id: 'discharge_sti', kind: 'check', label: 'Discharge / STI risk (cervicitis)' },
    { group: 'Pattern', id: 'contraception', kind: 'check', label: 'Hormonal contraception / missed pills' },
    { group: 'Pattern', id: 'cervical_lesion', kind: 'check', label: 'Visible cervical lesion / friable cervix' },

    { group: 'Red flags', id: 'heavy_unstable', kind: 'check', label: 'Heavy bleeding + haemodynamic instability' },
  ];

  if (window.RGPTriage) RGPTriage.register('vaginal-bleeding-triage', {
    title: 'Abnormal vaginal bleeding — triage',
    subtitle: 'Tick features. Surfaces ectopic, haemorrhage, and endometrial / cervical cancer pathways.',
    guideline: 'NICE NG12 · CKS',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Pregnancy test if reproductive age; examine cervix; categorise (PMB vs IMB/PCB vs pregnancy-related) and investigate accordingly.',
    rules: [
      {
        id: 'haemorrhage', tier: 'emergency',
        label: 'Heavy bleeding with haemodynamic instability',
        action: 'Call 999 / same-day — resuscitate; gynae/obstetric emergency.',
        source: 'CKS',
        when: i => i.heavy_unstable,
      },
      {
        id: 'ectopic', tier: 'emergency',
        label: 'Early pregnancy + pain / collapse — exclude ectopic',
        action: 'Same-day early pregnancy unit — pregnancy test, USS, hCG.',
        patientPhrase: '"Bleeding and pain in early pregnancy needs urgent assessment to exclude an ectopic today."',
        source: 'CKS Ectopic',
        when: i => i.early_preg_pain || (i.preg_possible && i.heavy_unstable),
      },
      {
        id: 'pmb_2ww', tier: 'cancer',
        label: 'Postmenopausal bleeding — endometrial 2WW',
        action: 'Gynae 2WW + TV USS (endometrial thickness); unscheduled bleeding on HRT/tamoxifen also needs assessment.',
        patientPhrase: '"Any bleeding after the menopause must be referred urgently — most causes are benign, but we do not wait."',
        source: 'NICE NG12 §1.7', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.postmenopausal,
      },
      {
        id: 'cervical_2ww', tier: 'cancer',
        label: 'Visible cervical lesion / persistent PCB — cervical pathway',
        action: 'Urgent colposcopy / gynae 2WW (do not wait for smear).',
        source: 'NICE NG12',
        when: i => i.cervical_lesion || i.pcb,
      },
      {
        id: 'assess', tier: 'routine',
        label: 'Abnormal bleeding — assess & investigate',
        action: 'Pregnancy test; STI screen if risk; examine; TV USS / referral per pattern.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE CKS — Postmenopausal bleeding', url: 'https://cks.nice.org.uk/topics/menopause/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('vaginal-bleeding-dx', {
    title: 'Abnormal vaginal bleeding — differential',
    subtitle: 'The engine weights cause by life stage — pregnancy-related, cervical/structural, hormonal — and always surfaces endometrial and cervical cancer and ectopic pregnancy.',
    guideline: 'NICE NG12 · CKS',
    patientPresenting: "I've had some unexpected vaginal bleeding, doctor, and I'm worried.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'hormonal', name: 'Hormonal / contraception-related', summary: 'Breakthrough bleeding on contraception, anovulatory', baseline: 9, category: 'common',
        keyExam: 'Normal exam.', nextIx: 'Review method/adherence; reassure; settle over 3 months.',
        patientPhrase: 'Hormonal contraception commonly causes irregular spotting. It usually settles or we can adjust it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/menopause/' },
      { id: 'cervical_benign', name: 'Cervical ectropion / polyp / cervicitis', summary: 'PCB, discharge, STI risk', baseline: 6, category: 'common',
        keyExam: 'Ectropion / polyp / friable cervix.', nextIx: 'STI screen; treat; persistent PCB → colposcopy.',
        patientPhrase: 'A benign change on the cervix or an infection can cause bleeding after sex. We examine and treat it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/cervical-screening/' },
      { id: 'pregnancy_related', name: 'Pregnancy-related (miscarriage threat)', summary: 'Pregnant, bleeding ± pain', baseline: 4, category: 'common',
        keyExam: 'Pregnancy; assess stability.', nextIx: 'Pregnancy test; early pregnancy unit / USS + hCG.',
        patientPhrase: 'In pregnancy, bleeding needs assessment to check the pregnancy and exclude an ectopic.',
        ciksUrl: 'https://cks.nice.org.uk/topics/miscarriage/' },
      { id: 'structural', name: 'Fibroid / endometrial polyp', summary: 'HMB/IMB, bulky uterus', baseline: 4, category: 'common',
        keyExam: 'Enlarged uterus.', nextIx: 'TV USS ± hysteroscopy.',
        patientPhrase: 'A benign growth in the womb can cause abnormal bleeding. A scan identifies it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/fibroids/' },
      { id: 'atrophy', name: 'Atrophic vaginitis', summary: 'Postmenopausal, dryness, light bleeding — diagnosis of exclusion', baseline: 3, category: 'less-common',
        keyExam: 'Atrophic vaginal mucosa.', nextIx: 'Only after endometrial cancer excluded; topical oestrogen.',
        patientPhrase: 'Thinning of the tissues after menopause can bleed — but we must first rule out other causes.',
        ciksUrl: 'https://cks.nice.org.uk/topics/menopause/' },

      { id: 'endometrial_cancer', name: 'Endometrial cancer', summary: 'Postmenopausal bleeding, unscheduled HRT bleeding', baseline: 1, category: 'cant-miss',
        keyExam: 'Risk factors (obesity, tamoxifen).', nextIx: '\u26A1 Gynae 2WW + TV USS / hysteroscopy (NICE NG12).',
        patientPhrase: 'Bleeding after menopause must be urgently checked to exclude womb cancer — most prove benign.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Gynae 2WW' },
      { id: 'cervical_cancer', name: 'Cervical cancer', summary: 'Persistent PCB / IMB, visible lesion', baseline: 1, category: 'cant-miss',
        keyExam: 'Suspicious / friable cervix.', nextIx: '\u26A1 Urgent colposcopy / gynae 2WW.',
        patientPhrase: 'Persistent bleeding after sex needs an urgent look at the cervix to exclude cancer.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Colposcopy / 2WW' },
      { id: 'ectopic', name: 'Ectopic pregnancy', summary: 'Early pregnancy + pain / collapse', baseline: 1, category: 'cant-miss',
        keyExam: 'Adnexal tenderness, shock.', nextIx: '\u26A1 Same-day early pregnancy unit — USS + hCG.',
        patientPhrase: 'Bleeding and pain in early pregnancy can mean an ectopic — an emergency we assess today.',
        ciksUrl: 'https://cks.nice.org.uk/topics/ectopic-pregnancy/', redFlagAction: '\u26A1 Same-day EPU' },
    ],
    effects: {
      age: (v) => v >= 55 ? { atrophy: +4, endometrial_cancer: +4 } : {},
      postmenopausal: { endometrial_cancer: +18, atrophy: +10, hormonal: -8 },
      on_hrt: { hormonal: +6, endometrial_cancer: +4 },

      preg_possible: { pregnancy_related: +16 },
      early_preg_pain: { ectopic: +30 },

      pcb: { cervical_benign: +12, cervical_cancer: +10 },
      imb: { hormonal: +6, structural: +6, endometrial_cancer: +3 },
      discharge_sti: { cervical_benign: +12 },
      contraception: { hormonal: +20 },
      cervical_lesion: { cervical_cancer: +22 },

      heavy_unstable: { pregnancy_related: +6 },
    },
    askAbout: {
      hormonal: ['contraception'],
      cervical_benign: ['pcb', 'discharge_sti'],
      pregnancy_related: ['preg_possible'],
      structural: ['imb'],
      atrophy: ['postmenopausal'],
      endometrial_cancer: ['postmenopausal'],
      cervical_cancer: ['cervical_lesion', 'pcb'],
      ectopic: ['early_preg_pain'],
    },
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE CKS — Ectopic pregnancy', url: 'https://cks.nice.org.uk/topics/ectopic-pregnancy/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'vaginal-bleeding', label: 'Vaginal bleeding', triage: 'vaginal-bleeding-triage', dx: 'vaginal-bleeding-dx' }
  );
})();
