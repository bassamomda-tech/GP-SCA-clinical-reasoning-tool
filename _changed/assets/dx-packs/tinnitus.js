/* ============================================
   Diagnostic Tool pack — Tinnitus
   Shared-id triage + differential. NICE NG155 · CKS.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'noise_drugs', kind: 'check', label: 'Noise exposure / ototoxic drug' },

    { group: 'Pattern', id: 'bilateral_hearing', kind: 'check', label: 'Bilateral, with age-related/noise hearing loss' },
    { group: 'Pattern', id: 'wax', kind: 'check', label: 'Associated wax / conductive symptoms' },
    { group: 'Pattern', id: 'menieres', kind: 'check', label: 'Episodic vertigo + fluctuating loss + fullness (Ménière)' },
    { group: 'Pattern', id: 'anxiety_stress', kind: 'check', label: 'Stress / anxiety / disturbed sleep amplifying it' },

    { group: 'Red flags', id: 'unilateral', kind: 'check', label: 'Unilateral tinnitus ± asymmetric hearing loss' },
    { group: 'Red flags', id: 'pulsatile', kind: 'check', label: 'Pulsatile (in time with heartbeat)' },
    { group: 'Red flags', id: 'neuro_distress', kind: 'check', label: 'Focal neurology, or severe distress / suicidal ideation' },
  ];

  if (window.RGPTriage) RGPTriage.register('tinnitus-triage', {
    title: 'Tinnitus — triage',
    subtitle: 'Tick features. Surfaces acoustic neuroma, pulsatile-tinnitus imaging and urgent psychological pathways.',
    guideline: 'NICE NG155 · CKS',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Examine ears; treat wax; audiology for associated hearing loss; reassure and offer sound therapy / CBT-based support for persistent bothersome tinnitus.',
    rules: [
      {
        id: 'urgent_distress', tier: 'emergency',
        label: 'Tinnitus with suicidal ideation / severe distress',
        action: 'Same-day mental-health assessment + urgent ENT/audiology support.',
        source: 'NICE NG155',
        when: i => i.neuro_distress,
      },
      {
        id: 'acoustic', tier: 'urgent',
        label: 'Unilateral tinnitus / asymmetric hearing loss — exclude acoustic neuroma',
        action: 'Urgent ENT/audiology + MRI IAM.',
        source: 'NICE NG155', sourceUrl: 'https://www.nice.org.uk/guidance/ng155',
        when: i => i.unilateral,
      },
      {
        id: 'pulsatile', tier: 'urgent',
        label: 'Pulsatile tinnitus — vascular cause',
        action: 'Examine for bruit; ENT + imaging (vascular/dural cause).',
        source: 'NICE NG155',
        when: i => i.pulsatile,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'Bothersome tinnitus — assess & support',
        action: 'Treat wax; audiology for hearing loss; sound enrichment, CBT, hearing aids; address sleep/anxiety.',
        source: 'NICE NG155',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG155 — Tinnitus', url: 'https://www.nice.org.uk/guidance/ng155' },
      { label: 'NICE CKS — Tinnitus', url: 'https://cks.nice.org.uk/topics/tinnitus/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('tinnitus-dx', {
    title: 'Tinnitus — differential',
    subtitle: 'The engine weights the common benign causes (hearing-loss-associated, wax, noise) and surfaces acoustic neuroma and pulsatile/vascular tinnitus when red flags fire.',
    guideline: 'NICE NG155 · CKS',
    patientPresenting: "I've got a constant ringing in my ears, doctor — it's driving me to distraction.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'hearing_loss_assoc', name: 'Hearing-loss-associated tinnitus', summary: 'Bilateral, with presbycusis / noise loss', baseline: 11, category: 'common',
        keyExam: 'Symmetrical SNHL.', nextIx: 'Audiology; hearing aids often reduce tinnitus; reassure.',
        patientPhrase: 'Tinnitus usually accompanies hearing loss. Treating the hearing — often with aids — frequently reduces it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/tinnitus/', caseLink: '../cases/tinnitus.html' },
      { id: 'wax', name: 'Wax / conductive', summary: 'Associated wax / blockage', baseline: 5, category: 'common',
        keyExam: 'Otoscopy: wax.', nextIx: 'Remove wax; reassess.',
        patientPhrase: 'Wax or a blockage can cause or worsen tinnitus. Clearing it may settle it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/earwax/' },
      { id: 'noise_drug', name: 'Noise / drug-related', summary: 'Noise exposure or ototoxic drug', baseline: 4, category: 'common',
        keyExam: 'Noise notch on audiometry.', nextIx: 'Protect hearing; review drugs.',
        patientPhrase: 'Noise or a medication can trigger tinnitus. We protect hearing and review medication.',
        ciksUrl: 'https://cks.nice.org.uk/topics/tinnitus/' },
      { id: 'menieres', name: 'Ménière\u2019s disease', summary: 'Episodic vertigo + fluctuating loss + fullness', baseline: 2, category: 'less-common',
        keyExam: 'SNHL.', nextIx: 'ENT; audiometry; diet + betahistine.',
        patientPhrase: 'Inner-ear pressure changes cause tinnitus with vertigo and hearing change. Diet and medication help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/menieres-disease/' },
      { id: 'anxiety', name: 'Anxiety / sleep-amplified', summary: 'Stress, poor sleep increase awareness', baseline: 3, category: 'common',
        keyExam: 'Normal ears.', nextIx: 'CBT, sound enrichment, sleep + anxiety management.',
        patientPhrase: 'Stress and poor sleep amplify tinnitus. Techniques to manage these reduce its impact.',
        ciksUrl: 'https://cks.nice.org.uk/topics/tinnitus/' },

      { id: 'acoustic_neuroma', name: 'Acoustic neuroma', summary: 'Unilateral tinnitus ± asymmetric SNHL', baseline: 1, category: 'cant-miss',
        keyExam: 'Asymmetric SNHL; cranial nerve signs.', nextIx: '\u26A1 ENT + MRI IAM.',
        patientPhrase: 'One-sided ringing needs a scan to exclude a benign nerve tumour.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng155', redFlagAction: '\u26A1 ENT + MRI' },
      { id: 'pulsatile', name: 'Pulsatile / vascular tinnitus', summary: 'In time with heartbeat', baseline: 1, category: 'cant-miss',
        keyExam: 'Bruit; cardiovascular exam.', nextIx: '\u26A1 ENT + imaging (vascular / dural fistula).',
        patientPhrase: 'Tinnitus in time with your pulse needs a scan to check the blood vessels.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng155', redFlagAction: '\u26A1 ENT + imaging' },
    ],
    effects: {
      age: (v) => v >= 60 ? { hearing_loss_assoc: +6 } : {},
      noise_drugs: { noise_drug: +18 },

      bilateral_hearing: { hearing_loss_assoc: +18 },
      wax: { wax: +20 },
      menieres: { menieres: +24 },
      anxiety_stress: { anxiety: +18 },

      unilateral: { acoustic_neuroma: +28, hearing_loss_assoc: -8 },
      pulsatile: { pulsatile: +30 },
    },
    askAbout: {
      hearing_loss_assoc: ['bilateral_hearing'],
      wax: ['wax'],
      noise_drug: ['noise_drugs'],
      menieres: ['menieres'],
      anxiety: ['anxiety_stress'],
      acoustic_neuroma: ['unilateral'],
      pulsatile: ['pulsatile'],
    },
    sources: [
      { label: 'NICE NG155 — Tinnitus', url: 'https://www.nice.org.uk/guidance/ng155' },
      { label: 'NICE CKS — Tinnitus', url: 'https://cks.nice.org.uk/topics/tinnitus/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'tinnitus', label: 'Tinnitus', triage: 'tinnitus-triage', dx: 'tinnitus-dx' }
  );
})();
