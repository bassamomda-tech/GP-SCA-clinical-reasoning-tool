/* ============================================
   Diagnostic Tool pack — Constipation (adult)
   Shared-id triage + differential. NICE NG12 (colorectal) ·
   CKS Constipation · secondary causes (drugs, metabolic, neuro).
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'opioids', kind: 'check', label: 'Opioids / iron / CCB / anticholinergic / antacid' },
    { group: 'Demographics & context', id: 'low_fibre', kind: 'check', label: 'Low fibre / fluid / reduced mobility' },
    { group: 'Demographics & context', id: 'preg', kind: 'check', label: 'Pregnant / postnatal' },

    { group: 'Bowel pattern', id: 'straining_hard', kind: 'check', label: 'Straining / hard, lumpy stools / incomplete emptying' },
    { group: 'Bowel pattern', id: 'longstanding', kind: 'check', label: 'Long-standing, stable pattern' },
    { group: 'Bowel pattern', id: 'overflow', kind: 'check', label: 'Overflow / faecal soiling' },
    { group: 'Bowel pattern', id: 'outlet', kind: 'check', label: 'Sensation of blockage / digitation / incomplete evacuation' },
    { group: 'Bowel pattern', id: 'alt_diarrhoea', kind: 'check', label: 'Alternating with diarrhoea, bloating, pain eased by defecation' },

    { group: 'Secondary-cause clues', id: 'hypothyroid_sx', kind: 'check', label: 'Cold intolerance / weight gain / fatigue (thyroid)' },
    { group: 'Secondary-cause clues', id: 'hypercalc_sx', kind: 'check', label: 'Thirst / polyuria / confusion / bone pain (calcium)' },
    { group: 'Secondary-cause clues', id: 'neuro', kind: 'check', label: 'Neuro disease (Parkinson\u2019s, MS, cord lesion) / new neuro signs' },

    { group: 'Red flags', id: 'new_change', kind: 'check', label: 'New onset / change in bowel habit (esp. ≥60)' },
    { group: 'Red flags', id: 'rectal_bleed', kind: 'check', label: 'Rectal bleeding' },
    { group: 'Red flags', id: 'weight_loss', kind: 'check', label: 'Unintentional weight loss' },
    { group: 'Red flags', id: 'mass_anaemia', kind: 'check', label: 'Abdominal / rectal mass / iron-deficiency anaemia' },
    { group: 'Red flags', id: 'obstruction', kind: 'check', label: 'Vomiting / distension / no flatus / severe pain' },
  ];

  if (window.RGPTriage) RGPTriage.register('constipation-triage', {
    title: 'Constipation — red-flag triage',
    subtitle: 'Tick features. Surfaces obstruction, colorectal 2WW and secondary-cause pathways.',
    guideline: 'NICE NG12 · CKS Constipation',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired — manage as primary constipation: fibre, fluids, mobility, laxatives (bulk → osmotic → stimulant); review meds; work the differential below.',
    rules: [
      {
        id: 'obstruction', tier: 'emergency',
        label: 'Possible bowel obstruction — vomiting, distension, no flatus, severe pain',
        action: 'Same-day admission — examination, bloods, abdominal imaging.',
        patientPhrase: '"This pattern can mean the bowel is blocked — you need urgent assessment in hospital today."',
        source: 'CKS Constipation',
        when: i => i.obstruction,
      },
      {
        id: 'crc_2ww', tier: 'cancer',
        label: 'Age ≥60 with change in bowel habit, or any age with rectal bleeding + change / mass / anaemia — colorectal 2WW',
        action: 'Lower GI 2WW ± FIT.',
        patientPhrase: '"A change in bowel pattern at your age needs a fast referral to rule out a bowel cause."',
        source: 'NICE NG12 §1.3', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => (i.age != null && i.age >= 60 && i.new_change) || i.mass_anaemia || (i.rectal_bleed && (i.new_change || i.weight_loss)),
      },
      {
        id: 'metabolic', tier: 'urgent',
        label: 'Possible secondary cause — thyroid / calcium clues',
        action: 'Check TFT, calcium, U&E, glucose; treat underlying cause.',
        source: 'CKS Constipation',
        when: i => i.hypothyroid_sx || i.hypercalc_sx,
      },
      {
        id: 'neuro', tier: 'urgent',
        label: 'New neurological signs with constipation — exclude cord / cauda equina',
        action: 'Neuro exam incl. perianal sensation/tone; urgent imaging if red flags.',
        source: 'NICE NG59',
        when: i => i.neuro,
      },
      {
        id: 'impaction', tier: 'urgent',
        label: 'Faecal impaction with overflow soiling',
        action: 'Disimpaction regimen (high-dose macrogol); review.',
        source: 'CKS Constipation',
        when: i => i.overflow,
      },
      {
        id: 'primary', tier: 'routine',
        label: 'Primary constipation, no red flags',
        action: 'Lifestyle + laxative ladder; review meds; toileting advice.',
        source: 'CKS Constipation',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE CKS — Constipation', url: 'https://cks.nice.org.uk/topics/constipation/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('constipation-dx', {
    title: 'Constipation — differential diagnosis',
    subtitle: 'The engine ranks primary, drug-induced, metabolic and outlet causes, and always surfaces colorectal cancer / obstruction when their triggers fire.',
    guideline: 'NICE CKS Constipation · NG12',
    patientPresenting: "I just can't go properly, doctor — I'm straining, bloated, and it's been weeks.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'primary', name: 'Primary (functional) constipation', summary: 'Low fibre/fluid/mobility, straining, hard stools, no red flags', baseline: 12, category: 'common',
        keyExam: 'Soft abdomen, loaded colon, normal PR.', nextIx: 'Clinical; lifestyle + laxative ladder; review at 4–6 weeks.',
        patientPhrase: 'The bowel is sluggish, usually from diet, fluids and activity. Simple measures and a laxative get it moving.',
        ciksUrl: 'https://cks.nice.org.uk/topics/constipation/' },
      { id: 'drug', name: 'Drug-induced constipation', summary: 'Opioids, iron, CCB, anticholinergics, antacids', baseline: 8, category: 'common',
        keyExam: 'Medication timeline.', nextIx: 'Medication review; co-prescribe laxative with opioids (osmotic + stimulant).',
        patientPhrase: 'A medication is slowing the bowel down. We adjust it or add a regular laxative to balance it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/constipation/' },
      { id: 'ibs_c', name: 'IBS with constipation', summary: 'Pain eased by defecation, bloating, alternating habit, younger', baseline: 6, category: 'common',
        keyExam: 'Normal exam; no red flags.', nextIx: 'Positive Rome diagnosis after excluding red flags; FBC/CRP/coeliac; antispasmodic, soluble fibre, laxative.',
        patientPhrase: 'This pattern fits irritable bowel — a real but benign disorder of how the gut works, manageable with diet and medication.',
        ciksUrl: 'https://cks.nice.org.uk/topics/irritable-bowel-syndrome/', caseLink: '../cases/ibs.html' },
      { id: 'hypothyroid', name: 'Hypothyroidism', summary: 'Constipation + cold intolerance + weight gain + fatigue', baseline: 3, category: 'less-common',
        keyExam: 'Bradycardia, dry skin, slow-relaxing reflexes.', nextIx: 'TSH (+ FT4 if raised); levothyroxine if confirmed.',
        patientPhrase: 'An underactive thyroid slows the whole system, including the bowel. Treating it helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypothyroidism/' },
      { id: 'hypercalc', name: 'Hypercalcaemia', summary: 'Constipation + thirst + polyuria + confusion + bone pain', baseline: 2, category: 'less-common',
        keyExam: 'Dehydration, confusion.', nextIx: 'Adjusted calcium, PTH, U&E; investigate cause (hyperparathyroidism, malignancy).',
        patientPhrase: 'A high calcium level can slow the bowel and cause these symptoms — a blood test checks it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypercalcaemia/' },
      { id: 'outlet', name: 'Outlet / pelvic-floor dysfunction', summary: 'Sensation of blockage, digitation, incomplete evacuation', baseline: 3, category: 'less-common',
        keyExam: 'PR — paradoxical contraction, rectocele, reduced descent.', nextIx: 'Pelvic-floor physiotherapy / biofeedback; refer if refractory.',
        patientPhrase: 'The muscles that coordinate emptying are not relaxing properly. Targeted physiotherapy retrains them.',
        ciksUrl: 'https://cks.nice.org.uk/topics/constipation/' },

      { id: 'crc', name: 'Colorectal cancer / obstruction', summary: 'New change in habit ≥60, rectal bleeding, weight loss, mass, obstruction', baseline: 1, category: 'cant-miss',
        keyExam: 'Abdominal / rectal mass, distension, cachexia.', nextIx: '\u26A1 Lower GI 2WW (NICE NG12); same-day admission if obstruction features.',
        patientPhrase: 'A recent change in bowel habit at your age needs an urgent specialist look to rule out a bowel cause.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 2WW / admit if obstructed' },
    ],
    effects: {
      age: (v) => v >= 60 ? { crc: +8, primary: +2, ibs_c: -3 } : (v < 45 ? { ibs_c: +6, crc: -2 } : {}),
      opioids: { drug: +22 },
      low_fibre: { primary: +14 },
      preg: { primary: +6 },

      straining_hard: { primary: +12, outlet: +4 },
      longstanding: { primary: +8, ibs_c: +4, crc: -4 },
      overflow: { primary: +6, crc: +4 },
      outlet: { outlet: +20 },
      alt_diarrhoea: { ibs_c: +18 },

      hypothyroid_sx: { hypothyroid: +20 },
      hypercalc_sx: { hypercalc: +20 },
      neuro: { outlet: +6 },

      new_change: { crc: +16 },
      rectal_bleed: { crc: +12 },
      weight_loss: { crc: +18 },
      mass_anaemia: { crc: +22 },
      obstruction: { crc: +16 },
    },
    askAbout: {
      primary: ['low_fibre', 'straining_hard'],
      drug: ['opioids'],
      ibs_c: ['alt_diarrhoea', 'age'],
      hypothyroid: ['hypothyroid_sx'],
      hypercalc: ['hypercalc_sx'],
      outlet: ['outlet'],
      crc: ['new_change', 'rectal_bleed', 'weight_loss', 'mass_anaemia'],
    },
    sources: [
      { label: 'NICE CKS — Constipation', url: 'https://cks.nice.org.uk/topics/constipation/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'constipation', label: 'Constipation', triage: 'constipation-triage', dx: 'constipation-dx' }
  );
})();
