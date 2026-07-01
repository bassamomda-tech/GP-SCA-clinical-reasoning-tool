/* Reasoning GP — Articles data (batch 12: H topics, part 1)
   NHS conditions A–Z (letter H) not already covered. RCGP/SCA examiner depth.
   NICE NG12 (May 2025) 2WW pathways stated explicitly where relevant. */
(function(){
  const A = (window.RGP_ARTICLES = window.RGP_ARTICLES || []);
  A.push(

  { id:'haemorrhoids', title:'Haemorrhoids (piles)', category:'Gastroenterology', icon:'🔴',
    overview:'Symptomatic enlargement and displacement of the normal anal vascular cushions, causing bright-red rectal bleeding, itching and prolapse. They are extremely common and benign — but the cardinal trap is attributing rectal bleeding to "just piles" and missing colorectal cancer, so risk-assessment is essential.',
    features:[
      'Bright-red rectal bleeding (on the paper, coating the stool, or dripping into the pan), typically painless',
      'Anal itching, mucus discharge, a feeling of incomplete emptying, and a prolapsing lump (internal haemorrhoids graded I–IV by degree of prolapse)',
      'Pain is not typical of uncomplicated internal haemorrhoids — significant pain suggests a thrombosed external haemorrhoid, fissure, or other pathology',
      'Risk/aggravating factors: constipation and straining, low-fibre diet, pregnancy, and increasing age',
      'RED FLAGS not to attribute to piles: change in bowel habit, dark/altered blood or mixing of blood with stool, weight loss, iron-deficiency anaemia, or an abdominal/rectal mass',
      'Diagnosis: history, abdominal exam, digital rectal examination, and proctoscopy; do not assume bleeding is haemorrhoidal without assessing colorectal cancer risk'],
    management:[
      'Always assess colorectal cancer risk — examine (DRE), consider FIT, and refer on the suspected-cancer pathway where criteria are met, rather than assuming piles',
      'First-line conservative treatment: increase dietary fibre and fluids, avoid straining and prolonged toileting, and use bulk-forming laxatives to soften stool',
      'Symptom relief: topical preparations (short courses of soothing/anaesthetic ± steroid creams) for itch/discomfort, and simple analgesia (avoid opioids/codeine, which constipate)',
      'For a thrombosed external haemorrhoid presenting acutely (within ~72 hours) with severe pain, consider referral for possible evacuation; otherwise manage conservatively (it settles over days)',
      'Persistent/troublesome internal haemorrhoids: refer for outpatient procedures (rubber-band ligation, sclerotherapy) or, for higher-grade/refractory disease, surgery (haemorrhoidectomy)',
      'Treat constipation and address lifestyle to prevent recurrence',
      'Manage haemorrhoids in pregnancy conservatively (fibre, fluids, topical measures) — they often improve after delivery',
      'Safety-net for new red-flag symptoms and confirm resolution of bleeding'],
    referral:[
      'Rectal bleeding with red flags — change in bowel habit, weight loss, iron-deficiency anaemia, abdominal/rectal mass, or meeting age/FIT thresholds → suspected colorectal cancer (2WW) pathway (NICE NG12); use FIT to support urgent referral',
      'Persistent/troublesome or higher-grade haemorrhoids → colorectal/surgical outpatient for banding or surgery',
      'Acutely thrombosed, severely painful external haemorrhoid → urgent surgical assessment',
      'Significant ongoing bleeding/anaemia → urgent assessment'],
    source:'NICE CKS — Haemorrhoids / NICE NG12' },

  { id:'hair-loss', title:'Hair loss (alopecia)', category:'Dermatology', icon:'💇',
    overview:'Loss of hair, ranging from common patterned (androgenetic) thinning to patchy autoimmune alopecia areata and scarring alopecias. The clinical task is to determine the pattern, identify reversible causes (e.g. thyroid disease, iron deficiency, drugs), and recognise scarring loss, which is permanent and needs prompt referral.',
    features:[
      'Androgenetic alopecia (male/female pattern): gradual, patterned thinning (temporal recession/vertex in men; diffuse central thinning with preserved frontal hairline in women) — the commonest cause',
      'Telogen effluvium: diffuse shedding 2–3 months after a trigger (illness, childbirth, severe stress, surgery, crash diet, drugs) — usually reversible',
      'Alopecia areata: well-defined, smooth patches of complete hair loss (sometimes with "exclamation-mark" hairs), often autoimmune; can progress to totalis/universalis',
      'SCARRING (cicatricial) alopecia: loss with destruction of follicles (smooth, shiny, scarred scalp, loss of follicular openings) — permanent, needs prompt specialist assessment',
      'Reversible/systemic contributors: thyroid disease, iron deficiency, drugs, and (with other features) lupus or other systemic disease',
      'Diagnosis is clinical (pattern, scalp examination, hair-pull test); check ferritin and TFTs where relevant, and biopsy scarring alopecia'],
    management:[
      'Determine the pattern and look for reversible/systemic causes: review drugs, recent triggers, and check ferritin and thyroid function as appropriate',
      'Reassure and explain telogen effluvium — it usually recovers over months once the trigger resolves; correct any iron deficiency',
      'Androgenetic alopecia: explain the options — topical minoxidil (men and women), and oral finasteride in men (counsel on side effects); set realistic expectations; treatment is long-term',
      'Alopecia areata: many small patches regrow spontaneously; options include topical/intralesional corticosteroids; provide reassurance and psychological support, and refer extensive/rapidly progressive disease',
      'Refer suspected scarring alopecia promptly — early treatment can limit permanent loss',
      'Address the significant psychological impact; signpost support groups and wig/prosthesis services where relevant',
      'Manage any underlying systemic condition (thyroid, lupus, etc.)',
      'Provide written information and review response to treatment'],
    referral:[
      'Suspected scarring (cicatricial) alopecia → prompt dermatology (permanent loss; needs biopsy/early treatment)',
      'Extensive, rapidly progressive, or psychologically severe alopecia areata → dermatology',
      'Diagnostic uncertainty or suspected underlying systemic disease → dermatology/relevant specialty',
      'Significant distress → psychological support / patient organisations'],
    source:'NICE CKS — Alopecia / BAD guidance' },

  { id:'hand-foot-mouth', title:'Hand, foot and mouth disease', category:'Paediatrics', icon:'🖐️',
    overview:'A common, mild, self-limiting viral illness of young children (usually coxsackievirus/enterovirus), with mouth ulcers and a rash on the hands and feet. It is unrelated to the animal foot-and-mouth disease. Management is supportive; the main issues are hydration, reassurance, and sensible advice on spread.',
    features:[
      'A few days of mild fever and malaise, then painful mouth ulcers (on the tongue, gums, inside of cheeks) and a non-itchy rash of small blisters/spots on the palms, soles, and sometimes buttocks',
      'Sore mouth often reduces eating and drinking — the main practical concern is dehydration, especially in young children',
      'Highly contagious (faecal-oral, respiratory, and contact with blister fluid), with outbreaks in nurseries',
      'Usually resolves within 7–10 days; complications are rare',
      'Differentials: herpetic gingivostomatitis, chickenpox, herpangina, and (rarely) more severe enteroviral disease',
      'Nail shedding (onychomadesis) can occur a few weeks later and is harmless; diagnosis is clinical'],
    management:[
      'Reassure: it is a mild, self-limiting viral illness — there is no specific treatment and antibiotics are not indicated',
      'Focus on hydration: encourage frequent fluids; cool, soft, bland foods; and avoid acidic/salty foods that sting',
      'Pain/fever relief: paracetamol or ibuprofen; topical oral analgesics may help mouth discomfort',
      'Advise on hygiene to reduce spread: hand-washing (especially after nappy changes/toileting), not sharing utensils/towels, and careful disposal of tissues',
      'Children can usually return to nursery/school when well enough; exclusion is not generally required just for the rash (per current advice)',
      'Pregnant women who are exposed can be reassured (risk is low) but advised to seek advice if concerned',
      'Safety-net for dehydration (reduced wet nappies, lethargy), inability to drink, very high/persistent fever, or an unusually unwell child',
      'Provide written information on the expected course'],
    referral:[
      'Dehydration or inability to maintain fluids → assessment ± admission for rehydration',
      'An unusually unwell child, severe or atypical disease, or neurological features → urgent paediatric assessment',
      'Immunocompromised or neonatal cases → specialist advice',
      'Diagnostic uncertainty → review'],
    source:'NICE CKS — Hand, foot and mouth disease' },

  { id:'hay-fever', title:'Hay fever (allergic rhinitis)', category:'Allergy & immunology', icon:'🤧',
    overview:'IgE-mediated inflammation of the nasal mucosa from allergen exposure — seasonal (pollens, "hay fever") or perennial (house dust mite, animal dander, moulds). It is very common, often trivialised, but significantly affects quality of life, sleep, school/work, and asthma control. Management is stepwise and largely effective.',
    features:[
      'Sneezing, nasal itch, watery rhinorrhoea, and nasal congestion; itchy, watery, red eyes (allergic conjunctivitis) are common',
      'Seasonal pattern (tree pollen in spring, grass in early summer, weeds/mould later) or perennial symptoms (house dust mite, pets)',
      'Often associated with asthma (the "one airway" concept) — allergic rhinitis worsens asthma control — and with eczema/atopy',
      'Impact on sleep, concentration, school performance and quality of life is frequently underestimated',
      'Differentials: non-allergic rhinitis, infective rhinitis/sinusitis, and (unilateral symptoms/bleeding) structural or sinister nasal pathology',
      'Diagnosis is usually clinical from the history; allergy testing (skin-prick/specific IgE) is used where the trigger is unclear or for immunotherapy assessment'],
    management:[
      'Allergen avoidance where feasible (e.g. house dust mite measures, pet avoidance, monitoring pollen counts, keeping windows shut, showering after exposure)',
      'For mild/intermittent symptoms: a regular or as-needed non-sedating oral antihistamine (e.g. cetirizine, loratadine)',
      'For moderate/severe or persistent symptoms (especially with congestion): a regular intranasal corticosteroid is the most effective treatment — use correct technique and start before/early in the season',
      'Combine treatments as needed: intranasal steroid plus antihistamine, intranasal antihistamine, and topical treatments for eye symptoms (antihistamine/mast-cell-stabiliser drops)',
      'A short course of intranasal decongestant only briefly (risk of rebound); avoid long-term use',
      'Optimise asthma control in patients who have both — treating the rhinitis helps the asthma',
      'For severe symptoms unresponsive to optimal treatment, consider referral for allergy assessment and immunotherapy',
      'Provide education on technique, expectations, and pre-season prophylaxis'],
    referral:[
      'Severe symptoms unresponsive to optimal treatment, or for immunotherapy assessment → allergy/immunology',
      'Diagnostic uncertainty or unilateral/atypical nasal symptoms (bleeding, obstruction, anosmia) → ENT',
      'Poorly controlled coexisting asthma → asthma optimisation/respiratory',
      'Nasal polyps or structural problems → ENT'],
    source:'NICE CKS — Allergic rhinitis / BSACI guidance' },

  { id:'tension-headache', title:'Headaches (tension-type and overview)', category:'Neurology', icon:'🧠',
    overview:'Headache is one of the commonest presentations. Most are primary (tension-type, migraine, cluster) and benign, but the essential skill is systematically screening for the red flags of a secondary, dangerous cause. Tension-type headache — the most common — is managed with reassurance, lifestyle measures and limited analgesia.',
    features:[
      'Tension-type headache: bilateral, pressing/tight ("band-like") pain of mild–moderate intensity, without significant nausea or marked photophobia, and not aggravated by routine activity',
      'Differentiate from migraine (throbbing, unilateral, nausea, photophobia, aura, worse with activity) and cluster headache (severe unilateral with autonomic features)',
      'RED FLAGS for a secondary cause: thunderclap (sudden, severe) onset, new headache with fever/neck stiffness/rash, new focal neurology or seizures, papilloedema, headache worse on lying/coughing/straining (raised ICP), new headache in those over 50 (giant cell arteritis — jaw claudication, scalp tenderness), headache after head injury, in pregnancy/postpartum, in immunosuppression/cancer, or progressively worsening',
      'Medication-overuse headache: a chronic daily headache from frequent use of analgesics/triptans',
      'A careful history (onset, pattern, triggers, associated features) and examination (including BP, fundi, neurology) guide whether imaging/referral is needed',
      'Diagnosis of primary headache is clinical; investigate/refer when red flags are present'],
    management:[
      'Take a structured history and examine to exclude secondary causes; act on any red flags with urgent referral/investigation',
      'Tension-type headache: reassure, and advise on triggers — stress, poor sleep, dehydration, posture, eye strain, and caffeine',
      'Acute treatment: simple analgesia (paracetamol or an NSAID); limit use to avoid medication-overuse headache',
      'Avoid opioids for primary headache',
      'For frequent episodic/chronic tension-type headache, consider a course of acupuncture and address lifestyle/psychological factors; low-dose amitriptyline is sometimes used for prophylaxis',
      'Identify and treat medication-overuse headache by reducing/withdrawing the overused analgesic, with support and a clear plan',
      'Manage migraine and cluster headache per their specific pathways (see separate articles)',
      'Provide a headache diary, lifestyle advice, and clear safety-netting for red-flag symptoms'],
    referral:[
      'Thunderclap headache → emergency admission (exclude subarachnoid haemorrhage)',
      'Headache with fever + neck stiffness/photophobia/rash (meningitis/encephalitis), new focal neurology, or features of raised intracranial pressure → emergency assessment',
      'Suspected giant cell arteritis (new headache in over-50s with scalp tenderness/jaw claudication/visual symptoms) → urgent same-day assessment, start steroids, urgent referral',
      'Progressive headache, or new headache with cancer/immunosuppression → urgent investigation (consider brain tumour pathway, NICE NG12)'],
    source:'NICE CKS — Headache / NICE CG150' },

  { id:'hearing-loss', title:'Hearing loss', category:'ENT', icon:'👂',
    overview:'Reduced hearing, classified as conductive (outer/middle ear) or sensorineural (cochlea/nerve). It is very common, especially with age, and under-treated despite major impacts on communication, social isolation, mood and (in later life) dementia risk. The priorities are identifying the type, treating reversible causes, and flagging urgent presentations.',
    features:[
      'Conductive loss: outer/middle-ear causes — ear wax, otitis media/effusion ("glue ear"), perforation, otosclerosis; often correctable',
      'Sensorineural loss: cochlear/neural causes — age-related (presbycusis, gradual high-frequency loss), noise exposure, ototoxic drugs, and (importantly) acoustic neuroma',
      'SUDDEN sensorineural hearing loss (over hours–3 days, usually unilateral): an emergency needing same-day ENT — early steroids improve outcome',
      'Asymmetric/unilateral sensorineural loss or unilateral tinnitus: needs investigation (MRI) to exclude a vestibular schwannoma (acoustic neuroma)',
      'In children, hearing loss affects speech and development — detect early (newborn screening, glue ear)',
      'Assessment: otoscopy, tuning-fork tests (Weber/Rinne), and audiometry; image where indicated'],
    management:[
      'Examine and classify (otoscopy, tuning forks) and treat reversible conductive causes — remove ear wax, treat infection/effusion',
      'Arrange audiometry for persistent or unexplained hearing loss',
      'Refer adults with persistent hearing loss for audiology assessment and hearing-aid provision — and address the wider impact (communication, isolation, mood, dementia risk)',
      'Recognise and act on emergencies: sudden sensorineural hearing loss needs same-day ENT (steroids); do not delay',
      'Investigate asymmetric/unilateral sensorineural loss or unilateral tinnitus with MRI to exclude acoustic neuroma',
      'Advise on hearing protection (noise exposure) and review ototoxic medications',
      'Support children with hearing loss promptly (speech/development) via audiology/ENT',
      'Provide communication strategies, assistive devices, and signpost support services'],
    referral:[
      'Sudden sensorineural hearing loss (within the last few days) → same-day ENT (urgent steroids)',
      'Unilateral/asymmetric sensorineural loss or unilateral tinnitus → ENT/audiovestibular + MRI (exclude acoustic neuroma — NICE NG98)',
      'Persistent hearing loss → audiology (hearing aids) / ENT',
      'Children with suspected hearing loss → paediatric audiology/ENT'],
    source:'NICE NG98 (Hearing loss in adults)' },

  { id:'heart-attack', title:'Heart attack (acute coronary syndrome)', category:'Cardiovascular & Renal', icon:'🫀',
    overview:'Acute coronary syndrome — unstable angina and myocardial infarction (STEMI/NSTEMI) — results from acute coronary artery occlusion/critical ischaemia, usually from atherosclerotic plaque rupture and thrombosis. It is a time-critical emergency: rapid recognition and emergency transfer ("time is muscle") save myocardium and lives.',
    features:[
      'Central/left-sided chest pain or tightness, often radiating to the arm(s), neck or jaw, with sweating, nausea, and breathlessness, typically lasting >15–20 minutes and not relieved by rest/GTN',
      'ATYPICAL presentations are common and dangerous — especially in women, older people and those with diabetes: breathlessness, fatigue, epigastric pain, or collapse with little/no chest pain',
      'STEMI: ST-elevation on ECG (full-thickness ischaemia) — needs immediate reperfusion (primary PCI)',
      'NSTEMI/unstable angina: ischaemic symptoms without ST elevation; troponin rises in NSTEMI',
      'Risk factors: smoking, hypertension, diabetes, dyslipidaemia, family history, age, and obesity',
      'Complications: arrhythmia (including VF arrest), heart failure, cardiogenic shock, and mechanical complications'],
    management:[
      'Suspected acute coronary syndrome is a 999 emergency — arrange immediate emergency ambulance transfer to hospital',
      'Initial primary-care/first-aid measures while awaiting the ambulance: aspirin 300 mg (chewed, unless contraindicated), pain relief (GTN if available and not hypotensive), and oxygen only if hypoxic',
      'Obtain an ECG promptly if possible (do not delay transfer); a STEMI needs emergency primary PCI',
      'Be alert to atypical presentations and have a low threshold for assessment in higher-risk groups',
      'In-hospital management includes antiplatelets/anticoagulation, reperfusion (PCI/thrombolysis), and treatment of complications',
      'After discharge, deliver secondary prevention: dual antiplatelet therapy, a high-intensity statin, an ACE inhibitor and a beta-blocker (per guidance), and cardiac rehabilitation',
      'Aggressively manage risk factors: smoking cessation, BP, diabetes, lipids, diet and activity',
      'Provide support, address mood (depression is common post-MI), and advise on return to activity/driving and when to seek help'],
    referral:[
      'Suspected acute coronary syndrome/heart attack → 999 emergency admission (give aspirin 300 mg)',
      'Cardiac arrest → start CPR/defibrillation and call 999',
      'New/unstable angina or recent suspected ACS → urgent cardiology assessment',
      'Post-MI care → cardiac rehabilitation and structured secondary prevention'],
    source:'NICE NG185 (Acute coronary syndromes)' },

  { id:'heart-block', title:'Heart block (atrioventricular block)', category:'Cardiovascular & Renal', icon:'🫀',
    overview:'A disorder of conduction between the atria and ventricles, ranging from benign first-degree block to life-threatening complete (third-degree) block. The clinical priority is recognising high-grade block, which causes syncope, bradycardia and sudden death and needs urgent assessment for pacing.',
    features:[
      'First-degree block: a prolonged PR interval only — usually asymptomatic and benign, often an incidental ECG finding',
      'Second-degree block: Mobitz I (Wenckebach — progressive PR lengthening then a dropped beat; often benign) and Mobitz II (intermittent dropped beats without PR lengthening — higher risk of progression)',
      'Third-degree (complete) heart block: complete atrioventricular dissociation with a slow escape rhythm — symptomatic bradycardia, syncope (Stokes-Adams attacks), heart failure, and risk of sudden death',
      'Symptoms of significant block: dizziness, syncope/blackouts, fatigue, breathlessness, and chest discomfort',
      'Causes: ageing/fibrosis of the conduction system, ischaemic heart disease/acute MI (especially inferior), drugs (beta-blockers, rate-limiting calcium-channel blockers, digoxin), electrolyte disturbance, and infiltrative/inflammatory disease (e.g. Lyme, sarcoid)',
      'Diagnosis: ECG (and ambulatory monitoring for intermittent block)'],
    management:[
      'Assess symptoms, haemodynamic status, and the ECG type; identify and treat reversible causes (review/stop rate-limiting drugs, correct electrolytes, treat ischaemia)',
      'First-degree and asymptomatic Mobitz I block: usually no treatment — review medications and monitor',
      'Mobitz II, complete heart block, or symptomatic high-grade block: urgent cardiology referral for consideration of a permanent pacemaker',
      'Complete heart block, or block causing haemodynamic compromise/syncope, is an emergency — arrange emergency admission (temporary pacing/atropine may be needed)',
      'In the context of acute MI, manage within the emergency coronary pathway',
      'Advise patients with significant block to seek urgent help for blackouts/presyncope and address driving (DVLA rules differ by type/treatment)',
      'After pacemaker insertion, provide routine follow-up and device checks',
      'Educate on symptoms warranting urgent review'],
    referral:[
      'Complete (third-degree) heart block, symptomatic bradycardia, or haemodynamic compromise → emergency admission (consider pacing)',
      'Mobitz II second-degree block, or symptomatic high-grade block → urgent cardiology (pacemaker assessment)',
      'Syncope with suspected conduction disease → urgent cardiology',
      'Incidental first-degree/asymptomatic Mobitz I → review medications, routine monitoring'],
    source:'NICE / ESC bradycardia & pacing guidance' },

  { id:'heart-failure', title:'Heart failure', category:'Cardiovascular & Renal', icon:'🫀',
    overview:'A clinical syndrome in which the heart cannot pump sufficiently for the body’s needs, causing breathlessness, fatigue and fluid retention. It is common, serious (worse prognosis than many cancers) and increasingly treatable. Accurate diagnosis (with natriuretic peptides and echocardiography) and guideline-based therapy transform outcomes.',
    features:[
      'Symptoms: exertional breathlessness, orthopnoea, paroxysmal nocturnal dyspnoea, fatigue, and ankle/leg swelling',
      'Signs: raised JVP, bibasal crackles, peripheral oedema, a displaced apex, and a third heart sound; tachycardia',
      'Classified by ejection fraction: heart failure with reduced ejection fraction (HFrEF) and with preserved ejection fraction (HFpEF) — treatment differs',
      'Common causes: ischaemic heart disease (commonest), hypertension, valvular disease, arrhythmia (e.g. AF), and cardiomyopathy',
      'Decompensation triggers: infection, arrhythmia, ischaemia, non-adherence, NSAIDs, and excess salt/fluid',
      'Diagnosis: measure NT-proBNP (a normal level makes heart failure unlikely; a high level prompts urgent echocardiography), plus ECG and assessment for the cause'],
    management:[
      'In suspected heart failure, measure NT-proBNP and arrange echocardiography — refer urgently (within 2 weeks) if NT-proBNP is very high, and within 6 weeks if raised (per NICE NG106)',
      'HFrEF: start guideline-directed therapy — the "four pillars": an ACE inhibitor (or ARB/ARNI), a beta-blocker, a mineralocorticoid receptor antagonist, and an SGLT2 inhibitor, titrated up with monitoring of U&E, BP and symptoms',
      'Manage congestion with loop diuretics (for symptom relief — they do not improve prognosis), and advise on salt/fluid and daily weights',
      'HFpEF: treat with an SGLT2 inhibitor and manage comorbidities/congestion and the underlying drivers (hypertension, AF, obesity)',
      'Treat the cause and comorbidities (ischaemia, valve disease, AF, hypertension) and review/avoid drugs that worsen failure (e.g. NSAIDs)',
      'Vaccinate (influenza, pneumococcal, COVID-19), support cardiac rehabilitation, and provide a personalised management/self-care plan',
      'Recognise and treat decompensation; arrange specialist heart-failure nurse input and consider devices (CRT/ICD) and advanced therapies where indicated',
      'Discuss prognosis and advance care planning; involve palliative care for advanced disease'],
    referral:[
      'Suspected heart failure with NT-proBNP very high (>2000 ng/L) → urgent (2-week) referral for echocardiography and specialist assessment; raised (400–2000) → within 6 weeks (NICE NG106)',
      'Acute decompensated heart failure/pulmonary oedema → emergency admission',
      'Severe valve disease or potentially reversible cause → cardiology',
      'Advanced heart failure → specialist heart-failure team ± palliative care'],
    source:'NICE NG106 (Chronic heart failure)' }

  );
})();
