/* ============================================
   Diagnostic Tool pack — Blurry / Reduced Vision
   Shared-id triage + differential. CKS · NICE NG12 (GCA).
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'diabetes', kind: 'check', label: 'Diabetes' },

    { group: 'Onset', id: 'acute', kind: 'check', label: 'Sudden onset' },
    { group: 'Onset', id: 'gradual', kind: 'check', label: 'Gradual over months/years' },

    { group: 'Gradual causes', id: 'refractive', kind: 'check', label: 'Improves with pinhole / blur for distance or near (refractive)' },
    { group: 'Gradual causes', id: 'cataract', kind: 'check', label: 'Glare, faded colours, gradual, older (cataract)' },
    { group: 'Gradual causes', id: 'amd', kind: 'check', label: 'Central distortion / missing central vision, ≥50 (AMD)' },

    { group: 'Acute causes', id: 'painful_eye_movement', kind: 'check', label: 'Pain on eye movement + reduced colour vision (optic neuritis)' },
    { group: 'Acute causes', id: 'flashes_curtain', kind: 'check', label: 'Flashes / floaters / curtain (retinal detachment)' },
    { group: 'Acute causes', id: 'painless_sudden_loss', kind: 'check', label: 'Sudden painless severe loss (vascular occlusion)' },

    { group: 'Red flags', id: 'gca', kind: 'check', label: 'Age ≥50 + headache / jaw claudication / scalp tenderness (GCA)' },
    { group: 'Red flags', id: 'aacg', kind: 'check', label: 'Painful red eye + halos + nausea (acute glaucoma)' },
  ];

  if (window.RGPTriage) RGPTriage.register('blurry-vision-triage', {
    title: 'Blurry / reduced vision — triage',
    subtitle: 'Tick features. Surfaces GCA, acute glaucoma, retinal detachment and vascular occlusion.',
    guideline: 'CKS · NICE NG12',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Check acuity + pinhole; gradual painless loss → optician/ophthalmology routine; treat refractive/cataract/AMD pathway; diabetic → retinopathy screening.',
    rules: [
      {
        id: 'gca', tier: 'emergency',
        label: 'Possible GCA — ≥50 with visual symptoms + headache / jaw claudication',
        action: 'Same-day high-dose steroid + emergency ophthalmology/rheumatology (sight-threatening).',
        patientPhrase: '"These features can threaten sight from an artery inflammation — I am starting steroids and arranging urgent assessment today."',
        source: 'BSR GCA',
        when: i => i.gca,
      },
      {
        id: 'acute_loss', tier: 'emergency',
        label: 'Acute vision loss / retinal detachment / acute glaucoma',
        action: 'Same-day emergency ophthalmology.',
        patientPhrase: '"Sudden visual change is an eye emergency — I am arranging same-day eye assessment."',
        source: 'CKS',
        when: i => i.painless_sudden_loss || i.flashes_curtain || i.aacg,
      },
      {
        id: 'optic_neuritis', tier: 'urgent',
        label: 'Optic neuritis — pain on movement + reduced colour vision',
        action: 'Urgent ophthalmology/neurology; MRI (MS association).',
        source: 'CKS',
        when: i => i.painful_eye_movement,
      },
      {
        id: 'gradual', tier: 'routine',
        label: 'Gradual visual loss — refractive / cataract / AMD',
        action: 'Optician refraction; cataract referral; AMD → urgent if wet (distortion); diabetic retinopathy screen.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Visual problems', url: 'https://cks.nice.org.uk/topics/' },
      { label: 'NICE CKS — Giant cell arteritis', url: 'https://cks.nice.org.uk/topics/giant-cell-arteritis/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('blurry-vision-dx', {
    title: 'Blurry vision — differential',
    subtitle: 'The engine weights gradual causes (refractive, cataract, AMD) against acute ones, and always surfaces GCA, vascular occlusion, retinal detachment and optic neuritis.',
    guideline: 'CKS · NICE NG12',
    patientPresenting: "My vision's gone blurry, doctor — things aren't as sharp as they were.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'refractive', name: 'Refractive error', summary: 'Improves with pinhole, gradual', baseline: 11, category: 'common',
        keyExam: 'Pinhole improves acuity.', nextIx: 'Optician refraction.',
        patientPhrase: 'The commonest cause — your prescription needs updating. An optician sorts this.',
        ciksUrl: 'https://cks.nice.org.uk/topics/' },
      { id: 'cataract', name: 'Cataract', summary: 'Glare, faded colours, gradual, older', baseline: 7, category: 'common',
        keyExam: 'Reduced red reflex, lens opacity.', nextIx: 'Routine cataract referral when affecting function.',
        patientPhrase: 'Clouding of the lens with age. A straightforward operation restores vision when it bothers you.',
        ciksUrl: 'https://cks.nice.org.uk/topics/' },
      { id: 'amd', name: 'Age-related macular degeneration', summary: 'Central distortion/loss, ≥50', baseline: 4, category: 'common',
        keyExam: 'Central scotoma; Amsler distortion.', nextIx: 'Urgent ophthalmology if sudden distortion (wet AMD treatable); routine if dry.',
        patientPhrase: 'The central vision area is affected. Wet AMD needs urgent treatment; dry AMD is managed with monitoring and lifestyle.',
        ciksUrl: 'https://cks.nice.org.uk/topics/' },
      { id: 'diabetic', name: 'Diabetic retinopathy / maculopathy', summary: 'Diabetes, fluctuating/blurred vision', baseline: 3, category: 'common',
        keyExam: 'Retinal changes; check glucose.', nextIx: 'Retinopathy screening; optimise glucose; ophthalmology if maculopathy.',
        patientPhrase: 'Diabetes can affect the retina. Screening and good control protect your sight.',
        ciksUrl: 'https://cks.nice.org.uk/topics/diabetes-type-2/' },

      { id: 'gca', name: 'Giant cell arteritis', summary: '≥50 + headache / jaw claudication + visual symptoms', baseline: 1, category: 'cant-miss',
        keyExam: 'Scalp/temporal tenderness.', nextIx: '\u26A1 Same-day steroid + emergency referral.',
        patientPhrase: 'This can cause sudden permanent sight loss — we start steroids and refer urgently today.',
        ciksUrl: 'https://cks.nice.org.uk/topics/giant-cell-arteritis/', redFlagAction: '\u26A1 Steroid + emergency referral' },
      { id: 'acute_eye', name: 'Vascular occlusion / detachment / acute glaucoma / optic neuritis', summary: 'Sudden loss, flashes/curtain, painful red eye, or pain on movement', baseline: 1, category: 'cant-miss',
        keyExam: 'Reduced acuity, RAPD, field/retinal signs.', nextIx: '\u26A1 Same-day emergency ophthalmology (± neurology for optic neuritis).',
        patientPhrase: 'A sudden visual change is an eye emergency — same-day specialist assessment protects sight.',
        ciksUrl: 'https://cks.nice.org.uk/topics/', redFlagAction: '\u26A1 Same-day ophthalmology' },
    ],
    effects: {
      age: (v) => v >= 60 ? { cataract: +8, amd: +6, gca: +2, refractive: -2 } : (v < 40 ? { refractive: +6 } : {}),
      diabetes: { diabetic: +16 },

      acute: { acute_eye: +8, refractive: -6 },
      gradual: { refractive: +8, cataract: +6, amd: +4 },

      refractive: { refractive: +20 },
      cataract: { cataract: +22 },
      amd: { amd: +22 },

      painful_eye_movement: { acute_eye: +18 },
      flashes_curtain: { acute_eye: +20 },
      painless_sudden_loss: { acute_eye: +22 },

      gca: { gca: +30 },
      aacg: { acute_eye: +16 },
    },
    askAbout: {
      refractive: ['refractive'],
      cataract: ['cataract'],
      amd: ['amd'],
      diabetic: ['diabetes'],
      gca: ['gca'],
      acute_eye: ['painless_sudden_loss', 'flashes_curtain', 'painful_eye_movement'],
    },
    sources: [
      { label: 'NICE CKS — Giant cell arteritis', url: 'https://cks.nice.org.uk/topics/giant-cell-arteritis/' },
      { label: 'NICE CKS — Cataracts', url: 'https://cks.nice.org.uk/topics/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'blurry-vision', label: 'Blurry / reduced vision', triage: 'blurry-vision-triage', dx: 'blurry-vision-dx' }
  );
})();
