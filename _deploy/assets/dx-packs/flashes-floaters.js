/* ============================================
   Diagnostic Tool pack — Flashes & Floaters
   Shared-id triage + differential. CKS · retinal detachment pathway.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'myopia_surgery', kind: 'check', label: 'High myopia / previous cataract or retinal surgery / FH detachment' },

    { group: 'Pattern', id: 'few_stable_floaters', kind: 'check', label: 'Few stable floaters, no flashes, vision normal (benign/PVD)' },
    { group: 'Pattern', id: 'new_flashes_pvd', kind: 'check', label: 'New flashes + new floaters, vision intact (acute PVD)' },

    { group: 'Detachment red flags', id: 'shower_floaters', kind: 'check', label: 'Sudden shower of floaters / "cobweb" (vitreous haemorrhage / tear)' },
    { group: 'Detachment red flags', id: 'curtain_shadow', kind: 'check', label: 'Curtain / shadow / field loss' },
    { group: 'Detachment red flags', id: 'reduced_acuity', kind: 'check', label: 'Reduced visual acuity' },

    { group: 'Mimics', id: 'migraine_aura', kind: 'check', label: 'Bilateral zig-zag / fortification spectra + headache (migraine aura)' },
  ];

  if (window.RGPTriage) RGPTriage.register('flashes-floaters-triage', {
    title: 'Flashes & floaters — triage',
    subtitle: 'Tick features. Surfaces retinal tear/detachment (same-day) vs benign PVD vs migraine aura.',
    guideline: 'CKS Floaters & flashes',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Acute new flashes + floaters need ophthalmology assessment (within 24h) to exclude a retinal tear, even if vision is intact. Few long-standing floaters with no flashes are usually benign.',
    rules: [
      {
        id: 'detachment', tier: 'emergency',
        label: 'Retinal tear / detachment — curtain / field loss / reduced acuity / shower of floaters',
        action: 'Same-day emergency ophthalmology — tear/detachment is sight-threatening and treatable.',
        patientPhrase: '"A shadow or curtain over your vision can mean the retina is detaching — that needs same-day eye assessment to save sight."',
        source: 'CKS', sourceUrl: 'https://cks.nice.org.uk/topics/retinal-detachment/',
        when: i => i.curtain_shadow || i.reduced_acuity || i.shower_floaters,
      },
      {
        id: 'acute_pvd', tier: 'urgent',
        label: 'Acute PVD — new flashes + floaters, vision intact',
        action: 'Ophthalmology assessment within 24h to exclude an associated tear.',
        source: 'CKS',
        when: i => i.new_flashes_pvd,
      },
      {
        id: 'benign', tier: 'routine',
        label: 'Stable floaters / migraine aura',
        action: 'Reassure long-standing stable floaters; manage migraine aura; safety-net for curtain/field loss.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Floaters & flashes', url: 'https://cks.nice.org.uk/topics/retinal-detachment/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('flashes-floaters-dx', {
    title: 'Flashes & floaters — differential',
    subtitle: 'The engine separates benign vitreous floaters and posterior vitreous detachment from retinal tear/detachment, and distinguishes migraine aura.',
    guideline: 'CKS',
    patientPresenting: "I've started seeing flashes and floaters, doctor — is my eye okay?",
    inputs: INPUTS,
    diagnoses: [
      { id: 'benign_floaters', name: 'Benign vitreous floaters', summary: 'Few, stable, no flashes, vision normal', baseline: 9, category: 'common',
        keyExam: 'Normal acuity & fields.', nextIx: 'Reassure; safety-net for new flashes/curtain.',
        patientPhrase: 'Long-standing floaters that are stable are usually harmless — but report any new flashes or a shadow.',
        ciksUrl: 'https://cks.nice.org.uk/topics/retinal-detachment/' },
      { id: 'pvd', name: 'Posterior vitreous detachment', summary: 'New flashes + floaters, vision intact, older', baseline: 7, category: 'common',
        keyExam: 'Normal acuity; needs dilated fundus exam.', nextIx: 'Ophthalmology within 24h to exclude an associated retinal tear.',
        patientPhrase: 'The jelly in the eye is separating with age — common and usually benign, but we check for a tear within a day.',
        ciksUrl: 'https://cks.nice.org.uk/topics/retinal-detachment/' },
      { id: 'migraine', name: 'Migraine aura', summary: 'Bilateral zig-zag spectra + headache, transient', baseline: 4, category: 'common',
        keyExam: 'Normal eye exam.', nextIx: 'Clinical; manage migraine.',
        patientPhrase: 'A migraine aura causes shimmering zig-zag patterns that pass — it comes from the brain, not the eye.',
        ciksUrl: 'https://cks.nice.org.uk/topics/migraine/' },

      { id: 'retinal_tear', name: 'Retinal tear / detachment', summary: 'Shower of floaters, curtain/shadow, field loss, reduced acuity', baseline: 1, category: 'cant-miss',
        keyExam: 'Field defect; detached/torn retina.', nextIx: '\u26A1 Same-day ophthalmology — laser/surgery saves sight.',
        patientPhrase: 'A tear or detachment of the retina is an emergency — same-day treatment can save the sight.',
        ciksUrl: 'https://cks.nice.org.uk/topics/retinal-detachment/', redFlagAction: '\u26A1 Same-day ophthalmology' },
      { id: 'vitreous_haem', name: 'Vitreous haemorrhage', summary: 'Sudden shower of floaters ± reduced vision, diabetic', baseline: 1, category: 'cant-miss',
        keyExam: 'Reduced red reflex; obscured fundus.', nextIx: '\u26A1 Same-day ophthalmology; common in proliferative diabetic retinopathy.',
        patientPhrase: 'Bleeding into the eye causes a sudden shower of floaters — it needs same-day eye assessment.',
        ciksUrl: 'https://cks.nice.org.uk/topics/retinal-detachment/', redFlagAction: '\u26A1 Same-day ophthalmology' },
    ],
    effects: {
      age: (v) => v >= 55 ? { pvd: +8, retinal_tear: +2 } : {},
      myopia_surgery: { retinal_tear: +12, pvd: +4 },

      few_stable_floaters: { benign_floaters: +22 },
      new_flashes_pvd: { pvd: +22, retinal_tear: +6 },

      shower_floaters: { vitreous_haem: +18, retinal_tear: +14 },
      curtain_shadow: { retinal_tear: +28 },
      reduced_acuity: { retinal_tear: +14, vitreous_haem: +8, benign_floaters: -10 },

      migraine_aura: { migraine: +26 },
    },
    askAbout: {
      benign_floaters: ['few_stable_floaters'],
      pvd: ['new_flashes_pvd'],
      migraine: ['migraine_aura'],
      retinal_tear: ['curtain_shadow', 'shower_floaters', 'reduced_acuity'],
      vitreous_haem: ['shower_floaters'],
    },
    sources: [
      { label: 'NICE CKS — Floaters & flashes', url: 'https://cks.nice.org.uk/topics/retinal-detachment/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'flashes-floaters', label: 'Flashes & floaters', triage: 'flashes-floaters-triage', dx: 'flashes-floaters-dx' }
  );
})();
