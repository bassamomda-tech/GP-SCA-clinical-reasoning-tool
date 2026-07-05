/* Reasoning GP — Examinations data: Breast · Vascular/Diabetic foot · Skin · Lymphoreticular · Mental health & Cognitive · Paediatric */
window.RGP_EXAMINATIONS = (window.RGP_EXAMINATIONS || []).concat([

/* ===================== BREAST ===================== */
{
  id:'breast', system:'Breast', icon:'🎗️', title:'Breast examination',
  blurb:'Inspection in defined positions, systematic palpation of breast, axilla and nodes — with the 2-week-wait thresholds.',
  indications:[
    'Breast lump or thickening',
    'Skin or nipple change (dimpling, retraction, eczema, discharge)',
    'Breast pain with a focal abnormality',
    'Axillary lump or follow-up of known pathology',
  ],
  equipment:['Chaperone (always)','Adequate exposure to waist','Couch at 45°','Tissues'],
  redFlags:[
    'Unexplained breast lump in anyone **≥30** → 2-week-wait',
    'Unilateral nipple change / eczema (?Paget) → 2-week-wait',
    'Nipple discharge that is bloody or single-duct → refer',
    'Skin tethering, peau d’orange, fixed/hard mass, axillary nodes → 2-week-wait',
    'Lump in anyone ≥50 with nipple discharge / retraction / change → 2-week-wait',
  ],
  sequence:[
    { phase:'Look (inspection)', items:[
      { name:'Three positions', how:'Arms by side → hands pressed on hips (tense pectorals) → arms raised above head', finding:'Asymmetry, visible lump, skin tethering/dimpling, peau d’orange, scars' },
      { name:'Nipples', finding:'Inversion (new vs longstanding), deviation, discharge, eczema/ulceration (Paget)' },
    ]},
    { phase:'Feel (palpation)', items:[
      { name:'Systematic palpation', how:'Patient lies at 45°, hand behind head; palpate all quadrants + axillary tail with flat of fingers against chest wall', finding:'Mass — note site, size, shape, consistency, mobility, tethering, tenderness' },
      { name:'Characterise any lump', finding:'Hard, irregular, fixed, painless → suspicious; smooth, mobile, well-defined → likely benign (fibroadenoma/cyst)', pitfall:'Benign features never exclude cancer — refer by age/2WW rules regardless' },
      { name:'Nipple', how:'Gently express only if discharge is the complaint', finding:'Bloody/serous, single vs multiple ducts, unilateral vs bilateral' },
    ]},
    { phase:'Regional nodes', items:[
      { name:'Axillary nodes', how:'Support the arm; palpate apex, anterior, posterior, medial & lateral walls', finding:'Palpable / fixed nodes → staging concern' },
      { name:'Supraclavicular & cervical nodes', positive:'Palpable supraclavicular node → advanced / refer' },
    ]},
  ],
  outcomes:[
    { finding:'Discrete hard irregular fixed lump ± skin/nipple change ± nodes', meaning:'Suspected breast cancer — 2-week-wait referral; do not delay for imaging' },
    { finding:'Smooth, mobile, well-defined lump in a young woman', meaning:'Likely fibroadenoma — still refer per age rules (≥30 = 2WW; <30 = routine/urgent breast clinic)' },
    { finding:'Tender, fluctuant lump that varies with cycle', meaning:'Likely cyst — triple assessment / aspiration via breast clinic' },
    { finding:'Unilateral nipple eczema not responding to topical steroid', meaning:'?Paget disease — 2-week-wait' },
    { finding:'Cyclical bilateral nodularity, no discrete mass', meaning:'Benign change — reassure, safety-net, review' },
  ],
  note:'Examination guides urgency but referral is driven by NICE NG12 age thresholds, not by how “benign” a lump feels. Always use a chaperone and document it.',
  links:{ leaflet:'tools/leaflets.html', leafletLabel:'Patient leaflets', resource:'pages/resources.html#local-pathways', resourceLabel:'Breast referral pathways' },
},

/* ===================== VASCULAR & DIABETIC FOOT ===================== */
{
  id:'diabetic-foot', system:'Vascular & Diabetic foot', icon:'🦶', title:'Diabetic foot examination',
  blurb:'Annual risk stratification — skin/structure, pulses, and the 10 g monofilament neuropathy screen.',
  indications:[
    'Annual diabetes review (mandatory foot check)',
    'New foot ulcer, deformity, colour or temperature change',
    'Suspected neuropathy or peripheral arterial disease',
    'Stratifying foot-risk for podiatry referral',
  ],
  equipment:['10 g Semmes–Weinstein monofilament','128 Hz tuning fork (vibration)','Doppler (for ABPI if indicated)','Adequate lighting'],
  redFlags:[
    'Suspected Charcot foot (hot, swollen, red foot ± deformity, often painless) → **same-day** specialist foot team',
    'New ulceration, spreading cellulitis, gangrene or critical ischaemia → urgent/same-day referral',
    'Foot infection with systemic features → admit',
  ],
  sequence:[
    { phase:'Inspect (skin & structure)', items:[
      { name:'Skin', finding:'Callus, ulceration (note site — typically over pressure areas/metatarsal heads), fissures, interdigital maceration, colour' },
      { name:'Structure & deformity', finding:'Clawing, prominent metatarsal heads, hallux valgus, Charcot deformity, prior amputation' },
      { name:'Footwear', finding:'Ill-fitting / inadequate footwear contributing to pressure' },
    ]},
    { phase:'Vascular', items:[
      { name:'Pulses', how:'Palpate dorsalis pedis & posterior tibial', finding:'Absent pulses → PAD; confirm with ABPI if claudication/ulcer' },
      { name:'Temperature & capillary refill', finding:'Cold, pale, prolonged refill → ischaemia; warm + bounding → consider Charcot/infection' },
    ]},
    { phase:'Neuropathy', items:[
      { name:'10 g monofilament', how:'Apply perpendicular to buckle at defined sites (e.g. plantar hallux + metatarsal heads); patient eyes closed, ask when felt', positive:'Insensate at any tested site → loss of protective sensation', pitfall:'Avoid callused skin and ulcer; don’t apply over hard skin' },
      { name:'Vibration & ankle reflexes', how:'128 Hz tuning fork on hallux; test ankle jerks', finding:'Reduced vibration / absent ankle jerks → peripheral neuropathy' },
    ]},
  ],
  outcomes:[
    { finding:'Intact sensation, palpable pulses, no deformity', meaning:'Low risk — annual review, foot-care education' },
    { finding:'Loss of monofilament sensation OR absent pulses OR deformity', meaning:'Moderate/high risk — refer to foot protection / podiatry service' },
    { finding:'Previous ulcer/amputation, or active ulcer/infection/critical ischaemia', meaning:'High risk / active disease — urgent multidisciplinary foot service' },
    { finding:'Hot, swollen, red foot, often painless, bounding pulses', meaning:'Suspected Charcot — same-day specialist referral, offload immediately' },
  ],
  note:'Risk is the combination of neuropathy + ischaemia + deformity + ulcer history. A painless hot swollen foot in diabetes is Charcot until proven otherwise — do not dismiss it as cellulitis or gout.',
  links:{ case:'cases/type-2-diabetes.html', caseLabel:'Type 2 diabetes', algorithm:'tools/algorithms.html', algorithmLabel:'Algorithms' },
},

/* ===================== SKIN LESION (pathway) ===================== */
{
  id:'skin-lesion', system:'Skin', icon:'🔬', title:'Skin lesion assessment',
  blurb:'Structured lesion description, the ABCDE/ugly-duckling melanoma screen, and dermoscopy basics with a referral pathway.',
  indications:[
    'New, changing or symptomatic pigmented lesion',
    'Non-healing or growing lump/ulcer',
    'Suspected skin cancer (BCC, SCC, melanoma)',
    'Generalised rash characterisation',
  ],
  equipment:['Good (natural) lighting','Dermatoscope if trained','Ruler / measure','Camera for documentation'],
  redFlags:[
    'Lesion scoring ≥3 on the 7-point checklist, or any one major change → 2-week-wait',
    'Non-healing lesion / ulcer >4 weeks, or enlarging nodule with surface change → ?SCC — 2-week-wait',
    'Pigmented lesion under a nail (subungual) with new pigment streak → urgent',
    '“Ugly duckling” — a lesion that looks different from all the patient’s others',
  ],
  pathway:[
    { q:'Is the lesion pigmented?', note:'Determines melanoma vs non-melanoma screening', branches:[
      { condition:'Pigmented', clues:'Brown/black, mole-like, changing', primaryCare:'Apply ABCDE + 7-point checklist + dermoscopy', refer:'2WW if suspicious' },
      { condition:'Non-pigmented', clues:'Pearly papule, scaly plaque, non-healing ulcer/nodule', primaryCare:'Assess for BCC (pearly, telangiectasia, rolled edge) vs SCC (keratotic, tender, fast-growing)', refer:'2WW for SCC; routine dermatology / consider 2WW for BCC near critical sites' },
    ]},
    { q:'Apply the 7-point checklist (pigmented)', note:'Major (2 pts each): change in size, irregular shape, irregular colour. Minor (1 pt each): >7 mm, inflammation, oozing/crusting, change in sensation', branches:[
      { condition:'Score ≥3 or any major feature', primaryCare:'Photograph and document', refer:'**2-week-wait** suspected melanoma' },
      { condition:'Score <3, low concern', primaryCare:'Safety-net; consider photo + review in 4–8 weeks if any doubt', refer:'Refer if change at review' },
    ]},
    { q:'Dermoscopy clues (if trained)', note:'Adjunct only — not a substitute for the checklist', branches:[
      { condition:'Asymmetry of structure/colour, atypical network, blue-white veil, irregular streaks/dots', primaryCare:'Treat as suspicious', refer:'2-week-wait' },
      { condition:'Symmetric, classic benign pattern (e.g. seborrhoeic keratosis “stuck-on”, milia-like cysts)', primaryCare:'Reassure; safety-net', refer:'Refer if uncertain' },
    ]},
  ],
  sequence:[
    { phase:'Describe the lesion', items:[
      { name:'Site, size, number, distribution', finding:'Document precisely (and photograph for comparison)' },
      { name:'Morphology', finding:'Macule/papule/plaque/nodule/vesicle; surface (scale, crust, ulceration); border; colour' },
      { name:'ABCDE (melanoma)', how:'Asymmetry · Border irregular · Colour variation · Diameter >6 mm · Evolving', positive:'Any feature, esp. Evolving, raises concern' },
    ]},
    { phase:'Examine wider', items:[
      { name:'Whole skin & “ugly duckling”', finding:'Compare with the patient’s other naevi — the odd one out is significant' },
      { name:'Regional lymph nodes', positive:'Palpable nodes draining a suspicious lesion → staging concern' },
    ]},
  ],
  outcomes:[
    { finding:'Changing pigmented lesion, 7-point ≥3 / ABCDE positive', meaning:'Suspected melanoma — 2-week-wait; do not shave/curette' },
    { finding:'Pearly papule with telangiectasia / rolled edge', meaning:'Basal cell carcinoma — routine/urgent dermatology (2WW if high-risk site)' },
    { finding:'Keratotic, tender, fast-growing nodule or non-healing ulcer', meaning:'Squamous cell carcinoma — 2-week-wait' },
    { finding:'Stuck-on warty plaque, milia-like cysts on dermoscopy', meaning:'Seborrhoeic keratosis — benign, reassure' },
  ],
  note:'In primary care your job is to apply a structured checklist and refer appropriately — not to make a definitive diagnosis. Photograph anything you choose to monitor and set a clear review interval.',
  links:{ resource:'pages/resources.html#local-pathways', resourceLabel:'Dermatology pathways' },
},

/* ===================== LYMPHORETICULAR ===================== */
{
  id:'lymph-nodes', system:'Lymphoreticular', icon:'🩸', title:'Lymph node & lymphoreticular examination',
  blurb:'Systematic palpation of all node groups plus liver and spleen, distinguishing reactive from sinister nodes.',
  indications:[
    'Palpable lump in neck, axilla or groin',
    'Generalised lymphadenopathy',
    'Suspected lymphoma / haematological malignancy',
    'Systemic “B” symptoms (fever, night sweats, weight loss)',
  ],
  equipment:['Couch','Adequate exposure of neck, axillae and groins'],
  redFlags:[
    'Node >2 cm, hard, fixed, painless, or enlarging over weeks → urgent referral',
    'Supraclavicular node at any age → urgent (?thoracic/abdominal malignancy)',
    'Lymphadenopathy + B-symptoms / hepatosplenomegaly → suspected lymphoma — refer',
    'Persistent unexplained lymphadenopathy >6 weeks → investigate / refer',
  ],
  sequence:[
    { phase:'Inspect', items:[
      { name:'Visible swelling', finding:'Obvious mass, overlying skin change, discharging sinus (?TB)' },
    ]},
    { phase:'Palpate node groups', items:[
      { name:'Cervical chain', how:'From behind: submental, submandibular, pre/post-auricular, occipital, anterior & posterior cervical, supraclavicular', finding:'Note site, size, consistency, mobility, tenderness' },
      { name:'Axillary & epitrochlear', how:'Support the arm; palpate five axillary groups + just above medial epicondyle', finding:'' },
      { name:'Inguinal', finding:'Small mobile inguinal nodes are commonly normal' },
      { name:'Characterise', finding:'Tender, soft, mobile → reactive/infective; hard, matted, fixed, non-tender → malignant; rubbery, risbbery firm → ?lymphoma' },
    ]},
    { phase:'Hepatosplenomegaly', items:[
      { name:'Spleen & liver', how:'Palpate from RIF toward LUQ for spleen; assess liver edge & percuss', positive:'Splenomegaly / hepatomegaly with lymphadenopathy → haematological cause' },
    ]},
  ],
  outcomes:[
    { finding:'Tender, soft, mobile nodes with recent infection', meaning:'Reactive lymphadenopathy — treat cause, safety-net, review in 2–6 weeks' },
    { finding:'Hard, fixed, non-tender node ± matting', meaning:'Suspected malignancy/metastasis — urgent referral + investigation' },
    { finding:'Rubbery generalised nodes + B-symptoms + splenomegaly', meaning:'Suspected lymphoma — refer haematology; bloods incl. FBC, LDH, film' },
    { finding:'Isolated supraclavicular node', meaning:'Always significant — urgent referral / imaging' },
  ],
  note:'Site, character and duration matter more than size alone. Any supraclavicular node, or persistent unexplained node >6 weeks, warrants investigation regardless of how it feels.',
  links:{ algorithm:'tools/algorithms.html', algorithmLabel:'Algorithms' },
},

/* ===================== MENTAL STATE ===================== */
{
  id:'mental-state', system:'Mental health & Cognitive', icon:'🧩', title:'Mental state examination (MSE)',
  blurb:'The structured observational framework — ASEPTIC: Appearance, Speech, Emotion, Perception, Thought, Insight, Cognition.',
  indications:[
    'Any mental-health presentation (low mood, anxiety, psychosis)',
    'Risk assessment (self-harm, suicide, harm to others)',
    'Suspected acute confusion / psychosis',
    'Capacity-relevant assessments',
  ],
  equipment:['Private, safe room','Time, and a chaperone/colleague aware if risk suspected'],
  redFlags:[
    'Active suicidal intent or plan → urgent mental-health assessment / crisis team',
    'Command hallucinations, severe self-neglect, or risk to others → urgent',
    'New psychosis or rapid cognitive decline → consider organic cause; urgent assessment',
    'Thoughts of harming a child / safeguarding concern → escalate immediately',
  ],
  sequence:[
    { phase:'Observe', items:[
      { name:'Appearance & behaviour', finding:'Self-care, grooming, clothing, psychomotor agitation/retardation, eye contact, rapport, distractibility, abnormal movements' },
      { name:'Speech', finding:'Rate, rhythm, volume, quantity, tone (pressured → mania; slow/poverty → depression)' },
      { name:'Emotion (mood & affect)', how:'Mood = subjective (“how have you been feeling?”); affect = observed', finding:'Objective affect: range, reactivity, congruence; note lability/blunting' },
    ]},
    { phase:'Elicit', items:[
      { name:'Perception', finding:'Hallucinations (modality), illusions, depersonalisation/derealisation' },
      { name:'Thought — form & content', finding:'Form: flight of ideas, loosening, circumstantiality. Content: delusions, obsessions, overvalued ideas, **suicidal/homicidal ideation** (always ask explicitly)' },
      { name:'Insight & judgement', finding:'Does the patient recognise they are unwell and need help? Attitude to treatment' },
    ]},
    { phase:'Screen cognition', items:[
      { name:'Cognition', how:'Orientation, attention (e.g. months backward); formal test (AMT/MoCA) if indicated', finding:'Impairment → consider delirium/dementia screen' },
    ]},
  ],
  outcomes:[
    { finding:'Low mood, anhedonia, psychomotor retardation, hopelessness', meaning:'Depression — assess severity (PHQ-9) and risk; manage per NICE' },
    { finding:'Pressured speech, elevated/irritable mood, grandiosity, reduced sleep', meaning:'?Mania/hypomania — urgent psychiatric assessment' },
    { finding:'Hallucinations + delusions + impaired insight', meaning:'Psychosis — urgent mental-health referral; exclude organic causes' },
    { finding:'Expressed suicidal ideation with intent/plan/means', meaning:'High risk — same-day crisis/mental-health team; do not leave alone' },
  ],
  note:'The MSE is a cross-sectional snapshot of how the patient is now — distinct from the psychiatric history. Always ask about suicidal and risk ideation directly; asking does not plant the idea.',
  links:{ case:'cases/depression.html', caseLabel:'Depression', case2:'cases/anxiety.html', case2Label:'Generalised anxiety' },
},

/* ===================== COGNITIVE ===================== */
{
  id:'cognitive', system:'Mental health & Cognitive', icon:'🧠', title:'Cognitive assessment',
  blurb:'Bedside cognition (AMT/6-CIT/MoCA/ACE-III), the dementia-vs-delirium distinction, and what to do next.',
  indications:[
    'Memory concerns (patient, family or collateral)',
    'Suspected dementia or mild cognitive impairment',
    'Acute confusion (?delirium)',
    'Cognitive baseline before driving / capacity decisions',
  ],
  equipment:['Validated tool (6-CIT, MoCA, ACE-III, AMT)','Clock-drawing sheet','Collateral history','Quiet room'],
  redFlags:[
    'Acute/fluctuating confusion with inattention → delirium — find & treat the cause (infection, drugs, metabolic) before labelling dementia',
    'Rapidly progressive cognitive decline (weeks–months) → urgent referral (?CJD, autoimmune, structural)',
    'Focal neurology, early gait/falls, or early incontinence → consider NPH / vascular / structural — image & refer',
    'Cognitive decline + safeguarding or driving risk → act on safety',
  ],
  sequence:[
    { phase:'History first', items:[
      { name:'Collateral history', how:'Speak to a relative/carer; onset (insidious vs acute), course (progressive vs fluctuating), domains affected', finding:'Distinguishes dementia (gradual) from delirium (acute, fluctuating) from depression (“pseudodementia”)' },
      { name:'Screen reversible contributors', finding:'Medication review, alcohol, mood (depression), sensory impairment, B12/folate/TFT, infection' },
    ]},
    { phase:'Bedside testing', items:[
      { name:'Attention (delirium screen)', how:'Months of year backwards / serial 7s; consider 4AT in acute settings', positive:'Inattention is the hallmark of delirium' },
      { name:'Choose a validated tool', how:'6-CIT or MoCA in primary care; ACE-III for detail; AMT as a quick screen', finding:'Score below threshold → cognitive impairment (interpret with education/baseline)' },
      { name:'Clock-drawing & memory', finding:'Executive/visuospatial impairment; delayed recall affected early in Alzheimer’s' },
    ]},
  ],
  outcomes:[
    { finding:'Gradual progressive memory loss, normal attention, low MoCA', meaning:'?Dementia — bloods + consider imaging; refer to memory clinic' },
    { finding:'Acute fluctuating confusion + inattention', meaning:'Delirium — identify and treat cause; reassess cognition after recovery' },
    { finding:'Stepwise decline + vascular risk/focal signs', meaning:'?Vascular dementia — address vascular risk; refer' },
    { finding:'Subjective memory complaint, normal testing, low mood', meaning:'Consider depression (“pseudodementia”) — treat mood and reassess' },
  ],
  note:'Never diagnose dementia during a delirium. Cognitive screening tools support — but do not replace — a collateral history and exclusion of reversible causes. Interpret scores against education and baseline.',
  links:{ case:'cases/dementia.html', caseLabel:'Dementia', calculator:'tools/calculators.html#6cit', calculatorLabel:'6-CIT calculator' },
},

/* ===================== MENTAL CAPACITY ===================== */
{
  id:'capacity', system:'Mental health & Cognitive', icon:'⚖️', title:'Mental capacity assessment (MCA 2005)',
  blurb:'The two-stage test and the four functional abilities (Understand · Retain · Weigh · Communicate) — decision- and time-specific, with best-interests and escalation.',
  indications:[
    'A specific decision to be made (treatment, investigation, admission, discharge, finances, residence)',
    'Doubt about whether the person can make THIS decision now',
    'Cognitive impairment, delirium, learning disability, mental illness, intoxication, acute illness or communication difficulty',
    'Refusal of recommended care, or an apparently unwise decision that raises concern',
  ],
  equipment:['The specific decision, clearly defined','Information in an accessible form (plain language, interpreter, pictures, AAC)','Time the assessment when the person is at their best','Collateral / records (LPA, advance decision, ReSPECT)','Capacity-assessment proforma to document'],
  redFlags:[
    'Never assume incapacity from age, diagnosis, disability or an "unwise" decision — capacity is decision- and time-specific',
    'A valid & applicable advance decision to refuse treatment (ADRT) is legally binding — check before treating',
    'A personal-welfare LPA / court-appointed deputy may have authority — verify scope before deciding',
    'Capacity to consent to sex, marriage or to vote can NOT be decided by a best-interests process',
    'Restraint/deprivation of liberty needs lawful authority (DoLS / Liberty Protection Safeguards / Court of Protection)',
    'Suspected coercion, undue influence or safeguarding concern → pause and escalate',
  ],
  note:'Capacity is ALWAYS specific to one decision at one time — never a global label ("this patient lacks capacity"). Start from the 5 statutory principles: (1) assume capacity; (2) support the person to decide before concluding they can\u2019t; (3) an unwise decision does not prove incapacity; (4) any decision for someone lacking capacity must be in their best interests; (5) choose the least restrictive option. You only proceed to the two-stage test when, after support, there is still real doubt.',
  sequence:[
    { phase:'Before you start — optimise & define', items:[
      { name:'Define the specific decision', how:'State exactly what is being decided and the realistic options & consequences of each (including doing nothing)', finding:'Capacity for a simple decision may be present even when it is absent for a complex one' },
      { name:'Maximise capacity (principle 2)', how:'Treat reversible factors (pain, infection/delirium, hypoglycaemia, intoxication, constipation, sensory aids); choose the best time of day; use an interpreter / simple language / pictures / AAC; involve someone who helps them communicate', finding:'If capacity can be restored, reassess — don\u2019t decide during a remediable delirium unless the decision is time-critical' },
      { name:'Check for existing authority', how:'Valid & applicable ADRT? Registered health-and-welfare LPA or deputy? ReSPECT/advance statement of wishes?', positive:'A valid ADRT or LPA may determine the outcome before any best-interests process' },
    ]},
    { phase:'Stage 1 — the diagnostic test', items:[
      { name:'Is there an impairment of, or disturbance in, the functioning of the mind or brain?', how:'Dementia, delirium, learning disability, brain injury, stroke, severe mental illness, intoxication, etc. (can be temporary)', positive:'If NO impairment/disturbance → the MCA incapacity test is not met; respect their decision' },
    ]},
    { phase:'Stage 2 — the functional test (all four needed to HAVE capacity)', items:[
      { name:'UNDERSTAND the relevant information', how:'Ask them to tell you, in their words, what the decision is and the options, benefits, risks and consequences', positive:'Cannot understand the salient information → fails this limb' },
      { name:'RETAIN it long enough to decide', how:'Long enough to make the decision (even briefly); use memory aids', positive:'Cannot retain even momentarily → fails (note: needing it written down is still retaining)' },
      { name:'WEIGH / USE the information', how:'Can they balance the pros & cons and apply them to themselves? This is the limb most often impaired (e.g. delirium, frontal/psychotic illness, anorexia)', positive:'Cannot use or weigh the information in the balance → fails this limb' },
      { name:'COMMUNICATE the decision', how:'By any means — speech, writing, blinking, AAC; involve SALT if needed', positive:'Totally unable to communicate by ANY means (rare, e.g. complete locked-in) → fails this limb' },
    ]},
    { phase:'If they LACK capacity — best interests (principles 4 & 5)', items:[
      { name:'Make / support a best-interests decision', how:'Consider past & present wishes, feelings, beliefs and values; consult family, carers, LPA/deputy; choose the LEAST restrictive option; can the decision wait until capacity returns?', finding:'Document who was consulted and why the option chosen is least restrictive' },
      { name:'Is an IMCA needed?', how:'Serious medical treatment or change of accommodation with NO appropriate family/friend to consult → instruct an Independent Mental Capacity Advocate', positive:'Unbefriended + serious decision → IMCA referral is a legal duty' },
      { name:'Lawful authority for restraint / DoL', how:'If care amounts to a deprivation of liberty → DoLS / Liberty Protection Safeguards; disputes or finely-balanced serious decisions → Court of Protection', finding:'Restraint must be necessary and proportionate to risk of harm' },
    ]},
  ],
  outcomes:[
    { finding:'No impairment/disturbance of mind or brain (Stage 1 negative)', meaning:'MCA incapacity test not met — the person makes their own decision, even if you think it unwise.' },
    { finding:'Stage 1 positive but can understand, retain, weigh & communicate', meaning:'HAS capacity for this decision — respect it; document the assessment.' },
    { finding:'Stage 1 positive and fails ≥1 of the four functional abilities', meaning:'LACKS capacity for THIS decision now → best-interests process (least restrictive).' },
    { finding:'Capacity varies through the day / with treatment', meaning:'Fluctuating capacity — reassess at the best time; defer non-urgent decisions until capacity returns.' },
    { finding:'Capacitous refusal of recommended treatment', meaning:'An unwise but capacitous decision must be respected — record the discussion and safety-net.' },
    { finding:'Valid & applicable advance decision to refuse treatment', meaning:'Legally binding — follow it; do not start a best-interests process for that treatment.' },
    { finding:'Serious decision, lacks capacity, no family/friend to consult', meaning:'Instruct an IMCA; consider Court of Protection if disputed or finely balanced.' },
    { finding:'Care plan amounts to a deprivation of liberty', meaning:'Requires lawful authorisation (DoLS / LPS) — arrange it.' },
  ],
  links:{ article:'pages/articles.html#capacity-consent', articleLabel:'Mental capacity, consent & covert medication', case:'cases/dementia.html', caseLabel:'Dementia' },
},

/* ===================== NIPE / 6–8 WEEK ===================== */
{
  id:'nipe-newborn', system:'Paediatric', icon:'👶', title:'Newborn & 6–8 week infant check',
  blurb:'The systematic head-to-toe NIPE screen — eyes (red reflex), heart, hips (Barlow/Ortolani) and testes — plus a reassure / follow-up / refer guide to the common 6–8 week findings (skin, birthmarks, squint, tongue-tie, colic, reflux, hernias, tone & feeding).',
  indications:[
    'Routine newborn (within 72 h) and 6–8 week examination',
    'Parental concern about an infant',
    'Screening for congenital cardiac, hip, eye and testicular abnormality',
  ],
  equipment:['Ophthalmoscope (red reflex)','Stethoscope (neonatal)','Warm hands, warm room','Tape measure & growth chart','Pulse oximeter (if screening)'],
  redFlags:[
    'Absent or asymmetric red reflex → **urgent** ophthalmology (?congenital cataract / retinoblastoma)',
    'Weak/absent femoral pulses or murmur with poor feeding/cyanosis → urgent cardiology (?coarctation/duct-dependent lesion)',
    'Positive Barlow/Ortolani or limited hip abduction → urgent hip ultrasound (DDH)',
    'Bilateral undescended testes / suspected ambiguous genitalia → urgent senior review',
    'Failure to thrive, not back to birth weight, or jaundice >14 days → investigate',
  ],
  sequence:[
    { phase:'General & measurements', items:[
      { name:'Tone, colour, alertness, weight/OFC', finding:'Plot on growth chart; note jaundice, pallor, cyanosis, dysmorphism' },
    ]},
    { phase:'Head & eyes', items:[
      { name:'Head, fontanelles, palate', how:'Inspect & palpate sutures/fontanelles; visualise & feel the palate', finding:'Cleft palate (easily missed), craniosynostosis, large/tense fontanelle' },
      { name:'Red reflex', how:'Ophthalmoscope at ~30 cm in dimmed light, both eyes', positive:'Absent/white/asymmetric reflex → urgent referral', pitfall:'Must be done in every check — sight- and life-threatening if missed' },
    ]},
    { phase:'Cardiorespiratory', items:[
      { name:'Heart & femoral pulses', how:'Auscultate all areas; palpate both femorals simultaneously', positive:'Murmur, weak/absent femorals, tachypnoea → cardiac assessment' },
    ]},
    { phase:'Abdomen, hips & genitalia', items:[
      { name:'Abdomen', finding:'Organomegaly, masses, umbilicus' },
      { name:'Hips — Barlow & Ortolani', how:'Barlow: adduct + posterior pressure (dislocate); Ortolani: abduct + anterior lift (relocate)', positive:'Clunk = dislocatable/dislocated hip → ultrasound', pitfall:'Soft clicks are usually benign; a clunk is significant' },
      { name:'Genitalia & testes', finding:'Both testes descended; hypospadias; ambiguous genitalia' },
    ]},
    { phase:'Spine, limbs & reflexes', items:[
      { name:'Spine & skin', finding:'Sacral dimple/tuft/naevus, midline defects' },
      { name:'Limbs & digits', finding:'Talipes, extra/fused digits, symmetry of movement' },
      { name:'Newborn reflexes', finding:'Moro, grasp, rooting, suck (newborn check)' },
    ]},
  ],
  outcomes:[
    { finding:'All four screening elements (eyes/heart/hips/testes) normal', meaning:'Reassure; routine follow-up and immunisation schedule' },
    { finding:'Absent red reflex', meaning:'Urgent ophthalmology — congenital cataract / retinoblastoma' },
    { finding:'Positive Barlow/Ortolani or limited abduction', meaning:'DDH — urgent hip ultrasound ± orthopaedic referral' },
    { finding:'Murmur + weak femorals or unwell infant', meaning:'?Duct-dependent lesion/coarctation — urgent cardiac assessment' },
    { finding:'Undescended testis at 6–8 weeks', meaning:'Recheck; refer if still undescended (re-examine at later review per pathway)' },
  ],
  note:'NIPE has four national screening components: eyes, heart, hips and testes. The 6–8 week check repeats them because some conditions (cataract, DDH, CHD, UDT) declare later. The red reflex is mandatory at every check.',
  commonFindings:[
    { group:'🩹 Skin & birthmarks', items:[
      { finding:'Erythema toxicum, milia, miliaria, neonatal acne, peeling skin', action:'reassure', detail:'Benign transient newborn rashes — explain natural history; no treatment.' },
      { finding:'Salmon patch ("stork mark") on eyelids/nape; Mongolian blue spot', action:'reassure', detail:'Fade over months/years. **Document Mongolian spots** clearly to avoid later NAI confusion.' },
      { finding:'Infantile haemangioma ("strawberry mark"), uncomplicated', action:'followup', detail:'Grows then involutes — monitor size/site at reviews; photograph if helpful.' },
      { finding:'Haemangioma that is peri-ocular, airway/"beard", nasal-tip, ulcerated, large/segmental or multiple', action:'urgent', detail:'Early dermatology/paediatrics — timely propranolol; risk to vision/airway.' },
      { finding:'Port-wine stain, esp. facial/peri-ocular (?Sturge-Weber)', action:'refer', detail:'Dermatology ± ophthalmology/neurology; pulsed-dye laser.' },
      { finding:'Large/giant or changing congenital melanocytic naevus; ≥6 café-au-lait macules', action:'refer', detail:'Dermatology (melanoma surveillance) / paediatrics-genetics (?NF1).' },
      { finding:'Cradle cap (seborrhoeic dermatitis), infantile eczema', action:'reassure', detail:'Emollients ± soft brushing; treat eczema with emollient ± mild topical steroid, safety-net.' },
    ]},
    { group:'👁️ Eyes & squint', items:[
      { finding:'Intermittent eye misalignment in the first weeks; transient watery eye (blocked tear duct)', action:'reassure', detail:'Common up to ~3–4 months; teach lacrimal massage for sticky eye. Recheck at next review.' },
      { finding:'Constant/fixed squint at any age, or any squint persisting beyond ~3–4 months', action:'refer', detail:'Ophthalmology — exclude amblyopia and (rarely) retinoblastoma; don\u2019t "wait and see" a constant squint.' },
      { finding:'Absent / white / asymmetric red reflex, or leukocoria', action:'urgent', detail:'**Urgent ophthalmology** — congenital cataract / retinoblastoma.' },
      { finding:'Persistent purulent discharge with red, swollen lids', action:'followup', detail:'?Conjunctivitis vs ophthalmia neonatorum — swab; if neonate/systemic, treat urgently.' },
    ]},
    { group:'👶 Head, sutures & shape', items:[
      { finding:'Positional plagiocephaly/brachycephaly with full neck movement', action:'reassure', detail:'Repositioning + tummy time; reassure it improves once mobile. Recheck.' },
      { finding:'Palpable ridged suture, restricted skull growth, odd/worsening head shape', action:'refer', detail:'?Craniosynostosis → paediatrics/craniofacial.' },
      { finding:'Large/tense/bulging fontanelle, or sunken fontanelle', action:'urgent', detail:'Raised ICP / dehydration → urgent assessment.' },
      { finding:'Torticollis with persistent head turn / plagiocephaly', action:'followup', detail:'Physiotherapy; review — refer if not improving.' },
    ]},
    { group:'👅 Mouth, tongue-tie & feeding', items:[
      { finding:'Tongue-tie with no feeding problem', action:'reassure', detail:'Most need no treatment; reassure and review only if feeding issues develop.' },
      { finding:'Tongue-tie WITH feeding difficulty (poor latch, maternal nipple pain, poor weight gain)', action:'refer', detail:'Infant-feeding / tongue-tie service for assessment ± frenotomy.' },
      { finding:'Cleft palate (may be isolated, easily missed)', action:'urgent', detail:'Visualise & feel the whole palate — refer to cleft service; feeding support.' },
      { finding:'Poor suckling / weak feeding, sleepy feeder', action:'followup', detail:'Feeding assessment, weigh, observe a feed; exclude illness — lower threshold to escalate if also hypotonic/jaundiced.' },
      { finding:'Faltering growth / not back to birth weight by ~2 weeks', action:'refer', detail:'Feeding review + paediatric/health-visitor input; plot on growth chart.' },
    ]},
    { group:'🍼 Crying, colic, posseting & stools', items:[
      { finding:'Infant colic — paroxysmal crying, otherwise thriving and well', action:'reassure', detail:'Self-limiting, resolves by ~3–4 months; support parents, soothing techniques, safety-net.' },
      { finding:'Posseting / uncomplicated reflux (GOR) in a thriving baby', action:'reassure', detail:'Positional advice, smaller frequent feeds; reassure it settles — no routine medication.' },
      { finding:'Reflux with distress/back-arching, faltering growth, or feed refusal (GORD); ?cow\u2019s-milk allergy', action:'followup', detail:'Trial per NICE NG1 (feeding review, ±alginate/PPI); consider CMPA (maternal/infant exclusion).' },
      { finding:'Constipation — but stool soft, thriving, no red flags', action:'reassure', detail:'Reassure normal variation in frequency; review if persists.' },
      { finding:'Delayed meconium >24–48 h, ribbon stools, abdominal distension, or constipation from birth', action:'refer', detail:'?Hirschsprung / anorectal anomaly → paediatric surgery.' },
      { finding:'Bilious (green) vomiting, blood in stool, or unwell with distension', action:'urgent', detail:'**Same-day** — exclude obstruction/volvulus/NEC; 999/A&E.' },
    ]},
    { group:'💪 Tone, movement & hips', items:[
      { finding:'Mild/benign findings — settling jitteriness, brief tremor when crying', action:'reassure', detail:'Common in newborns; reassure if neuro otherwise normal and feeding well.' },
      { finding:'Hypotonia ("floppy"), persistent asymmetry of movement, or hypertonia/stiffness', action:'refer', detail:'Paediatric assessment — exclude neuromuscular/neurological cause.' },
      { finding:'Positive Barlow/Ortolani, limited hip abduction, leg-length or skin-crease asymmetry; breech/FHx as risk', action:'refer', detail:'**Hip ultrasound** ± orthopaedics for DDH (urgent if frank clunk).' },
      { finding:'Soft hip "clicks" without clunk, full abduction', action:'reassure', detail:'Usually benign — document; safety-net for limp/asymmetry later.' },
    ]},
    { group:'🫃 Hernias, umbilicus & genitalia', items:[
      { finding:'Umbilical hernia, reducible; umbilical granuloma', action:'reassure', detail:'Most umbilical hernias resolve by 2–4 years; granuloma — topical salt/silver nitrate. Review.' },
      { finding:'Inguinal hernia (esp. preterm) — reducible', action:'refer', detail:'Paediatric surgery (higher incarceration risk in infants) — relatively prompt.' },
      { finding:'Irreducible, tender, firm or discoloured inguinal/umbilical swelling; vomiting', action:'urgent', detail:'**Incarcerated hernia → same-day** paediatric surgery / A&E.' },
      { finding:'Hydrocele (transilluminates), reducible, well baby', action:'reassure', detail:'Most resolve by ~1–2 years; review.' },
      { finding:'Undescended testis at 6–8 weeks (unilateral)', action:'followup', detail:'Re-examine at later review; refer to surgery if still undescended (~by 3–6 months per pathway).' },
      { finding:'Bilateral undescended testes / any suspected ambiguous genitalia; hypospadias', action:'urgent', detail:'Bilateral UDT or ambiguity → **urgent senior/endocrine** review (exclude CAH); hypospadias → no circumcision, refer urology.' },
    ]},
    { group:'🫁 Breathing, noises & snoring', items:[
      { finding:'Nasal congestion / snuffles, intermittent snoring in a thriving, well baby', action:'reassure', detail:'Common; saline drops; reassure. Review if feeding/sleep affected.' },
      { finding:'Stridor that is positional and mild (?laryngomalacia), thriving', action:'followup', detail:'Usually self-limiting — monitor feeding/growth; refer ENT if severe or faltering growth.' },
      { finding:'Persistent tachypnoea, recurrent cyanosis, sweating/breathless on feeds, severe stridor or apnoea', action:'urgent', detail:'?Cardiac/respiratory cause → urgent paediatric/cardiology assessment.' },
    ]},
  ],
  links:{ resource:'pages/resources.html#local-pathways', resourceLabel:'Paediatric pathways' },
},

/* ===================== DEVELOPMENTAL ===================== */
{
  id:'developmental', system:'Paediatric', icon:'🧒', title:'Developmental assessment',
  blurb:'Screening the four domains against milestones and acting on red flags — gross motor, fine motor/vision, speech/hearing, social.',
  indications:[
    'Parental concern about development',
    'Routine surveillance / health-visitor referral',
    'Suspected global or specific delay (e.g. speech, motor)',
    'Possible neurodevelopmental disorder (ASD, ADHD)',
  ],
  equipment:['Age-appropriate toys/bricks','Picture book','Growth chart & red book (PCHR)','Quiet, child-friendly space'],
  redFlags:[
    'Loss of previously acquired skills (regression) → **urgent** referral',
    'Not smiling by 8 weeks; no response to sound; absent red reflex → refer',
    'Not sitting by 9 months, not walking by 18 months → refer',
    'No words by 18 months / no 2-word phrases by 2 years → audiology + SALT',
    'Asymmetry of movement / early hand preference (<1 yr) → ?cerebral palsy',
  ],
  sequence:[
    { phase:'Gross motor', items:[
      { name:'Milestones', finding:'Head control ~3–4 m · sits unsupported ~6–8 m · crawls ~9 m · walks 12–18 m · runs ~2 y', pitfall:'Correct for prematurity up to 2 years' },
    ]},
    { phase:'Fine motor & vision', items:[
      { name:'Milestones', finding:'Fixes & follows ~6 wk · palmar grasp ~6 m · pincer grip ~9–12 m · tower of bricks/scribble toddler' },
    ]},
    { phase:'Speech, language & hearing', items:[
      { name:'Milestones', finding:'Coos ~3 m · babbles ~6–9 m · first words ~12 m · 2-word phrases ~2 y · understandable speech ~3 y', positive:'Concern → formal audiology assessment first' },
    ]},
    { phase:'Social, emotional & behaviour', items:[
      { name:'Milestones', finding:'Social smile ~6 wk · stranger awareness ~9 m · waves bye ~12 m · symbolic play ~18–24 m', positive:'Lack of joint attention/eye contact, repetitive behaviour → consider ASD pathway' },
    ]},
  ],
  outcomes:[
    { finding:'All domains within normal range for (corrected) age', meaning:'Reassure; continue routine surveillance' },
    { finding:'Isolated delay in one domain (e.g. speech)', meaning:'Targeted referral — e.g. audiology + speech & language therapy' },
    { finding:'Delay across all four domains', meaning:'Global developmental delay — paediatric referral + investigation' },
    { finding:'Regression / loss of skills', meaning:'Urgent paediatric/neurology referral' },
    { finding:'Social communication concerns + repetitive behaviour', meaning:'Neurodevelopmental (ASD) pathway referral' },
  ],
  note:'Always correct for prematurity until age 2. Milestones have a normal range, but limit ages (e.g. walking by 18 months) and any regression are firm referral triggers. Check hearing before attributing speech delay to anything else.',
  links:{ resource:'pages/resources.html#local-pathways', resourceLabel:'Paediatric pathways' },
},

]);
