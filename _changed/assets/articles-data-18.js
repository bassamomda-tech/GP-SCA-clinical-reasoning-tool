/* Reasoning GP — Articles data (batch 18: M topics, part 1)
   NHS conditions A–Z (letter M) not already covered. RCGP/SCA examiner depth.
   NICE NG12 (May 2025) 2WW pathways stated explicitly where relevant. */
(function(){
  const A = (window.RGP_ARTICLES = window.RGP_ARTICLES || []);
  A.push(

  { id:'malaria', title:'Malaria', category:'Infectious diseases', icon:'🦟',
    overview:'A potentially fatal parasitic infection transmitted by Anopheles mosquitoes, caused by Plasmodium species — Plasmodium falciparum being the most dangerous. In the UK it is a disease of returning travellers. Any fever in someone back from an endemic area is malaria until proven otherwise, and falciparum can kill within days.',
    features:[
      'Fever (often with rigors and sweats), headache, myalgia, malaise, and GI symptoms — typically 1–4 weeks after travel, but can be months later',
      'Symptoms are non-specific and easily mistaken for "flu" or gastroenteritis — the travel history is everything',
      'Plasmodium falciparum is the most dangerous and can progress rapidly to SEVERE malaria: impaired consciousness/cerebral malaria, seizures, hypoglycaemia, acute kidney injury, ARDS, shock, and severe anaemia',
      'Examination may show pallor, jaundice, hepatosplenomegaly; there are no reliable specific signs',
      'Risk factors: travel to endemic areas (especially sub-Saharan Africa), inadequate or no chemoprophylaxis, and visiting friends/relatives ("VFR" travellers)',
      'Diagnosis: urgent blood films (thick and thin) ± rapid antigen test — repeat films (up to 3 over 48–72 hours) if the first is negative and suspicion persists'],
    management:[
      'Take a travel history in EVERY febrile patient and consider malaria in anyone returning from an endemic area within the past year (especially the past 3 months)',
      'Suspected malaria is a medical emergency — arrange same-day urgent assessment and blood films; do not wait or treat empirically in the community',
      'Treatment is species- and severity-specific and specialist-guided: falciparum and all severe/complicated malaria need hospital admission (IV artesunate for severe disease)',
      'Recognise severe malaria (any falciparum with end-organ dysfunction, impaired consciousness, high parasitaemia) as life-threatening — admit immediately',
      'Non-falciparum malaria may be treated with oral regimens, with primaquine to clear liver hypnozoites for P. vivax/ovale (check G6PD first)',
      'Malaria is a notifiable disease — inform public health',
      'Prevent: pre-travel advice on bite avoidance (repellents, nets) and appropriate chemoprophylaxis (the "ABCD" — Awareness, Bite avoidance, Chemoprophylaxis, prompt Diagnosis)',
      'Advise travellers that prophylaxis is not 100% effective and to seek urgent care for any fever during or after travel'],
    referral:[
      'Suspected malaria → same-day urgent assessment and blood films (admit if falciparum or any severe features)',
      'Severe/complicated malaria (impaired consciousness, organ dysfunction, high parasitaemia, falciparum) → emergency admission for IV artesunate',
      'Pregnant women, children, and the immunocompromised with suspected malaria → urgent specialist input',
      'Notify public health (notifiable disease)'],
    source:'UKHSA / PHE malaria treatment guidelines' },

  { id:'malnutrition', title:'Malnutrition (undernutrition)', category:'General', icon:'🍽️',
    overview:'A state of deficient energy, protein or micronutrients that impairs body function and clinical outcomes. It is common and under-recognised — particularly in older, frail, and chronically ill people — and worsens recovery, immunity and mortality. Routine screening and a stepwise "food-first" approach are the foundations of management.',
    features:[
      'Unintentional weight loss, reduced appetite/intake, low BMI, and loss of muscle mass/strength (sarcopenia) and subcutaneous fat',
      'Functional consequences: fatigue, falls, impaired wound healing, increased infections, and poorer recovery from illness/surgery',
      'High-risk groups: older/frail people, those with chronic disease (cancer, COPD, heart failure, dementia), GI disease/malabsorption, swallowing problems, mental illness, and social/economic deprivation',
      'Screen with a validated tool (e.g. MUST — Malnutrition Universal Screening Tool) using BMI, weight loss, and the effect of acute disease',
      'Consider specific micronutrient deficiencies (iron, B12/folate, vitamin D, etc.) and refeeding risk in severely malnourished patients',
      'A red flag: unexplained weight loss with other symptoms may indicate underlying cancer or serious disease and warrants investigation'],
    management:[
      'Screen at-risk patients routinely (e.g. MUST) and identify and treat the underlying cause (disease, swallowing/dental problems, drugs, social factors, low mood)',
      'Adopt a "food-first" approach: nourishing meals and snacks, food fortification (adding energy/protein to normal food), and a relaxed, supportive eating environment',
      'Address practical barriers: dental/denture problems, dexterity, shopping/cooking/social support, and appetite-affecting medications',
      'Involve a dietitian for moderate–high-risk patients; use oral nutritional supplements as an adjunct when food-first is insufficient',
      'Monitor weight, intake and functional status, and set goals; treat specific micronutrient deficiencies',
      'Beware REFEEDING SYNDROME in severely malnourished or low-intake patients — reintroduce nutrition cautiously with electrolyte (phosphate, potassium, magnesium) monitoring and thiamine',
      'Consider enteral/parenteral nutrition only where appropriate and via specialist services',
      'Investigate unexplained weight loss for serious underlying disease (including cancer) where indicated'],
    referral:[
      'Unexplained weight loss with concerning features → investigate for underlying disease (consider relevant NICE NG12 cancer pathways)',
      'Moderate–high malnutrition risk, complex needs, or swallowing problems → dietitian (± speech and language therapy)',
      'Severe malnutrition or refeeding risk → specialist nutrition support (consider admission)',
      'Underlying treatable cause (e.g. GI disease, dental, mental health) → relevant service'],
    source:'NICE CG32 / QS24 (Nutrition support in adults)' },

  { id:'menieres', title:'Ménière’s disease', category:'ENT', icon:'👂',
    overview:'A chronic inner-ear disorder of recurrent spontaneous vertigo with fluctuating hearing loss, tinnitus and aural fullness, attributed to endolymphatic hydrops. The combination and pattern of symptoms is the key to diagnosis, and management aims to control attacks and protect long-term hearing.',
    features:[
      'Recurrent spontaneous attacks of vertigo lasting minutes to hours (typically 20 minutes to several hours), with nausea/vomiting',
      'Fluctuating sensorineural hearing loss (often low-frequency initially), tinnitus, and a sensation of fullness/pressure in the affected ear',
      'Attacks cluster then remit; over years, hearing loss can become permanent and progressive',
      'Usually unilateral at onset; the diagnosis requires the characteristic combination of vertigo, hearing loss and tinnitus/fullness',
      'Differentials: vestibular migraine, BPPV, vestibular neuritis/labyrinthitis, and (importantly) acoustic neuroma — exclude with audiology/MRI where asymmetric',
      'Diagnosis is clinical (per criteria), supported by audiometry; MRI excludes a retrocochlear cause'],
    management:[
      'Refer to ENT/audiovestibular medicine to confirm the diagnosis (audiometry, and MRI to exclude acoustic neuroma where indicated)',
      'Acute attack: a vestibular sedative/antiemetic (e.g. prochlorperazine or an antihistamine) for symptom relief, used short-term',
      'Prevention of attacks: betahistine is commonly used, and dietary measures (reduce salt, caffeine and alcohol) may help; some use diuretics under specialist guidance',
      'Provide vestibular rehabilitation for chronic imbalance between attacks',
      'Support hearing with audiology (hearing aids) as loss progresses, and manage tinnitus',
      'For refractory disease, specialist options include intratympanic steroids or gentamicin, and (rarely) surgery',
      'Advise on safety (driving — patients must inform the DVLA; avoiding hazardous activities during attacks) and provide patient information',
      'Address the significant psychological impact of unpredictable vertigo'],
    referral:[
      'Suspected Ménière’s disease → ENT/audiovestibular medicine for diagnosis and management',
      'Asymmetric/unilateral sensorineural hearing loss → MRI to exclude acoustic neuroma (NICE NG98)',
      'Refractory or disabling disease → specialist (intratympanic/surgical options)',
      'Sudden sensorineural hearing loss → same-day ENT (a separate emergency)'],
    source:'NICE CKS — Ménière’s disease' },

  { id:'meningitis', title:'Meningitis', category:'Infectious diseases', icon:'🦠',
    overview:'Inflammation of the meninges, most dangerously from bacterial infection (meningococcal, pneumococcal, Hib). It is a time-critical emergency: bacterial meningitis and meningococcal septicaemia can kill within hours. Immediate recognition, pre-hospital benzylpenicillin, and emergency transfer save lives; viral meningitis is commoner and usually milder.',
    features:[
      'Classic features: fever, severe headache, neck stiffness, photophobia, and altered consciousness — but the full triad is often absent, especially early or in infants',
      'Meningococcal SEPTICAEMIA: a non-blanching petechial/purpuric rash (do the "glass/tumbler test"), cold hands/feet, limb pain, and rapid deterioration to shock — the rash is a late sign and its absence does not exclude it',
      'Infants/young children: non-specific signs — fever, poor feeding, vomiting, lethargy/irritability, a high-pitched cry, a bulging fontanelle, and being floppy or unrousable',
      'Viral meningitis (commoner, usually milder): headache, fever, photophobia, but typically without the severe systemic toxicity of bacterial disease',
      'Complications: sepsis, seizures, raised intracranial pressure, deafness, neurodisability, and death',
      'Diagnosis is clinical and time-critical; in hospital, lumbar puncture and blood cultures confirm — but treatment must NOT wait for tests'],
    management:[
      'Suspected meningitis/meningococcal sepsis is a 999 emergency — arrange immediate emergency transfer; do not delay',
      'In the community, give parenteral benzylpenicillin (IM/IV) immediately to a patient with a non-blanching rash or strong suspicion of meningococcal disease, unless there is a true penicillin anaphylaxis — and do not let it delay transfer',
      'Do not wait for a rash — treat on clinical suspicion; manage ABC and shock while awaiting the ambulance',
      'In hospital: urgent antibiotics (and consider dexamethasone), blood cultures/PCR, and lumbar puncture when safe; supportive/critical care for sepsis and complications',
      'Maintain very high suspicion in infants and young children, whose signs are non-specific — safety-net parents clearly on the warning features and the tumbler test',
      'Meningococcal and other bacterial meningitis is notifiable — inform public health, who arrange contact tracing and prophylaxis (e.g. ciprofloxacin) for close contacts',
      'Arrange follow-up for survivors: audiology (hearing loss is common), and neurodevelopmental/neurological review',
      'Promote prevention through the immunisation programme (MenB, MenACWY, Hib, pneumococcal)'],
    referral:[
      'Suspected bacterial meningitis or meningococcal septicaemia → 999 emergency admission (give IM/IV benzylpenicillin first in the community)',
      'Any unwell febrile child with non-specific but concerning signs → urgent assessment (low threshold)',
      'Confirmed case → notify public health for contact prophylaxis',
      'Survivors → audiology and neuro follow-up'],
    source:'NICE NG240 (Meningitis) / Meningitis guidance' },

  { id:'mesothelioma', title:'Mesothelioma', category:'Respiratory', icon:'🫁',
    overview:'An aggressive cancer of the mesothelial lining (usually the pleura), almost always caused by past asbestos exposure after a long latency (often 30–40 years). Prognosis is poor and treatment largely palliative, so the priorities are prompt recognition of pleural symptoms with an asbestos history, urgent referral, and supporting compensation.',
    features:[
      'Progressive breathlessness and chest-wall pain (often a dull, persistent ache), with a pleural effusion the commonest presenting finding',
      'Other features: weight loss, fatigue, sweats, and a persistent cough',
      'Almost always linked to prior asbestos exposure (occupational — construction, shipbuilding, lagging, or secondary/environmental) decades earlier — a careful occupational history is essential',
      'Pleural plaques may coexist (a marker of exposure), but mesothelioma itself is malignant and aggressive',
      'Can also (rarely) affect the peritoneum (abdominal pain, distension, ascites)',
      'Diagnosis: chest X-ray/CT showing pleural thickening/effusion, pleural fluid sampling and (usually) pleural biopsy for histology'],
    management:[
      'Take an occupational/asbestos-exposure history in anyone with unexplained pleural symptoms (breathlessness, chest pain, effusion)',
      'Refer urgently on the suspected-cancer pathway and arrange an urgent chest X-ray; a pleural effusion or pleural thickening with an asbestos history warrants prompt investigation',
      'Refer to respiratory/chest clinic for pleural investigation (fluid sampling, biopsy) and to the mesothelioma/lung-cancer MDT',
      'Treatment is largely palliative: chemotherapy and (in selected cases) immunotherapy/surgery/radiotherapy, with a generally poor prognosis',
      'Control symptoms — breathlessness (including managing recurrent effusions, e.g. pleurodesis/indwelling drain), pain, and fatigue — with early specialist palliative-care involvement',
      'Advise on compensation and benefits: mesothelioma qualifies for Industrial Injuries Disablement Benefit and other compensation schemes; signpost legal/welfare advice',
      'Report to the coroner where appropriate (asbestos-related deaths are usually reportable)',
      'Provide psychological support to the patient and family throughout'],
    referral:[
      'Unexplained pleural effusion, pleural thickening, or chest symptoms with asbestos exposure → urgent suspected mesothelioma/lung-cancer (2WW) referral and urgent chest X-ray (NICE NG12)',
      'Confirmed/suspected mesothelioma → mesothelioma/lung-cancer MDT',
      'Symptom control needs (breathlessness, pain) → early specialist palliative care',
      'Benefits/compensation → signpost to relevant advice services'],
    source:'NICE NG12 / BTS mesothelioma guidance' },

  { id:'migraine', title:'Migraine', category:'Neurology', icon:'🧠',
    overview:'A common primary headache disorder of recurrent moderate-to-severe headache with associated features, sometimes preceded by aura. It is a major cause of disability. Management has three strands: confident diagnosis (excluding secondary causes), effective acute treatment, and prophylaxis for frequent attacks — while avoiding medication-overuse headache.',
    features:[
      'Recurrent headache, classically unilateral and throbbing, moderate-to-severe, lasting 4–72 hours, aggravated by routine activity',
      'Associated features: nausea/vomiting, photophobia and phonophobia; the patient prefers to lie still in a dark, quiet room (contrast with the restlessness of cluster headache)',
      'AURA (in about a third): reversible neurological symptoms preceding/accompanying the headache — usually visual (zig-zag lines, scotoma), or sensory/speech — developing over minutes and lasting <60 minutes',
      'Common triggers: stress, hormonal changes (menstrual migraine), sleep disturbance, dehydration, missed meals, certain foods, and alcohol',
      'RED FLAGS prompting a rethink/investigation: thunderclap onset, new aura over 50, aura always on the same side, progressive/changing pattern, or focal signs persisting beyond the aura',
      'MIGRAINE WITH AURA is a contraindication to combined hormonal (oestrogen-containing) contraception (stroke risk)'],
    management:[
      'Make a positive diagnosis from the pattern and exclude secondary causes/red flags; advise a headache diary to identify triggers',
      'Acute treatment: a triptan (e.g. sumatriptan) plus an NSAID or paracetamol, with an antiemetic if needed — treat early in the attack',
      'Limit acute treatment use (e.g. triptans/analgesics) to avoid medication-overuse headache; avoid opioids',
      'Offer prophylaxis for frequent/disabling attacks: propranolol, topiramate (avoid in pregnancy/women of childbearing potential without effective contraception — teratogenic), or amitriptyline; consider others/specialist options if these fail',
      'Acupuncture and riboflavin may help; specialist options include anti-CGRP therapies and Botox for chronic migraine',
      'Manage menstrual migraine and contraception carefully — DO NOT prescribe combined hormonal contraception in migraine WITH aura',
      'Treat lifestyle triggers (regular sleep/meals, hydration, stress management) and identify/withdraw overused medication',
      'Provide information, a self-management plan, and clear safety-netting for red-flag symptoms'],
    referral:[
      'Red-flag features (thunderclap, new focal signs, progressive pattern, new onset over 50) → urgent assessment/investigation (consider brain tumour/secondary causes — NICE NG12)',
      'Diagnostic uncertainty, or migraine not responding to optimal acute and preventive treatment → neurology/headache service',
      'Chronic migraine (≥15 headache days/month) → specialist (anti-CGRP, Botox)',
      'Migraine with aura needing contraceptive advice → avoid combined hormonal contraception; offer alternatives'],
    source:'NICE CKS — Migraine / NICE CG150' }

  );
})();
