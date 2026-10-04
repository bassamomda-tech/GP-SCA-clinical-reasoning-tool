/* ============================================================
   Reasoning GP — The Hot Seat: add-on set, batch 5
   Stem, knowledge, model consultation, scorecard tasks, extras,
   knowledge base, playbook, links and examiner pitfalls for
   20 further cases. Loaded after sca-pitfalls.js and
   before sca-practice.js; merges into the existing maps and
   attaches to the case objects exactly as those files do.
   Educational; original content; primary sources cited.
   ============================================================ */
(function(){
  var ADD = {
 "aaa-incidental": {
  "stem": {
   "name": "Brian Castle",
   "age": "69-year-old man",
   "pmh": [
    "Hypertension",
    "Raised cholesterol",
    "Smoker — trying to stop"
   ],
   "meds": [
    "Amlodipine"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "Ultrasound report received: abdominal aortic aneurysm, maximum diameter 4.3 cm. Patient has had the result letter. Family history: brother died of a ruptured aorta.",
   "reason": "Video appointment requested: “worried sick about the aneurysm letter”."
  },
  "knowledge": {
   "guideline": "NICE NG156 (Abdominal aortic aneurysm, 2020) · NHS AAA Screening Programme surveillance guidance (GOV.UK) · DVLA Assessing fitness to drive (2025) · NICE NG209 (Tobacco, 2021) · NICE NG136 (Hypertension, 2019) · NICE NG238 (Cardiovascular risk and lipids, 2023)",
   "summary": "A 4.3 cm aneurysm is small. It needs referral to the regional vascular service, regular ultrasound surveillance and risk-factor control — not emergency surgery and not a life on hold.",
   "points": [
    {
     "h": "Size bands",
     "t": "NHS AAA Screening Programme: small 3.0–4.4 cm (ultrasound every 12 months), medium 4.5–5.4 cm (every 3 months), large 5.5 cm or more. NICE NG156 recommends surveillance at the same frequency as the screening programme."
    },
    {
     "h": "Referral from primary care",
     "t": "NICE NG156: refer an AAA of 3.0–5.4 cm to a regional vascular service, to be seen within 12 weeks of diagnosis; 5.5 cm or larger within 2 weeks. A symptomatic aneurysm needs emergency assessment whatever its size."
    },
    {
     "h": "When repair is considered",
     "t": "Repair is generally considered for an asymptomatic AAA of 5.5 cm or more, or one that grows by more than 1 cm in a year (NICE NG156; screening programme referral criteria). It is then a planned operation, not an emergency."
    },
    {
     "h": "What he can change",
     "t": "Stopping smoking is the most important modifiable step for an aneurysm: offer stop-smoking support (NICE NG209). Keep blood pressure to target (NICE NG136) and review lipid management (NICE NG238) to reduce his overall cardiovascular risk."
    },
    {
     "h": "Driving and activity",
     "t": "DVLA: Group 1 (car) drivers need to notify only at 6.0 cm or more, and must not drive at 6.5 cm or more. Group 2 (lorry, bus) drivers must notify at any size and must not drive at 5.5 cm or more. Normal walking and day-to-day activity do not need to stop."
    },
    {
     "h": "Rupture red flags",
     "t": "Sudden severe abdominal, back or flank pain, collapse or feeling faint in someone with a known AAA is a 999 emergency."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Castle, I’m Dr Lee. Can I just check your date of birth and that you’re somewhere you can talk? … Thank you. I can see you’ve had the scan letter. How are you doing with it?",
    "dom": "rto",
    "why": "Checks identity on video, then opens with his experience, not the number"
   },
   {
    "who": "pt",
    "text": "Frightened the life out of me. Four point three centimetres. My brother died when his aorta burst — just dropped. I’ve not slept. Do I need an operation now? Should I stop driving, lifting, everything? I’ve not even been out for a walk."
   },
   {
    "who": "dr",
    "text": "I’m really sorry — that letter landed on top of something very painful. I want to answer every one of those questions. Can I first ask a few things so the answers fit you, and then we’ll make a plan together?",
    "dom": "gs",
    "why": "Acknowledges distress and sets a clear agenda"
   },
   {
    "who": "pt",
    "text": "Please. I just want to know where I stand."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "First, the important one: have you had any pain in your tummy, back or side, or any dizzy spells or blackouts?",
    "dom": "tasks",
    "why": "Rules out a symptomatic aneurysm first"
   },
   {
    "who": "pt",
    "text": "No. Nothing. I feel completely normal — that’s what’s so frightening."
   },
   {
    "who": "dr",
    "text": "That’s actually very good news, and I’ll explain why. Can you tell me about your brother — what happened?",
    "dom": "rto",
    "why": "Follows the dominant emotional cue"
   },
   {
    "who": "pt",
    "text": "He was fine one day, gone the next. Collapsed at home. They said his aorta burst. I keep picturing it happening to me."
   },
   {
    "who": "dr",
    "text": "That must be a terrible thing to carry, and it makes complete sense this letter has brought it all back. Did anyone tell you how big his was, or whether it had been found before?",
    "dom": "rto",
    "why": "Validates, then gently tests the comparison he is making"
   },
   {
    "who": "pt",
    "text": "I don’t know. He never said anything about having one."
   },
   {
    "who": "dr",
    "text": "Thank you. And how are the cigarettes going — you said you were trying to stop?",
    "dom": "tasks",
    "why": "Explores the main modifiable risk factor"
   },
   {
    "who": "pt",
    "text": "I’d cut right down. Honestly, since the letter it’s gone back up. Nerves."
   },
   {
    "who": "dr",
    "text": "Understandable. And the driving you mentioned — is that just your car, or do you drive a lorry or bus at all?",
    "dom": "tasks",
    "why": "Clarifies licence group before giving DVLA advice"
   },
   {
    "who": "pt",
    "text": "Just the car."
   },
   {
    "phase": "Explanation",
    "clock": "4–7 min",
    "who": "dr",
    "text": "Right — let me put this in proportion, because the reality is much less frightening than it feels. At 4.3 centimetres your aneurysm is in the small group. The risk of it bursting at this size is low. You don’t need an emergency operation, and it isn’t about to go any minute.",
    "dom": "tasks",
    "why": "Accurate reassurance: small AAA, low risk, no emergency surgery"
   },
   {
    "who": "pt",
    "text": "But my brother’s…"
   },
   {
    "who": "dr",
    "text": "Many people whose aneurysm bursts never knew they had one, so it was never measured or watched. Yours has been found while it’s small, and that puts you in a very different position. The whole point of finding it is so we can keep an eye on it.",
    "dom": "rto",
    "why": "Dismantles the brother comparison with facts and empathy"
   },
   {
    "who": "pt",
    "text": "So what actually happens now?"
   },
   {
    "who": "dr",
    "text": "I’ll refer you to the vascular team, who should see you within about 12 weeks. They’ll arrange an ultrasound scan every year to measure it. Many small ones grow slowly. Only if it reached about 5.5 centimetres, or grew quickly, would they talk about a planned repair — a booked operation, nothing like an emergency.",
    "dom": "tasks",
    "why": "Explains NG156 referral, surveillance interval and repair thresholds"
   },
   {
    "who": "pt",
    "text": "Every year? That’s it?"
   },
   {
    "who": "dr",
    "text": "That’s it, unless it changes. And on driving: for a car licence you don’t need to tell the DVLA at this size. You can keep driving.",
    "dom": "tasks",
    "why": "Correct DVLA Group 1 advice"
   },
   {
    "phase": "Shared management",
    "clock": "7–10 min",
    "who": "dr",
    "text": "Here’s the part I most want you to hear: you’re not helpless. Stopping smoking is the single most useful thing you can do for an aneurysm. Keeping your blood pressure and cholesterol well controlled protects your heart and circulation too. What would help you most with the smoking right now?",
    "dom": "rto",
    "why": "Frames risk-factor change as agency and invites his input"
   },
   {
    "who": "pt",
    "text": "Maybe I need proper help this time."
   },
   {
    "who": "dr",
    "text": "Then let’s refer you to the stop-smoking service — they give you medication and weekly support, and it works much better than willpower alone. I’ll also check your blood pressure and cholesterol and review your tablets.",
    "dom": "tasks",
    "why": "Offers evidence-based cessation support and CV risk review"
   },
   {
    "who": "pt",
    "text": "And walking? The garden?"
   },
   {
    "who": "dr",
    "text": "Please go back to both. Walking is good for you. Normal life doesn’t make an aneurysm burst — staying indoors frightened just takes your life away from you. If the vascular team want you to avoid anything very heavy, they’ll tell you.",
    "dom": "tasks",
    "why": "Gives explicit permission to resume normal activity"
   },
   {
    "who": "pt",
    "text": "(Exhales.) I’ve just been sat in the chair since that letter came."
   },
   {
    "phase": "Safety-net and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "One thing to know, just so you’re informed and not to worry you: if you ever had sudden severe pain in your tummy, back or side, or felt faint or collapsed, that’s a 999 call and you tell them you have an aneurysm. That’s the only thing to act on urgently, and it isn’t where you are now.",
    "dom": "gs",
    "why": "Specific rupture red flags without feeding the fear"
   },
   {
    "who": "pt",
    "text": "Okay. Sudden bad pain or collapse, 999."
   },
   {
    "who": "dr",
    "text": "Exactly. Can you tell me in your own words what you’ll say if someone asks what the doctor said today?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "It’s small, they’ll scan it every year, no operation now, stop smoking, and I can go for a walk."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll see you in a month with your blood pressure and to see how the smoking’s going — sooner if you’re struggling with the worry. How are you feeling now?",
    "dom": "gs",
    "why": "Defined follow-up and checks the emotional outcome"
   },
   {
    "who": "pt",
    "text": "Much better. I might actually sleep tonight."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Opened with how he is coping with the letter rather than the measurement; let him voice all his questions.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored the lost week (not sleeping, not walking), his smoking and his driving licence group.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Followed the brother’s death as the central cue, and the smoking relapse since the letter.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (about to burst, needs an operation); concern (dying like his brother); expectation (emergency surgery, stop all activity).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Symptom screen for pain or collapse; BP and lipid review; referral to vascular service for surveillance ultrasound.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Symptomatic versus asymptomatic AAA; small versus larger aneurysm; his fear versus the actual risk.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Ruled out current symptoms first and gave explicit rupture red flags with 999.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named it as a small aneurysm with low rupture risk and explained the size thresholds for repair.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Referral to be seen within 12 weeks (NICE NG156), annual ultrasound, stop-smoking service, permission to resume walking and driving.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Hypertension and cholesterol control reviewed; smoking relapse addressed; DVLA Group 1 advice given correctly.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Teach-back, rupture red flags, review in a month and an open door for the anxiety.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Investigations & results",
    "Long-term conditions & cancer",
    "Older adults"
   ],
   "stem": {
    "name": "Brian Castle",
    "age": "69 years · male",
    "pmh": [
     "Hypertension",
     "Raised cholesterol",
     "Smoker (trying to stop)"
    ],
    "meds": [
     "Amlodipine"
    ],
    "allergy": "NKDA recorded",
    "recent": "⚠ Ultrasound: AAA, maximum diameter 4.3 cm. Result letter sent to patient. FH: brother — died of ruptured aorta.",
    "reason": "Video appointment. “Is it about to burst?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "He arrives with a list of frightened questions. Let him finish and promise to answer every one."
    },
    {
     "t": "1–4",
     "h": "Symptoms, brother, smoking",
     "d": "Pain or collapse first. Then the brother’s story, the smoking relapse and his licence group."
    },
    {
     "t": "4–7",
     "h": "Put it in proportion",
     "d": "Small, low risk, found early. Vascular referral within 12 weeks, yearly scans, repair only around 5.5 cm or rapid growth. Car driving continues."
    },
    {
     "t": "7–10",
     "h": "Give him agency",
     "d": "Stop-smoking service, BP and cholesterol. Explicit permission to walk and garden again."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Sudden severe pain or collapse — 999. Teach-back. Review in a month."
    }
   ],
   "wordPics": {
    "fail": "Either tells him not to worry without explaining why, or feeds the fear by listing what could go wrong; no symptom check; no vascular referral or surveillance plan; wrong or no advice on driving and activity; brother never mentioned.",
    "pass": "Checks for symptoms; explains small size and low risk; refers for surveillance; advises stopping smoking; gives rupture red flags; acknowledges the brother’s death.",
    "exc": "All of the above, plus: explains why an aneurysm found early and watched is in a different position from one that ruptures unrecognised; gives the NG156 referral timeframe, yearly scans and repair thresholds in plain words; correct DVLA advice after checking his licence; frames smoking cessation as control; gives explicit permission to live normally; teach-back and follow-up for the anxiety."
   },
   "avoid": [
    {
     "dont": "\"It’s only small, there’s really nothing to worry about.\"",
     "instead": "\"At this size the risk is low, and here is exactly how we’ll keep it that way.\"",
     "why": "Dismissive reassurance ignores his brother’s death and does not give him a plan to trust."
    },
    {
     "dont": "\"Avoid heavy lifting, straining and stressful situations for now.\"",
     "instead": "\"Please go back to walking and the garden. If the vascular team want you to avoid anything, they’ll tell you.\"",
     "why": "Vague restrictions confirm the catastrophe and keep him housebound."
    },
    {
     "dont": "\"You really must stop smoking or it will get bigger.\"",
     "instead": "\"Stopping smoking is the most useful thing you can do for it — shall we get you proper help this time?\"",
     "why": "A threat after a relapse drives shame; an offer of support gives him control."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Bereavement and fear",
     "t": "His brother’s sudden death has shaped how he hears the word “aneurysm”. Stopping all activity and losing sleep are signs of how much it has taken over."
    },
    {
     "h": "Smoking under stress",
     "t": "The letter has pushed his smoking back up. Support rather than blame."
    }
   ],
   "legal": [
    {
     "h": "DVLA",
     "t": "Group 1: notify DVLA at 6.0 cm or more; must not drive at 6.5 cm or more. Group 2: notify at any size; must not drive at 5.5 cm or more. At 4.3 cm with a car licence he can drive without notifying."
    }
   ],
   "professional": [
    {
     "h": "Communicating results",
     "t": "A significant result sent by letter without a conversation can cause harm. Offer a timely discussion when results carry emotional weight, and reflect on the practice’s results process (GMC Good Medical Practice 2024: communicate effectively)."
    },
    {
     "h": "Referral and safety",
     "t": "Make sure the NICE NG156 vascular referral is sent and he is enrolled in surveillance, so he is not lost to follow-up."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Local NHS stop-smoking service; the Circulation Foundation for patient information on aneurysms; bereavement support if the brother’s death remains raw."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Abdominal, back or flank pain — a symptomatic AAA needs emergency assessment",
     "Collapse, dizziness or fainting",
     "A tender pulsatile mass"
    ],
    "psychosocial": [
     "Brother died suddenly of a ruptured aorta",
     "Not sleeping, stopped walking and daily activities",
     "Smoking back up since the letter; car driver"
    ],
    "ice": [
     "Idea: the aneurysm could burst any minute and needs an operation now",
     "Concern: dying the way his brother did",
     "Expectation: emergency surgery and being told to stop everything"
    ]
   },
   "diagnosis": "Be precise: “At 4.3 centimetres this is a small aneurysm. The risk of it bursting at this size is low. It needs watching with a yearly scan, not an operation.”",
   "diagnosisLay": "“Think of a slightly stretched section of garden hose. At this size it’s not near bursting. We measure it every year, and if it ever stretched to the size where it could become a problem, the surgeons would reinforce it as a planned job.”",
   "management": {
    "reflectIce": "“You’ve been picturing what happened to your brother. Yours has been found early and small, and it will be watched — and that’s what makes the difference.”",
    "psychosocial": "Give permission to walk and garden again; offer stop-smoking support without blame; follow up the anxiety and consider bereavement support.",
    "sharedPlan": [
     "Refer to regional vascular service, to be seen within 12 weeks (NICE NG156); yearly ultrasound surveillance",
     "Stop-smoking service referral (NICE NG209); review BP (NICE NG136) and lipids (NICE NG238)",
     "Normal activity and car driving continue; no need to notify DVLA at this size"
    ],
    "safetyNet": [
     "Sudden severe abdominal, back or flank pain, feeling faint or collapse — 999 and say he has an aneurysm",
     "Review in a month; earlier if the worry is not settling"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Abdominal pain",
    "s": "Case walkthrough · aneurysm red flags",
    "href": "../cases/abdominal-pain.html"
   },
   {
    "ic": "🗺️",
    "t": "Abdominal mass pathway",
    "s": "Visual algorithm · pulsatile mass",
    "href": "algorithms/abdominal-mass.html"
   },
   {
    "ic": "💠",
    "t": "Smoking cessation protocol",
    "s": "Stop-smoking support · NICE NG209",
    "href": "management/smoking-cessation.html"
   },
   {
    "ic": "💠",
    "t": "Cardiovascular protocols",
    "s": "BP and lipid management",
    "href": "management.html?cat=cardiovascular-and-renal"
   }
  ],
  "pitfalls": {
   "intro": "This is a risk-communication station. The clinical facts are simple; candidates fail by reassuring without evidence, by adding restrictions that feed the fear, or by forgetting that a small aneurysm still needs a referral and a plan.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Launching into reassurance without first asking about pain or collapse.",
     "why": "“Does not rule out serious disease.” A symptomatic aneurysm is an emergency at any size.",
     "fix": "Ask first: any tummy, back or side pain, dizziness or blackouts? Then reassure."
    },
    {
     "dom": "tasks",
     "fail": "Telling him the practice will just scan it again next year.",
     "why": "NICE NG156 recommends referral to a regional vascular service, to be seen within 12 weeks, for an AAA of 3.0–5.4 cm.",
     "fix": "Name the referral, the yearly scan and the repair thresholds in plain words."
    },
    {
     "dom": "tasks",
     "fail": "Telling him to stop driving or tell the DVLA, or not addressing driving at all.",
     "why": "Incorrect DVLA advice is a Tasks error and adds harm. At 4.3 cm a car driver need not notify.",
     "fix": "Check his licence group first, then give the correct answer."
    },
    {
     "dom": "rto",
     "fail": "Not asking about the brother, or saying “that won’t happen to you”.",
     "why": "“Does not respond to cues.” The brother’s death is the whole of his fear; false promises lose trust.",
     "fix": "Ask what happened, then use it: an aneurysm found early and watched is in a different position from one nobody knew about."
    },
    {
     "dom": "rto",
     "fail": "Lecturing about smoking after he admits it has gone up.",
     "why": "Shame after a relapse lowers the chance he engages with support.",
     "fix": "Normalise the relapse and offer the stop-smoking service as a way of taking control."
    },
    {
     "dom": "gs",
     "fail": "Closing with “any questions?” and no check that the reassurance has landed.",
     "why": "Frightened patients remember the fear, not the facts. Unchecked understanding is standard failing feedback.",
     "fix": "Teach-back — “What will you say about today?” — plus the 999 red flags and a booked review."
    }
   ]
  }
 },
 "acute-limb-ischaemia": {
  "stem": {
   "name": "Derek Hammond",
   "age": "71-year-old man",
   "pmh": [
    "Peripheral arterial disease with intermittent claudication (calf pain on walking)",
    "Atrial fibrillation: anticoagulation offered and declined",
    "Diabetes",
    "Current smoker"
   ],
   "meds": [
    "Repeat medication as per his repeat list (not on an anticoagulant)"
   ],
   "allergy": "No known drug allergies",
   "recent": "Telephone request today: right leg and foot suddenly cold, pale and painful at rest over the last few hours, with pins and needles and numbness. Asking for stronger painkillers or a water tablet.",
   "reason": "Telephone call about his leg. “It’s just my circulation playing up.”"
  },
  "knowledge": {
   "guideline": "ESVS acute limb ischaemia guideline (2020, international) · NICE CG147 Peripheral arterial disease (2012, updated 2020) · NICE NG196 Atrial fibrillation (2021, updated 2025) · NICE NG209 Tobacco (2021)",
   "summary": "A leg that has suddenly become painful at rest, pale, cold and numb is acute limb ischaemia until proven otherwise. In a man with untreated AF this is most likely an embolus. It needs a 999 ambulance and emergency vascular care now, not painkillers.",
   "points": [
    {
     "h": "The 6 Ps",
     "t": "Pain, pallor, pulselessness, perishing cold, paraesthesia and paralysis. Sensory loss (numbness, pins and needles) or any weakness means the limb is already threatened. Muscle and nerve are damaged within hours, so the clock started when the leg changed, not when he rang (ESVS 2020, international)."
    },
    {
     "h": "Not his usual claudication",
     "t": "Claudication is exertional calf pain that settles within minutes of rest (NICE CG147). Chronic limb-threatening ischaemia builds over weeks, with night rest pain, ulcers or gangrene. A sudden change over hours to a cold, pale, numb leg is a different, acute event and must not be labelled “a bad circulation day”."
    },
    {
     "h": "Embolus or thrombosis",
     "t": "Embolism: sudden onset, a cardiac source such as AF, often normal pulses in the other leg. Thrombosis in situ: known PAD, more gradual, disease in both legs. Derek has both risks, but untreated AF with sudden onset points to an embolus. Either way the primary care action is the same."
    },
    {
     "h": "The only safe action",
     "t": "999 ambulance and emergency vascular assessment, with a phone handover to the receiving team where possible. No outpatient test, no “see how it goes”, no painkiller or diuretic trial. Anticoagulation and revascularisation (embolectomy, thrombolysis or bypass) are decided by the vascular team."
    },
    {
     "h": "While waiting",
     "t": "Practical first aid: keep the leg down and not raised, keep him warm but put no direct heat on the leg, and nothing to eat or drink in case he needs theatre. Ask about chest pain, abdominal or back pain (aortic source) and face, arm or speech symptoms (other emboli)."
    },
    {
     "h": "Capacity and refusal",
     "t": "If he declines the ambulance, check he can understand, retain and weigh the information that he may lose the leg or his life, and communicate a choice (Mental Capacity Act 2005). A capacitous refusal is his right, but it must be fully informed, documented, and the door kept open."
    },
    {
     "h": "After the emergency",
     "t": "NICE NG196: offer a DOAC when CHA₂DS₂-VASc is 2 or more, taking bleeding risk into account; do not withhold anticoagulation solely because of age or falls risk. Revisit his earlier refusal without blame. Secondary prevention for PAD, smoking cessation support (NICE NG209) and diabetes review follow later."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Derek Hammond? It’s Dr Patel from the surgery. Can I check your date of birth, and are you somewhere you can talk?",
    "dom": "gs",
    "why": "Telephone identity check and confirms he can talk"
   },
   {
    "who": "pt",
    "text": "Yes, I’m at home. It’s my dodgy leg again, the circulation. It’s gone cold and pale and it aches even sitting still, and it’s tingly and a bit numb. I just need some stronger painkillers, maybe a water tablet. I don’t want to be packed off to hospital over a bad leg day."
   },
   {
    "who": "dr",
    "text": "Thank you, Derek. I can hear you want this sorted without a fuss, and I’ll keep that in mind. What you’ve just described worries me, so I need to ask a few quick questions first. Is that all right?",
    "dom": "rto",
    "why": "Acknowledges his wish, flags concern without alarm, gains consent to focus"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Focused history",
    "clock": "1–3 min",
    "who": "dr",
    "text": "When exactly did the leg change, and how quickly did it come on?",
    "dom": "tasks",
    "why": "Establishes sudden onset and the time window"
   },
   {
    "who": "pt",
    "text": "This morning, a few hours ago. It was fine when I got up and then it went, fairly quick really."
   },
   {
    "who": "dr",
    "text": "And is this like your usual cramp when you walk, which goes when you stop, or is it there all the time, even resting?",
    "dom": "tasks",
    "why": "Distinguishes acute ischaemia from exertional claudication"
   },
   {
    "who": "pt",
    "text": "It’s there all the time. That’s what’s different. Normally I stop and it goes."
   },
   {
    "who": "dr",
    "text": "Can you look at your foot for me now? What colour is it compared with your left foot, and does it feel colder when you touch it?",
    "dom": "tasks",
    "why": "Remote assessment of pallor and temperature against the other leg"
   },
   {
    "who": "pt",
    "text": "It’s a lot paler. Almost white. And it’s cold, the left one’s warm."
   },
   {
    "who": "dr",
    "text": "Can you wiggle your toes on the right, and does it feel normal when you touch the top of the foot?",
    "dom": "tasks",
    "why": "Checks for sensory loss and paralysis, the signs of a threatened limb"
   },
   {
    "who": "pt",
    "text": "I can move them, just about. Touching it feels sort of dull, like it’s not all mine."
   },
   {
    "who": "dr",
    "text": "Any chest pain, pain in your tummy or back, or any weakness in your face, arm or speech today?",
    "dom": "tasks",
    "why": "Screens for aortic source and other emboli"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. Just the leg."
   },
   {
    "phase": "Naming the emergency",
    "clock": "3–5 min",
    "who": "dr",
    "text": "Derek, I’m going to be completely straight with you, because it matters. This isn’t your usual circulation. A leg that has suddenly gone cold, pale, painful at rest and numb means an artery has been blocked, probably by a clot. That is an emergency. Painkillers or a water tablet wouldn’t touch it.",
    "dom": "tasks",
    "why": "Names acute limb ischaemia plainly and refuses the painkiller reframe"
   },
   {
    "who": "pt",
    "text": "A clot? It’s just my circulation, surely."
   },
   {
    "who": "dr",
    "text": "I think the most likely reason is your irregular heart rhythm, the AF. It can let a small clot form in the heart, which then travels and lodges in the leg. I’m not saying that to have a go at you about the blood thinner. I’m saying it because it tells me what’s happening and why we need to act now.",
    "dom": "tasks",
    "why": "Identifies untreated AF as the embolic source, without blame"
   },
   {
    "who": "pt",
    "text": "I knew you’d bring that up."
   },
   {
    "who": "dr",
    "text": "I understand. The decision you made then isn’t the issue today; your leg is. Here’s the hard part: a leg without blood supply only survives a matter of hours, and you’ve had some of those already. I want to call an ambulance for you now so the vascular surgeons can see you as quickly as possible.",
    "dom": "rto",
    "why": "Contains defensiveness, conveys the time-critical window"
   },
   {
    "who": "pt",
    "text": "No. I’m not going in. I know where that ends up. My mate went in with his leg and came out without it."
   },
   {
    "phase": "The fear behind the refusal",
    "clock": "5–7 min",
    "who": "dr",
    "text": "That sounds like it was really frightening to see. Is that what’s behind not wanting to go in today?",
    "dom": "rto",
    "why": "Picks up the amputation fear and explores it"
   },
   {
    "who": "pt",
    "text": "Course it is. And I’ve had a bad time in hospital before. At my age you don’t want to be lying in there."
   },
   {
    "who": "dr",
    "text": "That makes complete sense. Can I tell you the honest thing, which I think is the opposite of what you fear? Legs are lost when this is left. When the blood flow is restored quickly, many legs are saved. Staying at home is the one choice that makes what happened to your friend more likely, not less.",
    "dom": "rto",
    "why": "Addresses the fear honestly: early treatment saves limbs"
   },
   {
    "who": "pt",
    "text": "So if I go now, they can save it?"
   },
   {
    "who": "dr",
    "text": "Going now gives you the best chance by far, and every hour matters. The surgeons have ways to clear the blockage, like removing the clot or dissolving it. I can’t promise the outcome, but I can promise that waiting makes it worse.",
    "dom": "gs",
    "why": "Honest, balanced information without false promises"
   },
   {
    "who": "pt",
    "text": "Right. Right. Okay. I’ll go."
   },
   {
    "phase": "Action now",
    "clock": "7–10 min",
    "who": "dr",
    "text": "Thank you, Derek. I know that took a lot. I’m calling 999 from here straight after we speak and telling them it’s a suddenly cold, painful leg with a likely blocked artery, so they prioritise you. Please stay near the phone and unlock your front door if you can.",
    "dom": "tasks",
    "why": "Arranges the 999 ambulance directly with a clear handover"
   },
   {
    "who": "pt",
    "text": "Do I need to do anything with it? Put it up?"
   },
   {
    "who": "dr",
    "text": "No, keep the leg down, not raised. Keep yourself warm with a blanket, but don’t put a hot water bottle or heat on the leg itself. And nothing to eat or drink from now, in case they need to take you to theatre.",
    "dom": "gs",
    "why": "Correct first aid in plain language"
   },
   {
    "who": "pt",
    "text": "Nothing to eat. Leg down. Keep warm. Got it."
   },
   {
    "who": "dr",
    "text": "I’ll also ring the vascular team so they’re expecting you. Is there anyone who can be with you while you wait?",
    "dom": "gs",
    "why": "Arranges a phone handover and checks support"
   },
   {
    "who": "pt",
    "text": "I’ll sort someone out."
   },
   {
    "phase": "Safety-net and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "If before they arrive the leg becomes completely numb, you can’t move your foot, or you get any chest pain or feel faint, call 999 again straight away and tell them it’s worse.",
    "dom": "gs",
    "why": "Specific interim safety-net"
   },
   {
    "who": "pt",
    "text": "Okay. What about afterwards?"
   },
   {
    "who": "dr",
    "text": "Once your leg is safe, I’d like us to have a proper, unhurried talk about a blood thinner for your heart rhythm, to stop this happening again, along with your smoking and diabetes. No lectures, just your choices. Can you tell me back what you’re doing in the next few minutes?",
    "dom": "rto",
    "why": "Plans secondary prevention later and checks understanding by teach-back"
   },
   {
    "who": "pt",
    "text": "Wait for the ambulance, leg down, keep warm, nothing to eat, door open. Ring 999 again if it gets worse."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. You’ve made the right decision. I’m ringing them now, and I’ll check in with the hospital later today.",
    "dom": "gs",
    "why": "Closes with confirmation and a follow-up commitment"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start, heard his framing, then moved quickly to onset, rest pain and the change from his usual claudication.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Hospital avoidance, a previous bad admission, independence “at my age”, and who could be with him while he waits.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I know where that ends up” (friend’s amputation) and “I knew you’d bring that up” (the declined anticoagulant).",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (worse circulation), concern (amputation, hospital), expectation (painkillers or a water tablet, no hospital).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Remote look and touch comparison with the other foot, toe movement and sensation; no outpatient tests that would delay transfer.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Acute limb ischaemia (embolic from AF vs thrombosis on PAD) vs worse claudication; screened aortic and other embolic symptoms.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Recognised the 6 Ps with sensory loss as a threatened limb; asked about chest, abdominal, back and neurological symptoms.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated a suddenly blocked artery, likely a clot from AF, in plain words, and said why it is an emergency.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "999 ambulance called by the GP, phone handover to vascular, no painkiller or diuretic, fear addressed so he accepted transfer.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "AF anticoagulation (NICE NG196), smoking and diabetes deferred explicitly to a later, non-blaming conversation.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Leg down, body warm, nil by mouth, door unlocked; call 999 again if worse; GP to check with hospital.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Older adults"
   ],
   "stem": {
    "name": "Derek Hammond",
    "age": "71 years · male",
    "pmh": [
     "Peripheral arterial disease (claudication)",
     "Atrial fibrillation: anticoagulation declined",
     "Diabetes",
     "Smoker"
    ],
    "meds": [
     "See repeat list (no anticoagulant)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Telephone triage note: right leg cold, pale and painful at rest for a few hours, tingling and numb. Requesting stronger painkillers or a water tablet. Declined anticoagulation for AF (documented).",
    "reason": "Telephone appointment. “My circulation’s worse than usual.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and hear the frame",
     "d": "He opens with the answer he wants. Acknowledge it, then say you need a few quick questions. Do not agree to painkillers."
    },
    {
     "t": "1–3",
     "h": "Focused history",
     "d": "Onset and time, rest pain vs claudication, colour and temperature against the other foot, numbness and toe movement, chest, abdominal and neurological symptoms."
    },
    {
     "t": "3–5",
     "h": "Name it",
     "d": "A blocked artery, likely a clot from the AF. An emergency with hours that matter. Raise the AF without blame."
    },
    {
     "t": "5–7",
     "h": "The fear",
     "d": "He refuses. Explore the friend’s amputation and hospital fear; reframe: speed saves legs, delay loses them."
    },
    {
     "t": "7–12",
     "h": "Act and safety-net",
     "d": "GP calls 999 and vascular. Leg down, warm body, nil by mouth, door open, re-call 999 if worse. Anticoagulation talk later. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Treats it as worse claudication and sends painkillers or a diuretic; misses the sudden onset and numbness; never links the AF; arranges a routine appointment or outpatient test; or argues with him about the blood thinner so he disengages.",
    "pass": "Recognises acute limb ischaemia, names it as an emergency, links it to the AF, arranges a 999 ambulance and gives basic first aid and safety-netting.",
    "exc": "All of the above, plus: finds and answers the amputation fear so he chooses to go; raises the declined anticoagulant without blame; GP makes the 999 call and the vascular handover; checks capacity if he wavers; teach-back of the first-aid steps; a clear later plan for AF, smoking and diabetes."
   },
   "avoid": [
    {
     "dont": "“I’ll send some co-codamol through and see how it is tomorrow.”",
     "instead": "“This isn’t a painkiller problem. A leg that suddenly goes cold, pale and numb has lost its blood supply, and that’s an emergency today.”",
     "why": "Any delay or symptomatic treatment is an immediate Tasks fail and risks the limb."
    },
    {
     "dont": "“If you’d taken the blood thinner this wouldn’t have happened.”",
     "instead": "“The AF is probably why this happened. That tells me what we’re dealing with, not that anyone’s to blame.”",
     "why": "Blame provokes defensiveness at the exact moment you need his agreement."
    },
    {
     "dont": "“You have to go to hospital, there’s no discussion.”",
     "instead": "“I think what’s stopping you is the fear of losing the leg. Going now is how we give it the best chance.”",
     "why": "Coercion invites refusal; meeting the fear gets consent."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Independence and hospital fear",
     "t": "A stoical older man who has watched a friend lose a leg and had a bad admission before. His avoidance is fear, and it needs naming, not overriding."
    },
    {
     "h": "Practical support",
     "t": "Ask who can be with him and whether the door can be left open for the crew. Plan for how he gets home and managing afterwards."
    }
   ],
   "legal": [
    {
     "h": "Mental Capacity Act 2005",
     "t": "Presume capacity. If he refuses emergency transfer, assess whether he can understand, retain and weigh the risk of limb loss or death and communicate a decision. A capacitous refusal stands, but record it fully and keep the offer open."
    },
    {
     "h": "Informed consent",
     "t": "GMC Decision making and consent (2020): give the information he needs, including the risks of not going, in a way he can use, without pressure."
    }
   ],
   "professional": [
    {
     "h": "Revisiting a declined treatment",
     "t": "His earlier refusal of anticoagulation was his right. Raise its link to today without blame and offer a fresh, informed discussion later (NICE NG196)."
    },
    {
     "h": "Documentation and handover",
     "t": "Record the history, advice given, time of the 999 call and the handover to the vascular team. Check he arrived."
    }
   ],
   "community": [
    {
     "h": "After discharge",
     "t": "Stop-smoking service (NICE NG209), diabetes and foot review, anticoagulation discussion, and support from the district nursing or community team if mobility is affected."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Sudden onset over hours of a cold, pale leg with pain at rest: acute limb ischaemia",
     "Numbness, pins and needles or weakness: threatened limb, hours matter",
     "Chest pain, abdominal or back pain (aortic source) or face, arm or speech symptoms (other emboli)"
    ],
    "psychosocial": [
     "Hospital avoidance after a friend’s amputation and a bad previous admission",
     "Stoicism and independence “at my age”",
     "Defensiveness about having declined anticoagulation"
    ],
    "ice": [
     "Idea: “Just my circulation playing up worse than usual”",
     "Concern: going in means losing the leg, like his friend",
     "Expectation: stronger painkillers or a water tablet and no hospital"
    ]
   },
   "diagnosis": "State it clearly: “A leg that suddenly goes cold, pale, painful at rest and numb has had its artery blocked, most likely by a clot from your heart rhythm. That’s an emergency that needs the vascular surgeons now.”",
   "diagnosisLay": "“Think of the artery as the only water pipe to a garden. A clot has blocked it. The plants survive a few hours, not days. Painkillers don’t unblock the pipe; the surgeons can.”",
   "management": {
    "reflectIce": "“You’re frightened that hospital is where legs get taken off, after what happened to your friend. The truth is the other way round: legs are saved by going quickly.”",
    "psychosocial": "Make the decision his by meeting the fear, not overriding it. Remove barriers: GP calls 999, rings vascular, and checks who can be with him.",
    "sharedPlan": [
     "GP calls 999 now and gives a clear handover; vascular team informed",
     "Leg down, body warm with no direct heat on the leg, nil by mouth",
     "After the emergency: DOAC discussion per NICE NG196, smoking and diabetes review"
    ],
    "safetyNet": [
     "Re-call 999 if the leg becomes completely numb or he can’t move the foot, or chest pain or faintness",
     "GP checks with the hospital the same day and arranges follow-up after discharge"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Peripheral arterial disease",
    "s": "Case walkthrough · NICE CG147",
    "href": "../cases/peripheral-arterial-disease.html"
   },
   {
    "ic": "💠",
    "t": "Peripheral arterial disease protocol",
    "s": "Acute limb ischaemia · 6 Ps · 999",
    "href": "management/peripheral-arterial-disease.html"
   },
   {
    "ic": "💠",
    "t": "Atrial fibrillation protocol",
    "s": "Anticoagulation · NICE NG196",
    "href": "management/atrial-fibrillation.html"
   },
   {
    "ic": "🗺️",
    "t": "Leg pain pathway",
    "s": "Visual algorithm · red flags",
    "href": "algorithms/leg-pain.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed in the first three minutes by accepting his label. The second trap is winning the argument and losing the patient: he must choose to go, and that means meeting the amputation fear.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting “my circulation’s worse” and sending painkillers or a diuretic.",
     "why": "“Fails to recognise a serious condition.” A sudden cold, pale, numb leg is acute limb ischaemia and only emergency vascular care helps.",
     "fix": "Ask when it started, whether it hurts at rest, and how it compares with the other foot. Sudden onset and numbness settle it."
    },
    {
     "dom": "tasks",
     "fail": "Booking a face-to-face appointment later today or an ABPI test.",
     "why": "“Management plan not in line with current UK best practice.” Hours matter; any intermediate step wastes them.",
     "fix": "999 ambulance and vascular handover now. Say who is calling and when."
    },
    {
     "dom": "tasks",
     "fail": "Never mentioning the AF.",
     "why": "Misses the likely cause and the secondary prevention that stops a repeat.",
     "fix": "“Your heart rhythm is probably where the clot came from” — then defer the anticoagulation talk until the leg is safe."
    },
    {
     "dom": "rto",
     "fail": "Blaming him for declining the blood thinner.",
     "why": "“Does not respond appropriately to the patient’s emotions.” He becomes defensive and refuses.",
     "fix": "“The decision then isn’t the issue today; your leg is.”"
    },
    {
     "dom": "rto",
     "fail": "Overriding his refusal with authority instead of asking why.",
     "why": "The amputation fear is the hidden agenda; ignoring it loses the Relating marks and often the consent.",
     "fix": "“Is what happened to your friend behind not wanting to go in?” Then reframe: speed saves legs."
    },
    {
     "dom": "gs",
     "fail": "Ending with “go to A&E” and no first aid or check of understanding.",
     "why": "Non-specific safety-netting and no confirmed plan are standard failing statements.",
     "fix": "Leg down, warm body, nil by mouth, door open, re-call 999 if worse, then teach-back."
    }
   ]
  }
 },
 "af-anticoag-decision": {
  "stem": {
   "name": "Frank Ostrowski",
   "age": "74-year-old man",
   "pmh": [
    "Atrial fibrillation — recently diagnosed",
    "Hypertension",
    "Diabetes"
   ],
   "meds": [
    "Treatment for hypertension and diabetes as per repeat list",
    "No anticoagulant"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "New diagnosis of atrial fibrillation. CHA₂DS₂-VASc recorded as high (age, hypertension, diabetes). Anticoagulation to be discussed.",
   "reason": "Video appointment to discuss stroke prevention for atrial fibrillation."
  },
  "knowledge": {
   "guideline": "NICE NG196 (Atrial fibrillation, 2021) and its patient decision aid · NICE TA249, TA256, TA275, TA355 (DOACs in AF) · BNF · GMC Decision making and consent (2020) · Montgomery v Lanarkshire Health Board (UK Supreme Court, 2015)",
   "summary": "His CHA₂DS₂-VASc is 3 (age 65–74, hypertension, diabetes), so NICE NG196 says offer a DOAC. Aspirin is not an alternative. The task is an informed, non-coercive shared decision that takes his father’s death seriously.",
   "points": [
    {
     "h": "Stroke risk",
     "t": "NICE NG196: use CHA₂DS₂-VASc. Offer anticoagulation with a DOAC at a score of 2 or above, taking bleeding risk into account; consider it for men with a score of 1. Frank scores 3: age 65–74 (1), hypertension (1), diabetes (1)."
    },
    {
     "h": "Bleeding risk",
     "t": "NICE NG196 recommends the ORBIT score to assess bleeding risk, and addressing modifiable factors: uncontrolled blood pressure, harmful alcohol use, concurrent antiplatelets or NSAIDs, and anaemia. A bleeding score is a prompt to reduce risk, not a reason on its own to withhold."
    },
    {
     "h": "Aspirin is not the answer",
     "t": "NICE NG196: do not offer aspirin monotherapy solely for stroke prevention in atrial fibrillation. It does not give the protection he thinks and still carries a bleeding risk."
    },
    {
     "h": "DOACs are not his father’s warfarin",
     "t": "Apixaban, dabigatran, edoxaban and rivaroxaban are options (NICE NG196; NICE TA249, TA256, TA275, TA355). No routine INR monitoring and fewer interactions than warfarin. Check renal function, FBC and liver function before starting; dose per BNF."
    },
    {
     "h": "Age and falls",
     "t": "NICE NG196: do not withhold anticoagulation solely because of a person’s age or their risk of falls."
    },
    {
     "h": "Shared decision",
     "t": "Use the NICE NG196 patient decision aid. A capacitous adult can decline after an informed discussion (GMC 2020; Montgomery 2015). Document the discussion and revisit the decision at follow-up or if his circumstances change."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Ostrowski, I’m Dr Lee. Can I check your date of birth, and that you’re somewhere private? … Thank you. We’re here to talk about the heart rhythm. Where would you like to start?",
    "dom": "rto",
    "why": "Checks identity on video, then hands him the floor"
   },
   {
    "who": "pt",
    "text": "I’ll save you the trouble. I know you want me on blood thinners, and the answer’s no. My father was on warfarin and he bled to death. It was horrific. Isn’t it rat poison anyway? I’ll take an aspirin if you insist, and we’ll call it quits."
   },
   {
    "who": "dr",
    "text": "Thank you for being so honest with me straight away. I’m not going to push you into anything today. What I would like is for you to make this decision with the full picture — because some things have changed since your father’s time. Could we spend a few minutes on that, and then it’s your call?",
    "dom": "gs",
    "why": "Sets a non-coercive agenda that respects his autonomy"
   },
   {
    "who": "pt",
    "text": "Go on. But I’m not changing my mind."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Would you tell me what happened to your father?",
    "dom": "rto",
    "why": "Explores the trauma before any facts"
   },
   {
    "who": "pt",
    "text": "He was on warfarin. He started bleeding and they couldn’t stop it. I was there. I’ll never forget it."
   },
   {
    "who": "dr",
    "text": "I’m so sorry. Seeing that would stay with anyone, and it makes complete sense that the words ‘blood thinner’ bring it all back.",
    "dom": "rto",
    "why": "Validates the trauma without rushing past it"
   },
   {
    "who": "pt",
    "text": "(Quietly.) Yes. It does."
   },
   {
    "who": "dr",
    "text": "Can I ask a few things about you? Have you had any bleeding problems yourself — nosebleeds, blood in your water or motions, stomach ulcers?",
    "dom": "tasks",
    "why": "Assesses bleeding history"
   },
   {
    "who": "pt",
    "text": "Nothing like that."
   },
   {
    "who": "dr",
    "text": "And how much do you drink in a week? Do you take any painkillers like ibuprofen, or anything from the chemist?",
    "dom": "tasks",
    "why": "Screens modifiable bleeding risk factors"
   },
   {
    "who": "pt",
    "text": "Not much, and I don’t take ibuprofen or anything like that."
   },
   {
    "who": "dr",
    "text": "Have you ever had a spell of weakness in your face, arm or leg, trouble speaking, or loss of vision?",
    "dom": "tasks",
    "why": "Screens for prior stroke or TIA, which would change the risk"
   },
   {
    "who": "pt",
    "text": "No. I’m very well, doctor. I keep active and do everything for myself."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "That independence sounds really important to you. When you picture the future, what matters most?",
    "dom": "rto",
    "why": "Picks up the cue about independence"
   },
   {
    "who": "pt",
    "text": "Not being a burden. Not ending up in a chair with someone feeding me. I’d rather go quick."
   },
   {
    "who": "dr",
    "text": "That helps me a lot, thank you. Can I share something that connects to exactly that?",
    "dom": "rto",
    "why": "Asks permission before offering information"
   },
   {
    "phase": "Explanation",
    "clock": "6–9 min",
    "who": "dr",
    "text": "With your heart rhythm, blood can pool and form a clot that travels to the brain and causes a stroke. Your age, blood pressure and diabetes put your risk in the group where the guidance recommends protection. And the thing you just described — being dependent — is one of the commonest results of that kind of stroke.",
    "dom": "tasks",
    "why": "Explains stroke risk and links it to his own values"
   },
   {
    "who": "pt",
    "text": "So you’re saying I’d end up like that without it."
   },
   {
    "who": "dr",
    "text": "I’m saying the risk is real, not certain. Here’s the next important bit: aspirin doesn’t prevent these strokes. It still thins the blood enough to cause bleeding, but it doesn’t give the protection. So it would feel safe without actually being safe.",
    "dom": "tasks",
    "why": "Corrects the aspirin misconception"
   },
   {
    "who": "pt",
    "text": "I didn’t know that. Everyone says aspirin thins the blood."
   },
   {
    "who": "dr",
    "text": "It’s a very common belief. And the tablet I’d suggest isn’t warfarin. It’s a newer type — no weekly blood tests, far fewer food and drug clashes, and a lower risk of bleeding into the brain than warfarin. It’s a genuinely different medicine from the one your father had.",
    "dom": "tasks",
    "why": "Distinguishes DOACs from warfarin"
   },
   {
    "who": "pt",
    "text": "But it can still make you bleed."
   },
   {
    "who": "dr",
    "text": "Yes, it can, and I won’t pretend otherwise. For most people with your level of risk, the strokes it prevents outweigh the bleeds it causes. We can lower the bleeding risk further by keeping your blood pressure well controlled and avoiding ibuprofen-type painkillers.",
    "dom": "tasks",
    "why": "Honest about bleeding risk and its modification"
   },
   {
    "phase": "Shared decision",
    "clock": "9–11 min",
    "who": "dr",
    "text": "There’s a NICE NG196 decision aid that shows these risks as pictures, with and without treatment. Would you like to take it home, perhaps talk it over with someone you trust, and come back to me?",
    "dom": "rto",
    "why": "Offers a decision aid and time rather than pressure"
   },
   {
    "who": "pt",
    "text": "(Pause.) I’ll look at it. I’m not promising."
   },
   {
    "who": "dr",
    "text": "That’s all I’d ask. Whatever you decide, I’ll respect it and keep looking after you. In the meantime please don’t start aspirin for this — it won’t protect you. I’d like to do some routine blood tests so we’re ready if you do decide to go ahead.",
    "dom": "tasks",
    "why": "Respects autonomy, advises against aspirin, prepares baseline bloods"
   },
   {
    "who": "pt",
    "text": "Fine. Blood tests I can do."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "One important thing: if you ever have sudden weakness in your face, arm or leg, slurred speech or loss of vision — even if it passes — ring 999 straight away. Can you tell me what you’re taking away from today?",
    "dom": "gs",
    "why": "FAST safety-net and teach-back"
   },
   {
    "who": "pt",
    "text": "Aspirin doesn’t work for this. The new tablet isn’t warfarin. Read the leaflet. Stroke signs, 999."
   },
   {
    "who": "dr",
    "text": "Exactly. Let’s book a follow-up in two weeks, once you’ve had the bloods and time to think. Is there anything else on your mind today?",
    "dom": "gs",
    "why": "Defined follow-up and shares the floor"
   },
   {
    "who": "pt",
    "text": "No. Thank you for not bullying me, doctor. I will read it."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let him state his refusal in full; responded to it rather than launching into a prepared explanation.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored his active, independent life and what he most wants to protect.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the father’s death and “I’d rather go quick” / not being a burden, and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (blood thinners are rat poison; aspirin will do); concern (bleeding to death like his father); expectation (aspirin and no more discussion).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Bleeding history, alcohol, NSAID use, prior stroke/TIA symptoms; baseline FBC, renal and liver function; ORBIT once results are back.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Weighed stroke versus bleeding risk; considered modifiable bleeding factors and prior TIA.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for previous stroke or TIA and gave FAST 999 advice.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "CHA₂DS₂-VASc 3 explained as a stroke risk in the treatment range, in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Offered a DOAC per NICE NG196; corrected the aspirin myth; decision aid; respected his right to decline.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "BP control and avoiding NSAIDs to lower bleeding risk; did not withhold on age or falls grounds.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Teach-back, FAST safety-net, follow-up in two weeks, and the door left open.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Older adults",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Frank Ostrowski",
    "age": "74 years · male",
    "pmh": [
     "Atrial fibrillation (new)",
     "Hypertension",
     "Diabetes"
    ],
    "meds": [
     "Antihypertensive and diabetes treatment (repeat list)",
     "No anticoagulant"
    ],
    "allergy": "NKDA recorded",
    "recent": "⚠ New AF. CHA₂DS₂-VASc high (age, hypertension, diabetes). Anticoagulation not yet started.",
    "reason": "Video appointment. “I’m not going on blood thinners.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and hear the no",
     "d": "He refuses in the first breath. Thank him and promise it will be his decision — that buys you the next ten minutes."
    },
    {
     "t": "1–4",
     "h": "Father, bleeding risks",
     "d": "Ask what happened to his father and stay with it. Then bleeding history, alcohol, NSAIDs, stroke or TIA symptoms."
    },
    {
     "t": "4–6",
     "h": "What he values",
     "d": "Independence and not being a burden. This is the bridge to the stroke explanation."
    },
    {
     "t": "6–9",
     "h": "Three facts",
     "d": "Stroke risk linked to dependency; aspirin does not protect; a DOAC is not warfarin. Be honest about bleeding."
    },
    {
     "t": "9–12",
     "h": "Decide together, safety-net",
     "d": "Decision aid, time to think, baseline bloods, no aspirin. FAST 999. Review in two weeks."
    }
   ],
   "wordPics": {
    "fail": "Argues for anticoagulation with statistics while ignoring his father’s death; or accepts aspirin as a compromise; presents warfarin as the option; uses guilt or fear; or documents refusal after a 30-second discussion.",
    "pass": "Acknowledges his father’s death; explains stroke risk; corrects the aspirin belief; explains DOACs differ from warfarin; respects his decision and arranges follow-up.",
    "exc": "All of the above, plus: links stroke to the dependency he fears, in his own words; checks modifiable bleeding factors and plans baseline bloods; offers the NICE NG196 decision aid and time; FAST safety-net and teach-back; he leaves feeling respected and willing to reconsider."
   },
   "avoid": [
    {
     "dont": "\"If you don’t take it, you will have a stroke.\"",
     "instead": "\"The risk is real, not certain. I want you to decide knowing what it is.\"",
     "why": "Coercion and overstatement breach shared decision-making and lose his trust."
    },
    {
     "dont": "\"Okay, an aspirin is better than nothing.\"",
     "instead": "\"Aspirin doesn’t prevent these strokes, but it still carries a bleeding risk — so it would feel safe without being safe.\"",
     "why": "NICE NG196 advises against aspirin monotherapy for stroke prevention in AF; agreeing to it is a Tasks fail."
    },
    {
     "dont": "\"Warfarin is much safer now.\"",
     "instead": "\"What I’d suggest isn’t warfarin. It’s a newer type with no weekly blood tests and less risk of bleeding into the brain.\"",
     "why": "A DOAC is what NICE NG196 recommends, and naming the difference speaks directly to his fear."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Independence",
     "t": "An active man who does everything for himself fears dependency more than death. Use that value, respectfully, to frame the stroke risk."
    },
    {
     "h": "Family memory",
     "t": "Watching his father bleed to death is a traumatic memory, not a misunderstanding to correct. Acknowledge it before giving facts."
    }
   ],
   "legal": [
    {
     "h": "Informed consent",
     "t": "Montgomery (2015): patients must be told of material risks and reasonable alternatives. A capacitous adult may refuse treatment even if the doctor disagrees; record the information given and his decision."
    }
   ],
   "professional": [
    {
     "h": "Shared decision-making",
     "t": "GMC Decision making and consent (2020): find out what matters to the patient, share balanced information, and support his decision. Use the NICE NG196 decision aid."
    },
    {
     "h": "Revisiting the decision",
     "t": "A refusal is not final. Offer review at follow-up and whenever his circumstances or risks change, without pressure."
    }
   ],
   "community": [
    {
     "h": "Resources",
     "t": "NICE NG196 patient decision aid; Arrhythmia Alliance and the Stroke Association for patient information."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Previous stroke or TIA symptoms — raise stroke risk and urgency",
     "Current bleeding, anaemia or previous major bleed — affect the bleeding balance",
     "Palpitations with chest pain, breathlessness or dizziness — would need same-day assessment"
    ],
    "psychosocial": [
     "Witnessed his father bleed to death on warfarin",
     "Active and independent; fears being a burden",
     "Belief that warfarin is “rat poison” and aspirin is a safe middle ground"
    ],
    "ice": [
     "Idea: blood thinners are dangerous; aspirin thins the blood enough",
     "Concern: bleeding to death like his father; losing his independence",
     "Expectation: to refuse anticoagulation and take aspirin instead"
    ]
   },
   "diagnosis": "Be clear about the risk: “Your heart rhythm, with your age, blood pressure and diabetes, puts you in the group where a stroke is a real risk and protection is recommended.”",
   "diagnosisLay": "“With this rhythm the top of the heart quivers instead of squeezing, so blood can sit still in one corner and form a small clot. If that clot travels to the brain, it causes a stroke. The tablet stops those clots forming.”",
   "management": {
    "reflectIce": "“What happened to your father would put anyone off. And you’ve told me the thing you fear most is being dependent — that’s exactly what a stroke can take away.”",
    "psychosocial": "Treat the refusal as fear to understand, not defiance to overcome; give time, the decision aid and the option to involve someone he trusts.",
    "sharedPlan": [
     "Offer a DOAC (NICE NG196); correct the aspirin belief; explain DOAC versus warfarin",
     "Baseline FBC, renal and liver function; ORBIT bleeding score; address BP, alcohol and NSAID use",
     "NICE NG196 decision aid, time to decide, and a follow-up in two weeks"
    ],
    "safetyNet": [
     "Face, arm or leg weakness, speech or vision change — 999 even if it passes",
     "Door open to revisit the decision at any time"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Atrial fibrillation",
    "s": "Case walkthrough · NICE NG196",
    "href": "../cases/atrial-fibrillation.html"
   },
   {
    "ic": "💠",
    "t": "Atrial fibrillation protocol",
    "s": "CHA₂DS₂-VASc · ORBIT · DOAC choice",
    "href": "management/atrial-fibrillation.html"
   },
   {
    "ic": "💠",
    "t": "Antiplatelets and anticoagulants",
    "s": "DOAC dosing · monitoring",
    "href": "management/antiplatelets-anticoagulants.html"
   },
   {
    "ic": "🧮",
    "t": "CHA₂DS₂-VASc",
    "s": "Medical Calculators",
    "href": "calculators.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests shared decision-making under emotional pressure. Candidates who know NICE NG196 still fail by arguing, by conceding to aspirin, or by recording a refusal that was never truly informed.",
   "items": [
    {
     "dom": "rto",
     "fail": "Moving straight to stroke statistics after “my father bled to death”.",
     "why": "“Does not respond to the patient’s cues.” Facts cannot land until the trauma has been heard.",
     "fix": "“Would you tell me what happened to him?” Stay with it, then ask permission to share information."
    },
    {
     "dom": "tasks",
     "fail": "Agreeing to aspirin as a compromise.",
     "why": "NICE NG196 advises against aspirin monotherapy for stroke prevention in AF. It gives false reassurance and still causes bleeding.",
     "fix": "Correct it clearly and kindly, and advise him not to start it for this."
    },
    {
     "dom": "tasks",
     "fail": "Talking about “blood thinners” without explaining DOACs are different from warfarin.",
     "why": "His fear is warfarin-specific. Missing the difference misses the most useful fact.",
     "fix": "No weekly blood tests, fewer interactions, lower risk of brain bleeding than warfarin."
    },
    {
     "dom": "tasks",
     "fail": "Accepting his refusal because of his age.",
     "why": "NICE NG196: do not withhold anticoagulation solely because of age or falls risk.",
     "fix": "Assess bleeding risk with ORBIT and modify what can be modified."
    },
    {
     "dom": "rto",
     "fail": "Using fear or pressure — “you’ll end up in a wheelchair”.",
     "why": "Coercion undermines consent (GMC 2020) and loses the trust you need for him to reconsider.",
     "fix": "Link stroke to his own words about independence, then hand the decision back with a decision aid."
    },
    {
     "dom": "gs",
     "fail": "Closing with “it’s your choice then” and no follow-up.",
     "why": "An uninformed refusal documented without a plan is unsafe and scores poorly on management.",
     "fix": "Decision aid, bloods, FAST safety-net and a booked review in two weeks."
    }
   ]
  }
 },
 "alcohol-dvla-driver": {
  "stem": {
   "name": "Gordon Slater",
   "age": "51-year-old man",
   "pmh": [
    "Hypertension"
   ],
   "meds": [
    "Amlodipine (dose per record)"
   ],
   "allergy": "No known drug allergies",
   "recent": "Bus driver (Group 2 licence). Hypertension, on amlodipine. No alcohol history recorded.",
   "reason": "Telephone request: “a tablet to help me stop drinking — disulfiram or whatever”."
  },
  "knowledge": {
   "guideline": "DVLA Assessing fitness to drive · GMC Confidentiality: patients’ fitness to drive and reporting concerns to the DVLA (2017) · NICE CG115 Alcohol-use disorders (2011) · NICE CG100 Alcohol-use disorders: physical complications (2010) · BNF",
   "summary": "A bus driver with physical alcohol dependence who drinks around shifts must stop driving and notify the DVLA. He needs a supported, medically assisted withdrawal, not a quiet disulfiram prescription, which his hypertension also rules out.",
   "points": [
    {
     "h": "Recognise dependence",
     "t": "Morning shakes relieved by a drink, tolerance and daily heavy drinking indicate physical dependence. NICE CG115: use AUDIT to assess (20 or more suggests possible dependence) and SADQ or LDQ for severity. Stopping abruptly without support risks withdrawal seizures and delirium tremens."
    },
    {
     "h": "Assisted withdrawal",
     "t": "NICE CG115: offer medically assisted withdrawal, in the community or as an inpatient depending on severity, previous seizures or delirium tremens, and other risks. NICE CG100: a benzodiazepine regimen is used for acute withdrawal; give thiamine to people at risk of Wernicke’s encephalopathy. Doses per BNF and local protocol."
    },
    {
     "h": "Why not disulfiram",
     "t": "BNF: disulfiram is contraindicated in hypertension (also cardiac failure, coronary artery disease, previous stroke, psychosis and suicide risk). Gordon takes amlodipine for hypertension. Even when suitable, it is started only after at least 24 hours without alcohol and with supervision. NICE CG115: after withdrawal, offer acamprosate or oral naltrexone with psychological support; disulfiram is an alternative only when those are unsuitable."
    },
    {
     "h": "DVLA rules",
     "t": "DVLA: persistent alcohol misuse and alcohol dependence are notifiable, and the licence is refused or revoked until a set period of abstinence or controlled drinking is shown. Group 2 (bus and lorry) periods are longer than Group 1, and longer again with high-risk features such as needing medically assisted withdrawal or withdrawal seizures. The driver has the legal duty to tell the DVLA."
    },
    {
     "h": "GMC and confidentiality",
     "t": "GMC Confidentiality (2017): explain that his condition affects his fitness to drive and that he must tell the DVLA. If he continues to drive and cannot be persuaded to stop, contact the DVLA’s medical adviser promptly and disclose the relevant information. Tell him before you do, and write to him afterwards."
    },
    {
     "h": "Group 2 blood pressure",
     "t": "DVLA: Group 2 drivers are disqualified if resting BP is consistently 180 mmHg systolic or more, or 100 mmHg diastolic or more. Alcohol raises blood pressure; check it as part of the plan."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Gordon Slater? It’s Dr Shah. Can I check your date of birth, and are you somewhere private to talk?",
    "dom": "gs",
    "why": "Telephone identity and privacy check"
   },
   {
    "who": "pt",
    "text": "Yes. Look, I’ll be straight. The drink’s got on top of me and I want to stop. Just give me the disulfiram and I’ll sort myself out. No song and dance, nothing to the DVLA or work. I drive buses. Can you keep it between us?"
   },
   {
    "who": "dr",
    "text": "Thank you for being straight with me. Ringing to say you want to stop is the hardest step, and I want to help you do it properly. Can I ask some questions first, so I know what’s safe for you?",
    "dom": "rto",
    "why": "Honours the motivation before setting boundaries"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "What do you usually drink in a day, and when do you have your first drink?",
    "dom": "tasks",
    "why": "Quantifies intake and timing"
   },
   {
    "who": "pt",
    "text": "About half a bottle of spirits. First one in the morning, to be honest."
   },
   {
    "who": "dr",
    "text": "What happens if you don’t have that morning drink?",
    "dom": "tasks",
    "why": "Screens for withdrawal and relief drinking"
   },
   {
    "who": "pt",
    "text": "Shakes. Sweats. A drink settles it."
   },
   {
    "who": "dr",
    "text": "Have you ever had a fit, or seen or heard things, when you’ve gone without?",
    "dom": "tasks",
    "why": "Asks about withdrawal seizures and delirium tremens"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "I need to ask this, and I’d rather you were honest. Do you ever drink before or during a shift?",
    "dom": "tasks",
    "why": "Establishes the public-safety risk directly"
   },
   {
    "who": "pt",
    "text": "…Sometimes. Before a shift, to stop the shakes. I’ve never had an accident."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Thank you for telling me. What worries you most about getting help for this?",
    "dom": "rto",
    "why": "Explores the fear behind “keep it quiet”"
   },
   {
    "who": "pt",
    "text": "My job. It’s all I know. I’m the only one earning. If the DVLA finds out, that’s it."
   },
   {
    "who": "dr",
    "text": "That’s a real fear, and I’m not going to brush it aside. We’ll talk about the job and money in a minute. First let me explain what I think is safest for you.",
    "dom": "rto",
    "why": "Acknowledges the fear and signposts that it will be addressed"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Your body is physically dependent on alcohol. Stopping suddenly on your own can cause fits or a dangerous confused state. So the safe way is a planned withdrawal with medication to cover it, and vitamins to protect your brain, with the alcohol team.",
    "dom": "tasks",
    "why": "Explains dependence and the risk of unsupported withdrawal"
   },
   {
    "who": "pt",
    "text": "And the disulfiram?"
   },
   {
    "who": "dr",
    "text": "It isn’t safe for you. It can’t be used with high blood pressure, which you take amlodipine for, and it only works once you’ve already stopped. After the withdrawal there are other medicines that reduce cravings, and the team will go through those.",
    "dom": "tasks",
    "why": "Applies the BNF contraindication and offers the NICE CG115 alternatives"
   },
   {
    "who": "pt",
    "text": "Right. I didn’t know that."
   },
   {
    "who": "dr",
    "text": "Now the hard part. With alcohol dependence and drinking before shifts, it isn’t safe for you to drive a bus, and the law says the DVLA must be told. I’m asking you to stop driving from today and to tell the DVLA yourself.",
    "dom": "tasks",
    "why": "States the driving advice and the DVLA duty clearly"
   },
   {
    "who": "pt",
    "text": "That’s my living gone. You said you’d keep it between us."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I know how hard this is to hear. Everything else you’ve told me stays confidential. But I can’t keep quiet about someone driving passengers while dependent. If you kept driving and didn’t tell the DVLA, I’d have to tell them myself. I’d always let you know first, and I’d much rather you did it.",
    "dom": "rto",
    "why": "Holds the line honestly and explains the GMC confidentiality position"
   },
   {
    "who": "pt",
    "text": "(quiet) …And if I do tell them?"
   },
   {
    "who": "dr",
    "text": "Then you’re doing the responsible thing. Many people get their licence back once they’re well and meet the DVLA criteria. I can give you a fit note so you’re not driving while this is sorted, and suggest you speak to occupational health about non-driving duties.",
    "dom": "rto",
    "why": "Frames notification as recoverable and supports the occupational impact"
   },
   {
    "who": "dr",
    "text": "Here’s the plan. I’ll refer you urgently to the alcohol service for an assessment and a planned withdrawal. I’ll start vitamin B1 today. I’d like a blood test and a blood pressure check, because alcohol pushes blood pressure up. Until the team sees you, keep drinking steadily rather than stopping suddenly, and don’t drive at all.",
    "dom": "tasks",
    "why": "Specialist referral, thiamine, investigations, safe interim advice"
   },
   {
    "who": "pt",
    "text": "Okay. I’ll ring the DVLA this week."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you get severe shakes, sweats, confusion, see or hear things, or have a fit, that’s 999. I’ll call you in a week to see how you’re getting on, including with the DVLA. Can you tell me back what we’ve agreed?",
    "dom": "gs",
    "why": "Withdrawal safety-net, follow-up that checks notification, teach-back"
   },
   {
    "who": "pt",
    "text": "No disulfiram. Alcohol team for a proper detox. Vitamins. Stop driving today, tell the DVLA, fit note, talk to occupational health. Don’t stop drinking suddenly on my own. 999 if I have a fit."
   },
   {
    "who": "dr",
    "text": "That’s exactly right. I’ll write down what we discussed about driving in your record. You rang to do this quietly; what you’re doing instead is the way to stop safely and, in time, drive again.",
    "dom": "gs",
    "why": "Documents the DVLA advice and closes on hope"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Honours the wish to stop; explores before responding to the disulfiram request or the confidentiality demand.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Bus driving as livelihood and identity; sole earner; shame; occupational implications.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "“Nothing to the DVLA or work” and “I drive buses” lead to the direct question about drinking before shifts.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a tablet will let him stop quietly); concern (losing his job and income); expectation (disulfiram, kept confidential).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "AUDIT and a severity measure (NICE CG115); LFTs, FBC, U&E; BP check given Group 2 rules and alcohol.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Harmful drinking versus physical dependence; history of seizures or delirium tremens.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Withdrawal seizures and delirium tremens asked about; Wernicke’s risk covered by thiamine.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "States alcohol dependence with drinking around driving shifts: unsafe to drive and notifiable.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Specialist referral for medically assisted withdrawal; no disulfiram (BNF contraindication: hypertension); acamprosate or naltrexone later (NICE CG115).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Hypertension and Group 2 BP rules; stop driving now; DVLA self-notification; GMC disclosure position explained.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "No abrupt solo cessation; 999 for fits, confusion or hallucinations; review in a week including DVLA; documentation.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Gordon Slater",
    "age": "51 years · male",
    "pmh": [
     "Hypertension"
    ],
    "meds": [
     "Amlodipine"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Occupation: bus driver (Group 2 licence). Hypertension on amlodipine. No alcohol history coded.",
    "reason": "Telephone. “A tablet to help me stop drinking — disulfiram or whatever.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "He asks for confidentiality up front. Don’t promise it. Honour the wish to stop and ask to understand first."
    },
    {
     "t": "1–4",
     "h": "Dependence and driving",
     "d": "Amount, morning drinking, shakes relieved by alcohol, seizures or DTs. Ask directly about drinking before shifts."
    },
    {
     "t": "4–6",
     "h": "The fear",
     "d": "Job, income, identity. Acknowledge it and promise to come back to it."
    },
    {
     "t": "6–10",
     "h": "Explain and hold the line",
     "d": "Unsafe to stop alone. Disulfiram contraindicated with his hypertension. Stop driving today, tell the DVLA. GMC disclosure as a last resort, told first."
    },
    {
     "t": "10–12",
     "h": "Plan and safety-net",
     "d": "Urgent alcohol service referral, thiamine, bloods and BP, fit note, occupational health. 999 for fits or confusion. Review in a week. Teach-back and document."
    }
   ],
   "wordPics": {
    "fail": "Prescribes disulfiram as asked; misses that he has hypertension; never asks whether he drinks around driving; promises confidentiality; advises him to stop drinking straight away on his own; or threatens the DVLA without compassion.",
    "pass": "Recognises dependence and arranges supported withdrawal, declines disulfiram, advises him to stop driving and notify the DVLA, and safety-nets withdrawal.",
    "exc": "All of that, plus he feels his motivation is respected, the disulfiram contraindication is explained using his own medication, the GMC disclosure position is explained honestly and kindly, the occupational and financial fallout is supported, interim advice avoids unsafe sudden cessation, and follow-up checks the DVLA notification."
   },
   "avoid": [
    {
     "dont": "“Of course, this stays between us.”",
     "instead": "“Most of what you tell me is confidential, but I can’t keep quiet about someone driving passengers while dependent.”",
     "why": "A promise you can’t keep destroys trust later and fails the probity domain."
    },
    {
     "dont": "“Just stop drinking from tomorrow and I’ll give you the tablet.”",
     "instead": "“Stopping suddenly could cause a fit. Keep your drinking steady until the alcohol team plans a safe withdrawal.”",
     "why": "Unsupported abrupt cessation in physical dependence is dangerous."
    },
    {
     "dont": "“If you don’t tell the DVLA, I’m reporting you.”",
     "instead": "“I’d much rather you told them yourself. If you kept driving, I would have to, and I’d tell you first.”",
     "why": "The same message delivered as a threat loses the patient; delivered honestly, it keeps him engaged."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work and money",
     "t": "Bus driving is his livelihood and he is the sole earner. Fit note, occupational health (non-driving duties), Statutory Sick Pay and, if needed, Universal Credit. Citizens Advice can help with benefits."
    },
    {
     "h": "Shame",
     "t": "Asking for a quiet tablet reflects fear and shame. Recognising his courage in ringing keeps him engaged."
    }
   ],
   "legal": [
    {
     "h": "DVLA",
     "t": "Alcohol dependence and persistent misuse are notifiable; Group 2 standards are stricter. The licence holder must tell the DVLA. DVLA Assessing fitness to drive."
    },
    {
     "h": "GMC disclosure",
     "t": "GMC Confidentiality (2017): persuade first; if he keeps driving, disclose to the DVLA medical adviser, telling him before and writing afterwards. If he were about to drive a bus while intoxicated, the immediate risk could justify contacting the police."
    },
    {
     "h": "Equality Act 2010",
     "t": "Addiction to alcohol is excluded from the definition of disability under the Equality Act, although related conditions (such as liver disease or depression) may be covered."
    }
   ],
   "professional": [
    {
     "h": "Documentation",
     "t": "Record the drinking history, the advice to stop driving and notify the DVLA, his response, the confidentiality position explained, and the follow-up date."
    },
    {
     "h": "Safe prescribing",
     "t": "Check contraindications against his record before any relapse-prevention drug: BNF lists hypertension as a contraindication to disulfiram."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Local community alcohol service; Alcoholics Anonymous and SMART Recovery; Drinkline; Al-Anon for family members."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Morning drinking to stop shakes: physical dependence, unsafe to stop abruptly alone",
     "Previous withdrawal seizures or delirium tremens: consider inpatient withdrawal (NICE CG115)",
     "Drinking before or during bus shifts: immediate public-safety concern"
    ],
    "psychosocial": [
     "Group 2 licence and bus driving as his livelihood",
     "Sole earner; fear of job loss",
     "Shame and wish to manage it quietly"
    ],
    "ice": [
     "Idea: disulfiram will let him stop by himself",
     "Concern: DVLA and his employer finding out; losing his income",
     "Expectation: a confidential disulfiram prescription"
    ]
   },
   "diagnosis": "“You have physical alcohol dependence: the morning shakes that a drink settles show your body relies on it. That makes stopping alone risky, and it means you’re not safe to drive a bus at the moment.”",
   "diagnosisLay": "“Your body has adjusted to alcohol like an engine tuned to a certain fuel. Take it away suddenly and it can misfire badly, with shakes or even fits. We need to bring it down in a planned way, with medication covering the change.”",
   "management": {
    "reflectIce": "“You rang wanting to stop, and that matters more than anything. I know your biggest fear is losing your job, and we’ll work through that together, but not by keeping you behind the wheel.”",
    "psychosocial": "Fit note and occupational health for non-driving duties; financial advice; recognise the courage of asking for help; offer ongoing support through the process of getting his licence back.",
    "sharedPlan": [
     "Urgent community alcohol service referral for medically assisted withdrawal; thiamine now (NICE CG100)",
     "No disulfiram (BNF: contraindicated in hypertension); acamprosate or naltrexone with psychological support after withdrawal (NICE CG115)",
     "Stop driving today; he notifies the DVLA; bloods and BP check"
    ],
    "safetyNet": [
     "Do not stop drinking abruptly before the assessment; 999 for fits, confusion or hallucinations",
     "Telephone review in a week to check progress and DVLA notification"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Alcohol",
    "s": "Case walkthrough · NICE CG115",
    "href": "../cases/alcohol.html"
   },
   {
    "ic": "💠",
    "t": "Harmful drinking and alcohol dependence",
    "s": "Protocol · withdrawal · relapse prevention",
    "href": "management/alcohol-problem-drinking.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA fitness to drive",
    "s": "Group 1 and Group 2 standards",
    "href": "dvla.html"
   },
   {
    "ic": "💠",
    "t": "Driving and diseases",
    "s": "Protocol · notification duty",
    "href": "management/driving-diseases.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests safe prescribing, probity and compassion at the same time. Candidates fail by giving the drug, by promising secrecy, or by delivering the DVLA message as a threat. The patterns below reflect recurring SCA feedback.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribes disulfiram as requested.",
     "why": "BNF: contraindicated in hypertension, which he is treated for. It also requires abstinence and supervision. “Unsafe prescribing.”",
     "fix": "Check his record, name the contraindication, and offer specialist-led withdrawal followed by acamprosate or naltrexone (NICE CG115)."
    },
    {
     "dom": "tasks",
     "fail": "Tells him to stop drinking immediately.",
     "why": "Abrupt cessation in physical dependence risks seizures and delirium tremens.",
     "fix": "Advise steady drinking until a planned, medically assisted withdrawal; give thiamine."
    },
    {
     "dom": "tasks",
     "fail": "Never asks whether he drinks around his shifts.",
     "why": "“Did not identify the key public-safety issue.” It is the ethical core of the station.",
     "fix": "Ask directly and non-judgementally, then advise him to stop driving today."
    },
    {
     "dom": "gs",
     "fail": "Agrees to keep it quiet, or says nothing about the DVLA.",
     "why": "Fails the GMC confidentiality and fitness-to-drive standard.",
     "fix": "Explain the DVLA duty, ask him to notify, and explain honestly what you would do if he kept driving."
    },
    {
     "dom": "rto",
     "fail": "Delivers the DVLA message as a threat and ends the call.",
     "why": "“Did not show empathy or respond to the patient’s concerns.” He may disengage from treatment.",
     "fix": "Acknowledge the job fear, frame notification as recoverable, and support the fit note, occupational health and finances."
    },
    {
     "dom": "gs",
     "fail": "No follow-up of the driving advice.",
     "why": "Advice without follow-up leaves the public-safety risk unresolved.",
     "fix": "Book a review in a week that checks he has stopped driving and notified the DVLA, and document it."
    }
   ]
  }
 },
 "ckd3-result": {
  "stem": {
   "name": "Patricia Nwosu",
   "age": "64-year-old woman",
   "pmh": [
    "Hypertension",
    "Type 2 diabetes",
    "Chronic kidney disease stage 3a (newly coded at routine review)"
   ],
   "meds": [
    "Amlodipine",
    "Metformin"
   ],
   "allergy": "No known drug allergies",
   "recent": "Routine long-term condition review: eGFR 52 mL/min/1.73 m², stable over the past year. Urine ACR normal to mildly raised. A results letter was sent mentioning ‘chronic kidney disease’. No consultation since.",
   "reason": "Telephoned the surgery upset after receiving the letter. Asking to speak to a doctor today."
  },
  "knowledge": {
   "guideline": "NICE NG203 (2021) · NICE TA1075 (2025) · NICE NG238 (2023) · NICE NG136 (2019) · BNF · KDIGO (international)",
   "summary": "A stable eGFR of 52 is CKD G3a. For most people at this stage it is a marker of cardiovascular risk to act on, not a path to dialysis. Classify by eGFR and ACR, protect the kidneys and the heart, and explain it without alarm.",
   "points": [
    {
     "h": "Classify with both numbers",
     "t": "NICE NG203 uses eGFR category (G3a = 45–59) and ACR category (A1 under 3, A2 3–30, A3 over 30 mg/mmol). CKD needs abnormality for more than 3 months; hers is stable over a year. Risk of progression rises with falling eGFR and, above all, with rising ACR."
    },
    {
     "h": "Kidney protection by ACR",
     "t": "NICE NG203: with diabetes, offer an ACE inhibitor or ARB if ACR is 3 mg/mmol or more; with hypertension and no diabetes, if ACR is over 30. Check potassium and eGFR before and after starting. Her ACR needs an exact repeat value to decide."
    },
    {
     "h": "Heart and diabetes",
     "t": "Offer atorvastatin 20 mg for primary prevention in CKD (NICE NG238). With type 2 diabetes, dapagliflozin is an option in CKD within NICE TA1075 (2025) criteria, on top of optimised standard care. NG203 blood-pressure target when ACR is under 70: 120–139/under 90 mmHg. In hypertension with type 2 diabetes, NICE NG136 favours an ACE inhibitor or ARB as first choice, so review the current amlodipine-only plan."
    },
    {
     "h": "Medicines safety",
     "t": "Avoid NSAIDs. Review renally cleared drugs: the BNF advises reviewing the metformin dose when eGFR falls below 45 and avoiding it below 30. Give sick-day guidance for metformin (and any ACE inhibitor, ARB or SGLT2 inhibitor): pause during dehydrating illness and restart after 24–48 hours of eating and drinking normally."
    },
    {
     "h": "Monitoring and referral",
     "t": "NICE NG203 suggests at least yearly eGFR for G3a with ACR under 3 (more often as ACR rises). Refer if: ACR 70 or more (unless diabetes already appropriately treated); ACR 30 or more with haematuria; sustained eGFR fall of 25% or more with a change of category, or 15 mL/min/1.73 m² or more within 12 months; hypertension uncontrolled on 4 or more drugs; suspected rare or genetic cause; 5-year kidney failure risk over 5%. None apply to her now."
    },
    {
     "h": "Communicating the label",
     "t": "Patients hear ‘chronic kidney disease’ as kidney failure. Put the stage in proportion, address specific fears (here a neighbour on dialysis), avoid both false reassurance and alarm, and turn the label into things she can do."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and identity",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Mrs Patricia Nwosu? It’s Dr Lee. Could you confirm your date of birth? Thank you. I understand you’ve had a letter that’s upset you. Tell me what’s happened.",
    "dom": "rto",
    "why": "Confirms identity, then opens with her experience"
   },
   {
    "who": "pt",
    "text": "Doctor, it said I’ve got chronic kidney disease. I’ve been beside myself. My neighbour had kidney disease and ended up on dialysis three times a week, and then… well. Am I heading for that? How long have my kidneys got? I didn’t sleep a wink."
   },
   {
    "who": "dr",
    "text": "I’m really sorry. That letter should have come with a conversation, and it’s cost you a night’s sleep. Let me say straight away: from what I can see, I’m not expecting you to need dialysis. I’ll explain why, and then we’ll go through what it does mean. Is that alright?",
    "dom": "rto",
    "why": "Acknowledges the harm of the letter and answers the core fear early"
   },
   {
    "who": "pt",
    "text": "(Exhales.) Yes. Please."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Can I check a few things first so my explanation is right for you? How have you been in yourself: any swelling of your ankles, passing water more at night, blood in your urine, or feeling unusually tired?",
    "dom": "tasks",
    "why": "Screens for symptoms and haematuria that would change the picture"
   },
   {
    "who": "pt",
    "text": "No, nothing. I feel fine. That’s what I don’t understand."
   },
   {
    "who": "dr",
    "text": "And do you ever take anti-inflammatory painkillers like ibuprofen or naproxen, or any remedies from the chemist?",
    "dom": "tasks",
    "why": "Checks for nephrotoxic medicines"
   },
   {
    "who": "pt",
    "text": "Not really. Paracetamol now and then."
   },
   {
    "who": "dr",
    "text": "That’s good. You’re on amlodipine and metformin. Are you managing to take those, and do you know how your blood pressure and sugar have been?",
    "dom": "tasks",
    "why": "Reviews adherence and control of the main drivers"
   },
   {
    "who": "pt",
    "text": "I take them every day. The nurse said my sugar was alright. Blood pressure’s okay, I think."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You mentioned your neighbour. What worries you most about what happened to her?",
    "dom": "rto",
    "why": "Explores the specific fear rather than reassuring generically"
   },
   {
    "who": "pt",
    "text": "Being tied to a machine. Being a burden on my family. Losing my independence. And I keep thinking I did this to myself, with the diabetes."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. Those are big fears, and it makes sense you’d think of her. Can I take them one at a time? First, the blame. Kidneys slow down naturally with age and with blood pressure. This isn’t a punishment for anything you’ve done.",
    "dom": "rto",
    "why": "Validates, then addresses guilt without shaming"
   },
   {
    "who": "pt",
    "text": "(Quiet.) I have been blaming myself."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s what the numbers mean. Your kidney filtering score is 52. That puts you in stage 3a, a mild reduction that’s very common at 64, especially with blood pressure and diabetes. The important thing is it’s been steady for a whole year. Your neighbour had kidney failure, which is a different place altogether.",
    "dom": "tasks",
    "why": "Accurate staging, stability and distinction from end-stage disease"
   },
   {
    "who": "pt",
    "text": "So I won’t end up on dialysis?"
   },
   {
    "who": "dr",
    "text": "Most people at your stage never need dialysis. Many live with this for the rest of their lives without it ever causing trouble. I can’t promise anyone the future, which is why we check it, but the realistic outlook is good. What this result mostly tells us is to look after your heart and circulation, because that protects the kidneys too.",
    "dom": "tasks",
    "why": "Honest risk communication, neither minimising nor catastrophising"
   },
   {
    "who": "pt",
    "text": "That’s not what I read online."
   },
   {
    "who": "dr",
    "text": "Online pages often describe the worst cases. Your results, and the fact they’re stable, are what count.",
    "dom": "gs",
    "why": "Corrects misinformation briefly and anchors to her own data"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "There are three things that protect your kidneys. First, I’d like to repeat the urine protein test so we have an exact number. If there’s even a small amount of protein, with diabetes it’s worth adding a tablet that shields the kidneys, and it would help your blood pressure too. Second, a cholesterol tablet to protect your heart. Third, there’s a diabetes tablet that also protects the kidneys, which we can discuss. How does that sound?",
    "dom": "tasks",
    "why": "Protective plan by ACR: ACE inhibitor or ARB, statin, SGLT2 inhibitor option"
   },
   {
    "who": "pt",
    "text": "That’s a lot of tablets. But if it protects them… I’d rather do something than just worry."
   },
   {
    "who": "dr",
    "text": "We don’t need to decide everything today. Let’s get the urine test, then go through the options face to face so you can choose what feels right. Would you like me to book that?",
    "dom": "rto",
    "why": "Shared decision, paced to her; offers a face-to-face review"
   },
   {
    "who": "pt",
    "text": "Yes, I’d like that."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Two practical things. Avoid anti-inflammatory painkillers like ibuprofen; paracetamol is fine. And if you’re ever unwell with vomiting, diarrhoea or a fever and can’t keep fluids down, stop the metformin and restart it once you’ve been eating and drinking normally for a day or two. Ring us if you’re unwell for more than a day or so.",
    "dom": "gs",
    "why": "NSAID avoidance and sick-day guidance"
   },
   {
    "who": "dr",
    "text": "We’ll check your kidney numbers at least once a year. If they ever changed in a way that needed a specialist, we’d spot it early and arrange it. At the moment you’re nowhere near that.",
    "dom": "gs",
    "why": "Explains monitoring as early detection and states referral triggers exist"
   },
   {
    "who": "pt",
    "text": "That’s such a relief."
   },
   {
    "who": "dr",
    "text": "If someone in your family asks tonight what the doctor said, what will you tell them?",
    "dom": "rto",
    "why": "Teach-back checks the reframe has landed"
   },
   {
    "who": "pt",
    "text": "That it’s mild and steady, it’s not like my neighbour, and we’re doing things to protect my kidneys and heart. And no ibuprofen."
   },
   {
    "who": "dr",
    "text": "That’s exactly right. I’ll book the urine test and an appointment with me afterwards. Please try to sleep tonight.",
    "dom": "rto",
    "why": "Warm close with a booked follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Confirmed identity; open question about the letter; let her voice the dialysis fear before explaining.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Sleep lost, fear of being a burden, loss of independence, the neighbour’s illness, online reading.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up ‘and then… well’ about the neighbour and ‘I did this to myself’, and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (kidney failure, dialysis); concern (burden, independence, guilt); expectation (to know how long her kidneys have).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Repeat ACR for an exact value; BP and HbA1c review; lipids and cardiovascular risk; yearly eGFR monitoring.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Stable CKD G3a from age, hypertension and diabetes; asked about haematuria, NSAIDs and symptoms.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Checked for haematuria, oedema and rapid decline; knew the NG203 referral criteria and that none apply.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "CKD stage 3a, stable, low progression risk; explained as a cardiovascular risk marker.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "ACE inhibitor or ARB if ACR 3 or more with diabetes; statin; SGLT2 inhibitor discussed; choices paced to her.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "BP and diabetes control, metformin dose review threshold, NSAID avoidance.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Sick-day guidance, monitoring plan, booked review, teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Investigations & results"
   ],
   "stem": {
    "name": "Patricia Nwosu",
    "age": "64 years · female",
    "pmh": [
     "Hypertension",
     "Type 2 diabetes",
     "CKD G3a (new code)"
    ],
    "meds": [
     "Amlodipine",
     "Metformin"
    ],
    "allergy": "NKDA",
    "recent": "⚠ eGFR 52, stable for 12 months. ACR normal to mildly raised. Letter sent: ‘chronic kidney disease’. No discussion documented.",
    "reason": "Telephone call. “The letter says I’ve got kidney disease — am I going on dialysis?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and acknowledge",
     "d": "Let her tell you about the letter and the neighbour. Acknowledge the sleepless night and answer the dialysis question early, briefly."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Symptoms, haematuria, NSAIDs, adherence, BP and glucose control."
    },
    {
     "t": "4–6",
     "h": "Fears and guilt",
     "d": "What worries her most about the neighbour’s story. Burden, independence, blame. Lift the guilt."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "G3a, stable, common, mostly a heart-risk marker. Repeat ACR; ACE inhibitor or ARB if ACR 3 or more; statin; SGLT2 inhibitor option."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "No NSAIDs, sick-day guidance for metformin, yearly monitoring, booked review, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Reads out the stage and “it’s nothing to worry about”; never asks about the neighbour; or leaves her thinking dialysis is likely; no ACR plan; no NSAID or sick-day advice; ends without follow-up.",
    "pass": "Explains CKD 3a accurately as mild and stable; distinguishes it from kidney failure; outlines BP, diabetes and NSAID advice; plans monitoring and a review.",
    "exc": "All of the above, plus: explores and dismantles the neighbour fear and the guilt; uses ACR to decide on an ACE inhibitor or ARB; offers statin and SGLT2 inhibitor as choices at her pace; gives sick-day guidance; checks understanding with teach-back."
   },
   "avoid": [
    {
     "dont": "“Stage 3 is nothing to worry about.”",
     "instead": "“It’s mild and it’s been steady for a year. It’s a reason to look after your heart and kidneys, not a countdown.”",
     "why": "Minimising loses her trust and removes the reason to engage with the protective plan."
    },
    {
     "dont": "“Your kidneys are only working at about half.”",
     "instead": "“Your kidneys are filtering a little slower than a younger person’s, which is common at 64.”",
     "why": "‘Half’ sounds like failure to a frightened patient; describe the reality, not a fraction."
    },
    {
     "dont": "“We’ll start ramipril, atorvastatin and dapagliflozin.”",
     "instead": "“There are three things that can protect your kidneys. Let’s get the exact urine result and choose together.”",
     "why": "A list of drug names on the phone to a distressed patient is not shared decision-making."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Independence and family",
     "t": "Her fear is of becoming a burden and losing independence. Framing the plan as protecting her independence is more persuasive than numbers."
    },
    {
     "h": "Online information",
     "t": "She has read worst-case material online. Point her to reliable UK patient information and anchor the discussion to her own stable results."
    }
   ],
   "legal": [
    {
     "h": "Informed choice on new medicines",
     "t": "Discuss material risks and reasonable alternatives before starting an ACE inhibitor, statin or SGLT2 inhibitor, and respect her choice (Montgomery v Lanarkshire Health Board, 2015)."
    }
   ],
   "professional": [
    {
     "h": "Communicating results",
     "t": "A diagnostic label sent by letter without discussion caused avoidable distress. Acknowledge it honestly and consider it for practice learning (GMC Good Medical Practice 2024: communication and openness)."
    },
    {
     "h": "Shared decisions",
     "t": "Pace decisions to the patient and offer a face-to-face review for a new long-term diagnosis (GMC Decision making and consent, 2020)."
    }
   ],
   "community": [
    {
     "h": "Support and vaccination",
     "t": "Kidney Care UK and Diabetes UK patient information; community pharmacy advice on avoiding NSAIDs; annual flu vaccine as she has diabetes (UKHSA Green Book)."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Visible or non-visible haematuria with the CKD — changes the referral threshold",
     "Rapid fall in eGFR, rising ACR, or new oedema — needs review and possible referral",
     "Regular NSAID use or dehydrating illness — risk of acute kidney injury"
    ],
    "psychosocial": [
     "Sleepless and frightened after a letter with no conversation",
     "Neighbour’s dialysis and death mapped onto herself",
     "Fear of being a burden and losing independence; guilt about diabetes"
    ],
    "ice": [
     "Idea: her kidneys are failing and dialysis is coming",
     "Concern: becoming a burden, losing independence, having caused it herself",
     "Expectation: to be told how long her kidneys have left"
    ]
   },
   "diagnosis": "Give the accurate picture: “You have stage 3a chronic kidney disease. It’s mild, it’s been steady for a year, and for most people at this stage it never leads to dialysis. It’s a signal to protect your heart and kidneys.”",
   "diagnosisLay": "“Think of your kidneys as a filter that’s running a little slower than it did when you were 30, like most people’s at 64. It’s been steady all year. Your neighbour’s filter had stopped working; yours is doing its job, and we’ll help it keep doing it.”",
   "management": {
    "reflectIce": "“You were frightened of ending up like your neighbour and of being a burden. That’s not where you are, and the plan we’re making is about keeping you well and independent.”",
    "psychosocial": "Lift the guilt, correct the online worst-case picture, and pace the medicines discussion so she chooses rather than feels prescribed at.",
    "sharedPlan": [
     "Repeat ACR; ACE inhibitor or ARB if ACR 3 mg/mmol or more with diabetes (NICE NG203)",
     "Atorvastatin 20 mg (NICE NG238); discuss dapagliflozin (NICE TA1075, 2025); BP and HbA1c optimised",
     "Avoid NSAIDs; metformin dose review if eGFR falls below 45 (BNF)"
    ],
    "safetyNet": [
     "Sick-day guidance for metformin during vomiting, diarrhoea or fever",
     "At least yearly eGFR and ACR; referral if NG203 criteria are met; booked face-to-face review"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Chronic kidney disease",
    "s": "Case walkthrough · NICE NG203",
    "href": "../cases/ckd.html"
   },
   {
    "ic": "💠",
    "t": "CKD protocol",
    "s": "ACR · drug choices · monitoring",
    "href": "management/ckd.html"
   },
   {
    "ic": "🗺️",
    "t": "Proteinuria pathway",
    "s": "Visual algorithm · ACR categories",
    "href": "algorithms/proteinuria.html"
   },
   {
    "ic": "💠",
    "t": "Sick-day rules",
    "s": "Which tablets to pause",
    "href": "management/sick-day-rules.html"
   }
  ],
  "pitfalls": {
   "intro": "This is a risk-communication station. It is failed by minimising (“stage 3 is nothing”), by leaving the dialysis fear standing, or by a plan that ignores ACR. The marks sit in accurate reassurance plus a real protective plan.",
   "items": [
    {
     "dom": "rto",
     "fail": "Launching into eGFR and stages before acknowledging her distress and the letter.",
     "why": "She cannot take in numbers while frightened. “Did not respond to the patient’s emotional state” is standard failing feedback.",
     "fix": "Acknowledge the sleepless night and the letter, and answer the dialysis question briefly first."
    },
    {
     "dom": "rto",
     "fail": "Saying “don’t worry” without asking about the neighbour.",
     "why": "The neighbour’s story is the source of the fear. Generic reassurance doesn’t reach it.",
     "fix": "“What worries you most about what happened to her?” Then contrast kidney failure with her stable G3a."
    },
    {
     "dom": "tasks",
     "fail": "Planning only ‘recheck in a year’.",
     "why": "With diabetes, NICE NG203 recommends an ACE inhibitor or ARB if ACR is 3 mg/mmol or more; statin and SGLT2 inhibitor are also indicated options. A passive plan misses real protection.",
     "fix": "Repeat ACR and set out the three protective options for her to choose."
    },
    {
     "dom": "tasks",
     "fail": "Promising she will never need dialysis.",
     "why": "False certainty is inaccurate and undermines monitoring.",
     "fix": "“Most people at your stage never need it. We keep checking so any change is caught early.”"
    },
    {
     "dom": "gs",
     "fail": "No NSAID or sick-day advice.",
     "why": "These are the practical safety measures examiners expect in any CKD consultation.",
     "fix": "Paracetamol, not ibuprofen; pause metformin during dehydrating illness and restart after 24–48 hours of normal eating and drinking."
    },
    {
     "dom": "gs",
     "fail": "Using ‘eGFR’, ‘ACR’ and ‘G3a A1’ without explanation.",
     "why": "“Language not easily understood by the patient.”",
     "fix": "“Your kidney filtering score” and “a urine test for protein”; then teach-back."
    }
   ]
  }
 },
 "depression-first-risk": {
  "stem": {
   "name": "Jordan Pryce",
   "age": "26-year-old man",
   "pmh": [
    "No significant past medical history",
    "No previous mental health contact"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "IT support worker. No consultations in the past two years.",
   "reason": "Video consultation booked for “a sick note — stress at work”."
  },
  "knowledge": {
   "guideline": "NICE NG222 Depression in adults (2022, updated December 2025) · NICE NG225 Self-harm (2022) · NICE CG115 Alcohol-use disorders (2011) · DVLA Assessing fitness to drive",
   "summary": "A fit note request for “stress” can be the way into a depressive illness. Three months of low mood, anhedonia and biological symptoms is depression; ask directly about suicide before any note is signed.",
   "points": [
    {
     "h": "Recognise depression",
     "t": "Low mood or loss of interest most days for at least 2 weeks, with symptoms such as early waking, weight or appetite change, poor concentration, fatigue, worthlessness and thoughts of death. NICE NG222 grades depression as less severe or more severe; a PHQ-9 can support, but not replace, clinical judgement."
    },
    {
     "h": "Risk assessment",
     "t": "Ask directly about thoughts that life is not worth living, suicidal ideation, plans, intent, means, previous self-harm and what keeps him safe. Asking does not increase risk. NICE NG225: do not use risk tools or low, medium or high ratings to predict suicide; make a safety plan with him."
    },
    {
     "h": "Treatment options",
     "t": "NICE NG222: discuss the options and his preference. For more severe depression, choices include individual CBT combined with an antidepressant, individual CBT, behavioural activation, or an antidepressant alone. NHS Talking Therapies accepts self-referral."
    },
    {
     "h": "Starting an antidepressant",
     "t": "NICE NG222: review people aged 18 to 25 or at increased risk of suicide 1 week after starting or increasing the dose; others within 2 weeks. Jordan has passive suicidal thoughts, so a 1-week review applies. Consider toxicity in overdose when choosing; dose per BNF."
    },
    {
     "h": "Alcohol",
     "t": "Drinking alone to cope worsens mood and increases risk. Use AUDIT to measure it (NICE CG115) and give brief advice. Alcohol and depression are treated together, not one after the other."
    },
    {
     "h": "The fit note and driving",
     "t": "A fit note is legitimate as part of a treatment plan; “may be fit for work” with adjustments is an option. DVLA: depression with significant concentration problems, agitation or suicidal thoughts must be notified by the driver, and he should not drive while affected."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Jordan, I’m Dr Shah. Can you hear me okay, and are you somewhere private? … What can I help with today?",
    "dom": "rto",
    "why": "Checks privacy on video and opens neutrally"
   },
   {
    "who": "pt",
    "text": "I just need a fit note really. Work’s been doing my head in. Not sleeping, exhausted, can’t focus. A couple of weeks off and I’ll be out of your way. It’s just stress, everyone’s stressed."
   },
   {
    "who": "dr",
    "text": "I can help with a fit note. Before I do, I’d like to understand what’s been happening, because not sleeping and not being able to focus is a lot to carry. Is that alright?",
    "dom": "gs",
    "why": "Agrees the request is legitimate while making space to assess"
   },
   {
    "who": "pt",
    "text": "Yeah, okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "How long has it been like this? And apart from work, how has life been generally?",
    "dom": "rto",
    "why": "Open question that widens beyond work"
   },
   {
    "who": "pt",
    "text": "About three months. I split up with my girlfriend around then. Long-term. Since then, I dunno. Nothing’s the same."
   },
   {
    "who": "dr",
    "text": "That’s a big loss. Are you still enjoying the things you used to, like seeing friends or sport?",
    "dom": "tasks",
    "why": "Checks anhedonia and withdrawal"
   },
   {
    "who": "pt",
    "text": "Stopped football. Don’t see my mates. Can’t be bothered with anything."
   },
   {
    "who": "dr",
    "text": "What about sleep, appetite and weight?",
    "dom": "tasks",
    "why": "Biological symptoms of depression"
   },
   {
    "who": "pt",
    "text": "Wake up at four and can’t get back off. Not eating much, lost weight."
   },
   {
    "who": "dr",
    "text": "How do you usually unwind in the evenings? Some people find they’re drinking more.",
    "dom": "tasks",
    "why": "Asks about alcohol in a non-judgemental way"
   },
   {
    "who": "pt",
    "text": "Yeah… more than I should. On my own mostly."
   },
   {
    "phase": "Risk assessment",
    "clock": "4–7 min",
    "who": "dr",
    "text": "I ask everyone who feels this low: when things are at their worst, do you ever feel life isn’t worth living, or that people would be better off without you?",
    "dom": "tasks",
    "why": "Direct, routine-framed suicide question"
   },
   {
    "who": "pt",
    "text": "(long pause) …Sometimes. That everyone would be better off. Some nights I don’t really want to wake up."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That can’t have been easy. Have those thoughts gone further, thinking about how you might end your life, or making any plans?",
    "dom": "tasks",
    "why": "Explores active ideation and plans after acknowledging disclosure"
   },
   {
    "who": "pt",
    "text": "No. No plans. I wouldn’t. It’s just a feeling."
   },
   {
    "who": "dr",
    "text": "Have you ever hurt yourself? And on the worst days, what stops you?",
    "dom": "tasks",
    "why": "Past self-harm and protective factors"
   },
   {
    "who": "pt",
    "text": "Never hurt myself. My mum, I suppose. And my dog. I couldn’t do that to my mum."
   },
   {
    "who": "dr",
    "text": "Those matter a lot, and we’ll build on them. You’re not a burden, Jordan. Feeling that way is part of the illness talking.",
    "dom": "rto",
    "why": "Receives the disclosure warmly and challenges the burden belief"
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "From what you’ve told me — three months of feeling flat, waking early, weight loss, giving up football and friends, and those dark thoughts — this is more than work stress. It’s depression. It’s an illness, not a weakness, and it’s common in men your age.",
    "dom": "tasks",
    "why": "Names the diagnosis with the evidence and reduces stigma"
   },
   {
    "who": "pt",
    "text": "I kind of knew. I just didn’t want to say it."
   },
   {
    "who": "dr",
    "text": "That makes sense. Saying it out loud is the first step to getting better, and you’ve just done it.",
    "dom": "rto",
    "why": "Validates the hidden agenda without judgement"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "There are a few things that help. Talking therapy works well, and I can refer you or you can self-refer today. Some people add an antidepressant. If you chose that, I’d want to see you a week after starting. What do you think?",
    "dom": "rto",
    "why": "Shares NICE NG222 options, including early review, and invites his view"
   },
   {
    "who": "pt",
    "text": "I’ll try the talking. Maybe the tablets too, if you think so."
   },
   {
    "who": "dr",
    "text": "We can decide together at the next appointment. The drinking alone: alcohol makes low mood and dark thoughts worse, so cutting back is part of getting better. I’ll do your fit note for two weeks as part of this plan, not instead of it. And if you drive, please don’t while your concentration is this poor; there are DVLA rules I can explain.",
    "dom": "tasks",
    "why": "Addresses alcohol, uses the fit note as part of care and checks driving"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If the thoughts get stronger, or you start thinking about how or when, ring us, or NHS 111 and choose the mental health option, day or night. If you ever feel you can’t keep yourself safe, that’s 999 or A&E. Samaritans are on 116 123. I’ll send these to you now.",
    "dom": "gs",
    "why": "Specific crisis routes in plain language"
   },
   {
    "who": "dr",
    "text": "I’d like to speak again within a week. Could you tell me what we’ve agreed?",
    "dom": "gs",
    "why": "Early follow-up and teach-back"
   },
   {
    "who": "pt",
    "text": "It’s depression, not just stress. Talking therapy, cut the drinking, note for two weeks, the numbers if it gets bad, and see you next week."
   },
   {
    "who": "dr",
    "text": "Spot on. You came in for a note; you’re leaving with a plan and people on your side.",
    "dom": "rto",
    "why": "Links the outcome to his original request"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Acknowledges the fit note request but explores before signing; lets him tell the story beyond work.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Breakup, withdrawal from friends and football, drinking alone, work, support from his mum.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Flatness, avoiding eye contact and “everyone’s stressed” are followed rather than accepted.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (work stress); concern (can’t say “I’m depressed”, shame); expectation (a quick note).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Mental state assessment; PHQ-9 to support judgement; AUDIT for alcohol.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Work stress versus depressive episode versus alcohol-related low mood; considers grief after the breakup.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Direct questions on suicidal thoughts, plans, intent, means, past self-harm and protective factors.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Names depression, explains why it is more than stress, and reduces stigma.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "NHS Talking Therapies and antidepressant options (NICE NG222) with his preference; fit note as part of care.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Alcohol addressed briefly and without lecturing; driving checked (DVLA); social reconnection encouraged.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review within a week; crisis routes named; safety plan; risk assessment documented.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Jordan Pryce",
    "age": "26 years · male",
    "pmh": [
     "Nil significant",
     "No previous mental health contact"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "No consultations for two years. Booking reason: “sick note — stress at work”.",
    "reason": "Video consultation. “I just need a fit note really.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "He wants the note fast. Agree you can help, then ask for the story first."
    },
    {
     "t": "1–4",
     "h": "Beyond work",
     "d": "Duration, the breakup, anhedonia, early waking, weight loss, withdrawal, drinking alone."
    },
    {
     "t": "4–7",
     "h": "Risk",
     "d": "Life not worth living, plans, intent, means, previous self-harm, what keeps him safe."
    },
    {
     "t": "7–9",
     "h": "Name it",
     "d": "Depression, not just stress. Illness, not weakness. Let him own it."
    },
    {
     "t": "9–12",
     "h": "Plan and safety-net",
     "d": "Talking Therapies, antidepressant option with a 1-week review, alcohol, fit note as part of care, driving. Crisis numbers. Review within a week. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Signs a two-week fit note for stress and ends the consultation; never asks about mood in depth or about suicide; ignores the drinking; or lectures about alcohol and misses the risk.",
    "pass": "Recognises depression behind the request, asks directly about suicidal thoughts and plans, offers therapy and follow-up with a crisis safety-net, and issues the note.",
    "exc": "All of that, plus he is helped to drop the “just stress” framing himself, the disclosure is received warmly, protective factors are used, the options follow NICE NG222 with the correct 1-week review, alcohol and driving are covered briefly, and he leaves with an owned plan."
   },
   "avoid": [
    {
     "dont": "“Sure, I’ll sign you off for two weeks. Come back if it doesn’t settle.”",
     "instead": "“I can do a note. First, can you tell me how things have really been, beyond work?”",
     "why": "Processing the request unexamined misses the depression and the risk."
    },
    {
     "dont": "“You’re not thinking of doing anything silly, are you?”",
     "instead": "“Do you ever feel life isn’t worth living, or that people would be better off without you?”",
     "why": "A leading, minimising question invites “no”. A clear, direct question invites the truth."
    },
    {
     "dont": "“You need to stop drinking — it’s making everything worse.”",
     "instead": "“Alcohol tends to deepen low mood and dark thoughts, so cutting back is part of getting better. I can help.”",
     "why": "Linking alcohol to his goal works better than an instruction."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Loss and isolation",
     "t": "The breakup, withdrawal from football and friends, and drinking alone all remove protective contact. Encourage one step back towards people or activity."
    },
    {
     "h": "Men and help-seeking",
     "t": "Many men present with physical or practical requests rather than naming low mood. Normalising depression helps them engage."
    }
   ],
   "legal": [
    {
     "h": "Fit note",
     "t": "Self-certification covers the first 7 days of sickness; after that a fit note is needed. Consider “may be fit for work” with adjustments such as a phased return or reduced hours."
    },
    {
     "h": "DVLA",
     "t": "DVLA: depression with significant memory or concentration problems, agitation, behavioural disturbance or suicidal thoughts must be notified by the licence holder. Advise not driving while affected."
    }
   ],
   "professional": [
    {
     "h": "Documentation",
     "t": "Record the direct risk questions and answers, protective factors, the safety plan, crisis numbers given and the review date (NICE NG225)."
    },
    {
     "h": "Work",
     "t": "Occupational health and the Access to Work mental health support service can help with a return. Depression lasting 12 months or more with a substantial effect may count as a disability under the Equality Act 2010."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "NHS Talking Therapies (self-referral); NHS 111 mental health option; Samaritans 116 123; CALM (Campaign Against Living Miserably); Andy’s Man Club peer groups."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Suicidal thoughts with a plan, intent, means or preparation",
     "Previous self-harm, escalating alcohol, recent loss, isolation",
     "Psychotic symptoms or severe self-neglect"
    ],
    "psychosocial": [
     "Breakup of a long-term relationship three months ago",
     "Drinking more, alone",
     "Stopped football, withdrawn from friends; work struggling"
    ],
    "ice": [
     "Idea: “It’s just work stress”",
     "Concern: feels a failure and a burden; can’t bring himself to say “depressed”",
     "Expectation: a quick fit note"
    ]
   },
   "diagnosis": "“Three months of feeling flat, waking at four, weight loss, giving up things you enjoy and those dark thoughts: that’s depression, not just stress. It’s an illness, and it’s treatable.”",
   "diagnosisLay": "“Depression is like your battery not charging any more, however long you rest. It changes sleep, appetite and how you see yourself. The right help recharges it.”",
   "management": {
    "reflectIce": "“You came in saying it’s work stress, and work matters. But I think you knew it was more, and it took courage to tell me about the dark thoughts.”",
    "psychosocial": "Tie the plan to what he values: his mum, his dog, getting back to football. Keep alcohol advice short and linked to his mood.",
    "sharedPlan": [
     "NHS Talking Therapies referral or self-referral; antidepressant as an option with review 1 week after starting (NICE NG222)",
     "Fit note for two weeks as part of treatment; consider adjustments on return",
     "Cut down alcohol with support; one small step back to friends or football"
    ],
    "safetyNet": [
     "NHS 111 mental health option, Samaritans 116 123, 999 or A&E if he feels unable to keep safe",
     "Review within a week; sooner if thoughts become plans"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Depression",
    "s": "Case walkthrough · NICE NG222",
    "href": "../cases/depression.html"
   },
   {
    "ic": "💠",
    "t": "Depression protocol",
    "s": "Risk first · treatment options",
    "href": "management/depression.html"
   },
   {
    "ic": "📝",
    "t": "Fit note helper",
    "s": "Med3 · adjustments",
    "href": "fit-note.html"
   },
   {
    "ic": "💠",
    "t": "Harmful drinking and alcohol dependence",
    "s": "Protocol · AUDIT · brief intervention",
    "href": "management/alcohol-problem-drinking.html"
   }
  ],
  "pitfalls": {
   "intro": "The trap here is the request. Candidates who process the fit note fail the station; candidates who assess but avoid the suicide question fail it too. The patterns below reflect recurring SCA feedback.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Signs the fit note for stress and closes.",
     "why": "“Did not explore the presenting problem.” The depression and the risk are missed entirely.",
     "fix": "Agree you can help with the note, then ask how things have really been beyond work."
    },
    {
     "dom": "tasks",
     "fail": "Assesses mood thoroughly but never asks directly about suicide.",
     "why": "“Did not assess risk.” Passive suicidal thoughts are only disclosed when asked.",
     "fix": "Ask the direct question, then plans, intent, means, past self-harm and protective factors."
    },
    {
     "dom": "tasks",
     "fail": "Starts an antidepressant with review in four weeks.",
     "why": "NICE NG222: review within 1 week for people at increased risk of suicide.",
     "fix": "State the 1-week review when discussing medication, and consider overdose toxicity."
    },
    {
     "dom": "rto",
     "fail": "Labels him as depressed in the first two minutes.",
     "why": "Premature labelling before he feels heard can make him retreat to “just stress”.",
     "fix": "Gather his story first, then name depression using his own words back to him."
    },
    {
     "dom": "rto",
     "fail": "Reacts awkwardly or moves quickly on after the disclosure.",
     "why": "“Did not respond empathically to the patient’s disclosure.”",
     "fix": "Pause, thank him, and challenge the burden belief before moving on."
    },
    {
     "dom": "gs",
     "fail": "Gives generic advice to “seek help if things get worse”.",
     "why": "Vague safety-netting after suicidal thoughts is a standard failing point.",
     "fix": "Named crisis routes, when to use each, a review within a week, and teach-back."
    }
   ]
  }
 },
 "dvt-calf": {
  "stem": {
   "name": "Lorraine Beckett",
   "age": "58-year-old woman",
   "pmh": [
    "Menopausal symptoms — HRT recently started",
    "Ex-smoker"
   ],
   "meds": [
    "HRT (recently started)"
   ],
   "allergy": "No known drug allergies",
   "recent": "HRT started recently for menopausal symptoms. No other recent consultations recorded. Occupation: office manager.",
   "reason": "Telephone request: swollen, sore left calf — asking for an anti-inflammatory gel or antibiotics."
  },
  "knowledge": {
   "guideline": "NICE NG158 (venous thromboembolic diseases, updated 2023) · NICE NG23 (menopause) · BNF",
   "summary": "A swollen, warm, tender calf after a long-haul flight in a woman on HRT is a DVT until proven otherwise. Her breathlessness and chest pain raise possible PE, so she needs same-day hospital assessment.",
   "points": [
    {
     "h": "DVT until proven otherwise",
     "t": "Unilateral calf swelling, tenderness along the deep veins, warmth and pitting oedema suggest DVT. Cellulitis usually shows spreading redness, often with a skin break or fever. Use the two-level DVT Wells score (NICE NG158)."
    },
    {
     "h": "The DVT pathway",
     "t": "NICE NG158: Wells 2 or more (DVT likely) — proximal leg vein ultrasound with the result within 4 hours; if not possible, D-dimer, interim therapeutic anticoagulation and a scan result within 24 hours. Wells 1 or less — D-dimer, then ultrasound within 4 hours if positive."
    },
    {
     "h": "Possible PE changes everything",
     "t": "Breathlessness, pleuritic chest pain, haemoptysis, syncope or tachycardia with a possible DVT means suspected PE. NICE NG158: use the two-level PE Wells score; if PE is likely (more than 4 points), CTPA immediately, or interim therapeutic anticoagulation if CTPA can’t be done straight away. In practice this means same-day hospital assessment; 999 if she is acutely unwell."
    },
    {
     "h": "Risk factors",
     "t": "Long-haul travel, oestrogen-containing HRT, previous smoking, age, recent immobility, cancer, previous VTE and thrombophilia. Travel and hormones also matter later, when classifying the VTE as provoked or unprovoked, which affects treatment length."
    },
    {
     "h": "HRT",
     "t": "BNF: unexplained swelling or severe pain in the calf of one leg, and sudden breathlessness or chest pain, are reasons to stop HRT immediately pending investigation. NICE NG23: VTE risk is raised by oral HRT, while transdermal HRT at standard doses carries no more risk than baseline — relevant to future options, decided with specialist advice if VTE is confirmed."
    },
    {
     "h": "Anticoagulation",
     "t": "NICE NG158 recommends apixaban or rivaroxaban as first-line treatment for confirmed DVT or PE in most people; doses per BNF. Don’t prescribe a gel or antibiotics for a possible DVT."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Mrs Beckett? It’s Dr Lee from the surgery. Can I check your date of birth? … Thank you. I’ve seen the note about your leg. Tell me what’s been happening.",
    "dom": "rto",
    "why": "Identity check, then an open question"
   },
   {
    "who": "pt",
    "text": "My left calf’s gone swollen and achy, three days now, and it’s a bit warm. I’m sure I pulled something in the garden, or it’s that cellulitis my neighbour had. Could you just pop a gel or some antibiotics through? I’m rushed off my feet."
   },
   {
    "who": "dr",
    "text": "I can hear you’re busy, and I want to help you sort this quickly. To make sure I get it right, can I ask a few questions first? Then I’ll tell you what I think and what we should do.",
    "dom": "gs",
    "why": "Acknowledges pressure; signposts the structure without agreeing to the prescription"
   },
   {
    "who": "pt",
    "text": "Go on, then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Is the left calf bigger than the right? Is it sore to touch, and is the skin red, broken or spreading?",
    "dom": "tasks",
    "why": "Distinguishes DVT from cellulitis"
   },
   {
    "who": "pt",
    "text": "It’s definitely bigger than the right. Sore when I press it. It’s warm, but no cut, and no redness spreading."
   },
   {
    "who": "dr",
    "text": "Any fever or feeling shivery?"
   },
   {
    "who": "pt",
    "text": "No."
   },
   {
    "who": "dr",
    "text": "Have you been on any long journeys, had an operation, or been less mobile recently?",
    "dom": "tasks",
    "why": "Actively elicits VTE risk factors"
   },
   {
    "who": "pt",
    "text": "We got back from Australia five days ago. Long flight. But that’s ages ago now."
   },
   {
    "who": "dr",
    "text": "That’s important — thank you. And are you taking any medicines, including hormone tablets or HRT? Do you smoke?",
    "dom": "tasks",
    "why": "Hormone and smoking history"
   },
   {
    "who": "pt",
    "text": "I started HRT recently. I used to smoke, not now."
   },
   {
    "who": "dr",
    "text": "Now, this is a really important question. Have you been at all short of breath, had any chest pain, coughed up blood, or felt faint?",
    "dom": "tasks",
    "why": "Screens for PE"
   },
   {
    "who": "pt",
    "text": "(pause) A bit breathless, but I’m just unfit. And once or twice a sharp pain in my chest when I breathed in. It went off."
   },
   {
    "who": "dr",
    "text": "I’m really glad you told me. I’ll explain why that matters in a moment.",
    "dom": "rto",
    "why": "Responds to the dismissed symptom rather than passing over it"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You mentioned being rushed off your feet. What’s making it hard to get seen?",
    "dom": "rto",
    "why": "Explores the barrier behind the minimising"
   },
   {
    "who": "pt",
    "text": "My husband’s not well, I look after him, and I can’t take time off work. And honestly… I’m worried you’ll say it’s the HRT. It’s given me my life back."
   },
   {
    "who": "dr",
    "text": "That makes sense — you’re carrying a lot, and HRT has clearly made a big difference. I’ll be honest with you about both. What were you hoping for today?",
    "dom": "rto",
    "why": "Validates both concerns and elicits expectations"
   },
   {
    "who": "pt",
    "text": "Just the gel, and not to have to go anywhere."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’m not going to send a gel or antibiotics, because I don’t think this is a pulled muscle or cellulitis. A swollen, warm, tender calf on one side, after a long flight and while on HRT, can be a blood clot in the deep veins — a DVT.",
    "dom": "tasks",
    "why": "Declines the inappropriate prescription and names the likely diagnosis"
   },
   {
    "who": "pt",
    "text": "A clot? From the flight?"
   },
   {
    "who": "dr",
    "text": "The flight and the HRT both raise the chance. And the breathlessness and sharp chest pain worry me more, because a clot in the leg can sometimes travel to the lungs. That needs checking today, in hospital — not tomorrow.",
    "dom": "tasks",
    "why": "Recognises possible PE and escalates to same-day hospital assessment"
   },
   {
    "who": "pt",
    "text": "Today? Is it really that serious?"
   },
   {
    "who": "dr",
    "text": "It can be, which is why I’m being careful. Most people with this get a scan, a blood test and, if it is a clot, blood-thinning tablets — and they do well. The key is not to wait.",
    "dom": "rto",
    "why": "Conveys urgency calmly, with honest reassurance"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’ll call the hospital team now and send them the details. They’ll check your lungs and leg, and may start a blood thinner straight away while they arrange the scans. Please don’t drive yourself. Is there someone who can take you, and someone to be with your husband?",
    "dom": "tasks",
    "why": "Arranges same-day assessment and addresses the caring barrier"
   },
   {
    "who": "pt",
    "text": "I’ll have to ring round, but I can find someone to sit with him and someone to drive me."
   },
   {
    "who": "dr",
    "text": "Good — do that as soon as we finish. About the HRT — please don’t take any more until you’ve been assessed today. That’s standard advice whenever a clot is possible, not a verdict. If it isn’t a clot, you can restart. If it is, we’ll look at safer ways of giving HRT together, with specialist advice — you won’t be left without options.",
    "dom": "tasks",
    "why": "Honest HRT advice per BNF, without blame"
   },
   {
    "who": "pt",
    "text": "Okay. That’s fairer than I expected."
   },
   {
    "who": "dr",
    "text": "And if you need time off work, I can give you a fit note. Your health comes first today.",
    "dom": "gs",
    "why": "Removes a practical barrier"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If before you get to hospital you become suddenly more breathless, get chest pain, cough up blood or feel faint, call 999 straight away. Can you tell me what you’re going to do now?",
    "dom": "gs",
    "why": "Clear 999 safety-net and teach-back"
   },
   {
    "who": "pt",
    "text": "Sort someone for my husband, get a lift to the hospital, no HRT for now, and 999 if I get worse."
   },
   {
    "who": "dr",
    "text": "Exactly right. I’ll ring the hospital now and check later that you got there. You wanted the simplest answer — this is the safe one. Anything else?",
    "dom": "rto",
    "why": "Summarises, commits to follow-up and closes"
   },
   {
    "who": "pt",
    "text": "No. Thank you for not just sending the gel."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; heard her request for a gel or antibiotics without granting it before assessment.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Caring for her unwell husband; work pressure; who can cover at home and get her to hospital.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the dismissed breathlessness and the worry about HRT, and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (pulled muscle or cellulitis); concern (can’t take time off; HRT will be blamed and stopped); expectation (a gel, no appointment).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Two-level Wells scores; same-day hospital assessment for CTPA or proximal leg ultrasound, D-dimer, interim anticoagulation per NICE NG158.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "DVT versus cellulitis versus muscle strain; possible PE given breathlessness and pleuritic chest pain.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for PE (breathlessness, chest pain, haemoptysis, syncope) and escalated; 999 if worse.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Suspected DVT with possible PE — flight, HRT and ex-smoking as risk factors.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day hospital referral; declined gel and antibiotics; HRT paused pending assessment; fit note offered.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Arranged cover for her husband and transport; planned HRT review with specialist advice if VTE confirmed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 for sudden breathlessness, chest pain, haemoptysis or collapse; checked she attended; follow-up of results.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Lorraine Beckett",
    "age": "58 years · female",
    "pmh": [
     "Menopause — on HRT",
     "Ex-smoker"
    ],
    "meds": [
     "HRT (recently started)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Receptionist note: “Left calf swollen and achy for 3 days, thinks she pulled a muscle gardening. Wants a gel or antibiotics sent to the chemist.”",
    "reason": "Telephone call-back. “Can you just pop a prescription through?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "She wants a gel or antibiotics. Don’t agree or refuse yet — gather first."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Unilateral swelling, redness, skin break, fever. Flight, HRT, smoking. Ask directly about breathlessness, chest pain, haemoptysis, faints."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Husband, work and the HRT fear. Acknowledge all three."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Probable DVT with possible PE = same-day hospital. No gel. Pause HRT pending assessment. Transport and cover for her husband."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 if suddenly more breathless, chest pain, haemoptysis or faint. Check she attends. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Sends a gel or antibiotics; never asks about travel, HRT or breathlessness; or books a routine DVT clinic appointment despite possible PE; no 999 advice.",
    "pass": "Recognises possible DVT; elicits flight and HRT; asks about PE symptoms and arranges same-day assessment; gives a 999 safety-net.",
    "exc": "All of the above, plus: escalates correctly to hospital because of PE features; handles the HRT fear honestly with a plan for the future; solves the caring and transport barriers; offers a fit note; checks she attended; teach-back."
   },
   "avoid": [
    {
     "dont": "“I’ll send some ibuprofen gel — ring back if it’s no better.”",
     "instead": "“I don’t think this is a pulled muscle. A swollen, warm calf on one side after a long flight can be a clot, and that needs checking today.”",
     "why": "Remote symptomatic treatment of a possible DVT is a patient-safety fail."
    },
    {
     "dont": "“It’s probably the HRT — you’ll have to stop it for good.”",
     "instead": "“Please pause it until you’re assessed. If it is a clot, we’ll look at safer options together.”",
     "why": "Blame and a blanket verdict before diagnosis damage trust and aren’t accurate."
    },
    {
     "dont": "“Book in with the DVT clinic tomorrow.”",
     "instead": "“Because of the breathlessness and chest pain, you need the hospital team today.”",
     "why": "Possible PE changes the pathway from routine DVT to same-day hospital assessment."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Carer strain",
     "t": "She cares for her unwell husband and can’t see how to get away. Solve cover and transport in the consultation, or she won’t go."
    },
    {
     "h": "Work pressure",
     "t": "As an office manager she feels unable to take time off. Give permission and practical help."
    }
   ],
   "legal": [
    {
     "h": "Fit notes",
     "t": "A fit note can be issued for assessment, treatment and recovery if she isn’t fit for work."
    },
    {
     "h": "Carer’s assessment",
     "t": "Under the Care Act 2014 she is entitled to a local authority carer’s assessment, and her husband can have a needs assessment."
    }
   ],
   "professional": [
    {
     "h": "Remote prescribing",
     "t": "GMC prescribing guidance (2021) requires adequate assessment before prescribing remotely. When a remote consultation suggests a serious condition, arrange in-person assessment instead."
    },
    {
     "h": "Documentation and follow-up",
     "t": "Record the risk factors, the PE screen, advice given, the referral and her agreement; confirm she attended."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Carers UK and the local carers’ centre; Thrombosis UK for patient information if VTE is confirmed; menopause support if HRT options change."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Breathlessness, pleuritic chest pain, haemoptysis, syncope or tachycardia — possible PE, same-day hospital; 999 if acutely unwell",
     "Unilateral calf swelling, tenderness and warmth after recent long-haul travel",
     "Oestrogen-containing HRT, previous smoking, age 58 — VTE risk factors"
    ],
    "psychosocial": [
     "Caring for her unwell husband, with no obvious cover",
     "Work pressure — “rushed off my feet”",
     "Fear that her HRT, which transformed her menopause, will be blamed and stopped"
    ],
    "ice": [
     "Idea: a pulled muscle from gardening, or cellulitis like her neighbour’s",
     "Concern: can’t take time off; HRT will be taken away",
     "Expectation: a gel or antibiotics and no appointment"
    ]
   },
   "diagnosis": "Suspected left-leg DVT with possible pulmonary embolism, after a long-haul flight in a woman on HRT who is an ex-smoker. Needs same-day hospital assessment under NICE NG158.",
   "diagnosisLay": "“Blood in the deep veins of the leg can sometimes form a clot, especially after sitting still on a long flight. Part of a clot can break off and travel to the lungs, which may be why you’ve been breathless. We need to check both today.”",
   "management": {
    "reflectIce": "“I know you wanted a quick fix so you don’t have to leave your husband or work, and that you’re worried about your HRT. I’ll help with both — but the safe thing today is getting checked.”",
    "psychosocial": "Arrange cover for her husband and a lift; offer a fit note; handle the HRT honestly with a clear future plan.",
    "sharedPlan": [
     "Same-day hospital assessment for suspected PE and DVT (two-level Wells, CTPA or ultrasound, D-dimer, interim anticoagulation per NICE NG158)",
     "No gel or antibiotics",
     "Pause HRT pending assessment (BNF); review route and options with specialist advice if VTE confirmed (NICE NG23)"
    ],
    "safetyNet": [
     "Sudden breathlessness, chest pain, coughing blood or fainting — 999",
     "Practice checks she attended; follow-up on anticoagulation plan and HRT"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "DVT",
    "s": "Case walkthrough · NICE NG158",
    "href": "../cases/dvt.html"
   },
   {
    "ic": "💠",
    "t": "DVT protocol",
    "s": "Wells score · scan and anticoagulation",
    "href": "management/dvt.html"
   },
   {
    "ic": "💠",
    "t": "Pulmonary embolism protocol",
    "s": "PE Wells · same-day pathway",
    "href": "management/pulmonary-embolism.html"
   },
   {
    "ic": "💠",
    "t": "HRT prescribing",
    "s": "VTE risk · transdermal options",
    "href": "management/hrt-prescribing.html"
   },
   {
    "ic": "💠",
    "t": "Cellulitis protocol",
    "s": "The main differential",
    "href": "management/cellulitis.html"
   }
  ],
  "pitfalls": {
   "intro": "This telephone station tests whether you can decline a simple request safely. It is failed by prescribing remotely, by missing the PE symptoms she dismisses, and by making her feel blamed for her HRT.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Sending an anti-inflammatory gel or antibiotics because she describes a pulled muscle or cellulitis.",
     "why": "A unilateral, swollen, warm calf after long-haul travel on HRT is a DVT until proven otherwise; remote symptomatic treatment is unsafe.",
     "fix": "Take the risk-factor history, use the two-level Wells score and arrange same-day assessment (NICE NG158)."
    },
    {
     "dom": "tasks",
     "fail": "Booking a routine DVT clinic slot without asking about breathlessness or chest pain.",
     "why": "She has breathlessness and pleuritic chest pain she won’t volunteer — possible PE needs same-day hospital assessment.",
     "fix": "Ask every patient with suspected DVT: “Any breathlessness, chest pain, coughing blood or fainting?” Escalate if yes."
    },
    {
     "dom": "rto",
     "fail": "Overriding her request without acknowledging her husband or work.",
     "why": "Unaddressed, the caring barrier is exactly why she may not go.",
     "fix": "“Who can be with your husband, and who can take you?” Solve it together."
    },
    {
     "dom": "rto",
     "fail": "“It’s the HRT, you’ll have to stop it.”",
     "why": "Blame before diagnosis damages trust and ignores the future options.",
     "fix": "Pause it pending assessment, explain why, and promise a joint plan if it is a clot."
    },
    {
     "dom": "gs",
     "fail": "Jargon: “You need a CTPA and Doppler, and a DOAC if positive.”",
     "why": "Language not easily understood by the patient.",
     "fix": "“A scan of your lungs and leg, and blood-thinning tablets if it is a clot.”"
    },
    {
     "dom": "gs",
     "fail": "No 999 advice and no check that she attended.",
     "why": "Missing safety-net and follow-up are standard failing points in urgent telephone cases.",
     "fix": "Name the 999 symptoms, use teach-back, and ring later to check she got there."
    }
   ]
  }
 },
 "emergency-contraception": {
  "stem": {
   "name": "Aimee",
   "age": "16-year-old young woman",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication",
    "No current contraception"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "No previous contraception or sexual health consultations recorded.",
   "reason": "Urgent telephone request: “needs the morning-after pill”."
  },
  "knowledge": {
   "guideline": "CoSRH (formerly FSRH) Emergency contraception guideline (2017, amended 2023) · BNF · GMC 0–18 years guidance · Working Together to Safeguard Children (2023) · BASHH and Brook Spotting the Signs proforma (2014) · Mental Capacity Act 2005 · Sexual Offences Act 2003",
   "summary": "Aimee needs effective emergency contraception today: the copper IUD first, or ulipristal if she prefers a tablet. A 25-year-old partner she met online is a safeguarding cue that needs a gentle, honest exploration — without putting her off care.",
   "points": [
    {
     "h": "Most effective first",
     "t": "CoSRH 2017: the copper IUD is the most effective emergency contraception. It can be fitted up to 120 hours after the first unprotected sex in the cycle, or up to 5 days after the earliest likely ovulation. It then gives ongoing contraception."
    },
    {
     "h": "Oral options",
     "t": "Ulipristal acetate 30 mg works up to 120 hours after unprotected sex; levonorgestrel 1.5 mg is licensed up to 72 hours (3 mg if BMI over 26 or weight over 70 kg). At around 72 hours, mid-cycle, ulipristal is the better tablet. Oral EC should be given now if an IUD fitting is being arranged, in case it cannot happen."
    },
    {
     "h": "Practical points",
     "t": "Repeat the dose if she vomits within 3 hours. After ulipristal, wait 5 days before starting hormonal contraception, using condoms or avoiding sex meanwhile. EC does not protect against later sex in the same cycle. Pregnancy test 3 weeks after the unprotected sex (CoSRH 2017)."
    },
    {
     "h": "Consent at 16",
     "t": "At 16 she is presumed to have capacity (Mental Capacity Act 2005) and can consent to her own treatment; Fraser criteria apply to under-16s. She is still a child for safeguarding purposes until 18 (Working Together to Safeguard Children 2023)."
    },
    {
     "h": "Safeguarding",
     "t": "16 is the age of consent, but a large age gap and meeting online are recognised risk indicators for exploitation. Use a structured approach (BASHH and Brook Spotting the Signs, 2014): how they met, pressure, gifts, secrecy, alcohol or drugs, isolation. Sex with a 16- or 17-year-old is an offence if the adult is in a position of trust (Sexual Offences Act 2003)."
    },
    {
     "h": "Confidentiality",
     "t": "GMC 0–18 years: keep her information confidential unless there is a risk of serious harm, in which case share it with the appropriate agency, ideally with her knowledge. Discuss concerns with the practice safeguarding lead."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi, it’s Dr Lee from the surgery. Can I check who I’m speaking to and your date of birth? … Thanks, Aimee. Are you somewhere you can talk without being overheard?",
    "dom": "rto",
    "why": "Confirms identity and privacy before a sensitive call"
   },
   {
    "who": "pt",
    "text": "Yeah, it’s fine. I need the morning-after pill. We didn’t use anything. Can I just get it today? I’d rather not have loads of questions, it’s embarrassing."
   },
   {
    "who": "dr",
    "text": "You’ve done exactly the right thing ringing quickly, and yes, we can sort this today. I’ll keep the questions to the ones that help me give you the option that works best. Is that okay?",
    "dom": "rto",
    "why": "Meets her need immediately and explains why questions matter"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When did you have sex without protection — as close as you can remember?",
    "dom": "tasks",
    "why": "Establishes timing, which drives the method"
   },
   {
    "who": "pt",
    "text": "Three days ago. At night."
   },
   {
    "who": "dr",
    "text": "And when did your last period start? Has there been any other unprotected sex since then?",
    "dom": "tasks",
    "why": "Cycle timing and earlier exposure"
   },
   {
    "who": "pt",
    "text": "About two weeks before that. No, just the once."
   },
   {
    "who": "dr",
    "text": "Thanks. Are you on any medicines, including anything from a shop, and have you any health problems I should know about?",
    "dom": "tasks",
    "why": "Checks interactions and contraindications"
   },
   {
    "who": "pt",
    "text": "No, nothing."
   },
   {
    "phase": "Method and choices",
    "clock": "4–6 min",
    "who": "dr",
    "text": "That timing matters. You’re around three days on, and mid-cycle. The most effective option is a small copper coil — it can go in up to five days after, and then keeps protecting you for years. The other option is a tablet called ulipristal, which works better than the standard morning-after pill at this point.",
    "dom": "tasks",
    "why": "Offers the copper IUD first and the right oral option"
   },
   {
    "who": "pt",
    "text": "A coil? That sounds a lot. I’d rather just have a tablet."
   },
   {
    "who": "dr",
    "text": "That’s completely your choice. I’ll prescribe ulipristal today. If you change your mind about the coil, it needs to go in within the next two days, and I can help arrange that.",
    "dom": "tasks",
    "why": "Respects her choice and keeps the more effective option open"
   },
   {
    "who": "pt",
    "text": "Okay. Tablet."
   },
   {
    "phase": "Safeguarding",
    "clock": "6–9 min",
    "who": "dr",
    "text": "Can I ask a bit about your partner? I ask everyone your age — it’s not about judging you, it’s about making sure you’re okay. How old is he, and how did you meet?",
    "dom": "rto",
    "why": "Normalises the question before asking it"
   },
   {
    "who": "pt",
    "text": "(Pause.) He’s 25. We met online. He’s really nice though."
   },
   {
    "who": "dr",
    "text": "Thank you for being honest. How are things between you — do you feel you’re the one deciding what happens, including about sex?",
    "dom": "tasks",
    "why": "Explores consent and control without accusation"
   },
   {
    "who": "pt",
    "text": "Yeah… mostly. I don’t know. I know people would say he’s too old."
   },
   {
    "who": "dr",
    "text": "It sounds like there’s a bit you’re unsure about, and that’s okay to say. Has he ever asked you to keep things secret, given you things, or asked you to do things you didn’t want to?",
    "dom": "tasks",
    "why": "Screens specific exploitation indicators"
   },
   {
    "who": "pt",
    "text": "Not really. I don’t want to get him in trouble."
   },
   {
    "who": "dr",
    "text": "I hear that. What we talk about stays between us. The only time I’d need to share anything is if I was worried you might be at risk of serious harm — and if that happened, I’d talk to you first. Would you be willing to come in and see me, or the sexual health clinic, this week so we can talk a bit more?",
    "dom": "rto",
    "why": "Honest about confidentiality limits and keeps her engaged"
   },
   {
    "who": "pt",
    "text": "Maybe. If it’s just you."
   },
   {
    "phase": "Ongoing needs",
    "clock": "9–11 min",
    "who": "dr",
    "text": "That’s fine. When you come in, we can also sort regular contraception, and a check for infections, because no condom was used. Both are quick and confidential.",
    "dom": "tasks",
    "why": "Plans ongoing contraception and STI testing"
   },
   {
    "who": "pt",
    "text": "Okay, that makes sense."
   },
   {
    "who": "dr",
    "text": "A few important things about the tablet. If you’re sick within three hours, ring back — you’ll need another. It doesn’t protect you for the rest of this month, so use condoms. And don’t start any hormonal contraception for five days after taking it, because it can stop the tablet working.",
    "dom": "tasks",
    "why": "Key ulipristal counselling points"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Do a pregnancy test three weeks after the sex, even if you have a bleed. And if you ever feel unsafe or pressured, you can ring me or Childline any time. Can you tell me what you’re going to do?",
    "dom": "gs",
    "why": "Pregnancy test timing, support options, teach-back"
   },
   {
    "who": "pt",
    "text": "Get the tablet today, ring if I’m sick, condoms, pregnancy test in three weeks, come in this week."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll send the prescription now and book you in with me this week. You’ve handled this really sensibly.",
    "dom": "gs",
    "why": "Concrete follow-up and positive close"
   },
   {
    "who": "pt",
    "text": "Thanks. That was less awful than I thought."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Met the request immediately and explained why a few questions were needed.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored the relationship and her own sense that others would worry about it, without pressing.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “he’s really nice though”, “mostly” and “I don’t want to get him in trouble” and explored them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a quick morning-after pill); concern (embarrassment, scrutiny of the relationship); expectation (no questions).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Timing of unprotected sex, cycle, other exposures, medicines; STI testing and pregnancy test planned.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Pregnancy risk by timing and cycle; exploitation versus a consensual relationship; STI risk.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Safeguarding indicators screened with a structured approach; plan to discuss with the safeguarding lead if concerns persist.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Clear statement of what the options are and why ulipristal or copper IUD suit her timing.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Copper IUD offered first; ulipristal prescribed today by her choice; ongoing contraception and STI screen booked.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Capacity at 16 respected; confidentiality and its limits explained honestly; safeguarding lead discussion documented.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Vomiting rule, 5-day wait before hormones, condoms, pregnancy test at 3 weeks, Childline, face-to-face follow-up booked.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Gender, reproductive & sexual health",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Aimee",
    "age": "16 years · female",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "No regular medication",
     "No contraception"
    ],
    "allergy": "NKDA recorded",
    "recent": "⚠ No previous sexual health or contraception consultations on file.",
    "reason": "Telephone call. “I need the morning-after pill, quickly.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Privacy and yes",
     "d": "Confirm she can talk privately, and say yes to helping today before any questions."
    },
    {
     "t": "1–4",
     "h": "Timing and cycle",
     "d": "When was the unprotected sex, LMP, other exposures, medicines. That decides the method."
    },
    {
     "t": "4–6",
     "h": "Choices",
     "d": "Copper IUD first, ulipristal as the tablet at 72 hours mid-cycle. Respect her choice."
    },
    {
     "t": "6–9",
     "h": "Safeguarding, gently",
     "d": "Ask everyone: partner’s age, how they met, control, secrecy, gifts. Explain confidentiality and its limits honestly."
    },
    {
     "t": "9–12",
     "h": "Ongoing needs and close",
     "d": "Contraception, STI screen, vomiting rule, 5-day wait, pregnancy test at 3 weeks, Childline, follow-up booked."
    }
   ],
   "wordPics": {
    "fail": "Either refuses or delays EC until safeguarding is resolved, or prescribes levonorgestrel without considering timing and never asks about the partner; interrogates her so she disengages; promises total secrecy.",
    "pass": "Provides ulipristal promptly and mentions the copper IUD; asks the partner’s age and recognises a safeguarding concern; offers STI testing and contraception; gives a pregnancy test safety-net.",
    "exc": "All of the above, plus: offers the IUD first and keeps it open within the window; explores the relationship using specific indicators without accusation; explains confidentiality limits honestly; secures a face-to-face follow-up; plans a safeguarding lead discussion; accurate counselling (vomiting, 5-day wait, condoms, test at 3 weeks)."
   },
   "avoid": [
    {
     "dont": "\"He’s 25 and you’re 16 — that’s not okay, is it?\"",
     "instead": "\"I ask everyone your age about their partner. How are things between you?\"",
     "why": "Accusation makes her defend him and disengage; curiosity keeps her talking."
    },
    {
     "dont": "\"Don’t worry, everything you tell me is completely confidential.\"",
     "instead": "\"What we talk about stays between us, unless I’m worried you’re at risk of serious harm — and then I’d talk to you first.\"",
     "why": "A promise you cannot keep breaks trust later and misstates the law."
    },
    {
     "dont": "\"I’ll send the standard morning-after pill to the pharmacy.\"",
     "instead": "\"At three days, mid-cycle, the coil is the most effective, and ulipristal is the better tablet.\"",
     "why": "Method choice by timing is a core Tasks point."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Relationship and online contact",
     "t": "A 25-year-old partner met online, and her sense that others would disapprove. These are cues to explore, not proof of harm."
    },
    {
     "h": "Access",
     "t": "Young people often give up if care is hard to reach. Make the prescription and follow-up simple and quick."
    }
   ],
   "legal": [
    {
     "h": "Consent at 16",
     "t": "At 16 she is presumed to have capacity and can consent to treatment (Mental Capacity Act 2005). Fraser criteria are for under-16s."
    },
    {
     "h": "Sexual Offences Act 2003",
     "t": "The age of consent is 16. Sexual activity with a 16- or 17-year-old is an offence if the adult is in a position of trust."
    },
    {
     "h": "Safeguarding duties",
     "t": "She is a child for safeguarding purposes until 18 (Working Together to Safeguard Children 2023). Share information if there is a risk of serious harm."
    }
   ],
   "professional": [
    {
     "h": "GMC 0–18 years",
     "t": "Provide confidential sexual health care to young people, and share information when needed to protect them, ideally with their knowledge."
    },
    {
     "h": "Safeguarding lead",
     "t": "Discuss and document concerns with the practice safeguarding lead; use a structured tool such as Spotting the Signs (BASHH and Brook, 2014)."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Local young people’s sexual health service; Brook; Childline for confidential support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Large age gap, met online, secrecy — exploitation indicators",
     "Pressure, gifts, alcohol or drugs, being isolated from friends or family",
     "Earlier unprotected sex this cycle — possible existing pregnancy"
    ],
    "psychosocial": [
     "Embarrassed; wants it quick",
     "Senses others would worry about the age gap",
     "Worried about getting the partner into trouble"
    ],
    "ice": [
     "Idea: she just needs the morning-after pill",
     "Concern: embarrassment; questions about the relationship",
     "Expectation: fast EC without questions"
    ]
   },
   "diagnosis": "Be clear about the pregnancy risk: “Three days after sex around the middle of your cycle is a time when pregnancy is possible, so the method matters.”",
   "diagnosisLay": "“Emergency contraception works by delaying the egg being released. The coil works even if it already has been. That’s why it’s the most effective, and why timing matters for the tablets.”",
   "management": {
    "reflectIce": "“I know you wanted this quick and without questions. You’ll have it today — and I asked about your partner because I ask everyone, and I want to know you’re okay.”",
    "psychosocial": "Keep her engaged: face-to-face follow-up with the same doctor; honest confidentiality; support options she can use herself.",
    "sharedPlan": [
     "Copper IUD offered (within 120 hours); ulipristal 30 mg prescribed today by her choice",
     "Ongoing contraception after the 5-day wait; condoms meanwhile; STI testing",
     "Safeguarding discussion with the practice lead; follow-up this week"
    ],
    "safetyNet": [
     "Vomits within 3 hours — ring back for another dose",
     "Pregnancy test 3 weeks after the sex; Childline or the surgery if she feels unsafe"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Contraception",
    "s": "Case walkthrough · emergency contraception",
    "href": "../cases/contraception.html"
   },
   {
    "ic": "💠",
    "t": "Contraception protocol",
    "s": "EC choice · quick-starting",
    "href": "management/contraception.html"
   },
   {
    "ic": "📋",
    "t": "Safeguarding",
    "s": "Case walkthrough · young people",
    "href": "../cases/safeguarding.html"
   },
   {
    "ic": "💠",
    "t": "Chlamydia protocol",
    "s": "STI testing · partners",
    "href": "management/chlamydia.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you can deliver time-sensitive care and safeguarding in the same ten minutes. Candidates fail by doing only one of them, or by doing the safeguarding so bluntly that she hangs up.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Sending levonorgestrel without thinking about timing.",
     "why": "At about 72 hours, mid-cycle, levonorgestrel is at the edge of its licence and less effective. CoSRH 2017 puts the copper IUD first.",
     "fix": "Offer the IUD first, ulipristal as the tablet, and explain why."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about the partner.",
     "why": "“Does not identify safeguarding concerns.” The 25-year-old met online is the examinable core.",
     "fix": "Ask everyone her age: partner’s age, how they met, pressure, secrecy, gifts."
    },
    {
     "dom": "tasks",
     "fail": "Delaying EC until the safeguarding picture is clear.",
     "why": "EC is time-critical and she is entitled to it. Safeguarding runs alongside treatment, not before it.",
     "fix": "Prescribe today, then explore and plan follow-up."
    },
    {
     "dom": "rto",
     "fail": "Promising complete confidentiality.",
     "why": "It misstates GMC guidance and breaks trust if you later need to share.",
     "fix": "Explain the limit honestly and promise to talk to her first."
    },
    {
     "dom": "rto",
     "fail": "Using a disapproving tone about the age gap.",
     "why": "She will defend him and disengage; examiners mark this as poor rapport.",
     "fix": "Curiosity, not judgement: “How are things between you?”"
    },
    {
     "dom": "gs",
     "fail": "Ending the call with a prescription and nothing else.",
     "why": "Misses ongoing contraception, STI testing, pregnancy test timing and safeguarding follow-up.",
     "fix": "Book face-to-face follow-up, give the counselling points and support options, and document the safeguarding discussion."
    }
   ]
  }
 },
 "health-anxiety-gad": {
  "stem": {
   "name": "Nadia Karim",
   "age": "38-year-old woman",
   "pmh": [
    "No significant past medical history",
    "Frequent attender: several recent appointments with headaches, palpitations, tingling and fatigue"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Recent investigations all normal: blood tests and ECG in the practice; a CT head arranged privately, reported as normal. No mental health diagnosis coded.",
   "reason": "Booked a video appointment about headaches, palpitations, tingling and tiredness. Asking for another scan or a neurology referral."
  },
  "knowledge": {
   "guideline": "NICE CG113 (2011) · NICE CG123 (2011; withdrawn May 2024) · NHS Talking Therapies · GMC Decision making and consent (2020)",
   "summary": "Recurrent bodily symptoms, repeated normal tests and reassurance that never lasts point to health anxiety, often alongside generalised anxiety disorder. Treat the anxiety; do not order a test only to buy certainty.",
   "points": [
    {
     "h": "Recognise the pattern",
     "t": "Health anxiety: persistent fear of a serious illness, benign sensations read as danger, body checking, internet searching and reassurance-seeking that relieves the fear only briefly. Months of free-floating worry with restlessness, muscle tension, poor sleep, irritability and tiredness fit generalised anxiety disorder (NICE CG113)."
    },
    {
     "h": "The symptoms are real",
     "t": "Autonomic arousal and over-breathing cause palpitations, tingling in the hands and face, tension headache, dizziness and exhaustion. Say so clearly. Dismissing the symptoms breaks trust and drives more attendance."
    },
    {
     "h": "Why more tests do not help",
     "t": "Each normal result calms the fear for a short time, then doubt returns and attaches to a new symptom. Testing for reassurance keeps the cycle going and adds the risk of incidental findings. Still examine and assess any genuinely new or red-flag feature on its own merits."
    },
    {
     "h": "Identify and screen",
     "t": "NICE CG123 (2011, withdrawn 2024): ask about anxiety directly (the GAD-2 questions are a quick start, then GAD-7) and look for depression, panic attacks and risk to self. Ask what started it: a bereavement or a health scare often precedes health anxiety, and the grief may need attention in its own right."
    },
    {
     "h": "Stepped care",
     "t": "NICE CG113: psychoeducation and active monitoring first; then low-intensity help (guided self-help, psychoeducational groups); then CBT or applied relaxation, or an SSRI if she chooses medication. NHS Talking Therapies accepts self-referral and offers CBT adapted for health anxiety. Consider sertraline first if a drug is chosen (dose per BNF); explain early side effects and review soon after starting."
    },
    {
     "h": "Consistent care, bounded reviews",
     "t": "One named clinician, planned reviews rather than symptom-led visits, and an agreed short list of new symptoms that would need assessment. A request for a test the clinician judges not clinically indicated need not be granted, but explain why and offer a second opinion if she wants one (GMC Decision making and consent, 2020)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Karim, I’m Dr Lee. Thank you for joining. I can see you’re worried, so let’s start with you. Tell me what’s been happening and what’s on your mind today.",
    "dom": "rto",
    "why": "Open question and acknowledges her distress before any agenda"
   },
   {
    "who": "pt",
    "text": "I know I’ve been in a lot. But this time I’m really worried — the headaches, my heart racing, the tingling, I’m exhausted. I’ve read it could be a brain tumour or MS. The scan was weeks ago, things change, don’t they? I need another scan, or a neurologist, just to be sure."
   },
   {
    "who": "dr",
    "text": "Thank you. I want to take every one of those symptoms seriously. Can I spend a few minutes understanding them properly, then we’ll talk about what’s causing them and what would genuinely help, including your question about a scan? Is that alright?",
    "dom": "gs",
    "why": "Sets an agenda that includes her request without promising it"
   },
   {
    "who": "pt",
    "text": "Yes. Okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about the headaches. What are they like, and has anything about them changed recently?",
    "dom": "tasks",
    "why": "Characterises the headache and screens for a genuine change"
   },
   {
    "who": "pt",
    "text": "Like a tight band round my head. Most days. Worse when I’m stressed. Nothing sudden, it just builds."
   },
   {
    "who": "dr",
    "text": "Any weakness down one side, loss of vision, trouble speaking, a sudden severe headache, or being sick with them?",
    "dom": "tasks",
    "why": "Rules out neurological red flags before reframing"
   },
   {
    "who": "pt",
    "text": "No. None of that."
   },
   {
    "who": "dr",
    "text": "And the racing heart and the tingling — when do they come on?",
    "dom": "tasks",
    "why": "Links the somatic symptoms to their trigger"
   },
   {
    "who": "pt",
    "text": "When I’m lying there worrying, or after I’ve been reading about symptoms. My hands and round my mouth go pins and needles, and I feel like I can’t get a proper breath."
   },
   {
    "who": "dr",
    "text": "That’s very helpful. Can I ask about the rest of life? Beyond your health, do you find yourself worrying about lots of things, and how are sleep and your mood?",
    "dom": "tasks",
    "why": "Screens for generalised anxiety, sleep and mood"
   },
   {
    "who": "pt",
    "text": "Everything, really. I can’t switch off. I sleep badly, my shoulders are like concrete, I snap at everyone. It’s been months."
   },
   {
    "who": "dr",
    "text": "When things feel this heavy, some people feel low or hopeless, or even have thoughts of harming themselves. Has anything like that been happening for you?",
    "dom": "tasks",
    "why": "Direct, normalised risk and depression screen"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. I’m just frightened all the time."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Can I ask when this really started to ramp up? Was there anything around that time?",
    "dom": "rto",
    "why": "Opens the door to the trigger without leading"
   },
   {
    "who": "pt",
    "text": "(Pause.) My friend died last year. Out of nowhere. A bleed in her brain. She was young, she was healthy. One day she was fine."
   },
   {
    "who": "dr",
    "text": "I’m so sorry. That must have been a terrible shock. When you feel a headache or your heart racing now, what goes through your mind?",
    "dom": "rto",
    "why": "Responds to the loss, then links it to her fear"
   },
   {
    "who": "pt",
    "text": "That it’s happening to me. That I’ll just go, like she did, and my children won’t have a mum. So I check. I Google. I come here. And my husband says I’m obsessed."
   },
   {
    "who": "dr",
    "text": "That makes complete sense of everything you’ve told me. You’re not being silly. Losing her took away your sense that your body is safe, and all the checking is your mind trying to get it back. It sounds exhausting, for you and at home.",
    "dom": "rto",
    "why": "Validates, names the impact and the meaning without judgement"
   },
   {
    "who": "pt",
    "text": "(Tearful.) It is. I feel ashamed. I just want to feel normal."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me explain what I think is going on. Your symptoms are real. When the mind is on constant alert, the body releases adrenaline and we breathe faster without noticing. That causes a racing heart, tingling in the hands and round the mouth, tight-band headaches and tiredness. Your tests show your brain and heart are healthy. What’s causing this is anxiety, and anxiety is very treatable.",
    "dom": "tasks",
    "why": "Validates the symptoms and explains the mechanism with confidence"
   },
   {
    "who": "pt",
    "text": "But how can you be sure it isn’t something the scan missed?"
   },
   {
    "who": "dr",
    "text": "That’s a fair question. Can I point something out, gently? After each test you felt better for a little while, then the doubt came back and fixed on something new. That’s how health anxiety works. Another scan would most likely do the same — a few days of relief, then more worry. So I don’t think another scan is the right thing for you, and I’d rather offer something that actually lasts.",
    "dom": "tasks",
    "why": "Names the reassurance cycle and declines the scan with reasons"
   },
   {
    "who": "pt",
    "text": "(Quietly.) That is what happens. Every time."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "What helps most is a talking therapy called CBT, designed for exactly this. It helps your mind stop sounding the alarm over normal body sensations and cuts down the checking and Googling that feed it. You can refer yourself to NHS Talking Therapies, or I can give you the details today. Some people also find a medicine for anxiety helpful. Would you like to hear about that too?",
    "dom": "tasks",
    "why": "Offers evidence-based treatment and a choice"
   },
   {
    "who": "pt",
    "text": "I’d like to try the therapy first. I’m not sure about tablets."
   },
   {
    "who": "dr",
    "text": "That’s a very reasonable choice. We can talk about a tablet at the review if you want to. And the grief for your friend matters too — would you be open to talking about her with the therapist, or with bereavement support?",
    "dom": "rto",
    "why": "Respects her choice and addresses the bereavement in the plan"
   },
   {
    "who": "pt",
    "text": "I’ve never really talked about her. Maybe I should."
   },
   {
    "who": "dr",
    "text": "One experiment for the next two weeks: when the urge to check or Google comes, write the worry down and wait before acting on it. And I’d like you to see me, the same doctor, at planned reviews rather than whenever a symptom scares you. Would that work?",
    "dom": "gs",
    "why": "One concrete, owned step and consistent follow-up"
   },
   {
    "who": "pt",
    "text": "I can try. Seeing you each time would help."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "I’m not saying never come back. If you had something genuinely new — weakness down one side, loss of vision, trouble speaking, or a sudden, severe ‘worst ever’ headache — that’s 999. Those are different from what you have now. And if your mood dipped or you felt unsafe, contact us the same day.",
    "dom": "gs",
    "why": "Bounded, specific safety-net so she is not abandoned"
   },
   {
    "who": "pt",
    "text": "Okay. That’s clearer than I expected."
   },
   {
    "who": "dr",
    "text": "So when your husband asks tonight what the doctor said, what will you tell him?",
    "dom": "rto",
    "why": "Teach-back checks the new explanation has landed"
   },
   {
    "who": "pt",
    "text": "That it’s real, but it’s anxiety, not a tumour. That I’m doing the therapy, trying not to Google, and seeing you in three weeks."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. I’ll book you in with me in three weeks. You’ve been carrying a lot since your friend died, and you deserve to feel safe in your own body again.",
    "dom": "rto",
    "why": "Closes warmly with a booked, named follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question first; let her list her symptoms and her request for a scan without interrupting or arguing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Generalised worry, sleep, irritability, the strain on her marriage, her children, and the shame of attending so often.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “things change, don’t they?” and the months of worry; asked when it started and found the friend’s sudden death.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (tumour or MS); concern (dying suddenly like her friend and leaving her children); expectation (another scan or a neurologist).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Reviewed the normal bloods, ECG and CT; GAD-7 and a mood screen; no further scan, with the reason explained.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Health anxiety with generalised anxiety disorder; tension-type headache; over-breathing as the cause of tingling; screened for depression and panic.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about focal neurology, sudden severe headache, vomiting and visual loss; risk to self asked directly.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named health anxiety and generalised anxiety clearly, linked to the bereavement, and explained how the symptoms are produced.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "CBT via NHS Talking Therapies, SSRI offered as an option (sertraline first per NICE CG113), bereavement support, and a practical step to cut checking.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Addressed sleep, the grief, the reassurance-seeking and the internet searching that keep the anxiety going.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named clinician, planned review in weeks, specific new red-flag symptoms (999), and same-day contact if mood worsens.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Nadia Karim",
    "age": "38 years · female",
    "pmh": [
     "Nil significant",
     "Frequent attender (headaches, palpitations, tingling, fatigue)"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Normal bloods and ECG in the practice. Private CT head, reported normal. No anxiety or depression coded.",
    "reason": "Video appointment: headaches, racing heart, tingling, exhaustion. “I need another scan, just to be sure.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "She arrives with a list and a request. Let her finish. Promise to take the symptoms seriously and to discuss the scan, without agreeing to it."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Headache character and neurological red flags; when the palpitations and tingling happen; generalised worry, sleep, tension, mood and risk."
    },
    {
     "t": "4–6",
     "h": "Trigger and ICE",
     "d": "“When did this really ramp up?” The friend’s sudden death and the fear for her children surface here. Validate before explaining."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Real symptoms, anxiety as the cause, the reassurance cycle named kindly. No scan, with reasons. CBT, optional SSRI, bereavement support, one step to reduce checking."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Bounded red flags (999), same-day contact if mood drops, named follow-up in three weeks. Teach-back: “What will you tell your husband?”"
    }
   ],
   "wordPics": {
    "fail": "Orders another scan or refers to neurology for reassurance; or says “there’s nothing wrong with you” and ends the call; never asks when it started, so misses the friend’s death; no mood or risk screen; no treatment offered for the anxiety.",
    "pass": "Screens for neurological red flags; recognises health anxiety and generalised anxiety; explains that the symptoms are real and caused by anxiety; declines further tests with reasons; offers CBT and a follow-up with a basic safety-net.",
    "exc": "All of the above, plus: finds the bereavement and links it to her fear of leaving her children; names the reassurance cycle in her own words; offers stepped treatment with genuine choice; agrees one owned step to reduce checking; sets a named clinician and planned reviews; checks understanding with teach-back."
   },
   "avoid": [
    {
     "dont": "“All your tests are normal, so there’s nothing wrong with you.”",
     "instead": "“Your symptoms are real. The tests show your brain and heart are healthy — what’s causing this is anxiety, and that’s treatable.”",
     "why": "Dismissing the symptoms loses her trust and sends her to the next appointment."
    },
    {
     "dont": "“Fine, I’ll refer you to neurology just to put your mind at rest.”",
     "instead": "“Each test has helped for a few days, then the worry came back. I’d rather offer something that lasts.”",
     "why": "Testing for reassurance feeds the cycle; examiners mark it as collusion, not kindness."
    },
    {
     "dont": "“You just need to stop Googling and try to relax.”",
     "instead": "“Checking and searching keep the alarm going. CBT helps you step out of that, and I can help you get it.”",
     "why": "An instruction without a mechanism or a treatment offer earns no Tasks marks."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family and relationships",
     "t": "Months of worry and checking are straining her marriage, and the fear centres on her children. Treatment framed as getting her family life back tends to engage better than a diagnosis alone."
    },
    {
     "h": "Bereavement",
     "t": "A friend’s sudden death shattered her sense of safety. Unprocessed grief can drive health anxiety; offer bereavement support alongside CBT."
    }
   ],
   "legal": [
    {
     "h": "Requests for tests",
     "t": "A patient cannot insist on an investigation the doctor judges not clinically indicated. Explain the reasons, record the discussion and offer a second opinion if she asks (GMC Decision making and consent, 2020)."
    }
   ],
   "professional": [
    {
     "h": "Continuity and over-investigation",
     "t": "Fragmented care across many clinicians and private providers leads to repeated tests. A named clinician with planned reviews protects her from harm and supports good clinical care (GMC Good Medical Practice 2024)."
    },
    {
     "h": "Honest, respectful language",
     "t": "Avoid “nothing wrong” and “in your head”. Coding health anxiety or generalised anxiety accurately helps the next clinician avoid repeating the cycle; explain to her what is recorded."
    }
   ],
   "community": [
    {
     "h": "Support services",
     "t": "NHS Talking Therapies (self-referral), Anxiety UK and Mind for self-help resources, and Cruse Bereavement Support for grief."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Focal neurology, visual loss, speech disturbance or a sudden severe headache — genuinely new features that need assessment",
     "Headache with vomiting or a change in character (worse lying flat, waking her) — assess on its own merits",
     "Low mood, hopelessness or thoughts of self-harm — ask directly"
    ],
    "psychosocial": [
     "Months of generalised worry, poor sleep, muscle tension and irritability",
     "Impact on her marriage, her children and her sense of control; shame about attending",
     "Checking, internet searching and reassurance-seeking as the behaviours that maintain the fear"
    ],
    "ice": [
     "Idea: a brain tumour or MS that the last scan might have missed",
     "Concern: dying suddenly like her friend and leaving her children without a mother",
     "Expectation: another scan or a neurologist to be completely sure"
    ]
   },
   "diagnosis": "Give a positive diagnosis rather than a list of negatives: “Your symptoms are real, and they fit anxiety — health anxiety alongside a more general anxiety that’s been building for months. The tests tell us your brain and heart are healthy.”",
   "diagnosisLay": "“Think of a smoke alarm that’s become too sensitive — it goes off for burnt toast as loudly as for a fire. Your body’s alarm has been turned up since your friend died. The alarm is real and noisy, but there’s no fire. Treatment turns the sensitivity back down.”",
   "management": {
    "reflectIce": "“You’ve been frightened that what happened to your friend will happen to you and your children will be left without you. That fear makes complete sense, and it’s exactly what we’re going to treat.”",
    "psychosocial": "Build the grief and the strain at home into the plan: bereavement support, CBT that targets checking and reassurance-seeking, and one practical step she chooses (delay before checking or searching).",
    "sharedPlan": [
     "No further scan or referral for reassurance; reasons explained and documented",
     "CBT for health anxiety via NHS Talking Therapies; SSRI offered as an option (NICE CG113)",
     "Bereavement support; named clinician with planned reviews"
    ],
    "safetyNet": [
     "999 for new focal weakness, visual loss, speech disturbance or a sudden severe headache",
     "Same-day contact if mood falls or she feels unsafe; review with the same GP in three weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Anxiety",
    "s": "Case walkthrough · NICE CG113",
    "href": "../cases/anxiety.html"
   },
   {
    "ic": "💠",
    "t": "Anxiety protocol",
    "s": "Stepped care · SSRI choice",
    "href": "management/anxiety.html"
   },
   {
    "ic": "🗺️",
    "t": "Headache pathway",
    "s": "Visual algorithm · red flags",
    "href": "algorithms/headache.html"
   },
   {
    "ic": "🗺️",
    "t": "Palpitations pathway",
    "s": "Visual algorithm · when to investigate",
    "href": "algorithms/palpitations.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed at either extreme: ordering the scan to end the conversation, or dismissing a frightened woman with “your tests are normal”. The marks sit in the middle — a confident diagnosis, the trigger found, and a real treatment offered.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Agreeing to another scan or a neurology referral “just to be sure”.",
     "why": "Testing for reassurance maintains health anxiety and adds harm from incidental findings. Examiners read it as avoiding the real problem: “management plan not appropriate for the working diagnosis”.",
     "fix": "Decline with reasons and offer something better: “Each test has helped for a few days. I’d rather give you something that lasts.”"
    },
    {
     "dom": "rto",
     "fail": "“Your tests are all normal, so there’s nothing to worry about.”",
     "why": "Denying real symptoms ruptures trust — “does not show understanding of the patient’s perspective”. She will simply book again.",
     "fix": "Validate first, then explain the mechanism: adrenaline, over-breathing, muscle tension. A real cause for real symptoms."
    },
    {
     "dom": "tasks",
     "fail": "Never asking when it started, so the friend’s death stays hidden.",
     "why": "The trigger is the key to the diagnosis and to engagement. Missing it is “does not identify the patient’s underlying agenda”.",
     "fix": "“When did this really ramp up — was anything happening in your life then?” Then link the loss to the fear."
    },
    {
     "dom": "tasks",
     "fail": "Labelling it anxiety without a mood or risk screen.",
     "why": "Depression and risk commonly coexist with months of anxiety. Omitting them is a safety gap.",
     "fix": "One normalised, direct question about low mood and thoughts of self-harm, and a GAD-7 to measure progress."
    },
    {
     "dom": "gs",
     "fail": "Closing with “come back if you’re worried” — or its opposite, “you don’t need to keep coming in”.",
     "why": "Open-ended reassurance feeds symptom-led visits; a blanket brush-off abandons her. Both are unsafe safety-netting.",
     "fix": "Name the few new symptoms that need assessment, then book planned reviews with the same clinician."
    },
    {
     "dom": "gs",
     "fail": "A lecture on CBT, SSRIs and sleep hygiene in the final minute, with no choice offered.",
     "why": "“Did not involve the patient in the management plan.” A list without choice rarely leads to action.",
     "fix": "Offer the options, let her choose, and agree one small step she owns — delay before checking or searching."
    }
   ]
  }
 },
 "hypercalcaemia-workup": {
  "stem": {
   "name": "Carol Lindqvist",
   "age": "58-year-old woman",
   "pmh": [
    "Hypertension"
   ],
   "meds": [
    "Thiazide diuretic for blood pressure"
   ],
   "allergy": "No known drug allergies",
   "recent": "Bloods for tiredness and aches: adjusted calcium 2.78 mmol/L (upper limit about 2.60), confirmed on repeat. PTH not yet measured.",
   "reason": "Video consultation to discuss her raised calcium."
  },
  "knowledge": {
   "guideline": "NICE NG132 (primary hyperparathyroidism, 2019) · Society for Endocrinology acute hypercalcaemia guidance (2016) · NICE NG12 (updated April 2026) · BNF",
   "summary": "A mild, confirmed raised calcium in a well woman is most often primary hyperparathyroidism. PTH is the next test; find self-bought supplements and review the thiazide.",
   "points": [
    {
     "h": "PTH is the pivotal test",
     "t": "NICE NG132: when a raised albumin-adjusted calcium is confirmed on repeat (hers is 2.78 mmol/L twice), measure PTH with a same-time adjusted calcium. Do not rule out primary hyperparathyroidism because the PTH sits within the reference range."
    },
    {
     "h": "Reading the PTH",
     "t": "A raised or inappropriately normal PTH with high calcium = primary hyperparathyroidism. A suppressed PTH means a PTH-independent cause — malignancy (including myeloma), vitamin D excess, granulomatous disease — and needs further work-up."
    },
    {
     "h": "Drugs and supplements",
     "t": "Thiazide diuretics can raise calcium, and so can excess vitamin D and calcium supplements (BNF). Ask specifically about self-bought products. Stop the supplements, review the thiazide, and recheck."
    },
    {
     "h": "Severity",
     "t": "Society for Endocrinology (2016): under 3.0 mmol/L is often asymptomatic and doesn’t usually need urgent correction; 3.0–3.5 usually needs prompt treatment; over 3.5 needs urgent correction. Symptomatic hypercalcaemia (vomiting, confusion, dehydration) needs same-day assessment whatever the level."
    },
    {
     "h": "When to refer",
     "t": "NICE NG132: refer confirmed primary hyperparathyroidism to a surgeon with expertise in parathyroid surgery if there are symptoms (such as thirst, frequent urination or constipation), end-organ disease (renal stones, fragility fractures, osteoporosis), or adjusted calcium of 2.85 mmol/L or above; consider referral for others. Her thirst and constipation may meet this."
    },
    {
     "h": "Myeloma",
     "t": "NICE NG12 (updated April 2026) includes very urgent myeloma testing for people aged 60 and over with hypercalcaemia and a presentation consistent with myeloma. At 58 she falls below that age, so use clinical judgement; a suppressed PTH is the main trigger for a myeloma screen here."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Lindqvist, I’m Dr Lee. Thanks for joining. I’ve seen your calcium result. Before I explain it, tell me how you’ve been and what’s on your mind.",
    "dom": "rto",
    "why": "Open question; patient’s agenda first"
   },
   {
    "who": "pt",
    "text": "I’m really worried. My friend says high calcium means cancer — that it’s often the first sign. I’ve been sick with worry. I feel mostly okay, a bit tired and achy, but I can’t stop thinking the worst. Is she right? Have I got cancer?"
   },
   {
    "who": "dr",
    "text": "I can see how frightened you are, and I’m glad you came rather than sitting with it. I’ll answer that question directly. Can I ask a few things first, so my answer is based on you and not a general rule? Then we’ll agree a plan.",
    "dom": "gs",
    "why": "Commits to answering the question and sets the structure"
   },
   {
    "who": "pt",
    "text": "Yes. Okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "You mentioned tiredness and aches. Have you had any thirst, passing more urine, tummy pain, constipation or feeling muddled?",
    "dom": "tasks",
    "why": "Screens symptoms of hypercalcaemia"
   },
   {
    "who": "pt",
    "text": "A bit thirsty, and constipated now and then. Nothing major."
   },
   {
    "who": "dr",
    "text": "Any kidney-stone-type pain in your back or side, bone pain that wakes you, broken bones, or weight loss?",
    "dom": "tasks",
    "why": "End-organ effects and malignancy red flags"
   },
   {
    "who": "pt",
    "text": "No, none of that."
   },
   {
    "who": "dr",
    "text": "That’s helpful. Now, I know you take a water tablet for your blood pressure. Do you take anything else — including supplements or vitamins you buy yourself?",
    "dom": "tasks",
    "why": "Full medication history including self-bought products"
   },
   {
    "who": "pt",
    "text": "Oh — I take vitamin D and calcium. High-dose ones I bought myself. I didn’t think they counted."
   },
   {
    "who": "dr",
    "text": "They really do count, and I’m glad you said. Both those supplements and the water tablet can push calcium up. That doesn’t mean you’ve done anything wrong — it’s a very useful clue.",
    "dom": "rto",
    "why": "Non-judgemental response that reframes the disclosure as helpful"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said your friend’s words have really stuck. Is there something that makes the word cancer especially frightening for you?",
    "dom": "rto",
    "why": "Explores why the fear is so strong"
   },
   {
    "who": "pt",
    "text": "My mum died of cancer. So when she said it, I just thought — that’s it, it’s my turn."
   },
   {
    "who": "dr",
    "text": "I’m sorry about your mum. No wonder this hit so hard. What were you hoping to get from today?",
    "dom": "rto",
    "why": "Empathy, then expectations"
   },
   {
    "who": "pt",
    "text": "A yes or no. Have I got cancer or not."
   },
   {
    "phase": "Explanation",
    "clock": "6–9 min",
    "who": "dr",
    "text": "I’ll be honest and calm with you. High calcium has several causes, and cancer is one — but your friend’s rule isn’t right. In someone who is well, with a mildly raised level and no cancer history, the commonest cause by far is an overactive parathyroid gland: tiny glands in the neck. It’s benign and very treatable.",
    "dom": "tasks",
    "why": "Honest, proportionate answer to the cancer question"
   },
   {
    "who": "pt",
    "text": "So it’s not cancer?"
   },
   {
    "who": "dr",
    "text": "I won’t give you a verdict without the facts, any more than your friend should have. What I can say is the odds are strongly in your favour, and one blood test — the parathyroid hormone, PTH — will point us the right way. If it’s high, or normal when it should be low, that’s the gland. If it’s low, we look further.",
    "dom": "tasks",
    "why": "Avoids false reassurance; explains PTH logic"
   },
   {
    "who": "pt",
    "text": "That makes me feel a lot better, actually."
   },
   {
    "who": "dr",
    "text": "Your level is mildly raised — not the kind of level that needs emergency treatment. That’s why we can work this out properly as an outpatient.",
    "dom": "tasks",
    "why": "Places severity in context"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "Here’s the plan I’d suggest. Stop the vitamin D and calcium supplements from today. I’ll arrange blood tests for PTH, kidney function, vitamin D, phosphate and a bone test called ALP, with another calcium — in the next day or two, because of the thirst, so I can check your kidneys are happy. Keep drinking plenty of water meanwhile. What do you think?",
    "dom": "tasks",
    "why": "Stops contributors and orders a prompt PTH-led work-up, with kidney function because of the thirst"
   },
   {
    "who": "pt",
    "text": "Fine. What about the water tablet?"
   },
   {
    "who": "dr",
    "text": "Good question. It can raise calcium too, so I’d like to review it. I don’t want your blood pressure to go up, so let’s look at a different tablet together once the bloods are back, and recheck your blood pressure then.",
    "dom": "gs",
    "why": "Reviews the thiazide safely rather than stopping without a plan"
   },
   {
    "who": "pt",
    "text": "And if it is the gland?"
   },
   {
    "who": "dr",
    "text": "Then I’d refer you to a specialist to talk about an operation, which usually cures it. The thirst and constipation you mentioned are part of the reason to refer. They’ll probably check your bones and kidneys too.",
    "dom": "tasks",
    "why": "Knows the NG132 referral criteria"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If before the results you become very thirsty and pass lots of urine, start vomiting, feel confused or get severe tummy pain, contact us the same day or go to A&E if we’re closed. Could you tell me what we’ve agreed?",
    "dom": "gs",
    "why": "Specific safety-net for severe hypercalcaemia and teach-back"
   },
   {
    "who": "pt",
    "text": "Stop the supplements, bloods including PTH, review the water tablet, and ring if I’m very thirsty, sick or muddled."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll see you when the results are in — about a week. You came in braced for the worst; the most likely answer is common, benign and fixable. Anything else?",
    "dom": "rto",
    "why": "Summarises and closes on a balanced message"
   },
   {
    "who": "pt",
    "text": "No. Thank you — I think I’ll sleep tonight."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her voice the friend’s claim and the fear before explaining.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Her mother’s death from cancer; poor sleep with worry; supplements bought without advice.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I can’t stop thinking the worst” and explored the reason (her mother).",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (high calcium means cancer); concern (her mother’s death, “it’s my turn”); expectation (a yes or no on cancer).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "PTH with a same-time adjusted calcium, U&E, vitamin D, phosphate, ALP; myeloma screen if PTH suppressed.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Primary hyperparathyroidism versus drug or supplement effect versus malignancy; checked the logic of PTH.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for severe hypercalcaemia (vomiting, confusion), stones, bone pain, fractures and weight loss.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Mild, confirmed hypercalcaemia in a well woman, most likely primary hyperparathyroidism with supplements and thiazide contributing.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Stop supplements; PTH-led bloods; review the thiazide without losing BP control; refer per NICE NG132 if confirmed.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Planned an alternative antihypertensive; considered bone and kidney assessment if hyperparathyroidism is confirmed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day advice for severe symptoms; results appointment in about a week; recheck calcium off supplements.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Investigations & results",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Carol Lindqvist",
    "age": "58 years · female",
    "pmh": [
     "Hypertension",
     "No history of cancer"
    ],
    "meds": [
     "Thiazide diuretic (repeat)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Adjusted calcium 2.78 mmol/L, repeat also raised. No PTH, vitamin D, phosphate or ALP on file. Over-the-counter supplements not recorded.",
    "reason": "Booked to discuss results. “My friend says high calcium means cancer.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "She opens with “Have I got cancer?”. Promise a direct answer, then gather first."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Thirst, urine, constipation, confusion, stones, bone pain, weight loss. Ask about EVERY supplement — she won’t volunteer the vitamin D and calcium."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Why is cancer so frightening? Her mother. What does she want? A yes or no."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Cancer is one cause, not the likeliest here. PTH is the key test. Stop supplements, review the thiazide."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Vomiting, confusion, marked thirst = same day. Results in a week. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Either says “it’s definitely not cancer” or agrees cancer must be ruled out without explaining the likelier cause; never asks about supplements; doesn’t order PTH; no safety-net.",
    "pass": "Explains that hyperparathyroidism is the commonest cause; orders PTH and related bloods; finds the supplements and stops them; mentions the thiazide; basic safety-net.",
    "exc": "All of the above, plus: links her fear to her mother; explains the PTH logic plainly; reviews the thiazide with an alternative for BP; knows NG132 referral criteria; balanced, honest close; teach-back."
   },
   "avoid": [
    {
     "dont": "“Don’t worry, it’s definitely not cancer.”",
     "instead": "“Cancer is one cause, but in someone like you it’s not the likeliest — one blood test will point us the right way.”",
     "why": "A promise you can’t keep is false reassurance."
    },
    {
     "dont": "“Are you on any medication?”",
     "instead": "“Do you take anything else — including vitamins or supplements you buy yourself?”",
     "why": "Self-bought products aren’t “medicines” to many patients, and here they may explain the result."
    },
    {
     "dont": "“Stop the water tablet.”",
     "instead": "“It can raise calcium, so let’s swap it safely and recheck your blood pressure.”",
     "why": "Stopping an antihypertensive with no plan creates a new problem."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Health anxiety after bereavement",
     "t": "Her mother’s death from cancer makes a friend’s offhand claim feel like a verdict. Name it, and give accurate information at a pace she can take in."
    },
    {
     "h": "Self-directed supplements",
     "t": "Self-bought supplements are common and often not seen as medicines. Ask routinely and without judgement."
    }
   ],
   "legal": [
    {
     "h": "Documentation",
     "t": "Record the self-bought supplements on the medication list; they matter for future interpretation of results."
    }
   ],
   "professional": [
    {
     "h": "Honesty without false reassurance",
     "t": "GMC Good Medical Practice (2024) asks for honest, clear information. Avoid both “definitely not cancer” and unexplained alarm; explain what each result would mean."
    },
    {
     "h": "Test-result follow-up",
     "t": "Make sure the PTH and repeat calcium are tracked and she has a booked appointment for results."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Patient information from the Society for Endocrinology (You and Your Hormones); NHS Talking Therapies if health anxiety persists."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Vomiting, confusion, marked thirst and polyuria, dehydration — possible severe hypercalcaemia, same-day assessment",
     "Weight loss, bone pain, night pain or fractures — consider malignancy or myeloma",
     "Renal colic or known stones — end-organ effect of hyperparathyroidism"
    ],
    "psychosocial": [
     "Her mother died of cancer — fear that “it’s my turn”",
     "Poor sleep and constant worry since her friend’s comment",
     "Takes self-bought high-dose vitamin D and calcium supplements"
    ],
    "ice": [
     "Idea: “High calcium means cancer — my friend said so”",
     "Concern: dying of cancer like her mother",
     "Expectation: a definite yes or no today"
    ]
   },
   "diagnosis": "Mild, confirmed hypercalcaemia (adjusted calcium 2.78 mmol/L) in a well woman: most likely primary hyperparathyroidism, with high-dose vitamin D and calcium supplements and a thiazide as contributors. Malignancy is less likely but not excluded until PTH is known.",
   "diagnosisLay": "“Calcium is controlled by four tiny glands in your neck, like a thermostat. The commonest reason for it running high is that one gland’s thermostat is set a bit too high — benign and fixable. Your supplements and water tablet may be nudging it up too. One blood test tells us whether the thermostat is the cause.”",
   "management": {
    "reflectIce": "“After losing your mum to cancer, of course your friend’s words hit hard. The honest picture is much more hopeful — and we’ll prove it with the right test, not guess.”",
    "psychosocial": "Pace the explanation to her fear; thank her for the supplement disclosure; give a firm date for results so she isn’t left waiting in the dark.",
    "sharedPlan": [
     "Stop vitamin D and calcium supplements now",
     "PTH with same-time adjusted calcium, U&E, vitamin D, phosphate, ALP; myeloma screen if PTH suppressed",
     "Review the thiazide with an alternative antihypertensive; refer per NICE NG132 if primary hyperparathyroidism confirmed"
    ],
    "safetyNet": [
     "Vomiting, confusion, marked thirst or severe abdominal pain — same day, or A&E out of hours",
     "Results appointment in about a week; recheck calcium off supplements"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Hypercalcaemia",
    "s": "Case walkthrough · NICE NG132",
    "href": "../cases/hypercalcaemia.html"
   },
   {
    "ic": "🗺️",
    "t": "Hypercalcaemia pathway",
    "s": "Visual algorithm · PTH logic",
    "href": "algorithms/hypercalcaemia.html"
   },
   {
    "ic": "💠",
    "t": "Malignant hypercalcaemia",
    "s": "Protocol · when PTH is suppressed",
    "href": "management/malignant-hypercalcaemia.html"
   },
   {
    "ic": "💠",
    "t": "Hypertension protocol",
    "s": "Alternatives to a thiazide",
    "href": "management/hypertension.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is about holding honesty and reassurance together. It is failed by false promises, by missing the self-bought supplements, and by forgetting that PTH is the test that answers her question.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Ordering “a myeloma screen and a CT to rule out cancer” without a PTH.",
     "why": "PTH is the pivotal test (NICE NG132). Skipping it frightens the patient and misses the commonest cause.",
     "fix": "PTH with a same-time adjusted calcium first, plus U&E, vitamin D, phosphate and ALP. Screen for myeloma if PTH is suppressed."
    },
    {
     "dom": "tasks",
     "fail": "Accepting “no other medicines” and never finding the vitamin D and calcium.",
     "why": "Self-bought supplements are a reversible contributor and she won’t call them medicines.",
     "fix": "“Anything you buy yourself — vitamins, supplements, anything from the chemist or online?”"
    },
    {
     "dom": "rto",
     "fail": "“It’s definitely not cancer, don’t worry.”",
     "why": "False reassurance is unsafe and examiners mark it down; if the PTH is suppressed, trust is lost.",
     "fix": "“The odds are strongly in your favour, and one test will point us the right way. I won’t guess.”"
    },
    {
     "dom": "rto",
     "fail": "Explaining the biochemistry without asking why she’s so frightened.",
     "why": "Her mother’s death is the driver; missing it leaves the fear untouched.",
     "fix": "“Is there something that makes the word cancer especially frightening for you?”"
    },
    {
     "dom": "gs",
     "fail": "Stopping the thiazide with no plan for her blood pressure.",
     "why": "Creates a new risk and looks unsafe.",
     "fix": "Review it with an alternative antihypertensive and a BP recheck."
    },
    {
     "dom": "gs",
     "fail": "No safety-net for severe hypercalcaemia.",
     "why": "Vomiting, confusion and marked thirst need same-day care; not saying so is a standard failing point.",
     "fix": "Name the symptoms and where to go, then confirm with teach-back."
    }
   ]
  }
 },
 "hyperkalaemia-recall": {
  "stem": {
   "name": "Raymond Childs",
   "age": "68-year-old man",
   "pmh": [
    "Chronic kidney disease stage 3",
    "Type 2 diabetes",
    "Heart failure"
   ],
   "meds": [
    "Ramipril (dose recently increased)",
    "Spironolactone",
    "Metformin"
   ],
   "allergy": "No known drug allergies",
   "recent": "Monitoring bloods after the recent ramipril dose increase: potassium 6.6 mmol/L (flagged critical by the laboratory), creatinine mildly raised from his previous result. No ECG since the result.",
   "reason": "GP-initiated telephone call to discuss an urgent blood result. He is at work."
  },
  "knowledge": {
   "guideline": "UK Kidney Association: Treatment of Acute Hyperkalaemia in Adults (updated 2023) · NICE NG203 (2021) · NICE NG106 (2018) · NICE NG148 (2019) · MHRA Drug Safety Update February 2016",
   "summary": "A potassium of 6.5 mmol/L or more is severe hyperkalaemia: arrange urgent same-day hospital assessment, whatever the symptoms. Find and stop every driver, including the ones not on the record.",
   "points": [
    {
     "h": "Grade the result",
     "t": "UK Kidney Association bands: mild 5.5–5.9, moderate 6.0–6.4, severe 6.5 mmol/L or more. Severe hyperkalaemia found in the community needs urgent hospital assessment for an ECG, repeat potassium and treatment. Moderate hyperkalaemia in a stable patient can be repeated within one working day, unless unwell or with AKI."
    },
    {
     "h": "Symptoms do not reassure",
     "t": "Hyperkalaemia is often silent until it causes a rhythm disturbance. Weakness, palpitations or collapse may never come first. Act on the number, not on how well he feels. A haemolysed sample is possible, but never assume it when the drug history fits."
    },
    {
     "h": "Stacked drivers",
     "t": "ACE inhibitor after a dose increase, spironolactone, CKD and heart failure, plus the two he has not mentioned: over-the-counter ibuprofen and a potassium-based salt substitute. The MHRA (Drug Safety Update, February 2016) warned of potentially fatal hyperkalaemia with spironolactone plus an ACE inhibitor or ARB, especially with renal impairment."
    },
    {
     "h": "Hold and stop",
     "t": "Stop the NSAID and the salt substitute now. Hold ramipril and spironolactone until hospital review. NICE NG203: stop ACE inhibitor or ARB if potassium rises to 6.0 mmol/L or more and other drugs that raise potassium have been stopped. The rising creatinine needs assessment for AKI (NICE NG148), where NSAIDs are a common precipitant."
    },
    {
     "h": "After the emergency",
     "t": "Medication review with the heart-failure plan (NICE NG106 advises checking potassium and renal function after starting or changing these drugs). Reintroduce with monitoring. Low-potassium dietary advice; paracetamol or a non-NSAID plan for the knee. Potassium binders are options if RAAS therapy must continue: sodium zirconium cyclosilicate from a confirmed potassium of 5.5 mmol/L or more (NICE TA1148, April 2026, which updated and replaced TA599), or patiromer from 6.0 mmol/L or more (NICE TA623, 2020); follow local shared-care arrangements."
    },
    {
     "h": "The recall call",
     "t": "Confirm identity before sharing the result. State the seriousness plainly, ask actively about over-the-counter medicines and salt substitutes, give explicit stop and hold instructions, arrange where he goes, and name the 999 symptoms."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and identity",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Mr Raymond Childs? It’s Dr Lee from the surgery. Before I go on, can you confirm your date of birth for me? And are you somewhere you can talk for a few minutes?",
    "dom": "gs",
    "why": "Confirms identity and privacy before discussing a result"
   },
   {
    "who": "pt",
    "text": "(Gives date of birth.) Yes, it’s me. You’ve caught me at work — is everything alright? The nurse said the bloods were just routine. I’ve got a delivery to sign for."
   },
   {
    "who": "dr",
    "text": "Thank you. I’m sorry to ring you at work, and I’ll be honest with you: I’ve rung because one of your results needs acting on today. Can I explain what it is, ask you a few quick questions, and then we’ll agree what happens next?",
    "dom": "rto",
    "why": "Honest about the reason for the call and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Today? I feel absolutely fine. Go on then."
   },
   {
    "phase": "Sharing the result",
    "clock": "1–3 min",
    "who": "dr",
    "text": "It’s your potassium. It’s a salt in the blood that keeps the heart beating in a steady rhythm. Yours has come back at 6.6, which is high enough that it can upset the heart’s rhythm, even in someone who feels perfectly well.",
    "dom": "tasks",
    "why": "States the value and why it matters in plain language"
   },
   {
    "who": "pt",
    "text": "But I feel grand. Bit of a knee, that’s all. Can’t it wait for my next appointment?"
   },
   {
    "who": "dr",
    "text": "I understand why you’d think that. The catch with potassium is that it usually gives no warning before it causes trouble. So I can’t be guided by how you feel; I have to be guided by the number, and at this level the number says today.",
    "dom": "tasks",
    "why": "Explains that absent symptoms do not make severe hyperkalaemia safe"
   },
   {
    "who": "dr",
    "text": "Right now, any fluttering or racing heartbeat, chest pain, breathlessness, dizziness, or your legs feeling weak?",
    "dom": "tasks",
    "why": "Screens for symptoms that would need a 999 response"
   },
   {
    "who": "pt",
    "text": "No. Nothing like that."
   },
   {
    "phase": "Finding the drivers",
    "clock": "3–6 min",
    "who": "dr",
    "text": "Good. Now I’d like to work out why it’s gone up. We increased your ramipril recently, and spironolactone can raise potassium too. Have you been taking both as prescribed?",
    "dom": "tasks",
    "why": "Checks the prescribed drivers"
   },
   {
    "who": "pt",
    "text": "Every morning, like clockwork."
   },
   {
    "who": "dr",
    "text": "You mentioned your knee. Are you taking anything for it, even something from the chemist or the supermarket? People often don’t count those, but they really matter here.",
    "dom": "rto",
    "why": "Picks up the knee cue and makes over-the-counter disclosure easy"
   },
   {
    "who": "pt",
    "text": "Just ibuprofen. From the chemist. A couple a day. That’s not a proper medicine though, is it?"
   },
   {
    "who": "dr",
    "text": "It’s a very common thing to take, so thank you for telling me. With your kidneys and heart tablets, ibuprofen can strain the kidneys and push potassium up. That may explain part of this. And have you changed anything in your diet lately, like a low-salt or heart-salt substitute?",
    "dom": "tasks",
    "why": "Links the NSAID to the result and asks about salt substitutes"
   },
   {
    "who": "pt",
    "text": "Actually, yes. I switched to one of those low-salt ones. For my blood pressure. Thought I was being good."
   },
   {
    "who": "dr",
    "text": "You were trying to look after yourself, and that’s exactly right in principle. Many of those substitutes swap the sodium for potassium, so for you they add potassium on top of everything else. Put together, the tablets, the ibuprofen and the salt substitute explain this. That’s the good news: it’s fixable.",
    "dom": "tasks",
    "why": "Identifies the stacked drivers without blame"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "6–7 min",
    "who": "dr",
    "text": "I’m going to suggest you’re seen at the hospital today. Before I do, I noticed you went quiet when I said ‘today’. What goes through your mind when I say hospital?",
    "dom": "rto",
    "why": "Responds to a cue and explores the fear behind the deferral"
   },
   {
    "who": "pt",
    "text": "(Pause.) My brother went into hospital and never came home. I don’t like them. And I don’t like being a bother."
   },
   {
    "who": "dr",
    "text": "I’m sorry about your brother. That makes your reluctance completely understandable. This is different: we’ve found it early, on a blood test, before anything has happened. You’re not a bother. Acting now is how we keep it that way.",
    "dom": "rto",
    "why": "Acknowledges the fear and reframes early action as protective"
   },
   {
    "who": "pt",
    "text": "So what would they actually do?"
   },
   {
    "phase": "Plan",
    "clock": "7–10 min",
    "who": "dr",
    "text": "They’ll do a heart tracing, called an ECG, to check the potassium isn’t affecting the rhythm, repeat the blood test, and give treatment to bring the potassium down safely if it’s still high. They’ll also check your kidneys. How long you’re there depends on those results.",
    "dom": "tasks",
    "why": "Explains the same-day assessment: ECG, repeat potassium, treatment"
   },
   {
    "who": "dr",
    "text": "Until you’re seen: no more ibuprofen, stop the salt substitute completely, and don’t take any more ramipril or spironolactone. The hospital team will tell you when and how to restart them. Could you tell me back what you’re stopping?",
    "dom": "gs",
    "why": "Explicit stop and hold instructions with a teach-back"
   },
   {
    "who": "pt",
    "text": "No ibuprofen, no low-salt stuff, and hold the ramipril and the spiro. Leave the metformin?"
   },
   {
    "who": "dr",
    "text": "Good question. Please don’t take any more metformin until the hospital has checked your kidneys either; they’ll tell you when to restart. I’ll ring the medical team now and send them your results, so they’re expecting you. Is there a way you can get there without driving yourself?",
    "dom": "tasks",
    "why": "Arranges the referral and a safe route to hospital"
   },
   {
    "who": "pt",
    "text": "I can get a taxi. The delivery will have to wait, I suppose."
   },
   {
    "who": "dr",
    "text": "Thank you. If your work needs a note for the time off, we can sort that. Afterwards I’ll go through all your tablets with you, find a safer plan for the knee, and we’ll recheck your bloods.",
    "dom": "gs",
    "why": "Practical support and a named follow-up plan"
   },
   {
    "phase": "Safety-net and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "One more important thing. If before you get there you notice palpitations, chest pain, feel faint or weak, or collapse, don’t wait for the taxi: that’s 999 straight away. Tell them your potassium was 6.6.",
    "dom": "gs",
    "why": "Names the 999 symptoms in plain words"
   },
   {
    "who": "pt",
    "text": "Right. That’s clearer. I thought you were just being fussy at first."
   },
   {
    "who": "dr",
    "text": "I’d much rather be fussy today than sorry. So, to check we’re agreed: you’re going to the hospital this afternoon, you’ve stopped the ibuprofen and salt substitute, and you’re holding the ramipril, spironolactone and metformin until they advise you. Anything you want to ask?",
    "dom": "rto",
    "why": "Summarises and checks the agreement"
   },
   {
    "who": "pt",
    "text": "No. I’ll go. Thanks for ringing, doctor."
   },
   {
    "who": "dr",
    "text": "Thank you, Mr Childs. I’ll record this call and check you arrived later today. Look after yourself.",
    "dom": "gs",
    "why": "Documents and closes the loop on attendance"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Confirmed identity and privacy; explained why he was being called before asking questions; let him voice that he feels fine.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work pressure, how he would get to hospital, the brother’s death in hospital and his dislike of being a bother.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the knee (ibuprofen), ‘being good’ about salt (substitute) and the pause at ‘today’ (hospital fear).",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (routine bloods, can wait); concern (hospitals, being a bother); expectation (defer and sign for the delivery).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Same-day hospital assessment: ECG, repeat potassium, renal function for possible AKI.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Drug-induced hyperkalaemia with rising creatinine; considered AKI from the NSAID; aware of a haemolysed sample but did not rely on it.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about palpitations, chest pain, breathlessness, faintness and weakness; recognised 6.6 mmol/L as severe.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Severe hyperkalaemia from ramipril, spironolactone, ibuprofen and a potassium salt substitute on a background of CKD and heart failure.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Urgent hospital referral, explicit stop (ibuprofen, substitute) and hold (ramipril, spironolactone, metformin) instructions, safe transport.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Plans medication review, safer knee analgesia, low-potassium diet advice and renal follow-up.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 symptoms named; referral phoned through; call documented; attendance checked.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Investigations & results",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Raymond Childs",
    "age": "68 years · male",
    "pmh": [
     "CKD stage 3",
     "Type 2 diabetes",
     "Heart failure"
    ],
    "meds": [
     "Ramipril (dose recently increased)",
     "Spironolactone",
     "Metformin"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Lab phoned: potassium 6.6 mmol/L (critical). Creatinine mildly raised from his last result. Bloods were monitoring after the ramipril increase.",
    "reason": "You are ringing him about the result. He is at work."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Identity and purpose",
     "d": "Confirm who you’re speaking to and that he can talk. Say plainly that the result can’t wait."
    },
    {
     "t": "1–3",
     "h": "Share the number",
     "d": "Potassium 6.6, what it does to the heart rhythm, why feeling fine doesn’t make it safe. Screen for symptoms that mean 999 now."
    },
    {
     "t": "3–6",
     "h": "Find the drivers",
     "d": "Ramipril increase, spironolactone, then ask actively: anything for the knee? any salt substitute? The two hidden causes come out here."
    },
    {
     "t": "6–10",
     "h": "Fear and plan",
     "d": "Explore the pause at ‘hospital’ (his brother). Same-day hospital assessment. Stop and hold instructions with teach-back. Safe transport."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 symptoms. Summary. Document, phone the referral through, check he arrived."
    }
   ],
   "wordPics": {
    "fail": "Accepts “I feel fine” and books a routine repeat; or alarms him without a plan; never asks about over-the-counter drugs or salt substitutes; leaves ramipril and spironolactone running; no 999 advice; no check that he will attend.",
    "pass": "Recognises severe hyperkalaemia and arranges same-day hospital assessment with ECG; identifies ramipril and spironolactone and asks about other medicines; gives stop and hold instructions and a basic 999 safety-net.",
    "exc": "All of the above, plus: finds both hidden drivers through open, non-judgemental questions; explores the hospital fear and his brother without losing urgency; uses teach-back for the stop list; arranges safe transport, phones the referral through and checks attendance."
   },
   "avoid": [
    {
     "dont": "“It’s probably a haemolysed sample — pop in for a repeat next week.”",
     "instead": "“At 6.6 I can’t assume it’s a lab error. You need a heart tracing and a repeat today.”",
     "why": "Deferring a severe result on the hope of a spurious sample is the unsafe choice examiners look for."
    },
    {
     "dont": "“Are you on any other medications?”",
     "instead": "“Are you taking anything for that knee, even from the chemist? And any low-salt substitute?”",
     "why": "A closed question lets him answer ‘no’; the hidden drivers only come out when asked specifically."
    },
    {
     "dont": "“Your potassium is dangerously high and you could have a cardiac arrest.”",
     "instead": "“At this level it can upset the heart’s rhythm, so we act today, before anything happens.”",
     "why": "Urgency without panic keeps a frightened man engaged rather than avoidant."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work and practicalities",
     "t": "He is at work and wants to sign for a delivery. Address the practical barrier (time off, a fit note if needed, safe transport) so the plan can happen."
    },
    {
     "h": "Hospital fear",
     "t": "His brother died after a hospital admission. Naming that fear, and explaining why this admission is different, is often what turns refusal into agreement."
    }
   ],
   "legal": [
    {
     "h": "Capacity and refusal",
     "t": "If he declines hospital, he is presumed to have capacity (Mental Capacity Act 2005). Make sure he understands the specific risk, record the discussion and the advice given, and keep the door open."
    },
    {
     "h": "Fit notes",
     "t": "He can self-certify for up to seven days; a fit note is needed after that if he is off longer."
    }
   ],
   "professional": [
    {
     "h": "Confidentiality on the phone",
     "t": "Confirm identity and check he can speak privately before sharing a result, especially at work (GMC Confidentiality, 2017)."
    },
    {
     "h": "Handling critical results",
     "t": "A critical result needs a same-day, documented plan: who was told, what was advised, where the patient went and who checks the outcome (GMC Good Medical Practice 2024)."
    }
   ],
   "community": [
    {
     "h": "Pharmacy and diet",
     "t": "Encourage him to tell the pharmacist about his kidney and heart medicines before buying anything over the counter. Kidney Care UK has patient information on potassium in food and salt substitutes."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Palpitations, chest pain, breathlessness, faintness, collapse or muscle weakness — 999 now",
     "Potassium 6.5 mmol/L or more — urgent hospital assessment regardless of symptoms",
     "Rising creatinine, vomiting, diarrhoea or poor intake — possible AKI"
    ],
    "psychosocial": [
     "At work, wants to defer; stoical and dislikes being a bother",
     "Brother died after a hospital admission — the fear behind the deferral",
     "Believes chemist medicines and salt substitutes ‘don’t count’"
    ],
    "ice": [
     "Idea: routine bloods, he feels fine, so it can wait",
     "Concern: hospitals (his brother) and being a nuisance",
     "Expectation: to put it off until his next appointment"
    ]
   },
   "diagnosis": "Be clear and calm: “Your potassium is 6.6. At that level it can upset the heart’s rhythm without warning, so it needs checking and treating today — and I think I know why it’s gone up.”",
   "diagnosisLay": "“Potassium is like the timing signal for your heartbeat. A bit too much and the signal can go wrong without any warning. Several things have been adding potassium at once — your tablets, the ibuprofen and the salt substitute — like several taps running into one bath.”",
   "management": {
    "reflectIce": "“After what happened to your brother, I understand why hospital is the last place you want to go. We’ve caught this early, on a blood test, and going today is how we keep you well.”",
    "psychosocial": "Remove the practical barriers: the delivery can wait, a fit note if needed, a taxi rather than driving, and a phone call ahead so he is expected.",
    "sharedPlan": [
     "Same-day hospital assessment: ECG, repeat potassium, renal function and treatment",
     "Stop ibuprofen and the salt substitute; hold ramipril, spironolactone and metformin until advised",
     "Medication review, safer knee analgesia and low-potassium diet advice afterwards"
    ],
    "safetyNet": [
     "999 for palpitations, chest pain, faintness, weakness or collapse",
     "Referral phoned through, call documented, attendance checked the same day"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Hyperkalaemia pathway",
    "s": "Visual algorithm · UK Kidney Association bands",
    "href": "algorithms/hyperkalaemia.html"
   },
   {
    "ic": "📋",
    "t": "Chronic kidney disease",
    "s": "Case walkthrough · NICE NG203",
    "href": "../cases/ckd.html"
   },
   {
    "ic": "💠",
    "t": "Heart failure protocol",
    "s": "Drug monitoring · NICE NG106",
    "href": "management/heart-failure.html"
   },
   {
    "ic": "💠",
    "t": "AKI protocol",
    "s": "NSAIDs · NICE NG148",
    "href": "management/aki.html"
   }
  ],
  "pitfalls": {
   "intro": "This telephone station is failed on safety: deferring a severe result because the patient feels well, or missing the drivers he doesn’t volunteer. The marks come from urgency without panic and a careful medicine history.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Booking a repeat potassium in a few days because he has no symptoms, or blaming a haemolysed sample.",
     "why": "Severe hyperkalaemia needs same-day hospital assessment whatever the symptoms. Examiners read deferral as “unsafe management of an abnormal result”.",
     "fix": "“At 6.6 I can’t rely on how you feel. You need a heart tracing and treatment today.”"
    },
    {
     "dom": "tasks",
     "fail": "Checking only the repeat prescription list.",
     "why": "The ibuprofen and the potassium salt substitute are not on the record and he won’t volunteer them. Missing them leaves two causes running.",
     "fix": "Ask specifically: “Anything for the knee, even from the chemist? Any low-salt substitute?”"
    },
    {
     "dom": "tasks",
     "fail": "Arranging hospital review but giving no instructions about his tablets.",
     "why": "Taking tonight’s ramipril and spironolactone adds to the problem. Vague plans are marked down.",
     "fix": "Name each item to stop or hold, then ask him to repeat the list back."
    },
    {
     "dom": "rto",
     "fail": "Answering “I don’t like hospitals” with more facts about potassium.",
     "why": "The deferral is driven by his brother’s death, not by lack of information. Ignoring it loses the patient and the Relating marks.",
     "fix": "“What goes through your mind when I say hospital?” Then explain why this is different."
    },
    {
     "dom": "gs",
     "fail": "Frightening him with cardiac arrest, then ending the call without agreeing where he goes.",
     "why": "Alarm without a plan increases avoidance and is poor safety-netting.",
     "fix": "Calm, clear urgency; phone the referral through; agree transport; check he arrived."
    },
    {
     "dom": "gs",
     "fail": "Discussing the result before confirming who is on the phone and whether he can talk.",
     "why": "A confidentiality lapse is an easy professionalism mark lost.",
     "fix": "Name, date of birth, and “are you somewhere you can talk?” before any detail."
    }
   ]
  }
 },
 "hyponatraemia-diuretic": {
  "stem": {
   "name": "Glenys Tovey",
   "age": "77-year-old woman",
   "pmh": [
    "Hypertension (treatment started about 3 weeks ago)",
    "Long-term citalopram (SSRI)"
   ],
   "meds": [
    "Bendroflumethiazide (started about 3 weeks ago)",
    "Citalopram (long-standing)",
    "Omeprazole"
   ],
   "allergy": "No known drug allergies",
   "recent": "Bloods taken because she felt “off”: sodium 121 mmol/L. Daughter has told the practice she is more confused and unsteady and nearly fell.",
   "reason": "GP telephone call to discuss the low sodium result."
  },
  "knowledge": {
   "guideline": "Society for Endocrinology emergency guidance on hyponatraemia (2016, updated 2022) · European hyponatraemia guideline, ESE/ESICM/ERA-EDTA (2014) (international) · MHRA Drug Safety Update (December 2011) · NICE NG249 (2025) · BNF",
   "summary": "Sodium 121 mmol/L with new confusion, unsteadiness and a near-fall is symptomatic hyponatraemia and needs same-day hospital assessment. A newly started thiazide, an SSRI and excess dilute fluid are the likely combination.",
   "points": [
    {
     "h": "Severity is symptoms plus level",
     "t": "Society for Endocrinology guidance grades by symptoms: moderately severe (nausea without vomiting, confusion, headache) and severe (vomiting, seizures, drowsiness, reduced consciousness). New confusion and gait disturbance at 121 mmol/L need same-day hospital assessment; severe features are a 999 emergency."
    },
    {
     "h": "Correct it slowly",
     "t": "Over-rapid correction risks osmotic demyelination. The Society for Endocrinology guidance limits the rise to 10 mmol/L in the first 24 hours and 8 mmol/L in each 24 hours after that. This is why symptomatic hyponatraemia at this level is managed in hospital, not by a fluid plan at home."
    },
    {
     "h": "Drug causes first",
     "t": "Thiazides are a common cause of hyponatraemia, often within weeks of starting and especially in older women. SSRIs cause hyponatraemia, particularly in older people (BNF), and proton pump inhibitors are also listed. Stop the thiazide; review the others once sodium is corrected."
    },
    {
     "h": "Fluid intake",
     "t": "Drinking large amounts of dilute fluid lowers sodium further when the kidneys cannot excrete free water (thiazide, SIADH). Advise drinking to thirst rather than extra. Hospital teams will assess volume status and decide on any restriction."
    },
    {
     "h": "Citalopram in older adults",
     "t": "MHRA Drug Safety Update (December 2011): citalopram causes dose-dependent QT prolongation; maximum 20 mg daily in people over 60, and correct hypokalaemia (a thiazide effect) before use. Check her dose and potassium."
    },
    {
     "h": "After the acute episode",
     "t": "Choose a different antihypertensive (NICE NG136). A near-fall in someone over 65 warrants falls assessment (NICE NG249). Repeat sodium after discharge and review the whole medicines list."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Mrs Tovey? It’s Dr Lee from the surgery. Can I check your date of birth? … Thank you. I’m ringing about your blood test. Is now a good time?",
    "dom": "gs",
    "why": "Identity and readiness before results"
   },
   {
    "who": "pt",
    "text": "Hello dear. My daughter does fuss. I’ve been a bit muddly and wobbly, but isn’t that just getting old? I’ve been drinking lots of squash to keep my fluids up. I nearly went over the other day but I’m fine. It can wait, surely."
   },
   {
    "who": "dr",
    "text": "I’m glad I caught you. The test has shown something that I think explains the muddled and wobbly feelings, and it’s something we can put right. Can I ask you a few questions, then explain, and we’ll agree what to do today?",
    "dom": "rto",
    "why": "Reframes the symptoms as explicable and sets the agenda"
   },
   {
    "who": "pt",
    "text": "If you like."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about the muddled feeling. When did you first notice it?",
    "dom": "tasks",
    "why": "Establishes timing and the change from baseline"
   },
   {
    "who": "pt",
    "text": "A couple of weeks, maybe. I lose my words. I went into the kitchen and forgot why. My daughter noticed before I did."
   },
   {
    "who": "dr",
    "text": "Any headaches, feeling sick or being sick, very sleepy, or any fits or funny turns?",
    "dom": "tasks",
    "why": "Screens for moderately severe and severe features"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. Just the muddle and the wobbles."
   },
   {
    "who": "dr",
    "text": "About the near-fall — what happened? Did you hit your head or hurt yourself?",
    "dom": "tasks",
    "why": "Assesses injury and falls risk"
   },
   {
    "who": "pt",
    "text": "I got up from the chair and went all unsteady. I grabbed the table. No harm done."
   },
   {
    "who": "dr",
    "text": "Now, your tablets. We started a water tablet, bendroflumethiazide, about three weeks ago. You’re also on citalopram and omeprazole. Anything else, from the chemist?",
    "dom": "tasks",
    "why": "Full drug history with the timing of the new thiazide"
   },
   {
    "who": "pt",
    "text": "No, just those."
   },
   {
    "who": "dr",
    "text": "And the squash — roughly how much are you drinking in a day?",
    "dom": "tasks",
    "why": "Quantifies the dilute fluid intake without judgement"
   },
   {
    "who": "pt",
    "text": "Oh, jugs of it. They always say stay hydrated at my age. I’m quite proud of it."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said it’s just getting old. Is there anything that worries you about the muddle, or about what it might mean?",
    "dom": "rto",
    "why": "Explores the meaning behind the minimisation"
   },
   {
    "who": "pt",
    "text": "(Pause.) If I say I’m muddled and falling, people start talking about homes. I like my independence. I don’t want a fuss."
   },
   {
    "who": "dr",
    "text": "Thank you for being honest. That’s a very understandable worry. I want you to stay independent too — and what I’m going to suggest is how we help you do that.",
    "dom": "rto",
    "why": "Names the independence fear and aligns the plan with it"
   },
   {
    "who": "pt",
    "text": "Well. Go on."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Your salt level, sodium, is low — 121, when normal is about 135 or more. Low sodium causes exactly what you’ve had: muddle, unsteadiness, near-falls. It isn’t age. The water tablet is the most likely cause, and the timing fits. Citalopram can lower it too, and lots of squash dilutes it further.",
    "dom": "tasks",
    "why": "Links the symptoms to the result and names the stacked drivers"
   },
   {
    "who": "pt",
    "text": "So the squash is making it worse? I thought I was being good."
   },
   {
    "who": "dr",
    "text": "You were following advice you’d been given, so please don’t feel bad. For now, drink when you’re thirsty, not extra. And please don’t take any more of the water tablet. We’ll choose a different blood pressure tablet later.",
    "dom": "tasks",
    "why": "Stops the thiazide and corrects the fluid advice without shaming"
   },
   {
    "who": "pt",
    "text": "Right. No water tablet, less squash."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Because the level is quite low and it’s affecting your thinking and balance, I’d like you assessed at the hospital today. They repeat the test, check your fluid balance, and bring the salt up slowly and safely — too fast can cause harm, which is why this needs doing there, not at home.",
    "dom": "tasks",
    "why": "Same-day acute assessment with the reason for controlled correction"
   },
   {
    "who": "pt",
    "text": "Hospital? Oh dear. Will they keep me in?"
   },
   {
    "who": "dr",
    "text": "They might need to for a short time, while they correct it carefully. I can’t promise either way. But this is treatable, and fixing it is how you get steadier and clearer at home. Could your daughter take you, and would you like me to speak to her about the plan?",
    "dom": "rto",
    "why": "Honest answer, framed around her goal, and seeks consent to involve her daughter"
   },
   {
    "who": "pt",
    "text": "Yes. She’ll take me. You can tell her."
   },
   {
    "who": "dr",
    "text": "Thank you. I’ll ring the medical team so they’re expecting you and send them your results. Afterwards we’ll review all your tablets, including the citalopram dose and the omeprazole, and arrange a check on your balance to help prevent falls.",
    "dom": "tasks",
    "why": "Handover plus medicines review and falls assessment"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Before you get there, if you become more confused, very sleepy, are sick, have a fit or a fall where you hurt yourself, your daughter should call 999.",
    "dom": "gs",
    "why": "Plain emergency triggers for worsening hyponatraemia"
   },
   {
    "who": "pt",
    "text": "I’ll tell her."
   },
   {
    "who": "dr",
    "text": "Can you tell me in your own words what we’ve agreed?",
    "dom": "rto",
    "why": "Teach-back, also a quick check of her understanding given the confusion"
   },
   {
    "who": "pt",
    "text": "No more water tablet, drink when I’m thirsty, go to the hospital today with my daughter, and 999 if I get worse."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll speak to your daughter now, and I’ll follow up your results. You’re not just getting old — this is something we can put right.",
    "dom": "gs",
    "why": "Confirms the plan, closes the loop and repeats the key reframe"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Identity check, then let her describe the muddle and wobbles in her own words; did not dismiss the daughter’s report.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Living independently, pride in drinking squash, fear of a care home, the daughter’s role and practical transport.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “just getting old” and “I don’t want a fuss” and explored the fear of losing independence.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (ageing); concern (a care home, losing her independence); expectation (to defer and avoid fuss).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Same-day hospital assessment: repeat sodium, potassium, volume status and further tests as indicated; later falls assessment.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Thiazide-induced hyponatraemia compounded by SSRI and excess dilute fluid; considered PPI; asked about vomiting and head injury.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for vomiting, seizures, drowsiness and head injury; recognised new confusion at 121 mmol/L as needing same-day care.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Explained symptomatic low sodium and its likely causes plainly, and that the symptoms were not ageing.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Stop bendroflumethiazide; drink to thirst; same-day acute referral with handover; explained why correction must be slow.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Citalopram dose checked against MHRA advice, omeprazole reviewed, alternative antihypertensive planned, falls assessment arranged.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 triggers given to her and her daughter (with consent), teach-back, result follow-up and medicines review.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Investigations & results"
   ],
   "stem": {
    "name": "Glenys Tovey",
    "age": "77 years · female",
    "pmh": [
     "Hypertension (newly treated)",
     "Long-term SSRI (citalopram)"
    ],
    "meds": [
     "Bendroflumethiazide (started ~3 weeks ago)",
     "Citalopram",
     "Omeprazole"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Sodium 121 mmol/L. Bloods done because she felt “off”. Daughter reports new confusion, unsteadiness and a near-fall.",
    "reason": "GP telephone call about the result. “It’s just my age, surely.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Identify and frame",
     "d": "Identity check. She minimises straight away. Tell her the result may explain how she feels, then set the agenda."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Onset of confusion, headache, vomiting, drowsiness, seizures; the near-fall and any injury; the thiazide timing, SSRI, PPI; how much squash."
    },
    {
     "t": "4–6",
     "h": "ICE and the hidden agenda",
     "d": "“Just getting old” covers a fear of a care home. Name it and align the plan with staying at home."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Low sodium explains the symptoms. Stop the thiazide, drink to thirst, same-day hospital for safe correction. Daughter involved with consent."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 triggers, teach-back, handover to the medical team, later medicines review and falls assessment."
    }
   ],
   "wordPics": {
    "fail": "Accepts “just my age” and repeats the test next week; continues the thiazide; never asks about fluid intake; no emergency advice; ignores the near-fall.",
    "pass": "Links the symptoms to low sodium; stops the thiazide; arranges same-day assessment; advises less squash; basic 999 advice.",
    "exc": "All of the above, plus: finds the care-home fear and frames treatment as staying independent; corrects the fluid advice without shaming; explains why correction must be slow; checks citalopram dose and potassium; involves the daughter with consent; plans a falls assessment; teach-back."
   },
   "avoid": [
    {
     "dont": "“Yes, some of it will be your age, but let’s repeat the blood test next week.”",
     "instead": "“This isn’t your age. Your low sodium causes exactly these symptoms, and it needs checking today.”",
     "why": "Deferring symptomatic hyponatraemia at 121 is unsafe management."
    },
    {
     "dont": "“You’ve been drinking far too much — that’s caused it.”",
     "instead": "“You were following good advice. For now, drink when you’re thirsty rather than extra.”",
     "why": "Shaming her pride in following advice loses her cooperation."
    },
    {
     "dont": "“Can I speak to your daughter?” before she has agreed.",
     "instead": "“Would you like me to talk to your daughter about the plan?”",
     "why": "Confusion does not remove her right to decide who is told; ask first."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Independence",
     "t": "Fear of a care home drives her minimisation. Framing correction as the route to staying safely at home earns agreement."
    },
    {
     "h": "Family support",
     "t": "Her daughter noticed the change first and can take her to hospital. Treat the relative’s account as valuable collateral history."
    }
   ],
   "legal": [
    {
     "h": "Capacity and consent",
     "t": "She is mildly confused. Presume capacity but check she can understand, retain and weigh the plan (Mental Capacity Act 2005). If she lacks capacity for this decision, act in her best interests and involve her daughter."
    }
   ],
   "professional": [
    {
     "h": "Confidentiality",
     "t": "Ask her permission before discussing results with her daughter (GMC Confidentiality, 2017). Record the consent."
    },
    {
     "h": "Prescribing safety",
     "t": "A thiazide in an older woman on an SSRI needs sodium monitoring. Report suspected adverse reactions through the MHRA Yellow Card scheme."
    }
   ],
   "community": [
    {
     "h": "Falls prevention",
     "t": "Refer to the local falls service after the near-fall (NICE NG249). Age UK offers support and information for staying independent at home."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Vomiting, seizures, drowsiness or reduced consciousness — 999",
     "Worsening confusion or headache — escalating severity",
     "A fall with head injury — needs assessment in its own right"
    ],
    "psychosocial": [
     "Lives independently and values it",
     "Proud of drinking lots of squash on advice",
     "Daughter concerned and available to help"
    ],
    "ice": [
     "Idea: muddle and wobbles are just getting old",
     "Concern: admitting confusion or falls means a care home",
     "Expectation: to defer and avoid fuss"
    ]
   },
   "diagnosis": "Say it plainly: “Your sodium, a salt in the blood, is low. That’s what’s causing the muddle and unsteadiness. The new water tablet is the most likely cause, helped along by the citalopram and the extra squash.”",
   "diagnosisLay": "“Your body’s fluid is like a cordial that’s been watered down too far. The new tablet made you lose salt, and the extra squash watered it down more. We need to bring the strength back up gently — too fast is harmful, so it’s done in hospital.”",
   "management": {
    "reflectIce": "“You’re worried that admitting the muddle means losing your home. Sorting the sodium is exactly how you stay in it — clearer and steadier.”",
    "psychosocial": "Involve her daughter with consent, reassure about independence, and praise her for following advice while changing it.",
    "sharedPlan": [
     "Stop bendroflumethiazide now; drink to thirst, not extra",
     "Same-day hospital assessment with phoned handover; slow, controlled correction",
     "Later: alternative antihypertensive (NICE NG136), citalopram dose and potassium check (MHRA December 2011), omeprazole review, falls assessment (NICE NG249)"
    ],
    "safetyNet": [
     "999 for worsening confusion, drowsiness, vomiting, seizure or a fall with injury",
     "Repeat sodium after discharge and GP medicines review"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Hyponatraemia",
    "s": "Case walkthrough · SfE emergency guidance",
    "href": "../cases/hyponatraemia.html"
   },
   {
    "ic": "🗺️",
    "t": "Hyponatraemia pathway",
    "s": "Visual algorithm · severity and causes",
    "href": "algorithms/hyponatraemia.html"
   },
   {
    "ic": "🗺️",
    "t": "Falls pathway",
    "s": "Visual algorithm · NICE NG249",
    "href": "algorithms/falls.html"
   },
   {
    "ic": "📋",
    "t": "Multimorbidity and polypharmacy",
    "s": "Case walkthrough · medicines review",
    "href": "../cases/multimorbidity-polypharmacy.html"
   }
  ],
  "pitfalls": {
   "intro": "Candidates fail this call by agreeing with her that it is age, or by fixing the sodium on paper while missing the squash, the care-home fear and the near-fall.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting “just my age” and arranging a repeat test next week.",
     "why": "New confusion with sodium 121 is symptomatic hyponatraemia and needs same-day assessment. Deferral is unsafe.",
     "fix": "“This isn’t your age — your sodium explains it, and it needs checking today.”"
    },
    {
     "dom": "tasks",
     "fail": "Missing the timing of the thiazide or leaving it running.",
     "why": "The most likely and most reversible cause stays in place.",
     "fix": "Link the three-week timing out loud and stop it on the call."
    },
    {
     "dom": "tasks",
     "fail": "Advising extra salt or a home fluid plan instead of hospital assessment.",
     "why": "Uncontrolled correction risks osmotic demyelination; this level with symptoms is managed in hospital.",
     "fix": "Explain that the salt must come up slowly and safely, which is why she goes in."
    },
    {
     "dom": "rto",
     "fail": "Telling her she has been drinking too much.",
     "why": "She is proud of following advice; blame loses her trust and cooperation.",
     "fix": "Credit her for following advice, then change it: drink to thirst for now."
    },
    {
     "dom": "rto",
     "fail": "Never finding out why she keeps minimising.",
     "why": "The fear of a care home will stop her going to hospital unless addressed.",
     "fix": "“Is anything worrying you about what the muddle might mean?” Then frame treatment as staying at home."
    },
    {
     "dom": "gs",
     "fail": "Talking to the daughter without asking, or not checking what Mrs Tovey has understood.",
     "why": "Confidentiality and capacity both matter in a mildly confused patient.",
     "fix": "Ask permission to involve her daughter, and use teach-back to check understanding."
    }
   ]
  }
 },
 "mouth-ulcer-2ww": {
  "stem": {
   "name": "Frank Mensah",
   "age": "63-year-old man",
   "pmh": [
    "No significant past medical history",
    "Current smoker",
    "Wears a denture"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Retired bus driver. No consultations in the past year. Has sent a photo of a sore area inside his mouth ahead of the call.",
   "reason": "Video consultation about a mouth ulcer that has not healed."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · NICE NG209 Tobacco (2021) · NICE PH24 Alcohol-use disorders: prevention (2010)",
   "summary": "An unexplained mouth ulcer lasting more than 3 weeks, or a persistent unexplained neck lump, meets the NICE NG12 (updated April 2026) threshold for a suspected cancer pathway referral. A denture does not explain a 6-week, firm, bleeding ulcer with a neck lump.",
   "points": [
    {
     "h": "NICE NG12 (updated April 2026) oral cancer criteria",
     "t": "NICE NG12 (updated April 2026): consider a suspected cancer pathway referral (appointment within 2 weeks) for oral cancer in people with unexplained ulceration in the oral cavity lasting more than 3 weeks, or a persistent and unexplained lump in the neck. Frank has both."
    },
    {
     "h": "Laryngeal criterion too",
     "t": "NICE NG12 (updated April 2026): consider a suspected cancer pathway referral for laryngeal cancer in people aged 45 and over with persistent unexplained hoarseness or an unexplained lump in the neck. At 63 with a neck lump, he meets this as well; the head and neck team covers both."
    },
    {
     "h": "Dental route",
     "t": "NICE NG12 (updated April 2026): consider urgent referral for assessment by a dentist for a lump on the lip or in the oral cavity, or a red or red-and-white patch consistent with erythroplakia or erythroleukoplakia. The dentist is a route for patches and lumps, not a substitute for the suspected cancer pathway when the ulcer criterion is met."
    },
    {
     "h": "The denture trap",
     "t": "Denture trauma causes ulcers, but they heal once the denture is eased. Features that make trauma an unsafe explanation: more than 3 weeks, raised firm (indurated) edges, bleeding, lateral tongue or floor of mouth, and a neck lump."
    },
    {
     "h": "Risk factors",
     "t": "Tobacco and alcohol are the main risk factors and multiply each other’s effect. Areca nut (in betel quid and paan) is classed as a human carcinogen by IARC (international). Offer stop smoking support (NICE NG209) and alcohol brief advice (NICE PH24)."
    },
    {
     "h": "What happens next",
     "t": "The specialist will examine, usually biopsy the ulcer, and may scan the neck. NHS England’s Faster Diagnosis Standard aims for cancer to be diagnosed or ruled out within 28 days of referral."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Mensah, I’m Dr Shah. Can you hear and see me clearly? Thanks for sending the photo. Tell me about the ulcer in your own words.",
    "dom": "rto",
    "why": "Checks the video link and opens with the patient’s story"
   },
   {
    "who": "pt",
    "text": "It’s on the side of my tongue, been there about six weeks. It’s the denture rubbing, I’m sure. The wife made me ring. Can you just give me a gel or a mouthwash? Oh, and there’s a bit of a lump in my neck, but that’s a gland from the ulcer, isn’t it?"
   },
   {
    "who": "dr",
    "text": "I’m glad your wife encouraged you. I’d like to understand the ulcer properly and have a think about the lump too, then we’ll agree what to do. Is that alright?",
    "dom": "gs",
    "why": "Sets an agenda that includes both problems he raised"
   },
   {
    "who": "pt",
    "text": "Fine."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Has it changed at all over the six weeks? Does it bleed, and how does the edge feel with your tongue?",
    "dom": "tasks",
    "why": "Characterises duration, change, bleeding and induration"
   },
   {
    "who": "pt",
    "text": "It’s not getting better. The edges feel a bit raised and hard now. It bleeds sometimes when I eat."
   },
   {
    "who": "dr",
    "text": "Have you tried leaving the denture out, or had it adjusted? And has the lump in your neck gone down at all?",
    "dom": "tasks",
    "why": "Tests the denture hypothesis and the persistence of the neck lump"
   },
   {
    "who": "pt",
    "text": "I leave it out at night. Still there. The lump’s about the same, maybe a bit bigger."
   },
   {
    "who": "dr",
    "text": "Any trouble swallowing or speaking, a change in your voice, ear pain, or weight loss?",
    "dom": "tasks",
    "why": "Screens for other head and neck red flags"
   },
   {
    "who": "pt",
    "text": "No, none of that really."
   },
   {
    "who": "dr",
    "text": "Can I ask about a few everyday things? Do you smoke, how much do you usually drink, and do you ever chew betel, paan or areca nut? I ask everyone with a mouth problem.",
    "dom": "tasks",
    "why": "Elicits all three risk factors without judgement, normalising the question"
   },
   {
    "who": "pt",
    "text": "I smoke, forty years now. A drink every day. And the paan, now and then. It’s just what we grew up with."
   },
   {
    "who": "dr",
    "text": "Thank you for being straight with me, that’s helpful.",
    "dom": "rto",
    "why": "Acknowledges an honest disclosure without shaming"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You’ve said it’s the denture, but it sounds like your wife is worried. Is there anything that’s been on your mind about it yourself?",
    "dom": "rto",
    "why": "Uses the wife’s concern as a cue to explore his own fear"
   },
   {
    "who": "pt",
    "text": "…My brother had cancer of the mouth, the throat. He had a terrible time with the treatment. I don’t want to go through that. So I’d rather it was the denture."
   },
   {
    "who": "dr",
    "text": "I’m so sorry about your brother. After seeing what he went through, of course you’d want this to be something simple. Thank you for telling me, it helps me understand.",
    "dom": "rto",
    "why": "Names and validates the fear driving the denial"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I want to be honest with you. A denture sore should heal within a few weeks once it’s eased. An ulcer that’s been there six weeks, with firm edges, that bleeds, together with a lump in the neck, can’t safely be put down to the denture.",
    "dom": "tasks",
    "why": "Explains why the denture explanation is unsafe"
   },
   {
    "who": "pt",
    "text": "So you think it’s cancer."
   },
   {
    "who": "dr",
    "text": "I can’t tell that from here, and most mouth ulcers aren’t cancer. But national guidance says an ulcer that hasn’t healed after three weeks, or a lump in the neck that stays, should be seen quickly by the head and neck specialists, within two weeks. You have both, so that’s what I recommend.",
    "dom": "tasks",
    "why": "Applies the NICE NG12 (updated April 2026) criteria honestly without over-stating the diagnosis"
   },
   {
    "who": "pt",
    "text": "What will they do?"
   },
   {
    "who": "dr",
    "text": "They’ll look and feel carefully, and most likely take a small sample from the ulcer under local anaesthetic. That gives a definite answer. If there is something there, finding it early is what makes treatment smaller and more successful.",
    "dom": "rto",
    "why": "Sets expectations and links early diagnosis to his fear of treatment"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’d also like to see you in the surgery in the next day or two, so I can feel the ulcer and the neck myself. A photo can’t show me how firm it is. I’ll send the referral today either way. Does that work?",
    "dom": "tasks",
    "why": "Arranges a face-to-face examination without delaying the referral"
   },
   {
    "who": "pt",
    "text": "Yes, I can come in. What about the gel?"
   },
   {
    "who": "dr",
    "text": "If it’s sore, a pharmacy anaesthetic gel or mouthwash is fine for comfort, but it won’t replace being seen. Keep the denture out as much as you can for now.",
    "dom": "tasks",
    "why": "Meets his request safely without letting it become the plan"
   },
   {
    "who": "dr",
    "text": "The smoking, the daily drink and the paan all affect the lining of the mouth. I’m not going to lecture you today. When you’re ready, there’s good help to stop smoking and to cut down, and I’d be glad to set it up. Would you like that?",
    "dom": "rto",
    "why": "Offers risk-factor support respectfully and lets him choose"
   },
   {
    "who": "pt",
    "text": "Maybe the smoking. Let me get this sorted first."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "That’s fair. The hospital should contact you within days. If you haven’t heard within a week, ring us and we’ll chase it. If it bleeds heavily, you struggle to swallow or breathe, or the neck lump grows quickly, contact us the same day.",
    "dom": "gs",
    "why": "Specific safety-net and responsibility for chasing the referral"
   },
   {
    "who": "dr",
    "text": "Would it help if your wife came with you to the appointment? And can you tell me back what we’ve agreed?",
    "dom": "rto",
    "why": "Offers support and checks understanding"
   },
   {
    "who": "pt",
    "text": "Urgent referral to the mouth and throat people, come in to see you this week, gel just for comfort, ring if I don’t hear in a week. She’ll come with me."
   },
   {
    "who": "dr",
    "text": "Exactly right. I know this isn’t what you rang for, and it took courage to tell me about your brother. We’ll go through the results together.",
    "dom": "rto",
    "why": "Acknowledges the shift from his request and commits to continuity"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question about the ulcer; takes the neck lump seriously as part of the agenda rather than a throwaway.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Smoking, daily alcohol and paan asked without judgement; the wife’s role; his brother’s illness.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "The wife’s worry and “that’s just a gland, isn’t it?” are followed up and lead to the fear underneath.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (denture sore); concern (brother’s mouth and throat cancer, fear of treatment); expectation (gel or mouthwash).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Arranges face-to-face examination to palpate the ulcer and neck; explains the specialist will examine and biopsy.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Denture trauma versus oral cancer; checks whether easing the denture has helped and whether the lump persists.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Duration over 3 weeks, induration, bleeding, neck lump; asks about swallowing, voice, ear pain and weight loss.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "States that the ulcer is suspicious and meets the NICE NG12 (updated April 2026) criteria, without claiming it is cancer.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Suspected cancer pathway referral for oral cancer sent today (NICE NG12 (updated April 2026)); gel for comfort only.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Offers stop smoking support, alcohol advice and paan cessation respectfully; denture left out meanwhile.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Chase if no contact within a week; same-day contact for heavy bleeding, swallowing or breathing trouble; results reviewed together.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Ethnicity, culture & diversity"
   ],
   "stem": {
    "name": "Frank Mensah",
    "age": "63 years · male",
    "pmh": [
     "Nil significant",
     "Smoker"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Photo uploaded ahead of the call: ulcer on the lateral tongue. No oral or ENT consultations on record.",
    "reason": "Mouth ulcer. “It’s just my denture rubbing — can I have a gel?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "He mentions the neck lump at the end of his opening. Put it on the agenda straight away."
    },
    {
     "t": "1–4",
     "h": "Characterise and risk",
     "d": "Six weeks, raised firm edges, bleeding, denture out without improvement, persistent lump. Smoking, alcohol and paan asked neutrally."
    },
    {
     "t": "4–6",
     "h": "The fear",
     "d": "Use the wife’s worry to open the door. His brother’s cancer surfaces; acknowledge it before any explanation."
    },
    {
     "t": "6–10",
     "h": "Explain and refer",
     "d": "Why not the denture. NICE NG12 (updated April 2026) criteria in plain words. Suspected cancer pathway referral today; face-to-face examination this week."
    },
    {
     "t": "10–12",
     "h": "Support and safety-net",
     "d": "Offer stop smoking help without lecturing. Chase if no contact in a week. Same-day symptoms. Teach-back; offer for his wife to come."
    }
   ],
   "wordPics": {
    "fail": "Accepts the denture story and prescribes a gel; dismisses the neck lump as a gland; no suspected cancer pathway referral; relies on the photo; never asks about smoking, alcohol or paan, or lectures about them; never learns about the brother.",
    "pass": "Recognises the ulcer and neck lump as NICE NG12 (updated April 2026) criteria and refers on the suspected cancer pathway; asks about risk factors; arranges examination; gives a basic safety-net.",
    "exc": "All of that, plus surfaces the brother’s cancer and uses it to frame early referral as protective, explains honestly without over-stating, handles paan with cultural respect, meets the gel request safely, takes ownership of chasing the referral and checks understanding."
   },
   "avoid": [
    {
     "dont": "“It’s probably the denture. Try this gel and come back if it isn’t better in a couple of weeks.”",
     "instead": "“A denture sore should have healed by now. Six weeks with firm edges and a neck lump needs the specialists to see you within two weeks.”",
     "why": "A further wait with a gel is the classic missed-cancer error in this station."
    },
    {
     "dont": "“You really must stop smoking, drinking and chewing that stuff — it causes cancer.”",
     "instead": "“These things affect the mouth lining. When you’re ready, I’d be glad to help you cut down or stop.”",
     "why": "A shaming lecture at a frightening moment loses the patient; an open offer keeps him engaged."
    },
    {
     "dont": "“I’m referring you for cancer.”",
     "instead": "“I’m asking the specialists to check this quickly. Most mouth ulcers aren’t cancer, but this one needs a proper look.”",
     "why": "Honest but calibrated language respects his fear without false reassurance."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Culture and habits",
     "t": "Betel, paan and areca nut chewing can be a long-standing social and cultural habit. Ask about it routinely and neutrally; many patients do not know it carries a cancer risk."
    },
    {
     "h": "Family experience",
     "t": "His brother’s difficult treatment drives his avoidance. His wife is an ally in getting him to appointments."
    }
   ],
   "legal": [
    {
     "h": "Consent and information",
     "t": "Explain why a suspected cancer referral is being made, what it involves and that it does not mean cancer is confirmed. Patients who are told the reason are more likely to attend."
    }
   ],
   "professional": [
    {
     "h": "Safety-netting the referral",
     "t": "The GP remains responsible for checking the patient is seen. Record the referral, the reason given to the patient and a plan to follow up if he does not hear."
    },
    {
     "h": "Remote consulting limits",
     "t": "A photo cannot show induration or feel the neck. Arrange examination in person, but do not delay the referral waiting for it."
    }
   ],
   "community": [
    {
     "h": "Support services",
     "t": "NHS Stop Smoking Services; local alcohol support; Macmillan Cancer Support and the Mouth Cancer Foundation for information while he waits."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Unexplained oral ulceration for more than 3 weeks: suspected cancer pathway referral for oral cancer (NICE NG12 (updated April 2026))",
     "Persistent unexplained neck lump: oral cancer criterion, and laryngeal criterion at 45 and over",
     "Raised, firm edges, bleeding, lateral tongue site; difficulty swallowing, voice change, ear pain, weight loss"
    ],
    "psychosocial": [
     "Forty years of smoking, daily alcohol and occasional paan",
     "Brother’s head and neck cancer and his experience of treatment",
     "His wife’s concern as a reliable signal"
    ],
    "ice": [
     "Idea: “It’s the denture rubbing; the lump is just a gland”",
     "Concern: ending up like his brother",
     "Expectation: a mouth gel or mouthwash"
    ]
   },
   "diagnosis": "“This ulcer has been there six weeks, has firm edges and bleeds, and there’s a lump in your neck. That doesn’t fit with a denture sore, so it needs checking quickly by the head and neck specialists.”",
   "diagnosisLay": "“A sore from a denture is like a blister from new shoes: once the rubbing stops, it heals. This one hasn’t healed even with the denture out, so we need someone to take a proper look and probably a small sample.”",
   "management": {
    "reflectIce": "“You told me about your brother, and I understand why you’d want this to be the denture. Getting it checked early is the best way to avoid what he went through.”",
    "psychosocial": "Respect his pace on smoking, drinking and paan: make one open offer of support and let him choose. Involve his wife if he wants.",
    "sharedPlan": [
     "Suspected cancer pathway referral to head and neck today (NICE NG12 (updated April 2026))",
     "Face-to-face examination this week to palpate the ulcer and neck, without delaying the referral",
     "Gel for comfort only; denture out where possible; stop smoking support offered"
    ],
    "safetyNet": [
     "Ring if no hospital contact within a week",
     "Same-day contact for heavy bleeding, difficulty swallowing or breathing, or a rapidly growing lump"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Mouth ulcers pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026)",
    "href": "algorithms/mouth-ulcers.html"
   },
   {
    "ic": "🗺️",
    "t": "Neck lump pathway",
    "s": "Visual algorithm · suspected cancer referral",
    "href": "algorithms/neck-lump.html"
   },
   {
    "ic": "🗺️",
    "t": "Sore mouth and tongue",
    "s": "Visual algorithm · red and white patches",
    "href": "algorithms/sore-mouth-tongue.html"
   },
   {
    "ic": "💠",
    "t": "Harmful drinking and alcohol dependence",
    "s": "Protocol · brief intervention",
    "href": "management/alcohol-problem-drinking.html"
   }
  ],
  "pitfalls": {
   "intro": "Candidates rarely fail this station on knowledge of NICE NG12 (updated April 2026). They fail by going along with the patient’s explanation, missing the neck lump, or losing him with a lecture. The patterns below reflect recurring SCA feedback.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribes a gel and asks him to return in two weeks if it hasn’t healed.",
     "why": "The ulcer has already lasted six weeks. It meets the NICE NG12 (updated April 2026) threshold now. “Management not in line with UK guidance.”",
     "fix": "State the criterion plainly and send the suspected cancer pathway referral today."
    },
    {
     "dom": "tasks",
     "fail": "Accepts “the lump is just a gland from the ulcer”.",
     "why": "A persistent unexplained neck lump is its own NICE NG12 (updated April 2026) criterion, and with the ulcer raises concern for spread.",
     "fix": "Ask how long it has been there and whether it is changing, and include it in the referral."
    },
    {
     "dom": "tasks",
     "fail": "Decides from the photo alone.",
     "why": "Induration and nodes are felt, not seen. Over-reliance on a remote image is unsafe.",
     "fix": "Refer now and arrange a face-to-face examination this week; one does not wait for the other."
    },
    {
     "dom": "rto",
     "fail": "Lectures on smoking, drinking and paan before he feels heard.",
     "why": "“Did not respond to the patient’s perspective.” Shame about a cultural habit can end engagement.",
     "fix": "Ask neutrally, thank him for honesty, and make one open offer of support later in the consultation."
    },
    {
     "dom": "rto",
     "fail": "Never discovers why he wants it to be the denture.",
     "why": "“Did not explore concerns.” His brother’s cancer is the hidden agenda.",
     "fix": "Use the wife’s worry: “It sounds like she’s worried. What about you?”"
    },
    {
     "dom": "gs",
     "fail": "Says “it’s probably cancer” or, conversely, “I’m sure it’s nothing”.",
     "why": "Both are poorly calibrated communication and damage trust.",
     "fix": "“Most mouth ulcers aren’t cancer, but this one needs a proper look, quickly.”"
    }
   ]
  }
 },
 "nonvisible-haematuria": {
  "stem": {
   "name": "Alec Brennan",
   "age": "67-year-old man",
   "pmh": [
    "Ex-smoker, 35 pack-years",
    "Previous occupational exposure: rubber and dye industry",
    "Recently bereaved (widower)"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Urine dipstick done for an unrelated reason showed blood; confirmed on repeat dipstick. No proteinuria. BP normal. eGFR normal. No visible haematuria reported.",
   "reason": "Video consultation to discuss the urine result. Nurse note: “reluctant to have tests”."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · NICE NG203 (2021) · BAUS and Renal Association haematuria consensus (2008) · NHS England Faster Diagnosis Standard (October 2023)",
   "summary": "Persistent non-visible haematuria in a 67-year-old ex-smoker with aromatic amine exposure needs investigation, even with no visible blood and no pain. Apply the NICE NG12 (updated April 2026) criterion precisely and triage urological against renal causes.",
   "points": [
    {
     "h": "Confirm it is real and persistent",
     "t": "Use reagent strips rather than microscopy. NICE NG203: persistent non-visible haematuria is 2 out of 3 positive dipsticks (1+ or more). Exclude transient causes: urinary infection (send an MSU), recent vigorous exercise, instrumentation."
    },
    {
     "h": "NICE NG12 (updated April 2026) criterion",
     "t": "NICE NG12 (updated April 2026): refer people aged 60 and over with unexplained non-visible haematuria and either dysuria or a raised white cell count on a blood test on a suspected cancer pathway for bladder cancer. Visible haematuria has its own criteria (45 and over, unexplained, for bladder and kidney cancer). Ask about dysuria and check an FBC."
    },
    {
     "h": "When NICE NG12 (updated April 2026) is not met",
     "t": "Without dysuria or a raised white cell count, persistent non-visible haematuria at his age still warrants urology referral for assessment: the BAUS and Renal Association consensus advises referral for asymptomatic persistent non-visible haematuria aged 40 and over. His smoking and aromatic amine exposure strengthen the case."
    },
    {
     "h": "Urological or renal?",
     "t": "Check eGFR, urine ACR and BP. NICE NG203: refer to nephrology if ACR is 30 mg/mmol or more with haematuria. If urology finds no cause, NICE NG203 advises annual monitoring of haematuria, ACR, eGFR and BP while haematuria persists."
    },
    {
     "h": "Risk factors and the prostate",
     "t": "Bladder cancer risk rises with age, smoking and occupational aromatic amine exposure (dye, rubber, leather, printing). With lower urinary tract symptoms, NICE NG12 (updated April 2026) advises considering a PSA test and digital rectal examination, after counselling."
    },
    {
     "h": "What the pathway involves",
     "t": "Urology assessment usually includes imaging of the kidneys and urinary tract and a flexible cystoscopy under local anaesthetic gel. The NHS England Faster Diagnosis Standard aims for a diagnosis or all-clear within 28 days of an urgent suspected cancer referral."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Good afternoon Mr Brennan, I’m Dr Lee. Thanks for joining. I understand the nurse has spoken to you about your urine test. What have you made of it so far?",
    "dom": "rto",
    "why": "Starts with his understanding rather than the result"
   },
   {
    "who": "pt",
    "text": "She said there was a bit of blood in it. But I can’t see any — it looks totally normal. So surely it’s not much? I’d rather not get dragged into a load of tests. Can we just leave it and recheck in a while?"
   },
   {
    "who": "dr",
    "text": "I can hear you’d really rather not have tests, and I want to understand why. Can we talk it through — how you’ve been, what the result might mean, and then decide together what’s sensible? I won’t rush you.",
    "dom": "gs",
    "why": "Acknowledges his wish and sets a shared agenda"
   },
   {
    "who": "pt",
    "text": "Fair enough."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Have you ever seen your urine red, pink or brown, even once? Any stinging or burning when you pass water?",
    "dom": "tasks",
    "why": "Asks about visible haematuria and dysuria, the NICE NG12 (updated April 2026) discriminator"
   },
   {
    "who": "pt",
    "text": "Never seen any colour. No stinging. Just the usual waterworks niggles you get at my age."
   },
   {
    "who": "dr",
    "text": "Tell me about the niggles. Any fever, pain in your back or side, or weight loss you haven’t tried for?",
    "dom": "tasks",
    "why": "Characterises LUTS and screens for infection, stones and systemic features"
   },
   {
    "who": "pt",
    "text": "Nothing like that. Just the niggles."
   },
   {
    "who": "dr",
    "text": "I see from your notes you used to smoke, and you worked in the rubber and dye trade. Can you tell me about that work?",
    "dom": "tasks",
    "why": "Explores the occupational and smoking risk factors"
   },
   {
    "who": "pt",
    "text": "Years back. Smoked a long time too, gave up. Why’s that matter?"
   },
   {
    "who": "dr",
    "text": "Some chemicals used in that work, and long-term smoking, both make bladder problems more likely. It doesn’t mean you have anything — it means we check properly rather than wait and see.",
    "dom": "tasks",
    "why": "Explains why his risk factors matter without alarming"
   },
   {
    "who": "pt",
    "text": "Nobody ever told me that."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said you’d rather not be dragged into tests. What is it about the tests that puts you off?",
    "dom": "rto",
    "why": "Follows the reluctance cue to its source"
   },
   {
    "who": "pt",
    "text": "They’ll want a camera up there, won’t they? I’ve heard about that. And hospitals… I’ve had enough of hospitals lately."
   },
   {
    "who": "dr",
    "text": "Lately?",
    "dom": "rto",
    "why": "Reflects the cue and gives space"
   },
   {
    "who": "pt",
    "text": "(Pause.) My wife. She died. I’ve not really looked after myself since. And if they find something… there’s no one to go through it with."
   },
   {
    "who": "dr",
    "text": "I’m so sorry. That’s a huge loss, and it’s very common to let your own health slide while grieving. It makes sense that tests which might bring bad news feel like too much on your own. Thank you for telling me.",
    "dom": "rto",
    "why": "Responds to the bereavement and names the fear underneath"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me be honest about the result. Blood you can’t see, that only shows on testing, can still be the first sign of something in the bladder or kidneys that needs sorting. Often the cause is harmless, like the prostate. But at 67, with your smoking and that work, it needs checking properly rather than leaving.",
    "dom": "tasks",
    "why": "Corrects the misconception with honest, proportionate risk"
   },
   {
    "who": "pt",
    "text": "So invisible doesn’t mean harmless."
   },
   {
    "who": "dr",
    "text": "Exactly. I’d like some tests first: a urine sample for infection, a blood count and kidney test, a urine protein test, and a blood pressure check. I’d also suggest a prostate blood test, given the waterworks niggles, and I’ll explain the pros and cons of that. Then a referral to the urology specialists — urgent if the blood count shows raised white cells.",
    "dom": "tasks",
    "why": "Work-up per NICE NG12 (updated April 2026) and NG203 with PSA counselling and referral route"
   },
   {
    "who": "pt",
    "text": "And the camera?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "They’ll usually scan your kidneys and have a look in the bladder with a thin, bendy camera. It’s done with numbing gel, takes a few minutes, and you go home the same day. Most people say the dread was worse than the test. Would it help if I sent you some written information about it?",
    "dom": "tasks",
    "why": "Explains cystoscopy honestly and offers information"
   },
   {
    "who": "pt",
    "text": "It would. I’d rather know what I’m walking into."
   },
   {
    "who": "dr",
    "text": "And you won’t be on your own with this. I’ll ring you with every result and before the appointment if you want. Would you also like details of bereavement support? Many people find it helps, whenever they’re ready.",
    "dom": "rto",
    "why": "Offers continuity and bereavement support as part of the plan"
   },
   {
    "who": "pt",
    "text": "Maybe. I’ll think about it. Alright — let’s do the tests."
   },
   {
    "who": "dr",
    "text": "Thank you. The practice will book the blood tests this week and I’ll send the referral as soon as the results are back. If it’s the urgent route, the aim is for an answer within four weeks.",
    "dom": "gs",
    "why": "Specific timescales and ownership of the next steps"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you ever see blood in your urine, can’t pass water, or get a fever or pain in your side, contact us the same day — that changes things. Otherwise I’ll be in touch with the results.",
    "dom": "gs",
    "why": "Specific escalation triggers"
   },
   {
    "who": "pt",
    "text": "Right you are."
   },
   {
    "who": "dr",
    "text": "Just so I know I’ve explained it well, what will you do next, and why?",
    "dom": "rto",
    "why": "Teach-back to confirm understanding and engagement"
   },
   {
    "who": "pt",
    "text": "Bloods and a sample this week, then the bladder specialists. Because not seeing blood doesn’t mean it’s nothing, especially with my smoking and the old job."
   },
   {
    "who": "dr",
    "text": "That’s it. Coming today was you looking after yourself, and that matters. I’ll speak to you soon.",
    "dom": "rto",
    "why": "Warm close that frames investigation as self-care"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question about his understanding of the result; let him state his wish to leave it without arguing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Bereavement, living alone with the worry, letting his health slide, dread of hospitals, and his past work.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “camera up there” and “had enough of hospitals lately” and explored them to find his wife’s death.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (invisible means harmless); concern (cystoscopy, bad news faced alone); expectation (leave it and recheck later).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "MSU, FBC for white cell count, U&E/eGFR, urine ACR, BP; PSA and DRE considered after counselling given LUTS.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Bladder or renal cancer, prostate, infection, stones, and glomerular disease; asked about visible blood, dysuria, fever, loin pain and weight loss.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Applied NICE NG12 (updated April 2026) precisely: 60 and over with non-visible haematuria plus dysuria or raised white cell count means a suspected cancer pathway referral.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Explained persistent non-visible haematuria needing investigation, with his age, smoking and aromatic amine exposure as risk factors.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Urology referral (urgent if NICE NG12 (updated April 2026) met), cystoscopy explained honestly with written information, nephrology if ACR 30 or more with haematuria.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Offered bereavement support and continuity; addressed his neglect of his own health; LUTS and PSA handled.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Visible blood, retention, fever or loin pain as triggers; named timescales; GP to track results and referral; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Investigations & results"
   ],
   "stem": {
    "name": "Alec Brennan",
    "age": "67 years · male",
    "pmh": [
     "Ex-smoker (35 pack-years)",
     "Occupational history: rubber and dye industry",
     "Recently widowed"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Urine dipstick: blood, confirmed on repeat. No protein. BP normal, eGFR normal. No MSU or FBC on file.",
    "reason": "Video appointment about the urine result. “If I can’t see it, can’t we just leave it?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "Ask what he has made of the result. He wants to leave it. Acknowledge that and agree to decide together."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Visible blood, dysuria, LUTS, fever, loin pain, weight loss; smoking and the rubber and dye work."
    },
    {
     "t": "4–6",
     "h": "ICE and the hidden agenda",
     "d": "The camera fear and “enough of hospitals last year” lead to his wife’s death and fear of facing bad news alone."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Invisible is not harmless. MSU, FBC, eGFR, ACR, BP, PSA with counselling. Urology referral, urgent if NICE NG12 (updated April 2026) is met. Cystoscopy explained honestly."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Same-day triggers, timescales, GP continuity, bereavement support offered. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Agrees to recheck in a few months; never asks about dysuria or occupation; no FBC; dismisses the cystoscopy fear or doesn’t find it; misses the bereavement entirely.",
    "pass": "Explains that non-visible haematuria needs investigation; asks about dysuria and risk factors; arranges MSU, bloods and urology referral; basic safety-net.",
    "exc": "All of the above, plus: applies the NICE NG12 (updated April 2026) criterion precisely with an FBC; names his occupational and smoking risk; counsels on PSA; explains cystoscopy honestly; finds the bereavement and offers continuity and support; teach-back and clear timescales."
   },
   "avoid": [
    {
     "dont": "“It’s only microscopic, so it’s probably nothing.”",
     "instead": "“Blood you can’t see can still be the first sign of something that needs sorting, so we check it properly.”",
     "why": "Endorsing his misconception is the central clinical fail."
    },
    {
     "dont": "“Cystoscopy is a routine procedure, there’s nothing to worry about.”",
     "instead": "“It’s a thin, bendy camera with numbing gel, a few minutes, and home the same day. Most people say the dread was worse.”",
     "why": "Dismissing a fear keeps it alive; a concrete description reduces it."
    },
    {
     "dont": "“You’ll be seen within two weeks.”",
     "instead": "“On the urgent route, the aim is an answer — a diagnosis or an all-clear — within four weeks.”",
     "why": "The Faster Diagnosis Standard is 28 days to diagnosis; promising a two-week appointment is outdated."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Bereavement and self-neglect",
     "t": "Recently widowed and neglecting his health, he dreads facing bad news alone. Continuity with one GP and a clear plan make engagement likelier."
    },
    {
     "h": "Occupational history",
     "t": "Past work in the rubber and dye industry involved aromatic amines, a recognised bladder cancer risk. Many patients never connect old jobs to present risk."
    }
   ],
   "legal": [
    {
     "h": "Industrial injuries",
     "t": "If bladder cancer were diagnosed, cancer of the urinary tract after aromatic amine exposure can be a prescribed disease under the Industrial Injuries Disablement Benefit scheme. Record the occupational history now; raise it only if relevant."
    }
   ],
   "professional": [
    {
     "h": "Informed decision",
     "t": "He may still decline. Explain the specific risks of not investigating, check he understands, record his decision and keep the offer open (GMC Decision making and consent, 2020)."
    },
    {
     "h": "Safety-netting and tracking",
     "t": "Track the MSU, FBC and referral to completion; a suspected cancer referral needs a practice system to confirm the appointment happens."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Cruse Bereavement Support; Fight Bladder Cancer and Macmillan for information if needed; Prostate Cancer UK for balanced PSA information."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Visible haematuria at any point — NICE NG12 (updated April 2026) criteria for 45 and over",
     "Dysuria or raised white cell count with non-visible haematuria at 60 and over — suspected cancer pathway (NICE NG12 (updated April 2026))",
     "Weight loss, loin pain, fever or urinary retention"
    ],
    "psychosocial": [
     "Recently widowed and letting his health slide",
     "Dread of hospitals and specifically of cystoscopy",
     "Fear of facing bad news alone"
    ],
    "ice": [
     "Idea: if he can’t see blood, it can’t be significant",
     "Concern: a “camera up there”; bad news with no one to share it",
     "Expectation: leave it and recheck later"
    ]
   },
   "diagnosis": "Be honest: “Your urine has had blood in it twice that you can’t see. Often there’s a harmless cause, but at 67 with your smoking and your old job, it needs proper checking — invisible doesn’t mean harmless.”",
   "diagnosisLay": "“It’s like a warning light on a car dashboard. The car still drives fine and you can’t see anything wrong, but the light means a mechanic should have a look. Most of the time it’s something small — but you don’t ignore the light.”",
   "management": {
    "reflectIce": "“You’ve been through so much since your wife died, and the thought of tests with bad news at the end, on your own, is a lot. You won’t be on your own — I’ll be with you at each step.”",
    "psychosocial": "Build continuity into the plan: the same GP phones with results, written information about cystoscopy, and an offer of bereavement support.",
    "sharedPlan": [
     "MSU, FBC, U&E/eGFR, urine ACR, BP; PSA and DRE after counselling (LUTS)",
     "Urology referral: suspected cancer pathway if dysuria or raised white cell count (NICE NG12 (updated April 2026)); otherwise routine urology for persistent non-visible haematuria at 40 and over",
     "Nephrology if ACR 30 or more with haematuria (NICE NG203)"
    ],
    "safetyNet": [
     "Same-day contact for visible blood, retention, fever or loin pain",
     "GP tracks results and referral; phone follow-up with results"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Haematuria pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026)",
    "href": "algorithms/haematuria.html"
   },
   {
    "ic": "🗺️",
    "t": "Proteinuria pathway",
    "s": "Visual algorithm · renal triage",
    "href": "algorithms/proteinuria.html"
   },
   {
    "ic": "📋",
    "t": "Male lower urinary tract symptoms",
    "s": "Case walkthrough · PSA counselling",
    "href": "../cases/male-luts.html"
   },
   {
    "ic": "💠",
    "t": "Male LUTS protocol",
    "s": "Assessment · referral",
    "href": "management/male-luts.html"
   }
  ],
  "pitfalls": {
   "intro": "Candidates lose this station by accepting his logic that invisible means harmless, by quoting the wrong NICE NG12 (updated April 2026) threshold, or by pushing tests on a grieving man without finding out why he is reluctant.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Agreeing to recheck the urine in three months.",
     "why": "Persistent non-visible haematuria is already confirmed; delay in a high-risk man is unsafe management.",
     "fix": "“It’s been confirmed twice. At your age and with your history, we check it properly now.”"
    },
    {
     "dom": "tasks",
     "fail": "Quoting the visible haematuria criterion, or referring urgently without checking the white cell count.",
     "why": "NICE NG12 (updated April 2026) for non-visible haematuria requires age 60 and over plus dysuria or a raised white cell count. Precision is marked.",
     "fix": "Ask about dysuria and send an FBC; route the referral by the result."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about occupation or smoking.",
     "why": "Aromatic amine exposure and 35 pack-years are central to his risk and to persuading him.",
     "fix": "Ask about past work and smoking and explain why they matter."
    },
    {
     "dom": "rto",
     "fail": "Pressing on with the plan when he says “I’ve had enough of hospitals lately”.",
     "why": "“Does not respond to cues.” The bereavement is why he is avoiding tests.",
     "fix": "Reflect it back — “Lately?” — and give him space."
    },
    {
     "dom": "rto",
     "fail": "Telling him cystoscopy is nothing to worry about.",
     "why": "Dismissing a specific fear rarely removes it.",
     "fix": "Describe it concretely and offer written information."
    },
    {
     "dom": "gs",
     "fail": "Promising he will be seen within two weeks.",
     "why": "The NHS England Faster Diagnosis Standard is a diagnosis or all-clear within 28 days; a two-week promise is outdated.",
     "fix": "“On the urgent route, the aim is an answer within four weeks.”"
    }
   ]
  }
 },
 "pid-young-woman": {
  "stem": {
   "name": "Demi Carter",
   "age": "23-year-old woman",
   "pmh": [
    "Previous urinary tract infections (patient-reported)"
   ],
   "meds": [
    "No regular medication",
    "No current contraception"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "Patient reports recurrent “water infections” and asks for the same antibiotics as last time.",
   "reason": "Telephone request: “another water infection — wants antibiotics”."
  },
  "knowledge": {
   "guideline": "BASHH UK national guideline for the management of pelvic inflammatory disease (2018, 2019 update) · BASHH statement on partner notification (2012) · BNF · NICE NG253 (Sepsis, 16 and over) · GMC Confidentiality (2017)",
   "summary": "Bilateral lower abdominal pain, abnormal discharge, deep dyspareunia, abnormal bleeding and fever in a 23-year-old with a new partner is pelvic inflammatory disease until proven otherwise. Exclude pregnancy, examine, take swabs and start treatment the same day.",
   "points": [
    {
     "h": "A clinical diagnosis",
     "t": "BASHH 2019: lower abdominal pain, usually bilateral, with deep dyspareunia, abnormal vaginal or cervical discharge, intermenstrual or post-coital bleeding, and fever. Cervical motion and adnexal tenderness on bimanual examination support it. Cystitis does not cause discharge or deep dyspareunia."
    },
    {
     "h": "Pregnancy first",
     "t": "A pregnancy test is needed in every woman of reproductive age with pelvic pain, to exclude ectopic pregnancy and because doxycycline is contraindicated in pregnancy (BNF). Ask about one-sided pain, shoulder-tip pain, dizziness or fainting."
    },
    {
     "h": "Treat without waiting",
     "t": "BASHH 2019 advises a low threshold for empirical treatment because delay increases the risk of tubal damage, infertility, ectopic pregnancy and chronic pelvic pain. Outpatient regimen: ceftriaxone 1 g IM single dose, plus doxycycline 100 mg twice daily and metronidazole 400 mg twice daily for 14 days."
    },
    {
     "h": "Tests alongside",
     "t": "NAAT for chlamydia and gonorrhoea, plus HIV and syphilis testing. Results guide later changes but should not delay treatment. Review at 72 hours is recommended, especially with moderate or severe signs; no improvement needs further assessment."
    },
    {
     "h": "When to admit",
     "t": "Surgical emergency not excluded (ectopic, appendicitis), severe illness, suspected tubo-ovarian abscess, pregnancy, inability to take oral treatment, or no response to outpatient treatment. Assess sepsis risk if she is systemically unwell (NICE NG253)."
    },
    {
     "h": "Partners",
     "t": "BASHH 2019: contact and test partners from the previous 6 months. Advise no sex until she and her partner(s) have completed treatment. Sexual health services can notify partners anonymously (BASHH 2012)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi, is that Demi Carter? It’s Dr Lee from the surgery. Can I just check your date of birth — and are you somewhere you can talk privately?",
    "dom": "rto",
    "why": "Checks identity and privacy before a sensitive telephone conversation"
   },
   {
    "who": "pt",
    "text": "Yeah, I’ve stepped out of work. I think I’ve got another water infection — pain low down and some discharge. Can you just put the antibiotics through like last time? I don’t want a fuss."
   },
   {
    "who": "dr",
    "text": "I’ll help you get sorted today. To make sure the antibiotic is the right one, can I ask a few quick questions first? Then we’ll agree what to do.",
    "dom": "gs",
    "why": "Agrees to help while keeping space to assess"
   },
   {
    "who": "pt",
    "text": "Fine, but quick if that’s okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about the pain — where is it, and how long has it been going on?",
    "dom": "tasks",
    "why": "Open question about the main symptom"
   },
   {
    "who": "pt",
    "text": "A few days. Low down, both sides. Achy."
   },
   {
    "who": "dr",
    "text": "Any burning when you pass urine, or going more often than usual?",
    "dom": "tasks",
    "why": "Tests the UTI hypothesis"
   },
   {
    "who": "pt",
    "text": "Not really, no. It’s more the tummy and the discharge."
   },
   {
    "who": "dr",
    "text": "Has the pain been there during sex at all — especially deep inside?",
    "dom": "tasks",
    "why": "Asks about deep dyspareunia"
   },
   {
    "who": "pt",
    "text": "(Pause.) Yeah, actually. That’s been sore."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. Any bleeding between periods or after sex, and have you felt hot or feverish?",
    "dom": "tasks",
    "why": "Asks about abnormal bleeding and fever"
   },
   {
    "who": "pt",
    "text": "A bit of spotting after sex. And I’ve felt a bit hot and shivery."
   },
   {
    "who": "dr",
    "text": "When was your last period, and could you possibly be pregnant? Any sharp pain on one side, pain in your shoulder tip, or feeling faint?",
    "dom": "tasks",
    "why": "Pregnancy and ectopic red-flag screen"
   },
   {
    "who": "pt",
    "text": "About three weeks ago. I’m not on anything. No, none of those."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "I don’t think this is a water infection, Demi. Pain on both sides, discharge, pain deep during sex and some bleeding points to an infection higher up, in the womb and tubes. Can I ask — has anything been on your mind about what it might be?",
    "dom": "rto",
    "why": "Shares the thinking early and opens the door to her worry"
   },
   {
    "who": "pt",
    "text": "(Long pause.) Is it… something I’ve caught? I’ve got a new partner. We’ve not always used condoms. And I’m not sure I’m the only one he’s seeing."
   },
   {
    "who": "dr",
    "text": "Thank you for trusting me with that — it can’t be easy to say at work. You’re not in any trouble, and there’s no judgement from me. Infections like this are common. What worries you most about it?",
    "dom": "rto",
    "why": "Validates, de-stigmatises and explores further"
   },
   {
    "who": "pt",
    "text": "Whether it’ll mess me up. For having kids, I mean. And having to tell him."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "This is called pelvic inflammatory disease, or PID. It’s often caused by infections like chlamydia or gonorrhoea, but not always. The reason I don’t want to just send a UTI antibiotic is that PID needs a different treatment, and treating it quickly is exactly what protects your fertility.",
    "dom": "tasks",
    "why": "Names PID and links prompt treatment to her fertility concern"
   },
   {
    "who": "pt",
    "text": "So it could affect having kids?"
   },
   {
    "who": "dr",
    "text": "Left untreated, it can damage the tubes. Treated promptly, most women recover fully. That’s why I’d like to start treatment today rather than wait for results.",
    "dom": "rto",
    "why": "Honest about risk, balanced with reassurance"
   },
   {
    "who": "pt",
    "text": "Okay. What do I need to do?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I need to see you today — could you come in at lunchtime or after work? We’ll do a pregnancy test, examine you gently, and take swabs for chlamydia and gonorrhoea. I’d also recommend blood tests for HIV and syphilis — we test everyone, it’s routine. Then you’d have an injection and two courses of tablets for two weeks.",
    "dom": "tasks",
    "why": "Same-day assessment, pregnancy test, swabs, full STI screen and BASHH regimen"
   },
   {
    "who": "pt",
    "text": "Can I get there for half five?"
   },
   {
    "who": "dr",
    "text": "Yes, I’ll book that now. No sex until you and your partner have both finished treatment. And any partners from the last six months need testing and treating too, otherwise it can come straight back. If telling him feels too hard, the sexual health clinic can contact him anonymously for you.",
    "dom": "tasks",
    "why": "Abstinence and partner notification with a supportive option"
   },
   {
    "who": "pt",
    "text": "Anonymously? That would help, honestly."
   },
   {
    "who": "dr",
    "text": "And while you’re in, we can talk about contraception so you’ve got something that suits you.",
    "dom": "tasks",
    "why": "Addresses contraception need"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Before 5:30, if the pain becomes severe or one-sided, you get shoulder-tip pain, feel faint, start vomiting or feel really unwell and shivery, go straight to A&E. Can you tell me the plan back?",
    "dom": "gs",
    "why": "Specific red flags with a clear action, then teach-back"
   },
   {
    "who": "pt",
    "text": "Come in at half five, pregnancy test and swabs, injection and tablets, no sex till we’re both treated, clinic can tell him. A&E if it gets bad."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll call you in three days to check you’re improving and go through the results. You did the right thing ringing.",
    "dom": "gs",
    "why": "Review at 72 hours and closes supportively"
   },
   {
    "who": "pt",
    "text": "Thanks. I’m glad I didn’t just get the UTI tablets."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Checked privacy at work; let her give her own explanation before testing it.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Worked around her being at work, her new relationship and her reluctance to attend.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “not always used condoms”, hesitation about sex and “not sure I’m the only one”, and explored them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (another UTI); concern (an STI, her fertility, telling her partner); expectation (antibiotics by phone, no tests).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Same-day pregnancy test, abdominal and bimanual examination, NAAT swabs for chlamydia and gonorrhoea, HIV and syphilis tests.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "PID versus UTI; ectopic pregnancy; appendicitis; features that would mean admission.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened ectopic red flags and pregnancy; checked for severe illness; clear A&E triggers.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named PID in plain words and explained why a UTI antibiotic would be wrong.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "BASHH 2019 outpatient regimen started the same day after a negative pregnancy test; abstinence; partner notification with anonymous option.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Contraception discussed; fever and systemic features kept under review.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Teach-back, specific A&E red flags, a call at 72 hours and results follow-up.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Demi Carter",
    "age": "23 years · female",
    "pmh": [
     "Previous UTIs (patient-reported)"
    ],
    "meds": [
     "No regular medication",
     "No contraception"
    ],
    "allergy": "NKDA recorded",
    "recent": "⚠ Telephone request for antibiotics for a presumed UTI. LMP about 3 weeks ago; no contraception.",
    "reason": "Telephone call. “It’s just another water infection.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open, privacy",
     "d": "She is at work. Check she can talk before asking about sex."
    },
    {
     "t": "1–4",
     "h": "Test the UTI label",
     "d": "No urinary symptoms. Ask directly: deep pain with sex, bleeding, fever, last period, pregnancy and ectopic red flags."
    },
    {
     "t": "4–6",
     "h": "Open the real worry",
     "d": "Share that this isn’t a UTI and ask what she’s been thinking. The partner, the STI fear and fertility come out."
    },
    {
     "t": "6–8",
     "h": "Name it",
     "d": "PID in plain words. Prompt treatment protects fertility."
    },
    {
     "t": "8–12",
     "h": "Plan and safety-net",
     "d": "Same-day visit: pregnancy test, examination, swabs, BASHH regimen. Partners from the last 6 months, no sex until treated. A&E red flags. Call at 72 hours."
    }
   ],
   "wordPics": {
    "fail": "Prescribes a UTI antibiotic by phone; no pregnancy test; no sexual history; or lectures about condoms; waits for swab results before treating; no partner notification; no safety-net.",
    "pass": "Recognises PID, arranges a pregnancy test and examination, takes swabs, starts appropriate antibiotics, mentions partner treatment and safety-nets.",
    "exc": "All of the above, plus: draws out the worry about the partner without judgement; links prompt treatment to her fertility fear; full STI screen framed as routine; anonymous partner notification offered; abstinence and 6-month look-back explained; ectopic red flags with A&E; teach-back and 72-hour review."
   },
   "avoid": [
    {
     "dont": "\"You should really be using condoms with a new partner.\"",
     "instead": "\"You’re not in any trouble. Infections like this are common, and the important thing is getting you treated.\"",
     "why": "Judgement shuts down disclosure; she is already ashamed."
    },
    {
     "dont": "\"I’ll wait for the swab results and then decide on antibiotics.\"",
     "instead": "\"I’d like to start treatment today, while we wait for the results.\"",
     "why": "BASHH advises a low threshold for empirical treatment; delay risks tubal damage."
    },
    {
     "dont": "\"You’ll need to tell your partner he has an STI.\"",
     "instead": "\"Your partner needs testing too. If telling him feels too hard, the clinic can contact him anonymously.\"",
     "why": "An anonymous option makes partner notification more likely to happen."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work and access",
     "t": "She is calling from work and wants to avoid attending. Offer a time that fits, so the barrier doesn’t become a reason to skip examination."
    },
    {
     "h": "Relationship worry",
     "t": "A new partner she may not trust. Explore whether she feels safe in the relationship if cues arise, without assuming."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality",
     "t": "Sexual health information is confidential. Partner notification is done with her consent and can be anonymous through sexual health services (GMC Confidentiality 2017; BASHH 2012)."
    }
   ],
   "professional": [
    {
     "h": "Remote prescribing",
     "t": "Prescribing a UTI antibiotic by phone without examination or a pregnancy test in this presentation would be unsafe. Arrange face-to-face assessment the same day."
    },
    {
     "h": "Non-judgemental care",
     "t": "Stigma about STIs delays care. Test everyone routinely and say so (GMC Good Medical Practice 2024: treat patients with respect and without discrimination)."
    }
   ],
   "community": [
    {
     "h": "Sexual health services",
     "t": "Local sexual health clinic for testing, partner notification and contraception; many offer online STI testing kits."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "One-sided pain, shoulder-tip pain, dizziness or fainting — possible ectopic pregnancy",
     "Severe pain, vomiting, high fever or feeling very unwell — needs hospital assessment",
     "Pregnancy — changes treatment and needs specialist input"
    ],
    "psychosocial": [
     "Calling from work, wants it quick",
     "New partner, inconsistent condoms, worried he is seeing someone else",
     "Shame about a possible STI and fear of telling him"
    ],
    "ice": [
     "Idea: another water infection",
     "Concern: an STI from her partner; future fertility; the partner conversation",
     "Expectation: antibiotics by phone without tests"
    ]
   },
   "diagnosis": "Be clear: “I don’t think this is a water infection. Pain on both sides, discharge, pain deep during sex and bleeding after sex point to pelvic inflammatory disease — an infection of the womb and tubes.”",
   "diagnosisLay": "“A water infection is in the bladder, at the front. This is an infection that has travelled up through the neck of the womb into the womb and tubes. It needs different antibiotics, and quickly, to protect the tubes.”",
   "management": {
    "reflectIce": "“You’re worried about having children one day. Treating this quickly is exactly how we protect that.”",
    "psychosocial": "Fit the appointment around work; normalise STI testing; offer anonymous partner notification so she doesn’t have to face that alone.",
    "sharedPlan": [
     "Same-day: pregnancy test, examination, NAAT swabs, HIV and syphilis tests",
     "BASHH 2019 regimen: ceftriaxone 1 g IM once, doxycycline 100 mg twice daily and metronidazole 400 mg twice daily for 14 days",
     "No sex until she and partner(s) are treated; partners from last 6 months tested; contraception discussed"
    ],
    "safetyNet": [
     "Severe or one-sided pain, shoulder-tip pain, fainting, vomiting or feeling very unwell — A&E",
     "Review at 72 hours; results follow-up"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Vaginal discharge",
    "s": "Case walkthrough · STI and PID",
    "href": "../cases/vaginal-discharge.html"
   },
   {
    "ic": "🗺️",
    "t": "Pelvic pain in women",
    "s": "Visual algorithm · PID and ectopic",
    "href": "algorithms/pelvic-pain-women.html"
   },
   {
    "ic": "💠",
    "t": "Pelvic inflammatory disease protocol",
    "s": "BASHH regimen · partner notification",
    "href": "management/pelvic-inflammatory-disease.html"
   },
   {
    "ic": "💠",
    "t": "Chlamydia protocol",
    "s": "Testing · treatment · partners",
    "href": "management/chlamydia.html"
   }
  ],
  "pitfalls": {
   "intro": "The patient hands you a diagnosis and a prescription. The station is failed by candidates who accept both, and by those who find PID but never find out why she is so keen to keep it quick.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing nitrofurantoin or trimethoprim over the phone.",
     "why": "“Does not recognise the likely diagnosis.” No dysuria, plus discharge and deep dyspareunia, is not cystitis.",
     "fix": "Ask about urinary symptoms, deep pain with sex, bleeding and fever before accepting the label."
    },
    {
     "dom": "tasks",
     "fail": "No pregnancy test.",
     "why": "Ectopic pregnancy must be excluded, and doxycycline is contraindicated in pregnancy.",
     "fix": "Last period, contraception, one-sided or shoulder-tip pain, fainting — and a test the same day."
    },
    {
     "dom": "tasks",
     "fail": "Waiting for swab results before treating.",
     "why": "BASHH 2019 advises empirical treatment on clinical suspicion because delay risks infertility.",
     "fix": "Swabs and treatment at the same visit."
    },
    {
     "dom": "rto",
     "fail": "Asking about sexual partners in a clipped, checklist way.",
     "why": "“Does not put the patient at ease.” Shame will close her down.",
     "fix": "Check privacy first, then normalise: “We ask everyone, and it’s all confidential.”"
    },
    {
     "dom": "rto",
     "fail": "Missing the fertility worry.",
     "why": "It is the concern underneath; naming it turns her from reluctant to engaged.",
     "fix": "“What worries you most about it?” Then link prompt treatment to protecting fertility."
    },
    {
     "dom": "gs",
     "fail": "No partner plan and a vague safety-net.",
     "why": "Reinfection is likely without partner treatment; non-specific safety-netting is standard failing feedback.",
     "fix": "Partners from the last 6 months, anonymous notification, no sex until both treated; named A&E red flags; 72-hour review."
    }
   ]
  }
 },
 "postnatal-depression": {
  "stem": {
   "name": "Aisha Rahman",
   "age": "30-year-old woman",
   "pmh": [
    "No significant past medical history",
    "First baby 8 weeks ago: forceps delivery"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Delivered 8 weeks ago (forceps). Breastfeeding. Appointment booked at her partner’s request.",
   "reason": "Video consultation. Partner concerned she is “not herself”."
  },
  "knowledge": {
   "guideline": "NICE CG192 Antenatal and postnatal mental health · NICE NG222 Depression in adults (2022, updated December 2025) · NICE NG225 Self-harm (2022)",
   "summary": "Low mood, loss of interest, guilt and detachment from the baby 8 weeks after birth is postnatal depression, not tiredness. Ask directly about thoughts of self-harm and of harm to the baby, screen for psychosis, and deal with the fear of the baby being taken away.",
   "points": [
    {
     "h": "Blues or depression",
     "t": "Baby blues are common in the first days after birth and settle within about 2 weeks. Symptoms lasting longer, with anhedonia, guilt, poor sleep even when the baby sleeps, and poor bonding, indicate a depressive episode."
    },
    {
     "h": "Recognising it",
     "t": "NICE CG192: at contact in the postnatal period, ask the two depression identification questions (feeling down, depressed or hopeless; little interest or pleasure) and consider the EPDS or PHQ-9 as part of a full assessment. Tools support clinical judgement; they do not replace it."
    },
    {
     "h": "Risk: ask directly",
     "t": "Ask about thoughts of self-harm or suicide (plan, intent, means), thoughts of harm to the baby, intrusive thoughts, and her ability to care for the baby. NICE NG225: do not use risk tools or low, medium or high ratings to predict suicide; build a safety plan around her needs."
    },
    {
     "h": "Postpartum psychosis",
     "t": "Sudden onset of confusion, perplexity, mania, delusions or hallucinations is an emergency. NICE CG192: refer to secondary mental health services, preferably the specialist perinatal team, for assessment within 4 hours."
    },
    {
     "h": "Treatment",
     "t": "NICE CG192: for moderate or severe depression in the postnatal period, offer a high-intensity psychological intervention such as CBT; consider an antidepressant if she prefers medication, declines therapy or symptoms have not responded. Discuss breastfeeding: check the BNF breastfeeding advice for the chosen drug (sertraline is often chosen). Dose per BNF."
    },
    {
     "h": "The fear of removal",
     "t": "Fear that social services will take the baby is a common reason mothers hide symptoms. Most mothers with postnatal depression receive support to recover while caring for their baby; a safeguarding referral is made only where there is a risk to the child."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Aisha, I’m Dr Shah. Can you hear me alright, and are you somewhere private? … Thanks for booking. How have things been since the baby arrived?",
    "dom": "rto",
    "why": "Checks privacy on video and opens broadly"
   },
   {
    "who": "pt",
    "text": "Honestly, I don’t know why he made such a fuss. I’m fine, just tired. All new mums are, aren’t they? Can you just tell him I’m okay so he stops hovering?"
   },
   {
    "who": "dr",
    "text": "Being exhausted with a new baby is really common. Your partner sees you every day, and I’d like to hear from you how things really are, with no rush. Is that okay?",
    "dom": "rto",
    "why": "Normalises tiredness while treating the partner’s concern as meaningful, without colluding"
   },
   {
    "who": "pt",
    "text": "I suppose."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Over the last few weeks, how has your mood been most days? And are you still able to enjoy things, even small things?",
    "dom": "tasks",
    "why": "Asks the two core depression questions naturally (NICE CG192)"
   },
   {
    "who": "pt",
    "text": "…Not really. I cry a lot. I don’t enjoy anything. Even when he sleeps, I can’t."
   },
   {
    "who": "dr",
    "text": "That sounds really hard. How long has it been like this? And how are you eating, and concentrating?",
    "dom": "tasks",
    "why": "Establishes duration beyond the blues and biological symptoms"
   },
   {
    "who": "pt",
    "text": "About a month, maybe longer. I’m not hungry. I can’t think straight. I feel like a terrible mother."
   },
   {
    "who": "dr",
    "text": "What makes you feel that?",
    "dom": "rto",
    "why": "Follows the guilt cue rather than reassuring it away"
   },
   {
    "who": "pt",
    "text": "I don’t feel what I’m supposed to feel. Everyone says you fall in love with them straight away. I just feel… far away from him."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. Feeling detached is a common part of postnatal depression, and it isn’t a sign you’re a bad mother. How was the birth for you?",
    "dom": "rto",
    "why": "Normalises detachment and opens the birth experience"
   },
   {
    "who": "pt",
    "text": "Awful. It ended with forceps. I haven’t really talked about it. We haven’t got family nearby."
   },
   {
    "phase": "Risk assessment",
    "clock": "4–7 min",
    "who": "dr",
    "text": "I ask every mum who feels this low some important questions. When things are at their worst, do you ever feel your family would be better off without you, or have thoughts of harming yourself?",
    "dom": "tasks",
    "why": "Asks directly about suicidal thoughts, framed as routine"
   },
   {
    "who": "pt",
    "text": "…Sometimes I think they’d be better off without me. I wouldn’t do anything. I just think it."
   },
   {
    "who": "dr",
    "text": "Thank you for being honest. Have you made any plans, or thought about how? And what keeps you going?",
    "dom": "tasks",
    "why": "Explores plan, intent and protective factors without assuming them"
   },
   {
    "who": "pt",
    "text": "No. No plans. It’s just a feeling that comes."
   },
   {
    "who": "dr",
    "text": "Sometimes mums get frightening thoughts that pop into their head, like something bad happening to the baby, and the thoughts horrify them. Has anything like that happened to you?",
    "dom": "tasks",
    "why": "Asks about intrusive thoughts of harm to the baby in a normalising way"
   },
   {
    "who": "pt",
    "text": "(tearful) Yes. Awful pictures. I’d never hurt him. I haven’t told anyone because… they’d take him away."
   },
   {
    "who": "dr",
    "text": "I’m really glad you told me. Thoughts like that, which frighten you, are a known symptom of postnatal depression and anxiety. They don’t mean you would act on them. Have you had any times where things seemed unreal, or you heard or saw things others didn’t?",
    "dom": "tasks",
    "why": "Separates intrusive thoughts from intent and screens for psychosis"
   },
   {
    "who": "pt",
    "text": "No. Nothing like that."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "Can I come back to what you said about the baby being taken away? That’s a very common fear, and I want to be clear: getting help is what good mums do. Our job is to help you get well while you look after him. Nothing you’ve told me today makes me think he’s unsafe with you.",
    "dom": "rto",
    "why": "Dismantles the hidden fear honestly and directly"
   },
   {
    "who": "pt",
    "text": "Really? I thought if I said anything…"
   },
   {
    "who": "dr",
    "text": "Really. What you’re describing — a month of low mood, no enjoyment, poor sleep and appetite, the guilt and the frightening thoughts — is postnatal depression. It’s an illness, it’s common, and it gets better with treatment.",
    "dom": "tasks",
    "why": "Names the diagnosis clearly with the reasoning"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "There are a few options. Talking therapy for new mums is very effective, and I’d like to refer you to the perinatal mental health team. Some women also take an antidepressant; there are ones we commonly use while breastfeeding. What feels right to you?",
    "dom": "rto",
    "why": "Shares options including breastfeeding-compatible medication and invites her preference"
   },
   {
    "who": "pt",
    "text": "I’d like the talking. I’m not sure about tablets yet."
   },
   {
    "who": "dr",
    "text": "That’s a good start and we can revisit tablets at any time. I’d also like your health visitor to know so she can support you, and would you be happy for your partner to be part of the plan?",
    "dom": "tasks",
    "why": "Builds a support network with her consent"
   },
   {
    "who": "pt",
    "text": "Yes. I think I need to tell him properly."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If the thoughts of not being here get stronger, or you feel you might act on any thought about yourself or the baby, ring us straight away, NHS 111 and choose the mental health option, or 999. I’ll send you the numbers. I’d like to speak again within a week.",
    "dom": "gs",
    "why": "Specific crisis routes and early review"
   },
   {
    "who": "dr",
    "text": "Before we finish, what will you tell your partner about today?",
    "dom": "rto",
    "why": "Teach-back framed around the conversation she needs to have"
   },
   {
    "who": "pt",
    "text": "That it’s postnatal depression, it’s treatable, I’m getting talking therapy, and I’m not a bad mum."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. You came in wanting me to say you were fine. What I’m saying is you’re not alone, and you’ll feel like yourself again.",
    "dom": "rto",
    "why": "Closes by addressing her original request with hope"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question about life since the birth; doesn’t accept “just tired”; creates space for her own account.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Traumatic forceps delivery, no family nearby, breastfeeding, partner relationship, idealised expectations of motherhood.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Partner’s concern, flat affect, “terrible mother” and the hesitation about thoughts are all followed up.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (normal tiredness); concern (the baby will be taken away); expectation (to be told she’s fine).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Two depression identification questions; EPDS or PHQ-9 as a supporting measure; mental state including psychotic features.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Baby blues versus postnatal depression versus postpartum psychosis; considers birth-related trauma and anxiety.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Explicit questions on suicidal thoughts, plan, intent, thoughts of harm to the baby, care of the baby, and psychotic symptoms.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Names postnatal depression with intrusive thoughts, clearly separated from intent to harm.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Perinatal psychological therapy (NICE CG192); antidepressant option compatible with breastfeeding discussed; her choice respected.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Birth trauma acknowledged; health visitor and partner involved with consent; isolation addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Crisis routes (practice, NHS 111 mental health option, 999); review within a week; risk discussion documented.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Aisha Rahman",
    "age": "30 years · female",
    "pmh": [
     "Nil significant",
     "Forceps delivery 8 weeks ago (first baby)"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ 8 weeks postnatal. Breastfeeding. Booked by partner: “not herself, crying all the time”.",
    "reason": "Video consultation. “I’m fine, just tired — all new mums are.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "Check privacy. She opens by minimising. Don’t agree and don’t argue; ask for her own account."
    },
    {
     "t": "1–4",
     "h": "Mood and context",
     "d": "Mood, enjoyment, sleep when the baby sleeps, appetite, concentration, guilt, bonding, the birth, support."
    },
    {
     "t": "4–7",
     "h": "Risk",
     "d": "Suicidal thoughts, plan, intent, protective factors. Intrusive thoughts about the baby. Psychotic features. Care of the baby."
    },
    {
     "t": "7–9",
     "h": "Fear and diagnosis",
     "d": "Name and dismantle the fear of the baby being taken. Then name postnatal depression."
    },
    {
     "t": "9–12",
     "h": "Plan and safety-net",
     "d": "Perinatal therapy, medication option with breastfeeding, health visitor and partner. Crisis numbers. Review within a week. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Reassures that exhaustion is normal and suggests more sleep; never asks about suicidal thoughts or thoughts about the baby; misses the fear of removal; or, having heard about intrusive thoughts, reacts with alarm and mentions social services first.",
    "pass": "Recognises postnatal depression, asks directly about self-harm and harm to the baby, screens for psychosis, offers perinatal therapy and follow-up with a crisis safety-net.",
    "exc": "All of that, plus the intrusive thoughts are received calmly and explained, the fear of removal is named and dismantled, the birth trauma is acknowledged, medication is discussed with breastfeeding in mind, she chooses the plan, and the partner becomes part of the support."
   },
   "avoid": [
    {
     "dont": "“Every new mum feels like this. Try to rest when the baby sleeps.”",
     "instead": "“Tiredness is normal, but not enjoying anything and feeling a terrible mother for a month is more than that. Tell me more.”",
     "why": "Normalising closes the door she is hoping you’ll open."
    },
    {
     "dont": "“Thoughts about harming the baby? I’ll need to involve social services.”",
     "instead": "“Frightening thoughts like that are a known symptom. They don’t mean you would act on them, and I’m glad you told me.”",
     "why": "Horrifying intrusive thoughts are not intent. Leading with safeguarding confirms her worst fear and ends disclosure."
    },
    {
     "dont": "“You can’t take antidepressants while breastfeeding.”",
     "instead": "“Some antidepressants are commonly used while breastfeeding; we can look at that together if you want it.”",
     "why": "Wrong information removes a legitimate option."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Isolation and birth trauma",
     "t": "No family nearby and an unprocessed forceps delivery add to her risk. Ask what practical help exists and who she can talk to."
    },
    {
     "h": "Partner",
     "t": "Her partner noticed first. With her consent, involve him in the plan and the safety-net."
    }
   ],
   "legal": [
    {
     "h": "Safeguarding",
     "t": "The child’s welfare is paramount, but maternal depression alone is not a safeguarding concern. Refer if there is a risk to the baby (for example intent to harm or inability to care). Working Together to Safeguard Children (2023)."
    },
    {
     "h": "Confidentiality",
     "t": "She is an adult with capacity. Share information with her partner only with her agreement, unless there is a serious risk to her or the baby. GMC Confidentiality (2017)."
    }
   ],
   "professional": [
    {
     "h": "Asking about risk",
     "t": "Asking about suicide does not increase risk. Record the questions, her answers, protective factors and the safety plan (NICE NG225)."
    },
    {
     "h": "Joined-up care",
     "t": "Tell the health visitor (with consent) and use the specialist perinatal mental health pathway. Honest explanation of how services work reduces concealment."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "PANDAS Foundation, Mind, the Association for Post Natal Illness; local NHS Talking Therapies with perinatal priority; Samaritans 116 123."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Thoughts of suicide or self-harm, with plan, intent or means",
     "Thoughts of harming the baby with intent, or inability to care for the baby",
     "Sudden confusion, perplexity, mania, delusions or hallucinations: possible postpartum psychosis, assessment within 4 hours (NICE CG192)"
    ],
    "psychosocial": [
     "Traumatic forceps birth she has not talked about",
     "No family nearby; relies on her partner",
     "Shame about not feeling the expected bond; breastfeeding"
    ],
    "ice": [
     "Idea: “I’m just tired like every new mum”",
     "Concern: if she admits it, the baby will be taken away",
     "Expectation: to be told she’s fine so her partner stops worrying"
    ]
   },
   "diagnosis": "“A month of low mood, not enjoying anything, poor sleep and appetite, guilt and frightening thoughts is postnatal depression. It’s common, it’s an illness, and it responds to treatment.”",
   "diagnosisLay": "“Postnatal depression is like a heavy fog that settles after the birth. It changes how you feel about yourself and even the baby, but it isn’t who you are, and it lifts with the right help.”",
   "management": {
    "reflectIce": "“You were worried that telling me would mean losing your baby. It doesn’t. Asking for help is what a caring mum does, and our aim is to get you well at home with him.”",
    "psychosocial": "Acknowledge the birth and the isolation; involve her partner and the health visitor with consent; let her choose between therapy alone and therapy with medication.",
    "sharedPlan": [
     "Referral to the perinatal mental health team and psychological therapy (NICE CG192)",
     "Antidepressant option discussed with breastfeeding in mind; check the BNF; her choice to start with therapy",
     "Health visitor informed; partner involved; review within a week"
    ],
    "safetyNet": [
     "Practice, NHS 111 mental health option or 999 if thoughts of self-harm grow or she fears acting on any thought",
     "Same-day contact for confusion, not sleeping at all, or seeing or hearing things"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Perinatal mental health",
    "s": "Case walkthrough · NICE CG192",
    "href": "../cases/perinatal-mental-health.html"
   },
   {
    "ic": "💠",
    "t": "Postnatal depression protocol",
    "s": "Risk · treatment · breastfeeding",
    "href": "management/postnatal-depression.html"
   },
   {
    "ic": "💠",
    "t": "Postnatal disorders protocol",
    "s": "Blues, depression, psychosis",
    "href": "management/postnatal-disorders.html"
   },
   {
    "ic": "📋",
    "t": "Depression",
    "s": "Case walkthrough · NICE NG222",
    "href": "../cases/depression.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by colluding with “just tired”, by avoiding the risk questions, or by reacting to the intrusive thoughts in a way that confirms her fear. The patterns below reflect recurring SCA feedback.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Agrees it’s normal tiredness and advises rest.",
     "why": "“Did not reach an appropriate working diagnosis.” The duration and features go well beyond the blues.",
     "fix": "Ask the two core questions and about sleep when the baby sleeps, guilt and bonding."
    },
    {
     "dom": "tasks",
     "fail": "Never asks about suicidal thoughts or thoughts about the baby.",
     "why": "“Did not assess risk.” This is the non-negotiable task in any perinatal mood station.",
     "fix": "Ask every risk question directly, framed as routine: self, baby, psychosis, and care of the baby."
    },
    {
     "dom": "rto",
     "fail": "Reacts with visible alarm to the intrusive thoughts and mentions social services.",
     "why": "Confirms her hidden fear and shuts down disclosure. Horrifying intrusive thoughts are a symptom, not intent.",
     "fix": "Thank her, explain what intrusive thoughts are, check intent calmly, and say plainly that help is about keeping them together."
    },
    {
     "dom": "rto",
     "fail": "Tells her “you’re not a terrible mother” and moves on.",
     "why": "Reassurance without exploration misses the detachment and birth trauma behind the guilt.",
     "fix": "“What makes you feel that?” Then name detachment as part of the illness."
    },
    {
     "dom": "tasks",
     "fail": "States that antidepressants can’t be used while breastfeeding, or prescribes without mentioning it.",
     "why": "Either error is unsafe or removes a valid option.",
     "fix": "Offer psychological therapy and discuss an antidepressant, checking the BNF breastfeeding advice, as her choice."
    },
    {
     "dom": "gs",
     "fail": "Closes with “come back if you feel worse”.",
     "why": "Non-specific safety-netting after disclosed suicidal thoughts is a clear failing point.",
     "fix": "Named crisis routes, the psychosis warning signs, review within a week, and teach-back."
    }
   ]
  }
 },
 "prediabetes-fork": {
  "stem": {
   "name": "Wesley Grant",
   "age": "52-year-old man",
   "pmh": [
    "No significant past medical history",
    "Family history: father — type 2 diabetes and an early heart attack"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "NHS Health Check: HbA1c 47 mmol/mol. BMI 33. BP 146/90. Occupation: taxi driver.",
   "reason": "Telephone call about his health-check blood result."
  },
  "knowledge": {
   "guideline": "NICE PH38 (type 2 diabetes: prevention in people at high risk) · NHS Diabetes Prevention Programme · NICE NG136 · NICE NG238",
   "summary": "An HbA1c of 47 mmol/mol is non-diabetic hyperglycaemia: high risk, not “the clear”. Refer to the NHS Diabetes Prevention Programme and deal with the whole cardiovascular risk, not just the sugar.",
   "points": [
    {
     "h": "What the number means",
     "t": "HbA1c 42–47 mmol/mol (or fasting glucose 5.5–6.9 mmol/L) = non-diabetic hyperglycaemia, a high risk of type 2 diabetes (NICE PH38). 48 mmol/mol or above is the diagnostic threshold for diabetes (WHO 2011, international)."
    },
    {
     "h": "Prevention works",
     "t": "Refer to an intensive lifestyle-change programme — in England the NHS Diabetes Prevention Programme, which has face-to-face, remote and digital options. Weight loss, dietary change and activity (at least 150 minutes of moderate activity a week, UK Chief Medical Officers’ guidelines 2019) reduce progression."
    },
    {
     "h": "Monitoring",
     "t": "NICE PH38: offer a blood test (HbA1c or fasting glucose) at least once a year. Frame it as part of an active plan, with a clear route back if he develops symptoms."
    },
    {
     "h": "Metformin",
     "t": "NICE PH38: consider metformin, using clinical judgement, when HbA1c or fasting glucose is getting worse despite (or he cannot take part in) an intensive lifestyle programme, particularly with a BMI over 35. Not first-line here."
    },
    {
     "h": "Blood pressure",
     "t": "Clinic BP of 140/90 or above: offer ambulatory (or home) monitoring to confirm hypertension before treating (NICE NG136). A single reading of 146/90 needs confirming, not ignoring."
    },
    {
     "h": "Cardiovascular risk",
     "t": "Calculate QRISK3 once lipids are available; NICE NG238 recommends offering atorvastatin 20 mg for primary prevention when the 10-year risk is 10% or more. A father with an early heart attack makes a formal risk assessment essential."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Mr Grant? It’s Dr Lee from the surgery. Can I just check your date of birth? … Thank you. Is now a good time to talk for ten minutes or so — are you somewhere you can speak, not driving?",
    "dom": "gs",
    "why": "Identity check and safe setting for a telephone consultation with a driver"
   },
   {
    "who": "pt",
    "text": "Yeah, I’m parked up. The receptionist said my sugar test wasn’t in the diabetes range, so I dodged it! I’m fine then, yeah? We’ll just recheck next year."
   },
   {
    "who": "dr",
    "text": "I’m really glad you rang, and I can hear the relief. You’re right that it isn’t diabetes. I’d like to explain what the number does mean, because it’s actually useful news. Before that, can I ask a bit about you, so the advice fits your life?",
    "dom": "rto",
    "why": "Acknowledges the relief without colluding; sets the agenda"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "You mentioned being a bit worried because of your dad. What happened with him?",
    "dom": "rto",
    "why": "Picks up the cue in his opening call"
   },
   {
    "who": "pt",
    "text": "He had type 2 diabetes. He went downhill with it, had a heart attack young, and he died early. I watched all that."
   },
   {
    "who": "dr",
    "text": "I’m sorry. That’s a hard thing to have watched. Thank you for telling me. Tell me about a typical working day — hours, food, getting about.",
    "dom": "rto",
    "why": "Empathic response, then an open question on context"
   },
   {
    "who": "pt",
    "text": "Long shifts in the cab. Sat down all day, eating on the road. Takeaway most nights because I’m shattered when I get in."
   },
   {
    "who": "dr",
    "text": "That’s honest, thank you. Any thirst, passing a lot of urine, weight loss, or infections that keep coming back?",
    "dom": "tasks",
    "why": "Screens for symptomatic hyperglycaemia"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "And do you smoke, or have you had your cholesterol result from the health check?",
    "dom": "tasks",
    "why": "Gathers cardiovascular risk factors"
   },
   {
    "who": "pt",
    "text": "The nurse went through all that on the form. I don’t remember the cholesterol number."
   },
   {
    "who": "dr",
    "text": "No problem, I’ll look it up from the health check record.",
    "dom": "tasks",
    "why": "Keeps the data neutral and follows up the missing information"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "When the receptionist said it wasn’t diabetes, what went through your mind?",
    "dom": "rto",
    "why": "Explores the meaning behind “I dodged it”"
   },
   {
    "who": "pt",
    "text": "Relief. Honestly, I try not to think about it. It got my dad, and part of me thinks it’ll get me in the end whatever I do."
   },
   {
    "who": "dr",
    "text": "That makes sense after what you saw, and I’m glad you said it, because I don’t think that’s true for you. What would you like to get from this call?",
    "dom": "rto",
    "why": "Names the fatalism and elicits expectations"
   },
   {
    "who": "pt",
    "text": "Just to know I’m okay, really."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s the straight answer. 47 isn’t diabetes — diabetes starts at 48. But it isn’t the all-clear either. It’s what we call pre-diabetes: a warning light on the dashboard. It means a higher chance of diabetes, and the good news is that this is exactly the stage where you can change the outcome.",
    "dom": "tasks",
    "why": "Accurate reframe: non-diabetic hyperglycaemia, not “the clear”"
   },
   {
    "who": "pt",
    "text": "So I haven’t dodged it."
   },
   {
    "who": "dr",
    "text": "Not yet — but you’ve been given the warning. Your dad may never have had one. You have, and what you do next can keep you off his path. That’s in your hands.",
    "dom": "rto",
    "why": "Turns the father’s story into motivation"
   },
   {
    "who": "pt",
    "text": "(pause) I hadn’t thought of it like that."
   },
   {
    "who": "dr",
    "text": "And it isn’t just the sugar. Your blood pressure was a bit high at the check, and your weight adds to the risk. With your dad’s heart attack, I want to look at your heart risk as a whole.",
    "dom": "tasks",
    "why": "Whole cardiovascular risk, not just glucose"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "There’s a free NHS diabetes prevention programme — practical support with food and activity, and you can do it in person, remotely or on an app, which might suit shifts. Would you like me to refer you?",
    "dom": "tasks",
    "why": "NHS DPP referral tailored to his work pattern"
   },
   {
    "who": "pt",
    "text": "An app I could do on breaks. Go on."
   },
   {
    "who": "dr",
    "text": "Great. I’m not going to tell a man who drives all day to join a gym. What’s one change you could actually make this week?",
    "dom": "rto",
    "why": "Negotiates one realistic goal"
   },
   {
    "who": "pt",
    "text": "Cut the takeaways down to a few nights a week. And maybe walk on my break instead of sitting in the car."
   },
   {
    "who": "dr",
    "text": "Both good. I’d also like you to borrow a blood-pressure monitor and take readings at home for a week, so we know the real number, and I’ll work out your heart-risk score from your health-check bloods. If it’s 10% or more we’ll talk about a statin. And we’ll recheck your sugar within the year — sooner if you’re worried.",
    "dom": "tasks",
    "why": "Confirms BP with HBPM, QRISK3 with statin threshold, and HbA1c monitoring"
   },
   {
    "who": "pt",
    "text": "Fair enough. I’m not in trouble with my taxi licence, am I?"
   },
   {
    "who": "dr",
    "text": "No — pre-diabetes doesn’t affect your licence. Getting your blood pressure and sugar under control is also the best way to protect your licence in future.",
    "dom": "gs",
    "why": "Answers the occupational worry accurately"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you notice real thirst, passing lots of urine, or losing weight without trying, ring us sooner, because that can mean the sugar has gone up. Can you tell me what we’ve agreed?",
    "dom": "gs",
    "why": "Hyperglycaemia safety-net and teach-back"
   },
   {
    "who": "pt",
    "text": "Prevention programme on the app, fewer takeaways, walk on breaks, home blood pressure for a week, you check my heart risk, sugar again within the year."
   },
   {
    "who": "dr",
    "text": "Spot on. I’ll book you in with the home readings in a couple of weeks. You rang thinking you were in the clear — you’ve actually got the best kind of warning, one you can act on. Anything else?",
    "dom": "rto",
    "why": "Summarises, books follow-up and closes on agency"
   },
   {
    "who": "pt",
    "text": "No. Cheers, doc. Better that than finding out the hard way."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him say “I dodged it, I’m fine” in full; confirmed a safe place to talk (not driving).",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Long cab shifts, eating on the road, takeaways most nights, sitting all day; how his work shapes what change is realistic.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the passing mention of his father and the fatalism behind “it’ll get me in the end”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (not diabetes means fine); concern (his father’s decline and early death); expectation (to be told he’s okay and can recheck next year).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Home or ambulatory BP; QRISK3 from health-check lipids; HbA1c at least annually; smoking status from the record.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Non-diabetic hyperglycaemia versus undiagnosed diabetes (symptom screen); hypertension to confirm; high cardiovascular risk.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for osmotic symptoms and weight loss; recognised cardiovascular risk from the family history of early MI.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "HbA1c 47 = non-diabetic hyperglycaemia (NICE PH38): high risk, not “the clear”.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "NHS Diabetes Prevention Programme referral (digital option for shifts); one negotiated goal; HBPM; statin discussion if QRISK3 ≥10%.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Addressed BP and weight alongside glucose; metformin not first-line (NICE PH38).",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Annual HbA1c; BP review in two weeks; safety-net for thirst, polyuria and weight loss; licence question answered.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Investigations & results"
   ],
   "stem": {
    "name": "Wesley Grant",
    "age": "52 years · male",
    "pmh": [
     "Nil significant",
     "FH: father — T2DM, early MI"
    ],
    "meds": [
     "Nil"
    ],
    "allergy": "NKDA",
    "recent": "⚠ NHS Health Check: HbA1c 47 mmol/mol (non-diabetic hyperglycaemia range 42–47). BMI 33. BP 146/90 (single reading). No ABPM, no QRISK3 or diabetes-prevention referral on file.",
    "reason": "Phoning about results. “Reception said it’s not diabetes — so I’m fine?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "Check he isn’t driving. He opens with “I dodged it”. Acknowledge the relief without agreeing."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "His father, a cab driver’s day, food on the road, symptom screen, smoking and cholesterol from the record."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "Reach the fatalism: “It got my dad, it’ll get me.” Name it."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "47 = warning light, not diabetes and not the clear. DPP referral (app option), one change, home BP, QRISK3."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Thirst, polyuria, weight loss = ring sooner. Annual HbA1c. BP review booked. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Agrees he’s fine and rechecks next year; or lectures about diet and the gym; ignores the BP of 146/90; never asks about his father.",
    "pass": "Explains non-diabetic hyperglycaemia accurately; refers to the diabetes prevention programme; plans to confirm BP and assess cardiovascular risk; gives lifestyle advice and annual HbA1c.",
    "exc": "All of the above, plus: turns his father’s story into motivation; negotiates one change that fits a cab shift; offers the digital DPP route; explains the statin threshold; answers the licence question; teach-back and a booked follow-up."
   },
   "avoid": [
    {
     "dont": "“Good news — it’s not diabetes, we’ll check again next year.”",
     "instead": "“It isn’t diabetes, but it isn’t the all-clear either — it’s a warning light, and this is the stage you can change.”",
     "why": "Colluding with “I’m fine” misses the entire prevention task."
    },
    {
     "dont": "“You need to lose weight, eat healthily and exercise for 150 minutes a week.”",
     "instead": "“What’s one change you could actually make in the cab this week?”",
     "why": "A list for a man who drives all day earns nothing; a negotiated goal does."
    },
    {
     "dont": "“Diabetes runs in families, so you’re at risk.”",
     "instead": "“Your dad may never have had a warning. You have — and that’s in your hands.”",
     "why": "Stating the risk feeds his fatalism; reframing it builds agency."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Shift work",
     "t": "Long sedentary shifts and meals on the road. Advice must fit the cab: walking on breaks, healthier options on the road, swaps for the nightly takeaway."
    },
    {
     "h": "Family history and fatalism",
     "t": "Watching his father decline and die early makes him avoid the subject. Fatalism predicts disengagement, so address it directly."
    }
   ],
   "legal": [
    {
     "h": "Taxi licensing and DVLA",
     "t": "Non-diabetic hyperglycaemia doesn’t need to be reported. Taxi licensing authorities commonly apply DVLA Group 2 standards; Group 2 drivers are disqualified if resting BP is consistently 180 systolic or more, or 100 diastolic or more. If diabetes develops later, some treatments (such as sulfonylureas or insulin) carry reporting duties — check DVLA guidance then."
    }
   ],
   "professional": [
    {
     "h": "Communicating results",
     "t": "The receptionist’s “not diabetes” was accurate but incomplete. Results in a risk range need a clinician’s explanation; consider how the practice relays borderline results."
    },
    {
     "h": "Shared decision-making",
     "t": "Offer DPP referral, home BP and a statin discussion as choices he makes, and record his decisions."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "NHS Diabetes Prevention Programme (including digital options), NHS Health Check follow-up, community pharmacy BP checks, and Diabetes UK information on reducing risk."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Thirst, polyuria, unintended weight loss or recurrent infections — possible diabetes needing earlier testing",
     "Chest pain or breathlessness on exertion — his cardiovascular risk is high",
     "Very high BP (180/120 or above) with symptoms — same-day assessment"
    ],
    "psychosocial": [
     "Long sedentary cab shifts, eating on the road, takeaways most nights",
     "His father’s decline, early heart attack and death",
     "Fatalism: “it’ll get me in the end whatever I do”"
    ],
    "ice": [
     "Idea: “It’s not diabetes, so I dodged it — I’m fine”",
     "Concern: ending up like his father (unspoken at first)",
     "Expectation: to be told he’s okay and recheck next year"
    ]
   },
   "diagnosis": "Non-diabetic hyperglycaemia (HbA1c 47 mmol/mol) in a man with obesity, a raised clinic BP to be confirmed, and a family history of type 2 diabetes and early MI — high risk of diabetes and cardiovascular disease.",
   "diagnosisLay": "“Think of 47 as an orange warning light on the dashboard. The engine hasn’t broken down — that would be diabetes, at 48 — but the light tells you now, while you can still do something about it.”",
   "management": {
    "reflectIce": "“You said it got your dad and you think it’ll get you. The difference is you’ve had the warning he never got — and that means you can take a different road.”",
    "psychosocial": "Build the plan around cab shifts: fewer takeaways, walks on breaks, the DPP app; agree one change he chooses.",
    "sharedPlan": [
     "Refer to the NHS Diabetes Prevention Programme (digital option)",
     "Home BP for a week to confirm or exclude hypertension (NICE NG136)",
     "QRISK3 from the health-check lipids; offer atorvastatin 20 mg if 10% or more (NICE NG238); HbA1c at least annually (NICE PH38)"
    ],
    "safetyNet": [
     "Thirst, polyuria or weight loss — ring sooner for an earlier HbA1c",
     "BP review with home readings in two weeks; chest pain or severe headache — urgent help"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Type 2 diabetes",
    "s": "Case walkthrough · NICE PH38 prevention",
    "href": "../cases/type-2-diabetes.html"
   },
   {
    "ic": "💠",
    "t": "Type 2 diabetes protocol",
    "s": "Diagnosis thresholds · management",
    "href": "management/type-2-diabetes.html"
   },
   {
    "ic": "💠",
    "t": "Hypertension protocol",
    "s": "ABPM logic · NICE NG136",
    "href": "management/hypertension.html"
   },
   {
    "ic": "💠",
    "t": "Lipids protocol",
    "s": "QRISK3 · statins · NICE NG238",
    "href": "management/hypercholesterolaemia.html"
   },
   {
    "ic": "🧮",
    "t": "QRISK3",
    "s": "Medical Calculators",
    "href": "calculators.html"
   }
  ],
  "pitfalls": {
   "intro": "This telephone station looks easy because the result isn’t diabetes. It is failed by agreeing with him, by lecturing, and by treating the sugar in isolation from his blood pressure and family history.",
   "items": [
    {
     "dom": "tasks",
     "fail": "“Good news, it’s not diabetes. We’ll repeat it in a year.”",
     "why": "HbA1c 47 is non-diabetic hyperglycaemia; NICE PH38 expects referral to an intensive lifestyle programme, not passive rechecking.",
     "fix": "Reframe it as a warning light and refer to the NHS Diabetes Prevention Programme."
    },
    {
     "dom": "tasks",
     "fail": "Discussing only glucose and missing the BP of 146/90 and the father’s early MI.",
     "why": "His cardiovascular risk is the bigger picture; missing it is “management plan incomplete”.",
     "fix": "Home BP to confirm (NICE NG136), QRISK3 with a statin discussion if 10% or more (NICE NG238)."
    },
    {
     "dom": "rto",
     "fail": "Hearing “it got my dad” and moving straight to diet advice.",
     "why": "The fatalism is what stops him changing. Ignoring the cue loses the Relating marks.",
     "fix": "“Your dad may never have had a warning. You have — and that’s in your hands.”"
    },
    {
     "dom": "rto",
     "fail": "Prescribing an idealised lifestyle: gym, home cooking, 150 minutes a week.",
     "why": "It ignores long cab shifts and invites quiet disengagement.",
     "fix": "Ask for one change he will make this week, and offer the DPP digital route that fits breaks."
    },
    {
     "dom": "gs",
     "fail": "Starting a telephone consultation with a taxi driver without checking he isn’t driving.",
     "why": "Safety and confidentiality on the phone are part of Global Skills.",
     "fix": "“Are you somewhere you can talk — not driving?”"
    },
    {
     "dom": "gs",
     "fail": "Ending with “any questions?” and no follow-up booked.",
     "why": "No safety-net and no confirmed plan are standard failing feedback.",
     "fix": "Teach-back, BP review with home readings in two weeks, and symptoms that mean ringing sooner."
    }
   ]
  }
 },
 "raised-prolactin": {
  "stem": {
   "name": "Hannah Reid",
   "age": "29-year-old woman",
   "pmh": [
    "No significant past medical history",
    "Six months of absent periods — bloods arranged at a previous appointment"
   ],
   "meds": [
    "No regular medication on the practice record"
   ],
   "allergy": "No known drug allergies",
   "recent": "Bloods for amenorrhoea: prolactin about 2200 mU/L (lab upper limit about 500). Pregnancy test negative. No TSH, renal function or repeat prolactin yet on file.",
   "reason": "Video consultation to discuss her blood results."
  },
  "knowledge": {
   "guideline": "Endocrine Society hyperprolactinaemia guideline 2011 (international) · Pituitary Society consensus 2023 (international) · BNF",
   "summary": "Amenorrhoea, galactorrhoea and a raised prolactin with a negative pregnancy test is hyperprolactinaemia. Find the cause (drugs, thyroid, kidneys, pituitary) and act quickly on any visual symptoms.",
   "points": [
    {
     "h": "Confirm the result",
     "t": "Repeat the prolactin on a rested sample and ask the lab about macroprolactin, a harmless form that can make the result look high. Always exclude pregnancy first. There is no UK national guideline on hyperprolactinaemia; Endocrine Society 2011 (international) and Pituitary Society 2023 (international) guide the work-up."
    },
    {
     "h": "Look for the common reversible causes",
     "t": "Dopamine-blocking drugs (antipsychotics, metoclopramide, domperidone), primary hypothyroidism (check TSH), chronic kidney disease (check U&E) and pregnancy. Ask about every medicine, including private prescriptions and anything bought online or over the counter, and when each one was started."
    },
    {
     "h": "Pituitary causes",
     "t": "A prolactinoma (micro- under 10 mm, macro- 10 mm or more), or any other pituitary mass pressing on the stalk, can raise prolactin. Headache and visual-field loss (classically bitemporal) suggest a macroadenoma pressing on the optic chiasm. Arrange pituitary MRI and endocrine referral."
    },
    {
     "h": "Visual symptoms change the speed",
     "t": "A suspected field defect needs formal visual-field testing and prompt specialist review. Sudden severe headache with visual loss or eye-movement problems suggests pituitary apoplexy, which is an emergency (Society for Endocrinology pituitary apoplexy guidelines, 2011). NICE NG12 (updated April 2026) has no criterion for hyperprolactinaemia."
    },
    {
     "h": "Treatment and fertility",
     "t": "Drug-induced: change or stop the drug only with the prescriber and a safe psychiatric plan; never stop abruptly. Prolactinoma: a dopamine agonist (cabergoline or bromocriptine; dose and monitoring per BNF) is first-line and usually normalises prolactin and shrinks the tumour. Periods and fertility usually return once prolactin falls."
    },
    {
     "h": "Longer-term effects",
     "t": "Prolonged low oestrogen from hyperprolactinaemia affects bone health. This is another reason to find and treat the cause rather than watch."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Hannah, I’m Dr Lee. Thanks for joining the video. I’ve got your blood results here, but before I say anything, tell me how things have been and what’s been on your mind.",
    "dom": "rto",
    "why": "Opens with her story before the numbers"
   },
   {
    "who": "pt",
    "text": "My periods stopped six months ago. I’ve done about ten pregnancy tests, all negative, and now there’s actual milk coming from my breasts. I googled it and I’m convinced it’s a brain tumour. And the thing I keep coming back to is, does this mean I can’t have kids?"
   },
   {
    "who": "dr",
    "text": "That’s a lot to be carrying, and I’m glad you said both things: the tumour worry and the question about children. I promise we’ll answer both today. Can I ask a few questions first, then explain what the result means and agree a plan?",
    "dom": "gs",
    "why": "Names both concerns and sets a clear agenda"
   },
   {
    "who": "pt",
    "text": "Yes, please."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Apart from the periods and the milk, have you noticed anything else — changes in how you feel, your sex drive, your skin or weight?",
    "dom": "tasks",
    "why": "Open screen for the hyperprolactinaemia picture"
   },
   {
    "who": "pt",
    "text": "My libido’s gone, honestly. I thought that was just stress."
   },
   {
    "who": "dr",
    "text": "That fits with the result, so it’s useful. Any headaches?"
   },
   {
    "who": "pt",
    "text": "A few, on and off. Nothing dramatic."
   },
   {
    "who": "dr",
    "text": "And your eyesight — any blurring, double vision, or bumping into things on one side?",
    "dom": "tasks",
    "why": "Screens for chiasmal compression"
   },
   {
    "who": "pt",
    "text": "Funny you say that. I keep catching my shoulder on door frames. I thought I was just clumsy."
   },
   {
    "who": "dr",
    "text": "I’m really glad you mentioned that. It might be nothing, but it can mean the edges of your vision aren’t picking things up, so I want your side vision tested properly and soon. I’ll come back to why.",
    "dom": "tasks",
    "why": "Acts on the visual-field cue rather than passing over it"
   },
   {
    "who": "dr",
    "text": "Now, this one really matters: can you tell me about every tablet or medicine you take — including anything from a private clinic, online, or the chemist? There’s no judgement at all; some medicines raise this hormone.",
    "dom": "rto",
    "why": "Non-judgemental, complete drug history including private supply"
   },
   {
    "who": "pt",
    "text": "(pause) There is something. A private clinic gave me a tablet for anxiety and sleep. I haven’t told anyone — not even my partner."
   },
   {
    "who": "dr",
    "text": "Thank you for trusting me with that. It could be really important. Do you know what it’s called, and roughly when you started it?",
    "dom": "tasks",
    "why": "Seeks the dopamine-blocker cause and its timing"
   },
   {
    "who": "pt",
    "text": "I’d have to check the box. I started it fairly recently."
   },
   {
    "who": "dr",
    "text": "Could you read me the name or send a photo after this call? Some tablets used for anxiety and sleep block dopamine, and that pushes prolactin up. I’ll also want to line up when you started it with when your periods stopped, because if the periods went first, something else may be going on as well.",
    "dom": "tasks",
    "why": "Explains the mechanism and checks the timeline fits"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "You said the children question is what keeps you up at night. Would you tell me a bit more?",
    "dom": "rto",
    "why": "Returns to the deeper, less-voiced fear"
   },
   {
    "who": "pt",
    "text": "We’d just started talking about trying for a baby. And now I feel broken. I keep thinking I’ve ruined it."
   },
   {
    "who": "dr",
    "text": "That sounds really frightening, and it makes sense you’d feel that way. I can give you some genuinely good news on that in a moment. What were you hoping we’d do today?",
    "dom": "rto",
    "why": "Validates and elicits expectations"
   },
   {
    "who": "pt",
    "text": "Tell me it’s not a tumour. And whether I can still have children."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "Here’s what ties it together. Prolactin is the hormone that makes breast milk. Yours is high, and when it’s high it switches periods off and can cause milk even when you’re not pregnant. So this is one hormone, and the job now is to find out why it’s high.",
    "dom": "tasks",
    "why": "Names the syndrome in plain language"
   },
   {
    "who": "pt",
    "text": "So it could just be the tablet?"
   },
   {
    "who": "dr",
    "text": "It could be — that’s one of the commonest causes and it’s reversible. Other causes I’ll check are an underactive thyroid and the kidneys. The other possibility is a small growth on the pituitary gland at the base of the brain. If it is that, it’s almost always benign, and it’s usually treated with tablets, not surgery.",
    "dom": "tasks",
    "why": "Structured differential; proportionate answer to the tumour fear"
   },
   {
    "who": "pt",
    "text": "But you still want a scan."
   },
   {
    "who": "dr",
    "text": "Yes — because of the headaches and the door frames, I don’t want to guess. And about children: this is one of the most treatable reasons for periods stopping. Once the prolactin comes down — by changing a tablet or treating a small growth — periods usually come back, and fertility usually comes back with them. You are not broken.",
    "dom": "tasks",
    "why": "Honest, evidence-based fertility reassurance"
   },
   {
    "who": "pt",
    "text": "(tearful) I really needed to hear that."
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "So here’s what I suggest. A repeat prolactin, a thyroid test, a kidney test and a fresh pregnancy test. An urgent check of your side vision with an optician or the eye clinic. And a referral to the hormone specialists, who will arrange an MRI scan of the pituitary. How does that sound?",
    "dom": "tasks",
    "why": "Complete, prioritised work-up and referral"
   },
   {
    "who": "pt",
    "text": "Okay. And the anxiety tablet — should I just stop it?"
   },
   {
    "who": "dr",
    "text": "Please don’t stop it suddenly. Once I know its name, I’ll speak to the clinic that prescribed it, and we’ll plan a safe switch if it’s the cause, so your anxiety and sleep are still looked after. Would you be happy for me to contact them?",
    "dom": "gs",
    "why": "Safe medicine plan with consent to share information"
   },
   {
    "who": "pt",
    "text": "Yes, that’s fine. I think I need to tell my partner too."
   },
   {
    "who": "dr",
    "text": "That’s your choice, and you’re welcome to bring your partner to the results appointment if it would help.",
    "dom": "rto",
    "why": "Respects autonomy; offers support"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "One important thing. If you get a sudden, severe headache, or your vision gets worse — blurring, losing the edges, or double vision — that needs same-day help: contact us straight away, or go to A&E if we’re closed. I’ll see you again as soon as the blood results are back. Can you tell me in your own words what we’ve agreed?",
    "dom": "gs",
    "why": "Specific safety-net, follow-up and teach-back"
   },
   {
    "who": "pt",
    "text": "Bloods, eye test, hormone specialist and a scan. Don’t stop the tablet, send you the name. And it’s very likely fixable, including having a baby."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. You came in fearing the worst on two fronts — the likely answer is a treatable hormone problem. Anything else before we finish?",
    "dom": "rto",
    "why": "Summarises and checks for anything unaddressed"
   },
   {
    "who": "pt",
    "text": "No. Thank you — that’s a huge weight off."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question first; let her tell the story of the missed periods, the milk and the negative tests before interpreting the result.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Partner and plans for a baby; anxiety and sleep that led her to a private clinic; what she has not yet told her partner.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the headaches, “bumping into door frames” and the hesitation about medicines, and explored each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (pregnancy or a brain tumour); concern (fertility — “am I broken?”); expectation (to hear it isn’t a tumour and whether she can have children).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Repeat prolactin (ask about macroprolactin), TSH, U&E, pregnancy test; formal visual fields; pituitary MRI through endocrinology.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Drug-induced (dopamine blocker) versus hypothyroidism, renal cause, prolactinoma or another pituitary mass; checks the drug timeline against the amenorrhoea.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for mass effect (headache, visual-field loss) and knew sudden severe headache with visual loss is an emergency.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named hyperprolactinaemia in plain language, with the drug and pituitary as the two main explanations to test.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Referral to endocrinology with MRI; urgent fields; liaised with the private prescriber rather than stopping the drug abruptly; honest fertility information.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Kept her anxiety and sleep covered in the medicine plan; considered the effect of low oestrogen on bone if prolonged.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Results appointment booked; same-day help for sudden headache or worsening vision; partner welcome at follow-up.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Investigations & results"
   ],
   "stem": {
    "name": "Hannah Reid",
    "age": "29 years · female",
    "pmh": [
     "Nil significant",
     "Secondary amenorrhoea — 6 months"
    ],
    "meds": [
     "No repeat medication recorded"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Prolactin ~2200 mU/L (ref upper ~500). Urine hCG negative. TFTs, U&E and repeat prolactin not yet done.",
    "reason": "Booked to discuss results. “Am I pregnant? What is the milk?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "She opens with milk, negative tests, a brain-tumour fear and “can I have kids?”. Let her finish and name both worries back."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Libido, headache, visual fields (“door frames”). Ask about EVERY medicine including private supply — and when it started."
    },
    {
     "t": "5–7",
     "h": "ICE",
     "d": "Reach the fertility fear and the undisclosed tablet. Stay non-judgemental so the drug history is complete."
    },
    {
     "t": "7–10",
     "h": "Explain and plan",
     "d": "One hormone, several causes. Bloods, urgent visual fields, endocrine referral with MRI. Fertility usually recovers. Don’t stop the tablet suddenly."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Sudden severe headache or worsening vision = same-day help. Results appointment. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Jumps to “we need to rule out a brain tumour” without asking about medicines; never finds the private tablet; misses the door-frame cue; leaves the fertility question unanswered; or tells her to stop the tablet today.",
    "pass": "Explains hyperprolactinaemia plainly; takes a full drug history and finds the private tablet; checks TSH, U&E and a repeat prolactin; refers for MRI and endocrinology; addresses fertility; gives a basic safety-net.",
    "exc": "All of the above, plus: acts on the visual-field cue with urgent formal fields; checks the drug timeline against the amenorrhoea; plans a safe switch with the prescriber and her consent; gives clear, warm fertility reassurance tied to her words (“you are not broken”); teach-back and a specific apoplexy safety-net."
   },
   "avoid": [
    {
     "dont": "“It could be a tumour, so we need a brain scan.”",
     "instead": "“This is one hormone that’s high, and the common causes — including a tablet — are very treatable. A scan is part of checking properly.”",
     "why": "Leading with “tumour” confirms her worst fear before you’ve found the cause."
    },
    {
     "dont": "“Just stop the anxiety tablet and we’ll recheck.”",
     "instead": "“Please don’t stop it suddenly — let me speak to the clinic and plan a safe switch.”",
     "why": "Abruptly stopping a psychiatric drug is unsafe, and the prescriber needs to be involved."
    },
    {
     "dont": "“Let’s not worry about fertility until we know more.”",
     "instead": "“Here’s the honest good news: once prolactin comes down, periods and fertility usually come back.”",
     "why": "Deferring her real question loses the Relating marks and leaves her fear untouched."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Plans for a family",
     "t": "She and her partner had just started talking about trying for a baby. The fertility fear is the real agenda; answer it clearly."
    },
    {
     "h": "Anxiety and privacy",
     "t": "Private treatment for anxiety and sleep, kept from her partner and the practice. Shame blocks disclosure, so a non-judgemental tone is what gets the full history."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality",
     "t": "Whether she tells her partner is her decision. Contacting the private prescriber needs her consent, which she gives; record it."
    },
    {
     "h": "DVLA and vision",
     "t": "If formal testing confirms a visual-field defect and she drives, she must meet the DVLA visual-field standard and may need to notify the DVLA. Advise her once the result is known."
    }
   ],
   "professional": [
    {
     "h": "Shared prescribing information",
     "t": "GMC guidance on prescribing (2021) expects prescribers to share information with the patient’s GP. Where that hasn’t happened, liaise with the private clinic, with consent, before changing the medicine."
    },
    {
     "h": "Honesty without alarm",
     "t": "Explain that a pituitary cause must be looked for, and put it in proportion. Don’t promise it isn’t a growth, and don’t lead with “tumour”."
    }
   ],
   "community": [
    {
     "h": "Patient support",
     "t": "The Pituitary Foundation (information and helpline) if a pituitary cause is confirmed; NHS Talking Therapies for anxiety as an alternative or addition to medication."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Visual-field loss (“bumping into door frames”), blurring or double vision — possible chiasmal compression",
     "Sudden severe headache with visual loss or eye-movement problems — possible pituitary apoplexy, an emergency",
     "Symptoms of other pituitary hormone deficiency (profound fatigue, dizziness, cold intolerance)"
    ],
    "psychosocial": [
     "Plans for a baby with her partner, and fear that she is “broken”",
     "Anxiety and poor sleep that led to a private clinic; secrecy and shame about the tablet",
     "Impact of the brain-tumour search on her mood and sleep"
    ],
    "ice": [
     "Idea: “It’s either pregnancy — which it isn’t — or a brain tumour”",
     "Concern: “Does this mean I can’t have kids?”",
     "Expectation: to be told it’s not a tumour, and whether she can still have children"
    ]
   },
   "diagnosis": "Hyperprolactinaemia with a negative pregnancy test, most likely caused by the dopamine-blocking private medicine or a pituitary lesion. Visual symptoms mean a macroadenoma must be checked for urgently.",
   "diagnosisLay": "“Prolactin is the hormone that makes breast milk. Yours is high, and that switches your periods off and causes the milk. It’s like one switch stuck on. Our job is to find what’s holding it on — a tablet, the thyroid, or a small, almost always benign growth on a gland at the base of the brain.”",
   "management": {
    "reflectIce": "“You came in worried about a tumour, but the question keeping you up is children. The honest answer is good news: once we bring the prolactin down, periods and fertility usually come back.”",
    "psychosocial": "Keep the drug history non-judgemental; plan a safe change to the anxiety medicine with the private prescriber so her anxiety and sleep are still treated; leave the decision to tell her partner with her.",
    "sharedPlan": [
     "Repeat prolactin (with macroprolactin), TSH, U&E and pregnancy test",
     "Urgent formal visual-field test; endocrine referral with pituitary MRI",
     "Identify the private tablet and liaise with the prescriber about a safe switch; don’t stop it abruptly"
    ],
    "safetyNet": [
     "Sudden severe headache or worsening vision (blurring, loss of side vision, double vision) — same-day help",
     "Results appointment booked; partner welcome; fertility discussed again once the cause is known"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Hyperprolactinaemia",
    "s": "Visual algorithm · causes and work-up",
    "href": "algorithms/hyperprolactinaemia.html"
   },
   {
    "ic": "📋",
    "t": "Amenorrhoea",
    "s": "Case walkthrough · secondary amenorrhoea",
    "href": "../cases/amenorrhoea.html"
   },
   {
    "ic": "🗺️",
    "t": "Amenorrhoea pathway",
    "s": "Visual algorithm · first-line bloods",
    "href": "algorithms/amenorrhoea.html"
   },
   {
    "ic": "💠",
    "t": "Infertility protocol",
    "s": "Fertility counselling · referral",
    "href": "management/infertility.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed less on endocrinology than on sequencing: jumping to “tumour”, missing the private tablet, and leaving the fertility question unanswered. Each pattern below is common and fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Asking “Are you on any medication?”, hearing “no”, and moving on.",
     "why": "She has no repeat medicines on record, and the private anxiety tablet is the most likely reversible cause. A closed question misses it.",
     "fix": "Ask specifically: “Anything from a private clinic, online, or the chemist — even for sleep?” Then ask when it started and check that against when the periods stopped."
    },
    {
     "dom": "tasks",
     "fail": "Treating “bumping into door frames” as clumsiness and arranging a routine referral only.",
     "why": "Possible visual-field loss suggests chiasmal compression, so the speed of the work-up has to change.",
     "fix": "Arrange urgent formal visual fields, refer to endocrinology for MRI, and safety-net sudden headache with visual loss as an emergency."
    },
    {
     "dom": "rto",
     "fail": "Answering the tumour question in detail and never getting to fertility.",
     "why": "She says fertility is what keeps her up at night. Missing the less-voiced concern is the classic Relating fail.",
     "fix": "Name both at the start and give the fertility answer plainly: periods and fertility usually return once prolactin normalises."
    },
    {
     "dom": "rto",
     "fail": "Reacting to the private tablet with “You shouldn’t get medicines like that privately.”",
     "why": "Shame is why she hid it. A judgemental response closes the history and damages trust.",
     "fix": "“Thank you for telling me — that might be the whole answer.” Then ask her consent to contact the prescriber."
    },
    {
     "dom": "gs",
     "fail": "Jargon: “You’ve got hyperprolactinaemia, probably a microadenoma, we’ll do an MRI and check for macroprolactin.”",
     "why": "Language the patient can’t follow is flagged as poor Global Skills, and “adenoma” sounds like cancer to her.",
     "fix": "“One hormone is high; it switches periods off and makes milk. We’ll find what’s holding the switch on.”"
    },
    {
     "dom": "gs",
     "fail": "Telling her to stop the tablet today, or ending without a plan for it.",
     "why": "Stopping a psychiatric drug abruptly is unsafe, and an unmanaged anxiety relapse is a foreseeable harm.",
     "fix": "“Don’t stop it suddenly. Send me the name, I’ll speak to the clinic, and we’ll switch safely so your anxiety and sleep are still covered.”"
    }
   ]
  }
 },
 "sudden-hearing-loss": {
  "stem": {
   "name": "Damien Ofori",
   "age": "48-year-old man",
   "pmh": [
    "No significant past medical history"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Telephone triage request this morning: “right ear blocked for two days, thinks it is wax, wants syringing or drops”. No previous ear problems on the record.",
   "reason": "Telephone consultation about a blocked right ear."
  },
  "knowledge": {
   "guideline": "NICE NG98 Hearing loss in adults (2018) · ENT UK sudden sensorineural hearing loss guideline (2018) · NICE NG155 Tinnitus (2020)",
   "summary": "Hearing loss in one ear that came on over 3 days or less is sudden sensorineural hearing loss until proven otherwise. It needs to be seen by ENT or the emergency department within 24 hours, not wax treatment.",
   "points": [
    {
     "h": "The NG98 referral rule",
     "t": "NICE NG98: hearing loss that developed suddenly (over 3 days or less) within the past 30 days → refer immediately, to be seen within 24 hours by ENT or the emergency department. Sudden loss more than 30 days ago, or loss worsening over 4 to 90 days → urgent referral, seen within 2 weeks. Damien’s loss is 2 days old: the 24-hour route applies."
    },
    {
     "h": "Why speed matters",
     "t": "ENT UK (2018): oral corticosteroid is the usual first treatment, started by the specialist after audiometry. Their suggested regimen is prednisolone 1 mg/kg/day (maximum 60 mg) for 7 days, then tapered over 5 days; intratympanic steroid is an option or salvage. Benefit is greatest when started early and is limited beyond about 2 weeks."
    },
    {
     "h": "Wax versus nerve",
     "t": "Wax usually builds gradually, often with a past history, and rarely causes tinnitus with unsteadiness. On the phone, ask him to hum: in sensorineural loss the sound is heard louder in the good ear; in conductive loss (wax, fluid) it is louder in the blocked ear. In clinic, Weber lateralises to the good ear and Rinne stays positive in sensorineural loss."
    },
    {
     "h": "Central red flags",
     "t": "Sudden one-sided hearing loss with vertigo can rarely be a posterior-circulation stroke. Ask about facial or limb weakness or numbness, slurred speech, double vision, trouble walking, and sudden severe headache. Any of these → 999 or the emergency department now, not an ENT slot."
    },
    {
     "h": "What follows",
     "t": "Audiometry confirms the loss. NICE NG98: MRI of the internal auditory meatus is considered for asymmetric sensorineural loss (15 dB or more at 2 adjacent frequencies) to look for vestibular schwannoma; the specialist arranges this. NICE NG155 covers ongoing tinnitus support."
    },
    {
     "h": "Don’t make it worse",
     "t": "No syringing, irrigation, olive oil or cotton buds while this is assessed. They lose time and add nothing if the ear canal is clear."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Damien Ofori? It’s Dr Shah from the surgery. Before we start, can I check your date of birth, and are you somewhere you can talk for ten minutes or so?",
    "dom": "gs",
    "why": "Telephone identity check and confirms a safe place to talk"
   },
   {
    "who": "pt",
    "text": "Yes, I’m at home, it’s fine. My right ear’s gone all blocked and muffled, came on over a day or so, and there’s a ringing. I reckon it’s wax. Can you book me for syringing or tell me which drops to get?"
   },
   {
    "who": "dr",
    "text": "Thanks, that’s a clear start. Can you tell me more about how it began, from the moment you first noticed it?",
    "dom": "rto",
    "why": "Open question before accepting the patient’s label"
   },
   {
    "who": "pt",
    "text": "Two days ago. I was in class and it just went muffled over a few hours. The kids on that side sound miles away now. There’s a ringing and it feels full. No pain though."
   },
   {
    "phase": "Focused history",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Have you ever had wax trouble before, or a cold, any discharge, or put anything in the ear?",
    "dom": "tasks",
    "why": "Tests the wax and conductive-cause hypothesis"
   },
   {
    "who": "pt",
    "text": "No, never had wax problems. No cold, no discharge, nothing."
   },
   {
    "who": "dr",
    "text": "Can I try a quick test over the phone? Put the phone down for a second, and hum a low note with your mouth closed. Do you hear the hum louder in the right ear, the left ear, or the same in both?",
    "dom": "tasks",
    "why": "Uses a telephone version of the Weber test to separate conductive from sensorineural loss"
   },
   {
    "who": "pt",
    "text": "Hmm… it’s louder in the left. The good one."
   },
   {
    "who": "dr",
    "text": "That’s really helpful. You mentioned feeling a bit unsteady when you booked. Is the room spinning, or more a general wobbliness?",
    "dom": "tasks",
    "why": "Characterises the dizziness to judge a central cause"
   },
   {
    "who": "pt",
    "text": "Just a bit wobbly. Not spinning. I can walk fine."
   },
   {
    "who": "dr",
    "text": "Any weakness or numbness in your face, arms or legs? Slurred speech, double vision, trouble swallowing, or a sudden bad headache?",
    "dom": "tasks",
    "why": "Screens central and stroke red flags explicitly"
   },
   {
    "who": "pt",
    "text": "No, none of that."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "I noticed you said you’re not too worried, but you rang quickly and you mentioned the unsteadiness. What has been going through your mind about it?",
    "dom": "rto",
    "why": "Picks up the gap between the minimising words and the behaviour"
   },
   {
    "who": "pt",
    "text": "Honestly? My dad had a stroke. When it came on so suddenly and I felt wobbly, it did cross my mind it was something in the brain. I’d rather it was wax."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That’s a very natural fear with your dad’s history, and I’m glad you said it out loud. The questions I just asked are the stroke warning signs, and you don’t have any of them today, which is reassuring.",
    "dom": "rto",
    "why": "Validates the hidden fear and links it to the evidence just gathered"
   },
   {
    "who": "pt",
    "text": "Right. That does help."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s what I think. The hum being louder in your good ear, the sudden start, the ringing and fullness with no wax history, all point away from wax. It sounds like the hearing nerve itself has been affected. That’s called sudden sensorineural hearing loss.",
    "dom": "tasks",
    "why": "States the working diagnosis and the reasoning behind it"
   },
   {
    "who": "pt",
    "text": "The nerve? So syringing won’t help?"
   },
   {
    "who": "dr",
    "text": "No, and it could waste time. This is treated as urgent because the ear specialists can give a course of steroid tablets, and they work best the sooner they start. National guidance says you should be seen within 24 hours by ENT or the emergency department.",
    "dom": "tasks",
    "why": "Applies the NICE NG98 24-hour rule and explains the treatment window"
   },
   {
    "who": "pt",
    "text": "Within 24 hours? I’ve got teaching tomorrow."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I understand, and I know term is busy. But this is about keeping the hearing in that ear. A day or two can make a difference, and missing one day of school is much easier to put right than losing hearing. Could you manage to go today?",
    "dom": "rto",
    "why": "Conveys urgency without alarm and negotiates the barrier"
   },
   {
    "who": "pt",
    "text": "Put like that, yes. I’ll sort cover."
   },
   {
    "who": "dr",
    "text": "Good. I’ll ring the on-call ENT team now and send them a letter with what we’ve discussed. I’ll call you back within the hour to tell you where and when. If I can’t reach them, you should go to the emergency department today.",
    "dom": "tasks",
    "why": "Makes the referral concrete and has a fallback"
   },
   {
    "who": "pt",
    "text": "Okay. Should I put drops in meanwhile?"
   },
   {
    "who": "dr",
    "text": "No drops, no olive oil, nothing in the ear. They’ll do a proper hearing test, and if it confirms nerve hearing loss they’ll discuss steroids and a scan later on to check the nerve pathway. If you need a note for school, I can do that.",
    "dom": "gs",
    "why": "Stops harmful self-treatment and sets expectations for the next steps"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "One important thing. If before you’re seen you get weakness or numbness, a drooping face, slurred speech, double vision, severe spinning or you can’t walk straight, or a sudden severe headache, ring 999 straight away. Please don’t drive while you feel unsteady.",
    "dom": "gs",
    "why": "Specific 999 stroke safety-net in plain language, plus driving advice"
   },
   {
    "who": "pt",
    "text": "Got it."
   },
   {
    "who": "dr",
    "text": "Can you tell me back what the plan is, so I know I’ve explained it clearly?",
    "dom": "rto",
    "why": "Checks understanding with teach-back"
   },
   {
    "who": "pt",
    "text": "It’s not wax, it might be the nerve, I’m being seen today by ENT, you’re ringing me back, nothing in the ear, and 999 if I get stroke signs."
   },
   {
    "who": "dr",
    "text": "Perfect. You rang expecting syringing; what we’re doing instead gives that ear the best chance. Is there anything else you wanted to ask?",
    "dom": "rto",
    "why": "Links the plan to his original request and offers the floor"
   },
   {
    "who": "pt",
    "text": "No, that’s everything. Thanks for taking it seriously."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question about how the blocked feeling began before accepting “it’s wax”; lets him describe the sudden onset in his own words.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Teaching role and the pressure of term; effect of the hearing loss in class; what time off would mean to him.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up the unsteadiness and the quick call despite “not worried”, which leads to his father’s stroke.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (wax); the hidden fear of “something in the brain” linked to his father’s stroke; expectation of syringing or drops.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Telephone hum test (Weber equivalent); plans audiometry via ENT; knows MRI of the internal auditory meatus follows for asymmetric loss (NICE NG98).",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Wax or middle-ear fluid versus sensorineural loss versus a central cause; asks about wax history, discharge, a cold, pain.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asks directly about focal weakness, numbness, speech, double vision, gait, severe vertigo and sudden headache (posterior-circulation stroke).",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Names sudden sensorineural hearing loss and explains why it is not wax.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Seen within 24 hours by ENT or the emergency department (NICE NG98); steroid treatment explained as time-critical; no syringing or drops.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Addresses the stroke fear with evidence; advises not driving while unsteady; offers a fit note for school.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Calls back with the appointment; emergency department fallback; named 999 stroke symptoms; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Damien Ofori",
    "age": "48 years · male",
    "pmh": [
     "Nil significant"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Telephone triage note: “R ear blocked and muffled for 2 days, ringing. Thinks it is wax. Requests syringing or drops.” No prior ear consultations.",
    "reason": "Telephone call about a blocked right ear. “I reckon it’s just wax.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "Identity check for the phone. Let him tell the story; “came on over a day”, the ringing and fullness are the key words."
    },
    {
     "t": "1–4",
     "h": "Wax or nerve",
     "d": "Wax history, discharge, a cold, pain. Hum test on the phone. Character of the unsteadiness. Stroke red flags asked one by one."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "Name the gap: “not worried” but he rang fast. Let the father’s stroke surface and answer it with the negative red flags."
    },
    {
     "t": "6–10",
     "h": "Explain and act",
     "d": "Sudden sensorineural hearing loss, not wax. NICE NG98: seen within 24 hours. Negotiate the school barrier. Ring ENT; emergency department fallback."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Nothing in the ear. 999 stroke symptoms in plain words. No driving while unsteady. Call back with the appointment. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Accepts “wax” and books syringing or suggests olive oil drops; never asks when it started or whether it was sudden; no stroke red flags; misses the father’s stroke entirely; routine audiology referral or “see how it goes for two weeks”.",
    "pass": "Recognises sudden one-sided hearing loss as an emergency, arranges ENT or emergency department assessment within 24 hours, asks about stroke symptoms, advises against syringing and gives a 999 safety-net.",
    "exc": "All of that, plus a telephone hum test to reason it through, surfaces the hidden stroke fear and answers it with the negative red flags, explains the steroid window in plain words, solves the school barrier, calls ENT personally with a fallback, and confirms the plan by teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s probably wax. Use olive oil for two weeks and we’ll book syringing if it doesn’t clear.”",
     "instead": "“This came on suddenly without any wax history, so I want the ear specialists to see you today rather than treating it as wax.”",
     "why": "Two weeks of drops uses up the window when steroid treatment works best."
    },
    {
     "dont": "“No pain, so nothing to worry about.”",
     "instead": "“The lack of pain actually fits with the nerve being affected, which is why I’m taking it seriously.”",
     "why": "Sudden sensorineural loss is usually painless; pain is not the marker of urgency here."
    },
    {
     "dont": "“Don’t worry, it’s definitely not a stroke.”",
     "instead": "“You don’t have any of the stroke warning signs today, which is reassuring; if any appear, ring 999.”",
     "why": "Honest, evidence-based reassurance with a safety-net beats a blanket promise you can’t make on the phone."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work",
     "t": "Teaching with one-sided hearing loss is tiring and can affect classroom control. Time off for urgent assessment is justified; a fit note can be issued if he cannot work."
    },
    {
     "h": "Family history and fear",
     "t": "His father’s stroke shapes how he reads the unsteadiness; the minimising is a way of coping with that fear."
    }
   ],
   "legal": [
    {
     "h": "Driving",
     "t": "Advise him not to drive while unsteady. DVLA (Assessing fitness to drive): sudden disabling dizziness or vertigo that is likely to recur must be notified; mild unsteadiness that settles does not."
    },
    {
     "h": "Equality Act 2010",
     "t": "If hearing does not recover, permanent hearing loss that has a substantial long-term effect can count as a disability. His employer should then consider reasonable adjustments, and Access to Work can help with equipment."
    }
   ],
   "professional": [
    {
     "h": "Remote assessment",
     "t": "On the phone you cannot examine the ear, so reason from the history and a hum test, and act on the risk. Document the red-flag questions and his answers."
    },
    {
     "h": "Closing the loop",
     "t": "Make the referral yourself, give a fallback, and confirm he knows where to go. GMC Good medical practice: follow up on the actions you start."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "RNID for information about sudden hearing loss and tinnitus; Tinnitus UK (formerly the British Tinnitus Association) for ongoing tinnitus support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Sudden onset over 3 days or less within the past 30 days: seen within 24 hours by ENT or the emergency department (NICE NG98)",
     "Focal weakness or numbness, slurred speech, double vision, ataxia, severe vertigo or sudden severe headache: possible posterior-circulation stroke, 999",
     "Hum test louder in the good ear: points to sensorineural rather than conductive loss"
    ],
    "psychosocial": [
     "Teacher mid-term who wants to avoid a fuss",
     "Minimising (“just wax, not worried”) while clearly unsettled",
     "Impact on work and daily life of hearing in one ear"
    ],
    "ice": [
     "Idea: “It’s just wax built up”",
     "Concern: father’s stroke; fear it is “something in the brain”",
     "Expectation: syringing or ear drops"
    ]
   },
   "diagnosis": "“The sudden start, the ringing and fullness, no wax history, and the hum sounding louder in your good ear all point to the hearing nerve being affected, which we call sudden sensorineural hearing loss. It needs specialist assessment today.”",
   "diagnosisLay": "“Think of the ear as a microphone and a cable. Wax is like a cover over the microphone. This sounds more like the cable itself has had a sudden problem, and that needs the specialists quickly because the treatment works best early.”",
   "management": {
    "reflectIce": "“You were hoping this was simple wax, and with your dad’s stroke I completely understand why the suddenness frightened you. You don’t have any stroke warning signs today, and getting you checked properly is the best way to settle that worry.”",
    "psychosocial": "Acknowledge the school pressure and help him make it work: a day off, a fit note if needed, and a clear explanation that the hearing in that ear may depend on acting now.",
    "sharedPlan": [
     "Same-day ENT or emergency department assessment, within 24 hours (NICE NG98); GP phones ENT and calls him back",
     "Audiometry, then specialist-led steroid treatment if confirmed (ENT UK 2018); MRI of the internal auditory meatus later for asymmetric loss",
     "Nothing in the ear meanwhile; no driving while unsteady"
    ],
    "safetyNet": [
     "999 for facial droop, limb weakness or numbness, slurred speech, double vision, severe vertigo or sudden severe headache",
     "Go to the emergency department today if the ENT appointment cannot be arranged"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Hearing loss",
    "s": "Case walkthrough · NICE NG98",
    "href": "../cases/hearing-loss.html"
   },
   {
    "ic": "🗺️",
    "t": "Hearing loss pathway",
    "s": "Visual algorithm · sudden loss",
    "href": "algorithms/hearing-loss.html"
   },
   {
    "ic": "🗺️",
    "t": "Vertigo pathway",
    "s": "Visual algorithm · central red flags",
    "href": "algorithms/vertigo.html"
   },
   {
    "ic": "📋",
    "t": "Tinnitus",
    "s": "Case walkthrough · NICE NG155",
    "href": "../cases/tinnitus.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by accepting the patient’s label. “Wax” plus “no pain” pulls candidates into a routine plan, and the treatment window is lost. The patterns below come from recurring SCA feedback themes.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Books syringing or recommends olive oil drops for two weeks on the patient’s say-so.",
     "why": "“Accepts the patient’s diagnosis without testing it.” Sudden one-sided loss over 3 days or less needs to be seen within 24 hours (NICE NG98).",
     "fix": "Ask about speed of onset and wax history, do the hum test, and say plainly: “I don’t think this is wax.”"
    },
    {
     "dom": "tasks",
     "fail": "Refers to routine audiology or ENT “non-urgently”.",
     "why": "The steroid benefit falls away with time (ENT UK 2018). A routine wait is effectively no treatment.",
     "fix": "Name the time frame: “seen within 24 hours”. Phone ENT, and give the emergency department as the fallback."
    },
    {
     "dom": "tasks",
     "fail": "Never asks about stroke symptoms despite the unsteadiness.",
     "why": "“Did not rule out serious pathology.” Sudden hearing loss with vertigo can rarely be a posterior-circulation stroke.",
     "fix": "Ask each red flag directly: weakness, numbness, speech, double vision, walking, severe spinning, sudden headache."
    },
    {
     "dom": "rto",
     "fail": "Takes “I’m not too worried” at face value.",
     "why": "“Does not identify or explore cues.” The hidden fear about his father’s stroke is the emotional centre of this case.",
     "fix": "Reflect the mismatch: “You say you’re not worried, but you rang quickly. What’s been going through your mind?”"
    },
    {
     "dom": "rto",
     "fail": "Insists on same-day attendance without hearing the school pressure, so he agrees on the phone and doesn’t go.",
     "why": "A plan he doesn’t own is a plan that fails. “Did not negotiate the management plan.”",
     "fix": "Acknowledge the barrier, explain what is at stake in one sentence, and help solve it (cover, fit note)."
    },
    {
     "dom": "gs",
     "fail": "Ends with “ring back if it gets worse”.",
     "why": "Vague safety-netting is a standard failing statement, especially on the telephone.",
     "fix": "Specific 999 symptoms, an emergency department fallback, a promised call-back time, and teach-back."
    }
   ]
  }
 },
 "thyroid-nodule": {
  "stem": {
   "name": "Priya Anand",
   "age": "44-year-old woman",
   "pmh": [
    "Lymphoma in adolescence, treated — including radiotherapy to the neck",
    "No thyroid disease recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "Self-found lump at the front of the neck. Thyroid function tests (practice nurse) normal. Photo sent before the call: a single swelling in the thyroid area, estimated at about 2.5 cm.",
   "reason": "Video consultation to discuss the neck lump and her normal thyroid blood test."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · NICE NG230 (2022) thyroid cancer · British Thyroid Association thyroid cancer guidelines (2014)",
   "summary": "A new thyroid lump needs ultrasound assessment whatever the thyroid function. With past neck radiotherapy and a family history of thyroid cancer, refer on the suspected cancer pathway.",
   "points": [
    {
     "h": "Normal TFTs settle nothing about the lump",
     "t": "Most thyroid nodules, including most thyroid cancers, occur with normal thyroid function. TSH tells you whether the nodule is overactive; it does not tell you whether it is benign. A low TSH points to a possible hyperfunctioning nodule (lower cancer risk); a normal TSH, as here, means the nodule is assessed by imaging."
    },
    {
     "h": "NICE NG12 (updated April 2026) criterion",
     "t": "NICE NG12 (updated April 2026): consider a suspected cancer pathway referral (for an appointment within 2 weeks) for thyroid cancer in people with an unexplained thyroid lump. No red flag is needed to meet this criterion; red flags and risk factors make the referral clearly right."
    },
    {
     "h": "Risk factors that raise concern",
     "t": "Previous radiation to the head or neck (especially in childhood or adolescence), family history of thyroid cancer, extremes of age, male sex, and a nodule that is growing. Her teenage neck radiotherapy for lymphoma is a major risk factor; her aunt’s thyroid cancer adds to it."
    },
    {
     "h": "Red flags to ask about",
     "t": "Rapid growth, a hard or fixed lump, hoarseness or voice change, difficulty swallowing, enlarged neck nodes. Stridor or breathing difficulty with a thyroid mass needs same-day assessment (British Thyroid Association 2014)."
    },
    {
     "h": "How the lump is assessed",
     "t": "NICE NG230 (2022): greyscale ultrasound graded with an established system (in the UK usually the British Thyroid Association U1–U5 score) is the first diagnostic test; ultrasound-guided fine-needle aspiration cytology is offered when the grade meets the threshold, or considered if there is other clinical concern. This happens in the specialist thyroid or neck-lump clinic."
    },
    {
     "h": "Keep it in proportion",
     "t": "Most thyroid nodules are benign, and differentiated thyroid cancer generally has a very good outlook when treated. Present referral as a way to find out, not a verdict. The NHS Faster Diagnosis Standard aims for a diagnosis or all-clear within 28 days of referral."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Priya, I’m Dr Lee. Thanks for sending the photo. Before I say anything about it, tell me about the lump and what you’ve been thinking.",
    "dom": "rto",
    "why": "Starts with her account and her thinking"
   },
   {
    "who": "pt",
    "text": "I found it at the front of my neck and it bobs up and down when I swallow. My friend’s a nurse and said that’s thyroid. The blood test came back normal, so I’m guessing I can just leave it? It’s not painful and it’s not bothering me."
   },
   {
    "who": "dr",
    "text": "That’s really clear, thank you. I’d like to ask a few questions, then explain what the normal blood test does and doesn’t tell us, and then we’ll agree what to do together. Is that all right?",
    "dom": "gs",
    "why": "Signposts the structure of the consultation"
   },
   {
    "who": "pt",
    "text": "Sure. I don’t want a big fuss though."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "I hear that. When did you first notice it, and has it changed since?",
    "dom": "tasks",
    "why": "Asks about onset and growth"
   },
   {
    "who": "pt",
    "text": "A little while ago. Not that I’ve noticed — it just seems to be there."
   },
   {
    "who": "dr",
    "text": "Any change in your voice, hoarseness, trouble swallowing, or any difficulty breathing, especially lying flat?",
    "dom": "tasks",
    "why": "Screens for compressive and nerve red flags"
   },
   {
    "who": "pt",
    "text": "No, none of that."
   },
   {
    "who": "dr",
    "text": "Any other lumps in your neck, or feeling hot, shaky or losing weight?"
   },
   {
    "who": "pt",
    "text": "No. I feel fine."
   },
   {
    "who": "dr",
    "text": "Good. A couple of background questions that matter for thyroid lumps. Have you ever had radiotherapy or any treatment to your head or neck?",
    "dom": "tasks",
    "why": "Asks directly about the key risk factor"
   },
   {
    "who": "pt",
    "text": "(pause) I had lymphoma as a teenager. I had radiotherapy to my neck. But that was years ago."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. And has anyone in your family had thyroid problems or thyroid cancer?",
    "dom": "tasks",
    "why": "Completes the risk-factor history"
   },
   {
    "who": "pt",
    "text": "My aunt had thyroid cancer."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "I noticed you went quiet when you mentioned the lymphoma. What’s it been like, finding a lump, after everything you went through then?",
    "dom": "rto",
    "why": "Picks up the non-verbal cue and opens the survivor fear"
   },
   {
    "who": "pt",
    "text": "(quietly) Honestly? Terrifying. I keep telling myself it’s nothing because the bloods were normal. I can’t go through all that again — not with the kids and work."
   },
   {
    "who": "dr",
    "text": "That makes complete sense. You’ve been through cancer treatment before, so a lump brings all of that back. Hoping the blood test was the answer is a very human thing to do. What would help most from today?",
    "dom": "rto",
    "why": "Validates the avoidance and elicits expectations"
   },
   {
    "who": "pt",
    "text": "I suppose… to know whether I really need to do anything."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "Let me be straight with you. The blood test checks whether the thyroid is making the right amount of hormone. Most thyroid lumps — including the ones we want to check — come with a completely normal blood test. So it doesn’t tell us what the lump is. The way to look at a lump is an ultrasound scan.",
    "dom": "tasks",
    "why": "Corrects the misconception that normal TFTs are reassuring"
   },
   {
    "who": "pt",
    "text": "Oh. I really thought that was it."
   },
   {
    "who": "dr",
    "text": "Most people do. Two things are true at the same time. Most thyroid lumps are benign. And because you had neck radiotherapy and your aunt had thyroid cancer, the right thing is to check this one properly and quickly, not wait and watch.",
    "dom": "tasks",
    "why": "Weights the risk factors while keeping perspective"
   },
   {
    "who": "pt",
    "text": "So you think it’s cancer."
   },
   {
    "who": "dr",
    "text": "No — I don’t know what it is, and nobody can tell from a photo or a blood test. This is precautionary. If it did turn out to be a thyroid cancer, most are very treatable with a good outlook. And you know better than anyone that finding things early is what gives the best result.",
    "dom": "rto",
    "why": "Honest, balanced answer that uses her own experience"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "Here’s what I suggest. I’ll refer you to the specialist thyroid clinic on the urgent suspected-cancer pathway. They’ll scan the lump and, if the scan suggests it, take a tiny sample with a fine needle. The aim is an answer within about four weeks. I’d also like to examine your neck in person, ideally this week.",
    "dom": "tasks",
    "why": "NICE NG12 (updated April 2026) suspected cancer pathway, ultrasound ± FNA, in-person examination"
   },
   {
    "who": "pt",
    "text": "Urgent? That sounds scary. And I’ve got the kids and work."
   },
   {
    "who": "dr",
    "text": "Urgent means quick, not that something bad has been found. It spares you weeks of wondering. What would make the appointments easier to manage?",
    "dom": "rto",
    "why": "Reframes urgency and problem-solves the practical barrier"
   },
   {
    "who": "pt",
    "text": "If I know the dates early, I can sort cover."
   },
   {
    "who": "dr",
    "text": "Then I’ll ask the clinic to contact you directly, and our team will check the referral has gone through. I’ll give you a letter for work if you need one.",
    "dom": "gs",
    "why": "Practical support and a system to track the referral"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "While you wait: if your voice changes, the lump grows quickly, or you have trouble swallowing, contact us that day. Any difficulty breathing or noisy breathing is 999. If you haven’t heard from the clinic within a week, ring us. Can you tell me what you’ll do next?",
    "dom": "gs",
    "why": "Specific safety-net, referral tracking and teach-back"
   },
   {
    "who": "pt",
    "text": "Come in for you to check my neck, wait for the thyroid clinic, and ring if I don’t hear in a week. Ring straight away if my voice or swallowing changes."
   },
   {
    "who": "dr",
    "text": "Exactly. You came hoping to leave it; I think you’re being brave by checking it instead. Is there anything else on your mind?",
    "dom": "rto",
    "why": "Acknowledges her feelings and invites anything unsaid"
   },
   {
    "who": "pt",
    "text": "No. Thanks — I think I needed someone to say it."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question first; let her describe the lump and her reasoning about the normal blood test before correcting anything.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Young family and work pressures; what her teenage cancer treatment meant to her; why “no fuss” matters to her.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the pause about the lymphoma and the insistence the bloods were “fine”, and explored the fear underneath.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (normal bloods mean nothing is wrong); concern (a new cancer, and disruption to family and work); expectation (to be told to leave it).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "In-person examination of the nodule and neck nodes; TSH already normal; thyroid ultrasound with U grading ± FNA through the specialist clinic.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Benign nodule or cyst versus thyroid cancer; overactive nodule excluded by normal TSH; lymphoma recurrence considered through node and systemic questions.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about growth, voice change, dysphagia, breathing difficulty and other lumps; elicited neck radiotherapy and family history of thyroid cancer.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "An unexplained thyroid nodule in a woman with major risk factors: needs urgent assessment, cause not yet known.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Suspected cancer pathway referral (NICE NG12 (updated April 2026)) with ultrasound ± FNA; honest balance of likely benign and treatable; practical help with appointments.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Linked the radiotherapy history to her future care (late effects); offered support for the emotional impact of being a cancer survivor.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Examination booked; referral tracked; same-day contact for voice or swallowing change, 999 for breathing difficulty; ring if no appointment within a week.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Investigations & results"
   ],
   "stem": {
    "name": "Priya Anand",
    "age": "44 years · female",
    "pmh": [
     "Lymphoma in adolescence — treated, including neck radiotherapy"
    ],
    "meds": [
     "No repeat medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ TFTs (nurse) normal. Photo on record: single anterior neck swelling ~2.5 cm, moves on swallowing. No ultrasound requested.",
    "reason": "Booked to discuss neck lump. “The blood test was normal so I can leave it?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "She opens with “the bloods were normal, can I leave it?”. Hear her reasoning before correcting it."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Onset and growth, voice, swallowing, breathing, other lumps. Ask directly about head or neck radiotherapy and family history — she won’t volunteer either."
    },
    {
     "t": "5–7",
     "h": "ICE",
     "d": "Follow the pause after “lymphoma”. Name the survivor fear and the worry about family and work."
    },
    {
     "t": "7–10",
     "h": "Explain and plan",
     "d": "Normal TFTs don’t assess a lump; ultrasound does. Most nodules are benign, but her risk factors mean the suspected cancer pathway. Examine in person."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Voice, swallowing, rapid growth — same day; breathing difficulty — 999. Ring if no appointment in a week. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Agrees the normal thyroid test means the lump can be left; never asks about radiotherapy or family history; or announces “this could be cancer” without balance and moves on; no referral, no safety-net.",
    "pass": "Explains that normal TFTs don’t assess a nodule; elicits the radiotherapy and family history; asks the red-flag questions; refers on the suspected cancer pathway for ultrasound ± FNA; gives a basic safety-net.",
    "exc": "All of the above, plus: follows the cue about the lymphoma and names the survivor fear kindly; balances “most are benign” with “your history means we check”; turns her experience into a reason to act; solves the childcare and work barrier; tracks the referral and checks understanding with teach-back."
   },
   "avoid": [
    {
     "dont": "“Your thyroid test is normal, so that’s reassuring.”",
     "instead": "“The blood test tells us how the thyroid is working, not what the lump is. The scan tells us about the lump.”",
     "why": "Normal TFTs are the rule with thyroid cancer; this sentence is the clinical trap of the station."
    },
    {
     "dont": "“With your history, we need to rule out cancer urgently.”",
     "instead": "“Most thyroid lumps are benign. Because of your neck radiotherapy, we check this one quickly rather than wait.”",
     "why": "Leading with cancer, unbalanced, confirms her worst fear and can drive further avoidance."
    },
    {
     "dont": "“Let’s just keep an eye on it and recheck your bloods in a few months.”",
     "instead": "“I’d like a scan through the specialist thyroid clinic, and I’ll refer you today.”",
     "why": "Watchful waiting with repeat TFTs fails the NICE NG12 (updated April 2026) criterion and her risk profile."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family and work",
     "t": "Young children and a job make appointments hard. Offering early dates, a work letter and help with planning makes attendance more likely."
    },
    {
     "h": "Living after cancer",
     "t": "Survivors of childhood or teenage cancer often carry fear of recurrence. Avoidance (“the bloods were fine”) is a common, understandable response; naming it gently helps."
    }
   ],
   "legal": [
    {
     "h": "Consent and capacity",
     "t": "She has capacity and may decline referral. If she does, the GP’s duty is to make sure the decision is informed — explain the risk clearly, record it, and leave the door open (GMC Decision making and consent, 2020)."
    }
   ],
   "professional": [
    {
     "h": "Safety-netting a referral",
     "t": "Practices should track suspected cancer referrals so that a missed or delayed appointment is noticed. Tell her what to do if she hears nothing."
    },
    {
     "h": "Remote consultation limits",
     "t": "A photo is not an examination. Arrange a face-to-face examination of the nodule and neck nodes rather than deciding on video alone."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "The British Thyroid Foundation for information about thyroid nodules; Macmillan Cancer Support if a cancer is diagnosed, and for survivorship worries."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Rapid growth, a hard or fixed lump, or enlarged neck nodes",
     "Hoarseness or voice change, difficulty swallowing",
     "Stridor or difficulty breathing — same-day assessment",
     "Risk factors: neck radiotherapy in adolescence; aunt with thyroid cancer"
    ],
    "psychosocial": [
     "Teenage lymphoma and its treatment — what that experience means now",
     "Young family and work; fear of disruption",
     "Using the normal blood test as a reason not to look further"
    ],
    "ice": [
     "Idea: “The thyroid blood test was normal, so the lump is nothing”",
     "Concern: a new cancer, and not wanting to go through treatment again",
     "Expectation: to be told she can leave it"
    ]
   },
   "diagnosis": "An unexplained thyroid nodule (about 2.5 cm) in a euthyroid woman with previous neck radiotherapy and a family history of thyroid cancer. Normal TFTs do not help decide its nature; it needs ultrasound grading ± FNA on the suspected cancer pathway.",
   "diagnosisLay": "“The blood test is like checking a factory’s output — it’s making the right amount. It doesn’t tell us about a lump on the building. To look at the lump itself, we use an ultrasound scan.”",
   "management": {
    "reflectIce": "“You were hoping the normal blood test meant you could leave this, and after what you went through as a teenager, I completely understand why. Checking it quickly is the way to stop it hanging over you.”",
    "psychosocial": "Acknowledge the survivor fear; frame the referral as finding out, not a diagnosis; help with the practical side (early dates, a work letter).",
    "sharedPlan": [
     "Suspected cancer pathway referral to the thyroid or neck-lump clinic (NICE NG12 (updated April 2026))",
     "Ultrasound with U grading and FNA if indicated (NICE NG230)",
     "Face-to-face examination of the nodule and neck nodes"
    ],
    "safetyNet": [
     "Voice change, rapid growth or trouble swallowing — contact the practice the same day; breathing difficulty — 999",
     "Ring if no clinic appointment within a week; review once results are back"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Neck lump",
    "s": "Visual algorithm · NICE NG12 (updated April 2026)",
    "href": "algorithms/neck-lump.html"
   },
   {
    "ic": "📋",
    "t": "Hyperthyroidism",
    "s": "Case walkthrough · thyroid nodules",
    "href": "../cases/hyperthyroidism.html"
   },
   {
    "ic": "🗺️",
    "t": "Lymphadenopathy",
    "s": "Visual algorithm · neck nodes",
    "href": "algorithms/lymphadenopathy.html"
   },
   {
    "ic": "📋",
    "t": "Haematological cancers",
    "s": "Case walkthrough · lymphoma late effects",
    "href": "../cases/haematological-cancers.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by agreeing with the patient. The normal thyroid test sounds reassuring, the patient wants to leave it, and the two risk factors only come out if you ask. Each pattern below is common and fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting “the bloods were normal” as reassurance and agreeing to watch the lump.",
     "why": "Most thyroid cancers occur with normal TFTs. NICE NG12 (updated April 2026) says consider a suspected cancer pathway referral for any unexplained thyroid lump.",
     "fix": "Explain what the blood test measures and doesn’t, then refer for ultrasound assessment."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about radiotherapy or family history.",
     "why": "She doesn’t connect her teenage treatment to the lump. Missing it loses the key risk factor that should firm up the referral.",
     "fix": "Ask directly: “Have you ever had radiotherapy to your head or neck? Anyone in the family with thyroid cancer?”"
    },
    {
     "dom": "tasks",
     "fail": "Deciding everything from the photo on a video call.",
     "why": "A photo can’t tell you if a lump is hard, fixed, or has nodes around it.",
     "fix": "Arrange a face-to-face neck examination alongside the referral; don’t delay the referral for it."
    },
    {
     "dom": "rto",
     "fail": "Moving straight past the pause after “I had lymphoma”.",
     "why": "The survivor fear is the hidden agenda; if it isn’t named, her avoidance wins and she may not attend.",
     "fix": "“You went quiet when you mentioned the lymphoma. What’s it like finding a lump after that?”"
    },
    {
     "dom": "rto",
     "fail": "Swinging from reassurance to alarm: “With your history this could well be cancer.”",
     "why": "Unbalanced alarm frightens a survivor into further avoidance and is not accurate — most nodules are benign.",
     "fix": "Say both: most thyroid lumps are benign, and her history is why we check quickly."
    },
    {
     "dom": "gs",
     "fail": "Ending with “the hospital will be in touch” and no plan if they aren’t.",
     "why": "Vague safety-netting and untracked referrals are standard failing feedback.",
     "fix": "Name the red flags, say what to do if she hears nothing in a week, and check understanding with teach-back."
    }
   ]
  }
 }
};
  var M = {"stem": "SCA_STEM", "knowledge": "SCA_KNOWLEDGE", "model": "SCA_MODELS", "scTasks": "SCA_SC_TASKS", "extras": "SCA_EXTRAS", "kb": "SCA_KB", "playbook": "SCA_PLAYBOOK", "links": "SCA_LINKS", "pitfalls": "SCA_PITFALLS"};
  Object.keys(M).forEach(function(k){ window[M[k]] = window[M[k]] || {}; });
  Object.keys(ADD).forEach(function(id){
    var a = ADD[id];
    Object.keys(M).forEach(function(k){ if (a[k] !== undefined) window[M[k]][id] = a[k]; });
  });
  if (!window.SCA_CASES) return;
  var clone = function(x){ return JSON.parse(JSON.stringify(x)); };
  var sum = function(a){ return a.reduce(function(s,x){ return s + x.pts; }, 0); };
  window.SCA_CASES.forEach(function(c){
    var a = ADD[c.id]; if (!a) return;
    if (a.knowledge) c.knowledge = a.knowledge;
    if (a.stem) c.stem = a.stem;
    if (a.model) c.model = a.model;
    if (a.kb) c.kb = a.kb;
    if (a.playbook) c.playbook = a.playbook;
    if (a.links) c.links = a.links;
    if (a.pitfalls) c.pitfalls = a.pitfalls;
    if (a.scTasks && window.SCA_GS_STANDARD && window.SCA_RO_STANDARD) {
      var ro = clone(window.SCA_RO_STANDARD), gs = clone(window.SCA_GS_STANDARD);
      if (c.scorecard && c.scorecard.ro) ro = c.scorecard.ro;
      c.scorecard = { tasks: a.scTasks, ro: ro, gs: gs,
        maxTasks: sum(a.scTasks), maxRo: sum(ro), maxGs: sum(gs),
        total: sum(a.scTasks) + sum(ro) + sum(gs) };
    }
  });
})();
