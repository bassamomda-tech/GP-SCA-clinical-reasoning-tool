/* ============================================
   Diagnostic Tool pack — Hypothyroidism
   Shared-id triage + differential. NICE NG145 · CKS Hypothyroidism.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'pregnant', kind: 'check', label: 'Pregnant / planning pregnancy' },
    { group: 'Demographics & context', id: 'fh_autoimmune', kind: 'check', label: 'Personal / FH autoimmune disease' },
    { group: 'Demographics & context', id: 'drugs', kind: 'check', label: 'Amiodarone / lithium / recent antithyroid / immunotherapy' },
    { group: 'Demographics & context', id: 'prev_thyroid', kind: 'check', label: 'Prior thyroidectomy / radioiodine / neck radiotherapy' },

    { group: 'Symptoms / signs', id: 'fatigue', kind: 'check', label: 'Fatigue / cold intolerance / weight gain' },
    { group: 'Symptoms / signs', id: 'constipation', kind: 'check', label: 'Constipation / dry skin / hair thinning' },
    { group: 'Symptoms / signs', id: 'bradycardia', kind: 'check', label: 'Bradycardia / slow-relaxing reflexes' },
    { group: 'Symptoms / signs', id: 'goitre', kind: 'check', label: 'Goitre' },

    { group: 'Bloods', id: 'tsh', kind: 'number', label: 'TSH', unit: 'mU/L', step: 0.1 },
    { group: 'Bloods', id: 'low_t4', kind: 'check', label: 'Free T4 low' },
    { group: 'Bloods', id: 'tpo', kind: 'check', label: 'TPO antibodies positive' },

    { group: 'Red flags', id: 'myxoedema', kind: 'check', label: 'Hypothermia + drowsy/confused + bradycardia (? myxoedema coma)' },
  ];

  if (window.RGPTriage) RGPTriage.register('hypothyroidism-triage', {
    title: 'Hypothyroidism — triage',
    subtitle: 'Tick features / enter TSH. Surfaces myxoedema, pregnancy and treatment thresholds.',
    guideline: 'NICE NG145 · CKS',
    inputs: INPUTS,
    defaultMessage: 'No emergency rule fired. Confirm with TSH (+ free T4); start/titrate levothyroxine for overt disease and recheck TFTs in 6–8 weeks.',
    rules: [
      {
        id: 'myxoedema', tier: 'emergency',
        label: 'Possible myxoedema coma — hypothermia + reduced consciousness + bradycardia',
        action: 'Call 999 — emergency admission for IV thyroid hormone + supportive care.',
        patientPhrase: '"Your thyroid is dangerously underactive — this needs emergency hospital care now."',
        source: 'BTA / endocrine emergencies',
        when: i => i.myxoedema,
      },
      {
        id: 'pregnancy', tier: 'urgent',
        label: 'Hypothyroidism in pregnancy / planning',
        action: 'Urgent — increase levothyroxine immediately on pregnancy; trimester-specific TSH targets; obstetric/endocrine input.',
        source: 'NICE NG145',
        when: i => i.pregnant,
      },
      {
        id: 'overt', tier: 'urgent',
        label: 'Overt hypothyroidism (TSH >10 or raised TSH + low T4)',
        action: 'Start levothyroxine (lower dose if elderly / cardiac); recheck 6–8 weeks.',
        source: 'NICE NG145',
        when: i => (i.tsh != null && i.tsh > 10) || i.low_t4,
      },
      {
        id: 'subclinical', tier: 'routine',
        label: 'Subclinical hypothyroidism (TSH 4–10, normal T4)',
        action: 'Repeat TFTs + TPO in 3 months; treat if symptomatic, TSH >10, pregnant/planning, or positive antibodies.',
        source: 'NICE NG145',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG145 — Thyroid disease', url: 'https://www.nice.org.uk/guidance/ng145' },
      { label: 'NICE CKS — Hypothyroidism', url: 'https://cks.nice.org.uk/topics/hypothyroidism/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('hypothyroidism-dx', {
    title: 'Hypothyroidism — differential (cause)',
    subtitle: 'Raised TSH confirmed — the engine weights the cause (autoimmune, iatrogenic, drug, central, transient) and flags myxoedema.',
    guideline: 'NICE NG145 · CKS',
    patientPresenting: "I'm exhausted, cold all the time and putting on weight, doctor — could it be my thyroid?",
    inputs: INPUTS,
    diagnoses: [
      { id: 'autoimmune', name: 'Autoimmune (Hashimoto\u2019s) hypothyroidism', summary: 'Raised TSH + positive TPO, ± goitre, FH autoimmune', baseline: 12, category: 'common',
        keyExam: 'Firm goitre or atrophic; signs of hypothyroidism.', nextIx: 'TSH + free T4 + TPO; levothyroxine; recheck 6–8 weeks.',
        patientPhrase: 'Your immune system is gradually reducing thyroid function. A daily tablet replaces the missing hormone and restores energy.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypothyroidism/' },
      { id: 'subclinical', name: 'Subclinical hypothyroidism', summary: 'TSH 4–10 with normal free T4', baseline: 6, category: 'common',
        keyExam: 'Often few signs.', nextIx: 'Repeat + TPO in 3 months; treat per symptoms / TSH / pregnancy / antibodies.',
        patientPhrase: 'Your thyroid is mildly underactive. We repeat the test and decide together whether treatment is worthwhile.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypothyroidism/' },
      { id: 'iatrogenic', name: 'Post-treatment / iatrogenic', summary: 'Prior thyroidectomy / radioiodine / neck radiotherapy', baseline: 4, category: 'less-common',
        keyExam: 'Thyroidectomy scar; history.', nextIx: 'Expected; titrate levothyroxine to target TSH.',
        patientPhrase: 'Previous thyroid treatment has left it underactive — replacement hormone keeps your levels normal.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypothyroidism/' },
      { id: 'drug', name: 'Drug-induced', summary: 'Amiodarone / lithium / immunotherapy', baseline: 3, category: 'less-common',
        keyExam: 'Medication review.', nextIx: 'Review drug with specialist; levothyroxine as needed.',
        patientPhrase: 'A medication is suppressing the thyroid. We adjust treatment and replace hormone if needed.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypothyroidism/' },
      { id: 'transient', name: 'Transient (post-partum / thyroiditis)', summary: 'Recent delivery or post-thyroiditis recovery phase', baseline: 2, category: 'less-common',
        keyExam: 'Recent pregnancy; previous thyrotoxic phase.', nextIx: 'Monitor; may recover; treat if symptomatic / planning pregnancy.',
        patientPhrase: 'This may be a temporary dip after inflammation or pregnancy — we monitor and treat only if needed.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypothyroidism/' },
      { id: 'central', name: 'Central (secondary) hypothyroidism', summary: 'Low T4 with inappropriately normal/low TSH; pituitary disease', baseline: 1, category: 'less-common',
        keyExam: 'Other pituitary hormone deficiency signs, visual fields.', nextIx: 'Pituitary function tests + MRI; do NOT titrate on TSH; endocrine referral.',
        patientPhrase: 'The control gland in the brain may be underactive. This needs specialist pituitary tests and careful treatment.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypothyroidism/' },

      { id: 'myxoedema', name: 'Myxoedema coma', summary: 'Hypothermia + reduced consciousness + bradycardia', baseline: 1, category: 'cant-miss',
        keyExam: 'Hypothermia, bradycardia, drowsiness, hyporeflexia.', nextIx: '\u26A1 999 — emergency admission for IV thyroid hormone + supportive care.',
        patientPhrase: 'This is a dangerous degree of underactivity needing emergency treatment today.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hypothyroidism/', redFlagAction: '\u26A1 999 / emergency admission' },
    ],
    effects: {
      age: (v) => v >= 60 ? { autoimmune: +2 } : {},
      pregnant: { transient: +4 },
      fh_autoimmune: { autoimmune: +10 },
      drugs: { drug: +20 },
      prev_thyroid: { iatrogenic: +22 },

      fatigue: { autoimmune: +3, subclinical: +2 },
      constipation: { autoimmune: +3 },
      bradycardia: { autoimmune: +3, myxoedema: +2 },
      goitre: { autoimmune: +10 },

      tsh: (v) => v == null ? {} : (v > 10 ? { autoimmune: +8, subclinical: -10 } : (v >= 4 ? { subclinical: +12 } : { central: +4 })),
      low_t4: (v, ins) => (ins.tsh != null && ins.tsh < 4) ? { central: +18 } : { autoimmune: +6 },
      tpo: { autoimmune: +22 },

      myxoedema: { myxoedema: +34 },
    },
    askAbout: {
      autoimmune: ['tpo', 'goitre', 'fh_autoimmune'],
      subclinical: ['tsh'],
      iatrogenic: ['prev_thyroid'],
      drug: ['drugs'],
      transient: ['pregnant'],
      central: ['low_t4'],
      myxoedema: ['myxoedema'],
    },
    sources: [
      { label: 'NICE NG145 — Thyroid disease', url: 'https://www.nice.org.uk/guidance/ng145' },
      { label: 'NICE CKS — Hypothyroidism', url: 'https://cks.nice.org.uk/topics/hypothyroidism/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'hypothyroidism', label: 'Hypothyroidism', triage: 'hypothyroidism-triage', dx: 'hypothyroidism-dx' }
  );
})();
