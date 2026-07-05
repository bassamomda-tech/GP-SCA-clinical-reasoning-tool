/* ============================================
   Diagnostic Tool pack — Dyspepsia
   Shared-id triage + differential. NICE NG12 (upper GI cancer) ·
   NICE CG184 dyspepsia/GORD · CKS Dyspepsia · test-and-treat H. pylori.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'nsaid', kind: 'check', label: 'NSAID / aspirin / steroid / bisphosphonate use' },
    { group: 'Demographics & context', id: 'hpylori_pos', kind: 'check', label: 'H. pylori positive (stool antigen / breath test)' },
    { group: 'Demographics & context', id: 'smoker_alcohol', kind: 'check', label: 'Smoker / high alcohol' },

    { group: 'Symptom pattern', id: 'epigastric', kind: 'check', label: 'Epigastric pain / burning' },
    { group: 'Symptom pattern', id: 'reflux', kind: 'check', label: 'Heartburn / acid regurgitation' },
    { group: 'Symptom pattern', id: 'postprandial', kind: 'check', label: 'Early satiety / fullness / bloating after meals' },
    { group: 'Symptom pattern', id: 'nocturnal_acid', kind: 'check', label: 'Night-time waking with acid / cough' },
    { group: 'Symptom pattern', id: 'relation_meals', kind: 'check', label: 'Pain relieved or worsened by eating (ulcer pattern)' },
    { group: 'Symptom pattern', id: 'rua_pain', kind: 'check', label: 'Right-upper-quadrant / post-fatty-meal pain' },
    { group: 'Symptom pattern', id: 'exertional', kind: 'check', label: 'Pain on exertion / radiating to jaw/arm (cardiac mimic)' },

    { group: 'ALARM red flags', id: 'dysphagia', kind: 'check', label: 'Dysphagia (difficulty swallowing)' },
    { group: 'ALARM red flags', id: 'weight_loss', kind: 'check', label: 'Unintentional weight loss' },
    { group: 'ALARM red flags', id: 'gi_bleed', kind: 'check', label: 'Haematemesis / melaena' },
    { group: 'ALARM red flags', id: 'vomiting', kind: 'check', label: 'Persistent / recurrent vomiting' },
    { group: 'ALARM red flags', id: 'mass_anaemia', kind: 'check', label: 'Epigastric mass / iron-deficiency anaemia' },
  ];

  if (window.RGPTriage) RGPTriage.register('dyspepsia-triage', {
    title: 'Dyspepsia — red-flag triage',
    subtitle: 'Tick ALARM features. Surfaces upper-GI 2WW and bleeding pathways per NICE NG12 / CG184.',
    guideline: 'NICE NG12 · NICE CG184',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired — manage as uninvestigated dyspepsia: review meds (stop NSAID), lifestyle, full-dose PPI 4 weeks OR test-and-treat H. pylori. Work the differential below.',
    rules: [
      {
        id: 'gi_bleed', tier: 'emergency',
        label: 'Acute upper-GI bleed — haematemesis / melaena',
        action: 'Same-day admission (Glasgow-Blatchford); resus; urgent OGD.',
        patientPhrase: '"Vomiting blood / black stools means bleeding in the gut — you need to go to hospital now."',
        source: 'NICE NG12 / CG141', sourceUrl: 'https://www.nice.org.uk/guidance/cg141',
        when: i => i.gi_bleed,
      },
      {
        id: 'dysphagia_2ww', tier: 'cancer',
        label: 'Dysphagia at any age — upper GI 2WW',
        action: 'Upper GI 2WW (OGD ≤2 weeks).',
        patientPhrase: '"Difficulty swallowing always needs an urgent camera test of the food pipe."',
        source: 'NICE NG12 §1.2', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.dysphagia,
      },
      {
        id: 'mass_2ww', tier: 'cancer',
        label: 'Upper abdominal mass — suspected gastric / pancreatic cancer',
        action: 'Site-specific 2WW + imaging.',
        source: 'NICE NG12',
        when: i => i.mass_anaemia,
      },
      {
        id: 'age55_2ww', tier: 'cancer',
        label: 'Age ≥55 + weight loss + upper abdo pain / reflux / dyspepsia — upper GI 2WW',
        action: 'Upper GI 2WW (OGD).',
        source: 'NICE NG12 §1.2',
        when: i => i.age != null && i.age >= 55 && i.weight_loss && (i.epigastric || i.reflux || i.postprandial),
      },
      {
        id: 'cardiac', tier: 'urgent',
        label: 'Possible cardiac pain masquerading as dyspepsia (exertional / radiating)',
        action: 'Do not anchor on indigestion — ECG ± troponin; treat as ?ACS if acute.',
        patientPhrase: '"Pain like this on exertion can come from the heart, so I want a heart trace before assuming it is the stomach."',
        source: 'NICE CG95',
        when: i => i.exertional,
      },
      {
        id: 'persistent_vomit', tier: 'urgent',
        label: 'Persistent vomiting — assess for obstruction / dehydration',
        action: 'Urgent review; bloods, consider imaging/OGD.',
        source: 'NICE CG184',
        when: i => i.vomiting,
      },
      {
        id: 'routine', tier: 'routine',
        label: 'Uninvestigated dyspepsia, no ALARM features',
        action: 'Lifestyle + stop NSAID; 4-week full-dose PPI OR test-and-treat H. pylori; review.',
        source: 'NICE CG184',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE CG184 — Dyspepsia & GORD', url: 'https://www.nice.org.uk/guidance/cg184' },
      { label: 'NICE CKS — Dyspepsia', url: 'https://cks.nice.org.uk/topics/dyspepsia-unidentified-cause/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('dyspepsia-dx', {
    title: 'Dyspepsia — differential diagnosis',
    subtitle: 'The engine ranks the common upper-GI causes from the symptom pattern and drivers, and always surfaces upper-GI malignancy and a cardiac mimic when their triggers fire.',
    guideline: 'NICE CG184 · CKS Dyspepsia',
    patientPresenting: "I keep getting this burning in my upper tummy, doctor, especially after meals — and a lot of indigestion.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'functional', name: 'Functional dyspepsia', summary: 'Postprandial fullness / epigastric pain, normal OGD', baseline: 11, category: 'common',
        keyExam: 'Normal exam; epigastric tenderness at most.', nextIx: 'Clinical; test-and-treat H. pylori; PPI trial; reassure once red flags excluded.',
        patientPhrase: 'Your stomach is over-sensitive and not emptying comfortably, but there is no damage — symptoms are very treatable.',
        ciksUrl: 'https://cks.nice.org.uk/topics/dyspepsia-unidentified-cause/' },
      { id: 'gord', name: 'GORD', summary: 'Heartburn, acid regurgitation, worse lying / after meals', baseline: 10, category: 'common',
        keyExam: 'Usually normal; assess for obesity, hiatus hernia risk.', nextIx: 'Clinical; lifestyle + PPI trial; OGD if alarm features or refractory.',
        patientPhrase: 'Acid is refluxing up into the gullet. Lifestyle changes and acid-suppressing medication usually control it well.',
        ciksUrl: 'https://cks.nice.org.uk/topics/gastro-oesophageal-reflux-disease/' },
      { id: 'pud', name: 'Peptic ulcer disease', summary: 'Epigastric pain related to meals, H. pylori or NSAID', baseline: 7, category: 'common',
        keyExam: 'Epigastric tenderness; watch for bleeding signs.', nextIx: 'Test for H. pylori; stop NSAID; PPI. OGD if alarm features; eradication if positive.',
        patientPhrase: 'There is an ulcer in the stomach or duodenum, usually from a bug or anti-inflammatory tablets — both very treatable.',
        ciksUrl: 'https://cks.nice.org.uk/topics/dyspepsia-proven-peptic-ulcer/' },
      { id: 'hpylori', name: 'H. pylori gastritis', summary: 'Dyspepsia with positive H. pylori test', baseline: 5, category: 'common',
        keyExam: 'Often normal.', nextIx: 'Stool antigen / urea breath test (off PPI 2 weeks, antibiotics 4 weeks); triple-therapy eradication; retest if needed.',
        patientPhrase: 'A common stomach bacterium is inflaming the lining. A one-week course of treatment clears it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/dyspepsia-unidentified-cause/' },
      { id: 'drug', name: 'Drug-induced dyspepsia', summary: 'NSAID / aspirin / steroid / bisphosphonate / SSRI', baseline: 5, category: 'common',
        keyExam: 'Temporal link to medication.', nextIx: 'Medication review; stop/replace offending drug; gastroprotection if NSAID essential.',
        patientPhrase: 'A medication is irritating your stomach. Stopping it or adding a protector usually settles things.',
        ciksUrl: 'https://cks.nice.org.uk/topics/dyspepsia-unidentified-cause/' },
      { id: 'biliary', name: 'Biliary colic / gallstones', summary: 'RUQ / post-fatty-meal pain, may radiate to back/shoulder', baseline: 4, category: 'less-common',
        keyExam: 'RUQ tenderness; Murphy\u2019s sign if cholecystitis.', nextIx: 'LFTs, USS abdomen; refer if symptomatic gallstones; safety-net for cholecystitis/cholangitis.',
        patientPhrase: 'Gallstones can cause pain after fatty meals. An ultrasound confirms it and surgery is curative if it recurs.',
        ciksUrl: 'https://cks.nice.org.uk/topics/gallstones/' },

      { id: 'cardiac', name: 'Cardiac pain (ACS mimic)', summary: 'Exertional / radiating epigastric pain — do not anchor on indigestion', baseline: 1, category: 'cant-miss',
        keyExam: 'May be normal; assess CV risk, recreate on exertion.', nextIx: '\u26A1 ECG ± troponin; treat as ?ACS if acute. Especially diabetic / elderly / female atypical presentations.',
        patientPhrase: 'Indigestion-type pain can sometimes come from the heart, so I am checking that first to be safe.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg95', redFlagAction: '\u26A1 ECG / troponin' },
      { id: 'malignancy', name: 'Gastric / oesophageal cancer', summary: 'Dysphagia, weight loss, anaemia, mass, age ≥55', baseline: 1, category: 'cant-miss',
        keyExam: 'Epigastric mass, lymphadenopathy (Virchow\u2019s node), cachexia.', nextIx: '\u26A1 Upper GI 2WW OGD per NICE NG12. Dysphagia at any age, or ≥55 with weight loss + dyspepsia.',
        patientPhrase: 'A few features mean I want an urgent camera test of the stomach and gullet to rule out something serious — most are clear.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Upper GI 2WW' },
    ],
    effects: {
      age: (v) => v >= 55 ? { malignancy: +6, gord: +1 } : (v < 40 ? { functional: +3, malignancy: -2 } : {}),
      nsaid: { drug: +18, pud: +12 },
      hpylori_pos: { hpylori: +24, pud: +14, functional: -4 },
      smoker_alcohol: { gord: +5, pud: +4 },

      epigastric: { pud: +10, functional: +8, gord: +3 },
      reflux: { gord: +22, functional: -3 },
      postprandial: { functional: +16, gord: +3 },
      nocturnal_acid: { gord: +12 },
      relation_meals: { pud: +18 },
      rua_pain: { biliary: +22 },
      exertional: { cardiac: +20 },

      dysphagia: { malignancy: +24 },
      weight_loss: { malignancy: +20 },
      gi_bleed: { pud: +10, malignancy: +10 },
      vomiting: { malignancy: +6, pud: +4 },
      mass_anaemia: { malignancy: +22 },
    },
    askAbout: {
      functional: ['postprandial', 'epigastric'],
      gord: ['reflux', 'nocturnal_acid'],
      pud: ['relation_meals', 'nsaid', 'hpylori_pos'],
      hpylori: ['hpylori_pos'],
      drug: ['nsaid'],
      biliary: ['rua_pain'],
      cardiac: ['exertional'],
      malignancy: ['dysphagia', 'weight_loss', 'mass_anaemia'],
    },
    sources: [
      { label: 'NICE CG184 — Dyspepsia & GORD', url: 'https://www.nice.org.uk/guidance/cg184' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'dyspepsia', label: 'Dyspepsia', triage: 'dyspepsia-triage', dx: 'dyspepsia-dx' }
  );
})();
