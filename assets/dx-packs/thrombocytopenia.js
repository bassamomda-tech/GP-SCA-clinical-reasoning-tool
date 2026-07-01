/* ============================================
   Diagnostic Tool pack — Thrombocytopenia
   Shared-id triage + differential. CKS · BSH · NICE NG12.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'pregnant', kind: 'check', label: 'Pregnant' },
    { group: 'Demographics & context', id: 'drugs', kind: 'check', label: 'New drug / heparin / quinine / chemotherapy' },
    { group: 'Demographics & context', id: 'liver_alcohol', kind: 'check', label: 'Liver disease / alcohol / splenomegaly' },
    { group: 'Demographics & context', id: 'recent_viral', kind: 'check', label: 'Recent viral illness / vaccination' },

    { group: 'Platelet count', id: 'plt', kind: 'number', label: 'Platelets', unit: '×10⁹/L', step: 1 },
    { group: 'Counts', id: 'isolated', kind: 'check', label: 'Isolated (Hb & WCC normal)' },
    { group: 'Counts', id: 'other_lines', kind: 'check', label: 'Also low Hb / WCC (? marrow)' },

    { group: 'Features', id: 'mucosal_bleeding', kind: 'check', label: 'Petechiae / mucosal bleeding' },
    { group: 'Features', id: 'mahat', kind: 'check', label: 'Fever + neuro + renal + haemolysis (? TTP)' },
    { group: 'Features', id: 'sepsis_dic', kind: 'check', label: 'Sepsis / bleeding + clotting (? DIC)' },
    { group: 'Features', id: 'no_bleeding_well', kind: 'check', label: 'Well, no bleeding (? spurious / chronic)' },

    { group: 'Red flags', id: 'b_symptoms', kind: 'check', label: 'Weight loss / lymphadenopathy / blasts on film' },
  ];

  if (window.RGPTriage) RGPTriage.register('thrombocytopenia-triage', {
    title: 'Thrombocytopenia — triage',
    subtitle: 'Enter platelets / tick features. Surfaces TTP/DIC emergencies, severe bleeding and marrow pathways.',
    guideline: 'BSH · CKS · NG12',
    inputs: INPUTS,
    defaultMessage: 'No emergency rule fired. Repeat FBC + blood film (exclude EDTA clumping), review drugs, check LFTs/coagulation/B12/folate; refer haematology if unexplained or other lines affected.',
    rules: [
      {
        id: 'ttp_dic', tier: 'emergency',
        label: 'Possible TTP / DIC — haemolysis + neuro/renal, or sepsis with bleeding+clotting',
        action: 'Call 999 / same-day haematology — medical emergency.',
        patientPhrase: '"This combination is a blood emergency — you need hospital treatment now."',
        source: 'BSH',
        when: i => i.mahat || i.sepsis_dic,
      },
      {
        id: 'severe', tier: 'emergency',
        label: 'Severe thrombocytopenia (<20) or active bleeding',
        action: 'Same-day haematology — risk of spontaneous bleeding.',
        source: 'BSH',
        when: i => (i.plt != null && i.plt < 20) || (i.mucosal_bleeding && i.plt != null && i.plt < 50),
      },
      {
        id: 'marrow_2ww', tier: 'cancer',
        label: 'Thrombocytopenia + other cytopenias / B-symptoms / blasts',
        action: 'Urgent FBC + film; haematology (NICE NG12).',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.other_lines || i.b_symptoms,
      },
      {
        id: 'investigate', tier: 'urgent',
        label: 'Unexplained thrombocytopenia',
        action: 'Repeat with film; drug review; LFTs/coagulation; haematology referral.',
        source: 'CKS',
        when: i => i.plt != null && i.plt < 100,
      },
      {
        id: 'mild', tier: 'routine',
        label: 'Mild / chronic (100–150), well',
        action: 'Repeat film (exclude clumping); monitor; investigate if progressive.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'BSH — Thrombocytopenia', url: 'https://b-s-h.org.uk/guidelines/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('thrombocytopenia-dx', {
    title: 'Thrombocytopenia — differential',
    subtitle: 'The engine weights spurious, ITP, drug, liver/hypersplenism and marrow causes, and always surfaces TTP/DIC and marrow malignancy.',
    guideline: 'BSH · CKS',
    patientPresenting: "My blood test showed a low platelet count, doctor.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'spurious', name: 'Spurious (EDTA clumping)', summary: 'Well, no bleeding, isolated low platelets', baseline: 7, category: 'common',
        keyExam: 'No bleeding.', nextIx: 'Repeat in citrate tube + film to exclude clumping before further workup.',
        patientPhrase: 'Sometimes the platelets clump in the test tube and read falsely low. We repeat the test to check.',
        ciksUrl: 'https://cks.nice.org.uk/topics/bruising/' },
      { id: 'itp', name: 'Immune thrombocytopenia (ITP)', summary: 'Isolated, often post-viral, mucosal bleeding', baseline: 7, category: 'common',
        keyExam: 'Petechiae; otherwise well.', nextIx: 'FBC + film (isolated); haematology; treat if bleeding / very low.',
        patientPhrase: 'The immune system is removing platelets too fast. It is treatable; a specialist guides this.',
        ciksUrl: 'https://cks.nice.org.uk/topics/bruising/' },
      { id: 'drug', name: 'Drug-induced', summary: 'New drug, heparin (HIT), quinine, chemotherapy', baseline: 5, category: 'common',
        keyExam: 'Medication timeline.', nextIx: 'Stop culprit; HIT score if heparin; recheck.',
        patientPhrase: 'A medication is lowering the platelets. Stopping it usually recovers the count.',
        ciksUrl: 'https://cks.nice.org.uk/topics/bruising/' },
      { id: 'liver', name: 'Liver disease / hypersplenism', summary: 'Cirrhosis/alcohol, splenomegaly', baseline: 4, category: 'less-common',
        keyExam: 'Chronic liver stigmata, splenomegaly.', nextIx: 'LFTs, coagulation, USS; treat cause.',
        patientPhrase: 'An enlarged spleen or liver disease pools and lowers platelets. We treat the underlying cause.',
        ciksUrl: 'https://cks.nice.org.uk/topics/bruising/' },
      { id: 'pregnancy', name: 'Gestational thrombocytopenia', summary: 'Pregnant, mild, third trimester', baseline: 3, category: 'less-common',
        keyExam: 'Pregnancy; exclude pre-eclampsia/HELLP.', nextIx: 'Monitor; obstetric input; exclude HELLP if hypertensive.',
        patientPhrase: 'Mild low platelets are common late in pregnancy and usually harmless — we monitor and exclude other causes.',
        ciksUrl: 'https://cks.nice.org.uk/topics/bruising/' },

      { id: 'ttp_dic', name: 'TTP / DIC', summary: 'Haemolysis + neuro/renal (TTP), or sepsis + bleeding/clotting (DIC)', baseline: 1, category: 'cant-miss',
        keyExam: 'Fever, confusion, bleeding, septic.', nextIx: '\u26A1 999 / same-day haematology — emergency.',
        patientPhrase: 'This pattern is a blood emergency needing immediate hospital treatment.',
        ciksUrl: 'https://b-s-h.org.uk/guidelines/', redFlagAction: '\u26A1 Emergency haematology' },
      { id: 'marrow', name: 'Marrow failure / malignancy', summary: 'Other cytopenias, B-symptoms, blasts', baseline: 1, category: 'cant-miss',
        keyExam: 'Pallor, infections, lymphadenopathy.', nextIx: '\u26A1 Urgent FBC + film; haematology (leukaemia/MDS).',
        patientPhrase: 'Low platelets with other low counts need urgent specialist tests to exclude a marrow problem.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Urgent haematology' },
    ],
    effects: {
      pregnant: { pregnancy: +20 },
      drugs: { drug: +22 },
      liver_alcohol: { liver: +20 },
      recent_viral: { itp: +12 },

      plt: (v) => v == null ? {} : (v < 20 ? { itp: +4, ttp_dic: +4, marrow: +4 } : (v >= 100 ? { spurious: +4, pregnancy: +4 } : {})),
      isolated: { itp: +10, spurious: +6, marrow: -6 },
      other_lines: { marrow: +20, itp: -8 },

      mucosal_bleeding: { itp: +10 },
      mahat: { ttp_dic: +30 },
      sepsis_dic: { ttp_dic: +26 },
      no_bleeding_well: { spurious: +14 },

      b_symptoms: { marrow: +24 },
    },
    askAbout: {
      spurious: ['no_bleeding_well', 'isolated'],
      itp: ['mucosal_bleeding', 'recent_viral', 'isolated'],
      drug: ['drugs'],
      liver: ['liver_alcohol'],
      pregnancy: ['pregnant'],
      ttp_dic: ['mahat', 'sepsis_dic'],
      marrow: ['other_lines', 'b_symptoms'],
    },
    sources: [
      { label: 'BSH — Thrombocytopenia', url: 'https://b-s-h.org.uk/guidelines/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'thrombocytopenia', label: 'Thrombocytopenia', triage: 'thrombocytopenia-triage', dx: 'thrombocytopenia-dx' }
  );
})();
