/* ============================================
   Diagnostic Tool pack — Ulcerative Colitis flare
   Shared-id triage + differential. Truelove & Witts severity ·
   CKS UC · NICE NG130 · exclude infection / toxic megacolon.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Context', id: 'known_uc', kind: 'check', label: 'Known ulcerative colitis' },
    { group: 'Context', id: 'recent_abx', kind: 'check', label: 'Recent antibiotics / hospital (C. difficile risk)' },
    { group: 'Context', id: 'nonadherent', kind: 'check', label: 'Stopped / reduced 5-ASA maintenance' },

    { group: 'Truelove & Witts', id: 'stools', kind: 'number', label: 'Bloody stools per day', unit: '/day', step: 1 },
    { group: 'Truelove & Witts', id: 'blood', kind: 'check', label: 'Visible blood with most stools' },
    { group: 'Truelove & Witts', id: 'temp', kind: 'number', label: 'Temperature', unit: '°C', step: 0.1 },
    { group: 'Truelove & Witts', id: 'hr', kind: 'number', label: 'Heart rate', unit: '/min', step: 1 },
    { group: 'Truelove & Witts', id: 'hb', kind: 'number', label: 'Haemoglobin', unit: 'g/L', step: 1 },
    { group: 'Truelove & Witts', id: 'crp_high', kind: 'check', label: 'CRP / ESR raised' },

    { group: 'Symptoms', id: 'urgency', kind: 'check', label: 'Urgency / tenesmus / nocturnal stools' },
    { group: 'Symptoms', id: 'abdo_pain', kind: 'check', label: 'Abdominal pain' },
    { group: 'Symptoms', id: 'weight_loss', kind: 'check', label: 'Weight loss' },

    { group: 'Toxic red flags', id: 'distension', kind: 'check', label: 'Marked distension / severe pain (? toxic megacolon)' },
    { group: 'Toxic red flags', id: 'systemic', kind: 'check', label: 'Tachycardia + fever + systemic toxicity' },
  ];

  if (window.RGPTriage) RGPTriage.register('uc-flare-triage', {
    title: 'UC flare — Truelove & Witts triage',
    subtitle: 'Enter stool count / vitals. Surfaces acute severe colitis, toxic megacolon and infection-mimic pathways.',
    guideline: 'Truelove & Witts · NICE NG130',
    inputs: INPUTS,
    defaultMessage: 'No severe-flare rule fired. Confirm activity (CRP, calprotectin, FBC), exclude infection (stool MC&S + C. difficile), optimise 5-ASA (oral + topical) and review with the IBD team.',
    rules: [
      {
        id: 'toxic_megacolon', tier: 'emergency',
        label: 'Possible toxic megacolon — distension + systemic toxicity',
        action: 'Call 999 / same-day admission — AXR, IV steroids, surgical + IBD teams.',
        patientPhrase: '"This is a dangerous complication of colitis — you need emergency hospital care now."',
        source: 'NICE NG130',
        when: i => i.distension && (i.systemic || (i.hr != null && i.hr > 110)),
      },
      {
        id: 'acute_severe', tier: 'emergency',
        label: 'Acute severe UC (≥6 bloody stools/day + any systemic feature)',
        action: 'Same-day admission — IV corticosteroids, VTE prophylaxis, stool cultures, daily monitoring.',
        patientPhrase: '"This is a severe flare that needs admission today for intravenous treatment."',
        source: 'Truelove & Witts / NICE NG130', sourceUrl: 'https://www.nice.org.uk/guidance/ng130',
        when: i => (i.stools != null && i.stools >= 6 && i.blood) && ((i.temp != null && i.temp > 37.8) || (i.hr != null && i.hr > 90) || (i.hb != null && i.hb < 105) || i.crp_high),
      },
      {
        id: 'infection', tier: 'urgent',
        label: 'Exclude C. difficile / enteric infection',
        action: 'Stool MC&S + C. difficile toxin before escalating immunosuppression.',
        source: 'NICE NG130',
        when: i => i.recent_abx,
      },
      {
        id: 'moderate', tier: 'urgent',
        label: 'Moderate flare (4–6 stools, limited systemic upset)',
        action: 'Optimise oral + topical 5-ASA; consider oral steroids; IBD team review; bloods + calprotectin.',
        source: 'NICE NG130',
        when: i => i.stools != null && i.stools >= 4,
      },
      {
        id: 'mild', tier: 'routine',
        label: 'Mild flare (<4 stools, no systemic upset)',
        action: 'Optimise/restart 5-ASA (oral + topical), check adherence, calprotectin, review.',
        source: 'NICE NG130',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG130 — Ulcerative colitis', url: 'https://www.nice.org.uk/guidance/ng130' },
      { label: 'NICE CKS — Ulcerative colitis', url: 'https://cks.nice.org.uk/topics/ulcerative-colitis/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('uc-flare-dx', {
    title: 'Worsening UC — severity & mimics',
    subtitle: 'The engine grades the flare by Truelove & Witts and weights it against infective colitis, and always surfaces acute severe colitis, toxic megacolon and colorectal cancer/dysplasia when triggered.',
    guideline: 'Truelove & Witts · NICE NG130',
    patientPresenting: "My colitis is playing up, doctor — I'm going to the loo constantly and there's a lot of blood.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'mild_mod_flare', name: 'Mild–moderate UC flare', summary: '<6 stools/day, limited systemic upset', baseline: 12, category: 'common',
        keyExam: 'Mild abdominal tenderness, no toxicity.', nextIx: 'FBC/CRP, calprotectin, stool MC&S; optimise oral + topical 5-ASA ± oral steroid.',
        patientPhrase: 'Your colitis is active but not severe. We step treatment up and check it is not an infection.',
        ciksUrl: 'https://cks.nice.org.uk/topics/ulcerative-colitis/', caseLink: '../cases/ulcerative-colitis.html' },
      { id: 'infection', name: 'Infective colitis / C. difficile', summary: 'Recent antibiotics / hospital, acute bloody diarrhoea', baseline: 5, category: 'common',
        keyExam: 'Fever, dehydration.', nextIx: 'Stool MC&S + C. difficile toxin before escalating immunosuppression.',
        patientPhrase: 'An infection can mimic or trigger a flare — we must check for it before increasing immune-suppressing treatment.',
        ciksUrl: 'https://cks.nice.org.uk/topics/diarrhoea-adults-assessment/' },
      { id: 'functional', name: 'Functional symptoms / proctitis only', summary: 'Symptoms with normal calprotectin, or limited distal disease', baseline: 4, category: 'less-common',
        keyExam: 'Normal systemic exam.', nextIx: 'Calprotectin to confirm activity; topical therapy for proctitis; manage functional overlay.',
        patientPhrase: 'Sometimes symptoms persist without much active inflammation — a stool marker guides whether to escalate.',
        ciksUrl: 'https://cks.nice.org.uk/topics/irritable-bowel-syndrome/' },

      { id: 'acute_severe', name: 'Acute severe ulcerative colitis', summary: '≥6 bloody stools/day + systemic features (Truelove & Witts)', baseline: 1, category: 'cant-miss',
        keyExam: 'Tachycardia, fever, anaemia, tenderness.', nextIx: '\u26A1 Same-day admission — IV steroids, stool cultures, daily review, surgical input.',
        patientPhrase: 'This is a severe flare that needs admission today for intravenous treatment and close monitoring.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng130', redFlagAction: '\u26A1 Same-day admission' },
      { id: 'toxic_megacolon', name: 'Toxic megacolon', summary: 'Colonic distension + systemic toxicity', baseline: 1, category: 'cant-miss',
        keyExam: 'Distension, severe pain, septic.', nextIx: '\u26A1 999 / same-day admission — AXR, IV therapy, urgent surgical review.',
        patientPhrase: 'A severely dilated, inflamed bowel is an emergency — we need hospital care immediately.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng130', redFlagAction: '\u26A1 Emergency admission' },
      { id: 'cancer', name: 'Colorectal cancer / dysplasia', summary: 'Long-standing colitis, new persistent change, weight loss', baseline: 1, category: 'cant-miss',
        keyExam: 'Mass, anaemia, cachexia.', nextIx: '\u26A1 Colonoscopy via IBD surveillance pathway / 2WW.',
        patientPhrase: 'Long-standing colitis raises bowel-cancer risk, so a persistent new change warrants a camera test.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Colonoscopy / 2WW' },
    ],
    effects: {
      known_uc: { mild_mod_flare: +6 },
      recent_abx: { infection: +20 },
      nonadherent: { mild_mod_flare: +6 },

      stools: (v) => v == null ? {} : (v >= 6 ? { acute_severe: +18, mild_mod_flare: -4 } : (v >= 4 ? { mild_mod_flare: +10 } : { mild_mod_flare: +4 })),
      blood: { mild_mod_flare: +8, acute_severe: +6 },
      temp: (v) => v != null && v > 37.8 ? { acute_severe: +10, infection: +6 } : {},
      hr: (v) => v != null && v > 90 ? { acute_severe: +8 } : {},
      hb: (v) => v != null && v < 105 ? { acute_severe: +8, cancer: +4 } : {},
      crp_high: { acute_severe: +8, mild_mod_flare: +4, functional: -8 },

      urgency: { mild_mod_flare: +6 },
      abdo_pain: { acute_severe: +4, toxic_megacolon: +4 },
      weight_loss: { cancer: +12, acute_severe: +2 },

      distension: { toxic_megacolon: +28 },
      systemic: { acute_severe: +12, toxic_megacolon: +10 },
    },
    askAbout: {
      mild_mod_flare: ['stools', 'urgency'],
      infection: ['recent_abx'],
      functional: ['crp_high'],
      acute_severe: ['stools', 'temp', 'hr', 'hb'],
      toxic_megacolon: ['distension', 'systemic'],
      cancer: ['weight_loss'],
    },
    sources: [
      { label: 'NICE NG130 — Ulcerative colitis', url: 'https://www.nice.org.uk/guidance/ng130' },
      { label: 'NICE CKS — Ulcerative colitis', url: 'https://cks.nice.org.uk/topics/ulcerative-colitis/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'uc-flare', label: 'Ulcerative colitis flare', triage: 'uc-flare-triage', dx: 'uc-flare-dx' }
  );
})();
