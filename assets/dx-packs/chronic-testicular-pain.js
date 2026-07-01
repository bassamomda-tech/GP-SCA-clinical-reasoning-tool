/* ============================================
   Diagnostic Tool pack — Chronic Testicular Pain (orchialgia)
   Shared-id triage + differential. CKS · EAU · NICE NG12.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'post_vasectomy', kind: 'check', label: 'Previous vasectomy / scrotal surgery' },

    { group: 'Features', id: 'duration_3m', kind: 'check', label: 'Pain ≥3 months, intermittent or constant' },
    { group: 'Features', id: 'varicocele', kind: 'check', label: '"Bag of worms", aching, worse standing (varicocele)' },
    { group: 'Features', id: 'epididymal_cyst', kind: 'check', label: 'Discrete cystic lump separate from testis' },
    { group: 'Features', id: 'recurrent_infection', kind: 'check', label: 'Recurrent epididymitis / dysuria' },
    { group: 'Features', id: 'referred', kind: 'check', label: 'Loin/hernia/hip pathology, normal scrotal exam (referred)' },
    { group: 'Features', id: 'normal_exam', kind: 'check', label: 'Normal examination, no cause found' },

    { group: 'Red flags', id: 'mass', kind: 'check', label: 'Hard testicular mass' },
    { group: 'Red flags', id: 'left_varicocele_sudden', kind: 'check', label: 'New left varicocele not emptying when lying (? renal mass)' },
  ];

  if (window.RGPTriage) RGPTriage.register('chronic-testicular-pain-triage', {
    title: 'Chronic testicular pain — triage',
    subtitle: 'Tick features. Surfaces tumour and the renal-mass varicocele red flag, then benign causes.',
    guideline: 'CKS · EAU · NICE NG12',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Examine carefully, urine dip, scrotal USS; manage benign causes; chronic scrotal pain syndrome → analgesia, neuropathic agents, urology if refractory.',
    rules: [
      {
        id: 'tumour_2ww', tier: 'cancer',
        label: 'Hard testicular mass — suspected cancer',
        action: 'Urgent testicular USS + tumour markers; 2WW urology.',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.mass,
      },
      {
        id: 'renal_mass', tier: 'urgent',
        label: 'New left varicocele not decompressing supine — exclude renal mass',
        action: 'Urgent renal imaging (USS/CT).',
        source: 'EAU',
        when: i => i.left_varicocele_sudden,
      },
      {
        id: 'infection', tier: 'urgent',
        label: 'Recurrent / chronic epididymitis',
        action: 'Urine + STI screen; appropriate antibiotic course; urology if recurrent.',
        source: 'CKS',
        when: i => i.recurrent_infection,
      },
      {
        id: 'benign', tier: 'routine',
        label: 'Benign / chronic scrotal pain syndrome',
        action: 'Examine + USS; reassure; analgesia + neuropathic agents (amitriptyline/gabapentin); urology/pain clinic if refractory.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Scrotal pain & swelling', url: 'https://cks.nice.org.uk/topics/scrotal-pain-swelling/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('chronic-testicular-pain-dx', {
    title: 'Chronic orchialgia — differential',
    subtitle: 'The engine weights varicocele, epididymal cyst, post-vasectomy and referred pain against chronic scrotal pain syndrome, and always surfaces tumour and the renal-mass varicocele flag.',
    guideline: 'CKS · EAU',
    patientPresenting: "I've had a dull ache in my testicle for months now, doctor — it never fully goes.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'varicocele', name: 'Varicocele', summary: '"Bag of worms", aching, worse on standing, often left', baseline: 7, category: 'common',
        keyExam: 'Palpable varicose veins, decompress when supine.', nextIx: 'Scrotal USS; reassure; refer if pain/fertility concern or atypical.',
        patientPhrase: 'Enlarged veins around the testicle cause a dragging ache. Usually harmless; we treat if it affects you.',
        ciksUrl: 'https://cks.nice.org.uk/topics/scrotal-pain-swelling/' },
      { id: 'epididymal_cyst', name: 'Epididymal cyst / spermatocele', summary: 'Discrete cystic lump separate from testis', baseline: 5, category: 'common',
        keyExam: 'Smooth cyst above/behind testis, transilluminates.', nextIx: 'USS confirms; reassure; excise only if symptomatic.',
        patientPhrase: 'A benign cyst on the tube behind the testicle. It is harmless and usually left alone.',
        ciksUrl: 'https://cks.nice.org.uk/topics/scrotal-pain-swelling/' },
      { id: 'post_vasectomy', name: 'Post-vasectomy / congestive pain', summary: 'Chronic ache after vasectomy', baseline: 4, category: 'less-common',
        keyExam: 'Tender epididymis / sperm granuloma.', nextIx: 'Conservative; NSAID; urology if persistent.',
        patientPhrase: 'Chronic ache can follow a vasectomy. It often settles; we can treat the discomfort.',
        ciksUrl: 'https://cks.nice.org.uk/topics/scrotal-pain-swelling/' },
      { id: 'referred', name: 'Referred pain', summary: 'Loin/ureteric/hernia/hip pathology, normal scrotal exam', baseline: 3, category: 'less-common',
        keyExam: 'Normal scrotum; find the source.', nextIx: 'Examine abdomen/groin/spine; investigate the source.',
        patientPhrase: 'The pain may be coming from elsewhere — the back, groin or kidney — and felt in the testicle.',
        ciksUrl: 'https://cks.nice.org.uk/topics/scrotal-pain-swelling/' },
      { id: 'cspain', name: 'Chronic scrotal pain syndrome', summary: '≥3 months, normal exam/USS, no cause found', baseline: 5, category: 'common',
        keyExam: 'Normal exam.', nextIx: 'Reassure; analgesia + neuropathic agents; pain clinic/urology if refractory.',
        patientPhrase: 'When tests are normal, the nerves themselves can keep signalling pain. Nerve-targeting treatments help.',
        ciksUrl: 'https://cks.nice.org.uk/topics/scrotal-pain-swelling/' },

      { id: 'tumour', name: 'Testicular tumour', summary: 'Hard mass, age 15–45', baseline: 1, category: 'cant-miss',
        keyExam: 'Hard craggy mass, does not transilluminate.', nextIx: '\u26A1 USS + tumour markers; urology 2WW.',
        patientPhrase: 'A firm lump needs an urgent scan to exclude cancer — it is very treatable when caught early.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 USS + 2WW' },
    ],
    effects: {
      age: (v) => v == null ? {} : (v <= 45 ? { tumour: +2 } : {}),
      post_vasectomy: { post_vasectomy: +22 },

      duration_3m: { cspain: +6 },
      varicocele: { varicocele: +24 },
      epididymal_cyst: { epididymal_cyst: +22 },
      recurrent_infection: { cspain: +2 },
      referred: { referred: +22 },
      normal_exam: { cspain: +16, tumour: -6 },

      mass: { tumour: +30 },
      left_varicocele_sudden: { varicocele: +6 },
    },
    askAbout: {
      varicocele: ['varicocele'],
      epididymal_cyst: ['epididymal_cyst'],
      post_vasectomy: ['post_vasectomy'],
      referred: ['referred'],
      cspain: ['duration_3m', 'normal_exam'],
      tumour: ['mass'],
    },
    sources: [
      { label: 'NICE CKS — Scrotal pain & swelling', url: 'https://cks.nice.org.uk/topics/scrotal-pain-swelling/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'chronic-testicular-pain', label: 'Chronic testicular pain', triage: 'chronic-testicular-pain-triage', dx: 'chronic-testicular-pain-dx' }
  );
})();
