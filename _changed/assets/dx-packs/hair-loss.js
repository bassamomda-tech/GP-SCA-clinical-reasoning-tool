/* ============================================
   Diagnostic Tool pack — Hair Loss (alopecia)
   Shared-id triage + differential. CKS · derm.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'female', kind: 'check', label: 'Female' },

    { group: 'Pattern', id: 'patterned', kind: 'check', label: 'Gradual patterned thinning (vertex/temples or crown), FH (androgenetic)' },
    { group: 'Pattern', id: 'diffuse_shedding', kind: 'check', label: 'Diffuse shedding 2–4 months after stress/illness/childbirth (telogen effluvium)' },
    { group: 'Pattern', id: 'patches_smooth', kind: 'check', label: 'Discrete smooth bald patches, exclamation-mark hairs (alopecia areata)' },
    { group: 'Pattern', id: 'scaly_broken', kind: 'check', label: 'Scaly / itchy scalp, broken hairs, child (tinea capitis)' },
    { group: 'Pattern', id: 'traction', kind: 'check', label: 'Tight hairstyles / pulling (traction)' },

    { group: 'Systemic clues', id: 'thyroid_iron', kind: 'check', label: 'Thyroid symptoms / iron deficiency / heavy periods' },

    { group: 'Red flags', id: 'scarring', kind: 'check', label: 'Scarring / loss of follicular openings / scalp inflammation (scarring alopecia)' },
  ];

  if (window.RGPTriage) RGPTriage.register('hair-loss-triage', {
    title: 'Hair loss — triage',
    subtitle: 'Tick features. Surfaces scarring alopecia (urgent derm) and tinea, then weights common non-scarring causes.',
    guideline: 'CKS Hair loss',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Distinguish scarring vs non-scarring; check ferritin/TFT if diffuse; treat by cause. Most non-scarring alopecia is androgenetic or telogen effluvium.',
    rules: [
      {
        id: 'scarring', tier: 'urgent',
        label: 'Scarring alopecia — loss of follicular openings / inflammation',
        action: 'Urgent dermatology — scarring is irreversible; early treatment limits damage.',
        patientPhrase: '"This type can cause permanent loss, so I want a dermatologist to assess and treat it promptly."',
        source: 'CKS Hair loss',
        when: i => i.scarring,
      },
      {
        id: 'tinea', tier: 'urgent',
        label: 'Tinea capitis (scaly scalp, broken hairs, child)',
        action: 'Scalp scrapings/mycology; oral antifungal (topical alone insufficient); treat household.',
        source: 'CKS',
        when: i => i.scaly_broken,
      },
      {
        id: 'systemic', tier: 'routine',
        label: 'Diffuse loss — check systemic contributors',
        action: 'Ferritin, TFT (± others); correct deficiency/thyroid.',
        source: 'CKS',
        when: i => i.thyroid_iron || i.diffuse_shedding,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'Non-scarring alopecia — assess & manage',
        action: 'Androgenetic → minoxidil ± finasteride (men); areata → often self-resolves, derm if extensive; traction → change styling.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Hair loss', url: 'https://cks.nice.org.uk/topics/hair-loss/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('hair-loss-dx', {
    title: 'Hair loss — differential',
    subtitle: 'The engine weights androgenetic alopecia, telogen effluvium, alopecia areata, tinea and traction, plus systemic contributors, and surfaces scarring alopecia.',
    guideline: 'CKS Hair loss',
    patientPresenting: "My hair's falling out, doctor — I'm finding it everywhere.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'androgenetic', name: 'Androgenetic alopecia', summary: 'Gradual patterned thinning, FH', baseline: 11, category: 'common',
        keyExam: 'Vertex/temporal recession (men); crown widening (women).', nextIx: 'Clinical; minoxidil ± finasteride (men); reassure.',
        patientPhrase: 'Pattern hair thinning is very common and largely genetic. Treatments can slow it and sometimes regrow.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hair-loss/' },
      { id: 'telogen', name: 'Telogen effluvium', summary: 'Diffuse shedding 2–4 months after stress/illness/childbirth', baseline: 7, category: 'common',
        keyExam: 'Diffuse thinning; positive pull test.', nextIx: 'Reassure (usually recovers); check ferritin/TFT; address trigger.',
        patientPhrase: 'A stress or illness a few months ago has tipped hairs into shedding. It usually recovers fully over months.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hair-loss/' },
      { id: 'areata', name: 'Alopecia areata', summary: 'Discrete smooth patches, exclamation-mark hairs', baseline: 4, category: 'common',
        keyExam: 'Smooth bald patches; exclamation-mark hairs.', nextIx: 'Often self-resolves; topical/intralesional steroid; derm if extensive.',
        patientPhrase: 'An immune-mediated patchy loss. Many patches regrow; treatments can help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hair-loss/' },
      { id: 'systemic', name: 'Thyroid / iron deficiency', summary: 'Diffuse loss with thyroid/iron features', baseline: 3, category: 'common',
        keyExam: 'Thyroid signs; pallor.', nextIx: 'TFT, ferritin; correct.',
        patientPhrase: 'Thyroid or iron problems can thin the hair. Correcting them helps regrowth.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hair-loss/' },
      { id: 'traction', name: 'Traction alopecia', summary: 'Tight hairstyles / pulling', baseline: 2, category: 'less-common',
        keyExam: 'Loss at margins/tension areas.', nextIx: 'Change styling; can recover if early.',
        patientPhrase: 'Repeated pulling from tight styles thins the hair at the edges. Changing styling allows recovery.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hair-loss/' },
      { id: 'tinea', name: 'Tinea capitis', summary: 'Scaly scalp, broken hairs, child', baseline: 2, category: 'common',
        keyExam: 'Scaling, broken hairs, ± kerion.', nextIx: 'Mycology; oral antifungal.',
        patientPhrase: 'A fungal scalp infection, common in children. Oral antifungal treatment clears it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/fungal-skin-infection-scalp/' },

      { id: 'scarring', name: 'Scarring alopecia', summary: 'Loss of follicular openings, inflammation', baseline: 1, category: 'cant-miss',
        keyExam: 'Smooth scarred areas, absent follicles, inflammation.', nextIx: '\u26A1 Urgent dermatology — irreversible; biopsy guides treatment.',
        patientPhrase: 'This type can scar permanently, so a dermatologist needs to assess and treat it promptly.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hair-loss/', redFlagAction: '\u26A1 Urgent dermatology' },
    ],
    effects: {
      female: { telogen: +3 },

      patterned: { androgenetic: +24 },
      diffuse_shedding: { telogen: +22 },
      patches_smooth: { areata: +24 },
      scaly_broken: { tinea: +24 },
      traction: { traction: +22 },

      thyroid_iron: { systemic: +20 },

      scarring: { scarring: +30 },
    },
    askAbout: {
      androgenetic: ['patterned'],
      telogen: ['diffuse_shedding'],
      areata: ['patches_smooth'],
      systemic: ['thyroid_iron'],
      traction: ['traction'],
      tinea: ['scaly_broken'],
      scarring: ['scarring'],
    },
    sources: [
      { label: 'NICE CKS — Hair loss', url: 'https://cks.nice.org.uk/topics/hair-loss/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'hair-loss', label: 'Hair loss', triage: 'hair-loss-triage', dx: 'hair-loss-dx' }
  );
})();
