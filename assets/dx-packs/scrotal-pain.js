/* ============================================
   Diagnostic Tool pack — Scrotal Pain / Swelling (acute)
   Shared-id triage + differential. CKS Scrotal pain · EAU · NICE NG12.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },

    { group: 'Onset', id: 'sudden_severe', kind: 'check', label: 'Sudden severe pain (<6h), often with nausea/vomiting' },
    { group: 'Onset', id: 'gradual', kind: 'check', label: 'Gradual onset over days' },

    { group: 'Features', id: 'high_riding', kind: 'check', label: 'High-riding / horizontal testis, absent cremasteric reflex' },
    { group: 'Features', id: 'relieved_elevation', kind: 'check', label: 'Pain relieved by elevation (Prehn positive)' },
    { group: 'Features', id: 'dysuria_discharge', kind: 'check', label: 'Dysuria / urethral discharge / recent UTI / STI risk' },
    { group: 'Features', id: 'blue_dot', kind: 'check', label: 'Localised upper-pole tenderness / "blue dot"' },
    { group: 'Features', id: 'irreducible_lump', kind: 'check', label: 'Irreducible groin/scrotal lump + vomiting (hernia)' },
    { group: 'Features', id: 'painless_mass', kind: 'check', label: 'Painless hard testicular mass' },
    { group: 'Features', id: 'transilluminates', kind: 'check', label: 'Soft, transilluminating swelling (hydrocele)' },

    { group: 'Red flags', id: 'systemic', kind: 'check', label: 'Fever / systemically unwell' },
  ];

  if (window.RGPTriage) RGPTriage.register('scrotal-pain-triage', {
    title: 'Acute scrotum — triage',
    subtitle: 'Tick features. Torsion is time-critical — surfaces it first, then strangulated hernia, infection and tumour.',
    guideline: 'CKS · EAU · NICE NG12',
    inputs: INPUTS,
    defaultMessage: 'No emergency rule fired — but if any doubt about torsion, refer for same-day surgical exploration. Otherwise examine, urine dip/STI screen, and manage by likely cause.',
    rules: [
      {
        id: 'torsion', tier: 'emergency',
        label: 'Suspected testicular torsion',
        action: 'Call surgery NOW — same-day exploration within 6h. Do NOT wait for imaging.',
        patientPhrase: '"This could be a twisted testicle — an emergency. I am sending you straight to hospital for surgery to save it."',
        source: 'CKS / BAUS',
        when: i => i.sudden_severe || i.high_riding || (i.age != null && i.age < 25 && !i.relieved_elevation && !i.dysuria_discharge),
      },
      {
        id: 'hernia', tier: 'emergency',
        label: 'Strangulated inguinoscrotal hernia',
        action: 'Same-day surgical admission.',
        source: 'CKS',
        when: i => i.irreducible_lump,
      },
      {
        id: 'tumour_2ww', tier: 'cancer',
        label: 'Painless hard testicular mass — suspected cancer',
        action: 'Urgent testicular USS + 2WW urology (NICE NG12).',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.painless_mass,
      },
      {
        id: 'infection', tier: 'urgent',
        label: 'Epididymo-orchitis',
        action: 'Urine + STI screen; antibiotics per likely organism (age-dependent); analgesia, support, review.',
        source: 'BASHH / CKS',
        when: i => i.dysuria_discharge || i.relieved_elevation || i.gradual,
      },
      {
        id: 'other', tier: 'routine',
        label: 'Other scrotal swelling — assess',
        action: 'Hydrocele / appendix torsion / varicocele as indicated; USS if uncertain.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Scrotal pain & swelling', url: 'https://cks.nice.org.uk/topics/scrotal-pain-swelling/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('scrotal-pain-dx', {
    title: 'Acute scrotum — differential',
    subtitle: 'Torsion must be excluded first in any acute scrotum. The engine weights torsion, epididymo-orchitis, appendix torsion and hydrocele, and always surfaces torsion, strangulated hernia and tumour.',
    guideline: 'CKS · EAU',
    patientPresenting: "My testicle suddenly became really painful, doctor, and it feels swollen.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'epididymo_orchitis', name: 'Epididymo-orchitis', summary: 'Gradual pain, dysuria/discharge, Prehn positive', baseline: 9, category: 'common',
        keyExam: 'Tender epididymis, pain eased by elevation; cremasteric reflex present.', nextIx: 'Urine + STI screen; antibiotics by age/risk; review (still exclude torsion if any doubt).',
        patientPhrase: 'This is inflammation/infection of the tube behind the testicle. Antibiotics and support treat it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/scrotal-pain-swelling/' },
      { id: 'appendix_torsion', name: 'Torsion of testicular appendix', summary: 'Younger boy, upper-pole tenderness, "blue dot"', baseline: 4, category: 'less-common',
        keyExam: 'Localised upper-pole tenderness, blue-dot sign.', nextIx: 'If torsion of testis excluded → conservative (analgesia); often surgical exploration to be safe.',
        patientPhrase: 'A small structure on the testicle has twisted — less serious than the testicle itself, but we make sure of the diagnosis.',
        ciksUrl: 'https://cks.nice.org.uk/topics/scrotal-pain-swelling/' },
      { id: 'hydrocele', name: 'Hydrocele / epididymal cyst', summary: 'Soft, transilluminating, often painless swelling', baseline: 4, category: 'common',
        keyExam: 'Transilluminates; can get above it.', nextIx: 'USS if any doubt; reassure; refer if symptomatic.',
        patientPhrase: 'This is a benign fluid collection around the testicle. It is harmless and only needs treatment if bothersome.',
        ciksUrl: 'https://cks.nice.org.uk/topics/scrotal-pain-swelling/' },

      { id: 'torsion', name: 'Testicular torsion', summary: 'Sudden severe pain, high-riding testis, absent cremasteric reflex, young', baseline: 2, category: 'cant-miss',
        keyExam: 'High-riding/horizontal testis, absent cremasteric reflex, severe tenderness.', nextIx: '\u26A1 Immediate surgical exploration within 6h — do not delay for imaging.',
        patientPhrase: 'A twisted testicle cuts off its blood supply — an emergency. Surgery within hours saves it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/scrotal-pain-swelling/', redFlagAction: '\u26A1 Same-day surgical exploration' },
      { id: 'hernia', name: 'Strangulated hernia', summary: 'Irreducible groin/scrotal lump + vomiting', baseline: 1, category: 'cant-miss',
        keyExam: 'Irreducible tender lump, bowel obstruction signs.', nextIx: '\u26A1 Same-day surgical admission.',
        patientPhrase: 'A hernia has become trapped — that needs emergency surgery today.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hernia/', redFlagAction: '\u26A1 Same-day surgery' },
      { id: 'tumour', name: 'Testicular tumour', summary: 'Painless hard mass, age 15–45', baseline: 1, category: 'cant-miss',
        keyExam: 'Hard, craggy, does not transilluminate.', nextIx: '\u26A1 Testicular USS + tumour markers (AFP, hCG, LDH); urology 2WW.',
        patientPhrase: 'A painless lump needs an urgent scan to exclude cancer — testicular cancer is very treatable when caught.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 USS + urology 2WW' },
    ],
    effects: {
      age: (v) => v == null ? {} : (v < 25 ? { torsion: +10, appendix_torsion: +4 } : (v >= 25 && v <= 45 ? { epididymo_orchitis: +4, tumour: +3 } : { epididymo_orchitis: +6, hydrocele: +3, torsion: -4 })),

      sudden_severe: { torsion: +26, epididymo_orchitis: -6 },
      gradual: { epididymo_orchitis: +12, torsion: -8 },

      high_riding: { torsion: +24 },
      relieved_elevation: { epididymo_orchitis: +16, torsion: -8 },
      dysuria_discharge: { epididymo_orchitis: +20 },
      blue_dot: { appendix_torsion: +22 },
      irreducible_lump: { hernia: +30 },
      painless_mass: { tumour: +30 },
      transilluminates: { hydrocele: +24 },

      systemic: { epididymo_orchitis: +6, hernia: +4 },
    },
    askAbout: {
      epididymo_orchitis: ['dysuria_discharge', 'relieved_elevation', 'gradual'],
      appendix_torsion: ['blue_dot'],
      hydrocele: ['transilluminates'],
      torsion: ['sudden_severe', 'high_riding', 'age'],
      hernia: ['irreducible_lump'],
      tumour: ['painless_mass'],
    },
    sources: [
      { label: 'NICE CKS — Scrotal pain & swelling', url: 'https://cks.nice.org.uk/topics/scrotal-pain-swelling/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'scrotal-pain', label: 'Scrotal pain / swelling', triage: 'scrotal-pain-triage', dx: 'scrotal-pain-dx' }
  );
})();
