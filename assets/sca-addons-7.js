/* ============================================================
   Reasoning GP — The Hot Seat: add-on set, batch 7
   Stem, knowledge, model consultation, scorecard tasks, extras,
   knowledge base, playbook, links and examiner pitfalls for
   20 further cases. Loaded after sca-pitfalls.js and
   before sca-practice.js; merges into the existing maps and
   attaches to the case objects exactly as those files do.
   Educational; original content; primary sources cited.
   ============================================================ */
(function(){
  var ADD = {
 "acne-psychological": {
  "stem": {
   "name": "Reece Holloway",
   "age": "19-year-old man",
   "pmh": [
    "Acne vulgaris (face, chest, back)"
   ],
   "meds": [
    "Over-the-counter acne products",
    "Previous topical acne treatment (not effective)"
   ],
   "allergy": "None recorded",
   "recent": "Student. No mental health history recorded. Booked as a video consultation.",
   "reason": "Worsening acne with scarring. Requesting isotretinoin (\"Roaccutane\")."
  },
  "knowledge": {
   "guideline": "NICE NG198 (acne vulgaris, 2021, last updated August 2026) · MHRA Drug Safety Update, October 2023 (isotretinoin) · NICE NG225 (self-harm, 2022) · NICE NG222 (depression in adults, 2022, updated December 2025) · BNF",
   "summary": "Moderate to severe acne with scarring and major psychological distress warrants a step-up now and referral to a consultant dermatologist-led team for isotretinoin. The suicidal thoughts behind \"it’s ruining my life\" must be asked about directly and managed in their own right.",
   "points": [
    {
     "h": "Grade and step up",
     "t": "NICE NG198: moderate to severe acne is 35 or more inflammatory lesions, or 3 or more nodules. Offer a 12-week course from the NG198 options, for example a fixed combination of topical adapalene with benzoyl peroxide plus oral lymecycline or doxycycline. Lymecycline 408 mg once daily (BNF). Never use oral antibiotic monotherapy, and never combine topical and oral antibiotics."
    },
    {
     "h": "When to refer",
     "t": "NICE NG198: refer to a consultant dermatologist-led team if there is acne with scarring, moderate to severe acne that has not responded to a previous course including an oral antibiotic, or acne causing or contributing to persistent psychological distress or a mental health disorder. Isotretinoin is initiated by the specialist team."
    },
    {
     "h": "Mental health referral",
     "t": "NICE NG198: consider referral to mental health services for significant psychological distress or a mental health disorder, including current or past suicidal ideation or self-harm, severe depression or anxiety, or body dysmorphic disorder."
    },
    {
     "h": "Isotretinoin safety",
     "t": "MHRA Drug Safety Update October 2023: assess and monitor mental health and sexual function before and during isotretinoin. The Pregnancy Prevention Programme applies to patients who can become pregnant. Lipids and liver function are monitored by the prescribing team."
    },
    {
     "h": "Asking about suicide",
     "t": "Ask directly about suicidal thoughts, plans and intent; asking does not increase risk. NICE NG225: do not use risk assessment tools or scales to predict suicide or to decide who gets treatment. Focus on needs and agree a safety plan."
    },
    {
     "h": "Scarring and early treatment",
     "t": "Scarring is permanent, so treat effectively and early. Advise against picking, which increases scarring (NICE NG198)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Reece, thanks for joining. You sound like you’ve really had enough. Tell me what’s been going on.",
    "dom": "rto",
    "why": "Open question that acknowledges his distress"
   },
   {
    "who": "pt",
    "text": "My skin is ruining my life. I’ve tried everything from the chemist and it’s worse, and now it’s scarring. I just want the strong tablets, Roaccutane. Can you prescribe it or refer me? I’ll do anything to make it stop."
   },
   {
    "who": "dr",
    "text": "I’m not going to brush this off as just spots. I can hear how much it’s affecting you. I want to understand the skin and how you’re doing in yourself, then we’ll make a plan together, including the tablets you mentioned. Is that okay?",
    "dom": "gs",
    "why": "Validates, sets the agenda and signals the isotretinoin question will be answered"
   },
   {
    "who": "pt",
    "text": "Yeah. Okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Where is the acne, and what’s it like: spots, deeper lumps, marks left behind?",
    "dom": "tasks",
    "why": "Site, lesion type and scarring"
   },
   {
    "who": "pt",
    "text": "Face, chest, back. Big painful ones, and they leave pitted marks."
   },
   {
    "who": "dr",
    "text": "Could you show me on the camera, just your face is fine?",
    "dom": "tasks",
    "why": "Remote visual assessment of severity and scarring"
   },
   {
    "who": "pt",
    "text": "(leans in) There. See the marks on my cheeks?"
   },
   {
    "who": "dr",
    "text": "Thank you. I can see a lot of inflamed spots and some early scarring. What have you tried, and for how long?",
    "dom": "tasks",
    "why": "Treatment history before stepping up"
   },
   {
    "who": "pt",
    "text": "Loads of washes from the chemist, and a gel the doctor gave me before. Did nothing."
   },
   {
    "who": "dr",
    "text": "Any tablets for it so far, like antibiotics?",
    "dom": "tasks",
    "why": "Clarifies whether an oral antibiotic has been tried"
   },
   {
    "who": "pt",
    "text": "No. Just the gel."
   },
   {
    "phase": "Mood and risk",
    "clock": "4–7 min",
    "who": "dr",
    "text": "You said it’s ruining your life. Tell me what that looks like day to day.",
    "dom": "rto",
    "why": "Follows the key cue"
   },
   {
    "who": "pt",
    "text": "I don’t go out. I’ve stopped going to lectures. I can’t stand people looking at me."
   },
   {
    "who": "dr",
    "text": "That sounds really hard. How has your mood been?",
    "dom": "tasks",
    "why": "Screens for depression"
   },
   {
    "who": "pt",
    "text": "Low. Pretty much all the time."
   },
   {
    "who": "dr",
    "text": "Sometimes when people feel this low about how they look, they have thoughts that life isn’t worth living, or of harming themselves. Have you had thoughts like that?",
    "dom": "tasks",
    "why": "Asks directly about suicidal ideation"
   },
   {
    "who": "pt",
    "text": "(long pause) Sometimes. Just fleeting. Like, what’s the point, looking like this."
   },
   {
    "who": "dr",
    "text": "Thank you for trusting me with that. I’m really glad you told me. When those thoughts come, have you ever made any plans, or done anything to hurt yourself?",
    "dom": "tasks",
    "why": "Explores plans, intent and self-harm"
   },
   {
    "who": "pt",
    "text": "No. Nothing like that. They just come and go."
   },
   {
    "who": "dr",
    "text": "What helps when they come, and what makes you want to keep going?",
    "dom": "tasks",
    "why": "Protective factors and coping, without a scoring tool"
   },
   {
    "who": "pt",
    "text": "I suppose I want it to get better. I want my life back."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "That matters, and it’s exactly what we’re going to work on. Your acne is genuinely moderate to severe and it’s scarring, so it needs stronger treatment now. Isotretinoin is the right treatment to consider for you, and it’s started by the skin specialists, so I’m going to refer you today.",
    "dom": "tasks",
    "why": "Validates severity and refers appropriately"
   },
   {
    "who": "pt",
    "text": "Really? I thought you’d say no."
   },
   {
    "who": "dr",
    "text": "No, you meet the criteria. While you wait, I’ll start a 12-week course: a gel with two ingredients plus an antibiotic tablet. That helps now and limits more scarring. Try not to pick, because that makes scarring worse.",
    "dom": "tasks",
    "why": "Evidence-based step-up while awaiting specialist care"
   },
   {
    "who": "dr",
    "text": "One honest thing about isotretinoin: it works very well, but the specialists check your mood before and during it, because it can affect mood in some people. So looking after how you’re feeling now isn’t separate from getting the tablets. It’s part of getting them safely.",
    "dom": "tasks",
    "why": "Explains MHRA mood monitoring and links it to his goal"
   },
   {
    "who": "pt",
    "text": "So if I tell them I’m low, will they refuse?"
   },
   {
    "who": "dr",
    "text": "No. Being honest helps them keep you safe and choose the right plan. It isn’t a reason to be refused, it’s a reason to support you properly.",
    "dom": "rto",
    "why": "Addresses a fear that could lead to concealment"
   },
   {
    "phase": "Shared plan",
    "clock": "9–11 min",
    "who": "dr",
    "text": "For your mood, I’d like to get you some support now rather than waiting for your skin to clear. That could be talking therapy, the university wellbeing service, and a referral to the mental health team given the thoughts you’ve had. What would feel most useful?",
    "dom": "rto",
    "why": "Shared decision on mental health support"
   },
   {
    "who": "pt",
    "text": "Maybe the uni service. I don’t want loads of people knowing."
   },
   {
    "who": "dr",
    "text": "That’s fair. What you tell me stays confidential. The only exception would be if I thought you were in immediate danger. Let’s write a simple plan for when the thoughts get worse: what helps, who you can contact, and the numbers. Samaritans is free on 116 123 any time, and NHS 111 has a mental health option. If you ever feel you might act on the thoughts, call 999 or go to A&E.",
    "dom": "gs",
    "why": "Confidentiality, safety plan and crisis routes"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "I want to speak to you again in a week, not months. Can you tell me the plan back?",
    "dom": "gs",
    "why": "Early follow-up and teach-back"
   },
   {
    "who": "pt",
    "text": "New gel and tablets for 12 weeks, referral for Roaccutane, uni wellbeing, and if the thoughts get bad I ring Samaritans or 111, or 999 if I might do something. And you’ll call me next week."
   },
   {
    "who": "dr",
    "text": "Exactly. You did the right thing pushing for help today.",
    "dom": "rto",
    "why": "Ends with affirmation"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; acknowledged his distress and request without immediately agreeing or refusing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Social withdrawal, missing lectures, student life, confidentiality worries.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Followed \"ruining my life\" and \"I’ll do anything\" to mood and suicidal thoughts.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (isotretinoin cures it), concern (appearance, low mood, fleeting suicidal thoughts), expectation (prescription or referral).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Camera view of lesions and scarring; treatment history; mood assessment; plans, intent and self-harm.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Moderate to severe inflammatory acne with scarring; depression; body dysmorphic concern considered.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked directly about suicidal ideation, plans and self-harm; no scoring tool used to predict risk.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Moderate to severe scarring acne with significant psychological distress and fleeting suicidal ideation.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "12-week NG198 step-up, referral to consultant dermatologist-led team for isotretinoin, mental health support.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Isotretinoin mood and sexual function monitoring explained (MHRA 2023); mental health referral considered (NICE NG198).",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Safety plan, Samaritans, NHS 111, 999 or A&E if at risk; review within a week; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "Children & young people"
   ],
   "stem": {
    "name": "Reece Holloway",
    "age": "19 years · male",
    "pmh": [
     "Acne vulgaris"
    ],
    "meds": [
     "Previous topical acne gel",
     "OTC acne washes"
    ],
    "allergy": "None recorded",
    "recent": "Student. No previous mental health consultations recorded.",
    "reason": "\"My acne’s ruining my life. I want the strong tablets.\""
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "He opens with \"ruining my life\" and \"I’ll do anything\". Note both as cues."
    },
    {
     "t": "1–4",
     "h": "Skin history",
     "d": "Sites, nodules, scarring, camera view, what has been tried, whether an oral antibiotic has been used."
    },
    {
     "t": "4–7",
     "h": "Mood and risk",
     "d": "Daily impact, mood, direct question about suicidal thoughts, plans, self-harm, what keeps him going."
    },
    {
     "t": "7–10",
     "h": "Explain and plan",
     "d": "Severity validated. Refer for isotretinoin; 12-week step-up now; mood monitoring explained; mental health support agreed."
    },
    {
     "t": "10–12",
     "h": "Safety plan and close",
     "d": "Confidentiality, crisis numbers, 999 or A&E if at risk, review in a week, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Dismisses acne as cosmetic, or simply agrees to prescribe or refer for isotretinoin; never asks about mood or suicide; prescribes an oral antibiotic alone; no safety plan or follow-up.",
    "pass": "Grades the acne, starts an NG198 step-up, refers for isotretinoin, asks about mood and suicidal thoughts, and gives crisis contacts with a follow-up.",
    "exc": "All of the above, plus: follows the cue sensitively to the suicidal thoughts and explores plans and protective factors without a tool; links isotretinoin mood monitoring to his goal; addresses his fear that honesty will cost him the tablets; agrees support he will use; arranges review within a week and checks understanding."
   },
   "avoid": [
    {
     "dont": "\"It’s only acne, lots of people your age have it.\"",
     "instead": "\"This is genuinely severe, it’s scarring, and it’s clearly affecting your life. We’ll treat it properly.\"",
     "why": "Minimising acne ignores its psychological impact and loses Relating marks."
    },
    {
     "dont": "\"You’re not suicidal, are you?\"",
     "instead": "\"Have you had thoughts that life isn’t worth living, or of harming yourself?\"",
     "why": "A leading closed question invites denial; an open, direct question gets an honest answer."
    },
    {
     "dont": "\"I can’t refer you for Roaccutane while your mood is low.\"",
     "instead": "\"Being honest about your mood helps the specialists keep you safe. It’s a reason to support you, not to refuse you.\"",
     "why": "Low mood is not a bar to referral, and this framing encourages concealment."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Student life",
     "t": "Missing lectures and withdrawing socially may affect his course. With consent, the university wellbeing service and mitigating circumstances processes can help."
    },
    {
     "h": "Appearance and identity",
     "t": "At 19, visible acne and scarring can drive isolation and low self-worth. Validate this rather than calling it cosmetic."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality",
     "t": "He is an adult with capacity. GMC Confidentiality (2017): keep his information confidential unless disclosure is needed to protect him or others from a risk of death or serious harm; tell him this limit up front."
    }
   ],
   "professional": [
    {
     "h": "Specialist medicines",
     "t": "Isotretinoin is started by a consultant dermatologist-led team (NICE NG198). Refer, and support the MHRA mental health monitoring requirements (Drug Safety Update October 2023)."
    },
    {
     "h": "Risk without tools",
     "t": "NICE NG225: do not use risk scales to predict suicide or to allocate care. Document his thoughts, the absence of plans, protective factors and the safety plan."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Samaritans (116 123), NHS 111 mental health option, university wellbeing service, NHS Talking Therapies self-referral, and British Association of Dermatologists patient information on acne and isotretinoin."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Suicidal thoughts, plans, intent or self-harm",
     "Nodulocystic acne or scarring; systemic upset with ulcerating acne (acne fulminans, same-day dermatology)",
     "Signs of body dysmorphic disorder or severe depression"
    ],
    "psychosocial": [
     "Social withdrawal and missed lectures",
     "Low mood and appearance-related distress",
     "Who he could turn to; confidentiality worries"
    ],
    "ice": [
     "Idea: \"Roaccutane is the cure\"",
     "Concern: his life being ruined by his skin; fleeting thoughts that life isn’t worth it",
     "Expectation: a prescription or referral for isotretinoin today"
    ]
   },
   "diagnosis": "Moderate to severe inflammatory acne with early scarring, not responding to topical treatment, with significant psychological distress, low mood and fleeting suicidal ideation without plans.",
   "diagnosisLay": "\"Your acne is the more severe kind and it’s starting to scar, so it needs stronger treatment and a specialist. It’s also clearly affecting how you feel, and that deserves treatment in its own right.\"",
   "management": {
    "reflectIce": "\"You came for the strong tablets because this is ruining your life. I’m referring you for them, and I also want to look after how you’re feeling, because you matter as much as your skin.\"",
    "psychosocial": "Agree support he will use (university wellbeing, talking therapy, mental health referral); discuss confidentiality and its limits; write a safety plan together.",
    "sharedPlan": [
     "12-week NICE NG198 course, for example topical adapalene with benzoyl peroxide plus oral lymecycline 408 mg once daily (BNF); no picking",
     "Referral to a consultant dermatologist-led team for isotretinoin (scarring and psychological distress)",
     "Mental health support and consider referral to mental health services (NICE NG198); explain MHRA mood monitoring on isotretinoin"
    ],
    "safetyNet": [
     "Safety plan; Samaritans 116 123; NHS 111 mental health option; 999 or A&E if he might act on thoughts",
     "Review within a week; reassess mood at every contact"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Acne",
    "s": "Case walkthrough · NICE NG198",
    "href": "../cases/acne.html"
   },
   {
    "ic": "💠",
    "t": "Acne vulgaris",
    "s": "Protocol · treatment ladder · isotretinoin",
    "href": "management/acne.html"
   },
   {
    "ic": "📋",
    "t": "Depression",
    "s": "Case walkthrough · NICE NG222",
    "href": "../cases/depression.html"
   },
   {
    "ic": "💠",
    "t": "Depression",
    "s": "Protocol · risk and support",
    "href": "management/depression.html"
   }
  ],
  "pitfalls": {
   "intro": "This station looks like a prescribing question and is really a risk assessment. Candidates fail by processing the isotretinoin request, or by trivialising the acne, and miss the suicidal thoughts behind \"it’s ruining my life\".",
   "items": [
    {
     "dom": "tasks",
     "fail": "Agreeing to refer for isotretinoin and closing without asking about mood.",
     "why": "\"Did not identify a significant risk.\" The fleeting suicidal thoughts are the core of the station and part of safe isotretinoin care (MHRA 2023).",
     "fix": "Follow \"ruining my life\" to mood, then ask directly about suicidal thoughts and plans."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing oral doxycycline on its own.",
     "why": "NICE NG198: oral antibiotics are always combined with a topical, never used alone.",
     "fix": "Name an NG198 option: a fixed topical combination plus lymecycline or doxycycline, for 12 weeks."
    },
    {
     "dom": "tasks",
     "fail": "Refusing referral until two more courses have been tried.",
     "why": "NG198 refers scarring and acne causing persistent psychological distress now.",
     "fix": "Refer today and start the step-up while he waits."
    },
    {
     "dom": "rto",
     "fail": "\"It’s only spots\" or \"everyone gets acne at your age\".",
     "why": "\"Dismissive of the patient’s concerns.\" Acne with scarring carries real psychological morbidity.",
     "fix": "Validate first: \"This is genuinely severe, and I can see what it’s doing to your life.\""
    },
    {
     "dom": "rto",
     "fail": "Asking about suicide as a rushed tick-box: \"No thoughts of self-harm?\"",
     "why": "Leading, closed questions invite denial and are flagged as formulaic.",
     "fix": "Lead in gently, ask openly, pause, and thank him for answering."
    },
    {
     "dom": "gs",
     "fail": "Giving crisis numbers with no follow-up date.",
     "why": "Safety-netting without continuity is incomplete for a young man with suicidal thoughts.",
     "fix": "Agree a safety plan and a review within a week, and check understanding."
    },
    {
     "dom": "gs",
     "fail": "Using a risk score to decide he is \"low risk\" and needs nothing more.",
     "why": "NICE NG225 advises against risk tools to predict suicide or to allocate care.",
     "fix": "Base the plan on his needs, his thoughts, and his protective factors."
    }
   ]
  }
 },
 "asylum-destitution": {
  "stem": {
   "name": "Tesfaye Bekele",
   "age": "34-year-old man",
   "pmh": [
    "Newly registered with the practice",
    "Recorded at registration as seeking asylum"
   ],
   "meds": [
    "None on record"
   ],
   "allergy": "None recorded",
   "recent": "Registration completed recently. No previous consultations with the practice and no new-patient health review yet.",
   "reason": "Booked a video appointment for “sleeping tablets”."
  },
  "knowledge": {
   "guideline": "NICE NG116 (post-traumatic stress disorder, 2018) · NICE NG225 (self-harm, 2022) · NICE TA77 (hypnotics for insomnia, 2004) · BNF · NHS England patient registration standard operating principles · NHS (Charges to Overseas Visitors) Regulations 2015 · Immigration and Asylum Act 1999 (asylum support)",
   "summary": "A request for sleeping tablets from a newly registered man seeking asylum is the entry point to probable PTSD and destitution. Confirm his right to free GP care, gently explore trauma symptoms and risk, do not make a hypnotic the answer, refer for trauma-focused therapy, and act on food, money and legal advice today.",
   "points": [
    {
     "h": "He is entitled to be here",
     "t": "Anyone in England can register with a GP practice and receive primary care free of charge. NHS England’s registration principles say practices should not refuse registration because a person cannot show ID, proof of address or immigration status. People with an active asylum claim are also exempt from hospital charges under the NHS (Charges to Overseas Visitors) Regulations 2015."
    },
    {
     "h": "The request is a ticket, not the problem",
     "t": "Poor sleep here sits on nightmares, flashbacks and hypervigilance. Hypnotics do not treat PTSD. NICE TA77 limits Z-drugs to severe insomnia for the shortest time, and the BNF restricts benzodiazepines to short courses because of dependence. NICE NG116 advises against drug treatment, including benzodiazepines, to prevent PTSD."
    },
    {
     "h": "Recognise and treat PTSD",
     "t": "Re-experiencing (nightmares, flashbacks), avoidance, hyperarousal and negative mood after trauma such as torture or a dangerous journey. NICE NG116: trauma-focused CBT for adults; EMDR is recommended for PTSD after non-combat trauma. Consider venlafaxine or an SSRI such as sertraline if he prefers medication. Specialist torture-survivor services add expertise."
    },
    {
     "h": "Stability before therapy",
     "t": "NICE NG116 advises building in extra time to develop trust with people who have complex PTSD, and taking account of the safety and stability of their circumstances, such as housing and money. Hunger and fear of removal make trauma work impossible; addressing them is part of the treatment."
    },
    {
     "h": "Destitution is a clinical issue",
     "t": "Destitute asylum seekers can apply for Home Office asylum support under the Immigration and Asylum Act 1999 (section 98 emergency support, section 95 ongoing support), through the Migrant Help advice line. Those on support can get an HC2 certificate for free prescriptions. Add food bank vouchers, British Red Cross or local refugee charities, and immigration legal advice."
    },
    {
     "h": "Ask about risk, with an interpreter if needed",
     "t": "Ask directly about suicidal thoughts, plans and self-neglect; NICE NG225 advises against risk scales to decide care. Use a professional interpreter rather than friends or family whenever language is a barrier (NHS England interpreting guidance for primary care, 2018)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Bekele, I’m Dr Lee. Before anything else, you asked whether you are allowed to be here. You are. Everyone can register with a GP and see us free of charge, whatever their immigration situation. You did the right thing booking.",
    "dom": "tasks",
    "why": "Answers the entitlement fear first, because it governs everything else"
   },
   {
    "who": "pt",
    "text": "Thank you. I did not know. I am sorry to take your time. I only need something for the sleep."
   },
   {
    "who": "dr",
    "text": "You’re not taking anyone’s time — this appointment is yours. I do want to help with the sleep. Could we spend a few minutes on how things are for you, and then decide together what will actually help? Is it all right to talk in English, or would an interpreter make it easier?",
    "dom": "gs",
    "why": "Sets a shared agenda and offers an interpreter"
   },
   {
    "who": "pt",
    "text": "English is okay. Yes, we can talk."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about the nights. What happens when you try to sleep?",
    "dom": "rto",
    "why": "Open question that follows his agenda before widening it"
   },
   {
    "who": "pt",
    "text": "I lie down and my mind does not stop. When I sleep, the bad dreams come. I wake and I am wet, my heart is fast. Then I stay awake until morning."
   },
   {
    "who": "dr",
    "text": "That sounds exhausting and frightening. You don’t have to tell me what the dreams are about. Can I ask — during the day, do memories ever push in when you don’t want them, as if it’s happening again?",
    "dom": "tasks",
    "why": "Screens for re-experiencing without asking for trauma content"
   },
   {
    "who": "pt",
    "text": "Yes. A sudden noise, and I am back there. I do not go where there are many people. I watch the door always."
   },
   {
    "who": "dr",
    "text": "Thank you for trusting me with that. Flashbacks, avoiding crowds, always being on guard — the mind often reacts this way after very frightening experiences. We can go at your pace today; you choose what to share.",
    "dom": "rto",
    "why": "Validates, names the pattern, and gives him control over disclosure"
   },
   {
    "who": "pt",
    "text": "Some things I cannot say yet."
   },
   {
    "who": "dr",
    "text": "That’s completely fine. Can I ask about the everyday things — are you managing for food, and somewhere safe to stay?",
    "dom": "tasks",
    "why": "Moves gently to the social emergency that he will not raise himself"
   },
   {
    "who": "pt",
    "text": "I… sometimes I do not eat. One meal, some days nothing. I do not want to ask. I do not want to be a burden to anyone."
   },
   {
    "who": "dr",
    "text": "I’m really glad you told me. Hunger isn’t something to be ashamed of, and it matters to your health as much as your sleep. Do you know what support you can get while your claim is being decided?",
    "dom": "rto",
    "why": "Removes shame and checks his knowledge before advising"
   },
   {
    "who": "pt",
    "text": "No. I am not sure what I am allowed. I am afraid if I ask, they will think badly of me, or send me away."
   },
   {
    "who": "dr",
    "text": "When the nights are at their worst, do you ever feel life isn’t worth living, or have thoughts of harming yourself?",
    "dom": "tasks",
    "why": "Asks directly about suicide risk in plain words"
   },
   {
    "who": "pt",
    "text": "Sometimes I think it would be easier to sleep and not wake. But I would not do anything. I still have hope."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Thank you for being honest — that took courage. I’m glad you have hope. If those thoughts ever get stronger or you start to plan anything, I need you to contact us or the crisis line straight away. Will you do that?",
    "dom": "gs",
    "why": "Clarifies passive ideation, protective factors and a crisis agreement"
   },
   {
    "who": "pt",
    "text": "Yes, I will."
   },
   {
    "who": "dr",
    "text": "You came hoping for sleeping tablets. What did you imagine they would do for you?",
    "dom": "rto",
    "why": "Explores his idea and expectation rather than refusing outright"
   },
   {
    "who": "pt",
    "text": "Just to stop the thinking. To rest. So I can be strong for my case."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "That makes complete sense. Here is my honest view. The sleep problem looks like part of something bigger — the nightmares, the flashbacks and being on guard fit a condition called post-traumatic stress. It’s common after what people fleeing danger go through, and it is treatable.",
    "dom": "tasks",
    "why": "Gives a clear working diagnosis in plain language"
   },
   {
    "who": "pt",
    "text": "It has a name? I thought I was becoming weak in the mind."
   },
   {
    "who": "dr",
    "text": "It has a name, and it’s a normal reaction to abnormal events, not weakness. Strong sleeping tablets don’t treat it. They can become hard to stop and make you feel foggy, which matters when you need a clear head for your case. The treatment that works best is a talking therapy that focuses on the trauma, with people trained in this.",
    "dom": "tasks",
    "why": "Explains why hypnotics are not the answer and what does work"
   },
   {
    "who": "pt",
    "text": "But I will have to talk about everything?"
   },
   {
    "who": "dr",
    "text": "Only when you feel ready, and with someone skilled. There are services that specialise in helping people who have survived torture or persecution — they go at your pace. If you’d prefer, a daily medicine for the nightmares and anxiety is also an option we can talk about next time.",
    "dom": "rto",
    "why": "Addresses the fear of forced disclosure and offers choice"
   },
   {
    "who": "pt",
    "text": "Okay. That sounds better than I thought."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "For today, I’d like to do three things. First, a referral for trauma support, including a specialist service for survivors. Second — and this can’t wait — help with food and money: there’s Home Office support for people seeking asylum who have nothing, and a free advice line, Migrant Help, that helps you apply. I can give you a food bank voucher today and the details of a refugee charity near you.",
    "dom": "tasks",
    "why": "Acts on destitution as part of the medical plan"
   },
   {
    "who": "pt",
    "text": "They will not think I am taking what is not mine?"
   },
   {
    "who": "dr",
    "text": "No. This support exists for exactly your situation. Asking for it is not being a burden. I’d also suggest free immigration legal advice — a charity can point you to it. And if you get asylum support you can apply for a certificate that makes prescriptions free.",
    "dom": "tasks",
    "why": "Links him to legal advice and the HC2 route"
   },
   {
    "who": "dr",
    "text": "For the nights themselves: a regular getting-up time, no caffeine after midday, and if you wake from a nightmare, get up, put a light on, name where you are and the date, and ground yourself before lying back down. Does that feel doable?",
    "dom": "gs",
    "why": "Practical non-drug sleep advice he can use tonight, then checks acceptability"
   },
   {
    "who": "pt",
    "text": "Yes. I can try this."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Before we finish — what will you do tomorrow as your first step?",
    "dom": "rto",
    "why": "Teach-back that checks the plan has landed"
   },
   {
    "who": "pt",
    "text": "Call the number, Migrant Help. Go to the food place with your paper. Wait for the trauma service letter."
   },
   {
    "who": "dr",
    "text": "Exactly right. If the dark thoughts get stronger, or you can’t keep yourself safe, call 999 or NHS 111 and choose the mental health option. I’d like to see you again in two weeks, face to face or by video — with an interpreter if you’d like — to see how you are and chase the referrals. Is that all right?",
    "dom": "gs",
    "why": "Specific crisis routes and a booked review to build trust"
   },
   {
    "who": "pt",
    "text": "Yes. Thank you, doctor. I came for a small thing. You were kind to me."
   },
   {
    "who": "dr",
    "text": "You were right to come, and you’re welcome here. We’ll take this step by step together.",
    "dom": "rto",
    "why": "Closes with dignity and continuity"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Reassured his right to free GP care first, then used an open question about the nights before narrowing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Food, shelter, isolation, knowledge of entitlements and fear of authority, asked gently and without judgement.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I don’t want to be a burden”, “not sure I’m allowed” and watching the door, and explored each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "What he hoped the tablets would do, his shame about asking, and his fear of being judged or sent away.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Mood and PTSD symptom review, weight and nutrition at the next face-to-face contact, and a new-patient health review with interpreter if needed.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Primary insomnia versus PTSD, depression, and the physical effects of hunger and poor sleep.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked directly about suicidal thoughts, plans and protective factors; considered self-neglect from not eating.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named probable PTSD with trauma-related insomnia and destitution, in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "No hypnotic as the answer; trauma-focused therapy referral (NICE NG116) including torture-survivor services; medication offered as a choice; non-drug sleep measures.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Asylum support via Migrant Help, food bank, legal advice, HC2 route; interpreter offered.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Crisis routes named (999, NHS 111 mental health option), review in two weeks, referrals chased.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Health disadvantage & vulnerabilities",
    "Mental health & addiction",
    "Ethnicity, culture & diversity"
   ],
   "stem": {
    "name": "Tesfaye Bekele",
    "age": "34 years · male",
    "pmh": [
     "New registration",
     "Seeking asylum (registration note)"
    ],
    "meds": [
     "Nil on record"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Newly registered. No previous records received yet and no new-patient review. First contact with the practice.",
    "reason": "Video appointment. Reason given: “sleeping tablets”."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Welcome and entitlement",
     "d": "He opens by apologising and asking if he is allowed to be here. Answer that first, warmly and clearly — nothing else lands until he feels safe."
    },
    {
     "t": "1–5",
     "h": "Sleep, then trauma, then basics",
     "d": "Nightmares and waking; intrusive memories and avoidance (without asking for the story); food and shelter; suicide risk."
    },
    {
     "t": "5–6",
     "h": "Hear his hope for the tablets",
     "d": "“What did you imagine they would do?” — rest, a clear head for his case. Use it to frame the plan."
    },
    {
     "t": "6–10",
     "h": "Name it and plan",
     "d": "Probable PTSD, why hypnotics don’t help, trauma-focused therapy and torture-survivor services, then asylum support, food and legal advice today."
    },
    {
     "t": "10–12",
     "h": "Safety-net and continuity",
     "d": "Crisis routes in plain words, teach-back of the first step, review in two weeks with an interpreter if wanted."
    }
   ],
   "wordPics": {
    "fail": "Prescribes a hypnotic or refuses flatly and ends; never addresses whether he is allowed to be seen; misses the nightmares and flashbacks; never asks about food or risk; hurries a man who is already apologising for existing.",
    "pass": "Reassures entitlement, recognises probable PTSD, explains why tablets aren’t the answer, refers for trauma therapy, asks about suicide risk, and signposts asylum support and food with a follow-up.",
    "exc": "All of the above, plus: lets him set the pace of disclosure, removes the shame of asking for help, gives concrete first steps (Migrant Help, food voucher, legal advice, HC2), uses teach-back, offers an interpreter, and he leaves feeling welcome rather than processed."
   },
   "avoid": [
    {
     "dont": "“Do you have your Home Office papers or proof of address?”",
     "instead": "“You’re allowed to be here. Everyone can see a GP free of charge, whatever their immigration situation.”",
     "why": "Asking for documents confirms his fear and is not required for GP care."
    },
    {
     "dont": "“Tell me exactly what happened to you back home.”",
     "instead": "“You don’t have to tell me anything you’re not ready to. We can go at your pace.”",
     "why": "Demanding the trauma story risks re-traumatising him and closes the door."
    },
    {
     "dont": "“I’m afraid food and housing aren’t really something a doctor can help with.”",
     "instead": "“Hunger matters to your health as much as your sleep — let me point you to help today.”",
     "why": "Destitution drives his symptoms; ignoring it fails the whole-person task."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Destitution and isolation",
     "t": "Skipping meals, no money and no network. Hunger worsens sleep, mood and concentration, and shame stops him asking. Ask directly and normalise help-seeking."
    },
    {
     "h": "Fear of authority",
     "t": "People seeking asylum may fear that contact with services affects their claim. Explain what the consultation is for and how his information is kept confidential."
    }
   ],
   "legal": [
    {
     "h": "Right to GP care",
     "t": "Registration and primary care are free for everyone in England regardless of immigration status; ID, address or status documents are not required to register (NHS England registration principles). Asylum seekers with an active claim are exempt from hospital charges (NHS (Charges to Overseas Visitors) Regulations 2015)."
    },
    {
     "h": "Asylum support",
     "t": "Destitute asylum seekers can apply for Home Office support under the Immigration and Asylum Act 1999: section 98 (emergency) and section 95 (ongoing). Migrant Help runs the free advice and application line."
    }
   ],
   "professional": [
    {
     "h": "Fair treatment",
     "t": "GMC Good Medical Practice (2024): treat patients fairly and without discrimination, and support them to access care. Record disclosures factually and only what he consents to share."
    },
    {
     "h": "Interpreting",
     "t": "Offer a professional interpreter for future contacts; avoid family or community members, especially for trauma disclosure (NHS England interpreting guidance, 2018)."
    },
    {
     "h": "Prescribing responsibly",
     "t": "Hypnotics carry dependence risk and do not treat PTSD (BNF; NICE TA77; NICE NG116). Declining one is safe practice if it comes with a better alternative."
    }
   ],
   "community": [
    {
     "h": "Specialist and charity support",
     "t": "Freedom from Torture and the Helen Bamber Foundation (survivors of torture and trafficking); Refugee Council; British Red Cross refugee services; Doctors of the World; local food banks; Migrant Help for asylum support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Suicidal thoughts, plans or preparation — ask directly and clarify protective factors",
     "Not eating or drinking enough: weight loss, weakness, self-neglect",
     "Severe PTSD features or dissociation that stop him functioning safely",
     "Physical effects of past torture or the journey (pain, injuries) that may need assessment later"
    ],
    "psychosocial": [
     "Food, shelter, money and whether he knows about asylum support",
     "Isolation, faith and any sources of support or hope",
     "Fear of authority and of being seen as a burden or sent away"
    ],
    "ice": [
     "Idea: “I just need something to help me sleep”",
     "Concern: not being allowed to see a doctor; shame at asking; trauma he is not ready to voice",
     "Expectation: a prescription and to leave quickly without troubling anyone"
    ]
   },
   "diagnosis": "Probable post-traumatic stress disorder presenting as insomnia, with low mood and destitution: “The nightmares, the flashbacks and always being on guard fit post-traumatic stress, a common and treatable reaction to very frightening experiences.”",
   "diagnosisLay": "“Your mind has been through things no one should, and it’s stuck on high alert — like a smoke alarm that keeps going off long after the fire. Sleeping tablets just cover the noise. The right help teaches the alarm to settle.”",
   "management": {
    "reflectIce": "“You came asking for tablets so you could rest and be strong for your case. That’s exactly what I want for you too — and there’s better help for that than a tablet.”",
    "psychosocial": "Treat hunger and uncertainty as part of the illness: asylum support through Migrant Help, a food bank voucher, legal advice and an HC2 certificate, so trauma therapy has a stable base.",
    "sharedPlan": [
     "Refer for trauma-focused therapy (NICE NG116) and to a specialist torture-survivor service; offer medication as a choice later",
     "Non-drug sleep and grounding advice for nightmares; no hypnotic as the answer",
     "Asylum support, food and legal advice today; interpreter offered for future appointments"
    ],
    "safetyNet": [
     "Suicidal thoughts getting stronger or any plan: 999, or NHS 111 mental health option, and contact the practice",
     "Review in two weeks to check safety, food and referrals, building trust over time"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "PTSD",
    "s": "Case walkthrough · NICE NG116",
    "href": "../cases/ptsd.html"
   },
   {
    "ic": "💠",
    "t": "PTSD protocol",
    "s": "Trauma-focused therapy · medication",
    "href": "management/ptsd.html"
   },
   {
    "ic": "💠",
    "t": "Insomnia protocol",
    "s": "Sleep measures · hypnotic limits",
    "href": "management/insomnia.html"
   },
   {
    "ic": "💠",
    "t": "Benzodiazepines and Z-drugs",
    "s": "Prescribing protocol · dependence",
    "href": "management/benzodiazepines-z-drugs.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is not about hypnotic pharmacology. It is failed by accepting the ticket, by missing the man behind it, and by treating hunger and fear as someone else’s job. Each pattern below is common in examiner feedback and fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Issuing a week of zopiclone “just to help him settle”, or refusing any help and ending the call.",
     "why": "Either response misses probable PTSD. Hypnotics do not treat it and carry dependence risk (NICE TA77; BNF); a bare refusal leaves him with nothing.",
     "fix": "Decline the tablet by offering something better: “Strong sleeping tablets don’t treat what’s keeping you awake — there’s a treatment that does.”"
    },
    {
     "dom": "rto",
     "fail": "Skipping past “I’m not sure I’m allowed to be here”.",
     "why": "His fear of ineligibility shapes everything he says next. Leaving it unanswered keeps him guarded and minimising.",
     "fix": "Answer it in the first minute: “You are allowed to be here. GP care is free for everyone, whatever their immigration situation.”"
    },
    {
     "dom": "rto",
     "fail": "Asking him to describe what happened to him in detail to “confirm the diagnosis”.",
     "why": "Interrogating trauma can re-traumatise and is not needed to recognise PTSD or refer. Examiners mark this as poor Relating.",
     "fix": "Ask about symptoms, not the story: nightmares, intrusive memories, avoidance, being on guard. “You choose what to share.”"
    },
    {
     "dom": "tasks",
     "fail": "Never asking whether he is eating or has money, because it is “not medical”.",
     "why": "Destitution is a core part of this case. NICE NG116 notes stability and safety matter before trauma work.",
     "fix": "Ask directly and act today: Migrant Help for asylum support, a food bank voucher, legal advice, HC2."
    },
    {
     "dom": "tasks",
     "fail": "No question about suicide in a traumatised, isolated, hungry man with insomnia.",
     "why": "Missing risk assessment is a serious Tasks omission. His passive thoughts are only found if you ask.",
     "fix": "“When nights are at their worst, do you ever feel life isn’t worth living?” Then clarify plans, protective factors and crisis routes."
    },
    {
     "dom": "gs",
     "fail": "A list of charity names read out at speed, with no follow-up booked.",
     "why": "Unprioritised signposting to a frightened patient rarely leads to action; examiners flag “no clear follow-up”.",
     "fix": "Agree one or two first steps, check them with teach-back, and book a review in two weeks with an interpreter offered."
    }
   ]
  }
 },
 "asymmetric-hearing-loss": {
  "stem": {
   "name": "Hayley Brooks",
   "age": "49-year-old woman",
   "pmh": [
    "No significant past medical history",
    "No previous ear problems recorded"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Reception note: requesting ear drops or syringing for “wax in the right ear”. No otoscopy or audiology on record.",
   "reason": "Telephone consultation about muffled hearing in the right ear."
  },
  "knowledge": {
   "guideline": "NICE NG98 (hearing loss in adults, 2018) · NICE NG155 (tinnitus, 2020) · ENT UK sudden SNHL guideline (2018)",
   "summary": "Gradual one-sided hearing loss with one-sided tinnitus and unsteadiness is a retrocochlear red-flag pattern until proven otherwise. Examine for wax, but refer for audiology and ENT assessment regardless, with MRI of the internal auditory meati if the asymmetry is confirmed.",
   "points": [
    {
     "h": "Pin down the time course",
     "t": "NICE NG98: refer immediately (seen within 24 hours) to ENT or the emergency department if hearing loss developed suddenly (over 3 days or less) within the past 30 days; urgently (within 2 weeks) if sudden more than 30 days ago or worsening rapidly (over 4 to 90 days)."
    },
    {
     "h": "Unilateral or asymmetric loss",
     "t": "NICE NG98: consider referral to ENT, audiovestibular medicine or specialist audiology, using the local pathway, for adults with unilateral or asymmetric hearing loss as the primary concern. Consider MRI of the internal auditory meati when sensorineural asymmetry is 15 dB or more at 2 adjacent frequencies."
    },
    {
     "h": "Unilateral tinnitus",
     "t": "NICE NG155: unilateral or asymmetric non-pulsatile tinnitus is itself a reason to consider MRI. With one-sided loss and unsteadiness, the combination points to a vestibular schwannoma (acoustic neuroma)."
    },
    {
     "h": "Wax does not explain everything",
     "t": "Examine the ear; if wax is present and contributing, NICE NG98 advises ear irrigation or microsuction, not manual syringing. Clearing wax does not remove the need to test a persistent asymmetric sensorineural loss."
    },
    {
     "h": "Vestibular schwannoma in plain terms",
     "t": "A benign, slow-growing tumour on the balance and hearing nerve. Small tumours are often monitored with repeat MRI; larger ones may need surgery or stereotactic radiotherapy. Most asymmetric losses turn out to have other causes."
    },
    {
     "h": "Same-day action",
     "t": "NICE NG98: acquired unilateral hearing loss with altered sensation or facial droop on the same side needs immediate referral (within 24 hours), or the stroke pathway if stroke is suspected. Sudden sensorineural loss is an ENT emergency; ENT UK (2018) supports early oral corticosteroids given by the specialist team."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Hayley Brooks? It’s Dr Okafor from the surgery. Can you confirm your date of birth for me? Thank you. I understand your right ear has been bothering you. Tell me about it.",
    "dom": "gs",
    "why": "Identity check on the telephone, then an open question"
   },
   {
    "who": "pt",
    "text": "It’s gone muffled over the last few months, and there’s ringing in just that ear. I’m a teacher, I really need my hearing. It’s just wax, isn’t it? Could you sort me some drops or syringing?"
   },
   {
    "who": "dr",
    "text": "Thank you. I can hear how much your hearing matters for your work. I’d like to ask a few questions so we get this right, then we’ll agree what to do about the wax and anything else. Is that okay?",
    "dom": "rto",
    "why": "Acknowledges the work impact and sets an agenda"
   },
   {
    "who": "pt",
    "text": "Yes, fine."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Did the hearing go suddenly, over a day or two, or has it crept up gradually?",
    "dom": "tasks",
    "why": "Separates the sudden-loss emergency from gradual loss"
   },
   {
    "who": "pt",
    "text": "Gradually. Months, really. I kept thinking it’d clear."
   },
   {
    "who": "dr",
    "text": "And the left ear is completely normal? No ringing there?"
   },
   {
    "who": "pt",
    "text": "Left’s fine. The ringing is only on the right."
   },
   {
    "who": "dr",
    "text": "Any dizziness, spinning, or feeling unsteady on your feet?",
    "dom": "tasks",
    "why": "Asks about vestibular involvement"
   },
   {
    "who": "pt",
    "text": "Now and then I feel a bit off balance. Not spinning. I put it down to being tired."
   },
   {
    "who": "dr",
    "text": "Any numbness or tingling in your face, or weakness on one side of your face? Any ear pain, discharge, or recent cold?",
    "dom": "tasks",
    "why": "Screens for cranial nerve V and VII involvement and for conductive causes"
   },
   {
    "who": "pt",
    "text": "No numbness, no weakness. No pain or discharge, no cold."
   },
   {
    "who": "dr",
    "text": "Have you had wax problems before, or used cotton buds?"
   },
   {
    "who": "pt",
    "text": "Not really. I just assumed."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said “it’s just wax, isn’t it?” It sounded as though you were hoping I’d agree. Is something else worrying you about it?",
    "dom": "rto",
    "why": "Reflects the minimising language back as a cue"
   },
   {
    "who": "pt",
    "text": "(pause) I looked up ringing in one ear and it came up with brain tumours. And I keep thinking, what if I’m going deaf? I can’t teach if I can’t hear the children."
   },
   {
    "who": "dr",
    "text": "That’s two big fears to be carrying, and thank you for telling me. What were you hoping would happen today?",
    "dom": "rto",
    "why": "Validates and elicits her expectation"
   },
   {
    "who": "pt",
    "text": "Honestly, for you to say it’s wax and book the syringing. Then I wouldn’t have to think about the rest."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’d like to be honest with you, because I think you’d prefer that. Hearing loss in one ear, coming on gradually, with ringing and a bit of unsteadiness, is a pattern we always test properly. Wax can cause muffling, and even some ringing, but with this pattern I don’t want to stop at wax, even if I find some.",
    "dom": "tasks",
    "why": "Explains why the asymmetric pattern needs more than wax removal"
   },
   {
    "who": "pt",
    "text": "So it could be the tumour thing."
   },
   {
    "who": "dr",
    "text": "One of the things we check for is called an acoustic neuroma. It is not a cancer. It is a slow-growing, benign growth on the hearing and balance nerve, and it’s very manageable: often it’s just watched with scans. And many one-sided hearing losses turn out to be something else altogether. So testing is about being thorough, not about expecting the worst.",
    "dom": "tasks",
    "why": "Names the diagnosis with accurate, proportionate reassurance"
   },
   {
    "who": "pt",
    "text": "Benign. Okay. That’s different from what I read."
   },
   {
    "who": "dr",
    "text": "What you read online tends to show the worst end. Does that help a little?",
    "dom": "rto",
    "why": "Checks the effect of the reassurance"
   },
   {
    "who": "pt",
    "text": "It does, actually."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what I suggest. First, a face-to-face appointment this week so I can look in the ear and do some simple tuning-fork tests. If there’s wax, we’ll clear it with microsuction or irrigation, not old-style syringing. Second, whatever I find, I’ll refer you for a proper hearing test and to the ear specialists. If the test confirms the right ear is worse, they usually arrange an MRI scan of the hearing nerves.",
    "dom": "tasks",
    "why": "Examination plus audiology and ENT referral regardless of wax, with MRI per NICE NG98"
   },
   {
    "who": "pt",
    "text": "And work? I’m struggling in a noisy classroom."
   },
   {
    "who": "dr",
    "text": "Let’s think about that. Sitting so your left ear faces the class, and talking to your school about adjustments, can help. If the hearing test shows you’d benefit, audiology can discuss hearing support. Would it help if I wrote something for your school?",
    "dom": "rto",
    "why": "Addresses the occupational impact practically"
   },
   {
    "who": "pt",
    "text": "Maybe later. Let’s see what the tests say."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "One important thing. If your hearing suddenly drops further over a day or two, that’s an emergency: ring us or go to A&E the same day, because early treatment matters. The same applies if you get numbness or drooping in your face, or severe dizziness. Is that clear?",
    "dom": "gs",
    "why": "Safety-nets the sudden-loss and facial nerve emergencies specifically"
   },
   {
    "who": "pt",
    "text": "Yes. Sudden drop or face symptoms, same day."
   },
   {
    "who": "dr",
    "text": "Exactly. Can you tell me the plan back, so I know I’ve explained it well?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "See you this week, clear any wax, hearing test and specialist referral either way, maybe a scan. And it’s probably not a brain tumour, and if it is that nerve thing, it’s benign."
   },
   {
    "who": "dr",
    "text": "That’s it. I’ll follow the results with you. Reception will call to book this week’s appointment.",
    "dom": "gs",
    "why": "Summarises and confirms follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Identity check; open question; lets her describe the one-sided loss and tinnitus before addressing the wax request.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Teaching in noisy classrooms, what she has read online, and how the symptoms affect her confidence at work.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up “it’s just wax, isn’t it?” as minimisation and the “I really need my hearing” worry.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (wax); concerns (brain tumour after searching online, going deaf and losing her career); expectation (drops or syringing).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Face-to-face otoscopy and tuning-fork tests; audiology; ENT or audiovestibular referral; MRI of the internal auditory meati if asymmetry confirmed.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Vestibular schwannoma versus wax, middle-ear effusion, Ménière’s disease or other causes of asymmetric loss.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Clarifies sudden versus gradual; asks about facial numbness or weakness and vertigo; knows sudden loss and facial signs need referral within 24 hours.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Explains that the asymmetric pattern needs investigation to exclude a benign nerve tumour, whatever the wax finding.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Wax removal by microsuction or irrigation if present (no manual syringing); audiology and ENT referral regardless, per NICE NG98 and NG155.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Addresses the work impact: classroom positioning, school adjustments, hearing support via audiology.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day action for a sudden drop in hearing, facial numbness or droop, or severe vertigo; face-to-face review this week; follows up results.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Hayley Brooks",
    "age": "49 years · female",
    "pmh": [
     "Nil significant",
     "No ENT history"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Reception note: “Wants drops or syringing for wax, right ear. Muffled for months, ringing.” No otoscopy or audiogram on file.",
    "reason": "Telephone consultation. “It’s just wax, isn’t it?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and identify",
     "d": "Confirm identity. She opens with “it’s just wax” and a request for syringing. Note: one ear, months, ringing."
    },
    {
     "t": "1–4",
     "h": "Pattern and red flags",
     "d": "Sudden or gradual; one side only; tinnitus; unsteadiness; facial numbness or weakness; pain, discharge, recent cold."
    },
    {
     "t": "4–6",
     "h": "The fear underneath",
     "d": "Reflect the minimising. She has searched online and fears a brain tumour and going deaf as a teacher."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Asymmetric pattern means test properly. Acoustic neuroma named as benign. Face-to-face exam, wax removed properly if present, audiology and ENT referral regardless, MRI if asymmetry confirmed."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Sudden drop in hearing or facial symptoms: same day. Work support. Teach-back and booked appointment."
    }
   ],
   "wordPics": {
    "fail": "Books syringing or prescribes drops and ends the call; never asks whether the loss was sudden; misses the unilateral tinnitus and unsteadiness; no referral; ignores her fear and her job.",
    "pass": "Establishes gradual one-sided loss with tinnitus; asks about facial symptoms and vertigo; arranges examination and refers for audiology and ENT regardless of wax; gives a basic safety-net about sudden loss.",
    "exc": "All of the above, plus: surfaces the online tumour fear and responds with accurate reassurance (benign, often monitored); knows the NICE NG98 thresholds and not to use manual syringing; addresses classroom impact practically; clear teach-back."
   },
   "avoid": [
    {
     "dont": "“Sounds like wax. Use olive oil drops for a week and we’ll syringe it.”",
     "instead": "“I’ll look for wax and clear it properly if it’s there, but one-sided loss with ringing needs a hearing test and a specialist opinion either way.”",
     "why": "Treating asymmetric sensorineural loss as wax alone is the central Tasks fail, and NICE NG98 advises against manual syringing."
    },
    {
     "dont": "“We need to rule out a brain tumour.”",
     "instead": "“One thing we check for is a slow-growing, benign growth on the hearing nerve, and it’s very manageable.”",
     "why": "Accurate, specific language reassures; a bare “brain tumour” confirms her worst search result."
    },
    {
     "dont": "“Don’t worry, it’s very unlikely to be anything serious.”",
     "instead": "“Most one-sided hearing losses turn out to be something else, but this pattern is one we always test properly.”",
     "why": "Blanket reassurance without a plan sounds dismissive and gives her nothing to hold on to."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Occupational impact",
     "t": "Teaching depends on hearing in noisy rooms. Explore how she is coping, fatigue from listening effort, and whether colleagues know."
    },
    {
     "h": "Online searching",
     "t": "Searching one-sided tinnitus often returns alarming results. Invite what she has read and correct it specifically."
    }
   ],
   "legal": [
    {
     "h": "Equality Act 2010 and Access to Work",
     "t": "Hearing loss with a substantial, long-term effect on daily activities can be a disability, entitling her to reasonable adjustments at school. Access to Work (DWP) can fund equipment or support for people with a disability or health condition."
    },
    {
     "h": "DVLA",
     "t": "Hearing loss alone does not need to be declared for a car licence. Sudden, disabling dizziness would change this; advise her not to drive if she has severe vertigo."
    }
   ],
   "professional": [
    {
     "h": "Remote consulting",
     "t": "GMC Good medical practice (2024): recognise when a remote consultation is not enough. Otoscopy and tuning-fork tests need a face-to-face appointment, but should not delay referral."
    },
    {
     "h": "Not colluding with a request",
     "t": "Agreeing to syringing to meet the expectation would be unsafe. Explain the reasoning so she chooses the plan with you."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "RNID for hearing loss and tinnitus information and workplace advice; the British Acoustic Neuroma Association if a diagnosis is made; Tinnitus UK for coping with tinnitus."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Sudden hearing loss (over 3 days or less) within 30 days: referral within 24 hours (NICE NG98)",
     "Unilateral loss with facial numbness or droop on the same side: immediate referral, or stroke pathway",
     "Gradual asymmetric loss with unilateral tinnitus and imbalance: audiology, ENT and consider MRI of the internal auditory meati"
    ],
    "psychosocial": [
     "Teaching in noisy classrooms and listening fatigue",
     "What she has read online about one-sided tinnitus",
     "Fear of losing her career and identity if she goes deaf"
    ],
    "ice": [
     "Idea: “It’s just wax.”",
     "Concern: a brain tumour after searching online; going deaf and being unable to teach",
     "Expectation: drops or syringing to clear it"
    ]
   },
   "diagnosis": "“Hearing that has gone gradually in one ear, with ringing and some unsteadiness, is a pattern we always test properly. Wax may be part of it, but I want a hearing test and a specialist opinion to rule out a benign growth on the hearing nerve.”",
   "diagnosisLay": "“Think of your hearing as two microphones feeding one speaker. If one microphone gets quieter and starts to hiss, we check the cable as well as the dust on the microphone. The hearing test and scan check the cable.”",
   "management": {
    "reflectIce": "“You searched it and saw brain tumours, and you’re frightened for your teaching. What we’re checking for is benign and manageable, and testing is how we stop you lying awake guessing.”",
    "psychosocial": "Practical classroom tips, an offer of a letter to school, and hearing support through audiology if the test shows benefit.",
    "sharedPlan": [
     "Face-to-face otoscopy and tuning-fork tests this week; wax removed by microsuction or irrigation if present",
     "Audiology and ENT or audiovestibular referral regardless of wax (NICE NG98); MRI if asymmetry is confirmed",
     "Follow up the results with her"
    ],
    "safetyNet": [
     "Sudden further drop in hearing: same-day ENT or A&E",
     "Facial numbness or droop, or severe vertigo: same-day assessment"
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
    "s": "Visual algorithm · sudden versus asymmetric",
    "href": "algorithms/hearing-loss.html"
   },
   {
    "ic": "🗺️",
    "t": "Tinnitus pathway",
    "s": "Visual algorithm · NICE NG155",
    "href": "algorithms/tinnitus.html"
   },
   {
    "ic": "🗺️",
    "t": "Vertigo pathway",
    "s": "Visual algorithm · central versus peripheral",
    "href": "algorithms/vertigo.html"
   }
  ],
  "pitfalls": {
   "intro": "This station looks simple: a patient asking for syringing. It is failed by accepting the wax story, by not separating sudden from gradual loss, and by leaving the fear of a tumour unspoken.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Booking syringing or prescribing drops without further assessment or referral.",
     "why": "Gradual asymmetric loss with unilateral tinnitus needs audiology and ENT assessment. NICE NG98 also advises against manual syringing.",
     "fix": "Examine, clear wax properly if present, and refer for a hearing test and specialist opinion regardless."
    },
    {
     "dom": "tasks",
     "fail": "Not asking whether the hearing went suddenly.",
     "why": "Sudden sensorineural loss is an emergency needing referral within 24 hours. Missing the question is a safety failure even when the answer is “gradual”.",
     "fix": "“Did it go over a day or two, or gradually over months?”"
    },
    {
     "dom": "tasks",
     "fail": "Not asking about facial numbness or weakness, or about balance.",
     "why": "These point to a larger lesion or another neurological cause and change the urgency.",
     "fix": "Screen cranial nerves V and VII and vestibular symptoms in one line."
    },
    {
     "dom": "rto",
     "fail": "Missing the minimising “it’s just wax, isn’t it?” and never asking what she fears.",
     "why": "Her hidden agenda is the online tumour search and fear for her career. Leaving it unspoken means reassurance never lands.",
     "fix": "“You sound as if you’re hoping I’ll agree. Is something else worrying you?”"
    },
    {
     "dom": "rto",
     "fail": "Naming “a brain tumour” bluntly, or giving empty reassurance.",
     "why": "Both are common feedback themes: frightening language or dismissive reassurance.",
     "fix": "Accurate and specific: “a slow-growing, benign growth on the hearing nerve, often just monitored”."
    },
    {
     "dom": "gs",
     "fail": "Trying to examine over the telephone or deciding the plan without examination.",
     "why": "Otoscopy and tuning forks need a face-to-face appointment; the limits of remote consulting must be recognised.",
     "fix": "Book an examination this week, and make the referral either way."
    },
    {
     "dom": "gs",
     "fail": "Closing without a specific safety-net for sudden deterioration.",
     "why": "Non-specific safety-netting is standard failing feedback.",
     "fix": "“If your hearing suddenly drops further, or your face goes numb or droops, same day.”"
    }
   ]
  }
 },
 "carpal-tunnel": {
  "stem": {
   "name": "Donna Whitfield",
   "age": "48-year-old woman",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Several weeks of tingling and numbness in the right hand, worse at night. Works in a supermarket.",
   "reason": "Telephone consultation. Worried her hand symptoms mean multiple sclerosis or a stroke."
  },
  "knowledge": {
   "guideline": "BSSH/GIRFT carpal tunnel pathway (2022) · NICE NG127 · NICE NG145 · NICE NG220",
   "summary": "Night-time tingling in the thumb, index and middle fingers, relieved by shaking the hand, is carpal tunnel syndrome. Make a confident diagnosis, explain why it is not MS or stroke, screen for associations, and start with a night splint.",
   "points": [
    {
     "h": "The classic history",
     "t": "Paraesthesia or numbness in the median nerve territory (thumb, index, middle and the radial half of the ring finger), worse at night and waking the patient, relieved by shaking the hand. Clumsiness and dropping things are common. Phalen’s and Tinel’s tests support the diagnosis, which is clinical."
    },
    {
     "h": "Why it isn’t MS or stroke",
     "t": "Stroke causes sudden weakness or numbness, usually of the face, arm or leg, not intermittent tingling in three fingers at night. MS typically causes episodes lasting days to weeks, often with vision, balance or bladder symptoms (NICE NG220). A median-territory, positional, nocturnal pattern points to the wrist."
    },
    {
     "h": "Associations",
     "t": "Hypothyroidism, diabetes, pregnancy, obesity, rheumatoid arthritis, acromegaly and repetitive wrist use. Her weight gain, tiredness and cold intolerance justify TSH (NICE NG145). Check HbA1c as well."
    },
    {
     "h": "Check for nerve damage",
     "t": "Constant numbness, weak thumb abduction or thenar wasting mean significant compression. These need prompt referral for surgery rather than more splinting (BSSH/GIRFT 2022). Arrange a face-to-face check of the thenar muscles if she is dropping things."
    },
    {
     "h": "Treatment ladder",
     "t": "BSSH/GIRFT 2022: a neutral-position wrist splint worn at night, and changes to aggravating activity, first. Then a corticosteroid injection. Then referral for nerve conduction studies and carpal tunnel release if symptoms persist or are severe. Treat any underlying cause."
    },
    {
     "h": "When to rethink",
     "t": "Symptoms in both hands and feet, spreading beyond the median territory, neck pain with arm symptoms, or other neurological signs suggest a different diagnosis. NICE NG127 covers referral of suspected neurological conditions."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Donna? … Thanks for calling. I understand you’re worried about your hand. Tell me what’s been happening.",
    "dom": "rto",
    "why": "Open question on the telephone"
   },
   {
    "who": "pt",
    "text": "I’m really worried. My right hand keeps going numb and tingly, especially at night. It wakes me up and I have to shake it. I’ve been dropping things too. I looked it up and now I’m petrified it’s MS, or that I’m heading for a stroke."
   },
   {
    "who": "dr",
    "text": "That sounds frightening, and I’m glad you rang. I’d like to ask some specific questions, because the details really matter, and then I’ll tell you honestly what I think. Is that OK?",
    "dom": "gs",
    "why": "Acknowledges the fear and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Yes, please."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Which fingers are affected — all of them, or some more than others?",
    "dom": "tasks",
    "why": "Defines the territory"
   },
   {
    "who": "pt",
    "text": "The thumb, first finger and middle finger mostly. Not the little finger."
   },
   {
    "who": "dr",
    "text": "And is it there all the time, or does it come and go? What brings it on?",
    "dom": "tasks",
    "why": "Establishes the intermittent, positional pattern"
   },
   {
    "who": "pt",
    "text": "Mostly at night, and sometimes at work when I’m scanning at the till for hours. It goes if I shake my hand."
   },
   {
    "who": "dr",
    "text": "When you drop things, is the hand weak, or is it more that you can’t feel what you’re holding? Have you noticed the fleshy part at the base of your thumb looking thinner?",
    "dom": "tasks",
    "why": "Screens for motor involvement and wasting"
   },
   {
    "who": "pt",
    "text": "More that my fingers feel clumsy. I haven’t looked at my thumb, to be honest."
   },
   {
    "who": "dr",
    "text": "Any symptoms in the other hand, your feet, or your face? Any problems with your vision, balance, speech, or your bladder?",
    "dom": "tasks",
    "why": "Screens for CNS and polyneuropathy features"
   },
   {
    "who": "pt",
    "text": "No. Just this hand."
   },
   {
    "who": "dr",
    "text": "Any neck pain or pain going down the arm?",
    "dom": "tasks",
    "why": "Considers cervical radiculopathy"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "A few general questions too. How have you been in yourself — energy, weight, feeling the cold?",
    "dom": "tasks",
    "why": "Screens for hypothyroidism"
   },
   {
    "who": "pt",
    "text": "Funny you ask. I’ve put on weight, I’m shattered, and I’m always cold. I thought it was my age."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "That’s helpful. You mentioned MS and stroke. What have you read that’s made you think of those?",
    "dom": "rto",
    "why": "Explores the specific fear"
   },
   {
    "who": "pt",
    "text": "It said numbness and tingling can be the first sign of MS. And a numb hand can be a stroke. I haven’t slept properly for a week."
   },
   {
    "who": "dr",
    "text": "That sounds really hard — lying awake worrying on top of being woken by your hand. What were you hoping I could do today?",
    "dom": "rto",
    "why": "Validates the impact and elicits expectations"
   },
   {
    "who": "pt",
    "text": "Just tell me if it’s one of those. And stop it waking me up."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Then let me give you the answer first. What you’re describing is a very typical picture of carpal tunnel syndrome. That’s a nerve being squeezed as it passes through a tunnel at the front of your wrist. The thumb and first two fingers, worse at night, better when you shake your hand — that’s exactly the nerve’s territory.",
    "dom": "tasks",
    "why": "Confident positive diagnosis"
   },
   {
    "who": "pt",
    "text": "So it’s not my brain?"
   },
   {
    "who": "dr",
    "text": "Everything you’ve told me points to the wrist, not the brain. A stroke comes on suddenly and usually affects the face, arm or leg, and it doesn’t come and go with shaking your hand. MS tends to cause symptoms that last days or weeks, often with eyesight or balance problems. You don’t have any of those. I’m saying this because the pattern fits, not just to reassure you.",
    "dom": "tasks",
    "why": "Reasoned explanation of why it is not MS or stroke"
   },
   {
    "who": "pt",
    "text": "(breathes out) Oh. OK. That’s such a relief."
   },
   {
    "who": "dr",
    "text": "I’m glad. The weight gain, tiredness and feeling cold could be an underactive thyroid, which can cause carpal tunnel. I’d like a blood test for your thyroid, and for sugar, because diabetes is another link. If the thyroid is low, treating it can help the hand too.",
    "dom": "tasks",
    "why": "Screens for treatable associations"
   },
   {
    "who": "pt",
    "text": "That would explain a lot."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "For the hand itself, the first step is a wrist splint worn at night, which keeps the wrist straight and takes pressure off the nerve. It helps a lot of people. It’s also worth looking at how you use your wrist at the till: short breaks, and keeping your wrist straight if you can.",
    "dom": "tasks",
    "why": "First-line treatment and work modification"
   },
   {
    "who": "pt",
    "text": "I can do that. Will I need an operation?"
   },
   {
    "who": "dr",
    "text": "Most people don’t. If the splint isn’t enough, a steroid injection often helps. If it still doesn’t settle, or the nerve is being damaged, a nerve test and a small operation usually cure it. Because you’re dropping things, I’d like to see you in person to check the strength and muscles at the base of your thumb — can you come in this week?",
    "dom": "tasks",
    "why": "Management ladder and in-person check for motor signs"
   },
   {
    "who": "pt",
    "text": "Yes, I can come in on Thursday."
   },
   {
    "who": "dr",
    "text": "That works. Can I check one thing — would it help to have a note for work about adjusting your tasks while this settles?",
    "dom": "gs",
    "why": "Considers the work impact practically"
   },
   {
    "who": "pt",
    "text": "Maybe. I’ll see how the splint goes."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "That’s fine. So you know when to act: if you ever get sudden weakness or numbness of your face, arm or leg, slurred speech, or loss of vision, call 999. If the numbness spreads to your other hand or your feet, becomes constant, or your thumb gets weaker, let us know sooner.",
    "dom": "gs",
    "why": "Specific safety-net covering stroke and progression"
   },
   {
    "who": "pt",
    "text": "OK."
   },
   {
    "who": "dr",
    "text": "Just so I know I’ve explained it clearly, what will you tell your family about what’s causing this?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "That it’s a squashed nerve in my wrist, not MS or a stroke. Splint at night, blood test for my thyroid, and you’re checking my thumb on Thursday."
   },
   {
    "who": "dr",
    "text": "Exactly right. You rang frightened it was your brain; it’s your wrist, and it’s very treatable. See you on Thursday.",
    "dom": "gs",
    "why": "Summarises and closes on the reframe"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question on the telephone; let her voice the MS and stroke fear in full.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Supermarket till work, broken sleep, a week of worry after reading online.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the fear, ‘dropping things’ and the weight gain, tiredness and cold intolerance, and explored each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (MS or stroke); concern (a serious brain or nerve illness); expectation (an answer, and to stop being woken).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Finger territory, timing, relief by shaking; CNS and bilateral symptoms; face-to-face check of thenar bulk and thumb abduction; TSH and HbA1c.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Carpal tunnel syndrome versus cervical radiculopathy, peripheral neuropathy, MS and stroke.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for CNS features, bilateral or spreading symptoms, neck pain and wasting; safety-netted stroke symptoms explicitly.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Confident, positive diagnosis of carpal tunnel syndrome, with the reasoning shared.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Night splint and activity changes first (BSSH/GIRFT 2022); injection next; referral for nerve studies and surgery if persistent, severe or motor signs.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "TSH for possible hypothyroidism, HbA1c for diabetes; work adjustments offered.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 for sudden face, arm or leg weakness, speech or vision loss; review sooner for spreading or constant numbness or thumb weakness; in-person check booked.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Donna Whitfield",
    "age": "48 years · female",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "No previous consultations about her hand. Occupation: supermarket worker.",
    "reason": "Telephone call requested: “hand going numb at night — worried it’s MS.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "She leads with the MS and stroke fear. Acknowledge it and promise an honest answer after a few questions."
    },
    {
     "t": "1–5",
     "h": "Targeted history",
     "d": "Which fingers, timing, shaking relief, weakness or wasting, other limbs, face, vision, balance, bladder, neck. Thyroid symptoms. Explore where the fear came from."
    },
    {
     "t": "5–7",
     "h": "Answer first",
     "d": "Name carpal tunnel confidently. Explain why the pattern is the wrist, not the brain."
    },
    {
     "t": "7–10",
     "h": "Shared management",
     "d": "Night splint, activity changes at the till, TSH and HbA1c, in-person thenar check because she is dropping things. Outline injection and surgery."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 for stroke symptoms. Review sooner for spreading or constant numbness or weakness. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Says ‘it’s nothing to worry about’ without explaining why; or keeps the diagnosis vague and suggests a neurology referral; never asks about thyroid symptoms; no plan to check for weakness or wasting; no stroke safety-net.",
    "pass": "Recognises carpal tunnel, reassures that it isn’t MS or stroke, recommends a splint and checks thyroid function, basic safety-net.",
    "exc": "All of the above, plus: gives the answer early and explains the reasoning in plain language; explores where the fear came from; recognises that a phone call can’t assess thenar wasting and books a face-to-face check; addresses her till work; clear, specific safety-net; teach-back confirms relief and understanding."
   },
   "avoid": [
    {
     "dont": "“Don’t worry, it’s definitely not MS.”",
     "instead": "“Your symptoms follow one nerve at the wrist, come and go at night and ease with shaking — MS and stroke don’t behave like that.”",
     "why": "Reassurance without reasons doesn’t land with an anxious patient."
    },
    {
     "dont": "“I’ll refer you to neurology to be on the safe side.”",
     "instead": "“This is a clear picture of carpal tunnel. Let’s start treatment, and I’ll tell you exactly what would make me think again.”",
     "why": "An unnecessary referral reinforces the fear and delays effective treatment."
    },
    {
     "dont": "“It’s probably just your age.”",
     "instead": "“Tiredness, weight gain and feeling cold can be an underactive thyroid, which can also cause this. Let’s check.”",
     "why": "Dismissing the cue misses a treatable association."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work",
     "t": "Hours of scanning at the till may aggravate symptoms. Suggest breaks, wrist posture and task rotation. Occupational health, if her employer has one, can help."
    },
    {
     "h": "Sleep and health anxiety",
     "t": "Broken sleep from the hand plus a week of worry after searching online. Reasoned reassurance and a clear plan help both."
    }
   ],
   "legal": [
    {
     "h": "Fit note",
     "t": "If needed, a fit note can say ‘may be fit for work’ with suggested adjustments, such as reduced scanning time or task rotation, rather than time off."
    },
    {
     "h": "RIDDOR",
     "t": "Employers must report carpal tunnel syndrome under RIDDOR 2013 only when the work involves regular use of percussive or vibrating tools. Till scanning does not meet this."
    }
   ],
   "professional": [
    {
     "h": "Remote consulting",
     "t": "Telephone assessment can establish the diagnosis but not thenar wasting or weakness. Arrange a face-to-face examination when motor symptoms are reported, and document the reasoning."
    },
    {
     "h": "Avoiding over-investigation",
     "t": "Referring a classic history to neurology reinforces anxiety and uses scarce resources. Explain the diagnosis and the triggers for rethinking."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Many areas offer direct access to MSK physiotherapy or hand therapy for splints. The British Society for Surgery of the Hand has patient information on carpal tunnel syndrome."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Sudden weakness or numbness of the face, arm or leg, speech or vision loss — stroke; 999",
     "Thenar wasting, weak thumb abduction or constant numbness — prompt surgical referral",
     "Bilateral hand and foot symptoms, neck pain with arm symptoms, or other neurological signs — rethink the diagnosis"
    ],
    "psychosocial": [
     "Hours of till scanning at work",
     "Broken sleep and a week of worry after searching online",
     "Weight gain, tiredness and feeling cold, put down to age"
    ],
    "ice": [
     "Idea: “Numbness means MS or a stroke.”",
     "Concern: a serious brain or nerve illness",
     "Expectation: to be told whether it’s MS or a stroke, and to stop being woken at night"
    ]
   },
   "diagnosis": "Give the answer first: “This is a typical picture of carpal tunnel syndrome — a nerve squeezed at the wrist. The fingers affected, the night-time pattern and the relief from shaking all point to the wrist, not the brain.”",
   "diagnosisLay": "“The nerve to your thumb and first fingers runs through a narrow tunnel at the wrist. At night, when your wrist bends, the tunnel narrows and squeezes the nerve — like standing on a hosepipe. Shaking your hand takes your foot off the pipe.”",
   "management": {
    "reflectIce": "“You’ve been lying awake thinking this was MS or a stroke. Everything you’ve described points to your wrist instead, and that’s very treatable.”",
    "psychosocial": "Address the fear directly, with reasons. Offer practical changes for till work and a fit note with adjustments if needed.",
    "sharedPlan": [
     "Neutral-position night splint and activity changes (BSSH/GIRFT 2022)",
     "TSH and HbA1c for associations (NICE NG145)",
     "Face-to-face check of thenar bulk and thumb strength; injection, then nerve studies and surgery if persistent or motor signs"
    ],
    "safetyNet": [
     "999 for sudden face, arm or leg weakness or numbness, speech or vision loss",
     "Review sooner if numbness spreads, becomes constant, or thumb weakness develops"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Carpal tunnel syndrome",
    "s": "Management protocol · BSSH/GIRFT 2022",
    "href": "management/carpal-tunnel-syndrome.html"
   },
   {
    "ic": "🗺️",
    "t": "Tingling and paraesthesia",
    "s": "Visual algorithm · localising the lesion",
    "href": "algorithms/paraesthesia.html"
   },
   {
    "ic": "🗺️",
    "t": "Hand pain",
    "s": "Visual algorithm · nerve or joint",
    "href": "algorithms/hand-pain.html"
   },
   {
    "ic": "📋",
    "t": "Hypothyroidism",
    "s": "Case walkthrough · NICE NG145",
    "href": "../cases/hypothyroidism.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by vague or reasonless reassurance, missing the thyroid cue, or ignoring the limits of a telephone consultation. Each pattern below is fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "‘It could be a few things — let’s do some tests and see.’",
     "why": "A classic history deserves a confident, positive diagnosis. Vagueness feeds her fear of MS.",
     "fix": "“This is a typical picture of carpal tunnel syndrome, and here’s why.”"
    },
    {
     "dom": "rto",
     "fail": "‘It’s definitely not MS, don’t worry’ — with no explanation.",
     "why": "Unexplained reassurance doesn’t work with health anxiety. The fear is the reason for the call.",
     "fix": "Explain the difference: “Stroke is sudden and affects the face, arm or leg; MS lasts days to weeks with other symptoms. Yours follows one nerve at the wrist.”"
    },
    {
     "dom": "tasks",
     "fail": "Missing the weight gain, tiredness and cold intolerance.",
     "why": "Hypothyroidism is a treatable cause of carpal tunnel syndrome (NICE NG145 for testing).",
     "fix": "Ask about general health and check TSH and HbA1c."
    },
    {
     "dom": "tasks",
     "fail": "Managing ‘dropping things’ entirely by telephone.",
     "why": "Thenar wasting or weakness means nerve damage and changes the plan to prompt surgical referral (BSSH/GIRFT 2022).",
     "fix": "“Because you’re dropping things, I’d like to check your thumb muscles in person this week.”"
    },
    {
     "dom": "tasks",
     "fail": "Referring straight to neurology or for nerve conduction studies ‘to be safe’.",
     "why": "A typical history doesn’t need a nerve study before a splint. Referral reinforces the fear.",
     "fix": "Start with a night splint, and name exactly what would change the plan."
    },
    {
     "dom": "gs",
     "fail": "No stroke safety-net because ‘it isn’t a stroke’.",
     "why": "She fears stroke. Telling her exactly what stroke looks like is both safe and reassuring.",
     "fix": "“Sudden weakness of your face, arm or leg, slurred speech or loss of vision — call 999. That’s different from what you have.”"
    }
   ]
  }
 },
 "early-rheumatoid": {
  "stem": {
   "name": "Priya Sehgal",
   "age": "42-year-old woman",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "About 8 weeks of pain, stiffness and swelling in both hands and wrists. Works as a teacher.",
   "reason": "Video consultation about achy, stiff hands. She is asking for stronger anti-inflammatories."
  },
  "knowledge": {
   "guideline": "NICE NG100 (rheumatoid arthritis in adults) · NICE QS33 · BSR pregnancy and breastfeeding guideline (2022)",
   "summary": "Symmetrical small-joint swelling with two hours of morning stiffness is inflammatory arthritis until proven otherwise. Refer urgently to rheumatology; do not wait for blood results or treat with NSAIDs alone.",
   "points": [
    {
     "h": "Inflammatory, not mechanical",
     "t": "Inflammatory arthritis: swollen, tender joints (synovitis), morning stiffness lasting longer than about 30 minutes, better with use, often with fatigue. Osteoarthritis: worse with use, brief stiffness, bony (not boggy) swelling, and often the DIP joints and thumb base."
    },
    {
     "h": "Refer urgently",
     "t": "NICE NG100: refer adults with suspected persistent synovitis of undetermined cause for specialist opinion. Refer urgently, even with a normal acute-phase response or negative rheumatoid factor, if the small joints of the hands or feet are affected, more than one joint is affected, or there has been a delay of 3 months or longer. NICE QS33: refer within 3 working days of presenting in primary care."
    },
    {
     "h": "Tests support but do not gate referral",
     "t": "NICE NG100: measure rheumatoid factor; consider anti-CCP antibodies if RF is negative; X-ray the hands and feet in suspected persistent synovitis. Also FBC, CRP/ESR and baseline renal and liver function (clinical practice). Send the referral the same day, not after the results."
    },
    {
     "h": "Symptom relief while waiting",
     "t": "If an NSAID is used, NICE NG100: lowest effective dose for the shortest time, with a proton pump inhibitor. Check for contraindications (GI, renal, cardiovascular, asthma). Starting oral steroids before rheumatology assessment is best agreed with the rheumatology team, as they can mask synovitis."
    },
    {
     "h": "Pregnancy planning",
     "t": "Ask about plans for pregnancy. Methotrexate is teratogenic; BSR 2022 advises stopping it 1 month before conception. Flag plans in the referral so the specialist can choose treatment to fit."
    },
    {
     "h": "Why speed matters",
     "t": "Early disease-modifying treatment, started by rheumatology, reduces joint damage and disability. NICE QS33 (2013, updated January 2020): referral to rheumatology services within 3 working days of presenting in primary care, and conventional DMARD monotherapy started within 6 weeks of referral."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Priya, thanks for joining. Tell me about your hands, from the beginning.",
    "dom": "rto",
    "why": "Open question; lets her tell the story"
   },
   {
    "who": "pt",
    "text": "They’ve been achy and stiff for a couple of months — worse in the mornings, and the knuckles look puffy. I’m sure it’s wear and tear or too much marking. Could I just have stronger anti-inflammatories so I can push through? I can’t take time off."
   },
   {
    "who": "dr",
    "text": "That’s clear, thank you. I’ll definitely talk about pain relief. I’d also like to understand exactly what’s happening in the joints first, so the treatment is the right one. Is that OK?",
    "dom": "gs",
    "why": "Acknowledges her request and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Yes, fine."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "You said worse in the mornings. How long does it take for the stiffness to wear off?",
    "dom": "tasks",
    "why": "Quantifies morning stiffness"
   },
   {
    "who": "pt",
    "text": "A good two hours. It takes ages to get going."
   },
   {
    "who": "dr",
    "text": "Which joints exactly — and is it both hands, the same on each side?",
    "dom": "tasks",
    "why": "Establishes a symmetrical small-joint pattern"
   },
   {
    "who": "pt",
    "text": "Both hands, pretty much the same. These knuckles and the middle finger joints, and both wrists."
   },
   {
    "who": "dr",
    "text": "Would you mind holding your hands up to the camera? … I can see some puffiness over the knuckles on both sides. Are they tender if you squeeze across them?",
    "dom": "tasks",
    "why": "Looks for synovitis as far as video allows"
   },
   {
    "who": "pt",
    "text": "Ouch — yes. They feel sort of squashy."
   },
   {
    "who": "dr",
    "text": "Thank you. Any other joints — feet, knees, shoulders? And how is your energy?",
    "dom": "tasks",
    "why": "Checks other joints and systemic features"
   },
   {
    "who": "pt",
    "text": "Just the hands and wrists. And I’m exhausted, but I put that down to work."
   },
   {
    "who": "dr",
    "text": "Any rashes, psoriasis, mouth ulcers, dry eyes or mouth, or recent infections or tummy upsets?",
    "dom": "tasks",
    "why": "Screens for other inflammatory causes"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "How is all this affecting you at work and at home?",
    "dom": "rto",
    "why": "Explores functional impact"
   },
   {
    "who": "pt",
    "text": "Holding a pen for marking hurts, and it takes forever. I’m managing. I just have to."
   },
   {
    "who": "dr",
    "text": "It sounds like you’re pushing really hard to keep going. Has anyone in your family had joint problems?",
    "dom": "rto",
    "why": "Follows the ‘have to’ cue into family history"
   },
   {
    "who": "pt",
    "text": "My mum had rheumatoid arthritis. She ended up in a wheelchair."
   },
   {
    "who": "dr",
    "text": "I’m sorry. That must have been hard to watch. Has that been on your mind with your own hands?",
    "dom": "rto",
    "why": "Surfaces the hidden fear directly and gently"
   },
   {
    "who": "pt",
    "text": "(pause) Every morning. I keep telling myself it’s just wear and tear, because if it’s what Mum had… I can’t be her. I’ve got a job. I need my hands."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That fear makes complete sense. What were you hoping we’d do today?",
    "dom": "rto",
    "why": "Validates and elicits expectations"
   },
   {
    "who": "pt",
    "text": "I suppose I hoped you’d give me tablets and tell me it’s nothing."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I want to be honest with you, because I think honesty helps here. Swelling in the small joints of both hands, with two hours of stiffness each morning, isn’t wear and tear. It’s inflammation in the joints. The most likely cause is an early inflammatory arthritis, and rheumatoid arthritis is top of the list.",
    "dom": "tasks",
    "why": "States the inflammatory pattern and working diagnosis"
   },
   {
    "who": "pt",
    "text": "So it is what Mum had."
   },
   {
    "who": "dr",
    "text": "It may be the same condition. But I really want you to hear this: it is not the same situation. Your mum was treated when there were far fewer options, often late. Today, if it’s caught early, like yours, there are treatments that calm the immune system and protect the joints. Most people keep working and stay active.",
    "dom": "rto",
    "why": "Hopeful, honest reframe of the mother’s story"
   },
   {
    "who": "pt",
    "text": "Really? That’s not what I pictured."
   },
   {
    "who": "dr",
    "text": "Really. And early is the key word. There’s a window in the first few months where treatment makes the biggest difference. So rather than just stronger tablets, I’m going to refer you urgently to the rheumatology team today.",
    "dom": "tasks",
    "why": "Urgent referral within the window of opportunity"
   },
   {
    "who": "pt",
    "text": "Today? Before any tests?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Yes. I’ll also arrange blood tests, including inflammation markers and antibody tests, and X-rays of your hands and feet. But I’m referring you whatever they show, because normal blood tests don’t rule this out.",
    "dom": "tasks",
    "why": "Tests alongside, not before, referral; negative tests don’t exclude"
   },
   {
    "who": "pt",
    "text": "And the pain in the meantime? I’ve still got to teach."
   },
   {
    "who": "dr",
    "text": "Let’s sort that. Do you have any stomach problems, asthma or kidney problems? … Then I can offer an anti-inflammatory at the lowest dose that helps, with a stomach-protecting tablet. Steroids can help too, but I’d rather the rheumatology team decide on those, so they see the joints as they really are.",
    "dom": "tasks",
    "why": "Safe bridging relief with gastroprotection"
   },
   {
    "who": "pt",
    "text": "OK. That makes sense."
   },
   {
    "who": "dr",
    "text": "Two things to include in the referral. First, work: if you need a fit note saying you could manage with adjustments, like help with marking, just ask. Second, some of the treatments affect pregnancy, so it helps the specialist to know if children are something you’re thinking about.",
    "dom": "gs",
    "why": "Addresses work and pregnancy planning"
   },
   {
    "who": "pt",
    "text": "Not something I’m thinking about right now, but thank you for asking."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If a joint becomes very hot and swollen, or you feel feverish and unwell, contact us that day. If you haven’t heard from rheumatology within a week, ring us and we’ll chase it.",
    "dom": "gs",
    "why": "Specific safety-net and ownership of the referral"
   },
   {
    "who": "pt",
    "text": "I will."
   },
   {
    "who": "dr",
    "text": "Just so I know I’ve explained it well: what will you tell your family about today?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "That it’s probably inflammation, maybe what Mum had, but they’re seeing me quickly and it’s treatable now. Bloods, X-rays, and tablets with a stomach protector."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. I’ll see you after the results. You came in wanting to push through; the kindest thing for your hands is getting seen fast.",
    "dom": "gs",
    "why": "Summarises and closes with a clear plan"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her describe the hands and her request for stronger anti-inflammatories before redirecting.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Teaching and marking, the pressure not to take time off, and the family experience of RA.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up ‘I just have to’ and the mother in a wheelchair, and explored the fear behind the minimising.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (wear and tear, overwork); concern (becoming like her mother, losing her job); expectation (stronger NSAIDs to carry on).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Duration of morning stiffness, joint distribution and symmetry, video look for swelling, squeeze test; RF, anti-CCP, FBC, CRP/ESR, hand and foot X-rays.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Early RA versus osteoarthritis, psoriatic arthritis, connective tissue disease and post-infective arthritis.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for a hot single joint, fever and systemic illness; checked NSAID contraindications before prescribing.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named inflammatory arthritis, probable early RA, and explained why it is not wear and tear.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Urgent rheumatology referral the same day (NICE NG100, QS33) regardless of blood results; NSAID with PPI; steroids left to rheumatology.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Work adjustments and fit note offered; pregnancy plans asked because of methotrexate; fatigue acknowledged.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Chase the referral if no contact within a week; same-day contact for a hot swollen joint or fever; review with results.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Priya Sehgal",
    "age": "42 years · female",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "No previous consultations about joints. Occupation: teacher.",
    "reason": "Video consultation: “achy, stiff hands — would like stronger anti-inflammatories.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "She asks for stronger anti-inflammatories. Acknowledge it and agree to understand the joints first."
    },
    {
     "t": "1–5",
     "h": "Focused history + look",
     "d": "Morning stiffness duration, symmetry, small joints, video look and squeeze test, fatigue, other inflammatory features. Family history — let the mother’s story surface."
    },
    {
     "t": "5–6",
     "h": "Name the fear",
     "d": "“Has your mum’s illness been on your mind?” This unlocks the consultation."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Inflammation, not wear and tear. Urgent referral today. Bloods and X-rays alongside. NSAID with PPI. Work and pregnancy planning."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Chase the referral if no contact in a week. Hot joint or fever — same day. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Accepts ‘wear and tear’ and prescribes stronger NSAIDs with review in a few months; doesn’t quantify morning stiffness; waits for blood results before deciding to refer; never asks about the family history or her fear.",
    "pass": "Recognises the inflammatory pattern, refers to rheumatology, requests RF and inflammatory markers, gives NSAID with gastroprotection, acknowledges the mother’s illness.",
    "exc": "All of the above, plus: refers urgently the same day and explains the window of opportunity; says clearly that normal bloods won’t stop the referral; turns the mother’s story into a hopeful comparison; covers work adjustments and pregnancy planning; confirms understanding with teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s probably just wear and tear from all that marking.”",
     "instead": "“Swelling in both hands with two hours of stiffness is inflammation, not wear and tear.”",
     "why": "Colluding with her explanation misses early RA."
    },
    {
     "dont": "“Let’s see what the blood tests show, then decide about referral.”",
     "instead": "“I’m referring you today, whatever the bloods show — normal tests don’t rule this out.”",
     "why": "NICE NG100: refer urgently even with normal inflammatory markers or negative RF."
    },
    {
     "dont": "“Don’t worry, you won’t end up like your mum.”",
     "instead": "“Your mum was treated in a very different era. Caught early, most people now keep working and stay active.”",
     "why": "A blanket promise isn’t honest; an evidence-based comparison is."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work and identity",
     "t": "A teacher who writes and marks all day; fear of losing her job drives the minimising. Explore adjustments rather than assuming time off."
    },
    {
     "h": "Family experience",
     "t": "Watching her mother become wheelchair-dependent shapes her fear of the diagnosis. Name it, then offer an honest modern comparison."
    }
   ],
   "legal": [
    {
     "h": "Fit note",
     "t": "If needed, a fit note can say ‘may be fit for work’ with suggested adjustments, such as marking support or reduced handwriting, rather than signing her off."
    },
    {
     "h": "Equality Act 2010",
     "t": "If RA is confirmed and has a substantial, long-term effect on day-to-day activities, she may meet the definition of disability, and her employer must consider reasonable adjustments. Access to Work can fund equipment or support."
    }
   ],
   "professional": [
    {
     "h": "Timely referral",
     "t": "GMC Good Medical Practice (2024): provide effective treatment without delay. Waiting for tests before referring suspected synovitis falls short of NICE NG100 and QS33."
    },
    {
     "h": "Honest reassurance",
     "t": "Give hope based on evidence, not promises. Record the discussion, the referral date and her agreement."
    }
   ],
   "community": [
    {
     "h": "Patient resources",
     "t": "National Rheumatoid Arthritis Society (NRAS) and Versus Arthritis for information, helplines and peer support. Occupational therapy through rheumatology for joint protection and splints."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "A single hot, very swollen joint or fever — exclude septic arthritis the same day",
     "Systemic features such as weight loss, rash, mouth ulcers or breathlessness — consider connective tissue disease or vasculitis",
     "Contraindications to NSAIDs: GI bleeding history, renal disease, uncontrolled hypertension, NSAID-sensitive asthma"
    ],
    "psychosocial": [
     "Impact on teaching: holding a pen, marking, time off",
     "Mother’s RA and wheelchair use — fear of the same future",
     "Fatigue and how she is coping at home"
    ],
    "ice": [
     "Idea: “It’s wear and tear or too much marking.”",
     "Concern: ending up like her mum, in a wheelchair, and losing her job",
     "Expectation: stronger anti-inflammatories so she can push through"
    ]
   },
   "diagnosis": "Name the pattern: “Swelling in the small joints of both hands, with two hours of stiffness each morning, is inflammation in the joints — most likely an early inflammatory arthritis such as rheumatoid arthritis. It needs a specialist quickly.”",
   "diagnosisLay": "“Your immune system seems to be attacking the lining of your joints, making them swollen and stiff. Wear and tear is like tyres wearing down; this is more like a fire in the joint lining — and the sooner it’s put out, the less damage it does.”",
   "management": {
    "reflectIce": "“You’ve been dreading that this is what your mum had. It may be the same condition, but caught early, with today’s treatments, the story is very different.”",
    "psychosocial": "Frame urgency as protecting her job and independence. Offer a fit note with adjustments if needed. Ask about pregnancy plans so treatment can fit her life.",
    "sharedPlan": [
     "Urgent rheumatology referral today (NICE NG100; QS33 within 3 working days)",
     "RF, anti-CCP if RF negative, FBC, CRP/ESR, renal and liver function; X-rays of hands and feet",
     "NSAID at the lowest effective dose with a PPI; steroids only as agreed with rheumatology"
    ],
    "safetyNet": [
     "Same-day contact for a single hot swollen joint, fever or feeling unwell",
     "Ring if no rheumatology contact within a week; review with results"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Rheumatoid arthritis",
    "s": "Management protocol · NICE NG100",
    "href": "management/rheumatoid-arthritis.html"
   },
   {
    "ic": "🗺️",
    "t": "Joint pain and swelling",
    "s": "Visual algorithm · inflammatory or mechanical",
    "href": "algorithms/joint-pain.html"
   },
   {
    "ic": "🗺️",
    "t": "Hand pain",
    "s": "Visual algorithm · small-joint patterns",
    "href": "algorithms/hand-pain.html"
   },
   {
    "ic": "💠",
    "t": "MSK and rheumatology protocols",
    "s": "Drug ladders · referral",
    "href": "management.html?cat=musculoskeletal-and-rheumatology"
   }
  ],
  "pitfalls": {
   "intro": "Candidates rarely fail this station on RA knowledge. They fail by accepting ‘wear and tear’, delaying referral for tests, or never reaching the mother’s story. Each pattern below is fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing stronger NSAIDs and reviewing in a few months.",
     "why": "Symmetrical small-joint synovitis needs urgent referral (NICE NG100). Delay loses the window when early treatment protects the joints.",
     "fix": "“Rather than just stronger tablets, I’m referring you urgently today, because early treatment protects the joints.”"
    },
    {
     "dom": "tasks",
     "fail": "Waiting for rheumatoid factor and CRP before deciding to refer.",
     "why": "NICE NG100: refer urgently even if the acute-phase response is normal or RF is negative. Seronegative RA exists.",
     "fix": "Send tests and referral together, and say so: “Whatever the bloods show, you’re being referred.”"
    },
    {
     "dom": "tasks",
     "fail": "Not quantifying morning stiffness or checking symmetry.",
     "why": "These are the features that separate inflammatory from mechanical joint pain. Without them the diagnosis is a guess.",
     "fix": "Ask: “How long does the stiffness take to wear off?” and “Is it the same on both sides?”"
    },
    {
     "dom": "rto",
     "fail": "Hearing ‘my mum ended up in a wheelchair’ and moving straight on to blood tests.",
     "why": "That is the hidden agenda. Missing it forfeits Relating marks and leaves her minimising the problem.",
     "fix": "Pause: “Has that been on your mind with your own hands?” Then offer the honest modern comparison."
    },
    {
     "dom": "rto",
     "fail": "Promising ‘you won’t end up like your mum’.",
     "why": "False reassurance isn’t honest and can backfire if the disease is severe.",
     "fix": "“Most people treated early now keep working and stay active. That’s why I want you seen quickly.”"
    },
    {
     "dom": "gs",
     "fail": "Ignoring her work and pregnancy considerations.",
     "why": "Methotrexate affects pregnancy planning, and work fears drive her behaviour. Leaving these out makes the plan less relevant to her.",
     "fix": "Ask once, plainly, about pregnancy plans, and offer a fit note with adjustments rather than time off."
    },
    {
     "dom": "gs",
     "fail": "No safety-net or ownership of the referral.",
     "why": "Non-specific safety-netting is a standard failing statement. Urgent referrals can go astray.",
     "fix": "“Hot single joint or fever — contact us that day. No letter within a week — ring us and we’ll chase it.”"
    }
   ]
  }
 },
 "familial-hypercholesterolaemia": {
  "stem": {
   "name": "Daniel Okonkwo",
   "age": "38-year-old man",
   "pmh": [
    "No significant past medical history",
    "Non-smoker, BMI 23, runs marathons"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Routine lipid profile: total cholesterol 9.2 mmol/L, LDL-C 6.8 mmol/L. Confirmed on a repeat fasting sample.",
   "reason": "Video consultation to discuss his cholesterol result. He believes it must be a mistake."
  },
  "knowledge": {
   "guideline": "NICE CG71 (familial hypercholesterolaemia) · NICE NG238 (lipid modification) · NICE QS41",
   "summary": "A very high, confirmed LDL-C in a fit, slim, non-smoking 38-year-old with a father who had an MI at 44 is familial hypercholesterolaemia until proven otherwise. It needs a high-intensity statin, specialist referral and cascade testing, not diet and recheck.",
   "points": [
    {
     "h": "When to suspect FH",
     "t": "NICE CG71: consider FH in adults with total cholesterol above 7.5 mmol/L, especially with a personal or family history of premature coronary heart disease. NICE NG238: arrange specialist assessment if total cholesterol is above 9.0 mmol/L or non-HDL above 7.5 mmol/L, even without a family history."
    },
    {
     "h": "Make a clinical diagnosis",
     "t": "NICE CG71: use the Simon Broome or Dutch Lipid Clinic Network (DLCN) criteria. Take a three-generation family history of premature CHD and look for tendon xanthomata and corneal arcus. His LDL-C of 6.8 plus a father with an MI at 44 already gives a DLCN score above 5, which CG71 says should prompt referral to an FH specialist service for DNA testing."
    },
    {
     "h": "Exclude secondary causes",
     "t": "Check TSH, liver function, renal function, urine protein and HbA1c before labelling: hypothyroidism, nephrotic syndrome, cholestasis and diabetes can all raise cholesterol."
    },
    {
     "h": "Do not use QRISK",
     "t": "NICE CG71: do not use CHD risk tools such as QRISK in FH. People with FH are already at high risk, and the tools underestimate it. The diagnosis itself is the indication to treat."
    },
    {
     "h": "Treatment",
     "t": "NICE CG71: offer a high-intensity statin to adults with FH, aiming for at least a 50% reduction in LDL-C from baseline (drug and dose per BNF). NICE NG238: check liver transaminases before starting, and lipids and transaminases at 2–3 months. Ezetimibe and PCSK9 inhibitors (NICE TA394 / TA393) are specialist add-ons."
    },
    {
     "h": "Cascade testing",
     "t": "FH is autosomal dominant: each first-degree relative has a 1 in 2 chance of carrying it. NICE CG71 and QS41: offer cascade testing (DNA plus lipids) to at least first- and second-degree relatives, and third-degree relatives if possible. The specialist service usually coordinates this."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Daniel, thanks for joining on video. I’ve got your cholesterol results in front of me, but before I say anything about them, tell me what’s been going through your mind since you heard.",
    "dom": "rto",
    "why": "Starts with his view, not the numbers"
   },
   {
    "who": "pt",
    "text": "Honestly, I think there’s been a mistake. I run marathons, I’m slim, I eat really well, I don’t smoke. Can we just redo it? Or I’ll tighten my diet and we recheck in a few months."
   },
   {
    "who": "dr",
    "text": "I can hear how much that doesn’t add up for you, and I want to take that seriously. Could we spend a few minutes on the result and on you, and then agree a plan together? I’ll make sure we come back to the idea of rechecking.",
    "dom": "gs",
    "why": "Acknowledges his request and sets a shared agenda"
   },
   {
    "who": "pt",
    "text": "Sure. Go on."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Can I check one thing first: the second test was done fasting, and it came back very similar to the first?",
    "dom": "tasks",
    "why": "Confirms the result is genuine before interpreting it"
   },
   {
    "who": "pt",
    "text": "Yeah, they said it was basically the same. That’s what I don’t get."
   },
   {
    "who": "dr",
    "text": "That makes a lab error very unlikely, so it’s worth us working out why. Can I ask about your family? Has anyone had heart problems, a heart attack or a stroke, especially at a young age?",
    "dom": "tasks",
    "why": "Goes straight to the premature CVD family history"
   },
   {
    "who": "pt",
    "text": "My dad had a heart attack at 44. And his brother died suddenly when he was young. Nobody ever really explained why."
   },
   {
    "who": "dr",
    "text": "Thank you. That’s really important, and I’m sorry — that’s a lot of loss on your dad’s side. What do you remember of that time?",
    "dom": "rto",
    "why": "Responds to the emotional weight before moving on"
   },
   {
    "who": "pt",
    "text": "I was only a kid. But I remember how frightened everyone was."
   },
   {
    "who": "dr",
    "text": "I can imagine. A couple more questions. Have you ever noticed lumps or thickening on your tendons, like the back of your heels or your knuckles?",
    "dom": "tasks",
    "why": "Screens for tendon xanthomata"
   },
   {
    "who": "pt",
    "text": "Maybe. My Achilles have always looked a bit thick. I assumed it was from the running."
   },
   {
    "who": "dr",
    "text": "That’s useful. I’d like to look at those in person, and at your eyes, because a pale ring around the iris can go with this. Any chest pain or tightness, or unusual breathlessness when you run?",
    "dom": "tasks",
    "why": "Plans a face-to-face exam and screens for symptomatic CHD"
   },
   {
    "who": "pt",
    "text": "No. Nothing. My running’s been fine."
   },
   {
    "who": "dr",
    "text": "Good. Any tiredness, feeling cold, weight change, or problems with your waterworks or swelling? Some conditions can push cholesterol up, so I want to rule those out.",
    "dom": "tasks",
    "why": "Screens for secondary causes"
   },
   {
    "who": "pt",
    "text": "No, I feel great. That’s the point."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You mentioned your dad’s heart attack. When the result came back, did that cross your mind at all?",
    "dom": "rto",
    "why": "Gently tests for the buried fear"
   },
   {
    "who": "pt",
    "text": "…Yeah. If I’m honest, that’s why I want it to be a mistake. I’m 38. He was 44. Running is who I am. I can’t be the guy with a heart problem."
   },
   {
    "who": "dr",
    "text": "Thank you for saying that. It makes complete sense that you’d want it to be an error, when the alternative feels like your dad’s story coming for you. What were you hoping I’d say today?",
    "dom": "rto",
    "why": "Names the identity threat and elicits expectations"
   },
   {
    "who": "pt",
    "text": "That it’s wrong, or that I can fix it myself if I try harder."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me be honest with you, and I think the news is better than you fear. First: everything you’re doing is genuinely good for your heart, and none of this is your fault. A cholesterol this high, in someone as fit as you, with your dad’s heart attack at 44, points strongly to an inherited condition called familial hypercholesterolaemia.",
    "dom": "tasks",
    "why": "Validates lifestyle and states the working diagnosis"
   },
   {
    "who": "pt",
    "text": "Inherited? So it’s genetic?"
   },
   {
    "who": "dr",
    "text": "Yes. It’s a gene that stops the liver clearing ‘bad’ cholesterol properly. It affects about 1 in 250 people. It isn’t caused by diet, which is why your diet can only shift it a little. It’s a bit like trying to bail out a boat with a slow leak: you can work very hard and the water still rises.",
    "dom": "gs",
    "why": "Plain-language explanation with an analogy"
   },
   {
    "who": "pt",
    "text": "So all the running is pointless?"
   },
   {
    "who": "dr",
    "text": "Not at all. Your fitness protects your heart in lots of other ways, and it will help. But on its own it won’t bring this level down enough. The good part is that we’ve found it at 38, with a normal heart, which your dad never had the chance to do. Treatment works very well.",
    "dom": "rto",
    "why": "Reframes as early detection and hope"
   },
   {
    "who": "pt",
    "text": "What does treatment actually mean?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "A statin tablet — a strong one, because we want to at least halve your bad cholesterol. I’d do a blood test for your liver, thyroid, kidneys and sugar first. I’d also refer you to the specialist lipid clinic, who can confirm it with a genetic test and fine-tune treatment if needed.",
    "dom": "tasks",
    "why": "High-intensity statin, baseline bloods and specialist referral"
   },
   {
    "who": "pt",
    "text": "I’ve heard statins cause muscle aches. I can’t have that with my training."
   },
   {
    "who": "dr",
    "text": "That’s a fair worry. Most people take them without problems, and if you do get aches we can adjust the dose or try another. Would you be willing to try it, and we review together at about three months with a blood test?",
    "dom": "rto",
    "why": "Addresses his specific concern and shares the decision"
   },
   {
    "who": "pt",
    "text": "If it’s genetic, then… yeah. OK. I’d rather know I’ve done something."
   },
   {
    "who": "dr",
    "text": "There’s one more important part. Because this runs in families, anyone closely related to you — your parents, any brothers or sisters, any children — has a 1 in 2 chance of having it too. The clinic can arrange testing for them. By sorting yours, you may protect them.",
    "dom": "tasks",
    "why": "Explains cascade testing and its purpose"
   },
   {
    "who": "pt",
    "text": "Nobody in my family has ever talked about anything like this. That’s… actually a big thing."
   },
   {
    "who": "dr",
    "text": "It is. You don’t have to tell anyone today. The clinic has a family letter and a nurse who helps with those conversations, and it’s your choice who you share it with.",
    "dom": "gs",
    "why": "Respects confidentiality and his control over sharing"
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Before we finish: if you ever get chest pain or tightness, especially when running, or pain spreading to your arm or jaw, stop and call 999. That’s not what I expect, but you should know.",
    "dom": "gs",
    "why": "Specific, plain-language 999 safety-net"
   },
   {
    "who": "pt",
    "text": "Understood."
   },
   {
    "who": "dr",
    "text": "Can I check how that’s landed? If a friend at running club asked you tonight what the doctor said, what would you tell them?",
    "dom": "rto",
    "why": "Checks understanding with teach-back"
   },
   {
    "who": "pt",
    "text": "That it’s a family thing, not my diet. Statin, specialist, blood test, and my family might need checking."
   },
   {
    "who": "dr",
    "text": "Exactly right. I’ll book the bloods and a face-to-face check this week, send the referral, and see you after the three-month blood test. You came in thinking this was a mistake; it may be one of the most useful results you’ll ever get.",
    "dom": "gs",
    "why": "Summarises, confirms follow-up and closes on the reframe"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question about his reaction; let him make the ‘it must be a mistake’ case in full before responding.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Running and fitness as identity; his father’s MI and his memory of it; what a heart-risk label at 38 means to him.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up ‘it must be a mistake’ and the father’s MI at 44, and explored the fear rather than arguing with it.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (lab error, fixable by diet); concern (his father’s fate, loss of identity); expectation (a re-test or diet alone).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Confirmed a repeat fasting result; planned face-to-face exam for tendon xanthomata and corneal arcus; TSH, LFTs, U&E, urine protein, HbA1c.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "FH versus secondary hypercholesterolaemia (hypothyroidism, nephrotic, cholestasis, diabetes) versus lab error.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about exertional chest pain and breathlessness; knew QRISK must not be used to reassure in suspected FH.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named probable FH using Simon Broome/DLCN logic (LDL-C 6.8, father MI at 44, possible xanthomata).",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "High-intensity statin aiming for at least 50% LDL-C reduction; lipid clinic referral for DNA testing; lifestyle as an adjunct, not a substitute.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Cascade testing of first- and second-degree relatives explained, with his control over disclosure respected.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Transaminases before the statin; lipids and liver tests at 2–3 months; 999 for exertional chest pain; follow-up booked.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Investigations & results"
   ],
   "stem": {
    "name": "Daniel Okonkwo",
    "age": "38 years · male",
    "pmh": [
     "Nil significant",
     "Non-smoker · BMI 23"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Lipids: TC 9.2 mmol/L, LDL-C 6.8 mmol/L. Repeat fasting sample: similar. No family history recorded in the notes.",
    "reason": "Video consultation to discuss cholesterol result. “I think there’s been a mistake.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "He opens with ‘it must be a mistake’. Let him finish, and acknowledge the request for a re-test without agreeing to it."
    },
    {
     "t": "1–5",
     "h": "Focused history + ICE",
     "d": "Confirm the repeat was fasting. Family history of premature CHD (father 44, uncle). Tendon lumps, arcus, chest pain, secondary causes. Surface the fear about his dad by minute 5."
    },
    {
     "t": "5–7",
     "h": "Name it and reframe",
     "d": "‘This looks inherited, not lifestyle.’ Validate his fitness. Explain why diet alone won’t fix it, with an analogy."
    },
    {
     "t": "7–10",
     "h": "Shared management",
     "d": "High-intensity statin, baseline bloods, lipid clinic for DNA testing. Address the statin-ache worry. Explain cascade testing."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 for exertional chest pain. Blood test at 2–3 months. Face-to-face exam booked. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Agrees to ‘diet and recheck in three months’ or calculates QRISK and reassures; never asks about the family history; lectures on cholesterol without engaging his disbelief; no mention of genetics or cascade testing.",
    "pass": "Asks about premature CHD and elicits the father’s MI; suspects FH; offers a statin and lipid clinic referral; mentions testing relatives; basic safety-net.",
    "exc": "All of the above, plus: validates his lifestyle before reframing; surfaces the fear of his father’s fate and uses it to motivate treatment; explains why QRISK doesn’t apply; plans the face-to-face exam for xanthomata; handles cascade testing sensitively, leaving disclosure in his control; confirms understanding with teach-back."
   },
   "avoid": [
    {
     "dont": "“Let’s repeat it in three months after you’ve tightened up your diet.”",
     "instead": "“The repeat already confirmed it. With your dad’s history, waiting would only delay treatment that works.”",
     "why": "Colluding with ‘diet and recheck’ is the central management fail in suspected FH."
    },
    {
     "dont": "“Your QRISK score is low, so you don’t need a statin.”",
     "instead": "“The usual risk calculators don’t work for this inherited type of cholesterol — they underestimate it.”",
     "why": "NICE CG71 says not to use CHD risk tools in FH."
    },
    {
     "dont": "“You need to tell your whole family to get tested.”",
     "instead": "“Your relatives may want testing. The clinic can help, and it’s your choice how and when you share it.”",
     "why": "Cascade testing matters, but disclosure is his decision and needs support."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Identity and fitness",
     "t": "For a marathon runner, a ‘heart risk’ label threatens his sense of who he is. Validate the lifestyle and frame the statin as protecting it, not undoing it."
    },
    {
     "h": "Family history and grief",
     "t": "His father’s MI at 44 and an uncle’s sudden death may carry unspoken grief and fear. Cascade testing can reopen those conversations within the family."
    }
   ],
   "legal": [
    {
     "h": "Genetic testing and insurance",
     "t": "Under the Code on Genetic Testing and Insurance (HM Government and ABI, 2018), insurers cannot require or use the result of a predictive genetic test, except for Huntington’s disease in large life policies. A diagnostic test or a diagnosed condition may still need disclosing. He may ask this before agreeing to testing."
    }
   ],
   "professional": [
    {
     "h": "Confidentiality within families",
     "t": "GMC Confidentiality (2017) allows sharing genetic information with relatives without consent only in exceptional circumstances. Encourage and support him to share it himself, for example with a family letter from the lipid clinic."
    },
    {
     "h": "Consent and shared decision",
     "t": "Explain why a statin is recommended despite his fitness, discuss side effects honestly, and document his informed decision and the referral."
    }
   ],
   "community": [
    {
     "h": "Patient resources",
     "t": "HEART UK (the cholesterol charity) and the British Heart Foundation have FH information for patients and families. Specialist FH nurses in the lipid clinic support cascade testing."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Exertional chest pain, tightness or breathlessness, or syncope on running — needs urgent cardiac assessment",
     "Very high cholesterol with a family history of premature CHD or sudden death — FH until proven otherwise",
     "Symptoms of a secondary cause: hypothyroid features, oedema or frothy urine, jaundice or itch"
    ],
    "psychosocial": [
     "Running as identity: what a heart-risk label means to him",
     "Memory of his father’s heart attack and the uncle’s sudden death",
     "How and whether he will share the diagnosis with family"
    ],
    "ice": [
     "Idea: “There’s been a mistake — or I can fix it with diet.”",
     "Concern: ending up like his father, who had a heart attack at 44; losing his identity as a fit person",
     "Expectation: a re-test, or permission to try harder with diet"
    ]
   },
   "diagnosis": "State it clearly: “A cholesterol this high, confirmed twice, in someone as fit as you, with your dad’s heart attack at 44, points to an inherited condition called familial hypercholesterolaemia. It isn’t a lab error and it isn’t your lifestyle.”",
   "diagnosisLay": "“Your liver has a slow drain for bad cholesterol, because of a gene you were born with. However well you eat, the level stays high — like bailing out a boat with a leak. A statin helps the drain work properly.”",
   "management": {
    "reflectIce": "“You wanted this to be a mistake because the alternative sounds like your dad’s story. The difference is that you’ve found it at 38, with a healthy heart, and we can treat it now.”",
    "psychosocial": "Validate his fitness and frame the statin as protecting it. Address the muscle-ache worry directly. Leave disclosure to relatives in his hands, with clinic support.",
    "sharedPlan": [
     "Baseline TSH, LFTs, U&E, urine protein and HbA1c; face-to-face exam for xanthomata and arcus",
     "High-intensity statin aiming for at least 50% LDL-C reduction (NICE CG71; dose per BNF)",
     "Refer to the specialist lipid clinic for DNA testing and cascade testing of relatives"
    ],
    "safetyNet": [
     "999 for chest pain or tightness, especially on exertion, or pain spreading to arm or jaw",
     "Lipids and liver tests at 2–3 months; report unexplained muscle pain"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Hypercholesterolaemia",
    "s": "Case walkthrough · NICE NG238",
    "href": "../cases/hypercholesterolaemia.html"
   },
   {
    "ic": "💠",
    "t": "Familial hypercholesterolaemia",
    "s": "Management protocol · NICE CG71",
    "href": "management/familial-hypercholesterolaemia.html"
   },
   {
    "ic": "💠",
    "t": "Lipid modification",
    "s": "Statins · monitoring",
    "href": "management/hypercholesterolaemia.html"
   },
   {
    "ic": "💠",
    "t": "Cardiovascular protocols",
    "s": "Drug ladders · monitoring",
    "href": "management.html?cat=cardiovascular-and-renal"
   }
  ],
  "pitfalls": {
   "intro": "This station is rarely failed on lipid knowledge. It is failed by colluding with ‘it must be a mistake’, missing the family history, or treating it as a lifestyle problem. Each pattern below is fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Agreeing to ‘tighten the diet and recheck in three months’ because he is so fit.",
     "why": "The result is already confirmed. A very high LDL-C in a fit young man is the classic FH picture, and diet only shifts it modestly. Delay is a management fail.",
     "fix": "“The repeat confirmed it, so waiting won’t change the answer. What will change your future is starting treatment now.”"
    },
    {
     "dom": "tasks",
     "fail": "Calculating QRISK, getting a low number, and reassuring.",
     "why": "NICE CG71: do not use CHD risk tools in FH. They underestimate risk and are the wrong tool here.",
     "fix": "Say it aloud: “The usual risk calculator doesn’t work for inherited cholesterol, so I won’t use it to decide.”"
    },
    {
     "dom": "tasks",
     "fail": "Never asking about the family history of premature heart disease.",
     "why": "The father’s MI at 44 is the key to the diagnosis, and it also scores points under the Simon Broome and DLCN criteria.",
     "fix": "Ask early: “Has anyone in the family had a heart attack or died suddenly when young?”"
    },
    {
     "dom": "rto",
     "fail": "Arguing with his disbelief using numbers.",
     "why": "His disbelief is identity threat and fear about his father. Facts alone won’t shift that, and he will leave unconvinced.",
     "fix": "Validate first: “Everything you’re doing is good for your heart. This is in your genes, not your lifestyle.”"
    },
    {
     "dom": "tasks",
     "fail": "Forgetting cascade testing, or mentioning it only as he is leaving.",
     "why": "FH is autosomal dominant. Identifying relatives is a core part of management (NICE CG71, QS41), not an afterthought.",
     "fix": "Build it into the plan: “Your close relatives have a 1 in 2 chance of this too. The clinic can arrange testing.”"
    },
    {
     "dom": "gs",
     "fail": "Jargon such as ‘LDL receptor mutation’, ‘DLCN score’ and ‘autosomal dominant’.",
     "why": "Language the patient doesn’t understand is a standard feedback statement, and it widens the gap with a sceptical patient.",
     "fix": "Use a plain image, such as the slow drain or the leaking boat, then check understanding with teach-back."
    },
    {
     "dom": "gs",
     "fail": "Starting a statin with no monitoring plan or safety-net.",
     "why": "NICE NG238 requires baseline transaminases and review at 2–3 months. Exertional chest pain needs naming.",
     "fix": "“Blood test now and in three months. Chest pain when running means stop and call 999.”"
    }
   ]
  }
 },
 "generalised-itch": {
  "stem": {
   "name": "Alan Pickering",
   "age": "64-year-old man",
   "pmh": [
    "Ex-smoker",
    "No other significant past history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "No recent consultations or blood tests on file. Booked as a video consultation.",
   "reason": "About 10 weeks of itching all over, worse at night, with no rash. Requesting \"a strong cream or antihistamines\"."
  },
  "knowledge": {
   "guideline": "BAD guidelines for generalised pruritus in adults without an underlying dermatosis (2018) · NICE NG12 (updated April 2026) · BNF",
   "summary": "Generalised itch with no primary rash needs a search for a systemic cause. With night sweats, weight loss and a lump he has noticed, lymphoma must be excluded quickly: examine, test and refer. Symptom relief goes alongside the work-up, never instead of it.",
   "points": [
    {
     "h": "Itch without a rash",
     "t": "Scratch marks only, and no primary lesion, point away from a skin disease. Systemic causes include iron deficiency, thyroid disease, chronic kidney disease, cholestatic liver disease, drugs, polycythaemia (itch after a warm bath or shower) and haematological malignancy, particularly Hodgkin lymphoma (BAD 2018)."
    },
    {
     "h": "Ask for the B-symptoms",
     "t": "Drenching night sweats, unintended weight loss, fever and fatigue change the picture. Ask directly, because patients who want a quick cream often leave them out. Also ask whether any lymph node aches after alcohol."
    },
    {
     "h": "The NICE NG12 (updated April 2026) lymphoma criterion",
     "t": "NICE NG12 (updated April 2026): consider a suspected cancer pathway referral for Hodgkin lymphoma (and non-Hodgkin lymphoma) in adults with unexplained lymphadenopathy, taking into account associated symptoms, particularly fever, night sweats, shortness of breath, pruritus and weight loss (and, for Hodgkin lymphoma, alcohol-induced lymph node pain)."
    },
    {
     "h": "Examine in person",
     "t": "A video consultation cannot rule out lymphadenopathy or an enlarged liver or spleen. Arrange a prompt face-to-face examination of the cervical, axillary and inguinal nodes, abdomen and skin."
    },
    {
     "h": "First-line tests",
     "t": "BAD 2018: FBC and ferritin in everyone with chronic generalised itch without a rash, with renal, liver and thyroid function. Add a blood film, ESR, LDH, calcium and HbA1c as the picture suggests. NICE NG12 (updated April 2026): offer an urgent chest X-ray (within 2 weeks) to people aged 40 and over who have ever smoked and have one or more unexplained symptoms such as weight loss or fatigue."
    },
    {
     "h": "Symptom relief alongside",
     "t": "Emollients, cool showers rather than hot baths, and short nails. A sedating antihistamine at night may help sleep in the short term (choice and dose per BNF; caution in older adults). None of this replaces the work-up."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Pickering, thanks for joining the video call. Tell me about the itching, from the start.",
    "dom": "rto",
    "why": "Open question; lets him tell his story"
   },
   {
    "who": "pt",
    "text": "It’s been about ten weeks. All over, worst at night. There’s nothing to see except where I’ve scratched. I just want a strong cream or some antihistamines, doctor. It’s dry skin or my age, I expect."
   },
   {
    "who": "dr",
    "text": "Ten weeks of that sounds miserable, especially at night. I will help with the itch. Before I choose something, I need to ask a few questions, because itching all over without a rash can have a cause inside the body rather than in the skin. Is that alright?",
    "dom": "gs",
    "why": "Signposts and explains why a history comes before the cream"
   },
   {
    "who": "pt",
    "text": "If you must. I don’t want a fuss making."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Have you been sweating at night, enough to soak the sheets or the pillow?",
    "dom": "tasks",
    "why": "Asks directly for the first B-symptom"
   },
   {
    "who": "pt",
    "text": "Well, yes. A few times a week I’ve had to change my T-shirt. I put it down to the heating."
   },
   {
    "who": "dr",
    "text": "Has your weight changed without you trying?",
    "dom": "tasks",
    "why": "Second B-symptom"
   },
   {
    "who": "pt",
    "text": "I’ve dropped about five kilos. I thought that was no bad thing, to be honest."
   },
   {
    "who": "dr",
    "text": "And your energy?",
    "dom": "tasks",
    "why": "Fatigue"
   },
   {
    "who": "pt",
    "text": "Tired all the time. But I’m 64."
   },
   {
    "who": "dr",
    "text": "Does anything make the itch worse, for example a hot bath or shower?",
    "dom": "tasks",
    "why": "Aquagenic itch: points to polycythaemia or lymphoma"
   },
   {
    "who": "pt",
    "text": "Now you mention it, it’s terrible after a hot bath."
   },
   {
    "who": "dr",
    "text": "Any yellowing of your eyes or skin, dark urine, or pale stools? Any new tablets, creams or medicines from the chemist?",
    "dom": "tasks",
    "why": "Screens for cholestasis and drug causes"
   },
   {
    "who": "pt",
    "text": "No yellowing. Nothing new that I can think of."
   },
   {
    "who": "dr",
    "text": "You mentioned you used to smoke. Any cough or breathlessness?",
    "dom": "tasks",
    "why": "Smoking history and chest symptoms"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "Thank you, that’s really helpful. You’ve been living with sweats, weight loss and tiredness as well as the itch. I wonder if some of that has been on your mind. What have you been thinking it might be?",
    "dom": "rto",
    "why": "Gently opens the door to the unspoken worry"
   },
   {
    "who": "pt",
    "text": "(pause) I’ve been telling myself it’s nothing."
   },
   {
    "who": "dr",
    "text": "That’s very understandable. Can I ask gently: have you noticed any lumps anywhere, in your neck, armpits or groin?",
    "dom": "tasks",
    "why": "Asks directly about lymphadenopathy"
   },
   {
    "who": "pt",
    "text": "There’s a lump. I felt it a few weeks ago. I didn’t want to say. My first thought was cancer, and I thought if I got a cream it might all just go away."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That can’t have been easy, and carrying that on your own for weeks sounds hard. I’m really glad you’ve said it, because it changes what I need to do today.",
    "dom": "rto",
    "why": "Validates the disclosure and acknowledges the fear"
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "I’ll be honest with you. Itching all over, night sweats, weight loss and a lump together are a pattern we take seriously. One of the possibilities is a problem with the lymph glands, such as lymphoma. There are other, more common causes too, like low iron, thyroid, kidney or liver problems. I can’t tell which it is without examining you and doing tests.",
    "dom": "tasks",
    "why": "Names the concern honestly and proportionately, with the differential"
   },
   {
    "who": "pt",
    "text": "So it could be cancer."
   },
   {
    "who": "dr",
    "text": "It could be, and that’s why I don’t want to wait. It could also be something very treatable. Some lymphomas are among the most treatable cancers there are. Checking quickly is the way to find out, so you’re not lying awake wondering.",
    "dom": "rto",
    "why": "Balances honesty with realistic reassurance"
   },
   {
    "phase": "Shared plan",
    "clock": "9–11 min",
    "who": "dr",
    "text": "Here’s what I suggest. First, I’d like you to come in so I can examine the lump, your other glands and your tummy. Can you come to the surgery today or tomorrow?",
    "dom": "tasks",
    "why": "Arranges a prompt face-to-face examination"
   },
   {
    "who": "pt",
    "text": "Tomorrow morning I can."
   },
   {
    "who": "dr",
    "text": "Good. I’ll book blood tests at the same visit: blood count and film, iron, kidney, liver and thyroid tests and some inflammation markers. I’ll also request a chest X-ray, because you used to smoke and you’ve lost weight. If the lump is what it sounds like, I’ll refer you on the urgent suspected cancer pathway so a specialist sees you quickly. How does that sound?",
    "dom": "tasks",
    "why": "Structured work-up and NICE NG12 (updated April 2026)-based referral plan"
   },
   {
    "who": "pt",
    "text": "Quicker than I expected. Better, I suppose."
   },
   {
    "who": "dr",
    "text": "For the itch meanwhile: a greasy moisturiser used generously, lukewarm rather than hot baths, and I can give you something at night to help you sleep. That makes you comfortable while we find the cause.",
    "dom": "tasks",
    "why": "Symptom relief alongside, not instead of, the work-up"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If the lump grows quickly, you get fevers, you become breathless, or you feel much more unwell before I see you, ring us the same day, or 111 out of hours. Can you tell me the plan in your own words so I know I’ve explained it clearly?",
    "dom": "gs",
    "why": "Specific safety-net and teach-back"
   },
   {
    "who": "pt",
    "text": "Come in tomorrow to be examined, bloods and a chest X-ray, possibly an urgent referral, and the cream for the itch. Ring if anything gets worse."
   },
   {
    "who": "dr",
    "text": "Exactly right. I’ll go through every result with you myself. Would you like someone with you tomorrow?",
    "dom": "rto",
    "why": "Continuity and support"
   },
   {
    "who": "pt",
    "text": "I’ll think about it. Thanks, doctor. I’m glad I said something."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him describe the itch and his request before directing the history.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Impact on sleep and daily life; his reluctance to \"make a fuss\"; who could come with him.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the minimising (\"just my age\"), the pause, and the hot-bath trigger, and followed them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (dry skin), the hidden concern (a lump and a fear of cancer), and the expectation of a quick cream.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Face-to-face examination of nodes, abdomen and skin; FBC and film, ferritin, renal, liver and thyroid tests, ESR/LDH, calcium; urgent chest X-ray.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Systemic itch: iron deficiency, thyroid, renal, cholestasis, drugs, polycythaemia, lymphoma.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked directly for night sweats, weight loss, fatigue, lumps and jaundice; recognised the lymphoma pattern.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated a working concern of lymphoma to exclude, with benign causes still possible, in plain language.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Examination within a day, tests, suspected cancer pathway referral if nodes confirmed, symptom relief alongside.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Reviewed medicines and smoking history; gave emollient and sleep advice without delaying the work-up.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named symptoms that need same-day contact, teach-back, and personal follow-up of results.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "New & undifferentiated presentations",
    "Older adults"
   ],
   "stem": {
    "name": "Alan Pickering",
    "age": "64 years · male",
    "pmh": [
     "Ex-smoker"
    ],
    "meds": [
     "No regular medication recorded"
    ],
    "allergy": "None recorded",
    "recent": "No recent bloods on file. Video consultation booked by the patient.",
    "reason": "\"Itching all over for weeks, no rash. Can I have a strong cream?\""
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "He asks for a cream in the first sentence. Acknowledge it, then explain why you need to ask a few questions first."
    },
    {
     "t": "1–5",
     "h": "Directed history",
     "d": "Night sweats, weight loss, fatigue, itch after a hot bath, jaundice, drugs, smoking. These are the marks, and he will not volunteer them."
    },
    {
     "t": "5–7",
     "h": "Surface the fear",
     "d": "Ask directly about lumps. When he discloses the lump and his cancer fear, pause and acknowledge it."
    },
    {
     "t": "7–11",
     "h": "Explain and plan",
     "d": "Honest, proportionate explanation. Examination within a day, bloods, chest X-ray, suspected cancer pathway referral if nodes confirmed, symptom relief alongside."
    },
    {
     "t": "11–12",
     "h": "Safety-net and close",
     "d": "Named symptoms for same-day contact, teach-back, and you will go through results yourself."
    }
   ],
   "wordPics": {
    "fail": "Prescribes a cream or antihistamine on request; never asks about night sweats, weight loss or lumps; no examination arranged; the lump and the cancer fear remain undisclosed; or discloses \"it might be cancer\" bluntly and leaves him frightened with no plan.",
    "pass": "Recognises itch without a rash as a systemic flag; elicits the B-symptoms; arranges examination and first-line bloods; mentions urgent referral if nodes are found; gives symptom relief and a basic safety-net.",
    "exc": "All of the above, plus: asks directly about lumps and surfaces the fear with warmth; names lymphoma honestly with realistic hope; links the chest X-ray and referral to NICE NG12 (updated April 2026) criteria; arranges examination within a day; checks understanding with teach-back and promises personal follow-up."
   },
   "avoid": [
    {
     "dont": "\"It’s probably just dry skin at your age. Try this cream.\"",
     "instead": "\"I’ll help with the itch, but itching all over with no rash can come from inside the body, so let me ask a few questions first.\"",
     "why": "Colluding with the request misses the systemic red flags that define this station."
    },
    {
     "dont": "\"Night sweats, weight loss and a lump: that’s lymphoma until proven otherwise.\"",
     "instead": "\"This pattern is something we take seriously, and one possibility is a problem with the lymph glands. There are other causes too, and checking quickly is how we find out.\"",
     "why": "Honest but proportionate wording keeps him engaged rather than terrified."
    },
    {
     "dont": "\"Let’s see how the cream goes and review in a month.\"",
     "instead": "\"I’d like to examine you tomorrow and do blood tests and a chest X-ray at the same time.\"",
     "why": "Watchful waiting with B-symptoms and a lump is a Tasks fail."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Minimising and stoicism",
     "t": "Older men often present a \"small\" problem and hold back the frightening one. Asking directly and kindly about lumps and weight is what surfaces it."
    },
    {
     "h": "Support at a frightening time",
     "t": "Offer that someone can come with him to the examination and results appointments; ask about who is at home without assuming."
    }
   ],
   "legal": [
    {
     "h": "Remote consultation limits",
     "t": "GMC Good practice in prescribing and managing medicines and devices (2021): prescribe remotely only when you have enough information to do so safely; otherwise arrange a face-to-face assessment. Prescribing on request without assessment is not safe practice."
    }
   ],
   "professional": [
    {
     "h": "Honest communication",
     "t": "GMC Good Medical Practice 2024: share information about possible serious diagnoses honestly and in a way the patient can understand, at a pace he can manage."
    },
    {
     "h": "Safety-netting and results",
     "t": "Record the suspected diagnosis, the plan and the safety-net. Have a system to track the chest X-ray, bloods and the suspected cancer referral so nothing is lost."
    }
   ],
   "community": [
    {
     "h": "Patient resources",
     "t": "BAD patient information on pruritus; Lymphoma Action and Macmillan Cancer Support for information and support if lymphoma is confirmed."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Drenching night sweats, unintended weight loss, fever, persistent fatigue",
     "A lump in the neck, armpit or groin; node pain after alcohol",
     "Itch after a hot bath (polycythaemia or lymphoma); jaundice, dark urine or pale stools (cholestasis)"
    ],
    "psychosocial": [
     "Impact on sleep and daily life",
     "Reluctance to \"make a fuss\"; who is at home to support him",
     "Smoking history and any new medicines or remedies"
    ],
    "ice": [
     "Idea: \"It’s dry skin or my age\"",
     "Concern: a lump he has felt, and a fear of cancer he has not voiced",
     "Expectation: a strong cream or antihistamine and to leave"
    ]
   },
   "diagnosis": "Generalised itch without a primary rash, with night sweats, weight loss, fatigue and a palpable lump: a systemic cause is likely, and lymphoma must be excluded urgently. Iron deficiency, thyroid, renal and liver disease, polycythaemia and drugs remain in the differential.",
   "diagnosisLay": "\"Itching all over without a rash can be the skin’s way of telling us something is happening inside the body. With the sweats, the weight loss and the lump, I want to check your glands and blood carefully and quickly. It may well be something treatable, but we need to find out.\"",
   "management": {
    "reflectIce": "\"You came wanting a cream, and you’ve been quietly worried about that lump. I’m glad you told me. Checking it properly is the way to stop you lying awake over it.\"",
    "psychosocial": "Acknowledge the fear before the plan; offer that someone can come with him; promise to go through results personally.",
    "sharedPlan": [
     "Face-to-face examination within a day: lymph nodes, liver, spleen, skin",
     "FBC and film, ferritin, U&E, LFTs, TFTs, ESR, LDH, calcium, HbA1c; urgent chest X-ray (NICE NG12 (updated April 2026), ever-smoker aged 40 and over with weight loss or fatigue)",
     "Suspected cancer pathway referral if unexplained lymphadenopathy is confirmed (NICE NG12 (updated April 2026)); emollients and night-time symptom relief meanwhile"
    ],
    "safetyNet": [
     "Same-day contact for a rapidly growing lump, fever, breathlessness or feeling much more unwell; 111 out of hours",
     "Review of all results with the same GP; track the referral"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Pruritus",
    "s": "Case walkthrough · BAD 2018",
    "href": "../cases/pruritus.html"
   },
   {
    "ic": "🗺️",
    "t": "Widespread itch pathway",
    "s": "Visual algorithm · itch without a rash",
    "href": "algorithms/widespread-itch.html"
   },
   {
    "ic": "🗺️",
    "t": "Night sweats pathway",
    "s": "Visual algorithm · B-symptoms",
    "href": "algorithms/night-sweats.html"
   },
   {
    "ic": "🗺️",
    "t": "Lymphadenopathy pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026)",
    "href": "algorithms/lymphadenopathy.html"
   },
   {
    "ic": "💠",
    "t": "Haematological cancers",
    "s": "Protocol · referral and work-up",
    "href": "management/haematological-cancers.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by doing what the patient asks. Itch without a rash, B-symptoms and a hidden lump make it a cancer-recognition station dressed as a skin complaint. These are the recurring patterns in SCA feedback.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing an emollient and antihistamine after a two-minute history and closing.",
     "why": "\"Management plan not in line with current UK best practice.\" Generalised itch without a rash needs a systemic work-up (BAD 2018).",
     "fix": "Say out loud why you need to ask more: \"itching all over with no rash can start inside the body\", then screen for B-symptoms."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about lumps, so the node he has felt stays hidden.",
     "why": "\"Did not gather sufficient information to make a safe diagnosis.\" The NICE NG12 (updated April 2026) lymphoma criterion hinges on lymphadenopathy.",
     "fix": "Ask directly: \"Have you noticed any lumps in your neck, armpits or groin?\""
    },
    {
     "dom": "tasks",
     "fail": "Managing entirely by video, with bloods and a review in four weeks.",
     "why": "You cannot exclude lymphadenopathy or organomegaly remotely, and waiting weeks with B-symptoms is unsafe.",
     "fix": "Arrange a face-to-face examination within a day or two and put the tests and chest X-ray in place at the same visit."
    },
    {
     "dom": "rto",
     "fail": "Moving straight on when he admits the lump and his cancer fear.",
     "why": "\"Does not respond to the patient’s cues or emotional content.\" This disclosure is the emotional centre of the station.",
     "fix": "Pause: \"Thank you for telling me. Carrying that on your own must have been hard.\" Then explain."
    },
    {
     "dom": "rto",
     "fail": "Announcing \"this could well be lymphoma\" with no context, then listing tests.",
     "why": "Blunt disclosure without hope or structure frightens the patient and is marked as poor explanation.",
     "fix": "Name the possibility honestly, give the other causes, and say that some lymphomas are very treatable and that quick testing is the next step."
    },
    {
     "dom": "gs",
     "fail": "Spending eight minutes on a full dermatology and systems review, leaving no time to plan.",
     "why": "\"Poor time management; the plan was insufficiently developed.\"",
     "fix": "Focus the history on B-symptoms, lumps, jaundice, drugs and smoking, and be explaining by minute 7."
    },
    {
     "dom": "gs",
     "fail": "Closing with \"come back if it’s no better\".",
     "why": "Non-specific safety-netting is a standard failing statement.",
     "fix": "Name the symptoms that need same-day contact, use teach-back, and say you will go through the results yourself."
    }
   ]
  }
 },
 "globus-sensation": {
  "stem": {
   "name": "Asha Devi",
   "age": "45-year-old woman",
   "pmh": [
    "No significant past medical history"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Reception note: “Worried about a lump in her throat for several weeks, asking for urgent tests. Very anxious.” No previous ENT or gastroenterology referral.",
   "reason": "Telephone consultation about a lump sensation in her throat."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) — upper GI and head and neck · NICE CG184 (GORD and dyspepsia in adults, 2014, updated 2019) · NICE CG123 (common mental health problems, 2011; withdrawn May 2024)",
   "summary": "A midline lump sensation between meals, eased by eating, with throat-clearing and no true dysphagia or other red flags, is globus pharyngeus. Make a positive diagnosis, explain why it points away from cancer, treat contributors, and safety-net precisely.",
   "points": [
    {
     "h": "The globus pattern",
     "t": "A persistent feeling of a lump or tightness in the midline of the throat, present between meals and often eased by swallowing food or drink, with frequent throat-clearing. There is no food sticking, no pain on swallowing, no weight loss, no voice change and no neck lump. It is common and benign."
    },
    {
     "h": "Eased by eating is the key discriminator",
     "t": "An obstructing lesion causes true dysphagia: food physically sticks, usually worse with solids and progressive. A sensation that improves when eating points away from obstruction."
    },
    {
     "h": "Red flags that change the pathway",
     "t": "NICE NG12 (updated April 2026): dysphagia at any age → suspected cancer pathway referral for oesophageal or stomach cancer (recommendations 1.2.1 and 1.2.7, amended 2025; this replaced urgent direct-access upper GI endoscopy). At 45 and over, persistent unexplained hoarseness or an unexplained neck lump → consider a suspected cancer pathway referral for laryngeal cancer; a persistent unexplained neck lump also meets the oral cancer criterion. Also ask about pain on swallowing, one-sided symptoms, ear pain, weight loss, smoking and alcohol."
    },
    {
     "h": "Treat the contributors",
     "t": "Reflux: lifestyle measures and, if there are reflux symptoms, a trial of a proton pump inhibitor (NICE CG184; dose and duration per BNF). Reduce habitual throat-clearing (sipping water instead), which perpetuates the sensation. Treat post-nasal drip if present."
    },
    {
     "h": "Health anxiety is part of the treatment",
     "t": "Name the anxiety without dismissing the symptom. Explain that undirected tests rarely settle health anxiety and can find incidental results. Offer NHS Talking Therapies (self-referral) for persistent anxiety, in line with stepped care (NICE CG113 for anxiety disorders; CG123 was withdrawn in 2024)."
    },
    {
     "h": "When to refer",
     "t": "Any red flag, symptoms that progress, or globus persisting despite treatment → ENT assessment (nasendoscopy). Reassurance is safe only once the red flags have been asked about explicitly."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Asha Devi? It’s Dr Hughes from the surgery. Could you confirm your date of birth? Thank you. I understand you’ve been worried about your throat. Tell me what’s been happening.",
    "dom": "gs",
    "why": "Identity check, then an open question"
   },
   {
    "who": "pt",
    "text": "I’m really frightened. There’s been this lump feeling in my throat for weeks, like something’s stuck. A woman at work has just been diagnosed with throat cancer and now I’m convinced that’s what this is. Please, can you refer me for everything? A camera, a scan?"
   },
   {
    "who": "dr",
    "text": "I can hear how frightened you are, and I’m going to take this seriously. Can I ask you some careful questions first, so that whatever I tell you at the end is based on the facts? Then we’ll talk about tests.",
    "dom": "rto",
    "why": "Acknowledges fear and sets an agenda that includes her request"
   },
   {
    "who": "pt",
    "text": "Okay. Yes."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Show me where you feel it. Is it in the middle of your throat, or more to one side?",
    "dom": "tasks",
    "why": "Establishes midline versus lateralised symptoms"
   },
   {
    "who": "pt",
    "text": "Right in the middle, just above the notch at the bottom of my neck."
   },
   {
    "who": "dr",
    "text": "What happens to the feeling when you eat a meal?",
    "dom": "tasks",
    "why": "Tests the key discriminator between globus and obstruction"
   },
   {
    "who": "pt",
    "text": "Funnily enough it goes away while I’m eating. It’s worst in between, when I’m sitting at my desk."
   },
   {
    "who": "dr",
    "text": "That’s really useful. When you swallow, does food or drink ever actually get stuck, or hurt going down?",
    "dom": "tasks",
    "why": "Screens for true dysphagia and odynophagia"
   },
   {
    "who": "pt",
    "text": "No. Food goes down fine. It’s just the feeling."
   },
   {
    "who": "dr",
    "text": "Any change in your voice, hoarseness, lumps you can feel in your neck, ear pain, or weight loss without trying?",
    "dom": "tasks",
    "why": "Screens the head and neck and systemic red flags"
   },
   {
    "who": "pt",
    "text": "No. I keep feeling my neck and there’s nothing there. My weight’s the same."
   },
   {
    "who": "dr",
    "text": "Do you smoke, or drink alcohol regularly? And any heartburn, acid in your mouth, or clearing your throat a lot?",
    "dom": "tasks",
    "why": "Risk profile and contributing factors (reflux, throat-clearing)"
   },
   {
    "who": "pt",
    "text": "No, I don’t smoke or really drink. Some heartburn, maybe. And yes, I’m clearing my throat all the time. People have started to notice."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Did this feeling start before or after you heard about your colleague?",
    "dom": "rto",
    "why": "Explores the trigger of the specific fear"
   },
   {
    "who": "pt",
    "text": "(pause) Around the same time. I haven’t stopped thinking about her. I keep checking my neck and looking things up at night."
   },
   {
    "who": "dr",
    "text": "That sounds exhausting. It makes complete sense that your mind went there after something so shocking. What would help you most today?",
    "dom": "rto",
    "why": "Validates the anxiety and elicits the real expectation"
   },
   {
    "who": "pt",
    "text": "I just need to know it’s not cancer. I thought tests were the only way."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me give you my honest opinion. What you’re describing has a name: globus. It’s a very common feeling of a lump in the throat when nothing is actually there. And your answers point firmly towards it.",
    "dom": "tasks",
    "why": "Makes a confident positive diagnosis"
   },
   {
    "who": "dr",
    "text": "Here’s why I’m confident. A cancer that narrows the throat makes eating harder: food sticks, and it gets worse. Yours gets better when you eat. You have no food sticking, no voice change, no neck lump, no weight loss, and it’s in the middle rather than one side. Those are exactly the warning signs I look for, and you don’t have them.",
    "dom": "tasks",
    "why": "Reasoned reassurance linked to her own answers"
   },
   {
    "who": "pt",
    "text": "But my colleague must have felt something too."
   },
   {
    "who": "dr",
    "text": "She may have, but I don’t know her story, and yours has its own pattern. What I can tell you is that your pattern fits globus and doesn’t fit cancer. Does that make sense so far?",
    "dom": "rto",
    "why": "Separates her story from the colleague’s without breaching confidentiality or dismissing"
   },
   {
    "who": "pt",
    "text": "It does. It’s just hard to believe it’s nothing."
   },
   {
    "who": "dr",
    "text": "It isn’t nothing: the feeling is real. Acid reflux can irritate the throat, and clearing it keeps the feeling going. Worry makes us notice it more, which leads to more clearing. That’s a cycle we can break.",
    "dom": "tasks",
    "why": "Explains the mechanism and contributors"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "About tests. When the pattern is this clear and the warning signs are absent, lots of scans tend to feed the worry rather than settle it, and they can find unrelated things that lead to more tests. What I’d suggest instead: I’ll see you in person once to examine your neck and throat, so it isn’t only a phone call. We treat the reflux and ease off the throat-clearing, sipping water instead. And I’d like to help with the worry itself.",
    "dom": "tasks",
    "why": "Declines undirected tests with a reason, offers a proportionate examination and treatment"
   },
   {
    "who": "pt",
    "text": "The worry thing. You think I’m anxious?"
   },
   {
    "who": "dr",
    "text": "I think anyone would be after what happened to your colleague, and the night-time checking is a sign it’s grabbed hold. NHS Talking Therapies help with exactly this kind of worry, and you can refer yourself. Would you consider that?",
    "dom": "rto",
    "why": "Names health anxiety respectfully and offers support she can choose"
   },
   {
    "who": "pt",
    "text": "Maybe. If it stops me checking my neck all night, yes."
   },
   {
    "who": "dr",
    "text": "For the reflux: smaller evening meals, not eating late, and I’ll prescribe a four-week trial of an acid-reducing tablet. We’ll review in four weeks, and if the feeling hasn’t settled, I’ll refer you to the ear, nose and throat team to take a look.",
    "dom": "gs",
    "why": "Concrete plan with a defined review and escalation"
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "And here is exactly when to contact me sooner: if food or drink starts sticking, if swallowing hurts, if your voice becomes hoarse for more than a few weeks, if you feel a lump in your neck, if you lose weight without trying, or if it becomes one-sided. Those would mean an urgent referral, and I’d arrange it.",
    "dom": "gs",
    "why": "Precise safety-net listing the red flags that would trigger referral"
   },
   {
    "who": "pt",
    "text": "Okay. That actually helps, knowing what to look for instead of just worrying."
   },
   {
    "who": "dr",
    "text": "Can you tell me in your own words why I think this is globus?",
    "dom": "rto",
    "why": "Teach-back on the reasoning, not just the plan"
   },
   {
    "who": "pt",
    "text": "Because it gets better when I eat, and I haven’t got any of the warning signs. And the clearing and the worry keep it going."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll see you this week for the examination, and again in four weeks.",
    "dom": "gs",
    "why": "Closes with booked follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Identity check; open question; lets her voice the fear and the request before asking focused questions.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Colleague’s diagnosis, night-time checking and searching, others noticing the throat-clearing, impact on sleep and work.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Links the start of symptoms to the colleague’s diagnosis; picks up the neck-checking as health anxiety.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (throat cancer like her colleague); concern (cannot stop worrying); expectation (every test, a camera and a scan).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "One face-to-face neck and throat examination; no undirected tests; ENT referral if persistent or any red flag.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Globus with reflux and throat-clearing versus oesophageal, laryngeal or pharyngeal cancer; tests the eased-by-eating feature.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Explicitly asks about dysphagia, odynophagia, hoarseness, neck lump, weight loss, lateral symptoms, ear pain, smoking and alcohol; knows the NICE NG12 (updated April 2026) routes.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Names globus as a positive diagnosis and explains the reasoning in her own terms.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Reflux measures and a PPI trial (NICE CG184, dose per BNF), reduced throat-clearing, NHS Talking Therapies offered; resists an anxiety-feeding battery of tests.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Addresses health anxiety and reassurance-seeking as part of treatment, not an afterthought.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named red flags that trigger urgent referral; examination this week; review at 4 weeks with ENT if not settled.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Asha Devi",
    "age": "45 years · female",
    "pmh": [
     "Nil significant"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Reception note: “Lump in throat for weeks. Colleague has throat cancer. Wants urgent camera and scan. Very distressed.”",
    "reason": "Telephone consultation. “Please refer me for everything.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and contain",
     "d": "Identity check. She is frightened and asks for every test. Acknowledge the fear and promise to come back to tests."
    },
    {
     "t": "1–4",
     "h": "Pattern and red flags",
     "d": "Midline or one side; effect of eating; food sticking or pain; voice, neck lump, ear pain, weight; smoking, alcohol, reflux, throat-clearing."
    },
    {
     "t": "4–6",
     "h": "The trigger",
     "d": "Timing against the colleague’s diagnosis; night-time checking and searching; what would help most."
    },
    {
     "t": "6–10",
     "h": "Positive diagnosis and plan",
     "d": "Name globus; explain why eased-by-eating points away from cancer; mechanism; one examination, reflux treatment, less throat-clearing, Talking Therapies."
    },
    {
     "t": "10–12",
     "h": "Precise safety-net",
     "d": "Named red flags that would trigger urgent referral; review in 4 weeks; teach-back on the reasoning."
    }
   ],
   "wordPics": {
    "fail": "Refers for every test to end the call, or says “it’s just anxiety” without asking about red flags; no explanation of why it isn’t cancer; no plan for reflux or anxiety; vague safety-net.",
    "pass": "Asks about the red flags explicitly; names globus; explains that eating easing it is reassuring; treats reflux; gives a safety-net and follow-up.",
    "exc": "All of the above, plus: links the onset to the colleague’s diagnosis with warmth; explains why more tests could feed the worry; offers Talking Therapies as her choice; lists precise triggers for urgent referral; checks she can explain the reasoning back."
   },
   "avoid": [
    {
     "dont": "“It’s nothing, it’s just anxiety.”",
     "instead": "“The feeling is real, and it has a name, globus. Let me explain why your pattern points away from cancer.”",
     "why": "Dismissal loses her trust and does not address the fear; a reasoned positive diagnosis does."
    },
    {
     "dont": "“I’ll refer you for a camera and a scan just to put your mind at rest.”",
     "instead": "“With no warning signs, more tests tend to feed the worry. Here’s what would make me refer urgently.”",
     "why": "Undirected tests reinforce health anxiety and are not in line with UK practice for classic globus."
    },
    {
     "dont": "“Your colleague’s cancer is completely different.”",
     "instead": "“I don’t know her story, but your pattern fits globus and doesn’t fit cancer.”",
     "why": "You cannot know the colleague’s case; anchor the reassurance in her own features."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Trigger events",
     "t": "A colleague’s or relative’s cancer diagnosis commonly triggers health anxiety and body-checking. Ask about timing and support at work."
    },
    {
     "h": "Reassurance-seeking",
     "t": "Night-time searching, neck-checking and constant throat-clearing are part of the cycle. Name them gently and offer alternatives."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality of third parties",
     "t": "Do not speculate about the colleague’s diagnosis or compare cases. Keep the discussion on the patient’s own features."
    }
   ],
   "professional": [
    {
     "h": "Resource stewardship with a safety-net",
     "t": "GMC Good medical practice (2024) expects care based on clinical need. Declining undirected tests is defensible when red flags are explicitly excluded and documented, with a clear route to referral."
    },
    {
     "h": "Documenting reassurance",
     "t": "Record the red flags asked about and their absence, the diagnosis given, the safety-net advice and the review date."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "NHS Talking Therapies (self-referral) for health anxiety; community pharmacy advice on reflux measures."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "True dysphagia (food sticking) at any age: suspected cancer pathway upper GI endoscopy (NICE NG12 (updated April 2026))",
     "Persistent unexplained hoarseness or an unexplained neck lump at 45 and over: consider head and neck suspected cancer pathway (NICE NG12 (updated April 2026))",
     "Pain on swallowing, one-sided symptoms, ear pain, weight loss, smoking or heavy alcohol use"
    ],
    "psychosocial": [
     "Onset linked to a colleague’s throat-cancer diagnosis",
     "Night-time searching and repeated neck-checking",
     "Constant throat-clearing that others have noticed"
    ],
    "ice": [
     "Idea: “It’s throat cancer, like my colleague.”",
     "Concern: cannot stop thinking about it; needs certainty",
     "Expectation: referral for every test, a camera and a scan"
    ]
   },
   "diagnosis": "“This is globus: a real feeling of a lump in the throat when nothing is there. It gets better when you eat, which is the opposite of what a narrowing would do, and you have none of the warning signs.”",
   "diagnosisLay": "“Think of a smoke alarm that goes off when you make toast. The alarm is real, but there’s no fire. Reflux and throat-clearing are the toast, and worry turns up the alarm’s volume.”",
   "management": {
    "reflectIce": "“Since your colleague’s news, this has been on your mind day and night. I want you to leave with an explanation you believe, not just a list of tests.”",
    "psychosocial": "Name the checking cycle; offer NHS Talking Therapies as her choice; agree to reduce searching and neck-checking.",
    "sharedPlan": [
     "Face-to-face neck and throat examination once",
     "Reflux lifestyle measures and a 4-week PPI trial (NICE CG184, dose per BNF); sip water instead of throat-clearing",
     "Review at 4 weeks; ENT referral if not settled"
    ],
    "safetyNet": [
     "Food sticking, painful swallowing, hoarseness lasting weeks, a neck lump, weight loss or one-sided symptoms: contact for urgent referral",
     "Review booked at 4 weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Dysphagia pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) upper GI",
    "href": "algorithms/dysphagia.html"
   },
   {
    "ic": "🗺️",
    "t": "Hoarseness pathway",
    "s": "Visual algorithm · laryngeal red flags",
    "href": "algorithms/hoarseness.html"
   },
   {
    "ic": "💠",
    "t": "GORD protocol",
    "s": "Lifestyle · PPI trial · NICE CG184",
    "href": "management/gord.html"
   },
   {
    "ic": "📋",
    "t": "Anxiety",
    "s": "Case walkthrough · stepped care",
    "href": "../cases/anxiety.html"
   }
  ],
  "pitfalls": {
   "intro": "Reassurance is a skill that this station marks directly. Candidates fail by giving it too early (without the red flags), too thinly (“it’s nothing”), or not at all (referring for everything).",
   "items": [
    {
     "dom": "tasks",
     "fail": "Reassuring before asking about food sticking, voice change, neck lump and weight loss.",
     "why": "Reassurance without red-flag exclusion is unsafe and scores poorly in Tasks.",
     "fix": "Ask the red flags explicitly and tell her you have: “Those are the warning signs, and you don’t have them.”"
    },
    {
     "dom": "tasks",
     "fail": "Referring for endoscopy and a scan to end the consultation.",
     "why": "Undirected tests do not fit UK practice for classic globus and reinforce health anxiety.",
     "fix": "Explain why, offer one examination, and give clear referral triggers."
    },
    {
     "dom": "tasks",
     "fail": "Calling it globus but not explaining why.",
     "why": "An unexplained label does not reassure; examiners want reasoning shared with the patient.",
     "fix": "Use her own answer: “It eases when you eat; a narrowing would make eating worse.”"
    },
    {
     "dom": "rto",
     "fail": "Never linking the onset to the colleague’s diagnosis.",
     "why": "The trigger is the hidden agenda; missing it leaves the fear untouched.",
     "fix": "“Did this start before or after you heard about your colleague?”"
    },
    {
     "dom": "rto",
     "fail": "Labelling it “just anxiety”.",
     "why": "Patients hear “all in your head”. The symptom is real and has treatable contributors.",
     "fix": "“The feeling is real; worry turns up its volume. We’ll treat both.”"
    },
    {
     "dom": "gs",
     "fail": "Safety-netting with “come back if it gets worse”.",
     "why": "Vague safety-netting is standard failing feedback, and here it undermines safe reassurance.",
     "fix": "Name the triggers: food sticking, painful swallowing, hoarseness, neck lump, weight loss, one-sided symptoms."
    }
   ]
  }
 },
 "knee-xray-degenerative": {
  "stem": {
   "name": "Trevor Nash",
   "age": "58-year-old man",
   "pmh": [
    "Chronic knee pain"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "Knee X-ray report: “moderate degenerative changes / osteoarthritis, reduced joint space.” Works as a plumber.",
   "reason": "Video consultation to discuss his knee X-ray report, which has alarmed him."
  },
  "knowledge": {
   "guideline": "NICE NG226 (osteoarthritis in over 16s) · NICE QS87 · NICE NG222 (depression in adults)",
   "summary": "X-ray changes of osteoarthritis are common and match symptoms poorly. The core treatment is exercise and, where relevant, weight loss. Stopping activity makes knee OA worse, and replacement depends on symptoms, not the X-ray.",
   "points": [
    {
     "h": "A clinical diagnosis",
     "t": "NICE NG226: diagnose OA clinically, without imaging, in people aged 45 or over with activity-related joint pain and morning stiffness of 30 minutes or less (or none). X-ray appearance correlates poorly with pain and function."
    },
    {
     "h": "Exercise is treatment",
     "t": "NICE NG226: offer therapeutic exercise tailored to the person — local muscle strengthening and general aerobic fitness — as a core treatment. Explain that it will not damage the joint and that some discomfort at first is expected."
    },
    {
     "h": "Weight",
     "t": "NICE NG226: if the person is overweight, offer support to lose weight. Any loss helps, and 10% is likely to be better than 5%."
    },
    {
     "h": "Medicines",
     "t": "NICE NG226: offer a topical NSAID for knee OA first. Consider an oral NSAID at the lowest effective dose for the shortest time, with a PPI, if topical treatment is ineffective or unsuitable. Do not routinely offer paracetamol or weak opioids, except for infrequent short-term use. Do not offer strong opioids. Intra-articular steroid gives short-term relief (2–10 weeks)."
    },
    {
     "h": "Joint replacement",
     "t": "NICE NG226: consider referral for joint replacement when symptoms substantially affect quality of life and non-surgical management is ineffective or unsuitable. Do not exclude people because of age, weight, smoking or comorbidity. The decision is based on the person, not the X-ray."
    },
    {
     "h": "Mood and work",
     "t": "Fear, low mood and activity avoidance worsen pain and function. Ask about mood (NICE NG222) and about the impact on work, and offer adjustments rather than rest."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Trevor, thanks for joining. I understand the X-ray report has worried you. Tell me what went through your mind when you read it.",
    "dom": "rto",
    "why": "Opens with his reaction to the report"
   },
   {
    "who": "pt",
    "text": "It frightened me to death. ‘Degenerative changes’, ‘reduced joint space’ — it’s bone on bone, isn’t it? I’ve stopped walking and some of my work so I don’t wear it out faster. Am I going to end up crippled? Do I need a new knee? I’m 58 and I’m a plumber."
   },
   {
    "who": "dr",
    "text": "That’s a lot to be carrying. I want to answer every one of those questions properly. Can I ask a bit about the knee itself first, then go through what the report really means, and then plan together?",
    "dom": "gs",
    "why": "Acknowledges multiple concerns and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Yes. Please."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "How much is the knee actually troubling you day to day — the pain, and what you can and can’t do?",
    "dom": "tasks",
    "why": "Assesses symptoms and function, not the X-ray"
   },
   {
    "who": "pt",
    "text": "It aches, especially after a long day. Kneeling under sinks is the worst. But I can get about. I’ve just been scared to."
   },
   {
    "who": "dr",
    "text": "Any stiffness first thing, and how long does it last?",
    "dom": "tasks",
    "why": "Checks for mechanical versus inflammatory pattern"
   },
   {
    "who": "pt",
    "text": "A bit, but it’s gone in a few minutes."
   },
   {
    "who": "dr",
    "text": "Has the knee ever been hot and very swollen, locked so you can’t straighten it, or given way? Any pain at night that wakes you, or weight loss or feeling unwell?",
    "dom": "tasks",
    "why": "Screens for red flags"
   },
   {
    "who": "pt",
    "text": "No. None of that."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "That’s reassuring. How has stopping walking and work affected you?",
    "dom": "rto",
    "why": "Explores the impact of avoidance"
   },
   {
    "who": "pt",
    "text": "I’ve been turning jobs down. Sitting at home. I feel stiffer and, if I’m honest, pretty low."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me that. When you say low, how has your mood been over the last couple of weeks? Have you lost interest in things, or felt hopeless?",
    "dom": "tasks",
    "why": "Screens for depression"
   },
   {
    "who": "pt",
    "text": "Fed up more than anything. Worried about work. I’m not thinking of doing anything silly, if that’s what you mean. I just can’t see a way through."
   },
   {
    "who": "dr",
    "text": "I’m glad you’ve said it. What worries you most about the future?",
    "dom": "rto",
    "why": "Finds the core fear"
   },
   {
    "who": "pt",
    "text": "That I can’t work. Plumbing’s all I know. If my knee goes, I go with it."
   },
   {
    "who": "dr",
    "text": "That’s a huge worry, and it makes complete sense. What were you hoping I’d tell you today?",
    "dom": "rto",
    "why": "Elicits expectations"
   },
   {
    "who": "pt",
    "text": "Whether I need a new knee. And how long I’ve got before I’m crippled."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me start with those words on the report, because they sound much worse than they are. ‘Degenerative changes’ and ‘reduced joint space’ describe changes most knees show by our age. If we X-rayed people in their fifties with no pain at all, many would have the same report. It doesn’t mean your knee is crumbling.",
    "dom": "tasks",
    "why": "Reframes the report language"
   },
   {
    "who": "pt",
    "text": "So it’s not bone on bone?"
   },
   {
    "who": "dr",
    "text": "The X-ray shows some thinning of the cushioning, yes — that’s osteoarthritis. But how an X-ray looks and how a knee works are only loosely linked. What matters most is what you’ve told me: moderate pain, and you can still get about.",
    "dom": "tasks",
    "why": "Explains the poor link between imaging and symptoms"
   },
   {
    "who": "pt",
    "text": "I didn’t know that."
   },
   {
    "who": "dr",
    "text": "And here is the most important thing I’ll say today. Resting the knee to ‘save’ it actually makes it worse. Exercise is one of the best treatments for osteoarthritis. Strong thigh muscles take the load off the joint and reduce pain. Using it won’t wear it out.",
    "dom": "tasks",
    "why": "Corrects the exercise misconception"
   },
   {
    "who": "pt",
    "text": "Really? I thought I was protecting it."
   },
   {
    "who": "dr",
    "text": "You were doing what made sense to you. Many people think the same. But by resting, the muscles have weakened, which is why you feel stiffer. The good news is that it’s reversible.",
    "dom": "rto",
    "why": "Validates him without blame and restores agency"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "So here’s what I suggest. A physiotherapy referral for a strengthening programme. Gradually getting back to walking — some ache at first is normal and not harm. An anti-inflammatory gel for the knee on bad days. Does that sound doable?",
    "dom": "tasks",
    "why": "Active plan consistent with NICE NG226"
   },
   {
    "who": "pt",
    "text": "Yes. I can do that."
   },
   {
    "who": "dr",
    "text": "For work, let’s think about protecting the knee rather than stopping: good kneepads, a kneeling mat, spreading heavier jobs through the week. If you need a note for any adjustments, I can do that.",
    "dom": "gs",
    "why": "Practical work plan and fit note offer"
   },
   {
    "who": "pt",
    "text": "That would help. What about a new knee?"
   },
   {
    "who": "dr",
    "text": "A replacement is for when the pain is severe and really spoiling someone’s life despite everything else. It’s decided on you and your symptoms, not on the X-ray. With moderate pain and a proper exercise plan, you may be a long way from needing one.",
    "dom": "tasks",
    "why": "Realistic, person-based information on replacement"
   },
   {
    "who": "pt",
    "text": "That’s a weight off."
   },
   {
    "who": "dr",
    "text": "And your mood matters too. I’d like to see you again in a few weeks to check how you’re feeling. If things get worse, or you ever feel you can’t keep yourself safe, contact us that day or call 111 or 999.",
    "dom": "gs",
    "why": "Follows up mood with a safety-net"
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "For the knee: if it becomes hot and very swollen, locks, or you can’t put weight on it, get seen the same day.",
    "dom": "gs",
    "why": "Knee-specific safety-net"
   },
   {
    "who": "pt",
    "text": "Got it."
   },
   {
    "who": "dr",
    "text": "What will you tell your family about what the X-ray means?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "That it’s normal wear, not crumbling. Exercise is the treatment. Physio, gel, kneepads, and back to work."
   },
   {
    "who": "dr",
    "text": "Exactly. You came in thinking your knee was finished. It isn’t, and much of how it goes is in your hands. I’ll send the physio referral today and see you in a few weeks.",
    "dom": "gs",
    "why": "Summarises and closes with hope and a plan"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question about his reaction to the report; let him list all his fears before responding.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Plumbing and kneeling; turning work down; fear for his income; sitting at home; low mood.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up ‘I’ve stopped walking’, ‘pretty low’ and ‘plumbing’s all I know’, and explored each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (bone on bone, crumbling, exercise wears it out); concern (losing his livelihood, being crippled); expectation (to know about a new knee).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Symptoms and function rather than the X-ray; red flags; brief depression screen with a safety question; no further imaging needed.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Knee OA versus inflammatory arthritis, mechanical derangement, referred hip pain and sinister causes (night pain, weight loss).",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about hot swollen joint, locking, giving way, night pain and weight loss; assessed mood and safety.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated knee osteoarthritis with moderate symptoms, and explained that the X-ray words overstate it.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Exercise and physiotherapy as core treatment, topical NSAID first, weight support if relevant (NICE NG226); realistic replacement information.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Low mood screened and followed up; work adaptations and fit note offered; deconditioning explained.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Physiotherapy referral; review in a few weeks for mood and progress; same-day review for a hot, locked or non-weight-bearing knee; urgent help if unsafe.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Investigations & results"
   ],
   "stem": {
    "name": "Trevor Nash",
    "age": "58 years · male",
    "pmh": [
     "Chronic knee pain"
    ],
    "meds": [
     "No regular medication recorded"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Knee X-ray report: “moderate degenerative changes, reduced joint space, consistent with osteoarthritis.” Report viewed by patient before the appointment.",
    "reason": "Video consultation: “X-ray result — wants to discuss.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "He lists crippled, bone on bone, new knee, livelihood. Let him finish; acknowledge the fear."
    },
    {
     "t": "1–5",
     "h": "Symptoms, function, mood",
     "d": "Pain and what he can do. Morning stiffness. Red flags. The impact of stopping activity. Low mood and safety. Core fear: work."
    },
    {
     "t": "5–7",
     "h": "Un-frighten the words",
     "d": "Explain the report language and the poor link between X-ray and symptoms."
    },
    {
     "t": "7–10",
     "h": "Active plan",
     "d": "Exercise is treatment. Physiotherapy, gradual walking, topical NSAID, work adaptations. Realistic replacement information."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Mood follow-up and urgent help if unsafe. Hot, locked or non-weight-bearing knee — same day. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Reads the report back and agrees it’s ‘bone on bone’; advises rest and painkillers; discusses referral for replacement based on the X-ray; never asks about mood or work.",
    "pass": "Explains the report reasonably, recommends exercise and physiotherapy, offers topical NSAIDs, acknowledges his work concerns.",
    "exc": "All of the above, plus: explicitly un-frightens the words; corrects the ‘wear it out’ belief without blaming him; screens mood with a safety question; builds a work plan with kneepads and adjustments; explains replacement as a person-based decision; restores agency — he leaves seeing himself as the main treatment."
   },
   "avoid": [
    {
     "dont": "“Yes, the report shows it’s bone on bone.”",
     "instead": "“Those words describe changes most knees show by our age. They don’t mean your knee is crumbling.”",
     "why": "Repeating catastrophic language reinforces fear and avoidance."
    },
    {
     "dont": "“Rest it and take painkillers when it’s bad.”",
     "instead": "“Exercise is one of the best treatments — strong muscles protect the knee.”",
     "why": "Rest worsens knee OA. NICE NG226 puts exercise at the centre."
    },
    {
     "dont": "“I’ll refer you to see about a knee replacement.”",
     "instead": "“Replacement is for severe symptoms despite other treatment. It’s decided on you, not the X-ray.”",
     "why": "Referral based on imaging alone is inappropriate and deepens his catastrophising."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Livelihood",
     "t": "A plumber who kneels for his work has been turning jobs down. Fear for income and identity drives both avoidance and low mood."
    },
    {
     "h": "Deconditioning",
     "t": "Sitting at home weakens the muscles that protect the knee, increases stiffness, and deepens isolation and low mood."
    }
   ],
   "legal": [
    {
     "h": "Fit note",
     "t": "A fit note can say ‘may be fit for work’ with suggested adaptations (kneeling aids, lighter duties, phased return). This applies whether he is employed or self-employed and claiming benefits."
    },
    {
     "h": "Access to Work",
     "t": "Access to Work grants can fund equipment or support for people whose health condition affects their work, including the self-employed."
    }
   ],
   "professional": [
    {
     "h": "Communicating results",
     "t": "Reports released to patients before a consultation can cause harm when the language is alarming. Explaining findings in context is part of good clinical care (GMC Good Medical Practice 2024)."
    },
    {
     "h": "Avoiding over-investigation",
     "t": "NICE NG226 advises a clinical diagnosis without imaging in typical cases. Further imaging or early referral would reinforce the X-ray-led view of his knee."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Versus Arthritis for information and exercise resources; ESCAPE-pain, a group exercise and education programme, is available in many areas. NHS Talking Therapies if low mood persists."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Hot, very swollen joint or fever — septic or inflammatory arthritis",
     "Locking or giving way after injury — mechanical derangement",
     "Night pain, weight loss or feeling unwell — possible sinister cause; low mood with hopelessness — ask about safety"
    ],
    "psychosocial": [
     "Plumber who kneels for work; turning jobs down",
     "Fear for his income and loss of identity",
     "Low mood and sitting at home"
    ],
    "ice": [
     "Idea: “Bone on bone — my knee is crumbling, and exercise will wear it out faster.”",
     "Concern: being crippled and losing his livelihood",
     "Expectation: to know whether he needs a new knee"
    ]
   },
   "diagnosis": "Be clear and calming: “You have osteoarthritis of the knee, with moderate symptoms. The report’s words describe changes most knees show by our age. They don’t mean your knee is crumbling, and they don’t predict how it will do.”",
   "diagnosisLay": "“Think of the X-ray like the wrinkles on a face — everyone gets some, and they don’t tell you how well someone can run. What matters is how strong the muscles around your knee are, and that’s something you can change.”",
   "management": {
    "reflectIce": "“You stopped walking and work to protect your knee, and you’ve been frightened for your job. The good news is that keeping active is the treatment, and it’s the way back to work.”",
    "psychosocial": "Restore agency: exercise, kneepads and work adaptations, with a fit note if needed. Screen and follow up his mood.",
    "sharedPlan": [
     "Physiotherapy for strengthening; gradual return to walking (NICE NG226)",
     "Topical NSAID first; oral NSAID with PPI only if needed; weight support if relevant",
     "Replacement only if symptoms become severe despite treatment — a person-based decision"
    ],
    "safetyNet": [
     "Same-day review for a hot, very swollen, locked or non-weight-bearing knee",
     "Review in a few weeks for mood and progress; urgent help (111/999) if he feels unsafe"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Osteoarthritis",
    "s": "Case walkthrough · NICE NG226",
    "href": "../cases/osteoarthritis.html"
   },
   {
    "ic": "🗺️",
    "t": "Knee pain",
    "s": "Visual algorithm · red flags",
    "href": "algorithms/knee-pain.html"
   },
   {
    "ic": "💠",
    "t": "Osteoarthritis",
    "s": "Management protocol · NICE NG226",
    "href": "management/osteoarthritis.html"
   },
   {
    "ic": "💠",
    "t": "Depression",
    "s": "Management protocol · NICE NG222",
    "href": "management/depression.html"
   },
   {
    "ic": "🧮",
    "t": "PHQ-9",
    "s": "Medical Calculators",
    "href": "calculators.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by echoing the report’s language, advising rest, or missing his mood and livelihood fears. Each pattern below is fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Reading the report back to him and agreeing it is ‘bone on bone’.",
     "why": "Catastrophic language drives avoidance. NICE NG226 treats OA as a clinical diagnosis; the X-ray correlates poorly with symptoms.",
     "fix": "“Those words describe changes most knees show by our age. What matters is how your knee works.”"
    },
    {
     "dom": "tasks",
     "fail": "Advising rest and painkillers.",
     "why": "Rest worsens knee OA. Exercise is core treatment (NICE NG226), and paracetamol or weak opioids are not routinely recommended.",
     "fix": "“Exercise is the treatment. Using it won’t wear it out.” Offer physiotherapy and a topical NSAID."
    },
    {
     "dom": "tasks",
     "fail": "Discussing replacement as inevitable, or referring on the basis of the X-ray.",
     "why": "NICE NG226: replacement is for symptoms that substantially affect quality of life despite non-surgical care.",
     "fix": "“It’s decided on you and your symptoms, not the X-ray, and you may be a long way from it.”"
    },
    {
     "dom": "rto",
     "fail": "Missing ‘pretty low’ and ‘plumbing’s all I know’.",
     "why": "His fear for his livelihood and low mood are the hidden agenda. Missing them loses Relating marks and leaves a risk unassessed.",
     "fix": "Follow the cue: “When you say low, how has your mood been?” Ask about safety, and arrange follow-up."
    },
    {
     "dom": "rto",
     "fail": "Telling him he was wrong to stop activity.",
     "why": "Blame makes him defensive. He acted on a reasonable belief.",
     "fix": "“You were doing what made sense to you. Now we know more, we can reverse it.”"
    },
    {
     "dom": "gs",
     "fail": "A generic plan that ignores his work.",
     "why": "The plan must fit a plumber who kneels. Without that, he won’t return to activity or work.",
     "fix": "Offer kneepads, a kneeling mat, spreading heavy jobs, and a fit note with adaptations."
    }
   ]
  }
 },
 "learning-disability-check": {
  "stem": {
   "name": "Daniel",
   "age": "24-year-old man",
   "pmh": [
    "Moderate learning disability",
    "Autism"
   ],
   "meds": [
    "No repeat medication listed"
   ],
   "allergy": "None recorded",
   "recent": "Support worker reports one week of hitting himself, eating poorly, not sleeping and increased agitation — a change from his usual pattern.",
   "reason": "Video consultation requested by his support worker, who hopes for “something to calm him down”. Daniel is present."
  },
  "knowledge": {
   "guideline": "Equality Act 2010 (reasonable adjustments) · Mental Capacity Act 2005 · NICE NG11 (challenging behaviour and learning disabilities, 2015) · NHS England STOMP programme · LeDeR programme · Accessible Information Standard",
   "summary": "New self-injury, poor eating and poor sleep in a young man who cannot easily report pain is a physical problem until proved otherwise. Jaw-holding points to dental pain. Assess him in person with reasonable adjustments, find and treat the cause, and do not sedate distress.",
   "points": [
    {
     "h": "Diagnostic overshadowing",
     "t": "Attributing new symptoms to the learning disability or autism rather than looking for a cause. LeDeR reviews of deaths of people with a learning disability and autistic people repeatedly identify it as a contributor to avoidable harm."
    },
    {
     "h": "Look for the physical cause",
     "t": "NICE NG11: when behaviour that challenges develops or changes, assess for physical health problems, including pain, and consider dental problems, constipation, infection and sensory problems. Here jaw-holding plus poor eating makes dental pain or abscess the leading possibility."
    },
    {
     "h": "Do not medicate the distress",
     "t": "NICE NG11 advises considering antipsychotic medication for behaviour that challenges only when psychological and other interventions have not helped or the risk is severe, and reviewing it closely. NHS England’s STOMP programme aims to stop inappropriate psychotropic prescribing in this group."
    },
    {
     "h": "Reasonable adjustments are a legal duty",
     "t": "Equality Act 2010: longer or quieter appointments, the first or last slot, a familiar supporter present, step-by-step explanation, desensitised examination and pain-assessment tools such as DisDAT. The Accessible Information Standard requires communication needs to be recorded and met. “He hates being examined” means adapt, not omit."
    },
    {
     "h": "Capacity and consent",
     "t": "Mental Capacity Act 2005: assume Daniel has capacity, give him every practicable support to decide, and assess decision-specifically. A support worker cannot consent for him. If he lacks capacity for the examination or treatment, act in his best interests, consult those who know him, and choose the least restrictive option."
    },
    {
     "h": "Annual health check",
     "t": "People on the GP learning disability register are offered an annual health check from age 14, with a health action plan. Use this contact to check he is on the register, flag his reasonable adjustments and book the check."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Lee. Thank you for calling. Can I say hello to Daniel first? Hello Daniel — I’m a doctor. I can see you’re upset. I’m going to talk with your support worker and try to help.",
    "dom": "rto",
    "why": "Centres Daniel as the patient from the first sentence"
   },
   {
    "who": "pt",
    "text": "He’s not really going to answer you, doctor. Like I said, it’s his autism playing up. We just wondered about something to calm him down."
   },
   {
    "who": "dr",
    "text": "I understand — it’s been a hard week for everyone. I’d like to hear exactly what’s changed, because working out why is how we help him settle. Then we’ll agree what to do. Is that okay?",
    "dom": "gs",
    "why": "Sets an agenda that does not accept the premise"
   },
   {
    "who": "pt",
    "text": "Yeah, fine."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about Daniel when he’s his usual self. What’s different this week?",
    "dom": "tasks",
    "why": "Establishes baseline so the change becomes the key finding"
   },
   {
    "who": "pt",
    "text": "Normally he’s settled, likes his routine. This week he’s been hitting himself, not eating properly, up all night. More agitated than we’ve seen for a long time."
   },
   {
    "who": "dr",
    "text": "That’s a real change. Where on himself is he hitting — is it one particular place?",
    "dom": "tasks",
    "why": "Localises self-injury, which often points to the site of pain"
   },
   {
    "who": "pt",
    "text": "Now you say it… it’s mostly the side of his face. And he keeps holding his jaw."
   },
   {
    "who": "dr",
    "text": "That’s really important. When he tries to eat, what happens?",
    "dom": "tasks",
    "why": "Follows the jaw cue into eating behaviour"
   },
   {
    "who": "pt",
    "text": "He’ll take a bit, then stop and push it away. I’m honestly not sure how much he’s drinking."
   },
   {
    "who": "dr",
    "text": "Have you noticed any swelling of his face, a hot or red cheek, a temperature, or difficulty opening his mouth or swallowing?",
    "dom": "tasks",
    "why": "Screens for spreading dental infection needing same-day hospital care"
   },
   {
    "who": "pt",
    "text": "I haven’t looked properly — he won’t let us near his mouth. We haven’t taken his temperature."
   },
   {
    "who": "dr",
    "text": "And the other common things — has he opened his bowels normally, any change in his wee, pulling at his ears, any falls or knocks?",
    "dom": "tasks",
    "why": "Covers constipation, urinary infection, ear pain and injury"
   },
   {
    "who": "pt",
    "text": "I’d have to check his charts for bowels and wee. I haven’t noticed anything with his ears, and nobody’s reported a fall."
   },
   {
    "who": "dr",
    "text": "How does Daniel usually show you he’s in pain? Some people have a particular sound or gesture.",
    "dom": "tasks",
    "why": "Uses the carer’s knowledge of his pain behaviours"
   },
   {
    "who": "pt",
    "text": "He goes quiet, then he gets cross. A bit like this week, now I think about it."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "What’s been going through your mind about all this, and what’s worried you most?",
    "dom": "rto",
    "why": "Explores the carer’s ideas and concerns without blame"
   },
   {
    "who": "pt",
    "text": "Honestly, we’re short-staffed and he’s been up every night. We thought it was behaviour. And examining him is really hard — he gets so distressed. We just want him calmer."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "That sounds exhausting, and you clearly care about him — you noticed all of this. Can I share what I think? When someone who finds it hard to tell us about pain suddenly starts hitting his face, holding his jaw and not eating, the most likely explanation is that something hurts. It looks to me like his teeth or mouth — possibly an abscess.",
    "dom": "tasks",
    "why": "Names the likely physical cause and gently challenges overshadowing"
   },
   {
    "who": "pt",
    "text": "Oh. I didn’t think of that. I just assumed it was him."
   },
   {
    "who": "dr",
    "text": "It’s a really common assumption, and you’re not to blame. But it matters: people with a learning disability too often have pain or illness missed because it’s put down to their condition. A calming medicine wouldn’t fix a toothache — it would just make him drowsy while it carried on hurting.",
    "dom": "rto",
    "why": "Explains why sedation is wrong, supporting rather than criticising the carer"
   },
   {
    "who": "pt",
    "text": "That makes sense. But how do we examine him if he won’t let anyone near him?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "We adapt to him. I’ll see him in person today, at a quiet time with a longer appointment — the last slot, when the waiting room’s empty. You or whoever knows him best comes too. We go at his pace, show him what we’ll do first, and use a pain-checking tool with you. If he has a hospital passport, bring it.",
    "dom": "tasks",
    "why": "Concrete reasonable adjustments rather than skipping the examination"
   },
   {
    "who": "pt",
    "text": "I’ll check whether he has one and bring it if so."
   },
   {
    "who": "dr",
    "text": "Great. Daniel — we’re going to find out what’s hurting and make it better. I’ll show you everything before I do it.",
    "dom": "rto",
    "why": "Speaks to Daniel directly in simple language"
   },
   {
    "who": "dr",
    "text": "In the meantime, regular paracetamol at the correct dose for his weight is fine to start now for pain, and soft food and plenty to drink. If it is his tooth, he’ll need an urgent dentist — I’ll help arrange that, and we’ll ask the dental team about adjustments too.",
    "dom": "tasks",
    "why": "Treats pain now and plans definitive dental care"
   },
   {
    "who": "pt",
    "text": "What if he won’t let us look even then?"
   },
   {
    "who": "dr",
    "text": "Then we’ll decide together what’s in his best interests, involving you and anyone else who knows him well — that might mean a specialist dental service that can see him with extra support. The one thing we won’t do is decide it’s just behaviour without checking.",
    "dom": "tasks",
    "why": "Mental Capacity Act best-interests route, with least-restrictive options"
   },
   {
    "who": "dr",
    "text": "While we’re here, I’d like to check he’s on our learning disability register, record his adjustments so every visit is easier, and book his annual health check.",
    "dom": "gs",
    "why": "Uses the contact to address health inequality systematically"
   },
   {
    "who": "pt",
    "text": "I don’t think he’s had one of those for a while."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Then let’s sort it. Can you tell me back what we’re doing today?",
    "dom": "rto",
    "why": "Checks understanding with teach-back"
   },
   {
    "who": "pt",
    "text": "Paracetamol now, bring him in this afternoon with his passport if he has one, and probably an urgent dentist. And not just calming him."
   },
   {
    "who": "dr",
    "text": "Exactly. If his face swells, he gets a temperature, can’t open his mouth, struggles to swallow or breathe, or stops drinking, don’t wait for the appointment — ring 999 or go to A&E. If anything else worries you before then, call us straight back. Thank you for being such a good advocate for him today.",
    "dom": "gs",
    "why": "Specific red flags with clear escalation and positive reinforcement of the carer"
   },
   {
    "who": "pt",
    "text": "Thanks, doctor. I’m glad I rang."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Greeted Daniel directly, then used an open question about what had changed from his usual self.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Staffing pressures, sleepless nights for carers, his routine and how he usually communicates pain.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the face-hitting, jaw-holding and stopping eating, and pursued each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "The worker’s belief it was behaviour, fatigue and difficulty examining him, and the request for calming medication.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Same-day face-to-face examination with adjustments: mouth and teeth, ears, abdomen, temperature; urine if feasible; pain-assessment tool.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Dental pain or abscess first; ear or throat infection, constipation, urinary infection, injury; mood or environmental change only after physical causes.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about facial swelling, fever, trismus, swallowing, breathing and fluid intake.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Probable dental pain causing behaviour change, and named diagnostic overshadowing kindly.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "No sedation; analgesia now; urgent dental care with adjustments; best-interests process if he lacks capacity (Mental Capacity Act 2005).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Learning disability register, reasonable adjustments recorded, hospital passport used, annual health check booked.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day review; 999 or A&E for swelling, fever, trismus, swallowing or breathing difficulty, or not drinking.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Health disadvantage & vulnerabilities",
    "Professional & ethical dilemmas",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Daniel",
    "age": "24 years · male",
    "pmh": [
     "Moderate learning disability",
     "Autism"
    ],
    "meds": [
     "None on repeat"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Support worker call: one week of self-injury, poor eating, poor sleep and agitation — new for him. Requests “something to calm him”.",
    "reason": "Video consultation with support worker; Daniel present and distressed."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Greet Daniel, set the agenda",
     "d": "Say hello to Daniel by name. Acknowledge the worker’s tiredness without agreeing it is “just behaviour”."
    },
    {
     "t": "1–5",
     "h": "Baseline and change",
     "d": "What is his usual self; what is new; where he hits; eating, bowels, urine, ears; swelling, fever, trismus; how he shows pain."
    },
    {
     "t": "5–6",
     "h": "Hear the carer",
     "d": "Staffing, sleepless nights, fear of a distressing examination. Validate, then reframe."
    },
    {
     "t": "6–10",
     "h": "Name the cause and adapt",
     "d": "Likely dental pain; why sedation is wrong; same-day adjusted examination; analgesia; urgent dentist; best interests if needed."
    },
    {
     "t": "10–12",
     "h": "Register, safety-net, close",
     "d": "Learning disability register and annual health check; teach-back; 999 or A&E red flags."
    }
   ],
   "wordPics": {
    "fail": "Prescribes something to calm him or accepts “it’s his autism”; never asks what changed or where he is hitting; decides not to examine because he dislikes it; talks only to the carer as if Daniel were absent.",
    "pass": "Recognises a change in behaviour as likely pain, identifies the jaw cue, arranges a face-to-face assessment with reasonable adjustments, avoids sedation, and safety-nets for spreading infection.",
    "exc": "All of the above, plus: speaks to Daniel directly, uses the carer’s knowledge of his pain behaviours, names diagnostic overshadowing without blame, sets out the Mental Capacity Act route if he cannot consent, and uses the contact to book his annual health check and record adjustments."
   },
   "avoid": [
    {
     "dont": "“If it’s his autism, a small dose of something sedating might help him settle.”",
     "instead": "“When his behaviour changes like this, I want to find what’s hurting before anything else.”",
     "why": "Sedating unexplained distress is diagnostic overshadowing in action and contrary to STOMP and NICE NG11."
    },
    {
     "dont": "“If he won’t let anyone examine him, there’s not much we can do.”",
     "instead": "“Let’s adapt the appointment to him — quiet, longer, with someone he trusts.”",
     "why": "Reasonable adjustments are a legal duty under the Equality Act 2010."
    },
    {
     "dont": "Talking about Daniel for twelve minutes without once addressing him.",
     "instead": "“Hello Daniel — I’m going to help find what’s hurting.”",
     "why": "He is the patient; examiners mark exclusion as poor Relating to Others."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Supported living and staffing",
     "t": "Carers under pressure may default to behavioural explanations. Recognise their effort, enlist them as expert historians, and support them to advocate."
    },
    {
     "h": "Communication",
     "t": "Daniel may communicate pain through behaviour rather than words. His usual cues, routine and preferences should be recorded for every future contact."
    }
   ],
   "legal": [
    {
     "h": "Equality Act 2010",
     "t": "Services must make reasonable adjustments for disabled people. Failing to adapt the examination is a failure of this duty, not a clinical choice."
    },
    {
     "h": "Mental Capacity Act 2005",
     "t": "Assume capacity; support him to decide; assess decision-specifically. Without an attorney or deputy, the support worker cannot consent for him. If he lacks capacity, act in his best interests after consulting those who know him, choosing the least restrictive option."
    },
    {
     "h": "Accessible Information Standard",
     "t": "NHS services must identify, record, flag and meet the communication needs of people with a disability."
    }
   ],
   "professional": [
    {
     "h": "Advocacy and equity",
     "t": "GMC Good Medical Practice (2024): make sure vulnerable patients receive the same standard of care. Challenge diagnostic overshadowing kindly and document the adjustments made."
    },
    {
     "h": "Overmedication",
     "t": "NHS England STOMP: avoid psychotropics for behaviour without a clear indication; NICE NG11 limits antipsychotic use to specific circumstances with close review."
    }
   ],
   "community": [
    {
     "h": "Support for Daniel and his carers",
     "t": "Community learning disability team; specialist (special care) dental services for adapted dental treatment; Mencap for easy-read resources; hospital passport kept up to date."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Facial swelling, fever, trismus, difficulty swallowing or breathing — spreading dental infection needing same-day hospital care",
     "Not drinking or passing little urine — dehydration",
     "Injury from self-harm, especially around the face and eyes",
     "Any other new physical sign the carer notices, such as vomiting, abdominal distension or reduced consciousness"
    ],
    "psychosocial": [
     "His usual routine, communication and how he shows pain",
     "Carer fatigue and staffing pressures behind the request for sedation",
     "Recent changes in environment or staff, considered only after physical causes"
    ],
    "ice": [
     "Idea (carer): “It’s his autism playing up — a behaviour thing”",
     "Concern (carer): exhausted staff and a distressing examination; Daniel cannot say what hurts",
     "Expectation (carer): something to calm him down without examining him"
    ]
   },
   "diagnosis": "Probable dental pain (possible abscess) presenting as behaviour change in a young man with a learning disability and autism, at risk of diagnostic overshadowing: “Hitting his face, holding his jaw and not eating most likely mean his mouth hurts.”",
   "diagnosisLay": "“Daniel can’t tell us in words that his tooth hurts, so he’s telling us the only way he can — by holding his jaw, hitting his face and refusing food. If we listen to that, we can fix the pain, and the behaviour usually settles with it.”",
   "management": {
    "reflectIce": "“You’re exhausted and you want him calmer — so do I. The quickest way to a calmer Daniel is to find what’s hurting and treat it.”",
    "psychosocial": "Support the worker rather than criticise; involve the person who knows Daniel best in the adjusted appointment; record his communication needs so future contacts are easier.",
    "sharedPlan": [
     "Same-day face-to-face assessment with reasonable adjustments (quiet slot, longer time, familiar supporter, hospital passport, pain tool)",
     "Analgesia now; urgent dental care, including a specialist dental service if needed; best-interests decision if he lacks capacity",
     "No sedation; confirm learning disability register, record adjustments and book the annual health check"
    ],
    "safetyNet": [
     "Facial swelling, fever, trismus, swallowing or breathing difficulty, or not drinking: 999 or A&E",
     "Review after dental treatment to confirm the behaviour has settled; if not, look again for another cause"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Autism",
    "s": "Management protocol · adjustments",
    "href": "management/autism.html"
   },
   {
    "ic": "📋",
    "t": "Autism",
    "s": "Case walkthrough",
    "href": "../cases/autism.html"
   },
   {
    "ic": "🗺️",
    "t": "Jaw pain pathway",
    "s": "Visual algorithm · dental causes",
    "href": "algorithms/jaw-pain.html"
   },
   {
    "ic": "📋",
    "t": "Safeguarding",
    "s": "Case walkthrough · capacity and consent",
    "href": "../cases/safeguarding.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you see the patient behind the diagnosis label. Candidates fail it by agreeing with the carer, by avoiding a difficult examination, and by leaving Daniel out of his own consultation.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing a sedating medicine “for a few nights” to help the staff cope.",
     "why": "Sedating unexplained distress risks missing a treatable cause and is contrary to NICE NG11 and the STOMP programme.",
     "fix": "“A calming medicine wouldn’t fix a toothache. Let’s find what’s hurting.”"
    },
    {
     "dom": "tasks",
     "fail": "Accepting “it’s his autism” without asking what his usual self looks like.",
     "why": "Without a baseline you cannot see the change — and the change is the diagnostic clue.",
     "fix": "“Tell me about Daniel on a normal week. What’s different now?”"
    },
    {
     "dom": "tasks",
     "fail": "Missing the jaw-holding because you never asked where he was hitting himself.",
     "why": "The location of self-injury often points to the site of pain. Generic questions miss it.",
     "fix": "Ask specifically: “Where on himself is he hitting? Is he holding any part of his body?”"
    },
    {
     "dom": "rto",
     "fail": "Talking over Daniel for the whole consultation.",
     "why": "He is the patient. Examiners mark ignoring him as a Relating to Others failure.",
     "fix": "Greet him by name, explain simply what will happen, and speak to him again at the end."
    },
    {
     "dom": "rto",
     "fail": "Telling the support worker they have been negligent.",
     "why": "Criticism alienates the person you need as an ally and historian; diagnostic overshadowing is a system problem.",
     "fix": "“It’s a really common assumption and you’re not to blame — let’s work it out together.”"
    },
    {
     "dom": "gs",
     "fail": "Ending with “bring him in sometime this week” and no red flags.",
     "why": "A possible dental abscess can spread. Non-specific safety-netting is standard failing feedback.",
     "fix": "Same-day adjusted appointment, and name the 999 signs: facial swelling, fever, trismus, swallowing or breathing difficulty, not drinking."
    }
   ]
  }
 },
 "macrocytosis-result": {
  "stem": {
   "name": "Lisa Brennan",
   "age": "46-year-old woman",
   "pmh": [
    "None recorded relevant to this result"
   ],
   "meds": [
    "No repeat medication listed"
   ],
   "allergy": "None recorded",
   "recent": "FBC for tiredness: MCV 105 fL; haemoglobin, white cells and platelets normal. B12, folate, thyroid and liver tests not yet requested.",
   "reason": "Telephone call for her blood result. Told by reception her red cells are “large”."
  },
  "knowledge": {
   "guideline": "NICE NG239 (vitamin B12 deficiency in over 16s, 2024) · NICE NG145 (thyroid disease, 2019) · NICE PH24 (alcohol-use disorders: prevention, 2010) · NICE CG115 (alcohol-use disorders: dependence, 2011) · NICE CG100 (alcohol-use disorders: physical complications, 2010) · UK CMO low-risk drinking guidelines (2016) · NICE NG222 (depression in adults, 2022, updated December 2025)",
   "summary": "An MCV of 105 with a normal haemoglobin, white count and platelets is a finding to explain, not a sign of leukaemia. Work up the common causes, take a non-judgemental alcohol history, and respond to the grief behind the drinking.",
   "points": [
    {
     "h": "What isolated macrocytosis means",
     "t": "A raised MCV with normal haemoglobin, white cells and platelets usually has a benign, identifiable cause. Leukaemia typically presents with other abnormal counts or symptoms, not an isolated MCV rise."
    },
    {
     "h": "Common causes",
     "t": "Alcohol, vitamin B12 or folate deficiency, hypothyroidism, liver disease, drugs (for example methotrexate, hydroxycarbamide, some anticonvulsants and antiretrovirals), reticulocytosis after bleeding or haemolysis, and pregnancy. Primary marrow disorders such as myelodysplasia are less common."
    },
    {
     "h": "Structured work-up",
     "t": "B12 and folate (NICE NG239 covers B12 testing and treatment), TSH (NICE NG145), liver tests including GGT, reticulocyte count and a blood film, with a medication review and an honest alcohol history. Repeat the FBC after addressing the cause; red cells live about 120 days, so the MCV takes a few months to settle."
    },
    {
     "h": "When to involve haematology",
     "t": "Unexplained macrocytosis after the work-up, falling haemoglobin or other cytopenias, an abnormal film such as dysplastic features, or a progressive rise warrant haematology advice."
    },
    {
     "h": "Alcohol: screen, advise, support",
     "t": "NICE PH24: use AUDIT-C, then the full AUDIT if positive, and give structured brief advice. UK CMO: no more than 14 units a week, spread over 3 or more days. Assess for dependence and withdrawal risk (NICE CG115); if dependent, advise not to stop suddenly and arrange assisted withdrawal (NICE CG100)."
    },
    {
     "h": "Grief and mood",
     "t": "Rising drinking after a bereavement or relationship stress often signals distress. Screen mood and suicide risk. NICE NG222: offer treatment matched to severity and preference; NHS Talking Therapies accepts self-referral; bereavement support services help with grief itself."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Mrs Brennan? It’s Dr Lee from the surgery. Can I just confirm your date of birth? … Thank you. I understand you’ve been worried since hearing about your result — what’s been going through your mind?",
    "dom": "rto",
    "why": "Confirms identity on the phone and opens with her concern"
   },
   {
    "who": "pt",
    "text": "I panicked. The receptionist said my red cells are large, and I googled it and now I’m terrified it’s leukaemia. I feel mostly okay, just tired. Should I be worried?"
   },
   {
    "who": "dr",
    "text": "I’m sorry you’ve had that worry hanging over you. Let me take the biggest fear off the table straight away: large red cells, with the rest of your blood count completely normal, is very rarely anything to do with leukaemia. Can I explain what it usually means, ask you a few questions, and then agree a plan?",
    "dom": "tasks",
    "why": "Gives honest, early reassurance about the specific fear before exploring"
   },
   {
    "who": "pt",
    "text": "Yes. Okay. That’s a relief already."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "So, your red cells are a little larger than average. Your haemoglobin, white cells and platelets are all normal. That pattern usually has an everyday cause, and my job is to find which one. Tell me about the tiredness — how long, and what’s it like?",
    "dom": "tasks",
    "why": "Explains the result simply and moves to open data gathering"
   },
   {
    "who": "pt",
    "text": "A while now. Just flat, I suppose."
   },
   {
    "who": "dr",
    "text": "Any breathlessness, bruising, bleeding, infections, night sweats or weight loss?",
    "dom": "tasks",
    "why": "Screens for features that would point to a marrow problem"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Any tingling in your hands or feet, a sore tongue, or feeling the cold or putting on weight?",
    "dom": "tasks",
    "why": "Screens for B12 deficiency and hypothyroidism"
   },
   {
    "who": "pt",
    "text": "Not really."
   },
   {
    "who": "dr",
    "text": "Are you taking any medicines, supplements or anything from the chemist?",
    "dom": "tasks",
    "why": "Medication review for drug causes"
   },
   {
    "who": "pt",
    "text": "No, nothing regular."
   },
   {
    "who": "dr",
    "text": "One of the commonest causes of larger red cells is alcohol, so I ask everyone about it — no judgement at all, it just helps me find the answer. How much would you say you drink in a typical week at the moment?",
    "dom": "tasks",
    "why": "Normalises and asks a non-judgemental alcohol question"
   },
   {
    "who": "pt",
    "text": "… More than I used to. Quite a lot more, if I’m honest."
   },
   {
    "who": "dr",
    "text": "Thank you for being straight with me — that genuinely helps. Has something changed that led to that?",
    "dom": "rto",
    "why": "Acknowledges disclosure and gently explores the driver"
   },
   {
    "who": "pt",
    "text": "It’s been a hard time. There was a bereavement, and things at home have been difficult. A drink in the evening helped me switch off. Then it just crept up."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "I’m so sorry. That’s a lot to carry. Many people lean on a drink to get through grief — it’s nothing to be ashamed of. How have you been in yourself, in your mood?",
    "dom": "rto",
    "why": "Responds with compassion and moves to mood"
   },
   {
    "who": "pt",
    "text": "Low, if I’m honest."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. Can I ask — have you had any thoughts that life isn’t worth living, or of harming yourself?",
    "dom": "tasks",
    "why": "Asks directly about risk with alcohol and low mood"
   },
   {
    "who": "pt",
    "text": "No. Nothing like that. I’ve just been getting through."
   },
   {
    "who": "dr",
    "text": "I’m glad. If that ever changed, I’d want you to tell us straight away. Would it help to go through a few quick questions about the drinking, so we can see where things are?",
    "dom": "tasks",
    "why": "Moves to structured AUDIT-C screening with consent"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "How often do you have a drink, how many on a typical day, and how often six or more in one go? … Thank you. From what you’ve said, you’re drinking above the low-risk guideline of 14 units a week. Do you ever feel shaky, sweaty or unwell in the morning until you have a drink?",
    "dom": "tasks",
    "why": "Quantifies with AUDIT-C and screens for dependence and withdrawal"
   },
   {
    "who": "pt",
    "text": "I don’t think so. I’d have to think about it."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "That’s fine. Here’s how I see it. The most likely reason for your larger red cells is the extra alcohol, and the good news is that it usually settles once the drinking comes down. But I want to be thorough, so I’ll also check B12, folate, thyroid and liver tests, look at your cells under the microscope, and recheck the count in a few months.",
    "dom": "tasks",
    "why": "Gives the working diagnosis and a structured work-up"
   },
   {
    "who": "pt",
    "text": "So it’s not my blood — it’s me drinking."
   },
   {
    "who": "dr",
    "text": "It’s your body giving you an early nudge, before any harm is done. That’s actually helpful. It gives us a chance to look after you — the drinking and the grief behind it.",
    "dom": "rto",
    "why": "Reframes the result as an opportunity, not a verdict"
   },
   {
    "who": "pt",
    "text": "I suppose it is. I didn’t want to face it."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "What would feel realistic for you to start with — cutting down, having some drink-free days, something else?",
    "dom": "rto",
    "why": "Shared decision-making on alcohol reduction"
   },
   {
    "who": "pt",
    "text": "Maybe no drinking on weeknights to start with."
   },
   {
    "who": "dr",
    "text": "That’s a great first goal. One important safety point: if you do notice shakes, sweats or feeling very unwell when you cut down, don’t stop suddenly — ring us, as that needs support. I can also give you details for local alcohol support, bereavement support, and NHS Talking Therapies, which you can refer yourself to. Which would you like?",
    "dom": "tasks",
    "why": "Brief intervention with withdrawal safety and support options (NICE PH24, CG100)"
   },
   {
    "who": "pt",
    "text": "Maybe the bereavement support. And the talking therapy."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "I’ll send both by text. Can you tell me back what we’ve agreed?",
    "dom": "rto",
    "why": "Teach-back on a telephone consultation"
   },
   {
    "who": "pt",
    "text": "Bloods for B12 and thyroid and liver, no drinking on weeknights, the bereavement and talking therapy numbers, and ring if I get shaky."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll ring you with the results, and I’d like to speak again in about four weeks to see how you’re getting on. If your mood drops or you have any thoughts of harming yourself, contact us the same day or call NHS 111 and choose the mental health option. You rang terrified of leukaemia — what this really is, is a chance to look after you.",
    "dom": "gs",
    "why": "Defined follow-up, mood safety-net and a compassionate close"
   },
   {
    "who": "pt",
    "text": "Thank you, doctor. I actually feel lighter."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Confirmed identity, invited her fear, and reassured early and honestly about leukaemia.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Bereavement, difficulties at home, support around her and how she has been coping.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the pause and “more than I used to”, and explored the driver behind the drinking.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (leukaemia), concern (serious blood disease; unspoken shame about drinking), expectation (to know what “big cells” means).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "B12, folate, TSH, liver tests including GGT, reticulocytes, blood film; repeat FBC in a few months.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Alcohol versus B12 or folate deficiency, hypothyroidism, liver disease, drugs and marrow disorders.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for bleeding, bruising, infection, sweats and weight loss; asked about suicide risk and alcohol withdrawal.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Isolated macrocytosis most likely from increased alcohol, linked to grief and low mood.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "AUDIT-C and brief advice (NICE PH24); a goal she chose; withdrawal safety advice (NICE CG100).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Low mood screened; NHS Talking Therapies self-referral and bereavement support offered (NICE NG222).",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Results call, review in about four weeks, haematology if unexplained or other counts fall, same-day contact for worsening mood.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Investigations & results",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Lisa Brennan",
    "age": "46 years · female",
    "pmh": [
     "Nil relevant recorded"
    ],
    "meds": [
     "None on repeat"
    ],
    "allergy": "None recorded",
    "recent": "⚠ FBC for tiredness: MCV 105 fL. Hb, WCC and platelets normal. No haematinics, TFT or LFT on this sample.",
    "reason": "Telephone call for results. “Is it leukaemia?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Identity and fear",
     "d": "Confirm identity. She opens terrified of leukaemia — address it honestly within the first minute."
    },
    {
     "t": "1–5",
     "h": "Causes, then alcohol",
     "d": "Tiredness, marrow red flags, B12 and thyroid symptoms, medicines. Then a normalised alcohol question and the pause that follows."
    },
    {
     "t": "5–6",
     "h": "The real story",
     "d": "Bereavement, home stress, low mood. Ask about suicide risk; AUDIT-C and withdrawal screen."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Likely alcohol-related macrocytosis; full work-up; a goal she chooses; withdrawal safety; bereavement and Talking Therapies."
    },
    {
     "t": "10–12",
     "h": "Teach-back and safety-net",
     "d": "Results call, review in about four weeks, same-day contact if mood worsens."
    }
   ],
   "wordPics": {
    "fail": "Says “it’s probably nothing, we’ll recheck in three months”; or lists leukaemia among the causes; never asks about alcohol, or asks in a judgemental way; misses the bereavement and low mood.",
    "pass": "Reassures accurately, arranges B12, folate, thyroid and liver tests, takes an alcohol history that uncovers the increase, and offers support with follow-up.",
    "exc": "All of the above, plus: normalises the alcohol question so disclosure feels safe, responds warmly to the grief, screens mood and suicide risk, uses AUDIT-C and withdrawal advice, lets her choose her goal, and frames the result as an opportunity."
   },
   "avoid": [
    {
     "dont": "“Causes include alcohol, vitamin deficiency and, rarely, leukaemia or bone marrow problems.”",
     "instead": "“With the rest of your count normal, this is very rarely anything to do with leukaemia.”",
     "why": "Listing her worst fear as a possibility amplifies anxiety she rang with."
    },
    {
     "dont": "“Are you drinking too much?”",
     "instead": "“Alcohol is a common cause, so I ask everyone — no judgement. How much do you drink in a typical week at the moment?”",
     "why": "A loaded question invites denial; a normalised one invites honesty."
    },
    {
     "dont": "“Just cut down the drinking and we’ll recheck the blood.”",
     "instead": "“It sounds like the drinking went up after a really hard time. How have you been in yourself?”",
     "why": "Treating the number without the grief misses the real consultation."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Grief and coping",
     "t": "Bereavement and relationship strain commonly drive increased drinking. Shame keeps it hidden; a normalising approach helps disclosure."
    },
    {
     "h": "Support around her",
     "t": "Ask who she can talk to; grief and drinking often isolate people. Offer community bereavement services."
    }
   ],
   "legal": [
    {
     "h": "Driving",
     "t": "Nothing to notify today. If alcohol misuse or dependence is later diagnosed, the DVLA requires notification — explain this honestly if it arises."
    }
   ],
   "professional": [
    {
     "h": "Telephone consultations",
     "t": "Confirm identity before discussing results. Sensitive disclosures by phone need extra checking of understanding and a clear follow-up plan."
    },
    {
     "h": "Results communication",
     "t": "Reception staff relaying partial results (“large cells”) caused avoidable anxiety. Consider practice feedback on how abnormal results are communicated."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Local community alcohol services; Drinkline; Cruse Bereavement Support; NHS Talking Therapies (self-referral); Samaritans for crisis support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Bleeding, bruising, recurrent infection, night sweats or weight loss — possible marrow disorder",
     "Other abnormal counts or an abnormal blood film — haematology advice",
     "Neurological symptoms such as numbness or unsteadiness — possible B12 deficiency",
     "Suicidal thoughts, or morning shakes and sweats suggesting alcohol dependence"
    ],
    "psychosocial": [
     "Alcohol pattern, asked in a normalised way, with AUDIT-C",
     "Bereavement, home stress and who she has to talk to",
     "Mood, sleep and coping"
    ],
    "ice": [
     "Idea: “large cells” means leukaemia",
     "Concern: a serious blood disease; unspoken shame about the drinking",
     "Expectation: to understand the result and hear it isn’t leukaemia"
    ]
   },
   "diagnosis": "Isolated macrocytosis most likely related to increased alcohol intake, in the context of bereavement and low mood, with other causes to exclude: “Your red cells are slightly large, most likely from the extra alcohol, and it usually settles when drinking comes down.”",
   "diagnosisLay": "“Think of your red cells as a quiet record of the last few months. They’ve noticed the extra drinking before anything else has — an early warning, not a disease.”",
   "management": {
    "reflectIce": "“You rang terrified this was leukaemia. It isn’t pointing that way — and the thing it is pointing to is something we can help with.”",
    "psychosocial": "Acknowledge the grief as the driver; offer bereavement support and NHS Talking Therapies alongside alcohol reduction, and agree a goal she chose.",
    "sharedPlan": [
     "B12, folate, TSH, liver tests including GGT, reticulocytes and a blood film; repeat FBC in a few months",
     "AUDIT-C and brief advice (NICE PH24); weeknight drink-free goal; withdrawal safety advice (NICE CG100)",
     "Mood support: Talking Therapies self-referral and bereavement support (NICE NG222)"
    ],
    "safetyNet": [
     "Shakes or sweats when cutting down: don’t stop suddenly, contact the practice",
     "Worsening mood or thoughts of self-harm: same-day contact or NHS 111 mental health option; review in about four weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Macrocytosis pathway",
    "s": "Visual algorithm · causes and work-up",
    "href": "algorithms/macrocytosis.html"
   },
   {
    "ic": "💠",
    "t": "Harmful drinking and alcohol dependence",
    "s": "Protocol · AUDIT-C · referral",
    "href": "management/alcohol-problem-drinking.html"
   },
   {
    "ic": "📋",
    "t": "Alcohol",
    "s": "Case walkthrough · brief intervention",
    "href": "../cases/alcohol.html"
   },
   {
    "ic": "🗺️",
    "t": "Vitamin B12 deficiency",
    "s": "Visual algorithm · NICE NG239",
    "href": "algorithms/vitamin-b12-deficiency.html"
   },
   {
    "ic": "📋",
    "t": "Depression",
    "s": "Case walkthrough · NICE NG222",
    "href": "../cases/depression.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is about the person behind an unremarkable number. It is failed by filing the result with a recheck, by alarming the patient, or by an alcohol question that shuts disclosure down.",
   "items": [
    {
     "dom": "tasks",
     "fail": "“It’s only slightly raised — we’ll repeat it in three months.”",
     "why": "Macrocytosis is a finding to explain. Rechecking without a work-up misses B12 deficiency, hypothyroidism, liver disease and the alcohol.",
     "fix": "Arrange B12, folate, TSH, liver tests, reticulocytes and a film, and take an alcohol history."
    },
    {
     "dom": "rto",
     "fail": "Listing leukaemia among possible causes to be thorough.",
     "why": "She rang frightened of exactly that. Unbalanced lists increase anxiety and reduce trust.",
     "fix": "Reassure honestly first: “With the rest of your count normal, this is very rarely leukaemia.”"
    },
    {
     "dom": "rto",
     "fail": "Asking “Do you drink too much?” and accepting “no, not really”.",
     "why": "A loaded question invites denial and misses the most likely cause and the grief behind it.",
     "fix": "Normalise: “Alcohol is a common cause, so I ask everyone — no judgement.” Then pause and let her answer."
    },
    {
     "dom": "tasks",
     "fail": "Advising her to stop drinking completely from tonight.",
     "why": "If she is dependent, abrupt cessation risks withdrawal. NICE CG100 covers assisted withdrawal.",
     "fix": "Screen for morning shakes and sweats; agree a gradual goal; “If you get shaky when cutting down, ring us — don’t stop suddenly.”"
    },
    {
     "dom": "tasks",
     "fail": "Treating the drinking without asking about mood or suicide risk.",
     "why": "Grief, low mood and alcohol together raise risk; missing this is a serious omission.",
     "fix": "“How have you been in yourself?” then ask directly about thoughts of self-harm."
    },
    {
     "dom": "gs",
     "fail": "Ending the phone call without confirming the plan or a follow-up.",
     "why": "Telephone consultations need explicit checks; no follow-up is standard failing feedback.",
     "fix": "Teach-back, a results call, and a review in about four weeks."
    }
   ]
  }
 },
 "methadone-bridging": {
  "stem": {
   "name": "Danny Boyd",
   "age": "35-year-old man",
   "pmh": [
    "Opioid dependence on opioid substitution therapy (patient-reported)",
    "New registration: previous GP records not yet received"
   ],
   "meds": [
    "Methadone oral solution — patient reports 60 ml daily; prescriber, dispensing pharmacy and last dose not yet verified"
   ],
   "allergy": "Not yet recorded",
   "recent": "Registered last week after moving into the area. No Summary Care Record details reviewed yet. No contact yet with the local drug and alcohol service.",
   "reason": "Urgent telephone call: “My methadone runs out today.”"
  },
  "knowledge": {
   "guideline": "DHSC Drug misuse and dependence: UK guidelines on clinical management (2017, the “Orange Book”) · NICE TA114 (methadone and buprenorphine for opioid dependence, 2007) · BNF · Human Medicines (Amendment) Regulations 2015 (naloxone)",
   "summary": "Never prescribe methadone blind, and never simply refuse. Verify the dose and last dispensing with the previous prescriber and pharmacy, and get him to the local drug service urgently for safe continuation, with harm-reduction advice meanwhile.",
   "points": [
    {
     "h": "Why not prescribe blind",
     "t": "Methadone has a long and variable half-life and a narrow margin between a therapeutic and a fatal dose. An unverified dose, a duplicate prescription, or a dose given after tolerance has fallen during a gap can cause fatal respiratory depression. Deaths cluster around starting and transfer."
    },
    {
     "h": "Verify before continuing",
     "t": "Orange Book (2017): before continuing opioid substitution therapy for someone new, confirm the prescriber, dose, supervision arrangements and date of last dispensing with the previous prescriber and pharmacy, and make sure the previous prescription is cancelled to avoid double prescribing. Get the patient’s consent to share information."
    },
    {
     "h": "Route to specialist care urgently",
     "t": "Contact the local drug and alcohol service the same day; most have arrangements for patients transferring in. Any bridging supply from the practice should follow written confirmation from the previous prescriber, specialist advice, local shared-care arrangements and daily supervised consumption; doses per BNF and the specialist."
    },
    {
     "h": "Lost tolerance and relapse",
     "t": "If doses have been missed, tolerance may fall within days, so a restart needs clinical reassessment. Relapse to illicit opioids, especially on top of methadone or with alcohol or benzodiazepines, carries a high overdose risk."
    },
    {
     "h": "Naloxone",
     "t": "Since the Human Medicines (Amendment) Regulations 2015, drug services can supply naloxone without a prescription. Check whether he has a kit and that someone near him knows how to use it."
    },
    {
     "h": "Same-day action",
     "t": "Signs of overdose (pinpoint pupils, drowsiness, slow or noisy breathing, unresponsiveness): 999 and naloxone if available. Withdrawal is very unpleasant but rarely dangerous in itself; the danger lies in using on top."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Danny Boyd? It’s Dr Ahmed from the surgery. Can you confirm your date of birth and your new address for me? Thanks. I understand this is urgent. Tell me what’s going on.",
    "dom": "gs",
    "why": "Identity check for a new patient, then an open question"
   },
   {
    "who": "pt",
    "text": "I’ve just moved here, registered last week. I’m on methadone, 60 ml a day, and my script runs out today. If I don’t get it I’ll be climbing the walls tonight, and honestly I’m scared I’ll end up using again. I just need you to write me a script. Please."
   },
   {
    "who": "dr",
    "text": "Thank you for ringing and for being so upfront. I’m taking this seriously, and I’m going to help you get your treatment continued. I need to ask a few things so we do it safely and quickly. Is that okay?",
    "dom": "rto",
    "why": "Respect and urgency from the first sentence"
   },
   {
    "who": "pt",
    "text": "Yeah. Just, please don’t fob me off."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Who has been prescribing your methadone, and which pharmacy were you collecting from? Do you have their names or numbers?",
    "dom": "tasks",
    "why": "Gathers what is needed to verify"
   },
   {
    "who": "pt",
    "text": "My old drug service. I’ve got my keyworker’s number and the chemist’s in my phone."
   },
   {
    "who": "dr",
    "text": "That’s really helpful. Is it alright with you if I contact them to confirm your dose and when you last collected?",
    "dom": "tasks",
    "why": "Seeks consent to share information"
   },
   {
    "who": "pt",
    "text": "Yes, of course."
   },
   {
    "who": "dr",
    "text": "When did you last take a dose, and have you missed any over the move?",
    "dom": "tasks",
    "why": "Assesses tolerance and any gap"
   },
   {
    "who": "pt",
    "text": "Yesterday morning was the last one. I haven’t missed any before that."
   },
   {
    "who": "dr",
    "text": "Were you collecting daily and taking it at the pharmacy, or taking some home? And are you using anything else at the moment: heroin, other tablets, alcohol?",
    "dom": "tasks",
    "why": "Establishes supervision and concurrent use (overdose risk)"
   },
   {
    "who": "pt",
    "text": "Supervised most days. Nothing else, I’ve been clean a good while. That’s why I’m so scared."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said you’re scared. Tell me more about that.",
    "dom": "rto",
    "why": "Follows the emotional cue"
   },
   {
    "who": "pt",
    "text": "I’ve worked hard to get stable. If I go into withdrawal, I know what I’ll do. And every time I’ve moved, doctors look at me like I’m just an addict after drugs."
   },
   {
    "who": "dr",
    "text": "That sounds really hard, and I’m sorry that’s been your experience. You’ve done well to get stable, and my job today is to protect that, not judge it. What were you hoping I could do?",
    "dom": "rto",
    "why": "Validates the fear of judgement and elicits expectations"
   },
   {
    "who": "pt",
    "text": "Just write it. Sixty mil. Today."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’ll be honest about why I can’t just write it right now. Methadone stays in the body a long time and the gap between a safe dose and a dangerous one is narrow. If anything about the dose or your tolerance were different from what we think, or two prescriptions overlapped, it could be life-threatening. That’s not me doubting you. It’s the rule I’d follow for anyone, to keep them alive.",
    "dom": "tasks",
    "why": "Explains the no-blind-script boundary with reasons, not suspicion"
   },
   {
    "who": "pt",
    "text": "So I’m stuck, then."
   },
   {
    "who": "dr",
    "text": "No, you’re not. Here’s what I’ll do now: ring your keyworker and your old pharmacy to confirm your dose and last pick-up and cancel the old script, then ring the local drug service. They see people transferring in, often the same day, and they can continue your methadone safely.",
    "dom": "tasks",
    "why": "Verification plus urgent routing to the specialist service"
   },
   {
    "who": "pt",
    "text": "And if they can’t see me today?"
   },
   {
    "who": "dr",
    "text": "Then once your old service confirms everything in writing, I’ll speak to the local specialists about a short bridging supply, collected and taken at a pharmacy each day, until they take over. Either way, I’m not leaving this until there’s a plan for tonight.",
    "dom": "tasks",
    "why": "Contingency for a verified, supervised bridge with specialist input"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "While I sort that, two important things. Please don’t use anything on top to get through. If your tolerance has dropped even a little, that’s where overdoses happen. Do you have a naloxone kit?",
    "dom": "tasks",
    "why": "Harm reduction: no topping up, naloxone"
   },
   {
    "who": "pt",
    "text": "I had one. I don’t know where it is after the move."
   },
   {
    "who": "dr",
    "text": "I’ll ask the drug service to give you a new one, and it’s worth showing someone close to you how to use it. Is there anyone with you, or anyone who could be?",
    "dom": "tasks",
    "why": "Naloxone provision and support network without assuming details"
   },
   {
    "who": "pt",
    "text": "Yeah, there’s someone I can call."
   },
   {
    "who": "dr",
    "text": "Good. One more question, because I ask everyone in this situation: are you having any thoughts of harming yourself?",
    "dom": "tasks",
    "why": "Checks immediate safety"
   },
   {
    "who": "pt",
    "text": "No. I just want to stay on track."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "I’ll call you back within the hour with where to go and when. Keep your phone on. If you or anyone sees you very drowsy, with slow or noisy breathing, that’s 999 straight away. And if withdrawal gets very bad before I ring back, call the surgery, don’t use.",
    "dom": "gs",
    "why": "Timed callback, overdose safety-net and interim plan"
   },
   {
    "who": "pt",
    "text": "Okay. Within the hour."
   },
   {
    "who": "dr",
    "text": "Can you tell me what happens next, so we’re both clear?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "You ring my old service and chemist, then the local drug team. You call me back. I don’t use anything, and I get a new naloxone kit."
   },
   {
    "who": "dr",
    "text": "Exactly. You did the right thing ringing us. Speak soon.",
    "dom": "gs",
    "why": "Closes with continuity and affirmation"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Identity and address check; open question; acknowledges urgency without agreeing to a blind script.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Recent move, recovery and stability, support nearby, previous experiences of stigma.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Follows “I’m scared I’ll end up using” and “doctors look at me like I’m just an addict”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (GP writes a script); concerns (withdrawal, relapse, losing stability, judgement); expectation (60 ml today).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Verification with previous prescriber and pharmacy; last dose and missed doses; supervision; concurrent substances.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Genuine continuity need versus unverified dose, lost tolerance, or a risk of duplicate prescriptions.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Overdose risk from topping up or lost tolerance; alcohol and benzodiazepines; immediate safety and self-harm checked.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Opioid dependence on OST needing verified, urgent continuity, stated clearly to him.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "No blind script; same-day verification; urgent routing to the local drug service; supervised bridge only after confirmation and specialist advice.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Naloxone replacement, support person, advice against using on top or with alcohol or sedatives.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Callback within the hour; 999 for overdose signs; what to do if withdrawal worsens; documents the steps.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "Health disadvantage & vulnerabilities",
    "Urgent & unscheduled care",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Danny Boyd",
    "age": "35 years · male",
    "pmh": [
     "Opioid dependence on OST (patient-reported)",
     "New patient: previous records awaited"
    ],
    "meds": [
     "Methadone 60 ml daily (patient-reported; unverified)"
    ],
    "allergy": "Not recorded",
    "recent": "⚠ Registered last week after moving area. No prescriber, pharmacy or last-dispensing date on file. Not yet known to the local drug service.",
    "reason": "Urgent phone call. “I need a methadone script today.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Identify and acknowledge",
     "d": "Confirm identity and address. He asks for a script today and fears relapse. Show you are taking it seriously."
    },
    {
     "t": "1–4",
     "h": "Verification data",
     "d": "Previous prescriber and pharmacy, consent to contact, last dose, missed doses, supervision, other substances."
    },
    {
     "t": "4–6",
     "h": "Fear and stigma",
     "d": "Relapse fear, hard-won stability, past experiences of being judged. What he hopes you’ll do."
    },
    {
     "t": "6–10",
     "h": "Boundary and plan",
     "d": "Why not a blind script. Verify now, cancel the old prescription, local drug service today, supervised bridge only after confirmation. Harm reduction and naloxone."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Callback within the hour, overdose signs and 999, no using on top. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Writes a methadone prescription on his word; or refuses and tells him to contact his old service himself; treats him with suspicion; no harm-reduction advice; no callback.",
    "pass": "Declines a blind script with a reason; takes details to verify; refers to the local drug service urgently; mentions overdose risk and naloxone; arranges to call back.",
    "exc": "All of the above, plus: responds to the stigma he describes; gets consent to share information; asks about missed doses and other substances; ensures the old prescription is cancelled; offers a supervised bridge after verification; timed callback and teach-back."
   },
   "avoid": [
    {
     "dont": "“We don’t prescribe methadone here. You’ll need to sort it with your old service.”",
     "instead": "“I’m going to contact your old service and the local team now and ring you back with a plan for tonight.”",
     "why": "Refusal without action abandons him to withdrawal and relapse, which is unsafe."
    },
    {
     "dont": "“How do I know you’re really on 60 ml?”",
     "instead": "“I check this for anyone, because methadone is dangerous if the dose isn’t confirmed.”",
     "why": "Suspicion confirms his fear of judgement; a universal safety rule does not."
    },
    {
     "dont": "“I’ll write you three days to tide you over.”",
     "instead": "“Once your old service confirms the dose, we’ll arrange a supervised supply with the specialists.”",
     "why": "An unverified supply risks fatal overdose or double prescribing."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Transitions and relapse",
     "t": "Moving area, new services and gaps in treatment are high-risk times for relapse and overdose. Continuity of OST is itself protective."
    },
    {
     "h": "Stigma",
     "t": "People on OST often describe being treated as “just an addict”. A respectful, urgent response keeps them engaged."
    }
   ],
   "legal": [
    {
     "h": "Controlled drugs",
     "t": "Methadone is a Schedule 2 controlled drug. Prescriptions must meet CD requirements; instalment dispensing and supervised consumption are specified on the prescription."
    },
    {
     "h": "Driving",
     "t": "DVLA: drug dependence, including treatment on an OST programme, must be declared; licensing may continue on a stable supervised programme subject to assessment. Methadone is on the drug-driving specified list (Road Traffic Act 1988 section 5A), with a medical defence if taken as prescribed and not impaired."
    },
    {
     "h": "Confidentiality",
     "t": "GMC Confidentiality (2017): obtain his consent before contacting the previous service and pharmacy, and record it."
    }
   ],
   "professional": [
    {
     "h": "Safe prescribing",
     "t": "GMC Good practice in prescribing and managing medicines and devices (2021): prescribe controlled drugs only with adequate knowledge of the patient’s health and current medicines. Verification is a professional duty, not distrust."
    },
    {
     "h": "Safe storage",
     "t": "Take-home methadone can be fatal to a child. If children are ever in the home, discuss locked storage."
    },
    {
     "h": "Documentation",
     "t": "Record who was contacted, what was confirmed, the plan agreed with the drug service, and the callback."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "The local drug and alcohol service (self-referral usually possible), community pharmacy naloxone schemes where available, and peer-support groups such as Narcotics Anonymous."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Unverified dose, prescriber or last dispensing date",
     "Missed doses (reduced tolerance) or using other opioids, alcohol or benzodiazepines",
     "Thoughts of self-harm; no naloxone; alone after the move"
    ],
    "psychosocial": [
     "Recent move and loss of his usual services",
     "Pride in recovery and fear of losing it",
     "Past experiences of being judged by doctors"
    ],
    "ice": [
     "Idea: the GP can write a methadone script today",
     "Concern: withdrawal tonight, relapse, and being dismissed as “just an addict”",
     "Expectation: 60 ml prescribed today"
    ]
   },
   "diagnosis": "“You’re on a treatment that’s keeping you stable, and we need to continue it without a gap. Because methadone is dangerous if the dose isn’t confirmed, the safe and fast way is to verify it now and get you seen by the local drug team.”",
   "diagnosisLay": "“Methadone is like a key cut to fit one lock. If I cut it from memory and it’s slightly wrong, it can do real harm. Your old service has the exact pattern, so I’ll get it from them today.”",
   "management": {
    "reflectIce": "“You’re frightened of losing everything you’ve worked for. That’s exactly why I’m treating this as urgent, and why I want to do it safely.”",
    "psychosocial": "Respond to past stigma directly, involve a support person, and give him a clear timed plan so he isn’t left waiting.",
    "sharedPlan": [
     "Consent obtained; verify dose and last dispensing with previous prescriber and pharmacy; ensure the old prescription is cancelled",
     "Same-day contact with the local drug service for transfer; supervised bridge only after written confirmation and specialist advice",
     "Harm reduction: no using on top, avoid alcohol and sedatives, replacement naloxone"
    ],
    "safetyNet": [
     "Callback within the hour",
     "Overdose signs (very drowsy, slow or noisy breathing, unresponsive): 999 and naloxone"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Opioid dependence protocol",
    "s": "OST · transfer · naloxone",
    "href": "management/opioid-dependence.html"
   },
   {
    "ic": "📋",
    "t": "Drug dependence",
    "s": "Case walkthrough · harm reduction",
    "href": "../cases/drug-dependence.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA guidance",
    "s": "Drug misuse and dependence",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests a safety boundary held with compassion. Candidates fail by prescribing on trust, by refusing without acting, or by letting suspicion leak into their language.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Issuing a methadone prescription on the patient’s reported dose.",
     "why": "An unverified dose, lost tolerance or double prescribing can be fatal. This is a critical safety fail.",
     "fix": "Verify with the previous prescriber and pharmacy and involve the local drug service first."
    },
    {
     "dom": "tasks",
     "fail": "Refusing and telling him to sort it out with his old service.",
     "why": "Abandonment leads to withdrawal and relapse, with a high overdose risk. Refusal without action is also unsafe.",
     "fix": "Take on the verification and routing yourself, with a timed callback."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about missed doses or other substances.",
     "why": "These determine tolerance and overdose risk and change what the specialist can safely prescribe.",
     "fix": "Ask about the last dose, any gaps, and heroin, tablets or alcohol."
    },
    {
     "dom": "rto",
     "fail": "Questioning whether he is really on methadone.",
     "why": "Suspicion confirms his experience of stigma and damages engagement.",
     "fix": "Frame verification as a universal safety rule: “I’d do this for anyone.”"
    },
    {
     "dom": "tasks",
     "fail": "No harm-reduction advice or naloxone.",
     "why": "The interim period is when overdose risk peaks.",
     "fix": "Advise against using on top, check naloxone, and name the signs of overdose."
    },
    {
     "dom": "gs",
     "fail": "Ending with “someone will be in touch”.",
     "why": "An open-ended plan for an urgent problem leaves him alone tonight.",
     "fix": "“I’ll ring you back within the hour with where to go.”"
    }
   ]
  }
 },
 "nafld-result": {
  "stem": {
   "name": "Gary Hollis",
   "age": "49-year-old man",
   "pmh": [
    "BMI 33 with central obesity",
    "Clinic BP 142/90 mmHg",
    "HbA1c 44 mmol/mol (non-diabetic hyperglycaemia range)"
   ],
   "meds": [
    "No repeat medication",
    "Occasional paracetamol (patient report)"
   ],
   "allergy": "None recorded",
   "recent": "Bloods for tiredness: ALT about 80 IU/L, raised again on repeat. Bilirubin, ALP and INR normal. Triglycerides raised. Hepatitis B and C negative; ferritin and autoimmune screen unremarkable. Alcohol: a few units a week.",
   "reason": "Video appointment to discuss his liver blood test. Works as an accountant."
  },
  "knowledge": {
   "guideline": "NICE NG49 (MASLD, formerly NAFLD; updated July 2026) · BSG/BASL abnormal liver blood tests guideline (Newsome et al., 2018) · NICE PH38 (type 2 diabetes: prevention in people at high risk, 2012) · NICE NG136 (hypertension, 2019) · NICE NG238 (cardiovascular disease: risk assessment and reduction, 2023) · NICE NG246 (overweight and obesity management, 2025)",
   "summary": "A persistently raised ALT with central obesity, raised triglycerides, borderline BP and HbA1c in the high-risk range, minimal alcohol and a negative liver screen is fatty liver disease driven by metabolism (NAFLD, now also called MASLD). Assess fibrosis, not just the ALT, and treat the whole cardiometabolic picture without blame.",
   "points": [
    {
     "h": "Why it’s his liver without the drink",
     "t": "Fatty liver disease linked to insulin resistance is a common cause of a mildly raised ALT in people with central obesity, dyslipidaemia, raised glucose or hypertension. By definition it occurs without significant alcohol intake. Other causes (viral hepatitis, iron overload, autoimmune disease, drugs, alcohol) are excluded by the liver aetiology screen (BSG/BASL 2018)."
    },
    {
     "h": "ALT does not measure scarring",
     "t": "The ALT level does not reflect the degree of fibrosis; advanced fibrosis can exist with a normal or near-normal ALT. The prognostic question is fibrosis, so rechecking the ALT alone answers nothing (BSG/BASL 2018)."
    },
    {
     "h": "Assess fibrosis",
     "t": "BSG/BASL 2018: use a non-invasive score such as FIB-4 (age, AST, ALT, platelets) first; a high score (above 3.25) indicates likely advanced fibrosis. NICE NG49: offer the ELF blood test to people with NAFLD; ELF 10.51 or above indicates advanced fibrosis — refer to a hepatologist. If below 10.51, NG49 suggests retesting adults every 3 years. Ultrasound shows fat but cannot stage fibrosis."
    },
    {
     "h": "Treat the cardiometabolic picture",
     "t": "HbA1c 42–47 mmol/mol = high risk of type 2 diabetes: offer an intensive lifestyle programme and recheck at least yearly (NICE PH38). Clinic BP ≥140/90: offer ambulatory or home monitoring to confirm (NICE NG136). Calculate QRISK3 and offer atorvastatin 20 mg if ≥10% (NICE NG238)."
    },
    {
     "h": "Statins are not contraindicated",
     "t": "NICE NG238: do not routinely exclude people from statin treatment because their liver transaminases are raised but less than 3 times the upper limit of normal. Cardiovascular disease is a leading cause of death in people with fatty liver, so a raised ALT is not a reason to withhold statins."
    },
    {
     "h": "Weight is the treatment",
     "t": "Weight loss through diet and activity reduces liver fat and improves the other risk factors together. Use NICE NG246 for a structured, non-judgemental weight-management conversation and local tier 2 services. Alcohol: advise keeping within the UK CMO low-risk guideline of no more than 14 units a week."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Hollis, I’m Dr Lee. Thanks for joining. I know the liver result has been on your mind — what did you make of it when you heard?",
    "dom": "rto",
    "why": "Opens with his interpretation of the result"
   },
   {
    "who": "pt",
    "text": "Honestly, it baffled me. I barely drink — a couple of beers at the weekend. So it can’t be my liver, surely? Maybe it was a paracetamol I took. And I haven’t got a drink problem, if that’s what you’re thinking."
   },
   {
    "who": "dr",
    "text": "I’m not thinking that at all, and I’ll explain why in a moment. I’d like to check a couple of things with you, go through what the tests show, and agree a sensible plan. Does that work?",
    "dom": "gs",
    "why": "Defuses the defensiveness and sets a clear agenda"
   },
   {
    "who": "pt",
    "text": "Fine. As long as you’re not going to lecture me."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "No lectures, I promise. So I get it right — roughly how much do you drink in a typical week?",
    "dom": "tasks",
    "why": "Confirms alcohol intake factually, without making it the focus"
   },
   {
    "who": "pt",
    "text": "A couple of beers at the weekend. That’s it."
   },
   {
    "who": "dr",
    "text": "That’s well within the low-risk guideline, so alcohol isn’t the explanation here. How much paracetamol have you been taking, and any other tablets, supplements or herbal remedies?",
    "dom": "tasks",
    "why": "Checks drug and supplement causes"
   },
   {
    "who": "pt",
    "text": "Just the odd paracetamol for a headache. Nothing else."
   },
   {
    "who": "dr",
    "text": "That wouldn’t cause a rise that shows up twice. The bloods were for tiredness — how are you in yourself? Any yellowing of the eyes or skin, itching, dark urine, tummy swelling or pain?",
    "dom": "tasks",
    "why": "Screens for symptoms of decompensated or other liver disease"
   },
   {
    "who": "pt",
    "text": "None of that. Just tired. I’m an accountant — long days at a desk."
   },
   {
    "who": "dr",
    "text": "Tell me about a normal day for food and activity.",
    "dom": "rto",
    "why": "Open question into lifestyle without judgement"
   },
   {
    "who": "pt",
    "text": "Not great, if I’m honest. Whatever’s quick when work’s busy, and not much exercise these days."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You mentioned wondering what I’d think. Is there a worry sitting behind this for you?",
    "dom": "rto",
    "why": "Invites the hidden concern"
   },
   {
    "who": "pt",
    "text": "If I’m honest… ‘liver’ sounds serious. Cirrhosis, that kind of thing. I’d rather it was a blip and we move on."
   },
   {
    "who": "dr",
    "text": "That’s a very understandable worry, and I’m glad you said it. What were you hoping I’d say today?",
    "dom": "rto",
    "why": "Validates the fear and elicits his expectation"
   },
   {
    "who": "pt",
    "text": "That it’s nothing."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me be straight with you, because I think the truth is more reassuring than ‘nothing’. Alcohol is only one cause of a raised liver test. The commonest cause in someone who barely drinks is fat building up in the liver, driven by metabolism. We call it fatty liver disease.",
    "dom": "tasks",
    "why": "Corrects the misconception with a clear working diagnosis"
   },
   {
    "who": "pt",
    "text": "Fat in the liver? From what?"
   },
   {
    "who": "dr",
    "text": "Look at the rest of your results: carrying weight around the middle, blood pressure a little high, sugar in the range that means a higher risk of diabetes, and raised blood fats called triglycerides. Those travel together. The liver is just the one that showed up on a blood test — the messenger.",
    "dom": "tasks",
    "why": "Links the liver result to the metabolic cluster"
   },
   {
    "who": "pt",
    "text": "So it isn’t cirrhosis?"
   },
   {
    "who": "dr",
    "text": "The other tests ruled out the viral and inherited causes, which is good. But I don’t want to guess about scarring, because the liver number doesn’t tell us how much scarring there is — people can have scarring with a near-normal result. So I’d like a specific blood test that estimates scarring directly. If that’s high, I’ll refer you to the liver specialists. Most people at this stage don’t have significant scarring.",
    "dom": "tasks",
    "why": "Plans fibrosis assessment and explains why ALT is not enough"
   },
   {
    "who": "pt",
    "text": "Okay. That’s fairer than just repeating the test."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s the genuinely good news: at this stage, fatty liver is largely reversible. The same changes that take fat out of the liver also bring down your sugar, your blood pressure and your heart risk. One plan, several benefits.",
    "dom": "rto",
    "why": "Reframes as a fixable warning, which motivates without blame"
   },
   {
    "who": "pt",
    "text": "Go on then. What would that look like?"
   },
   {
    "who": "dr",
    "text": "You tell me what’s realistic. What’s one thing that would genuinely fit around your work?",
    "dom": "rto",
    "why": "Shared decision-making that respects his constraints"
   },
   {
    "who": "pt",
    "text": "Probably the quick convenience food. And I could get out for a walk at lunchtime."
   },
   {
    "who": "dr",
    "text": "Both excellent. I’ll also refer you to the diabetes prevention programme — it’s free and built for exactly your blood results. And I’d like you to check your blood pressure at home for a week, because one clinic reading isn’t enough to decide anything.",
    "dom": "tasks",
    "why": "Acts on the pre-diabetes and confirms BP per guidance"
   },
   {
    "who": "dr",
    "text": "I’ll also work out your heart risk score. If it comes back 10% or more, I’d offer a cholesterol tablet — and a raised liver test like yours isn’t a reason to avoid one.",
    "dom": "tasks",
    "why": "Addresses CVD risk and pre-empts a common statin misconception"
   },
   {
    "who": "pt",
    "text": "I’d have assumed a statin was bad for the liver."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "A common belief, but not at this level. So: scarring test, home blood pressure readings, heart risk score, the diabetes programme, and your two changes. Can you tell me back what you’ll do first?",
    "dom": "rto",
    "why": "Summarises and checks understanding with teach-back"
   },
   {
    "who": "pt",
    "text": "Get the blood test done, borrow a BP monitor, cut the convenience food and walk at lunch."
   },
   {
    "who": "dr",
    "text": "Perfect. If you ever notice yellow eyes or skin, dark urine, swelling of your tummy or legs, vomiting blood or black stools, contact us the same day. Otherwise, I’ll see you in about four weeks with the scarring result and your readings, and we’ll recheck the liver and sugar tests in a few months. You came wanting to hear it was nothing — what it is, is a warning you’ve caught early.",
    "dom": "gs",
    "why": "Specific red flags, booked follow-up and a positive close"
   },
   {
    "who": "pt",
    "text": "Fair enough. Thanks, doctor — that’s actually made me want to do something about it."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Asked what he made of the result, and let him voice “I barely drink” without argument.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work pattern, desk-based job, eating habits, activity, and his defensiveness about alcohol.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I haven’t got a drink problem” and “I’d rather it was a blip”, and explored the fear of cirrhosis.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (alcohol is the only liver cause), concern (serious liver disease, being judged), expectation (told it’s nothing).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Fibrosis assessment (FIB-4 per BSG/BASL 2018 and ELF per NICE NG49), home or ambulatory BP, QRISK3, repeat HbA1c; abdominal examination and ultrasound as locally indicated.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Fatty liver disease versus alcohol, drugs or supplements; negative viral, iron and autoimmune screen reviewed.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about jaundice, itch, dark urine, ascites and abdominal pain; recognised that ALT does not exclude advanced fibrosis.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named metabolic fatty liver disease within a cardiometabolic cluster, in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Fibrosis test with hepatology referral if ELF ≥10.51 (NICE NG49); negotiated lifestyle goals; diabetes prevention programme (NICE PH38).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Confirmed BP out of clinic (NICE NG136); QRISK3 with statin offer if ≥10%, not withheld for ALT <3× ULN (NICE NG238).",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review in about four weeks; recheck liver tests and HbA1c; same-day contact for jaundice, ascites, GI bleeding.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Investigations & results",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Gary Hollis",
    "age": "49 years · male",
    "pmh": [
     "Obesity (BMI 33)",
     "BP 142/90 (single clinic reading)",
     "HbA1c 44 mmol/mol"
    ],
    "meds": [
     "Nil on repeat"
    ],
    "allergy": "None recorded",
    "recent": "⚠ ALT about 80 IU/L on two samples. Bilirubin, ALP, INR normal. Triglycerides raised. Hep B/C negative, ferritin and autoimmune screen unremarkable. No fibrosis assessment on file.",
    "reason": "Video appointment to discuss liver blood test. “I barely drink.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and defuse",
     "d": "He opens defensive about alcohol. Say clearly you are not assuming a drink problem, then set the agenda."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Units per week, drugs and supplements, liver symptoms, food, activity and work. Find the fear behind “it’s a blip”."
    },
    {
     "t": "5–6",
     "h": "Name the cluster",
     "d": "Weight, BP, sugar, triglycerides and the ALT belong together — fatty liver disease, not alcohol."
    },
    {
     "t": "6–10",
     "h": "Fibrosis and the whole picture",
     "d": "Explain ALT does not show scarring; arrange FIB-4/ELF. Diabetes prevention programme, home BP, QRISK3, statin not withheld. Negotiate one or two changes."
    },
    {
     "t": "10–12",
     "h": "Teach-back and safety-net",
     "d": "Liver red flags in plain words; review in about four weeks; frame it as an early warning."
    }
   ],
   "wordPics": {
    "fail": "Says it is probably a blip and repeats the ALT in three months; implies he is under-reporting alcohol; lectures on weight; never mentions fibrosis or the BP, sugar and cholesterol.",
    "pass": "Explains fatty liver disease clearly, arranges fibrosis assessment, addresses the pre-diabetes, blood pressure and cardiovascular risk, and books follow-up with basic safety-netting.",
    "exc": "All of the above, plus: disarms the alcohol defensiveness in the first minute, uncovers the cirrhosis fear, explains why ALT does not measure scarring, corrects the statin myth, negotiates changes he chooses, and frames the result as a fixable early warning."
   },
   "avoid": [
    {
     "dont": "“Are you sure you’re not drinking more than you think?”",
     "instead": "“A couple of pints at the weekend is within the low-risk guideline — this isn’t about alcohol.”",
     "why": "Doubting him confirms his fear of being judged and ends the collaboration."
    },
    {
     "dont": "“It’s only mildly raised — we’ll just repeat it in a few months.”",
     "instead": "“The liver number doesn’t show scarring, so I want to check that directly.”",
     "why": "Rechecking the ALT without fibrosis assessment is the key clinical error in this station."
    },
    {
     "dont": "“You need to lose weight, eat better and exercise more.”",
     "instead": "“What’s one change that would genuinely fit around your work?”",
     "why": "A lecture feels like blame; a negotiated goal gets marks and results."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work pattern",
     "t": "Long desk-bound days can drive convenience eating and inactivity. Plan changes around work rather than against it."
    },
    {
     "h": "Stigma of “liver”",
     "t": "Many people equate liver disease with alcohol misuse. Addressing this directly lowers defensiveness and helps engagement."
    }
   ],
   "legal": [
    {
     "h": "Driving and work",
     "t": "No DVLA notification or fitness-for-work issue arises from fatty liver at this stage."
    }
   ],
   "professional": [
    {
     "h": "Non-judgemental weight conversations",
     "t": "NICE NG246: discuss weight respectfully, with the person’s consent, and avoid stigmatising language. Offer referral to weight-management services where appropriate."
    },
    {
     "h": "Results governance",
     "t": "A repeated abnormal ALT needs a documented plan — fibrosis assessment and review — not a filed “repeat in 3 months”."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "NHS Diabetes Prevention Programme; local tier 2 weight-management services; British Liver Trust for patient information; community pharmacy BP checks."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Jaundice, dark urine, pale stools or itch",
     "Abdominal swelling, leg swelling, confusion or bruising — possible decompensated liver disease",
     "Vomiting blood or black stools",
     "Unexplained weight loss or right upper quadrant mass"
    ],
    "psychosocial": [
     "Alcohol units stated plainly, then moved on from",
     "Work hours, eating pattern and activity",
     "Fear of cirrhosis and of being judged as a drinker"
    ],
    "ice": [
     "Idea: “I barely drink, so it can’t be my liver — probably a blip or a paracetamol”",
     "Concern: that “liver” means something serious, and being judged",
     "Expectation: reassurance that it’s nothing and to move on"
    ]
   },
   "diagnosis": "Probable metabolic fatty liver disease (NAFLD/MASLD) within a cardiometabolic cluster: “Your liver test is raised because fat has built up in the liver, linked to your weight, sugar, blood pressure and blood fats — not alcohol.”",
   "diagnosisLay": "“Think of the liver as a warning light on a car dashboard. It isn’t the engine failing — it’s telling us about the fuel system: weight, sugar, blood pressure and cholesterol. Fix those and the light usually goes off.”",
   "management": {
    "reflectIce": "“You wanted to hear it was nothing, and you were worried about cirrhosis. The honest answer is in between — it’s something, it’s common, and it’s very fixable.”",
    "psychosocial": "Frame change around his working life: less convenience food and a lunchtime walk that he chose, supported by the diabetes prevention programme rather than a lecture.",
    "sharedPlan": [
     "Fibrosis assessment: FIB-4 (BSG/BASL 2018) and ELF (NICE NG49); hepatology referral if ELF ≥10.51",
     "Diabetes prevention programme and HbA1c recheck (NICE PH38); home or ambulatory BP (NICE NG136)",
     "QRISK3; atorvastatin 20 mg if ≥10% (NICE NG238), not withheld for ALT below 3× ULN"
    ],
    "safetyNet": [
     "Jaundice, dark urine, abdominal or leg swelling, vomiting blood or black stools: same-day contact",
     "Review in about four weeks with results; recheck liver tests and HbA1c in a few months"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Fatty liver",
    "s": "Management protocol · NICE NG49",
    "href": "management/fatty-liver.html"
   },
   {
    "ic": "📋",
    "t": "Abnormal LFTs",
    "s": "Case walkthrough · fibrosis scoring",
    "href": "../cases/abnormal-lfts.html"
   },
   {
    "ic": "🗺️",
    "t": "Abnormal LFTs pathway",
    "s": "Visual algorithm · liver screen",
    "href": "algorithms/abnormal-lfts.html"
   },
   {
    "ic": "💠",
    "t": "Metabolic syndrome",
    "s": "Management protocol · cardiometabolic risk",
    "href": "management/metabolic-syndrome.html"
   },
   {
    "ic": "🧮",
    "t": "QRISK3",
    "s": "Medical Calculators",
    "href": "calculators.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed less on hepatology than on two reflexes: reassuring a mildly raised ALT away, and implying the patient must be drinking. Both are common in examiner feedback and both are fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "“It’s only mildly raised — let’s repeat it in three months.”",
     "why": "The ALT does not reflect fibrosis. Rechecking it without a fibrosis assessment misses the one finding that changes management (BSG/BASL 2018; NICE NG49).",
     "fix": "Arrange FIB-4 and/or ELF and explain why: “The liver number doesn’t show scarring, so I’ll check that directly.”"
    },
    {
     "dom": "rto",
     "fail": "Pressing him repeatedly on alcohol after he has given a clear, low intake.",
     "why": "It confirms the judgement he feared and damages Relating to Others. His intake is consistent with the diagnosis.",
     "fix": "Ask once, factually, then move on: “That’s within the low-risk guideline — this isn’t about alcohol.”"
    },
    {
     "dom": "tasks",
     "fail": "Treating the liver as the whole problem and ignoring BP 142/90, HbA1c 44 and the triglycerides.",
     "why": "Fatty liver is a marker of cardiometabolic risk; missing the rest loses marks for managing comorbidity.",
     "fix": "Name the cluster and act on each part: home BP (NICE NG136), diabetes prevention (NICE PH38), QRISK3 (NICE NG238)."
    },
    {
     "dom": "tasks",
     "fail": "Advising him to avoid statins because of his liver test.",
     "why": "NICE NG238 says not to routinely exclude people with transaminases raised but below 3 times the upper limit of normal.",
     "fix": "“A raised liver test at this level isn’t a reason to avoid a statin if your heart risk warrants one.”"
    },
    {
     "dom": "gs",
     "fail": "A long monologue on metabolic syndrome with jargon such as “steatosis” and “fibrosis markers”.",
     "why": "“Language not easily understood by the patient” is standard failing feedback.",
     "fix": "Use plain images: “fat in the liver”, “a test for scarring”, “the liver as the messenger”."
    },
    {
     "dom": "rto",
     "fail": "Ending with “lose some weight and we’ll see” and no agreed goals.",
     "why": "No shared plan and no check of understanding — marked down in both Relating and Tasks.",
     "fix": "Let him choose one or two changes, then teach-back: “What will you do first?”"
    }
   ]
  }
 },
 "non-healing-lesion": {
  "stem": {
   "name": "Stanley Cooke",
   "age": "74-year-old man",
   "pmh": [
    "Multiple actinic keratoses",
    "Lifelong outdoor worker (retired farmer)"
   ],
   "meds": [
    "No regular medication recorded",
    "Using over-the-counter antiseptic cream on the lesion"
   ],
   "allergy": "None recorded",
   "recent": "No previous consultation for this lesion. Booked as a video consultation.",
   "reason": "A scab on the top of his right ear for about 4 months that \"won’t heal\". Requesting a stronger cream."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · BAD guidelines for cutaneous squamous cell carcinoma (2020) · BAD guidelines for actinic keratosis (2017)",
   "summary": "A crusting, bleeding, growing, tender lesion with an indurated edge on the ear of an older man with heavy sun exposure is a squamous cell carcinoma until proven otherwise. Refer on the suspected cancer pathway; do not treat it with creams.",
   "points": [
    {
     "h": "Non-healing is the red flag",
     "t": "A lesion that has not healed over weeks to months, and that crusts, bleeds, grows or is tender, on sun-damaged skin, needs assessment for skin cancer rather than a stronger cream."
    },
    {
     "h": "The NICE NG12 (updated April 2026) skin criteria",
     "t": "NICE NG12 (updated April 2026): consider a suspected cancer pathway referral (appointment within 2 weeks) for a skin lesion that raises the suspicion of squamous cell carcinoma. For a suspected basal cell carcinoma, consider routine referral, and use the suspected cancer pathway only if a delay could have a significant impact because of factors such as site or size."
    },
    {
     "h": "SCC or BCC",
     "t": "SCC: a keratotic, crusted or ulcerated, often tender nodule that grows over weeks to months on sun-exposed skin; the ear and lip are high-risk sites and SCC can spread to nodes (BAD 2020). BCC: a slow-growing pearly nodule with a rolled edge and surface telangiectasia, which rarely spreads."
    },
    {
     "h": "Examine",
     "t": "Assess size, edge, surface, induration and ulceration, and examine the regional lymph nodes (pre- and post-auricular, cervical). A video view or photograph helps triage but does not replace palpation of the nodes."
    },
    {
     "h": "Field change",
     "t": "Actinic keratoses are markers of cumulative sun damage and can progress to SCC. Check other sun-exposed skin, treat or monitor actinic keratoses (BAD 2017), and advise sun protection with a hat and high-factor sunscreen."
    },
    {
     "h": "Honest reassurance",
     "t": "Most cutaneous SCCs caught early are cured by excision. Framing the urgent referral as the way to keep treatment simple helps a stoical patient accept it."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Cooke, thanks for joining. Tell me about this scab.",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "It’s on the top of my ear. Had it a few months. I knock the crust off, it bleeds a bit, then it comes back. I’ve been putting antiseptic cream on but it’s not shifting. It’s where my glasses rub, or an old man’s scab. Could you give me something stronger? I don’t want any fuss made."
   },
   {
    "who": "dr",
    "text": "Thanks for telling me. Four months is a long time for a scab. Could I ask a few questions and have a look on the camera? Then we’ll decide together what’s best.",
    "dom": "gs",
    "why": "Sets the agenda and plans a look"
   },
   {
    "who": "pt",
    "text": "Go on, then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Has it changed over those months, in size or shape?",
    "dom": "tasks",
    "why": "Asks about growth"
   },
   {
    "who": "pt",
    "text": "It’s got a bit bigger, I’ll give you that. It’s sore if I lie on it."
   },
   {
    "who": "dr",
    "text": "Could you hold the camera close to your ear, or ask someone to take a photo and send it through? I’d like to see the edges.",
    "dom": "tasks",
    "why": "Remote inspection of the lesion"
   },
   {
    "who": "pt",
    "text": "(angles phone) There. It’s crusty in the middle and the edge is a bit raised and hard."
   },
   {
    "who": "dr",
    "text": "Thank you, that’s a good view. You’ve worked outdoors most of your life. Have you had other rough or scaly patches on your face, scalp or hands?",
    "dom": "tasks",
    "why": "Sun exposure and field change"
   },
   {
    "who": "pt",
    "text": "Farming all my life. I’ve had a few of those rough patches, yes."
   },
   {
    "who": "dr",
    "text": "Any lumps you’ve noticed around your ear or in your neck?",
    "dom": "tasks",
    "why": "Screens for nodal spread"
   },
   {
    "who": "pt",
    "text": "Not that I’ve felt."
   },
   {
    "who": "dr",
    "text": "Do your glasses actually rest on that spot?",
    "dom": "tasks",
    "why": "Tests his explanation"
   },
   {
    "who": "pt",
    "text": "(pause) Not really, now you ask. The arm sits lower down."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "You’ve kept an eye on this for a while. I wonder whether any part of you has been worried about it.",
    "dom": "rto",
    "why": "Gently invites the unspoken concern"
   },
   {
    "who": "pt",
    "text": "A mate of mine had a skin cancer taken off his face. I did wonder. But I didn’t want to be a nuisance, and I don’t fancy being carved up."
   },
   {
    "who": "dr",
    "text": "You’re not a nuisance at all. Thank you for telling me. It sounds as if this has been on your mind more than you’ve let on, and the idea of an operation on your face worries you.",
    "dom": "rto",
    "why": "Validates and reflects both concerns"
   },
   {
    "who": "pt",
    "text": "Aye, that’s about it."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "I’ll be straight with you. A sore that hasn’t healed in four months, that bleeds, has grown and has that firm raised edge, on skin that’s had a lot of sun, could be a skin cancer. The most likely type in that spot is called a squamous cell cancer. A cream won’t heal it.",
    "dom": "tasks",
    "why": "Names the likely diagnosis honestly with the reasons"
   },
   {
    "who": "pt",
    "text": "Cancer. Right."
   },
   {
    "who": "dr",
    "text": "Before that word worries you too much: the skin cancers caused by sun damage are usually very treatable, and most are cured by removing them with a small operation, especially when they’re caught at this stage. That’s why I want it seen quickly. It keeps the treatment simple.",
    "dom": "rto",
    "why": "Gives genuine reassurance alongside honesty"
   },
   {
    "who": "pt",
    "text": "And the operation? It’s my ear."
   },
   {
    "who": "dr",
    "text": "The specialists will talk you through it and aim for the smallest procedure that removes it completely. Taking it off early usually means a smaller operation than waiting.",
    "dom": "rto",
    "why": "Addresses the disfigurement worry"
   },
   {
    "phase": "Shared plan",
    "clock": "9–11 min",
    "who": "dr",
    "text": "So here’s my plan. I’m referring you today on the urgent skin cancer pathway, so a specialist sees you within two weeks. They’ll usually take a sample or remove it. I’d also like you to pop in this week so I can feel the glands around your ear and neck and check the rest of your sun-exposed skin. Does that work?",
    "dom": "tasks",
    "why": "Suspected cancer pathway referral plus in-person node examination"
   },
   {
    "who": "pt",
    "text": "I can come in Thursday."
   },
   {
    "who": "dr",
    "text": "Good. Stop the antiseptic cream, keep the area clean and covered if it bleeds, and from now on wear a wide-brimmed hat and a high-factor sunscreen outside. You’ve had a lot of sun, so it’s worth protecting your skin.",
    "dom": "tasks",
    "why": "Practical care and sun protection"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you haven’t heard about the appointment within a week, ring us. If it grows fast, bleeds a lot, or you notice a lump near your ear or in your neck, tell me sooner. Can you tell me what we’ve agreed, so I know I’ve explained it properly?",
    "dom": "gs",
    "why": "Specific safety-net and teach-back"
   },
   {
    "who": "pt",
    "text": "Urgent appointment with the skin people, see you Thursday to check my neck, no more cream, get a hat. And it’s probably treatable."
   },
   {
    "who": "dr",
    "text": "Spot on. I’ll check the referral has gone through and see you Thursday.",
    "dom": "gs",
    "why": "Owns the follow-up"
   },
   {
    "who": "pt",
    "text": "Thanks, doctor. Better than I thought, all told."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him describe the \"scab\" and his request before directing the history.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Lifelong outdoor work, sun protection habits, the friend’s skin cancer, reluctance to be a nuisance.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the growth, the tenderness and the pause over the glasses explanation, and followed them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (glasses rub, old scab), concerns (cancer after his friend, facial surgery), expectation (stronger cream).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Camera or photo view of the lesion; in-person palpation of pre- and post-auricular and cervical nodes; other sun-exposed skin.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "SCC versus BCC versus actinic keratosis versus chondrodermatitis or friction ulcer.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Recognised non-healing, growing, bleeding, indurated lesion on a high-risk site as suspected SCC.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated suspected squamous cell carcinoma honestly and in plain language.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Suspected cancer pathway referral (NICE NG12 (updated April 2026)), stop the cream, wound care.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Actinic keratoses and field change managed; sun protection advice.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Chase if no appointment within a week, report rapid growth, bleeding or a neck lump, teach-back, booked review.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Older adults",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Stanley Cooke",
    "age": "74 years · male",
    "pmh": [
     "Multiple actinic keratoses",
     "Retired farmer"
    ],
    "meds": [
     "No regular medication recorded"
    ],
    "allergy": "None recorded",
    "recent": "No previous consultation about this lesion.",
    "reason": "\"A scab on my ear that won’t heal. Can I have something stronger?\""
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "He minimises in the opening. Let him finish; the four months, the bleeding and the growth are all in his story."
    },
    {
     "t": "1–5",
     "h": "History and a look",
     "d": "Growth, tenderness, bleeding, sun exposure, previous actinic keratoses, neck lumps. Get a close camera view or a photo."
    },
    {
     "t": "5–7",
     "h": "ICE",
     "d": "His friend’s skin cancer, not wanting to be a nuisance, fear of surgery on his face."
    },
    {
     "t": "7–11",
     "h": "Explain and refer",
     "d": "Possible skin cancer, likely SCC, very treatable. Suspected cancer pathway referral today; in-person node check this week; sun protection."
    },
    {
     "t": "11–12",
     "h": "Safety-net and close",
     "d": "Chase if no appointment in a week; report rapid growth, heavy bleeding or a lump; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes a stronger cream or antibiotic; accepts \"where my glasses rub\"; no view of the lesion; no referral, or a routine referral; the fear and the surgery worry are never explored.",
    "pass": "Recognises a non-healing lesion on sun-damaged skin as a possible skin cancer; views it; refers on the suspected cancer pathway; gives sun protection advice and a basic safety-net.",
    "exc": "All of the above, plus: tests his explanation gently; surfaces the friend’s cancer and the surgery worry; explains SCC honestly with genuine reassurance; arranges node examination; addresses field change; checks understanding and owns the follow-up."
   },
   "avoid": [
    {
     "dont": "\"Try this steroid-antibiotic cream for a fortnight and see.\"",
     "instead": "\"A sore that hasn’t healed in four months needs a specialist to look at it, not a stronger cream.\"",
     "why": "Treating a suspected SCC empirically delays diagnosis and is a Tasks fail."
    },
    {
     "dont": "\"It’s cancer, I’m afraid.\"",
     "instead": "\"This could be a skin cancer. The kind that comes from sun damage is usually very treatable, especially at this stage.\"",
     "why": "Honest, proportionate wording with genuine reassurance helps a stoical man accept referral."
    },
    {
     "dont": "\"It’s probably just a BCC, I’ll send a routine referral.\"",
     "instead": "\"Because it’s on your ear, has grown and is tender, I’m referring you urgently.\"",
     "why": "Growth, tenderness and keratin on the ear point to SCC, which NICE NG12 (updated April 2026) refers on the suspected cancer pathway."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Stoicism in older rural men",
     "t": "\"Don’t want a fuss\" often hides fear. A direct, kind question about worries surfaces it without making him feel foolish."
    },
    {
     "h": "Occupational sun exposure",
     "t": "A lifetime of outdoor work means field damage. Advice on hats and sunscreen is still worthwhile, and other lesions should be checked."
    }
   ],
   "legal": [
    {
     "h": "Images and consent",
     "t": "If a photo is taken for referral or teledermatology, get consent and store it in the record (GMC guidance on making and using visual recordings of patients)."
    }
   ],
   "professional": [
    {
     "h": "Referral tracking",
     "t": "Suspected cancer referrals need a safety-net system: confirm receipt and that the patient has an appointment. Document the lesion description and the reason for urgency."
    },
    {
     "h": "Honest disclosure",
     "t": "GMC Good Medical Practice 2024: share the possibility of a serious diagnosis honestly and at a pace the patient can manage."
    }
   ],
   "community": [
    {
     "h": "Patient resources",
     "t": "British Association of Dermatologists patient information on squamous cell carcinoma, actinic keratoses and sun protection; British Skin Foundation."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Failure to heal over weeks to months; growth; bleeding; crusting or keratin",
     "Tenderness and an indurated edge on a high-risk site (ear, lip)",
     "Lumps near the ear or in the neck (nodal spread)"
    ],
    "psychosocial": [
     "Lifelong outdoor work and sun protection habits",
     "Reluctance to be a nuisance",
     "A friend’s skin cancer; fear of facial surgery"
    ],
    "ice": [
     "Idea: \"where my glasses rub, an old man’s scab\"",
     "Concern: skin cancer like his friend; being \"carved up\"",
     "Expectation: a stronger cream"
    ]
   },
   "diagnosis": "A non-healing, growing, tender, crusted lesion with an indurated edge on the helix of the right ear in a 74-year-old with chronic sun damage and actinic keratoses: suspected cutaneous squamous cell carcinoma.",
   "diagnosisLay": "\"Skin that’s had a lot of sun can form a type of skin cancer that looks like a scab that never heals. Yours looks like it could be that. The good news is this type is usually cured by removing it, and it’s simplest when it’s caught early.\"",
   "management": {
    "reflectIce": "\"You didn’t want a fuss, and after your friend’s skin cancer you’ve been wondering. Getting this seen quickly is the way to keep it small and simple.\"",
    "psychosocial": "Frame the referral as reassuring rather than catastrophic; address the fear of facial surgery; involve him in sun protection choices.",
    "sharedPlan": [
     "Suspected cancer pathway referral today for suspected SCC (NICE NG12 (updated April 2026))",
     "In-person examination this week: regional nodes and other sun-exposed skin",
     "Stop antiseptic cream; keep clean and covered; hat and high-factor sunscreen; manage actinic keratoses (BAD 2017)"
    ],
    "safetyNet": [
     "Ring if no appointment within a week; report rapid growth, heavy bleeding, or a new lump near the ear or in the neck",
     "Review after the specialist outcome; ongoing skin surveillance"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Actinic keratosis",
    "s": "Protocol · field change · SCC risk",
    "href": "management/actinic-keratosis.html"
   },
   {
    "ic": "🗺️",
    "t": "Skin lesions pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) skin",
    "href": "algorithms/pigmented-skin-lesions.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is lost by treating the patient’s label rather than the lesion. A non-healing lesion on the ear of an old farmer is a suspected SCC, and the marks go to recognising it, referring it correctly and bringing a stoical man with you.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing a stronger cream or antibiotic with a review in a month.",
     "why": "\"Management not in line with current UK best practice.\" NICE NG12 (updated April 2026) refers suspected SCC on the suspected cancer pathway.",
     "fix": "\"A sore that hasn’t healed in four months needs a specialist look, not a stronger cream.\""
    },
    {
     "dom": "tasks",
     "fail": "Calling it a BCC and referring routinely.",
     "why": "Growth, tenderness, keratin and bleeding on the ear favour SCC, which can spread to nodes.",
     "fix": "State the features that make SCC likely and refer urgently."
    },
    {
     "dom": "tasks",
     "fail": "Never looking at the lesion or asking about neck lumps.",
     "why": "\"Insufficient data gathering to reach a safe conclusion.\"",
     "fix": "Get a close camera view or photo, ask about lumps, and arrange in-person node palpation."
    },
    {
     "dom": "rto",
     "fail": "Accepting \"I don’t want a fuss\" and moving on.",
     "why": "\"Did not explore the patient’s concerns.\" His friend’s cancer and fear of surgery are the hidden agenda.",
     "fix": "\"I wonder whether part of you has been worried about it?\" Then reflect both concerns."
    },
    {
     "dom": "rto",
     "fail": "Saying \"cancer\" and then going straight into referral logistics.",
     "why": "Disclosure without reassurance leaves a frightened patient and is marked as poor explanation.",
     "fix": "Follow the word immediately with the honest good news: usually cured by a small operation, especially early."
    },
    {
     "dom": "gs",
     "fail": "No mention of other sun damage or sun protection.",
     "why": "Missing the field change is an incomplete plan.",
     "fix": "One line on checking other rough patches and one on hats and sunscreen."
    },
    {
     "dom": "gs",
     "fail": "Closing with \"the hospital will be in touch\".",
     "why": "Referral without a safety-net for a lost appointment is a patient-safety gap.",
     "fix": "\"If you haven’t heard within a week, ring us. I’ll check it has gone through.\""
    }
   ]
  }
 },
 "opioid-escalation": {
  "stem": {
   "name": "Craig Hollis",
   "age": "48-year-old man",
   "pmh": [
    "Chronic non-specific low back pain (about 4 years) following a work injury",
    "Previously a warehouse worker; not currently working"
   ],
   "meds": [
    "Tramadol (repeat; dose per record)",
    "Codeine (repeat; dose per record)"
   ],
   "allergy": "No known drug allergies",
   "recent": "Opioid doses increased over time. Repeat request with a note: “Not working, needs something stronger.” No new red-flag features recorded at last review.",
   "reason": "Video consultation requesting stronger pain relief."
  },
  "knowledge": {
   "guideline": "NICE NG59 (low back pain and sciatica, 2016, updated July 2026) · NICE NG215 (medicines associated with dependence or withdrawal symptoms, 2022) · Faculty of Pain Medicine Opioids Aware (2026 update) · MHRA Drug Safety Update (September 2020) · NICE NG222 (depression in adults, 2022, updated December 2025)",
   "summary": "Needing more opioid for less effect usually means tolerance and dependence, not undertreatment. For chronic low back pain, do not escalate: validate the pain, treat mood and function, and agree a gradual, supported reduction.",
   "points": [
    {
     "h": "No opioids for chronic low back pain",
     "t": "NICE NG59: do not offer opioids for managing chronic low back pain. Evidence of long-term benefit is poor and harms rise with dose and duration: tolerance, dependence, opioid-induced hyperalgesia, sedation, falls, low testosterone and low mood, and overdose."
    },
    {
     "h": "Recognise dependence",
     "t": "MHRA Drug Safety Update (September 2020): opioids carry a risk of dependence and addiction even at therapeutic doses; review regularly and discuss the risks. Two concurrent opioids (tramadol and codeine) add harm without clear benefit. Opioids Aware (2026 update): keep the total ideally at or below 50 mg/day oral morphine equivalent, and seek specialist advice before exceeding 90 mg/day."
    },
    {
     "h": "What NICE NG59 offers instead",
     "t": "An exercise programme (with manual therapy only as part of a package), support to stay active and return to work or normal activities, and risk stratification such as STarT Back. NICE NG59 also advises against SSRIs, SNRIs and tricyclics for low back pain itself."
    },
    {
     "h": "Treat mood in its own right",
     "t": "Low mood after loss of job and role is common and drives pain and opioid use. Assess depression and treat per NICE NG222 (for example NHS Talking Therapies); ask directly about suicidal thoughts and plans rather than using a risk tool."
    },
    {
     "h": "Supported, gradual reduction",
     "t": "NICE NG215: agree a gradual, individualised reduction with the patient, with regular review and support; do not stop abruptly. Reduce one medicine at a time; step size and pace per BNF, slowed or held if withdrawal symptoms flare. Many people find pain unchanged or better and thinking clearer as doses fall."
    },
    {
     "h": "Same-day action",
     "t": "New red flags (saddle numbness, bladder or bowel change, progressive leg weakness, fever, weight loss, history of cancer) need urgent assessment. Suicidal intent with a plan needs same-day mental health assessment."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Hollis, I’m Dr Singh. I’ve seen your request about the pain relief. Tell me how things have been.",
    "dom": "rto",
    "why": "Open start without prejudging the request"
   },
   {
    "who": "pt",
    "text": "I’m at the end of my tether, doc. The tramadol and codeine aren’t touching it any more. I need something stronger, morphine, whatever it takes. I’m not a drug seeker. I’m in genuine pain and nobody’s helping me."
   },
   {
    "who": "dr",
    "text": "I believe you’re in real pain, and I’m not thinking of you as a drug seeker. I want to understand how it’s affecting you, and then we’ll talk properly about the medicines and what else might help. Is that okay?",
    "dom": "rto",
    "why": "Validates early and addresses the fear of judgement"
   },
   {
    "who": "pt",
    "text": "Fine. As long as you’re actually going to help."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Has the pain itself changed recently, or is it the same pain getting harder to bear?",
    "dom": "tasks",
    "why": "Distinguishes new pathology from tolerance"
   },
   {
    "who": "pt",
    "text": "Same pain. It just feels like the tablets have stopped working."
   },
   {
    "who": "dr",
    "text": "Any numbness between your legs, changes with your bladder or bowels, weakness in your legs, fevers or weight loss?",
    "dom": "tasks",
    "why": "Screens for red flags"
   },
   {
    "who": "pt",
    "text": "No, none of that."
   },
   {
    "who": "dr",
    "text": "How do you take the tablets day to day? Do you ever run out early, take extra on bad days, or feel rough if you’re late with a dose?",
    "dom": "tasks",
    "why": "Explores tolerance and dependence non-judgementally"
   },
   {
    "who": "pt",
    "text": "(pause) If I’m late, I get sweaty and restless, and the pain’s worse. I’m scared of running out, to be honest. They barely help, but I don’t know what I’d do without them."
   },
   {
    "who": "dr",
    "text": "Thank you for being honest, that really helps. Do you drive, and do you drink alcohol or take anything else to help you sleep?",
    "dom": "tasks",
    "why": "Checks interacting sedatives and driving safety"
   },
   {
    "who": "pt",
    "text": "I don’t drive much now. Nothing else, no."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Four years is a long time. How are things beyond the pain: your days, your mood?",
    "dom": "rto",
    "why": "Opens the psychosocial picture"
   },
   {
    "who": "pt",
    "text": "Rubbish. The injury finished my job. I sit at home. I don’t see anyone. I feel useless."
   },
   {
    "who": "dr",
    "text": "That’s a huge loss: your work, your routine, your sense of purpose. It sounds really low. Have you had thoughts of harming yourself, or that life isn’t worth living?",
    "dom": "tasks",
    "why": "Acknowledges loss and asks directly about suicidal thoughts"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. I just feel pointless."
   },
   {
    "who": "dr",
    "text": "I’m glad you told me. When you ask for something stronger, what are you hoping it would change?",
    "dom": "rto",
    "why": "Explores the expectation behind the request"
   },
   {
    "who": "pt",
    "text": "That I’d feel normal again. Get some life back."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I want to be honest with you, because you deserve that. The reason the tablets have stopped working isn’t that the dose is too low. With long-term back pain, these medicines work poorly, and the body gets used to them, so you need more for less. The sweats when you’re late are your body having become dependent. That’s a normal effect of the medicine, not a failing on your part.",
    "dom": "tasks",
    "why": "Explains tolerance and dependence without blame"
   },
   {
    "who": "pt",
    "text": "So you won’t give me morphine."
   },
   {
    "who": "dr",
    "text": "Morphine would very likely give you the same story, more sleepiness and more risk, and it can even make pain worse over time. National guidance says not to use opioids for long-term back pain. If I just handed it over, I’d be letting you down. But I’m not leaving you with nothing.",
    "dom": "tasks",
    "why": "Holds the line with reasons (NICE NG59) and signals continued support"
   },
   {
    "who": "pt",
    "text": "(frustrated) Then what? Everyone says no and walks away."
   },
   {
    "who": "dr",
    "text": "I can hear how let down you’ve felt. I’m not walking away. What you said you want is your life back, and there are things that help with that more than a stronger tablet. Can I share them?",
    "dom": "rto",
    "why": "Responds to the anger and reframes around his own goal"
   },
   {
    "who": "pt",
    "text": "Go on."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Three things. First, a physio-led exercise programme to build strength and confidence in your back. Second, your mood: I think you may be depressed, and that makes pain louder. Talking therapy through NHS Talking Therapies can help, and I’d like you to fill in a short mood questionnaire. Third, slowly bringing the tablets down, one at a time, in small steps you agree to, never suddenly. Many people find the fog lifts and the pain is no worse.",
    "dom": "tasks",
    "why": "Evidence-based whole-person plan with a supported taper (NICE NG59, NG222, NG215)"
   },
   {
    "who": "pt",
    "text": "Coming down scares me."
   },
   {
    "who": "dr",
    "text": "That’s understandable. You set the pace with me. We won’t start reducing until the physio and support are in place, and if withdrawal feels too much, we pause. Which of the three would you like to start with?",
    "dom": "rto",
    "why": "Shares control and negotiates the starting point"
   },
   {
    "who": "pt",
    "text": "The physio, I suppose. And the mood thing. Then we talk about the tablets."
   },
   {
    "who": "dr",
    "text": "That’s a good plan. There may also be local support to help you back into work or other activities when you’re ready. Would you be open to that?",
    "dom": "tasks",
    "why": "Addresses isolation, purpose and return to activity"
   },
   {
    "who": "pt",
    "text": "Maybe. I miss having a reason to get up."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you ever start to feel you can’t go on, contact us the same day, or call NHS 111 and choose the mental health option, or 999 in an emergency. If you get numbness between your legs, bladder or bowel changes, or leg weakness, that’s urgent too. And please don’t take extra tablets or anything from elsewhere; that’s where the real danger is.",
    "dom": "gs",
    "why": "Mood, cauda equina and overdose safety-netting"
   },
   {
    "who": "pt",
    "text": "Alright. I hear you."
   },
   {
    "who": "dr",
    "text": "I’d like to see you in two weeks to go through the questionnaire and how physio is going. Can you tell me what we’ve agreed?",
    "dom": "rto",
    "why": "Booked follow-up and teach-back"
   },
   {
    "who": "pt",
    "text": "No stronger tablets. Physio, mood form, maybe talking therapy. Then we slowly bring the tablets down together. Back in two weeks."
   },
   {
    "who": "dr",
    "text": "Exactly. We’ll do this together.",
    "dom": "gs",
    "why": "Closes with a clear summary and continuity"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; lets him state the request; validates the pain before discussing medicines.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Loss of job and role, isolation, daily routine, driving, alcohol and other sedatives.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up “I’m not a drug seeker” (fear of judgement), “scared of running out” (dependence) and “I feel useless” (low mood).",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (undertreated pain); concerns (being left in pain, being judged); expectation (morphine), and the deeper wish to get his life back.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Red-flag screen; PHQ-9; review of how opioids are taken; examination only if new features; no imaging for unchanged pain.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Tolerance and dependence versus new pathology; depression contributing to pain; opioid-induced hyperalgesia.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asks about cauda equina symptoms, infection, cancer and fracture; asks directly about suicidal thoughts.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Chronic low back pain with opioid tolerance and dependence, and probable depression, explained without blame.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "No escalation (NICE NG59); physio-led exercise; mood treatment (NICE NG222); gradual supported reduction, one opioid at a time (NICE NG215, steps per BNF).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Addresses isolation and purpose; return-to-activity support; warns against topping up from other sources.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review in 2 weeks; crisis routes named; cauda equina symptoms named; overdose risk explained.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Mental health & addiction",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Craig Hollis",
    "age": "48 years · male",
    "pmh": [
     "Chronic low back pain (~4 years), work injury",
     "Not currently working"
    ],
    "meds": [
     "Tramadol (repeat)",
     "Codeine (repeat)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Opioid doses escalated over time. Two concurrent opioids on repeat. Request: “Needs something stronger — morphine.” No medication review in the last year recorded.",
    "reason": "Video consultation. “Nobody’s helping me.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and validate",
     "d": "He opens with morphine and “I’m not a drug seeker”. Validate the pain and the fear of judgement before anything else."
    },
    {
     "t": "1–4",
     "h": "Pain, red flags, dependence",
     "d": "Same pain or new; cauda equina and serious-pathology screen; how the tablets are taken; withdrawal symptoms; alcohol, sedatives, driving."
    },
    {
     "t": "4–6",
     "h": "The loss underneath",
     "d": "Job gone, isolated, low. Ask directly about suicidal thoughts. What would “something stronger” change for him?"
    },
    {
     "t": "6–10",
     "h": "Honest explanation and plan",
     "d": "Tolerance and dependence explained without blame; no opioids for chronic back pain (NICE NG59). Physio exercise, mood treatment, supported reduction he paces."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Crisis routes, cauda equina symptoms, no topping up. Review in 2 weeks. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes morphine or increases the dose; or refuses flatly with no alternative; never asks about mood or suicidal thoughts; stops the opioids abruptly; no follow-up.",
    "pass": "Declines escalation with a reason; explains tolerance; screens red flags and mood; offers physio and mood support; mentions gradual reduction; books follow-up.",
    "exc": "All of the above, plus: validates early and addresses “I’m not a drug seeker”; names dependence without blame; links the plan to his wish to get his life back; lets him choose the starting point and pace; asks directly about suicide; clear teach-back."
   },
   "avoid": [
    {
     "dont": "“I can’t give you morphine. You’re already on too much.”",
     "instead": "“A stronger opioid would very likely give you more side effects for the same pain. I’m not leaving you with nothing.”",
     "why": "A bare refusal ruptures trust; an honest reason plus an alternative keeps him in the room."
    },
    {
     "dont": "“You’re addicted to these tablets.”",
     "instead": "“Your body has become dependent on them. That’s an expected effect of the medicine, not a failing on your part.”",
     "why": "Stigmatising language confirms his fear of being judged."
    },
    {
     "dont": "“We’ll stop the codeine today.”",
     "instead": "“We’ll bring them down slowly, one at a time, at a pace you agree to.”",
     "why": "Abrupt withdrawal is unsafe and drives patients to other sources (NICE NG215)."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Loss of role",
     "t": "Losing a manual job to injury can remove income, routine, identity and social contact. These drive low mood, pain and medication use, and belong in the plan."
    },
    {
     "h": "Benefits and work",
     "t": "Signpost to benefits advice (for example Citizens Advice) if income has fallen; discuss return to work or meaningful activity at his pace."
    }
   ],
   "legal": [
    {
     "h": "Drug driving",
     "t": "It is an offence to drive while impaired by any drug, including prescribed medicines. Morphine is also on the list of specified drugs (Road Traffic Act 1988 section 5A); there is a medical defence if taken as prescribed and not impaired. Advise not to drive if drowsy."
    },
    {
     "h": "Controlled drug prescribing",
     "t": "Tramadol and codeine are controlled drugs. Keep a single named prescriber, regular review, and avoid early repeat issues."
    }
   ],
   "professional": [
    {
     "h": "Prescribing responsibility",
     "t": "GMC Good practice in prescribing and managing medicines and devices (2021): prescribe only when satisfied the medicine serves the patient’s needs, and review long-term prescribing. Declining escalation is part of that duty."
    },
    {
     "h": "Avoiding stigma",
     "t": "Language such as “drug seeker” or “addict” damages trust. Describe dependence as an effect of the medicine."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "NHS Talking Therapies (self-referral); local physiotherapy and exercise programmes; the Pain Toolkit and Versus Arthritis for self-management resources."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Cauda equina: saddle numbness, bladder or bowel change, progressive leg weakness",
     "Fever, weight loss, history of cancer, night pain: serious pathology",
     "Suicidal thoughts; alcohol or other sedatives with opioids (overdose risk)"
    ],
    "psychosocial": [
     "Loss of job, routine and identity after the injury",
     "Isolation and low mood",
     "Fear of running out of tablets and of being judged"
    ],
    "ice": [
     "Idea: the pain is undertreated and morphine will fix it",
     "Concern: being left in pain, and being seen as a drug seeker",
     "Expectation: a stronger opioid; underneath, to get his life back"
    ]
   },
   "diagnosis": "“Your back pain is real. The tablets have stopped working because your body has got used to them, not because the dose is too low. A stronger one would likely do the same, with more risk.”",
   "diagnosisLay": "“Opioids for long-term pain are like turning up the music to drown out noise next door. The louder you go, the more you get used to it, until the music itself becomes the problem.”",
   "management": {
    "reflectIce": "“You said you want your life back. That’s what I want too, and it’s why I’m suggesting things that help with that, rather than a stronger tablet.”",
    "psychosocial": "Treat the low mood, address isolation and purpose, and let him choose where to start, so the plan feels like support rather than removal.",
    "sharedPlan": [
     "No opioid escalation (NICE NG59)",
     "Physio-led exercise programme; PHQ-9 and NHS Talking Therapies for mood (NICE NG222)",
     "Gradual, supported reduction, one opioid at a time, paced with him (NICE NG215; steps per BNF)"
    ],
    "safetyNet": [
     "Suicidal thoughts: same-day contact, NHS 111 mental health option, or 999",
     "Cauda equina symptoms: urgent assessment; no extra tablets or other sources; review in 2 weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Opioids in non-cancer pain",
    "s": "Protocol · review and tapering",
    "href": "management/opioid-prescribing.html"
   },
   {
    "ic": "📋",
    "t": "Low back pain",
    "s": "Case walkthrough · NICE NG59",
    "href": "../cases/low-back-pain.html"
   },
   {
    "ic": "🗺️",
    "t": "Chronic back pain pathway",
    "s": "Visual algorithm · red flags and stratification",
    "href": "algorithms/chronic-back-pain.html"
   },
   {
    "ic": "📋",
    "t": "Depression",
    "s": "Case walkthrough · NICE NG222",
    "href": "../cases/depression.html"
   }
  ],
  "pitfalls": {
   "intro": "Both extremes fail this station: escalating to morphine, or a flat refusal that leaves him with nothing. Examiners reward honest explanation, a real alternative and visible partnership.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Switching to morphine or increasing the dose because “the pain is real”.",
     "why": "NICE NG59 advises against opioids for chronic low back pain; escalation adds harm without benefit.",
     "fix": "Validate the pain and explain tolerance, then offer the alternatives."
    },
    {
     "dom": "rto",
     "fail": "Refusing and moving on without an alternative plan.",
     "why": "He expects to be dismissed; a bare refusal confirms it and loses Relating marks.",
     "fix": "“I’m not giving you nothing. Here’s what helps more than a stronger tablet.”"
    },
    {
     "dom": "tasks",
     "fail": "Never asking about mood or suicidal thoughts.",
     "why": "Chronic pain, opioids and loss of role together carry real risk; the low mood is part of the diagnosis.",
     "fix": "Ask directly and kindly, then offer treatment for mood."
    },
    {
     "dom": "tasks",
     "fail": "Stopping one or both opioids abruptly.",
     "why": "NICE NG215 advises gradual, agreed reduction; abrupt withdrawal is unsafe and pushes people to other sources.",
     "fix": "One medicine at a time, small steps, pace agreed, with review."
    },
    {
     "dom": "tasks",
     "fail": "Offering amitriptyline or duloxetine for the back pain.",
     "why": "NICE NG59 advises against SSRIs, SNRIs and tricyclics for low back pain. Treat depression in its own right.",
     "fix": "Separate the two: exercise for the back, a proper mood assessment for the depression."
    },
    {
     "dom": "gs",
     "fail": "No follow-up date or crisis advice.",
     "why": "A taper and mood plan without review is unsafe, and vague safety-netting is standard failing feedback.",
     "fix": "Book a 2-week review and name the crisis routes."
    }
   ]
  }
 },
 "persistent-hoarseness": {
  "stem": {
   "name": "Roy Calladine",
   "age": "63-year-old man",
   "pmh": [
    "Current smoker, 40 cigarettes a day",
    "Heavy alcohol use recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "Works as a publican. No recent consultations. Booked as a video consultation.",
   "reason": "About 6 weeks of a husky voice. Requesting a throat spray or antibiotics."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · NICE NG209 (tobacco, 2021) · NICE CG115 (alcohol-use disorders, 2011) · NICE PH24 (alcohol-use disorders: prevention, 2010)",
   "summary": "Persistent, progressive hoarseness in a 63-year-old heavy smoker and drinker, now with a neck lump and one-sided ear ache, meets the NICE NG12 (updated April 2026) criteria for a suspected laryngeal cancer referral. Refer today; do not prescribe a spray or antibiotics.",
   "points": [
    {
     "h": "The NICE NG12 (updated April 2026) criterion",
     "t": "NICE NG12 (updated April 2026): consider a suspected cancer pathway referral (appointment within 2 weeks) for laryngeal cancer in people aged 45 and over with persistent unexplained hoarseness or an unexplained lump in the neck. He meets both."
    },
    {
     "h": "Associated red flags",
     "t": "Referred ear pain with a normal ear, a feeling of something in the throat, painful or difficult swallowing, a persistent sore throat, a neck lump, weight loss, and stridor or breathlessness (which needs same-day assessment). Smoking and alcohol together multiply the risk of head and neck cancer."
    },
    {
     "h": "Chest X-ray",
     "t": "NICE NG12 (updated April 2026): consider an urgent chest X-ray in people aged 40 and over with persistent cervical lymphadenopathy. Many head and neck pathways also request one; follow the local referral form."
    },
    {
     "h": "Examine, but don’t delay",
     "t": "Examine the mouth, throat, neck nodes and ears in person. The larynx is seen by nasendoscopy in the ENT clinic, so antibiotics or a spray without referral only delay diagnosis."
    },
    {
     "h": "Smoking",
     "t": "NICE NG209: give very brief advice and offer referral to stop smoking services; varenicline, cytisinicline (cytisine), combination nicotine replacement and nicotine-containing e-cigarettes are all options. Stopping improves treatment outcomes."
    },
    {
     "h": "Alcohol",
     "t": "Use AUDIT-C or AUDIT to quantify drinking and give a brief intervention (NICE PH24). If he may be dependent, advise him not to stop suddenly and plan assisted withdrawal (NICE CG115)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Calladine, thanks for joining. I can hear the huskiness. Tell me about your voice.",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "It’s gone all gravelly, weeks now. I run a pub and I smoke, so it’s probably just a smoker’s throat, or a cold that never went. Can you give me a spray or some antibiotics? I can’t be without my voice behind the bar."
   },
   {
    "who": "dr",
    "text": "Your voice is your livelihood, so I understand you want it fixed. I’d like to ask a few questions first so I pick the right thing. Is that okay?",
    "dom": "gs",
    "why": "Acknowledges his priority and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Fire away."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "How long exactly, and is it getting better, worse, or staying the same?",
    "dom": "tasks",
    "why": "Duration and progression"
   },
   {
    "who": "pt",
    "text": "Six weeks or so. Getting worse, if anything."
   },
   {
    "who": "dr",
    "text": "Did it start with a cold: sore throat, runny nose, temperature?",
    "dom": "tasks",
    "why": "Tests his infective explanation"
   },
   {
    "who": "pt",
    "text": "Not really. It just crept up."
   },
   {
    "who": "dr",
    "text": "Any feeling of something stuck in your throat, pain on swallowing, or ache in one ear?",
    "dom": "tasks",
    "why": "Globus, odynophagia and referred otalgia"
   },
   {
    "who": "pt",
    "text": "Feels like something’s there. And my throat and right ear ache a bit, same side."
   },
   {
    "who": "dr",
    "text": "Any trouble swallowing food, noisy breathing, or getting short of breath?",
    "dom": "tasks",
    "why": "Dysphagia and airway red flags"
   },
   {
    "who": "pt",
    "text": "No, I can eat fine. Breathing’s okay."
   },
   {
    "who": "dr",
    "text": "You said you smoke. How much? And how much do you drink in a typical week?",
    "dom": "tasks",
    "why": "Quantifies both major risk factors"
   },
   {
    "who": "pt",
    "text": "Forty a day. Drink, more than I should. Comes with the job."
   },
   {
    "who": "dr",
    "text": "Have you noticed any lumps in your neck?",
    "dom": "tasks",
    "why": "Asks directly about a neck lump"
   },
   {
    "who": "pt",
    "text": "(pause) There’s a small one. On the right. I’ve been leaving it."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "Thank you for telling me. I get the feeling that lump has been on your mind. What have you been thinking it might be?",
    "dom": "rto",
    "why": "Surfaces the hidden fear"
   },
   {
    "who": "pt",
    "text": "One of my regulars had throat cancer. Lost his voice. I’ve been trying not to think about it. And I know you’ll tell me to pack in the fags and the drink."
   },
   {
    "who": "dr",
    "text": "That sounds like a lot to carry on your own, especially after seeing what happened to him. I’m glad you’ve said it. I’m not here to lecture you. Let’s deal with the voice first.",
    "dom": "rto",
    "why": "Validates the fear and defuses the expected lecture"
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "I’ll be straight with you. A voice that’s been hoarse for six weeks and getting worse, with a lump on the same side and ear ache, in someone who smokes and drinks, is something I must have checked urgently to rule out a cancer of the voice box or throat. A spray or antibiotics won’t help that and would only delay things.",
    "dom": "tasks",
    "why": "Names the concern honestly, applies the NICE NG12 (updated April 2026) criterion"
   },
   {
    "who": "pt",
    "text": "So you think it’s cancer."
   },
   {
    "who": "dr",
    "text": "I can’t tell without a proper look, and there are other causes. What I can tell you is that when these are caught early they are very treatable, and treatment often keeps the voice. Getting seen quickly is what gives you the best chance.",
    "dom": "rto",
    "why": "Balances honesty with realistic hope, links to his livelihood"
   },
   {
    "phase": "Shared plan",
    "clock": "9–11 min",
    "who": "dr",
    "text": "So I’m referring you today on the urgent pathway to the ear, nose and throat team, to be seen within two weeks. They’ll look at your voice box with a thin camera through the nose, which takes a few minutes in clinic, and examine the lump. I’d also like you to come in this week so I can examine your neck, mouth and ears, and I’ll arrange a chest X-ray.",
    "dom": "tasks",
    "why": "Suspected cancer referral, examination and chest X-ray"
   },
   {
    "who": "pt",
    "text": "Right. That’s quick."
   },
   {
    "who": "dr",
    "text": "About the smoking and drinking: I’m not going to lecture you. They’re the biggest things affecting your throat, and cutting down helps whatever the result. When you’re ready, I can refer you to the stop smoking service, and we can look at the drinking together. If you drink every day, please don’t stop suddenly without talking to me first.",
    "dom": "tasks",
    "why": "Brief intervention on smoking and alcohol, withdrawal safety"
   },
   {
    "who": "pt",
    "text": "I might try the smoking. The drink, one thing at a time."
   },
   {
    "who": "dr",
    "text": "That’s a fair start. I’ll make the stop smoking referral today.",
    "dom": "rto",
    "why": "Respects his pace and agrees one step"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you get any noisy breathing, struggle to breathe, or can’t swallow, call 999 or go to A&E. If the lump grows, or you haven’t heard about the appointment within a week, ring us. Can you tell me the plan so I know I’ve explained it well?",
    "dom": "gs",
    "why": "Airway safety-net, lost-referral safety-net, teach-back"
   },
   {
    "who": "pt",
    "text": "Urgent ENT, camera up the nose, come in this week for you to check my neck, chest X-ray, stop smoking referral. Breathing trouble, 999."
   },
   {
    "who": "dr",
    "text": "That’s it. I’ll see you this week, and I’ll check the referral has gone through.",
    "dom": "gs",
    "why": "Owns the follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; acknowledged his voice as his livelihood before directing the history.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work as a publican, smoking and alcohol quantified, fear of losing his voice and income.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the pause about the neck lump and \"I know you’ll tell me to pack in\", and followed both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (smoker’s throat or lingering cold), concern (cancer like his regular, voice, a lecture), expectation (spray or antibiotics).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "In-person examination of mouth, throat, neck nodes and ears; chest X-ray; nasendoscopy via ENT.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Laryngeal or other head and neck cancer versus reflux, vocal strain, infection; tested the \"cold\" explanation.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about globus, otalgia, swallowing, stridor, breathlessness and neck lumps.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated persistent hoarseness with a neck lump in a smoker as needing urgent exclusion of cancer.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Suspected cancer pathway referral today per NICE NG12 (updated April 2026); no antibiotics or spray.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Very brief advice and stop smoking referral (NICE NG209); alcohol brief intervention and withdrawal safety (NICE CG115).",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 for stridor or inability to swallow; chase if no appointment within a week; teach-back; review this week.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Mental health & addiction",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Roy Calladine",
    "age": "63 years · male",
    "pmh": [
     "Smoker, 40 a day",
     "Heavy alcohol use"
    ],
    "meds": [
     "No regular medication recorded"
    ],
    "allergy": "None recorded",
    "recent": "Publican. No previous consultation for this problem.",
    "reason": "\"My voice has gone husky. Can I have a spray or antibiotics?\""
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "He offers \"smoker’s throat\" and asks for antibiotics. Acknowledge that his voice is his living."
    },
    {
     "t": "1–5",
     "h": "Directed history",
     "d": "Duration, progression, no cold, globus, ear ache, swallowing, breathing, smoking and alcohol, then ask directly about neck lumps."
    },
    {
     "t": "5–7",
     "h": "ICE",
     "d": "His regular’s throat cancer, fear for his voice and income, expecting a lecture."
    },
    {
     "t": "7–11",
     "h": "Explain and refer",
     "d": "Honest explanation; early cancers are very treatable. Suspected cancer referral today, in-person examination, chest X-ray, one agreed step on smoking."
    },
    {
     "t": "11–12",
     "h": "Safety-net and close",
     "d": "999 for breathing or swallowing problems; chase a lost referral; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes antibiotics or a spray; accepts \"smoker’s throat\"; never asks about neck lumps or ear ache; no suspected cancer referral; lectures on smoking and drinking so he disengages.",
    "pass": "Recognises persistent hoarseness in a smoker over 45 as an NICE NG12 (updated April 2026) referral; elicits the neck lump; refers on the suspected cancer pathway; mentions smoking and alcohol; gives a basic safety-net.",
    "exc": "All of the above, plus: tests his \"cold\" explanation; surfaces the fear rooted in his regular’s cancer; explains honestly with realistic hope for his voice; arranges examination and chest X-ray; negotiates one step on smoking without a lecture and warns about stopping alcohol suddenly; clear airway safety-net and teach-back."
   },
   "avoid": [
    {
     "dont": "\"Let’s try a course of antibiotics and see if it settles.\"",
     "instead": "\"Six weeks of a worsening husky voice needs a specialist look, so I’m referring you urgently today.\"",
     "why": "Antibiotics for persistent hoarseness delay a cancer diagnosis and are not indicated."
    },
    {
     "dont": "\"You really need to stop smoking and drinking now.\"",
     "instead": "\"They’re the biggest things affecting your throat. When you’re ready, I can help with either.\"",
     "why": "A lecture confirms what he feared and may stop him attending."
    },
    {
     "dont": "\"It’s probably nothing, but I’ll refer you to be safe.\"",
     "instead": "\"This needs checking urgently to rule out cancer. If it is, caught early it’s very treatable.\"",
     "why": "False reassurance undermines his attendance; honest framing with hope works better."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Livelihood",
     "t": "As a publican his voice and his work environment matter. Acknowledge the worry about income and work, and plan around appointments."
    },
    {
     "h": "Smoking and alcohol at work",
     "t": "Alcohol is part of his working day. Explore without judgement and offer help at his pace."
    }
   ],
   "legal": [
    {
     "h": "DVLA and alcohol",
     "t": "If alcohol misuse or dependence is diagnosed, he must notify the DVLA and should not drive until the DVLA has decided on his licence (DVLA assessing fitness to drive). Raise it only if dependence is confirmed, and document the advice."
    }
   ],
   "professional": [
    {
     "h": "Referral tracking",
     "t": "Track the suspected cancer referral and the chest X-ray. Document the red flags, the NICE NG12 (updated April 2026) criterion met, and his agreement."
    },
    {
     "h": "Honest disclosure",
     "t": "GMC Good Medical Practice 2024: be honest about the possibility of cancer while giving information at a pace he can manage."
    }
   ],
   "community": [
    {
     "h": "Support services",
     "t": "NHS stop smoking services, local alcohol services, Macmillan Cancer Support, and the Mouth Cancer Foundation for information on head and neck cancer."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Hoarseness for more than 3 weeks, progressive, in a smoker over 45",
     "Neck lump; referred ear pain with a normal ear; globus; painful or difficult swallowing",
     "Stridor, breathlessness or inability to swallow (same-day)"
    ],
    "psychosocial": [
     "Voice and income as a publican",
     "Smoking 40 a day and heavy alcohol use",
     "Fear rooted in a regular’s throat cancer; expecting a lecture"
    ],
    "ice": [
     "Idea: \"a smoker’s throat or a cold that never went\"",
     "Concern: throat cancer and losing his voice; being told off about smoking and drinking",
     "Expectation: a spray or antibiotics"
    ]
   },
   "diagnosis": "Six weeks of progressive hoarseness with a right-sided neck lump, globus and referred right ear pain in a 63-year-old heavy smoker and drinker: suspected laryngeal or other head and neck cancer, meeting the NICE NG12 (updated April 2026) criteria for a suspected cancer pathway referral.",
   "diagnosisLay": "\"When a voice stays hoarse for weeks and there’s a lump in the neck, we need to look at the voice box to make sure there’s no cancer there. If there is, catching it early usually means it can be treated well, often keeping the voice.\"",
   "management": {
    "reflectIce": "\"You’ve been worried since your regular was ill, and you need your voice for work. Getting it looked at quickly is the best way to protect both.\"",
    "psychosocial": "No lecture: acknowledge the fear, agree one step he chooses (the stop smoking referral), and keep the door open on alcohol.",
    "sharedPlan": [
     "Suspected cancer pathway referral to ENT today (NICE NG12 (updated April 2026)); nasendoscopy in clinic",
     "In-person examination this week of mouth, throat, neck and ears; chest X-ray",
     "Stop smoking referral (NICE NG209); alcohol brief intervention (NICE PH24); do not stop drinking suddenly if dependent (NICE CG115)"
    ],
    "safetyNet": [
     "Noisy breathing, breathlessness or inability to swallow: 999 or A&E",
     "Ring if no appointment within a week or the lump grows; review this week"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Hoarseness pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026)",
    "href": "algorithms/hoarseness.html"
   },
   {
    "ic": "🗺️",
    "t": "Neck lump pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026)",
    "href": "algorithms/neck-lump.html"
   },
   {
    "ic": "🗺️",
    "t": "Otalgia pathway",
    "s": "Visual algorithm · referred ear pain",
    "href": "algorithms/otalgia.html"
   },
   {
    "ic": "💠",
    "t": "Smoking cessation",
    "s": "Protocol · NICE NG209",
    "href": "management/smoking-cessation.html"
   },
   {
    "ic": "💠",
    "t": "Harmful drinking and alcohol dependence",
    "s": "Protocol · NICE CG115",
    "href": "management/alcohol-problem-drinking.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is a head and neck cancer referral hidden behind a request for antibiotics. Candidates fail by treating the voice, not finding the lump, or lecturing a man who is already frightened.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing antibiotics or a throat spray and reviewing in two weeks.",
     "why": "\"Management not in line with current UK best practice.\" NICE NG12 (updated April 2026) refers persistent unexplained hoarseness at 45 and over on the suspected cancer pathway.",
     "fix": "\"A spray won’t fix this. I’m referring you today to be seen within two weeks.\""
    },
    {
     "dom": "tasks",
     "fail": "Never asking about neck lumps or ear pain.",
     "why": "\"Did not gather key red-flag information.\" The neck lump is an NICE NG12 (updated April 2026) criterion in its own right.",
     "fix": "Ask directly: \"Have you noticed any lumps in your neck?\" and about one-sided ear ache."
    },
    {
     "dom": "tasks",
     "fail": "Advising him to stop drinking completely, starting today.",
     "why": "Sudden cessation in dependent drinkers risks withdrawal; NICE CG115 advises planned, assisted withdrawal.",
     "fix": "\"If you drink every day, don’t stop suddenly. Let’s plan it together.\""
    },
    {
     "dom": "rto",
     "fail": "Opening with a lecture about 40 a day and heavy drinking.",
     "why": "\"Judgemental approach.\" He expected a lecture, and it confirms his reason to avoid care.",
     "fix": "Acknowledge the fear first, then offer help with one step he chooses."
    },
    {
     "dom": "rto",
     "fail": "Missing the pause before he mentions the lump and his regular’s cancer.",
     "why": "\"Did not respond to cues.\" The hidden fear is what will stop him attending.",
     "fix": "\"That lump has been on your mind. What have you been thinking it might be?\""
    },
    {
     "dom": "gs",
     "fail": "No airway safety-net.",
     "why": "Stridor or inability to swallow needs emergency care, and missing it is a safety failure.",
     "fix": "\"Noisy breathing, struggling to breathe or can’t swallow: 999.\""
    },
    {
     "dom": "gs",
     "fail": "Ending with \"the hospital will send you a letter\".",
     "why": "A referral without a lost-appointment safety-net leaves a gap.",
     "fix": "\"If you haven’t heard within a week, ring us. I’ll check it has gone through.\""
    }
   ]
  }
 },
 "raised-inflammatory-markers": {
  "stem": {
   "name": "Margaret Doyle",
   "age": "72-year-old woman",
   "pmh": [
    "None recorded relevant to this presentation"
   ],
   "meds": [
    "See repeat list — to be checked before prescribing"
   ],
   "allergy": "To be confirmed",
   "recent": "Bloods for fatigue: ESR 88 mm/h, CRP raised, mild normocytic anaemia. No previous inflammatory markers on file.",
   "reason": "Video appointment to discuss her blood results. Worried the raised markers mean cancer."
  },
  "knowledge": {
   "guideline": "BSR giant cell arteritis guideline (Mackie et al., 2020) · BSR/BHPR polymyalgia rheumatica guideline (Dasgupta et al., 2010) · NICE NG12 (updated April 2026) · NOGG 2024 · NatPSA/2020/005 Steroid Emergency Card · NICE NG243 (2024) · BNF",
   "summary": "A raised ESR and CRP only tell you inflammation is present. At 72, girdle pain and stiffness suggest polymyalgia, but a new temporal headache, scalp tenderness and jaw pain on chewing mean suspected giant cell arteritis: start high-dose prednisolone today and refer on the fast-track pathway, then complete a proportionate work-up.",
   "points": [
    {
     "h": "Markers point, they don’t diagnose",
     "t": "ESR and CRP rise with infection, inflammatory disease, malignancy and tissue injury. Interpret them through a directed history and examination; do not treat them as a cancer test or trigger an undirected battery of tests."
    },
    {
     "h": "Ask the GCA questions every time",
     "t": "In anyone over 50 with raised inflammatory markers or PMR symptoms, ask about new headache (often temporal), scalp tenderness, jaw or tongue claudication, visual disturbance and systemic upset. Jaw claudication is a high-risk feature (BSR 2020)."
    },
    {
     "h": "Treat on suspicion",
     "t": "BSR 2020: suspected GCA without visual loss — prednisolone 40–60 mg once daily, started the same day by the GP. Acute or intermittent visual loss — IV methylprednisolone 500 mg–1 g daily for up to 3 days via same-day ophthalmology; do not delay oral steroid if IV is not immediately possible."
    },
    {
     "h": "Fast-track, and test without delaying treatment",
     "t": "BSR 2020: refer urgently to the GCA fast-track service — specialist review ideally the same working day and always within 3 working days. Temporal artery biopsy (at least 1 cm) and/or ultrasound within 1 week of starting steroids, because steroids reduce test sensitivity."
    },
    {
     "h": "PMR and the wider work-up",
     "t": "BSR/BHPR 2010: PMR is age over 50, bilateral shoulder and/or pelvic girdle aching and morning stiffness, with raised inflammatory markers. Baseline tests include FBC, U&E, LFT, bone profile, protein electrophoresis, TSH, CK, rheumatoid factor and urine dipstick. NICE NG12 (updated April 2026) includes a myeloma pathway for people aged 60 and over, so protein electrophoresis is proportionate here with anaemia and a high ESR."
    },
    {
     "h": "Steroid safety from day one",
     "t": "NOGG 2024: in a postmenopausal woman starting prednisolone 7.5 mg/day or more for 3 months or longer, start bone protection at the same time without waiting for DXA. BSR 2020: consider a PPI. NatPSA/2020/005: Steroid Emergency Card for 5 mg or more for 4 weeks or longer; sick-day rules per NICE NG243. Monitor glucose and BP."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Doyle, I’m Dr Lee. Thank you for joining. I can see you’ve been worried about these results — tell me what’s been on your mind.",
    "dom": "rto",
    "why": "Opens with her concern before the numbers"
   },
   {
    "who": "pt",
    "text": "I read that high inflammation can mean a hidden cancer. I’ve been so worried something’s eating away at me. I am exhausted and achy, but I put that down to age. I just want to know it isn’t cancer."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me — that’s a frightening thing to carry. I will take the cancer question seriously. To find out what’s causing the inflammation, I need to ask some quite specific questions first, then I’ll explain and we’ll make a plan. Is that all right?",
    "dom": "gs",
    "why": "Acknowledges the fear and sets an agenda that makes room for directed history"
   },
   {
    "who": "pt",
    "text": "Yes, of course."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "You mentioned aches. Where exactly are they?",
    "dom": "tasks",
    "why": "Directed history starting from her own cue"
   },
   {
    "who": "pt",
    "text": "Both shoulders, and my hips. I can hardly get my arms up to do my hair in the morning. It eases a bit as the day goes on."
   },
   {
    "who": "dr",
    "text": "How long does the stiffness last in the mornings, and how long has this been going on?",
    "dom": "tasks",
    "why": "Characterises inflammatory girdle stiffness"
   },
   {
    "who": "pt",
    "text": "A good while every morning. It’s been several weeks now."
   },
   {
    "who": "dr",
    "text": "Now some questions that really matter, even if they seem unrelated. Have you had any new headaches recently — especially around your temples?",
    "dom": "tasks",
    "why": "Actively asks the GCA red-flag questions she has not volunteered"
   },
   {
    "who": "pt",
    "text": "Actually, yes. A headache here, at the side. I thought it was tiredness."
   },
   {
    "who": "dr",
    "text": "Is your scalp tender — for example, when you brush or comb your hair?",
    "dom": "tasks",
    "why": "Asks specifically about scalp tenderness"
   },
   {
    "who": "pt",
    "text": "It is! I’d not thought to mention that. It’s sore when I comb it."
   },
   {
    "who": "dr",
    "text": "And when you chew — does your jaw ache, and does it get worse the longer you chew?",
    "dom": "tasks",
    "why": "Asks specifically about jaw claudication"
   },
   {
    "who": "pt",
    "text": "Yes, my jaw aches by the end of a meal. I thought it was my teeth."
   },
   {
    "who": "dr",
    "text": "Have you had any change in your vision at all — blurring, double vision, or a moment where the sight in one eye went dim or grey?",
    "dom": "tasks",
    "why": "Screens for visual symptoms, which determine the urgency pathway"
   },
   {
    "who": "pt",
    "text": "No, my eyes have been fine."
   },
   {
    "who": "dr",
    "text": "Any fevers, night sweats, weight loss you haven’t tried for, or back pain?",
    "dom": "tasks",
    "why": "Screens for systemic features and myeloma or malignancy clues"
   },
   {
    "who": "pt",
    "text": "Nothing I’ve noticed, apart from being so tired."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Thank you. I’m really glad I asked, because you’ve told me something very important. Can I explain what I think?",
    "dom": "rto",
    "why": "Validates her and signposts the shift to explanation"
   },
   {
    "who": "pt",
    "text": "Please."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "The shoulder and hip stiffness fits a condition called polymyalgia. But the new headache, the sore scalp and the jaw ache on chewing, together with your results, make me concerned about giant cell arteritis — inflammation of the arteries around the head. The reason it matters is that, untreated, it can affect the blood supply to the eye and threaten sight.",
    "dom": "tasks",
    "why": "Names the working diagnosis and why it is urgent, in plain language"
   },
   {
    "who": "pt",
    "text": "My sight? Oh goodness. But it isn’t cancer?"
   },
   {
    "who": "dr",
    "text": "This pattern is much more typical of artery inflammation than of cancer. I haven’t forgotten your worry, though — as part of the tests, I’ll include a check for a blood condition that can raise the ESR at your age, so we look properly rather than guess.",
    "dom": "rto",
    "why": "Addresses the cancer fear honestly without letting it eclipse the emergency"
   },
   {
    "who": "pt",
    "text": "What happens now?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "We treat today — we don’t wait for tests. I’m prescribing prednisolone, a steroid, at a high dose starting today. It usually settles symptoms within days and protects your eyesight. I’m also referring you urgently to the specialist GCA team, who should see you very soon, ideally today.",
    "dom": "tasks",
    "why": "Starts high-dose steroid without waiting for biopsy and refers on the fast-track pathway (BSR 2020)"
   },
   {
    "who": "pt",
    "text": "Is that safe, a high dose of steroids?"
   },
   {
    "who": "dr",
    "text": "A fair question. Protecting your sight comes first, and the benefits clearly outweigh the risks. We’ll protect you too: a bone-protection tablet with calcium and vitamin D, possibly a stomach-protection tablet, and a steroid card — you must never stop them suddenly. I’ll check your medicines and allergies on your record before sending it.",
    "dom": "tasks",
    "why": "Steroid safety: bone protection (NOGG 2024), PPI, Steroid Emergency Card"
   },
   {
    "who": "dr",
    "text": "I’d also like to see you in person today if you can manage it, to examine your temples and check your eyesight, and take a few more bloods. If you can’t get here, please start the tablets anyway — don’t wait for me.",
    "dom": "tasks",
    "why": "Arranges examination and baseline bloods without delaying treatment"
   },
   {
    "who": "pt",
    "text": "I can get there this afternoon."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Before you go, can you tell me what you’ll do and what you’ll watch for?",
    "dom": "rto",
    "why": "Teach-back of an urgent plan"
   },
   {
    "who": "pt",
    "text": "Start the steroids today, come in this afternoon, wait for the specialist call. And not stop the tablets suddenly."
   },
   {
    "who": "dr",
    "text": "Perfect. And this is the most important part: any change in your vision — blurring, double vision, a curtain or shadow, or losing sight in either eye, even briefly — go straight to A&E or eye casualty. Don’t wait, don’t ring first. I’ll follow up the specialist review and the other results, and we’ll talk again this week.",
    "dom": "gs",
    "why": "Emphatic, specific visual safety-net and defined follow-up"
   },
   {
    "who": "pt",
    "text": "Thank you, doctor. I came in thinking cancer, and I’d never have mentioned the headache if you hadn’t asked."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Invited her worry first, then moved from her aches into a directed history.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Impact on daily tasks (hair, dressing) and how she would get to a same-day review.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Followed “achy but I put it down to age” into girdle pain, then asked directly about headache, scalp and jaw.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (hidden cancer), concern (“something eating away at me”), expectation (to be told it isn’t cancer).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Same-day temporal artery palpation, visual acuity and fundi; baseline bloods including protein electrophoresis, bone profile, U&E, LFT, TSH, CK; urinalysis.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "GCA with PMR versus infection, myeloma or other malignancy, and other inflammatory disease.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about visual loss, systemic symptoms and back pain; recognised GCA as a sight-threatening emergency.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Suspected giant cell arteritis with polymyalgic symptoms, explained in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Prednisolone 40–60 mg started today without waiting for tests; fast-track referral (BSR 2020); IV route via ophthalmology if visual loss.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Bone protection without waiting for DXA (NOGG 2024), consider PPI, Steroid Emergency Card (NatPSA/2020/005), glucose and BP monitoring.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Any visual change → A&E or eye casualty immediately; specialist review chased; follow-up this week.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Older adults",
    "Investigations & results"
   ],
   "stem": {
    "name": "Margaret Doyle",
    "age": "72 years · female",
    "pmh": [
     "Nil relevant recorded"
    ],
    "meds": [
     "Check repeat list before prescribing"
    ],
    "allergy": "To confirm",
    "recent": "⚠ Bloods for fatigue: ESR 88 mm/h, CRP raised, Hb mildly low with normal MCV. No previous markers for comparison.",
    "reason": "Video review of results. “Is it cancer?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Hear the fear",
     "d": "She opens with hidden cancer. Acknowledge it, then ask permission for specific questions."
    },
    {
     "t": "1–5",
     "h": "Directed history",
     "d": "Girdle pain and stiffness; then headache, scalp tenderness, jaw claudication, vision; systemic features and back pain. She will not volunteer the GCA symptoms."
    },
    {
     "t": "5–6",
     "h": "Name it",
     "d": "Polymyalgic symptoms plus suspected giant cell arteritis, and why sight is at risk."
    },
    {
     "t": "6–10",
     "h": "Treat now",
     "d": "Prednisolone 40–60 mg today, fast-track referral, same-day examination and bloods, bone protection, steroid card. Address the cancer fear with a proportionate work-up."
    },
    {
     "t": "10–12",
     "h": "Safety-net and teach-back",
     "d": "Any visual change → A&E or eye casualty now. Teach-back. Follow-up this week."
    }
   ],
   "wordPics": {
    "fail": "Reassures that it is probably age or arranges a CT to look for cancer; never asks about headache, scalp or jaw; or recognises GCA but waits for biopsy or a specialist before starting steroids.",
    "pass": "Asks the GCA questions, recognises suspected giant cell arteritis, starts high-dose prednisolone today with fast-track referral, and safety-nets visual symptoms.",
    "exc": "All of the above, plus: connects her unvolunteered symptoms kindly, addresses the cancer fear with a proportionate myeloma check, starts bone protection and a steroid card from day one, arranges same-day examination without delaying treatment, and uses teach-back."
   },
   "avoid": [
    {
     "dont": "“Inflammation markers can be raised for lots of reasons at your age — let’s repeat them in a month.”",
     "instead": "“The markers tell us where to look, not what it is — let me ask some specific questions.”",
     "why": "Delay and a random recheck miss a sight-threatening emergency."
    },
    {
     "dont": "“I’ll refer you to the specialists, and they’ll decide about steroids.”",
     "instead": "“We start the steroids today — protecting your sight can’t wait for tests.”",
     "why": "BSR 2020 is explicit: tests must not delay treatment."
    },
    {
     "dont": "“Don’t worry, it definitely isn’t cancer.”",
     "instead": "“This pattern fits artery inflammation much better — and I’ll include checks so we look properly.”",
     "why": "False certainty undermines trust; proportionate honesty addresses the fear."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Getting to same-day care",
     "t": "Older patients may need help with transport for urgent reviews and biopsy. Ask how she will get there rather than assume."
    },
    {
     "h": "Living with steroids",
     "t": "High doses affect sleep, mood, appetite and glucose. Honest expectations and a written plan help adherence through a long taper."
    }
   ],
   "legal": [
    {
     "h": "Driving and vision",
     "t": "No DVLA action is needed while vision is normal. If GCA causes visual loss or a field defect, she must tell the DVLA and meet the Group 1 eyesight standard before driving."
    }
   ],
   "professional": [
    {
     "h": "Acting on clinical suspicion",
     "t": "Starting high-dose steroid before confirmation is correct practice (BSR 2020). Document the red flags, dose, referral and safety-net advice (GMC Good Medical Practice 2024)."
    },
    {
     "h": "Limits of video",
     "t": "Temporal arteries, acuity and fundi cannot be assessed by video. Recognise the limit and arrange a same-day examination without deferring treatment."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "PMRGCAuk (patient charity) for information and peer support; Royal Osteoporosis Society for bone-health advice on long-term steroids."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Any visual disturbance: blurring, diplopia, transient or persistent loss — emergency ophthalmology",
     "New temporal headache, scalp tenderness, jaw or tongue claudication — suspected GCA",
     "Back pain, bone pain, weight loss, night sweats, recurrent infection — consider myeloma or other malignancy",
     "Fever or focal infection — infective cause of raised markers"
    ],
    "psychosocial": [
     "Function: lifting arms, dressing, rising from a chair",
     "Transport and support for same-day and fast-track appointments",
     "Her understanding of steroids and fear of side effects"
    ],
    "ice": [
     "Idea: raised inflammation means a hidden cancer",
     "Concern: “something is eating away at me”; aches dismissed as age",
     "Expectation: to be told the cause and that it isn’t cancer"
    ]
   },
   "diagnosis": "Suspected giant cell arteritis with polymyalgic symptoms: “Your headache, sore scalp and aching jaw with these results suggest inflammation of the arteries around your head, which can threaten sight if untreated.”",
   "diagnosisLay": "“The inflammation test is like a smoke alarm — it tells us there’s smoke, not where the fire is. Your answers have shown us where: the arteries around your temples. We put that fire out today, before it reaches your eyes.”",
   "management": {
    "reflectIce": "“You were right that this result mattered. It isn’t pointing to cancer — it’s pointing to something treatable that we need to act on today.”",
    "psychosocial": "Check she can get to a same-day appointment and specialist review; give a written steroid plan and card; plan follow-up this week.",
    "sharedPlan": [
     "Prednisolone 40–60 mg once daily from today (BSR 2020); fast-track GCA referral; same-day examination and baseline bloods",
     "Bone protection without waiting for DXA (NOGG 2024), consider a PPI, Steroid Emergency Card and sick-day rules",
     "Proportionate work-up of the raised markers, including protein electrophoresis for possible myeloma"
    ],
    "safetyNet": [
     "Any visual change — even brief — go straight to A&E or eye casualty",
     "Never stop steroids suddenly; review this week and chase the specialist appointment"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "High CRP or ESR",
    "s": "Visual algorithm · structured work-up",
    "href": "algorithms/high-crp-esr.html"
   },
   {
    "ic": "💠",
    "t": "Giant cell arteritis",
    "s": "Management protocol · BSR 2020",
    "href": "management/giant-cell-arteritis.html"
   },
   {
    "ic": "💠",
    "t": "Polymyalgia rheumatica",
    "s": "Management protocol · dosing and taper",
    "href": "management/polymyalgia-rheumatica.html"
   },
   {
    "ic": "🗺️",
    "t": "Vision loss pathway",
    "s": "Visual algorithm · same-day triage",
    "href": "algorithms/vision-loss.html"
   }
  ],
  "pitfalls": {
   "intro": "This station hides a sight-threatening emergency behind a cancer worry. Candidates fail by answering the question she asked instead of asking the questions she did not know mattered.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Arranging a “cancer screen” of scans and tumour markers without a directed history.",
     "why": "Raised markers are non-specific. An undirected work-up misses GCA and is not good practice.",
     "fix": "Let the history direct tests: girdle symptoms, GCA questions, systemic and bone symptoms, then a targeted work-up."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about headache, scalp tenderness or jaw claudication.",
     "why": "She will not volunteer them. Failing to ask is the commonest way this station is failed.",
     "fix": "Ask every over-50 with raised markers: “New headache? Sore scalp when you comb your hair? Jaw ache when you chew? Any change in vision?”"
    },
    {
     "dom": "tasks",
     "fail": "Suspecting GCA but waiting for a biopsy or specialist opinion before starting prednisolone.",
     "why": "BSR 2020: start glucocorticoid on suspicion; biopsy or ultrasound can follow within 1 week.",
     "fix": "“We start the steroids today — we don’t wait for tests.”"
    },
    {
     "dom": "rto",
     "fail": "Dismissing the cancer fear because the diagnosis is now obvious to you.",
     "why": "Unaddressed concerns lose Relating marks and leave her anxious.",
     "fix": "Return to it explicitly and offer a proportionate check (protein electrophoresis) so she knows it was heard."
    },
    {
     "dom": "tasks",
     "fail": "Starting high-dose steroids with no bone protection, card or warning about stopping suddenly.",
     "why": "Steroid harms are predictable. NOGG 2024 and NatPSA/2020/005 set clear expectations.",
     "fix": "Bone protection from day one, consider a PPI, Steroid Emergency Card, and “never stop suddenly”."
    },
    {
     "dom": "gs",
     "fail": "A vague safety-net: “ring us if you feel worse”.",
     "why": "The critical risk is visual loss; non-specific safety-netting is standard failing feedback.",
     "fix": "Name it: “Any change in vision — even brief — go straight to A&E or eye casualty.”"
    }
   ]
  }
 },
 "reactive-arthritis": {
  "stem": {
   "name": "Jordan Eze",
   "age": "27-year-old man",
   "pmh": [
    "No significant past medical history"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Few days of a painful, swollen right knee with no clear injury. No previous joint problems recorded.",
   "reason": "Video consultation: “my knee’s come up massive — I think I twisted it at football.” Wants anti-inflammatories or for it to be drained."
  },
  "knowledge": {
   "guideline": "BSR/BHPR hot swollen joint guideline (2006) · BASHH Chlamydia trachomatis guideline (2026) · BASHH gonorrhoea guideline (2025) · NICE NG253",
   "summary": "An acutely hot, swollen knee without real injury is septic arthritis until proven otherwise. Once that is excluded, a knee plus heel pain weeks after dysentery or unprotected sex is reactive arthritis, and the trigger must be found and treated.",
   "points": [
    {
     "h": "Septic arthritis first",
     "t": "BSR/BHPR 2006: an acute hot swollen joint is septic until proven otherwise. Aspirate before antibiotics where possible and send for Gram stain, culture and crystals. Fever and systemic upset may be absent. A hot, swollen joint that cannot be examined in person needs a same-day face-to-face assessment."
    },
    {
     "h": "Recognise reactive arthritis",
     "t": "A sterile, usually asymmetrical oligoarthritis of large lower-limb joints, starting days to weeks after a gastrointestinal (Salmonella, Shigella, Campylobacter, Yersinia) or genitourinary (Chlamydia trachomatis) infection. It may come with enthesitis (Achilles, heel), conjunctivitis or anterior uveitis, and urethritis. It is associated with HLA-B27."
    },
    {
     "h": "Take both histories",
     "t": "Ask about recent diarrhoea and take a sexual history: new partners, condom use, symptoms of urethritis, and the partner’s status. Men often won’t volunteer it. Offer to see him alone and explain why you are asking."
    },
    {
     "h": "STI testing and treatment",
     "t": "Offer chlamydia and gonorrhoea NAAT (first-void urine), plus HIV and syphilis tests, ideally through sexual health services. BASHH 2026: first-line treatment for uncomplicated chlamydia is doxycycline 100 mg twice daily for 7 days. Gonorrhoea is managed through sexual health (BASHH 2025)."
    },
    {
     "h": "Partner notification",
     "t": "A sexual health adviser decides the look-back period and can notify contacts anonymously. BASHH 2026 uses 4 weeks before symptom onset for men with urethral symptoms. Advise no sex until he and his partners have completed treatment."
    },
    {
     "h": "Managing the arthritis",
     "t": "Once sepsis is excluded: NSAIDs (dose per BNF), with intra-articular steroid for a persistent single joint. Most cases settle over weeks to months. Refer to rheumatology if severe, persistent or uncertain. A red, painful eye with photophobia or blurred vision needs same-day ophthalmology to exclude uveitis."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Jordan, thanks for joining. Tell me what’s been happening with your knee.",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "It’s come up massive and it’s killing me. I reckon I twisted it at football. Can you just give me strong anti-inflammatories, or drain it? I don’t need a big examination. It’s just a footy knee, right?"
   },
   {
    "who": "dr",
    "text": "I can see it’s really painful, and I want to get you sorted. I’ll ask a few focused questions to make sure it is just a footy knee, because some swollen knees need something different. Then we’ll agree a plan. Fair?",
    "dom": "gs",
    "why": "Acknowledges his request and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "What exactly happened at football — did you feel it twist or pop, and could you carry on?",
    "dom": "tasks",
    "why": "Tests the injury explanation"
   },
   {
    "who": "pt",
    "text": "Honestly… I don’t remember a specific moment. It just swelled up a few days after."
   },
   {
    "who": "dr",
    "text": "That’s useful. Can you point the camera at both knees? … The right one does look swollen. Is it hot to touch? Can you put weight on it? Any fever, shivers or feeling unwell?",
    "dom": "tasks",
    "why": "Screens for septic arthritis"
   },
   {
    "who": "pt",
    "text": "It’s warm, yeah. I can hobble on it. I don’t feel ill — it’s just the knee."
   },
   {
    "who": "dr",
    "text": "Any pain anywhere else — other joints, your back, your heels?",
    "dom": "tasks",
    "why": "Looks for enthesitis and other joints"
   },
   {
    "who": "pt",
    "text": "Now you say it, my heel’s sore, at the back. I thought that was from limping."
   },
   {
    "who": "dr",
    "text": "A swollen knee plus a sore heel, without a clear injury, makes me think about something called reactive arthritis. It can follow an infection a few weeks earlier. Have you had any tummy upset recently?",
    "dom": "tasks",
    "why": "Forms a hypothesis and searches for the trigger"
   },
   {
    "who": "pt",
    "text": "Yeah, about three weeks ago. Bad food poisoning on a lads’ holiday. Diarrhoea for days, blood in it once. It’s gone now."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "That fits well. The other common trigger is an infection caught through sex. I ask everyone this in this situation, and there’s no judgement at all. Is it OK if I ask a few personal questions? Are you somewhere private?",
    "dom": "rto",
    "why": "Signposts sensitive questions and checks privacy"
   },
   {
    "who": "pt",
    "text": "(pause) I’m on my own, yeah."
   },
   {
    "who": "dr",
    "text": "Since that holiday, or on it, have you had sex with anyone new, and was a condom used?",
    "dom": "tasks",
    "why": "Direct, non-judgemental sexual history"
   },
   {
    "who": "pt",
    "text": "(long pause) …Yeah. Someone on the trip. No condom. I’ve got a girlfriend at home. That’s why I didn’t say."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That can’t have been easy, and everything you tell me stays confidential. It’s really useful, because it helps me treat the right thing. Any stinging when you pass urine, or any discharge? Any gritty or red eyes?",
    "dom": "rto",
    "why": "Thanks him, reassures on confidentiality, completes the triad"
   },
   {
    "who": "pt",
    "text": "A bit of stinging, yeah. And my eyes were gritty last week. I thought it was hay fever."
   },
   {
    "who": "dr",
    "text": "And what’s been going through your mind about all of this?",
    "dom": "rto",
    "why": "Explores his ideas and concerns"
   },
   {
    "who": "pt",
    "text": "Honestly, I’ve been trying not to think about it. I just wanted the knee sorted. If it’s something from that trip… my girlfriend…"
   },
   {
    "who": "dr",
    "text": "I can hear that’s weighing on you. Let’s take it one step at a time. My job is to look after your health, not to judge.",
    "dom": "rto",
    "why": "Contains his anxiety without moralising"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s what I think. The most likely explanation is reactive arthritis: the immune system reacting to an infection a few weeks ago — either the food poisoning, or an infection like chlamydia caught through sex. The joint itself isn’t infected, and it usually settles.",
    "dom": "tasks",
    "why": "Explains the working diagnosis in plain terms"
   },
   {
    "who": "pt",
    "text": "So it’s not from football?"
   },
   {
    "who": "dr",
    "text": "It doesn’t look like it. But there’s one thing I must rule out first. Rarely, a hot, swollen knee means germs inside the joint, which can damage it quickly. I can’t judge that fully on video, so I’d like to see you in person today. If it looks infected, you’d go to hospital to have fluid drawn off and tested.",
    "dom": "tasks",
    "why": "Same-day face-to-face assessment to exclude septic arthritis"
   },
   {
    "who": "pt",
    "text": "Today? OK. I can get there."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Good. I’ll also arrange a sexual health check: a urine test for chlamydia and gonorrhoea, and blood tests for HIV and syphilis. The local sexual health clinic can do all of this confidentially, and they’re very good at this.",
    "dom": "tasks",
    "why": "Full STI screen with appropriate referral"
   },
   {
    "who": "pt",
    "text": "And if it’s chlamydia?"
   },
   {
    "who": "dr",
    "text": "It’s treated with a week of antibiotics. Until you and any partners have finished treatment, no sex, including with your girlfriend. Anyone you’ve slept with recently will need testing too. The clinic has health advisers who can tell partners anonymously, if you prefer.",
    "dom": "tasks",
    "why": "Treatment, abstinence and partner notification"
   },
   {
    "who": "pt",
    "text": "Anonymous? That… helps. I need to think about what to tell her."
   },
   {
    "who": "dr",
    "text": "That’s your decision, and it’s understandable to need time. I won’t share anything without your agreement. The clinic can help you think it through too.",
    "dom": "rto",
    "why": "Respects autonomy and confidentiality"
   },
   {
    "who": "dr",
    "text": "For the knee: once infection is ruled out, anti-inflammatory tablets help, and sometimes a steroid injection. Most people recover over weeks to a few months. It’s not a footy knee, so I’d rest from five-a-side until it has settled.",
    "dom": "tasks",
    "why": "Arthritis management and realistic expectations"
   },
   {
    "who": "pt",
    "text": "Fair enough."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "A few things to act on straight away: if the knee gets much hotter or more swollen, you get a fever or shivers, or you can’t put weight on it, go to A&E. If an eye becomes painful and red, light hurts, or your vision blurs, get seen that day.",
    "dom": "gs",
    "why": "Specific safety-net for sepsis and uveitis"
   },
   {
    "who": "pt",
    "text": "Got it."
   },
   {
    "who": "dr",
    "text": "Can you tell me back what the plan is, so I know I’ve explained it properly?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "See you today for the knee. Sexual health tests. No sex till it’s sorted. Anti-inflammatories if it’s not infected. A&E if it gets worse or I get a fever."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll see you this afternoon, and we’ll follow up once the results are back. Thank you for being honest — it made a real difference.",
    "dom": "gs",
    "why": "Confirms follow-up and closes supportively"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him make the ‘footy knee’ case, then tested the injury story rather than accepting it.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored the holiday, the new partner, the girlfriend at home, and what he fears about disclosure.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up ‘I don’t remember a specific moment’, the heel pain and the hesitation, and followed each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (twisted at football); concern (the new partner and his girlfriend); expectation (NSAIDs or drainage).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Same-day face-to-face exam; aspiration via hospital if septic features; chlamydia and gonorrhoea NAAT, HIV and syphilis serology.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Septic arthritis versus reactive arthritis (post-dysenteric or post-chlamydial) versus disseminated gonococcal infection, gout or injury.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about fever, systemic upset and weight-bearing; arranged in-person assessment because a hot joint can’t be excluded on video; checked eyes for uveitis.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named probable reactive arthritis, with the GI and sexual triggers and the triad of arthritis, conjunctivitis and urethritis.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Sepsis excluded first; STI screen via sexual health; chlamydia treated per BASHH 2026; NSAIDs once sepsis excluded; rest from football.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Partner notification through a health adviser; abstinence until treatment complete; eye and urinary symptoms addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "A&E for hotter joint, fever or inability to weight-bear; same-day eye review for pain, photophobia or blurred vision; follow-up with results.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Jordan Eze",
    "age": "27 years · male",
    "pmh": [
     "Nil significant"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Booking note: “knee swollen up, think I twisted it at footy.” No previous MSK consultations.",
    "reason": "Video consultation about a painful, swollen right knee."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "He wants NSAIDs or drainage and no examination. Acknowledge it; don’t accept ‘footy knee’ yet."
    },
    {
     "t": "1–4",
     "h": "Exclude sepsis + test the story",
     "d": "Mechanism, heat, weight-bearing, fever. Other joints and the heel. Recent diarrhoea."
    },
    {
     "t": "4–6",
     "h": "Sexual history",
     "d": "Signpost, check privacy, ask directly and without judgement. Then urethral and eye symptoms."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Reactive arthritis likely, but see him in person today to exclude septic arthritis. STI screen, partner notification, abstinence. NSAIDs once sepsis excluded."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "A&E for hotter joint, fever or not weight-bearing. Same-day eye review for a painful red eye. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Accepts ‘twisted it at football’, prescribes NSAIDs over video with no plan to examine; never asks about diarrhoea or sexual contacts; or asks but moralises; no safety-net for septic arthritis.",
    "pass": "Considers septic arthritis and arranges assessment; links the knee to the recent diarrhoea; takes a sexual history and offers an STI screen; gives a basic safety-net.",
    "exc": "All of the above, plus: signposts and normalises the sexual history so he discloses; completes the triad (eyes, urethra); arranges same-day in-person assessment; explains partner notification and anonymous options; respects his control over what he tells his girlfriend; names uveitis symptoms; teach-back confirms the plan."
   },
   "avoid": [
    {
     "dont": "“It sounds like a sprain. Rest, ice and ibuprofen.”",
     "instead": "“A hot, swollen knee with no clear injury needs checking in person today, to make sure there’s no infection in the joint.”",
     "why": "Missing septic arthritis is the critical safety fail."
    },
    {
     "dont": "“Have you been sleeping around?”",
     "instead": "“I ask everyone this in this situation. Have you had any new sexual partners recently?”",
     "why": "Judgemental wording shuts down disclosure and loses Relating marks."
    },
    {
     "dont": "“You’ll have to tell your girlfriend.”",
     "instead": "“The clinic can notify partners anonymously. What you tell her is your decision.”",
     "why": "Partner notification matters, but coercion damages trust and breaches his autonomy."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Relationship and guilt",
     "t": "Unprotected sex with a new partner while in a relationship brings shame and fear of discovery. This is why he blames football. A non-judgemental approach makes disclosure possible."
    },
    {
     "h": "Sport and work",
     "t": "He wants to get back to five-a-side. Explain that rest is needed while the joint is inflamed. A fit note may be needed if his job involves heavy physical work."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality",
     "t": "GMC Confidentiality (2017): his sexual history and STI results are confidential. The GP must not tell his girlfriend. Anonymous partner notification through sexual health services protects both confidentiality and public health."
    }
   ],
   "professional": [
    {
     "h": "Non-judgemental care",
     "t": "GMC Good Medical Practice (2024): do not let personal views about a patient’s lifestyle affect care. Explain why sexual history is clinically relevant."
    },
    {
     "h": "Remote consultation limits",
     "t": "A hot swollen joint can’t be safely assessed on video. Recognise this and arrange in-person review the same day. Document the reasoning."
    }
   ],
   "community": [
    {
     "h": "Sexual health services",
     "t": "Local sexual health (GUM) clinics offer free, confidential testing, treatment and health-adviser partner notification. Many areas also offer online self-sampling kits."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Fever, rigors, systemic upset, inability to weight-bear or a very hot joint — septic arthritis; same-day hospital assessment",
     "Painful red eye, photophobia or blurred vision — anterior uveitis; same-day ophthalmology",
     "Rash, pustules or migratory joint pains after new sexual contact — disseminated gonococcal infection"
    ],
    "psychosocial": [
     "New sexual partner on holiday while in a relationship — guilt and fear of disclosure",
     "Wants to get back to football quickly",
     "Whether he feels able to attend sexual health services"
    ],
    "ice": [
     "Idea: “I twisted it at football — it’s a footy knee.”",
     "Concern: that the knee is linked to sex on holiday, and what it means for his girlfriend",
     "Expectation: strong anti-inflammatories or drainage, with no examination"
    ]
   },
   "diagnosis": "Explain both parts: “This is most likely reactive arthritis — the immune system reacting to an infection a few weeks ago, from the food poisoning or from an infection caught through sex. But first I must rule out an infection inside the joint, so I need to see you in person today.”",
   "diagnosisLay": "“Your immune system fought off a bug a few weeks ago, but it’s still on alert and has started inflaming your knee and heel by mistake. It’s like a smoke alarm that keeps going after the fire’s out. It usually settles, but we need to treat any bug that’s still there.”",
   "management": {
    "reflectIce": "“You wanted the knee sorted without the personal questions, and I understand why. Being honest about the trip means we can treat the actual cause.”",
    "psychosocial": "Keep the tone non-judgemental. Offer anonymous partner notification. Leave the decision about what to tell his girlfriend with him, and advise abstinence until treatment is complete.",
    "sharedPlan": [
     "Same-day face-to-face assessment; hospital aspiration if septic features (BSR/BHPR 2006)",
     "Chlamydia and gonorrhoea NAAT, HIV and syphilis via sexual health; treat per BASHH 2026 and 2025",
     "NSAIDs once sepsis excluded; rest from football; rheumatology if persistent or severe"
    ],
    "safetyNet": [
     "A&E if the knee gets hotter or more swollen, fever or shivers, or he cannot weight-bear",
     "Same-day eye review for a painful red eye, photophobia or blurred vision; follow-up with results"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Joint pain and swelling",
    "s": "Visual algorithm · hot swollen joint",
    "href": "algorithms/joint-pain.html"
   },
   {
    "ic": "🗺️",
    "t": "Knee pain",
    "s": "Visual algorithm · non-traumatic knee",
    "href": "algorithms/knee-pain.html"
   },
   {
    "ic": "💠",
    "t": "Chlamydia",
    "s": "Management protocol · BASHH 2026",
    "href": "management/chlamydia.html"
   },
   {
    "ic": "💠",
    "t": "Urethritis in men",
    "s": "Management protocol · STI screen",
    "href": "management/urethritis-male.html"
   },
   {
    "ic": "🗺️",
    "t": "Red eye",
    "s": "Visual algorithm · uveitis red flags",
    "href": "algorithms/red-eye.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by accepting the patient’s explanation, missing the septic joint, or never getting to the sexual history. Each pattern below is fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting ‘twisted it at football’ and prescribing NSAIDs over video.",
     "why": "An acutely hot swollen joint is septic until proven otherwise (BSR/BHPR 2006). Video cannot exclude it.",
     "fix": "“I need to see this knee in person today, to make sure there’s no infection inside the joint.”"
    },
    {
     "dom": "tasks",
     "fail": "Not asking about recent diarrhoea or other joints.",
     "why": "The heel pain and the dysentery three weeks earlier are what point to reactive arthritis.",
     "fix": "Ask: “Any pain elsewhere, like your heels? Any tummy upset in the last month?”"
    },
    {
     "dom": "rto",
     "fail": "Skipping the sexual history because he seems embarrassed, or asking it in a judgemental way.",
     "why": "Chlamydia is a common trigger and he won’t volunteer it. Poor wording shuts down disclosure.",
     "fix": "Signpost, normalise and check privacy: “I ask everyone this. Is it OK to ask some personal questions?”"
    },
    {
     "dom": "tasks",
     "fail": "Testing only for chlamydia, or forgetting partner notification.",
     "why": "A full STI screen includes gonorrhoea, HIV and syphilis. Untreated partners mean reinfection and onward spread.",
     "fix": "Refer to sexual health for a full screen, treatment and health-adviser partner notification, including anonymous options."
    },
    {
     "dom": "rto",
     "fail": "Telling him he must tell his girlfriend.",
     "why": "It breaches his autonomy and may stop him engaging with testing at all.",
     "fix": "“What you tell her is your decision. The clinic can help, and can notify people anonymously.”"
    },
    {
     "dom": "tasks",
     "fail": "Ignoring the gritty eyes and stinging urine.",
     "why": "These complete the picture, and a red painful eye may be uveitis, which needs same-day ophthalmology.",
     "fix": "Ask directly, and safety-net: “A painful red eye, light hurting or blurred vision — get seen that day.”"
    },
    {
     "dom": "gs",
     "fail": "A vague ‘come back if it gets worse’ close.",
     "why": "Non-specific safety-netting is a standard failing statement, and septic arthritis can progress within hours.",
     "fix": "Name it: “Hotter, more swollen, fever, or you can’t stand on it — go to A&E.”"
    }
   ]
  }
 },
 "shingles-ophthalmic": {
  "stem": {
   "name": "Glenda Hart",
   "age": "67-year-old woman",
   "pmh": [
    "Arthritis, on methotrexate"
   ],
   "meds": [
    "Methotrexate (weekly; dose per record)"
   ],
   "allergy": "None recorded",
   "recent": "No recent consultations for this problem. Booked as a same-day video consultation.",
   "reason": "Two days of a painful, blistering rash on the right side of her forehead. Requesting a cream."
  },
  "knowledge": {
   "guideline": "UKHSA Green Book chapter 28a (shingles) · BNF and SPCs (aciclovir, valaciclovir, famciclovir) · NICE CG173 (neuropathic pain) · College of Optometrists Clinical Management Guidelines (herpes zoster ophthalmicus)",
   "summary": "A painful, one-sided, blistering rash in a band after a prodrome of pain is shingles. In the ophthalmic division with a rash on the side or tip of the nose (Hutchinson’s sign) and a red eye, it is herpes zoster ophthalmicus: start an oral antiviral today and arrange same-day eye assessment.",
   "points": [
    {
     "h": "Recognise shingles",
     "t": "Unilateral, dermatomal, painful vesicular rash that does not cross the midline, often after a day or two of pain or tingling. Cold sores are small, localised and recurrent; contact dermatitis itches rather than burns and is not dermatomal."
    },
    {
     "h": "Hutchinson’s sign and the eye",
     "t": "Vesicles on the side or tip of the nose involve the nasociliary branch and predict eye involvement (College of Optometrists CMG). With a red, watery or gritty eye, arrange same-day ophthalmology assessment; reduced vision or severe eye pain means emergency eye care."
    },
    {
     "h": "Antiviral choice and dose",
     "t": "Aciclovir 800 mg five times daily for 7 days, valaciclovir 1 g three times daily for 7 days, or famciclovir 500 mg three times daily for 7 days (SPC/BNF; adjust for renal function). Ophthalmic zoster is always treated; treatment is still considered up to a week after onset if immunosuppressed or new vesicles are forming (NHS England Pharmacy First shingles pathway, 2025). Check BNF interactions with methotrexate."
    },
    {
     "h": "Pain and post-herpetic neuralgia",
     "t": "Treat acute pain adequately. If pain persists after the rash heals, NICE CG173 offers a choice of amitriptyline, duloxetine, gabapentin or pregabalin (doses per BNF). Older age raises the risk of post-herpetic neuralgia."
    },
    {
     "h": "Methotrexate",
     "t": "Methotrexate did not cause shingles, but immunosuppression raises its risk and severity. Do not tell her to stop it on her own; take advice from her rheumatology team. Avoid adding an NSAID without checking the BNF interaction."
    },
    {
     "h": "Infection control and vaccination",
     "t": "Lesions can transmit chickenpox to non-immune people until crusted. Cover the rash and avoid pregnant women, newborns and immunosuppressed people. After recovery, check Shingrix eligibility against Green Book chapter 28a."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Hart, thanks for joining the video call. Tell me about this rash.",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "It came up two days ago on my forehead, one side, all blistery. It burns and stings. I thought it was a reaction to a new face cream, or a cold sore gone mad. My eye on that side is a bit red and watery too. Could you just give me a cream?"
   },
   {
    "who": "dr",
    "text": "That sounds really painful. I’d like to understand it properly, and I’d like to see it on the camera too, if that’s alright. Then we’ll decide on the right treatment together.",
    "dom": "gs",
    "why": "Sets the agenda and plans a visual assessment"
   },
   {
    "who": "pt",
    "text": "Of course."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Did you feel anything in that area before the blisters appeared?",
    "dom": "tasks",
    "why": "Asks about the prodrome"
   },
   {
    "who": "pt",
    "text": "A day of tingling and a sort of burning ache, before anything showed."
   },
   {
    "who": "dr",
    "text": "Could you move the camera close to your face? Show me where the rash goes, including your nose.",
    "dom": "tasks",
    "why": "Remote inspection for dermatomal pattern and Hutchinson’s sign"
   },
   {
    "who": "pt",
    "text": "(angles camera) Here, across the forehead into the hair. And there are a couple of spots on the side of my nose."
   },
   {
    "who": "dr",
    "text": "Thank you. It stops at the middle of your forehead and doesn’t cross over, and it reaches the side of your nose. Tell me about the eye. Is your vision blurred? Is it painful, or sensitive to light?",
    "dom": "tasks",
    "why": "Checks the midline and screens for eye involvement"
   },
   {
    "who": "pt",
    "text": "It feels gritty and it’s watering. The vision’s maybe a bit blurry, but I thought that was the watering."
   },
   {
    "who": "dr",
    "text": "You mentioned you take methotrexate. What is that for, and do you take any other medicines? Any kidney problems that you know of?",
    "dom": "tasks",
    "why": "Immunosuppression, interactions and renal function"
   },
   {
    "who": "pt",
    "text": "For my arthritis. That’s the main one. No kidney problems that I know of."
   },
   {
    "who": "dr",
    "text": "Do you feel unwell in yourself, or feverish? Any rash anywhere else on your body?",
    "dom": "tasks",
    "why": "Screens for systemic illness and disseminated zoster"
   },
   {
    "who": "pt",
    "text": "A bit washed out, but no fever that I’ve noticed. Nothing anywhere else."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "You said you were hoping for a cream. What’s been worrying you about it?",
    "dom": "rto",
    "why": "Explores concerns behind the request"
   },
   {
    "who": "pt",
    "text": "Honestly, the pain has frightened me, and the eye. But I didn’t want to make a fuss. We’ve got a family event coming up and I don’t want to be stuck at the hospital. And I did wonder if my arthritis tablets caused it."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me all of that. You’re not making a fuss. Those are exactly the right things to mention.",
    "dom": "rto",
    "why": "Validates and removes the \"fuss\" barrier"
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "This isn’t a cold sore or a reaction to a cream. It’s shingles: the chickenpox virus waking up in one nerve, which is why it’s painful and sits in a band on one side. The spots on the side of your nose matter. They tell me the nerve that supplies your eye is involved, and shingles in the eye can damage sight if it isn’t treated quickly.",
    "dom": "tasks",
    "why": "Names shingles and explains Hutchinson’s sign in plain language"
   },
   {
    "who": "pt",
    "text": "My sight? Goodness."
   },
   {
    "who": "dr",
    "text": "I know that sounds frightening. The good news is that you’ve come early, and there’s effective treatment. That’s why I want to act today rather than give you a cream.",
    "dom": "rto",
    "why": "Conveys urgency calmly and gives hope"
   },
   {
    "who": "dr",
    "text": "About the methotrexate: it didn’t cause the shingles, but it lowers your immunity a little, which can make shingles more likely and more severe. Please don’t stop it on your own. I’ll ask your rheumatology team today what they’d like you to do.",
    "dom": "tasks",
    "why": "Addresses the methotrexate concern accurately"
   },
   {
    "phase": "Shared plan",
    "clock": "9–11 min",
    "who": "dr",
    "text": "So, three things. First, antiviral tablets starting today, which I’ll send to your pharmacy now. Second, I’m arranging for the eye team to see you today. Third, proper pain relief. Can you get to the eye unit this afternoon?",
    "dom": "tasks",
    "why": "Antiviral today plus same-day ophthalmology"
   },
   {
    "who": "pt",
    "text": "I can get a lift. What about the family event?"
   },
   {
    "who": "dr",
    "text": "It’s a fair question. Let’s see what the eye team says. With treatment most people improve over a couple of weeks. Until the blisters have crusted over, keep the rash covered and stay away from anyone pregnant, newborn babies, or people with weak immunity.",
    "dom": "tasks",
    "why": "Infection-control advice, links to her event concern"
   },
   {
    "who": "dr",
    "text": "Sometimes the nerve pain lingers after the rash heals. If it does, tell me, because there are specific treatments for that kind of pain.",
    "dom": "tasks",
    "why": "Counsels post-herpetic neuralgia"
   },
   {
    "who": "pt",
    "text": "What can I take for the pain now?"
   },
   {
    "who": "dr",
    "text": "Regular paracetamol to start with. Please don’t add ibuprofen from the chemist, because it doesn’t mix well with methotrexate. If the pain isn’t controlled, ring me and I’ll prescribe something stronger that is safe with your other medicine.",
    "dom": "tasks",
    "why": "Analgesia with the methotrexate interaction in mind"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If your vision gets worse, the eye becomes very painful, or you can’t bear light before you’re seen, go straight to eye casualty or A&E. Please don’t drive yourself while that eye is affected. Can you tell me the plan back?",
    "dom": "gs",
    "why": "Specific safety-net, driving advice, teach-back"
   },
   {
    "who": "pt",
    "text": "Tablets from the chemist today, eye unit this afternoon with a lift, not driving, keep it covered, and don’t stop the methotrexate until you’ve spoken to the rheumatology team."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll ring you tomorrow to see how you are and what the eye team said.",
    "dom": "gs",
    "why": "Defined follow-up"
   },
   {
    "who": "pt",
    "text": "Thank you. I’m glad I didn’t just buy a cream."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her describe the rash and ask for a cream before redirecting.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Family event and travel worries; who can take her to the eye unit; reluctance to make a fuss.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the red, watery eye and the \"arthritis tablets\" comment and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (cold sore or cream reaction), concerns (pain, eye, methotrexate, the event), expectation (a cream).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Camera inspection of the dermatomal pattern, midline and nose; visual symptoms, photophobia and pain; renal function and interactions.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Shingles versus cold sore versus contact dermatitis; ocular involvement (keratitis, uveitis).",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Identified Hutchinson’s sign and eye symptoms as sight-threatening herpes zoster ophthalmicus.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named ophthalmic shingles in plain language and explained why it is urgent.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Oral antiviral today at the correct dose, same-day ophthalmology, analgesia, infection-control advice.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Methotrexate: not the cause, do not stop without advice, same-day rheumatology input; NSAID interaction checked.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Emergency eye care for visual change or severe pain, no driving, PHN counselling, next-day telephone follow-up.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Older adults",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Glenda Hart",
    "age": "67 years · female",
    "pmh": [
     "Arthritis, on methotrexate"
    ],
    "meds": [
     "Methotrexate (weekly)"
    ],
    "allergy": "None recorded",
    "recent": "Same-day video appointment booked via reception: \"rash on forehead, wants a cream\".",
    "reason": "\"A painful rash on my forehead. It’s near my eye.\""
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "She mentions the red, watery eye in her opening. Note it and come back to it."
    },
    {
     "t": "1–5",
     "h": "History and camera look",
     "d": "Prodrome, dermatomal pattern, midline, nose (Hutchinson’s sign), vision, pain, photophobia, methotrexate, renal function."
    },
    {
     "t": "5–7",
     "h": "ICE",
     "d": "Pain and eye fear, \"don’t want a fuss\", the family event, did the methotrexate cause it?"
    },
    {
     "t": "7–11",
     "h": "Explain and act",
     "d": "Shingles, not a cold sore. The eye is involved. Antiviral today, same-day ophthalmology, analgesia, methotrexate advice, infection control, PHN."
    },
    {
     "t": "11–12",
     "h": "Safety-net and close",
     "d": "Emergency eye care triggers, no driving, teach-back, telephone follow-up tomorrow."
    }
   ],
   "wordPics": {
    "fail": "Accepts the cold sore or allergy label and gives a cream; misses Hutchinson’s sign and the eye; no antiviral, or antiviral but no same-day eye assessment; tells her to stop methotrexate; no safety-net for visual change.",
    "pass": "Recognises shingles in the ophthalmic division; starts an oral antiviral at a correct dose; arranges same-day ophthalmology; gives analgesia and infection-control advice; basic safety-net.",
    "exc": "All of the above, plus: explains Hutchinson’s sign in plain words without frightening her; addresses the methotrexate worry accurately and seeks rheumatology advice; responds to the family-event worry; counsels PHN; advises about driving; checks understanding and arranges personal follow-up."
   },
   "avoid": [
    {
     "dont": "\"It’s probably a cold sore. Here’s some aciclovir cream.\"",
     "instead": "\"This is shingles, and because it reaches the side of your nose it may affect your eye, so you need tablets and an eye check today.\"",
     "why": "Topical treatment and a missed ophthalmic zoster is a sight-threatening error."
    },
    {
     "dont": "\"Stop the methotrexate until this clears.\"",
     "instead": "\"Please carry on for now. I’ll ask your rheumatology team today what they’d like you to do.\"",
     "why": "Stopping a DMARD without specialist advice risks a flare and is outside safe practice."
    },
    {
     "dont": "\"You could lose your sight in that eye.\"",
     "instead": "\"Shingles near the eye can affect sight if it isn’t treated quickly, which is why we’re acting today.\"",
     "why": "The same message, framed calmly, gets her to the eye unit without panic."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family event and travel",
     "t": "Her worry about an upcoming family event may pull her away from same-day care. Acknowledge it and let the eye assessment guide what is realistic."
    },
    {
     "h": "Getting to the eye unit",
     "t": "Ask how she will get there. She should not drive with an affected eye; help her plan a lift or transport."
    }
   ],
   "legal": [
    {
     "h": "DVLA eyesight standard",
     "t": "Drivers must be able to read a number plate from 20 metres and meet the DVLA visual acuity standard. Advise her not to drive while vision in the affected eye is blurred or the eye is too painful to open."
    }
   ],
   "professional": [
    {
     "h": "Shared care of methotrexate",
     "t": "Changes to a specialist-initiated DMARD during infection should be agreed with the rheumatology team; document the advice given and who gave it."
    },
    {
     "h": "Remote assessment",
     "t": "A camera inspection is enough to recognise Hutchinson’s sign, but eye involvement needs slit-lamp assessment in person. Document why same-day ophthalmology was arranged."
    }
   ],
   "community": [
    {
     "h": "Patient resources",
     "t": "NHS information on shingles; the community pharmacy for dispensing the antiviral promptly. Note that ophthalmic shingles is outside the community pharmacy shingles pathway."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Rash on the side or tip of the nose (Hutchinson’s sign)",
     "Red, painful or gritty eye, blurred vision, photophobia",
     "Immunosuppression (methotrexate); widespread or multi-dermatomal rash"
    ],
    "psychosocial": [
     "Reluctance to \"make a fuss\"",
     "An upcoming family event",
     "Who can take her to hospital; no driving with an affected eye"
    ],
    "ice": [
     "Idea: \"a cold sore gone mad, or a reaction to a face cream\"",
     "Concern: the pain, the eye, and whether methotrexate caused it",
     "Expectation: a cream and to carry on"
    ]
   },
   "diagnosis": "Herpes zoster in the right ophthalmic division (V1), day 2, with Hutchinson’s sign and a red, watery, gritty eye: herpes zoster ophthalmicus with probable ocular involvement, in an immunosuppressed patient.",
   "diagnosisLay": "\"Shingles is the chickenpox virus waking up in one nerve. Yours is in the nerve that also supplies your eye, which is why we treat it with tablets today and ask the eye doctors to check your eye this afternoon.\"",
   "management": {
    "reflectIce": "\"You didn’t want to make a fuss, and you were worried about your eye and your arthritis tablets. Mentioning the eye was exactly the right thing to do.\"",
    "psychosocial": "Link the plan to her family event; help her plan transport; no driving with the affected eye.",
    "sharedPlan": [
     "Oral antiviral today: aciclovir 800 mg five times daily, or valaciclovir 1 g three times daily, or famciclovir 500 mg three times daily, each for 7 days (SPC/BNF; check renal function and methotrexate interaction)",
     "Same-day ophthalmology assessment",
     "Analgesia; PHN counselling (NICE CG173 options if it develops); same-day rheumatology advice on methotrexate; cover the rash and avoid vulnerable contacts until crusted"
    ],
    "safetyNet": [
     "Worsening vision, severe eye pain or photophobia: eye casualty or A&E immediately",
     "Telephone follow-up next day; review if new areas of rash or feeling systemically unwell; check Shingrix eligibility after recovery"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Shingles",
    "s": "Protocol · antivirals · PHN",
    "href": "management/shingles.html"
   },
   {
    "ic": "🗺️",
    "t": "Red eye pathway",
    "s": "Visual algorithm · same-day referral",
    "href": "algorithms/red-eye.html"
   },
   {
    "ic": "📋",
    "t": "Red eye",
    "s": "Case walkthrough",
    "href": "../cases/red-eye.html"
   },
   {
    "ic": "📋",
    "t": "Neuropathic pain",
    "s": "Case walkthrough · NICE CG173",
    "href": "../cases/neuropathic-pain.html"
   }
  ],
  "pitfalls": {
   "intro": "This station hides a sight-threatening emergency inside a request for a cream. Candidates fail by accepting her label, missing the nose and the eye, or mishandling the methotrexate. These are the recurring patterns.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting \"cold sore\" or \"cream reaction\" and prescribing a topical.",
     "why": "\"Did not reach an appropriate diagnosis.\" A dermatomal, painful, vesicular rash with a prodrome is shingles.",
     "fix": "Ask about the prodrome and look at the pattern: one side, a band, not crossing the midline."
    },
    {
     "dom": "tasks",
     "fail": "Starting an antiviral but not arranging same-day eye assessment.",
     "why": "Hutchinson’s sign with a red, gritty eye signals ocular involvement; missing same-day ophthalmology is a safety failure.",
     "fix": "Ask her to show the side of her nose, ask about the eye, and arrange ophthalmology today."
    },
    {
     "dom": "tasks",
     "fail": "Telling her to stop methotrexate, or ignoring it entirely.",
     "why": "Both are unsafe: one risks a flare without specialist advice, the other misses a reason for treatment and an interaction check.",
     "fix": "\"It didn’t cause this, but it lowers immunity. Don’t stop it; I’ll speak to rheumatology today.\""
    },
    {
     "dom": "rto",
     "fail": "Brushing past \"I don’t want to make a fuss\" and the family event.",
     "why": "\"Did not explore the patient’s concerns.\" These are the reasons she may not go to the eye unit.",
     "fix": "Name them and link the plan: \"Let’s get your eye checked today so we know what’s realistic for the event.\""
    },
    {
     "dom": "rto",
     "fail": "\"You could go blind\" delivered bluntly.",
     "why": "Frightening wording without context is marked as poor explanation and may paralyse rather than motivate.",
     "fix": "Explain calmly why the nose matters, then give the hopeful part: early treatment works."
    },
    {
     "dom": "gs",
     "fail": "No mention of post-herpetic neuralgia or infection control.",
     "why": "An incomplete plan loses Tasks marks even with the right antiviral.",
     "fix": "One sentence each: lingering nerve pain can be treated; cover the rash and avoid pregnant women, newborns and immunosuppressed people until crusted."
    },
    {
     "dom": "gs",
     "fail": "Closing without saying what to do if vision worsens before she is seen.",
     "why": "Non-specific safety-netting is a standard failing statement.",
     "fix": "\"Worse vision, severe pain or light sensitivity: eye casualty straight away. Don’t drive. I’ll ring you tomorrow.\""
    }
   ]
  }
 },
 "unilateral-nasal": {
  "stem": {
   "name": "Wei Chen",
   "age": "52-year-old man",
   "pmh": [
    "Hay fever (patient-reported, seasonal)",
    "No other significant past medical history recorded"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "E-consult form: several weeks of a blocked right nostril with blood-stained discharge and nosebleeds from the same side. Requests a steroid nasal spray or antihistamines. No previous ENT consultation on record.",
   "reason": "Video consultation booked to discuss his nasal symptoms."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) — head and neck · NICE NG98 (hearing loss in adults, 2018, updated 2023)",
   "summary": "Persistent one-sided nasal blockage with blood-stained discharge is not hay fever. With a same-side blocked ear, a neck lump and Southern Chinese family origin, nasopharyngeal carcinoma must be excluded by urgent ENT assessment with nasendoscopy.",
   "points": [
    {
     "h": "The one-sided rule",
     "t": "Allergic rhinitis is typically bilateral, with sneezing, itch and clear discharge. Persistent unilateral obstruction, blood-stained discharge or recurrent same-side epistaxis needs examination and ENT assessment: causes range from polyp or septal deviation to sinonasal or nasopharyngeal tumour."
    },
    {
     "h": "Nasopharyngeal carcinoma clues",
     "t": "A neck lump (often the first sign), a unilateral middle-ear effusion or blocked ear from Eustachian tube obstruction, nasal obstruction with blood-stained discharge, and cranial nerve symptoms such as double vision or facial numbness. Incidence is higher in people of Southern Chinese and south-east Asian family origin; EBV-associated."
    },
    {
     "h": "The neck lump criterion",
     "t": "NICE NG12 (updated April 2026): consider a suspected cancer pathway referral (appointment within 2 weeks) for laryngeal cancer in people aged 45 and over with an unexplained lump in the neck, and for oral cancer with a persistent unexplained neck lump. At 52 with an unexplained neck lump he meets this; the head and neck team assesses the nasopharynx too."
    },
    {
     "h": "The ear criterion",
     "t": "NICE NG98 (updated 2023): consider a suspected cancer pathway referral to ENT for adults of Chinese or south-east Asian family origin who have hearing loss and a middle-ear effusion not associated with an upper respiratory tract infection. Confirm the effusion on otoscopy at a face-to-face review."
    },
    {
     "h": "Examine, but don’t delay",
     "t": "Video cannot replace anterior rhinoscopy, otoscopy and neck palpation. Arrange a prompt face-to-face examination, but the history alone justifies the urgent referral; do not wait for a spray trial."
    },
    {
     "h": "Same-day action",
     "t": "Heavy epistaxis that will not stop with pressure, or new cranial nerve signs (double vision, facial numbness, drooping), stridor or difficulty swallowing need same-day assessment."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Chen, I’m Dr Patel. I’ve read your form about the right side of your nose. Before I ask anything specific, tell me in your own words how it’s been.",
    "dom": "rto",
    "why": "Open start that lets him set out the story"
   },
   {
    "who": "pt",
    "text": "It’s just the right nostril. Blocked for weeks, bit of blood in the discharge, the odd nosebleed. I get hay fever, so I figured it’s that or a sinus thing. If you could sort a steroid spray or antihistamines, that’d be great."
   },
   {
    "who": "dr",
    "text": "Thank you, that’s a clear account. I’d like to understand it properly first, then talk about what will help, and I promise we’ll come back to the spray. Is that alright?",
    "dom": "gs",
    "why": "Agrees an agenda and parks the request without dismissing it"
   },
   {
    "who": "pt",
    "text": "Sure, go ahead."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When your hay fever usually flares, what does it feel like? Is it both sides, with sneezing and itching?",
    "dom": "tasks",
    "why": "Contrasts his usual bilateral allergy with the current one-sided picture"
   },
   {
    "who": "pt",
    "text": "Yes, normally both sides, sneezing, itchy eyes. This is different, I suppose. No sneezing, just the right side stuffed up, and the blood."
   },
   {
    "who": "dr",
    "text": "That difference matters, so thank you. Has your hearing or the ear on that same right side felt blocked or dull at all?",
    "dom": "tasks",
    "why": "Asks for the same-side ear symptom that points to the nasopharynx"
   },
   {
    "who": "pt",
    "text": "Now you mention it, yes. The right ear’s felt full, like on a plane. Muffled."
   },
   {
    "who": "dr",
    "text": "And have you noticed any lumps or swellings in your neck?",
    "dom": "tasks",
    "why": "Directly asks about the commonest presenting sign"
   },
   {
    "who": "pt",
    "text": "(pauses) There’s a small lump on the right side, under the jaw. I found it a few weeks ago. I didn’t put it on the form."
   },
   {
    "who": "dr",
    "text": "I’m really glad you’ve told me. Any double vision, numbness in your face, headaches, trouble swallowing, or weight loss?",
    "dom": "tasks",
    "why": "Screens for cranial nerve involvement and systemic features"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Can I ask about your family background? Some nose and throat conditions are more common in particular communities, so it helps me.",
    "dom": "tasks",
    "why": "Establishes the ethnicity-related risk sensitively and explains why"
   },
   {
    "who": "pt",
    "text": "My family’s from southern China."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You mentioned the lump almost quietly, and you left it off the form. I wonder whether it’s been on your mind more than you’ve let on?",
    "dom": "rto",
    "why": "Names the cue of the withheld lump gently"
   },
   {
    "who": "pt",
    "text": "Honestly, yes. I’ve read a bit online, and I know some of this is more common in people like me. I kept telling myself it’s hay fever because I didn’t want to make a fuss or take time off work."
   },
   {
    "who": "dr",
    "text": "That makes complete sense, and you haven’t made a fuss at all. What were you hoping we’d do today, really?",
    "dom": "rto",
    "why": "Validates the worry and elicits his real expectation"
   },
   {
    "who": "pt",
    "text": "Part of me wanted you to say spray, done. The other part wants to know it’s nothing."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’ll be straight with you. Hay fever affects both sides. A nose that’s blocked and bleeding on one side for weeks, with the ear blocked on the same side and a new lump in the neck, is a combination we always check with a specialist, quickly. A spray wouldn’t be the right answer.",
    "dom": "tasks",
    "why": "Applies the one-sided rule and declines allergy treatment with a reason"
   },
   {
    "who": "pt",
    "text": "Check for what, exactly?"
   },
   {
    "who": "dr",
    "text": "The honest answer is that we need to be sure there’s nothing growing at the back of the nose, including a cancer. Many of these turn out to be something harmless, like a polyp. But with your symptoms and your background, the safe thing is an urgent look, and if it were something serious, finding it early really helps.",
    "dom": "tasks",
    "why": "Names the possibility of cancer honestly and proportionately"
   },
   {
    "who": "pt",
    "text": "(quiet) Okay. I think I knew that’s what you’d say."
   },
   {
    "who": "dr",
    "text": "That’s a lot to hear on a video call. How are you doing with it?",
    "dom": "rto",
    "why": "Pauses to check his emotional response before moving on"
   },
   {
    "who": "pt",
    "text": "I’m alright. Better knowing than wondering."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s the plan. I’m sending an urgent referral today to the head and neck specialists, which means an appointment within two weeks. They’ll pass a thin camera into the nose to look at the back of it and examine your neck, and they may arrange a scan or a sample.",
    "dom": "tasks",
    "why": "Makes the suspected cancer pathway referral and explains nasendoscopy"
   },
   {
    "who": "dr",
    "text": "I’d also like to see you in person this week, so I can look in your nose and ears and feel that lump properly. That won’t hold up the referral.",
    "dom": "tasks",
    "why": "Arranges the examination video cannot provide without delaying referral"
   },
   {
    "who": "pt",
    "text": "Work’s the tricky bit. Two appointments…"
   },
   {
    "who": "dr",
    "text": "I understand. This is worth the time, and I can give you a letter for work if it helps. Could you manage early morning for my appointment?",
    "dom": "rto",
    "why": "Addresses the practical barrier rather than overriding it"
   },
   {
    "who": "pt",
    "text": "Early is fine. Thanks."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you have a nosebleed that won’t stop after 15 minutes of pinching, go to A&E. Contact us the same day if you get double vision, numbness in your face, trouble swallowing or breathing, or if the lump grows quickly. And if you haven’t heard about the hospital appointment within a week, ring us and we’ll chase it.",
    "dom": "gs",
    "why": "Specific safety-net plus a hand-off check on the referral"
   },
   {
    "who": "pt",
    "text": "Okay. Got it."
   },
   {
    "who": "dr",
    "text": "So that I know I’ve explained it well, how would you describe today’s plan to someone at home?",
    "dom": "rto",
    "why": "Teach-back to confirm understanding"
   },
   {
    "who": "pt",
    "text": "Not hay fever. Urgent camera check within two weeks, you’ll see me this week, and I ring if the bleeding’s bad or anything new happens."
   },
   {
    "who": "dr",
    "text": "Exactly right. You did the right thing coming in. I’ll see you this week.",
    "dom": "gs",
    "why": "Closes with a clear summary and follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; lets him describe the one-sided pattern; parks the spray request without dismissing it.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work pressure and reluctance to take time off; what he has read online; who is at home to support him.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up the withheld neck lump, the “different from my usual hay fever” comment and the same-side blocked ear.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (hay fever or sinus); concern (quiet worry about cancer after reading online); expectation (spray, but also wants certainty).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Face-to-face anterior rhinoscopy, otoscopy for effusion and neck examination; nasendoscopy via ENT; no spray trial first.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Nasopharyngeal or sinonasal carcinoma versus polyp, septal deviation, foreign body or infection; allergic rhinitis argued against by the one-sided pattern.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asks about cranial nerve symptoms, swallowing, weight loss and ethnicity-related risk; recognises the neck lump and unilateral ear as red flags.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "States that a tumour must be excluded and explains why this is not hay fever, while acknowledging benign causes.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Suspected cancer pathway referral today (NICE NG12 (updated April 2026) neck lump criterion; NICE NG98 ear criterion if effusion confirmed); face-to-face examination this week.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Addresses the work barrier practically (early slot, work letter); no allergy treatment as a substitute for referral.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "A&E for uncontrolled epistaxis; same-day contact for cranial nerve symptoms, stridor, dysphagia or a fast-growing lump; ring if no appointment within a week.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Ethnicity, culture & diversity",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Wei Chen",
    "age": "52 years · male",
    "pmh": [
     "Hay fever (patient-reported)",
     "Nil else significant"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ E-consult: several weeks of right-sided nasal blockage, blood-stained discharge and right-sided nosebleeds. No ENT history on file. No examination recorded.",
    "reason": "Video consultation. “Just need a spray for my hay fever.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "He frames it as hay fever and asks for a spray. Note the word “right” and hold the request until you understand the pattern."
    },
    {
     "t": "1–4",
     "h": "Directed history",
     "d": "Usual hay fever versus this episode; same-side ear; neck lump; cranial nerve symptoms, swallowing, weight; family origin. The lump only appears if you ask."
    },
    {
     "t": "4–6",
     "h": "The quiet worry",
     "d": "Name the withheld lump kindly. He has read online and has been avoiding a fuss because of work."
    },
    {
     "t": "6–10",
     "h": "Explain and refer",
     "d": "One-sided means investigate. Honest mention of cancer as a possibility, benign causes too. Suspected cancer pathway referral today; face-to-face examination this week."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "A&E for a nosebleed that won’t stop; same-day for double vision, facial numbness, swallowing or breathing problems; chase if no appointment in a week. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes a steroid spray or antihistamine for “hay fever”; never asks about the ear or the neck; misses the family origin; no referral, or a routine one; vague “come back if it doesn’t settle”.",
    "pass": "Recognises that one-sided blockage with bleeding needs investigation; finds the neck lump and blocked ear; refers urgently to ENT; arranges examination; gives a basic safety-net.",
    "exc": "All of the above, plus: explains the one-sided rule in plain words; asks about family origin sensitively and says why; names cancer honestly but proportionately; solves the work barrier; applies the NICE NG12 (updated April 2026) neck lump criterion; checks understanding with teach-back."
   },
   "avoid": [
    {
     "dont": "“It sounds like your hay fever. Let’s try a steroid spray for a month and see.”",
     "instead": "“Hay fever affects both sides. One side blocked and bleeding for weeks is something we always get looked at properly.”",
     "why": "A spray trial for persistent unilateral symptoms delays the diagnosis and is the core Tasks fail."
    },
    {
     "dont": "“Are you Chinese?”",
     "instead": "“Some nose and throat conditions are more common in particular communities. Can I ask about your family background?”",
     "why": "Asking about ethnicity with a reason is relevant and respectful; a bare question sounds like an assumption."
    },
    {
     "dont": "“It’s probably nothing, but we’ll refer to be safe.”",
     "instead": "“Many causes are harmless, but we need to be sure there’s nothing growing at the back of the nose, and that means an urgent look.”",
     "why": "False reassurance undermines the urgency; honest, proportionate framing keeps him engaged."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work and time off",
     "t": "Reluctance to take time off is a common reason for delayed presentation. Offer early slots and a letter confirming hospital appointments; urgent appointments should not be traded for work pressure."
    },
    {
     "h": "Online information and quiet fear",
     "t": "Patients who have read about a condition linked to their background may present with a “safe” explanation. Invite the worry explicitly and correct misinformation."
    }
   ],
   "legal": [
    {
     "h": "Equality Act 2010",
     "t": "Cancer is a disability under the Equality Act from diagnosis. If a diagnosis follows, he is protected from less favourable treatment at work and entitled to reasonable adjustments, including time off for treatment."
    }
   ],
   "professional": [
    {
     "h": "Ethnicity in clinical reasoning",
     "t": "Family origin changes the prior probability of nasopharyngeal carcinoma and is written into NICE NG98. Ask with an explanation and record it; this is good clinical care, not stereotyping."
    },
    {
     "h": "Remote consulting limits",
     "t": "GMC Good medical practice (2024): recognise the limits of a remote consultation. Arrange examination in person, but do not let it delay an urgent referral the history already justifies."
    },
    {
     "h": "Referral tracking",
     "t": "Suspected cancer pathway referrals should be tracked by the practice; tell the patient what to expect and when to chase."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Macmillan Cancer Support and the Mouth Cancer Foundation (head and neck) offer information in plain language, including while waiting for tests."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Persistent unilateral nasal obstruction with blood-stained discharge or recurrent same-side epistaxis",
     "Unexplained neck lump; unilateral blocked ear or middle-ear effusion in an adult",
     "Cranial nerve symptoms (double vision, facial numbness), dysphagia, weight loss; Southern Chinese or south-east Asian family origin"
    ],
    "psychosocial": [
     "Reluctance to take time off work and to “make a fuss”",
     "What he has read online and how it has affected him",
     "Who is around to support him through urgent tests"
    ],
    "ice": [
     "Idea: “It’s my hay fever, or a sinus thing.”",
     "Concern: quiet fear about the neck lump and blocked ear after reading online",
     "Expectation: a spray or antihistamine, while wanting to know it’s nothing"
    ]
   },
   "diagnosis": "“This isn’t behaving like hay fever. One-sided blockage and bleeding for weeks, with the ear blocked on the same side and a lump in the neck, means we need to rule out something growing at the back of the nose, including cancer. Many causes turn out to be harmless, but this needs an urgent specialist look.”",
   "diagnosisLay": "“Hay fever is like a whole road flooding: both lanes, both sides. When only one lane is blocked, and it keeps bleeding, we look for something sitting in that lane. The specialists have a thin camera that can see right to the back.”",
   "management": {
    "reflectIce": "“You’ve been carrying the worry about that lump on your own, and hoping it was hay fever. Let’s get it checked properly and quickly, so you’re not left wondering.”",
    "psychosocial": "Acknowledge the work pressure and offer an early face-to-face slot and a work letter, so the urgent referral actually happens.",
    "sharedPlan": [
     "Suspected cancer pathway referral to head and neck ENT today (NICE NG12 (updated April 2026) neck lump criterion; NICE NG98 if an effusion is confirmed)",
     "Face-to-face examination this week: anterior rhinoscopy, otoscopy, neck",
     "No steroid spray or antihistamine as a substitute for assessment"
    ],
    "safetyNet": [
     "A&E for a nosebleed that won’t stop after 15 minutes of pressure",
     "Same-day contact for double vision, facial numbness, swallowing or breathing difficulty, or a rapidly growing lump; ring if no appointment within a week"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Nasal congestion pathway",
    "s": "Visual algorithm · unilateral red flags",
    "href": "algorithms/nasal-congestion.html"
   },
   {
    "ic": "🗺️",
    "t": "Neck lump pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) head and neck",
    "href": "algorithms/neck-lump.html"
   },
   {
    "ic": "🗺️",
    "t": "Epistaxis pathway",
    "s": "Visual algorithm · recurrent unilateral bleeds",
    "href": "algorithms/epistaxis.html"
   },
   {
    "ic": "📋",
    "t": "Allergic rhinitis",
    "s": "Case walkthrough · the bilateral pattern",
    "href": "../cases/allergic-rhinitis.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you can hold a red-flag rule against a plausible benign story. Candidates fail it by accepting “hay fever”, by missing the questions that reveal the lump and the ear, or by referring without explaining why.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing a steroid nasal spray or antihistamine and asking him to come back if it doesn’t settle.",
     "why": "Persistent unilateral nasal obstruction with bleeding needs assessment, not an allergy trial. This is “management not in line with current UK practice” and delays a possible cancer diagnosis.",
     "fix": "State the one-sided rule and refer: “Hay fever affects both sides; this needs a specialist look.”"
    },
    {
     "dom": "tasks",
     "fail": "Never asking about the ear on the same side or about a neck lump.",
     "why": "He does not volunteer the lump. Without directed questions, the data gathering misses the two features that make the referral urgent.",
     "fix": "Ask directly: “Any blocked ear on that side? Any lumps in your neck?”"
    },
    {
     "dom": "tasks",
     "fail": "Avoiding the question of family origin because it feels awkward.",
     "why": "Southern Chinese family origin substantially raises the risk of nasopharyngeal carcinoma and appears in NICE NG98. Leaving it out weakens the reasoning.",
     "fix": "Ask with a reason: “Some conditions are more common in particular communities; can I ask about your background?”"
    },
    {
     "dom": "rto",
     "fail": "Moving straight past the lump he mentions hesitantly and never asking how he feels about it.",
     "why": "The withheld lump is the cue to his hidden worry. Missing it reads as “does not respond to cues”.",
     "fix": "“You left the lump off the form. Has it been worrying you more than you’ve said?”"
    },
    {
     "dom": "gs",
     "fail": "Delaying the referral until he can be examined face to face.",
     "why": "Examination matters, but the history alone justifies urgent referral; waiting risks weeks of delay.",
     "fix": "Refer today and examine this week in parallel."
    },
    {
     "dom": "rto",
     "fail": "Saying “it’s probably nothing” or, at the other extreme, “this could be cancer” with no context.",
     "why": "False reassurance undermines urgency; bare alarm frightens and disengages. Both lose Relating marks.",
     "fix": "Honest and proportionate: “We need to rule out a cancer; many causes are harmless; finding anything early matters.”"
    },
    {
     "dom": "gs",
     "fail": "Closing with “we’ll be in touch” and no specific safety-net.",
     "why": "Non-specific safety-netting is a standard failing feedback statement.",
     "fix": "Name the triggers (uncontrolled bleeding, double vision, facial numbness, swallowing or breathing problems) and when to chase the appointment."
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
