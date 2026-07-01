/* ============================================
   Diagnostic Tool pack — Cow's Milk Allergy
   Shared-id triage + differential. CKS · iMAP.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Age / feeding', id: 'age_months', kind: 'number', label: 'Age', unit: 'months', min: 0, max: 36, step: 1 },
    { group: 'Age / feeding', id: 'formula_weaning', kind: 'check', label: 'Started formula / cow\u2019s-milk protein (or via breast milk)' },

    { group: 'IgE-mediated (immediate)', id: 'immediate', kind: 'check', label: 'Within 2h: urticaria / angioedema / vomiting / wheeze' },
    { group: 'Non-IgE (delayed)', id: 'delayed_gi', kind: 'check', label: 'Hours–days: reflux/vomiting, colic, diarrhoea/constipation, blood/mucus in stool' },
    { group: 'Non-IgE (delayed)', id: 'eczema', kind: 'check', label: 'Atopic eczema, esp. treatment-resistant' },
    { group: 'Non-IgE (delayed)', id: 'faltering', kind: 'check', label: 'Faltering growth / food refusal' },

    { group: 'Other', id: 'lactose_pattern', kind: 'check', label: 'Watery diarrhoea/bloating after dairy, no allergy features (?lactose intolerance)' },

    { group: 'Red flags', id: 'anaphylaxis', kind: 'check', label: 'Anaphylaxis — airway/breathing/circulation compromise' },
  ];

  if (window.RGPTriage) RGPTriage.register('cows-milk-allergy-triage', {
    title: 'Cow\u2019s milk allergy — triage',
    subtitle: 'Tick features. Surfaces anaphylaxis and the IgE vs non-IgE pathway (iMAP).',
    guideline: 'CKS · iMAP',
    inputs: INPUTS,
    defaultMessage: 'No emergency rule fired. Non-IgE CMA → trial of strict cow\u2019s-milk-protein elimination (mother\u2019s diet if breastfed / extensively hydrolysed formula) for 2–4 weeks then planned reintroduction to confirm. IgE-suspected → allergy testing + dietitian.',
    rules: [
      {
        id: 'anaphylaxis', tier: 'emergency',
        label: 'Anaphylaxis',
        action: '999 — IM adrenaline; emergency treatment.',
        patientPhrase: '"This is a severe allergic reaction — it is an emergency and needs adrenaline now."',
        source: 'Resus Council',
        when: i => i.anaphylaxis,
      },
      {
        id: 'ige', tier: 'urgent',
        label: 'Suspected IgE-mediated CMA — immediate reaction',
        action: 'Specific IgE / skin-prick testing; allergy referral + dietitian; written emergency plan ± adrenaline auto-injector.',
        source: 'CKS', sourceUrl: 'https://cks.nice.org.uk/topics/cows-milk-allergy-in-children/',
        when: i => i.immediate,
      },
      {
        id: 'lactose', tier: 'routine',
        label: 'Likely lactose intolerance (not allergy)',
        action: 'Distinguish from CMA; lactose-free trial; reassure — different mechanism.',
        source: 'CKS',
        when: i => i.lactose_pattern && !i.delayed_gi && !i.immediate,
      },
      {
        id: 'non_ige', tier: 'routine',
        label: 'Suspected non-IgE CMA — elimination & reintroduction',
        action: 'Strict CMP elimination 2–4 weeks (maternal diet / eHF), then reintroduce to confirm; dietitian; iMAP ladder.',
        source: 'iMAP',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Cow\u2019s milk allergy', url: 'https://cks.nice.org.uk/topics/cows-milk-allergy-in-children/' },
      { label: 'iMAP — Milk allergy guideline', url: 'https://www.allergyuk.org/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('cows-milk-allergy-dx', {
    title: 'Cow\u2019s milk allergy — IgE vs non-IgE vs lactose',
    subtitle: 'The engine separates IgE-mediated (immediate) and non-IgE (delayed) CMA from lactose intolerance, and surfaces anaphylaxis.',
    guideline: 'CKS · iMAP',
    patientPresenting: "I think my baby reacts to milk, doctor.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'non_ige', name: 'Non-IgE-mediated CMA', summary: 'Delayed GI/skin symptoms, reflux, colic, blood/mucus stool, eczema', baseline: 11, category: 'common',
        keyExam: 'Eczema, GI symptoms; growth.', nextIx: 'Diagnosis by elimination (2–4 weeks) + planned reintroduction; eHF / maternal exclusion; dietitian.',
        patientPhrase: 'A delayed reaction to milk protein. We remove it for a few weeks then reintroduce to confirm — a dietitian guides this.',
        ciksUrl: 'https://cks.nice.org.uk/topics/cows-milk-allergy-in-children/' },
      { id: 'ige', name: 'IgE-mediated CMA', summary: 'Immediate (<2h) urticaria / angioedema / vomiting / wheeze', baseline: 5, category: 'common',
        keyExam: 'Immediate reaction history.', nextIx: 'Specific IgE / skin-prick; allergy referral; emergency plan.',
        patientPhrase: 'An immediate allergic reaction to milk. We test, involve an allergy specialist, and give an emergency plan.',
        ciksUrl: 'https://cks.nice.org.uk/topics/cows-milk-allergy-in-children/' },
      { id: 'lactose', name: 'Lactose intolerance', summary: 'Watery diarrhoea/bloating after dairy, no allergy features', baseline: 4, category: 'common',
        keyExam: 'GI symptoms without allergy features.', nextIx: 'Lactose-free trial; reassure (not an allergy).',
        patientPhrase: 'This is intolerance to milk sugar, not an allergy — a different and milder problem, managed with lactose-free options.',
        ciksUrl: 'https://cks.nice.org.uk/topics/lactose-intolerance/' },
      { id: 'other', name: 'Other (reflux / functional / normal)', summary: 'Symptoms not due to milk', baseline: 4, category: 'common',
        keyExam: 'Reassess pattern.', nextIx: 'Manage reflux/colic; avoid unnecessary exclusion diets.',
        patientPhrase: 'Symptoms may not be milk-related. We avoid unnecessary diets and manage the actual cause.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng1' },

      { id: 'anaphylaxis', name: 'Anaphylaxis', summary: 'Airway/breathing/circulation compromise', baseline: 1, category: 'cant-miss',
        keyExam: 'Stridor, wheeze, hypotension, swelling.', nextIx: '\u26A1 999 — IM adrenaline.',
        patientPhrase: 'A severe whole-body allergic reaction is an emergency needing adrenaline immediately.',
        ciksUrl: 'https://cks.nice.org.uk/topics/cows-milk-allergy-in-children/', redFlagAction: '\u26A1 999 + IM adrenaline' },
    ],
    effects: {
      formula_weaning: { non_ige: +4, ige: +2 },

      immediate: { ige: +26, non_ige: -6 },
      delayed_gi: { non_ige: +22 },
      eczema: { non_ige: +12 },
      faltering: { non_ige: +8 },

      lactose_pattern: { lactose: +22, non_ige: -4 },

      anaphylaxis: { anaphylaxis: +34, ige: +6 },
    },
    askAbout: {
      non_ige: ['delayed_gi', 'eczema'],
      ige: ['immediate'],
      lactose: ['lactose_pattern'],
      anaphylaxis: ['anaphylaxis'],
    },
    sources: [
      { label: 'NICE CKS — Cow\u2019s milk allergy', url: 'https://cks.nice.org.uk/topics/cows-milk-allergy-in-children/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'cows-milk-allergy', label: 'Cow\u2019s milk allergy', triage: 'cows-milk-allergy-triage', dx: 'cows-milk-allergy-dx' }
  );
})();
