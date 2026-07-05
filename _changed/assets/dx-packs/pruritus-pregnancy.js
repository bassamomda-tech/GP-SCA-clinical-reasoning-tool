/* ============================================
   Diagnostic Tool pack — Itchiness in Pregnancy
   Shared-id triage + differential. RCOG GTG 43 (ICP) · CKS.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Gestation', id: 'gestation', kind: 'number', label: 'Gestation', unit: 'weeks', min: 4, max: 42, step: 1 },

    { group: 'Itch pattern', id: 'palms_soles_nonrash', kind: 'check', label: 'Palms & soles, worse at night, NO rash (cholestasis)' },
    { group: 'Itch pattern', id: 'striae_abdomen', kind: 'check', label: 'Itchy papules in abdominal striae, spares umbilicus (PEP/PUPPP)' },
    { group: 'Itch pattern', id: 'periumbilical_blisters', kind: 'check', label: 'Periumbilical blistering rash (pemphigoid gestationis)' },
    { group: 'Itch pattern', id: 'eczema_flare', kind: 'check', label: 'Flexural eczematous rash / known atopy (atopic eruption)' },
    { group: 'Itch pattern', id: 'vulval_discharge', kind: 'check', label: 'Vulval itch + discharge (candida)' },

    { group: 'Bloods', id: 'raised_bile_acids', kind: 'check', label: 'Raised bile acids / abnormal LFTs' },

    { group: 'Red flags', id: 'jaundice', kind: 'check', label: 'Jaundice / pale stools / dark urine' },
    { group: 'Red flags', id: 'reduced_movements', kind: 'check', label: 'Reduced fetal movements' },
  ];

  if (window.RGPTriage) RGPTriage.register('pruritus-pregnancy-triage', {
    title: 'Itch in pregnancy — triage',
    subtitle: 'Tick features. Surfaces obstetric cholestasis and reduced-fetal-movement pathways.',
    guideline: 'RCOG GTG 43 · CKS',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Itch without rash → check bile acids + LFTs to exclude obstetric cholestasis. Skin eruptions are usually benign — emollients, topical steroid, antihistamine; involve obstetrics as needed.',
    rules: [
      {
        id: 'reduced_movements', tier: 'emergency',
        label: 'Reduced fetal movements',
        action: 'Same-day maternity assessment (CTG) — do not wait.',
        patientPhrase: '"Reduced baby movements need checking today on the maternity unit."',
        source: 'RCOG',
        when: i => i.reduced_movements,
      },
      {
        id: 'icp', tier: 'urgent',
        label: 'Obstetric cholestasis — itch (palms/soles, no rash) ± raised bile acids',
        action: 'Bile acids + LFTs; obstetric referral; monitoring; ursodeoxycholic acid per specialist; plan timing of birth.',
        patientPhrase: '"Itching of the palms and soles can mean a liver condition of pregnancy — I am checking your bile acids and involving the maternity team."',
        source: 'RCOG GTG 43', sourceUrl: 'https://www.rcog.org.uk/guidance/',
        when: i => i.palms_soles_nonrash || i.raised_bile_acids || i.jaundice,
      },
      {
        id: 'pemphigoid', tier: 'urgent',
        label: 'Pemphigoid gestationis — periumbilical blistering',
        action: 'Dermatology + obstetric referral (fetal risk); potent topical/oral steroid.',
        source: 'CKS',
        when: i => i.periumbilical_blisters,
      },
      {
        id: 'benign', tier: 'routine',
        label: 'Benign pregnancy dermatosis / candida',
        action: 'Emollients, topical steroid, antihistamine (sedating at night); antifungal for candida; reassure.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'RCOG GTG 43 — Obstetric cholestasis', url: 'https://www.rcog.org.uk/guidance/' },
      { label: 'NICE CKS — Itch in pregnancy', url: 'https://cks.nice.org.uk/topics/itch-in-pregnancy/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('pruritus-pregnancy-dx', {
    title: 'Itch in pregnancy — differential',
    subtitle: 'The engine separates itch-without-rash (cholestasis) from the pregnancy dermatoses and candida, and always surfaces obstetric cholestasis and pemphigoid gestationis.',
    guideline: 'RCOG GTG 43 · CKS',
    patientPresenting: "I'm itching all over in pregnancy, doctor — especially my hands and feet at night.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'pep', name: 'Polymorphic eruption of pregnancy (PEP/PUPPP)', summary: 'Itchy papules in striae, spares umbilicus, third trimester', baseline: 9, category: 'common',
        keyExam: 'Urticarial papules in abdominal striae, periumbilical sparing.', nextIx: 'Emollients, topical steroid, antihistamine; benign, resolves after delivery.',
        patientPhrase: 'A common benign itchy rash of late pregnancy. It is harmless and settles after birth; creams ease it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/itch-in-pregnancy/' },
      { id: 'atopic', name: 'Atopic eruption of pregnancy', summary: 'Eczematous flare, often earlier, atopic history', baseline: 6, category: 'common',
        keyExam: 'Eczematous / flexural rash.', nextIx: 'Emollients, topical steroid; benign.',
        patientPhrase: 'A flare of eczema-type skin in pregnancy — benign and managed with emollients and steroid cream.',
        ciksUrl: 'https://cks.nice.org.uk/topics/itch-in-pregnancy/' },
      { id: 'candida', name: 'Candida', summary: 'Vulval itch + discharge', baseline: 3, category: 'common',
        keyExam: 'Vulval erythema, curd-like discharge.', nextIx: 'Topical antifungal (pregnancy-safe).',
        patientPhrase: 'Thrush is common in pregnancy and easily treated with a pessary or cream.',
        ciksUrl: 'https://cks.nice.org.uk/topics/candida-female-genital/' },

      { id: 'icp', name: 'Obstetric cholestasis (ICP)', summary: 'Itch of palms/soles, no rash, raised bile acids', baseline: 2, category: 'cant-miss',
        keyExam: 'No primary rash (excoriations only); ± jaundice.', nextIx: '\u26A1 Bile acids + LFTs; obstetric referral; monitoring; UDCA; planned birth timing (stillbirth risk).',
        patientPhrase: 'Itching of the palms and soles without a rash can mean a liver condition of pregnancy that needs monitoring to keep baby safe.',
        ciksUrl: 'https://www.rcog.org.uk/guidance/', redFlagAction: '\u26A1 Bile acids + obstetric referral' },
      { id: 'pemphigoid', name: 'Pemphigoid gestationis', summary: 'Periumbilical blistering autoimmune eruption', baseline: 1, category: 'cant-miss',
        keyExam: 'Blisters starting periumbilically.', nextIx: '\u26A1 Dermatology + obstetric referral (fetal risk); steroids.',
        patientPhrase: 'A rare blistering condition that can affect the baby — it needs specialist care and treatment.',
        ciksUrl: 'https://cks.nice.org.uk/topics/itch-in-pregnancy/', redFlagAction: '\u26A1 Dermatology + obstetrics' },
    ],
    effects: {
      gestation: (v) => v != null && v > 28 ? { pep: +4, icp: +3 } : {},

      palms_soles_nonrash: { icp: +26 },
      striae_abdomen: { pep: +22 },
      periumbilical_blisters: { pemphigoid: +28 },
      eczema_flare: { atopic: +20 },
      vulval_discharge: { candida: +22 },

      raised_bile_acids: { icp: +24 },
      jaundice: { icp: +14 },
    },
    askAbout: {
      pep: ['striae_abdomen'],
      atopic: ['eczema_flare'],
      candida: ['vulval_discharge'],
      icp: ['palms_soles_nonrash', 'raised_bile_acids'],
      pemphigoid: ['periumbilical_blisters'],
    },
    sources: [
      { label: 'RCOG GTG 43 — Obstetric cholestasis', url: 'https://www.rcog.org.uk/guidance/' },
      { label: 'NICE CKS — Itch in pregnancy', url: 'https://cks.nice.org.uk/topics/itch-in-pregnancy/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'pruritus-pregnancy', label: 'Itch in pregnancy', triage: 'pruritus-pregnancy-triage', dx: 'pruritus-pregnancy-dx' }
  );
})();
