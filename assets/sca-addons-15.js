/* ============================================================
   Reasoning GP — The Hot Seat: add-on set, batch 15
   Stem, knowledge, model consultation, scorecard tasks, extras,
   knowledge base, playbook, links and examiner pitfalls for
   22 further cases. Loaded after sca-pitfalls.js and
   before sca-practice.js; merges into the existing maps and
   attaches to the case objects exactly as those files do.
   Educational; original content; primary sources cited.
   ============================================================ */
(function(){
  var ADD = {
 "achilles-tendinopathy": {
  "stem": {
   "name": "Tom Easton",
   "age": "44-year-old man",
   "pmh": [
    "Recreational runner",
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "Several weeks of pain and stiffness at the back of the ankle, worst first thing and at the start of a run. Tender, slightly swollen lump on the tendon. Recently increased his running.",
   "reason": "“What is it, and can I keep running?”"
  },
  "knowledge": {
   "guideline": "[1] JOSPT/APTA clinical practice guideline, midportion Achilles tendinopathy (2024) (international) · [2] MHRA Drug Safety Update: fluoroquinolones (March 2019 and January 2024) · [3] Depo-Medrone SPC and BNF corticosteroid injection monographs · [4] NICE HTG426 (extracorporeal shockwave therapy for Achilles tendinopathy, formerly IPG571) · [5] Maffulli, Am J Sports Med 1998 (clinical tests for Achilles rupture) · [6] NICE NG65 (spondyloarthritis, 2017) · [7] BNF and MHRA Drug Safety Update June 2015 (high-dose ibuprofen)",
   "summary": "Gradual, load-related pain at the back of the heel, stiff first thing and at the start of exercise, with a tender thickened tendon after a jump in training, is Achilles tendinopathy. First make sure it is not a rupture: ask about a sudden pop, check he can stand on tiptoe and do the calf-squeeze test. Then treat with load modification and a progressive loading programme, usually through physiotherapy, and set expectations of about three months. Check for fluoroquinolone use. Do not inject steroid into the Achilles.",
   "points": [
    {
     "h": "Recognise it",
     "t": "Pain and stiffness at the back of the heel that comes on gradually, is worst in the morning and at the start of activity, eases as he warms up and returns afterwards. Mid-portion disease gives a tender, thickened area a few centimetres above the heel bone; insertional disease is tender where the tendon meets the bone. A recent increase in training load is the usual trigger."
    },
    {
     "h": "Exclude rupture",
     "t": "A sudden ‘kicked’ or ‘popped’ feeling, weakness pushing off, inability to do a single-leg tiptoe, a palpable gap and a positive calf-squeeze (Simmonds or Thompson) test point to rupture. The squeeze test is sensitive and specific (Maffulli 1998 [5]), but some people with a rupture can still point the foot using other muscles. Suspected rupture needs same-day orthopaedic or fracture-clinic assessment."
    },
    {
     "h": "Differential and risk factors",
     "t": "Retrocalcaneal bursitis, insertional disease with a bony prominence, gout, a spondyloarthritis enthesitis (NICE NG65 [6]), bilateral tendon thickening from xanthomata, and referred pain. Ask about fluoroquinolone antibiotics: tendon damage can start within 48 hours or months after stopping, and risk is higher over 60, with renal impairment and with a corticosteroid (MHRA [2]). Since January 2024 fluoroquinolones should only be used when other recommended antibiotics are inappropriate."
    },
    {
     "h": "Loading is the treatment",
     "t": "Tendon-loading exercise is the best-supported treatment (JOSPT/APTA 2024 [1]). Common programmes are eccentric heel drops or heavy slow resistance, progressed over about 12 weeks. He can keep running at a lower volume if pain stays at a tolerable level during activity and has settled by the next morning. Heel lifts and footwear changes are adjuncts."
    },
    {
     "h": "Analgesia",
     "t": "Paracetamol or a topical NSAID can help pain; if an oral NSAID is used, use the lowest effective dose for the shortest time (BNF; MHRA June 2015 [7]). Doses as per BNF. Analgesia does not treat the tendon and should not be used to run through pain."
    },
    {
     "h": "What not to do",
     "t": "Do not inject corticosteroid into the Achilles tendon: the product literature states it should not be injected because of rupture risk [3]. Shockwave therapy is available only with special arrangements for governance and consent (NICE HTG426 [4])."
    },
    {
     "h": "Follow-up and referral",
     "t": "Review at around 12 weeks. Refer to physiotherapy early, and to sports medicine or orthopaedics if there is no improvement after about three months of good adherence, if the diagnosis is uncertain, or urgently if rupture is suspected."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Easton, I’m Dr Shah. What can I help with today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "The back of my ankle’s been sore and stiff for a few weeks. It’s worst first thing and when I start a run, then it eases a bit. There’s a tender, slightly swollen lump on the tendon. I’ve upped my running lately. What is it, and can I keep running?"
   },
   {
    "who": "dr",
    "text": "So two questions: what it is, and whether you can keep running. I’d like to ask a few things, have a look at the ankle, and then answer both properly. Is that alright?",
    "dom": "gs",
    "why": "Summarises his two questions and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Yes, that’s exactly what I want to know."
   },
   {
    "phase": "Focused history",
    "clock": "1–5 min",
    "who": "dr",
    "text": "How did it start? Was it gradual, or was there a moment when something went?",
    "dom": "tasks",
    "why": "Onset: gradual versus sudden"
   },
   {
    "who": "pt",
    "text": "Gradual. It just crept up over a few weeks."
   },
   {
    "who": "dr",
    "text": "Have you ever felt a sudden kick or pop at the back of the ankle, as if someone hit you, or found you couldn’t push off?",
    "dom": "tasks",
    "why": "Screens for rupture"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. I can still run, it just hurts."
   },
   {
    "who": "dr",
    "text": "Tell me about the running. What changed?",
    "dom": "tasks",
    "why": "Explores training-load change"
   },
   {
    "who": "pt",
    "text": "I’ve been building up the distance quite quickly, a few more runs a week."
   },
   {
    "who": "dr",
    "text": "Where exactly is the pain: a few centimetres up the tendon, or right where it joins the heel bone? And is it one side only?",
    "dom": "tasks",
    "why": "Mid-portion versus insertional; bilateral disease"
   },
   {
    "who": "pt",
    "text": "Just this side, and a bit up from the heel, where the lump is."
   },
   {
    "who": "dr",
    "text": "Have you had any antibiotics recently, especially one called ciprofloxacin or a similar one, or any steroid tablets or injections?",
    "dom": "tasks",
    "why": "Fluoroquinolone and steroid risk factors"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Any pain or swelling in other joints, back stiffness in the mornings, eye or skin problems, or a hot, red joint like gout?",
    "dom": "tasks",
    "why": "Screens inflammatory arthritis and gout"
   },
   {
    "who": "pt",
    "text": "No, it’s just this."
   },
   {
    "who": "dr",
    "text": "How is it affecting you day to day, at work and outside running?",
    "dom": "rto",
    "why": "Explores impact"
   },
   {
    "who": "pt",
    "text": "It’s mainly the running. I really don’t want to stop."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What do you think is going on?",
    "dom": "rto",
    "why": "Elicits ideas"
   },
   {
    "who": "pt",
    "text": "I assume I’ve strained the tendon from running more."
   },
   {
    "who": "dr",
    "text": "Is anything in particular worrying you?",
    "dom": "rto",
    "why": "Explores concern"
   },
   {
    "who": "pt",
    "text": "Whether it could snap, and whether I have to stop running altogether."
   },
   {
    "phase": "Examination and diagnosis",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’ll look at both ankles, feel along the tendon for thickening or a gap, ask you to go up on tiptoe on each leg, and squeeze your calf while you kneel on the chair to check the tendon is intact.",
    "dom": "tasks",
    "why": "Targeted examination including calf-squeeze test"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "This fits Achilles tendinopathy. It’s an overload problem: the tendon has been asked to do more than it was ready for, so it has become painful and thickened. It isn’t a tear. You’re right to ask about snapping. A sudden pop with weakness is the thing I never want to miss, and that isn’t your story.",
    "dom": "tasks",
    "why": "Names the diagnosis and addresses the rupture fear"
   },
   {
    "who": "pt",
    "text": "That’s a relief. So what do I do?"
   },
   {
    "phase": "Shared management plan",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The treatment that works best is specific strengthening exercises for the calf and tendon, built up gradually over about three months. I’ll refer you to physiotherapy to set that up. You don’t need to stop running completely. Would you be willing to cut the distance for now and keep the pain during a run mild, as long as it has settled by the next morning?",
    "dom": "tasks",
    "why": "Loading programme, physiotherapy and load modification shared as a choice"
   },
   {
    "who": "pt",
    "text": "Yes, I can do shorter, easier runs if it means I keep going."
   },
   {
    "who": "dr",
    "text": "Good. For pain, paracetamol or an anti-inflammatory gel can help. They take the edge off but they don’t heal the tendon, so don’t use them to run through pain. A small heel raise in your shoe can ease it in the meantime.",
    "dom": "tasks",
    "why": "Proportionate analgesia with a caveat"
   },
   {
    "who": "pt",
    "text": "Could I just have a steroid injection to speed things up?"
   },
   {
    "who": "dr",
    "text": "I wouldn’t inject steroid into this tendon. It can weaken it and make a rupture more likely. The exercises are the way to get it stronger. If you ever need an antibiotic, tell the prescriber about this tendon problem, because one group of antibiotics can affect tendons.",
    "dom": "tasks",
    "why": "Declines steroid injection with a reason; future fluoroquinolone caution"
   },
   {
    "who": "pt",
    "text": "Fair enough."
   },
   {
    "phase": "Safety net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you ever feel a sudden pop or kick at the back of the ankle and can’t push off or stand on tiptoe, go to A&E the same day, because a rupture needs treating quickly. Otherwise let’s review in about 12 weeks, or sooner if it’s getting worse despite the changes. What will you do between now and then?",
    "dom": "gs",
    "why": "Rupture safety net, follow-up and teach-back"
   },
   {
    "who": "pt",
    "text": "Shorter runs keeping the pain mild, the physio exercises every day, gel if I need it, no injection. A&E if it pops."
   },
   {
    "who": "dr",
    "text": "Exactly right. It’s slow but it does get better with the exercises.",
    "dom": "gs",
    "why": "Realistic, encouraging close"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him state both questions (what is it, can I run) and used them to set the agenda.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored the effect on daily life and how much running matters to him.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the gradual onset, morning and start-up stiffness, training increase and the tender lump.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: a running strain. Concern: rupture and having to stop running. Expectation: a diagnosis and to keep running.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Both ankles inspected, tendon palpated for thickening or a gap, single-leg tiptoe and calf-squeeze test; no imaging needed.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Mid-portion tendinopathy versus rupture, insertional disease, bursitis, gout, enthesitis and xanthoma.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for a sudden pop, weakness and inability to tiptoe; calf-squeeze test; asked about fluoroquinolones and steroids.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Mid-portion Achilles tendinopathy from overload, without rupture.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Progressive loading programme via physiotherapy; reduced running with a pain rule; paracetamol or topical NSAID; heel raise.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Declined steroid injection with a reason; flagged fluoroquinolone risk for the future.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day A&E for rupture features; review at about 12 weeks; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Tom Easton",
    "age": "44 years · male",
    "pmh": [
     "Recreational runner"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "None recorded",
    "recent": "Weeks of posterior ankle pain, worst in the morning and at the start of runs; tender tendon lump; recent training increase.",
    "reason": "“Can I keep running?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Hear both questions and set the agenda."
    },
    {
     "t": "1–5",
     "h": "History",
     "d": "Onset, pop or weakness, training change, site, antibiotics and steroids, inflammatory features, impact."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "A running strain; fear of rupture and stopping running; wants to keep going."
    },
    {
     "t": "6–8",
     "h": "Examine and name it",
     "d": "Palpate, tiptoe, calf squeeze; explain tendinopathy and why it is not a tear."
    },
    {
     "t": "8–11",
     "h": "Plan together",
     "d": "Loading programme and physiotherapy; reduced running with a pain rule; analgesia; no steroid injection."
    },
    {
     "t": "11–12",
     "h": "Safety net",
     "d": "Rupture features to A&E the same day; review at about 12 weeks; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Tells him to stop running and rest, or offers a steroid injection; does not check for rupture; no timescale.",
    "pass": "Diagnoses tendinopathy, excludes rupture, starts a loading programme with physiotherapy and safety-nets.",
    "exc": "All of that, plus: agrees a pain rule so he can keep running, explains why the injection is avoided, asks about fluoroquinolones, sets a realistic three-month timeline and checks understanding."
   },
   "avoid": [
    {
     "dont": "“You need to stop running until it’s better.”",
     "instead": "“Let’s cut the distance and keep the pain mild while the exercises strengthen the tendon.”",
     "why": "Complete rest deconditions the tendon; load modification keeps him engaged."
    },
    {
     "dont": "“A steroid injection will settle it quickly.”",
     "instead": "“I won’t inject this tendon, because it can weaken it and make a tear more likely.”",
     "why": "Corticosteroid should not be injected into the Achilles tendon (SPC)."
    },
    {
     "dont": "“It’ll be better in a couple of weeks.”",
     "instead": "“It usually takes around three months of exercises.”",
     "why": "False timescales lead to frustration and early return to full load."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Exercise and wellbeing",
     "t": "Running matters to him. A plan that keeps him active supports his wellbeing and his engagement with treatment."
    },
    {
     "h": "Work",
     "t": "Most people with tendinopathy can work normally. If a job involves a lot of standing or walking, discuss adjustments or a fit note only if needed."
    }
   ],
   "legal": [
    {
     "h": "Medicines safety",
     "t": "Record the tendinopathy, so any future fluoroquinolone prescription takes the MHRA warning into account (Drug Safety Update March 2019 and January 2024). Report suspected tendon reactions through the Yellow Card scheme."
    }
   ],
   "professional": [
    {
     "h": "Evidence-based practice",
     "t": "Declining a requested injection with a clear reason, and offering an effective alternative, respects his autonomy while keeping to safe practice (GMC Good medical practice)."
    }
   ],
   "community": [
    {
     "h": "Physiotherapy and running groups",
     "t": "Local MSK physiotherapy (self-referral where available) and graded return-to-run plans through running clubs or community programmes."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Sudden pop or kick with weakness: suspected rupture, same-day assessment",
     "Unable to do a single-leg tiptoe or positive calf-squeeze test",
     "Recent fluoroquinolone or corticosteroid use",
     "Hot, swollen joint or features of inflammatory arthritis"
    ],
    "psychosocial": [
     "Running matters a lot to him",
     "Fear of having to stop running",
     "Wants to keep active"
    ],
    "ice": [
     "Idea: a running strain",
     "Concern: rupture; having to stop running",
     "Expectation: a diagnosis and permission to keep running"
    ]
   },
   "diagnosis": "Mid-portion Achilles tendinopathy after a rapid increase in running load; rupture excluded clinically.",
   "diagnosisLay": "“The tendon has been overloaded by the extra running, so it has become sore and thickened. It isn’t torn. It gets better by gradually making it stronger.”",
   "management": {
    "reflectIce": "“You were worried it might snap and that you’d have to stop running. It isn’t torn, and you can keep running at a lower level.”",
    "psychosocial": "Keep him active; agree a pain rule he can use himself.",
    "sharedPlan": [
     "Physiotherapy referral for a progressive loading programme over about 12 weeks",
     "Reduce running volume; pain mild during runs and settled by next morning",
     "Paracetamol or topical NSAID; heel raise",
     "No corticosteroid injection; caution with future fluoroquinolones"
    ],
    "safetyNet": [
     "Sudden pop, weakness or unable to tiptoe: A&E the same day",
     "Worse despite changes: return sooner",
     "Review at about 12 weeks; refer on if not improving"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Achilles tendinopathy",
    "s": "Protocol · loading, rupture and referral",
    "href": "management/achilles-tendinopathy.html"
   },
   {
    "ic": "🗺️",
    "t": "Ankle pain",
    "s": "Visual algorithm · posterior ankle",
    "href": "algorithms/ankle-pain.html"
   },
   {
    "ic": "🗺️",
    "t": "Foot pain",
    "s": "Visual algorithm · heel pain differential",
    "href": "algorithms/foot-pain.html"
   },
   {
    "ic": "📝",
    "t": "Fit notes",
    "s": "When work needs adjusting",
    "href": "fit-note.html"
   }
  ],
  "pitfalls": {
   "intro": "This is an easy diagnosis. The marks are for excluding rupture, giving the treatment that works and keeping a keen runner on side.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Not checking for rupture.",
     "why": "A missed rupture has a worse outcome if treatment is delayed.",
     "fix": "Ask about a pop, test single-leg tiptoe and do the calf-squeeze test."
    },
    {
     "dom": "tasks",
     "fail": "Advising complete rest.",
     "why": "Loading exercise is the evidence-based treatment.",
     "fix": "Refer for a progressive loading programme and modify, not stop, running."
    },
    {
     "dom": "tasks",
     "fail": "Offering a steroid injection.",
     "why": "Injecting the Achilles risks rupture.",
     "fix": "Decline and explain why."
    },
    {
     "dom": "tasks",
     "fail": "Missing fluoroquinolone exposure.",
     "why": "They cause tendinopathy and rupture (MHRA).",
     "fix": "Ask, and flag the risk for future prescribing."
    },
    {
     "dom": "rto",
     "fail": "Banning running without discussion.",
     "why": "He will likely ignore it and disengage.",
     "fix": "Agree a pain rule and reduced volume together."
    },
    {
     "dom": "gs",
     "fail": "No timescale or safety net.",
     "why": "He may give up early or miss a rupture.",
     "fix": "About three months; A&E for a sudden pop; review at 12 weeks."
    }
   ]
  }
 },
 "assisted-dying-request": {
  "stem": {
   "name": "Harold Vance",
   "age": "67-year-old man",
   "pmh": [
    "Terminal cancer (primary site not recorded in this summary)"
   ],
   "meds": [
    "See repeat list (not detailed in this summary)"
   ],
   "allergy": "Not recorded",
   "recent": "Cancer now recorded as terminal.",
   "reason": "Booked to discuss “plans for the future”."
  },
  "knowledge": {
   "guideline": "[1] Suicide Act 1961, section 2 (England and Wales) · [2] CPS: Suicide: Policy for Prosecutors in Respect of Cases of Encouraging or Assisting Suicide (DPP, 2010, updated October 2014) · [3] GMC: When a patient seeks advice or information about assistance to die · [4] GMC: Treatment and care towards the end of life · [5] BMA: physician-assisted dying policy (neutral position, 2021) · [6] NICE NG142 End of life care for adults: service delivery · [7] NICE CG91 Depression in adults with a chronic physical health problem · [8] NICE NG225 Self-harm · [9] Mental Capacity Act 2005",
   "summary": "As of September 2026, assisting suicide remains a criminal offence in England and Wales. The Terminally Ill Adults (End of Life) Bill 2024–26 fell when the session ended on 29 April 2026 without completing its Lords stages, and the reintroduced 2026–27 Bill was defeated at Commons second reading on 11 September 2026 (270 to 286). There is no Act and no commencement date. The doctor listens, explores the reasons, explains the law, and commits to excellent palliative care.",
   "points": [
    {
     "h": "The law now",
     "t": "Encouraging or assisting suicide is an offence under section 2 of the Suicide Act 1961 [1]. The DPP policy lists factors for and against prosecution; one factor favouring prosecution is that the suspect was acting as a doctor or other healthcare professional and the person was in their care [2]. No assisted dying law is in force in England and Wales, and no bill is currently progressing (September 2026)."
    },
    {
     "h": "What the GMC expects",
     "t": "Listen and discuss the reasons for the request, respectfully and compassionately. Limit advice or information to explaining that it is a criminal offence to encourage or assist suicide. Assess unmet palliative care needs, including pain, other symptoms, anxiety and depression. Do not give advice or information that would encourage or assist him [3]."
    },
    {
     "h": "What is lawful",
     "t": "A patient with capacity may refuse any treatment, including life-prolonging treatment, and may make an advance decision to refuse treatment [9]. Treatment whose purpose is to relieve symptoms, given in proportion to them, is lawful even near death [4]. Advance care planning, ReSPECT and preferred place of care give real control."
    },
    {
     "h": "Explore the drivers",
     "t": "Fear of pain or future suffering, loss of dignity or control, being a burden, current uncontrolled symptoms, depression or hopelessness, existential distress, and pressure from others. Depression is common and treatable in chronic physical illness [7]."
    },
    {
     "h": "Assess risk",
     "t": "Ask directly about current thoughts of suicide, plans, means (including stockpiled medicines) and protective factors. Do not use risk scores to predict suicide or decide care [8]. Consider a mental health referral if risk is present."
    },
    {
     "h": "Capacity and coercion",
     "t": "Presume capacity [9]. Check whether the wish is settled or fluctuating and whether anyone is influencing him."
    },
    {
     "h": "Professional bodies",
     "t": "The BMA has held a neutral position on changing the law since 2021 and supports an opt-in model for doctors if the law ever changes [5]. Personal views on the ethics must not be imposed on the patient [3]."
    },
    {
     "h": "Service delivery",
     "t": "Coordinated specialist palliative care, holistic needs assessment and planning ahead are part of good end of life care [6]."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Vance, I’m Dr Rahman. Come in and sit down. What would you like to talk about today?",
    "dom": "rto",
    "why": "Open start"
   },
   {
    "who": "pt",
    "text": "Doctor, you know my cancer’s terminal now. I’ve thought about this a lot. When things get bad, I don’t want to suffer or be a burden. I want to go on my own terms. So I’m asking you directly: will you help me end my life when the time comes?"
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That can’t have been easy to say, and I can hear you’ve thought about it carefully. I’m not going to rush past it. Would you tell me what’s led you to this?",
    "dom": "rto",
    "why": "Receives the request calmly and without judgement"
   },
   {
    "phase": "Exploring the request",
    "clock": "1–5 min",
    "who": "pt",
    "text": "I don’t want to lose control. Lying there with people doing everything for me."
   },
   {
    "who": "dr",
    "text": "When you picture things getting bad, what’s the part that frightens you most?",
    "dom": "tasks",
    "why": "Explores fear of suffering and loss of control"
   },
   {
    "who": "pt",
    "text": "Suffering. Being a burden. Not being me any more."
   },
   {
    "who": "dr",
    "text": "How are things right now? Any pain, breathlessness, sickness, trouble sleeping?",
    "dom": "tasks",
    "why": "Current symptoms and unmet palliative needs (GMC)"
   },
   {
    "who": "pt",
    "text": "There are things that bother me. I try not to make a fuss."
   },
   {
    "who": "dr",
    "text": "And your mood? How have you been in yourself over the last few weeks? Have you been able to enjoy anything?",
    "dom": "tasks",
    "why": "Screens for depression (NICE CG91)"
   },
   {
    "who": "pt",
    "text": "Up and down. Some days I wonder what the point is."
   },
   {
    "who": "dr",
    "text": "When there doesn’t seem much point, do you ever think about ending your life now, before things get worse? Have you made any plans, or put anything aside?",
    "dom": "tasks",
    "why": "Direct suicide risk enquiry, including means"
   },
   {
    "who": "pt",
    "text": "No. Not now. I mean later, when it’s bad. I haven’t done anything."
   },
   {
    "who": "dr",
    "text": "Thank you for being honest. Does anyone else know you’ve been thinking this way? Has anyone suggested it to you?",
    "dom": "tasks",
    "why": "Support network and checks for external pressure"
   },
   {
    "who": "pt",
    "text": "No. This is my own thinking."
   },
   {
    "phase": "Honest legal position",
    "clock": "5–7 min",
    "who": "dr",
    "text": "I want to be honest with you, because you asked me straight. In England and Wales it’s against the law to help someone end their life, and that includes doctors. Parliament voted on a bill to change that this month, and it was voted down, so the law hasn’t changed. So I can’t do what you’ve asked.",
    "dom": "tasks",
    "why": "Clear, accurate legal position (Suicide Act 1961; bill defeated 11 September 2026)"
   },
   {
    "who": "pt",
    "text": "So that’s it, then."
   },
   {
    "who": "dr",
    "text": "No, that isn’t it at all. I’m not going anywhere. I will keep looking after you all the way through, and I can promise you we will do everything we can to keep you comfortable. There is a lot we can do about the things you’re afraid of.",
    "dom": "rto",
    "why": "Non-abandonment; keeps promises realistic"
   },
   {
    "who": "pt",
    "text": "Such as?"
   },
   {
    "who": "dr",
    "text": "You have real control over a lot. You can refuse any treatment you don’t want, now or in the future, and we can write your wishes down so they’re followed if you can’t speak for yourself. You can choose where you’d like to be cared for. And medicines to control pain and distress near the end are used in whatever dose is needed to keep you comfortable.",
    "dom": "tasks",
    "why": "Lawful sources of control: refusal, advance decisions, ACP, symptom relief"
   },
   {
    "phase": "Shared plan",
    "clock": "7–11 min",
    "who": "dr",
    "text": "Can I suggest some things? First, the things that bother you physically. I’d like to go through each symptom and your medicines properly, and bring in the palliative care team, who are expert at this.",
    "dom": "tasks",
    "why": "Optimises symptoms; specialist palliative referral"
   },
   {
    "who": "pt",
    "text": "I didn’t want to be a nuisance."
   },
   {
    "who": "dr",
    "text": "Telling us isn’t making a fuss. It’s how we keep you comfortable. Second, the low days. That can be depression, which is common with serious illness and can be treated. Would you be open to talking more about that, and to some support?",
    "dom": "tasks",
    "why": "Frames depression as treatable"
   },
   {
    "who": "pt",
    "text": "Maybe. If it helps."
   },
   {
    "who": "dr",
    "text": "Third, planning ahead. When you’re ready, we can go through what you would and wouldn’t want, where you’d like to be, and put it on a care plan everyone can see. It might also help to talk to your family, or the hospice’s counselling or chaplaincy team, about the burden worry.",
    "dom": "tasks",
    "why": "Advance care planning, ReSPECT and psychosocial support"
   },
   {
    "who": "pt",
    "text": "I haven’t thought that far. I’d need time."
   },
   {
    "who": "dr",
    "text": "Of course. There’s no rush, and you can change your mind at any point. What matters most to you in the time you have?",
    "dom": "rto",
    "why": "Shared decision-making around his values"
   },
   {
    "who": "pt",
    "text": "Being myself. Not being a nuisance."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "I’d like to see you again next week, and I’ll contact the palliative team today. If you ever feel you might act on these thoughts sooner, or things feel unbearable, please ring us straight away, or call 111 or 999 if we’re closed. Could you tell me what we’ve agreed?",
    "dom": "gs",
    "why": "Follow-up, crisis safety-net, teach-back"
   },
   {
    "who": "pt",
    "text": "You can’t help me die, but you’ll look at my symptoms, get the palliative people in, talk about my mood, and we’ll plan ahead when I’m ready."
   },
   {
    "who": "dr",
    "text": "That’s it. And thank you for trusting me with this. You can raise it with me again any time.",
    "dom": "rto",
    "why": "Keeps the conversation open"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Received the request calmly and let him explain in his own words.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored support, family awareness, fear of being a burden and what matters to him.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “some days I wonder what the point is” and asked about suicide directly.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (control over death), concern (pain, dependency, burden), expectation (help to die).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Symptom review; mood assessment; capacity presumed and checked; medicines review; offered palliative assessment.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Distinguished a settled wish from depression, uncontrolled symptoms, fear or external pressure.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Current suicidal ideation, plans and means (stockpiled medicines); not reliant on risk scores (NICE NG225).",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named the drivers: fear of suffering and loss of control, with possible depression.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Honest legal position (Suicide Act 1961; no change in law, bill defeated September 2026); non-abandonment; lawful control through refusal, advance decisions and ACP; palliative referral.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Treatable depression (NICE CG91); symptom optimisation; family and spiritual support.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Early review, palliative team contacted, crisis safety-net, open invitation to return to the subject.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Professional & ethical dilemmas",
    "Long-term conditions & cancer",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Harold Vance",
    "age": "67 years · male",
    "pmh": [
     "Terminal cancer"
    ],
    "meds": [
     "See repeat list"
    ],
    "allergy": "Not recorded",
    "recent": "Cancer recorded as terminal.",
    "reason": "“Plans for the future.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Receive",
     "d": "Let him ask. Thank him; don’t flinch or refuse in the first breath."
    },
    {
     "t": "1–5",
     "h": "Explore",
     "d": "Fears, current symptoms, mood, suicidal thoughts, plans and means, pressure from others."
    },
    {
     "t": "5–7",
     "h": "Law, gently",
     "d": "Assisting suicide is a crime in England and Wales; the September 2026 bill was defeated. Then non-abandonment."
    },
    {
     "t": "7–11",
     "h": "Plan",
     "d": "Symptoms; palliative team; mood; advance care planning, preferred place; lawful control."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "Review next week; crisis safety-net; teach-back; door open."
    }
   ],
   "wordPics": {
    "fail": "Refuses immediately and moves on; or implies the law has changed or will soon; never asks about mood or suicide; moralises; no follow-up.",
    "pass": "Explores reasons, states the law correctly, assesses mood and risk, and offers palliative support and review.",
    "exc": "All of the above, plus: gives accurate, current law without opinion; shows him the lawful control he has (refusal, advance decisions, ACP, place of care); a direct suicide question including means; treats low mood as treatable; makes an honest promise of comfort; keeps the subject open."
   },
   "avoid": [
    {
     "dont": "“I can’t talk about that.”",
     "instead": "“I can’t help you end your life, but I do want to understand what’s behind this.”",
     "why": "The GMC expects the doctor to listen and discuss the reasons."
    },
    {
     "dont": "“The law’s about to change, so you may not have long to wait.”",
     "instead": "“Parliament voted against changing the law this month, so it hasn’t changed.”",
     "why": "Inaccurate: the 2026–27 Bill was defeated at second reading on 11 September 2026 and no Act exists."
    },
    {
     "dont": "“I promise you won’t feel any pain at all.”",
     "instead": "“I promise we will do everything we can to keep you comfortable.”",
     "why": "An honest promise builds trust; an impossible one breaks it."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Fear of being a burden",
     "t": "Common in terminal illness; explore family relationships and offer carers’ and family support."
    },
    {
     "h": "Existential and spiritual needs",
     "t": "Hospice counselling and chaplaincy services support meaning and dignity."
    }
   ],
   "legal": [
    {
     "h": "Current law (September 2026)",
     "t": "Assisting or encouraging suicide is an offence (Suicide Act 1961, s2). The Terminally Ill Adults (End of Life) Bill 2024–26 fell at the end of the session on 29 April 2026; the 2026–27 Bill was defeated at Commons second reading on 11 September 2026. No Act, no commencement date."
    },
    {
     "h": "DPP policy",
     "t": "Prosecution decisions follow the DPP policy (2010, updated 2014). Acting as a doctor or healthcare professional with the person in your care is a factor in favour of prosecution."
    },
    {
     "h": "Mental Capacity Act 2005",
     "t": "Refusing treatment, advance decisions to refuse treatment and lasting power of attorney for health and welfare are lawful ways to keep control."
    }
   ],
   "professional": [
    {
     "h": "GMC guidance",
     "t": "Listen and discuss the reasons compassionately; limit information to explaining that encouraging or assisting suicide is a crime; assess unmet palliative needs; do not give advice or information that would encourage or assist suicide."
    },
    {
     "h": "Personal beliefs",
     "t": "Whatever the doctor’s view, it must not be imposed; the BMA is neutral on changing the law (2021)."
    },
    {
     "h": "Documentation and support",
     "t": "Record the discussion, risk assessment and plan; discuss with a senior colleague, the palliative team or your medical defence organisation if unsure."
    }
   ],
   "community": [
    {
     "h": "Specialist palliative care",
     "t": "Hospice and community palliative teams for symptom control, advance care planning and preferred place of care (NICE NG142)."
    },
    {
     "h": "Crisis support",
     "t": "Practice, NHS 111 and 999; local mental health crisis lines if suicidal thoughts become active."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Current suicidal ideation, a plan or means (stockpiled medicines)",
     "Hopelessness or low mood suggesting depression",
     "Uncontrolled pain or other symptoms",
     "Pressure or coercion from others"
    ],
    "psychosocial": [
     "Fear of being a burden and of dependency",
     "Family awareness and support",
     "What matters most to him: dignity, being himself"
    ],
    "ice": [
     "Idea: control over when and how he dies",
     "Concern: pain, loss of dignity, being a burden",
     "Expectation: the GP’s help to die"
    ]
   },
   "diagnosis": "“I can hear this comes from fear of suffering and of losing control, and perhaps some low days too. Those are things we can work on together.”",
   "diagnosisLay": "“The law doesn’t let me help you end your life. But you have more control than you might think: you can refuse any treatment, write down your wishes, and choose where you’re cared for, and we can treat pain and distress properly.”",
   "management": {
    "reflectIce": "“You told me you’re frightened of suffering and of being a burden. That’s exactly what I want to work on with you.”",
    "psychosocial": "Explore the burden worry, offer family conversations, hospice counselling and chaplaincy; plan ahead at his pace.",
    "sharedPlan": [
     "Review each symptom and his medicines; refer to the specialist palliative care team",
     "Assess and offer treatment for depression (NICE CG91)",
     "Advance care planning, ReSPECT, preferred place of care; explain lawful refusal and advance decisions (Mental Capacity Act 2005)"
    ],
    "safetyNet": [
     "Review next week; palliative team contacted today",
     "If suicidal thoughts become active or things feel unbearable: contact the practice, NHS 111 or 999"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Palliative care",
    "s": "Case walkthrough",
    "href": "../cases/palliative-care.html"
   },
   {
    "ic": "💠",
    "t": "Care of the dying",
    "s": "Management protocol · last days",
    "href": "management/care-of-the-dying.html"
   },
   {
    "ic": "💠",
    "t": "Palliative pain",
    "s": "Management protocol",
    "href": "management/palliative-pain.html"
   },
   {
    "ic": "💠",
    "t": "Anxiety and depression in palliative care",
    "s": "Management protocol",
    "href": "management/palliative-anxiety-depression.html"
   }
  ],
  "pitfalls": {
   "intro": "Examiners reward listening, accurate law and non-abandonment. Marks are lost by a reflex refusal, inaccurate statements about the law, and missing depression or suicide risk.",
   "items": [
    {
     "dom": "rto",
     "fail": "Refusing in the first sentence.",
     "why": "It shuts him down and misses the drivers; the GMC expects the doctor to discuss the reasons.",
     "fix": "Thank him, then ask what has led him to this."
    },
    {
     "dom": "tasks",
     "fail": "Stating the law wrongly.",
     "why": "Assisting suicide is still a crime (Suicide Act 1961); the 2026–27 Bill was defeated on 11 September 2026 and no Act exists.",
     "fix": "State the law plainly and without opinion."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about suicide now.",
     "why": "Hopelessness in terminal illness carries real risk; means may include stockpiled medicines.",
     "fix": "Ask directly about thoughts, plans and means; don’t rely on risk scores (NICE NG225)."
    },
    {
     "dom": "tasks",
     "fail": "Missing treatable depression or pain.",
     "why": "Unmet palliative needs drive many requests (GMC; NICE CG91).",
     "fix": "Review symptoms and mood; refer to specialist palliative care."
    },
    {
     "dom": "rto",
     "fail": "Abandonment, or an impossible promise.",
     "why": "“There’s nothing I can do” and “you won’t feel any pain” both damage trust.",
     "fix": "“I’ll keep looking after you, and we’ll do everything we can to keep you comfortable.”"
    },
    {
     "dom": "gs",
     "fail": "No lawful alternatives offered.",
     "why": "Refusal of treatment, advance decisions, ACP and place of care give real control.",
     "fix": "Explain them in plain words and start the planning."
    }
   ]
  }
 },
 "cll-lymphocytosis": {
  "stem": {
   "name": "Edward Ross",
   "age": "69-year-old man",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "Pre-operative FBC: isolated lymphocytosis; blood film and flow cytometry suggest chronic lymphocytic leukaemia. Feels completely well. The word ‘leukaemia’ has been mentioned to him.",
   "reason": "“Does this mean I’m dying?”"
  },
  "knowledge": {
   "guideline": "[1] iwCLL guidelines for diagnosis and treatment of CLL (Hallek et al., Blood 2018) (international) · [2] British Society for Haematology guideline for the treatment of chronic lymphocytic leukaemia (2022) · [3] NICE NG12 (updated April 2026) · [4] UKHSA Green Book chapters 6, 7, 19, 25 and 28a · [5] NICE NG47 (haematological cancers: improving outcomes, 2016)",
   "summary": "An isolated, persistent lymphocytosis of mature B cells in an older adult is most often chronic lymphocytic leukaemia. CLL is diagnosed with a clonal B-lymphocyte count of at least 5 × 10⁹/L confirmed by flow cytometry. Most people found incidentally have early-stage disease that is monitored without treatment, and many never need treatment. Refer to haematology for confirmation and staging, check for symptoms, lymph nodes, spleen and liver enlargement and cytopenias, and give infection and vaccination advice. Be honest that it is a blood cancer, and just as clear that for many it behaves like a long-term condition.",
   "points": [
    {
     "h": "Diagnosis",
     "t": "iwCLL [1] defines CLL as at least 5 × 10⁹/L clonal B lymphocytes in the blood, sustained, with a characteristic immunophenotype on flow cytometry. Below that level, without lymph node or organ involvement, the finding is monoclonal B-cell lymphocytosis (MBL), which progresses slowly in a minority."
    },
    {
     "h": "Assessment in primary care",
     "t": "Ask about night sweats, fevers, weight loss, fatigue and recurrent infections, and examine for lymph nodes, spleen and liver. Check the full count for anaemia and low platelets. These findings guide urgency and staging (Binet or Rai), which haematology confirms [1][2]."
    },
    {
     "h": "Urgency",
     "t": "NICE NG12 (updated April 2026) [3] recommends a very urgent FBC to assess for leukaemia in adults with features such as pallor, persistent fatigue, unexplained fever, persistent or recurrent infection, generalised lymphadenopathy, unexplained bruising or bleeding, and hepatosplenomegaly. A well patient with an isolated lymphocytosis and normal haemoglobin and platelets can usually be referred through the local haematology pathway; cytopenias, bulky nodes, B symptoms or a rapidly rising count need faster review."
    },
    {
     "h": "Watch and wait",
     "t": "Early-stage, asymptomatic CLL is monitored, not treated, because early treatment has not been shown to improve survival [1][2]. Treatment starts when the disease is active: progressive marrow failure, bulky or symptomatic nodes or spleen, a rapidly rising count, or significant symptoms. Many people never need treatment."
    },
    {
     "h": "Infection and vaccination",
     "t": "CLL reduces immunity even when untreated. Offer annual influenza vaccine, pneumococcal vaccine and COVID-19 vaccine as per the current seasonal programme, and check eligibility for non-live shingles vaccine (Shingrix) under the Green Book [4]. Live vaccines should be avoided in significant immunosuppression [4]. Advise prompt review of fevers and infections."
    },
    {
     "h": "Other points",
     "t": "Skin cancers are more common in CLL, so advise sun protection and reporting new skin lesions. Autoimmune haemolysis or low platelets can occur. Haematology care is delivered through a specialist multidisciplinary team (NICE NG47 [5])."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Ross, I’m Dr Morgan. How can I help today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "I had a blood test for a pre-op check and the doctor mentioned my lymphocytes were high and used the word ‘leukaemia’. I’ve been beside myself. My wife’s in pieces. But the strange thing is I feel completely fine. Does this mean I’m dying?"
   },
   {
    "who": "dr",
    "text": "I can see how frightening that word has been for you both. I want to answer your question honestly, and I think what I say will be more reassuring than you expect. Can I ask a few questions and examine you first, so I can give you an accurate picture?",
    "dom": "rto",
    "why": "Acknowledges fear and signals calibrated reassurance"
   },
   {
    "who": "pt",
    "text": "Please."
   },
   {
    "phase": "Focused history",
    "clock": "1–5 min",
    "who": "dr",
    "text": "What exactly were you told about the result?",
    "dom": "rto",
    "why": "Establishes what he knows"
   },
   {
    "who": "pt",
    "text": "Just that one type of white cell was high and it might be leukaemia. Then I stopped listening."
   },
   {
    "who": "dr",
    "text": "That’s very understandable. Have you had drenching sweats at night, fevers, or lost weight without trying?",
    "dom": "tasks",
    "why": "B-symptom screen"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Any lumps in your neck, armpits or groin, or a feeling of fullness under your left ribs?",
    "dom": "tasks",
    "why": "Nodes and spleen"
   },
   {
    "who": "pt",
    "text": "Not that I’ve noticed."
   },
   {
    "who": "dr",
    "text": "Have you been getting more infections than usual, or any unusual bruising or bleeding?",
    "dom": "tasks",
    "why": "Infections and cytopenia symptoms"
   },
   {
    "who": "pt",
    "text": "No. I’m fit as a fiddle."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "When you heard ‘leukaemia’, what did you picture?",
    "dom": "rto",
    "why": "Elicits ideas"
   },
   {
    "who": "pt",
    "text": "Chemotherapy, hospital, dying quickly."
   },
   {
    "who": "dr",
    "text": "And what worries you most?",
    "dom": "rto",
    "why": "Explores concern"
   },
   {
    "who": "pt",
    "text": "Leaving my wife. She’s terrified."
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’ll feel for lymph glands in your neck, armpits and groin, and feel your tummy for the spleen and liver.",
    "dom": "tasks",
    "why": "Targeted examination"
   },
   {
    "who": "pt",
    "text": "Go ahead."
   },
   {
    "who": "dr",
    "text": "Your blood test shows a raised number of lymphocytes, and the other parts of your blood count, the red cells and platelets, weren’t reported as low. The pattern looks like a condition called chronic lymphocytic leukaemia, or CLL. I won’t pretend it isn’t a type of blood cancer. But it’s very different from the leukaemia people picture.",
    "dom": "tasks",
    "why": "Honest naming with context"
   },
   {
    "who": "pt",
    "text": "Different how?"
   },
   {
    "who": "dr",
    "text": "In most people found by chance like you, it’s very slow. Many people live with it for many years without it causing trouble, and many never need any treatment at all. So no, this does not mean you’re dying.",
    "dom": "rto",
    "why": "Calibrated reassurance answering his direct question"
   },
   {
    "who": "pt",
    "text": "Really? Then why is it called leukaemia?"
   },
   {
    "who": "dr",
    "text": "Because it comes from the blood cells. The name is the same family, but the behaviour is completely different.",
    "dom": "rto",
    "why": "Clarifies the misconception"
   },
   {
    "phase": "Plan",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’ll refer you to the blood specialists to confirm it and work out the stage. For most people at your stage, the plan is ‘watch and wait’: regular blood tests and check-ups, and treatment only if it ever becomes active. That’s not doing nothing. Treating early doesn’t help, so we keep you well and keep watching.",
    "dom": "tasks",
    "why": "Haematology referral and watch-and-wait explained"
   },
   {
    "who": "pt",
    "text": "So no chemotherapy?"
   },
   {
    "who": "dr",
    "text": "Not now, and possibly never. If treatment is ever needed, the modern options are often tablets. One practical thing: CLL can lower your defences against infection. So keep up your flu, pneumonia and COVID vaccines, and we’ll check whether you should have the shingles vaccine. Avoid live vaccines, and see us promptly if you get a fever or an infection.",
    "dom": "tasks",
    "why": "Infection risk and vaccination advice"
   },
   {
    "who": "pt",
    "text": "I can do that."
   },
   {
    "who": "dr",
    "text": "I’ll also let the team doing your pre-op check know about the referral, so they can plan with the haematologists. Would it help if your wife came with you next time, so I can explain it to her too?",
    "dom": "gs",
    "why": "Coordinates care; involves his wife with consent"
   },
   {
    "who": "pt",
    "text": "Yes, she’d like that."
   },
   {
    "phase": "Safety net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Before you see the specialist, come back sooner if you notice new lumps, drenching night sweats, weight loss, fevers, repeated infections, or unusual bruising or bleeding. And use sun cream, as skin cancers are a bit more common with CLL. What will you tell your wife tonight?",
    "dom": "gs",
    "why": "Safety net and teach-back"
   },
   {
    "who": "pt",
    "text": "That it’s a slow type that often never needs treatment, I’m being referred, I need my vaccines, and we’ll come back together."
   },
   {
    "who": "dr",
    "text": "That’s a very good summary.",
    "dom": "gs",
    "why": "Confirms understanding"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him express his fear and asked what he had been told.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored his fear of leaving his wife and her distress; offered to involve her.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up that he feels well, the incidental pre-op finding and the misconception about leukaemia.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: leukaemia means rapid death and chemotherapy. Concern: leaving his wife. Expectation: to know whether he is dying.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Examined lymph nodes, spleen and liver; reviewed Hb and platelets; flow cytometry and staging via haematology.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "CLL versus MBL, reactive lymphocytosis and other lymphoproliferative disorders.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for B symptoms, lymphadenopathy, splenomegaly, infections, bruising and bleeding.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Probable early-stage CLL found incidentally; asymptomatic.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Haematology referral; watch and wait explained as active management; pre-op team informed.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Infection risk, vaccinations (flu, pneumococcal, COVID, Shingrix eligibility), no live vaccines, skin protection.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Specific symptoms to report; wife invited; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Investigations & results",
    "Older adults"
   ],
   "stem": {
    "name": "Edward Ross",
    "age": "69 years · male",
    "pmh": [
     "None recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "None recorded",
    "recent": "Pre-op FBC: isolated lymphocytosis; film and flow suggest CLL. Well.",
    "reason": "“Does this mean I’m dying?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Acknowledge the fear; promise an honest answer."
    },
    {
     "t": "1–5",
     "h": "History",
     "d": "What he was told; B symptoms, lumps, infections, bruising."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Pictures rapid death; fears leaving his wife."
    },
    {
     "t": "6–8",
     "h": "Examine and explain",
     "d": "Nodes, spleen, liver; CLL named honestly with context."
    },
    {
     "t": "8–11",
     "h": "Plan",
     "d": "Haematology, watch and wait, vaccines, pre-op team, involve wife."
    },
    {
     "t": "11–12",
     "h": "Safety net",
     "d": "Symptoms to report; sun protection; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Avoids the word or says ‘it’s nothing’; or talks about chemotherapy and prognosis statistics; no examination or referral; no infection advice.",
    "pass": "Names CLL honestly, explains watch and wait, refers to haematology, screens for symptoms and gives infection advice.",
    "exc": "All of that, plus: directly answers ‘am I dying’, corrects his mental picture, involves his wife, coordinates with the pre-op team, covers vaccines including Shingrix eligibility and skin checks, and uses teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s nothing to worry about.”",
     "instead": "“It is a type of blood cancer, but in most people like you it is very slow.”",
     "why": "False reassurance breaks trust when he meets the haematologist."
    },
    {
     "dont": "“Median survival for CLL is…”",
     "instead": "“Many people live with it for many years and never need treatment.”",
     "why": "Statistics without context frighten and may not apply to him."
    },
    {
     "dont": "“We’ll just leave it.”",
     "instead": "“We’ll monitor it closely and treat only if it becomes active.”",
     "why": "Watch and wait must be framed as active management."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family",
     "t": "His wife is very distressed. With his consent, involving her helps them both adjust."
    },
    {
     "h": "Living with uncertainty",
     "t": "Watch and wait can cause ongoing anxiety. Offer support and signpost cancer charities."
    }
   ],
   "legal": [
    {
     "h": "Consent and information sharing",
     "t": "Share information with his wife only with his consent (GMC Confidentiality 2017)."
    },
    {
     "h": "Travel insurance",
     "t": "A new cancer diagnosis may need declaring for travel insurance; specialist providers exist."
    }
   ],
   "professional": [
    {
     "h": "Breaking news",
     "t": "The word ‘leukaemia’ reached him before any explanation. Results with serious implications should be given with time and context (GMC Good medical practice). Consider whether the earlier communication needs feedback."
    },
    {
     "h": "Results and coordination",
     "t": "Inform the pre-operative team, and make sure the haematology referral and its outcome are tracked."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "UK blood cancer and leukaemia charities provide information on CLL and watch and wait, and support for partners."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Night sweats, fever or weight loss (B symptoms)",
     "Anaemia or low platelets; bruising or bleeding",
     "Bulky or growing lymph nodes; enlarged spleen",
     "Recurrent or severe infections"
    ],
    "psychosocial": [
     "Terrified by the word ‘leukaemia’",
     "Wife very distressed",
     "Feels well, so confused"
    ],
    "ice": [
     "Idea: leukaemia means rapid death",
     "Concern: leaving his wife",
     "Expectation: to know if he is dying"
    ]
   },
   "diagnosis": "Probable early-stage chronic lymphocytic leukaemia found incidentally on a pre-operative FBC: isolated lymphocytosis, no B symptoms, no lymphadenopathy or organomegaly reported.",
   "diagnosisLay": "“One kind of white blood cell is higher than normal. It looks like a slow blood condition called CLL. It is a type of cancer, but in most people like you it grows very slowly and often never needs treatment.”",
   "management": {
    "reflectIce": "“You asked if you’re dying. No, this doesn’t mean that. Many people live with it for years.”",
    "psychosocial": "Involve his wife with consent; charity support; follow-up conversation.",
    "sharedPlan": [
     "Haematology referral for confirmation and staging",
     "Watch and wait with regular blood tests if early stage",
     "Flu, pneumococcal and COVID vaccines; check Shingrix eligibility; no live vaccines",
     "Inform the pre-op team",
     "Sun protection; report new skin lesions"
    ],
    "safetyNet": [
     "New lumps, night sweats, weight loss or fever: return sooner",
     "Repeated infections, bruising or bleeding: return promptly",
     "Review with his wife"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Lymphocytosis",
    "s": "Visual algorithm · reactive versus clonal",
    "href": "algorithms/lymphocytosis.html"
   },
   {
    "ic": "📋",
    "t": "Haematological cancers",
    "s": "Case walkthrough · CLL",
    "href": "../cases/haematological-cancers.html"
   },
   {
    "ic": "💠",
    "t": "Haematological cancers",
    "s": "Protocol · referral and monitoring",
    "href": "management/haematological-cancers.html"
   },
   {
    "ic": "🗺️",
    "t": "Lymphadenopathy",
    "s": "Visual algorithm · nodes and NICE NG12 (updated April 2026)",
    "href": "algorithms/lymphadenopathy.html"
   }
  ],
  "pitfalls": {
   "intro": "The clinical content is modest. This station is about telling a frightened man the truth in a way he can live with.",
   "items": [
    {
     "dom": "rto",
     "fail": "Avoiding his question ‘am I dying?’",
     "why": "An unanswered question keeps the fear alive.",
     "fix": "Answer it directly and honestly."
    },
    {
     "dom": "rto",
     "fail": "Minimising: ‘it’s nothing’.",
     "why": "It is a cancer; he will learn that from the haematologist.",
     "fix": "Be honest and put it in context."
    },
    {
     "dom": "tasks",
     "fail": "No symptom screen or examination.",
     "why": "B symptoms, nodes, spleen and cytopenias change urgency.",
     "fix": "Ask and examine."
    },
    {
     "dom": "tasks",
     "fail": "No haematology referral.",
     "why": "Flow cytometry confirmation and staging are specialist tasks.",
     "fix": "Refer through the local pathway, faster if features are present."
    },
    {
     "dom": "tasks",
     "fail": "No infection or vaccine advice.",
     "why": "CLL impairs immunity even untreated.",
     "fix": "Vaccines as per the Green Book; no live vaccines; prompt review of infections."
    },
    {
     "dom": "gs",
     "fail": "Presenting watch and wait as doing nothing.",
     "why": "He may feel abandoned.",
     "fix": "Explain why monitoring is the right, active choice."
    }
   ]
  }
 },
 "costochondritis": {
  "stem": {
   "name": "Priya Nair",
   "age": "32-year-old woman",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "A few days of sharp left-sided chest pain, worse on pressing and on deep breathing. Very anxious it is her heart; has been searching online about heart attacks.",
   "reason": "“I’m 32 — could it still be serious?”"
  },
  "knowledge": {
   "guideline": "[1] NICE CG95 (recent-onset chest pain of suspected cardiac origin, 2010, updated 2016) · [2] NICE NG158 (venous thromboembolic diseases, 2020, updated 2023) · [3] BNF ibuprofen, naproxen and topical NSAID monographs; MHRA Drug Safety Update June 2015 (high-dose ibuprofen) · [4] NICE CG113 (generalised anxiety disorder and panic disorder, 2011)",
   "summary": "Costochondritis is a positive diagnosis: sharp, localised anterior chest pain, worse on movement and deep breathing, reproduced by pressing on the costochondral junctions. It is made only after the history, risk factors and examination have made cardiac, thromboembolic and respiratory causes unlikely. Chest-wall tenderness makes a cardiac cause less likely but does not exclude it. When the assessment is reassuring, say so clearly and explain why, offer simple analgesia and safety-net for red flags.",
   "points": [
    {
     "h": "Exclude the serious first",
     "t": "Ask about central, heavy or tight pain, pain on exertion, radiation to the arm, neck or jaw, sweating, nausea, breathlessness and collapse. Consider acute coronary syndrome, pulmonary embolism, pneumothorax, pneumonia, pericarditis, aortic dissection and reflux. If acute coronary syndrome is suspected, follow NICE CG95 [1]: refer as an emergency if pain is current or recent, and do not delay transfer for tests."
    },
    {
     "h": "Pulmonary embolism",
     "t": "Pleuritic pain can be PE. NICE NG158 [2] uses the two-level Wells score, and where clinical suspicion is low the PERC rule. PERC is negative only if all apply: age under 50, heart rate under 100, oxygen saturation 94% or more, no haemoptysis, no oestrogen use, no previous DVT or PE, no unilateral leg swelling, and no surgery or trauma needing hospital treatment in the past 4 weeks."
    },
    {
     "h": "The positive diagnosis",
     "t": "Costochondritis causes sharp, localised pain at the front of the chest, usually over the second to fifth costochondral junctions, worse on pressing, moving the arms or twisting, and on deep breathing. There is no swelling; visible swelling of a single junction suggests Tietze’s syndrome. Reproducing the exact pain on palpation supports the diagnosis only when the rest of the assessment is reassuring."
    },
    {
     "h": "Investigation",
     "t": "Tests are not needed when the assessment is clearly reassuring. An ECG can help if there is any doubt, or to support reassurance, but a normal resting ECG does not exclude acute coronary syndrome (NICE CG95 [1]). Chest X-ray if pneumothorax, pneumonia or other lung disease is suspected."
    },
    {
     "h": "Management",
     "t": "Explain the cause and that it usually settles over weeks, sometimes longer. Offer a topical NSAID, paracetamol or an oral NSAID at the lowest effective dose for the shortest time, after checking for asthma, gastrointestinal, renal and cardiovascular contraindications and pregnancy (BNF [3]). Doses as per BNF. Heat and avoiding aggravating movements help."
    },
    {
     "h": "Health anxiety",
     "t": "Reassurance works when it follows a visible, thorough assessment and addresses her specific fear. If worry about her health is persistent or causes distress, assess for generalised anxiety or panic and offer support in line with NICE CG113 [4]."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Ms Nair, I’m Dr Clarke. What’s been happening?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "I’ve had this chest pain for a few days and I’m really scared it’s my heart. I keep googling heart attacks. But it’s a sharp pain on the left, and it hurts more when I press on it or take a deep breath. I’m 32. Could it still be serious?"
   },
   {
    "who": "dr",
    "text": "You were right to come in. Chest pain always deserves to be taken seriously. I’ll ask some important questions and examine you, so that whatever I tell you at the end is based on a proper check. Is that okay?",
    "dom": "rto",
    "why": "Validates and explains that reassurance will be earned"
   },
   {
    "who": "pt",
    "text": "Yes, please."
   },
   {
    "phase": "Focused history",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Can you point to where it hurts, and describe the pain?",
    "dom": "tasks",
    "why": "Site and character"
   },
   {
    "who": "pt",
    "text": "Here, on the left of my breastbone. It’s sharp, in one spot."
   },
   {
    "who": "dr",
    "text": "Does it come on when you walk quickly or climb stairs, and ease with rest?",
    "dom": "tasks",
    "why": "Exertional pattern"
   },
   {
    "who": "pt",
    "text": "No, exercise doesn’t change it. Moving and breathing in do."
   },
   {
    "who": "dr",
    "text": "Does it spread to your arm, neck, jaw or back? Any sweating, feeling sick or faint with it?",
    "dom": "tasks",
    "why": "Cardiac and aortic features"
   },
   {
    "who": "pt",
    "text": "No, none of that."
   },
   {
    "who": "dr",
    "text": "Any breathlessness, coughing up blood, fever or cough?",
    "dom": "tasks",
    "why": "PE, pneumonia and pneumothorax screen"
   },
   {
    "who": "pt",
    "text": "No."
   },
   {
    "who": "dr",
    "text": "Any recent operation, long journey, leg swelling, previous clots, or hormone medicines such as the pill?",
    "dom": "tasks",
    "why": "PE risk factors including PERC items"
   },
   {
    "who": "pt",
    "text": "No, none of those."
   },
   {
    "who": "dr",
    "text": "Do you smoke, and has anyone in the family had heart problems young?",
    "dom": "tasks",
    "why": "Cardiovascular risk factors"
   },
   {
    "who": "pt",
    "text": "Not that I know of."
   },
   {
    "who": "dr",
    "text": "Any heartburn, or pain related to eating?",
    "dom": "tasks",
    "why": "Reflux as a differential"
   },
   {
    "who": "pt",
    "text": "No."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You mentioned reading about heart attacks. What have you been most afraid of?",
    "dom": "rto",
    "why": "Explores the specific fear"
   },
   {
    "who": "pt",
    "text": "That I’m having one and nobody’s noticed. Every time it twinges I panic."
   },
   {
    "who": "dr",
    "text": "That sounds exhausting. What were you hoping I’d do today?",
    "dom": "rto",
    "why": "Empathy and expectations"
   },
   {
    "who": "pt",
    "text": "Tell me it isn’t my heart. Properly."
   },
   {
    "phase": "Examination and diagnosis",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’ll check your pulse, blood pressure, oxygen level and temperature, listen to your heart and lungs, look at your legs, and press gently on your chest wall. I’d also like to do a heart tracing today to be thorough.",
    "dom": "tasks",
    "why": "Targeted examination and ECG"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "Your pulse, blood pressure and oxygen are normal and your heart and lungs sound clear. And when I press here, is that exactly your pain?",
    "dom": "tasks",
    "why": "Reports reassuring findings and tests reproducibility"
   },
   {
    "who": "pt",
    "text": "Yes, that’s it exactly."
   },
   {
    "who": "dr",
    "text": "Then I can explain what I think this is. The pain is sharp, in one spot, worse on breathing and moving, and I can bring it on by pressing where your ribs join the breastbone. With none of the warning signs of a heart problem or a clot, this is costochondritis: irritation of those rib joints. It’s not dangerous and it settles.",
    "dom": "tasks",
    "why": "Positive diagnosis explained with the reasoning"
   },
   {
    "phase": "Reassurance and plan",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’m not saying this because you’re young. I’m saying it because the pain doesn’t behave like heart pain, you have none of the danger signs, and your examination is normal. Does that make sense?",
    "dom": "rto",
    "why": "Grounded reassurance tied to her fear"
   },
   {
    "who": "pt",
    "text": "Yes. It helps to hear why."
   },
   {
    "who": "dr",
    "text": "For the pain, an anti-inflammatory gel on the sore spot is a good start, or paracetamol. If you need tablets like ibuprofen, I’ll check they’re safe for you first. Warmth helps, and try to avoid movements that set it off. It usually settles over a few weeks.",
    "dom": "tasks",
    "why": "Proportionate analgesia with safety check"
   },
   {
    "who": "pt",
    "text": "And the googling?"
   },
   {
    "who": "dr",
    "text": "It’s very understandable, but it tends to feed the worry. If you notice the worry keeps coming back even after reassurance, come and talk to me. There’s good help for that.",
    "dom": "rto",
    "why": "Addresses health anxiety supportively"
   },
   {
    "who": "pt",
    "text": "Okay, I’ll try."
   },
   {
    "phase": "Safety net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Call 999 if you get pain that’s central, heavy or crushing, spreads to your arm or jaw, comes with sweating, breathlessness or fainting, or feels different from this. Come back if it isn’t settling in a few weeks. Can you tell me what you’ll look out for?",
    "dom": "gs",
    "why": "Specific safety net and teach-back"
   },
   {
    "who": "pt",
    "text": "Heavy or spreading pain, sweating, breathless or faint, or anything different: 999. Otherwise gel and give it a few weeks."
   },
   {
    "who": "dr",
    "text": "Exactly.",
    "dom": "gs",
    "why": "Confirms understanding"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; validated attending and explained that reassurance would follow a proper check.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored the online searching and how the fear affects her day to day.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the sharp, localised, pleuritic and pressure-reproduced pain alongside intense cardiac fear.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: heart attack. Concern: that something is being missed. Expectation: to be told properly it isn’t her heart.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Pulse, BP, saturation, temperature, heart, lungs, legs and chest-wall palpation; ECG to support reassurance.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Costochondritis versus ACS, PE, pneumothorax, pneumonia, pericarditis, reflux and Tietze’s syndrome.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened exertional, radiating and autonomic features, breathlessness, haemoptysis and PE risk factors (PERC items).",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Costochondritis as a positive diagnosis, with the reasoning shared.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Topical NSAID or paracetamol first; oral NSAID only after checking suitability; heat; activity advice.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Addressed the health anxiety and online searching; offered further help if worry persists.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 criteria stated specifically; return if not settling; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "New & undifferentiated presentations",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Priya Nair",
    "age": "32 years · female",
    "pmh": [
     "None recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "None recorded",
    "recent": "A few days of sharp left chest pain, worse on pressing and deep breaths; frightened it is her heart.",
    "reason": "“Could it still be serious?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Validate the visit; promise a proper check before reassurance."
    },
    {
     "t": "1–5",
     "h": "Exclude the serious",
     "d": "Character, exertion, radiation, autonomic features, breathlessness, PE risks, CV risks, reflux."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Fear of a missed heart attack; wants proper reassurance."
    },
    {
     "t": "6–8",
     "h": "Examine",
     "d": "Observations, heart, lungs, legs, chest wall; ECG; name costochondritis."
    },
    {
     "t": "8–11",
     "h": "Reassure and treat",
     "d": "Explain why it is not the heart; analgesia; health anxiety."
    },
    {
     "t": "11–12",
     "h": "Safety net",
     "d": "999 features; review if not settling; teach-back."
    }
   ],
   "wordPics": {
    "fail": "‘You’re young, it’s just muscular’ without history or examination; or sends her to A&E out of caution; no safety net.",
    "pass": "Excludes serious causes by history and examination, diagnoses costochondritis, offers analgesia and safety-nets.",
    "exc": "All of that, plus: explains the reasoning behind the reassurance, addresses the online searching and health anxiety, checks NSAID suitability, and uses teach-back."
   },
   "avoid": [
    {
     "dont": "“You’re too young for heart problems.”",
     "instead": "“The pain doesn’t behave like heart pain, and your checks are normal.”",
     "why": "Reassurance based on age alone sounds dismissive and is not the reasoning."
    },
    {
     "dont": "“It’s nothing.”",
     "instead": "“It’s inflammation of the rib joints. It’s real, and it settles.”",
     "why": "Minimising her pain undermines trust and the reassurance."
    },
    {
     "dont": "“Pressing reproduces it, so it can’t be your heart.”",
     "instead": "“Together with everything else, this points to the chest wall.”",
     "why": "Chest-wall tenderness alone does not exclude a cardiac cause."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Online searching",
     "t": "Searching symptoms can amplify fear. Acknowledge it, and suggest reliable NHS information instead."
    },
    {
     "h": "Work",
     "t": "Most people can work normally. If lifting or repetitive arm movement aggravates it, discuss adjustments; self-certification covers the first seven days off."
    }
   ],
   "legal": [
    {
     "h": "Documentation",
     "t": "Record the negative red-flag features, examination findings, ECG result and safety-net advice. Clear notes protect the patient and the clinician if symptoms change."
    }
   ],
   "professional": [
    {
     "h": "Proportionate investigation",
     "t": "Tests done only to reassure can increase anxiety if they give borderline results. Explain what a test can and cannot show before ordering it (GMC Good medical practice; decision making and consent)."
    }
   ],
   "community": [
    {
     "h": "Mental health support",
     "t": "NHS Talking Therapies (self-referral) if health anxiety persists."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Central, heavy or exertional pain, radiation, sweating or collapse: cardiac",
     "Breathlessness, haemoptysis or PE risk factors: consider PE (NICE NG158)",
     "Sudden breathlessness: pneumothorax",
     "Fever and cough: pneumonia",
     "Tearing pain to the back: aortic dissection"
    ],
    "psychosocial": [
     "Intense fear of a heart attack",
     "Frequent online searching",
     "Panics with each twinge"
    ],
    "ice": [
     "Idea: heart attack",
     "Concern: something being missed",
     "Expectation: proper reassurance"
    ]
   },
   "diagnosis": "Costochondritis: sharp, localised anterior chest-wall pain reproduced on palpation of the costochondral junctions, pleuritic and positional, with no cardiac, thromboembolic or respiratory red flags and a normal examination.",
   "diagnosisLay": "“The joints where your ribs meet your breastbone are irritated. That’s why pressing and deep breaths hurt. It isn’t your heart and it settles.”",
   "management": {
    "reflectIce": "“You were afraid a heart attack was being missed. I’ve checked for that properly, and this pain is coming from your chest wall.”",
    "psychosocial": "Name the health anxiety kindly; offer support if it persists.",
    "sharedPlan": [
     "Topical NSAID or paracetamol; oral NSAID only if suitable, dose per BNF",
     "Heat; avoid aggravating movements",
     "ECG to support reassurance where helpful",
     "Return if not settling over a few weeks"
    ],
    "safetyNet": [
     "999 for central, heavy or spreading pain, sweating, breathlessness or collapse",
     "Any change in the pain: seek help",
     "Return if worry persists"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Chest pain",
    "s": "Case walkthrough · NICE CG95",
    "href": "../cases/chest-pain.html"
   },
   {
    "ic": "🗺️",
    "t": "Chest pain",
    "s": "Visual algorithm · cardiac, PE and chest wall",
    "href": "algorithms/chest-pain.html"
   },
   {
    "ic": "📋",
    "t": "Anxiety",
    "s": "Case walkthrough · health anxiety",
    "href": "../cases/anxiety.html"
   },
   {
    "ic": "💠",
    "t": "Anxiety",
    "s": "Protocol · NICE CG113",
    "href": "management/anxiety.html"
   }
  ],
  "pitfalls": {
   "intro": "Reassurance is the prize in this station, but it only counts if it is earned by a visible, thorough exclusion of the serious causes.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Reassuring on age alone.",
     "why": "Serious causes occur at 32, and she will not believe it.",
     "fix": "Take a focused cardiac, PE and respiratory history and examine."
    },
    {
     "dom": "tasks",
     "fail": "Relying on chest-wall tenderness alone.",
     "why": "Tenderness does not exclude a cardiac cause.",
     "fix": "Combine it with a negative red-flag history and normal examination."
    },
    {
     "dom": "tasks",
     "fail": "Missing PE risk factors.",
     "why": "Pleuritic pain can be PE.",
     "fix": "Ask about PERC items and use NICE NG158."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing an oral NSAID without checks.",
     "why": "Asthma, GI, renal risks and pregnancy matter.",
     "fix": "Start with topical NSAID or paracetamol; check before tablets."
    },
    {
     "dom": "rto",
     "fail": "Saying ‘it’s nothing’.",
     "why": "It dismisses her pain and fear.",
     "fix": "Name the diagnosis and explain the reasoning."
    },
    {
     "dom": "gs",
     "fail": "Vague safety net.",
     "why": "She needs to know exactly when to call 999.",
     "fix": "List the features and check understanding."
    }
   ]
  }
 },
 "dengue-fever": {
  "stem": {
   "name": "Aaron Bell",
   "age": "24-year-old man",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded",
   "recent": "Returned from Thailand 4 days ago. Walk-in centre: malaria test negative.",
   "reason": "Urgent appointment: “Fever, headache and aching all over since getting back from Thailand.”"
  },
  "knowledge": {
   "guideline": "[1] UK malaria treatment guidelines 2016 (Lalloo et al., J Infect 2016) · [2] UKHSA: dengue guidance and Rare and Imported Pathogens Laboratory (RIPL) user manual · [3] UKHSA: Notifiable diseases and causative organisms: how to report · [4] Green Book chapter 15a: Dengue (UKHSA, October 2024) · [5] NICE NG253 Suspected sepsis in people aged 16 or over · [6] BNF: paracetamol, NSAIDs · [7] WHO Dengue guidelines for diagnosis, treatment, prevention and control, 2009 (international)",
   "summary": "Fever in a returning traveller is malaria until proven otherwise, and one negative test does not exclude it: three negative samples over 24–48 hours are needed [1]. Fever, retro-orbital headache, severe myalgia and rash after South-East Asia fit dengue. Arrange same-day assessment, recognise warning signs, give fluids and paracetamol, and avoid NSAIDs and aspirin.",
   "points": [
    {
     "h": "Exclude malaria",
     "t": "If malaria is suspected and the first film is negative, repeat after 12–24 hours and again after a further 24 hours; three negative samples over 24–48 hours make malaria unlikely [1]. In practice this means same-day hospital assessment, as films need an urgent laboratory."
    },
    {
     "h": "Recognise dengue",
     "t": "Mosquito-borne flavivirus common in South-East Asia. High fever, severe headache with retro-orbital pain, myalgia and arthralgia, rash, nausea; often leucopenia and thrombocytopenia. Incubation is usually under 2 weeks, so symptoms starting over 2 weeks after return make dengue unlikely [2][7]."
    },
    {
     "h": "Confirm",
     "t": "Dengue RT-PCR or NS1 antigen early in the illness, serology (IgM/IgG) later, via the local laboratory or RIPL [2]. Laboratories report confirmed dengue to UKHSA [3]."
    },
    {
     "h": "Warning signs",
     "t": "Abdominal pain or tenderness, persistent vomiting, clinical fluid accumulation, mucosal bleeding, lethargy or restlessness, liver enlargement, and a rising haematocrit with a rapid platelet fall. Severe dengue is most likely around the time the fever settles, often days 3–7 [7]. Any warning sign needs admission."
    },
    {
     "h": "Broad differential",
     "t": "Malaria, enteric fever, hepatitis A, rickettsial infection, leptospirosis (freshwater exposure), chikungunya, HIV seroconversion, COVID-19 and influenza. Ask where, when, activities, bites, prophylaxis, food and water, freshwater, sexual and animal exposures."
    },
    {
     "h": "Supportive care",
     "t": "Fluids, rest and paracetamol (dose per BNF). Avoid NSAIDs and aspirin because of bleeding risk [6]. Screen for sepsis with NICE NG253 [5]."
    },
    {
     "h": "After dengue",
     "t": "A second infection with a different serotype carries a higher risk of severe dengue. Qdenga can be considered for people aged 4 and over who have had dengue and plan to travel to a risk area [4]. Bite avoidance remains the main prevention."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Aaron, I’m Dr Evans. What’s been happening?",
    "dom": "rto",
    "why": "Open start"
   },
   {
    "who": "pt",
    "text": "I got back from Thailand four days ago and I feel awful. High fever, a pounding headache right behind my eyes, and aching all over, like my bones hurt. I’ve come out in a rash too. The walk-in did a malaria test and it was negative. What is it?"
   },
   {
    "who": "dr",
    "text": "You sound really unwell, and I’m glad you came in. I’ll ask some focused questions about the trip and then check you over.",
    "dom": "rto",
    "why": "Acknowledges and signposts"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When did the fever start, relative to getting home?",
    "dom": "tasks",
    "why": "Timeline against incubation periods"
   },
   {
    "who": "pt",
    "text": "A couple of days after I got back."
   },
   {
    "who": "dr",
    "text": "Where in Thailand were you: cities, countryside, jungle or islands? Did you get bitten much, and did you take any malaria tablets?",
    "dom": "tasks",
    "why": "Structured travel and exposure history"
   },
   {
    "who": "pt",
    "text": "A few different places. I did get bitten. I’d have to check about tablets."
   },
   {
    "who": "dr",
    "text": "Any swimming in rivers or lakes, animal bites, new sexual partners, tattoos or anything like that? Any stomach upset?",
    "dom": "tasks",
    "why": "Leptospirosis, rabies, HIV and blood-borne, enteric exposures"
   },
   {
    "who": "pt",
    "text": "Nothing like that that I can think of."
   },
   {
    "who": "dr",
    "text": "Any tummy pain, being sick repeatedly, bleeding from your gums or nose, blood in your wee or stool, or new bruising or tiny spots?",
    "dom": "tasks",
    "why": "Dengue warning signs"
   },
   {
    "who": "pt",
    "text": "No bleeding. I’m not being sick."
   },
   {
    "who": "dr",
    "text": "Any breathlessness, confusion, dizziness when you stand, or passing much less urine?",
    "dom": "tasks",
    "why": "Sepsis and dehydration screen (NICE NG253)"
   },
   {
    "who": "pt",
    "text": "Not really. I’m drinking."
   },
   {
    "who": "dr",
    "text": "What have you taken for the pain?",
    "dom": "tasks",
    "why": "NSAID and aspirin use"
   },
   {
    "who": "pt",
    "text": "Only paracetamol so far. I was going to get ibuprofen."
   },
   {
    "phase": "ICE",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What have you been thinking this might be?",
    "dom": "rto",
    "why": "Idea"
   },
   {
    "who": "pt",
    "text": "Some travel bug. The malaria test was negative, so I guessed not that."
   },
   {
    "who": "dr",
    "text": "What’s worrying you most?",
    "dom": "rto",
    "why": "Concern"
   },
   {
    "who": "pt",
    "text": "Whether it’s serious. And I’m meant to be back at work."
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me check your temperature, pulse, blood pressure lying and standing, oxygen level, breathing rate, and look at the rash, your throat, tummy and gums. (Febrile, observations recorded and assessed against NICE NG253; rash and abdomen examined; no bleeding signs recorded.)",
    "dom": "tasks",
    "why": "Observations, rash, abdomen, bleeding signs"
   },
   {
    "who": "dr",
    "text": "Here’s my thinking. The headache behind the eyes, the deep aching and the rash, after South-East Asia with mosquito bites, fit dengue, a virus spread by mosquitoes. But my first job with any fever after travel is malaria. One negative test doesn’t rule it out; it needs three over a day or two.",
    "dom": "tasks",
    "why": "Leads with malaria and names dengue as the likely cause"
   },
   {
    "who": "pt",
    "text": "So it could still be malaria?"
   },
   {
    "who": "dr",
    "text": "It’s less likely, but I won’t guess. I’m going to send you to the hospital’s acute team today for repeat malaria tests, a blood count to check your platelets, liver and kidney tests, blood cultures, and a dengue test.",
    "dom": "tasks",
    "why": "Same-day referral for films, FBC, LFT, U&E, cultures, NS1/PCR"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "If it is dengue, most people get better with fluids, rest and paracetamol. Please don’t take ibuprofen or aspirin. They can make bleeding worse if your platelets drop.",
    "dom": "tasks",
    "why": "Supportive care; avoid NSAIDs and aspirin"
   },
   {
    "who": "pt",
    "text": "Glad you said. How long will it last?"
   },
   {
    "who": "dr",
    "text": "The fever usually lasts several days. The trickiest time is often when the fever comes down, so keep watching for warning signs even as you feel cooler. Fatigue can linger for a while after.",
    "dom": "tasks",
    "why": "Explains the critical phase"
   },
   {
    "who": "pt",
    "text": "And work?"
   },
   {
    "who": "dr",
    "text": "You’re not well enough to work this week, and I can give you a note if you need one. Dengue doesn’t spread from person to person in the UK in daily life, so it’s about you recovering.",
    "dom": "rto",
    "why": "Addresses his work concern"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "One for later: if this is confirmed, a second dengue infection can be more severe, so talk to a travel clinic before any trip to a dengue area. There’s a vaccine for people who’ve had dengue before.",
    "dom": "gs",
    "why": "Future travel advice (Green Book ch 15a)"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "While you wait for results: tummy pain, being sick and unable to keep fluids down, any bleeding, bruising or spots, feeling very drowsy or faint, or much less urine, go straight to A&E or call 999. Can you tell me what you’re going to do now?",
    "dom": "gs",
    "why": "Named warning signs and teach-back"
   },
   {
    "who": "pt",
    "text": "Go to the hospital today for the tests, paracetamol and fluids only, no ibuprofen, and A&E if I get tummy pain, vomiting or bleeding."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll ring the team now and let them know you’re coming.",
    "dom": "gs",
    "why": "Direct handover"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; let him give the full story including the negative walk-in test.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work pressure, travel pattern, activities and practical plans explored.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “it was negative, so not malaria” and the plan to take ibuprofen, and corrected both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a travel bug, not malaria), concern (is it serious, work), expectation (a diagnosis).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Full observations including postural BP, rash, abdomen and bleeding signs; same-day repeat films, FBC, LFT, U&E, cultures, dengue NS1/PCR.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Dengue first, with malaria, enteric fever, hepatitis A, rickettsia, leptospirosis, chikungunya, HIV and COVID considered by exposure.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Malaria not excluded by one test (three samples over 24–48 hours); dengue warning signs; sepsis screen (NICE NG253).",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named probable dengue, pending malaria exclusion and confirmation.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day hospital assessment; fluids, rest, paracetamol; avoid NSAIDs and aspirin; fit note.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Explained the critical phase around defervescence; future travel and Qdenga eligibility (Green Book ch 15a).",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Explicit A&E and 999 warning signs; teach-back; direct call to the admitting team.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Aaron Bell",
    "age": "24 years · male",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "⚠ Returned from Thailand 4 days ago. Walk-in centre malaria test negative.",
    "reason": "“Fever, headache and aching since Thailand.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Let him tell it. Note “the malaria test was negative”."
    },
    {
     "t": "1–5",
     "h": "Travel history",
     "d": "Timeline, where, bites, prophylaxis, freshwater, sex, food and water; warning signs; sepsis screen; ibuprofen."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Travel bug; is it serious; work."
    },
    {
     "t": "6–8",
     "h": "Examine and explain",
     "d": "Full observations, rash, abdomen, bleeding. Malaria first; dengue most likely."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Same-day hospital tests; paracetamol and fluids, no NSAIDs; warning signs; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Accepts one negative malaria test; manages at home with bloods “next week”; suggests ibuprofen; no warning signs.",
    "pass": "Keeps malaria on the table, recognises dengue, arranges same-day testing, avoids NSAIDs and safety-nets.",
    "exc": "All of the above, plus: a structured exposure history; knows three samples over 24–48 hours are needed; screens for sepsis; explains the critical phase as the fever settles; names specific warning signs; handles work; mentions future travel risk."
   },
   "avoid": [
    {
     "dont": "“Your malaria test was negative, so we can rule that out.”",
     "instead": "“One negative test isn’t enough; it needs repeating today.”",
     "why": "Three negative samples over 24–48 hours are needed (UK malaria guidelines 2016)."
    },
    {
     "dont": "“Take ibuprofen for the aches.”",
     "instead": "“Paracetamol only; avoid ibuprofen and aspirin.”",
     "why": "NSAIDs and aspirin increase bleeding risk if platelets fall."
    },
    {
     "dont": "“It’s just a virus, it’ll pass.”",
     "instead": "“It’s probably dengue, which usually settles, but these warning signs need hospital straight away.”",
     "why": "Severe dengue can develop as the fever settles."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work",
     "t": "He is too unwell to work; offer a fit note after 7 days or self-certification before that."
    },
    {
     "h": "Young traveller",
     "t": "Pre-travel advice and bite avoidance matter for future trips."
    }
   ],
   "legal": [
    {
     "h": "Notification",
     "t": "Laboratories report confirmed dengue to UKHSA. Clinicians must notify suspected notifiable diseases such as malaria or enteric fever to the local health protection team (Health Protection (Notification) Regulations 2010)."
    },
    {
     "h": "Fit note",
     "t": "Self-certify for the first 7 days; fit note thereafter if needed."
    }
   ],
   "professional": [
    {
     "h": "Handover",
     "t": "Phone the admitting team; share the travel history, observations and the negative walk-in test."
    },
    {
     "h": "Not being falsely reassured",
     "t": "Another service’s negative test does not end the malaria question."
    }
   ],
   "community": [
    {
     "h": "Travel health",
     "t": "NaTHNaC and travel clinics for bite avoidance and dengue vaccine eligibility after confirmed infection."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Any possibility of malaria: one negative test does not exclude it",
     "Dengue warning signs: abdominal pain, persistent vomiting, bleeding, lethargy, fluid accumulation",
     "Sepsis criteria (NICE NG253)",
     "Postural dizziness or reduced urine output"
    ],
    "psychosocial": [
     "Work pressure",
     "Travel pattern and exposures",
     "Understanding of the negative test"
    ],
    "ice": [
     "Idea: a travel bug; not malaria because the test was negative",
     "Concern: is it serious",
     "Expectation: a diagnosis"
    ]
   },
   "diagnosis": "“This is most likely dengue, a mosquito-borne virus, but malaria must be properly excluded today.”",
   "diagnosisLay": "“Dengue is like a severe flu passed on by mosquitoes. Most people recover with fluids and rest, but it can lower the cells that help blood clot, which is why we check your blood and avoid ibuprofen.”",
   "management": {
    "reflectIce": "“You thought the negative test ruled malaria out. It’s less likely, but one test isn’t enough, so we’ll repeat it today.”",
    "psychosocial": "Address work with a fit note and a realistic recovery time.",
    "sharedPlan": [
     "Same-day hospital assessment: repeat malaria films, FBC, LFT, U&E, cultures, dengue NS1/PCR",
     "Fluids, rest, paracetamol (dose per BNF); no NSAIDs or aspirin",
     "Future travel advice; Qdenga eligibility after confirmed infection (Green Book ch 15a)"
    ],
    "safetyNet": [
     "Abdominal pain, persistent vomiting, bleeding, bruising, drowsiness, faintness or little urine: A&E or 999",
     "Warning signs can appear as the fever settles"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Fever in adults",
    "s": "Visual algorithm",
    "href": "algorithms/fever-adults.html"
   },
   {
    "ic": "🗺️",
    "t": "Maculopapular rash",
    "s": "Visual algorithm",
    "href": "algorithms/maculopapular-rash.html"
   },
   {
    "ic": "💠",
    "t": "Malaria prophylaxis",
    "s": "Management protocol · travel",
    "href": "management/malaria-prophylaxis.html"
   },
   {
    "ic": "💠",
    "t": "Hepatitis A",
    "s": "Management protocol · travel differential",
    "href": "management/hepatitis-a.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests the returning-traveller reflex. Candidates fail by trusting one negative malaria test, by managing a febrile traveller at home, and by recommending ibuprofen.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting a single negative malaria test.",
     "why": "Three negative samples over 24–48 hours are needed (UK malaria guidelines 2016).",
     "fix": "Arrange same-day repeat films."
    },
    {
     "dom": "tasks",
     "fail": "No structured travel history.",
     "why": "The differential depends on region, timing and exposures.",
     "fix": "Where, when, bites, prophylaxis, freshwater, sex, food and water."
    },
    {
     "dom": "tasks",
     "fail": "Suggesting NSAIDs.",
     "why": "Bleeding risk with thrombocytopenia.",
     "fix": "Paracetamol and fluids only."
    },
    {
     "dom": "tasks",
     "fail": "Missing the warning signs.",
     "why": "Severe dengue often develops as the fever settles.",
     "fix": "Name abdominal pain, vomiting, bleeding, drowsiness; A&E if any."
    },
    {
     "dom": "rto",
     "fail": "Ignoring his work worry.",
     "why": "It shapes whether he rests and returns if worse.",
     "fix": "Address it and offer a fit note if needed."
    },
    {
     "dom": "gs",
     "fail": "Routine bloods with no same-day plan.",
     "why": "Fever after travel needs results today.",
     "fix": "Same-day hospital assessment with a phone handover."
    }
   ]
  }
 },
 "diverticular-disease": {
  "stem": {
   "name": "Joan Carver",
   "age": "62-year-old woman",
   "pmh": [
    "Diverticular disease noted on a previous scan (type and date not given in the case: check the report)"
   ],
   "meds": [
    "Not specified in the case: check the repeat record, including NSAIDs and opioids"
   ],
   "allergy": "None recorded",
   "recent": "Recurrent crampy left lower abdominal pain; bowels alternating between constipation and looser stools.",
   "reason": "“Is the diverticular disease causing this, and what do I do about it?”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG147 Diverticular disease: diagnosis and management (2019) · [2] NICE NG12 (updated April 2026) Suspected cancer: recognition and referral (updated April 2026) · [3] NICE HTG690 Quantitative faecal immunochemical testing to guide colorectal cancer pathway referral in primary care · [4] NICE NG253 Suspected sepsis in people aged 16 or over · [5] BNF: antispasmodics, bulk-forming laxatives, co-amoxiclav (doses per BNF)",
   "summary": "Diverticulosis is common and usually incidental; diverticular disease means symptoms from the diverticula; diverticulitis means inflammation. A 62-year-old with a change in bowel habit must not have it written off as diverticular disease: NICE NG12 (updated April 2026) and HTG690 [2, 3] recommend offering FIT to adults with a change in bowel habit, and a result of 10 µg Hb/g or more triggers a suspected cancer pathway referral. Manage the symptomatic disease with diet, fluids, bulk-forming laxatives and an antispasmodic [1]; recognise acute diverticulitis and its complications, and give clear safety-net advice.",
   "points": [
    {
     "h": "The spectrum",
     "t": "Diverticulosis: pouches without symptoms, usually found incidentally. Diverticular disease: intermittent lower abdominal (usually left-sided) pain, often with altered bowel habit, bloating or mucus, without systemic inflammation. Acute diverticulitis: constant abdominal pain, usually left iliac fossa, with fever, localised tenderness and raised inflammatory markers; complicated if abscess, perforation, fistula, obstruction or haemorrhage [1]."
    },
    {
     "h": "Managing diverticular disease",
     "t": "NG147 [1]: advise a healthy balanced diet with whole grains, fruit and vegetables, increasing fibre gradually with adequate fluids; consider a bulk-forming laxative for constipation and an antispasmodic for cramping; do not offer antibiotics for diverticular disease. Doses per BNF [5]. Review NSAID and opioid use, which are linked to complications."
    },
    {
     "h": "Acute diverticulitis in the community",
     "t": "NG147 [1]: if systemically well without complications, consider a no-antibiotic strategy with advice to return if symptoms persist or worsen; offer an antibiotic (co-amoxiclav first choice, per NG147 and BNF) if systemically unwell, immunosuppressed or with significant comorbidity. Advise paracetamol and avoidance of NSAIDs and opioids where possible, because they may increase the risk of perforation. Refer for same-day hospital assessment if pain is uncontrolled, a complication is suspected, fluids cannot be maintained, or the person is frail or cannot be managed at home."
    },
    {
     "h": "Colorectal cancer: do not anchor",
     "t": "NICE NG12 (updated April 2026) [2] and HTG690 [3]: offer FIT to adults with an abdominal mass, a change in bowel habit or iron-deficiency anaemia; to those aged 40 and over with unexplained weight loss and abdominal pain; to those under 50 with rectal bleeding and unexplained abdominal pain or weight loss; to those aged 50 and over with unexplained rectal bleeding, abdominal pain or weight loss; and to those aged 60 and over with anaemia even without iron deficiency. Refer on the suspected cancer pathway if FIT is 10 µg Hb/g or more. A rectal mass or unexplained anal mass or ulceration is referred without FIT. A normal FIT does not end the matter if symptoms persist."
    },
    {
     "h": "Previous imaging",
     "t": "Find out what the earlier scan was and whether the whole colon was examined. A CT that reported diverticula is not the same as a colonoscopy or CT colonography that excluded a tumour, and symptoms may have changed since."
    },
    {
     "h": "Red flags for admission",
     "t": "Severe or generalised abdominal pain or peritonism, sepsis features [4], significant rectal bleeding, vomiting with distension and absolute constipation (obstruction), pneumaturia or faecal vaginal discharge (fistula), or failure to improve. These need same-day hospital assessment."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Carver, I’m Dr Clarke. What’s been happening?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "I keep getting crampy pain low down on the left side of my tummy, and my bowels are all over the place: constipated, then loose. A scan a while back mentioned diverticular disease. Is that what’s causing it, and what do I do about it?"
   },
   {
    "who": "dr",
    "text": "Thank you. It may well be, but I want to make sure we’re not missing anything else, so I’ll ask a few questions and examine your tummy.",
    "dom": "tasks",
    "why": "Signals that diverticular disease will not be assumed"
   },
   {
    "phase": "Focused history",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When did the change in your bowels start, and is it different from what’s normal for you?",
    "dom": "tasks",
    "why": "Establishes a change in bowel habit: an NICE NG12 (updated April 2026) FIT criterion"
   },
   {
    "who": "pt",
    "text": "It’s been going on a while now. It isn’t how my bowels used to be."
   },
   {
    "who": "dr",
    "text": "Have you noticed any blood from your back passage, mixed in or on the paper, or black stools?",
    "dom": "tasks",
    "why": "Rectal bleeding"
   },
   {
    "who": "pt",
    "text": "No, I haven’t seen any."
   },
   {
    "who": "dr",
    "text": "Any weight loss without trying, loss of appetite, or feeling unusually tired or breathless?",
    "dom": "tasks",
    "why": "Weight loss and symptoms of anaemia"
   },
   {
    "who": "pt",
    "text": "I don’t think I’ve lost weight, and I feel all right in myself."
   },
   {
    "who": "dr",
    "text": "Tell me about the pain. Does it come and go, or has it ever been constant, with a fever or feeling shivery and unwell?",
    "dom": "tasks",
    "why": "Diverticular disease versus acute diverticulitis"
   },
   {
    "who": "pt",
    "text": "It comes and goes. Cramps, then it eases, especially after I open my bowels. No fever."
   },
   {
    "who": "dr",
    "text": "Any vomiting, a swollen tummy, being unable to pass wind, or air or bits in your urine?",
    "dom": "tasks",
    "why": "Obstruction and fistula"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Do you take any painkillers such as ibuprofen or codeine, or any other medicines?",
    "dom": "tasks",
    "why": "NSAIDs and opioids: complication risk and constipation"
   },
   {
    "who": "pt",
    "text": "Just paracetamol now and then."
   },
   {
    "who": "dr",
    "text": "And do you remember what the scan was: a CT, or a camera test into the bowel?",
    "dom": "tasks",
    "why": "Clarifies whether the colon has been fully examined"
   },
   {
    "who": "pt",
    "text": "I’m not sure what kind of scan it was. I don’t remember a camera test."
   },
   {
    "phase": "ICE and examination",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What have you been thinking this is, and is anything worrying you?",
    "dom": "rto",
    "why": "ICE"
   },
   {
    "who": "pt",
    "text": "I assumed it’s the diverticular thing. I just want to know how to stop the pain and get my bowels back to normal."
   },
   {
    "who": "dr",
    "text": "Thank you. Let me examine your tummy, check your temperature and pulse, and I’d like to offer an internal examination with a chaperone, if you’re happy.",
    "dom": "tasks",
    "why": "Abdominal exam, obs; DRE offered with chaperone and consent"
   },
   {
    "who": "pt",
    "text": "(After examination) Is it all right?"
   },
   {
    "phase": "Explanation",
    "clock": "6–9 min",
    "who": "dr",
    "text": "Your tummy is soft with some mild tenderness low on the left, no lumps, and no fever. This fits diverticular disease: the pouches can cause crampy pain and irregular bowels. It isn’t diverticulitis, which is when a pouch becomes inflamed and causes constant pain and fever.",
    "dom": "tasks",
    "why": "Places her on the spectrum"
   },
   {
    "who": "dr",
    "text": "But I don’t want to put everything down to the pouches. At 62, a change in bowel habit is a reason to check for bowel cancer, even when diverticula have been seen. The first step is a simple home stool test called FIT, which looks for tiny amounts of blood. If it’s positive, I’ll refer you urgently for a camera test.",
    "dom": "tasks",
    "why": "NICE NG12 (updated April 2026) and HTG690: FIT for change in bowel habit, explained proportionately"
   },
   {
    "who": "pt",
    "text": "Cancer? I hadn’t even thought of that."
   },
   {
    "who": "dr",
    "text": "Most likely it’s the diverticular disease, but we don’t know that the inside of the bowel has been looked at directly, so the test is the safe thing to do. Even if the FIT is normal, if the symptoms continue I’d still want to look further.",
    "dom": "rto",
    "why": "Honest, proportionate; explains a normal FIT is not the end"
   },
   {
    "phase": "Plan",
    "clock": "9–11 min",
    "who": "dr",
    "text": "I’ll also do blood tests: a blood count to check for anaemia, iron levels, inflammation markers and kidney function.",
    "dom": "tasks",
    "why": "FBC and ferritin (IDA is another FIT criterion), CRP, U&E"
   },
   {
    "who": "dr",
    "text": "For the symptoms: build up fibre gradually, with whole grains, fruit and vegetables, and drink plenty. A fibre supplement from the pharmacy can help both the constipation and the looseness. For the cramps, a medicine called an antispasmodic. Keep to paracetamol for pain and avoid anti-inflammatories like ibuprofen.",
    "dom": "tasks",
    "why": "NG147 measures; NSAID avoidance"
   },
   {
    "who": "pt",
    "text": "Will I need antibiotics?"
   },
   {
    "who": "dr",
    "text": "Antibiotics don’t help diverticular disease without inflammation, and even mild diverticulitis often settles without them. They’re for when someone is unwell with infection.",
    "dom": "tasks",
    "why": "NG147 antibiotic stewardship"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Seek help the same day if the pain becomes constant or severe, you get a fever or shivers, bleed from the back passage, vomit, or can’t open your bowels or pass wind. I’ll ring you with the FIT and blood results, and see you in about four to six weeks to review. Can you tell me the plan?",
    "dom": "gs",
    "why": "Complication safety-net; results; review; teach-back"
   },
   {
    "who": "pt",
    "text": "The stool test and bloods, more fibre and water, the cramp medicine, no ibuprofen, and come back quickly if the pain is constant or I bleed or get a fever."
   },
   {
    "who": "dr",
    "text": "That’s it exactly.",
    "dom": "gs",
    "why": "Confirms shared understanding"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; lets her give the story and her question.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Impact of unpredictable bowels and pain on daily life and going out.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up that she is unsure what the scan was and that no camera test is remembered; ‘isn’t how my bowels used to be’ as a change in habit.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (diverticular disease explains it), concern (the recurrent pain and erratic bowels), expectation (a management plan); raises the cancer check sensitively.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Abdominal examination, obs; DRE offered with chaperone; FIT, FBC, ferritin, CRP, U&E.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Diverticular disease versus diverticulitis, colorectal cancer, IBS-type symptoms, constipation.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Bleeding, weight loss, anaemia, obstruction, fistula, sepsis; NSAID and opioid use.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Symptomatic diverticular disease, with colorectal cancer to be excluded because of the change in habit.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "FIT per NICE NG12 (updated April 2026) and HTG690 with suspected cancer referral if 10 or more; NG147 diet, bulk laxative, antispasmodic; no antibiotic.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Paracetamol, avoid NSAIDs; FBC and ferritin; clarifies previous imaging.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day advice for diverticulitis or complications; results by phone; review in four to six weeks; teach-back.",
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
    "name": "Joan Carver",
    "age": "62 years · female",
    "pmh": [
     "Diverticular disease on a previous scan"
    ],
    "meds": [
     "Check repeat record"
    ],
    "allergy": "None recorded",
    "recent": "Recurrent crampy left lower abdominal pain; alternating constipation and loose stools.",
    "reason": "“Is that what’s causing it, and what do I do about it?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Let her explain; signal you’ll check for other causes."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Duration of bowel change; bleeding; weight loss; anaemia symptoms; pain pattern; fever; obstruction and fistula; NSAIDs, opioids; what the scan was."
    },
    {
     "t": "5–6",
     "h": "ICE and examine",
     "d": "Her ideas and worries; abdomen, obs; DRE offered with chaperone."
    },
    {
     "t": "6–11",
     "h": "Explain and plan",
     "d": "Diverticular disease, not diverticulitis; FIT for change in bowel habit; bloods; fibre, fluids, bulk laxative, antispasmodic; no NSAIDs; no antibiotic."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "Same-day features; results; review; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Accepts ‘it’s the diverticular disease’, gives fibre advice and antibiotics, and does not offer FIT despite a change in bowel habit at 62.",
    "pass": "Distinguishes disease from diverticulitis, offers FIT with a plan for urgent referral if positive, gives NG147 symptom management and safety-nets complications.",
    "exc": "All of the above, plus: finds out whether the colon was ever imaged, checks FBC and ferritin, explains that a normal FIT does not end the matter, advises against NSAIDs, withholds antibiotics with a clear reason, and raises the cancer check without alarming her."
   },
   "avoid": [
    {
     "dont": "“The scan showed diverticular disease, so that explains it.”",
     "instead": "“It may well be the diverticula, but a change in your bowels at 62 needs a simple test to rule out anything else.”",
     "why": "NICE NG12 (updated April 2026) and HTG690 recommend FIT for any adult with a change in bowel habit; cancer can coexist."
    },
    {
     "dont": "“I’ll give you some antibiotics to settle it.”",
     "instead": "“Antibiotics don’t help diverticular disease; they’re for infection when someone is unwell.”",
     "why": "NG147: do not offer antibiotics for diverticular disease."
    },
    {
     "dont": "“Take ibuprofen when the pain is bad.”",
     "instead": "“Stick to paracetamol and avoid anti-inflammatories.”",
     "why": "NG147 advises avoiding NSAIDs and opioids where possible because of perforation risk."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Diet and daily life",
     "t": "Unpredictable bowels can restrict going out and working. Practical fibre changes need to fit her cooking and budget; increase gradually to limit bloating."
    },
    {
     "h": "Raising cancer",
     "t": "She has not mentioned cancer; introducing the FIT needs honest, proportionate language so she neither dismisses the test nor panics."
    }
   ],
   "legal": [
    {
     "h": "Consent and chaperones",
     "t": "Explain and seek consent for a rectal examination; offer a chaperone and record the offer and the name of the chaperone (GMC Intimate examinations and chaperones, 2024)."
    }
   ],
   "professional": [
    {
     "h": "Safety-netting FIT",
     "t": "Track FIT kits that are not returned and results that need action; practice systems should flag outstanding tests."
    },
    {
     "h": "Anchoring",
     "t": "A prior diagnosis on a report is a common cause of delayed cancer diagnosis; re-check the history each time."
    }
   ],
   "community": [
    {
     "h": "Screening and support",
     "t": "She is within the NHS Bowel Cancer Screening Programme age range in England, but screening is for people without symptoms: symptomatic FIT is separate. Dietitian input if needed; bowel charities for information."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Change in bowel habit at 62: FIT per NICE NG12 (updated April 2026) and HTG690; suspected cancer referral if 10 µg Hb/g or more",
     "Rectal bleeding, weight loss, anaemia, abdominal or rectal mass",
     "Constant pain with fever, peritonism or sepsis features: acute or complicated diverticulitis, same-day assessment",
     "Vomiting, distension, absolute constipation; pneumaturia; heavy rectal bleeding: admission"
    ],
    "psychosocial": [
     "Assumes the old label explains everything",
     "How to raise cancer proportionately",
     "Impact of unpredictable bowels"
    ],
    "ice": [
     "Idea: it’s the diverticular disease",
     "Concern: the recurrent pain and erratic bowels",
     "Expectation: a plan to control the symptoms"
    ]
   },
   "diagnosis": "“This fits diverticular disease, but because your bowels have changed, I’d like a simple stool test to make sure nothing else is going on.”",
   "diagnosisLay": "“Diverticula are like little pockets pushed out through weak spots in the bowel wall, a bit like a worn inner tube. They can make the bowel cramp and behave unpredictably. If one gets inflamed, that’s diverticulitis, which is different.”",
   "management": {
    "reflectIce": "“You want the pain and your bowels sorted, and we’ll do that. Because your bowels have changed, I also want the stool test so we’re not assuming.”",
    "psychosocial": "Raise the cancer check honestly; make fibre changes gradual and practical.",
    "sharedPlan": [
     "FIT now; suspected cancer referral if 10 µg Hb/g or more; further tests if symptoms persist despite a normal result",
     "FBC, ferritin, CRP, U&E",
     "Gradual fibre increase with fluids; bulk-forming laxative; antispasmodic (doses per BNF)",
     "Paracetamol; avoid NSAIDs and opioids; no antibiotics",
     "Clarify previous imaging"
    ],
    "safetyNet": [
     "Constant or severe pain, fever, rectal bleeding, vomiting, or unable to pass stool or wind: same-day assessment",
     "Results by phone; review in four to six weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Diverticular disease",
    "s": "Protocol · NG147 and the NICE NG12 (updated April 2026) caveat",
    "href": "management/diverticular-disease.html"
   },
   {
    "ic": "📋",
    "t": "Diverticulosis",
    "s": "Case walkthrough",
    "href": "../cases/diverticulosis.html"
   },
   {
    "ic": "🗺️",
    "t": "Rectal bleeding",
    "s": "Visual algorithm · FIT and suspected cancer pathway referral",
    "href": "algorithms/rectal-bleeding.html"
   },
   {
    "ic": "🗺️",
    "t": "Abdominal pain",
    "s": "Visual algorithm · red flags",
    "href": "algorithms/abdominal-pain.html"
   },
   {
    "ic": "💠",
    "t": "Constipation in adults",
    "s": "Protocol · laxative choice",
    "href": "management/constipation-adult.html"
   }
  ],
  "pitfalls": {
   "intro": "The trap is the label on an old scan. Marks go to separating disease from diverticulitis, offering FIT for a change in bowel habit, managing symptoms per NG147, and safety-netting complications.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Attributing the change in bowel habit to diverticular disease without FIT.",
     "why": "NICE NG12 (updated April 2026) and HTG690 recommend FIT for any adult with a change in bowel habit; cancer can mimic or coexist.",
     "fix": "Offer FIT and act on 10 µg Hb/g or more."
    },
    {
     "dom": "tasks",
     "fail": "Not asking what the previous scan was.",
     "why": "Diverticula on a CT do not mean the colon has been examined for a tumour.",
     "fix": "Check the report; plan colonic investigation if symptoms persist."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing antibiotics for diverticular disease.",
     "why": "NG147: no antibiotics without acute diverticulitis, and a no-antibiotic strategy is often appropriate even then.",
     "fix": "Diet, bulk laxative and antispasmodic; antibiotics only when systemically unwell or high-risk."
    },
    {
     "dom": "tasks",
     "fail": "Recommending ibuprofen or codeine for pain.",
     "why": "NSAIDs and opioids may increase perforation risk and opioids worsen constipation.",
     "fix": "Paracetamol."
    },
    {
     "dom": "rto",
     "fail": "Ordering FIT without explaining why, or explaining it in alarming terms.",
     "why": "She expected a symptom plan; an unexplained or frightening test harms trust and uptake.",
     "fix": "Explain that a change in bowel habit at her age is checked routinely, and what happens with each result."
    },
    {
     "dom": "gs",
     "fail": "Generic ‘come back if worse’ advice.",
     "why": "Diverticulitis and its complications need prompt recognition.",
     "fix": "List constant pain, fever, bleeding, vomiting and obstruction as same-day triggers; plan review."
    }
   ]
  }
 },
 "familial-adenomatous-polyposis": {
  "stem": {
   "name": "Daniel Frost",
   "age": "22-year-old man",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "Father died of bowel cancer in his early 40s; other relatives had bowel cancer young. The family was told by the hospital that it is hereditary.",
   "reason": "“Do I need to be tested or screened? Am I going to get it too?”"
  },
  "knowledge": {
   "guideline": "[1] BSG/ACPGBI/UKCGG guidelines for the management of hereditary colorectal cancer (Monahan et al., Gut 2020) · [2] NICE NG151 (colorectal cancer, 2020) · [3] NICE HTG430 (formerly DG27; molecular testing strategies for Lynch syndrome in people with colorectal cancer, 2017) · [4] NICE NG12 (updated April 2026) · [5] ABI Code on Genetic Testing and Insurance (2018) · [6] GMC Confidentiality: good practice in handling patient information (2017)",
   "summary": "Bowel cancer in a father in his early 40s and other young relatives, labelled hereditary by the hospital, points to an inherited syndrome such as familial adenomatous polyposis (FAP) or Lynch syndrome. Refer promptly to clinical genetics, who can use the family’s known variant if there is one. In FAP, surveillance normally starts in early adolescence, so a 22-year-old who has had none needs prompt action. Testing is his choice. Ask about bowel symptoms, because symptoms need the usual suspected-cancer route.",
   "points": [
    {
     "h": "Recognise the pattern",
     "t": "Colorectal cancer at a young age in more than one relative, and a hospital statement that it runs in the family, suggest a hereditary syndrome. The commonest are Lynch syndrome and FAP; MUTYH-associated polyposis is another [1]."
    },
    {
     "h": "FAP",
     "t": "FAP is caused by a variant in the APC gene and is autosomal dominant: each child of an affected parent has a 1 in 2 chance of inheriting it. Hundreds to thousands of adenomas develop from adolescence, and without treatment the lifetime colorectal cancer risk approaches 100%. Extra-colonic features include duodenal adenomas, desmoid tumours, osteomas, dental anomalies, congenital hypertrophy of the retinal pigment epithelium and thyroid cancer [1]."
    },
    {
     "h": "Surveillance",
     "t": "BSG/ACPGBI/UKCGG [1] advise colonoscopy for at-risk children in classical FAP families from age 12 to 14, with prophylactic colectomy timed by polyp burden, usually in late teens or early adulthood, and upper GI surveillance later. A young adult from a known FAP family who has had no surveillance needs prompt genetics and colonoscopy referral."
    },
    {
     "h": "Lynch syndrome",
     "t": "Also autosomal dominant, from mismatch repair gene variants. Fewer polyps but a high risk of colorectal, endometrial and other cancers. Colonoscopy surveillance starts at an age set by the gene [1]. NICE NG151 [2] recommends considering daily aspirin to reduce colorectal cancer risk in Lynch syndrome. Tumours of people with colorectal cancer are tested for Lynch syndrome (NICE HTG430, formerly DG27 [3])."
    },
    {
     "h": "MUTYH",
     "t": "MUTYH-associated polyposis is autosomal recessive, so it usually affects siblings rather than parents and children. Genetics will clarify which syndrome applies to his family."
    },
    {
     "h": "Predictive testing",
     "t": "If the family variant is known, a predictive blood test can show whether he carries it. It is his choice, after genetic counselling. Insurers in the UK cannot ask for predictive test results, except Huntington’s disease for very large life policies (ABI Code 2018 [5])."
    },
    {
     "h": "Symptoms change the route",
     "t": "Rectal bleeding, change in bowel habit, weight loss, abdominal pain or iron-deficiency anaemia need assessment in line with NICE NG12 (updated April 2026) [4], including FIT where indicated, regardless of the genetics referral."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Frost, I’m Dr Ahmed. What would you like to talk about today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "My dad died of bowel cancer in his early 40s, and a couple of other relatives had it young too. The hospital told my family it runs in the genes. I’m 22 and I’m worried. Do I need to be tested or screened? Am I going to get it too?"
   },
   {
    "who": "dr",
    "text": "I’m very sorry about your dad. You’ve done exactly the right thing coming in. I’d like to understand the family history, check a couple of things about you, and then explain what this could mean and what we can do. Is that okay?",
    "dom": "rto",
    "why": "Condolence, validation and agenda"
   },
   {
    "who": "pt",
    "text": "Yes."
   },
   {
    "phase": "Family and personal history",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Can you tell me about the relatives who had bowel cancer: which side of the family and how old they were?",
    "dom": "tasks",
    "why": "Family history and pattern"
   },
   {
    "who": "pt",
    "text": "I don’t know all the details. They were young, like him."
   },
   {
    "who": "dr",
    "text": "Did the hospital mention a particular name for the condition, or a gene test that found a fault in the family?",
    "dom": "tasks",
    "why": "Establishes whether a family variant is known"
   },
   {
    "who": "pt",
    "text": "I don’t know the details. Just that it’s genetic."
   },
   {
    "who": "dr",
    "text": "Has anyone ever offered you tests or a camera check of your bowel before?",
    "dom": "tasks",
    "why": "Checks for missed cascade testing or surveillance"
   },
   {
    "who": "pt",
    "text": "No, never."
   },
   {
    "who": "dr",
    "text": "Have you had any bleeding from your bottom, a change in your bowel habit, tummy pain, weight loss or tiredness?",
    "dom": "tasks",
    "why": "Symptom screen for the NICE NG12 (updated April 2026) route"
   },
   {
    "who": "pt",
    "text": "No, nothing."
   },
   {
    "who": "dr",
    "text": "How have things been for you since your dad died, and with all this on your mind?",
    "dom": "rto",
    "why": "Emotional impact and bereavement"
   },
   {
    "who": "pt",
    "text": "It’s hard. I think about it a lot."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What do you understand about how it runs in families?",
    "dom": "rto",
    "why": "Elicits ideas"
   },
   {
    "who": "pt",
    "text": "Just that I might have it too."
   },
   {
    "who": "dr",
    "text": "What worries you most, and what were you hoping I could do?",
    "dom": "rto",
    "why": "Concerns and expectations"
   },
   {
    "who": "pt",
    "text": "That I’ll die young like him. I want to know if I need testing or screening."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "When bowel cancer affects several relatives at a young age and the hospital says it’s genetic, it usually means a gene fault is passed down. One possibility is familial adenomatous polyposis, or FAP, which causes lots of polyps in the bowel from the teenage years. Another is Lynch syndrome. The genetics team will work out which.",
    "dom": "tasks",
    "why": "Names the likely syndromes"
   },
   {
    "who": "pt",
    "text": "And would I have it?"
   },
   {
    "who": "dr",
    "text": "With both of these, a parent with the fault passes it on to each child with a one in two chance. So you might have inherited it, and you might not. The really important thing is that if you do carry it, regular camera tests and, in FAP, removing the bowel before cancer starts can prevent the cancer. Knowing gives you control.",
    "dom": "tasks",
    "why": "Explains 50% inheritance and that surveillance prevents cancer"
   },
   {
    "who": "pt",
    "text": "So I could stop it happening to me?"
   },
   {
    "who": "dr",
    "text": "That’s the aim, yes.",
    "dom": "rto",
    "why": "Honest hope"
   },
   {
    "phase": "Plan",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’ll refer you to clinical genetics today, and mark it as a priority, because in FAP families checks usually start in the early teens. If the family fault is known, a blood test can show whether you have it. They’ll talk it through first, and whether you have the test is your decision.",
    "dom": "tasks",
    "why": "Prompt genetics referral; predictive testing is his choice"
   },
   {
    "who": "pt",
    "text": "What if I’d rather not know?"
   },
   {
    "who": "dr",
    "text": "That’s your right. Genetics can still arrange camera checks based on the family history, so you’d be protected either way. And in the UK, insurers can’t ask you for a predictive gene test result, apart from one rare condition.",
    "dom": "rto",
    "why": "Respects the right not to know; addresses a common worry"
   },
   {
    "who": "pt",
    "text": "That helps. Should I tell anyone else?"
   },
   {
    "who": "dr",
    "text": "Other relatives may also be at risk. The genetics team can help you decide how to share it. It’s your information, and we’d support you with it.",
    "dom": "gs",
    "why": "Cascade implications handled sensitively"
   },
   {
    "phase": "Safety net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "While you wait, if you get any bleeding from your bottom, a change in your bowels, tummy pain or weight loss, come back straight away, because that would need checking separately and quickly. Let’s speak again once you’ve heard from genetics. Can you tell me what happens next?",
    "dom": "gs",
    "why": "Symptom safety net, follow-up and teach-back"
   },
   {
    "who": "pt",
    "text": "You’re referring me to genetics, they’ll talk about a test and camera checks, and I come back if I get any bowel symptoms."
   },
   {
    "who": "dr",
    "text": "Exactly. And you can come and talk to me about any of it, including how you’re feeling about your dad.",
    "dom": "gs",
    "why": "Continuity and emotional support"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; acknowledged his father’s death before gathering information.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored bereavement, how often he thinks about it, and his fear of dying young.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up young-onset cancer in his father and other relatives and the hospital’s hereditary label.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: he might have it. Concern: dying young like his father. Expectation: testing or screening.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "No examination needed for an asymptomatic man; symptom screen; genetics referral for predictive testing and surveillance.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "FAP versus Lynch syndrome versus MUTYH-associated polyposis; established whether a family variant is known.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for bowel symptoms that would need the NICE NG12 (updated April 2026) route; noted absent surveillance so far.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "At 50% risk of an inherited colorectal cancer syndrome, most likely FAP or Lynch syndrome.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Prompt clinical genetics referral; predictive testing his choice; surveillance explained as life-saving.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Right not to know, insurance, and informing relatives handled sensitively.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Symptom safety net; follow-up after genetics; open offer of support; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Investigations & results"
   ],
   "stem": {
    "name": "Daniel Frost",
    "age": "22 years · male",
    "pmh": [
     "None recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "None recorded",
    "recent": "Father died of bowel cancer in his early 40s; other young relatives affected; told it is hereditary.",
    "reason": "“Do I need testing?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Condolence; agenda."
    },
    {
     "t": "1–5",
     "h": "History",
     "d": "Family pattern, known variant, prior surveillance, bowel symptoms, bereavement."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Might have it; fear of dying young; wants testing."
    },
    {
     "t": "6–8",
     "h": "Explain",
     "d": "FAP or Lynch; 1 in 2 inheritance; surveillance prevents cancer."
    },
    {
     "t": "8–11",
     "h": "Plan",
     "d": "Priority genetics referral; choice; insurance; relatives."
    },
    {
     "t": "11–12",
     "h": "Safety net",
     "d": "Bowel symptoms; follow-up; support; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Arranges a suspected-cancer referral or a FIT test for an asymptomatic man, or reassures him because of his age; no genetics referral.",
    "pass": "Recognises a hereditary syndrome, explains 1 in 2 inheritance, refers to clinical genetics and safety-nets for symptoms.",
    "exc": "All of that, plus: notes that surveillance should have started years ago and prioritises the referral, respects the right not to know, addresses insurance and relatives, and supports his grief."
   },
   "avoid": [
    {
     "dont": "“You’re young, so you don’t need to worry yet.”",
     "instead": "“In families like yours, checks usually start in the teenage years, so let’s move quickly.”",
     "why": "FAP surveillance starts at 12–14 (BSG/ACPGBI/UKCGG)."
    },
    {
     "dont": "“You should definitely have the test.”",
     "instead": "“Whether you have it is your decision, and genetics will help you think it through.”",
     "why": "Predictive testing needs informed, voluntary consent."
    },
    {
     "dont": "“I’ll send a FIT kit.”",
     "instead": "“Genetics will arrange the right camera checks.”",
     "why": "FIT is for symptomatic assessment, not hereditary surveillance."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Bereavement",
     "t": "His father’s early death shapes his fear. Offer support and bereavement services if he wants them."
    },
    {
     "h": "Future plans",
     "t": "Carrier status can affect decisions about relationships and children. Genetics services discuss reproductive options when relevant."
    }
   ],
   "legal": [
    {
     "h": "Insurance",
     "t": "Under the ABI Code on Genetic Testing and Insurance (2018), insurers cannot require or use predictive genetic test results, except for Huntington’s disease in life insurance over £500,000. Family history questions may still be asked."
    },
    {
     "h": "Confidentiality",
     "t": "His genetic information is confidential. Sharing it with relatives is his choice, with support; disclosure without consent is rarely justified (GMC Confidentiality 2017)."
    }
   ],
   "professional": [
    {
     "h": "Missed cascade testing",
     "t": "Surveillance in FAP families usually starts in early adolescence. If he was never offered it, consider whether the family pathway broke down and act promptly; reflect or raise it as a learning event if appropriate."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "UK polyposis registries and charities for bowel cancer and hereditary conditions offer information and peer support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Rectal bleeding, change in bowel habit, weight loss, abdominal pain or anaemia: NICE NG12 (updated April 2026) route",
     "No surveillance despite a known FAP family: prompt referral",
     "Multiple young-onset cancers in the family"
    ],
    "psychosocial": [
     "Grief after his father’s early death",
     "Fear of dying young",
     "Implications for relatives and future children"
    ],
    "ice": [
     "Idea: he may have inherited it",
     "Concern: dying young",
     "Expectation: testing or screening"
    ]
   },
   "diagnosis": "At 50% risk of an inherited colorectal cancer syndrome (probable FAP or Lynch syndrome) from a family history labelled hereditary; asymptomatic; no surveillance so far.",
   "diagnosisLay": "“There may be a gene fault in your family that raises the risk of bowel cancer. You have a one in two chance of having inherited it. If you have, regular checks and treatment can stop the cancer developing.”",
   "management": {
    "reflectIce": "“You’re frightened of dying young like your dad. The good news is that finding out gives us the chance to prevent that.”",
    "psychosocial": "Bereavement support; right not to know; help with telling relatives.",
    "sharedPlan": [
     "Priority referral to clinical genetics",
     "Predictive testing if the family variant is known, after counselling, his choice",
     "Colonoscopy surveillance as advised by genetics",
     "Insurance information"
    ],
    "safetyNet": [
     "Bowel symptoms: return promptly for NICE NG12 (updated April 2026) assessment",
     "Review after the genetics appointment",
     "Open offer of emotional support"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Rectal bleeding",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) and FIT",
    "href": "algorithms/rectal-bleeding.html"
   },
   {
    "ic": "🗺️",
    "t": "Abnormal cancer markers",
    "s": "Visual algorithm · cancer risk context",
    "href": "algorithms/abnormal-cancer-markers.html"
   },
   {
    "ic": "📋",
    "t": "Anxiety",
    "s": "Case walkthrough · health worry and grief",
    "href": "../cases/anxiety.html"
   }
  ],
  "pitfalls": {
   "intro": "This is a genetics conversation, not a cancer referral. The marks go to recognising the syndrome, acting promptly and leaving the choices with him.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Sending a suspected-cancer referral or FIT kit for an asymptomatic man.",
     "why": "Hereditary risk is managed through genetics and surveillance.",
     "fix": "Refer to clinical genetics; use NICE NG12 (updated April 2026) only for symptoms."
    },
    {
     "dom": "tasks",
     "fail": "Treating the referral as routine.",
     "why": "FAP surveillance usually starts at 12–14; he has had none.",
     "fix": "Prioritise the referral and explain why."
    },
    {
     "dom": "tasks",
     "fail": "Getting the inheritance wrong.",
     "why": "Dominant conditions carry a 1 in 2 risk to each child.",
     "fix": "Explain the 50% risk clearly."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about bowel symptoms.",
     "why": "Symptoms change the route and urgency.",
     "fix": "Ask and safety-net."
    },
    {
     "dom": "rto",
     "fail": "Pushing him to test.",
     "why": "Predictive testing is his choice.",
     "fix": "Offer counselling and respect the right not to know."
    },
    {
     "dom": "rto",
     "fail": "Ignoring his grief.",
     "why": "His father’s death drives his fear.",
     "fix": "Acknowledge it and offer support."
    }
   ]
  }
 },
 "forced-marriage": {
  "stem": {
   "name": "Sana",
   "age": "16-year-old young woman",
   "pmh": [
    "No past medical history given in the case: check the record"
   ],
   "meds": [
    "Not specified in the case: check the repeat record"
   ],
   "allergy": "None recorded",
   "recent": "Booked appointment about headaches. No other recent contact recorded.",
   "reason": "Headaches (booked reason). Attends alone."
  },
  "knowledge": {
   "guideline": "[1] Anti-social Behaviour, Crime and Policing Act 2014, s121 (forced marriage offence) · [2] Marriage and Civil Partnership (Minimum Age) Act 2022 (in force 27 February 2023) · [3] Family Law Act 1996 Part 4A: Forced Marriage Protection Orders · [4] HM Government, The Right to Choose: multi-agency statutory guidance for dealing with forced marriage and multi-agency practice guidelines (Forced Marriage Unit, 2023) · [5] GMC Protecting children and young people (2012) and GMC Confidentiality (2017) · [6] Working Together to Safeguard Children (2023)",
   "summary": "A 16-year-old who fears being taken abroad to be married is a child at risk of significant harm. In England and Wales, since 27 February 2023, it is a crime to do anything intended to cause a child under 18 to marry, whether or not coercion is used, and this includes non-legally-binding religious or cultural ceremonies [1, 2]. The GP must see her alone, believe her, apply the ‘one chance’ principle, never involve or alert the family, and refer to children’s social care the same day (police on 999 if travel or harm is imminent), with advice from the Forced Marriage Unit [4]. A Forced Marriage Protection Order can prevent her removal from the UK [3].",
   "points": [
    {
     "h": "The law",
     "t": "Using violence, threats or any other coercion to cause someone to marry, or deceiving someone into going abroad for that purpose, is an offence under s121 of the 2014 Act [1], maximum 7 years. The 2022 Act [2] raised the minimum age of marriage and civil partnership to 18 in England and Wales and made it an offence to cause a child to marry, with no need to prove coercion and including ceremonies not recognised in law. An arranged marriage between consenting adults is lawful; at 16 there is no lawful marriage to arrange."
    },
    {
     "h": "Forced Marriage Protection Orders",
     "t": "Under Part 4A of the Family Law Act 1996 [3], the family court can make an FMPO to protect a person at risk, for example by ordering surrender of passports or forbidding travel. The person, a local authority or others with the court’s permission can apply; orders can be made urgently and without notice to the family. Breaching an FMPO is a criminal offence (maximum 5 years)."
    },
    {
     "h": "The one chance principle",
     "t": "The statutory guidance [4] warns that professionals may have only one chance to speak to a potential victim. Act at this consultation: see her alone, in a safe place, take a full account, and do not send her home to ‘think about it’ without a safety plan and referral."
    },
    {
     "h": "What not to do",
     "t": "The guidance [4] lists actions that can put a victim at greater risk: involving the family, community or religious leaders; family counselling, mediation, arbitration or reconciliation; using relatives, friends or community members as interpreters; and sharing information with anyone without careful consideration. Use a professional interpreter and do not send letters or make calls to the family home."
    },
    {
     "h": "Referral and information sharing",
     "t": "Refer to children’s social care the same day under local procedures and Working Together [6]; call 999 if she is in immediate danger or travel is imminent. Seek advice from the Forced Marriage Unit (FCDO and Home Office), which supports professionals and victims [4]. GMC guidance [5]: share information to protect a child at risk of significant harm, telling her what you will share and why unless that would increase the risk. Record her words verbatim and store the record securely."
    },
    {
     "h": "Safety planning",
     "t": "Agree a safe way and time to contact her, and a code word. Advise her to keep a copy of her passport and key documents somewhere safe, and emergency numbers memorised. If she is taken to an airport against her will she can tell airport security or police. British nationals abroad can contact the nearest British embassy or high commission; the FMU can assist overseas [4]."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Sana, I’m Dr Hughes. Come in and have a seat. What would you like to talk about today?",
    "dom": "rto",
    "why": "Open start"
   },
   {
    "who": "pt",
    "text": "I came about my headaches really, but… there’s something else. My parents are taking me abroad in the summer holidays. They say it’s just to see family, but I overheard them, and I think they’re planning for me to marry a man over there. I don’t want to. I’m really scared. Please don’t tell them I told you."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That took real courage, and I’m glad you did. You’re safe in this room, and it’s just you and me. I won’t be speaking to your parents about this. Can you tell me more about what you heard?",
    "dom": "rto",
    "why": "Believes her; confirms she is alone; immediate reassurance about the family"
   },
   {
    "who": "pt",
    "text": "I heard them talking about a wedding over there, and it was about me. Nobody has asked me."
   },
   {
    "phase": "Understanding the risk",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When is the trip, and do you know which country and for how long?",
    "dom": "tasks",
    "why": "Timing of travel: the key to urgency"
   },
   {
    "who": "pt",
    "text": "When school finishes for the summer. They haven’t said how long."
   },
   {
    "who": "dr",
    "text": "Who has your passport at the moment?",
    "dom": "tasks",
    "why": "Control of documents"
   },
   {
    "who": "pt",
    "text": "I don’t know where it is."
   },
   {
    "who": "dr",
    "text": "Has anyone threatened you, hurt you, or stopped you going out, using your phone or seeing friends?",
    "dom": "tasks",
    "why": "Coercion, violence, restriction of freedom"
   },
   {
    "who": "pt",
    "text": "Nobody’s hurt me. I just can’t talk to them about it."
   },
   {
    "who": "dr",
    "text": "Has anything like this happened to a sister, cousin or anyone else in the family?",
    "dom": "tasks",
    "why": "Prior family history of forced marriage"
   },
   {
    "who": "pt",
    "text": "Not that I know of."
   },
   {
    "who": "dr",
    "text": "Do you feel safe going home tonight? And have you ever thought about hurting yourself because of this?",
    "dom": "tasks",
    "why": "Immediate safety and self-harm risk"
   },
   {
    "who": "pt",
    "text": "I think it’s OK tonight. I haven’t thought about hurting myself. I just want it to stop."
   },
   {
    "who": "dr",
    "text": "Is there anyone you trust, at school or anywhere else, who knows about this?",
    "dom": "tasks",
    "why": "Protective adults"
   },
   {
    "who": "pt",
    "text": "No one. You’re the first person."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What are you most frightened of right now?",
    "dom": "rto",
    "why": "Explores her concern"
   },
   {
    "who": "pt",
    "text": "That if anyone finds out I told, they’ll take me sooner. Or I’ll just never come back."
   },
   {
    "who": "dr",
    "text": "And what were you hoping I might do?",
    "dom": "rto",
    "why": "Expectation"
   },
   {
    "who": "pt",
    "text": "I don’t know. Help me without them knowing."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "What you’re describing is called forced marriage. It’s against the law in this country, and since 2023 it’s a crime for anyone to arrange for someone under 18 to be married, here or abroad, even in a religious ceremony. None of this is your fault.",
    "dom": "tasks",
    "why": "Names it; explains the 2022 Act for under-18s"
   },
   {
    "who": "pt",
    "text": "Even if it’s not official?"
   },
   {
    "who": "dr",
    "text": "Yes, even then. My job is to keep you safe, and I need to be honest with you about how. Because you’re 16 and at risk of serious harm, I have to share this with the people whose job is to protect young people: children’s social care. I’ll tell you exactly what I share. I will not contact your parents, and they will not be told by me that you came here.",
    "dom": "tasks",
    "why": "Explains the duty to share honestly, with limits"
   },
   {
    "who": "pt",
    "text": "Will they go to my house?"
   },
   {
    "who": "dr",
    "text": "They are trained in exactly this situation and know not to put you at risk by going to your family without a plan. They can involve the police, and there is a court order called a Forced Marriage Protection Order which can stop anyone taking you abroad, for example by holding passports. There’s also a government team called the Forced Marriage Unit that advises us and you.",
    "dom": "tasks",
    "why": "Explains FMPO and FMU in plain words"
   },
   {
    "phase": "Plan",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what I’d like to do. While you’re here, I’ll ring our safeguarding lead and children’s social care. Is it all right for you to wait with me while I do that?",
    "dom": "tasks",
    "why": "Acts in this consultation: the one chance principle"
   },
   {
    "who": "pt",
    "text": "OK. As long as my parents don’t find out."
   },
   {
    "who": "dr",
    "text": "What’s a safe way for someone to contact you? Is your phone private, or would school be safer? We can also agree a code word, so if you ever call and say it, we know you need help.",
    "dom": "tasks",
    "why": "Safe contact method and code word"
   },
   {
    "who": "pt",
    "text": "School, I suppose. That would be safer than home."
   },
   {
    "who": "dr",
    "text": "If you can, take a photo of your passport and keep it with a trusted person. If you’re ever taken to an airport and don’t want to go, tell airport security or police. If you’re abroad, the British embassy can help. And if you’re in danger at any time, call 999.",
    "dom": "tasks",
    "why": "Practical safety advice"
   },
   {
    "who": "dr",
    "text": "About the headaches: I’d like to hear about them briefly and check your blood pressure and eyes. Stress like this can cause headaches, but I don’t want to ignore them.",
    "dom": "gs",
    "why": "Returns to the presenting complaint"
   },
   {
    "who": "pt",
    "text": "They’re just in the evenings, when I’m worrying."
   },
   {
    "phase": "Close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "I’ll write down only what you’ve told me, in your own words, in a secure part of your record. Can you tell me what we’ve agreed?",
    "dom": "gs",
    "why": "Documentation; teach-back"
   },
   {
    "who": "pt",
    "text": "You’re calling social care now, they’ll contact me through school, not my parents, I keep a copy of my passport, and I call 999 if it’s urgent."
   },
   {
    "who": "dr",
    "text": "Exactly. You’ve done the right thing, Sana. You’re not on your own with this.",
    "dom": "rto",
    "why": "Closes with support"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; allows the disclosure behind the headache pretext.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Controls at home (phone, passport, movement), trusted adults, school.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up ‘please don’t tell them’ and ‘you’re the first person’ as cues to fear and isolation.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a marriage is planned), concern (being taken sooner, not returning), expectation (help without the family knowing).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Sees her alone; brief headache history with BP and fundi; no family or community interpreter.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Forced marriage versus other family conflict; other abuse; self-harm.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Travel date, passport control, threats, violence, restriction, siblings or cousins, safety tonight.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Forced marriage named as abuse and a crime; under-18 marriage illegal since 2023.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day referral to children’s social care and safeguarding lead while she waits; FMU advice; police if imminent.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Safe contact route and code word; passport copy; airport and embassy advice; headaches addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 for danger; verbatim secure record; teach-back; follow-up through a safe route.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Ethnicity, culture & diversity",
    "Professional & ethical dilemmas",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Sana",
    "age": "16 years · female",
    "pmh": [
     "Not stated in the case"
    ],
    "meds": [
     "Check record"
    ],
    "allergy": "None recorded",
    "recent": "No recent consultations recorded.",
    "reason": "Booked for headaches. Attends alone."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Let her disclose; confirm she is alone; reassure you will not contact her parents."
    },
    {
     "t": "1–5",
     "h": "Risk",
     "d": "Travel date, passport, threats, phone checks, other relatives, safety tonight, self-harm, trusted adults."
    },
    {
     "t": "5–8",
     "h": "ICE and explain",
     "d": "Her fear and hope. Name forced marriage; under-18 law; your duty to share and its limits; FMPO and FMU."
    },
    {
     "t": "8–11",
     "h": "Act now",
     "d": "Call safeguarding lead and children’s social care while she waits; safe contact and code word; passport copy; airport and embassy; brief headache check."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "999 if in danger; secure verbatim record; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Treats it as a family disagreement, suggests talking to her parents or mediation, promises total secrecy, or sends her away to ‘think about it’.",
    "pass": "Sees her alone, believes her, assesses travel risk, explains the need to share, refers to children’s social care and mentions the FMU, and gives safety advice.",
    "exc": "All of the above, plus: acts within the consultation (one chance), explains the 2022 Act and FMPOs, agrees a safe contact route and code word, avoids any family contact including letters or calls home, addresses the headaches, and documents verbatim and securely."
   },
   "avoid": [
    {
     "dont": "“Would it help if I had a word with your mum and dad?”",
     "instead": "“I won’t contact your parents. The people who help with this know how to keep you safe.”",
     "why": "Involving the family or mediation can escalate the risk; the statutory guidance advises against it."
    },
    {
     "dont": "“Everything you tell me is completely confidential.”",
     "instead": "“Most of what we talk about stays private, but when a young person is at risk of serious harm I have to share it to protect you. I’ll tell you what I share.”",
     "why": "False promises destroy trust when a referral follows; GMC guidance supports sharing to protect a child."
    },
    {
     "dont": "“Have a think and come back next week.”",
     "instead": "“Let’s make the calls now, while you’re here.”",
     "why": "She may not get another chance to disclose."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Honour and family pressure",
     "t": "Forced marriage often sits within honour-based abuse. Victims fear rejection by family and community as much as the marriage, which shapes what support feels possible."
    },
    {
     "h": "School",
     "t": "School is often the safest route of contact and a source of trusted adults; children’s social care can coordinate with the designated safeguarding lead."
    }
   ],
   "legal": [
    {
     "h": "Criminal law",
     "t": "Anti-social Behaviour, Crime and Policing Act 2014 s121: forced marriage offence, including deception to take someone abroad (maximum 7 years). Marriage and Civil Partnership (Minimum Age) Act 2022: minimum age 18 in England and Wales; causing a child to marry is an offence without proof of coercion."
    },
    {
     "h": "Forced Marriage Protection Orders",
     "t": "Family Law Act 1996 Part 4A: civil orders, available urgently and without notice, e.g. passport surrender or travel bans. Breach is a criminal offence (maximum 5 years)."
    },
    {
     "h": "Safeguarding duties",
     "t": "Children Act 1989 and Working Together to Safeguard Children (2023): refer a child at risk of significant harm to children’s social care."
    }
   ],
   "professional": [
    {
     "h": "Confidentiality",
     "t": "GMC Confidentiality (2017) and Protecting children and young people: disclose to protect a child from serious harm; tell her what will be shared unless that increases risk; share the minimum necessary with the right agencies."
    },
    {
     "h": "Interpreters and records",
     "t": "Use a professional interpreter, never family or community members. Record her words verbatim; protect the record from access by relatives, including online record access."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Forced Marriage Unit (FCDO and Home Office) for professionals and victims; specialist honour-based abuse charities; Childline; the British embassy or high commission if abroad."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Travel imminent or date set: same-day referral; police if departure is days away",
     "Passport held by family; phone monitored; movement restricted",
     "Threats or violence at home, or a sibling or cousin previously married young",
     "Self-harm or suicidal thoughts (a recognised risk in forced marriage)",
     "Not safe to go home tonight: 999 or police and emergency social care now"
    ],
    "psychosocial": [
     "Fear of losing family and community",
     "Isolation: no trusted adult told",
     "School as a safer contact route"
    ],
    "ice": [
     "Idea: a marriage is planned for her abroad",
     "Concern: being taken sooner, not returning, her parents finding out",
     "Expectation: help without the family knowing"
    ]
   },
   "diagnosis": "“What you’re describing is forced marriage. It’s abuse, and for someone under 18 it’s a crime in this country, even in a religious ceremony abroad.”",
   "diagnosisLay": "“Marriage has to be your free choice, and the law says no one under 18 can be married at all. Nobody is allowed to make that choice for you.”",
   "management": {
    "reflectIce": "“You’re frightened they’ll take you sooner if they find out, so everything we do will be planned so that they don’t hear it from us.”",
    "psychosocial": "Believe and support her; do not involve family or community; build on trusted contacts at school.",
    "sharedPlan": [
     "Same-day referral to children’s social care and the practice safeguarding lead while she is present",
     "Advice from the Forced Marriage Unit; police if travel or harm is imminent; FMPO considered",
     "Safe contact route (school) and a code word",
     "Copy of passport kept safely; airport and embassy advice",
     "Headaches assessed; verbatim, secure documentation"
    ],
    "safetyNet": [
     "Immediate danger or being taken to travel: 999",
     "Any change in plans or threats: use the agreed safe contact or tell a trusted adult at school"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Safeguarding",
    "s": "Case walkthrough · child protection",
    "href": "../cases/safeguarding.html"
   },
   {
    "ic": "🗺️",
    "t": "Headache",
    "s": "Visual algorithm · the booked reason",
    "href": "algorithms/headache.html"
   },
   {
    "ic": "📋",
    "t": "Headache",
    "s": "Case walkthrough",
    "href": "../cases/headache.html"
   }
  ],
  "pitfalls": {
   "intro": "The clinical content is small; the station is about decisive safeguarding in a single chance. Marks are lost for anything that alerts the family, for false promises, and for sending her away without a plan.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Suggesting a conversation with her parents, a family meeting or mediation.",
     "why": "The statutory guidance identifies family involvement and mediation as increasing risk.",
     "fix": "No family contact of any kind; refer to children’s social care."
    },
    {
     "dom": "tasks",
     "fail": "Deferring action to a later appointment.",
     "why": "The one chance principle: she may be taken abroad before she returns.",
     "fix": "Make the referral while she is with you."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about travel dates, passport and threats.",
     "why": "These decide how urgent the response must be and whether police or an FMPO are needed.",
     "fix": "Ask specifically and early."
    },
    {
     "dom": "tasks",
     "fail": "Treating it as lawful because she is 16 or because it may be ‘only religious’.",
     "why": "Since February 2023 causing a child to marry is an offence in England and Wales, including non-legal ceremonies.",
     "fix": "Explain the law plainly."
    },
    {
     "dom": "rto",
     "fail": "Promising complete confidentiality.",
     "why": "A referral will follow; a broken promise destroys trust.",
     "fix": "Explain honestly what you will share, with whom, and why."
    },
    {
     "dom": "gs",
     "fail": "No safe contact plan, or ignoring the headaches.",
     "why": "Letters or calls home can expose her; the presenting complaint still needs attention.",
     "fix": "Agree contact via school and a code word; briefly assess the headaches."
    }
   ]
  }
 },
 "halitosis": {
  "stem": {
   "name": "Sanjay Mehta",
   "age": "38-year-old man",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "No previous consultations about bad breath recorded.",
   "reason": "Persistent bad breath for a long time, affecting his confidence at work. Mints and mouthwash only mask it. Wonders about his stomach."
  },
  "knowledge": {
   "guideline": "[1] Office for Health Improvement and Disparities, Delivering better oral health: an evidence-based toolkit for prevention (version 4, 2021) · [2] NICE NG12 (updated April 2026) Suspected cancer: head and neck · [3] NICE CG184 (2014, updated 2019) Gastro-oesophageal reflux disease and dyspepsia in adults · [4] BNF, chlorhexidine mouthwash",
   "summary": "Most persistent bad breath comes from the mouth: the coating on the back of the tongue, gum disease, decay and a dry mouth. Start with the mouth, not the stomach. Look in the mouth, advise tongue cleaning and good oral hygiene, and ask him to see his dentist. Think about ENT and reflux causes if the mouth is healthy, recognise the rare systemic odours, and remember that some people are convinced of bad breath that others cannot detect.",
   "points": [
    {
     "h": "Mouth first",
     "t": "Most true halitosis arises in the mouth, from bacteria on the back of the tongue, gingivitis or periodontitis, decay, food trapping and dry mouth. Mouthwash masks the smell briefly but does not treat the cause."
    },
    {
     "h": "Oral hygiene that works",
     "t": "Brush twice daily with fluoride toothpaste, spit rather than rinse, clean between the teeth, and see a dentist regularly [1]. Add gentle tongue cleaning. Stopping smoking improves gum health and breath [1]."
    },
    {
     "h": "Dental care",
     "t": "Patients book NHS dental care directly; GPs do not refer routinely. Encourage a dental check for gum disease and decay. Chlorhexidine mouthwash can help gum inflammation short term but stains teeth and alters taste [4]."
    },
    {
     "h": "Non-oral causes",
     "t": "If the mouth is healthy, consider post-nasal drip and chronic rhinosinusitis, tonsil stones and tonsillitis, reflux [3], and chest infection or bronchiectasis. Drugs that dry the mouth and some foods (garlic, onion, alcohol) contribute."
    },
    {
     "h": "Systemic odours and cancer features",
     "t": "Rare but important: a sweet, fruity smell with thirst and weight loss suggests ketoacidosis; fetor hepaticus suggests liver failure; a urine-like smell suggests kidney failure. NICE NG12 (updated April 2026): unexplained mouth ulceration lasting more than 3 weeks, or a persistent unexplained neck lump, needs a suspected cancer pathway referral for oral cancer [2]."
    },
    {
     "h": "Perceived halitosis",
     "t": "Some people are sure they have bad breath when others notice nothing (halitophobia). Ask whether anyone has actually commented. Reassure with honesty, and explore anxiety, low mood or compulsive checking if the worry is out of proportion."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, Mr Mehta, I’m Dr Shah. What can I help with today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "This is embarrassing. I’ve had bad breath for ages and it’s knocking my confidence at work. Mints and mouthwash only mask it for a bit. I keep wondering if something’s wrong with my stomach. What’s actually causing it and how do I sort it?"
   },
   {
    "who": "dr",
    "text": "Thank you for bringing it up. It’s much more common than people think, and usually very treatable. I’ll ask some questions, have a look in your mouth, and then we’ll work out a plan.",
    "dom": "rto",
    "why": "Normalises and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Okay, good."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "How do you know about the smell? Has someone mentioned it, or is it something you notice yourself?",
    "dom": "tasks",
    "why": "True versus perceived halitosis"
   },
   {
    "who": "pt",
    "text": "I can taste it, and I think people step back when I talk. I’m always checking."
   },
   {
    "who": "dr",
    "text": "How do you look after your teeth, and when did you last see a dentist? Do you ever clean your tongue?",
    "dom": "tasks",
    "why": "Oral hygiene and dental history"
   },
   {
    "who": "pt",
    "text": "I brush, but I’ve never done anything with my tongue. It’s been a while since the dentist, to be honest."
   },
   {
    "who": "dr",
    "text": "Any bleeding gums, toothache, a dry mouth, or mouth ulcers that haven’t healed?",
    "dom": "tasks",
    "why": "Oral causes and oral-cancer features"
   },
   {
    "who": "pt",
    "text": "No ulcers. Nothing I’ve noticed."
   },
   {
    "who": "dr",
    "text": "What about your nose and throat: a blocked nose, catarrh running down the back of the throat, sore throats, or little white lumps on your tonsils?",
    "dom": "tasks",
    "why": "ENT causes"
   },
   {
    "who": "pt",
    "text": "Nothing like that."
   },
   {
    "who": "dr",
    "text": "And your stomach: heartburn, acid coming up, indigestion, or trouble swallowing?",
    "dom": "tasks",
    "why": "Reflux and upper-GI screen"
   },
   {
    "who": "pt",
    "text": "Not really. I just assumed that’s where it comes from."
   },
   {
    "who": "dr",
    "text": "A few general questions. Have you been very thirsty, passing a lot of urine, or lost weight? Any cough bringing up phlegm?",
    "dom": "tasks",
    "why": "Systemic and respiratory causes"
   },
   {
    "who": "pt",
    "text": "No, I feel well in myself."
   },
   {
    "who": "dr",
    "text": "Do you smoke, drink alcohol, or take any tablets or medicines, including ones from the chemist?",
    "dom": "tasks",
    "why": "Smoking, alcohol and drug causes"
   },
   {
    "who": "pt",
    "text": "No regular tablets. Nothing else I can think of."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said it’s affecting your confidence. How is it affecting work and the rest of your life?",
    "dom": "rto",
    "why": "Explores impact"
   },
   {
    "who": "pt",
    "text": "I avoid talking to people close up. It’s getting me down a bit. I thought it must be my stomach and maybe I need a test."
   },
   {
    "who": "dr",
    "text": "That sounds really hard. Thank you for telling me. Let me look in your mouth and then I’ll explain.",
    "dom": "rto",
    "why": "Validates the psychosocial impact"
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "There’s a coating on the back of your tongue. I can’t check your teeth and gums the way a dentist can, but I can see no ulcers or lumps, and your throat and neck feel normal.",
    "dom": "tasks",
    "why": "Oral and neck examination"
   },
   {
    "who": "pt",
    "text": "So it’s not my stomach?"
   },
   {
    "who": "dr",
    "text": "Most likely not. In most people with bad breath, the cause is in the mouth: bacteria living in that tongue coating, and sometimes gum disease or decay. The stomach is a much less common cause, and you have no reflux symptoms. That’s why mouthwash only covers it up.",
    "dom": "tasks",
    "why": "Explains the oral cause; addresses the stomach idea"
   },
   {
    "who": "pt",
    "text": "That actually makes sense."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The good news is this is very fixable. Brush twice a day with fluoride toothpaste, clean between your teeth with floss or small brushes, and gently clean your tongue each day with a scraper or your brush. Would that fit into your routine?",
    "dom": "tasks",
    "why": "Oral hygiene with tongue cleaning; checks feasibility"
   },
   {
    "who": "pt",
    "text": "Yes, that’s easy enough."
   },
   {
    "who": "dr",
    "text": "Please also book a dental check-up, as gum disease and decay are common causes that only a dentist can properly check and treat. You can book directly with a dentist, or NHS 111 can help you find one.",
    "dom": "tasks",
    "why": "Dental review, with how to access it"
   },
   {
    "who": "pt",
    "text": "I’ll book one this week."
   },
   {
    "who": "dr",
    "text": "Drinking water through the day helps, and if you smoke or drink alcohol, cutting down helps your gums and breath too. If things aren’t better after the dental treatment, I’d look again at your nose, throat and stomach.",
    "dom": "tasks",
    "why": "Lifestyle and a plan for non-oral causes"
   },
   {
    "who": "pt",
    "text": "And the checking and worrying?"
   },
   {
    "who": "dr",
    "text": "That’s important too. Once the cause is treated, many people find the worry fades. If you’re still feeling low or checking a lot, come back and we’ll talk about support for that.",
    "dom": "rto",
    "why": "Addresses anxiety and checking"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Come back sooner if you get a mouth ulcer that doesn’t heal within three weeks, a lump in your neck, trouble swallowing, or you become very thirsty or lose weight. Otherwise, see me in about six to eight weeks after the dentist.",
    "dom": "gs",
    "why": "NICE NG12 (updated April 2026) oral-cancer features, systemic features, planned review"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "What will you do first when you get home?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Start cleaning my tongue and between my teeth, and book the dentist. Come back if I get an ulcer or lump or it doesn’t improve."
   },
   {
    "who": "dr",
    "text": "Exactly. This is common and treatable, and you’ve taken the right first step.",
    "dom": "gs",
    "why": "Confirms understanding; closes supportively"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; lets him describe the problem and his embarrassment without rushing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Impact on work, confidence and mood; avoiding close conversation.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up “I’m always checking” as a possible sign of anxiety; hears the stomach theory.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a stomach problem), concern (embarrassment, confidence), expectation (a test and a cure).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Examines the mouth, tongue, gums, throat and neck; no tests needed for a clear oral cause.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Oral causes versus ENT, reflux, respiratory, drug, systemic causes and perceived halitosis.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asks about non-healing ulcers, neck lumps, dysphagia, thirst and weight loss.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Oral halitosis, most likely from tongue coating; gum disease to be checked by a dentist.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Oral hygiene including tongue and interdental cleaning; dental check-up with guidance on access; lifestyle.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Plans reassessment for ENT or reflux causes if no improvement; addresses anxiety and checking.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Return for an ulcer lasting over 3 weeks, a neck lump, dysphagia, thirst or weight loss; review after dental care.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Sanjay Mehta",
    "age": "38 years · male",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "Nil recorded"
    ],
    "allergy": "NKDA",
    "recent": "No previous consultations about bad breath.",
    "reason": "“Bad breath for ages. Is it my stomach?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Opening",
     "d": "Normalise the embarrassment; hear the story and his stomach theory."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "True versus perceived, oral hygiene and dentist, gums, ulcers, ENT, reflux, systemic symptoms, smoking, alcohol, drugs."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Confidence and mood; expects a stomach test."
    },
    {
     "t": "6–8",
     "h": "Examine and explain",
     "d": "Tongue coating and gums; explain the oral cause and why mouthwash fails."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Tongue and interdental cleaning, dental check-up, lifestyle, anxiety support, NICE NG12 (updated April 2026) oral features, review, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Refers for endoscopy or prescribes a PPI for “stomach breath” without looking in the mouth; no dental advice; ignores the effect on his confidence.",
    "pass": "Examines the mouth, explains that most bad breath is oral, advises oral hygiene with tongue cleaning and a dental check-up, and safety-nets.",
    "exc": "All of the above, plus: separates true from perceived halitosis; screens ENT, reflux and systemic causes; applies NICE NG12 (updated April 2026) oral-cancer features; explains how to access a dentist; addresses the checking and low mood; teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s probably coming from your stomach; let’s get a camera test.”",
     "instead": "“Most bad breath starts in the mouth, so let’s start there.”",
     "why": "Oral causes dominate; endoscopy without upper-GI symptoms is unwarranted."
    },
    {
     "dont": "“Use a stronger mouthwash.”",
     "instead": "“Cleaning your tongue and between your teeth treats the cause.”",
     "why": "Mouthwash masks the smell; chlorhexidine stains teeth with long use (BNF)."
    },
    {
     "dont": "“I can’t smell anything, so there’s nothing wrong.”",
     "instead": "“Let’s treat what I can see, and talk about the worry too.”",
     "why": "Dismissal misses both real oral disease and halitophobia."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work and relationships",
     "t": "Bad breath can lead people to avoid close conversations, meetings and relationships. Ask how it affects daily life."
    },
    {
     "h": "Access to dentistry",
     "t": "Finding an NHS dentist can be hard. NHS 111 and the NHS website can help locate one; NHS dental charges apply unless exempt."
    }
   ],
   "legal": [
    {
     "h": "Scope of practice",
     "t": "GPs are not trained to treat periodontal disease. Advise dental care rather than attempting dental treatment, and document the advice given."
    }
   ],
   "professional": [
    {
     "h": "Taking embarrassment seriously",
     "t": "Patients often delay raising embarrassing symptoms. A respectful, matter-of-fact approach builds trust and may reveal anxiety or low mood."
    },
    {
     "h": "Avoiding unnecessary investigation",
     "t": "Explaining why the stomach is unlikely, and why no endoscopy is needed, is safer than treating reflux he does not have."
    }
   ],
   "community": [
    {
     "h": "Dental and pharmacy support",
     "t": "Dental hygienists teach cleaning technique. Community pharmacists can advise on tongue cleaners, interdental brushes and dry-mouth products."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Unexplained mouth ulcer lasting more than 3 weeks or persistent neck lump: suspected cancer pathway referral (NICE NG12 (updated April 2026))",
     "Dysphagia or weight loss",
     "Thirst, polyuria and a fruity smell (ketoacidosis); jaundice or confusion (liver failure)"
    ],
    "psychosocial": [
     "Embarrassment and loss of confidence at work",
     "Constant checking",
     "Low mood"
    ],
    "ice": [
     "Idea: a stomach problem",
     "Concern: embarrassment and how others see him",
     "Expectation: a test and a cure"
    ]
   },
   "diagnosis": "“This is bad breath coming from your mouth, most likely the coating on your tongue, and the dentist will check for gum disease.”",
   "diagnosisLay": "“The back of the tongue is like a shag-pile carpet. Bacteria hide in it and give off smelly gases. Mouthwash is like air freshener; cleaning the tongue is like hoovering the carpet.”",
   "management": {
    "reflectIce": "“You thought this was your stomach and might need a test. From what I can see, it’s coming from your mouth, which is good news because it’s very treatable.”",
    "psychosocial": "Acknowledge the embarrassment and its impact; offer support if the checking and low mood persist after treatment.",
    "sharedPlan": [
     "Brush twice daily with fluoride toothpaste, spit don’t rinse; interdental cleaning (OHID 2021)",
     "Daily gentle tongue cleaning",
     "Dental check-up for gum disease and decay; book directly or through NHS 111",
     "Water through the day; less smoking and alcohol if relevant",
     "Reassess nose, throat and reflux if not improved after dental treatment"
    ],
    "safetyNet": [
     "Return for a mouth ulcer lasting over 3 weeks, a neck lump, trouble swallowing, thirst or weight loss",
     "Review in 6–8 weeks after dental care"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Halitosis pathway",
    "s": "Visual algorithm · oral first · systemic odours",
    "href": "algorithms/halitosis.html"
   },
   {
    "ic": "🗺️",
    "t": "Dry mouth pathway",
    "s": "Visual algorithm · drugs · Sjögren’s",
    "href": "algorithms/dry-mouth.html"
   },
   {
    "ic": "🗺️",
    "t": "Mouth ulcers pathway",
    "s": "Visual algorithm · 3-week rule",
    "href": "algorithms/mouth-ulcers.html"
   },
   {
    "ic": "💠",
    "t": "GORD protocol",
    "s": "Reflux · PPI courses",
    "href": "management/gord.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is lost by chasing the stomach, by never looking in the mouth, and by missing the anxiety behind the visit. Each pattern below is common and fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Starting a PPI or requesting endoscopy for “stomach breath”.",
     "why": "Most halitosis is oral; he has no reflux or upper-GI symptoms.",
     "fix": "Examine the mouth first and explain the oral cause."
    },
    {
     "dom": "tasks",
     "fail": "Not examining the tongue, gums and neck.",
     "why": "Tongue coating and gum disease are the common causes; an ulcer or neck lump would change the plan (NICE NG12 (updated April 2026)).",
     "fix": "Look at tongue, gums, teeth, tonsils; feel the neck."
    },
    {
     "dom": "tasks",
     "fail": "Advising oral hygiene without mentioning the tongue or interdental cleaning.",
     "why": "Tongue coating is a major source and brushing alone misses it.",
     "fix": "Teach tongue and interdental cleaning alongside twice-daily brushing (OHID 2021)."
    },
    {
     "dom": "tasks",
     "fail": "“See your dentist” with no idea how he will get an appointment.",
     "why": "Access is a real barrier; the advice may go nowhere.",
     "fix": "Explain he can book directly or use NHS 111 to find a dentist."
    },
    {
     "dom": "rto",
     "fail": "Dismissing the problem because you cannot smell anything.",
     "why": "Misses real disease and the distress of halitophobia.",
     "fix": "Ask who has noticed it; explore checking and mood."
    },
    {
     "dom": "gs",
     "fail": "No safety-net or review.",
     "why": "Non-healing ulcers or systemic symptoms need prompt action.",
     "fix": "Name the 3-week ulcer rule, neck lump, dysphagia, thirst and weight loss; review after dental care; teach-back."
    }
   ]
  }
 },
 "hypermobility-eds": {
  "stem": {
   "name": "Niamh Carter",
   "age": "24-year-old woman",
   "pmh": [
    "Lifelong joint hypermobility",
    "Recurrent joint pain and partial dislocations"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "Joints partly dislocating and aching, bruises easily, soft stretchy skin, exhausted, dizzy on standing. Someone suggested Ehlers-Danlos. Feels she has been fobbed off.",
   "reason": "“I’ve been fobbed off a lot. What is it?”"
  },
  "knowledge": {
   "guideline": "[1] International Classification of the Ehlers-Danlos Syndromes and hEDS diagnostic criteria (Malfait et al., 2017) (international) · [2] Beighton score, as used in the 2017 criteria (international) · [3] Heart Rhythm Society expert consensus on postural tachycardia syndrome (2015) (international) · [4] NICE NG193 (chronic pain in over 16s, 2021) · [5] Equality Act 2010",
   "summary": "Generalised joint hypermobility with recurrent pain and subluxations, soft skin, easy bruising, fatigue and dizziness on standing suggests hypermobility spectrum disorder or hypermobile Ehlers-Danlos syndrome. There is no genetic test for hEDS; it is a clinical diagnosis using the 2017 criteria. Look for features of rarer types, especially vascular EDS, which need clinical genetics. Management is holistic and led by physiotherapy, with a careful approach to pain and attention to dizziness, fatigue and mood. Take her seriously.",
   "points": [
    {
     "h": "Assess hypermobility",
     "t": "The Beighton score (0–9) records passive little-finger extension, thumb to forearm, elbow and knee hyperextension beyond 10°, and palms flat on the floor [2]. In the 2017 hEDS criteria, a score of 5 or more counts as generalised hypermobility between puberty and age 50 [1]. A lower score with a convincing history can still be hypermobility."
    },
    {
     "h": "hEDS or HSD",
     "t": "hEDS needs generalised hypermobility plus systemic features, family history or musculoskeletal complications, and exclusion of other conditions [1]. People who do not meet all criteria have hypermobility spectrum disorder, which can be just as disabling and is managed the same way."
    },
    {
     "h": "Red flags for other types",
     "t": "Thin, translucent skin, extensive bruising, arterial dissection or aneurysm, bowel or uterine rupture, or a family history of sudden early death suggest vascular EDS. Very stretchy skin with wide atrophic scars suggests classical EDS. A tall, marfanoid build, lens dislocation or aortic root dilatation suggest Marfan syndrome or a related condition. These need clinical genetics referral [1]."
    },
    {
     "h": "Associated problems",
     "t": "Chronic pain, fatigue, dizziness from postural tachycardia, gut dysmotility, bladder symptoms, anxiety and low mood are common. Postural tachycardia syndrome in adults is a sustained heart-rate rise of 30 beats per minute or more within 10 minutes of standing, without orthostatic hypotension [3]; a lying-to-standing test in surgery is a reasonable first step."
    },
    {
     "h": "Tests",
     "t": "No blood test confirms hEDS. With easy bruising, check FBC and a clotting screen; with fatigue, consider FBC, ferritin, TFTs and coeliac serology. An ECG is reasonable with palpitations or dizziness."
    },
    {
     "h": "Management",
     "t": "Physiotherapy is central: graded strengthening, joint stability and proprioception, with pacing. Occupational therapy helps with daily activities and joint protection. For pain, use simple analgesia and non-drug approaches. NICE NG193 [4] advises against starting opioids for chronic primary pain, and opioids are best avoided for long-term hypermobility pain. For postural symptoms, advise fluids, salt as appropriate, slow standing and compression garments. Support mood and fatigue."
    },
    {
     "h": "Referral",
     "t": "The GP can often make the diagnosis. Refer to rheumatology or a hypermobility service where local pathways allow, and to clinical genetics if a rarer type is suspected. The condition may be a disability under the Equality Act 2010 [5], which supports workplace adjustments."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Ms Carter, I’m Dr Patel. What would you like to talk about?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "I’ve always been really bendy, double-jointed, but now my joints keep partly dislocating and aching all the time. I bruise at the slightest thing, my skin’s soft and stretchy, and I’m shattered. I get dizzy standing up too. Someone said it could be Ehlers-Danlos. I’ve been fobbed off a lot. What is it?"
   },
   {
    "who": "dr",
    "text": "I’m sorry you’ve felt fobbed off. What you’re describing is real, and I want to understand it properly. I’ll ask about each part, examine you, and then tell you what I think and what we can do. Is that okay?",
    "dom": "rto",
    "why": "Validates and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Yes. Thank you."
   },
   {
    "phase": "Focused history",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Which joints dislocate, how often, and do they go back by themselves?",
    "dom": "tasks",
    "why": "Pattern and frequency of subluxations"
   },
   {
    "who": "pt",
    "text": "Different joints, quite often. They usually go back on their own."
   },
   {
    "who": "dr",
    "text": "Tell me about the dizziness. Does it happen when you stand up, with a racing heart, and have you ever fainted?",
    "dom": "tasks",
    "why": "Postural tachycardia screen"
   },
   {
    "who": "pt",
    "text": "Yes, when I stand up. My heart goes fast and I feel faint."
   },
   {
    "who": "dr",
    "text": "Any problems with your tummy or bowels, or your bladder?",
    "dom": "tasks",
    "why": "Multisystem screen"
   },
   {
    "who": "pt",
    "text": "Sometimes, yes."
   },
   {
    "who": "dr",
    "text": "When you cut yourself, how does it heal? Is your skin very thin, so you can see the veins easily?",
    "dom": "tasks",
    "why": "Skin features of classical and vascular EDS"
   },
   {
    "who": "pt",
    "text": "It’s soft, but I wouldn’t say see-through."
   },
   {
    "who": "dr",
    "text": "Has anyone in the family had a burst artery or bowel, or died suddenly at a young age?",
    "dom": "tasks",
    "why": "Vascular EDS red flags"
   },
   {
    "who": "pt",
    "text": "No, not that I know of."
   },
   {
    "who": "dr",
    "text": "How is all this affecting your life day to day, and your mood?",
    "dom": "rto",
    "why": "Psychosocial impact"
   },
   {
    "who": "pt",
    "text": "I’m exhausted, and being told it’s nothing gets me down."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What do you think is going on?",
    "dom": "rto",
    "why": "Elicits ideas"
   },
   {
    "who": "pt",
    "text": "I think it might be Ehlers-Danlos."
   },
   {
    "who": "dr",
    "text": "And what worries you most, and what are you hoping for today?",
    "dom": "rto",
    "why": "Concerns and expectations"
   },
   {
    "who": "pt",
    "text": "Not being believed. I want someone to recognise it and actually help."
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’ll score how flexible your joints are with a standard test, look at your skin and any scars, check your build, listen to your heart, and check your pulse and blood pressure lying and then standing.",
    "dom": "tasks",
    "why": "Beighton score, skin, marfanoid features, active stand test"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "Your symptoms fit a hypermobility condition. It’s either hypermobile Ehlers-Danlos syndrome or a closely related condition called hypermobility spectrum disorder. There’s no blood test for it; it’s diagnosed with a set of clinical criteria, and I’ll go through those with you. Both are managed the same way.",
    "dom": "tasks",
    "why": "Names HSD or hEDS and explains clinical diagnosis"
   },
   {
    "who": "pt",
    "text": "So it’s real."
   },
   {
    "who": "dr",
    "text": "It’s real. The dizziness and fast heart on standing may be part of it too, something called postural tachycardia. The checks I’ve done will help with that.",
    "dom": "rto",
    "why": "Affirms and links the multisystem features"
   },
   {
    "phase": "Shared plan",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’d like to check some bloods because of the bruising and tiredness, including a blood count and clotting. The mainstay of treatment is physiotherapy with someone who understands hypermobility, working on strength and joint control, and pacing so you don’t boom and bust.",
    "dom": "tasks",
    "why": "Targeted tests and physiotherapy-led management"
   },
   {
    "who": "pt",
    "text": "Will physio actually help?"
   },
   {
    "who": "dr",
    "text": "It can, if it’s the right kind. Specialist hypermobility physio is different from general exercises, and it’s gradual. For the pain, we’ll use simple painkillers and other approaches rather than strong opioids, which tend to cause more problems long term. For the dizziness, plenty of fluids, standing slowly and compression tights can help.",
    "dom": "tasks",
    "why": "Pain approach avoiding opioids; postural measures"
   },
   {
    "who": "pt",
    "text": "Okay. Do I need a specialist?"
   },
   {
    "who": "dr",
    "text": "I’ll refer you to the rheumatology or hypermobility service if our local pathway allows. If anything suggested a rarer, more serious type, I’d refer to genetics, but nothing you’ve told me points that way. Which of these matters most to you to start with?",
    "dom": "tasks",
    "why": "Appropriate referral and prioritisation with her"
   },
   {
    "who": "pt",
    "text": "The pain and the tiredness."
   },
   {
    "phase": "Safety net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Then we’ll start there. If you ever have sudden severe pain in your chest, tummy or head, or you faint and injure yourself, get urgent help. A joint that won’t go back needs A&E. Let’s review in four weeks with the results. Can you tell me the plan?",
    "dom": "gs",
    "why": "Safety net, follow-up and teach-back"
   },
   {
    "who": "pt",
    "text": "Bloods, specialist physio, fluids and slow standing, simple painkillers, referral. Urgent help for sudden severe pain or a joint that won’t go back."
   },
   {
    "who": "dr",
    "text": "That’s it. We’ll build on it together.",
    "dom": "gs",
    "why": "Collaborative close"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; acknowledged being fobbed off before narrowing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored the effect on daily life, exhaustion and mood from not being believed.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up recurrent subluxations, skin features, bruising and postural dizziness with palpitations.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: Ehlers-Danlos. Concern: not being believed. Expectation: recognition and real help.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Beighton score, skin and scars, marfanoid features, heart, lying and standing pulse and BP; FBC, clotting, and fatigue bloods.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "hEDS versus HSD versus classical or vascular EDS and Marfan; bleeding disorder for bruising; PoTS.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened vascular EDS red flags: thin skin, family history of rupture or sudden early death.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Hypermobility spectrum disorder or hEDS, with possible postural tachycardia.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Hypermobility physiotherapy, pacing, non-opioid pain approach, fluids and compression for dizziness; priorities agreed.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Addressed mood and fatigue; rheumatology or hypermobility service; genetics only if red flags.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Urgent help for sudden severe pain or a joint that will not reduce; review in four weeks; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "New & undifferentiated presentations",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Niamh Carter",
    "age": "24 years · female",
    "pmh": [
     "Lifelong hypermobility; recurrent subluxations"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "None recorded",
    "recent": "Aching, partial dislocations, easy bruising, soft skin, fatigue and dizziness on standing; feels dismissed.",
    "reason": "“Someone said Ehlers-Danlos.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and validate",
     "d": "Acknowledge being fobbed off."
    },
    {
     "t": "1–5",
     "h": "History",
     "d": "Subluxations, dizziness, gut and bladder, skin and healing, vascular red flags, mood."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Thinks EDS; fears not being believed; wants help."
    },
    {
     "t": "6–8",
     "h": "Examine and explain",
     "d": "Beighton, skin, build, lying and standing observations; hEDS or HSD explained."
    },
    {
     "t": "8–11",
     "h": "Plan",
     "d": "Bloods, specialist physio, pain approach, postural measures, referral; prioritise with her."
    },
    {
     "t": "11–12",
     "h": "Safety net",
     "d": "Sudden severe pain, joint that won’t reduce; review; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Dismisses it as ‘just being flexible’, or orders a genetic test for hEDS; no vascular red-flag screen; opioids for pain.",
    "pass": "Recognises HSD or hEDS, uses the Beighton score, screens for vascular EDS, and plans physiotherapy-led care.",
    "exc": "All of that, plus: validates her experience, explains there is no genetic test for hEDS, recognises postural tachycardia, checks bruising bloods, avoids opioids, and agrees priorities with her."
   },
   "avoid": [
    {
     "dont": "“Lots of people are flexible. It’s nothing to worry about.”",
     "instead": "“What you’re describing is real, and it has a name.”",
     "why": "Repeats the dismissal she has experienced."
    },
    {
     "dont": "“We’ll do a gene test to confirm it.”",
     "instead": "“There’s no gene test for hypermobile EDS; it’s diagnosed clinically.”",
     "why": "No gene has been identified for hEDS (2017 criteria)."
    },
    {
     "dont": "“Let’s try something stronger, like codeine or tramadol.”",
     "instead": "“Let’s focus on physio, pacing and simple painkillers.”",
     "why": "Long-term opioids cause harm without clear benefit in chronic pain."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work and study",
     "t": "Fatigue and pain may affect work or study. Discuss reasonable adjustments and a fit note where needed."
    },
    {
     "h": "Benefits",
     "t": "If daily living or mobility is significantly affected, she may be eligible for Personal Independence Payment."
    }
   ],
   "legal": [
    {
     "h": "Equality Act 2010",
     "t": "A long-term condition with a substantial effect on daily activities can count as a disability, giving a right to reasonable adjustments at work or college."
    },
    {
     "h": "Driving",
     "t": "If she has fainted or nearly fainted, discuss whether it is safe to drive and check DVLA guidance on syncope."
    }
   ],
   "professional": [
    {
     "h": "Epistemic injustice",
     "t": "Being repeatedly disbelieved damages trust and delays care. Listening, recording her account and acting on it is part of good practice (GMC Good medical practice)."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "UK charities for Ehlers-Danlos and hypermobility provide information, peer support and physiotherapy resources; also PoTS UK for postural tachycardia."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Thin translucent skin, arterial or organ rupture, family history of sudden early death: vascular EDS, genetics",
     "Marfanoid build, lens or aortic problems: genetics or cardiology",
     "Syncope with injury or exertional syncope: cardiac assessment",
     "Joint that will not reduce: A&E"
    ],
    "psychosocial": [
     "Repeatedly dismissed",
     "Exhaustion and low mood",
     "Impact on daily life"
    ],
    "ice": [
     "Idea: Ehlers-Danlos",
     "Concern: not being believed",
     "Expectation: recognition and help"
    ]
   },
   "diagnosis": "Hypermobility spectrum disorder or hypermobile Ehlers-Danlos syndrome (2017 criteria), with possible postural tachycardia syndrome; no features of vascular or classical EDS on history.",
   "diagnosisLay": "“Your connective tissue, which holds your joints and skin together, is more stretchy than usual. That’s why your joints slip and ache, you bruise easily and you may feel dizzy on standing. It’s real, and it can be managed.”",
   "management": {
    "reflectIce": "“You’ve felt fobbed off, and you wondered about Ehlers-Danlos. I think you’re right that this is a hypermobility condition, and we’ll work on it together.”",
    "psychosocial": "Validation; mood support; work or study adjustments; PIP if eligible.",
    "sharedPlan": [
     "FBC and clotting screen; ferritin, TFTs and coeliac serology for fatigue",
     "Specialist hypermobility physiotherapy and pacing; occupational therapy",
     "Simple analgesia and non-drug approaches; avoid opioids",
     "Fluids, slow standing and compression for postural symptoms",
     "Rheumatology or hypermobility service where available; genetics if red flags"
    ],
    "safetyNet": [
     "Sudden severe chest, abdominal or head pain: 999",
     "Joint that will not go back: A&E",
     "Faints with injury: urgent review",
     "Review in four weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Joint pain",
    "s": "Visual algorithm · hypermobility",
    "href": "algorithms/joint-pain.html"
   },
   {
    "ic": "🗺️",
    "t": "Dizziness",
    "s": "Visual algorithm · postural symptoms",
    "href": "algorithms/dizziness.html"
   },
   {
    "ic": "📋",
    "t": "Chronic pain",
    "s": "Case walkthrough · NICE NG193",
    "href": "../cases/chronic-pain.html"
   },
   {
    "ic": "💠",
    "t": "Chronic pain",
    "s": "Protocol · non-opioid approach",
    "href": "management/chronic-pain.html"
   }
  ],
  "pitfalls": {
   "intro": "The failing candidate dismisses her or hands over a leaflet. The passing candidate recognises the condition, screens for the dangerous types and builds a practical plan with her.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Not scoring hypermobility.",
     "why": "The Beighton score underpins the diagnosis.",
     "fix": "Do or describe the Beighton score."
    },
    {
     "dom": "tasks",
     "fail": "Missing vascular EDS red flags.",
     "why": "Vascular EDS carries a risk of arterial and organ rupture.",
     "fix": "Ask about skin, rupture and family sudden deaths; refer to genetics if present."
    },
    {
     "dom": "tasks",
     "fail": "Ignoring the dizziness.",
     "why": "Postural tachycardia is common and treatable.",
     "fix": "Lying and standing pulse and BP; advise fluids and compression."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing opioids.",
     "why": "Long-term harm without benefit (NICE NG193).",
     "fix": "Physiotherapy, pacing and simple analgesia."
    },
    {
     "dom": "rto",
     "fail": "Dismissing her experience.",
     "why": "She has been fobbed off before.",
     "fix": "Validate and confirm it is real."
    },
    {
     "dom": "gs",
     "fail": "Overloading her with everything at once.",
     "why": "A multisystem condition needs priorities.",
     "fix": "Ask what matters most and plan a review."
    }
   ]
  }
 },
 "iatrogenic-dyspepsia": {
  "stem": {
   "name": "Carol Devine",
   "age": "63-year-old woman",
   "pmh": [
    "Knee pain (diagnosis not coded in the record)"
   ],
   "meds": [
    "Oral anti-inflammatory (NSAID) for knee pain, started a few weeks ago (drug and dose not stated)"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "NSAID started a few weeks ago for knee pain. No previous consultations about indigestion recorded.",
   "reason": "Burning indigestion and upper stomach pain since starting the new tablets. Wants something for the acid."
  },
  "knowledge": {
   "guideline": "[1] NICE CG184 (2014, updated 2019) Gastro-oesophageal reflux disease and dyspepsia in adults · [2] NICE NG12 (updated April 2026) Suspected cancer: recognition and referral, upper GI · [3] NICE NG226 (2022) Osteoarthritis in over 16s · [4] NICE CG141 (2012) Acute upper gastrointestinal bleeding in over 16s · [5] BNF, NSAIDs and proton pump inhibitors",
   "summary": "New dyspepsia that starts soon after a new NSAID is drug-induced until proved otherwise. Screen the upper-GI alarm features, stop or switch the culprit rather than adding a PPI on top, give short-term acid treatment and lifestyle advice, test for H. pylori if symptoms persist, and review. If an NSAID truly must continue, prescribe a PPI with it.",
   "points": [
    {
     "h": "Review the medicines first",
     "t": "NICE CG184 asks you to review medicines that can cause dyspepsia, such as calcium antagonists, nitrates, theophyllines, bisphosphonates, corticosteroids and NSAIDs [1]. Aspirin, other antiplatelets, SSRIs and iron can also upset the stomach. A clear link in time between the new drug and the symptoms is the key history."
    },
    {
     "h": "Upper-GI alarm features",
     "t": "NICE NG12 (updated April 2026): refer on a suspected cancer pathway for oesophageal or stomach cancer if there is dysphagia, or age 55 and over with weight loss and upper abdominal pain, reflux or dyspepsia. Consider non-urgent direct-access endoscopy at 55 and over with treatment-resistant dyspepsia [2]. At 63, Mrs Devine meets the age part, so ask about weight loss and swallowing directly."
    },
    {
     "h": "Bleeding is an emergency, not a referral",
     "t": "Haematemesis, melaena or collapse on an NSAID means possible bleeding peptic ulcer: arrange same-day hospital assessment [4]. Do not route bleeding through a routine or cancer pathway."
    },
    {
     "h": "Stop or switch the culprit",
     "t": "Stopping the oral NSAID treats the cause. For knee osteoarthritis, NICE NG226 puts therapeutic exercise and weight management first, offers a topical NSAID, and advises against routinely offering paracetamol or weak opioids [3]. Confirm the knee diagnosis at a later review."
    },
    {
     "h": "Symptom relief and H. pylori",
     "t": "For uninvestigated dyspepsia CG184 offers a full-dose PPI for 4 weeks or H. pylori test-and-treat [1]. Test for H. pylori only after 2 weeks without a PPI, and 4 weeks without antibiotics, or the result may be falsely negative [1]. Lifestyle advice: healthy weight, smoking, alcohol, and avoiding large or late meals."
    },
    {
     "h": "If an NSAID must continue",
     "t": "Use the lowest effective dose for the shortest time and prescribe a PPI with it [3][5]. Risk rises with age over 65, previous ulcer or bleed, and with anticoagulants, antiplatelets, corticosteroids or SSRIs. Oral NSAIDs also carry renal and cardiovascular risk [3][5]."
    },
    {
     "h": "Review, and don’t leave PPIs running",
     "t": "Review at about 4 weeks. If symptoms persist after the drug is stopped and treatment is given, or alarm features appear, investigate. Long-term PPIs should be reviewed at least yearly and stepped down to the lowest dose that controls symptoms, or stopped [1]."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, Mrs Devine, I’m Dr Shah. What can I do for you today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "Since I started those anti-inflammatory tablets for my knees a few weeks ago, I’ve had this burning indigestion and pain in the top of my stomach. Could you give me something for the acid? It’s really uncomfortable."
   },
   {
    "who": "dr",
    "text": "I’m sorry, that sounds miserable. I do want to help with the burning today. Can I ask a few questions first, so we get the right fix and not just a cover-up?",
    "dom": "rto",
    "why": "Acknowledges her request and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Of course."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Tell me about the indigestion. When did it start compared with the tablets, and where exactly is the pain?",
    "dom": "tasks",
    "why": "Establishes the time link to the drug"
   },
   {
    "who": "pt",
    "text": "Within a week or so of starting them. It’s here, at the top of my stomach, a burning, and some acid coming up."
   },
   {
    "who": "dr",
    "text": "Is the pain linked to effort, like walking uphill, or does it come with breathlessness or sweating?",
    "dom": "tasks",
    "why": "Screens a cardiac mimic of epigastric pain"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. It’s worse after I eat."
   },
   {
    "who": "dr",
    "text": "Some important questions. Have you had any trouble swallowing, or food sticking? Have you lost weight without trying?",
    "dom": "tasks",
    "why": "NICE NG12 (updated April 2026) upper-GI criteria at 63"
   },
   {
    "who": "pt",
    "text": "No, swallowing’s fine, and my weight hasn’t changed."
   },
   {
    "who": "dr",
    "text": "Any vomiting, any blood when you’ve been sick, or black, tarry stools? And have you felt faint or more tired than usual?",
    "dom": "tasks",
    "why": "Screens bleeding and anaemia"
   },
   {
    "who": "pt",
    "text": "No, none of that."
   },
   {
    "who": "dr",
    "text": "Apart from the knee tablets, are you taking anything else, including aspirin, blood thinners, steroids, or anything you buy yourself?",
    "dom": "tasks",
    "why": "Full medicine review, including over-the-counter drugs"
   },
   {
    "who": "pt",
    "text": "It’s the knee tablets that are new. That’s the only thing that’s changed."
   },
   {
    "who": "dr",
    "text": "And how are your knees with the tablets? What does the pain stop you doing?",
    "dom": "rto",
    "why": "Explores the reason for the drug and its impact"
   },
   {
    "who": "pt",
    "text": "They do help my knees, that’s the annoying thing. I don’t want to be back where I was, hobbling about."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "So the tablets help your knees, but your stomach is paying for it. What were you hoping I’d do?",
    "dom": "rto",
    "why": "Explores expectation"
   },
   {
    "who": "pt",
    "text": "I thought you’d just give me an acid tablet to go with them."
   },
   {
    "who": "dr",
    "text": "That’s a very reasonable thought. Is anything worrying you about the stomach pain itself?",
    "dom": "rto",
    "why": "Explores concerns"
   },
   {
    "who": "pt",
    "text": "Not really. I just want it to stop."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "From what you tell me, this is almost certainly caused by the anti-inflammatory tablets. They reduce the stomach’s own protective lining, which causes this burning, and in some people an ulcer or bleeding. At 63 the risk is higher.",
    "dom": "tasks",
    "why": "Names drug-induced dyspepsia and explains why it matters"
   },
   {
    "who": "pt",
    "text": "Oh. I didn’t know they could do that."
   },
   {
    "who": "dr",
    "text": "It’s very common. The reassuring part is that you have none of the warning signs I asked about: no swallowing trouble, weight loss, vomiting or bleeding. If you had, I’d be arranging an urgent specialist referral.",
    "dom": "tasks",
    "why": "Explains the red-flag screen"
   },
   {
    "who": "pt",
    "text": "That’s good. So can’t I just take an acid tablet with them?"
   },
   {
    "who": "dr",
    "text": "We could, but that would hide the problem while the tablets carry on irritating your stomach. The better fix is to stop the anti-inflammatory tablets, which removes the cause. The burning usually settles once they’re stopped.",
    "dom": "tasks",
    "why": "Treats the cause rather than masking it"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I know your knees matter too, so let’s not leave you hobbling. An anti-inflammatory gel rubbed onto the knees works well for knee pain and very little reaches the stomach. Exercises to strengthen the thigh muscles help a lot as well. How would you feel about trying that?",
    "dom": "rto",
    "why": "Negotiates alternative knee treatment"
   },
   {
    "who": "pt",
    "text": "I’d try the gel. I’m not sure about exercises, my knees ache."
   },
   {
    "who": "dr",
    "text": "That’s fair. I can refer you to a physiotherapist who will start gently. And for the burning, I’ll give you an acid-reducing tablet for four weeks while your stomach heals, then stop it. Does that sound fair?",
    "dom": "tasks",
    "why": "Short PPI course for symptoms after the culprit is stopped"
   },
   {
    "who": "pt",
    "text": "Yes, that’s what I wanted anyway. Only four weeks?"
   },
   {
    "who": "dr",
    "text": "Yes. They’re useful short-term but shouldn’t run on without a review. If the indigestion comes back after that, I’ll test for a stomach bug called H. pylori. That needs two weeks off the acid tablet first, or it can give a false result.",
    "dom": "tasks",
    "why": "H. pylori testing with the PPI washout"
   },
   {
    "who": "pt",
    "text": "Right. And if I really need the knee tablets again?"
   },
   {
    "who": "dr",
    "text": "Then we’d use the lowest dose for the shortest time, always with a stomach-protecting tablet alongside, and check your kidneys and blood pressure. Smaller, earlier evening meals and cutting down on alcohol also ease the burning.",
    "dom": "tasks",
    "why": "Gastroprotection if an NSAID must continue; lifestyle"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you vomit blood, pass black, tarry stools or feel faint, go to A&E or call 999 straight away. Book to see me sooner if you have trouble swallowing, lose weight or keep vomiting. Otherwise I’ll see you in four weeks.",
    "dom": "gs",
    "why": "Bleeding emergency advice, NICE NG12 (updated April 2026) features, planned review"
   },
   {
    "who": "pt",
    "text": "All right."
   },
   {
    "who": "dr",
    "text": "Could you tell me the plan in your own words, so I know I’ve explained it clearly?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Stop the anti-inflammatory tablets, use the gel and see the physio, take the acid tablet for four weeks, and come back if it doesn’t settle or I get those warning signs."
   },
   {
    "who": "dr",
    "text": "That’s exactly right. I’ll also add a note to your record about how these tablets affected you.",
    "dom": "gs",
    "why": "Confirms understanding; records the adverse reaction"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; lets her link the burning pain to the new knee tablets in her own words.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Impact of knee pain on mobility; why the NSAID was started and what she fears losing if it stops.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up “since I started those tablets” as the key cue; hears that the NSAID helps her knees.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (just acid), concern (the discomfort), expectation (a PPI to take alongside the NSAID).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Checks alarm features at the bedside; considers knee review and renal function and blood pressure if an NSAID is restarted; H. pylori test only after a PPI washout.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Drug-induced dyspepsia versus peptic ulcer, GORD, H. pylori, cardiac pain and upper-GI cancer.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asks about dysphagia, weight loss, vomiting, haematemesis, melaena and anaemia symptoms; applies NICE NG12 (updated April 2026) at age 63.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "NSAID-induced dyspepsia with no alarm features.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Stops the oral NSAID; topical NSAID and exercise for the knees; 4-week PPI then stop; lifestyle advice.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Plans for knee pain (physiotherapy, NG226); gastroprotection if an NSAID must continue; records the adverse reaction.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 or A&E for bleeding; earlier review for dysphagia, weight loss or vomiting; review at 4 weeks; H. pylori if symptoms return.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Carol Devine",
    "age": "63 years · female",
    "pmh": [
     "Knee pain"
    ],
    "meds": [
     "Oral NSAID for knees (started a few weeks ago)"
    ],
    "allergy": "NKDA",
    "recent": "NSAID started a few weeks ago.",
    "reason": "“Indigestion since my new tablets. Can I have something for the acid?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Opening",
     "d": "Hear the story and the request for an acid tablet; agree to look for the cause first."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Time link to the NSAID, pain character, cardiac screen, dysphagia, weight loss, vomiting, bleeding, full medicine list, knee impact."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Expects a PPI alongside the NSAID; wants the burning to stop."
    },
    {
     "t": "6–8",
     "h": "Explain",
     "d": "Drug-induced dyspepsia; no alarm features; why stopping beats masking."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Stop NSAID, topical NSAID and physio, 4-week PPI, H. pylori if it recurs, gastroprotection if an NSAID restarts, bleeding safety-net, review, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes a PPI to take with the NSAID and ends the consultation; no questions about swallowing, weight or bleeding; no plan for her knees.",
    "pass": "Links the dyspepsia to the NSAID, screens alarm features, stops the NSAID with an alternative for the knees, and safety-nets for bleeding.",
    "exc": "All of the above, plus: applies NICE NG12 (updated April 2026) age criteria precisely; offers a time-limited PPI and explains the H. pylori washout; negotiates knee care using NG226 rather than defaulting to paracetamol; plans gastroprotection if an NSAID must restart; records the adverse reaction; teach-back."
   },
   "avoid": [
    {
     "dont": "“Here’s an acid tablet to take with your anti-inflammatories.”",
     "instead": "“The tablets are causing this, so the best fix is to stop them and treat your knees another way.”",
     "why": "A PPI alone hides the cause while ulcer and bleeding risk continue."
    },
    {
     "dont": "“If it gets worse we’ll send you for an urgent camera test.”",
     "instead": "“If you have trouble swallowing or lose weight, come back and I’ll refer you urgently to the specialists.”",
     "why": "NICE NG12 (updated April 2026) now uses a suspected cancer pathway referral, not urgent direct-access endoscopy, for these features."
    },
    {
     "dont": "“Just take regular paracetamol for your knees instead.”",
     "instead": "“A gel on the knees and strengthening exercises are the best next steps.”",
     "why": "NICE NG226 advises against routinely offering paracetamol for osteoarthritis."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Mobility and independence",
     "t": "Knee pain limits walking and daily tasks. Stopping her painkiller without a replacement plan leaves her worse off, so offer the alternative in the same consultation."
    },
    {
     "h": "Over-the-counter NSAIDs",
     "t": "Ibuprofen and aspirin are sold widely. Tell her not to buy them as a substitute for the stopped tablets."
    }
   ],
   "legal": [
    {
     "h": "Reporting and recording",
     "t": "Record the adverse reaction clearly in her notes. Suspected adverse drug reactions can be reported through the MHRA Yellow Card scheme."
    }
   ],
   "professional": [
    {
     "h": "Prescribing responsibility",
     "t": "GMC Good practice in proposing, prescribing, providing and managing medicines and devices (2021): review medicines regularly and consider whether a new symptom is an adverse effect before adding another drug."
    },
    {
     "h": "PPI stewardship",
     "t": "Time-limit PPI prescriptions and review long-term use at least annually (NICE CG184), rather than letting a short course become permanent."
    }
   ],
   "community": [
    {
     "h": "Pharmacy and physiotherapy",
     "t": "Community pharmacists can reinforce the advice to avoid oral NSAIDs and explain gel use. Many areas allow self-referral to NHS physiotherapy for knee pain."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Dysphagia, or age 55 and over with weight loss plus upper abdominal pain, reflux or dyspepsia: suspected cancer pathway referral (NICE NG12 (updated April 2026))",
     "Haematemesis, melaena, faintness: same-day hospital assessment (NICE CG141)",
     "Persistent vomiting, symptoms of anaemia, epigastric mass",
     "Exertional pain or breathlessness (cardiac cause)"
    ],
    "psychosocial": [
     "Knee pain limiting mobility",
     "Reluctance to lose the pain relief that works",
     "Expectation of a quick acid remedy"
    ],
    "ice": [
     "Idea: she just needs something for the acid",
     "Concern: the burning discomfort",
     "Expectation: an acid tablet to take alongside the NSAID"
    ]
   },
   "diagnosis": "“This is indigestion caused by the anti-inflammatory tablets, with none of the warning signs of anything more serious.”",
   "diagnosisLay": "“Your stomach has a protective coating, a bit like the non-stick layer on a pan. Anti-inflammatory tablets scrape away at that coating, so the acid starts to burn. An acid tablet turns the heat down, but stopping the tablets stops the scraping.”",
   "management": {
    "reflectIce": "“You came for an acid tablet, and I will give you one for a few weeks. But the real fix is to stop the tablets causing it and treat your knees in a way that’s kinder to your stomach.”",
    "psychosocial": "Keep her mobile: offer the knee alternative before asking her to give up the NSAID, and check she accepts it.",
    "sharedPlan": [
     "Stop the oral NSAID and record the adverse reaction",
     "Topical NSAID and therapeutic exercise or physiotherapy for the knees (NICE NG226)",
     "Full-dose PPI for 4 weeks, then stop (NICE CG184; dose per BNF)",
     "H. pylori test if symptoms return, after 2 weeks off the PPI",
     "If an NSAID must restart: lowest dose, shortest time, with a PPI; check renal function and blood pressure"
    ],
    "safetyNet": [
     "999 or A&E for vomiting blood, black stools or faintness",
     "Return sooner for dysphagia, weight loss or persistent vomiting (NICE NG12 (updated April 2026))",
     "Review at 4 weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Dyspepsia pathway",
    "s": "Visual algorithm · alarm features · test-and-treat",
    "href": "algorithms/dyspepsia.html"
   },
   {
    "ic": "📋",
    "t": "Dyspepsia",
    "s": "Case walkthrough",
    "href": "../cases/dyspepsia.html"
   },
   {
    "ic": "💠",
    "t": "GORD protocol",
    "s": "PPI courses · step-down · review",
    "href": "management/gord.html"
   },
   {
    "ic": "💠",
    "t": "Osteoarthritis protocol",
    "s": "NICE NG226 · topical NSAID · exercise",
    "href": "management/osteoarthritis.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is lost by treating the symptom and not the cause, by an incomplete alarm screen, and by taking away her knee relief without a replacement. Each pattern below is common and fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Adding a PPI and leaving the NSAID running.",
     "why": "NICE CG184 asks you to review medicines that cause dyspepsia; masking symptoms keeps ulcer and bleeding risk.",
     "fix": "Stop or switch the NSAID; use a PPI short-term, or with the NSAID only if it truly must continue."
    },
    {
     "dom": "tasks",
     "fail": "Skipping weight loss and dysphagia questions because the drug explains everything.",
     "why": "At 63, weight loss with dyspepsia or any dysphagia needs a suspected cancer pathway referral (NICE NG12 (updated April 2026)).",
     "fix": "Ask both questions directly and document the answers."
    },
    {
     "dom": "tasks",
     "fail": "Quoting urgent direct-access endoscopy for alarm features.",
     "why": "The 2025 NICE NG12 (updated April 2026) amendment changed these to suspected cancer pathway referrals.",
     "fix": "Use current wording: suspected cancer pathway referral; non-urgent endoscopy for treatment-resistant dyspepsia at 55 and over."
    },
    {
     "dom": "tasks",
     "fail": "Testing for H. pylori while she is taking a PPI.",
     "why": "PPIs can cause false-negative results; CG184 requires a 2-week washout.",
     "fix": "Test before starting the PPI, or 2 weeks after stopping it."
    },
    {
     "dom": "rto",
     "fail": "Telling her to stop the tablets with no plan for her knees.",
     "why": "She values the pain relief; she may buy ibuprofen instead.",
     "fix": "Offer a topical NSAID and exercise or physiotherapy, and agree the plan with her."
    },
    {
     "dom": "gs",
     "fail": "Vague safety-net: “come back if it gets worse”.",
     "why": "GI bleeding on an NSAID is an emergency.",
     "fix": "Name haematemesis, melaena and faintness as 999 or A&E triggers; book a 4-week review; teach-back."
    }
   ]
  }
 },
 "latex-allergy": {
  "stem": {
   "name": "Hannah Boyd",
   "age": "30-year-old woman",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No allergies recorded",
   "recent": "No previous consultations about skin reactions recorded.",
   "reason": "Itching, redness and swelling where condoms or rubber gloves touch; lips tingled once. Asks about latex allergy and contraception."
  },
  "knowledge": {
   "guideline": "[1] NICE NG258 (2026) Anaphylaxis: assessment and referral after emergency treatment · [2] Resuscitation Council UK, Emergency treatment of anaphylaxis (2021) · [3] MHRA Drug Safety Update (June 2023), adrenaline auto-injectors: new guidance and resources for safe use · [4] NICE CG183 (2014) Drug allergy: diagnosis and management, recording allergy status · [5] FSRH Clinical Guideline: Barrier methods for contraception and STI prevention (2012) · [6] Health and Safety Executive guidance on latex and the Control of Substances Hazardous to Health Regulations 2002",
   "summary": "Itching, redness and swelling within minutes of latex contact, with lip tingling, suggests immediate (IgE-mediated) latex allergy. Assess for any systemic features, refer to an allergy service to confirm it, and advise strict avoidance with latex-free condoms and nitrile gloves. Record the allergy, warn her to tell every healthcare and dental team, ask about cross-reacting fruits, and give clear emergency advice. Sort out contraception so she is not relying on latex.",
   "points": [
    {
     "h": "Two different reactions",
     "t": "Immediate (type I, IgE) latex allergy causes itch, hives and swelling within minutes of contact and can progress to anaphylaxis, especially with mucosal exposure. Delayed (type IV) allergic contact dermatitis to rubber accelerator chemicals gives an eczematous rash 1–2 days later. Irritant dermatitis from gloves is commoner still. Her quick reactions and lip tingling fit type I."
    },
    {
     "h": "Risk groups",
     "t": "Healthcare, cleaning and catering workers who wear gloves; people with spina bifida or many operations; and people with atopy [6]. Ask about her work and any occupational exposure."
    },
    {
     "h": "Latex-fruit syndrome",
     "t": "Some people with latex allergy react to foods such as banana, avocado, kiwi and chestnut. Ask about reactions to these and advise caution."
    },
    {
     "h": "Confirm and assess risk",
     "t": "Refer to an allergy service for specific IgE or skin-prick testing and advice. Ask about throat tightness, wheeze, faintness or widespread hives: any systemic reaction raises the stakes. Adrenaline auto-injectors are for people at risk of anaphylaxis; if prescribed, she should carry two in-date devices and know how to use them [3]. Anyone treated for anaphylaxis should be referred to a specialist allergy service [1][2]."
    },
    {
     "h": "Avoidance in practice",
     "t": "Use non-latex condoms (polyurethane or polyisoprene) [5] and nitrile gloves; avoid balloons. Tell dentists, hospitals and every healthcare team before any procedure, so they use latex-free equipment. Record the allergy clearly in her notes [4]; a medical alert bracelet can help in an emergency."
    },
    {
     "h": "Contraception",
     "t": "Offer non-latex condoms and discuss other methods that do not rely on latex, such as the pill, implant, injection or intrauterine methods, with condoms still advised for STI protection [5]. Some non-latex condoms may break or slip slightly more often, so explain correct use and emergency contraception [5]."
    },
    {
     "h": "Work",
     "t": "If she wears latex gloves at work, her employer must assess and control exposure under COSHH, usually by switching to non-latex gloves [6]. An occupational health referral may help."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, Ms Boyd, I’m Dr Shah. How can I help today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "For a while now, whenever I use condoms or wear rubber washing-up gloves, I get itchy, red and a bit swollen where they touch. Once my lips tingled too. Could I be allergic to latex? And what do I do about contraception?"
   },
   {
    "who": "dr",
    "text": "Thank you for coming in about this; it sounds uncomfortable and worrying. I’ll ask some questions about the reactions first, then we’ll sort out both the allergy and your contraception.",
    "dom": "rto",
    "why": "Acknowledges both agendas and sets the plan"
   },
   {
    "who": "pt",
    "text": "Great, thanks."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When you touch latex, how quickly does the reaction start, and how long does it last?",
    "dom": "tasks",
    "why": "Timing distinguishes type I from type IV"
   },
   {
    "who": "pt",
    "text": "Within minutes. It calms down after an hour or two once I take them off."
   },
   {
    "who": "dr",
    "text": "Is it raised, itchy lumps like nettle rash, or a dry, scaly rash that appears the next day?",
    "dom": "tasks",
    "why": "Urticarial versus eczematous reaction"
   },
   {
    "who": "pt",
    "text": "Itchy, raised and swollen, straight away."
   },
   {
    "who": "dr",
    "text": "When your lips tingled, did you have any swelling of your tongue or throat, difficulty breathing, wheezing, a hoarse voice, feeling faint, or a rash all over?",
    "dom": "tasks",
    "why": "Screens for a systemic reaction"
   },
   {
    "who": "pt",
    "text": "No. Just the tingling, and it settled by itself."
   },
   {
    "who": "dr",
    "text": "Where do you come across latex most? Do you wear gloves at work at all?",
    "dom": "tasks",
    "why": "Occupational exposure"
   },
   {
    "who": "pt",
    "text": "Just the washing-up gloves at home, as far as I know."
   },
   {
    "who": "dr",
    "text": "Have you had operations, or do you have asthma, eczema or hay fever?",
    "dom": "tasks",
    "why": "Risk groups and atopy"
   },
   {
    "who": "pt",
    "text": "Nothing I can think of."
   },
   {
    "who": "dr",
    "text": "Have you ever reacted to foods like banana, avocado, kiwi or chestnuts? Some people with latex allergy do.",
    "dom": "tasks",
    "why": "Latex-fruit cross-reactivity"
   },
   {
    "who": "pt",
    "text": "Not that I’ve noticed."
   },
   {
    "who": "dr",
    "text": "And for contraception, what are you using at the moment, apart from condoms?",
    "dom": "tasks",
    "why": "Current contraception"
   },
   {
    "who": "pt",
    "text": "Just condoms. That’s why I’m stuck."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What have you been thinking this might be, and what worries you most?",
    "dom": "rto",
    "why": "Explores ideas and concerns"
   },
   {
    "who": "pt",
    "text": "I read about latex allergy online. The lip thing scared me. Could it get worse? And I don’t want to get pregnant."
   },
   {
    "who": "dr",
    "text": "Both of those are really sensible worries, and we’ll deal with each one.",
    "dom": "rto",
    "why": "Validates both concerns"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I think you’re right: this sounds like an immediate latex allergy. The fast, itchy swelling where latex touches is typical. It’s different from a slow skin rash to rubber chemicals.",
    "dom": "tasks",
    "why": "Names type I latex allergy and the difference from type IV"
   },
   {
    "who": "pt",
    "text": "Could it become dangerous?"
   },
   {
    "who": "dr",
    "text": "Most reactions stay local, like yours, but latex allergy can occasionally cause a severe whole-body reaction, especially when latex touches the lips, mouth or genitals. So I’d like an allergy specialist to confirm it with a test and advise on your risk.",
    "dom": "tasks",
    "why": "Honest risk and allergy referral"
   },
   {
    "who": "pt",
    "text": "Do I need one of those adrenaline pens?"
   },
   {
    "who": "dr",
    "text": "You haven’t had any breathing, throat or faint symptoms, so I won’t give one today, but the specialist will decide. If they prescribe one, you’d carry two at all times. And you’ll know exactly what to do in an emergency before you leave.",
    "dom": "tasks",
    "why": "Anaphylaxis risk assessment; AAI decision explained"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The key is avoiding latex. Use nitrile gloves instead of rubber ones, and avoid balloons. For condoms, there are latex-free ones made of polyurethane or polyisoprene that work well.",
    "dom": "tasks",
    "why": "Avoidance and latex-free alternatives"
   },
   {
    "who": "pt",
    "text": "I didn’t know those existed."
   },
   {
    "who": "dr",
    "text": "They can slip or break a little more often, so use plenty of lubricant and know how to get emergency contraception. Would you like to think about a method that doesn’t rely on condoms, such as the pill, an implant, or a coil? Condoms would still protect against infections.",
    "dom": "tasks",
    "why": "Non-latex contraception and alternatives"
   },
   {
    "who": "pt",
    "text": "I’d like to think about it first."
   },
   {
    "who": "dr",
    "text": "Of course. I’ll give you information and you can book back or see the sexual health clinic. I’ll record the latex allergy clearly in your notes. Please tell every dentist, nurse or hospital before any procedure, including cervical screening, so they use latex-free gloves. A medical alert bracelet can help too.",
    "dom": "tasks",
    "why": "Records allergy; informs healthcare teams"
   },
   {
    "who": "pt",
    "text": "I wouldn’t have thought of the smear test."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you ever get swelling of your tongue or throat, difficulty breathing or swallowing, a hoarse voice, or feel faint after latex, call 999 straight away. For anything milder, come back and see me.",
    "dom": "gs",
    "why": "Anaphylaxis emergency advice"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "Just to check I’ve explained it clearly, what will you do from now on?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Avoid latex, use nitrile gloves and latex-free condoms, tell dentists and nurses, wait for the allergy clinic, think about the other methods, and 999 if my throat swells."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. I’ll send the referral today and see you when you’ve decided about contraception.",
    "dom": "gs",
    "why": "Confirms understanding and follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; lets her raise both the reactions and contraception.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Occupation and glove use; impact on sex life and contraception; worry after the lip episode.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up “once my lips tingled” as a possible escalation and “what do I do about contraception” as a second agenda.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (latex allergy), concern (getting worse, unplanned pregnancy), expectation (confirmation and a contraception plan).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Referral for specific IgE or skin-prick testing; no in-practice challenge; records allergy status.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Type I latex allergy versus type IV contact dermatitis to rubber chemicals and irritant dermatitis.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screens throat, breathing, faintness and generalised features; risk groups; latex-fruit cross-reactivity.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Probable immediate (IgE-mediated) latex allergy with local reactions only.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Strict avoidance with nitrile gloves and polyurethane or polyisoprene condoms; contraception options offered, with emergency contraception advice.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Tells healthcare and dental teams, including for cervical screening; COSHH and occupational health if exposed at work; medical alert.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 for throat, breathing or faintness; allergy referral; review for contraception choice; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Hannah Boyd",
    "age": "30 years · female",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "Nil recorded"
    ],
    "allergy": "None recorded",
    "recent": "No previous consultations about skin reactions.",
    "reason": "“Reactions to condoms and rubber gloves. Am I allergic to latex?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Opening",
     "d": "Hear both agendas: the reactions and contraception."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Timing and type of reaction, systemic features, exposures and work, atopy and operations, fruit reactions, current contraception."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Suspects latex allergy; frightened by lip tingling; wants reliable contraception."
    },
    {
     "t": "6–8",
     "h": "Explain",
     "d": "Immediate latex allergy; honest anaphylaxis risk; allergy referral; auto-injector decision."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Avoidance, latex-free condoms and gloves, contraception options, recording, telling healthcare teams, 999 advice, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Advises an antihistamine and “try a different brand of condom”; never asks about throat or breathing symptoms; no allergy record or referral.",
    "pass": "Recognises immediate latex allergy, screens for systemic features, advises latex-free condoms and gloves, refers to allergy and gives 999 advice.",
    "exc": "All of the above, plus: distinguishes type I from type IV; asks about work, risk groups and cross-reacting fruits; offers a full choice of contraception with emergency contraception advice; records the allergy and prepares her for procedures such as cervical screening; teach-back."
   },
   "avoid": [
    {
     "dont": "“Just try a different brand of condoms.”",
     "instead": "“Use latex-free condoms made of polyurethane or polyisoprene.”",
     "why": "Most standard condoms are latex; switching brand does not remove the allergen."
    },
    {
     "dont": "“It’s only a skin reaction, nothing to worry about.”",
     "instead": "“It’s usually local, but because it can occasionally become severe, I want a specialist to assess you.”",
     "why": "Latex allergy can progress to anaphylaxis, especially with mucosal exposure."
    },
    {
     "dont": "“Let’s test it by trying a glove here.”",
     "instead": "“The allergy clinic can confirm it safely with testing.”",
     "why": "Provocation outside a specialist setting risks a severe reaction."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Relationships",
     "t": "The reaction affects her sex life. Discuss openly and without embarrassment, and consider involving her partner in choosing latex-free condoms."
    },
    {
     "h": "Everyday exposure",
     "t": "Latex is in gloves, balloons, some sports equipment and elastic. Practical avoidance at home matters as much as in healthcare."
    }
   ],
   "legal": [
    {
     "h": "Employer duties",
     "t": "Under COSHH 2002, employers must assess and control exposure to latex, usually by using non-latex gloves. If she is exposed at work, occupational health can advise, and reasonable adjustments may apply."
    }
   ],
   "professional": [
    {
     "h": "Recording allergy",
     "t": "Record the allergy and the reaction type clearly so it appears on prescriptions and referrals (NICE CG183). Flag it on any referral for procedures."
    },
    {
     "h": "Honest risk communication",
     "t": "Explain that anaphylaxis is uncommon but possible, without frightening or falsely reassuring her."
    }
   ],
   "community": [
    {
     "h": "Sexual health and pharmacy",
     "t": "Sexual health clinics provide latex-free condoms and all contraceptive methods. Community pharmacists can supply latex-free condoms and emergency contraception."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Tongue or throat swelling, breathing difficulty, hoarse voice, faintness or collapse after latex (999)",
     "Widespread hives or reactions beyond the contact site",
     "Reactions to cross-reacting foods"
    ],
    "psychosocial": [
     "Fear after the lip tingling",
     "Impact on sex life and contraception",
     "Possible occupational exposure"
    ],
    "ice": [
     "Idea: latex allergy",
     "Concern: it could get worse; unplanned pregnancy",
     "Expectation: confirmation and a contraception solution"
    ]
   },
   "diagnosis": "“This sounds like an immediate latex allergy, so far with reactions only where latex touches you.”",
   "diagnosisLay": "“Your immune system has mistaken a protein in rubber for an invader, like a guard dog that barks at the postman. Each time latex touches you, the dog barks and the skin itches and swells. We can’t retrain the dog easily, so we keep the postman away.”",
   "management": {
    "reflectIce": "“You thought this was latex allergy, you were frightened by the lip tingling, and you need contraception you can rely on. You’re right about the allergy; let’s make you safe and sort contraception today.”",
    "psychosocial": "Discuss sex and contraception openly; include practical steps at home, at work and in healthcare.",
    "sharedPlan": [
     "Refer to an allergy service for testing and risk assessment",
     "Strict latex avoidance: nitrile gloves, no balloons",
     "Polyurethane or polyisoprene condoms, lubricant, and emergency contraception advice (FSRH)",
     "Offer other methods: pill, implant, injection or intrauterine methods",
     "Record the allergy (NICE CG183); tell all healthcare and dental teams; medical alert bracelet"
    ],
    "safetyNet": [
     "999 for tongue or throat swelling, breathing difficulty or faintness",
     "Review when she has chosen a contraceptive method or after the allergy clinic"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Anaphylaxis protocol",
    "s": "Protocol · adrenaline first · NICE NG258",
    "href": "management/anaphylaxis.html"
   },
   {
    "ic": "💠",
    "t": "Urticaria protocol",
    "s": "Hives and angioedema",
    "href": "management/urticaria.html"
   },
   {
    "ic": "💠",
    "t": "Contraception protocol",
    "s": "Methods · UKMEC · emergency contraception",
    "href": "management/contraception.html"
   },
   {
    "ic": "🗺️",
    "t": "Allergy test abnormalities",
    "s": "Visual algorithm · specific IgE",
    "href": "algorithms/allergy-test-abnormalities.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is lost by underestimating the risk, by vague avoidance advice, and by forgetting her contraception question. Each pattern below is common and fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Never asking about throat, breathing or faintness.",
     "why": "A systemic reaction changes urgency, referral and the auto-injector decision (NICE NG258).",
     "fix": "Ask directly about systemic features, especially around the lip episode."
    },
    {
     "dom": "tasks",
     "fail": "Calling it contact dermatitis without asking about timing.",
     "why": "Immediate reactions suggest type I allergy with anaphylaxis risk; delayed rashes suggest type IV.",
     "fix": "Ask how fast it starts and what it looks like."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting cross-reacting foods.",
     "why": "Latex-fruit syndrome can cause reactions to banana, avocado, kiwi and chestnut.",
     "fix": "Ask about them and advise caution."
    },
    {
     "dom": "tasks",
     "fail": "Not recording the allergy or warning her about procedures.",
     "why": "Latex exposure in dental or hospital care can trigger severe reactions.",
     "fix": "Record it (NICE CG183) and tell her to inform every healthcare team, including for cervical screening."
    },
    {
     "dom": "rto",
     "fail": "Leaving the contraception question unanswered.",
     "why": "It is half her agenda; unplanned pregnancy is a real risk.",
     "fix": "Offer latex-free condoms, emergency contraception advice and other methods."
    },
    {
     "dom": "gs",
     "fail": "No emergency plan.",
     "why": "She needs to recognise anaphylaxis and act.",
     "fix": "999 for throat swelling, breathing difficulty or faintness; if an auto-injector is prescribed, carry two (MHRA 2023); teach-back."
    }
   ]
  }
 },
 "meniscal-injury": {
  "stem": {
   "name": "Jay Okonkwo",
   "age": "27-year-old man",
   "pmh": [
    "Plays football",
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "Twisting knee injury on a planted foot playing football a few days ago. Swelling developed that evening. Since then clicking, catching, giving way and two episodes of locking when he could not straighten the knee.",
   "reason": "“What’s going on — do I need a scan?”"
  },
  "knowledge": {
   "guideline": "[1] Ottawa knee rules (Stiell et al., JAMA 1996–1997) (international) · [2] BASK Meniscal Working Group: arthroscopic meniscal surgery treatment guideline and consensus statement (Bone Joint J 2019) · [3] ESSKA meniscus consensus (2016–2017) (international) · [4] NICE NG226 (osteoarthritis in over 16s, 2022) · [5] BNF ibuprofen and paracetamol monographs; MHRA Drug Safety Update June 2015 (high-dose ibuprofen)",
   "summary": "A twisting injury on a planted foot, swelling that builds over hours, joint-line tenderness and mechanical symptoms suggest a meniscal tear. Use the Ottawa knee rules to decide whether an X-ray is needed. A knee that truly locks, or has locked, in a young person points to a displaced tear and needs MRI and orthopaedic review; a knee locked now needs same-day assessment. Swelling within an hour or two with a pop and giving way suggests an ACL tear. Stable, non-locking tears can start with physiotherapy.",
   "points": [
    {
     "h": "The meniscal pattern",
     "t": "Twisting on a loaded knee, swelling developing over several hours rather than at once, pain on the joint line, and clicking, catching, giving way or locking. McMurray’s test can support the diagnosis but is not reliable enough to exclude it."
    },
    {
     "h": "Ottawa knee rules",
     "t": "X-ray after acute knee injury if any of: age 55 or over, isolated tenderness of the patella, tenderness of the fibular head, unable to flex to 90°, or unable to bear weight for four steps both immediately and in the clinic [1]. If none apply, a fracture is unlikely and an X-ray is not needed."
    },
    {
     "h": "True locking",
     "t": "True locking is a mechanical block to full extension, often from a displaced bucket-handle tear. Pseudo-locking is pain or swelling limiting movement. BASK 2019 [2] advises urgent MRI and orthopaedic review for a locked knee, because a displaced tear may be repairable if treated early. A knee that is locked now needs same-day assessment."
    },
    {
     "h": "ACL and other injuries",
     "t": "A pop with swelling within an hour or two (haemarthrosis) and a feeling of the knee shifting suggest an anterior cruciate ligament tear, which often coexists with a meniscal tear. Consider collateral ligament injury, patellar dislocation and fracture."
    },
    {
     "h": "Traumatic versus degenerative",
     "t": "In a young person with an acute traumatic tear and mechanical symptoms, early MRI and specialist review are appropriate because repair preserves the meniscus [2][3]. Degenerative tears in older people are usually treated with exercise, and arthroscopic washout or debridement is not offered for osteoarthritis unless the knee is truly locking (NICE NG226 [4])."
    },
    {
     "h": "Early management",
     "t": "Relative rest, ice and elevation, crutches if weight-bearing is painful, paracetamol or an NSAID at the lowest effective dose (BNF; MHRA June 2015 [5]), and early quadriceps and range-of-movement exercises. Avoid pivoting sport until assessed."
    },
    {
     "h": "Safety net",
     "t": "Same-day assessment if the knee locks and will not unlock, he cannot bear weight, or the knee becomes hot and very swollen. Review if giving way continues."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Okonkwo, I’m Dr Hughes. What’s brought you in?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "I twisted my knee playing football a few days ago. My foot was planted and I turned. It swelled up that evening, and now it clicks and catches, gives way, and a couple of times it’s locked so I literally couldn’t straighten it. What’s going on? Do I need a scan?"
   },
   {
    "who": "dr",
    "text": "That sounds like a proper injury. I’ll ask about exactly what happened, examine the knee, and then we’ll decide about a scan together. Okay?",
    "dom": "gs",
    "why": "Agenda set around his question"
   },
   {
    "who": "pt",
    "text": "Yes."
   },
   {
    "phase": "Focused history",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When you twisted it, did you hear or feel a pop, and could you carry on playing?",
    "dom": "tasks",
    "why": "Mechanism, pop, ability to continue"
   },
   {
    "who": "pt",
    "text": "I don’t really remember a pop. It just hurt."
   },
   {
    "who": "dr",
    "text": "Did it swell straight away, within an hour or so, or later that evening?",
    "dom": "tasks",
    "why": "Timing of effusion: ACL versus meniscus"
   },
   {
    "who": "pt",
    "text": "Later, by the evening it was puffy."
   },
   {
    "who": "dr",
    "text": "Tell me about the locking. When it happened, could you get it straight again, and how?",
    "dom": "tasks",
    "why": "Distinguishes true from pseudo-locking"
   },
   {
    "who": "pt",
    "text": "It got stuck bent for a bit, then it went back."
   },
   {
    "who": "dr",
    "text": "Can you straighten it fully right now, and could you walk on it after the injury and today?",
    "dom": "tasks",
    "why": "Current locking; Ottawa weight-bearing criterion"
   },
   {
    "who": "pt",
    "text": "I can straighten it now, it’s just sore. I can walk on it."
   },
   {
    "who": "dr",
    "text": "When it gives way, does it feel like the knee shifts out of place?",
    "dom": "tasks",
    "why": "Screens instability suggesting ACL"
   },
   {
    "who": "pt",
    "text": "It just goes sometimes."
   },
   {
    "who": "dr",
    "text": "Have you had any fever, or has the knee gone hot and red?",
    "dom": "tasks",
    "why": "Screens septic arthritis"
   },
   {
    "who": "pt",
    "text": "No."
   },
   {
    "who": "dr",
    "text": "How is this affecting you, at work and with football?",
    "dom": "rto",
    "why": "Explores impact"
   },
   {
    "who": "pt",
    "text": "Football’s a big part of my life. I want to know how long I’m out."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What do you think you’ve done?",
    "dom": "rto",
    "why": "Elicits ideas"
   },
   {
    "who": "pt",
    "text": "Cartilage, maybe. A mate had that."
   },
   {
    "who": "dr",
    "text": "What’s worrying you most?",
    "dom": "rto",
    "why": "Explores concern"
   },
   {
    "who": "pt",
    "text": "That I’ll need an operation and miss the season. And I don’t trust it now."
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’ll check for swelling, feel along the joint line and the kneecap and the top of the shin bone, see how far it bends and straightens, test the ligaments, and watch you walk.",
    "dom": "tasks",
    "why": "Targeted knee examination including Ottawa criteria and ligament tests"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "The twist on a planted foot, swelling by the evening, and then catching and locking point to a tear of the meniscus, the cartilage cushion in the knee. By the rules we use, you don’t need an X-ray for a fracture if you can bend it past a right angle, walk four steps and have no tenderness on the kneecap or the top of the outer shin bone.",
    "dom": "tasks",
    "why": "Names the likely diagnosis and applies the Ottawa rules"
   },
   {
    "who": "pt",
    "text": "So no scan?"
   },
   {
    "phase": "Plan and referral",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Not an X-ray, but I do think you need an MRI and a knee specialist. When a knee genuinely locks, a torn piece may be flipping into the joint. In someone your age, the surgeons may be able to repair it, and that works best if it’s done early. The giving way also needs the ligaments checked.",
    "dom": "tasks",
    "why": "MRI and orthopaedic referral for true locking in a young traumatic tear"
   },
   {
    "who": "pt",
    "text": "So I will need an operation?"
   },
   {
    "who": "dr",
    "text": "Not necessarily. The scan will show what’s torn and whether repair would help. Some tears settle with physiotherapy. Either way, getting the right answer early gives your knee the best chance long term.",
    "dom": "rto",
    "why": "Honest, balanced answer to his fear"
   },
   {
    "who": "pt",
    "text": "Okay. What do I do meanwhile?"
   },
   {
    "who": "dr",
    "text": "Rest it from football and twisting, use ice and keep it raised, and take paracetamol or ibuprofen if you can take it. Keep it moving with gentle straightening and thigh-muscle exercises. I’ll also refer you to physio. Would that work for you?",
    "dom": "tasks",
    "why": "Early conservative care and physiotherapy"
   },
   {
    "who": "pt",
    "text": "Yes."
   },
   {
    "phase": "Safety net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If it locks and won’t come free, you can’t put weight on it, or it becomes hot and very swollen, go to A&E the same day. Otherwise I’ll send the referral today and we’ll review in two weeks. Can you tell me the plan?",
    "dom": "gs",
    "why": "Specific safety net and teach-back"
   },
   {
    "who": "pt",
    "text": "MRI and knee specialist, physio, no football, ice and painkillers. A&E if it locks and stays stuck or I can’t walk."
   },
   {
    "who": "dr",
    "text": "That’s it.",
    "dom": "gs",
    "why": "Confirms understanding"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; took his question about a scan as the organising agenda.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored the importance of football, fear of surgery and loss of trust in the knee.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the planted-foot twist, delayed swelling, mechanical symptoms and true locking that needed manipulation to free.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: cartilage injury. Concern: surgery, missing the season, instability. Expectation: a scan.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Effusion, joint-line tenderness, range of movement, ligament tests, gait; Ottawa knee rules applied, so no X-ray; MRI for mechanical locking.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Meniscal tear versus ACL or collateral ligament injury, fracture, patellar dislocation, septic arthritis.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Checked current locking, weight-bearing, haemarthrosis timing, fever and a hot joint.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Probable traumatic meniscal tear with true locking episodes; possible ligament injury.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "MRI and orthopaedic referral because true locking in a young traumatic tear may be repairable; physiotherapy; analgesia; rest from pivoting sport.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Explained why an X-ray is not needed while an MRI is; balanced answer about surgery.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day A&E for a knee that stays locked, inability to weight-bear or a hot swollen knee; review in two weeks; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Jay Okonkwo",
    "age": "27 years · male",
    "pmh": [
     "Plays football"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "None recorded",
    "recent": "Twisting knee injury days ago; evening swelling; clicking, catching, giving way and two locking episodes.",
    "reason": "“Do I need a scan?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Hear the injury and his scan question."
    },
    {
     "t": "1–5",
     "h": "History",
     "d": "Mechanism, pop, swelling timing, true locking, current extension, weight-bearing, instability, hot joint."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Cartilage; fears surgery and missing the season; wants a scan."
    },
    {
     "t": "6–8",
     "h": "Examine and explain",
     "d": "Effusion, joint line, range, ligaments; Ottawa rules; meniscal tear explained."
    },
    {
     "t": "8–11",
     "h": "Plan",
     "d": "MRI and orthopaedics for true locking; physiotherapy; interim care."
    },
    {
     "t": "11–12",
     "h": "Safety net",
     "d": "Stuck locked knee, cannot weight-bear, hot swollen knee; review; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Orders an X-ray for everyone or no imaging at all; misses the true locking; ‘rest and it will settle’.",
    "pass": "Recognises a meniscal tear, applies the Ottawa rules, refers for MRI and orthopaedics because of locking and safety-nets.",
    "exc": "All of that, plus: distinguishes true from pseudo-locking, considers ACL injury, explains why early review matters for repair in a young person, and handles his fear of surgery honestly."
   },
   "avoid": [
    {
     "dont": "“Let’s X-ray it to see the cartilage.”",
     "instead": "“An X-ray shows bone, and you don’t meet the rules for one. An MRI shows the cartilage.”",
     "why": "X-rays do not show meniscal tears; the Ottawa rules guide X-ray use."
    },
    {
     "dont": "“It’s just a sprain, rest it.”",
     "instead": "“The locking tells me something may be caught in the joint, so a specialist should see it.”",
     "why": "True locking suggests a displaced tear needing early review."
    },
    {
     "dont": "“You’ll definitely need an operation.”",
     "instead": "“The scan will show whether repair would help.”",
     "why": "Premature certainty increases anxiety and may be wrong."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Sport and identity",
     "t": "Football is central to his life. A clear plan and timeline help him accept time out now to protect the knee long term."
    },
    {
     "h": "Work",
     "t": "Explore his job. If it involves standing, climbing or lifting, he may need adjustments or a fit note while waiting for assessment."
    }
   ],
   "legal": [
    {
     "h": "Driving",
     "t": "He should drive only if he can control the car safely, including an emergency stop. Notification to the DVLA is needed only if a limb problem stops him driving for more than three months (GOV.UK)."
    }
   ],
   "professional": [
    {
     "h": "Appropriate imaging",
     "t": "Using decision rules and clinical features for imaging avoids unnecessary radiation while making sure the right scan is done (GMC Good medical practice)."
    }
   ],
   "community": [
    {
     "h": "Physiotherapy",
     "t": "MSK physiotherapy, self-referral where available; club physio or sports injury clinics for return-to-sport rehabilitation."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Knee locked now and will not straighten: same-day assessment",
     "Unable to bear weight for four steps: X-ray (Ottawa)",
     "Hot, red, very swollen knee or fever: septic arthritis",
     "Swelling within an hour or two with a pop: haemarthrosis, likely ACL"
    ],
    "psychosocial": [
     "Football is a big part of his life",
     "Fear of surgery and missing the season",
     "Loss of trust in the knee"
    ],
    "ice": [
     "Idea: cartilage injury",
     "Concern: surgery and time out of sport",
     "Expectation: a scan"
    ]
   },
   "diagnosis": "Probable acute traumatic meniscal tear with true locking episodes and giving way; ACL injury to be excluded. No Ottawa criteria for X-ray.",
   "diagnosisLay": "“You’ve probably torn the cartilage cushion inside the knee. A loose piece can catch and lock the knee, which is why it gets stuck.”",
   "management": {
    "reflectIce": "“You wanted to know about a scan. You don’t need an X-ray, but the locking means an MRI and a knee specialist are the right next step.”",
    "psychosocial": "Honest discussion of surgery; timeline for sport; work adjustments if needed.",
    "sharedPlan": [
     "MRI and orthopaedic referral for true locking",
     "Physiotherapy: quadriceps and range of movement",
     "Rest from pivoting sport; ice, elevation",
     "Paracetamol or ibuprofen if suitable, dose per BNF"
    ],
    "safetyNet": [
     "Locked and will not free, or unable to weight-bear: A&E the same day",
     "Hot, very swollen knee or fever: same day",
     "Review in two weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Knee pain",
    "s": "Visual algorithm · acute knee injury",
    "href": "algorithms/knee-pain.html"
   },
   {
    "ic": "🗺️",
    "t": "Joint pain",
    "s": "Visual algorithm · mechanical versus inflammatory",
    "href": "algorithms/joint-pain.html"
   },
   {
    "ic": "🩺",
    "t": "Examinations",
    "s": "Knee examination",
    "href": "examinations.html"
   },
   {
    "ic": "📝",
    "t": "Fit notes",
    "s": "Work while awaiting review",
    "href": "fit-note.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you image the right thing for the right reason, and spot the locking that changes the plan.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Ordering an X-ray to look for a cartilage tear.",
     "why": "X-rays do not show the meniscus; Ottawa rules decide X-ray.",
     "fix": "Apply the Ottawa rules and explain MRI is the test for the meniscus."
    },
    {
     "dom": "tasks",
     "fail": "Treating a truly locking knee as a sprain.",
     "why": "A displaced tear may be repairable only if seen early.",
     "fix": "Refer for MRI and orthopaedics."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about swelling timing and giving way.",
     "why": "Rapid swelling and instability suggest an ACL tear.",
     "fix": "Ask about a pop, swelling within hours and instability; test ligaments."
    },
    {
     "dom": "tasks",
     "fail": "No septic arthritis screen.",
     "why": "A hot swollen knee with fever is an emergency.",
     "fix": "Ask about fever and a hot joint."
    },
    {
     "dom": "rto",
     "fail": "Promising or dismissing surgery.",
     "why": "He fears surgery; certainty either way is misleading.",
     "fix": "Explain the scan will guide it."
    },
    {
     "dom": "gs",
     "fail": "No safety net for a stuck knee.",
     "why": "A knee locked now needs same-day care.",
     "fix": "Give clear A&E triggers and a review date."
    }
   ]
  }
 },
 "needlestick-injury": {
  "stem": {
   "name": "Erin",
   "age": "29-year-old woman",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded",
   "recent": "No recent consultations recorded. Hepatitis B vaccination status not recorded.",
   "reason": "Urgent: “Needlestick at work about an hour ago.”"
  },
  "knowledge": {
   "guideline": "[1] UK Guideline for the use of HIV Post-Exposure Prophylaxis 2021 (BHIVA/BASHH) · [2] Green Book chapter 18: Hepatitis B (UKHSA, updated February 2026) · [3] Guidance on the investigation and management of occupational exposure to hepatitis C (PHLS Advisory Committee on Blood Borne Viruses, now UKHSA) · [4] Health and Safety (Sharp Instruments in Healthcare) Regulations 2013 and RIDDOR 2013 (HSE) · [5] GMC: Confidentiality (consent for source testing)",
   "summary": "First aid now, then same-day (ideally immediate) assessment by occupational health or the emergency department. HIV PEP works best started as soon as possible, ideally within 24 hours, and is not offered after 72 hours [1]. Hepatitis B protection depends on her vaccine response and the source [2]; hepatitis C has no PEP, so follow-up testing detects infection early for treatment [3].",
   "points": [
    {
     "h": "First aid",
     "t": "Encourage the wound to bleed gently, wash with soap and running water, do not scrub or suck, cover with a waterproof dressing. Mucosal or eye splashes: irrigate with plenty of water [1][2]."
    },
    {
     "h": "Risk assessment",
     "t": "Percutaneous injuries carry more risk than splashes; a hollow needle, deep injury, visible blood or a device that was in a vein or artery increase risk. The source’s status matters most: known HIV, HBV or HCV, or risk factors. The average HIV risk from a needlestick with HIV-positive blood is about 0.3% (1 in 333) [1]."
    },
    {
     "h": "HIV PEP",
     "t": "Start as soon as possible, ideally within 24 hours, and not beyond 72 hours; a 28-day course. First-line is tenofovir disoproxil/emtricitabine with raltegravir [1]. If the source has been on treatment for at least 6 months with an undetectable viral load and good adherence, PEP is not indicated [1]. Check pregnancy and interacting medicines."
    },
    {
     "h": "Hepatitis B",
     "t": "Known responders: a booster after a significant exposure to a known or high-risk source. Unvaccinated or incomplete course: an accelerated vaccine course, with hepatitis B immunoglobulin if the source is known or high-risk. Known non-responders: immunoglobulin [2]. Occupational health checks her anti-HBs."
    },
    {
     "h": "Hepatitis C",
     "t": "No vaccine or PEP. Baseline blood stored; after a known or likely infected source, HCV RNA at 6 and 12 weeks and anti-HCV at 12 and 24 weeks, so infection is treated early [3]."
    },
    {
     "h": "Source testing",
     "t": "The source is tested for HIV, HBV and HCV only with their consent, sought by someone other than the exposed worker [1][5]."
    },
    {
     "h": "Reporting",
     "t": "Report the incident to the employer. Employers must record and investigate sharps injuries and provide access to treatment [4]; an injury from a source known to carry a blood-borne virus is reportable under RIDDOR [4]."
    },
    {
     "h": "Until follow-up is complete",
     "t": "Use condoms and avoid blood or tissue donation until follow-up is complete; occupational health advises on any work implications [1]."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Erin, I’m Dr Ahmed. Tell me what happened.",
    "dom": "rto",
    "why": "Open start, brief because time matters"
   },
   {
    "who": "pt",
    "text": "I stuck myself with a used needle at work about an hour ago. It bled a bit. I’m really panicking. What if the patient had HIV or hepatitis? Have I caught something? What do I need to do right now?"
   },
   {
    "who": "dr",
    "text": "You’ve done exactly the right thing coming straight in. We’ll go step by step, and quickly. Have you washed it yet?",
    "dom": "rto",
    "why": "Contains panic with structure"
   },
   {
    "phase": "First aid and risk assessment",
    "clock": "1–4 min",
    "who": "pt",
    "text": "I rinsed it."
   },
   {
    "who": "dr",
    "text": "Let’s make sure. Let it bleed gently, wash under running soapy water now at the sink here, don’t scrub or suck it, then I’ll put a dressing on.",
    "dom": "tasks",
    "why": "Correct first aid"
   },
   {
    "who": "dr",
    "text": "Now, what kind of needle was it, and how deep? Was there visible blood on it? Had it been in a vein?",
    "dom": "tasks",
    "why": "Injury characteristics"
   },
   {
    "who": "pt",
    "text": "It was a used needle from a patient. I don’t know much more than that."
   },
   {
    "who": "dr",
    "text": "Do you know anything about the patient: whether they have HIV, hepatitis B or C, or any risk factors? It’s fine if you don’t.",
    "dom": "tasks",
    "why": "Source assessment"
   },
   {
    "who": "pt",
    "text": "I don’t know."
   },
   {
    "who": "dr",
    "text": "Have you had the hepatitis B vaccine, and do you know if you responded to it?",
    "dom": "tasks",
    "why": "HBV vaccination and response"
   },
   {
    "who": "pt",
    "text": "I’d have to check my records."
   },
   {
    "who": "dr",
    "text": "Occupational health will check that. Is there any chance you could be pregnant, and do you take any medicines?",
    "dom": "tasks",
    "why": "Pregnancy and interactions before PEP"
   },
   {
    "who": "pt",
    "text": "I don’t think so. I’d need to check."
   },
   {
    "phase": "ICE",
    "clock": "4–5 min",
    "who": "dr",
    "text": "What’s going through your mind right now?",
    "dom": "rto",
    "why": "Idea and concern"
   },
   {
    "who": "pt",
    "text": "That I’ve got HIV. That it’s already too late."
   },
   {
    "who": "dr",
    "text": "It isn’t too late. The timing is on your side, and that’s why we act today. What are you hoping I can do?",
    "dom": "rto",
    "why": "Addresses the fear; elicits expectation"
   },
   {
    "who": "pt",
    "text": "Tell me what to do."
   },
   {
    "phase": "Explanation and plan",
    "clock": "5–10 min",
    "who": "dr",
    "text": "Here’s the plan. You need to be seen by occupational health straight away, or the emergency department if they’re not available now. They’ll take a baseline blood sample, check your hepatitis B protection, and arrange for the patient to be asked for consent to be tested. That’s done by someone else, not you.",
    "dom": "tasks",
    "why": "Urgent referral; baseline bloods; source testing with consent"
   },
   {
    "who": "pt",
    "text": "Today? I’m on shift."
   },
   {
    "who": "dr",
    "text": "Today, now. This comes first, and your manager needs to know anyway. There’s a medicine called PEP that lowers the chance of HIV. It works best started as soon as possible, ideally within 24 hours, and it isn’t given after three days. The team decides whether you need it from the risk.",
    "dom": "tasks",
    "why": "Time-critical PEP (BHIVA 2021)"
   },
   {
    "who": "pt",
    "text": "And hepatitis?"
   },
   {
    "who": "dr",
    "text": "For hepatitis B, depending on your vaccine response and the patient’s status, you may get a booster, a faster vaccine course, or an antibody injection. Hepatitis C has no jab or PEP, so they’ll repeat blood tests over the next few months. If it did happen, catching it early means it can be treated and cured.",
    "dom": "tasks",
    "why": "HBV (Green Book ch 18) and HCV follow-up"
   },
   {
    "who": "pt",
    "text": "What are the actual chances?"
   },
   {
    "who": "dr",
    "text": "For HIV, even when the patient definitely has it and isn’t treated, the risk from one needlestick is about 3 in 1,000. Most sources are negative. That’s low, and PEP lowers it further.",
    "dom": "rto",
    "why": "Honest numbers to reduce panic"
   },
   {
    "who": "pt",
    "text": "Okay. That helps."
   },
   {
    "who": "dr",
    "text": "Please report it through your workplace incident system today too. Until your follow-up tests are done, use condoms, don’t give blood, and occupational health will talk to you about work.",
    "dom": "tasks",
    "why": "Incident reporting; precautions until follow-up"
   },
   {
    "phase": "Safety-net and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "If you start PEP and get side effects, a rash, or feel unwell, contact the team who prescribed it. If you develop a fever, rash or flu-like illness in the coming weeks, tell them too. How are you getting there now?",
    "dom": "gs",
    "why": "Safety-net for PEP and seroconversion illness"
   },
   {
    "who": "pt",
    "text": "I’ll go straight from here."
   },
   {
    "who": "dr",
    "text": "Tell me the plan in your own words.",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Occupational health or A&E now, bloods, maybe PEP, hepatitis B check, report it, condoms until the tests are done."
   },
   {
    "who": "dr",
    "text": "That’s it. And this is frightening, so if the worry gets too much while you wait for results, come back and talk to us. I’m going to write down the time of the injury for you to take with you.",
    "dom": "rto",
    "why": "Emotional support and practical handover"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Brief open start; recognised urgency and contained her panic with a clear structure.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored work context, support, and practical barriers to leaving her shift.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “is it already too late?” and answered it with the time window.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (she has HIV), concern (too late), expectation (clear instructions).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "First aid supervised; injury and source details; HBV vaccination status; pregnancy and medicines before PEP.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Weighed HIV, HBV and HCV risk by injury type and source.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Recognised PEP as time-critical (ideally within 24 hours, not beyond 72 hours) and the need for same-day specialist assessment.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated the working assessment: a significant percutaneous exposure with unknown source, needing urgent assessment.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Immediate occupational health or ED; baseline bloods; source testing with consent by someone else; PEP per BHIVA 2021; HBV per Green Book ch 18; HCV follow-up testing.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Pregnancy and interacting medicines checked; condoms, no blood donation until follow-up complete.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Incident reporting; safety-net for PEP side effects and seroconversion illness; emotional support; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Erin",
    "age": "29 years · female",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "⚠ Needlestick at work about 1 hour ago. Hepatitis B status not recorded.",
    "reason": "“Needlestick at work.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and act",
     "d": "Brief open question; start first aid now."
    },
    {
     "t": "1–4",
     "h": "Risk assessment",
     "d": "Injury, device, blood, source, HBV vaccine, pregnancy, medicines."
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "Fear of HIV and that it is too late."
    },
    {
     "t": "5–10",
     "h": "Plan",
     "d": "Occupational health or ED now; PEP window; HBV; HCV follow-up; honest numbers; reporting; precautions."
    },
    {
     "t": "10–12",
     "h": "Close",
     "d": "Safety-net, teach-back, support, time of injury."
    }
   ],
   "wordPics": {
    "fail": "Takes bloods in the practice and books a routine review; misses the PEP window; no first aid; no reporting.",
    "pass": "First aid, urgent referral to occupational health or ED, mentions PEP within 72 hours, hepatitis B and reporting.",
    "exc": "All of the above, plus: structured injury and source assessment; PEP ideally within 24 hours; checks pregnancy and medicines; HBV by vaccine response; HCV follow-up; honest risk numbers; source consent by someone else; precautions until follow-up; supports her anxiety."
   },
   "avoid": [
    {
     "dont": "“Let’s do some bloods and see you next week.”",
     "instead": "“You need occupational health or A&E now, because the preventive medicine works best within hours.”",
     "why": "PEP is time-critical (BHIVA 2021)."
    },
    {
     "dont": "“Squeeze it hard and scrub it.”",
     "instead": "“Let it bleed gently and wash under running soapy water; don’t scrub or suck.”",
     "why": "Scrubbing damages the skin."
    },
    {
     "dont": "“Ask the patient if they’ll have a blood test.”",
     "instead": "“Someone else will ask the patient for consent to be tested.”",
     "why": "Source testing needs consent, sought by someone other than the exposed worker."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Anxiety",
     "t": "Waiting for results is stressful; offer support and check in."
    },
    {
     "h": "Relationships",
     "t": "Condoms until follow-up is complete; offer to help her explain this to a partner if she wishes."
    }
   ],
   "legal": [
    {
     "h": "Sharps regulations",
     "t": "Employers must record and investigate sharps injuries and ensure access to medical advice and PEP (Health and Safety (Sharp Instruments in Healthcare) Regulations 2013)."
    },
    {
     "h": "RIDDOR",
     "t": "A sharps injury from a source known to carry a blood-borne virus is reportable to the HSE by the employer (RIDDOR 2013)."
    },
    {
     "h": "Source consent",
     "t": "The source patient can only be tested with consent (GMC confidentiality)."
    }
   ],
   "professional": [
    {
     "h": "Occupational health",
     "t": "Occupational health leads PEP, vaccination and follow-up testing, and advises on any work implications."
    },
    {
     "h": "Documentation",
     "t": "Record the time of injury, first aid, advice and referral."
    }
   ],
   "community": [
    {
     "h": "Out of hours",
     "t": "The emergency department provides PEP assessment when occupational health is closed; sexual health clinics can also advise."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Hollow needle, deep injury, visible blood or a device from a vein or artery",
     "Source known or at high risk for HIV, HBV or HCV",
     "Non-immune or unknown hepatitis B status",
     "Time since exposure approaching 72 hours"
    ],
    "psychosocial": [
     "Panic and fear of HIV",
     "Pressure to return to her shift",
     "Pregnancy possibility, partners"
    ],
    "ice": [
     "Idea: she has caught HIV or hepatitis",
     "Concern: it is already too late",
     "Expectation: clear instructions now"
    ]
   },
   "diagnosis": "“This is a significant needlestick injury with an unknown source. The risk is usually low, but we act quickly to make it lower.”",
   "diagnosisLay": "“Most needles don’t carry a virus, and even when they do, infection is uncommon. There is medicine that lowers the risk of HIV further if it’s started quickly, which is why you need to go now.”",
   "management": {
    "reflectIce": "“You’re frightened it’s too late. It isn’t: you’ve come within the hour, and that’s exactly when this works best.”",
    "psychosocial": "Free her from the shift; offer support while awaiting results.",
    "sharedPlan": [
     "First aid now; occupational health or ED immediately",
     "Baseline bloods; source testing with consent; PEP decision (BHIVA 2021); HBV by vaccine response (Green Book ch 18)",
     "HCV follow-up testing; incident report; condoms and no blood donation until follow-up complete"
    ],
    "safetyNet": [
     "PEP side effects or rash: contact the prescribing team",
     "Fever, rash or flu-like illness in the following weeks: tell occupational health",
     "Anxiety becoming overwhelming: return to the practice"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "HIV",
    "s": "Management protocol · PEP",
    "href": "management/hiv.html"
   },
   {
    "ic": "📋",
    "t": "HIV",
    "s": "Case walkthrough",
    "href": "../cases/hiv.html"
   },
   {
    "ic": "💠",
    "t": "Anxiety",
    "s": "Management protocol",
    "href": "management/anxiety.html"
   }
  ],
  "pitfalls": {
   "intro": "This is a time-critical station. Candidates fail by managing it slowly in the practice, by missing the PEP window, and by forgetting hepatitis B, hepatitis C follow-up and reporting.",
   "items": [
    {
     "dom": "tasks",
     "fail": "No first aid.",
     "why": "Bleeding and washing are the first step whatever the source.",
     "fix": "Supervise it in the room."
    },
    {
     "dom": "tasks",
     "fail": "Routine bloods and a review next week.",
     "why": "PEP works best within hours and is not given after 72 hours (BHIVA 2021).",
     "fix": "Occupational health or ED now."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting hepatitis B.",
     "why": "Protection depends on vaccine response and source (Green Book ch 18).",
     "fix": "Ask about vaccination; occupational health checks anti-HBs."
    },
    {
     "dom": "tasks",
     "fail": "Telling her to ask the source patient.",
     "why": "Consent must be sought by someone else.",
     "fix": "Occupational health arranges source consent and testing."
    },
    {
     "dom": "rto",
     "fail": "Dismissing the panic, or feeding it.",
     "why": "Honest numbers reduce fear and support adherence.",
     "fix": "About 3 in 1,000 for HIV from a known positive source, lower with PEP."
    },
    {
     "dom": "gs",
     "fail": "No reporting or precautions.",
     "why": "Employers must record sharps injuries; precautions protect partners until follow-up.",
     "fix": "Incident report, condoms, no blood donation until follow-up complete."
    }
   ]
  }
 },
 "picky-eating": {
  "stem": {
   "name": "Mabel",
   "age": "3-year-old girl",
   "pmh": [
    "No problems recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "No recent consultations recorded.",
   "reason": "Booked by her mother: “Only eats a few foods. Mealtimes are a battle. Is she getting enough?”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG75 (2017) Faltering growth: recognition and management in children · [2] NICE CG128 (2011, updated 2017) Autism spectrum disorder in under 19s: recognition, referral and diagnosis · [3] NICE CG116 (2011) Food allergy in under 19s: assessment and diagnosis · [4] NICE NG20 (2015) Coeliac disease · [5] Department of Health and Social Care, Healthy Start and NHS vitamin advice for children aged 6 months to 5 years · [6] DSM-5-TR avoidant/restrictive food intake disorder criteria (international)",
   "summary": "Fussy eating in a well, active 3-year-old is common and usually a normal phase. Weigh, measure and plot her growth, because growth is the real reassurance. Check for the few features that change management, give practical low-pressure feeding advice, and support the parent. Tests and special supplements are not needed if she is thriving, but the standard daily vitamin drops for under-5s are recommended for all children.",
   "points": [
    {
     "h": "Growth is the answer",
     "t": "Weigh and measure, and plot on the UK-WHO chart in the red book. A child following her centile line is getting enough energy. NICE NG75 defines faltering weight by centile falls and a weight below the 2nd centile, and advises plotting length or height alongside [1]."
    },
    {
     "h": "Normal fussiness",
     "t": "Wariness of new foods (food neophobia) peaks in toddlers and pre-schoolers and usually eases with time. Many foods need repeated tasting before a child accepts them. It is not a sign of poor parenting."
    },
    {
     "h": "Features that change management",
     "t": "Faltering growth or weight loss [1]; choking, gagging or pain on swallowing; vomiting, diarrhoea or abdominal pain; reactions to foods [3]; symptoms suggesting coeliac disease [4]; extreme restriction to a handful of foods of one texture or colour with distress, which may be ARFID [6]; and developmental or social communication concerns [2]."
    },
    {
     "h": "What helps",
     "t": "Eat together and model eating the foods; offer small portions of new foods alongside a food she accepts, without pressure; avoid forcing, bribing or praising only for eating; keep meals to a set time; limit grazing, juice and large milk drinks between meals, which blunt appetite; one family meal rather than separate meals on demand."
    },
    {
     "h": "Supplements and tests",
     "t": "No blood tests are needed for a thriving child. UK advice is that all children aged 6 months to 5 years have daily vitamin drops containing vitamins A, C and D, unless they drink a lot of formula; Healthy Start vitamins are free to eligible families [5]."
    },
    {
     "h": "When to refer",
     "t": "Refer or involve the health visitor, dietitian or paediatrics for faltering growth [1], very restricted intake with a risk of deficiency, suspected ARFID, suspected allergy, or developmental concerns [2]. Otherwise, the health visitor is a useful first contact for feeding support."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Shah. And hello, Mabel. What brings you both in today?",
    "dom": "rto",
    "why": "Greets parent and child"
   },
   {
    "who": "pt",
    "text": "Mabel’s such a fussy eater. She’ll only eat a few things like plain pasta and crackers, and refuses anything new, especially vegetables. Mealtimes are a complete battle; I end up making separate meals. She seems happy and full of energy, but I’m worried she’s not getting what she needs. What can I do?"
   },
   {
    "who": "dr",
    "text": "That sounds exhausting, day after day. I can see you’re working hard to feed her well. Can I ask some questions, weigh and measure her, and then we’ll make a plan together?",
    "dom": "rto",
    "why": "Validates effort and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Yes, please."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Talk me through a typical day of what she eats and drinks, including milk, juice and snacks.",
    "dom": "tasks",
    "why": "Food and drink history, including grazing and milk"
   },
   {
    "who": "pt",
    "text": "Pasta, crackers, a bit of bread, yoghurt. She has milk and some juice, and she snacks when she won’t eat her tea."
   },
   {
    "who": "dr",
    "text": "Has she ever choked, gagged a lot, or had pain when swallowing? Any vomiting, diarrhoea or tummy pain?",
    "dom": "tasks",
    "why": "Screens swallowing and GI red flags"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Has any food ever caused a rash, swelling or sickness?",
    "dom": "tasks",
    "why": "Food allergy screen"
   },
   {
    "who": "pt",
    "text": "No, never."
   },
   {
    "who": "dr",
    "text": "How is she getting on with talking, playing and mixing with other children? Any worries from nursery or the health visitor?",
    "dom": "tasks",
    "why": "Development and social communication screen"
   },
   {
    "who": "pt",
    "text": "No, she chats all day and plays well. Nobody’s mentioned anything."
   },
   {
    "who": "dr",
    "text": "When she’s offered something new, does she get very distressed, or just say no?",
    "dom": "tasks",
    "why": "Distinguishes ordinary fussiness from ARFID-type distress"
   },
   {
    "who": "pt",
    "text": "She just says no and pushes it away. Then it becomes a battle."
   },
   {
    "who": "dr",
    "text": "How are the battles affecting you and the rest of the family?",
    "dom": "rto",
    "why": "Parental and family impact"
   },
   {
    "who": "pt",
    "text": "I dread teatime. I feel like I’m failing her."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You’re clearly not failing her; you’re here because you care. What do you think might be going on, and what worries you most?",
    "dom": "rto",
    "why": "Explores ideas and concerns"
   },
   {
    "who": "pt",
    "text": "I worry she’s missing vitamins or something’s wrong with her. I thought maybe she needs a blood test or supplements."
   },
   {
    "who": "dr",
    "text": "Thank you, that’s really helpful. Let me weigh and measure her and look at her growth chart, because that will tell us a lot.",
    "dom": "rto",
    "why": "Links the worry to the key test"
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Mabel is following her growth lines nicely for weight and height, and she looks well and active. That tells me she is getting what she needs, even though mealtimes don’t feel that way.",
    "dom": "tasks",
    "why": "Growth plotted as the key reassurance"
   },
   {
    "who": "pt",
    "text": "Really? With what she eats?"
   },
   {
    "who": "dr",
    "text": "Yes. Being wary of new foods is very common at this age. It usually improves as children get older, and it’s nothing to do with your cooking or parenting. And because she’s growing well and has none of the warning signs, she doesn’t need blood tests.",
    "dom": "tasks",
    "why": "Normalises; avoids unnecessary tests"
   },
   {
    "who": "pt",
    "text": "That’s such a relief."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here are some things that often help. Eat together when you can, so she sees you enjoying different foods. Put a small amount of a new food on her plate next to something she likes, and don’t press her to eat it. Children often need many tries before they accept a food. Which of these feels doable at your house?",
    "dom": "tasks",
    "why": "Low-pressure repeated exposure; checks feasibility"
   },
   {
    "who": "pt",
    "text": "Eating together, yes. I’ve been pushing the vegetables hard."
   },
   {
    "who": "dr",
    "text": "Stepping back from the pushing is one of the most helpful things. Pressure, bribes and battles tend to make refusal worse. Keep meals short and calm, and let her decide how much she eats from what’s offered.",
    "dom": "tasks",
    "why": "Avoid force, bribery and battles"
   },
   {
    "who": "pt",
    "text": "And the separate meals?"
   },
   {
    "who": "dr",
    "text": "Try one family meal that includes at least one food she usually eats. Snacks, milk and juice between meals fill her up, so set times for snacks and offer water between meals. She’ll come to the table hungrier.",
    "dom": "tasks",
    "why": "Limits grazing, milk and juice; one family meal"
   },
   {
    "who": "pt",
    "text": "That makes sense."
   },
   {
    "who": "dr",
    "text": "On supplements: all children under five are advised to have daily vitamin drops with vitamins A, C and D. If you qualify for Healthy Start, they’re free. That’s standard for every child, not because anything is wrong.",
    "dom": "tasks",
    "why": "Correct UK vitamin advice without over-medicalising"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Please come back if she loses weight or drops off her growth lines, if the foods she eats narrow to almost nothing, if she chokes or vomits with food, or if you have worries about her development. The health visitor can also help and recheck her growth in a few months.",
    "dom": "gs",
    "why": "Specific return triggers and follow-up"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "What are the main things you’ll try at home?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Eat together, a tiny bit of new food with no pressure, no bribes, set snack times and fewer drinks between meals, and daily vitamin drops."
   },
   {
    "who": "dr",
    "text": "Perfect. You’re doing a good job; this phase usually settles.",
    "dom": "gs",
    "why": "Confirms understanding; supports the parent"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Greets Mabel as well as her mother; lets the mother describe the narrow diet and battles.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Impact on the parent and family; separate meals; guilt about “failing her”.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up “she seems happy and full of energy” as a key reassurance and “I’m worried she’s not getting what she needs” as the concern.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (missing vitamins or something wrong), concern (nutrition), expectation (blood tests or supplements).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Weighs, measures and plots on the UK-WHO chart; no blood tests when thriving.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Normal food neophobia versus faltering growth, ARFID, allergy, coeliac disease and developmental conditions.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screens swallowing problems, GI symptoms, food reactions, development and extreme distress.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Common, normal fussy eating in a thriving child.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Practical low-pressure feeding advice agreed with the parent; standard daily vitamin drops for under-5s.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Addresses parental anxiety and family meals; health visitor support.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Return for weight loss, falling centiles, a narrowing diet, choking or developmental concerns; growth recheck.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people"
   ],
   "stem": {
    "name": "Mabel",
    "age": "3 years · female",
    "pmh": [
     "No problems recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "No recent consultations.",
    "reason": "Mother: “Very fussy eater. Is she getting enough?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Opening",
     "d": "Greet parent and child; hear the story and the mealtime battles."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Typical day’s food and drink, swallowing, GI symptoms, food reactions, development, distress with new foods, family impact."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Worry about vitamins or illness; expects tests or supplements."
    },
    {
     "t": "6–8",
     "h": "Growth and explanation",
     "d": "Plot growth; explain normal fussiness; no tests needed."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Family meals, repeated no-pressure exposure, no bribes, set snacks, vitamin drops, return triggers, health visitor, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Orders blood tests or prescribes a multivitamin without plotting growth; tells the parent to “make her eat it”; no red-flag screen or safety-net.",
    "pass": "Plots growth, screens red flags, reassures that fussy eating is common, and gives practical no-pressure feeding advice.",
    "exc": "All of the above, plus: engages the child; distinguishes ordinary fussiness from ARFID and developmental concerns; addresses milk and juice grazing; gives correct UK vitamin advice; supports the parent’s confidence; involves the health visitor; teach-back."
   },
   "avoid": [
    {
     "dont": "“Let’s do some blood tests to check she isn’t deficient.”",
     "instead": "“Her growth tells us she’s getting enough; she doesn’t need blood tests.”",
     "why": "Tests in a thriving child add distress and rarely change management."
    },
    {
     "dont": "“Just don’t let her leave the table until she eats it.”",
     "instead": "“Offer it, let her decide, and keep it calm.”",
     "why": "Pressure and battles increase refusal."
    },
    {
     "dont": "“She doesn’t need any vitamins.”",
     "instead": "“All under-fives are advised to have daily vitamin A, C and D drops.”",
     "why": "UK advice recommends vitamin drops for children aged 6 months to 5 years."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family stress",
     "t": "Daily mealtime battles strain the whole family. Reducing pressure helps the parent as much as the child."
    },
    {
     "h": "Cost",
     "t": "Making separate meals and throwing food away costs money. Healthy Start can provide free vitamins and help buying food for eligible families."
    }
   ],
   "legal": [
    {
     "h": "Consent and the child’s voice",
     "t": "A parent with parental responsibility consents for a 3-year-old. Speak to Mabel directly and explain examination and weighing in a way she understands."
    }
   ],
   "professional": [
    {
     "h": "Avoiding over-medicalising",
     "t": "Reassurance based on plotted growth is evidence, not dismissal. Record the measurements and centiles."
    },
    {
     "h": "Working with the health visitor",
     "t": "The health visiting team offers feeding support and growth checks, and should hear about any concern about growth or development."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Health visitors and children’s centres run feeding and parenting support. The NHS Start for Life website has advice on fussy eating."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Faltering growth or weight loss (NICE NG75)",
     "Choking, gagging, pain on swallowing, vomiting, diarrhoea",
     "Reactions to foods (NICE CG116); coeliac symptoms (NICE NG20)",
     "Extreme restriction with distress (possible ARFID); developmental or social communication concerns (NICE CG128)"
    ],
    "psychosocial": [
     "Parental guilt and anxiety",
     "Mealtime battles and separate meals",
     "Family stress around food"
    ],
    "ice": [
     "Idea: she is missing vitamins or something is wrong",
     "Concern: she is not getting enough nutrition",
     "Expectation: blood tests or supplements"
    ]
   },
   "diagnosis": "“This is normal fussy eating in a child who is growing well and developing normally.”",
   "diagnosisLay": "“Young children are programmed to be wary of new foods, a bit like a smoke alarm that goes off at anything unfamiliar. Each calm, no-pressure meeting with a food teaches the alarm it’s safe. Pushing sets the alarm off again.”",
   "management": {
    "reflectIce": "“You were worried she isn’t getting enough and might need tests. Her growth chart shows she is getting what she needs, so she doesn’t need tests. What will help most is making mealtimes calmer.”",
    "psychosocial": "Relieve guilt, reduce the battles, and pick one or two changes the parent feels able to try.",
    "sharedPlan": [
     "Plot and record growth on the UK-WHO chart",
     "Family meals; small portions of new foods beside accepted foods; repeated tries without pressure",
     "No force, bribes or battles; short, calm meals",
     "Set snack times; limit juice and large milk drinks between meals",
     "Daily vitamin A, C and D drops for under-5s (Healthy Start if eligible)"
    ],
    "safetyNet": [
     "Return if weight loss, falling centiles, a narrowing diet, choking or vomiting, or developmental concerns",
     "Health visitor growth recheck in a few months"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Faltered growth pathway",
    "s": "Visual algorithm · NICE NG75 thresholds",
    "href": "algorithms/faltered-growth.html"
   },
   {
    "ic": "💠",
    "t": "Coeliac disease protocol",
    "s": "NICE NG20 · who to test",
    "href": "management/coeliac-disease.html"
   },
   {
    "ic": "💠",
    "t": "Autism protocol",
    "s": "Recognition and referral",
    "href": "management/autism.html"
   },
   {
    "ic": "💠",
    "t": "Eating disorders protocol",
    "s": "Recognition and referral",
    "href": "management/eating-disorders.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is lost by over-investigating a well child, by skipping the growth chart, and by advice that increases pressure. Each pattern below is common and fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Reassuring without weighing, measuring and plotting.",
     "why": "Growth is the evidence of adequate intake; without it, reassurance is guesswork (NICE NG75).",
     "fix": "Plot weight and height on the UK-WHO chart and show the parent."
    },
    {
     "dom": "tasks",
     "fail": "Ordering blood tests or a multivitamin prescription for a thriving child.",
     "why": "Tests add distress and rarely help; standard vitamin drops are advice for all under-5s, not a treatment.",
     "fix": "Explain why tests aren’t needed; recommend the standard A, C and D drops."
    },
    {
     "dom": "tasks",
     "fail": "Missing ARFID or developmental concerns.",
     "why": "Extreme restriction with distress, or social communication concerns, need assessment (NICE CG128).",
     "fix": "Ask how she reacts to new foods and about talking, play and nursery."
    },
    {
     "dom": "tasks",
     "fail": "Ignoring drinks and snacks.",
     "why": "Grazing, juice and large milk drinks reduce appetite at meals.",
     "fix": "Take a full day’s food and drink history and set snack times."
    },
    {
     "dom": "rto",
     "fail": "Advising the parent to insist the child finishes her plate.",
     "why": "Pressure and bribes worsen refusal and the battles.",
     "fix": "Recommend repeated, calm exposure and letting the child decide how much to eat."
    },
    {
     "dom": "gs",
     "fail": "No clear return triggers.",
     "why": "Falling centiles or narrowing intake need review.",
     "fix": "Name specific triggers, involve the health visitor, and use teach-back."
    }
   ]
  }
 },
 "polyphagia-diabetes": {
  "stem": {
   "name": "Marcus Hale",
   "age": "48-year-old man",
   "pmh": [
    "Overweight",
    "Family history of diabetes noted in the case"
   ],
   "meds": [
    "Not specified in the case: check the repeat record"
   ],
   "allergy": "None recorded",
   "recent": "No recent bloods on file.",
   "reason": "A few weeks of constant hunger, thirst, passing urine often including at night, weight loss despite eating more, and exhaustion."
  },
  "knowledge": {
   "guideline": "[1] WHO diagnostic criteria for diabetes (2006) and use of HbA1c in diagnosis (2011) (international) · [2] NICE NG28 Type 2 diabetes in adults: management (updated February 2026) · [3] NICE NG17 Type 1 diabetes in adults: diagnosis and management · [4] Joint British Diabetes Societies for Inpatient Care: management of DKA in adults (revised March 2023) · [5] NICE NG238 Cardiovascular disease: risk assessment and reduction, including lipid modification (2023) · [6] NICE NG12 (updated April 2026) Suspected cancer: recognition and referral (updated April 2026) · [7] DVLA Assessing fitness to drive: diabetes mellitus · [8] MHRA Drug Safety Update: SGLT2 inhibitors and diabetic ketoacidosis (March 2020)",
   "summary": "Polyphagia with thirst, polyuria and weight loss over weeks is hyperglycaemia until proved otherwise. The first job is to decide whether he is safe to stay in the community: a capillary glucose and ketone check, and a screen for vomiting, abdominal pain, drowsiness, rapid breathing and dehydration. Then confirm diabetes with a laboratory plasma glucose, because HbA1c can under-read when symptoms have been present for under two months [1]. Although type 2 is likeliest in an overweight man with a family history, weight loss and age under 50 are features that NG17 [3] asks you to weigh for type 1. If type 2 is confirmed, NG28 (February 2026) [2] recommends modified-release metformin first, then adding an SGLT2 inhibitor, alongside education, cardiovascular risk reduction and complication screening.",
   "points": [
    {
     "h": "Diagnosis",
     "t": "WHO [1]: with classic symptoms, one abnormal result confirms diabetes: random plasma glucose 11.1 mmol/L or more, fasting plasma glucose 7.0 mmol/L or more, or HbA1c 48 mmol/mol or more. HbA1c is not appropriate for diagnosis when symptoms have been present for less than two months, when type 1 is suspected, in acute illness, in pregnancy, or in conditions affecting red cell turnover [1]; use plasma glucose. A capillary meter reading is a triage tool, not a diagnostic test."
    },
    {
     "h": "Type 1 or type 2?",
     "t": "NG17 [3]: diagnose type 1 clinically in adults with hyperglycaemia and one or more of: ketosis, rapid weight loss, age under 50, BMI below 25, or a personal or family history of autoimmune disease; do not use age or BMI alone to exclude it. Marcus is 48 with weight loss, so type 1 or latent autoimmune diabetes must be actively considered even though he is overweight. If ketones are raised or type 1 is suspected, discuss with the diabetes or acute medical team the same day."
    },
    {
     "h": "DKA and HHS",
     "t": "JBDS [4] defines DKA as ketones 3.0 mmol/L or more (or significant ketonuria), glucose above 11 mmol/L or known diabetes, and bicarbonate below 15 mmol/L and/or venous pH below 7.3. Warning features: vomiting, abdominal pain, drowsiness, deep rapid breathing, ketotic breath, dehydration. Marked hyperglycaemia with dehydration and confusion without ketosis suggests a hyperosmolar state. Either needs emergency admission."
    },
    {
     "h": "Initial management of type 2",
     "t": "NG28 (February 2026) [2]: offer structured education and lifestyle support; start modified-release metformin in preference to standard release (unless swallowing needs dictate), titrating to the tolerated dose, then add an SGLT2 inhibitor, with caution in frailty. Before an SGLT2 inhibitor, check DKA risk factors and counsel on ketoacidosis and sick-day rules [8]. Doses per BNF. Typical HbA1c target 48 mmol/mol on lifestyle or drugs without hypoglycaemia risk, individualised."
    },
    {
     "h": "Risk and complications",
     "t": "Check BP, lipids and QRISK: NG238 [5] recommends offering atorvastatin 20 mg when 10-year risk is 10% or more. Arrange retinal screening, foot assessment, urine ACR and eGFR, and weight support. NICE NG12 (updated April 2026) [6]: new-onset diabetes with weight loss at 60 or over prompts urgent pancreatic imaging; at 48 this criterion does not apply, but weight loss that continues after glucose control needs reassessment."
    },
    {
     "h": "Other causes and driving",
     "t": "If glucose is normal, think of hyperthyroidism (TFTs), malabsorption and malignancy. DVLA [7]: Group 1 drivers treated with diet, metformin or an SGLT2 inhibitor alone do not need to notify; insulin or sulfonylureas bring hypoglycaemia rules, and different rules apply to Group 2 licences."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Hale, I’m Dr Evans. What’s brought you in today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "Something’s not right, doctor. I’m hungry all the time, I can’t stop eating, yet I’ve lost weight. I’m constantly thirsty, I’m up several times a night to wee, and I’m shattered. It’s come on over a few weeks. What’s going on?"
   },
   {
    "who": "dr",
    "text": "That sounds exhausting, and worrying when the weight is dropping despite eating. I’d like to ask a few quick questions and check your sugar with a finger-prick straight away, if that’s all right.",
    "dom": "tasks",
    "why": "Recognises the osmotic cluster; immediate capillary glucose"
   },
   {
    "who": "pt",
    "text": "Go ahead."
   },
   {
    "phase": "Is he safe? Focused history",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Have you been sick at all, had tummy pain, felt drowsy or muddled, or noticed you’re breathing faster or deeper than usual?",
    "dom": "tasks",
    "why": "Screens for DKA and HHS"
   },
   {
    "who": "pt",
    "text": "No, none of that. Just tired and thirsty."
   },
   {
    "who": "dr",
    "text": "Are you managing to keep fluids down, and how much weight do you think you’ve lost?",
    "dom": "tasks",
    "why": "Dehydration and rate of weight loss"
   },
   {
    "who": "pt",
    "text": "Drinking loads. My clothes are looser, but I haven’t weighed myself."
   },
   {
    "who": "dr",
    "text": "Any blurred vision, infections like thrush, slow-healing cuts, or tingling in your feet?",
    "dom": "tasks",
    "why": "Other hyperglycaemic symptoms"
   },
   {
    "who": "pt",
    "text": "No, I don’t think so."
   },
   {
    "who": "dr",
    "text": "And to rule out other causes of hunger with weight loss: any shakiness, heat intolerance, palpitations, diarrhoea, or blood in your stools?",
    "dom": "tasks",
    "why": "Hyperthyroidism, malabsorption, bowel red flags"
   },
   {
    "who": "pt",
    "text": "No. Nothing like that."
   },
   {
    "who": "dr",
    "text": "Who in the family has diabetes, and do you know which type? Any family history of thyroid or other autoimmune conditions?",
    "dom": "tasks",
    "why": "Family history relevant to type 1 versus 2"
   },
   {
    "who": "pt",
    "text": "I know there’s diabetes in the family. I’m not sure of the details."
   },
   {
    "who": "dr",
    "text": "Do you take any medicines, including steroids? And do you drive, and if so, for work?",
    "dom": "tasks",
    "why": "Drug causes; DVLA relevance"
   },
   {
    "who": "pt",
    "text": "Nothing regular. I drive a car, that’s all."
   },
   {
    "phase": "Tests and examination",
    "clock": "5–6 min",
    "who": "dr",
    "text": "Your finger-prick sugar is high, well above normal. I’m also checking your blood ketones, which tell me whether your body is starting to break down fat because it can’t use sugar properly.",
    "dom": "tasks",
    "why": "Capillary ketones: the key safety test"
   },
   {
    "who": "dr",
    "text": "Your ketones are normal and your pulse, blood pressure and breathing are fine, and you don’t look dry. That means you’re safe to be managed from here today.",
    "dom": "tasks",
    "why": "Documents the decision not to admit, with reasons"
   },
   {
    "phase": "Ideas, concerns and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Before I explain, what had you been thinking this might be?",
    "dom": "rto",
    "why": "ICE"
   },
   {
    "who": "pt",
    "text": "I wondered about diabetes, with the family. But the weight loss scared me. I thought it could be something worse."
   },
   {
    "who": "dr",
    "text": "I’m glad you said that. I think this is diabetes: when sugar is high, it spills into the urine, taking water with it, so you’re thirsty, and your body can’t use the sugar, so you feel hungry and lose weight. That explains everything you’ve described, including the weight loss.",
    "dom": "tasks",
    "why": "Explains the mechanism and answers the cancer worry"
   },
   {
    "who": "pt",
    "text": "So it’s not cancer?"
   },
   {
    "who": "dr",
    "text": "The pattern fits diabetes very well. If the weight keeps falling once your sugar is under control, I’ll look further. I need to confirm with a laboratory glucose test, because the usual HbA1c test can under-read when symptoms have only been there a few weeks.",
    "dom": "tasks",
    "why": "Plasma glucose rather than HbA1c for short-duration symptoms"
   },
   {
    "who": "dr",
    "text": "Most people your age and build have type 2. But because you’re under 50 and losing weight, I need to keep type 1 in mind, which needs insulin. If your ketones rise or you get worse quickly, that changes the plan the same day.",
    "dom": "tasks",
    "why": "Weighs NG17 type 1 features honestly"
   },
   {
    "phase": "Plan",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Today: a lab glucose, HbA1c as a baseline, kidney function, cholesterol, thyroid, liver tests and a urine test for protein. I’ll see you again within the week with the results.",
    "dom": "tasks",
    "why": "Confirmation and baseline tests"
   },
   {
    "who": "dr",
    "text": "If it’s type 2, the usual start is a slow-release metformin tablet, increased gradually, and then a second tablet called an SGLT2 inhibitor added later, along with a course on living with diabetes. We’ll arrange eye screening, foot and kidney checks, and look at your heart risk.",
    "dom": "tasks",
    "why": "NG28 February 2026 initial treatment and care processes"
   },
   {
    "who": "pt",
    "text": "Will I be able to keep driving?"
   },
   {
    "who": "dr",
    "text": "Yes. With those tablets you don’t need to tell the DVLA for a normal car licence. That would change if you ever needed insulin.",
    "dom": "tasks",
    "why": "DVLA advice for Group 1"
   },
   {
    "who": "dr",
    "text": "How do you feel about changes to what you eat and drink? What would be realistic for you?",
    "dom": "rto",
    "why": "Negotiates lifestyle rather than lecturing"
   },
   {
    "who": "pt",
    "text": "I could cut the fizzy drinks. I’ve been drinking loads because of the thirst."
   },
   {
    "who": "dr",
    "text": "That’s a great start: switch to water now, because sugary drinks will push your sugar higher.",
    "dom": "rto",
    "why": "Builds on his own choice"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you start vomiting, get tummy pain, feel drowsy or breathless, or can’t keep fluids down, that’s an emergency: call 999 or go to A&E. Can you tell me the plan in your own words?",
    "dom": "gs",
    "why": "DKA safety-net; teach-back"
   },
   {
    "who": "pt",
    "text": "Blood tests today, water not fizzy drinks, back in a week, and A&E if I’m sick or drowsy."
   },
   {
    "who": "dr",
    "text": "Exactly. We’ll take this step by step together.",
    "dom": "gs",
    "why": "Follow-up agreed"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; immediate recognition that the cluster needs a same-visit glucose.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Driving, diet and sugary drinks, family history, what he can realistically change.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up weight loss as both a type 1 clue and the source of his cancer fear.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (diabetes), concern (weight loss means cancer), expectation (an explanation).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Capillary glucose and ketones; obs and hydration; lab plasma glucose; HbA1c baseline, U&E, lipids, TFT, LFT, ACR.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Type 2 versus type 1 or LADA; hyperthyroidism, malabsorption, malignancy.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "DKA and HHS features screened and ketones checked before deciding on community care.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Probable diabetes, type 2 likeliest, type 1 actively considered; HbA1c limits explained.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "NG28 (Feb 2026) MR metformin then SGLT2 inhibitor; education; lifestyle agreed with him.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "CVD risk (NG238), retinal, foot and renal screening; DVLA advice; thyroid checked.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 for vomiting, pain, drowsiness or breathlessness; review within a week; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "New & undifferentiated presentations",
    "Investigations & results"
   ],
   "stem": {
    "name": "Marcus Hale",
    "age": "48 years · male",
    "pmh": [
     "Overweight",
     "Family history of diabetes"
    ],
    "meds": [
     "Check repeat record"
    ],
    "allergy": "None recorded",
    "recent": "No recent bloods.",
    "reason": "Constant hunger and thirst, polyuria, weight loss, exhaustion over a few weeks."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Let him list the symptoms; offer a finger-prick glucose now."
    },
    {
     "t": "1–5",
     "h": "Safety history",
     "d": "Vomiting, abdominal pain, drowsiness, breathing, fluids; other hyperglycaemic symptoms; thyroid and bowel; family history; medicines; driving."
    },
    {
     "t": "5–6",
     "h": "Tests",
     "d": "Capillary glucose and ketones; obs; hydration. Decide community versus same-day."
    },
    {
     "t": "6–11",
     "h": "Explain and plan",
     "d": "ICE; mechanism; plasma glucose not HbA1c alone; type 1 kept in mind; bloods; NG28 treatment path; DVLA; one lifestyle change."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "Emergency features; review within a week; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Books a routine HbA1c and sends him home without checking glucose or ketones; misses DKA features; starts treatment without confirming the diagnosis; ignores the cancer worry.",
    "pass": "Checks capillary glucose and ketones, screens for DKA, confirms diabetes with appropriate tests, starts type 2 management and safety-nets.",
    "exc": "All of the above, plus: knows HbA1c can under-read with symptoms under two months, weighs NG17 type 1 features in a 48-year-old losing weight, uses the NG28 (Feb 2026) sequence, gives DVLA advice, and answers the cancer fear directly."
   },
   "avoid": [
    {
     "dont": "“Let’s do an HbA1c and I’ll see you in a couple of weeks.”",
     "instead": "“I’ll check your sugar and ketones now, and confirm with a lab glucose.”",
     "why": "A delay can miss DKA, and HbA1c can under-read after only weeks of symptoms."
    },
    {
     "dont": "“You’re overweight, so it’s bound to be type 2.”",
     "instead": "“Type 2 is most likely, but your weight loss means I’ll keep type 1 in mind.”",
     "why": "NG17 advises against using BMI or age alone to exclude type 1."
    },
    {
     "dont": "“You need to lose weight and stop eating so much.”",
     "instead": "“Your hunger is caused by the high sugar. What change feels realistic to start with?”",
     "why": "Blame undermines engagement; polyphagia is a symptom, not a failing."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Diet and daily life",
     "t": "Sugary drinks taken for thirst worsen hyperglycaemia. Work patterns and shift work shape meal timing and medication choices."
    },
    {
     "h": "Family",
     "t": "First-degree relatives share the risk; offering them risk assessment is reasonable."
    }
   ],
   "legal": [
    {
     "h": "DVLA",
     "t": "Group 1 drivers on diet, metformin or SGLT2 inhibitors alone need not notify. Insulin or sulfonylureas bring hypoglycaemia-awareness rules; Group 2 licences have stricter rules."
    },
    {
     "h": "Prescription charges",
     "t": "People with diabetes treated with medication are entitled to a medical exemption certificate in England."
    }
   ],
   "professional": [
    {
     "h": "Diagnostic safety",
     "t": "Record the ketone result and the reasoning for community management; arrange timely review of confirmatory results."
    },
    {
     "h": "Shared decisions",
     "t": "Discuss benefits and side effects of metformin and SGLT2 inhibitors, including genital infection and DKA risk, and record the conversation."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Structured education programme (e.g. DESMOND), NHS Diabetes Prevention and weight services where eligible, diabetic eye screening, Diabetes UK."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Vomiting, abdominal pain, drowsiness, deep rapid breathing, ketotic breath: suspected DKA, emergency",
     "Confusion with marked dehydration: suspected hyperosmolar state, emergency",
     "Raised capillary ketones or rapid progression: same-day diabetes or medical team",
     "Weight loss with new diabetes at 60 or over: NICE NG12 (updated April 2026) pancreatic imaging (not met at 48)"
    ],
    "psychosocial": [
     "Fear that weight loss means cancer",
     "Driving",
     "Diet, sugary drinks and family patterns"
    ],
    "ice": [
     "Idea: diabetes, given the family",
     "Concern: the weight loss means something worse",
     "Expectation: an explanation and a plan"
    ]
   },
   "diagnosis": "“Your symptoms and the high sugar reading point to diabetes, most likely type 2. I’ll confirm it with a lab test today.”",
   "diagnosisLay": "“Insulin is the key that lets sugar into your cells. If the key isn’t working, sugar builds up in the blood and spills into the urine, taking water with it, while your cells go hungry. That’s why you’re thirsty, weeing more, hungry and losing weight.”",
   "management": {
    "reflectIce": "“You were frightened the weight loss meant cancer. The pattern fits diabetes very well, and I’ll keep checking your weight as things settle.”",
    "psychosocial": "Build on his own chosen change; address driving; offer education rather than a lecture.",
    "sharedPlan": [
     "Lab plasma glucose; HbA1c baseline, U&E, lipids, TFT, LFT, urine ACR",
     "If type 2: MR metformin, then add an SGLT2 inhibitor per NG28 (Feb 2026); doses per BNF",
     "Structured education; switch sugary drinks to water",
     "QRISK and statin per NG238; retinal, foot and kidney checks",
     "Same-day diabetes team if ketones rise or type 1 suspected"
    ],
    "safetyNet": [
     "Vomiting, abdominal pain, drowsiness, breathlessness: 999 or A&E",
     "Review within a week with results; reassess if weight keeps falling"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Type 2 diabetes",
    "s": "Protocol · NG28 (Feb 2026)",
    "href": "management/type-2-diabetes.html"
   },
   {
    "ic": "💠",
    "t": "Type 1 diabetes",
    "s": "Protocol · NG17 features",
    "href": "management/type-1-diabetes.html"
   },
   {
    "ic": "💠",
    "t": "Diabetic ketoacidosis",
    "s": "Protocol · JBDS criteria",
    "href": "management/dka.html"
   },
   {
    "ic": "📋",
    "t": "Type 2 diabetes",
    "s": "Case walkthrough",
    "href": "../cases/type-2-diabetes.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA guide",
    "s": "Diabetes and driving",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "The station checks whether you recognise a new diabetic who may be decompensating, confirm the diagnosis correctly, and avoid anchoring on type 2.",
   "items": [
    {
     "dom": "tasks",
     "fail": "No capillary glucose or ketone check at the visit.",
     "why": "Ketones decide whether he can safely go home.",
     "fix": "Check glucose and ketones and record the decision."
    },
    {
     "dom": "tasks",
     "fail": "Relying on HbA1c alone to diagnose after a few weeks of symptoms.",
     "why": "WHO 2011: HbA1c is not appropriate when symptoms are under two months; it can under-read.",
     "fix": "Use a laboratory plasma glucose."
    },
    {
     "dom": "tasks",
     "fail": "Assuming type 2 because he is overweight.",
     "why": "NG17: age under 50 and weight loss are type 1 features; BMI alone does not exclude it.",
     "fix": "Keep type 1 in mind and act the same day if ketones rise."
    },
    {
     "dom": "tasks",
     "fail": "Starting standard-release metformin alone as the whole plan.",
     "why": "NG28 (Feb 2026) prefers modified-release metformin, then an SGLT2 inhibitor, plus education and risk reduction.",
     "fix": "Follow the updated sequence with care processes."
    },
    {
     "dom": "rto",
     "fail": "Ignoring the fear that weight loss means cancer.",
     "why": "It is his main concern and affects how he hears the plan.",
     "fix": "Address it directly and say what would prompt more tests."
    },
    {
     "dom": "gs",
     "fail": "Vague safety-netting.",
     "why": "DKA can develop quickly if this is type 1.",
     "fix": "Name vomiting, abdominal pain, drowsiness and breathlessness as 999 features."
    }
   ]
  }
 },
 "post-covid-syndrome": {
  "stem": {
   "name": "Dana Whitfield",
   "age": "42-year-old woman",
   "pmh": [
    "COVID-19 about 4 months ago"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded",
   "recent": "No investigations recorded since the COVID-19 illness.",
   "reason": "Booked: “Still exhausted and breathless months after COVID.”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG188 COVID-19 rapid guideline: managing the long-term effects of COVID-19 · [2] NICE NG206 Myalgic encephalomyelitis (or encephalopathy)/chronic fatigue syndrome · [3] NICE NG158 Venous thromboembolic diseases · [4] DWP: fit note guidance · [5] Equality Act 2010",
   "summary": "Symptoms continuing more than 12 weeks after acute COVID-19 and not explained by another diagnosis are post-COVID-19 syndrome [1]. Believe her, exclude other causes with targeted tests and examination, refer urgently if red flags, and support self-management with pacing, rehabilitation referral and work adjustments.",
   "points": [
    {
     "h": "Definitions",
     "t": "Ongoing symptomatic COVID-19: 4 to 12 weeks. Post-COVID-19 syndrome: over 12 weeks, not explained by an alternative diagnosis. Symptoms often overlap, fluctuate and change [1]."
    },
    {
     "h": "Assessment",
     "t": "Holistic history: symptoms, their pattern and impact, and mood. Examination including oxygen saturation, pulse, BP and chest. Exercise tolerance suited to the person (for example a 1-minute sit-to-stand test with pulse and saturation), and lying and standing pulse and BP if postural symptoms [1]."
    },
    {
     "h": "Tests",
     "t": "Bloods guided by symptoms, such as FBC, renal and liver function, CRP, ferritin, BNP, HbA1c and thyroid function. Chest X-ray by 12 weeks if respiratory symptoms continue. ECG with palpitations or chest pain [1]."
    },
    {
     "h": "Urgent referral",
     "t": "Severe hypoxaemia or oxygen desaturation on exercise, signs of severe lung disease, cardiac chest pain [1]. Consider pulmonary embolism with new pleuritic pain, haemoptysis or sudden breathlessness (NICE NG158) [3]."
    },
    {
     "h": "Management",
     "t": "Self-management support, including pacing and setting realistic goals, and referral to an integrated multidisciplinary assessment service after other causes are excluded; referral can be from 4 weeks [1]. Where post-exertional symptom exacerbation occurs, do not advise pushing through, and do not offer fixed incremental graded exercise (NICE NG206 principles for ME/CFS) [2]."
    },
    {
     "h": "Work",
     "t": "Fit note with adjustments such as a phased return or altered hours [4]. Long-lasting symptoms with a substantial effect on daily activity may meet the Equality Act 2010 definition of disability, which requires reasonable adjustments [5]."
    },
    {
     "h": "Mood",
     "t": "Screen for anxiety and depression and offer support; psychological symptoms do not mean the illness is “in her head”."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Ms Whitfield, I’m Dr O’Neill. What brings you in?",
    "dom": "rto",
    "why": "Open start"
   },
   {
    "who": "pt",
    "text": "I had COVID about four months ago and I’m just not right. I’m exhausted all the time, breathless going upstairs, my brain’s foggy and I can’t concentrate at work, and whenever I try to do more I crash badly for days. People think I should be over it. Is this in my head?"
   },
   {
    "who": "dr",
    "text": "I can hear how much this is affecting you, and I believe you. What you’re describing is real, and we see it after COVID. Let me ask more so we can make sure nothing else is going on.",
    "dom": "rto",
    "why": "Validates early"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Tell me about the breathlessness. Is it only on exertion, and has it changed recently? Any chest pain, coughing blood, or leg swelling?",
    "dom": "tasks",
    "why": "Red flags for cardiac, PE and lung disease"
   },
   {
    "who": "pt",
    "text": "Stairs mainly. It’s not getting worse. No chest pain, no blood."
   },
   {
    "who": "dr",
    "text": "Any heart racing or thumping, and does it happen when you stand up? Any fainting?",
    "dom": "tasks",
    "why": "Palpitations, postural symptoms, syncope"
   },
   {
    "who": "pt",
    "text": "Sometimes my heart races. I haven’t fainted."
   },
   {
    "who": "dr",
    "text": "When you crash after doing more, how long after, and how long does it last?",
    "dom": "tasks",
    "why": "Characterises post-exertional symptom exacerbation"
   },
   {
    "who": "pt",
    "text": "Usually the next day, then I’m wiped out for days."
   },
   {
    "who": "dr",
    "text": "How’s your sleep, appetite, and weight? Any fevers or night sweats?",
    "dom": "tasks",
    "why": "Alternative diagnoses"
   },
   {
    "who": "pt",
    "text": "Sleep’s broken. Nothing else like that."
   },
   {
    "who": "dr",
    "text": "And how has your mood been through all this?",
    "dom": "tasks",
    "why": "Mood screen"
   },
   {
    "who": "pt",
    "text": "Fed up and worried. Not depressed, I don’t think."
   },
   {
    "phase": "ICE and impact",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You asked if it’s in your head. Where has that worry come from?",
    "dom": "rto",
    "why": "Explores idea"
   },
   {
    "who": "pt",
    "text": "People at work think I should be over it. I’m starting to wonder myself."
   },
   {
    "who": "dr",
    "text": "What would getting better look like for you, and what were you hoping for today?",
    "dom": "rto",
    "why": "Her goals and expectations"
   },
   {
    "who": "pt",
    "text": "To manage a full day at work without paying for it. And someone to take it seriously."
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’d like to check your oxygen level, pulse, blood pressure lying and standing, and listen to your chest and heart. Then a short sit-to-stand test while I watch your oxygen and pulse, if you feel up to it. (Findings recorded; no hypoxaemia or desaturation on exertion; no red flags found.)",
    "dom": "tasks",
    "why": "NICE NG188 examination and exercise test"
   },
   {
    "who": "dr",
    "text": "Nothing I’ve found needs emergency treatment. I’d also like blood tests: blood count, iron stores, kidneys, liver, thyroid, sugar, inflammation and a heart marker. And a heart tracing because of the racing, and a chest X-ray because the breathlessness has lasted this long.",
    "dom": "tasks",
    "why": "Targeted tests to exclude other causes (NICE NG188)"
   },
   {
    "who": "pt",
    "text": "So you do think something could be wrong?"
   },
   {
    "who": "dr",
    "text": "I think this is most likely long COVID, which is what we call symptoms lasting over 12 weeks. The tests are to make sure we’re not missing anything that’s easier to treat, like anaemia or a thyroid problem. It isn’t in your head.",
    "dom": "tasks",
    "why": "Names post-COVID-19 syndrome; explains the purpose of tests"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The crashing matters. Pushing through tends to make it worse. The approach is pacing: working out how much you can do without crashing, doing a bit less than that, and spreading activity through the day with rests. We only increase slowly when you’re stable.",
    "dom": "tasks",
    "why": "Pacing; no push-through (NICE NG188, NG206)"
   },
   {
    "who": "pt",
    "text": "That’s the opposite of what I’ve been doing."
   },
   {
    "who": "dr",
    "text": "Most people do the same. I’d also like to refer you to the local long COVID service, which has physios, occupational therapists and psychologists.",
    "dom": "tasks",
    "why": "Referral to multidisciplinary service"
   },
   {
    "who": "pt",
    "text": "And work?"
   },
   {
    "who": "dr",
    "text": "We can do a fit note saying you may be fit for work with adjustments, such as a phased return, fewer hours or flexible breaks. If it goes on, your employer may have to make reasonable adjustments under the Equality Act. Would that help?",
    "dom": "tasks",
    "why": "Fit note and Equality Act"
   },
   {
    "who": "pt",
    "text": "Yes. I’ve been dreading telling them."
   },
   {
    "who": "dr",
    "text": "We can word it so it’s clear. Which bit of the plan feels most doable this week?",
    "dom": "rto",
    "why": "Shared goal-setting"
   },
   {
    "who": "pt",
    "text": "Planning rests at work, I think."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you get sudden or worsening breathlessness, chest pain, coughing blood, fainting or a racing heart with dizziness, get seen urgently or call 999. I’ll see you with the results in two weeks. What will you tell work?",
    "dom": "gs",
    "why": "Named red flags, review, teach-back"
   },
   {
    "who": "pt",
    "text": "That I’ve got long COVID, I’m having tests, and I need a phased return with rests."
   },
   {
    "who": "dr",
    "text": "Perfect. And thank you for coming. You did the right thing.",
    "dom": "rto",
    "why": "Warm close"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; let her describe the full picture including the “in my head” fear.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work, colleagues’ attitudes, sleep and daily function explored.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “people think I should be over it” and post-exertional crashing, and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (in her head), concern (not believed, work), expectation (to be taken seriously and manage a full day).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Sats, pulse, BP lying and standing, chest and heart; 1-minute sit-to-stand; FBC, ferritin, U&E, LFT, CRP, BNP, HbA1c, TFT; ECG; chest X-ray (NICE NG188).",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Post-COVID-19 syndrome versus anaemia, thyroid disease, cardiac disease, PE, lung disease, depression.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about chest pain, haemoptysis, worsening breathlessness, syncope; urgent referral criteria (NICE NG188).",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named post-COVID-19 syndrome (over 12 weeks, not otherwise explained), pending tests.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Pacing without pushing through; referral to the long COVID service; fit note with adjustments.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Mood screened; sleep; Equality Act reasonable adjustments.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Red-flag safety-net, results review in two weeks, teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Dana Whitfield",
    "age": "42 years · female",
    "pmh": [
     "COVID-19 about 4 months ago"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "No investigations since the COVID-19 illness.",
    "reason": "“Still exhausted and breathless months after COVID.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and validate",
     "d": "Let her finish. Answer “is it in my head?” with belief."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Breathlessness, chest pain, haemoptysis, palpitations, syncope, crash pattern, sleep, weight, mood."
    },
    {
     "t": "5–6",
     "h": "ICE and goals",
     "d": "Disbelief at work; what getting better means to her."
    },
    {
     "t": "6–8",
     "h": "Examine and explain",
     "d": "Sats, lying and standing BP, chest, heart, sit-to-stand; tests to exclude other causes."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Pacing; long COVID service; fit note; red flags; review; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Tells her it’s anxiety or to push through with exercise; no examination or tests; no work support.",
    "pass": "Validates, examines, does basic tests, explains pacing and refers to the long COVID service.",
    "exc": "All of the above, plus: explicit red-flag questions; lying and standing BP and sit-to-stand; tests matched to NICE NG188; explains post-exertional crashing; builds the plan around her goal; fit note with adjustments and the Equality Act; clear red-flag safety-net."
   },
   "avoid": [
    {
     "dont": "“It’s probably anxiety.”",
     "instead": "“This is real. It’s called long COVID, and I want to check nothing else is adding to it.”",
     "why": "Dismissal is the commonest complaint from people with long COVID."
    },
    {
     "dont": "“Just build up your exercise every week.”",
     "instead": "“Pacing first: do a little less than causes a crash, then build slowly when stable.”",
     "why": "Pushing through worsens post-exertional symptoms."
    },
    {
     "dont": "“It’s all from COVID.”",
     "instead": "“It’s likely long COVID, but let’s exclude anaemia, thyroid and heart or lung problems.”",
     "why": "Attributing everything to COVID misses treatable causes."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Being disbelieved",
     "t": "Colleagues’ doubts add stress; validation strengthens the therapeutic relationship."
    },
    {
     "h": "Daily life",
     "t": "Fatigue and fog affect home as well as work; pacing applies to both."
    }
   ],
   "legal": [
    {
     "h": "Fit note",
     "t": "“May be fit for work” with phased return, altered hours or amended duties."
    },
    {
     "h": "Equality Act 2010",
     "t": "Long-term symptoms with a substantial effect on daily activities may count as a disability; employers must consider reasonable adjustments."
    }
   ],
   "professional": [
    {
     "h": "Avoiding diagnostic overshadowing",
     "t": "Examine and test before attributing all symptoms to COVID."
    },
    {
     "h": "Continuity",
     "t": "Planned reviews and a named clinician help people with fluctuating conditions."
    }
   ],
   "community": [
    {
     "h": "Long COVID services",
     "t": "Integrated multidisciplinary assessment and rehabilitation services."
    },
    {
     "h": "Work support",
     "t": "Occupational health and the Access to Work scheme."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Sudden or worsening breathlessness, pleuritic chest pain, haemoptysis (PE)",
     "Cardiac chest pain, syncope or palpitations with dizziness",
     "Hypoxaemia or desaturation on exertion",
     "Weight loss, fever, night sweats (alternative diagnosis)"
    ],
    "psychosocial": [
     "Colleagues’ disbelief and work pressure",
     "Sleep, mood and daily function",
     "What recovery means to her"
    ],
    "ice": [
     "Idea: it may be in her head",
     "Concern: not believed; losing her job performance",
     "Expectation: to be taken seriously and manage a full day"
    ]
   },
   "diagnosis": "“This looks like post-COVID-19 syndrome, often called long COVID. I’ll run tests to make sure nothing else is contributing.”",
   "diagnosisLay": "“Think of your energy like a phone battery that’s lost capacity since COVID. If you run it to zero, it takes days to recharge. Pacing means stopping before it runs out.”",
   "management": {
    "reflectIce": "“You wondered if it was in your head. It isn’t. What you describe is a recognised condition.”",
    "psychosocial": "Build the plan around her goal of a full working day; support conversations with her employer.",
    "sharedPlan": [
     "Examination, sit-to-stand test and tests per NICE NG188 (bloods, ECG, chest X-ray)",
     "Pacing without pushing through; referral to the long COVID service",
     "Fit note with a phased return or adjustments; Equality Act reasonable adjustments"
    ],
    "safetyNet": [
     "Sudden or worsening breathlessness, chest pain, haemoptysis, fainting or a racing heart with dizziness: urgent assessment or 999",
     "Review with results in two weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Fatigue",
    "s": "Visual algorithm",
    "href": "algorithms/fatigue.html"
   },
   {
    "ic": "📋",
    "t": "Fatigue",
    "s": "Case walkthrough",
    "href": "../cases/fatigue.html"
   },
   {
    "ic": "🗺️",
    "t": "Breathlessness",
    "s": "Visual algorithm",
    "href": "algorithms/breathlessness.html"
   },
   {
    "ic": "🗺️",
    "t": "Palpitations",
    "s": "Visual algorithm",
    "href": "algorithms/palpitations.html"
   },
   {
    "ic": "💠",
    "t": "ME/CFS",
    "s": "Management protocol · pacing",
    "href": "management/me-cfs.html"
   },
   {
    "ic": "📝",
    "t": "Fit note",
    "s": "Fit note guide",
    "href": "fit-note.html"
   }
  ],
  "pitfalls": {
   "intro": "The station rewards belief plus rigour. Candidates fail by dismissing her, by blaming everything on COVID without tests, and by advising her to push through.",
   "items": [
    {
     "dom": "rto",
     "fail": "Implying it’s anxiety.",
     "why": "Her main fear is being disbelieved.",
     "fix": "Answer “is it in my head?” directly and early."
    },
    {
     "dom": "tasks",
     "fail": "No examination or tests.",
     "why": "NICE NG188 requires excluding other causes and checking for red flags.",
     "fix": "Sats, lying and standing BP, sit-to-stand, bloods, ECG, chest X-ray."
    },
    {
     "dom": "tasks",
     "fail": "Advising graded exercise or pushing through.",
     "why": "Post-exertional crashing worsens with it (NICE NG206 principles).",
     "fix": "Pacing within her limits."
    },
    {
     "dom": "tasks",
     "fail": "Missing PE or cardiac red flags.",
     "why": "Breathlessness and palpitations have serious causes (NICE NG158).",
     "fix": "Ask about chest pain, haemoptysis, syncope, sudden change."
    },
    {
     "dom": "tasks",
     "fail": "No work support.",
     "why": "Work is her main functional goal.",
     "fix": "Fit note with adjustments; Equality Act."
    },
    {
     "dom": "gs",
     "fail": "No follow-up.",
     "why": "Results and a fluctuating course need review.",
     "fix": "Book a results review and name the red flags."
    }
   ]
  }
 },
 "restless-legs-pregnancy": {
  "stem": {
   "name": "Aisha Rahman",
   "age": "31-year-old woman",
   "pmh": [
    "Currently 30 weeks pregnant",
    "No other past medical history given in the case: check the record"
   ],
   "meds": [
    "Not specified in the case: check the repeat record and any antenatal supplements"
   ],
   "allergy": "None recorded",
   "recent": "Most evenings for some weeks: crawly, restless feeling in the legs with an urge to move them, worst sitting or lying down to sleep, eased by walking about. Sleep badly disrupted; exhausted.",
   "reason": "“My legs feel crawly every evening and it’s ruining my sleep. What can I do, and is it safe for the baby?”"
  },
  "knowledge": {
   "guideline": "[1] IRLSSG consensus guideline on RLS in pregnancy and lactation, Picchietti et al., Sleep Medicine Reviews 2015 (international) · [2] IRLSSG diagnostic criteria for RLS (international) · [3] British Society for Haematology UK guideline on the management of iron deficiency in pregnancy (2020) · [4] BNF: oral iron preparations and folic acid (doses per BNF) · [5] NICE NG201 Antenatal care (2021) · [6] AASM clinical practice guideline on RLS treatment 2024 (international)",
   "summary": "An urge to move the legs, worse at rest and in the evening and relieved by movement, in the third trimester is restless legs syndrome until shown otherwise. Up to about one in five pregnant women are affected, and pregnancy-related RLS usually settles after delivery [1]. The GP’s job is to confirm the four core features, exclude mimics (cramps, positional discomfort, oedema and, above all, a unilateral swollen painful leg suggesting DVT), check ferritin, FBC and folate, correct iron and folate, review drugs that worsen it, and use non-drug measures. The usual RLS medicines are avoided in pregnancy; refractory cases need obstetric advice.",
   "points": [
    {
     "h": "Diagnosis",
     "t": "Clinical, using the four essential criteria [2]: an urge to move the legs, usually with unpleasant sensations; begins or worsens at rest; relieved at least partly by movement; worse in the evening or at night. The symptoms must not be solely explained by another condition such as cramps, positional discomfort, oedema or venous problems. No sleep study is needed for typical symptoms."
    },
    {
     "h": "Mimics in pregnancy",
     "t": "Leg cramps (a painful muscle contraction, not an urge), dependent oedema and positional discomfort. A unilateral swollen, painful or red calf needs same-day assessment for DVT: pregnancy is a prothrombotic state. Weakness, numbness in a distribution, or back pain with bladder change is not RLS and needs neurological assessment."
    },
    {
     "h": "Iron and folate",
     "t": "Low iron stores are the key treatable contributor. Check ferritin, FBC and folate. The IRLSSG pregnancy guideline [1] (international) advises oral iron when ferritin is below 75 µg/L in a woman with RLS, a higher threshold than for anaemia. BSH 2020 [3] defines iron deficiency in pregnancy as ferritin below 30 µg/L and gives the anaemia thresholds (Hb below 105 g/L in the second and third trimesters). Oral iron and folic acid doses per BNF [4]; recheck the response."
    },
    {
     "h": "Drug and lifestyle triggers",
     "t": "Sedating antihistamines (often used for sleep or nausea in pregnancy), dopamine-antagonist antiemetics, and some antidepressants can worsen RLS; caffeine, alcohol and nicotine too. Review anything she is taking, including over-the-counter sleep aids, before adding anything."
    },
    {
     "h": "Non-drug care",
     "t": "Moderate daytime activity, stretching or a short walk before bed, leg massage, warm or cool compresses, a regular sleep routine, and mentally engaging activity during enforced rest (a puzzle or reading) [1]. Treat the sleep deprivation seriously: ask about mood, which matters in the perinatal period [5]."
    },
    {
     "h": "Medicines and referral",
     "t": "Dopamine agonists and alpha-2-delta ligands used for RLS outside pregnancy [6] are avoided in pregnancy. If symptoms stay severe despite iron, folate and non-drug measures, seek obstetric advice; the IRLSSG [1] describes specialist options for refractory cases. Pregnancy-related RLS usually resolves within weeks of delivery; persistent symptoms after birth need reassessment."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Rahman, I’m Dr Shah. Please, tell me what’s been happening.",
    "dom": "rto",
    "why": "Open question; lets her give her story"
   },
   {
    "who": "pt",
    "text": "I’m 30 weeks pregnant and most evenings my legs feel really crawly and restless. I get this horrible urge to move them, and it’s worst when I’m sitting or lying down trying to sleep. Walking around helps for a bit. I’m exhausted. What can I do, and is it safe for the baby?"
   },
   {
    "who": "dr",
    "text": "That sounds miserable, especially on top of being pregnant. I can hear two things: you need some sleep, and you want to know the baby is all right. I’ll come to both. First, can I ask a bit more about the feeling itself?",
    "dom": "rto",
    "why": "Acknowledges exhaustion and names her worry early"
   },
   {
    "who": "pt",
    "text": "Yes, of course."
   },
   {
    "phase": "Focused history",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Is it more of an urge to move, or a painful cramp where the muscle goes hard?",
    "dom": "tasks",
    "why": "Separates RLS from nocturnal leg cramps"
   },
   {
    "who": "pt",
    "text": "An urge. It’s not painful exactly, just unbearable if I keep still."
   },
   {
    "who": "dr",
    "text": "Does it affect both legs? And have you noticed one leg swollen, red, hot or painful in the calf?",
    "dom": "tasks",
    "why": "Screens for DVT, a key mimic in pregnancy"
   },
   {
    "who": "pt",
    "text": "Both legs, and no, nothing like that. My ankles are a bit puffy by the evening, but both the same."
   },
   {
    "who": "dr",
    "text": "Any numbness, pins and needles in one area, weakness, back pain, or any change with your bladder or bowels?",
    "dom": "tasks",
    "why": "Neurological red flags and neuropathy mimics"
   },
   {
    "who": "pt",
    "text": "No, none of that."
   },
   {
    "who": "dr",
    "text": "When did it start, and did you ever have anything like it before pregnancy? Does anyone in your family have it?",
    "dom": "tasks",
    "why": "Onset, prior episodes, family history of RLS"
   },
   {
    "who": "pt",
    "text": "A few weeks now, and it’s getting worse. Never before this pregnancy. I don’t know about my family."
   },
   {
    "who": "dr",
    "text": "What are you taking at the moment, including pregnancy vitamins, anything for sickness, or anything from the pharmacy to help you sleep?",
    "dom": "tasks",
    "why": "Drug triggers: sedating antihistamines, antiemetics, antidepressants"
   },
   {
    "who": "pt",
    "text": "Nothing regular that I can think of. I did wonder about getting something from the chemist for sleep."
   },
   {
    "who": "dr",
    "text": "I’m glad you asked first, because some of the sleep remedies you can buy are antihistamines, and those can actually make restless legs worse. How about tea, coffee or cola, especially later in the day?",
    "dom": "tasks",
    "why": "Pre-empts an antihistamine purchase; caffeine"
   },
   {
    "who": "pt",
    "text": "A couple of coffees, and tea in the evening."
   },
   {
    "who": "dr",
    "text": "Have you been told your blood count or iron was low at any of your antenatal checks?",
    "dom": "tasks",
    "why": "Links to antenatal bloods and iron status"
   },
   {
    "who": "pt",
    "text": "I had bloods with the midwife, but I don’t remember anyone mentioning iron."
   },
   {
    "phase": "Impact and ICE",
    "clock": "5–7 min",
    "who": "dr",
    "text": "How is the lack of sleep affecting you during the day, and how is your mood? Some women find these weeks very hard.",
    "dom": "rto",
    "why": "Impact and perinatal mood check"
   },
   {
    "who": "pt",
    "text": "I’m tired and a bit teary, but I’m not depressed. I’m just worn out. I’m worried it means something is wrong with the baby."
   },
   {
    "who": "dr",
    "text": "What had you thought might be causing it?",
    "dom": "rto",
    "why": "Explores her idea"
   },
   {
    "who": "pt",
    "text": "I thought maybe it was the baby pressing on something, or that I’m lacking something."
   },
   {
    "who": "dr",
    "text": "Thank you. I’d like to examine your legs and check your blood pressure, if that’s all right.",
    "dom": "tasks",
    "why": "Examination: calves, oedema, pulses, neurology; BP in pregnancy"
   },
   {
    "who": "pt",
    "text": "(After examination) Is everything normal?"
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "Yes: both legs look the same, there are no signs of a clot, and your nerves are working normally. What you describe fits restless legs syndrome: an urge to move, worse at rest and in the evening, eased by moving. It affects up to about one in five women late in pregnancy. It isn’t caused by anything wrong with the baby, and it usually settles within weeks of the birth.",
    "dom": "tasks",
    "why": "Names RLS using the four criteria; answers the safety concern honestly"
   },
   {
    "who": "pt",
    "text": "That’s a relief. So I wasn’t imagining it."
   },
   {
    "who": "dr",
    "text": "Not at all. And your idea about lacking something is a good one: low iron is one of the commonest reasons it happens or gets worse in pregnancy. I’ll check your iron stores, blood count and folate today.",
    "dom": "rto",
    "why": "Uses her own idea to explain the plan"
   },
   {
    "phase": "Plan",
    "clock": "9–11 min",
    "who": "dr",
    "text": "If your iron stores are low, or even at the lower end of normal, I’ll start an iron tablet, which is safe in pregnancy and often helps the legs. We’ll recheck the level later.",
    "dom": "tasks",
    "why": "Ferritin-guided iron replacement"
   },
   {
    "who": "dr",
    "text": "Meanwhile, things that help: a gentle walk or stretch in the early evening, massaging your legs, a warm bath or a cool pack, keeping a regular bedtime, and cutting coffee and tea after lunchtime. Please avoid sleep remedies from the chemist. Distracting yourself with something absorbing when you have to sit still also helps.",
    "dom": "tasks",
    "why": "Non-drug measures; avoids antihistamine triggers"
   },
   {
    "who": "pt",
    "text": "Can’t I have a tablet for the legs themselves?"
   },
   {
    "who": "dr",
    "text": "The medicines normally used for restless legs are avoided in pregnancy, because the priority is the baby’s safety. If it stays severe after we’ve sorted your iron, I’ll ask the obstetric team for advice rather than leave you struggling. How does that sound?",
    "dom": "rto",
    "why": "Explains the medication position without dismissing her"
   },
   {
    "who": "pt",
    "text": "That makes sense. As long as there’s a next step."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If one leg becomes swollen, red or painful, or you get chest pain or breathlessness, that needs same-day assessment. If you feel your mood dropping, tell me or your midwife. I’ll phone you with the blood results and see you again in about four weeks. What will you try tonight?",
    "dom": "gs",
    "why": "DVT and PE safety-net; mood; follow-up; teach-back"
   },
   {
    "who": "pt",
    "text": "A walk after tea, no coffee in the afternoon, no sleep tablets from the chemist, and wait for the iron result."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll let your midwife know too.",
    "dom": "gs",
    "why": "Continuity with antenatal care"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; lets her describe the sensation and the sleep impact before narrowing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Exhaustion, daytime function, perinatal mood and support.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up her plan to buy a sleep aid and asks about antenatal blood results.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (baby pressing or lacking something), concern (harm to the baby), expectation (relief she can safely use).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Examines both legs, calves, oedema, neurology and BP; ferritin, FBC and folate.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "RLS versus leg cramps, oedema, positional discomfort, neuropathy and DVT.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Unilateral swollen painful leg (DVT), neurological signs, and perinatal mood.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Restless legs syndrome named from the four criteria, linked to pregnancy and iron.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Ferritin-guided iron, non-drug measures, caffeine and antihistamine avoidance; explains why usual RLS drugs are avoided.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Folate and anaemia addressed; midwife informed; obstetric advice if refractory.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day advice for DVT or PE symptoms; results by phone; review in about four weeks; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Aisha Rahman",
    "age": "31 years · female",
    "pmh": [
     "Pregnant, 30 weeks"
    ],
    "meds": [
     "Check record; antenatal supplements"
    ],
    "allergy": "None recorded",
    "recent": "Several weeks of evening leg restlessness with an urge to move, eased by walking; poor sleep.",
    "reason": "“Every evening my legs feel crawly. Is it safe for the baby?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Let her describe it; acknowledge exhaustion and the baby worry."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Urge versus cramp; both legs; DVT features; neuro red flags; onset; medicines and sleep aids; caffeine; antenatal bloods."
    },
    {
     "t": "5–7",
     "h": "Impact, ICE, examination",
     "d": "Sleep, mood, her idea and fear. Examine legs, calves, neurology, BP."
    },
    {
     "t": "7–11",
     "h": "Explain and plan",
     "d": "Name RLS; reassure about the baby; ferritin, FBC, folate; iron if low; non-drug measures; no OTC antihistamines; usual RLS drugs avoided; obstetric advice if severe."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "DVT and PE safety-net; mood; results; review; inform midwife; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Labels it cramps or ‘just pregnancy’; misses the DVT screen; does not check ferritin; prescribes a standard RLS drug or suggests an antihistamine for sleep.",
    "pass": "Recognises RLS from the four features, checks ferritin and FBC, gives non-drug advice, explains why usual RLS drugs are avoided, and reassures about resolution after birth.",
    "exc": "All of the above, plus: explicitly excludes DVT, treats low-normal ferritin, spots the chemist sleep aid as a trigger, checks perinatal mood, involves the midwife, and plans obstetric advice for refractory symptoms."
   },
   "avoid": [
    {
     "dont": "“It’s just cramp, it’s normal in pregnancy.”",
     "instead": "“This is restless legs syndrome: an urge to move rather than a cramp, and there are things we can do.”",
     "why": "Mislabelling leads to the wrong advice and misses the iron link."
    },
    {
     "dont": "“Try an antihistamine from the chemist to help you sleep.”",
     "instead": "“Please avoid the sleep remedies you can buy: some make restless legs worse.”",
     "why": "Sedating antihistamines are a recognised RLS trigger."
    },
    {
     "dont": "“Your iron is in the normal range, so that’s not it.”",
     "instead": "“For restless legs we aim for higher iron stores than the usual lab range.”",
     "why": "The IRLSSG (international) advises iron at ferritin below 75 µg/L in pregnancy-related RLS."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Sleep and daily life",
     "t": "Severe sleep loss affects work, driving alertness and coping with other children. Ask about practical support at home in the last trimester."
    },
    {
     "h": "Maternity leave and work",
     "t": "If she works, fatigue may need workplace adjustments; pregnant employees are entitled to a workplace risk assessment."
    }
   ],
   "legal": [
    {
     "h": "Prescribing in pregnancy",
     "t": "Use medicines only where benefit clearly outweighs risk; check the BNF pregnancy section for any product and record the discussion. Iron and folic acid are standard in pregnancy."
    },
    {
     "h": "Free prescriptions",
     "t": "Pregnant women and those who have had a baby in the last 12 months are entitled to free NHS prescriptions in England with a valid maternity exemption certificate."
    }
   ],
   "professional": [
    {
     "h": "Shared antenatal care",
     "t": "Communicate results and the plan to her midwife; an antenatal anaemia or refractory RLS needs coordination with the obstetric team."
    },
    {
     "h": "Diagnostic overshadowing",
     "t": "Not every leg symptom in pregnancy is benign: a clear DVT screen protects against anchoring on RLS."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Midwife and health visitor; national RLS patient charities for self-help information; perinatal mental health services if mood drops."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Unilateral swollen, red, hot or painful calf: suspected DVT, same-day assessment",
     "Chest pain or breathlessness: suspected PE, emergency",
     "Focal weakness, sensory level, back pain with bladder or bowel change: not RLS, urgent neurological assessment",
     "Low mood, hopelessness or thoughts of self-harm: perinatal mental health assessment"
    ],
    "psychosocial": [
     "Exhaustion in the third trimester",
     "Worry about harm to the baby",
     "Support at home and work"
    ],
    "ice": [
     "Idea: the baby pressing on something, or a deficiency",
     "Concern: that it harms the baby",
     "Expectation: something safe that helps her sleep"
    ]
   },
   "diagnosis": "“This is restless legs syndrome: common late in pregnancy, not harmful to the baby, and it usually settles after the birth.”",
   "diagnosisLay": "“Think of it as the nerves’ ‘fidget signal’ getting turned up in the evening. Low iron turns the volume up further, which is why topping up iron often helps.”",
   "management": {
    "reflectIce": "“You wondered if you were lacking something, and you may be right: low iron is a common reason, so let’s check it.”",
    "psychosocial": "Treat the sleep loss as real; check mood; involve the midwife and practical support at home.",
    "sharedPlan": [
     "Ferritin, FBC and folate today",
     "Oral iron if ferritin low or low-normal; folic acid per BNF; recheck",
     "Evening walk or stretch, massage, warmth or cool, sleep routine, less caffeine",
     "Avoid OTC sedating antihistamines and other triggers",
     "Obstetric advice if severe despite iron and non-drug measures"
    ],
    "safetyNet": [
     "Unilateral leg swelling or pain, chest pain or breathlessness: same-day assessment",
     "Low mood or worsening symptoms: contact the practice or midwife; review in about four weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Restless legs protocol",
    "s": "URGE criteria · iron · pregnancy",
    "href": "management/restless-legs.html"
   },
   {
    "ic": "💠",
    "t": "Iron deficiency anaemia",
    "s": "Protocol · ferritin and oral iron",
    "href": "management/iron-deficiency-anaemia.html"
   },
   {
    "ic": "💠",
    "t": "Leg cramps",
    "s": "Protocol · the main mimic",
    "href": "management/leg-cramps.html"
   },
   {
    "ic": "📋",
    "t": "Insomnia",
    "s": "Case walkthrough",
    "href": "../cases/insomnia.html"
   }
  ],
  "pitfalls": {
   "intro": "This station rewards a clear clinical diagnosis, the iron link, and a safe explanation of why the usual medicines are off the table. Most lost marks come from calling it cramp, missing the DVT screen, or reaching for a tablet.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Calling it leg cramps or ‘normal pregnancy aches’.",
     "why": "RLS is an urge to move, not a painful contraction; the label changes management.",
     "fix": "Ask the four URGE questions explicitly."
    },
    {
     "dom": "tasks",
     "fail": "No DVT screen.",
     "why": "Pregnancy is prothrombotic and a swollen calf can be misread as ‘restless’.",
     "fix": "Ask about and examine for unilateral swelling, pain and redness."
    },
    {
     "dom": "tasks",
     "fail": "Not checking ferritin, or accepting a low-normal result.",
     "why": "Iron deficiency is the key treatable driver; IRLSSG (international) treats below 75 µg/L.",
     "fix": "Check ferritin, FBC and folate and replace iron."
    },
    {
     "dom": "tasks",
     "fail": "Suggesting an antihistamine sleep aid or starting a dopamine agonist or gabapentinoid.",
     "why": "Antihistamines worsen RLS; the usual RLS drugs are avoided in pregnancy.",
     "fix": "Non-drug measures first; obstetric advice if refractory."
    },
    {
     "dom": "rto",
     "fail": "Brushing past ‘is it safe for the baby?’.",
     "why": "It is her main concern; leaving it unanswered undermines trust.",
     "fix": "Answer it directly and early."
    },
    {
     "dom": "gs",
     "fail": "No follow-up or safety-net.",
     "why": "Iron response and symptoms need review, and clot symptoms need a clear plan.",
     "fix": "Give DVT and PE advice, phone results, and review in about four weeks."
    }
   ]
  }
 },
 "staff-as-patient": {
  "stem": {
   "name": "Rachel",
   "age": "38-year-old woman",
   "pmh": [
    "No past medical history given in the case: check whether she is registered here"
   ],
   "meds": [
    "Not specified in the case"
   ],
   "allergy": "Not known: check",
   "recent": "Member of the practice nursing team. No booked appointment.",
   "reason": "Approaches the GP between patients: feels run down, not sleeping, thinks she has a chest infection; asks for antibiotics and ‘a few sleeping tablets’ without an appointment or a record."
  },
  "knowledge": {
   "guideline": "[1] GMC Good medical practice (2024) · [2] GMC Good practice in proposing, prescribing, providing and managing medicines and devices (2021) · [3] GMC Confidentiality: good practice in handling patient information (2017) · [4] NICE NG120 Cough (acute): antimicrobial prescribing (2019) · [5] NICE NG250 Pneumonia: diagnosis and management (2025) · [6] NICE TA77 Zaleplon, zolpidem and zopiclone for the short-term management of insomnia (2004) and NICE NG215 Medicines associated with dependence or withdrawal symptoms (2022) · [7] Misuse of Drugs Regulations 2001: zopiclone and zolpidem, Schedule 4 Part 1",
   "summary": "A colleague asking for an unrecorded prescription is asking the GP to prescribe without an assessment and without a record, which GMC guidance does not allow for anyone [1, 2]. Working together is not in itself a bar to treating her, but the care must be a proper consultation, recorded like any other, with the same stewardship. Confidentiality is protected by access-controlled records, not by missing ones [3]. Antibiotics depend on assessment [4, 5]; hypnotics are short-term only and z-drugs are controlled drugs [6, 7]. The run-down, not-sleeping story deserves real attention, and she should be encouraged to have care from a GP outside her workplace.",
   "points": [
    {
     "h": "The GMC position",
     "t": "Good medical practice [1]: wherever possible avoid providing medical care to yourself or anyone with whom you have a close personal relationship, and keep clear, accurate, contemporaneous records. The prescribing guidance [2] requires an adequate assessment and adequate knowledge of the patient’s health before prescribing, and a record of the prescription and the reasons. A colleague is not automatically a close personal relationship; what matters is objectivity, a proper assessment and a record."
    },
    {
     "h": "Controlled drugs",
     "t": "Zopiclone and zolpidem are Schedule 4 Part 1 controlled drugs [7]. GMC [2]: controlled drugs must not be prescribed for yourself or someone close to you except in a genuine emergency when no one else can prescribe. For any patient, NICE TA77 [6] limits hypnotics to short-term use for severe insomnia; NG215 asks prescribers to discuss dependence and withdrawal before starting."
    },
    {
     "h": "The chest",
     "t": "Assess properly: duration, fever, breathlessness, pleuritic pain, comorbidity, and observations including respiratory rate, oxygen saturation, temperature and chest examination. NICE NG120 [4]: most acute cough is self-limiting and does not need an antibiotic; a back-up prescription is an option for those at higher risk of complications. Suspected pneumonia is assessed with a severity score and treated per NICE NG250 [5]."
    },
    {
     "h": "Confidentiality",
     "t": "She is owed the same confidentiality as any patient [3]. Colleagues should access her record only when involved in her care; practices can restrict access to staff records and audit access. Confidentiality means a protected record, not the absence of one."
    },
    {
     "h": "The person behind the request",
     "t": "Run down, not sleeping and wanting it hidden can signal stress, burnout, low mood, or reliance on hypnotics. Ask supportively about sleep, mood, alcohol, stress and work. Nurses have their own duty under the NMC Code (2018) to keep themselves fit to practise; occupational health can help if work is affected, with her consent."
    },
    {
     "h": "Where she gets care",
     "t": "Staff may be registered at their own practice, but a GP outside the workplace usually gives better privacy and objectivity, especially for mental health or ongoing problems. The practice should have a staff health policy; follow it."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "pt",
    "text": "Sorry to grab you, I know you’re busy. I’m run down and not sleeping, and I think I’ve got a chest infection. Could you just quickly write me some antibiotics, and maybe a few sleeping tablets, without all the formalities? I’d rather not make an appointment or have it all written down. I’d like to keep it private from the others here."
   },
   {
    "who": "dr",
    "text": "Rachel, I’m sorry you’re feeling rough. Come in and close the door so we can talk privately for a few minutes.",
    "dom": "rto",
    "why": "Warm, private; does not rebuff her in the corridor"
   },
   {
    "who": "pt",
    "text": "Thanks. I just don’t want a fuss."
   },
   {
    "phase": "Setting the boundary kindly",
    "clock": "1–3 min",
    "who": "dr",
    "text": "I do want to help. The one thing I can’t do is write a prescription without looking at you properly or without a record. That’s the same for anyone I prescribe for, and it’s there to keep you safe. It isn’t about not trusting you.",
    "dom": "tasks",
    "why": "States the GMC standard clearly and without blame"
   },
   {
    "who": "pt",
    "text": "It’s just a few tablets. I know what a chest infection feels like."
   },
   {
    "who": "dr",
    "text": "I’m sure you do. But if I got it wrong without examining you, or you had a reaction and there was nothing on your record, that could really harm you. And whoever sees you next needs to know what you’ve had.",
    "dom": "tasks",
    "why": "Explains why: safety, continuity, governance"
   },
   {
    "who": "dr",
    "text": "Can I ask what worries you about it being written down?",
    "dom": "rto",
    "why": "Explores the concern behind the request"
   },
   {
    "who": "pt",
    "text": "Everyone here can see everyone’s notes. I don’t want the others knowing my business, especially about sleep."
   },
   {
    "who": "dr",
    "text": "That’s a fair worry. Your record is confidential like any patient’s. Staff should only open it if they’re involved in your care, access is audited, and we can restrict access to staff records. Confidential means protected, not missing.",
    "dom": "tasks",
    "why": "Confidentiality via access control, not omission"
   },
   {
    "phase": "A proper assessment",
    "clock": "3–7 min",
    "who": "dr",
    "text": "I have a few minutes now. Would you let me do a proper, short consultation, recorded like anyone else’s? Or, if you’d prefer, you could see a GP outside the practice.",
    "dom": "tasks",
    "why": "Offers a proper alternative now"
   },
   {
    "who": "pt",
    "text": "OK, if it’s quick. Go on then."
   },
   {
    "who": "dr",
    "text": "Tell me about the chest: how long, any fever, cough with phlegm, breathlessness, or pain when you breathe in?",
    "dom": "tasks",
    "why": "Focused respiratory history"
   },
   {
    "who": "pt",
    "text": "A week or so. Coughing, a bit of phlegm. No pain, and I’m not breathless."
   },
   {
    "who": "dr",
    "text": "Any asthma or other conditions, and do you take any regular medicines or have any allergies?",
    "dom": "tasks",
    "why": "Comorbidity, medicines, allergy: what an informal script would skip"
   },
   {
    "who": "pt",
    "text": "Nothing I need to mention."
   },
   {
    "who": "dr",
    "text": "I’ll check your temperature, pulse, breathing rate, oxygen level and listen to your chest.",
    "dom": "tasks",
    "why": "Observations and examination guide antibiotic decision"
   },
   {
    "who": "pt",
    "text": "(After examination) Well?"
   },
   {
    "who": "dr",
    "text": "Your observations are fine and your chest sounds clear. This looks like a viral chest infection, which usually settles by itself, though a cough can take three to four weeks to go completely. An antibiotic wouldn’t speed that up. If you get worse, breathless or have chest pain, I’d want to see you again the same day.",
    "dom": "tasks",
    "why": "Stewardship per NG120; safety-net for pneumonia"
   },
   {
    "who": "pt",
    "text": "Fair enough. I suppose I’d say the same to a patient."
   },
   {
    "phase": "The sleep and the person",
    "clock": "7–10 min",
    "who": "dr",
    "text": "Now the sleep. How long has it been bad, and what’s been going on for you?",
    "dom": "rto",
    "why": "Opens the psychosocial agenda"
   },
   {
    "who": "pt",
    "text": "A few weeks. Things have been a lot lately, and I’m wound up when I get to bed."
   },
   {
    "who": "dr",
    "text": "How has your mood been? Any times you’ve felt hopeless, or thoughts of harming yourself? And how much are you drinking at the moment?",
    "dom": "tasks",
    "why": "Mood, risk and alcohol: the hidden agenda"
   },
   {
    "who": "pt",
    "text": "Low-ish, but not like that. I’m not drinking more. I’m just exhausted."
   },
   {
    "who": "dr",
    "text": "Have you taken anything to help you sleep, from here or anywhere else?",
    "dom": "tasks",
    "why": "Screens for self-sourcing and dependence"
   },
   {
    "who": "pt",
    "text": "No. That’s why I asked you."
   },
   {
    "who": "dr",
    "text": "Thank you for being straight with me. Sleeping tablets can help for a few nights at most, and they’re controlled drugs with a real risk of dependence. I don’t think they’re the answer here. What would help more is looking at what’s driving the stress, plus some sleep strategies that work better long-term.",
    "dom": "tasks",
    "why": "Hypnotic caution: TA77, NG215, controlled-drug status"
   },
   {
    "who": "pt",
    "text": "I suppose I was hoping for a quick fix."
   },
   {
    "phase": "Plan and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "Here’s what I suggest. I’ll record today’s consultation properly, and I’ll ask for your record to have restricted access. I’d really encourage you to register with a GP outside the practice for anything ongoing, especially about sleep or mood. And would it help to talk to occupational health or your manager about workload? Only if you want that.",
    "dom": "gs",
    "why": "Records; access control; own GP; work support with consent"
   },
   {
    "who": "pt",
    "text": "Maybe. I’ll think about registering elsewhere."
   },
   {
    "who": "dr",
    "text": "If your chest gets worse, or your mood drops or you have thoughts of harming yourself, contact a GP the same day. Shall we book a proper review in two weeks, here or with your new GP, to see how the sleep is?",
    "dom": "gs",
    "why": "Safety-net and follow-up"
   },
   {
    "who": "pt",
    "text": "Yes. Thanks for not making it awkward."
   },
   {
    "who": "dr",
    "text": "Not at all. Looking after you properly is the point.",
    "dom": "rto",
    "why": "Preserves the working relationship"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Moves her from the corridor to a private room; lets her say what she wants.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Workload, stress, relationships at work, fear of colleagues seeing her notes.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up ‘not sleeping’, ‘run down’ and wanting no record as cues to a hidden agenda.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a quick script is easiest), concern (colleagues seeing her record), expectation (antibiotics and hypnotics, unrecorded).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Focused chest history; comorbidity, medicines, allergy; observations and chest examination.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Viral LRTI versus pneumonia; insomnia due to stress versus depression, alcohol or other causes.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Pneumonia red flags; mood and self-harm; self-sourcing or dependence on hypnotics.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Viral chest infection not needing antibiotics; stress-related insomnia.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Proper recorded consultation; no antibiotic per NG120; no hypnotic, with reasons; access-controlled record.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Encourages a GP outside the workplace; occupational health or workload support with consent.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day contact if chest or mood worsens; review booked in two weeks; relationship preserved.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Professional & ethical dilemmas",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Rachel",
    "age": "38 years · female",
    "pmh": [
     "Not stated in the case"
    ],
    "meds": [
     "Not known"
    ],
    "allergy": "Not known",
    "recent": "Practice nurse at this surgery. No appointment booked.",
    "reason": "Corridor request: antibiotics and sleeping tablets, ‘off the record’."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Take her somewhere private; hear the request."
    },
    {
     "t": "1–3",
     "h": "Boundary",
     "d": "No prescribing without assessment or record; explain why; explore the privacy fear; explain access-controlled records."
    },
    {
     "t": "3–7",
     "h": "Proper consultation",
     "d": "Chest history, comorbidity, allergies, observations, examination; antibiotic decision per NG120."
    },
    {
     "t": "7–10",
     "h": "Sleep and wellbeing",
     "d": "Duration, stress, mood, self-harm, alcohol, self-sourcing; why not hypnotics."
    },
    {
     "t": "10–12",
     "h": "Plan and close",
     "d": "Record; restricted access; own GP outside the practice; occupational health with consent; safety-net; review."
    }
   ],
   "wordPics": {
    "fail": "Writes the prescriptions to be helpful, or refuses curtly and walks off; no assessment, no record, no interest in why she is not sleeping.",
    "pass": "Declines informal prescribing kindly, explains the GMC standard, offers a proper recorded consultation, reassures on confidentiality, and suggests a GP elsewhere.",
    "exc": "All of the above, plus: does the assessment there and then, applies antibiotic stewardship, names z-drugs as controlled drugs with dependence risk, explores mood, alcohol and burnout without judgement, restricts record access, and keeps the working relationship warm."
   },
   "avoid": [
    {
     "dont": "“Fine, just this once, but don’t tell anyone.”",
     "instead": "“I can’t prescribe without seeing you properly and recording it, but I can see you properly right now.”",
     "why": "Unrecorded prescribing without assessment breaches GMC prescribing guidance."
    },
    {
     "dont": "“You’re a nurse, you should know better than to ask.”",
     "instead": "“I understand why it feels easier. Let me explain why I want to do it properly.”",
     "why": "Shaming her closes down the real problem and damages the working relationship."
    },
    {
     "dont": "“We’ll just not write it on the system.”",
     "instead": "“Your record is confidential and we can restrict who can open it.”",
     "why": "Confidentiality is achieved by protecting records, not omitting them."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Workload and burnout",
     "t": "Healthcare staff often present late and informally. Heavy workload, shift patterns and stigma about mental health all make ‘corridor’ requests more likely."
    },
    {
     "h": "Sick leave",
     "t": "Employees can self-certify for the first 7 calendar days of sickness; a fit note is needed after that. Fit notes can suggest workplace adjustments."
    }
   ],
   "legal": [
    {
     "h": "Controlled drugs",
     "t": "Zopiclone and zolpidem are Schedule 4 Part 1 controlled drugs under the Misuse of Drugs Regulations 2001."
    },
    {
     "h": "Records and data protection",
     "t": "GMC Good medical practice (2024) requires clear, accurate, contemporaneous records. Accessing a colleague’s record without a care reason breaches confidentiality and data protection law."
    }
   ],
   "professional": [
    {
     "h": "GMC prescribing guidance (2021)",
     "t": "Prescribe only with adequate knowledge of the patient’s health; avoid prescribing for yourself or anyone close to you wherever possible; record what was prescribed and why."
    },
    {
     "h": "Dual relationship",
     "t": "The GP may be her colleague or employer. Keep clinical and employment roles separate; any concern about fitness to practise follows the practice policy and her own NMC Code (2018) duties."
    }
   ],
   "community": [
    {
     "h": "Support for staff",
     "t": "Occupational health and any employee assistance programme; NHS Talking Therapies by self-referral; her own GP outside the practice."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Breathlessness, pleuritic pain, high fever, abnormal observations: assess for pneumonia per NG250",
     "Low mood with hopelessness or thoughts of self-harm",
     "Using hypnotics, alcohol or other substances to cope, or sourcing medicines informally",
     "Impairment affecting safe practice at work"
    ],
    "psychosocial": [
     "Work pressure and exhaustion",
     "Fear of colleagues seeing her record",
     "Embarrassment at being a patient where she works"
    ],
    "ice": [
     "Idea: a quick unrecorded script is easiest",
     "Concern: colleagues knowing her business, especially about sleep",
     "Expectation: antibiotics and sleeping tablets without a record"
    ]
   },
   "diagnosis": "“Your chest sounds like a viral infection that will settle without antibiotics, and the sleep problem sounds driven by stress rather than something a tablet will fix.”",
   "diagnosisLay": "“Sleeping tablets are like borrowing sleep on a credit card: they help for a night or two, but the bill comes with interest. Sorting out what’s keeping you awake pays it off.”",
   "management": {
    "reflectIce": "“Your worry is people here seeing your notes, so let’s protect your record rather than skip it.”",
    "psychosocial": "Treat her as a person under strain, not a rule-breaker; offer support at work only with her consent.",
    "sharedPlan": [
     "Proper, recorded consultation now",
     "No antibiotic: viral LRTI, per NG120; safety-net for pneumonia",
     "No hypnotic: short-term only and controlled drug; sleep strategies",
     "Restricted access to her record",
     "Register with a GP outside the practice; occupational health or Talking Therapies if wanted"
    ],
    "safetyNet": [
     "Worsening chest, breathlessness or chest pain: same-day review",
     "Low mood or self-harm thoughts: same-day contact; review in two weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Chest infections",
    "s": "Protocol · NG120, NG250 stewardship",
    "href": "management/chest-infections.html"
   },
   {
    "ic": "💠",
    "t": "Benzodiazepines and Z-drugs",
    "s": "Protocol · dependence and withdrawal",
    "href": "management/benzodiazepines-z-drugs.html"
   },
   {
    "ic": "💠",
    "t": "Insomnia",
    "s": "Protocol · sleep strategies first",
    "href": "management/insomnia.html"
   },
   {
    "ic": "📝",
    "t": "Fit notes",
    "s": "Self-certification and adjustments",
    "href": "fit-note.html"
   }
  ],
  "pitfalls": {
   "intro": "This is a professionalism station dressed as a favour. Marks go to holding the boundary warmly, turning the request into proper care, and finding the stressed person behind it.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Writing the prescriptions to be helpful.",
     "why": "Prescribing without assessment or record breaches GMC guidance and risks harm.",
     "fix": "Offer a proper, recorded consultation instead."
    },
    {
     "dom": "tasks",
     "fail": "Giving antibiotics because she is a nurse and ‘knows’.",
     "why": "Stewardship applies to everyone; NG120 advises against antibiotics for most acute cough.",
     "fix": "Examine, check observations, and decide on the findings."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing a z-drug without exploring why she cannot sleep.",
     "why": "Z-drugs are controlled drugs with dependence risk; the cause is untreated.",
     "fix": "Explore stress, mood and alcohol; offer non-drug strategies."
    },
    {
     "dom": "rto",
     "fail": "A curt refusal in the corridor.",
     "why": "She feels judged and will seek medicines elsewhere; the working relationship suffers.",
     "fix": "Take her somewhere private and explain the reasons kindly."
    },
    {
     "dom": "rto",
     "fail": "Dismissing her worry about colleagues seeing her notes.",
     "why": "It is the real barrier to her getting care.",
     "fix": "Explain access controls and offer restriction; suggest a GP elsewhere."
    },
    {
     "dom": "gs",
     "fail": "No record and no follow-up.",
     "why": "An unrecorded encounter is unsafe for her and for you.",
     "fix": "Record the consultation, safety-net and book a review."
    }
   ]
  }
 },
 "steroid-fracture-osteoporosis": {
  "stem": {
   "name": "Pauline Hart",
   "age": "68-year-old woman",
   "pmh": [
    "Polymyalgia rheumatica, on oral prednisolone for about 2 years",
    "Low-trauma vertebral fracture on recent X-ray"
   ],
   "meds": [
    "Prednisolone (current dose not stated in the case)"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "Spinal X-ray after a minor stumble shows a vertebral fracture. No bone protection recorded.",
   "reason": "Wants to know if her steroid tablets caused the spinal fracture, and whether she should have been protected."
  },
  "knowledge": {
   "guideline": "[1] NOGG clinical guideline for the prevention and treatment of osteoporosis (2021, updated 2024) · [2] NICE NG12 (updated April 2026), myeloma recommendation 1.10.4 · [3] NICE NG259 (July 2026; replaced CG146) Osteoporosis: risk assessment · [4] NICE NG249 (2025) Falls: assessment and prevention · [5] NatPSA/2020/005/NHSPS (August 2020) steroid emergency card · [6] EULAR/ACR 2015 polymyalgia rheumatica recommendations (international) · [7] BNF, bisphosphonates · [8] GMC and NMC Openness and honesty when things go wrong: the professional duty of candour (2015, updated 2022)",
   "summary": "A vertebral fracture from a minor stumble in a 68-year-old on long-term prednisolone is a fragility fracture and glucocorticoid-induced osteoporosis until proved otherwise. Say honestly that the steroid very likely contributed. Start an oral bisphosphonate with calcium and vitamin D now without waiting for a DXA scan, check bloods including a myeloma screen, review the steroid dose, assess falls and treat the pain.",
   "points": [
    {
     "h": "A fragility fracture changes everything",
     "t": "A fracture from standing height or less is a fragility fracture. Vertebral fractures in particular predict further vertebral and hip fractures, so treat her as high risk [1]. Many vertebral fractures are painless and found by chance, so ask about height loss too."
    },
    {
     "h": "Steroids and bone",
     "t": "Glucocorticoids raise fracture risk quickly, within months, and at bone density levels that would otherwise look safe [1]. NOGG: in postmenopausal women and men 50 and over starting 7.5 mg or more of prednisolone daily for 3 months or more, start bone protection at the same time, without waiting for DXA [1]."
    },
    {
     "h": "Treat now",
     "t": "First-line: alendronate or risedronate (or IV zoledronate if oral is unsuitable), with calcium and vitamin D if intake is low [1][7]. Before starting, check calcium, vitamin D, renal function and dental health [7]. Take the tablet on waking with a full glass of plain water, stay upright, and wait before food or other medicines, as the BNF describes [7]. DXA can help baseline and monitoring but must not delay treatment [1]."
    },
    {
     "h": "Look for other causes",
     "t": "NICE NG12 (updated April 2026): at 60 and over with persistent bone pain, especially back pain, or unexplained fracture, offer FBC, calcium, ESR or plasma viscosity, serum protein electrophoresis and serum free light chains [2]. NOGG also recommends bloods for secondary causes after a vertebral fracture [1]."
    },
    {
     "h": "Review the steroid, never stop it suddenly",
     "t": "Aim for the lowest dose that controls her polymyalgia. Methotrexate is a steroid-sparing option for people at risk of steroid harm [6], usually agreed with rheumatology. Long-term steroids suppress the adrenal glands: never stop abruptly, and give a steroid emergency card [5]."
    },
    {
     "h": "Falls and fracture care",
     "t": "Assess falls using NICE NG249 triggers [4]. Treat the vertebral fracture pain with regular analgesia and keep her moving; physiotherapy helps. Weight-bearing exercise, not smoking, and alcohol within limits support bone health [1]."
    },
    {
     "h": "Honest disclosure",
     "t": "If bone protection should have been started with the steroid, say so plainly, apologise, explain what happens next and record the conversation [8]. Consider a significant event review in the practice."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, Mrs Hart, I’m Dr Shah. How can I help today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "I’ve cracked a bone in my back just from a little stumble. The X-ray showed a fracture in my spine. I’ve been on steroid tablets for my polymyalgia for a couple of years. My daughter said steroids weaken bones. Is that why this happened? Should I have been protected?"
   },
   {
    "who": "dr",
    "text": "Those are really important questions and I’ll answer them honestly. First, how are you in yourself, and how is the pain?",
    "dom": "rto",
    "why": "Acknowledges both questions; checks wellbeing first"
   },
   {
    "who": "pt",
    "text": "It’s sore, especially getting out of a chair. But I’m managing."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Can you tell me exactly how the fall happened? Did you fall from standing, or from a height?",
    "dom": "tasks",
    "why": "Confirms low-trauma mechanism"
   },
   {
    "who": "pt",
    "text": "Just a stumble at home, from standing. I didn’t even fall hard."
   },
   {
    "who": "dr",
    "text": "What dose of prednisolone are you on at the moment, and has it ever been stopped?",
    "dom": "tasks",
    "why": "Steroid dose and duration"
   },
   {
    "who": "pt",
    "text": "I’d have to check the box. It’s gone up and down, but I’ve been on it the whole two years."
   },
   {
    "who": "dr",
    "text": "That’s fine, I can check your record. Have you had any other falls, dizziness, or trouble with balance?",
    "dom": "tasks",
    "why": "Falls screen"
   },
   {
    "who": "pt",
    "text": "Not that I can think of. This was the first one."
   },
   {
    "who": "dr",
    "text": "Any numbness, weakness in your legs, or trouble passing water or opening your bowels since the fracture?",
    "dom": "tasks",
    "why": "Screens cord or cauda equina compromise"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Have you lost weight without trying, had night sweats, or pain that wakes you at night?",
    "dom": "tasks",
    "why": "Screens myeloma or metastasis"
   },
   {
    "who": "pt",
    "text": "No. Just the back pain when I move."
   },
   {
    "who": "dr",
    "text": "Has anyone ever talked to you about bone protection, or a bone density scan?",
    "dom": "tasks",
    "why": "Establishes what was offered"
   },
   {
    "who": "pt",
    "text": "No, never. That’s what’s bothering me."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What worries you most about all this?",
    "dom": "rto",
    "why": "Explores concerns"
   },
   {
    "who": "pt",
    "text": "That it’ll happen again. And that I should have been told. I don’t want to give up the steroids either; my shoulders were awful before."
   },
   {
    "who": "dr",
    "text": "Those are fair worries. What would you like to come out of today?",
    "dom": "rto",
    "why": "Explores expectations"
   },
   {
    "who": "pt",
    "text": "An honest answer, and to be put right."
   },
   {
    "phase": "Honest explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Your daughter is right. Long-term steroids weaken bones, and they are very likely a major reason a small stumble broke a bone in your spine. A fracture like this also tells us your bones are thin, which we call osteoporosis.",
    "dom": "tasks",
    "why": "Links fragility fracture to glucocorticoid-induced osteoporosis"
   },
   {
    "who": "pt",
    "text": "So I should have been on something?"
   },
   {
    "who": "dr",
    "text": "Yes. Guidance is that bone protection is usually started at the same time as long-term steroids, and I can’t see that it was offered to you. I’m sorry that didn’t happen. I’ll look into how it was missed, and my priority now is to put it right today.",
    "dom": "rto",
    "why": "Candour: clear apology and ownership"
   },
   {
    "who": "pt",
    "text": "Thank you for being straight with me."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’d like to start a bone-strengthening tablet called alendronate, once a week, with calcium and vitamin D. We don’t need to wait for a scan. Does that sound all right?",
    "dom": "tasks",
    "why": "Starts bisphosphonate without waiting for DXA"
   },
   {
    "who": "pt",
    "text": "Yes. Is there a trick to taking it?"
   },
   {
    "who": "dr",
    "text": "There is. Take it first thing on an empty stomach with a full glass of plain water, stay sitting or standing, and wait before breakfast or other tablets, as the leaflet says. Tell me about any heartburn or trouble swallowing. See your dentist for a check-up, and keep your teeth and gums healthy.",
    "dom": "tasks",
    "why": "Administration and safety counselling"
   },
   {
    "who": "pt",
    "text": "Okay. What about the steroids?"
   },
   {
    "who": "dr",
    "text": "Please don’t stop them suddenly; your body relies on them now. I’ll give you a steroid emergency card. I’d like to ask the rheumatology team whether we can lower the dose or add a steroid-sparing medicine, so your shoulders stay comfortable with less steroid.",
    "dom": "tasks",
    "why": "Steroid review; never stop abruptly; emergency card"
   },
   {
    "who": "pt",
    "text": "That would be good."
   },
   {
    "who": "dr",
    "text": "I’ll also do some blood tests: your calcium, vitamin D and kidneys before the tablet, and a screen for other causes of a spinal fracture. I’ll arrange a bone density scan to give us a baseline. And for the pain, regular painkillers, keep gently moving, and physiotherapy.",
    "dom": "tasks",
    "why": "Pre-treatment bloods, myeloma screen, DXA baseline, analgesia"
   },
   {
    "who": "pt",
    "text": "Should I stop going out, in case I fall?"
   },
   {
    "who": "dr",
    "text": "No, staying active protects your bones and balance. We’ll look at falls risks at home, and a physiotherapist can help with strength and balance.",
    "dom": "tasks",
    "why": "Falls prevention and activity"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Call 999 or go to A&E if you get new leg weakness or numbness, or problems with your bladder or bowels. Come back sooner if the pain gets much worse, you lose weight, or you feel unwell. I’ll see you in two weeks with the blood results.",
    "dom": "gs",
    "why": "Cord compromise, atypical features, planned review"
   },
   {
    "who": "pt",
    "text": "Right."
   },
   {
    "who": "dr",
    "text": "Could you tell me the plan in your own words?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Weekly bone tablet with water, upright, before breakfast. Calcium and vitamin D. Don’t stop the steroids, carry the card, bloods and a scan, and you’ll ask the specialists about lowering the steroids."
   },
   {
    "who": "dr",
    "text": "Exactly right. Thank you for asking me so directly. It helps us put things right.",
    "dom": "gs",
    "why": "Confirms understanding; closes supportively"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; lets her ask both questions and checks pain and wellbeing first.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Fear of further fractures; reliance on the steroid for her shoulders; family involvement through her daughter.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up “should I have been protected?” as a request for honesty; hears the wish to keep the steroid.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (the steroids caused it), concern (recurrence and a missed opportunity), expectation (an honest answer and a fix).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Calcium, vitamin D, renal function; myeloma screen per NICE NG12 (updated April 2026) 1.10.4; baseline DXA without delaying treatment; neurological screen.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Glucocorticoid-induced osteoporosis versus myeloma, metastasis and other secondary causes.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screens cord or cauda equina symptoms, weight loss, night pain and falls.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Fragility vertebral fracture from glucocorticoid-induced osteoporosis.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Oral bisphosphonate now with calcium and vitamin D (NOGG); administration and dental advice; analgesia and physiotherapy.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Steroid review with rheumatology, steroid-sparing option; never stop abruptly; steroid emergency card; falls assessment.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 for leg weakness or sphincter change; return for worse pain or weight loss; review with bloods in 2 weeks; candour recorded.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Long-term conditions & cancer",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Pauline Hart",
    "age": "68 years · female",
    "pmh": [
     "Polymyalgia rheumatica",
     "Vertebral fracture on X-ray"
    ],
    "meds": [
     "Prednisolone (about 2 years)"
    ],
    "allergy": "NKDA",
    "recent": "Spinal X-ray: vertebral fracture after a minor stumble.",
    "reason": "“Did my steroids cause this? Should I have been protected?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Opening",
     "d": "Hear both questions; promise an honest answer; check pain."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Mechanism, steroid dose and duration, falls, neurological symptoms, weight loss and night pain, previous bone protection."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Fear of another fracture, feeling let down, wants to keep the steroid."
    },
    {
     "t": "6–8",
     "h": "Honest explanation",
     "d": "Fragility fracture from steroid-induced osteoporosis; clear apology that protection was not started."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Bisphosphonate with calcium and vitamin D, counselling, bloods and myeloma screen, DXA, steroid review and card, falls, safety-net, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Treats the fracture as a simple injury with painkillers; avoids answering whether protection was missed; waits for a DXA before any treatment; tells her to cut down the steroid herself.",
    "pass": "Recognises the fragility fracture and steroid link, answers honestly, starts a bisphosphonate with calcium and vitamin D, and plans a steroid review.",
    "exc": "All of the above, plus: apologises clearly and records it; counsels bisphosphonate use and dental care; checks calcium, vitamin D and renal function and screens for myeloma; steroid emergency card and warning not to stop suddenly; falls assessment; teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s hard to say what caused it; lots of things weaken bones.”",
     "instead": "“The steroids are very likely a major reason this happened.”",
     "why": "Evasive answers break trust and fall short of the professional duty of candour."
    },
    {
     "dont": "“Let’s get a bone scan first and then decide about treatment.”",
     "instead": "“With this fracture and your steroids, we can start treatment today.”",
     "why": "NOGG: start bone protection without waiting for DXA in this group."
    },
    {
     "dont": "“You should come off the steroids.”",
     "instead": "“Don’t stop them suddenly; I’ll ask the specialists how to lower them safely.”",
     "why": "Abrupt withdrawal risks adrenal crisis and a flare of polymyalgia."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Independence and fear of falling",
     "t": "A spinal fracture can cause fear of going out. Encourage safe activity and offer strength and balance support so she does not become housebound."
    },
    {
     "h": "Family",
     "t": "Her daughter raised the question. With her consent, involving family can help with falls checks at home and medicine routines."
    }
   ],
   "legal": [
    {
     "h": "Candour and complaints",
     "t": "GMC and NMC professional duty of candour (2015, updated 2022): tell the patient when something has gone wrong, apologise, explain, and offer to put it right. Record the discussion. She may complain; tell her how the practice complaints process works if she asks."
    }
   ],
   "professional": [
    {
     "h": "Significant event review",
     "t": "A missed bone-protection opportunity is a learning event. Review the practice’s steroid prescribing so other patients on long-term steroids are checked for bone protection."
    },
    {
     "h": "Shared care with rheumatology",
     "t": "Steroid-sparing drugs such as methotrexate need specialist advice and monitoring. Agree who prescribes and monitors."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "The Royal Osteoporosis Society has information and a helpline. Many areas have a fracture liaison service and community falls services."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "New leg weakness, numbness, or bladder or bowel change (cord or cauda equina compromise)",
     "Weight loss, night pain, feeling unwell (myeloma or metastasis; NICE NG12 (updated April 2026) 1.10.4 tests at 60 and over)",
     "Repeated falls or blackouts"
    ],
    "psychosocial": [
     "Fear of another fracture",
     "Feeling let down that protection was not offered",
     "Dependence on the steroid for her symptoms"
    ],
    "ice": [
     "Idea: the steroids weakened her bones",
     "Concern: another fracture, and that something was missed",
     "Expectation: an honest answer and to be put right"
    ]
   },
   "diagnosis": "“This is a fragility fracture of the spine caused by osteoporosis, and the long-term steroids are very likely a major cause.”",
   "diagnosisLay": "“Bone is always being broken down and rebuilt, like a wall being repaired brick by brick. Steroids slow the builders down, so the wall gets thinner. The bone tablet slows the demolition crew, so the wall can strengthen again.”",
   "management": {
    "reflectIce": "“You asked whether the steroids caused this and whether you should have been protected. The honest answer to both is yes, and I’m sorry. Let’s put it right today.”",
    "psychosocial": "Apologise clearly without blaming colleagues; keep her active and confident; involve her daughter if she wishes.",
    "sharedPlan": [
     "Oral bisphosphonate (alendronate or risedronate, dose per BNF) with calcium and vitamin D, started now (NOGG)",
     "Before starting: calcium, vitamin D, renal function; dental check",
     "Bloods for secondary causes, including myeloma screen (NICE NG12 (updated April 2026) 1.10.4); baseline DXA",
     "Do not stop prednisolone suddenly; steroid emergency card (NatPSA 2020); rheumatology advice on dose reduction or steroid-sparing drug",
     "Analgesia, physiotherapy and falls assessment (NICE NG249)"
    ],
    "safetyNet": [
     "999 or A&E for leg weakness, numbness, or bladder or bowel change",
     "Return for worsening pain, weight loss or feeling unwell; review in 2 weeks with results"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Osteoporosis protocol",
    "s": "NOGG · bisphosphonates · GIOP",
    "href": "management/osteoporosis.html"
   },
   {
    "ic": "📋",
    "t": "Osteoporosis",
    "s": "Case walkthrough",
    "href": "../cases/osteoporosis.html"
   },
   {
    "ic": "💠",
    "t": "Polymyalgia rheumatica protocol",
    "s": "Taper · bone protection · steroid card",
    "href": "management/polymyalgia-rheumatica.html"
   },
   {
    "ic": "🗺️",
    "t": "Falls pathway",
    "s": "Visual algorithm · NICE NG249",
    "href": "algorithms/falls.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is lost by treating only the fracture, by dodging the honesty question, and by unsafe steroid advice. Each pattern below is common and fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Managing the pain and sending her home.",
     "why": "A low-trauma vertebral fracture signals osteoporosis and high future fracture risk (NOGG).",
     "fix": "Name it a fragility fracture and start bone protection today."
    },
    {
     "dom": "tasks",
     "fail": "Waiting for a DXA scan before treating.",
     "why": "NOGG advises starting bone protection without waiting for DXA in people on long-term steroids at high risk.",
     "fix": "Start a bisphosphonate now; use DXA as a baseline."
    },
    {
     "dom": "tasks",
     "fail": "Assuming the steroid explains everything.",
     "why": "NICE NG12 (updated April 2026) 1.10.4 recommends myeloma tests at 60 and over with unexplained fracture or back pain.",
     "fix": "Screen for red flags and send FBC, calcium, ESR or plasma viscosity, electrophoresis and free light chains."
    },
    {
     "dom": "tasks",
     "fail": "Telling her to stop or cut the steroid herself.",
     "why": "Adrenal suppression makes sudden withdrawal dangerous.",
     "fix": "Keep the dose, issue a steroid emergency card, and plan a supervised reduction with rheumatology."
    },
    {
     "dom": "rto",
     "fail": "Defensive or vague answers about the missed protection.",
     "why": "She asked directly; evasion damages trust and falls short of the duty of candour.",
     "fix": "Say what should have happened, apologise, and explain the plan to put it right."
    },
    {
     "dom": "gs",
     "fail": "No bisphosphonate counselling or dental advice.",
     "why": "Wrong administration causes oesophageal harm and poor absorption; dental health matters with bisphosphonates (BNF).",
     "fix": "Explain how to take it, ask about heartburn, advise a dental check; teach-back."
    }
   ]
  }
 },
 "threadworm": {
  "stem": {
   "name": "Ivy Fenwick (attends with her mother, Sophie Fenwick)",
   "age": "5-year-old girl",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded",
   "recent": "No recent consultations recorded.",
   "reason": "Mother (Sophie Fenwick) booked: “Itchy bottom at night, and I think I’ve seen worms.”"
  },
  "knowledge": {
   "guideline": "[1] Greater Manchester Antimicrobial Guidelines, version 16 (GMMMG, October 2024) · [2] UK guidelines for the investigation and management of eosinophilia in returning travellers and migrants (British Infection Association, 2024) · [3] BNF / BNFC: mebendazole · [4] UKHSA: Health protection in children and young people settings, including education",
   "summary": "Night-time perianal itch with visible thread-like worms in a child is threadworm, a clinical diagnosis. Treat the affected child and appropriate household contacts on the same day with mebendazole 100 mg, repeat once after 2 weeks, and pair it with practical hygiene. Check age, pregnancy and breastfeeding for each person before every dose. This is the site’s owner-verified protocol pathway.",
   "points": [
    {
     "h": "A clinical diagnosis",
     "t": "Perianal (and in girls vulval) itch, worse at night, sometimes with visible white thread-like worms in the stool or around the anus. If uncertain, an early-morning adhesive-tape test before washing or opening the bowels can help; stool testing is usually not useful [1]. Examine if symptoms are persistent or atypical."
    },
    {
     "h": "Mebendazole 100 mg, repeated at 2 weeks",
     "t": "A single 100 mg dose for the affected person and appropriate household contacts aged 6 months and over, including those without symptoms, repeated once after 2 weeks because mebendazole does not reliably kill eggs [1][2][3]."
    },
    {
     "h": "Age and pregnancy checks",
     "t": "Aged 6 months to 2 years: off-label, so an individual risk–benefit decision. Under 6 months: hygiene alone for 6 weeks. Pregnancy: hygiene first for 6 weeks; if severe or persistent, seek medicines advice. Breastfeeding: check product information and specialist advice rather than withholding automatically [1][3]."
    },
    {
     "h": "Practical hygiene",
     "t": "At least 2 weeks alongside treatment, 6 weeks where medicine is not used: handwashing and scrubbing under short nails after the toilet and before eating; a morning wash around the anus; discourage scratching, nail-biting and thumb-sucking; close-fitting nightwear; wash nightwear, towels and bed linen on the day of treatment and damp-dust surfaces. There is no need to hot-wash everything daily [1]."
    },
    {
     "h": "School and stigma",
     "t": "No exclusion from school or nursery is needed, and classroom contacts do not need routine treatment [1][4]. Threadworm is common and does not mean poor hygiene."
    },
    {
     "h": "Recurrent or not settling",
     "t": "Check the dose and the 2-week repeat, whether the whole household was treated together, and whether hygiene was practical. If it never improved, reconsider: eczema, irritant dermatitis, scabies, vulvovaginal disease. Persistent vulval symptoms need examination for other causes, including safeguarding where clinically indicated [1]."
    },
    {
     "h": "Secondary infection",
     "t": "Spreading redness, pus or crusting, fever, significant skin breakdown, urinary symptoms or marked vulval inflammation need prompt review. No empirical antibiotics without clinical evidence of bacterial infection [1]."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Shah. You must be Ivy’s mum, Mrs Fenwick? Hello Ivy. What’s been happening?",
    "dom": "rto",
    "why": "Open start that includes the child"
   },
   {
    "who": "pt",
    "text": "Ivy’s been waking up scratching her bottom. It’s really itchy at night and she’s not sleeping. I had a look and I could see these tiny white thread-like things wriggling. And now her little brother’s scratching too. I feel awful. Does it mean we’re not clean? How do we get rid of it?"
   },
   {
    "who": "dr",
    "text": "That sounds exhausting for all of you. I can hear you’re worried about what it says about your home, and I’ll come straight back to that. First, a few questions so I can be sure what this is.",
    "dom": "rto",
    "why": "Acknowledges the embarrassment and signposts"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Is the itch mainly at night? And is it just her bottom, or is she sore at the front too?",
    "dom": "tasks",
    "why": "Nocturnal pattern and vulval symptoms"
   },
   {
    "who": "pt",
    "text": "Mostly at night. She did say it’s itchy at the front a bit."
   },
   {
    "who": "dr",
    "text": "Any pain when she wees, any discharge, or any blood?",
    "dom": "tasks",
    "why": "Screens for vulvovaginitis, UTI and other causes"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. Just the itching."
   },
   {
    "who": "dr",
    "text": "Is the skin broken or weepy from scratching? Any fever, tummy pain or change in her bowels?",
    "dom": "tasks",
    "why": "Secondary infection and atypical features"
   },
   {
    "who": "pt",
    "text": "She’s been scratching a lot. No temperature."
   },
   {
    "who": "dr",
    "text": "Who lives at home with you? I ask because the plan covers everyone.",
    "dom": "tasks",
    "why": "Maps the household for treatment"
   },
   {
    "who": "pt",
    "text": "Me, Ivy and her little brother, and the rest of the family."
   },
   {
    "who": "dr",
    "text": "How old is her brother? And is anyone at home pregnant or breastfeeding? It changes what I can give each person.",
    "dom": "tasks",
    "why": "Checks age, pregnancy and breastfeeding before prescribing"
   },
   {
    "who": "pt",
    "text": "He’s younger than Ivy. I’d have to check with everyone about the rest."
   },
   {
    "who": "dr",
    "text": "That’s fine. Does Ivy have any other health problems or take any medicines?",
    "dom": "tasks",
    "why": "Medication and comorbidity check"
   },
   {
    "who": "pt",
    "text": "No, she’s well otherwise."
   },
   {
    "phase": "ICE",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said you feel awful about it. What’s been going through your mind?",
    "dom": "rto",
    "why": "Explores the idea behind her guilt"
   },
   {
    "who": "pt",
    "text": "That people will think we’re dirty. And that it’ll keep going round the family."
   },
   {
    "who": "dr",
    "text": "And what were you hoping we’d do today?",
    "dom": "rto",
    "why": "Elicits expectations"
   },
   {
    "who": "pt",
    "text": "Just get rid of it, properly this time."
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Ivy, may I have a quick look at your bottom, with Mummy here? (With consent: mild perianal redness and scratch marks, no broken or weepy skin, no vulval discharge.)",
    "dom": "tasks",
    "why": "Consent from child and parent, chaperone, looks for secondary infection"
   },
   {
    "who": "dr",
    "text": "This is threadworm. It’s very common in children, and I want to be really clear: it is not a sign that your home isn’t clean. The worms lay tiny eggs around the bottom at night, which is why it itches then. Scratching puts eggs under the nails, they reach the mouth or get passed on, and the cycle starts again. That’s why it spreads through families.",
    "dom": "tasks",
    "why": "Clinical diagnosis, explains spread, removes stigma"
   },
   {
    "who": "pt",
    "text": "So it’s not because of us?"
   },
   {
    "who": "dr",
    "text": "Not at all. Most families meet it at some point. The plan is about breaking the cycle, not about cleanliness.",
    "dom": "rto",
    "why": "Reassurance aimed at her stated fear"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Everyone in the house who can take it has one dose of a worm medicine called mebendazole on the same day, including people with no itch, and then a second dose two weeks later. The tablet doesn’t kill the eggs, which is why the repeat matters. Ivy can have the chewable tablet or the liquid.",
    "dom": "tasks",
    "why": "Mebendazole 100 mg for the household, repeat at 2 weeks (owner protocol)"
   },
   {
    "who": "pt",
    "text": "What about her brother?"
   },
   {
    "who": "dr",
    "text": "If he’s two or over, he takes the same. Between six months and two, it’s used outside its licence, so we’d decide together whether it’s right for him. Under six months it would be hygiene alone for six weeks. If anyone is pregnant, hygiene comes first, and if anyone’s breastfeeding we check before giving it. Let me know and I’ll go through each person.",
    "dom": "tasks",
    "why": "Age, pregnancy and breastfeeding caveats per protocol"
   },
   {
    "who": "pt",
    "text": "Okay. And the cleaning?"
   },
   {
    "who": "dr",
    "text": "For at least two weeks: wash hands and scrub under nails after the toilet and before eating, keep nails short, wash around the bottom each morning, and close-fitting pyjamas help. On the day you take the medicine, wash nightwear, towels and bedding, and damp-dust surfaces. You don’t need to boil-wash everything every day.",
    "dom": "tasks",
    "why": "Practical, proportionate hygiene"
   },
   {
    "who": "pt",
    "text": "Does she need to stay off school?"
   },
   {
    "who": "dr",
    "text": "No. She can keep going, and her class doesn’t need treating.",
    "dom": "tasks",
    "why": "No school exclusion"
   },
   {
    "who": "dr",
    "text": "Which bits feel hardest to do at home?",
    "dom": "rto",
    "why": "Checks feasibility and buy-in"
   },
   {
    "who": "pt",
    "text": "Stopping them scratching, honestly."
   },
   {
    "who": "dr",
    "text": "That’s the tricky part. Short nails and pyjamas at night make the biggest difference. Your pharmacist can also help if you need the medicine for anyone else.",
    "dom": "gs",
    "why": "Tailors advice to her barrier"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If the itch hasn’t settled after the second dose, or it keeps coming back, come back and we’ll check what else it might be. If the skin becomes sore, weepy, crusted or spreading red, if she gets a temperature, or pain passing urine, see us sooner. Can you tell me the plan in your own words?",
    "dom": "gs",
    "why": "Specific safety-net and teach-back"
   },
   {
    "who": "pt",
    "text": "Everyone takes the tablet the same day, again in two weeks, wash the bedding that day, nails short, morning wash, and she can go to school."
   },
   {
    "who": "dr",
    "text": "Exactly right. And please don’t feel bad. You spotted it and acted, which is what matters.",
    "dom": "rto",
    "why": "Closes on reassurance"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start, included Ivy, and acknowledged the mother’s embarrassment before questioning.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Mapped the household, school attendance and what would be hard to do at home.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “does it mean we’re not clean?” and returned to it explicitly.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a hygiene failing), concern (stigma and re-infection), expectation (clear it properly).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Consent and chaperone for a brief perianal look; tape test only if the diagnosis were uncertain; examines for secondary infection.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Threadworm versus irritant dermatitis, eczema, scabies, vulvovaginitis or UTI.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about vulval discharge, dysuria, bleeding, fever and broken skin; safeguarding only where clinically indicated.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named threadworm as a clinical diagnosis and explained the egg cycle.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Mebendazole 100 mg for the appropriate household on the same day, repeated at 2 weeks, plus practical hygiene; no school exclusion (owner protocol, GMMMG 2024).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Age checks for the brother (off-label 6 months to 2 years, hygiene alone under 6 months) and pregnancy or breastfeeding in the household.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Return if not settling after the repeat dose or recurring, or if signs of secondary infection; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Ivy Fenwick",
    "age": "5 years · female",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "No recent consultations. Attends with her mother.",
    "reason": "“Itchy bottom at night, and I think I’ve seen worms.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Let mother tell it. Note the guilt question and signpost that you will answer it."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Night itch, vulval symptoms, dysuria, broken skin, fever; who lives at home, ages, pregnancy or breastfeeding."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Stigma about cleanliness; fear of it going round again; wants it cleared."
    },
    {
     "t": "6–8",
     "h": "Look and explain",
     "d": "Consent from child and parent. Name threadworm, explain the egg cycle, remove the stigma."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Mebendazole for the household the same day, repeat at 2 weeks; age and pregnancy checks; hygiene; school; safety-net; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Treats only Ivy, or forgets the repeat dose; gives mebendazole to everyone without checking ages or pregnancy; lectures about cleanliness; no safety-net.",
    "pass": "Recognises threadworm, treats the household with a 2-week repeat, gives hygiene advice and reassures that it is common.",
    "exc": "All of the above, plus: answers the guilt question directly; checks the brother’s age and pregnancy or breastfeeding in the house before prescribing; proportionate hygiene (wash on the day of treatment, not daily hot-washing); no school exclusion; asks what will be hard at home; confirms by teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s a hygiene thing, so you’ll need to clean more.”",
     "instead": "“This is very common and isn’t about how clean your home is. The plan just breaks the egg cycle.”",
     "why": "Reinforces the stigma she came in carrying."
    },
    {
     "dont": "“Give everyone this tablet tonight.”",
     "instead": "“Let me check each person’s age, and whether anyone is pregnant or breastfeeding, before we decide who takes it.”",
     "why": "Under 2 years it is off-label, under 6 months it is hygiene alone, and pregnancy starts with hygiene (owner protocol)."
    },
    {
     "dont": "“Keep her off school until it’s gone.”",
     "instead": "“She can keep going to school, and her class doesn’t need treating.”",
     "why": "No exclusion is needed (UKHSA)."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Shame and stigma",
     "t": "Parents often feel judged. Naming threadworm as common and unrelated to cleanliness protects the relationship and adherence."
    },
    {
     "h": "Practical load",
     "t": "Treating a household on one day and laundry for a family is work; tailor advice to what is realistic."
    }
   ],
   "legal": [
    {
     "h": "Off-label use",
     "t": "Mebendazole between 6 months and 2 years is off-label. Explain this, make an individual risk–benefit decision and record it (GMC good practice in prescribing)."
    },
    {
     "h": "Consent in children",
     "t": "Explain to Ivy and her mother and gain consent for the examination; offer a chaperone."
    }
   ],
   "professional": [
    {
     "h": "Prescribing for contacts",
     "t": "Household contacts not registered with you may be better served by the community pharmacy or their own GP. Check age, pregnancy and breastfeeding for each person."
    },
    {
     "h": "Safeguarding",
     "t": "Persistent vulval symptoms or findings not explained by threadworm need examination for other causes and, where clinically indicated, the local safeguarding pathway."
    }
   ],
   "community": [
    {
     "h": "Community pharmacy",
     "t": "Mebendazole is widely available over the counter; prescribing and NHS funding follow local policy."
    },
    {
     "h": "School",
     "t": "No exclusion; classroom contacts do not need routine treatment (UKHSA)."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Broken, weepy, crusted or spreading red skin, or fever (secondary infection)",
     "Vulval discharge, bleeding or dysuria (reconsider the diagnosis)",
     "Findings not explained by threadworm: follow the safeguarding pathway where clinically indicated",
     "No improvement after correct household treatment and hygiene"
    ],
    "psychosocial": [
     "Mother’s guilt about cleanliness",
     "Disturbed sleep for the child and family",
     "Who lives at home, their ages, pregnancy and breastfeeding"
    ],
    "ice": [
     "Idea: it means the family isn’t clean",
     "Concern: stigma and it going round again",
     "Expectation: clear it properly"
    ]
   },
   "diagnosis": "“This is threadworm, a very common infection in children. It isn’t about how clean your home is.”",
   "diagnosisLay": "“The worms lay tiny eggs around the bottom at night, which is why it itches then. Scratching puts eggs under the nails, and they get to the mouth or to other people. Treating everyone together and a few simple habits break that cycle.”",
   "management": {
    "reflectIce": "“You were worried this means you’re not clean. It doesn’t. Almost every family meets it, and it clears well when everyone is treated together.”",
    "psychosocial": "Make the plan realistic for a busy household: one treatment day, laundry that day, short nails and pyjamas at night.",
    "sharedPlan": [
     "Mebendazole 100 mg single dose for Ivy and appropriate household contacts on the same day; repeat once at 2 weeks",
     "Brother: same if 2 or over; 6 months to 2 years off-label with risk–benefit decision; under 6 months hygiene alone for 6 weeks; pregnancy hygiene first; breastfeeding check",
     "Hygiene for at least 2 weeks; wash nightwear, towels and bed linen on the day of treatment; no school exclusion"
    ],
    "safetyNet": [
     "Not settled after the repeat dose, or recurring: return to re-check the diagnosis and household treatment",
     "Sore, weepy or spreading red skin, fever or pain passing urine: see us sooner"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Threadworm",
    "s": "Management protocol · owner-verified",
    "href": "management/threadworm.html"
   },
   {
    "ic": "🗺️",
    "t": "Anal itch",
    "s": "Visual algorithm",
    "href": "algorithms/anal-itchiness.html"
   },
   {
    "ic": "💠",
    "t": "Vulval disorders",
    "s": "Management protocol · persistent vulval itch",
    "href": "management/vulvar-disorders.html"
   },
   {
    "ic": "💠",
    "t": "Scabies",
    "s": "Management protocol · a key differential",
    "href": "management/scabies.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is lost on detail rather than diagnosis: treating one child, missing the repeat dose, or prescribing without checking who in the house can safely take it, and on leaving the mother feeling judged.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Treating only Ivy.",
     "why": "Other household members carry eggs, so she is re-infected (owner protocol).",
     "fix": "Treat the appropriate household on the same day, including those without symptoms."
    },
    {
     "dom": "tasks",
     "fail": "No repeat dose.",
     "why": "Mebendazole does not reliably kill eggs; the 2-week repeat catches newly hatched worms.",
     "fix": "Say “one dose today, one in two weeks” and check it by teach-back."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing for everyone without age or pregnancy checks.",
     "why": "Off-label between 6 months and 2 years, hygiene alone under 6 months, hygiene first in pregnancy (owner protocol, BNFC).",
     "fix": "Ask the brother’s age and about pregnancy or breastfeeding before deciding."
    },
    {
     "dom": "rto",
     "fail": "Brushing past “does it mean we’re not clean?”",
     "why": "It is her main concern; ignoring it costs Relating marks and adherence.",
     "fix": "Answer it directly and early: common, not about cleanliness."
    },
    {
     "dom": "tasks",
     "fail": "Excessive hygiene advice or school exclusion.",
     "why": "Daily hot-washing is unnecessary and exclusion is not needed (UKHSA).",
     "fix": "Wash on the day of treatment, practical daily habits, stay in school."
    },
    {
     "dom": "gs",
     "fail": "No safety-net.",
     "why": "Persistence may mean another diagnosis or secondary infection.",
     "fix": "Name what to return for: not settling after the repeat, recurrence, weepy or spreading red skin, fever, dysuria."
    }
   ]
  }
 },
 "tinea-pedis": {
  "stem": {
   "name": "Leon Park",
   "age": "34-year-old man",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded; has used over-the-counter creams"
   ],
   "allergy": "Not recorded",
   "recent": "No recent consultations recorded.",
   "reason": "Booked: “Itchy, flaky skin between my toes that keeps coming back.”"
  },
  "knowledge": {
   "guideline": "[1] MHRA SPC: Lamisil AT 1% cream (terbinafine) · [2] MHRA SPC: Canesten 1% cream (clotrimazole) · [3] BAD guidelines for the management of onychomycosis 2014 · [4] MHRA SPC: Lamisil 250 mg tablets · [5] BNF: terbinafine, imidazole antifungals · [6] NICE NG19 Diabetic foot problems",
   "summary": "Itchy, macerated, scaling skin between the toes, especially the fourth web space, in a gym-goer is tinea pedis. Use a topical antifungal for the full licensed course, with foot hygiene. Look for nail infection and other sites, because a nail reservoir drives recurrence. Sample before any oral antifungal.",
   "points": [
    {
     "h": "Recognise",
     "t": "Interdigital itch, scaling, fissuring and maceration, often in the fourth web space; or diffuse dry “moccasin” scaling of the soles. Sweating, occlusive footwear and communal showers predispose."
    },
    {
     "h": "Differential",
     "t": "Contact or irritant dermatitis, eczema, psoriasis, erythrasma (coral-red under Wood’s light), pitted keratolysis (pits and odour), and bacterial infection of macerated web spaces. Skin scrapings for mycology if the diagnosis is uncertain, it has not responded, or before oral treatment."
    },
    {
     "h": "Topical treatment",
     "t": "Terbinafine 1% cream once daily for 1 week for tinea pedis; irregular use or stopping early risks recurrence [1]. Clotrimazole: follow the licensed duration, which is longer for dermatophyte infections [2]. Doses per BNF [5]."
    },
    {
     "h": "Nails",
     "t": "Onychomycosis is a reservoir for recurrence. Confirm by nail clippings for microscopy and culture before oral treatment [3]. Oral terbinafine for toenails is usually 12 weeks (12–16 weeks per BAD 2014) [3][4]; check LFTs before starting [4]. Topical nail lacquer only for limited disease with the lunula spared [3]."
    },
    {
     "h": "Oral treatment for skin",
     "t": "For extensive or refractory tinea pedis after confirming the diagnosis, an oral antifungal may be used; dose and duration per BNF [5]."
    },
    {
     "h": "Prevention",
     "t": "Dry carefully between the toes, change socks daily, alternate and air shoes, wear sandals in communal showers, do not share towels, and treat footwear with antifungal powder."
    },
    {
     "h": "Diabetes and immunosuppression",
     "t": "Macerated or fissured web spaces are a portal for bacterial infection and cellulitis. People with diabetes need foot checks and prompt treatment (NICE NG19) [6]."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Park, I’m Dr Clarke. What can I do for you?",
    "dom": "rto",
    "why": "Open start"
   },
   {
    "who": "pt",
    "text": "The skin between my toes has gone really itchy, flaky and a bit cracked and soggy, and honestly my feet smell. I’m at the gym a lot. I’ve tried various creams and it keeps coming back. What is it and how do I get rid of it?"
   },
   {
    "who": "dr",
    "text": "Thanks for being so clear, and it sounds frustrating to keep going round in circles. Let’s work out why it keeps coming back.",
    "dom": "rto",
    "why": "Acknowledges frustration"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Which creams have you used, how often, and for how long each time?",
    "dom": "tasks",
    "why": "Treatment history: agent, adherence, duration"
   },
   {
    "who": "pt",
    "text": "A few from the chemist. I couldn’t tell you exactly how long I used them."
   },
   {
    "who": "dr",
    "text": "That’s worth knowing, and I’ll come back to it. Have you noticed any change in your toenails, such as thickening, yellowing or crumbling? Any rash in the groin, hands or elsewhere?",
    "dom": "tasks",
    "why": "Nail reservoir and other sites"
   },
   {
    "who": "pt",
    "text": "I’m not sure about the nails. I haven’t looked closely."
   },
   {
    "who": "dr",
    "text": "Any pain, redness spreading up the foot, swelling or fever?",
    "dom": "tasks",
    "why": "Secondary bacterial infection or cellulitis"
   },
   {
    "who": "pt",
    "text": "No, just the itch and the cracks."
   },
   {
    "who": "dr",
    "text": "Do you have diabetes, or anything that affects your immune system? Any thirst or passing more urine?",
    "dom": "tasks",
    "why": "Diabetic and immunocompromise caveat"
   },
   {
    "who": "pt",
    "text": "Not that I know of."
   },
   {
    "who": "dr",
    "text": "Any history of eczema or psoriasis, or has anything new touched your feet, like new shoes or soap?",
    "dom": "tasks",
    "why": "Differential: dermatitis and psoriasis"
   },
   {
    "who": "pt",
    "text": "Nothing I can think of."
   },
   {
    "phase": "ICE",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What do you think is going on?",
    "dom": "rto",
    "why": "Idea"
   },
   {
    "who": "pt",
    "text": "Athlete’s foot, probably. But the creams don’t work."
   },
   {
    "who": "dr",
    "text": "And what bothers you most about it?",
    "dom": "rto",
    "why": "Concern"
   },
   {
    "who": "pt",
    "text": "The smell, honestly. It’s embarrassing at the gym."
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Can I have a look at both feet, between the toes, the soles and your nails? (Interdigital maceration and scaling seen. Nails and other sites examined and findings recorded.)",
    "dom": "tasks",
    "why": "Examines web spaces, soles, nails and other sites"
   },
   {
    "who": "dr",
    "text": "This is athlete’s foot, a fungal infection that loves warm, damp skin. A common reason it keeps coming back is stopping the cream when it looks better, while the fungus is still there. The other is the nails: if they’re infected, they reseed the skin.",
    "dom": "tasks",
    "why": "Names diagnosis; explains recurrence"
   },
   {
    "who": "pt",
    "text": "So I might have been stopping too early?"
   },
   {
    "who": "dr",
    "text": "Possibly, and it’s very common. The skin looks better before the fungus has gone.",
    "dom": "rto",
    "why": "Non-judgemental"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I suggest terbinafine cream once a day for the full week, even if it looks better on day three, between all the toes and a little beyond the rash.",
    "dom": "tasks",
    "why": "Terbinafine 1% once daily for 1 week (SPC)"
   },
   {
    "who": "pt",
    "text": "Only a week?"
   },
   {
    "who": "dr",
    "text": "For this cream, yes, if you do the full week. Some other creams need longer. Alongside that: dry carefully between your toes, clean cotton socks daily, alternate trainers so they dry out, sandals in the gym showers, and your own towel. Antifungal powder in your shoes helps.",
    "dom": "tasks",
    "why": "Foot hygiene and prevention"
   },
   {
    "who": "pt",
    "text": "That I can do. What about the smell?"
   },
   {
    "who": "dr",
    "text": "Much of the smell comes from damp skin, so drying and changing socks helps. If it persists, I’ll check for another condition that causes pitting and odour.",
    "dom": "tasks",
    "why": "Considers pitted keratolysis"
   },
   {
    "who": "dr",
    "text": "If your nails are involved, creams won’t reach. I’d take clippings to confirm it before any tablets, because tablets for nails take about three months and need a liver blood test first.",
    "dom": "tasks",
    "why": "Nail sampling before oral terbinafine; LFTs (BAD 2014; SPC)"
   },
   {
    "who": "pt",
    "text": "Okay, makes sense."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If it isn’t better two weeks after finishing the cream, come back and I’ll take skin scrapings. If your foot becomes red, hot, swollen or painful, or you get a fever, that could be a bacterial infection and needs seeing the same day. What’s your plan?",
    "dom": "gs",
    "why": "Review point and cellulitis safety-net"
   },
   {
    "who": "pt",
    "text": "Cream every day for the full week even if it looks fine, dry between the toes, change socks, sandals at the gym, and back if it doesn’t clear or goes red."
   },
   {
    "who": "dr",
    "text": "Exactly right.",
    "dom": "rto",
    "why": "Confirms understanding"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; let him describe symptoms, gym use and frustration.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Gym, footwear, towel-sharing and embarrassment explored.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “the creams don’t work” and explored how they were used.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (athlete’s foot), concern (odour, embarrassment, recurrence), expectation (something that works).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Examined web spaces, soles, nails and other sites; scrapings if uncertain or refractory; nail clippings before oral treatment.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Tinea pedis versus dermatitis, psoriasis, erythrasma, pitted keratolysis, bacterial infection.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about spreading redness, swelling, pain and fever; diabetes and immunosuppression.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named tinea pedis and explained recurrence (early stopping, nail reservoir).",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Terbinafine 1% once daily for the full week (SPC) with foot hygiene; oral treatment only after mycology confirmation, with baseline LFTs.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Diabetes and immunosuppression caveat (NICE NG19); odour addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review if not clear two weeks after treatment; same-day review for cellulitis signs; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Leon Park",
    "age": "34 years · male",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "Over-the-counter creams"
    ],
    "allergy": "Not recorded",
    "recent": "No recent consultations.",
    "reason": "“Itchy skin between my toes that keeps coming back.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Let him describe it and the failed creams."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Which creams, how long; nails; other sites; cellulitis signs; diabetes; dermatitis."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Athlete’s foot; embarrassment about the smell; wants a fix."
    },
    {
     "t": "6–8",
     "h": "Examine and explain",
     "d": "Web spaces, soles, nails. Why it recurs."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Full course of cream; hygiene; nails; review point; cellulitis safety-net; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Gives another cream without asking how the last ones were used; doesn’t look at the nails; starts oral terbinafine without sampling.",
    "pass": "Recognises tinea pedis, prescribes a topical antifungal with hygiene advice, checks nails, and safety-nets.",
    "exc": "All of the above, plus: explores how previous creams were used; gives the product-specific duration; nail sampling and LFTs before tablets; considers erythrasma and pitted keratolysis; asks about diabetes; addresses the odour; teach-back."
   },
   "avoid": [
    {
     "dont": "“Try a different cream.”",
     "instead": "“How long did you use the last ones? Stopping early is the commonest reason it comes back.”",
     "why": "Treatment failure is often adherence, not the drug."
    },
    {
     "dont": "“I’ll start you on terbinafine tablets.”",
     "instead": "“If the nails look involved, let’s confirm with clippings first.”",
     "why": "Sample before oral treatment (BAD 2014); baseline LFTs needed."
    },
    {
     "dont": "“It’s just sweaty feet.”",
     "instead": "“It’s a fungal infection, and it’s very treatable.”",
     "why": "Dismissal ignores his embarrassment and the need for treatment."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Gym and communal showers",
     "t": "Sandals, own towel and drying habits are practical and fit his routine."
    },
    {
     "h": "Embarrassment",
     "t": "Odour and appearance cause social embarrassment; acknowledge it."
    }
   ],
   "legal": [
    {
     "h": "Self-care",
     "t": "Topical antifungals are available from pharmacies; many areas expect self-care for mild athlete’s foot."
    }
   ],
   "professional": [
    {
     "h": "Safe oral prescribing",
     "t": "Confirm the diagnosis by mycology and check LFTs before oral terbinafine (SPC); review interactions."
    },
    {
     "h": "Reconsidering the diagnosis",
     "t": "Failure of correct treatment should prompt scrapings and reconsideration."
    }
   ],
   "community": [
    {
     "h": "Community pharmacy",
     "t": "Advice on creams, powders and correct duration."
    },
    {
     "h": "Podiatry",
     "t": "For people with diabetes or foot problems needing foot care."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Spreading redness, heat, swelling, pain or fever (cellulitis)",
     "Diabetes or immunosuppression",
     "Nail changes (reservoir)",
     "No response to a correct course (reconsider the diagnosis)"
    ],
    "psychosocial": [
     "Gym use and communal showers",
     "Embarrassment about odour",
     "How he used previous creams"
    ],
    "ice": [
     "Idea: athlete’s foot that creams don’t fix",
     "Concern: odour, embarrassment, recurrence",
     "Expectation: something that works"
    ]
   },
   "diagnosis": "“This is athlete’s foot, a fungal skin infection between the toes.”",
   "diagnosisLay": "“The fungus loves warm, damp skin. The cream clears it, but only if you finish the full course, because the skin looks better before the fungus has gone.”",
   "management": {
    "reflectIce": "“You felt the creams don’t work. Often the cream is fine, but stopping early lets it come back.”",
    "psychosocial": "Build hygiene into his gym routine; address the odour.",
    "sharedPlan": [
     "Terbinafine 1% cream once daily for the full week (SPC)",
     "Foot hygiene: dry between toes, daily socks, alternate shoes, sandals in showers, own towel, antifungal powder",
     "Nail clippings if nails involved; oral terbinafine only after confirmation, with baseline LFTs"
    ],
    "safetyNet": [
     "Not clear two weeks after finishing: return for scrapings",
     "Red, hot, swollen or painful foot, or fever: same-day review"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Fungal skin infection",
    "s": "Management protocol · tinea",
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
    "t": "Nail disorders",
    "s": "Management protocol · onychomycosis",
    "href": "management/nail-disorders.html"
   },
   {
    "ic": "💠",
    "t": "Cellulitis",
    "s": "Management protocol",
    "href": "management/cellulitis.html"
   }
  ],
  "pitfalls": {
   "intro": "The diagnosis is easy. The marks are in finding why it keeps coming back, examining the nails, and prescribing safely.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Not asking how the previous creams were used.",
     "why": "Stopping early is a common cause of recurrence (SPC).",
     "fix": "Ask which cream, how often and for how long."
    },
    {
     "dom": "tasks",
     "fail": "Not examining the nails.",
     "why": "A nail reservoir reseeds the skin.",
     "fix": "Look at the nails and other sites."
    },
    {
     "dom": "tasks",
     "fail": "Oral terbinafine without sampling.",
     "why": "BAD 2014: confirm by mycology first; SPC: baseline LFTs.",
     "fix": "Clippings first."
    },
    {
     "dom": "tasks",
     "fail": "Missing the differential.",
     "why": "Erythrasma, pitted keratolysis and dermatitis mimic tinea.",
     "fix": "Consider them when treatment fails or odour dominates."
    },
    {
     "dom": "rto",
     "fail": "Ignoring the odour.",
     "why": "It is his main concern.",
     "fix": "Acknowledge it and explain what helps."
    },
    {
     "dom": "gs",
     "fail": "No cellulitis safety-net.",
     "why": "Macerated skin is a portal for bacteria, especially in diabetes.",
     "fix": "Name redness, heat, swelling, pain and fever."
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
