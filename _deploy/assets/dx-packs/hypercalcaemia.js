/* ============================================
   Diagnostic Tool pack — Hypercalcaemia
   Shared-id triage + differential. CKS Hypercalcaemia · NICE NG12.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'malig_hx', kind: 'check', label: 'Known / suspected malignancy' },
    { group: 'Demographics & context', id: 'thiazide_lithium', kind: 'check', label: 'Thiazide / lithium / vitamin D / calcium supplements' },
    { group: 'Demographics & context', id: 'sarcoid', kind: 'check', label: 'Sarcoidosis / TB / granulomatous disease' },

    { group: 'Symptoms', id: 'stones', kind: 'check', label: 'Renal stones / polyuria / thirst' },
    { group: 'Symptoms', id: 'bones', kind: 'check', label: 'Bone pain / fractures' },
    { group: 'Symptoms', id: 'groans', kind: 'check', label: 'Abdominal pain / constipation / nausea' },
    { group: 'Symptoms', id: 'moans', kind: 'check', label: 'Confusion / low mood / fatigue' },
    { group: 'Symptoms', id: 'weight_loss', kind: 'check', label: 'Weight loss / night sweats' },

    { group: 'Bloods', id: 'calcium', kind: 'number', label: 'Adjusted calcium', unit: 'mmol/L', step: 0.01 },
    { group: 'Bloods', id: 'pth_high', kind: 'check', label: 'PTH high / inappropriately normal' },
    { group: 'Bloods', id: 'pth_low', kind: 'check', label: 'PTH low / suppressed' },

    { group: 'Red flags', id: 'severe_sx', kind: 'check', label: 'Drowsy / vomiting / dehydrated / arrhythmia' },
  ];

  if (window.RGPTriage) RGPTriage.register('hypercalcaemia-triage', {
    title: 'Hypercalcaemia — triage',
    subtitle: 'Enter calcium / tick features. Surfaces severe hypercalcaemia, malignancy and PTH-driven pathways.',
    guideline: 'CKS Hypercalcaemia · NICE NG12',
    inputs: INPUTS,
    defaultMessage: 'No emergency rule fired. Recheck adjusted calcium; send PTH (the pivot), vitamin D, U&E, phosphate, myeloma screen if indicated; treat cause.',
    rules: [
      {
        id: 'severe', tier: 'emergency',
        label: 'Severe hypercalcaemia (Ca >3.4) or symptomatic (drowsy / vomiting / arrhythmia)',
        action: 'Same-day admission — IV fluids ± bisphosphonate; ECG.',
        patientPhrase: '"Your calcium is dangerously high — you need hospital treatment today to bring it down safely."',
        source: 'CKS Hypercalcaemia',
        when: i => (i.calcium != null && i.calcium > 3.4) || i.severe_sx,
      },
      {
        id: 'malignancy_2ww', tier: 'cancer',
        label: 'Hypercalcaemia + weight loss / suppressed PTH — exclude malignancy / myeloma',
        action: 'Urgent workup: myeloma screen, imaging; 2WW per suspected primary (NICE NG12).',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.malig_hx || (i.pth_low && i.weight_loss),
      },
      {
        id: 'moderate', tier: 'urgent',
        label: 'Moderate hypercalcaemia (Ca 3.0–3.4) or symptomatic',
        action: 'Urgent: PTH, vitamin D, myeloma screen, renal function; encourage fluids; review meds.',
        source: 'CKS Hypercalcaemia',
        when: i => i.calcium != null && i.calcium >= 3.0,
      },
      {
        id: 'mild', tier: 'routine',
        label: 'Mild hypercalcaemia (Ca <3.0), no red flags',
        action: 'Recheck; PTH-led workup; stop thiazide / calcium / vit D if implicated; refer endocrine if primary hyperparathyroidism.',
        source: 'CKS Hypercalcaemia',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Hypercalcaemia', url: 'https://cks.nice.org.uk/topics/hypercalcaemia/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('hypercalcaemia-dx', {
    title: 'Hypercalcaemia — differential (PTH pivot)',
    subtitle: 'PTH splits the differential. The engine weights primary hyperparathyroidism (PTH high) against malignancy and other PTH-independent causes (PTH low), and flags severe hypercalcaemia.',
    guideline: 'CKS Hypercalcaemia',
    patientPresenting: "A blood test showed my calcium is high, doctor — I've been thirsty, constipated and a bit foggy.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'pri_hpt', name: 'Primary hyperparathyroidism', summary: 'High/inappropriately-normal PTH, often mild, outpatient', baseline: 11, category: 'common',
        keyExam: 'Often well; renal stones, osteoporosis.', nextIx: 'PTH high with raised Ca; vitamin D, 24h urinary calcium (exclude FHH); refer endocrine/surgery.',
        patientPhrase: 'A parathyroid gland is overactive, raising calcium. It is usually mild; surgery cures it when needed.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypercalcaemia/' },
      { id: 'malignancy', name: 'Malignancy (PTHrP / bone mets / myeloma)', summary: 'Suppressed PTH, weight loss, often higher calcium', baseline: 5, category: 'cant-miss',
        keyExam: 'Cachexia, bone tenderness, lymphadenopathy, organomegaly.', nextIx: '\u26A1 Myeloma screen, imaging, PTHrP; 2WW per suspected primary (NICE NG12).',
        patientPhrase: 'A cancer can raise calcium. We test urgently — finding the cause directs treatment.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Urgent malignancy workup' },
      { id: 'drug', name: 'Drug / supplement-induced', summary: 'Thiazide, lithium, vitamin D / calcium excess', baseline: 4, category: 'common',
        keyExam: 'Medication review.', nextIx: 'Stop/replace offending agent; recheck calcium.',
        patientPhrase: 'A medication or supplement is raising your calcium. Stopping it usually corrects the level.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypercalcaemia/' },
      { id: 'granulomatous', name: 'Granulomatous disease (sarcoid / TB)', summary: 'Raised vitamin D activation, suppressed PTH', baseline: 2, category: 'less-common',
        keyExam: 'Respiratory / systemic features of sarcoid / TB.', nextIx: 'PTH low, raised 1,25-vit D, ACE, CXR; treat underlying disease.',
        patientPhrase: 'An inflammatory condition can raise calcium by over-activating vitamin D. We investigate and treat the cause.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypercalcaemia/' },
      { id: 'fhh', name: 'Familial hypocalciuric hypercalcaemia', summary: 'Mild lifelong hypercalcaemia, low urinary calcium, FH', baseline: 1, category: 'less-common',
        keyExam: 'Asymptomatic; family history.', nextIx: 'Low urinary calcium:creatinine clearance ratio; genetics; no treatment needed.',
        patientPhrase: 'A harmless inherited variation keeps calcium slightly high — it does not need treatment, just recognition.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypercalcaemia/' },
    ],
    effects: {
      age: (v) => v >= 60 ? { malignancy: +6, pri_hpt: +2 } : {},
      malig_hx: { malignancy: +20 },
      thiazide_lithium: { drug: +20 },
      sarcoid: { granulomatous: +20 },

      stones: { pri_hpt: +8 },
      bones: { pri_hpt: +6, malignancy: +6 },
      groans: { pri_hpt: +2, malignancy: +2 },
      moans: { malignancy: +2 },
      weight_loss: { malignancy: +16 },

      calcium: (v) => v == null ? {} : (v > 3.0 ? { malignancy: +6 } : { pri_hpt: +4, fhh: +2 }),
      pth_high: { pri_hpt: +26, malignancy: -10 },
      pth_low: { malignancy: +14, granulomatous: +8, drug: +4, pri_hpt: -16 },
    },
    askAbout: {
      pri_hpt: ['pth_high', 'stones'],
      malignancy: ['weight_loss', 'pth_low', 'malig_hx'],
      drug: ['thiazide_lithium'],
      granulomatous: ['sarcoid', 'pth_low'],
      fhh: ['pth_high'],
    },
    sources: [
      { label: 'NICE CKS — Hypercalcaemia', url: 'https://cks.nice.org.uk/topics/hypercalcaemia/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'hypercalcaemia', label: 'Hypercalcaemia', triage: 'hypercalcaemia-triage', dx: 'hypercalcaemia-dx' }
  );
})();
