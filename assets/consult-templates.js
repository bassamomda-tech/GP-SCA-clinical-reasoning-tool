/* Reasoning GP — Consultation templates.
   Full, editable consultation drafts keyed by diagnosis, used by the
   Consultation Spine to pre-fill all 9 sections. Square-bracketed [text]
   marks the parts a clinician should personalise. UK primary-care / NICE CKS
   aligned; educational scaffold only — verify against NICE/BNF before use.

   Each entry: keys[] = match strings (lowercase); s = { section-id: text }.
   Section ids: hpc, redflags, exam, impression, ix, plan, referral, safetynet, followup.
*/
(function(){
  var T = {};

  T.migraine = {
    keys:['migraine','migraines','migraine with aura','migraine without aura'],
    s:{
      hpc:'Recurrent [unilateral] throbbing headache, episodes lasting [4–72h], [X] per month. Associated photophobia, phonophobia and nausea; aggravated by routine activity. [Visual aura / no aura]. Triggers: [stress, poor sleep, missed meals, menstruation, alcohol]. Current acute medication use [X days/month]. ICE: worried about [serious cause]; wants [effective pain control].',
      redflags:'No thunderclap onset. No fever/neck stiffness/rash. No new focal neurology, no persistent aura >1h. No visual loss / jaw claudication / scalp tenderness (age>50). No headache worse on lying/Valsalva or waking from sleep. No new headache in >50s, immunosuppression or known cancer. No head injury. No pregnancy/postpartum with new severe headache.',
      exam:'Alert, well, comfortable at rest. BP [/], HR []. Fundoscopy — no papilloedema. Cranial nerves intact, no focal neurological deficit, gait normal. Neck supple, temporal arteries non-tender.',
      impression:'Migraine [without / with] aura — episodic, meets diagnostic criteria, normal examination, no red flags. [Consider medication-overuse headache if using acute meds ≥10–15 days/month.]',
      ix:'No neuroimaging indicated — diagnostic criteria met with normal examination and no red flags. Headache diary started to map frequency, triggers and acute-medication days.',
      plan:'Acute: [ibuprofen 400mg / aspirin 900mg] PRN ± antiemetic; if inadequate, a triptan ([sumatriptan 50mg], repeat after 2h if recurs). Limit acute treatment to <10 days/month (triptan) / <15 days (simple analgesia) to avoid MOH. Prophylaxis offered as ≥[4] attacks/month or disabling: [propranolol] (avoid in asthma) OR [amitriptyline] OR [topiramate — teratogenic, ensure reliable contraception]. Lifestyle: regular sleep, meals, hydration, limit caffeine, manage stress; trigger avoidance.',
      referral:'No referral needed. Consider neurology if: diagnostic uncertainty, atypical/changing features, or refractory to ≥3 prophylactics. [Consider for migraine with aura: review combined hormonal contraception — contraindicated.]',
      safetynet:'Return urgently / seek same-day help if: sudden severe (thunderclap) headache, fever with neck stiffness, new weakness, numbness, speech or persistent visual disturbance, or headache that is different/progressive. Headache diary to review.',
      followup:'Review in [4–6 weeks] with diary to assess pattern and response; titrate prophylaxis and reassess acute-medication frequency.'
    }
  };

  T.tensionheadache = {
    keys:['tension headache','tension-type headache','tension type headache'],
    s:{
      hpc:'Bilateral, pressing/tightening (band-like) headache, mild–moderate, not aggravated by routine activity. No nausea/vomiting; [no / one of] photophobia or phonophobia. Episodes [X per month], related to [stress, posture, screen work, poor sleep]. Acute analgesia use [X days/month].',
      redflags:'No thunderclap onset, no fever/neck stiffness, no focal neurology, no visual loss, no headache worse on lying/Valsalva or waking, no new headache >50, no immunosuppression/cancer, no recent head injury.',
      exam:'Well, alert. BP [/]. Fundoscopy normal, no papilloedema. Cranial nerves and limb neurology intact. Pericranial/neck muscle tenderness [present]. Neck movements [normal].',
      impression:'Tension-type headache — [episodic / chronic (≥15 days/month for >3 months)]. Normal examination, no red flags. [Screen for medication-overuse headache.]',
      ix:'No investigation indicated — clinical diagnosis, normal exam, no red flags. Headache diary to quantify frequency and analgesic days.',
      plan:'Acute: [paracetamol / ibuprofen / aspirin] PRN, limiting to <15 days/month to avoid MOH. Reassure benign. Address contributors: posture/ergonomics, regular breaks from screens, sleep, hydration, stress management, exercise. For frequent/chronic: consider a course of [amitriptyline] and/or acupuncture per NICE.',
      referral:'No referral needed. Neurology only if diagnostic doubt or refractory chronic headache.',
      safetynet:'Seek urgent help if sudden severe headache, fever with neck stiffness, new neurological symptoms, visual disturbance, or a change in the usual pattern.',
      followup:'Review in [4–6 weeks] with diary if frequent; otherwise PRN / open access.'
    }
  };

  T.utiwomen = {
    keys:['uti','urinary tract infection','lower uti','cystitis','uti women','uti-women'],
    s:{
      hpc:'[X]-day history of dysuria, urinary frequency and urgency [± suprapubic discomfort, cloudy/offensive urine]. No vaginal discharge/irritation. [Not pregnant.] No prior recurrent UTIs / catheter. ICE: wants symptom relief, concerned about [kidney infection].',
      redflags:'No fever/rigors, no loin pain or flank tenderness, no nausea/vomiting (pyelonephritis). No visible haematuria persisting after treatment (cancer — consider 2WW per NG12 if ≥45 with unexplained haematuria). Not pregnant / no sepsis features. No new confusion (elderly).',
      exam:'Afebrile, well. Abdomen soft, [mild suprapubic tenderness], no loin/renal angle tenderness. [Urine dip: leucocytes/nitrites — supportive.]',
      impression:'Uncomplicated lower urinary tract infection in a non-pregnant woman. No upper-tract or systemic features.',
      ix:'Urine dipstick [nitrite/leucocyte positive]. Send MSU for culture if: pregnant, recurrent, treatment failure, atypical, or ≥65. [Consider no dip and treat empirically if classic symptoms.]',
      plan:'Empirical antibiotic per local formulary: [nitrofurantoin 100mg MR BD 3 days] (avoid if eGFR<45) OR [trimethoprim 200mg BD 3 days] (check local resistance, avoid 1st-trimester pregnancy). Advise hydration, paracetamol/ibuprofen for pain. Self-care for mild symptoms +/- delayed script.',
      referral:'No referral. Consider urology if recurrent UTI, or 2WW for unexplained visible haematuria (≥45) / persistent UTI with haematuria.',
      safetynet:'Return / seek urgent care if fever, rigors, loin pain, vomiting, blood in urine, or no improvement within 48h of antibiotics (suggests resistance or pyelonephritis).',
      followup:'No routine follow-up if resolves. Review culture if sent. If ≥3 UTIs/year, arrange recurrent-UTI assessment.'
    }
  };

  T.sorethroat = {
    keys:['sore throat','tonsillitis','pharyngitis','acute tonsillitis'],
    s:{
      hpc:'[X]-day sore throat with [pain on swallowing], [fever], [cough — present/absent]. No drooling/voice change/neck swelling. [FeverPAIN / Centor features.] ICE: wants to know if antibiotics needed.',
      redflags:'No stridor, drooling, difficulty swallowing saliva or muffled "hot-potato" voice (epiglottitis/abscess). No trismus or unilateral neck swelling/deviated uvula (quinsy). No severe systemic illness/dehydration. [If immunosuppressed or on carbimazole/DMARD — consider agranulocytosis, urgent FBC.]',
      exam:'Temp []. Tonsils [enlarged, exudate present]. Tender anterior cervical lymphadenopathy [present]. No trismus, uvula central, no unilateral swelling. Chest clear. [FeverPAIN score: X. / Centor: X.]',
      impression:'Acute [tonsillitis / pharyngitis], likely [viral / streptococcal]. FeverPAIN [X] / Centor [X].',
      ix:'No routine investigation. [FBC if on carbimazole/immunosuppressant and unwell — exclude neutropenia.]',
      plan:'Analgesia: regular paracetamol ± ibuprofen, fluids, [medicated lozenges/saltwater gargle]. Antibiotics per FeverPAIN/Centor: score 0–1 none; 2–3 consider delayed/back-up script; 4–5 immediate [phenoxymethylpenicillin 500mg QDS 5–10 days] (clarithromycin if penicillin-allergic). Most settle in [7] days.',
      referral:'No referral. Same-day hospital if epiglottitis/quinsy suspected. ENT referral if recurrent (≥7 in 1 year / ≥5 per year for 2 years) for tonsillectomy discussion.',
      safetynet:'Seek urgent help if difficulty breathing or swallowing saliva, drooling, voice change, inability to open mouth, one-sided severe swelling, or worsening despite treatment.',
      followup:'PRN / open access. Return if not improving by [1 week] or recurrent.'
    }
  };

  T.lowbackpain = {
    keys:['back pain','low back pain','lower back pain','lumbar back pain','mechanical back pain'],
    s:{
      hpc:'[X]-week history of lower back pain, [mechanical — worse on movement, eased by rest], [± radiation to leg]. [Precipitant: lifting/twisting.] No bladder/bowel disturbance, no saddle anaesthesia. Function: [affecting work/sleep]. ICE: worried about [serious damage]; wants pain relief and to stay active.',
      redflags:'CAUDA EQUINA: no urinary retention/incontinence, no faecal incontinence, no saddle anaesthesia, no bilateral leg symptoms or progressive neurology. No features of malignancy (age>50, weight loss, night pain, cancer history), infection (fever, IVDU, immunosuppression), or fracture (trauma, osteoporosis, steroids). No thoracic pain / AAA features.',
      exam:'Mobilising [with discomfort]. Lumbar tenderness [paraspinal], reduced flexion. Straight-leg raise [negative]. Lower-limb power, sensation, reflexes intact. [Perianal sensation and tone normal if any concern.]',
      impression:'Non-specific (mechanical) low back pain [± sciatica], no red flags. Likely self-limiting.',
      ix:'No imaging indicated for non-specific back pain. [Consider per pathway if red flags or radicular symptoms not settling at 4–6 weeks.]',
      plan:'Reassure (favourable prognosis), encourage to stay active and continue normal activities/work as able — avoid bed rest. Analgesia: [NSAID, e.g. ibuprofen, at lowest effective dose with gastroprotection if needed]; consider weak opioid short-term if NSAID unsuitable. Self-management: heat, exercise, [physiotherapy referral]. Use StarT Back to stratify and target support.',
      referral:'No referral if low risk. Physiotherapy / MSK service if not improving. URGENT spinal/A&E if cauda equina suspected. Consider spinal referral for radiculopathy not settling at [4–6 weeks].',
      safetynet:'Go to A&E immediately if difficulty passing or controlling urine, numbness around the back passage/genitals, or new weakness/numbness in both legs. Return if pain worsens, fails to improve over [6 weeks], or new red-flag features.',
      followup:'Review in [2–4 weeks] if not improving; reassess and consider physio/imaging per pathway.'
    }
  };

  T.depression = {
    keys:['depression','low mood','depressive episode','major depression'],
    s:{
      hpc:'[X]-week history of low mood and [anhedonia], with [poor sleep, low energy, poor concentration, appetite change, hopelessness]. Most days, impairing [work/relationships]. [PHQ-9 score: X.] Precipitants: [X]. No alcohol/substance misuse. ICE: [X].',
      redflags:'Suicide/self-harm: [no active thoughts, plans or intent — or document risk]. No psychotic features (delusions/hallucinations). No mania/hypomania history (screen for bipolar). No safeguarding concerns (children/dependents). [Protective factors documented.]',
      exam:'Kempt, [reactive affect], rapport [good]. No psychomotor retardation/agitation. Speech normal. No psychotic phenomena. Cognition grossly intact. Risk assessed — [low].',
      impression:'[Mild / moderate / severe] depressive episode (PHQ-9 [X]). Risk [low]. No bipolar/psychotic features.',
      ix:'Consider bloods to exclude organic contributors: [FBC, TFT, ferritin, B12/folate, U&E, LFT, HbA1c, calcium, vitamin D]. PHQ-9 / GAD-7 documented.',
      plan:'Less severe: guided self-help, [NICE-recommended digital CBT], exercise, sleep hygiene; active monitoring. More severe / persistent: offer psychological therapy (CBT) and/or an antidepressant — [sertraline 50mg OD], review at 1–2 weeks (sooner if <30y or higher risk), warn of initial side-effects/anxiety and delayed onset (~4 weeks). Signpost [self-referral to NHS Talking Therapies]. Safety plan agreed.',
      referral:'Self-referral / refer to NHS Talking Therapies (IAPT). Urgent CMHT / crisis team if significant suicide risk, psychosis, or severe functional impairment. Consider perinatal MH service if pregnant/postnatal.',
      safetynet:'Seek urgent help (GP same-day, 111, crisis line, or A&E) if thoughts of harming self worsen, you feel unable to stay safe, or symptoms deteriorate. Crisis numbers given. Return if no improvement or side-effect concerns.',
      followup:'Review in [1–2 weeks] (within 1 week if <30 or higher risk) to reassess mood, risk and tolerability; then regularly. Continue antidepressant ≥6 months after remission.'
    }
  };

  T.anxiety = {
    keys:['anxiety','gad','generalised anxiety disorder','generalized anxiety disorder','panic'],
    s:{
      hpc:'[X]-month history of excessive worry most days, difficult to control, with [restlessness, fatigue, poor concentration, irritability, muscle tension, sleep disturbance]. [Panic attacks: X.] Impact on [work/relationships]. [GAD-7 score: X.] No alcohol/caffeine/stimulant excess. ICE: [X].',
      redflags:'No active suicidal ideation/intent (assess risk). No red flags for organic mimics (thyrotoxicosis, arrhythmia, phaeochromocytoma) — palpitations/weight loss/tremor screened. No psychosis. No substance misuse driving symptoms.',
      exam:'Settled in consultation, [anxious affect]. Pulse [regular], no tremor/goitre. Cardioresp [normal]. Risk assessed — [low].',
      impression:'Generalised anxiety disorder (GAD-7 [X]) [± panic disorder]. Organic causes considered. Risk [low].',
      ix:'Consider [TFT, FBC, glucose/HbA1c] to exclude organic contributors if clinically indicated. GAD-7 / PHQ-9 documented.',
      plan:'Stepped care (NICE): psychoeducation and active monitoring; low-intensity guided self-help / individual non-facilitated self-help; then high-intensity CBT or applied relaxation. Drug option if functional impairment / preference: an SSRI [sertraline] (warn of initial transient increase in anxiety; review 1–2 weeks). Lifestyle: reduce caffeine/alcohol, exercise, sleep, breathing techniques. Avoid benzodiazepines except short-term crisis.',
      referral:'Self-referral to NHS Talking Therapies. CMHT if severe, treatment-resistant, or significant risk.',
      safetynet:'Seek urgent help if thoughts of self-harm, inability to cope, or marked deterioration — crisis numbers provided. Return if no improvement or medication concerns.',
      followup:'Review in [2 weeks] to assess response/tolerability and risk; regular review thereafter.'
    }
  };

  T.t2dmreview = {
    keys:['type 2 diabetes','t2dm','diabetes review','diabetes','type 2 diabetes review'],
    s:{
      hpc:'Type 2 diabetes [annual / structured] review. Current treatment: [metformin]. Symptoms: [no osmotic symptoms/hypoglycaemia]. Self-monitoring [n/a]. Diet, activity, smoking, adherence reviewed. Foot/eye screening up to date [yes/no]. ICE: [X].',
      redflags:'No symptoms of hyperglycaemic crisis (marked thirst, polyuria, weight loss, vomiting, drowsiness — DKA/HHS). No severe/recurrent hypoglycaemia. No foot ulcer/ischaemia/new deformity. No chest pain or new visual loss.',
      exam:'BP [/], weight/BMI [], waist []. Feet: pulses [present], monofilament sensation [intact], skin intact, no deformity/ulcer — risk [low]. Injection sites [n/a].',
      impression:'Type 2 diabetes — [reasonably controlled, HbA1c X]. CVD risk [X]. [Microvascular screening status.]',
      ix:'HbA1c [X], lipid profile, U&E/eGFR + urine ACR (nephropathy), [LFT]. BP. Retinal screening and foot check arranged. Document QRISK.',
      plan:'Individualised HbA1c target [48–58 mmol/mol]. Reinforce diet, weight loss, activity, smoking cessation. Glucose: titrate/step up per NICE — consider [SGLT2 inhibitor] (CVD/HF/CKD benefit) ± add-ons. Cardiorenal protection: statin (atorvastatin 20mg primary prevention), ACE-i/ARB if ACR raised or hypertensive, optimise BP <140/90 (<130/80 if ACR≥70). Annual foot/eye screening, immunisations.',
      referral:'Diabetes specialist / nurse if poor control despite optimisation, recurrent hypos, or complex needs. Podiatry if increased foot risk. Ophthalmology per screening. Structured education ([DESMOND]).',
      safetynet:'Seek urgent help if marked thirst/polyuria with vomiting or drowsiness, new foot ulcer/colour change, severe or recurrent hypos, or new chest pain/visual loss.',
      followup:'Recall in [3–6 months] to reassess HbA1c after any change, then annual structured review.'
    }
  };

  T.hypertension = {
    keys:['hypertension','high blood pressure','htn','raised blood pressure','new hypertension'],
    s:{
      hpc:'[Incidental / symptomatic] raised clinic BP [X/Y]. Asymptomatic [no headache/visual symptoms/chest pain]. Lifestyle: [diet, salt, alcohol, activity, smoking]. PMH/FH cardiovascular. Not pregnant. ICE: [X].',
      redflags:'No features of accelerated/malignant hypertension (BP ≥180/120 with new confusion, chest pain, signs of heart failure, AKI, or papilloedema/retinal haemorrhage → same-day referral). No phaeo symptoms. Not pregnant with raised BP (refer same-day if so).',
      exam:'Clinic BP [/] (repeated). [No papilloedema on fundoscopy.] CVS exam — [normal, no RVH/displaced apex], no radio-femoral delay. [Target-organ assessment.]',
      impression:'[Suspected] hypertension — clinic BP [X/Y]; confirm with ABPM/HBPM. [Stage 1 / 2.] No accelerated features.',
      ix:'Confirm diagnosis with ABPM (or HBPM). Assess target-organ damage and CVD risk: U&E/eGFR, HbA1c, lipids, urine ACR, urine dip (haematuria), 12-lead ECG, fundoscopy. Calculate QRISK3.',
      plan:'Lifestyle for all: reduce salt, healthy diet, weight, regular exercise, limit alcohol/caffeine, smoking cessation. Offer drug treatment per NICE (stage 2, or stage 1 with target-organ damage/CVD/diabetes/renal disease or QRISK≥10%/age<60): [<55 and not Black African/Caribbean → ACE-i/ARB; ≥55 or Black African/Caribbean → CCB]. Target clinic BP <140/90 (<150/90 if ≥80; <135/85 home).',
      referral:'Same-day referral if accelerated hypertension (≥180/120 with red flags) or suspected phaeo. Specialist if resistant hypertension or suspected secondary cause (young, sudden, refractory).',
      safetynet:'Seek urgent help if severe headache with visual disturbance, chest pain, breathlessness, or new weakness/speech difficulty. Return for results and titration.',
      followup:'Review after ABPM/results to confirm and start treatment; recheck BP and U&E [4 weeks] after starting/changing ACE-i/ARB; then [annual] review once stable.'
    }
  };

  T.asthmareview = {
    keys:['asthma','asthma review','asthma annual review'],
    s:{
      hpc:'Asthma review. Control (RCP3 / ACT): [daytime symptoms, night waking, reliever use, activity limitation — X]. Exacerbations / OCS courses in last year [X]. Current treatment [ICS ± LABA], adherence [X], inhaler technique [checked]. Triggers [X], smoking [status]. ICE: [X].',
      redflags:'No current acute severe features (breathless at rest, unable to complete sentences, PEF <50% best, silent chest). No frequent reliever use signalling poor control / risk. No ≥2 OCS courses or any admission/near-fatal episode (high-risk — escalate review).',
      exam:'Comfortable, speaking in full sentences. RR [], SpO2 []. Chest [clear, good air entry, no wheeze]. PEF [X] ([Y%] best/predicted). Inhaler technique observed.',
      impression:'Asthma — [well / partly / poorly] controlled. [Adherence/technique adequate.] Exacerbation risk [low].',
      ix:'PEF / [spirometry / FeNO per diagnostic pathway]. Review monitoring diary. [No routine bloods.]',
      plan:'Optimise per NICE/BTS-SIGN stepwise: check adherence and inhaler technique first. [Step up: add/increase ICS, consider MART/LABA.] Personalised asthma action plan issued/updated. Trigger avoidance, smoking cessation, annual flu vaccine, weight where relevant. Step down when stable.',
      referral:'Respiratory referral if: diagnostic doubt, poor control despite optimisation, ≥2 courses OCS/year, any life-threatening attack, or possible occupational asthma.',
      safetynet:'Use action plan: increase reliever and seek urgent help / 999 if breathless at rest, reliever not lasting 4h, PEF falling, or unable to speak in sentences. Same-day review for any attack.',
      followup:'Review in [4–8 weeks] after any change; otherwise annual review (sooner if recent exacerbation).'
    }
  };

  T.copd = {
    keys:['copd','chronic obstructive pulmonary disease','copd review'],
    s:{
      hpc:'COPD review. Breathlessness MRC [grade X], cough/sputum [X], exacerbations / OCS / admissions last year [X]. Current inhalers [X], technique/adherence [checked]. Smoking [status / pack-years]. Activity [X]. ICE: [X].',
      redflags:'No current exacerbation needing acute care (increased breathlessness/sputum volume/purulence with systemic upset). No signs of cor pulmonale (oedema, raised JVP). No haemoptysis or weight loss (consider 2WW lung cancer / CXR). SpO2 [adequate].',
      exam:'RR [], SpO2 []. Chest [hyperinflated / wheeze / prolonged expiration]. No peripheral oedema. [BMI/weight]. Inhaler technique observed.',
      impression:'COPD — [GOLD/airflow severity], MRC [X], exacerbation risk [low/high]. [Stable today.]',
      ix:'Spirometry (post-bronchodilator FEV1/FVC <0.7) to confirm/grade. [FBC (eosinophils, polycythaemia/anaemia), CXR if indicated.] Pulse oximetry; consider [BMI, MRC] documented.',
      plan:'Smoking cessation (single most important). Inhaled therapy per NICE — [SABA/SAMA PRN; LABA+LAMA; add ICS if asthmatic features/eosinophilia or recurrent exacerbations]. Pulmonary rehabilitation (MRC ≥3). Annual flu + pneumococcal vaccines. Self-management plan ± rescue pack. Treat comorbidities, optimise nutrition.',
      referral:'Respiratory referral if diagnostic uncertainty, severe/rapidly progressive disease, frequent exacerbations despite optimisation, cor pulmonale, or assessment for LTOT/lung-volume reduction.',
      safetynet:'Use rescue plan: start [antibiotic/steroid] and seek help if worsening breathlessness, increased/purulent sputum or fever; 999 if severe breathlessness, confusion or cyanosis.',
      followup:'Review [at least annually] (twice yearly if severe); reassess after any exacerbation and after treatment changes.'
    }
  };

  T.gord = {
    keys:['gord','reflux','gerd','dyspepsia','heartburn','indigestion'],
    s:{
      hpc:'[X]-week history of [retrosternal burning / acid regurgitation / epigastric discomfort], worse [lying/after meals]. [Relation to food/posture.] Lifestyle: [late meals, alcohol, caffeine, smoking, weight]. Current meds [NSAID?]. ICE: [X].',
      redflags:'ALARM/2WW: no dysphagia, no unexplained weight loss, no GI bleeding (haematemesis/melaena/anaemia), no persistent vomiting, no epigastric mass. [Age ≥55 with treatment-resistant dyspepsia → consider direct-access OGD per NG12.] No new dyspepsia ≥55 with weight loss + (reflux/dyspepsia/upper abdo pain).',
      exam:'Well. Abdomen soft, [mild epigastric tenderness], no mass, no organomegaly. [No anaemia.]',
      impression:'Uninvestigated dyspepsia / GORD, no alarm features. [Likely lifestyle/acid-related.]',
      ix:'Test for H. pylori (stool antigen / breath test) — stop PPI 2 weeks before. [FBC if anaemia suspected.] Review medications (NSAID, CCB, bisphosphonate).',
      plan:'Lifestyle: weight loss, smaller/earlier meals, reduce alcohol/caffeine/fatty foods, raise head of bed, stop smoking, review/stop NSAID. Full-dose PPI [omeprazole 20mg OD] for 4–8 weeks. If H. pylori positive — eradication therapy. Step down to lowest effective dose / PRN once controlled.',
      referral:'Routine direct-access OGD if ≥55 with treatment-resistant/persistent symptoms. URGENT (2WW) OGD for dysphagia, or ≥55 with weight loss plus upper abdominal pain/reflux/dyspepsia (NG12).',
      safetynet:'Seek urgent help if difficulty swallowing, food sticking, weight loss, vomiting blood or black stools, or symptoms not settling on treatment.',
      followup:'Review in [4–8 weeks] to assess response; if relapsing, lowest-dose maintenance and reassess; refer if persistent.'
    }
  };

  T.gout = {
    keys:['gout','acute gout','gouty arthritis'],
    s:{
      hpc:'Acute [X]-day history of rapid-onset severe pain, swelling, redness and warmth of the [1st MTP joint / X]. [Previous similar episodes.] Triggers: [alcohol, red meat, dehydration, diuretic]. PMH [renal/CVD], current meds [diuretic]. ICE: wants pain relief.',
      redflags:'Exclude septic arthritis: no fever/systemic upset, monoarthritis not rapidly worsening, no immunosuppression — if in doubt, urgent joint aspiration/assessment. No CKD/GI/cardiac contraindication missed when choosing therapy.',
      exam:'Afebrile. [1st MTP] hot, swollen, exquisitely tender, erythematous; markedly reduced movement. [No other joints / tophi.] [No portal of infection.]',
      impression:'Acute gout (clinical) affecting [1st MTP]. Septic arthritis considered and unlikely. [Recurrent.]',
      ix:'Usually clinical. Consider serum urate (may be normal acutely — recheck ≥4–6 weeks later), U&E, glucose/HbA1c, lipids. Joint aspiration if septic arthritis cannot be excluded (urate crystals, negatively birefringent).',
      plan:'Acute: first-line [NSAID with PPI] OR [colchicine 500mcg BD–QDS] OR short oral [prednisolone] — choose by comorbidity (avoid NSAID in CKD/CVD/GI risk; reduce colchicine in renal impairment). Rest, ice, elevate. Continue any existing urate-lowering therapy. Lifestyle: reduce alcohol/purine intake, hydrate, weight loss, review diuretic.',
      referral:'No referral usually. Rheumatology if diagnostic doubt, refractory, recurrent despite ULT, or complications. Urgent assessment if septic arthritis possible.',
      safetynet:'Seek urgent help if fever/rigors, the joint becomes increasingly hot/painful, or spreads — to exclude joint infection. Return if attacks recur.',
      followup:'Review in [4–6 weeks]: recheck urate and discuss urate-lowering therapy ([allopurinol], start low, titrate to target urate <360 — or <300 if tophi/frequent attacks) with cover for [6 months].'
    }
  };

  T.otitismedia = {
    keys:['otitis media','acute otitis media','ear infection','aom','child ear infection'],
    s:{
      hpc:'[X]-day history of [ear pain / pulling at ear], [fever], [irritability/poor feeding] in a [age] child. [Coryza preceding.] [Discharge if perforated.] Feeding/hydration [adequate]. Immunisations up to date. ICE: parent wants [reassurance / treatment].',
      redflags:'No features of mastoiditis (post-auricular swelling/redness, protruding ear), no neck stiffness/photophobia (meningism), no severe systemic illness/dehydration, not <3 months with fever. [Not immunocompromised.]',
      exam:'[Temp]. Alert, [well-hydrated]. Tympanic membrane [red, bulging, loss of light reflex] / [perforated with discharge]. No post-auricular swelling/tenderness. Chest clear, throat [X], neck supple.',
      impression:'Acute otitis media, [unilateral], child otherwise [systemically well]. No complications.',
      ix:'None — clinical diagnosis.',
      plan:'Most resolve in 3 days without antibiotics. Analgesia: regular paracetamol/ibuprofen, fluids. Antibiotics per NICE — no/back-up script for most; immediate [amoxicillin 5 days] if systemically unwell, <2y with bilateral AOM, otorrhoea, or high risk. Safety-net the family.',
      referral:'No referral. Same-day paediatric/ENT assessment if mastoiditis, intracranial complications, severe systemic illness, or <3 months with fever.',
      safetynet:'Seek urgent help if swelling/redness behind the ear, the ear pushed forward, neck stiffness, drowsiness, high fever not settling, poor fluid intake, or no improvement in 3 days.',
      followup:'PRN. Return if not improving in [3 days], recurrent, or persistent hearing concern (consider OME / glue ear).'
    }
  };

  T.conjunctivitis = {
    keys:['conjunctivitis','red eye','pink eye','infective conjunctivitis'],
    s:{
      hpc:'[X]-day history of [unilateral/bilateral] red eye with [watery/purulent] discharge, [gritty sensation]. [Contact: similar in others.] No significant pain or visual loss. Contact-lens wearer [yes/no]. ICE: [X].',
      redflags:'No reduced visual acuity, no severe pain/photophobia, no ciliary flush/fixed pupil (keratitis/uveitis/acute glaucoma), no contact-lens-related red eye (refer — risk of microbial keratitis), no marked photophobia/haloes, no foreign body/penetrating injury, neonate.',
      exam:'Visual acuity [normal, unchanged]. Conjunctival injection [diffuse], discharge [type]. Cornea clear, pupil normal/reactive, no ciliary flush. [Eyelids — no cellulitis.]',
      impression:'Infective [bacterial/viral] conjunctivitis, no sight-threatening features. [Self-limiting.]',
      ix:'None routinely. [Swab if severe/persistent/neonatal or suspected gonococcal/chlamydial.]',
      plan:'Reassure — most resolve within 1–2 weeks without antibiotics. Bathe lids with cooled boiled water, hygiene measures, avoid sharing towels, remove contact lenses. Lubricants for comfort. Consider delayed [chloramphenicol drops] if not settling/severe. Off school exclusion not required.',
      referral:'Same-day ophthalmology if reduced vision, severe pain/photophobia, contact-lens-related red eye, suspected keratitis/uveitis/acute glaucoma, or neonatal conjunctivitis.',
      safetynet:'Seek urgent eye assessment if vision becomes blurred/reduced, increasing pain or light sensitivity, or no improvement within [1–2 weeks].',
      followup:'PRN / open access. Return if worsening or persistent.'
    }
  };

  T.menopause = {
    keys:['menopause','perimenopause','menopausal symptoms','hrt'],
    s:{
      hpc:'[Age] with [X-month] history of [vasomotor symptoms — hot flushes/night sweats], [menstrual change], [mood/sleep/cognitive symptoms], [urogenital — vaginal dryness/dyspareunia/urinary]. Impact on [QoL/work]. LMP [X]. PMH/contraindications [VTE, breast cancer, migraine]. ICE: considering [HRT].',
      redflags:'Postmenopausal bleeding (≥12 months amenorrhoea then bleeding — 2WW gynaecology per NG12). Unscheduled/persistent bleeding on HRT. No breast lump / unexplained PV bleeding. Personal history of [breast cancer / VTE / oestrogen-dependent cancer] noted before HRT.',
      exam:'[BP, BMI]. [Breast/pelvic exam if clinically indicated.] [No abnormality.]',
      impression:'[Peri]menopause with [vasomotor / urogenital] symptoms affecting quality of life. [Suitable for HRT — no contraindication.]',
      ix:'Diagnosis is clinical in women ≥45 with typical symptoms — no FSH needed. [Consider FSH if <45 / atypical / query POI.] [Baseline BP, BMI; bloods only if indicated.]',
      plan:'Discuss options and individualised risks/benefits. HRT first-line for vasomotor symptoms: [oestrogen + progestogen if uterus present / oestrogen alone if hysterectomised]; [transdermal preferred if VTE/migraine risk]. Vaginal oestrogen for urogenital symptoms (can be used long-term ± systemic HRT). Non-hormonal options [CBT, SSRI/SNRI] if HRT declined/contraindicated. Lifestyle, contraception advice (still needed until [55/2y after LMP]).',
      referral:'Menopause specialist / gynaecology if uncertainty, treatment-resistant symptoms, complex history (e.g. prior hormone-sensitive cancer), or POI (<40). 2WW gynae for postmenopausal bleeding.',
      safetynet:'Report any postmenopausal or unscheduled bleeding, new breast lump, or calf swelling/breathlessness (VTE) urgently. Return if symptoms not controlled or side-effects.',
      followup:'Review at [3 months] after starting/changing HRT, then [annually]; reassess bleeding pattern, benefits, risks and ongoing need.'
    }
  };

  T.irondeficiency = {
    keys:['iron deficiency anaemia','iron deficiency','anaemia','ida'],
    s:{
      hpc:'[Incidental low Hb / symptoms — fatigue, breathlessness on exertion, dizziness]. Diet [X], menstrual loss [X], GI symptoms [bleeding/altered bowel habit/dyspepsia], NSAID use. Weight loss [no]. ICE: [X].',
      redflags:'GI malignancy: in men (any age) and postmenopausal women with iron-deficiency anaemia → 2WW lower + upper GI per NG12. No rectal bleeding/altered bowel habit, no dysphagia, no weight loss, no abdominal/rectal mass. [Coeliac considered.]',
      exam:'[Pallor], pulse []. [Koilonychia/glossitis.] Abdomen soft, no mass/organomegaly. [PR if indicated.]',
      impression:'Iron-deficiency anaemia (Hb [X], ferritin [low]). [Cause: menstrual / dietary / GI loss — to determine.]',
      ix:'FBC, ferritin (confirm iron deficiency), [blood film, B12/folate]. Coeliac serology (tTG-IgA). Urinalysis. In men / postmenopausal women — refer for OGD + colonoscopy. Consider in younger women if atypical or not responding.',
      plan:'Oral iron [ferrous fumarate 210mg OD–BD] (alternate-day dosing improves absorption/tolerance); take with vitamin C, avoid tea/calcium around dose. Treat to normalise Hb then continue 3 months to replenish stores. Dietary advice. Treat underlying cause. Manage menorrhagia if relevant.',
      referral:'2WW upper + lower GI in men and postmenopausal women with IDA (NG12). Gastroenterology/gynaecology per likely source. Haematology if refractory or unclear.',
      safetynet:'Seek help if rectal bleeding, black stools, weight loss, swallowing difficulty, or worsening breathlessness/chest pain. Return if symptoms persist.',
      followup:'Recheck FBC at [2–4 weeks] (expect Hb rise) and at [2–4 months]; continue iron 3 months after Hb normal; confirm cause addressed.'
    }
  };

  T.hypothyroidism = {
    keys:['hypothyroidism','underactive thyroid','hypothyroid','low thyroid'],
    s:{
      hpc:'[Symptoms — fatigue, weight gain, cold intolerance, constipation, dry skin, low mood, menstrual change] over [X]. [Incidental raised TSH.] FH thyroid/autoimmune. Meds [amiodarone/lithium]. Not pregnant / planning. ICE: [X].',
      redflags:'No features of myxoedema coma (hypothermia, reduced consciousness — emergency). Pregnancy/planning pregnancy (needs prompt treatment + specialist targets). No cardiac symptoms limiting rapid titration in elderly/IHD. No goitre/compressive symptoms needing assessment.',
      exam:'[Pulse — bradycardia], [BMI]. [Dry skin, slow-relaxing reflexes.] Thyroid [no goitre/nodule]. [No abnormality.]',
      impression:'[Overt / subclinical] hypothyroidism (TSH [X], free T4 [Y]). [Likely autoimmune.]',
      ix:'TFTs (TSH + free T4); [TPO antibodies] to confirm autoimmune aetiology. [FBC, glucose/HbA1c, lipids; coeliac if indicated.] Confirm with repeat if subclinical.',
      plan:'Overt: start levothyroxine [1.6 mcg/kg/day], lower start [25–50 mcg] in elderly/IHD, titrate by TSH. Take on empty stomach, separate from calcium/iron/PPI. Subclinical: treat if TSH ≥10, or symptomatic/antibody-positive/planning pregnancy — otherwise monitor. Counsel on lifelong treatment and adherence.',
      referral:'Endocrinology if: pregnancy/preconception, age <16, secondary (pituitary) hypothyroidism, drug-induced (amiodarone/lithium), goitre/nodule, or difficult control. Urgent if myxoedema coma.',
      safetynet:'Seek urgent help if marked drowsiness, cold and unwell (myxoedema), or palpitations/chest pain on treatment. Report pregnancy promptly — dose will need increasing.',
      followup:'Recheck TSH [6–8 weeks] after starting/changing dose; once stable, [annual] TFTs. Aim TSH within reference range (lower half).'
    }
  };

  T.angina = {
    keys:['angina','stable angina','angina pectoris'],
    s:{
      hpc:'[X]-month history of central/retrosternal chest [tightness/heaviness], [radiating to arm/jaw], brought on by [exertion/emotion], relieved by rest [within minutes] [± GTN]. [Predictable exertional pattern.] Risk factors: [smoking, hypertension, diabetes, hyperlipidaemia, FH]. No symptoms at rest. ICE: worried about [heart attack].',
      redflags:'Exclude ACS: no chest pain at rest, prolonged (>15 min), or rapidly worsening/new severe pain (→ 999). No syncope, no breathlessness/pain suggesting heart failure or arrhythmia. No features of aortic dissection (tearing pain to back) or PE. [If unstable/crescendo or rest pain → emergency admission.]',
      exam:'Comfortable at rest. BP [/], HR [regular], BMI []. Heart sounds normal, no murmurs (exclude aortic stenosis), no signs of heart failure (no raised JVP/oedema/basal creps). Peripheral pulses present. [No abnormality.]',
      impression:'Stable angina (typical/atypical) on clinical assessment \u2014 [exertional, relieved by rest]. Estimated likelihood of CAD [X]. ACS excluded clinically.',
      ix:'12-lead ECG (often normal between episodes). Bloods: FBC, U&E, HbA1c, lipids, [TFT, LFT]. Refer for anatomical imaging \u2014 [CT coronary angiography] first-line per NICE CG95 for typical/atypical chest pain. Document QRISK; assess for anaemia/thyroid as exacerbants.',
      plan:'Lifestyle: stop smoking, diet, exercise, weight, manage risk factors. Anti-anginal: [GTN spray PRN] (counsel on use + when to call 999) PLUS a beta-blocker [bisoprolol] OR rate-limiting CCB [diltiazem] first-line; add/switch if uncontrolled. Secondary prevention: [aspirin 75mg] + [atorvastatin 80mg] + optimise BP/diabetes; consider ACE-i if diabetes/hypertension. Address comorbidities.',
      referral:'Refer to [rapid-access chest pain clinic / cardiology] for confirmation and CT coronary angiography. EMERGENCY admission (999) if pain at rest, prolonged, or crescendo (suspected ACS). Cardiology for revascularisation assessment if symptoms refractory to 2 anti-anginals.',
      safetynet:'Call 999 if chest pain at rest, lasting >15 minutes, not relieved by GTN (repeat after 5 min once), or with sweating/breathlessness/collapse \u2014 take aspirin 300mg. Return if attacks become more frequent, occur at rest or on less exertion.',
      followup:'Review in [2\u20134 weeks] to assess symptom control and titrate anti-anginals, and after investigations; then regular review of symptoms and secondary prevention.'
    }
  };

  window.RGP_CONSULT_TEMPLATES = T;
})();
