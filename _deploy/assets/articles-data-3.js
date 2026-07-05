/* Reasoning GP — Articles data (batch 3: M–W)
   Depth: written to the level an expert GP / RCGP examiner expects. */
(function(){
  const A = (window.RGP_ARTICLES = window.RGP_ARTICLES || []);
  A.push(

  { id:'hypotension', title:'Hypotension', category:'Cardiovascular & Renal', icon:'🩺',
    overview:'Low blood pressure (often quoted as <90/60 mmHg) that matters mainly when it is symptomatic or acute. The clinical task is to separate benign or chronic low BP from dangerous acute causes, and to identify reversible drug, volume and postural contributors.',
    features:[
      'Symptomatic: light-headedness, presyncope/syncope, fatigue, blurred vision, falls (especially in older people)',
      'Orthostatic (postural) hypotension: a sustained fall of ≥20 mmHg systolic or ≥10 mmHg diastolic within 3 minutes of standing',
      'Drug causes (the commonest reversible cause): antihypertensives, diuretics, alpha-blockers, nitrates, antidepressants, antipsychotics, opioids',
      'Other causes: dehydration/blood loss, autonomic failure (diabetes, Parkinson\u2019s, PoTS), endocrine (Addison\u2019s disease, hypothyroidism), cardiac (arrhythmia, aortic stenosis, heart failure), sepsis',
      'Acute hypotension with shock features (cool peripheries, tachycardia, confusion, oliguria) is an emergency'],
    management:[
      'Measure lying and standing BP (postural drop) and do a thorough medication review — the highest-yield first step',
      'Treat the underlying cause; rationalise or reduce culprit drugs; correct volume depletion',
      'Conservative measures for orthostatic hypotension: rise slowly, increase fluid and (if appropriate) salt intake, compression stockings, raise the head of the bed, counter-pressure manoeuvres',
      'Investigate persistent/unexplained hypotension: FBC, U&E, glucose/HbA1c, TFT, ECG; 9 am cortisol / short Synacthen if Addison\u2019s suspected',
      'Specialist drug options (e.g. fludrocortisone, midodrine) for refractory autonomic orthostatic hypotension',
      'Address falls risk holistically in older adults',
      'Lying-and-standing BP plus a full medication review is the highest-yield first step — stop/reduce culprit drugs and correct volume before reaching for fludrocortisone/midodrine'],
    referral:[
      'Acute hypotension with shock, sepsis, GI bleeding, or cardiac features → 999/emergency',
      'Recurrent syncope or suspected cardiac cause (exertional syncope, murmur, abnormal ECG, family history of sudden death) → cardiology',
      'Suspected Addison\u2019s disease or autonomic failure → endocrinology / neurology'],
    source:'NICE CKS' },

  { id:'metabolic-syndrome', title:'Metabolic syndrome', category:'Endocrine & metabolic', icon:'⚖️',
    overview:'A clustering of central obesity, dysglycaemia, hypertension and atherogenic dyslipidaemia, underpinned by insulin resistance, that substantially increases the risk of cardiovascular disease and type 2 diabetes. Its value is as a prompt for aggressive, holistic risk-factor management.',
    features:[
      'Central (abdominal) obesity plus ≥2 of: raised triglycerides, low HDL cholesterol, raised blood pressure, raised fasting glucose (IDF/ATP III criteria)',
      'Underlying insulin resistance; strongly associated with non-alcoholic fatty liver disease, PCOS, gout, hyperuricaemia and obstructive sleep apnoea',
      'Predicts incident type 2 diabetes and atherosclerotic cardiovascular disease',
      'Often clinically silent until a component (diabetes, CVD event) declares itself',
      'Look for clues: acanthosis nigricans, raised waist circumference, fatty liver on imaging, hypertension in a younger patient'],
    management:[
      'Lifestyle change is the foundation: sustained weight loss (≥5–10%), a Mediterranean-style diet, regular physical activity (≥150 min/week), smoking cessation and alcohol reduction',
      'Assess and treat each component to target: blood pressure (NICE thresholds), lipids with a formal QRISK assessment and a statin where indicated, and dysglycaemia (HbA1c)',
      'Calculate cardiovascular risk and treat accordingly; manage impaired glucose regulation/pre-diabetes with structured lifestyle programmes (e.g. NHS Diabetes Prevention Programme)',
      'Screen for and manage associated conditions: NAFLD (FIB-4/fibrosis assessment), OSA (STOP-Bang), PCOS, gout',
      'Consider weight-management pharmacotherapy (e.g. GLP-1 receptor agonists where eligible) and structured weight-management services',
      'Reinforce and review regularly — behaviour change is the hardest and most effective intervention',
      'Treat each component to target — QRISK-guided statin, BP per NICE, HbA1c — and refer pre-diabetes to the NHS Diabetes Prevention Programme; review at least annually'],
    referral:[
      'Established type 2 diabetes or cardiovascular disease → relevant disease pathways',
      'Refractory or complex obesity → tier-3 weight-management / specialist services (and bariatric pathways where eligible)',
      'Significant NAFLD/fibrosis, complex dyslipidaemia, or OSA → relevant specialist'],
    source:'NICE CKS / NICE CVD risk (CG181) & obesity guidance' },

  { id:'miscarriage', title:'Miscarriage', category:'Women\u2019s health', icon:'🤍',
    overview:'Loss of pregnancy before 24 weeks, most commonly in the first trimester. Management combines compassionate, sensitive support with prompt, safe assessment through early-pregnancy services — and always keeping ectopic pregnancy in mind.',
    features:[
      'Vaginal bleeding with or without pain in early pregnancy; clinical types: threatened, inevitable, incomplete, missed (delayed) and complete',
      'Assess haemodynamic stability, the amount and rate of bleeding, and pain',
      'Always consider ectopic pregnancy — unilateral/pelvic pain, shoulder-tip pain, dizziness/collapse, or diarrhoea/rectal pressure with a positive pregnancy test',
      'Recurrent miscarriage = three or more consecutive losses, warranting investigation',
      'Significant psychological impact — grief, anxiety in future pregnancies'],
    management:[
      'Refer to the Early Pregnancy Assessment Unit (EPAU) for confirmation by transvaginal ultrasound ± serial serum hCG',
      'Once confirmed, offer management options: expectant (watchful waiting), medical (misoprostol ± mifepristone), or surgical management — guided by patient choice, gestation and clinical picture',
      'Give anti-D immunoglobulin where indicated (e.g. surgical management/heavier bleeding in rhesus-negative women per local policy)',
      'Provide clear safety-netting (heavy bleeding, pain, fever, signs of sepsis) and analgesia',
      'Offer written information, emotional support and access to bereavement services; advise on timing of and support in future pregnancy',
      'Arrange investigations after recurrent miscarriage and offer early reassurance scanning in subsequent pregnancies',
      'Always keep ectopic in mind — a positive test with pain/dizziness needs urgent EPAU; give anti-D where indicated, with clear bleeding/sepsis safety-netting and bereavement support'],
    referral:[
      'Haemodynamic instability or heavy bleeding → 999 / emergency gynaecology',
      'Suspected ectopic pregnancy → urgent EPAU / gynaecology assessment',
      'Confirmed or suspected miscarriage → EPAU; recurrent miscarriage (≥3) → recurrent-miscarriage specialist service'],
    source:'NICE NG126' },

  { id:'necrotising-fasciitis', title:'Necrotising fasciitis', category:'Infectious diseases', icon:'🚨',
    overview:'A rapidly progressive, life-threatening necrotising soft-tissue infection — a surgical emergency where survival depends on early recognition and immediate debridement. The cardinal early clue is pain out of proportion to the visible skin signs.',
    features:[
      'Severe pain disproportionate to the skin appearance, progressing rapidly over hours',
      'Skin evolution: erythema → dusky/purple discolouration → blistering/bullae → skin anaesthesia and crepitus (gas)',
      'Systemic toxicity: high fever or hypothermia, tachycardia, hypotension, confusion — i.e. sepsis',
      'Risk factors: diabetes, immunosuppression, peripheral vascular disease, recent surgery or trauma, injecting drug use, obesity; Fournier\u2019s gangrene affects the perineum',
      'Investigations (do not delay treatment): markedly raised inflammatory markers/CK; the LRINEC score may support suspicion but a normal score does not exclude it'],
    management:[
      'Recognise early and do NOT delay — this is time-critical',
      'Immediate 999 / emergency admission for urgent surgical debridement, broad-spectrum IV antibiotics and aggressive resuscitation under critical care',
      'While arranging transfer: mark the leading edge of erythema and document the time to track progression, give high-flow oxygen and IV access if equipped, and communicate the degree of concern explicitly',
      'Maintain a high index of suspicion in any "cellulitis" with pain out of proportion, rapid progression, or systemic toxicity',
      'Do not attempt outpatient management or arrange routine review',
      'Pain out of proportion to the skin = call 999 now; mark the erythema edge with the time, give high-flow oxygen/IV access if equipped, and state your concern explicitly to the surgical team'],
    referral:[
      'Any suspicion → immediate emergency admission (surgery + critical care)',
      'Never arrange outpatient review — emergency referral only'],
    source:'NICE CKS / Sepsis (NG51)' },

  { id:'night-terrors-nightmares', title:'Night terrors and nightmares', category:'Paediatrics', icon:'🌙',
    overview:'Common, usually benign childhood sleep phenomena. Night terrors are a non-REM parasomnia of partial arousal with apparent terror and no recall; nightmares are frightening REM dreams from which the child wakes and remembers. Reassurance and good sleep hygiene are the mainstays.',
    features:[
      'Night terrors: occur in the first third of the night (deep non-REM sleep); the child screams and appears terrified, is not consolable and not truly awake, and has no memory of it next day',
      'Nightmares: occur in the later part of the night (REM); the child wakes fully, recalls the frightening dream and is reassurable',
      'Night terrors peak in pre-school/early-school children and are usually outgrown; a positive family history is common',
      'Triggers: sleep deprivation, irregular routine, fever/illness, stress and a full bladder',
      'Distinguish from nocturnal seizures (stereotyped, brief, may have daytime features)'],
    management:[
      'Reassure that both are common, benign and self-limiting; explain the difference',
      'Optimise sleep hygiene: consistent routine, adequate sleep duration, wind-down time, and avoidance of frightening media before bed',
      'Night terrors: keep the child safe, do not try to wake or restrain them, and consider scheduled awakenings (waking the child briefly ~15 minutes before the usual time) if episodes are frequent and predictable',
      'Nightmares: comfort and reassure at the time; explore and address daytime stressors and anxieties',
      'Review the sleep environment and reduce overtiredness, which worsens night terrors',
      'Reassure both are benign and self-limiting; for frequent predictable terrors try scheduled awakenings ~15 min before onset; for nightmares address daytime stressors'],
    referral:[
      'Frequent, violent, or injurious episodes, daytime symptoms, or features suggesting seizures → paediatrics',
      'Significant distress, recurrent nightmares with a possible underlying trauma or anxiety disorder → child mental-health services'],
    source:'NICE CKS' },

  { id:'pagets-bone', title:'Paget\u2019s disease of bone', category:'Musculoskeletal', icon:'🦴',
    overview:'A disorder of excessive and disorganised bone remodelling producing enlarged, structurally weak bone. It is often asymptomatic and detected via an isolated raised alkaline phosphatase or an incidental X-ray finding; treatment targets bone pain and complications.',
    features:[
      'Often asymptomatic; when symptomatic — localised bone pain, deformity (e.g. bowing of the tibia), and warmth over the affected bone (increased vascularity)',
      'Biochemistry: isolated raised alkaline phosphatase with normal calcium and phosphate (in uncomplicated disease)',
      'Commonly affects the pelvis, skull, spine, femur and tibia',
      'X-rays show characteristic changes (lytic and sclerotic areas, cortical thickening, bone expansion); an isotope bone scan defines extent',
      'Complications: pathological fracture, secondary osteoarthritis, deafness (skull/ossicle involvement), nerve compression/spinal stenosis, high-output cardiac state (extensive disease), and rarely osteosarcoma'],
    management:[
      'Confirm with the typical biochemical and radiological pattern; isotope bone scan to map disease extent',
      'Bisphosphonates (e.g. a single IV zoledronate infusion) for bone pain or to control metabolically active disease — ensure replete calcium and vitamin D first to avoid hypocalcaemia',
      'Analgesia for bone pain; manage secondary osteoarthritis conventionally',
      'Monitor treatment response with alkaline phosphatase',
      'Manage complications: audiology for hearing loss, orthopaedics for deformity/fracture, and neurosurgery/spinal input for compression',
      'Isolated raised ALP with normal calcium/phosphate is the clue; replete calcium/vitamin D first, then a single IV zoledronate for bone pain, and track response with ALP'],
    referral:[
      'Bone pain, complications (fractures, deafness, neurological compression) or diagnostic uncertainty → rheumatology / metabolic bone service',
      'A sudden increase in pain, swelling or a new mass in affected bone → urgent assessment to exclude osteosarcoma',
      'Skull or spinal involvement with neurological features → urgent specialist referral'],
    source:'NICE CKS' },

  { id:'pms', title:'Premenstrual syndrome (PMS)', category:'Women\u2019s health', icon:'🌸',
    overview:'Cyclical psychological, physical and behavioural symptoms occurring in the luteal phase and resolving with menstruation. The severe form, premenstrual dysphoric disorder (PMDD), causes marked mood disturbance and functional impairment.',
    features:[
      'Psychological (irritability, low mood, anxiety, tension), physical (bloating, breast tenderness, headache) and behavioural symptoms',
      'Key timing: symptoms occur in the luteal phase and resolve at or shortly after the onset of menstruation, with a symptom-free week — confirmed by a prospective symptom diary',
      'PMDD: severe, predominantly mood symptoms with significant impairment of relationships, work or daily function',
      'Distinguish from premenstrual exacerbation of an underlying mood or other disorder'],
    management:[
      'Confirm the diagnosis with a prospective symptom diary over at least two cycles',
      'Lifestyle and general measures: regular exercise, sleep, stress reduction; CBT has good evidence',
      'First-line for moderate–severe PMS/PMDD: a combined hormonal contraceptive (often a drospirenone-containing pill, taken continuously) and/or an SSRI (given either continuously or only in the luteal phase)',
      'SSRIs work rapidly for PMS/PMDD — luteal-phase dosing is an effective option',
      'Ensure adequate management of any physical symptoms; consider vitamin/mineral approaches cautiously (limited evidence)',
      'Escalation (specialist): continuous/higher-dose SSRI, estradiol (patches/gel) with progestogen protection, or GnRH analogues with add-back HRT',
      'Confirm with a 2-cycle prospective diary; first-line is a continuous drospirenone-containing COC and/or an SSRI (continuous or luteal-phase) — SSRIs act within days, so luteal dosing works'],
    referral:[
      'Severe or refractory PMS/PMDD not responding to first-line treatment → gynaecology / specialist PMS service',
      'Diagnostic uncertainty or an underlying mood disorder → mental-health services',
      'Considering GnRH analogues or surgical options → specialist'],
    source:'NICE CKS / RCOG Green-top guidance' },

  { id:'pkd', title:'Polycystic kidney disease', category:'Cardiovascular & Renal', icon:'🫘',
    overview:'An inherited (usually autosomal-dominant) disorder characterised by progressive renal cyst formation with declining kidney function, hypertension, and important extrarenal features — notably intracranial (berry) aneurysms.',
    features:[
      'Hypertension (often at a young age), haematuria, loin/flank pain, palpable enlarged kidneys, and recurrent UTIs or cyst infections',
      'Progressive chronic kidney disease, often reaching end-stage by middle age; strong family history (autosomal dominant)',
      'Extrarenal features: hepatic (and other) cysts, intracranial berry aneurysms (subarachnoid haemorrhage risk), mitral valve prolapse, and abdominal wall hernias',
      'ADPKD typically presents in adulthood; the rarer autosomal-recessive form presents in childhood',
      'Diagnosis by ultrasound (age-adjusted cyst criteria) ± genetic testing'],
    management:[
      'Rigorous blood-pressure control is central, usually with an ACE inhibitor or ARB; manage CKD per the CKD pathway (and avoid nephrotoxins)',
      'Refer to nephrology for diagnosis, monitoring and consideration of tolvaptan in eligible adults with rapidly progressing disease',
      'Offer family screening and genetic counselling for first-degree relatives',
      'Manage pain and treat cyst infections/UTIs (lipophilic antibiotics penetrate cysts better); ensure good hydration',
      'Discuss intracranial aneurysm screening (MR angiography) in those with a family history of aneurysm/SAH or high-risk occupations',
      'Tight BP control with an ACEi/ARB plus CKD-pathway care is central; refer nephrology (tolvaptan if rapidly progressing), screen first-degree relatives, and treat cyst infections with lipophilic antibiotics'],
    referral:[
      'Confirmed or suspected ADPKD → nephrology',
      'Sudden severe "thunderclap" headache → 999 (possible aneurysm rupture/SAH)',
      'Rapid progression, complications, tolvaptan eligibility, or transplant/dialysis planning → specialist'],
    source:'NICE CKS / renal association guidance' },

  { id:'postnatal-depression', title:'Postnatal depression', category:'Mental health', icon:'🍼',
    overview:'A depressive episode arising within the first year after birth — common, treatable, and important to detect for the wellbeing of both parent and infant. It must be distinguished from transient "baby blues" and, crucially, from postpartum psychosis, which is a psychiatric emergency.',
    features:[
      'Persistent low mood, anhedonia, tearfulness, guilt (often about parenting), poor sleep beyond what the baby explains, and poor concentration',
      'Onset within 12 months postpartum; impairs functioning and mother–infant bonding',
      'Screen with the Whooley questions and/or the Edinburgh Postnatal Depression Scale (EPDS); always ask about thoughts of self-harm and thoughts of harming the baby',
      'Baby blues: transient, peaks around days 3–5, resolves within ~2 weeks, no treatment needed',
      'Postpartum psychosis (EMERGENCY): rapid onset of mania, psychosis, severe confusion or disorganisation — higher risk with bipolar disorder or a previous episode'],
    management:[
      'Validate and assess severity and risk (to self and to the infant); ask directly about suicidal and infanticidal thoughts',
      'Mild–moderate: guided self-help/CBT, social support, health-visitor input, and practical support with sleep and the baby',
      'Moderate–severe: psychological therapy plus an antidepressant — sertraline is commonly chosen and is compatible with breastfeeding; do not discourage breastfeeding without good reason',
      'Involve perinatal mental-health services for moderate–severe illness, complex history, or medication decisions in pregnancy/breastfeeding',
      'Support bonding, partner/family involvement, and address sleep; arrange clear follow-up',
      'Have a low threshold for safeguarding consideration where the infant\u2019s care may be affected',
      'Screen with Whooley/EPDS and always ask about thoughts of self-harm and of harming the baby; sertraline is first-line and breastfeeding-compatible — do not discourage breastfeeding',
      'Postpartum psychosis (mania, severe confusion, psychosis) is a psychiatric emergency → same-day perinatal/crisis assessment'],
    referral:[
      'Suspected postpartum psychosis (mania, psychosis, severe confusion), or any risk to self or baby → emergency / urgent perinatal mental-health assessment',
      'Moderate–severe or treatment-refractory depression → perinatal mental-health service',
      'Any safeguarding concern → safeguarding pathway'],
    source:'NICE CG192 (antenatal & postnatal mental health)' },

  { id:'pots', title:'Postural tachycardia syndrome (PoTS)', category:'Cardiovascular & Renal', icon:'🫀',
    overview:'A form of orthostatic intolerance defined by a sustained, excessive heart-rate rise on standing without significant orthostatic hypotension, with symptoms relieved by lying down. It is under-recognised, commoner in young women, and frequently overlaps with hypermobility.',
    features:[
      'On standing: palpitations, light-headedness, fatigue, "brain fog", tremulousness, breathlessness and sometimes presyncope — relieved by lying down',
      'Diagnostic heart-rate rise: ≥30 bpm in adults (≥40 bpm in those aged 12–19) within 10 minutes of standing, WITHOUT a significant BP drop',
      'Symptoms sustained for ≥3 months; confirmed on an active stand test or tilt-table test',
      'Associations: joint hypermobility/EDS, autoimmune conditions, and post-viral onset (including post-COVID)',
      'Exclude mimics: anaemia, thyrotoxicosis, dehydration, arrhythmia, phaeochromocytoma, and deconditioning'],
    management:[
      'Confirm with an active stand test and exclude other causes (FBC, TFT, ECG; consider further tests as guided)',
      'Non-pharmacological measures first: increase fluid intake (2–3 L/day) and salt (if appropriate), waist-high compression garments, and a graded, recumbent-based reconditioning exercise programme; avoid triggers (heat, large carbohydrate meals, alcohol, prolonged standing)',
      'Counter-manoeuvres and slow positional changes; raise the head of the bed',
      'Pharmacological options are specialist-guided: low-dose beta-blocker or ivabradine for tachycardia, fludrocortisone or midodrine for volume/vasoconstriction',
      'Manage associated conditions and symptoms — hypermobility, fatigue, migraine, anxiety',
      'Provide education and signpost reputable resources (PoTS UK)',
      'Confirm with an active stand test (HR rise ≥30 bpm, no significant BP drop) and exclude anaemia/thyroid/arrhythmia; first-line is fluids 2–3 L/day, salt, compression and recumbent reconditioning before any drug'],
    referral:[
      'Diagnostic uncertainty or symptoms refractory to first-line measures → cardiology / autonomic specialist',
      'Significant functional impairment → specialist MDT',
      'Red-flag cardiac features (exertional syncope, structural heart disease, family history of sudden death) → cardiology'],
    source:'NICE CKS / PoTS UK & Heart Rhythm Society guidance' },

  { id:'pre-eclampsia', title:'Pre-eclampsia', category:'Women\u2019s health', icon:'🤰',
    overview:'A multisystem disorder of pregnancy after 20 weeks defined by new-onset hypertension with proteinuria or other maternal organ dysfunction. It is potentially life-threatening to mother and baby and demands urgent assessment — definitive treatment is delivery.',
    features:[
      'New hypertension after 20 weeks plus proteinuria and/or maternal organ dysfunction (renal, hepatic, neurological, haematological) or uteroplacental dysfunction',
      'Symptoms of severity: severe or persistent frontal headache, visual disturbance (flashing lights, blurring), epigastric or right-upper-quadrant pain, vomiting, and sudden facial/hand/foot oedema',
      'Signs of severity: BP ≥160/110, brisk reflexes/clonus, reduced urine output, reduced fetal movements; HELLP syndrome (haemolysis, elevated liver enzymes, low platelets)',
      'Eclampsia = tonic-clonic seizures on the background of pre-eclampsia (emergency)',
      'Risk factors prompting aspirin prophylaxis: prior pre-eclampsia, chronic hypertension, CKD, diabetes, autoimmune disease, and combinations of moderate risk factors'],
    management:[
      'Check blood pressure and urine (proteinuria) at every antenatal contact and act urgently on symptoms',
      'Suspected pre-eclampsia → arrange same-day obstetric assessment; do not attempt to manage in primary care',
      'Offer low-dose aspirin from 12 weeks until birth to women at high or moderate risk (preventive role)',
      'Understand the hospital pathway: antihypertensives (e.g. labetalol, nifedipine), magnesium sulfate for seizure prevention/treatment, fetal monitoring, and timing of delivery as definitive treatment',
      'Counsel about recurrence risk and longer-term cardiovascular risk at postnatal review',
      'Check BP + urine at every antenatal contact; new headache/visual symptoms/epigastric pain or BP ≥160/110 = same-day maternity (emergency); offer aspirin 75–150 mg from 12 weeks to at-risk women'],
    referral:[
      'Suspected pre-eclampsia → urgent same-day maternity assessment',
      'Severe features (BP ≥160/110, severe headache or visual symptoms, epigastric pain, marked oedema) → emergency admission',
      'Seizure (eclampsia) → 999'],
    source:'NICE NG133' },

  { id:'reactive-arthritis', title:'Reactive arthritis', category:'Musculoskeletal', icon:'🦵',
    overview:'A sterile inflammatory arthritis triggered by a recent gastrointestinal or genitourinary infection, belonging to the seronegative spondyloarthritis family. It is usually self-limiting but septic arthritis must always be excluded first.',
    features:[
      'Asymmetrical, predominantly lower-limb large-joint arthritis developing 1–4 weeks after a GI (e.g. Salmonella, Shigella, Campylobacter) or GU (Chlamydia) infection',
      'Extra-articular features: enthesitis (e.g. Achilles), dactylitis ("sausage digit"), conjunctivitis or anterior uveitis, urethritis, and skin/nail changes (keratoderma blennorrhagica, circinate balanitis)',
      'Often HLA-B27 associated; the historical "can\u2019t see, can\u2019t pee, can\u2019t climb a tree" triad',
      'A hot, swollen joint with fever must be treated as septic arthritis until proven otherwise',
      'Usually resolves over weeks to months, though a minority become chronic or recurrent'],
    management:[
      'Exclude septic arthritis first — a single acutely hot, swollen joint with systemic upset needs urgent assessment and joint aspiration',
      'NSAIDs are first-line for symptom control; intra-articular corticosteroid injection helps a persistent monoarthritis (once infection excluded)',
      'Identify and treat the triggering infection — e.g. confirmed chlamydia with appropriate antibiotics and partner notification via GUM (the arthritis itself is sterile and not cured by antibiotics)',
      'Physiotherapy to maintain function; most cases settle with time',
      'Persistent disease may need DMARDs (e.g. sulfasalazine) under rheumatology',
      'Exclude septic arthritis first (hot joint + fever → urgent aspiration); NSAIDs first-line ± intra-articular steroid once infection excluded; treat the trigger (e.g. chlamydia + partner notification via GUM)'],
    referral:[
      'A hot, swollen joint with fever → urgent assessment to exclude septic arthritis',
      'Persistent, recurrent or severe arthritis → rheumatology',
      'Eye involvement suggesting anterior uveitis (painful red eye, photophobia, blurred vision) → same-day ophthalmology'],
    source:'NICE CKS' },

  { id:'shoulder-impingement', title:'Shoulder impingement (subacromial pain syndrome)', category:'Musculoskeletal', icon:'💪',
    overview:'Pain arising from the rotator-cuff and subacromial structures, provoked by overhead and abduction movements. It is one of the commonest causes of shoulder pain and is managed conservatively in the great majority of cases.',
    features:[
      'Pain on overhead activity and abduction, with a painful arc typically between 60° and 120°',
      'Pain lying on the affected shoulder at night; pain often referred to the lateral upper arm',
      'Weakness raises the possibility of a rotator-cuff tear (especially with trauma, age >60, or marked night pain)',
      'Positive impingement tests (Neer, Hawkins-Kennedy); passive range usually preserved early (helps distinguish from frozen shoulder, where passive movement is restricted)',
      'Consider differentials: frozen shoulder, acromioclavicular joint pathology, glenohumeral OA, cervical radiculopathy, and referred pain'],
    management:[
      'Relative rest and activity modification (avoid aggravating overhead tasks), with analgesia (paracetamol/NSAID)',
      'Physiotherapy — rotator-cuff and scapular stabilisation exercises — is the mainstay and the most effective intervention',
      'A subacromial corticosteroid injection can reduce pain enough to engage with rehabilitation if exercises alone are insufficient',
      'Reassure that most cases improve over weeks to a few months with conservative management',
      'Address ergonomic and occupational factors',
      'Physiotherapy (rotator-cuff and scapular exercises) is the most effective treatment; add a subacromial steroid injection to enable rehab; reassure most settle over weeks–months'],
    referral:[
      'Suspected full-thickness rotator-cuff tear (significant weakness, acute trauma, persistent night pain) → physiotherapy/orthopaedics ± ultrasound/MRI',
      'No improvement despite conservative care including physiotherapy ± injection → orthopaedics/MSK service',
      'Red flags (mass, significant trauma, suspected instability/dislocation, or constitutional symptoms) → appropriate urgent referral'],
    source:'NICE CKS — Shoulder pain' },

  { id:'skin-picking', title:'Skin picking disorder (excoriation)', category:'Mental health', icon:'🧠',
    overview:'A body-focused repetitive behaviour involving recurrent picking at one\u2019s own skin resulting in lesions, with repeated unsuccessful attempts to stop. It sits within the OCD-related spectrum and frequently coexists with other mental-health conditions.',
    features:[
      'Recurrent skin picking causing tissue damage, scarring or infection, often at perceived blemishes or irregularities',
      'Repeated attempts to reduce or stop the behaviour; clinically significant distress or impairment',
      'Picking may be automatic (out of awareness) or focused (in response to urges, tension or emotional states)',
      'High comorbidity with anxiety, depression, OCD and body dysmorphic disorder (consider BDD if picking is driven by appearance preoccupation)',
      'Exclude dermatological and systemic causes of itch/lesions that drive secondary picking'],
    management:[
      'Validate the difficulty and assess comorbidity (especially BDD, OCD, anxiety, depression)',
      'First-line: habit-reversal training / CBT (awareness training, competing responses, stimulus control)',
      'Consider an SSRI where there is comorbid depression/anxiety/OCD or where psychological therapy is insufficient',
      'Practical measures: keep nails short, use fidget alternatives, barriers/dressings over target sites, and good skin care for existing lesions',
      'Treat secondary infection and address scarring concerns sensitively',
      'First-line is habit-reversal training/CBT; add an SSRI if comorbid OCD/anxiety/depression; screen for BDD if picking is appearance-driven; short nails and barriers help'],
    referral:[
      'Severe, refractory, or significantly comorbid cases → psychology / mental-health services',
      'Significant skin damage or recurrent infection → dermatology / appropriate wound care',
      'Marked impairment or risk → mental-health services'],
    source:'NICE CKS' },

  { id:'spondylolisthesis', title:'Spondylolisthesis', category:'Musculoskeletal', icon:'🦴',
    overview:'Forward slip of one vertebral body on the one below (most commonly L5 on S1). It may be entirely asymptomatic or cause mechanical back pain with or without radicular or neurogenic claudication symptoms.',
    features:[
      'Low back pain, characteristically worse with extension and activity; sometimes a palpable step and tight hamstrings',
      'Radicular leg pain or neurogenic claudication (leg pain/heaviness on walking, eased by sitting/flexion) if there is nerve-root or canal compromise',
      'Isthmic type: a pars interarticularis defect, often in younger people and athletes involved in repeated hyperextension (e.g. gymnasts, cricketers)',
      'Degenerative type: in older adults, associated with facet arthrosis and spinal stenosis',
      'Graded I–IV by degree of slip; diagnosed and graded on lateral X-ray (± flexion-extension views), with MRI for neurological symptoms'],
    management:[
      'Most cases are managed conservatively: activity modification, analgesia, and physiotherapy focused on core/trunk stabilisation',
      'Reassure for low-grade, stable, minimally symptomatic slips',
      'Advise avoiding aggravating hyperextension activities; weight management and graded return to activity',
      'Manage radicular pain with neuropathic adjuncts where appropriate',
      'Surgery (decompression ± fusion) is reserved for refractory symptoms, significant neurology, or high-grade/progressive slips',
      'Most low-grade slips settle with core-stability physiotherapy, analgesia and activity modification; safety-net for cauda equina (bladder/bowel change, saddle anaesthesia) as an emergency'],
    referral:[
      'Neurological deficit, neurogenic claudication, or back-pain red flags → spinal / orthopaedic referral with MRI',
      'Cauda equina features (bladder/bowel dysfunction, saddle anaesthesia, bilateral leg symptoms) → emergency',
      'Persistent disabling symptoms despite conservative care, or high-grade/progressive slip → spinal surgery'],
    source:'NICE CKS — Low back pain & sciatica' },

  { id:'male-menopause', title:'The \u2018male menopause\u2019 (late-onset hypogonadism)', category:'Men\u2019s & sexual health', icon:'🚹',
    overview:'A contested lay term for non-specific symptoms in middle-aged men. Some have genuine late-onset hypogonadism (symptomatic, biochemically confirmed low testosterone), but the symptoms are frequently better explained by other, often treatable, conditions.',
    features:[
      'Non-specific symptoms: fatigue, low mood, reduced libido, erectile dysfunction, poor concentration, loss of morning erections, and reduced muscle mass',
      'Genuine hypogonadism requires symptoms PLUS a confirmed low early-morning (fasting, 9 am) testosterone on at least two occasions',
      'Symptoms are often explained by depression, obesity, type 2 diabetes, obstructive sleep apnoea, excess alcohol, thyroid disease, or chronic illness/medication',
      'Distinguish primary (testicular) from secondary (pituitary/hypothalamic) hypogonadism using LH/FSH'],
    management:[
      'Assess broadly — do not attribute symptoms to "andropause" without evidence; actively screen for depression, diabetes, OSA, alcohol and thyroid disease',
      'If hypogonadism is suspected: repeat early-morning total testosterone, and add LH, FSH and prolactin (and SHBG to interpret borderline results)',
      'Optimise lifestyle first — weight loss, exercise, alcohol reduction and treating OSA can meaningfully raise testosterone and improve symptoms',
      'Testosterone replacement only for genuinely confirmed, symptomatic hypogonadism — usually after specialist confirmation, with baseline and monitoring of haematocrit, PSA and lipids, and counselling on fertility effects',
      'Manage erectile dysfunction on its own pathway including cardiovascular risk assessment',
      'Confirm with two fasting 9 am total testosterones (+ LH/FSH/prolactin/SHBG) before labelling hypogonadism; optimise weight, alcohol and OSA first — these often raise testosterone and resolve symptoms'],
    referral:[
      'Confirmed hypogonadism, raised prolactin/abnormal pituitary hormones, or diagnostic uncertainty → endocrinology',
      'Erectile dysfunction → assess cardiovascular risk and manage per the ED pathway; refer if needed',
      'Depression or other mental-health disorder → manage/refer accordingly'],
    source:'NICE CKS / BSSM testosterone guidance' },

  { id:'phimosis', title:'Tight foreskin (phimosis)', category:'Men\u2019s & sexual health', icon:'🚹',
    overview:'Inability to retract the foreskin over the glans. It is physiological (normal) in young boys and resolves with age, but pathological in older boys and adults — frequently from scarring such as lichen sclerosus (balanitis xerotica obliterans). Paraphimosis is the urological emergency.',
    features:[
      'Physiological phimosis: a non-retractile foreskin in young boys — normal, with gradual separation over the first years (most retractile by school age/puberty)',
      'Pathological phimosis: a scarred, white, fibrotic ring (suggestive of BXO/lichen sclerosus), ballooning on voiding, recurrent balanitis, painful erections, or spraying of urine',
      'Recurrent balanitis — consider and check for diabetes',
      'Paraphimosis (EMERGENCY): a retracted foreskin trapped behind the glans causing painful swelling and risk of ischaemia'],
    management:[
      'Physiological phimosis: reassure, advise against forced retraction (causes scarring), and gentle hygiene',
      'Pathological/symptomatic phimosis: a trial of a potent topical corticosteroid (e.g. applied to the tight ring for several weeks) can avoid surgery in many cases',
      'Treat balanitis appropriately and check glucose if recurrent',
      'Suspected lichen sclerosus (BXO): potent topical steroid and consider referral — BXO is a recognised risk factor for penile carcinoma',
      'Counsel on hygiene; circumcision is definitive where conservative measures fail',
      'Physiological phimosis: reassure and never force retraction; for pathological/BXO try a potent topical steroid to the ring for several weeks; paraphimosis needs emergency reduction'],
    referral:[
      'Paraphimosis → emergency (manual reduction; may need urgent urology)',
      'BXO/pathological phimosis, recurrent balanitis, or failure of topical steroid → urology (consider circumcision)',
      'A suspicious, non-healing or indurated lesion → urology to exclude penile malignancy'],
    source:'NICE CKS' },

  { id:'vaginismus', title:'Vaginismus', category:'Women\u2019s health', icon:'🌸',
    overview:'Involuntary tightening of the pelvic-floor muscles on attempted vaginal penetration, causing pain or making penetration impossible. Now classified within genito-pelvic pain/penetration disorder, it is common, distressing and very treatable.',
    features:[
      'Difficulty with, or impossibility of, vaginal penetration (tampons, intercourse, speculum examination), or significant pain on attempts',
      'Involuntary pelvic-floor muscle spasm, anticipatory anxiety, and avoidance — a self-reinforcing fear–tension–pain cycle',
      'Primary (penetration never achieved) or secondary (developing after a period of normal function, e.g. after childbirth, trauma or painful infection)',
      'Exclude organic causes of dyspareunia: infection, vulvovaginal atrophy, dermatoses (e.g. lichen sclerosus), endometriosis, and scarring'],
    management:[
      'Approach sensitively and without judgement; explain the mind–body cycle and that it is common and treatable',
      'Identify and treat any physical contributors (infection, atrophy, skin conditions, scarring)',
      'Education and self-directed work: pelvic-floor relaxation techniques, graded use of vaginal trainers/dilators, and lubricants',
      'Psychosexual therapy and CBT address the anxiety and conditioned response; involve the partner where appropriate',
      'Pelvic-floor physiotherapy can help; be patient — progress is gradual',
      'Explain the fear–tension–pain cycle, exclude organic causes (atrophy, lichen sclerosus, infection), and combine graded vaginal trainers + lubricant with psychosexual therapy/CBT'],
    referral:[
      'Refractory symptoms or a significant psychological component → psychosexual therapy',
      'Underlying gynaecological or dermatological pathology (e.g. endometriosis, lichen sclerosus) → gynaecology / dermatology',
      'Diagnostic uncertainty → specialist'],
    source:'NICE CKS' },

  { id:'whiplash', title:'Whiplash (neck sprain)', category:'Musculoskeletal', icon:'🚗',
    overview:'A neck soft-tissue injury caused by sudden acceleration–deceleration forces, most often in a road-traffic collision. It is usually self-limiting, and outcomes are best with reassurance and early active management rather than rest and immobilisation.',
    features:[
      'Neck pain and stiffness, headache, and sometimes shoulder or interscapular pain following a sudden jolt',
      'Symptoms frequently emerge several hours to a day after the event, with reduced range of movement',
      'Exclude significant bony or neurological injury — apply the Canadian C-spine rule to decide on imaging',
      'Yellow flags (distress, catastrophising, ongoing litigation) predict slower recovery (chronic whiplash-associated disorder)'],
    management:[
      'Reassure and explain the generally good prognosis; encourage early return to normal activity and movement',
      'Avoid soft collars and immobilisation, which worsen outcomes',
      'Simple analgesia (paracetamol ± NSAID) and active neck mobilisation/exercises; physiotherapy if recovery is slow',
      'Provide advice and exercises early; address sleep, posture and reassurance about hurt-versus-harm',
      'Recognise and address psychological and medicolegal factors that can prolong recovery',
      'Use the Canadian C-spine rule to decide on imaging, then reassure and keep active, avoid soft collars, and give simple analgesia + early neck exercises — rest and immobilisation worsen outcomes'],
    referral:[
      'Red flags — significant trauma/mechanism, neurological deficit, or a positive Canadian C-spine rule → emergency imaging/assessment',
      'Persistent or severe symptoms, or radicular features → physiotherapy / MSK service',
      'Chronic whiplash-associated disorder → multidisciplinary / pain management support'],
    source:'NICE CKS — Neck pain (whiplash injury)' },

  { id:'ophthalmia-neonatorum', title:'Neonatal conjunctivitis (ophthalmia neonatorum)', category:'Paediatrics', icon:'👁️',
    overview:'Conjunctivitis in the first 28 days of life. It ranges from a trivial blocked tear duct (a "sticky eye") to sight- and life-threatening gonococcal or chlamydial infection acquired during birth. It is a notifiable condition, and timing of onset guides the likely cause.',
    features:[
      'Sticky/discharging eye(s) with conjunctival redness and lid swelling in a neonate',
      'Gonococcal: hyperacute, profuse purulent discharge, marked lid oedema, onset typically day 1–5 — risk of rapid corneal ulceration/perforation and blindness',
      'Chlamydial (commonest infective cause): mucopurulent discharge with onset around day 5–14; risk of pneumonitis',
      'Other bacterial/viral (including herpes simplex — consider if vesicles or systemic illness) and chemical conjunctivitis',
      'Distinguish a simple blocked nasolacrimal duct (watery/sticky eye, white-quiet conjunctiva, well baby) from true conjunctivitis'],
    management:[
      'Treat true neonatal conjunctivitis as urgent — same-day assessment; do not simply prescribe chloramphenicol and wait',
      'Take urgent swabs before/at referral: bacterial MC&S (including gonococcus) and chlamydia PCR; Gram stain if available',
      'Suspected gonococcal or chlamydial infection needs systemic antibiotics (not topical alone) under specialist guidance, plus treatment and contact-tracing of the mother and partner via sexual health',
      'Simple blocked tear duct: reassure, lacrimal-sac massage and lid hygiene; most resolve by 12 months',
      'Notify the relevant public-health authority (ophthalmia neonatorum is notifiable) and screen mother/baby for other STIs',
      'Safety-net: worsening swelling, corneal haze or a systemically unwell baby needs immediate review'],
    referral:[
      'Hyperacute purulent conjunctivitis / suspected gonococcal infection → same-day ophthalmology + paediatrics (sight-threatening)',
      'Suspected chlamydial conjunctivitis → urgent paediatric/specialist treatment + maternal sexual-health referral',
      'Suspected herpes simplex or systemically unwell neonate → emergency paediatric assessment',
      'Persistent blocked tear duct beyond 12 months → ophthalmology'],
    source:'NICE CKS (Conjunctivitis — neonatal)' },

  { id:'opioid-dependence', title:'Opioid dependence and substance misuse', category:'Mental health', icon:'💊',
    overview:'Dependence on opioids (heroin or prescribed/over-the-counter opioids) and other substances, characterised by compulsive use despite harm. Management is harm-reduction-focused and largely shared with specialist drug services; the GP role includes recognition, blood-borne-virus prevention, naloxone provision and safe prescribing.',
    features:[
      'Features of dependence: tolerance, withdrawal, compulsion, loss of control, continued use despite harm, neglect of other interests',
      'Opioid withdrawal: dilated pupils, yawning, lacrimation/rhinorrhoea, sweating, gooseflesh, cramps, diarrhoea, agitation — distressing but not usually life-threatening',
      'Overdose: pinpoint pupils, reduced consciousness, respiratory depression — reversible with naloxone',
      'Complications: blood-borne viruses (HIV, hepatitis B/C), injection-site infections/DVT, overdose, social and legal harm',
      'Frequent comorbidity with depression, anxiety, PTSD, alcohol and other substance misuse'],
    management:[
      'Adopt a non-judgemental, harm-reduction approach; assess substances used, route, risk behaviours and social situation including dependants',
      'Refer to the specialist drug and alcohol service for assessment and opioid substitution therapy — do not initiate methadone or buprenorphine in primary care without specialist/shared-care arrangements',
      'Opioid substitution (methadone or buprenorphine) is specialist-initiated; in shared care, prescribe per the agreed plan with supervised consumption where indicated',
      'Provide take-home naloxone and train the patient/carers in its use; give overdose-prevention advice',
      'Offer blood-borne-virus screening and hepatitis B vaccination; signpost needle-exchange services',
      'Screen for and treat comorbid mental illness; consider safeguarding of children and vulnerable adults at every contact',
      'Avoid issuing opioids/benzodiazepines outside the agreed plan; reconcile any prison-release or out-of-area prescriptions with the drug service before prescribing'],
    referral:[
      'All opioid dependence → specialist drug and alcohol service (for OST and structured treatment)',
      'Overdose → emergency (naloxone + 999)',
      'Pregnancy with substance dependence → specialist drug service + obstetric/perinatal care',
      'Safeguarding concerns (children/vulnerable adults) → safeguarding pathway'],
    source:'Drug misuse and dependence — UK clinical guidelines (the "Orange Book")' },

  { id:'peyronies', title:'Peyronie’s disease', category:'Urology', icon:'♂️',
    overview:'An acquired connective-tissue disorder in which fibrous plaques form in the tunica albuginea of the penis, causing curvature, pain and sometimes erectile dysfunction. It has an acute (active, inflammatory) phase and a chronic (stable) phase, and is associated with Dupuytren contracture and diabetes.',
    features:[
      'Penile curvature/deformity on erection, a palpable plaque, and pain (especially with erection) in the acute phase',
      'Chronic phase: stable curvature, plaque and often erectile dysfunction, with pain usually settling',
      'May cause difficulty with or inability to have penetrative intercourse, and significant psychological distress',
      'Associations: Dupuytren contracture, diabetes, and penile trauma',
      'Diagnosis is clinical from the history and examination'],
    management:[
      'Explain the natural history: pain usually improves and a proportion stabilise or partially improve spontaneously — so active treatment is generally deferred until the disease is stable',
      'In the acute/painful phase, manage pain (simple analgesia) and avoid surgery while the disease is evolving',
      'Address the psychological impact and reassure; manage erectile dysfunction (PDE5 inhibitors) where present',
      'Refer to urology/andrology for assessment and treatment options',
      'Surgical correction (plication or grafting) is considered only once the disease has been stable for around 12 months and if deformity prevents intercourse',
      'Optimise associated conditions (diabetes, cardiovascular risk)'],
    referral:[
      'Confirmed or suspected Peyronie’s disease → urology/andrology (for monitoring and treatment options)',
      'Significant erectile dysfunction or inability to have intercourse → specialist',
      'Severe psychological distress → psychological support/psychosexual therapy'],
    source:'NICE CKS / EAU guidelines' },

  { id:'pleural-effusion', title:'Pleural effusion', category:'Respiratory', icon:'🫁',
    overview:'An abnormal collection of fluid in the pleural space, classified as transudate or exudate using Light’s criteria. It is a sign of underlying disease — most commonly heart failure (transudate) or malignancy, infection or pulmonary embolism (exudate) — and the priority is to identify the cause.',
    features:[
      'Breathlessness, pleuritic chest pain and a dry cough; may be asymptomatic and found on imaging',
      'Signs: reduced chest expansion, stony-dull percussion note, reduced breath sounds and reduced vocal resonance over the effusion',
      'Transudates (often bilateral): heart failure, hypoalbuminaemia (liver/renal disease)',
      'Exudates (often unilateral): malignancy, parapneumonic/empyema, pulmonary embolism, tuberculosis, inflammatory disease',
      'Red flags for malignancy: weight loss, haemoptysis, persistent/recurrent unilateral effusion, asbestos exposure (mesothelioma)'],
    management:[
      'Arrange a chest X-ray; do not aspirate an undiagnosed unilateral effusion in primary care — refer for investigation',
      'Look for and treat an obvious cause: bilateral effusions with clear heart failure can be treated as heart failure and reviewed, with referral if they do not resolve',
      'Refer promptly for diagnostic pleural aspiration ± contrast CT and ultrasound-guided sampling where the cause is not clearly a treated transudate',
      'Suspected pleural infection/empyema (unwell, sepsis, parapneumonic effusion) needs urgent admission',
      'Provide symptom relief for breathlessness and safety-net for worsening dyspnoea, fever or chest pain'],
    referral:[
      'Suspected malignancy (unilateral/recurrent effusion, weight loss, haemoptysis, asbestos exposure) → urgent suspected-cancer chest referral (NICE NG12) + respiratory',
      'Undiagnosed exudate or unilateral effusion → respiratory for aspiration/CT',
      'Suspected empyema or systemically unwell → emergency admission',
      'Transudate not resolving despite treating the cause → respiratory'],
    source:'BTS pleural disease guideline / NICE NG12' },

  { id:'pics', title:'Post-intensive care syndrome (PICS)', category:'General', icon:'🛏️',
    overview:'New or worsening impairment in physical, cognitive or mental-health function that persists after a critical illness and intensive-care admission. As more patients survive critical illness (including post-COVID), GPs increasingly manage the long recovery, which is easily missed if not actively sought.',
    features:[
      'Physical: profound fatigue, ICU-acquired weakness, breathlessness, reduced exercise tolerance, joint stiffness, weight loss, swallowing/voice problems',
      'Cognitive: impaired memory, attention and executive function ("brain fog")',
      'Mental health: anxiety, depression, and post-traumatic stress disorder (nightmares, flashbacks of the ICU stay)',
      'Sleep disturbance, sexual dysfunction and difficulty returning to work or previous roles',
      'Family members can also be affected (PICS-Family) with anxiety, depression and PTSD'],
    management:[
      'Recognise the syndrome and offer a structured holistic review after critical-illness discharge, covering physical, cognitive and psychological domains',
      'Screen for depression, anxiety and PTSD, and assess cognition and function; ask specifically — patients often do not connect symptoms to the ICU stay',
      'Reconcile and rationalise medications post-discharge; review nutrition, and check for new organ impairment (e.g. renal)',
      'Support graded rehabilitation and physiotherapy; manage fatigue with pacing and gradual increases in activity, and address sleep',
      'Signpost peer support and resources (e.g. ICUsteps); support a phased return to work with appropriate fit-note advice',
      'Support affected family members and carers'],
    referral:[
      'Significant mental-health needs (moderate–severe depression/anxiety, PTSD, or risk) → mental-health services/psychology',
      'Complex physical rehabilitation needs → critical-care follow-up clinic / rehabilitation services',
      'New or unresolving organ dysfunction → relevant specialty',
      'Persistent cognitive impairment → appropriate specialist assessment'],
    source:'NICE NG188 (post-critical illness) / FICM guidance' },

  { id:'fibroids', title:'Uterine fibroids (leiomyomas)', category:'Women’s health', icon:'🌸',
    overview:'Benign, oestrogen-dependent smooth-muscle tumours of the uterus — the commonest gynaecological tumour. Many are asymptomatic, but they are an important cause of heavy menstrual bleeding, bulk-related symptoms and, occasionally, subfertility. They typically regress after the menopause.',
    features:[
      'Heavy or prolonged menstrual bleeding (the commonest symptom) with consequent iron-deficiency anaemia',
      'Bulk/pressure symptoms: pelvic pressure or mass, urinary frequency, bloating, constipation',
      'Subfertility or recurrent pregnancy loss (especially submucosal fibroids); pregnancy complications',
      'Often an incidental finding on examination (bulky, irregular, non-tender uterus) or pelvic ultrasound',
      'Acute pain suggests fibroid degeneration or torsion of a pedunculated fibroid'],
    management:[
      'Confirm with pelvic ultrasound; check FBC/ferritin and treat iron-deficiency anaemia',
      'Asymptomatic fibroids generally need no treatment — reassure and review',
      'Heavy bleeding (fibroids <3 cm, uterus not distorted): manage as for heavy menstrual bleeding — LNG-IUS (first-line), tranexamic acid and/or NSAIDs for flow, or hormonal options (COC, oral progestogen)',
      'Provide adequate iron replacement and dietary advice',
      'Refer for specialist options when fibroids are large (≥3 cm), distort the cavity, cause significant bulk symptoms or affect fertility',
      'Specialist options include uterine artery embolisation, myomectomy (fertility-preserving) or hysterectomy; GnRH analogues (with add-back) can shrink fibroids before surgery'],
    referral:[
      'Fibroids ≥3 cm, significant bulk symptoms, or bleeding not controlled by medical treatment → gynaecology',
      'Subfertility or submucosal fibroids distorting the cavity → gynaecology/fertility services',
      'Rapidly enlarging fibroid, or post-menopausal growth → gynaecology to exclude (rare) leiomyosarcoma',
      'Acute severe pain (suspected degeneration/torsion) → same-day gynaecology assessment'],
    source:'NICE NG88 / NICE CKS (Fibroids)' },

  { id:'duty-of-candour', title:'Duty of candour (being open after harm)', category:'Ethics & professionalism', icon:'⚖️',
    overview:'A professional and statutory duty to be open and honest with patients when something goes wrong with their care that has caused, or could cause, harm. It applies to individual clinicians (GMC professional duty) and organisations (statutory duty), and is a frequent SCA professionalism scenario.',
    features:[
      'Triggered by a notifiable patient safety incident — moderate or greater harm, prolonged psychological harm, or death',
      'Threshold for openness is low: tell the patient even about near-misses/errors that could have caused harm',
      'Distinct from, but linked to, significant-event analysis and incident reporting',
      'Patients value a timely explanation, an apology and assurance that lessons will be learned, not blame'],
    management:[
      'Tell the patient (or their advocate) as soon as practicable that an incident has happened — do not wait or conceal',
      'Give a truthful, jargon-free account of what is known, avoiding speculation or blaming colleagues',
      'Offer a genuine apology — saying sorry is not an admission of legal liability',
      'Explain what will happen next: further treatment, investigation/significant-event review, and how you will keep them informed',
      'Document the discussion contemporaneously; complete an incident report and arrange a significant-event analysis',
      'Provide support and a named contact; follow up in writing where appropriate'],
    referral:[
      'Serious incidents → organisational duty of candour process, practice manager and (where relevant) the responsible officer',
      'Medico-legal uncertainty → seek medical-defence-organisation advice',
      'Patient wishes to complain → signpost the complaints procedure and PALS/advocacy'],
    source:'GMC Good Medical Practice / CQC Regulation 20' },

  { id:'raising-concerns-colleague', title:'Raising concerns about a colleague', category:'Ethics & professionalism', icon:'⚖️',
    overview:'A duty to act when a colleague’s conduct, health or performance may be putting patients at risk. Patient safety overrides loyalty or personal discomfort; failing to act is itself a professional failing.',
    features:[
      'Concerns may relate to clinical performance, probity, health (e.g. substance misuse), or behaviour',
      'The over-riding principle is patient safety; a doctor must not let collegiality or fear of repercussion prevent action',
      'Concerns should be raised honestly, promptly and through appropriate channels, with the doctor’s own justification',
      'Whistleblowers are protected; victimising someone who raises a concern is unacceptable'],
    management:[
      'If a patient is at immediate risk, act now to make them safe before anything else',
      'Raise the concern with an appropriate person — usually a senior/clinical lead, practice partner, or the responsible officer',
      'Keep a factual, objective record of what you observed and the steps you took',
      'Be honest and avoid gossip or public criticism of the colleague; focus on patient safety, not personality',
      'Offer support to a colleague whose health may be the issue, while still acting to protect patients',
      'Escalate to the GMC or regulator if local routes fail to address a serious risk'],
    referral:[
      'Immediate risk to patients → urgent escalation to the responsible officer/senior management',
      'Concerns about a doctor’s health → occupational health / Practitioner Health Programme',
      'Unresolved serious concerns → GMC; seek defence-organisation advice'],
    source:'GMC Good Medical Practice / Raising and acting on concerns' },

  { id:'access-to-records', title:'Access to and amending medical records', category:'Ethics & professionalism', icon:'⚖️',
    overview:'Patients have a legal right to access their health records and to request corrections. GPs must balance this right with data-protection law, third-party confidentiality and the rare grounds for withholding information.',
    features:[
      'Under UK GDPR/Data Protection Act, patients can make a subject access request and access their records (usually free, within one month)',
      'Patients can ask to amend factual errors; a professional opinion need not be changed but a disagreement can be noted',
      'Access can be limited where disclosure would cause serious harm to the patient or others, or would reveal third-party information',
      'Requests about a child or someone lacking capacity require capacity/competence and best-interests consideration'],
    management:[
      'Confirm identity and clarify exactly what the patient wants and why',
      'Correct genuine factual errors; for contested clinical opinion, add the patient’s comment rather than deleting the entry — never alter or backdate records to mislead',
      'Redact or withhold only on lawful grounds (serious-harm or third-party), documenting the reasoning',
      'Process subject access requests within the statutory timeframe; involve the practice information-governance/Caldicott lead',
      'Explain decisions to the patient and signpost how to escalate if they disagree'],
    referral:[
      'Complex or contested requests → practice information-governance / Caldicott Guardian',
      'Data-protection disputes → the Information Commissioner’s Office (ICO)',
      'Medico-legal uncertainty → medical-defence organisation'],
    source:'UK GDPR / Data Protection Act 2018 / GMC confidentiality guidance' },

  { id:'capacity-consent', title:'Mental capacity, consent and covert medication', category:'Ethics & professionalism', icon:'⚖️',
    overview:'Adults are assumed to have capacity unless shown otherwise; capacity is decision- and time-specific. When an adult lacks capacity, care must be in their best interests and as least-restrictive as possible — a common SCA theme (e.g. crushing tablets or covert medication for a relative).',
    features:[
      'The two-stage test: (1) is there an impairment of mind/brain, and (2) does it stop them understanding, retaining, weighing or communicating the decision?',
      'Capacity is decision-specific — a person may have capacity for one decision but not another',
      'A capacitous adult may refuse treatment even if the decision seems unwise',
      'Covert administration (e.g. crushing/hiding medication) is only lawful for a person who lacks capacity, in their best interests, after a multidisciplinary and pharmacist discussion',
      'Consider advance decisions, lasting power of attorney (health & welfare) and IMCA involvement'],
    management:[
      'Assess and document capacity for the specific decision; maximise capacity (timing, communication aids, treat reversible factors)',
      'If the person has capacity, respect their decision even if a relative disagrees',
      'If they lack capacity, make a best-interests decision involving family/carers, attorneys and the wider team; choose the least-restrictive option',
      'For covert medication, hold a documented best-interests meeting with pharmacy input and a clear care plan that is reviewed',
      'Be alert to a Deprivation of Liberty and follow DoLS/Liberty Protection Safeguards where relevant',
      'Record the assessment, the decision and who was involved'],
    referral:[
      'Complex or disputed best-interests decisions → IMCA, safeguarding, or Court of Protection',
      'Concerns about an attorney/deputy acting against the person’s interests → safeguarding',
      'Uncertainty → medical-defence organisation / legal advice'],
    source:'Mental Capacity Act 2005 / GMC consent guidance' },

  { id:'confidentiality-disclosure', title:'Confidentiality and disclosure', category:'Ethics & professionalism', icon:'⚖️',
    overview:'Confidentiality is central to trust but is not absolute. GPs must know when information can or must be shared without consent — a recurring SCA issue (e.g. fitness to drive, communicable disease, risk to others, prison-release prescribing, requests to keep secrets).',
    features:[
      'Default is to keep information confidential and to seek consent before sharing',
      'Disclosure without consent may be justified to protect the patient or others from serious harm, or required by law/statute',
      'Examples: notifiable diseases, DVLA (continuing to drive against advice), safeguarding, serious crime, court order',
      'Disclose the minimum necessary, to the right person, and tell the patient unless doing so would increase risk'],
    management:[
      'Clarify exactly what is being asked and by whom; seek the patient’s consent to share wherever possible',
      'Where consent is refused, weigh the public interest / risk of serious harm against the duty of confidence',
      'Share only the minimum necessary information and document the decision and its justification',
      'Tell the patient about the disclosure unless that would put someone at risk or undermine the purpose',
      'For specific duties (DVLA, notifiable disease, gunshot/knife wounds, FGM in under-18s), follow the defined legal process',
      'When in doubt, take defence-organisation or Caldicott advice before disclosing'],
    referral:[
      'Public-interest or statutory disclosures → relevant body (DVLA, UKHSA/public health, police, safeguarding)',
      'Difficult balancing decisions → Caldicott Guardian / medical-defence organisation',
      'Disclosures involving children/young people → safeguarding lead'],
    source:'GMC Confidentiality guidance' },

  { id:'safeguarding-children', title:'Safeguarding children', category:'Ethics & professionalism', icon:'⚖️',
    overview:'All clinicians have a duty to recognise and act on concerns that a child may be suffering, or at risk of, abuse or neglect. The child’s welfare is paramount and overrides confidentiality; a frequent SCA scenario across many presentations.',
    features:[
      'Categories: physical, emotional, sexual abuse and neglect; consider fabricated/induced illness',
      'Warning signs: inconsistent or changing history, delayed presentation, injuries inconsistent with development, frozen watchfulness, disclosure, recurrent attendance',
      'Higher risk where there is domestic abuse, parental substance misuse or parental mental illness ("toxic trio")',
      'Consider the needs of other children in the household; think "was not brought" rather than "did not attend"'],
    management:[
      'If a child is in immediate danger, act now (999/emergency) to make them safe',
      'Document carefully and objectively, including exact quotes and the timeline; record what was seen, said and done',
      'Discuss with the practice safeguarding lead and the named/designated safeguarding professional',
      'Refer concerns to children’s social care (and police if a crime); share information proportionately — consent is not required where seeking it would increase risk',
      'Consider siblings and other dependants; follow up to ensure the referral was actioned',
      'Maintain professional curiosity and avoid being reassured too easily by plausible explanations'],
    referral:[
      'Immediate danger → 999/police and emergency protection',
      'Suspected abuse/neglect → children’s social care + named safeguarding lead',
      'Uncertain low-level concerns → discuss with safeguarding lead / early-help services'],
    source:'NICE NG76 / Working Together to Safeguard Children' },

  { id:'safeguarding-adults', title:'Safeguarding adults and domestic abuse', category:'Ethics & professionalism', icon:'⚖️',
    overview:'A duty to protect adults at risk — those with care-and-support needs who cannot protect themselves — and to recognise and respond to domestic abuse. Both are common, sensitive SCA scenarios requiring a supportive, non-judgemental approach.',
    features:[
      'Adult-safeguarding categories include physical, sexual, psychological, financial, neglect, discriminatory, organisational and modern slavery',
      'Domestic abuse includes physical, emotional, sexual, financial and coercive/controlling behaviour; it crosses all backgrounds',
      'Indicators: unexplained injuries, frequent attendance, a controlling partner answering for them, anxiety/depression, missed appointments',
      'Mental capacity and the person’s wishes are central — a capacitous adult may decline intervention'],
    management:[
      'Create a safe, private space; see the person alone and ask directly and sensitively about safety at home',
      'Listen, validate, and assess immediate risk (including to any children — a child in the household is a safeguarding concern)',
      'Respect the autonomy of a capacitous adult, but give information about support (e.g. National Domestic Abuse Helpline, IDVA, MARAC for high risk)',
      'For an adult who lacks capacity or where others are at risk, raise a safeguarding-adults referral',
      'Document factually (the person’s own words, injuries) in a record they cannot be coerced to share; have a safety plan',
      'Know local referral routes and follow up'],
    referral:[
      'Immediate danger → 999/police',
      'Adult at risk lacking capacity, or ongoing risk → adult social care safeguarding team',
      'High-risk domestic abuse → MARAC / IDVA; signpost specialist domestic-abuse services',
      'Children in the household → children’s safeguarding'],
    source:'Care Act 2014 / NICE QS116 (domestic abuse)' },

  { id:'fit-notes', title:'Fit notes and sickness certification', category:'Ethics & professionalism', icon:'⚖️',
    overview:'The statement of fitness for work ("fit note") advises whether a patient is not fit, or may be fit, for work with support. It is an SCA scenario testing honest assessment, negotiation and the avoidance of inappropriate certification.',
    features:[
      'No fit note is needed for the first 7 days of illness (patient self-certifies)',
      'The fit note records "not fit for work" or "may be fit for work" with suggestions (phased return, amended duties, altered hours, workplace adaptations)',
      'It is advice to the patient and employer, not a binding instruction; the employer decides what adjustments are possible',
      'Certification must be based on an honest clinical assessment — not simply patient demand'],
    management:[
      'Assess the functional effect of the condition on this person’s actual job, not just the diagnosis',
      'Encourage staying in or returning to appropriate work where it is safe — work is generally good for health',
      'Use the "may be fit for work" option and suggest practical adjustments where possible',
      'Be honest and avoid issuing certificates you cannot justify; explore the reasons behind inappropriate requests',
      'Document the assessment and signpost support (occupational health, Access to Work, fit-for-work resources)'],
    referral:[
      'Complex work/health interaction → occupational health',
      'Benefits/employment difficulties → signpost welfare-rights / Citizens Advice',
      'Persistent inability to work → manage the underlying condition and review'],
    source:'DWP fit note guidance / GMC Good Medical Practice' },

  { id:'dnacpr-acp', title:'DNACPR and advance care planning', category:'Ethics & professionalism', icon:'⚖️',
    overview:'Decisions about cardiopulmonary resuscitation and broader advance care planning are common, emotive SCA scenarios. A DNACPR decision concerns CPR only; it must be made and communicated well, and never reduces other care.',
    features:[
      'A DNACPR is a clinical decision that CPR should not be attempted, usually because it would not work or the burdens outweigh benefits',
      'CPR cannot be demanded if clinicians judge it would not be successful, but patients/families must be involved in the conversation',
      'A DNACPR applies to CPR only — all other appropriate treatment and comfort care continue',
      'Advance care planning may include preferences, an advance decision to refuse treatment (ADRT), and lasting power of attorney',
      'The Montgomery principle and ReSPECT process emphasise sharing decisions and recording them clearly'],
    management:[
      'Hold the conversation early, sensitively and in plain language; explore the person’s understanding, wishes and fears',
      'Explain what CPR is and its realistic outcomes; correct misconceptions (e.g. that DNACPR means withdrawing all care)',
      'Involve the patient if they have capacity; if not, consult family/attorneys and decide in best interests',
      'Document clearly on the agreed form (e.g. ReSPECT), ensure it is accessible to out-of-hours and ambulance services, and review it',
      'Record advance decisions and preferred place of care; coordinate with palliative care where relevant',
      'Communicate the plan to the wider team and the family'],
    referral:[
      'Complex symptom or end-of-life needs → community palliative-care team',
      'Disputed decisions or capacity disputes → senior clinician / legal advice / Court of Protection',
      'Coordination of care → district nursing / care coordination'],
    source:'GMC end-of-life guidance / ReSPECT / Resuscitation Council UK' }

  );
})();
