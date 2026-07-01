/* ============================================
   Diagnostic Tool pack — Bruising (easy / unexplained)
   Shared-id triage + differential. NICE NG12 · CKS · BSH.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'child', kind: 'check', label: 'Child / safeguarding concern (pattern, story mismatch)' },
    { group: 'Demographics & context', id: 'anticoag_antiplatelet', kind: 'check', label: 'Anticoagulant / antiplatelet / aspirin' },
    { group: 'Demographics & context', id: 'steroid_elderly', kind: 'check', label: 'Long-term steroids / elderly thin skin / sun damage' },
    { group: 'Demographics & context', id: 'liver_alcohol', kind: 'check', label: 'Liver disease / alcohol excess' },

    { group: 'Bleeding pattern', id: 'mucosal_petechiae', kind: 'check', label: 'Petechiae / mucosal bleeding / epistaxis (platelet-type)' },
    { group: 'Bleeding pattern', id: 'haemarthrosis', kind: 'check', label: 'Deep bleeds / haemarthrosis / since childhood / FH (coagulation-type)' },
    { group: 'Bleeding pattern', id: 'menorrhagia_dental', kind: 'check', label: 'Menorrhagia / prolonged bleeding after dental/surgery (vWD)' },
    { group: 'Bleeding pattern', id: 'palpable_purpura', kind: 'check', label: 'Palpable purpura / rash on legs (vasculitis/HSP)' },

    { group: 'Bloods', id: 'low_plt', kind: 'check', label: 'Platelets low' },

    { group: 'Red flags', id: 'b_symptoms', kind: 'check', label: 'Weight loss / night sweats / lymphadenopathy / fatigue (? leukaemia)' },
    { group: 'Red flags', id: 'pancytopenia_signs', kind: 'check', label: 'Recurrent infections / profound anaemia' },
  ];

  if (window.RGPTriage) RGPTriage.register('bruising-triage', {
    title: 'Bruising — triage',
    subtitle: 'Tick features. Surfaces leukaemia, severe thrombocytopenia and safeguarding pathways.',
    guideline: 'NICE NG12 · CKS · BSH',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Send FBC + film, coagulation screen, LFTs; review drugs; bleeding history (mucosal vs deep); investigate by pattern.',
    rules: [
      {
        id: 'leukaemia_2ww', tier: 'cancer',
        label: 'Possible acute leukaemia — bruising + B-symptoms / pancytopenia features',
        action: 'Same-day FBC + film; if abnormal, immediate haematology (very urgent FBC = same-day per NG12).',
        patientPhrase: '"These features mean I need an urgent blood test today and a specialist opinion to rule out a blood-cell problem."',
        source: 'NICE NG12 §1.10', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.b_symptoms || i.pancytopenia_signs,
      },
      {
        id: 'severe_thrombocytopenia', tier: 'emergency',
        label: 'Bruising + low platelets / active bleeding',
        action: 'Urgent FBC; same-day haematology if platelets very low / mucosal bleeding.',
        source: 'BSH',
        when: i => i.low_plt && (i.mucosal_petechiae || i.pancytopenia_signs),
      },
      {
        id: 'safeguarding', tier: 'urgent',
        label: 'Child with concerning bruising — safeguarding',
        action: 'Follow safeguarding pathway; bloods to exclude bleeding disorder; do not delay protection.',
        source: 'NICE CG89',
        when: i => i.child,
      },
      {
        id: 'vasculitis', tier: 'urgent',
        label: 'Palpable purpura — vasculitis / HSP',
        action: 'Urine dip (renal involvement), BP, bloods; consider HSP / systemic vasculitis; refer if systemic.',
        source: 'CKS',
        when: i => i.palpable_purpura,
      },
      {
        id: 'assess', tier: 'routine',
        label: 'Bruising — assess pattern & drugs',
        action: 'FBC + film, coagulation, LFTs; review anticoagulant/antiplatelet; bleeding-disorder workup if mucosal/FH.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'BSH — Bleeding disorders', url: 'https://b-s-h.org.uk/guidelines/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('bruising-dx', {
    title: 'Bruising — differential',
    subtitle: 'The engine separates platelet-type from coagulation-type bleeding and weights drug, senile, liver and vasculitic causes, and always surfaces leukaemia and severe thrombocytopenia.',
    guideline: 'NICE NG12 · CKS · BSH',
    patientPresenting: "I keep getting bruises without remembering knocking myself, doctor.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'drug', name: 'Drug-induced (antiplatelet / anticoagulant)', summary: 'Aspirin / clopidogrel / DOAC / warfarin', baseline: 9, category: 'common',
        keyExam: 'Medication review.', nextIx: 'Review necessity/dose; coagulation if on warfarin; FBC.',
        patientPhrase: 'A blood-thinning medication is the likely cause. We review whether the dose is right.',
        ciksUrl: 'https://cks.nice.org.uk/topics/bruising/' },
      { id: 'senile', name: 'Senile / steroid purpura', summary: 'Elderly, thin sun-damaged skin, back of hands/forearms', baseline: 7, category: 'common',
        keyExam: 'Purpura on extensor forearms; thin skin.', nextIx: 'Clinical; reassure; review steroids; normal bloods.',
        patientPhrase: 'Fragile skin with age or steroids bruises easily. It is harmless once blood tests are normal.',
        ciksUrl: 'https://cks.nice.org.uk/topics/bruising/' },
      { id: 'liver', name: 'Liver disease / alcohol', summary: 'Coagulopathy + thrombocytopenia from liver/alcohol', baseline: 4, category: 'less-common',
        keyExam: 'Stigmata of chronic liver disease.', nextIx: 'LFTs, coagulation, FBC; address alcohol; treat liver disease.',
        patientPhrase: 'Liver strain affects clotting and platelets. Treating the cause and reducing alcohol helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/bruising/' },
      { id: 'itp', name: 'Immune thrombocytopenia (ITP)', summary: 'Isolated low platelets, mucosal/petechial bleeding', baseline: 4, category: 'less-common',
        keyExam: 'Petechiae, otherwise well.', nextIx: 'FBC + film (isolated thrombocytopenia); haematology referral.',
        patientPhrase: 'Your immune system may be lowering the platelets. A specialist confirms it and guides treatment.',
        ciksUrl: 'https://cks.nice.org.uk/topics/bruising/' },
      { id: 'inherited', name: 'Inherited bleeding disorder (vWD / haemophilia)', summary: 'Lifelong, FH, menorrhagia, post-procedure bleeding', baseline: 3, category: 'less-common',
        keyExam: 'Bleeding score; FH.', nextIx: 'Coagulation screen, von Willebrand studies, factor levels; haematology.',
        patientPhrase: 'A lifelong clotting condition may run in the family. Specialist blood tests confirm it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/bruising/' },
      { id: 'vasculitis', name: 'Vasculitis / HSP', summary: 'Palpable purpura on legs ± renal/joint/GI involvement', baseline: 2, category: 'less-common',
        keyExam: 'Palpable purpura; check urine/BP.', nextIx: 'Urine dip, bloods; HSP usually self-limiting; refer if systemic.',
        patientPhrase: 'Inflamed small blood vessels cause this rash. We check the kidneys and treat the cause.',
        ciksUrl: 'https://cks.nice.org.uk/topics/henoch-schonlein-purpura/' },

      { id: 'leukaemia', name: 'Acute leukaemia / marrow failure', summary: 'Bruising + B-symptoms + anaemia/infections / pancytopenia', baseline: 1, category: 'cant-miss',
        keyExam: 'Pallor, lymphadenopathy, hepatosplenomegaly, petechiae.', nextIx: '\u26A1 Same-day FBC + film; immediate haematology if abnormal (NICE NG12).',
        patientPhrase: 'A few features make me want an urgent blood test today to rule out a serious blood-cell condition.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Same-day FBC + haematology' },
    ],
    effects: {
      age: (v) => v >= 70 ? { senile: +12 } : (v < 16 ? { inherited: +2 } : {}),
      child: { inherited: +2 },
      anticoag_antiplatelet: { drug: +22 },
      steroid_elderly: { senile: +18 },
      liver_alcohol: { liver: +20 },

      mucosal_petechiae: { itp: +16, leukaemia: +6 },
      haemarthrosis: { inherited: +24 },
      menorrhagia_dental: { inherited: +16 },
      palpable_purpura: { vasculitis: +26 },

      low_plt: { itp: +14, leukaemia: +8, liver: +4 },

      b_symptoms: { leukaemia: +28 },
      pancytopenia_signs: { leukaemia: +22 },
    },
    askAbout: {
      drug: ['anticoag_antiplatelet'],
      senile: ['steroid_elderly', 'age'],
      liver: ['liver_alcohol'],
      itp: ['mucosal_petechiae', 'low_plt'],
      inherited: ['haemarthrosis', 'menorrhagia_dental'],
      vasculitis: ['palpable_purpura'],
      leukaemia: ['b_symptoms', 'pancytopenia_signs'],
    },
    sources: [
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
      { label: 'NICE CKS — Bruising', url: 'https://cks.nice.org.uk/topics/bruising/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'bruising', label: 'Bruising', triage: 'bruising-triage', dx: 'bruising-dx' }
  );
})();
