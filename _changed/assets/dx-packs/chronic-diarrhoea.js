/* ============================================
   Diagnostic Tool pack — Chronic Diarrhoea (≥4 weeks)
   Shared-id triage + differential. NICE NG12 · CKS Diarrhoea ·
   CKS IBS / Coeliac / IBD.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'fh_gi', kind: 'check', label: 'FH coeliac / IBD / colorectal cancer' },
    { group: 'Demographics & context', id: 'travel', kind: 'check', label: 'Foreign travel / unwell contacts / recent antibiotics' },
    { group: 'Demographics & context', id: 'gallbladder', kind: 'check', label: 'Previous cholecystectomy / terminal ileal disease' },

    { group: 'Stool pattern', id: 'alt_pain', kind: 'check', label: 'Bloating, pain eased by defecation, alternating habit' },
    { group: 'Stool pattern', id: 'nocturnal', kind: 'check', label: 'Nocturnal diarrhoea (wakes from sleep)' },
    { group: 'Stool pattern', id: 'blood_mucus', kind: 'check', label: 'Blood / mucus / urgency / tenesmus' },
    { group: 'Stool pattern', id: 'steatorrhoea', kind: 'check', label: 'Pale, greasy, hard-to-flush stools' },
    { group: 'Stool pattern', id: 'watery_postchole', kind: 'check', label: 'Watery, urgent, post-meal (bile-acid pattern)' },

    { group: 'Associated', id: 'thyroid_sx', kind: 'check', label: 'Heat intolerance / weight loss / tremor / palpitations' },
    { group: 'Associated', id: 'coeliac_sx', kind: 'check', label: 'Bloating + fatigue + anaemia ± dermatitis herpetiformis' },
    { group: 'Associated', id: 'ttg_pos', kind: 'check', label: 'Anti-tTG positive' },
    { group: 'Associated', id: 'calprotectin_high', kind: 'check', label: 'Faecal calprotectin raised' },

    { group: 'Red flags', id: 'weight_loss', kind: 'check', label: 'Unintentional weight loss' },
    { group: 'Red flags', id: 'rectal_bleed', kind: 'check', label: 'Rectal bleeding' },
    { group: 'Red flags', id: 'mass_anaemia', kind: 'check', label: 'Abdominal / rectal mass / iron-deficiency anaemia' },
    { group: 'Red flags', id: 'dehydration', kind: 'check', label: 'Dehydration / systemic upset / fever' },
  ];

  if (window.RGPTriage) RGPTriage.register('chronic-diarrhoea-triage', {
    title: 'Chronic diarrhoea — red-flag triage',
    subtitle: 'Tick features. Surfaces colorectal 2WW, IBD and dehydration pathways per NICE NG12.',
    guideline: 'NICE NG12 · CKS Diarrhoea',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Send first-line workup (FBC, U&E, LFT, TFT, CRP, coeliac tTG, faecal calprotectin, stool MC&S) and work the differential below.',
    rules: [
      {
        id: 'dehydration', tier: 'emergency',
        label: 'Severe dehydration / systemic sepsis',
        action: 'Same-day assessment / admission — rehydration, bloods, stool cultures.',
        source: 'CKS Diarrhoea',
        when: i => i.dehydration,
      },
      {
        id: 'crc_2ww', tier: 'cancer',
        label: 'Age ≥60 change in habit, or any age with weight loss / rectal bleeding / mass / anaemia — colorectal 2WW',
        action: 'Lower GI 2WW ± FIT.',
        patientPhrase: '"A persistent change in your bowels with these features needs a fast referral to rule out a bowel cause."',
        source: 'NICE NG12 §1.3', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => (i.age != null && i.age >= 60) || i.weight_loss || i.mass_anaemia || (i.rectal_bleed && i.weight_loss),
      },
      {
        id: 'ibd', tier: 'urgent',
        label: 'Suspected IBD — raised calprotectin, bloody diarrhoea, nocturnal symptoms',
        action: 'Refer gastroenterology for colonoscopy; urgent if systemically unwell.',
        source: 'NICE NG12 / CKS IBD',
        when: i => i.calprotectin_high || (i.blood_mucus && i.nocturnal),
      },
      {
        id: 'coeliac', tier: 'urgent',
        label: 'Positive coeliac serology',
        action: 'Refer gastroenterology for duodenal biopsy (keep eating gluten); gluten-free diet once confirmed.',
        source: 'NICE NG20',
        when: i => i.ttg_pos,
      },
      {
        id: 'thyroid', tier: 'urgent',
        label: 'Thyrotoxic features with diarrhoea',
        action: 'TFTs; treat hyperthyroidism.',
        source: 'CKS Hyperthyroidism',
        when: i => i.thyroid_sx,
      },
      {
        id: 'routine', tier: 'routine',
        label: 'No red flags — structured workup',
        action: 'Bloods + coeliac + calprotectin + stool MC&S; manage per cause; review.',
        source: 'CKS Diarrhoea',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE CKS — Diarrhoea (chronic)', url: 'https://cks.nice.org.uk/topics/diarrhoea-adults-assessment/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('chronic-diarrhoea-dx', {
    title: 'Chronic diarrhoea — differential diagnosis',
    subtitle: 'The engine ranks IBS, IBD, coeliac and malabsorption causes, and always surfaces colorectal cancer when red flags fire.',
    guideline: 'NICE CKS · NG12 · NG20',
    patientPresenting: "My bowels have been loose for a couple of months now, doctor — several times a day, and I'm worn out.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'ibs_d', name: 'IBS with diarrhoea', summary: 'Pain eased by defecation, bloating, no red flags, normal tests', baseline: 11, category: 'common',
        keyExam: 'Normal exam.', nextIx: 'Positive Rome diagnosis after excluding red flags (normal FBC/CRP/coeliac/calprotectin). Diet, antispasmodic, loperamide.',
        patientPhrase: 'This pattern fits irritable bowel — a genuine but benign disorder of gut function, manageable with diet and medication.',
        ciksUrl: 'https://cks.nice.org.uk/topics/irritable-bowel-syndrome/', caseLink: '../cases/ibs.html' },
      { id: 'coeliac', name: 'Coeliac disease', summary: 'Bloating, fatigue, anaemia, positive tTG; FH', baseline: 6, category: 'common',
        keyExam: 'Weight loss, dermatitis herpetiformis, aphthous ulcers.', nextIx: 'Anti-tTG IgA + total IgA (on gluten); refer for biopsy; gluten-free diet.',
        patientPhrase: 'Gluten is triggering an immune reaction in the gut. A blood test screens for it and a gluten-free diet reverses it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/coeliac-disease/', caseLink: '../cases/coeliac.html' },
      { id: 'ibd', name: 'Inflammatory bowel disease', summary: 'Blood/mucus, urgency, nocturnal symptoms, raised calprotectin', baseline: 6, category: 'common',
        keyExam: 'Abdominal tenderness, perianal disease, systemic signs.', nextIx: 'Faecal calprotectin, FBC/CRP; refer gastroenterology for colonoscopy.',
        patientPhrase: 'Inflammation of the bowel can cause this. A stool marker and camera test confirm it, and treatment controls it well.',
        ciksUrl: 'https://cks.nice.org.uk/topics/crohns-disease/', caseLink: '../cases/crohns.html' },
      { id: 'bile_acid', name: 'Bile-acid malabsorption', summary: 'Watery urgent post-meal diarrhoea, post-cholecystectomy / ileal disease', baseline: 3, category: 'less-common',
        keyExam: 'Usually normal.', nextIx: 'SeHCAT scan or empirical bile-acid sequestrant (colestyramine) trial.',
        patientPhrase: 'Bile salts are irritating the bowel. A binding medication usually controls it quickly.',
        ciksUrl: 'https://cks.nice.org.uk/topics/diarrhoea-adults-assessment/' },
      { id: 'microscopic', name: 'Microscopic colitis', summary: 'Older patient, watery non-bloody diarrhoea, normal endoscopy appearance', baseline: 2, category: 'less-common',
        keyExam: 'Normal exam.', nextIx: 'Colonoscopy with biopsies (macroscopically normal); review drugs (NSAID, PPI, SSRI); budesonide.',
        patientPhrase: 'A subtle inflammation only visible under the microscope can cause watery diarrhoea — biopsies confirm it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/diarrhoea-adults-assessment/' },
      { id: 'hyperthyroid', name: 'Hyperthyroidism', summary: 'Diarrhoea + heat intolerance + weight loss + tremor', baseline: 2, category: 'less-common',
        keyExam: 'Tremor, tachycardia/AF, goitre, lid lag.', nextIx: 'TSH/FT4/FT3; treat.',
        patientPhrase: 'An overactive thyroid speeds the gut up. Calming the thyroid settles the bowels.',
        ciksUrl: 'https://cks.nice.org.uk/topics/hyperthyroidism/' },
      { id: 'infective', name: 'Chronic infection (e.g. Giardia)', summary: 'Travel / contacts, bloating, malabsorption', baseline: 2, category: 'less-common',
        keyExam: 'Often normal.', nextIx: 'Stool MC&S + ova/cysts/parasites (×3); treat (e.g. metronidazole for giardia).',
        patientPhrase: 'A persistent gut infection can cause this after travel. A stool sample identifies it and antibiotics clear it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/gastroenteritis/' },
      { id: 'pancreatic_insuff', name: 'Pancreatic exocrine insufficiency', summary: 'Steatorrhoea, weight loss, alcohol / chronic pancreatitis', baseline: 2, category: 'less-common',
        keyExam: 'Weight loss; epigastric/back pain history.', nextIx: 'Faecal elastase; imaging; pancreatic enzyme replacement.',
        patientPhrase: 'The pancreas is not making enough digestive enzymes, so fat is not absorbed. Enzyme capsules with meals fix it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/diarrhoea-adults-assessment/' },

      { id: 'crc', name: 'Colorectal cancer', summary: 'Change in habit ≥60, weight loss, rectal bleeding, mass, anaemia', baseline: 1, category: 'cant-miss',
        keyExam: 'Abdominal / rectal mass, cachexia, lymphadenopathy.', nextIx: '\u26A1 Lower GI 2WW (NICE NG12).',
        patientPhrase: 'These features mean I want an urgent specialist look at the bowel to exclude cancer — most come back clear.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Lower GI 2WW' },
    ],
    effects: {
      age: (v) => v >= 60 ? { crc: +8, microscopic: +5, ibs_d: -3 } : (v < 45 ? { ibs_d: +6, coeliac: +2, crc: -2 } : {}),
      fh_gi: { coeliac: +6, ibd: +4, crc: +4 },
      travel: { infective: +18 },
      gallbladder: { bile_acid: +18 },

      alt_pain: { ibs_d: +18 },
      nocturnal: { ibd: +12, ibs_d: -8 },
      blood_mucus: { ibd: +18, crc: +6 },
      steatorrhoea: { pancreatic_insuff: +18, coeliac: +6 },
      watery_postchole: { bile_acid: +18, microscopic: +4 },

      thyroid_sx: { hyperthyroid: +20 },
      coeliac_sx: { coeliac: +16 },
      ttg_pos: { coeliac: +28 },
      calprotectin_high: { ibd: +24, ibs_d: -10 },

      weight_loss: { crc: +16, coeliac: +6, ibd: +4, pancreatic_insuff: +4 },
      rectal_bleed: { crc: +12, ibd: +6 },
      mass_anaemia: { crc: +22 },
    },
    askAbout: {
      ibs_d: ['alt_pain', 'calprotectin_high'],
      coeliac: ['coeliac_sx', 'ttg_pos'],
      ibd: ['blood_mucus', 'nocturnal', 'calprotectin_high'],
      bile_acid: ['watery_postchole', 'gallbladder'],
      microscopic: ['age'],
      hyperthyroid: ['thyroid_sx'],
      infective: ['travel'],
      pancreatic_insuff: ['steatorrhoea'],
      crc: ['weight_loss', 'rectal_bleed', 'mass_anaemia', 'age'],
    },
    sources: [
      { label: 'NICE CKS — Diarrhoea (chronic)', url: 'https://cks.nice.org.uk/topics/diarrhoea-adults-assessment/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE NG20 — Coeliac disease', url: 'https://www.nice.org.uk/guidance/ng20' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'chronic-diarrhoea', label: 'Chronic diarrhoea', triage: 'chronic-diarrhoea-triage', dx: 'chronic-diarrhoea-dx' }
  );
})();
