/* ============================================================
   Reasoning GP — The Hot Seat: add-on set, batch 3
   Stem, knowledge, model consultation, scorecard tasks, extras,
   knowledge base, playbook, links and examiner pitfalls for
   20 further cases. Loaded after sca-pitfalls.js and
   before sca-practice.js; merges into the existing maps and
   attaches to the case objects exactly as those files do.
   Educational; original content; primary sources cited.
   ============================================================ */
(function(){
  var ADD = {
 "dizzy-older-postural": {
  "stem": {
   "name": "Edith Marsh",
   "age": "82-year-old woman",
   "pmh": [
    "Hypertension",
    "Urinary symptoms (on tamsulosin)",
    "Poor sleep (long-standing amitriptyline)",
    "Widowed; lives alone"
   ],
   "meds": [
    "Ramipril",
    "Bendroflumethiazide",
    "amlodipine (added recently)",
    "Tamsulosin",
    "Amitriptyline (at night, for sleep)"
   ],
   "allergy": "None recorded",
   "recent": "Second blood-pressure tablet added recently. No lying and standing BP on record. Daughter has phoned the practice with concerns about her safety.",
   "reason": "Telephone call about “dizzy spells” on standing, made at her daughter’s request."
  },
  "knowledge": {
   "guideline": "NICE NG249 (2025) · NICE NG136 (updated 2023) · NICE NG5 · NICE NG259 (July 2026; replaced CG146) · BNF",
   "summary": "Light-headedness on standing in an 82-year-old on five blood-pressure-lowering drugs is postural hypotension until proven otherwise. The medication review is the treatment, and the hidden falls change the whole plan.",
   "points": [
    {
     "h": "Name it: postural hypotension",
     "t": "Light-headedness or dimming vision on standing, worse in the morning and after meals, is typical. It is common and treatable, not normal ageing."
    },
    {
     "h": "Measure it properly",
     "t": "NICE NG136: measure BP seated or lying, then again after standing for at least 1 minute. A fall in systolic BP of 20 mmHg or more is significant; review the medication and measure subsequent readings standing. If symptoms continue without a drop, repeat starting lying down."
    },
    {
     "h": "The drugs are the fix",
     "t": "A recently added amlodipine, ramipril, a thiazide, an alpha-blocker (tamsulosin) and a sedating anticholinergic tricyclic (amitriptyline) all lower BP or add to falls risk. NICE NG249 puts medication review at the centre of a falls assessment; NICE NG5 supports a structured medication review. Reduce the recent addition first, and withdraw amitriptyline gradually rather than stopping it abruptly (BNF)."
    },
    {
     "h": "Falls change the plan",
     "t": "NICE NG249: offer a comprehensive falls assessment to an older person who has fallen in the past year and is frail, was injured, lost consciousness, or could not get up. She has fallen twice, bruised her hip and lay for a while — she qualifies. NG249 advises against using falls risk prediction tools."
    },
    {
     "h": "Bone health",
     "t": "A fall with injury at 82 calls for a fracture risk assessment (NICE NG259) and examination of the hip if pain persists. A painful hip after a fall needs same-day assessment."
    },
    {
     "h": "Check the bloods",
     "t": "Thiazides and ACE inhibitors can cause hyponatraemia and deranged kidney function, both of which worsen dizziness and falls risk — check U&E. Poor eating and drinking make dehydration likely."
    },
    {
     "h": "The whole picture",
     "t": "Poor appetite, low fluid intake, low mood and loneliness since widowhood feed the dizziness and the falls. Ask about mood and eating, and offer practical support."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Marsh, it’s Dr Lee from the surgery. Thank you for ringing. Tell me about these dizzy spells in your own words.",
    "dom": "rto",
    "why": "Open question; lets her tell it her way"
   },
   {
    "who": "pt",
    "text": "Oh, I don’t want to be any trouble, doctor. It’s my daughter — she fusses. It’s just a bit of light-headedness when I get up. Everyone gets that at my age. Could you tell her I’m alright?"
   },
   {
    "who": "dr",
    "text": "I’d love to be able to reassure her honestly. To do that I need to understand the dizziness properly — and the good news is this kind is often something we can fix. May I ask a few questions?",
    "dom": "gs",
    "why": "Sets the agenda without colluding with the request"
   },
   {
    "who": "pt",
    "text": "Well, if you must, dear."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When exactly does it come on — lying, sitting, or when you stand up?",
    "dom": "tasks",
    "why": "Pins the postural pattern"
   },
   {
    "who": "pt",
    "text": "When I get up. Out of bed, out of the chair. Things go dim for a few seconds. Worse in the mornings, and after I’ve eaten."
   },
   {
    "who": "dr",
    "text": "That’s a very clear description. Has it ever got so bad you’ve had to hold on to something?",
    "dom": "tasks",
    "why": "Explores near-falls"
   },
   {
    "who": "pt",
    "text": "Once I grabbed the worktop. And once I sat down quick, on the floor."
   },
   {
    "who": "dr",
    "text": "Can I ask you something, just between us, and I promise I’m not going to whisk you off anywhere? Have you ever actually gone down — had a fall?",
    "dom": "rto",
    "why": "Creates safety to disclose the hidden falls"
   },
   {
    "who": "pt",
    "text": "(Pause.) Twice. Once in the night getting up, once in the bathroom. I bruised my hip. The first time I couldn’t get up for a while. I haven’t told anyone."
   },
   {
    "who": "dr",
    "text": "Thank you for trusting me with that. Is the hip still painful now, and can you walk on it normally? Did you hit your head or black out either time?",
    "dom": "tasks",
    "why": "Screens for fracture, head injury and syncope"
   },
   {
    "who": "pt",
    "text": "It’s just bruised. I’m walking alright. I didn’t hit my head, and I didn’t black out."
   },
   {
    "who": "dr",
    "text": "Good. Let me check your tablets with you. I have ramipril, bendroflumethiazide, the newer blood-pressure tablet, tamsulosin and amitriptyline at night. Did the dizziness get worse after the new one started?",
    "dom": "tasks",
    "why": "Medication reconciliation and timing"
   },
   {
    "who": "pt",
    "text": "Now you mention it, yes. It’s been worse these last few weeks."
   },
   {
    "who": "dr",
    "text": "And how are you eating and drinking at the moment?",
    "dom": "tasks",
    "why": "Nutrition and hydration"
   },
   {
    "who": "pt",
    "text": "Not much, honestly. Can’t be bothered cooking for one since my husband died. A cup of tea here and there."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "That sounds lonely. I wonder — what’s been worrying you about telling anyone about the falls?",
    "dom": "rto",
    "why": "Follows the cue to the real fear"
   },
   {
    "who": "pt",
    "text": "They’ll put me in a home. That’s what happens. You have a fall, and next thing your house is sold. I want to stay in my own house."
   },
   {
    "who": "dr",
    "text": "That’s a very understandable fear, and I’m glad you’ve said it. I want to tell you the opposite is true: sorting this out is how people stay in their own homes. My aim is your independence, not taking it away.",
    "dom": "rto",
    "why": "Names the fear and reframes the plan around independence"
   },
   {
    "who": "pt",
    "text": "Really? You’re not just saying that?"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Really. When you stand, your blood pressure drops too far for a few seconds, so your brain is briefly short of blood — that’s the dimming. Several of your tablets lower blood pressure, and the new one tipped the balance. Not eating and drinking much makes it worse.",
    "dom": "tasks",
    "why": "Explains postural hypotension and the drug link in plain words"
   },
   {
    "who": "pt",
    "text": "So it’s the tablets, not me getting old."
   },
   {
    "who": "dr",
    "text": "Very likely, yes. I’d like to check your blood pressure lying and then standing to confirm it, and do a blood test for your salts and kidneys, because the water tablet can upset those.",
    "dom": "tasks",
    "why": "Lying and standing BP; U&E"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what I suggest, and tell me what you think. First, stop the newest blood-pressure tablet from today. Then, once we’ve got your readings, we look at the water tablet and bring the amitriptyline down slowly — it can make people unsteady at night. I’ll ask the pharmacist to go through everything with me.",
    "dom": "tasks",
    "why": "Deprescribing with a staged, safe plan"
   },
   {
    "who": "pt",
    "text": "I’ve had that sleeping one for years. Will I sleep?"
   },
   {
    "who": "dr",
    "text": "We’ll bring it down gently and see how you go, and talk about other ways to help sleep. The tamsulosin I’d like to review too — it also lowers blood pressure and may be why you’re up in the night.",
    "dom": "tasks",
    "why": "Links tamsulosin, nocturia and night falls"
   },
   {
    "who": "dr",
    "text": "I’d also like to refer you to the falls team. They check balance, your home, and things like rails in the bathroom. And I’d like to check your bones, because of the fall onto your hip. Would that be alright?",
    "dom": "tasks",
    "why": "NG249 falls assessment and bone health"
   },
   {
    "who": "pt",
    "text": "As long as it’s not a home."
   },
   {
    "who": "dr",
    "text": "It isn’t — it’s what keeps you at home. Would you be happy for me to speak to your daughter about the plan? She can help with shopping and meals, and you decide what I tell her.",
    "dom": "rto",
    "why": "Seeks consent to involve the daughter; respects her control"
   },
   {
    "who": "pt",
    "text": "Yes, alright. Tell her I’m not daft, though."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Of course. Until then: sit on the edge of the bed for a minute before standing, stand up slowly, and try to drink regularly through the day. Have you got an alarm pendant? If you ever fall and can’t get up, or you black out, or the hip becomes painful, that’s 999.",
    "dom": "gs",
    "why": "Practical measures and specific safety-net"
   },
   {
    "who": "pt",
    "text": "No pendant. My daughter’s been on at me."
   },
   {
    "who": "dr",
    "text": "I’ll ask her to help sort one. I’ll book you in for the blood pressure check and blood test this week, and I’ll ring you in a week to see how you are off the new tablet. What will you tell your daughter tonight?",
    "dom": "rto",
    "why": "Dated follow-up and teach-back"
   },
   {
    "who": "pt",
    "text": "That the new tablet’s stopped, I’m coming in for my blood pressure, and she can get me one of those pendants. And that I’m not going in a home."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; did not accept “tell my daughter I’m fine” but did not dismiss her either.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Widowed, lives alone, poor eating and drinking, low mood and loneliness, fear of losing her home.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “grabbed the worktop”, “sat down quick” and “everyone gets that at my age”, and found the hidden falls.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (normal ageing), concern (falls mean a care home), expectation (reassurance and no fuss).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Lying and standing BP; U&E for thiazide and ACE inhibitor effects; hip examination if pain persists; fracture risk assessment.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Postural hypotension from drugs vs dehydration vs hyponatraemia vs cardiac syncope; asked about blackouts.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for head injury, loss of consciousness, a long lie and hip fracture; recognised NG249 criteria for a comprehensive falls assessment.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated drug-induced postural hypotension with unreported falls in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Stop the recent antihypertensive; staged review of thiazide, tamsulosin and amitriptyline (tapered); falls team; bone health.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Nutrition, hydration, mood and loneliness addressed; nocturia and tamsulosin link; pharmacist medication review.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 for a fall with long lie, blackout or hip pain; pendant alarm; BP check and bloods this week; phone review in a week.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Long-term conditions & cancer",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Edith Marsh",
    "age": "82 years · female",
    "pmh": [
     "Hypertension",
     "Urinary symptoms",
     "Poor sleep",
     "Lives alone, widowed"
    ],
    "meds": [
     "Ramipril",
     "Bendroflumethiazide",
     "amlodipine (added recently)",
     "Tamsulosin",
     "Amitriptyline nocte"
    ],
    "allergy": "None recorded",
    "recent": "⚠ amlodipine (added recently) added recently. No postural BP on record. Message from daughter: “Mum isn’t safe.”",
    "reason": "Telephone call: “dizzy spells” on standing. “My daughter made me ring.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and disarm",
     "d": "She wants you to tell her daughter she’s fine. Don’t agree; offer to reassure her honestly after a few questions."
    },
    {
     "t": "1–4",
     "h": "Pattern, falls, drugs",
     "d": "Standing, mornings, after meals. Near-falls. Ask directly about actual falls, the hip, head injury, blackouts, the long lie. Check each tablet and when the new one started. Eating and drinking."
    },
    {
     "t": "4–6",
     "h": "The fear of a home",
     "d": "Name it and reframe: this plan keeps her at home."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Postural hypotension from the tablets. Stop the recent one; staged review of the others; lying and standing BP and U&E; falls team; bone health; daughter involved with consent."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Stand slowly, drink more, pendant alarm, 999 for a fall with long lie or blackout. Phone review in a week. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Agrees it is “just age”; never asks about falls; leaves all five BP-lowering drugs unchanged; ignores eating, mood and living alone; or sends her into a care conversation she fears without consent.",
    "pass": "Recognises postural hypotension, links it to the new tablet, finds at least one fall, arranges lying and standing BP and a medication review, and gives a basic safety-net.",
    "exc": "All of the above, plus: builds enough trust to find both falls and the long lie; names the fear of a care home and reframes the plan around independence; staged deprescribing including tamsulosin and a tapered amitriptyline; NG249 falls referral and bone health; involves the daughter with consent; pendant, dated review and teach-back."
   },
   "avoid": [
    {
     "dont": "“Well, it is quite common at your age.”",
     "instead": "“This kind of dizziness isn’t just age, and it’s often something we can fix.”",
     "why": "Colluding with the ageing explanation misses treatable, drug-induced postural hypotension."
    },
    {
     "dont": "“Have you had any falls?” — asked once, early, and accepted as “no”.",
     "instead": "“Just between us, and I’m not going to whisk you off anywhere — have you ever actually gone down?”",
     "why": "The falls are concealed through fear; she will only disclose when it feels safe."
    },
    {
     "dont": "“We may need to think about whether living alone is safe.”",
     "instead": "“Sorting this out is how we keep you in your own home.”",
     "why": "Confirms her worst fear and shuts down the conversation."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Isolation and bereavement",
     "t": "Living alone since her husband died, not cooking for one, drinking little. Loneliness and low mood drive both the physiology and the risk."
    },
    {
     "h": "Fear of losing independence",
     "t": "Many older people hide falls because they fear a care home. Plans framed around staying at home are more likely to be accepted."
    }
   ],
   "legal": [
    {
     "h": "Capacity and autonomy",
     "t": "Presume capacity (Mental Capacity Act 2005). She decides what support to accept and what is shared with her daughter; an unwise choice is not evidence of incapacity."
    },
    {
     "h": "Care Act 2014",
     "t": "She can have a local authority needs assessment for home support, equipment and adaptations. Community alarm schemes are often arranged locally."
    }
   ],
   "professional": [
    {
     "h": "Confidentiality with family",
     "t": "Ask her permission before discussing the plan with her daughter (GMC Confidentiality 2017). Listening to the daughter’s concerns does not breach confidentiality."
    },
    {
     "h": "Medicines optimisation",
     "t": "Structured medication review with shared decisions about stopping (NICE NG5); involve the practice pharmacist; document the reasons for each change."
    }
   ],
   "community": [
    {
     "h": "Support at home",
     "t": "Community falls service, occupational therapy home assessment, pendant alarm, and local befriending schemes; Age UK for practical and social support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Fall with a long lie, head injury, loss of consciousness or inability to weight-bear",
     "Blackouts rather than light-headedness, palpitations or exertional symptoms (cardiac syncope)",
     "Persistent hip pain after a fall"
    ],
    "psychosocial": [
     "Lives alone since widowhood; eating and drinking little",
     "Low mood and loneliness; poor sleep",
     "Fear that admitting falls means a care home"
    ],
    "ice": [
     "Idea: “Everyone gets light-headed at my age.”",
     "Concern: hidden falls, and being “put in a home”",
     "Expectation: to be told she’s fine so her daughter stops worrying"
    ]
   },
   "diagnosis": "Symptomatic postural hypotension, probably drug-induced (recently added amlodipine on top of ramipril, bendroflumethiazide, tamsulosin and amitriptyline), worsened by poor intake, with two unreported falls including a long lie.",
   "diagnosisLay": "“When you stand up, your blood pressure drops too far for a few seconds, so things go dim. Several of your tablets lower blood pressure, and the new one tipped the balance. Changing the tablets should help a lot.”",
   "management": {
    "reflectIce": "“You’ve kept the falls quiet because you’re frightened of losing your home. This plan is how you stay in it.”",
    "psychosocial": "Address eating, drinking, mood and loneliness; involve her daughter with consent; frame every step around independence.",
    "sharedPlan": [
     "Stop the recent antihypertensive; lying and standing BP and U&E this week (NICE NG136)",
     "Staged review of bendroflumethiazide and tamsulosin; taper amitriptyline (BNF); pharmacist medication review (NICE NG5)",
     "Comprehensive falls assessment referral (NICE NG249); fracture risk assessment (NICE NG259)"
    ],
    "safetyNet": [
     "999 for a fall with a long lie, blackout or a painful hip",
     "Pendant alarm; stand slowly; drink regularly; phone review in one week"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Falls pathway",
    "s": "Visual algorithm · NICE NG249",
    "href": "algorithms/falls.html"
   },
   {
    "ic": "📋",
    "t": "Multimorbidity and polypharmacy",
    "s": "Case walkthrough · deprescribing",
    "href": "../cases/multimorbidity-polypharmacy.html"
   },
   {
    "ic": "🗺️",
    "t": "Dizziness pathway",
    "s": "Visual algorithm · postural causes",
    "href": "algorithms/dizziness.html"
   },
   {
    "ic": "💠",
    "t": "Hypertension protocol",
    "s": "Postural BP · NICE NG136",
    "href": "management/hypertension.html"
   },
   {
    "ic": "💠",
    "t": "Osteoporosis protocol",
    "s": "Fracture risk after a fall",
    "href": "management/osteoporosis.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by agreeing with her. “Just age” and “tell my daughter I’m fine” hide a treatable drug problem and two falls. The medication review is the treatment; trust is how you find the falls.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting light-headedness on standing as normal ageing.",
     "why": "“Does not gather sufficient information to make a safe assessment.” The pattern is classic postural hypotension.",
     "fix": "Ask when it happens, confirm with lying and standing BP, and link it to the new tablet."
    },
    {
     "dom": "tasks",
     "fail": "Adding a new drug or advice without touching the five BP-lowering medicines.",
     "why": "“Management plan not in line with current UK best practice.” NICE NG249 puts medication review at the centre of falls prevention.",
     "fix": "Stop the recent addition today and plan a staged review of the thiazide, tamsulosin and amitriptyline (tapered)."
    },
    {
     "dom": "rto",
     "fail": "Asking “any falls?” once and accepting “no”.",
     "why": "“Does not identify or respond to the patient’s cues.” The worktop and floor episodes are leaking the truth.",
     "fix": "Make it safe: “Just between us, I’m not whisking you anywhere — have you ever gone down?”"
    },
    {
     "dom": "rto",
     "fail": "Raising care homes or “whether living alone is safe”.",
     "why": "Confirms her fear; she disengages and hides future falls.",
     "fix": "Frame every intervention as keeping her at home."
    },
    {
     "dom": "gs",
     "fail": "Jargon: “orthostatic hypotension from polypharmacy with anticholinergic burden”.",
     "why": "“Language not easily understood by the patient.”",
     "fix": "“When you stand, your blood pressure drops too far, and some of your tablets are making that worse.”"
    },
    {
     "dom": "gs",
     "fail": "No plan for the next fall and no dated review.",
     "why": "Non-specific safety-netting; she lives alone and has already had a long lie.",
     "fix": "Pendant alarm, “fall and can’t get up means 999”, BP check this week and a phone call in a week."
    }
   ]
  }
 },
 "early-preg-bleed": {
  "stem": {
   "name": "Leila Haddad",
   "age": "29-year-old woman",
   "pmh": [
    "Currently 9 weeks pregnant",
    "Early miscarriage at 7 weeks last year",
    "No previous ectopic pregnancy"
   ],
   "meds": [
    "Folic acid"
   ],
   "allergy": "No known drug allergies",
   "recent": "Private early scan 1 week ago: intrauterine pregnancy, fetal heartbeat seen. Blood group O RhD-positive.",
   "reason": "Urgent video appointment: vaginal bleeding since this morning."
  },
  "knowledge": {
   "guideline": "NICE NG126 · NICE QS69",
   "summary": "Light bleeding with mild cramps in a scan-confirmed intrauterine pregnancy is threatened miscarriage. Screen for ectopic and haemorrhage, arrange early pregnancy assessment, and know that NICE NG126 recommends vaginal micronised progesterone for bleeding with a previous miscarriage.",
   "points": [
    {
     "h": "Screen every time",
     "t": "NICE NG126: refer women who are haemodynamically unstable, or where there is significant concern about the degree of pain or bleeding, directly to A&E. Ask about severe or one-sided pain, shoulder-tip pain, dizziness or fainting, and heavy bleeding with clots."
    },
    {
     "h": "Early pregnancy assessment",
     "t": "NICE NG126 and QS69: women with bleeding or other symptoms of early pregnancy complications should be referred to an early pregnancy assessment service (or out-of-hours gynaecology). Expectant management without referral applies only under 6 weeks, bleeding without pain and without risk factors. At 9 weeks she needs referral."
    },
    {
     "h": "Progesterone",
     "t": "NICE NG126: offer vaginal micronised progesterone 400 mg twice daily to women with an intrauterine pregnancy confirmed by scan who have vaginal bleeding and have previously had a miscarriage. If a fetal heartbeat is confirmed, continue until 16 completed weeks. There was no benefit without a previous miscarriage, or with other preparations or doses. She meets these criteria."
    },
    {
     "h": "Anti-D",
     "t": "NICE NG126: do not offer anti-D prophylaxis for threatened miscarriage, miscarriage or ectopic pregnancy up to and including 11+6 weeks. She is 9 weeks and RhD-positive, so anti-D does not apply."
    },
    {
     "h": "Lift the self-blame",
     "t": "Exercise, sex, lifting and work do not cause miscarriage. Most early losses are due to chromosomal problems in the pregnancy. Saying so directly is both compassionate and accurate."
    },
    {
     "h": "Honest reassurance",
     "t": "Bleeding in early pregnancy is common and many pregnancies continue. A heartbeat on a scan last week is encouraging but does not guarantee the outcome. Promise assessment and support, not a result."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Leila, I’m Dr Lee. I can see you’re upset. Tell me what’s happening.",
    "dom": "rto",
    "why": "Acknowledges distress immediately; open question"
   },
   {
    "who": "pt",
    "text": "I’m bleeding and I’m nine weeks. I lost my last baby and it started exactly like this. Is it happening again? Is there anything I can take? I’ll do anything."
   },
   {
    "who": "dr",
    "text": "After losing your last baby, of course your mind has gone straight back there. We’ll take this together, and by the end of this call you’ll have a clear plan. First I need to ask a few quick questions to make sure you’re safe. Is that okay?",
    "dom": "rto",
    "why": "Responds to the trauma first, then sets the agenda"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "How heavy is the bleeding — spotting, like a period, or soaking pads? Any clots?",
    "dom": "tasks",
    "why": "Assesses volume for haemorrhage"
   },
   {
    "who": "pt",
    "text": "Like a light period. Red. No clots."
   },
   {
    "who": "dr",
    "text": "Any pain? If so, is it mild cramping, or severe, or on one side? Any pain in the tip of your shoulder?",
    "dom": "tasks",
    "why": "Screens for ectopic features"
   },
   {
    "who": "pt",
    "text": "Just mild cramps, low down, both sides. Nothing in my shoulder."
   },
   {
    "who": "dr",
    "text": "Have you felt dizzy, faint or had any blackouts?",
    "dom": "tasks",
    "why": "Screens for haemodynamic compromise"
   },
   {
    "who": "pt",
    "text": "No. Just scared."
   },
   {
    "who": "dr",
    "text": "You had a scan last week — what did it show? And do you know your blood group?",
    "dom": "tasks",
    "why": "Confirms intrauterine pregnancy with heartbeat; rhesus status"
   },
   {
    "who": "pt",
    "text": "The baby was in the womb and we saw the heartbeat. I’m O positive."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Thank you. What’s been going through your mind since it started?",
    "dom": "rto",
    "why": "Explores her ideas and hidden concerns"
   },
   {
    "who": "pt",
    "text": "That it’s my fault. I went to the gym yesterday. We had sex. I carried heavy shopping. I keep thinking I did this."
   },
   {
    "who": "dr",
    "text": "I need to say this clearly: none of those things cause a miscarriage. Not the gym, not sex, not shopping. When early losses happen, it’s almost always because of how the pregnancy first formed. It is never the mother’s fault.",
    "dom": "tasks",
    "why": "Lifts the self-blame with accurate information"
   },
   {
    "who": "pt",
    "text": "(Crying.) I really thought I’d caused it."
   },
   {
    "who": "dr",
    "text": "I’m sorry you’ve been carrying that on top of everything. You haven’t done anything wrong.",
    "dom": "rto",
    "why": "Stays with the emotion before moving on"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s the honest picture. Bleeding in early pregnancy is common, and many pregnancies with bleeding carry on normally. Seeing a heartbeat last week is encouraging. I can’t promise what’s happening today, and I won’t pretend to. What I can do is get you seen properly.",
    "dom": "tasks",
    "why": "Honest, balanced information without false reassurance"
   },
   {
    "who": "pt",
    "text": "But is there anything I can take?"
   },
   {
    "who": "dr",
    "text": "There is something. Because you’ve had a miscarriage before and the scan showed the pregnancy in the womb, national guidance recommends progesterone pessaries for women who bleed — it improves the chance of the pregnancy continuing. The early pregnancy unit will usually check with a scan and start it, and it continues until 16 weeks if the heartbeat is there.",
    "dom": "tasks",
    "why": "Offers NG126 vaginal micronised progesterone accurately"
   },
   {
    "who": "pt",
    "text": "I didn’t know that. And bed rest?"
   },
   {
    "who": "dr",
    "text": "Bed rest doesn’t change the outcome, so you don’t need to lie still. Rest if you feel like it. And because you’re rhesus positive, you won’t need an anti-D injection.",
    "dom": "tasks",
    "why": "Dispels bed-rest myth; manages rhesus correctly"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "So, the plan. I’ll refer you to the early pregnancy unit now so they can scan you and start the progesterone if appropriate. I’ll send them your history today. Is there someone who can be with you?",
    "dom": "tasks",
    "why": "EPAU referral as the concrete action; checks support"
   },
   {
    "who": "pt",
    "text": "Yes, someone can come and be with me."
   },
   {
    "who": "dr",
    "text": "Good. Whatever the scan shows, you won’t go through it alone. There’s support either way, including the Miscarriage Association, and I’m here too.",
    "dom": "rto",
    "why": "Genuine reassurance about support, not outcome"
   },
   {
    "who": "pt",
    "text": "Thank you."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "While you wait: if the bleeding becomes heavy — soaking a pad in an hour or passing large clots — or you get severe or one-sided pain, shoulder-tip pain, or feel faint, call 999 or go to A&E straight away. Can you tell me which signs mean emergency?",
    "dom": "gs",
    "why": "Precise emergency safety-net with teach-back"
   },
   {
    "who": "pt",
    "text": "Heavy bleeding or big clots, bad pain or on one side, my shoulder, or feeling faint."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll call you tomorrow to make sure you’ve been seen. Anything else you want to ask?",
    "dom": "gs",
    "why": "Follow-up committed; shares the floor"
   },
   {
    "who": "pt",
    "text": "No. I feel less alone. Thank you."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Acknowledged her fear first; open question; let her describe it.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Previous loss last year; support at home; her beliefs about activity.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “exactly like last time” and “I’ll do anything”, and the mention of gym, sex and shopping.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea of repeat miscarriage; hidden guilt; wanted something to take.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "EPAU ultrasound; confirmed previous scan findings and rhesus status.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Threatened miscarriage vs inevitable or incomplete miscarriage vs ectopic (less likely after confirmed IUP).",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about heavy bleeding, clots, severe or one-sided pain, shoulder-tip pain, dizziness and collapse.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Threatened miscarriage, explained honestly without false reassurance.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "EPAU referral; vaginal micronised progesterone per NICE NG126; no anti-D needed; bed rest myth dispelled.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Lifted self-blame; checked support at home; signposted miscarriage support.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999/A&E symptoms named with teach-back; call-back to confirm she was seen.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Leila Haddad",
    "age": "29 years · female",
    "pmh": [
     "Pregnant — 9 weeks",
     "Miscarriage at 7 weeks last year"
    ],
    "meds": [
     "Folic acid"
    ],
    "allergy": "NKDA",
    "recent": "Private scan 1 week ago: intrauterine pregnancy, fetal heartbeat seen. Blood group O RhD-positive. ⚠ Booked as urgent: bleeding since this morning.",
    "reason": "Urgent video appointment: vaginal bleeding in pregnancy."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Distress first",
     "d": "She is terrified and reliving her last loss. Acknowledge it before any questions."
    },
    {
     "t": "1–4",
     "h": "Safety screen",
     "d": "Volume, clots, pain type and side, shoulder-tip pain, dizziness, scan result, blood group."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "Gym, sex, shopping — lift the guilt clearly."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Threatened miscarriage; honest odds; EPAU today; progesterone per NG126; no anti-D; no bed rest."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999/A&E symptoms with teach-back. Support. Call-back tomorrow."
    }
   ],
   "wordPics": {
    "fail": "Leads with facts to a distressed woman; misses ectopic screening; says “there’s nothing we can do”; advises bed rest; gives false reassurance; no EPAU referral or safety-net.",
    "pass": "Acknowledges the previous loss; screens for ectopic and haemorrhage; refers to EPAU; lifts self-blame; handles rhesus correctly; clear emergency safety-net.",
    "exc": "All of the above, plus: knows NICE NG126 progesterone for bleeding with a previous miscarriage and explains it accurately; honest about uncertainty without removing hope; checks support at home; teach-back; commits to a call-back."
   },
   "avoid": [
    {
     "dont": "“There’s nothing we can do — it’s in nature’s hands.”",
     "instead": "“Because you’ve had a miscarriage before, national guidance recommends progesterone pessaries, and the early pregnancy unit will scan you.”",
     "why": "Not in line with NICE NG126, and removes the one evidence-based action she can take."
    },
    {
     "dont": "“I’m sure everything will be fine.”",
     "instead": "“Many pregnancies with bleeding carry on. I can’t promise, but I can get you seen properly.”",
     "why": "False reassurance breaks trust if the pregnancy is lost."
    },
    {
     "dont": "“Try to take it easy and avoid exercise and sex for now.”",
     "instead": "“None of those things cause a miscarriage. It isn’t your fault.”",
     "why": "Implies her activity was to blame and deepens the guilt."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Previous loss",
     "t": "A miscarriage last year makes this bleed a re-lived trauma. Pace the consultation to her distress."
    },
    {
     "h": "Guilt",
     "t": "Self-blame after bleeding or loss is common. Correct it explicitly."
    }
   ],
   "legal": [
    {
     "h": "Work and pregnancy",
     "t": "Pregnancy and maternity is a protected characteristic under the Equality Act 2010; pregnancy-related sickness absence is protected. A fit note can cover time off beyond 7 days."
    }
   ],
   "professional": [
    {
     "h": "Off-label prescribing",
     "t": "Vaginal micronised progesterone for threatened miscarriage is recommended by NICE NG126 but may be off-label for this use; explain and document."
    },
    {
     "h": "Continuity",
     "t": "Follow up after the EPAU visit, whatever the outcome, and offer support in either case."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "The Miscarriage Association and Tommy’s offer information and support to women and partners."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Heavy bleeding, large clots, haemodynamic compromise → A&E (NICE NG126)",
     "Severe or one-sided pain, shoulder-tip pain, dizziness or collapse → possible ectopic, emergency",
     "Pregnancy of 6 weeks or more, or uncertain gestation, with bleeding → early pregnancy assessment service"
    ],
    "psychosocial": [
     "Miscarriage last year and fear of repeating it",
     "Guilt about gym, sex and lifting",
     "Support at home"
    ],
    "ice": [
     "Idea: she is miscarrying again, and caused it",
     "Concern: reliving the previous loss",
     "Expectation: something to take to stop it"
    ]
   },
   "diagnosis": "“This is what we call a threatened miscarriage: bleeding in a pregnancy that we know is in the womb. Many continue normally. We need a scan to know more.”",
   "diagnosisLay": "“Bleeding is a warning light, not a verdict. Lots of pregnancies with bleeding carry on. The scan tells us what’s really happening.”",
   "management": {
    "reflectIce": "“You’ve been blaming yourself for the gym and the shopping. None of that causes miscarriage. This is not your fault.”",
    "psychosocial": "Pace to her distress, make sure someone is with her, and offer support whatever the outcome.",
    "sharedPlan": [
     "Refer to the early pregnancy assessment service today (NICE NG126)",
     "Vaginal micronised progesterone 400 mg twice daily, to 16 completed weeks if a heartbeat is confirmed (NICE NG126)",
     "No anti-D (RhD-positive, and not indicated up to 11+6 weeks); no bed rest"
    ],
    "safetyNet": [
     "Heavy bleeding, clots, severe or one-sided pain, shoulder-tip pain, faintness → 999 or A&E",
     "Call-back tomorrow to confirm she has been seen"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Vaginal bleeding in pregnancy",
    "s": "Visual algorithm · NICE NG126",
    "href": "algorithms/vaginal-bleeding-pregnancy.html"
   },
   {
    "ic": "📋",
    "t": "Perinatal mental health",
    "s": "Case walkthrough · support after loss",
    "href": "../cases/perinatal-mental-health.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by cold facts to a frightened woman, by missing the ectopic screen, and by telling her nothing can be done when NICE NG126 recommends progesterone for exactly her situation.",
   "items": [
    {
     "dom": "rto",
     "fail": "Opening with “How many pads? Any shoulder pain?” before acknowledging her distress.",
     "why": "“Does not respond to the patient’s emotional state.” She is reliving a loss.",
     "fix": "Thirty seconds of acknowledgement first, then the safety questions."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about one-sided pain, shoulder-tip pain or dizziness because the scan showed an intrauterine pregnancy.",
     "why": "A previous scan reduces but does not remove concern; haemorrhage can occur with any miscarriage.",
     "fix": "Screen every time, and state the emergency signs."
    },
    {
     "dom": "tasks",
     "fail": "“There’s no treatment — we just have to wait.”",
     "why": "NICE NG126 recommends vaginal micronised progesterone for bleeding with a scan-confirmed IUP and a previous miscarriage.",
     "fix": "Explain progesterone and refer to EPAU to scan and start it."
    },
    {
     "dom": "tasks",
     "fail": "Arranging anti-D or advising bed rest.",
     "why": "Anti-D is not offered up to 11+6 weeks for threatened miscarriage (and she is RhD-positive); bed rest does not change the outcome.",
     "fix": "Say clearly neither is needed."
    },
    {
     "dom": "rto",
     "fail": "Hearing about the gym and sex and saying nothing — or advising she avoid them.",
     "why": "Leaves the guilt in place, or reinforces it.",
     "fix": "“None of those cause a miscarriage. It isn’t your fault.”"
    },
    {
     "dom": "gs",
     "fail": "“I’m sure it’ll be fine” and no follow-up.",
     "why": "False reassurance and no continuity are both failing feedback statements.",
     "fix": "Honest uncertainty, a named plan, emergency teach-back and a call-back."
    }
   ]
  }
 },
 "ed-cardiovascular": {
  "stem": {
   "name": "Marcus Bell",
   "age": "49-year-old man",
   "pmh": [
    "None recorded",
    "Current smoker, 15 cigarettes a day"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "None recorded",
   "recent": "No blood pressure, bloods or cardiovascular risk score on record for several years. Recorded as overweight. Occupation: lorry driver. Family history on file: father — myocardial infarction at 52.",
   "reason": "Video appointment: “requesting sildenafil”."
  },
  "knowledge": {
   "guideline": "BSSM erectile dysfunction guideline (2017) · NICE NG238 (2023) · NICE NG12 (updated April 2026) · NICE NG202 (2021) · NICE NG209 (2021) · BNF (sildenafil) · DVLA Assessing fitness to drive",
   "summary": "Gradual erectile dysfunction in a 49-year-old smoker with a family history of early heart attack is a cardiovascular warning. Treat the symptom and use the visit to find and reduce his vascular risk.",
   "points": [
    {
     "h": "A vascular early warning",
     "t": "Organic erectile dysfunction shares risk factors and mechanisms with coronary disease and often appears years before cardiac symptoms. BSSM 2017: assess cardiovascular risk in every man presenting with ED."
    },
    {
     "h": "Work-up",
     "t": "Blood pressure, HbA1c, lipids and a QRISK3 score; weight and waist; smoking and alcohol. NICE NG238: offer atorvastatin 20 mg for primary prevention if QRISK3 is 10% or more, after lifestyle discussion. Consider morning testosterone, especially if libido is low (BSSM 2017)."
    },
    {
     "h": "Organic or psychogenic",
     "t": "Gradual onset, progressive course and weaker morning erections suggest an organic cause. Sudden onset, situational difficulty and normal morning erections point more to psychological factors. Many men have both, and relationship strain adds to either."
    },
    {
     "h": "Treating the ED",
     "t": "A PDE5 inhibitor such as sildenafil is first-line for most men (BSSM 2017); dose per BNF. BNF: contraindicated with nitrates and nicorandil, and in men for whom sexual activity is inadvisable. Explain it needs sexual stimulation and an adequate trial before judging it ineffective."
    },
    {
     "h": "NICE NG12 (updated April 2026) prostate check",
     "t": "NICE NG12 (updated April 2026): consider a PSA test and digital rectal examination to assess for prostate cancer in men with erectile dysfunction. Offer it after explaining what the test can and cannot show."
    },
    {
     "h": "Snoring and smoking",
     "t": "NICE NG202: use a tool such as STOP-Bang and the Epworth score when OSA is suspected, and refer to a sleep service. NICE NG209: offer referral to stop-smoking support and discuss varenicline, cytisinicline (cytisine), NRT or a nicotine vape. Stopping smoking helps both his heart and his erections."
    },
    {
     "h": "Mood and relationship",
     "t": "ED commonly causes low mood, shame and misunderstanding between partners. Ask about mood directly and offer joint or psychosexual support."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Marcus, I’m Dr Lee. You said this was mortifying — you’ve nothing to be embarrassed about, it’s one of the most common things men talk to me about. What’s been happening?",
    "dom": "rto",
    "why": "Normalises early to lower the shame barrier"
   },
   {
    "who": "pt",
    "text": "Things aren’t working like they used to. It’s crept up over a year. I just want the blue tablets. No big song and dance."
   },
   {
    "who": "dr",
    "text": "I can very likely prescribe those today. I’d also like to spend a few minutes on why it’s happening, because at your age this can tell us something important about your health. Is that alright?",
    "dom": "gs",
    "why": "Honours the request while setting a wider agenda"
   },
   {
    "who": "pt",
    "text": "Go on, then. As long as I get the tablets."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Did it come on gradually, or suddenly? And do you still wake with erections in the morning?",
    "dom": "tasks",
    "why": "Distinguishes organic from psychogenic pattern"
   },
   {
    "who": "pt",
    "text": "Gradually. Mornings sometimes, but weaker than they were."
   },
   {
    "who": "dr",
    "text": "And your interest in sex — is that still there?",
    "dom": "tasks",
    "why": "Screens libido as a pointer to low testosterone"
   },
   {
    "who": "pt",
    "text": "Yeah, it’s not that. The want’s there."
   },
   {
    "who": "dr",
    "text": "Your notes say you smoke, and your dad had a heart attack at 52. When did you last have your blood pressure or cholesterol checked?",
    "dom": "tasks",
    "why": "Establishes cardiovascular risk and the gap in checks"
   },
   {
    "who": "pt",
    "text": "Years ago. I drive lorries — not easy to get in."
   },
   {
    "who": "dr",
    "text": "Any chest pain or breathlessness when you exert yourself? Any heart problems, or tablets for angina?",
    "dom": "tasks",
    "why": "Checks cardiac fitness for sexual activity and nitrate use before PDE5"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. No tablets at all."
   },
   {
    "who": "dr",
    "text": "Has anyone mentioned you snore? And do you ever feel sleepy at the wheel?",
    "dom": "tasks",
    "why": "Screens for OSA with the driving question"
   },
   {
    "who": "pt",
    "text": "My wife says I snore like a train. Sleepy — I don’t think so. Why?"
   },
   {
    "who": "dr",
    "text": "I’ll come to that — it links in.",
    "dom": "gs",
    "why": "Signposts to keep the structure"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Can I ask how this has been at home?",
    "dom": "rto",
    "why": "Opens the relationship cue sensitively"
   },
   {
    "who": "pt",
    "text": "…Not great. She thinks I’ve gone off her. She even asked if there’s someone else. There isn’t. I just can’t explain it."
   },
   {
    "who": "dr",
    "text": "That sounds really painful for both of you. Thank you for telling me. How have you been in yourself — your mood, your sleep, enjoying things?",
    "dom": "rto",
    "why": "Validates and screens mood"
   },
   {
    "who": "pt",
    "text": "Bit low, if I’m honest. Feel like less of a man. But I’m not going to do anything daft."
   },
   {
    "who": "dr",
    "text": "I’m glad you said that. Feeling low with this is very common, and it’s something we can help with too.",
    "dom": "rto",
    "why": "Acknowledges low mood and confirms no risk"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s the thing most men don’t know. The blood vessels that give an erection are very small, so they often show the first signs of furring up — before the bigger ones to the heart. With your smoking and your dad’s history, I see this as an early warning we can act on, not just a bedroom problem.",
    "dom": "tasks",
    "why": "Explains ED as a cardiovascular warning in plain words"
   },
   {
    "who": "pt",
    "text": "So it’s my heart?"
   },
   {
    "who": "dr",
    "text": "It’s not saying you have heart disease. It’s saying let’s check — blood pressure, a blood test for sugar and cholesterol, and your heart-risk score. That also tells your wife something important: this is physical. It isn’t about how you feel about her.",
    "dom": "tasks",
    "why": "Plans the risk work-up and reframes the relationship misreading"
   },
   {
    "who": "pt",
    "text": "That would actually help. She won’t believe me otherwise."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "So, the tablets: I’ll prescribe sildenafil. Take it about an hour before sex; it needs some arousal to work, and give it several tries. One absolute rule — never with heart tablets called nitrates, or a spray under the tongue for chest pain.",
    "dom": "tasks",
    "why": "Prescribes PDE5 with key safety counselling"
   },
   {
    "who": "pt",
    "text": "Fair enough. What else?"
   },
   {
    "who": "dr",
    "text": "Blood pressure at the practice or pharmacy this week and bloods the same visit. While you’re in, I’d suggest a PSA blood test for the prostate, which guidance advises considering with erection problems — we’ll talk it through first. And the snoring: I’ll send a short sleep questionnaire. If it shows sleep apnoea, it matters for your heart, your erections and, as a lorry driver, your licence.",
    "dom": "tasks",
    "why": "Plans BP, bloods, NICE NG12 (updated April 2026) PSA consideration and OSA screen with DVLA relevance"
   },
   {
    "who": "pt",
    "text": "My licence? That’s my job."
   },
   {
    "who": "dr",
    "text": "It’s treatable and most drivers keep driving once it’s controlled. The rule is simple: if you ever feel sleepy at the wheel, don’t drive, and tell me. We’ll deal with that together if it comes to it.",
    "dom": "gs",
    "why": "Handles the DVLA concern honestly and supportively"
   },
   {
    "who": "pt",
    "text": "Okay. And the smoking — I know."
   },
   {
    "who": "dr",
    "text": "No lecture. If you ever want to stop, the local stop-smoking service gives you the best chance, and it helps erections too. Would you like the referral?",
    "dom": "rto",
    "why": "Offers smoking cessation without shaming"
   },
   {
    "who": "pt",
    "text": "Go on. Might as well."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you get chest pain, especially during sex or exertion, stop and call 999. Book a review in about four weeks with your results, and bring your wife if you’d like — I’m happy to explain it to both of you.",
    "dom": "gs",
    "why": "999 safety-net, dated follow-up and partner involvement with consent"
   },
   {
    "who": "pt",
    "text": "Yeah. I think she’d like that."
   },
   {
    "who": "dr",
    "text": "Before you go — what will you tell her tonight?",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "That it’s probably my blood vessels, not her. I’m getting checked, I’ve got tablets, and I’m looking at the smoking."
   },
   {
    "who": "dr",
    "text": "That’s it exactly. You came for tablets and you’re leaving with those and a proper plan for your health.",
    "dom": "rto",
    "why": "Closes warmly, linking symptom and warning"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Normalised early; let him describe the problem before widening the agenda.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Lorry driving and access to care, relationship strain, mood, smoking, weight and alcohol.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “no song and dance”, the snoring and the hint of tension at home, and explored each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a plumbing problem fixed by a pill); concern (his wife thinks he’s gone off her, feeling less of a man); expectation (a quick prescription).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "BP, HbA1c, lipids, QRISK3; consider testosterone; consider PSA and DRE (NICE NG12 (updated April 2026)); OSA questionnaire (NICE NG202).",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Organic versus psychogenic ED (onset, morning erections, libido); vascular, metabolic, hormonal and sleep contributors.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about exertional chest pain and nitrate use before prescribing; screened mood and risk.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Gradual organic-pattern ED as a marker of vascular risk in a smoker with a family history of early MI.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Sildenafil with counselling (dose per BNF; no nitrates or nicorandil); cardiovascular work-up; statin if QRISK3 ≥10% (NICE NG238).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Smoking cessation referral (NICE NG209), OSA screen with DVLA implications, low mood and relationship support.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 for chest pain, review in about four weeks with results, partner invited with consent, teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Marcus Bell",
    "age": "49 years · male",
    "pmh": [
     "Nil recorded",
     "Smoker 15/day"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "None recorded",
    "recent": "⚠ No BP, bloods or QRISK on record for several years. FH: father MI at 52. Overweight. HGV driver.",
    "reason": "“Just need a prescription for the blue pills.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Disarm and agree",
     "d": "Normalise the embarrassment. Say you can likely prescribe today, and ask for a few minutes on the why."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Onset, morning erections, libido; smoking, family history, last checks; chest pain and nitrates; snoring and sleepiness at the wheel."
    },
    {
     "t": "4–6",
     "h": "Home and mood",
     "d": "How is it at home? His wife’s affair suspicion and his low mood are the hidden agenda. Check risk briefly."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "ED as an early warning. Sildenafil with safety rules; BP, bloods, QRISK3; consider PSA; sleep questionnaire; smoking referral; DVLA handled honestly."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Chest pain means 999. Review in about four weeks, wife welcome. Teach-back: “What will you tell her tonight?”"
    }
   ],
   "wordPics": {
    "fail": "Issues sildenafil with no history, no cardiovascular risk assessment and no nitrate check; or lectures on smoking and refuses the prescription until tests are done; never asks about home or mood; misses the snoring and the driving implications.",
    "pass": "Prescribes sildenafil with nitrate and chest-pain counselling; arranges BP, HbA1c, lipids and QRISK3; notes the snoring; asks about the relationship; basic safety-net and follow-up.",
    "exc": "All of the above, plus: frames ED as a vascular early warning in plain language tied to his father; uses the explanation to repair his wife’s misreading; screens mood; handles OSA and the DVLA question honestly without scaring him off; considers PSA per NICE NG12 (updated April 2026); offers stop-smoking support without judgement; invites his wife to the review."
   },
   "avoid": [
    {
     "dont": "“You’ll need to stop smoking and lose weight before we try tablets.”",
     "instead": "“I’ll prescribe today — and I’d like to check your heart health too, because this can be an early sign.”",
     "why": "Conditional care drives men away; treating and assessing together keeps him engaged."
    },
    {
     "dont": "“It could be a sign of heart disease.”",
     "instead": "“It’s an early warning worth checking — not a diagnosis.”",
     "why": "Alarming language with no plan feels like an ambush and can end the consultation."
    },
    {
     "dont": "“If you’ve got sleep apnoea, you’ll lose your HGV licence.”",
     "instead": "“It’s treatable and most drivers keep driving once it’s controlled — just don’t drive if you feel sleepy.”",
     "why": "Fear of the licence stops drivers disclosing symptoms; accurate information keeps them safe and honest."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Occupation",
     "t": "Long-distance lorry driving means irregular hours, poor access to appointments, sedentary work and limited food choices — offer pharmacy BP checks and flexible booking."
    },
    {
     "h": "Relationship",
     "t": "His wife has read the ED as rejection or an affair. Explaining the physical cause, with his consent and ideally with both present, can relieve a lot of distress."
    }
   ],
   "legal": [
    {
     "h": "DVLA — sleep apnoea",
     "t": "Group 2 (lorry) drivers must tell DVLA if diagnosed with OSA syndrome or sleepiness that impairs driving, and should stop driving until it is treated and controlled. OSA without daytime sleepiness does not need notifying."
    },
    {
     "h": "DVLA — blood pressure",
     "t": "Group 2 drivers are disqualified if resting BP is consistently 180 systolic or more, or 100 diastolic or more. His BP check matters for his licence as well as his heart."
    },
    {
     "h": "Prescribing",
     "t": "Generic sildenafil can be prescribed on the NHS without restriction; other PDE5 inhibitors may be subject to prescribing restrictions — check local formulary. Some sildenafil is also available from pharmacies after a consultation."
    }
   ],
   "professional": [
    {
     "h": "Opportunistic prevention",
     "t": "GMC Good Medical Practice (2024): use contacts to support health. Offer risk assessment as care, not a condition of treatment."
    },
    {
     "h": "Confidentiality",
     "t": "Discuss with his wife only with his consent. If he develops sleepiness and keeps driving against advice, GMC Confidentiality (2017) guidance on DVLA disclosure applies."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Local stop-smoking service; Relate for couple and psychosexual counselling; British Heart Foundation information on heart risk."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Exertional chest pain or breathlessness — cardiac assessment before PDE5 and urgent review",
     "Nitrate or nicorandil use — sildenafil contraindicated (BNF)",
     "Sleepiness at the wheel in a lorry driver — stop driving; OSA assessment and DVLA duty",
     "Low mood with hopelessness — assess risk"
    ],
    "psychosocial": [
     "Wife’s belief that he has gone off her or is having an affair",
     "Self-esteem, mood and feeling “less of a man”",
     "Shift work and difficulty getting to appointments"
    ],
    "ice": [
     "Idea: “It’s a mechanical problem — the tablets will fix it.”",
     "Concern: his marriage, and being seen as less of a man",
     "Expectation: a quick, private prescription"
    ]
   },
   "diagnosis": "Gradual-onset, likely organic erectile dysfunction over 12 months in a 49-year-old smoker with a family history of premature MI, overweight and with heavy snoring: a probable marker of undiagnosed vascular risk. Associated relationship strain and low mood.",
   "diagnosisLay": "“The blood vessels that give an erection are like the smallest pipes in a house — they show a blockage first. So this can be an early warning about the bigger pipes, to the heart. That’s why I want to check you over as well as treat it.”",
   "management": {
    "reflectIce": "“You wanted a quick fix for something that’s hurting your marriage. You’ll get the tablets — and the checks will also show your wife this is physical, not about her.”",
    "psychosocial": "Invite his wife to the review with consent; screen and follow up mood; offer psychosexual or couple support.",
    "sharedPlan": [
     "Sildenafil with counselling (dose per BNF; never with nitrates or nicorandil)",
     "BP, HbA1c, lipids and QRISK3; atorvastatin if QRISK3 ≥10% (NICE NG238); consider PSA and DRE (NICE NG12 (updated April 2026))",
     "STOP-Bang/Epworth and sleep referral if indicated (NICE NG202); stop-smoking referral (NICE NG209)"
    ],
    "safetyNet": [
     "Chest pain during sex or exertion — stop and call 999",
     "Do not drive if sleepy; review in about four weeks with results"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Erectile dysfunction",
    "s": "Case walkthrough · BSSM 2017",
    "href": "../cases/erectile-dysfunction.html"
   },
   {
    "ic": "💠",
    "t": "Erectile dysfunction protocol",
    "s": "PDE5 choice · safety checks",
    "href": "management/erectile-dysfunction.html"
   },
   {
    "ic": "💠",
    "t": "Obstructive sleep apnoea",
    "s": "Protocol · NICE NG202",
    "href": "management/osa.html"
   },
   {
    "ic": "💠",
    "t": "Smoking cessation",
    "s": "Protocol · NICE NG209",
    "href": "management/smoking-cessation.html"
   },
   {
    "ic": "🧮",
    "t": "QRISK3",
    "s": "Medical Calculators",
    "href": "calculators.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA guide",
    "s": "Group 2 · sleep and blood pressure",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "Two opposite errors fail this station: the silent prescription and the lecture. The marks come from treating the symptom and the warning it carries, and from reaching the marriage and mood he is hiding behind “just the pills”.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing sildenafil without asking about chest pain, heart disease or nitrate use.",
     "why": "Nitrates and nicorandil are contraindications (BNF); unsafe prescribing loses Tasks marks outright.",
     "fix": "Two questions before the prescription: exertional chest pain, and any heart tablets or sprays."
    },
    {
     "dom": "tasks",
     "fail": "Treating the ED as an isolated problem, with no BP, bloods or QRISK3.",
     "why": "In a smoker with a family history of early MI, ED is a vascular warning; missing it is a significant omission.",
     "fix": "“This can be an early sign about your circulation — let’s check your blood pressure, sugar and cholesterol.”"
    },
    {
     "dom": "tasks",
     "fail": "Hearing heavy snoring in a lorry driver and moving on.",
     "why": "OSA links to ED, hypertension and road safety; the DVLA dimension is examinable.",
     "fix": "Ask about sleepiness at the wheel, arrange a questionnaire, and explain the licence rules honestly."
    },
    {
     "dom": "rto",
     "fail": "Never asking how things are at home.",
     "why": "The hidden agenda is his wife’s affair suspicion and his low mood; feedback: “did not explore the impact on the patient’s life”.",
     "fix": "“How has this been at home?” — then use the physical explanation to address her misreading."
    },
    {
     "dom": "rto",
     "fail": "Making the prescription conditional on stopping smoking or losing weight.",
     "why": "Comes across as judgemental and risks him disengaging.",
     "fix": "Prescribe, then offer stop-smoking support as an extra benefit for both heart and erections."
    },
    {
     "dom": "gs",
     "fail": "No safety-net for chest pain and no follow-up to act on the results.",
     "why": "Non-specific safety-netting is a standard failing statement.",
     "fix": "“Chest pain during sex or exertion — stop and call 999. Review in four weeks with your results.”"
    }
   ]
  }
 },
 "febrile-child-rash": {
  "stem": {
   "name": "Leo",
   "age": "3-year-old boy",
   "pmh": [
    "None recorded"
   ],
   "meds": [
    "Paracetamol oral suspension given by mother (over the counter)"
   ],
   "allergy": "None recorded",
   "recent": "Immunisations up to date per mother. Has a younger sibling at home.",
   "reason": "Telephone call from mother: “temperature for two days, not himself, now some spots”."
  },
  "knowledge": {
   "guideline": "NICE NG143 (2019) · NICE NG240 (2024) · NICE NG254 (2025) · NICE NG12 (updated April 2026) · BNFC (benzylpenicillin)",
   "summary": "A febrile child who is flat, drinking less and has a rash that does not fade under a glass has meningococcal sepsis until proven otherwise. The action is 999, now.",
   "points": [
    {
     "h": "Non-blanching rash with fever",
     "t": "NICE NG143 lists a non-blanching rash as a red feature in a febrile child. With a child who is unwell, it points to meningococcal disease or sepsis. Neck stiffness and photophobia are often absent in young children — do not wait for them."
    },
    {
     "h": "Traffic-light assessment",
     "t": "NICE NG143 red features include pale, mottled or blue skin; no response to social cues, or not waking or not staying awake; grunting or marked tachypnoea; reduced skin turgor. Amber features include reduced activity, poor feeding, pallor reported by a parent and reduced urine output. The temperature alone is a poor guide."
    },
    {
     "h": "Sepsis thinking",
     "t": "NICE NG254 (under 16s): assess suspected sepsis by risk level, using behaviour, colour, breathing and circulation. A child at high risk needs urgent senior assessment — from primary care that means emergency transfer."
    },
    {
     "h": "Pre-hospital antibiotics",
     "t": "NICE NG240: for strongly suspected meningococcal disease, give intramuscular or intravenous benzylpenicillin or ceftriaxone as soon as possible outside hospital, unless this will delay transfer. Doses per BNFC by age. On the telephone, the only action is emergency transfer."
    },
    {
     "h": "NICE NG12 (updated April 2026) overlap",
     "t": "NICE NG12 (updated April 2026): children and young people with unexplained petechiae or hepatosplenomegaly need immediate specialist assessment for leukaemia. Hospital assessment covers both concerns."
    },
    {
     "h": "Parental concern counts",
     "t": "A parent’s sense that this illness is different or more serious is a recognised warning sign for serious infection in children (Van den Bruel et al., Lancet 2010). Never let an apology or “I’m probably overreacting” lower the level of concern."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, it’s Dr Lee. You’re not bothering me at all. Tell me about Leo.",
    "dom": "rto",
    "why": "Removes the apology barrier in the first sentence"
   },
   {
    "who": "pt",
    "text": "Sorry, I’m sure it’s nothing. He’s had a temperature two days, Calpol brings it down a bit, but he’s really flat. And he’s got a few little spots on his tummy since this afternoon. A friend said it’s a virus going round. Should I just keep an eye on him?"
   },
   {
    "who": "dr",
    "text": "I want to ask about those spots straight away. Have you got a clear glass? Press the side of it firmly on the spots and look through. Do they fade, or can you still see them?",
    "dom": "tasks",
    "why": "Prioritises the rash and asks for the glass test immediately"
   },
   {
    "who": "pt",
    "text": "Hang on… they’re still there. They don’t go. And there’s a couple more on his leg now, like tiny purple dots."
   },
   {
    "phase": "Rapid assessment",
    "clock": "1–3 min",
    "who": "dr",
    "text": "Thank you, that’s really important. How is he right now — is he awake and looking at you, or hard to wake?",
    "dom": "tasks",
    "why": "Assesses responsiveness (NG143 traffic-light)"
   },
   {
    "who": "pt",
    "text": "He’s dozy. He opens his eyes when I talk to him but goes back off. That’s not like him."
   },
   {
    "who": "dr",
    "text": "What colour is he — pale, blotchy, or a bit blue anywhere? And is his breathing faster than normal?",
    "dom": "tasks",
    "why": "Assesses colour and breathing"
   },
   {
    "who": "pt",
    "text": "Pale. Sort of blotchy on his legs earlier. Breathing a bit quick, I think."
   },
   {
    "who": "dr",
    "text": "How much has he drunk today, and how many wet nappies?",
    "dom": "tasks",
    "why": "Assesses hydration"
   },
   {
    "who": "pt",
    "text": "Hardly anything. One wet nappy all day."
   },
   {
    "phase": "Decision",
    "clock": "3–4 min",
    "who": "dr",
    "text": "Okay. I need to be clear with you. A rash that doesn’t fade under a glass, in a child with a fever who is drowsy, pale and not drinking, can be a serious infection in the blood, such as meningitis or sepsis. It can move fast. Leo needs an ambulance now.",
    "dom": "tasks",
    "why": "Recognises likely meningococcal sepsis and states the emergency plainly"
   },
   {
    "who": "pt",
    "text": "Oh my God. I thought I was being neurotic."
   },
   {
    "who": "dr",
    "text": "You are not being neurotic. Your instinct told you he looked wrong, and you were right — that instinct is one of the most important warning signs there is. You’ve done exactly the right thing ringing.",
    "dom": "rto",
    "why": "Validates the mother’s instinct and counters the judgement fear"
   },
   {
    "who": "pt",
    "text": "Someone made me feel stupid last time. I nearly didn’t ring."
   },
   {
    "who": "dr",
    "text": "I’m sorry that happened. Please never let it stop you. Right now, here’s what I need you to do.",
    "dom": "rto",
    "why": "Acknowledges the past experience briefly, then refocuses on action"
   },
   {
    "phase": "Action",
    "clock": "4–6 min",
    "who": "dr",
    "text": "As soon as we hang up, call 999. Say: “my three-year-old has a fever and a rash that doesn’t fade under a glass — I’m worried about meningitis or sepsis.” Those words get the fastest response.",
    "dom": "tasks",
    "why": "Arranges immediate 999 transfer with a clear phrase"
   },
   {
    "who": "pt",
    "text": "Okay. 999. Rash doesn’t fade. Meningitis."
   },
   {
    "who": "dr",
    "text": "Exactly. Don’t wait for the Calpol to work, and don’t wait to see if more spots come. Is there someone who can look after your little one so you can go with Leo?",
    "dom": "gs",
    "why": "Removes delay and solves the sibling barrier"
   },
   {
    "who": "pt",
    "text": "I’ll sort someone. Oh God."
   },
   {
    "who": "dr",
    "text": "You’re doing brilliantly. Keep Leo with you, lying comfortably. If he becomes floppy, won’t wake, has a fit or struggles to breathe before they arrive, ring 999 back and tell them.",
    "dom": "gs",
    "why": "Specific deterioration advice while waiting"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Close and follow-through",
    "clock": "6–7 min",
    "who": "dr",
    "text": "Tell me back what you’re going to do the moment we hang up.",
    "dom": "gs",
    "why": "Teach-back to confirm the plan"
   },
   {
    "who": "pt",
    "text": "Call 999, say fever and a rash that doesn’t fade and I’m worried about meningitis. Sort someone for the baby. Call back if he gets worse."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll put a note on his record and ring you in fifteen minutes to check the ambulance is with you. Go and call now.",
    "dom": "gs",
    "why": "Documents, arranges a call-back and ends promptly"
   },
   {
    "who": "pt",
    "text": "Thank you. Thank you."
   },
   {
    "phase": "After the call",
    "clock": "7–8 min",
    "who": "dr",
    "text": "(Documents: febrile 3-year-old, non-blanching rash spreading, drowsy, pale and mottled, tachypnoeic, one wet nappy — suspected meningococcal sepsis, 999 advised, call-back booked.)",
    "dom": "gs",
    "why": "Contemporaneous documentation of red features and advice"
   },
   {
    "who": "dr",
    "text": "(Call-back fifteen minutes later confirms the ambulance crew is with Leo.)",
    "dom": "gs",
    "why": "Closes the loop and confirms the transfer happened"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Welcomed the call and let her describe it, then went straight to the rash she mentioned in passing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Younger sibling at home, who can help, the previous dismissive experience.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the spots “mentioned in passing”, “really flat” and the repeated apology, and acted on each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a virus going round); concern (something is wrong, but fear of being judged neurotic); expectation (permission to watch at home).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Glass test by phone; traffic-light features — responsiveness, colour, breathing, fluid intake and wet nappies (NICE NG143).",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Meningococcal disease and sepsis versus viral illness with rash; leukaemia considered (NICE NG12 (updated April 2026)).",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Recognised non-blanching spreading rash with drowsiness, mottling, tachypnoea and poor urine output as an emergency.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated suspected meningococcal sepsis clearly and why it cannot wait.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "999 immediately with the right words; no waiting for antipyretics; knew pre-hospital antibiotics apply only if they don’t delay transfer (NICE NG240).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Sorted care of the younger sibling; acknowledged the previous poor experience; validated parental instinct.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Deterioration triggers while waiting, teach-back, documentation and a timed call-back to confirm transfer.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Leo",
    "age": "3 years · male",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "Paracetamol (OTC, given by mother)"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Telephone request: fever for 2 days, up to 39.4°C, “not himself”, new spots today. Immunisations up to date per mother. Younger sibling at home.",
    "reason": "“Am I being a neurotic mum? Should I just keep an eye on him?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Hear the passing mention",
     "d": "The spots come last and quietly. Go to them at once."
    },
    {
     "t": "1–3",
     "h": "Glass test and traffic light",
     "d": "Non-blanching? Then responsiveness, colour, breathing, drinking and wet nappies. A few seconds each."
    },
    {
     "t": "3–4",
     "h": "Decide and validate",
     "d": "Suspected meningococcal sepsis: ambulance now. Tell her she is not neurotic — her instinct was right."
    },
    {
     "t": "4–6",
     "h": "Action",
     "d": "999 phrase, don’t wait for Calpol, sibling care, what to watch for while waiting."
    },
    {
     "t": "6–8",
     "h": "Close fast",
     "d": "Teach-back, document, timed call-back. Ending early is the correct management — use any spare time to document."
    }
   ],
   "wordPics": {
    "fail": "Accepts “a virus going round”; never asks about the rash or asks without the glass test; focuses on the temperature and Calpol dosing; offers a GP appointment later or home safety-netting; misses the mother’s fear and apology.",
    "pass": "Performs the glass test by phone, recognises a non-blanching rash in an unwell child as an emergency, advises 999, reassures her she was right to call, and gives basic advice while waiting.",
    "exc": "All of the above within the first few minutes, plus: rapid traffic-light assessment; names her instinct as a genuine warning sign and addresses the past dismissal; gives the 999 phrase; sorts sibling care; teach-back; documents and makes a timed call-back to confirm the ambulance arrived."
   },
   "avoid": [
    {
     "dont": "“It’s probably viral — keep giving Calpol and ring back if he gets worse.”",
     "instead": "“Before anything else, can you do the glass test on those spots for me?”",
     "why": "Home safety-netting without characterising the rash is the classic fatal error."
    },
    {
     "dont": "“Bring him down to the surgery and we’ll have a look.”",
     "instead": "“He needs an ambulance now — call 999 as soon as we hang up.”",
     "why": "A GP visit adds delay; a non-blanching rash in an unwell child needs emergency hospital care."
    },
    {
     "dont": "“Don’t worry, you’re not being neurotic, lots of mums ring about this.”",
     "instead": "“Your instinct was right — that feeling that he looks wrong is one of the most important warning signs we have.”",
     "why": "Generic reassurance still frames her as anxious; naming her judgement as accurate is what she needs."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Parental confidence",
     "t": "An exhausted parent who has been made to feel foolish before will under-report. Explicit validation keeps her calling in future."
    },
    {
     "h": "Practicalities",
     "t": "A younger sibling at home can delay the parent going with the child. Ask who can help before ending the call."
    }
   ],
   "legal": [
    {
     "h": "Notifiable disease",
     "t": "Meningococcal disease and meningitis are notifiable under the Health Protection (Notification) Regulations 2010. The clinician who suspects it must notify the local UKHSA health protection team; usually the hospital does, but check."
    },
    {
     "h": "Contacts",
     "t": "UKHSA arranges antibiotic prophylaxis and advice for close household contacts, including the sibling, once the case is confirmed or strongly suspected."
    }
   ],
   "professional": [
    {
     "h": "Remote assessment",
     "t": "When the telephone history contains red features, arrange emergency transfer directly. Document the features, advice and phrase given, and follow up to confirm the ambulance arrived."
    },
    {
     "h": "Learning from events",
     "t": "Her previous dismissive experience is feedback worth sharing with the practice team. Record the call as a significant event if there was any delay in access."
    }
   ],
   "community": [
    {
     "h": "Support and information",
     "t": "Meningitis Now and Meningitis Research Foundation for family support; the health visitor for follow-up after discharge."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Non-blanching rash with fever — NICE NG143 red feature; suspected meningococcal disease",
     "Drowsy or hard to rouse, pale or mottled, fast breathing, few wet nappies — NICE NG143 red and amber features",
     "Unexplained petechiae — NICE NG12 (updated April 2026) immediate specialist assessment (leukaemia)"
    ],
    "psychosocial": [
     "Exhausted mother who fears being judged",
     "A previous dismissive experience with a clinician",
     "Younger sibling at home needing care"
    ],
    "ice": [
     "Idea: “Probably a virus going round.”",
     "Concern: he looks really wrong, but she fears being called neurotic",
     "Expectation: permission to keep an eye on him at home"
    ]
   },
   "diagnosis": "Suspected meningococcal sepsis: a 3-year-old with two days of fever, now drowsy, pale and mottled, tachypnoeic and poorly hydrated, with a spreading non-blanching rash. Needs immediate emergency transfer.",
   "diagnosisLay": "“Spots that don’t fade under a glass, in a child with a fever who is this flat, can mean an infection in the blood. It can get worse quickly, so we get him to hospital straight away — not tomorrow, not after the Calpol.”",
   "management": {
    "reflectIce": "“You rang because something felt wrong, and it was. You are not being neurotic — you may have just made the most important call of his life.”",
    "psychosocial": "Arrange care for the sibling, keep instructions short and concrete, and call back to support her.",
    "sharedPlan": [
     "999 immediately with the phrase “fever and a rash that doesn’t fade — worried about meningitis or sepsis”",
     "If seen face to face with transfer delayed: benzylpenicillin or ceftriaxone per NICE NG240, dose per BNFC, never delaying transfer",
     "Document the red features and advice; notify UKHSA if not done by the hospital"
    ],
    "safetyNet": [
     "Ring 999 back if floppy, won’t wake, fits or struggles to breathe",
     "GP call-back within fifteen minutes to confirm the ambulance is with him"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Fever in children",
    "s": "Visual algorithm · NICE NG143 traffic light",
    "href": "algorithms/fever-children.html"
   },
   {
    "ic": "🗺️",
    "t": "Purpura and petechiae",
    "s": "Visual algorithm · NICE NG240",
    "href": "algorithms/purpura-petechiae.html"
   },
   {
    "ic": "🗺️",
    "t": "Suspected cancer in children",
    "s": "Visual algorithm · NICE NG12 (updated April 2026)",
    "href": "algorithms/paediatric-cancer-referral.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is decided in the first three minutes. The rash is mentioned last and quietly, the mother apologises for calling, and the candidate who follows her lead into temperature and Calpol has already failed.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Discussing temperature readings and antipyretic doses before asking about the spots.",
     "why": "Feedback: “did not prioritise the most important problem”. The rash decides the outcome.",
     "fix": "Go to the spots first: “Have you got a glass? Press it on them — do they fade?”"
    },
    {
     "dom": "tasks",
     "fail": "Advising a same-day GP appointment or home monitoring with safety-netting.",
     "why": "A non-blanching rash in an unwell febrile child is a NICE NG143 red feature needing emergency care; anything else is unsafe.",
     "fix": "“He needs an ambulance now. Call 999 as soon as we hang up.”"
    },
    {
     "dom": "tasks",
     "fail": "Judging severity by the thermometer.",
     "why": "NICE NG143: behaviour, colour, breathing and hydration matter more than the height of the fever.",
     "fix": "Ask four quick questions: how awake, what colour, breathing, wet nappies."
    },
    {
     "dom": "rto",
     "fail": "Accepting her apology and “probably nothing” without comment.",
     "why": "Misses the cue that she is minimising; she may not follow through if she still feels foolish.",
     "fix": "“You’re not being neurotic — your instinct was right.”"
    },
    {
     "dom": "gs",
     "fail": "Ending with “call 999” but no phrase, no sibling plan and no advice while waiting.",
     "why": "Incomplete emergency safety-netting is a standard failing statement.",
     "fix": "Give the 999 phrase, ask who can mind the baby, name the deterioration signs, and do teach-back."
    },
    {
     "dom": "gs",
     "fail": "Keeping the mother on the phone to fill twelve minutes.",
     "why": "Prolonging the call delays the ambulance; examiners reward ending appropriately.",
     "fix": "End as soon as the plan is confirmed; document and call back to check the ambulance has arrived."
    }
   ]
  }
 },
 "febrile-convulsion": {
  "stem": {
   "name": "Musa",
   "age": "18-month-old boy",
   "pmh": [
    "Acute otitis media diagnosed yesterday",
    "No previous seizures; no known family history"
   ],
   "meds": [
    "Treatment for otitis media as recorded yesterday"
   ],
   "allergy": "No known drug allergies",
   "recent": "This morning: generalised convulsion lasting about 2 minutes during fever, stopped on its own, sleepy afterwards. Seen and assessed earlier today; now alert, playing and feeding. First child.",
   "reason": "Follow-up video call booked for the parents after his first febrile convulsion."
  },
  "knowledge": {
   "guideline": "NICE NG143 (fever in under 5s) · NICE NG217 (epilepsies, 2022, updated August 2026) · NICE NG254 (sepsis, under 16s)",
   "summary": "A brief, generalised, self-limiting seizure during a fever in a young child who recovers fully is a simple febrile seizure. It is frightening to watch but benign. The consultation is mostly about the parent’s shock, guilt and what to do next time.",
   "points": [
    {
     "h": "Simple or complex",
     "t": "Simple: generalised, brief, not repeated in the same illness, with full recovery. Complex features: focal, prolonged, repeated within the same illness or incomplete recovery. NICE NG217 notes that febrile seizures lasting longer than 10 minutes or with focal features may carry a higher risk of later epilepsy."
    },
    {
     "h": "Not epilepsy, not brain damage",
     "t": "NICE NG217: febrile seizures tend not to predispose to later afebrile seizures, unlike a first afebrile seizure. A single simple febrile seizure does not mean epilepsy and does not harm the brain. Recurrence with later fevers is possible, and most children grow out of them."
    },
    {
     "h": "Antipyretics do not prevent seizures",
     "t": "NICE NG143: antipyretic agents do not prevent febrile convulsions and should not be used specifically for this purpose. Use them only for a distressed child. This directly answers the parent’s guilt that she “should have got the fever down faster”."
    },
    {
     "h": "Look for the cause of the fever",
     "t": "Confirm the source (here, otitis media) and exclude serious infection. Features such as a non-blanching rash, neck stiffness, a bulging fontanelle, persistent drowsiness or incomplete recovery need urgent assessment. Use the NICE NG143 traffic-light approach and consider sepsis (NICE NG254)."
    },
    {
     "h": "First aid for a recurrence",
     "t": "Protect from injury, do not restrain or put anything in the mouth, note the time, and place in the recovery position once the jerking stops. NICE NG217 defines convulsive status epilepticus as a seizure lasting 5 minutes or more: call 999 at 5 minutes, or for a second seizure in the same illness, breathing difficulty or failure to recover."
    },
    {
     "h": "Information for parents",
     "t": "NICE NG217: give parents information about the risk of further seizures, how to seek help if one happens, and safety advice to reduce the risk of injury. Written information is essential after such a frightening event."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Lee. I’ve read the notes from this morning. Before anything else — how are you doing? It sounds like it was a frightening morning.",
    "dom": "rto",
    "why": "Opens with the parent’s experience rather than the medical facts"
   },
   {
    "who": "pt",
    "text": "He went stiff and started jerking and his eyes rolled back, and I honestly thought he was dying in my arms. He’s fine now, but I can’t stop shaking. Is it epilepsy? Has it damaged his brain?"
   },
   {
    "who": "dr",
    "text": "That sounds terrifying, and it makes complete sense that you’re still shaking. I’m going to answer both of those questions clearly. Can I first check how he is now, and hear a bit more about what happened? Then we’ll talk about what it means and what to do.",
    "dom": "gs",
    "why": "Validates the fear, promises answers and sets a clear agenda"
   },
   {
    "who": "pt",
    "text": "Okay. Yes."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Is Musa with you? Can you turn the camera to him? How has he been since the doctor saw him this morning — eating, drinking, playing, responding to you as normal?",
    "dom": "tasks",
    "why": "Confirms full recovery using video observation"
   },
   {
    "who": "pt",
    "text": "He’s right here, playing. He’s eating and drinking. He’s back to himself — it’s me that isn’t."
   },
   {
    "who": "dr",
    "text": "He looks bright and busy, which is exactly what I want to see. During the fit, did both arms and legs jerk the same, or was it one side? And roughly how long did it last?",
    "dom": "tasks",
    "why": "Establishes generalised vs focal and duration"
   },
   {
    "who": "pt",
    "text": "All of him. About two minutes I think, though it felt like forever. Then he was really sleepy."
   },
   {
    "who": "dr",
    "text": "And since then: any rash, any stiff neck or dislike of light, vomiting, or has he been unusually sleepy or hard to wake? Any more fits?",
    "dom": "tasks",
    "why": "Screens for meningitis, sepsis and recurrence"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. Just the ear. He’s on the treatment from yesterday."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said it’s you that isn’t back to yourself. What’s been going through your mind since this morning?",
    "dom": "rto",
    "why": "Follows the cue to her own distress"
   },
   {
    "who": "pt",
    "text": "That it’s my fault. I should have got his temperature down faster. And I don’t want to leave him alone again, not even to sleep. What if it happens and I don’t know what to do?"
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That’s such a normal reaction after a shock like this. Let me take those one at a time — the guilt, what it means for him, and exactly what to do if it happens again.",
    "dom": "rto",
    "why": "Normalises the reaction and structures the concerns"
   },
   {
    "who": "pt",
    "text": "Please."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "What Musa had is called a febrile convulsion — a fit triggered by a rising temperature in a young child. It was short, it involved his whole body, it stopped by itself and he’s recovered completely. Those are the signs of the common, simple type.",
    "dom": "tasks",
    "why": "Names the diagnosis and the features that make it simple"
   },
   {
    "who": "dr",
    "text": "Your two big questions. It has not damaged his brain. And this is not epilepsy — a fit with a fever is a different thing from epilepsy, and the great majority of children who have one like this never develop epilepsy. Most children grow out of these as they get older.",
    "dom": "tasks",
    "why": "Answers the specific fears directly and accurately"
   },
   {
    "who": "pt",
    "text": "Not epilepsy. Okay. (Breathes out.) But the temperature…"
   },
   {
    "who": "dr",
    "text": "This is important. Calpol and ibuprofen make a child more comfortable, but they don’t prevent these fits. Nothing you did or didn’t do caused it. You didn’t fail him — you held him through it.",
    "dom": "tasks",
    "why": "Corrects the antipyretic myth and lifts the guilt (NICE NG143)"
   },
   {
    "who": "pt",
    "text": "I really thought I’d let it happen."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "It can happen again with another fever, so let me give you a plan. If he fits: put him somewhere he can’t hurt himself, don’t hold him down and don’t put anything in his mouth. Look at the time. When the jerking stops, roll him onto his side. Call 999 if it lasts five minutes, if he has another one in the same illness, or if he doesn’t come round properly.",
    "dom": "tasks",
    "why": "Concrete first aid with explicit 999 criteria (NICE NG217)"
   },
   {
    "who": "pt",
    "text": "Five minutes. Time it. On his side."
   },
   {
    "who": "dr",
    "text": "Exactly. Carry on with his ear treatment. Give Calpol or ibuprofen only if he seems uncomfortable. He doesn’t need watching every second — he can sleep in his own cot tonight. Checking on him as you normally would is enough.",
    "dom": "gs",
    "why": "Tailored plan that gently heads off hypervigilance"
   },
   {
    "who": "pt",
    "text": "I don’t know if I’ll sleep, though."
   },
   {
    "who": "dr",
    "text": "A few bad nights after a shock like this is normal. If in a week or two you’re still getting flashbacks, can’t sleep or can’t leave him, please come back — that’s common after seeing something so frightening, and we can help with it.",
    "dom": "rto",
    "why": "Offers support for parental trauma"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "I’ll send you written information on febrile convulsions and first aid, so you don’t have to remember it all. Please get help urgently if he becomes floppy or very drowsy, has a rash that doesn’t fade under a glass, a stiff neck, or is struggling to breathe.",
    "dom": "gs",
    "why": "Written information plus named urgent features"
   },
   {
    "who": "dr",
    "text": "When you tell his dad tonight, what will you say happened and what you’d do next time?",
    "dom": "rto",
    "why": "Teach-back to check understanding"
   },
   {
    "who": "pt",
    "text": "That it was a fever fit, it’s not epilepsy, it didn’t hurt his brain, and it wasn’t my fault. If it happens: keep him safe, time it, on his side, 999 at five minutes."
   },
   {
    "who": "dr",
    "text": "That’s it exactly. You did everything right today.",
    "dom": "rto",
    "why": "Closes with reassurance that restores confidence"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Asked how she was before the medical facts; heard the event and the questions in her own words.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "First child, shock, sleeplessness, fear of leaving him, who is at home to support her.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “it’s me that isn’t” and “I should have got his temperature down”, and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (epilepsy, brain damage, her fault), concern (recurrence and not knowing what to do), expectation (a clear answer).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Observed on video that he is alert and playing; checked the earlier assessment; no investigations needed for a simple febrile seizure with a clear source.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Simple vs complex febrile seizure; considered meningitis, sepsis and non-febrile causes.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about rash, neck stiffness, drowsiness, vomiting and further seizures; confirmed generalised, brief, full recovery.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Simple febrile convulsion with otitis media, explained in plain words as benign and not epilepsy.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Corrected the antipyretic myth (NICE NG143), gave recurrence first aid with 999 at 5 minutes (NICE NG217), continued ear treatment.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Addressed parental trauma and hypervigilance; offered follow-up for her own wellbeing.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Written information, named urgent features (non-blanching rash, drowsiness, stiff neck, breathing), return if trauma persists.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Musa",
    "age": "18 months · male",
    "pmh": [
     "Acute otitis media (diagnosed yesterday)",
     "No previous seizures"
    ],
    "meds": [
     "Otitis media treatment per yesterday’s record"
    ],
    "allergy": "NKDA",
    "recent": "⚠ This morning: generalised seizure ~2 min with fever, self-terminated, post-ictal drowsiness. Assessed earlier today — recovered fully. First child; no known family history.",
    "reason": "Follow-up video call with parents. “Does this mean he has epilepsy?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Trauma first",
     "d": "She opens with “I thought he was dying”. Acknowledge that before any fact."
    },
    {
     "t": "1–4",
     "h": "Confirm the pattern",
     "d": "Look at Musa on camera. Generalised or focal, duration, recovery, any rash, neck stiffness, drowsiness or further fits."
    },
    {
     "t": "4–6",
     "h": "ICE and the guilt",
     "d": "Her fault for not lowering the fever; fear of leaving him; not knowing what to do. Name each."
    },
    {
     "t": "6–10",
     "h": "Explain and equip",
     "d": "Simple febrile convulsion: not epilepsy, no brain damage. Antipyretics don’t prevent fits. First aid with 999 at 5 minutes."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Written information, urgent features, support for her own shock. Teach-back: “What will you tell his dad?”"
    }
   ],
   "wordPics": {
    "fail": "Launches into facts while she is still shaking; implies it may be epilepsy or says “we can’t be sure about the brain”; reinforces the idea that she should have controlled the fever; no first aid plan; no screen for meningitis.",
    "pass": "Acknowledges her fear; confirms the simple pattern and full recovery; says clearly it is not epilepsy or brain damage; gives recurrence first aid and 999 criteria; safety-nets the fever.",
    "exc": "All of the above, plus: explicitly lifts the guilt with the antipyretic fact; gently addresses hypervigilance and offers help if trauma persists; gives written information; checks understanding so she leaves feeling in control rather than frightened."
   },
   "avoid": [
    {
     "dont": "“Don’t worry, febrile convulsions are very common.”",
     "instead": "“That sounds terrifying. I’m going to answer your questions clearly — first, how are you?”",
     "why": "Statistics before acknowledgement feel dismissive to a parent who thought her child was dying."
    },
    {
     "dont": "“Try to keep his temperature down with Calpol so it doesn’t happen again.”",
     "instead": "“Calpol helps him feel comfortable, but it doesn’t prevent these fits. Nothing you did caused this.”",
     "why": "Reinforcing the myth deepens her guilt and is contrary to NICE NG143."
    },
    {
     "dont": "“If it happens again, bring him in.”",
     "instead": "“Keep him safe, time it, on his side when it stops, and 999 if it lasts five minutes.”",
     "why": "Vague advice leaves her helpless; concrete first aid gives her control."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "First-time parent after a shock",
     "t": "Witnessing a seizure is often experienced as watching a child die. Sleeplessness, hypervigilance and intrusive memories are common in the days after and deserve acknowledgement."
    },
    {
     "h": "Family support",
     "t": "Ask who is at home tonight. Sharing the first-aid plan with the other parent and any regular carers (nursery, grandparents) spreads the load and the knowledge."
    }
   ],
   "legal": [
    {
     "h": "Nursery and childcare",
     "t": "No legal restriction follows a single febrile seizure. Parents may wish to share the first-aid plan with nursery staff; this is their choice and needs their consent."
    }
   ],
   "professional": [
    {
     "h": "Honest reassurance",
     "t": "Reassurance must be accurate: say clearly it is not epilepsy and has not harmed him, while being honest that it can recur (GMC Good Medical Practice 2024: give information patients can understand)."
    },
    {
     "h": "Remote follow-up",
     "t": "A video follow-up is appropriate after an in-person assessment, but any new drowsiness, rash or further seizure needs face-to-face or emergency care. Document the advice given."
    }
   ],
   "community": [
    {
     "h": "Resources",
     "t": "Written febrile convulsion and first-aid information; health visitor support for a first-time parent; paediatric first-aid courses (for example British Red Cross or St John Ambulance)."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Focal or prolonged seizure, a second seizure in the same illness, or incomplete recovery — complex features needing urgent assessment",
     "Non-blanching rash, neck stiffness, bulging fontanelle, persistent drowsiness — meningitis or sepsis (NICE NG143, NICE NG254)",
     "Seizure lasting 5 minutes or more — 999 (NICE NG217)"
    ],
    "psychosocial": [
     "First child; parent in shock and not sleeping",
     "Fear of leaving him alone, even to sleep",
     "Who is at home tonight to support her"
    ],
    "ice": [
     "Idea: “Is it epilepsy? Has it damaged his brain? I should have got the fever down.”",
     "Concern: it will happen again and she won’t know what to do",
     "Expectation: a clear answer about epilepsy and brain damage"
    ]
   },
   "diagnosis": "Simple febrile convulsion in an 18-month-old with acute otitis media: brief, generalised, self-terminating, single, with full recovery. No features of complex seizure or meningitis.",
   "diagnosisLay": "“Musa had a fever fit — some young children’s brains react to a quickly rising temperature by having a short fit. It looks awful, but it doesn’t damage the brain, it isn’t epilepsy, and most children grow out of them.”",
   "management": {
    "reflectIce": "“You’ve been blaming yourself for not bringing his temperature down. Please hear this: medicines for fever don’t stop these fits. Nothing you did caused it.”",
    "psychosocial": "Acknowledge the trauma, normalise a few bad nights, discourage constant watching, and offer a review for her if flashbacks or sleeplessness persist.",
    "sharedPlan": [
     "Continue treatment for otitis media; antipyretics only for comfort (NICE NG143), doses per BNFC",
     "First aid for recurrence: protect, don’t restrain, time it, recovery position, 999 at 5 minutes (NICE NG217)",
     "Written information on febrile convulsions and first aid"
    ],
    "safetyNet": [
     "999 for a seizure lasting 5 minutes, a second seizure, not recovering, or breathing difficulty",
     "Urgent help for non-blanching rash, stiff neck, floppiness or drowsiness; return if her distress persists"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Fever in children",
    "s": "Visual algorithm · NICE NG143 traffic lights",
    "href": "algorithms/fever-children.html"
   },
   {
    "ic": "🗺️",
    "t": "Fits and funny turns",
    "s": "Visual algorithm · seizure mimics",
    "href": "algorithms/fits-funny-turns.html"
   },
   {
    "ic": "📋",
    "t": "Epilepsy",
    "s": "Case walkthrough · febrile seizure section",
    "href": "../cases/epilepsy.html"
   }
  ],
  "pitfalls": {
   "intro": "The clinical content here is simple. The station is failed on sequence and tone: facts delivered to a parent still in shock, hedged answers to her two big questions, and a guilt that nobody lifts.",
   "items": [
    {
     "dom": "rto",
     "fail": "Opening with “febrile convulsions are common and benign” before acknowledging what she saw.",
     "why": "“Does not identify or respond to the patient’s cues.” She cannot hear reassurance until her fear has been heard.",
     "fix": "“That sounds terrifying — how are you doing?” Then the facts."
    },
    {
     "dom": "tasks",
     "fail": "Hedging: “It’s probably not epilepsy, but we can’t be completely sure.”",
     "why": "Vague answers to a specific fear leave the fear intact. For a simple febrile seizure the answer is clear.",
     "fix": "“This is not epilepsy and it has not damaged his brain.”"
    },
    {
     "dom": "tasks",
     "fail": "Advising regular paracetamol to prevent another fit.",
     "why": "“Management plan not in line with current UK best practice.” NICE NG143: antipyretics do not prevent febrile convulsions.",
     "fix": "“Calpol is for comfort — it doesn’t prevent these fits, and nothing you did caused this.”"
    },
    {
     "dom": "tasks",
     "fail": "Not checking for complex features or meningitis because the child was seen this morning.",
     "why": "“Does not gather sufficient information to make a safe assessment.” Things can change after an earlier assessment.",
     "fix": "Ask about focal features, duration, recovery, rash, neck stiffness and drowsiness, and observe him on video."
    },
    {
     "dom": "gs",
     "fail": "No concrete plan for a recurrence — “bring him in if it happens again”.",
     "why": "The not-knowing is her biggest fear; non-specific safety-netting is a standard failing statement.",
     "fix": "Protect, don’t restrain, time it, recovery position, 999 at 5 minutes — and send it in writing."
    },
    {
     "dom": "rto",
     "fail": "Ignoring “I don’t want to leave him alone again”.",
     "why": "Missed cue to parental trauma and hypervigilance that will persist without acknowledgement.",
     "fix": "Normalise it, give permission to let him sleep normally, and offer a review for her."
    }
   ]
  }
 },
 "headache-aura-pill": {
  "stem": {
   "name": "Robyn Carter",
   "age": "31-year-old woman",
   "pmh": [
    "Heavy, painful periods",
    "Migraine without aura in her teens"
   ],
   "meds": [
    "Rigevidon (combined oral contraceptive) — 6 years"
   ],
   "allergy": "None recorded",
   "recent": "BMI 24. On Rigevidon for 6 years. No previous record of migraine with aura.",
   "reason": "Telephone call: headaches with “zigzag lights”; asking for stronger painkillers."
  },
  "knowledge": {
   "guideline": "UKMEC 2025 (CoSRH) · NICE CG150 (updated June 2025) · NICE NG88 · NICE NG209 · MHRA Drug Safety Update (June 2024)",
   "summary": "New migraine with aura in a woman on the combined pill is an absolute contraindication to oestrogen. Stop the combined pill today, and at the same time give her safe contraception, a plan for her periods and migraine treatment.",
   "points": [
    {
     "h": "Recognise aura",
     "t": "NICE CG150: aura is reversible, usually visual (zigzag lines, flickering, a blind spot), develops over at least 5 minutes and lasts 5 to 60 minutes, then a migraine headache follows. Hers fits exactly. It is new: her teenage migraines had no aura."
    },
    {
     "h": "Aura and oestrogen: UKMEC 4",
     "t": "UKMEC 2025: migraine with aura is UKMEC 4 (unacceptable health risk) for combined hormonal contraception at any age, because of the increased risk of ischaemic stroke. The combined pill must stop."
    },
    {
     "h": "Don’t leave her unprotected",
     "t": "Progestogen-only methods (pill, implant, injection) and the LNG-IUS can be used with migraine with aura. A progestogen-only pill can usually be started straight away; use condoms until the new method is effective, timing per CoSRH guidance."
    },
    {
     "h": "Remember why she was on the pill",
     "t": "NICE NG88: the LNG-IUS is the first treatment to consider for heavy menstrual bleeding without identified pathology. Warn that bleeding is often irregular in the first few cycles and that benefits may take up to 6 cycles. If she declines, NSAIDs such as mefenamic acid or tranexamic acid can be used."
    },
    {
     "h": "Treat the migraine",
     "t": "NICE CG150: offer an oral triptan with an NSAID or paracetamol, and consider an antiemetic. Take the triptan when the headache starts. Keep a headache diary and warn about medication-overuse headache. For prevention, CG150 lists propranolol, topiramate or amitriptyline."
    },
    {
     "h": "Topiramate: a caution",
     "t": "MHRA Drug Safety Update (June 2024): topiramate is contraindicated in pregnancy and in women of childbearing potential unless a Pregnancy Prevention Programme is in place. It also reduces the effect of hormonal contraception. For a woman about to marry, it is a poor first choice."
    },
    {
     "h": "Smoking",
     "t": "Smoking adds to stroke risk. Ask without judgement and offer stop-smoking support (NICE NG209)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Robyn, it’s Dr Lee. I understand you’ve been having headaches. Tell me about them from the beginning.",
    "dom": "rto",
    "why": "Open question; lets her describe the aura herself"
   },
   {
    "who": "pt",
    "text": "They start with my vision going funny — flickering zigzag lines down one side, for about twenty minutes — and then the headache hits. Three times now. I’m getting married in seven weeks, so I just need something stronger."
   },
   {
    "who": "dr",
    "text": "Congratulations on the wedding. I definitely want to get you sorted before then. Can I ask a few questions about the headaches first, and then we’ll agree what will actually help?",
    "dom": "gs",
    "why": "Acknowledges the deadline and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Sure."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "The zigzags — do they build up gradually, and do they go away completely before the headache?",
    "dom": "tasks",
    "why": "Confirms typical, fully reversible aura"
   },
   {
    "who": "pt",
    "text": "They spread over a few minutes, then fade after about twenty. Then the headache — one side, throbbing, I feel sick and can’t stand light."
   },
   {
    "who": "dr",
    "text": "Have you ever had weakness, numbness, trouble speaking, or zigzags that didn’t go away? And have any of these headaches come on suddenly, like a thunderclap?",
    "dom": "tasks",
    "why": "Screens for atypical aura and secondary causes"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. Always the same pattern."
   },
   {
    "who": "dr",
    "text": "Is this like the migraines you had as a teenager?",
    "dom": "tasks",
    "why": "Establishes the aura is new"
   },
   {
    "who": "pt",
    "text": "No, those were just headaches. No lights. This is new."
   },
   {
    "who": "dr",
    "text": "And you’re on the combined pill, Rigevidon. What was it started for?",
    "dom": "tasks",
    "why": "Links the headache to the contraception"
   },
   {
    "who": "pt",
    "text": "Heavy, painful periods mainly. It’s been great for that. And obviously for not getting pregnant."
   },
   {
    "who": "dr",
    "text": "One more question I ask everyone, no judgement at all — do you smoke at the moment?",
    "dom": "tasks",
    "why": "Non-judgemental smoking history"
   },
   {
    "who": "pt",
    "text": "(Pause.) I’d stopped, but with the wedding stress… about five a day. I haven’t told anyone."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Thank you for being honest. What do you think is causing the headaches?",
    "dom": "rto",
    "why": "Elicits her idea"
   },
   {
    "who": "pt",
    "text": "Stress, I suppose. The visual stuff is just part of it. It’s nothing to do with the pill, is it?"
   },
   {
    "who": "dr",
    "text": "Let me come to that. What’s the thing you’d most hate to happen before the wedding?",
    "dom": "rto",
    "why": "Explores the concern behind the request"
   },
   {
    "who": "pt",
    "text": "Honestly? Getting pregnant before we’re ready. Or my old periods coming back on the honeymoon. That would be a nightmare."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "That really helps. The zigzag lines are called an aura, so these are migraines with aura. They aren’t dangerous in themselves, and we can treat them. But the aura changes one important thing: with the combined pill, the oestrogen in it raises the risk of stroke. So we don’t use that pill for anyone who has aura.",
    "dom": "tasks",
    "why": "Explains UKMEC 4 in plain words"
   },
   {
    "who": "pt",
    "text": "So I have to stop it? Seven weeks before my wedding?"
   },
   {
    "who": "dr",
    "text": "Yes, I’d advise stopping it today. But I promise you won’t be left unprotected or back to your old periods. We swap to a method without oestrogen. There are several, and some also help heavy periods.",
    "dom": "rto",
    "why": "Pairs the bad news with reassurance about her real concern"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Options: a progestogen-only pill you could start straight away. An implant in the arm. Or the hormonal coil, which is the best treatment for heavy periods and is also excellent contraception. The coil and the implant can cause irregular bleeding in the first few months, which matters with the wedding so close. What feels right?",
    "dom": "tasks",
    "why": "Safe alternatives, the original indication, and honest timing"
   },
   {
    "who": "pt",
    "text": "I like the idea of the coil for the periods. But not spotting on my honeymoon."
   },
   {
    "who": "dr",
    "text": "That’s sensible. One plan is to start the progestogen-only pill today, use condoms until it’s working, and fit the coil after the honeymoon if you still want it. If periods are heavy meanwhile, tranexamic acid or mefenamic acid on the heavy days can help. Would that work?",
    "dom": "rto",
    "why": "Shared decision built around her priorities"
   },
   {
    "who": "pt",
    "text": "Yes. That actually sounds fine."
   },
   {
    "who": "dr",
    "text": "For the migraines: a triptan tablet when the headache starts, with ibuprofen or paracetamol, and an anti-sickness tablet if you need it. A headache diary will show whether they’re frequent enough to need a preventer. And I’d really like to help you stop smoking — it adds to the stroke risk too. Would you try the stop-smoking service?",
    "dom": "tasks",
    "why": "Acute migraine treatment, diary and smoking support"
   },
   {
    "who": "pt",
    "text": "I’ll try. My fiancé wants me to stop anyway."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Great. Stop Rigevidon today. Start the new pill and use condoms until I confirm it’s working. If you ever get sudden weakness, face drooping, slurred speech, an aura that doesn’t go away, or a sudden severe headache, that’s 999.",
    "dom": "gs",
    "why": "Specific stroke safety-net and bridging advice"
   },
   {
    "who": "pt",
    "text": "Okay. That’s a lot, but it makes sense."
   },
   {
    "who": "dr",
    "text": "I’ll book you with the nurse this week to go through the new pill, and a review before the wedding to see how the headaches are. Just so I know I’ve explained it well — what will you tell your fiancé tonight?",
    "dom": "rto",
    "why": "Dated follow-up and teach-back"
   },
   {
    "who": "pt",
    "text": "That the zigzag headaches mean I can’t have the combined pill because of stroke risk, I’m switching to a mini-pill, condoms for now, maybe a coil later, and I’m stopping smoking."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her describe the aura in her own words; acknowledged the wedding without accepting “just stronger painkillers”.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Wedding in seven weeks, stress, relapse into smoking, reliance on the pill for heavy periods.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “vision goes funny, then the headache”, “seven weeks” and the hesitation about smoking.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (stress headaches, pill irrelevant), concern (pregnancy or heavy periods ruining the wedding), expectation (stronger analgesia).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Blood pressure check at the contraception review; no imaging needed for typical aura; headache diary.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Migraine with aura vs TIA vs secondary headache; checked for atypical, prolonged or motor aura and thunderclap onset.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for persistent or motor aura, speech disturbance and sudden severe headache; identified the oestrogen stroke risk.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named migraine with aura and UKMEC 4 for combined hormonal contraception in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Stop the combined pill today; progestogen-only pill now with condoms; LNG-IUS option after the wedding; triptan plus NSAID or paracetamol plus antiemetic.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Heavy periods (tranexamic or mefenamic acid; LNG-IUS per NICE NG88); smoking cessation; topiramate avoided.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Stroke symptoms mean 999; nurse appointment this week; review before the wedding; headache diary; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Robyn Carter",
    "age": "31 years · female",
    "pmh": [
     "Menorrhagia and dysmenorrhoea",
     "Migraine without aura (adolescence)"
    ],
    "meds": [
     "Rigevidon 1 tablet daily (6 years)"
    ],
    "allergy": "None recorded",
    "recent": "BMI 24. On Rigevidon for 6 years. Smoking status on record: ex-smoker.",
    "reason": "Telephone call. “I need something stronger for these headaches.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "She describes the aura in her opening line. Hear it; don’t jump to painkillers."
    },
    {
     "t": "1–4",
     "h": "Characterise and screen",
     "d": "Typical, reversible visual aura then migraine. Any motor, speech or persistent symptoms? Thunderclap? New compared with her teens. The pill, why she takes it, and smoking."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "She thinks it’s stress. Her real fear: pregnancy or heavy periods ruining the wedding."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Migraine with aura plus oestrogen equals stroke risk: stop today. Progestogen-only pill now, condoms, coil later. Period plan. Triptan plus NSAID. Stop smoking."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Stroke symptoms 999. Nurse this week, review before the wedding. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes a triptan or stronger analgesia and leaves her on the combined pill; or stops the pill with no alternative contraception or period plan; never asks about smoking.",
    "pass": "Recognises migraine with aura, stops the combined pill, arranges a progestogen-only method with condoms in the meantime, treats the migraine and gives a stroke safety-net.",
    "exc": "All of the above, plus: hears the wedding fear and builds the plan around it; addresses heavy periods (LNG-IUS or tranexamic and mefenamic acid) and warns honestly about early irregular bleeding; finds the smoking without judgement; avoids topiramate; teach-back and review before the wedding."
   },
   "avoid": [
    {
     "dont": "“Let’s try a triptan and see how you go.”",
     "instead": "“The zigzags change one important thing, and it’s not the painkiller — it’s your pill.”",
     "why": "Treating the headache and missing UKMEC 4 is the key Tasks fail."
    },
    {
     "dont": "“You’ll have to stop the pill. Use condoms and we’ll see.”",
     "instead": "“You won’t be left unprotected — we swap to a method without oestrogen, starting today.”",
     "why": "Stopping without a replacement leaves her exposed seven weeks before her wedding."
    },
    {
     "dont": "“Smoking on the pill is really dangerous, you know.”",
     "instead": "“No judgement — lots of people start again under stress. Can I help you stop?”",
     "why": "A lecture shuts down disclosure; support gets her to the service."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "The wedding",
     "t": "Seven weeks away. Every part of the plan should protect it: no unplanned pregnancy, no return of heavy periods, and awareness of early spotting with some methods."
    },
    {
     "h": "Stress and smoking",
     "t": "Wedding stress has triggered a smoking relapse and may be triggering migraines. Both are worth addressing kindly."
    }
   ],
   "legal": [
    {
     "h": "Driving",
     "t": "Group 1 drivers do not usually need to tell the DVLA about migraine; advise her not to drive during an aura or attack."
    }
   ],
   "professional": [
    {
     "h": "Safe prescribing",
     "t": "Continuing a UKMEC 4 method after aura has been reported is unsafe prescribing. Document the aura, the advice to stop, the alternative started and the bridging advice (GMC Good Medical Practice 2024)."
    },
    {
     "h": "Shared decisions",
     "t": "Offer all suitable non-oestrogen methods with honest information on bleeding patterns, and let her choose timing around the wedding."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Local stop-smoking service; The Migraine Trust for information; sexual health clinics can fit implants and coils."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Aura with weakness, speech disturbance or lasting more than 60 minutes",
     "Sudden severe (thunderclap) headache",
     "New aura while on combined hormonal contraception"
    ],
    "psychosocial": [
     "Wedding in seven weeks and fear of unplanned pregnancy",
     "Reliance on the pill for heavy, painful periods",
     "Smoking relapse under stress, not disclosed"
    ],
    "ice": [
     "Idea: stress headaches; the visual symptoms are part of it and unrelated to the pill",
     "Concern: pregnancy or heavy periods ruining the wedding and honeymoon",
     "Expectation: stronger painkillers"
    ]
   },
   "diagnosis": "New migraine with typical visual aura in a 31-year-old on a combined oral contraceptive, who smokes: UKMEC 4 for combined hormonal contraception. Stop the combined pill.",
   "diagnosisLay": "“The zigzag lines are an aura, so these are migraines with aura. On their own they’re treatable. But with the oestrogen in your pill they raise the risk of stroke, so we swap to a pill without oestrogen.”",
   "management": {
    "reflectIce": "“Your biggest worry is the wedding. This plan keeps you protected and your periods under control, without the stroke risk.”",
    "psychosocial": "Time changes around the wedding; offer stop-smoking support without judgement; involve her fiancé if she wishes.",
    "sharedPlan": [
     "Stop Rigevidon today (UKMEC 4); progestogen-only pill now with condoms until effective; LNG-IUS or implant later if she chooses",
     "Heavy periods: LNG-IUS first choice (NICE NG88) or tranexamic and mefenamic acid meanwhile",
     "Migraine: triptan with NSAID or paracetamol, antiemetic if needed (NICE CG150); diary; avoid topiramate (MHRA June 2024)"
    ],
    "safetyNet": [
     "Sudden weakness, facial droop, speech problems, prolonged aura or thunderclap headache: 999",
     "Nurse contraception review this week; GP review before the wedding"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Migraine",
    "s": "Case walkthrough · NICE CG150",
    "href": "../cases/migraine.html"
   },
   {
    "ic": "💠",
    "t": "Migraine protocol",
    "s": "Acute and preventive treatment",
    "href": "management/migraine.html"
   },
   {
    "ic": "💠",
    "t": "Contraception protocol",
    "s": "UKMEC · switching methods",
    "href": "management/contraception.html"
   },
   {
    "ic": "💠",
    "t": "Menorrhagia protocol",
    "s": "LNG-IUS · NICE NG88",
    "href": "management/menorrhagia.html"
   },
   {
    "ic": "💠",
    "t": "Smoking cessation protocol",
    "s": "Support and pharmacotherapy",
    "href": "management/smoking-cessation.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed on the pill, not the painkiller. The candidate who hears “zigzag lines, then the headache” and thinks of her contraception passes the Tasks domain; the one who also protects her wedding passes the rest.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing a triptan and leaving her on Rigevidon.",
     "why": "“Management plan not in line with current UK best practice.” Migraine with aura is UKMEC 4 for combined hormonal contraception.",
     "fix": "Ask about contraception in every woman with new aura, and stop the combined pill today."
    },
    {
     "dom": "tasks",
     "fail": "Stopping the pill with “use condoms for now” and nothing else.",
     "why": "Leaves her exposed to pregnancy and heavy periods seven weeks before her wedding.",
     "fix": "Start a progestogen-only pill today, bridge with condoms, and plan the heavy periods."
    },
    {
     "dom": "tasks",
     "fail": "Suggesting topiramate as a preventer.",
     "why": "MHRA (June 2024): contraindicated in women of childbearing potential without a Pregnancy Prevention Programme; it also reduces hormonal contraceptive effect.",
     "fix": "Use a diary first; if prevention is needed, discuss the other CG150 options."
    },
    {
     "dom": "rto",
     "fail": "Delivering “stroke risk” bluntly and moving on.",
     "why": "“Does not respond to the patient’s concerns.” She hears only that her wedding plans are ruined.",
     "fix": "Pair it with her concern: “You won’t be unprotected or back to your old periods.”"
    },
    {
     "dom": "rto",
     "fail": "Never asking about smoking, or asking with judgement.",
     "why": "She hides it, and it is an extra stroke risk.",
     "fix": "“No judgement — do you smoke at the moment?” Then offer support."
    },
    {
     "dom": "gs",
     "fail": "Jargon: “UKMEC 4, switch to a POP or LNG-IUS.”",
     "why": "“Language not easily understood by the patient.”",
     "fix": "“A pill without oestrogen”, “the hormonal coil”, “a small rod in the arm”."
    }
   ]
  }
 },
 "headache-coital": {
  "stem": {
   "name": "Martin Otieno",
   "age": "42-year-old man",
   "pmh": [
    "No significant past medical history",
    "Not recorded as hypertensive"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Occupation: teacher. No consultations for headache on record. Blood pressure slightly raised today (no previous readings or diagnosis of hypertension).",
   "reason": "Booked a video appointment for “headaches”. No further detail given to reception."
  },
  "knowledge": {
   "guideline": "NICE CG150 · NICE NG228 · NICE NG136 · International Headache Society ICHD-3 (2018, international)",
   "summary": "A headache that builds with sexual arousal and peaks at orgasm, recurrent and without thunderclap onset, fits primary sexual headache. A first or thunderclap-onset sexual headache is a possible subarachnoid haemorrhage until proven otherwise.",
   "points": [
    {
     "h": "Name the syndrome",
     "t": "International Headache Society ICHD-3 (2018, international) classifies “primary headache associated with sexual activity”: bilateral, building with arousal or explosive at orgasm, with no intracranial cause found. It is more common in men and often coexists with migraine or exertional headache."
    },
    {
     "h": "Exertion-triggered headache is a red flag to evaluate",
     "t": "NICE CG150 lists headache triggered by cough, Valsalva, sneeze or exercise among the features that should prompt consideration of further investigation and/or referral. Sexual activity is a form of exertion, so a new pattern like his needs a documented decision about imaging or specialist advice, not just reassurance."
    },
    {
     "h": "Thunderclap = emergency",
     "t": "NICE NG228: a thunderclap headache (sudden, severe, peaking within minutes) is a red-flag symptom of subarachnoid haemorrhage and needs immediate hospital assessment, where a senior clinician decides on urgent non-contrast CT. Reversible cerebral vasoconstriction syndrome can also present with repeated thunderclap headaches, often triggered by sex."
    },
    {
     "h": "The discriminator",
     "t": "Gradual build with arousal, bilateral, recurrent and stereotyped, no neurology, no neck stiffness, no vomiting or collapse: reassuring. Instant “worst ever” onset, first-ever attack, focal signs, reduced consciousness or neck stiffness: same-day emergency assessment."
    },
    {
     "h": "Treatment",
     "t": "Explanation and reassurance first; pausing sexual activity when the headache starts often aborts it. Preventive options (propranolol, or indometacin or a triptan taken before activity) are off-label for this indication; doses per BNF, ideally on neurology advice. Confirm the raised blood pressure with home or ambulatory readings (NICE NG136)."
    },
    {
     "h": "Family history of aneurysm",
     "t": "A brother with a clipped aneurysm makes his fear concrete. Be honest: his pattern is not the pattern of a bleed, but it is reasonable to ask a neurologist whether imaging or screening is appropriate given the family history."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Otieno, I’m Dr Lee. Thanks for joining the video. You’ve booked about headaches — tell me in your own words what’s been going on.",
    "dom": "rto",
    "why": "Open question; lets him set the pace"
   },
   {
    "who": "pt",
    "text": "Sorry, this is a bit awkward. Just headaches. At certain times. Look, is there just a tablet I can take? I’d rather not go into the details."
   },
   {
    "who": "dr",
    "text": "I can see this feels uncomfortable, and that’s fine. Can I say something that might help? Nothing you tell me will shock me, and there’s no judgement here. Headaches that only come at particular times — during exercise, when coughing, or during sex — are well recognised and have names and treatments. The detail is what lets me pick the right tablet, and make sure it’s safe.",
    "dom": "tasks",
    "why": "Normalising, permission-based questioning so the true history can emerge"
   },
   {
    "who": "pt",
    "text": "(Pause.) It’s… during sex. Only then. I’ve never said that to a doctor."
   },
   {
    "who": "dr",
    "text": "Thank you. That took courage, and it’s exactly what I needed to know. Is it alright if I ask a few specific questions about it?",
    "dom": "rto",
    "why": "Acknowledges the disclosure matter-of-factly and asks permission to continue"
   },
   {
    "who": "pt",
    "text": "Yes. Go on."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When did it first happen, and how many times since?",
    "dom": "tasks",
    "why": "Establishes onset and whether this is a first or recurrent pattern"
   },
   {
    "who": "pt",
    "text": "About a month ago. Three times now."
   },
   {
    "who": "dr",
    "text": "And the most important question: does it build up as you become more aroused and peak around climax? Or has it ever hit like an explosion — worst pain of your life, full strength within a second or two?",
    "dom": "tasks",
    "why": "The discriminating question for a sentinel bleed or RCVS"
   },
   {
    "who": "pt",
    "text": "It builds. Gets worse and worse, then it’s bad at the end. Both sides, throbbing. Never like an explosion."
   },
   {
    "who": "dr",
    "text": "How long does it last, and was the very first one any different?",
    "dom": "tasks",
    "why": "Checks duration and specifically asks about the first attack"
   },
   {
    "who": "pt",
    "text": "Twenty minutes to an hour. Settles if I stop and rest. The first one was the same, just a shock."
   },
   {
    "who": "dr",
    "text": "During or after any of them, have you vomited, had a stiff neck, blacked out, or noticed weakness, numbness, speech or vision problems?",
    "dom": "tasks",
    "why": "Excludes neurological and meningeal red flags"
   },
   {
    "who": "pt",
    "text": "No, none of that."
   },
   {
    "who": "dr",
    "text": "Any headaches at other times — with exercise, coughing, or migraines in the past? And any drugs, including anything bought online, to help with sex or energy?",
    "dom": "tasks",
    "why": "Looks for exertional headache, migraine and drug triggers"
   },
   {
    "who": "pt",
    "text": "No. Nothing like that. I don’t take anything."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "You’ve clearly been carrying this for a month. What have you been thinking might be causing it?",
    "dom": "rto",
    "why": "Explores his ideas rather than assuming"
   },
   {
    "who": "pt",
    "text": "My brother had an aneurysm. They clipped it. Every time it happens I think, this is it, something’s going to burst."
   },
   {
    "who": "dr",
    "text": "That makes complete sense of how frightened you’ve been. I’m glad you told me, because we can deal with it properly. How has all this affected things at home?",
    "dom": "rto",
    "why": "Validates the fear and opens the relationship impact"
   },
   {
    "who": "pt",
    "text": "I’ve been avoiding it. Sex. My wife thinks I’ve gone off her. I haven’t told her why — I was too embarrassed."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "What you describe sounds like primary sexual headache. It’s a recognised condition where the surge in blood pressure and effort during sex sets off a headache. The pattern you describe — building gradually, both sides, the same each time, no other symptoms — is not the pattern of a bleed.",
    "dom": "tasks",
    "why": "Names a benign working diagnosis in plain language"
   },
   {
    "who": "pt",
    "text": "So it’s not an aneurysm?"
   },
   {
    "who": "dr",
    "text": "Your story is reassuring. But I’ll be honest, because of your brother: a new headache brought on by exertion is something guidance says we should think carefully about, so I’d like to ask a neurologist whether you need a scan. And there’s one rule to remember for life: a headache that hits like an explosion, worst ever within seconds, is a 999 call.",
    "dom": "tasks",
    "why": "Accurate on the aneurysm fear; states the thunderclap rule and plans specialist advice"
   },
   {
    "who": "pt",
    "text": "That’s fair. I’d actually feel better if someone checked."
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "There are treatment options: a daily tablet to damp down the blood-pressure surges, or a tablet taken shortly before sex. Neither is officially licensed for this, so I’d like the neurologist’s view on which suits you. Until then, if a headache starts, stopping and resting usually settles it. Your blood pressure was a little high too, so I’d like you to do a week of home readings.",
    "dom": "tasks",
    "why": "Treatment options with honest licensing status; BP confirmed with home readings"
   },
   {
    "who": "pt",
    "text": "Okay. I can do the readings."
   },
   {
    "who": "dr",
    "text": "And your wife. She thinks you’ve gone off her, when really you’ve been frightened of a headache. Would it help to tell her tonight that it’s a recognised, treatable headache? I could give you the words, or see you together if you’d like.",
    "dom": "rto",
    "why": "Treats the relationship harm as part of the problem and offers support"
   },
   {
    "who": "pt",
    "text": "I think I can tell her now it has a name. That helps."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "So, to check it’s clear: what would make you ring 999?",
    "dom": "gs",
    "why": "Teach-back on the key safety rule"
   },
   {
    "who": "pt",
    "text": "An explosion headache — worst ever, straight away. Or weakness or passing out."
   },
   {
    "who": "dr",
    "text": "Exactly — during sex or at any other time. I’ll send the neurology request today, you’ll do home blood pressure for a week, and I’ll speak to you in two weeks with the readings. Anything I’ve missed?",
    "dom": "gs",
    "why": "Summarises the plan with a defined follow-up"
   },
   {
    "who": "pt",
    "text": "No. Thank you — I nearly didn’t say any of it."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; noticed the embarrassment and normalised sexual symptoms before pressing for detail.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Marriage, avoidance of intimacy, his wife’s misreading of it, work as a teacher.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “a tablet, no details” and “my wife thinks I’ve gone off her” and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea of something serious; the specific fear of an aneurysm (brother’s clipped aneurysm); hoped for a tablet without questions.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Neurological examination when seen in person; home or ambulatory BP; neurology advice on imaging for new exertion-triggered headache.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Primary sexual headache vs sentinel subarachnoid haemorrhage, RCVS, migraine, drug-induced headache.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about thunderclap onset, first attack, vomiting, neck stiffness, collapse and focal neurology.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named primary sexual headache in plain language and explained why the pattern is reassuring.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Explained preventive options and their off-label status; neurology advice; stop-and-rest advice; offered help to talk to his wife.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Confirmed the raised BP with HBPM/ABPM per NICE NG136; asked about migraine and drugs.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Thunderclap or neurology → 999, stated in plain words with teach-back; review with BP readings.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Martin Otieno",
    "age": "42 years · male",
    "pmh": [
     "Nil significant"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "Teacher. No previous headache consultations. ⚠ BP slightly raised today — not yet confirmed.",
    "reason": "Video appointment: “headaches”. No detail given to reception."
   },
   "timeMap": [
    {
     "t": "0–2",
     "h": "Make it safe",
     "d": "He deflects and asks for a tablet. Normalise headaches at specific times, including during sex, and ask permission before going further."
    },
    {
     "t": "2–5",
     "h": "Discriminating history",
     "d": "Build-up vs instant explosion, the first attack, duration, vomiting, neck stiffness, collapse, neurology, drugs, migraine."
    },
    {
     "t": "5–7",
     "h": "ICE and the marriage",
     "d": "Brother’s aneurysm, the fear of a bleed, and his wife thinking he has gone off her."
    },
    {
     "t": "7–10",
     "h": "Explain and plan",
     "d": "Primary sexual headache; the thunderclap rule; neurology advice on imaging; treatment options; home BP."
    },
    {
     "t": "10–12",
     "h": "Wife, safety-net, close",
     "d": "Offer words or a joint appointment. Teach-back on the 999 rule. Review in two weeks."
    }
   ],
   "wordPics": {
    "fail": "Accepts “just headaches” and prescribes a painkiller; never learns the trigger; or learns it and is visibly awkward; never asks about thunderclap onset; misses the brother’s aneurysm and the marriage; no safety-net.",
    "pass": "Normalises and obtains the sexual trigger; asks about thunderclap onset and neurology; names primary sexual headache; gives the 999 rule; arranges BP confirmation and follow-up.",
    "exc": "All of the above, plus: handles the disclosure with easy warmth; answers the aneurysm fear honestly and seeks neurology advice rather than over- or under-reassuring; explains off-label treatment choices; helps him plan what to tell his wife; teach-back on the thunderclap rule."
   },
   "avoid": [
    {
     "dont": "“Could you be a bit more specific about when?” (asked with visible awkwardness, then moving on)",
     "instead": "“Headaches at particular times — exercise, coughing, sex — are well recognised. You can tell me plainly.”",
     "why": "Awkwardness from the doctor ends the disclosure; normalising invites it."
    },
    {
     "dont": "“It’s nothing serious, just a tension headache.”",
     "instead": "“Your pattern is reassuring. The one thing that would change that is a sudden explosion headache — that’s a 999 call.”",
     "why": "False reassurance without the thunderclap rule is unsafe."
    },
    {
     "dont": "“You should probably avoid sex for a while.”",
     "instead": "“If a headache starts, stopping and resting usually settles it, and there are treatments so you don’t have to choose.”",
     "why": "Blanket abstinence advice deepens the relationship harm he came with."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Relationship impact",
     "t": "Avoiding intimacy has been read by his wife as rejection. Silence, not the headache, is doing the damage; supporting disclosure is part of treatment."
    },
    {
     "h": "Shame and help-seeking",
     "t": "Men often delay presenting with sexual symptoms. Embarrassment kept him away for a month and nearly ended this consultation."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality",
     "t": "Anything shared with his wife is his to share. A joint consultation needs his consent (GMC confidentiality guidance)."
    }
   ],
   "professional": [
    {
     "h": "Taking a sexual history",
     "t": "Ask permission, explain why the question matters, use plain words and stay matter-of-fact (GMC Good medical practice, 2024: treat patients with dignity and without judgement)."
    },
    {
     "h": "Off-label prescribing",
     "t": "Propranolol, indometacin and triptans are off-label for sexual headache. Explain this and document the discussion and reasoning."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Relate offers relationship counselling if the strain persists. The Brain and Spine Foundation has information on headache and aneurysm."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Thunderclap onset — worst ever, peaking within seconds to minutes — during sex or at any time: possible subarachnoid haemorrhage or RCVS, same-day emergency assessment (NICE NG228)",
     "Vomiting, neck stiffness, collapse, reduced consciousness or focal neurology with any attack",
     "Headache triggered by exertion is a CG150 feature to evaluate for investigation or referral"
    ],
    "psychosocial": [
     "Marriage strain: his wife thinks he has gone off her",
     "A month of silence driven by shame",
     "Brother’s clipped aneurysm shaping every attack"
    ],
    "ice": [
     "Idea: something serious in his head that he is too embarrassed to name",
     "Concern: a brain aneurysm like his brother’s — and his marriage",
     "Expectation: a tablet with no questions"
    ]
   },
   "diagnosis": "“Your headaches fit primary sexual headache, a recognised condition triggered by the exertion and blood-pressure surge of sex. The build-up pattern is reassuring. A sudden explosion headache would be different and is always an emergency.”",
   "diagnosisLay": "“Think of it like a headache from lifting something very heavy: the effort and the rise in pressure set it off. It isn’t a bleed, and it can be treated.”",
   "management": {
    "reflectIce": "“You’ve spent a month thinking each one might be an aneurysm like your brother’s. Let’s deal with that fear properly — honestly and with a specialist’s view.”",
    "psychosocial": "Help him tell his wife it is a treatable headache, not rejection; offer a joint appointment or Relate if needed.",
    "sharedPlan": [
     "Neurology advice on whether imaging is needed for new exertion-triggered headache with a family history of aneurysm",
     "Preventive options (off-label; doses per BNF): propranolol daily, or indometacin or a triptan before activity",
     "Home or ambulatory BP to confirm or exclude hypertension (NICE NG136)"
    ],
    "safetyNet": [
     "Sudden explosion headache, collapse, neck stiffness, vomiting or neurology → 999",
     "Review in two weeks with home BP readings and the neurology response"
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
    "ic": "💠",
    "t": "Hypertension protocol",
    "s": "HBPM/ABPM · NICE NG136",
    "href": "management/hypertension.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed when embarrassment wins: the doctor never hears the word “sex”, or hears it and misses the thunderclap question. It is also failed on the unspoken agendas — the brother’s aneurysm and the marriage.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Treating “headaches” with advice on painkillers and fluids without finding out when they happen.",
     "why": "“Inadequate data gathering” — the trigger is the diagnosis. Without it the consultation is a generic headache review.",
     "fix": "Normalise early: “Headaches at particular times, including during sex, are well recognised — you can tell me plainly.”"
    },
    {
     "dom": "tasks",
     "fail": "Hearing “during sex” and reassuring straight away without asking about thunderclap onset or the first attack.",
     "why": "A first or thunderclap-onset sexual headache can be a sentinel bleed or RCVS. Missing the discriminator is a safety fail.",
     "fix": "“Did it ever hit like an explosion — worst ever within a second or two?” Then state the 999 rule."
    },
    {
     "dom": "rto",
     "fail": "Visible awkwardness — long pauses, euphemisms, moving on quickly once sex is mentioned.",
     "why": "“Does not put the patient at ease.” His shame will close the consultation if yours shows.",
     "fix": "Stay matter-of-fact, thank him for telling you, and ask permission for specific questions."
    },
    {
     "dom": "rto",
     "fail": "Never exploring the brother’s aneurysm, or dismissing it with “that’s nothing to do with you”.",
     "why": "The aneurysm fear is his main concern; dismissal forfeits Relating marks and his trust.",
     "fix": "Name it, explain why his pattern is reassuring, and offer a neurology opinion."
    },
    {
     "dom": "gs",
     "fail": "Ending with a prescription and no mention of his wife.",
     "why": "The relationship harm is half the presenting problem. Ignoring it leaves the plan incomplete.",
     "fix": "“Would it help to tell her tonight that it’s a treatable headache? I can give you the words or see you both.”"
    },
    {
     "dom": "gs",
     "fail": "Starting propranolol without mentioning it is off-label, and not addressing the raised BP.",
     "why": "Shared decisions need honest information; an unconfirmed raised BP needs NICE NG136 confirmation.",
     "fix": "Explain options and licensing, seek neurology advice, and arrange home BP readings with a review date."
    }
   ]
  }
 },
 "headache-preeclampsia": {
  "stem": {
   "name": "Nadia Hassan",
   "age": "29-year-old woman",
   "pmh": [
    "Currently 34 weeks pregnant",
    "Previous emergency caesarean section with HDU admission"
   ],
   "meds": [
    "Paracetamol (self-bought, for headache)"
   ],
   "allergy": "None recorded",
   "recent": "No recent blood pressure or urine check recorded. No home blood pressure monitor.",
   "reason": "Video consultation: “a headache that won’t shift” for two days; asking which painkillers are safe in pregnancy."
  },
  "knowledge": {
   "guideline": "NICE NG133 (2019, updated 2023) · NICE HTG630 (formerly DG49, 2022) · NICE NG201 · NICE CG192",
   "summary": "A persistent headache at 34 weeks with visual disturbance, epigastric pain and new swelling is pre-eclampsia until proven otherwise. It cannot be assessed by video. She needs same-day maternity assessment, and her fear of the hospital is the barrier to solve.",
   "points": [
    {
     "h": "Recognise the cluster",
     "t": "Severe or persistent headache, visual disturbance (flashing lights, blurring), pain below the ribs or in the upper abdomen, vomiting and sudden swelling of the face, hands or feet are symptoms of pre-eclampsia. NICE NG201 advises pregnant women to seek immediate advice if they occur."
    },
    {
     "h": "Definition",
     "t": "NICE NG133: pre-eclampsia is new hypertension (140/90 mmHg or more) after 20 weeks with significant proteinuria (urine protein:creatinine ratio 30 mg/mmol or more, or albumin:creatinine ratio 8 mg/mmol or more) or maternal organ dysfunction, such as liver involvement, neurological features or low platelets. Severe hypertension is 160/110 mmHg or more."
    },
    {
     "h": "It cannot be done by video",
     "t": "Assessment needs BP, urine protein, bloods (full blood count, liver and kidney function) and fetal assessment. NICE HTG630 (formerly DG49): placental growth factor (PlGF)-based testing can help rule in or rule out suspected preterm pre-eclampsia between 20 and 36+6 weeks — she is 34 weeks."
    },
    {
     "h": "Know the trajectory",
     "t": "Severe features include ongoing severe headache, visual scotomata, vomiting and epigastric pain (NICE NG133). Pre-eclampsia can progress to eclampsia, HELLP syndrome, placental abruption, stroke and fetal compromise."
    },
    {
     "h": "Day unit or 999?",
     "t": "With symptoms, refer to the maternity assessment or triage unit the same day and ring ahead. Call 999 for a seizure, severe headache with visual loss, severe epigastric pain with vomiting, reduced consciousness or reduced fetal movements with other concerns."
    },
    {
     "h": "Trauma drives avoidance",
     "t": "A previous emergency caesarean and HDU stay can leave lasting fear of the maternity unit. NICE CG192: ask about past traumatic birth and offer support; in the moment, reduce the barriers to attending."
    },
    {
     "h": "Painkillers aren’t the question",
     "t": "Paracetamol can be used in pregnancy, but answering only that question would miss the diagnosis. The headache is a symptom to assess, not to suppress."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Nadia, it’s Dr Lee. Can you see and hear me alright? Tell me about this headache.",
    "dom": "rto",
    "why": "Checks the video link and opens with the patient’s story"
   },
   {
    "who": "pt",
    "text": "Thanks for seeing me on the screen. It’s across my forehead, two days now, paracetamol isn’t touching it. Probably not sleeping, or hormones. I don’t want to be sent to hospital and be a nuisance. Could you just tell me which painkillers are safe?"
   },
   {
    "who": "dr",
    "text": "I’m glad you got in touch. I’ll definitely answer the painkiller question. At 34 weeks, a headache that won’t shift is something I need to ask a few questions about first. Is that okay?",
    "dom": "gs",
    "why": "Sets the agenda; signals why she can’t just have analgesia advice"
   },
   {
    "who": "pt",
    "text": "Sure."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Have you noticed anything with your eyesight — flashing lights, blurring, spots?",
    "dom": "tasks",
    "why": "Visual symptoms of pre-eclampsia"
   },
   {
    "who": "pt",
    "text": "Some flashing lights, yes. And things go a bit blurry. I thought I was just tired."
   },
   {
    "who": "dr",
    "text": "Any pain in your tummy, especially up here under the ribs?",
    "dom": "tasks",
    "why": "Epigastric or right upper quadrant pain"
   },
   {
    "who": "pt",
    "text": "A bit, up top. I thought it was indigestion."
   },
   {
    "who": "dr",
    "text": "Any new swelling — face, hands, ankles? Rings tighter?",
    "dom": "tasks",
    "why": "New oedema"
   },
   {
    "who": "pt",
    "text": "My rings feel tight. My face looks a bit puffy, now you say it."
   },
   {
    "who": "dr",
    "text": "Is the baby moving as normal today? And any vomiting?",
    "dom": "tasks",
    "why": "Fetal movements and vomiting"
   },
   {
    "who": "pt",
    "text": "Moving, yes, same as usual. No vomiting."
   },
   {
    "who": "dr",
    "text": "When was your blood pressure last checked?",
    "dom": "tasks",
    "why": "Recent BP and urine"
   },
   {
    "who": "pt",
    "text": "Not for a while. I haven’t got a machine at home."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said you don’t want to be sent to hospital. Can I ask what makes that feel so hard?",
    "dom": "rto",
    "why": "Follows the cue behind the minimising"
   },
   {
    "who": "pt",
    "text": "(Pause.) Last time was awful. Emergency section, then HDU. I still dream about it. I can’t go back in there unless I have to."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That sounds really frightening, and it makes complete sense that you’d want this to be just a headache. I’m not going to brush that aside.",
    "dom": "rto",
    "why": "Validates the trauma"
   },
   {
    "who": "pt",
    "text": "And I’m scared something’s wrong with the baby. It’s both at once."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’m going to be honest with you. A headache that won’t go, flashing lights, pain under the ribs and new swelling together can be a sign of pre-eclampsia — a rise in blood pressure that pregnancy can cause. It can affect you and the baby, and it can get worse quickly.",
    "dom": "tasks",
    "why": "Names pre-eclampsia in plain words"
   },
   {
    "who": "pt",
    "text": "Can’t you tell from here?"
   },
   {
    "who": "dr",
    "text": "I really can’t. It needs your blood pressure, a urine test, a blood test and a check on the baby — none of which I can do over video. So the honest answer to the painkiller question is that the painkiller isn’t the issue. Getting checked today is.",
    "dom": "tasks",
    "why": "Explains why remote assessment is unsafe"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’d like you to go to the maternity assessment unit today, now. I know that’s the place you dread. Can we work out together what would make it more bearable?",
    "dom": "rto",
    "why": "Clear recommendation, then shared problem-solving"
   },
   {
    "who": "pt",
    "text": "I don’t know. Not being on my own, I suppose. Knowing what they’ll do."
   },
   {
    "who": "dr",
    "text": "I’ll ring the unit myself as soon as we finish, so they’re expecting you by name and know about last time. It’s usually a blood pressure check, a urine pot, bloods and a monitor for the baby. Could someone come with you?",
    "dom": "tasks",
    "why": "Named handover, expectation-setting, support person"
   },
   {
    "who": "pt",
    "text": "My husband can leave work. He’d drive me."
   },
   {
    "who": "dr",
    "text": "That’s perfect. Please don’t drive yourself. And afterwards, whatever happens, I’d like to talk about support for what happened last time — you shouldn’t have to carry that on your own.",
    "dom": "rto",
    "why": "Plans later trauma support"
   },
   {
    "who": "pt",
    "text": "I’d like that."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If before you get there the headache gets severe, you lose part of your vision, the pain gets bad, you start vomiting, the baby moves less, or you feel very unwell or have a fit — call 999, don’t wait for your husband.",
    "dom": "gs",
    "why": "Specific 999 triggers"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "So I know I’ve explained it clearly — what’s the plan?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "You ring the unit, my husband takes me now, they check my blood pressure and wee and bloods and the baby. 999 if it gets worse."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll ring you this evening to see how you got on. Getting in touch today was brave, Nadia — and it was the right thing to do.",
    "dom": "gs",
    "why": "Follow-up to confirm attendance"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; acknowledged the painkiller question and agreed to answer it after asking some questions.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Previous traumatic emergency caesarean and HDU stay; husband available to take her; fear for the baby.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “don’t want to be a nuisance”, “indigestion” and “just tired”, and explored them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (hormones or poor sleep), concern (going back to the unit; something wrong with the baby), expectation (safe painkillers).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Recognised video cannot assess: BP, urine protein, FBC, liver and kidney function, PlGF-based testing (NICE HTG630, formerly DG49) and fetal monitoring at the unit.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Pre-eclampsia vs tension headache vs migraine; HELLP suggested by epigastric pain; asked about vomiting and fetal movements.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Visual disturbance, epigastric pain, new swelling, vomiting and fetal movements all asked about; 999 criteria defined.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated suspected pre-eclampsia in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day maternity assessment unit with a GP phone handover; support person; no driving herself.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Birth trauma acknowledged and later support offered (NICE CG192).",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Specific 999 triggers, teach-back and a call this evening to confirm she attended.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Gender, reproductive & sexual health",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Nadia Hassan",
    "age": "29 years · female",
    "pmh": [
     "Pregnant, 34 weeks",
     "Previous emergency caesarean section; HDU admission"
    ],
    "meds": [
     "Paracetamol OTC (patient-reported)"
    ],
    "allergy": "None recorded",
    "recent": "⚠ No BP or urinalysis recorded recently. Booked a video slot herself.",
    "reason": "Video consultation. “Could you just tell me which painkillers are safe in pregnancy?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agenda",
     "d": "Painkiller question plus “don’t send me to hospital”. Agree to answer after a few questions."
    },
    {
     "t": "1–4",
     "h": "The cluster",
     "d": "Visual symptoms, epigastric pain, swelling, vomiting, fetal movements, last BP check."
    },
    {
     "t": "4–6",
     "h": "The avoidance",
     "d": "Why hospital feels so hard: the previous emergency caesarean and HDU. Validate it."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Possible pre-eclampsia; cannot be checked by video. Same-day maternity unit; GP rings ahead; what to expect; husband drives."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 triggers, teach-back, call this evening. Offer later support for the birth trauma."
    }
   ],
   "wordPics": {
    "fail": "Answers the painkiller question and books a routine review; never asks about visual symptoms, epigastric pain or swelling; or orders her to hospital with no attention to her fear, so she doesn’t go.",
    "pass": "Recognises possible pre-eclampsia, explains it cannot be assessed by video, arranges same-day maternity assessment and gives 999 safety-netting.",
    "exc": "All of the above, plus: finds and validates the birth trauma; solves the barriers together (rings ahead, explains what to expect, support person); checks fetal movements; teach-back; follows up that she attended; offers support for the trauma later."
   },
   "avoid": [
    {
     "dont": "“Paracetamol is safe in pregnancy — keep taking that and see how you go.”",
     "instead": "“The painkiller isn’t the issue. With these symptoms, you need checking today.”",
     "why": "Answering the literal question misses pre-eclampsia."
    },
    {
     "dont": "“You need to go to hospital now, there’s no choice.”",
     "instead": "“I know that’s the place you dread. What would make it more bearable?”",
     "why": "An order without meeting the fear risks her not going."
    },
    {
     "dont": "“It’s probably nothing, but go and get checked to be safe.”",
     "instead": "“These symptoms together can be a sign of pre-eclampsia, which can get worse quickly.”",
     "why": "False reassurance gives her permission to stay home."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Birth trauma",
     "t": "A previous emergency caesarean and HDU stay can cause lasting fear and avoidance in the next pregnancy. “Not wanting to be a nuisance” is often fear."
    },
    {
     "h": "Practical support",
     "t": "Her husband can take her. Arrange transport and company; she should not drive herself."
    }
   ],
   "legal": [
    {
     "h": "Capacity and informed refusal",
     "t": "A pregnant woman with capacity can decline assessment (Mental Capacity Act 2005). If she did, explain the risks to her and the baby clearly, keep the door open, involve the maternity team and document carefully."
    }
   ],
   "professional": [
    {
     "h": "Remote consulting",
     "t": "Recognise when a video consultation cannot answer the clinical question and escalate (GMC Good Medical Practice 2024). Hand over to the unit by phone so she is expected."
    },
    {
     "h": "Documentation and follow-up",
     "t": "Record the symptoms, advice, the call to the unit, the 999 criteria and the plan to check she attended."
    }
   ],
   "community": [
    {
     "h": "After the emergency",
     "t": "Tell the midwife and the maternity team about the previous traumatic birth; perinatal mental health or maternal mental health services if needed; the Birth Trauma Association for peer support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Persistent or severe headache in the second half of pregnancy",
     "Visual disturbance, epigastric or right upper quadrant pain, vomiting",
     "Sudden swelling of face or hands; reduced fetal movements; any seizure"
    ],
    "psychosocial": [
     "Previous emergency caesarean and HDU stay; avoidance of the unit",
     "Fear for the baby",
     "Who can take her; no home BP monitor"
    ],
    "ice": [
     "Idea: a tension or hormone headache from poor sleep",
     "Concern: going back to the maternity unit; something being wrong with the baby",
     "Expectation: to be told which painkillers are safe"
    ]
   },
   "diagnosis": "Suspected pre-eclampsia at 34 weeks: persistent headache unrelieved by paracetamol, visual disturbance, epigastric pain and new facial and hand oedema; no recent BP or urinalysis. Needs same-day maternity assessment.",
   "diagnosisLay": "“These symptoms together can mean your blood pressure is rising in a way pregnancy sometimes causes, called pre-eclampsia. It can get worse quickly, for you and the baby. It needs checking today, and I can’t do that on a screen.”",
   "management": {
    "reflectIce": "“After last time, I completely understand why the unit is the last place you want to go. Let’s make it as easy as possible, because going today protects you and the baby.”",
    "psychosocial": "Ring ahead so she is expected, explain what will happen, arrange for her husband to take her, and offer support for the birth trauma afterwards.",
    "sharedPlan": [
     "Same-day maternity assessment: BP, urine protein, bloods, fetal monitoring (NICE NG133; PlGF-based testing per NICE HTG630 (formerly DG49))",
     "GP phones the unit with a handover including the previous traumatic birth",
     "Husband drives; she does not drive herself"
    ],
    "safetyNet": [
     "999 for severe headache, loss of vision, severe pain, vomiting, reduced movements or a fit",
     "GP call this evening; later discussion of support for the birth trauma (NICE CG192)"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Hypertension in pregnancy protocol",
    "s": "Pre-eclampsia · NICE NG133",
    "href": "management/hypertension-pregnancy.html"
   },
   {
    "ic": "🗺️",
    "t": "Headache pathway",
    "s": "Visual algorithm · red flags",
    "href": "algorithms/headache.html"
   },
   {
    "ic": "📋",
    "t": "Headache",
    "s": "Case walkthrough · secondary causes",
    "href": "../cases/headache.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by answering her question. “Which painkillers are safe?” hides a pre-eclampsia cluster, and “I don’t want to be a nuisance” hides a traumatic birth. Find both, and make going in possible.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Advising paracetamol and a routine midwife review.",
     "why": "“Management plan not in line with current UK best practice.” Symptomatic possible pre-eclampsia needs same-day assessment (NICE NG133).",
     "fix": "Ask about vision, epigastric pain and swelling in every pregnant woman with headache after 20 weeks."
    },
    {
     "dom": "tasks",
     "fail": "Trying to reassure her over video because she looks well.",
     "why": "Pre-eclampsia is diagnosed on BP, urine and bloods, none of which video can provide.",
     "fix": "Say it plainly: “I can’t check this on a screen.”"
    },
    {
     "dom": "tasks",
     "fail": "Not asking about fetal movements or defining when to call 999.",
     "why": "“Does not gather sufficient information to make a safe assessment.”",
     "fix": "Ask about movements and vomiting, and name the 999 triggers."
    },
    {
     "dom": "rto",
     "fail": "Ordering her to hospital without exploring the reluctance.",
     "why": "“Does not identify or respond to the patient’s cues.” She may not go.",
     "fix": "“What makes going in feel so hard?” Then solve it together."
    },
    {
     "dom": "rto",
     "fail": "Offering false reassurance to soften the message.",
     "why": "“Probably nothing” gives her permission to stay home.",
     "fix": "Be honest and warm: name pre-eclampsia and why today matters."
    },
    {
     "dom": "gs",
     "fail": "Ending with “go in if you’re worried” and no follow-up.",
     "why": "Non-specific safety-netting with no confirmed plan.",
     "fix": "Ring the unit, confirm transport, teach-back, and call her this evening."
    }
   ]
  }
 },
 "headache-thunderclap": {
  "stem": {
   "name": "Luke Brennan",
   "age": "34-year-old man",
   "pmh": [
    "No significant past medical history"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "None recorded",
   "recent": "Accountant. Nothing relevant on record.",
   "reason": "Telephone call late morning: sudden severe headache at the gym about 3 hours ago; asking for strong co-codamol."
  },
  "knowledge": {
   "guideline": "NICE NG228 (2022) · NICE CG150 (updated June 2025) · GMC Confidentiality (2017)",
   "summary": "A headache that reaches its peak within minutes, the worst ever, with neck stiffness and vomiting, is subarachnoid haemorrhage until proven otherwise. The onset defines the risk, not how he feels now. 999, not co-codamol.",
   "points": [
    {
     "h": "Define thunderclap",
     "t": "NICE NG228: a sudden severe headache, typically peaking in intensity within 1 to 5 minutes, is a red-flag symptom of subarachnoid haemorrhage. His “like being hit on the back of the head”, maximal almost at once, is exactly this."
    },
    {
     "h": "Most are not SAH — still investigate",
     "t": "NICE NG228: most people with a thunderclap headache do not have SAH, but that should not deter investigation when it is suspected. Neck stiffness, vomiting and onset on exertion add weight."
    },
    {
     "h": "Easing does not exclude it",
     "t": "SAH headaches can settle partly. The profile at onset, not the current severity, decides the need for emergency assessment."
    },
    {
     "h": "What the hospital will do",
     "t": "NICE NG228: urgent non-contrast CT head. CT within 6 hours of onset is highly accurate; if it shows no haemorrhage, lumbar puncture is not routinely needed. If CT is done later and is negative, lumbar puncture is done at least 12 hours after onset. At about 3 hours now, speed matters."
    },
    {
     "h": "Other thunderclap causes",
     "t": "Reversible cerebral vasoconstriction syndrome, arterial dissection, cerebral venous sinus thrombosis, pituitary apoplexy and meningitis. Cocaine and other stimulants are linked to SAH and to vasoconstriction — the hospital needs to know."
    },
    {
     "h": "Ask about drugs safely",
     "t": "Ask calmly, routinely and confidentially. Drug use is confidential medical information (GMC Confidentiality 2017); he should know you won’t tell his employer or the police, and why it matters to his care."
    },
    {
     "h": "No analgesia by phone",
     "t": "Prescribing co-codamol over the phone and letting him go back to work is unsafe. He should not drive himself."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Luke, it’s Dr Lee. I hear you’ve got a bad headache. Tell me exactly how it started.",
    "dom": "rto",
    "why": "Open question focused on onset"
   },
   {
    "who": "pt",
    "text": "Came on really suddenly at the gym this morning — like someone smacked me round the back of the head. Floored me for a minute. I’ve been sick once, neck’s stiff. It’s settled a bit, so it’s probably a migraine or I overdid the weights. Can you put through some strong co-codamol so I can crack on?"
   },
   {
    "who": "dr",
    "text": "Thanks, that’s very clear. I want to help, and I’ll be quick because you’re busy. But how a headache starts matters a lot, so I need to ask a few specific things before we decide anything. Okay?",
    "dom": "gs",
    "why": "Sets the agenda and holds off the prescription"
   },
   {
    "who": "pt",
    "text": "Yeah, go on."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When it hit — did it build up over a while, or was it at its worst within seconds?",
    "dom": "tasks",
    "why": "Establishes thunderclap onset"
   },
   {
    "who": "pt",
    "text": "Instantly. Bang. Worst headache I’ve ever had."
   },
   {
    "who": "dr",
    "text": "Were you lifting at the time? Did you black out, even briefly?",
    "dom": "tasks",
    "why": "Exertional onset and loss of consciousness"
   },
   {
    "who": "pt",
    "text": "Mid-lift, yeah. I didn’t black out, I just had to sit on the floor."
   },
   {
    "who": "dr",
    "text": "Any weakness, numbness, double vision, trouble speaking, fever or a rash? Does light hurt your eyes?",
    "dom": "tasks",
    "why": "Screens for focal signs and meningitis"
   },
   {
    "who": "pt",
    "text": "Light’s a bit much. No fever. Nothing else."
   },
   {
    "who": "dr",
    "text": "Is anyone with you at the moment?",
    "dom": "tasks",
    "why": "Checks immediate safety"
   },
   {
    "who": "pt",
    "text": "No, I’m on my own at the moment."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said migraine or the weights. Has anything else crossed your mind about what this could be?",
    "dom": "rto",
    "why": "Invites the hidden fear"
   },
   {
    "who": "pt",
    "text": "(Pause.) A guy at work, his dad had a brain bleed a few weeks ago. I keep thinking about that. But I’m 34. It can’t be."
   },
   {
    "who": "dr",
    "text": "That’s a very natural thing to worry about, and I’m glad you said it. I’m going to be honest with you, because you’d want me to be.",
    "dom": "rto",
    "why": "Acknowledges the fear before explaining"
   },
   {
    "who": "dr",
    "text": "One more question I ask everyone with a headache like this, no judgement, and it stays medical information. You mentioned a party last night — did you take anything? Cocaine, or any other drugs?",
    "dom": "tasks",
    "why": "Calm, confidential drug history"
   },
   {
    "who": "pt",
    "text": "(Long pause.) …Yeah. Some coke. Not a lot. Please don’t tell work."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me — that took guts. I won’t tell your work or anyone else. I ask because cocaine can be linked to this kind of headache, and the hospital needs to know so they look after you properly.",
    "dom": "rto",
    "why": "Rewards honesty, explains confidentiality and relevance"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "A headache that explodes to its worst in seconds, the worst you’ve had, with a stiff neck and being sick, can be a bleed around the brain. It can ease off and still be that. I can’t tell by phone, and nor can anyone — you need a brain scan today.",
    "dom": "tasks",
    "why": "Names SAH in plain words; explains why easing is not reassuring"
   },
   {
    "who": "pt",
    "text": "Like my mate’s dad."
   },
   {
    "who": "dr",
    "text": "It might be something else, and most scans like this are clear. But the scan is the only way to know, and it’s most accurate in the first few hours. Facing the fear means getting the scan, not hoping.",
    "dom": "rto",
    "why": "Honest, proportionate, uses his fear to motivate"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "So, no co-codamol and no going back to work. I’m going to call an ambulance for you now. Please stay where you are, and don’t drive. Is that okay?",
    "dom": "tasks",
    "why": "999 now; no analgesia; no driving"
   },
   {
    "who": "pt",
    "text": "An ambulance? I could get a taxi to A&E."
   },
   {
    "who": "dr",
    "text": "If you got worse in a taxi, nobody could help you. An ambulance is safest. Is there someone you can ask to come and sit with you until it arrives?",
    "dom": "tasks",
    "why": "Explains why 999 and arranges company"
   },
   {
    "who": "pt",
    "text": "Yeah, I’ll ring someone. And I’ll just tell work I’m unwell, nothing else."
   },
   {
    "who": "dr",
    "text": "That’s fine — what you tell work is up to you. Please do tell the ambulance crew and the hospital about the cocaine and when you took it. It helps them.",
    "dom": "rto",
    "why": "Respects his privacy while ensuring the team gets the history"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "While you wait: if you get very drowsy, have a fit, your vision or speech goes, or one side goes weak, ring 999 again and tell them you’re worse. Don’t take anything for the pain meanwhile.",
    "dom": "gs",
    "why": "Specific deterioration triggers"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "Just so I know I’ve explained it properly — what’s going to happen now?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "You’re calling an ambulance, I stay here, someone sits with me, I tell them about the headache and the coke. And I don’t drive."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll document this and ring you this evening to check you’ve been seen. Ringing today was the right call, Luke.",
    "dom": "gs",
    "why": "Documentation and follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question about onset; acknowledged the request without agreeing to it.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work deadline, on his own, the party, fear after a colleague’s father’s bleed, worry about his employer.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “hit on the back of the head”, “it’s settled a bit” and “a party last night”, and explored each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (migraine or gym strain), concern (a brain bleed like his colleague’s father; cocaine being found out), expectation (co-codamol and back to work).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Recognised that a phone call cannot exclude SAH; emergency non-contrast CT (and lumbar puncture if CT is late and negative, per NICE NG228).",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "SAH vs reversible cerebral vasoconstriction vs dissection vs meningitis vs migraine; cocaine as a relevant trigger.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Onset within seconds, worst ever, exertion, neck stiffness, vomiting, photophobia, collapse, focal signs and fever all asked about.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated suspected subarachnoid haemorrhage in plain words; explained that easing does not exclude it.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "999 now; no analgesia; no driving; someone to stay with him; tell the hospital about the cocaine.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Confidential, non-judgemental handling of cocaine use; offered follow-up about drug use after the emergency.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named deterioration triggers, teach-back, documentation and a call this evening.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Luke Brennan",
    "age": "34 years · male",
    "pmh": [
     "Nil significant"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Reception note: “bad headache since gym this morning, wants co-codamol, says not urgent”.",
    "reason": "Telephone call. “Could you just put me through some strong co-codamol?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Onset first",
     "d": "He gives you the thunderclap in his opening line. Hear it, and hold off the prescription."
    },
    {
     "t": "1–4",
     "h": "Profile and screen",
     "d": "Seconds to peak, worst ever, exertion, collapse, neck stiffness, vomiting, photophobia, focal signs, fever. Where is he, and is anyone with him?"
    },
    {
     "t": "4–6",
     "h": "Fear and drugs",
     "d": "The colleague’s father. Then a calm, routine, confidential question about drugs after the party."
    },
    {
     "t": "6–10",
     "h": "Explain and act",
     "d": "Possible bleed; easing doesn’t exclude it; scan today. 999 now, no co-codamol, no driving, company, tell the hospital about the cocaine."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Deterioration triggers, teach-back, document, call this evening."
    }
   ],
   "wordPics": {
    "fail": "Issues co-codamol or a triptan; accepts “migraine” because it has eased; suggests a GP appointment tomorrow; lets him drive; never asks about drugs, or asks in a judgemental way.",
    "pass": "Recognises thunderclap onset, explains the possible bleed, arranges emergency assessment the same day and gives a basic safety-net.",
    "exc": "All of the above, plus: explains that easing doesn’t exclude a bleed; finds the cocaine with a calm, confidential question and explains its relevance; meets his fear about his colleague’s father; arranges 999, company and no driving; teach-back and follow-up."
   },
   "avoid": [
    {
     "dont": "“It’s eased, so it’s probably a migraine — I’ll send co-codamol.”",
     "instead": "“How it started matters more than how it feels now. That pattern needs a scan today.”",
     "why": "Partial improvement is the classic false reassurance in SAH."
    },
    {
     "dont": "“Have you been taking illegal drugs?”",
     "instead": "“I ask everyone with this headache, no judgement — did you take anything at the party?”",
     "why": "An accusatory question gets a denial; a routine, confidential one gets the truth."
    },
    {
     "dont": "“Get yourself to A&E when you can.”",
     "instead": "“I’m calling an ambulance now. Stay where you are and don’t drive.”",
     "why": "He is on his own and at risk of sudden deterioration."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work pressure",
     "t": "A deadline and fear of being judged push him to minimise. Reassure him that what he tells work is his choice."
    },
    {
     "h": "Recreational drug use",
     "t": "Cocaine at a party the night before. Handle it as health information, and offer a later conversation about drug use once the emergency is over."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality",
     "t": "Drug use disclosed in a consultation is confidential (GMC Confidentiality 2017). There is no duty to inform the police or his employer. Sharing with the treating hospital team is part of direct care."
    },
    {
     "h": "Driving",
     "t": "He must not drive himself to hospital. If SAH or another serious cause is confirmed, the hospital will advise on DVLA notification."
    }
   ],
   "professional": [
    {
     "h": "Refusing an unsafe request",
     "t": "Declining to prescribe co-codamol by phone for a thunderclap headache is good clinical care; explain why and offer the safe alternative (GMC Good Medical Practice 2024)."
    },
    {
     "h": "Documentation",
     "t": "Record the onset profile, the drug history, the advice given, the 999 call and the follow-up plan."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "FRANK for drug information; local drug and alcohol services if he wants help later. A fit note can be provided after discharge if he needs time off."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Peak intensity within seconds to minutes; “worst ever”",
     "Onset on exertion, straining or sex; collapse or loss of consciousness",
     "Neck stiffness, vomiting, photophobia, focal neurology, seizure, fever"
    ],
    "psychosocial": [
     "Work deadline and wish to avoid A&E",
     "On his own; who can be with him",
     "Cocaine the night before; fear of his employer finding out"
    ],
    "ice": [
     "Idea: a migraine or a gym strain that is already settling",
     "Concern: a brain bleed like his colleague’s father; the cocaine being discovered",
     "Expectation: strong co-codamol by phone and back to work"
    ]
   },
   "diagnosis": "Thunderclap headache on exertion with neck stiffness, vomiting and photophobia in a 34-year-old who used cocaine the night before: suspected subarachnoid haemorrhage (differential includes reversible cerebral vasoconstriction syndrome). Partial easing does not exclude it.",
   "diagnosisLay": "“A headache that hits its worst in seconds can be a bleed around the brain. It can ease and still be that. Only a scan can tell, and it needs to be today.”",
   "management": {
    "reflectIce": "“You’ve been worried this is like your colleague’s dad. The way to deal with that fear is the scan, not hoping it’s a migraine.”",
    "psychosocial": "Keep the cocaine confidential from work while making sure the hospital knows; arrange someone to sit with him.",
    "sharedPlan": [
     "999 now for suspected SAH (NICE NG228); GP calls the ambulance",
     "No analgesia by phone; no driving; stay where he is with company",
     "Tell the crew and the hospital about the cocaine and its timing"
    ],
    "safetyNet": [
     "Drowsiness, seizure, vision or speech change, one-sided weakness: ring 999 again",
     "GP call this evening; offer a later conversation about drug use"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Headache",
    "s": "Case walkthrough · red flags",
    "href": "../cases/headache.html"
   },
   {
    "ic": "🗺️",
    "t": "Headache pathway",
    "s": "Visual algorithm · thunderclap",
    "href": "algorithms/headache.html"
   },
   {
    "ic": "📋",
    "t": "Drug dependence",
    "s": "Case walkthrough · non-judgemental history",
    "href": "../cases/drug-dependence.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by being reassured. He sounds well, it has eased, and he wants to work. The onset is what matters, and the drug history only comes out if the question feels safe.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing co-codamol because the headache has eased.",
     "why": "“Management plan not in line with current UK best practice.” NICE NG228: thunderclap headache is a red flag for SAH; easing does not exclude it.",
     "fix": "“How it started matters more than how it feels now.” Then 999."
    },
    {
     "dom": "tasks",
     "fail": "Arranging a GP appointment tomorrow or “A&E if it gets worse”.",
     "why": "CT is most accurate within 6 hours of onset (NICE NG228); delay costs diagnostic accuracy and safety.",
     "fix": "Call the ambulance now and tell him why timing matters."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about drugs after he mentions the party.",
     "why": "“Does not gather sufficient information.” Cocaine is directly relevant to SAH and vasoconstriction.",
     "fix": "Ask routinely and confidentially, and explain why it matters."
    },
    {
     "dom": "rto",
     "fail": "Reacting to the cocaine with disapproval.",
     "why": "He shuts down and may refuse the ambulance.",
     "fix": "“Thank you for telling me. It stays medical, and it helps the hospital look after you.”"
    },
    {
     "dom": "rto",
     "fail": "Missing the fear about his colleague’s father.",
     "why": "“Does not identify or respond to cues.” The fear is why he is minimising.",
     "fix": "“Has anything else crossed your mind?” Then use it: the scan settles it."
    },
    {
     "dom": "gs",
     "fail": "Letting him drive to hospital, alone.",
     "why": "Unsafe if he deteriorates; no confirmed plan.",
     "fix": "Ambulance, someone with him, specific 999 triggers, teach-back and a follow-up call."
    }
   ]
  }
 },
 "hmb-fibroids": {
  "stem": {
   "name": "Folake Adeyemi",
   "age": "43-year-old woman",
   "pmh": [
    "Heavy menstrual bleeding, worsening over 2 years",
    "Two children"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Pelvic ultrasound (requested by a colleague): several intramural fibroids, largest 4 cm; endometrium normal. Bloods: Hb 104 g/L, ferritin 8. Cervical screening up to date.",
   "reason": "Telephone appointment to discuss scan and blood results."
  },
  "knowledge": {
   "guideline": "NICE NG88 · BSG iron-deficiency anaemia guideline (2021) · MHRA Drug Safety Update (February 2021) · NICE NG12 (updated April 2026)",
   "summary": "Heavy periods with fibroids of 3 cm or more: match treatment to her priorities and consider specialist referral. Treat the iron-deficiency anaemia now.",
   "points": [
    {
     "h": "Define by impact",
     "t": "NICE NG88 defines heavy menstrual bleeding by its effect on quality of life, not by measured volume. Flooding, clots, hourly changes and days off work meet it."
    },
    {
     "h": "Fibroids 3 cm or more",
     "t": "NICE NG88: take into account size, location and number of fibroids and the severity of symptoms. Options include tranexamic acid, NSAIDs, LNG-IUS, combined hormonal contraception, cyclical oral progestogens, uterine artery embolisation, myomectomy and hysterectomy. Pharmacological treatment may be less effective with larger fibroids, and referral to specialist care to discuss all options should be considered."
    },
    {
     "h": "Fertility changes the options",
     "t": "If she may want a pregnancy: tranexamic acid and NSAIDs are non-hormonal and do not prevent conception; hormonal options (LNG-IUS, CHC) are contraceptive. Myomectomy and uterine artery embolisation preserve the uterus; endometrial ablation is not for women wanting future pregnancy; hysterectomy is a last-resort choice."
    },
    {
     "h": "Ulipristal",
     "t": "MHRA Drug Safety Update (February 2021): ulipristal acetate 5 mg for fibroids is restricted because of the risk of serious liver injury. It is not a routine primary-care option."
    },
    {
     "h": "Treat the anaemia",
     "t": "Hb 104 with ferritin 8 is iron-deficiency anaemia. BSG 2021: one tablet of oral iron daily (alternate days if not tolerated), product and strength per BNF; check the Hb response at about 4 weeks and continue for about 3 months after it normalises. BSG 2021 also advises coeliac serology in adults with iron-deficiency anaemia."
    },
    {
     "h": "Red flags",
     "t": "Intermenstrual or post-coital bleeding, an abnormal endometrium, or a pelvic mass not obviously fibroids change the pathway (a pelvic or abdominal mass not obviously uterine fibroids is a NICE NG12 (updated April 2026), suspected cancer referral). None are present here."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Ms Adeyemi, it’s Dr Lee. Can I just check your date of birth? Thanks. You’re ringing about your scan and blood tests — before I go through them, what do you know so far and what would you most like to get out of today?",
    "dom": "rto",
    "why": "Identity check; establishes her starting point and agenda"
   },
   {
    "who": "pt",
    "text": "Someone said fibroids. I’ve learned to live with my periods, but I’m so tired now. I just want to know whether I need an operation, or whether I carry on coping."
   },
   {
    "who": "dr",
    "text": "Let’s answer that properly. I’d like to ask a bit about the bleeding and the tiredness, then go through the results and the options. Okay?",
    "dom": "gs",
    "why": "Sets a clear agenda"
   },
   {
    "who": "pt",
    "text": "Yes, go on."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "What’s a heavy day like for you?",
    "dom": "rto",
    "why": "Open question on impact — how NG88 defines HMB"
   },
   {
    "who": "pt",
    "text": "Flooding through my clothes, clots, changing every hour. I plan my diary around it. There are days I don’t leave the house."
   },
   {
    "who": "dr",
    "text": "That sounds exhausting. Are your periods regular? Any bleeding between periods or after sex? Any pressure on your bladder or bowel?",
    "dom": "tasks",
    "why": "Screens for IMB/PCB and pressure symptoms"
   },
   {
    "who": "pt",
    "text": "Regular as clockwork. Nothing between, nothing after sex. No pressure."
   },
   {
    "who": "dr",
    "text": "And the tiredness — any breathlessness, palpitations, feeling faint?",
    "dom": "tasks",
    "why": "Assesses symptoms of anaemia"
   },
   {
    "who": "pt",
    "text": "Out of breath on the stairs. My heart races sometimes. People keep saying I look grey."
   },
   {
    "who": "dr",
    "text": "Have you had any blood clots in the legs or lungs, or any stomach problems like ulcers? That affects which medicines are safe.",
    "dom": "tasks",
    "why": "Checks contraindications to tranexamic acid and NSAIDs"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said “carry on coping”. It sounds like you’ve put up with this for a long time. Is part of that a worry about what treatment might mean?",
    "dom": "rto",
    "why": "Follows the resignation cue"
   },
   {
    "who": "pt",
    "text": "(Pause.) I thought fibroids meant a hysterectomy. My partner and I have talked about maybe having a baby. I didn’t want to be told no."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That makes sense of everything, and it changes how we approach this — in a good way. Nobody is going to take that choice away from you.",
    "dom": "rto",
    "why": "Validates the fertility fear and restores agency"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "The results first. Fibroids are very common, benign growths in the muscle of the womb. They’re not cancer. The lining of your womb looks normal, which is reassuring, and your regular periods with no bleeding in between fit with that.",
    "dom": "tasks",
    "why": "Interprets the scan in context; benign picture"
   },
   {
    "who": "pt",
    "text": "That’s a relief."
   },
   {
    "who": "dr",
    "text": "Your blood test shows you’re anaemic, and your iron stores are very low. That’s why you’re breathless and exhausted. I’d like to start iron tablets today — one a day — and recheck your blood in about four weeks. I’d also add a test for coeliac disease, which is routine with low iron.",
    "dom": "tasks",
    "why": "Treats iron-deficiency anaemia per BSG 2021"
   },
   {
    "who": "pt",
    "text": "I just thought tired was normal."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "For the bleeding there’s a ladder of options, and hysterectomy is right at the top — the last option, and only ever your choice. Because you might want a baby, the most useful first step is tranexamic acid, a tablet you take only on heavy days. It isn’t a hormone and won’t stop you getting pregnant. An anti-inflammatory can be added.",
    "dom": "tasks",
    "why": "Options ladder matched to her fertility wishes (NICE NG88)"
   },
   {
    "who": "pt",
    "text": "What about the hormone coil? A friend has one."
   },
   {
    "who": "dr",
    "text": "It works well for many women, but it’s a contraceptive, so it doesn’t fit if you’re trying soon — and with fibroids your size it’s worth a specialist’s view. Because the largest is 4 cm, I’d like to refer you to gynaecology to discuss options that keep the womb, like removing just the fibroids, and to talk about pregnancy at your age. I’ll tell them fertility matters to you.",
    "dom": "tasks",
    "why": "NG88 referral consideration for fibroids 3 cm or more; fertility flagged"
   },
   {
    "who": "pt",
    "text": "So I don’t have to lose my womb."
   },
   {
    "who": "dr",
    "text": "No. You have choices. Does starting iron and tranexamic acid now, with a gynaecology referral, feel like the right plan?",
    "dom": "rto",
    "why": "Checks agreement; shared decision"
   },
   {
    "who": "pt",
    "text": "Yes. That’s more than I expected."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Iron can upset your stomach and turns stools dark — that’s expected. If you get chest pain, severe breathlessness, feel faint, or bleeding so heavy you’re soaking through every hour and feel unwell, seek same-day help. Tell us too if you ever get bleeding between periods or after sex. I’ll call you after the blood test in four weeks. What’s the plan in your words?",
    "dom": "gs",
    "why": "Side-effects, safety-net, follow-up and teach-back"
   },
   {
    "who": "pt",
    "text": "Iron every day, the tablets on heavy days, a referral that keeps my womb, and bloods in four weeks."
   },
   {
    "who": "dr",
    "text": "Perfect. Anything else before we finish?",
    "dom": "rto",
    "why": "Shares the floor"
   },
   {
    "who": "pt",
    "text": "No. I wish I’d rung years ago."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Established what she knew and wanted before giving results.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work as an accountant, days off, planning life around periods, new partner.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “carry on coping” and the hesitation about the future, and explored them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea that fibroids mean an operation; hidden fear of hysterectomy and losing the chance of a baby; wanted to know about surgery.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Repeat FBC at about 4 weeks; coeliac serology; pelvic examination at face-to-face review or in gynaecology.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Fibroid-related HMB with iron-deficiency anaemia; considered endometrial pathology and other causes of anaemia.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about IMB, PCB, pressure symptoms and cardiorespiratory symptoms of anaemia; noted normal endometrium.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Heavy menstrual bleeding due to fibroids with iron-deficiency anaemia, explained as benign.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Iron now; tranexamic acid ± NSAID compatible with conception; NG88 options ladder; gynaecology referral with fertility flagged.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Checked VTE and GI history before tranexamic acid and NSAIDs; knew ulipristal is restricted.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Iron side-effects; same-day help for chest pain, faintness or very heavy bleeding; IMB/PCB to report; call after repeat FBC.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Investigations & results"
   ],
   "stem": {
    "name": "Folake Adeyemi",
    "age": "43 years · female",
    "pmh": [
     "Heavy menstrual bleeding",
     "Para 2"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "Pelvic USS: several intramural fibroids, largest 4 cm; endometrium normal. ⚠ Hb 104 g/L, ferritin 8. Smear up to date.",
    "reason": "Telephone: results of scan and bloods."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Find out what she knows and wants. She asks: operation, or carry on coping?"
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Impact, cycle, IMB/PCB, pressure symptoms, anaemia symptoms, VTE and GI history."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "Surface the fear of hysterectomy and the possible baby with her partner."
    },
    {
     "t": "6–10",
     "h": "Results and options",
     "d": "Benign fibroids, normal lining. Treat anaemia. NG88 options matched to fertility. Gynaecology referral for fibroids of 4 cm."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Iron side-effects, same-day symptoms, IMB/PCB. FBC in 4 weeks. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Answers “do I need an operation?” with a referral for surgery; misses or ignores the anaemia; never learns about the possible pregnancy; suggests the coil without checking fertility plans.",
    "pass": "Explains fibroids are benign and the lining is normal; starts iron and rechecks; offers medical options before surgery; refers to gynaecology; safety-nets.",
    "exc": "All of the above, plus: surfaces the fertility fear and makes it the centre of the plan; chooses non-hormonal treatment compatible with conception; explains why the coil and ablation don’t fit if she wants a baby; flags fertility on the referral; teach-back."
   },
   "avoid": [
    {
     "dont": "“With fibroids that size, you’ll probably end up needing a hysterectomy.”",
     "instead": "“Hysterectomy is the last option and only ever your choice. There are treatments that keep the womb.”",
     "why": "Confirms the fear that kept her away for years and is not in line with NICE NG88."
    },
    {
     "dont": "“Let’s put in a Mirena coil.”",
     "instead": "“Are you thinking about a pregnancy? That changes which options suit you.”",
     "why": "A contraceptive first-line choice ignores her priority."
    },
    {
     "dont": "“Your blood count is a bit low — eat more red meat.”",
     "instead": "“You’re anaemic and your iron is very low. Let’s treat it today and recheck.”",
     "why": "Hb 104 with ferritin 8 needs active treatment and follow-up."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work",
     "t": "She plans work around heavy days and takes days off. Treating the bleeding and anaemia is likely to transform this."
    },
    {
     "h": "New relationship and fertility",
     "t": "A possible pregnancy with a new partner is her priority; it shapes every treatment choice."
    }
   ],
   "legal": [
    {
     "h": "Fit notes",
     "t": "Self-certification covers up to 7 days; a fit note can support phased return or adjusted duties if she needs time off."
    }
   ],
   "professional": [
    {
     "h": "Consent for surgery",
     "t": "Uterus-preserving options must be discussed before hysterectomy; it is her informed choice (GMC Decision making and consent, 2020)."
    },
    {
     "h": "Acting on results",
     "t": "A colleague requested the scan; make sure abnormal results (anaemia) are acted on, not just reported."
    }
   ],
   "community": [
    {
     "h": "Resources",
     "t": "Wellbeing of Women for information on heavy periods and fibroids; community pharmacy advice on taking iron."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Intermenstrual or post-coital bleeding, abnormal endometrium",
     "Pelvic or abdominal mass not obviously fibroids → suspected cancer pathway (NICE NG12 (updated April 2026))",
     "Symptomatic anaemia: chest pain, breathlessness at rest, syncope → same-day assessment"
    ],
    "psychosocial": [
     "Life planned around periods; days off work",
     "Possible pregnancy with a new partner",
     "Years of silent coping from fear of hysterectomy"
    ],
    "ice": [
     "Idea: fibroids mean an operation",
     "Concern: hysterectomy ending the chance of a baby",
     "Expectation: to know if surgery is needed"
    ]
   },
   "diagnosis": "“Your heavy periods are caused by fibroids, which are common and not cancer. The lining of your womb is normal. The bleeding has made you anaemic, which is why you’re so tired.”",
   "diagnosisLay": "“Fibroids are like knots in the muscle of the womb. They make periods heavier, but there are many ways to calm the bleeding without removing the womb.”",
   "management": {
    "reflectIce": "“You’ve coped for years because you thought treatment meant losing your womb. It doesn’t — and your wish for a baby will shape every choice.”",
    "psychosocial": "Choose options that fit a possible pregnancy and her work, and restore her control over the plan.",
    "sharedPlan": [
     "Oral iron daily (BSG 2021), FBC at about 4 weeks, coeliac serology",
     "Tranexamic acid ± NSAID on heavy days (doses per BNF) — non-hormonal, compatible with conception",
     "Gynaecology referral for fibroids of 4 cm, with fertility and uterus-preserving options flagged (NICE NG88)"
    ],
    "safetyNet": [
     "Chest pain, severe breathlessness, faintness or very heavy bleeding → same day",
     "New IMB or PCB → contact us; review after repeat FBC"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Menorrhagia protocol",
    "s": "NICE NG88 options",
    "href": "management/menorrhagia.html"
   },
   {
    "ic": "💠",
    "t": "Iron-deficiency anaemia protocol",
    "s": "Iron dosing · follow-up",
    "href": "management/iron-deficiency-anaemia.html"
   },
   {
    "ic": "📋",
    "t": "Anaemia",
    "s": "Case walkthrough · BSG 2021",
    "href": "../cases/anaemia.html"
   },
   {
    "ic": "🗺️",
    "t": "Vaginal bleeding pathway",
    "s": "Visual algorithm · red flags",
    "href": "algorithms/vaginal-bleeding.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by answering the question asked (“do I need an operation?”) instead of the one underneath it, and by missing the anaemia in the results.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Discussing fibroids and never mentioning the Hb of 104 and ferritin of 8.",
     "why": "“Fails to act on abnormal results.” Her exhaustion is the anaemia.",
     "fix": "Start iron today and book a repeat FBC."
    },
    {
     "dom": "tasks",
     "fail": "Jumping straight to a surgical referral, or to the hormone coil, without an options ladder.",
     "why": "NICE NG88 sets out pharmacological and uterus-preserving options; choice depends on her priorities.",
     "fix": "Lay out the ladder and match it to her wish for a baby."
    },
    {
     "dom": "tasks",
     "fail": "Offering endometrial ablation or a contraceptive option to a woman who may want to conceive.",
     "why": "Ablation is not for women wanting future pregnancy; LNG-IUS and CHC prevent conception.",
     "fix": "Tranexamic acid ± NSAID now; specialist discussion of myomectomy."
    },
    {
     "dom": "rto",
     "fail": "Missing “carry on coping” and the pause about the future.",
     "why": "“Does not respond to cues.” The fertility fear is why she stayed away.",
     "fix": "“Is part of that a worry about what treatment might mean?”"
    },
    {
     "dom": "gs",
     "fail": "Medical jargon — “intramural leiomyomata, ferritin, LNG-IUS”.",
     "why": "Language not easily understood by the patient, especially by telephone.",
     "fix": "“Knots in the womb muscle”, “your iron stores”, “the hormone coil”."
    },
    {
     "dom": "gs",
     "fail": "No safety-net for anaemia symptoms and no follow-up blood test.",
     "why": "Non-specific safety-netting is a standard failing statement.",
     "fix": "Name the same-day symptoms and book the repeat FBC with a call-back."
    }
   ]
  }
 },
 "hrt-unscheduled-bleed": {
  "stem": {
   "name": "Denise Wu",
   "age": "54-year-old woman",
   "pmh": [
    "Menopausal vasomotor symptoms (severe) — periods stopped 18 months before HRT started",
    "Smoker, 10 cigarettes a day",
    "BMI 29"
   ],
   "meds": [
    "Estradiol transdermal patch",
    "Micronised progesterone, taken continuously (continuous combined HRT, started 8 months ago)"
   ],
   "allergy": "No known drug allergies",
   "recent": "Cervical screening up to date and normal. No HRT review since starting.",
   "reason": "Telephone appointment: “the HRT’s made me bleed — I want to stop it”."
  },
  "knowledge": {
   "guideline": "NICE NG23 (updated April 2026) · NICE NG12 (updated April 2026) · BMS/RCOG/BGCS/BSGE/FSRH/RCGP joint guideline on unscheduled bleeding on HRT (2024) · MHRA Drug Safety Update (August 2019) · NICE NG209",
   "summary": "Bleeding on continuous combined HRT beyond the first 6 months, or new, prolonged or heavier bleeding, needs assessment. Stopping the HRT does not replace that assessment.",
   "points": [
    {
     "h": "Expected vs unscheduled bleeding",
     "t": "NICE NG23 (updated April 2026): bleeding is a common side effect in the first 6 months of systemic HRT, or within 3 months of changing dose or preparation; people should seek help promptly for unscheduled bleeding beyond these windows. She is at 8 months with 5 weeks of increasing bleeding."
    },
    {
     "h": "Which pathway",
     "t": "NICE NG12 (updated April 2026) endometrial criteria cover postmenopausal bleeding that cannot be attributed to HRT. Bleeding on HRT follows the joint BMS-led guideline (2024), which NICE NG12 (updated April 2026) signposts. She is 54 and on HRT, so assess via that route rather than labelling it a straightforward NICE NG12 (updated April 2026) referral."
    },
    {
     "h": "BMS 2024 thresholds",
     "t": "Prolonged or heavy bleeding (or 2 minor risk factors) → urgent transvaginal ultrasound within 6 weeks. A uniform endometrium of 4 mm or less on continuous combined HRT is low risk; above that, refer on the suspected cancer pathway for biopsy or hysteroscopy. One major or three minor risk factors (e.g. BMI 30–39, diabetes) → suspected cancer referral whatever the timing. Her BMI of 29 and smoking are not listed risk factors."
    },
    {
     "h": "Check the basics",
     "t": "Adherence (missed progesterone increases endometrial risk), patch use, drug interactions, the exact bleeding pattern, speculum examination and cervical screening status."
    },
    {
     "h": "Breast cancer risk, honestly",
     "t": "MHRA Drug Safety Update (August 2019): combined HRT increases breast cancer risk, the increase rises with duration of use and some excess risk persists for years after stopping. NICE NG23 (2024 evidence review) found insufficient evidence that micronised progesterone changes this risk. Present it as small in absolute terms and weigh it against her symptoms, using the NG23 decision aid."
    },
    {
     "h": "Smoking",
     "t": "NICE NG209: give very brief advice and offer referral to stop-smoking support with behavioural support and pharmacotherapy."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Wu, it’s Dr Lee returning your call. Can I just confirm your date of birth? Thanks. Tell me what’s been happening.",
    "dom": "gs",
    "why": "Telephone identity check, then open question"
   },
   {
    "who": "pt",
    "text": "The HRT’s disagreed with me. I’ve been bleeding again for over a month, and it’s getting heavier. I just want to come off it. Can you stop it for me?"
   },
   {
    "who": "dr",
    "text": "I can hear you’ve had enough of it. I’ll make sure we talk about stopping — that’s your choice. First I’d like to understand the bleeding, because that matters whatever we decide about the HRT. Is that okay?",
    "dom": "rto",
    "why": "Respects autonomy while separating the bleeding from the HRT decision"
   },
   {
    "who": "pt",
    "text": "Fine."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Which HRT are you on, how long, and how do you take it?",
    "dom": "tasks",
    "why": "Regimen and duration"
   },
   {
    "who": "pt",
    "text": "A patch, and progesterone capsules every day. Eight months now."
   },
   {
    "who": "dr",
    "text": "Have there been any days you’ve missed the capsules, or times the patch came off?",
    "dom": "tasks",
    "why": "Adherence — missed progestogen raises endometrial risk"
   },
   {
    "who": "pt",
    "text": "No, I’m good with them. Never missed."
   },
   {
    "who": "dr",
    "text": "Tell me about the bleeding itself — when it started, how heavy, and any pain, bleeding after sex, or unusual discharge?",
    "dom": "tasks",
    "why": "Exact pattern and associated features"
   },
   {
    "who": "pt",
    "text": "Five weeks ago. Spotting at first, now like a light period most days. No pain, nothing after sex, no discharge."
   },
   {
    "who": "dr",
    "text": "Before the HRT, how bad were the hot flushes and sweats?",
    "dom": "tasks",
    "why": "Establishes the symptom cost of stopping"
   },
   {
    "who": "pt",
    "text": "Awful. Drenched every night, no sleep, crying at work. The HRT gave me my life back, honestly."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "It sounds like it’s really helped. So I’m curious — is it only the bleeding that makes you want to stop, or is something else on your mind?",
    "dom": "rto",
    "why": "Explores the unspoken reason behind the request"
   },
   {
    "who": "pt",
    "text": "(Pause.) My friend’s just been diagnosed with breast cancer. She was on HRT. I keep thinking I’m giving myself cancer."
   },
   {
    "who": "dr",
    "text": "I’m so sorry about your friend. That’s frightening, and it makes sense it has changed how you feel. Can I ask — has the bleeding made you worry about anything else?",
    "dom": "rto",
    "why": "Validates the breast-cancer fear and gently checks for a second fear"
   },
   {
    "who": "pt",
    "text": "Womb cancer. I didn’t want to say it."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Thank you for telling me both. On the bleeding: some bleeding in the first six months of this HRT is common. Yours is at eight months and getting heavier, so national guidance says we check it properly rather than assume. That means an examination and an internal scan of the womb lining, which should happen within six weeks.",
    "dom": "tasks",
    "why": "Applies the NG23 window and the BMS 2024 urgent TVUS route"
   },
   {
    "who": "pt",
    "text": "So it might be cancer?"
   },
   {
    "who": "dr",
    "text": "The chance is low, and the scan is how we find out. If the lining is thin, that’s reassuring. If it’s thicker, you’d be seen urgently by the gynaecology team for a closer look. Stopping the HRT wouldn’t answer that question, so the scan happens either way.",
    "dom": "tasks",
    "why": "Honest about risk; explains why stopping HRT is not a substitute"
   },
   {
    "who": "pt",
    "text": "And the breast cancer?"
   },
   {
    "who": "dr",
    "text": "Honestly: combined HRT does slightly increase breast cancer risk, more the longer you take it. In absolute terms the increase is small. I can go through the actual figures with you using the national decision aid, and weigh them against what the hot flushes were doing to your life. Your friend’s illness is real, but it isn’t your risk.",
    "dom": "tasks",
    "why": "Proportionate breast-risk information without dismissing or overstating"
   },
   {
    "who": "pt",
    "text": "I didn’t know it was small. I thought it was a big risk."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "So, two separate things. The bleeding gets checked whatever you decide. The HRT decision is yours, made with the real numbers. You could carry on while we wait for the scan, or stop now if you’d rather — what feels right?",
    "dom": "rto",
    "why": "Shared decision with the investigation kept non-negotiable"
   },
   {
    "who": "pt",
    "text": "I think I’ll carry on until the scan. I can’t face the sweats again."
   },
   {
    "who": "dr",
    "text": "That sounds reasonable. I’ll book you in for an examination this week and request the scan. One more thing that genuinely lowers your risks: the cigarettes. Would you like help to stop? The stop-smoking service gives you support and medicines, which works much better than willpower alone.",
    "dom": "tasks",
    "why": "Examination and TVUS arranged; very brief advice on smoking (NICE NG209)"
   },
   {
    "who": "pt",
    "text": "Maybe. Send me the details."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If the bleeding becomes very heavy — soaking through pads hourly — or you get pain or feel faint, contact us the same day. Once we have the scan result, let’s speak again and decide the HRT together. What will you take away from today?",
    "dom": "gs",
    "why": "Specific safety-net, follow-up and teach-back"
   },
   {
    "who": "pt",
    "text": "The bleeding gets checked anyway. The breast risk is small and I can see the figures. I don’t have to decide today."
   },
   {
    "who": "dr",
    "text": "Exactly right. Anything else before we finish?",
    "dom": "rto",
    "why": "Shares the floor"
   },
   {
    "who": "pt",
    "text": "No. I feel much calmer. Thank you."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; acknowledged the request to stop without actioning it immediately.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Impact of vasomotor symptoms on sleep, mood and work; her friend’s diagnosis; smoking.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “just stop it” despite HRT transforming her life, and explored the reason.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea that HRT caused the bleeding; hidden fears of breast and womb cancer; expected HRT to be stopped.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Speculum examination; cervical screening status; urgent TVUS within 6 weeks per BMS 2024.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Endometrial hyperplasia or cancer vs benign HRT-related bleeding, polyp, adherence problem.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Adherence, pattern, pain, post-coital bleeding, discharge; recognised bleeding beyond the NG23 window.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Unscheduled bleeding on continuous combined HRT needing endometrial assessment.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Investigation regardless of the HRT decision; honest breast risk with the NG23 decision aid; her choice to continue.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Smoking cessation offered (NICE NG209); knew thickened endometrium → suspected cancer pathway.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Heavy bleeding, pain or faintness → same day; review with scan result to decide HRT.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Denise Wu",
    "age": "54 years · female",
    "pmh": [
     "Menopausal vasomotor symptoms",
     "Smoker 10/day",
     "BMI 29"
    ],
    "meds": [
     "Estradiol patch",
     "Micronised progesterone (continuous) — started 8 months ago"
    ],
    "allergy": "NKDA",
    "recent": "Cervical screening up to date, normal. ⚠ No HRT review since starting.",
    "reason": "Telephone: “the HRT’s made me bleed — can you stop it?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and hold",
     "d": "She asks you to stop the HRT. Acknowledge it, but separate the bleeding question first."
    },
    {
     "t": "1–4",
     "h": "Bleeding and HRT history",
     "d": "Regimen, duration, adherence, pattern, pain, post-coital bleeding, discharge, symptom burden before HRT."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "Why stop? The friend’s breast cancer — and the unspoken womb-cancer fear."
    },
    {
     "t": "6–10",
     "h": "Explain and share",
     "d": "Beyond the 6-month window → examination and urgent TVUS. Honest breast risk. Her choice on HRT."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Heavy bleeding or pain → same day. Smoking support. Review with the scan result. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Stops the HRT as requested and considers the bleeding solved; or calls it normal HRT spotting; never learns about the friend; no examination or scan; no safety-net.",
    "pass": "Recognises bleeding beyond the settling window needs assessment; arranges examination and TVUS; discovers the breast-cancer fear and gives a balanced answer; lets her decide on HRT.",
    "exc": "All of the above, plus: separates the mandatory investigation from the shared HRT decision; checks adherence; explains the thin-lining threshold and what happens if thicker; offers the NG23 decision aid; addresses smoking; teach-back."
   },
   "avoid": [
    {
     "dont": "“No problem, stop the HRT and the bleeding should settle.”",
     "instead": "“Stopping won’t answer the question the bleeding is asking. The scan happens either way.”",
     "why": "Stopping HRT is not an investigation and returns her to severe symptoms."
    },
    {
     "dont": "“Breakthrough bleeding is normal on HRT.”",
     "instead": "“In the first six months it’s common. At eight months and getting heavier, we check it.”",
     "why": "NICE NG23 (updated April 2026) sets the 6-month window; beyond it, bleeding needs assessment."
    },
    {
     "dont": "“The breast cancer risk is tiny, don’t worry about it.”",
     "instead": "“It does rise slightly, more the longer you take it. Let me show you the real figures.”",
     "why": "Dismissing the risk undermines informed choice; overstating it takes away effective treatment."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work and wellbeing",
     "t": "Before HRT, symptoms affected sleep, mood and work. Stopping has real costs that she should weigh."
    },
    {
     "h": "A friend’s diagnosis",
     "t": "A close friend’s cancer is a common trigger for stopping HRT. Name it, and separate her risk from her friend’s."
    }
   ],
   "legal": [
    {
     "h": "Informed choice",
     "t": "She may stop HRT at any time. Make sure she decides with accurate risk information and document the discussion (GMC Decision making and consent, 2020)."
    }
   ],
   "professional": [
    {
     "h": "Separate investigation from treatment choice",
     "t": "Endometrial assessment is a safety step; the HRT decision is shared. Keep the two apart explicitly."
    },
    {
     "h": "Safety-netting investigations",
     "t": "Make sure the scan happens within the 6-week window and the result is acted on."
    }
   ],
   "community": [
    {
     "h": "Resources",
     "t": "NICE NG23 patient decision aid on HRT risks and benefits; Women’s Health Concern (the BMS patient arm); local stop-smoking service."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Unscheduled bleeding beyond 6 months of HRT, or within 3 months of a change, persisting (NICE NG23, updated April 2026)",
     "Prolonged or heavy bleeding → urgent TVUS within 6 weeks; endometrium above 4 mm on ccHRT → suspected cancer pathway (BMS 2024)",
     "Missed progestogen, post-coital bleeding, discharge, pelvic pain"
    ],
    "psychosocial": [
     "Severe vasomotor symptoms before HRT: sleep, mood, work",
     "Friend’s recent breast cancer",
     "Smoking"
    ],
    "ice": [
     "Idea: HRT caused the bleeding; stopping will fix it",
     "Concern: HRT causing breast cancer; the bleeding meaning womb cancer",
     "Expectation: for the GP to stop the HRT"
    ]
   },
   "diagnosis": "“This is unscheduled bleeding on HRT. At eight months and getting heavier, it needs an examination and a scan of the womb lining. Most of the time the result is reassuring.”",
   "diagnosisLay": "“Think of the scan as measuring the thickness of a carpet. If it’s thin, that’s reassuring. If it’s thicker, a specialist takes a closer look.”",
   "management": {
    "reflectIce": "“Your friend’s illness has understandably made you frightened of the HRT. Let’s look at your real risk, not the worst case.”",
    "psychosocial": "Weigh her severe pre-HRT symptoms against a small absolute breast risk; she decides.",
    "sharedPlan": [
     "Speculum examination and cervical screening check this week",
     "Urgent TVUS within 6 weeks; suspected cancer pathway if endometrium above 4 mm (BMS 2024)",
     "HRT decision shared, using the NICE NG23 decision aid; smoking cessation offered (NICE NG209)"
    ],
    "safetyNet": [
     "Very heavy bleeding, pain or faintness → same-day contact",
     "Review after the scan to decide on HRT together"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Bleeding on HRT",
    "s": "Visual algorithm · BMS 2024 thresholds",
    "href": "algorithms/bleeding-on-hrt.html"
   },
   {
    "ic": "💠",
    "t": "HRT prescribing",
    "s": "Regimens · risks · NICE NG23",
    "href": "management/hrt-prescribing.html"
   },
   {
    "ic": "📋",
    "t": "Menopause",
    "s": "Case walkthrough · NICE NG23",
    "href": "../cases/menopause.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by doing what the patient asks. Stopping HRT feels patient-centred but leaves the bleeding uninvestigated and the real fear untouched.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Stopping the HRT and arranging no assessment.",
     "why": "“Management plan not in line with current UK best practice.” Bleeding beyond the NG23 window needs examination and endometrial assessment.",
     "fix": "“The scan happens whatever you decide about the HRT.”"
    },
    {
     "dom": "tasks",
     "fail": "Calling it “normal breakthrough bleeding” at 8 months.",
     "why": "The expected window is the first 6 months, or 3 months after a change (NICE NG23, updated April 2026).",
     "fix": "Name the window and explain why hers is outside it."
    },
    {
     "dom": "tasks",
     "fail": "Labelling it a NICE NG12 (updated April 2026) suspected cancer pathway referral without thinking about the HRT, or not knowing the thickness threshold.",
     "why": "NICE NG12 (updated April 2026) endometrial criteria cover bleeding not attributable to HRT; bleeding on HRT follows the BMS 2024 route.",
     "fix": "Urgent TVUS within 6 weeks; above 4 mm on ccHRT → suspected cancer pathway."
    },
    {
     "dom": "rto",
     "fail": "Never asking why she really wants to stop.",
     "why": "“Does not explore the patient’s health beliefs.” The friend’s breast cancer is the driver.",
     "fix": "“Is it only the bleeding, or is something else on your mind?”"
    },
    {
     "dom": "rto",
     "fail": "Dismissing or overstating the breast-cancer risk.",
     "why": "Both remove informed choice.",
     "fix": "Small absolute increase, rising with duration; offer the NG23 decision aid."
    },
    {
     "dom": "gs",
     "fail": "No follow-up plan linking the scan result to the HRT decision.",
     "why": "An incomplete plan is a common failing feedback statement.",
     "fix": "“Once we have the scan, we’ll speak again and decide together.”"
    }
   ]
  }
 },
 "limping-child": {
  "stem": {
   "name": "Finn",
   "age": "5-year-old boy",
   "pmh": [
    "No significant past medical history recorded",
    "Coryzal illness last week (parent-reported)"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Mother requested a same-day video call this morning: woke limping, now refusing to walk on the right leg. Feels “a bit warm” to her; temperature not measured. No injury witnessed. No rash reported.",
   "reason": "Mother calling for advice. She hopes it is a sprain or growing pains that can be managed at home."
  },
  "knowledge": {
   "guideline": "BOAST: Management of children with acute musculoskeletal infection (BOA/BSCOS, 2022) · NICE NG12 (updated April 2026) · NICE CG89 (updated December 2025) · NICE NG254",
   "summary": "A child who suddenly refuses to bear weight has a serious cause until proven otherwise. With possible fever, septic arthritis or osteomyelitis must be excluded the same day; transient synovitis is a diagnosis made only after that.",
   "points": [
    {
     "h": "Refusal to bear weight is a red flag",
     "t": "An acute limp or refusal to weight-bear needs examination in person the same day. Growing pains do not cause a limp or daytime refusal to walk, so they are never a safe label for this story."
    },
    {
     "h": "Septic arthritis and osteomyelitis first",
     "t": "BOAST 2022: children with suspected acute bone or joint infection are managed in hospital by orthopaedic and paediatric teams, with FBC, CRP, ESR and blood cultures, plain X-ray and then MRI as needed. Delay risks permanent joint damage. Consider sepsis in any unwell febrile child (NICE NG254, under 16s)."
    },
    {
     "h": "Kocher criteria (teaching aid)",
     "t": "Kocher et al. 1999 (hospital-derived): fever above 38.5 °C, non-weight-bearing, ESR above 40 mm/h and WCC above 12 × 10⁹/L each raise the probability of septic arthritis of the hip. Two of the four can be judged on history; the other two need a blood test, which is why the assessment cannot happen at home."
    },
    {
     "h": "Age-based differential",
     "t": "At 5: transient synovitis (often after a viral illness), septic arthritis, osteomyelitis, Perthes disease, fracture or soft-tissue injury, reactive or juvenile idiopathic arthritis, malignancy and non-accidental injury. Slipped upper femoral epiphysis belongs to the older, heavier child."
    },
    {
     "h": "Malignancy",
     "t": "NICE NG12 (updated April 2026): unexplained petechiae or hepatosplenomegaly — immediate specialist assessment for leukaemia. Pallor, persistent fatigue, unexplained fever, persistent infections, generalised lymphadenopathy, persistent or unexplained bone pain, unexplained bruising or bleeding — very urgent FBC (within 48 hours). Unexplained bone swelling or pain — consider a very urgent direct-access X-ray (within 48 hours) for bone sarcoma."
    },
    {
     "h": "Safeguarding",
     "t": "NICE CG89: consider maltreatment when an injury or limp has no adequate explanation or the account is inconsistent. Ask about the mechanism routinely and neutrally, and look for bruising when he is examined."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Lee. Thanks for calling so quickly. Is Finn with you? I’d like to hear the story from the start, and then I might ask you to show him to me on the camera.",
    "dom": "rto",
    "why": "Warm open question and signposts the use of video"
   },
   {
    "who": "pt",
    "text": "He’s on the sofa. He woke up limping and now he won’t walk on his right leg at all — he just wants carrying. He had a cold last week. I’m hoping it’s growing pains or he’s twisted it. Can you just tell me what to do for a sprain? I don’t want to drag him to A&E for nothing."
   },
   {
    "who": "dr",
    "text": "I can hear you’d really like to sort this at home, and I’ll keep that in mind. Let me ask a few questions and have a look, then I’ll be straight with you about what I think and we’ll plan it together. Is that okay?",
    "dom": "gs",
    "why": "Acknowledges her wish without agreeing to it and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Yeah, go on."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When he woke up, could he put any weight through the leg at all, or none?",
    "dom": "tasks",
    "why": "Separates refusal to weight-bear from a mild limp"
   },
   {
    "who": "pt",
    "text": "None. He tried to stand and cried and sat straight back down."
   },
   {
    "who": "dr",
    "text": "You said he feels a bit warm. This is the most important question today: do you have a thermometer? Could you take his temperature now while I wait?",
    "dom": "tasks",
    "why": "Closes the critical data gap — is he febrile?"
   },
   {
    "who": "pt",
    "text": "Hang on… (pause) It says he’s got a temperature. I hadn’t checked before."
   },
   {
    "who": "dr",
    "text": "Thank you, that really helps. Is he himself otherwise — eating, drinking, chatty? Any rash, bruises you can’t explain, or has he looked pale or more tired than usual lately?",
    "dom": "tasks",
    "why": "Screens for systemic illness and NICE NG12 (updated April 2026) malignancy features"
   },
   {
    "who": "pt",
    "text": "He had some breakfast. A bit quieter than normal. No rash. No bruises that I’ve seen."
   },
   {
    "who": "dr",
    "text": "Any fall, knock or rough play in the last few days — at home, school or with anyone else looking after him?",
    "dom": "tasks",
    "why": "Asks about mechanism routinely and neutrally (NAI screen)"
   },
   {
    "who": "pt",
    "text": "Nothing I know of. He was fine at bedtime."
   },
   {
    "who": "dr",
    "text": "Could you lie him down and turn the camera to his legs? Let me see if the leg looks swollen or red, and whether he’ll let you move the hip and knee gently. Stop if it hurts him.",
    "dom": "tasks",
    "why": "Uses video to observe, without treating it as an examination"
   },
   {
    "who": "pt",
    "text": "He’s holding it bent and turned out a bit. He screams if I try to straighten it."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said you don’t want to drag him to A&E. Can I ask what makes going in so hard today?",
    "dom": "rto",
    "why": "Follows the cue to the hidden practical barrier"
   },
   {
    "who": "pt",
    "text": "It’s just me. I’ve got his little brother or sister here, no car, and I’m meant to be at work. Last time I sat in A&E for hours and they said it was nothing. I felt stupid."
   },
   {
    "who": "dr",
    "text": "That’s a lot to juggle on your own, and I’m sorry the last trip left you feeling that way. You’re not being difficult — these are real problems, and solving them is part of my job today.",
    "dom": "rto",
    "why": "Validates without judgement and makes the barriers part of the plan"
   },
   {
    "who": "pt",
    "text": "I just thought if it’s a sprain…"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’ll be honest with you. Growing pains never stop a child walking, and there’s no injury to explain a sprain. A child who won’t put any weight on a leg, and has a temperature, needs to be examined and have a blood test today — because we have to rule out an infection in the hip joint or bone.",
    "dom": "tasks",
    "why": "Rejects the unsafe label and names septic arthritis in plain words"
   },
   {
    "who": "pt",
    "text": "An infection in the joint? From a cold?"
   },
   {
    "who": "dr",
    "text": "Most likely this is an irritable hip after his cold, which settles by itself. But a joint infection looks the same at first, and it can damage the joint quickly if it’s missed. The only safe way to tell them apart is an examination, bloods and possibly a scan. I can’t do that over video, and neither of us should guess.",
    "dom": "tasks",
    "why": "Shares the differential honestly and explains why it must be same day"
   },
   {
    "who": "pt",
    "text": "Okay. When you put it like that."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what I suggest. I’ll phone the children’s team at the hospital now and ask them to expect him, so you go straight to them rather than sitting in the main waiting room. Now the practical side — is there anyone who could have the little one, or drive you?",
    "dom": "rto",
    "why": "Problem-solves the barriers inside the clinical plan"
   },
   {
    "who": "pt",
    "text": "My neighbour might. Or I could get a taxi and take them both."
   },
   {
    "who": "dr",
    "text": "Either is fine — a taxi with both children is completely okay. If you truly can’t get there, ring me back straight away and we’ll arrange transport, because getting there is not optional today. And for work, you are entitled to time off to deal with an emergency involving your child.",
    "dom": "gs",
    "why": "Makes attendance certain and gives a fallback route"
   },
   {
    "who": "pt",
    "text": "Right. I didn’t know that about work."
   },
   {
    "who": "dr",
    "text": "Carry him, don’t let him walk on it, and you can give him paracetamol for comfort — the usual dose for his age on the bottle.",
    "dom": "tasks",
    "why": "Practical interim advice while awaiting assessment"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If before you get there he becomes floppy, very sleepy, breathing fast, or you see a rash that doesn’t fade when you press a glass on it — ring 999. I’ll ring the hospital now, and I’ll call you this afternoon to check he’s been seen.",
    "dom": "gs",
    "why": "Specific 999 triggers and a named follow-up call"
   },
   {
    "who": "pt",
    "text": "Okay. Thank you. I feel bad I nearly didn’t bother."
   },
   {
    "who": "dr",
    "text": "You did bother — you rang, and you’re doing right by him. Just so I know it’s clear: what’s the plan from here?",
    "dom": "rto",
    "why": "Removes guilt and checks understanding with teach-back"
   },
   {
    "who": "pt",
    "text": "Neighbour or taxi, go straight to the children’s unit, carry him, Calpol. 999 if he goes floppy or gets a rash. You’ll ring me later."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question first; let her tell the story; heard “won’t walk on it at all” and “I don’t want A&E” without cutting in.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Single parent, younger sibling, no car, work, previous long A&E wait — the practical reasons she is steering to home care.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “a bit warm” and “drag him to A&E”, got the temperature measured and explored the barrier.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (sprain or growing pains), concern (getting there, feeling foolish again), expectation (home sprain advice).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Video used only to observe; in-person examination the same day with FBC, CRP, ESR, blood cultures and imaging in hospital (BOAST 2022).",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Septic arthritis or osteomyelitis vs transient synovitis vs Perthes, injury, reactive arthritis, malignancy and NAI.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Established fever and complete refusal to bear weight; asked about systemic illness, pallor, bruising, rash and mechanism.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated clearly: acute non-weight-bearing with fever — joint or bone infection must be excluded today; transient synovitis only after that.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "GP phones the paediatric team for same-day assessment; transport and childcare solved with her; interim analgesia.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Right to time off for dependants raised; sibling care planned; the previous poor A&E experience addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 triggers named (floppy, drowsy, fast breathing, non-blanching rash); GP call later the same day to confirm he was seen.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Urgent & unscheduled care",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Finn",
    "age": "5 years · male",
    "pmh": [
     "Nil significant",
     "Coryzal illness last week (parent report)"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Same-day video request: woke limping, now refusing to weight-bear on the right leg. “Feels a bit warm” — temperature not taken. No injury witnessed.",
    "reason": "Mother calling. “Can you just tell me what to do for a sprain?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "She opens with the sprain request and “I don’t want to drag him to A&E”. Let her finish; both halves matter."
    },
    {
     "t": "1–4",
     "h": "Focused history and video look",
     "d": "Any weight at all? Get the temperature taken now. Systemic features, pallor, bruising, rash, mechanism. Observe the leg on camera without calling it an examination."
    },
    {
     "t": "4–6",
     "h": "ICE and the barrier",
     "d": "Why A&E feels impossible: single parent, sibling, no car, work, last wasted trip. Validate before explaining."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Growing pains never stop a child walking. Fever plus refusal to weight-bear means excluding joint infection today. Phone the paediatric team; solve transport and childcare with her."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 triggers, interim analgesia, GP call later today. Teach-back of the plan."
    }
   ],
   "wordPics": {
    "fail": "Gives sprain advice or accepts “growing pains”; never finds out whether he is febrile; treats the video view as an examination; lectures or judges her about A&E; no same-day assessment and no safety-net.",
    "pass": "Recognises non-weight-bearing as a red flag; gets the temperature measured; names septic arthritis and arranges same-day assessment; asks about injury; gives basic safety-netting.",
    "exc": "All of the above, plus: draws out the single-parent, transport and childcare barriers and solves them inside the plan; phones ahead so she is expected; lifts the embarrassment about the last visit; screens for malignancy and NAI neutrally; confirms attendance with a same-day call and teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s probably just growing pains — rest, ice and Calpol, and see how he is tomorrow.”",
     "instead": "“Growing pains never stop a child walking. He needs to be examined today.”",
     "why": "A home label for a febrile child who will not weight-bear is the classic unsafe Tasks fail."
    },
    {
     "dont": "“You really need to take him to A&E — it’s your responsibility.”",
     "instead": "“Getting there sounds hard today. Tell me what’s in the way, and let’s sort it together.”",
     "why": "Judgement loses her; problem-solving gets Finn seen and earns Relating marks."
    },
    {
     "dont": "“From what I can see on the video, the hip looks fine.”",
     "instead": "“The video helps me see how he’s holding it, but I can’t examine a hip over a camera.”",
     "why": "Presenting video observation as an examination is false reassurance."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Single parent, no transport",
     "t": "No car, a younger sibling at home and work commitments are real barriers, not neglect. Plan childcare, transport and a direct route to the children’s team as part of the clinical management."
    },
    {
     "h": "Previous poor experience",
     "t": "A long wait that ended in “it’s nothing” makes parents reluctant to return. Phoning ahead so the child is expected, and saying why today is different, rebuilds trust."
    }
   ],
   "legal": [
    {
     "h": "Time off for dependants",
     "t": "Employees have a statutory right to reasonable unpaid time off to deal with an emergency involving a dependant (Employment Rights Act 1996, s57A). Telling her this can remove a barrier to attending."
    },
    {
     "h": "Safeguarding awareness",
     "t": "NICE CG89 (updated December 2025): consider maltreatment where an injury or limp lacks an adequate explanation. Asking about mechanism is routine; no concern arises from this history as given, but the examining team should look for bruising."
    }
   ],
   "professional": [
    {
     "h": "Limits of remote consulting",
     "t": "GMC Good Medical Practice 2024 expects doctors to recognise the limits of their competence and of the consultation format. A child who will not weight-bear cannot be examined over video, so face-to-face assessment is needed."
    },
    {
     "h": "Handover and follow-up",
     "t": "Phone the paediatric team with the history, document the advice and the barriers discussed, and check the same day that the child was seen."
    }
   ],
   "community": [
    {
     "h": "Practical support",
     "t": "Neighbours, family or friends for sibling care; a taxi is appropriate for a child who must be carried. Health visitor or school nurse links can support a single parent afterwards."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Complete refusal to weight-bear, especially with fever — septic arthritis or osteomyelitis until excluded, same-day assessment",
     "Systemic features: lethargy, pallor, bruising, petechiae, night pain, weight loss — NICE NG12 (updated April 2026) leukaemia and bone sarcoma criteria",
     "No adequate explanation for the limp or an inconsistent account — consider NAI (NICE CG89)"
    ],
    "psychosocial": [
     "Single parent with a younger child, no car and work to get to",
     "A previous long A&E wait that left her feeling foolish",
     "Who can help today: neighbour, family, friend, taxi"
    ],
    "ice": [
     "Idea: “It’s growing pains or he’s twisted it playing.”",
     "Concern: getting to hospital with no car and a sibling, and wasting everyone’s time again",
     "Expectation: sprain advice so she can manage at home"
    ]
   },
   "diagnosis": "Acute refusal to weight-bear on the right leg in a febrile 5-year-old after a viral illness: septic arthritis of the hip or osteomyelitis must be excluded the same day. Transient synovitis is the most likely outcome but is a diagnosis of exclusion.",
   "diagnosisLay": "“Finn’s hip or leg is inflamed. Most of the time after a cold that’s a harmless irritable hip that settles. But an infection in the joint can look exactly the same at first and needs treating fast, so he needs checking and a blood test today to tell them apart.”",
   "management": {
    "reflectIce": "“You were hoping for sprain advice because getting to hospital today feels impossible on your own. Let’s solve that together, because he does need to be seen today.”",
    "psychosocial": "Phone ahead to the paediatric team so she goes straight there; agree who has the sibling or take both by taxi; mention time off for dependants; offer transport help if there is no other route.",
    "sharedPlan": [
     "Same-day paediatric assessment: examination, FBC, CRP, ESR, blood cultures and imaging (BOAST 2022)",
     "Carry him, no weight-bearing, paracetamol for comfort (dose per BNFC)",
     "Transport and childcare agreed before the call ends"
    ],
    "safetyNet": [
     "999 if floppy, drowsy, breathing fast or a non-blanching rash appears",
     "GP rings later today to confirm he was seen; review after discharge if transient synovitis is diagnosed and it does not settle"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Childhood limp",
    "s": "Case walkthrough · BOAST 2022 · NICE NG12 (updated April 2026)",
    "href": "../cases/childhood-limp.html"
   },
   {
    "ic": "🗺️",
    "t": "Limping child pathway",
    "s": "Visual algorithm · red flags by age",
    "href": "algorithms/limping-children.html"
   },
   {
    "ic": "🗺️",
    "t": "Fever in children",
    "s": "Visual algorithm · sepsis and serious infection",
    "href": "algorithms/fever-children.html"
   },
   {
    "ic": "📋",
    "t": "Safeguarding",
    "s": "Case walkthrough · NICE CG89",
    "href": "../cases/safeguarding.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed in two opposite ways: colluding with a home label because the parent asked for one, or ordering her to A&E without hearing why she can’t get there. The marks sit in finding the fever and then getting Finn seen.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Giving sprain or growing-pains advice with review tomorrow.",
     "why": "“Management plan not in line with current UK best practice.” Refusal to weight-bear with possible fever needs same-day assessment (BOAST 2022).",
     "fix": "Say it plainly: “Growing pains never stop a child walking — he needs checking today.”"
    },
    {
     "dom": "tasks",
     "fail": "Accepting “he feels a bit warm” and moving on.",
     "why": "“Does not gather sufficient information to make a safe assessment.” Fever is the single fact that changes the urgency.",
     "fix": "Ask her to take his temperature while you wait, and say why it matters."
    },
    {
     "dom": "tasks",
     "fail": "Treating the video view as an examination and reassuring on what the camera shows.",
     "why": "Hip range of movement, tenderness and bruising cannot be assessed remotely; false reassurance is unsafe.",
     "fix": "Use the camera to observe posture and willingness to move, then say clearly that he needs to be examined in person."
    },
    {
     "dom": "rto",
     "fail": "Telling her she must go to A&E and ending the call.",
     "why": "“Does not identify or respond to the patient’s cues.” Her barrier is practical; without solving it, Finn may not arrive.",
     "fix": "“What makes going in hard today?” — then plan childcare, transport and a direct route with her."
    },
    {
     "dom": "rto",
     "fail": "Asking about injuries in a way that sounds accusing, or skipping the question entirely.",
     "why": "Either loses her trust or misses NAI. The question must be routine and neutral.",
     "fix": "“Any fall, knock or rough play in the last few days, at home, school or with anyone else?”"
    },
    {
     "dom": "gs",
     "fail": "“Come back if he gets worse” with no named symptoms and no check that he was seen.",
     "why": "Non-specific safety-netting and no follow-up are standard failing feedback statements.",
     "fix": "Name the 999 triggers, phone ahead, and promise a call later today to confirm he was assessed."
    }
   ]
  }
 },
 "pmb-endometrial": {
  "stem": {
   "name": "Carol Easton",
   "age": "61-year-old woman",
   "pmh": [
    "Type 2 diabetes",
    "Hypertension",
    "BMI 33",
    "Menopause at 51 — never used HRT"
   ],
   "meds": [
    "Metformin",
    "Ramipril",
    "Atorvastatin"
   ],
   "allergy": "No known drug allergies",
   "recent": "Retired teacher. No gynaecological consultations on record since the menopause.",
   "reason": "Booked a video appointment: “a tiny bit of bleeding, probably nothing”."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · NHS Cervical Screening Programme",
   "summary": "Unexplained postmenopausal bleeding at 55 or over, not attributable to HRT, is a suspected cancer pathway referral for endometrial cancer. One episode is enough.",
   "points": [
    {
     "h": "The NICE NG12 (updated April 2026) criterion",
     "t": "NICE NG12 (updated April 2026): refer using a suspected cancer pathway referral for endometrial cancer if aged 55 and over with unexplained postmenopausal bleeding that cannot be attributed to HRT. Under 55: consider a suspected cancer pathway referral. She is 61 and has never used HRT, so she meets the “refer” criterion."
    },
    {
     "h": "One episode counts",
     "t": "Postmenopausal bleeding is bleeding 12 months or more after the last period. Light, single or self-limiting episodes still need referral; attributing it to dryness without assessment is unsafe."
    },
    {
     "h": "Risk factors",
     "t": "Obesity, type 2 diabetes, nulliparity, unopposed oestrogen, tamoxifen and a family history suggestive of Lynch syndrome raise endometrial cancer risk. They add weight to the referral; their absence would not remove it."
    },
    {
     "h": "What the pathway involves",
     "t": "Most gynaecology suspected cancer services start with transvaginal ultrasound of the endometrial thickness, then endometrial biopsy or hysteroscopy if needed. Explain this so she knows what to expect."
    },
    {
     "h": "Examine, but don’t delay",
     "t": "Abdominal and speculum examination looks for a local cause (atrophy, polyp, cervical lesion) and needs a face-to-face appointment. Check her cervical screening history (the programme invites to age 64). Examination should not hold up the referral."
    },
    {
     "h": "Balance the message",
     "t": "Most postmenopausal bleeding has a benign cause such as atrophy. The referral is how cancer is excluded quickly; it is not a diagnosis. Say both."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Easton, I’m Dr Lee. Thanks for joining the video. Tell me what’s been happening.",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "I feel silly even booking. A tiny bit of bleeding when I wiped, just once, and it’s stopped. Probably dryness. Can you just reassure me it’s nothing? I don’t want a load of tests at my age."
   },
   {
    "who": "dr",
    "text": "I’m really glad you didn’t cancel — it isn’t silly at all. I’d like to ask a few questions, then explain what I think and what we should do. Is that alright?",
    "dom": "gs",
    "why": "Validates attending and sets an agenda without colluding"
   },
   {
    "who": "pt",
    "text": "Alright."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When did your periods stop, and have you ever taken HRT?",
    "dom": "tasks",
    "why": "Confirms postmenopausal status and excludes HRT as a cause"
   },
   {
    "who": "pt",
    "text": "At 51, ten years ago. Never had HRT."
   },
   {
    "who": "dr",
    "text": "Tell me about the bleeding — colour, amount, and whether there’s been anything else, like discharge, in recent weeks?",
    "dom": "tasks",
    "why": "Characterises the bleed and asks about associated discharge"
   },
   {
    "who": "pt",
    "text": "Fresh red, on the paper, two days ago. Now you mention it, a bit of watery pinkish discharge the last few weeks. I ignored it."
   },
   {
    "who": "dr",
    "text": "That’s helpful. Any pain, weight loss, bleeding after sex, or blood in your urine or from your back passage?",
    "dom": "tasks",
    "why": "Screens for other sources and systemic features"
   },
   {
    "who": "pt",
    "text": "No, none of that."
   },
   {
    "who": "dr",
    "text": "Have you had children? And any family history of womb, ovary or bowel cancer?",
    "dom": "tasks",
    "why": "Nulliparity and family history as risk factors"
   },
   {
    "who": "pt",
    "text": "No children. Mum had “womb trouble” — nobody said exactly what."
   },
   {
    "who": "dr",
    "text": "When did you last have a smear test?",
    "dom": "tasks",
    "why": "Cervical screening status"
   },
   {
    "who": "pt",
    "text": "I’d have to check. I had a horrible one years ago and I dread them."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You mentioned your mum, and “at my age”. I wondered whether something more worrying has crossed your mind?",
    "dom": "rto",
    "why": "Picks up the cues and gently surfaces the unspoken fear"
   },
   {
    "who": "pt",
    "text": "(Quiet.) Cancer. Like Mum. I suppose that’s why I keep saying it’s nothing."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That fear makes complete sense, and it explains why you’ve been hoping I’d say it’s nothing. And the smear — was that part of why you booked a video appointment?",
    "dom": "rto",
    "why": "Validates the fear and names the examination dread"
   },
   {
    "who": "pt",
    "text": "Yes. I dread being examined."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I want to be honest with you. Any bleeding after the menopause needs checking, even once, ten years on. National guidance says that for a woman over 55 who isn’t on HRT, we refer urgently to the gynaecology team to check the lining of the womb.",
    "dom": "tasks",
    "why": "States the NICE NG12 (updated April 2026) criterion and action"
   },
   {
    "who": "pt",
    "text": "So you do think it’s cancer."
   },
   {
    "who": "dr",
    "text": "No. Most bleeding like this turns out to be harmless — often thinning of the tissues after the menopause. The urgent referral isn’t a diagnosis; it’s how we make sure quickly. Some things like weight and diabetes do make checking more important, which is another reason not to wait.",
    "dom": "rto",
    "why": "Balances honesty with reassurance; links risk factors without alarm"
   },
   {
    "who": "pt",
    "text": "What will they do?"
   },
   {
    "who": "dr",
    "text": "Usually an internal ultrasound scan to measure the womb lining, and sometimes a small sample or a look inside with a thin camera. They’ll explain each step.",
    "dom": "tasks",
    "why": "Explains the pathway so she knows what to expect"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I also need to examine you in person, to look for a simple cause like dryness or a polyp. I heard how hard the last one was. You’d be in control: a chaperone, a smaller speculum, and we stop the moment you say. Would that make it manageable?",
    "dom": "rto",
    "why": "Accommodates the examination dread with choice and control"
   },
   {
    "who": "pt",
    "text": "If I can stop it… yes. I’ll come in."
   },
   {
    "who": "dr",
    "text": "Thank you. I’ll make the urgent referral today, so the examination won’t hold anything up. We can check your smear history at the same visit.",
    "dom": "tasks",
    "why": "Referral not delayed for examination; screening addressed"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "The hospital should contact you soon — if you haven’t heard within a week, ring us. If you get heavy bleeding, pain or feel unwell before then, contact us the same day. I’ll look out for the result and we’ll go through it together. What will you tell yourself tonight when the worry comes?",
    "dom": "gs",
    "why": "Specific safety-net, tracking of referral, follow-up and teach-back"
   },
   {
    "who": "pt",
    "text": "That it needs checking quickly, and most of the time it’s nothing bad. And I’m not doing it alone."
   },
   {
    "who": "dr",
    "text": "That’s exactly right. Anything else before we finish?",
    "dom": "rto",
    "why": "Shares the floor"
   },
   {
    "who": "pt",
    "text": "No. Thank you for being straight with me."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; did not accept “probably nothing”; established postmenopausal status and no HRT.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Her mother’s history, living with diabetes and weight, dread of examination after a bad smear.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “at my age”, “Mum’s womb trouble” and the video booking, and explored them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea of dryness; the hidden fear of cancer and of examination; hoped for reassurance without tests.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Face-to-face abdominal and speculum examination with chaperone; cervical screening status; TVUS via the pathway.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Endometrial cancer vs atrophy, polyp, cervical lesion, other bleeding source.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Discharge, weight loss, pain, post-coital bleeding, haematuria and rectal bleeding asked; risk factors identified.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Unexplained postmenopausal bleeding needing exclusion of endometrial cancer, explained honestly.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Suspected cancer pathway referral per NICE NG12 (updated April 2026), made today and not delayed by examination.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Recognised obesity, diabetes and nulliparity as risk factors; checked cervical screening status.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "What to expect, chase if no contact, heavy bleeding or pain → same day, results reviewed together.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Carol Easton",
    "age": "61 years · female",
    "pmh": [
     "Type 2 diabetes",
     "Hypertension",
     "BMI 33"
    ],
    "meds": [
     "Metformin",
     "Ramipril",
     "Atorvastatin"
    ],
    "allergy": "NKDA",
    "recent": "Retired teacher. Menopause age 51. No HRT on record. ⚠ Cervical screening history not yet reviewed.",
    "reason": "Video appointment: “a tiny bit of bleeding, probably nothing”."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "She minimises and asks for reassurance. Thank her for coming; don’t agree it’s nothing."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Menopause age, HRT, the bleed, discharge, other sources, parity, family history, screening."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "Name the cancer fear behind the minimising and the dread of examination."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "NICE NG12 (updated April 2026) referral today; what the pathway involves; most causes benign; in-person examination with control."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Chase if no contact, heavy bleeding or pain, results together. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Agrees it is probably dryness and offers vaginal oestrogen or a watch-and-wait; no suspected cancer referral; or refers abruptly with “we need to rule out cancer” and no support; skips examination because she booked video.",
    "pass": "Recognises PMB at 61 off HRT as an NICE NG12 (updated April 2026) suspected cancer referral; makes it today; explains most causes are benign; arranges in-person examination; safety-nets.",
    "exc": "All of the above, plus: surfaces the cancer fear and the examination dread; offers choice, chaperone and control; checks screening history; explains the pathway steps; commits to reviewing the result with her; teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s probably just dryness — let’s see if it happens again.”",
     "instead": "“Any bleeding after the menopause is something we always check, even once.”",
     "why": "Waiting for recurrence is not in line with NICE NG12 (updated April 2026)."
    },
    {
     "dont": "“We need to rule out cancer, so I’m sending you to the cancer clinic.”",
     "instead": "“Most bleeding like this is harmless. The urgent referral is how we make sure quickly.”",
     "why": "Blunt framing frightens a patient already minimising out of fear, and risks non-attendance."
    },
    {
     "dont": "“You’ll need an internal examination — it only takes a minute.”",
     "instead": "“I heard how hard the last one was. You’re in control, with a chaperone, and we stop when you say.”",
     "why": "Brushing past the dread loses her agreement to be examined."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Fear-driven minimising",
     "t": "Her mother’s “womb trouble” makes cancer feel likely; downplaying it is how she copes. Name it gently."
    },
    {
     "h": "Avoided examinations",
     "t": "A bad smear years ago has left her dreading examination. A trauma-informed approach can keep her engaged."
    }
   ],
   "legal": [
    {
     "h": "Consent and choice",
     "t": "She has capacity and can decline referral or examination; if so, explain the risk, document the discussion and keep the door open (GMC Decision making and consent, 2020)."
    }
   ],
   "professional": [
    {
     "h": "Intimate examination",
     "t": "Explain why, offer a chaperone, gain consent, and stop on request (GMC guidance on intimate examinations and chaperones)."
    },
    {
     "h": "Safety-netting the referral",
     "t": "Track the suspected cancer referral and make sure she is seen; tell her who will contact her and what to do if they don’t."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "The Eve Appeal (gynaecological cancer charity) has information on postmenopausal bleeding and what tests involve."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Postmenopausal bleeding at 55 or over, not attributable to HRT: suspected cancer pathway referral (NICE NG12 (updated April 2026))",
     "Blood-stained or watery discharge, weight loss, pelvic pain",
     "Risk factors: obesity, type 2 diabetes, nulliparity, family history"
    ],
    "psychosocial": [
     "Mother’s “womb trouble” and fear of the same",
     "Dread of examination after a bad smear",
     "Living with diabetes and weight — without blame"
    ],
    "ice": [
     "Idea: dryness or a strain",
     "Concern: cancer, like her mother; being examined",
     "Expectation: reassurance by video and no tests"
    ]
   },
   "diagnosis": "“Bleeding after the menopause always needs checking. Most causes are harmless, but the way we make sure is an urgent referral to look at the lining of the womb.”",
   "diagnosisLay": "“It’s like a smoke alarm going off once. Usually it’s burnt toast, but you still check the house — quickly and properly.”",
   "management": {
    "reflectIce": "“You’ve been hoping I’d say it’s nothing because of what happened to your mum. I’d rather find out properly and fast, so you’re not lying awake guessing.”",
    "psychosocial": "Accommodate the examination dread with a chaperone, choice of speculum, and her control to stop.",
    "sharedPlan": [
     "Suspected cancer pathway referral for endometrial cancer today (NICE NG12 (updated April 2026))",
     "Face-to-face abdominal and speculum examination with chaperone, not delaying the referral",
     "Check cervical screening history and offer screening if due"
    ],
    "safetyNet": [
     "Heavy bleeding, pain or feeling unwell → same-day contact",
     "Ring if no hospital contact within a week; results reviewed together"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Vaginal bleeding pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026)",
    "href": "algorithms/vaginal-bleeding.html"
   },
   {
    "ic": "📋",
    "t": "Menopause",
    "s": "Case walkthrough · postmenopausal bleeding",
    "href": "../cases/menopause.html"
   },
   {
    "ic": "📋",
    "t": "Cervical screening",
    "s": "Case walkthrough · screening status",
    "href": "../cases/cervical-screening.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you hold a red flag against a patient who wants you to let it go. It is failed by collusion, by frightening her out of the pathway, or by skipping the examination.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting “probably dryness” and suggesting vaginal oestrogen or review if it recurs.",
     "why": "PMB at 61 off HRT meets the NICE NG12 (updated April 2026) referral criterion. A single episode counts.",
     "fix": "“Any bleeding after the menopause gets checked — I’m referring you urgently today.”"
    },
    {
     "dom": "tasks",
     "fail": "Delaying the referral until after an examination or blood tests.",
     "why": "Examination matters, but the referral should not wait for it.",
     "fix": "Refer today and book the in-person examination alongside."
    },
    {
     "dom": "rto",
     "fail": "Missing the cancer fear under “it’s nothing”.",
     "why": "“Does not identify the patient’s concerns.” Her minimising is fear, and unaddressed fear risks non-attendance.",
     "fix": "“You mentioned your mum — I wondered if cancer had crossed your mind?”"
    },
    {
     "dom": "rto",
     "fail": "Brushing past her dread of examination.",
     "why": "She booked video to avoid it. Without choice and control, she may not attend.",
     "fix": "Chaperone, smaller speculum, stop on request, talk her through each step."
    },
    {
     "dom": "gs",
     "fail": "“We need to rule out cancer” with no context of how often it is benign.",
     "why": "Unbalanced explanation causes avoidable distress.",
     "fix": "Say both truths: most PMB is benign, and the referral is how we make sure quickly."
    },
    {
     "dom": "gs",
     "fail": "No plan to track the referral or discuss the result.",
     "why": "Non-specific follow-up is a common failing feedback statement.",
     "fix": "“If you haven’t heard in a week, ring us. I’ll go through the result with you.”"
    }
   ]
  }
 },
 "psa-result-conversation": {
  "stem": {
   "name": "Trevor Hammond",
   "age": "55-year-old man",
   "pmh": [
    "No significant past medical history"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "None recorded",
   "recent": "No PSA on record. Ethnicity recorded as Black. No urinary symptoms documented.",
   "reason": "Video appointment: “wants to book a PSA blood test”."
  },
  "knowledge": {
   "guideline": "UKHSA Prostate Cancer Risk Management Programme (GOV.UK) · UK NSC prostate screening recommendation (2026) · NICE NG12 (updated April 2026) · NICE NG131 (2019, updated 2021)",
   "summary": "An asymptomatic man aged 50 or over can have a PSA test after a balanced discussion. Help him make an informed choice — neither refuse nor reflexively test — and give real weight to his higher risk as a Black man.",
   "points": [
    {
     "h": "Informed choice",
     "t": "Prostate Cancer Risk Management Programme: an asymptomatic man aged 50 or over who asks about PSA should be given balanced information on benefits and harms and can then choose to be tested. There is no national population screening programme."
    },
    {
     "h": "Screening policy",
     "t": "UK NSC (2026): targeted two-yearly PSA screening is recommended only for men aged 45 to 61 with a confirmed BRCA2 variant and a relevant family history. It did not recommend screening Black men as a group because the balance of benefit and harm remains uncertain — but their higher risk is a legitimate part of an individual discussion."
    },
    {
     "h": "What PSA can and cannot do",
     "t": "PSA rises with benign enlargement, infection, recent ejaculation and vigorous exercise. It can be normal with a significant cancer and can detect slow-growing cancers that would never cause harm, leading to biopsy and treatment side effects. A normal result is not an all-clear."
    },
    {
     "h": "Before the test",
     "t": "Programme advice: no ejaculation or vigorous exercise for 48 hours beforehand, and defer for 6 weeks after a urinary infection or a prostate biopsy."
    },
    {
     "h": "If the result is raised",
     "t": "NICE NG12 (updated April 2026): consider a suspected cancer pathway referral if PSA is above the age-specific threshold (for 50–59 years, above 3.5 micrograms/L). NICE NG131: multiparametric MRI is the first-line investigation for suspected localised prostate cancer, before any biopsy; active surveillance is an option for low-risk disease."
    },
    {
     "h": "Symptoms change the pathway",
     "t": "NICE NG12 (updated April 2026): consider PSA and digital rectal examination in men with lower urinary tract symptoms, erectile dysfunction or visible haematuria. Bone pain, weight loss or a hard irregular prostate move this from informed choice to a symptomatic assessment."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Trevor, I’m Dr Lee. You’d like to talk about a PSA test — tell me what’s brought this up now.",
    "dom": "rto",
    "why": "Open question about the trigger rather than processing the request"
   },
   {
    "who": "pt",
    "text": "A mate at work just got diagnosed with prostate cancer, out of nowhere. Shook me up. So I thought I’d get the test, it comes back normal, and I can stop worrying. Normal means I’m in the clear, right?"
   },
   {
    "who": "dr",
    "text": "I’m sorry about your colleague — that’s a shock. I’m happy to talk about the test, and I want to give you a straight answer on what “normal” means. First, can I ask a few questions about you, then we’ll go through the pros and cons and you can decide. Okay?",
    "dom": "gs",
    "why": "Acknowledges the trigger and sets an informed-choice agenda"
   },
   {
    "who": "pt",
    "text": "Sure. I thought it was just a blood test."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Any trouble with your waterworks — getting up at night, a weak stream, rushing to the loo, or any blood in your urine?",
    "dom": "tasks",
    "why": "Screens for lower urinary tract symptoms and haematuria"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Any problems with erections, pain in your bones or back, or weight loss you can’t explain?",
    "dom": "tasks",
    "why": "Screens for symptoms that would move this to a symptomatic pathway"
   },
   {
    "who": "pt",
    "text": "No. I feel fine. That’s the scary bit about my mate — he felt fine too."
   },
   {
    "who": "dr",
    "text": "Has anyone in your family had prostate cancer, or breast or ovarian cancer?",
    "dom": "tasks",
    "why": "Asks about family history, including BRCA-type patterns"
   },
   {
    "who": "pt",
    "text": "My uncle had it, late in life. Nothing else I know of."
   },
   {
    "who": "dr",
    "text": "Thank you. One more thing that matters — prostate cancer is more common in Black men, and tends to come on a bit earlier. That’s relevant for you, and I’ll come back to it.",
    "dom": "tasks",
    "why": "Recognises Black ethnicity as a genuine risk factor"
   },
   {
    "who": "pt",
    "text": "I’d heard something like that."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "When you picture having the test, what are you hoping it does for you?",
    "dom": "rto",
    "why": "Explores expectations beneath the request"
   },
   {
    "who": "pt",
    "text": "Settles it. Normal, done. I don’t want to go down the road of biopsies and all that."
   },
   {
    "who": "dr",
    "text": "Tell me more about “all that” — what have you heard?",
    "dom": "rto",
    "why": "Follows the cue towards the hidden fear"
   },
   {
    "who": "pt",
    "text": "Well… my mate’s talking about surgery. And people say you end up not able to — you know — in the bedroom. Or wearing pads. That frightens me more than anything, if I’m honest."
   },
   {
    "who": "dr",
    "text": "That’s a really honest thing to say, and it’s actually central to this decision. Because the test can start you down that road, understanding it is part of choosing whether to have it.",
    "dom": "rto",
    "why": "Validates the fear and links it to the decision"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "So here’s the honest picture. The PSA is useful, but it isn’t an all-clear. It can be raised by harmless things — a large prostate, an infection, even sex or a long bike ride. It can be normal even when there is a cancer. And sometimes it finds slow-growing cancers that would never have harmed you.",
    "dom": "tasks",
    "why": "Corrects the all-clear belief with balance"
   },
   {
    "who": "pt",
    "text": "So what’s the point then?"
   },
   {
    "who": "dr",
    "text": "The point is it can find a significant cancer earlier, when it’s more treatable. For a man of your background, with an uncle affected, that benefit counts for more. You’re entitled to the test, and I’d support you having it if that’s your choice.",
    "dom": "tasks",
    "why": "Presents benefits honestly and weighs his individual risk"
   },
   {
    "who": "pt",
    "text": "And if it comes back high?"
   },
   {
    "who": "dr",
    "text": "Then we’d likely repeat it, and refer you to the specialists. These days the next step is usually an MRI scan, and many men don’t need a biopsy at all. If a low-risk cancer is found, often the choice is careful monitoring rather than surgery — so a raised result doesn’t automatically mean the treatments you’re worried about.",
    "dom": "tasks",
    "why": "Explains the downstream pathway (MRI first, active surveillance)"
   },
   {
    "who": "pt",
    "text": "That’s not what I thought. That’s better, actually."
   },
   {
    "phase": "Shared decision",
    "clock": "8–11 min",
    "who": "dr",
    "text": "So there are two reasonable options. Have the test now, knowing what it can and can’t tell you. Or take some time, read the leaflet I’ll send, and decide later. There’s no wrong answer. What feels right to you?",
    "dom": "rto",
    "why": "Supports autonomy with balanced options"
   },
   {
    "who": "pt",
    "text": "I think I want it. I’d rather know. But I get now it’s not a yes or no."
   },
   {
    "who": "dr",
    "text": "That’s a well-thought-through choice. A couple of practical points: no sex and no hard exercise for 48 hours before the blood test, and if you get a urine infection, we’d wait six weeks. I’ll book it for next week.",
    "dom": "tasks",
    "why": "Gives correct pre-test advice"
   },
   {
    "who": "pt",
    "text": "Right. 48 hours. Got it."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "I’ll go through the result with you myself, not just a text. If it’s normal, we’ll talk about when it might be worth repeating. And whatever the result, if you ever notice waterworks changes, blood in your urine, bone pain or weight loss, come and see us.",
    "dom": "gs",
    "why": "Result ownership, follow-up and symptom safety-net"
   },
   {
    "who": "pt",
    "text": "Okay. Thanks for not just handing me a form."
   },
   {
    "who": "dr",
    "text": "Before you go — if someone at home asks what the test tells you, what will you say?",
    "dom": "gs",
    "why": "Checks understanding with teach-back"
   },
   {
    "who": "pt",
    "text": "That it’s a clue, not an answer. Normal doesn’t mean definitely clear, high doesn’t mean definitely cancer, and the next step is a scan."
   },
   {
    "who": "dr",
    "text": "Spot on. I’ll record that we’ve talked it through and that it’s your decision. Take care, Trevor.",
    "dom": "rto",
    "why": "Affirms his decision and documents informed choice"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Asked what prompted the request before discussing the test; let him explain the colleague’s diagnosis.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Impact of the colleague’s illness, who supports him, and what matters to him about possible treatment effects.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “normal means I’m clear” and “biopsies and all that” and explored the fear of treatment harms.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (PSA is an all-clear); concern (cancer, and sexual and urinary side effects of treatment); expectation (a quick normal test).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Symptom screen; informed-choice PSA with pre-test advice (48 hours, 6 weeks after infection); DRE if symptoms arise.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Asymptomatic informed choice versus symptomatic presentation; benign causes of a raised PSA.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about LUTS, haematuria, erectile dysfunction, bone pain and weight loss that would change the pathway (NICE NG12 (updated April 2026)).",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Summarised: asymptomatic man at higher-than-average risk, eligible for PSA after counselling; no symptoms needing urgent assessment.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Balanced benefits and harms; his choice respected; explained MRI-first pathway (NICE NG131) and active surveillance if a raised result.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Weighed Black ethnicity and family history; asked about BRCA-pattern cancers; explained second-degree history carries less weight than first-degree.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Result given personally, plan for a raised or normal value, symptom safety-net, and informed choice documented.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Investigations & results",
    "Ethnicity, culture & diversity"
   ],
   "stem": {
    "name": "Trevor Hammond",
    "age": "55 years · male",
    "pmh": [
     "Nil significant"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "None recorded",
    "recent": "No previous PSA. Ethnicity: Black. No urinary symptoms on record.",
    "reason": "“Just want to book the prostate blood test.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agenda",
     "d": "Ask what prompted it. Name that you’ll explain what “normal” really means and that the decision is his."
    },
    {
     "t": "1–4",
     "h": "Symptoms and risk",
     "d": "LUTS, haematuria, ED, bone pain, weight loss; family history including breast or ovarian cancer; acknowledge ethnicity as a real risk factor."
    },
    {
     "t": "4–6",
     "h": "The real fear",
     "d": "What does he hope the test does? What has he heard about biopsies and treatment? The fear of harms is the hidden agenda."
    },
    {
     "t": "6–10",
     "h": "Balanced information",
     "d": "Not an all-clear; false positives and negatives; overdiagnosis; the MRI-first pathway and active surveillance. Weigh his risk. Offer the choice."
    },
    {
     "t": "10–12",
     "h": "Decide and close",
     "d": "Pre-test advice if testing, personal result review, symptom safety-net, document informed choice. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Hands over a blood form with no discussion, or refuses the test as “not recommended”; confirms that normal means clear; ignores his ethnicity; no symptom screen; no plan for the result.",
    "pass": "Explains PSA is not an all-clear and gives the main benefits and harms; screens for symptoms; recognises higher risk in Black men; respects his decision; gives pre-test advice and arranges results.",
    "exc": "All of the above, plus: surfaces the fear of impotence and incontinence and answers it with the MRI-first pathway and active surveillance; weighs family history accurately; offers time to decide as a real option; teach-back shows he understands a normal result is not a guarantee."
   },
   "avoid": [
    {
     "dont": "“Sure, I’ll add it to your bloods.”",
     "instead": "“Happy to — can I first explain what the result can and can’t tell you, so it’s a decision you’re comfortable with?”",
     "why": "Testing without counselling fails the informed-choice task."
    },
    {
     "dont": "“We don’t recommend PSA screening, so I’d rather not.”",
     "instead": "“There’s no national screening, but you’re entitled to the test after we’ve talked it through — and your background makes that discussion more relevant.”",
     "why": "Refusing an eligible man is paternalistic and wrong under the risk management programme."
    },
    {
     "dont": "“If it’s normal, you’ve got nothing to worry about.”",
     "instead": "“A normal result is reassuring, but it isn’t a guarantee — so tell us if symptoms ever appear.”",
     "why": "False reassurance is the exact misconception this station tests."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Triggered anxiety",
     "t": "A colleague’s sudden diagnosis has made the risk personal. Acknowledge it — decisions made in fear can be regretted either way."
    },
    {
     "h": "Sexual health and relationships",
     "t": "Fear of erectile dysfunction and incontinence is often the real barrier for men considering PSA; raise it sensitively."
    }
   ],
   "legal": [
    {
     "h": "Informed consent",
     "t": "Montgomery v Lanarkshire Health Board (2015): patients must be told about material risks and reasonable alternatives. For PSA, that includes false results, overdiagnosis and the option not to test."
    }
   ],
   "professional": [
    {
     "h": "Shared decision-making",
     "t": "GMC Decision making and consent (2020): share information in a balanced way, find out what matters to the patient, and respect his choice. Document the discussion and his decision."
    },
    {
     "h": "Health inequality",
     "t": "Black men have a higher risk of prostate cancer and may be less likely to seek testing. Discussing that risk openly is good care, not stereotyping."
    }
   ],
   "community": [
    {
     "h": "Information",
     "t": "Programme patient information leaflet on the PSA test; Prostate Cancer UK information and specialist nurse helpline."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Lower urinary tract symptoms, erectile dysfunction or visible haematuria — consider PSA and DRE (NICE NG12 (updated April 2026))",
     "Bone pain, back pain, weight loss or fatigue — possible advanced disease",
     "Family history of prostate cancer in a first-degree relative, or breast or ovarian cancer suggesting a BRCA variant"
    ],
    "psychosocial": [
     "The colleague’s diagnosis and how it has affected him",
     "What sexual and urinary function mean to him",
     "How he prefers to make decisions and who he talks to"
    ],
    "ice": [
     "Idea: “PSA is a simple test — normal means I’m in the clear.”",
     "Concern: cancer like his colleague, and the side effects of biopsy and treatment",
     "Expectation: a quick blood test with a normal result"
    ]
   },
   "diagnosis": "Asymptomatic 55-year-old Black man requesting PSA after a colleague’s diagnosis; higher-than-average risk from ethnicity, with a second-degree family history. No symptoms suggesting a symptomatic pathway. Eligible for PSA after an informed-choice discussion.",
   "diagnosisLay": "“The PSA test is like a smoke alarm that sometimes goes off when there’s only toast burning, and occasionally stays quiet when there is a fire. It’s still useful — but you need to know that before you decide to install it.”",
   "management": {
    "reflectIce": "“You came for a quick all-clear, and underneath I think you’re as worried about the treatments as the cancer itself. Let’s look at both, so whatever you choose, you choose it knowing the full picture.”",
    "psychosocial": "Acknowledge the colleague’s illness; talk openly about sexual and urinary side effects and how the modern pathway reduces unnecessary treatment.",
    "sharedPlan": [
     "Balanced discussion of benefits and harms; his decision respected either way",
     "If testing: no ejaculation or vigorous exercise for 48 hours, defer 6 weeks after a UTI",
     "Raised result for age: repeat and refer (NICE NG12 (updated April 2026)); MRI before biopsy (NICE NG131)"
    ],
    "safetyNet": [
     "GP discusses the result personally and agrees when to consider repeating it",
     "Return if urinary symptoms, blood in the urine, erectile problems, bone pain or weight loss"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "High PSA",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) thresholds",
    "href": "algorithms/high-psa.html"
   },
   {
    "ic": "💠",
    "t": "Male LUTS",
    "s": "Protocol · when symptoms change the pathway",
    "href": "management/male-luts.html"
   },
   {
    "ic": "💠",
    "t": "Benign prostate enlargement",
    "s": "Protocol · PSA interpretation",
    "href": "management/benign-prostate-enlargement.html"
   }
  ],
  "pitfalls": {
   "intro": "Candidates fail this station at either extreme: the reflex blood form or the paternalistic refusal. The marks sit in the balanced conversation, the weighting of his risk, and the fear of treatment he does not volunteer.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Agreeing that a normal PSA means he is in the clear.",
     "why": "PSA misses some significant cancers; false reassurance is a clinical error.",
     "fix": "“A normal result is reassuring but not a guarantee.”"
    },
    {
     "dom": "tasks",
     "fail": "Declining the test because “there’s no screening programme”.",
     "why": "The risk management programme allows asymptomatic men aged 50 or over to choose PSA after counselling; refusal is outdated and paternalistic.",
     "fix": "Explain there is no population screening, then offer the test as his informed choice."
    },
    {
     "dom": "tasks",
     "fail": "No symptom screen before treating it as an informed-choice request.",
     "why": "LUTS, ED, haematuria or bone pain change the pathway under NICE NG12 (updated April 2026).",
     "fix": "Four quick questions: waterworks, blood in the urine, erections, bone pain or weight loss."
    },
    {
     "dom": "tasks",
     "fail": "Ignoring his ethnicity, or overstating a second-degree family history.",
     "why": "Black ethnicity is a genuine risk factor; an uncle’s late-life cancer adds little compared with a father or brother.",
     "fix": "Weigh both accurately and say so."
    },
    {
     "dom": "rto",
     "fail": "Reciting benefits and harms as a list without finding out what worries him.",
     "why": "Feedback: “information not tailored to the patient’s concerns”. His fear of impotence and incontinence is what drives the decision.",
     "fix": "Ask what he has heard about biopsies and treatment, then explain MRI-first and active surveillance."
    },
    {
     "dom": "gs",
     "fail": "No pre-test advice and no plan for who gives the result.",
     "why": "Spuriously raised results and unexplained numbers create harm and anxiety.",
     "fix": "48 hours without ejaculation or hard exercise; “I’ll go through the result with you myself.”"
    }
   ]
  }
 },
 "teen-eating-disorder": {
  "stem": {
   "name": "Ivy",
   "age": "16-year-old girl",
   "pmh": [
    "No significant past medical history recorded",
    "A-level student"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "No recent consultations. No weight or blood results on record in the past year.",
   "reason": "Booked a video appointment herself: dizzy on standing, tired, feeling cold, and “fainting a bit” at school. Asking for iron tablets or a blood test."
  },
  "knowledge": {
   "guideline": "NICE NG69 (eating disorders, 2017, updated 2020) · RCPsych CR233 Medical emergencies in eating disorders (MEED, 2022) · NHS England CYP eating disorder access and waiting time standard (2015) · GMC 0–18 years (2007)",
   "summary": "Postural dizziness, faints, cold intolerance, amenorrhoea and rapid weight loss in a thin, driven teenager asking for iron is an eating disorder until proven otherwise — and a possible medical emergency. She needs an in-person physical risk assessment the same day and an immediate referral.",
   "points": [
    {
     "h": "Recognise it",
     "t": "Restriction, calorie counting, hours of exercise, fear of weight gain, body-image distortion, rapid weight loss and amenorrhoea point to anorexia nervosa. Framing it as “healthy eating” is part of the illness, not evidence against it."
    },
    {
     "h": "Assess risk in person (MEED)",
     "t": "RCPsych MEED (CR233, 2022) covers all ages and uses a red, amber and green risk system: degree and rate of weight loss, heart rate, lying and standing blood pressure and pulse, temperature, hydration, the sit-up–squat–stand test, blood results and ECG. It advises that primary care assesses these in person and seeks collateral from family, as patients often minimise."
    },
    {
     "h": "Investigations",
     "t": "FBC, U&E, phosphate, magnesium, calcium, glucose, LFTs. NICE NG69: assess the need for ECG monitoring with rapid weight loss, excessive exercise, bradycardia, hypotension, electrolyte imbalance or muscular weakness — several of which apply. Normal bloods do not exclude danger."
    },
    {
     "h": "Refer immediately",
     "t": "NICE NG69: if an eating disorder is suspected after initial assessment, refer immediately to a community-based, age-appropriate eating disorder service. Do not use a single measure such as BMI or duration of illness to decide whether to offer treatment. Red MEED features need same-day medical admission."
    },
    {
     "h": "Waiting time standard",
     "t": "NHS England standard (2015) for children and young people: treatment in line with NICE NG69 should start within 1 week for urgent cases and within 4 weeks for routine cases. Mark this referral urgent."
    },
    {
     "h": "Treatment and family",
     "t": "NICE NG69: consider anorexia-nervosa-focused family therapy for children and young people, with some appointments seen separately from family. Do not offer medication as the sole treatment. Family involvement is part of treatment, negotiated with her."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Ivy, I’m Dr Lee. Thanks for booking in. Tell me what’s been going on.",
    "dom": "rto",
    "why": "Open question, letting her set out her story"
   },
   {
    "who": "pt",
    "text": "It’s probably nothing. I get really dizzy when I stand up, a bit faint at school, and I’m tired all the time. I think I’m run down with exams, maybe anaemic? Could I just get iron or a blood test? I’ve been really good with eating healthily and exercising, so I don’t get why I feel so rubbish."
   },
   {
    "who": "dr",
    "text": "I’m glad you came, because fainting at school is something I want to take properly seriously, not just give you tablets for. Can I ask you some questions to work out what’s behind it, and then we’ll decide on tests together?",
    "dom": "gs",
    "why": "Validates the symptom and agrees an agenda wider than iron"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about the faints. Have you actually blacked out? Any chest pain, heart racing or fluttering?",
    "dom": "tasks",
    "why": "Screens for cardiac red flags"
   },
   {
    "who": "pt",
    "text": "Not fully blacked out. Everything goes grey when I stand. No chest pain."
   },
   {
    "who": "dr",
    "text": "You mentioned eating healthily and exercising. What does a typical day look like — food and exercise?",
    "dom": "tasks",
    "why": "Uses her own words to open the subject non-confrontationally"
   },
   {
    "who": "pt",
    "text": "Clean eating. I track everything. I train a couple of hours a day — running, workouts. It’s just discipline."
   },
   {
    "who": "dr",
    "text": "How do you feel if you can’t train, or eat more than you planned?",
    "dom": "tasks",
    "why": "Tests for compulsive exercise and fear of weight gain"
   },
   {
    "who": "pt",
    "text": "(Pause.) Awful. Like I’ve failed. I feel huge, honestly, even though people say I’m thin."
   },
   {
    "who": "dr",
    "text": "Thank you for being honest. Has your weight changed recently? And your periods — are they regular?",
    "dom": "tasks",
    "why": "Establishes rapid weight loss and amenorrhoea"
   },
   {
    "who": "pt",
    "text": "I’ve lost quite a bit, quite fast. My periods stopped about four months ago. I thought that was stress."
   },
   {
    "who": "dr",
    "text": "And your mood — how have you been in yourself? Any thoughts of harming yourself?",
    "dom": "tasks",
    "why": "Screens mood and self-harm risk"
   },
   {
    "who": "pt",
    "text": "Stressed. Low sometimes. Nothing like that."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "It sounds like there’s a lot of pressure on you right now. What’s that like?",
    "dom": "rto",
    "why": "Explores context and control without challenging her"
   },
   {
    "who": "pt",
    "text": "My parents expect top grades. I’m in all the top sets. Food’s the one thing I can actually control."
   },
   {
    "who": "dr",
    "text": "That makes a lot of sense. When everything feels like it’s about performing, having one thing that’s yours matters. What worries you most about what I might say today?",
    "dom": "rto",
    "why": "Validates the need for control and elicits her fear"
   },
   {
    "who": "pt",
    "text": "(Quietly.) That you’ll make me gain weight. That I’ll lose control."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Thank you for telling me that. I’ll be honest with you. Losing weight fast, periods stopping, feeling cold, going grey when you stand — those tell me your body isn’t getting enough fuel for what you’re asking of it. I don’t think this is anaemia. I think your eating and exercise have become an eating disorder, and it’s started to affect your heart and blood pressure.",
    "dom": "tasks",
    "why": "Names the probable eating disorder and its medical danger, gently"
   },
   {
    "who": "pt",
    "text": "I’m not ill. I’m just being healthy."
   },
   {
    "who": "dr",
    "text": "I can see why it feels that way — it started as trying to be healthy. But being healthy shouldn’t make you faint. This isn’t about blame or vanity; it’s an illness, it’s treatable, and people do recover. And I won’t make any decisions without you.",
    "dom": "rto",
    "why": "Avoids argument, reframes as illness and restores some control"
   },
   {
    "who": "pt",
    "text": "…Okay."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what I’d like. I can’t check your heart properly over video, so I’d like you to come in today. We’ll check your pulse and blood pressure lying and standing, your temperature and weight, do a heart tracing and bloods for your salts and sugar. If anything is dangerous, you may need to be seen in hospital today.",
    "dom": "tasks",
    "why": "Same-day in-person MEED risk assessment, bloods and ECG"
   },
   {
    "who": "pt",
    "text": "Today? I’ve got revision."
   },
   {
    "who": "dr",
    "text": "I know exams matter a lot to you. Fainting could hurt you, and it will affect your revision far more than an hour here. I’ll also refer you urgently to the eating disorder team for young people — they’re specialists, and they aim to see urgent referrals within a week.",
    "dom": "tasks",
    "why": "Urgent CEDS referral in line with NICE NG69 and the waiting time standard"
   },
   {
    "who": "pt",
    "text": "Do my parents have to know?"
   },
   {
    "who": "dr",
    "text": "Because this is affecting your physical safety, your family will need to be involved — the treatment that works best for people your age includes them. But we can decide together how, and what you’d like to say first. Would it help if I was there when you tell them?",
    "dom": "rto",
    "why": "Honest about limits of confidentiality at 16, negotiated with her"
   },
   {
    "who": "pt",
    "text": "…Maybe. Mum, not Dad first."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "That’s fine. Please come in this afternoon — can someone bring you? Until then, if you pass out, get chest pain, your heart races or you feel very weak, ring 999. Please don’t exercise today.",
    "dom": "gs",
    "why": "Same-day attendance and explicit emergency triggers"
   },
   {
    "who": "dr",
    "text": "Before we finish, tell me in your own words what we’ve agreed.",
    "dom": "rto",
    "why": "Teach-back to confirm understanding"
   },
   {
    "who": "pt",
    "text": "Come in today for checks, bloods and a heart tracing. You’re referring me to a specialist team. We tell Mum together. 999 if I pass out or get chest pain."
   },
   {
    "who": "dr",
    "text": "Exactly. You came hoping for a quick fix, and I know this is harder to hear. You did the right thing coming, and you won’t be doing this alone.",
    "dom": "rto",
    "why": "Closes with warmth and acknowledges the gap between wish and plan"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; took the faints seriously without accepting “just anaemia” and agreed a wider agenda.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Academic and parental pressure, perfectionism, need for control, mood and self-harm screen.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “eating healthily and exercising” and “I feel huge” and explored them without confrontation.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (run down, anaemic), concern (being made to gain weight, losing control), expectation (iron or a blood test).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Same-day in-person lying and standing BP and pulse, temperature, weight, sit-up–squat–stand; FBC, U&E, phosphate, magnesium, glucose, LFTs; ECG (MEED, NICE NG69).",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Anorexia nervosa vs anaemia, thyroid disease, coeliac disease and other causes of weight loss; cardiac causes of presyncope.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about blackouts, chest pain and palpitations; recognised postural symptoms and rapid weight loss as possible medical instability.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Probable anorexia nervosa with possible medical instability, explained as an illness rather than a choice.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day physical assessment with admission if red MEED features; immediate urgent referral to the community eating disorder service.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Low mood screened; exam pressure acknowledged; family involvement negotiated; exercise paused today.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 for collapse, chest pain, palpitations or weakness; seen today; review after results and once the team is involved.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Mental health & addiction",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Ivy",
    "age": "16 years · female",
    "pmh": [
     "Nil significant",
     "A-level student"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ No weight, BMI or bloods on record in the past year. Self-booked video appointment.",
    "reason": "Dizzy on standing, tired, cold, near-faints at school. “Could I just get some iron tablets or a blood test?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "She offers anaemia and exam stress, and asks for iron. Take the faints seriously and widen the agenda."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Cardiac red flags; a typical day of food and exercise in her words; feelings when she can’t train; weight change; periods; mood and self-harm."
    },
    {
     "t": "4–6",
     "h": "ICE and control",
     "d": "Pressure to achieve; food as the one thing she controls; fear of being made to gain weight. Validate, don’t argue."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Name the eating disorder gently and its effect on her heart. Same-day in-person checks, bloods and ECG; immediate urgent referral; family involvement negotiated."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 triggers, no exercise today, how she gets to the surgery. Teach-back of the plan."
    }
   ],
   "wordPics": {
    "fail": "Orders iron and a blood count and closes; accepts “clean eating”; never asks about periods, weight or exercise; or confronts her bluntly about being too thin and loses her; no physical risk assessment and no referral.",
    "pass": "Recognises a probable eating disorder; arranges in-person observations, bloods and ECG; refers to the eating disorder service; mentions family involvement; gives basic safety-netting.",
    "exc": "All of the above, plus: opens the subject through her own words without confrontation; validates the need for control; names the medical danger honestly; arranges same-day assessment with admission criteria in mind; negotiates how and when her family is told; confirms understanding with teach-back."
   },
   "avoid": [
    {
     "dont": "“You’re very underweight — you need to start eating more.”",
     "instead": "“Tell me what a typical day of food and exercise looks like for you.”",
     "why": "Confrontation triggers defensiveness; curiosity gets the history."
    },
    {
     "dont": "“Let’s check your iron and see.”",
     "instead": "“I don’t think this is anaemia. Your body isn’t getting enough fuel, and I need to check your heart today.”",
     "why": "Colluding with the anaemia story misses a potentially dangerous eating disorder."
    },
    {
     "dont": "“This stays completely between us.”",
     "instead": "“Because this affects your safety, your family will need to be involved — but we’ll decide how together.”",
     "why": "An impossible promise breaks trust later; honest limits keep her engaged."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Perfectionism and pressure",
     "t": "High academic and parental expectations often sit behind restriction as a means of control. Acknowledge exams as important to her while making clear that her safety comes first."
    },
    {
     "h": "Family",
     "t": "Family-based treatment is central for adolescents (NICE NG69). She may want one parent told first; honouring that preference where safe keeps her engaged."
    }
   ],
   "legal": [
    {
     "h": "Consent and capacity at 16",
     "t": "At 16 she is presumed to have capacity (Mental Capacity Act 2005) and can consent to treatment (Family Law Reform Act 1969, s8). Anorexia can impair capacity for decisions about food and weight; assess capacity for the specific decision."
    },
    {
     "h": "Confidentiality",
     "t": "GMC 0–18 years: information can be shared without consent where necessary to protect a young person from risk of death or serious harm. A medically unstable eating disorder can meet this threshold; involve her in how it is done."
    },
    {
     "h": "Exams",
     "t": "If illness affects her exams, her school can apply for access arrangements or special consideration through the exam boards’ JCQ process."
    }
   ],
   "professional": [
    {
     "h": "Limits of video",
     "t": "MEED advises in-person physical assessment in primary care. A video consultation can open the subject but cannot measure postural observations; arrange a same-day face-to-face review (GMC Good Medical Practice 2024: recognise the limits of the consultation)."
    },
    {
     "h": "Documentation",
     "t": "Record the history, observations, MEED risk features, the referral and its urgency, and the confidentiality discussion."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Beat (UK eating disorder charity) for Ivy and her family; school pastoral team or school nurse, with her agreement; the community eating disorder service’s family support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Syncope, chest pain, palpitations or muscle weakness — urgent assessment",
     "Rapid weight loss, bradycardia, postural drop, low temperature, failed sit-up–squat–stand — MEED red or amber features",
     "Self-harm or suicidal thoughts; purging or laxative use"
    ],
    "psychosocial": [
     "Perfectionism and parental expectations; top sets; A-levels",
     "Food and exercise as the one area she controls",
     "Shame and fear of being made to gain weight"
    ],
    "ice": [
     "Idea: “I’m run down with exams — maybe anaemic.”",
     "Concern: being made to gain weight and losing control",
     "Expectation: iron tablets or a blood test"
    ]
   },
   "diagnosis": "Probable anorexia nervosa (restriction, compulsive exercise, fear of weight gain, body-image distortion, rapid weight loss, 4 months’ amenorrhoea) with symptoms suggesting medical instability (postural presyncope, cold intolerance). Needs same-day in-person physical risk assessment.",
   "diagnosisLay": "“Your body isn’t getting enough fuel for what you’re asking of it, so it’s slowing things down — that’s why you’re cold, your periods stopped and you go grey when you stand. That’s an eating disorder. It’s an illness, not a choice, and it can be treated.”",
   "management": {
    "reflectIce": "“You were hoping this was anaemia, and you’re frightened of being made to gain weight and losing control. I won’t make decisions without you, but I do need to keep you safe.”",
    "psychosocial": "Validate the pressure and need for control; avoid food and weight arguments; negotiate which parent is told first and how; involve school only with her agreement.",
    "sharedPlan": [
     "Same-day in-person observations (lying and standing BP and pulse, temperature, weight, sit-up–squat–stand), bloods and ECG (MEED, NICE NG69)",
     "Immediate urgent referral to the community eating disorder service (NICE NG69; NHS England standard, urgent within 1 week)",
     "Same-day medical admission if red MEED features; family involvement negotiated with her"
    ],
    "safetyNet": [
     "999 for collapse, chest pain, palpitations or severe weakness; no exercise until assessed",
     "GP review of results and ongoing physical monitoring until the specialist team takes over"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Eating disorders",
    "s": "Case walkthrough · NICE NG69",
    "href": "../cases/eating-disorders.html"
   },
   {
    "ic": "💠",
    "t": "Eating disorders protocol",
    "s": "MEED risk · referral",
    "href": "management/eating-disorders.html"
   },
   {
    "ic": "🗺️",
    "t": "Amenorrhoea pathway",
    "s": "Visual algorithm · secondary amenorrhoea",
    "href": "algorithms/amenorrhoea.html"
   }
  ],
  "pitfalls": {
   "intro": "This station hides an eating disorder behind a request for iron. It is failed by accepting the anaemia story, by confronting her so bluntly that she shuts down, and by forgetting that the dizziness may be a medical emergency.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Ordering an FBC and ferritin and offering iron.",
     "why": "“Management plan not in line with current UK best practice.” The history points to an eating disorder with possible medical instability.",
     "fix": "Ask about food, exercise, weight and periods, and say clearly: “I don’t think this is anaemia.”"
    },
    {
     "dom": "tasks",
     "fail": "Recognising the eating disorder but only making a routine referral from a video call.",
     "why": "“Does not gather sufficient information to make a safe assessment.” MEED requires in-person observations; postural symptoms may mean she is unstable.",
     "fix": "Bring her in today for lying and standing observations, temperature, weight, bloods and ECG, and refer urgently."
    },
    {
     "dom": "rto",
     "fail": "“You’re clearly too thin — you need to eat more.”",
     "why": "Confrontation increases defensiveness; she will minimise and may not return.",
     "fix": "Start from her words: “Tell me what a typical day of food and exercise looks like.”"
    },
    {
     "dom": "rto",
     "fail": "Missing the fear of losing control.",
     "why": "“Does not identify or respond to the patient’s cues.” Her resistance comes from fear, not stubbornness.",
     "fix": "“Food feels like the one thing you control. I won’t take decisions away from you — we’ll make them together.”"
    },
    {
     "dom": "gs",
     "fail": "Promising confidentiality, or telling her parents will be phoned without discussion.",
     "why": "Both fail the balance GMC 0–18 years requires between confidentiality and safety.",
     "fix": "Explain honestly that family must be involved, then negotiate who, when and how."
    },
    {
     "dom": "gs",
     "fail": "Closing with “we’ll ring with the results” and no emergency advice.",
     "why": "Non-specific safety-netting in a patient who is fainting.",
     "fix": "Name 999 triggers, pause exercise, confirm how she gets to the surgery today, and teach-back."
    }
   ]
  }
 },
 "teen-selfharm": {
  "stem": {
   "name": "Maya",
   "age": "15-year-old girl",
   "pmh": [
    "No significant past medical history recorded",
    "No previous mental health contact recorded"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Mother booked the appointment: worried Maya is withdrawn, spending time in her room and not eating with the family. School performance has dropped. Mother has agreed to wait outside for part of the consultation.",
   "reason": "Attending at her mother’s request. Maya says she is “fine”."
  },
  "knowledge": {
   "guideline": "NICE NG225 (self-harm, 2022) · NICE NG134 (depression in children and young people, 2019) · GMC 0–18 years (2007) · Gillick v West Norfolk and Wisbech AHA (1985)",
   "summary": "A guarded teenager with long sleeves, falling grades and withdrawal needs a confidential, direct and kind assessment of self-harm and suicidal thoughts. Explaining confidentiality and its limits at the start is what makes disclosure possible.",
   "points": [
    {
     "h": "Confidentiality and its limits",
     "t": "GMC 0–18 years: a competent young person’s confidentiality should be respected; information may be shared without consent if necessary to protect them or others from risk of death or serious harm, ideally after telling them. Say this at the start, in plain words."
    },
    {
     "h": "Competence",
     "t": "Gillick competence (1985) is judged decision by decision: does she understand the information, the options and the consequences? The Fraser guidelines are a narrower test for contraception advice and are not the test for confidentiality in mental health."
    },
    {
     "h": "Ask directly",
     "t": "Ask about self-harm (method, frequency, wound care, escalation) and about suicidal thoughts, plans, intent, preparations and access to means, plus protective factors. Asking does not put the idea in someone’s head."
    },
    {
     "h": "No risk scores",
     "t": "NICE NG225: do not use risk assessment tools and scales, or a low/medium/high label, to predict suicide or decide who gets care. Understand the function of the self-harm and the person’s needs instead."
    },
    {
     "h": "Primary care after self-harm",
     "t": "NICE NG225: consider referral to mental health services for a psychosocial assessment (for a 15-year-old, children and young people’s mental health services), with consent and involving family where appropriate; agree a safety plan. Do not offer drug treatment specifically to reduce self-harm."
    },
    {
     "h": "Low mood",
     "t": "NICE NG134: psychological therapy is first-line for depression in young people. Antidepressants are started only after specialist assessment, and fluoxetine is the first-line choice when used, alongside therapy."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Maya, I’m Dr Lee. Thanks for staying on with me on your own. Before anything else, can I explain how this works, because it matters? What you tell me stays between us. The only time I’d have to share something is if I was seriously worried about your safety — and even then I’d talk to you first about what happens.",
    "dom": "tasks",
    "why": "Sets up confidentiality and its limits before any question"
   },
   {
    "who": "pt",
    "text": "(Arms folded.) I don’t even know why I’m here. Mum’s being dramatic. I’m fine. Can you just tell her I’m fine?"
   },
   {
    "who": "dr",
    "text": "I hear that. I’m not going to make you talk about anything you don’t want to. What I can’t honestly do is tell her you’re fine before I know. So can we have a chat — your pace, your call on what we talk about?",
    "dom": "rto",
    "why": "Does not collude, but respects her autonomy and pace"
   },
   {
    "who": "pt",
    "text": "(Shrugs.) Whatever."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Let’s start easy. How are things at home, and at school at the moment?",
    "dom": "tasks",
    "why": "HEEADSSS-style psychosocial screen, starting with low-threat areas"
   },
   {
    "who": "pt",
    "text": "Home’s fine. School’s… whatever. My grades have dropped. I’m tired. I don’t sleep much."
   },
   {
    "who": "dr",
    "text": "What keeps you up at night?",
    "dom": "rto",
    "why": "Follows the sleep cue with an open question"
   },
   {
    "who": "pt",
    "text": "My phone. Thinking. Stuff."
   },
   {
    "who": "dr",
    "text": "Can I ask something I ask lots of young people, because it matters? When things build up — have you ever hurt yourself on purpose?",
    "dom": "tasks",
    "why": "Asks directly and normalises the question"
   },
   {
    "who": "pt",
    "text": "(Long pause. Pulls sleeves down.) …I cut. My arms. For about four months. It’s the only thing that helps when it all builds up."
   },
   {
    "who": "dr",
    "text": "Thank you for trusting me with that. I’m not shocked and I’m not cross. For lots of people it’s a way of letting pressure out. Are any of the cuts deep, or looking red, hot or sore? Has it been getting more often?",
    "dom": "tasks",
    "why": "Responds without alarm and checks wound care and escalation"
   },
   {
    "who": "pt",
    "text": "They’re not deep. It’s about the same."
   },
   {
    "who": "dr",
    "text": "When you feel that low, do thoughts come about not wanting to be here, or about ending your life? Have you ever thought about how, or made any plans?",
    "dom": "tasks",
    "why": "Explicit suicide enquiry: thoughts, plan, intent, means"
   },
   {
    "who": "pt",
    "text": "Sometimes I think everyone would be better off without me. What’s the point, sort of thing. But I haven’t planned anything. I wouldn’t. My little sister…"
   },
   {
    "who": "dr",
    "text": "Tell me about her — and who else keeps you going?",
    "dom": "tasks",
    "why": "Explores protective factors"
   },
   {
    "who": "pt",
    "text": "I’d never do that to her. And my best friend. And art — it’s the only lesson I like."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Can I gently ask what’s been building the pressure? It could be school, friends, online, anything.",
    "dom": "rto",
    "why": "Opens a safe door to the hidden trigger"
   },
   {
    "who": "pt",
    "text": "(Quietly.) There’s people sending stuff online. About me. And… I’m not sure about… who I like. Like, whether I’m straight. If my parents found out… I don’t know what they’d do."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That’s so much to carry on your own. Nothing about who you might be is anything to be ashamed of, and who knows is completely your decision. What were you most worried would happen if you told me today?",
    "dom": "rto",
    "why": "Receives the disclosure warmly, without comment, and returns control"
   },
   {
    "who": "pt",
    "text": "That you’d tell my mum everything. The cutting and the rest."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I won’t tell her about who you like — that’s yours. From what you’ve told me, you’re very low, you’re cutting to cope, and you have thoughts that others would be better off without you, but no plans and some really strong reasons to stay safe. That means you need more support, not that you’re in trouble.",
    "dom": "tasks",
    "why": "Summarises the risk picture honestly and without a score"
   },
   {
    "who": "pt",
    "text": "So you’re not going to ring anyone?"
   },
   {
    "who": "dr",
    "text": "Not behind your back. Right now I don’t need to break confidentiality. I would like to refer you to the young people’s mental health team, who help with exactly this — the low mood, the cutting, and what’s underneath. Would you be okay with that?",
    "dom": "tasks",
    "why": "Proportionate decision on confidentiality and referral with consent (NICE NG225)"
   },
   {
    "who": "pt",
    "text": "…Maybe. If they don’t tell my parents everything."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "They work the same way I do. Let’s also make a plan for the moments it feels too much: what helps, who you can text, like your best friend, and numbers you can call any time — Childline is 0800 1111, day or night. And the online messages — would you want help from school with those? We can decide together how.",
    "dom": "tasks",
    "why": "Safety plan, crisis routes and bullying support, co-produced"
   },
   {
    "who": "pt",
    "text": "I don’t want the whole school knowing."
   },
   {
    "who": "dr",
    "text": "Fair. We can keep it to one trusted person. And your mum — she clearly loves you and she’s worried. Would it help if we told her something together, like that you’ve been really low and you’re getting support, without the private parts? You choose the words.",
    "dom": "rto",
    "why": "Negotiates parental involvement with her in control"
   },
   {
    "who": "pt",
    "text": "…Okay. Just that I’ve been low. Not the rest."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Deal. If those thoughts ever turn into a plan, or you feel you can’t keep yourself safe, call 999 or go to A&E, or ring NHS 111 for urgent mental health help. If a cut looks infected or is deep, get it seen. And I want to see you again in a week — just you and me for part of it.",
    "dom": "gs",
    "why": "Crisis routes, wound safety-net and a defined follow-up"
   },
   {
    "who": "dr",
    "text": "Before we bring your mum in — what will you do tonight if it builds up again?",
    "dom": "rto",
    "why": "Teach-back of the safety plan"
   },
   {
    "who": "pt",
    "text": "Text my best friend, or ring Childline. Draw. And if it gets really bad, 111 or 999."
   },
   {
    "who": "dr",
    "text": "That’s a good plan. Thank you for being so honest with me, Maya. You’re not on your own with this any more.",
    "dom": "rto",
    "why": "Closes with warmth and validation"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Saw her alone; explained confidentiality first; did not collude with “tell her I’m fine” but let her set the pace.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Home, school, sleep, phone use, friends, online life, sexuality (HEEADSSS-style) — surfaced the bullying and fear of being outed.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Long sleeves, falling grades, poor sleep, “my phone, thinking, stuff” — each followed rather than noted.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (mum overreacting), concern (everything told to her parents; being outed), expectation (to be declared fine).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Asked about wound depth and infection; offered to check wounds; assessed competence; no risk scale used (NICE NG225).",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Self-harm as emotional regulation vs suicidal intent; depression; bullying and identity stress as triggers; safeguarding concerns.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked directly about suicidal thoughts, plans, intent and means, and about protective factors.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Low mood with repeated self-harm and passive suicidal thoughts, no current plan, strong protective factors — stated without labelling her risk level.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Referral to young people’s mental health services with consent, co-produced safety plan, crisis numbers, school support she controls.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Online bullying addressed; sexuality handled without comment and kept confidential; sleep and phone use raised.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999, A&E and NHS 111 for crisis; Childline; wound safety-net; review in a week with time alone.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Mental health & addiction",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Maya",
    "age": "15 years · female",
    "pmh": [
     "Nil significant",
     "No previous mental health contact"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Appointment booked by mother: withdrawn, not eating with the family, grades dropping. Mother waiting outside.",
    "reason": "“I’m fine, my mum’s just overreacting.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Confidentiality first",
     "d": "Explain what stays private and the one exception, before a single clinical question. This is the hinge of the station."
    },
    {
     "t": "1–4",
     "h": "Psychosocial screen and direct questions",
     "d": "Home, school, sleep, phone. Ask directly about self-harm, then suicidal thoughts, plans, intent, means and protective factors."
    },
    {
     "t": "4–6",
     "h": "The real trigger",
     "d": "Open the door gently: online bullying and questioning her sexuality. Receive it without comment; she decides who knows."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Honest summary without a risk score. Referral with consent, safety plan, crisis numbers, school support she controls, what mum is told."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999, A&E, NHS 111, Childline, wound care, review in a week. Teach-back of tonight’s plan."
    }
   ],
   "wordPics": {
    "fail": "Launches into questions without explaining confidentiality; either tells her she’s fine or promises total secrecy; never asks directly about suicidal thoughts; reacts with alarm to the cutting; comments on her sexuality; no referral or crisis plan.",
    "pass": "Explains confidentiality and its limits; asks directly about self-harm and suicide; identifies protective factors; refers to young people’s mental health services; gives crisis numbers and follow-up.",
    "exc": "All of the above, plus: surfaces the bullying and sexuality through a safe, unhurried approach; responds to the self-harm by exploring its function without alarm; avoids risk labels; co-produces a safety plan; negotiates exactly what her mother is told, in her words; teach-back of the plan."
   },
   "avoid": [
    {
     "dont": "“Everything you say is completely confidential.”",
     "instead": "“What you tell me stays between us, unless I’m seriously worried about your safety — and then I’d talk to you first.”",
     "why": "An absolute promise you may have to break destroys trust later; honest limits build it now."
    },
    {
     "dont": "“You need to stop cutting — it’s dangerous.”",
     "instead": "“I’m not cross. For many people it lets the pressure out. Let’s work on what’s underneath.”",
     "why": "A punitive response drives concealment and ends the disclosure."
    },
    {
     "dont": "“It’s probably just a phase at your age.”",
     "instead": "“Nothing about who you might be is anything to be ashamed of, and who knows is your decision.”",
     "why": "Any comment on her sexuality is editorialising and loses her trust instantly."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Online bullying",
     "t": "Online abuse follows a young person home and into the night. Ask about it directly, consider screen-time and sleep, and offer school involvement that she controls."
    },
    {
     "h": "Sexuality and family",
     "t": "Fear of being outed is a strong driver of distress. Her sexuality is her private information; disclosure to parents is her choice alone."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality at 15",
     "t": "GMC 0–18 years: respect a competent young person’s confidentiality; disclose without consent only where necessary to protect them or others from risk of death or serious harm, and tell them first where possible."
    },
    {
     "h": "Gillick competence",
     "t": "Gillick v West Norfolk and Wisbech AHA (1985): a young person under 16 can consent if they have sufficient understanding and intelligence. Assess and record competence for decisions about confidentiality and referral."
    },
    {
     "h": "Safeguarding threshold",
     "t": "If the online contact involves threats, sexual images or exploitation, this becomes a safeguarding concern requiring referral to children’s social care (and possibly CEOP/police), following local procedures."
    }
   ],
   "professional": [
    {
     "h": "Honest limits",
     "t": "Never promise absolute secrecy. Explain the exception, document the confidentiality discussion, the direct risk questions and her answers, and the reasons for the decision not to share."
    },
    {
     "h": "Seeing young people alone",
     "t": "GMC 0–18 years supports seeing young people on their own for part of the consultation. Involve parents with the young person’s agreement, and in the words she chooses."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Childline (0800 1111), Papyrus HOPELINE for young people with suicidal thoughts, school pastoral or counselling support, local LGBT+ youth services, and locally commissioned online support for young people."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Suicidal thoughts with a plan, intent, preparation or access to means — same-day crisis assessment",
     "Escalating frequency or severity of self-harm; deep or infected wounds",
     "Online threats, sexual images or exploitation — safeguarding referral"
    ],
    "psychosocial": [
     "Online bullying; late-night phone use and poor sleep",
     "Questioning her sexuality; fear of her parents’ reaction",
     "Protective factors: younger sister, best friend, art"
    ],
    "ice": [
     "Idea: “There’s nothing wrong — Mum’s overreacting.”",
     "Concern: everything will be told to her parents, including her sexuality",
     "Expectation: to be told she’s fine so her mum backs off"
    ]
   },
   "diagnosis": "Low mood with repeated superficial self-cutting over about four months as a coping strategy, and passive suicidal thoughts without plan or intent, triggered by online bullying and fear about her sexuality. Strong protective factors. Competent to engage in decisions about her care.",
   "diagnosisLay": "“You’ve been carrying a lot on your own, and the cutting has become a way to let the pressure out. You’re low, and sometimes you feel others would be better off without you. That means you need more support — not that you’re in trouble.”",
   "management": {
    "reflectIce": "“You were worried I’d tell your mum everything. I won’t do anything behind your back, and who knows about the private parts is your choice.”",
    "psychosocial": "Co-produce what her mother is told; offer a single trusted contact at school for the bullying; respect her control over her sexuality; address sleep and phone use gently.",
    "sharedPlan": [
     "Referral to children and young people’s mental health services for psychosocial assessment, with her consent (NICE NG225)",
     "Written safety plan: triggers, what helps, people to contact, crisis numbers",
     "Psychological therapy is first-line for low mood in young people (NICE NG134); no medication for self-harm"
    ],
    "safetyNet": [
     "999, A&E or NHS 111 for urgent mental health help if a plan develops or she cannot keep safe; Childline any time",
     "Wound care advice; review in one week, seen alone for part of it"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Depression",
    "s": "Case walkthrough · NICE NG134 · NICE NG225",
    "href": "../cases/depression.html"
   },
   {
    "ic": "💠",
    "t": "Depression protocol",
    "s": "Risk first · treatment options",
    "href": "management/depression.html"
   },
   {
    "ic": "📋",
    "t": "Safeguarding",
    "s": "Case walkthrough · children and young people",
    "href": "../cases/safeguarding.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is won or lost in the first minute. Without an honest confidentiality statement, Maya stays closed; without direct risk questions, the candidate cannot be safe; and one careless comment about her sexuality ends the consultation.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Starting with questions about mood before explaining confidentiality.",
     "why": "“Does not establish a safe environment for disclosure.” Her “tell my mum I’m fine” is a test of whether this room is private.",
     "fix": "Open with what stays private and the one exception, in plain words."
    },
    {
     "dom": "tasks",
     "fail": "Avoiding the suicide question because she seems guarded, or asking only “you’re not going to do anything silly, are you?”",
     "why": "“Does not gather sufficient information to make a safe assessment.” Leading or vague questions get a “no”.",
     "fix": "Ask directly about thoughts, plans, intent and means, then about what keeps her safe."
    },
    {
     "dom": "tasks",
     "fail": "Summarising risk as “low” or scoring it on a scale.",
     "why": "NICE NG225 advises against risk tools and low/medium/high labels to predict suicide or allocate care.",
     "fix": "Describe what she told you, her protective factors, and the needs the plan must meet."
    },
    {
     "dom": "rto",
     "fail": "Promising total secrecy to win her trust.",
     "why": "An absolute promise may have to be broken; GMC 0–18 years requires honesty about limits.",
     "fix": "“It stays between us unless I’m seriously worried about your safety — and I’d talk to you first.”"
    },
    {
     "dom": "rto",
     "fail": "Reacting to the sexuality disclosure with a comment, a question about certainty, or moving straight past it.",
     "why": "Editorialising or ignoring it both read as judgement; she withdraws.",
     "fix": "Thank her, say it is nothing to be ashamed of, and make clear she controls who knows."
    },
    {
     "dom": "gs",
     "fail": "Ending with a referral and “see you soon”, with no crisis plan or agreed message for her mother.",
     "why": "Non-specific safety-netting; and the mother waiting outside needs a plan both can live with.",
     "fix": "Co-produce a safety plan, give crisis numbers, book a review in a week, and agree the exact words for her mum."
    }
   ]
  }
 },
 "testicular-lump": {
  "stem": {
   "name": "Jordan Eze",
   "age": "28-year-old man",
   "pmh": [
    "Undescended testis in infancy, corrected by orchidopexy"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "None recorded",
   "recent": "No consultations on record for several years. Occupation: personal trainer.",
   "reason": "Video appointment booked by the patient: “lump on one testicle”."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · NICE NG257 (fertility preservation) · GMC Intimate examinations and chaperones (2024)",
   "summary": "A hard, painless lump in the body of the testis in a young man is testicular cancer until examination and ultrasound say otherwise. Painlessness is the worrying feature, not the comforting one.",
   "points": [
    {
     "h": "NICE NG12 (updated April 2026) testicular criteria",
     "t": "NICE NG12 (updated April 2026): consider a suspected cancer pathway referral for testicular cancer in men with a non-painful enlargement or change in shape or texture of the testis. Consider a direct-access ultrasound scan for unexplained or persistent testicular symptoms."
    },
    {
     "h": "Inside or outside the testis",
     "t": "A lump that cannot be separated from the testis is the concerning finding. Lumps felt separately above or behind it (epididymal cyst), a swelling that transilluminates (hydrocele) or a “bag of worms” (varicocele) are usually benign — but only a hands-on examination can make that call."
    },
    {
     "h": "Why painless matters",
     "t": "Germ cell tumours usually present as a firm, painless swelling or a dragging heaviness. Pain with fever, dysuria or discharge points more to epididymo-orchitis. The absence of pain should raise, not lower, suspicion."
    },
    {
     "h": "Risk factors",
     "t": "A history of undescended testis carries a higher risk of testicular cancer even after orchidopexy. A previous testicular tumour and a family history also count. Their absence never excludes it."
    },
    {
     "h": "Remote consultation limits",
     "t": "A video call cannot assess a scrotal lump. Arrange a face-to-face examination promptly, offer a chaperone, and do not delay the referral or scan if examination is hard to arrange."
    },
    {
     "h": "Fertility and outcome",
     "t": "Testicular cancer is one of the most curable solid cancers. After removal of one testis, the other usually maintains testosterone and fertility. NICE NG257 (2026, which replaced NG257): offer sperm cryopreservation before treatment that may affect fertility. A prosthesis can be offered at surgery."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Jordan, I’m Dr Lee. Thanks for booking this — I know it isn’t the easiest thing to talk about on a screen. Tell me about the lump in your own words.",
    "dom": "rto",
    "why": "Open start that acknowledges the awkwardness without rushing him"
   },
   {
    "who": "pt",
    "text": "Yeah, it’s a bit weird. My girlfriend made me book it. Found a little lump a few weeks back in the shower. Doesn’t hurt, so I’m sure it’s nothing — a cyst or I’ve tweaked something lifting. It is fine, right?"
   },
   {
    "who": "dr",
    "text": "I can hear you’d love me to say yes. I’d rather give you a proper answer than a quick one, so let me ask a few things first, then I’ll tell you honestly what I think and what happens next. Okay?",
    "dom": "gs",
    "why": "Sets an agenda and signals honesty without dismissing his question"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Which side is it, and when exactly did you first notice it?",
    "dom": "tasks",
    "why": "Establishes side and duration"
   },
   {
    "who": "pt",
    "text": "Right side. About three weeks ago. I think it might be a bit bigger now, but I don’t know."
   },
   {
    "who": "dr",
    "text": "When you feel it, is the lump part of the testicle itself, or does it feel like a separate little ball sitting above or behind it?",
    "dom": "tasks",
    "why": "Distinguishes intratesticular from epididymal swelling"
   },
   {
    "who": "pt",
    "text": "It’s on it. Like part of it. It’s quite hard."
   },
   {
    "who": "dr",
    "text": "Any pain, tenderness, redness, a temperature, burning when you pass urine, or any discharge?",
    "dom": "tasks",
    "why": "Screens for infection and inflammatory causes"
   },
   {
    "who": "pt",
    "text": "No. Just a sort of dull heavy feeling on that side, a dragging. No pain as such."
   },
   {
    "who": "dr",
    "text": "Any injury down there? And have you had any cough, breathlessness, back pain or weight loss?",
    "dom": "tasks",
    "why": "Checks trauma and features of spread"
   },
   {
    "who": "pt",
    "text": "Nothing like that. I’m fit — I train people for a living."
   },
   {
    "who": "dr",
    "text": "One thing from your notes — you had an operation as a baby for a testicle that hadn’t come down. Do you know much about that?",
    "dom": "tasks",
    "why": "Elicits the orchidopexy risk factor"
   },
   {
    "who": "pt",
    "text": "Only that it was fixed. I was a baby. Why, does that matter?"
   },
   {
    "who": "dr",
    "text": "It’s relevant, and I’ll explain why in a moment.",
    "dom": "rto",
    "why": "Flags significance honestly without alarming him mid-history"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Can I ask — before you booked, had you looked any of this up online?",
    "dom": "rto",
    "why": "Opens the door to the hidden fear"
   },
   {
    "who": "pt",
    "text": "…Yeah. Few times. Everything says cancer. Which is why I’m saying it’s a cyst."
   },
   {
    "who": "dr",
    "text": "That’s a very human thing to do. When you read that, what was the bit that frightened you most?",
    "dom": "rto",
    "why": "Explores the specific concern rather than general anxiety"
   },
   {
    "who": "pt",
    "text": "Honestly? Losing it. Being half a bloke. Not being able to have kids. I want kids one day. I don’t even want to say it out loud."
   },
   {
    "who": "dr",
    "text": "Thank you for saying it. Lots of young men carry exactly that fear and never voice it, and I’m really glad you have, because there’s good information I can give you on every one of those points.",
    "dom": "rto",
    "why": "Validates and normalises the masculinity and fertility fear"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s my honest view. A hard lump that’s part of the testicle, that doesn’t hurt and may be growing, is exactly the kind we always check quickly. The lack of pain is actually why I take it seriously. Your childhood operation also slightly raises the chance of testicular problems later. It could still be something harmless — but I can’t tell you that from a video.",
    "dom": "tasks",
    "why": "Explains why painlessness and the risk factor raise concern"
   },
   {
    "who": "pt",
    "text": "So you think it’s cancer."
   },
   {
    "who": "dr",
    "text": "I think it needs ruling out properly, and fast. I need to examine you in person — I can see you here in the next day or two, with a chaperone if you’d like. Then there’s a national urgent pathway for exactly this: a scan of the testicle and a specialist appointment, usually within two weeks.",
    "dom": "tasks",
    "why": "Arranges face-to-face examination and the NICE NG12 (updated April 2026) suspected cancer pathway"
   },
   {
    "who": "pt",
    "text": "Two weeks. Right. And if it is?"
   },
   {
    "who": "dr",
    "text": "Then the news is better than what you read. Testicular cancer is one of the most curable cancers there is. If a testicle needs removing, the other one normally keeps your hormones and fertility working. Before any treatment you’d be offered sperm storage as a back-up, and a prosthesis can be fitted so things look the same.",
    "dom": "tasks",
    "why": "Gives accurate reassurance on cure, fertility, sperm storage and prosthesis"
   },
   {
    "who": "pt",
    "text": "I didn’t know about the storage thing. That actually helps."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "So the plan: an examination with me this week, and I’ll send the urgent referral and scan request today rather than wait. Does that feel doable around your clients?",
    "dom": "rto",
    "why": "Shares the plan and checks it fits his life"
   },
   {
    "who": "pt",
    "text": "I’ll move people. Can my girlfriend come?"
   },
   {
    "who": "dr",
    "text": "Absolutely. She clearly cares, and she was right to push you. You can tell her as much or as little as you like — it’s your information. Would it help if I sent you some reliable reading so you’re not back on random websites tonight?",
    "dom": "rto",
    "why": "Supports involvement of his partner while respecting confidentiality"
   },
   {
    "who": "pt",
    "text": "Yeah, please. The stuff online was grim."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If before the appointments it becomes painful, swells quickly, or you get a cough, breathlessness or back pain, contact us the same day. If the hospital hasn’t been in touch within a week, ring us and we’ll chase it — and I’ll check the result myself.",
    "dom": "gs",
    "why": "Specific safety-net and ownership of the referral"
   },
   {
    "who": "pt",
    "text": "Okay. Thanks. I was hoping you’d just say it’s nothing."
   },
   {
    "who": "dr",
    "text": "I know. What I can say is we’ll find out quickly and you won’t be dealing with it alone. What are you going to tell your girlfriend when we finish?",
    "dom": "gs",
    "why": "Checks understanding with teach-back"
   },
   {
    "who": "pt",
    "text": "That I need to be checked this week and scanned quickly, and that even if it’s the worst, it’s very fixable and I can store sperm."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. I’ll see you in clinic.",
    "dom": "rto",
    "why": "Closes warmly and confirms the next step"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Opened with a free description of the lump; did not answer “it’s fine, right?” before gathering the facts.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Occupation and body image as a personal trainer, the relationship and plans for children, what he has read online.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “my girlfriend made me”, the online searching and the bravado as signals of fear, and explored them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (cyst or gym strain); concern (cancer, losing a testicle, fertility and masculinity); expectation (quick reassurance).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Arranged face-to-face examination with a chaperone offered; direct-access ultrasound and suspected cancer referral per NICE NG12 (updated April 2026).",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Intratesticular tumour versus epididymal cyst, hydrocele, varicocele and epididymo-orchitis, tested with targeted questions.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about symptoms of spread (cough, breathlessness, back pain, weight loss); recognised painless intratesticular lump plus orchidopexy history as high suspicion.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated clearly that this needs testicular cancer ruling out urgently, without claiming a diagnosis over video.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Examination this week, same-day referral and scan request, accurate information on cure, fertility, sperm storage (NICE NG257) and prosthesis.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Addressed the undescended-testis history and the psychological load; offered reliable written information.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named same-day return triggers, a date to chase the referral, and personal ownership of the result.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Jordan Eze",
    "age": "28 years · male",
    "pmh": [
     "Orchidopexy in infancy (undescended testis)"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "None recorded",
    "recent": "Rarely consults. Personal trainer. No previous scrotal imaging on file.",
    "reason": "Video call: “found a lump on one testicle — probably nothing”."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and hold",
     "d": "He asks for “it’s fine, right?” in the first breath. Don’t answer yet — promise an honest answer after a few questions."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Side, duration, growth, inside versus separate from the testis, pain, infection features, trauma, symptoms of spread, and the orchidopexy history."
    },
    {
     "t": "4–6",
     "h": "The real fear",
     "d": "Ask what he read online and what scared him. The masculinity and fertility fear only surfaces if invited."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Painless and hard is the worrying feature. In-person examination this week, urgent NICE NG12 (updated April 2026) scan and referral sent today. Cure rates, the other testis, sperm storage, prosthesis."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Same-day triggers, chase date, you own the result. Teach-back: “What will you tell your girlfriend?”"
    }
   ],
   "wordPics": {
    "fail": "Accepts “it doesn’t hurt so it’s nothing” and offers review if it grows; relies on a video impression; never asks about the orchidopexy; misses the fear beneath the bravado; no referral, or a referral with no explanation so he may not attend.",
    "pass": "Recognises a painless hard intratesticular lump as suspicious; arranges examination and an urgent NICE NG12 (updated April 2026) pathway with ultrasound; notes the undescended-testis history; acknowledges he is worried; gives a basic safety-net.",
    "exc": "All of the above, plus: explicitly reframes painlessness; draws out the specific fear of losing a testicle and fertility and answers it with accurate facts (cure rates, the other testis, sperm storage, prosthesis); involves the girlfriend on his terms; owns the referral and result; teach-back confirms he will attend."
   },
   "avoid": [
    {
     "dont": "“If it doesn’t hurt, it’s probably just a cyst — keep an eye on it.”",
     "instead": "“The fact it doesn’t hurt is actually why I want it checked quickly.”",
     "why": "Painless reassurance is the exact error that delays diagnosis of testicular cancer."
    },
    {
     "dont": "“It could be cancer, so I’m referring you on the two-week-wait.”",
     "instead": "“This needs ruling out quickly. I’ll examine you this week and arrange an urgent scan and specialist review.”",
     "why": "Blunt labelling without context frightens a young man who is already minimising, and he may not turn up."
    },
    {
     "dont": "“Don’t worry about fertility for now, let’s get the scan first.”",
     "instead": "“Even in the worst case, the other testicle usually keeps things working, and you’d be offered sperm storage first.”",
     "why": "Deferring his central fear leaves it to drive avoidance; accurate facts help him engage."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Masculinity and body image",
     "t": "A personal trainer whose work centres on his body, who wants children one day. Fear of losing a testicle is about identity and the future, not only illness."
    },
    {
     "h": "Help-seeking in young men",
     "t": "Young men often present late and minimise. A partner’s insistence is useful; engaging her with his consent can help attendance."
    }
   ],
   "legal": [
    {
     "h": "Intimate examination",
     "t": "GMC Intimate examinations and chaperones (2024): explain why the examination is needed, obtain consent, offer a chaperone and record the discussion."
    },
    {
     "h": "Work and income",
     "t": "If he needs surgery or further treatment, a fit note covers time off. If he is self-employed there may be no sick pay; signpost to benefits advice early."
    }
   ],
   "professional": [
    {
     "h": "Limits of remote consulting",
     "t": "GMC Good Medical Practice (2024): recognise the limits of what can be assessed remotely. A scrotal lump needs a hands-on examination, arranged promptly."
    },
    {
     "h": "Referral ownership",
     "t": "Document the NICE NG12 (updated April 2026) criterion, send the referral the same day, and have a system to check he was seen and the scan was reported."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Orchid (male cancer charity) and Macmillan Cancer Support for information and helplines; NHS guidance on testicular self-examination."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Hard, painless lump arising from the testis, possibly enlarging — NICE NG12 (updated April 2026) suspected cancer pathway",
     "Previous undescended testis (even after orchidopexy), previous testicular tumour, family history",
     "Symptoms of spread: cough, breathlessness, haemoptysis, back pain, weight loss, breast swelling"
    ],
    "psychosocial": [
     "Occupation and self-image as a personal trainer",
     "Relationship, hopes for children, what he has told his girlfriend",
     "What he has read online and how frightened he is beneath the bravado"
    ],
    "ice": [
     "Idea: “It’s a cyst, or I’ve strained something at the gym.”",
     "Concern: cancer, losing a testicle, infertility and feeling “half a man”",
     "Expectation: a quick “it’s fine” to settle his girlfriend"
    ]
   },
   "diagnosis": "A hard, painless intratesticular lump present for three weeks, possibly enlarging, in a 28-year-old with a history of undescended testis corrected by orchidopexy: testicular cancer must be excluded urgently. Benign causes remain possible but cannot be assumed without examination and ultrasound.",
   "diagnosisLay": "“Most lumps down there are harmless, but the ones that are firm, part of the testicle and don’t hurt are the ones we always check quickly with a scan. That’s not me saying it’s cancer — it’s me making sure that if it is, it’s found early, when it’s very curable.”",
   "management": {
    "reflectIce": "“You came hoping I’d say it’s nothing, and I think underneath you’re scared about what it could mean for you as a man and for having kids. Let’s deal with both — the checks, and the facts on those fears.”",
    "psychosocial": "Invite his girlfriend if he wants; give reliable written information; acknowledge work and income worries if treatment is needed.",
    "sharedPlan": [
     "Face-to-face examination this week with a chaperone offered",
     "Same-day NICE NG12 (updated April 2026) suspected cancer referral and direct-access testicular ultrasound",
     "Explain cure rates, preserved function of the other testis, sperm storage before treatment (NICE NG257) and prosthesis"
    ],
    "safetyNet": [
     "Same-day contact if pain, rapid swelling, cough, breathlessness or back pain",
     "Ring if no appointment within a week; GP checks the scan and clinic outcome"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Testicular lump",
    "s": "Visual algorithm · NICE NG12 (updated April 2026)",
    "href": "algorithms/testicular-lump.html"
   },
   {
    "ic": "🗺️",
    "t": "Acute and chronic scrotal pain",
    "s": "Visual algorithm · differential",
    "href": "algorithms/scrotal-pain.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is lost when the candidate is persuaded by his confidence. The lump is suspicious because it is painless; the man is minimising because he is frightened. Miss either and the station fails.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting “it doesn’t hurt” as reassuring and advising review in a few weeks.",
     "why": "A painless hard intratesticular lump meets the NICE NG12 (updated April 2026) testicular criterion; watchful waiting is unsafe management.",
     "fix": "Say it plainly: “No pain is exactly why I want this scanned quickly.” Then arrange examination and the suspected cancer pathway."
    },
    {
     "dom": "tasks",
     "fail": "Making a diagnosis or plan purely from the video, without arranging a face-to-face examination.",
     "why": "Distinguishing intratesticular from epididymal lumps needs palpation; relying on a remote impression is a recognised safety failure.",
     "fix": "Book an in-person examination within days with a chaperone offered — and send the referral and scan request in parallel so nothing waits."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about, or not using, the orchidopexy history.",
     "why": "Undescended testis is a known risk factor; missing it looks like incomplete data gathering.",
     "fix": "Ask directly about childhood surgery, then use it in the explanation."
    },
    {
     "dom": "rto",
     "fail": "Taking “my girlfriend made me come” at face value and never exploring his own worries.",
     "why": "Feedback: “did not identify or respond to cues”. The bravado is the cue.",
     "fix": "“Had you looked it up before booking? What worried you most?” — then pause and let him answer."
    },
    {
     "dom": "rto",
     "fail": "Hearing the fear of losing a testicle or fertility and answering “let’s not get ahead of ourselves”.",
     "why": "Deferring the central fear feels dismissive and can drive avoidance of the referral.",
     "fix": "Give the facts now: high cure rates, the other testis usually preserves hormones and fertility, sperm storage before treatment, prosthesis."
    },
    {
     "dom": "gs",
     "fail": "Using “two-week-wait” and “germ cell tumour” without explanation, then ending with “any questions?”.",
     "why": "Jargon and no check of understanding are standard failing feedback statements.",
     "fix": "Plain words — “an urgent scan and a specialist appointment, usually within two weeks” — and teach-back: “What will you tell your girlfriend?”"
    }
   ]
  }
 },
 "testicular-torsion": {
  "stem": {
   "name": "Kai Robson",
   "age": "15-year-old boy",
   "pmh": [
    "None recorded"
   ],
   "meds": [
    "No regular medication",
    "Ibuprofen given by mother today (over the counter)"
   ],
   "allergy": "None recorded",
   "recent": "No recent consultations. Mother is on the practice list; Kai is present with her during the call.",
   "reason": "Telephone call from mother: “sudden pain in his groin during football, he’s been sick”."
  },
  "knowledge": {
   "guideline": "EAU Guidelines on Paediatric Urology — acute scrotum (international; no UK guideline) · GMC 0–18 years (2007, updated 2018)",
   "summary": "Sudden severe testicular pain with vomiting in a teenager is torsion until a surgeon says otherwise. The GP’s job is to get him to hospital now, not to diagnose it on the phone.",
   "points": [
    {
     "h": "Recognise the pattern",
     "t": "Abrupt onset of severe unilateral testicular or lower abdominal and groin pain, often with nausea or vomiting, in an adolescent. Teenage boys frequently describe it as “groin” or “stomach” pain out of embarrassment — ask specifically about the testicle."
    },
    {
     "h": "Time is testis",
     "t": "The chance of saving the testis falls with every hour of lost blood supply, and outcomes are best when it is untwisted within a few hours of onset. EAU (international): suspected torsion needs urgent surgical exploration."
    },
    {
     "h": "Don’t let tests delay theatre",
     "t": "Torsion is a clinical diagnosis. Ultrasound can be falsely reassuring and must not delay exploration. No GP examination should hold up transfer when the story fits."
    },
    {
     "h": "The differential",
     "t": "Epididymo-orchitis usually comes on over hours to days with fever, urinary symptoms or discharge. Torsion of a testicular appendage causes more localised pain. Neither can be safely assumed by phone — the surgeon decides."
    },
    {
     "h": "Misleading reassurance",
     "t": "Exercise can trigger torsion; a coincidental knock is common. Analgesia may blunt the pain. Pain easing can mean spontaneous untwisting, which can recur — it still needs assessment."
    },
    {
     "h": "Talking with a 15-year-old",
     "t": "GMC 0–18 years: involve the young person directly, respect his dignity and views, and work with the parent. Embarrassment is the main reason for delay, so address it head-on."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and focus",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, it’s Dr Lee. Thanks for ringing. Tell me what’s happened to Kai.",
    "dom": "rto",
    "why": "Open start, but listening for the time-critical detail"
   },
   {
    "who": "pt",
    "text": "(Mother) Sorry to bother you, it’s probably nothing. He’s got really bad pain in his groin, came on suddenly at football about an hour and a half ago. He’s been sick once. I gave him ibuprofen. It’s a pulled muscle, isn’t it? He doesn’t want a fuss."
   },
   {
    "who": "dr",
    "text": "You’re not bothering me — I’m glad you rang now. I need to ask a couple of quick, quite direct questions, and it may be easiest if Kai answers some himself. Is he there?",
    "dom": "gs",
    "why": "Signals urgency and a focused structure from the first minute"
   },
   {
    "who": "pt",
    "text": "(Mother) He’s here. He’s mortified."
   },
   {
    "phase": "Focused history",
    "clock": "1–3 min",
    "who": "dr",
    "text": "Kai, it’s Dr Lee. I promise this is completely routine for me, and nothing you say will embarrass me. Is the pain actually in one of your testicles, or higher up in the groin?",
    "dom": "rto",
    "why": "Speaks directly to the teenager, normalises, asks the key question"
   },
   {
    "who": "pt",
    "text": "(Kai, quietly) …It’s my left ball. It really hurts."
   },
   {
    "who": "dr",
    "text": "Thanks, Kai, that helps a lot. Did it come on suddenly, over seconds or minutes, rather than building up over a day?",
    "dom": "tasks",
    "why": "Establishes abrupt onset — the key discriminator"
   },
   {
    "who": "pt",
    "text": "(Kai) Suddenly. I was running and it just went. Then I threw up."
   },
   {
    "who": "dr",
    "text": "Any fever, stinging when you wee, or has it happened before and gone away on its own?",
    "dom": "tasks",
    "why": "Briefly screens for infection and previous intermittent episodes"
   },
   {
    "who": "pt",
    "text": "(Kai) No fever. Maybe a quick twinge a few weeks ago, it went away."
   },
   {
    "phase": "Decision and explanation",
    "clock": "3–5 min",
    "who": "dr",
    "text": "Okay. I’m going to be really clear with you both. Sudden, severe pain in one testicle that makes you sick is something we treat as an emergency, because it can be the testicle twisting on its cord and cutting off its own blood supply. That’s called torsion.",
    "dom": "tasks",
    "why": "Recognises likely torsion and names it plainly"
   },
   {
    "who": "pt",
    "text": "(Mother) Oh God. But he might have taken a knock in the game — couldn’t it be that?"
   },
   {
    "who": "dr",
    "text": "It could be something else, and I hope it is. But football and a knock don’t rule torsion out — exercise can even set it off. The only people who can rule it out are the surgeons at the hospital, and it needs to happen quickly because the testicle only survives a limited time without blood.",
    "dom": "tasks",
    "why": "Rejects the musculoskeletal label and explains time-critical salvage"
   },
   {
    "who": "pt",
    "text": "(Mother) How quickly?"
   },
   {
    "who": "dr",
    "text": "Now. Not after the ibuprofen kicks in, not tomorrow. He’s about ninety minutes in, so there’s time — but only if you leave straight away.",
    "dom": "tasks",
    "why": "Arranges immediate emergency assessment"
   },
   {
    "phase": "Overcoming embarrassment",
    "clock": "5–7 min",
    "who": "dr",
    "text": "Kai, I know hospital and people looking down there is the last thing you want. Can I be honest? Doctors in A&E see this every week. For them it’s a normal day. And going now is what keeps your testicle safe.",
    "dom": "rto",
    "why": "Addresses the embarrassment that could stall transfer"
   },
   {
    "who": "pt",
    "text": "(Kai) Do I have to? Can’t I just see if it goes off?"
   },
   {
    "who": "dr",
    "text": "That’s a fair question. If we wait and it is a twist, there’s a real chance of losing that testicle. If you go and it’s nothing serious, you’ve lost an evening. I’d choose the evening every time. What do you think?",
    "dom": "rto",
    "why": "Explains the risk trade-off in his terms and invites his view"
   },
   {
    "who": "pt",
    "text": "(Kai) …Okay. Fine. Let’s go."
   },
   {
    "who": "dr",
    "text": "Good decision — and that’s a grown-up call to make. You can ask for a male doctor, or for your mum to step out, whenever you want. That’s your choice.",
    "dom": "rto",
    "why": "Respects his dignity and autonomy as a 15-year-old"
   },
   {
    "phase": "Practical plan",
    "clock": "7–10 min",
    "who": "dr",
    "text": "Mum, can you drive him straight to the emergency department now? If there’s any delay, or he gets much worse, call 999 instead.",
    "dom": "gs",
    "why": "Clear transport instruction with an escalation route"
   },
   {
    "who": "pt",
    "text": "(Mother) I can drive him. It’s not far."
   },
   {
    "who": "dr",
    "text": "Good. At the desk, say: “sudden severe testicular pain with vomiting, possible torsion.” Those words get him seen fast. I’ll also ring ahead to the on-call team.",
    "dom": "gs",
    "why": "Gives the escalation phrase and arranges a handover"
   },
   {
    "who": "pt",
    "text": "(Mother) Okay, writing it down."
   },
   {
    "who": "dr",
    "text": "And Kai, nothing to eat or drink from now, not even a snack in the car, because you might need a small operation.",
    "dom": "tasks",
    "why": "Nil by mouth in anticipation of theatre"
   },
   {
    "who": "pt",
    "text": "(Kai) Okay."
   },
   {
    "phase": "Safety-net and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "One important thing: if the pain suddenly gets better on the way, still go. A twist can undo itself and twist again, so it still needs checking tonight.",
    "dom": "gs",
    "why": "Warns that pain easing does not exclude torsion"
   },
   {
    "who": "pt",
    "text": "(Mother) Right. Still go."
   },
   {
    "who": "dr",
    "text": "Just so I know we’re on the same page — tell me what you’re doing now?",
    "dom": "gs",
    "why": "Checks understanding and commitment to act"
   },
   {
    "who": "pt",
    "text": "(Mother) Leaving now, straight to A&E, nothing to eat or drink, tell them possible torsion, 999 if he gets worse."
   },
   {
    "who": "dr",
    "text": "Perfect. You both did the right thing ringing. I’ll document this and let the hospital know he’s coming. Go now — good luck, Kai.",
    "dom": "rto",
    "why": "Affirms the family and ends promptly so they can leave"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let the mother describe events, then moved quickly to the key facts without a long clerking.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Worked with a mortified teenager and a minimising parent; practical barriers such as transport.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “groin” as likely testicular pain, the vomiting, the embarrassment and the “pulled muscle” framing.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Mother’s idea (muscle strain or knock), both family members’ concern (embarrassment, fuss), expectation (manage at home).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Recognised that no GP examination or scan should delay transfer; the investigation is surgical exploration in hospital.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Torsion versus epididymo-orchitis, torsion of an appendage and muscular strain, using onset, vomiting, fever and urinary symptoms.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Treated sudden severe testicular pain with vomiting as torsion until proven otherwise; noted a possible earlier self-resolving episode.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated suspected testicular torsion clearly and explained why it is time-critical.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Immediate ED attendance (999 if delay), escalation phrase, ring-ahead to the on-call team, nil by mouth.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Addressed the teenager’s embarrassment and autonomy, and confirmed transport.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Pain easing still means go, 999 if worse, teach-back of the plan, documented and hospital informed.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Children & young people"
   ],
   "stem": {
    "name": "Kai Robson",
    "age": "15 years · male",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "Nil regular",
     "Ibuprofen today (given by mother)"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Telephone request from mother: pain came on during football about 90 minutes ago, vomited once.",
    "reason": "“Is it a pulled muscle? He doesn’t want to go to hospital.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Hear the headline",
     "d": "Sudden pain, vomiting, 90 minutes. Say you are glad she rang and ask to speak to Kai."
    },
    {
     "t": "1–3",
     "h": "Three questions",
     "d": "Is it the testicle? Sudden or gradual? Fever or urinary symptoms? Enough to act — no full history."
    },
    {
     "t": "3–5",
     "h": "Decide and say it",
     "d": "Torsion until proven otherwise. Reject the pulled-muscle label and explain the time limit without panic."
    },
    {
     "t": "5–7",
     "h": "Remove the barrier",
     "d": "Speak to Kai about embarrassment. Offer choices he controls (male doctor, mum stepping out). Get his agreement."
    },
    {
     "t": "7–12",
     "h": "Get them moving",
     "d": "Transport, the escalation phrase, nil by mouth, ring ahead, pain easing still means go. Teach-back, then let them leave."
    }
   ],
   "wordPics": {
    "fail": "Accepts “pulled muscle”; takes a long history; offers an appointment later today or tomorrow, or suggests waiting for ibuprofen; asks for a GP examination or scan first; speaks only to the mother; no nil-by-mouth or pain-easing advice.",
    "pass": "Recognises likely torsion and sends him to ED immediately; explains why it is urgent; speaks to Kai; gives a basic safety-net and confirms they are going.",
    "exc": "All of the above within the first few minutes, plus: turns the embarrassment around with dignity and choices Kai controls; solves the practical barriers; gives the escalation phrase and nil-by-mouth advice; rings ahead; warns that pain easing still means go; teach-back before ending."
   },
   "avoid": [
    {
     "dont": "“Give the ibuprofen an hour and ring back if it’s no better.”",
     "instead": "“Don’t wait for the painkiller — he needs to be seen at the hospital now.”",
     "why": "Any watchful wait costs time the testis may not have."
    },
    {
     "dont": "“Bring him down to the surgery and I’ll have a look.”",
     "instead": "“Go straight to A&E — the surgeons are the ones who can sort this.”",
     "why": "A GP examination adds delay and cannot exclude torsion."
    },
    {
     "dont": "“Mum, can you check his testicle for swelling?”",
     "instead": "“Kai, is the pain in one of your testicles? There’s nothing embarrassing about telling me.”",
     "why": "Bypassing the teenager adds shame and loses his cooperation; speak to him directly."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Adolescent embarrassment",
     "t": "Shame about genital symptoms is a leading cause of late presentation in teenage boys. Normalise it and give him control over who is present."
    },
    {
     "h": "Family logistics",
     "t": "Transport, care of other children or work commitments can stall an emergency transfer. Ask, and solve it during the call."
    }
   ],
   "legal": [
    {
     "h": "Consent at 15",
     "t": "A competent 15-year-old can consent to his own examination and treatment (Gillick competence), and his views should be respected. A parent can also consent on his behalf, and GMC 0–18 years allows urgent treatment to prevent serious harm in an emergency."
    },
    {
     "h": "Documentation",
     "t": "Record the time of onset, the advice given, the escalation phrase and that the family agreed to attend."
    }
   ],
   "professional": [
    {
     "h": "Working with young people",
     "t": "GMC 0–18 years (2007, updated 2018): involve children and young people in decisions, communicate in a way they understand, and respect privacy."
    },
    {
     "h": "Remote triage",
     "t": "When a telephone history fits an emergency, the safe action is direct transfer, not a face-to-face GP review. Ringing ahead supports continuity."
    }
   ],
   "community": [
    {
     "h": "Information for teenagers",
     "t": "NHS information on testicular torsion; school nurse and youth health services for sexual health questions afterwards."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Sudden severe testicular pain, especially with nausea or vomiting — emergency surgical assessment now",
     "Groin or lower abdominal pain in a teenage boy — always ask about the testicle",
     "Previous brief self-resolving episodes suggest intermittent torsion"
    ],
    "psychosocial": [
     "Teenager’s embarrassment and reluctance to be examined",
     "Parent’s wish not to “make a fuss”",
     "Transport and anything that could stop them leaving now"
    ],
    "ice": [
     "Idea: “a pulled muscle or a knock from football”",
     "Concern: embarrassment and wasting hospital time",
     "Expectation: advice to rest and take ibuprofen at home"
    ]
   },
   "diagnosis": "Suspected left testicular torsion: sudden severe testicular pain during exercise with vomiting in a 15-year-old, about 90 minutes from onset, with a possible previous brief episode. Needs immediate emergency surgical assessment.",
   "diagnosisLay": "“The testicle hangs on a cord that carries its blood supply. Sometimes it twists, like a hosepipe kinking, and the blood can’t get through. Surgeons can untwist it, but only if they get to it quickly.”",
   "management": {
    "reflectIce": "“I know you both hoped it was a pulled muscle, and Kai, I know this is embarrassing. Going now is what protects you, and nobody at the hospital will think twice about it.”",
    "psychosocial": "Give Kai choices he controls; confirm transport and remove any barrier to leaving before ending the call.",
    "sharedPlan": [
     "Immediate ED attendance by car now, or 999 if any delay or deterioration",
     "Use the phrase “sudden severe testicular pain with vomiting, possible torsion”",
     "Nil by mouth; GP rings ahead to the on-call team and documents"
    ],
    "safetyNet": [
     "Pain easing does not mean it has resolved — still attend",
     "999 if pain worsens, he becomes faint or unwell en route"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Acute and chronic scrotal pain",
    "s": "Visual algorithm · torsion first",
    "href": "algorithms/scrotal-pain.html"
   },
   {
    "ic": "💠",
    "t": "Surgical problems in children",
    "s": "Protocol · emergencies",
    "href": "management/surgical-problems-children.html"
   }
  ],
  "pitfalls": {
   "intro": "This is a time-critical station. The clinical decision is simple; candidates fail by taking too long to reach it, by being drawn into the pulled-muscle story, or by never winning over an embarrassed teenager.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Offering a same-day GP appointment “so I can examine him”.",
     "why": "Examination cannot exclude torsion and the journey wastes time. Feedback: “management plan not appropriate to the urgency”.",
     "fix": "Send him straight to ED and ring ahead. Say why: “the surgeons are the ones who can check and fix this.”"
    },
    {
     "dom": "tasks",
     "fail": "A full systematic history before reaching a decision at minute eight.",
     "why": "Poor prioritisation in an emergency is marked down in Tasks and Global Skills.",
     "fix": "Three questions — testicle, sudden onset, fever or urinary symptoms — then decide by minute three to five."
    },
    {
     "dom": "tasks",
     "fail": "Accepting the knock last week or the football as the explanation.",
     "why": "Exercise and minor trauma often precede torsion; an alternative story does not exclude it.",
     "fix": "“That may be part of it, but it doesn’t rule out a twist — only the hospital can.”"
    },
    {
     "dom": "rto",
     "fail": "Speaking only to the mother about Kai’s testicle while he listens.",
     "why": "Feedback: “did not involve the patient”. It deepens his embarrassment and resistance.",
     "fix": "Ask to speak to him, normalise it, and offer choices he controls."
    },
    {
     "dom": "gs",
     "fail": "No nil-by-mouth advice, no escalation phrase, and no warning that easing pain still needs assessment.",
     "why": "Incomplete safety-netting is a standard failing statement in urgent-care stations.",
     "fix": "Nil by mouth, “possible torsion” at the desk, 999 if worse, and “if it eases, still go”."
    },
    {
     "dom": "gs",
     "fail": "Ending the call without confirming they are actually leaving and how.",
     "why": "Feedback: “did not check understanding or agreement with the plan”.",
     "fix": "“Tell me what you’re doing now” — then end quickly so they can go."
    }
   ]
  }
 },
 "vertigo-bppv-stroke": {
  "stem": {
   "name": "Gordon Whitfield",
   "age": "61-year-old man",
   "pmh": [
    "Hypertension",
    "Type 2 diabetes",
    "Ex-smoker",
    "Previous episode of BPPV (years ago, per patient)"
   ],
   "meds": [
    "Amlodipine",
    "Metformin",
    "Atorvastatin"
   ],
   "allergy": "None recorded",
   "recent": "Telephone call booked this morning: spinning since waking, vomiting. Retired electrician.",
   "reason": "“The room won’t stop spinning.” Asking for a tablet for vertigo."
  },
  "knowledge": {
   "guideline": "NICE NG128 (2019, updated 2022) · National Clinical Guideline for Stroke for the UK and Ireland (ICSWP, 2023) · DVLA Assessing fitness to drive",
   "summary": "Constant vertigo with vomiting and inability to walk in a man with vascular risk factors and recent transient focal symptoms is a posterior-circulation stroke until proven otherwise. The action is 999, not a vestibular sedative.",
   "points": [
    {
     "h": "Peripheral or central?",
     "t": "BPPV causes brief spells of vertigo, lasting seconds, set off by head movement, and the person can usually walk between spells. Constant vertigo for hours, severe vomiting and being unable to stand or walk unaided point to a central cause in the cerebellum or brainstem."
    },
    {
     "h": "Look for the company it keeps",
     "t": "Ask directly about slurred speech, swallowing difficulty, double vision, facial or limb numbness or weakness, clumsiness, and new headache or neck pain (consider vertebral artery dissection). Any one of these with acute vertigo makes a central cause far more likely."
    },
    {
     "h": "FAST can miss the back of the brain",
     "t": "NICE NG128 recommends a validated tool such as FAST outside hospital to screen for stroke, but posterior-circulation strokes often present with vertigo, imbalance and visual symptoms without face, arm or speech signs. A negative FAST does not make this safe."
    },
    {
     "h": "Recent TIAs raise the stakes",
     "t": "His two recent episodes of jumbled speech and a clumsy right hand sound like TIAs. NICE NG128: for a suspected TIA with resolved symptoms, give aspirin 300 mg immediately and arrange specialist assessment within 24 hours of onset. That pathway does not apply today, because his symptoms are ongoing."
    },
    {
     "h": "Suspected stroke: 999, no aspirin at home",
     "t": "NICE NG128: aspirin for acute ischaemic stroke is given only after brain imaging has excluded haemorrhage. So with ongoing symptoms, call 999 and do not give aspirin at home. Keep him nil by mouth until a swallow screen has been done."
    },
    {
     "h": "Vestibular sedatives mask, they don’t treat",
     "t": "Prochlorperazine or cyclizine may dampen the vomiting but lose the time window for hyperacute treatment. Prescribing one over the phone with reassurance is the classic error in this presentation."
    },
    {
     "h": "Driving",
     "t": "DVLA: after a TIA or stroke a car driver must stop driving for at least 1 month and may restart only when a clinician says it is safe. Sudden, disabling or recurrent dizziness must be reported to the DVLA."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Mr Whitfield? It’s Dr Lee from the surgery. I’ve got a note that you’re dizzy. Tell me what’s been happening.",
    "dom": "rto",
    "why": "Open question; lets him give his story first"
   },
   {
    "who": "pt",
    "text": "Sorry to ring, the wife made me. Everything’s spinning, has done since I woke up, and I’ve been sick twice. I had this years back — ear crystals — so I reckon it’s that. Can you just send a tablet down? I don’t want to be sat in A&E all day."
   },
   {
    "who": "dr",
    "text": "You rang, and that was right. I do want to help you feel better. But the right treatment depends on what’s causing it, and this sort of spinning has a few causes. Can I ask some quick, specific questions first? Then we’ll decide together.",
    "dom": "gs",
    "why": "Sets an agenda without agreeing to the tablet"
   },
   {
    "who": "pt",
    "text": "Go on."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When you had the ear crystals before, how did the spinning behave? And how is it behaving today?",
    "dom": "tasks",
    "why": "Uses his own comparison to test the BPPV label"
   },
   {
    "who": "pt",
    "text": "Before, it came when I turned over in bed — a few seconds and gone. Today it’s just… there. All the time. Hasn’t stopped since I woke."
   },
   {
    "who": "dr",
    "text": "Constant since you woke. Can you stand and walk on your own at the moment?",
    "dom": "tasks",
    "why": "Asks about gait, the key discriminator"
   },
   {
    "who": "pt",
    "text": "Not really. I go sideways. (Wife in background: “He walked into the doorframe!”)"
   },
   {
    "who": "dr",
    "text": "Thank you — and please thank your wife, that’s important. Is she able to come to the phone for a moment?",
    "dom": "tasks",
    "why": "Values and seeks the collateral history"
   },
   {
    "who": "pt",
    "text": "(Wife) He’s not right, doctor. His face looked a bit off earlier, sort of lopsided. I told him to ring."
   },
   {
    "who": "dr",
    "text": "That’s really helpful, thank you. Mr Whitfield, a few more checks. Any double vision, numbness, trouble swallowing, or new headache or neck ache today?",
    "dom": "tasks",
    "why": "Screens for associated brainstem and cerebellar symptoms"
   },
   {
    "who": "pt",
    "text": "My neck’s a bit sore. Vision’s a bit funny, I suppose. Swallowing’s fine."
   },
   {
    "who": "dr",
    "text": "And before today — have you had any odd episodes lately, where your speech or a hand didn’t work properly, even for a short while?",
    "dom": "tasks",
    "why": "Asks directly about preceding TIAs"
   },
   {
    "who": "pt",
    "text": "(Pause.) A couple of funny dos in the last fortnight. Words came out jumbled. My right hand went clumsy for a bit. I put it down to being tired."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Thank you for telling me that — I know you’d rather not have. When those happened, did anything cross your mind about what they might be?",
    "dom": "rto",
    "why": "Invites the buried fear without putting words in his mouth"
   },
   {
    "who": "pt",
    "text": "…I wondered if they were mini-strokes. My mate had one. But I didn’t want to make a fuss. And hospitals at my age — you go in and you don’t come out the same."
   },
   {
    "who": "dr",
    "text": "That sounds frightening, and it makes sense you’d rather this was the ear crystals — that answer is familiar and doesn’t need a hospital. I’d want the same. But I have to be honest with you about what I’m hearing.",
    "dom": "rto",
    "why": "Names why he is anchoring on BPPV, kindly"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "The ear crystals give short spells when you move your head. Today is different: constant spinning, being sick, not able to walk straight, a sore neck, your face looking lopsided, and those speech and hand episodes. With your blood pressure and diabetes, that pattern can be a stroke at the back of the brain.",
    "dom": "tasks",
    "why": "Explains the central features in plain words and links them to his risk"
   },
   {
    "who": "pt",
    "text": "A stroke? But my arms work. It’s just dizziness."
   },
   {
    "who": "dr",
    "text": "That’s exactly why this kind is often missed — it doesn’t always cause the weak arm people expect. It gets mistaken for an ear problem, and a tablet for the spinning would just cover it up while time runs out. The stroke team have treatments that only work if they see you quickly.",
    "dom": "tasks",
    "why": "Explains why a vestibular sedative would be dangerous"
   },
   {
    "who": "pt",
    "text": "So you’re not sending the tablet."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "No. What you need is the stroke team, now. I want to call an ambulance for you — 999, today. Not a GP appointment and not A&E tomorrow. Will you let me do that?",
    "dom": "tasks",
    "why": "Arranges emergency assessment clearly and asks for agreement"
   },
   {
    "who": "pt",
    "text": "I don’t want to be a burden on them. They’re that busy."
   },
   {
    "who": "dr",
    "text": "You’re not a burden — this is exactly what they’re there for. And the thing you were worried about, those mini-strokes, is the very reason to go now: getting seen quickly is how we treat this and try to stop a bigger one. Your wife’s instinct was right.",
    "dom": "rto",
    "why": "Uses his own fear and his wife’s concern to motivate acceptance"
   },
   {
    "who": "pt",
    "text": "(Quietly.) Alright. If you think so."
   },
   {
    "who": "dr",
    "text": "Thank you. I’ll ring 999 as soon as we finish and tell them it’s a suspected stroke. Please don’t eat or drink anything, and don’t take any aspirin — they need to scan you first. Stay sitting or lying down so you don’t fall. Your wife stays with you and tells them about the speech, the hand, the doorframe and your face.",
    "dom": "tasks",
    "why": "Nil by mouth, no aspirin before imaging, falls prevention, collateral for the crew"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "While you wait: if your face droops more, an arm or leg weakens, speech slurs, you get very drowsy or the headache gets suddenly worse, ring 999 again and tell them it’s worse. And please don’t drive — today or after, until the doctors say it’s safe.",
    "dom": "gs",
    "why": "Specific deterioration triggers and driving advice"
   },
   {
    "who": "pt",
    "text": "Right. Okay."
   },
   {
    "who": "dr",
    "text": "So that I know I’ve explained it properly — what’s going to happen in the next few minutes?",
    "dom": "rto",
    "why": "Teach-back to confirm he will accept the ambulance"
   },
   {
    "who": "pt",
    "text": "You’re ringing the ambulance, I’m not eating or drinking, the wife tells them everything. And I sit tight."
   },
   {
    "who": "dr",
    "text": "Exactly right. I’ll document all of this and ring your wife later today to check you’ve been seen. Ringing this morning was the right thing to do, Gordon.",
    "dom": "gs",
    "why": "Documents, closes the loop and follows up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question first; let him give the “ear crystals” story, then agreed to ask specific questions before deciding on treatment.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Retired, lives with his wife; fear of hospital and of being a burden; the wife as a reliable witness and support.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “the wife made me”, the doorframe, the face “looking off” and the “funny dos”, and explored each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (old BPPV back), concern (hospital, being a burden, buried fear of mini-strokes), expectation (a tablet, no A&E).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Recognised that a phone call cannot exclude stroke; needs emergency brain imaging. Collateral from his wife in place of an examination.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "BPPV vs vestibular neuritis vs posterior-circulation stroke or TIA vs vertebral artery dissection (new neck pain).",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about gait, diplopia, dysarthria, dysphagia, numbness, weakness, headache and neck pain; elicited the preceding TIA-like episodes.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated suspected posterior-circulation stroke, with recent TIAs, in plain words; did not accept the BPPV label.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "999 now; no prochlorperazine; no aspirin before imaging; nil by mouth; stay seated; wife to give the history to the crew.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Linked hypertension, type 2 diabetes and ex-smoking to his stroke risk; secondary prevention left to the stroke team.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named deterioration triggers, no driving (DVLA), teach-back, documentation and a follow-up call to his wife.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "New & undifferentiated presentations",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Gordon Whitfield",
    "age": "61 years · male",
    "pmh": [
     "Hypertension",
     "Type 2 diabetes",
     "Ex-smoker",
     "BPPV (historical, patient-reported)"
    ],
    "meds": [
     "Amlodipine",
     "Metformin",
     "Atorvastatin"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Telephone triage note: “vertigo since waking, vomited x2, wants tablet”. Wife in background concerned.",
    "reason": "Telephone call. “Can you just send down whatever tablet stops the spinning?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agenda",
     "d": "He opens with a diagnosis and a request. Acknowledge both, then agree to ask questions before any tablet."
    },
    {
     "t": "1–4",
     "h": "Pattern and red flags",
     "d": "Constant or positional? Can he walk? Speak to his wife. Diplopia, dysarthria, dysphagia, numbness, weakness, headache, neck pain. Ask directly about recent episodes."
    },
    {
     "t": "4–6",
     "h": "The buried fear",
     "d": "He suspected the “funny dos” were mini-strokes. Name why the ear diagnosis feels safer."
    },
    {
     "t": "6–10",
     "h": "Explain and act",
     "d": "Suspected posterior-circulation stroke. 999 now. No sedative, no aspirin, nil by mouth, sit down, wife goes with him."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Deterioration triggers, no driving, teach-back, document, ring his wife later."
    }
   ],
   "wordPics": {
    "fail": "Accepts the BPPV self-diagnosis and prescribes prochlorperazine; never asks whether he can walk; ignores the wife; misses the recent speech and hand episodes; or says “go to A&E if it gets worse”.",
    "pass": "Separates constant from positional vertigo, asks about gait and neurological symptoms, finds the recent episodes, and arranges emergency assessment with a basic safety-net.",
    "exc": "All of the above, plus: brings the wife in as a witness; names his buried fear of mini-strokes and uses it to get agreement; explains why a vertigo tablet would be dangerous; no aspirin before imaging, nil by mouth, no driving; teach-back and a follow-up call."
   },
   "avoid": [
    {
     "dont": "“It does sound like your BPPV again — I’ll send some prochlorperazine down.”",
     "instead": "“Before any tablet, is the spinning coming in short bursts when you move, or is it there all the time?”",
     "why": "Accepting the label without testing the pattern is how posterior-circulation strokes are missed."
    },
    {
     "dont": "“You can move your arms and your speech is fine, so it isn’t a stroke.”",
     "instead": "“Strokes at the back of the brain often don’t cause a weak arm — they cause exactly this spinning and unsteadiness.”",
     "why": "FAST-negative does not exclude a posterior-circulation stroke."
    },
    {
     "dont": "“Take an aspirin while you wait for the ambulance.”",
     "instead": "“Don’t take any aspirin or eat or drink — the hospital needs to scan you first.”",
     "why": "NICE NG128: aspirin for suspected acute stroke only after imaging has excluded haemorrhage."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Minimising and fear of hospital",
     "t": "“At my age” and “not a burden” are common reasons older men delay stroke care. The fear needs naming, not arguing with."
    },
    {
     "h": "The wife as witness",
     "t": "She saw the doorframe and his face. A worried partner is often the most reliable historian in a minimising patient — ask to speak to her, with his agreement."
    }
   ],
   "legal": [
    {
     "h": "DVLA",
     "t": "After a TIA or stroke a car driver must stop driving for at least 1 month and restart only when a clinician says it is safe. Sudden, disabling or recurrent dizziness must be reported to the DVLA. Tell him not to drive himself to hospital."
    },
    {
     "h": "Capacity and refusal",
     "t": "If he refused the ambulance, assess his capacity for that decision (Mental Capacity Act 2005). A capacitous refusal must be respected, but explain the risks, keep trying, involve his wife and document carefully."
    }
   ],
   "professional": [
    {
     "h": "Remote consulting limits",
     "t": "A phone call cannot exclude stroke. When the history points to a central cause, escalate rather than try to examine by phone (GMC Good Medical Practice 2024: recognise the limits of your competence and of the setting)."
    },
    {
     "h": "Documentation and follow-up",
     "t": "Record the pattern, the collateral history, the TIA-like episodes, the advice given and the 999 call. Check later that he reached hospital."
    }
   ],
   "community": [
    {
     "h": "After discharge",
     "t": "Stroke Association for patients and carers; secondary prevention review in primary care after the stroke team’s plan."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Constant vertigo for hours with vomiting and inability to stand or walk unaided",
     "Diplopia, dysarthria, dysphagia, facial or limb numbness or weakness, clumsiness",
     "New headache or neck pain (possible vertebral artery dissection)",
     "Recent transient speech or limb symptoms (TIAs) and vascular risk factors"
    ],
    "psychosocial": [
     "Fear of hospital and of being a burden “at my age”",
     "His wife’s alarm as a signal; who is with him now",
     "Driving and practical support for getting to hospital"
    ],
    "ice": [
     "Idea: “It’s the ear crystals again.”",
     "Concern: hospital, being a burden, and a buried fear that the recent episodes were mini-strokes",
     "Expectation: a tablet for vertigo and no A&E"
    ]
   },
   "diagnosis": "Acute constant vertigo with vomiting, gait failure, possible facial asymmetry and new neck pain in a 61-year-old with hypertension, type 2 diabetes and ex-smoking, preceded by two TIA-like episodes: suspected posterior-circulation stroke. Not BPPV.",
   "diagnosisLay": "“The ear crystals give short spins when you move your head. What you have is constant, stops you walking, and came after those speech and hand episodes. That can be a stroke at the back of the brain, which often gets mistaken for an ear problem. It needs the stroke team now.”",
   "management": {
    "reflectIce": "“I can see why the ear crystals feel like the safer answer — and you’ve been wondering if those funny turns were mini-strokes. That’s exactly why we act now.”",
    "psychosocial": "Enlist his wife, reframe going to hospital as sensible rather than a fuss, and make sure he is not alone or driving.",
    "sharedPlan": [
     "999 now for suspected stroke (NICE NG128); GP makes the call and passes on the history",
     "No vestibular sedative; no aspirin before imaging; nil by mouth until a swallow screen",
     "Stay seated or lying; his wife goes with him and describes the episodes"
    ],
    "safetyNet": [
     "Worse face, arm, leg or speech, drowsiness or sudden worse headache: ring 999 again",
     "No driving until cleared (DVLA); GP follow-up call later today"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Vertigo",
    "s": "Case walkthrough · central or peripheral",
    "href": "../cases/vertigo.html"
   },
   {
    "ic": "🗺️",
    "t": "Vertigo pathway",
    "s": "Visual algorithm · red flags",
    "href": "algorithms/vertigo.html"
   },
   {
    "ic": "📋",
    "t": "TIA and stroke",
    "s": "Case walkthrough · NICE NG128",
    "href": "../cases/tia-stroke.html"
   },
   {
    "ic": "💠",
    "t": "TIA and stroke protocol",
    "s": "Aspirin timing · referral",
    "href": "management/tia-stroke.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA guide",
    "s": "Stroke, TIA and dizziness",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by agreeing with the patient. He brings a ready diagnosis and a simple request; the candidate who tests the pattern, listens to his wife and finds the recent episodes will send him to the stroke team.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing prochlorperazine over the phone because he has had BPPV before.",
     "why": "“Management plan not in line with current UK best practice.” BPPV is brief and positional; constant vertigo with gait failure needs emergency assessment.",
     "fix": "Test the pattern first: “Short bursts when you move your head, or there all the time?” Then: “Can you walk on your own?”"
    },
    {
     "dom": "tasks",
     "fail": "Never asking about recent episodes, so the TIAs stay hidden.",
     "why": "“Does not gather sufficient information to make a safe assessment.” He will not volunteer them.",
     "fix": "Ask directly: “Any spells recently where your speech or a hand didn’t work properly, even briefly?”"
    },
    {
     "dom": "tasks",
     "fail": "Advising aspirin at home while waiting for the ambulance.",
     "why": "NICE NG128: in suspected acute stroke, aspirin is given only after imaging has excluded haemorrhage.",
     "fix": "“No aspirin, nothing to eat or drink — they’ll scan you first.”"
    },
    {
     "dom": "rto",
     "fail": "Ignoring the wife in the background, or treating her as interference.",
     "why": "“Does not identify or respond to cues.” Her account (doorframe, face looking off) is the strongest evidence in the call.",
     "fix": "“Can I speak to your wife for a moment? What have you noticed?”"
    },
    {
     "dom": "rto",
     "fail": "Telling him bluntly “you’re having a stroke, you must go in” without meeting his fear, so he refuses.",
     "why": "Correct but unpersuasive; a minimising patient who feels bulldozed may decline care.",
     "fix": "Name the fear he already has about the “funny dos” and use it: “That worry is exactly why we act now.”"
    },
    {
     "dom": "gs",
     "fail": "Closing with “go to A&E if it gets worse”.",
     "why": "Non-specific safety-netting and no confirmed plan. He is already an emergency.",
     "fix": "Make the 999 call yourself or confirm he has, give specific deterioration triggers, check with teach-back and follow up later."
    }
   ]
  }
 },
 "viral-wheeze-child": {
  "stem": {
   "name": "Reuben",
   "age": "2-year-old boy",
   "pmh": [
    "Recurrent wheeze with viral colds — fourth episode this winter",
    "No paediatric intensive care admissions"
   ],
   "meds": [
    "Salbutamol inhaler with spacer and mask (given after A&E attendance)"
   ],
   "allergy": "No known drug allergies",
   "recent": "A&E attendance with the last episode: wheeze treated with salbutamol, discharged. Household: father smokes (reports smoking outside).",
   "reason": "Father has booked a telephone call: wheezy again with a cold, and asking whether Reuben has asthma and needs a preventer."
  },
  "knowledge": {
   "guideline": "NICE NG245 (2024, joint with BTS and SIGN) · BTS/SIGN 158 (2019) acute asthma · NICE NG209 · BNFC",
   "summary": "Wheeze only with colds and no symptoms in between, at age 2, fits episodic viral wheeze. Asthma cannot be confirmed by objective tests under 5, and a regular preventer is not the automatic answer. Technique, a written plan and a smoke-free home are the key interventions.",
   "points": [
    {
     "h": "Viral wheeze or suspected asthma",
     "t": "Episodic viral wheeze: wheeze and cough only with colds, well between episodes. Asthma becomes more likely with interval symptoms (night cough, wheeze with play or laughing when well), atopy such as eczema or allergic rhinitis, or frequent severe episodes."
    },
    {
     "h": "Under-5s in NICE NG245",
     "t": "For children under 5 with suspected asthma, NICE NG245 advises treating on clinical judgement and reviewing regularly; objective tests are attempted once the child reaches 5. An 8 to 12 week trial of twice-daily paediatric low-dose ICS is considered when symptoms suggest a need for maintenance therapy or there are severe acute episodes."
    },
    {
     "h": "Reliever via spacer and mask",
     "t": "BTS/SIGN 158 (2019): an inhaled beta-2 agonist through a pressurised inhaler and spacer is the preferred option for mild to moderate acute wheeze in children. Give one puff at a time into the spacer with tidal breathing. Dose per BNFC and the written plan."
    },
    {
     "h": "Technique is the intervention",
     "t": "A toddler needs an age-appropriate face mask sealed over nose and mouth. Several puffs sprayed at once, a poor seal or no spacer are common reasons for apparent treatment failure. Watch the parent demonstrate."
    },
    {
     "h": "Smoke exposure",
     "t": "NICE NG209: give clear advice about the dangers of second-hand smoke, recommend not smoking in the home or around children, offer very brief advice on stopping and refer to local stop-smoking support."
    },
    {
     "h": "When to escalate",
     "t": "Urgent or emergency review for marked recession, difficulty feeding or talking, exhaustion or drowsiness, cyanosis, or a reliever that does not help or does not last. Severity cannot be fully judged by phone — convert to a face-to-face review if in doubt."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, it’s Dr Lee calling about Reuben. Can I just check I’m speaking to his dad, and is he with you now? Tell me what’s been happening.",
    "dom": "rto",
    "why": "Confirms identity and opens with an open question"
   },
   {
    "who": "pt",
    "text": "Yes, he’s here. Every cold he goes wheezy and chesty — fourth time this winter. A&E gave him the blue inhaler last time and it helped. Has he got asthma? My sister’s lad is on a brown preventer. And honestly, I’m not sure I’m even getting the inhaler into him."
   },
   {
    "who": "dr",
    "text": "Three good questions — is it asthma, does he need a preventer, and the inhaler itself. I’ll make sure we cover all three. First I want to check how he is right now, then we’ll go through the rest. Is that okay?",
    "dom": "gs",
    "why": "Reflects his agenda back and prioritises current safety"
   },
   {
    "who": "pt",
    "text": "Yeah, fine."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Can you look at him for me now? Is he playing and chatting? Is he drinking? And if you lift his top, is the skin between or under his ribs sucking in when he breathes?",
    "dom": "tasks",
    "why": "Assesses current severity by phone using what the parent can see"
   },
   {
    "who": "pt",
    "text": "He’s playing and chatting away. Eating and drinking okay. Bit wheezy, but his ribs aren’t sucking in, no."
   },
   {
    "who": "dr",
    "text": "Good. And when you give the blue inhaler, how long does it help for?",
    "dom": "tasks",
    "why": "Checks reliever response and duration"
   },
   {
    "who": "pt",
    "text": "It helps — he picks up after it."
   },
   {
    "who": "dr",
    "text": "When he hasn’t got a cold, is he completely well? Any coughing at night, or wheezing when he runs about or laughs? Any eczema or hay fever?",
    "dom": "tasks",
    "why": "Separates episodic viral wheeze from interval symptoms and atopy"
   },
   {
    "who": "pt",
    "text": "No, between colds he’s totally fine."
   },
   {
    "who": "dr",
    "text": "Talk me through exactly how you give the inhaler — what do you do, step by step?",
    "dom": "tasks",
    "why": "Explores the technique problem he flagged"
   },
   {
    "who": "pt",
    "text": "I shake it, put it in the spacer, press it a few times and try to hold the mask on. He fights it and wriggles off."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You mentioned your sister’s little boy. What were you hoping we’d decide today?",
    "dom": "rto",
    "why": "Elicits expectation behind the preventer request"
   },
   {
    "who": "pt",
    "text": "I suppose a preventer, so it stops. I had asthma as a kid and it was scary. And… I smoke. I go outside, but I know. I keep thinking maybe it’s me."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me that — it can’t have been easy. It makes sense you’re watchful when you remember how frightening your own asthma was. And going outside to smoke shows how much you’re already trying to protect him.",
    "dom": "rto",
    "why": "Acknowledges fear and guilt without shaming"
   },
   {
    "who": "pt",
    "text": "I just feel like I’m getting it wrong."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "You’re not. What you describe — wheezy only with colds, completely well in between — is what we call viral wheeze. His airways are small, so colds go to his chest. Many children grow out of it as their airways grow. At two, we can’t test for asthma properly, and with nothing in between colds, a daily preventer isn’t usually the answer.",
    "dom": "tasks",
    "why": "Distinguishes viral wheeze from asthma and explains the preventer decision"
   },
   {
    "who": "pt",
    "text": "So not a brown one."
   },
   {
    "who": "dr",
    "text": "Not for now. If he starts coughing at night or wheezing between colds, or the episodes get severe, we’d think again and might try one for a couple of months. What will help most today is the inhaler technique you mentioned.",
    "dom": "tasks",
    "why": "Gives a conditional plan with clear criteria to revisit"
   },
   {
    "who": "dr",
    "text": "Here’s the trick. One puff into the spacer at a time — not several. Hold the mask gently but firmly over his nose and mouth so there’s a seal, and let him breathe normally in and out several times. Then the next puff. Crying doesn’t help the medicine get in, so a cuddle on your lap, or while he’s calm, works best.",
    "dom": "tasks",
    "why": "Coaches spacer and mask technique in plain words"
   },
   {
    "who": "pt",
    "text": "One at a time. I didn’t know that — I’ve been doing a few in one go."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Can I raise the smoking gently? Smoke on clothes, hair and breath still reaches him, even when you’re outside, and it’s one of the biggest triggers for these chests. Stopping would help him more than any inhaler. Our local stop-smoking service gives medicines and support, which makes quitting much more likely to work. Would you like me to refer you?",
    "dom": "tasks",
    "why": "Addresses smoking as a modifiable trigger without shame and offers referral"
   },
   {
    "who": "pt",
    "text": "…Yeah. I’ve been meaning to. Go on."
   },
   {
    "who": "dr",
    "text": "Great. I’ll also send you a written plan: when to give the blue inhaler, how many puffs, and when to get help. And I’d like our nurse to watch you do the inhaler this week, so you feel confident. How does that sound?",
    "dom": "rto",
    "why": "Shared plan with a written action plan and technique check"
   },
   {
    "who": "pt",
    "text": "That’d help. I just want to know I’m doing it right."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Right now he sounds mild. Call 999 if he’s working hard to breathe with his ribs sucking in, can’t drink or talk, is unusually sleepy, or his lips look blue. Ring us the same day if the blue inhaler isn’t helping or he’s needing it more and more.",
    "dom": "gs",
    "why": "Specific 999 and same-day triggers"
   },
   {
    "who": "dr",
    "text": "Before you go, tell me back how you’ll give the inhaler tonight.",
    "dom": "rto",
    "why": "Teach-back of technique"
   },
   {
    "who": "pt",
    "text": "Shake it, into the spacer, mask on tight, one puff, let him breathe a few times, then the next. And ring 999 if his ribs suck in or he goes sleepy or blue."
   },
   {
    "who": "dr",
    "text": "Perfect. Nurse appointment this week, smoking referral today, written plan by text. You’re doing a good job, and this will make it easier.",
    "dom": "gs",
    "why": "Summarises actions and closes with encouragement"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; heard all three of his questions (asthma, preventer, technique) and agreed to cover them.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Household smoking, his own frightening childhood asthma, the cousin on a preventer, and managing a wriggling toddler.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “not sure I’m getting it into him” and the smoking guilt, and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (asthma like his cousin), concern (it’s his fault; his own asthma), expectation (a brown preventer).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Severity assessed by phone through the parent; face-to-face review if uncertain; technique demonstration with the nurse.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Episodic viral wheeze vs suspected asthma (interval symptoms, atopy), with severity of the current episode.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Checked recession, feeding, alertness and reliever response; knows the features needing emergency care.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Explained episodic viral wheeze in plain words and why an asthma label is not applied yet.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Salbutamol via spacer and mask with correct technique; no reflex preventer; clear criteria for an ICS trial (NICE NG245).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Smoking addressed without shame and stop-smoking referral agreed (NICE NG209).",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Written action plan, 999 triggers, nurse technique check this week, review if interval symptoms appear.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Reuben",
    "age": "2 years · male",
    "pmh": [
     "Recurrent wheeze with colds (4 episodes this winter)",
     "No PICU admissions"
    ],
    "meds": [
     "Salbutamol pMDI with spacer and mask (from A&E)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ A&E last episode: wheeze, salbutamol given, discharged. No asthma diagnosis on record. Smoker in household (father).",
    "reason": "Telephone call booked by father. “Has he got asthma, and should he be on a brown inhaler?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agenda",
     "d": "He brings three questions: asthma, preventer, technique. Name all three and say you’ll check how Reuben is first."
    },
    {
     "t": "1–4",
     "h": "Severity and pattern",
     "d": "Ask the father to look: playing, drinking, recession. Reliever response. Interval symptoms, atopy. How he gives the inhaler, step by step."
    },
    {
     "t": "4–6",
     "h": "ICE and the guilt",
     "d": "Why a preventer matters to him: his own childhood asthma and the smoking. Respond with warmth before any advice."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Viral wheeze vs asthma; not a preventer for now, with criteria to revisit. Coach one-puff-at-a-time technique. Raise smoking kindly and offer referral."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Written plan, 999 triggers, nurse technique check. Teach-back of the technique."
    }
   ],
   "wordPics": {
    "fail": "Labels asthma and starts a preventer on request, or dismisses it as “just a cold”; never checks current severity; ignores the technique problem; lectures about smoking or avoids it; no written plan or safety-net.",
    "pass": "Assesses severity by phone; explains viral wheeze and why a preventer is not automatic; corrects spacer technique; mentions smoking and offers support; gives basic safety-netting.",
    "exc": "All of the above, plus: hears the guilt and his own childhood fear and responds before advising; gives clear criteria for when a preventer would be tried; coaches technique so well he can teach it back; gains his agreement to a stop-smoking referral; written plan and nurse check booked."
   },
   "avoid": [
    {
     "dont": "“Yes, it sounds like asthma — I’ll start a brown inhaler.”",
     "instead": "“Wheezy only with colds and fine in between is viral wheeze. A daily preventer isn’t usually the answer for that at his age.”",
     "why": "A reflex label and preventer is not in line with NICE NG245 for this pattern."
    },
    {
     "dont": "“You need to stop smoking — it’s causing his wheeze.”",
     "instead": "“Going outside shows you’re already trying. Smoke on clothes still reaches him, and stopping would help his chest more than any inhaler. Can I help?”",
     "why": "Blame makes him disengage; compassion and an offer of support get a referral."
    },
    {
     "dont": "“Just give him a few puffs when he’s wheezy.”",
     "instead": "“One puff into the spacer at a time, mask sealed, let him breathe normally several times, then the next.”",
     "why": "Vague instructions leave the actual problem — poor technique — untouched."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Household smoking",
     "t": "Smoking outside reduces but does not remove exposure; smoke on clothes and breath still matters. Parental guilt is common and drives avoidance, so the topic needs compassion."
    },
    {
     "h": "Parental anxiety",
     "t": "A parent’s own frightening childhood asthma, and a relative’s child on a preventer, shape expectations. A written plan replaces guesswork at night."
    }
   ],
   "legal": [
    {
     "h": "Smoke-free cars",
     "t": "In England it is illegal to smoke in a private vehicle carrying anyone under 18 (Smoke-free (Private Vehicles) Regulations 2015). Worth mentioning if the family drives."
    }
   ],
   "professional": [
    {
     "h": "Remote assessment of a child",
     "t": "A telephone assessment of a wheezy toddler relies on what the parent can see. Document the features checked and convert to face-to-face review if there is any doubt (GMC Good Medical Practice 2024: recognise the limits of the consultation)."
    },
    {
     "h": "Avoiding premature labels",
     "t": "An asthma code at 2 without objective testing can follow a child for years. Record “episodic viral wheeze” or “suspected asthma” accurately, with a plan to review at 5 (NICE NG245)."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Local stop-smoking service; practice nurse or community pharmacy inhaler technique check; Asthma and Lung UK written action plans and technique videos for parents."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Recession, tracheal tug, difficulty feeding or talking, drowsiness, cyanosis — emergency care",
     "Reliever not helping, or needed more and more — same-day review",
     "Interval symptoms or atopy — rethink the diagnosis (suspected asthma, NICE NG245)"
    ],
    "psychosocial": [
     "Father smokes, tries to smoke outside, and feels guilty",
     "His own childhood asthma was frightening",
     "A wriggling toddler who fights the mask"
    ],
    "ice": [
     "Idea: “He’s got asthma, like my sister’s lad.”",
     "Concern: that his smoking is causing it, and memories of his own asthma",
     "Expectation: a brown preventer inhaler"
    ]
   },
   "diagnosis": "Episodic viral-induced wheeze in a 2-year-old: wheeze only with colds, well between episodes, no interval symptoms, currently mild. Not labelled asthma at this age; review if interval symptoms or severe episodes develop.",
   "diagnosisLay": "“Reuben has small airways, so when he gets a cold it goes to his chest and makes him wheezy. That’s called viral wheeze. It isn’t the same as asthma, and many children grow out of it as they get bigger.”",
   "management": {
    "reflectIce": "“You asked about a preventer because you want this to stop, and because your own asthma frightened you. Let’s do the things that will actually help most right now.”",
    "psychosocial": "Raise smoking with compassion, acknowledge the effort of smoking outside, offer referral to stop-smoking support; involve him as the expert in his own child’s care.",
    "sharedPlan": [
     "Salbutamol via spacer and mask, one puff at a time with tidal breathing (BTS/SIGN 158, 2019); dose per BNFC and the written plan",
     "No regular preventer for now; consider an 8 to 12 week ICS trial if interval symptoms or severe episodes (NICE NG245)",
     "Stop-smoking referral (NICE NG209); nurse technique check this week"
    ],
    "safetyNet": [
     "999 for recession, unable to drink or talk, drowsiness or blue lips",
     "Same-day contact if the reliever isn’t helping; review if symptoms appear between colds"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Wheeze in children",
    "s": "Case walkthrough · NICE NG245",
    "href": "../cases/wheeze-children.html"
   },
   {
    "ic": "🗺️",
    "t": "Wheeze in a child",
    "s": "Visual algorithm · viral wheeze vs asthma",
    "href": "algorithms/wheeze-child.html"
   },
   {
    "ic": "💠",
    "t": "Pre-school wheeze protocol",
    "s": "Episodic vs multiple-trigger · action plan",
    "href": "management/preschool-wheeze.html"
   },
   {
    "ic": "💠",
    "t": "Smoking cessation protocol",
    "s": "Very brief advice · NICE NG209",
    "href": "management/smoking-cessation.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is rarely failed on the diagnosis. It is failed by giving the preventer on request, by skipping the technique problem the father flagged, and by handling the smoking in a way that makes him switch off.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Starting a regular inhaled steroid because the father asked and the cousin has one.",
     "why": "“Management plan not in line with current UK best practice.” Pure episodic viral wheeze is not an automatic indication; NICE NG245 reserves an ICS trial for suspected asthma with persistent or severe features.",
     "fix": "Explain viral wheeze, say “not for now”, and give the specific signs that would change that."
    },
    {
     "dom": "tasks",
     "fail": "Discussing the diagnosis without first checking how Reuben is right now.",
     "why": "“Does not gather sufficient information to make a safe assessment.” A telephone call about a wheezy toddler must establish current severity.",
     "fix": "Ask the father to look: playing, drinking, ribs sucking in, reliever response."
    },
    {
     "dom": "tasks",
     "fail": "Hearing “I’m not sure I’m getting it into him” and moving on.",
     "why": "Poor technique is the likeliest reason the reliever seems to fail, and he raised it himself.",
     "fix": "Ask him to describe each step, then coach one puff at a time with a sealed mask and tidal breathing."
    },
    {
     "dom": "rto",
     "fail": "“You need to stop smoking, it’s making him ill.”",
     "why": "Shaming is flagged as judgemental; he disengages from the whole plan.",
     "fix": "Credit his effort to smoke outside, explain third-hand smoke simply, and offer referral as help, not a verdict."
    },
    {
     "dom": "rto",
     "fail": "Missing the father’s own childhood asthma when he mentions it.",
     "why": "“Does not identify or respond to the patient’s cues.” It explains his anxiety and his wish for a preventer.",
     "fix": "“It makes sense you’re watchful — your own asthma sounds frightening.” Then show how the plan removes the guesswork."
    },
    {
     "dom": "gs",
     "fail": "Ending with “ring back if he gets worse”, with no written plan or named symptoms.",
     "why": "Non-specific safety-netting is a standard failing feedback statement.",
     "fix": "Written action plan, named 999 features, nurse technique check this week, and a teach-back."
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
