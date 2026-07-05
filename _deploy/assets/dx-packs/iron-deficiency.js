/* ============================================
   Diagnostic Tool pack — Iron Deficiency
   Shared-id triage + differential (finding the cause). NICE NG12 · BSG · CKS.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'female_menstruating', kind: 'check', label: 'Menstruating / heavy periods' },
    { group: 'Demographics & context', id: 'pregnant', kind: 'check', label: 'Pregnant' },
    { group: 'Demographics & context', id: 'diet', kind: 'check', label: 'Vegan / poor dietary iron' },

    { group: 'Bloods', id: 'ferritin', kind: 'number', label: 'Ferritin', unit: 'µg/L', step: 1, note: '<30 = deficient' },
    { group: 'Bloods', id: 'hb', kind: 'number', label: 'Haemoglobin', unit: 'g/L', step: 1 },
    { group: 'Bloods', id: 'ttg_pos', kind: 'check', label: 'Anti-tTG positive (coeliac)' },

    { group: 'GI clues', id: 'gi_symptoms', kind: 'check', label: 'Dyspepsia / reflux / NSAID / aspirin use' },
    { group: 'GI clues', id: 'pr_bleed_bowel', kind: 'check', label: 'Rectal bleeding / change in bowel habit' },
    { group: 'GI clues', id: 'malabsorption', kind: 'check', label: 'Bloating / diarrhoea / weight loss (malabsorption)' },

    { group: 'Red flags', id: 'male_or_postmeno', kind: 'check', label: 'Adult male or post-menopausal female with IDA' },
    { group: 'Red flags', id: 'weight_loss', kind: 'check', label: 'Weight loss / dysphagia' },
  ];

  if (window.RGPTriage) RGPTriage.register('iron-deficiency-triage', {
    title: 'Iron deficiency — triage',
    subtitle: 'Confirm deficiency, then find the cause. Surfaces GI 2WW and coeliac pathways.',
    guideline: 'NICE NG12 · BSG · CKS',
    inputs: INPUTS,
    defaultMessage: 'No 2WW rule fired. Confirm iron deficiency (ferritin <30, or low transferrin saturation if inflammation), screen coeliac (tTG) in all, replace iron, recheck FBC at 2–4 weeks; investigate cause by age/sex.',
    rules: [
      {
        id: 'gi_2ww', tier: 'cancer',
        label: 'IDA in adult male / post-menopausal female, or age ≥60 — GI 2WW',
        action: 'Lower + upper GI endoscopy (NICE NG12); FIT does not exclude. Coeliac screen.',
        patientPhrase: '"Iron-deficient anaemia in your situation needs a camera test of the gut to find where iron is being lost."',
        source: 'NICE NG12 / BSG', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.male_or_postmeno || (i.age != null && i.age >= 60 && i.hb != null && i.hb < 120) || i.weight_loss || i.pr_bleed_bowel,
      },
      {
        id: 'coeliac', tier: 'urgent',
        label: 'Positive coeliac serology',
        action: 'Refer gastroenterology for duodenal biopsy (keep eating gluten); gluten-free diet once confirmed.',
        source: 'NICE NG20',
        when: i => i.ttg_pos || i.malabsorption,
      },
      {
        id: 'menstrual', tier: 'routine',
        label: 'Pre-menopausal with menstrual / dietary cause',
        action: 'Treat menorrhagia; dietary advice; oral iron; recheck; investigate GI only if red flags or non-response.',
        source: 'BSG',
        when: i => i.female_menstruating || i.pregnant || i.diet,
      },
      {
        id: 'replace', tier: 'routine',
        label: 'Iron deficiency — replace & monitor',
        action: 'Oral ferrous salt OD/alternate-day; coeliac screen; recheck Hb in 2–4 weeks; consider IV iron if intolerant/malabsorbing.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'BSG — Iron deficiency anaemia', url: 'https://www.bsg.org.uk/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('iron-deficiency-dx', {
    title: 'Iron deficiency — cause',
    subtitle: 'Iron deficiency always has a cause. The engine weights menstrual/dietary, GI loss, malabsorption and pregnancy, and always surfaces GI malignancy when red flags fire.',
    guideline: 'NICE NG12 · BSG · CKS',
    patientPresenting: "I've been told I'm low in iron, doctor — why would that be?",
    inputs: INPUTS,
    diagnoses: [
      { id: 'menstrual', name: 'Menstrual blood loss', summary: 'Pre-menopausal woman with heavy periods', baseline: 10, category: 'common',
        keyExam: 'Menstrual history; signs of anaemia.', nextIx: 'Treat menorrhagia (see HMB); oral iron; recheck.',
        patientPhrase: 'Heavy periods are the commonest cause in younger women. Treating them plus iron replacement fixes it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/anaemia-iron-deficiency/' },
      { id: 'dietary', name: 'Dietary / increased demand', summary: 'Vegan/poor intake, pregnancy, growth', baseline: 6, category: 'common',
        keyExam: 'Dietary history.', nextIx: 'Dietary advice; iron; antenatal iron in pregnancy.',
        patientPhrase: 'Your intake or demand for iron outstrips supply. Diet and supplements correct it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/anaemia-iron-deficiency/' },
      { id: 'gi_loss', name: 'GI blood loss (benign)', summary: 'NSAID/aspirin, ulcer, oesophagitis, angiodysplasia, haemorrhoids', baseline: 6, category: 'common',
        keyExam: 'Dyspepsia, PR exam.', nextIx: 'Review NSAID; endoscopy per 2WW rules; treat source.',
        patientPhrase: 'Slow blood loss from the gut depletes iron. We find and treat the source.',
        ciksUrl: 'https://cks.nice.org.uk/topics/anaemia-iron-deficiency/' },
      { id: 'coeliac', name: 'Coeliac / malabsorption', summary: 'Bloating, diarrhoea, positive tTG', baseline: 4, category: 'common',
        keyExam: 'Weight loss, dermatitis herpetiformis.', nextIx: 'Anti-tTG; refer for biopsy; gluten-free diet.',
        patientPhrase: 'Your gut may not be absorbing iron because of coeliac disease. A blood test screens for it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/coeliac-disease/', caseLink: '../cases/coeliac.html' },

      { id: 'gi_malignancy', name: 'GI malignancy', summary: 'Male / post-menopausal IDA, age ≥60, weight loss, PR bleeding', baseline: 1, category: 'cant-miss',
        keyExam: 'Abdominal/rectal mass, cachexia.', nextIx: '\u26A1 Upper + lower GI 2WW endoscopy (NICE NG12).',
        patientPhrase: 'Iron deficiency in your situation can be the first sign of a bowel or stomach cancer, so I want to look inside urgently.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 GI 2WW endoscopy' },
    ],
    effects: {
      age: (v) => v >= 60 ? { gi_malignancy: +8, gi_loss: +4, menstrual: -6 } : (v < 50 ? { menstrual: +4 } : {}),
      female_menstruating: { menstrual: +20 },
      pregnant: { dietary: +12 },
      diet: { dietary: +18 },

      ferritin: (v) => v != null && v < 15 ? { menstrual: +2, gi_loss: +2 } : {},
      hb: (v) => v != null && v < 100 ? { gi_malignancy: +4 } : {},
      ttg_pos: { coeliac: +26 },

      gi_symptoms: { gi_loss: +16 },
      pr_bleed_bowel: { gi_loss: +8, gi_malignancy: +16 },
      malabsorption: { coeliac: +16 },

      male_or_postmeno: { gi_malignancy: +18, gi_loss: +6, menstrual: -10 },
      weight_loss: { gi_malignancy: +18 },
    },
    askAbout: {
      menstrual: ['female_menstruating'],
      dietary: ['diet', 'pregnant'],
      gi_loss: ['gi_symptoms', 'pr_bleed_bowel'],
      coeliac: ['ttg_pos', 'malabsorption'],
      gi_malignancy: ['male_or_postmeno', 'weight_loss', 'age'],
    },
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE CKS — Anaemia (iron deficiency)', url: 'https://cks.nice.org.uk/topics/anaemia-iron-deficiency/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'iron-deficiency', label: 'Iron deficiency', triage: 'iron-deficiency-triage', dx: 'iron-deficiency-dx' }
  );
})();
