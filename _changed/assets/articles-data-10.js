/* Reasoning GP — Articles data (batch 10: F topics)
   NHS conditions A–Z (letter F) not already covered. RCGP/SCA examiner depth.
   NICE NG12 (May 2025) 2WW pathways stated explicitly where relevant. */
(function(){
  const A = (window.RGP_ARTICLES = window.RGP_ARTICLES || []);
  A.push(

  { id:'fibromyalgia', title:'Fibromyalgia', category:'Musculoskeletal', icon:'🧠',
    overview:'A chronic disorder of widespread musculoskeletal pain with fatigue, unrefreshing sleep and cognitive difficulty ("fibro-fog"), reflecting altered central pain processing rather than tissue damage. It is common, real and disabling; management is built on explanation, self-management and non-drug approaches, not endless investigation.',
    features:[
      'Chronic widespread pain (>3 months) affecting multiple body regions, with tenderness, that is not explained by inflammatory or structural disease',
      'Profound fatigue, non-restorative sleep, and cognitive symptoms (poor concentration/memory — "fibro-fog")',
      'Associated features: headaches, irritable bowel symptoms, bladder symptoms, paraesthesia, low mood and anxiety',
      'Symptoms fluctuate and are worsened by stress, poor sleep and over/under-activity',
      'Examination is normal apart from widespread tenderness; inflammatory markers and other tests are normal — abnormal results point to an alternative diagnosis',
      'Diagnosis is clinical (widespread pain + associated symptoms), after reasonably excluding mimics (e.g. hypothyroidism, inflammatory arthritis, polymyalgia, vitamin D deficiency)'],
    management:[
      'Make a positive diagnosis and explain it clearly: a genuine disorder of pain processing, not damage or "all in the mind" — validation and education are therapeutic',
      'Do a focused screen to exclude mimics (e.g. FBC, ESR/CRP, TFTs, calcium, CK, vitamin D) and avoid over-investigation that reinforces illness',
      'Centre management on self-management: graded exercise/physical activity (the best-evidenced intervention), pacing, and good sleep hygiene',
      'Offer psychological approaches (CBT/acceptance-based therapy) and address coexisting mood and sleep problems',
      'Use medication as an adjunct only, targeting specific symptoms: consider amitriptyline or duloxetine for pain/sleep; avoid opioids and reduce reliance on simple analgesics/NSAIDs (limited benefit)',
      'Adopt a single supportive clinician/continuity model rather than repeated referrals and investigations',
      'Support function: work, relationships and activity goals; signpost patient resources and support groups',
      'Review periodically, reassess if the picture changes, and manage flares with a self-management plan'],
    referral:[
      'Diagnostic uncertainty or features suggesting inflammatory/autoimmune disease → rheumatology',
      'Severe, refractory pain or complex disability → pain-management service / multidisciplinary programme',
      'Significant mood disorder → psychological/mental-health services',
      'New "red flag" or focal features (weight loss, objective weakness, abnormal bloods) → investigate for an alternative diagnosis'],
    source:'NICE NG193 (Chronic primary pain) / RCGP fibromyalgia guidance' },

  { id:'flat-feet', title:'Flat feet (pes planus)', category:'Musculoskeletal', icon:'🦶',
    overview:'A low or absent medial longitudinal arch. It is normal and usually asymptomatic in young children (flexible flat feet), and common and benign in adults. The clinical task is reassurance, while recognising the minority — rigid, painful, or newly acquired flat feet — that need investigation.',
    features:[
      'Flattening of the medial arch, with the foot rolling inward (and the heel often in valgus) on standing',
      'FLEXIBLE flat feet (the common, benign type): the arch reappears on tiptoe or when the foot is non-weight-bearing — normal in young children and many adults',
      'RIGID flat feet: the arch stays flat on tiptoe — may indicate tarsal coalition or other structural problems and warrants assessment',
      'Most are painless; pain, stiffness, or functional limitation makes the diagnosis significant',
      'ACQUIRED adult flat foot, classically from tibialis posterior tendon dysfunction: a progressive, often unilateral, painful flattening in adults (commoner in middle-aged women, diabetes, obesity)',
      'Diagnosis is clinical; imaging is for rigid, painful, or progressive cases'],
    management:[
      'Reassure for asymptomatic flexible flat feet in children — they are normal, the arch usually develops, and routine treatment/insoles are not needed',
      'For symptomatic flexible flat feet: supportive, well-fitting footwear, arch-supporting insoles/orthoses, activity modification, and calf/foot stretching and strengthening',
      'Manage pain with simple analgesia and address contributory factors (weight, footwear)',
      'Refer rigid flat feet (especially painful, in children/adolescents) for assessment of tarsal coalition or other structural cause',
      'Recognise and refer acquired adult flat foot/tibialis posterior dysfunction early — orthoses and physiotherapy help, and progressive cases may need surgery',
      'Podiatry for orthotics, footwear advice, and foot-care (especially in diabetes)',
      'Provide written advice and review symptomatic cases',
      'Investigate any newly acquired, progressive, or unilateral flat foot in an adult'],
    referral:[
      'Rigid, painful flat feet (suspected tarsal coalition) → orthopaedics/podiatry',
      'Acquired adult flat foot / tibialis posterior tendon dysfunction → podiatry/orthopaedics (early)',
      'Severe symptoms unresponsive to conservative care → orthopaedics',
      'Diabetic/neuropathic foot concerns → podiatry/diabetic foot service'],
    source:'NICE CKS — Flat feet / orthopaedic guidance' },

  { id:'floaters-flashes', title:'Floaters and flashes in the eyes', category:'Ophthalmology', icon:'👁️',
    overview:'Floaters (drifting spots/cobwebs) and flashes (brief arcs of light) are common, usually from age-related posterior vitreous detachment, and mostly benign. But the same symptoms can herald a sight-threatening retinal tear or detachment — so a sudden change demands urgent assessment to examine the retina.',
    features:[
      'Floaters: small moving spots, threads or cobwebs in the vision, most visible against a bright/plain background',
      'Flashes (photopsia): brief arcs/streaks of light, often in the peripheral field, especially in dim light or with eye movement',
      'Posterior vitreous detachment (PVD) — the commonest cause: the vitreous gel separates from the retina with age, causing new floaters ± flashes; usually benign but cannot be distinguished clinically from a retinal tear without examination',
      'RED FLAGS for retinal tear/detachment: a sudden shower of new floaters, persistent flashes, a "curtain"/shadow across the field, or any loss of vision',
      'Risk factors for detachment: high myopia, previous cataract/eye surgery, eye trauma, and personal/family history of detachment',
      'Long-standing, stable floaters with no new symptoms are usually benign'],
    management:[
      'Take a careful history: new vs long-standing, the speed of onset, and any field defect/visual loss',
      'New-onset floaters/flashes need urgent ophthalmic examination (dilated fundoscopy) to exclude a retinal tear/detachment — refer to ophthalmology/eye casualty, typically within 24 hours',
      'Treat any "curtain"/shadow or visual loss as a retinal detachment until proven otherwise → same-day referral',
      'Reassure and discharge stable, long-standing floaters with a normal prior assessment, with clear safety-netting',
      'Advise all patients to return immediately if symptoms change: more floaters, persistent flashes, a shadow, or reduced vision',
      'Uncomplicated PVD needs no treatment — floaters usually become less noticeable over time',
      'A confirmed retinal tear is treated with laser/cryotherapy to prevent detachment; detachment needs urgent surgery',
      'Higher-risk patients (high myopia, previous surgery/trauma) warrant a lower threshold for referral'],
    referral:[
      'New floaters/flashes → urgent ophthalmology (within 24 hours) to exclude a retinal tear',
      'Visual-field "curtain"/shadow or sudden visual loss → same-day ophthalmology (suspected retinal detachment)',
      'Confirmed retinal tear/detachment → urgent ophthalmology for laser/surgery',
      'Stable long-standing floaters → reassure with safety-netting'],
    source:'NICE CKS — Retinal detachment / Royal College of Ophthalmologists' },

  { id:'flu', title:'Flu (influenza)', category:'Respiratory', icon:'🤒',
    overview:'An acute viral respiratory illness caused by influenza viruses, typically more abrupt and systemically severe than the common cold. Most healthy people recover with self-care, but it causes significant morbidity, complications and excess deaths in at-risk groups — making vaccination and recognition of complications the key tasks.',
    features:[
      'Abrupt onset of fever, prominent myalgia, headache, marked fatigue/prostration, and dry cough — systemic symptoms dominate (in contrast to the milder, more nasal common cold)',
      'Sore throat, nasal symptoms and, in children, sometimes GI symptoms',
      'Usually self-limiting over about a week, though cough and malaise can linger',
      'Complications: secondary bacterial pneumonia, exacerbation of asthma/COPD/heart failure, otitis media/sinusitis, and (rarely) myocarditis or encephalitis',
      'AT-RISK groups for severe disease: older people, young children, pregnant women, and those with chronic heart/lung/liver/kidney/neurological disease, diabetes, immunosuppression, or obesity',
      'Diagnosis is usually clinical during flu season; testing is used in hospital/outbreak settings'],
    management:[
      'For otherwise healthy people: supportive self-care — rest, fluids, paracetamol/ibuprofen for fever and aches, and safety-netting advice',
      'Advise on the expected course and on staying away from others/at-risk contacts while infectious',
      'Antiviral treatment (e.g. oseltamivir) is indicated for those at higher risk of complications and for severe disease — most effective when started early (within ~48 hours of onset), per national guidance/seasonal advice',
      'Antiviral prophylaxis may be appropriate for at-risk contacts during circulation/outbreaks (e.g. care homes), per guidance',
      'Recognise and treat complications: assess for pneumonia (and treat with antibiotics if bacterial), and manage exacerbations of underlying conditions',
      'Have a lower threshold for assessment/admission in at-risk groups and the systemically unwell',
      'Promote annual influenza vaccination for all eligible groups — the single most important preventive measure',
      'Reinforce hygiene measures (hand-washing, catching coughs/sneezes) to reduce spread'],
    referral:[
      'Severe illness, suspected pneumonia, hypoxia, sepsis, or significant systemic compromise → urgent assessment/admission',
      'At-risk patients deteriorating, or with significant comorbidity → lower threshold for assessment',
      'Suspected serious complication (myocarditis, encephalitis) → emergency referral',
      'Outbreaks (e.g. care homes) → public-health/health-protection involvement for control and prophylaxis'],
    source:'NICE CKS — Influenza / UKHSA seasonal guidance / Green Book' },

  { id:'food-poisoning', title:'Food poisoning', category:'Infectious diseases', icon:'🤢',
    overview:'Illness — usually gastrointestinal — from eating food contaminated with bacteria, viruses, toxins or parasites. Most is self-limiting and managed with rehydration, but recognising dehydration, specific high-risk pathogens, and public-health duties (notification, exclusion) is essential.',
    features:[
      'Nausea, vomiting, abdominal cramps and diarrhoea, with timing that hints at the cause: very rapid onset (1–6 hours) suggests a preformed toxin (e.g. Staphylococcus aureus, Bacillus cereus); 12–48 hours suggests viral (norovirus) or bacterial (Salmonella, Campylobacter)',
      'Bloody diarrhoea points to invasive/inflammatory causes (Campylobacter, Shigella, Salmonella, E. coli O157)',
      'Exposure clues: recent meals (reheated rice, undercooked poultry/eggs/meat, unpasteurised dairy), travel, and others affected (clusters/outbreaks)',
      'Dehydration is the main acute risk, especially at the extremes of age',
      'High-risk pathogens/complications: E. coli O157 → haemolytic uraemic syndrome; Listeria in pregnancy/immunocompromised; botulism (neurological); and persistent diarrhoea suggesting a parasite (e.g. Giardia)',
      'Diagnosis is clinical; send stool samples for severe, persistent, bloody, or travel-related illness, in outbreaks, or in high-risk patients'],
    management:[
      'Assess hydration and treat with oral rehydration first-line; IV fluids/admission for severe dehydration or inability to tolerate oral intake',
      'Most cases are self-limiting and need no antibiotics — supportive care, continued fluids, and gradual return to eating',
      'Send stool samples in bloody diarrhoea, severe/persistent illness, recent travel, systemic illness, immunocompromise, or suspected outbreaks',
      'Avoid antimotility drugs (e.g. loperamide) in bloody/inflammatory diarrhoea, and AVOID antibiotics in suspected E. coli O157 (HUS risk)',
      'Use antibiotics selectively for specific pathogens/severe disease per microbiology advice',
      'Apply exclusion advice: stay off work/school until 48 hours symptom-free; food handlers and healthcare/childcare workers have specific rules (and longer exclusion for certain pathogens)',
      'Certain causes of food poisoning are notifiable — inform public health, and report suspected outbreaks',
      'Advise on prevention (food hygiene, cooking/storage, hand-washing) and safety-net for dehydration or features of HUS'],
    referral:[
      'Severe dehydration, sepsis, or inability to maintain hydration → admission',
      'Suspected haemolytic uraemic syndrome (especially a child after bloody diarrhoea) or botulism → emergency admission',
      'Listeria in pregnancy/immunocompromised, or suspected enteric fever → infectious diseases',
      'Notify public health for notifiable causes/outbreaks and apply exclusion rules'],
    source:'UKHSA / NICE CKS — Gastroenteritis' },

  { id:'foot-drop', title:'Foot drop', category:'Neurology', icon:'🦶',
    overview:'Weakness of ankle and toe dorsiflexion causing the foot to drag and a high-stepping gait. It is a sign, not a diagnosis — the priority is to localise the lesion (from spine to peripheral nerve) and recognise the emergencies, especially an acute foot drop as part of cauda equina syndrome.',
    features:[
      'Difficulty lifting the front of the foot, tripping, catching the toes, and a "high-stepping" (steppage) gait to clear the foot',
      'Common cause: common peroneal (fibular) nerve compression at the fibular neck (e.g. leg crossing, prolonged squatting, plaster casts, weight loss) — usually weak dorsiflexion and eversion with sensory loss over the dorsum of the foot',
      'Other levels: L5 radiculopathy (back/leg pain, weak dorsiflexion ± inversion), sciatic nerve lesions, peripheral neuropathy, and central causes (stroke, MS, motor neurone disease)',
      'RED FLAGS — cauda equina syndrome: bilateral leg symptoms, saddle anaesthesia, bladder/bowel disturbance, and back pain — a surgical emergency',
      'Bilateral foot drop or associated widespread weakness suggests a generalised neuropathy or motor neurone disease',
      'Assessment: localise by the pattern of weakness/sensory loss and reflexes; nerve conduction studies and imaging (spine MRI) as indicated'],
    management:[
      'Examine to localise the lesion (dorsiflexion, eversion, inversion, sensation, reflexes, and the back/hip) and identify the cause',
      'Screen urgently for cauda equina red flags (saddle anaesthesia, bladder/bowel dysfunction, bilateral symptoms) — if present, emergency referral for MRI and surgery',
      'For peroneal nerve compression: remove the cause (avoid leg-crossing/squatting, pad casts), and many recover spontaneously over weeks–months',
      'Provide an ankle-foot orthosis (AFO) to aid walking and prevent tripping/falls, and physiotherapy to maintain strength and range',
      'Arrange nerve conduction studies to confirm the site/severity and prognosis where the cause is unclear or recovery is slow',
      'Refer to neurology for central causes, generalised neuropathy, or diagnostic uncertainty; orthopaedics/spinal for radiculopathy or structural causes',
      'Treat the underlying cause (e.g. radiculopathy, diabetes, vasculitis) and address falls risk',
      'Surgical options (decompression, nerve repair, tendon transfer) for selected persistent/structural cases'],
    referral:[
      'Suspected cauda equina syndrome (saddle anaesthesia, bladder/bowel dysfunction, bilateral leg signs) → emergency same-day spinal assessment and MRI',
      'Acute foot drop with severe back/leg pain (?L5 radiculopathy) → urgent spinal assessment',
      'Suspected central cause (stroke, MS) or generalised neuropathy/motor neurone disease → neurology (urgent if acute)',
      'Persistent/unexplained foot drop → nerve conduction studies ± neurology/orthopaedics'],
    source:'NICE CKS / neurology & spinal guidance' },

  { id:'fragile-x', title:'Fragile X syndrome', category:'Paediatrics', icon:'🧬',
    overview:'The commonest inherited cause of learning disability and a leading single-gene cause of autism, due to expansion of the FMR1 gene on the X chromosome. It affects males more severely than females. Recognising it allows diagnosis, support, and crucial genetic counselling for the wider family.',
    features:[
      'Developmental delay and learning disability (mild to severe), typically more marked in males; females are often more mildly affected',
      'Behavioural/neurodevelopmental features: autism spectrum traits, ADHD, anxiety, hand-flapping/biting, poor eye contact, and sensory sensitivities',
      'Characteristic physical features (often subtle, especially young/female): a long face, large/prominent ears, a high-arched palate, joint hypermobility, and (post-pubertal) macro-orchidism in males',
      'Associated problems: recurrent otitis media, seizures, squint, mitral valve prolapse, and connective-tissue features',
      'Inheritance is X-linked via an unstable trinucleotide (CGG) repeat expansion; premutation carriers can have fragile-X-associated tremor/ataxia syndrome (FXTAS) or primary ovarian insufficiency',
      'Diagnosis is by genetic (DNA) testing for the FMR1 repeat expansion'],
    management:[
      'Consider fragile X in any child with unexplained developmental delay/learning disability or autism, and arrange genetic (FMR1) testing',
      'There is no cure — management is supportive and multidisciplinary: early intervention, speech and language and occupational therapy, and educational support (often special educational needs provision)',
      'Manage associated neurodevelopmental and behavioural problems (ADHD, anxiety, autism) and treat coexisting conditions (seizures, recurrent otitis media, squint)',
      'Screen for and manage medical associations (e.g. cardiac, orthopaedic/connective-tissue) as indicated',
      'Provide genetic counselling for the family — the inheritance and recurrence risk are important, and testing of relatives (including premutation carrier status) should be offered',
      'Support the family with information, behavioural strategies, and signposting to specialist fragile X support organisations',
      'Plan transition to adult services and support independence and capacity-appropriate decisions',
      'Be alert in premutation carriers to FXTAS (tremor/ataxia in older carriers) and premature ovarian insufficiency'],
    referral:[
      'Suspected fragile X (developmental delay/learning disability/autism) → community paediatrics + clinical genetics for FMR1 testing',
      'Family/carrier testing and recurrence-risk counselling → clinical genetics',
      'Associated conditions (seizures, cardiac, behavioural) → relevant specialties',
      'Educational and social-care needs → SEN and support services'],
    source:'NICE CKS / clinical genetics guidance' },

  { id:'frozen-shoulder', title:'Frozen shoulder (adhesive capsulitis)', category:'Musculoskeletal', icon:'💪',
    overview:'A common, self-limiting but often prolonged condition of pain and progressive global restriction of shoulder movement, from inflammation and fibrosis of the joint capsule. It classically passes through painful, stiff ("frozen") and recovering ("thawing") phases over many months to a couple of years.',
    features:[
      'Gradual-onset shoulder pain followed by progressive stiffness, with loss of both active AND passive range of movement (especially external rotation) — the key sign distinguishing it from rotator cuff problems',
      'Pain is often worse at night and limits lying on the affected side and daily activities (dressing, reaching)',
      'Three overlapping phases: painful/freezing (pain dominant), frozen/stiff (stiffness dominant, less pain), and thawing (gradual recovery)',
      'Associations: diabetes (more common, more severe and prolonged), thyroid disease, and following shoulder immobility/trauma or surgery',
      'Typically affects people aged 40–60; usually one shoulder, but the other may be affected later',
      'Diagnosis is clinical; X-ray is normal (and helps exclude other causes such as arthritis); consider checking HbA1c and TFTs'],
    management:[
      'Confirm the clinical diagnosis (global restriction of active and passive movement, especially external rotation) and exclude other causes',
      'Explain the natural history and likely long timescale (often 1–3 years) — this reassurance and realistic expectation-setting is important',
      'Pain relief: regular analgesia/NSAIDs, and attention to sleep; encourage maintaining movement within tolerance',
      'Physiotherapy for pain relief, range-of-movement and stretching exercises — a mainstay, especially in the stiff/thawing phases',
      'An intra-articular corticosteroid injection can help pain and function, particularly in the early painful phase',
      'Screen for and optimise associated conditions, especially diabetes (and check thyroid function)',
      'Refer for persistent, severe, or function-limiting cases not responding to conservative measures',
      'Second-line/specialist options: hydrodilatation, manipulation under anaesthesia, or arthroscopic capsular release'],
    referral:[
      'Severe pain or stiffness not responding to conservative treatment → physiotherapy / orthopaedics (consider injection, hydrodilatation, capsular release)',
      'Diagnostic uncertainty (e.g. possible arthritis, malignancy, or cuff tear) → imaging/orthopaedics',
      'Rapidly progressive or atypical presentation → reassess for alternative cause',
      'Poorly controlled diabetes complicating recovery → optimise diabetes care'],
    source:'NICE CKS — Shoulder pain (frozen shoulder)' },

  { id:'fungal-nail', title:'Fungal nail infection (onychomycosis)', category:'Dermatology', icon:'🦶',
    overview:'A common fungal infection of the nail, usually by dermatophytes, causing thickened, discoloured, crumbly nails — most often the toenails. It is largely a cosmetic and comfort issue, but confirming the diagnosis before long antifungal courses matters, as does not missing the rare but serious mimic, subungual melanoma.',
    features:[
      'Thickened, discoloured (yellow/white/brown), brittle or crumbling nails, often with subungual debris and onycholysis (separation from the nail bed)',
      'Usually affects toenails (especially the great toe); frequently with coexisting tinea pedis (athlete’s foot)',
      'Risk factors: increasing age, diabetes, peripheral vascular disease, immunosuppression, nail trauma, communal showers/swimming, and occlusive footwear',
      'Differentials: psoriasis (nail pitting, onycholysis), trauma, lichen planus, and chronic eczema',
      'RED FLAG: a new, pigmented (brown/black) longitudinal nail streak or pigment spreading onto the nail fold (Hutchinson’s sign), or a non-healing nail lesion — consider subungual melanoma, especially in a single nail',
      'Confirm before treating: send nail clippings/scrapings for microscopy and culture (treatment is long, and many "fungal" nails are not fungal)'],
    management:[
      'Confirm the diagnosis with nail clippings for mycology BEFORE starting prolonged systemic treatment (other conditions mimic it, and antifungals are not benign)',
      'For mild/limited distal disease, or where systemic treatment is unsuitable: a topical antifungal nail lacquer (e.g. amorolfine) — but cure rates are modest and treatment is prolonged',
      'For more extensive/multiple nails or confirmed dermatophyte infection: oral terbinafine (first-line) for several months — itraconazole is an alternative; check suitability and interactions',
      'Treat coexisting tinea pedis and advise on prevention: keep feet dry, good footwear/foot hygiene, avoid sharing towels, and treat athlete’s foot to reduce recurrence',
      'Reassure that it is often a cosmetic problem; weigh the benefits of long systemic treatment against side effects/interactions, especially in older or comorbid patients',
      'In diabetes/peripheral arterial disease, involve podiatry and treat to reduce the risk of secondary infection and foot complications',
      'Refer or biopsy any suspicious pigmented or non-healing nail lesion to exclude subungual melanoma',
      'Set expectations: nails grow slowly, so visible improvement takes many months and recurrence is common'],
    referral:[
      'Suspected subungual melanoma (new pigmented streak, Hutchinson’s sign, non-healing nail lesion) → urgent 2WW suspected skin-cancer/melanoma referral (NICE NG12)',
      'Diagnostic uncertainty, treatment failure, or extensive disease → dermatology',
      'Diabetic/ischaemic foot with nail infection → podiatry/diabetic foot service',
      'Consideration of oral antifungals where interactions/comorbidity complicate prescribing → specialist advice'],
    source:'NICE CKS — Fungal nail infection / NICE NG12' }

  );
})();
