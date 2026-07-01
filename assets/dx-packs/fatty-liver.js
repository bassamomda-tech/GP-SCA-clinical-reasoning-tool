/* ============================================
   Diagnostic Tool pack — Fatty liver / incidental steatosis
   Shared-id triage + differential with fibrosis-staging focus.
   NICE NG49 (NAFLD/MASLD) · BSG · FIB-4.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Metabolic risk', id: 'obese', kind: 'check', label: 'Obesity / central adiposity' },
    { group: 'Metabolic risk', id: 't2dm', kind: 'check', label: 'Type 2 diabetes / insulin resistance' },
    { group: 'Metabolic risk', id: 'dyslipidaemia', kind: 'check', label: 'Hypertension / dyslipidaemia / metabolic syndrome' },
    { group: 'Other drivers', id: 'alcohol', kind: 'check', label: 'Alcohol excess' },
    { group: 'Other drivers', id: 'drugs', kind: 'check', label: 'Steatosis-inducing drug (steroid, tamoxifen, MTX, amiodarone)' },
    { group: 'Other drivers', id: 'viral_auto', kind: 'check', label: 'Viral hepatitis risk / autoimmune background' },

    { group: 'Findings', id: 'uss_steatosis', kind: 'check', label: 'USS shows fatty liver' },
    { group: 'Findings', id: 'mild_alt', kind: 'check', label: 'Mildly raised ALT' },
    { group: 'Findings', id: 'high_fib4', kind: 'check', label: 'FIB-4 raised / advanced-fibrosis risk' },

    { group: 'Advanced disease', id: 'chronic_liver', kind: 'check', label: 'Stigmata of chronic liver disease / splenomegaly' },
    { group: 'Advanced disease', id: 'decompensation', kind: 'check', label: 'Ascites / jaundice / variceal bleed / encephalopathy' },
    { group: 'Advanced disease', id: 'focal_lesion', kind: 'check', label: 'Focal liver lesion on imaging' },
  ];

  if (window.RGPTriage) RGPTriage.register('fatty-liver-triage', {
    title: 'Fatty liver — triage & fibrosis risk',
    subtitle: 'Tick risk factors / findings. Surfaces decompensation, advanced-fibrosis and HCC pathways.',
    guideline: 'NICE NG49 · BSG',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Confirm steatosis, exclude other causes (liver screen), and risk-stratify fibrosis with FIB-4 → ELF; manage metabolic risk and lifestyle; recheck.',
    rules: [
      {
        id: 'decompensation', tier: 'emergency',
        label: 'Decompensated liver disease — ascites / jaundice / variceal bleed / encephalopathy',
        action: 'Same-day admission / urgent hepatology.',
        patientPhrase: '"Your liver is showing signs of failing — this needs urgent hospital assessment."',
        source: 'BSG / hepatology',
        when: i => i.decompensation,
      },
      {
        id: 'hcc', tier: 'cancer',
        label: 'Focal liver lesion / suspected hepatocellular carcinoma',
        action: 'Urgent imaging (triple-phase CT/MRI) + AFP; hepatology referral.',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.focal_lesion,
      },
      {
        id: 'advanced_fibrosis', tier: 'urgent',
        label: 'Advanced-fibrosis risk — raised FIB-4 or chronic liver signs',
        action: 'ELF test / fibroscan; refer hepatology if advanced fibrosis likely.',
        source: 'NICE NG49',
        when: i => i.high_fib4 || i.chronic_liver,
      },
      {
        id: 'routine', tier: 'routine',
        label: 'Simple steatosis / metabolic risk',
        action: 'Lifestyle (weight loss 7–10%, alcohol), optimise diabetes/lipids/BP; FIB-4 + recheck LFTs; exclude other causes.',
        source: 'NICE NG49',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG49 — NAFLD/MASLD', url: 'https://www.nice.org.uk/guidance/ng49' },
      { label: 'BSG — Abnormal liver blood tests', url: 'https://www.bsg.org.uk/clinical-resource/abnormal-liver-blood-tests/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('fatty-liver-dx', {
    title: 'Fatty liver — cause & stage',
    subtitle: 'The engine weights MASLD against other causes of steatosis / raised LFTs and stages by fibrosis risk, always surfacing advanced fibrosis/cirrhosis and HCC when triggered.',
    guideline: 'NICE NG49 · BSG',
    patientPresenting: "A scan showed I've got a fatty liver, doctor — should I be worried?",
    inputs: INPUTS,
    diagnoses: [
      { id: 'masld', name: 'MASLD (metabolic fatty liver)', summary: 'Steatosis + metabolic risk factors, mild ALT', baseline: 13, category: 'common',
        keyExam: 'Central obesity, acanthosis nigricans.', nextIx: 'Confirm metabolic risk; FIB-4 for fibrosis; lifestyle + manage diabetes/lipids/BP.',
        patientPhrase: 'Fat has built up in the liver, linked to weight and metabolism. Early on it is reversible with weight loss and managing risk factors.',
        ciksUrl: 'https://cks.nice.org.uk/topics/non-alcoholic-fatty-liver-disease-nafld/' },
      { id: 'alcohol', name: 'Alcohol-related fatty liver', summary: 'Steatosis + alcohol excess, GGT/AST pattern', baseline: 6, category: 'common',
        keyExam: 'Signs of alcohol excess / chronic liver disease.', nextIx: 'Alcohol history (AUDIT); GGT, AST:ALT; abstinence; FIB-4.',
        patientPhrase: 'Alcohol is the main driver here. Cutting down — ideally stopping — lets the liver recover.',
        ciksUrl: 'https://cks.nice.org.uk/topics/alcohol-problem-drinking/' },
      { id: 'drug', name: 'Drug-induced steatosis', summary: 'Steroid / tamoxifen / methotrexate / amiodarone', baseline: 3, category: 'less-common',
        keyExam: 'Medication review.', nextIx: 'Review offending drug; recheck LFTs/imaging.',
        patientPhrase: 'A medication can cause fat to deposit in the liver. We review whether it can be changed.',
        ciksUrl: 'https://www.bsg.org.uk/clinical-resource/abnormal-liver-blood-tests/' },
      { id: 'other_cause', name: 'Other liver disease (viral / autoimmune / iron)', summary: 'Co-existing or alternative cause of raised LFTs', baseline: 3, category: 'less-common',
        keyExam: 'May be well.', nextIx: 'Non-invasive liver screen: viral serology, autoantibodies, ferritin/transferrin sat.',
        patientPhrase: 'We still check for other liver conditions that can coexist with or mimic fatty liver.',
        ciksUrl: 'https://www.bsg.org.uk/clinical-resource/abnormal-liver-blood-tests/' },

      { id: 'advanced_fibrosis', name: 'Advanced fibrosis / cirrhosis', summary: 'Raised FIB-4, chronic liver signs, splenomegaly', baseline: 1, category: 'cant-miss',
        keyExam: 'Stigmata of chronic liver disease, splenomegaly.', nextIx: '\u26A1 ELF / fibroscan; hepatology referral; HCC + varices surveillance if cirrhotic.',
        patientPhrase: 'There are signs the liver may be scarred. We confirm this and arrange specialist monitoring to protect it.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng49', redFlagAction: '\u26A1 Fibroscan + hepatology' },
      { id: 'hcc', name: 'Hepatocellular carcinoma', summary: 'Focal lesion / decompensation in chronic liver disease', baseline: 1, category: 'cant-miss',
        keyExam: 'Hepatomegaly, mass, decompensation.', nextIx: '\u26A1 Urgent triple-phase imaging + AFP; hepatology (NICE NG12).',
        patientPhrase: 'A spot on the liver needs urgent imaging to rule out a cancer, especially with liver disease.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Urgent imaging + AFP' },
    ],
    effects: {
      age: (v) => v >= 60 ? { advanced_fibrosis: +4, hcc: +2 } : {},
      obese: { masld: +16 },
      t2dm: { masld: +14, advanced_fibrosis: +4 },
      dyslipidaemia: { masld: +10 },
      alcohol: { alcohol: +22 },
      drugs: { drug: +18 },
      viral_auto: { other_cause: +18 },

      uss_steatosis: { masld: +8, alcohol: +4 },
      mild_alt: { masld: +6, alcohol: +3 },
      high_fib4: { advanced_fibrosis: +24 },

      chronic_liver: { advanced_fibrosis: +18, hcc: +4 },
      decompensation: { advanced_fibrosis: +14, hcc: +6 },
      focal_lesion: { hcc: +30 },
    },
    askAbout: {
      masld: ['obese', 't2dm', 'uss_steatosis'],
      alcohol: ['alcohol'],
      drug: ['drugs'],
      other_cause: ['viral_auto'],
      advanced_fibrosis: ['high_fib4', 'chronic_liver'],
      hcc: ['focal_lesion'],
    },
    sources: [
      { label: 'NICE NG49 — NAFLD/MASLD', url: 'https://www.nice.org.uk/guidance/ng49' },
      { label: 'BSG — Abnormal liver blood tests', url: 'https://www.bsg.org.uk/clinical-resource/abnormal-liver-blood-tests/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'fatty-liver', label: 'Fatty liver disease', triage: 'fatty-liver-triage', dx: 'fatty-liver-dx' }
  );
})();
