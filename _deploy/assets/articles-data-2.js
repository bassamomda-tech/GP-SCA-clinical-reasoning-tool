/* Reasoning GP — Articles data (batch 2: G–L)
   Depth: written to the level an expert GP / RCGP examiner expects. */
(function(){
  const A = (window.RGP_ARTICLES = window.RGP_ARTICLES || []);
  A.push(

  { id:'ganglion-cyst', title:'Ganglion cyst', category:'Musculoskeletal', icon:'🤚',
    overview:'A benign, mucin-filled swelling arising from a joint capsule or tendon sheath, most often around the wrist and hand. It is harmless, frequently fluctuates in size and commonly resolves spontaneously over months to years.',
    features:[
      'Smooth, round, firm but compressible swelling adjacent to a joint or tendon — classically the dorsal wrist, also volar wrist, flexor sheath of fingers, dorsum of foot',
      'Transilluminates (fluid-filled), unlike a solid lump; may fluctuate in size with activity',
      'Usually painless; can ache or limit movement if large or close to a nerve',
      'A volar wrist ganglion lies near the radial artery — assess before any aspiration',
      'Mucous cysts at the DIP joint are associated with underlying osteoarthritis'],
    management:[
      'Reassure — many resolve spontaneously and need no treatment if asymptomatic',
      'Diagnosis is clinical; image (ultrasound) only if atypical, solid-feeling, or diagnosis uncertain',
      'Avoid the old "bible therapy" (striking the cyst) — ineffective and may injure underlying structures',
      'Aspiration can be offered for symptom relief but recurrence is high (up to ~50%); avoid volar aspiration near the radial artery',
      'Surgical excision for persistent, painful or functionally limiting cysts — counsel that recurrence can still occur',
      'If aspirating, warn recurrence is up to ~50% and avoid the volar wrist (radial artery); most asymptomatic cysts just need reassurance and review'],
    referral:[
      'Diagnostic uncertainty — atypical site, solid, rapidly growing, or not transilluminating → ultrasound/specialist to exclude other soft-tissue lesions',
      'Significant pain, functional limitation, or nerve compression symptoms → hand surgery',
      'Recurrence after aspiration with ongoing symptoms → surgical excision'],
    source:'NICE CKS — Ganglion' },

  { id:'gender-dysphoria', title:'Gender dysphoria', category:'Mental health', icon:'⚧',
    overview:'Distress arising from a mismatch between a person\u2019s experienced gender and their sex registered at birth. The GP role is to provide respectful, affirming care, manage co-existing health needs, and refer promptly — not to initiate gender-affirming hormones unaided.',
    features:[
      'Persistent distress about gender incongruence that affects wellbeing, relationships and function',
      'High rates of comorbid anxiety, depression, self-harm and suicidality — screen actively and supportively',
      'Some patients are already self-medicating with hormones bought online — ask non-judgementally and consider safety/monitoring',
      'Minority-stress, discrimination and social isolation contribute to mental-health burden',
      'Distinguish from transient questioning; assess capacity and support networks'],
    management:[
      'Provide respectful, affirming care; use the person\u2019s chosen name and pronouns and record them',
      'Refer to a specialist Gender Identity Clinic (GIC) early — waiting lists are very long; the GP does not initiate hormones independently',
      'Proactively manage co-existing mental-health needs and offer general support and signposting (e.g. peer support)',
      'Bridging prescriptions or shared care only with specialist guidance and within local policy and GMC advice (harm-reduction where someone is already self-medicating)',
      'Continue health screening and care appropriate to the organs present (e.g. cervical screening for those with a cervix, breast/aortic considerations as relevant)',
      'Be alert to safeguarding and to fertility-preservation discussions before treatments that affect fertility',
      'Refer to the GIC at the first request (waits run to years); meanwhile manage mental health, signpost peer support, and continue organ-appropriate screening',
      'If already self-medicating with online hormones, take a harm-reduction stance and seek specialist/shared-care advice before any bridging prescription'],
    referral:[
      'Refer to a Gender Identity Clinic (refer early because of long waits)',
      'Significant suicide or self-harm risk → urgent mental-health assessment',
      'Children and young people → specialist children/young-people gender services per current national pathways',
      'Fertility preservation queries → relevant specialist before gender-affirming treatment'],
    source:'NICE CKS / GMC & GIC pathways' },

  { id:'gilberts', title:'Gilbert\u2019s syndrome', category:'Gastroenterology', icon:'🟡',
    overview:'A common, benign inherited cause of mild unconjugated hyperbilirubinaemia (reduced UGT1A1 activity). It produces intermittent mild jaundice during fasting, illness, exertion or stress, with otherwise normal liver tests and no liver disease.',
    features:[
      'Mild, isolated rise in unconjugated (indirect) bilirubin, typically <100 µmol/L, with normal ALT/ALP/GGT',
      'Jaundice precipitated by fasting, intercurrent illness, dehydration, vigorous exercise, sleep deprivation or stress',
      'No haemolysis (normal FBC, reticulocytes, blood film, haptoglobin) and no dark urine/pale stools',
      'Affects up to ~5% of the population; often discovered incidentally on routine bloods',
      'Lifelong, benign, with normal life expectancy'],
    management:[
      'Confirm the pattern: isolated unconjugated hyperbilirubinaemia with normal LFTs and no evidence of haemolysis — usually no further testing needed',
      'Reassure firmly — it is benign, needs no treatment and no ongoing monitoring',
      'Explain the triggers (fasting, illness) and that episodic mild yellowing of the eyes is harmless',
      'Note clinical relevance to drug metabolism — increased toxicity risk with irinotecan, and altered handling of some other drugs (e.g. atazanavir)',
      'No dietary restriction required; maintain regular meals and hydration if episodes are bothersome',
      'No monitoring or treatment needed — document the benign diagnosis to prevent repeat work-ups, and flag the irinotecan toxicity risk in the record'],
    referral:[
      'Any conjugated (direct) hyperbilirubinaemia, abnormal LFTs, or features of haemolysis → investigate/refer rather than attributing to Gilbert\u2019s',
      'Diagnostic uncertainty or atypical features → gastroenterology'],
    source:'NICE CKS' },

  { id:'growing-pains', title:'Growing pains', category:'Paediatrics', icon:'🧒',
    overview:'Benign idiopathic limb pains of childhood — typically bilateral leg pain in the evening or night with a completely normal examination and normal daytime function. A diagnosis made on classic features with safety-netting, not investigation.',
    features:[
      'Bilateral, intermittent pain in the calves, shins or thighs (not the joints), in the evening or waking the child at night',
      'Normal examination; the child is well, active and pain-free by day with no limp or swelling',
      'Typical age ~3–12 years; settles with reassurance, massage and warmth',
      'Normal growth and development; no systemic symptoms',
      'Red-flag features that argue AGAINST the diagnosis: unilateral or joint pain, limp, swelling, fever, weight loss, night pain localised to one site'],
    management:[
      'Reassure that this is a benign, self-limiting pattern; explain it is not caused by growth itself',
      'Simple measures: massage, warmth (heat pad/bath), stretching, and simple analgesia (paracetamol/ibuprofen) for troublesome nights',
      'No investigations needed when features are classic and examination is normal',
      'Safety-net explicitly on the red flags that warrant review',
      'Review if the pattern changes or persistent symptoms develop',
      'No bloods or imaging when features are classic; give a written safety-net for limp, joint swelling, fever, weight loss or one-sided/persistent pain'],
    referral:[
      'Persistent or unilateral pain, limp, joint swelling, systemic symptoms, weight loss, or any abnormal examination → paediatric assessment',
      'Progressive night pain localised to one site, or bone tenderness → urgent assessment to exclude malignancy/osteomyelitis',
      'Diagnostic uncertainty or parental anxiety → review/paediatrics'],
    source:'NICE CKS' },

  { id:'gbs', title:'Guillain-Barré syndrome (GBS)', category:'Neurology', icon:'🧠',
    overview:'An acute immune-mediated polyradiculoneuropathy, often post-infective, causing rapidly progressive, usually ascending weakness with areflexia. It is a neurological emergency because of the risk of respiratory failure and autonomic instability.',
    features:[
      'Progressive, usually symmetrical, ascending weakness evolving over days to up to 4 weeks; reduced or absent reflexes',
      'Often preceded (1–3 weeks) by a GI or respiratory infection — classically Campylobacter jejuni; also CMV, EBV, Mycoplasma, and post-vaccination/post-viral',
      'Paraesthesiae and neuropathic back/limb pain; relatively preserved sensation despite marked weakness',
      'Bulbar (swallow/speech) and respiratory muscle involvement; autonomic instability (BP and heart-rate swings, arrhythmia, urinary retention)',
      'Miller-Fisher variant: ophthalmoplegia, ataxia and areflexia',
      'Investigations (in hospital): nerve conduction studies and CSF showing albuminocytological dissociation (raised protein, normal cell count)'],
    management:[
      'Treat as an emergency — arrange same-day hospital admission for any suspected case; do not manage in primary care',
      'Hospital care: serial respiratory monitoring (forced vital capacity), cardiac/autonomic monitoring, and disease-modifying treatment with IV immunoglobulin or plasma exchange',
      'Recognise that progression can be rapid and unpredictable — early referral saves lives',
      'VTE prophylaxis, supportive care and rehabilitation form part of inpatient management',
      'Most recover substantially, though recovery can take months and some have residual deficit',
      'The primary-care job is simply to recognise it and arrange same-day admission — check for breathlessness/bulbar symptoms and call 999 if present'],
    referral:[
      'Suspected GBS → immediate emergency admission under neurology/acute medicine',
      'Respiratory difficulty, bulbar symptoms, or rapid progression → 999',
      'Any rapidly progressive weakness with areflexia → urgent assessment'],
    source:'NICE CKS / ABN guidance' },

  { id:'myasthenia-gravis', title:'Myasthenia gravis (MG)', category:'Neurology', icon:'🧠',
    overview:'An autoimmune disorder of the neuromuscular junction (usually anti-AChR, sometimes anti-MuSK antibodies) causing fatigable muscle weakness that worsens with activity and improves with rest. Myasthenic crisis with respiratory failure is the key emergency.',
    features:[
      'Fatigable weakness: ptosis and diplopia (often the presenting features), bulbar symptoms (dysphagia, dysarthria, chewing fatigue), and proximal limb weakness',
      'Worse with sustained activity and towards the end of the day; improves after rest',
      'Ocular MG may generalise within ~2 years; thymic abnormality (hyperplasia/thymoma) is common',
      'Many drugs unmask or worsen MG — e.g. aminoglycosides, macrolides, fluoroquinolones, beta-blockers, magnesium — check before prescribing',
      'Myasthenic crisis: respiratory/bulbar failure, often triggered by infection, surgery, or drugs — a medical emergency'],
    management:[
      'Refer to neurology for diagnosis (anti-AChR/anti-MuSK antibodies, repetitive nerve stimulation/single-fibre EMG, CT thorax for thymoma)',
      'Specialist treatment: symptomatic pyridostigmine, immunosuppression (corticosteroids ± steroid-sparing agents), and thymectomy in selected patients',
      'Always check drug interactions before prescribing — avoid/caution with agents known to worsen MG; give a clear list to the patient',
      'Educate on crisis recognition and triggers (infection, heat, stress, missed medication); ensure prompt treatment of infections',
      'Coordinate with the specialist before surgery or new medication; consider an alert card',
      'Before any new prescription, check it does not worsen MG (aminoglycosides, macrolides, fluoroquinolones, beta-blockers, magnesium) and treat infections promptly',
      'Safety-net for crisis: new breathing or swallowing difficulty is a 999 call'],
    referral:[
      'Suspected myasthenic crisis (breathing or swallowing difficulty) → 999',
      'New suspected MG → urgent neurology',
      'Worsening weakness, infection, or before prescribing an interacting drug → specialist advice'],
    source:'NICE CKS / ABN myasthenia guidance' },

  { id:'haemochromatosis', title:'Haemochromatosis', category:'Endocrine & metabolic', icon:'🩸',
    overview:'Hereditary iron overload (most commonly HFE C282Y homozygosity) causing progressive iron deposition in the liver, pancreas, heart, joints, skin and pituitary. It is common, treatable, and important to catch before end-organ damage occurs.',
    features:[
      'Early and non-specific: fatigue, arthralgia (classically the 2nd and 3rd MCP joints — "iron fist"), erectile dysfunction, low mood',
      'Biochemical hallmark: raised transferrin saturation (the most sensitive early marker, typically >45–50%) AND raised ferritin',
      'Later organ damage: hepatomegaly and cirrhosis, diabetes ("bronze diabetes"), skin hyperpigmentation, dilated/restrictive cardiomyopathy, arrhythmia, hypogonadism',
      'Strong genetic basis — first-degree relatives are at risk; confirm with HFE genotyping',
      'Cirrhosis from haemochromatosis carries a markedly increased hepatocellular carcinoma risk'],
    management:[
      'Screen with fasting transferrin saturation + ferritin; if both raised (and other causes excluded) → HFE genotype',
      'First-line treatment is regular venesection — weekly induction to deplete iron stores (targeting ferritin/transferrin-sat thresholds), then lifelong maintenance venesection',
      'Assess and manage complications: LFTs and liver assessment, glucose/HbA1c, cardiac evaluation if indicated, hypogonadism',
      'Lifestyle: limit alcohol, avoid iron and vitamin-C supplements (vitamin C mobilises iron); a normal diet is otherwise fine',
      'Offer genetic counselling and screening of first-degree relatives',
      'Surveillance for hepatocellular carcinoma if cirrhosis is present (ultrasound ± AFP per hepatology)',
      'Screen with FASTING transferrin saturation + ferritin; if both raised and other causes excluded, send HFE genotype and refer for venesection',
      'Advise no iron or vitamin-C supplements and limited alcohol; offer screening of first-degree relatives'],
    referral:[
      'Confirmed or strongly suspected iron overload → refer for venesection programme and assessment',
      'Evidence of cirrhosis or organ damage → hepatology (HCC surveillance) / relevant specialist',
      'Diagnostic uncertainty or secondary iron overload → gastroenterology/haematology'],
    source:'NICE CKS / BSG & BSH iron-overload guidance' },

  { id:'haemophilia', title:'Haemophilia', category:'Haematology', icon:'🩸',
    overview:'X-linked inherited deficiency of clotting factor VIII (haemophilia A) or IX (haemophilia B) causing a bleeding tendency. Care is led by specialist haemophilia comprehensive-care centres; the GP role is supportive, safety-focused and coordination of routine care.',
    features:[
      'Bleeding pattern: spontaneous haemarthroses and muscle bleeds, and prolonged bleeding after trauma, dental work or surgery',
      'Usually affects males; female carriers can have low levels and bleeding symptoms; strong family history common',
      'Severity by factor level: severe (<1%) with spontaneous bleeds, moderate (1–5%), mild (5–40%, bleeding mainly with trauma/surgery)',
      'Chronic haemophilic arthropathy from recurrent joint bleeds',
      'Intracranial haemorrhage is a leading cause of death — any head injury is high-risk'],
    management:[
      'Care led by a haemophilia comprehensive-care centre (factor replacement, prophylaxis, and newer agents such as emicizumab)',
      'Avoid intramuscular injections (give vaccines subcutaneously) and avoid aspirin/NSAIDs and other antiplatelet drugs',
      'Any significant bleed, trauma, or head injury → urgent factor replacement via the centre before/while arranging assessment — do not wait',
      'Coordinate with the centre before any procedure (including dental extractions); tranexamic acid is useful for mucosal bleeding',
      'Document carrier status in the family and offer genetic counselling; consider an alert card',
      'Manage joint health and analgesia (paracetamol/opioids rather than NSAIDs) with specialist input',
      'Avoid IM injections (vaccinate SC), aspirin and NSAIDs; any head injury or significant bleed needs urgent factor via the centre BEFORE imaging — do not wait'],
    referral:[
      'Suspected new bleeding disorder → haematology',
      'Any significant bleed, trauma, or head injury → urgent (contact the haemophilia centre immediately)',
      'Pre-procedure planning, or pregnancy in a carrier → specialist'],
    source:'NICE CKS / UKHCDO' },

  { id:'head-injury-concussion', title:'Head injury and concussion', category:'Neurology', icon:'🤕',
    overview:'Assessment centres on identifying who needs CT imaging or admission (NICE NG232 criteria) and on giving graded recovery advice for concussion. Anticoagulation and antiplatelet use substantially lower the threshold for imaging.',
    features:[
      'Concussion: transient post-impact symptoms — headache, dizziness, nausea, "fogginess", poor concentration, irritability — with no structural injury',
      'CT-within-1-hour criteria (adults): GCS <13 on initial assessment, GCS <15 at 2 hours, suspected open/depressed or basal skull fracture, post-traumatic seizure, focal neurological deficit, or more than one episode of vomiting',
      'CT-within-8-hours criteria: age ≥65, dangerous mechanism, coagulopathy/anticoagulation, or ≥30 minutes retrograde amnesia — and CT within 8 hours for anyone on anticoagulants even without other features',
      'Basal skull fracture signs: panda eyes, Battle sign, CSF rhinorrhoea/otorrhoea, haemotympanum',
      'Post-concussion syndrome: headaches, dizziness and cognitive symptoms persisting for weeks'],
    management:[
      'Apply NICE NG232 imaging and admission criteria; have a markedly lower threshold in those on anticoagulants/antiplatelets and older adults',
      'Concussion: brief physical and cognitive rest (24–48 h) then a graded, symptom-limited return to activity, school/work and sport',
      'Use staged return-to-play protocols for sport, with no same-day return after concussion',
      'Simple analgesia (paracetamol); avoid sedatives and opioids; provide clear written head-injury safety-net advice',
      'Advise no alcohol, no driving while symptomatic, and a responsible adult to observe for 24 hours',
      'Review persistent symptoms; manage post-concussion symptoms supportively',
      'Lower the CT threshold markedly for anyone anticoagulated/antiplatelet or aged 65+; give written head-injury advice and a 24-hour observer',
      'Concussion: 24–48 h relative rest then graded symptom-limited return; no same-day return to sport'],
    referral:[
      'Any NICE red flag (GCS <15, focal neurology, repeated vomiting, post-traumatic seizure, suspected skull fracture, anticoagulated) → emergency CT/admission',
      'Clinical deterioration after discharge (drowsiness, repeated vomiting, worsening headache, seizure) → 999',
      'Persistent or severe post-concussion symptoms → GP review ± concussion/neurology clinic',
      'Suspected non-accidental injury in a child → safeguarding/urgent paediatrics'],
    source:'NICE NG232 — Head injury' },

  { id:'health-anxiety', title:'Health anxiety', category:'Mental health', icon:'🧠',
    overview:'Persistent preoccupation with having or developing a serious illness, with excessive checking or reassurance-seeking that persists despite appropriate assessment and reassurance. Reassurance relieves only briefly and tends to reinforce the cycle.',
    features:[
      'Disproportionate and persistent worry about health; catastrophic misinterpretation of normal or benign bodily sensations',
      'Repeated bodily checking, internet symptom-searching, reassurance-seeking, or conversely avoidance of doctors/tests',
      'Frequent consultations and requests for investigations; temporary relief after reassurance followed by return of anxiety',
      'Significant distress and functional impairment; frequent comorbid generalised anxiety, panic and depression',
      'Distinguish from somatic symptom disorder (where the focus is on the symptoms themselves) and from genuine emerging pathology'],
    management:[
      'Validate the distress (it is real) while agreeing a consistent, structured plan — ideally one named clinician and planned, regular reviews rather than reactive ones',
      'Avoid repeated unnecessary investigations and reassurance cycles, which maintain the disorder; explain this rationale collaboratively',
      'First-line: CBT specifically for health anxiety (self-referral to NHS Talking Therapies)',
      'Consider an SSRI where there is comorbid depression or significant anxiety',
      'Provide good-quality self-help resources and a clear, finite plan for what to do with new symptoms',
      'Treat comorbid mood and anxiety; address any maintaining factors (e.g. bereavement, a frightening diagnosis in a relative)',
      'Agree a single named GP, planned (not reactive) reviews and a finite plan for new symptoms — repeated tests and reassurance maintain the disorder',
      'First-line is CBT for health anxiety (self-refer to NHS Talking Therapies); add an SSRI if comorbid depression/anxiety'],
    referral:[
      'Significant functional impairment or refractory symptoms → psychological therapy / mental-health service',
      'Genuine pathology not yet appropriately excluded → investigate proportionately (do not over- or under-investigate)',
      'Risk of self-harm → urgent mental-health assessment'],
    source:'NICE CKS' },

  { id:'hsp', title:'Henoch-Schönlein purpura (IgA vasculitis)', category:'Paediatrics', icon:'🟣',
    overview:'A small-vessel IgA-mediated vasculitis, predominantly in children (peak 3–10 years), classically with palpable purpura, arthralgia, abdominal pain and renal involvement. Usually self-limiting, but renal monitoring for months is essential as nephritis determines long-term prognosis.',
    features:[
      'Palpable purpura with NORMAL platelet count — symmetrical over the buttocks and extensor lower limbs (the diagnostic hallmark)',
      'Arthralgia/arthritis (knees and ankles) and periarticular swelling',
      'Colicky abdominal pain; complications include GI bleeding and intussusception (ileo-ileal)',
      'Renal involvement (IgA nephritis): haematuria ± proteinuria — the main determinant of long-term outcome, may appear weeks after onset',
      'Often follows an upper-respiratory infection; usually resolves over 4–6 weeks though relapses occur'],
    management:[
      'Largely supportive: rest, adequate hydration and analgesia (paracetamol; use NSAIDs cautiously and avoid if renal involvement or GI bleeding)',
      'Confirm normal platelet count and coagulation to exclude other causes of purpura',
      'Monitor blood pressure and urinalysis regularly — at diagnosis and then on a schedule for up to 6–12 months to detect late nephritis',
      'Most children need no specific treatment; severe abdominal or renal disease may need corticosteroids under specialist care',
      'Safety-net carefully for abdominal complications and worsening renal signs',
      'Confirm FBC/platelets and clotting are normal, then monitor BP + urinalysis at diagnosis and on a schedule for 6–12 months to catch late IgA nephritis'],
    referral:[
      'Severe abdominal pain, signs of intussusception, GI bleeding, or a systemically unwell child → urgent paediatrics',
      'Significant renal involvement (hypertension, heavy proteinuria, rising creatinine, nephrotic/nephritic features) → paediatric nephrology',
      'Diagnostic doubt — low platelets, atypical rash, or unwell child → urgent assessment to exclude meningococcal sepsis and ITP'],
    source:'NICE CKS' },

  { id:'hiatus-hernia', title:'Hiatus hernia', category:'Gastroenterology', icon:'🫃',
    overview:'Protrusion of part of the stomach through the diaphragmatic hiatus into the thorax. Most are sliding hernias, are often asymptomatic or associated with reflux, and are managed as for GORD. Rolling (para-oesophageal) hernias carry a small risk of obstruction or strangulation.',
    features:[
      'Frequently incidental; may cause reflux symptoms — heartburn, regurgitation, worse lying flat or bending',
      'Sliding (~90%): gastro-oesophageal junction slides up; mainly causes reflux',
      'Rolling/para-oesophageal: fundus herniates alongside the oesophagus — risk of incarceration, obstruction or strangulation',
      'Large hernias: dysphagia, early satiety, postprandial fullness, breathlessness, and iron-deficiency anaemia (Cameron lesions)',
      'Acute severe chest/epigastric pain with retching and inability to vomit suggests gastric volvulus/strangulation (emergency)'],
    management:[
      'Manage reflux symptoms: lifestyle measures (weight loss, smaller meals, avoid late eating and dietary triggers, reduce alcohol, stop smoking) and raise the head of the bed',
      'Acid suppression with a PPI for symptomatic reflux; step down to the lowest effective dose',
      'Most sliding hernias need no specific intervention beyond reflux control',
      'Investigate iron-deficiency anaemia appropriately rather than attributing it solely to the hernia',
      'Surgical (fundoplication / hernia repair) considered for refractory reflux or symptomatic/large para-oesophageal hernias',
      'Manage as GORD: lifestyle measures + a PPI (e.g. omeprazole 20 mg OD) stepped to the lowest effective dose; investigate any iron-deficiency anaemia properly'],
    referral:[
      'Dysphagia, unexplained weight loss, iron-deficiency anaemia, or persistent vomiting → upper-GI 2WW / endoscopy',
      'Symptomatic rolling/para-oesophageal hernia → surgical referral (risk of strangulation)',
      'Acute severe chest/epigastric pain with retching and unable to vomit (?gastric volvulus) → emergency admission',
      'Refractory reflux despite optimal therapy → gastroenterology'],
    source:'NICE CKS — GORD / Dyspepsia' },

  { id:'hidradenitis', title:'Hidradenitis suppurativa (HS)', category:'Dermatology', icon:'🔴',
    overview:'A chronic, relapsing, inflammatory follicular skin disease of apocrine-bearing flexural sites (axillae, groin, inframammary, perineal) producing painful nodules, abscesses, sinus tracts and scarring. It is frequently delayed in diagnosis and has a major psychological burden.',
    features:[
      'Recurrent painful inflammatory nodules and "boils", abscesses, discharging sinus tracts and bridged scars in flexures',
      'Double-ended (tombstone) comedones; malodorous discharge; lesions recur in the same areas',
      'Strong associations with smoking, obesity and metabolic syndrome; also PCOS, IBD and inflammatory arthritis',
      'Hurley staging guides treatment: I (isolated abscesses), II (recurrent with tracts/scarring, separated lesions), III (diffuse interconnected tracts/abscesses)',
      'Significant impact on quality of life, mood, work and relationships'],
    management:[
      'Lifestyle: strongly support smoking cessation and weight loss; loose clothing; antiseptic washes (e.g. chlorhexidine/benzoyl peroxide)',
      'Mild (Hurley I): topical clindamycin; intralesional steroid for acute flares; manage acute abscesses with analgesia ± antibiotics (incision and drainage gives only temporary relief and tracts recur)',
      'Moderate: oral antibiotic courses (e.g. tetracyclines, or clindamycin + rifampicin under guidance); anti-androgen/hormonal therapy in selected women',
      'Adequate analgesia and active management of the substantial psychological impact',
      'Screen for and treat metabolic comorbidities (BP, lipids, glucose)',
      'Severe disease: dermatology for biologics (e.g. adalimumab) and surgical options',
      'Push smoking cessation and weight loss, give an antiseptic wash + topical clindamycin for Hurley I, and step to oral tetracyclines for moderate disease',
      'Provide real analgesia and screen/treat metabolic comorbidities; incision-and-drainage gives only temporary relief and tracts recur'],
    referral:[
      'Moderate–severe disease, scarring, or sinus tracts → dermatology (consider biologics such as adalimumab)',
      'Extensive or refractory disease (Hurley II–III) → dermatology ± surgery (de-roofing/wide excision)',
      'Significant psychological impact → mental-health/psychological support'],
    source:'NICE CKS / BAD HS guidance' },

  { id:'hoarding', title:'Hoarding disorder', category:'Mental health', icon:'🧠',
    overview:'A persistent difficulty discarding possessions because of a perceived need to save them, with distress at the thought of discarding, leading to accumulation that congests living spaces and impairs function. It is a distinct disorder with real safety and safeguarding implications.',
    features:[
      'Accumulated clutter that prevents normal use of rooms (e.g. cannot cook in the kitchen or sleep in the bed)',
      'Marked distress or indecision at discarding; possessions acquired excessively in some cases',
      'Risks: fire hazard, falls, poor hygiene/infestation, social isolation, and safeguarding concerns for dependents/animals',
      'Insight is often limited; ego-syntonic beliefs about possessions',
      'High comorbidity with depression, anxiety and OCD; can occur with ADHD and in older adults with cognitive decline'],
    management:[
      'Build a trusting, non-judgemental relationship; engagement is often the hardest and most important step',
      'Assess risk (fire, environmental health, self-neglect, dependents) and capacity; involve a multi-agency approach (fire service home safety visit, environmental health, social care)',
      'First-line treatment: CBT tailored to hoarding (skills for decision-making, sorting and tolerating discarding)',
      'Treat comorbid depression/anxiety/OCD; consider an SSRI where indicated',
      'Avoid one-off forced clear-outs in isolation — they cause severe distress and clutter typically recurs',
      'Occupational therapy and ongoing support for function, especially in older adults',
      'Engagement first, not forced clear-outs; assess fire/self-neglect/safeguarding risk, arrange a fire-service home safety visit, and refer for hoarding-specific CBT'],
    referral:[
      'Significant risk — serious fire/hygiene hazard, self-neglect, or safeguarding of children/vulnerable adults/animals → safeguarding/multi-agency referral',
      'Refractory or severe disorder → mental-health/psychology service',
      'Functional decline or suspected cognitive impairment in older adults → social care/OT and cognitive assessment'],
    source:'NICE CKS' },

  { id:'hpv', title:'Human papillomavirus (HPV)', category:'Infectious diseases', icon:'🦠',
    overview:'A very common sexually transmitted virus; most infections are transient and clear spontaneously. High-risk types (notably 16 and 18) cause cervical and other anogenital and oropharyngeal cancers and are targeted by screening and vaccination; low-risk types (6 and 11) cause anogenital warts.',
    features:[
      'Usually asymptomatic and transient — most clear within ~2 years without consequence',
      'High-risk types → cervical, vulval, vaginal, anal, penile and oropharyngeal cancers',
      'Low-risk types 6/11 → anogenital warts',
      'Detected through cervical screening, which now uses primary high-risk HPV testing with reflex cytology',
      'A positive HPV result does not indicate recent infection or infidelity — counsel sensitively'],
    management:[
      'Reassure: HPV is extremely common, usually clears spontaneously, and is not a marker of recent or unfaithful sexual contact',
      'Promote HPV vaccination — the school programme (now one dose for eligible cohorts) and eligible groups such as MSM up to 45 via sexual-health services',
      'Follow the NHS cervical screening programme: primary HPV testing, with cytology and colposcopy referral driven by the result',
      'Treat anogenital warts per the warts pathway (topical podophyllotoxin/imiquimod or ablative cryotherapy) — note treatment clears warts but not the virus',
      'Encourage condom use (reduces but does not eliminate transmission) and smoking cessation (smoking impairs clearance)',
      'Reassure: HPV is very common, usually clears, and is not a sign of recent or unfaithful contact; follow primary HPV screening and promote vaccination'],
    referral:[
      'Abnormal cervical screening (HPV positive with relevant cytology) → colposcopy per programme',
      'Persistent, extensive, or diagnostically uncertain warts → GUM/dermatology',
      'Suspicious cervical, anal, vulval, penile or oropharyngeal lesions → appropriate 2WW cancer pathway'],
    source:'UKHSA / NHS Cervical Screening Programme' },

  { id:'huntingtons', title:'Huntington\u2019s disease', category:'Neurology', icon:'🧠',
    overview:'An autosomal-dominant progressive neurodegenerative disorder caused by a CAG trinucleotide repeat expansion in the HTT gene, producing a triad of movement disorder (chorea), cognitive decline and psychiatric symptoms, usually presenting in mid-adulthood. Suicide risk is high throughout.',
    features:[
      'Movement: chorea (early), later dystonia, bradykinesia, incoordination, dysarthria and dysphagia',
      'Cognitive: progressive executive dysfunction and subcortical dementia',
      'Psychiatric: depression, irritability, apathy, obsessionality, and psychosis — with a markedly elevated suicide risk',
      'Autosomal-dominant inheritance with anticipation (earlier onset/greater severity in successive generations with larger repeats)',
      'Confirmed by genetic testing; predictive testing in at-risk relatives requires formal genetic counselling'],
    management:[
      'Specialist-led care (neurology/genetics) with an MDT; the GP supports symptom management, family care and coordination',
      'Genetic counselling for the patient and at-risk relatives before any predictive testing; consider reproductive options',
      'Symptomatic treatment: manage depression and psychosis actively, treat chorea where troublesome (specialist — e.g. tetrabenazine), and involve SALT and dietetics for swallowing/nutrition',
      'Falls prevention, communication aids, and carer support',
      'Advance care planning early while capacity is retained; maintain high vigilance for suicidality at every contact',
      'Treat depression/psychosis actively, involve SALT and dietetics for swallowing/nutrition, and start advance care planning early while capacity is retained'],
    referral:[
      'Suspected Huntington\u2019s disease → neurology + clinical genetics (counselling before testing)',
      'Psychiatric symptoms or suicide risk → mental-health services (urgent if risk)',
      'Progressive disability and swallowing/nutrition concerns → MDT and palliative care as appropriate'],
    source:'NICE CKS / clinical genetics guidance' },

  { id:'ipf', title:'Idiopathic pulmonary fibrosis (IPF)', category:'Respiratory', icon:'🫁',
    overview:'A progressive fibrosing interstitial lung disease of unknown cause, typically affecting older adults (especially ex-smokers, men), with a usual interstitial pneumonia (UIP) pattern and a poor prognosis. Early recognition and referral enable antifibrotic treatment and transplant assessment.',
    features:[
      'Progressive exertional breathlessness and a persistent dry cough over months',
      'Fine bibasal end-inspiratory "velcro" crackles and finger clubbing on examination',
      'Restrictive spirometry with reduced gas transfer (TLCO); HRCT shows a UIP pattern (basal/subpleural reticulation, honeycombing, traction bronchiectasis)',
      'Older adults, more common in men and ex-smokers; exclude other ILD causes (connective-tissue disease, drugs, hypersensitivity pneumonitis, asbestos)',
      'Course punctuated by acute exacerbations, which carry high mortality'],
    management:[
      'Recognise early and refer to a respiratory/ILD service for diagnosis (HRCT and ILD MDT)',
      'Antifibrotic therapy (pirfenidone or nintedanib) slows decline — specialist-initiated',
      'Supportive care: pulmonary rehabilitation, ambulatory/long-term oxygen assessment, vaccinations (influenza, pneumococcal, COVID), and smoking cessation',
      'Treat comorbidities (reflux, pulmonary hypertension, OSA, cardiovascular disease) and consider cough management',
      'Early discussion of prognosis, advance care planning, and palliative symptom control (breathlessness, cough) as the disease progresses',
      'Consider lung-transplant assessment in suitable patients',
      'Velcro crackles + clubbing + a progressive dry cough/breathlessness should prompt respiratory referral for HRCT; meanwhile give vaccines, pulmonary rehab and smoking cessation'],
    referral:[
      'Suspected ILD/IPF (velcro crackles, clubbing, progressive breathlessness, abnormal CXR/spirometry) → respiratory referral',
      'Acute exacerbation or rapid deterioration → urgent assessment',
      'For antifibrotic therapy and lung-transplant assessment → specialist ILD centre'],
    source:'NICE NG / BTS interstitial lung disease guidance' },

  { id:'ingrown-toenail', title:'Ingrown toenail (onychocryptosis)', category:'Dermatology', icon:'🦶',
    overview:'The nail edge — usually of the great toe — penetrates the adjacent nail fold, causing pain, inflammation, and frequently secondary infection or exuberant granulation tissue. Most respond to conservative care; recurrent cases need nail-edge surgery.',
    features:[
      'Pain, redness and swelling along the lateral nail fold; may discharge or develop granulation tissue',
      'Common precipitants: tight/ill-fitting footwear, curved nail-cutting (rather than straight across), trauma, hyperhidrosis',
      'Secondary infection (paronychia/cellulitis) is common; recurrence is frequent without definitive treatment',
      'Assess vascular and diabetic status — higher complication risk and a lower treatment threshold in those groups'],
    management:[
      'Conservative (mild/early): warm salt-water soaks, meticulous foot hygiene, well-fitting footwear, and cutting nails straight across (not down the sides)',
      'Tuck a wisp of cotton wool or dental floss under the nail edge to lift it; provide analgesia',
      'Treat secondary infection: oral antibiotic (e.g. flucloxacillin) only if spreading cellulitis; otherwise local measures',
      'Refer to podiatry for conservative nail care, particularly in recurrent cases',
      'Definitive treatment for recurrent/severe disease: partial nail avulsion with phenolisation (chemical matricectomy)',
      'Conservative first (salt-water soaks, straight-across cutting, cotton-wisp lift); oral flucloxacillin only for spreading cellulitis; lower threshold to refer in diabetes/PAD'],
    referral:[
      'Recurrent or severe ingrowing → podiatry / minor surgery for partial nail avulsion ± phenolisation',
      'Significant or non-resolving infection/cellulitis → review and antibiotics',
      'Diabetes or peripheral arterial disease → lower threshold for referral and foot-protection input'],
    source:'NICE CKS' },

  { id:'insect-bites-stings', title:'Insect bites and stings', category:'Dermatology', icon:'🐝',
    overview:'Most bites and stings cause a self-limiting local reaction managed symptomatically. The clinical priorities are recognising anaphylaxis, identifying secondary infection, and considering bites that transmit disease (e.g. tick-borne Lyme).',
    features:[
      'Local reaction: itchy or painful red papule or weal; large local reactions (extensive swelling) can occur and are not allergic anaphylaxis',
      'Anaphylaxis: rapid onset of airway, breathing or circulation compromise (wheeze, stridor, hypotension, collapse) ± widespread urticaria/angioedema after a sting',
      'Secondary infection: increasing, spreading erythema, warmth, pus and systemic upset (usually develops after 24–48 h, unlike early reactive redness)',
      'Disease transmission: ticks (Lyme — watch for erythema migrans), mosquitoes (travel-related infections)',
      'Bee stings leave the sting in situ; wasps do not'],
    management:[
      'Local reactions: clean the area, apply a cold compress, oral antihistamine, and simple analgesia; remove a bee sting by scraping (avoid squeezing the venom sac)',
      'Large local reactions: oral antihistamine and a short course of topical or oral corticosteroid; advise against scratching',
      'Secondary infection: oral flucloxacillin (clarithromycin if penicillin-allergic) if genuinely infected and spreading',
      'Remove ticks promptly with fine-tipped tweezers close to the skin; safety-net for erythema migrans and treat Lyme with doxycycline if it develops',
      'For known venom anaphylaxis, ensure adrenaline auto-injector and an action plan; consider venom immunotherapy referral',
      'Local reactions: cold compress, oral antihistamine ± a short steroid for large reactions; flucloxacillin only if genuinely infected after 24–48 h; remove ticks early and safety-net for Lyme'],
    referral:[
      'Anaphylaxis → 999 and IM adrenaline; refer to allergy for assessment and venom immunotherapy consideration',
      'Spreading infection or systemic illness → same-day assessment',
      'Tick bite with erythema migrans or systemic features → treat for Lyme disease',
      'Recurrent severe local/systemic reactions → allergy clinic'],
    source:'NICE CKS' },

  { id:'jet-lag', title:'Jet lag', category:'General', icon:'✈️',
    overview:'A temporary circadian-rhythm (body-clock) disruption after rapidly crossing several time zones, causing sleep disturbance, daytime fatigue, impaired performance and GI upset. It is self-limiting, resolving as the body clock realigns (roughly one day per time zone).',
    features:[
      'Worse travelling eastward (advancing the clock) and with more time zones crossed',
      'Sleep-onset/maintenance disturbance, daytime sleepiness, poor concentration, irritability, and GI upset',
      'Settles over several days as the circadian rhythm resynchronises',
      'More marked and slower to resolve in older travellers'],
    management:[
      'Shift the sleep schedule towards the destination time before and after travel; adopt destination meal and sleep times on arrival',
      'Use appropriately timed bright light (and avoid light at the wrong time) to shift the body clock — seek morning light after eastward travel',
      'Maintain hydration; limit alcohol and caffeine, especially before sleep; use brief strategic naps without compromising night sleep',
      'Melatonin, timed to the destination bedtime, can reduce jet lag for eastward travel/multiple time zones — counsel on timing and that it is not licensed for this in all settings',
      'A short-acting hypnotic only if essential and short-term; reassure that jet lag is self-limiting',
      'Self-limiting — use timed bright light, a destination-time routine and good hydration; melatonin at destination bedtime helps eastward/multi-zone travel (counsel on timing)'],
    referral:[
      'Rarely required — if "jet lag" is persistent and unrelated to travel, reconsider for a primary sleep disorder or shift-work disorder'],
    source:'NICE CKS' },

  { id:'jhs', title:'Joint hypermobility syndrome', category:'Musculoskeletal', icon:'🤸',
    overview:'Symptomatic generalised joint hypermobility (overlapping substantially with hypermobile EDS) causing pain, instability, soft-tissue injury and fatigue, with normal initial investigations. Management is supportive and physiotherapy-led.',
    features:[
      'Generalised hypermobility assessed by the Beighton score, with recurrent sprains, subluxations and joint pain',
      'Fatigue, frequent soft-tissue injuries, and slow recovery from injury',
      'Associated features: autonomic symptoms (PoTS), GI dysmotility, anxiety, and pelvic-floor symptoms',
      'Normal inflammatory markers and imaging early; diagnosis is clinical',
      'Distinguish from inflammatory arthropathy and from syndromic hypermobility (vascular EDS, Marfan) which need genetics'],
    management:[
      'Reassure and explain the condition; physiotherapy is the mainstay — graded strengthening, proprioceptive/balance work, and joint protection within tolerance',
      'Pain management on chronic-pain principles; avoid escalating opioids; emphasise pacing and self-management',
      'Occupational therapy for joint protection and aids; appropriate footwear/orthotics',
      'Manage associated PoTS (fluids, salt, compression, graded exercise), fatigue, GI symptoms and anxiety',
      'Encourage low-impact conditioning (e.g. swimming, Pilates) and graded return to activity',
      'Physiotherapy is the mainstay; manage pain on chronic-pain principles (avoid escalating opioids) and treat associated PoTS, fatigue and anxiety'],
    referral:[
      'Diagnostic doubt or features suggesting vascular EDS / Marfan syndrome → rheumatology / clinical genetics',
      'Refractory pain or instability → rheumatology / MSK / pain MDT',
      'Significant autonomic or GI symptoms → relevant specialty'],
    source:'NICE CKS / EDS & hypermobility guidance' },

  { id:'keloid', title:'Keloid scars', category:'Dermatology', icon:'🩹',
    overview:'An overgrowth of dense fibrous scar tissue that extends beyond the boundaries of the original wound (in contrast to hypertrophic scars, which remain within them). Keloids are commoner in darker skin types and at certain sites, and do not regress spontaneously.',
    features:[
      'Firm, raised, often itchy or tender scar that grows beyond the original wound margins and does not regress',
      'Predilection sites: earlobes (after piercing), chest/sternum, shoulders, upper back and jawline',
      'Commoner in skin of colour and where there is a personal/family history of keloids',
      'Cosmetic and symptomatic impact (itch, pain, restriction); may recur after treatment',
      'Distinguish from hypertrophic scars (confined to the wound, tend to improve over time)'],
    management:[
      'Prevention is key in prone individuals: avoid elective procedures/piercings at high-risk sites; use silicone gel/sheets and pressure on healing wounds',
      'First-line treatment: intralesional corticosteroid injections (e.g. triamcinolone), often repeated',
      'Silicone dressings and pressure devices (e.g. pressure earrings after earlobe surgery)',
      'Set realistic expectations — improvement rather than cure, and recurrence is common',
      'Combination and second-line options (cryotherapy, laser, excision with adjuvant steroid/radiotherapy) via specialists',
      'First-line is intralesional triamcinolone (often repeated); in prone patients prevent with silicone sheets/pressure and by avoiding elective procedures at high-risk sites'],
    referral:[
      'Symptomatic, disfiguring, or treatment-refractory keloids → dermatology/plastic surgery for intralesional steroid, cryotherapy, laser, or excision with adjuvant therapy',
      'Diagnostic uncertainty (e.g. to exclude dermatofibrosarcoma) → specialist'],
    source:'NICE CKS / BAD' },

  { id:'keratosis-pilaris', title:'Keratosis pilaris', category:'Dermatology', icon:'🌾',
    overview:'A very common, benign disorder of follicular keratin plugging producing rough "chicken-skin" papules, typically on the upper outer arms, thighs and cheeks. It is harmless, associated with atopy and dry skin, and often improves with age.',
    features:[
      'Numerous small, rough, follicular papules with variable perifollicular redness; a "sandpaper" texture',
      'Distribution: upper outer arms, anterior thighs, buttocks and cheeks (especially in children)',
      'Asymptomatic or mildly itchy; worse in winter and with dry skin; associated with atopic eczema and ichthyosis',
      'Often improves spontaneously through adolescence and adulthood'],
    management:[
      'Reassure — it is benign and primarily a cosmetic concern that frequently improves with age',
      'Regular emollients and avoidance of harsh soaps/scrubbing; gentle exfoliation',
      'Keratolytics for rougher areas: urea-, lactic-acid- or salicylic-acid-containing creams',
      'Topical retinoids can be tried for persistent cases; manage associated facial redness gently',
      'Set realistic expectations — treatment softens and reduces but rarely fully clears it',
      'Regular emollient + a urea- or lactic-acid keratolytic, avoid harsh scrubbing, and reassure it is benign and usually improves with age'],
    referral:[
      'Rarely needed; refer only for diagnostic uncertainty or severe/atypical variants (e.g. keratosis pilaris atrophicans) → dermatology'],
    source:'NICE CKS' },

  { id:'lactose-intolerance', title:'Lactose intolerance', category:'Gastroenterology', icon:'🥛',
    overview:'Symptoms resulting from lactase deficiency and consequent malabsorption of lactose — bloating, flatulence, cramps and diarrhoea after dairy. It is a non-immune, dose-related intolerance, entirely distinct from cow\u2019s-milk protein allergy.',
    features:[
      'Dose-related bloating, flatulence, abdominal cramps and osmotic diarrhoea within hours of lactose-containing food',
      'No allergic features (no urticaria, angioedema or anaphylaxis) — distinguishes it from milk allergy',
      'Types: primary (genetically programmed decline in lactase, common in many ethnic groups), secondary (after gastroenteritis, coeliac disease, or other mucosal injury — often reversible), and rare congenital lactase deficiency',
      'Diagnosis is usually clinical — improvement on lactose exclusion and recurrence on reintroduction (hydrogen breath testing is available but seldom needed)'],
    management:[
      'Trial of lactose reduction/exclusion followed by reintroduction to confirm the diagnosis',
      'Most people tolerate small amounts, especially with meals, and tolerate hard cheeses and live yoghurt better than milk',
      'Lactase enzyme replacement supplements and lactose-free dairy products allow continued dairy intake',
      'Ensure adequate calcium and vitamin D if dairy is restricted; involve a dietitian if intake is markedly limited (especially in children)',
      'Consider and treat an underlying secondary cause (e.g. coeliac disease) if features are atypical or there are red flags',
      'Confirm by exclusion-and-reintroduction; most tolerate small amounts with meals; use lactase supplements/lactose-free dairy and ensure adequate calcium/vitamin D'],
    referral:[
      'Red flags — unintentional weight loss, rectal bleeding, iron-deficiency anaemia, nocturnal symptoms → investigate / 2WW as appropriate',
      'Diagnostic uncertainty or a suspected secondary cause (e.g. coeliac disease, IBD) → gastroenterology',
      'Children with faltering growth or extensive dietary restriction → paediatric/dietetic referral'],
    source:'NICE CKS' },

  { id:'gambling-disorder', title:'Gambling disorder', category:'Mental health', icon:'🎲',
    overview:'A behavioural addiction in which persistent, problematic gambling causes significant harm to finances, relationships, work and mental health. It is strongly associated with depression, substance misuse and suicide, yet is rarely volunteered — ask directly when there are unexplained financial, mood or relationship difficulties.',
    features:[
      'Preoccupation with gambling, needing to bet increasing amounts, repeated failed attempts to cut down, restlessness/irritability when trying to stop',
      'Chasing losses, lying to conceal involvement, borrowing or stealing, jeopardising relationships/employment',
      'Online and in-play betting accelerate harm; debt, relationship breakdown and crime are common consequences',
      'High comorbidity: depression, anxiety, alcohol and drug misuse, and markedly elevated suicide risk',
      'Affected family members (including children) experience significant harm too'],
    management:[
      'Ask sensitively and non-judgementally; a brief screen (e.g. "Have you ever felt you wanted to stop gambling but could not?") helps case-finding',
      'Validate, assess severity and screen explicitly for depression and suicidal ideation at every contact',
      'Signpost to specialist support: the National Gambling Helpline (GamCare), NHS gambling treatment clinics, GamCare/GMA and Gamblers Anonymous',
      'Encourage practical harm-reduction: self-exclusion schemes (GAMSTOP), gambling-blocking software, bank gambling blocks, and handing financial control to a trusted person',
      'Treat comorbid depression, anxiety and substance misuse; offer CBT (the best-evidenced psychological therapy) via referral',
      'Support affected family members and signpost them to help; consider safeguarding where children are affected'],
    referral:[
      'Significant suicide risk or severe mental illness → urgent mental-health assessment',
      'Moderate–severe gambling disorder → NHS gambling treatment service / National Gambling Helpline',
      'Comorbid substance misuse → drug and alcohol service',
      'Affected family members → dedicated family support services'],
    source:'NICE / RCGP / GamCare' },

  { id:'globus', title:'Globus pharyngeus', category:'ENT', icon:'👄',
    overview:'A persistent or intermittent sensation of a lump, tightness or foreign body in the throat in the absence of true dysphagia or an actual mass. It is common and benign, but the diagnosis depends on confidently excluding the red flags of head-and-neck and oesophageal malignancy.',
    features:[
      'Midline sensation of a lump/tightness, often eased (not worsened) by eating or drinking',
      'No true dysphagia, no odynophagia, no weight loss, no neck mass — these would be red flags',
      'Often fluctuates with stress and throat-clearing; associated with reflux (laryngopharyngeal) and post-nasal drip',
      'Symptoms typically worse when swallowing saliva and better during meals',
      'Normal examination of the mouth, oropharynx and neck'],
    management:[
      'Take a careful history specifically to exclude red flags, and examine the mouth, oropharynx and neck (including lymph nodes and thyroid)',
      'Explain and reassure: a positive, confident explanation of globus is therapeutic and reduces anxiety and repeated presentation',
      'Treat contributing factors: laryngopharyngeal reflux (lifestyle measures ± a trial of a PPI), post-nasal drip/rhinitis, and throat-clearing habit',
      'Offer voice care and relaxation strategies; address anxiety where relevant',
      'Review to ensure resolution and re-examine if new symptoms develop — persistence or any red flag changes the plan'],
    referral:[
      'Dysphagia, odynophagia, unexplained weight loss, a neck lump, persistent unilateral symptoms, hoarseness >3 weeks or globus persisting/progressing → urgent suspected head-and-neck cancer referral (NICE NG12)',
      'Persistent globus despite reflux treatment and reassurance → ENT for nasendoscopy',
      'Suspected oesophageal pathology (true dysphagia) → upper-GI 2WW / endoscopy'],
    source:'NICE CKS / NICE NG12 / ENT UK' }

  );
})();
