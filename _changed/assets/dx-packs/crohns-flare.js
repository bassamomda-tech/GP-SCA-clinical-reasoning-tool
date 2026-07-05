/* ============================================
   Diagnostic Tool pack — Crohn's Disease flare
   Shared-id triage + differential. CKS Crohn's · ECCO ·
   exclude infection / obstruction / abscess.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Context', id: 'known_crohns', kind: 'check', label: 'Known Crohn\u2019s disease' },
    { group: 'Context', id: 'recent_abx', kind: 'check', label: 'Recent antibiotics / hospital (C. difficile risk)' },
    { group: 'Context', id: 'resection', kind: 'check', label: 'Previous ileal resection' },
    { group: 'Context', id: 'immunosuppressed', kind: 'check', label: 'On steroids / immunosuppressant / biologic' },

    { group: 'Symptoms', id: 'diarrhoea', kind: 'check', label: 'Increased stool frequency' },
    { group: 'Symptoms', id: 'blood', kind: 'check', label: 'Blood / mucus in stool' },
    { group: 'Symptoms', id: 'abdo_pain', kind: 'check', label: 'Abdominal pain / cramping' },
    { group: 'Symptoms', id: 'perianal', kind: 'check', label: 'Perianal pain / discharge (fistula / abscess)' },
    { group: 'Symptoms', id: 'weight_loss', kind: 'check', label: 'Weight loss / fatigue' },

    { group: 'Inflammatory markers', id: 'crp_high', kind: 'check', label: 'CRP raised' },
    { group: 'Inflammatory markers', id: 'calprotectin_high', kind: 'check', label: 'Faecal calprotectin raised' },
    { group: 'Inflammatory markers', id: 'anaemia', kind: 'check', label: 'Anaemia' },

    { group: 'Vitals', id: 'hr', kind: 'number', label: 'Heart rate', unit: '/min', step: 1 },
    { group: 'Vitals', id: 'temp', kind: 'number', label: 'Temperature', unit: '°C', step: 0.1 },

    { group: 'Complication red flags', id: 'obstruction', kind: 'check', label: 'Vomiting / distension / colicky pain (obstruction)' },
    { group: 'Complication red flags', id: 'peritonism', kind: 'check', label: 'Severe pain / peritonism / sepsis' },
  ];

  if (window.RGPTriage) RGPTriage.register('crohns-flare-triage', {
    title: 'Crohn\u2019s flare — severity triage',
    subtitle: 'Tick features. Surfaces obstruction, abscess/perforation, sepsis and infection-mimic pathways.',
    guideline: 'CKS Crohn\u2019s · ECCO',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Confirm active inflammation (CRP, calprotectin, FBC), exclude infection (stool MC&S + C. difficile), and contact the IBD team to optimise treatment.',
    rules: [
      {
        id: 'surgical', tier: 'emergency',
        label: 'Surgical emergency — obstruction / perforation / sepsis',
        action: 'Same-day surgical admission — IV fluids/antibiotics, imaging, IBD + surgical teams.',
        patientPhrase: '"This needs emergency hospital assessment today — there may be a blockage or serious complication."',
        source: 'ECCO / CKS',
        when: i => i.peritonism || i.obstruction || (i.hr != null && i.hr > 110) || (i.temp != null && i.temp >= 38.5),
      },
      {
        id: 'abscess', tier: 'urgent',
        label: 'Perianal / intra-abdominal abscess or fistula',
        action: 'Same-day imaging + IBD/surgical referral; antibiotics; do not start/escalate steroids blindly.',
        source: 'ECCO',
        when: i => i.perianal,
      },
      {
        id: 'infection', tier: 'urgent',
        label: 'Exclude infection mimicking a flare (C. difficile / enteric)',
        action: 'Stool MC&S + C. difficile toxin before escalating immunosuppression.',
        source: 'ECCO',
        when: i => i.recent_abx && i.diarrhoea,
      },
      {
        id: 'active_flare', tier: 'urgent',
        label: 'Moderate–severe active flare (systemic upset, raised inflammatory markers)',
        action: 'Contact IBD team; consider induction (steroids per plan); bloods + calprotectin; safety-net.',
        source: 'CKS Crohn\u2019s',
        when: i => (i.crp_high || i.calprotectin_high) && (i.weight_loss || i.blood || i.anaemia),
      },
      {
        id: 'mild', tier: 'routine',
        label: 'Mild flare / symptom review',
        action: 'Optimise maintenance, confirm inflammation vs functional symptoms, IBD-team advice, calprotectin.',
        source: 'CKS Crohn\u2019s',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Crohn\u2019s disease', url: 'https://cks.nice.org.uk/topics/crohns-disease/' },
      { label: 'NICE NG129 — Crohn\u2019s management', url: 'https://www.nice.org.uk/guidance/ng129' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('crohns-flare-dx', {
    title: 'Worsening Crohn\u2019s — what is driving it?',
    subtitle: 'Not every symptom is active inflammation. The engine weights flare against infection, obstruction, bile-acid diarrhoea and functional overlap, and surfaces abscess / obstruction / IBD-related cancer when triggered.',
    guideline: 'CKS Crohn\u2019s · ECCO',
    patientPresenting: "My Crohn's feels like it's flaring, doctor — more pain, more trips to the toilet, and I'm exhausted.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'active_flare', name: 'Active Crohn\u2019s inflammation', summary: 'Diarrhoea, pain, raised CRP / calprotectin, systemic upset', baseline: 12, category: 'common',
        keyExam: 'Abdominal tenderness, mouth ulcers, perianal disease, weight loss.', nextIx: 'CRP, FBC, calprotectin; exclude infection; IBD team for induction therapy.',
        patientPhrase: 'The bowel inflammation is active again. We confirm it and step up treatment to bring it back under control.',
        ciksUrl: 'https://cks.nice.org.uk/topics/crohns-disease/', caseLink: '../cases/crohns.html' },
      { id: 'infection', name: 'Superimposed infection (C. difficile / enteric)', summary: 'Recent antibiotics / hospital, acute diarrhoea', baseline: 5, category: 'common',
        keyExam: 'Fever, dehydration.', nextIx: 'Stool MC&S + C. difficile toxin before escalating immunosuppression.',
        patientPhrase: 'An infection can mimic a flare. We must check for it before increasing the immune-suppressing treatment.',
        ciksUrl: 'https://cks.nice.org.uk/topics/diarrhoea-adults-assessment/' },
      { id: 'bile_acid', name: 'Bile-acid diarrhoea', summary: 'Post-ileal-resection watery diarrhoea, normal inflammatory markers', baseline: 4, category: 'less-common',
        keyExam: 'Usually well between episodes.', nextIx: 'Empirical bile-acid sequestrant trial; SeHCAT if available.',
        patientPhrase: 'After ileal surgery, bile salts can cause diarrhoea without active disease — a binding medicine helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/crohns-disease/' },
      { id: 'functional', name: 'Functional / IBS overlap', summary: 'Symptoms with normal CRP and calprotectin', baseline: 4, category: 'less-common',
        keyExam: 'Normal exam, no systemic upset.', nextIx: 'Normal calprotectin reassures; manage functional symptoms; avoid unnecessary steroids.',
        patientPhrase: 'Sometimes the gut stays sensitive even when inflammation is controlled — we treat the symptoms without extra steroids.',
        ciksUrl: 'https://cks.nice.org.uk/topics/irritable-bowel-syndrome/' },

      { id: 'obstruction', name: 'Intestinal obstruction (stricture)', summary: 'Colicky pain, vomiting, distension', baseline: 1, category: 'cant-miss',
        keyExam: 'Distension, tinkling/absent bowel sounds.', nextIx: '\u26A1 Same-day admission — imaging, IV fluids, surgical/IBD review.',
        patientPhrase: 'A narrowing in the bowel may be blocking it — that needs hospital assessment today.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng129', redFlagAction: '\u26A1 Same-day admission' },
      { id: 'abscess', name: 'Abscess / perforation', summary: 'Perianal or intra-abdominal collection, sepsis', baseline: 1, category: 'cant-miss',
        keyExam: 'Perianal swelling/discharge, peritonism, fever.', nextIx: '\u26A1 Urgent imaging + surgical/IBD referral; antibiotics; avoid blind steroid escalation.',
        patientPhrase: 'An abscess may have formed — that needs scanning and treatment urgently, and we are careful with steroids.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng129', redFlagAction: '\u26A1 Urgent imaging + surgery' },
      { id: 'cancer', name: 'IBD-related bowel cancer', summary: 'Long-standing disease, weight loss, new persistent change', baseline: 1, category: 'cant-miss',
        keyExam: 'Mass, anaemia, cachexia.', nextIx: '\u26A1 Colonoscopy via IBD team; surveillance for long-standing colitis.',
        patientPhrase: 'Long-standing inflammation slightly raises bowel-cancer risk, so persistent new change warrants a camera test.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Colonoscopy / 2WW' },
    ],
    effects: {
      known_crohns: { active_flare: +6 },
      recent_abx: { infection: +18 },
      resection: { bile_acid: +16 },
      immunosuppressed: { infection: +4, abscess: +3 },

      diarrhoea: { active_flare: +8, infection: +6, bile_acid: +6 },
      blood: { active_flare: +10 },
      abdo_pain: { active_flare: +6, obstruction: +6 },
      perianal: { abscess: +24 },
      weight_loss: { active_flare: +6, cancer: +12 },

      crp_high: { active_flare: +14, functional: -8 },
      calprotectin_high: { active_flare: +18, functional: -12 },
      anaemia: { active_flare: +6, cancer: +6 },

      obstruction: { obstruction: +30 },
      peritonism: { abscess: +20 },
    },
    askAbout: {
      active_flare: ['crp_high', 'calprotectin_high', 'blood'],
      infection: ['recent_abx', 'diarrhoea'],
      bile_acid: ['resection'],
      functional: ['crp_high', 'calprotectin_high'],
      obstruction: ['obstruction', 'abdo_pain'],
      abscess: ['perianal', 'peritonism'],
      cancer: ['weight_loss'],
    },
    sources: [
      { label: 'NICE CKS — Crohn\u2019s disease', url: 'https://cks.nice.org.uk/topics/crohns-disease/' },
      { label: 'NICE NG129 — Crohn\u2019s management', url: 'https://www.nice.org.uk/guidance/ng129' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'crohns-flare', label: 'Crohn\u2019s flare', triage: 'crohns-flare-triage', dx: 'crohns-flare-dx' }
  );
})();
