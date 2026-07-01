/* ============================================
   Diagnostic Tool pack — Abnormal LFTs
   Shared-id triage + differential. Numeric pattern (ALT vs ALP) drives
   the differential via function-effects. Grounded in BSG abnormal LFT
   guideline · CKS · NICE NG49/MASLD.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'metabolic', kind: 'check', label: 'Obesity / type 2 diabetes / metabolic syndrome' },
    { group: 'Demographics & context', id: 'alcohol', kind: 'check', label: 'Alcohol excess' },
    { group: 'Demographics & context', id: 'drugs', kind: 'check', label: 'New hepatotoxic drug (statin, antibiotic, anti-TB, methotrexate, herbal)' },
    { group: 'Demographics & context', id: 'viral_risk', kind: 'check', label: 'Viral hepatitis risk (travel, IVDU, transfusion, endemic area)' },
    { group: 'Demographics & context', id: 'autoimmune', kind: 'check', label: 'Personal/FH autoimmune disease' },
    { group: 'Demographics & context', id: 'fh_iron', kind: 'check', label: 'FH haemochromatosis / iron overload' },

    { group: 'Liver enzymes', id: 'alt', kind: 'number', label: 'ALT', unit: 'U/L', step: 1, note: 'ULN ~40' },
    { group: 'Liver enzymes', id: 'alp', kind: 'number', label: 'ALP', unit: 'U/L', step: 1, note: 'ULN ~130' },
    { group: 'Liver enzymes', id: 'ggt', kind: 'number', label: 'GGT', unit: 'U/L', step: 1 },
    { group: 'Liver enzymes', id: 'bilirubin', kind: 'number', label: 'Bilirubin', unit: 'µmol/L', step: 1 },

    { group: 'Clinical features', id: 'jaundice', kind: 'check', label: 'Jaundice' },
    { group: 'Clinical features', id: 'ruq_fever', kind: 'check', label: 'RUQ pain + fever / rigors (? cholangitis)' },
    { group: 'Clinical features', id: 'painless_jaundice', kind: 'check', label: 'Painless jaundice + weight loss' },
    { group: 'Clinical features', id: 'itch', kind: 'check', label: 'Pruritus / pale stool / dark urine' },
    { group: 'Clinical features', id: 'chronic_liver', kind: 'check', label: 'Stigmata of chronic liver disease / ascites' },

    { group: 'Acute red flags', id: 'coagulopathy', kind: 'check', label: 'Coagulopathy (raised INR) / encephalopathy / drowsy' },
  ];

  if (window.RGPTriage) RGPTriage.register('abnormal-lfts-triage', {
    title: 'Abnormal LFTs — red-flag triage',
    subtitle: 'Enter enzymes / bilirubin and tick features. Surfaces acute liver failure, cholangitis and malignancy pathways.',
    guideline: 'BSG abnormal LFTs · NICE NG49',
    inputs: INPUTS,
    defaultMessage: 'No emergency rule fired. Repeat LFTs and run a non-invasive liver screen (viral, autoimmune, ferritin/transferrin sat, lipids/HbA1c, USS); use the pattern (ALT vs ALP) to direct the differential below.',
    rules: [
      {
        id: 'acute_liver_failure', tier: 'emergency',
        label: 'Acute liver failure — jaundice + coagulopathy / encephalopathy',
        action: 'Same-day admission — hepatology; stop hepatotoxins; check INR, glucose, paracetamol level.',
        patientPhrase: '"Your liver is struggling badly — this needs urgent hospital care today."',
        source: 'BSG / hepatology', sourceUrl: 'https://www.bsg.org.uk/',
        when: i => i.coagulopathy || (i.jaundice && i.chronic_liver && i.bilirubin != null && i.bilirubin > 100),
      },
      {
        id: 'cholangitis', tier: 'emergency',
        label: 'Ascending cholangitis — RUQ pain + fever + jaundice (Charcot)',
        action: 'Same-day admission — IV antibiotics, urgent imaging, biliary drainage.',
        source: 'CKS Cholangitis',
        when: i => i.ruq_fever && (i.jaundice || (i.alp != null && i.alp > 300)),
      },
      {
        id: 'very_high_alt', tier: 'urgent',
        label: 'Marked hepatocellular rise (ALT >10× ULN, ~>400)',
        action: 'Same-day/urgent assessment — paracetamol level, viral serology, autoimmune, USS; consider admission.',
        source: 'BSG abnormal LFTs',
        when: i => i.alt != null && i.alt > 400,
      },
      {
        id: 'malignancy_2ww', tier: 'cancer',
        label: 'Painless obstructive jaundice + weight loss — suspected pancreatic / biliary cancer',
        action: '2WW + urgent imaging (CT / USS).',
        patientPhrase: '"Painless jaundice with weight loss needs an urgent scan to find the cause."',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.painless_jaundice,
      },
      {
        id: 'obstruction', tier: 'urgent',
        label: 'Cholestatic pattern with jaundice / itch — biliary obstruction',
        action: 'Urgent USS biliary tree; refer per cause.',
        source: 'BSG abnormal LFTs',
        when: i => (i.alp != null && i.alp > 300) && (i.jaundice || i.itch),
      },
      {
        id: 'routine', tier: 'routine',
        label: 'Mild abnormality, no red flags',
        action: 'Repeat in 1–3 months; non-invasive liver screen; lifestyle; FIB-4 for fibrosis risk.',
        source: 'BSG abnormal LFTs',
        when: i => true,
      },
    ],
    sources: [
      { label: 'BSG — Abnormal liver blood tests', url: 'https://www.bsg.org.uk/clinical-resource/abnormal-liver-blood-tests/' },
      { label: 'NICE NG49 — Non-alcoholic fatty liver disease', url: 'https://www.nice.org.uk/guidance/ng49' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('abnormal-lfts-dx', {
    title: 'Abnormal LFTs — differential by pattern',
    subtitle: 'The ALT-vs-ALP pattern is the pivot. The engine weights causes from the pattern, risk factors and clinical clues, and always surfaces malignancy and acute liver failure when triggered.',
    guideline: 'BSG · NICE NG49 · CKS',
    patientPresenting: "My blood test showed my liver readings were up, doctor — I feel fine though. What does it mean?",
    inputs: INPUTS,
    diagnoses: [
      { id: 'masld', name: 'MASLD (fatty liver)', summary: 'Mild hepatocellular rise, obesity / T2DM / metabolic syndrome', baseline: 11, category: 'common',
        keyExam: 'Central obesity, acanthosis; often well.', nextIx: 'USS (steatosis); exclude other causes; FIB-4 / ELF for fibrosis; lifestyle, manage metabolic risk.',
        patientPhrase: 'Fat has built up in the liver, usually linked to weight and metabolism. Weight loss and managing risk factors reverse the early stages.',
        ciksUrl: 'https://cks.nice.org.uk/topics/non-alcoholic-fatty-liver-disease-nafld/' },
      { id: 'alcohol', name: 'Alcohol-related liver disease', summary: 'GGT/AST disproportionately high, AST:ALT >2, alcohol history', baseline: 7, category: 'common',
        keyExam: 'Stigmata of chronic liver disease; signs of alcohol excess.', nextIx: 'GGT, AST:ALT ratio, MCV; alcohol history (AUDIT); abstinence; FIB-4.',
        patientPhrase: 'Alcohol is straining the liver. Cutting down — ideally stopping — is the single most effective treatment.',
        ciksUrl: 'https://cks.nice.org.uk/topics/alcohol-problem-drinking/' },
      { id: 'drug', name: 'Drug-induced liver injury', summary: 'New hepatotoxic drug; resolves on withdrawal', baseline: 6, category: 'common',
        keyExam: 'Medication timeline.', nextIx: 'Medication review (statin, antibiotics, anti-TB, methotrexate, herbal); stop offender; recheck.',
        patientPhrase: 'A medication is irritating the liver. Stopping it and rechecking usually shows recovery.',
        ciksUrl: 'https://www.bsg.org.uk/clinical-resource/abnormal-liver-blood-tests/' },
      { id: 'gallstones', name: 'Gallstones / biliary obstruction', summary: 'Cholestatic (ALP↑, GGT↑), RUQ pain, jaundice / itch', baseline: 5, category: 'common',
        keyExam: 'RUQ tenderness, Murphy\u2019s; jaundice.', nextIx: 'USS biliary tree; LFT pattern; refer per cause; MRCP if duct dilatation.',
        patientPhrase: 'A stone may be blocking the bile drainage. An ultrasound shows it and treatment relieves the obstruction.',
        ciksUrl: 'https://cks.nice.org.uk/topics/gallstones/' },
      { id: 'viral', name: 'Viral hepatitis (B/C)', summary: 'Hepatocellular rise, risk factors, often asymptomatic', baseline: 4, category: 'less-common',
        keyExam: 'Often well; may have chronic liver signs.', nextIx: 'Hepatitis B sAg + core, hepatitis C antibody/PCR; refer if positive.',
        patientPhrase: 'A viral infection of the liver can run silently. A blood test identifies it and effective treatments exist.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hepatitis-b/' },
      { id: 'autoimmune', name: 'Autoimmune liver disease (AIH / PBC)', summary: 'Hepatocellular (AIH) or cholestatic (PBC), autoimmune background', baseline: 3, category: 'less-common',
        keyExam: 'May be well; PBC → itch, xanthelasma.', nextIx: 'Immunoglobulins, ANA/SMA (AIH), AMA (PBC); refer hepatology.',
        patientPhrase: 'The immune system may be targeting the liver. Antibody tests point to it and treatment protects the liver.',
        ciksUrl: 'https://www.bsg.org.uk/clinical-resource/abnormal-liver-blood-tests/' },
      { id: 'haemochromatosis', name: 'Haemochromatosis', summary: 'Iron overload, FH, fatigue / arthralgia / bronzing', baseline: 2, category: 'less-common',
        keyExam: 'Skin bronzing, hepatomegaly, arthropathy.', nextIx: 'Ferritin + transferrin saturation (>45%); HFE genotyping; refer; venesection.',
        patientPhrase: 'Your body may be storing too much iron, which can affect the liver. Blood tests confirm it and removing blood treats it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/haemochromatosis/' },

      { id: 'malignancy', name: 'Pancreatic / biliary / liver malignancy', summary: 'Painless obstructive jaundice + weight loss, or focal lesion', baseline: 1, category: 'cant-miss',
        keyExam: 'Cachexia, palpable gallbladder (Courvoisier), hepatomegaly, mass.', nextIx: '\u26A1 2WW + urgent imaging (CT/USS) for painless jaundice + weight loss (NICE NG12).',
        patientPhrase: 'Painless jaundice with weight loss needs an urgent scan to exclude a serious cause of the blockage.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 2WW + imaging' },
      { id: 'acute_failure', name: 'Acute liver failure', summary: 'Very high ALT + jaundice + coagulopathy / encephalopathy', baseline: 1, category: 'cant-miss',
        keyExam: 'Jaundice, asterixis, drowsiness, bruising.', nextIx: '\u26A1 Same-day admission — INR, glucose, paracetamol level, hepatology.',
        patientPhrase: 'These results suggest the liver is failing acutely — that needs emergency hospital care today.',
        ciksUrl: 'https://www.bsg.org.uk/clinical-resource/abnormal-liver-blood-tests/', redFlagAction: '\u26A1 Same-day admission' },
    ],
    effects: {
      // pattern: hepatocellular if ALT dominates, cholestatic if ALP dominates
      alt: (v) => v == null ? {} : (v > 400 ? { acute_failure: +8, viral: +8, drug: +6, autoimmune: +5 } : (v > 100 ? { masld: +6, viral: +6, alcohol: +5, drug: +5, autoimmune: +3 } : (v > 45 ? { masld: +8, alcohol: +4 } : {}))),
      alp: (v, ins) => v == null ? {} : (v > 300 ? { gallstones: +14, malignancy: +6, autoimmune: +6 } : (v > 130 && (ins.ggt == null || ins.ggt > 60) ? { gallstones: +6, alcohol: +3 } : {})),
      ggt: (v) => v != null && v > 100 ? { alcohol: +10 } : {},
      bilirubin: (v) => v != null && v > 40 ? { gallstones: +4, malignancy: +3, acute_failure: +3 } : {},

      metabolic: { masld: +18 },
      alcohol: { alcohol: +20 },
      drugs: { drug: +20 },
      viral_risk: { viral: +18 },
      autoimmune: { autoimmune: +16 },
      fh_iron: { haemochromatosis: +18 },

      jaundice: { gallstones: +6, malignancy: +5, acute_failure: +4 },
      ruq_fever: { gallstones: +12 },
      painless_jaundice: { malignancy: +26 },
      itch: { gallstones: +8, autoimmune: +8 },
      chronic_liver: { alcohol: +6, autoimmune: +4 },
      coagulopathy: { acute_failure: +30 },
    },
    askAbout: {
      masld: ['metabolic', 'alt'],
      alcohol: ['alcohol', 'ggt'],
      drug: ['drugs'],
      gallstones: ['alp', 'ruq_fever', 'itch'],
      viral: ['viral_risk', 'alt'],
      autoimmune: ['autoimmune', 'itch'],
      haemochromatosis: ['fh_iron'],
      malignancy: ['painless_jaundice'],
      acute_failure: ['coagulopathy', 'alt'],
    },
    sources: [
      { label: 'BSG — Abnormal liver blood tests', url: 'https://www.bsg.org.uk/clinical-resource/abnormal-liver-blood-tests/' },
      { label: 'NICE NG49 — NAFLD', url: 'https://www.nice.org.uk/guidance/ng49' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'abnormal-lfts', label: 'Abnormal LFTs', triage: 'abnormal-lfts-triage', dx: 'abnormal-lfts-dx' }
  );
})();
