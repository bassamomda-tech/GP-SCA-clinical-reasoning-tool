/* ============================================================
   Reasoning GP — SCA Case Library catalogue
   Curated from a 246-station curriculum map: duplicates folded
   into PRESENTATION FAMILIES (one clinical idea, several ways it
   can present), each variant tagged: ty v/t, ceg[], src (source
   station #), live (Hot Seat case id when a full script exists).
   Specialties: keys of SCA_LIB_SPECS.
   ============================================================ */

window.SCA_LIB_SPECS = {
  cardio:'Cardiovascular', resp:'Respiratory', gi:'GI & Liver', renal:'Renal & Electrolytes',
  uro:'Urology & Men\u2019s health', endo:'Endocrine & Metabolic', women:'Women\u2019s health',
  paeds:'Children & adolescents', msk:'MSK & Rheumatology', neuro:'Neurology',
  mh:'Mental health & addiction', derm:'Skin, ENT & Eye', haem:'Haematology & Results',
  old:'Older adults & Palliative', ethics:'Professional & Ethical', sex:'Sexual & Reproductive'
};

window.SCA_LIBRARY = [

  { f:'Chronic cough', ic:'🫁', sp:'resp', ceg:['Long-term conditions & cancer'],
    note:'One symptom, four different exams: the age, the pack-years and the throwaway line decide whether this is asthma, reflux, a 2WW chest X-ray or a palliative conversation.',
    v:[
      { t:'Persistent cough in a smoker, 56 — the 2WW conversation', ty:'v', live:'cough-smoker-2ww' },
      { t:'Chronic cough in a young adult — cough-variant asthma vs reflux vs pertussis', ty:'v', live:'cough-young-asthma' },
      { t:'Chronic cough in an older adult — normal CXR, when to still refer', ty:'t', live:'cough-older-cxr' },
      { t:'Haemoptysis in a palliative patient — investigate or palliate?', ty:'t', live:'haemoptysis-palliative', ceg:['Older adults'] },
    ]},

  { f:'COPD across its course', ic:'🌬️', sp:'resp', ceg:['Long-term conditions & cancer'],
    note:'The same disease at three stages tests three different skills: acute management, escalation logic, and the ceiling-of-care conversation.',
    v:[
      { t:'COPD flare in a current smoker — rescue pack + the cessation window', ty:'v', src:5, live:'copd-flare-smoker', ceg:['Long-term conditions & cancer'] },
      { t:'Poorly controlled COPD — inhaler technique, triple-therapy logic', ty:'t', src:181, live:'copd-poor-control' },
      { t:'Advanced COPD — breathlessness, anxiety and the ceiling-of-care talk', ty:'t', src:41, live:'copd-advanced-ceiling', ceg:['Older adults'] },
      { t:'Breathless on the phone with known COPD — flare vs something new (PE, HF)', ty:'t', src:113, live:'copd-phone-breathless', ceg:['Urgent & unscheduled care'] },
    ]},

  { f:'Uncontrolled asthma', ic:'💨', sp:'resp', ceg:['Long-term conditions & cancer'],
    note:'SABA overuse is the modern asthma station — the marks live in recognising risk, not adding drugs.',
    v:[
      { t:'Young adult ordering a 7th salbutamol this year — MART conversation', ty:'t', src:37, live:'asthma-saba-overuse' },
      { t:'Asthma review after an A&E attendance — the adherence truth', ty:'t', src:124, live:'asthma-post-attack', ceg:['Urgent & unscheduled care'] },
      { t:'Breathing difficulties in a child — viral wheeze vs asthma, parent coaching', ty:'t', src:155, live:'viral-wheeze-child', ceg:['Children & young people'] },
    ]},

  { f:'Breathlessness, undifferentiated', ic:'🌀', sp:'resp', ceg:['New & undifferentiated presentations'],
    note:'The discriminators (onset, position, D-dimer logic) matter more than any single diagnosis.',
    v:[
      { t:'Breathlessness in a young adult — anxiety is a diagnosis of exclusion', ty:'v', src:122, live:'breathless-anxiety' },
      { t:'Pleural effusion on a requested CXR — breaking unexpected findings', ty:'t', src:129, live:'pleural-effusion-cxr', ceg:['Investigations & results'] },
      { t:'Snoring + daytime sleepiness — OSA, Epworth and the DVLA', ty:'v', src:174, live:'osa-epworth-dvla', ceg:['Professional & ethical dilemmas'] },
    ]},

  { f:'The thyroid result', ic:'🦋', sp:'endo', ceg:['Investigations & results'],
    note:'Three stations in the source collapsed into one family: the skill is pattern-reading TFTs and matching the urgency to the patient in front of you.',
    v:[
      { t:'Overt hypothyroidism in a tired young woman — replacement done properly', ty:'v', src:7, live:'thyroid-hypo-young' },
      { t:'Hyperthyroid pattern with tremor and weight loss — beta-blockade + referral', ty:'v', src:92, live:'thyroid-hyper' },
      { t:'Subclinical hypothyroidism — treat the TSH or the person?', ty:'t', src:110, live:'thyroid-subclinical' },
      { t:'Subclinical hypothyroidism in early pregnancy — the threshold changes', ty:'t', src:116, live:'thyroid-subclin-preg', ceg:['Gender, reproductive & sexual health'] },
    ]},

  { f:'Type 2 diabetes journey', ic:'🍬', sp:'endo', ceg:['Long-term conditions & cancer'],
    note:'From diagnosis to complications: each stage is a different negotiation, not a different lecture.',
    v:[
      { t:'Poor control + Ramadan approaching — faith-literate escalation', ty:'v', live:'insulin-ramadan' },
      { t:'New diagnosis of T2DM — the first conversation sets ten years of engagement', ty:'v', src:86, live:'t2dm-new-diagnosis' },
      { t:'Starting insulin — beliefs, hypos, driving', ty:'v', src:6, live:'insulin-start-beliefs', ceg:['Prescribing & pharmacology'] },
      { t:'T2DM in a Traveller patient — health-literacy and trust, not leaflets', ty:'t', src:19, live:'t2dm-traveller', ceg:['Ethnicity, culture & diversity'] },
      { t:'Hot swollen toe in a diabetic — gout vs the foot emergency', ty:'t', src:27, live:'t2dm-foot', ceg:['Urgent & unscheduled care'] },
      { t:'New microalbuminuria / retinopathy letter — complications without despair', ty:'v', src:153, live:'t2dm-complications' },
      { t:'Unexplained hyperglycaemia — could this be type 1 / LADA?', ty:'t', src:176, live:'t2dm-lada' },
    ]},

  { f:'The liver result', ic:'🫀', sp:'gi', ceg:['Investigations & results'],
    note:'LFT patterns + an honest exposure history. The variants change the conversation entirely.',
    v:[
      { t:'Abnormal LFTs in a stressed solicitor — the alcohol conversation', ty:'v', live:'lft-alcohol' },
      { t:'Jaundice in a returning traveller — hepatitis screen + public health', ty:'v', src:13, live:'liver-jaundice-traveller', ceg:['Urgent & unscheduled care'] },
      { t:'Raised ferritin — haemochromatosis and the family cascade', ty:'v', src:103, live:'liver-haemochromatosis' },
      { t:'Deteriorating drinker — when "cutting down" needs same-day action', ty:'v', src:54, live:'liver-deteriorating-drinker', ceg:['Mental health & addiction'] },
      { t:'Raised ALT in a non-drinker — NAFLD, fibrosis risk, the metabolic conversation', ty:'v', live:'nafld-result' },
    ]},

  { f:'Vascular & circulation', ic:'🩸', sp:'cardio', ceg:['Urgent & unscheduled care'],
    note:'Three of these are limb- or life-threatening emergencies hiding behind a benign-sounding request; the fourth is risk communication.',
    v:[
      { t:'Swollen painful calf — DVT vs cellulitis, and the PE screen', ty:'t', live:'dvt-calf' },
      { t:'Sudden cold, painful, numb leg — acute limb ischaemia (the 6 Ps)', ty:'t', live:'acute-limb-ischaemia', ceg:['Older adults'] },
      { t:'Incidental small AAA on a scan — surveillance, not panic', ty:'v', live:'aaa-incidental', ceg:['Investigations & results'] },
    ]},

  { f:'Blood pressure', ic:'🩺', sp:'cardio', ceg:['Long-term conditions & cancer'],
    note:'Confirm before treating; treat the person\u2019s fear before the number.',
    v:[
      { t:'New hypertension in a 32-year-old whose father stroked at 51', ty:'v', live:'htn-young-bp' },
      { t:'Home readings borderline — does he really need tablets at 58?', ty:'t', src:42, live:'htn-borderline-tablets' },
      { t:'Wildly variable readings — technique, white-coat, or postural?', ty:'v', src:118, live:'htn-variable-readings', ceg:['Older adults'] },
    ]},

  { f:'Chest pain & the ECG', ic:'⚡', sp:'cardio', ceg:['Urgent & unscheduled care'],
    note:'Disposition stations: the mark IS the today-vs-999 decision, made out loud.',
    v:[
      { t:'Acute chest pain on the phone — triage with your ears', ty:'t', src:52, live:'chest-acute-hgv' },
      { t:'Exertional tightness in a 47-year-old builder — cardiac until cleared', ty:'v', live:'angina-builder' },
      { t:'Incidental abnormal ECG — explaining AF and starting the stroke maths', ty:'t', src:141, live:'af-incidental', ceg:['Investigations & results'] },
      { t:'AF anticoagulation refusal — “warfarin killed my father”, shared decision', ty:'v', live:'af-anticoag-decision', ceg:['Prescribing & pharmacology'] },
      { t:'New heart failure — the four-pillar conversation', ty:'v', src:121, live:'hf-four-pillars', ceg:['Long-term conditions & cancer'] },
    ]},

  { f:'Collapse, dizziness & funny turns', ic:'💫', sp:'neuro', ceg:['New & undifferentiated presentations'],
    note:'Same complaint, three ages, three different leading diagnoses — vasovagal, arrhythmia, BPPV, orthostatic. The DVLA question hides in all of them.',
    v:[
      { t:'Syncope in a young adult — vasovagal vs the red-flag faint', ty:'v', src:58, live:'syncope-vasovagal' },
      { t:'Recurrent syncope with a family history — the one you refer', ty:'v', src:139, live:'syncope-cardiac-fh' },
      { t:'Sudden vertigo in an adult — BPPV vs stroke, HINTS thinking', ty:'t', src:30, live:'vertigo-bppv-stroke' },
      { t:'Dizzy spells in an older adult — meds, postural drop, falls link', ty:'t', src:63, live:'dizzy-older-postural', ceg:['Older adults'] },
      { t:'Dizzy spells in a teenager — PoTS, anxiety, and school impact', ty:'t', src:64, live:'dizzy-teen-pots', ceg:['Children & young people'] },
    ]},

  { f:'Headache', ic:'🤕', sp:'neuro', ceg:['New & undifferentiated presentations'],
    note:'The variants exist to test whether you know which headaches are NOT benign.',
    v:[
      { t:'Headaches in a woman on the combined pill — migraine with aura changes everything', ty:'t', src:50, live:'headache-aura-pill', ceg:['Gender, reproductive & sexual health'] },
      { t:'Severe headache in a young man — thunderclap rules', ty:'t', src:114, live:'headache-thunderclap', ceg:['Urgent & unscheduled care'] },
      { t:'New headache at 34 weeks pregnant — pre-eclampsia until excluded', ty:'v', src:158, live:'headache-preeclampsia', ceg:['Gender, reproductive & sexual health'] },
      { t:'Headache triggered by sex — primary or sentinel?', ty:'v', src:57, live:'headache-coital' },
      { t:'Daily headache on daily painkillers — medication-overuse headache, the withdrawal conversation', ty:'v', live:'migraine-moh', ceg:['Prescribing & pharmacology'] },
      { t:'Electric-shock facial pain on touch/chewing — trigeminal neuralgia, carbamazepine & the red flags', ty:'v', live:'trigeminal-neuralgia', ceg:['Prescribing & pharmacology'] },
      { t:'Excruciating one-sided eye pain, nightly, restless — cluster headache (O2 + triptan, not migraine)', ty:'v', live:'cluster-headache', ceg:['Urgent & unscheduled care'] },
    ]},

  { f:'Neurology one-offs', ic:'🧠', sp:'neuro', ceg:['Long-term conditions & cancer'],
    v:[
      { t:'New facial weakness on the phone — Bell\u2019s vs stroke, the forehead sign', ty:'t', src:160, live:'facial-palsy-bell-stroke', ceg:['Urgent & unscheduled care'] },
      { t:'Intermittent double vision in a young adult — MS, myasthenia, urgency', ty:'v', src:189, live:'diplopia-ms-myasthenia' },
      { t:'Optic neuritis / suspected MS — pain on eye movement, not migraine', ty:'v', live:'optic-neuritis-ms' },
      { t:'Disabling symptoms, normal tests — functional disorder taken seriously', ty:'v', live:'functional-symptoms', ceg:['Mental health & addiction'] },
      { t:'Epilepsy: missed pills and a driving licence', ty:'t', src:34, live:'epilepsy-driving', ceg:['Prescribing & pharmacology'] },
      { t:'First seizure — “just a faint?” and the non-negotiable DVLA duty', ty:'t', live:'first-seizure-dvla', ceg:['Urgent & unscheduled care'] },
      { t:'Epilepsy and a positive pregnancy test — valproate rules', ty:'t', src:40, live:'epilepsy-pregnancy-valproate', ceg:['Gender, reproductive & sexual health'] },
      { t:'Shingles pain that never left — postherpetic neuralgia ladder', ty:'v', src:62, live:'postherpetic-neuralgia', ceg:['Older adults'] },
      { t:'Transient weakness/speech loss that recovered — TIA, the urgency the patient wants to ignore', ty:'t', live:'tia-resolved', ceg:['Urgent & unscheduled care'] },
      { t:'Numb, burning feet — peripheral neuropathy, the causes screen (not just “old age”)', ty:'v', live:'peripheral-neuropathy' },
      { t:'Progressive painless weakness + slurred speech — the MND red flag, urgent referral', ty:'v', live:'motor-neurone-disease' },
      { t:'Checking & washing for hours — recognising OCD, ERP/CBT and the egodystonic-thought reassurance', ty:'v', live:'ocd-recognition', ceg:['Mental health & addiction'] },
      { t:'Shaky hands reaching for a cup — essential tremor vs Parkinson’s, and the fear behind it', ty:'v', live:'essential-tremor', ceg:['Older adults'] },
    ]},

  { f:'The urine story', ic:'🚽', sp:'uro', ceg:['New & undifferentiated presentations'],
    note:'Your requested example family: the same "waterworks" opener resolving into completely different diagnoses.',
    v:[
      { t:'Dysuria in a young man — STI until proven otherwise', ty:'t', src:109, live:'dysuria-sti', ceg:['Gender, reproductive & sexual health'] },
      { t:'Recurrent UTIs in a woman — prophylaxis ladder, vaginal oestrogen & the post-coital link', ty:'t', live:'recurrent-uti-woman' },
      { t:'UTI symptoms in an 84-year-old — constipation, retention and delirium traps', ty:'v', live:'uti-elderly', ceg:['Older adults'] },
      { t:'Visible haematuria in an older adult — the 2WW that cannot wait', ty:'t', src:38, live:'haematuria-2ww', ceg:['Long-term conditions & cancer'] },
      { t:'New confusion + urinary retention after a new drug — the anticholinergic mimic', ty:'v', src:228, live:'iatrogenic-anticholinergic', ceg:['Prescribing & pharmacology'] },
      { t:'Bedwetting in a 7-year-old — enuresis without shame', ty:'t', src:36, live:'child-enuresis', ceg:['Children & young people'] },
      { t:'Perineal pain + urinary symptoms in a man — prostatitis, not “just a UTI”', ty:'v', live:'prostatitis', ceg:['Gender, reproductive & sexual health'] },
      { t:'“Always rushing to the loo” — overactive bladder, the bladder-diary-first approach', ty:'v', live:'overactive-bladder', ceg:['Older adults'] },
      { t:'Loin-to-groin pain, can’t keep still — renal colic, analgesia and the AAA/sepsis mimics', ty:'v', live:'renal-colic', ceg:['Urgent & unscheduled care'] },
      { t:'Weepy ankle ulcer that won’t heal — venous vs arterial & ABPI before compression', ty:'v', live:'leg-ulcer', ceg:['Older adults'] },
      { t:'Accidents the patient is too ashamed to mention — faecal incontinence, treatable causes & red flags', ty:'v', live:'faecal-incontinence', ceg:['Older adults'] },
    ]},

  { f:'Men\u2019s health below the belt', ic:'♂️', sp:'uro', ceg:['Gender, reproductive & sexual health'],
    v:[
      { t:'Painless testicular lump — the NG12 two-week-wait you never miss', ty:'v', live:'testicular-lump', ceg:['Long-term conditions & cancer'] },
      { t:'Sudden severe scrotal pain in a teenager — torsion, the clock is running', ty:'t', live:'testicular-torsion', ceg:['Urgent & unscheduled care'] },
      { t:'PSA result above the age range — what the number can and can\u2019t say', ty:'v', src:51, live:'psa-result-conversation', ceg:['Investigations & results'] },
      { t:'Blood in the semen — alarming, usually benign, occasionally not', ty:'v', src:21, live:'haematospermia', ceg:['Long-term conditions & cancer'] },
      { t:'Penile curvature — Peyronie\u2019s, sex and self-esteem', ty:'t', src:98, live:'peyronies-curvature', ceg:['Mental health & addiction'] },
      { t:'Erectile dysfunction in a gay man — the cardiovascular window + chemsex screen', ty:'v', src:104, live:'ed-cardiovascular' },
      { t:'Abnormal semen analysis — fertility news delivered to one half of a couple', ty:'v', src:191, live:'abnormal-semen-analysis', ceg:['Investigations & results'] },
      { t:'Tiredness in a young man — testosterone myths vs real causes', ty:'v', src:226, live:'tiredness-testosterone-myths' },
    ]},

  { f:'Early pregnancy & bleeding', ic:'🤰', sp:'women', ceg:['Gender, reproductive & sexual health'],
    v:[
      { t:'RIF pain, 6 weeks late — ectopic until proven otherwise', ty:'t', live:'rif-pain-young-female' },
      { t:'Can’t keep fluids down at 9 weeks — hyperemesis gravidarum, severity & IV rehydration', ty:'v', live:'hyperemesis-gravidarum', ceg:['Urgent & unscheduled care'] },
      { t:'Bleeding at 9 weeks — miscarriage fears, EPAU routes', ty:'v', src:1, live:'early-preg-bleed' },
      { t:'Itching with no rash in late pregnancy — obstetric cholestasis (bile acids, fetal risk)', ty:'t', src:59, live:'obstetric-cholestasis' },
    ]},

  { f:'Menopause & HRT', ic:'🌡️', sp:'women', ceg:['Gender, reproductive & sexual health'],
    v:[
      { t:'Husband ringing about his wife\u2019s mood — the third-party call', ty:'t', live:'third-party-meno' },
      { t:'Postmenopausal bleeding — the NG12 two-week-wait you never miss', ty:'v', live:'pmb-endometrial', ceg:['Long-term conditions & cancer'] },
      { t:'HRT counselling — symptoms, options, honest risk', ty:'t', src:94, live:'hrt-counselling', ceg:['Prescribing & pharmacology'] },
      { t:'"Does HRT give you breast cancer?" — numbers that mean something', ty:'v', src:188, live:'hrt-breast-cancer-numbers', ceg:['Investigations & results'] },
      { t:'Unscheduled bleeding ON HRT — when to refer', ty:'t', live:'hrt-unscheduled-bleed', ceg:['Long-term conditions & cancer'] },
    ]},

  { f:'Periods, hormones & fertility', ic:'🌸', sp:'women', ceg:['Gender, reproductive & sexual health'],
    v:[
      { t:'No periods on desogestrel — reassurance vs the test first', ty:'t', src:140, live:'desogestrel-amenorrhoea' },
      { t:'Hirsutism and irregular cycles — PCOS named kindly (metabolic + fertility + mood)', ty:'v', src:138, live:'pcos-named' },
      { t:'Heavy periods + fibroids on scan — options ladder', ty:'t', src:172, live:'hmb-fibroids' },
      { t:'Recurrent stress fractures in a runner — RED-S and the eating screen', ty:'t', src:39, live:'red-s-stress-fractures', ceg:['Mental health & addiction'] },
      { t:'A breast lump at 34 — "too young / painless" myths and the NG12 2WW', ty:'v', live:'breast-lump-2ww', ceg:['Long-term conditions & cancer'] },
      { t:'“A different person before my period” — premenstrual dysphoric disorder, not “just PMS”', ty:'v', live:'pmdd', ceg:['Mental health & addiction'] },
    ]},

  { f:'Pregnancy choices & young people', ic:'🧭', sp:'sex', ceg:['Gender, reproductive & sexual health'],
    note:'Consent, competence and zero judgement — these stations mark your ethics under warmth.',
    v:[
      { t:'16-year-old seeking abortion — Gillick, support, no editorial', ty:'t', src:22, live:'teen-abortion-gillick', ceg:['Children & young people'] },
      { t:'Termination requested for fetal sex — the line the law draws', ty:'t', src:91, live:'sex-selective-termination', ceg:['Professional & ethical dilemmas'] },
      { t:'Pregnant at 15 — safeguarding alongside choice', ty:'t', src:180, live:'pregnant-at-15', ceg:['Health disadvantage & vulnerabilities'] },
      { t:'HIV test request from a frightened teenager — window periods + confidentiality', ty:'t', src:179, live:'hiv-test-teen' },
      { t:'Chlamydia swab positive — contact tracing, “has he cheated?”, fertility', ty:'t', src:143, live:'chlamydia-positive' },
      { t:'Pelvic pain + discharge — PID, treat empirically to protect fertility', ty:'t', live:'pid-young-woman' },
      { t:'First-episode genital herpes — early antivirals and the destigmatising conversation', ty:'v', live:'genital-herpes-first', ceg:['Gender, reproductive & sexual health'] },
      { t:'Emergency contraception at 16 — prompt access + the safeguarding screen', ty:'t', live:'emergency-contraception', ceg:['Children & young people'] },
    ]},

  { f:'Safeguarding & hidden harm', ic:'🛡️', sp:'ethics', ceg:['Health disadvantage & vulnerabilities'],
    note:'Three source stations folded in: the skill is identical — believe, document, engineer privacy, act proportionately.',
    v:[
      { t:'Bruising pattern in a young woman — the disclosure being tested', ty:'v', src:18, live:'bruising-da' },
      { t:'Worried teacher rings about a child — information without breach', ty:'t', src:43, live:'teacher-call', ceg:['Children & young people'] },
      { t:'Possible neglect of an older adult by a paid carer', ty:'t', src:88, live:'carer-neglect', ceg:['Older adults'] },
      { t:'Cousin at risk of FGM abroad — the mandatory duties', ty:'t', src:178, live:'fgm-abroad', ceg:['Ethnicity, culture & diversity'] },
      { t:'FGM identified at a smear — recording and reporting duties', ty:'t', src:117, live:'fgm-at-smear', ceg:['Ethnicity, culture & diversity'] },
    ]},

  { f:'Paediatric symptom clinic', ic:'🧒', sp:'paeds', ceg:['Children & young people'],
    v:[
      { t:'Sleep that won\u2019t come in a 4-year-old — and the exhausted mother', ty:'v', live:'sleep-paeds' },
      { t:'Ear discharge in a child — otitis media, when antibiotics earn their keep', ty:'t', src:3, live:'child-ear-discharge' },
      { t:'Constipation in a 5-year-old — disimpaction done properly', ty:'t', src:136, live:'child-constipation' },
      { t:'The limping child — refusing to weight-bear, septic arthritis until excluded', ty:'v', live:'limping-child', ceg:['Urgent & unscheduled care'] },
      { t:'After a first febrile convulsion — terrified parents, benign event', ty:'v', live:'febrile-convulsion' },
      { t:'Reflux in a baby — feeding, red flags, parental exhaustion', ty:'t', src:123, live:'infant-reflux' },
      { t:'Eczema flare — steroid phobia in the room', ty:'t', src:105, live:'eczema-steroid-phobia' },
      { t:'Acute rash in an unwell child — the glass-test conversation', ty:'t', src:83, live:'febrile-child-rash', ceg:['Urgent & unscheduled care'] },
      { t:'Fever in an infant under 3 months — the age rule, not phone-Calpol', ty:'t', live:'febrile-young-infant', ceg:['Urgent & unscheduled care'] },
      { t:'Faltering growth — feeding & social history before pathology', ty:'v', src:107, live:'faltering-growth' },
      { t:'Obesity in a 9-year-old — the conversation that doesn\u2019t shame', ty:'v', src:23, live:'child-obesity' },
      { t:'Purulent eye in a neonate — ophthalmia neonatorum, the sight-threat & maternal screen', ty:'t', src:184, live:'neonatal-sticky-eye', ceg:['Urgent & unscheduled care'] },
      { t:'Petechiae + bruising in a toddler — sepsis first, then the NG12 leukaemia pathway', ty:'v', live:'child-petechiae-leukaemia', ceg:['Urgent & unscheduled care'] },
      { t:'Behaviour concerns at school — ADHD pathway without pre-judging', ty:'t', src:165, live:'adhd-pathway' },
    ]},

  { f:'The struggling teenager', ic:'🎒', sp:'paeds', ceg:['Children & young people', 'Mental health & addiction'],
    v:[
      { t:'Acne and a mother wanting "something stronger"', ty:'v', live:'acne-teen' },
      { t:'Low mood in a 15-year-old — risk, school, and who gets told', ty:'v', src:84, live:'teen-selfharm' },
      { t:'Cannabis found in a bedroom — parent on the phone, patient absent', ty:'t', src:9, live:'teen-thirdparty-cannabis', ceg:['Professional & ethical dilemmas'] },
      { t:'First-episode psychosis signs — urgency without panic', ty:'t', src:53, live:'teen-first-psychosis', ceg:['Urgent & unscheduled care'] },
      { t:'Restriction and weight loss — the eating-disorder threshold (MEED)', ty:'t', src:125, live:'teen-eating-disorder', ceg:['Urgent & unscheduled care'] },
    ]},

  { f:'Mood, anxiety & the things behind them', ic:'🌧️', sp:'mh', ceg:['Mental health & addiction'],
    v:[
      { t:'Panic attacks demanding cardiology — the angry frequent attender', ty:'t', live:'angry-frequent' },
      { t:'Low mood in a young adult — first presentation + explicit suicide-risk assessment', ty:'v', src:96, live:'depression-first-risk' },
      { t:'Postnatal depression — risk to self and baby, and the “they’ll take my baby” fear', ty:'v', live:'postnatal-depression', ceg:['Gender, reproductive & sexual health'] },
      { t:'Health anxiety / GAD — the serial reassurance-seeker and the reassurance trap', ty:'v', live:'health-anxiety-gad' },
      { t:'Depression in a man with a shotgun licence — risk + the firearms duty', ty:'v', src:10, live:'depression-firearms', ceg:['Professional & ethical dilemmas'] },
      { t:'Military veteran who "doesn\u2019t do feelings" — PTSD routes (Op COURAGE)', ty:'t', src:26, live:'ptsd-veteran', ceg:['Health disadvantage & vulnerabilities'] },
      { t:'Flight anxiety wanting diazepam — the kind decline and the real alternative', ty:'t', src:170, live:'flight-anxiety-diazepam', ceg:['Prescribing & pharmacology'] },
      { t:'Sex difficult after past assault — trauma-informed pace', ty:'v', src:169, live:'sex-after-assault' },
      { t:'Gambling out of control — the debt behind the insomnia', ty:'v', src:151, live:'gambling-insomnia' },
      { t:'Repeated self-harm in crisis — EUPD, validation, the safety plan (not just “refer”)', ty:'v', live:'eupd-crisis', ceg:['Health disadvantage & vulnerabilities'] },
    ]},

  { f:'Dependence-forming requests', ic:'⛓️', sp:'mh', ceg:['Prescribing & pharmacology', 'Mental health & addiction'],
    note:'The drug changes; the negotiation doesn\u2019t. Replace, never just refuse.',
    v:[
      { t:'Zopiclone repeat after a fall at 76 — deprescribing as a project', ty:'v', live:'zopiclone-fall' },
      { t:'Diazepam request in chronic anxiety — the dependence fork', ty:'t', src:102, live:'diazepam-request' },
      { t:'Alcohol dependence in a bus driver — safe withdrawal + the DVLA duty', ty:'t', live:'alcohol-dvla-driver', ceg:['Professional & ethical dilemmas'] },
      { t:'Opioid escalation in chronic back pain — validate, don’t escalate, treat the whole person', ty:'v', src:163, live:'opioid-escalation' },
      { t:'New patient needs methadone continued today — verify and bridge, don’t prescribe blind', ty:'t', src:164, live:'methadone-bridging', ceg:['Health disadvantage & vulnerabilities'] },
      { t:'Just out of prison, all meds stopped — continuity as life-saving care', ty:'t', src:32, live:'prison-release-continuity', ceg:['Health disadvantage & vulnerabilities'] },
    ]},

  { f:'Severe mental illness, shared care', ic:'🧩', sp:'mh', ceg:['Mental health & addiction', 'Prescribing & pharmacology'],
    v:[
      { t:'Unwell on lithium — toxicity vs intercurrent illness', ty:'v', src:93, live:'lithium-toxicity', ceg:['Urgent & unscheduled care'] },
      { t:'Wants to restart their antipsychotic — bloods, ECG, shared-care rules', ty:'t', src:142, live:'antipsychotic-restart' },
      { t:'Post-ICU syndrome — the survivor nobody followed up', ty:'v', src:126, live:'post-icu-syndrome' },
    ]},

  { f:'Memory & behaviour change in later life', ic:'🧓', sp:'old', ceg:['Older adults'],
    v:[
      { t:'Confused grandmother on a video call — delirium first', ty:'v', live:'home-visit-confusion' },
      { t:'Son rings about mum\u2019s decline — third-party + memory pathway', ty:'t', src:148, live:'memory-son-call' },
      { t:'Memory screen requested by the patient herself — what testing means', ty:'v', src:162, live:'memory-self' },
      { t:'Night-time agitation in dementia — before reaching for sedation', ty:'t', src:186, live:'dementia-night' },
      { t:'Aggression in dementia — carer safety, triggers & realistic options', ty:'t', src:187, live:'dementia-aggression-carer', ceg:['Mental health & addiction'] },
      { t:'New confusion in a care-home resident — delirium, assess don\u2019t sedate', ty:'t', src:131, live:'carehome-delirium', ceg:['Urgent & unscheduled care'] },
      { t:'Gait, memory & continence decline — normal-pressure hydrocephalus, the treatable mimic', ty:'v', live:'normal-pressure-hydrocephalus' },
    ]},

  { f:'Falls, bones & frailty', ic:'🦴', sp:'old', ceg:['Older adults'],
    v:[
      { t:'Recurrent falls in an older woman — the multifactorial review', ty:'t', src:111, live:'recurrent-falls-review' },
      { t:'DEXA result — explaining a T-score and starting bisphosphonates', ty:'t', src:130, live:'dexa-bisphosphonate', ceg:['Investigations & results'] },
      { t:'Paget\u2019s disease on an X-ray taken for something else', ty:'v', src:173, live:'pagets-incidental' },
      { t:'The exhausted carer — burnout behind ‘it\u2019s my husband who\u2019s the patient’', ty:'v', live:'carer-strain', ceg:['Mental health & addiction'] },
    ]},

  { f:'Palliative care calls', ic:'🕯️', sp:'old', ceg:['Older adults'],
    note:'Telephone-heavy by nature: anticipatory prescribing, families, and honest uncertainty.',
    v:[
      { t:'Severe leg pain in a palliative patient — opioid titration + the DNACPR moment', ty:'t', src:17, live:'pall-pain' },
      { t:'Confusion and dehydration near the end — treat, or let be?', ty:'t', src:47, live:'pall-confusion' },
      { t:'Patient requests their own DNACPR — capacity and documentation', ty:'t', src:33, live:'dnacpr-request', ceg:['Professional & ethical dilemmas'] },
    ]},

  { f:'The abnormal blood result', ic:'🧪', sp:'haem', ceg:['Investigations & results'],
    note:'Results stations live or die on one skill: the number explained as a story, then the right next test.',
    v:[
      { t:'FIT 47 in a man who blames his piles — the 2WW reframe', ty:'t', live:'fit-positive' },
      { t:'Microcytic anaemia at 68 — iron isn\u2019t a diagnosis, find the bleed', ty:'v', src:29, live:'anaemia-ida', ceg:['Long-term conditions & cancer'] },
      { t:'B12 deficiency — injections, neurology, and why diet won\u2019t fix it', ty:'t', src:45, live:'b12-deficiency' },
      { t:'Isolated macrocytosis — the result that opens the alcohol door', ty:'t', src:144, live:'macrocytosis-result' },
      { t:'Low platelets in a young adult — watch, test or refer today?', ty:'t', src:35, live:'low-platelets-young' },
      { t:'Hypercalcaemia with a cancer history — the call you don\u2019t soften', ty:'v', src:11, live:'hypercalcaemia-ca', ceg:['Long-term conditions & cancer'] },
      { t:'Hyponatraemia on a new diuretic — drugs first, urgency by number', ty:'t', src:15, live:'hyponatraemia-diuretic', ceg:['Older adults'] },
      { t:'Back pain + abnormal bloods — the myeloma picture', ty:'t', src:4, live:'back-pain-myeloma', ceg:['Long-term conditions & cancer'] },
      { t:'Abnormal result in a blood donor — incidental findings etiquette', ty:'t', src:185, live:'blood-donor-anaemia', ceg:['Long-term conditions & cancer'] },
      { t:'Raised ESR/CRP — the non-specific marker and the GCA you don’t miss', ty:'v', live:'raised-inflammatory-markers', ceg:['Urgent & unscheduled care'] },
      { t:'Very high cholesterol in a fit young man — spotting familial hypercholesterolaemia', ty:'v', src:167, live:'familial-hypercholesterolaemia' },
      { t:'HbA1c 47 — pre-diabetes as a fork in the road (prevention, not “fine”)', ty:'t', src:171, live:'prediabetes-fork' },
    ]},

  { f:'Kidneys & inheritance', ic:'🫘', sp:'renal', ceg:['Long-term conditions & cancer'],
    v:[
      { t:'CKD stage 3 on a routine check — "disease" defused, filters protected', ty:'t', src:120, live:'ckd3-result' },
      { t:'Critical potassium recall — the emergency the patient feels fine through', ty:'t', live:'hyperkalaemia-recall', ceg:['Urgent & unscheduled care'] },
      { t:'Non-visible haematuria at 67 — “can’t see it” isn’t “nothing” (NG12)', ty:'v', live:'nonvisible-haematuria', ceg:['Long-term conditions & cancer'] },
      { t:'Polycystic kidney disease at 24 — screening the family, planning a life', ty:'v', src:12, live:'pkd-young', ceg:['Gender, reproductive & sexual health'] },
      { t:'Mildly raised calcium — PTH-led work-up before the cancer worry', ty:'v', src:133, live:'hypercalcaemia-workup', ceg:['Investigations & results'] },
      { t:'Vomiting + on an ACE inhibitor — acute kidney injury and the sick-day rules', ty:'v', live:'aki-sick-day', ceg:['Urgent & unscheduled care'] },
      { t:'Raised prolactin (amenorrhoea + galactorrhoea) — drug cause, MRI, fertility', ty:'v', live:'raised-prolactin', ceg:['Gender, reproductive & sexual health'] },
      { t:'Incidental thyroid nodule — normal TFTs don’t reassure (NG12)', ty:'v', live:'thyroid-nodule', ceg:['Long-term conditions & cancer'] },
    ]},

  { f:'Gut symptoms', ic:'🌯', sp:'gi', ceg:['New & undifferentiated presentations'],
    v:[
      { t:'Rectal bleeding at 52 — the FIT / 2WW reframe, not “just piles”', ty:'v', live:'rectal-bleeding-2ww', ceg:['Long-term conditions & cancer'] },
      { t:'Progressive dysphagia — urgent OGD at any age', ty:'v', live:'dysphagia-2ww', ceg:['Long-term conditions & cancer'] },
      { t:'Recurrent dyspepsia — test-and-treat vs the OGD thresholds (alarm features)', ty:'t', src:134, live:'dyspepsia-alarm', ceg:['Urgent & unscheduled care'] },
      { t:'Reflux that won\u2019t settle — PPI exit strategy', ty:'t', src:87, live:'reflux-ppi-exit' },
      { t:'Bowels never right since the gastroenteritis — IBS vs the FIT-shaped question', ty:'t', src:152, live:'bowel-habit-fit', ceg:['Long-term conditions & cancer'] },
      { t:'Lump in the throat — globus, reasoned reassurance with an exit (red flags excluded)', ty:'t', src:166, live:'globus-sensation' },
      { t:'UC flare on the phone — count the stools, decide today', ty:'v', src:159, live:'uc-flare-phone', ceg:['Urgent & unscheduled care'] },
      { t:'Rectal bleeding in an adult with a learning disability — adjusted consultation', ty:'t', src:16, live:'rectal-bleed-learning-disability', ceg:['Health disadvantage & vulnerabilities'] },
      { t:'Weight loss with normal first-line tests — what next, and how honestly?', ty:'t', src:85, live:'weight-loss-normal-tests', ceg:['Long-term conditions & cancer'] },
      { t:'Long "IBS" + iron-deficiency anaemia — the coeliac test done right', ty:'v', live:'coeliac-disease', ceg:['Investigations & results'] },
      { t:'Persistent bloating over 50 — the ovarian CA-125 / 2WW the "IBS" label hides', ty:'v', live:'ovarian-bloating', ceg:['Long-term conditions & cancer'] },
      { t:'Painless jaundice + weight loss — pancreatic/biliary 2WW, not "just the booze"', ty:'v', live:'painless-jaundice', ceg:['Long-term conditions & cancer'] },
      { t:'RUQ pain after fatty food — biliary colic, and when it becomes an emergency', ty:'t', live:'biliary-colic', ceg:['Urgent & unscheduled care'] },
    ]},

  { f:'Joints & muscles', ic:'🦵', sp:'msk', ceg:['New & undifferentiated presentations'],
    v:[
      { t:'Sore knee in a keen hill walker — OA without the X-ray', ty:'v', live:'knee-pain-walker' },
      { t:'Symmetrical swollen hands — early RA and the window of opportunity', ty:'v', live:'early-rheumatoid', ceg:['Long-term conditions & cancer'] },
      { t:'Hand numb at night — carpal tunnel, its associations, and the MS fear', ty:'t', live:'carpal-tunnel' },
      { t:'Knee X-ray says "bone on bone" — un-frightening the words, exercise as treatment', ty:'v', src:56, live:'knee-xray-degenerative', ceg:['Investigations & results'] },
      { t:'Hot swollen single joint — septic arthritis until proven otherwise', ty:'t', live:'septic-arthritis', ceg:['Urgent & unscheduled care'] },
      { t:'Shoulders and hips stiff every morning at 70 — PMR and the GCA warning', ty:'t', src:95, live:'pmr-gca', ceg:['Older adults'] },
      { t:'Gout flare wanting "the strong ones" — acute + the prevention pivot', ty:'t', src:175, live:'gout-flare' },
      { t:'Hot knee weeks after "food poisoning" — reactive arthritis + the hidden STI trigger', ty:'v', src:182, live:'reactive-arthritis', ceg:['Gender, reproductive & sexual health'] },
      { t:'Back pain in a young adult — mechanical vs inflammatory + cauda equina screen', ty:'v', src:183, live:'back-inflammatory' },
      { t:'An enlarging "fatty lump" on the thigh — soft-tissue sarcoma & the NG12 urgent ultrasound', ty:'v', live:'soft-tissue-sarcoma-lump', ceg:['Long-term conditions & cancer'] },
    ]},

  { f:'Skin & hair', ic:'🧴', sp:'derm', ceg:['New & undifferentiated presentations'],
    v:[
      { t:'Hair loss in a young woman — telogen effluvium, iron/thyroid, and what it means to her', ty:'v', src:8, live:'hair-loss-young-woman' },
      { t:'Male-pattern hair loss — what works, what\u2019s marketing', ty:'t', src:90, live:'male-pattern-hair-loss' },
      { t:'Hair coming out in handfuls post-partum — the shed, and the exhausted mother behind it', ty:'v', src:154, live:'postpartum-hair-loss', ceg:['Gender, reproductive & sexual health'] },
      { t:'Acne "ruining my life" — the ladder, isotretinoin & the mental-health assessment', ty:'v', src:156, live:'acne-psychological', ceg:['Mental health & addiction'] },
      { t:'Generalised itch, no rash — the systemic screen (and the lymphoma it hides)', ty:'v', src:145, live:'generalised-itch', ceg:['Long-term conditions & cancer'] },
      { t:'White patches spreading — vitiligo, the contagion myth, and the stigma that weighs most', ty:'v', src:128, live:'vitiligo-meaning', ceg:['Ethnicity, culture & diversity'] },
      { t:'Keloid scar in a young Black woman — options and honesty', ty:'t', src:119, live:'keloid-scar', ceg:['Ethnicity, culture & diversity'] },
      { t:'A lesion that won\u2019t heal — skin-cancer 2WW behind "just a sore"', ty:'v', src:20, live:'non-healing-lesion', ceg:['Long-term conditions & cancer'] },
      { t:'Painful forehead rash near the eye — shingles, the antiviral window + Hutchinson\u2019s sign', ty:'v', src:193, live:'shingles-ophthalmic', ceg:['Urgent & unscheduled care'] },
      { t:'Drenching night sweats in a young adult — the lymphoma B-symptom screen, not ‘just stress’', ty:'v', src:48, live:'night-sweats-young', ceg:['Long-term conditions & cancer'] },
      { t:'Fingers turning white in a young girl — Raynaud\u2019s vs connective tissue', ty:'t', src:101, live:'raynauds-young-girl', ceg:['Children & young people'] },
      { t:'Painful bruise-like lumps on the shins — erythema nodosum & the underlying-cause hunt (incl. CXR)', ty:'v', live:'erythema-nodosum', ceg:['New & undifferentiated presentations'] },
      { t:'Thick scaly plaques on the elbows — chronic plaque psoriasis, the ladder + the joints/heart it hides', ty:'v', live:'chronic-plaque-psoriasis' },
    ]},

  { f:'Skin lesions & the 2WW', ic:'🔬', sp:'derm', ceg:['Long-term conditions & cancer'],
    note:'The marks live in structured assessment (7-point checklist / ABCDE) and the decision to refer, not in a confident glance.',
    v:[
      { t:'Changing mole — suspected melanoma, the 7-point checklist', ty:'v', live:'melanoma-2ww' },
      { t:'Non-healing scaly lump on the ear — BCC/SCC and the sun-damage story', ty:'v', src:191, live:'ear-scaly-lump-scc' },
      { t:'Itchy widespread rash — eczema vs the systemic clue', ty:'t', src:105, live:'itchy-rash-systemic', xref:true },
    ]},

  { f:'ENT & eyes', ic:'👂', sp:'derm', ceg:['New & undifferentiated presentations'],
    v:[
      { t:'Sudden one-sided hearing loss — the emergency that isn’t wax', ty:'t', live:'sudden-hearing-loss', ceg:['Urgent & unscheduled care'] },
      { t:'Acute painful red eye in a lens wearer — keratitis, not conjunctivitis', ty:'t', live:'red-eye-triage', ceg:['Urgent & unscheduled care'] },
      { t:'Persistent mouth ulcer >3 weeks — the oral-cancer 2WW', ty:'v', live:'mouth-ulcer-2ww', ceg:['Long-term conditions & cancer'] },
      { t:'Asymmetric hearing loss + one-sided tinnitus — the acoustic-neuroma rule (not wax)', ty:'t', src:99, live:'asymmetric-hearing-loss', ceg:['Investigations & results'] },
      { t:'Persistent hoarseness in a smoker — the laryngeal-cancer 2WW', ty:'v', live:'persistent-hoarseness', ceg:['Long-term conditions & cancer'] },
      { t:'A persistent neck lump in a smoker — "just a gland" vs the head & neck 2WW', ty:'v', live:'neck-lump-2ww', ceg:['Long-term conditions & cancer'] },
      { t:'Blocked nose and sneezing all spring — rhinitis ladder', ty:'t', src:192, live:'rhinitis-ladder' },
      { t:'Unilateral nasal blockage + bleeding — the one-sided rule (sinonasal/NPC)', ty:'v', src:108, live:'unilateral-nasal', ceg:['Long-term conditions & cancer'] },
      { t:'Vertigo: see Collapse & dizziness family', ty:'t', xref:true },
      { t:'Sudden painless visual loss — the “curtain” that’s a same-day emergency', ty:'t', live:'sudden-visual-loss', ceg:['Urgent & unscheduled care'] },
      { t:'Red, painful eye with haloes + vomiting — acute angle-closure glaucoma', ty:'v', live:'acute-glaucoma', ceg:['Urgent & unscheduled care'] },
      { t:'Wavy lines + central blur — age-related macular degeneration (dry vs wet)', ty:'v', live:'amd-vision-loss', ceg:['Older adults'] },
      { t:'A toddler’s squint + a white reflex in photos — leukocoria & the NG12 retinoblastoma rule', ty:'v', live:'childhood-squint-leukocoria', ceg:['Children & young people'] },
    ]},

  { f:'Infection, fever & the antibiotic decision', ic:'\ud83e\udda0', sp:'id', ceg:['New & undifferentiated presentations'],
    note:'Recognise the pattern, treat the right thing, and hold the line on stewardship — the marks are in the decision, not the prescription.',
    v:[
      { t:'Spreading bull’s-eye rash after a tick — erythema migrans, treat now (don’t wait for serology)', ty:'v', live:'lyme-disease' },
      { t:'Sore throat + weeks of exhaustion — glandular fever, the amoxicillin rash & the sport rule', ty:'v', live:'glandular-fever', ceg:['Children & young people'] },
      { t:'“Just a chest infection” at 71 — community pneumonia, CRB-65 and who to admit', ty:'v', live:'community-pneumonia', ceg:['Older adults'] },
      { t:'“I always get antibiotics for my throat” — FeverPAIN/Centor & the stewardship negotiation', ty:'v', live:'sore-throat-stewardship', ceg:['Prescribing & pharmacology'] },
    ]},

  { f:'Fatigue & the tired patient', ic:'🔋', sp:'haem', ceg:['New & undifferentiated presentations'],
    note:'The classic undifferentiated station: structure beats shotgun bloods.',
    v:[
      { t:'Persistent fatigue in a young adult — the structured screen + the life behind it', ty:'v', src:28, live:'persistent-fatigue-young' },
      { t:'Tiredness in a young man (testosterone myths): see Men\u2019s health family', ty:'v', xref:true },
      { t:'Fatigue with abnormal LFTs/vitamin D — interpreting the panel', ty:'v', src:60, live:'fatigue-lfts-vitd', ceg:['Investigations & results'] },
    ]},

  { f:'Prevention, screening & public health', ic:'\ud83d\udee1\ufe0f', sp:'prev', ceg:['Population & planetary health'],
    note:'Screening and prevention stations: explore the belief, give honest balanced information, respect autonomy — don’t lecture.',
    v:[
      { t:'Parent refusing MMR — explore the fear, the evidence, and the door left open', ty:'v', live:'vaccine-hesitancy-mmr', ceg:['Children & young people'] },
      { t:'Abnormal cervical screening (high-risk HPV) — what the result means, without the shame', ty:'v', live:'abnormal-cervical-screening', ceg:['Gender, reproductive & sexual health'] },
      { t:'Gestational diabetes diagnosed on the OGTT — the antenatal conversation that isn’t “your fault”', ty:'v', live:'gestational-diabetes', ceg:['Gender, reproductive & sexual health'] },
    ]},

  { f:'Professional dilemmas', ic:'⚖️', sp:'ethics', ceg:['Professional & ethical dilemmas'],
    note:'No "right answer" — the examiner marks your reasoning said out loud.',
    v:[
      { t:'Duty of candour — your practice missed a result; tell them everything', ty:'t', src:25, live:'angry-apology' },
      { t:'Patient complains about your colleague — neither defend nor pile on', ty:'t', src:112, live:'angry-complaint' },
      { t:'"Don\u2019t put it in my notes" — confidentiality, records & the safety-critical job', ty:'t', src:150, live:'dont-record-this' },
      { t:'Request to amend the medical record — correction vs erasure', ty:'t', src:66, live:'amend-medical-record' },
      { t:'Sick note the assessment doesn\u2019t support — the honest version', ty:'v', src:157, live:'sicknote-unsupported' },
      { t:'Daughter crushing tablets into mum\u2019s food — covert medication law + carer strain', ty:'t', src:161, live:'covert-medication', ceg:['Older adults'] },
      { t:'Medication error reached the patient — candour + system fix', ty:'t', src:132, live:'medication-error-candour', ceg:['Prescribing & pharmacology'] },
      { t:'Methotrexate early request — the monitoring gate', ty:'v', src:168, live:'methotrexate-early-request', ceg:['Prescribing & pharmacology'] },
    ]},

  { f:'Identity, culture & access', ic:'🌍', sp:'ethics', ceg:['Ethnicity, culture & diversity', 'Health disadvantage & vulnerabilities'],
    v:[
      { t:'Transgender patient new to the practice — bridging prescription, risk & respect', ty:'t', src:55, live:'trans-bridging' },
      { t:'Family interpreting for a patient — why a professional interpreter (and the safeguarding it unlocks)', ty:'t', live:'interpreter-consultation', ceg:['Ethnicity, culture & diversity'] },
      { t:'Asylum seeker asking for sleeping tablets — trauma, entitlement & destitution', ty:'v', live:'asylum-destitution' },
      { t:'Behaviour change in autism/LD — diagnostic overshadowing & reasonable adjustments', ty:'v', live:'learning-disability-check' },
      { t:'Allergic reaction after eating out — anaphylaxis plan + EpiPen teaching', ty:'t', src:89, live:'anaphylaxis-epipen', ceg:['Urgent & unscheduled care'] },
      { t:'Weight management consultation — what works in 2026, said kindly', ty:'v', src:149, live:'weight-management-2026', ceg:['Long-term conditions & cancer'] },
    ]},

  { f:'Acute & emergency recognition', ic:'🚨', sp:'urgent', ceg:['Urgent & unscheduled care'],
    note:'Spot the emergency hiding in an ordinary presentation — then act, not investigate.',
    v:[
      { t:'New drug, spreading blisters + raw mouth/eyes — Stevens-Johnson/TEN, stop & admit', ty:'v', live:'sjs-ten', ceg:['Prescribing & pharmacology'] },
      { t:'6 days of fever, red eyes, cracked lips in a toddler — Kawasaki & the coronary risk', ty:'v', live:'kawasaki-disease', ceg:['Children & young people'] },
      { t:'Whole family (and the dog) headachey at home — carbon monoxide poisoning', ty:'t', live:'carbon-monoxide' },
      { t:'Keep getting nosebleeds on blood thinners — first-aid, anticoagulation & when to worry', ty:'v', live:'recurrent-epistaxis', ceg:['Prescribing & pharmacology'] },
    ]},

  { f:'Skin you must name correctly', ic:'🩹', sp:'derm', ceg:['New & undifferentiated presentations'],
    note:'Pattern-recognition stations: name it, treat it, and reassure — or refer.',
    v:[
      { t:'Painful red itchy ear with discharge — otitis externa & the malignant-OE flag', ty:'v', live:'otitis-externa' },
      { t:'Itchy purple wrist bumps + white oral streaks — lichen planus (the 6 Ps)', ty:'v', live:'lichen-planus' },
      { t:'Herald patch then a Christmas-tree rash — pityriasis rosea (+ the syphilis caveat)', ty:'v', live:'pityriasis-rosea' },
      { t:'Pearly umbilicated bumps in a child — molluscum, reassure & avoid harm', ty:'v', live:'molluscum-contagiosum', ceg:['Children & young people'] },
      { t:'School "nits" letter — head lice: detection combing & treat only live lice', ty:'v', live:'head-lice', ceg:['Children & young people'] },
      { t:'Dripping hands and armpits — primary focal hyperhidrosis, stepwise treatment', ty:'v', live:'hyperhidrosis-primary' },
      { t:'Itchy weals for months, no trigger — chronic urticaria & the angioedema safety-net', ty:'v', live:'chronic-urticaria', ceg:['Prescribing & pharmacology'] },
    ]},

  { f:'MSK & men’s lower-genital', ic:'🦴', sp:'msk', ceg:['New & undifferentiated presentations'],
    note:'Common conditions named precisely — and the embarrassing ones handled with dignity.',
    v:[
      { t:'New-mother thumb-side wrist agony — de Quervain’s & the Finkelstein test', ty:'v', live:'de-quervains', ceg:['Gender, reproductive & sexual health'] },
      { t:'First-step heel pain easing through the day — plantar fasciitis, conservative care', ty:'v', live:'plantar-fasciitis' },
      { t:'Sore foreskin & tightening — balanitis/phimosis, check glucose & the BXO flag', ty:'v', live:'balanitis-phimosis', ceg:['Long-term conditions & cancer'] },
      { t:'Painful leaking swelling in the natal cleft — pilonidal abscess, drain & refer', ty:'v', live:'pilonidal-sinus', ceg:['Urgent & unscheduled care'] },
      { t:'Stiff painful shoulder, can’t reach behind — frozen shoulder, phases & the diabetes link', ty:'v', live:'frozen-shoulder', ceg:['Long-term conditions & cancer'] },
      { t:'“Like passing glass” + bright blood — anal fissure, soften the stool', ty:'v', live:'anal-fissure' },
    ]},

  { f:'Don’t-miss diagnoses & paeds', ic:'🔍', sp:'general', ceg:['New & undifferentiated presentations'],
    note:'The zebra you must think of — and the common paediatric calls done well.',
    v:[
      { t:'Cyclical vomiting only relieved by hot showers — cannabis hyperemesis syndrome', ty:'v', live:'cannabis-hyperemesis', ceg:['Mental health & addiction'] },
      { t:'Inconsolable evening crying, thriving baby — colic, red-flag exclusion & parent support', ty:'v', live:'infantile-colic', ceg:['Children & young people'] },
      { t:'Breast development at 6 — precocious puberty, assess & refer', ty:'v', live:'precocious-puberty', ceg:['Children & young people'] },
      { t:'Falls asleep mid-sentence, knees buckle when laughing — narcolepsy & cataplexy', ty:'v', live:'narcolepsy' },
      { t:'Paroxysmal headache, palpitations & sweats with labile BP — phaeochromocytoma', ty:'v', live:'phaeochromocytoma', ceg:['Long-term conditions & cancer'] },
      { t:'Young adult, abnormal LFTs + tremor + mood change — think Wilson’s disease', ty:'v', live:'wilsons-disease', ceg:['Mental health & addiction'] },
      { t:'Child with blinking, shrugging & throat-clearing — tics/Tourette’s, reassure & screen', ty:'v', live:'tics-tourettes', ceg:['Children & young people'] },
      { t:'Empty scrotum at the baby check — undescended testis: examine, refer & the orchidopexy window', ty:'v', live:'undescended-testis', ceg:['Children & young people'] },
      { t:'Personality change & reckless spending at 58 — frontotemporal (Pick’s) dementia, not “just stress”', ty:'v', live:'frontotemporal-dementia', ceg:['Older adults'] },
      { t:'Recurrent tummy-pain attacks with pallor, well between — abdominal migraine in a child', ty:'t', live:'abdominal-migraine', ceg:['Children & young people'] },
    ]},

  { f:'Identity, adolescence & dignity', ic:'🤝', sp:'general', ceg:['Health disadvantage & vulnerabilities'],
    note:'Consultations where respect, confidentiality and safeguarding are the skill being tested.',
    v:[
      { t:'Trans man self-sourcing hormones amid a long wait — affirming care, shared care & bridging', ty:'v', live:'transgender-health', ceg:['Gender, reproductive & sexual health'] },
      { t:'Vapes & pills found in a 15-year-old’s bag — HEADSS, confidentiality & county-lines safeguarding', ty:'v', live:'teen-substance-misuse', ceg:['Children & young people'] },
      { t:'“Antidepressants” that mask the real issue — premature ejaculation, the hidden agenda & treatment', ty:'v', live:'premature-ejaculation', ceg:['Gender, reproductive & sexual health'] },
      { t:'“Will you help me end my life?” — assisted-dying request, law, exploration & non-abandonment', ty:'v', live:'assisted-dying-request', ceg:['End-of-life & palliative care'] },
    ]},

  { f:'More MSK, paeds & sexual health', ic:'🩻', sp:'msk', ceg:['New & undifferentiated presentations'],
    note:'Common presentations named precisely and managed conservatively or compassionately.',
    v:[
      { t:'Painful outer elbow, hurts to grip — tennis elbow (lateral epicondylitis), conservative care', ty:'v', live:'tennis-elbow' },
      { t:'Itchy bottom at night + tiny white threads — threadworm, treat the whole household', ty:'v', live:'threadworm', ceg:['Children & young people'] },
    ]},

  { f:'Infection, travel & occupational', ic:'🦟', sp:'urgent', ceg:['Urgent & unscheduled care'],
    note:'The returning-traveller approach, sharps exposure, and the long shadow of infection.',
    v:[
      { t:'Fever back from Thailand — exclude malaria first, then dengue & its warning signs', ty:'t', live:'dengue-fever' },
      { t:'Jabbed by a used needle at work — first aid, risk assessment & time-critical HIV PEP', ty:'v', live:'needlestick-injury', ceg:['Professionalism & ethics'] },
      { t:'Exhausted & breathless months after COVID — long COVID, exclude red flags, pace & rehab', ty:'v', live:'post-covid-syndrome' },
      { t:'Itchy, flaky, soggy toes — athlete’s foot, the nail reservoir & the diabetic cellulitis caveat', ty:'v', live:'tinea-pedis' },
    ]},

  { f:'More MSK & chest-wall', ic:'🦵', sp:'msk', ceg:['New & undifferentiated presentations'],
    note:'Tendons, joints, ribs and hypermobility — recognised precisely and the must-not-miss flagged.',
    v:[
      { t:'Stiff painful heel-cord on starting a run — Achilles tendinopathy & the rupture caveat', ty:'v', live:'achilles-tendinopathy' },
      { t:'Twisted knee that locks & catches — meniscal injury, Ottawa rules & the true locked knee', ty:'v', live:'meniscal-injury', ceg:['Urgent & unscheduled care'] },
      { t:'Sharp chest pain, scared it’s the heart — costochondritis after excluding the serious', ty:'v', live:'costochondritis', ceg:['Urgent & unscheduled care'] },
      { t:'Bendy joints that dislocate, easy bruising, fatigue — hypermobility / hEDS, holistic care', ty:'v', live:'hypermobility-eds' },
    ]},

  { f:'Hereditary, haematology & prescribing safety', ic:'🧬', sp:'general', ceg:['Long-term conditions & cancer'],
    note:'Inherited risk, an incidental cancer label handled honestly, and harms we cause as prescribers.',
    v:[
      { t:'Young, strong family bowel-cancer history — FAP/Lynch, inheritance, testing & surveillance', ty:'v', live:'familial-adenomatous-polyposis', ceg:['Gender, reproductive & sexual health'] },
      { t:'Incidental raised lymphocytes & the word “leukaemia” — CLL, watch-and-wait, honest reassurance', ty:'v', live:'cll-lymphocytosis', ceg:['Investigations & results'] },
      { t:'Indigestion since the new tablets — drug-induced dyspepsia: review the meds, not just a PPI', ty:'v', live:'iatrogenic-dyspepsia', ceg:['Prescribing & pharmacology'] },
      { t:'Spine fracture on long-term steroids — glucocorticoid-induced osteoporosis & candour', ty:'v', live:'steroid-fracture-osteoporosis', ceg:['Prescribing & pharmacology'] },
    ]},

  { f:'Paeds, ENT, allergy & endocrine one-offs', ic:'🧒', sp:'general', ceg:['New & undifferentiated presentations'],
    note:'Common presentations done well — reassurance, the right cause, and the safe answer.',
    v:[
      { t:'Fussy toddler eating a handful of foods — picky eating, confirm thriving & low-pressure advice', ty:'v', live:'picky-eating', ceg:['Children & young people'] },
      { t:'Persistent bad breath mouthwash won’t fix — halitosis, the oral-first approach', ty:'v', live:'halitosis' },
      { t:'Itching & swelling from condoms & rubber gloves — latex allergy, avoidance & anaphylaxis plan', ty:'v', live:'latex-allergy', ceg:['Gender, reproductive & sexual health'] },
      { t:'Crawly restless legs at 30 weeks pregnant — RLS, check the iron, pregnancy-safe care', ty:'v', live:'restless-legs-pregnancy', ceg:['Gender, reproductive & sexual health'] },
    ]},

  { f:'Safeguarding, ethics & endocrine emergencies', ic:'🛡️', sp:'ethics', ceg:['Professionalism & ethics'],
    note:'The one-chance disclosure, professional boundaries, and the sugar that gives the diagnosis away.',
    v:[
      { t:'“They’re taking me abroad to marry me off” — forced marriage, the one-chance rule, no mediation', ty:'v', live:'forced-marriage', ceg:['Health disadvantage & vulnerabilities'] },
      { t:'A colleague wanting an off-the-record prescription — staff as a patient, boundaries & records', ty:'v', live:'staff-as-patient', ceg:['Prescribing & pharmacology'] },
      { t:'Always hungry & thirsty, weeing lots, losing weight — new diabetes, exclude DKA', ty:'v', live:'polyphagia-diabetes', ceg:['Urgent & unscheduled care'] },
      { t:'Left-sided cramps & erratic bowels — diverticular disease, but don’t miss bowel cancer', ty:'v', live:'diverticular-disease', ceg:['Older adults'] },
    ]},
];
