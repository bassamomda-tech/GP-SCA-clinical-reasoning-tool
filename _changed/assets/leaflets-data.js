/* ============================================================
   Reasoning GP — Patient Leaflet directory
   Anchored to canonical landing-page URLs at well-known UK
   patient-info organisations. GP should verify the live page
   before sharing the link with a patient.
   ============================================================ */

window.LEAFLET_ORGS = {
  nhs:        { name:'NHS',                                short:'NHS',                tone:'#005eb8' },
  patient:    { name:'Patient.info',                        short:'Patient.info',       tone:'#0e7490' },
  va:         { name:'Versus Arthritis',                    short:'Versus Arthritis',   tone:'#e3372f' },
  bhf:        { name:'British Heart Foundation',            short:'BHF',                tone:'#e2231a' },
  heartuk:    { name:'HEART UK',                            short:'HEART UK',           tone:'#c8102e' },
  diabetesuk: { name:'Diabetes UK',                         short:'Diabetes UK',        tone:'#00427a' },
  alung:      { name:'Asthma + Lung UK',                    short:'Asthma + Lung UK',   tone:'#003c71' },
  bad:        { name:'British Association of Dermatologists', short:'BAD',              tone:'#005baa' },
  mind:       { name:'Mind',                                short:'Mind',               tone:'#0096a1' },
  rcpsych:    { name:'Royal College of Psychiatrists',      short:'RCPsych',            tone:'#003478' },
  macmillan:  { name:'Macmillan',                           short:'Macmillan',          tone:'#005eb8' },
  cruk:       { name:'Cancer Research UK',                  short:'CRUK',               tone:'#2e0089' },
  stroke:     { name:'Stroke Association',                  short:'Stroke Association', tone:'#9e1b32' },
  mssoc:      { name:'MS Society',                          short:'MS Society',         tone:'#003478' },
  epaction:   { name:'Epilepsy Action',                     short:'Epilepsy Action',    tone:'#7b2f8d' },
  parkinsons: { name:'Parkinson\u2019s UK',                  short:'Parkinson\u2019s UK', tone:'#005eb8' },
  alz:        { name:'Alzheimer\u2019s Society',             short:'Alzheimer\u2019s Soc', tone:'#7d2683' },
  cc:         { name:'Crohn\u2019s & Colitis UK',            short:'C&C UK',             tone:'#1b4965' },
  guts:       { name:'Guts UK',                              short:'Guts UK',           tone:'#e2231a' },
  coeliac:    { name:'Coeliac UK',                           short:'Coeliac UK',        tone:'#00427a' },
  britliver:  { name:'British Liver Trust',                 short:'British Liver Trust', tone:'#003478' },
  kcuk:       { name:'Kidney Care UK',                       short:'Kidney Care UK',    tone:'#0066cc' },
  pcuk:       { name:'Prostate Cancer UK',                   short:'Prostate Cancer UK', tone:'#005eb8' },
  rcog:       { name:'RCOG Patient Info',                    short:'RCOG',              tone:'#56114a' },
  daisynet:   { name:'Daisy Network (Early Menopause)',     short:'Daisy Network',      tone:'#005eb8' },
  bashh:      { name:'BASHH / Patient Group Direction info', short:'BASHH',             tone:'#005eb8' },
  fsrh:       { name:'FSRH',                                 short:'FSRH',              tone:'#005eb8' },
  brookadv:   { name:'Brook (Sexual Health)',                short:'Brook',             tone:'#e2231a' },
  rnib:       { name:'RNIB',                                 short:'RNIB',              tone:'#e2231a' },
  glauc:      { name:'Glaucoma UK',                          short:'Glaucoma UK',       tone:'#005eb8' },
  macsoc:     { name:'Macular Society',                      short:'Macular Society',   tone:'#003478' },
  ent:        { name:'ENT UK',                               short:'ENT UK',            tone:'#003478' },
  rcpch:      { name:'RCPCH',                                short:'RCPCH',             tone:'#005eb8' },
  thyroiduk:  { name:'British Thyroid Foundation',           short:'BTF',               tone:'#003478' },
  pos:        { name:'Verity (PCOS support)',                short:'Verity',            tone:'#7d2683' },
  endouk:     { name:'Endometriosis UK',                     short:'Endometriosis UK',  tone:'#7d2683' },
  bladder:    { name:'Bladder & Bowel UK',                   short:'Bladder & Bowel UK',tone:'#005eb8' },
  meningitis: { name:'Meningitis Now',                       short:'Meningitis Now',    tone:'#e2231a' },
  brainst:    { name:'The Brain Tumour Charity',             short:'Brain Tumour Charity', tone:'#0096a1' },
  migraine:   { name:'The Migraine Trust',                   short:'Migraine Trust',    tone:'#7d2683' },
  vert:       { name:'The M\u00e9ni\u00e8re\u2019s Society',  short:'M\u00e9ni\u00e8re\u2019s Society', tone:'#003478' },
  alopecia:   { name:'Alopecia UK',                          short:'Alopecia UK',       tone:'#005eb8' },
  acne:       { name:'British Skin Foundation',              short:'British Skin Fdn',  tone:'#005baa' },
  carers:     { name:'Carers UK',                            short:'Carers UK',         tone:'#005eb8' },
  eric:       { name:'ERIC (children\u2019s bowel & bladder)', short:'ERIC',           tone:'#00a3a1' },
};

window.LEAFLET_SPECIALTIES = [
  { id:'cardio', name:'Cardiovascular',           color:'#b91c1c', icon:'\u2764\ufe0e',  lead:'bhf',        blurb:'BHF + HEART UK lead. NHS for plain-English overviews.' },
  { id:'resp',   name:'Respiratory',              color:'#0369a1', icon:'\ud83d\udecf',   lead:'alung',      blurb:'Asthma + Lung UK is the patient charity for almost all airway disease.' },
  { id:'endo',   name:'Endocrine & Diabetes',     color:'#15803d', icon:'\ud83e\ude78',   lead:'diabetesuk', blurb:'Diabetes UK, BTF (thyroid), Verity (PCOS).' },
  { id:'renal',  name:'Renal',                    color:'#0d9488', icon:'\ud83e\uddca',   lead:'kcuk',       blurb:'Kidney Care UK + NHS Health A\u2013Z.' },
  { id:'gi',     name:'Gastroenterology & Liver', color:'#854d0e', icon:'\ud83c\udf75',   lead:'guts',       blurb:'Guts UK, Crohn\u2019s & Colitis UK, Coeliac UK, British Liver Trust.' },
  { id:'msk',    name:'Musculoskeletal',          color:'#b45309', icon:'\ud83e\uddb4',   lead:'va',         blurb:'Versus Arthritis is the bedrock for arthritis + soft-tissue.' },
  { id:'derm',   name:'Dermatology',              color:'#9d174d', icon:'\u270b',         lead:'bad',        blurb:'BAD Patient Information Leaflets (PILs) + British Skin Foundation.' },
  { id:'mental', name:'Mental Health',            color:'#6d28d9', icon:'\ud83e\udde0',   lead:'mind',       blurb:'Mind for stigma-free overviews. RCPsych for clinically-anchored detail.' },
  { id:'neuro',  name:'Neurology',                color:'#7c3aed', icon:'\u26a1',         lead:'stroke',     blurb:'Stroke Assoc., MS Society, Epilepsy Action, Migraine Trust, Parkinson\u2019s UK.' },
  { id:'women',  name:'Women\u2019s Health',       color:'#be185d', icon:'\u2640\ufe0e',   lead:'rcog',       blurb:'RCOG Patient Information Committee leaflets are the GP gold standard.' },
  { id:'men',    name:'Men\u2019s Health',         color:'#1d4ed8', icon:'\u2642\ufe0e',   lead:'pcuk',       blurb:'Prostate Cancer UK + NHS.' },
  { id:'sexual', name:'Sexual Health & GU',        color:'#a21caf', icon:'\ud83d\udd12',   lead:'bashh',      blurb:'BASHH (STI), FSRH (contraception), Brook (under-25s).' },
  { id:'cancer', name:'Cancer',                    color:'#475569', icon:'\ud83c\udf80',   lead:'macmillan',  blurb:'Macmillan for living-with content; CRUK for diagnostic detail.' },
  { id:'eye',    name:'Eye',                       color:'#0f766e', icon:'\ud83d\udc41',   lead:'rnib',       blurb:'RNIB, Glaucoma UK, Macular Society.' },
  { id:'ent',    name:'ENT',                       color:'#0369a1', icon:'\ud83d\udc42',   lead:'ent',        blurb:'ENT UK and NHS.' },
  { id:'paeds',  name:'Paediatrics',               color:'#ea580c', icon:'\ud83e\uddb8',   lead:'rcpch',      blurb:'RCPCH (parent leaflets) + NHS.' },
  { id:'general',name:'General symptoms',          color:'#475569', icon:'\u2728',         lead:'nhs',        blurb:'NHS + Patient.info for non-specific presentations.' },
];

/* Conditions array.
   Each entry: { s:slug, n:name, sp:specialty_id, syn:[synonyms], p:primary{}, a:[alternates], t?:[translations] }
   Primary/alt entries: { o:orgId, u:url, d:short description }
*/
window.LEAFLET_CONDITIONS = [

  /* ============ CARDIOVASCULAR ============ */
  { s:'high-blood-pressure', n:'Hypertension', sp:'cardio', syn:['HTN','high BP','raised blood pressure'],
    p:{ o:'bhf', u:'https://www.bhf.org.uk/informationsupport/risk-factors/high-blood-pressure', d:'BHF risk-factor explainer + lifestyle. Booklet PDF.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/high-blood-pressure-hypertension/', d:'NHS plain-English overview, browser-translate widget.' },
        { o:'patient', u:'https://patient.info/heart-health/high-blood-pressure-hypertension', d:'Patient.info — more clinical detail; Easy-Read variant.' } ],
    t:['NHS Translate widget — Arabic / Polish / Urdu / Bengali / Mandarin / Punjabi'] },

  { s:'atrial-fibrillation', n:'Atrial Fibrillation', sp:'cardio', syn:['AF','irregular pulse','irregular heart','afib'],
    p:{ o:'bhf', u:'https://www.bhf.org.uk/informationsupport/conditions/atrial-fibrillation', d:'BHF \u2014 symptoms, anticoagulation, life with AF. Booklet PDF.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/atrial-fibrillation/', d:'NHS overview \u2014 stroke risk, treatment options.' },
        { o:'patient', u:'https://patient.info/heart-health/abnormal-heart-rhythms-arrhythmias/atrial-fibrillation', d:'Patient.info clinical detail.' } ] },

  { s:'heart-failure', n:'Heart Failure', sp:'cardio', syn:['HF','HFrEF','HFpEF','congestive cardiac failure','CCF'],
    p:{ o:'bhf', u:'https://www.bhf.org.uk/informationsupport/conditions/heart-failure', d:'BHF \u2014 the standard UK patient resource. Booklet "Living with heart failure".' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/heart-failure/', d:'NHS overview.' },
        { o:'patient', u:'https://patient.info/heart-health/heart-failure-leaflet', d:'Patient.info clinical leaflet.' } ] },

  { s:'angina', n:'Angina', sp:'cardio', syn:['stable angina','chest pain on exertion'],
    p:{ o:'bhf', u:'https://www.bhf.org.uk/informationsupport/conditions/angina', d:'BHF \u2014 GTN technique, when to call 999.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/angina/', d:'NHS overview.' },
        { o:'patient', u:'https://patient.info/heart-health/angina-leaflet', d:'Patient.info detail.' } ] },

  { s:'heart-attack', n:'Heart attack (MI)', sp:'cardio', syn:['myocardial infarction','MI','STEMI','NSTEMI'],
    p:{ o:'bhf', u:'https://www.bhf.org.uk/informationsupport/conditions/heart-attack', d:'BHF \u2014 recovery, secondary prevention.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/heart-attack/', d:'NHS overview.' } ] },

  { s:'high-cholesterol', n:'High cholesterol / Hyperlipidaemia', sp:'cardio', syn:['hyperlipidaemia','statin','dyslipidaemia'],
    p:{ o:'heartuk', u:'https://www.heartuk.org.uk/cholesterol/getting-a-cholesterol-test', d:'HEART UK \u2014 cholesterol charity, lifestyle + statins + FH.' },
    a:[ { o:'bhf', u:'https://www.bhf.org.uk/informationsupport/risk-factors/high-cholesterol', d:'BHF \u2014 plain-English risk explanation.' },
        { o:'nhs', u:'https://www.nhs.uk/conditions/high-cholesterol/', d:'NHS overview.' } ] },

  { s:'fh', n:'Familial Hypercholesterolaemia', sp:'cardio', syn:['FH','inherited high cholesterol'],
    p:{ o:'heartuk', u:'https://www.heartuk.org.uk/genetic-conditions/familial-hypercholesterolaemia', d:'HEART UK \u2014 inherited cholesterol expert charity.' },
    a:[ { o:'bhf', u:'https://www.bhf.org.uk/informationsupport/conditions/familial-hypercholesterolaemia', d:'BHF \u2014 family-screening info.' } ] },

  { s:'stroke', n:'Stroke', sp:'cardio', syn:['CVA','cerebrovascular accident'],
    p:{ o:'stroke', u:'https://www.stroke.org.uk/stroke', d:'Stroke Association \u2014 the UK lead patient charity.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/stroke/', d:'NHS overview.' },
        { o:'bhf', u:'https://www.bhf.org.uk/informationsupport/conditions/stroke', d:'BHF angle (often comorbid).' } ] },

  { s:'tia', n:'TIA (mini-stroke)', sp:'cardio', syn:['transient ischaemic attack','mini-stroke'],
    p:{ o:'stroke', u:'https://www.stroke.org.uk/effects-of-stroke/transient-ischaemic-attack-tia', d:'Stroke Association \u2014 TIA-specific.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/transient-ischaemic-attack-tia/', d:'NHS overview.' } ] },

  { s:'dvt', n:'Deep Vein Thrombosis (DVT)', sp:'cardio', syn:['blood clot leg','DVT'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/deep-vein-thrombosis-dvt/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/heart-health/deep-vein-thrombosis-leaflet', d:'Patient.info detail.' },
        { o:'bhf', u:'https://www.bhf.org.uk/informationsupport/conditions/deep-vein-thrombosis-dvt', d:'BHF risk-factor angle.' } ] },

  { s:'pe', n:'Pulmonary Embolism', sp:'cardio', syn:['PE','clot on the lung'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/pulmonary-embolism/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/chest-lungs/pulmonary-embolism-leaflet', d:'Patient.info detail.' } ] },

  { s:'pad', n:'Peripheral Arterial Disease', sp:'cardio', syn:['PAD','intermittent claudication','peripheral vascular disease'],
    p:{ o:'bhf', u:'https://www.bhf.org.uk/informationsupport/conditions/peripheral-arterial-disease', d:'BHF \u2014 risk factors, walking programmes.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/peripheral-arterial-disease-pad/', d:'NHS overview.' } ] },

  { s:'aaa', n:'Abdominal Aortic Aneurysm', sp:'cardio', syn:['AAA'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/abdominal-aortic-aneurysm/', d:'NHS \u2014 screening programme info.' },
    a:[ { o:'bhf', u:'https://www.bhf.org.uk/informationsupport/conditions/abdominal-aortic-aneurysm', d:'BHF detail.' } ] },

  { s:'varicose-veins', n:'Varicose veins', sp:'cardio', syn:[],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/varicose-veins/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/heart-health/varicose-veins-leaflet', d:'Patient.info.' } ] },

  { s:'palpitations', n:'Palpitations', sp:'cardio', syn:['fluttering heart','skipped beats'],
    p:{ o:'bhf', u:'https://www.bhf.org.uk/informationsupport/heart-matters-magazine/medical/ask-the-experts/palpitations', d:'BHF \u2014 when to worry, when not to.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/heart-palpitations/', d:'NHS overview.' } ] },

  /* ============ RESPIRATORY ============ */
  { s:'common-cold', n:'Common Cold & URTI', sp:'resp', syn:['cold','upper respiratory tract infection','URTI','runny nose','man flu'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/common-cold/', d:'NHS — self-care; why antibiotics are not needed.' },
    a:[ { o:'patient', u:'https://patient.info/chest-lungs/common-cold-leaflet-coryza', d:'Patient.info.' } ] },
  { s:'asthma', n:'Asthma (adult)', sp:'resp', syn:['wheeze','reversible airway'],
    p:{ o:'alung', u:'https://www.asthmaandlung.org.uk/conditions/asthma', d:'Asthma + Lung UK \u2014 the UK lead patient charity. Action-plan template.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/asthma/', d:'NHS overview.' },
        { o:'patient', u:'https://patient.info/chest-lungs/asthma-leaflet', d:'Patient.info \u2014 more clinical detail.' } ] },

  { s:'asthma-paeds', n:'Childhood Asthma', sp:'resp', syn:['wheeze child','child asthma'],
    p:{ o:'alung', u:'https://www.asthmaandlung.org.uk/conditions/asthma/children', d:'Asthma + Lung UK \u2014 paediatric section + action plan.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/asthma/children/', d:'NHS overview.' } ] },

  { s:'copd', n:'COPD', sp:'resp', syn:['chronic obstructive pulmonary disease','emphysema','chronic bronchitis'],
    p:{ o:'alung', u:'https://www.asthmaandlung.org.uk/conditions/copd-chronic-obstructive-pulmonary-disease', d:'Asthma + Lung UK \u2014 self-management, pulmonary rehab.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/chronic-obstructive-pulmonary-disease-copd/', d:'NHS overview.' },
        { o:'patient', u:'https://patient.info/chest-lungs/chronic-obstructive-pulmonary-disease-leaflet', d:'Patient.info.' } ] },

  { s:'pneumonia', n:'Pneumonia', sp:'resp', syn:['chest infection'],
    p:{ o:'alung', u:'https://www.asthmaandlung.org.uk/conditions/pneumonia', d:'Asthma + Lung UK.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/pneumonia/', d:'NHS overview.' } ] },

  { s:'osa', n:'Obstructive Sleep Apnoea', sp:'resp', syn:['OSA','snoring','sleep apnoea'],
    p:{ o:'alung', u:'https://www.asthmaandlung.org.uk/conditions/obstructive-sleep-apnoea-osa', d:'Asthma + Lung UK \u2014 CPAP, DVLA implications.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/sleep-apnoea/', d:'NHS overview.' } ] },

  { s:'bronchiectasis', n:'Bronchiectasis', sp:'resp', syn:[],
    p:{ o:'alung', u:'https://www.asthmaandlung.org.uk/conditions/bronchiectasis', d:'Asthma + Lung UK \u2014 airway clearance, antibiotic plans.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/bronchiectasis/', d:'NHS overview.' } ] },

  { s:'ipf', n:'Idiopathic Pulmonary Fibrosis', sp:'resp', syn:['pulmonary fibrosis','IPF'],
    p:{ o:'alung', u:'https://www.asthmaandlung.org.uk/conditions/pulmonary-fibrosis', d:'Asthma + Lung UK.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/idiopathic-pulmonary-fibrosis/', d:'NHS overview.' } ] },

  { s:'cough', n:'Chronic cough', sp:'resp', syn:['persistent cough','long-lasting cough'],
    p:{ o:'alung', u:'https://www.asthmaandlung.org.uk/symptoms-tests-treatments/symptoms/cough', d:'Asthma + Lung UK.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/cough/', d:'NHS overview.' } ] },

  { s:'hayfever', n:'Hay fever / Allergic rhinitis', sp:'resp', syn:['rhinitis','seasonal allergy'],
    p:{ o:'alung', u:'https://www.asthmaandlung.org.uk/conditions/allergies/hay-fever', d:'Asthma + Lung UK.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/hay-fever/', d:'NHS overview.' } ] },

  /* ============ ENDOCRINE & DIABETES ============ */
  { s:'type-2-diabetes', n:'Type 2 Diabetes', sp:'endo', syn:['T2DM','sugar diabetes','adult-onset diabetes'],
    p:{ o:'diabetesuk', u:'https://www.diabetes.org.uk/diabetes-the-basics/types-of-diabetes/type-2', d:'Diabetes UK \u2014 the UK lead patient charity. Newly-diagnosed pack.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/type-2-diabetes/', d:'NHS overview.' },
        { o:'patient', u:'https://patient.info/diabetes/type-2-diabetes', d:'Patient.info clinical detail.' } ] },

  { s:'type-1-diabetes', n:'Type 1 Diabetes', sp:'endo', syn:['T1DM','insulin-dependent diabetes'],
    p:{ o:'diabetesuk', u:'https://www.diabetes.org.uk/diabetes-the-basics/types-of-diabetes/type-1', d:'Diabetes UK \u2014 lead patient charity.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/type-1-diabetes/', d:'NHS overview.' } ] },

  { s:'prediabetes', n:'Pre-diabetes / Non-diabetic hyperglycaemia', sp:'endo', syn:['NDH','impaired fasting glucose','impaired glucose tolerance','IGT','IFG'],
    p:{ o:'diabetesuk', u:'https://www.diabetes.org.uk/diabetes-the-basics/non-diabetic-hyperglycaemia', d:'Diabetes UK \u2014 NDH explainer + NHS DPP referral info.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/prediabetes/', d:'NHS overview.' } ] },

  { s:'gestational-diabetes', n:'Gestational Diabetes', sp:'endo', syn:['pregnancy diabetes','GDM'],
    p:{ o:'diabetesuk', u:'https://www.diabetes.org.uk/diabetes-the-basics/gestational-diabetes', d:'Diabetes UK \u2014 detailed pregnancy pathway.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/gestational-diabetes/', d:'NHS overview.' } ] },

  { s:'hypothyroidism', n:'Hypothyroidism', sp:'endo', syn:['underactive thyroid','low thyroid'],
    p:{ o:'thyroiduk', u:'https://www.btf-thyroid.org/hypothyroidism-leaflet', d:'BTF \u2014 specialist thyroid charity leaflet.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/underactive-thyroid-hypothyroidism/', d:'NHS overview.' },
        { o:'patient', u:'https://patient.info/hormones/thyroid-gland/underactive-thyroid-leaflet', d:'Patient.info.' } ] },

  { s:'hyperthyroidism', n:'Hyperthyroidism', sp:'endo', syn:['overactive thyroid','Graves'],
    p:{ o:'thyroiduk', u:'https://www.btf-thyroid.org/hyperthyroidism-leaflet', d:'BTF \u2014 specialist thyroid charity.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/overactive-thyroid-hyperthyroidism/', d:'NHS overview.' } ] },

  { s:'pcos', n:'Polycystic Ovary Syndrome', sp:'endo', syn:['PCOS'],
    p:{ o:'rcog', u:'https://www.rcog.org.uk/for-the-public/browse-all-patient-information-leaflets/polycystic-ovary-syndrome-pcos-what-it-means-for-your-long-term-health/', d:'RCOG patient leaflet \u2014 long-term health focus.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/', d:'NHS overview.' },
        { o:'pos', u:'https://www.verity-pcos.org.uk/', d:'Verity \u2014 patient support charity.' } ] },

  { s:'obesity', n:'Overweight & Obesity', sp:'endo', syn:['weight loss','BMI'],
    p:{ o:'nhs', u:'https://www.nhs.uk/live-well/healthy-weight/', d:'NHS Live Well \u2014 BMI calculator + tools.' },
    a:[ { o:'patient', u:'https://patient.info/diet-and-lifestyle/overweight-and-obesity-leaflet', d:'Patient.info.' } ] },

  { s:'osteoporosis', n:'Osteoporosis', sp:'endo', syn:['brittle bones','low bone density'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/osteoporosis/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/bones-joints-muscles/osteoporosis-leaflet', d:'Patient.info.' },
        { o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/osteoporosis/', d:'Versus Arthritis \u2014 living-with section.' } ] },

  { s:'vitamin-d-deficiency', n:'Vitamin D Deficiency', sp:'endo', syn:[],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-d/', d:'NHS \u2014 supplement guidance.' },
    a:[ { o:'patient', u:'https://patient.info/bones-joints-muscles/vitamin-d-deficiency', d:'Patient.info.' } ] },

  /* ============ RENAL ============ */
  { s:'chronic-kidney-disease', n:'Chronic Kidney Disease', sp:'renal', syn:['CKD','kidney failure','reduced kidney function'],
    p:{ o:'kcuk', u:'https://www.kidneycareuk.org/about-kidney-health/conditions/ckd/', d:'Kidney Care UK \u2014 stage-by-stage explainer.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/kidney-disease/', d:'NHS overview.' },
        { o:'patient', u:'https://patient.info/kidney-urinary-tract/chronic-kidney-disease-leaflet', d:'Patient.info.' } ] },

  { s:'aki', n:'Acute Kidney Injury', sp:'renal', syn:['AKI'],
    p:{ o:'kcuk', u:'https://www.kidneycareuk.org/about-kidney-health/conditions/aki/', d:'Kidney Care UK.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/acute-kidney-injury/', d:'NHS overview.' } ] },

  { s:'uti', n:'UTI (urinary tract infection)', sp:'renal', syn:['cystitis','bladder infection'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/urinary-tract-infections-utis/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/kidney-urinary-tract/urine-infection-in-adults', d:'Patient.info.' },
        { o:'bladder', u:'https://www.bladderandboweluk.co.uk/bladder/bladder-conditions/uti-cystitis/', d:'Bladder & Bowel UK.' } ] },

  { s:'kidney-stones', n:'Kidney Stones', sp:'renal', syn:['renal calculi','renal colic'],
    p:{ o:'kcuk', u:'https://www.kidneycareuk.org/about-kidney-health/conditions/kidney-stones/', d:'Kidney Care UK.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/kidney-stones/', d:'NHS overview.' } ] },

  { s:'haematuria', n:'Blood in urine (Haematuria)', sp:'renal', syn:['haematuria','blood in urine'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/blood-in-urine/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/kidney-urinary-tract/blood-in-the-urine-haematuria', d:'Patient.info.' } ] },

  /* ============ GI & LIVER ============ */
  { s:'gastroenteritis-adult', n:'Gastroenteritis & Food Poisoning (adult)', sp:'gi', syn:['food poisoning','diarrhoea and vomiting','D&V','stomach bug','norovirus','tummy bug'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/diarrhoea-and-vomiting/', d:'NHS — hydration, self-care, when to seek help.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/food-poisoning/', d:'NHS — food poisoning.' },
        { o:'patient', u:'https://patient.info/digestive-health/gastroenteritis', d:'Patient.info.' } ] },
  { s:'gord', n:'GORD / Reflux', sp:'gi', syn:['acid reflux','heartburn','GORD','GERD'],
    p:{ o:'guts', u:'https://gutscharity.org.uk/advice-and-information/conditions/gastro-oesophageal-reflux-disease-gord/', d:'Guts UK.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/heartburn-and-acid-reflux/', d:'NHS overview.' },
        { o:'patient', u:'https://patient.info/digestive-health/dyspepsia-indigestion/acid-reflux-and-oesophagitis', d:'Patient.info.' } ] },

  { s:'peptic-ulcer', n:'Peptic ulcer disease', sp:'gi', syn:['stomach ulcer','duodenal ulcer','PUD'],
    p:{ o:'guts', u:'https://gutscharity.org.uk/advice-and-information/conditions/peptic-ulcer/', d:'Guts UK.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/stomach-ulcer/', d:'NHS overview.' } ] },

  { s:'h-pylori', n:'Helicobacter pylori', sp:'gi', syn:['H pylori','HP infection'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/helicobacter-pylori-infection/', d:'NHS overview.' },
    a:[ { o:'guts', u:'https://gutscharity.org.uk/advice-and-information/conditions/helicobacter-pylori/', d:'Guts UK.' } ] },

  { s:'ibs', n:'Irritable Bowel Syndrome', sp:'gi', syn:['IBS','spastic colon'],
    p:{ o:'guts', u:'https://gutscharity.org.uk/advice-and-information/conditions/irritable-bowel-syndrome-ibs/', d:'Guts UK \u2014 the IBS Network is the patient charity; Guts UK leads on info.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/irritable-bowel-syndrome-ibs/', d:'NHS overview.' },
        { o:'patient', u:'https://patient.info/digestive-health/irritable-bowel-syndrome-leaflet', d:'Patient.info.' } ] },

  { s:'crohns', n:'Crohn\u2019s Disease', sp:'gi', syn:['Crohn','IBD'],
    p:{ o:'cc', u:'https://crohnsandcolitis.org.uk/info-support/information-about-crohns-and-colitis/all-information-about-crohns-and-colitis/diagnosis-treatment/crohns-disease', d:'Crohn\u2019s & Colitis UK \u2014 lead patient charity.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/crohns-disease/', d:'NHS overview.' } ] },

  { s:'ulcerative-colitis', n:'Ulcerative Colitis', sp:'gi', syn:['UC','IBD'],
    p:{ o:'cc', u:'https://crohnsandcolitis.org.uk/info-support/information-about-crohns-and-colitis/all-information-about-crohns-and-colitis/diagnosis-treatment/ulcerative-colitis', d:'Crohn\u2019s & Colitis UK \u2014 lead patient charity.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/ulcerative-colitis/', d:'NHS overview.' } ] },

  { s:'coeliac', n:'Coeliac Disease', sp:'gi', syn:['gluten intolerance','celiac'],
    p:{ o:'coeliac', u:'https://www.coeliac.org.uk/information-and-support/coeliac-disease/about-coeliac-disease/', d:'Coeliac UK \u2014 specialist charity, gluten-free directory.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/coeliac-disease/', d:'NHS overview.' } ] },

  { s:'diverticular-disease', n:'Diverticular Disease', sp:'gi', syn:['diverticulosis','diverticulitis'],
    p:{ o:'guts', u:'https://gutscharity.org.uk/advice-and-information/conditions/diverticular-disease/', d:'Guts UK.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/diverticular-disease-and-diverticulitis/', d:'NHS overview.' } ] },

  { s:'haemorrhoids', n:'Haemorrhoids (piles)', sp:'gi', syn:['piles'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/piles-haemorrhoids/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/digestive-health/rectal-bleeding-blood-in-faeces/piles-haemorrhoids', d:'Patient.info.' } ] },

  { s:'constipation', n:'Constipation', sp:'gi', syn:[],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/constipation/', d:'NHS overview.' },
    a:[ { o:'guts', u:'https://gutscharity.org.uk/advice-and-information/conditions/constipation/', d:'Guts UK.' },
        { o:'bladder', u:'https://www.bladderandboweluk.co.uk/bowel/bowel-conditions/constipation/', d:'Bladder & Bowel UK.' } ] },

  { s:'gallstones', n:'Gallstones', sp:'gi', syn:['cholelithiasis','biliary colic'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/gallstones/', d:'NHS overview.' },
    a:[ { o:'guts', u:'https://gutscharity.org.uk/advice-and-information/conditions/gallstones/', d:'Guts UK.' } ] },

  { s:'nafld', n:'Non-Alcoholic Fatty Liver Disease', sp:'gi', syn:['NAFLD','fatty liver','MASLD'],
    p:{ o:'britliver', u:'https://britishlivertrust.org.uk/information-and-support/liver-conditions/non-alcohol-related-fatty-liver-disease/', d:'British Liver Trust.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/non-alcoholic-fatty-liver-disease/', d:'NHS overview.' } ] },

  { s:'hepatitis-b', n:'Hepatitis B', sp:'gi', syn:['HBV'],
    p:{ o:'britliver', u:'https://britishlivertrust.org.uk/information-and-support/liver-conditions/hepatitis-b/', d:'British Liver Trust.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/hepatitis-b/', d:'NHS overview.' } ] },

  { s:'hepatitis-c', n:'Hepatitis C', sp:'gi', syn:['HCV'],
    p:{ o:'britliver', u:'https://britishlivertrust.org.uk/information-and-support/liver-conditions/hepatitis-c/', d:'British Liver Trust.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/hepatitis-c/', d:'NHS overview.' } ] },

  { s:'iron-deficiency-anaemia', n:'Iron Deficiency Anaemia', sp:'gi', syn:['anaemia','low haemoglobin','low iron'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/iron-deficiency-anaemia/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/digestive-health/anaemia-leaflet/iron-deficiency-anaemia', d:'Patient.info.' } ] },

  { s:'anal-fissure', n:'Anal Fissure', sp:'gi', syn:['tear','anal pain'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/anal-fissure/', d:'NHS overview.' },
    a:[ { o:'guts', u:'https://gutscharity.org.uk/advice-and-information/symptoms/anal-pain/', d:'Guts UK \u2014 anal pain.' } ] },

  { s:'b12-folate-anaemia', n:'B12 / Folate Deficiency Anaemia', sp:'gi', syn:['pernicious anaemia','macrocytic anaemia','low B12','low folate'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/vitamin-b12-or-folate-deficiency-anaemia/', d:'NHS overview \u2014 incl. pernicious anaemia.' },
    a:[ { o:'patient', u:'https://patient.info/digestive-health/anaemia-leaflet/b12-deficiency-and-pernicious-anaemia', d:'Patient.info.' } ] },

  /* ============ MSK ============ */
  { s:'sprains-strains', n:'Sprains & Strains', sp:'msk', syn:['sprain','strain','soft tissue injury','pulled muscle','twisted ankle','ligament injury'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/sprains-and-strains/', d:'NHS — RICE, recovery, when to seek help.' },
    a:[ { o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/sprains-and-strains/', d:'Versus Arthritis.' } ] },
  { s:'osteoarthritis', n:'Osteoarthritis', sp:'msk', syn:['OA','degenerative joint disease','wear and tear'],
    p:{ o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/osteoarthritis/', d:'Versus Arthritis \u2014 UK lead patient charity. Exercise sheets.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/osteoarthritis/', d:'NHS overview.' } ] },

  { s:'rheumatoid-arthritis', n:'Rheumatoid Arthritis', sp:'msk', syn:['RA','inflammatory arthritis'],
    p:{ o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/rheumatoid-arthritis/', d:'Versus Arthritis \u2014 lead charity.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/rheumatoid-arthritis/', d:'NHS overview.' } ] },

  { s:'gout', n:'Gout', sp:'msk', syn:['hyperuricaemia','tophi'],
    p:{ o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/gout/', d:'Versus Arthritis \u2014 diet sheet + allopurinol explainer.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/gout/', d:'NHS overview.' } ] },

  { s:'pmr', n:'Polymyalgia Rheumatica', sp:'msk', syn:['PMR'],
    p:{ o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/polymyalgia-rheumatica-pmr/', d:'Versus Arthritis.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/polymyalgia-rheumatica/', d:'NHS overview.' } ] },

  { s:'fibromyalgia', n:'Fibromyalgia', sp:'msk', syn:['widespread pain','FMS'],
    p:{ o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/fibromyalgia/', d:'Versus Arthritis.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/fibromyalgia/', d:'NHS overview.' } ] },

  { s:'lupus', n:'Lupus (SLE)', sp:'msk', syn:['SLE','systemic lupus erythematosus'],
    p:{ o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/lupus-sle/', d:'Versus Arthritis.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/lupus/', d:'NHS overview.' } ] },

  { s:'ankylosing-spondylitis', n:'Ankylosing Spondylitis / Axial Spondyloarthritis', sp:'msk', syn:['AS','axSpA'],
    p:{ o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/axial-spondyloarthritis-axspa-and-ankylosing-spondylitis/', d:'Versus Arthritis.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/ankylosing-spondylitis/', d:'NHS overview.' } ] },

  { s:'psoriatic-arthritis', n:'Psoriatic Arthritis', sp:'msk', syn:['PsA'],
    p:{ o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/psoriatic-arthritis/', d:'Versus Arthritis.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/psoriatic-arthritis/', d:'NHS overview.' } ] },

  { s:'low-back-pain', n:'Low back pain', sp:'msk', syn:['lumbar pain','LBP','mechanical back pain'],
    p:{ o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/back-pain/', d:'Versus Arthritis \u2014 self-management.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/back-pain/', d:'NHS overview.' } ] },

  { s:'sciatica', n:'Sciatica', sp:'msk', syn:['nerve root pain','lumbar radiculopathy'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/sciatica/', d:'NHS overview.' },
    a:[ { o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/sciatica/', d:'Versus Arthritis.' } ] },

  { s:'neck-pain', n:'Neck pain', sp:'msk', syn:['cervical pain'],
    p:{ o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/neck-pain/', d:'Versus Arthritis.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/neck-pain-and-stiffness/', d:'NHS overview.' } ] },

  { s:'shoulder-pain', n:'Shoulder pain (incl. frozen, impingement)', sp:'msk', syn:['frozen shoulder','adhesive capsulitis','rotator cuff','subacromial pain'],
    p:{ o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/shoulder-pain/', d:'Versus Arthritis.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/shoulder-pain/', d:'NHS overview.' } ] },

  { s:'knee-pain', n:'Knee pain', sp:'msk', syn:['patellofemoral pain','runner\u2019s knee'],
    p:{ o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/knee-pain/', d:'Versus Arthritis.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/knee-pain/', d:'NHS overview.' } ] },

  { s:'plantar-fasciitis', n:'Plantar Fasciitis', sp:'msk', syn:['heel pain'],
    p:{ o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/plantar-fasciitis/', d:'Versus Arthritis.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/heel-pain/', d:'NHS overview.' } ] },

  { s:'carpal-tunnel', n:'Carpal Tunnel Syndrome', sp:'msk', syn:['CTS','median nerve entrapment'],
    p:{ o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/carpal-tunnel-syndrome/', d:'Versus Arthritis.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/carpal-tunnel-syndrome/', d:'NHS overview.' } ] },

  { s:'tennis-elbow', n:'Tennis Elbow (lateral epicondylitis)', sp:'msk', syn:['lateral epicondylitis','epicondylitis'],
    p:{ o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/tennis-elbow/', d:'Versus Arthritis.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/tennis-elbow/', d:'NHS overview.' } ] },

  { s:'tendinopathy', n:'Tendinopathy (Achilles, patellar, etc.)', sp:'msk', syn:['tendonitis','tendinitis','achilles'],
    p:{ o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/tendinopathy/', d:'Versus Arthritis.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/achilles-tendinopathy/', d:'NHS overview \u2014 Achilles example.' } ] },

  { s:'bursitis', n:'Bursitis', sp:'msk', syn:['housemaid\u2019s knee','olecranon bursitis','trochanteric'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/bursitis/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/bones-joints-muscles/bursitis-leaflet', d:'Patient.info.' } ] },

  { s:'bunion', n:'Bunions (Hallux Valgus)', sp:'msk', syn:['hallux valgus','big toe'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/bunions/', d:'NHS overview.' },
    a:[ { o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/foot-pain/', d:'Versus Arthritis \u2014 foot pain.' } ] },

  { s:'dupuytrens', n:'Dupuytren\u2019s Contracture', sp:'msk', syn:['hand contracture'],
    p:{ o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/dupuytrens-contracture/', d:'Versus Arthritis.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/dupuytrens-contracture/', d:'NHS overview.' } ] },

  { s:'ganglion', n:'Ganglion Cyst', sp:'msk', syn:['bible cyst','wrist lump'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/ganglion-cyst/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/bones-joints-muscles/ganglion', d:'Patient.info.' } ] },

  { s:'costochondritis', n:'Costochondritis (chest-wall pain)', sp:'msk', syn:['chest wall pain','Tietze'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/costochondritis/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/bones-joints-muscles/chest-pain-non-cardiac/costochondritis', d:'Patient.info.' } ] },

  /* ============ DERMATOLOGY ============ */
  { s:'skin-cyst-lipoma', n:'Skin Cyst & Lipoma', sp:'derm', syn:['sebaceous cyst','epidermoid cyst','lipoma','fatty lump','skin lump'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/skin-cyst/', d:'NHS — epidermoid / sebaceous cyst.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/lipoma/', d:'NHS — lipoma (fatty lump).' } ] },
  { s:'ingrowing-toenail', n:'Ingrown Toenail', sp:'derm', syn:['ingrowing toenail','onychocryptosis','toenail'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/ingrown-toenail/', d:'NHS — self-care + when to see a GP / podiatry.' },
    a:[ { o:'patient', u:'https://patient.info/foot-care/ingrowing-toenails-leaflet', d:'Patient.info.' } ] },
  { s:'eczema', n:'Atopic Eczema', sp:'derm', syn:['atopic dermatitis','dermatitis'],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/atopic-eczema/', d:'BAD PIL \u2014 the dermatology gold standard leaflet.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/atopic-eczema/', d:'NHS overview.' },
        { o:'acne', u:'https://knowyourskin.britishskinfoundation.org.uk/condition/eczema/', d:'British Skin Foundation.' } ] },

  { s:'psoriasis', n:'Psoriasis', sp:'derm', syn:['plaque psoriasis'],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/psoriasis-an-overview/', d:'BAD PIL.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/psoriasis/', d:'NHS overview.' } ] },

  { s:'acne', n:'Acne Vulgaris', sp:'derm', syn:['spots','acne vulgaris'],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/acne-an-overview/', d:'BAD PIL.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/acne/', d:'NHS overview.' } ] },

  { s:'rosacea', n:'Rosacea', sp:'derm', syn:[],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/rosacea/', d:'BAD PIL.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/rosacea/', d:'NHS overview.' } ] },

  { s:'urticaria', n:'Urticaria (Hives)', sp:'derm', syn:['hives'],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/urticaria-and-angioedema/', d:'BAD PIL \u2014 urticaria + angio-oedema.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/hives/', d:'NHS overview.' } ] },

  { s:'fungal-skin', n:'Fungal Skin Infection (Tinea)', sp:'derm', syn:['athlete\u2019s foot','tinea','ringworm'],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/tinea-infections/', d:'BAD PIL.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/ringworm/', d:'NHS overview.' } ] },

  { s:'scabies', n:'Scabies', sp:'derm', syn:[],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/scabies/', d:'BAD PIL.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/scabies/', d:'NHS overview.' } ] },

  { s:'vitiligo', n:'Vitiligo', sp:'derm', syn:[],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/vitiligo/', d:'BAD PIL.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/vitiligo/', d:'NHS overview.' } ] },

  { s:'hidradenitis', n:'Hidradenitis Suppurativa', sp:'derm', syn:['HS'],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/hidradenitis-suppurativa/', d:'BAD PIL.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/hidradenitis-suppurativa/', d:'NHS overview.' } ] },

  { s:'alopecia', n:'Alopecia (hair loss)', sp:'derm', syn:['hair loss','alopecia areata','androgenetic alopecia'],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/alopecia-areata/', d:'BAD PIL \u2014 alopecia areata.' },
    a:[ { o:'alopecia', u:'https://www.alopecia.org.uk/', d:'Alopecia UK \u2014 charity support.' },
        { o:'nhs', u:'https://www.nhs.uk/conditions/hair-loss/', d:'NHS overview.' } ] },

  { s:'molluscum', n:'Molluscum contagiosum', sp:'derm', syn:[],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/molluscum-contagiosum/', d:'BAD PIL.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/molluscum-contagiosum/', d:'NHS overview.' } ] },

  { s:'shingles', n:'Shingles (Herpes Zoster)', sp:'derm', syn:['herpes zoster'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/shingles/', d:'NHS overview.' },
    a:[ { o:'bad', u:'https://www.bad.org.uk/pils/shingles/', d:'BAD PIL.' } ] },

  { s:'warts', n:'Warts & Verrucas', sp:'derm', syn:['verruca','verrucae','plantar wart'],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/viral-warts/', d:'BAD PIL.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/warts-and-verrucas/', d:'NHS overview.' } ] },

  { s:'cellulitis', n:'Cellulitis', sp:'derm', syn:['skin infection','erysipelas'],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/cellulitis-and-erysipelas/', d:'BAD PIL.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/cellulitis/', d:'NHS overview.' } ] },

  { s:'impetigo', n:'Impetigo', sp:'derm', syn:['school sores'],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/impetigo/', d:'BAD PIL.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/impetigo/', d:'NHS overview.' } ] },

  { s:'cold-sores', n:'Cold Sores (Herpes Labialis)', sp:'derm', syn:['herpes labialis','HSV lip'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/cold-sores/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/skin-conditions/cold-sores-leaflet', d:'Patient.info.' } ] },

  { s:'boils', n:'Boils & Abscesses', sp:'derm', syn:['furuncle','carbuncle','skin abscess'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/boils/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/skin-conditions/boils-furuncles-and-carbuncles', d:'Patient.info.' } ] },

  { s:'seborrhoeic-dermatitis', n:'Seborrhoeic Dermatitis & Dandruff', sp:'derm', syn:['dandruff','seborrhoeic eczema'],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/seborrhoeic-dermatitis/', d:'BAD PIL.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/seborrhoeic-dermatitis/', d:'NHS overview.' } ] },

  { s:'hyperhidrosis', n:'Hyperhidrosis (excessive sweating)', sp:'derm', syn:['excessive sweating','sweaty'],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/hyperhidrosis/', d:'BAD PIL.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/excessive-sweating-hyperhidrosis/', d:'NHS overview.' } ] },

  /* ============ MENTAL HEALTH ============ */
  { s:'depression', n:'Depression', sp:'mental', syn:['low mood','clinical depression','MDD','major depression'],
    p:{ o:'mind', u:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/depression/', d:'Mind \u2014 stigma-free, practical, UK\u2019s lead mental-health charity.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/mental-health/conditions/clinical-depression/', d:'NHS Every Mind Matters.' },
        { o:'rcpsych', u:'https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/depression', d:'RCPsych \u2014 clinically anchored.' } ] },

  { s:'anxiety', n:'Generalised Anxiety / Anxiety disorders', sp:'mental', syn:['GAD','anxiety','generalised anxiety'],
    p:{ o:'mind', u:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/anxiety-and-panic-attacks/', d:'Mind.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/mental-health/conditions/generalised-anxiety-disorder/', d:'NHS overview.' },
        { o:'rcpsych', u:'https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/anxiety-panic-and-phobias', d:'RCPsych.' } ] },

  { s:'panic', n:'Panic disorder / Panic attacks', sp:'mental', syn:['panic attacks'],
    p:{ o:'mind', u:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/anxiety-and-panic-attacks/panic-attacks/', d:'Mind.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/mental-health/conditions/panic-disorder/', d:'NHS overview.' } ] },

  { s:'ocd', n:'Obsessive-Compulsive Disorder', sp:'mental', syn:['OCD'],
    p:{ o:'mind', u:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/obsessive-compulsive-disorder-ocd/', d:'Mind.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/mental-health/conditions/obsessive-compulsive-disorder-ocd/', d:'NHS overview.' },
        { o:'rcpsych', u:'https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/obsessive-compulsive-disorder', d:'RCPsych.' } ] },

  { s:'ptsd', n:'PTSD', sp:'mental', syn:['post-traumatic stress disorder'],
    p:{ o:'mind', u:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/post-traumatic-stress-disorder-ptsd-and-complex-ptsd/', d:'Mind.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/mental-health/conditions/post-traumatic-stress-disorder-ptsd/', d:'NHS overview.' } ] },

  { s:'bipolar', n:'Bipolar Disorder', sp:'mental', syn:['manic depression','bipolar affective disorder'],
    p:{ o:'mind', u:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/bipolar-disorder/', d:'Mind.' },
    a:[ { o:'rcpsych', u:'https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/bipolar-disorder', d:'RCPsych.' } ] },

  { s:'schizophrenia', n:'Schizophrenia', sp:'mental', syn:['psychosis'],
    p:{ o:'mind', u:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/schizophrenia/', d:'Mind.' },
    a:[ { o:'rcpsych', u:'https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/schizophrenia', d:'RCPsych.' } ] },

  { s:'adhd-adult', n:'ADHD (adult)', sp:'mental', syn:['attention deficit'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/attention-deficit-hyperactivity-disorder-adhd/', d:'NHS overview.' },
    a:[ { o:'mind', u:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/adhd/', d:'Mind.' },
        { o:'rcpsych', u:'https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/adhd-in-adults', d:'RCPsych.' } ] },

  { s:'eating-disorders', n:'Eating Disorders', sp:'mental', syn:['anorexia','bulimia','BED','binge eating'],
    p:{ o:'rcpsych', u:'https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/eating-disorders', d:'RCPsych \u2014 clinically anchored.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/', d:'NHS overview.' },
        { o:'mind', u:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/eating-problems/', d:'Mind.' } ] },

  { s:'insomnia', n:'Insomnia', sp:'mental', syn:['sleep problems','poor sleep'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/insomnia/', d:'NHS overview \u2014 sleep hygiene.' },
    a:[ { o:'mind', u:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/sleep-problems/', d:'Mind.' } ] },

  { s:'self-harm', n:'Self-harm', sp:'mental', syn:[],
    p:{ o:'mind', u:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/self-harm/', d:'Mind \u2014 non-judgmental, support-focused.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/self-harm/', d:'NHS overview.' } ] },

  { s:'suicide-bereavement', n:'Suicide bereavement / Suicidal thoughts', sp:'mental', syn:['suicide','suicidal'],
    p:{ o:'nhs', u:'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings/help-suicidal-thoughts/', d:'NHS \u2014 immediate help routes.' },
    a:[ { o:'mind', u:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/suicidal-feelings/', d:'Mind.' } ] },

  /* ============ NEUROLOGY ============ */
  { s:'migraine', n:'Migraine', sp:'neuro', syn:['headache'],
    p:{ o:'migraine', u:'https://migrainetrust.org/understand-migraine/', d:'Migraine Trust \u2014 UK lead patient charity.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/migraine/', d:'NHS overview.' } ] },

  { s:'tension-headache', n:'Tension-type headache', sp:'neuro', syn:['tension headache'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/tension-headaches/', d:'NHS overview.' },
    a:[ { o:'migraine', u:'https://migrainetrust.org/understand-migraine/types-of-migraine/other-headache-disorders/tension-type-headache/', d:'Migraine Trust.' } ] },

  { s:'cluster-headache', n:'Cluster headache', sp:'neuro', syn:[],
    p:{ o:'migraine', u:'https://migrainetrust.org/understand-migraine/types-of-migraine/other-headache-disorders/cluster-headache/', d:'Migraine Trust.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/cluster-headaches/', d:'NHS overview.' } ] },

  { s:'epilepsy', n:'Epilepsy', sp:'neuro', syn:['seizures','fits'],
    p:{ o:'epaction', u:'https://www.epilepsy.org.uk/info/', d:'Epilepsy Action \u2014 UK lead patient charity.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/epilepsy/', d:'NHS overview.' } ] },

  { s:'parkinsons', n:'Parkinson\u2019s Disease', sp:'neuro', syn:['PD'],
    p:{ o:'parkinsons', u:'https://www.parkinsons.org.uk/information-and-support/your-magazine/parkinsons-explained', d:'Parkinson\u2019s UK \u2014 UK lead charity.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/parkinsons-disease/', d:'NHS overview.' } ] },

  { s:'ms', n:'Multiple Sclerosis', sp:'neuro', syn:['MS'],
    p:{ o:'mssoc', u:'https://www.mssociety.org.uk/about-ms', d:'MS Society \u2014 UK lead charity.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/multiple-sclerosis/', d:'NHS overview.' } ] },

  { s:'dementia', n:'Dementia (incl. Alzheimer\u2019s)', sp:'neuro', syn:['Alzheimer','vascular dementia','memory loss'],
    p:{ o:'alz', u:'https://www.alzheimers.org.uk/about-dementia/types-dementia', d:'Alzheimer\u2019s Society \u2014 UK lead charity.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/dementia/', d:'NHS overview.' } ] },

  { s:'bells-palsy', n:'Bell\u2019s Palsy', sp:'neuro', syn:['facial palsy'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/bells-palsy/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/brain-nerves/bells-palsy-leaflet', d:'Patient.info.' } ] },

  { s:'trigeminal-neuralgia', n:'Trigeminal Neuralgia', sp:'neuro', syn:['TN'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/trigeminal-neuralgia/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/brain-nerves/trigeminal-neuralgia-leaflet', d:'Patient.info.' } ] },

  { s:'bppv', n:'BPPV (positional vertigo)', sp:'neuro', syn:['benign paroxysmal positional vertigo','vertigo'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/benign-paroxysmal-positional-vertigo-bppv/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/ears-nose-throat-mouth/dizziness/benign-paroxysmal-positional-vertigo-bppv', d:'Patient.info.' } ] },

  { s:'meningitis', n:'Meningitis', sp:'neuro', syn:[],
    p:{ o:'meningitis', u:'https://www.meningitisnow.org/meningitis-explained/', d:'Meningitis Now \u2014 specialist charity.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/meningitis/', d:'NHS overview.' } ] },

  { s:'brain-tumour', n:'Brain Tumour', sp:'neuro', syn:['glioma','meningioma'],
    p:{ o:'brainst', u:'https://www.thebraintumourcharity.org/brain-tumour-diagnosis-treatment/', d:'The Brain Tumour Charity.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/brain-tumours/', d:'NHS overview.' } ] },

  { s:'restless-legs', n:'Restless Legs Syndrome', sp:'neuro', syn:['RLS','Willis-Ekbom'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/restless-legs-syndrome/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/brain-nerves/restless-legs-syndrome-leaflet', d:'Patient.info.' } ] },

  /* ============ WOMEN'S HEALTH ============ */
  { s:'dysmenorrhoea', n:'Period Pain (Dysmenorrhoea)', sp:'women', syn:['painful periods','menstrual cramps','dysmenorrhea','period cramps'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/period-pain/', d:'NHS — self-care, pain relief and when to see a GP.' },
    a:[ { o:'patient', u:'https://patient.info/womens-health/periods-and-period-problems/painful-periods-dysmenorrhoea', d:'Patient.info clinical detail.' } ] },
  { s:'menopause', n:'Menopause & Perimenopause', sp:'women', syn:['perimenopause','HRT'],
    p:{ o:'rcog', u:'https://www.rcog.org.uk/for-the-public/menopause/', d:'RCOG patient information hub.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/menopause/', d:'NHS overview.' },
        { o:'daisynet', u:'https://www.daisynetwork.org/', d:'Daisy Network \u2014 early menopause / POI.' } ] },

  { s:'pmt', n:'PMS / PMDD', sp:'women', syn:['premenstrual syndrome','PMDD','premenstrual tension','PMT'],
    p:{ o:'rcog', u:'https://www.rcog.org.uk/for-the-public/browse-all-patient-information-leaflets/managing-premenstrual-syndrome-pms-patient-information-leaflet/', d:'RCOG patient leaflet.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/pre-menstrual-syndrome/', d:'NHS overview.' } ] },

  { s:'hmb', n:'Heavy Menstrual Bleeding (HMB)', sp:'women', syn:['heavy periods','menorrhagia'],
    p:{ o:'rcog', u:'https://www.rcog.org.uk/for-the-public/browse-all-patient-information-leaflets/heavy-periods/', d:'RCOG patient leaflet.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/heavy-periods/', d:'NHS overview.' } ] },

  { s:'endometriosis', n:'Endometriosis', sp:'women', syn:[],
    p:{ o:'endouk', u:'https://www.endometriosis-uk.org/understanding-endometriosis', d:'Endometriosis UK \u2014 specialist charity.' },
    a:[ { o:'rcog', u:'https://www.rcog.org.uk/for-the-public/browse-all-patient-information-leaflets/endometriosis/', d:'RCOG patient leaflet.' },
        { o:'nhs', u:'https://www.nhs.uk/conditions/endometriosis/', d:'NHS overview.' } ] },

  { s:'fibroids', n:'Uterine Fibroids', sp:'women', syn:['leiomyoma','myoma'],
    p:{ o:'rcog', u:'https://www.rcog.org.uk/for-the-public/browse-all-patient-information-leaflets/uterine-fibroids/', d:'RCOG patient leaflet.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/fibroids/', d:'NHS overview.' } ] },

  { s:'ovarian-cyst', n:'Ovarian Cysts', sp:'women', syn:[],
    p:{ o:'rcog', u:'https://www.rcog.org.uk/for-the-public/browse-all-patient-information-leaflets/ovarian-cysts-before-the-menopause/', d:'RCOG patient leaflet.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/ovarian-cyst/', d:'NHS overview.' } ] },

  { s:'miscarriage', n:'Miscarriage', sp:'women', syn:[],
    p:{ o:'rcog', u:'https://www.rcog.org.uk/for-the-public/browse-all-patient-information-leaflets/early-miscarriage/', d:'RCOG patient leaflet.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/miscarriage/', d:'NHS overview.' } ] },

  { s:'pregnancy', n:'Healthy pregnancy', sp:'women', syn:['antenatal'],
    p:{ o:'nhs', u:'https://www.nhs.uk/pregnancy/', d:'NHS Pregnancy hub.' },
    a:[ { o:'rcog', u:'https://www.rcog.org.uk/for-the-public/pregnancy/', d:'RCOG patient information.' } ] },

  { s:'incontinence', n:'Urinary Incontinence (female)', sp:'women', syn:['stress incontinence','urge incontinence'],
    p:{ o:'bladder', u:'https://www.bladderandboweluk.co.uk/bladder/bladder-conditions/incontinence-in-women/', d:'Bladder & Bowel UK.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/urinary-incontinence/', d:'NHS overview.' } ] },

  { s:'vaginal-thrush', n:'Vaginal Thrush', sp:'women', syn:['candidiasis','candida','yeast infection'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/thrush-in-men-and-women/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/sexual-health/vaginal-discharge-female-discharge/vaginal-thrush-yeast-infection', d:'Patient.info.' } ] },

  { s:'bv', n:'Bacterial Vaginosis', sp:'women', syn:['BV'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/bacterial-vaginosis/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/sexual-health/vaginal-discharge-female-discharge/bacterial-vaginosis', d:'Patient.info.' } ] },

  /* ============ MEN'S HEALTH ============ */
  { s:'bph', n:'Benign Prostatic Hyperplasia', sp:'men', syn:['BPH','enlarged prostate','LUTS'],
    p:{ o:'pcuk', u:'https://prostatecanceruk.org/prostate-information-and-support/prostate-problems/enlarged-prostate', d:'Prostate Cancer UK \u2014 covers benign + cancer.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/prostate-enlargement/', d:'NHS overview.' } ] },

  { s:'ed', n:'Erectile Dysfunction', sp:'men', syn:['impotence','ED'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/erection-problems-erectile-dysfunction/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/mens-health/erectile-dysfunction-impotence', d:'Patient.info.' } ] },

  { s:'prostate-cancer', n:'Prostate Cancer', sp:'men', syn:[],
    p:{ o:'pcuk', u:'https://prostatecanceruk.org/prostate-information-and-support/prostate-cancer', d:'Prostate Cancer UK \u2014 lead patient charity.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/prostate-cancer/', d:'NHS overview.' },
        { o:'macmillan', u:'https://www.macmillan.org.uk/cancer-information-and-support/prostate-cancer', d:'Macmillan.' } ] },

  { s:'testicular-cancer', n:'Testicular Cancer', sp:'men', syn:[],
    p:{ o:'macmillan', u:'https://www.macmillan.org.uk/cancer-information-and-support/testicular-cancer', d:'Macmillan.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/testicular-cancer/', d:'NHS overview.' } ] },

  /* ============ SEXUAL HEALTH ============ */
  { s:'chlamydia', n:'Chlamydia', sp:'sexual', syn:[],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/chlamydia/', d:'NHS overview.' },
    a:[ { o:'brookadv', u:'https://www.brook.org.uk/your-life/chlamydia/', d:'Brook \u2014 under-25s.' } ] },

  { s:'gonorrhoea', n:'Gonorrhoea', sp:'sexual', syn:['the clap'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/gonorrhoea/', d:'NHS overview.' },
    a:[ { o:'brookadv', u:'https://www.brook.org.uk/your-life/gonorrhoea/', d:'Brook.' } ] },

  { s:'syphilis', n:'Syphilis', sp:'sexual', syn:[],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/syphilis/', d:'NHS overview.' },
    a:[ { o:'brookadv', u:'https://www.brook.org.uk/your-life/syphilis/', d:'Brook.' } ] },

  { s:'genital-herpes', n:'Genital Herpes (HSV)', sp:'sexual', syn:['HSV','herpes simplex'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/genital-herpes/', d:'NHS overview.' },
    a:[ { o:'brookadv', u:'https://www.brook.org.uk/your-life/genital-herpes/', d:'Brook.' } ] },

  { s:'genital-warts', n:'Genital Warts / HPV', sp:'sexual', syn:['HPV','condyloma'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/genital-warts/', d:'NHS overview.' },
    a:[ { o:'brookadv', u:'https://www.brook.org.uk/your-life/hpv/', d:'Brook.' } ] },

  { s:'hiv', n:'HIV', sp:'sexual', syn:[],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/hiv-and-aids/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/sexual-health/hiv-and-aids-leaflet', d:'Patient.info.' } ] },

  { s:'contraception', n:'Contraception (overview)', sp:'sexual', syn:['birth control','pill','coil','implant'],
    p:{ o:'fsrh', u:'https://www.fsrh.org/standards-and-guidance/fsrh-clinical-guidance-and-statement/contraception-overview/', d:'FSRH \u2014 UK lead body. Method-by-method.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/contraception/', d:'NHS Contraception Choices hub.' },
        { o:'brookadv', u:'https://www.brook.org.uk/topics/contraception/', d:'Brook.' } ] },

  /* ============ CANCER ============ */
  { s:'breast-cancer', n:'Breast Cancer', sp:'cancer', syn:[],
    p:{ o:'macmillan', u:'https://www.macmillan.org.uk/cancer-information-and-support/breast-cancer', d:'Macmillan.' },
    a:[ { o:'cruk', u:'https://www.cancerresearchuk.org/about-cancer/breast-cancer', d:'Cancer Research UK.' },
        { o:'nhs', u:'https://www.nhs.uk/conditions/breast-cancer/', d:'NHS overview.' } ] },

  { s:'lung-cancer', n:'Lung Cancer', sp:'cancer', syn:[],
    p:{ o:'macmillan', u:'https://www.macmillan.org.uk/cancer-information-and-support/lung-cancer', d:'Macmillan.' },
    a:[ { o:'cruk', u:'https://www.cancerresearchuk.org/about-cancer/lung-cancer', d:'CRUK.' } ] },

  { s:'bowel-cancer', n:'Bowel Cancer (Colorectal)', sp:'cancer', syn:['colorectal cancer','colon cancer'],
    p:{ o:'macmillan', u:'https://www.macmillan.org.uk/cancer-information-and-support/bowel-cancer', d:'Macmillan.' },
    a:[ { o:'cruk', u:'https://www.cancerresearchuk.org/about-cancer/bowel-cancer', d:'CRUK.' } ] },

  { s:'cervical-cancer', n:'Cervical Cancer & Screening', sp:'cancer', syn:['HPV screening','smear'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/cervical-cancer/', d:'NHS overview \u2014 screening pathway.' },
    a:[ { o:'cruk', u:'https://www.cancerresearchuk.org/about-cancer/cervical-cancer', d:'CRUK.' },
        { o:'macmillan', u:'https://www.macmillan.org.uk/cancer-information-and-support/cervical-cancer', d:'Macmillan.' } ] },

  { s:'ovarian-cancer', n:'Ovarian Cancer', sp:'cancer', syn:[],
    p:{ o:'macmillan', u:'https://www.macmillan.org.uk/cancer-information-and-support/ovarian-cancer', d:'Macmillan.' },
    a:[ { o:'cruk', u:'https://www.cancerresearchuk.org/about-cancer/ovarian-cancer', d:'CRUK.' } ] },

  { s:'skin-cancer-bcc', n:'Basal Cell Carcinoma (BCC)', sp:'cancer', syn:['BCC','rodent ulcer'],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/basal-cell-carcinoma/', d:'BAD PIL.' },
    a:[ { o:'cruk', u:'https://www.cancerresearchuk.org/about-cancer/skin-cancer/types/basal-cell-skin-cancer-BCC', d:'CRUK.' } ] },

  { s:'skin-cancer-scc', n:'Squamous Cell Carcinoma (SCC)', sp:'cancer', syn:['SCC'],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/squamous-cell-carcinoma/', d:'BAD PIL.' },
    a:[ { o:'cruk', u:'https://www.cancerresearchuk.org/about-cancer/skin-cancer/types/squamous-cell-skin-cancer-SCC', d:'CRUK.' } ] },

  { s:'melanoma', n:'Melanoma', sp:'cancer', syn:[],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/melanoma-stage-0-in-situ/', d:'BAD PIL.' },
    a:[ { o:'cruk', u:'https://www.cancerresearchuk.org/about-cancer/melanoma', d:'CRUK.' },
        { o:'macmillan', u:'https://www.macmillan.org.uk/cancer-information-and-support/melanoma', d:'Macmillan.' } ] },

  /* ============ EYE ============ */
  { s:'stye-chalazion', n:'Stye & Chalazion', sp:'eye', syn:['stye','chalazion','meibomian cyst','eyelid lump','eyelid bump'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/stye/', d:'NHS — stye self-care.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/chalazion/', d:'NHS — chalazion (meibomian cyst).' } ] },
  { s:'cataracts', n:'Cataracts', sp:'eye', syn:[],
    p:{ o:'rnib', u:'https://www.rnib.org.uk/your-eyes/eye-conditions/eye-conditions-a-z/cataracts/', d:'RNIB.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/cataracts/', d:'NHS overview.' } ] },

  { s:'glaucoma', n:'Glaucoma', sp:'eye', syn:[],
    p:{ o:'glauc', u:'https://glaucoma.uk/about-glaucoma/', d:'Glaucoma UK \u2014 specialist charity.' },
    a:[ { o:'rnib', u:'https://www.rnib.org.uk/your-eyes/eye-conditions/eye-conditions-a-z/glaucoma/', d:'RNIB.' },
        { o:'nhs', u:'https://www.nhs.uk/conditions/glaucoma/', d:'NHS overview.' } ] },

  { s:'amd', n:'Age-related Macular Degeneration', sp:'eye', syn:['AMD','macular degeneration'],
    p:{ o:'macsoc', u:'https://www.macularsociety.org/macular-disease/macular-conditions/age-related-macular-degeneration/', d:'Macular Society.' },
    a:[ { o:'rnib', u:'https://www.rnib.org.uk/your-eyes/eye-conditions/eye-conditions-a-z/age-related-macular-degeneration-amd/', d:'RNIB.' },
        { o:'nhs', u:'https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/', d:'NHS overview.' } ] },

  { s:'dry-eye', n:'Dry Eye / Blepharitis', sp:'eye', syn:['dry eye syndrome','blepharitis','MGD'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/dry-eyes/', d:'NHS overview.' },
    a:[ { o:'rnib', u:'https://www.rnib.org.uk/your-eyes/eye-conditions/eye-conditions-a-z/dry-eye-syndrome/', d:'RNIB.' } ] },

  { s:'conjunctivitis', n:'Conjunctivitis', sp:'eye', syn:['pink eye','red eye'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/conjunctivitis/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/eye-care/red-eye/conjunctivitis', d:'Patient.info.' } ] },

  /* ============ ENT ============ */
  { s:'epistaxis', n:'Nosebleeds (Epistaxis)', sp:'ent', syn:['nosebleed','bleeding nose','epistaxis'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/nosebleed/', d:'NHS — first aid and when to seek help.' },
    a:[ { o:'ent', u:'https://www.entuk.org/patients/conditions/', d:'ENT UK — patient conditions hub (nose).' } ] },
  { s:'tinnitus', n:'Tinnitus', sp:'ent', syn:['ringing in ears'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/tinnitus/', d:'NHS overview.' },
    a:[ { o:'ent', u:'https://www.entuk.org/resources/102/tinnitus_assessment_and_management/', d:'ENT UK \u2014 tinnitus resource.' } ] },

  { s:'meniere', n:'M\u00e9ni\u00e8re\u2019s Disease', sp:'ent', syn:[],
    p:{ o:'vert', u:'https://www.menieres.org.uk/information-and-support/symptoms-and-conditions/menieres-disease', d:'M\u00e9ni\u00e8re\u2019s Society.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/menieres-disease/', d:'NHS overview.' } ] },

  { s:'hearing-loss', n:'Hearing Loss', sp:'ent', syn:['deafness','age-related hearing loss','presbycusis'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/hearing-loss/', d:'NHS overview.' },
    a:[ { o:'ent', u:'https://www.entuk.org/patients/conditions/', d:'ENT UK \u2014 patient conditions hub (hearing).' } ] },

  { s:'sinusitis', n:'Sinusitis', sp:'ent', syn:['rhinosinusitis'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/sinusitis-sinus-infection/', d:'NHS overview.' },
    a:[ { o:'ent', u:'https://www.entuk.org/patients/conditions/', d:'ENT UK \u2014 patient conditions hub (sinus & rhinology).' } ] },

  { s:'tonsillitis', n:'Tonsillitis & Sore Throat', sp:'ent', syn:['sore throat','pharyngitis'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/tonsillitis/', d:'NHS overview.' },
    a:[ { o:'ent', u:'https://www.entuk.org/patients/conditions/', d:'ENT UK \u2014 patient conditions hub (throat).' } ] },

  { s:'earwax', n:'Earwax', sp:'ent', syn:['cerumen','blocked ears'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/earwax-build-up/', d:'NHS overview.' },
    a:[ { o:'ent', u:'https://www.entuk.org/patients/conditions/', d:'ENT UK \u2014 patient conditions hub (ear).' } ] },

  { s:'otitis-externa', n:'Otitis Externa (Swimmer\u2019s Ear)', sp:'ent', syn:['swimmer\u2019s ear'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/outer-ear-infection/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/ears-nose-throat-mouth/ear-pain-earache/ear-infection-otitis-externa', d:'Patient.info.' } ] },

  { s:'otitis-media', n:'Ear Infection (Otitis Media)', sp:'ent', syn:['middle ear infection','glue ear','earache child'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/ear-infections/', d:'NHS overview \u2014 middle-ear infection.' },
    a:[ { o:'patient', u:'https://patient.info/ears-nose-throat-mouth/ear-pain-earache/ear-infection-otitis-media', d:'Patient.info.' } ] },

  { s:'labyrinthitis', n:'Labyrinthitis & Vestibular Neuritis', sp:'ent', syn:['vestibular neuritis','dizziness','vertigo'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/labyrinthitis/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/ears-nose-throat-mouth/dizziness/labyrinthitis-and-vestibular-neuritis', d:'Patient.info.' } ] },

  /* ============ PAEDIATRICS ============ */
  { s:'bronchiolitis', n:'Bronchiolitis', sp:'paeds', syn:['RSV'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/bronchiolitis/', d:'NHS overview.' },
    a:[ { o:'rcpch', u:'https://www.rcpch.ac.uk/resources/bronchiolitis-diagnosis-management-infants', d:'RCPCH.' } ] },

  { s:'croup', n:'Croup', sp:'paeds', syn:[],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/croup/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/childrens-health/cough-in-children/croup', d:'Patient.info.' } ] },

  { s:'gastroenteritis-paeds', n:'Gastroenteritis (children)', sp:'paeds', syn:['D&V','diarrhoea and vomiting'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/diarrhoea-and-vomiting/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/childrens-health/acute-diarrhoea-in-children/gastroenteritis-in-children', d:'Patient.info.' } ] },

  { s:'fever-child', n:'Fever in children', sp:'paeds', syn:['high temperature child','pyrexia'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/fever-in-children/', d:'NHS overview \u2014 traffic light.' },
    a:[ { o:'patient', u:'https://patient.info/childrens-health/fever-in-children-high-temperature', d:'Patient.info.' } ] },

  { s:'chickenpox', n:'Chickenpox', sp:'paeds', syn:['varicella'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/chickenpox/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/childrens-health/chickenpox-leaflet', d:'Patient.info.' } ] },

  { s:'hand-foot-mouth', n:'Hand, Foot & Mouth Disease', sp:'paeds', syn:['HFMD'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/hand-foot-mouth-disease/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/childrens-health/childhood-skin-conditions/hand-foot-and-mouth-disease', d:'Patient.info.' } ] },

  { s:'nappy-rash', n:'Nappy rash', sp:'paeds', syn:[],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/nappy-rash/', d:'NHS overview.' },
    a:[ { o:'bad', u:'https://www.bad.org.uk/pils/napkin-dermatitis-nappy-rash/', d:'BAD PIL.' } ] },

  { s:'immunisations', n:'Childhood Immunisations', sp:'paeds', syn:['vaccinations','vaccines'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/vaccinations/nhs-vaccinations-and-when-to-have-them/', d:'NHS schedule.' },
    a:[ { o:'rcpch', u:'https://www.rcpch.ac.uk/key-topics/immunisation', d:'RCPCH.' } ] },

  { s:'threadworms', n:'Threadworms', sp:'paeds', syn:['pinworm','worms'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/threadworms/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/digestive-health/threadworms-leaflet', d:'Patient.info.' } ] },

  { s:'constipation-children', n:'Constipation in Children', sp:'paeds', syn:['child constipation','soiling','encopresis'],
    p:{ o:'eric', u:'https://eric.org.uk/childrens-bowels/constipation/', d:'ERIC \u2014 children\u2019s bowel & bladder charity.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/baby/health/constipation-in-children/', d:'NHS overview.' } ] },

  { s:'colic-reflux-baby', n:'Colic & Reflux (babies)', sp:'paeds', syn:['infant colic','posseting','baby reflux','GOR'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/baby/health/colic/', d:'NHS \u2014 colic.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/baby/health/reflux-in-babies/', d:'NHS \u2014 reflux in babies.' } ] },

  /* ============ GENERAL SYMPTOMS ============ */
  { s:'fatigue', n:'Tired all the time (TATT)', sp:'general', syn:['fatigue','exhaustion'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/tiredness-and-fatigue/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/signs-symptoms/tiredness-fatigue', d:'Patient.info.' } ] },

  { s:'weight-loss-unintended', n:'Unintentional weight loss', sp:'general', syn:[],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/unintentional-weight-loss/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/signs-symptoms/loss-of-appetite-weight-loss', d:'Patient.info.' } ] },

  { s:'cfs', n:'Chronic Fatigue Syndrome / ME', sp:'general', syn:['ME','CFS','myalgic encephalomyelitis'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/chronic-fatigue-syndrome-cfs/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/signs-symptoms/tiredness-fatigue/chronic-fatigue-syndrome', d:'Patient.info.' } ] },

  { s:'long-covid', n:'Long COVID', sp:'general', syn:['post-COVID syndrome'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/covid-19/long-term-effects-of-covid-19-long-covid/', d:'NHS Long COVID hub.' },
    a:[ { o:'alung', u:'https://www.asthmaandlung.org.uk/conditions/long-covid', d:'Asthma + Lung UK.' } ] },

  { s:'shingles-general', n:'Shingles', sp:'general', syn:[],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/shingles/', d:'NHS overview.' },
    a:[ { o:'bad', u:'https://www.bad.org.uk/pils/shingles/', d:'BAD PIL.' } ] },

  { s:'stop-smoking', n:'Stopping Smoking', sp:'general', syn:['quit smoking','smoking cessation','vaping'],
    p:{ o:'nhs', u:'https://www.nhs.uk/better-health/quit-smoking/', d:'NHS Better Health \u2014 quit tools + local services.' },
    a:[ { o:'patient', u:'https://patient.info/healthy-living/smoking-the-facts', d:'Patient.info.' } ] },

  { s:'alcohol', n:'Cutting Down on Alcohol', sp:'general', syn:['alcohol misuse','drinking','units'],
    p:{ o:'nhs', u:'https://www.nhs.uk/live-well/alcohol-advice/', d:'NHS \u2014 units, risks, cutting down, support.' },
    a:[ { o:'patient', u:'https://patient.info/healthy-living/alcohol-and-sensible-drinking', d:'Patient.info.' } ] },

  { s:'mouth-ulcers', n:'Mouth Ulcers', sp:'general', syn:['aphthous ulcer','canker sore'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/mouth-ulcers/', d:'NHS overview.' },
    a:[ { o:'patient', u:'https://patient.info/signs-symptoms/mouth-ulcers-leaflet', d:'Patient.info.' } ] },

  { s:'carers-support', n:'Support for Carers', sp:'general', syn:['carer','caring for someone','carer support'],
    p:{ o:'carers', u:'https://www.carersuk.org/help-and-advice/', d:'Carers UK \u2014 rights, benefits, support.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/social-care-and-support/support-and-benefits-for-carers/', d:'NHS \u2014 carer\u2019s assessment & benefits.' } ] },

  /* ============ ADDED — common presentations ============ */
  { s:'glandular-fever', n:'Glandular Fever', sp:'general', syn:['infectious mononucleosis','mono','EBV'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/glandular-fever/', d:"NHS — Epstein-Barr virus, self-care, when to seek help." } },
  { s:'giant-cell-arteritis', n:'Giant Cell Arteritis (Temporal Arteritis)', sp:'msk', syn:['temporal arteritis','GCA'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/temporal-arteritis/', d:"NHS — urgent steroids, eyesight warning, links with PMR." } },
  { s:'lyme-disease', n:'Lyme Disease', sp:'general', syn:['tick bite','erythema migrans'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/lyme-disease/', d:"NHS — tick bites, the bullseye rash, treatment." } },
  { s:'postnatal-depression', n:'Postnatal Depression', sp:'mental', syn:['PND','perinatal depression','baby blues'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/post-natal-depression/', d:"NHS — symptoms, treatment and support after birth." } },
  { s:'pelvic-inflammatory-disease', n:'Pelvic Inflammatory Disease (PID)', sp:'women', syn:['PID','salpingitis'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/pelvic-inflammatory-disease-pid/', d:"NHS — causes, antibiotics, fertility implications." } },
  { s:'raynauds', n:'Raynaud\u2019s Phenomenon', sp:'msk', syn:['Raynauds','cold fingers','vasospasm'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/raynauds/', d:"NHS — triggers, self-care and when treatment helps." } },
  { s:'lichen-sclerosus', n:'Lichen Sclerosus', sp:'women', syn:['LS','vulval skin condition'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/lichen-sclerosus/', d:"NHS — genital skin condition, steroid creams, follow-up." } },
  { s:'lichen-planus', n:'Lichen Planus', sp:'derm', syn:['LP'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/lichen-planus/', d:"NHS — skin, mouth and genital lichen planus." } },
  { s:'pilonidal-sinus', n:'Pilonidal Sinus', sp:'gi', syn:['natal cleft cyst'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/pilonidal-sinus/', d:"NHS — natal cleft sinus, infection and surgery." } },
  { s:'whooping-cough', n:'Whooping Cough (Pertussis)', sp:'paeds', syn:['pertussis','100 day cough'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/whooping-cough/', d:"NHS — symptoms, vaccination in pregnancy, when urgent." } },
  { s:'scarlet-fever', n:'Scarlet Fever', sp:'paeds', syn:['scarlatina','strep A'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/scarlet-fever/', d:"NHS — sandpaper rash, antibiotics, school exclusion." } },
  { s:'slapped-cheek', n:'Slapped Cheek Syndrome', sp:'paeds', syn:['fifth disease','parvovirus B19','erythema infectiosum'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/slapped-cheek-syndrome/', d:"NHS — the facial rash, pregnancy precautions." } },
  { s:'bartholins-cyst', n:'Bartholin\u2019s Cyst', sp:'women', syn:['bartholin abscess'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/bartholins-cyst/', d:"NHS — vulval cyst, warm baths, when to treat." } },
  { s:'epididymo-orchitis', n:'Epididymo-orchitis', sp:'men', syn:['epididymitis','testicular pain'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/epididymitis/', d:"NHS — testicular pain & swelling, antibiotics, red flags." } },
  { s:'pre-eclampsia', n:'Pre-eclampsia', sp:'women', syn:['pregnancy high blood pressure','toxaemia'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/pre-eclampsia/', d:"NHS — pregnancy warning signs, monitoring, urgent care." } },
  { s:'premature-ejaculation', n:'Premature Ejaculation', sp:'men', syn:['PE'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/premature-ejaculation/', d:"NHS — causes, techniques and treatment options." } },
  { s:'gilberts-syndrome', n:'Gilbert\u2019s Syndrome', sp:'gi', syn:['raised bilirubin','intermittent jaundice'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/gilberts-syndrome/', d:"NHS — harmless inherited cause of mild jaundice." } },
  { s:'haemochromatosis', n:'Haemochromatosis (Iron Overload)', sp:'gi', syn:['iron overload','HFE'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/haemochromatosis/', d:"NHS — inherited iron overload, venesection, monitoring." } },

  /* ============ ADDED v2 — further common presentations ============ */
  { s:'vertigo', n:'Vertigo (dizziness)', sp:'neuro', syn:['dizziness','spinning','room spinning'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/vertigo/', d:'NHS — causes, self-care and when to seek help.' },
    a:[ { o:'patient', u:'https://patient.info/ears-nose-throat-mouth/dizziness', d:'Patient.info — dizziness overview.' } ] },

  { s:'mastitis', n:'Mastitis & Breastfeeding Problems', sp:'women', syn:['breast infection','blocked duct','breastfeeding pain'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/mastitis/', d:'NHS — breast inflammation/infection, feeding advice, antibiotics.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/start-for-life/baby/feeding-your-baby/breastfeeding/breastfeeding-challenges/', d:'NHS Start for Life — common breastfeeding challenges.' } ] },

  { s:'hyperemesis', n:'Morning Sickness & Hyperemesis', sp:'women', syn:['nausea in pregnancy','vomiting in pregnancy','hyperemesis gravidarum','morning sickness'],
    p:{ o:'nhs', u:'https://www.nhs.uk/pregnancy/related-conditions/common-symptoms/vomiting-and-morning-sickness/', d:'NHS — morning sickness self-care.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/severe-vomiting-in-pregnancy-hyperemesis-gravidarum/', d:'NHS — severe vomiting (hyperemesis gravidarum).' },
        { o:'rcog', u:'https://www.rcog.org.uk/for-the-public/browse-all-patient-information-leaflets/nausea-vomiting-pregnancy-and-hyperemesis-gravidarum-patient-information-leaflet/', d:'RCOG patient leaflet.' } ] },

  { s:'pelvic-organ-prolapse', n:'Pelvic Organ Prolapse', sp:'women', syn:['prolapse','dropped womb','cystocele','vaginal prolapse'],
    p:{ o:'rcog', u:'https://www.rcog.org.uk/for-the-public/browse-all-patient-information-leaflets/pelvic-organ-prolapse-patient-information-leaflet/', d:'RCOG patient leaflet — types, pessaries, surgery.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/pelvic-organ-prolapse/', d:'NHS overview.' } ] },

  { s:'head-lice', n:'Head Lice & Nits', sp:'paeds', syn:['nits','headlice','lice'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/head-lice-and-nits/', d:'NHS — wet-combing and treatment, no school exclusion.' } },

  { s:'oral-thrush', n:'Oral Thrush', sp:'general', syn:['oral candidiasis','mouth thrush','candida mouth'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/oral-thrush-mouth-thrush/', d:'NHS — causes, treatment, when to see a GP.' },
    a:[ { o:'patient', u:'https://patient.info/digestive-health/mouth-ulcers/oral-thrush-yeast-infection', d:'Patient.info.' } ] },

  { s:'lactose-intolerance', n:'Lactose Intolerance', sp:'gi', syn:['dairy intolerance','milk intolerance'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/lactose-intolerance/', d:'NHS — symptoms, diagnosis, managing dairy.' },
    a:[ { o:'guts', u:'https://gutscharity.org.uk/advice-and-information/conditions/lactose-intolerance/', d:'Guts UK.' } ] },

  { s:'acute-bronchitis', n:'Acute Bronchitis (chest infection)', sp:'resp', syn:['chest infection','bronchitis'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/bronchitis/', d:'NHS — self-care, why antibiotics rarely help, when to seek help.' },
    a:[ { o:'alung', u:'https://www.asthmaandlung.org.uk/conditions/chest-infections', d:'Asthma + Lung UK — chest infections.' } ] },

  { s:'laryngitis', n:'Laryngitis & Hoarse Voice', sp:'ent', syn:['hoarse voice','lost voice','voice loss'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/laryngitis/', d:'NHS — voice rest, self-care, red flags for persistent hoarseness.' } },

  { s:'nasal-polyps', n:'Nasal Polyps', sp:'ent', syn:['blocked nose','polyps'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/nasal-polyps/', d:'NHS — steroid sprays, ENT referral.' } },

  { s:'peripheral-neuropathy', n:'Peripheral Neuropathy', sp:'neuro', syn:['nerve damage','diabetic neuropathy','numb feet','tingling feet'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/peripheral-neuropathy/', d:'NHS — causes (incl. diabetes), symptoms, management.' },
    a:[ { o:'diabetesuk', u:'https://www.diabetes.org.uk/about-diabetes/complications/nerves-neuropathy', d:'Diabetes UK — diabetic nerve damage.' } ] },

  { s:'stress', n:'Stress', sp:'mental', syn:['stressed','pressure','burnout'],
    p:{ o:'mind', u:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/stress/', d:'Mind — recognising and managing stress.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/every-mind-matters/mental-health-issues/stress/', d:'NHS Every Mind Matters — practical tools.' } ] },

  { s:'sad', n:'Seasonal Affective Disorder (SAD)', sp:'mental', syn:['winter depression','seasonal depression'],
    p:{ o:'mind', u:'https://www.mind.org.uk/information-support/types-of-mental-health-problems/seasonal-affective-disorder-sad/', d:'Mind.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/mental-health/conditions/seasonal-affective-disorder-sad/', d:'NHS overview.' } ] },

  { s:'bereavement', n:'Grief & Bereavement', sp:'mental', syn:['grief','loss','bereaved'],
    p:{ o:'mind', u:'https://www.mind.org.uk/information-support/guides-to-support-and-services/bereavement/', d:'Mind — coping with grief, where to get support.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/grief-bereavement-loss/', d:'NHS — dealing with grief and loss.' } ] },

  { s:'overactive-bladder', n:'Overactive Bladder & Urgency', sp:'renal', syn:['urge incontinence','urinary urgency','OAB','frequent urination'],
    p:{ o:'bladder', u:'https://www.bladderandboweluk.co.uk/bladder/bladder-conditions/overactive-bladder/', d:'Bladder & Bowel UK — bladder training, lifestyle.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/urinary-incontinence/', d:'NHS — urinary incontinence overview.' } ] },

  { s:'perioral-dermatitis', n:'Perioral Dermatitis', sp:'derm', syn:['rash around mouth'],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/perioral-dermatitis/', d:'BAD PIL — stop topical steroids, treatment.' } },

  { s:'contact-dermatitis', n:'Contact Dermatitis', sp:'derm', syn:['allergic dermatitis','irritant dermatitis','hand eczema'],
    p:{ o:'bad', u:'https://www.bad.org.uk/pils/contact-dermatitis/', d:'BAD PIL — irritant vs allergic, patch testing.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/contact-dermatitis/', d:'NHS overview.' } ] },

  /* ============ ADDED v3 — further common presentations ============ */
  { s:'fungal-nail', n:'Fungal Nail Infection', sp:'derm', syn:['onychomycosis','nail infection','thick toenail','discoloured nail'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/fungal-nail-infection/', d:'NHS — self-care, when antifungal tablets are needed, prevention.' } },

  { s:'actinic-keratosis', n:'Actinic (Solar) Keratosis & Sun Damage', sp:'derm', syn:['solar keratosis','sun damage','actinic keratoses','sunspots'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/actinic-keratoses/', d:'NHS — sun-damage skin patches, treatment, when to get checked.' },
    a:[ { o:'bad', u:'https://www.bad.org.uk/pils/actinic-keratoses/', d:'BAD PIL.' } ] },

  { s:'skin-tags', n:'Skin Tags', sp:'derm', syn:['acrochordon','skin tag'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/skin-tags/', d:'NHS — harmless, removal options, reassurance.' } },

  { s:'pityriasis-versicolor', n:'Pityriasis Versicolor', sp:'derm', syn:['tinea versicolor','fungal patches','skin discolouration'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/pityriasis-versicolor/', d:'NHS — antifungal shampoo/cream, pigment recovery.' } },

  { s:'pompholyx', n:'Pompholyx (Dyshidrotic Eczema)', sp:'derm', syn:['dyshidrotic eczema','hand blisters','foot blisters'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/pompholyx/', d:'NHS — itchy hand/foot blisters, flare management.' } },

  { s:'prostatitis', n:'Prostatitis', sp:'men', syn:['prostate infection','pelvic pain men','prostate inflammation'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/prostatitis/', d:'NHS — acute vs chronic, antibiotics, pain control, red flags.' } },

  { s:'bedwetting', n:'Bedwetting (Nocturnal Enuresis)', sp:'paeds', syn:['nocturnal enuresis','wetting the bed','enuresis'],
    p:{ o:'eric', u:'https://eric.org.uk/childrens-bladders/bedwetting/', d:'ERIC — children’s bladder & bowel charity; alarms, fluids, support.' },
    a:[ { o:'nhs', u:'https://www.nhs.uk/conditions/bedwetting/', d:'NHS overview.' } ] },

  { s:'folliculitis', n:'Folliculitis & Shaving Rash', sp:'derm', syn:['infected hair follicle','shaving rash','razor bumps'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/folliculitis/', d:'NHS — inflamed hair follicles, self-care, when antibiotics help.' } },

  { s:'sunburn', n:'Sunburn & Sun Safety', sp:'derm', syn:['sun burn','UV burn','sun protection'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/sunburn/', d:'NHS — treating sunburn, sunscreen and sun-safety advice.' } },

  { s:'corns-calluses', n:'Corns & Calluses', sp:'msk', syn:['hard skin foot','callous','corn'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/corns-and-calluses/', d:'NHS — causes, self-care, footwear, podiatry.' } },

  { s:'morton-neuroma', n:'Morton’s Neuroma', sp:'msk', syn:['forefoot pain','neuroma','ball of foot pain'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/mortons-neuroma/', d:'NHS — forefoot nerve pain, footwear, treatment options.' },
    a:[ { o:'va', u:'https://versusarthritis.org/about-arthritis/conditions/foot-pain/', d:'Versus Arthritis — foot pain.' } ] },

  { s:'travel-health', n:'Travel Health & Vaccinations', sp:'general', syn:['travel vaccines','travel jabs','malaria prophylaxis','fit to fly'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/travel-vaccinations/', d:'NHS — travel vaccines, malaria prevention, planning ahead.' } },

  { s:'menopause-low-libido', n:'Low Sex Drive (Low Libido)', sp:'sexual', syn:['low libido','loss of sex drive','reduced desire'],
    p:{ o:'nhs', u:'https://www.nhs.uk/conditions/loss-of-libido/', d:'NHS — common causes and what can help.' } },
];
