/* Reasoning GP — Presenting-complaint red-flag library.
   Keyed by presenting complaint. Each flag is written as a NEGATED screening
   line (what a GP documents having checked and excluded). level: 'emergency'
   or '2ww' tags the ones that map to a 999/same-day or NICE NG12 two-week-wait
   pathway. Used by the Consultation Spine to pre-fill the Red flags section the
   moment a complaint is entered, and to offer tappable chips to add more.
   Educational scaffold — verify against NICE NG12 / CKS.

   Entry: keys[] = match strings (lowercase substrings ok); flags[] = {chip, text, level?}.
*/
(function(){
  var C = [];
  function add(keys, flags){ C.push({keys:keys, flags:flags}); }

  add(['headache','head ache'],[
    {chip:'Thunderclap', text:'No thunderclap (sudden, severe, maximal at onset) headache', level:'emergency'},
    {chip:'Meningism', text:'No fever, neck stiffness, photophobia or non-blanching rash', level:'emergency'},
    {chip:'Focal neurology', text:'No new focal neurological deficit, no confusion or reduced GCS', level:'emergency'},
    {chip:'Raised ICP', text:'No headache worse on waking / lying / coughing / straining, no vomiting', level:'emergency'},
    {chip:'GCA (>50)', text:'No scalp tenderness, jaw claudication or visual disturbance (age >50 — GCA)', level:'emergency'},
    {chip:'New >50', text:'No new or changed headache in a patient over 50'},
    {chip:'Immunosupp/cancer', text:'No immunosuppression or known malignancy', level:'2ww'},
    {chip:'Head injury', text:'No recent significant head injury'},
    {chip:'Pregnancy', text:'Not pregnant/postpartum with new severe headache'}
  ]);

  add(['chest pain','chest tightness'],[
    {chip:'ACS', text:'No chest pain at rest, prolonged (>15 min) or rapidly worsening (ACS)', level:'emergency'},
    {chip:'Dissection', text:'No tearing pain radiating to the back (aortic dissection)', level:'emergency'},
    {chip:'PE', text:'No pleuritic pain with breathlessness, haemoptysis or calf swelling (PE)', level:'emergency'},
    {chip:'Haemodynamic', text:'No syncope, sweating, pallor or haemodynamic compromise', level:'emergency'},
    {chip:'Pneumothorax', text:'No sudden pleuritic pain with breathlessness (pneumothorax)', level:'emergency'},
    {chip:'Cardiac sounds', text:'No new murmur or signs of heart failure'}
  ]);

  add(['abdominal pain','abdo pain','tummy pain','stomach pain'],[
    {chip:'Peritonism', text:'No guarding, rigidity or rebound tenderness (peritonitis)', level:'emergency'},
    {chip:'AAA', text:'No sudden severe pain with back/flank radiation or pulsatile mass (AAA)', level:'emergency'},
    {chip:'Ectopic', text:'No pregnancy/possibility of pregnancy with pelvic pain or PV bleeding (ectopic)', level:'emergency'},
    {chip:'Obstruction', text:'No vomiting, distension and absolute constipation (obstruction)', level:'emergency'},
    {chip:'GI bleed', text:'No haematemesis, melaena or rectal bleeding', level:'emergency'},
    {chip:'Abdominal mass', text:'No palpable abdominal or pelvic mass', level:'2ww'},
    {chip:'Weight loss', text:'No unexplained weight loss', level:'2ww'},
    {chip:'Jaundice', text:'No jaundice', level:'2ww'}
  ]);

  add(['back pain','lower back pain','low back pain'],[
    {chip:'Cauda equina', text:'No urinary retention/incontinence, faecal incontinence, saddle anaesthesia or bilateral leg symptoms (cauda equina)', level:'emergency'},
    {chip:'Cord compression', text:'No progressive neurological deficit or gait disturbance', level:'emergency'},
    {chip:'Malignancy', text:'No age >50, weight loss, night pain or history of cancer (metastatic/MSCC)', level:'2ww'},
    {chip:'Infection', text:'No fever, IV drug use or immunosuppression (discitis/abscess)', level:'emergency'},
    {chip:'Fracture', text:'No major trauma, osteoporosis or long-term steroids (fracture)'},
    {chip:'AAA', text:'No tearing/abdominal radiation or pulsatile mass (AAA)', level:'emergency'}
  ]);

  add(['breathless','breathlessness','shortness of breath','dyspnoea','sob'],[
    {chip:'Acute severe', text:'No acute severe breathlessness at rest or inability to speak in sentences', level:'emergency'},
    {chip:'Hypoxia', text:'No cyanosis or low oxygen saturations', level:'emergency'},
    {chip:'PE', text:'No pleuritic pain, haemoptysis or calf swelling (PE)', level:'emergency'},
    {chip:'Cardiac', text:'No chest pain, orthopnoea or signs of heart failure', level:'emergency'},
    {chip:'Anaphylaxis', text:'No stridor, wheeze or swelling after a trigger (anaphylaxis)', level:'emergency'},
    {chip:'Haemoptysis/wt loss', text:'No haemoptysis or weight loss in a smoker over 40 (lung cancer)', level:'2ww'}
  ]);

  add(['cough','persistent cough'],[
    {chip:'Haemoptysis', text:'No haemoptysis', level:'2ww'},
    {chip:'Lung cancer', text:'No unexplained weight loss, chest signs or finger clubbing (age >40 — consider CXR)', level:'2ww'},
    {chip:'Cough >3wk', text:'No cough persisting beyond 3 weeks unexplained (consider CXR)', level:'2ww'},
    {chip:'Acute severe', text:'No breathlessness at rest, hypoxia or systemic sepsis', level:'emergency'},
    {chip:'TB', text:'No night sweats, weight loss or TB risk factors'},
    {chip:'Foreign body', text:'No sudden choking/aspiration event'}
  ]);

  add(['sore throat','throat pain'],[
    {chip:'Airway', text:'No stridor, drooling or difficulty swallowing saliva (epiglottitis)', level:'emergency'},
    {chip:'Quinsy', text:'No trismus, unilateral swelling or deviated uvula (quinsy)', level:'emergency'},
    {chip:'Systemic', text:'No severe systemic illness or dehydration'},
    {chip:'Neutropenia', text:'No DMARD/carbimazole use — agranulocytosis considered (urgent FBC)', level:'emergency'}
  ]);

  add(['dizziness','dizzy','vertigo','lightheaded'],[
    {chip:'Stroke/central', text:'No new focal neurology, ataxia, diplopia, dysarthria or dysphagia (central cause)', level:'emergency'},
    {chip:'Cardiac', text:'No syncope, palpitations or exertional symptoms (arrhythmia)', level:'emergency'},
    {chip:'Sudden deafness', text:'No sudden unilateral hearing loss'},
    {chip:'Hydration/sepsis', text:'No signs of sepsis, GI bleed or significant dehydration'}
  ]);

  add(['fatigue','tiredness','tired all the time','tatt','lethargy'],[
    {chip:'Weight loss', text:'No unexplained weight loss', level:'2ww'},
    {chip:'Anaemia/bleeding', text:'No symptoms of anaemia, rectal bleeding or menorrhagia', level:'2ww'},
    {chip:'Lymphadenopathy', text:'No unexplained lymphadenopathy, bruising or hepatosplenomegaly', level:'2ww'},
    {chip:'Night sweats', text:'No drenching night sweats or fevers'},
    {chip:'Red-flag mood', text:'No active suicidal ideation if low mood present', level:'emergency'}
  ]);

  add(['weight loss','unexplained weight loss'],[
    {chip:'GI cancer', text:'Unexplained weight loss — screen for GI cancer (consider 2WW per NG12)', level:'2ww'},
    {chip:'Dysphagia', text:'No dysphagia', level:'2ww'},
    {chip:'Abdominal mass', text:'No abdominal or pelvic mass', level:'2ww'},
    {chip:'Rectal bleeding', text:'No rectal bleeding or change in bowel habit', level:'2ww'},
    {chip:'Haemoptysis', text:'No haemoptysis or persistent cough', level:'2ww'},
    {chip:'Night sweats/nodes', text:'No night sweats or lymphadenopathy', level:'2ww'}
  ]);

  add(['fever','pyrexia','high temperature'],[
    {chip:'Sepsis', text:'No features of sepsis (tachycardia, hypotension, confusion, mottling)', level:'emergency'},
    {chip:'Meningitis', text:'No neck stiffness, photophobia or non-blanching rash', level:'emergency'},
    {chip:'Neutropenia', text:'No recent chemotherapy / neutropenic sepsis risk', level:'emergency'},
    {chip:'Travel', text:'No recent travel to a malaria/VHF-risk area'},
    {chip:'Source', text:'No focal source needing urgent treatment identified'}
  ]);

  add(['rash','skin rash'],[
    {chip:'Non-blanching', text:'No non-blanching/petechial rash (meningococcal)', level:'emergency'},
    {chip:'Anaphylaxis', text:'No urticaria with lip/tongue swelling or breathing difficulty', level:'emergency'},
    {chip:'SJS/TEN', text:'No mucosal involvement, blistering or skin peeling (SJS/TEN)', level:'emergency'},
    {chip:'Erythroderma', text:'No widespread erythroderma with systemic upset', level:'emergency'},
    {chip:'Suspicious lesion', text:'No suspicious changing pigmented lesion (melanoma)', level:'2ww'}
  ]);

  add(['mole','pigmented lesion','skin lesion','naevus'],[
    {chip:'Melanoma', text:'Changing pigmented lesion — apply weighted 7-point checklist (consider 2WW melanoma)', level:'2ww'},
    {chip:'SCC', text:'No non-healing keratinising or crusted lesion (consider 2WW SCC)', level:'2ww'},
    {chip:'Asymmetry/colour', text:'No new asymmetry, irregular border, colour change, diameter >7mm'}
  ]);

  add(['joint pain','arthralgia','joint swelling'],[
    {chip:'Septic arthritis', text:'No single hot, swollen, acutely painful joint with fever (septic arthritis)', level:'emergency'},
    {chip:'GCA/PMR', text:'No new headache, scalp tenderness or jaw claudication (age >50)', level:'emergency'},
    {chip:'Systemic', text:'No fever, weight loss or rash suggesting systemic inflammatory disease'},
    {chip:'Bone pain', text:'No persistent unexplained bone pain or swelling (consider sarcoma)', level:'2ww'}
  ]);

  add(['dysuria','urinary symptoms','urine infection','uti symptoms'],[
    {chip:'Pyelonephritis', text:'No fever, rigors, loin pain or vomiting (upper UTI)', level:'emergency'},
    {chip:'Sepsis', text:'No signs of urosepsis or new confusion (elderly)', level:'emergency'},
    {chip:'Visible haematuria', text:'No visible haematuria (consider 2WW urological if ≥45)', level:'2ww'},
    {chip:'Pregnancy', text:'Not pregnant / pregnancy status confirmed'},
    {chip:'Retention', text:'No acute urinary retention'}
  ]);

  add(['haematuria','blood in urine'],[
    {chip:'Bladder/renal Ca', text:'Visible haematuria ≥45 (unexplained or persistent after UTI treatment) — 2WW bladder/renal', level:'2ww'},
    {chip:'Non-visible ≥60', text:'Non-visible haematuria ≥60 with dysuria or raised WCC — consider 2WW', level:'2ww'},
    {chip:'Clot retention', text:'No clot retention or inability to pass urine', level:'emergency'},
    {chip:'Sepsis', text:'No fever/loin pain suggesting infection'}
  ]);

  add(['rectal bleeding','pr bleeding','blood in stool'],[
    {chip:'Colorectal Ca', text:'Rectal bleeding — apply NG12 (with weight loss/change in bowel habit/abdo mass, or age threshold) for 2WW colorectal', level:'2ww'},
    {chip:'FIT', text:'Consider FIT testing per NG12 thresholds'},
    {chip:'Massive bleed', text:'No massive rectal bleeding with haemodynamic compromise', level:'emergency'},
    {chip:'Abdominal mass', text:'No abdominal or rectal mass', level:'2ww'},
    {chip:'IDA', text:'No iron-deficiency anaemia', level:'2ww'}
  ]);

  add(['change in bowel habit','altered bowel habit','diarrhoea','constipation'],[
    {chip:'Colorectal Ca', text:'No persistent change in bowel habit with weight loss/bleeding/mass (consider NG12 2WW)', level:'2ww'},
    {chip:'Abdominal mass', text:'No abdominal or rectal mass', level:'2ww'},
    {chip:'IDA', text:'No unexplained iron-deficiency anaemia', level:'2ww'},
    {chip:'Obstruction', text:'No vomiting, distension and absolute constipation (obstruction)', level:'emergency'},
    {chip:'Dehydration', text:'No severe dehydration or systemic sepsis'}
  ]);

  add(['dysphagia','difficulty swallowing','swallowing problems'],[
    {chip:'Oesophageal Ca', text:'Dysphagia at any age — urgent direct-access OGD / 2WW upper GI (NG12)', level:'2ww'},
    {chip:'Weight loss', text:'No associated weight loss', level:'2ww'},
    {chip:'Aspiration', text:'No aspiration, drooling or inability to manage saliva', level:'emergency'},
    {chip:'Neuro', text:'No new neurological cause (stroke/bulbar)', level:'emergency'}
  ]);

  add(['palpitations'],[
    {chip:'Compromise', text:'No syncope, chest pain or breathlessness with palpitations', level:'emergency'},
    {chip:'Sustained tachy', text:'No sustained fast or irregular rhythm with haemodynamic compromise', level:'emergency'},
    {chip:'FH sudden death', text:'No family history of sudden cardiac death / inherited arrhythmia'},
    {chip:'Structural', text:'No known structural heart disease or heart failure'}
  ]);

  add(['collapse','syncope','blackout','loss of consciousness','faint'],[
    {chip:'Cardiac syncope', text:'No exertional syncope, palpitations or chest pain (cardiac cause)', level:'emergency'},
    {chip:'FH sudden death', text:'No family history of sudden cardiac death under 40'},
    {chip:'Seizure', text:'No tongue-biting, incontinence or prolonged post-ictal confusion'},
    {chip:'Injury', text:'No significant head injury sustained', level:'emergency'},
    {chip:'No prodrome', text:'No syncope without warning (suggests arrhythmia)', level:'emergency'}
  ]);

  add(['low mood','depression','anxiety','mental health'],[
    {chip:'Suicide risk', text:'No active suicidal ideation, plan or intent (risk assessed)', level:'emergency'},
    {chip:'Self-neglect', text:'No severe self-neglect or inability to cope', level:'emergency'},
    {chip:'Psychosis', text:'No psychotic features (delusions/hallucinations)', level:'emergency'},
    {chip:'Risk to others', text:'No risk to others or safeguarding concern'},
    {chip:'Bipolar', text:'No history of mania/hypomania (screen for bipolar)'}
  ]);

  add(['leg swelling','swollen leg','calf swelling','oedema'],[
    {chip:'DVT', text:'No unilateral hot, swollen, tender calf (DVT — apply Wells score)', level:'emergency'},
    {chip:'PE', text:'No breathlessness, pleuritic pain or haemoptysis (PE)', level:'emergency'},
    {chip:'Cellulitis', text:'No spreading erythema with fever (cellulitis/sepsis)', level:'emergency'},
    {chip:'Cardiac/renal', text:'No bilateral oedema with breathlessness (heart/renal failure)'}
  ]);

  add(['breast lump','breast pain','breast change'],[
    {chip:'Breast Ca ≥30', text:'Unexplained breast lump age ≥30 — 2WW breast (NG12)', level:'2ww'},
    {chip:'Nipple change ≥50', text:'No nipple discharge/retraction or skin change age ≥50', level:'2ww'},
    {chip:'Axillary lump', text:'No unexplained axillary lump', level:'2ww'},
    {chip:'Inflammatory', text:'No erythema/peau d’orange (inflammatory cancer)', level:'2ww'}
  ]);

  add(['neck lump','lump in neck','swelling in neck'],[
    {chip:'Head & neck Ca', text:'No persistent unexplained neck lump (consider 2WW head & neck)', level:'2ww'},
    {chip:'Thyroid', text:'No rapidly enlarging or fixed thyroid mass', level:'2ww'},
    {chip:'Lymphoma', text:'No persistent lymphadenopathy with night sweats/weight loss', level:'2ww'},
    {chip:'Airway', text:'No stridor or airway compromise', level:'emergency'}
  ]);

  add(['hoarseness','hoarse voice','voice change'],[
    {chip:'Laryngeal Ca', text:'Persistent unexplained hoarseness >3 weeks age ≥45 — 2WW head & neck / CXR (NG12)', level:'2ww'},
    {chip:'Neck lump', text:'No associated neck lump', level:'2ww'},
    {chip:'Airway', text:'No stridor or breathing difficulty', level:'emergency'}
  ]);

  add(['post-menopausal bleeding','postmenopausal bleeding','pmb'],[
    {chip:'Endometrial Ca', text:'Postmenopausal bleeding — 2WW gynaecology for endometrial cancer (NG12)', level:'2ww'},
    {chip:'On HRT', text:'Unscheduled bleeding pattern on HRT documented'}
  ]);

  add(['pv bleeding','vaginal bleeding','intermenstrual bleeding','postcoital bleeding','irregular bleeding'],[
    {chip:'Cervical/endometrial', text:'No persistent intermenstrual/postcoital bleeding (consider examination ± 2WW)', level:'2ww'},
    {chip:'Postmenopausal', text:'No postmenopausal bleeding', level:'2ww'},
    {chip:'Pregnancy/ectopic', text:'Pregnancy excluded if relevant (ectopic)', level:'emergency'},
    {chip:'Haemodynamic', text:'No heavy bleeding with haemodynamic compromise', level:'emergency'}
  ]);

  add(['red eye','eye pain','painful eye'],[
    {chip:'Acute glaucoma', text:'No severe pain, haloes, fixed mid-dilated pupil (acute angle-closure)', level:'emergency'},
    {chip:'Keratitis/CL', text:'No contact-lens-related red eye or corneal involvement (keratitis)', level:'emergency'},
    {chip:'Uveitis', text:'No photophobia, ciliary flush or visual loss (uveitis)', level:'emergency'},
    {chip:'Vision loss', text:'No reduced visual acuity', level:'emergency'},
    {chip:'Penetrating', text:'No history of trauma / penetrating injury', level:'emergency'}
  ]);

  add(['ear pain','earache','otalgia'],[
    {chip:'Mastoiditis', text:'No post-auricular swelling/redness or protruding ear (mastoiditis)', level:'emergency'},
    {chip:'Intracranial', text:'No neck stiffness, severe headache or focal neurology', level:'emergency'},
    {chip:'Necrotising OE', text:'No severe pain in a diabetic/immunocompromised (necrotising otitis externa)', level:'emergency'},
    {chip:'Referred (≥45)', text:'No persistent unexplained otalgia with normal ear (consider head & neck if ≥45)', level:'2ww'}
  ]);

  add(['lump','swelling','mass'],[
    {chip:'Soft-tissue sarcoma', text:'No deep, fixed, rapidly enlarging or >5cm soft-tissue lump (consider 2WW sarcoma)', level:'2ww'},
    {chip:'Lymphadenopathy', text:'No persistent unexplained lymphadenopathy', level:'2ww'},
    {chip:'Inflammatory', text:'No spreading erythema, fever or fluctuance (abscess)', level:'emergency'}
  ]);

  add(['testicular','testicle pain','scrotal','scrotal lump'],[
    {chip:'Torsion', text:'No sudden severe testicular pain (torsion — urgent same-day)', level:'emergency'},
    {chip:'Testicular Ca', text:'No non-tender testicular mass (consider 2WW / urgent USS)', level:'2ww'}
  ]);

  add(['child fever','unwell child','febrile child','child unwell'],[
    {chip:'Sepsis/meningitis', text:'No non-blanching rash, neck stiffness, mottling or parental "very unwell" concern', level:'emergency'},
    {chip:'<3 months', text:'Not <3 months with fever ≥38 (urgent paediatric assessment)', level:'emergency'},
    {chip:'Leukaemia', text:'No unexplained petechiae, hepatosplenomegaly or generalised lymphadenopathy (very urgent FBC — NG12)', level:'2ww'},
    {chip:'Dehydration', text:'No reduced wet nappies, sunken eyes or poor feeding'},
    {chip:'Resp distress', text:'No grunting, recession or cyanosis', level:'emergency'}
  ]);

  add(['vomiting','nausea and vomiting'],[
    {chip:'Obstruction', text:'No bilious vomiting, distension and absolute constipation (obstruction)', level:'emergency'},
    {chip:'Raised ICP', text:'No headache, visual change or neurology (raised ICP)', level:'emergency'},
    {chip:'GI bleed', text:'No haematemesis or coffee-ground vomiting', level:'emergency'},
    {chip:'Dehydration/DKA', text:'No severe dehydration, ketosis or DKA features', level:'emergency'}
  ]);

  window.RGP_COMPLAINT_REDFLAGS = C;
})();
