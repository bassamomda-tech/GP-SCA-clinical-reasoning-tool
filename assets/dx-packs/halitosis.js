/* ============================================
   Diagnostic Tool pack — Halitosis
   Shared-id triage + differential. CKS · NG12.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Pattern', id: 'oral_hygiene', kind: 'check', label: 'Poor oral hygiene / gum disease / tongue coating' },
    { group: 'Pattern', id: 'dental_pain', kind: 'check', label: 'Dental pain / decay / abscess' },
    { group: 'Pattern', id: 'sinus_postnasal', kind: 'check', label: 'Nasal/sinus symptoms / post-nasal drip / tonsil debris' },
    { group: 'Pattern', id: 'reflux', kind: 'check', label: 'Reflux / dyspepsia' },
    { group: 'Pattern', id: 'dry_mouth_drugs', kind: 'check', label: 'Dry mouth / dehydration / drugs / fasting' },
    { group: 'Systemic', id: 'systemic_metabolic', kind: 'check', label: 'Diabetes (ketotic) / hepatic / renal odour' },
    { group: 'Psych', id: 'no_objective', kind: 'check', label: 'No odour detectable / persistent belief despite reassurance' },

    { group: 'Red flags', id: 'unilateral_nasal', kind: 'check', label: 'Persistent unilateral nasal discharge / bleeding / obstruction (tumour)' },
    { group: 'Red flags', id: 'oral_ulcer', kind: 'check', label: 'Non-healing oral ulcer / mass / neck node >3 weeks' },
  ];

  if (window.RGPTriage) RGPTriage.register('halitosis-triage', {
    title: 'Halitosis — triage',
    subtitle: 'Tick features. Surfaces oral/ENT cancer red flags, then weights the common oral/ENT/systemic causes.',
    guideline: 'CKS · NG12',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Most halitosis is oral — optimise oral hygiene + dental review; treat ENT/reflux causes; reassure pseudohalitosis.',
    rules: [
      {
        id: 'cancer_2ww', tier: 'cancer',
        label: 'Non-healing oral lesion / neck node, or persistent unilateral nasal symptoms',
        action: 'Head & neck 2WW (NICE NG12) / urgent ENT.',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.oral_ulcer || i.unilateral_nasal,
      },
      {
        id: 'dental', tier: 'urgent',
        label: 'Dental infection / abscess',
        action: 'Urgent dental review; treat infection.',
        source: 'CKS',
        when: i => i.dental_pain,
      },
      {
        id: 'systemic', tier: 'urgent',
        label: 'Systemic cause (diabetic ketosis / hepatic / renal)',
        action: 'Glucose/ketones, U&E, LFT as indicated; treat cause.',
        source: 'CKS',
        when: i => i.systemic_metabolic,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'Oral / ENT / reflux halitosis — manage',
        action: 'Oral hygiene + tongue cleaning + dental review; treat sinusitis/tonsilloliths; PPI trial if reflux; reassure pseudohalitosis.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Halitosis', url: 'https://cks.nice.org.uk/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('halitosis-dx', {
    title: 'Halitosis — differential',
    subtitle: 'The engine weights oral, ENT, reflux, xerostomia and systemic causes (and pseudohalitosis), and surfaces oral / sinonasal cancer.',
    guideline: 'CKS · NG12',
    patientPresenting: "I'm worried about persistent bad breath, doctor — it's affecting my confidence.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'oral', name: 'Oral cause (periodontal / tongue coating)', summary: '~85% — gum disease, plaque, tongue coating', baseline: 12, category: 'common',
        keyExam: 'Gingivitis, coated tongue, caries.', nextIx: 'Oral hygiene + tongue cleaning; dental review.',
        patientPhrase: 'Most bad breath comes from the mouth — gums, plaque or tongue coating. Good oral care and a dental check usually fix it.',
        ciksUrl: 'https://cks.nice.org.uk/' },
      { id: 'ent', name: 'ENT cause (tonsilloliths / sinusitis)', summary: 'Tonsil debris, post-nasal drip, chronic sinusitis', baseline: 5, category: 'common',
        keyExam: 'Tonsillar debris; nasal/sinus signs.', nextIx: 'Treat sinusitis; tonsillolith advice; ENT if persistent.',
        patientPhrase: 'Sometimes the source is the tonsils or sinuses. Treating these clears the smell.',
        ciksUrl: 'https://cks.nice.org.uk/topics/sinusitis/' },
      { id: 'reflux', name: 'GORD-related', summary: 'Reflux / dyspepsia', baseline: 3, category: 'common',
        keyExam: 'Reflux history.', nextIx: 'Lifestyle + PPI trial.',
        patientPhrase: 'Acid reflux can cause an unpleasant taste and breath. Treating the reflux helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/dyspepsia-unidentified-cause/' },
      { id: 'xerostomia', name: 'Xerostomia (dry mouth)', summary: 'Dehydration, drugs, fasting, mouth-breathing', baseline: 3, category: 'common',
        keyExam: 'Dry mucosa.', nextIx: 'Hydration; review drugs; saliva substitutes.',
        patientPhrase: 'A dry mouth concentrates odours. Hydration and reviewing medication help.',
        ciksUrl: 'https://cks.nice.org.uk/' },
      { id: 'systemic', name: 'Systemic (diabetic ketosis / hepatic / renal)', summary: 'Characteristic odour + systemic illness', baseline: 2, category: 'less-common',
        keyExam: 'Signs of underlying disease.', nextIx: 'Glucose/ketones, U&E, LFT; treat cause.',
        patientPhrase: 'Occasionally breath odour reflects a medical condition. Blood tests check for these.',
        ciksUrl: 'https://cks.nice.org.uk/' },
      { id: 'pseudo', name: 'Pseudohalitosis / halitophobia', summary: 'No detectable odour; persistent belief', baseline: 2, category: 'less-common',
        keyExam: 'No objective halitosis.', nextIx: 'Reassure; psychological support if fixed belief.',
        patientPhrase: 'When no odour is detectable, reassurance and addressing the worry are the right approach.',
        ciksUrl: 'https://cks.nice.org.uk/' },

      { id: 'malignancy', name: 'Oral / sinonasal malignancy', summary: 'Non-healing ulcer / mass / unilateral nasal symptoms', baseline: 1, category: 'cant-miss',
        keyExam: 'Oral lesion, neck node, unilateral nasal mass.', nextIx: '\u26A1 Head & neck 2WW / urgent ENT (NICE NG12).',
        patientPhrase: 'A non-healing sore or one-sided nasal symptoms need an urgent specialist check to exclude cancer.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 2WW / urgent ENT' },
    ],
    effects: {
      oral_hygiene: { oral: +22 },
      dental_pain: { oral: +12 },
      sinus_postnasal: { ent: +22 },
      reflux: { reflux: +20 },
      dry_mouth_drugs: { xerostomia: +20 },
      systemic_metabolic: { systemic: +22 },
      no_objective: { pseudo: +24 },

      unilateral_nasal: { malignancy: +28 },
      oral_ulcer: { malignancy: +28 },
    },
    askAbout: {
      oral: ['oral_hygiene', 'dental_pain'],
      ent: ['sinus_postnasal'],
      reflux: ['reflux'],
      xerostomia: ['dry_mouth_drugs'],
      systemic: ['systemic_metabolic'],
      pseudo: ['no_objective'],
      malignancy: ['oral_ulcer', 'unilateral_nasal'],
    },
    sources: [
      { label: 'NICE CKS — Halitosis', url: 'https://cks.nice.org.uk/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'halitosis', label: 'Halitosis', triage: 'halitosis-triage', dx: 'halitosis-dx' }
  );
})();
