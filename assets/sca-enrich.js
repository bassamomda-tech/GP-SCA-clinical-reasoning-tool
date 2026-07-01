/* ============================================================
   Reasoning GP — The Hot Seat: per-case SCA knowledge
   Concise, exam-relevant clinical knowledge for each case,
   anchored to NICE CKS / national UK guidance. Surfaced in the
   "Knowledge" step so candidates revise the medicine behind the
   station. Educational summary only — verify against live CKS.
   ============================================================ */

/* ============================================================
   Reasoning GP — The Hot Seat: booklet-style DOCTOR'S STEM
   The clinical-record card presented to the candidate before the
   station begins — modelled on standard SCA mock-booklet layout:
   Patient name · Age · PMH · Drug & allergy history · Recent notes
   · Reason for consultation. Educational; original content.
   ============================================================ */

window.SCA_STEM = {
  'htn-young-bp': {
    name:'Marcus Whitfield', age:'32-year-old man',
    pmh:['No significant past medical history','Not previously recorded as hypertensive'],
    meds:['No regular medication'], allergy:'No known drug allergies',
    recent:'Well-man review last week — clinic BP 162/96 mmHg. Repeat in surgery this morning 158/94 mmHg. BMI 28. Non-smoker. African-Caribbean family origin.',
    reason:'Practice nurse has asked him to attend to discuss his blood-pressure readings.'
  },
  'rif-pain-young-female': {
    name:'Layla Ahmed', age:'28-year-old woman',
    pmh:['Chlamydia treated at age 19','Laparoscopic surgery for an ovarian cyst at age 23'],
    meds:['No regular medication','Stopped combined oral contraceptive pill 4 months ago'],
    allergy:'No known drug allergies',
    recent:'No significant recent consultations. LMP approximately 6 weeks ago.',
    reason:'Telephone triage — right-sided lower abdominal pain since this morning.'
  },
  'knee-pain-walker': {
    name:'Donald Harris', age:'65-year-old man',
    pmh:['Hyperlipidaemia','Mild osteoarthritis of the left knee (2021) — settled with physiotherapy','BMI 31'],
    meds:['Atorvastatin 20 mg nocte'], allergy:'No known drug allergies',
    recent:'No recent consultations. Retired teacher; keen long-distance hill walker.',
    reason:'Face-to-face appointment requested by the patient — right knee pain.'
  },
  'home-visit-confusion': {
    name:'Edith Saunders', age:'84-year-old woman',
    pmh:['Hypertension','Osteoarthritis','Mild memory impairment (last documented 18 months ago)'],
    meds:['Amlodipine 5 mg OD','Co-codamol 30/500 — started 4 weeks ago for a knee flare'],
    allergy:'No known drug allergies',
    recent:'Lives alone in a ground-floor flat; daughter (June) is the primary carer. One unwitnessed fall last week, no injury.',
    reason:'Home visit requested by the daughter — mother “confused, more forgetful and not eating” for two weeks.'
  },
  'acne-teen': {
    name:'Sophie Edwards', age:'16-year-old girl',
    pmh:['No significant past medical history'],
    meds:['No regular medication','Over-the-counter benzoyl peroxide (poorly tolerated)'],
    allergy:'No known drug allergies',
    recent:'No recent consultations. Sitting GCSE exams this summer. Mother (Karen) booked the appointment and is also on the video call.',
    reason:'Video appointment — worsening acne over 18 months.'
  },
  'third-party-meno': {
    name:'Helen Carter (patient) — call is from her husband, Andrew Carter', age:'52-year-old woman',
    pmh:['Nothing of note recorded'],
    meds:['No regular medication on file'], allergy:'Not known',
    recent:'⚠ No appointment booked by the patient herself. No consent on file to discuss her care with a third party.',
    reason:'Telephone call from the husband — concerned his wife has “completely changed” over six months; asking about HRT.'
  },
  'cough-smoker-2ww': {
    name:'Raymond Powell', age:'56-year-old man',
    pmh:['Hypertension — well controlled'],
    meds:['Ramipril 5 mg OD'], allergy:'No known drug allergies',
    recent:'Smokes 20/day for 35 years. Builder. No previous chest imaging on record.',
    reason:'Booked video appointment (self-referred) — “chesty cough” for three months, requesting antibiotics.'
  },
  'insulin-ramadan': {
    name:'Imran Shah', age:'48-year-old man',
    pmh:['Type 2 diabetes (diagnosed 7 years ago)','BMI 36'],
    meds:['Metformin 1 g BD','Gliclazide 80 mg BD'], allergy:'No known drug allergies',
    recent:'HbA1c 84 mmol/mol (target 53). No diabetes review for 18 months. No retinopathy at last screen. Taxi driver; practising Muslim — Ramadan begins in 5 weeks.',
    reason:'Face-to-face diabetes review — diabetes nurse has flagged poor control and advised escalation of treatment.'
  },
  'lft-alcohol': {
    name:'Charles Bennett', age:'42-year-old man',
    pmh:['Nothing of note'],
    meds:['No regular medication'], allergy:'No known drug allergies',
    recent:'Solicitor. Bloods requested two weeks ago after he reported fatigue — returned abnormal liver function tests (see results in the Consultation step).',
    reason:'Booked appointment to discuss recent blood results.'
  },
  'sleep-paeds': {
    name:'Aaron Patel (patient) — call is from his mother, Naomi Patel', age:'4-year-old boy',
    pmh:['No significant past medical history','Mother: postnatal depression after Aaron’s birth — treated and resolved'],
    meds:['No regular medication','Melatonin gummies bought abroad (tried, ineffective)'],
    allergy:'No known drug allergies',
    recent:'Thriving and sociable at nursery, no behavioural concerns flagged. Father works night shifts three days a week.',
    reason:'Video appointment with the mother — child waking 4–5 times a night; requesting “something to help him sleep”.'
  }
};

window.SCA_KNOWLEDGE = {

  'htn-young-bp': {
    guideline: 'NICE NG136 — Hypertension in adults',
    summary: 'Confirm with ABPM/HBPM before labelling. In a man <55 of African/African-Caribbean family origin without diabetes, first-line is a CCB, not an ACE inhibitor.',
    points: [
      { h:'Diagnose, don’t treat a single reading', t:'Clinic BP ≥140/90 → offer ABPM (or HBPM) to confirm. Stage 1 = clinic ≥140/90 + ABPM ≥135/85; Stage 2 = clinic ≥160/100 + ABPM ≥150/95.' },
      { h:'First-line drug by phenotype', t:'<55 & not Black African/African-Caribbean: ACEi/ARB. Aged ≥55 OR Black African/African-Caribbean family origin (any age, no T2DM): CCB. With T2DM at any age/ethnicity: ACEi/ARB. Step 2: add the other class (CCB + ACEi/ARB) or a thiazide-like diuretic — and in Black African/African-Caribbean patients prefer an ARB over an ACEi when a RAS blocker is added (higher angio-oedema risk with ACEi).' },
      { h:'Baseline work-up', t:'U&E + eGFR, ACR, HbA1c, lipids, urine dip for haematuria, 12-lead ECG, and a formal QRISK — quantify cardiovascular risk rather than estimating it.' },
      { h:'Targets', t:'<80 yrs: clinic <140/90 (ABPM/HBPM <135/85). ≥80 yrs: clinic <150/90. Offer atorvastatin 20 mg if QRISK ≥10%.' },
      { h:'Look for secondary/contributory causes', t:'Young, severe, or resistant hypertension warrants thought about secondary causes; this man’s heavy snoring + daytime somnolence should trigger an OSA (e.g. STOP-BANG/Epworth) screen.' },
      { h:'Same-day action', t:'Clinic BP ≥180/120 with signs of end-organ damage (papilloedema, chest pain, AKI, new neurology) = same-day specialist assessment.' }
    ]
  },

  'rif-pain-young-female': {
    guideline: 'NICE NG126 — Ectopic pregnancy & miscarriage · CKS Ectopic pregnancy',
    summary: 'Any woman of reproductive age with abdominal pain is an ectopic until proven otherwise. The destination is a same-day Early Pregnancy Assessment Unit, not a routine GP review.',
    points: [
      { h:'Pregnancy is the pivot', t:'Always establish LMP, contraception and possibility of pregnancy. A positive/uncertain pregnancy test with pain and/or bleeding mandates urgent EPAU assessment.' },
      { h:'Red flags that raise ectopic risk', t:'Shoulder-tip pain, dizziness/syncope, rectal pressure, haemodynamic compromise, lateralised pain. Risk factors: previous ectopic, PID/chlamydia, tubal surgery, IUD, assisted conception.' },
      { h:'Don’t let the test delay transfer', t:'Advise a urine βhCG but do not wait for it before arranging review if clinical suspicion is high; in EPAU, serial serum βhCG + transvaginal USS guide management.' },
      { h:'Safety-net explicitly', t:'999 for collapse, severe sudden worsening, or heavy bleeding. Be clear it’s an emergency pathway, not “see how it goes”.' },
      { h:'Differentials to hold in mind', t:'Appendicitis, ovarian torsion, ruptured/haemorrhagic cyst, PID, UTI — but ectopic is the can’t-miss diagnosis driving the urgency.' },
      { h:'The marking edge', t:'Naming and holding the emotional weight (“you’ve been trying for a baby”) while acting decisively is what separates Clear Pass from Excellent.' }
    ]
  },

  'knee-pain-walker': {
    guideline: 'NICE NG226 — Osteoarthritis in over 16s',
    summary: 'Osteoarthritis is a clinical diagnosis; imaging is not needed when the picture is typical. Management is non-operative and centres on exercise and weight, with topical NSAIDs first-line.',
    points: [
      { h:'Diagnose clinically', t:'Activity-related joint pain in someone ≥45 with morning stiffness ≤30 min needs no X-ray to diagnose OA. Image only if it would change management or red flags suggest another cause.' },
      { h:'Core treatments', t:'Therapeutic exercise (muscle strengthening + aerobic) and weight loss if overweight are the cornerstones — offered to everyone, not as a last resort.' },
      { h:'Pharmacology ladder', t:'Topical NSAID first-line for knee OA. Oral NSAID at lowest effective dose for shortest time + PPI cover; weigh GI/renal/CV risk. NICE de-emphasises paracetamol and weak opioids (limited benefit).' },
      { h:'Adjuncts', t:'Walking aids/poles, appropriate footwear, and pacing/technique advice (e.g. downhill loading). Consider intra-articular steroid for short-term flare relief.' },
      { h:'When to refer', t:'Refer for surgical opinion when symptoms substantially affect quality of life and non-surgical management has failed — not on X-ray appearance alone.' },
      { h:'Safety-net', t:'Hot swollen joint, locking, true giving-way, systemic upset or trauma needs reassessment.' }
    ]
  },

  'home-visit-confusion': {
    guideline: 'NICE CG103 — Delirium · CKS Delirium',
    summary: 'New, fluctuating confusion over days–weeks in an older adult is delirium until proven otherwise — screen for the precipitant rather than defaulting to “worsening dementia”.',
    points: [
      { h:'Delirium vs dementia', t:'Delirium: acute/subacute onset, fluctuating, impaired attention, often reversible. Use 4AT to assess. A two-week change on a background of mild memory impairment = delirium first.' },
      { h:'Find the cause (PINCH ME)', t:'Pain, Infection (UTI/chest), Nutrition/dehydration, Constipation, Hydration, Medication (opioids — here co-codamol), Electrolytes. Urinalysis interpreted with caution in the elderly; treat the patient, not the dipstick.' },
      { h:'Assessment on the visit', t:'Obs (incl. temperature, sats), hydration, focal neurology, abdomen/bladder, medication review, cognitive screen; MSU + bloods (U&E, FBC, CRP, glucose, calcium, B12/folate, TSH).' },
      { h:'Capacity & involving the patient', t:'Address Edith directly, assess capacity for the decisions in hand (MCA — assume capacity, decision-specific), act in best interests if she lacks it.' },
      { h:'The carer is part of the consultation', t:'Identify carer strain (June): offer a carer’s assessment (Care Act 2014), respite, GP carer review, and support — this carries real Relating-to-Others marks.' },
      { h:'Safety-net & escalation', t:'999 for drowsiness, seizure, sudden deterioration; clear plan for who to call and when, and consider whether home management is safe vs admission.' }
    ]
  },

  'acne-teen': {
    guideline: 'NICE NG198 — Acne vulgaris management',
    summary: 'Treat with a fixed 12-week topical combination first-line, assess psychological impact explicitly, and remember isotretinoin is specialist-only.',
    points: [
      { h:'Grade then treat', t:'Offer a 12-week course of a fixed combination: e.g. topical adapalene + benzoyl peroxide, or a topical retinoid + topical antibiotic, or BPO + topical antibiotic. Avoid topical + oral antibiotic together, and don’t use antibiotics as monotherapy.' },
      { h:'Oral antibiotics', t:'For moderate–severe disease, add a tetracycline (e.g. lymecycline/doxycycline) with a topical retinoid + BPO; review at 12 weeks, max ~6 months to limit resistance.' },
      { h:'Hormonal option', t:'Combined oral contraceptive (with a topical agent) is an alternative in those who can take it.' },
      { h:'Refer for isotretinoin', t:'Refer to dermatology for severe/nodulocystic acne, scarring, or failure of two courses — isotretinoin is consultant-initiated with pregnancy-prevention safeguards.' },
      { h:'Mind first, skin second', t:'Acne carries major psychosocial impact; screen mood and function directly. Offer a private review the young person can attend alone, and consider safeguarding/Gillick where relevant.' },
      { h:'Safety-net mental health', t:'Signpost Kooth, Mind, and Papyrus HOPELINEUK (0800 068 4141); have a clear plan if mood or self-harm risk worsens.' }
    ]
  },

  'third-party-meno': {
    guideline: 'GMC Confidentiality · NICE NG23 — Menopause',
    summary: 'You can listen to and inform a third party, but you cannot diagnose, prescribe for, or disclose information about an adult with capacity who hasn’t consented. Get her into the room — and screen for safeguarding.',
    points: [
      { h:'Confidentiality line', t:'For a competent adult, no disclosure or prescribing without consent. You may receive information and give general (non-personal) advice; explain this warmly, not bureaucratically.' },
      { h:'Get the patient in', t:'The key next step is the patient making her own appointment; encourage an open conversation rather than a covert booking.' },
      { h:'Perimenopause knowledge (NG23)', t:'Diagnose perimenopause clinically from symptoms + menstrual change in women >45 without routine FSH testing. HRT is first-line for vasomotor symptoms and mood where appropriate; consider venlafaxine/CBT as alternatives.' },
      { h:'Safeguarding radar', t:'A row that frightened a child, “she doesn’t want me near me”, and marital strain warrant gentle exploration of domestic abuse and child welfare — know your local safeguarding route.' },
      { h:'Information you CAN give', t:'Signpost NHS Menopause pages, Women’s Health Concern, Balance app — resources both partners can read.' },
      { h:'Safety-net', t:'If she expresses self-harm or there’s acute risk: Samaritans 116 123, duty doctor, urgent same-day options.' }
    ]
  },

  'cough-smoker-2ww': {
    guideline: 'NICE NG12 — Suspected cancer recognition & referral',
    summary: 'A ≥40-year-old smoker with an unexplained persistent cough, haemoptysis, hoarseness or weight loss needs an urgent CXR and a suspected-cancer pathway — not antibiotics.',
    points: [
      { h:'Who gets an urgent CXR (within 2 weeks)', t:'≥40 with ≥2 unexplained features (cough, fatigue, breathlessness, chest pain, weight loss, appetite loss) — or ≥1 such feature if ever-smoked. Offer urgent CXR.' },
      { h:'Refer suspected lung cancer (2WW)', t:'Direct suspected-cancer referral if CXR suggests lung cancer, or for anyone ≥40 with unexplained haemoptysis.' },
      { h:'Don’t be anchored', t:'Resist the patient’s framing (“just antibiotics”). Hoarseness >3 weeks in a smoker also warrants a suspected head-and-neck/laryngeal pathway.' },
      { h:'Name the worry honestly', t:'Use clear lay language about an urgent test “to rule out anything serious” — pick up throwaway cues (a streak of blood) and slow down on them.' },
      { h:'Smoking cessation', t:'Offer cessation support proactively (varenicline/NRT + behavioural support); a prior 4-month quit shows capability.' },
      { h:'Safety-net & follow-up', t:'A&E for massive haemoptysis, rest breathlessness, or chest pain; book a named follow-up to give results in person — never leave a cancer result to a letter.' }
    ]
  },

  'insulin-ramadan': {
    guideline: 'NICE NG28 — Type 2 diabetes · Diabetes UK / IDF-DAR Ramadan guidance',
    summary: 'Intensify with organ-protective agents (SGLT2i / GLP-1 RA) before insulin where possible, risk-stratify for fasting, adjust therapy for Ramadan, and address DVLA duties.',
    points: [
      { h:'Escalation after metformin', t:'HbA1c 84 on metformin + sulfonylurea: NICE supports adding an SGLT2 inhibitor and/or GLP-1 RA — favouring cardio-renal protection and weight loss over reflex insulin.' },
      { h:'Insulin is treatment, not failure', t:'If insulin is needed, frame it positively; sulfonylureas and insulin carry the greatest hypo (and fasting) risk.' },
      { h:'Ramadan risk-stratify & adjust', t:'Use IDF-DAR risk categories. Pre-Ramadan review; switch SU to a once-daily/lower-hypo agent, reduce/redistribute insulin, move longer-acting doses to iftar, and arrange structured education.' },
      { h:'Faith and safety together', t:'Islamic rulings permit the sick to break/delay a fast; breaking a fast for hypo or illness is protective, not sinful — honour faith without colluding with unsafe practice.' },
      { h:'DVLA duties', t:'On sulfonylurea/insulin: hypo awareness, glucose monitoring before/while driving (Group 1: check within 2 h of driving, every 2 h en route; ≥5 to drive), and the duty to inform DVLA for insulin (and Group 2 implications for a taxi/PCO licence).' },
      { h:'Safety-net hypos', t:'Carry fast sugar; recognise sweating/tremor/confusion; break the fast and treat; clear sick-day rules.' }
    ]
  },

  'lft-alcohol': {
    guideline: 'CKS Abnormal LFTs · NICE CG115 — Alcohol-use disorders',
    summary: 'AST:ALT >1 with a high GGT and macrocytosis is an alcohol fingerprint. Quantify units, screen for dependence, assess fibrosis non-invasively, and never advise abrupt cessation if withdrawal risk exists.',
    points: [
      { h:'Read the pattern', t:'Hepatocellular picture with AST:ALT ratio >1, markedly raised GGT and raised MCV strongly suggests alcohol-related liver injury.' },
      { h:'Quantify and screen', t:'Calculate actual weekly units (low-risk <14/week, spread out); use AUDIT-C/AUDIT and assess dependence (the 4Cs, morning drinking, the “jittery dry week” = withdrawal).' },
      { h:'Investigate further', t:'Non-invasive fibrosis assessment (ELF or FIB-4); exclude other causes — viral hepatitis screen, autoimmune profile, ferritin/iron, repeat LFTs.' },
      { h:'Withdrawal danger', t:'In likely dependence, abrupt cessation risks seizures/delirium tremens — arrange medically supported reduction; do not just say “stop drinking”.' },
      { h:'Brief intervention & support', t:'Deliver a non-judgemental brief intervention; signpost local alcohol services, Drinkline 0300 123 1110, and consider acamprosate/relapse-prevention via specialist services.' },
      { h:'Marking edge', t:'Honesty about cause without labelling (“alcoholic”), plus recognising the withdrawal risk and the life context (passed-over partnership), wins the Relating/Global marks.' }
    ]
  },

  'sleep-paeds': {
    guideline: 'CKS Insomnia / childhood sleep · NICE NG222 (depression context)',
    summary: 'A well, thriving 4-year-old who won’t sleep has a behavioural sleep difficulty — managed with consistent behavioural strategy, not medication. The patient who needs treating may be the exhausted mother.',
    points: [
      { h:'Behavioural, not medical', t:'Normal growth, fine at nursery, no snoring/apnoea/red flags points to a sleep-onset association / limit-setting problem — not an organic disorder.' },
      { h:'First-line is behavioural', t:'Consistent bedtime routine, one sleep environment, graduated extinction (“controlled comforting”) or the chair/gradual-retreat method — and warn it takes consistency over ~1–2 weeks.' },
      { h:'Melatonin caution', t:'Melatonin is not routinely recommended for otherwise-healthy young children and is generally specialist-initiated (e.g. in neurodevelopmental conditions); avoid reflexive prescribing.' },
      { h:'Spot the real patient', t:'Exhausted parent + tearfulness + “worst since he was born” = screen for recurrent depression (PHQ-9) and postnatal-type illness; offer the mother her own appointment.' },
      { h:'Support the family', t:'Health Visiting team, ICON (coping with crying/parental stress), The Sleep Charity resources; explore the marital strain and support network.' },
      { h:'Safety-net', t:'Clear plan for worsening mood or thoughts of harm — 111 option 2, Samaritans 116 123, and proactive follow-up.' }
    ]
  }

};

/* Merge knowledge + stem + model consultation onto the case objects */
(function(){
  if (!window.SCA_CASES) return;
  window.SCA_CASES.forEach(function(c){
    if (window.SCA_KNOWLEDGE && window.SCA_KNOWLEDGE[c.id]) c.knowledge = window.SCA_KNOWLEDGE[c.id];
    if (window.SCA_STEM && window.SCA_STEM[c.id]) c.stem = window.SCA_STEM[c.id];
    if (window.SCA_MODELS && window.SCA_MODELS[c.id]) c.model = window.SCA_MODELS[c.id];
  });
})();

/* ============================================================
   FULL SCA CONSULTATION SCORECARD (as in the case pages)
   The official RCGP SCA consultation tool uses the SAME domain
   descriptors for every station — Global Skills (7) and Relating
   to Others (11) are standard; only the clinical Tasks (15) change
   per case. We author bespoke Tasks per case and assemble the full
   /33 scorecard. Educational self-assessment aid only.
   ============================================================ */

/* Standard Global Skills — 7 × 1pt (station-independent) */
window.SCA_GS_STANDARD = [
  { t:'Structures the consultation', d:'Clear agenda set early, logical flow from data gathering to management. Did not jump to a plan before gathering enough information.', pts:1 },
  { t:'Avoids unnecessary repetition', d:'Used information already available in the notes/referral; did not re-ask what was already documented or said.', pts:1 },
  { t:'Progresses through the tasks', d:'Moved efficiently through the consultation so all key areas were covered within the time without getting stuck.', pts:1 },
  { t:'Recognises ethical & medico-legal issues', d:'Acknowledged autonomy, capacity, confidentiality, safeguarding and any fitness-to-drive/work or duty-of-care implications relevant to this case.', pts:1 },
  { t:'Finishes data gathering in good time', d:'History, ICE, psychosocial context and red-flag screen completed by ~6–7 minutes, leaving time for explanation and a shared plan.', pts:1 },
  { t:'Uses clear, jargon-free language', d:'Explained clinical terms in plain English, or defined them immediately; checked the patient was following.', pts:1 },
  { t:'Remains responsive to the patient', d:'Noticed and responded to emotional and verbal cues rather than continuing a fixed clinical script.', pts:1 }
];

/* Standard Relating to Others — 11 × 1pt (station-independent;
   item 8 gets a per-case ICE example woven in by the builder) */
window.SCA_RO_STANDARD = [
  { t:'Generates rapport', d:'Warm, non-judgmental tone; put the patient at ease and showed respect for their perspective.', pts:1 },
  { t:'Uses open questions appropriately', d:'Opened broadly and let the patient tell their story before narrowing down.', pts:1 },
  { t:'Clarifies and explores cues', d:'When a cue was offered, stopped and explored the specific concern rather than reassuring superficially and moving on.', pts:1 },
  { t:'Listens and shows curiosity', d:'Active listening throughout — reflecting, pausing, not interrupting — interested in the patient as a person.', pts:1 },
  { t:'Uses closed questions appropriately', d:'After open exploration, used closed questions with clear signposting to confirm specific details.', pts:1 },
  { t:'Explains the rationale for questions/decisions', d:'Told the patient why a question, examination or test was being done — transparent reasoning throughout.', pts:1 },
  { t:'Verbalises the diagnosis / analysis', d:'Explained the working diagnosis or analysis in plain language the patient could understand.', pts:1 },
  { t:'Shares and uses ICE in the plan', d:'Addressed the patient’s specific idea, concern and expectation directly within the management plan.', pts:1 },
  { t:'Uses psychosocial information in the plan', d:'Tailored the plan to the patient’s circumstances, beliefs and practical barriers rather than giving a generic plan.', pts:1 },
  { t:'Shares risks and safety of options', d:'Explained the benefits and risks of the options clearly, as concrete terms or numbers where possible.', pts:1 },
  { t:'Supports the patient in decision-making', d:'Checked understanding, offered written/follow-up support, asked if anything else was on their mind, agreed next steps.', pts:1 }
];

/* Bespoke Tasks per case — 11 items, 15 pts (four 2-pt items) */
window.SCA_SC_TASKS = {
  'htn-young-bp': [
    { t:'Opens and explores the problem', d:'Open question first; acknowledged the incidental high reading without re-asking; let him describe his understanding and worries.', pts:1 },
    { t:'Explores psychosocial context', d:'Work (manual/driving), salt, alcohol, exercise, smoking, stress, and practical barriers to lifelong daily medication.', pts:1 },
    { t:'Identifies and follows cues', d:'Picked up the heavy snoring/daytime sleepiness and reluctance about “tablets for life”, and explored them.', pts:1 },
    { t:'Discovers ICE', d:'Idea of cause; the specific fear (stroke / “my father died young”); what he hoped for today.', pts:2 },
    { t:'Plans appropriate examination & tests', d:'ABPM/HBPM to confirm; U&E/eGFR, ACR, HbA1c, lipids, ECG; QRISK3; OSA screen (Epworth/STOP-BANG).', pts:1 },
    { t:'Generates & tests hypotheses', d:'Primary vs secondary (OSA, renal), white-coat effect, and target-organ damage.', pts:1 },
    { t:'Rules in/out serious disease', d:'Screened for accelerated hypertension (severe headache, visual change, chest pain, neurology); BP ≥180/120 + end-organ = same-day.', pts:2 },
    { t:'Reaches a working diagnosis', d:'Stated stage per ABPM logic; calculated and shared QRISK as a personal number.', pts:2 },
    { t:'Offers a safe, patient-centred plan', d:'Correct first-line for phenotype (CCB if ≥55 or Black African/Caribbean; ACEi/ARB if <55), specific lifestyle advice, statin if QRISK ≥10%.', pts:2 },
    { t:'Manages comorbidity & contributors', d:'Refer/screen for OSA; ACEi/ARB if T2DM; avoided contraindicated combinations.', pts:1 },
    { t:'Provides follow-up and safety net', d:'U&E within 2 weeks of ACEi/ARB, BP review, HBPM technique, and 999 symptoms named explicitly.', pts:1 }
  ],
  'rif-pain-young-female': [
    { t:'Opens and explores the pain', d:'Open question, then SOCRATES; LMP, contraception and possibility of pregnancy established early.', pts:1 },
    { t:'Explores psychosocial context', d:'Trying to conceive, relationship, work, and the emotional weight of a possible pregnancy.', pts:1 },
    { t:'Identifies and follows cues', d:'Shoulder-tip pain, dizziness, and her unspoken hope/fear about being pregnant.', pts:1 },
    { t:'Discovers ICE', d:'Her idea of what’s wrong; fear of losing a pregnancy or something serious; what she expected today.', pts:2 },
    { t:'Plans appropriate examination & tests', d:'Urine βhCG, observations for shock, appropriate abdominal/pelvic assessment; EPAU does serial βhCG + TVUSS.', pts:1 },
    { t:'Generates & tests hypotheses', d:'Ectopic, miscarriage, ovarian torsion, appendicitis, PID, ruptured cyst.', pts:1 },
    { t:'Rules in/out serious disease', d:'Ectopic red flags and haemodynamic compromise screened; recognised this is an emergency, not a routine review.', pts:2 },
    { t:'Reaches a working diagnosis', d:'“Possible ectopic — needs same-day assessment”; did not falsely reassure.', pts:2 },
    { t:'Offers a safe, patient-centred plan', d:'Same-day EPAU referral without waiting for the test; analgesia; a clear, named pathway.', pts:2 },
    { t:'Weighs risk factors', d:'Previous ectopic, PID/chlamydia, IUD, tubal surgery, assisted conception.', pts:1 },
    { t:'Provides follow-up and safety net', d:'999 for collapse, severe worsening or heavy bleeding; explicit, not “see how it goes”.', pts:1 }
  ],
  'knee-pain-walker': [
    { t:'Opens and explores the problem', d:'Open question; activity-related pain, morning stiffness ≤30 min, function and what triggers it.', pts:1 },
    { t:'Explores psychosocial context', d:'Impact on walking/hobby and work, weight, mood, and willingness to exercise.', pts:1 },
    { t:'Identifies and follows cues', d:'Fear of “bone on bone”/needing a replacement, and reluctance to load the joint.', pts:1 },
    { t:'Discovers ICE', d:'Idea (“it’s wearing out”), concern about disability/surgery, expectation (a scan?).', pts:2 },
    { t:'Examines & interprets appropriately', d:'Diagnoses OA clinically — no X-ray needed when typical; image only if it would change management.', pts:1 },
    { t:'Generates & tests hypotheses', d:'OA vs inflammatory arthritis, referred hip pain, meniscal injury, gout.', pts:1 },
    { t:'Rules in/out serious disease', d:'Hot swollen joint (septic), locking/true giving-way, systemic upset or significant trauma.', pts:2 },
    { t:'Reaches a working diagnosis', d:'States clinical OA and explains it plainly; no imaging required to confirm.', pts:2 },
    { t:'Offers a safe, patient-centred plan', d:'Therapeutic exercise + weight loss as core; topical NSAID first-line; short oral NSAID + PPI; de-emphasise paracetamol/opioids; adjuncts.', pts:2 },
    { t:'Manages comorbidity', d:'NSAID caution for GI/renal/CV risk; chose analgesia accordingly.', pts:1 },
    { t:'Provides follow-up and safety net', d:'Review arranged; refer for surgical opinion on quality of life + failed conservative care, not on X-ray alone.', pts:1 }
  ],
  'home-visit-confusion': [
    { t:'Opens and gathers a collateral history', d:'Open question to carer and (directly) to Edith; established onset over days–weeks and the fluctuating course.', pts:1 },
    { t:'Explores psychosocial context', d:'Carer (June) strain, home safety, function, and the support network.', pts:1 },
    { t:'Identifies and follows cues', d:'Carer exhaustion, “she’s never been this bad”, and the recently started co-codamol.', pts:1 },
    { t:'Discovers ICE', d:'Family’s idea (dementia worsening), their concern, and what they hoped for from the visit.', pts:2 },
    { t:'Examines & investigates appropriately', d:'4AT, obs/temp/sats, hydration, abdomen/bladder, focal neurology, medication review; MSU + bloods (U&E, FBC, CRP, glucose, calcium, B12/folate, TSH).', pts:1 },
    { t:'Generates & tests hypotheses', d:'Delirium vs dementia vs depression; worked through PINCH ME precipitants.', pts:1 },
    { t:'Rules in/out serious disease', d:'Sepsis, hypoxia, AKI; drowsiness/seizure would prompt escalation.', pts:2 },
    { t:'Reaches a working diagnosis', d:'Delirium on a background of mild impairment; treats the patient, not the dipstick.', pts:2 },
    { t:'Offers a safe, patient-centred plan', d:'Treat the cause, address constipation/opioid, hydration; capacity (MCA) and best-interests; home management vs admission.', pts:2 },
    { t:'Supports the carer & safeguarding', d:'Offered a carer’s assessment (Care Act 2014), respite and support.', pts:1 },
    { t:'Provides follow-up and safety net', d:'999 for deterioration; who to call and when; planned review.', pts:1 }
  ],
  'acne-teen': [
    { t:'Opens and explores the problem', d:'Open question; severity, distribution, scarring, duration and what’s been tried.', pts:1 },
    { t:'Explores psychosocial context', d:'School, mood, self-esteem; offered a private appointment the young person can attend alone.', pts:1 },
    { t:'Identifies and follows cues', d:'Low mood, social withdrawal, “I hate how I look”.', pts:1 },
    { t:'Discovers ICE', d:'Idea of cause, concern (scarring/being judged), expectation (“the strong tablets”).', pts:2 },
    { t:'Examines & grades appropriately', d:'Grades acne clinically; no routine tests; notes any hormonal/PCOS features.', pts:1 },
    { t:'Generates & tests hypotheses', d:'Acne vulgaris vs rosacea vs folliculitis; consider PCOS.', pts:1 },
    { t:'Rules in/out serious concerns', d:'Screened mood/self-harm; identified scarring/nodulocystic disease needing referral.', pts:2 },
    { t:'Reaches a working diagnosis', d:'States the severity grade and explains it.', pts:2 },
    { t:'Offers a safe, patient-centred plan', d:'12-week fixed topical combination; oral tetracycline + topical retinoid/BPO for moderate–severe; avoids antibiotic monotherapy and topical+oral antibiotic; COC option; review at 12 weeks.', pts:2 },
    { t:'Refers appropriately', d:'Dermatology for isotretinoin (severe/scarring/two failed courses), with pregnancy-prevention safeguards.', pts:1 },
    { t:'Provides follow-up and safety net', d:'Mental-health signposting (Kooth, Papyrus), planned review, Gillick/safeguarding where relevant.', pts:1 }
  ],
  'third-party-meno': [
    { t:'Opens and explores the husband’s account', d:'Open question; clarified what has changed and why she isn’t here herself.', pts:1 },
    { t:'Establishes the consultation’s limits', d:'Clarified what information can be received versus what can be given about a competent adult.', pts:1 },
    { t:'Identifies and follows cues', d:'The row that frightened a child, “she doesn’t want me near her”, and marital strain.', pts:1 },
    { t:'Discovers ICE', d:'Husband’s idea (menopause/“hormones”), his concern, and his expectation today.', pts:2 },
    { t:'Applies confidentiality correctly', d:'No diagnosis, prescribing or disclosure about a competent adult without consent — explained warmly, not bureaucratically.', pts:2 },
    { t:'Screens for safeguarding', d:'Gently explored domestic abuse and child welfare and knows the safeguarding route.', pts:2 },
    { t:'Gets the patient into the room', d:'Key step — encouraged her to make her own appointment and an open conversation.', pts:2 },
    { t:'Shows relevant clinical knowledge', d:'Perimenopause is a clinical diagnosis >45 without routine FSH; HRT first-line, venlafaxine/CBT alternatives (general advice only).', pts:2 },
    { t:'Gives information he can share', d:'Signposted NHS menopause pages, Women’s Health Concern and the Balance app.', pts:1 },
    { t:'Provides follow-up and safety net', d:'Clear routes if she expresses self-harm or there’s acute risk (Samaritans, duty doctor).', pts:1 }
  ],
  'cough-smoker-2ww': [
    { t:'Opens and explores the cough', d:'Open question; duration, haemoptysis, weight loss, appetite, hoarseness, breathlessness.', pts:1 },
    { t:'Explores psychosocial context', d:'Smoking history, occupation, and what he’s hoping for (“just some antibiotics”).', pts:1 },
    { t:'Identifies and follows cues', d:'The streak of blood, the hoarseness, and his wish to play it down.', pts:1 },
    { t:'Discovers ICE', d:'Idea (a lingering chest infection), concern, and expectation (antibiotics).', pts:2 },
    { t:'Plans appropriate tests', d:'Urgent CXR within 2 weeks (not antibiotics); spirometry later if indicated.', pts:1 },
    { t:'Generates & tests hypotheses', d:'Lung cancer, COPD, infection, laryngeal cancer — without anchoring on “just a cough”.', pts:1 },
    { t:'Rules in/out serious disease', d:'Applied NG12; haemoptysis ≥40 warrants a 2WW; massive haemoptysis is an emergency.', pts:2 },
    { t:'Reaches a working diagnosis', d:'“We need an urgent test to rule out something serious” — honest, clear language.', pts:2 },
    { t:'Offers a safe, patient-centred plan', d:'Suspected lung-cancer 2WW pathway + urgent CXR; head-and-neck pathway for hoarseness >3 weeks.', pts:2 },
    { t:'Offers smoking cessation', d:'Proactively offered varenicline/NRT plus behavioural support.', pts:1 },
    { t:'Provides follow-up and safety net', d:'Named in-person follow-up to give results; A&E for massive haemoptysis or breathlessness at rest.', pts:1 }
  ],
  'insulin-ramadan': [
    { t:'Opens and explores the problem', d:'Open question; current therapy (metformin + sulfonylurea), HbA1c 84, and intention to fast for Ramadan.', pts:1 },
    { t:'Explores psychosocial context', d:'Occupation (driving?), faith, family, meal patterns and work routine.', pts:1 },
    { t:'Identifies and follows cues', d:'Reluctance about insulin (“failure”), the wish to fast, and any driving duties.', pts:1 },
    { t:'Discovers ICE', d:'Idea, concern (insulin/needles, fasting safely), and expectation today.', pts:2 },
    { t:'Examines & investigates appropriately', d:'HbA1c, renal function/eGFR, weight, CV risk, and that foot/retinal review is current.', pts:1 },
    { t:'Generates & tests management options', d:'Add an SGLT2 inhibitor and/or GLP-1 RA before reflex insulin (cardio-renal protection, weight).', pts:1 },
    { t:'Rules in/out serious risk', d:'Hypoglycaemia risk (sulfonylurea/insulin), DKA awareness and fasting safety; used IDF-DAR risk category.', pts:2 },
    { t:'Reaches a working analysis', d:'Intensify with an organ-protective agent; if insulin is needed, frames it positively.', pts:2 },
    { t:'Offers a safe Ramadan plan', d:'Pre-Ramadan review; switch SU to a lower-hypo agent; reduce/redistribute insulin to iftar; structured education; faith permits breaking the fast for illness/hypo.', pts:2 },
    { t:'Addresses DVLA duties', d:'On SU/insulin: glucose ≥5 to drive, check within 2 h and every 2 h; inform DVLA for insulin; Group 2 implications.', pts:1 },
    { t:'Provides follow-up and safety net', d:'Sick-day rules, hypo treatment, carry fast sugar, and a review.', pts:1 }
  ],
  'lft-alcohol': [
    { t:'Opens and explores the results', d:'Open question; explained the abnormal LFT pattern (AST:ALT >1, high GGT, raised MCV) in plain terms.', pts:1 },
    { t:'Explores psychosocial context', d:'Being passed over for partnership, stress, relationships and what drinking does for him.', pts:1 },
    { t:'Identifies and follows cues', d:'The “jittery dry week” (withdrawal) and any defensiveness.', pts:1 },
    { t:'Discovers ICE', d:'Idea of cause, concern (liver damage), and expectation today.', pts:2 },
    { t:'Quantifies and screens', d:'Calculated actual weekly units; used AUDIT-C/AUDIT; assessed dependence (4Cs, morning drinking).', pts:2 },
    { t:'Investigates appropriately', d:'Non-invasive fibrosis (ELF/FIB-4); viral hepatitis, autoimmune profile, ferritin; repeat LFTs; signs of chronic liver disease.', pts:1 },
    { t:'Rules in/out serious risk', d:'Recognised withdrawal danger — abrupt cessation risks seizures/DTs; did not just say “stop drinking”.', pts:2 },
    { t:'Reaches a working analysis', d:'Identified the alcohol fingerprint; honest without labelling him “an alcoholic”.', pts:2 },
    { t:'Offers a safe, patient-centred plan', d:'Brief intervention; medically supported reduction; local alcohol services; Drinkline; acamprosate via specialist.', pts:2 },
    { t:'Provides follow-up and safety net', d:'Named withdrawal danger signs, support, and a review.', pts:1 }
  ],
  'sleep-paeds': [
    { t:'Opens and explores the child’s sleep', d:'Open question; bedtime routine, sleep associations, snoring/apnoea, growth and development.', pts:1 },
    { t:'Explores the family context', d:'Mother’s exhaustion, support at home, partner, and “the worst since he was born”.', pts:1 },
    { t:'Identifies and follows cues', d:'Maternal tearfulness, low mood and a sense of hopelessness.', pts:1 },
    { t:'Discovers ICE', d:'Mother’s idea (something is wrong with the child), concern, and expectation (a sleep medicine?).', pts:2 },
    { t:'Examines/assesses appropriately', d:'A well, thriving child points to a behavioural difficulty; screened the mother’s mood (PHQ-9).', pts:1 },
    { t:'Generates & tests hypotheses', d:'Behavioural sleep-onset association vs organic (apnoea/red flags); maternal depression.', pts:1 },
    { t:'Rules in/out serious concerns', d:'Spotted the real patient — screened maternal depression/self-harm; checked child red flags.', pts:2 },
    { t:'Reaches a working analysis', d:'Behavioural sleep difficulty; recognised the mother needs assessment in her own right.', pts:2 },
    { t:'Offers a safe, patient-centred plan', d:'Behavioural strategy (consistent routine, graduated extinction/gradual retreat); melatonin not routine/specialist-only; addressed maternal mood.', pts:2 },
    { t:'Mobilises support', d:'Health Visitor, ICON, The Sleep Charity; offered the mother her own appointment.', pts:1 },
    { t:'Provides follow-up and safety net', d:'Routes for worsening mood/self-harm (111 option 2, Samaritans) and a review.', pts:1 }
  ]
};

/* Assemble the full scorecard object onto each case */
(function(){
  if (!window.SCA_CASES) return;
  function clone(arr){ return arr.map(function(x){ return { t:x.t, d:x.d, pts:x.pts }; }); }

  /* ----------------------------------------------------------------
     Auto-generate the bespoke 11-item / 15-point clinical Tasks list
     for any case that has no hand-authored SCA_SC_TASKS entry, mining
     the case's OWN data (planted cues, ICE, the five clinical
     checkpoints, and the safety-net). Guarantees every case scores the
     identical /33 (7 Global + 11 Relating + 15 Tasks) — the same
     scorecard the hypertension case uses.
  ----------------------------------------------------------------- */
  function clip(s, n){
    s = String(s == null ? '' : s).replace(/\s+/g, ' ').trim();
    if (s.length <= n) return s;
    return s.slice(0, n - 1).replace(/\s+\S*$/, '') + '\u2026';
  }
  function genTasks(c){
    var cps = (c.checkpoints || []).slice();
    var taskCps = cps.filter(function(x){ return x.dom === 'tasks'; }).map(function(x){ return x.text; });
    var gsCp    = cps.filter(function(x){ return x.dom === 'gs'; }).map(function(x){ return x.text; })[0];
    var cues = (c.script && c.script.cues) || [];
    var ice  = (c.script && c.script.ice) || {};

    // Pull the most relevant clinical checkpoints by keyword, leaving the rest in order
    function take(re){
      for (var i = 0; i < taskCps.length; i++){ if (re.test(taskCps[i])) return taskCps.splice(i, 1)[0]; }
      return null;
    }
    var serious = take(/red flag|red-flag|emergency|urgent|999|2WW|same-day|sepsis|admit|refer|stroke|cancer|safeguard|suicid|\bDKA\b|seizure|bleed|ectopic|variceal/i);
    var plan    = take(/\bplan\b|manage|treat|offer|start|prescrib|detox|venesect|inhaler|levothyrox|titrat|deprescrib|rehab/i);
    var examTests  = taskCps.shift() || 'Plans appropriate examination and investigations for this presentation, explaining why.';
    var hypotheses = taskCps.shift() || 'Generates and tests a sensible differential out loud rather than anchoring on the obvious.';
    var diagnosis  = taskCps.shift() || 'Reaches and verbalises a working diagnosis in plain language the patient understands.';
    var comorbid   = taskCps.shift() || 'Addresses contributing factors and comorbidity relevant to this presentation.';

    var cueText = cues.length
      ? 'Picks up and explores the planted cues \u2014 ' + clip(cues.join(' '), 200)
      : 'Picks up and explores the planted verbal and emotional cues rather than reassuring superficially and moving on.';
    var iceText = [ice.ideas, ice.concerns, ice.expectations].filter(Boolean).join(' ');
    iceText = iceText
      ? clip(iceText, 250)
      : 'Explores the patient\u2019s ideas, concerns and expectations directly and weaves them into the plan.';

    return [
      { t:'Opens and explores the problem', d:'Opens with an open question and lets the patient tell their story before narrowing down; uses what is already known without re-asking.', pts:1 },
      { t:'Explores psychosocial context', d:'Explores work, home, relationships, beliefs and the practical barriers relevant to this presentation.', pts:1 },
      { t:'Identifies and follows cues', d:clip(cueText, 230), pts:1 },
      { t:'Discovers ICE', d:clip(iceText, 250), pts:2 },
      { t:'Plans appropriate examination & tests', d:clip(examTests, 240), pts:1 },
      { t:'Generates & tests hypotheses', d:clip(hypotheses, 240), pts:1 },
      { t:'Rules in/out serious disease', d:clip(serious || 'Screens for the red flags and serious differentials this presentation can hide, and acts on them.', 240), pts:2 },
      { t:'Reaches a working diagnosis', d:clip(diagnosis, 240), pts:2 },
      { t:'Offers a safe, patient-centred plan', d:clip(plan || 'Offers a safe, patient-centred management plan tailored to this person and their circumstances.', 240), pts:2 },
      { t:'Manages comorbidity & contributors', d:clip(comorbid, 240), pts:1 },
      { t:'Provides follow-up and safety net', d:clip(gsCp || 'Gives a clear, specific safety-net and follow-up, with explicit escalation advice.', 240), pts:1 }
    ];
  }

  window.SCA_CASES.forEach(function(c){
    var tasks = window.SCA_SC_TASKS[c.id];
    if (!tasks) tasks = genTasks(c);
    var gs = clone(window.SCA_GS_STANDARD);
    var ro = clone(window.SCA_RO_STANDARD);
    // Weave this case's ICE concern into the "Shares and uses ICE" RO item
    var concern = (c.script && c.script.ice && c.script.ice.concerns) ? c.script.ice.concerns : '';
    if (concern) {
      ro[7] = { t:ro[7].t, d:'Addressed the patient’s specific concern — ' + concern.replace(/\.$/, '') + ' — directly within the plan, rather than noting it and moving on.', pts:1 };
    }
    var sum = function(a){ return a.reduce(function(s,x){ return s + x.pts; }, 0); };
    c.scorecard = {
      tasks: tasks, ro: ro, gs: gs,
      maxTasks: sum(tasks), maxRo: sum(ro), maxGs: sum(gs),
      total: sum(tasks) + sum(ro) + sum(gs)
    };
  });
})();

