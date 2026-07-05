/* ============================================
   Diagnostic Tool pack — Cough in Children
   Shared-id triage + differential. NICE NG143 · BTS/SIGN.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Age', id: 'age_years', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 18, step: 1 },

    { group: 'Pattern', id: 'coryzal_acute', kind: 'check', label: 'Coryza, short duration, well (viral URTI)' },
    { group: 'Pattern', id: 'barking_stridor', kind: 'check', label: 'Barking cough ± stridor, worse at night (croup)' },
    { group: 'Pattern', id: 'wheeze_infant', kind: 'check', label: 'Infant <1yr, coryza then wheeze/crackles + feeding difficulty (bronchiolitis)' },
    { group: 'Pattern', id: 'wheeze_recurrent', kind: 'check', label: 'Recurrent wheeze / nocturnal cough / triggers / atopy (asthma/viral wheeze)' },
    { group: 'Pattern', id: 'paroxysmal_whoop', kind: 'check', label: 'Paroxysmal cough + whoop/vomiting/apnoea (pertussis)' },
    { group: 'Pattern', id: 'chronic_wet', kind: 'check', label: 'Chronic wet cough >4–8 weeks / failure to thrive (chronic suppurative/TB/CF)' },

    { group: 'Red flags', id: 'pneumonia', kind: 'check', label: 'Fever + fast breathing / focal crackles / recession (pneumonia)' },
    { group: 'Red flags', id: 'foreign_body', kind: 'check', label: 'Sudden choking episode then cough/wheeze (inhaled foreign body)' },
    { group: 'Red flags', id: 'severe_distress', kind: 'check', label: 'Severe respiratory distress / cyanosis / exhaustion / SpO₂ <92%' },
  ];

  if (window.RGPTriage) RGPTriage.register('cough-children-triage', {
    title: 'Cough in children — triage',
    subtitle: 'Tick features. Surfaces respiratory distress, pneumonia and inhaled foreign body.',
    guideline: 'NICE NG143 · BTS/SIGN',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Most childhood cough is viral and self-limiting. Assess work of breathing + SpO₂; treat croup/asthma per pathway; safety-net for distress, chronic wet cough, foreign body.',
    rules: [
      {
        id: 'severe', tier: 'emergency',
        label: 'Severe respiratory distress / hypoxia',
        action: '999 / same-day — oxygen, urgent paediatric assessment.',
        patientPhrase: '"Your child is struggling to breathe — that needs emergency assessment now."',
        source: 'NICE NG143',
        when: i => i.severe_distress,
      },
      {
        id: 'foreign_body', tier: 'emergency',
        label: 'Possible inhaled foreign body — sudden choking then symptoms',
        action: 'Same-day — urgent paediatric/ENT (bronchoscopy); CXR.',
        source: 'BTS',
        when: i => i.foreign_body,
      },
      {
        id: 'pneumonia', tier: 'urgent',
        label: 'Possible pneumonia — fever + fast breathing / focal signs',
        action: 'Assess; antibiotics; admit if unwell/hypoxic (BTS).',
        source: 'BTS pneumonia',
        when: i => i.pneumonia,
      },
      {
        id: 'bronchiolitis', tier: 'urgent',
        label: 'Bronchiolitis — assess feeding & breathing',
        action: 'Supportive; admit if poor feeding (<50–75%) / apnoea / hypoxia / severe recession (NICE NG9).',
        source: 'NICE NG9',
        when: i => i.wheeze_infant,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'Croup / viral / asthma — manage',
        action: 'Croup → oral dexamethasone; asthma/viral wheeze → bronchodilator + plan; viral → safety-net; chronic wet cough → investigate.',
        source: 'NICE NG143',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG143 — Fever in under 5s', url: 'https://www.nice.org.uk/guidance/ng143' },
      { label: 'NICE NG9 — Bronchiolitis', url: 'https://www.nice.org.uk/guidance/ng9' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('cough-children-dx', {
    title: 'Cough in children — differential',
    subtitle: 'The engine weights viral URTI, croup, bronchiolitis, asthma/viral wheeze and pertussis, and always surfaces pneumonia and inhaled foreign body.',
    guideline: 'NICE NG143 · BTS/SIGN',
    patientPresenting: "My child's had a cough for a while, doctor.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'viral', name: 'Viral URTI', summary: 'Coryza, short, well', baseline: 12, category: 'common',
        keyExam: 'Coryza; clear chest.', nextIx: 'Reassure; safety-net; self-limiting.',
        patientPhrase: 'Most coughs are viral and clear over a week or two. We give you signs to watch for.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng143' },
      { id: 'croup', name: 'Croup', summary: 'Barking cough ± stridor, worse at night', baseline: 5, category: 'common',
        keyExam: 'Barking cough, stridor.', nextIx: 'Oral dexamethasone; safety-net for stridor at rest.',
        patientPhrase: 'A viral voice-box swelling causes the barking cough. A single steroid dose usually settles it.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng143' },
      { id: 'bronchiolitis', name: 'Bronchiolitis', summary: 'Infant, coryza then wheeze/crackles + feeding difficulty', baseline: 5, category: 'common',
        keyExam: 'Crackles/wheeze; assess feeding & SpO₂.', nextIx: 'Supportive; admit per NICE NG9 criteria.',
        patientPhrase: 'A common viral chest infection in babies. Most manage at home, but we watch feeding and breathing closely.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng9' },
      { id: 'asthma', name: 'Asthma / viral-induced wheeze', summary: 'Recurrent wheeze, nocturnal cough, triggers, atopy', baseline: 5, category: 'common',
        keyExam: 'Wheeze; response to bronchodilator.', nextIx: 'Bronchodilator trial; asthma plan; spacer technique.',
        patientPhrase: 'Recurrent wheezy cough suggests asthma or viral wheeze. Inhalers and a plan control it well.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng245' },
      { id: 'pertussis', name: 'Pertussis (whooping cough)', summary: 'Paroxysmal cough + whoop/vomiting/apnoea', baseline: 2, category: 'less-common',
        keyExam: 'Paroxysms, post-tussive vomiting.', nextIx: 'Test (PCR/serology); macrolide; notify; exclude vulnerable contacts.',
        patientPhrase: 'Whooping cough causes severe coughing fits. We test, treat, and protect vulnerable contacts.',
        ciksUrl: 'https://cks.nice.org.uk/topics/whooping-cough/' },

      { id: 'pneumonia', name: 'Pneumonia', summary: 'Fever + fast breathing / focal crackles / recession', baseline: 2, category: 'cant-miss',
        keyExam: 'Tachypnoea, focal crackles, recession.', nextIx: '\u26A1 Antibiotics; admit if unwell/hypoxic.',
        patientPhrase: 'A chest infection needing treatment, and hospital if your child is struggling.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng143', redFlagAction: '\u26A1 Treat ± admit' },
      { id: 'foreign_body', name: 'Inhaled foreign body', summary: 'Sudden choking then persistent cough/wheeze', baseline: 1, category: 'cant-miss',
        keyExam: 'Focal wheeze/reduced air entry.', nextIx: '\u26A1 Urgent paediatric/ENT; CXR; bronchoscopy.',
        patientPhrase: 'A sudden choking episode can mean something inhaled — that needs urgent assessment.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng143', redFlagAction: '\u26A1 Urgent ENT/paeds' },
    ],
    effects: {
      age_years: (v) => v != null && v < 1 ? { bronchiolitis: +8, croup: +2 } : (v >= 6 ? { asthma: +4, bronchiolitis: -6 } : {}),

      coryzal_acute: { viral: +20 },
      barking_stridor: { croup: +24 },
      wheeze_infant: { bronchiolitis: +24 },
      wheeze_recurrent: { asthma: +22 },
      paroxysmal_whoop: { pertussis: +26 },
      chronic_wet: { pneumonia: +6 },

      pneumonia: { pneumonia: +26 },
      foreign_body: { foreign_body: +30 },
      severe_distress: { pneumonia: +8, bronchiolitis: +6 },
    },
    askAbout: {
      viral: ['coryzal_acute'],
      croup: ['barking_stridor'],
      bronchiolitis: ['wheeze_infant'],
      asthma: ['wheeze_recurrent'],
      pertussis: ['paroxysmal_whoop'],
      pneumonia: ['pneumonia'],
      foreign_body: ['foreign_body'],
    },
    sources: [
      { label: 'NICE NG143 — Fever in under 5s', url: 'https://www.nice.org.uk/guidance/ng143' },
      { label: 'NICE NG9 — Bronchiolitis', url: 'https://www.nice.org.uk/guidance/ng9' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'cough-children', label: 'Cough in children', triage: 'cough-children-triage', dx: 'cough-children-dx' }
  );
})();
