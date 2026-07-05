/* ============================================
   Diagnostic Tool pack — Delirium (acute confusion)
   Shared-id triage + differential (cause-finding). NICE CG103 · 4AT · PINCH ME.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'dementia', kind: 'check', label: 'Background dementia / frailty' },
    { group: 'Onset', id: 'acute_fluctuating', kind: 'check', label: 'Acute onset, fluctuating, inattention (4AT positive)' },
    { group: 'Onset', id: 'chronic_stable', kind: 'check', label: 'Chronic, stable, gradual decline (not acute)' },

    { group: 'PINCH ME causes', id: 'infection', kind: 'check', label: 'Infection (UTI, chest, cellulitis, fever)' },
    { group: 'PINCH ME causes', id: 'retention_constipation', kind: 'check', label: 'Urinary retention / constipation' },
    { group: 'PINCH ME causes', id: 'drugs', kind: 'check', label: 'New/changed drug (opioid, anticholinergic, benzo, steroid)' },
    { group: 'PINCH ME causes', id: 'metabolic', kind: 'check', label: 'Metabolic (Na/Ca/glucose, AKI, hypoxia)' },
    { group: 'PINCH ME causes', id: 'alcohol_withdrawal', kind: 'check', label: 'Alcohol / benzodiazepine withdrawal' },
    { group: 'PINCH ME causes', id: 'pain', kind: 'check', label: 'Uncontrolled pain' },

    { group: 'Mood / cognition', id: 'low_mood', kind: 'check', label: 'Low mood / poor sleep / appetite (depression)' },

    { group: 'Red flags', id: 'sepsis', kind: 'check', label: 'Sepsis signs / hypoxia / hypoglycaemia' },
    { group: 'Red flags', id: 'focal_neuro_head', kind: 'check', label: 'Focal neurology / head injury / anticoagulated' },
  ];

  if (window.RGPTriage) RGPTriage.register('delirium-triage', {
    title: 'Delirium — triage',
    subtitle: 'Tick features. Surfaces sepsis/hypoxia, intracranial and reversible-cause pathways (NICE CG103).',
    guideline: 'NICE CG103 · 4AT',
    inputs: INPUTS,
    defaultMessage: 'No emergency rule fired. Confirm delirium (4AT), then screen for cause (PINCH ME): infection, urine, bloods (FBC, U&E, glucose, Ca, CRP), drug review, retention/constipation, hypoxia; treat the cause and manage environment.',
    rules: [
      {
        id: 'sepsis_hypoxia', tier: 'emergency',
        label: 'Delirium with sepsis / hypoxia / hypoglycaemia',
        action: 'Same-day admission / sepsis pathway — treat the acute cause urgently.',
        patientPhrase: '"The confusion is coming from a serious acute illness — they need hospital care today."',
        source: 'NICE NG51 / CG103',
        when: i => i.sepsis,
      },
      {
        id: 'intracranial', tier: 'emergency',
        label: 'Focal neurology / head injury (esp. anticoagulated) — exclude intracranial cause',
        action: 'Same-day assessment + urgent CT head.',
        source: 'NICE CG103',
        when: i => i.focal_neuro_head,
      },
      {
        id: 'withdrawal', tier: 'urgent',
        label: 'Alcohol / benzodiazepine withdrawal',
        action: 'Urgent — withdrawal regimen (benzodiazepine), parenteral thiamine; admit if severe.',
        source: 'CKS Alcohol withdrawal',
        when: i => i.alcohol_withdrawal,
      },
      {
        id: 'reversible', tier: 'urgent',
        label: 'Acute delirium — find & treat the reversible cause',
        action: 'Screen PINCH ME; treat infection/retention/constipation; review drugs; correct metabolic; consider admission if unsafe.',
        source: 'NICE CG103', sourceUrl: 'https://www.nice.org.uk/guidance/cg103',
        when: i => i.acute_fluctuating || i.infection || i.metabolic || i.drugs || i.retention_constipation,
      },
      {
        id: 'not_delirium', tier: 'routine',
        label: 'Chronic decline — consider dementia / depression rather than delirium',
        action: 'Cognitive assessment when stable; mood screen; collateral history; memory pathway if appropriate.',
        source: 'NICE CG103',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CG103 — Delirium', url: 'https://www.nice.org.uk/guidance/cg103' },
      { label: 'NICE NG51 — Sepsis', url: 'https://www.nice.org.uk/guidance/ng51' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('delirium-dx', {
    title: 'Acute confusion — cause & mimics',
    subtitle: 'Delirium is a syndrome with a cause to find. The engine ranks the PINCH ME causes and distinguishes delirium from dementia and depression, always surfacing sepsis and intracranial causes when triggered.',
    guideline: 'NICE CG103 · 4AT',
    patientPresenting: "My mother has suddenly become confused over the last day, doctor — she's not herself at all.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'infection', name: 'Infection-related delirium', summary: 'UTI / chest / cellulitis, acute fluctuating confusion', baseline: 11, category: 'common',
        keyExam: 'Source exam; fever, focal infective signs.', nextIx: 'Urine dip + culture, CXR, FBC/CRP/U&E; treat infection; supportive care.',
        patientPhrase: 'An infection is the commonest trigger for sudden confusion in older people. Treating it usually clears the confusion.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg103' },
      { id: 'drugs', name: 'Drug-induced delirium', summary: 'New/changed opioid, anticholinergic, benzodiazepine, steroid', baseline: 6, category: 'common',
        keyExam: 'Medication timeline.', nextIx: 'Medication review; stop/reduce culprit; review anticholinergic burden.',
        patientPhrase: 'A medication may be causing the confusion. Adjusting it often resolves it.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg103' },
      { id: 'retention_constipation', name: 'Retention / constipation', summary: 'Urinary retention or faecal loading', baseline: 5, category: 'common',
        keyExam: 'Palpable bladder; loaded colon / PR.', nextIx: 'Bladder scan, PR; catheterise / disimpact; review fluids.',
        patientPhrase: 'A full bladder or constipation can cause confusion in frail patients. Relieving it helps quickly.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg103' },
      { id: 'metabolic', name: 'Metabolic / hypoxic', summary: 'Na/Ca/glucose disturbance, AKI, hypoxia', baseline: 5, category: 'common',
        keyExam: 'Hydration, oxygen saturations.', nextIx: 'U&E, glucose, calcium, FBC/CRP, SpO₂; correct abnormality.',
        patientPhrase: 'A chemical imbalance or low oxygen can confuse the brain. Blood tests find it and correcting it helps.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg103' },
      { id: 'dementia', name: 'Dementia (chronic)', summary: 'Gradual, stable cognitive decline (not acute)', baseline: 4, category: 'less-common',
        keyExam: 'Stable cognitive impairment; collateral history.', nextIx: 'Assess when medically stable; memory pathway; exclude reversible causes first.',
        patientPhrase: 'If the change has been gradual over months, this points to memory disease rather than acute confusion — assessed once they are well.',
        ciksUrl: 'https://cks.nice.org.uk/topics/dementia/', caseLink: '../cases/dementia.html' },
      { id: 'depression', name: 'Depression (pseudodementia)', summary: 'Low mood, poor sleep/appetite, subjective memory complaints', baseline: 2, category: 'less-common',
        keyExam: 'Mood/affect; cognitive effort.', nextIx: 'Mood screen; treat depression; reassess cognition.',
        patientPhrase: 'Low mood can mimic confusion and memory loss. Treating the depression often restores function.',
        ciksUrl: 'https://cks.nice.org.uk/topics/depression/' },

      { id: 'sepsis', name: 'Sepsis / acute severe illness', summary: 'Delirium + sepsis / hypoxia / hypoglycaemia', baseline: 1, category: 'cant-miss',
        keyExam: 'Septic, hypoxic, unwell.', nextIx: '\u26A1 Same-day admission / sepsis pathway.',
        patientPhrase: 'The confusion is from a serious acute illness — that needs hospital care today.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng51', redFlagAction: '\u26A1 Same-day admission' },
      { id: 'intracranial', name: 'Intracranial cause (bleed / stroke)', summary: 'Focal neurology, head injury, anticoagulated', baseline: 1, category: 'cant-miss',
        keyExam: 'Focal deficit, signs of head injury.', nextIx: '\u26A1 Urgent CT head + same-day assessment.',
        patientPhrase: 'New confusion with these features needs an urgent brain scan today.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg103', redFlagAction: '\u26A1 Urgent CT head' },
    ],
    effects: {
      age: (v) => v >= 75 ? { infection: +4, dementia: +3 } : {},
      dementia: { infection: +3, dementia: +6 },

      acute_fluctuating: { infection: +6, drugs: +4, metabolic: +4, dementia: -8 },
      chronic_stable: { dementia: +20, infection: -8 },

      infection: { infection: +22 },
      retention_constipation: { retention_constipation: +22 },
      drugs: { drugs: +22 },
      metabolic: { metabolic: +20 },
      alcohol_withdrawal: { metabolic: +4 },
      pain: { drugs: +2, retention_constipation: +2 },

      low_mood: { depression: +20 },

      sepsis: { sepsis: +30 },
      focal_neuro_head: { intracranial: +30 },
    },
    askAbout: {
      infection: ['infection', 'acute_fluctuating'],
      drugs: ['drugs'],
      retention_constipation: ['retention_constipation'],
      metabolic: ['metabolic'],
      dementia: ['chronic_stable'],
      depression: ['low_mood'],
      sepsis: ['sepsis'],
      intracranial: ['focal_neuro_head'],
    },
    sources: [
      { label: 'NICE CG103 — Delirium', url: 'https://www.nice.org.uk/guidance/cg103' },
      { label: 'NICE CKS — Dementia', url: 'https://cks.nice.org.uk/topics/dementia/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'delirium', label: 'Delirium', triage: 'delirium-triage', dx: 'delirium-dx' }
  );
})();
