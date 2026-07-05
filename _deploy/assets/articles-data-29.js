/* Reasoning GP — Articles data (batch 29: T topics, part 1)
   NHS A–Z (letter T) gaps. RCGP/SCA examiner depth.
   NICE NG12 (May 2025) 2WW pathways stated explicitly where relevant. */
(function(){
  const A = (window.RGP_ARTICLES = window.RGP_ARTICLES || []);
  A.push(

  { id:'tapeworm', title:'Tapeworms', category:'Infectious diseases', icon:'🪱',
    overview:'Intestinal infestation with tapeworms (cestodes), usually acquired by eating undercooked meat or fish, or via the faecal-oral route. Intestinal infection is often mild, but some forms — notably the larval tissue infections (cysticercosis, hydatid disease) — cause serious disease, so the type and exposure history matter.',
    features:[
      'Intestinal tapeworm (e.g. Taenia from beef/pork, fish tapeworm, Hymenolepis): often asymptomatic, or mild abdominal discomfort, nausea, and passing visible proglottid segments in the stool',
      'Fish tapeworm (Diphyllobothrium) can cause vitamin B12 deficiency',
      'CYSTICERCOSIS: tissue infection with pork-tapeworm larvae — neurocysticercosis (cysts in the brain) is a major cause of seizures/epilepsy in endemic areas',
      'HYDATID disease (Echinococcus, from dogs/livestock): slow-growing cysts, usually in the liver or lungs',
      'Exposure clues: travel to/residence in endemic regions, undercooked meat/fish, and animal/livestock contact',
      'Diagnosis: stool microscopy (ova/proglottids) for intestinal infection; serology and imaging for tissue disease (CT/MRI for neurocysticercosis, ultrasound/CT for hydatid)'],
    management:[
      'Intestinal tapeworm: treat with an antihelminthic (e.g. praziquantel, or niclosamide) — usually straightforward and effective',
      'Take a travel, dietary and animal-contact history to assess the type and the risk of tissue disease',
      'Refer suspected tissue disease (neurocysticercosis, hydatid) to specialists — these need careful, sometimes complex, management (antihelminthics with corticosteroid cover, anti-seizure treatment, and sometimes surgery)',
      'For neurocysticercosis presenting with seizures, manage the seizures and refer to neurology/infectious diseases (treatment is specialist and timing matters)',
      'Investigate and treat fish-tapeworm-associated B12 deficiency',
      'Advise on prevention: thorough cooking/freezing of meat and fish, hand hygiene, and food/water safety when travelling',
      'Notify/seek advice for unusual or imported parasitic disease as appropriate',
      'Confirm clearance where relevant and provide reassurance for simple intestinal infection'],
    referral:[
      'Suspected neurocysticercosis (new seizures with relevant exposure) → neurology/infectious diseases (urgent if acutely unwell)',
      'Suspected hydatid disease (liver/lung cysts) → infectious diseases/surgery',
      'Complex, imported, or tissue parasitic disease → infectious diseases/tropical medicine',
      'Uncomplicated intestinal tapeworm → treat in primary care'],
    source:'UKHSA / NICE CKS — Tapeworm / tropical medicine guidance' },

  { id:'tuberculosis', title:'Tuberculosis (TB)', category:'Infectious diseases', icon:'🦠',
    overview:'A bacterial infection (Mycobacterium tuberculosis), usually pulmonary but able to affect any organ. It may be active (infectious) or latent (dormant). It remains an important diagnosis — especially in higher-risk groups — and is a notifiable, public-health-managed disease requiring prolonged combination antibiotics and contact tracing.',
    features:[
      'Pulmonary TB: a persistent cough (>3 weeks), haemoptysis, fever, drenching night sweats, weight loss, and fatigue',
      'Extrapulmonary TB: lymphadenitis (e.g. neck nodes), spinal/bone TB, TB meningitis, genitourinary, abdominal, and miliary (disseminated) disease',
      'Constitutional features (night sweats, weight loss, malaise) are common across forms',
      'Higher-risk groups: people from/with travel to high-incidence countries, close contacts of TB, immunocompromised (including HIV), homelessness, drug/alcohol misuse, and prisons',
      'LATENT TB: infection without active disease (asymptomatic, non-infectious) — important to detect and treat in at-risk groups to prevent reactivation',
      'Diagnosis: chest X-ray and sputum (microscopy/culture, and molecular tests) for pulmonary TB; tissue sampling for extrapulmonary; and IGRA/tuberculin testing for latent TB'],
    management:[
      'Suspect TB in at-risk patients with a persistent cough/constitutional symptoms — arrange a chest X-ray and sputum, and refer to TB/respiratory/infectious-diseases services',
      'Active TB is treated with prolonged combination antibiotics (standard regimen: rifampicin, isoniazid, pyrazinamide and ethambutol initially, then continuation) — specialist-managed, with monitoring for toxicity and drug interactions',
      'Support adherence (crucial to cure and to prevent drug resistance) — directly observed therapy for those at risk of non-adherence',
      'TB is a NOTIFIABLE disease — notify the health protection team; contact tracing and screening of close contacts are arranged by TB services',
      'Detect and treat LATENT TB in at-risk groups (e.g. contacts, before immunosuppression/biologics, new entrants) to prevent reactivation',
      'Test for HIV in people diagnosed with TB, and address co-infection',
      'Recognise and urgently refer serious forms (TB meningitis, miliary TB, spinal TB with neurology) and drug-resistant TB',
      'Address social needs (housing, nutrition) and provide BCG vaccination per the targeted programme'],
    referral:[
      'Suspected active TB → TB/respiratory/infectious-diseases service (urgent if unwell or smear-positive); notify public health',
      'Suspected TB meningitis, miliary TB, or spinal TB with neurology → emergency admission',
      'Latent TB in at-risk groups (contacts, pre-immunosuppression) → TB service for assessment/treatment',
      'Drug-resistant or complex TB → specialist TB service'],
    source:'NICE NG33 (Tuberculosis) / UKHSA' },

  { id:'testicular-cancer', title:'Testicular cancer', category:'Urology', icon:'🎗️',
    overview:'The commonest cancer in young men (typically 15–45), usually presenting as a painless testicular lump. It is highly curable, especially when caught early — so prompt assessment of any testicular lump (with urgent ultrasound and referral) is the key primary-care task, alongside promoting testicular self-awareness.',
    features:[
      'A painless (occasionally aching) lump or swelling in the body of the testis is the classic presentation',
      'Other features: a change in testicular size/consistency, a dull ache or heaviness in the scrotum, and (rarely) gynaecomastia from hormone production',
      'Advanced disease: back pain (retroperitoneal nodes), a supraclavicular node, breathlessness (lung metastases), or constitutional symptoms',
      'Risk factors: undescended testis (cryptorchidism), previous testicular cancer, family history, and infertility/testicular dysgenesis',
      'Predominantly affects young to middle-aged men; it is highly treatable with excellent survival',
      'Investigations: urgent scrotal ULTRASOUND, and tumour markers (AFP, beta-hCG, LDH); diagnosis/staging via urology'],
    management:[
      'Examine any testicular lump/swelling; a lump within the body of the testis is cancer until proven otherwise',
      'Arrange urgent scrotal ULTRASOUND and refer on the suspected-cancer pathway for a non-cystic/suspicious testicular mass',
      'Check tumour markers (AFP, beta-hCG, LDH) — useful for diagnosis, staging and monitoring',
      'Refer confirmed/suspected testicular cancer to urology/uro-oncology; treatment is orchidectomy (usually via an inguinal approach), with chemotherapy/radiotherapy as indicated by stage and type',
      'Discuss SPERM STORAGE (fertility preservation) before treatment, as treatment can affect fertility',
      'Distinguish from benign scrotal lumps (epididymal cyst, hydrocele, varicocele) on examination/ultrasound — but image any uncertain intratesticular lump',
      'Promote testicular self-examination/awareness for early detection',
      'Provide information, psychological support, and survivorship follow-up (and surveillance for the contralateral testis)'],
    referral:[
      'A non-cystic/suspicious mass in the body of the testis → urgent suspected testicular-cancer (2WW) referral; arrange direct-access scrotal ultrasound to assess (NICE NG12)',
      'Confirmed/suspected testicular cancer → urology/uro-oncology',
      'Fertility preservation before treatment → sperm storage/fertility services',
      'Acute severe testicular pain (exclude torsion) → emergency surgical assessment'],
    source:'NICE NG12 / testicular cancer guidance' },

  { id:'testicular-torsion', title:'Testicular torsion', category:'Urology', icon:'♂️',
    overview:'Twisting of the spermatic cord cutting off the blood supply to the testis — a SURGICAL EMERGENCY. The testis can be saved only if it is untwisted within hours, so any acute testicular pain (especially in adolescents/young men) must be treated as torsion until proven otherwise, with immediate surgical referral.',
    features:[
      'Sudden-onset, severe, usually unilateral testicular pain, often with nausea and vomiting',
      'The affected testis is typically high-riding, swollen and exquisitely tender, sometimes lying horizontally; the cremasteric reflex is often absent',
      'Pain may radiate to the lower abdomen/groin — sometimes abdominal pain dominates, especially in children (a pitfall)',
      'Most common in adolescents and young men, but can occur at any age (including neonates)',
      'Time-critical: testicular salvage rates fall sharply after about 6 hours of torsion',
      'Differentials (must not delay surgery): epididymo-orchitis (usually more gradual, with urinary/STI features) and torsion of a testicular appendage — but if torsion cannot be excluded, treat as torsion'],
    management:[
      'Treat any acute testicular (or sometimes lower-abdominal) pain in a boy/young man as torsion until proven otherwise — this is the single most important rule',
      'Arrange IMMEDIATE emergency surgical referral for scrotal exploration — do NOT delay for imaging (ultrasound should not hold up surgery if torsion is suspected)',
      'Provide analgesia and keep the patient nil by mouth in anticipation of surgery',
      'Surgery: urgent exploration with detorsion and fixation (orchidopexy) of the affected testis if viable, and fixation of the contralateral testis; a non-viable testis is removed',
      'Recognise that a normal or equivocal examination does not exclude torsion — clinical suspicion mandates exploration',
      'Be alert to torsion in neonates and to intermittent torsion (recurrent self-resolving severe pain), which warrants elective fixation',
      'Counsel on fertility/contralateral fixation as relevant',
      'Educate young men to seek immediate help for acute testicular pain'],
    referral:[
      'Suspected testicular torsion (acute testicular pain) → IMMEDIATE emergency surgical referral for exploration — do not delay for investigations',
      'Equivocal cases where torsion cannot be excluded → treat as torsion (explore)',
      'Neonatal torsion → urgent specialist assessment',
      'Intermittent torsion (recurrent severe self-resolving pain) → urology for elective fixation'],
    source:'BAUS / NICE CKS — Scrotal pain' },

  { id:'tetanus', title:'Tetanus', category:'Infectious diseases', icon:'🦠',
    overview:'A life-threatening disease caused by a neurotoxin from Clostridium tetani, entering through contaminated wounds, causing severe muscle spasms. It is rare in the UK thanks to immunisation, so the practical focus is wound risk assessment and appropriate tetanus prophylaxis (vaccine ± immunoglobulin) after injuries.',
    features:[
      'Caused by toxin from C. tetani spores entering wounds — classically deep, dirty, or puncture wounds, those contaminated with soil/manure, burns, or with devitalised tissue',
      'Clinical disease: muscle stiffness and painful spasms, classically lockjaw (trismus), facial spasm (risus sardonicus), neck/back stiffness (opisthotonus), and generalised spasms, with autonomic instability',
      'Incubation is usually days to a few weeks after the injury',
      'Established tetanus is a medical emergency with significant mortality — but it is largely preventable by vaccination and correct wound management',
      'TETANUS-PRONE wounds: puncture wounds, those contaminated with soil/saliva, wounds with devitalised tissue, compound fractures, burns, and significant delay to treatment (high-risk if heavily contaminated)',
      'The practical issue in primary care is assessing wounds and immunisation status to give correct prophylaxis'],
    management:[
      'For any wound, assess the tetanus risk (clean vs tetanus-prone vs high-risk) AND the patient’s immunisation status',
      'Thoroughly clean and debride wounds, removing foreign material/devitalised tissue',
      'Give tetanus prophylaxis per the Green Book: a reinforcing vaccine dose if not fully up to date, and tetanus immunoglobulin for tetanus-prone/high-risk wounds in those who are unimmunised, incompletely immunised, or whose status is uncertain',
      'Fully immunised patients (with up-to-date boosters) generally need no further vaccine for a clean wound, but may need immunoglobulin for high-risk wounds — follow the algorithm',
      'Treat established tetanus as an emergency: admit to intensive care for wound management, antitoxin (immunoglobulin), antibiotics (e.g. metronidazole), spasm/airway control, and supportive care',
      'Consider tetanus risk in injuries sustained abroad or in those with uncertain vaccination histories',
      'Ensure routine childhood and booster immunisation, and update vaccination opportunistically',
      'Document wounds and the prophylaxis given'],
    referral:[
      'Suspected established tetanus (trismus, spasms after a wound) → emergency admission (intensive care)',
      'High-risk/tetanus-prone wounds needing immunoglobulin → arrange per the Green Book (and surgical debridement if needed)',
      'Complex or heavily contaminated wounds → surgical assessment',
      'Uncertain immunisation status with a tetanus-prone wound → treat per the prophylaxis algorithm'],
    source:'Green Book / UKHSA — Tetanus' },

  { id:'thalassaemia', title:'Thalassaemia', category:'Haematology', icon:'🩸',
    overview:'An inherited (autosomal-recessive) disorder of haemoglobin production (alpha or beta globin chains), causing anaemia of varying severity. It ranges from a silent carrier/trait to transfusion-dependent thalassaemia major. Detection (including via screening), avoiding inappropriate iron treatment, and genetic counselling are key roles.',
    features:[
      'A spectrum: thalassaemia trait/carrier (usually asymptomatic, mild microcytic anaemia), through intermedia, to thalassaemia MAJOR (severe, transfusion-dependent anaemia presenting in infancy)',
      'Beta-thalassaemia major: severe anaemia from the first year, failure to thrive, hepatosplenomegaly, and (if untreated) skeletal changes from marrow expansion',
      'Thalassaemia TRAIT: a microcytic, hypochromic picture with a normal/raised red-cell count and a disproportionately low MCV relative to the (mild) anaemia — and crucially NORMAL or high ferritin',
      'Predominantly affects people of Mediterranean, Middle Eastern, South and South-East Asian, and African heritage',
      'A key pitfall: do NOT mistake thalassaemia trait for iron-deficiency anaemia and give iron — check ferritin, and consider haemoglobinopathy screening',
      'Diagnosis: FBC/film, ferritin, and haemoglobin electrophoresis/HPLC; detected via antenatal/newborn screening programmes'],
    management:[
      'Distinguish thalassaemia trait from iron deficiency in microcytic anaemia: check ferritin — if iron stores are normal/high, consider haemoglobinopathy and arrange electrophoresis/HPLC, and do NOT give long-term iron unnecessarily',
      'Thalassaemia trait: reassure (it is not an illness), avoid inappropriate iron, and offer genetic counselling and partner/family screening (important for reproductive risk)',
      'Thalassaemia major/intermedia: refer to specialist haematology — management includes regular blood transfusions and iron-chelation therapy (to prevent transfusional iron overload), with monitoring for complications',
      'Iron overload (from transfusions/increased absorption) is a major issue in significant disease — managed with chelation; do not add to it with inappropriate oral iron',
      'Consider folic acid supplementation and ensure vaccinations/infection precautions (especially if hyposplenic/post-splenectomy)',
      'Stem-cell transplant can be curative for selected patients with thalassaemia major',
      'Provide antenatal/preconception counselling and screening, and support couples at risk',
      'Coordinate lifelong specialist care for significant disease and surveillance for complications'],
    referral:[
      'Thalassaemia major/intermedia, or significant haemoglobinopathy → specialist haematology',
      'Couples/individuals identified as carriers → genetic counselling and antenatal screening',
      'Microcytic anaemia with normal/high ferritin (suspected trait) → haemoglobinopathy screening (electrophoresis/HPLC)',
      'Complications of iron overload or transfusion → haematology'],
    source:'NICE CKS / NHS Sickle Cell and Thalassaemia Screening / BSH' },

  { id:'threadworms', title:'Threadworms (pinworms)', category:'Infectious diseases', icon:'🪱',
    overview:'A very common, benign intestinal worm infection (Enterobius vermicularis), especially in children, causing perianal itch (worse at night). It spreads easily by the faecal-oral route within households. Treatment is simple, but it must be combined with strict hygiene measures and treating the whole household to prevent reinfection.',
    features:[
      'Perianal (and, in girls, sometimes vulval) ITCHING, characteristically worse at night when the female worms lay eggs around the anus',
      'Tiny white thread-like worms (a few millimetres) may be seen around the anus or in the stool, especially at night',
      'Disturbed sleep and irritability (from the itch) in children; scratching can cause local excoriation/secondary infection',
      'Very common in school-age children and spreads readily within households (faecal-oral, via eggs on hands/under nails, bedding, and surfaces)',
      'Usually harmless; occasionally associated with vulvovaginitis or (rarely) appendiceal involvement',
      'Diagnosis is usually clinical (or by seeing worms); the "tape test" (clear adhesive tape applied to the perianal skin to collect eggs) can confirm if needed'],
    management:[
      'Treat with an antihelminthic — mebendazole (for those over the recommended age) is first-line — and treat ALL household members at the same time, even if asymptomatic',
      'Repeat the treatment dose after about 2 weeks if reinfection is likely/persists',
      'Combine drug treatment with strict HYGIENE measures (essential to prevent reinfection): wash hands and scrub nails (especially after toileting and before eating), keep nails short, discourage scratching/nail-biting',
      'Wash bedding, nightwear and towels, and damp-dust/vacuum, on the day of treatment; bathe/shower in the morning to remove eggs',
      'In pregnancy and young children, prioritise hygiene measures (drug treatment may be deferred/modified — follow guidance)',
      'Reassure that threadworms are common and harmless, and that recurrence is common without the hygiene measures',
      'Manage secondary skin infection from scratching if present',
      'Reinforce that treating the whole household plus hygiene is the key to clearance'],
    referral:[
      'Generally none needed — manage in primary care',
      'Persistent/recurrent infection despite correct treatment and hygiene → review (adherence, reinfection source)',
      'Diagnostic uncertainty or atypical symptoms → assessment',
      'Pregnancy/very young children → follow specific guidance on treatment'],
    source:'NICE CKS — Threadworm' },

  { id:'thyroid-cancer', title:'Thyroid cancer', category:'Endocrine & metabolic', icon:'🎗️',
    overview:'An uncommon cancer usually presenting as a thyroid nodule/lump. Most (papillary/follicular) are differentiated and have an excellent prognosis; medullary and anaplastic types are less common. The key skill is recognising the features of a nodule (and the red flags) that warrant urgent referral and exclusion of malignancy.',
    features:[
      'A thyroid nodule/lump — most thyroid nodules are benign, but certain features raise concern for cancer',
      'RED FLAGS: a rapidly enlarging or hard/fixed thyroid lump, hoarseness/voice change (recurrent laryngeal nerve involvement), cervical lymphadenopathy, a nodule in a child, stridor/compressive symptoms, or a history of neck irradiation',
      'Usually painless; thyroid function is typically normal (most thyroid cancers do not alter TFTs)',
      'Types: papillary and follicular (differentiated, good prognosis), medullary (may be familial — MEN syndromes, raised calcitonin), and anaplastic (rare, aggressive, in older patients — a rapidly enlarging hard mass)',
      'Risk factors: previous neck/head irradiation, family history/genetic syndromes (medullary), and female sex',
      'Investigations: TFTs (usually normal), ultrasound of the thyroid/neck, and fine-needle aspiration cytology for nodules meeting criteria'],
    management:[
      'Assess any thyroid nodule/lump: check thyroid function, examine for red-flag features and lymphadenopathy, and arrange neck ultrasound',
      'Refer using the suspected-cancer pathway for red-flag features; otherwise arrange ultrasound ± fine-needle aspiration to risk-stratify nodules',
      'Refer confirmed/suspected thyroid cancer to the thyroid MDT (endocrine surgery/oncology) for diagnosis and treatment',
      'Treatment is usually surgery (thyroid lobectomy/total thyroidectomy) ± radioiodine for differentiated cancer, followed by thyroid hormone replacement/suppression and surveillance',
      'Recognise the urgent presentation of anaplastic thyroid cancer (a rapidly enlarging hard neck mass with compressive symptoms in an older patient) — refer immediately',
      'For medullary thyroid cancer, consider genetic testing/MEN syndrome screening and family implications',
      'Manage post-treatment thyroid hormone replacement, calcium (after total thyroidectomy — hypoparathyroidism risk), and long-term surveillance (including thyroglobulin monitoring for differentiated cancer)',
      'Provide information and psychological support; prognosis for differentiated cancer is generally excellent'],
    referral:[
      'A rapidly enlarging, hard, or fixed thyroid lump, an unexplained thyroid lump, hoarseness with a thyroid mass, cervical lymphadenopathy with a thyroid nodule, or a thyroid nodule in a child → urgent suspected thyroid-cancer (2WW) referral (NICE NG12)',
      'Stridor/compressive symptoms or a rapidly growing hard mass (?anaplastic) → emergency/urgent assessment',
      'Confirmed thyroid cancer → thyroid MDT',
      'Suspected medullary/familial cancer → genetics + endocrinology'],
    source:'NICE NG12 / British Thyroid Association guidance' },

  { id:'tinnitus', title:'Tinnitus', category:'ENT', icon:'👂',
    overview:'The perception of sound (ringing, buzzing, hissing) without an external source. It is very common, usually associated with hearing loss, and most often benign — but the GP must recognise the patterns needing urgent referral (notably unilateral/pulsatile tinnitus) and support those whose tinnitus is distressing.',
    features:[
      'Perceived sound (ringing, buzzing, hissing, humming) without an external source, in one or both ears',
      'Usually subjective and bilateral, commonly associated with age-related or noise-induced hearing loss',
      'Often more noticeable in quiet/at night, and worsened by stress, fatigue, and sometimes caffeine',
      'RED FLAGS needing urgent referral: UNILATERAL tinnitus or unilateral hearing loss (exclude vestibular schwannoma/acoustic neuroma), PULSATILE tinnitus (vascular cause — needs investigation), tinnitus with neurological signs, or tinnitus with sudden hearing loss',
      'Can be very distressing — strongly associated with anxiety, depression, sleep disturbance, and (rarely) suicidality',
      'Assessment: history (laterality, pulsatile, associated symptoms), ear examination, hearing assessment/audiometry, and exclusion of reversible causes (e.g. wax, ototoxic drugs)'],
    management:[
      'Take a careful history (especially laterality and whether pulsatile) and examine the ears; identify and treat reversible contributors (ear wax, middle-ear disease, ototoxic medication)',
      'Arrange audiometry, as tinnitus commonly accompanies hearing loss; correcting hearing loss (e.g. hearing aids) often helps tinnitus',
      'Reassure for typical benign bilateral tinnitus, and explain it; many habituate over time',
      'Support and management for distressing tinnitus: tinnitus-focused education, sound therapy/maskers, and psychological approaches (CBT) for the distress — refer to audiology/tinnitus services',
      'Address coexisting anxiety, depression and sleep problems, and assess risk where tinnitus is severely distressing',
      'Urgently refer red-flag patterns: unilateral tinnitus/hearing loss (exclude acoustic neuroma) and pulsatile tinnitus (investigate for a vascular cause)',
      'Advise on reducing noise exposure (hearing protection) and managing triggers',
      'Provide written information and signpost support (e.g. tinnitus charities)'],
    referral:[
      'Unilateral tinnitus or unilateral hearing loss → ENT/audiovestibular + MRI (exclude vestibular schwannoma, NICE NG98)',
      'Pulsatile tinnitus → urgent ENT/imaging (investigate vascular cause)',
      'Tinnitus with sudden hearing loss → same-day ENT; with neurological signs → urgent referral',
      'Persistent distressing tinnitus → audiology/tinnitus service (sound therapy, CBT); severe distress/suicidality → mental-health support'],
    source:'NICE NG155 (Tinnitus) / NICE NG98' }

  );
})();
