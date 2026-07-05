/* ============================================
   Diagnostic Tool pack — UTI in Children
   Shared-id triage + differential. NICE CG54 / NG224.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Age', id: 'age_months', kind: 'number', label: 'Age', unit: 'months', min: 0, max: 216, step: 1 },

    { group: 'Symptoms', id: 'classic_luts', kind: 'check', label: 'Dysuria / frequency / smelly urine (older child)' },
    { group: 'Symptoms', id: 'unexplained_fever', kind: 'check', label: 'Unexplained fever (esp. infant) / vomiting / poor feeding' },
    { group: 'Urine', id: 'dip_positive', kind: 'check', label: 'Urine dip nitrites/leucocytes positive' },

    { group: 'Upper-tract / severity', id: 'systemic_loin', kind: 'check', label: 'Systemically unwell / loin pain / high fever (pyelonephritis)' },
    { group: 'Atypical / recurrent', id: 'atypical', kind: 'check', label: 'Atypical (non-E.coli / poor urine flow / raised creatinine / septicaemia / not responding 48h)' },
    { group: 'Atypical / recurrent', id: 'recurrent', kind: 'check', label: 'Recurrent UTIs' },

    { group: 'Red flags', id: 'under3m', kind: 'check', label: 'Age <3 months with suspected UTI' },
  ];

  if (window.RGPTriage) RGPTriage.register('uti-children-triage', {
    title: 'UTI in children — triage',
    subtitle: 'Tick features. Surfaces the under-3-month rule, pyelonephritis and imaging criteria (NICE NG224).',
    guideline: 'NICE NG224 / CG54',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Send urine (clean-catch) before antibiotics for any unexplained fever or urinary symptoms; treat lower UTI with 3 days oral antibiotic; safety-net; arrange imaging only per atypical/recurrent criteria.',
    rules: [
      {
        id: 'under3m', tier: 'emergency',
        label: 'Age <3 months with suspected UTI',
        action: 'Same-day paediatric referral — urgent urine + IV antibiotics pathway.',
        patientPhrase: '"A baby this young with a possible urine infection needs same-day hospital assessment."',
        source: 'NICE NG224', sourceUrl: 'https://www.nice.org.uk/guidance/ng224',
        when: i => i.under3m || (i.age_months != null && i.age_months < 3 && (i.unexplained_fever || i.dip_positive)),
      },
      {
        id: 'pyelonephritis', tier: 'urgent',
        label: 'Upper UTI / pyelonephritis — systemic / loin pain / high fever',
        action: '7–10 day antibiotic; consider admission; arrange imaging per criteria.',
        source: 'NICE NG224',
        when: i => i.systemic_loin,
      },
      {
        id: 'atypical', tier: 'urgent',
        label: 'Atypical / recurrent UTI — imaging pathway',
        action: 'USS (± DMSA/MCUG per age and pattern); paediatric referral.',
        source: 'NICE NG224',
        when: i => i.atypical || i.recurrent,
      },
      {
        id: 'lower_uti', tier: 'routine',
        label: 'Lower UTI',
        action: 'Clean-catch urine + culture; 3-day oral antibiotic; safety-net; advice.',
        source: 'NICE NG224',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG224 — UTI in under 16s', url: 'https://www.nice.org.uk/guidance/ng224' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('uti-children-dx', {
    title: 'Suspected childhood UTI — assessment',
    subtitle: 'The engine grades lower vs upper UTI and flags the under-3-month, atypical and recurrent criteria that change management and imaging.',
    guideline: 'NICE NG224',
    patientPresenting: "I think my child has a water infection, doctor.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'lower_uti', name: 'Lower UTI (cystitis)', summary: 'Dysuria/frequency, positive dip, well child', baseline: 11, category: 'common',
        keyExam: 'Suprapubic tenderness; afebrile/low fever.', nextIx: 'Urine culture; 3-day oral antibiotic.',
        patientPhrase: 'A bladder infection. A short antibiotic course treats it; we send a urine sample to confirm.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng224' },
      { id: 'pyelonephritis', name: 'Upper UTI / pyelonephritis', summary: 'Systemic / loin pain / high fever', baseline: 4, category: 'common',
        keyExam: 'Loin tenderness, fever.', nextIx: '7–10 day antibiotic; consider admission; imaging per criteria.',
        patientPhrase: 'A kidney infection — a longer antibiotic course, and hospital if your child is very unwell.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng224' },
      { id: 'no_uti', name: 'Alternative diagnosis (no UTI)', summary: 'Negative urine / another source of fever', baseline: 5, category: 'common',
        keyExam: 'Find the focal source.', nextIx: 'Reassess; treat the actual cause.',
        patientPhrase: 'If the urine is clear, we look for another cause of the symptoms.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng143' },

      { id: 'infant_serious', name: 'Infant <3 months / serious infection', summary: 'Young infant with possible UTI', baseline: 1, category: 'cant-miss',
        keyExam: 'Non-specific (poor feeding, irritability).', nextIx: '\u26A1 Same-day paediatric — urine + IV antibiotics; full septic screen as indicated.',
        patientPhrase: 'A baby this young needs same-day hospital assessment, as infections can be serious and non-specific.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng224', redFlagAction: '\u26A1 Same-day paediatric' },
    ],
    effects: {
      age_months: (v) => v != null && v < 3 ? { infant_serious: +10 } : {},

      classic_luts: { lower_uti: +18 },
      unexplained_fever: { pyelonephritis: +8, lower_uti: +4, infant_serious: +4 },
      dip_positive: { lower_uti: +10, pyelonephritis: +6, no_uti: -10 },

      systemic_loin: { pyelonephritis: +24 },
      atypical: { pyelonephritis: +6, infant_serious: +4 },
      recurrent: { pyelonephritis: +4 },
      under3m: { infant_serious: +20 },
    },
    askAbout: {
      lower_uti: ['classic_luts', 'dip_positive'],
      pyelonephritis: ['systemic_loin'],
      no_uti: ['dip_positive'],
      infant_serious: ['under3m'],
    },
    sources: [
      { label: 'NICE NG224 — UTI in under 16s', url: 'https://www.nice.org.uk/guidance/ng224' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'uti-children', label: 'UTI in children', triage: 'uti-children-triage', dx: 'uti-children-dx' }
  );
})();
