/* ============================================
   Diagnostic Tool pack — Jaundice in adults
   Shared-id triage + differential (pre-hepatic / hepatic / post-hepatic).
   CKS Jaundice · BSG · NICE NG12.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'alcohol', kind: 'check', label: 'Alcohol excess' },
    { group: 'Demographics & context', id: 'drugs', kind: 'check', label: 'New hepatotoxic / haemolytic drug' },
    { group: 'Demographics & context', id: 'viral_risk', kind: 'check', label: 'Viral hepatitis risk (travel / IVDU / endemic)' },

    { group: 'Pattern clues', id: 'pale_dark', kind: 'check', label: 'Pale stools + dark urine (obstructive)' },
    { group: 'Pattern clues', id: 'itch', kind: 'check', label: 'Pruritus' },
    { group: 'Pattern clues', id: 'fasting_mild', kind: 'check', label: 'Mild intermittent jaundice with fasting / illness only' },
    { group: 'Pattern clues', id: 'anaemia_spleno', kind: 'check', label: 'Anaemia / splenomegaly / dark urine without pale stool (haemolysis)' },

    { group: 'Bloods', id: 'bilirubin', kind: 'number', label: 'Bilirubin', unit: 'µmol/L', step: 1 },
    { group: 'Bloods', id: 'alt', kind: 'number', label: 'ALT', unit: 'U/L', step: 1 },
    { group: 'Bloods', id: 'alp', kind: 'number', label: 'ALP', unit: 'U/L', step: 1 },

    { group: 'Red flags', id: 'fever_ruq', kind: 'check', label: 'Fever + RUQ pain (? cholangitis)' },
    { group: 'Red flags', id: 'painless_wl', kind: 'check', label: 'Painless jaundice + weight loss' },
    { group: 'Red flags', id: 'encephalopathy', kind: 'check', label: 'Confusion / drowsy / coagulopathy (liver failure)' },
  ];

  if (window.RGPTriage) RGPTriage.register('jaundice-triage', {
    title: 'Jaundice — red-flag triage',
    subtitle: 'Tick features / enter bloods. Surfaces acute liver failure, cholangitis and malignancy pathways.',
    guideline: 'CKS Jaundice · BSG · NG12',
    inputs: INPUTS,
    defaultMessage: 'No emergency rule fired. Classify by pattern (split bilirubin, ALT vs ALP), USS biliary tree, and run a liver screen; use the differential below.',
    rules: [
      {
        id: 'liver_failure', tier: 'emergency',
        label: 'Acute liver failure — jaundice + encephalopathy / coagulopathy',
        action: 'Same-day admission — hepatology, INR, glucose, paracetamol level.',
        patientPhrase: '"Your liver is failing acutely — this needs emergency hospital care today."',
        source: 'BSG / hepatology',
        when: i => i.encephalopathy,
      },
      {
        id: 'cholangitis', tier: 'emergency',
        label: 'Ascending cholangitis — fever + RUQ pain + jaundice',
        action: 'Same-day admission — IV antibiotics, urgent imaging, biliary drainage.',
        source: 'CKS Cholangitis',
        when: i => i.fever_ruq,
      },
      {
        id: 'malignancy_2ww', tier: 'cancer',
        label: 'Painless obstructive jaundice + weight loss — suspected pancreatic / biliary cancer',
        action: '2WW + urgent CT/USS.',
        patientPhrase: '"Painless jaundice with weight loss needs an urgent scan to find the cause."',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.painless_wl,
      },
      {
        id: 'obstruction', tier: 'urgent',
        label: 'Obstructive pattern (pale stool / dark urine / ALP↑)',
        action: 'Urgent USS biliary tree; refer per cause (stones vs stricture vs malignancy).',
        source: 'BSG',
        when: i => i.pale_dark || (i.alp != null && i.alp > 300),
      },
      {
        id: 'routine', tier: 'routine',
        label: 'No emergency features — classify and investigate',
        action: 'Split bilirubin, LFT pattern, liver screen, USS; Gilbert\u2019s if isolated unconjugated.',
        source: 'CKS Jaundice',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Jaundice in adults', url: 'https://cks.nice.org.uk/topics/jaundice-in-adults/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('jaundice-dx', {
    title: 'Jaundice — differential (pre / hepatic / post)',
    subtitle: 'The engine sorts jaundice into pre-hepatic, hepatic and post-hepatic causes from the pattern and clues, and always surfaces malignancy, cholangitis and liver failure when triggered.',
    guideline: 'CKS Jaundice · BSG',
    patientPresenting: "I've gone yellow, doctor — my partner noticed my eyes, and my urine's gone dark.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'gilbert', name: 'Gilbert\u2019s syndrome', summary: 'Mild unconjugated jaundice with fasting/illness, otherwise well', baseline: 6, category: 'common',
        keyExam: 'Normal exam.', nextIx: 'Isolated raised unconjugated bilirubin, normal LFTs/FBC/reticulocytes; reassure.',
        patientPhrase: 'This is a harmless inherited quirk where bilirubin rises a little when you are unwell or fasting — nothing needs treating.',
        ciksUrl: 'https://cks.nice.org.uk/topics/jaundice-in-adults/' },
      { id: 'haemolysis', name: 'Haemolysis (pre-hepatic)', summary: 'Unconjugated jaundice + anaemia + raised reticulocytes', baseline: 3, category: 'less-common',
        keyExam: 'Pallor, splenomegaly, dark urine (no pale stool).', nextIx: 'FBC, reticulocytes, LDH, haptoglobin, DAT, blood film; refer haematology.',
        patientPhrase: 'Red cells are breaking down faster than normal, releasing the yellow pigment. We find why and treat it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/anaemia-iron-deficiency/' },
      { id: 'alcohol', name: 'Alcoholic hepatitis / liver disease', summary: 'Alcohol history, hepatocellular pattern, tender hepatomegaly', baseline: 5, category: 'common',
        keyExam: 'Stigmata of chronic liver disease, tender liver.', nextIx: 'LFTs (AST:ALT >2), GGT, coagulation; abstinence; assess severity.',
        patientPhrase: 'Alcohol has inflamed the liver. Stopping alcohol is essential and we monitor liver function closely.',
        ciksUrl: 'https://cks.nice.org.uk/topics/alcohol-problem-drinking/' },
      { id: 'viral', name: 'Viral hepatitis', summary: 'Hepatocellular rise, risk factors, prodrome', baseline: 4, category: 'common',
        keyExam: 'Tender hepatomegaly; may be well.', nextIx: 'Hepatitis A/B/C ± E serology; supportive care; refer if chronic.',
        patientPhrase: 'A viral infection of the liver is causing this. Blood tests identify which, and most acute cases recover.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hepatitis-b/' },
      { id: 'drug', name: 'Drug-induced liver injury', summary: 'New hepatotoxic drug; resolves on withdrawal', baseline: 4, category: 'common',
        keyExam: 'Medication timeline.', nextIx: 'Medication review; stop offender; recheck LFTs.',
        patientPhrase: 'A medication is affecting the liver. Stopping it and rechecking usually shows recovery.',
        ciksUrl: 'https://cks.nice.org.uk/topics/jaundice-in-adults/' },
      { id: 'gallstones', name: 'Gallstone obstruction (post-hepatic)', summary: 'Cholestatic, RUQ pain, pale stool / dark urine / itch', baseline: 6, category: 'common',
        keyExam: 'RUQ tenderness, Murphy\u2019s.', nextIx: 'USS biliary tree; MRCP if duct dilatation; refer per cause.',
        patientPhrase: 'A gallstone is blocking the bile drainage. An ultrasound confirms it and treatment relieves the blockage.',
        ciksUrl: 'https://cks.nice.org.uk/topics/gallstones/' },

      { id: 'malignancy', name: 'Pancreatic / biliary malignancy', summary: 'Painless obstructive jaundice + weight loss', baseline: 1, category: 'cant-miss',
        keyExam: 'Cachexia, palpable gallbladder (Courvoisier), hepatomegaly.', nextIx: '\u26A1 2WW + urgent CT/USS (NICE NG12).',
        patientPhrase: 'Painless yellowing with weight loss needs an urgent scan to exclude a serious cause of the blockage.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 2WW + imaging' },
      { id: 'cholangitis', name: 'Ascending cholangitis', summary: 'Fever + RUQ pain + jaundice (Charcot\u2019s triad)', baseline: 1, category: 'cant-miss',
        keyExam: 'Fever, RUQ tenderness, septic.', nextIx: '\u26A1 Same-day admission — IV antibiotics, urgent biliary drainage.',
        patientPhrase: 'Infection has built up behind a blocked bile duct — that needs hospital antibiotics and drainage urgently.',
        ciksUrl: 'https://cks.nice.org.uk/topics/cholangitis/', redFlagAction: '\u26A1 Same-day admission' },
      { id: 'liver_failure', name: 'Acute liver failure', summary: 'Jaundice + encephalopathy / coagulopathy', baseline: 1, category: 'cant-miss',
        keyExam: 'Asterixis, drowsiness, bruising.', nextIx: '\u26A1 Same-day admission — INR, glucose, paracetamol level, hepatology.',
        patientPhrase: 'The liver is failing acutely — that is an emergency needing hospital care today.',
        ciksUrl: 'https://cks.nice.org.uk/topics/jaundice-in-adults/', redFlagAction: '\u26A1 Same-day admission' },
    ],
    effects: {
      age: (v) => v >= 60 ? { malignancy: +6, gallstones: +3 } : (v < 35 ? { gilbert: +4, viral: +3 } : {}),
      alcohol: { alcohol: +20 },
      drugs: { drug: +20 },
      viral_risk: { viral: +18 },

      pale_dark: { gallstones: +14, malignancy: +8, gilbert: -6, haemolysis: -8 },
      itch: { gallstones: +8, malignancy: +6 },
      fasting_mild: { gilbert: +20 },
      anaemia_spleno: { haemolysis: +24 },

      bilirubin: (v) => v != null && v > 100 ? { malignancy: +4, cholangitis: +3, liver_failure: +3 } : {},
      alt: (v) => v == null ? {} : (v > 400 ? { viral: +8, drug: +6, liver_failure: +6, alcohol: +4 } : (v > 100 ? { viral: +5, alcohol: +5, drug: +4 } : {})),
      alp: (v) => v != null && v > 300 ? { gallstones: +12, malignancy: +8 } : {},

      fever_ruq: { cholangitis: +28, gallstones: +6 },
      painless_wl: { malignancy: +28 },
      encephalopathy: { liver_failure: +30 },
    },
    askAbout: {
      gilbert: ['fasting_mild'],
      haemolysis: ['anaemia_spleno'],
      alcohol: ['alcohol', 'alt'],
      viral: ['viral_risk', 'alt'],
      drug: ['drugs'],
      gallstones: ['pale_dark', 'alp', 'itch'],
      malignancy: ['painless_wl'],
      cholangitis: ['fever_ruq'],
      liver_failure: ['encephalopathy'],
    },
    sources: [
      { label: 'NICE CKS — Jaundice in adults', url: 'https://cks.nice.org.uk/topics/jaundice-in-adults/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'jaundice', label: 'Jaundice in adults', triage: 'jaundice-triage', dx: 'jaundice-dx' }
  );
})();
