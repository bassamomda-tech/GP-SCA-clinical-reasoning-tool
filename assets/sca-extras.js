/* ============================================================
   Reasoning GP — SCA case extras
   Per-case: RCGP clinical experience groups (ceg), exam-format
   medical-record stem, 12-minute time map, examiner word-pictures
   (fail / pass / excellent), and "don't say" formulaic-phrase
   contrasts. Merged into window.SCA_CASES by sca-practice.js.
   ============================================================ */

window.SCA_EXTRAS = {

  'htn-young-bp': {
    ceg: ['Long-term conditions & cancer', 'Ethnicity, culture & diversity'],
    stem: {
      name: 'Marcus Whitfield', age: '32 years · male',
      pmh: ['Nil significant', 'Non-smoker'],
      meds: ['No regular medication'],
      allergy: 'NKDA',
      recent: '⚠ NHS health check with practice nurse last week: clinic BP 162/96. Recalled — repeat this morning 158/94. No bloods or QRISK on file. Family history (per nurse note): father — stroke age 51.',
      reason: 'Booked to discuss raised blood pressure readings. "The nurse asked me to come."'
    },
    timeMap: [
      { t:'0–1',  h:'Open & listen',        d:'Golden minute. He opens with "I feel fine, it\'s probably white-coat". Let him finish — the father\'s stroke will surface if you don\'t interrupt.' },
      { t:'1–5',  h:'Focused history + ICE', d:'Lifestyle (energy drinks, takeaways, alcohol), FH, OSA screen (snoring, daytime sleepiness), end-organ symptoms. Name the fear about his dad before minute 5.' },
      { t:'5–6',  h:'Summarise & share',     d:'"Two raised readings, a strong family history, and heavy snoring — here\'s what I think and what I want to check."' },
      { t:'6–10', h:'Shared management',     d:'ABPM/HBPM to confirm. Bloods + ECG + QRISK. Discuss likely first-line (CCB given heritage, if confirmed). Negotiate ONE lifestyle goal.' },
      { t:'10–12',h:'Safety-net & close',    d:'999 symptoms in plain words. Follow-up within 4 weeks booked. Teach-back: "What will you tell your partner tonight?"' }
    ],
    wordPics: {
      fail: 'Treats on a single clinic reading or dismisses it entirely; never asks about the father\'s stroke; lectures on lifestyle without negotiating anything specific; no OSA screen despite the snoring; vague "we\'ll keep an eye on it" close with no confirmed plan or safety-net.',
      pass: 'Confirms with ABPM/HBPM before treating; orders the end-organ work-up and mentions QRISK; acknowledges the fear about his father; knows CCB is first-line for his heritage; agrees a lifestyle change and books review with a basic safety-net.',
      exc:  'All of the above, plus: shares the QRISK as an actual number tied to his father\'s story; screens for OSA and says why; negotiates one specific, owned goal ("one energy drink a day, we re-check in four weeks"); checks understanding with teach-back; the patient leaves wanting to come back.'
    },
    avoid: [
      { dont:'"Don\'t worry, high blood pressure is very common and very treatable."', instead:'"You\'ve watched what untreated blood pressure did to your dad. Let\'s deal with that fear first — then the plan."', why:'Generic reassurance ignores the one thing he actually came in carrying.' },
      { dont:'"You need to improve your diet, exercise more, cut down alcohol and stop the energy drinks."', instead:'"If we picked one change that would actually stick — what would it be?"', why:'A shopping-list lecture earns no marks; a negotiated single goal does.' },
      { dont:'"We\'ll start you on a tablet today just to be safe."', instead:'"Before any tablet, I want a week of readings at home — we treat the real number, not a rushed morning."', why:'Treating a single clinic reading is a clinical-management fail in itself.' }
    ]
  },

  'rif-pain-young-female': {
    ceg: ['Urgent & unscheduled care', 'Gender, reproductive & sexual health'],
    stem: {
      name: 'Layla Ahmed', age: '28 years · female',
      pmh: ['Chlamydia infection age 19 — treated', 'Laparoscopic ovarian cystectomy age 23'],
      meds: ['No regular medication', 'Stopped combined oral contraceptive 4 months ago'],
      allergy: 'NKDA',
      recent: '⚠ Receptionist note (30 min ago): "Right-sided lower tummy pain since this morning, sounds very uncomfortable — booked to duty GP telephone triage."',
      reason: 'Telephone triage — acute abdominal pain.'
    },
    timeMap: [
      { t:'0–1',  h:'Open & listen',        d:'Let her tell the story. On the phone your ears are your examination — note breathlessness, pauses, pain in her voice.' },
      { t:'1–5',  h:'Focused history + red flags', d:'Pain, LMP (6 weeks!), contraception stopped, trying to conceive, bleeding/spotting, shoulder-tip pain, dizziness on standing. The ectopic question must be asked by minute 4.' },
      { t:'5–6',  h:'Summarise & share',     d:'"Late period, trying for a baby, one-sided pain, shoulder ache, lightheaded — I have to treat this as a possible ectopic pregnancy until proven otherwise."' },
      { t:'6–10', h:'Management = disposition', d:'Same-day EPAU / A&E — today, not tomorrow. Pregnancy test before leaving but do NOT wait on it. Confirm transport and who is with her.' },
      { t:'10–12',h:'Safety-net & close',    d:'999 triggers: collapse, sudden severe pain, heavy bleeding. Acknowledge what this might mean for a wanted pregnancy. Confirm she can repeat the plan back.' }
    ],
    wordPics: {
      fail: 'Anchors on appendicitis or UTI; never asks LMP or contraception; books a routine face-to-face for tomorrow; safety-nets with "ring back if worse"; the emotional line — "we\'ve been trying" — goes completely unanswered.',
      pass: 'Asks LMP and recognises possible ectopic; elicits at least one red flag; sends her to EPAU/A&E the same day; gives 999 triggers; acknowledges the pregnancy hope at least briefly.',
      exc:  'Names the ectopic possibility honestly but without panic; checks shoulder-tip pain, orthostatic symptoms AND bleeding unprompted; arranges transfer while explicitly not delaying for the urine test; confirms transport and company; holds the emotional weight ("whatever this turns out to be, ringing now was right").'
    },
    avoid: [
      { dont:'"It\'s probably nothing serious, but let\'s get you checked just in case."', instead:'"One thing we always have to rule out with this picture is a pregnancy outside the womb — that\'s why you need to be seen today."', why:'Minimising language buries the urgency; honest naming earns the management mark.' },
      { dont:'"Can you come in tomorrow morning and we\'ll examine you?"', instead:'"This can\'t wait for the surgery. I want you in the early pregnancy unit this afternoon — let\'s sort out how you get there."', why:'A routine review of a possible ectopic is the single fastest way to fail this station.' },
      { dont:'"Try not to worry."', instead:'"I can hear how much this pregnancy would mean. You did the right thing ringing now."', why:'"Don\'t worry" dismisses; naming the hope relates.' }
    ]
  },

  'knee-pain-walker': {
    ceg: ['Older adults', 'New & undifferentiated presentations'],
    stem: {
      name: 'Donald Harris', age: '65 years · male',
      pmh: ['Osteoarthritis left knee (4 years ago — settled with physiotherapy)', 'Hyperlipidaemia', 'BMI 31'],
      meds: ['Atorvastatin 20 mg ON'],
      allergy: 'NKDA',
      recent: 'Medication review 8 months ago. Note: "Recently widowed. Declined bereavement support at the time."',
      reason: 'Video consultation: right knee pain. Patient told reception "it\'s urgent — I have a deadline".'
    },
    timeMap: [
      { t:'0–1',  h:'Open & listen',        d:'He declares the agenda himself: "don\'t tell me to stop." Ask about the walk before the knee — the why matters more than the joint.' },
      { t:'1–5',  h:'Focused history + exam', d:'Mechanical screen: locking, giving way, swelling, morning stiffness, walking distance. Ask for the examination findings — they\'re provided on request. Probe what the walk means — Margaret surfaces here.' },
      { t:'5–6',  h:'Summarise & share',     d:'"This behaves like wear-and-tear in the inner half of the knee — and I\'ve heard why this walk can\'t simply be cancelled."' },
      { t:'6–10', h:'Shared management',     d:'Graded plan: quads work, poles back, downhill technique, topical NSAID ± oral with PPI cover, weight conversation handled kindly. A 4-week check-in, not a verdict.' },
      { t:'10–12',h:'Safety-net & close',    d:'Red flags: sudden swelling, locking, giving way, systemic symptoms. Tactful bereavement signpost (Cruse). Deal confirmed.' }
    ],
    wordPics: {
      fail: 'Orders an X-ray or MRI reflexively and hides behind it; tells him to cancel the walk; never asks why the walk matters, so Margaret never comes up; management is "painkillers and rest"; no review point.',
      pass: 'Recognises medial-compartment OA clinically; gives a structured non-operative plan; doesn\'t forbid the walk; acknowledges the bereavement once it surfaces; sets a review and basic red-flag safety-net.',
      exc:  'Asks about the walk before the knee, so the grief story arrives early and shapes everything; negotiates a written 4-week graded plan with an explicit re-talk point; handles weight and NSAID risk without preaching; signposts Cruse so it lands as care, not dismissal.'
    },
    avoid: [
      { dont:'"At your age, some wear and tear is to be expected."', instead:'"This looks like wear-and-tear in the inner side of the knee — which we can work with. It does not automatically mean stopping."', why:'"At your age" patronises and closes the conversation.' },
      { dont:'"I really think you should consider cancelling the walk."', instead:'"I don\'t want to cancel anything today. I want a four-week plan and an honest check-in — then we decide together."', why:'Dictating loses the negotiation mark and the patient.' },
      { dont:'"We\'ll get an X-ray and take it from there."', instead:'"An X-ray wouldn\'t change what we do next — the diagnosis is clinical and the plan starts today."', why:'Reflex imaging signals you don\'t know the OA guidance.' }
    ]
  },

  'home-visit-confusion': {
    ceg: ['Older adults', 'Health disadvantage & vulnerabilities'],
    stem: {
      name: 'Edith Saunders', age: '84 years · female',
      pmh: ['Hypertension', 'Osteoarthritis', 'Mild memory impairment — last documented 18 months ago'],
      meds: ['Amlodipine 5 mg OD', 'Co-codamol 30/500 QDS PRN — started 4 weeks ago (locum, knee flare)'],
      allergy: 'Penicillin — rash',
      recent: '⚠ Daughter (June, primary carer) phoned today: "Mum\'s been confused, more forgetful and not eating for two weeks. She left the cooker on. Please can someone come."',
      reason: 'Urgent video consultation — daughter connects the call from the flat.'
    },
    timeMap: [
      { t:'0–1',  h:'Open & listen',        d:'June starts the call with Edith beside her. Hear her fortnight in her own words — then greet Edith directly, by name, on screen.' },
      { t:'1–5',  h:'Focused history + exam', d:'Delirium screen, not dementia assumptions: timeline, fluctuation, urine symptoms, fluids, the NEW co-codamol, the fall. Gather what video allows (observation, 4AT questions, home readings via June) and arrange same-day in-person examination + urinalysis.' },
      { t:'5–6',  h:'Summarise & share',     d:'"A two-week change this fast is usually something ON TOP of memory problems — often an infection or a medicine — and those we can treat."' },
      { t:'6–10', h:'Shared management',     d:'MSU + bloods today; stop/reduce co-codamol; fluids plan; admission threshold stated. Then the second patient: "June — when did you last have a night off?" Carer referral.' },
      { t:'10–12',h:'Safety-net & close',    d:'999: drowsy, fitting, sudden deterioration. Surgery: more confused, another fall. Write it down — a frightened carer at 2am needs paper, not memory.' }
    ],
    wordPics: {
      fail: 'Accepts "dementia getting worse" and refers to memory clinic routinely; never reviews the new co-codamol; talks over Edith to the daughter throughout the call; June\'s exhaustion is never asked about; no same-day investigations despite a 2-week acute change.',
      pass: 'Treats it as delirium until proven otherwise; examines and sends MSU/bloods; reviews and stops the opioid; speaks to Edith directly at least some of the time; gives a 999-vs-surgery safety-net; mentions support for June.',
      exc:  'Runs the full delirium screen including drugs and dehydration; assesses Edith\'s capacity for today\'s decisions while keeping her dignity; explicitly makes June a patient too — carer review, respite referral, acknowledges the pension top-ups; leaves a written plan with explicit escalation triggers.'
    },
    avoid: [
      { dont:'(To the daughter, over Edith\'s head) "How long has she been like this?"', instead:'"Edith — I\'m the doctor, I\'ve come to see you. Tell me how you\'ve been." (Then cross-check with June.)', why:'Talking over the patient is a Relating-to-Others fail you can\'t recover from.' },
      { dont:'"It sounds like her dementia is progressing — I\'ll refer her to the memory clinic."', instead:'"A change this quick is usually delirium — something treatable sitting on top. Let\'s find it before we re-label her memory."', why:'Dementia-by-default misses the reversible cause — the entire point of the station.' },
      { dont:'"You\'re doing a wonderful job — keep it up."', instead:'"June, I want to ask about you, not just your mum. When did you last sleep through? There is real help I can set up this week."', why:'Praise without action abandons the carer; the carer IS the hidden agenda.' }
    ]
  },

  'acne-teen': {
    ceg: ['Children & young people', 'Mental health & addiction'],
    stem: {
      name: 'Sophie Edwards', age: '16 years · female',
      pmh: ['Nil significant', 'GCSEs this summer (per mother\'s booking note)'],
      meds: ['No regular medication', 'OTC tried: benzoyl peroxide 5% (stopped — stinging), tea-tree oil'],
      allergy: 'NKDA',
      recent: 'Appointment booked by mother (Karen): "Acne getting really bad, over-the-counter not working, she\'s not coping — needs something stronger."',
      reason: 'Video consultation. Mother is also on screen.'
    },
    timeMap: [
      { t:'0–1',  h:'Open & listen',        d:'Karen talks first. Thank her — then ask permission to hear Sophie directly. Whose consultation this becomes is decided in this minute.' },
      { t:'1–5',  h:'Focused history + impact', d:'Grade the acne (distribution, cysts, scarring). Then the real history: PE stopped, sleepovers stopped, "headaches" before assemblies. Screen mood explicitly, including hopelessness.' },
      { t:'5–6',  h:'Summarise & share',     d:'"Moderate inflammatory acne with early scarring — and it\'s costing you school and friends. Both halves deserve treatment."' },
      { t:'6–10', h:'Shared management',     d:'First-line fixed-combination topical (adapalene/BPO), how to use it, the 6–8 week truth. Address mum\'s isotretinoin expectation respectfully. Offer Sophie her own follow-up, alone if she prefers.' },
      { t:'10–12',h:'Safety-net & close',    d:'Mood safety-net with names and numbers (Kooth, Papyrus HOPELINEUK). Review at 4 weeks. End by addressing Sophie, not Karen.' }
    ],
    wordPics: {
      fail: 'Conducts the whole consultation with the mother while Sophie says nothing; prescribes (or flatly refuses) isotretinoin territory without explaining the referral structure; never asks about mood despite the body language; no follow-up offered.',
      pass: 'Gets Sophie talking; grades the acne and starts evidence-based topical treatment; screens psychological impact; explains why isotretinoin is a specialist decision without dismissing Karen; books review with a mood safety-net.',
      exc:  'Renegotiates the room so Sophie owns the consultation ("could I hear from Sophie first?"); uncovers the school avoidance and names it as the real burden; sets treatment expectations honestly (weeks, purge, sunscreen); offers a confidential solo follow-up; safety-nets hopelessness with specific services and a warm route back.'
    },
    avoid: [
      { dont:'"Acne is very common at your age — most people grow out of it."', instead:'"Acne isn\'t just skin — it decides how you walk into a room. Tell me what it\'s been costing you."', why:'Normalising dismisses the suffering that brought them in.' },
      { dont:'(Only to the mother) "Has she tried anything from the pharmacy?"', instead:'"Karen, thank you — Sophie, would it be OK if I heard it from you first, in your own words?"', why:'Every question routed through the parent silences the actual patient.' },
      { dont:'"Isotretinoin is far too dangerous — let\'s not go there."', instead:'"Isotretinoin is brilliant when it\'s the right call — and it lives with the specialists. Let\'s use the next three months so well that we\'ll know."', why:'Catastrophising the drug dismisses the mother\'s lived experience of it working.' }
    ]
  },

  'third-party-meno': {
    ceg: ['Gender, reproductive & sexual health', 'Professional & ethical dilemmas'],
    stem: {
      name: 'Helen Carter (call is from husband, Andrew)', age: '52 years · female',
      pmh: ['Nil significant on file', 'Last attended 3 years ago (cervical screening — normal)'],
      meds: ['No regular medication'],
      allergy: 'NKDA',
      recent: '⚠ Reception note: husband requested call-back "about my wife — she\'s not herself". NO consent on file to discuss Helen\'s care with any third party. Helen has not booked or requested anything herself.',
      reason: 'Telephone call-back to the husband.'
    },
    timeMap: [
      { t:'0–1',  h:'Open & listen',        d:'Let Andrew pour it out — six months of worry arrives in one breath. Don\'t recite the confidentiality rule before you\'ve heard the human being.' },
      { t:'1–5',  h:'Hear the story + screen', d:'What\'s changed, the children, sleep, the row that scared their daughter. Gently screen safety — hers, his, the children\'s. Note "she doesn\'t want me near her" and return to it.' },
      { t:'5–6',  h:'Name the boundary',     d:'"I can listen to you all day — what I can\'t do is discuss Helen\'s records or prescribe for someone who isn\'t my patient on this call. Here\'s what we CAN do."' },
      { t:'6–10', h:'Shared plan',           d:'The route in: Andrew tells Helen openly and invites her to book; offer a named slot; send NHS menopause / Women\'s Health Concern links so the conversation has a launchpad.' },
      { t:'10–12',h:'Safety-net & close',    d:'If Helen mentions self-harm — duty doctor today, 111 option 2, Samaritans 116 123. If conflict frightens the children again, that changes what happens next. Door left open for him too.' }
    ],
    wordPics: {
      fail: 'Either discusses Helen\'s details / agrees to prescribe HRT on the husband\'s say-so, or hides behind "data protection" so coldly the call ends with nothing; the row that frightened the daughter is never explored; no route in for Helen.',
      pass: 'Holds the confidentiality line in plain English while staying warm; listens to Andrew\'s fear; screens for safety at least once; plan centres on Helen booking her own appointment with information offered to Andrew.',
      exc:  'Separates perfectly what can and can\'t be done — and makes the "can" generous: a named appointment offer, quality resources, language Andrew can use to raise it with Helen openly rather than behind her back; the safety screen is woven in naturally; Andrew hangs up feeling helped, not handled.'
    },
    avoid: [
      { dont:'"I\'m sorry, due to patient confidentiality I\'m unable to discuss this with you."', instead:'"Helen hasn\'t asked me to share anything, so I won\'t — but nothing stops me listening to you, and nothing stops us getting her seen."', why:'The bureaucratic recitation is technically right and relationally a fail.' },
      { dont:'"It does sound like the menopause — I\'ll put a prescription ready for her to collect."', instead:'"It might well be perimenopause — and that\'s exactly why she needs her own appointment, so she gets it diagnosed and treated properly."', why:'Prescribing for an absent patient on third-party say-so is indefensible.' },
      { dont:'"Have you tried talking to her about it?"', instead:'"The most powerful move is the open one: \'I rang the GP because I\'m worried about you\' — and then she chooses. Would she let you book it together?"', why:'Of course he\'s tried; give him a script, not a platitude.' }
    ]
  },

  'cough-smoker-2ww': {
    ceg: ['Long-term conditions & cancer', 'Urgent & unscheduled care'],
    stem: {
      name: 'Raymond Powell', age: '56 years · male',
      pmh: ['Hypertension — well controlled', 'Smoker: 20/day × 35 years (recorded 14 months ago)'],
      meds: ['Ramipril 5 mg OD'],
      allergy: 'NKDA',
      recent: 'Last seen 14 months ago (BP review — stable). No chest imaging anywhere on record. Self-booked today: "chesty cough, needs antibiotics for work".',
      reason: 'Video consultation — cough, wants to get back on site.'
    },
    timeMap: [
      { t:'0–1',  h:'Open & listen',        d:'He frames it as a transaction: antibiotics, back to work. Accept the person, not the framing. "Three months is a long time — walk me through it."' },
      { t:'1–5',  h:'Red-flag harvest',      d:'Character change, the gravelly voice (6 weeks), the stone of weight, fatigue — and the throwaway "streak of blood". Slow down on it. Smoking story without judgement.' },
      { t:'5–6',  h:'Summarise & share',     d:'"A changed cough, voice change, weight loss, blood — with your smoking years, I\'d be doing you a disservice with an antibiotic. This needs an urgent X-ray."' },
      { t:'6–10', h:'Management = the pathway', d:'Urgent CXR on the suspected-cancer pathway (NICE NG12) — explained honestly: most get the all-clear, but it must be done properly. No antibiotics. Cessation offer, door open.' },
      { t:'10–12',h:'Safety-net & close',    d:'A&E triggers: more than a streak of blood, breathless at rest, chest pain. Results follow-up BOOKED with you — never left to a letter. Check what he\'ll tell his wife.' }
    ],
    wordPics: {
      fail: 'Prescribes the antibiotics and moves on; the haemoptysis line floats past unexamined; no weight or voice questions; "come back if it doesn\'t settle" — the 2WW pathway is never mentioned and the window closes.',
      pass: 'Declines antibiotics with a reason; elicits most red flags including the blood; arranges urgent CXR under NG12; explains it as ruling out something serious; books follow-up and gives A&E triggers.',
      exc:  'Catches the throwaway about blood and visibly slows the consultation for it; names the cancer question honestly without theatrics ("it\'s the thing I\'d be careless to skip"); the 2WW explanation leaves him informed but not abandoned; cessation is offered as backing, not blame; results route is nailed down to a date.'
    },
    avoid: [
      { dont:'"I\'ll give you a course of antibiotics and if it\'s not better in two weeks, come back."', instead:'"An antibiotic would be me treating the easy thing. Three months, voice change, blood — you need an urgent X-ray, this week."', why:'Accepting the patient\'s framing is the designed trapdoor of this station.' },
      { dont:'"It\'s probably nothing, but we\'ll do an X-ray to be safe."', instead:'"Most people on this urgent pathway get the all-clear — but with your story it would be wrong of me not to do it properly, and fast."', why:'"Probably nothing" undercuts the urgency and he won\'t attend.' },
      { dont:'"You really need to stop smoking — this is what it does."', instead:'"You quit for four months once — so you can. When you\'re ready, the stop-smoking team has more in the locker than they did three years ago."', why:'Blame at the moment of fear shuts the door on cessation forever.' }
    ]
  },

  'insulin-ramadan': {
    ceg: ['Ethnicity, culture & diversity', 'Long-term conditions & cancer'],
    stem: {
      name: 'Imran Shah', age: '48 years · male',
      pmh: ['Type 2 diabetes — 7 years', 'BMI 36', 'No retinopathy at last screen', 'Occupation: taxi driver'],
      meds: ['Metformin 1 g BD', 'Gliclazide 80 mg BD'],
      allergy: 'NKDA',
      recent: '⚠ Diabetes nurse note last week: HbA1c 84 mmol/mol (target 53). Fastings 11–14 self-reported. DNA\'d last two annual reviews. Nurse advised "treatment needs stepping up" — patient "reluctant, Ramadan soon".',
      reason: 'Video diabetes review. Ramadan begins in 5 weeks.'
    },
    timeMap: [
      { t:'0–1',  h:'Open & listen',        d:'He declares the line in the sand: "I\'m not stopping fasting." Don\'t argue with it. "Tell me how diabetes has been for you this year" buys the whole story.' },
      { t:'1–5',  h:'Focused history + ICE', d:'18 months unseen, shift-work eating, the father\'s MI at 60, the cousin who started insulin and died. The insulin belief ("last stop before death") must be heard before it can be moved.' },
      { t:'5–6',  h:'Summarise & share',     d:'"Your sugars are far above where your heart and kidneys are safe — and I\'ve heard that fasting is non-negotiable and what insulin means to you. There are options that respect both."' },
      { t:'6–10', h:'Shared management',     d:'SGLT2i + GLP-1 RA before insulin: weight, cardio-renal protection, fasting-friendlier. Ramadan plan per Diabetes UK/IDF guidance. DVLA rules for a taxi driver on gliclazide discussed straight.' },
      { t:'10–12',h:'Safety-net & close',    d:'Hypo plan in fasting terms: sugar to hand, the symptoms, and the ruling — breaking the fast for safety is permitted, "the rule that protects the rule". Nurse review BEFORE Ramadan booked.' }
    ],
    wordPics: {
      fail: 'Insists he mustn\'t fast (or colludes that fasting needs no plan); pushes insulin as the only option without touching the cousin\'s story; DVLA never mentioned for a professional driver on a sulfonylurea; he leaves planning to fast in secret with no hypo plan.',
      pass: 'Respects the fast as a starting position; explores the insulin belief; offers SGLT2i/GLP-1 as the next step with reasons; covers hypo safety in Ramadan and books pre-Ramadan review; mentions DVLA.',
      exc:  'Uses the cousin\'s story as the doorway rather than an obstacle ("can I tell you what\'s changed about insulin since then?"); shows working knowledge of fasting risk categories and Islamic permission to break the fast for safety — earning trust visibly; lands a concrete plan: new agent started now, glucose checks while fasting are not breaking it, named nurse review before the first fast, DVLA handled honestly.'
    },
    avoid: [
      { dont:'"With sugars like these, fasting would be very dangerous — I\'d strongly advise against Ramadan this year."', instead:'"People with diabetes fast safely every year WITH a plan. Let\'s build yours — and I\'ll show you the rules that exist precisely to keep you safe."', why:'A frontal assault on the fast ends the consultation; he\'ll fast anyway, unplanned.' },
      { dont:'"Insulin is nothing to be scared of — millions of people use it."', instead:'"You watched your cousin start insulin and die. Can I tell you what I understand about insulin in 2026 that wasn\'t true for him?"', why:'Statistics don\'t move a belief built on a death in the family; respect plus new information can.' },
      { dont:'"We\'ll cross the DVLA bridge if we come to it."', instead:'"Because you drive for a living, the medicines that can drop your sugar come with notification rules — let\'s go through exactly what they mean for your licence, today."', why:'Dodging DVLA with a professional driver is a probity and safety failure.' }
    ]
  },

  'lft-alcohol': {
    ceg: ['Investigations & results', 'Mental health & addiction'],
    stem: {
      name: 'Charles Bennett', age: '42 years · male',
      pmh: ['Nil significant'],
      meds: ['No regular medication'],
      allergy: 'NKDA',
      recent: '⚠ Bloods 2 weeks ago (tiredness): ALT 108, GGT 215, AST 79, MCV 102 — recalled to discuss. Booking note: "patient asked reception to keep it quick, court at 2pm".',
      reason: 'Results discussion — abnormal liver function tests.'
    },
    timeMap: [
      { t:'0–1',  h:'Open & contract',       d:'He sets a clock on you ("court at 2"). Agree a contract: "Five minutes to look at these together, then a plan." Don\'t race — structure.' },
      { t:'1–5',  h:'Results + real history', d:'Walk the pattern: GGT, AST:ALT, MCV. Then the honest units tally (his "14" becomes 35–40), the 4am waking, the RUQ ache — and the jittery, sweating dry week. That last one changes the safety advice.' },
      { t:'5–6',  h:'Summarise & share',     d:'"This particular fingerprint — these enzymes plus larger red cells — most commonly means alcohol is injuring the liver. I\'m not labelling you; I\'m telling you what the next step depends on."' },
      { t:'6–10', h:'Shared management',     d:'Screen formally (AUDIT-C, dependence features). The withdrawal warning: do NOT stop abruptly with those jitters — cut down with support. Bloods: hepatitis, ferritin, FIB-4/fibroscan. Alcohol nurse offered, his choice.' },
      { t:'10–12',h:'Safety-net & close',    d:'Jaundice, vomiting blood, black stools, confusion → urgent. Repeat LFTs in 6 weeks, booked. Name the partnership wound — the drinking and the disappointment aren\'t separate.' }
    ],
    wordPics: {
      fail: 'Reads the numbers out and rebooks bloods in 3 months as he requested; takes "maybe 14 units" at face value; lectures or labels ("you\'re drinking far too much") so he shuts down; misses the withdrawal history and tells him to stop drinking immediately — actively dangerous.',
      pass: 'Interprets the pattern correctly and says so in plain English; gets to a true units figure without judgement; screens with AUDIT-C; warns against abrupt cessation; orders the liver screen and books follow-up.',
      exc:  'Lands the diagnosis honestly AND keeps him in the room — curiosity instead of accusation; connects the partnership rejection, the 4am waking and the drinking as one story; the withdrawal danger is explained as care, not control; the plan is a menu he chooses from, ending with a booked review he\'ll actually attend.'
    },
    avoid: [
      { dont:'"Your liver tests are deranged and the pattern suggests you\'re drinking too much alcohol."', instead:'"These results have a story in them. Can we look at them together — and you tell me where you think alcohol fits?"', why:'Verdict-first creates a defendant; shared reading creates a patient.' },
      { dont:'"You should stop drinking completely, starting today."', instead:'"That jittery, sweaty week tells me your body has adapted — stopping suddenly can actually be dangerous. We cut down properly, with support."', why:'Abrupt cessation advice with withdrawal features risks seizures — a clinical error, not just a style one.' },
      { dont:'"Do you think you might be an alcoholic?"', instead:'"Lots of professionals drift up the units without noticing — the tally matters more than any label. Shall we count it honestly together?"', why:'The label triggers the exact defence he walked in with.' }
    ]
  },

  'sleep-paeds': {
    ceg: ['Children & young people', 'Mental health & addiction'],
    stem: {
      name: 'Aaron Patel (mother Naomi consulting)', age: '4 years · male',
      pmh: ['Nil — growth and development normal', 'Nursery: no concerns flagged'],
      meds: ['None. Mother mentions melatonin gummies bought in the US'],
      allergy: 'None known',
      recent: 'Mother booked video re: Aaron\'s sleep. ⚠ In mother\'s own record: postnatal depression after Aaron\'s birth — treated and resolved. Father works nights 3×/week.',
      reason: 'Video consultation with mother (child at nursery).'
    },
    timeMap: [
      { t:'0–1',  h:'Open & listen',        d:'"Please tell me there\'s something we can give him." Hear the plea under the request — months of broken nights. Don\'t answer the prescription question yet.' },
      { t:'1–5',  h:'Two histories',         d:'Aaron\'s: pattern, routine, red-flag screen (snoring, apnoeas, growth, daytime function — all fine). Naomi\'s: the tears, the strained marriage, "worst since he was born". Screen her mood explicitly — the PND history is in the notes.' },
      { t:'5–6',  h:'Summarise & share',     d:'"Aaron is a healthy, clever 4-year-old who\'s learned night-time gets him you. That\'s fixable. And you sound exhausted in a way that worries me more than his sleep."' },
      { t:'6–10', h:'Shared management',     d:'Behavioural plan honestly sold (consistency + one rough fortnight): graduated retreat, same routine, one room. No melatonin — and why. Then HER plan: own appointment next week, named.' },
      { t:'10–12',h:'Safety-net & close',    d:'For Naomi: if hopelessness or thoughts of harm — 111 option 2, Samaritans 116 123, or straight back to you. Health visitor + Sleep Charity resources sent. Review for both booked.' }
    ],
    wordPics: {
      fail: 'Treats it purely as a paediatric sleep problem; prescribes or promises melatonin; the crying on screen goes unremarked; the PND history is never connected; mum leaves with a leaflet and no appointment of her own.',
      pass: 'Takes a proper sleep history and excludes red flags; explains behavioural management and declines melatonin with a reason; notices Naomi\'s distress and screens her mood; signposts the health visitor; arranges follow-up.',
      exc:  'Reframes Aaron\'s behaviour so blame evaporates ("he\'s clever — he found a way to get you"); is honest about the rough fortnight so the plan survives night three; pivots to Naomi with her own words ("worst since he was born") and the notes\' PND history; she leaves with her own named appointment and a safety-net she\'ll actually use.'
    },
    avoid: [
      { dont:'"Have you tried a consistent bedtime routine?"', instead:'"You\'ve tried routines, melatonin, a weighted blanket — you\'ve been working at this for months. Let me show you why the fortnight of consistency usually breaks it."', why:'Suggesting the obvious tells her you weren\'t listening to what she\'s already done.' },
      { dont:'"Children\'s sleep usually settles by itself — try not to worry."', instead:'"This is fixable, and I\'ll give you the exact method — but first, how are YOU doing? You\'ve cried twice in ten minutes."', why:'Reassurance about the child abandons the actual patient on the screen.' },
      { dont:'"I\'ll prescribe a small dose of melatonin to break the cycle."', instead:'"Melatonin at his age, for this pattern, doesn\'t work and isn\'t licensed — the issue is behavioural, and behavioural fixes actually last."', why:'The reflex prescription fails the station\'s central management test.' }
    ]
  }

};
