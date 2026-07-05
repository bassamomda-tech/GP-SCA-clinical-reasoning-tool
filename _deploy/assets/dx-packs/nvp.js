/* ============================================
   Diagnostic Tool pack — Nausea & Vomiting in Pregnancy
   Shared-id triage + differential. RCOG GTG 69 · NICE NG201.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Gestation', id: 'gestation', kind: 'number', label: 'Gestation', unit: 'weeks', min: 4, max: 42, step: 1 },

    { group: 'Severity (PUQE / dehydration)', id: 'tolerating', kind: 'check', label: 'Tolerating some oral fluids' },
    { group: 'Severity (PUQE / dehydration)', id: 'unable_fluids', kind: 'check', label: 'Unable to keep fluids down' },
    { group: 'Severity (PUQE / dehydration)', id: 'ketonuria', kind: 'check', label: 'Ketonuria / signs of dehydration' },
    { group: 'Severity (PUQE / dehydration)', id: 'weight_loss', kind: 'check', label: 'Weight loss >5% of pre-pregnancy weight' },

    { group: 'Atypical features', id: 'late_onset', kind: 'check', label: 'New onset after 11 weeks / very severe' },
    { group: 'Atypical features', id: 'abdo_pain_fever', kind: 'check', label: 'Abdominal pain / fever / diarrhoea (other cause)' },
    { group: 'Atypical features', id: 'urinary_sx', kind: 'check', label: 'Dysuria / loin pain (UTI)' },
    { group: 'Atypical features', id: 'molar_features', kind: 'check', label: 'Very high hCG / large uterus / early severe (molar/multiple)' },
    { group: 'Atypical features', id: 'thyroid_sx', kind: 'check', label: 'Thyroid symptoms' },
  ];

  if (window.RGPTriage) RGPTriage.register('nvp-triage', {
    title: 'Nausea & vomiting in pregnancy — triage',
    subtitle: 'Tick severity. Surfaces hyperemesis admission and atypical-cause pathways.',
    guideline: 'RCOG GTG 69 · NICE NG201',
    inputs: INPUTS,
    defaultMessage: 'No admission rule fired. Mild–moderate NVP: oral antiemetic (cyclizine/promethazine → prochlorperazine/metoclopramide → ondansetron), hydration, dietary advice; ensure folic acid; safety-net.',
    rules: [
      {
        id: 'admit', tier: 'emergency',
        label: 'Hyperemesis gravidarum — unable to keep fluids down + ketonuria / weight loss',
        action: 'Same-day admission / ambulatory unit — IV fluids, IV antiemetics, thiamine, VTE prophylaxis.',
        patientPhrase: '"You are too dehydrated to manage at home — you need a drip and stronger anti-sickness treatment today."',
        source: 'RCOG GTG 69',
        when: i => i.unable_fluids || (i.ketonuria && i.weight_loss),
      },
      {
        id: 'other_cause', tier: 'urgent',
        label: 'Atypical — exclude another cause (UTI, GI, molar, thyroid)',
        action: 'Urine dip/culture; consider USS (molar/multiple) if very severe/early; TFT if thyroid features.',
        source: 'RCOG GTG 69',
        when: i => i.abdo_pain_fever || i.urinary_sx || i.molar_features || i.late_onset || i.thyroid_sx,
      },
      {
        id: 'moderate', tier: 'urgent',
        label: 'Moderate NVP with some dehydration / ketonuria',
        action: 'Oral/buccal antiemetic; consider ambulatory IV fluids; review next day.',
        source: 'RCOG GTG 69',
        when: i => i.ketonuria,
      },
      {
        id: 'mild', tier: 'routine',
        label: 'Mild–moderate NVP',
        action: 'Antiemetic ladder; dietary measures; reassure (usually settles by 16–20 weeks).',
        source: 'NICE NG201',
        when: i => true,
      },
    ],
    sources: [
      { label: 'RCOG GTG 69 — NVP & hyperemesis', url: 'https://www.rcog.org.uk/guidance/' },
      { label: 'NICE NG201 — Antenatal care', url: 'https://www.nice.org.uk/guidance/ng201' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('nvp-dx', {
    title: 'Vomiting in pregnancy — differential',
    subtitle: 'The engine grades NVP vs hyperemesis and weights alternative causes (UTI, GI, molar/multiple, thyroid) that need excluding when features are atypical.',
    guideline: 'RCOG GTG 69 · NICE NG201',
    patientPresenting: "I can't stop being sick, doctor — I'm early in pregnancy and it's relentless.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'nvp', name: 'Nausea & vomiting of pregnancy', summary: 'First trimester, tolerating fluids, no dehydration', baseline: 12, category: 'common',
        keyExam: 'Well hydrated; no abdominal signs.', nextIx: 'Antiemetic ladder; dietary advice; reassure.',
        patientPhrase: 'Common early-pregnancy sickness, driven by pregnancy hormones. It usually eases by 16–20 weeks and treatment helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/nausea-vomiting-in-pregnancy/' },
      { id: 'hyperemesis', name: 'Hyperemesis gravidarum', summary: 'Protracted vomiting + dehydration + ketosis + >5% weight loss', baseline: 4, category: 'cant-miss',
        keyExam: 'Dehydration, ketonuria, weight loss.', nextIx: '\u26A1 Admission / ambulatory IV fluids + antiemetics + thiamine; VTE prophylaxis.',
        patientPhrase: 'This severe form causes dehydration and needs intravenous fluids and stronger treatment — usually in hospital.',
        ciksUrl: 'https://cks.nice.org.uk/topics/nausea-vomiting-in-pregnancy/', redFlagAction: '\u26A1 Admit for IV therapy' },
      { id: 'uti', name: 'UTI', summary: 'Dysuria / loin pain', baseline: 3, category: 'common',
        keyExam: 'Suprapubic / renal-angle tenderness.', nextIx: 'Urine dip + culture; pregnancy-safe antibiotic.',
        patientPhrase: 'A urine infection can cause vomiting in pregnancy. A urine test confirms it and we treat it safely.',
        ciksUrl: 'https://cks.nice.org.uk/topics/urinary-tract-infection-lower-women/' },
      { id: 'gi', name: 'Gastroenteritis / GI cause', summary: 'Diarrhoea, fever, abdominal pain', baseline: 3, category: 'common',
        keyExam: 'Abdominal exam.', nextIx: 'Hydration; usually self-limiting; reassess.',
        patientPhrase: 'A tummy bug can cause sickness alongside the pregnancy. It usually settles with fluids.',
        ciksUrl: 'https://cks.nice.org.uk/topics/gastroenteritis/' },
      { id: 'molar_multiple', name: 'Molar / multiple pregnancy', summary: 'Very high hCG, large uterus, severe early symptoms', baseline: 1, category: 'less-common',
        keyExam: 'Uterus large for dates.', nextIx: 'USS; treat per finding.',
        patientPhrase: 'Very severe early sickness occasionally signals a molar or twin pregnancy — a scan checks this.',
        ciksUrl: 'https://cks.nice.org.uk/topics/nausea-vomiting-in-pregnancy/' },
      { id: 'thyroid', name: 'Thyroid dysfunction', summary: 'Thyroid symptoms (hCG-mediated or Graves)', baseline: 1, category: 'less-common',
        keyExam: 'Tremor, tachycardia, goitre.', nextIx: 'TFT; specialist input if abnormal.',
        patientPhrase: 'An overactive thyroid can worsen sickness. A blood test checks for it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyperthyroidism/' },
    ],
    effects: {
      gestation: (v) => v == null ? {} : (v > 16 ? { nvp: -4, gi: +4, uti: +4 } : { nvp: +4 }),

      tolerating: { nvp: +12, hyperemesis: -8 },
      unable_fluids: { hyperemesis: +20 },
      ketonuria: { hyperemesis: +12 },
      weight_loss: { hyperemesis: +14 },

      late_onset: { gi: +6, uti: +6, nvp: -6 },
      abdo_pain_fever: { gi: +18 },
      urinary_sx: { uti: +22 },
      molar_features: { molar_multiple: +24 },
      thyroid_sx: { thyroid: +22 },
    },
    askAbout: {
      nvp: ['tolerating', 'gestation'],
      hyperemesis: ['unable_fluids', 'ketonuria', 'weight_loss'],
      uti: ['urinary_sx'],
      gi: ['abdo_pain_fever'],
      molar_multiple: ['molar_features'],
      thyroid: ['thyroid_sx'],
    },
    sources: [
      { label: 'RCOG GTG 69 — NVP & hyperemesis', url: 'https://www.rcog.org.uk/guidance/' },
      { label: 'NICE CKS — NVP', url: 'https://cks.nice.org.uk/topics/nausea-vomiting-in-pregnancy/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'nvp', label: 'Nausea & vomiting in pregnancy', triage: 'nvp-triage', dx: 'nvp-dx' }
  );
})();
