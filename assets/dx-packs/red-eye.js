/* ============================================
   Diagnostic Tool pack — Red Eye
   Shared-id triage + differential. CKS Red eye · NICE.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'contact_lens', kind: 'check', label: 'Contact lens wearer' },
    { group: 'Demographics & context', id: 'trauma_chemical', kind: 'check', label: 'Trauma / chemical / foreign body' },

    { group: 'Symptoms', id: 'itchy_discharge', kind: 'check', label: 'Itchy / gritty / discharge, vision normal (conjunctivitis)' },
    { group: 'Symptoms', id: 'localised_painless', kind: 'check', label: 'Localised painless red patch, vision normal (subconjunctival/episcleritis)' },
    { group: 'Symptoms', id: 'photophobia_pain', kind: 'check', label: 'Pain / photophobia / watering' },
    { group: 'Symptoms', id: 'reduced_vision', kind: 'check', label: 'Reduced visual acuity' },
    { group: 'Symptoms', id: 'ciliary_flush', kind: 'check', label: 'Circumcorneal (ciliary) redness, small/irregular pupil (uveitis)' },
    { group: 'Symptoms', id: 'corneal_stain', kind: 'check', label: 'Fluorescein-staining defect / dendritic ulcer (keratitis)' },

    { group: 'Red flags', id: 'aacg', kind: 'check', label: 'Severe pain + halos + fixed mid-dilated pupil + nausea (acute glaucoma)' },
    { group: 'Red flags', id: 'severe_boring_pain', kind: 'check', label: 'Severe boring pain, tender globe, ± systemic disease (scleritis)' },
  ];

  if (window.RGPTriage) RGPTriage.register('red-eye-triage', {
    title: 'Red eye — triage',
    subtitle: 'Tick features. Surfaces acute glaucoma, keratitis, uveitis and scleritis (sight-threatening).',
    guideline: 'CKS Red eye',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired — pattern fits conjunctivitis or a benign localised cause. Treat conservatively, safety-net for pain/visual loss; check acuity in every red eye.',
    rules: [
      {
        id: 'chemical', tier: 'emergency',
        label: 'Chemical injury',
        action: 'Immediate copious irrigation; same-day ophthalmology.',
        patientPhrase: '"We need to rinse the eye thoroughly right now and get you seen urgently."',
        source: 'CKS',
        when: i => i.trauma_chemical,
      },
      {
        id: 'aacg', tier: 'emergency',
        label: 'Acute angle-closure glaucoma — severe pain, halos, fixed pupil, nausea',
        action: 'Same-day emergency ophthalmology — sight-threatening.',
        patientPhrase: '"This could be acute glaucoma — an eye emergency. I am arranging same-day eye assessment now."',
        source: 'CKS', sourceUrl: 'https://cks.nice.org.uk/topics/glaucoma/',
        when: i => i.aacg,
      },
      {
        id: 'keratitis', tier: 'emergency',
        label: 'Microbial / herpetic keratitis — contact lens or corneal staining defect + pain',
        action: 'Same-day ophthalmology; stop lens wear; do not give steroid blindly.',
        source: 'CKS Red eye',
        when: i => i.corneal_stain || (i.contact_lens && i.photophobia_pain),
      },
      {
        id: 'uveitis_scleritis', tier: 'urgent',
        label: 'Anterior uveitis / scleritis',
        action: 'Same-day/urgent ophthalmology; investigate systemic association.',
        source: 'CKS',
        when: i => i.ciliary_flush || i.severe_boring_pain || (i.photophobia_pain && i.reduced_vision),
      },
      {
        id: 'conjunctivitis', tier: 'routine',
        label: 'Conjunctivitis / benign localised red eye',
        action: 'Hygiene; treat bacterial/allergic as needed; reassure subconjunctival haemorrhage / episcleritis; safety-net.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Red eye', url: 'https://cks.nice.org.uk/topics/red-eye/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('red-eye-dx', {
    title: 'Red eye — differential',
    subtitle: 'The engine separates benign (conjunctivitis, subconjunctival haemorrhage, episcleritis) from sight-threatening causes (keratitis, uveitis, scleritis, acute glaucoma).',
    guideline: 'CKS Red eye',
    patientPresenting: "My eye's gone red and sore, doctor — should I be worried?",
    inputs: INPUTS,
    diagnoses: [
      { id: 'conjunctivitis', name: 'Conjunctivitis', summary: 'Itchy/gritty, discharge, vision normal, no pain', baseline: 12, category: 'common',
        keyExam: 'Diffuse redness, discharge, normal acuity & pupil.', nextIx: 'Hygiene; antibiotic drops if bacterial/severe; antihistamine if allergic.',
        patientPhrase: 'Inflammation of the surface of the eye — usually viral or allergic and self-limiting; hygiene prevents spread.',
        ciksUrl: 'https://cks.nice.org.uk/topics/conjunctivitis-infective/', caseLink: '../cases/red-eye.html' },
      { id: 'subconj', name: 'Subconjunctival haemorrhage / episcleritis', summary: 'Localised painless redness, vision normal', baseline: 6, category: 'common',
        keyExam: 'Flat red patch (SCH) or sectoral injection (episcleritis).', nextIx: 'Reassure; check BP/clotting if recurrent SCH; episcleritis self-limiting.',
        patientPhrase: 'A harmless localised redness — it looks dramatic but settles on its own.',
        ciksUrl: 'https://cks.nice.org.uk/topics/red-eye/' },
      { id: 'uveitis', name: 'Anterior uveitis', summary: 'Pain, photophobia, ciliary flush, small/irregular pupil', baseline: 3, category: 'less-common',
        keyExam: 'Circumcorneal injection, miosis, cells in anterior chamber.', nextIx: 'Same-day/urgent ophthalmology; steroid drops + dilation; investigate systemic cause.',
        patientPhrase: 'Inflammation inside the eye — treatable but needs prompt eye-specialist care to protect vision.',
        ciksUrl: 'https://cks.nice.org.uk/topics/red-eye/' },

      { id: 'keratitis', name: 'Keratitis / corneal ulcer', summary: 'Contact lens or corneal staining defect + pain', baseline: 1, category: 'cant-miss',
        keyExam: 'Staining defect; dendritic ulcer (herpetic).', nextIx: '\u26A1 Same-day ophthalmology; stop lenses; avoid blind steroid.',
        patientPhrase: 'An infection or ulcer of the cornea can threaten sight — you need same-day eye assessment.',
        ciksUrl: 'https://cks.nice.org.uk/topics/red-eye/', redFlagAction: '\u26A1 Same-day ophthalmology' },
      { id: 'aacg', name: 'Acute angle-closure glaucoma', summary: 'Severe pain, halos, fixed mid-dilated pupil, nausea', baseline: 1, category: 'cant-miss',
        keyExam: 'Hard red eye, fixed mid-dilated pupil, cloudy cornea.', nextIx: '\u26A1 Same-day emergency ophthalmology.',
        patientPhrase: 'A sudden rise in eye pressure is an emergency — same-day eye treatment saves sight.',
        ciksUrl: 'https://cks.nice.org.uk/topics/glaucoma/', redFlagAction: '\u26A1 Emergency ophthalmology' },
      { id: 'scleritis', name: 'Scleritis', summary: 'Severe boring pain, tender globe, systemic disease', baseline: 1, category: 'cant-miss',
        keyExam: 'Deep injection, very tender, ± vision loss.', nextIx: '\u26A1 Urgent ophthalmology; investigate systemic vasculitis/RA.',
        patientPhrase: 'A deeper inflammation that can threaten the eye and signal a systemic condition — urgent specialist care needed.',
        ciksUrl: 'https://cks.nice.org.uk/topics/red-eye/', redFlagAction: '\u26A1 Urgent ophthalmology' },
    ],
    effects: {
      contact_lens: { keratitis: +14 },
      trauma_chemical: { keratitis: +6 },

      itchy_discharge: { conjunctivitis: +22 },
      localised_painless: { subconj: +22, conjunctivitis: -4 },
      photophobia_pain: { uveitis: +10, keratitis: +8, scleritis: +6, conjunctivitis: -6 },
      reduced_vision: { uveitis: +8, keratitis: +8, aacg: +8, conjunctivitis: -10 },
      ciliary_flush: { uveitis: +24 },
      corneal_stain: { keratitis: +26 },

      aacg: { aacg: +30 },
      severe_boring_pain: { scleritis: +28 },
    },
    askAbout: {
      conjunctivitis: ['itchy_discharge'],
      subconj: ['localised_painless'],
      uveitis: ['ciliary_flush', 'photophobia_pain'],
      keratitis: ['corneal_stain', 'contact_lens'],
      aacg: ['aacg'],
      scleritis: ['severe_boring_pain'],
    },
    sources: [
      { label: 'NICE CKS — Red eye', url: 'https://cks.nice.org.uk/topics/red-eye/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'red-eye', label: 'Red eye', triage: 'red-eye-triage', dx: 'red-eye-dx' }
  );
})();
