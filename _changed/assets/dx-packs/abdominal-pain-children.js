/* ============================================
   Diagnostic Tool pack — Abdominal Pain in Children
   Shared-id triage + differential. NICE CG161 / appendicitis · surgical red flags.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Age', id: 'age_years', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 18, step: 1 },

    { group: 'Surgical / acute', id: 'rif_peritonism', kind: 'check', label: 'RIF pain / guarding / pain on movement / anorexia (appendicitis)' },
    { group: 'Surgical / acute', id: 'bilious_vomit', kind: 'check', label: 'Bilious (green) vomiting / distension / no stool (obstruction)' },
    { group: 'Surgical / acute', id: 'intussusception', kind: 'check', label: 'Infant, colicky pain + drawing legs up + redcurrant stool (intussusception)' },
    { group: 'Surgical / acute', id: 'testicular', kind: 'check', label: 'Boy with scrotal/groin pain (torsion)' },

    { group: 'Medical', id: 'constipation', kind: 'check', label: 'Hard infrequent stools / palpable faecal mass' },
    { group: 'Medical', id: 'gastroenteritis', kind: 'check', label: 'Diarrhoea & vomiting / unwell contacts' },
    { group: 'Medical', id: 'urinary', kind: 'check', label: 'Dysuria / smelly urine / unexplained fever (UTI)' },
    { group: 'Medical', id: 'mesenteric', kind: 'check', label: 'Recent URTI, central pain, well between (mesenteric adenitis)' },
    { group: 'Medical', id: 'recurrent_functional', kind: 'check', label: 'Recurrent central pain, normal exam/growth (functional)' },
    { group: 'Medical', id: 'hsp', kind: 'check', label: 'Purpuric rash on legs/buttocks + joint pain (HSP)' },

    { group: 'Red flags', id: 'dka', kind: 'check', label: 'Polyuria/polydipsia/weight loss/deep breathing (DKA)' },
    { group: 'Red flags', id: 'systemic_unwell', kind: 'check', label: 'Systemically unwell / dehydrated / peritonism' },
  ];

  if (window.RGPTriage) RGPTriage.register('abdominal-pain-children-triage', {
    title: 'Abdominal pain in children — triage',
    subtitle: 'Tick features. Surfaces appendicitis, obstruction, intussusception, torsion and DKA.',
    guideline: 'NICE CG161 · surgical',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Examine (including testes); urine dip for all; consider constipation/mesenteric adenitis/functional; safety-net for surgical features (worsening, localised RIF, bilious vomiting).',
    rules: [
      {
        id: 'surgical', tier: 'emergency',
        label: 'Surgical emergency — appendicitis / obstruction / intussusception / torsion',
        action: 'Same-day surgical/paediatric assessment.',
        patientPhrase: '"These features may need surgery — your child needs urgent hospital assessment today."',
        source: 'NICE CG161',
        when: i => i.rif_peritonism || i.bilious_vomit || i.intussusception || i.testicular || i.systemic_unwell,
      },
      {
        id: 'dka', tier: 'emergency',
        label: 'Possible new diabetes / DKA',
        action: 'Same-day — capillary glucose + ketones; admit if DKA.',
        source: 'NICE NG18',
        when: i => i.dka,
      },
      {
        id: 'uti', tier: 'urgent',
        label: 'Possible UTI',
        action: 'Clean-catch urine; treat per CG54.',
        source: 'NICE CG54',
        when: i => i.urinary,
      },
      {
        id: 'medical', tier: 'routine',
        label: 'Likely medical / self-limiting cause',
        action: 'Treat constipation; gastroenteritis hydration; mesenteric adenitis/functional reassurance; safety-net.',
        source: 'NICE CG161',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CG161 — Abdominal pain (children)', url: 'https://www.nice.org.uk/guidance/cg161' },
      { label: 'NICE CG54 — UTI in children', url: 'https://www.nice.org.uk/guidance/cg54' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('abdominal-pain-children-dx', {
    title: 'Abdominal pain in children — differential',
    subtitle: 'The engine weights constipation, gastroenteritis, mesenteric adenitis, UTI and functional pain, and always surfaces appendicitis, obstruction, intussusception, torsion and DKA.',
    guideline: 'NICE CG161',
    patientPresenting: "My child keeps complaining of tummy ache, doctor.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'constipation', name: 'Constipation', summary: 'Hard infrequent stools, palpable mass', baseline: 10, category: 'common',
        keyExam: 'Palpable faecal loading; no peritonism.', nextIx: 'Disimpaction + maintenance laxative; diet/fluids.',
        patientPhrase: 'Constipation is a very common cause of tummy ache. Softening the stool and a regular routine resolve it.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg99' },
      { id: 'gastroenteritis', name: 'Gastroenteritis', summary: 'Diarrhoea & vomiting, contacts', baseline: 7, category: 'common',
        keyExam: 'Hydration; diffuse mild tenderness.', nextIx: 'Oral rehydration; safety-net dehydration.',
        patientPhrase: 'A tummy bug causes pain with diarrhoea and vomiting. Fluids are the mainstay; it settles in days.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg84' },
      { id: 'mesenteric', name: 'Mesenteric adenitis', summary: 'Recent URTI, central pain, well between', baseline: 5, category: 'common',
        keyExam: 'Mild central tenderness; well child.', nextIx: 'Reassure; safety-net for appendicitis.',
        patientPhrase: 'Swollen tummy glands after a viral illness can cause pain. It settles, but we watch for appendicitis.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg161' },
      { id: 'uti', name: 'UTI', summary: 'Dysuria / unexplained fever', baseline: 4, category: 'common',
        keyExam: 'Loin/suprapubic tenderness.', nextIx: 'Urine sample; treat.',
        patientPhrase: 'A urine infection can present as tummy pain in children — a urine test checks it.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg54' },
      { id: 'functional', name: 'Functional / recurrent abdominal pain', summary: 'Recurrent central pain, normal exam & growth', baseline: 4, category: 'common',
        keyExam: 'Normal exam; normal growth.', nextIx: 'Positive diagnosis after excluding red flags; reassure, address stressors.',
        patientPhrase: 'Recurrent tummy pain with normal examination is common and benign. We support and reassure.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg161' },
      { id: 'hsp', name: 'Henoch-Schönlein purpura', summary: 'Purpuric rash + joint pain + abdominal pain', baseline: 2, category: 'less-common',
        keyExam: 'Palpable purpura (legs/buttocks).', nextIx: 'Urine dip + BP (renal involvement); usually supportive.',
        patientPhrase: 'A small-vessel inflammation causes a rash with tummy and joint pain. We monitor the kidneys.',
        ciksUrl: 'https://cks.nice.org.uk/topics/henoch-schonlein-purpura/' },

      { id: 'appendicitis', name: 'Appendicitis / surgical abdomen', summary: 'RIF pain, guarding, anorexia, obstruction, torsion', baseline: 2, category: 'cant-miss',
        keyExam: 'RIF tenderness/guarding; pain on movement.', nextIx: '\u26A1 Same-day surgical assessment.',
        patientPhrase: 'This pattern can mean appendicitis or another surgical problem — urgent hospital assessment today.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg161', redFlagAction: '\u26A1 Same-day surgical' },
      { id: 'dka', name: 'New diabetes / DKA', summary: 'Polyuria/polydipsia/weight loss/ketotic breathing', baseline: 1, category: 'cant-miss',
        keyExam: 'Dehydration, deep breathing.', nextIx: '\u26A1 Glucose + ketones; admit.',
        patientPhrase: 'Tummy pain with thirst and weight loss can be new diabetes — we check blood sugar today.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng18', redFlagAction: '\u26A1 Glucose + ketones' },
    ],
    effects: {
      age_years: (v) => v != null && v < 2 ? { intussusception: 0, gastroenteritis: +2 } : {},
      constipation: { constipation: +22 },
      gastroenteritis: { gastroenteritis: +20 },
      urinary: { uti: +22 },
      mesenteric: { mesenteric: +20 },
      recurrent_functional: { functional: +20 },
      hsp: { hsp: +24 },

      rif_peritonism: { appendicitis: +28 },
      bilious_vomit: { appendicitis: +14 },
      intussusception: { appendicitis: +10 },
      testicular: { appendicitis: +6 },
      systemic_unwell: { appendicitis: +8 },
      dka: { dka: +30 },
    },
    askAbout: {
      constipation: ['constipation'],
      gastroenteritis: ['gastroenteritis'],
      mesenteric: ['mesenteric'],
      uti: ['urinary'],
      functional: ['recurrent_functional'],
      hsp: ['hsp'],
      appendicitis: ['rif_peritonism', 'bilious_vomit', 'systemic_unwell'],
      dka: ['dka'],
    },
    sources: [
      { label: 'NICE CG161 — Abdominal pain (children)', url: 'https://www.nice.org.uk/guidance/cg161' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'abdominal-pain-children', label: 'Abdominal pain in children', triage: 'abdominal-pain-children-triage', dx: 'abdominal-pain-children-dx' }
  );
})();
