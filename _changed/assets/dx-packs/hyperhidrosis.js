/* ============================================
   Diagnostic Tool pack — Hyperhidrosis
   Shared-id triage + differential. CKS Hyperhidrosis · secondary-cause screen.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'onset_young', kind: 'check', label: 'Onset in childhood / adolescence' },
    { group: 'Demographics & context', id: 'drugs', kind: 'check', label: 'Drug cause (SSRI, opioid, cholinesterase inhibitor, withdrawal)' },

    { group: 'Pattern', id: 'focal_symmetrical', kind: 'check', label: 'Focal & symmetrical (palms / soles / axillae), stops in sleep' },
    { group: 'Pattern', id: 'generalised_night', kind: 'check', label: 'Generalised / drenching night sweats' },
    { group: 'Pattern', id: 'family', kind: 'check', label: 'Family history' },

    { group: 'Secondary-cause clues', id: 'thyroid_sx', kind: 'check', label: 'Heat intolerance / weight loss / tremor (thyroid)' },
    { group: 'Secondary-cause clues', id: 'menopausal', kind: 'check', label: 'Perimenopausal flushes / cycle change' },
    { group: 'Secondary-cause clues', id: 'infection', kind: 'check', label: 'Fever / focal infection symptoms / TB risk' },
    { group: 'Secondary-cause clues', id: 'anxiety', kind: 'check', label: 'Anxiety / panic' },
    { group: 'Secondary-cause clues', id: 'hypoglyc', kind: 'check', label: 'Episodic sweating + palpitations + hunger (hypoglycaemia / phaeo)' },

    { group: 'Red flags', id: 'b_symptoms', kind: 'check', label: 'Weight loss + lymphadenopathy + drenching night sweats (? lymphoma)' },
  ];

  if (window.RGPTriage) RGPTriage.register('hyperhidrosis-triage', {
    title: 'Hyperhidrosis — triage',
    subtitle: 'Tick features. Surfaces malignancy (B-symptoms) and secondary-cause pathways.',
    guideline: 'CKS Hyperhidrosis',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Distinguish primary focal (symmetrical, stops in sleep, onset young) from secondary; screen for secondary causes if generalised / nocturnal; treat primary with topical aluminium chloride → iontophoresis → referral.',
    rules: [
      {
        id: 'lymphoma_2ww', tier: 'cancer',
        label: 'B-symptoms — drenching night sweats + weight loss + lymphadenopathy',
        action: 'Urgent FBC, film, LDH, CXR; haematology 2WW (NICE NG12).',
        patientPhrase: '"Night sweats with weight loss and gland swelling need urgent blood tests to rule out a blood-cell problem."',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.b_symptoms,
      },
      {
        id: 'secondary', tier: 'urgent',
        label: 'Likely secondary hyperhidrosis — generalised / nocturnal / systemic clues',
        action: 'Screen: TFT, glucose, FBC/CRP, consider infection/TB; treat the cause.',
        source: 'CKS Hyperhidrosis',
        when: i => i.generalised_night || i.thyroid_sx || i.infection || i.hypoglyc,
      },
      {
        id: 'primary', tier: 'routine',
        label: 'Primary focal hyperhidrosis',
        action: 'Topical aluminium chloride; iontophoresis; referral for botulinum toxin / further options if refractory.',
        source: 'CKS Hyperhidrosis',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Hyperhidrosis', url: 'https://cks.nice.org.uk/topics/hyperhidrosis/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('hyperhidrosis-dx', {
    title: 'Hyperhidrosis — differential',
    subtitle: 'The engine separates primary focal hyperhidrosis from secondary causes (thyroid, menopause, infection, anxiety, drugs) and always surfaces lymphoma / phaeochromocytoma when triggered.',
    guideline: 'CKS Hyperhidrosis',
    patientPresenting: "I sweat far too much, doctor — it soaks through my clothes and it's ruining my confidence.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'primary_focal', name: 'Primary focal hyperhidrosis', summary: 'Symmetrical palms/soles/axillae, onset young, stops in sleep, FH', baseline: 12, category: 'common',
        keyExam: 'Focal symmetrical sweating, otherwise normal.', nextIx: 'Clinical; topical aluminium chloride, iontophoresis, botulinum toxin if refractory.',
        patientPhrase: 'This is over-activity of the sweat glands themselves, not another illness. Several effective treatments exist.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyperhidrosis/' },
      { id: 'thyroid', name: 'Hyperthyroidism', summary: 'Generalised sweating + heat intolerance + weight loss + tremor', baseline: 4, category: 'less-common',
        keyExam: 'Tremor, tachycardia, goitre, lid lag.', nextIx: 'TSH/FT4; treat.',
        patientPhrase: 'An overactive thyroid can cause excessive sweating. A blood test checks it and treatment settles it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyperthyroidism/' },
      { id: 'menopause', name: 'Menopausal vasomotor symptoms', summary: 'Flushes + sweats + cycle change, age 45–55', baseline: 4, category: 'common',
        keyExam: 'Vasomotor symptoms.', nextIx: 'Clinical; discuss HRT / non-hormonal options.',
        patientPhrase: 'Hormonal changes of the menopause commonly cause flushes and sweats — there are good treatments.',
        ciksUrl: 'https://cks.nice.org.uk/topics/menopause/' },
      { id: 'drug', name: 'Drug-induced / withdrawal', summary: 'SSRI, opioid, cholinesterase inhibitor, alcohol/opioid withdrawal', baseline: 3, category: 'less-common',
        keyExam: 'Medication / substance review.', nextIx: 'Review medication; manage withdrawal.',
        patientPhrase: 'A medication or withdrawal is driving the sweating. Adjusting it usually helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyperhidrosis/' },
      { id: 'anxiety', name: 'Anxiety-related', summary: 'Situational sweating with anxiety / panic', baseline: 3, category: 'common',
        keyExam: 'Normal exam; psychosocial cues.', nextIx: 'GAD-7; psychological therapy; treat anxiety.',
        patientPhrase: 'Anxiety activates the sweat response. Treating the anxiety reduces the sweating.',
        ciksUrl: 'https://cks.nice.org.uk/topics/generalized-anxiety-disorder/' },
      { id: 'infection', name: 'Chronic infection', summary: 'Night sweats + fever + TB / endocarditis risk', baseline: 2, category: 'less-common',
        keyExam: 'Fever, focal signs.', nextIx: 'FBC/CRP, cultures, CXR; treat infection.',
        patientPhrase: 'A hidden infection can cause sweats. We look for and treat it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyperhidrosis/' },

      { id: 'lymphoma', name: 'Lymphoma / malignancy', summary: 'Drenching night sweats + weight loss + lymphadenopathy', baseline: 1, category: 'cant-miss',
        keyExam: 'Lymphadenopathy, hepatosplenomegaly.', nextIx: '\u26A1 FBC, film, LDH, CXR; haematology 2WW (NICE NG12).',
        patientPhrase: 'Night sweats with weight loss and gland swelling need urgent tests to exclude a blood-cell cancer.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Haematology 2WW' },
      { id: 'phaeo', name: 'Phaeochromocytoma', summary: 'Episodic sweating + palpitations + headache + hypertension', baseline: 1, category: 'cant-miss',
        keyExam: 'Paroxysmal hypertension, pallor.', nextIx: '\u26A1 Plasma/urine metanephrines; endocrine referral.',
        patientPhrase: 'Episodes of sweating with palpitations and high blood pressure can rarely signal an adrenal tumour — a urine/blood test screens for it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyperhidrosis/', redFlagAction: '\u26A1 Metanephrines + endocrine' },
    ],
    effects: {
      age: (v) => (v >= 45 && v <= 56) ? { menopause: +8 } : {},
      onset_young: { primary_focal: +14 },
      drugs: { drug: +20 },

      focal_symmetrical: { primary_focal: +20, thyroid: -6, lymphoma: -8 },
      generalised_night: { lymphoma: +8, infection: +8, thyroid: +6, primary_focal: -10 },
      family: { primary_focal: +12 },

      thyroid_sx: { thyroid: +22 },
      menopausal: { menopause: +18 },
      infection: { infection: +18 },
      anxiety: { anxiety: +18 },
      hypoglyc: { phaeo: +16 },

      b_symptoms: { lymphoma: +30 },
    },
    askAbout: {
      primary_focal: ['focal_symmetrical', 'onset_young', 'family'],
      thyroid: ['thyroid_sx'],
      menopause: ['menopausal', 'age'],
      drug: ['drugs'],
      anxiety: ['anxiety'],
      infection: ['infection'],
      lymphoma: ['b_symptoms'],
      phaeo: ['hypoglyc'],
    },
    sources: [
      { label: 'NICE CKS — Hyperhidrosis', url: 'https://cks.nice.org.uk/topics/hyperhidrosis/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'hyperhidrosis', label: 'Hyperhidrosis', triage: 'hyperhidrosis-triage', dx: 'hyperhidrosis-dx' }
  );
})();
