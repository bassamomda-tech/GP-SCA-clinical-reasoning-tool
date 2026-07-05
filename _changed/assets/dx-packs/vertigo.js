/* ============================================
   Diagnostic Tool pack — Vertigo
   Shared-id triage + differential. NICE CKS Vertigo/BPPV · HINTS · Bárány.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'vascular', kind: 'check', label: 'Vascular risk factors / AF / anticoagulant' },
    { group: 'Demographics & context', id: 'migraine_hx', kind: 'check', label: 'History of migraine' },
    { group: 'Demographics & context', id: 'ototoxic', kind: 'check', label: 'Ototoxic drug (gentamicin, furosemide, chemo)' },

    { group: 'Trigger / timing', id: 'positional_brief', kind: 'check', label: 'Brief (<1 min) spins triggered by head turning / lying' },
    { group: 'Trigger / timing', id: 'acute_constant', kind: 'check', label: 'Acute, constant, lasting days (worse on movement)' },
    { group: 'Trigger / timing', id: 'episodic_hours', kind: 'check', label: 'Episodes lasting minutes–hours, recurrent' },

    { group: 'Associated', id: 'hearing_tinnitus', kind: 'check', label: 'Hearing loss / fullness / tinnitus' },
    { group: 'Recent illness', id: 'viral', kind: 'check', label: 'Recent viral illness' },
    { group: 'Associated', id: 'headache_photophobia', kind: 'check', label: 'Headache / photophobia / visual aura with episodes' },

    { group: 'Central red flags', id: 'central_neuro', kind: 'check', label: 'Other neurology (diplopia, dysarthria, ataxia, weakness, numbness)' },
    { group: 'Central red flags', id: 'hints_central', kind: 'check', label: 'HINTS suggests central (normal head-impulse, direction-changing nystagmus, skew)' },
    { group: 'Central red flags', id: 'sudden_severe_headache', kind: 'check', label: 'Sudden severe headache / cannot walk unaided' },
  ];

  if (window.RGPTriage) RGPTriage.register('vertigo-triage', {
    title: 'Vertigo — triage',
    subtitle: 'Tick features. Surfaces central (stroke) red flags vs peripheral causes per NICE CKS / HINTS.',
    guideline: 'NICE CKS Vertigo · Bárány',
    inputs: INPUTS,
    defaultMessage: 'No central red flag fired — pattern fits a peripheral cause. Examine (Dix-Hallpike for BPPV, HINTS if acute constant), treat per cause, and safety-net for new neurology.',
    rules: [
      {
        id: 'central', tier: 'emergency',
        label: 'Possible central cause / posterior-circulation stroke',
        action: 'Call 999 / acute stroke pathway — acute vertigo with central signs is stroke until proven otherwise.',
        patientPhrase: '"These features can indicate a stroke affecting balance — I am arranging emergency assessment now."',
        source: 'NICE NG128 / HINTS',
        when: i => i.central_neuro || i.hints_central || i.sudden_severe_headache,
      },
      {
        id: 'acute_vestibular', tier: 'urgent',
        label: 'Acute constant vertigo — confirm peripheral (HINTS) before attributing to neuritis',
        action: 'HINTS exam; if any central feature → stroke pathway; if peripheral → vestibular sedative short-term + vestibular rehab.',
        source: 'NICE CKS Vertigo',
        when: i => i.acute_constant,
      },
      {
        id: 'recurrent', tier: 'routine',
        label: 'Recurrent / positional vertigo',
        action: 'Dix-Hallpike + Epley for BPPV; assess for Ménière\u2019s / vestibular migraine; ENT referral if uncertain.',
        source: 'NICE CKS Vertigo',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Vertigo', url: 'https://cks.nice.org.uk/topics/vertigo/' },
      { label: 'NICE CKS — BPPV', url: 'https://cks.nice.org.uk/topics/benign-paroxysmal-positional-vertigo/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('vertigo-dx', {
    title: 'Vertigo — differential (peripheral vs central)',
    subtitle: 'The engine uses trigger, timing and associated features to weight BPPV, vestibular neuritis, Ménière\u2019s and vestibular migraine, and always surfaces a central / stroke cause when red flags fire.',
    guideline: 'NICE CKS · Bárány · TiTrATE',
    patientPresenting: "The room spins, doctor — it comes on when I turn over in bed and lasts a few seconds.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'bppv', name: 'Benign paroxysmal positional vertigo', summary: 'Brief spins triggered by head position, no hearing loss', baseline: 11, category: 'common',
        keyExam: 'Positive Dix-Hallpike (rotatory nystagmus, latency, fatigability).', nextIx: 'Epley manoeuvre; reassess; refer if refractory.',
        patientPhrase: 'Tiny crystals in the balance organ are dislodged. A simple repositioning manoeuvre usually cures it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/benign-paroxysmal-positional-vertigo/', caseLink: '../cases/vertigo.html' },
      { id: 'neuritis', name: 'Vestibular neuritis / labyrinthitis', summary: 'Acute constant vertigo after viral illness; labyrinthitis adds hearing loss', baseline: 7, category: 'common',
        keyExam: 'HINTS peripheral (abnormal head-impulse, unidirectional nystagmus, no skew).', nextIx: 'Short-term vestibular sedative; vestibular rehabilitation; ensure not central.',
        patientPhrase: 'Inflammation of the balance nerve causes constant spinning for a few days. It settles, and rehab exercises speed recovery.',
        ciksUrl: 'https://cks.nice.org.uk/topics/vertigo/' },
      { id: 'menieres', name: 'Ménière\u2019s disease', summary: 'Episodes minutes–hours + fluctuating hearing loss, tinnitus, fullness', baseline: 4, category: 'less-common',
        keyExam: 'Sensorineural hearing loss; audiometry.', nextIx: 'ENT referral; low-salt diet, betahistine; audiometry.',
        patientPhrase: 'Pressure changes in the inner ear cause attacks with hearing symptoms. Diet and medication reduce attacks.',
        ciksUrl: 'https://cks.nice.org.uk/topics/menieres-disease/' },
      { id: 'vestibular_migraine', name: 'Vestibular migraine', summary: 'Recurrent vertigo + migraine features, history of migraine', baseline: 4, category: 'common',
        keyExam: 'Normal between attacks.', nextIx: 'Clinical (Bárány criteria); migraine management + triggers.',
        patientPhrase: 'Migraine can affect balance as well as cause headache. Migraine treatment reduces the vertigo too.',
        ciksUrl: 'https://cks.nice.org.uk/topics/migraine/' },

      { id: 'central', name: 'Central cause / posterior-circulation stroke', summary: 'Acute vertigo + central neurology or central HINTS', baseline: 1, category: 'cant-miss',
        keyExam: 'Diplopia, dysarthria, ataxia, direction-changing nystagmus, skew, limb signs.', nextIx: '\u26A1 999 / acute stroke pathway — urgent imaging.',
        patientPhrase: 'These features can mean a stroke affecting balance — that needs emergency assessment today.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng128', redFlagAction: '\u26A1 999 — stroke pathway' },
    ],
    effects: {
      age: (v) => v >= 60 ? { central: +3, bppv: +2, vestibular_migraine: -2 } : (v < 45 ? { vestibular_migraine: +4 } : {}),
      vascular: { central: +8 },
      migraine_hx: { vestibular_migraine: +16 },
      ototoxic: { neuritis: +4 },

      positional_brief: { bppv: +24, neuritis: -6 },
      acute_constant: { neuritis: +20 },
      episodic_hours: { menieres: +16, vestibular_migraine: +8 },

      hearing_tinnitus: { menieres: +18, neuritis: +4 },
      viral: { neuritis: +12 },
      headache_photophobia: { vestibular_migraine: +20 },

      central_neuro: { central: +30 },
      hints_central: { central: +28, neuritis: -10 },
      sudden_severe_headache: { central: +16 },
    },
    askAbout: {
      bppv: ['positional_brief'],
      neuritis: ['acute_constant', 'viral'],
      menieres: ['hearing_tinnitus', 'episodic_hours'],
      vestibular_migraine: ['headache_photophobia', 'migraine_hx'],
      central: ['central_neuro', 'hints_central'],
    },
    sources: [
      { label: 'NICE CKS — Vertigo', url: 'https://cks.nice.org.uk/topics/vertigo/' },
      { label: 'NICE NG128 — Stroke and TIA', url: 'https://www.nice.org.uk/guidance/ng128' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'vertigo', label: 'Vertigo', triage: 'vertigo-triage', dx: 'vertigo-dx' }
  );
})();
