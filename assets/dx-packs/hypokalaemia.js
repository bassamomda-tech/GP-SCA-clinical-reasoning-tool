/* ============================================
   Diagnostic Tool pack — Hypokalaemia
   Shared-id triage + differential. CKS Hypokalaemia · UK Kidney Assoc.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'diuretic', kind: 'check', label: 'Loop / thiazide diuretic' },
    { group: 'Demographics & context', id: 'gi_loss', kind: 'check', label: 'Vomiting / diarrhoea / laxative / purging' },
    { group: 'Demographics & context', id: 'drugs', kind: 'check', label: 'Beta-agonist / steroid / insulin / theophylline' },
    { group: 'Demographics & context', id: 'hypertension', kind: 'check', label: 'Hypertension (consider hyperaldosteronism)' },
    { group: 'Demographics & context', id: 'alcohol_nutrition', kind: 'check', label: 'Alcohol excess / poor nutrition / refeeding' },

    { group: 'Symptoms', id: 'weakness', kind: 'check', label: 'Muscle weakness / cramps / fatigue' },
    { group: 'Symptoms', id: 'palpitations', kind: 'check', label: 'Palpitations / arrhythmia' },

    { group: 'Bloods / ECG', id: 'k', kind: 'number', label: 'Potassium', unit: 'mmol/L', step: 0.1 },
    { group: 'Bloods / ECG', id: 'mg_low', kind: 'check', label: 'Magnesium low' },
    { group: 'Bloods / ECG', id: 'alkalosis', kind: 'check', label: 'Metabolic alkalosis (high bicarbonate)' },
    { group: 'Bloods / ECG', id: 'ecg_changes', kind: 'check', label: 'ECG changes (U waves / flat T / arrhythmia)' },
  ];

  if (window.RGPTriage) RGPTriage.register('hypokalaemia-triage', {
    title: 'Hypokalaemia — triage',
    subtitle: 'Enter potassium / tick features. Surfaces severe hypokalaemia and the cause-based workup.',
    guideline: 'CKS Hypokalaemia · UKKA',
    inputs: INPUTS,
    defaultMessage: 'No emergency rule fired. Recheck K⁺, check magnesium (replace if low — K won\u2019t correct otherwise), review diuretics/GI losses, and replace potassium per severity.',
    rules: [
      {
        id: 'severe', tier: 'emergency',
        label: 'Severe hypokalaemia (K <2.5) or ECG changes / arrhythmia',
        action: 'Same-day admission — cardiac monitoring, IV potassium (controlled rate), replace magnesium.',
        patientPhrase: '"Your potassium is dangerously low and can affect the heart — you need hospital treatment today."',
        source: 'UK Kidney Association',
        when: i => (i.k != null && i.k < 2.5) || i.ecg_changes,
      },
      {
        id: 'moderate', tier: 'urgent',
        label: 'Moderate hypokalaemia (K 2.5–2.9) or symptomatic',
        action: 'Urgent: ECG, oral ± IV replacement, magnesium, identify cause; recheck.',
        source: 'CKS Hypokalaemia',
        when: i => (i.k != null && i.k < 3.0) || i.palpitations || i.weakness,
      },
      {
        id: 'resistant_htn', tier: 'urgent',
        label: 'Hypokalaemia + hypertension — consider primary hyperaldosteronism',
        action: 'Aldosterone:renin ratio (off interfering drugs); refer endocrine.',
        source: 'CKS Hypertension',
        when: i => i.hypertension,
      },
      {
        id: 'mild', tier: 'routine',
        label: 'Mild hypokalaemia (K 3.0–3.4)',
        action: 'Dietary + oral replacement; review diuretic; check magnesium; recheck.',
        source: 'CKS Hypokalaemia',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Hypokalaemia', url: 'https://cks.nice.org.uk/topics/hypokalaemia/' },
      { label: 'UK Kidney Association — Potassium', url: 'https://ukkidney.org/health-professionals/guidelines' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('hypokalaemia-dx', {
    title: 'Hypokalaemia — differential (cause)',
    subtitle: 'The engine weights renal vs GI loss vs shift, surfaces hyperaldosteronism when hypertension co-exists, and flags severe / arrhythmogenic hypokalaemia.',
    guideline: 'CKS Hypokalaemia',
    patientPresenting: "My potassium came back low, doctor — I've been weak and a bit crampy.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'diuretic', name: 'Diuretic-induced', summary: 'Loop / thiazide use, often with alkalosis', baseline: 11, category: 'common',
        keyExam: 'Volume status; medication review.', nextIx: 'Review diuretic; replace K + Mg; consider K-sparing agent.',
        patientPhrase: 'A water tablet is flushing out potassium. We adjust it and top up potassium and magnesium.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypokalaemia/' },
      { id: 'gi_loss', name: 'GI losses', summary: 'Vomiting, diarrhoea, laxative misuse, purging', baseline: 8, category: 'common',
        keyExam: 'Dehydration; dental erosion / signs of purging.', nextIx: 'Treat cause; replace K + Mg; consider eating-disorder screen.',
        patientPhrase: 'Losses from the gut have lowered your potassium. Treating the cause and replacing it corrects things.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypokalaemia/' },
      { id: 'shift', name: 'Transcellular shift', summary: 'Beta-agonist / insulin / refeeding / alkalosis drives K into cells', baseline: 4, category: 'less-common',
        keyExam: 'Recent salbutamol / insulin / refeeding.', nextIx: 'Usually transient; treat trigger; cautious replacement.',
        patientPhrase: 'Potassium has temporarily moved into the cells rather than being lost. It usually rebalances.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypokalaemia/' },
      { id: 'hypomagnesaemia', name: 'Magnesium depletion', summary: 'Low Mg prevents K correction; alcohol, PPI, diuretics', baseline: 3, category: 'less-common',
        keyExam: 'Alcohol history; refractory hypokalaemia.', nextIx: 'Replace magnesium — potassium will not correct until Mg is replete.',
        patientPhrase: 'Low magnesium is stopping the potassium from recovering. Replacing magnesium first is the key.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypokalaemia/' },
      { id: 'hyperaldo', name: 'Primary hyperaldosteronism', summary: 'Hypertension + hypokalaemia + alkalosis', baseline: 3, category: 'less-common',
        keyExam: 'Resistant hypertension.', nextIx: 'Aldosterone:renin ratio off interfering drugs; refer endocrine; imaging.',
        patientPhrase: 'A hormone (aldosterone) may be high, raising blood pressure and lowering potassium. Specialist tests confirm it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypertension/' },

      { id: 'severe', name: 'Severe / arrhythmogenic hypokalaemia', summary: 'K <2.5 or ECG changes', baseline: 1, category: 'cant-miss',
        keyExam: 'Arrhythmia, profound weakness, ileus.', nextIx: '\u26A1 Same-day admission — monitored IV replacement + magnesium.',
        patientPhrase: 'The potassium is low enough to affect the heart rhythm — that needs hospital correction today.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypokalaemia/', redFlagAction: '\u26A1 Same-day admission' },
    ],
    effects: {
      diuretic: { diuretic: +22 },
      gi_loss: { gi_loss: +22 },
      drugs: { shift: +18 },
      hypertension: { hyperaldo: +20 },
      alcohol_nutrition: { hypomagnesaemia: +14, shift: +4 },

      weakness: { severe: +2 },
      palpitations: { severe: +4 },

      k: (v) => v != null && v < 2.5 ? { severe: +22 } : {},
      mg_low: { hypomagnesaemia: +22 },
      alkalosis: { diuretic: +6, hyperaldo: +8, gi_loss: +4 },
      ecg_changes: { severe: +20 },
    },
    askAbout: {
      diuretic: ['diuretic', 'alkalosis'],
      gi_loss: ['gi_loss'],
      shift: ['drugs'],
      hypomagnesaemia: ['mg_low', 'alcohol_nutrition'],
      hyperaldo: ['hypertension', 'alkalosis'],
      severe: ['k', 'ecg_changes'],
    },
    sources: [
      { label: 'NICE CKS — Hypokalaemia', url: 'https://cks.nice.org.uk/topics/hypokalaemia/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'hypokalaemia', label: 'Hypokalaemia', triage: 'hypokalaemia-triage', dx: 'hypokalaemia-dx' }
  );
})();
