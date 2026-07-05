/* ============================================
   Diagnostic Tool pack — High Cholesterol
   Shared-id triage + differential. NICE NG238 lipids · FH (CG71).
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 18, max: 100, step: 1 },
    { group: 'Risk', id: 'established_cvd', kind: 'check', label: 'Established CVD (secondary prevention)' },
    { group: 'Risk', id: 'diabetes', kind: 'check', label: 'Diabetes / CKD' },

    { group: 'Lipids', id: 'tc', kind: 'number', label: 'Total cholesterol', unit: 'mmol/L', step: 0.1 },
    { group: 'Lipids', id: 'ldl', kind: 'number', label: 'LDL / non-HDL', unit: 'mmol/L', step: 0.1 },
    { group: 'Lipids', id: 'tg', kind: 'number', label: 'Triglycerides', unit: 'mmol/L', step: 0.1 },

    { group: 'FH clues', id: 'fh_premature_cvd', kind: 'check', label: 'FH of premature CHD (<60) / FH of high cholesterol' },
    { group: 'FH clues', id: 'tendon_xanthomata', kind: 'check', label: 'Tendon xanthomata / corneal arcus <45' },

    { group: 'Secondary clues', id: 'hypothyroid', kind: 'check', label: 'Hypothyroid features' },
    { group: 'Secondary clues', id: 'alcohol_metabolic', kind: 'check', label: 'High alcohol / obesity / poorly-controlled diabetes (raised TG)' },

    { group: 'Red flags', id: 'tg_very_high', kind: 'check', label: 'Triglycerides >10 (pancreatitis risk)' },
  ];

  if (window.RGPTriage) RGPTriage.register('high-cholesterol-triage', {
    title: 'High cholesterol — triage',
    subtitle: 'Enter lipids. Surfaces familial hypercholesterolaemia, severe hypertriglyceridaemia and the prevention pathway.',
    guideline: 'NICE NG238 · CG71',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Exclude secondary causes (TFT, HbA1c, LFT, renal); calculate QRISK3 (primary prevention); offer atorvastatin (20 mg primary / 80 mg secondary); lifestyle.',
    rules: [
      {
        id: 'severe_tg', tier: 'emergency',
        label: 'Severe hypertriglyceridaemia (>10 mmol/L) — pancreatitis risk',
        action: 'Urgent: fasting repeat, address cause (alcohol, glucose), specialist if persistent; fibrate/omega-3.',
        patientPhrase: '"Your triglycerides are very high and can inflame the pancreas — we need to act on this promptly."',
        source: 'NICE NG238',
        when: i => i.tg_very_high || (i.tg != null && i.tg > 10),
      },
      {
        id: 'fh', tier: 'urgent',
        label: 'Possible familial hypercholesterolaemia — very high cholesterol / FH / xanthomata',
        action: 'Apply Simon Broome / DLCN criteria; refer lipid clinic; cascade family testing; high-intensity statin.',
        patientPhrase: '"This pattern can be an inherited high-cholesterol condition — important to confirm and to test relatives."',
        source: 'NICE CG71', sourceUrl: 'https://www.nice.org.uk/guidance/cg71',
        when: i => i.tendon_xanthomata || (i.tc != null && i.tc > 7.5 && i.fh_premature_cvd) || (i.ldl != null && i.ldl > 4.9),
      },
      {
        id: 'secondary', tier: 'urgent',
        label: 'Exclude secondary cause',
        action: 'TFT, HbA1c, LFT, U&E; treat hypothyroidism / address alcohol & metabolic factors; recheck.',
        source: 'NICE NG238',
        when: i => i.hypothyroid || i.alcohol_metabolic,
      },
      {
        id: 'prevention', tier: 'routine',
        label: 'Cardiovascular risk management',
        action: 'QRISK3 (primary); statin (atorvastatin 20 mg primary / 80 mg secondary); lifestyle; recheck lipids at 3 months.',
        source: 'NICE NG238',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG238 — Cardiovascular risk / lipids', url: 'https://www.nice.org.uk/guidance/ng238' },
      { label: 'NICE CG71 — Familial hypercholesterolaemia', url: 'https://www.nice.org.uk/guidance/cg71' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('high-cholesterol-dx', {
    title: 'High cholesterol — cause & risk',
    subtitle: 'The engine distinguishes primary prevention, secondary causes and familial hypercholesterolaemia, and surfaces severe hypertriglyceridaemia.',
    guideline: 'NICE NG238 · CG71',
    patientPresenting: "My cholesterol came back high, doctor — do I need to take a statin?",
    inputs: INPUTS,
    diagnoses: [
      { id: 'primary_risk', name: 'Primary hypercholesterolaemia (CV risk)', summary: 'Raised lipids, QRISK-driven decision', baseline: 11, category: 'common',
        keyExam: 'BP, BMI, CV risk factors.', nextIx: 'QRISK3; lifestyle; statin per threshold (≥10% or comorbidity).',
        patientPhrase: 'Your cholesterol adds to overall heart and stroke risk. We calculate that risk and decide on a statin and lifestyle together.',
        ciksUrl: 'https://cks.nice.org.uk/topics/lipid-modification-cvd-prevention/' },
      { id: 'secondary_prevention', name: 'Secondary prevention', summary: 'Established CVD / diabetes / CKD', baseline: 5, category: 'common',
        keyExam: 'Known vascular disease.', nextIx: 'High-intensity statin (atorvastatin 80 mg); add ezetimibe/PCSK9 if not at target.',
        patientPhrase: 'With existing heart/artery disease, lowering cholesterol firmly reduces further events — a higher-strength statin is recommended.',
        ciksUrl: 'https://cks.nice.org.uk/topics/lipid-modification-cvd-prevention/' },
      { id: 'secondary_cause', name: 'Secondary cause (hypothyroid / alcohol / metabolic)', summary: 'Treatable contributor', baseline: 4, category: 'common',
        keyExam: 'Thyroid signs; metabolic factors.', nextIx: 'TFT, HbA1c, LFT; treat cause; recheck.',
        patientPhrase: 'Another condition may be raising your cholesterol. Treating it can improve the numbers.',
        ciksUrl: 'https://cks.nice.org.uk/topics/lipid-modification-cvd-prevention/' },
      { id: 'hypertriglyceridaemia', name: 'Hypertriglyceridaemia', summary: 'High TG, alcohol/glucose-related', baseline: 3, category: 'less-common',
        keyExam: 'Metabolic factors.', nextIx: 'Fasting repeat; address alcohol/glucose; fibrate/omega-3 if very high.',
        patientPhrase: 'Triglycerides are a different blood fat, often linked to alcohol and sugar. Lifestyle and sometimes medication help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/lipid-modification-cvd-prevention/' },

      { id: 'fh', name: 'Familial hypercholesterolaemia', summary: 'Very high cholesterol, FH premature CHD, xanthomata', baseline: 1, category: 'cant-miss',
        keyExam: 'Tendon xanthomata, corneal arcus <45.', nextIx: '\u26A1 Simon Broome/DLCN; lipid clinic; cascade family testing; high-intensity statin.',
        patientPhrase: 'An inherited condition causing very high cholesterol — confirming it matters for you and your relatives, who should also be tested.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg71', redFlagAction: '\u26A1 Lipid clinic + family testing' },
    ],
    effects: {
      established_cvd: { secondary_prevention: +24, primary_risk: -8 },
      diabetes: { secondary_prevention: +8, primary_risk: +4 },

      tc: (v) => v != null && v > 7.5 ? { fh: +8 } : {},
      ldl: (v) => v != null && v > 4.9 ? { fh: +10 } : {},
      tg: (v) => v == null ? {} : (v > 10 ? { hypertriglyceridaemia: +14 } : (v > 2.3 ? { hypertriglyceridaemia: +8 } : {})),

      fh_premature_cvd: { fh: +14 },
      tendon_xanthomata: { fh: +24 },

      hypothyroid: { secondary_cause: +18 },
      alcohol_metabolic: { secondary_cause: +10, hypertriglyceridaemia: +10 },

      tg_very_high: { hypertriglyceridaemia: +16 },
    },
    askAbout: {
      primary_risk: ['age'],
      secondary_prevention: ['established_cvd', 'diabetes'],
      secondary_cause: ['hypothyroid', 'alcohol_metabolic'],
      hypertriglyceridaemia: ['tg', 'alcohol_metabolic'],
      fh: ['fh_premature_cvd', 'tendon_xanthomata', 'ldl'],
    },
    sources: [
      { label: 'NICE NG238 — Lipids / CVD prevention', url: 'https://www.nice.org.uk/guidance/ng238' },
      { label: 'NICE CG71 — Familial hypercholesterolaemia', url: 'https://www.nice.org.uk/guidance/cg71' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'high-cholesterol', label: 'High cholesterol', triage: 'high-cholesterol-triage', dx: 'high-cholesterol-dx' }
  );
})();
