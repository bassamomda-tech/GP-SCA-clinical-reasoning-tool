/* ============================================
   Diagnostic Tool pack — Undescended Testis (cryptorchidism)
   Shared-id triage + differential. NICE CKS · BAUS/EAU paediatric.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Age', id: 'age_months', kind: 'number', label: 'Age', unit: 'months', min: 0, max: 240, step: 1 },
    { group: 'Birth history', id: 'premature', kind: 'check', label: 'Premature / low birth weight' },

    { group: 'Examination', id: 'palpable_groin', kind: 'check', label: 'Palpable in groin, not in scrotum' },
    { group: 'Examination', id: 'retractile', kind: 'check', label: 'Can be coaxed into scrotum & stays (retractile)' },
    { group: 'Examination', id: 'impalpable', kind: 'check', label: 'Impalpable testis' },
    { group: 'Examination', id: 'bilateral_impalpable', kind: 'check', label: 'Bilateral impalpable' },
    { group: 'Examination', id: 'ascended', kind: 'check', label: 'Previously descended, now ascended (acquired)' },
    { group: 'Examination', id: 'hypospadias', kind: 'check', label: 'Bilateral impalpable + hypospadias / ambiguous genitalia' },
  ];

  if (window.RGPTriage) RGPTriage.register('undescended-testis-triage', {
    title: 'Undescended testis — triage',
    subtitle: 'Tick findings. Surfaces the DSD emergency, bilateral-impalpable urgency and surgical-referral timing.',
    guideline: 'NICE CKS · BAUS',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Re-examine warm/relaxed; retractile testes need only monitoring; true undescended testis → refer paediatric surgery/urology (orchidopexy ideally by 12–18 months).',
    rules: [
      {
        id: 'dsd', tier: 'emergency',
        label: 'Bilateral impalpable testes + hypospadias / ambiguous genitalia — possible DSD/CAH',
        action: 'Urgent paediatric endocrine/neonatal assessment (exclude salt-losing CAH).',
        patientPhrase: '"We need an urgent specialist assessment to check the hormones and anatomy."',
        source: 'BAUS / endocrine',
        when: i => i.hypospadias || (i.bilateral_impalpable && i.age_months != null && i.age_months < 3),
      },
      {
        id: 'bilateral', tier: 'urgent',
        label: 'Bilateral impalpable testes',
        action: 'Urgent paediatric surgical + endocrine referral (karyotype, hormones, imaging).',
        source: 'BAUS',
        when: i => i.bilateral_impalpable,
      },
      {
        id: 'refer', tier: 'urgent',
        label: 'True undescended / impalpable / ascended testis',
        action: 'Refer paediatric surgery/urology; orchidopexy by ~18 months (or promptly if older/acquired).',
        source: 'NICE CKS', sourceUrl: 'https://cks.nice.org.uk/topics/undescended-testes/',
        when: i => i.impalpable || i.palpable_groin || i.ascended,
      },
      {
        id: 'retractile', tier: 'routine',
        label: 'Retractile testis',
        action: 'Reassure; annual review (small risk of ascent); no surgery if it stays down.',
        source: 'NICE CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Undescended testes', url: 'https://cks.nice.org.uk/topics/undescended-testes/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('undescended-testis-dx', {
    title: 'Undescended testis — classification',
    subtitle: 'The engine distinguishes retractile, palpable undescended, impalpable and acquired (ascended) testes, and surfaces the bilateral-impalpable DSD red flag.',
    guideline: 'NICE CKS · BAUS',
    patientPresenting: "I can't always feel my son's testicle in the scrotum, doctor.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'retractile', name: 'Retractile testis', summary: 'Coaxes into scrotum and stays; brisk cremasteric reflex', baseline: 9, category: 'common',
        keyExam: 'Warm relaxed exam — testis stays in scrotum.', nextIx: 'Reassure; annual review for ascent; no surgery.',
        patientPhrase: 'The testicle is present but pulls up with a reflex. It usually needs only monitoring, not surgery.',
        ciksUrl: 'https://cks.nice.org.uk/topics/undescended-testes/' },
      { id: 'palpable_undescended', name: 'Palpable undescended testis', summary: 'Felt in groin, cannot bring to scrotum', baseline: 7, category: 'common',
        keyExam: 'Palpable in inguinal canal.', nextIx: 'Refer for orchidopexy (ideally by 18 months).',
        patientPhrase: 'The testicle has not fully descended. A small operation brings it down and fixes it in place.',
        ciksUrl: 'https://cks.nice.org.uk/topics/undescended-testes/' },
      { id: 'impalpable', name: 'Impalpable testis', summary: 'Cannot feel; intra-abdominal or absent', baseline: 4, category: 'less-common',
        keyExam: 'Not palpable.', nextIx: 'Refer paediatric surgery (examination under anaesthesia ± laparoscopy).',
        patientPhrase: 'We cannot feel it, so a specialist looks (sometimes with a camera) to find and treat it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/undescended-testes/' },
      { id: 'ascended', name: 'Acquired (ascended) testis', summary: 'Previously in scrotum, now undescended', baseline: 3, category: 'less-common',
        keyExam: 'Documented prior descent.', nextIx: 'Refer for orchidopexy.',
        patientPhrase: 'The testicle has moved back up over time. It still needs an operation to reposition it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/undescended-testes/' },

      { id: 'dsd', name: 'Bilateral impalpable / DSD', summary: 'Bilateral impalpable ± hypospadias — possible CAH/DSD', baseline: 1, category: 'cant-miss',
        keyExam: 'Bilateral impalpable, hypospadias, hyperpigmentation.', nextIx: '\u26A1 Urgent endocrine/neonatal — karyotype, 17-OHP, U&E (salt-losing CAH).',
        patientPhrase: 'When both are impalpable we urgently check the hormones and chromosomes to keep your baby safe.',
        ciksUrl: 'https://cks.nice.org.uk/topics/undescended-testes/', redFlagAction: '\u26A1 Urgent endocrine/neonatal' },
    ],
    effects: {
      premature: { palpable_undescended: +4, impalpable: +2 },
      palpable_groin: { palpable_undescended: +24 },
      retractile: { retractile: +24 },
      impalpable: { impalpable: +22 },
      bilateral_impalpable: { dsd: +20, impalpable: +6 },
      ascended: { ascended: +24 },
      hypospadias: { dsd: +30 },
    },
    askAbout: {
      retractile: ['retractile'],
      palpable_undescended: ['palpable_groin'],
      impalpable: ['impalpable'],
      ascended: ['ascended'],
      dsd: ['bilateral_impalpable', 'hypospadias'],
    },
    sources: [
      { label: 'NICE CKS — Undescended testes', url: 'https://cks.nice.org.uk/topics/undescended-testes/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'undescended-testis', label: 'Undescended testis', triage: 'undescended-testis-triage', dx: 'undescended-testis-dx' }
  );
})();
