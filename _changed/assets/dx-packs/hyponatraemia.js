/* ============================================
   Diagnostic Tool pack — Hyponatraemia
   Shared-id triage + differential (by volume status).
   CKS Hyponatraemia · BSG/society guidance.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'diuretic', kind: 'check', label: 'Thiazide diuretic' },
    { group: 'Demographics & context', id: 'ssri_carb', kind: 'check', label: 'SSRI / carbamazepine / PPI / antipsychotic' },
    { group: 'Demographics & context', id: 'malig_chest', kind: 'check', label: 'Malignancy / lung or CNS disease (SIADH risk)' },

    { group: 'Volume status', id: 'hypovolaemic', kind: 'check', label: 'Dry: postural drop, reduced turgor, D&V / diuretic loss' },
    { group: 'Volume status', id: 'euvolaemic', kind: 'check', label: 'Euvolaemic: clinically normal fluid status' },
    { group: 'Volume status', id: 'oedema', kind: 'check', label: 'Overloaded: oedema / ascites (HF, cirrhosis, nephrosis)' },

    { group: 'Other clues', id: 'high_water', kind: 'check', label: 'High water / low solute intake (beer potomania / polydipsia)' },
    { group: 'Other clues', id: 'addisons', kind: 'check', label: 'Fatigue + pigmentation + hyperkalaemia (? Addison\u2019s)' },
    { group: 'Other clues', id: 'hypothyroid', kind: 'check', label: 'Hypothyroid features' },

    { group: 'Bloods', id: 'na', kind: 'number', label: 'Sodium', unit: 'mmol/L', step: 1 },
    { group: 'Bloods', id: 'urine_na_low', kind: 'check', label: 'Urine Na <20 (renal sodium avid)' },
    { group: 'Bloods', id: 'urine_osm_high', kind: 'check', label: 'Urine osmolality high / inappropriately concentrated' },

    { group: 'Red flags', id: 'neuro', kind: 'check', label: 'Seizure / drowsy / confused / vomiting' },
  ];

  if (window.RGPTriage) RGPTriage.register('hyponatraemia-triage', {
    title: 'Hyponatraemia — triage',
    subtitle: 'Enter sodium / assess volume. Surfaces severe symptomatic hyponatraemia and the volume-based workup.',
    guideline: 'CKS Hyponatraemia',
    inputs: INPUTS,
    defaultMessage: 'No emergency rule fired. Assess volume status (the key step), send paired serum + urine osmolality and urine sodium, review drugs; correct sodium no faster than 8–10 mmol/L per 24h.',
    rules: [
      {
        id: 'severe_symptomatic', tier: 'emergency',
        label: 'Severe / symptomatic hyponatraemia (Na <125, or neuro features)',
        action: 'Same-day admission — cautious correction (risk of osmotic demyelination if too fast).',
        patientPhrase: '"Your salt level is low enough to affect the brain — you need hospital treatment today."',
        source: 'CKS Hyponatraemia',
        when: i => (i.na != null && i.na < 125) || i.neuro,
      },
      {
        id: 'addisons', tier: 'urgent',
        label: 'Possible Addison\u2019s — hyponatraemia + hyperkalaemia + pigmentation / hypotension',
        action: 'Same-day 9am cortisol; if unwell, treat as adrenal crisis (hydrocortisone).',
        source: 'CKS Addison\u2019s',
        when: i => i.addisons,
      },
      {
        id: 'moderate', tier: 'urgent',
        label: 'Moderate hyponatraemia (Na 125–129)',
        action: 'Urgent: volume assessment, paired osmolalities + urine sodium, drug review; treat by mechanism.',
        source: 'CKS Hyponatraemia',
        when: i => i.na != null && i.na < 130,
      },
      {
        id: 'mild', tier: 'routine',
        label: 'Mild hyponatraemia (Na 130–134)',
        action: 'Recheck; assess volume; review thiazide/SSRI; investigate if persistent.',
        source: 'CKS Hyponatraemia',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Hyponatraemia', url: 'https://cks.nice.org.uk/topics/hyponatraemia/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('hyponatraemia-dx', {
    title: 'Hyponatraemia — differential by volume status',
    subtitle: 'Volume status is the diagnostic pivot. The engine weights hypovolaemic, euvolaemic (SIADH) and hypervolaemic causes from exam and urine indices, and flags severe hyponatraemia and Addison\u2019s.',
    guideline: 'CKS Hyponatraemia',
    patientPresenting: "My bloods showed a low sodium, doctor — I've been a bit confused and off my legs.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'hypovolaemic', name: 'Hypovolaemic hyponatraemia', summary: 'Volume depletion: D&V, diuretics, third-spacing', baseline: 8, category: 'common',
        keyExam: 'Postural hypotension, dry mucosae, reduced turgor.', nextIx: 'Urine Na <20 (extra-renal) or >20 (diuretic/renal); volume replacement with 0.9% saline.',
        patientPhrase: 'You are short of fluid and salt together. Replacing fluid carefully corrects the sodium.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyponatraemia/', caseLink: '../cases/hyponatraemia.html' },
      { id: 'siadh', name: 'SIADH (euvolaemic)', summary: 'Euvolaemic, concentrated urine, drug / lung / CNS / malignancy', baseline: 7, category: 'common',
        keyExam: 'Clinically euvolaemic.', nextIx: 'Diagnosis of exclusion: euvolaemia, urine osmolality >100, urine Na >30, normal thyroid/adrenal; fluid restriction; treat cause.',
        patientPhrase: 'Your body is holding on to too much water, diluting the salt. Limiting fluids and treating the cause corrects it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyponatraemia/' },
      { id: 'hypervolaemic', name: 'Hypervolaemic hyponatraemia', summary: 'Oedematous: heart failure, cirrhosis, nephrotic syndrome', baseline: 5, category: 'common',
        keyExam: 'Oedema, ascites, raised JVP.', nextIx: 'Treat underlying organ failure; fluid + salt restriction; cautious diuresis.',
        patientPhrase: 'Fluid is accumulating faster than salt because of the heart/liver/kidney — managing that condition improves the sodium.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyponatraemia/' },
      { id: 'drug', name: 'Drug-induced (thiazide / SSRI / carbamazepine)', summary: 'Offending drug, often euvolaemic or hypovolaemic', baseline: 5, category: 'common',
        keyExam: 'Medication review.', nextIx: 'Stop/replace drug; recheck sodium.',
        patientPhrase: 'A medication is lowering your sodium. Stopping it usually allows it to recover.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyponatraemia/' },
      { id: 'low_solute', name: 'Low-solute / primary polydipsia', summary: 'Beer potomania / very high water intake, dilute urine', baseline: 2, category: 'less-common',
        keyExam: 'History of high fluid / low dietary solute.', nextIx: 'Dilute urine (osmolality <100); manage intake/diet.',
        patientPhrase: 'Drinking large volumes with little dietary salt dilutes the blood. Adjusting intake corrects it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyponatraemia/' },
      { id: 'endocrine', name: 'Hypothyroidism / adrenal insufficiency', summary: 'Hypothyroid features, or Addison\u2019s (with hyperkalaemia)', baseline: 2, category: 'less-common',
        keyExam: 'Hypothyroid signs; pigmentation + postural drop (Addison\u2019s).', nextIx: 'TSH; 9am cortisol ± Short Synacthen test; treat deficiency.',
        patientPhrase: 'A hormone deficiency can lower sodium. Blood tests check the thyroid and adrenal glands.',
        ciksUrl: 'https://cks.nice.org.uk/topics/addisons-disease/' },

      { id: 'severe', name: 'Severe symptomatic hyponatraemia', summary: 'Na <125 or seizures / reduced consciousness', baseline: 1, category: 'cant-miss',
        keyExam: 'Confusion, seizures, vomiting.', nextIx: '\u26A1 Same-day admission — controlled correction (avoid osmotic demyelination).',
        patientPhrase: 'The sodium is low enough to affect the brain — that needs careful hospital correction today.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyponatraemia/', redFlagAction: '\u26A1 Same-day admission' },
    ],
    effects: {
      diuretic: { drug: +16, hypovolaemic: +6 },
      ssri_carb: { drug: +16, siadh: +6 },
      malig_chest: { siadh: +18 },

      hypovolaemic: { hypovolaemic: +22, hypervolaemic: -8 },
      euvolaemic: { siadh: +16, low_solute: +4 },
      oedema: { hypervolaemic: +24, hypovolaemic: -8 },

      high_water: { low_solute: +20 },
      addisons: { endocrine: +18, severe: +2 },
      hypothyroid: { endocrine: +14 },

      na: (v) => v != null && v < 125 ? { severe: +20 } : {},
      urine_na_low: { hypovolaemic: +8, hypervolaemic: +6, siadh: -8 },
      urine_osm_high: { siadh: +12, low_solute: -10 },

      neuro: { severe: +20 },
    },
    askAbout: {
      hypovolaemic: ['hypovolaemic', 'urine_na_low'],
      siadh: ['euvolaemic', 'urine_osm_high', 'malig_chest'],
      hypervolaemic: ['oedema'],
      drug: ['diuretic', 'ssri_carb'],
      low_solute: ['high_water'],
      endocrine: ['addisons', 'hypothyroid'],
      severe: ['na', 'neuro'],
    },
    sources: [
      { label: 'NICE CKS — Hyponatraemia', url: 'https://cks.nice.org.uk/topics/hyponatraemia/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'hyponatraemia', label: 'Hyponatraemia', triage: 'hyponatraemia-triage', dx: 'hyponatraemia-dx' }
  );
})();
