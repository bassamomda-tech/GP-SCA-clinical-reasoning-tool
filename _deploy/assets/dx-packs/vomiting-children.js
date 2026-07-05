/* ============================================
   Diagnostic Tool pack — Vomiting in Children
   Shared-id triage + differential. NICE CG84 · surgical red flags.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Age', id: 'age_months', kind: 'number', label: 'Age', unit: 'months', min: 0, max: 216, step: 1 },

    { group: 'Surgical / serious', id: 'bilious', kind: 'check', label: 'Bilious (green) vomiting (obstruction until proven otherwise)' },
    { group: 'Surgical / serious', id: 'projectile_infant', kind: 'check', label: 'Forceful/projectile vomiting in infant 2–8 weeks, hungry after (pyloric stenosis)' },
    { group: 'Surgical / serious', id: 'intussusception', kind: 'check', label: 'Colicky pain + drawing legs up + redcurrant stool (intussusception)' },
    { group: 'Surgical / serious', id: 'raised_icp', kind: 'check', label: 'Early-morning vomiting + headache / bulging fontanelle / neuro signs (raised ICP)' },
    { group: 'Surgical / serious', id: 'dka', kind: 'check', label: 'Polyuria/polydipsia/weight loss/ketotic breathing (DKA)' },

    { group: 'Medical', id: 'gastroenteritis', kind: 'check', label: 'Diarrhoea & vomiting / contacts (gastroenteritis)' },
    { group: 'Medical', id: 'reflux_posset', kind: 'check', label: 'Effortless posseting in a thriving infant (GORD/posseting)' },
    { group: 'Medical', id: 'urinary', kind: 'check', label: 'Unexplained fever / urinary symptoms (UTI)' },
    { group: 'Medical', id: 'other_infection', kind: 'check', label: 'Fever + focal infection (otitis, tonsillitis, etc.)' },

    { group: 'Red flags', id: 'dehydration', kind: 'check', label: 'Dehydration / reduced consciousness / blood in vomit' },
    { group: 'Red flags', id: 'meningism', kind: 'check', label: 'Non-blanching rash / neck stiffness / very unwell (sepsis/meningitis)' },
  ];

  if (window.RGPTriage) RGPTriage.register('vomiting-children-triage', {
    title: 'Vomiting in children — triage',
    subtitle: 'Tick features. Surfaces obstruction, pyloric stenosis, raised ICP, DKA and sepsis.',
    guideline: 'NICE CG84 · surgical',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Most vomiting is gastroenteritis or infant reflux. Assess hydration; oral rehydration; urine for unexplained fever; safety-net for bilious vomiting, projectile vomiting, dehydration.',
    rules: [
      {
        id: 'surgical', tier: 'emergency',
        label: 'Surgical / serious — bilious vomiting / pyloric / intussusception / raised ICP',
        action: 'Same-day surgical/paediatric assessment + imaging.',
        patientPhrase: '"This pattern of vomiting needs urgent hospital assessment today."',
        source: 'NICE CG84',
        when: i => i.bilious || i.projectile_infant || i.intussusception || i.raised_icp,
      },
      {
        id: 'sepsis_dka', tier: 'emergency',
        label: 'Sepsis / meningitis / DKA / significant dehydration',
        action: '999 / same-day — resuscitate; glucose+ketones; sepsis pathway.',
        source: 'NICE NG143 / NG18',
        when: i => i.meningism || i.dka || i.dehydration,
      },
      {
        id: 'uti', tier: 'urgent',
        label: 'Possible UTI / focal infection',
        action: 'Urine sample; treat source.',
        source: 'NICE CG54',
        when: i => i.urinary || i.other_infection,
      },
      {
        id: 'medical', tier: 'routine',
        label: 'Gastroenteritis / infant reflux',
        action: 'Oral rehydration; reassure thriving refluxer; safety-net dehydration & red flags.',
        source: 'NICE CG84',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CG84 — Diarrhoea & vomiting (children)', url: 'https://www.nice.org.uk/guidance/cg84' },
      { label: 'NICE NG143 — Fever in under 5s', url: 'https://www.nice.org.uk/guidance/ng143' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('vomiting-children-dx', {
    title: 'Vomiting in children — differential',
    subtitle: 'The engine weights gastroenteritis, infant reflux, UTI and other infection, and always surfaces obstruction, pyloric stenosis, raised ICP, DKA and sepsis.',
    guideline: 'NICE CG84',
    patientPresenting: "My child keeps being sick, doctor.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'gastroenteritis', name: 'Gastroenteritis', summary: 'Vomiting ± diarrhoea, contacts', baseline: 11, category: 'common',
        keyExam: 'Hydration.', nextIx: 'Oral rehydration; safety-net dehydration.',
        patientPhrase: 'A tummy bug is the commonest cause. Small frequent fluids and watching hydration are key.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg84' },
      { id: 'reflux', name: 'GORD / posseting', summary: 'Effortless posseting in a thriving infant', baseline: 6, category: 'common',
        keyExam: 'Thriving; effortless small vomits.', nextIx: 'Reassure; feeding advice; review if faltering/distressed.',
        patientPhrase: 'Bringing up small amounts of milk is normal in thriving babies and usually improves with age.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng1' },
      { id: 'uti', name: 'UTI', summary: 'Unexplained fever / urinary symptoms', baseline: 4, category: 'common',
        keyExam: 'Urine sample.', nextIx: 'Clean-catch urine; treat per CG54.',
        patientPhrase: 'A urine infection can cause vomiting in children — a urine test checks for it.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg54' },
      { id: 'infection', name: 'Other infection', summary: 'Fever + focal infection', baseline: 4, category: 'common',
        keyExam: 'Ears/throat/chest.', nextIx: 'Treat source.',
        patientPhrase: 'Vomiting often accompanies other childhood infections. We treat the source.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng143' },

      { id: 'surgical', name: 'Surgical (obstruction / pyloric / intussusception)', summary: 'Bilious / projectile infant / colicky + redcurrant stool', baseline: 2, category: 'cant-miss',
        keyExam: 'Distension; olive mass (pyloric); sausage mass.', nextIx: '\u26A1 Same-day surgical assessment + imaging.',
        patientPhrase: 'This pattern can mean a blockage needing surgery — urgent hospital assessment today.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg84', redFlagAction: '\u26A1 Same-day surgical' },
      { id: 'raised_icp', name: 'Raised intracranial pressure', summary: 'Morning vomiting + headache / neuro signs', baseline: 1, category: 'cant-miss',
        keyExam: 'Papilloedema, bulging fontanelle, neuro signs.', nextIx: '\u26A1 Same-day paediatric assessment + imaging.',
        patientPhrase: 'Morning vomiting with headache needs urgent assessment to exclude pressure on the brain.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng12', redFlagAction: '\u26A1 Urgent imaging' },
      { id: 'dka_sepsis', name: 'DKA / sepsis', summary: 'Ketotic breathing / very unwell / non-blanching rash', baseline: 1, category: 'cant-miss',
        keyExam: 'Dehydration, toxic, rash.', nextIx: '\u26A1 Glucose+ketones; sepsis pathway; admit.',
        patientPhrase: 'Vomiting with these features needs emergency assessment for diabetes or serious infection.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng18', redFlagAction: '\u26A1 Emergency admission' },
    ],
    effects: {
      age_months: (v) => v != null && v < 3 ? { reflux: +4, surgical: +2 } : {},

      gastroenteritis: { gastroenteritis: +20 },
      reflux_posset: { reflux: +22 },
      urinary: { uti: +22 },
      other_infection: { infection: +18 },

      bilious: { surgical: +26 },
      projectile_infant: { surgical: +22 },
      intussusception: { surgical: +18 },
      raised_icp: { raised_icp: +30 },
      dka: { dka_sepsis: +26 },
      dehydration: { dka_sepsis: +8 },
      meningism: { dka_sepsis: +22 },
    },
    askAbout: {
      gastroenteritis: ['gastroenteritis'],
      reflux: ['reflux_posset'],
      uti: ['urinary'],
      infection: ['other_infection'],
      surgical: ['bilious', 'projectile_infant', 'intussusception'],
      raised_icp: ['raised_icp'],
      dka_sepsis: ['dka', 'meningism'],
    },
    sources: [
      { label: 'NICE CG84 — Diarrhoea & vomiting (children)', url: 'https://www.nice.org.uk/guidance/cg84' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'vomiting-children', label: 'Vomiting in children', triage: 'vomiting-children-triage', dx: 'vomiting-children-dx' }
  );
})();
