/* ============================================
   Diagnostic Tool pack — Rectal Bleeding
   Shared-id triage + differential. NICE NG12 (colorectal) ·
   CKS Rectal bleeding · CKS Haemorrhoids / Anal fissure.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'fh_crc', kind: 'check', label: 'FH colorectal cancer / IBD / polyposis' },
    { group: 'Bloods / obs', id: 'hb', kind: 'number', label: 'Haemoglobin', unit: 'g/L', step: 1 },
    { group: 'Bloods / obs', id: 'sbp', kind: 'number', label: 'Systolic BP', unit: 'mmHg', step: 1 },
    { group: 'Bloods / obs', id: 'hr', kind: 'number', label: 'Heart rate', unit: '/min', step: 1 },

    { group: 'Bleeding character', id: 'bright_paper', kind: 'check', label: 'Bright-red blood on paper / surface of stool' },
    { group: 'Bleeding character', id: 'mixed_stool', kind: 'check', label: 'Blood mixed through stool' },
    { group: 'Bleeding character', id: 'melaena', kind: 'check', label: 'Black tarry stool (melaena)' },
    { group: 'Bleeding character', id: 'mucus', kind: 'check', label: 'Mucus / slime with stool' },
    { group: 'Bleeding character', id: 'pain_defecation', kind: 'check', label: 'Sharp pain on defecation (fissure pattern)' },
    { group: 'Bleeding character', id: 'prolapse_itch', kind: 'check', label: 'Lump / prolapse / perianal itch' },
    { group: 'Bleeding character', id: 'diarrhoea_blood', kind: 'check', label: 'Bloody diarrhoea / urgency / tenesmus' },

    { group: 'Red flags', id: 'change_bowel', kind: 'check', label: 'Persistent change in bowel habit (≥6 weeks)' },
    { group: 'Red flags', id: 'weight_loss', kind: 'check', label: 'Unintentional weight loss' },
    { group: 'Red flags', id: 'mass', kind: 'check', label: 'Abdominal / rectal mass' },
    { group: 'Red flags', id: 'iron_def', kind: 'check', label: 'Iron-deficiency anaemia' },
  ];

  if (window.RGPTriage) RGPTriage.register('rectal-bleeding-triage', {
    title: 'Rectal bleeding — red-flag triage',
    subtitle: 'Tick features. Surfaces emergency bleeding, colorectal 2WW and upper-GI pathways per NICE NG12.',
    guideline: 'NICE NG12 · CKS Rectal bleeding',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired — pattern fits a benign anorectal cause. Examine (abdomen + PR ± proctoscopy), give the differential below, and safety-net for change in bowel habit / weight loss.',
    rules: [
      {
        id: 'unstable', tier: 'emergency',
        label: 'Significant bleed with haemodynamic instability',
        action: 'Call 999 / same-day admission — resus, IV access, urgent endoscopy.',
        patientPhrase: '"You are losing enough blood to affect your circulation — I am sending you to hospital now."',
        source: 'NICE CG141',
        when: i => (i.sbp != null && i.sbp < 100) || (i.hr != null && i.hr > 110) || (i.hb != null && i.hb < 80),
      },
      {
        id: 'melaena', tier: 'emergency',
        label: 'Melaena — likely upper-GI source',
        action: 'Same-day admission for OGD (Glasgow-Blatchford).',
        patientPhrase: '"Black tarry stool usually means bleeding higher up — that needs a same-day camera test."',
        source: 'NICE CG141', sourceUrl: 'https://www.nice.org.uk/guidance/cg141',
        when: i => i.melaena,
      },
      {
        id: 'crc_mass', tier: 'cancer',
        label: 'Abdominal / rectal mass with rectal bleeding — colorectal 2WW',
        action: 'Lower GI 2WW.',
        source: 'NICE NG12 §1.3', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.mass,
      },
      {
        id: 'crc_50', tier: 'cancer',
        label: 'Age ≥50 with rectal bleeding, or ≥40 with bleeding + change in bowel habit — colorectal 2WW',
        action: 'Lower GI 2WW ± FIT.',
        patientPhrase: '"At your age, rectal bleeding needs a fast referral to rule out a bowel cause — this is standard, not a sign anything terrible has been found."',
        source: 'NICE NG12 §1.3',
        when: i => (i.age != null && i.age >= 50 && (i.bright_paper || i.mixed_stool || i.diarrhoea_blood)) || (i.age != null && i.age >= 40 && i.change_bowel),
      },
      {
        id: 'ida_2ww', tier: 'cancer',
        label: 'Rectal bleeding + iron-deficiency anaemia — colorectal 2WW',
        action: 'Lower GI 2WW (any age).',
        source: 'NICE NG12 §1.3',
        when: i => i.iron_def || (i.hb != null && i.hb < 110),
      },
      {
        id: 'ibd', tier: 'urgent',
        label: 'Bloody diarrhoea with urgency / tenesmus — ? inflammatory bowel disease',
        action: 'Faecal calprotectin, stool MC&S; urgent gastroenterology if systemically unwell.',
        source: 'NICE NG12 / CKS IBD',
        when: i => i.diarrhoea_blood,
      },
      {
        id: 'benign', tier: 'routine',
        label: 'Likely benign anorectal cause, no red flags',
        action: 'Examine (PR ± proctoscopy); treat haemorrhoids / fissure; review and re-examine if persists.',
        source: 'CKS Haemorrhoids / Anal fissure',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE CKS — Rectal bleeding', url: 'https://cks.nice.org.uk/topics/rectal-bleeding/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('rectal-bleeding-dx', {
    title: 'Rectal bleeding — differential diagnosis',
    subtitle: 'The engine ranks benign anorectal causes against IBD and diverticular disease, and always surfaces colorectal cancer and an upper-GI bleed when their triggers fire.',
    guideline: 'NICE NG12 · CKS Rectal bleeding',
    patientPresenting: "I've noticed blood when I go to the toilet, doctor — it's been happening for a few weeks now.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'haemorrhoids', name: 'Haemorrhoids', summary: 'Bright-red blood on paper/surface, prolapse, itch, painless', baseline: 12, category: 'common',
        keyExam: 'Proctoscopy; external/prolapsing piles; PR usually normal.', nextIx: 'Clinical + proctoscopy; fibre/fluids, topical treatment; banding/surgery if refractory. Still exclude cancer if ≥50/red flags.',
        patientPhrase: 'Swollen blood vessels at the back passage are the commonest cause and very treatable — but I will still check there is nothing higher up.',
        ciksUrl: 'https://cks.nice.org.uk/topics/haemorrhoids/' },
      { id: 'fissure', name: 'Anal fissure', summary: 'Sharp pain on defecation + small bright streak; constipation', baseline: 8, category: 'common',
        keyExam: 'Posterior midline tear; sentinel pile; very tender (defer PR if severe).', nextIx: 'Clinical; soften stool, topical GTN/diltiazem; review.',
        patientPhrase: 'A small tear in the skin of the back passage causes the sharp pain and streak of blood. Softening the stool lets it heal.',
        ciksUrl: 'https://cks.nice.org.uk/topics/anal-fissure/' },
      { id: 'diverticular', name: 'Diverticular bleeding', summary: 'Older patient, painless larger-volume fresh PR bleed', baseline: 5, category: 'common',
        keyExam: 'Often normal; left iliac fossa tenderness if diverticulitis.', nextIx: 'FBC; colonoscopy after acute episode to confirm and exclude cancer.',
        patientPhrase: 'Small pouches in the bowel wall can bleed. Most settle, but we confirm with a camera test once things calm down.',
        ciksUrl: 'https://cks.nice.org.uk/topics/diverticular-disease/' },
      { id: 'ibd', name: 'Inflammatory bowel disease', summary: 'Bloody diarrhoea, urgency, tenesmus, mucus, younger patient', baseline: 5, category: 'common',
        keyExam: 'Abdominal tenderness, perianal disease (Crohn\u2019s), systemic signs.', nextIx: 'Faecal calprotectin, stool MC&S, FBC/CRP; refer gastroenterology for colonoscopy.',
        patientPhrase: 'Inflammation of the bowel lining can cause bleeding and urgency. A stool test and camera test confirm it, and treatment controls it well.',
        ciksUrl: 'https://cks.nice.org.uk/topics/crohns-disease/', caseLink: '../cases/ulcerative-colitis.html' },
      { id: 'infective', name: 'Infective colitis', summary: 'Acute bloody diarrhoea, recent travel / contacts / antibiotics', baseline: 3, category: 'less-common',
        keyExam: 'Fever, dehydration, diffuse tenderness.', nextIx: 'Stool MC&S incl. C. difficile; hydration; usually self-limiting.',
        patientPhrase: 'An infection can inflame the bowel and cause bloody stools — usually short-lived, but we send a stool sample.',
        ciksUrl: 'https://cks.nice.org.uk/topics/gastroenteritis/' },
      { id: 'angiodysplasia', name: 'Angiodysplasia', summary: 'Older patient, recurrent painless bleeding / iron deficiency', baseline: 2, category: 'less-common',
        keyExam: 'Often normal.', nextIx: 'Colonoscopy ± capsule endoscopy after cancer excluded.',
        patientPhrase: 'Fragile small blood vessels in the bowel can bleed on and off — we look for them once a camera test has excluded other causes.',
        ciksUrl: 'https://cks.nice.org.uk/topics/rectal-bleeding/' },

      { id: 'crc', name: 'Colorectal cancer', summary: 'Change in bowel habit, weight loss, mass, anaemia, age ≥50', baseline: 1, category: 'cant-miss',
        keyExam: 'Abdominal / rectal mass, hepatomegaly, lymphadenopathy, cachexia.', nextIx: '\u26A1 Lower GI 2WW per NICE NG12. Do not attribute bleeding to piles in ≥50 / red flags without examination.',
        patientPhrase: 'Because of these features I want an urgent specialist look at the bowel to rule out cancer — most referrals come back clear.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Lower GI 2WW' },
      { id: 'upper_gi', name: 'Upper-GI bleed (melaena)', summary: 'Black tarry stool ± haematemesis, NSAID / varices / ulcer', baseline: 1, category: 'cant-miss',
        keyExam: 'Haemodynamic status; epigastric tenderness; stigmata of liver disease.', nextIx: '\u26A1 Same-day admission, Glasgow-Blatchford, urgent OGD.',
        patientPhrase: 'Black tarry stools usually mean bleeding higher in the gut — that needs hospital assessment today.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg141', redFlagAction: '\u26A1 Same-day OGD' },
    ],
    effects: {
      age: (v) => v >= 50 ? { crc: +8, diverticular: +6, angiodysplasia: +4, ibd: -2 } : (v < 40 ? { ibd: +4, fissure: +3, haemorrhoids: +2, crc: -2 } : {}),
      fh_crc: { crc: +8, ibd: +4 },
      hb: (v) => v != null && v < 110 ? { crc: +8, angiodysplasia: +4 } : {},

      bright_paper: { haemorrhoids: +18, fissure: +6 },
      mixed_stool: { crc: +12, ibd: +6, haemorrhoids: -4 },
      melaena: { upper_gi: +30 },
      mucus: { ibd: +8, crc: +4 },
      pain_defecation: { fissure: +22, haemorrhoids: +4 },
      prolapse_itch: { haemorrhoids: +18 },
      diarrhoea_blood: { ibd: +20, infective: +12 },

      change_bowel: { crc: +16, ibd: +4 },
      weight_loss: { crc: +18, ibd: +4 },
      mass: { crc: +22 },
      iron_def: { crc: +14, angiodysplasia: +6 },
    },
    askAbout: {
      haemorrhoids: ['bright_paper', 'prolapse_itch'],
      fissure: ['pain_defecation'],
      diverticular: ['age'],
      ibd: ['diarrhoea_blood', 'mucus'],
      infective: ['diarrhoea_blood'],
      angiodysplasia: ['iron_def', 'age'],
      crc: ['change_bowel', 'weight_loss', 'mass', 'age'],
      upper_gi: ['melaena'],
    },
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE CKS — Rectal bleeding', url: 'https://cks.nice.org.uk/topics/rectal-bleeding/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'rectal-bleeding', label: 'Rectal bleeding', triage: 'rectal-bleeding-triage', dx: 'rectal-bleeding-dx' }
  );
})();
