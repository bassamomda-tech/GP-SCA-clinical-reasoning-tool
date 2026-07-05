/* ============================================
   Diagnostic Tool pack — Diverticulitis / LIF pain
   Shared-id triage + differential. CKS Diverticular disease ·
   NICE NG147 · NICE NG12 (colorectal).
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'female', kind: 'check', label: 'Female (consider gynae causes)' },
    { group: 'Demographics & context', id: 'prev_divert', kind: 'check', label: 'Known diverticular disease' },
    { group: 'Demographics & context', id: 'immuno', kind: 'check', label: 'Immunosuppressed / frail' },

    { group: 'Pain pattern', id: 'lif_pain', kind: 'check', label: 'Left-iliac-fossa pain / tenderness' },
    { group: 'Pain pattern', id: 'fever', kind: 'check', label: 'Fever / feeling systemically unwell' },
    { group: 'Pain pattern', id: 'altered_bowel', kind: 'check', label: 'Altered bowel habit / bloating with the pain' },
    { group: 'Pain pattern', id: 'pr_bleed', kind: 'check', label: 'Rectal bleeding' },
    { group: 'Pain pattern', id: 'gynae', kind: 'check', label: 'Pelvic pain / discharge / menstrual or pregnancy link' },

    { group: 'Vitals', id: 'sbp', kind: 'number', label: 'Systolic BP', unit: 'mmHg', step: 1 },
    { group: 'Vitals', id: 'hr', kind: 'number', label: 'Heart rate', unit: '/min', step: 1 },

    { group: 'Complication red flags', id: 'peritonism', kind: 'check', label: 'Generalised peritonism / rigid abdomen' },
    { group: 'Complication red flags', id: 'mass_abscess', kind: 'check', label: 'Palpable mass / suspected abscess' },
    { group: 'Complication red flags', id: 'obstruction', kind: 'check', label: 'Vomiting / distension / no flatus (obstruction)' },

    { group: 'Cancer red flags', id: 'weight_loss', kind: 'check', label: 'Unintentional weight loss' },
    { group: 'Cancer red flags', id: 'change_persist', kind: 'check', label: 'Persistent change in bowel habit / anaemia' },
  ];

  if (window.RGPTriage) RGPTriage.register('diverticulitis-triage', {
    title: 'Diverticulitis / LIF pain — triage',
    subtitle: 'Tick features. Surfaces perforation/sepsis, complicated disease and colorectal 2WW pathways.',
    guideline: 'NICE NG147 · CKS · NG12',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. If uncomplicated acute diverticulitis: simple analgesia (avoid NSAID/opioid), clear fluids, consider no/▼ antibiotics per NICE NG147, safety-net; arrange colonoscopy after recovery if cancer not excluded.',
    rules: [
      {
        id: 'perforation', tier: 'emergency',
        label: 'Perforation / peritonitis / sepsis',
        action: 'Call 999 / same-day surgical admission — IV access, antibiotics, CT.',
        patientPhrase: '"Your tummy is very tender and you are unwell — this needs emergency surgical assessment now."',
        source: 'NICE NG147',
        when: i => i.peritonism || (i.sbp != null && i.sbp < 100) || (i.hr != null && i.hr > 110),
      },
      {
        id: 'complicated', tier: 'urgent',
        label: 'Complicated diverticulitis — abscess / obstruction / immunosuppressed not settling',
        action: 'Same-day admission for CT + IV antibiotics.',
        source: 'NICE NG147',
        when: i => i.mass_abscess || i.obstruction || (i.immuno && i.fever),
      },
      {
        id: 'crc_2ww', tier: 'cancer',
        label: 'Cancer red flags — weight loss / persistent change / anaemia / PR bleeding ≥50',
        action: 'Colonoscopy after acute episode; lower GI 2WW if red flags (NICE NG12).',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.weight_loss || i.change_persist || (i.pr_bleed && i.age != null && i.age >= 50),
      },
      {
        id: 'gynae', tier: 'urgent',
        label: 'Possible gynaecological cause in a woman',
        action: 'Pregnancy test; consider PID / ovarian pathology / ectopic; pelvic assessment.',
        source: 'CKS',
        when: i => i.female && i.gynae,
      },
      {
        id: 'uncomplicated', tier: 'routine',
        label: 'Uncomplicated acute diverticulitis / diverticular disease',
        action: 'Analgesia, fluids, ± antibiotics per NICE; safety-net; colonoscopy after recovery if not previously done.',
        source: 'NICE NG147',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG147 — Diverticular disease', url: 'https://www.nice.org.uk/guidance/ng147' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('diverticulitis-dx', {
    title: 'Left iliac fossa pain — differential diagnosis',
    subtitle: 'The engine weights acute diverticulitis against its mimics, and always surfaces complicated disease and colorectal cancer when triggered.',
    guideline: 'NICE NG147 · CKS',
    patientPresenting: "I've got this pain low down on the left side of my tummy, doctor, and I feel a bit off.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'diverticulitis', name: 'Acute diverticulitis (uncomplicated)', summary: 'LIF pain + tenderness + fever, known diverticula', baseline: 11, category: 'common',
        keyExam: 'LIF tenderness, low-grade fever, localised guarding.', nextIx: 'FBC/CRP; manage conservatively (NICE NG147); CT if diagnostic doubt / not settling.',
        patientPhrase: 'Small pouches in the bowel wall have become inflamed. Most settle with rest, fluids and simple measures.',
        ciksUrl: 'https://cks.nice.org.uk/topics/diverticular-disease/', caseLink: '../cases/diverticulosis.html' },
      { id: 'diverticular_disease', name: 'Diverticular disease (non-inflamed) / IBS', summary: 'Intermittent LIF pain, bloating, altered habit, no systemic upset', baseline: 7, category: 'common',
        keyExam: 'Mild LIF discomfort, no fever.', nextIx: 'Clinical; fibre, fluids, antispasmodic; exclude cancer if red flags.',
        patientPhrase: 'The bowel pouches are causing discomfort without infection. Fibre and fluids help, and there is no urgent danger.',
        ciksUrl: 'https://cks.nice.org.uk/topics/diverticular-disease/' },
      { id: 'gynae', name: 'Gynaecological cause', summary: 'Ovarian cyst / PID / ectopic in a woman of reproductive age', baseline: 4, category: 'less-common',
        keyExam: 'Pelvic/adnexal tenderness, cervical excitation, discharge.', nextIx: 'Pregnancy test, pelvic exam ± USS; STI screen if PID suspected.',
        patientPhrase: 'In women, the ovaries or womb can cause this pain too — a pregnancy test and examination help sort it out.',
        ciksUrl: 'https://cks.nice.org.uk/topics/pelvic-inflammatory-disease/' },
      { id: 'ischaemic', name: 'Ischaemic colitis', summary: 'Older, sudden LIF pain + bloody diarrhoea, vascular risk', baseline: 2, category: 'less-common',
        keyExam: 'Tenderness, bloody stool, vascular disease.', nextIx: 'Bloods, lactate; CT; usually supportive; admit if severe.',
        patientPhrase: 'A temporary drop in blood supply to the bowel can cause this — we check it carefully, especially given your circulation.',
        ciksUrl: 'https://cks.nice.org.uk/topics/diverticular-disease/' },
      { id: 'urinary', name: 'UTI / renal cause', summary: 'Dysuria / loin pain / haematuria', baseline: 2, category: 'less-common',
        keyExam: 'Suprapubic / renal-angle tenderness.', nextIx: 'Urine dip & culture; consider stones.',
        patientPhrase: 'A urine infection or stone can mimic bowel pain — a quick urine test helps tell them apart.',
        ciksUrl: 'https://cks.nice.org.uk/topics/lower-urinary-tract-infection/' },

      { id: 'complicated', name: 'Complicated diverticulitis', summary: 'Abscess / perforation / obstruction / peritonitis / sepsis', baseline: 1, category: 'cant-miss',
        keyExam: 'Peritonism, mass, distension, septic.', nextIx: '\u26A1 Same-day surgical admission — CT, IV antibiotics, ? drainage/surgery.',
        patientPhrase: 'The inflammation may have caused a complication that needs hospital treatment today.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng147', redFlagAction: '\u26A1 Same-day surgical admission' },
      { id: 'crc', name: 'Colorectal cancer', summary: 'Persistent change in habit, weight loss, anaemia, PR bleeding, age ≥50', baseline: 1, category: 'cant-miss',
        keyExam: 'Mass, cachexia, anaemia.', nextIx: '\u26A1 Lower GI 2WW; colonoscopy after a diverticulitis episode if not already excluded (NICE NG12).',
        patientPhrase: 'These features mean I want a specialist to examine the bowel to exclude cancer — most come back clear.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Lower GI 2WW' },
    ],
    effects: {
      age: (v) => v >= 60 ? { diverticulitis: +4, crc: +6, ischaemic: +4, gynae: -4 } : (v < 40 ? { gynae: +4, crc: -2 } : {}),
      female: { gynae: +5 },
      prev_divert: { diverticulitis: +10, diverticular_disease: +8 },
      immuno: { complicated: +6 },

      lif_pain: { diverticulitis: +12, diverticular_disease: +6 },
      fever: { diverticulitis: +12, complicated: +4 },
      altered_bowel: { diverticular_disease: +8, crc: +4 },
      pr_bleed: { ischaemic: +6, crc: +8 },
      gynae: { gynae: +20 },

      peritonism: { complicated: +30 },
      mass_abscess: { complicated: +22 },
      obstruction: { complicated: +16, crc: +6 },

      weight_loss: { crc: +18 },
      change_persist: { crc: +16 },
    },
    askAbout: {
      diverticulitis: ['lif_pain', 'fever', 'prev_divert'],
      diverticular_disease: ['altered_bowel'],
      gynae: ['gynae', 'female'],
      ischaemic: ['pr_bleed', 'age'],
      urinary: ['gynae'],
      complicated: ['peritonism', 'mass_abscess', 'obstruction'],
      crc: ['weight_loss', 'change_persist', 'age'],
    },
    sources: [
      { label: 'NICE NG147 — Diverticular disease', url: 'https://www.nice.org.uk/guidance/ng147' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'diverticulitis', label: 'Diverticulitis / LIF pain', triage: 'diverticulitis-triage', dx: 'diverticulitis-dx' }
  );
})();
