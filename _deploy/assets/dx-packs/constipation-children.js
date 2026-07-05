/* ============================================
   Diagnostic Tool pack — Constipation in Children
   Shared-id triage + differential. NICE CG99.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Age', id: 'age_years', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 18, step: 1 },

    { group: 'Functional features', id: 'functional', kind: 'check', label: 'Hard/infrequent stools, withholding, painful defecation, started after potty-training/illness' },
    { group: 'Functional features', id: 'overflow', kind: 'check', label: 'Soiling / overflow / palpable faecal mass' },

    { group: 'Red flags (organic)', id: 'delayed_meconium', kind: 'check', label: 'Failure to pass meconium <48h / from birth (Hirschsprung)' },
    { group: 'Red flags (organic)', id: 'ribbon_stool', kind: 'check', label: 'Ribbon stools / abdominal distension / bilious vomiting' },
    { group: 'Red flags (organic)', id: 'faltering', kind: 'check', label: 'Faltering growth / weight loss' },
    { group: 'Red flags (organic)', id: 'neuro_spinal', kind: 'check', label: 'Leg weakness / abnormal reflexes / sacral dimple / abnormal gait (spinal)' },
    { group: 'Red flags (organic)', id: 'safeguarding', kind: 'check', label: 'Safeguarding concern / disclosure' },
  ];

  if (window.RGPTriage) RGPTriage.register('constipation-children-triage', {
    title: 'Constipation in children — triage',
    subtitle: 'Tick features. Surfaces Hirschsprung, spinal and safeguarding red flags (NICE CG99).',
    guideline: 'NICE CG99',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired — idiopathic constipation. Disimpaction (escalating macrogol) then maintenance ≥several months; diet/fluids/toileting routine; do NOT start before disimpaction; review.',
    rules: [
      {
        id: 'organic', tier: 'urgent',
        label: 'Red flags for organic cause — Hirschsprung / spinal / faltering growth',
        action: 'Refer paediatrics (do not just treat as functional); spinal exam; growth review.',
        patientPhrase: '"A few features mean I want a specialist to check for an underlying cause."',
        source: 'NICE CG99', sourceUrl: 'https://www.nice.org.uk/guidance/cg99',
        when: i => i.delayed_meconium || i.ribbon_stool || i.faltering || i.neuro_spinal,
      },
      {
        id: 'safeguarding', tier: 'urgent',
        label: 'Safeguarding concern',
        action: 'Follow safeguarding pathway alongside treatment.',
        source: 'NICE CG89',
        when: i => i.safeguarding,
      },
      {
        id: 'impaction', tier: 'routine',
        label: 'Faecal impaction with overflow',
        action: 'Disimpaction regimen (high-dose macrogol, escalate); then maintenance; explain overflow soiling.',
        source: 'NICE CG99',
        when: i => i.overflow,
      },
      {
        id: 'functional', tier: 'routine',
        label: 'Idiopathic constipation',
        action: 'Macrogol maintenance; diet/fluids; toileting routine; continue ≥several months after regular.',
        source: 'NICE CG99',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CG99 — Constipation in children', url: 'https://www.nice.org.uk/guidance/cg99' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('constipation-children-dx', {
    title: 'Constipation in children — differential',
    subtitle: 'The vast majority is idiopathic. The engine surfaces organic red flags (Hirschsprung, spinal) and safeguarding that change management.',
    guideline: 'NICE CG99',
    patientPresenting: "My child is really struggling to poo, doctor, and holds it in.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'functional', name: 'Idiopathic (functional) constipation', summary: 'Withholding, painful/hard stools, no red flags', baseline: 13, category: 'common',
        keyExam: 'Faecal loading; normal lower-limb neuro.', nextIx: 'Disimpaction then maintenance macrogol; diet/fluids/routine.',
        patientPhrase: 'This is the common, benign type — often a pain-withholding cycle. Softening stool and a routine break the cycle.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg99' },
      { id: 'overflow', name: 'Impaction with overflow soiling', summary: 'Soiling from a loaded rectum', baseline: 6, category: 'common',
        keyExam: 'Palpable faecal mass; soiling.', nextIx: 'Disimpaction first; explain overflow is not deliberate.',
        patientPhrase: 'A backed-up bowel can leak, causing soiling — this is not deliberate. Clearing it and maintenance treatment fix it.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg99' },

      { id: 'organic', name: 'Organic cause (Hirschsprung / spinal / metabolic)', summary: 'Delayed meconium, ribbon stools, faltering growth, neuro signs', baseline: 1, category: 'cant-miss',
        keyExam: 'Spinal/neuro signs; growth faltering.', nextIx: '\u26A1 Paediatric referral; do not manage as purely functional.',
        patientPhrase: 'A few features mean I want a specialist to look for an underlying bowel or spinal cause.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg99', redFlagAction: '\u26A1 Paediatric referral' },
    ],
    effects: {
      functional: { functional: +22 },
      overflow: { overflow: +22 },

      delayed_meconium: { organic: +26 },
      ribbon_stool: { organic: +18 },
      faltering: { organic: +16 },
      neuro_spinal: { organic: +22 },
      safeguarding: { organic: +4 },
    },
    askAbout: {
      functional: ['functional'],
      overflow: ['overflow'],
      organic: ['delayed_meconium', 'neuro_spinal', 'faltering'],
    },
    sources: [
      { label: 'NICE CG99 — Constipation in children', url: 'https://www.nice.org.uk/guidance/cg99' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'constipation-children', label: 'Constipation in children', triage: 'constipation-children-triage', dx: 'constipation-children-dx' }
  );
})();
