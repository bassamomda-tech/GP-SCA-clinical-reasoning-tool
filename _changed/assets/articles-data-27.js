/* Reasoning GP — Articles data (batch 27: S topics, part 2)
   NHS A–Z (letter S) gaps. RCGP/SCA examiner depth.
   NICE NG12 (May 2025) 2WW pathways stated explicitly where relevant. */
(function(){
  const A = (window.RGP_ARTICLES = window.RGP_ARTICLES || []);
  A.push(

  { id:'sickle-cell', title:'Sickle cell disease', category:'Haematology', icon:'🩸',
    overview:'An inherited (autosomal-recessive) haemoglobinopathy in which abnormal haemoglobin S polymerises, deforming red cells, causing chronic haemolytic anaemia and recurrent painful vaso-occlusive crises. It is multisystem and lifelong; the GP role includes recognising acute crises/emergencies, supporting prevention, and coordinating shared care.',
    features:[
      'Chronic haemolytic anaemia and recurrent acute pain crises (vaso-occlusion) affecting bones, chest, abdomen and other sites',
      'VASO-OCCLUSIVE crisis: severe pain, often precipitated by cold, dehydration, infection, hypoxia, or stress',
      'ACUTE emergencies: acute chest syndrome (chest pain, fever, hypoxia, breathlessness — life-threatening), stroke, splenic sequestration (sudden anaemia + splenomegaly, especially in children), aplastic crisis (parvovirus B19), and acute severe infection',
      'Increased infection risk (functional hyposplenism) — especially encapsulated bacteria; priapism, leg ulcers, gallstones, avascular necrosis, retinopathy, and pulmonary hypertension are chronic complications',
      'Detected by newborn screening; confirmed by haemoglobin electrophoresis/HPLC; predominantly affects people of African, Caribbean, Middle Eastern and South Asian heritage',
      'Sickle cell TRAIT (carrier) is usually asymptomatic but relevant for genetic counselling'],
    management:[
      'Manage acute pain crises promptly: rapid, adequate analgesia (often strong opioids), hydration, warmth, oxygen if hypoxic, and treat any precipitant/infection — do not undertreat pain',
      'Recognise and urgently refer acute emergencies: acute chest syndrome, stroke, splenic sequestration, aplastic/sequestration crisis, severe infection/sepsis, and priapism',
      'Prevent crises and complications: hydration, avoid cold/hypoxia, prompt treatment of infections, and patient self-management education',
      'Infection prevention (functional hyposplenism): lifelong penicillin prophylaxis and full vaccination (including pneumococcal, meningococcal, Hib, influenza); have a low threshold for treating febrile illness',
      'Disease-modifying treatment (specialist): hydroxycarbamide reduces crises; transfusion programmes and, for selected patients, stem-cell transplant or newer therapies',
      'Coordinate specialist haematology care, regular review, and screening (e.g. transcranial Doppler in children for stroke risk, retinal screening)',
      'Offer genetic counselling and family/antenatal screening',
      'Provide a personalised crisis/management plan and support psychosocial needs'],
    referral:[
      'Acute chest syndrome, suspected stroke, splenic sequestration, aplastic crisis, severe infection/sepsis, or priapism → emergency admission',
      'Severe vaso-occlusive crisis not controlled with community analgesia → urgent admission',
      'All patients → specialist haematology for ongoing management and disease-modifying treatment',
      'Family planning/carrier issues → genetic counselling and antenatal screening'],
    source:'NICE / BSH sickle cell guidance' },

  { id:'sinusitis', title:'Sinusitis (rhinosinusitis)', category:'ENT', icon:'👃',
    overview:'Inflammation of the paranasal sinuses, usually following a viral upper-respiratory infection. Acute sinusitis is mostly viral and self-limiting; antibiotics are rarely needed. The key skills are antibiotic stewardship and recognising the rare but serious complications (orbital and intracranial spread).',
    features:[
      'Nasal blockage/congestion and nasal discharge (anterior or postnasal), with facial pain/pressure (worse on bending forward) and reduced sense of smell',
      'Acute sinusitis is usually viral; bacterial infection is more likely if symptoms are severe, persist beyond ~10 days, or worsen after initial improvement ("double sickening")',
      'Chronic rhinosinusitis (>12 weeks): persistent nasal obstruction, discharge, facial pressure and hyposmia, with or without nasal polyps',
      'RED FLAGS for complications (urgent): periorbital swelling/redness, displaced eyeball, double vision or reduced visual acuity (orbital involvement), severe frontal headache, swelling of the forehead, neurological signs, or signs of meningism',
      'Unilateral symptoms, bloodstained discharge, or persistent unilateral obstruction warrant considering other (including sinister) pathology',
      'Diagnosis is clinical; imaging/ENT assessment is for chronic, complicated, or atypical disease'],
    management:[
      'Acute sinusitis: reassure it is usually viral and self-limiting (resolving within ~2–3 weeks); advise analgesia, nasal saline irrigation, and adequate fluids',
      'Do not routinely offer antibiotics for acute sinusitis; for symptoms persisting beyond ~10 days, consider a high-dose intranasal corticosteroid and a back-up/limited antibiotic only if appropriate',
      'Reserve immediate antibiotics for systemically unwell patients, those at high risk of complications, or signs of serious illness',
      'Chronic rhinosinusitis: intranasal corticosteroids and regular saline irrigation are first-line; treat allergic rhinitis if present, and avoid irritants',
      'Refer chronic/recurrent or treatment-resistant rhinosinusitis (and nasal polyps) to ENT',
      'Recognise and act urgently on complications (orbital/intracranial spread)',
      'Investigate persistent unilateral symptoms or bloodstained discharge to exclude other pathology',
      'Provide safety-netting on the red-flag symptoms'],
    referral:[
      'Complications — periorbital/orbital involvement (swelling, proptosis, diplopia, reduced vision), frontal swelling, or features of intracranial spread/meningism → emergency admission (ENT/ophthalmology)',
      'Chronic, recurrent, or treatment-resistant rhinosinusitis, or nasal polyps → ENT',
      'Persistent unilateral nasal symptoms or bloodstained discharge → ENT (exclude sinonasal tumour)',
      'Immunocompromised patients with severe sinus infection (e.g. fungal) → urgent ENT'],
    source:'NICE NG79 (Sinusitis — acute, antimicrobial prescribing)' },

  { id:'sjogrens', title:'Sjögren’s syndrome', category:'Allergy & immunology', icon:'💧',
    overview:'A chronic autoimmune disease characterised by lymphocytic infiltration of exocrine glands, causing dry eyes and dry mouth (sicca). It may be primary or secondary to another connective-tissue disease. Beyond the discomfort, it carries systemic features and an increased risk of lymphoma, so recognition and monitoring matter.',
    features:[
      'Persistent dry eyes (gritty, burning, foreign-body sensation) and dry mouth (difficulty swallowing dry food, needing fluids to eat, dental caries) — the "sicca" symptoms',
      'Other features: dry skin, vaginal dryness, fatigue (often prominent), arthralgia, and salivary gland (parotid) swelling',
      'Primary Sjögren’s, or secondary to rheumatoid arthritis, lupus, or systemic sclerosis',
      'Systemic/extraglandular involvement: arthritis, Raynaud’s, interstitial lung disease, renal tubular acidosis, peripheral neuropathy, and cytopenias',
      'A small but important INCREASED RISK OF LYMPHOMA (especially with persistent parotid swelling, lymphadenopathy, or new systemic features) — maintain awareness',
      'Investigations: anti-Ro/anti-La antibodies, ANA, rheumatoid factor, raised inflammatory markers/immunoglobulins, and tests of tear/saliva production (e.g. Schirmer’s test)'],
    management:[
      'Confirm with antibody testing (anti-Ro/La), assess for an associated connective-tissue disease, and refer to rheumatology for diagnosis and assessment of systemic involvement',
      'Symptomatic treatment of dry eyes: artificial tears/ocular lubricants and eye care; refer to ophthalmology for significant dry eye',
      'Dry mouth: frequent sips of water, sugar-free gum/saliva substitutes, saliva-stimulating measures, and meticulous dental care/fluoride (high caries risk)',
      'Manage vaginal dryness and dry skin with appropriate moisturisers/lubricants',
      'Manage fatigue and arthralgia; systemic/organ involvement may need immunosuppression (e.g. hydroxychloroquine, others) under specialists',
      'Monitor for and investigate features suggesting LYMPHOMA — persistent parotid/lymph-node swelling, B symptoms, or new cytopenias',
      'Optimise dental review and prevent complications of sicca',
      'Provide patient information and coordinate care with rheumatology/ophthalmology/dentistry'],
    referral:[
      'Suspected Sjögren’s (sicca symptoms with positive antibodies or systemic features) → rheumatology',
      'Persistent parotid/salivary gland swelling, lymphadenopathy, or B symptoms → urgent assessment to exclude lymphoma (NICE NG12 — suspected haematological cancer)',
      'Significant dry eye → ophthalmology; systemic organ involvement → relevant specialty',
      'Associated connective-tissue disease → rheumatology'],
    source:'NICE CKS / BSR Sjögren’s guidance' },

  { id:'slapped-cheek', title:'Slapped cheek syndrome (parvovirus B19)', category:'Paediatrics', icon:'👶',
    overview:'A common, usually mild childhood viral illness (erythema infectiosum / "fifth disease") caused by parvovirus B19, with a characteristic facial rash. It is benign in most children, but carries specific risks in pregnancy, in those with chronic haemolysis, and in the immunocompromised — so recognising those at-risk situations is key.',
    features:[
      'A mild prodrome (fever, coryza), then the characteristic bright-red "slapped cheek" facial rash, followed by a lacy/reticular rash on the trunk and limbs',
      'The child is usually otherwise well; the rash can recur/fluctuate for weeks with heat/sunlight',
      'Adults (especially women) may have a milder rash but more prominent arthralgia/arthritis',
      'Infectivity is BEFORE the rash appears — once the rash is present, the child is generally no longer infectious and need not be excluded',
      'PREGNANCY risk: maternal infection (especially before 20 weeks) can cause fetal anaemia and hydrops fetalis — needs specialist assessment',
      'Aplastic crisis risk in those with chronic haemolytic anaemia (e.g. sickle cell), and chronic anaemia in the immunocompromised'],
    management:[
      'Reassure for the typical well child: it is mild and self-limiting, needing only supportive care (fluids, antipyretics for discomfort)',
      'Explain that, by the time the rash appears, the child is generally no longer infectious, so school/nursery exclusion is not needed',
      'Identify and act on at-risk exposures: a pregnant woman exposed to or developing parvovirus needs urgent assessment of immunity and specialist (obstetric/fetal-medicine) follow-up for fetal monitoring',
      'In patients with chronic haemolytic anaemia (e.g. sickle cell, hereditary spherocytosis), suspect and urgently assess for APLASTIC CRISIS (sudden severe anaemia)',
      'In the immunocompromised, parvovirus can cause persistent anaemia — assess and manage with specialists',
      'Manage arthralgia (common in adults) symptomatically',
      'Provide safety-netting and information on the at-risk groups',
      'Advise pregnant contacts to seek assessment promptly'],
    referral:[
      'Pregnant woman exposed to/with parvovirus B19 → urgent obstetric/fetal-medicine assessment (fetal anaemia/hydrops risk)',
      'Patient with chronic haemolysis and sudden severe anaemia (aplastic crisis) → emergency admission (haematology)',
      'Immunocompromised patient with persistent anaemia → specialist assessment',
      'Diagnostic uncertainty in an unwell child → paediatric assessment'],
    source:'UKHSA / NICE CKS — Parvovirus B19' },

  { id:'social-anxiety', title:'Social anxiety disorder', category:'Mental health', icon:'🧠',
    overview:'A persistent, marked fear of social or performance situations where the person fears scrutiny or negative evaluation, leading to avoidance and significant impairment. It is common, often starts in adolescence, and is under-treated — yet it responds well to psychological therapy, so recognition and referral matter.',
    features:[
      'Intense, persistent fear of social/performance situations (e.g. speaking, eating in public, meeting people) with fear of embarrassment or negative judgement',
      'Anticipatory anxiety beforehand and avoidance of feared situations, or enduring them with marked distress',
      'Physical symptoms in social situations: blushing, sweating, trembling, palpitations, and nausea',
      'Significant impact on education, work, relationships and daily life; often longstanding (onset in adolescence)',
      'High comorbidity with depression, other anxiety disorders, and substance/alcohol misuse (sometimes used to cope)',
      'Distinguish from shyness (not impairing), panic disorder, and autism (where social difficulty has a different basis)'],
    management:[
      'Recognise it (people may present with depression, physical symptoms, or avoidance) and assess severity, impairment, risk and comorbidity',
      'First-line treatment is psychological: individual CBT specifically developed for social anxiety disorder is the most effective intervention (NICE CG159) — refer for this',
      'Offer guided self-help based on CBT principles where appropriate, and provide psychoeducation',
      'For those who decline or do not benefit from psychological therapy, offer an SSRI (e.g. sertraline/escitalopram) — explain the delayed onset and review',
      'Treat comorbid depression and address any alcohol/substance use being used to cope',
      'Do not rely on beta-blockers or benzodiazepines (not recommended for the disorder)',
      'Support engagement (avoidance is part of the disorder) and gradual exposure to feared situations',
      'Provide information and signpost self-help resources; review response and step up care as needed'],
    referral:[
      'Moderate–severe or impairing social anxiety → psychological therapy (CBT for social anxiety) via NHS Talking Therapies',
      'Treatment-resistant disorder or significant comorbidity → mental-health services',
      'Significant risk (self-harm, severe depression) → urgent mental-health assessment',
      'Children/young people → CAMHS'],
    source:'NICE CG159 (Social anxiety disorder)' },

  { id:'spina-bifida', title:'Spina bifida', category:'Paediatrics', icon:'👶',
    overview:'A neural-tube defect in which the spine and spinal cord do not form properly. It ranges from the trivial (spina bifida occulta) to severe open defects (myelomeningocele) causing lifelong disability. It is largely preventable with periconceptual folic acid, and is increasingly detected antenatally.',
    features:[
      'Spina bifida occulta: a minor, usually asymptomatic defect (often incidental); skin markers over the lower spine (a tuft of hair, dimple, or birthmark) may indicate underlying cord tethering',
      'Meningocele/myelomeningocele (open spina bifida): a visible spinal lesion at birth with variable neurological deficit',
      'Consequences of open defects: leg weakness/paralysis, sensory loss, bladder and bowel dysfunction (neuropathic bladder), and often associated hydrocephalus (and Chiari II malformation)',
      'Orthopaedic problems (foot deformity, hip/spine issues), pressure-area risk, and latex allergy are associated',
      'Detected antenatally on the fetal anomaly scan (and raised maternal AFP); confirmed at birth',
      'PREVENTION: periconceptual folic acid markedly reduces neural-tube defects — higher-dose folic acid for higher-risk pregnancies'],
    management:[
      'Promote prevention: advise folic acid before conception and in early pregnancy for all women planning pregnancy (and a higher dose for those at increased risk, e.g. previous affected pregnancy, diabetes, certain antiepileptics, or high BMI — per guidance)',
      'Antenatally detected/severe cases are managed by specialist multidisciplinary teams (fetal medicine, neurosurgery, paediatrics)',
      'Open defects need early neurosurgical closure and management of hydrocephalus (often a shunt)',
      'Coordinate lifelong multidisciplinary care: neurosurgery, urology (neuropathic bladder — catheterisation, preserving renal function), orthopaedics, physiotherapy, continence, and skin/pressure care',
      'Investigate skin markers over the lower spine for possible tethered cord (which may need neurosurgical assessment)',
      'Support mobility, continence, education, and psychological and family needs; be mindful of latex allergy',
      'Arrange transition to adult services and ongoing surveillance (renal function, pressure areas, shunt function)',
      'Provide family information, genetic counselling, and support'],
    referral:[
      'Antenatally suspected/detected neural-tube defect → fetal medicine / specialist MDT',
      'Newborn with an open spinal defect → urgent neonatal/neurosurgical care',
      'Skin markers suggesting tethered cord, or new neurological/urological deterioration → neurosurgery/urology',
      'Ongoing care → multidisciplinary spina bifida team (urology, orthopaedics, neurosurgery, continence)'],
    source:'NICE CKS / fetal medicine & neurosurgical guidance' },

  { id:'squint', title:'Squint (strabismus)', category:'Ophthalmology', icon:'👁️',
    overview:'Misalignment of the eyes, common in childhood. In children the priority is early detection because a constant squint can cause amblyopia (lazy eye) and can occasionally signal serious pathology (e.g. retinoblastoma). A NEW squint at any age, or in an adult, needs careful assessment for a neurological cause.',
    features:[
      'Misalignment of the eyes — convergent (esotropia), divergent (exotropia), or vertical; constant or intermittent',
      'In children: may be noticed by parents, or cause amblyopia (reduced vision in the squinting eye); a constant squint is more concerning than an intermittent one',
      'A NEW squint with double vision, or an incomitant squint (varying with gaze direction), suggests a cranial-nerve palsy (III, IV, VI) or other neurological cause',
      'RED FLAGS: a new squint with other neurology, headache, or signs of raised intracranial pressure; an abnormal red reflex/leukocoria (exclude retinoblastoma); and a sudden-onset painful squint',
      'Pseudosquint (e.g. from epicanthic folds) is common and benign — distinguish from a true squint (corneal light reflex, cover test)',
      'Assessment: corneal light reflex, cover test, red reflex, visual acuity, and eye movements'],
    management:[
      'Assess any childhood squint: check the red reflex (exclude leukocoria/retinoblastoma), corneal light reflex and cover test, and refer to orthoptics/paediatric ophthalmology',
      'Refer children with a squint (especially constant) promptly to detect and treat amblyopia within the critical period — early treatment (glasses, patching) preserves vision',
      'Urgently exclude retinoblastoma in any child with an abnormal/white red reflex',
      'Treat the underlying refractive error (glasses) and amblyopia (occlusion/atropine); surgery realigns the eyes where needed (specialist)',
      'For an adult or new-onset squint with diplopia: assess for a cranial-nerve palsy and its cause (vascular, raised ICP, compressive lesion, giant cell arteritis if relevant)',
      'A new squint with red flags (other neurology, raised-ICP features, severe headache) → urgent/emergency assessment',
      'Reassure for pseudosquint (benign) after confirming normal alignment',
      'Provide information and arrange appropriate orthoptic/ophthalmology follow-up'],
    referral:[
      'Childhood squint, or any abnormal red reflex/leukocoria → ophthalmology (urgent for an abnormal red reflex — exclude retinoblastoma, NICE NG12)',
      'New-onset squint with diplopia or neurological features → urgent assessment (cranial-nerve palsy/raised ICP)',
      'Sudden painful squint or features of raised intracranial pressure → emergency',
      'Stable longstanding/cosmetic squint → routine ophthalmology'],
    source:'NICE CKS / paediatric ophthalmology guidance' },

  { id:'stillbirth', title:'Stillbirth', category:'Women’s health', icon:'🕊️',
    overview:'The death of a baby before or during birth (in the UK, at or after 24 completed weeks of pregnancy). It is devastating, and the GP role spans recognising warning signs that prompt urgent assessment, supporting bereaved families with compassionate care, and helping plan and support future pregnancies.',
    features:[
      'A key warning sign in pregnancy is REDUCED or ABSENT FETAL MOVEMENTS — a change that should always prompt urgent maternity assessment',
      'Other antenatal warning signs: abdominal pain, vaginal bleeding, severe headache/visual disturbance or swelling (pre-eclampsia), reduced fetal growth, and signs of infection',
      'Risk factors: maternal age, obesity, smoking, pre-existing/gestational diabetes and hypertension/pre-eclampsia, fetal growth restriction, multiple pregnancy, and previous stillbirth',
      'Many stillbirths are preceded by recognisable, sometimes preventable, problems (e.g. growth restriction, reduced movements)',
      'After a stillbirth, parents experience profound grief and may have complex physical and psychological needs',
      'Investigations after stillbirth (offered, with consent) aim to find a cause and inform future pregnancies (e.g. post-mortem, placental histology)'],
    management:[
      'Advise all pregnant women to report reduced/altered fetal movements promptly, and ensure any such report triggers urgent maternity assessment — never reassure without assessment',
      'Recognise and urgently refer antenatal warning signs (bleeding, pain, pre-eclampsia features, suspected growth restriction)',
      'When stillbirth occurs, provide compassionate, sensitive bereavement care; support the parents through the process led by maternity/bereavement services',
      'Support physical recovery (including lactation suppression advice) and be alert to postnatal mental-health needs (grief, depression, PTSD)',
      'Ensure follow-up: discussion of investigation results/cause, and a plan for any future pregnancy',
      'Provide ongoing emotional support and signpost bereavement organisations (e.g. Sands)',
      'Support and counsel for future pregnancies, which are managed as higher-risk with additional surveillance',
      'Be aware of the impact on the wider family and on staff, and offer continuity of care'],
    referral:[
      'Reduced/absent fetal movements, or any antenatal warning sign (bleeding, pain, pre-eclampsia features) → urgent same-day maternity assessment',
      'Suspected intrauterine death → urgent maternity/obstetric care',
      'Bereavement and psychological support → maternity bereavement services and mental-health support',
      'Future pregnancy → specialist antenatal care (higher-risk pathway)'],
    source:'NICE / RCOG / Saving Babies’ Lives care bundle' }

  );
})();
