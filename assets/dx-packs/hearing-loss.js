/* ============================================
   Diagnostic Tool pack — Hearing Loss
   Shared-id triage + differential. NICE NG98 · CKS · NG12.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Onset', id: 'sudden', kind: 'check', label: 'Sudden (over ≤72h) sensorineural loss' },
    { group: 'Onset', id: 'gradual', kind: 'check', label: 'Gradual, bilateral, age-related' },

    { group: 'Conductive clues', id: 'wax_occlusion', kind: 'check', label: 'Wax / blocked sensation / recent URTI / otitis media' },
    { group: 'Conductive clues', id: 'discharge', kind: 'check', label: 'Ear discharge / pain (infection / perforation)' },

    { group: 'Sensorineural clues', id: 'noise_exposure', kind: 'check', label: 'Noise exposure / ototoxic drug' },
    { group: 'Sensorineural clues', id: 'vertigo_tinnitus', kind: 'check', label: 'Episodic vertigo + fluctuating loss + tinnitus (Ménière)' },

    { group: 'Red flags', id: 'unilateral_asymmetric', kind: 'check', label: 'Unilateral / asymmetric sensorineural loss ± unilateral tinnitus' },
    { group: 'Red flags', id: 'neuro_focal', kind: 'check', label: 'Focal neurology / facial weakness / head & neck mass' },
  ];

  if (window.RGPTriage) RGPTriage.register('hearing-loss-triage', {
    title: 'Hearing loss — triage',
    subtitle: 'Tick features. Surfaces sudden SNHL (emergency) and acoustic-neuroma referral (NICE NG98).',
    guideline: 'NICE NG98 · CKS · NG12',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Examine ears (otoscopy), tuning-fork tests; treat wax/infection; refer audiology for persistent loss; bilateral gradual loss → hearing aids.',
    rules: [
      {
        id: 'sudden_snhl', tier: 'emergency',
        label: 'Sudden sensorineural hearing loss',
        action: 'Same-day ENT referral (treatment window for steroids); exclude wax as cause.',
        patientPhrase: '"Sudden hearing loss in the nerve needs to be seen by ENT today — early treatment improves recovery."',
        source: 'NICE CKS Hearing loss',
        when: i => i.sudden && !i.wax_occlusion,
      },
      {
        id: 'acoustic_neuroma', tier: 'urgent',
        label: 'Unilateral / asymmetric SNHL or unilateral tinnitus — exclude acoustic neuroma',
        action: 'Urgent ENT/audiology + MRI internal acoustic meatus.',
        source: 'NICE NG98', sourceUrl: 'https://www.nice.org.uk/guidance/ng98',
        when: i => i.unilateral_asymmetric || i.neuro_focal,
      },
      {
        id: 'infection', tier: 'urgent',
        label: 'Ear infection / discharge / perforation',
        action: 'Treat otitis (externa/media); ENT if chronic discharge / cholesteatoma suspected.',
        source: 'CKS',
        when: i => i.discharge,
      },
      {
        id: 'conductive', tier: 'routine',
        label: 'Conductive — wax / OME',
        action: 'Remove wax; treat OME; reassess hearing; audiology if persists.',
        source: 'NICE NG98',
        when: i => i.wax_occlusion,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'Gradual hearing loss — audiology',
        action: 'Audiology referral; hearing aids; address communication needs.',
        source: 'NICE NG98',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG98 — Hearing loss in adults', url: 'https://www.nice.org.uk/guidance/ng98' },
      { label: 'NICE CKS — Hearing loss', url: 'https://cks.nice.org.uk/topics/hearing-loss-in-adults/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('hearing-loss-dx', {
    title: 'Hearing loss — differential',
    subtitle: 'The engine separates conductive (wax, OME, infection) from sensorineural (presbycusis, noise, Ménière) causes, and always surfaces sudden SNHL and acoustic neuroma.',
    guideline: 'NICE NG98 · CKS',
    patientPresenting: "My hearing's gone downhill, doctor — everything sounds muffled.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'wax', name: 'Wax / conductive (OME)', summary: 'Blocked sensation, wax, post-URTI effusion', baseline: 10, category: 'common',
        keyExam: 'Otoscopy: wax / dull drum / effusion; Rinne negative.', nextIx: 'Remove wax; treat OME; reassess.',
        patientPhrase: 'A blockage — often just wax or fluid — is muffling sound. Clearing it usually restores hearing.',
        ciksUrl: 'https://cks.nice.org.uk/topics/earwax/', caseLink: '../cases/hearing-loss.html' },
      { id: 'presbycusis', name: 'Presbycusis (age-related)', summary: 'Gradual, bilateral, high-frequency loss', baseline: 9, category: 'common',
        keyExam: 'Normal drums; symmetrical SNHL.', nextIx: 'Audiology; hearing aids.',
        patientPhrase: 'Age-related nerve hearing loss. Hearing aids make a big difference.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hearing-loss-in-adults/' },
      { id: 'noise_ototoxic', name: 'Noise-induced / ototoxic', summary: 'Noise exposure or ototoxic drug', baseline: 4, category: 'common',
        keyExam: 'SNHL, notch at 4 kHz (noise).', nextIx: 'Audiology; protect hearing; review drugs.',
        patientPhrase: 'Noise or a medication has damaged the hearing nerve. We protect what remains and aid hearing.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hearing-loss-in-adults/' },
      { id: 'infection', name: 'Otitis externa / media / perforation', summary: 'Pain, discharge', baseline: 4, category: 'common',
        keyExam: 'Inflamed canal / drum / perforation.', nextIx: 'Treat infection; ENT if chronic / cholesteatoma.',
        patientPhrase: 'An ear infection is affecting hearing. Treating it usually restores it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/otitis-externa/' },
      { id: 'menieres', name: 'Ménière\u2019s disease', summary: 'Episodic vertigo + fluctuating loss + tinnitus + fullness', baseline: 2, category: 'less-common',
        keyExam: 'SNHL on audiometry.', nextIx: 'ENT; audiometry; low-salt diet, betahistine.',
        patientPhrase: 'Inner-ear pressure changes cause attacks with hearing symptoms. Diet and medication reduce them.',
        ciksUrl: 'https://cks.nice.org.uk/topics/menieres-disease/' },

      { id: 'sudden_snhl', name: 'Sudden sensorineural hearing loss', summary: 'Rapid SNHL over ≤72h', baseline: 1, category: 'cant-miss',
        keyExam: 'SNHL, normal otoscopy.', nextIx: '\u26A1 Same-day ENT — steroid treatment window.',
        patientPhrase: 'Sudden nerve hearing loss needs ENT today — prompt treatment improves recovery.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hearing-loss-in-adults/', redFlagAction: '\u26A1 Same-day ENT' },
      { id: 'acoustic_neuroma', name: 'Acoustic neuroma', summary: 'Unilateral / asymmetric SNHL ± unilateral tinnitus / facial signs', baseline: 1, category: 'cant-miss',
        keyExam: 'Asymmetric SNHL; cranial nerve signs.', nextIx: '\u26A1 ENT + MRI IAM.',
        patientPhrase: 'One-sided nerve hearing loss needs a scan to exclude a benign nerve tumour.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng98', redFlagAction: '\u26A1 ENT + MRI' },
    ],
    effects: {
      age: (v) => v >= 60 ? { presbycusis: +10 } : (v < 40 ? { infection: +3, noise_ototoxic: +2 } : {}),

      sudden: { sudden_snhl: +24, wax: -4 },
      gradual: { presbycusis: +14 },

      wax_occlusion: { wax: +22 },
      discharge: { infection: +22 },

      noise_exposure: { noise_ototoxic: +20 },
      vertigo_tinnitus: { menieres: +24 },

      unilateral_asymmetric: { acoustic_neuroma: +28, presbycusis: -6 },
      neuro_focal: { acoustic_neuroma: +14 },
    },
    askAbout: {
      wax: ['wax_occlusion'],
      presbycusis: ['gradual', 'age'],
      noise_ototoxic: ['noise_exposure'],
      infection: ['discharge'],
      menieres: ['vertigo_tinnitus'],
      sudden_snhl: ['sudden'],
      acoustic_neuroma: ['unilateral_asymmetric'],
    },
    sources: [
      { label: 'NICE NG98 — Hearing loss in adults', url: 'https://www.nice.org.uk/guidance/ng98' },
      { label: 'NICE CKS — Hearing loss', url: 'https://cks.nice.org.uk/topics/hearing-loss-in-adults/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'hearing-loss', label: 'Hearing loss', triage: 'hearing-loss-triage', dx: 'hearing-loss-dx' }
  );
})();
