/* ============================================================
   Reasoning GP — Case Library batch 57:
   "Neurology one-offs" (filling 4 live-linked gaps)
   Dizzy spells in a teenager (PoTS, anxiety, school impact);
   intermittent diplopia in a young adult (MS vs myasthenia vs
   urgent causes); epilepsy with missed pills + a driving licence
   (DVLA duty); and epilepsy + a positive pregnancy test (the
   valproate rules / pregnancy-prevention programme). No NG12
   cancer pathway genuinely applies; none invented.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases56.js.
   ============================================================ */

(function(){

  /* ============ 200. F2F — Dizzy spells in a teenager: PoTS, anxiety, and school impact ============ */
  const c200 = {
    id:'dizzy-teen-pots', title:'"I go dizzy and my heart races every time I stand up \u2014 school think I\u2019m making it up"', type:'video', duration:12,
    meta:{ age:16, sex:'F', setting:'Video consultation \u2014 a teenager with recurrent dizziness on standing, mother present.', system:'Cardiology / Adolescent \u2014 postural dizziness: PoTS vs anxiety, and the school impact' },
    brief:'Mia Calloway, 16, gets light-headed, sometimes near-faints, with palpitations and "brain fog" whenever she STANDS UP or stands for a while; symptoms ease on sitting/lying. She is exhausted, missing school, and feels dismissed ("teachers think I\u2019m attention-seeking"). The examinable task is to take an adolescent\u2019s disabling symptoms SERIOUSLY, work the differential for postural dizziness \u2014 POSTURAL TACHYCARDIA SYNDROME (PoTS: sustained heart-rate rise \u226530\u201340 bpm on standing without a significant BP drop, with orthostatic symptoms), orthostatic/postural HYPOTENSION, vasovagal syncope, ANAEMIA, dehydration, thyroid, ARRHYTHMIA, and anxiety (a contributor, not a dismissal) \u2014 assess with a careful history and ACTIVE STANDING (lying-to-standing HR and BP) test, basic tests (FBC, ferritin, TFTs, glucose, ECG; red-flags screen for cardiac syncope/family sudden death), explain PoTS and its non-drug-first MANAGEMENT (fluid and salt intake, gradual position change, compression, reconditioning exercise, avoiding triggers), validate the very real SCHOOL/functional impact (liaison, adjustments) and the psychological toll, and refer if needed. The skill is NOT dismissing a teenager as anxious/attention-seeking while still recognising anxiety\u2019s role. No NG12 cancer link.',
    script:{
      opening:'(Mia, tired; mother beside her.) "Every time I stand up I go dizzy, my heart pounds and races, and I get this fog where I can\u2019t think. Sometimes I nearly faint. It\u2019s wrecking school \u2014 I keep having to sit down or go home, and I heard a teacher say I\u2019m just attention-seeking. I\u2019m not making it up. Mum had to push to get me seen."',
      facts:[
        { topic:'Take the teenager seriously \u2014 don\u2019t default to "anxiety"', text:'CORE \u2014 disabling postural symptoms in a teenager are real and deserve a proper work-up; defaulting to "it\u2019s just anxiety/attention-seeking" (as her school has) is both a clinical error and damaging. Anxiety may COEXIST or contribute, but it is not a substitute for assessment. Validate her experience and the effort it took to be seen.' },
        { topic:'Recognise the PoTS picture', text:'POSTURAL TACHYCARDIA SYNDROME (PoTS) is characterised by orthostatic SYMPTOMS (dizziness, palpitations, brain fog, fatigue, near-syncope) on standing, with a sustained HEART-RATE RISE of \u226530 bpm (\u226540 bpm in adolescents) within 10 minutes of standing, WITHOUT a significant postural BP drop. It is more common in young women, often post-viral or with hypermobility, and is genuinely disabling. Her standing-triggered palpitations, fog and near-faints fit \u2014 assess for it specifically.' },
        { topic:'Work the differential', text:'Differential for postural dizziness/near-syncope in a teen: PoTS; orthostatic (postural) HYPOTENSION; vasovagal syncope; ANAEMIA/iron deficiency; dehydration; THYROID disease; ARRHYTHMIA or structural/inherited cardiac disease (the must-not-miss \u2014 screen exertional syncope, palpitations, chest pain, FAMILY HISTORY of sudden cardiac death/inherited conditions); hypoglycaemia; medication; and anxiety as a contributor. Tailor assessment accordingly.' },
        { topic:'Assess: active stand + basic tests', text:'Perform an ACTIVE STANDING test \u2014 measure HR and BP lying/sitting then on standing at intervals (looking for the sustained \u226530\u201340 bpm rise of PoTS, or a postural BP drop). Examine, and arrange basic tests: FBC and ferritin (anaemia), TFTs, glucose, and an ECG (screen arrhythmia/QT/structural pointers). Red flags (exertional/lying syncope, palpitations with collapse, family sudden death, abnormal ECG) warrant cardiology referral.' },
        { topic:'Management & validation', text:'PoTS management is NON-DRUG-FIRST: increase FLUID (e.g. ~2\u20133 L/day) and SALT intake, rise slowly/avoid prolonged standing, physical counter-manoeuvres, COMPRESSION garments, graded RECONDITIONING exercise (often recumbent-based initially), good sleep, avoiding triggers (heat, big carb meals, alcohol); medication (e.g. beta-blocker/ivabradine/fludrocortisone) is specialist-initiated if needed. Crucially, VALIDATE the school/functional impact \u2014 provide a letter and advocate for reasonable ADJUSTMENTS (water access, seating, rest, flexibility) \u2014 and address the psychological toll and any coexisting anxiety supportively. Refer to PoTS/cardiology/paediatrics as appropriate.' },
        { topic:'The communication core', text:'COMMUNICATION \u2014 a teenager who has been dismissed needs to be BELIEVED and engaged directly (not just via her mother), her symptoms named and explained, and the school impact taken seriously with concrete advocacy. Recognise anxiety\u2019s possible role without using it to dismiss her. The hidden agenda is a wish to be believed and helped, and for school to stop treating her as attention-seeking.' },
      ],
      ice:{
        ideas:'Something is genuinely wrong with how she responds to standing; she fears not being believed.',
        concerns:'Being dismissed as attention-seeking/anxious; the impact on school and exams; exhaustion; not knowing what it is.',
        expectations:'To be believed and helped, and for school to take it seriously. What she needs: a proper work-up (active stand, basic tests), recognition of PoTS, non-drug-first management, school advocacy, and supportive handling of any anxiety \u2014 not dismissal.'
      },
      cues:['Dizziness + palpitations + brain fog + near-faint on STANDING, easing on sitting, in a teenage girl \u2014 assess for PoTS (sustained HR rise \u226540 bpm, no BP drop).','Differential: postural hypotension, vasovagal, anaemia, thyroid, ARRHYTHMIA/inherited cardiac (screen exertional syncope + family sudden death) \u2014 active stand + FBC/ferritin/TFTs/ECG.','"School think I\u2019m attention-seeking" \u2014 believe her, validate the impact, advocate for adjustments; anxiety may contribute but isn\u2019t a dismissal.']
    },
    checkpoints:[
      { dom:'tasks', text:'Takes the teenager\u2019s disabling symptoms SERIOUSLY and does NOT default to "anxiety/attention-seeking" \u2014 recognising anxiety may coexist but is not a substitute for assessment' },
      { dom:'tasks', text:'Recognises the PoTS picture (orthostatic dizziness/palpitations/brain fog/near-syncope on standing with a sustained HR rise \u226530\u201340 bpm and no significant BP drop) and assesses for it specifically' },
      { dom:'tasks', text:'Works the DIFFERENTIAL \u2014 postural hypotension, vasovagal syncope, anaemia, thyroid, arrhythmia/inherited cardiac disease (screening exertional/lying syncope, palpitations, FAMILY HISTORY of sudden death), hypoglycaemia, medication, anxiety' },
      { dom:'tasks', text:'Assesses with an ACTIVE STANDING test (lying/standing HR and BP) and basic tests (FBC, ferritin, TFTs, glucose, ECG), and refers to cardiology for red flags' },
      { dom:'tasks', text:'Gives NON-DRUG-FIRST PoTS management (increased fluid and salt, gradual position change, compression, graded reconditioning, trigger avoidance) and knows medication is specialist-initiated; refers to PoTS/cardiology/paediatrics as appropriate' },
      { dom:'rto',   text:'BELIEVES and engages the teenager DIRECTLY, validates the very real school/functional and psychological impact, and advocates concretely (letter, reasonable adjustments) rather than dismissing her' },
      { dom:'rto',   text:'Explains PoTS and the plan in accessible terms, addresses any coexisting anxiety supportively without using it to dismiss, and checks understanding' },
      { dom:'gs',    text:'Safety-nets and follows up: cardiac red flags warranting urgent review, results and referral, school liaison/adjustments, management plan with review, and support for the functional/psychological impact \u2014 a proper work-up, not dismissal as attention-seeking' },
    ],
    worked:[
      { lbl:'Believe her first', txt:'(To Mia directly.) "I want to say this clearly: I believe you, and what you\u2019re describing is real \u2014 it is NOT attention-seeking. Standing up shouldn\u2019t make you feel like that, and I\u2019m going to take it seriously and work out why."' },
      { lbl:'Explain the likely picture', txt:'"There\u2019s a condition that fits this really well \u2014 PoTS \u2014 where, when you stand, your heart races too much and you get dizzy, foggy and exhausted, even though your blood pressure mostly holds. It\u2019s common in young women and it\u2019s genuinely disabling, not in your head."' },
      { lbl:'Assess properly', txt:'"Let me check it: I\u2019ll measure your heart rate and blood pressure lying down and then standing for a few minutes. I\u2019ll also do some bloods \u2014 your iron and thyroid \u2014 and a heart tracing. Quick question: do you ever faint during exercise, or has anyone in the family died suddenly young?"' },
      { lbl:'Management she can own', txt:'"A lot of the treatment is things you control: drinking plenty \u2014 around two to three litres a day \u2014 more salt in your diet, standing up slowly, compression socks, and gradually building up exercise. These genuinely help. If needed, the specialists can add medication."' },
      { lbl:'Advocate for school', txt:'"School absolutely should not be calling this attention-seeking. I\u2019ll write a letter explaining it\u2019s a real medical condition and ask for adjustments \u2014 water at your desk, being allowed to sit, rest breaks, flexibility around exams. You shouldn\u2019t have to fight to be believed."' },
      { lbl:'Support + safety-net', txt:'"This has clearly worn you down, and it\u2019s okay if it\u2019s affected your mood too \u2014 we can support that as well, alongside, not instead of. If you faint without warning, faint during exercise, or get chest pain, tell us urgently. I\u2019ll refer you and we\u2019ll review with the results."' },
    ],
    learning:'Disabling postural symptoms in a teenager must be taken SERIOUSLY and worked up \u2014 defaulting to "it\u2019s just anxiety/attention-seeking" (as the school here has) is both a clinical error and damaging; anxiety may coexist or contribute but is not a substitute for assessment. Recognise the POSTURAL TACHYCARDIA SYNDROME (PoTS) picture: orthostatic symptoms (dizziness, palpitations, brain fog, fatigue, near-syncope) on standing, with a sustained heart-rate rise of \u226530 bpm (\u226540 bpm in adolescents) within 10 minutes of standing and WITHOUT a significant postural BP drop \u2014 commoner in young women, often post-viral or with hypermobility, and genuinely disabling. Work the differential (postural hypotension, vasovagal syncope, anaemia/iron deficiency, thyroid disease, and the must-not-miss arrhythmia/inherited cardiac disease \u2014 screen exertional/lying syncope, palpitations with collapse, and FAMILY HISTORY of sudden cardiac death \u2014 plus hypoglycaemia, medication and anxiety). Assess with an ACTIVE STANDING test (lying/standing HR and BP at intervals) and basic tests (FBC, ferritin, TFTs, glucose, ECG), referring to cardiology for red flags. PoTS management is NON-DRUG-FIRST \u2014 increased fluid (~2\u20133 L/day) and salt, gradual position change, physical counter-manoeuvres, compression garments, graded reconditioning exercise, sleep and trigger avoidance \u2014 with specialist-initiated medication if needed. Crucially, BELIEVE and engage the teenager directly, VALIDATE the real school/functional and psychological impact, and ADVOCATE concretely (a letter and reasonable adjustments \u2014 water, seating, rest, exam flexibility), addressing any coexisting anxiety supportively without using it to dismiss her, and refer appropriately. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'PoTS diagnosis & management \u00b7 orthostatic intolerance \u00b7 syncope red flags (cardiac/family sudden death) \u00b7 adolescent advocacy',
      points:[
        { h:'Take it seriously', t:'Disabling postural symptoms in a teenager warrant work-up. "Anxiety/attention-seeking" is not a diagnosis-by-default; anxiety may coexist but does not replace assessment.' },
        { h:'PoTS criteria', t:'Orthostatic symptoms on standing with sustained HR rise \u226530 bpm (\u226540 in adolescents) within 10 minutes, without significant BP drop. Commoner in young women, often post-viral/hypermobility.' },
        { h:'Differential', t:'Postural hypotension, vasovagal syncope, anaemia/iron deficiency, thyroid disease, arrhythmia/inherited cardiac disease (screen exertional syncope, palpitations, family sudden death), hypoglycaemia, medication, anxiety.' },
        { h:'Assessment', t:'Active standing test (lying/standing HR and BP); FBC, ferritin, TFTs, glucose, ECG. Red flags (exertional/lying syncope, palpitations with collapse, family sudden death, abnormal ECG) \u2192 cardiology.' },
        { h:'Non-drug-first management', t:'Increased fluid (~2\u20133 L/day) and salt, gradual position change, counter-manoeuvres, compression, graded reconditioning exercise, sleep, trigger avoidance. Medication (beta-blocker/ivabradine/fludrocortisone) is specialist-initiated.' },
        { h:'Validate & advocate', t:'Believe and engage the teenager directly; validate school/functional and psychological impact; provide a letter and request reasonable adjustments (water, seating, rest, exam flexibility); support coexisting anxiety without dismissing.' },
        { h:'Never do', t:'Never dismiss a teenager as attention-seeking/anxious without assessment; never skip the active stand and cardiac red-flag screen; never ignore family sudden death/exertional syncope; never fail to advocate for school adjustments.' },
        { h:'Safety-net & follow-up', t:'Cardiac red flags warranting urgent review; results and referral; school liaison/adjustments; management plan with review; psychological support alongside.' }
      ]
    }
  };

  /* ============ 201. VIDEO — Intermittent double vision in a young adult: MS, myasthenia, urgency ============ */
  const c201 = {
    id:'diplopia-ms-myasthenia', title:'"I keep getting double vision that comes and goes \u2014 it\u2019s probably just tiredness, right?"', type:'video', duration:12,
    meta:{ age:29, sex:'F', setting:'Video consultation \u2014 intermittent binocular diplopia in a young adult.', system:'Neurology / Ophthalmology \u2014 diplopia: localising, red flags & urgency' },
    brief:'Miss Erin Doyle, 29, reports episodes of DOUBLE VISION over a few weeks, sometimes with eye/limb fatigue and a recent episode of blurred/painful vision in one eye; she attributes it to tiredness/screens. The examinable task is the structured approach to DIPLOPIA in a young adult: first distinguish MONOCULAR (resolves covering one eye \u2014 usually ocular/refractive) from BINOCULAR diplopia (resolves only when either eye is covered \u2014 implies a neurological/neuromuscular cause and is the concerning type); then localise and work the differential \u2014 MULTIPLE SCLEROSIS (young woman, optic neuritis \u2014 painful monocular visual loss, internuclear ophthalmoplegia, other CNS episodes separated in time/space), MYASTHENIA GRAVIS (FATIGABLE diplopia/ptosis worse at end of day, bulbar/limb fatigue), cranial nerve palsies (III/IV/VI \u2014 and the RED FLAG of a painful III palsy with a fixed dilated pupil = posterior communicating artery ANEURYSM, a neurosurgical emergency), thyroid eye disease, and raised intracranial pressure. The skill is recognising the SERIOUS/urgent causes and red flags, examining (eye movements, pupils, ptosis, fatigability, fundi), and referring with appropriate URGENCY (urgent neurology/ophthalmology; same-day/emergency for painful pupil-involving III palsy, suspected raised ICP, or myasthenic features risking bulbar/respiratory compromise) \u2014 NOT dismissing recurrent binocular diplopia as "tiredness". No NG12 cancer link (though a mass/raised ICP would prompt urgent neuro-imaging).',
    script:{
      opening:'"This is probably nothing \u2014 I\u2019ve been getting double vision on and off for a few weeks, usually when I\u2019m tired or after a lot of screen time. It comes and goes. Oh, and a couple of weeks ago I had some blurry, achy vision in my left eye for a few days. I just figured I needed more sleep. Can you reassure me it\u2019s just eye strain?"',
      facts:[
        { topic:'Monocular vs binocular \u2014 the first split', text:'CORE \u2014 the first step in diplopia is to ask: does it go away when you COVER ONE EYE? MONOCULAR diplopia (persists with one eye, resolves only with that eye covered) is usually an OCULAR/refractive/lens problem \u2014 generally less sinister. BINOCULAR diplopia (present with both eyes open, resolves when EITHER eye is covered) implies misalignment from a NEUROLOGICAL or NEUROMUSCULAR cause \u2014 this is the concerning type and demands a proper neuro work-up. Establish which she has.' },
        { topic:'Think MS \u2014 the optic neuritis clue', text:'In a YOUNG WOMAN with intermittent neurological visual symptoms, MULTIPLE SCLEROSIS must be considered. Her recent episode of painful, blurred vision in ONE eye is a classic description of OPTIC NEURITIS (pain on eye movement, reduced acuity/colour vision, often resolving) \u2014 a common MS presentation. MS features are episodes separated in TIME and SPACE (e.g. internuclear ophthalmoplegia, sensory/motor symptoms, fatigue). This needs urgent neurology/ophthalmology assessment and MRI, not "tiredness".' },
        { topic:'Think MYASTHENIA \u2014 fatigability', text:'MYASTHENIA GRAVIS classically causes FATIGABLE diplopia and PTOSIS \u2014 worse with sustained effort and toward the END OF THE DAY, better with rest \u2014 and may involve bulbar (swallow/speech) and limb fatigue. Her diplopia being worse when tired is a pointer. Ask about fatigable ptosis, swallowing/chewing/speech fatigue and limb weakness; myasthenia needs neurology referral and carries a risk of bulbar/RESPIRATORY compromise (myasthenic crisis) if severe.' },
        { topic:'The red-flag cranial-nerve emergencies', text:'CRITICAL red flags in diplopia from cranial nerve palsies: a painful THIRD nerve palsy with a FIXED DILATED PUPIL is a posterior communicating artery ANEURYSM until proven otherwise \u2014 a neurosurgical EMERGENCY (risk of subarachnoid haemorrhage); a sixth nerve palsy can be a false-localising sign of RAISED INTRACRANIAL PRESSURE (screen headache, papilloedema, vomiting, visual obscurations). Also consider thyroid eye disease and orbital pathology. These mandate emergency/urgent imaging and referral.' },
        { topic:'Examine and set urgency', text:'EXAMINE: visual acuity, pupils (size/reactivity/RAPD), eye movements (which directions/which nerve), ptosis and FATIGABILITY (sustained upgaze), fundi (papilloedema/optic disc), and neuro screen. Set URGENCY by findings: same-day/emergency for painful pupil-involving III palsy, suspected raised ICP, or significant myasthenic/bulbar features; urgent neurology \u00b1 ophthalmology and MRI for suspected MS/optic neuritis or unexplained binocular diplopia. Do NOT reassure recurrent binocular diplopia as eye strain.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 she wants reassurance it is just tiredness/screens and is minimising recurrent neurological symptoms (and a likely optic-neuritis episode), perhaps from fear of what they mean. The skill is to take the symptoms seriously, take the discriminating history, examine, recognise the serious differential and red flags, and refer with appropriate urgency \u2014 honestly but without catastrophising \u2014 rather than colluding with "it\u2019s just eye strain".' },
      ],
      ice:{
        ideas:'It\u2019s just tiredness/eye strain from screens; the eye episode was nothing.',
        concerns:'HIDDEN AGENDA \u2014 minimising recurrent neurological symptoms, possibly from fear of a serious diagnosis; wants reassurance.',
        expectations:'To be reassured it\u2019s eye strain. What she needs: monocular-vs-binocular clarified, the MS/myasthenia/red-flag differential worked, examination, and urgent neurology/ophthalmology referral \u2014 not dismissal as tiredness.'
      },
      cues:['Intermittent double vision + a recent painful blurred-vision episode in one eye in a young woman \u2014 think binocular diplopia + optic neuritis/MS; not "tiredness".','Diplopia worse when tired/end of day \u2192 consider fatigable MYASTHENIA (ptosis, bulbar/limb fatigue, crisis risk).','Red flags: painful III palsy + fixed dilated pupil (aneurysm \u2014 emergency); VI palsy/raised ICP \u2014 examine pupils/movements/fundi and set urgency.']
    },
    checkpoints:[
      { dom:'tasks', text:'Distinguishes MONOCULAR (ocular/refractive, less sinister) from BINOCULAR diplopia (neurological/neuromuscular, concerning) by asking whether covering one eye resolves it' },
      { dom:'tasks', text:'Considers MULTIPLE SCLEROSIS in a young woman \u2014 recognises the recent painful monocular visual disturbance as likely OPTIC NEURITIS and the principle of episodes separated in time/space \u2014 warranting urgent neurology/ophthalmology and MRI' },
      { dom:'tasks', text:'Considers MYASTHENIA GRAVIS \u2014 screens FATIGABLE diplopia/ptosis (worse end of day/with effort), bulbar (swallow/speech) and limb fatigue \u2014 and recognises the risk of bulbar/respiratory compromise' },
      { dom:'tasks', text:'Knows the cranial-nerve RED FLAGS \u2014 painful III palsy with a FIXED DILATED PUPIL (posterior communicating aneurysm \u2014 emergency), VI palsy as a false-localising sign of RAISED ICP \u2014 and screens accordingly (headache, papilloedema, vomiting)' },
      { dom:'tasks', text:'EXAMINES (acuity, pupils/RAPD, eye movements, ptosis and fatigability, fundi, neuro screen) and sets URGENCY by findings \u2014 emergency for pupil-involving painful III palsy/raised ICP/significant myasthenic features; urgent neurology \u00b1 ophthalmology/MRI otherwise' },
      { dom:'rto',   text:'Reads the minimisation/wish for reassurance, takes recurrent neurological symptoms seriously, and does NOT collude with "it\u2019s just eye strain/tiredness"' },
      { dom:'rto',   text:'Communicates the need for urgent assessment honestly without catastrophising, explains the reasoning, and checks understanding' },
      { dom:'gs',    text:'Safety-nets and refers with appropriate urgency: emergency advice for red flags (sudden severe headache, painful eye with dilated pupil, swallowing/breathing difficulty), urgent neurology/ophthalmology referral and MRI as indicated, and follow-up \u2014 not reassurance as tiredness' },
    ],
    worked:[
      { lbl:'Don\u2019t accept "tiredness" yet', txt:'"I\u2019m glad you came, and I\u2019d love to reassure you \u2014 but double vision that keeps happening, plus that painful blurry episode in one eye, are things I need to take seriously rather than put down to screens. Let me ask some specific questions."' },
      { lbl:'Split monocular vs binocular', txt:'"When you get the double vision, does it disappear if you cover one eye \u2014 either eye? \u2026 It only goes when you cover one. That tells me it\u2019s the kind that comes from the eyes not aligning, which points to a nerve or muscle cause rather than simple eye strain."' },
      { lbl:'Pull the MS/myasthenia threads', txt:'"That eye that was painful and blurry for a few days \u2014 was it sore to move? Any numbness, weakness or balance problems before? And the double vision \u2014 is it worse at the end of the day or when you\u2019re tired? Any trouble swallowing or slurring when tired?"' },
      { lbl:'Examine + red-flag screen', txt:'"Let me check your eye movements, pupils, eyelids and the back of your eyes. Any new severe headache, or a painful eye with a big pupil? Those would be urgent in a different way \u2014 I\u2019m checking for them."' },
      { lbl:'Name the plan honestly', txt:'"I\u2019m not going to label this tiredness. The painful eye episode could have been inflammation of the eye nerve, and with the double vision I want a brain scan and a neurologist\u2019s opinion urgently. It might be nothing serious, but these are things we don\u2019t sit on."' },
      { lbl:'Safety-net', txt:'"Before you\u2019re seen: if you get a sudden severe headache, a painful eye with a dilated pupil, weakness, or any trouble swallowing or breathing, that\u2019s an emergency \u2014 999. I\u2019ll arrange the referral and scan now and we\u2019ll follow it through together."' },
    ],
    learning:'Diplopia in a young adult is approached structurally. First split MONOCULAR (persists with one eye open, resolves only when that eye is covered \u2014 usually an ocular/refractive/lens problem, less sinister) from BINOCULAR diplopia (present with both eyes open, resolves when EITHER eye is covered \u2014 implying ocular misalignment from a neurological or neuromuscular cause), the latter being the concerning type that demands a neuro work-up. In a young woman, consider MULTIPLE SCLEROSIS \u2014 her recent painful, blurred monocular visual episode is a classic description of OPTIC NEURITIS (pain on eye movement, reduced acuity/colour vision, often resolving), and MS produces episodes separated in time and space (e.g. internuclear ophthalmoplegia) \u2014 warranting urgent neurology/ophthalmology and MRI, not "tiredness". Consider MYASTHENIA GRAVIS, which causes FATIGABLE diplopia and ptosis worse with effort and toward the end of the day, with possible bulbar (swallow/speech) and limb fatigue and a risk of bulbar/respiratory compromise (myasthenic crisis). Know the cranial-nerve RED FLAGS: a painful THIRD nerve palsy with a FIXED DILATED PUPIL is a posterior communicating artery ANEURYSM until proven otherwise \u2014 a neurosurgical emergency \u2014 and a SIXTH nerve palsy can be a false-localising sign of RAISED INTRACRANIAL PRESSURE (screen headache, papilloedema, vomiting). Examine acuity, pupils (RAPD), eye movements, ptosis and fatigability, and fundi, and set urgency by findings \u2014 emergency for a painful pupil-involving III palsy, suspected raised ICP or significant myasthenic features; urgent neurology \u00b1 ophthalmology and MRI for suspected MS/optic neuritis or unexplained binocular diplopia. The hidden agenda is the wish to be reassured it is just tiredness/screens while minimising recurrent neurological symptoms; take them seriously, work the serious differential and red flags, and refer with appropriate urgency honestly but without catastrophising \u2014 never colluding with "it\u2019s just eye strain". No NICE NG12 cancer pathway applies (though a mass or raised ICP would prompt urgent neuro-imaging).',
    knowledge:{
      guideline:'Diplopia assessment (monocular vs binocular) \u00b7 MS/optic neuritis \u00b7 myasthenia gravis \u00b7 cranial nerve palsy red flags (aneurysm/raised ICP)',
      points:[
        { h:'Monocular vs binocular', t:'Monocular (resolves only with that eye covered) is usually ocular/refractive. Binocular (resolves when either eye covered) implies neurological/neuromuscular misalignment \u2014 the concerning type needing neuro work-up.' },
        { h:'MS / optic neuritis', t:'In a young woman, consider MS. Painful monocular visual loss with reduced acuity/colour = optic neuritis. MS = episodes separated in time/space (e.g. INO). Urgent neurology/ophthalmology + MRI.' },
        { h:'Myasthenia gravis', t:'Fatigable diplopia/ptosis worse with effort/end of day, better with rest; bulbar (swallow/speech) and limb fatigue. Risk of bulbar/respiratory compromise (crisis). Neurology referral.' },
        { h:'Cranial-nerve red flags', t:'Painful III palsy with fixed dilated pupil = posterior communicating aneurysm (neurosurgical emergency, SAH risk). VI palsy can be a false-localising sign of raised ICP (headache, papilloedema, vomiting).' },
        { h:'Examination', t:'Acuity, pupils/RAPD, eye movements (localise the palsy), ptosis and fatigability (sustained upgaze), fundi (papilloedema), neuro screen.' },
        { h:'Set urgency', t:'Emergency: painful pupil-involving III palsy, suspected raised ICP, significant myasthenic/bulbar features. Urgent: suspected MS/optic neuritis or unexplained binocular diplopia \u2192 neurology \u00b1 ophthalmology + MRI.' },
        { h:'Never do', t:'Never reassure recurrent binocular diplopia as tiredness/eye strain; never miss optic neuritis/MS clues; never overlook fatigable myasthenic features; never miss a painful pupil-involving III palsy or raised-ICP signs.' },
        { h:'Safety-net & follow-up', t:'Emergency advice for sudden severe headache, painful eye with dilated pupil, weakness, or swallowing/breathing difficulty; urgent neurology/ophthalmology referral + MRI as indicated; follow up the outcome.' }
      ]
    }
  };

  /* ============ 202. F2F — Epilepsy: missed pills and a driving licence ============ */
  const c202 = {
    id:'epilepsy-driving', title:'"I had a seizure but I\u2019ve started my tablets again \u2014 I can keep driving, can\u2019t I? I need my car for work"', type:'video', duration:12,
    meta:{ age:34, sex:'M', setting:'Video consultation \u2014 after a breakthrough seizure from missed medication.', system:'Neurology / Professional \u2014 epilepsy, medication adherence & the DVLA duty' },
    brief:'Mr Lewis Tran, 34, has epilepsy, usually well controlled, but had a breakthrough SEIZURE last week after a period of missing his medication (busy, ran out, "felt fine"). He has restarted his tablets and wants to keep DRIVING \u2014 he needs his car for work. The examinable task is twofold: (1) the clinical \u2014 explore WHY he missed medication (adherence barriers, beliefs, supply, side-effects), reinforce adherence and the danger of abrupt stopping, review seizure control/triggers, optimise and consider neurology review, screen safety (injury, status, mood, SUDEP awareness sensitively); and (2) the critical PROFESSIONAL/SAFETY duty \u2014 DRIVING and the DVLA. After a seizure, there is a LEGAL obligation to inform the DVLA and the patient must STOP DRIVING; for Group 1 (car) a single unprovoked/first seizure generally means at least 6 months off driving (12 months if established epilepsy/further seizures, with rules on being seizure-free), and Group 2 (HGV/bus) rules are far stricter. The doctor must advise this clearly, explain he must NOT drive now and must notify the DVLA, document it, and \u2014 per GMC guidance \u2014 if he continues to drive against advice and cannot be persuaded, may ultimately need to inform the DVLA. The hidden agenda is his livelihood; the skill is handling this honestly and supportively without colluding. No NG12 cancer link.',
    script:{
      opening:'"So I had a seizure last week \u2014 first one in ages. I\u2019ll be honest, I\u2019d been missing my tablets, just got busy and ran out, and I felt fine so I didn\u2019t rush to sort it. I\u2019m back on them now, though. I can carry on driving, can\u2019t I? I drive for my job \u2014 I can\u2019t manage without my car. Please don\u2019t tell me I have to stop."',
      facts:[
        { topic:'Explore why the medication was missed', text:'CLINICAL \u2014 a breakthrough seizure after missed medication is an opportunity to understand and fix ADHERENCE. Explore the reasons non-judgementally: simply busy/forgot, ran out (supply/repeat issues), beliefs about needing it ("felt fine"), side-effects, cost, or chaotic routine. Reinforce that anti-seizure medication must be taken consistently and that abruptly stopping can precipitate seizures (and rarely status epilepticus). Problem-solve practical adherence (reminders, repeat prescriptions, pharmacy ordering).' },
        { topic:'Review control, triggers & optimise', text:'Review his epilepsy: seizure type/frequency, other triggers (sleep deprivation, alcohol, stress, illness), this seizure\u2019s features and any injury, and whether the regimen needs review (neurology input). Screen mood and the psychosocial impact, and sensitively ensure he is aware of safety and SUDEP (sudden unexpected death in epilepsy) risk being higher with poor control/non-adherence \u2014 a reason to take adherence seriously, handled carefully.' },
        { topic:'The DVLA duty \u2014 he must stop driving', text:'CRITICAL \u2014 after a seizure there is a LEGAL duty to inform the DVLA and the patient MUST STOP DRIVING. He cannot simply carry on because he has restarted tablets. He must notify the DVLA and surrender driving until he meets the seizure-free criteria. This conversation cannot be softened away because of his job.' },
        { topic:'The specific driving rules', text:'Group 1 (car/motorcycle): after a seizure, a patient must generally be SEIZURE-FREE for a defined period before relicensing \u2014 broadly at least 6 months after a single first unprovoked seizure, and 12 months seizure-free for established epilepsy/recurrent seizures (with specific DVLA criteria, including for medication-change seizures). Group 2 (HGV/bus) rules are MUCH stricter (long seizure-free and often medication-free periods). The exact period is determined by DVLA criteria \u2014 but the immediate message is: stop now and notify. Frame that good control and meeting the criteria allow relicensing.' },
        { topic:'The doctor\u2019s professional duty', text:'PROFESSIONAL \u2014 it is the PATIENT\u2019S legal responsibility to inform the DVLA and stop driving; the doctor must ADVISE this clearly, explain why, and DOCUMENT the advice. Per GMC guidance, if the patient continues to drive against advice and cannot be persuaded to stop or notify, the doctor should make every effort to persuade them and, if they still don\u2019t, may need to inform the DVLA (and tell the patient before doing so). Confidentiality yields to public safety here.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 his "I can keep driving, I need my car for work, please don\u2019t tell me to stop" is driven by genuine fear for his LIVELIHOOD, plus minimisation (restarting tablets "fixes" it). The skill is to be empathetic about the job impact, fix the adherence issue supportively, and be clear and honest about the legal driving duty without colluding \u2014 framing that following the rules and regaining control is the route back to driving, and signposting practical/work support.' },
      ],
      ice:{
        ideas:'Restarting his tablets means he is safe to keep driving; the seizure was a one-off from missing pills.',
        concerns:'HIDDEN AGENDA \u2014 fear of losing his car/job; embarrassment about non-adherence; wants permission to keep driving.',
        expectations:'To be told he can keep driving. What he needs: adherence explored and supported, control reviewed, and a clear, honest DVLA conversation (must stop now and notify; seizure-free criteria) handled supportively \u2014 not collusion.'
      },
      cues:['Breakthrough seizure after missed medication \u2014 explore/fix adherence; abrupt stopping precipitates seizures; reinforce consistent use.','DVLA duty: after a seizure he MUST stop driving and notify the DVLA \u2014 cannot continue just because he\u2019s restarted tablets; Group 1 ~6\u201312 months seizure-free, Group 2 far stricter.','"I need my car for work, don\u2019t make me stop" \u2014 empathise re livelihood but don\u2019t collude; advise clearly, document; GMC route if he drives against advice.']
    },
    checkpoints:[
      { dom:'tasks', text:'Explores WHY the medication was missed (busy/forgot, ran out/supply, beliefs, side-effects, cost, routine) non-judgementally and reinforces consistent adherence and the danger of abrupt stopping' },
      { dom:'tasks', text:'Reviews seizure control/type/triggers and this seizure\u2019s features/injury, considers neurology review/optimisation, and screens mood and (sensitively) SUDEP/safety awareness' },
      { dom:'tasks', text:'States the DVLA DUTY clearly \u2014 after a seizure he MUST STOP DRIVING and notify the DVLA, and cannot continue simply because he has restarted medication' },
      { dom:'tasks', text:'Knows the broad driving rules \u2014 Group 1 generally requires a seizure-free period (≈6 months after a single first seizure, ≈12 months for established epilepsy/recurrent, per DVLA criteria), Group 2 far stricter \u2014 and frames that meeting the criteria allows relicensing' },
      { dom:'tasks', text:'Understands the DOCTOR\u2019S professional duty: advise clearly, document, and \u2014 per GMC \u2014 if the patient continues to drive against advice and cannot be persuaded, make every effort and ultimately may inform the DVLA (telling the patient first)' },
      { dom:'rto',   text:'Empathises with the livelihood impact and handles the non-adherence supportively (not blaming), while being clear and honest about the driving duty WITHOUT colluding with "I can keep driving"' },
      { dom:'rto',   text:'Explains the rules and reasoning so he understands, frames regaining control as the route back to driving, signposts work/practical support, and checks understanding' },
      { dom:'gs',    text:'Safety-nets and follows up: documents the driving advice, supports adherence (reminders/supply), arranges neurology review as needed, seizure-safety advice, and review \u2014 honest DVLA duty handled supportively, not colluding with continued driving' },
    ],
    worked:[
      { lbl:'Fix the adherence, no blame', txt:'"Thanks for being honest about missing the tablets \u2014 that\u2019s really useful, and it\u2019s common when life gets busy. The key thing is they only work taken regularly, and stopping suddenly can actually trigger seizures. Let\u2019s sort out a system so you don\u2019t run out \u2014 reminders, repeat prescriptions, pharmacy ordering."' },
      { lbl:'Review the bigger picture', txt:'"Tell me about the seizure \u2014 were you hurt, how long, anything else going on like lack of sleep or alcohol? And how\u2019s your mood with all this? I may ask the neurologist to review your medication too."' },
      { lbl:'The hard truth on driving', txt:'"Now I have to be straight with you, and I know it\u2019s the bit you didn\u2019t want to hear. After a seizure, the law says you must stop driving and tell the DVLA \u2014 restarting your tablets doesn\u2019t change that. I\u2019m really sorry, because I know your job depends on it."' },
      { lbl:'Explain the path back', txt:'"It\u2019s not necessarily forever. For a car licence, you generally need to be seizure-free for a set period \u2014 often around six months to a year depending on your situation \u2014 and then you can be relicensed. Getting back on top of your medication is exactly what gets you driving again."' },
      { lbl:'Be clear on the duty', txt:'"To be clear: it\u2019s your legal responsibility to notify the DVLA and not drive in the meantime. I\u2019ll document that I\u2019ve advised you. I have to be honest that if someone keeps driving against this advice, I may be obliged to inform the DVLA myself \u2014 but I\u2019d much rather support you to do the right thing."' },
      { lbl:'Support + safety-net', txt:'"Let\u2019s think about work \u2014 a sick note, talking to your employer, transport options for now. Avoid heights, swimming alone, and risky tasks until things are stable. I\u2019ll review you, support the medication, and we\u2019ll get you back to driving the proper way."' },
    ],
    learning:'A breakthrough seizure after missed medication is both a clinical and a professional consultation. Clinically, explore WHY the medication was missed (busy/forgot, ran out/supply problems, beliefs such as "felt fine", side-effects, cost, chaotic routine) non-judgementally, reinforce that anti-seizure medication must be taken consistently and that abruptly stopping can precipitate seizures (rarely status), and problem-solve adherence (reminders, repeat prescriptions, pharmacy ordering); review seizure type/control/triggers and any injury, consider neurology review/optimisation, and sensitively screen mood and SUDEP/safety awareness. The critical professional/safety duty is DRIVING: after a seizure there is a LEGAL obligation to inform the DVLA and the patient MUST STOP DRIVING \u2014 restarting tablets does not change this. The broad rules: Group 1 (car/motorcycle) generally requires a seizure-free period before relicensing (around 6 months after a single first unprovoked seizure, around 12 months for established epilepsy/recurrent seizures, per DVLA criteria), while Group 2 (HGV/bus) rules are far stricter; the exact period is set by DVLA criteria, but the immediate message is stop now and notify, framing that good control and meeting the criteria are the route back to driving. The doctor\u2019s duty is to ADVISE this clearly, explain why, and DOCUMENT it; it is the patient\u2019s legal responsibility to notify and stop, but per GMC guidance, if a patient continues to drive against advice and cannot be persuaded, the doctor should make every effort and may ultimately need to inform the DVLA (telling the patient first) \u2014 confidentiality yielding to public safety. The hidden agenda is fear for his livelihood plus minimisation; be empathetic about the job impact, fix adherence supportively, signpost work/practical support, and be honest about the driving duty WITHOUT colluding. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'Epilepsy management & adherence (NICE NG217) \u00b7 DVLA fitness-to-drive (epilepsy/seizures, Group 1 & 2) \u00b7 GMC confidentiality/driving \u00b7 SUDEP',
      points:[
        { h:'Explore non-adherence', t:'Understand why medication was missed (busy, supply, beliefs, side-effects, cost, routine); reinforce consistent use and that abrupt stopping can precipitate seizures; problem-solve practical adherence.' },
        { h:'Review & optimise', t:'Seizure type/control/triggers (sleep, alcohol, stress, illness), injury, neurology review/optimisation; screen mood; sensitively address SUDEP/safety, higher with poor control/non-adherence.' },
        { h:'DVLA duty \u2014 stop & notify', t:'After a seizure the patient must stop driving and inform the DVLA. Restarting medication does not permit continued driving.' },
        { h:'Driving rules', t:'Group 1: seizure-free period before relicensing (≈6 months after a single first seizure, ≈12 months for established epilepsy/recurrent, per DVLA criteria). Group 2 far stricter. Meeting criteria allows relicensing.' },
        { h:'Doctor\u2019s duty', t:'Advise clearly, explain, and document. Patient\u2019s responsibility to notify/stop. Per GMC, if they drive against advice and can\u2019t be persuaded, make every effort and may inform the DVLA (telling the patient first).' },
        { h:'Support the livelihood', t:'Empathise re job impact; sick note, employer discussion, transport options; frame regaining control as the route back to driving; signpost support.' },
        { h:'Never do', t:'Never collude with continued driving after a seizure; never blame the patient for non-adherence; never omit the DVLA advice/documentation; never ignore SUDEP/adherence; never imply restarting tablets restores the licence.' },
        { h:'Safety-net & follow-up', t:'Document driving advice; support adherence (reminders/supply); neurology review as needed; seizure-safety advice (heights, swimming alone, risky tasks); review and route back to driving.' }
      ]
    }
  };

  /* ============ 203. F2F — Epilepsy and a positive pregnancy test: valproate rules ============ */
  const c203 = {
    id:'epilepsy-pregnancy-valproate', title:'"I\u2019ve just found out I\u2019m pregnant \u2014 and I\u2019m on those epilepsy tablets, sodium valproate"', type:'video', duration:12,
    meta:{ age:28, sex:'F', setting:'Video consultation \u2014 newly positive pregnancy test in a woman on valproate.', system:'Neurology / Womens health \u2014 epilepsy in pregnancy & the valproate rules' },
    brief:'Mrs Aoife Brennan, 28, has epilepsy controlled on SODIUM VALPROATE, and has just had a positive PREGNANCY TEST (unplanned, ~6 weeks). She is frightened. The examinable task is the urgent, high-stakes consultation around VALPROATE IN PREGNANCY: recognise that valproate is highly TERATOGENIC (major congenital malformations and neurodevelopmental disorder/autism/learning disability \u2014 roughly 1 in 10 risk of physical malformation and up to ~30\u201340% neurodevelopmental effects) and is subject to the MHRA Pregnancy Prevention Programme (it should not normally be used in women of childbearing potential without that programme); but \u2014 CRITICALLY \u2014 advise her NOT to STOP valproate abruptly herself, because uncontrolled seizures are dangerous to her and the pregnancy (risk of status, injury, SUDEP). The correct action is URGENT review: continue medication for now, take HIGH-DOSE FOLIC ACID (5 mg), arrange an URGENT specialist (epilepsy/neurology + obstetric) review to reassess medication safely, refer to antenatal/joint services, and counsel honestly and supportively about the risks and options without inducing panic-stopping. Also explore how this happened (contraception/PPP failure) for future care. The hidden agenda is fear and guilt; handle with compassion. No NG12 cancer link.',
    script:{
      opening:'"I\u2019ve just done a test and it\u2019s positive \u2014 I\u2019m pregnant. It wasn\u2019t planned. And I\u2019m on sodium valproate for my epilepsy. I\u2019ve read online that it\u2019s really dangerous in pregnancy \u2014 I\u2019m panicking. Should I stop taking it right now? Have I already harmed the baby? I don\u2019t know what to do."',
      facts:[
        { topic:'Do NOT stop valproate abruptly \u2014 the key safety message', text:'CRITICAL \u2014 the single most important immediate message: she must NOT suddenly STOP her valproate on her own. Abruptly stopping anti-seizure medication risks uncontrolled seizures, which are dangerous to her and the pregnancy (status epilepticus, injury, and SUDEP). The correct action is to continue for now and get URGENT specialist review \u2014 not to panic-stop. This counters the instinct (and online advice) to halt the drug immediately.' },
        { topic:'Why valproate matters \u2014 teratogenicity', text:'Valproate is the most teratogenic anti-seizure medication: it carries a high risk of major CONGENITAL MALFORMATIONS (e.g. neural tube defects \u2014 roughly 1 in 10) and, importantly, NEURODEVELOPMENTAL disorders (lower IQ, autism, learning disability \u2014 affecting a substantial proportion, up to ~30\u201340%). This is why it is subject to strict regulation (MHRA Pregnancy Prevention Programme / Prevent) and should not normally be used in women able to become pregnant without that programme and specialist oversight. Be honest about the risks without catastrophising or inducing panic-stopping.' },
        { topic:'Urgent specialist review is the action', text:'The correct pathway is URGENT joint review \u2014 epilepsy specialist/neurology AND obstetrics (maternal medicine) \u2014 to reassess the medication safely in pregnancy (a specialist may switch/adjust, but changes must be made carefully, not abruptly by the patient), plan monitoring, and arrange detailed antenatal care/anomaly scanning. Make this referral urgently today; do not leave her to wait or to make medication changes alone.' },
        { topic:'High-dose folic acid & immediate steps', text:'Start HIGH-DOSE FOLIC ACID 5 mg daily (recommended for women on anti-seizure medication to reduce neural tube defect risk \u2014 ideally pre-conception, but start now), arrange early antenatal referral, and ensure she has clear seizure-safety advice. Address her fear that she has "already harmed the baby" honestly but supportively \u2014 risks are statistical, the specialist will assess, and stopping the drug now would add danger, not safety.' },
        { topic:'Explore how it happened \u2014 and future PPP', text:'Sensitively explore how the pregnancy occurred on valproate \u2014 was she on the Pregnancy Prevention Programme, using effective contraception, counselled about the risks? This is not to blame but to inform care and prevent recurrence, and flags a possible gap in her prior management. For the future (and any women of childbearing potential on valproate), the PPP, effective contraception and pre-conception counselling are essential.' },
        { topic:'The hidden agenda + compassion', text:'HIDDEN AGENDA \u2014 she is FRIGHTENED and GUILTY, frightened she has harmed the baby and unsure whether to stop her medication. The skill is to lead with the safety message (don\u2019t stop abruptly), give honest information without overwhelming or catastrophising, make the urgent referral, start folic acid, and provide compassionate support and a clear plan \u2014 holding both the genuine risks and the danger of panic-stopping, and not leaving her alone with online fear.' },
      ],
      ice:{
        ideas:'Valproate is dangerous in pregnancy (from online reading); maybe she should stop it immediately; perhaps she has already harmed the baby.',
        concerns:'HIDDEN AGENDA \u2014 fear and guilt about harm to the baby; panic about what to do; the unplanned pregnancy.',
        expectations:'To know whether to stop the tablets and whether harm is done. What she needs: the do-NOT-stop-abruptly safety message, honest risk information, urgent specialist review, high-dose folic acid, and compassionate support \u2014 not panic-stopping or catastrophising.'
      },
      cues:['Positive pregnancy test on SODIUM VALPROATE \u2014 highly teratogenic (malformations ~1 in 10; neurodevelopmental up to ~30\u201340%); high-stakes, urgent.','KEY safety message: do NOT stop valproate abruptly \u2014 uncontrolled seizures endanger her and the pregnancy; continue + urgent specialist review.','Start 5 mg folic acid, urgent joint epilepsy+obstetric referral; explore PPP/contraception gap; lead with compassion, not panic or blame.']
    },
    checkpoints:[
      { dom:'tasks', text:'Leads with the KEY SAFETY message \u2014 do NOT stop valproate abruptly \u2014 explaining that uncontrolled seizures are dangerous to her and the pregnancy (status, injury, SUDEP) and that the action is urgent specialist review, not panic-stopping' },
      { dom:'tasks', text:'Knows valproate is highly TERATOGENIC \u2014 major congenital malformations (~1 in 10) and neurodevelopmental disorders (up to ~30\u201340%) \u2014 and is subject to the MHRA Pregnancy Prevention Programme, and conveys this honestly without catastrophising' },
      { dom:'tasks', text:'Arranges URGENT joint specialist review (epilepsy/neurology + obstetrics/maternal medicine) to reassess medication safely and plan antenatal care/anomaly scanning \u2014 not leaving her to change medication alone' },
      { dom:'tasks', text:'Starts HIGH-DOSE FOLIC ACID 5 mg daily, arranges early antenatal referral, and gives clear seizure-safety advice' },
      { dom:'tasks', text:'Sensitively explores how the pregnancy occurred on valproate (PPP/contraception/prior counselling) to inform care and prevent recurrence, without blame, and notes future PPP/contraception/pre-conception needs' },
      { dom:'rto',   text:'Responds to her fear and guilt with compassion, addresses the "have I harmed the baby/should I stop" honestly but supportively, and avoids both catastrophising and false reassurance' },
      { dom:'rto',   text:'Gives clear, prioritised information without overwhelming her, checks understanding, and ensures she leaves with a concrete plan and not alone with online fear' },
      { dom:'gs',    text:'Safety-nets and follows up: urgent referral made today, folic acid started, seizure-safety and do-not-stop advice, antenatal pathway, contact if seizures/concerns, and review \u2014 the safety message + urgent specialist review, not panic-stopping' },
    ],
    worked:[
      { lbl:'Lead with the safety message', txt:'"First, the most important thing, and I want to be really clear: please do NOT stop your valproate suddenly on your own. I know that\u2019s your instinct and what the internet says \u2014 but stopping abruptly can cause seizures, which would be dangerous for you and the baby. We change these things carefully, with a specialist, not overnight."' },
      { lbl:'Be honest about the risk', txt:'"I also won\u2019t pretend it\u2019s nothing. Valproate does carry real risks in pregnancy \u2014 to the baby\u2019s development and physical formation \u2014 which is exactly why we need specialists involved urgently to weigh everything up properly. But the answer to that risk is expert review, not you stopping it today."' },
      { lbl:'Address the guilt', txt:'"You haven\u2019t done anything wrong, and please don\u2019t blame yourself \u2014 this was unplanned and you\u2019ve come straight in, which is exactly right. The risks are about chances, not certainties, and the specialists will assess your baby carefully."' },
      { lbl:'The urgent plan', txt:'"Here\u2019s what I\u2019m doing now: an urgent referral to the epilepsy and pregnancy specialists together, so they can review your medication safely and plan your care and scans. And I\u2019m starting you on a high dose of folic acid today, which helps protect the baby."' },
      { lbl:'Gently explore how', txt:'"Can I ask \u2014 were you using contraception, and had anyone talked to you about valproate and pregnancy before? \u2026 That helps me understand and make sure your care is right \u2014 it\u2019s not about blame at all."' },
      { lbl:'Support + safety-net', txt:'"This is a lot, and it\u2019s okay to feel frightened \u2014 you\u2019re not on your own with it. Keep taking your tablets, take the folic acid, and if you have a seizure or any worries, contact us. I\u2019ll chase that specialist appointment and we\u2019ll go through everything together."' },
    ],
    learning:'A positive pregnancy test in a woman on SODIUM VALPROATE is a high-stakes, urgent consultation, and the single most important immediate message is: do NOT stop valproate abruptly \u2014 suddenly stopping anti-seizure medication risks uncontrolled seizures that are dangerous to mother and pregnancy (status epilepticus, injury, SUDEP), so the action is to continue for now and obtain urgent specialist review, NOT to panic-stop (countering the instinct and online advice to halt immediately). Be honest that valproate is the most teratogenic anti-seizure medication \u2014 high risk of major congenital malformations (e.g. neural tube defects, around 1 in 10) and, importantly, neurodevelopmental disorders (reduced IQ, autism, learning disability, affecting up to ~30\u201340%) \u2014 which is why it is subject to the MHRA Pregnancy Prevention Programme and should not normally be used in women of childbearing potential without it; convey this without catastrophising or inducing panic-stopping. The correct pathway is URGENT joint review by epilepsy/neurology AND obstetrics/maternal medicine to reassess medication safely (any change made carefully by specialists, not abruptly by the patient) and plan antenatal care/anomaly scanning; start HIGH-DOSE FOLIC ACID 5 mg daily, arrange early antenatal referral, and give seizure-safety advice. Sensitively explore how the pregnancy occurred on valproate (Pregnancy Prevention Programme, contraception, prior counselling) to inform care and prevent recurrence \u2014 not to blame \u2014 and note the future need for the PPP, effective contraception and pre-conception counselling for any woman of childbearing potential on valproate. The hidden agenda is fear and guilt (that she has harmed the baby, uncertainty whether to stop); lead with the safety message, give honest prioritised information with compassion, make the urgent referral, start folic acid, and ensure she leaves with a clear plan rather than alone with online fear. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'MHRA valproate Pregnancy Prevention Programme \u00b7 epilepsy in pregnancy (NICE NG217) \u00b7 teratogenicity & high-dose folic acid \u00b7 do-not-stop-abruptly',
      points:[
        { h:'Do NOT stop abruptly', t:'The key immediate message: do not suddenly stop valproate. Abrupt cessation risks uncontrolled seizures dangerous to mother and pregnancy (status, injury, SUDEP). Continue and get urgent specialist review.' },
        { h:'Valproate teratogenicity', t:'Highest-risk anti-seizure drug: major congenital malformations (~1 in 10, incl. neural tube defects) and neurodevelopmental disorders (reduced IQ, autism, learning disability, up to ~30\u201340%). Subject to the MHRA Pregnancy Prevention Programme.' },
        { h:'Urgent specialist review', t:'Refer urgently for joint epilepsy/neurology + obstetric (maternal medicine) review to reassess medication safely and plan antenatal care/anomaly scans. Medication changes are specialist-led, not patient-initiated.' },
        { h:'Immediate steps', t:'Start high-dose folic acid 5 mg daily; arrange early antenatal referral; give seizure-safety advice; address fear of harm honestly but supportively (risks are statistical; stopping now adds danger).' },
        { h:'Explore how it happened', t:'Sensitively review PPP enrolment, contraception and prior counselling \u2014 to inform care and prevent recurrence, not to blame. Flags possible gaps in prior management.' },
        { h:'Future prevention', t:'For women of childbearing potential on valproate: Pregnancy Prevention Programme, effective contraception and pre-conception counselling are essential; consider safer alternatives where possible (specialist).' },
        { h:'Never do', t:'Never advise/allow abrupt self-stopping of valproate; never catastrophise or, conversely, dismiss the risk; never delay specialist review; never omit 5 mg folic acid; never blame the patient.' },
        { h:'Safety-net & follow-up', t:'Urgent joint referral today; folic acid started; do-not-stop and seizure-safety advice; antenatal pathway; contact if seizures/concerns; compassionate review \u2014 safety message + specialist review, not panic-stopping.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c200, c201, c202, c203);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'dizzy-teen-pots': {
      ceg: ['Children & young people', 'New & undifferentiated presentations'],
      stem: {
        name: 'Mia Calloway (mother present)', age: '16 years \u00b7 female',
        pmh: ['Dizziness/palpitations/brain fog + near-faint on STANDING; eases on sitting/lying', 'Exhausted, missing school; feels dismissed as "attention-seeking"', '?post-viral onset; ?hypermobility'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"I go dizzy and my heart races every time I stand \u2014 school think I\u2019m making it up. I\u2019m not."',
        reason: 'Video consultation \u2014 recurrent postural dizziness in a teenager.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Believe + take seriously', d:'Engage Mia directly; not "attention-seeking"; anxiety may coexist but isn\u2019t a dismissal.' },
        { t:'2\u20135',  h:'PoTS + differential', d:'Standing HR rise \u226540 bpm, no BP drop; screen postural hypotension, anaemia, thyroid, arrhythmia/family sudden death.' },
        { t:'5\u20137',  h:'Assess', d:'Active standing test (lying/standing HR+BP); FBC/ferritin/TFTs/glucose/ECG; cardiology if red flags.' },
        { t:'7\u201310', h:'Non-drug management', d:'Fluids ~2\u20133 L + salt, slow rising, compression, graded reconditioning; meds specialist-initiated.' },
        { t:'10\u201312',h:'Advocate + safety-net', d:'School letter/adjustments; support mood/anxiety alongside; cardiac red flags \u2192 urgent; refer + review.' }
      ],
      wordPics: {
        fail: 'Dismisses her as anxious/attention-seeking; no active stand or cardiac screen; no school advocacy.',
        pass: 'Takes her seriously, assesses for PoTS with active stand and basic tests, and gives non-drug management with school support.',
        exc:  'Believes and engages the teenager, recognises and assesses PoTS (active stand, FBC/ferritin/TFTs/ECG) with the cardiac differential and red-flag screen, gives non-drug-first management, advocates concretely for school adjustments, supports any anxiety without dismissing, and safety-nets.'
      },
      avoid: [
        { dont:'"It\u2019s probably just anxiety or growing up \u2014 try not to worry about it."', instead:'"What you describe is real and I believe you \u2014 let\u2019s measure your heart rate and blood pressure standing and check for PoTS."', why:'Defaulting to anxiety/attention-seeking without assessment is a clinical error and damaging.' },
        { dont:'(No cardiac screen) reassuring without asking about exertional syncope/family history.', instead:'"Do you ever faint during exercise, or has anyone in the family died suddenly young?"', why:'Missing arrhythmia/inherited cardiac red flags risks a dangerous cause of syncope.' },
        { dont:'(No advocacy) leaving school to treat her as attention-seeking.', instead:'"I\u2019ll write to school explaining it\u2019s a real condition and ask for water, seating and rest breaks."', why:'Failing to validate and advocate compounds the harm of being disbelieved.' }
      ]
    },

    'diplopia-ms-myasthenia': {
      ceg: ['New & undifferentiated presentations', 'Urgent & unscheduled care'],
      stem: {
        name: 'Erin Doyle', age: '29 years \u00b7 female',
        pmh: ['Intermittent double vision a few weeks; worse when tired', '\u26a0 Recent episode of painful blurred vision in left eye (?optic neuritis)', 'Attributes it to tiredness/screens'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Double vision that comes and goes \u2014 probably just tiredness, right? Reassure me it\u2019s eye strain."',
        reason: 'Video consultation \u2014 intermittent diplopia in a young adult.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Don\u2019t accept "tiredness"', d:'Recurrent diplopia + a painful eye episode in a young woman \u2014 take seriously.' },
        { t:'2\u20134',  h:'Monocular vs binocular', d:'Covering one eye resolves it \u2192 binocular = neurological/neuromuscular = concerning.' },
        { t:'4\u20136',  h:'MS + myasthenia threads', d:'Optic neuritis (painful mono visual loss), MS time/space; fatigable diplopia/ptosis/bulbar.' },
        { t:'6\u20138',  h:'Red flags + exam', d:'Painful III + fixed dilated pupil (aneurysm), VI + raised ICP; acuity/pupils/movements/ptosis/fundi.' },
        { t:'8\u201312', h:'Urgent referral + safety-net', d:'Urgent neurology \u00b1 ophthalmology + MRI; emergency advice for severe headache/dilated pupil/bulbar.' }
      ],
      wordPics: {
        fail: 'Reassures it\u2019s eye strain/tiredness; never separates monocular vs binocular; misses optic neuritis/MS and red flags; no referral.',
        pass: 'Identifies binocular diplopia, considers MS/myasthenia, examines and refers urgently to neurology/ophthalmology.',
        exc:  'Splits monocular vs binocular, recognises optic neuritis/MS and fatigable myasthenia, screens cranial-nerve red flags (aneurysm/raised ICP), examines fully, and refers with appropriate urgency (MRI/neurology) without catastrophising or colluding with "tiredness".'
      },
      avoid: [
        { dont:'"It\u2019s probably eye strain from screens \u2014 get more sleep and it\u2019ll settle."', instead:'"Recurrent double vision plus a painful eye episode I can\u2019t put down to tiredness \u2014 let me work out the type and examine you."', why:'Reassuring recurrent binocular diplopia as tiredness risks missing MS/optic neuritis or a dangerous cause.' },
        { dont:'(No monocular/binocular split) ordering glasses.', instead:'"Does it go when you cover one eye? That tells me whether it\u2019s the eye or the nerves/muscles."', why:'Skipping the fundamental monocular-vs-binocular distinction misdirects the work-up.' },
        { dont:'(No red-flag screen) routine optometry referral only.', instead:'"Any severe headache, or a painful eye with a big pupil? Those are emergencies \u2014 I\u2019m checking."', why:'Missing a painful pupil-involving III palsy (aneurysm) or raised-ICP signs can be fatal.' }
      ]
    },

    'epilepsy-driving': {
      ceg: ['Professionalism & ethics', 'Long-term conditions & cancer'],
      stem: {
        name: 'Lewis Tran', age: '34 years \u00b7 male',
        pmh: ['Epilepsy, usually controlled; \u26a0 breakthrough seizure last week after missing medication', 'Has restarted tablets; drives for work', 'Wants to keep driving'],
        meds: ['Levetiracetam (had lapsed)'],
        allergy: 'NKDA',
        recent: '"I\u2019ve restarted my tablets \u2014 I can keep driving, can\u2019t I? I need my car for work."',
        reason: 'Video consultation \u2014 after a breakthrough seizure from missed medication.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Fix adherence, no blame', d:'Why missed (busy/supply/beliefs); abrupt stopping triggers seizures; practical adherence systems.' },
        { t:'2\u20134',  h:'Review + safety', d:'Seizure features/triggers/injury; neurology review; mood; sensitive SUDEP/safety advice.' },
        { t:'4\u20137',  h:'DVLA duty', d:'After a seizure must stop driving + notify DVLA; restarting tablets doesn\u2019t change it.' },
        { t:'7\u20139',  h:'The rules + path back', d:'Group 1 ~6\u201312 months seizure-free; Group 2 far stricter; meeting criteria = relicensing.' },
        { t:'9\u201312', h:'Doctor duty + support', d:'Advise/document; GMC route if drives against advice; sick note/work/transport; review.' }
      ],
      wordPics: {
        fail: 'Tells him he can keep driving since he\u2019s restarted tablets; doesn\u2019t mention DVLA; blames him for non-adherence or ignores it.',
        pass: 'Explores adherence, advises he must stop driving and notify the DVLA, and supports the livelihood impact.',
        exc:  'Explores and supports adherence non-judgementally, reviews control/safety/SUDEP, clearly advises the DVLA duty (stop + notify; seizure-free criteria; Group 2 stricter), explains the doctor\u2019s duty/GMC route, and handles the livelihood impact supportively without colluding.'
      },
      avoid: [
        { dont:'"Now you\u2019re back on your tablets, you\u2019re fine to keep driving."', instead:'"After a seizure you must stop driving and tell the DVLA \u2014 restarting tablets doesn\u2019t change that, I\u2019m sorry."', why:'Colluding with continued driving after a seizure is unsafe and breaches the DVLA duty.' },
        { dont:'"You shouldn\u2019t have stopped your tablets \u2014 this is your own fault."', instead:'"It\u2019s common to miss them when life\u2019s busy \u2014 let\u2019s set up a system so you don\u2019t run out."', why:'Blaming shuts down the adherence conversation needed to prevent further seizures.' },
        { dont:'(Vague) not documenting or mentioning the notification duty.', instead:'"It\u2019s your legal duty to notify the DVLA and not drive meanwhile; I\u2019ll document that I\u2019ve advised you."', why:'Failing to advise/document the DVLA duty is a professional and safety failure.' }
      ]
    },

    'epilepsy-pregnancy-valproate': {
      ceg: ['Gender, reproductive & sexual health', 'Prescribing & pharmacology'],
      stem: {
        name: 'Aoife Brennan', age: '28 years \u00b7 female',
        pmh: ['Epilepsy controlled on SODIUM VALPROATE', '\u26a0 New positive pregnancy test (~6 weeks, unplanned)', 'Frightened; read valproate is dangerous'],
        meds: ['Sodium valproate'],
        allergy: 'NKDA',
        recent: '"I\u2019m pregnant and on valproate \u2014 should I stop it now? Have I harmed the baby?"',
        reason: 'Video consultation \u2014 positive pregnancy test on valproate.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Do NOT stop abruptly', d:'Lead with the safety message: stopping suddenly risks dangerous seizures \u2014 continue + urgent specialist review.' },
        { t:'2\u20134',  h:'Honest risk', d:'Valproate teratogenic (malformations ~1 in 10; neurodevelopmental up to ~30\u201340%); honest, not catastrophising.' },
        { t:'4\u20137',  h:'Urgent specialist review', d:'Joint epilepsy/neurology + obstetric review to reassess meds safely; antenatal/anomaly scans.' },
        { t:'7\u20139',  h:'Folic acid + steps', d:'Start 5 mg folic acid; early antenatal referral; seizure-safety; address "harmed the baby" supportively.' },
        { t:'9\u201312', h:'How it happened + support', d:'Explore PPP/contraception (no blame); future prevention; compassion; clear plan, not alone with online fear.' }
      ],
      wordPics: {
        fail: 'Tells her to stop valproate immediately, or dismisses the risk; no urgent referral; no folic acid; leaves her panicked.',
        pass: 'Advises not to stop abruptly, gives honest risk info, refers urgently and starts folic acid.',
        exc:  'Leads with the do-not-stop-abruptly safety message, conveys valproate teratogenicity honestly without catastrophising, arranges urgent joint epilepsy+obstetric review, starts 5 mg folic acid, explores PPP/contraception without blame, and supports a frightened, guilty patient with a clear plan.'
      },
      avoid: [
        { dont:'"Valproate is dangerous \u2014 stop taking it straight away."', instead:'"Please don\u2019t stop suddenly \u2014 that can cause dangerous seizures; keep taking it and we\u2019ll get specialists to review it urgently."', why:'Advising abrupt cessation risks uncontrolled seizures harmful to mother and pregnancy.' },
        { dont:'"Don\u2019t worry, lots of women take it, it\u2019s probably fine."', instead:'"I won\u2019t pretend there\u2019s no risk \u2014 it\u2019s real, which is why we need specialists urgently \u2014 but the answer is expert review, not stopping today."', why:'False reassurance misrepresents valproate\u2019s significant teratogenic risk.' },
        { dont:'(Delaying) "Book in with the midwife in a few weeks."', instead:'"I\u2019m referring you urgently to the epilepsy and pregnancy specialists today, and starting high-dose folic acid now."', why:'Delay misses the urgency of medication review and folic acid in a valproate-exposed pregnancy.' }
      ]
    }

  });

})();
