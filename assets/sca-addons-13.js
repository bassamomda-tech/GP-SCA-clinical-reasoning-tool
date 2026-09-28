/* ============================================================
   Reasoning GP — The Hot Seat: add-on set, batch 13
   Stem, knowledge, model consultation, scorecard tasks, extras,
   knowledge base, playbook, links and examiner pitfalls for
   20 further cases. Loaded after sca-pitfalls.js and
   before sca-practice.js; merges into the existing maps and
   attaches to the case objects exactly as those files do.
   Educational; original content; primary sources cited.
   ============================================================ */
(function(){
  var ADD = {
 "balanitis-phimosis": {
  "stem": {
   "name": "Brian Okafor",
   "age": "54-year-old man",
   "pmh": [
    "Nothing significant recorded"
   ],
   "meds": [
    "Not specified in the case: check the repeat record"
   ],
   "allergy": "None recorded",
   "recent": "Several episodes over the last few months of a red, sore, itchy glans under the foreskin with some discharge. The foreskin is becoming tight and hard to retract.",
   "reason": "“This is awkward, doctor. Can you sort it?”"
  },
  "knowledge": {
   "guideline": "[1] BASHH UK national guideline on the management of balanoposthitis (2025) · [2] NICE NG12 (updated April 2026) Suspected cancer: recognition and referral (updated April 2026) · [3] NICE PH38 Type 2 diabetes: prevention in people at high risk (2012, updated 2017) · [4] BAD guidelines for the management of lichen sclerosus (2018) · [5] BNF: clotrimazole, hydrocortisone, fluconazole · [6] GMC Intimate examinations and chaperones (2024)",
   "summary": "Balanitis describes inflammation of the glans; with the foreskin involved it is balanoposthitis. It has many causes. Irritant dermatitis and skin conditions are common, and Candida is only one cause, often linked to diabetes. Recurrent episodes with a tightening foreskin in a man in his fifties need an HbA1c, swabs and STI tests as indicated, a careful look for lichen sclerosus, cause-directed treatment and urology referral for progressive phimosis. Never forcibly retract the foreskin.",
   "points": [
    {
     "h": "Causes",
     "t": "BASHH [1]: irritant or allergic dermatitis (soaps, over-washing as well as poor hygiene), Candida, anaerobic or other bacterial infection, STIs including herpes and syphilis, lichen sclerosus, lichen planus, psoriasis, Zoon’s balanitis, fixed drug eruption, circinate balanitis, and premalignant or malignant change. Appearance suggests a cause but is not diagnostic."
    },
    {
     "h": "Diabetes",
     "t": "Recurrent candidal balanitis can be the first sign of diabetes. Check HbA1c in recurrent, severe or persistent cases. PH38 [3]: an HbA1c of 48 mmol/mol or more supports a diagnosis of type 2 diabetes (confirm with a repeat test if the patient has no symptoms); 42 to 47 mmol/mol indicates high risk."
    },
    {
     "h": "Tests",
     "t": "Sub-preputial swab when symptoms are severe, persistent or recurrent, there is discharge, or treatment has failed; a positive culture does not prove the cause. STI screen if at risk; HSV testing for ulcers or blisters; syphilis serology for an ulcer. Consider HIV testing in severe, persistent or atypical disease [1]."
    },
    {
     "h": "Treatment",
     "t": "Everyone: wash gently with water, use an emollient as a soap substitute, stop soaps and perfumed products, dry well. Suspected Candida: clotrimazole 1% cream twice daily for 7 to 14 days, adding hydrocortisone 1% for a short course if very inflamed; oral fluconazole 150 mg single dose only for severe symptoms, after checking interactions (BNF) [5]. Bacterial: by clinical syndrome and local guidance. Reassess rather than keep repeating creams."
    },
    {
     "h": "Lichen sclerosus",
     "t": "Pale or porcelain-white patches, scarring, fissuring, progressive phimosis and meatal narrowing. It scars and carries an increased risk of penile squamous cell carcinoma. Treated with an ultra-potent topical steroid through dermatology or urology, and sometimes circumcision; it needs long-term follow-up [4]."
    },
    {
     "h": "Phimosis and referral",
     "t": "Do not forcibly retract a non-retractile foreskin. Refer to urology for pathological or progressive phimosis, recurrent balanoposthitis, meatal narrowing or suspected lichen sclerosus. Paraphimosis is a same-day emergency."
    },
    {
     "h": "NICE NG12 (updated April 2026)",
     "t": "NICE NG12 (updated April 2026) [2]: consider a suspected cancer pathway referral for a penile mass or ulcerated lesion once an STI has been excluded, a persistent lesion after STI treatment, or unexplained or persistent symptoms affecting the foreskin or glans. A lesion hidden by a tight foreskin needs specialist assessment."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Okafor, I’m Dr Ahmed. What can I do for you today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "This is awkward, doctor. The end of my penis keeps getting red, sore and itchy under the foreskin, with a bit of discharge. It’s happened a few times over the last few months. And now the foreskin’s getting tight and hard to pull back. Can you sort it?"
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. It’s a very common problem, and there’s nothing I haven’t seen before, so please don’t feel awkward. Let’s get to the bottom of why it keeps coming back.",
    "dom": "rto",
    "why": "Normalises and puts him at ease"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "History",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When it flares, what does it look like? Any white, cheesy material, a smell, blisters, ulcers or lumps?",
    "dom": "tasks",
    "why": "Features pointing to Candida, anaerobes, HSV or a lesion"
   },
   {
    "who": "pt",
    "text": "Red and a bit wet. Some white stuff sometimes. No lumps or ulcers I’ve noticed."
   },
   {
    "who": "dr",
    "text": "Have you noticed any pale or white patches of skin, or the skin feeling thinner or tight at the tip? Any change in your urine stream, spraying or a weak flow?",
    "dom": "tasks",
    "why": "Screens for lichen sclerosus and meatal stenosis"
   },
   {
    "who": "pt",
    "text": "It’s just tight. The stream seems okay."
   },
   {
    "who": "dr",
    "text": "What do you wash with? Some people use shower gels or wash very often, which can irritate.",
    "dom": "tasks",
    "why": "Irritant dermatitis and hygiene"
   },
   {
    "who": "pt",
    "text": "Just the usual shower gel."
   },
   {
    "who": "dr",
    "text": "Have you been more thirsty than usual, passing more urine, especially at night, or lost weight without trying? Any diabetes in the family, or recent antibiotics?",
    "dom": "tasks",
    "why": "Diabetes symptoms and risk; antibiotics"
   },
   {
    "who": "pt",
    "text": "Not that I’ve noticed. I don’t know about the family."
   },
   {
    "who": "dr",
    "text": "I ask everyone this: is there any chance of a sexually transmitted infection, for example a new partner? And any other rashes, joint pains or sore eyes?",
    "dom": "tasks",
    "why": "Non-judgemental STI risk; reactive arthritis and dermatoses"
   },
   {
    "who": "pt",
    "text": "Nothing that worries me, but test for whatever you think."
   },
   {
    "phase": "Examination",
    "clock": "4–6 min",
    "who": "dr",
    "text": "I’d like to examine you. Would you like a chaperone? I won’t force the foreskin back. I’ll only look as far as it goes comfortably, then put it back.",
    "dom": "tasks",
    "why": "Offers chaperone (GMC); no forcible retraction"
   },
   {
    "who": "dr",
    "text": "The head of the penis and the inside of the foreskin are red and moist, with a little discharge. The foreskin only goes back part of the way. I can’t see any ulcers or lumps on what I can see, and the glands in the groin are normal. I’ll check a urine sample for sugar now and take a swab from under the foreskin.",
    "dom": "tasks",
    "why": "Describes findings, notes what cannot be seen, groin nodes, urine glucose, swab"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "6–7 min",
    "who": "dr",
    "text": "What have you been thinking it might be? Is anything worrying you?",
    "dom": "rto",
    "why": "Elicits ideas and concerns"
   },
   {
    "who": "pt",
    "text": "I thought it was an infection. I’m worried it’s something serious, with the tightness."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "This is called balanitis, which just means inflammation of the head of the penis. It has several causes. Soaps and scrubbing are a common one, and a yeast infection like thrush is another. Because it keeps coming back, I want to check your sugar: diabetes makes thrush much more likely and sometimes this is the first sign.",
    "dom": "tasks",
    "why": "Explains balanitis, multiple causes, diabetes link"
   },
   {
    "who": "pt",
    "text": "Diabetes? I’d not thought of that."
   },
   {
    "who": "dr",
    "text": "It may well not be, but it’s important to check. I’ll do a blood test called HbA1c as well as the urine test.",
    "dom": "tasks",
    "why": "HbA1c (PH38)"
   },
   {
    "who": "dr",
    "text": "The tightening matters too. Repeated inflammation can scar the foreskin, and there’s a skin condition called lichen sclerosus that causes pale, tight skin. I can’t see everything today because the foreskin is tight, so I’d like a urology specialist to look at it properly. That’s not because I think it’s cancer, but anything I can’t fully see needs checking.",
    "dom": "tasks",
    "why": "Progressive phimosis and possible lichen sclerosus: urology referral; honest about hidden area"
   },
   {
    "who": "pt",
    "text": "Right. That’s good to know."
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "For now: stop the shower gel and wash just with water once a day, using a moisturising cream as a soap substitute, and dry gently. Don’t scrub. With the white material, a thrush cream such as clotrimazole twice a day for one to two weeks is sensible, with a mild steroid cream for a short time to settle the inflammation.",
    "dom": "tasks",
    "why": "Hygiene, emollient, clotrimazole ± hydrocortisone (BASHH, BNF)"
   },
   {
    "who": "dr",
    "text": "I’ll also offer tests for sexually transmitted infections, which we do routinely when there’s discharge. And the creams can weaken condoms, so bear that in mind.",
    "dom": "tasks",
    "why": "STI screen; condom advice"
   },
   {
    "who": "pt",
    "text": "Fine. Do I need tablets?"
   },
   {
    "who": "dr",
    "text": "Not usually. The cream is the right first step. If the swab or blood test shows something else, I’ll change the plan. Does that sound all right?",
    "dom": "rto",
    "why": "Checks agreement"
   },
   {
    "who": "pt",
    "text": "Yes."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Please don’t force the foreskin back. If it ever gets stuck behind the head and won’t come forward, or you can’t pass urine, or the swelling or pain gets rapidly worse, go to A&E the same day. Come back if it isn’t clearly better in one to two weeks, or you notice a sore that won’t heal, a lump, bleeding, or a white patch. Can you tell me what we’ve agreed?",
    "dom": "gs",
    "why": "Paraphimosis and retention emergency; persistent lesion safety-net; teach-back"
   },
   {
    "who": "pt",
    "text": "Water and a moisturiser instead of gel, thrush cream and the steroid cream, blood test and swabs, and you’re referring me for the tightness. Back if it’s not better in a couple of weeks, or A&E if it gets stuck."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll ring you with the blood result and see you in two weeks.",
    "dom": "gs",
    "why": "Results and follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; normalised an embarrassing problem early.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Washing habits, embarrassment, sexual health asked non-judgementally.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up recurrence as a diabetes cue and the tightening foreskin as a sign needing referral.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (infection), concern (something serious with the tightness), expectation (a cure).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Offered a chaperone; examined without forcible retraction; groin nodes; urine glucose, swab, HbA1c, STI screen.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Candidal, irritant, bacterial, STI, lichen sclerosus, other dermatoses and premalignant change.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for lumps, ulcers, white patches, urinary stream change and paraphimosis risk; NICE NG12 (updated April 2026) awareness.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Explained balanitis as a description with several causes, and developing phimosis.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Water and emollient hygiene; clotrimazole with short hydrocortisone; reassess rather than repeat; urology referral for progressive phimosis.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Diabetes tested and linked to recurrence; STI tests; condom advice.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Paraphimosis and retention to A&E; review if not better in 1 to 2 weeks; non-healing sore, lump or white patch; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Long-term conditions & cancer",
    "Investigations & results"
   ],
   "stem": {
    "name": "Brian Okafor",
    "age": "54 years · male",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "Check repeat record"
    ],
    "allergy": "None recorded",
    "recent": "Recurrent sore, itchy glans with discharge; foreskin becoming tight.",
    "reason": "“This is awkward. Can you sort it?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Normalise the embarrassment straight away."
    },
    {
     "t": "1–4",
     "h": "History",
     "d": "Appearance, white patches, stream, soaps and washing, diabetes symptoms, antibiotics, STI risk, joints and eyes."
    },
    {
     "t": "4–7",
     "h": "Examine and ICE",
     "d": "Chaperone; no forced retraction; nodes; urine glucose and swab. His fear it is serious."
    },
    {
     "t": "7–11",
     "h": "Explain and plan",
     "d": "Balanitis has many causes; HbA1c; lichen sclerosus and phimosis to urology; water and emollient; clotrimazole ± hydrocortisone; STI tests."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "Paraphimosis or retention to A&E; review in 1 to 2 weeks; persistent lesion. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes another antifungal without examining; forces the foreskin back; no glucose check; misses the progressive phimosis; embarrassed or judgemental manner.",
    "pass": "Examines with a chaperone offered, checks glucose, gives hygiene advice and topical treatment, screens for STI and refers the tightening foreskin to urology, with a clear safety-net.",
    "exc": "All of the above, plus: treats balanitis as a description needing a cause; links recurrence to a diabetes check; asks about white patches and urinary stream for lichen sclerosus; is honest that a hidden area needs specialist assessment without alarming him; explains that repeating creams is not the plan; gives paraphimosis advice; teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s just thrush, here’s another cream.”",
     "instead": "“There are several possible causes. Let’s test and treat the most likely one, and look again if it doesn’t settle.”",
     "why": "BASHH: Candida is a minority cause; repeated empirical treatment misses lichen sclerosus and malignancy."
    },
    {
     "dont": "“Pull it back so I can see.”",
     "instead": "“I’ll only look as far as it goes comfortably.”",
     "why": "Forced retraction causes tears, scarring and paraphimosis."
    },
    {
     "dont": "“Could be cancer, I’ll refer you urgently.”",
     "instead": "“I can’t see everything under the tight foreskin, so a specialist should look.”",
     "why": "Accurate, calm explanation; NICE NG12 (updated April 2026) criteria are applied only if met."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Embarrassment",
     "t": "Men often delay presenting with genital symptoms. A matter-of-fact, respectful approach makes it easier to return if things change."
    },
    {
     "h": "Relationships",
     "t": "Discomfort and tightness can affect sex and relationships. Ask sensitively if he wishes to talk about it."
    }
   ],
   "legal": [
    {
     "h": "Chaperones",
     "t": "Offer a chaperone for an intimate examination and record the offer and his decision (GMC Intimate examinations and chaperones, 2024)."
    },
    {
     "h": "Confidentiality and STI testing",
     "t": "Sexual health information is confidential. Partner notification, if needed, is handled by sexual health services with his agreement."
    }
   ],
   "professional": [
    {
     "h": "Avoiding repeat empirical treatment",
     "t": "Reassess, test and refer rather than issue repeated creams for a recurrent problem."
    },
    {
     "h": "Results",
     "t": "Make sure HbA1c, urine and swab results are actioned and communicated, with a clear plan if diabetes is found."
    }
   ],
   "community": [
    {
     "h": "Sexual health services",
     "t": "Self-referral to local sexual health clinics for STI testing, with partner notification support."
    },
    {
     "h": "Diabetes support",
     "t": "If diabetes is diagnosed, structured education and the diabetes team."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Foreskin stuck behind the glans, retention, rapidly spreading swelling or pain: same-day emergency",
     "Penile mass, ulcer, bleeding or non-healing lesion: NICE NG12 (updated April 2026) suspected cancer pathway criteria",
     "Pale scarred skin, progressive phimosis, meatal narrowing: lichen sclerosus",
     "Thirst, nocturia, weight loss: diabetes"
    ],
    "psychosocial": [
     "Embarrassment",
     "Washing habits",
     "Sexual health and relationships"
    ],
    "ice": [
     "Idea: a recurring infection",
     "Concern: something serious, given the tightness",
     "Expectation: treatment that clears it"
    ]
   },
   "diagnosis": "“This is balanitis, inflammation of the head of the penis, and the foreskin is becoming tight, which we call phimosis.”",
   "diagnosisLay": "“Balanitis just means the skin there is inflamed, like a rash. Soaps, yeast and some skin conditions can all cause it, so we look for the reason. Repeated inflammation can make the foreskin scar and tighten, a bit like a cuff shrinking.”",
   "management": {
    "reflectIce": "“You thought it was an infection and you were worried about the tightness. We’ll treat the likely cause, check for diabetes, and get the tightness looked at properly.”",
    "psychosocial": "Normalise; offer a chaperone; confidential STI testing.",
    "sharedPlan": [
     "Water only, emollient soap substitute, stop shower gel, dry gently",
     "Clotrimazole 1% twice daily for 7 to 14 days ± short hydrocortisone 1% (BASHH, BNF)",
     "Urine glucose, HbA1c (PH38), sub-preputial swab, STI screen",
     "Urology referral for progressive phimosis and possible lichen sclerosus",
     "Reassess rather than repeat creams"
    ],
    "safetyNet": [
     "Foreskin stuck back, cannot pass urine, rapidly worsening swelling or pain: A&E same day",
     "Not clearly better in 1 to 2 weeks: review",
     "Non-healing sore, lump, bleeding or white patch: return promptly"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Balanitis protocol",
    "s": "Cause-directed treatment · BASHH 2025",
    "href": "management/balanitis.html"
   },
   {
    "ic": "🗺️",
    "t": "Penile irritation",
    "s": "Visual algorithm",
    "href": "algorithms/penile-irritation.html"
   },
   {
    "ic": "🗺️",
    "t": "Penile discharge",
    "s": "Visual algorithm · STI and NICE NG12 (updated April 2026)",
    "href": "algorithms/penile-discharge.html"
   },
   {
    "ic": "💠",
    "t": "Type 2 diabetes",
    "s": "Diagnosis and management",
    "href": "management/type-2-diabetes.html"
   }
  ],
  "pitfalls": {
   "intro": "The trap is treating recurrent balanitis as “thrush again”. Marks go to a sensitive examination, a diabetes check, a cause-based plan and recognising that a tightening foreskin needs a specialist.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Another antifungal without examining.",
     "why": "Candida is a minority cause; lichen sclerosus and malignancy are missed.",
     "fix": "Examine, swab, test and reassess."
    },
    {
     "dom": "tasks",
     "fail": "No glucose or HbA1c check.",
     "why": "Recurrent candidal balanitis can be the first sign of diabetes.",
     "fix": "Urine glucose and HbA1c (PH38 thresholds)."
    },
    {
     "dom": "tasks",
     "fail": "Forcibly retracting the foreskin.",
     "why": "It causes tears, scarring and paraphimosis.",
     "fix": "Look only as far as it retracts comfortably, then replace it."
    },
    {
     "dom": "tasks",
     "fail": "Not referring progressive phimosis.",
     "why": "Pathological phimosis and lichen sclerosus need urology, and a hidden glans cannot be assessed.",
     "fix": "Routine urology referral; NICE NG12 (updated April 2026) pathway only if criteria are met."
    },
    {
     "dom": "rto",
     "fail": "Awkward or judgemental manner, especially about sexual history.",
     "why": "He is already embarrassed and may not return.",
     "fix": "Normalise and ask routinely."
    },
    {
     "dom": "gs",
     "fail": "No paraphimosis advice.",
     "why": "A stuck foreskin is an emergency.",
     "fix": "A&E the same day if it will not come forward or he cannot pass urine."
    }
   ]
  }
 },
 "carbon-monoxide": {
  "stem": {
   "name": "Gemma Toller",
   "age": "41-year-old woman",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "No recent consultations. Household of four (partner and two children) plus a dog.",
   "reason": "Telephone call: two weeks of headaches, nausea, dizziness and tiredness affecting the whole family; asking whether there is a bug going round."
  },
  "knowledge": {
   "guideline": "[1] UKHSA Carbon monoxide: general information (GOV.UK) · [2] UKHSA Carbon monoxide: toxicological overview (GOV.UK) · [3] National Gas Emergency Service (0800 111 999) and Gas Safe Register · [4] National Poisons Information Service (TOXBASE) · [5] Smoke and Carbon Monoxide Alarm (England) Regulations 2015, amended 2022; Gas Safety (Installation and Use) Regulations 1998",
   "summary": "Headache, nausea, dizziness and tiredness in several people and a pet in the same home, worse at home and better away, is carbon monoxide until proven otherwise. The first job is to get everyone out and call the gas emergency line; the second is urgent medical assessment, where normal pulse oximetry must not reassure.",
   "points": [
    {
     "h": "Recognise the pattern",
     "t": "UKHSA [1]: common symptoms are headache, tiredness, difficulty thinking clearly and feeling sick; others include dizziness, drowsiness, chest pain and vomiting. The clues are clustering (several household members, pets affected), timing (worse at home, mornings or when heating is on) and relief away from the house. It is often mislabelled as a virus, migraine or food poisoning."
    },
    {
     "h": "Find the source",
     "t": "Ask about gas boilers, fires and cookers, solid-fuel or wood burners, blocked flues or chimneys, recent building work that reduced ventilation, and portable generators or barbecues indoors. Ask whether there is a CO alarm and when appliances were last serviced."
    },
    {
     "h": "Immediate action",
     "t": "UKHSA [1]: leave the building and get into fresh air, switch off fuel-burning appliances and open windows on the way out, and seek urgent medical advice. From outside, call the National Gas Emergency Service on 0800 111 999 [3]. Call 999 if anyone is drowsy, confused, has chest pain or collapses."
    },
    {
     "h": "Assessment",
     "t": "Symptomatic people need same-day assessment where carboxyhaemoglobin can be measured (usually the emergency department). High-flow oxygen speeds elimination [2]. Specialist and hyperbaric decisions follow NPIS/TOXBASE advice [4], particularly with loss of consciousness, neurological signs, cardiac features or pregnancy."
    },
    {
     "h": "The oximetry trap",
     "t": "Standard pulse oximeters cannot distinguish carboxyhaemoglobin from oxyhaemoglobin, so saturations can look normal in significant poisoning [2]. A normal home or ambulance SpO2 does not exclude CO."
    },
    {
     "h": "Levels fall after removal",
     "t": "Carboxyhaemoglobin falls once someone leaves the source and more quickly on oxygen, so a normal level taken late does not exclude exposure; smokers have higher baseline levels [2]. Interpret results in the light of the history."
    },
    {
     "h": "Prevention",
     "t": "Fit an audible CO alarm; have fuel-burning appliances and flues checked by a Gas Safe registered engineer [3]; keep vents clear; never use barbecues or generators indoors. In rented homes, landlords must arrange an annual gas safety check and fit CO alarms in rooms with fixed combustion appliances other than gas cookers [5]."
    },
    {
     "h": "Don’t go back yet",
     "t": "No one should return or use the appliance until the gas engineer has made it safe. Delayed neurological effects (memory, concentration, mood) can follow significant exposure; arrange review if these appear [2]."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Mrs Toller? I’m Dr Clarke from the surgery. Can you confirm your date of birth for me? … Thank you. How can I help?",
    "dom": "rto",
    "why": "Identity check on the telephone; open question"
   },
   {
    "who": "pt",
    "text": "This sounds odd, doctor. For two weeks me, my partner and the two kids have all had headaches, felt sick and dizzy and tired. Even the dog seems off and sleepy. We feel rough at home, especially mornings, but when we’re out for the day we’re fine. Is there a bug going round?"
   },
   {
    "who": "dr",
    "text": "That’s really helpful, and it’s not odd at all. Can I ask straight away: where are you now, and how are you feeling at this moment?",
    "dom": "tasks",
    "why": "Recognises the pattern immediately and checks current location"
   },
   {
    "who": "pt",
    "text": "I’m at home. Headache, a bit woozy."
   },
   {
    "phase": "Immediate safety",
    "clock": "1–3 min",
    "who": "dr",
    "text": "Mrs Toller, symptoms in everyone at home, even the dog, that are worse in the house and better when you’re out, make me worried about carbon monoxide. It’s a gas you can’t see or smell. Before we go further I want you to act now. Is anyone in the house very sleepy, confused or hard to wake?",
    "dom": "tasks",
    "why": "Names possible CO and screens for 999 features first"
   },
   {
    "who": "pt",
    "text": "No, no one’s like that. Are you serious?"
   },
   {
    "who": "dr",
    "text": "I am, and I’ll explain. Please get everyone who is in the house, and the dog, out into the fresh air now. If it’s on and you can reach it quickly, switch off the boiler or any gas fire, and open windows as you go. Don’t stay inside to do anything else. I’ll stay on the line.",
    "dom": "tasks",
    "why": "UKHSA immediate advice: out, switch off, ventilate"
   },
   {
    "who": "pt",
    "text": "Okay … I’m going out the front now. The dog’s with me."
   },
   {
    "who": "dr",
    "text": "Good. Once you’re outside, you need to ring the National Gas Emergency number, 0800 111 999. They’ll come and check the house. Have you got that written down or can I text it to you?",
    "dom": "tasks",
    "why": "Gas emergency service with number, confirmed"
   },
   {
    "who": "pt",
    "text": "Text it, please. I’m outside now."
   },
   {
    "phase": "Data gathering",
    "clock": "3–6 min",
    "who": "dr",
    "text": "Well done. Now a few questions. What heats the house and what do you cook on? Any gas fire, wood burner or chimney?",
    "dom": "tasks",
    "why": "Identifies likely combustion source"
   },
   {
    "who": "pt",
    "text": "It’s an old house. Gas boiler and a gas fire in the lounge. The heating’s been on a lot."
   },
   {
    "who": "dr",
    "text": "Do you have a carbon monoxide alarm, and do you know when the boiler was last serviced?",
    "dom": "tasks",
    "why": "Asks about alarm and servicing"
   },
   {
    "who": "pt",
    "text": "I don’t think we’ve got an alarm. I don’t know about the boiler, to be honest."
   },
   {
    "who": "dr",
    "text": "Has anyone had chest pain, fainting, confusion or being sick a lot? And is anyone in the household pregnant or have a heart or lung problem?",
    "dom": "tasks",
    "why": "Screens severity and higher-risk groups"
   },
   {
    "who": "pt",
    "text": "Just headaches and feeling sick. I don’t think so for the rest."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "6–7 min",
    "who": "dr",
    "text": "You thought it was a bug. What’s going through your mind now?",
    "dom": "rto",
    "why": "Explores ideas and emotional response"
   },
   {
    "who": "pt",
    "text": "I feel awful. I’ve had the kids in there. Have I made them ill?"
   },
   {
    "who": "dr",
    "text": "That’s a very natural worry, but you couldn’t have known. It’s called the silent killer because you can’t see or smell it. Ringing today is exactly what has made them safer.",
    "dom": "rto",
    "why": "Addresses guilt, the hidden concern"
   },
   {
    "who": "pt",
    "text": "Okay. What happens now?"
   },
   {
    "phase": "Assessment and plan",
    "clock": "7–10 min",
    "who": "dr",
    "text": "Everyone who has symptoms needs checking today at the hospital emergency department, where they can do a blood test that measures carbon monoxide and give oxygen, which clears it faster. I’ll ring ahead and let them know you’re all coming.",
    "dom": "tasks",
    "why": "Urgent assessment where carboxyhaemoglobin can be measured; direct handover"
   },
   {
    "who": "pt",
    "text": "Couldn’t I just check them with one of those finger oxygen monitors?"
   },
   {
    "who": "dr",
    "text": "Good question, but no. Those finger monitors can read normal even when carbon monoxide is high, because they can’t tell the difference. A normal reading won’t tell us you’re safe. And the blood level drops once you’re in fresh air, so please go today rather than waiting.",
    "dom": "tasks",
    "why": "Explains falsely normal oximetry and falling COHb"
   },
   {
    "who": "pt",
    "text": "Right. What about my partner and the kids, if they’re not with me?"
   },
   {
    "who": "dr",
    "text": "Please let them know not to go back into the house, and to come with you to be checked. If any of them feels very drowsy, confused, has chest pain or collapses, call 999.",
    "dom": "tasks",
    "why": "Extends advice to all household members with 999 triggers"
   },
   {
    "who": "pt",
    "text": "When can we go back home?"
   },
   {
    "who": "dr",
    "text": "Only when the gas engineer says it’s safe. Before using the boiler or fire again, a Gas Safe registered engineer needs to check them and the flue, and please fit a carbon monoxide alarm. If you rent, your landlord must arrange the gas safety check and alarm.",
    "dom": "tasks",
    "why": "Prevention: Gas Safe, alarms, landlord duty"
   },
   {
    "phase": "Safety-net and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "Let’s check the plan. Can you tell it back to me?",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Stay out. Ring 0800 111 999. Everyone to A&E today to be checked. Don’t trust the finger monitor. 999 if anyone’s drowsy or collapses. Don’t go back in until it’s safe."
   },
   {
    "who": "dr",
    "text": "Exactly right. Some people get problems with memory, concentration or mood in the weeks after exposure, so if you notice anything like that in any of you, book in with me. I’ll text the number now and ring the hospital. I’ll call you tomorrow to see how you all got on.",
    "dom": "gs",
    "why": "Delayed effects, follow-up call and practical actions"
   },
   {
    "who": "pt",
    "text": "Thank you. I’m so glad I rang."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; listened to the whole household pattern before asking; checked identity on the phone.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Home heating and housing; who is in the house; guilt about the children; ability to leave and get to hospital.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “even the dog”, “worse at home” and “fine when we’re out” as the diagnostic clue.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a bug going round), concern (guilt about having the children in the house), expectation (reassurance about a virus).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Recognised that a telephone call cannot assess this; same-day ED assessment for carboxyhaemoglobin; oximetry explained as unreliable.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Carbon monoxide poisoning versus viral illness, migraine, food poisoning.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened drowsiness, confusion, chest pain, collapse, pregnancy and cardiorespiratory disease; gave 999 criteria.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Suspected carbon monoxide poisoning from a domestic gas appliance.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Immediate evacuation, appliances off, windows open, 0800 111 999; ED assessment with oxygen; Gas Safe check and CO alarm before return.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Advice extended to all household members; landlord duties if rented; delayed neurological effects mentioned.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Teach-back; number texted; hospital phoned ahead; follow-up call next day.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "New & undifferentiated presentations",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Gemma Toller",
    "age": "41 years · female",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "Nil recorded"
    ],
    "allergy": "NKDA",
    "recent": "No recent consultations.",
    "reason": "Telephone call requested: “whole family has headaches and feels sick — is there a bug going round?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Opening",
     "d": "Identity check; let her describe the household pattern; ask where she is now."
    },
    {
     "t": "1–3",
     "h": "Act first",
     "d": "Name possible carbon monoxide; screen for 999 features; get everyone out, appliances off, windows open; 0800 111 999."
    },
    {
     "t": "3–6",
     "h": "Source and severity",
     "d": "Heating and cooking appliances, alarm, servicing; chest pain, collapse, pregnancy, heart or lung disease."
    },
    {
     "t": "6–7",
     "h": "ICE",
     "d": "Her virus idea and her guilt about the children."
    },
    {
     "t": "7–12",
     "h": "Assessment and close",
     "d": "ED today for carboxyhaemoglobin and oxygen; oximetry trap; no return until safe; Gas Safe and alarm; teach-back; follow-up call."
    }
   ],
   "wordPics": {
    "fail": "Diagnoses a viral illness and advises fluids and paracetamol; never asks about heating or why it is worse at home; no advice to leave the house; reassured by a normal finger oximeter reading.",
    "pass": "Recognises the carbon monoxide pattern, tells her to leave the house and call the gas emergency line, arranges urgent assessment, and advises on alarms and servicing.",
    "exc": "All of the above, plus: acts within the first two minutes while she is still inside; stays on the line until she is out; explains why oximetry and a late blood level can mislead; extends advice to every household member; addresses her guilt; gives the landlord duty if rented; teach-back and follow-up call."
   },
   "avoid": [
    {
     "dont": "“There’s a lot of this bug about, lots of fluids and rest.”",
     "instead": "“Because you’re all worse at home and better away, I’m worried about carbon monoxide.”",
     "why": "CO is a classic mimic of viral illness and can kill overnight."
    },
    {
     "dont": "“If your finger monitor reads 98% you’re fine.”",
     "instead": "“Those monitors can read normal even when carbon monoxide is high.”",
     "why": "Standard pulse oximetry cannot distinguish carboxyhaemoglobin."
    },
    {
     "dont": "“Get the boiler checked sometime this week.”",
     "instead": "“Get out now, and call 0800 111 999 from outside.”",
     "why": "Continuing exposure is the immediate danger; the gas emergency service attends the same day."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Housing and heating",
     "t": "Older homes, blocked vents and unserviced appliances are common sources. Families struggling with energy costs may block vents to keep warm, raising the risk."
    },
    {
     "h": "Priority Services Register",
     "t": "Energy suppliers and network operators keep a Priority Services Register; some eligible households can get extra support, including free gas safety checks. Signpost if cost is a barrier."
    }
   ],
   "legal": [
    {
     "h": "Landlord duties",
     "t": "Gas Safety (Installation and Use) Regulations 1998: landlords must arrange an annual gas safety check by a Gas Safe registered engineer. Smoke and Carbon Monoxide Alarm (England) Regulations 2015, amended 2022: CO alarms in rooms with a fixed combustion appliance (excluding gas cookers) in rented homes."
    },
    {
     "h": "Engineer reporting",
     "t": "Gas Safe engineers must report certain dangerous gas fittings and incidents under RIDDOR 2013; the GP does not need to report, but should record the suspected source."
    }
   ],
   "professional": [
    {
     "h": "Limits of a phone call",
     "t": "GMC Good medical practice (2024): recognise when remote consultation is not enough; here it is not, and the plan must include urgent in-person assessment."
    },
    {
     "h": "Other patients at risk",
     "t": "Other family members may be registered at the practice or elsewhere. With consent, note the exposure on their records so later symptoms are interpreted correctly."
    }
   ],
   "community": [
    {
     "h": "Gas emergency and fire service",
     "t": "National Gas Emergency Service (0800 111 999) attends suspected leaks and CO. Many fire and rescue services offer home safety visits that include CO advice."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Anyone drowsy, confused or hard to wake",
     "Chest pain, palpitations or breathlessness",
     "Collapse or loss of consciousness",
     "Pregnancy in any household member",
     "Pets unwell at the same time"
    ],
    "psychosocial": [
     "Housing type and heating, ability to afford servicing",
     "Guilt about exposing the children",
     "Whether she rents or owns (landlord duties)"
    ],
    "ice": [
     "Idea: a bug going round the family",
     "Concern: that she has made the children ill",
     "Expectation: reassurance that it is a virus"
    ]
   },
   "diagnosis": "“Headaches, sickness and dizziness in everyone at home, even the dog, worse in the house and better when you’re out, point to carbon monoxide from a faulty appliance.”",
   "diagnosisLay": "“Carbon monoxide is a gas made when fuel doesn’t burn properly. It sticks to the blood in place of oxygen, so the body is short of oxygen even though you’re breathing normally. You can’t see or smell it.”",
   "management": {
    "reflectIce": "“You thought it was a bug, and it looks like one, but the pattern at home is the clue. You couldn’t have known, and ringing has made everyone safer.”",
    "psychosocial": "Address guilt; check she can get everyone to hospital; landlord or cost barriers to servicing; Priority Services Register if relevant.",
    "sharedPlan": [
     "Everyone out now, appliances off, windows open on the way out",
     "National Gas Emergency Service 0800 111 999 from outside",
     "ED assessment today for all with symptoms: carboxyhaemoglobin and high-flow oxygen; practice rings ahead",
     "No return or appliance use until declared safe; Gas Safe engineer check; fit a CO alarm"
    ],
    "safetyNet": [
     "999 if anyone becomes drowsy, confused, has chest pain or collapses",
     "Do not rely on finger oximetry",
     "Review if memory, concentration or mood problems develop in the following weeks",
     "Follow-up call the next day"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Headache pathway",
    "s": "Visual algorithm · secondary causes",
    "href": "algorithms/headache.html"
   },
   {
    "ic": "📋",
    "t": "Headache",
    "s": "Case walkthrough",
    "href": "../cases/headache.html"
   },
   {
    "ic": "🗺️",
    "t": "Dizziness pathway",
    "s": "Visual algorithm",
    "href": "algorithms/dizziness.html"
   },
   {
    "ic": "🗺️",
    "t": "Nausea and vomiting pathway",
    "s": "Visual algorithm · adults",
    "href": "algorithms/nausea-vomiting-adults.html"
   },
   {
    "ic": "🗺️",
    "t": "Fatigue pathway",
    "s": "Visual algorithm",
    "href": "algorithms/fatigue.html"
   }
  ],
  "pitfalls": {
   "intro": "The trap is answering her question about a bug. The marks sit in spotting the household pattern, acting while she is still inside, and not being fooled by normal oximetry.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Labelling it a viral illness.",
     "why": "Several people and a pet, worse at home and better away, is the carbon monoxide pattern.",
     "fix": "Ask “Is it worse at home and better when you’re out?” and act on the answer."
    },
    {
     "dom": "tasks",
     "fail": "Taking a full history before telling her to leave.",
     "why": "Every minute inside adds exposure.",
     "fix": "Get her and the household out first, then ask the questions."
    },
    {
     "dom": "tasks",
     "fail": "No gas emergency number.",
     "why": "The source must be made safe; UKHSA and Gas Safe advice is to call the emergency line.",
     "fix": "Give 0800 111 999 and offer to text it."
    },
    {
     "dom": "tasks",
     "fail": "Accepting a normal finger oximeter reading.",
     "why": "Pulse oximetry cannot detect carboxyhaemoglobin.",
     "fix": "Same-day assessment where a blood level can be measured."
    },
    {
     "dom": "rto",
     "fail": "Ignoring her guilt about the children.",
     "why": "It is her hidden concern and affects how she hears the plan.",
     "fix": "“You couldn’t have known. Ringing today made them safer.”"
    },
    {
     "dom": "gs",
     "fail": "No plan for returning home or prevention.",
     "why": "Returning to an unserviced appliance repeats the exposure.",
     "fix": "No return until declared safe; Gas Safe check; CO alarm; landlord duty if rented."
    }
   ]
  }
 },
 "cluster-headache": {
  "stem": {
   "name": "Marek Solomon",
   "age": "38-year-old man",
   "pmh": [
    "Smoker",
    "No headache diagnosis recorded"
   ],
   "meds": [
    "Over-the-counter painkillers for the headaches — no benefit"
   ],
   "allergy": "None recorded",
   "recent": "Two weeks of nightly attacks of severe right-sided pain behind the eye, around 2am, lasting about an hour, with a red watering eye and a runny right nostril. No previous consultation about them.",
   "reason": "“These headaches are destroying me — painkillers do nothing.”"
  },
  "knowledge": {
   "guideline": "[1] NICE CG150 (headaches in over 12s: diagnosis and management, 2012, updated June 2025) · [2] BNF sumatriptan and verapamil monographs · [3] NICE NG225 (self-harm: assessment, management and preventing recurrence, 2022) · [4] International Classification of Headache Disorders, 3rd edition (International Headache Society, 2018) (international)",
   "summary": "Strictly one-sided, severe pain around the eye lasting about an hour, at the same time each night for two weeks, with a red watering eye, a runny nostril on the same side and pacing restlessness, is cluster headache. Name it, explain why tablets fail, and give the acute plan NICE CG150 sets out: high-flow oxygen and/or a subcutaneous or nasal triptan. Consider verapamil for prevention with specialist advice and ECG monitoring, screen red flags and mood, and deal with the smoking and home-oxygen safety issue.",
   "points": [
    {
     "h": "Recognise it",
     "t": "Attacks of severe unilateral orbital, supraorbital or temporal pain lasting roughly 15–180 minutes, from every other day up to several a day, with ipsilateral autonomic features (tearing, red eye, nasal blockage or discharge, lid swelling or drooping, small pupil) and/or restlessness or agitation [4]. Bouts often last weeks and recur at the same time of day. It is commoner in men and in smokers."
    },
    {
     "h": "Not migraine, not sinusitis",
     "t": "Migraine usually lasts hours to days, is often throbbing with nausea and light sensitivity, and the person lies still in a dark room. In cluster headache the person cannot keep still, the attacks are short and strictly one-sided, and the autonomic signs are on the painful side. Sinusitis does not wake someone at the same hour every night with a streaming eye."
    },
    {
     "h": "Acute treatment",
     "t": "NICE CG150 [1]: offer oxygen and/or a subcutaneous or nasal triptan. Oxygen is 100% at a flow rate of at least 12 litres per minute through a non-rebreathing mask with a reservoir bag, with home and ambulatory oxygen arranged. Make sure the triptan supply is enough for the attack frequency. Do not offer paracetamol, NSAIDs, opioids, ergots or oral triptans for acute attacks [1]. Check triptan cautions such as ischaemic heart disease and uncontrolled hypertension (BNF [2])."
    },
    {
     "h": "Prevention",
     "t": "NICE CG150 [1]: consider verapamil for prevention during a bout; if unfamiliar with its use for cluster headache, seek specialist advice first, including advice on ECG monitoring, because heart block can develop as the dose rises (BNF [2]). Seek specialist advice if verapamil does not work. Steroid courses and occipital nerve blocks are specialist options to break a bout."
    },
    {
     "h": "Imaging and referral",
     "t": "NICE CG150 [1]: discuss the need for neuroimaging for a first bout of cluster headache with a GP with a special interest in headache or a neurologist. Red flags needing urgent assessment include thunderclap onset, new neurological deficit, fever with neck stiffness, a changing pattern, features of raised pressure, and new headache in older age."
    },
    {
     "h": "Oxygen and smoking",
     "t": "Home oxygen is ordered through the home oxygen order process with a safety risk assessment. Smoking, vaping or naked flames near oxygen are a serious fire risk, so an honest conversation about smoking is a safety step as well as a health one."
    },
    {
     "h": "Mood and risk",
     "t": "The pain is among the most severe known and hopelessness during a bout is common. Ask directly about suicidal thoughts; NICE NG225 [3] advises against using risk scales to predict outcome — assess needs and agree a safety plan."
    },
    {
     "h": "Triggers",
     "t": "Alcohol commonly triggers attacks during a bout but not between bouts, so advise avoiding it while a bout is active. Support to stop smoking."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Solomon, I’m Dr Patel. Please, take a seat. What’s been happening?",
    "dom": "rto",
    "why": "Open question; lets him tell the story"
   },
   {
    "who": "pt",
    "text": "Doctor, these headaches are destroying me. It’s like a hot poker behind my right eye, most nights about 2am, for an hour or so. My eye goes red and streams, my nose runs on that side. I pace the room and bang my head on the wall. Painkillers do nothing. Two weeks of this."
   },
   {
    "who": "dr",
    "text": "That sounds unbearable, and you look exhausted. I think I already have an idea what this is, and there is treatment that works. Can I ask a few specific questions, then explain and agree a plan with you?",
    "dom": "gs",
    "why": "Acknowledges distress, offers hope and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Please. Anything."
   },
   {
    "phase": "Focused history",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Is it always the right side, never the left? And does it come on quickly and stop within a few hours?",
    "dom": "tasks",
    "why": "Confirms strict laterality and short duration"
   },
   {
    "who": "pt",
    "text": "Always the right. It builds in minutes, and it’s gone within about an hour, sometimes a bit longer."
   },
   {
    "who": "dr",
    "text": "During an attack, do you want to lie still in a dark room, or can you not keep still? Any sickness or problem with light?",
    "dom": "tasks",
    "why": "Uses restlessness versus stillness to separate it from migraine"
   },
   {
    "who": "pt",
    "text": "I can’t stay still. I walk up and down, rock, anything. I don’t feel sick."
   },
   {
    "who": "dr",
    "text": "Have you had runs of headaches like this before, maybe in a previous year?",
    "dom": "tasks",
    "why": "Asks about previous bouts"
   },
   {
    "who": "pt",
    "text": "Nothing like this that I can remember."
   },
   {
    "who": "dr",
    "text": "A few safety questions. Did any headache start suddenly like a thunderclap? Any weakness, numbness, double vision, loss of vision, fever or stiff neck? Any change in your vision between attacks?",
    "dom": "tasks",
    "why": "Screens red flags for secondary headache"
   },
   {
    "who": "pt",
    "text": "No. Between attacks I’m fine, just shattered."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "What have you been thinking this might be?",
    "dom": "rto",
    "why": "Elicits ideas"
   },
   {
    "who": "pt",
    "text": "Migraine, maybe, or my sinuses. And then at 3am I start thinking it’s a tumour."
   },
   {
    "who": "dr",
    "text": "That’s a very natural fear with pain this bad. Can I ask something I ask everyone with this kind of pain? When it’s at its worst, has it ever made you feel you can’t go on, or that life isn’t worth living?",
    "dom": "rto",
    "why": "Names the fear and asks directly about suicidal thoughts"
   },
   {
    "who": "pt",
    "text": "(pause) Some nights I’ve thought I can’t take much more. I wouldn’t do anything. I just want it to stop."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me honestly. That’s what this pain does to people, and it’s part of why I want to get proper treatment in place today. If those thoughts ever got stronger, I’d want you to ring us or NHS 111, or 999 if you felt unsafe. Is that okay?",
    "dom": "rto",
    "why": "Responds with empathy and agrees a safety plan"
   },
   {
    "who": "pt",
    "text": "Yes. Okay."
   },
   {
    "phase": "Explanation",
    "clock": "5–7 min",
    "who": "dr",
    "text": "I’d like to examine your eyes, face and nervous system. … Your pupils, eye movements and the back of your eyes look normal, and the nerve checks are normal. Together with your story, this fits cluster headache, not migraine and not a tumour or sinuses.",
    "dom": "tasks",
    "why": "Examines and names the diagnosis with the reasoning"
   },
   {
    "who": "pt",
    "text": "Cluster headache? I’ve never heard of it."
   },
   {
    "who": "dr",
    "text": "It’s a headache that comes in bouts — often weeks at a time — usually at the same time each day. The pain is one-sided around the eye, with the eye watering and the nose running on that side, and people can’t keep still. Tablets fail because each attack is too short and too fierce for a tablet to be absorbed in time. Strong painkillers like codeine don’t help and can cause their own problems.",
    "dom": "rto",
    "why": "Plain explanation, including why painkillers fail"
   },
   {
    "who": "pt",
    "text": "So that’s why nothing’s worked."
   },
   {
    "phase": "Shared management",
    "clock": "7–11 min",
    "who": "dr",
    "text": "For the attacks there are two treatments that work. One is an injection you give yourself under the skin, called sumatriptan, or a nasal spray version. Before that, a couple of questions — any heart problems, chest pain, or high blood pressure you know of?",
    "dom": "tasks",
    "why": "Offers subcutaneous or nasal triptan and checks cautions"
   },
   {
    "who": "pt",
    "text": "Not that I know of."
   },
   {
    "who": "dr",
    "text": "I’ll check your blood pressure before you go. The other treatment is oxygen through a special mask at a high flow, started as soon as an attack begins — many people find it switches the attack off in minutes. I can arrange oxygen at home and a portable cylinder.",
    "dom": "tasks",
    "why": "High-flow oxygen with home and ambulatory supply (NICE CG150)"
   },
   {
    "who": "pt",
    "text": "Oxygen? I smoke, is that a problem?"
   },
   {
    "who": "dr",
    "text": "It’s an important question. Oxygen makes things burn fiercely, so you must never smoke, vape or have a flame near it. The oxygen company will do a safety check at home. This could also be a good moment to think about stopping smoking — would you like support with that?",
    "dom": "tasks",
    "why": "Addresses the fire risk and offers smoking support"
   },
   {
    "who": "pt",
    "text": "I’ll think about it. Honestly, if it stops these, I’d try."
   },
   {
    "who": "dr",
    "text": "To stop the attacks coming, there’s a preventive tablet called verapamil. It can slow the heart’s electrical system, so it needs heart tracings as the dose goes up. I’ll get specialist advice on starting it and refer you to the headache team, who will also decide whether you need a scan, as this is your first bout.",
    "dom": "tasks",
    "why": "Prevention with specialist advice and ECG monitoring; neuroimaging discussion for a first bout"
   },
   {
    "who": "pt",
    "text": "Is there anything I should avoid?"
   },
   {
    "who": "dr",
    "text": "While you’re in a bout, alcohol often triggers an attack, so avoid it until the bout is over. How are you managing with work and sleep?",
    "dom": "gs",
    "why": "Trigger advice and checks practical impact"
   },
   {
    "who": "pt",
    "text": "Barely. I’m wrecked in the day."
   },
   {
    "who": "dr",
    "text": "If you need time off while we get this under control, I can give you a fit note. Does this plan feel right to you?",
    "dom": "rto",
    "why": "Offers practical support and checks agreement"
   },
   {
    "who": "pt",
    "text": "Yes. It’s the first time I’ve felt anyone knows what this is."
   },
   {
    "phase": "Safety net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "A sudden thunderclap headache, weakness, numbness, speech or vision problems, or fever with a stiff neck — that’s 999 or A&E, because that isn’t cluster headache. If your mood drops or you feel unsafe, contact us the same day or NHS 111. Can you tell me back what the plan is?",
    "dom": "gs",
    "why": "Specific red-flag and mood safety net, then teach-back"
   },
   {
    "who": "pt",
    "text": "Injection or spray at the start of an attack, oxygen at home with no smoking near it, verapamil once the specialist advises, no drink during the bout, 999 for a sudden or different headache."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. I’ll see you again in a week to see how the treatment is working and to check the heart tracing plan.",
    "dom": "gs",
    "why": "Defined follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him describe the pain, timing, eye and nose symptoms and the pacing before narrowing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Asked about sleep, work, smoking and alcohol, and how the bout was affecting daily life.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up ‘destroying me’, head-banging and 3am fears; asked directly about suicidal thoughts.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: migraine or sinuses. Concern: a tumour and the unbearable pain. Expectation: for the pain to stop.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Examined pupils, lids, fundi and neurology; checked BP before triptan; noted ECG monitoring for verapamil.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Cluster headache versus migraine, sinusitis, trigeminal neuralgia and secondary headache.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened thunderclap onset, focal neurology, visual change, fever and neck stiffness; screened suicidality.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Cluster headache (first bout) explained clearly, including why tablets fail.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Subcutaneous or nasal triptan and high-flow 100% oxygen at 12 L/min or more (NICE CG150); no opioids or oral analgesics; verapamil with specialist advice.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Smoking and oxygen fire risk with cessation support; alcohol during a bout; fit note; neuroimaging discussion for a first bout.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 for red-flag headache, same-day contact for worsening mood; review in a week; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Marek Solomon",
    "age": "38 years · male",
    "pmh": [
     "Smoker"
    ],
    "meds": [
     "OTC painkillers — no benefit"
    ],
    "allergy": "None recorded",
    "recent": "2 weeks of nightly severe right orbital pain ~2am, ~1 hour, red watering eye, runny nostril.",
    "reason": "“These headaches are destroying me.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and acknowledge",
     "d": "Let him describe the attacks; acknowledge the distress and promise effective treatment."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Side, duration, timing, autonomic features, restlessness versus lying still, previous bouts, red flags."
    },
    {
     "t": "4–5",
     "h": "ICE and mood",
     "d": "Migraine, sinus or tumour fears; ask directly about suicidal thoughts and agree a safety plan."
    },
    {
     "t": "5–7",
     "h": "Examine and explain",
     "d": "Eyes and neurology; name cluster headache and why painkillers fail."
    },
    {
     "t": "7–11",
     "h": "Plan",
     "d": "Sc or nasal triptan, high-flow oxygen, smoking and fire safety, verapamil with specialist advice, referral, alcohol, fit note."
    },
    {
     "t": "11–12",
     "h": "Safety net",
     "d": "999 for sudden or different headache; mood safety net; review in a week; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Calls it migraine or sinusitis; gives codeine or another oral painkiller; prescribes oral sumatriptan tablets; never asks about mood; misses red flags; orders oxygen without mentioning the smoking fire risk.",
    "pass": "Recognises cluster headache; offers a subcutaneous or nasal triptan and high-flow oxygen; avoids opioids; refers; screens red flags; safety-nets.",
    "exc": "All of that, plus: explains clearly why tablets fail; asks directly and kindly about suicidal thoughts and agrees a safety plan; addresses smoking and oxygen safety without judgement; plans verapamil with specialist advice and ECG monitoring; gives a fit note; teach-back; he leaves with hope."
   },
   "avoid": [
    {
     "dont": "“It sounds like a migraine — try sumatriptan tablets.”",
     "instead": "“This is cluster headache. Tablets are too slow, so we use an injection or nasal spray, and oxygen.”",
     "why": "NICE CG150 advises against oral triptans for acute cluster attacks."
    },
    {
     "dont": "“I’ll give you something stronger, like co-codamol.”",
     "instead": "“Strong painkillers don’t help these attacks — let’s use treatments that do.”",
     "why": "Opioids are ineffective here and carry harm; NICE CG150 says do not offer them."
    },
    {
     "dont": "“Here’s your oxygen prescription.” (nothing more)",
     "instead": "“Oxygen and cigarettes must never mix — no smoking, vaping or flames near it.”",
     "why": "He smokes; home oxygen is a fire risk and needs a safety conversation."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work and sleep",
     "t": "Nightly attacks wreck sleep and daytime function. Ask about work demands and offer a fit note while the bout is brought under control."
    },
    {
     "h": "Smoking",
     "t": "Smoking is linked with cluster headache and is a fire risk with home oxygen. Offer referral to local stop-smoking support; very brief advice is enough to start."
    }
   ],
   "legal": [
    {
     "h": "Home oxygen",
     "t": "Home and ambulatory oxygen is ordered through the local home oxygen order process, with a home safety risk assessment; the patient signs consent to the supplier’s safety conditions."
    },
    {
     "h": "Fit note",
     "t": "A fit note can be issued if he is unfit for work while the bout is controlled; it can advise adjusted hours if nights are disrupted."
    }
   ],
   "professional": [
    {
     "h": "Prescribing outside familiarity",
     "t": "NICE CG150 advises seeking specialist advice before starting verapamil if unfamiliar with its use in cluster headache — working within competence (GMC Good medical practice)."
    },
    {
     "h": "Suicide risk",
     "t": "Ask directly; do not rely on risk scales (NICE NG225). Record thoughts, protective factors and the agreed safety plan."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "OUCH (UK) cluster headache charity and the Migraine Trust for patient information and peer support; NHS stop-smoking services."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Thunderclap or first-and-worst headache — same-day emergency assessment",
     "Focal neurology, visual loss, fever with neck stiffness, a changing pattern or raised-pressure features",
     "Suicidal thoughts during a bout"
    ],
    "psychosocial": [
     "Exhaustion from nightly attacks; work",
     "Smoking and alcohol",
     "Fear of a tumour"
    ],
    "ice": [
     "Idea: migraine or sinuses",
     "Concern: a tumour; the unbearable pain",
     "Expectation: for someone to stop the pain"
    ]
   },
   "diagnosis": "First bout of episodic cluster headache (a trigeminal autonomic cephalalgia): strictly right-sided orbital pain for about an hour, nightly at 2am for two weeks, with ipsilateral tearing, red eye and rhinorrhoea, restlessness, and a normal examination.",
   "diagnosisLay": "“It’s called cluster headache. It comes in bouts, often at the same time each day, and it’s one of the most painful conditions there is. It isn’t a tumour and it isn’t migraine — and it has its own treatments that work.”",
   "management": {
    "reflectIce": "“You wondered about migraine, sinuses and even a tumour. What you describe is a well-recognised pattern, and your examination is normal.”",
    "psychosocial": "Ask about suicidal thoughts and agree a safety plan; fit note if needed; smoking support linked to oxygen safety.",
    "sharedPlan": [
     "Subcutaneous or nasal triptan with enough supply for attack frequency, after checking cautions (NICE CG150; BNF)",
     "100% oxygen at 12 L/min or more via non-rebreathing mask with reservoir bag; home and ambulatory supply (NICE CG150)",
     "No paracetamol, NSAIDs, opioids, ergots or oral triptans for attacks (NICE CG150)",
     "Verapamil for prevention with specialist advice and ECG monitoring; referral to the headache or neurology service, including whether imaging is needed for a first bout",
     "Avoid alcohol during the bout; no smoking near oxygen; stop-smoking support"
    ],
    "safetyNet": [
     "999 or A&E for thunderclap headache, new neurological symptoms, or fever with neck stiffness",
     "Same-day contact, NHS 111 or 999 if suicidal thoughts increase or he feels unsafe",
     "Review in one week"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Headache",
    "s": "Case walkthrough · NICE CG150",
    "href": "../cases/headache.html"
   },
   {
    "ic": "🗺️",
    "t": "Headache pathway",
    "s": "Visual algorithm · red flags",
    "href": "algorithms/headache.html"
   },
   {
    "ic": "🗺️",
    "t": "Facial pain",
    "s": "Visual algorithm · cluster versus trigeminal neuralgia",
    "href": "algorithms/facial-pain.html"
   },
   {
    "ic": "💠",
    "t": "Migraine",
    "s": "Protocol · the contrast with cluster headache",
    "href": "management/migraine.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by treating cluster headache as a bad migraine. The history gives the diagnosis away; the marks are in the specific acute plan, safety and the man in front of you.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Labelling it migraine or sinusitis.",
     "why": "Short, strictly one-sided attacks with autonomic signs and restlessness are cluster headache.",
     "fix": "Ask about restlessness versus lying still, side, duration and timing, then name it."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing codeine or oral sumatriptan.",
     "why": "NICE CG150 says do not offer opioids, paracetamol, NSAIDs, ergots or oral triptans for acute cluster attacks.",
     "fix": "Subcutaneous or nasal triptan and/or high-flow oxygen."
    },
    {
     "dom": "tasks",
     "fail": "Ordering oxygen without discussing his smoking.",
     "why": "Home oxygen near cigarettes is a fire risk.",
     "fix": "Explain the rule clearly and offer stop-smoking support."
    },
    {
     "dom": "tasks",
     "fail": "Starting verapamil with no plan for ECG monitoring.",
     "why": "Verapamil can cause heart block as the dose rises.",
     "fix": "Seek specialist advice and plan ECGs, as NICE CG150 advises."
    },
    {
     "dom": "rto",
     "fail": "Never asking about suicidal thoughts.",
     "why": "Hopelessness during a bout is common and the pain is extreme.",
     "fix": "Ask directly and kindly; agree a safety plan."
    },
    {
     "dom": "gs",
     "fail": "“Come back if it doesn’t settle.”",
     "why": "He needs to know which headaches are different and dangerous.",
     "fix": "Name the red flags, say 999, and book a review in a week."
    }
   ]
  }
 },
 "de-quervains": {
  "stem": {
   "name": "Priya Sandhu",
   "age": "32-year-old woman",
   "pmh": [
    "Delivered 10 weeks ago"
   ],
   "meds": [
    "Not specified in the case: check the repeat record"
   ],
   "allergy": "None recorded",
   "recent": "Postnatal. Right thumb-side wrist pain and swelling since the birth, worse lifting and feeding the baby, with catching.",
   "reason": "“It’s making looking after her hard. What’s going on?”"
  },
  "knowledge": {
   "guideline": "[1] British Society for Surgery of the Hand (BSSH): de Quervain’s syndrome, patient information · [2] BNF: paracetamol, ibuprofen (breastfeeding sections), topical NSAIDs · [3] NICE NG194 Postnatal care (2021) · [4] NICE NG100 Rheumatoid arthritis in adults (2018, updated 2020)",
   "summary": "Radial-sided wrist pain and swelling over the radial styloid, worse with thumb use and lifting, in a new mother is de Quervain’s tenosynovitis until proven otherwise. It is a clinical diagnosis. Start with a thumb-and-wrist splint, changes to how she lifts the baby and simple analgesia suited to the postnatal period. Offer a steroid injection if it does not settle, and refer for surgical release only if it persists.",
   "points": [
    {
     "h": "What it is",
     "t": "Thickening and narrowing of the sheath around abductor pollicis longus and extensor pollicis brevis in the first dorsal compartment of the wrist, so the tendons catch as they glide. Common after childbirth, when repeated lifting with the thumb spread apart loads these tendons, and with repetitive thumb use."
    },
    {
     "h": "Examination",
     "t": "Tenderness and sometimes swelling over the radial styloid. Finkelstein’s test: the examiner holds the thumb and gently deviates the wrist towards the little finger, reproducing pain over the first compartment. Many clinicians use the Eichhoff variant (thumb held in the fist, then ulnar deviation), which is more often positive in normal wrists, so interpret it with the tenderness. Imaging is not needed for a typical case."
    },
    {
     "h": "Differentials",
     "t": "Base-of-thumb osteoarthritis (older, pain at the base of the thumb, grind test), scaphoid fracture (history of a fall, anatomical snuffbox tenderness), intersection syndrome (pain and crepitus a few centimetres further up the forearm), superficial radial nerve irritation (tingling over the back of the thumb), and inflammatory arthritis (several joints, early morning stiffness, swelling elsewhere) [4]."
    },
    {
     "h": "First-line",
     "t": "BSSH [1]: a splint that holds both the thumb and the wrist lets the tendons rest; changing how she lifts reduces the load. Lifting the baby with both hands under the body and forearms, with the thumbs alongside the fingers rather than spread, helps."
    },
    {
     "h": "Analgesia after birth",
     "t": "Paracetamol and ibuprofen, dose per BNF. BNF [2]: for oral ibuprofen in breastfeeding, the amount in milk is too small to be harmful, although some manufacturers advise avoiding it. A topical NSAID is an option. Check contraindications before any NSAID."
    },
    {
     "h": "Escalation",
     "t": "BSSH [1]: a corticosteroid injection into the tendon sheath relieves symptoms for many people. Discuss possible skin thinning or lightening, infection and a temporary flare. Surgery to release the sheath is offered only for persistent, disabling symptoms."
    },
    {
     "h": "The new mother",
     "t": "NICE NG194 [3]: at each postnatal contact ask about emotional wellbeing and support. Pain that stops her caring for the baby affects mood, sleep and confidence, so ask how she is managing."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Sandhu, I’m Dr Patel. What can I help you with today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "Since having the baby, the thumb side of my right wrist has become really painful, especially when I scoop her up or feed her. It’s a bit swollen there and sometimes it catches. It’s making looking after her hard. What’s going on?"
   },
   {
    "who": "dr",
    "text": "That sounds hard, with a new baby to look after. Let’s work out what it is and what will help. Can you show me exactly where it hurts?",
    "dom": "rto",
    "why": "Acknowledges impact; invites her to point"
   },
   {
    "who": "pt",
    "text": "Here, just below the thumb on this side."
   },
   {
    "phase": "History",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When did it start, and what makes it worse or better?",
    "dom": "tasks",
    "why": "Onset and aggravating factors"
   },
   {
    "who": "pt",
    "text": "A few weeks after she was born. Lifting her, holding her while I feed her, gripping things. Resting it helps a bit."
   },
   {
    "who": "dr",
    "text": "Have you had any fall or injury to the wrist, even a small one?",
    "dom": "tasks",
    "why": "Screens for scaphoid injury"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Any pins and needles or numbness in the hand? Any pain or swelling in other joints, or stiffness in the mornings that lasts a long time?",
    "dom": "tasks",
    "why": "Nerve symptoms and inflammatory arthritis"
   },
   {
    "who": "pt",
    "text": "No tingling. Just this wrist."
   },
   {
    "who": "dr",
    "text": "How are you managing more generally? Sleep, mood, and help at home?",
    "dom": "tasks",
    "why": "Postnatal wellbeing and support (NG194)"
   },
   {
    "who": "pt",
    "text": "I’m tired, like everyone. I’m coping, but this wrist makes everything harder."
   },
   {
    "phase": "Examination",
    "clock": "4–6 min",
    "who": "dr",
    "text": "May I examine both wrists? I’ll compare them and do a couple of tests. Tell me if anything hurts.",
    "dom": "tasks",
    "why": "Compares both sides"
   },
   {
    "who": "dr",
    "text": "There’s tenderness and some swelling right over this bony point on the thumb side. The snuffbox and the base of the thumb aren’t tender. When I hold your thumb and tip the wrist gently towards your little finger, that brings on your pain. Sensation is normal.",
    "dom": "tasks",
    "why": "First-compartment tenderness, Finkelstein positive, scaphoid and CMC clear, neurology normal"
   },
   {
    "who": "pt",
    "text": "Ouch, yes, that’s exactly it."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "6–7 min",
    "who": "dr",
    "text": "Had you any thoughts about what it might be, or any worries about it?",
    "dom": "rto",
    "why": "Elicits ideas and concerns"
   },
   {
    "who": "pt",
    "text": "I wondered if I’d damaged something. I’m scared I’ll drop her. And I don’t want tablets that affect her."
   },
   {
    "who": "dr",
    "text": "Those are really sensible worries. Let me explain.",
    "dom": "rto",
    "why": "Validates"
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "This is de Quervain’s tenosynovitis. Two tendons that move your thumb run through a tunnel on this side of the wrist. With all the lifting you do with your thumb spread out, the lining of that tunnel has thickened, so the tendons rub and catch. It’s very common in new parents. You haven’t damaged anything, and we don’t need an X-ray.",
    "dom": "tasks",
    "why": "Names diagnosis, explains mechanism, no imaging needed"
   },
   {
    "who": "pt",
    "text": "So it will get better?"
   },
   {
    "who": "dr",
    "text": "For most people it settles with rest for the tendons and some changes to how they lift. If not, there are good next steps.",
    "dom": "tasks",
    "why": "Realistic reassurance"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "First, a splint that holds your thumb and wrist still, especially for lifting and at night. Second, how you lift her: slide both hands under her with your thumbs tucked in beside your fingers, and take her weight on your forearms. Could anyone help with the heavy lifting for a few weeks?",
    "dom": "tasks",
    "why": "Thumb and wrist splint; baby-handling advice (BSSH)"
   },
   {
    "who": "pt",
    "text": "I can ask for some help. I can try the new way."
   },
   {
    "who": "dr",
    "text": "For pain, paracetamol and ibuprofen are both options, and an anti-inflammatory gel on the wrist. Whether you’re breastfeeding or bottle-feeding, these are generally suitable, as only tiny amounts of ibuprofen reach breast milk. Do you have any stomach problems, asthma or kidney problems that would rule out ibuprofen?",
    "dom": "tasks",
    "why": "Postnatal-appropriate analgesia; checks NSAID contraindications (BNF)"
   },
   {
    "who": "pt",
    "text": "No, none of those."
   },
   {
    "who": "dr",
    "text": "If it hasn’t eased after a few weeks of this, a steroid injection into the tendon tunnel helps many people. It can occasionally thin or lighten the skin there. If it keeps coming back despite that, a small operation to open the tunnel is possible, but few need it.",
    "dom": "tasks",
    "why": "Escalation: injection, then surgical referral"
   },
   {
    "who": "pt",
    "text": "I’d rather try the splint first."
   },
   {
    "who": "dr",
    "text": "That’s a good plan.",
    "dom": "rto",
    "why": "Respects her choice"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Come back if it’s not improving in a few weeks, and we’ll talk about the injection. See us sooner if you fall on the wrist, if the hand goes numb or tingly, if the wrist becomes hot and red, or if other joints start to swell. And please tell us if you’re struggling with your mood or feel you’re not coping. Could you tell me the plan in your own words?",
    "dom": "gs",
    "why": "Review, red flags, postnatal mood, teach-back"
   },
   {
    "who": "pt",
    "text": "Splint for lifting and at night, lift her with my forearms and thumbs in, paracetamol or ibuprofen and the gel. Back in a few weeks if it’s no better."
   },
   {
    "who": "dr",
    "text": "Spot on. I’ll arrange a review then.",
    "dom": "gs",
    "why": "Follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; acknowledged the impact on caring for the baby; asked her to point to the pain.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Postnatal wellbeing, sleep, support at home and help with lifting.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the fear of dropping the baby and of medicines affecting the baby.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (damage to the wrist), concern (dropping her; drug effects), expectation (diagnosis and relief).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Examined both wrists: first-compartment tenderness, Finkelstein, snuffbox, thumb base, sensation; no imaging.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "De Quervain’s versus thumb-base osteoarthritis, scaphoid fracture, intersection syndrome, nerve irritation and inflammatory arthritis.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about trauma, neurological symptoms and other joints or morning stiffness.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named de Quervain’s tenosynovitis with a clear explanation of the mechanism.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Thumb and wrist splint; lifting technique; analgesia suited to the postnatal period; injection then surgery if refractory.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Checked NSAID contraindications; addressed postnatal mood and support.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review in a few weeks; red flags (fall, numbness, hot joint, other joints); mood; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Priya Sandhu",
    "age": "32 years · female",
    "pmh": [
     "Delivered 10 weeks ago"
    ],
    "meds": [
     "Check repeat record"
    ],
    "allergy": "None recorded",
    "recent": "Right radial wrist pain and swelling since the birth.",
    "reason": "“It’s making looking after her hard.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Acknowledge the struggle with baby care; ask her to point to the pain."
    },
    {
     "t": "1–4",
     "h": "History",
     "d": "Onset, aggravating tasks, trauma, tingling, other joints, postnatal mood and support."
    },
    {
     "t": "4–7",
     "h": "Examine and ICE",
     "d": "Both wrists, Finkelstein, snuffbox, thumb base, sensation. Fear of dropping her; worry about medicines."
    },
    {
     "t": "7–11",
     "h": "Explain and plan",
     "d": "Name it; no X-ray; splint; lifting technique; paracetamol, ibuprofen, topical NSAID; injection then surgery if needed."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "Review in a few weeks; fall, numbness, hot joint, other joints, mood. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Orders an X-ray or labels it “sprain”; gives no practical advice on lifting; ignores the postnatal context or gives analgesia without considering it; no escalation plan.",
    "pass": "Recognises de Quervain’s from the history and examination, excludes scaphoid injury, advises a splint, lifting changes and suitable analgesia, and knows injection and surgery as next steps.",
    "exc": "All of the above, plus: shows her a safer way to lift; answers her fear about medicines with the BNF breastfeeding position without assuming how she feeds; asks about mood and support per NG194; lets her choose between splinting and injection; safety-nets for inflammatory arthritis and nerve symptoms; teach-back."
   },
   "avoid": [
    {
     "dont": "“Let’s get an X-ray to be sure.”",
     "instead": "“The examination tells us what this is. We don’t need an X-ray.”",
     "why": "Typical de Quervain’s is a clinical diagnosis."
    },
    {
     "dont": "“Just rest it.”",
     "instead": "“A splint for lifting and nights, and here’s a way to pick her up that protects the tendons.”",
     "why": "She cannot stop caring for a baby; advice has to be practical."
    },
    {
     "dont": "“You can’t take anything while breastfeeding.”",
     "instead": "“Paracetamol and ibuprofen are generally suitable, even if you’re breastfeeding.”",
     "why": "BNF: ibuprofen reaches milk in amounts too small to be harmful; untreated pain affects care and mood."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Caring for a baby",
     "t": "Wrist pain limits lifting, feeding and bathing. Ask who can help, and adapt advice to her home."
    },
    {
     "h": "Postnatal wellbeing",
     "t": "Pain, tiredness and fear of dropping the baby can erode confidence and mood. Ask about emotional wellbeing (NICE NG194)."
    }
   ],
   "legal": [
    {
     "h": "Maternity leave and return to work",
     "t": "If symptoms persist on return to work, a fit note can advise adjusted duties, and repetitive thumb work may need workplace adjustments."
    }
   ],
   "professional": [
    {
     "h": "Safe prescribing after birth",
     "t": "Check the BNF breastfeeding section for each medicine and share the information so she can decide."
    },
    {
     "h": "Health visitor",
     "t": "With her agreement, the health visitor can reinforce handling advice and monitor wellbeing."
    }
   ],
   "community": [
    {
     "h": "Hand therapy",
     "t": "Many areas offer direct access to physiotherapy or hand therapy for splints and advice."
    },
    {
     "h": "Pharmacy",
     "t": "Community pharmacists can supply off-the-shelf thumb splints and advise on analgesia while breastfeeding."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Fall onto the hand with snuffbox tenderness: possible scaphoid fracture",
     "Hot, red, swollen joint or fever: septic arthritis or infection",
     "Several joints swollen, prolonged morning stiffness: inflammatory arthritis (NG100)",
     "Numbness or tingling: nerve involvement"
    ],
    "psychosocial": [
     "Caring for a 10-week-old",
     "Support at home",
     "Postnatal mood and sleep"
    ],
    "ice": [
     "Idea: she has damaged something in the wrist",
     "Concern: dropping the baby; medicines affecting the baby",
     "Expectation: a diagnosis and relief"
    ]
   },
   "diagnosis": "“This is de Quervain’s tenosynovitis: the tunnel that two thumb tendons run through has become thickened and inflamed, so they catch.”",
   "diagnosisLay": "“Picture a rope running through a pulley. With constant lifting, the pulley swells and the rope sticks and rubs. Resting the rope and changing how you pull lets the pulley settle.”",
   "management": {
    "reflectIce": "“You worried you’d damaged it and might drop her. Nothing is torn, and the splint and new way of lifting will make holding her safer and less painful.”",
    "psychosocial": "Practical help with lifting where available; ask about mood; involve the health visitor if she wishes.",
    "sharedPlan": [
     "Thumb and wrist splint, especially for lifting and at night (BSSH)",
     "Lift with both hands and forearms, thumbs alongside the fingers",
     "Paracetamol and ibuprofen per BNF; topical NSAID",
     "Steroid injection if not settling; surgical release only if persistent",
     "Review in a few weeks"
    ],
    "safetyNet": [
     "Fall onto the wrist: urgent review",
     "Numbness, tingling, a hot red wrist, or other swollen joints",
     "Low mood or not coping"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Hand pain",
    "s": "Visual algorithm",
    "href": "algorithms/hand-pain.html"
   },
   {
    "ic": "💠",
    "t": "Carpal tunnel syndrome",
    "s": "Another common postnatal hand problem",
    "href": "management/carpal-tunnel-syndrome.html"
   },
   {
    "ic": "💠",
    "t": "Postnatal disorders",
    "s": "Postnatal care and wellbeing",
    "href": "management/postnatal-disorders.html"
   },
   {
    "ic": "📋",
    "t": "Perinatal mental health",
    "s": "Case walkthrough",
    "href": "../cases/perinatal-mental-health.html"
   }
  ],
  "pitfalls": {
   "intro": "The diagnosis is easy to spot. Marks come from a proper wrist examination, practical advice she can use with a baby, and analgesia suited to the postnatal period.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Not excluding a scaphoid injury.",
     "why": "A missed fracture can go on to non-union.",
     "fix": "Ask about falls and examine the snuffbox."
    },
    {
     "dom": "tasks",
     "fail": "Requesting an X-ray or ultrasound routinely.",
     "why": "The diagnosis is clinical.",
     "fix": "Explain the findings instead."
    },
    {
     "dom": "tasks",
     "fail": "“Rest it” with no practical plan.",
     "why": "She cannot stop lifting her baby.",
     "fix": "Splint plus a safer lifting technique."
    },
    {
     "dom": "tasks",
     "fail": "Avoiding all analgesia because she is postnatal.",
     "why": "BNF: ibuprofen reaches milk in amounts too small to be harmful.",
     "fix": "Offer paracetamol and ibuprofen after checking contraindications."
    },
    {
     "dom": "rto",
     "fail": "Missing her fear of dropping the baby.",
     "why": "It is the real worry behind the visit.",
     "fix": "Name it and show how the plan makes lifting safer."
    },
    {
     "dom": "gs",
     "fail": "No mention of mood or support.",
     "why": "NG194 asks about emotional wellbeing at postnatal contacts.",
     "fix": "Ask briefly and tell her how to get help."
    }
   ]
  }
 },
 "erythema-nodosum": {
  "stem": {
   "name": "Robyn Easton",
   "age": "31-year-old woman",
   "pmh": [
    "No significant history recorded",
    "Sore throat about two weeks ago"
   ],
   "meds": [
    "Check the record for any contraceptive pill or recent antibiotic"
   ],
   "allergy": "None recorded",
   "recent": "Several days of tender, warm, red-purple lumps on both shins, now looking bruised, with low-grade fever, malaise and aching joints.",
   "reason": "“What on earth are these lumps?”"
  },
  "knowledge": {
   "guideline": "[1] BTS Clinical Statement on pulmonary sarcoidosis (British Thoracic Society, 2021) · [2] NICE NG33 (tuberculosis, 2016) · [3] NICE NG84 (sore throat (acute): antimicrobial prescribing, 2018) · [4] NICE NG129 (Crohn’s disease, 2019) and NICE NG130 (ulcerative colitis, 2019) · [5] NICE DG11 (faecal calprotectin testing, 2013) · [6] BNF naproxen and ibuprofen monographs",
   "summary": "Tender, warm, red-purple nodules on both shins that fade like bruises, with fever and aching joints two weeks after a sore throat, is erythema nodosum. The lumps settle on their own over weeks; the task is to look for the cause. Take a targeted history, check bloods including an ASO titre and a pregnancy test, and always request a chest X-ray for sarcoidosis and TB. Treat symptoms with rest, elevation and an NSAID once pregnancy is excluded.",
   "points": [
    {
     "h": "Recognise it",
     "t": "A septal panniculitis: tender, warm, raised red or violet nodules, usually on both shins, which do not ulcerate and fade through bruise colours over about 3–6 weeks without scarring. Fever, malaise and arthralgia often come first or alongside. It is a clinical diagnosis."
    },
    {
     "h": "It is a reaction — find the trigger",
     "t": "Common triggers in the UK: streptococcal throat infection, sarcoidosis, inflammatory bowel disease, drugs (notably oestrogen-containing contraceptives and sulfonamides), pregnancy, and TB and other infections. Many cases have no cause found."
    },
    {
     "h": "Sarcoidosis and Löfgren’s syndrome",
     "t": "Erythema nodosum with bilateral hilar lymphadenopathy, fever and ankle arthritis is Löfgren’s syndrome, an acute form of sarcoidosis that usually settles; the chest X-ray is what finds it [1]. Ask about cough, breathlessness and red or painful eyes."
    },
    {
     "h": "TB",
     "t": "Ask about cough, night sweats, weight loss, contact with TB, and birth in or travel to high-incidence countries. A chest X-ray and specialist referral are needed if TB is possible (NICE NG33 [2])."
    },
    {
     "h": "Tests",
     "t": "FBC, U&E, LFT, CRP or ESR, ASO titre (a throat swab is only useful if the throat is still sore; NICE NG84 [3] covers treatment), pregnancy test, and a chest X-ray. Add calcium and ACE if sarcoidosis is suspected, faecal calprotectin if bowel symptoms (NICE DG11 [5]), and TB testing if at risk."
    },
    {
     "h": "Treat symptoms",
     "t": "Rest, leg elevation and support; an NSAID such as naproxen or ibuprofen for pain once pregnancy is excluded, with caution in suspected IBD, peptic ulcer or renal disease (BNF [6]). Stop a likely culprit drug."
    },
    {
     "h": "When to refer",
     "t": "Dermatology if the diagnosis is uncertain, lesions ulcerate, or they recur or persist beyond about 6–8 weeks. Respiratory for hilar nodes or lung changes, gastroenterology for suspected IBD (NICE NG129, NG130 [4]), TB services if TB is possible."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Ms Easton, I’m Dr Clarke. What’s brought you in today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "I’ve come up with these really sore red lumps on the fronts of both shins over the last few days. They’re hot and tender, and now they look a bit bruised. I’ve felt fluey and my joints ache. I had a sore throat a couple of weeks ago. What on earth are they?"
   },
   {
    "who": "dr",
    "text": "That sounds painful and worrying. I’ll ask a few questions, have a look, and then explain what I think they are and what we need to do. Is that okay?",
    "dom": "gs",
    "why": "Sets a clear agenda"
   },
   {
    "who": "pt",
    "text": "Yes, fine."
   },
   {
    "phase": "Focused history",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Did you bang your legs, or get bitten? Have any of the lumps opened or wept?",
    "dom": "tasks",
    "why": "Excludes trauma and bites; checks for ulceration"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. They haven’t broken."
   },
   {
    "who": "dr",
    "text": "Tell me more about the sore throat. Has it gone now?",
    "dom": "tasks",
    "why": "Explores the likely streptococcal trigger"
   },
   {
    "who": "pt",
    "text": "Yes, it’s gone now."
   },
   {
    "who": "dr",
    "text": "Some other things can trigger lumps like these, so I’ll run through a few. Any cough or breathlessness, or red or painful eyes? Any tummy pain, diarrhoea or blood in your stools? Night sweats or weight loss?",
    "dom": "tasks",
    "why": "Screens sarcoidosis, IBD and TB"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. I’ve just felt achy and a bit feverish."
   },
   {
    "who": "dr",
    "text": "Have you been in contact with anyone with TB, or travelled anywhere recently?",
    "dom": "tasks",
    "why": "TB risk"
   },
   {
    "who": "pt",
    "text": "Not that I know of."
   },
   {
    "who": "dr",
    "text": "Are you on any medicines at the moment, including the pill? And is there any chance you could be pregnant?",
    "dom": "tasks",
    "why": "Drug and pregnancy triggers"
   },
   {
    "who": "pt",
    "text": "Why would that matter?"
   },
   {
    "who": "dr",
    "text": "Both hormones and pregnancy can set these off, and it also affects which painkillers are safe. I’ll go through your medication record with you, and I’d like to do a pregnancy test to be sure.",
    "dom": "tasks",
    "why": "Explains the reason and plans a pregnancy test"
   },
   {
    "who": "pt",
    "text": "That’s fine."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "What have you been thinking they might be?",
    "dom": "rto",
    "why": "Elicits ideas"
   },
   {
    "who": "pt",
    "text": "I thought maybe bites, but now they look bruised I got scared it’s something serious."
   },
   {
    "who": "dr",
    "text": "That’s an understandable worry when things look like bruises. What were you hoping we’d do today?",
    "dom": "rto",
    "why": "Acknowledges the fear; elicits expectations"
   },
   {
    "who": "pt",
    "text": "Find out what they are and get something for the pain."
   },
   {
    "phase": "Examination and explanation",
    "clock": "5–7 min",
    "who": "dr",
    "text": "Can I look at your legs? … These are tender, warm, raised lumps under the skin on both shins, and some are fading purple. I’ll also check your temperature, throat, glands, chest and joints.",
    "dom": "tasks",
    "why": "Examines the lesions and looks for systemic clues"
   },
   {
    "who": "pt",
    "text": "What are they?"
   },
   {
    "who": "dr",
    "text": "They’re called erythema nodosum. It’s inflammation in the fat layer under the skin. The good news is they aren’t dangerous, don’t scar, and fade like bruises over a few weeks. They aren’t a sign of anything dangerous in themselves.",
    "dom": "rto",
    "why": "Names it and addresses the specific fear"
   },
   {
    "who": "pt",
    "text": "Oh, thank goodness. So why have I got them?"
   },
   {
    "who": "dr",
    "text": "That’s the key question. These lumps are the body reacting to something else. Your sore throat is the most likely trigger, but they can also come from things like sarcoidosis, a bowel condition, TB, some medicines or pregnancy. So rather than just treating your legs, I want to find the trigger.",
    "dom": "tasks",
    "why": "Explains the reactive nature and the need to find a cause"
   },
   {
    "phase": "Investigations and management",
    "clock": "7–11 min",
    "who": "dr",
    "text": "I’d like blood tests, including one that shows a recent strep throat, inflammation markers, kidney and liver tests, and a pregnancy test. And a chest X-ray, which is important because it can show sarcoidosis or TB, even when you feel well in your chest.",
    "dom": "tasks",
    "why": "Bloods with ASO titre, pregnancy test and chest X-ray"
   },
   {
    "who": "pt",
    "text": "An X-ray, for lumps on my legs?"
   },
   {
    "who": "dr",
    "text": "It sounds odd, I know. One common cause is sarcoidosis, which often shows up as swollen glands in the chest together with lumps like these and aching joints. The X-ray is the simplest way to find it.",
    "dom": "rto",
    "why": "Explains why the chest X-ray matters"
   },
   {
    "who": "pt",
    "text": "Okay, that makes sense."
   },
   {
    "who": "dr",
    "text": "For the pain, rest with your legs raised and a supportive stocking can help. Once the pregnancy test is negative, an anti-inflammatory like ibuprofen or naproxen works well. Until then, paracetamol is the safe option. Is that okay for you?",
    "dom": "tasks",
    "why": "Supportive care; NSAID only after pregnancy excluded"
   },
   {
    "who": "pt",
    "text": "Yes. Should I be resting?"
   },
   {
    "who": "dr",
    "text": "Rest while they’re sore. If you can’t manage work, the first week is self-certified and I can do a fit note after that. I’ll ring you with the results, and if we find a cause we’ll treat it or refer you to the right team.",
    "dom": "gs",
    "why": "Practical support and a clear plan for results"
   },
   {
    "phase": "Safety net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Please get back to me sooner if you develop a cough or breathlessness, painful red eyes, diarrhoea or blood in your stools, night sweats or weight loss, if any lump breaks open, or if you feel much more unwell. If the lumps haven’t faded in six to eight weeks, or keep coming back, I’ll refer you to dermatology. Can you tell me what the plan is?",
    "dom": "gs",
    "why": "Specific safety net, referral threshold and teach-back"
   },
   {
    "who": "pt",
    "text": "Bloods, pregnancy test and a chest X-ray. Paracetamol until the test is negative, then ibuprofen, legs up. Come back if I get a cough, eye or bowel problems, or they don’t go."
   },
   {
    "who": "dr",
    "text": "Spot on. I’ll see you in about two weeks to go through the results.",
    "dom": "gs",
    "why": "Defined follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her describe the lumps, the flu-like illness and the sore throat before narrowing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Asked about work and the effect of the pain; explored drugs, pregnancy, travel and TB contacts.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the recent sore throat as the likely trigger and the fear that the bruising meant something serious.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: bites. Concern: something serious. Expectation: a diagnosis and pain relief.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Examined the lesions, temperature, throat, lymph nodes, chest and joints; bloods with ASO titre, pregnancy test and chest X-ray.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Erythema nodosum versus cellulitis, bites, vasculitis and bruising; triggers: strep, sarcoid, IBD, TB, drugs, pregnancy.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened respiratory, eye, bowel and TB symptoms; weight loss and night sweats; ulceration.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Erythema nodosum, likely post-streptococcal, with the cause still to be confirmed.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Rest, elevation, support; paracetamol, then an NSAID once pregnancy is excluded; stop any culprit drug; treat or refer the cause.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Pregnancy and possible IBD considered before NSAIDs; fit note if needed; referral routes by cause.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Return for cough, eye, bowel or systemic symptoms or ulceration; dermatology if persistent over 6–8 weeks or recurrent; results review in two weeks.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Investigations & results"
   ],
   "stem": {
    "name": "Robyn Easton",
    "age": "31 years · female",
    "pmh": [
     "Sore throat ~2 weeks ago"
    ],
    "meds": [
     "Check the record"
    ],
    "allergy": "None recorded",
    "recent": "Several days of tender red-purple nodules on both shins; low-grade fever, aching joints.",
    "reason": "“What on earth are these lumps?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "Hear the lumps, the flu-like illness and the sore throat."
    },
    {
     "t": "1–4",
     "h": "Look for the trigger",
     "d": "Trauma and bites, throat, cough and eyes, bowel, TB risk, drugs, pregnancy."
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "Bites or something serious; what she hopes for."
    },
    {
     "t": "5–7",
     "h": "Examine and name it",
     "d": "Shins, temperature, throat, nodes, chest, joints; erythema nodosum and why it happens."
    },
    {
     "t": "7–11",
     "h": "Tests and treatment",
     "d": "Bloods with ASO titre, pregnancy test, chest X-ray; rest, elevation, analgesia; fit note."
    },
    {
     "t": "11–12",
     "h": "Safety net",
     "d": "Symptoms that change the work-up; dermatology threshold; results review; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Calls it cellulitis and gives antibiotics; or names erythema nodosum and just gives ibuprofen with no search for a cause; no chest X-ray; no pregnancy test before NSAIDs.",
    "pass": "Recognises erythema nodosum; screens causes; requests bloods, ASO titre and a chest X-ray; supportive treatment; safety-nets.",
    "exc": "All of that, plus: explains clearly why a chest X-ray is needed for leg lumps; addresses her fear of something serious; checks pregnancy before NSAIDs; knows Löfgren’s syndrome; clear results plan and referral routes; teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s a skin infection — here’s a course of antibiotics.”",
     "instead": "“These are erythema nodosum, a reaction under the skin. I want to find what triggered it.”",
     "why": "Misdiagnosis as cellulitis treats the wrong problem and misses the cause."
    },
    {
     "dont": "“Take ibuprofen and they’ll go on their own.”",
     "instead": "“They will fade, but I need to find the trigger — including a chest X-ray.”",
     "why": "The skin settles by itself; the marks are for the underlying-cause screen."
    },
    {
     "dont": "“Start naproxen today.” (no pregnancy check)",
     "instead": "“Paracetamol for now, and an anti-inflammatory once the pregnancy test is negative.”",
     "why": "Pregnancy is a trigger and NSAIDs should be avoided in pregnancy (BNF)."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work",
     "t": "Standing and walking hurt. Ask about her job and offer a fit note if needed beyond seven days (self-certification covers the first seven)."
    },
    {
     "h": "Worry",
     "t": "Bruise-like lesions frighten people. Name the fear and explain early that the lumps themselves are harmless and fade, while the tests look for the trigger."
    }
   ],
   "legal": [
    {
     "h": "Fit note",
     "t": "Self-certification for up to seven days; a fit note after that if she is not fit for work, with adjustments such as seated duties."
    }
   ],
   "professional": [
    {
     "h": "Results",
     "t": "Make a clear plan for who checks and communicates the chest X-ray and blood results, and when (GMC Good medical practice)."
    },
    {
     "h": "TB and public health",
     "t": "If TB is suspected, refer to the TB service; TB is a notifiable disease and the diagnosing clinician notifies UKHSA."
    }
   ],
   "community": [
    {
     "h": "Information",
     "t": "SarcoidosisUK for patient information if sarcoidosis is found; Crohn’s & Colitis UK if IBD is found."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Cough, breathlessness, red painful eyes — sarcoidosis",
     "Night sweats, weight loss, TB contact or travel — TB",
     "Diarrhoea, blood in stool, abdominal pain — IBD",
     "Ulcerating or atypical lesions — reconsider the diagnosis"
    ],
    "psychosocial": [
     "Pain affecting daily activities and work",
     "Fear of something serious"
    ],
    "ice": [
     "Idea: bites",
     "Concern: something serious",
     "Expectation: a diagnosis and pain relief"
    ]
   },
   "diagnosis": "Erythema nodosum, most likely post-streptococcal given the sore throat two weeks ago, with low-grade fever and arthralgia. Sarcoidosis (including Löfgren’s syndrome), IBD, TB, drugs and pregnancy to be excluded.",
   "diagnosisLay": "“It’s called erythema nodosum — inflammation in the fat under the skin. It isn’t dangerous and fades like a bruise over a few weeks. It’s the body reacting to something, most likely your sore throat, so we’ll check for other triggers too.”",
   "management": {
    "reflectIce": "“You were frightened this was something serious because they look like bruises. The lumps themselves aren’t dangerous — and the tests are how we make sure nothing else is going on.”",
    "psychosocial": "Fit note if needed; reassurance about the natural course.",
    "sharedPlan": [
     "FBC, U&E, LFT, CRP or ESR, ASO titre, pregnancy test",
     "Chest X-ray for sarcoidosis and TB",
     "Rest, elevation, support; paracetamol, then an NSAID once pregnancy is excluded (BNF)",
     "Stop any culprit drug; treat or refer the cause found"
    ],
    "safetyNet": [
     "Return for cough, breathlessness, eye pain, bowel symptoms, night sweats, weight loss or ulceration",
     "Dermatology if persistent beyond 6–8 weeks or recurrent",
     "Results review in about two weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Leg pain",
    "s": "Visual algorithm · includes erythema nodosum",
    "href": "algorithms/leg-pain.html"
   },
   {
    "ic": "🗺️",
    "t": "Hypercalcaemia",
    "s": "Visual algorithm · sarcoidosis",
    "href": "algorithms/hypercalcaemia.html"
   },
   {
    "ic": "🗺️",
    "t": "Sore throat",
    "s": "Visual algorithm · NICE NG84",
    "href": "algorithms/sore-throat.html"
   },
   {
    "ic": "💠",
    "t": "Crohn’s disease",
    "s": "Protocol · extra-intestinal features",
    "href": "management/crohns-disease.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by treating the legs and forgetting the patient. The nodules are a signpost; the marks are for following it.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Diagnosing cellulitis and prescribing antibiotics.",
     "why": "Bilateral tender shin nodules with fever and arthralgia are erythema nodosum.",
     "fix": "Recognise the pattern and name it."
    },
    {
     "dom": "tasks",
     "fail": "No chest X-ray.",
     "why": "Sarcoidosis and TB are key causes and the X-ray is how they are found.",
     "fix": "Request a chest X-ray in every new case."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing an NSAID before checking for pregnancy.",
     "why": "Pregnancy is a trigger and NSAIDs should be avoided in pregnancy.",
     "fix": "Pregnancy test first; paracetamol meanwhile."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about bowel, eye or chest symptoms.",
     "why": "These point to IBD or sarcoidosis.",
     "fix": "A short targeted systems review."
    },
    {
     "dom": "rto",
     "fail": "Missing her fear of something serious.",
     "why": "It is the concern she brought.",
     "fix": "Ask what she thought and answer it directly."
    },
    {
     "dom": "gs",
     "fail": "No plan for results or persistence.",
     "why": "The cause may only show on tests; persistence needs referral.",
     "fix": "Set a results review and a dermatology threshold."
    }
   ]
  }
 },
 "essential-tremor": {
  "stem": {
   "name": "Hugh Brankin",
   "age": "64-year-old man",
   "pmh": [
    "No neurological diagnosis recorded",
    "Family history: father had a similar tremor"
   ],
   "meds": [
    "Check the repeat list for tremor-causing drugs (for example beta-agonist inhalers, lithium, SSRIs, valproate)"
   ],
   "allergy": "None recorded",
   "recent": "Several years of shaky hands, worse when reaching for a cup or writing, settled at rest and by a glass of wine. No slowness, stiffness or change in walking reported.",
   "reason": "“Is it the start of Parkinson’s?”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG71 (Parkinson’s disease in adults, 2017) · [2] BNF propranolol and primidone monographs · [3] Consensus statement on the classification of tremors (International Parkinson and Movement Disorder Society, 2018) (international) · [4] NICE NG145 (thyroid disease: assessment and management, 2019) · [5] NICE HTG474 (unilateral MRI-guided focused ultrasound thalamotomy for treatment-resistant essential tremor; formerly IPG617)",
   "summary": "A slowly progressive, bilateral, fairly symmetrical action and postural tremor of the hands, eased by alcohol, with a father affected and no bradykinesia, rigidity or gait change, is essential tremor. Examine to prove the absence of parkinsonism, screen thyroid function and drugs, answer the Parkinson’s fear directly, and offer treatment only if the tremor limits him.",
   "points": [
    {
     "h": "Essential tremor",
     "t": "A bilateral upper-limb action tremor present for at least 3 years, with or without tremor of the head, voice or legs, and without other neurological signs such as dystonia, ataxia or parkinsonism [3]. Often familial and often eased by a little alcohol."
    },
    {
     "h": "Parkinson’s disease",
     "t": "NICE NG71 [1]: diagnose clinically using the UK Parkinson’s Disease Society Brain Bank criteria, in which bradykinesia is required, with rest tremor, rigidity or postural instability. The tremor is typically at rest, asymmetric at onset and eases on movement. Refer suspected Parkinson’s quickly and untreated to a specialist with expertise in its diagnosis and management [1]."
    },
    {
     "h": "Examine for the discriminators",
     "t": "Watch the hands at rest in the lap, with arms outstretched, and in action (finger–nose, pouring, drawing a spiral, writing). Test repetitive finger taps for slowing and shrinking amplitude, tone at the wrist for cogwheeling, arm swing and gait. Look for cerebellar signs (intention tremor, past-pointing) and dystonic postures."
    },
    {
     "h": "Other causes",
     "t": "Enhanced physiological tremor (anxiety, caffeine, fatigue), hyperthyroidism (check TFTs, NICE NG145 [4]), drugs (beta-agonists, lithium, SSRIs, valproate, amiodarone, steroids), alcohol withdrawal, cerebellar and dystonic tremor."
    },
    {
     "h": "Treatment",
     "t": "Reassurance is enough if the tremor does not limit him. If it affects function or causes distress, propranolol is licensed for essential tremor and primidone is an alternative (BNF [2]); start low and titrate, dose per BNF. Check for asthma, heart block, bradycardia and heart failure before propranolol."
    },
    {
     "h": "Refer",
     "t": "Neurology if the diagnosis is uncertain, features are asymmetric or atypical, parkinsonian or cerebellar signs are present, or the tremor is disabling despite treatment. Specialist options include deep brain stimulation and focused ultrasound thalamotomy under special arrangements (NICE HTG474 [5])."
    },
    {
     "h": "Alcohol",
     "t": "Alcohol response is a useful diagnostic clue, not a treatment. Using drink to steady the hands risks dependence and rebound tremor."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Brankin, I’m Dr Osei. What brings you in today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "My hands have got shaky over the last few years. It’s worst when I reach for my tea or write — my writing’s gone spidery — but resting in my lap they’re fine. Funny thing, a glass of wine settles it. My dad had the same. I’m really worried it’s the start of Parkinson’s. Is it?"
   },
   {
    "who": "dr",
    "text": "That’s a very clear description, and I can hear the worry. I want to answer that question properly, so can I ask a few things and examine you, and then tell you what I think?",
    "dom": "gs",
    "why": "Acknowledges the fear and promises to answer it after assessment"
   },
   {
    "who": "pt",
    "text": "Yes, please."
   },
   {
    "phase": "Focused history",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Is it both hands, and roughly equal? Has it ever affected your head nodding, or your voice?",
    "dom": "tasks",
    "why": "Laterality, symmetry and other sites"
   },
   {
    "who": "pt",
    "text": "Both hands, about the same. Just my hands, I think."
   },
   {
    "who": "dr",
    "text": "Have you noticed yourself slowing down — buttons, turning over in bed, your walking getting shuffly, or people saying your arm doesn’t swing? Any stiffness?",
    "dom": "tasks",
    "why": "Screens for bradykinesia, rigidity and gait change"
   },
   {
    "who": "pt",
    "text": "No, none of that. My walking’s fine."
   },
   {
    "who": "dr",
    "text": "Any change in your sense of smell, acting out dreams in your sleep, constipation, or dizziness when you stand?",
    "dom": "tasks",
    "why": "Screens non-motor features of Parkinson’s"
   },
   {
    "who": "pt",
    "text": "Not that I’ve noticed."
   },
   {
    "who": "dr",
    "text": "Other things can make a tremor worse. How much tea and coffee do you have? Any weight loss, feeling hot, or racing heart? I’ll also go through your repeat list with you for any medicine that can cause shaking.",
    "dom": "tasks",
    "why": "Screens caffeine, thyroid features and drug causes"
   },
   {
    "who": "pt",
    "text": "I’ve not really counted the cups. No weight loss that I know of."
   },
   {
    "who": "dr",
    "text": "You said a glass of wine settles it. How much do you drink in a usual week? Some people find they start having a drink just to steady their hands.",
    "dom": "tasks",
    "why": "Explores alcohol use sensitively"
   },
   {
    "who": "pt",
    "text": "Not a lot, I don’t think. But I can see how that could happen."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "What makes you think Parkinson’s in particular?",
    "dom": "rto",
    "why": "Explores the idea behind the fear"
   },
   {
    "who": "pt",
    "text": "Everyone says shaking hands means Parkinson’s. And going out for a meal, I spill things. I’ve started avoiding it."
   },
   {
    "who": "dr",
    "text": "That sounds embarrassing and it’s affecting what you enjoy. What were you hoping I could do today?",
    "dom": "rto",
    "why": "Acknowledges social impact and elicits expectations"
   },
   {
    "who": "pt",
    "text": "Tell me whether it is Parkinson’s. And whether anything helps."
   },
   {
    "phase": "Examination",
    "clock": "5–7 min",
    "who": "dr",
    "text": "Rest your hands in your lap, and count backwards from 20 for me. … Now arms out in front. … Now touch my finger then your nose. Could you draw a spiral here, and pour this cup of water into that one?",
    "dom": "tasks",
    "why": "Examines tremor at rest, on posture and in action"
   },
   {
    "who": "pt",
    "text": "(The hands are still at rest, shake with arms outstretched and while drawing.)"
   },
   {
    "who": "dr",
    "text": "Now tap your finger and thumb together, big and fast, as long as you can. … Let me feel your wrists while you move the other hand. … And walk to the door and back for me.",
    "dom": "tasks",
    "why": "Tests for bradykinesia, rigidity and gait"
   },
   {
    "who": "pt",
    "text": "How was that?"
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "The good news first. Your tremor comes on with holding and using your hands and settles at rest. Your finger taps stay fast and big, there’s no stiffness, and your walking and arm swing are normal. That pattern is essential tremor, not Parkinson’s.",
    "dom": "rto",
    "why": "Answers the question directly with the reasons"
   },
   {
    "who": "pt",
    "text": "So I haven’t got Parkinson’s?"
   },
   {
    "who": "dr",
    "text": "From everything I’ve seen, no. Parkinson’s tremor is usually at rest, starts on one side, and comes with slowness and stiffness — you have none of those. Essential tremor often runs in families, like your dad, and alcohol easing it is typical. It can slowly get a bit more noticeable over the years, but it doesn’t turn into Parkinson’s.",
    "dom": "tasks",
    "why": "Explains the rest versus action distinction in plain words"
   },
   {
    "who": "pt",
    "text": "That’s a huge relief."
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "I’d like a blood test for your thyroid, as an overactive thyroid can cause a shake, and I’ll check your pulse and blood pressure now. Cutting down on tea may help a little. Wine does steady it, but I’d rather you didn’t use a drink before going out — it can creep up, and the shake can be worse the next day.",
    "dom": "tasks",
    "why": "TFTs, caffeine advice and caution about self-medicating with alcohol"
   },
   {
    "who": "pt",
    "text": "Fair enough. Is there a tablet?"
   },
   {
    "who": "dr",
    "text": "There is. Propranolol helps many people. Do you have asthma, or any heart problems? … If it doesn’t suit you, there’s an alternative called primidone. There’s no need to take anything if it isn’t bothering you enough — it’s your choice.",
    "dom": "tasks",
    "why": "Offers propranolol after checking contraindications; primidone alternative; shared decision"
   },
   {
    "who": "pt",
    "text": "I think I’d like to try it, for eating out."
   },
   {
    "who": "dr",
    "text": "Then we’ll start at a low dose and review. Some practical things help too — a heavier mug, a cup with a lid, holding it with both hands. If things change, or treatment doesn’t help enough, I’ll refer you to neurology.",
    "dom": "gs",
    "why": "Practical aids and referral threshold"
   },
   {
    "phase": "Safety net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Please come back sooner if you notice slowness, stiffness, the shake appearing at rest or on one side, a change in walking, or falls. Can you tell me what you’ll take home from today?",
    "dom": "gs",
    "why": "Specific safety net and teach-back"
   },
   {
    "who": "pt",
    "text": "It’s essential tremor, not Parkinson’s. Thyroid test, less tea, not using wine for it, try the tablet, and come back if I slow down or it changes."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll see you in about a month with the blood result to see how the propranolol is going.",
    "dom": "gs",
    "why": "Defined follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him describe the tremor, the alcohol effect, his father and his fear before narrowing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Asked about eating out, spilling, avoidance, caffeine and alcohol use.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the Parkinson’s fear, the social embarrassment and the alcohol clue, and explored drinking without judgement.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: shaking means Parkinson’s. Concern: Parkinson’s and embarrassment. Expectation: an answer and help.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Examined rest, posture and action tremor, finger taps, tone, gait and arm swing; TFTs; pulse and BP before propranolol.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Essential tremor versus Parkinson’s, enhanced physiological, thyroid, drug-induced, cerebellar and dystonic tremor.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened bradykinesia, rigidity, gait change and non-motor features; thyroid features; drug review.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Essential tremor explained with the reasons it is not Parkinson’s.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Reassurance plus propranolol after checking asthma and heart contraindications, primidone as alternative; practical aids; his choice.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Caffeine; alcohol not to be used as treatment; drug review; thyroid treated if abnormal.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Return for slowness, stiffness, rest or one-sided tremor, gait change or falls; review in a month; neurology if uncertain or refractory.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Hugh Brankin",
    "age": "64 years · male",
    "pmh": [
     "Father had a similar tremor"
    ],
    "meds": [
     "Repeat list to be reviewed"
    ],
    "allergy": "None recorded",
    "recent": "Several years of action tremor of both hands; eased by alcohol; no slowness reported.",
    "reason": "“Is it the start of Parkinson’s?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "Hear the description and the Parkinson’s question; promise to answer it."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Sites, symmetry, bradykinesia, gait, non-motor features, caffeine, thyroid, drugs, alcohol."
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "Why Parkinson’s; embarrassment when eating out; what he wants."
    },
    {
     "t": "5–7",
     "h": "Examine",
     "d": "Rest, posture and action; spiral and pouring; finger taps, tone, gait and arm swing."
    },
    {
     "t": "7–11",
     "h": "Explain and plan",
     "d": "Essential tremor, not Parkinson’s; TFTs; caffeine; alcohol caution; propranolol or primidone if wanted; practical aids."
    },
    {
     "t": "11–12",
     "h": "Safety net",
     "d": "Return for parkinsonian features; review in a month; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Says “it’s probably nothing” without examining; or starts Parkinson’s medication; misses the drug and thyroid screen; prescribes propranolol without asking about asthma; ignores the embarrassment.",
    "pass": "Distinguishes action from rest tremor; examines for bradykinesia and rigidity; checks TFTs and drugs; reassures that it is essential tremor; offers propranolol if troublesome.",
    "exc": "All of that, plus: answers the Parkinson’s question directly with the reasons; explores the social avoidance; gently addresses using alcohol to self-treat; checks contraindications; lets him choose; practical aids; clear return criteria; he leaves relieved and with a plan."
   },
   "avoid": [
    {
     "dont": "“Let’s not worry about Parkinson’s for now.”",
     "instead": "“You asked if it’s Parkinson’s — from what I’ve found, it isn’t, and here’s why.”",
     "why": "Leaving the stated fear unanswered loses Relating to Others marks."
    },
    {
     "dont": "“Well, if wine helps, a drink before a meal out is fine.”",
     "instead": "“Wine does steady it, but I’d rather we used something safer.”",
     "why": "Alcohol as self-treatment risks dependence and rebound tremor."
    },
    {
     "dont": "“I’ll start you on propranolol.” (no questions)",
     "instead": "“Before this tablet, do you have asthma or any heart problems?”",
     "why": "Propranolol is contraindicated in asthma and some heart conditions (BNF)."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Social avoidance",
     "t": "Spilling in public causes embarrassment and withdrawal. Practical aids — weighted cutlery, lidded cups, two-handed holding — and occupational therapy help."
    },
    {
     "h": "Alcohol",
     "t": "The alcohol response is a clue; use it to open a non-judgemental conversation about drinking."
    }
   ],
   "legal": [
    {
     "h": "Driving",
     "t": "Drivers must tell the DVLA about any condition that affects safe driving. Ask whether the tremor affects his control of a vehicle; if it does, advise him to check the DVLA guidance and record the advice."
    }
   ],
   "professional": [
    {
     "h": "Refer untreated",
     "t": "If Parkinson’s is suspected, NICE NG71 advises quick referral to a specialist before any treatment starts."
    },
    {
     "h": "Shared decision",
     "t": "Treatment is optional; offer it and respect his choice (GMC Decision making and consent, 2020)."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "National Tremor Foundation for patient information and support groups; occupational therapy for adaptive equipment."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Rest tremor, one-sided onset, slowness, stiffness, shuffling gait or falls — suspected Parkinson’s, refer untreated (NICE NG71)",
     "Cerebellar signs — intention tremor, ataxia, slurred speech",
     "Rapid onset or thyroid features"
    ],
    "psychosocial": [
     "Embarrassment when eating out; avoidance",
     "Alcohol used to steady the hands",
     "Father’s tremor"
    ],
    "ice": [
     "Idea: shaking hands mean Parkinson’s",
     "Concern: Parkinson’s; spilling in public",
     "Expectation: a clear answer and help"
    ]
   },
   "diagnosis": "Essential tremor: bilateral, symmetrical action and postural hand tremor for several years, alcohol-responsive, familial, with no bradykinesia, rigidity or gait change on examination. Thyroid and drug causes to be excluded.",
   "diagnosisLay": "“It’s called essential tremor. It shows when you use or hold your hands, runs in families and isn’t Parkinson’s. It doesn’t turn into Parkinson’s, and there are treatments if it bothers you.”",
   "management": {
    "reflectIce": "“You were worried this was Parkinson’s, like many people would be. Your examination doesn’t show Parkinson’s — here’s what I found.”",
    "psychosocial": "Address embarrassment and eating-out avoidance; discourage using alcohol as treatment.",
    "sharedPlan": [
     "TFTs and drug review",
     "Reduce caffeine",
     "Propranolol if he wishes, after checking for asthma, bradycardia, heart block and heart failure; primidone as alternative; dose per BNF",
     "Practical aids; occupational therapy if needed",
     "Neurology if uncertain, atypical or refractory"
    ],
    "safetyNet": [
     "Return sooner for slowness, stiffness, rest or one-sided tremor, gait change or falls",
     "Review in about a month with TFT result and treatment response"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Tremor",
    "s": "Case walkthrough · NICE NG71",
    "href": "../cases/tremor.html"
   },
   {
    "ic": "🗺️",
    "t": "Tremors",
    "s": "Visual algorithm · rest, postural or intention",
    "href": "algorithms/tremors.html"
   },
   {
    "ic": "💠",
    "t": "Essential tremor",
    "s": "Protocol · propranolol · primidone · referral",
    "href": "management/essential-tremor.html"
   },
   {
    "ic": "💠",
    "t": "Parkinson’s disease",
    "s": "Protocol · refer untreated",
    "href": "management/parkinsons.html"
   }
  ],
  "pitfalls": {
   "intro": "This station rewards a candidate who examines to prove what it is not. Reassurance without examination, or a referral that ignores his question, both miss the point.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Reassuring without examining for bradykinesia and rigidity.",
     "why": "The absence of parkinsonian signs is the basis of the diagnosis.",
     "fix": "Examine rest, posture and action tremor, finger taps, tone and gait."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting thyroid function and the drug list.",
     "why": "Hyperthyroidism and drugs are reversible causes.",
     "fix": "TFTs and a medication review."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing propranolol without asking about asthma or heart problems.",
     "why": "It is contraindicated in asthma and some heart conditions (BNF).",
     "fix": "Ask, check pulse and BP, then start low."
    },
    {
     "dom": "rto",
     "fail": "Leaving his Parkinson’s question unanswered.",
     "why": "It is his main concern.",
     "fix": "Answer it directly and explain the reasons."
    },
    {
     "dom": "rto",
     "fail": "Ignoring the embarrassment and the alcohol clue.",
     "why": "These are the cues to impact and to a possible risk.",
     "fix": "Explore avoidance and gently discourage alcohol as treatment."
    },
    {
     "dom": "gs",
     "fail": "No clear reason to come back.",
     "why": "Parkinson’s can emerge later; he needs to recognise it.",
     "fix": "Name slowness, stiffness, rest or one-sided tremor, gait change and falls."
    }
   ]
  }
 },
 "faecal-incontinence": {
  "stem": {
   "name": "Patricia Lowe",
   "age": "62-year-old woman",
   "pmh": [
    "Three vaginal deliveries, one forceps-assisted"
   ],
   "meds": [
    "Check the repeat list for laxatives or other drugs affecting stool consistency"
   ],
   "allergy": "None recorded",
   "recent": "Today’s appointment was booked for another problem. No bowel symptoms previously recorded.",
   "reason": "At the end of the consultation: “There’s something I’ve not told anyone…”"
  },
  "knowledge": {
   "guideline": "[1] NICE CG49 (faecal incontinence in adults: management, 2007) · [2] NICE NG210 (pelvic floor dysfunction: prevention and non-surgical management, 2021) · [3] NICE NG12 (updated April 2026) (suspected cancer: recognition and referral, updated April 2026) · [4] NICE HTG690 (quantitative faecal immunochemical testing to guide colorectal cancer pathway referral in primary care; formerly DG56) · [5] GIRFT National suspected cauda equina syndrome pathway (2023) · [6] BNF loperamide monograph · [7] GMC Intimate examinations and chaperones (2013, updated 2024)",
   "summary": "A 62-year-old woman with past obstetric trauma discloses months of urge and passive faecal incontinence, hidden out of shame. Receive the disclosure with warmth, make time, and assess properly: type, stool consistency, causes, red flags for colorectal cancer and cauda equina, and a chaperoned examination including DRE. Start first-line measures and refer to specialist continence services. Offer real hope — most people improve.",
   "points": [
    {
     "h": "Ask and receive",
     "t": "Faecal incontinence is common and under-reported. NICE CG49 [1] advises that healthcare professionals ask about it in groups at higher risk, including women after childbirth and people with bowel or neurological conditions. When someone discloses, respond calmly, thank them and give it time."
    },
    {
     "h": "Characterise",
     "t": "Urge incontinence (cannot defer, usually external sphincter weakness) versus passive leakage without awareness (internal sphincter dysfunction or overflow). Record stool consistency (Bristol chart), frequency, pad use and the effect on life. Loose stool is harder to hold; constipation with overflow is common and treatable."
    },
    {
     "h": "Causes",
     "t": "Obstetric anal sphincter injury (forceps is a risk factor, and symptoms can appear years later), loose stool from IBS, IBD, bile acid malabsorption or drugs, constipation with overflow, diabetes and neurological disease, rectal prolapse, previous anorectal surgery, and mobility or toilet-access problems."
    },
    {
     "h": "Red flags",
     "t": "Colorectal cancer: NICE NG12 (updated April 2026) [3] offers FIT to adults with a change in bowel habit, among other features; refer on the suspected cancer pathway if FIT is 10 µg Hb/g faeces or more (NICE HTG690 [4]), or if a rectal mass is felt. Cauda equina: new bowel or bladder dysfunction with saddle numbness, back pain or leg symptoms needs emergency same-day assessment [5]."
    },
    {
     "h": "Examine",
     "t": "Abdomen; perianal inspection for soiling, scarring, a gaping anus, prolapse or haemorrhoids; DRE for resting and squeeze tone, impaction and masses. Offer a chaperone and record the discussion (GMC [7])."
    },
    {
     "h": "Initial management",
     "t": "NICE CG49 [1]: treat the cause, adjust diet and fluids to achieve a formed stool, review drugs, set a bowel routine, and offer loperamide for loose stool with no contraindication (dose per BNF [6]). Treat constipation or impaction. Pelvic floor muscle training is supervised (NICE NG210 [2]). Offer skin care, pads and practical coping products."
    },
    {
     "h": "Specialist management",
     "t": "If initial measures do not help, refer to specialist continence services for pelvic floor training, biofeedback, bowel retraining and anal irrigation, with colorectal referral for anorectal physiology, endoanal ultrasound and surgical options such as sacral nerve stimulation or sphincter repair [1]."
    },
    {
     "h": "Impact",
     "t": "Shame, social withdrawal and low mood are common. Ask about mood, relationships and activities, and offer the practical supports that help people go out again."
    }
   ]
  },
  "model": [
   {
    "phase": "The disclosure",
    "clock": "0–1 min",
    "who": "pt",
    "text": "(At the end of the consultation, hesitant.) Before I go — there’s something I’ve not told anyone, I’m so embarrassed. For months now I’ve been having… accidents. Sometimes I get the urge and just can’t hold it, sometimes I don’t even feel it coming. I’ve stopped going out. I almost didn’t say anything."
   },
   {
    "who": "dr",
    "text": "I’m really glad you did. That took courage. You’re not the first person to tell me this — it’s much more common than people think, and there’s a lot we can do to help. It matters, so let’s give it proper time now. Is that all right?",
    "dom": "rto",
    "why": "Receives the disclosure warmly, normalises it and gives it time"
   },
   {
    "who": "pt",
    "text": "(relieved) Yes. I thought you’d think it was disgusting."
   },
   {
    "who": "dr",
    "text": "Not at all. It’s a medical problem like any other. Can I ask some questions to understand it, so we can work out the cause?",
    "dom": "gs",
    "why": "Sets a clear agenda"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Characterising the problem",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When it happens, is it mostly that you feel the urge and can’t get there in time, or leakage you don’t notice? Or both?",
    "dom": "tasks",
    "why": "Distinguishes urge from passive incontinence"
   },
   {
    "who": "pt",
    "text": "Both, really. More the rushing, but sometimes I just find I’ve soiled."
   },
   {
    "who": "dr",
    "text": "What are your motions usually like — loose, formed, or hard? This chart might help.",
    "dom": "tasks",
    "why": "Stool consistency using the Bristol chart"
   },
   {
    "who": "pt",
    "text": "It varies. When it’s looser, that’s when it’s worst."
   },
   {
    "who": "dr",
    "text": "Have you been constipated or strained a lot? And how often does it happen — do you need to wear pads?",
    "dom": "tasks",
    "why": "Overflow, frequency and pad use"
   },
   {
    "who": "pt",
    "text": "Not really constipated. Often enough that I wear pads now."
   },
   {
    "who": "dr",
    "text": "You mentioned having three babies. Were any of the births difficult?",
    "dom": "tasks",
    "why": "Explores obstetric sphincter injury"
   },
   {
    "who": "pt",
    "text": "One was forceps. I never connected it."
   },
   {
    "who": "dr",
    "text": "That’s important — a forceps birth can weaken the muscles around the back passage, and sometimes the effects only show years later.",
    "dom": "tasks",
    "why": "Links the forceps delivery to a likely cause"
   },
   {
    "phase": "Red flags",
    "clock": "4–5 min",
    "who": "dr",
    "text": "A few questions I ask everyone. Has your bowel habit changed from what’s normal for you? Any blood, any weight loss, or tummy pain?",
    "dom": "tasks",
    "why": "Screens colorectal red flags"
   },
   {
    "who": "pt",
    "text": "I haven’t noticed blood — I’ll be honest, I’ve tried not to look. It has changed, I suppose, since this started."
   },
   {
    "who": "dr",
    "text": "Any numbness around your bottom or between your legs, trouble passing urine, back pain, or weakness or numbness in your legs?",
    "dom": "tasks",
    "why": "Screens cauda equina features"
   },
   {
    "who": "pt",
    "text": "No, none of that."
   },
   {
    "who": "dr",
    "text": "And are you taking anything that could loosen your motions — laxatives, or any regular medicines?",
    "dom": "tasks",
    "why": "Drug review"
   },
   {
    "who": "pt",
    "text": "I’m not sure. Could you check my list?"
   },
   {
    "who": "dr",
    "text": "Of course, I’ll go through it with you before you leave.",
    "dom": "gs",
    "why": "Agrees a concrete action"
   },
   {
    "phase": "Impact and ICE",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said you’ve stopped going out. How has this affected you, and your mood?",
    "dom": "rto",
    "why": "Explores psychosocial impact"
   },
   {
    "who": "pt",
    "text": "I don’t go anywhere I don’t know where the toilet is. I feel low about it. I thought it was just age, and after the children, that it couldn’t be fixed."
   },
   {
    "who": "dr",
    "text": "That sounds really hard, and lonely. It isn’t something you just have to put up with — most people improve with treatment. What were you hoping for, by telling me?",
    "dom": "rto",
    "why": "Gives hope and elicits expectations"
   },
   {
    "who": "pt",
    "text": "I don’t know. Just to say it, I think. And to know if anything can be done."
   },
   {
    "phase": "Examination and tests",
    "clock": "6–8 min",
    "who": "dr",
    "text": "To work out the cause I’d like to examine your tummy and your back passage, including a gentle internal check with a gloved finger. It tells me about the muscle strength and whether there’s anything like hard stool or a lump. You can have a chaperone, and we can stop at any time. Would you be happy to do that now, or would you prefer to book it?",
    "dom": "tasks",
    "why": "Explains, offers chaperone and gains consent for DRE"
   },
   {
    "who": "pt",
    "text": "Now, if we can. I’ve waited long enough."
   },
   {
    "who": "dr",
    "text": "Because your bowels have changed, I’d also like a stool test called FIT, which looks for tiny amounts of blood, and some blood tests. It’s a sensible check at your age with a change like this.",
    "dom": "tasks",
    "why": "FIT and bloods for a change in bowel habit (NICE NG12 (updated April 2026), HTG690)"
   },
   {
    "who": "pt",
    "text": "Is that for cancer?"
   },
   {
    "who": "dr",
    "text": "It’s one of the things we check for, to be thorough. Most people with symptoms like yours don’t have cancer, but I don’t want to miss it. I’ll let you know the result as soon as I have it.",
    "dom": "rto",
    "why": "Honest, proportionate answer to a direct question"
   },
   {
    "phase": "Plan",
    "clock": "8–11 min",
    "who": "dr",
    "text": "While we wait, some things often help quickly. The aim is a formed, soft motion — easier to hold. Depending on what I find, that may mean adjusting fibre, or a medicine called loperamide to firm things up, starting low. If there’s hard stool sitting low down, we treat that instead.",
    "dom": "tasks",
    "why": "First-line stool-consistency management (NICE CG49)"
   },
   {
    "who": "pt",
    "text": "I didn’t know there were tablets for it."
   },
   {
    "who": "dr",
    "text": "There are. I’ll also refer you to the specialist continence team for pelvic floor muscle training and biofeedback, and for tests of the muscle if needed. Some people then go on to surgical options, but most improve before that. In the meantime, there are good pads, skin care products and a card that gets you access to toilets quickly.",
    "dom": "tasks",
    "why": "Refers to specialist continence services; practical supports"
   },
   {
    "who": "pt",
    "text": "That would make a real difference to going out."
   },
   {
    "phase": "Safety net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Please contact us urgently if you notice numbness around your bottom, trouble passing urine or new leg weakness — that needs same-day assessment. And tell me sooner if you see blood or lose weight. How are you feeling now you’ve told me?",
    "dom": "gs",
    "why": "Specific safety net and checks her feelings"
   },
   {
    "who": "pt",
    "text": "Lighter. I wish I’d said something months ago."
   },
   {
    "who": "dr",
    "text": "You’ve said it now, and that’s what counts. Let’s do the examination, I’ll check your medicines, and I’ll see you in two weeks with the results. Can you tell me what we’ve agreed?",
    "dom": "gs",
    "why": "Summary, follow-up and teach-back"
   },
   {
    "who": "pt",
    "text": "Examination today, the stool test and bloods, maybe loperamide, the continence team, and ring if I get numbness or blood."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Received the end-of-consultation disclosure warmly, made time and let her describe it in her own words.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored going out, mood, toilet mapping and the belief that nothing could be done.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the shame, the forceps delivery, ‘stopped going out’ and ‘tried not to look’.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: part of ageing and childbirth. Concern: shame and judgement. Expectation: to say it, and to know if anything helps.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Abdominal, perianal and DRE with chaperone and consent; FIT and bloods; stool chart; drug list review.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Obstetric sphincter injury, loose stool causes, overflow, neurological causes, prolapse and colorectal cancer.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened change in bowel habit, bleeding and weight loss (FIT per NICE NG12 (updated April 2026) and HTG690) and cauda equina features.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Mixed urge and passive faecal incontinence, most likely related to obstetric sphincter injury, pending examination and FIT.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Stool consistency management and loperamide if appropriate (NICE CG49); pelvic floor training; specialist continence referral; products and toilet access.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Mood and social withdrawal addressed; drugs reviewed; honest answer about the cancer check.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day contact for cauda equina symptoms; report bleeding or weight loss; review in two weeks with results; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Older adults",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Patricia Lowe",
    "age": "62 years · female",
    "pmh": [
     "3 vaginal deliveries (1 forceps)"
    ],
    "meds": [
     "See repeat list"
    ],
    "allergy": "None recorded",
    "recent": "Booked for another problem.",
    "reason": "End of consultation: “There’s something I’ve not told anyone…”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Receive the disclosure",
     "d": "Thank her, normalise, make time."
    },
    {
     "t": "1–4",
     "h": "Characterise",
     "d": "Urge or passive, Bristol stool type, frequency, pads, obstetric history."
    },
    {
     "t": "4–5",
     "h": "Red flags",
     "d": "Change in bowel habit, bleeding, weight loss; saddle numbness, bladder, back and leg symptoms; drugs."
    },
    {
     "t": "5–6",
     "h": "Impact and ICE",
     "d": "Going out, mood, what she believes and hopes."
    },
    {
     "t": "6–11",
     "h": "Examine, test, plan",
     "d": "Chaperoned DRE; FIT and bloods; stool consistency and loperamide; continence referral; products."
    },
    {
     "t": "11–12",
     "h": "Safety net",
     "d": "Cauda equina and bleeding advice; review in two weeks; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Looks uncomfortable or says “book another appointment for that”; accepts it as age; no red-flag screen; no DRE; offers only pads.",
    "pass": "Receives it kindly; distinguishes urge and passive; screens red flags; examines with a chaperone; starts first-line treatment and refers.",
    "exc": "All of that, plus: makes her feel it was right to tell; links the forceps delivery; honest and calm about the FIT; explores mood and social withdrawal; practical supports; clear safety net; she leaves lighter and hopeful."
   },
   "avoid": [
    {
     "dont": "“We’re out of time — can you book another appointment for that?”",
     "instead": "“I’m really glad you told me. It matters, so let’s give it time now.”",
     "why": "Deferring a hard-won disclosure may mean she never raises it again."
    },
    {
     "dont": "“It’s very common at your age, I’m afraid.”",
     "instead": "“It’s common, but it isn’t something you have to live with — most people improve.”",
     "why": "Normalising without hope confirms her belief that nothing can be done."
    },
    {
     "dont": "“I’ll give you some pads.” (and nothing else)",
     "instead": "“Pads will help day to day, and we’ll also treat the cause.”",
     "why": "Containment alone is not management (NICE CG49)."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Going out",
     "t": "Toilet access cards (for example the Bladder & Bowel Community ‘Just Can’t Wait’ card) and the RADAR National Key Scheme for accessible toilets help people leave the house again."
    },
    {
     "h": "Mood and isolation",
     "t": "Shame drives withdrawal. Ask about mood and offer support; low mood may need its own plan."
    }
   ],
   "legal": [
    {
     "h": "Consent for intimate examination",
     "t": "Explain why and what the DRE involves, obtain consent, offer a chaperone and record who was present or that one was declined (GMC Intimate examinations and chaperones)."
    }
   ],
   "professional": [
    {
     "h": "Doorknob disclosures",
     "t": "A sensitive issue raised at the end is often the real reason for attending. Make time where safe, or book a prompt dedicated appointment and say why — never dismiss it."
    },
    {
     "h": "Dignity",
     "t": "Use neutral language and avoid showing discomfort. Treat faecal incontinence as the medical problem it is."
    }
   ],
   "community": [
    {
     "h": "Services",
     "t": "Specialist continence services (often nurse-led) for pelvic floor training, biofeedback and products; Bladder & Bowel UK and the Bladder & Bowel Community for information and support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Change in bowel habit, rectal bleeding, weight loss — FIT and suspected cancer pathway if FIT 10 µg Hb/g or more or a rectal mass (NICE NG12 (updated April 2026), HTG690)",
     "Saddle numbness, urinary retention or incontinence, back pain, leg weakness or numbness — emergency same-day assessment",
     "Loose stool with nocturnal symptoms or blood — consider IBD"
    ],
    "psychosocial": [
     "Shame; hidden for months",
     "Stopped going out; low mood",
     "Belief nothing can be done"
    ],
    "ice": [
     "Idea: part of ageing and childbirth",
     "Concern: judgement and embarrassment",
     "Expectation: to say it, and to learn if anything helps"
    ]
   },
   "diagnosis": "Mixed urge and passive faecal incontinence in a 62-year-old woman, most likely from obstetric anal sphincter injury (forceps delivery), with loose stool worsening it. Colorectal cancer, overflow and neurological causes to be excluded by examination, FIT and history.",
   "diagnosisLay": "“The muscles that keep the back passage closed may have been weakened by the forceps birth, and it shows more now. When motions are loose it’s harder to hold on. The good news is that muscle training, getting the motions firmer and specialist help make a real difference.”",
   "management": {
    "reflectIce": "“You thought this was just age and having children, and that nothing could be done. There’s a lot we can do.”",
    "psychosocial": "Validate the disclosure; explore mood and isolation; toilet access card and products.",
    "sharedPlan": [
     "Chaperoned abdominal, perianal and DRE examination",
     "FIT and bloods for the change in bowel habit (NICE NG12 (updated April 2026); HTG690)",
     "Stool consistency: diet, drug review, loperamide if loose and no contraindication (NICE CG49; dose per BNF); treat any overflow",
     "Specialist continence referral: supervised pelvic floor training, biofeedback (NICE NG210)",
     "Pads, skin care, toilet access card"
    ],
    "safetyNet": [
     "Same-day contact for saddle numbness, urinary problems or leg weakness",
     "Report bleeding or weight loss",
     "Review in two weeks with results"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Faecal incontinence",
    "s": "Visual algorithm · assessment and red flags",
    "href": "algorithms/faecal-incontinence.html"
   },
   {
    "ic": "🗺️",
    "t": "Rectal bleeding",
    "s": "Visual algorithm · FIT and suspected cancer",
    "href": "algorithms/rectal-bleeding.html"
   },
   {
    "ic": "💠",
    "t": "Cauda equina syndrome",
    "s": "Protocol · emergency referral",
    "href": "management/cauda-equina.html"
   },
   {
    "ic": "💠",
    "t": "Constipation in adults",
    "s": "Protocol · overflow and impaction",
    "href": "management/constipation-adult.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is lost in the first thirty seconds if the disclosure is met with embarrassment or a request to rebook. After that, it rewards systematic assessment and real hope.",
   "items": [
    {
     "dom": "rto",
     "fail": "Asking her to book another appointment.",
     "why": "She may not raise it again; the disclosure is the agenda.",
     "fix": "Thank her and give it time now, or book a prompt dedicated slot and explain why."
    },
    {
     "dom": "rto",
     "fail": "Accepting “it’s just age”.",
     "why": "Most people improve with treatment.",
     "fix": "Offer realistic hope explicitly."
    },
    {
     "dom": "tasks",
     "fail": "No red-flag screen.",
     "why": "Change in bowel habit needs FIT; saddle numbness needs emergency assessment.",
     "fix": "Ask about bleeding, weight loss, bowel change and neurological symptoms."
    },
    {
     "dom": "tasks",
     "fail": "Skipping the DRE.",
     "why": "Tone, impaction and masses change the plan.",
     "fix": "Explain, consent, offer a chaperone and examine."
    },
    {
     "dom": "tasks",
     "fail": "Offering only pads.",
     "why": "Containment is not treatment (NICE CG49).",
     "fix": "Stool consistency, loperamide if appropriate, pelvic floor training and specialist referral."
    },
    {
     "dom": "gs",
     "fail": "No follow-up or safety net.",
     "why": "Results and response need review; cauda equina symptoms need urgent action.",
     "fix": "Name the symptoms and book a review."
    }
   ]
  }
 },
 "genital-herpes-first": {
  "stem": {
   "name": "Lauren Hicks",
   "age": "26-year-old woman",
   "pmh": [
    "No relevant history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "No recent consultations recorded.",
   "reason": "Same-day appointment: “Painful sores down below. Stings to pass urine.”"
  },
  "knowledge": {
   "guideline": "[1] BASHH UK national guideline for the management of anogenital herpes (2024) · [2] BASHH/RCOG Management of genital herpes in pregnancy and the neonate (2024 update) · [3] BASHH summary guidance on testing for sexually transmitted infections (2023) · [4] BHIVA/BASHH/BIA Adult HIV testing guidelines (2020) · [5] BNF: aciclovir",
   "summary": "Painful grouped blisters and shallow ulcers on the vulva with dysuria, tender groin nodes and flu-like illness is a first episode of genital herpes until proven otherwise. The GP should examine, take a lesion swab for HSV PCR, start aciclovir without waiting for the result, give symptom relief and warn about urinary retention, arrange a full STI screen through sexual health services, and spend real time on the shame, the “forever” question, partners and future pregnancy.",
   "points": [
    {
     "h": "Recognise it",
     "t": "First episodes are usually the most severe: multiple painful vesicles that break into shallow ulcers, dysuria, tender inguinal nodes, fever and myalgia. Consider other causes of genital ulcers: syphilis (usually painless), trauma, aphthous or Behçet’s ulcers, fixed drug eruption and, if persistent, vulval cancer."
    },
    {
     "h": "Confirm",
     "t": "BASHH [1]: take a swab from the base of a lesion for HSV PCR, which also types HSV-1 or HSV-2. Offer a full STI screen including chlamydia, gonorrhoea, syphilis and HIV [3][4], ideally through a sexual health clinic; repeat syphilis and HIV tests if still in the window period."
    },
    {
     "h": "Antiviral",
     "t": "BASHH [1]: start oral antiviral within 5 days of onset or while new lesions are still forming; do not wait for the swab result. Aciclovir 400 mg three times daily for 5 days is preferred; valaciclovir and famciclovir are alternatives (dose per BNF [5]). Review at 5 days and continue if new lesions are still appearing."
    },
    {
     "h": "Symptom relief",
     "t": "BASHH [1]: saline bathing, simple analgesia, and topical 5% lidocaine or petroleum jelly. Passing urine in a warm bath or with water poured over the area eases dysuria. Urinary retention can occur; if catheterisation is needed, the suprapubic route is considered. Avoid sex until lesions have healed."
    },
    {
     "h": "Counselling",
     "t": "The virus stays in the body, but recurrences are usually milder and shorter than a first episode, especially with HSV-1. Transmission can happen without symptoms (asymptomatic shedding); condoms and suppressive antivirals reduce but do not remove the risk. BASHH [1]: partner notification is not required as a public health measure, but telling partners is recommended. Suppressive treatment is considered for frequent recurrences (trials used 6 or more a year)."
    },
    {
     "h": "Pregnancy",
     "t": "BASHH/RCOG [2]: she should tell her midwife or obstetrician about herpes in any future pregnancy. Recurrent herpes carries a low risk to the baby; a first episode in the third trimester carries the highest risk and changes delivery planning. Ask about possible current pregnancy now."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Miss Hicks, I’m Dr Clarke. Take your time. What’s been happening?",
    "dom": "rto",
    "why": "Open, calm start"
   },
   {
    "who": "pt",
    "text": "This is so embarrassing. I’ve got these really painful blisters and sores down below, it stings terribly when I wee, and I feel fluey and achy. I looked it up and I’m terrified it’s herpes. Does that mean I’m dirty? Will I have this forever? What do I tell my partner?"
   },
   {
    "who": "dr",
    "text": "Thank you for coming in. There’s nothing to be embarrassed about with me, and no, it wouldn’t mean you’re dirty. Those are really important questions and I promise we’ll answer each one. First, can I ask a few things about the symptoms?",
    "dom": "rto",
    "why": "Reassures on the “dirty” fear early; agrees the agenda"
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When did the sores start, and are new ones still appearing?",
    "dom": "tasks",
    "why": "Timing for antiviral window"
   },
   {
    "who": "pt",
    "text": "Three days ago. There are more today than yesterday."
   },
   {
    "who": "dr",
    "text": "Are you managing to pass urine, even though it stings?",
    "dom": "tasks",
    "why": "Screens urinary retention"
   },
   {
    "who": "pt",
    "text": "Yes, but I’m putting it off because it’s so painful."
   },
   {
    "who": "dr",
    "text": "Any discharge, headache with a stiff neck, or pain in your back passage?",
    "dom": "tasks",
    "why": "Other STI features and complications"
   },
   {
    "who": "pt",
    "text": "No. Just the sores and feeling rubbish."
   },
   {
    "who": "dr",
    "text": "Have you had anything like this before, around your mouth or genitals?",
    "dom": "tasks",
    "why": "First versus recurrent episode"
   },
   {
    "who": "pt",
    "text": "Never."
   },
   {
    "who": "dr",
    "text": "Could you be pregnant at the moment? And do you have any allergies to medicines?",
    "dom": "tasks",
    "why": "Pregnancy status changes management; allergy"
   },
   {
    "who": "pt",
    "text": "I don’t think so. No allergies."
   },
   {
    "who": "dr",
    "text": "Can I ask about your partner? Is it a regular partner, and do you use condoms?",
    "dom": "tasks",
    "why": "Sexual history, sensitively"
   },
   {
    "who": "pt",
    "text": "He’s my regular partner. I don’t know if he’s ever had anything like this."
   },
   {
    "phase": "ICE",
    "clock": "4–5 min",
    "who": "dr",
    "text": "You mentioned three fears: being dirty, having it forever, and what to tell him. Which is weighing on you most?",
    "dom": "rto",
    "why": "Summarises and prioritises her concerns"
   },
   {
    "who": "pt",
    "text": "Him. What if he thinks I cheated? And the forever bit."
   },
   {
    "phase": "Examination",
    "clock": "5–6 min",
    "who": "dr",
    "text": "I’d like to examine you, with a chaperone, and take a swab from one of the sores to confirm what it is. Is that all right?",
    "dom": "tasks",
    "why": "Consent, chaperone, swab for HSV PCR"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "(After examination.) There are clusters of small blisters and shallow ulcers on the vulva, and tender glands in your groin. This fits a first episode of genital herpes. The swab will confirm it and tell us the type.",
    "dom": "tasks",
    "why": "Findings and working diagnosis"
   },
   {
    "phase": "Explanation and treatment",
    "clock": "6–9 min",
    "who": "dr",
    "text": "I’ll start you on an antiviral tablet today called aciclovir, three times a day for five days. It works best started early, and we don’t need to wait for the swab. For the pain: salt-water bathing, regular paracetamol or ibuprofen, and an anaesthetic gel. Passing urine in a warm bath really helps.",
    "dom": "tasks",
    "why": "Aciclovir 400 mg TDS for 5 days (BASHH 2024); symptom relief"
   },
   {
    "who": "dr",
    "text": "If you can’t pass urine at all, or it becomes very difficult, contact us or go to urgent care straight away, because that sometimes needs treatment in hospital.",
    "dom": "gs",
    "why": "Urinary retention safety-net"
   },
   {
    "who": "pt",
    "text": "And the forever part?"
   },
   {
    "who": "dr",
    "text": "Honestly, the virus stays in the body. But the first episode is almost always the worst. Many people have few or no further outbreaks, and when they happen they’re usually milder and shorter. If they became frequent, a daily tablet can stop most of them.",
    "dom": "tasks",
    "why": "Natural history, honestly and hopefully"
   },
   {
    "phase": "Partners, prevention and pregnancy",
    "clock": "9–11 min",
    "who": "dr",
    "text": "About your partner: herpes is very common and many people carry it without ever knowing. It can be caught from someone without sores, so this doesn’t tell us anyone cheated. It can’t be dated like that. The sexual health clinic can talk it through with both of you. I’d suggest no sex until the sores have healed, and condoms after that help reduce the risk.",
    "dom": "tasks",
    "why": "Transmission and disclosure; defuses blame"
   },
   {
    "who": "pt",
    "text": "That helps. I thought it meant he’d been with someone."
   },
   {
    "who": "dr",
    "text": "I’d also like you to have a full check for other infections, including HIV and syphilis, at the sexual health clinic. And one thing for the future: if you’re ever pregnant, tell your midwife you’ve had herpes, because it helps them plan to keep the baby safe.",
    "dom": "tasks",
    "why": "Full STI screen; pregnancy advice (BASHH/RCOG 2024)"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Can you tell me the main things you’ll do when you get home?",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Tablets three times a day, salt baths, wee in the bath, clinic for tests, and call if I can’t wee."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll ring you with the swab result. Come back if it isn’t settling after five days, if you get a severe headache or stiff neck, or if you’re struggling with how you feel about it. That matters too.",
    "dom": "gs",
    "why": "Results, review and emotional safety-net"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; addressed the “dirty” fear early and agreed an agenda.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Relationship, fear of partner’s reaction and shame explored.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “What do I tell my partner?” and addressed the fear of infidelity.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (herpes, from looking it up), concerns (dirty, forever, partner), expectation (treatment and answers).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Chaperoned examination; lesion swab for HSV PCR; full STI screen including HIV and syphilis via sexual health.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "First-episode HSV versus syphilis, other ulcer causes, and recurrence versus first episode.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Urinary retention, neurological symptoms and possible pregnancy screened.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named a first episode of genital herpes, pending swab confirmation.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Aciclovir started without waiting for results (BASHH 2024); saline bathing, analgesia, topical anaesthetic.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Shame, partner disclosure and emotional impact addressed; sex avoided until healed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Result call; review if not settling; retention and neurological safety-net; future pregnancy advice.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Lauren Hicks",
    "age": "26 years · female",
    "pmh": [
     "No relevant history recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "No recent consultations.",
    "reason": "“Painful sores down below. Stings to pass urine.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and reassure",
     "d": "Let her ask her three questions. Say early that this doesn’t make her dirty, and promise to answer each."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Onset, new lesions, passing urine, previous episodes, pregnancy, allergy, sexual history."
    },
    {
     "t": "4–6",
     "h": "ICE and examine",
     "d": "Prioritise her fears. Chaperoned examination and HSV PCR swab."
    },
    {
     "t": "6–9",
     "h": "Treat",
     "d": "Aciclovir now; symptom relief; retention warning; the “forever” answer."
    },
    {
     "t": "9–12",
     "h": "Partners and close",
     "d": "Transmission and disclosure without blame; STI screen; future pregnancy; teach-back; safety-net."
    }
   ],
   "wordPics": {
    "fail": "Prescribes aciclovir briskly and ends; never examines or swabs; no STI screen; ignores the shame and partner questions; no retention warning.",
    "pass": "Recognises first-episode herpes, swabs, starts aciclovir, gives symptom advice, refers for STI screening and answers her questions.",
    "exc": "All of the above, plus: addresses “dirty” in the first minute; checks the antiviral window and pregnancy status; explains that herpes cannot be dated so it does not imply infidelity; gives honest, hopeful natural history; advises on disclosure and condoms; warns about retention; mentions future pregnancy; confirms the plan by teach-back."
   },
   "avoid": [
    {
     "dont": "“Well, it’s sexually transmitted, so your partner must have given it to you.”",
     "instead": "“Many people carry herpes without ever knowing, so this doesn’t tell us when or from whom.”",
     "why": "Blame is inaccurate and can harm relationships; asymptomatic carriage is common."
    },
    {
     "dont": "“There’s no cure, I’m afraid.”",
     "instead": "“The virus stays in the body, but this first episode is usually the worst, and later ones are milder and can be prevented with tablets.”",
     "why": "True but bleak framing deepens distress; the balanced version is equally honest."
    },
    {
     "dont": "“Let’s wait for the swab before treating.”",
     "instead": "“I’ll start the antiviral today; it works best early.”",
     "why": "BASHH advises treating a first episode within 5 days or while new lesions form, without waiting."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Stigma",
     "t": "Shame about herpes often outweighs the physical symptoms. Plain, non-judgemental language and accurate facts reduce it."
    },
    {
     "h": "Relationship",
     "t": "Fear of blame is common. Explaining asymptomatic carriage helps couples talk; sexual health clinics can support that conversation."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality",
     "t": "Sexual health information is confidential. Sexual health clinics offer open access and confidential testing."
    },
    {
     "h": "Chaperone",
     "t": "GMC guidance on intimate examinations and chaperones: offer a chaperone for an intimate examination and record the offer, whether it was accepted and who was present."
    }
   ],
   "professional": [
    {
     "h": "Consent",
     "t": "Explain what the examination and swab involve and obtain consent before starting."
    },
    {
     "h": "Documentation",
     "t": "Record onset date, lesion description, swab taken, antiviral started, STI screen arranged and counselling given."
    }
   ],
   "community": [
    {
     "h": "Sexual health services",
     "t": "Offer referral for a full STI screen, typing results, partner discussions and ongoing advice about recurrences. Patient charities for herpes provide reliable information and support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Unable to pass urine (retention)",
     "Severe headache, neck stiffness or photophobia (meningism)",
     "Possible pregnancy, especially third trimester",
     "Immunosuppression or very extensive lesions",
     "Painless ulcer (syphilis) or persistent ulcer (other causes)"
    ],
    "psychosocial": [
     "Shame and fear of being “dirty”",
     "Fear her partner will think she cheated",
     "Worry about the future and relationships"
    ],
    "ice": [
     "Idea: herpes, from looking it up",
     "Concern: being dirty; having it forever; telling her partner",
     "Expectation: treatment and honest answers"
    ]
   },
   "diagnosis": "“This looks like a first episode of genital herpes. The swab will confirm it and tell us the type.”",
   "diagnosisLay": "“Herpes is a very common virus. After the first outbreak it rests quietly in the nerves and can occasionally cause a milder flare. Many people carry it without ever knowing.”",
   "management": {
    "reflectIce": "“You asked if this makes you dirty: it doesn’t. You asked if it’s forever: the virus stays, but this is usually the worst it gets.”",
    "psychosocial": "Defuse blame; support disclosure; offer the sexual health clinic for joint conversations; acknowledge the emotional impact.",
    "sharedPlan": [
     "Lesion swab for HSV PCR; full STI screen including HIV and syphilis",
     "Aciclovir 400 mg three times daily for 5 days, started today (BASHH 2024)",
     "Saline bathing, analgesia, topical lidocaine; no sex until healed; condoms afterwards"
    ],
    "safetyNet": [
     "Cannot pass urine: urgent same-day review",
     "Severe headache or stiff neck: urgent review",
     "Tell the midwife about herpes in any future pregnancy (BASHH/RCOG 2024)"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Genital herpes",
    "s": "Management protocol · BASHH 2024",
    "href": "management/genital-herpes.html"
   },
   {
    "ic": "🗺️",
    "t": "Anogenital ulcers",
    "s": "Visual algorithm · differentials",
    "href": "algorithms/anogenital-ulcers.html"
   },
   {
    "ic": "🗺️",
    "t": "Dysuria",
    "s": "Visual algorithm",
    "href": "algorithms/dysuria.html"
   }
  ],
  "pitfalls": {
   "intro": "The treatment here is straightforward. The marks are in the examination and swab, the retention warning, and how well the candidate handles shame and the partner question.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Waiting for the swab before starting treatment.",
     "why": "BASHH 2024 advises starting within 5 days or while new lesions form.",
     "fix": "Swab and start aciclovir the same day."
    },
    {
     "dom": "tasks",
     "fail": "No STI screen.",
     "why": "Other infections, including HIV and syphilis, can coexist.",
     "fix": "Arrange a full screen through sexual health services."
    },
    {
     "dom": "tasks",
     "fail": "No warning about urinary retention.",
     "why": "Severe dysuria can cause retention needing hospital care.",
     "fix": "Advise passing urine in the bath and urgent review if unable to pass it."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about pregnancy or giving future pregnancy advice.",
     "why": "A first episode in late pregnancy changes delivery planning (BASHH/RCOG 2024).",
     "fix": "Ask now and advise telling the midwife in future."
    },
    {
     "dom": "rto",
     "fail": "Implying her partner was unfaithful, or ignoring the question.",
     "why": "Asymptomatic carriage means infection cannot be dated.",
     "fix": "Explain this plainly and offer clinic support for the conversation."
    },
    {
     "dom": "gs",
     "fail": "Bleak “no cure” message without context.",
     "why": "It leaves her more frightened than necessary.",
     "fix": "Explain that recurrences are milder and can be suppressed."
    }
   ]
  }
 },
 "head-lice": {
  "stem": {
   "name": "Maisie",
   "age": "8-year-old girl",
   "pmh": [
    "Nothing significant recorded"
   ],
   "meds": [
    "None recorded"
   ],
   "allergy": "None recorded",
   "recent": "School letter home about head lice in her class. Scratching her scalp since. Attends with her mother.",
   "reason": "“Should the whole family be treated, and should I keep her off school?”"
  },
  "knowledge": {
   "guideline": "[1] BNFC: dimeticone (topical) and the treatment summary on parasitic skin infections · [2] UKHSA Health protection in children and young people settings, including education: exclusion table · [3] GMC Good medical practice (2024)",
   "summary": "Head lice are diagnosed by finding a live louse, usually by detection combing wet, conditioned hair. Treat only a confirmed live infestation, with a physically acting product such as dimeticone 4% applied twice 7 days apart, or with methodical wet combing. Check everyone in the household and treat only those with live lice, on the same day. Lice are not a sign of dirt and there is no school exclusion.",
   "points": [
    {
     "h": "Diagnosis needs a live louse",
     "t": "Itch and a school letter are not enough. Eggs, and especially empty white shells found well away from the scalp, can be left over from a past infestation. Detection combing with a fine-toothed comb through wet, conditioned hair is the reliable way to find live lice."
    },
    {
     "h": "Dimeticone",
     "t": "BNFC [1]: dimeticone 4% lotion works physically by coating the lice, so insecticide resistance does not affect it. Apply to dry hair covering the scalp and hair root to tip, leave for the time stated on the product (8 hours or overnight for the lotion), wash out, and repeat after 7 days to kill lice that hatch from eggs that survived."
    },
    {
     "h": "Wet combing",
     "t": "Methodical combing of wet, conditioned hair with a detection comb (“bug busting”) is an alternative for families who prefer not to use a product. It needs several sessions every few days over at least two weeks, continued until no live lice are found at consecutive sessions."
    },
    {
     "h": "Contacts",
     "t": "Check all household members and close contacts with a detection comb. Treat only those with live lice, all on the same day, to avoid passing lice back and forth. Treating everyone “just in case” is not recommended."
    },
    {
     "h": "Myths",
     "t": "Lice live on clean or dirty hair alike, cannot jump or fly, and spread by head-to-head contact. Washing bedding or treating pets is not needed."
    },
    {
     "h": "School",
     "t": "UKHSA [2]: no exclusion period for head lice. The child can attend school while being treated."
    },
    {
     "h": "Treatment failure",
     "t": "Usually reinfestation, a missed second application, or not enough product. If live lice persist after correct use, check technique, check contacts, and switch to another method."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Clarke. Hello Maisie. What can I help with today?",
    "dom": "rto",
    "why": "Greets both; open question"
   },
   {
    "who": "pt",
    "text": "The school sent home a letter saying there’s nits going round, and now Maisie’s scratching her head. I’m mortified. Does it mean she’s dirty? Should I treat her and the whole family to be safe, and keep her off school?"
   },
   {
    "who": "dr",
    "text": "I can hear you’re worried, so let me answer the most important bit straight away: head lice have nothing to do with being dirty. Any child can catch them. I’ll come back to your other questions in a moment.",
    "dom": "rto",
    "why": "Addresses stigma immediately"
   },
   {
    "who": "pt",
    "text": "Oh, thank goodness."
   },
   {
    "phase": "History",
    "clock": "1–4 min",
    "who": "dr",
    "text": "How long has she been scratching? And have you actually seen anything moving in her hair, or eggs stuck to the hairs?",
    "dom": "tasks",
    "why": "Asks whether live lice have been seen"
   },
   {
    "who": "pt",
    "text": "A few days. I had a quick look and couldn’t see anything, but I didn’t know what I was looking for."
   },
   {
    "who": "dr",
    "text": "Has she had any rash on the scalp or neck, sores from scratching, or swollen glands? And is she well otherwise?",
    "dom": "tasks",
    "why": "Screens for secondary infection and other scalp causes"
   },
   {
    "who": "pt",
    "text": "She’s fine in herself. Just itchy."
   },
   {
    "who": "dr",
    "text": "Maisie, is it itchy all over your head, or in particular places?",
    "dom": "rto",
    "why": "Involves the child"
   },
   {
    "who": "pt",
    "text": "Mostly behind my ears."
   },
   {
    "who": "dr",
    "text": "Who else lives with you both? Has anyone else been itching?",
    "dom": "tasks",
    "why": "Identifies household contacts"
   },
   {
    "who": "pt",
    "text": "Just the family at home. Nobody else has said anything."
   },
   {
    "who": "dr",
    "text": "Have you used any head-lice treatments already, from the chemist?",
    "dom": "tasks",
    "why": "Previous treatment and possible failure"
   },
   {
    "who": "pt",
    "text": "Not yet. I was going to buy enough for everyone."
   },
   {
    "phase": "Examination",
    "clock": "4–6 min",
    "who": "dr",
    "text": "May I look at her scalp? The best way to check is actually a fine detection comb through wet hair with conditioner, which you can do properly at home, but I’ll have a look now for eggs close to the scalp or any sores.",
    "dom": "tasks",
    "why": "Examines scalp; explains detection combing"
   },
   {
    "who": "dr",
    "text": "Her scalp looks healthy with no sores. I can’t say from a look whether there are live lice. That’s what the comb will tell us.",
    "dom": "tasks",
    "why": "Honest about the limits of inspection"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "6–7 min",
    "who": "dr",
    "text": "You mentioned treating everyone and keeping her off school. What were you hoping we’d sort today?",
    "dom": "rto",
    "why": "Clarifies expectations"
   },
   {
    "who": "pt",
    "text": "I just want it dealt with before it spreads to all of us. And I don’t want other parents thinking we’re dirty."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "That makes sense. Here’s the key thing: we only treat if we find a live louse. Itching and a letter aren’t proof, and old empty egg shells can hang around for weeks after lice have gone. Tonight, wash her hair, put lots of conditioner on, and comb section by section with a detection comb, wiping it on white paper each time. A live louse is a small, moving, sesame-seed-sized insect.",
    "dom": "tasks",
    "why": "Diagnosis requires live lice; teaches detection combing"
   },
   {
    "who": "pt",
    "text": "And if I find one?"
   },
   {
    "who": "dr",
    "text": "Then treat her with a lotion such as dimeticone. It works by coating the lice rather than poisoning them, so resistance isn’t a problem. You cover the dry hair and scalp, leave it for the time on the pack, usually overnight, then wash it out. The crucial part is doing it again seven days later, because eggs that survive the first treatment hatch in that week.",
    "dom": "tasks",
    "why": "Dimeticone with repeat at 7 days (BNFC)"
   },
   {
    "who": "dr",
    "text": "If you’d rather not use a lotion, careful wet combing every few days for at least two weeks also works, but it takes commitment.",
    "dom": "tasks",
    "why": "Offers the alternative"
   },
   {
    "who": "pt",
    "text": "Should I just do all of us at the same time to be safe?"
   },
   {
    "who": "dr",
    "text": "No need. Treating people without lice is a waste of money and exposes them to products they don’t need. Instead, comb everyone at home the same evening, and treat anyone with a live louse on the same day as Maisie.",
    "dom": "tasks",
    "why": "Check contacts; treat only confirmed; same day"
   },
   {
    "phase": "Myths and school",
    "clock": "9–11 min",
    "who": "dr",
    "text": "A couple of other things people often worry about. Lice can’t jump or fly, they spread when heads touch. You don’t need to wash all the bedding or treat pets. And Maisie doesn’t need to miss any school. The national guidance for schools says children with head lice carry on as normal.",
    "dom": "tasks",
    "why": "Myth-busting; no exclusion (UKHSA)"
   },
   {
    "who": "pt",
    "text": "Really? I thought they’d send her home."
   },
   {
    "who": "dr",
    "text": "No. It might be kind to let the parents of her close friends know so they can check too, but that’s up to you. Does that plan feel manageable?",
    "dom": "rto",
    "why": "Informs contacts; checks agreement"
   },
   {
    "who": "pt",
    "text": "Yes. It’s much less than I thought."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Can you tell me the plan back, so I know I’ve explained it clearly?",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Comb her wet hair tonight with conditioner. Only treat if I find a live one. Lotion, then again a week later. Check everyone and only treat anyone with lice. She goes to school."
   },
   {
    "who": "dr",
    "text": "Exactly. Comb again a few days after the second treatment to check it’s worked. If you’re still finding live lice after doing it properly, or her scalp becomes sore, weepy or crusted, come back and we’ll look again.",
    "dom": "gs",
    "why": "Checks cure; safety-net for failure and infection"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; addressed the embarrassment first, then took all three questions as the agenda.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Household members, the mother’s worry about other parents’ judgement, and Maisie’s own experience.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up that no live lice had been seen and that she planned to buy treatment for everyone.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (letter plus itch means lice), concern (stigma, spread), expectation (treat everyone; keep her off school).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Inspected the scalp for sores and eggs and explained that detection combing is the real test.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Head lice versus dry scalp, eczema or other causes of scalp itch; secondary infection.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about sores, rash, glands and general health; previous treatments.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Explained that a diagnosis needs a live louse, not itch or a school letter.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Dimeticone with repeat at 7 days, or wet combing; check all contacts, treat only those with live lice on the same day.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Myths corrected (hygiene, jumping, bedding, pets); no school exclusion; informing close contacts.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Re-check combing after treatment; return if lice persist after correct use or scalp becomes infected; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Maisie",
    "age": "8 years · female",
    "pmh": [
     "Nil significant"
    ],
    "meds": [
     "None"
    ],
    "allergy": "None recorded",
    "recent": "School head-lice letter; scalp itch for a few days.",
    "reason": "“Treat the whole family? Keep her off school?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "She is mortified. Tackle “dirty” in the first minute."
    },
    {
     "t": "1–6",
     "h": "History and look",
     "d": "Live lice seen? Duration, sores, glands, household, prior treatment. Inspect the scalp and explain detection combing."
    },
    {
     "t": "6–7",
     "h": "ICE",
     "d": "Treat everyone, keep her off school, fear of judgement."
    },
    {
     "t": "7–11",
     "h": "Plan",
     "d": "Detection comb first; dimeticone twice 7 days apart or wet combing; check contacts, treat only confirmed on the same day; myths; no exclusion."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "Teach-back; re-check after treatment; return if still live lice or infected scalp."
    }
   ],
   "wordPics": {
    "fail": "Prescribes treatment for the whole family on the strength of a letter; advises time off school; misses the repeat application; reinforces stigma or ignores it.",
    "pass": "Explains detection combing and treating only a live infestation, gives dimeticone with the 7-day repeat, checks rather than blanket-treats contacts, and says no exclusion.",
    "exc": "All of the above, plus: removes the stigma in the first minute; teaches the combing technique practically; explains why the second application matters; treats confirmed contacts on the same day; corrects myths about bedding and pets; involves Maisie; confirms with teach-back and a plan for failure."
   },
   "avoid": [
    {
     "dont": "“Treat everyone to be on the safe side.”",
     "instead": "“Comb everyone tonight and treat only anyone with a live louse.”",
     "why": "Treating without infestation adds cost and exposure without benefit."
    },
    {
     "dont": "“Keep her home until they’re gone.”",
     "instead": "“She can go to school as normal.”",
     "why": "UKHSA sets no exclusion for head lice."
    },
    {
     "dont": "“One treatment should do it.”",
     "instead": "“Repeat it after seven days to catch any that hatch.”",
     "why": "Products may not kill all eggs, and the repeat is part of the licensed use."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Stigma and shame",
     "t": "Parents often feel judged. Saying clearly that lice are not about hygiene helps the parent and protects the child from shame."
    },
    {
     "h": "Cost",
     "t": "Treating the whole family is expensive. Checking first and treating only confirmed cases saves money for families on low incomes."
    }
   ],
   "legal": [
    {
     "h": "Prescribing and self-care",
     "t": "Head-lice products are available from pharmacies. Many areas expect self-care purchase for minor conditions, with local exceptions; follow local policy."
    }
   ],
   "professional": [
    {
     "h": "Evidence over reassurance-seeking",
     "t": "Declining to prescribe for the whole family, with reasons, is good practice and stewardship of resources (GMC Good medical practice)."
    },
    {
     "h": "Consistent messages",
     "t": "Match the UKHSA no-exclusion advice given to schools, so families hear one message."
    }
   ],
   "community": [
    {
     "h": "Schools",
     "t": "Schools may send “alert” letters. Parents can be encouraged to comb regularly rather than treat on the basis of a letter."
    },
    {
     "h": "Community pharmacy",
     "t": "Pharmacists can sell dimeticone and detection combs and advise on technique."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Weeping, crusted or infected scalp with enlarged glands: secondary bacterial infection",
     "Persistent live lice despite correct treatment: check technique, reinfestation and contacts",
     "Scalp rash without lice: consider eczema, psoriasis or tinea capitis"
    ],
    "psychosocial": [
     "Parent’s embarrassment and fear of judgement",
     "Household members",
     "Cost of treating everyone"
    ],
    "ice": [
     "Idea: a school letter and an itch mean lice",
     "Concern: that she is seen as dirty; spread to the family",
     "Expectation: treat everyone and keep her off school"
    ]
   },
   "diagnosis": "“We can only say she has head lice if we find a live one. A detection comb through wet, conditioned hair is the way to check.”",
   "diagnosisLay": "“Lice are like tiny passengers that walk from one head to another when heads touch. They don’t care if hair is clean or dirty. Eggs are glued to the hair, and the empty shells can stay long after the lice have gone, which is why we look for a live one.”",
   "management": {
    "reflectIce": "“You were worried people would think she’s dirty, and about everyone catching it. It isn’t about hygiene, and by checking everyone we’ll only treat who needs it. She stays at school.”",
    "psychosocial": "Reduce shame; keep her in school; save the family money by treating only confirmed cases.",
    "sharedPlan": [
     "Detection comb wet, conditioned hair tonight",
     "If live lice: dimeticone 4% per the product instructions, repeated after 7 days (BNFC), or wet combing every few days for at least two weeks",
     "Check all household members; treat only those with live lice, on the same day",
     "No bedding washing or pet treatment needed",
     "No school exclusion (UKHSA)"
    ],
    "safetyNet": [
     "Re-check with the comb a few days after the second treatment",
     "Return if live lice persist after correct use",
     "Return if the scalp becomes sore, weepy, crusted or glands swell"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Widespread itch",
    "s": "Visual algorithm",
    "href": "algorithms/widespread-itch.html"
   },
   {
    "ic": "💠",
    "t": "Scabies protocol",
    "s": "Treat contacts, repeat application",
    "href": "management/scabies.html"
   },
   {
    "ic": "💠",
    "t": "Seborrhoeic dermatitis",
    "s": "Other causes of scalp itch",
    "href": "management/seborrhoeic-dermatitis.html"
   },
   {
    "ic": "💠",
    "t": "Fungal skin infection",
    "s": "Tinea capitis in children",
    "href": "management/fungal-skin-infection.html"
   }
  ],
  "pitfalls": {
   "intro": "The clinical content is simple. The station tests whether you can decline blanket treatment and school exclusion while taking away a parent’s shame.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Treating on the strength of a letter and an itch.",
     "why": "Diagnosis needs a live louse.",
     "fix": "Teach detection combing and treat only if live lice are found."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing for the whole family.",
     "why": "Unnecessary cost and exposure; contacts should be checked.",
     "fix": "Check everyone; treat confirmed cases on the same day."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting the second application.",
     "why": "Eggs that survive hatch within the week.",
     "fix": "Repeat dimeticone after 7 days (BNFC)."
    },
    {
     "dom": "tasks",
     "fail": "Advising time off school.",
     "why": "UKHSA sets no exclusion for head lice.",
     "fix": "Say clearly that she can attend as normal."
    },
    {
     "dom": "rto",
     "fail": "Leaving the “dirty” question until the end.",
     "why": "She will not listen to the plan while ashamed.",
     "fix": "Address hygiene in the first minute."
    },
    {
     "dom": "gs",
     "fail": "No plan if it does not work.",
     "why": "Treatment failure usually means reinfestation or technique.",
     "fix": "Re-check after treatment and return if live lice persist."
    }
   ]
  }
 },
 "hyperemesis-gravidarum": {
  "stem": {
   "name": "Sofia Marenco",
   "age": "28-year-old woman",
   "pmh": [
    "Pregnant, about 9 weeks (confirmed pregnancy)"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "Pregnancy confirmed. No antenatal contacts recorded in the booking note.",
   "reason": "Urgent video consultation: “Can’t keep anything down, not even water.”"
  },
  "knowledge": {
   "guideline": "[1] RCOG Green-top Guideline No. 69 The management of nausea and vomiting in pregnancy and hyperemesis gravidarum (February 2024) · [2] MHRA Drug Safety Update: ondansetron and oral clefts (January 2020) · [3] MHRA Drug Safety Update: metoclopramide and neurological adverse effects (August 2013) · [4] RCOG Green-top Guideline No. 37a Reducing the risk of venous thromboembolism during pregnancy and the puerperium (2015) · [5] BNF: antiemetics in pregnancy · [6] Windsor definition of hyperemesis gravidarum (2021) (international)",
   "summary": "At 9 weeks she cannot keep down food or water, is passing little urine, feels faint on standing and has lost weight. This is hyperemesis gravidarum, not “morning sickness”. RCOG GTG 69 (2024) is symptom-based: severity is judged on PUQE, whether fluids and oral antiemetics stay down, and clinical dehydration, not on urine ketones. Because she cannot tolerate fluids and cannot be examined on video, she needs same-day ambulatory care or admission for IV fluids, parenteral antiemetics, thiamine and bloods, with a clear follow-up plan and support.",
   "points": [
    {
     "h": "Definition",
     "t": "RCOG GTG 69 (2024) [1] uses the Windsor consensus definition [6] (international): onset before 16 weeks, nausea and vomiting with at least one severe, inability to eat and/or drink normally, and strong limitation of daily activities; signs of dehydration contribute. It replaced the older triad of more than 5% weight loss, dehydration and electrolyte imbalance."
    },
    {
     "h": "Severity",
     "t": "RCOG [1]: use the PUQE score (three questions: hours of nausea, episodes of vomiting and of retching a day; mild 6 or less, moderate 7 to 12, severe 13 to 15) with a clinical assessment of hydration, weight and bloods (U&E). Ketonuria is not an indicator of dehydration and should not be used to judge severity."
    },
    {
     "h": "Setting of care",
     "t": "RCOG [1]: mild NVP is managed in the community. Ambulatory day care gives IV fluids, vitamins (especially thiamine) and parenteral antiemetics, and should be used where possible. Admission is considered when symptoms are not controlled with ambulatory care, or when there are complications or comorbidity. Rehydrate with sodium chloride with potassium as needed, not dextrose."
    },
    {
     "h": "Antiemetics",
     "t": "RCOG [1]: first line are antihistamines and phenothiazines such as cyclizine, promethazine, prochlorperazine and chlorpromazine (dose per BNF [5]). Second line: ondansetron, whose use should not be discouraged if first line fails; MHRA [2] noted a very small increase in the absolute risk of oral clefts with first-trimester use, to be balanced against poorly managed HG. Metoclopramide is second line, limited to 5 days because of extrapyramidal effects (MHRA [3]). Use a non-oral route if tablets are not kept down."
    },
    {
     "h": "Thiamine and VTE",
     "t": "RCOG [1]: give thiamine (oral 100 mg three times daily or IV as part of vitamin B complex) to all women admitted with vomiting or severely reduced intake, especially before dextrose or parenteral nutrition, to prevent Wernicke’s encephalopathy. RCOG GTG 37a [4]: hyperemesis is a transient VTE risk factor; consider LMWH during admission."
    },
    {
     "h": "Mimics and support",
     "t": "Onset later than usual in pregnancy, abdominal pain, fever, headache or diarrhoea suggest another cause. Check urine for infection, U&E, LFTs and TFTs if severe, and an ultrasound to confirm viability and exclude multiple or molar pregnancy. RCOG [1]: assess mental health, offer support (including charity support), and do not recommend ginger for HG. In a future pregnancy, offer pre-emptive advice and early treatment."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Marenco, I’m Dr Rahman. Can you hear and see me clearly? And can I check where you are right now, in case I need to arrange anything?",
    "dom": "gs",
    "why": "Video set-up and location for urgent action"
   },
   {
    "who": "pt",
    "text": "Yes, I’m at home."
   },
   {
    "who": "dr",
    "text": "Thank you. Tell me what’s been happening.",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "I’m about nine weeks pregnant and I just can’t stop being sick. I can’t keep food down, and now not even water; it comes straight back up. I’m exhausted, dizzy when I stand, I’ve barely passed urine today, and I’ve lost weight. Everyone says it’s just morning sickness but this feels really wrong and I’m frightened for the baby."
   },
   {
    "who": "dr",
    "text": "You’re right to take this seriously, and I’m glad you called. Let me ask some quick questions so we can get you the right help today.",
    "dom": "rto",
    "why": "Validates; signals urgency"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Roughly how many hours a day do you feel sick, how many times a day are you vomiting, and how often are you retching?",
    "dom": "tasks",
    "why": "PUQE questions (RCOG GTG 69)"
   },
   {
    "who": "pt",
    "text": "Nauseous all day. Sick more than five times. Retching constantly."
   },
   {
    "who": "dr",
    "text": "When did you last keep a drink down? And when did you last pass urine?",
    "dom": "tasks",
    "why": "Oral tolerance and urine output"
   },
   {
    "who": "pt",
    "text": "Nothing’s stayed down since last night. Once this morning, dark."
   },
   {
    "who": "dr",
    "text": "Do you know how much weight you’ve lost?",
    "dom": "tasks",
    "why": "Weight loss"
   },
   {
    "who": "pt",
    "text": "My clothes are loose. I think a few kilos."
   },
   {
    "who": "dr",
    "text": "Any blood in the vomit, tummy pain, fever, pain passing urine, diarrhoea or headache?",
    "dom": "tasks",
    "why": "Screens mimics and complications"
   },
   {
    "who": "pt",
    "text": "No blood. My stomach aches from being sick, that’s all. No fever."
   },
   {
    "who": "dr",
    "text": "Any vaginal bleeding? And have you had a scan yet in this pregnancy?",
    "dom": "tasks",
    "why": "Early pregnancy problems; molar or multiple pregnancy"
   },
   {
    "who": "pt",
    "text": "No bleeding. I haven’t had a scan yet."
   },
   {
    "who": "dr",
    "text": "Any confusion, double vision or unsteadiness beyond the dizziness when you stand?",
    "dom": "tasks",
    "why": "Wernicke’s screen"
   },
   {
    "who": "pt",
    "text": "No, just dizzy and weak."
   },
   {
    "who": "dr",
    "text": "Have you tried any anti-sickness medicine? Any allergies?",
    "dom": "tasks",
    "why": "Treatment so far and allergy"
   },
   {
    "who": "pt",
    "text": "Nothing. I was scared to take anything in case it harms the baby. No allergies."
   },
   {
    "phase": "ICE and mood",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said you’re frightened for the baby. What worries you most?",
    "dom": "rto",
    "why": "Explores the concern"
   },
   {
    "who": "pt",
    "text": "That the baby isn’t getting anything. And that no one will listen."
   },
   {
    "who": "dr",
    "text": "That’s a very understandable fear. How are you coping in yourself? Some women find this so hard that their mood really drops.",
    "dom": "tasks",
    "why": "Mental health screen (RCOG GTG 69)"
   },
   {
    "who": "pt",
    "text": "I’m low and exhausted. I just want it to stop."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "This isn’t ordinary morning sickness. It’s a condition called hyperemesis gravidarum, a severe form of pregnancy sickness. It’s recognised and treatable. Because you can’t keep even water down and you’re dizzy and passing little urine, you’re dehydrated, and I can’t check your blood pressure or pulse over video.",
    "dom": "tasks",
    "why": "Names HG; explains reasoning and the video limit"
   },
   {
    "who": "dr",
    "text": "On the baby: in early pregnancy the baby is well protected, and treating you properly is the best thing for both of you.",
    "dom": "rto",
    "why": "Addresses fear for the baby honestly"
   },
   {
    "who": "pt",
    "text": "So what happens now?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’d like you seen today at the hospital’s pregnancy day unit. They’ll check your pulse and blood pressure, do blood tests for your salts and kidneys, check your urine for infection, and give you a drip of fluids with anti-sickness medicine and a vitamin called thiamine through the vein. Many women go home the same day feeling much better. They can also arrange a scan to check the pregnancy.",
    "dom": "tasks",
    "why": "Same-day ambulatory care: IV fluids, parenteral antiemetic, thiamine, bloods, scan (RCOG GTG 69)"
   },
   {
    "who": "pt",
    "text": "Are the anti-sickness medicines safe?"
   },
   {
    "who": "dr",
    "text": "Yes. The first-choice ones, like cyclizine or prochlorperazine, have been used in pregnancy for many years. You’ll go home with regular tablets, and there are other options if they don’t work. Leaving this untreated is the bigger risk.",
    "dom": "tasks",
    "why": "Safe first-line antiemetics; counsels on safety"
   },
   {
    "who": "dr",
    "text": "I’ll phone the unit now and send them my notes. Please don’t drive yourself while you’re dizzy. Is there someone who can take you?",
    "dom": "gs",
    "why": "Handover and safe travel"
   },
   {
    "who": "pt",
    "text": "Yes, I can get someone to take me."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Can you tell me what you’re going to do next?",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Go to the pregnancy unit today for a drip, blood tests and a scan."
   },
   {
    "who": "dr",
    "text": "That’s it. If you faint, become confused, see double, vomit blood, get severe tummy pain or bleeding before you get there, call 999. I’ll call you after you’ve been seen, and we’ll keep reviewing you, with a fit note if you need one. You won’t be told to just put up with this.",
    "dom": "gs",
    "why": "Red-flag safety-net and follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start after confirming location for urgent action; acknowledged her distress.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Mood, exhaustion, fear for the baby and feeling dismissed explored; transport and support checked.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “not even water” and “barely passed urine” and assessed oral tolerance and output.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (more than morning sickness), concern (the baby; not being listened to), expectation (help today).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Recognised that video cannot assess dehydration; same-day unit for observations, U&E, urine culture, weight and ultrasound.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "HG versus UTI, gastroenteritis, molar or multiple pregnancy, thyroid and surgical causes.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened haematemesis, abdominal pain, fever, bleeding and Wernicke’s features.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named hyperemesis gravidarum with severe PUQE and inability to tolerate fluids (RCOG GTG 69, 2024).",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day ambulatory care for IV fluids, parenteral antiemetics and thiamine; first-line antiemetics counselled as safe.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Low mood and fear of medicines addressed; fit note offered; safe travel arranged.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 red flags given; call after assessment; ongoing review.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Sofia Marenco",
    "age": "28 years · female",
    "pmh": [
     "Pregnant, about 9 weeks"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "⚠ Cannot keep fluids down; reduced urine output.",
    "reason": "“Can’t keep anything down, not even water.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Set up and open",
     "d": "Confirm location. Let her describe it; validate that it is more than morning sickness."
    },
    {
     "t": "1–5",
     "h": "Severity",
     "d": "PUQE questions, last fluid kept down, urine, weight, mimics, bleeding, scan status, Wernicke’s features, medicines, allergy."
    },
    {
     "t": "5–6",
     "h": "ICE and mood",
     "d": "Fear for the baby and of being dismissed; ask about mood."
    },
    {
     "t": "6–8",
     "h": "Explain",
     "d": "Hyperemesis gravidarum by name; why it needs assessment today; video limits."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Same-day pregnancy day unit: fluids, antiemetics, thiamine, bloods, scan. Safe travel. Teach-back. 999 red flags. Follow-up call."
    }
   ],
   "wordPics": {
    "fail": "Calls it morning sickness; suggests ginger and sipping water; prescribes an oral antiemetic she cannot keep down; no same-day assessment; relies on a ketone dip.",
    "pass": "Recognises HG, assesses severity, arranges same-day IV rehydration with antiemetics and thiamine, and safety-nets.",
    "exc": "All of the above, plus: uses the PUQE questions; recognises the limits of video; screens mimics and Wernicke’s; addresses fear for the baby and fear of medicines; explains that first-line antiemetics are safe; asks about mood; arranges safe transport and a handover; follows up after the unit visit."
   },
   "avoid": [
    {
     "dont": "“Try ginger biscuits and small sips of water.”",
     "instead": "“You can’t keep water down, so you need fluids through a drip today.”",
     "why": "RCOG GTG 69 (2024) advises against ginger for HG, and she cannot tolerate oral intake."
    },
    {
     "dont": "“Check your urine for ketones to see how dehydrated you are.”",
     "instead": "“The unit will check your pulse, blood pressure and blood salts.”",
     "why": "RCOG 2024: ketonuria is not an indicator of dehydration and should not be used to assess severity."
    },
    {
     "dont": "“It’s best to avoid medicines in pregnancy.”",
     "instead": "“The first-choice anti-sickness medicines have long safety records in pregnancy.”",
     "why": "Undertreatment harms mother and pregnancy; first-line antiemetics are recommended (RCOG GTG 69)."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Being dismissed",
     "t": "Many women with HG are told it is normal morning sickness. Naming the condition and acting on it rebuilds trust."
    },
    {
     "h": "Practical support",
     "t": "Childcare, transport and help at home matter while she is unwell. Ask who can support her."
    }
   ],
   "legal": [
    {
     "h": "Fit note",
     "t": "Offer a fit note. Pregnancy-related sickness absence is protected: under the Equality Act 2010, unfavourable treatment because of pregnancy-related illness is unlawful."
    },
    {
     "h": "Driving",
     "t": "She should not drive while dizzy and dehydrated."
    }
   ],
   "professional": [
    {
     "h": "Remote consultation limits",
     "t": "Hydration and observations cannot be assessed on video. When the decision depends on them, arrange same-day face-to-face assessment."
    },
    {
     "h": "Handover",
     "t": "Phone the unit and send a summary: gestation, PUQE answers, oral intolerance, urine output, no antiemetics so far, allergy status."
    }
   ],
   "community": [
    {
     "h": "Midwife and support",
     "t": "Ensure she is booked with a midwife. Pregnancy sickness charities offer peer support. Screen mood at each contact, and plan early treatment in any future pregnancy."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Unable to keep fluids or oral antiemetics down",
     "Confusion, double vision or ataxia (Wernicke’s)",
     "Haematemesis",
     "Abdominal pain, fever or urinary symptoms (mimics)",
     "Vaginal bleeding; unusually late onset",
     "Low mood or thoughts of ending the pregnancy or her life"
    ],
    "psychosocial": [
     "Fear for the baby",
     "Feeling dismissed as “just morning sickness”",
     "Exhaustion and low mood",
     "Fear of taking medicines"
    ],
    "ice": [
     "Idea: more than morning sickness",
     "Concern: the baby is not getting anything; no one will listen",
     "Expectation: help today"
    ]
   },
   "diagnosis": "“This is hyperemesis gravidarum, a severe form of pregnancy sickness. You’re dehydrated and need fluids and treatment today.”",
   "diagnosisLay": "“Pregnancy hormones cause sickness in most women, but in a few it becomes so severe that they can’t eat or drink. It’s not your fault and it’s treatable.”",
   "management": {
    "reflectIce": "“You were right that this isn’t ordinary morning sickness, and getting you treated is the best thing for you and the baby.”",
    "psychosocial": "Validate; address fear of medicines; screen mood; arrange transport; offer a fit note.",
    "sharedPlan": [
     "Same-day pregnancy day unit: IV fluids, parenteral antiemetic, thiamine (RCOG GTG 69, 2024)",
     "Bloods (U&E, and LFTs and TFTs if severe), urine culture, weight, ultrasound for viability and number",
     "Regular first-line antiemetic on discharge; second-line options if needed (MHRA January 2020; August 2013)"
    ],
    "safetyNet": [
     "Fainting, confusion, double vision, haematemesis, severe pain or bleeding: 999",
     "GP call after unit assessment; ongoing review",
     "Return the same day if unable to keep fluids or tablets down again"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Nausea and vomiting in pregnancy",
    "s": "Management protocol · RCOG GTG 69",
    "href": "management/nausea-vomiting-pregnancy.html"
   },
   {
    "ic": "💠",
    "t": "Thyroid disease in pregnancy",
    "s": "Management protocol",
    "href": "management/thyroid-pregnancy.html"
   },
   {
    "ic": "📋",
    "t": "Perinatal mental health",
    "s": "Case walkthrough",
    "href": "../cases/perinatal-mental-health.html"
   }
  ],
  "pitfalls": {
   "intro": "The trap is the label “morning sickness”. This station tests whether the candidate recognises that a woman who cannot keep water down needs fluids today, and whether they can do so warmly over video.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Managing at home with an oral antiemetic.",
     "why": "She cannot keep fluids down; RCOG GTG 69 uses ambulatory IV rehydration for this.",
     "fix": "Arrange same-day assessment at the pregnancy day unit."
    },
    {
     "dom": "tasks",
     "fail": "Using urine ketones to judge severity.",
     "why": "RCOG 2024: ketonuria is not an indicator of dehydration.",
     "fix": "Use PUQE, oral tolerance, clinical hydration and U&E."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting thiamine.",
     "why": "Prolonged vomiting risks Wernicke’s encephalopathy.",
     "fix": "Make sure thiamine is given, and ask about confusion and eye symptoms."
    },
    {
     "dom": "tasks",
     "fail": "Not considering mimics or molar or multiple pregnancy.",
     "why": "UTI, surgical causes and molar pregnancy can present this way; she has not had a scan.",
     "fix": "Ask about pain, fever and bleeding; request urine culture and ultrasound."
    },
    {
     "dom": "rto",
     "fail": "Reassuring about the baby without hearing her fear.",
     "why": "She feels unheard already.",
     "fix": "Ask what worries her most, then answer honestly."
    },
    {
     "dom": "gs",
     "fail": "No safety-net for the journey or follow-up after the unit.",
     "why": "She is dizzy and dehydrated, and HG often recurs after discharge.",
     "fix": "Give 999 red flags, advise not driving, and book a follow-up call."
    }
   ]
  }
 },
 "kawasaki-disease": {
  "stem": {
   "name": "Ivy Calderwood",
   "age": "3-year-old girl",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "Paracetamol and ibuprofen (over the counter) for the current fever"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "Unwell with a high temperature for six days. Mother has been told more than once that it is probably a virus.",
   "reason": "Video consultation with her mother: fever for six days not settling with Calpol or Nurofen, now a rash, red eyes, cracked lips and puffy red hands."
  },
  "knowledge": {
   "guideline": "[1] NICE NG143 (Fever in under 5s: assessment and initial management, 2019) · [2] NICE NG254 (Suspected sepsis in under 16s) · [3] BNFC, aspirin (under-16 contraindication; Kawasaki disease exception) · [4] Eleftheriou et al., Management of Kawasaki disease, Arch Dis Child 2014;99:74–83 (UK) · [5] American Heart Association scientific statement on Kawasaki disease (McCrindle et al., Circulation 2017, international)",
   "summary": "Fever lasting five days or more in a young child should make you think of Kawasaki disease. Ivy has the fever plus conjunctival injection, lip and tongue changes, a rash, hand changes and a neck node. She needs the paediatric team today, because early immunoglobulin treatment reduces the risk of coronary artery aneurysms.",
   "points": [
    {
     "h": "Think of it at five days",
     "t": "NICE NG143 [1]: be aware of the possibility of Kawasaki disease in children with fever that has lasted 5 days or longer. Fever of 5 days or more is also an amber feature in the NG143 traffic-light table. Since 2019 NG143 no longer requires 4 of the 5 principal features before you consider it, because early and incomplete cases often show fewer."
    },
    {
     "h": "The features to look for",
     "t": "NG143 [1] lists: bilateral conjunctival injection without exudate; erythema and cracking of the lips, strawberry tongue or erythema of the oral and pharyngeal mucosa; oedema and erythema of the hands or feet; polymorphous rash; cervical lymphadenopathy. Ask the parent about features since the fever began, as some may have faded by the time you see the child."
    },
    {
     "h": "Classic and incomplete",
     "t": "The classic research definition is fever of 5 days or more with at least 4 of the 5 principal features (AHA 2017 [5], international). Incomplete Kawasaki has fewer. NG143 [1]: children under 1 year may present with fewer features but may be at higher risk of coronary artery abnormalities."
    },
    {
     "h": "Why speed matters",
     "t": "Kawasaki disease is a medium-vessel vasculitis and the commonest cause of acquired heart disease in children in developed countries [4]. Untreated, it can cause coronary artery aneurysms. Intravenous immunoglobulin with aspirin, given early (ideally within the first 10 days of illness), reduces that risk [4][5]. Diagnosis, echocardiography and treatment belong to the paediatric team."
    },
    {
     "h": "Aspirin is a specialist exception",
     "t": "BNFC [3]: aspirin is not normally given to children under 16 because of Reye’s syndrome; Kawasaki disease is a recognised exception under specialist care. Parents must not start aspirin at home; doses and duration are set by the paediatric team."
    },
    {
     "h": "Mimics",
     "t": "Measles (coryza, cough, Koplik spots; check MMR status), scarlet fever (sore throat, sandpaper rash, responds to antibiotics), adenovirus and other viral exanthems, toxic shock, and drug reactions. None of these should delay a same-day paediatric assessment for a child with this cluster."
    },
    {
     "h": "Remote assessment and sepsis",
     "t": "A video call can show the eyes, lips, rash and hands, but not the heart rate, capillary refill or hydration properly. NG143 [1] and NG254 [2] ask for a traffic-light and sepsis risk assessment; any red feature or high-risk sepsis criterion means emergency transfer. Otherwise phone the on-call paediatrician for same-day assessment."
    },
    {
     "h": "Fever care",
     "t": "NG143 [1]: antipyretics are for distress, not to bring the temperature down. Do not give paracetamol and ibuprofen at the same time; consider alternating only if distress persists or recurs before the next dose is due. Encourage fluids. Doses per BNFC."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Ahmed. Can you both hear and see me? … And you’re Ivy’s mum? Thanks for bringing her. Tell me what’s been happening.",
    "dom": "rto",
    "why": "Checks connection and relationship to the child; open question"
   },
   {
    "who": "pt",
    "text": "I’m really worried about Ivy. She’s had a raging temperature for six days now. Calpol and Nurofen barely touch it. She’s got a blotchy rash, really red eyes but not gunky, cracked red lips, a tongue like a strawberry, and puffy red hands. She’s so miserable. Everyone says it’s just a virus, but six days?"
   },
   {
    "who": "dr",
    "text": "Six days of high fever is a long time, and you’ve described some very specific things. You were right to call. I want to go through it carefully, because I’m not sure this is just a virus either.",
    "dom": "rto",
    "why": "Validates the mother’s concern early"
   },
   {
    "phase": "Data gathering and red flags",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Right now, how is she? Is she awake and responding to you, or very sleepy and hard to rouse?",
    "dom": "tasks",
    "why": "NG143 traffic-light: activity and responsiveness first"
   },
   {
    "who": "pt",
    "text": "She’s awake but grizzly and clingy. She just wants to be held."
   },
   {
    "who": "dr",
    "text": "Is she drinking, and how many wet nappies or wees today? Any vomiting?",
    "dom": "tasks",
    "why": "Hydration screen"
   },
   {
    "who": "pt",
    "text": "She’s drinking a bit, less than normal. Fewer wees than usual, I think."
   },
   {
    "who": "dr",
    "text": "Is her breathing fast or noisy? Any cough, runny nose or sore throat?",
    "dom": "tasks",
    "why": "Respiratory red flags and measles or strep clues"
   },
   {
    "who": "pt",
    "text": "No cough or runny nose. Her breathing seems okay."
   },
   {
    "who": "dr",
    "text": "Could you hold the camera close to the rash? … Now press a clear glass firmly on a spot. Does it fade?",
    "dom": "tasks",
    "why": "Non-blanching rash check to exclude meningococcal disease"
   },
   {
    "who": "pt",
    "text": "Yes, it goes pale under the glass."
   },
   {
    "who": "dr",
    "text": "Thank you. Now her eyes, lips and tongue, please … and her hands and feet. I can see the redness in both eyes without any discharge, dry cracked lips, and her palms look red and puffy. Is there a lump in her neck? Feel just under her jaw.",
    "dom": "tasks",
    "why": "Uses video to look for the NG143 features"
   },
   {
    "who": "pt",
    "text": "There’s a lump on this side. It’s tender, she pulls away."
   },
   {
    "who": "dr",
    "text": "When did each of these start? Some come and go, so tell me even if they’ve faded.",
    "dom": "tasks",
    "why": "NG143: ask about features since fever onset"
   },
   {
    "who": "pt",
    "text": "The fever first. The eyes and rash a couple of days later, then the lips, and her hands swelled up yesterday."
   },
   {
    "who": "dr",
    "text": "Has she been in contact with anyone with measles or a rash illness? Do you know if her jabs are up to date, including MMR?",
    "dom": "tasks",
    "why": "Considers measles as the key mimic"
   },
   {
    "who": "pt",
    "text": "Not that I know of. I think she’s up to date, but I’d need to check her red book."
   },
   {
    "who": "dr",
    "text": "Has she had any medicines other than Calpol and Nurofen, or any health problems before this?",
    "dom": "tasks",
    "why": "Medication and past history for drug-reaction differential"
   },
   {
    "who": "pt",
    "text": "No, just those."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said everyone keeps calling it a virus. What have you been thinking yourself?",
    "dom": "rto",
    "why": "Explores the mother’s ideas"
   },
   {
    "who": "pt",
    "text": "I just feel something’s wrong. She’s never been this poorly, and I feel like nobody’s listening."
   },
   {
    "who": "dr",
    "text": "I’m listening, and your instinct fits what I’m seeing. What were you hoping I’d do today?",
    "dom": "rto",
    "why": "Acknowledges feeling dismissed; asks expectations"
   },
   {
    "who": "pt",
    "text": "Find out what it is. Something stronger for the fever, maybe."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s what I think. A fever lasting more than five days, with red eyes without discharge, red cracked lips and a strawberry tongue, a rash, red swollen hands and a lump in the neck, fits a condition called Kawasaki disease. It’s an inflammation of the blood vessels, and it happens mostly in young children.",
    "dom": "tasks",
    "why": "Names the likely diagnosis, linking each feature"
   },
   {
    "who": "pt",
    "text": "I’ve never heard of it. Is it serious?"
   },
   {
    "who": "dr",
    "text": "It can be, which is why I want to act today. It can affect the blood vessels that supply the heart. The good news is that treatment in hospital, usually a drip of immunoglobulin, works best when it starts early, and it greatly lowers that risk. We’re still within that window, so today matters.",
    "dom": "tasks",
    "why": "Explains coronary risk and time-critical IVIG without alarming"
   },
   {
    "who": "pt",
    "text": "Oh gosh. So she needs to go to hospital?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Yes. I’m going to phone the children’s doctors at the hospital as soon as we finish and ask them to see her this afternoon. They’ll examine her properly, do blood tests and a heart scan, and decide on treatment. I’ll tell them exactly what you’ve told me.",
    "dom": "tasks",
    "why": "Same-day paediatric referral by phone with a clear handover"
   },
   {
    "who": "pt",
    "text": "Can I drive her in myself?"
   },
   {
    "who": "dr",
    "text": "She’s awake and her rash fades under the glass, so taking her in yourself is fine. If she becomes floppy, very hard to wake, is breathing fast or struggling, or goes pale or blotchy, call 999 instead.",
    "dom": "tasks",
    "why": "Disposition matched to risk, with escalation criteria"
   },
   {
    "who": "pt",
    "text": "Okay. What should I give her for the fever?"
   },
   {
    "who": "dr",
    "text": "Keep giving Calpol or Nurofen only if she’s distressed, not just to bring the number down, and don’t give both at the same time. Sips of drink as often as she’ll take. Please don’t give her any aspirin yourself. Aspirin is only used in children by the hospital team, for this condition, under their supervision.",
    "dom": "tasks",
    "why": "NG143 antipyretic advice; BNFC aspirin caution"
   },
   {
    "who": "pt",
    "text": "I wouldn’t have known that."
   },
   {
    "who": "dr",
    "text": "And for you: you did exactly the right thing trusting your instinct. This isn’t overreacting. Is there anything that would make getting there this afternoon difficult?",
    "dom": "rto",
    "why": "Supports the parent and checks practicalities"
   },
   {
    "who": "pt",
    "text": "No, I’ll sort it. I just want her seen."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Can you tell me back the plan, so I know I’ve explained it well?",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "You’re ringing the hospital now. I take her in this afternoon. Calpol or Nurofen only if she’s upset, not both together, no aspirin. 999 if she goes floppy, won’t wake or can’t breathe properly."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll ring you back within the next half hour to confirm where to go and who to ask for. If they’re expecting her sooner, I’ll let you know.",
    "dom": "gs",
    "why": "Closes the loop: callback, named destination, clear time frame"
   },
   {
    "who": "pt",
    "text": "Thank you, doctor. Honestly, thank you for listening."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let the mother tell the whole story; confirmed who was on the call and that both could be seen and heard.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "The mother’s sense of being dismissed; her support at home; practicalities of getting to hospital today.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “six days”, “red eyes but not gunky”, “strawberry tongue” and “puffy red hands” as a pattern, not isolated symptoms.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (something is wrong despite “just a virus”), concern (nobody listening, missing something serious), expectation (an answer and stronger fever treatment).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Used the camera for eyes, lips, tongue, hands, rash (glass test) and neck; recognised that observations need a face-to-face paediatric assessment.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Kawasaki disease versus measles, scarlet fever, viral exanthem, toxic shock, drug reaction.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "NG143 traffic-light and NG254 sepsis features screened: responsiveness, breathing, hydration, non-blanching rash.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Probable Kawasaki disease: fever 5 days or more with the NG143 features.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day paediatric assessment arranged by phone; explained IVIG and echocardiography; no aspirin at home; antipyretics for distress only.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Checked for barriers to getting there today; acknowledged the mother’s distress; transport safe given current state.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 triggers named; callback within 30 minutes with destination; teach-back confirmed.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Urgent & unscheduled care",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Ivy Calderwood",
    "age": "3 years · female",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "OTC paracetamol and ibuprofen (current illness)"
    ],
    "allergy": "NKDA",
    "recent": "Fever for six days. Previously told “probably viral”.",
    "reason": "Video call with mother: “temperature for six days, rash, red eyes, cracked lips — Calpol isn’t touching it”."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Opening",
     "d": "Confirm who is present; open question; validate that six days of fever is a real concern."
    },
    {
     "t": "1–5",
     "h": "Red flags and features",
     "d": "Traffic-light features, hydration, glass test, then use the camera for eyes, lips, tongue, hands and neck. Timeline of each feature. Measles contacts and MMR."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Her instinct that something is wrong; feeling dismissed; what she hoped for."
    },
    {
     "t": "6–8",
     "h": "Name it",
     "d": "Kawasaki disease; the heart vessel risk; why early treatment matters."
    },
    {
     "t": "8–12",
     "h": "Act and close",
     "d": "Phone the paediatric team; safe transport and 999 triggers; antipyretics for distress only, no aspirin; teach-back; callback."
    }
   ],
   "wordPics": {
    "fail": "Calls it a virus again and advises alternating paracetamol and ibuprofen; never asks how long the fever has lasted in relation to the other features; no same-day referral; no 999 advice.",
    "pass": "Recognises that fever of 5 days or more with these features suggests Kawasaki disease, screens red flags, and arranges same-day paediatric assessment with clear safety-netting.",
    "exc": "All of the above, plus: uses the video camera deliberately (glass test, eyes, lips, hands, neck); explains the coronary risk and the benefit of early immunoglobulin calmly; validates the mother’s instinct; phones the paediatrician directly; warns against home aspirin; teach-back and a timed callback."
   },
   "avoid": [
    {
     "dont": "“It’s probably still a virus, give it another couple of days.”",
     "instead": "“Six days of fever with these changes needs the children’s team to see her today.”",
     "why": "Delay beyond the early treatment window increases the risk of coronary aneurysms."
    },
    {
     "dont": "“Alternate Calpol and Nurofen every two hours to keep the temperature down.”",
     "instead": "“Give one of them if she’s distressed; don’t give both at once.”",
     "why": "NG143: antipyretics are for distress, not to lower the number; alternate only if distress persists."
    },
    {
     "dont": "“She hasn’t got four of the five criteria yet, so it can’t be Kawasaki.”",
     "instead": "“She has a long fever with several features, and that’s enough to get her checked today.”",
     "why": "NG143 advises considering Kawasaki at 5 days of fever; incomplete disease is common, especially in infants."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "The dismissed parent",
     "t": "Parents repeatedly told “it’s a virus” may lose trust or stop seeking help. Taking the account seriously is safer and rebuilds confidence."
    },
    {
     "h": "Time off to care",
     "t": "Employees have a statutory right to reasonable unpaid time off to deal with an emergency involving a dependant (Employment Rights Act 1996, time off for dependants)."
    }
   ],
   "legal": [
    {
     "h": "Consent for a child",
     "t": "GMC 0–18 years guidance (2007): a person with parental responsibility can consent to examination and treatment for a young child; involve the child as far as her age allows."
    },
    {
     "h": "Remote examination",
     "t": "GMC Good medical practice (2024): recognise the limits of a video assessment and arrange face-to-face care when the history suggests it is needed."
    }
   ],
   "professional": [
    {
     "h": "Direct handover",
     "t": "Phone the on-call paediatrician rather than sending a letter; record the time of the call, what was said and the plan agreed."
    },
    {
     "h": "Learning from repeat attendances",
     "t": "A child seen several times for the same illness is a recognised risk for missed diagnosis. Consider a significant event review if earlier contacts missed the pattern."
    }
   ],
   "community": [
    {
     "h": "Follow-up after discharge",
     "t": "Children treated for Kawasaki disease need hospital follow-up with repeat echocardiography; the GP may see her again for recovery, peeling skin and questions about vaccines after immunoglobulin (check the Green Book live-vaccine timing with the paediatric team)."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Fever of 5 days or more (NG143 amber)",
     "Drowsy, floppy or hard to rouse",
     "Fast or laboured breathing",
     "Non-blanching rash",
     "Reduced fluid intake and fewer wet nappies",
     "Age under 1 with prolonged fever (fewer features, higher coronary risk)"
    ],
    "psychosocial": [
     "Mother feels dismissed after several contacts",
     "Support to get to hospital today",
     "Her distress at seeing Ivy so miserable"
    ],
    "ice": [
     "Idea: “something is wrong, it isn’t just a virus”",
     "Concern: that nobody is listening and something serious is being missed",
     "Expectation: an answer and something stronger for the fever"
    ]
   },
   "diagnosis": "“Six days of fever with red eyes without discharge, red cracked lips, a strawberry tongue, a rash, puffy red hands and a neck gland fits Kawasaki disease, an inflammation of the blood vessels in young children.”",
   "diagnosisLay": "“The body’s defences are inflaming the walls of blood vessels. The vessels that feed the heart can be affected, which is why the hospital gives a treatment early to calm it down and checks her heart with a scan.”",
   "management": {
    "reflectIce": "“You felt something was wrong, and you were right. This needs more than stronger fever medicine; it needs the children’s team today.”",
    "psychosocial": "Validate the mother; check who can go with her; confirm she can get there safely; promise and make a callback.",
    "sharedPlan": [
     "Phone the on-call paediatrician for same-day assessment; handover of fever duration and each feature",
     "Hospital: bloods, echocardiography, IV immunoglobulin with aspirin if confirmed (specialist decision)",
     "Antipyretics only for distress, not both together (NG143); fluids",
     "No aspirin at home (BNFC)"
    ],
    "safetyNet": [
     "999 if floppy, very hard to wake, breathing fast or struggling, pale or mottled, or a rash that does not fade",
     "Callback within 30 minutes with destination",
     "Hospital follow-up and echocardiography after treatment"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Fever in children pathway",
    "s": "Visual algorithm · traffic-light assessment",
    "href": "algorithms/fever-children.html"
   },
   {
    "ic": "🗺️",
    "t": "Maculopapular rash pathway",
    "s": "Visual algorithm · rash differential",
    "href": "algorithms/maculopapular-rash.html"
   },
   {
    "ic": "🗺️",
    "t": "Red eye pathway",
    "s": "Visual algorithm · conjunctival injection",
    "href": "algorithms/red-eye.html"
   },
   {
    "ic": "🗺️",
    "t": "Neck lump pathway",
    "s": "Visual algorithm · cervical lymphadenopathy",
    "href": "algorithms/neck-lump.html"
   }
  ],
  "pitfalls": {
   "intro": "The trap is joining the chorus of “just a virus”. The marks sit in noticing the fever duration, looking for the features on camera, and getting her seen by paediatrics today.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting the viral label without asking how long the fever has lasted.",
     "why": "NG143 asks you to think of Kawasaki disease at 5 days of fever.",
     "fix": "Ask the duration first and say out loud why it matters."
    },
    {
     "dom": "tasks",
     "fail": "Waiting for all 4 of 5 features before acting.",
     "why": "Incomplete Kawasaki is common and infants are at higher coronary risk; NG143 dropped the 4-feature requirement.",
     "fix": "Fever of 5 days plus any of the features means same-day paediatric review."
    },
    {
     "dom": "tasks",
     "fail": "No red-flag or sepsis screen on a video call.",
     "why": "NG143 and NG254 features decide between 999 and a same-day slot.",
     "fix": "Responsiveness, breathing, hydration and a glass test before the plan."
    },
    {
     "dom": "tasks",
     "fail": "Advising routine alternating antipyretics or suggesting aspirin.",
     "why": "NG143 says antipyretics are for distress; BNFC restricts aspirin in under-16s to specialist use.",
     "fix": "One antipyretic for distress; no aspirin at home."
    },
    {
     "dom": "rto",
     "fail": "Brushing off the mother’s frustration.",
     "why": "Her concern is the hidden agenda and the reason she called.",
     "fix": "“You were right to push. Your instinct fits what I see.”"
    },
    {
     "dom": "gs",
     "fail": "“Go to A&E if you’re worried.”",
     "why": "Vague advice and no handover leave the family to explain it all again.",
     "fix": "Phone the paediatrician, give specific 999 triggers, and call back with the plan."
    }
   ]
  }
 },
 "lichen-planus": {
  "stem": {
   "name": "Diane Forsyth",
   "age": "49-year-old woman",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "No previous skin or mouth consultations recorded.",
   "reason": "Very itchy purple bumps on the inner wrists and shins, and now sore white lacy streaks inside the cheeks."
  },
  "knowledge": {
   "guideline": "[1] British Association of Dermatologists, Lichen planus patient information leaflet (2024) · [2] British Association of Dermatologists, Oral lichen planus patient information leaflet (2019) · [3] Primary Care Dermatology Society, lichen planus clinical guidance (accessed 2026) · [4] NICE NG12 (updated April 2026), oral cancer recommendations · [5] BNF, topical corticosteroids (potency and quantities)",
   "summary": "Intensely itchy, flat-topped, violet papules with fine white lines on the wrists and shins, together with white lacy streaks on the inner cheeks, is lichen planus. Treat the skin with a potent topical steroid, check her medicines for a lichenoid drug reaction, consider hepatitis C testing, and arrange dental or oral medicine follow-up because sore oral lichen planus carries a small long-term cancer risk.",
   "points": [
    {
     "h": "Recognise the skin disease",
     "t": "Itchy, shiny, flat-topped, polygonal, purple (violaceous) papules, often with fine white lines on the surface (Wickham striae), typically on the flexor wrists, forearms, shins and ankles [1][3]. New lesions can appear in scratches or scars (Koebner phenomenon). It heals leaving brown marks, especially in darker skin."
    },
    {
     "h": "Check other sites",
     "t": "Mouth: white lacy (reticular) streaks on the inner cheeks, sometimes red, sore or ulcerated (erosive) [2]. Also ask about and look at the nails (thinning, ridging, pterygium), scalp (patchy hair loss with scarring, lichen planopilaris) and, sensitively, the genitals, where erosive disease can scar. These sites need earlier specialist input."
    },
    {
     "h": "Causes and associations",
     "t": "Most cases have no identifiable cause [1]. Review all medicines, including over-the-counter ones: a lichenoid drug eruption can look identical, and culprit drugs include some antihypertensives, antimalarials and gold. Some oral lichen planus is linked to chronic hepatitis C [2], so consider testing with consent. Dental amalgam next to oral lesions can cause a local lichenoid reaction."
    },
    {
     "h": "Treating the skin",
     "t": "A potent or very potent topical steroid is usually needed, because lichen planus often does not respond to weaker ones [1][5]; use a moderate one in skin folds. Add emollients and a sedating antihistamine at night if itch disturbs sleep (doses per BNF). Widespread, severe or resistant disease needs dermatology (phototherapy or systemic treatment)."
    },
    {
     "h": "Treating the mouth",
     "t": "Topical steroids as mouthwashes, sprays or pastes help most people with oral lichen planus [2]; choice and dose per BNF or oral medicine advice. Avoid foods that sting, keep teeth and gums healthy with regular dental care, and stop smoking and limit alcohol, which also reduces oral cancer risk."
    },
    {
     "h": "Course",
     "t": "Skin lichen planus usually settles over months to a year or two, though it can recur [1]. Oral lichen planus tends to last longer, often for years [2]."
    },
    {
     "h": "The small cancer risk",
     "t": "BAD [2]: oral lichen planus carries about a 1% risk of cancerous change over 10 years, so long-term review by a dentist or oral medicine team is advised. Erosive genital lichen planus also needs specialist follow-up. NICE NG12 (updated April 2026): consider a suspected cancer pathway referral for unexplained oral ulceration lasting more than 3 weeks, and an urgent dental referral for a lump, or a red or red and white patch consistent with erythroplakia or erythroleukoplakia."
    },
    {
     "h": "Not contagious",
     "t": "Lichen planus is not infectious and cannot be passed on [1]. Say so early; it is a common unspoken worry."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Forsyth, I’m Dr Nwosu. Come in. What can I do for you today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "Doctor, I’ve had these really itchy purple bumps come up on the insides of my wrists and my shins. They’ve got tiny white lines on them. And now the inside of my cheeks has gone sore with white lacy streaks. What is this, and is it serious?"
   },
   {
    "who": "dr",
    "text": "That sounds miserable, and I can see why you want answers. I’ll ask a few questions, take a proper look, and then explain what I think it is.",
    "dom": "rto",
    "why": "Acknowledges and signposts"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "How long have the bumps been there, and how bad is the itch? Is it affecting your sleep?",
    "dom": "tasks",
    "why": "Duration and impact of itch"
   },
   {
    "who": "pt",
    "text": "I couldn’t give you an exact date. The itch is intense, though. It’s the worst part."
   },
   {
    "who": "dr",
    "text": "And your mouth: is it sore all the time or with certain foods? Any ulcers or raw areas that don’t heal?",
    "dom": "tasks",
    "why": "Screens erosive disease and non-healing ulceration (NICE NG12 (updated April 2026))"
   },
   {
    "who": "pt",
    "text": "It’s sore, especially when I eat. I haven’t noticed ulcers as such."
   },
   {
    "who": "dr",
    "text": "Have you noticed any changes in your nails, patches of hair loss on your scalp, or any soreness in the genital area? I ask because this kind of rash can affect those places too.",
    "dom": "tasks",
    "why": "Nail, scalp and genital involvement asked sensitively"
   },
   {
    "who": "pt",
    "text": "Not that I’ve noticed."
   },
   {
    "who": "dr",
    "text": "Have you started any new medicines, including anything from the chemist, in the last few months?",
    "dom": "tasks",
    "why": "Screens lichenoid drug eruption"
   },
   {
    "who": "pt",
    "text": "No, nothing new."
   },
   {
    "who": "dr",
    "text": "Any other health problems I should know about, for example liver problems?",
    "dom": "tasks",
    "why": "Past history including liver disease"
   },
   {
    "who": "pt",
    "text": "No, I’m generally well."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What have you been thinking it might be?",
    "dom": "rto",
    "why": "Explores ideas"
   },
   {
    "who": "pt",
    "text": "I didn’t know. I wondered if it was something catching, or something serious because it’s in my mouth too."
   },
   {
    "who": "dr",
    "text": "Those are really fair worries. What were you hoping we could do today?",
    "dom": "rto",
    "why": "Validates concerns; asks expectations"
   },
   {
    "who": "pt",
    "text": "Know what it is and stop the itching."
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "May I look at your wrists, shins and inside your mouth? … These are flat-topped, shiny purple bumps with fine white lines on top, and inside your cheeks there’s a white lacy pattern. I’ll also look at your nails and scalp while I’m here.",
    "dom": "tasks",
    "why": "Examines skin, mouth, nails, scalp with consent"
   },
   {
    "who": "pt",
    "text": "What is it then?"
   },
   {
    "who": "dr",
    "text": "This is lichen planus. It’s a condition where the immune system causes inflammation in the skin and the lining of the mouth. The pattern you have is typical. It isn’t catching, you can’t pass it on to anyone, and it isn’t cancer.",
    "dom": "tasks",
    "why": "Names diagnosis; addresses contagion and cancer worries"
   },
   {
    "who": "pt",
    "text": "That’s a relief. Will it go away?"
   },
   {
    "who": "dr",
    "text": "On the skin it usually settles over months, sometimes a year or two, and it can leave brownish marks that fade slowly. In the mouth it tends to last longer.",
    "dom": "tasks",
    "why": "Realistic course"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "For the skin, a strong steroid ointment works best, because weaker ones often don’t touch it. You apply it just to the bumps, and I’ll tell you how long to use it for. A good moisturiser helps, and an antihistamine at night can help you sleep.",
    "dom": "tasks",
    "why": "Potent topical steroid, emollient, sedating antihistamine"
   },
   {
    "who": "pt",
    "text": "Is a strong steroid safe?"
   },
   {
    "who": "dr",
    "text": "Used on these spots for a limited time, yes. Thinning of the skin comes with long use on the same area, which is why we plan the course and review it. I wouldn’t use it on your face or in skin folds.",
    "dom": "rto",
    "why": "Addresses steroid fear with a balanced answer"
   },
   {
    "who": "pt",
    "text": "Okay. And my mouth?"
   },
   {
    "who": "dr",
    "text": "For the mouth there are steroid mouthwashes or sprays that help most people. Avoiding spicy food and keeping your teeth and gums healthy helps too. I’d also like your dentist to keep an eye on it over time. In a small number of people, about 1 in 100 over ten years, long-standing mouth lichen planus can change into a cancer, so regular checks are sensible, not a reason to panic.",
    "dom": "tasks",
    "why": "Oral treatment and honest, proportionate cancer-risk counselling"
   },
   {
    "who": "pt",
    "text": "I’ll make sure I go."
   },
   {
    "who": "dr",
    "text": "Two more things. I’d like to offer a blood test for hepatitis C, because it’s occasionally linked with this in the mouth. It’s a routine check, not because I think you’re at risk. Is that okay? And if you smoke or drink much, cutting down helps protect the mouth.",
    "dom": "tasks",
    "why": "Hepatitis C testing with consent; modifiable oral cancer risks"
   },
   {
    "who": "pt",
    "text": "Yes, that’s fine."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Come back if any mouth ulcer or sore patch doesn’t heal within three weeks, if you notice a lump or a red patch in your mouth, if your nails or scalp are affected, or if the skin isn’t improving after the steroid course. I’ll see you in about a month to check how it’s going.",
    "dom": "gs",
    "why": "NICE NG12 (updated April 2026)-aligned safety-net; review date"
   },
   {
    "who": "pt",
    "text": "So: strong cream on the spots, mouthwash, blood test, dentist checks, and come back if anything in my mouth doesn’t heal."
   },
   {
    "who": "dr",
    "text": "Exactly. And remember, it isn’t catching.",
    "dom": "gs",
    "why": "Teach-back confirmed; reinforces key reassurance"
   },
   {
    "who": "pt",
    "text": "Thank you. That’s really put my mind at rest."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her describe skin and mouth fully before asking.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Sleep disturbed by itch; worry about infecting others; ability to attend dental reviews.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “tiny white lines” (Wickham striae) and the mouth changes as one diagnosis.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (catching, or serious because of the mouth), concern (cancer), expectation (a name and relief from itch).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Examined skin, mouth, nails and scalp with consent; offered hepatitis C test; biopsy or specialist review if uncertain.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Lichen planus versus lichenoid drug eruption, eczema, psoriasis, oral candidiasis or leukoplakia.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for non-healing oral ulceration and red patches (NICE NG12 (updated April 2026)); erosive and genital disease.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Lichen planus of skin and oral mucosa.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Potent topical steroid for skin, emollient, antihistamine; topical steroid for mouth; dental or oral medicine follow-up; hepatitis C test.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Medicines reviewed for lichenoid reaction; smoking and alcohol advice; steroid safety concerns addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Return if oral ulcer or patch persists beyond 3 weeks, nails or scalp involved, or no response; review in about a month.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Diane Forsyth",
    "age": "49 years · female",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "Nil recorded"
    ],
    "allergy": "NKDA",
    "recent": "No previous skin or mouth consultations.",
    "reason": "“Itchy purple bumps on my wrists and shins, and sore white streaks in my mouth — is it serious?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Opening",
     "d": "Open question; let her describe the skin and mouth."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Duration, itch and sleep, mouth soreness and non-healing ulcers, nails, scalp, genital symptoms, new medicines, liver history."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Is it catching? Is it serious because it is in the mouth? Wants a name and relief."
    },
    {
     "t": "6–8",
     "h": "Examine and name it",
     "d": "Skin, mouth, nails, scalp. Lichen planus; not contagious; not cancer; the likely course."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Potent steroid, antihistamine, oral steroid preparation, dental follow-up with the 1% figure, hepatitis C test, NICE NG12 (updated April 2026) safety-net, review in a month."
    }
   ],
   "wordPics": {
    "fail": "Calls it eczema and gives hydrocortisone; never looks in the mouth or asks about medicines; either ignores the oral cancer risk or frightens her with it; no follow-up.",
    "pass": "Recognises lichen planus, gives a potent topical steroid, treats the mouth, reviews medicines, reassures that it is not contagious, and arranges dental follow-up.",
    "exc": "All of the above, plus: checks nails, scalp and genital symptoms sensitively; explains the cancer risk as a proportionate figure; offers hepatitis C testing with a clear reason; gives an NICE NG12 (updated April 2026)-aligned mouth safety-net; addresses steroid worries; teach-back and review date."
   },
   "avoid": [
    {
     "dont": "“It’s just a bit of eczema, try hydrocortisone.”",
     "instead": "“This is lichen planus, and it usually needs a strong steroid ointment.”",
     "why": "Mild steroids rarely control lichen planus; the diagnosis also changes follow-up."
    },
    {
     "dont": "“Mouth lichen planus can turn into cancer.”",
     "instead": "“About 1 in 100 over ten years, so we keep an eye on it with regular dental checks.”",
     "why": "An unquantified cancer warning frightens without helping her act."
    },
    {
     "dont": "“We should test you for hepatitis because of your lifestyle.”",
     "instead": "“It’s occasionally linked with this rash, so I offer the test routinely.”",
     "why": "Explains the reason without implying judgement."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Itch and sleep",
     "t": "Severe itch disrupts sleep and concentration. Asking about impact helps target treatment such as a night-time antihistamine."
    },
    {
     "h": "Appearance and stigma",
     "t": "Visible purple patches and marks afterwards can cause embarrassment; saying clearly that it is not contagious helps at work and socially."
    }
   ],
   "legal": [
    {
     "h": "Consent for blood-borne virus testing",
     "t": "GMC Decision making and consent (2020): explain why a hepatitis C test is offered and what a positive result would mean before testing."
    }
   ],
   "professional": [
    {
     "h": "Shared care with dentistry",
     "t": "Long-term oral lichen planus review usually sits with the dentist or oral medicine. Write it into the plan and check she has access to a dentist."
    },
    {
     "h": "Topical steroid stewardship",
     "t": "Prescribe potent steroids with clear instructions on where, how much and for how long, and review, following the BNF potency guidance."
    }
   ],
   "community": [
    {
     "h": "NHS dental access",
     "t": "If she has no dentist, NHS 111 or local dental access services can help her find one for monitoring."
    },
    {
     "h": "Patient information",
     "t": "BAD patient information leaflets on lichen planus and oral lichen planus give reliable written information to take away."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Mouth ulcer or sore area not healing after 3 weeks (NICE NG12 (updated April 2026))",
     "Red or red and white patch, or a lump, in the mouth",
     "Erosive genital symptoms",
     "Scalp hair loss with scarring or nail destruction",
     "Widespread or rapidly spreading rash"
    ],
    "psychosocial": [
     "Sleep disturbed by itch",
     "Worry about infecting others",
     "Access to a dentist for long-term review"
    ],
    "ice": [
     "Idea: something catching, or serious because it is in the mouth",
     "Concern: cancer",
     "Expectation: a diagnosis and relief from the itch"
    ]
   },
   "diagnosis": "“This is lichen planus: the itchy, flat-topped purple bumps with fine white lines on your wrists and shins, and the lacy white pattern in your cheeks, are typical.”",
   "diagnosisLay": "“Your immune system is causing inflammation in the top layer of the skin and the lining of the mouth. It’s not an infection and it can’t be passed on. On the skin it usually burns itself out over months.”",
   "management": {
    "reflectIce": "“You wondered if it was catching or serious because it’s in your mouth. It isn’t catching and it isn’t cancer, but the mouth deserves regular checks.”",
    "psychosocial": "Address sleep and itch; reassure about contagion; check dental access; explain steroid safety.",
    "sharedPlan": [
     "Potent topical steroid to skin lesions, moderate in folds; emollient; sedating antihistamine at night (per BNF)",
     "Topical steroid mouthwash or spray for the mouth; avoid irritant foods; good oral hygiene",
     "Review medicines for lichenoid drug eruption; hepatitis C test with consent",
     "Dental or oral medicine long-term review; dermatology if extensive, erosive, nail or scalp scarring, or not responding"
    ],
    "safetyNet": [
     "Return if any oral ulcer or patch persists beyond 3 weeks, or a lump or red patch appears",
     "Return if nails, scalp or genitals become involved",
     "Review in about a month for response",
     "Regular dental checks for oral disease"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Widespread itch pathway",
    "s": "Visual algorithm",
    "href": "algorithms/widespread-itch.html"
   },
   {
    "ic": "📋",
    "t": "Pruritus",
    "s": "Case walkthrough",
    "href": "../cases/pruritus.html"
   },
   {
    "ic": "🗺️",
    "t": "Sore mouth and tongue pathway",
    "s": "Visual algorithm · oral mucosal disease",
    "href": "algorithms/sore-mouth-tongue.html"
   },
   {
    "ic": "🗺️",
    "t": "Mouth ulcers pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) oral criteria",
    "href": "algorithms/mouth-ulcers.html"
   },
   {
    "ic": "💠",
    "t": "Vulvar disorders protocol",
    "s": "Genital lichen planus",
    "href": "management/vulvar-disorders.html"
   }
  ],
  "pitfalls": {
   "intro": "The trap is treating the itch as eczema and missing the mouth. The marks sit in naming lichen planus, treating it at the right strength, and setting up proportionate oral follow-up.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing a mild steroid.",
     "why": "BAD: lichen planus often does not respond to weaker steroids.",
     "fix": "Potent topical steroid to the lesions with clear instructions and review."
    },
    {
     "dom": "tasks",
     "fail": "Not looking in the mouth, at the nails or the scalp.",
     "why": "Other sites change management and follow-up.",
     "fix": "Examine them and ask about genital symptoms sensitively."
    },
    {
     "dom": "tasks",
     "fail": "Skipping the medication review.",
     "why": "A lichenoid drug eruption looks identical and settles when the drug is stopped.",
     "fix": "Ask about all medicines, including over-the-counter ones."
    },
    {
     "dom": "tasks",
     "fail": "No plan for the oral disease.",
     "why": "BAD: about 1% risk of cancerous change over 10 years; NICE NG12 (updated April 2026) sets criteria for non-healing ulcers and red patches.",
     "fix": "Dental or oral medicine review and a 3-week non-healing safety-net."
    },
    {
     "dom": "rto",
     "fail": "Missing her worry that it is catching.",
     "why": "It is a common unspoken fear.",
     "fix": "“It isn’t catching, and you can’t pass it on.”"
    },
    {
     "dom": "gs",
     "fail": "No review date.",
     "why": "Potent steroids need review and response should be checked.",
     "fix": "Review in about a month; clear return criteria."
    }
   ]
  }
 },
 "molluscum-contagiosum": {
  "stem": {
   "name": "Leo",
   "age": "5-year-old boy",
   "pmh": [
    "Nothing significant recorded"
   ],
   "meds": [
    "None recorded"
   ],
   "allergy": "None recorded",
   "recent": "Mother reports a spreading cluster of small pearly bumps under the arm and on the tummy, with an itchy eczema-like patch around some of them. Otherwise well.",
   "reason": "“How do we get rid of them? Should he stay off school or swimming?”"
  },
  "knowledge": {
   "guideline": "[1] British Association of Dermatologists (BAD) patient information leaflet: molluscum contagiosum (updated July 2020) · [2] UKHSA Health protection in children and young people settings, including education: exclusion table · [3] NICE CG57 Atopic eczema in under 12s (2007, updated 2023) · [4] BNFC: hydrocortisone (topical), emollients · [5] GMC 0–18 years (2007, updated 2018)",
   "summary": "Clusters of pearly, umbilicated papules in a well child are molluscum contagiosum, a common poxvirus infection. It clears by itself, usually within 6 to 18 months and sometimes longer, so in a healthy child the plan is reassurance, simple advice and treating any surrounding eczema. No exclusion from school or swimming. Treatment or referral is for the few with specific problems.",
   "points": [
    {
     "h": "Recognise it",
     "t": "Small, firm, dome-shaped, pearly or skin-coloured papules with a central dimple, often in clusters on the trunk, armpits and skin folds. Spread by skin contact, shared towels and by scratching, which moves the virus to new skin. An eczema-like reaction around the spots is common and does not mean infection."
    },
    {
     "h": "Natural history",
     "t": "BAD [1]: the spots usually clear on their own within 6 to 18 months, although new ones can appear while old ones fade and some children take longer. Spots often go red and inflamed just before they clear, which is a sign the immune system is dealing with them, not infection."
    },
    {
     "h": "Why not treat routinely",
     "t": "BAD [1]: treatment is not usually needed. Freezing, scraping or irritant creams are painful for a young child and can scar, while the untreated spots usually heal without marks. Picking and squeezing also risk scarring and secondary infection."
    },
    {
     "h": "School, nursery and swimming",
     "t": "UKHSA [2]: no exclusion period for molluscum contagiosum. Children can go to school and swim. Covering spots and not sharing towels reduce spread."
    },
    {
     "h": "The eczema around the spots",
     "t": "Treat it as eczema: regular emollients and, for an inflamed itchy patch, a short course of a mild topical corticosteroid such as hydrocortisone 1%, dose per BNFC [3,4]. Settling the itch cuts scratching and spread."
    },
    {
     "h": "When to think again",
     "t": "Consider referral or specialist advice for a child who is immunosuppressed or has very extensive or atypical lesions, spots on the eyelid margin with a red or sore eye (ophthalmology), significant secondary bacterial infection, or genital lesions, where transmission is usually autoinoculation in young children but the whole picture is considered with safeguarding in mind [5]."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Shah. Come in, both of you. Hello Leo. What’s brought you in today?",
    "dom": "rto",
    "why": "Greets parent and child; open question"
   },
   {
    "who": "pt",
    "text": "Leo’s got these little pearly bumps in a cluster under his arm and on his tummy. Some have a tiny dimple in the middle. They’re spreading a bit and one area’s gone a bit eczema-y. How do we get rid of them? Should he stay off school or swimming?"
   },
   {
    "who": "dr",
    "text": "Thanks, that’s a clear description. You’ve got two questions there: what they are and how to get rid of them, and school and swimming. I’ll make sure we answer both. Can I ask a few things first?",
    "dom": "rto",
    "why": "Summarises and agrees the agenda"
   },
   {
    "phase": "History",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When did you first notice them, and how have they changed since?",
    "dom": "tasks",
    "why": "Onset and course"
   },
   {
    "who": "pt",
    "text": "A couple of months ago, just a few. Now there are more."
   },
   {
    "who": "dr",
    "text": "Do they bother Leo? Itching, soreness, or does he pick at them?",
    "dom": "tasks",
    "why": "Symptoms and scratching, which drives spread"
   },
   {
    "who": "pt",
    "text": "The patch round them is itchy and he scratches it. The bumps themselves don’t seem to hurt."
   },
   {
    "who": "dr",
    "text": "Has he been well in himself: eating, playing, no fevers? And does he have any medical conditions or take any medicines regularly?",
    "dom": "tasks",
    "why": "General health and immune status"
   },
   {
    "who": "pt",
    "text": "He’s been completely fine. Nothing like that, and no medicines."
   },
   {
    "who": "dr",
    "text": "Are any on his face or near his eyes, or in the nappy or private area? And are any hot, very red, weeping pus or spreading redness?",
    "dom": "tasks",
    "why": "Screens for eyelid, genital and infected lesions"
   },
   {
    "who": "pt",
    "text": "No, just under his arm and on his tummy. A couple look a bit red."
   },
   {
    "who": "dr",
    "text": "How is all this affecting things at home and for Leo? Is anyone making comments?",
    "dom": "rto",
    "why": "Explores impact on child and family"
   },
   {
    "who": "pt",
    "text": "He doesn’t care. I just don’t like how they look, and I don’t want him passing it round."
   },
   {
    "phase": "Examination",
    "clock": "4–5 min",
    "who": "dr",
    "text": "Leo, can I have a quick look at your tummy and under your arm? It won’t hurt.",
    "dom": "tasks",
    "why": "Examines with the child’s cooperation"
   },
   {
    "who": "dr",
    "text": "There’s a cluster of small, shiny, dome-shaped bumps, and several have that little dimple in the middle. Around a few there’s a dry pink eczema patch. A couple are a bit red, which often happens when they’re starting to clear. Nothing looks infected, and his eyes and face are clear.",
    "dom": "tasks",
    "why": "Describes classic umbilicated papules and molluscum dermatitis; excludes infection"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "Before I explain, what did you think they might be?",
    "dom": "rto",
    "why": "Elicits ideas"
   },
   {
    "who": "pt",
    "text": "Some sort of wart? I thought you’d freeze them off."
   },
   {
    "who": "dr",
    "text": "And is there anything worrying you about them, beyond how they look?",
    "dom": "rto",
    "why": "Elicits concerns"
   },
   {
    "who": "pt",
    "text": "Just that they keep spreading, and whether he should be at school."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "You’re close. They’re called molluscum contagiosum. It’s a very common, harmless skin virus in young children, a bit like warts. The dimple in the middle is the giveaway.",
    "dom": "tasks",
    "why": "Names the diagnosis and links to her idea"
   },
   {
    "who": "dr",
    "text": "The good news is that the body clears it by itself. It usually takes somewhere between six months and a year and a half, and sometimes a little longer. New spots can pop up while others go, so it can look as if it’s spreading for a while.",
    "dom": "tasks",
    "why": "Natural history with honest timescale (BAD)"
   },
   {
    "who": "pt",
    "text": "That long? Can’t you just freeze them?"
   },
   {
    "who": "dr",
    "text": "I understand wanting them gone. Freezing or scraping them is painful for a five-year-old, needs doing lots of times, and can leave marks, whereas left alone they usually heal without scars. So for a healthy child, the kinder option is to let them go by themselves.",
    "dom": "tasks",
    "why": "Explains harm versus benefit of treatment"
   },
   {
    "who": "pt",
    "text": "I suppose I don’t want him upset every week."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what does help. The eczema patch is making him scratch, and scratching spreads the virus. So I’ll suggest a moisturiser several times a day, and a mild steroid cream, hydrocortisone, on the pink itchy patch for a short time. That settles the itch.",
    "dom": "tasks",
    "why": "Treats molluscum dermatitis (CG57, BNFC)"
   },
   {
    "who": "dr",
    "text": "Try to stop him squeezing or picking them, keep his nails short, give him his own towel, and avoid sharing baths where you can. You could pop a plaster over any that weep.",
    "dom": "tasks",
    "why": "Practical measures to reduce spread"
   },
   {
    "who": "pt",
    "text": "And school? Swimming?"
   },
   {
    "who": "dr",
    "text": "He doesn’t need any time off school, and he can carry on swimming. The national guidance for schools says no one needs to stay away with molluscum. Covering the spots with a waterproof plaster or a swim top and using his own towel is enough.",
    "dom": "tasks",
    "why": "Answers directly: no exclusion (UKHSA)"
   },
   {
    "who": "pt",
    "text": "Oh, that’s a relief. I thought he’d have to miss swimming lessons."
   },
   {
    "who": "dr",
    "text": "Does that plan feel all right to you? Is there anything you’d find hard to do?",
    "dom": "rto",
    "why": "Checks agreement and barriers"
   },
   {
    "who": "pt",
    "text": "No, that sounds doable."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Please bring him back if a spot becomes hot, swollen, very sore or oozes pus, which could mean infection; if spots appear on his eyelids and his eye goes red or sore; if they spread a lot despite this; or if the eczema doesn’t settle with the cream. Otherwise, patience is the treatment. Just so I know I’ve explained it well, what will you do at home?",
    "dom": "gs",
    "why": "Safety-net for infection, eye involvement and eczema; teach-back"
   },
   {
    "who": "pt",
    "text": "Moisturiser, the steroid cream on the itchy patch for a short while, stop him picking, his own towel. School and swimming as normal, and come back if one gets infected or near his eye."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll give you a printed leaflet too. Bye, Leo, well done for letting me look.",
    "dom": "gs",
    "why": "Written information; warm close"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; agreed both of the mother’s questions (removal, school and swimming) as the agenda.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Impact on Leo and the family, and the mother’s dislike of the appearance and worry about passing it on.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the itchy eczema patch and scratching as the driver of spread, and the red spots as a sign of clearance.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a wart to be frozen), concern (spreading, school), expectation (removal; time off school).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Examined the lesions, looked for infection and checked the face, eyelids and genital area by history.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Molluscum versus warts, chickenpox, folliculitis and infected lesions.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about immune status, general health, eyelid and genital lesions, and signs of bacterial infection.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named molluscum contagiosum and explained its self-limiting course with an honest timescale.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "No routine destructive treatment, with harm versus benefit explained; practical anti-spread advice; no school or swimming exclusion.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Treated the surrounding eczema with emollient and a short course of mild topical steroid to break the itch–scratch cycle.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Return if infected, eyelid involvement with a red eye, marked spread or eczema not settling; teach-back and leaflet.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Leo",
    "age": "5 years · male",
    "pmh": [
     "Nil significant"
    ],
    "meds": [
     "None"
    ],
    "allergy": "None recorded",
    "recent": "Cluster of pearly bumps, axilla and trunk; itchy patch around some.",
    "reason": "“How do we get rid of them? Should he stay off school?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Hear both questions: removal, and school and swimming. Name them as the agenda."
    },
    {
     "t": "1–5",
     "h": "History and look",
     "d": "Onset, itch and scratching, general health and immune status, eyelid or genital spots, infection. Examine and describe the dimpled papules."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "She thinks they are warts to be frozen and worries about spread and school."
    },
    {
     "t": "6–11",
     "h": "Explain and plan",
     "d": "Name molluscum; clears in 6 to 18 months; why freezing is not kinder; treat the eczema; no picking, own towel; no exclusion."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "Infection, eye involvement, marked spread, eczema not settling. Teach-back, leaflet."
    }
   ],
   "wordPics": {
    "fail": "Freezes or prescribes an irritant treatment on request without discussing harm, or dismisses the mother with “it’ll go” and no advice; advises time off school or no swimming; ignores the itchy eczema.",
    "pass": "Recognises molluscum, explains that it clears on its own, advises against routine treatment, gives anti-spread advice, confirms school and swimming are fine and treats the eczema.",
    "exc": "All of the above, plus: builds on her own idea that it is wart-like; gives an honest 6 to 18 month timescale; explains harm versus benefit so she chooses watchful waiting; links the eczema to scratching and spread; screens for immune problems, eyelid and genital lesions; checks the plan with teach-back."
   },
   "avoid": [
    {
     "dont": "“They’re nothing, just leave them.”",
     "instead": "“They’re harmless and clear by themselves, and here’s what will help in the meantime.”",
     "why": "Dismissive reassurance leaves the parent without a plan and with her concerns unaddressed."
    },
    {
     "dont": "“Keep him off school and out of the pool until they’ve gone.”",
     "instead": "“He can go to school and swim as normal. Cover them and use his own towel.”",
     "why": "UKHSA sets no exclusion for molluscum; months of exclusion would harm him."
    },
    {
     "dont": "“We can freeze them off today.”",
     "instead": "“Freezing hurts, often needs repeating and can scar, whereas they usually heal cleanly on their own.”",
     "why": "Destructive treatment in a healthy young child causes pain and scarring for little benefit."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family life",
     "t": "Parents often feel judged about skin conditions. Practical, non-blaming advice on towels, baths and picking works better than a list of restrictions."
    },
    {
     "h": "Child’s experience",
     "t": "A five-year-old should be spared painful procedures for a condition that will heal. Involve him in the examination and praise him."
    }
   ],
   "legal": [
    {
     "h": "Consent and the child’s interests",
     "t": "The parent consents for a young child, but the doctor must act in the child’s best interests. Declining a painful, low-benefit procedure and explaining why is part of that (GMC 0–18 years)."
    },
    {
     "h": "Genital lesions",
     "t": "Molluscum on the genitals of a young child usually comes from the child’s own spots, but the history, the whole child and any other concerns are considered, following local safeguarding procedures if anything else is worrying (GMC 0–18 years)."
    }
   ],
   "professional": [
    {
     "h": "Avoiding over-treatment",
     "t": "Resisting a request for a harmful or unnecessary procedure while keeping the parent on side is a core professional skill."
    },
    {
     "h": "Consistent advice",
     "t": "Give the same no-exclusion message that schools receive from UKHSA, so parents are not given conflicting advice by school and practice."
    }
   ],
   "community": [
    {
     "h": "Schools and swimming clubs",
     "t": "Some settings still ask for children to be kept away. The UKHSA exclusion table can be shared with the school if needed."
    },
    {
     "h": "Pharmacy",
     "t": "Community pharmacists can advise on emollients. Over-the-counter molluscum products are not routinely needed in a healthy child."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Immunosuppression or very extensive or atypical lesions: seek specialist advice",
     "Eyelid-margin lesions with a red or sore eye: ophthalmology",
     "Hot, swollen, painful or pus-filled lesions: secondary bacterial infection",
     "Genital lesions: consider the whole picture with safeguarding in mind"
    ],
    "psychosocial": [
     "Impact on the child and family",
     "Parent’s feelings about appearance and spread",
     "School, nursery and swimming"
    ],
    "ice": [
     "Idea: a wart that needs freezing off",
     "Concern: spreading to others; whether he can go to school",
     "Expectation: removal of the spots; possibly time off"
    ]
   },
   "diagnosis": "“These are molluscum contagiosum, a common and harmless skin virus in young children. The small dimple in the middle of each bump is typical.”",
   "diagnosisLay": "“Think of it like a very common childhood cold, but in the skin. His immune system will find it and clear it, it just takes months rather than days. The redness you sometimes see is the body starting to win.”",
   "management": {
    "reflectIce": "“You wanted them gone and you were worried about school. They will go by themselves without marks, and he can carry on with school and swimming.”",
    "psychosocial": "Keep school, swimming and family life normal; involve Leo and spare him painful treatment.",
    "sharedPlan": [
     "Watchful waiting; clears in about 6 to 18 months, sometimes longer (BAD)",
     "No routine freezing or scraping in a healthy child",
     "Emollient and short course of mild topical steroid for the eczema patch (CG57, BNFC)",
     "No picking, short nails, own towel, avoid shared baths",
     "No exclusion from school or swimming (UKHSA)"
    ],
    "safetyNet": [
     "Return if spots become hot, swollen, painful or pus-filled",
     "Return if spots appear on the eyelids with a red or sore eye",
     "Return if very widespread or the eczema does not settle"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Eczema protocol",
    "s": "Emollients · topical steroids · CG57",
    "href": "management/eczema.html"
   },
   {
    "ic": "📋",
    "t": "Eczema",
    "s": "Case walkthrough",
    "href": "../cases/eczema.html"
   },
   {
    "ic": "🗺️",
    "t": "Widespread itch",
    "s": "Visual algorithm",
    "href": "algorithms/widespread-itch.html"
   },
   {
    "ic": "💠",
    "t": "Scabies protocol",
    "s": "Another contagious skin problem in children",
    "href": "management/scabies.html"
   }
  ],
  "pitfalls": {
   "intro": "Molluscum is easy to diagnose. Marks are won or lost on how you handle a parent who wants the spots gone, the school question, and the eczema that drives the itch.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Freezing or scraping on request.",
     "why": "It is painful, often repeated and can scar, while untreated lesions usually heal cleanly (BAD).",
     "fix": "Explain harm versus benefit and offer watchful waiting."
    },
    {
     "dom": "tasks",
     "fail": "Advising time off school or no swimming.",
     "why": "UKHSA sets no exclusion for molluscum contagiosum.",
     "fix": "“He can go to school and swim. Cover the spots and use his own towel.”"
    },
    {
     "dom": "tasks",
     "fail": "Ignoring the eczema patch.",
     "why": "Itch drives scratching and autoinoculation.",
     "fix": "Emollient and a short course of mild topical steroid."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about immune status, eyelids or genitals.",
     "why": "These are the situations where referral or a wider assessment is needed.",
     "fix": "Ask briefly and document it."
    },
    {
     "dom": "rto",
     "fail": "“They’re nothing, just leave them.”",
     "why": "The parent feels dismissed and leaves without a plan.",
     "fix": "Acknowledge her wish, explain the reasons and give things she can do."
    },
    {
     "dom": "gs",
     "fail": "No timescale and no safety-net.",
     "why": "She will return in a month expecting them to be gone.",
     "fix": "Give the 6 to 18 month timescale and clear reasons to come back."
    }
   ]
  }
 },
 "ocd-recognition": {
  "stem": {
   "name": "Heather Quinn",
   "age": "27-year-old woman",
   "pmh": [
    "No mental health history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "No recent consultations recorded.",
   "reason": "Booked appointment: “Something I’ve been struggling with for a long time. Hard to explain.”"
  },
  "knowledge": {
   "guideline": "[1] NICE CG31 Obsessive-compulsive disorder and body dysmorphic disorder: treatment (2005) · [2] NICE NG222 Depression in adults: treatment and management (2022, updated December 2025) · [3] NICE NG225 Self-harm: assessment, management and preventing recurrence (2022) · [4] BNF: selective serotonin re-uptake inhibitors · [5] MHRA: SSRIs and SNRIs, use and safety",
   "summary": "Intrusive contamination and harm thoughts that drive hours of hand-washing and lock checking, which she knows are excessive and has hidden for years, is obsessive-compulsive disorder. The GP’s job is to name it without judgement, gauge the functional impairment (which sets the NICE CG31 treatment step), screen for depression and suicidal thoughts, reassure that intrusive thoughts are symptoms rather than intentions, and offer CBT including exposure and response prevention (ERP) and/or an SSRI with a clear review plan.",
   "points": [
    {
     "h": "Recognise it",
     "t": "Obsessions are unwanted, recurring thoughts, images or urges that cause anxiety; compulsions are repeated behaviours or mental acts done to reduce that anxiety or prevent a feared event. Hours a day of washing and checking, with preserved insight and a damaged working and social life, is OCD. Ask directly about each: people rarely volunteer the details because of shame."
    },
    {
     "h": "Intrusive thoughts",
     "t": "Themes of harm, contamination, sex, religion or death are common in OCD and are often misread. NICE CG31 [1] advises taking expert advice where there is real uncertainty about risk from such thoughts. For most people the thoughts are unwanted and distressing precisely because they run against their values, and saying so relieves shame."
    },
    {
     "h": "Stepped care by impairment",
     "t": "NICE CG31 [1]: mild impairment, low-intensity CBT including ERP (up to 10 therapist hours), brief individual CBT with self-help or group CBT. Moderate impairment, a choice of an SSRI or more intensive CBT including ERP (more than 10 therapist hours). Severe impairment, combined SSRI and CBT including ERP, usually with secondary care mental health involvement. Hours lost each day and impaired work and relationships suggest at least moderate impairment."
    },
    {
     "h": "SSRI use",
     "t": "NICE CG31 [1]: SSRIs used for OCD in adults include fluoxetine, fluvoxamine, paroxetine, sertraline and citalopram (dose per BNF [4]). Response is often slower than in depression and higher doses may be needed. Warn about early anxiety and agitation. If effective, continue for at least 12 months, then reduce gradually. Clomipramine is considered after at least one adequate SSRI trial has failed or was not tolerated."
    },
    {
     "h": "Mood and risk",
     "t": "Depression often accompanies OCD. Ask about mood and suicidal thoughts directly. NICE NG225 [3] advises against risk tools and against labelling risk as low, medium or high: build a shared safety plan instead. NICE NG222 [2] and MHRA [5]: review within 1 week of starting an antidepressant in people aged 18 to 25 or at increased suicide risk."
    },
    {
     "h": "Access",
     "t": "NHS Talking Therapies accepts self-referral and delivers CBT with ERP for OCD. Refer to secondary care mental health services for severe impairment, poor response to treatment, or significant risk. Involving family or friends in the plan (with consent) can help reduce reassurance-seeking."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Miss Quinn, I’m Dr Patel. Come and sit down. What would you like to talk about today?",
    "dom": "rto",
    "why": "Open, unhurried start"
   },
   {
    "who": "pt",
    "text": "This is really embarrassing to say out loud. I have these thoughts I can’t get rid of, about germs, and that something terrible will happen if I don’t check things. To make the anxiety stop I wash my hands until they’re raw and check the locks over and over. I know it’s irrational, but I can’t stop. It’s taking over my life. I’ve hidden it for years."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. I can see that took courage, and you don’t need to be embarrassed here. I’d like to understand it properly. Can you tell me more about the thoughts themselves?",
    "dom": "rto",
    "why": "Validates the disclosure before gathering data"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "pt",
    "text": "It’s mostly germs. If I touch a door handle I feel dirty, like I’ll make someone ill. And when I leave the house I get this dread that if the door isn’t locked something awful will happen, and it will be my fault."
   },
   {
    "who": "dr",
    "text": "And when that thought comes, what do you do to make it settle?",
    "dom": "tasks",
    "why": "Links obsession to compulsion"
   },
   {
    "who": "pt",
    "text": "I wash, again and again, until it feels right. With the door I check the handle, go back, check again. Over and over."
   },
   {
    "who": "dr",
    "text": "Roughly how much of your day does the washing and checking take now?",
    "dom": "tasks",
    "why": "Quantifies time consumed to gauge impairment"
   },
   {
    "who": "pt",
    "text": "Hours. A couple of hours at least, more on a bad day. I’m late for things all the time."
   },
   {
    "who": "dr",
    "text": "How is it affecting your work, and the people around you?",
    "dom": "tasks",
    "why": "Functional and social impact"
   },
   {
    "who": "pt",
    "text": "Work’s suffering because I’m always late. I avoid seeing people because I can’t control things at their houses."
   },
   {
    "who": "dr",
    "text": "Are there things you now avoid altogether, or ways you get others to reassure you?",
    "dom": "tasks",
    "why": "Avoidance and reassurance-seeking"
   },
   {
    "who": "pt",
    "text": "I avoid places where I can’t wash properly. Sometimes I ask people if I’ve locked up."
   },
   {
    "who": "dr",
    "text": "Some people with thoughts like these also get other unwanted thoughts that frighten them, perhaps about harm coming to others because of them. Is anything like that happening for you?",
    "dom": "tasks",
    "why": "Asks sensitively about distressing intrusive thoughts"
   },
   {
    "who": "pt",
    "text": "That’s the germs one, really. That I’ll be the reason someone gets ill. It feels horrible to think it."
   },
   {
    "phase": "Mood, risk and ICE",
    "clock": "5–7 min",
    "who": "dr",
    "text": "Living with this for years sounds exhausting. How has your mood been? Have you ever had thoughts that life isn’t worth living, or of harming yourself?",
    "dom": "tasks",
    "why": "Screens depression and suicidal thoughts directly"
   },
   {
    "who": "pt",
    "text": "I get low and fed up with myself. But no, nothing like that."
   },
   {
    "who": "dr",
    "text": "Thank you for answering that. What have you been thinking this might be?",
    "dom": "rto",
    "why": "Elicits her ideas"
   },
   {
    "who": "pt",
    "text": "I don’t know. I thought people would think I was mad. That’s why I never said anything."
   },
   {
    "who": "dr",
    "text": "So part of the worry has been what others might think. What were you hoping we could do today?",
    "dom": "rto",
    "why": "Names the fear of judgement; asks expectation"
   },
   {
    "who": "pt",
    "text": "Just to know if it can be helped. I want to stop."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "What you describe has a name: obsessive-compulsive disorder, or OCD. It’s common, it’s recognised, and it’s treatable. It isn’t madness and it isn’t a weakness in you.",
    "dom": "tasks",
    "why": "Names OCD and destigmatises"
   },
   {
    "who": "pt",
    "text": "So it’s a real thing?"
   },
   {
    "who": "dr",
    "text": "Very real. It works like a cycle. An unwanted thought sends your anxiety up; washing or checking brings it down for a moment. That relief teaches your brain that the ritual was needed, so the next thought feels even more urgent. The rituals keep the cycle going.",
    "dom": "tasks",
    "why": "Explains the obsession–compulsion cycle"
   },
   {
    "who": "dr",
    "text": "And about the thought that you’ll make someone ill: that thought upsets you because it goes against everything you care about. It’s a symptom of OCD, not a sign of who you are.",
    "dom": "rto",
    "why": "Reassures about intrusive thoughts without dismissing"
   },
   {
    "who": "pt",
    "text": "(tearful) That actually helps to hear."
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "The treatment with the best evidence is a talking therapy, CBT with exposure and response prevention. With a therapist you face the triggers in small steps without doing the ritual, and the anxiety fades on its own. Because this is taking hours a day, I’d also offer you the choice of an SSRI antidepressant, which helps OCD even when mood isn’t the main problem. People can have either, or both.",
    "dom": "tasks",
    "why": "Offers ERP/CBT and SSRI by impairment (NICE CG31)"
   },
   {
    "who": "pt",
    "text": "I’m nervous about tablets."
   },
   {
    "who": "dr",
    "text": "That’s fair. If you choose one, it’s not addictive, it can take longer to work for OCD than for depression, and sometimes it makes people feel a bit more anxious in the first couple of weeks. We’d start low and review early. You can also refer yourself to NHS Talking Therapies today, and I can help with that. What would you like to do?",
    "dom": "tasks",
    "why": "Balanced SSRI counselling; shared decision"
   },
   {
    "who": "pt",
    "text": "I’ll start with the therapy and think about the tablets."
   },
   {
    "who": "dr",
    "text": "That’s a good plan. Can you tell me in your own words what the therapy will involve?",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Facing the germ stuff bit by bit without washing, so the anxiety goes down by itself."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Exactly. Let’s meet again in two to three weeks to see how the referral is going and to talk more about medication. If your mood drops, or you ever have thoughts of harming yourself, contact us the same day, or call NHS 111 and choose the mental health option, or 999 in an emergency. You’ve done the hardest part today.",
    "dom": "gs",
    "why": "Review plan and crisis safety-net"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; validated the courage of the disclosure before questioning.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work, social avoidance, reassurance-seeking and the toll of years of secrecy explored.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I’ve hidden it for years” and “something terrible will happen” and explored both sensitively.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (unsure what it is), concern (being thought mad), expectation (to know it can be helped and to stop).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "No examination needed; hands can be checked for dermatitis; no routine investigations; functional impairment gauged by hours lost.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "OCD versus generalised anxiety, depression and health anxiety considered; comorbid depression screened.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Suicidal thoughts and self-harm asked about directly; intrusive thoughts explored and distinguished from intent.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "OCD named clearly with the obsession–compulsion cycle explained.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "CBT with ERP offered, plus the choice of an SSRI given at least moderate impairment (NICE CG31); self-referral to NHS Talking Therapies.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Low mood acknowledged; shame and stigma addressed; hand skin care from washing considered.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review in 2 to 3 weeks; early review if an SSRI is started; crisis routes given.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Heather Quinn",
    "age": "27 years · female",
    "pmh": [
     "No mental health history recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "No recent consultations.",
    "reason": "“Something I’ve been struggling with for a long time.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and validate",
     "d": "Let her say it all. Thank her for telling you before the first question."
    },
    {
     "t": "1–5",
     "h": "Map the OCD",
     "d": "Obsession content, compulsions, hours per day, work and social impact, avoidance, reassurance-seeking, distressing intrusive thoughts."
    },
    {
     "t": "5–7",
     "h": "Mood, risk, ICE",
     "d": "Ask directly about suicidal thoughts. Name the fear of being thought “mad”."
    },
    {
     "t": "7–9",
     "h": "Name and explain",
     "d": "OCD by name; the cycle; intrusive thoughts are symptoms, not intentions."
    },
    {
     "t": "9–12",
     "h": "Plan and close",
     "d": "CBT with ERP, choice of SSRI (NICE CG31); Talking Therapies self-referral; teach-back; review in 2 to 3 weeks; crisis routes."
    }
   ],
   "wordPics": {
    "fail": "Treats it as generalised anxiety or tells her to try to stop; never asks how much time it takes or about mood and suicidal thoughts; offers a leaflet only; no treatment plan or review.",
    "pass": "Recognises and names OCD, gauges impairment, screens mood and risk, offers CBT with ERP and an SSRI, and arranges follow-up.",
    "exc": "All of the above, plus: validates the disclosure warmly; explains the cycle in plain words; reassures about the intrusive thought that she might make others ill; matches treatment to impairment per NICE CG31; counsels on SSRI timing and early side effects; supports her choice and checks understanding with teach-back."
   },
   "avoid": [
    {
     "dont": "“Everyone is a bit OCD about something.”",
     "instead": "“What you describe is obsessive-compulsive disorder. It’s common and treatable, and it’s clearly causing you a lot of distress.”",
     "why": "Trivialising a disabling illness deepens shame and delays help."
    },
    {
     "dont": "“Just try not to wash so much.”",
     "instead": "“A therapist can help you face the triggers step by step without the ritual, so the anxiety fades on its own.”",
     "why": "Willpower advice ignores the cycle; ERP is the evidence-based way to break it (NICE CG31)."
    },
    {
     "dont": "“Would you ever act on that thought?” asked in an alarmed tone.",
     "instead": "“Thoughts like that are common in OCD and upset people because they go against what they care about.”",
     "why": "Treating intrusive thoughts as dangerous reinforces shame; risk is assessed calmly."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Shame and delay",
     "t": "People with OCD often wait years before seeking help. Naming the condition and normalising it is part of the treatment."
    },
    {
     "h": "Work",
     "t": "Lateness and lost time can threaten her job. With her consent, a fit note with adjustments (for example flexible start times) may help while treatment starts."
    }
   ],
   "legal": [
    {
     "h": "Equality Act 2010",
     "t": "OCD that has a substantial and long-term effect on day-to-day activities can count as a disability, entitling her to reasonable adjustments at work."
    },
    {
     "h": "Confidentiality",
     "t": "Her disclosure is confidential. Involve family or friends only with her consent."
    }
   ],
   "professional": [
    {
     "h": "Intrusive thoughts",
     "t": "Clinicians sometimes misread harm-themed intrusive thoughts as risk. NICE CG31 advises seeking expert advice when genuinely uncertain rather than acting on alarm alone."
    },
    {
     "h": "Documentation",
     "t": "Record hours lost, functional impairment, mood, the suicide question and her answer, the treatment options discussed and her choice."
    }
   ],
   "community": [
    {
     "h": "Access to therapy",
     "t": "NHS Talking Therapies accepts self-referral for OCD. OCD charities offer information and peer support. Secondary care mental health services see severe or treatment-resistant OCD."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Suicidal thoughts or self-harm",
     "Severe depression",
     "Inability to function (not eating, not leaving home)",
     "Severe skin damage from washing",
     "Psychotic features (thoughts not recognised as her own, loss of insight)"
    ],
    "psychosocial": [
     "Years of secrecy and shame",
     "Work suffering through lateness",
     "Avoiding friends and public places",
     "Reassurance-seeking from others"
    ],
    "ice": [
     "Idea: unsure what it is; knows it is irrational",
     "Concern: being judged mad; the behaviour taking over her life",
     "Expectation: to know it can be helped, and to stop"
    ]
   },
   "diagnosis": "“This is obsessive-compulsive disorder, OCD. Unwanted thoughts cause anxiety, and the washing and checking are the brain’s way of trying to switch that anxiety off.”",
   "diagnosisLay": "“The ritual brings short-term relief, which teaches your brain it was needed. That makes the next thought feel more urgent. Treatment breaks the cycle by letting the anxiety fade without the ritual.”",
   "management": {
    "reflectIce": "“You were worried people would think you were mad. You’re not. This is a common, recognised condition and it responds to treatment.”",
    "psychosocial": "Validate the disclosure; address shame; consider work adjustments; involve others only with consent.",
    "sharedPlan": [
     "CBT including ERP; self-referral to NHS Talking Therapies (NICE CG31)",
     "Offer the choice of an SSRI given at least moderate impairment, dose per BNF; continue at least 12 months if it works (NICE CG31)",
     "Secondary care referral if severe, not improving or risk rises"
    ],
    "safetyNet": [
     "Low mood or thoughts of self-harm: contact the practice the same day, NHS 111 mental health option, or 999",
     "Review in 2 to 3 weeks; within 1 week of starting an SSRI if at increased suicide risk (NICE NG222)",
     "Worsening agitation after starting an SSRI: seek review"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Obsessive-compulsive disorder",
    "s": "Case walkthrough · NICE CG31",
    "href": "../cases/ocd.html"
   },
   {
    "ic": "💠",
    "t": "OCD protocol",
    "s": "Stepped care · ERP and SSRIs",
    "href": "management/ocd.html"
   },
   {
    "ic": "💠",
    "t": "Depression",
    "s": "Management protocol · NICE NG222",
    "href": "management/depression.html"
   },
   {
    "ic": "📋",
    "t": "Anxiety",
    "s": "Case walkthrough",
    "href": "../cases/anxiety.html"
   }
  ],
  "pitfalls": {
   "intro": "This station rewards recognising a hidden condition and naming it kindly. Candidates lose marks by treating it as general anxiety, skipping the risk question, or offering vague “counselling”.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Not naming OCD, or calling it stress or anxiety.",
     "why": "Naming it is therapeutic and points to the right treatment.",
     "fix": "Say “obsessive-compulsive disorder” and explain the cycle."
    },
    {
     "dom": "tasks",
     "fail": "Not measuring impairment.",
     "why": "NICE CG31 matches treatment intensity to functional impairment.",
     "fix": "Ask how many hours a day it takes and what it stops her doing."
    },
    {
     "dom": "tasks",
     "fail": "Offering generic counselling rather than CBT with ERP.",
     "why": "ERP is the psychological treatment with the evidence for OCD (NICE CG31).",
     "fix": "Describe ERP in plain words and offer self-referral."
    },
    {
     "dom": "tasks",
     "fail": "Skipping the question about suicidal thoughts.",
     "why": "Depression is common alongside OCD and she has struggled alone for years.",
     "fix": "Ask directly and calmly, and agree a safety plan (NICE NG225)."
    },
    {
     "dom": "rto",
     "fail": "Reacting with alarm to the thought that she might make someone ill.",
     "why": "It reinforces shame and misreads a symptom as intent.",
     "fix": "Explain that intrusive thoughts upset people because they conflict with their values."
    },
    {
     "dom": "gs",
     "fail": "No review date or SSRI counselling.",
     "why": "SSRIs for OCD are slower to work and can cause early agitation.",
     "fix": "Warn about timing and side effects and book a review."
    }
   ]
  }
 },
 "otitis-externa": {
  "stem": {
   "name": "Owen Pryce",
   "age": "45-year-old man",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "No previous consultations about his ears recorded.",
   "reason": "A few days of a painful, itchy right ear with discharge and muffled hearing. Swam last week; uses cotton buds."
  },
  "knowledge": {
   "guideline": "[1] UKHSA Summary of antimicrobial prescribing guidance: managing common infections (2025), otitis externa · [2] BNF, ear preparations (choice and doses) · [3] ENT UK consensus on topical aminoglycosides with a perforated drum (Phillips et al., Clin Otolaryngol 2007;32:330–336) · [4] UK consensus definitions of necrotising otitis externa (Hodgson et al., BMJ Open 2023;13:e061349) · [5] Kaushik et al., Cochrane 2010 CD004740 (interventions for acute otitis externa) · [6] AAO-HNSF clinical practice guideline, acute otitis externa (Rosenfeld et al., 2014, international)",
   "summary": "Pain on moving the tragus, itch, discharge and a swollen, debris-filled canal after swimming and cotton-bud use is acute otitis externa. Treat topically, clean the canal so the drops reach it, keep it dry and stop the cotton buds. Oral antibiotics are for spreading cellulitis or systemic illness, and severe persistent pain in a diabetic or immunocompromised person raises necrotising otitis externa.",
   "points": [
    {
     "h": "Recognise it",
     "t": "Otalgia, itch, discharge, a blocked or muffled feeling, and pain on moving the tragus or pinna, with a red, swollen canal containing debris. Triggers: swimming and water exposure, trauma from cotton buds or fingers, hearing aids or earplugs, and skin conditions such as eczema, seborrhoeic dermatitis or psoriasis."
    },
    {
     "h": "Not otitis media",
     "t": "Otitis media gives deeper pain, often with a bulging or red drum and no tragal tenderness; discharge only follows a perforation. Also consider a furuncle (focal boil), a foreign body, and otomycosis (itch, fluffy white or black debris), which needs antifungal drops rather than antibiotics."
    },
    {
     "h": "Treatment ladder",
     "t": "UKHSA summary [1]: analgesia and local heat; then topical acetic acid (over 12s) or a topical antibiotic with or without a steroid, which have similar cure rates at 7 days. Cochrane [5]: acetic acid is comparable at 1 week but less effective when treatment is longer. Choice and dosing per BNF [2]. Do not give oral antibiotics for uncomplicated otitis externa [1][6]."
    },
    {
     "h": "Make the drops work",
     "t": "Remove debris by dry mopping or refer for microsuction if the canal is blocked; a very swollen canal may need an ear wick placed by ENT or a trained clinician. Lie with the affected ear up for a few minutes after the drops go in."
    },
    {
     "h": "The eardrum matters",
     "t": "If the drum is perforated or cannot be seen, avoid aminoglycoside drops unless the ENT UK criteria are met: obvious infection, no more than 2 weeks, risks explained, and ideally baseline audiometry [3]. A non-aminoglycoside preparation is an alternative (per BNF)."
    },
    {
     "h": "When oral antibiotics are needed",
     "t": "UKHSA summary [1]: if cellulitis spreads beyond the canal or there are systemic signs, give oral flucloxacillin (dose per BNF) and refer to exclude necrotising otitis externa."
    },
    {
     "h": "Necrotising otitis externa",
     "t": "UK consensus [4]: suspect it in people with diabetes, immunosuppression or older age who have severe or persistent pain (often worse at night) out of proportion to the signs, granulation tissue in the canal, or cranial nerve palsy, especially facial. It is a skull-base osteomyelitis needing same-day ENT assessment."
    },
    {
     "h": "Prevention",
     "t": "Stop cotton buds; keep the ear dry (no swimming until settled, protect the ear when showering); treat any canal eczema; after recovery, consider earplugs or a swimming cap and drying the ear gently. Recurrent or non-resolving disease needs review and ENT referral."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Pryce, I’m Dr Evans. Come and have a seat. What’s brought you in?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "My right ear’s been sore and itchy for a few days, with some discharge. It hurts if I touch it or pull on it, and it feels blocked, muffled. I’ve been poking it with cotton buds to clean it, and I was swimming last week. Can you sort it?"
   },
   {
    "who": "dr",
    "text": "That sounds really uncomfortable. I’ll do my best to sort it. Let me ask a few things and then have a look inside.",
    "dom": "rto",
    "why": "Acknowledges discomfort and signposts"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "How bad is the pain, and is it worse at any particular time, for example at night?",
    "dom": "tasks",
    "why": "Severity and night pain, a necrotising OE marker"
   },
   {
    "who": "pt",
    "text": "Sore, maybe five out of ten. Worse when I lie on it. Not keeping me up."
   },
   {
    "who": "dr",
    "text": "What does the discharge look like? Any blood?",
    "dom": "tasks",
    "why": "Characterises discharge"
   },
   {
    "who": "pt",
    "text": "Yellowish, a bit crusty. No blood."
   },
   {
    "who": "dr",
    "text": "Any fever, or feeling unwell in yourself? Any redness or swelling spreading onto the outside of the ear or your face?",
    "dom": "tasks",
    "why": "Systemic features and spreading cellulitis"
   },
   {
    "who": "pt",
    "text": "No, I feel fine otherwise."
   },
   {
    "who": "dr",
    "text": "Any weakness of your face, dizziness or ringing in the ear?",
    "dom": "tasks",
    "why": "Screens facial palsy and inner ear involvement"
   },
   {
    "who": "pt",
    "text": "No."
   },
   {
    "who": "dr",
    "text": "Have you had diabetes, any problem with your immune system, or any treatment that lowers immunity? Any eczema or psoriasis?",
    "dom": "tasks",
    "why": "Risk factors for necrotising OE and skin triggers"
   },
   {
    "who": "pt",
    "text": "Not that I know of."
   },
   {
    "who": "dr",
    "text": "Have you had ear problems before, a perforated eardrum or ear operations? Do you use hearing aids or earplugs?",
    "dom": "tasks",
    "why": "Drum status and occlusive devices"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What did you think was going on, and what were you hoping I’d do?",
    "dom": "rto",
    "why": "Explores ideas and expectations"
   },
   {
    "who": "pt",
    "text": "An infection. I thought I’d need antibiotics to get rid of it quickly."
   },
   {
    "who": "dr",
    "text": "That makes sense. Is anything else worrying you about it?",
    "dom": "rto",
    "why": "Checks for further concern"
   },
   {
    "who": "pt",
    "text": "Just whether the hearing will come back."
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me look. I’ll pull gently on the ear first … that’s sore, isn’t it? The canal is red and swollen and there’s debris in it, so it’s hard to see the eardrum clearly. You don’t have a temperature and the skin around the ear looks normal.",
    "dom": "tasks",
    "why": "Tragal tenderness, otoscopy, spreading cellulitis excluded"
   },
   {
    "who": "pt",
    "text": "So what is it?"
   },
   {
    "who": "dr",
    "text": "It’s otitis externa, an inflammation and infection of the skin of the ear canal. Swimming softens the skin, and the cotton buds scratch it and push debris further in, which keeps it going. The muffled hearing is from the swelling and debris, and it should come back as it settles.",
    "dom": "tasks",
    "why": "Diagnosis linked to triggers; answers the hearing concern"
   },
   {
    "who": "pt",
    "text": "So I don’t need tablets?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Tablets aren’t the best treatment here. Drops or a spray put the treatment right where the infection is, at a much higher strength, and they work better for this. Antibiotic tablets are for when infection spreads to the skin outside the ear or makes you unwell, and that isn’t the case.",
    "dom": "tasks",
    "why": "Topical over systemic, with the reason"
   },
   {
    "who": "pt",
    "text": "Okay, that makes sense."
   },
   {
    "who": "dr",
    "text": "I’ll gently clean out the debris now so the drops can reach the skin. Because I can’t see your eardrum clearly, I’ll choose drops that are safe even if there were a small hole in it. Use them for a week. Paracetamol or ibuprofen will help the pain, and a warm flannel against the ear can soothe it.",
    "dom": "tasks",
    "why": "Aural toilet; safe choice when the drum is not seen; analgesia"
   },
   {
    "who": "pt",
    "text": "How do I put them in properly?"
   },
   {
    "who": "dr",
    "text": "Lie on your side with the sore ear up, put the drops in, then gently press on the flap in front of the ear a few times and stay still for a few minutes. If the canal swells shut and the drops won’t go in, come back, because we may need to place a small wick or get ENT to clean it.",
    "dom": "tasks",
    "why": "Drop technique and wick if needed"
   },
   {
    "who": "pt",
    "text": "And the swimming?"
   },
   {
    "who": "dr",
    "text": "No swimming until it has fully settled, and keep water out when you shower, for example with cotton wool coated in petroleum jelly. Most importantly, no more cotton buds at all. The ear cleans itself. Could you manage that?",
    "dom": "rto",
    "why": "Negotiates prevention and checks acceptability"
   },
   {
    "who": "pt",
    "text": "I’ll try. Old habit."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Come back if it isn’t clearly better after a week of drops, if the pain gets much worse or keeps you awake at night, if redness spreads onto your ear or face, if you feel feverish, or if you notice any weakness of your face. Those need checking the same day.",
    "dom": "gs",
    "why": "Specific safety-net including necrotising OE features"
   },
   {
    "who": "pt",
    "text": "Okay. Drops for a week, lie with the ear up, no cotton buds, keep it dry, come back if it’s worse."
   },
   {
    "who": "dr",
    "text": "That’s it exactly. If your hearing hasn’t fully returned once the infection settles, let me know and I’ll check it.",
    "dom": "gs",
    "why": "Teach-back confirmed; hearing follow-up"
   },
   {
    "who": "pt",
    "text": "Thanks, doctor."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him describe pain, itch, discharge and muffled hearing; heard the swimming and cotton-bud history.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Swimming habit; how the blocked hearing affects him; willingness to stop cotton buds.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “hurts if I pull on it” as tragal tenderness and the cotton buds as a perpetuating cause.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (infection), concern (hearing may not return), expectation (antibiotic tablets).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Pinna and tragal tenderness, otoscopy of canal and drum, skin around the ear, temperature; microsuction or wick if blocked.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Otitis externa versus otitis media, furuncle, foreign body, otomycosis, necrotising otitis externa.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened night pain, systemic features, spreading cellulitis, facial weakness, diabetes and immunosuppression.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Acute otitis externa of the right ear.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Aural toilet; 7 days of topical treatment per UKHSA summary; non-ototoxic choice when the drum is not seen; analgesia; no oral antibiotics.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Drop technique; keep dry; stop cotton buds; skin conditions; hearing concern answered.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Return if not better after a week, spreading redness, fever, night pain or facial weakness; hearing check if not recovered.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Owen Pryce",
    "age": "45 years · male",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "Nil recorded"
    ],
    "allergy": "NKDA",
    "recent": "No previous ear consultations.",
    "reason": "“Painful, itchy right ear with discharge. Can you sort it?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Opening",
     "d": "Open question; hear the swimming and cotton-bud story."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Pain severity and night pain, discharge, fever, spreading redness, facial weakness, diabetes or immunosuppression, previous perforation, skin conditions."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Infection idea, hearing worry, wish for tablets and quick relief."
    },
    {
     "t": "6–8",
     "h": "Examine and name it",
     "d": "Tragal tenderness, otoscopy, skin around the ear; otitis externa linked to his triggers."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Clean the canal, topical drops for a week, technique, keep dry, stop cotton buds, specific return criteria, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes oral amoxicillin as for otitis media; never looks in the canal or asks about diabetes or night pain; no advice about cotton buds or keeping the ear dry.",
    "pass": "Diagnoses otitis externa, prescribes topical treatment rather than tablets, advises keeping it dry and stopping cotton buds, and safety-nets.",
    "exc": "All of the above, plus: cleans the canal so drops work; chooses a safe preparation when the drum is not seen; teaches the technique; explains why drops beat tablets in his terms; answers his hearing worry; screens necrotising otitis externa features; teach-back."
   },
   "avoid": [
    {
     "dont": "“I’ll give you a course of antibiotic tablets.”",
     "instead": "“Drops put the treatment right where the infection is, and work better for this.”",
     "why": "Oral antibiotics are not indicated for uncomplicated otitis externa (UKHSA summary)."
    },
    {
     "dont": "“Keep cleaning it with cotton buds so the drops get in.”",
     "instead": "“No cotton buds at all. I’ll clean it for you.”",
     "why": "Cotton buds damage the canal skin and perpetuate the infection."
    },
    {
     "dont": "“Ear infections are always minor.”",
     "instead": "“Severe pain at night or facial weakness would need checking the same day.”",
     "why": "Necrotising otitis externa is a skull-base osteomyelitis and is easily missed."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Swimming and habits",
     "t": "Keen swimmers and people who clean their ears with cotton buds get recurrent otitis externa. Changing the habit is the main prevention."
    },
    {
     "h": "Work and hearing",
     "t": "Temporary muffled hearing can affect work. Most people can work while treating it; a fit note is rarely needed."
    }
   ],
   "legal": [
    {
     "h": "Consent for ear procedures",
     "t": "GMC Decision making and consent (2020): explain the benefits and risks of microsuction or wick insertion, including brief dizziness or discomfort, before going ahead."
    }
   ],
   "professional": [
    {
     "h": "Antimicrobial stewardship",
     "t": "Follow the UKHSA prescribing summary: topical treatment first, oral antibiotics only for spreading cellulitis or systemic signs."
    },
    {
     "h": "Ototoxic drops",
     "t": "ENT UK consensus (2007): aminoglycoside drops with a perforation only with obvious infection, for no more than 2 weeks, with the risk explained. Record the drum status and your reasoning."
    }
   ],
   "community": [
    {
     "h": "Ear care services",
     "t": "Many areas have community ear care or microsuction services that GPs can refer to for aural toilet when the canal is blocked."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Severe or persistent pain, especially at night, out of proportion to the signs",
     "Granulation tissue in the canal",
     "Facial weakness or other cranial nerve palsy",
     "Diabetes, immunosuppression or older age with non-resolving disease",
     "Spreading cellulitis or systemic illness"
    ],
    "psychosocial": [
     "Swimming habit",
     "Cotton-bud use",
     "Wanting quick relief"
    ],
    "ice": [
     "Idea: an ear infection",
     "Concern: whether his hearing will come back",
     "Expectation: antibiotic tablets"
    ]
   },
   "diagnosis": "“This is otitis externa, an inflammation and infection of the skin of the ear canal, set off by swimming and kept going by the cotton buds.”",
   "diagnosisLay": "“The skin in your ear canal is like the skin on a finger that’s been in water too long: soft and easy to damage. Once it’s scratched, germs get in and it swells, which is why it hurts to pull on the ear and why it sounds muffled.”",
   "management": {
    "reflectIce": "“You were expecting tablets. For this kind of ear infection, drops work better because they put the treatment right where it’s needed. And your hearing should come back as the swelling settles.”",
    "psychosocial": "Negotiate stopping cotton buds; time off swimming until settled; practical tips for showering; realistic time frame for relief.",
    "sharedPlan": [
     "Aural toilet in the surgery, or microsuction referral if blocked; wick if the canal is too swollen",
     "Topical acetic acid or antibiotic with or without steroid for 7 days (UKHSA summary; choice per BNF); non-aminoglycoside if the drum is not seen",
     "Analgesia and local heat",
     "Keep dry, no swimming until settled, stop cotton buds, treat any canal eczema"
    ],
    "safetyNet": [
     "Return if not better after a week of drops",
     "Same day if pain much worse or at night, redness spreading, fever, or facial weakness",
     "Hearing check if it has not recovered after the infection settles",
     "ENT referral if recurrent or not resolving"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Otitis media and externa protocol",
    "s": "UKHSA summary · topical treatment · necrotising OE",
    "href": "management/otitis-media-externa.html"
   },
   {
    "ic": "🗺️",
    "t": "Hearing loss pathway",
    "s": "Visual algorithm",
    "href": "algorithms/hearing-loss.html"
   },
   {
    "ic": "📋",
    "t": "Hearing loss",
    "s": "Case walkthrough",
    "href": "../cases/hearing-loss.html"
   },
   {
    "ic": "💠",
    "t": "Seborrhoeic dermatitis protocol",
    "s": "Skin triggers in the ear canal",
    "href": "management/seborrhoeic-dermatitis.html"
   }
  ],
  "pitfalls": {
   "intro": "The trap is prescribing tablets because he asks for them. The marks sit in topical treatment done well, prevention he will actually follow, and screening the rare dangerous variant.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing oral antibiotics for uncomplicated otitis externa.",
     "why": "UKHSA summary: topical treatment; oral flucloxacillin only for spreading cellulitis or systemic signs.",
     "fix": "Drops or spray for 7 days, with analgesia."
    },
    {
     "dom": "tasks",
     "fail": "Giving drops into a canal full of debris.",
     "why": "The drops cannot reach the infected skin.",
     "fix": "Clean the canal first, or refer for microsuction or a wick."
    },
    {
     "dom": "tasks",
     "fail": "Using aminoglycoside drops when the drum cannot be seen, without thinking about it.",
     "why": "ENT UK consensus sets conditions for ototoxic drops with a perforation.",
     "fix": "Choose a non-aminoglycoside preparation or meet the consensus conditions and record why."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about diabetes, immunosuppression, night pain or facial weakness.",
     "why": "These identify necrotising otitis externa, which needs same-day ENT.",
     "fix": "Ask the four questions and include them in the safety-net."
    },
    {
     "dom": "rto",
     "fail": "Lecturing him about cotton buds.",
     "why": "Habits change when the reason is understood and the plan feels realistic.",
     "fix": "Explain how buds keep it going and ask whether he can manage without them."
    },
    {
     "dom": "gs",
     "fail": "“Come back if it doesn’t get better.”",
     "why": "Vague safety-netting is standard failing feedback.",
     "fix": "A week of drops; same-day return for night pain, spreading redness, fever or facial weakness."
    }
   ]
  }
 },
 "pityriasis-rosea": {
  "stem": {
   "name": "Lena Ashworth",
   "age": "24-year-old woman",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "No previous skin consultations recorded.",
   "reason": "One large oval scaly patch on the chest a week ago, now many smaller oval patches on the back and tummy; mildly itchy. Thinks it is ringworm and wants a cream."
  },
  "knowledge": {
   "guideline": "[1] Primary Care Dermatology Society, pityriasis rosea clinical guidance (accessed 2026) · [2] British Association of Dermatologists, Pityriasis rosea patient information leaflet (2023) · [3] BASHH UK national guideline on the management of syphilis (2024) · [4] Contreras-Ruiz et al., Cochrane 2019 CD005068 (interventions for pityriasis rosea) · [5] Drago et al., J Am Acad Dermatol 2008; Manduca et al., Int J Womens Dermatol 2025; Ong et al., J Am Acad Dermatol 2024 (pityriasis rosea in pregnancy) · [6] BNF, topical corticosteroids and antihistamines",
   "summary": "A single larger oval scaly herald patch followed by a crop of smaller oval patches along the skin lines of the trunk is pityriasis rosea. Reassure, treat any itch, and avoid antifungals. Think of secondary syphilis if the palms or soles are involved or there are other atypical features, and ask about pregnancy.",
   "points": [
    {
     "h": "Recognise it",
     "t": "PCDS [1]: a herald patch, usually 2–5 cm, pink or red with a fine scale and sharp border, appears a few days to two weeks before a crop of smaller oval patches with a collarette of scale along the skin cleavage lines, giving a “Christmas tree” pattern on the back. It mainly affects children and young adults and is probably infective (HHV-6 and HHV-7 reactivation has been implicated)."
    },
    {
     "h": "Ringworm is the classic confusion",
     "t": "BAD [2]: the herald patch can look like ringworm. Tinea usually has fewer, annular lesions with an active scaly edge and central clearing, and spreads outward rather than erupting as a crop. If in doubt about a single patch, skin scrapings for mycology settle it."
    },
    {
     "h": "Other differentials",
     "t": "Guttate psoriasis (small drop-like plaques, often after a streptococcal sore throat), discoid eczema, a pityriasis-rosea-like drug eruption (review medicines), and secondary syphilis."
    },
    {
     "h": "Secondary syphilis",
     "t": "BASHH 2024 [3]: secondary syphilis gives a generalised mucocutaneous rash with lymphadenopathy; the rash involves the palms and soles in 11–70% and usually does not itch. Mucosal lesions, patchy hair loss, systemic symptoms or sexual risk should prompt a sexual history and syphilis serology, ideally via sexual health services with partner notification if positive."
    },
    {
     "h": "Treatment",
     "t": "No treatment is needed if it does not itch [2]. For itch, PCDS [1]: an emollient, or a mild to moderately potent topical steroid such as hydrocortisone 1% or clobetasone butyrate 0.05%; a sedating antihistamine at night if sleep is affected (doses per BNF [6]). Antifungals and antibiotics do not help; Cochrane [4] found macrolides not recommended."
    },
    {
     "h": "Course",
     "t": "It is self-limiting, lasting about 2–12 weeks [4]; BAD [2] says it clears within a few months. Post-inflammatory colour change, especially in darker skin, can take longer to fade. Recurrence is uncommon. Reconsider the diagnosis if it persists beyond about 3 months (practice)."
    },
    {
     "h": "Contagion and work",
     "t": "BAD [2]: the risk of passing it on is very low. No need to stay off work or college, or avoid the gym."
    },
    {
     "h": "Pregnancy",
     "t": "Small studies found higher miscarriage rates when pityriasis rosea began before about 15 weeks of pregnancy (Drago 2008; Manduca 2025), although a 2024 matched study found no excess risk [5]. Ask about possible pregnancy; if pregnant, inform the midwife or obstetric team for closer follow-up."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Miss Ashworth, I’m Dr Hughes. What can I help with today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "About a week ago I got one big oval scaly patch on my chest, and now I’ve come out in loads of smaller oval ones across my back and tummy. It’s a bit itchy. I thought the first one was ringworm. Is it spreading? Should I have a cream?"
   },
   {
    "who": "dr",
    "text": "That must have been alarming, watching it spread like that. Let me ask a few questions and have a look, and then we’ll work out what it is and what will help.",
    "dom": "rto",
    "why": "Acknowledges worry; signposts"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Did you feel unwell before the first patch appeared, like a cold or sore throat?",
    "dom": "tasks",
    "why": "Preceding illness: viral prodrome or strep for guttate psoriasis"
   },
   {
    "who": "pt",
    "text": "I think I had a bit of a cold before, nothing much."
   },
   {
    "who": "dr",
    "text": "How itchy is it? Is it stopping you sleeping?",
    "dom": "tasks",
    "why": "Itch severity to guide treatment"
   },
   {
    "who": "pt",
    "text": "Just a bit itchy. It’s more how it looks."
   },
   {
    "who": "dr",
    "text": "Have you used any creams on it, or started any new medicines recently?",
    "dom": "tasks",
    "why": "Treatment tried; drug eruption screen"
   },
   {
    "who": "pt",
    "text": "No, nothing yet. I wanted to check first."
   },
   {
    "who": "dr",
    "text": "I ask everyone with a rash like this a few extra questions, because a few conditions can look similar. Is there any rash on your palms or the soles of your feet? Any mouth ulcers, hair loss, swollen glands or feeling unwell now?",
    "dom": "tasks",
    "why": "Screens features of secondary syphilis"
   },
   {
    "who": "pt",
    "text": "No, none of that."
   },
   {
    "who": "dr",
    "text": "And any sexual health concerns, such as a new partner, a sore or ulcer anywhere, or anything you’d like checked?",
    "dom": "tasks",
    "why": "Non-judgemental sexual history"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Is there any chance you could be pregnant?",
    "dom": "tasks",
    "why": "Pregnancy history, relevant to pityriasis rosea"
   },
   {
    "who": "pt",
    "text": "I don’t think so."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You thought it might be ringworm spreading. What worries you most about it?",
    "dom": "rto",
    "why": "Explores ideas and concerns"
   },
   {
    "who": "pt",
    "text": "That it’s catching, and it’s all over my back. I don’t want to pass it on or have it for ages."
   },
   {
    "who": "dr",
    "text": "And you were hoping for a cream to clear it?",
    "dom": "rto",
    "why": "Confirms expectation"
   },
   {
    "who": "pt",
    "text": "Yes, an antifungal one I suppose."
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "May I look? … This bigger patch on your chest is what we call a herald patch. The smaller oval patches on your back have a fine ring of scale and follow the lines of your skin, a bit like the branches of a Christmas tree. Your palms and soles are clear.",
    "dom": "tasks",
    "why": "Examines herald patch, distribution, palms and soles"
   },
   {
    "who": "pt",
    "text": "So it’s not ringworm?"
   },
   {
    "who": "dr",
    "text": "No. This is pityriasis rosea. It’s a common rash in young adults, probably triggered by a virus, often after a cold like the one you had. The first patch can look just like ringworm, which is why many people think that.",
    "dom": "tasks",
    "why": "Names diagnosis; explains the ringworm confusion"
   },
   {
    "who": "pt",
    "text": "Is it catching?"
   },
   {
    "who": "dr",
    "text": "The risk of passing it on is very low. You don’t need to keep away from other people or take time off, and you can carry on with normal life, including exercise.",
    "dom": "rto",
    "why": "Answers contagion fear directly"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "It goes away on its own, usually within about 2 to 12 weeks. It can leave paler or darker marks for a little while after, which fade too.",
    "dom": "tasks",
    "why": "Natural history"
   },
   {
    "who": "pt",
    "text": "So what about the cream?"
   },
   {
    "who": "dr",
    "text": "An antifungal cream wouldn’t help, because it isn’t a fungus. For the itch, a moisturiser used often helps, and if it’s still itchy, a mild steroid cream such as hydrocortisone 1%. If it ever stops you sleeping, an antihistamine at night can help. Does that sound reasonable?",
    "dom": "tasks",
    "why": "Symptomatic care; explains why no antifungal"
   },
   {
    "who": "pt",
    "text": "Yes, that makes sense. I’d rather not use something that won’t work."
   },
   {
    "who": "dr",
    "text": "If there’s any chance you become pregnant while you have the rash, let us or your midwife know, as it’s worth closer follow-up in early pregnancy. If you’re at all unsure, a test is easy to do.",
    "dom": "tasks",
    "why": "Pregnancy advice proportionate to uncertainty"
   },
   {
    "who": "pt",
    "text": "Okay, I will."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Come back if the rash spreads to your palms or soles, you feel unwell or get mouth ulcers or swollen glands, it changes a lot, or it’s still there after about three months. Then I’d rethink it and might do a blood test.",
    "dom": "gs",
    "why": "Specific safety-net including syphilis triggers"
   },
   {
    "who": "pt",
    "text": "So it’ll go by itself, moisturiser and maybe a mild steroid for the itch, no antifungal, and come back if it’s on my hands or feet or still there in three months."
   },
   {
    "who": "dr",
    "text": "Exactly. Anything else you’d like to ask?",
    "dom": "gs",
    "why": "Teach-back confirmed; invites questions"
   },
   {
    "who": "pt",
    "text": "No, that’s really reassuring. Thank you."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her describe the herald patch and the spread; heard the ringworm idea.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Impact on appearance and confidence; work, college and gym; privacy for a sexual history.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “one big oval patch, then loads of smaller ones” as the herald-patch sequence.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (ringworm spreading), concern (catching, lasting for ages), expectation (antifungal cream).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Examined the herald patch, distribution, collarette scale, palms, soles, mouth and nodes; serology only if atypical.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Pityriasis rosea versus tinea, guttate psoriasis, discoid eczema, drug eruption, secondary syphilis.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened secondary syphilis features and sexual risk; asked about pregnancy.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Pityriasis rosea.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Reassurance; emollient and mild steroid for itch; antihistamine if sleep affected; no antifungal.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Addressed contagion and work; pregnancy advice given proportionately.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Return if palms or soles, systemic features, mouth ulcers, big change, or persisting beyond about 3 months.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Lena Ashworth",
    "age": "24 years · female",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "Nil recorded"
    ],
    "allergy": "NKDA",
    "recent": "No previous skin consultations.",
    "reason": "“Big oval patch on my chest a week ago, now lots of small ones — is it ringworm spreading?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Opening",
     "d": "Open question; let her tell the sequence."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Preceding illness, itch, treatments and medicines, palms and soles, mouth, nodes, sexual history, pregnancy."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Ringworm idea, fear of passing it on, wish for an antifungal."
    },
    {
     "t": "6–8",
     "h": "Examine and name it",
     "d": "Herald patch, Christmas-tree distribution, palms and soles clear; pityriasis rosea; not catching."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Self-limiting course, itch care, why no antifungal, pregnancy note, syphilis-aware safety-net, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes an antifungal for “ringworm”; never examines palms and soles or asks a sexual history; no explanation of the course; no safety-net.",
    "pass": "Recognises pityriasis rosea, reassures that it is self-limiting and not significantly contagious, treats the itch without antifungals, and safety-nets.",
    "exc": "All of the above, plus: explains why the herald patch looks like ringworm; screens secondary syphilis features and asks the sexual history non-judgementally; asks about pregnancy with a proportionate explanation; addresses the contagion fear directly; teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s ringworm, here’s some clotrimazole.”",
     "instead": "“The first patch looks like ringworm, but the pattern afterwards shows it’s pityriasis rosea.”",
     "why": "Antifungals do not help pityriasis rosea and delay the right explanation."
    },
    {
     "dont": "“Have you been sleeping around?”",
     "instead": "“I ask everyone with this kind of rash a few sexual health questions, because some conditions look alike.”",
     "why": "Judgemental wording closes the history down and misses syphilis."
    },
    {
     "dont": "“You’ll need to keep away from people until it clears.”",
     "instead": "“The risk of passing it on is very low; carry on as normal.”",
     "why": "BAD: very low transmission risk; unnecessary isolation causes harm."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Appearance and confidence",
     "t": "A widespread truncal rash can affect confidence, clothing choices and relationships. Clear information on the course helps."
    },
    {
     "h": "Work, college and gym",
     "t": "No need to stay off work, college or exercise; a fit note is not needed."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality",
     "t": "GMC Confidentiality (2017): sexual history and any sexual health testing are confidential. Sexual health clinics offer confidential testing and partner notification."
    }
   ],
   "professional": [
    {
     "h": "Antimicrobial stewardship",
     "t": "Avoid antifungals and antibiotics for a viral, self-limiting rash; explain why rather than prescribing to meet expectation."
    },
    {
     "h": "Non-judgemental sexual history",
     "t": "Ask routinely, with a reason, so that secondary syphilis is not missed and the patient does not feel singled out."
    }
   ],
   "community": [
    {
     "h": "Sexual health services",
     "t": "Local sexual health services provide syphilis testing, treatment and partner notification if the picture becomes atypical."
    },
    {
     "h": "Community pharmacy",
     "t": "Emollients and mild steroid creams are available from pharmacies; pharmacists can advise on use."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Rash on palms or soles",
     "Mouth ulcers, patchy hair loss or lymphadenopathy",
     "Systemic symptoms",
     "Sexual risk or a genital sore",
     "Pregnancy, especially early",
     "Persisting beyond about 3 months or atypical morphology"
    ],
    "psychosocial": [
     "Worry about passing it on",
     "Appearance and confidence",
     "Work, college and exercise"
    ],
    "ice": [
     "Idea: ringworm spreading",
     "Concern: that it is catching and will last",
     "Expectation: an antifungal cream"
    ]
   },
   "diagnosis": "“The single bigger patch followed a week later by lots of smaller oval patches following your skin lines is pityriasis rosea, a harmless rash that goes on its own.”",
   "diagnosisLay": "“It’s the skin’s reaction to a common virus. The first patch is like a messenger, and the rest follow along the natural lines of your skin. It isn’t a fungus, so antifungal creams won’t help.”",
   "management": {
    "reflectIce": "“You thought it was ringworm spreading, and the first patch does look like that. It isn’t, and the good news is that it clears by itself.”",
    "psychosocial": "Reassure about contagion and normal activities; address appearance; offer written information.",
    "sharedPlan": [
     "Reassurance: self-limiting, usually 2–12 weeks",
     "Emollient; mild to moderate topical steroid if itchy (PCDS); sedating antihistamine at night if sleep affected (per BNF)",
     "No antifungal or antibiotic",
     "Pregnancy: inform the midwife or obstetric team if pregnant"
    ],
    "safetyNet": [
     "Return if palms or soles involved, mouth ulcers, swollen glands or feeling unwell",
     "Return if still present after about 3 months or it changes",
     "Syphilis serology and sexual health referral if atypical"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Pityriasis rosea protocol",
    "s": "PCDS · BASHH syphilis caveat · pregnancy",
    "href": "management/pityriasis-rosea.html"
   },
   {
    "ic": "🗺️",
    "t": "Maculopapular rash pathway",
    "s": "Visual algorithm · rash differential",
    "href": "algorithms/maculopapular-rash.html"
   },
   {
    "ic": "💠",
    "t": "Fungal skin infection protocol",
    "s": "Tinea corporis · when scrapings help",
    "href": "management/fungal-skin-infection.html"
   },
   {
    "ic": "📋",
    "t": "Fungal infections",
    "s": "Case walkthrough",
    "href": "../cases/fungal-infections.html"
   },
   {
    "ic": "💠",
    "t": "Psoriasis protocol",
    "s": "Guttate psoriasis differential",
    "href": "management/psoriasis.html"
   }
  ],
  "pitfalls": {
   "intro": "The trap is agreeing with her ringworm idea. The marks sit in naming pityriasis rosea, not prescribing antifungals, and keeping secondary syphilis and pregnancy in mind without alarming her.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing an antifungal cream.",
     "why": "It is not a fungal infection; the herald patch mimics ringworm.",
     "fix": "Explain the herald patch and offer itch care instead."
    },
    {
     "dom": "tasks",
     "fail": "Not looking at palms and soles or asking about sexual health.",
     "why": "BASHH 2024: secondary syphilis involves palms and soles in many cases and can mimic pityriasis rosea.",
     "fix": "Check palms, soles, mouth and nodes; ask the sexual history routinely."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting pregnancy.",
     "why": "Small studies suggest higher miscarriage rates with onset before about 15 weeks.",
     "fix": "Ask, and advise informing the midwife if pregnant."
    },
    {
     "dom": "tasks",
     "fail": "Giving no time frame.",
     "why": "Uncertainty about duration drives repeat visits and worry.",
     "fix": "“Usually 2–12 weeks; come back if it is still there after about three months.”"
    },
    {
     "dom": "rto",
     "fail": "Dismissing the expectation of a cream without explanation.",
     "why": "She will feel unheard and may buy an antifungal anyway.",
     "fix": "Explain why antifungals won’t help and offer something that will."
    },
    {
     "dom": "gs",
     "fail": "“Come back if it doesn’t go.”",
     "why": "Vague safety-netting is standard failing feedback.",
     "fix": "Palms or soles, systemic features, mouth ulcers, big change, or beyond about 3 months."
    }
   ]
  }
 },
 "plantar-fasciitis": {
  "stem": {
   "name": "Carl Denton",
   "age": "47-year-old man",
   "pmh": [
    "Recent weight gain"
   ],
   "meds": [
    "Not specified in the case: check the repeat record"
   ],
   "allergy": "None recorded",
   "recent": "Right heel pain for a few weeks, worst on the first steps in the morning and after sitting. Recently started running; on his feet all day at work.",
   "reason": "“What is it?”"
  },
  "knowledge": {
   "guideline": "[1] JOSPT/APTA Heel pain – plantar fasciitis clinical practice guideline (2023, international) · [2] NICE HTG200 Extracorporeal shockwave therapy for refractory plantar fasciitis (2009) · [3] NICE NG65 Spondyloarthritis in over 16s (2017) · [4] BNF: paracetamol, NSAIDs",
   "summary": "First-step plantar heel pain with tenderness at the medial calcaneal tubercle is plantar heel pain from plantar fasciopathy, a clinical diagnosis. Educate, adjust load without stopping activity, stretch the calf and plantar fascia, strengthen, use supportive footwear and a cheap heel cushion. Recovery often takes months. Reconsider the diagnosis for red flags, focal bony tenderness after a rise in running, nerve symptoms or inflammatory features. Injection and shockwave are not first-line.",
   "points": [
    {
     "h": "Diagnosis",
     "t": "Gradual medial plantar heel pain, worst on the first steps after rest and easing with activity, then worse with prolonged standing. Tenderness at the medial calcaneal tubercle; pain on passive toe dorsiflexion. Neurovascular examination normal. Imaging is not routine [1]. Chronic cases are often degenerative and load-related rather than purely inflammatory, so “plantar fasciopathy” is the more accurate term."
    },
    {
     "h": "Mimics",
     "t": "Calcaneal stress fracture (recent jump in running, focal bony pain, positive squeeze test), fat-pad syndrome (central heel), tarsal tunnel syndrome or S1 radiculopathy (burning, tingling, numbness; examine the nerves and back), insertional Achilles tendinopathy (posterior heel), and enthesitis in spondyloarthritis (inflammatory back pain, psoriasis, uveitis, inflammatory bowel disease) [3]."
    },
    {
     "h": "First-line",
     "t": "JOSPT/APTA [1]: education, plantar-fascia and calf stretching, progressive strengthening, and load modification. Keep up tolerable activity rather than resting completely, and avoid sudden rises in running or standing load. Supportive footwear; a low-cost prefabricated heel cup or insole can help comfort. Custom orthoses are not needed at first presentation."
    },
    {
     "h": "Analgesia",
     "t": "Paracetamol or a short topical or oral NSAID course only if suitable for the patient, dose per BNF [4]. Check renal, cardiovascular and gastrointestinal risk before an oral NSAID. Analgesia supports activity; it is not the treatment."
    },
    {
     "h": "Weight",
     "t": "Higher body weight is a risk factor. Weight can be discussed sensitively as part of long-term load reduction, but it is not a condition of treatment."
    },
    {
     "h": "If it persists",
     "t": "Review adherence and the diagnosis first. Then physiotherapy or podiatry, a night splint for persistent first-step pain, and only then a selective corticosteroid injection (short-term relief; risks of fascia rupture and fat-pad atrophy; not repeated routinely). Shockwave therapy: NICE HTG200 [2] allows it only with special arrangements for governance, consent and audit because effectiveness is uncertain."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Denton, I’m Dr Hughes. What brings you in?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "My right heel’s been killing me for a few weeks. The worst bit is the first few steps when I get out of bed. It’s like stepping on a stone or a knife. Then it eases off as I get going, but comes back after I’ve been sitting. I’ve started running and I’m on my feet all day. What is it?"
   },
   {
    "who": "dr",
    "text": "That’s a very clear description, thank you. I’ll ask a few more questions and have a look, and then I’ll explain what I think it is.",
    "dom": "rto",
    "why": "Acknowledges; signposts the consultation"
   },
   {
    "phase": "History",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Where exactly is the pain? Show me with a finger.",
    "dom": "tasks",
    "why": "Localises the pain"
   },
   {
    "who": "pt",
    "text": "Underneath, towards the inside of the heel."
   },
   {
    "who": "dr",
    "text": "When did you start running, and how quickly did you build it up? Was there a moment it started, or a particular run?",
    "dom": "tasks",
    "why": "Load change; screens for stress fracture"
   },
   {
    "who": "pt",
    "text": "Only recently. I probably went at it a bit hard. No single moment, it just crept up."
   },
   {
    "who": "dr",
    "text": "Can you put your full weight on it? Is it ever painful at night, or constant even at rest?",
    "dom": "tasks",
    "why": "Red flags: weight-bearing, night and rest pain"
   },
   {
    "who": "pt",
    "text": "I can walk on it. It’s fine at night."
   },
   {
    "who": "dr",
    "text": "Any burning, tingling or numbness in the foot, or back pain going down the leg?",
    "dom": "tasks",
    "why": "Tarsal tunnel and S1 radiculopathy"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Any back pain and stiffness that’s worse in the mornings, other painful or swollen joints, psoriasis, eye inflammation or bowel problems? And have you been well in yourself, no fevers or weight loss?",
    "dom": "tasks",
    "why": "Inflammatory enthesitis and systemic red flags (NG65)"
   },
   {
    "who": "pt",
    "text": "No. The only change in weight is that I’ve put some on, which is partly why I started running."
   },
   {
    "who": "dr",
    "text": "How is it affecting your work and life?",
    "dom": "rto",
    "why": "Explores impact"
   },
   {
    "who": "pt",
    "text": "I’m on my feet all day, so by the end of the shift it’s sore again. I don’t want to give up the running now I’ve started."
   },
   {
    "phase": "Examination",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Let me watch you walk and then examine both feet, including a quick check of the nerves.",
    "dom": "tasks",
    "why": "Gait, both feet, neurovascular"
   },
   {
    "who": "dr",
    "text": "You’re tender right here on the inside front of the heel bone, and bending your toes back brings on the pain. Squeezing the heel bone from the sides doesn’t hurt, so there’s no sign of a stress fracture. Your calf is tight. Pulses, feeling and reflexes are normal, and the Achilles is fine.",
    "dom": "tasks",
    "why": "Medial tubercle tenderness, negative squeeze, tight calf, normal neurovascular"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "6–7 min",
    "who": "dr",
    "text": "What did you think was going on? And what worries you most?",
    "dom": "rto",
    "why": "Elicits ideas and concerns"
   },
   {
    "who": "pt",
    "text": "I thought it was the running. I’m worried I’ll have to stop, and how long it’ll last with my job."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "You’re right that the running has played a part. This is plantar fasciitis: the tough band under your foot is strained where it attaches to the heel bone. Long days standing plus building up running quickly overloaded it. It explains that first-step pain exactly. We don’t need a scan.",
    "dom": "tasks",
    "why": "Names diagnosis; links to load; no imaging"
   },
   {
    "who": "pt",
    "text": "Will it go?"
   },
   {
    "who": "dr",
    "text": "Most people get better, but I’ll be honest: it often takes several months, and it helps to know that from the start.",
    "dom": "tasks",
    "why": "Realistic timescale"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "You don’t need to stop moving. Rest completely and it tends to stiffen; overload it and it flares. So cut the running back to a level that doesn’t make the next morning worse, perhaps swapping some for cycling or swimming, then build up gradually.",
    "dom": "tasks",
    "why": "Load modification, not complete rest"
   },
   {
    "who": "pt",
    "text": "I can do that."
   },
   {
    "who": "dr",
    "text": "Stretch your calf and the sole of your foot every day, especially before those first steps in the morning, and I’ll show you some strengthening exercises. Supportive, cushioned shoes for work, and a cheap heel cup from a pharmacy is worth trying. Expensive custom insoles aren’t needed at this stage.",
    "dom": "tasks",
    "why": "Stretching, strengthening, footwear, heel cushioning"
   },
   {
    "who": "dr",
    "text": "Paracetamol or an anti-inflammatory gel can take the edge off so you can keep moving. Any stomach, kidney or heart problems I should know about before tablets like ibuprofen?",
    "dom": "tasks",
    "why": "Analgesia to support activity; NSAID safety"
   },
   {
    "who": "pt",
    "text": "No, none."
   },
   {
    "who": "dr",
    "text": "You mentioned the weight. Carrying less does take load off the heel over time. If you’d like help with that, we can talk about it, but it’s not a condition of getting better.",
    "dom": "rto",
    "why": "Raises weight sensitively and offers, not imposes"
   },
   {
    "who": "pt",
    "text": "Fair enough. The running was meant to help with that."
   },
   {
    "who": "dr",
    "text": "And it still can, once the heel settles. If it’s not improving after several weeks of this, I’ll refer you to physio. Injections and other treatments are for the minority who don’t settle.",
    "dom": "tasks",
    "why": "Escalation pathway: physio, then selective options"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Come back sooner if you can’t put weight on it, you get a sharp pinpoint pain in the heel bone itself, especially after a run, the heel becomes swollen, hot or red, or you get numbness or tingling in the foot, or pain at night. Can you tell me the plan so I know I’ve explained it well?",
    "dom": "gs",
    "why": "Red flags: stress fracture, infection, nerve; teach-back"
   },
   {
    "who": "pt",
    "text": "Keep moving but cut the running back, stretch every morning, better shoes and a heel cup, painkillers if I need them. Back if it’s no better in a few weeks or I get those warning signs."
   },
   {
    "who": "dr",
    "text": "That’s it. Let’s book a review in about six weeks.",
    "dom": "gs",
    "why": "Arranges review"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him describe the classic first-step pain uninterrupted.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Standing job, new running, weight gain as his reason for running, and his wish to keep active.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the rapid build-up of running as a stress-fracture risk and his fear of having to stop.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (the running caused it), concern (stopping running; work), expectation (diagnosis and a fix).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Gait, both feet, medial tubercle tenderness, calcaneal squeeze, calf tightness, neurovascular examination; no imaging.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Plantar fasciopathy versus stress fracture, fat pad, tarsal tunnel, S1 radiculopathy, Achilles and enthesitis.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about weight-bearing, night and rest pain, nerve symptoms, inflammatory features and systemic symptoms.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named plantar fasciitis and explained the load mechanism.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Load modification without complete rest; stretching and strengthening; footwear and heel cup; analgesia if suitable.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Weight raised sensitively; NSAID safety checked; physiotherapy, then selective injection or specialist options if persistent.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Red flags for fracture, infection and nerve problems; honest months-long timescale; review at about 6 weeks; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Carl Denton",
    "age": "47 years · male",
    "pmh": [
     "Recent weight gain"
    ],
    "meds": [
     "Check repeat record"
    ],
    "allergy": "None recorded",
    "recent": "Right heel pain for weeks; first-step pain. New running; standing job.",
    "reason": "“What is it?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Let him give the classic story."
    },
    {
     "t": "1–4",
     "h": "History",
     "d": "Site, running build-up, weight-bearing, night pain, tingling, back and inflammatory features, systemic symptoms, impact."
    },
    {
     "t": "4–7",
     "h": "Examine and ICE",
     "d": "Gait, tubercle tenderness, squeeze test, calf, neurovascular. Fears stopping running and effect on work."
    },
    {
     "t": "7–11",
     "h": "Explain and plan",
     "d": "Name it; months to settle; adjust load, don’t stop; stretch and strengthen; footwear and heel cup; analgesia if suitable; weight offered; physio if persistent."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "Fracture, infection and nerve warning signs; teach-back; review at about 6 weeks."
    }
   ],
   "wordPics": {
    "fail": "Orders an X-ray for a typical case; tells him to stop all activity; offers an injection or anti-inflammatories as the main treatment; misses the stress-fracture question after rapid running build-up; lectures on weight.",
    "pass": "Recognises plantar fasciitis, examines for a stress fracture and nerve causes, gives stretching, load, footwear and analgesia advice, sets a realistic timescale and safety-nets.",
    "exc": "All of the above, plus: keeps him running at a tolerable load; explains the load mechanism in his terms; offers weight support without making it a condition; screens for inflammatory enthesitis; places injection and shockwave correctly as later, selective options; arranges review."
   },
   "avoid": [
    {
     "dont": "“Stop running and rest it completely.”",
     "instead": "“Cut back to a level that doesn’t make the next morning worse, then build up gradually.”",
     "why": "Complete rest is not recommended; load modification is."
    },
    {
     "dont": "“You need to lose weight or it won’t get better.”",
     "instead": "“Carrying less takes load off the heel over time. We can help if you’d like.”",
     "why": "Weight is a risk factor, not a condition of treatment, and blaming loses engagement."
    },
    {
     "dont": "“A steroid injection will sort it.”",
     "instead": "“Most people get better with stretching and load changes. Injections are for the few who don’t.”",
     "why": "Injection is not first-line and carries risks of fascia rupture and fat-pad atrophy."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work",
     "t": "Standing all day loads the heel. Supportive footwear and, where possible, breaks from standing help."
    },
    {
     "h": "Activity and weight",
     "t": "He started running to manage his weight. Keeping him active in some form protects that goal."
    }
   ],
   "legal": [
    {
     "h": "Fit note",
     "t": "Most people with plantar heel pain stay at work. If standing all day is not possible for a period, a fit note can advise altered duties or reduced standing rather than time off."
    }
   ],
   "professional": [
    {
     "h": "Avoiding low-value care",
     "t": "Routine imaging and early injections add cost and risk without benefit in a typical case."
    },
    {
     "h": "Shared decisions",
     "t": "Explaining why rest is not the answer, and agreeing a running plan with him, supports adherence."
    }
   ],
   "community": [
    {
     "h": "Physiotherapy and podiatry",
     "t": "Many areas offer self-referral to MSK physiotherapy or podiatry for persistent symptoms."
    },
    {
     "h": "Weight and activity support",
     "t": "Local weight-management or activity schemes can be offered if he wants help."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Unable to weight-bear, focal bony tenderness or positive squeeze test after a rise in running: calcaneal stress fracture",
     "Heel swelling, warmth, redness or fever: infection",
     "Night or rest pain, weight loss, known malignancy: tumour",
     "Burning, tingling, numbness or back pain: nerve entrapment or radiculopathy",
     "Inflammatory back pain, psoriasis, uveitis, inflammatory bowel disease: enthesitis (NG65)"
    ],
    "psychosocial": [
     "Standing job",
     "New running and weight goals",
     "Fear of stopping activity"
    ],
    "ice": [
     "Idea: the running caused it",
     "Concern: having to stop running; coping at work",
     "Expectation: a diagnosis and a fix"
    ]
   },
   "diagnosis": "“This is plantar fasciitis: the band of tissue under your foot is overloaded where it joins the heel bone.”",
   "diagnosisLay": "“Think of a bowstring under your foot. Overnight it tightens up, so the first steps pull hard where it joins the heel. As you walk it loosens, which is why it eases. Too much load too quickly has frayed it where it’s anchored.”",
   "management": {
    "reflectIce": "“You were worried you’d have to stop running. You don’t: we’ll adjust the load so the heel can recover and then build you back up.”",
    "psychosocial": "Keep him active and at work; offer weight support on his terms.",
    "sharedPlan": [
     "Education and a realistic timescale of months",
     "Load modification, not complete rest (JOSPT/APTA)",
     "Daily calf and plantar-fascia stretching; progressive strengthening",
     "Supportive footwear; low-cost heel cup",
     "Paracetamol or topical or short oral NSAID if suitable (BNF)",
     "Physiotherapy if persistent; injection or shockwave (HTG200) only selectively"
    ],
    "safetyNet": [
     "Unable to weight-bear or pinpoint bone pain: urgent review",
     "Hot, swollen or red heel, or fever",
     "Numbness, tingling, night pain; review at about 6 weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Plantar heel pain protocol",
    "s": "Load, stretch, escalate · HTG200",
    "href": "management/plantar-fasciitis.html"
   },
   {
    "ic": "🗺️",
    "t": "Foot pain",
    "s": "Visual algorithm · mimics and red flags",
    "href": "algorithms/foot-pain.html"
   },
   {
    "ic": "💠",
    "t": "Achilles tendinopathy",
    "s": "Posterior heel pain",
    "href": "management/achilles-tendinopathy.html"
   },
   {
    "ic": "📋",
    "t": "Axial spondyloarthritis",
    "s": "Case walkthrough · enthesitis",
    "href": "../cases/axial-spa.html"
   }
  ],
  "pitfalls": {
   "intro": "A textbook story. Marks go to excluding a stress fracture and nerve causes, advising load change rather than rest, and handling his wish to keep running and the weight question well.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Not considering a stress fracture after a rapid rise in running.",
     "why": "Focal bony pain and a positive squeeze test need imaging.",
     "fix": "Ask about the build-up and do the squeeze test."
    },
    {
     "dom": "tasks",
     "fail": "X-ray for a typical case.",
     "why": "The diagnosis is clinical; imaging is for atypical features.",
     "fix": "Explain the clinical findings."
    },
    {
     "dom": "tasks",
     "fail": "Complete rest.",
     "why": "Load modification with tolerable activity is recommended.",
     "fix": "Reduce and rebuild running gradually."
    },
    {
     "dom": "tasks",
     "fail": "Injection or shockwave at first presentation.",
     "why": "Not first-line; injection risks rupture and fat-pad atrophy; HTG200 requires special arrangements.",
     "fix": "Stretch, strengthen, footwear; physiotherapy if persistent."
    },
    {
     "dom": "rto",
     "fail": "Lecturing about weight.",
     "why": "He started running to address it; blame disengages him.",
     "fix": "Offer support and link it to his own goal."
    },
    {
     "dom": "gs",
     "fail": "Promising a quick recovery.",
     "why": "Recovery often takes months; false hope reduces adherence.",
     "fix": "Give an honest timescale and a review date."
    }
   ]
  }
 },
 "pmdd": {
  "stem": {
   "name": "Carys Devlin",
   "age": "33-year-old woman",
   "pmh": [
    "Previously told she has “bad PMS”"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "Previous consultation about premenstrual symptoms: advised it was premenstrual syndrome.",
   "reason": "Booked appointment: “My moods before my period are wrecking my life.”"
  },
  "knowledge": {
   "guideline": "[1] RCOG Green-top Guideline No. 48 Management of premenstrual syndrome (December 2016; BJOG 2017) · [2] NICE NG225 Self-harm: assessment, management and preventing recurrence (2022) · [3] NICE NG222 Depression in adults: treatment and management (2022, updated December 2025) · [4] UKMEC 2025 (FSRH/CoSRH) · [5] BNF: selective serotonin re-uptake inhibitors · [6] DSM-5-TR (APA 2022) (international)",
   "summary": "Severe rage, despair and tearfulness in the week or two before each period, which lift within days of bleeding, with a symptom-free week and damage to relationships, is premenstrual dysphoric disorder (PMDD), the severe end of premenstrual syndrome. The GP should believe her, confirm the cyclical pattern prospectively, rule out a persistent mood disorder, ask directly about suicidal thoughts, and offer RCOG first-line options including an SSRI (continuous or luteal phase) or a new-generation combined pill.",
   "points": [
    {
     "h": "Definition",
     "t": "The main UK guideline on premenstrual syndrome is RCOG Green-top Guideline No. 48 [1]. Symptoms occur in the luteal phase, resolve by the end of menstruation, and are absent for at least a week in the follicular phase. PMDD is the severe, predominantly psychological form; the formal criteria are in DSM-5-TR [6] (international)."
    },
    {
     "h": "Symptom diary",
     "t": "RCOG [1]: diagnose using prospective daily symptom ratings over two consecutive cycles, for example the Daily Record of Severity of Problems (DRSP). Retrospective recall is unreliable. A symptom-free week separates PMDD from depression or anxiety that worsens before periods."
    },
    {
     "h": "Risk",
     "t": "Ask directly about suicidal thoughts and self-harm, especially in the luteal phase. NICE NG225 [2]: do not use risk tools or label risk as low, medium or high; agree a safety plan. Ask about bipolar symptoms before an SSRI."
    },
    {
     "h": "First line",
     "t": "RCOG [1] first-line options: exercise, CBT, vitamin B6, a new-generation combined oral contraceptive (drospirenone-containing pills usually more effective), taken cyclically or continuously, and low-dose SSRIs, given continuously or in the luteal phase only (days 15 to 28). SSRIs are unlicensed for PMS in the UK (dose per BNF [5]). Check UKMEC [4] before a combined pill: migraine with aura is UKMEC 4."
    },
    {
     "h": "SSRI review",
     "t": "NICE NG222 [3]: review within 1 week of starting an antidepressant if at increased suicide risk. Withdraw gradually after continuous use; luteal-phase dosing avoids withdrawal effects."
    },
    {
     "h": "Second line and referral",
     "t": "RCOG [1]: second-line includes transdermal estradiol (100 micrograms twice weekly is as effective as 200 micrograms) with cyclical progestogen or an LNG-IUS for endometrial protection. Specialist care for GnRH analogues (with add-back HRT if used beyond 6 months) and, rarely, surgery. Review after two to three cycles of each treatment."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Miss Devlin, I’m Dr Evans. What would you like to talk about today?",
    "dom": "rto",
    "why": "Open start"
   },
   {
    "who": "pt",
    "text": "I feel like I’m going mad. For a week or two before my period I turn into a different person: furious over nothing, then this black despair, crying, snapping at my partner and kids. I’ve frightened myself with how low I get. Then my period comes and within a day or two it just lifts, and I’m fine. My last doctor said it’s just bad PMS. It’s wrecking my life."
   },
   {
    "who": "dr",
    "text": "I’m sorry it’s been so hard, and that you felt brushed off before. I’d like to understand exactly what happens, so we can do something about it.",
    "dom": "rto",
    "why": "Validates and responds to feeling dismissed"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When your period finishes, how are you in the week or so after? Completely yourself, or still low?",
    "dom": "tasks",
    "why": "Tests for a symptom-free follicular phase"
   },
   {
    "who": "pt",
    "text": "Completely fine. Like a light switches back on. That’s why it’s so confusing."
   },
   {
    "who": "dr",
    "text": "And when does it start again, compared with your period?",
    "dom": "tasks",
    "why": "Luteal timing"
   },
   {
    "who": "pt",
    "text": "About ten days before, sometimes two weeks. It builds up."
   },
   {
    "who": "dr",
    "text": "Are your periods regular? Any physical symptoms at that time, like bloating or sore breasts?",
    "dom": "tasks",
    "why": "Cycle pattern and physical symptoms"
   },
   {
    "who": "pt",
    "text": "Regular. Yes, I get bloated and my breasts are sore, but the moods are the real problem."
   },
   {
    "who": "dr",
    "text": "Have you ever had long spells of low mood, or times when you felt unusually high or needed little sleep, that weren’t tied to your cycle?",
    "dom": "tasks",
    "why": "Screens persistent depression and bipolar features"
   },
   {
    "who": "pt",
    "text": "No, only before my period."
   },
   {
    "who": "dr",
    "text": "You said you’ve frightened yourself with how low you get. Can I ask directly: in those days, have you had thoughts of harming yourself, or that life isn’t worth living?",
    "dom": "tasks",
    "why": "Picks up the cue and asks about suicide directly"
   },
   {
    "who": "pt",
    "text": "(quietly) Sometimes I’ve thought everyone would be better off without me. I’ve never done anything, and it goes when my period comes."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That matters and I’m glad you said it. Have you ever made plans, or harmed yourself?",
    "dom": "tasks",
    "why": "Explores intent and plans"
   },
   {
    "who": "pt",
    "text": "No. Never. I’d never leave the kids."
   },
   {
    "who": "dr",
    "text": "How is this affecting home and work? And how does your partner see it?",
    "dom": "tasks",
    "why": "Functional impact and relationships"
   },
   {
    "who": "pt",
    "text": "We row every month. I hate how I am with the children. Then I feel guilty."
   },
   {
    "phase": "ICE",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What have you been thinking is going on?",
    "dom": "rto",
    "why": "Elicits her idea"
   },
   {
    "who": "pt",
    "text": "That I’m going mad. Or that I’m just a horrible person that week."
   },
   {
    "who": "dr",
    "text": "And what were you hoping for today?",
    "dom": "rto",
    "why": "Expectation"
   },
   {
    "who": "pt",
    "text": "For someone to take it seriously, and something that actually helps."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "You’re not going mad and you’re not a horrible person. This looks like premenstrual dysphoric disorder, PMDD. It’s the severe form of premenstrual syndrome, where the brain is very sensitive to the normal hormone changes after ovulation. It’s recognised and it’s treatable.",
    "dom": "tasks",
    "why": "Names PMDD and validates"
   },
   {
    "who": "dr",
    "text": "To be sure, I’d like you to keep a daily symptom diary for two cycles. It shows the pattern clearly and checks it isn’t a low mood that’s there all month.",
    "dom": "tasks",
    "why": "Prospective diary over two cycles (RCOG GTG 48)"
   },
   {
    "who": "pt",
    "text": "Do I have to wait two months for help, though?"
   },
   {
    "who": "dr",
    "text": "No. We can start treatment now and use the diary to see how well it works.",
    "dom": "rto",
    "why": "Responds to her need for action"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "There are two main medical options. One is an SSRI antidepressant, which is used for PMDD even when there’s no depression. You can take it every day, or only in the two weeks before your period. The other is a type of combined pill, often taken without breaks, to stop the hormone swings. Exercise and a talking therapy called CBT help too. What would suit you?",
    "dom": "tasks",
    "why": "RCOG first-line options with shared decision"
   },
   {
    "who": "pt",
    "text": "I’d rather not take hormones. The SSRI in the second half sounds good."
   },
   {
    "who": "dr",
    "text": "That’s a sensible choice. It’s commonly used for this, although it isn’t formally licensed for it. Some people feel a bit sick or more anxious in the first days. I’d like to speak to you again in a week to see how you are, given those darker thoughts.",
    "dom": "tasks",
    "why": "SSRI counselling; early review (NICE NG222)"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "Let’s also make a plan for the bad days. What helps you get through them, and who could you tell if the thoughts got stronger?",
    "dom": "tasks",
    "why": "Collaborative safety plan (NICE NG225)"
   },
   {
    "who": "pt",
    "text": "My partner. I could tell him when it’s starting."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "That’s a good plan. If those thoughts become stronger, or you feel you might act on them, contact us the same day, call NHS 111 and choose the mental health option, or 999 in an emergency. I’ll call you in a week, then see you after two cycles with the diary. Can you tell me the plan back?",
    "dom": "gs",
    "why": "Crisis safety-net, review and teach-back"
   },
   {
    "who": "pt",
    "text": "Diary every day, tablets in the second half of my cycle, call in a week, and ring straight away if the thoughts get worse."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; acknowledged the previous dismissal.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Relationships, parenting, guilt and work explored.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I’ve frightened myself with how low I get” and asked directly about suicidal thoughts.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (going mad or a bad person), concern (the lows and the family), expectation (to be taken seriously and helped).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Prospective daily symptom diary over two cycles (RCOG GTG 48); no routine blood tests needed.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "PMDD versus ordinary PMS, persistent depression or anxiety with premenstrual worsening, and bipolar disorder.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Suicidal thoughts, plans and self-harm explored; bipolar features screened before an SSRI.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named PMDD as the severe form of premenstrual syndrome.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "SSRI (luteal or continuous) or new-generation combined pill offered with CBT and exercise (RCOG GTG 48); her choice respected.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Guilt and impact on the family addressed; partner involved in the safety plan with her agreement.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review in 1 week given suicidal thoughts (NICE NG222), then after two cycles; crisis routes given; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Carys Devlin",
    "age": "33 years · female",
    "pmh": [
     "Told “bad PMS” previously"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "Previous consultation: advised premenstrual syndrome.",
    "reason": "“My moods before my period are wrecking my life.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and validate",
     "d": "Let her finish. Acknowledge the previous dismissal."
    },
    {
     "t": "1–5",
     "h": "Pattern and risk",
     "d": "Symptom-free week, luteal timing, physical symptoms, persistent or bipolar mood, suicidal thoughts and plans, impact on family and work."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "“Going mad” and “a horrible person”. Name both."
    },
    {
     "t": "6–8",
     "h": "Name and confirm",
     "d": "PMDD by name; daily diary over two cycles; start treatment now."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "SSRI or combined pill, CBT, exercise; safety plan; review in 1 week and after two cycles; crisis routes; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Repeats “it’s just PMS”; never asks about suicidal thoughts despite “I frighten myself”; offers evening primrose oil or nothing; no diary, no follow-up.",
    "pass": "Recognises PMDD, asks about suicide, requests a symptom diary, offers an SSRI or combined pill and arranges review.",
    "exc": "All of the above, plus: tests for the symptom-free week and bipolar features; explores intent and protective factors calmly; explains PMDD in plain words; lets her choose between options, including luteal-phase SSRI dosing; builds a safety plan with her partner; arranges early review because of her thoughts; checks understanding with teach-back."
   },
   "avoid": [
    {
     "dont": "“Lots of women get moody before their period.”",
     "instead": "“What you describe is more than ordinary PMS. It’s a recognised condition called PMDD, and it’s treatable.”",
     "why": "She has been dismissed once already; minimising it damages trust and misses risk."
    },
    {
     "dont": "“You’re not suicidal, are you?”",
     "instead": "“In those days, have you had thoughts of harming yourself, or that life isn’t worth living?”",
     "why": "A leading question invites a no; a direct open question is safer."
    },
    {
     "dont": "“Come back when you’ve done two months of diary.”",
     "instead": "“Let’s start treatment now and use the diary to see how well it works.”",
     "why": "Her distress and risk justify starting treatment while the diary confirms the pattern."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family",
     "t": "Monthly conflict affects her partner and children. With her consent, involving her partner helps both understanding and the safety plan."
    },
    {
     "h": "Work",
     "t": "Predictable monthly impairment may need workplace adjustments during the luteal phase."
    }
   ],
   "legal": [
    {
     "h": "Children at home",
     "t": "She describes snapping at her children, with guilt, not harm. This is a reason for support, not a safeguarding referral, unless there are concerns about the children’s safety; keep this under review."
    },
    {
     "h": "Unlicensed use",
     "t": "SSRIs are unlicensed for premenstrual syndrome. Explain this and document the discussion (GMC prescribing guidance)."
    }
   ],
   "professional": [
    {
     "h": "Being believed",
     "t": "Validation after dismissal is part of the treatment. Record the diagnosis clearly so she is not dismissed again."
    },
    {
     "h": "Risk documentation",
     "t": "Record her suicidal thoughts, the absence of plans or acts, protective factors and the safety plan, without a risk label (NICE NG225)."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "NHS Talking Therapies can provide CBT. PMDD charities offer information and peer support. Crisis lines and NHS 111 mental health option for bad days."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Suicidal thoughts with plans or intent",
     "Self-harm",
     "Symptoms persisting through the whole cycle (depression)",
     "Periods of elevated mood (bipolar disorder)",
     "Concern for the children’s safety"
    ],
    "psychosocial": [
     "Monthly rows with her partner",
     "Guilt about how she is with her children",
     "Feeling dismissed by a previous doctor"
    ],
    "ice": [
     "Idea: going mad, or a horrible person that week",
     "Concern: the depth of the lows; the effect on her family",
     "Expectation: to be taken seriously and helped"
    ]
   },
   "diagnosis": "“This looks like premenstrual dysphoric disorder, PMDD, the severe form of premenstrual syndrome. It’s real, recognised and treatable.”",
   "diagnosisLay": "“Your hormone levels are normal, but your brain reacts strongly to the rise and fall after ovulation. That’s why you feel well after your period and unwell before the next one.”",
   "management": {
    "reflectIce": "“You thought you might be going mad. You’re not. This has a name and treatments that work.”",
    "psychosocial": "Validate the dismissal; address guilt; involve her partner in a safety plan with consent.",
    "sharedPlan": [
     "Daily symptom diary for two cycles, for example DRSP (RCOG GTG 48)",
     "SSRI in the luteal phase or continuously, unlicensed use, dose per BNF; or a new-generation combined pill if UKMEC allows",
     "CBT and exercise; specialist referral if first- and second-line treatments fail"
    ],
    "safetyNet": [
     "Stronger suicidal thoughts or any intent: same-day contact, NHS 111 mental health option, or 999",
     "Review in 1 week after starting the SSRI (NICE NG222), then after two cycles with the diary",
     "New agitation or mood elevation on the SSRI: seek review"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Premenstrual disorder",
    "s": "Case walkthrough · RCOG GTG 48",
    "href": "../cases/premenstrual-disorder.html"
   },
   {
    "ic": "💠",
    "t": "Premenstrual syndrome",
    "s": "Management protocol · SSRI and COC options",
    "href": "management/premenstrual-syndrome.html"
   },
   {
    "ic": "💠",
    "t": "Depression",
    "s": "Management protocol · NICE NG222",
    "href": "management/depression.html"
   },
   {
    "ic": "📋",
    "t": "Contraception",
    "s": "Case walkthrough · UKMEC",
    "href": "../cases/contraception.html"
   }
  ],
  "pitfalls": {
   "intro": "This station punishes the previous doctor’s mistake. The candidate must believe her, prove the pattern, find the suicidal thoughts behind “I frighten myself”, and offer real treatment.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Labelling it ordinary PMS.",
     "why": "Severe psychological symptoms with a symptom-free week and major impact fit PMDD.",
     "fix": "Name PMDD and explain it."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about suicidal thoughts.",
     "why": "She says she frightens herself; PMDD carries luteal-phase suicide risk.",
     "fix": "Ask directly and build a safety plan (NICE NG225)."
    },
    {
     "dom": "tasks",
     "fail": "No prospective diary.",
     "why": "RCOG GTG 48 recommends daily ratings over two cycles; recall is unreliable.",
     "fix": "Give a daily diary such as the DRSP."
    },
    {
     "dom": "tasks",
     "fail": "Missing a persistent mood disorder or bipolar disorder.",
     "why": "Depression with premenstrual worsening needs different treatment; SSRIs can trigger mania.",
     "fix": "Ask about the follicular week and elevated mood."
    },
    {
     "dom": "rto",
     "fail": "Choosing the treatment for her.",
     "why": "Options differ in hormones, contraception and timing.",
     "fix": "Lay out SSRI and combined pill options and let her choose."
    },
    {
     "dom": "gs",
     "fail": "Routine follow-up only.",
     "why": "She has suicidal thoughts and is starting an SSRI.",
     "fix": "Review within 1 week (NICE NG222) and give crisis routes."
    }
   ]
  }
 },
 "sjs-ten": {
  "stem": {
   "name": "Nadia Karim",
   "age": "34-year-old woman",
   "pmh": [
    "Epilepsy",
    "Lamotrigine started about ten days ago for epilepsy (the suspected culprit)"
   ],
   "meds": [
    "Lamotrigine — started about ten days ago for epilepsy"
   ],
   "allergy": "None recorded before this episode",
   "recent": "About ten days after starting lamotrigine for epilepsy: spreading painful rash with blisters and peeling skin, painful mouth sores, red sore eyes, pain passing urine, fever and malaise.",
   "reason": "Urgent video call: “Is this the tablet?”"
  },
  "knowledge": {
   "guideline": "[1] UK guidelines for the management of Stevens–Johnson syndrome/toxic epidermal necrolysis in adults (British Association of Dermatologists, 2016) · [2] NICE NG253 (suspected sepsis in people aged 16 and over) · [3] MHRA Yellow Card scheme · [4] BNF monographs of the suspected drug (for example lamotrigine, carbamazepine, allopurinol, co-trimoxazole)",
   "summary": "A painful spreading rash with dusky target-like patches, blisters and peeling skin, erosions of the mouth, eyes and genitals, and fever, about ten days after a new drug (here lamotrigine, started for epilepsy), is Stevens–Johnson syndrome or toxic epidermal necrolysis until proven otherwise. Stop the drug, send her to hospital by 999 ambulance with a call ahead, document a severe allergy, and report it on a Yellow Card.",
   "points": [
    {
     "h": "Recognise it",
     "t": "Prodromal fever and malaise, then painful dusky red or purple macules and atypical targets that blister and detach, with erosions at two or more mucosal sites (mouth, eyes, genitals). Skin tenderness out of proportion to the rash is an early clue. Onset is typically 4–28 days after starting a new drug [1]."
    },
    {
     "h": "Extent",
     "t": "Body surface area of detachment: SJS below 10%, SJS/TEN overlap 10–30%, TEN above 30% [1]. Severity and prognosis are assessed in hospital (SCORTEN)."
    },
    {
     "h": "Culprit drugs",
     "t": "High-risk drugs include allopurinol, carbamazepine, lamotrigine, phenytoin, phenobarbital, sulfonamide antibiotics such as co-trimoxazole, nevirapine and oxicam NSAIDs [1][4]. Identify every drug started in the past two months, including over-the-counter and herbal products."
    },
    {
     "h": "Act now",
     "t": "Stop the suspected drug immediately; early withdrawal improves survival [1]. Arrange emergency admission — dermatology-led care, often in a burns or intensive care unit, with early ophthalmology review because eye damage can be permanent [1]. Assess for sepsis risk (NICE NG253 [2]); on video, observations cannot be taken, which lowers the threshold further."
    },
    {
     "h": "Differentials",
     "t": "Erythema multiforme (typical raised targets on the limbs, often after herpes simplex, limited mucosal involvement, little systemic illness); staphylococcal scalded skin syndrome (mostly young children, superficial peeling, no mucosal erosions); DRESS (widespread rash, facial swelling, fever, eosinophilia and organ involvement, usually 2–8 weeks after the drug); generalised bullous fixed drug eruption."
    },
    {
     "h": "If the drug treats something important",
     "t": "If the culprit is an antiepileptic, stopping it still comes first; the hospital team will arrange safe seizure cover. Never re-start it without specialist advice."
    },
    {
     "h": "Afterwards",
     "t": "Record the drug as a severe reaction (not a simple intolerance) with the date and reaction; add a clear alert. Report on a Yellow Card [3]. The patient should carry the information and avoid the drug for life; related drugs are discussed with the specialist."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Karim, I’m Dr Mensah. Can you hear and see me clearly? Tell me what’s been happening.",
    "dom": "rto",
    "why": "Checks the video link and opens"
   },
   {
    "who": "pt",
    "text": "I started a new tablet about ten days ago, and now I’ve got this rash spreading everywhere, some bits blistering and the skin coming away. My mouth is full of painful sores, my eyes are red and sore, and it hurts to wee. I feel awful and feverish. Is this the tablet?"
   },
   {
    "who": "dr",
    "text": "Thank you. I’m worried this could be a serious reaction to the tablet, so I’m going to ask a few quick questions and look at what I can on the camera. Then I’ll tell you exactly what we need to do. Is that okay?",
    "dom": "gs",
    "why": "Signals urgency calmly and sets a short agenda"
   },
   {
    "who": "pt",
    "text": "Yes. I’m scared."
   },
   {
    "phase": "Rapid assessment",
    "clock": "1–4 min",
    "who": "dr",
    "text": "First — are you having any trouble breathing or swallowing? Are you managing to drink?",
    "dom": "tasks",
    "why": "Checks airway, breathing and fluid intake first"
   },
   {
    "who": "pt",
    "text": "Swallowing hurts. I can sip water. My breathing’s okay."
   },
   {
    "who": "dr",
    "text": "Can you show me your mouth, and your eyes, on the camera? … And the rash on your chest or arms? Is it painful, or itchy?",
    "dom": "tasks",
    "why": "Uses video to inspect mucosa and skin; pain versus itch"
   },
   {
    "who": "pt",
    "text": "(Shows crusted lips, red eyes and dusky patches with blisters on the chest.) It’s painful, it burns. Not really itchy."
   },
   {
    "who": "dr",
    "text": "If you press gently next to a blister, does the skin slide or peel off?",
    "dom": "tasks",
    "why": "Remote check for skin detachment"
   },
   {
    "who": "pt",
    "text": "Yes, it comes away, look."
   },
   {
    "who": "dr",
    "text": "Can you hold the tablet box up to the camera? … Thank you. When did you start it, and what was it for? Any other new medicines or remedies in the last two months?",
    "dom": "tasks",
    "why": "Identifies the culprit and all recent drugs"
   },
   {
    "who": "pt",
    "text": "It’s lamotrigine, for my epilepsy — I started it about ten days ago. Nothing else new that I can think of."
   },
   {
    "who": "dr",
    "text": "Have you had anything like this before, or cold sores recently?",
    "dom": "tasks",
    "why": "Screens for previous reaction and HSV-triggered erythema multiforme"
   },
   {
    "who": "pt",
    "text": "Not that I can think of."
   },
   {
    "phase": "Explanation",
    "clock": "4–6 min",
    "who": "dr",
    "text": "I’m going to be straight with you, because it matters. The painful rash, blisters, skin peeling and sores in your mouth, eyes and down below, after a new tablet, look like a rare but serious reaction called Stevens–Johnson syndrome. It needs hospital care today.",
    "dom": "tasks",
    "why": "Names SJS/TEN and the need for admission clearly"
   },
   {
    "who": "pt",
    "text": "Hospital? Can’t I just have some cream?"
   },
   {
    "who": "dr",
    "text": "I understand that’s a lot to hear. Cream and antihistamines won’t be enough. The skin is a protective barrier, and when it peels you can lose fluid and pick up infection quickly, and your eyes need a specialist to protect them. Hospital teams treat this every day.",
    "dom": "rto",
    "why": "Acknowledges fear; explains why community care is unsafe"
   },
   {
    "who": "pt",
    "text": "Okay. What do I do?"
   },
   {
    "phase": "Immediate management",
    "clock": "6–10 min",
    "who": "dr",
    "text": "Three things. First, don’t take any more of the lamotrigine — not even tonight’s dose. Put the box in your bag to take with you.",
    "dom": "tasks",
    "why": "Stops the culprit drug immediately"
   },
   {
    "who": "pt",
    "text": "But it’s for my epilepsy. What if I have a fit?"
   },
   {
    "who": "dr",
    "text": "I know, and the hospital will look after your epilepsy today — they will give you safe seizure cover and an alternative if needed. Right now the reaction is the bigger danger. Second, I’m calling an ambulance for you now, rather than you getting there yourself. Please don’t drive.",
    "dom": "tasks",
    "why": "Explains stopping safely; 999 ambulance"
   },
   {
    "who": "pt",
    "text": "An ambulance? Is it that bad?"
   },
   {
    "who": "dr",
    "text": "It’s serious enough that I want you there quickly and safely. I’ll phone the hospital team so they know you’re coming. Is anyone with you, or someone you can call to be with you until it arrives?",
    "dom": "rto",
    "why": "Honest about severity; practical support"
   },
   {
    "who": "pt",
    "text": "I’ll ring someone now."
   },
   {
    "who": "dr",
    "text": "Good. Third, I’m recording lamotrigine on your notes as a serious reaction, so it’s never prescribed again, and I’ll report it to the medicines regulator on a Yellow Card. You should never take it again.",
    "dom": "tasks",
    "why": "Documents a severe allergy and reports via Yellow Card"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Safety net and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "While you wait, sip fluids if you can, and don’t burst the blisters or put creams on. If your breathing gets harder, you can’t swallow, you feel faint, confused or much worse before the ambulance comes, call 999 again straight away. Can you tell me the plan back?",
    "dom": "gs",
    "why": "Interim advice, escalation and teach-back"
   },
   {
    "who": "pt",
    "text": "No more tablets, take the box, the ambulance is coming, someone will be with me, and 999 again if I get worse."
   },
   {
    "who": "dr",
    "text": "Exactly right. You’ve done the right thing calling today. I’ll stay on the line while I arrange the ambulance, and I’ll check with the hospital tomorrow to see how you are.",
    "dom": "gs",
    "why": "Stays with her and closes the loop"
   },
   {
    "who": "pt",
    "text": "Thank you. I’m glad I called."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her describe the rash, mucosal symptoms and the new tablet before questioning.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Asked who was with her, how she would get to hospital, and about her fear; acknowledged the reason the drug was started.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up ‘skin coming away’, mucosal pain and ‘is this the tablet?’; responded to her fear and wish for cream.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: a reaction to the tablet. Concern: the spreading blistering rash and feeling very unwell. Expectation: treatment, hoping for cream.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Used video to inspect mouth, eyes and skin and check detachment; stated that observations and full examination need hospital.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "SJS/TEN versus erythema multiforme, SSSS and DRESS; asked about HSV and previous reactions.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Checked breathing, swallowing and fluid intake; assessed sepsis risk; recognised mucosa plus detachment plus culprit drug as an emergency.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Suspected SJS/TEN from a recently started drug, explained in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Stop the drug now; 999 ambulance and call ahead to the hospital team; do not drive; bring the packet.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Explained that her epilepsy will be covered in hospital (safe seizure cover); severe allergy recorded with alert; Yellow Card report.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Escalation advice while waiting; someone to stay with her; follow-up call; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Nadia Karim",
    "age": "34 years · female",
    "pmh": [
     "Epilepsy; lamotrigine started about ten days ago"
    ],
    "meds": [
     "Lamotrigine (started about ten days ago; suspected culprit)"
    ],
    "allergy": "None recorded before this",
    "recent": "⚠ Spreading painful blistering rash, skin peeling, mouth, eye and genital soreness, fever.",
    "reason": "Urgent video: “Is this the tablet?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Check the video link; hear the story; signal concern calmly."
    },
    {
     "t": "1–4",
     "h": "Rapid assessment",
     "d": "Breathing, swallowing, fluids; mouth, eyes and skin on camera; detachment; the drug and timing; HSV and previous reactions."
    },
    {
     "t": "4–6",
     "h": "Explain",
     "d": "Name suspected SJS/TEN; explain why hospital, not cream."
    },
    {
     "t": "6–10",
     "h": "Act",
     "d": "Stop the drug; 999 ambulance and call ahead; do not drive; someone with her; severe allergy recorded; Yellow Card."
    },
    {
     "t": "10–12",
     "h": "Safety net",
     "d": "Interim advice; 999 again if worse; teach-back; follow-up call."
    }
   ],
   "wordPics": {
    "fail": "Calls it a drug rash and prescribes antihistamine or steroid cream; continues the drug; books a routine review or tells her to make her own way to A&E; forgets to record the allergy.",
    "pass": "Recognises SJS/TEN; stops the drug; arranges emergency admission; documents a severe allergy.",
    "exc": "All of that, plus: checks airway and fluids first; uses the video well and is honest about its limits; explains calmly why hospital is needed; handles the ‘but it was started for a reason’ worry; ambulance with a call ahead; Yellow Card; someone with her; teach-back; follow-up call."
   },
   "avoid": [
    {
     "dont": "“It’s probably an allergic rash — try an antihistamine and see how it goes.”",
     "instead": "“This looks like a serious reaction that needs hospital today.”",
     "why": "Mucosal erosions with skin detachment after a new drug are an emergency."
    },
    {
     "dont": "“Keep taking the tablet until you see the hospital.”",
     "instead": "“Don’t take any more of it — the hospital will cover what it was treating.”",
     "why": "Early withdrawal of the culprit improves survival (BAD 2016)."
    },
    {
     "dont": "“Pop along to A&E when you can.”",
     "instead": "“I’m calling an ambulance now, and I’ll phone ahead.”",
     "why": "She is systemically unwell with skin failure; the route must be safe and fast."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Getting there safely",
     "t": "She should not drive. Arrange a 999 ambulance, and someone to stay with her if possible."
    },
    {
     "h": "Long-term effects",
     "t": "Survivors can have eye, mouth and genital scarring and psychological after-effects; follow-up with ophthalmology and support after discharge help."
    }
   ],
   "legal": [
    {
     "h": "Adverse drug reaction reporting",
     "t": "Report suspected serious adverse drug reactions to the MHRA through the Yellow Card scheme."
    }
   ],
   "professional": [
    {
     "h": "Recording the reaction",
     "t": "Code it as a severe drug reaction with a prominent alert, name the drug and reaction, and tell the prescriber and community pharmacy (GMC Good practice in prescribing and managing medicines and devices)."
    },
    {
     "h": "Remote consulting",
     "t": "Record what was seen on video and that observations could not be taken; the limits of video lower the threshold for emergency transfer."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "SJS Awareness UK for patient information and peer support after discharge."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Mucosal erosions at two or more sites with skin detachment after a new drug — emergency admission",
     "Difficulty breathing or swallowing, unable to drink",
     "Signs of sepsis (NICE NG253) — confusion, fast breathing, feeling faint"
    ],
    "psychosocial": [
     "Frightened; hoping for cream",
     "Worry about stopping a drug started for a reason",
     "Who can be with her"
    ],
    "ice": [
     "Idea: a reaction to the new tablet",
     "Concern: the spreading blistering rash and raw mouth and eyes",
     "Expectation: treatment, hoping it can be managed at home"
    ]
   },
   "diagnosis": "Suspected Stevens–Johnson syndrome/toxic epidermal necrolysis about ten days after starting a new drug: painful dusky rash with blistering and detachment, oral, ocular and genital erosions, fever and malaise.",
   "diagnosisLay": "“This looks like a rare, serious reaction to the tablet where the skin and the lining of the mouth and eyes become inflamed and peel. It needs hospital care today — and the most important step is stopping the tablet.”",
   "management": {
    "reflectIce": "“You wondered if it was the tablet — I think you’re right, and that’s why we stop it now.”",
    "psychosocial": "Calm, honest explanation; reassure that the hospital will manage whatever the drug was treating; someone to be with her.",
    "sharedPlan": [
     "Stop the suspected drug now",
     "999 ambulance to hospital with a call ahead to the on-call team; do not drive",
     "Take the packet",
     "Severe drug reaction recorded with alert; Yellow Card report"
    ],
    "safetyNet": [
     "999 again if breathing, swallowing, fainting or confusion worsen before the ambulance",
     "Follow-up call to the hospital or patient the next day"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Maculopapular rash",
    "s": "Visual algorithm · drug eruptions and SJS/TEN",
    "href": "algorithms/maculopapular-rash.html"
   },
   {
    "ic": "🗺️",
    "t": "Mouth ulcers",
    "s": "Visual algorithm · mucosal erosions",
    "href": "algorithms/mouth-ulcers.html"
   },
   {
    "ic": "💠",
    "t": "Epilepsy",
    "s": "Protocol · antiepileptic rash warnings",
    "href": "management/epilepsy.html"
   },
   {
    "ic": "📋",
    "t": "Gout",
    "s": "Case walkthrough · allopurinol reactions",
    "href": "../cases/gout.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by treating a medical emergency as a skin complaint. The marks are for recognising the pattern quickly, stopping the drug and getting her to hospital safely.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Treating it as an ordinary drug rash with antihistamine or cream.",
     "why": "Mucosal erosions and skin detachment after a new drug are SJS/TEN.",
     "fix": "Recognise the triad of culprit drug, mucosa and detachment."
    },
    {
     "dom": "tasks",
     "fail": "Not stopping the drug straight away.",
     "why": "Early withdrawal improves survival.",
     "fix": "Stop it now; the hospital covers the underlying condition."
    },
    {
     "dom": "tasks",
     "fail": "Telling her to make her own way to A&E or to book a review.",
     "why": "She is systemically unwell and deteriorating.",
     "fix": "999 ambulance and a call ahead."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting to record the allergy or report it.",
     "why": "Re-exposure can be fatal; reporting is expected.",
     "fix": "Severe allergy alert and Yellow Card."
    },
    {
     "dom": "rto",
     "fail": "Frightening her, or giving false reassurance.",
     "why": "Both undermine a calm, fast transfer.",
     "fix": "Be honest and calm, and explain why each step matters."
    },
    {
     "dom": "gs",
     "fail": "Claiming a full examination over video.",
     "why": "Observations and a full skin check cannot be done remotely.",
     "fix": "Say what you saw and that hospital will do the rest."
    }
   ]
  }
 },
 "trigeminal-neuralgia": {
  "stem": {
   "name": "Annette Boll",
   "age": "58-year-old woman",
   "pmh": [
    "No relevant history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "No recent consultations recorded.",
   "reason": "Booked appointment: “Terrible pains in my face. Can’t eat properly.”"
  },
  "knowledge": {
   "guideline": "[1] NICE CG173 Neuropathic pain in adults: pharmacological management in non-specialist settings (2013) · [2] BNF: carbamazepine · [3] FSRH CEU Guidance: Drug interactions with hormonal contraception (May 2022) · [4] NICE NG225 Self-harm: assessment, management and preventing recurrence (2022)",
   "summary": "Seconds-long, electric-shock pains in the right cheek and jaw, set off by brushing, chewing, washing or a breeze, with normal periods in between, is trigeminal neuralgia. The GP must name it confidently, screen explicitly for features of a secondary cause, examine the cranial nerves, start carbamazepine (NICE CG173) with proper counselling and baseline bloods, and take the impact on eating and mood seriously.",
   "points": [
    {
     "h": "Recognise it",
     "t": "Brief paroxysms of severe stabbing or electric-shock pain in one or more branches of the trigeminal nerve, usually the cheek or jaw, on one side. Triggered by light touch, chewing, talking, brushing teeth, washing or cold air. Pain-free between attacks, often with a short refractory period after an attack."
    },
    {
     "h": "Secondary causes",
     "t": "Features that suggest multiple sclerosis or a compressive lesion and need MRI and neurology referral: sensory loss in the face, other cranial nerve signs, hearing loss, bilateral pain, onset at a young age (often quoted as under 40), a history of optic neuritis or other neurological symptoms, or continuous background pain. Examine facial sensation, corneal reflex and the other cranial nerves."
    },
    {
     "h": "Differentials",
     "t": "Dental causes (usually continuous, throbbing, provoked by hot or cold on a tooth), temporomandibular disorder, sinusitis, cluster headache (orbital pain lasting minutes to hours with autonomic features), post-herpetic neuralgia, and giant cell arteritis in anyone over 50 with new head or jaw pain (ask about jaw claudication, scalp tenderness and visual symptoms)."
    },
    {
     "h": "First line",
     "t": "NICE CG173 [1]: offer carbamazepine as initial treatment for trigeminal neuralgia. It is the exception to the usual neuropathic pain drugs (amitriptyline, duloxetine, gabapentin, pregabalin). BNF [2]: start 100 mg once or twice daily and increase gradually to the lowest effective dose; the dose can often be reduced during remission. If carbamazepine fails, is not tolerated or is contraindicated, NICE CG173 advises seeking specialist advice and considering early referral."
    },
    {
     "h": "Carbamazepine safety",
     "t": "BNF [2]: warn about blood, liver and skin disorders. Stop and seek help at once for rash, fever, sore throat, mouth ulcers, bruising or bleeding. Check FBC, U&E (sodium) and LFTs at baseline and periodically: hyponatraemia is a known effect. BNF [2]: HLA-B*1502 testing before starting in people of Han Chinese or Thai origin. Dizziness and unsteadiness are common early. It is a strong enzyme inducer: check every co-prescribed drug, and where contraception is still needed, FSRH [3] recommends a copper IUD, LNG-IUS or DMPA."
    },
    {
     "h": "Impact and referral",
     "t": "Pain on eating causes weight loss and dehydration; severe trigeminal neuralgia carries a real risk of low mood and suicidal thoughts, so ask directly (NICE NG225 [4]: no risk scores, a shared safety plan). Refer to neurology for red flags, diagnostic doubt or poor response; neurosurgical options such as microvascular decompression exist for refractory pain."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Boll, I’m Dr Ahmed. What’s been happening?",
    "dom": "rto",
    "why": "Open start"
   },
   {
    "who": "pt",
    "text": "Doctor, I keep getting these horrendous jolts of pain in the right side of my face, like an electric shock or a stabbing. They last only seconds but they’re unbearable. They go off when I brush my teeth, chew, wash my face, or even when a breeze hits me. I’m scared to eat or talk now. In between I’m fine. What is this?"
   },
   {
    "who": "dr",
    "text": "That sounds really frightening, and exhausting. I’d like to ask a few questions so I can give you a proper answer.",
    "dom": "rto",
    "why": "Acknowledges distress and agrees the agenda"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Can you show me exactly where the pain goes?",
    "dom": "tasks",
    "why": "Maps distribution to trigeminal branches"
   },
   {
    "who": "pt",
    "text": "(points) Here, across my cheek and down into my jaw. Always this side."
   },
   {
    "who": "dr",
    "text": "Has it ever affected the other side, or your forehead or eye?",
    "dom": "tasks",
    "why": "Bilateral pain screen"
   },
   {
    "who": "pt",
    "text": "No, only here."
   },
   {
    "who": "dr",
    "text": "Between the attacks, is there any ache or constant pain, or is it completely gone?",
    "dom": "tasks",
    "why": "Continuous pain would suggest a secondary cause"
   },
   {
    "who": "pt",
    "text": "Completely gone. That’s the strange thing."
   },
   {
    "who": "dr",
    "text": "Have you noticed any numbness in your face, double vision, trouble hearing, weakness, or problems with your balance? Or ever had a spell of blurred vision in one eye?",
    "dom": "tasks",
    "why": "Explicit secondary-cause red-flag screen"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Any pain in your jaw muscles when chewing that builds up, tenderness on your scalp, or changes in your vision? And have you seen a dentist about it?",
    "dom": "tasks",
    "why": "Screens GCA and dental causes"
   },
   {
    "who": "pt",
    "text": "No scalp or eye problems. I did wonder if it was a tooth, but it doesn’t feel like toothache."
   },
   {
    "who": "dr",
    "text": "How are you managing with eating and drinking? Have you lost weight?",
    "dom": "tasks",
    "why": "Nutrition impact"
   },
   {
    "who": "pt",
    "text": "I’m eating soft things, very little. My clothes are looser."
   },
   {
    "who": "dr",
    "text": "Do you take any regular medicines, including anything from the chemist? And any allergies?",
    "dom": "tasks",
    "why": "Medication and allergy check before carbamazepine"
   },
   {
    "who": "pt",
    "text": "Nothing regular. No allergies I know of."
   },
   {
    "phase": "Mood and ICE",
    "clock": "5–6 min",
    "who": "dr",
    "text": "Pain like this wears people down. How has your mood been? Has it ever made you feel you can’t go on?",
    "dom": "tasks",
    "why": "Mood and suicide screen"
   },
   {
    "who": "pt",
    "text": "I’m tired and fed up. I dread every meal. But no, I wouldn’t do anything."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. What have you been worried this might be?",
    "dom": "rto",
    "why": "Elicits her fear"
   },
   {
    "who": "pt",
    "text": "Something serious. A growth, maybe."
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me examine the nerves in your face and head. (Examines facial sensation in all three divisions, corneal reflex, jaw and facial muscles, eye movements, hearing and the other cranial nerves.) Everything is normal.",
    "dom": "tasks",
    "why": "Cranial nerve examination"
   },
   {
    "who": "dr",
    "text": "This is trigeminal neuralgia. The trigeminal nerve carries feeling from your face, and it sends out sudden bursts of pain when something light touches a trigger area. The pattern you describe is typical, your nerves examine normally and it’s on one side only, so this looks like the common type rather than something growing. I’ll still ask the neurologists to see you, and they can arrange a scan if they think it’s needed.",
    "dom": "tasks",
    "why": "Names diagnosis; addresses fear of a tumour honestly"
   },
   {
    "who": "pt",
    "text": "So it’s not my teeth?"
   },
   {
    "who": "dr",
    "text": "It doesn’t sound like it. Tooth pain tends to be constant and throbbing, not these sudden shocks.",
    "dom": "rto",
    "why": "Explains reasoning plainly"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The first treatment is a tablet called carbamazepine. It calms the nerve rather than being a painkiller. We start with a low dose and increase slowly until the attacks settle, then use the lowest dose that works.",
    "dom": "tasks",
    "why": "First-line carbamazepine (NICE CG173); titration"
   },
   {
    "who": "pt",
    "text": "Are there side effects?"
   },
   {
    "who": "dr",
    "text": "Dizziness and unsteadiness are common at first, so take care until you know how it affects you. It can lower your salt level and, rarely, affect the blood count, liver or skin. So I’ll do a blood test before you start and again soon after. If you get any rash, fever, sore throat, mouth ulcers or unusual bruising, stop it and contact us the same day. It also interacts with many medicines, so always mention it when you’re prescribed something.",
    "dom": "tasks",
    "why": "Counsels side effects, monitoring and interactions (BNF)"
   },
   {
    "who": "pt",
    "text": "Okay. What about eating?"
   },
   {
    "who": "dr",
    "text": "Soft, lukewarm food and a straw for drinks can help, and a scarf on windy days. I’ll weigh you today. Could you tell me back what you’ll do if you get a rash?",
    "dom": "gs",
    "why": "Practical advice and teach-back of the key safety point"
   },
   {
    "who": "pt",
    "text": "Stop the tablets and ring you straight away."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Exactly. I’ll see you in two weeks to check the bloods and how the dose is working. Please come back sooner if you notice numbness, double vision, weakness or hearing loss, if you can’t eat or drink, or if your mood gets very low. You won’t have to put up with this pain.",
    "dom": "gs",
    "why": "Review, red-flag and mood safety-net"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; let her describe the attacks fully.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Eating, weight loss, fear of meals, mood and exhaustion explored.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “scared to eat or talk” and asked about weight and mood.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (tooth problem or something serious), concern (a growth), expectation (an answer and relief).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Full cranial nerve examination including facial sensation and corneal reflex; baseline FBC, U&E and LFTs; weight; MRI via neurology if red flags or doubt.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Trigeminal neuralgia versus dental pain, temporomandibular disorder, cluster headache, giant cell arteritis and secondary causes.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Explicit screen for bilateral pain, sensory loss, other neurology, hearing loss, optic symptoms, continuous pain and GCA features.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named trigeminal neuralgia and explained why it looks primary.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Carbamazepine started low and titrated (NICE CG173; BNF) with safety counselling; neurology referral.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Nutrition, mood and interaction review addressed alongside the pain.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review in 2 weeks with bloods; rash rule taught back; red-flag and mood safety-net.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Annette Boll",
    "age": "58 years · female",
    "pmh": [
     "No relevant history recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "No recent consultations.",
    "reason": "“Terrible pains in my face. Can’t eat properly.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Let her describe the shocks and triggers. Acknowledge how frightening it is."
    },
    {
     "t": "1–5",
     "h": "Pattern and red flags",
     "d": "Site, side, triggers, pain between attacks, numbness, other neurology, hearing, vision, GCA features, dental history, weight, medicines."
    },
    {
     "t": "5–6",
     "h": "Mood and ICE",
     "d": "Ask directly about mood. Name her fear of a growth."
    },
    {
     "t": "6–8",
     "h": "Examine and explain",
     "d": "Cranial nerves including corneal reflex. Name trigeminal neuralgia and why it looks primary."
    },
    {
     "t": "8–12",
     "h": "Treat and close",
     "d": "Carbamazepine low and slow; bloods; rash and blood warning taught back; food tips; neurology; review in 2 weeks."
    }
   ],
   "wordPics": {
    "fail": "Calls it dental pain or sinusitis; prescribes co-codamol or amitriptyline; no red-flag screen or cranial nerve examination; starts carbamazepine without warnings or bloods.",
    "pass": "Recognises trigeminal neuralgia, screens red flags, examines the cranial nerves, starts carbamazepine with key warnings and refers to neurology.",
    "exc": "All of the above, plus: names her fear of a tumour and explains honestly why this looks primary; asks about GCA at 58; checks medicines and allergy before prescribing; arranges baseline FBC, sodium and LFTs; asks about mood directly; gives practical eating advice; confirms the rash rule by teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s probably your teeth. See your dentist.”",
     "instead": "“Sudden shocks set off by touch, with nothing in between, is a nerve pain called trigeminal neuralgia.”",
     "why": "Mislabelling delays effective treatment and leaves her in pain."
    },
    {
     "dont": "“Here’s some amitriptyline for nerve pain.”",
     "instead": "“The first treatment for this particular nerve pain is carbamazepine.”",
     "why": "NICE CG173 makes carbamazepine first line for trigeminal neuralgia, unlike other neuropathic pain."
    },
    {
     "dont": "“It’s definitely nothing serious.”",
     "instead": "“Your nerves examine normally and it’s one-sided, so it looks like the common type. The neurologists will confirm and decide on a scan.”",
     "why": "Honest, reasoned reassurance is safer than a blanket promise."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Eating and weight",
     "t": "Fear of eating causes weight loss and dehydration. Soft, lukewarm food and small frequent meals help while treatment takes effect."
    },
    {
     "h": "Isolation",
     "t": "Talking and cold air are triggers, so people withdraw socially. Ask how she is coping at home and at work."
    }
   ],
   "legal": [
    {
     "h": "Driving",
     "t": "Carbamazepine can cause dizziness and drowsiness, especially early or after a dose increase. Advise her not to drive if affected; it is an offence to drive when impaired by medicines."
    },
    {
     "h": "Prescribing safety",
     "t": "Document the counselling on rash, blood disorders and interactions, and the baseline bloods."
    }
   ],
   "professional": [
    {
     "h": "Diagnostic honesty",
     "t": "Explain why it looks primary and what would change that, rather than promising it is nothing serious."
    },
    {
     "h": "Interaction review",
     "t": "Carbamazepine is a strong enzyme inducer. Flag it on the record so future prescribers check interactions."
    }
   ],
   "community": [
    {
     "h": "Dentist",
     "t": "Many people see a dentist first. Share the diagnosis so unnecessary dental treatment is avoided."
    },
    {
     "h": "Support",
     "t": "Patient support groups for trigeminal neuralgia offer information and peer support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Facial numbness or other cranial nerve signs",
     "Bilateral pain",
     "Hearing loss, visual symptoms or past optic neuritis",
     "Continuous background pain",
     "Jaw claudication, scalp tenderness or visual change (GCA over 50)",
     "Weight loss from inability to eat; suicidal thoughts"
    ],
    "psychosocial": [
     "Fear of eating and talking",
     "Exhaustion and low mood",
     "Social withdrawal"
    ],
    "ice": [
     "Idea: a tooth problem, or something serious",
     "Concern: a growth",
     "Expectation: an explanation and relief"
    ]
   },
   "diagnosis": "“This is trigeminal neuralgia, a nerve pain in the face. Your nerves examine normally and it’s one-sided, so it looks like the common type.”",
   "diagnosisLay": "“The nerve that carries feeling from your face becomes irritable and fires off sudden bursts of pain when a trigger spot is touched. Often a small blood vessel is pressing on the nerve.”",
   "management": {
    "reflectIce": "“You were worried about a growth. The pattern and your normal examination point away from that, and the neurologists will confirm.”",
    "psychosocial": "Acknowledge the fear of eating; practical food tips; ask about mood directly.",
    "sharedPlan": [
     "Carbamazepine, start low and titrate to the lowest effective dose (NICE CG173; BNF)",
     "Baseline FBC, U&E and LFTs; repeat soon after starting",
     "Neurology referral for confirmation, MRI if indicated, and options if refractory"
    ],
    "safetyNet": [
     "Rash, fever, sore throat, mouth ulcers or bruising: stop carbamazepine and seek same-day review",
     "New numbness, double vision, weakness or hearing loss: urgent review",
     "Unable to eat or drink, or very low mood: contact the practice the same day"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Trigeminal neuralgia",
    "s": "Management protocol · NICE CG173",
    "href": "management/trigeminal-neuralgia.html"
   },
   {
    "ic": "🗺️",
    "t": "Facial pain",
    "s": "Visual algorithm · differentials",
    "href": "algorithms/facial-pain.html"
   },
   {
    "ic": "🗺️",
    "t": "Jaw pain",
    "s": "Visual algorithm · dental and GCA",
    "href": "algorithms/jaw-pain.html"
   },
   {
    "ic": "📋",
    "t": "Neuropathic pain",
    "s": "Case walkthrough · NICE CG173",
    "href": "../cases/neuropathic-pain.html"
   },
   {
    "ic": "📋",
    "t": "Headache",
    "s": "Case walkthrough",
    "href": "../cases/headache.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests confident pattern recognition plus two safety tasks: the secondary-cause screen and safe carbamazepine prescribing. Most marks are lost by prescribing without either.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Treating it as dental pain or sinusitis.",
     "why": "Touch-triggered seconds-long shocks with pain-free gaps are typical of trigeminal neuralgia.",
     "fix": "Name it and explain why it is not a tooth."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing the usual neuropathic pain drugs.",
     "why": "NICE CG173 recommends carbamazepine as initial treatment for trigeminal neuralgia.",
     "fix": "Start carbamazepine low and titrate."
    },
    {
     "dom": "tasks",
     "fail": "No red-flag screen or cranial nerve examination.",
     "why": "Sensory loss, bilateral pain or other neurology suggest MS or a compressive lesion needing MRI.",
     "fix": "Ask and examine explicitly, including the corneal reflex."
    },
    {
     "dom": "tasks",
     "fail": "Starting carbamazepine without counselling or bloods.",
     "why": "Blood, liver and skin reactions and hyponatraemia are recognised (BNF).",
     "fix": "Baseline FBC, U&E and LFTs; teach the rash and sore-throat rule."
    },
    {
     "dom": "rto",
     "fail": "Ignoring the weight loss and low mood.",
     "why": "Severe trigeminal neuralgia affects nutrition and can lead to suicidal thoughts.",
     "fix": "Ask directly and give practical eating advice."
    },
    {
     "dom": "gs",
     "fail": "No review after starting treatment.",
     "why": "The dose needs titrating and the bloods rechecking.",
     "fix": "Book a review within about 2 weeks and safety-net new neurology."
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
