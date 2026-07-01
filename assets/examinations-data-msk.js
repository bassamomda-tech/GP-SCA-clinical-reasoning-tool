/* Reasoning GP — Examinations data: Musculoskeletal */
window.RGP_EXAMINATIONS = (window.RGP_EXAMINATIONS || []).concat([

{
  id:'gals', system:'Musculoskeletal', icon:'🚶', title:'GALS screen',
  blurb:'Gait, Arms, Legs, Spine — the rapid MSK screen to flag where to examine in detail.',
  indications:[
    'Any new MSK or joint symptom as an opening screen',
    'Multi-site / generalised pain (?inflammatory, ?fibromyalgia)',
    'Falls or functional decline in older adults',
    'Unexplained limp or difficulty walking',
    'Screening before a focused regional examination',
  ],
  equipment:['Adequate space to walk','Couch','Patient suitably undressed (shorts/gown)'],
  sequence:[
    { phase:'Screening questions', items:[
      { name:'Three GALS questions', how:'"Any pain or stiffness in your muscles, joints or back?" · "Can you dress yourself completely without difficulty?" · "Can you walk up and down stairs without difficulty?"', suggests:'Negative answers to all three make significant MSK disease unlikely' },
    ]},
    { phase:'Gait', items:[
      { name:'Observe walking + turning', how:'Watch the patient walk a few metres, turn, and return', finding:'Symmetry, smoothness, stride length, arm swing, antalgic/Trendelenburg/festinant patterns, ability to turn quickly' },
    ]},
    { phase:'Arms', items:[
      { name:'Hands inspection', how:'Palms then backs of hands', finding:'Swelling, deformity, wasting (e.g. dorsal interossei), nail/skin changes' },
      { name:'Power grip & precision grip', how:'Make a fist; oppose thumb to each fingertip', finding:'Reduced grip = small-joint or neurological problem' },
      { name:'Squeeze MCPs', how:'Gently squeeze across the metacarpophalangeal joints', positive:'Tenderness = MCP synovitis (early inflammatory arthritis)' },
      { name:'Shoulder abduction & hands behind head', how:'"Put your hands behind your head"', finding:'Tests glenohumeral + rotator cuff function and elbow' },
    ]},
    { phase:'Legs', items:[
      { name:'Knee/hip flexion & internal rotation', how:'Passively flex hip and knee, then internally rotate hip', positive:'Restricted/painful internal rotation = early hip OA' },
      { name:'Patellar tap / bulge', how:'Assess for effusion', positive:'Effusion suggests knee pathology' },
      { name:'Squeeze MTPs', how:'Squeeze across metatarsophalangeal joints', positive:'Tenderness = MTP synovitis' },
    ]},
    { phase:'Spine', items:[
      { name:'Inspect from behind & side', finding:'Scoliosis, kyphosis, loss of lumbar lordosis, paraspinal/shoulder asymmetry' },
      { name:'Lateral flexion / "ear to shoulder"', finding:'Cervical mobility' },
      { name:'Lumbar flexion (touch toes) / modified Schober', positive:'Reduced lumbar excursion = inflammatory (e.g. axial SpA) or mechanical restriction' },
    ]},
  ],
  outcomes:[
    { finding:'All screen normal', meaning:'Significant MSK disease unlikely — reassure or pursue non-MSK causes' },
    { finding:'MCP/MTP squeeze tenderness + early-morning stiffness >30 min', meaning:'Suspected inflammatory arthritis — bloods (CRP/ESR, RF, anti-CCP) + early rheumatology referral' },
    { finding:'Restricted painful hip internal rotation', meaning:'Hip OA — focused hip examination' },
    { finding:'Abnormal gait', meaning:'Localise (antalgic = pain; Trendelenburg = abductor weakness/hip; broad-based = cerebellar/sensory) and examine that region' },
  ],
  redFlags:[
    'Hot, swollen, acutely painful single joint → **same-day** assessment for septic arthritis (aspirate before antibiotics)',
    'New inflammatory-pattern joint swelling → refer to be seen within 3 weeks (NICE NG100)',
    'Progressive neurological deficit or saddle anaesthesia with back pain → emergency (?cauda equina)',
  ],
  note:'GALS localises the problem; it does not replace a focused regional examination. A positive screen tells you *where* to look in detail next.',
  links:{ algorithm:'tools/algorithms/paediatric-msk.html', algorithmLabel:'Paediatric MSK (children)' },
},

{
  id:'shoulder', system:'Musculoskeletal', icon:'💪', title:'Shoulder examination',
  blurb:'Look–feel–move–special tests, with a primary-care diagnostic pathway and referral thresholds.',
  indications:[
    'Shoulder pain or stiffness',
    'Reduced range / functional limitation (dressing, overhead, hand-behind-back)',
    'Suspected rotator cuff, frozen shoulder, instability or AC joint problem',
    'Trauma with loss of movement or abnormal shape',
  ],
  equipment:['Adequate exposure of both shoulders','Couch'],
  redFlags:[
    'Trauma + pain + weakness → ?acute cuff tear',
    'Any mass or swelling → ?tumour',
    'Red skin, fever or systemically unwell → ?septic arthritis / infection',
    'Trauma / seizure / electric shock + loss of rotation and abnormal shape → ?unreduced (posterior) dislocation',
    'New unexplained shoulder mass or progressive night pain → 2-week-wait / urgent imaging',
  ],
  pathway:[
    { q:'Is it neck or shoulder?', note:'Ask the patient to move the neck first, then the shoulder — which reproduces the pain?', branches:[
      { condition:'Neck', clues:'Movement of the neck reproduces pain; pain radiates below elbow; dermatomal sensory change', primaryCare:'Follow local spinal/neck pathway; assess for radiculopathy', refer:'As per neck pathway if red flags/neurology' },
      { condition:'Shoulder', clues:'Shoulder movement reproduces pain — continue down the shoulder pathway', primaryCare:'Proceed to instability → AC joint → glenohumeral → cuff', refer:'' },
    ]},
    { q:'History of instability? (does the shoulder come out of joint, or feel it might during sport/activity?)', note:'Common age 10–35 yrs', branches:[
      { condition:'Instability', primaryCare:'Physiotherapy if atraumatic', refer:'Refer if traumatic dislocation, ongoing symptoms, or atraumatic with failed physio' },
    ]},
    { q:'Pain localised to the AC joint with tenderness? High-arc pain? Positive cross-arm test?', note:'Common age >30 yrs', branches:[
      { condition:'Acromioclavicular joint disease', primaryCare:'Rest / NSAIDs / analgesia · steroid injection · physiotherapy · X-ray if no improvement', refer:'Refer if transient or no response to injection + physio' },
    ]},
    { q:'Reduced PASSIVE external rotation?', note:'Frozen shoulder common 35–65 yrs; glenohumeral OA common >60 yrs', branches:[
      { condition:'Glenohumeral joint (frozen shoulder / arthritis)', primaryCare:'X-ray to differentiate · rest · NSAIDs/analgesia · patient information · intra-articular corticosteroid injection', refer:'Frozen shoulder with normal X-ray — refer if atypical and/or severe functional limitation. Refer if arthritis on X-ray with poor response to analgesia + injection' },
    ]},
    { q:'Painful arc of abduction? Pain on abduction with thumb down, worse against resistance?', note:'Rotator cuff tendinopathy common 35–75 yrs. Trauma + loss of abduction in a younger patient = red flag (acute cuff tear)', branches:[
      { condition:'Rotator cuff tendinopathy', primaryCare:'Rest / NSAIDs / analgesia · subacromial corticosteroid injection · physiotherapy', refer:'Refer if transient or no response to injection + physiotherapy. NB massive cuff tears in patients >75 yrs are generally not repairable' },
    ]},
    { q:'None of the above?', branches:[
      { condition:'Other cause of neck or arm pain', clues:'Reconsider referred pain (cardiac, diaphragmatic, apical lung), polymyalgia rheumatica, neurological causes', primaryCare:'Re-take history; examine neck, chest and neurology', refer:'Investigate / refer per suspected cause' },
    ]},
  ],
  sequence:[
    { phase:'Look (inspection)', items:[
      { name:'From front, side and behind', finding:'Muscle wasting (deltoid, supraspinatus/infraspinatus fossae), asymmetry, swelling, scars, winging of scapula' },
      { name:'Posture & contour', finding:'Squaring (anterior dislocation), prominent AC joint (step deformity)' },
    ]},
    { phase:'Feel (palpation)', items:[
      { name:'Bony & soft-tissue landmarks', how:'Sternoclavicular joint → clavicle → AC joint → acromion → coracoid → greater tuberosity → spine of scapula', finding:'Tenderness localises pathology (AC joint, greater tuberosity = cuff insertion)' },
      { name:'Temperature', positive:'Warmth → inflammation/infection' },
    ]},
    { phase:'Move (active then passive)', items:[
      { name:'Flexion / extension / abduction / adduction', how:'Active first, then passive', finding:'Painful arc 60–120° abduction = subacromial impingement' },
      { name:'External & internal rotation', how:'Elbows tucked to sides at 90°; internal rotation = hand up the back', finding:'Globally reduced (esp. passive ER) = frozen shoulder / glenohumeral pathology' },
      { name:'Active vs passive discrepancy', positive:'Passive much greater than active = cuff tear or pain inhibition' },
    ]},
    { phase:'Special tests', items:[
      { name:'Painful arc test', how:'Active abduction in the scapular plane', positive:'Pain 60–120° → subacromial impingement; pain at top arc (>160°) → AC joint', pitfall:'Non-specific; combine with other impingement tests' },
      { name:'Empty can (Jobe) test', how:'Arm 90° abduction in scapular plane, thumb down, resist downward pressure', positive:'Weakness/pain → supraspinatus tendinopathy or tear', suggests:'Cuff (supraspinatus)' },
      { name:'External rotation against resistance', how:'Elbow at side 90°, resist ER', positive:'Weakness → infraspinatus/teres minor', suggests:'Posterior cuff' },
      { name:'Gerber lift-off test', how:'Hand on lower back, push off against resistance', positive:'Weakness → subscapularis', suggests:'Anterior cuff' },
      { name:'Hawkins–Kennedy', how:'Shoulder & elbow flexed 90°, passively internally rotate', positive:'Pain → subacromial impingement', pitfall:'Sensitive but not specific' },
      { name:'Cross-arm (scarf) test', how:'Passively adduct arm across body', positive:'Pain over AC joint → AC joint pathology' },
      { name:'Apprehension / relocation', how:'Arm 90° abduction + external rotation; then posterior pressure on humeral head', positive:'Apprehension relieved by relocation → anterior instability', pitfall:'Only if instability suspected — can be uncomfortable' },
    ]},
    { phase:'Function & finish', items:[
      { name:'Hand behind head & behind back', finding:'Composite functional movement (dressing, grooming)' },
      { name:'Neck screen & neurovascular check', how:'Quick cervical movements; distal pulses/sensation', pitfall:'Always exclude the neck as a source of referred pain' },
    ]},
  ],
  outcomes:[
    { finding:'Painful arc + positive Hawkins/empty can, preserved passive ROM', meaning:'Rotator cuff tendinopathy / subacromial impingement — analgesia, physio ± subacromial injection' },
    { finding:'Global loss of movement, esp. passive external rotation', meaning:'Adhesive capsulitis (frozen shoulder) or glenohumeral OA — X-ray to differentiate' },
    { finding:'Weakness on cuff testing with good passive range', meaning:'Rotator cuff tear — consider US/MRI and orthopaedic referral (age-dependent)' },
    { finding:'AC joint tenderness + positive cross-arm', meaning:'AC joint OA — analgesia ± injection' },
    { finding:'Positive apprehension/relocation', meaning:'Anterior glenohumeral instability — physio; refer if recurrent/traumatic' },
  ],
  note:'A painful arc with intact passive range points to the cuff/subacromial space; loss of passive external rotation points to the joint itself (frozen shoulder or OA). Always move the neck before blaming the shoulder.',
  links:{ algorithm:'tools/algorithms/shoulder-pain.html', algorithmLabel:'Shoulder pain pathway' },
},

{
  id:'knee', system:'Musculoskeletal', icon:'🦵', title:'Knee examination',
  blurb:'Look–feel–move plus ligament, meniscal and effusion tests.',
  indications:['Knee pain, swelling or giving way','Locking or clicking','Trauma / suspected ligament or meniscal injury','Suspected OA or inflammatory arthritis'],
  equipment:['Both knees exposed (and thighs)','Couch'],
  redFlags:[
    'Hot swollen knee + fever/unwell → **same-day** — aspirate for septic arthritis / crystals',
    'Inability to weight-bear after trauma or bony tenderness → Ottawa knee rules → X-ray',
    'Locked knee (cannot fully extend) → urgent orthopaedic / ?bucket-handle meniscal tear',
  ],
  sequence:[
    { phase:'Look', items:[
      { name:'Standing & walking', finding:'Varus/valgus alignment, antalgic gait, quadriceps wasting (VMO)' },
      { name:'Supine inspection', finding:'Swelling, erythema, scars, fixed flexion' },
    ]},
    { phase:'Feel', items:[
      { name:'Temperature & joint-line palpation', finding:'Warmth = inflammation; joint-line tenderness = meniscal pathology' },
      { name:'Effusion tests', how:'Patellar tap (large effusion) and bulge/sweep test (small effusion)', positive:'Fluid shift = effusion' },
    ]},
    { phase:'Move', items:[
      { name:'Active & passive flexion/extension', finding:'Crepitus (OA), fixed flexion deformity, hyperextension' },
    ]},
    { phase:'Special tests', items:[
      { name:'Anterior/posterior draw + Lachman', how:'Knee flexed 90° (draw) / 20–30° (Lachman); assess tibial translation', positive:'Increased anterior translation/soft endpoint → ACL; posterior sag/draw → PCL', suggests:'Cruciate ligament injury', pitfall:'Lachman more sensitive than anterior draw for ACL' },
      { name:'Collateral stress (valgus/varus)', how:'Stress at 0° and 30° flexion', positive:'Laxity/pain medially → MCL; laterally → LCL' },
      { name:'McMurray test', how:'Flex knee, rotate tibia, extend', positive:'Pain ± click at joint line → meniscal tear', pitfall:'Low sensitivity; uncomfortable — joint-line tenderness often more useful' },
    ]},
  ],
  outcomes:[
    { finding:'Effusion + crepitus + reduced range in older adult', meaning:'Osteoarthritis — analgesia, exercise, weight management' },
    { finding:'Acute haemarthrosis after pivot injury + positive Lachman', meaning:'ACL rupture — physio + orthopaedic referral' },
    { finding:'Joint-line tenderness + positive McMurray', meaning:'Meniscal tear — consider MRI/referral if mechanical symptoms' },
    { finding:'Hot effusion, unable to weight-bear', meaning:'Septic arthritis or crystal arthropathy — aspirate same day' },
  ],
  links:{ algorithm:'tools/algorithms/knee-pain.html', algorithmLabel:'Knee pain pathway', case:'cases/osteoarthritis.html', caseLabel:'Osteoarthritis' },
},

{
  id:'hip', system:'Musculoskeletal', icon:'🍑', title:'Hip examination',
  blurb:'Gait, Trendelenburg, range with internal-rotation loss, and Thomas test for fixed flexion.',
  indications:['Hip / groin pain','Limp or reduced walking distance','Suspected OA, trochanteric pain or referred lumbar pain','Falls assessment'],
  equipment:['Adequate exposure','Couch'],
  redFlags:[
    'Child / adolescent with hip or knee pain + limp → urgent (SUFE, Perthes, septic arthritis)',
    'Hip pain + fever/unwell → ?septic arthritis',
    'Inability to weight-bear after fall in older adult → X-ray for fracture',
    'Rest/night pain, weight loss → ?bone metastasis',
  ],
  sequence:[
    { phase:'Look', items:[
      { name:'Gait & stance', finding:'Antalgic gait; Trendelenburg gait (lurch toward affected side)' },
      { name:'Trendelenburg test', how:'Stand on one leg; watch the contralateral pelvis', positive:'Contralateral pelvis drops → ipsilateral abductor weakness' },
      { name:'Leg length & lying inspection', finding:'True vs apparent leg-length discrepancy, fixed deformity, scars' },
    ]},
    { phase:'Feel', items:[
      { name:'Greater trochanter & groin', positive:'Lateral tenderness → trochanteric pain syndrome; groin tenderness → joint' },
    ]},
    { phase:'Move', items:[
      { name:'Flexion, internal & external rotation, abduction/adduction', finding:'Early OA → loss of internal rotation and pain at extremes' },
      { name:'Thomas test', how:'Flex opposite hip fully to flatten lordosis; observe the examined leg', positive:'Examined thigh lifts off couch → fixed flexion deformity' },
    ]},
  ],
  outcomes:[
    { finding:'Reduced internal rotation + groin pain in older adult', meaning:'Hip OA — analgesia, exercise; consider X-ray and arthroplasty referral if severe' },
    { finding:'Lateral tenderness, pain on resisted abduction', meaning:'Greater trochanteric pain syndrome (gluteal tendinopathy) — load management, physio' },
    { finding:'Positive Trendelenburg', meaning:'Abductor (gluteus medius) dysfunction — OA, tendinopathy or nerve' },
    { finding:'Pain reproduced by lumbar movements, normal hip range', meaning:'Referred pain from lumbar spine' },
  ],
  links:{ algorithm:'tools/algorithms/hip-pain.html', algorithmLabel:'Hip pain pathway', case:'cases/osteoarthritis.html', caseLabel:'Osteoarthritis' },
},

{
  id:'hand-wrist', system:'Musculoskeletal', icon:'🖐️', title:'Hand & wrist examination',
  blurb:'Inspection for arthritis patterns, function, and nerve-entrapment provocation tests.',
  indications:['Hand/wrist pain, swelling or stiffness','Suspected OA vs inflammatory arthritis','Numbness/tingling (?carpal tunnel)','Reduced grip or dexterity'],
  equipment:['Pillow for support','Couch/table'],
  redFlags:[
    'Hot swollen single joint → ?septic arthritis / gout — aspirate',
    'New symmetrical small-joint synovitis with early-morning stiffness → refer within 3 weeks (?RA)',
    'Rapidly progressive hand weakness/wasting → urgent neurology',
  ],
  sequence:[
    { phase:'Look', items:[
      { name:'Palms & dorsum', finding:'Heberden (DIP) & Bouchard (PIP) nodes = OA; MCP/PIP swelling + ulnar deviation = RA; psoriatic nail/skin changes; wasting of thenar eminence' },
    ]},
    { phase:'Feel', items:[
      { name:'Squeeze MCPs; palpate each joint; anatomical snuffbox', positive:'MCP tenderness = synovitis; snuffbox tenderness after FOOSH = ?scaphoid fracture' },
    ]},
    { phase:'Move & function', items:[
      { name:'Make a fist, grip, pinch, oppose thumb', finding:'Functional grip and dexterity' },
    ]},
    { phase:'Special tests', items:[
      { name:'Tinel test', how:'Tap over the carpal tunnel (median nerve)', positive:'Tingling in median distribution → carpal tunnel syndrome', pitfall:'Lower sensitivity than Phalen' },
      { name:'Phalen test', how:'Hold full wrist flexion 60 s', positive:'Median paraesthesia → carpal tunnel syndrome' },
      { name:'Finkelstein test', how:'Thumb in fist, ulnar-deviate the wrist', positive:'Pain over radial styloid → De Quervain tenosynovitis' },
    ]},
  ],
  outcomes:[
    { finding:'DIP/PIP nodes, base-of-thumb pain', meaning:'Hand OA — analgesia, splint, hand exercises' },
    { finding:'Symmetrical MCP/PIP synovitis + stiffness', meaning:'Inflammatory arthritis (RA) — bloods + rheumatology referral' },
    { finding:'Positive Tinel/Phalen + nocturnal median paraesthesia', meaning:'Carpal tunnel syndrome — splint, consider steroid injection / decompression' },
    { finding:'Positive Finkelstein', meaning:'De Quervain tenosynovitis — splint, NSAID, injection' },
  ],
  links:{ algorithm:'tools/algorithms/hand-pain.html', algorithmLabel:'Hand pain pathway' },
},

{
  id:'spine', system:'Musculoskeletal', icon:'🦴', title:'Spine examination (back & neck)',
  blurb:'Inspection, movement, neurological screen and the red-flag-driven approach to back pain.',
  indications:['Back or neck pain','Suspected radiculopathy (leg/arm pain, paraesthesia)','Suspected inflammatory back pain','Screening for red flags'],
  equipment:['Couch','Tendon hammer','Tape measure (Schober)'],
  redFlags:[
    'Saddle anaesthesia, bilateral sciatica, bladder/bowel dysfunction → **emergency** ?cauda equina (urgent MRI)',
    'Thoracic pain, age <20 or >55, night pain, weight loss, history of cancer → ?malignancy/infection',
    'Fever, IVDU, immunosuppression with spinal pain → ?discitis/epidural abscess',
    'Progressive motor weakness or widespread neurology → urgent referral',
  ],
  sequence:[
    { phase:'Look', items:[
      { name:'Standing inspection', finding:'Scoliosis, kyphosis, loss of lumbar lordosis, muscle spasm, asymmetry' },
    ]},
    { phase:'Move', items:[
      { name:'Lumbar flexion/extension/lateral flexion; cervical rotation/flexion', finding:'Restriction pattern' },
      { name:'Modified Schober test', how:'Marks 10 cm above & 5 cm below L5; measure increase on flexion', positive:'<5 cm increase → reduced lumbar flexion (?axial SpA)' },
    ]},
    { phase:'Neurological screen', items:[
      { name:'Lower limb power, reflexes, sensation by dermatome/myotome', finding:'Localises nerve root (e.g. L5 — EHL weakness, dorsum of foot)' },
      { name:'Straight leg raise (sciatic stretch)', how:'Passively raise straight leg', positive:'Radicular leg pain 30–70° → L4–S1 nerve root irritation', pitfall:'Hamstring tightness can mimic; crossed SLR more specific' },
      { name:'Femoral stretch test', how:'Prone, flex knee/extend hip', positive:'Anterior thigh pain → upper lumbar root (L2–4)' },
    ]},
  ],
  outcomes:[
    { finding:'Mechanical pain, no red flags, normal neurology', meaning:'Non-specific low back pain — analgesia, keep active, StarT Back stratification' },
    { finding:'Dermatomal leg pain + positive SLR + neuro deficit', meaning:'Lumbar radiculopathy — analgesia, physio; MRI/refer if persistent or progressive' },
    { finding:'Reduced Schober + inflammatory features (age <45, night pain, morning stiffness, improves with exercise)', meaning:'Possible axial spondyloarthritis — bloods/HLA-B27, rheumatology referral' },
    { finding:'Any cauda equina feature', meaning:'Emergency same-day referral for MRI' },
  ],
  links:{ algorithm:'tools/algorithms/back-pain.html', algorithmLabel:'Back pain pathway', case:'cases/low-back-pain.html', caseLabel:'Acute low back pain' },
},

{
  id:'ankle-foot', system:'Musculoskeletal', icon:'🦶', title:'Ankle & foot examination',
  blurb:'Inspection, palpation against Ottawa rules, movement and stability tests.',
  indications:['Ankle/foot pain or swelling','Trauma / suspected fracture or sprain','Suspected gout, OA or tendinopathy','Diabetic or rheumatoid foot review'],
  equipment:['Couch','Adequate exposure of both feet/ankles'],
  redFlags:[
    'Ottawa ankle/foot rules positive (bony tenderness at malleoli/navicular/5th MT base, or unable to weight-bear 4 steps) → X-ray',
    'Hot swollen joint + fever → ?septic arthritis / gout — aspirate',
    'Inability to plantarflex + palpable gap in tendo-Achilles → ?Achilles rupture (Simmonds/Thompson test)',
  ],
  sequence:[
    { phase:'Look', items:[
      { name:'Weight-bearing & gait', finding:'Arch (pes planus/cavus), hallux valgus, clawing, swelling, skin/ulcers' },
    ]},
    { phase:'Feel', items:[
      { name:'Palpate malleoli, joint lines, MTPs, Achilles', positive:'Localised tenderness; squeeze MTPs for synovitis; 1st MTP for gout/OA' },
    ]},
    { phase:'Move', items:[
      { name:'Dorsiflexion/plantarflexion, inversion/eversion', finding:'Restricted/painful range' },
    ]},
    { phase:'Special tests', items:[
      { name:'Simmonds–Thompson test', how:'Prone, squeeze the calf', positive:'No plantarflexion → Achilles tendon rupture' },
      { name:'Anterior draw (ankle)', how:'Stabilise tibia, draw heel forward', positive:'Laxity → ATFL (lateral ligament) injury' },
    ]},
  ],
  outcomes:[
    { finding:'Lateral ligament tenderness, negative Ottawa', meaning:'Ankle sprain — RICE, early mobilisation, analgesia' },
    { finding:'Hot tender 1st MTP', meaning:'Gout (or septic) — aspirate if doubt; treat acute gout' },
    { finding:'Positive Simmonds', meaning:'Achilles rupture — equinus cast/boot + orthopaedic referral' },
    { finding:'Forefoot MTP synovitis', meaning:'Inflammatory arthritis — bloods + rheumatology' },
  ],
  links:{ algorithm:'tools/algorithms/foot-pain.html', algorithmLabel:'Foot pain pathway' },
},

]);
