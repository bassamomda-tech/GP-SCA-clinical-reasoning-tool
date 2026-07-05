/* ============================================
   Diagnostic Tool pack — Gynaecomastia
   Shared-id triage + differential. CKS Gynaecomastia · NICE NG12.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },
    { group: 'Demographics & context', id: 'puberty', kind: 'check', label: 'Pubertal age (10–17)' },
    { group: 'Demographics & context', id: 'drugs', kind: 'check', label: 'Drug cause (spironolactone, PPI, antipsychotic, anabolic steroid, cannabis, digoxin)' },
    { group: 'Demographics & context', id: 'liver_alcohol', kind: 'check', label: 'Chronic liver disease / alcohol excess' },
    { group: 'Demographics & context', id: 'renal', kind: 'check', label: 'CKD / dialysis' },

    { group: 'Findings', id: 'symmetrical_soft', kind: 'check', label: 'Symmetrical, soft, central, mildly tender disc' },
    { group: 'Findings', id: 'hypogonadism', kind: 'check', label: 'Small testes / low libido / reduced secondary hair' },
    { group: 'Findings', id: 'thyroid_sx', kind: 'check', label: 'Thyrotoxic features' },
    { group: 'Findings', id: 'obese', kind: 'check', label: 'Obesity (consider pseudogynaecomastia / fat)' },

    { group: 'Red flags', id: 'hard_eccentric', kind: 'check', label: 'Hard / eccentric / fixed lump, skin change or nipple discharge' },
    { group: 'Red flags', id: 'testis_mass', kind: 'check', label: 'Testicular mass / rapid onset + systemic upset' },
  ];

  if (window.RGPTriage) RGPTriage.register('gynecomastia-triage', {
    title: 'Gynaecomastia — triage',
    subtitle: 'Tick features. Surfaces male breast cancer and testicular tumour pathways.',
    guideline: 'CKS Gynaecomastia · NICE NG12',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Examine breast + testes; review drugs; bloods (LFT, U&E, TFT, testosterone, LH/FSH, oestradiol, hCG, prolactin) guided by findings; reassure pubertal / drug cause and review.',
    rules: [
      {
        id: 'breast_cancer', tier: 'cancer',
        label: 'Suspected male breast cancer — hard / eccentric / fixed lump, skin or nipple change',
        action: 'Breast 2WW.',
        patientPhrase: '"This lump has features I want a breast specialist to assess quickly to be safe."',
        source: 'NICE NG12', sourceUrl: 'https://www.nice.org.uk/guidance/ng12',
        when: i => i.hard_eccentric,
      },
      {
        id: 'testis_2ww', tier: 'cancer',
        label: 'Testicular mass / rapid gynaecomastia — exclude germ-cell tumour',
        action: 'Urgent testicular USS + hCG/AFP; 2WW if mass confirmed.',
        source: 'NICE NG12',
        when: i => i.testis_mass,
      },
      {
        id: 'pathological', tier: 'urgent',
        label: 'Pathological cause likely — hypogonadism / liver / renal / thyroid',
        action: 'Targeted bloods + treat underlying cause; endocrine referral if unexplained.',
        source: 'CKS Gynaecomastia',
        when: i => i.hypogonadism || i.liver_alcohol || i.renal || i.thyroid_sx,
      },
      {
        id: 'benign', tier: 'routine',
        label: 'Likely physiological / drug-induced / pseudogynaecomastia',
        action: 'Reassure; review/stop offending drug; weight loss; review in 3–6 months.',
        source: 'CKS Gynaecomastia',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Gynaecomastia', url: 'https://cks.nice.org.uk/topics/gynaecomastia/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('gynecomastia-dx', {
    title: 'Gynaecomastia — differential',
    subtitle: 'The engine weights physiological, drug and pathological causes, and always surfaces male breast cancer and testicular tumour when triggered.',
    guideline: 'CKS Gynaecomastia',
    patientPresenting: "My chest has become tender and a bit swollen, doctor — it's embarrassing.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'physiological', name: 'Physiological (pubertal / senile)', summary: 'Symmetrical soft disc, pubertal or older man', baseline: 10, category: 'common',
        keyExam: 'Soft central rubbery tissue, mildly tender; normal testes.', nextIx: 'Reassure; review in 3–6 months; bloods only if atypical.',
        patientPhrase: 'This is a normal hormonal shift, common in puberty and later life. It usually settles on its own.',
        ciksUrl: 'https://cks.nice.org.uk/topics/gynaecomastia/' },
      { id: 'drug', name: 'Drug-induced', summary: 'Spironolactone, PPI, antipsychotic, anabolic steroid, cannabis, digoxin', baseline: 8, category: 'common',
        keyExam: 'Medication / substance review.', nextIx: 'Stop/replace offending agent; reassess in 3 months.',
        patientPhrase: 'A medication or substance is the likely cause. Changing it usually reverses it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/gynaecomastia/' },
      { id: 'pseudo', name: 'Pseudogynaecomastia (fat)', summary: 'Obesity, no firm glandular disc', baseline: 5, category: 'common',
        keyExam: 'Fatty tissue without a discrete retroareolar disc.', nextIx: 'Weight management; reassure.',
        patientPhrase: 'This is fatty tissue rather than breast gland. Weight loss improves it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/gynaecomastia/' },
      { id: 'hypogonadism', name: 'Hypogonadism', summary: 'Small testes, low libido, reduced secondary hair', baseline: 4, category: 'less-common',
        keyExam: 'Small testes, reduced virilisation.', nextIx: 'Testosterone, LH/FSH, prolactin; endocrine referral; treat cause.',
        patientPhrase: 'Low male hormone has shifted the balance towards breast tissue. We check hormones and treat the cause.',
        ciksUrl: 'https://cks.nice.org.uk/topics/gynaecomastia/' },
      { id: 'systemic', name: 'Liver / renal / thyroid disease', summary: 'Chronic liver disease, CKD, or thyrotoxicosis', baseline: 3, category: 'less-common',
        keyExam: 'Stigmata of the underlying disease.', nextIx: 'LFT/U&E/TFT; manage underlying condition.',
        patientPhrase: 'A general medical condition is altering your hormone balance. Treating it helps the breast tissue.',
        ciksUrl: 'https://cks.nice.org.uk/topics/gynaecomastia/' },

      { id: 'breast_cancer', name: 'Male breast cancer', summary: 'Hard, eccentric, fixed lump, skin / nipple change', baseline: 1, category: 'cant-miss',
        keyExam: 'Hard fixed eccentric mass, nipple retraction/discharge, nodes.', nextIx: '\u26A1 Breast 2WW (NICE NG12).',
        patientPhrase: 'This lump has features I want a specialist to assess quickly — most prove benign, but we do not wait.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Breast 2WW' },
      { id: 'testis_tumour', name: 'Testicular / hCG-secreting tumour', summary: 'Testicular mass or rapid gynaecomastia', baseline: 1, category: 'cant-miss',
        keyExam: 'Testicular mass; rapid breast enlargement.', nextIx: '\u26A1 Testicular USS + hCG/AFP; urgent referral.',
        patientPhrase: 'Rapid changes can rarely point to a testicular cause — a quick scan and blood test check for it.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Testicular USS + tumour markers' },
    ],
    effects: {
      age: (v) => v >= 60 ? { physiological: +4, breast_cancer: +3 } : {},
      puberty: { physiological: +16 },
      drugs: { drug: +22 },
      liver_alcohol: { systemic: +14 },
      renal: { systemic: +12 },

      symmetrical_soft: { physiological: +12, breast_cancer: -8 },
      hypogonadism: { hypogonadism: +20 },
      thyroid_sx: { systemic: +12 },
      obese: { pseudo: +18 },

      hard_eccentric: { breast_cancer: +30 },
      testis_mass: { testis_tumour: +30 },
    },
    askAbout: {
      physiological: ['symmetrical_soft', 'puberty'],
      drug: ['drugs'],
      pseudo: ['obese'],
      hypogonadism: ['hypogonadism'],
      systemic: ['liver_alcohol', 'renal', 'thyroid_sx'],
      breast_cancer: ['hard_eccentric'],
      testis_tumour: ['testis_mass'],
    },
    sources: [
      { label: 'NICE CKS — Gynaecomastia', url: 'https://cks.nice.org.uk/topics/gynaecomastia/' },
      { label: 'NICE NG12 — Suspected cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'gynecomastia', label: 'Gynaecomastia', triage: 'gynecomastia-triage', dx: 'gynecomastia-dx' }
  );
})();
