/* ============================================================
   Reasoning GP — The Hot Seat: add-on set, batch 10
   Stem, knowledge, model consultation, scorecard tasks, extras,
   knowledge base, playbook, links and examiner pitfalls for
   20 further cases. Loaded after sca-pitfalls.js and
   before sca-practice.js; merges into the existing maps and
   attaches to the case objects exactly as those files do.
   Educational; original content; primary sources cited.
   ============================================================ */
(function(){
  var ADD = {
 "adhd-pathway": {
  "stem": {
   "name": "Leo Hartnell",
   "age": "8-year-old boy (mother, Mrs Becca Hartnell, attending)",
   "pmh": [
    "No significant past medical history recorded",
    "No previous neurodevelopmental assessment on file"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "None recorded",
   "recent": "No recent attendances. Mother has booked after the school raised concerns about attention and behaviour in class.",
   "reason": "Video consultation: \"School say Leo has ADHD and needs medication.\""
  },
  "knowledge": {
   "guideline": "NICE NG87 (2018, updated 2019) · NICE QS39 · NICE CG128 · SEND Code of Practice 0 to 25 (DfE/DHSC 2015)",
   "summary": "ADHD in a child is diagnosed by a specialist after a full assessment across settings. The GP does not diagnose it or start medication, but gathers the picture, screens for mimics and refers.",
   "points": [
    {
     "h": "Who diagnoses and prescribes",
     "t": "NICE NG87: primary care practitioners should not make the initial diagnosis or start medication in children with suspected ADHD. Diagnosis and medication start in secondary care (paediatrics, child psychiatry or a specialist ADHD/CAMHS service)."
    },
    {
     "h": "When to refer",
     "t": "NICE NG87: if the problems are causing severe impairment, refer straight to secondary care. Where the impact is less than severe, a period of watchful waiting of up to 10 weeks can be considered before referral; follow the local neurodevelopmental pathway, which often needs school information with the referral."
    },
    {
     "h": "What makes it ADHD",
     "t": "NICE NG87: symptoms of hyperactivity/impulsivity and/or inattention that occur often, are present in 2 or more important settings (for a child, home and school), and cause at least moderate psychological, social and/or educational impairment. The diagnosis should not be made on rating scales or observation alone."
    },
    {
     "h": "Mimics and co-existing conditions",
     "t": "Hearing or vision problems, sleep difficulties (including snoring), specific learning difficulty, speech and language problems, autism (NICE CG128), anxiety or low mood, attachment difficulties, trauma or adverse experiences, and family stress. Safeguarding concerns must be asked about, not assumed away."
    },
    {
     "h": "Treatment is staged",
     "t": "NICE NG87: give ADHD-focused information and support, and make environmental changes at school and home. At age 5 and over, medication is offered only if symptoms still cause persistent significant impairment in at least one domain after those modifications have been made and reviewed, and it is started by a specialist. Do not advise cutting out artificial colourings or additives as a general treatment."
    },
    {
     "h": "School support does not wait for a label",
     "t": "SEND Code of Practice 0 to 25 (2015): schools should put support in place on the basis of need, through the SENCO, without waiting for a diagnosis. NICE QS39 sets out annual specialist review once medication is started."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, Mrs Hartnell, it’s Dr Shah. Thanks for joining. Before I say anything, tell me in your own words what’s been happening with Leo and what the school have said.",
    "dom": "rto",
    "why": "Open question; lets her set out the story before any view is given"
   },
   {
    "who": "pt",
    "text": "They say he’s got ADHD. He can’t sit still, he’s disruptive, he doesn’t listen. They reckon he needs medication and told me to come and get it sorted. Can you prescribe something, or refer him for the tablets?"
   },
   {
    "who": "dr",
    "text": "It sounds as though the school have been pretty firm with you. I take what they’re seeing seriously, and I want to help you get to the bottom of it. Could I spend a few minutes understanding Leo as a whole, then explain how ADHD is assessed and agree what we do next?",
    "dom": "gs",
    "why": "Acknowledges the concern and sets a shared agenda without pre-judging"
   },
   {
    "who": "pt",
    "text": "Okay. I just want something done."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Of course. Starting with school: what exactly do they see, and when did they first raise it?",
    "dom": "tasks",
    "why": "Characterises the core features and onset"
   },
   {
    "who": "pt",
    "text": "He can’t sit still, he’s disruptive, he doesn’t listen — that’s what they keep saying. I couldn’t tell you exactly when it started."
   },
   {
    "who": "dr",
    "text": "And what is he like at home, or with friends and at clubs? Is it the same everywhere, or mostly at school?",
    "dom": "tasks",
    "why": "Tests pervasiveness across settings, which the diagnosis depends on"
   },
   {
    "who": "pt",
    "text": "Honestly, I’m not sure. He’s a lively boy, but I’ve never really thought of it as a problem at home."
   },
   {
    "who": "dr",
    "text": "That’s helpful to know, and it’s exactly the sort of thing the specialists will ask about. How is it affecting him — his learning, his friendships, how he feels about himself?",
    "dom": "tasks",
    "why": "Asks about impairment, not just symptoms"
   },
   {
    "who": "pt",
    "text": "I don’t really know what he thinks. They haven’t said much about that side."
   },
   {
    "who": "dr",
    "text": "A few things can look very like ADHD, so I ask every family about them. Has his hearing or eyesight been checked recently? And how does he sleep — does he snore, or wake a lot?",
    "dom": "tasks",
    "why": "Screens the common mimics: hearing, vision and sleep"
   },
   {
    "who": "pt",
    "text": "Not that I know of, no one’s checked his hearing. Sleep, I’d have to think about."
   },
   {
    "who": "dr",
    "text": "How are his reading and writing compared with others in his class? And his talking and understanding when you explain things?",
    "dom": "tasks",
    "why": "Screens for learning, speech and language difficulty"
   },
   {
    "who": "pt",
    "text": "I’m not sure. I’d have to ask school."
   },
   {
    "who": "dr",
    "text": "I also ask everyone this, because worry and upheaval can show up as behaviour: has anything big changed for Leo, or for the family, and is everyone safe and okay at home?",
    "dom": "tasks",
    "why": "Routine, non-accusatory screen for stress, trauma and safeguarding"
   },
   {
    "who": "pt",
    "text": "Nothing I want to go into. It’s just me being worn out by it all."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "You said you’re worn out. How are you doing with all of this?",
    "dom": "rto",
    "why": "Picks up the cue about her own exhaustion"
   },
   {
    "who": "pt",
    "text": "I feel like they think it’s my fault. School are always on at me. I thought if I came back with tablets they’d get off my back."
   },
   {
    "who": "dr",
    "text": "That sounds exhausting, and I’m sorry you’ve felt blamed. Coming today shows you’re doing exactly what a caring parent does. What do you think is going on with Leo?",
    "dom": "rto",
    "why": "Validates her feelings and draws out her own idea"
   },
   {
    "who": "pt",
    "text": "I don’t know. Part of me wonders if they’re right. Part of me doesn’t want him on strong tablets."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "Both of those feelings make sense. Here’s how it works. ADHD is a real condition, but it can’t be diagnosed from a teacher’s report or by me in a GP appointment. A specialist team looks at how he is at home and at school, and rules out other things first. So I won’t prescribe today — not because I doubt you, but because medication must be started by that team.",
    "dom": "tasks",
    "why": "Explains specialist diagnosis and why a GP prescription is not appropriate"
   },
   {
    "who": "pt",
    "text": "So what happens, then? Do we just wait?"
   },
   {
    "who": "dr",
    "text": "No, we get things moving now. I’ll refer Leo to the neurodevelopmental team. They’ll want questionnaires from you and from school — I’ll send those — and a report from his teacher. I’ll also arrange a hearing test, and I’d like you to keep a note of his sleep for a couple of weeks.",
    "dom": "tasks",
    "why": "Multi-source information, referral and exclusion of hearing and sleep causes"
   },
   {
    "who": "pt",
    "text": "How long does the referral take?"
   },
   {
    "who": "dr",
    "text": "I’ll be honest — there’s usually a wait, often months. If they do diagnose ADHD, the first steps are support at school and at home, with advice for you as a parent. Medication is considered by the specialists if he is still struggling after that. It’s one option, not the starting point.",
    "dom": "tasks",
    "why": "Manages expectations on timescales and staged treatment"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "While we wait, school don’t need a diagnosis to help him. Could you ask to meet the SENCO — the teacher who organises extra support — about his learning and any changes in class?",
    "dom": "tasks",
    "why": "SEND support by need, without waiting for a label"
   },
   {
    "who": "pt",
    "text": "I didn’t know I could ask for that."
   },
   {
    "who": "dr",
    "text": "You can. I’ll also give you details of support for parents. And I’d like to hear from Leo himself at some point — how school feels for him. Does that plan sound right to you?",
    "dom": "rto",
    "why": "Includes the child’s voice and checks the plan with her"
   },
   {
    "who": "pt",
    "text": "Yes. It feels better than just being told to get tablets."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If things get much worse at school, if there’s a risk of exclusion, or if you notice him becoming very low, anxious or not sleeping, get back to me and I can chase the referral. And if you ever feel you’re not coping, please tell us — you matter here too.",
    "dom": "gs",
    "why": "Specific safety-net covering the child and the parent"
   },
   {
    "who": "pt",
    "text": "Thank you, I will."
   },
   {
    "who": "dr",
    "text": "Can I check I’ve explained it clearly? What will you tell school when they phone next?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "That the GP has referred him, that the specialists decide about ADHD and medicine, and that I want to meet the SENCO."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll book a review in about a month to see how the questionnaires and hearing test are going.",
    "dom": "gs",
    "why": "Defined follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question to the mother; let her describe the school’s concerns and her request before responding.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored home life, family stress, the mother’s exhaustion and feeling blamed, and pressure from school.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I’m worn out”, the mixed feelings about “strong tablets” and the lack of information about home behaviour.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Her idea (the school may be right), concern (blame, medication worries) and expectation (a prescription or “referral for tablets”).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Hearing test, vision check, sleep diary; parent and teacher questionnaires; school report for the referral.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "ADHD vs single-setting behaviour, hearing or vision loss, sleep problems, learning or language difficulty, autism, anxiety, adverse experiences.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened sensitively for safeguarding and adverse experiences; asked about low mood, risk of exclusion and severe impairment.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated that ADHD is possible but not established; assessment across settings by a specialist is needed.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Referral to the neurodevelopmental pathway, no GP prescription, SENCO support now, parent support; medication specialist-led and not first.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Addressed the mother’s exhaustion; hearing and sleep followed up; learning needs flagged to school.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review in about a month; clear route back if things worsen; referral chased if impairment increases.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Leo Hartnell",
    "age": "8 years · male",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "None"
    ],
    "allergy": "None recorded",
    "recent": "No recent consultations. No hearing test, developmental review or school report on file.",
    "reason": "Mother booked video call: \"The school say it’s ADHD and he needs medication.\""
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "Let Mrs Hartnell give the school’s view and her request in full. Acknowledge the pressure; don’t agree or disagree yet."
    },
    {
     "t": "1–5",
     "h": "Pattern and mimics",
     "d": "Onset, settings (home and school), impact. Screen hearing, vision, sleep, learning, language, family stress and safety."
    },
    {
     "t": "5–7",
     "h": "ICE",
     "d": "Her exhaustion, feeling blamed, mixed feelings about medication. Name them."
    },
    {
     "t": "7–10",
     "h": "Explain and plan",
     "d": "Specialist diagnosis; no GP prescription; referral with questionnaires and school report; hearing test; SENCO now."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Worsening, exclusion risk, low mood or sleep, parental strain. Teach-back and review in about a month."
    }
   ],
   "wordPics": {
    "fail": "Prescribes or promises medication, or dismisses the school (“all boys are lively”); no question about home behaviour, hearing, sleep or safety; no referral or a referral with no information; mother leaves feeling blamed.",
    "pass": "Explains that ADHD is diagnosed by a specialist after assessment across settings; asks about home and school; screens some mimics; refers to the neurodevelopmental pathway; mentions school support and gives a safety-net.",
    "exc": "All of the above, plus: asks about hearing, vision, sleep, learning, stress and safety in a routine, non-accusatory way; names the mother’s exhaustion and sense of blame; organises questionnaires and a hearing test; explains staged treatment honestly; gets the SENCO involved now; seeks Leo’s own view; checks understanding with teach-back."
   },
   "avoid": [
    {
     "dont": "\"If the school say it’s ADHD, I’ll refer him for medication.\"",
     "instead": "\"The school’s view matters, and it’s one part of the picture. A specialist team looks at home and school together before anyone decides.\"",
     "why": "Rubber-stamping a single-setting report skips the assessment NICE NG87 requires."
    },
    {
     "dont": "\"He’s just a lively boy — lots of kids are like that.\"",
     "instead": "\"Let’s find out properly. Tell me what he’s like at home and with friends.\"",
     "why": "Dismissing the concern loses the mother and risks missing real impairment."
    },
    {
     "dont": "\"Is anything going on at home that’s causing this?\"",
     "instead": "\"I ask every family this, because worry and upheaval can show up as behaviour: has anything big changed, and is everyone safe at home?\"",
     "why": "The safeguarding screen is essential, but asked bluntly it sounds like blame."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family strain",
     "t": "Repeated pressure from school, a parent who feels blamed and possible exhaustion. Ask about her support and wellbeing; parent support groups can help while waiting."
    },
    {
     "h": "Education",
     "t": "SEND Code of Practice 0 to 25 (2015): the SENCO can put in SEN support on the basis of need. An Education, Health and Care needs assessment can be requested if needs are greater; no diagnosis is required first."
    }
   ],
   "legal": [
    {
     "h": "Equality Act 2010",
     "t": "A child whose ADHD or other condition has a substantial and long-term effect on day-to-day activities may be disabled under the Act, and schools must make reasonable adjustments."
    },
    {
     "h": "Safeguarding",
     "t": "Working Together to Safeguard Children (HM Government, 2023) and NICE NG76 (child abuse and neglect): behaviour change can be a sign of maltreatment, so ask routinely and refer if concerned."
    }
   ],
   "professional": [
    {
     "h": "Scope of GP practice",
     "t": "NICE NG87: primary care does not diagnose ADHD or start medication in children. Continuing prescriptions happen only under a shared care arrangement after specialist initiation and titration."
    },
    {
     "h": "The child’s voice",
     "t": "GMC 0–18 years guidance: involve children in decisions about their care in a way that suits their age and understanding."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Local parent-carer forums, SENDIASS (free impartial SEND advice for families), and ADHD UK or ADDISS for information."
    },
    {
     "h": "Benefits",
     "t": "Disability Living Allowance for children can be claimed on the basis of care or supervision needs well beyond those of other children of the same age; a diagnosis is not required."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Disclosure or signs of abuse, neglect or domestic abuse — follow safeguarding procedures the same day",
     "Regression in skills, new neurological symptoms or episodes of staring or absence",
     "Low mood, self-harm talk or severe anxiety in the child",
     "Risk of permanent exclusion or a parent who is not coping"
    ],
    "psychosocial": [
     "Home and school: is the behaviour in both settings or only one?",
     "Impact on learning, friendships and self-esteem",
     "Family changes, stress and the parent’s own wellbeing"
    ],
    "ice": [
     "Idea: “School say it’s ADHD — maybe they’re right”",
     "Concern: being blamed; not wanting her son on “strong tablets”",
     "Expectation: a prescription or a referral “for the tablets”"
    ]
   },
   "diagnosis": "“ADHD is possible, and it’s also possible something else is behind this, such as hearing, sleep or learning difficulties. It’s diagnosed by a specialist team who look at how Leo is at home and at school.”",
   "diagnosisLay": "“Think of it like a jigsaw. School have given us one important piece. The specialists need the pieces from home, from his hearing and sleep, and from his learning before they can see the whole picture.”",
   "management": {
    "reflectIce": "“You told me you feel blamed and worn out. This isn’t your fault, and getting a proper assessment is the best thing you can do for Leo.”",
    "psychosocial": "Get school support started now through the SENCO, offer parent support, and check in on her own coping.",
    "sharedPlan": [
     "Referral to the neurodevelopmental pathway with parent and teacher questionnaires and a school report",
     "Hearing test, vision check and a sleep diary",
     "No GP prescribing; explain staged treatment with medication specialist-led"
    ],
    "safetyNet": [
     "Return sooner if behaviour worsens, exclusion looms, or Leo seems low, anxious or not sleeping",
     "Review in about a month; chase the referral if impairment increases"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "ADHD",
    "s": "Case walkthrough · NICE NG87",
    "href": "../cases/adhd.html"
   },
   {
    "ic": "💠",
    "t": "ADHD protocol",
    "s": "Referral · shared care",
    "href": "management/adhd.html"
   },
   {
    "ic": "📋",
    "t": "Autism",
    "s": "Case walkthrough · NICE CG128",
    "href": "../cases/autism.html"
   },
   {
    "ic": "🗺️",
    "t": "Sleep problems in children",
    "s": "Visual algorithm · a common mimic",
    "href": "algorithms/sleep-problems-children.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you can stand between a school’s certainty and a worried parent without taking either side too early. Candidates fail by prescribing, by dismissing, or by forgetting the mimics.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Agreeing to “refer for the tablets” or suggesting a trial of medication.",
     "why": "NICE NG87: primary care does not diagnose ADHD or start medication in children. A plan built on a teacher’s view alone is unsafe.",
     "fix": "“I can’t prescribe for ADHD, and I wouldn’t want to until a specialist has assessed him properly. Here’s how we get that started today.”"
    },
    {
     "dom": "tasks",
     "fail": "Never asking about home, so the pattern is known in only one setting.",
     "why": "The diagnosis needs symptoms in 2 or more settings with impairment. Without this, the referral has little value.",
     "fix": "Ask directly: “Is he like this at home, with friends, at clubs?” and collect questionnaires from both parent and teacher."
    },
    {
     "dom": "tasks",
     "fail": "No screen for hearing, sleep, learning difficulty or family stress.",
     "why": "Missing a treatable mimic while the family waits months for assessment is a serious error and a common examiner comment.",
     "fix": "Arrange a hearing test and sleep diary, and ask about reading, language and big changes at home."
    },
    {
     "dom": "rto",
     "fail": "Asking “Is something going on at home?” in a tone that implies blame.",
     "why": "She already feels blamed. A clumsy safeguarding question loses her trust and the chance of a real answer.",
     "fix": "Normalise it: “I ask every family this…” then ask about changes and whether everyone is safe."
    },
    {
     "dom": "rto",
     "fail": "Talking only about Leo and never about his mother’s exhaustion.",
     "why": "Her hidden agenda is pressure and feeling blamed. Missing it is a Relating to Others miss.",
     "fix": "“How are you doing with all of this?” Then reflect it back in the plan."
    },
    {
     "dom": "gs",
     "fail": "Ending with “we’ll refer and see” and no interim support or safety-net.",
     "why": "Waits are long. A plan with nothing for the meantime is incomplete.",
     "fix": "SENCO support now, parent support, named reasons to return, and a review date."
    }
   ]
  }
 },
 "antipsychotic-restart": {
  "stem": {
   "name": "Dominic Healy",
   "age": "38-year-old man",
   "pmh": [
    "Psychosis / schizophrenia (mental-health team involvement on record)"
   ],
   "meds": [
    "Antipsychotic — on the record, but stopped by the patient several months ago"
   ],
   "allergy": "None recorded",
   "recent": "No antipsychotic issued for several months. No recent physical-health monitoring results on file.",
   "reason": "Video consultation: “I want to go back on my antipsychotic — can you just prescribe it?”"
  },
  "knowledge": {
   "guideline": "[1] NICE CG178 (psychosis and schizophrenia in adults, 2014) · [2] NHS England, Responsibility for prescribing between primary and secondary/tertiary care (2018) · [3] BNF antipsychotic monographs · [4] DVLA, Assessing fitness to drive: psychiatric disorders",
   "summary": "A man with established psychosis who recognises early relapse and asks to restart treatment is doing the right thing. Assess mental state and risk today, get his mental-health team to review him urgently, and set up the physical baseline so a restart is safe.",
   "points": [
    {
     "h": "Relapse route",
     "t": "NICE CG178 [1]: a person with an established diagnosis who shows signs of relapse should be referred back to secondary care (crisis team or community mental health team). The urgency depends on risk and how far the relapse has progressed."
    },
    {
     "h": "Assess now",
     "t": "Current symptoms (sleep, suspiciousness, the “thoughts”), insight, function, substance use, and risk to self and others including command hallucinations. Acute risk means same-day crisis-team contact, not a routine referral."
    },
    {
     "h": "Who prescribes",
     "t": "NHS England 2018 [2]: the clinician who starts or changes a medicine takes responsibility for it until any agreed transfer. After months off treatment with relapse, the choice of drug and dose sits with the specialist; the GP can prescribe once that is agreed."
    },
    {
     "h": "Physical baseline",
     "t": "CG178 [1]: before an antipsychotic, record weight (BMI), waist, pulse and blood pressure, fasting glucose, HbA1c, lipids, prolactin, movement disorders, and diet and activity. ECG if the product information requires it, examination finds cardiovascular risk, there is personal cardiovascular history, or the person is being admitted."
    },
    {
     "h": "Ongoing monitoring",
     "t": "CG178 [1]: weight weekly for the first 6 weeks, then at 12 weeks, 1 year and yearly; pulse, BP, glucose, HbA1c and lipids at 12 weeks, 1 year and yearly. Primary care holds the annual physical-health review."
    },
    {
     "h": "Choice of drug",
     "t": "CG178 [1] names no preferred antipsychotic: choose with the person, driven by side effects (metabolic, sedation, sexual, extrapyramidal, akathisia) and previous response. A long-acting injection is an option where the person prefers it. Clozapine is specialist-only with mandatory blood monitoring (BNF [3])."
    },
    {
     "h": "Driving",
     "t": "DVLA [4]: psychotic illness has notification rules for Group 1 and Group 2 licences, and he should not drive if symptoms affect his driving. Check the current DVLA guidance."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Dominic, I’m Dr Okafor. Thanks for getting in touch. Tell me what’s been happening.",
    "dom": "rto",
    "why": "Open start"
   },
   {
    "who": "pt",
    "text": "I stopped my antipsychotic a few months back — felt fine and hated the side effects. The last couple of weeks it’s creeping back. The thoughts, not sleeping, getting suspicious. I want to go back on it before it gets bad. Can you just prescribe it today?"
   },
   {
    "who": "dr",
    "text": "First, well done for spotting this so early and reaching out — that’s exactly the right thing to do. I want to help you get back on treatment quickly and safely. Can I ask some questions about how things are right now, and then we’ll agree the fastest safe route?",
    "dom": "rto",
    "why": "Validates insight and sets the agenda honestly"
   },
   {
    "who": "pt",
    "text": "Yeah, okay. As long as it’s quick."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about the thoughts that are coming back — what are they like?",
    "dom": "tasks",
    "why": "Explores current psychotic symptoms"
   },
   {
    "who": "pt",
    "text": "Same as before, the start of it. Feeling people are watching me, talking about me. I know it’s the illness, but it’s getting louder."
   },
   {
    "who": "dr",
    "text": "Are you hearing any voices, and if so, are they telling you to do anything?",
    "dom": "tasks",
    "why": "Asks directly about command hallucinations"
   },
   {
    "who": "pt",
    "text": "Not voices. Not yet."
   },
   {
    "who": "dr",
    "text": "I ask everyone this: have you had any thoughts of harming yourself, or of harming anyone else because of what you’re feeling?",
    "dom": "tasks",
    "why": "Direct risk assessment to self and others"
   },
   {
    "who": "pt",
    "text": "No. Nothing like that. That’s why I want to catch it now."
   },
   {
    "who": "dr",
    "text": "How’s your sleep, and are you managing day to day — eating, looking after yourself?",
    "dom": "tasks",
    "why": "Assesses function and self-care"
   },
   {
    "who": "pt",
    "text": "Sleep’s bad — a few hours. I’m getting by."
   },
   {
    "who": "dr",
    "text": "Any alcohol or drugs, including cannabis, recently?",
    "dom": "tasks",
    "why": "Screens a common relapse precipitant"
   },
   {
    "who": "pt",
    "text": "Nothing new, no."
   },
   {
    "who": "dr",
    "text": "Thanks. If that ever changes, tell me or your team without worrying about being judged — it can affect how the medicine works.",
    "dom": "rto",
    "why": "Non-judgemental, keeps the door open"
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said you hated the side effects. Which ones bothered you most?",
    "dom": "rto",
    "why": "Explores why he stopped"
   },
   {
    "who": "pt",
    "text": "I felt like a zombie, and the weight. That’s why I stopped."
   },
   {
    "who": "dr",
    "text": "That’s really important, because it shapes what we choose this time. What worries you most about things right now?",
    "dom": "rto",
    "why": "Elicits concerns"
   },
   {
    "who": "pt",
    "text": "Ending up back in hospital. Losing control. Last time was awful."
   },
   {
    "who": "dr",
    "text": "That makes complete sense, and it’s exactly why acting early is so valuable. What were you hoping would happen today?",
    "dom": "rto",
    "why": "Links the fear to the plan and elicits expectations"
   },
   {
    "who": "pt",
    "text": "Just the prescription, so I can get on with it."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s my honest thinking. You’ve been off it for months, the warning signs are back, and the side effects were bad enough to stop you. Choosing the right medicine and dose now is a specialist decision, and your mental-health team can see you quickly.",
    "dom": "tasks",
    "why": "Explains why restart needs specialist input"
   },
   {
    "who": "pt",
    "text": "So you won’t prescribe it?"
   },
   {
    "who": "dr",
    "text": "I’m not saying no. I’m saying I want it right. I’ll contact your team today and ask for an urgent review. If they advise restarting your previous medicine or a different one, I can prescribe it as soon as it’s agreed, so you’re not waiting.",
    "dom": "rto",
    "why": "Keeps him engaged: not a refusal, a faster safe route"
   },
   {
    "who": "pt",
    "text": "How long will that take?"
   },
   {
    "who": "dr",
    "text": "I’ll ask for days, not weeks, and I’ll tell them you’re asking for help early. If things get worse before then, the crisis team can see you the same day.",
    "dom": "tasks",
    "why": "Escalates urgency matched to risk"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "While we wait, I’d like some baseline checks that these medicines need: weight, waist, blood pressure and pulse, and blood tests for sugar, cholesterol and a hormone called prolactin. We may also do a heart tracing, depending on the medicine and your heart risk.",
    "dom": "tasks",
    "why": "Arranges CG178 baseline monitoring"
   },
   {
    "who": "pt",
    "text": "Fine, if it gets me on it."
   },
   {
    "who": "dr",
    "text": "And I’ll tell your team about the zombie feeling and the weight, so they can pick something with fewer of those effects — or talk to you about an injection if you’d prefer that to daily tablets.",
    "dom": "tasks",
    "why": "Shares side-effect history to guide a sustainable choice"
   },
   {
    "who": "pt",
    "text": "I didn’t know there was a choice."
   },
   {
    "who": "dr",
    "text": "There is, and your view counts. One more thing: are you driving at the moment?",
    "dom": "tasks",
    "why": "Raises DVLA fitness to drive neutrally"
   },
   {
    "who": "pt",
    "text": "Why do you ask?"
   },
   {
    "who": "dr",
    "text": "Because with your sleep this poor and the thoughts coming back, if you do drive, please don’t until your team has reviewed you. We can go through the DVLA rules together once you’re settled.",
    "dom": "gs",
    "why": "Clear, proportionate driving advice"
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If the thoughts get stronger, voices start, you stop sleeping altogether, or you ever feel unsafe or someone is worried about you, contact the crisis line or 111 and choose the mental-health option straight away, or go to A&E. I’ll text you the numbers.",
    "dom": "gs",
    "why": "Specific crisis safety-net"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "Can you tell me the plan in your own words?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "You’re ringing my team today for a quick review, I’ll do the bloods and checks, no driving, and crisis line if it gets worse."
   },
   {
    "who": "dr",
    "text": "Spot on. I’ll call you in two days to check the team has been in touch.",
    "dom": "gs",
    "why": "Defined follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; affirmed his early help-seeking before discussing the request.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Sleep, self-care, work and daily function, support, substance use, and driving.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I hated the side effects” and “before it gets bad” and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a GP prescription today), concern (hospital, losing control, side effects), expectation (quick restart).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "CG178 baseline: weight, waist, pulse, BP, fasting glucose, HbA1c, lipids, prolactin, movement disorders; ECG where indicated.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Early relapse of established psychosis versus substance-related symptoms or an organic cause.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Direct questions on self-harm, harm to others and command hallucinations; crisis route if risk rises.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named early relapse with good insight and low immediate risk on current history.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Urgent CMHT review requested today; GP to prescribe once the specialist choice is agreed; baseline checks booked.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Side-effect history passed to the team; long-acting option raised; substance use asked without judgement.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Crisis contacts given; no driving until reviewed; follow-up call in two days.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Dominic Healy",
    "age": "38 years · male",
    "pmh": [
     "Psychosis / schizophrenia"
    ],
    "meds": [
     "Antipsychotic on record — not issued for several months"
    ],
    "allergy": "None recorded",
    "recent": "⚠ No antipsychotic issued for several months. No recent physical-health monitoring on file.",
    "reason": "“I stopped my antipsychotic months ago — can you just prescribe it?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and affirm",
     "d": "He opens with a request. Praise the early help-seeking before anything else, then agree the agenda."
    },
    {
     "t": "1–4",
     "h": "Mental state and risk",
     "d": "Current symptoms, voices and commands, harm to self or others, sleep, self-care, substances."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "Why he stopped (sedation, weight), fear of hospital and losing control, wish for a quick restart."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Specialist choice after months off; GP contacts the team today and prescribes once agreed. Baseline checks. Side-effect history passed on. Driving."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Crisis contacts, teach-back, follow-up call in two days."
    }
   ],
   "wordPics": {
    "fail": "Either prints the old prescription without any assessment or monitoring, or says flatly “you need to see psychiatry” and ends the call; no risk questions; ignores the side effects that made him stop.",
    "pass": "Praises his insight, asks about risk and symptoms, explains why the mental-health team should guide the restart, requests an urgent review, and arranges baseline checks with a crisis safety-net.",
    "exc": "All of the above, plus: frames the referral as the faster safe route and offers to prescribe once agreed; uses his side-effect history to shape a better choice; raises a long-acting option; handles substance use and driving without judgement; teach-back and a dated follow-up."
   },
   "avoid": [
    {
     "dont": "“I can’t prescribe that — you’ll have to go back to psychiatry.”",
     "instead": "“I want to get you back on treatment quickly and safely. I’ll contact your team today, and I can prescribe as soon as we’ve agreed the right medicine.”",
     "why": "A flat refusal risks losing a man who is asking for help early."
    },
    {
     "dont": "“No problem, I’ll put the same tablets back on repeat.”",
     "instead": "“Before we restart, let’s check how you are right now and get the checks these medicines need.”",
     "why": "An unmonitored restart without risk assessment or specialist input is unsafe."
    },
    {
     "dont": "“You shouldn’t have stopped it in the first place.”",
     "instead": "“The side effects were clearly hard. Let’s make sure this time the medicine suits you.”",
     "why": "Blame damages trust and makes the next stop more likely."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Engagement",
     "t": "People who stop antipsychotics often do so because of side effects. A non-judgemental response keeps him engaged at the point he is asking for help."
    },
    {
     "h": "Substance use",
     "t": "Cannabis and other substances are common relapse precipitants. Ask, respect a refusal, and leave the door open."
    }
   ],
   "legal": [
    {
     "h": "DVLA",
     "t": "Psychotic illness has DVLA notification rules for Group 1 and Group 2 licences; advise him not to drive while symptoms affect his driving, and check current DVLA guidance."
    },
    {
     "h": "Capacity and confidentiality",
     "t": "He has insight and capacity. Share information with his mental-health team for his care; involve others only with consent unless risk rises."
    }
   ],
   "professional": [
    {
     "h": "Prescribing responsibility",
     "t": "NHS England (2018): the clinician who starts or changes a medicine is responsible until an agreed transfer. GMC Good practice in prescribing: prescribe only when you have adequate knowledge of the patient’s health and the medicine is serving his needs."
    },
    {
     "h": "Physical health",
     "t": "NICE CG178: primary care holds the annual physical-health check for people with psychosis; record baseline and follow-up monitoring."
    }
   ],
   "community": [
    {
     "h": "Crisis and support",
     "t": "Local crisis team, NHS 111 mental-health option, and peer support through Rethink Mental Illness or Mind."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Thoughts of harming self or others",
     "Command hallucinations",
     "Severe self-neglect or not sleeping at all",
     "Rapid escalation of paranoia"
    ],
    "psychosocial": [
     "Sleep, self-care and work",
     "Substance use, asked without judgement",
     "Support at home and driving"
    ],
    "ice": [
     "Idea: “The GP can just restart it today.”",
     "Concern: hospital, losing control, and the side effects",
     "Expectation: a quick prescription"
    ]
   },
   "diagnosis": "“This sounds like the early signs of your illness returning. You’ve spotted it early and you’re safe right now, which gives us time to do this properly and quickly.”",
   "diagnosisLay": "“Think of it as the smoke alarm going off before there’s a fire. You heard it. Now we want the right people to choose the right extinguisher quickly.”",
   "management": {
    "reflectIce": "“You’re worried about ending up in hospital, and you stopped because you felt like a zombie. Both of those are why I want your team to help choose the medicine this time.”",
    "psychosocial": "Frame the referral as speed, not refusal; share his side-effect history; raise a long-acting option; advise on driving and substance use without judgement.",
    "sharedPlan": [
     "Contact the CMHT today for urgent review; crisis team if risk rises",
     "GP to prescribe once the specialist choice is agreed",
     "CG178 baseline: weight, waist, pulse, BP, glucose, HbA1c, lipids, prolactin, movement disorders; ECG where indicated"
    ],
    "safetyNet": [
     "Crisis line, NHS 111 mental-health option or A&E if worse or unsafe",
     "Follow-up call in two days; no driving until reviewed"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Psychosis and schizophrenia",
    "s": "Case walkthrough · NICE CG178",
    "href": "../cases/psychosis-schizophrenia.html"
   },
   {
    "ic": "🗺️",
    "t": "Psychosis pathway",
    "s": "Visual algorithm · relapse and referral",
    "href": "algorithms/psychosis.html"
   },
   {
    "ic": "💠",
    "t": "Psychosis protocol",
    "s": "Baseline monitoring · shared care",
    "href": "management/psychosis-schizophrenia.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA fitness to drive",
    "s": "Psychiatric disorders",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed at either extreme: a bureaucratic refusal that loses the patient, or a repeat prescription without assessment. The marks are for holding speed and safety together.",
   "items": [
    {
     "dom": "rto",
     "fail": "Opening with “I can’t prescribe that” before hearing him out.",
     "why": "“Does not respond to the patient’s agenda.” He has done the right thing and is met with a barrier.",
     "fix": "Praise the early help-seeking first, then explain the route."
    },
    {
     "dom": "tasks",
     "fail": "No direct risk questions because he seems calm and insightful.",
     "why": "Insight does not remove risk. “Fails to assess risk” is a standard Tasks failure in mental-health stations.",
     "fix": "Ask plainly about harm to self, harm to others and command hallucinations."
    },
    {
     "dom": "tasks",
     "fail": "Reissuing the old antipsychotic on repeat today with no baseline checks.",
     "why": "NICE CG178 requires baseline physical monitoring, and after months off with relapse the choice is a specialist one.",
     "fix": "Contact the team today, offer to prescribe once agreed, and book the CG178 baseline."
    },
    {
     "dom": "tasks",
     "fail": "Ordering an ECG, FBC, U&E and LFTs as a reflex and missing prolactin, waist and movement disorders.",
     "why": "The CG178 baseline list is specific; the ECG depends on the drug and cardiovascular risk.",
     "fix": "Weight, waist, pulse, BP, fasting glucose, HbA1c, lipids, prolactin, movement disorders; ECG where indicated."
    },
    {
     "dom": "rto",
     "fail": "Ignoring “I hated the side effects”.",
     "why": "The reason he stopped is the reason he will stop again. Not exploring it loses Relating marks.",
     "fix": "“Which side effects bothered you most?” — then pass it to the team and mention alternatives."
    },
    {
     "dom": "gs",
     "fail": "Ending with “the team will be in touch” and no crisis plan.",
     "why": "A relapsing patient without crisis contacts or follow-up is an unsafe close.",
     "fix": "Crisis numbers, teach-back, and a follow-up call in two days."
    }
   ]
  }
 },
 "child-constipation": {
  "stem": {
   "name": "Maisie Cobb",
   "age": "5-year-old girl",
   "pmh": [
    "No significant past medical history recorded",
    "Toilet-trained"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "None recorded",
   "recent": "Soiling at school and at home. The school has raised it with her mother. Telling her off has made no difference.",
   "reason": "Mother wants advice on how to stop Maisie “dirtying her pants”."
  },
  "knowledge": {
   "guideline": "NICE CG99 (2010, updated 2017) — Constipation in children and young people · NICE CG89 — Child maltreatment: when to suspect · BNFC",
   "summary": "Soiling in a toilet-trained child is overflow from faecal impaction until shown otherwise. Remove the blame, screen for red flags, then disimpact before maintenance and continue treatment for months.",
   "points": [
    {
     "h": "Overflow, not behaviour",
     "t": "Hard stool loads the rectum, the rectum stretches and loses sensation, and softer stool leaks around it. The child usually cannot feel it or stop it. Saying so clearly is the first treatment."
    },
    {
     "h": "History that makes the diagnosis",
     "t": "NICE CG99: stool frequency and form (Bristol scale), pain or straining, large stools, withholding behaviour, overflow soiling, onset and triggers (toilet training, starting school, a fissure), diet and fluids, and growth."
    },
    {
     "h": "Red flags",
     "t": "NICE CG99: constipation from birth or the first few weeks, meconium passed more than 48 hours after birth in a term baby, ribbon stools, abnormal lower-limb neurology or spine, gross distension with vomiting, abnormal anus. Faltering growth is an amber flag — test for coeliac disease and hypothyroidism. No digital rectal examination in primary care."
    },
    {
     "h": "Disimpaction first",
     "t": "NICE CG99: macrogol (polyethylene glycol 3350 with electrolytes) in an escalating dose as first line (dose per BNFC). Add a stimulant laxative if it has not worked after 2 weeks. Warn the family that soiling and tummy pain may increase at first."
    },
    {
     "h": "Maintenance, not a short course",
     "t": "NICE CG99: continue the maintenance dose for several weeks after a regular bowel habit is established, then reduce gradually. Many children need laxatives for several months. Do not use dietary change alone as first-line treatment."
    },
    {
     "h": "Behaviour and safeguarding",
     "t": "NICE CG99: scheduled toileting, a bowel diary, and rewards for agreed behaviours such as sitting on the toilet, not for clean pants. NICE CG89 applies if there are wider concerns about maltreatment or punitive responses."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Cobb, thanks for calling. Tell me what’s been going on with Maisie.",
    "dom": "rto",
    "why": "Open question; lets the frustrated parent speak first"
   },
   {
    "who": "pt",
    "text": "I’m at the end of my tether. She keeps dirtying her pants — at school and at home. She’s 5, she’s toilet-trained, so she’s either being lazy or doing it for attention. The school have mentioned it. Telling her off does nothing."
   },
   {
    "who": "dr",
    "text": "That sounds exhausting, and having the school involved makes it harder. I want to understand it properly, because there’s often a very physical reason behind this. Can I ask some questions about her bowels, then explain what I think and make a plan with you?",
    "dom": "gs",
    "why": "Validates, hints at a medical explanation and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Go on."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When she does a proper poo on the toilet, what is it like — hard, big, painful? And how often does she go?",
    "dom": "tasks",
    "why": "Stool form and frequency — the core of the CG99 history"
   },
   {
    "who": "pt",
    "text": "Not every day. When she goes it’s hard, sometimes huge. She cries sometimes."
   },
   {
    "who": "dr",
    "text": "Does she ever seem to hold on — crossing her legs, standing stiffly, hiding, or refusing to sit on the toilet?",
    "dom": "tasks",
    "why": "Withholding behaviour"
   },
   {
    "who": "pt",
    "text": "Now you say it, yes. She seems to hold on, then says she doesn’t need to go."
   },
   {
    "who": "dr",
    "text": "And the soiling itself — is it soft or smeary rather than a full poo? Does she seem to notice when it happens?",
    "dom": "tasks",
    "why": "Characterises overflow soiling"
   },
   {
    "who": "pt",
    "text": "Soft, smeary. She says she didn’t know. I thought she was lying."
   },
   {
    "who": "dr",
    "text": "I’d also like to check a few things from when she was small. Did she have problems with her bowels from birth, or was there any delay passing her first poo as a newborn? Has she been growing normally? Any swollen tummy with vomiting, or problems with her legs or walking?",
    "dom": "tasks",
    "why": "Screens the CG99 red flags"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. She’s always been healthy and she’s growing fine."
   },
   {
    "who": "dr",
    "text": "What’s her eating and drinking like, and how does she get on with the toilets at school?",
    "dom": "tasks",
    "why": "Diet, fluids and school-toilet avoidance"
   },
   {
    "who": "pt",
    "text": "I’m not sure about school — she doesn’t like to talk about it."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said she might be doing it for attention. What else has been going through your mind about it?",
    "dom": "rto",
    "why": "Explores the parent’s idea and what sits beneath the anger"
   },
   {
    "who": "pt",
    "text": "Honestly, I feel like a bad mum. The school look at me like I’m not coping. And I keep telling her off, which I feel awful about."
   },
   {
    "who": "dr",
    "text": "Thank you for being so honest. You’re clearly trying hard, and anyone would be worn down by this. What were you hoping I’d be able to do today?",
    "dom": "rto",
    "why": "Responds to guilt without judgement and elicits expectations"
   },
   {
    "who": "pt",
    "text": "Tell me how to make her stop."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s the key thing: I don’t think Maisie is being naughty or lazy at all. When a child gets constipated, hard poo builds up and stretches the end of the bowel. It stops sending the “I need to go” message, and softer poo leaks around the blockage without her feeling it. She genuinely can’t control it.",
    "dom": "tasks",
    "why": "The central reframe: overflow from impaction, not behaviour"
   },
   {
    "who": "pt",
    "text": "So she really didn’t know?"
   },
   {
    "who": "dr",
    "text": "She really didn’t. And the hard poos hurt, so she holds on, which makes the next one harder — it’s a cycle, not a choice. The good news is it’s very common and very treatable. I’d like to see her in person this week to feel her tummy, look at her bottom for any small tear, check her back and plot her growth. I won’t need to do an internal examination.",
    "dom": "tasks",
    "why": "Explains the pain-withholding cycle and arranges the examination the video cannot do"
   },
   {
    "who": "pt",
    "text": "That’s a relief, the internal bit."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Treatment has two stages. First we clear the blockage with a laxative powder mixed into a drink, starting low and building up each day until it clears. Now, an important warning: for the first few days the soiling and tummy ache may get worse. That means it’s working — please don’t stop.",
    "dom": "tasks",
    "why": "Disimpaction first, with the CG99 warning about temporary worsening"
   },
   {
    "who": "pt",
    "text": "Worse? Right before I’m back at the school gate?"
   },
   {
    "who": "dr",
    "text": "I know — so it might help to start at the weekend, and I can write a note for school explaining it’s a medical problem and she needs easy access to the toilet. Would that help?",
    "dom": "rto",
    "why": "Responds to a practical barrier and involves school supportively"
   },
   {
    "who": "pt",
    "text": "Yes, that would really help."
   },
   {
    "who": "dr",
    "text": "Second stage: once she’s cleared, she stays on a daily dose to keep her poos soft — usually for months, not weeks, and we reduce it slowly. Stopping early is the commonest reason it comes back. Alongside that, sitting on the toilet for a few minutes after meals with her feet on a small step, and a sticker chart for sitting — not for clean pants, because that part isn’t in her control yet.",
    "dom": "tasks",
    "why": "Maintenance for months plus behavioural measures that reward behaviour, not outcome"
   },
   {
    "who": "pt",
    "text": "And no more telling her off, I suppose."
   },
   {
    "who": "dr",
    "text": "That would help her most. Praise for sitting, no blame for accidents. Could Maisie hear some of this from me too, so she knows it isn’t her fault?",
    "dom": "rto",
    "why": "Protects the child from shame and involves her positively"
   },
   {
    "who": "pt",
    "text": "Yes, I think she’d like that."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Before we finish, can you tell me in your own words what the plan is?",
    "dom": "rto",
    "why": "Teach-back to secure adherence"
   },
   {
    "who": "pt",
    "text": "Clear-out first, building up the powder, it may get worse for a few days. Then a daily dose for months. Toilet after meals with a step, sticker chart for sitting. No telling off."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll see her this week to examine her and go through the doses, then review two weeks after starting. Contact us sooner if she has tummy pain with vomiting, a swollen tummy, blood in her poo, weight loss, or if the clear-out hasn’t worked after two weeks.",
    "dom": "gs",
    "why": "Specific safety-net, review points and escalation if disimpaction fails"
   },
   {
    "who": "pt",
    "text": "Thank you. I came in thinking she was being difficult."
   },
   {
    "who": "dr",
    "text": "You came in because you care about her, and you did the right thing. We’ll get there together — it takes patience, but it works.",
    "dom": "gs",
    "why": "Closes with hope and realistic expectations"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let mother voice her frustration and her theory of laziness or attention-seeking without interrupting.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "School involvement and toilet avoidance, family stress, punitive responses, the mother’s guilt and coping.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “she says she didn’t know” and “I thought she was lying” and used them to reframe.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (behavioural); concern (being judged as a bad mother, guilt about telling her off); expectation (make her stop).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Face-to-face abdominal and perianal inspection, spine and lower-limb check, growth plotted; no digital rectal examination; no routine tests.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Functional constipation with overflow versus organic causes (Hirschsprung’s, spinal, coeliac, hypothyroidism) and emotional triggers.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "CG99 red flags: from-birth onset, delayed meconium, ribbon stools, neurology, distension with vomiting; faltering growth as amber.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Functional constipation with faecal impaction and overflow soiling, explained in plain language.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Escalating macrogol disimpaction (dose per BNFC), warning of temporary worsening, maintenance for months, scheduled toileting and rewards for sitting.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "School-toilet access letter, fluids and diet as adjuncts not first-line, possible fissure, emotional impact on the child.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review two weeks after starting; add a stimulant if not disimpacted; named red flags; do not stop early.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Maisie Cobb",
    "age": "5 years · female",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "None recorded",
    "recent": "Video appointment booked by mother. Soiling at school and home; school has raised concerns.",
    "reason": "“She’s soiling her pants at school — I think she’s just being lazy or naughty.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "Let the frustration out. Don’t correct “lazy” yet — gather the evidence first."
    },
    {
     "t": "1–4",
     "h": "Bowel history and red flags",
     "d": "Stool form and frequency, pain, withholding, soft smeary soiling she doesn’t notice. From-birth onset, meconium, growth, distension, legs and back. Diet, fluids, school toilets."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "What else has she been thinking? Guilt and feeling judged sit under the anger."
    },
    {
     "t": "6–10",
     "h": "Reframe and plan",
     "d": "Overflow, not naughtiness. Examine in person. Disimpact first with the warning, then maintenance for months, toilet sitting and rewards for sitting."
    },
    {
     "t": "10–12",
     "h": "Teach-back and safety-net",
     "d": "Her words for the plan. Review at two weeks; red flags; school letter."
    }
   ],
   "wordPics": {
    "fail": "Accepts the behavioural framing or gives parenting tips; no bowel history; no red-flag screen; starts a low maintenance dose in an impacted child with no warning of worsening; no plan for how long to continue.",
    "pass": "Takes a focused bowel history, screens red flags, explains overflow, prescribes macrogol disimpaction then maintenance, gives toileting advice and a follow-up.",
    "exc": "All of the above, plus: uses mother’s own words (“she says she didn’t know”) to reframe; responds to her guilt; warns of temporary worsening and plans around school; stresses months of maintenance; rewards behaviour not outcome; involves Maisie so she hears it is not her fault."
   },
   "avoid": [
    {
     "dont": "“Have you tried a star chart for clean pants?”",
     "instead": "“A sticker for sitting on the toilet after meals — the clean pants will follow once the bowel recovers.”",
     "why": "Rewarding an outcome the child cannot control adds failure and shame."
    },
    {
     "dont": "“Give her more fruit and water and it should sort itself out.”",
     "instead": "“We need to clear the blockage with medicine first — diet helps alongside, but on its own it won’t shift it.”",
     "why": "NICE CG99 advises against dietary change alone as first-line treatment."
    },
    {
     "dont": "“Stop the laxative once she’s clean for a week.”",
     "instead": "“She’ll stay on a daily dose for months, and we’ll reduce it slowly together.”",
     "why": "Stopping early is the commonest cause of relapse."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "School",
     "t": "Toilet avoidance at school is a common trigger. A letter explaining the medical problem and asking for easy toilet access and discreet help with changing supports treatment and reduces shame."
    },
    {
     "h": "Family stress",
     "t": "Soiling strains parent–child relationships. Punitive responses worsen withholding; the plan should reduce conflict at home."
    }
   ],
   "legal": [
    {
     "h": "Safeguarding awareness",
     "t": "NICE CG89: consider maltreatment where there are wider concerns — punitive or humiliating responses, or an unexplained change in behaviour. Here, the repeated telling off calls for support and education; escalate only if concerns persist or grow."
    }
   ],
   "professional": [
    {
     "h": "Communicating with school",
     "t": "Share information with school with the parent’s consent and only what is needed (GMC Confidentiality, 2017)."
    },
    {
     "h": "Involving the child",
     "t": "Explain to Maisie at her level that it is not her fault. Children’s views should be sought in decisions about them (GMC 0–18 years guidance)."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "School nurse and health visitor or continence services can support toileting programmes. ERIC, The Children’s Bowel and Bladder Charity, provides family resources."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Constipation from birth or first weeks; meconium delayed beyond 48 hours in a term baby (Hirschsprung’s)",
     "Ribbon stools, gross distension with vomiting, abnormal leg neurology or spine, abnormal anus",
     "Faltering growth (amber — coeliac and thyroid tests); concerns about maltreatment"
    ],
    "psychosocial": [
     "School toilet avoidance and the school’s response",
     "Punitive responses at home and the mother’s guilt",
     "Impact on Maisie’s confidence and friendships"
    ],
    "ice": [
     "Idea: “She’s being lazy or doing it for attention”",
     "Concern: being seen as a bad mother; guilt about telling her off",
     "Expectation: “Tell me how to make her stop”"
    ]
   },
   "diagnosis": "Functional constipation with faecal impaction and overflow soiling. No red flags on history; confirm on examination (abdomen, perianal inspection, spine, growth) without a digital rectal examination.",
   "diagnosisLay": "“Hard poo has built up and stretched the end of her bowel, so it stops telling her when she needs to go. Softer poo leaks around it without her feeling it. It isn’t naughtiness — she can’t control it.”",
   "management": {
    "reflectIce": "“You thought she was doing it on purpose — and it’s completely understandable you felt that. What she told you, that she didn’t know, is actually the truth, and that’s good news because it means it’s fixable.”",
    "psychosocial": "Lift blame from both mother and child; plan disimpaction around school; offer a school letter; replace telling off with praise for sitting.",
    "sharedPlan": [
     "Escalating macrogol disimpaction (dose per BNFC); warn soiling may worsen briefly",
     "Maintenance macrogol for months, reduced gradually; stimulant if disimpaction fails at 2 weeks",
     "Toilet sitting after meals with a footstool; rewards for sitting; fluids and diet alongside"
    ],
    "safetyNet": [
     "Review two weeks after starting, then regularly through maintenance",
     "Return sooner for vomiting, distension, blood in the stool, weight loss or failure to clear"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Constipation in children",
    "s": "Case walkthrough · NICE CG99",
    "href": "../cases/constipation-children.html"
   },
   {
    "ic": "💠",
    "t": "Constipation in children protocol",
    "s": "Disimpaction · maintenance · red flags",
    "href": "management/constipation-child.html"
   },
   {
    "ic": "🗺️",
    "t": "Abdominal pain in children",
    "s": "Visual algorithm · organic versus functional",
    "href": "algorithms/abdominal-pain-children.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is about a reframe. Candidates who know the macrogol regimen still fail if they let the “naughty” framing stand, skip the red flags, or send the family away with a treatment that is set up to fail.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Offering parenting strategies for “behavioural” soiling without taking a bowel history.",
     "why": "Missing overflow from impaction is a diagnostic failure; the history that makes it takes two minutes.",
     "fix": "Ask about hard or large stools, pain, withholding and whether she notices the soiling — then name overflow."
    },
    {
     "dom": "rto",
     "fail": "Correcting the mother bluntly: “She’s not naughty, she’s constipated.”",
     "why": "It lands as blame on the parent, who then disengages. The anger covers guilt and feeling judged.",
     "fix": "Validate first, explore what she has been thinking, then explain the mechanism using her own observations."
    },
    {
     "dom": "tasks",
     "fail": "Starting a low daily laxative dose without disimpacting.",
     "why": "NICE CG99 puts disimpaction first. A maintenance dose in a loaded rectum increases leakage and the family abandons treatment.",
     "fix": "Escalating macrogol until cleared, then maintenance — and warn that soiling may worsen at first."
    },
    {
     "dom": "tasks",
     "fail": "No red-flag screen, or a plan to do a rectal examination.",
     "why": "CG99 red flags must be asked; digital rectal examination is not done in primary care.",
     "fix": "From-birth onset, meconium, ribbon stools, growth, distension with vomiting, legs and back — then inspect, don’t examine internally."
    },
    {
     "dom": "gs",
     "fail": "Saying the laxatives can stop “once she’s better”.",
     "why": "Relapse after early stopping is the commonest cause of treatment failure; examiners look for realistic timescales.",
     "fix": "“Months, not weeks — and we’ll reduce slowly together.”"
    },
    {
     "dom": "rto",
     "fail": "Talking only to the mother about Maisie as a problem.",
     "why": "A child who has been told off repeatedly needs to hear it is not her fault; ignoring her misses a protective step.",
     "fix": "Offer to explain to Maisie directly, and recommend praise for sitting and no blame for accidents."
    }
   ]
  }
 },
 "child-ear-discharge": {
  "stem": {
   "name": "Theo Marsh",
   "age": "4-year-old boy",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "None recorded — confirm before prescribing",
   "recent": "Mother booked an urgent video appointment this morning: a few days of ear pain and a cold, then yellow discharge from one ear overnight. Now brighter in himself.",
   "reason": "Mother reports a “running ear” and is asking for antibiotics."
  },
  "knowledge": {
   "guideline": "NICE NG91 (2018, updated 2022) — Otitis media (acute): antimicrobial prescribing · NICE NG143 (2019) — Fever in under 5s · NICE NG240 (2024) — Meningitis (bacterial) and meningococcal disease · BNFC",
   "summary": "A discharging ear after a few days of earache is usually acute otitis media with a perforated drum. Assess well versus unwell first. Under NICE NG91, otorrhoea is one of the groups where an antibiotic is more likely to help, so no, back-up or immediate antibiotic are all reasonable options, chosen with the parent.",
   "points": [
    {
     "h": "Well or unwell first",
     "t": "Temperature, colour, activity, hydration and breathing using the NICE NG143 traffic-light table in a febrile child under 5. Brighter, eating and playing is reassuring. Otoscopy is needed to confirm the diagnosis, so a video assessment is followed by a face-to-face examination."
    },
    {
     "h": "What the discharge means",
     "t": "Pain that eases suddenly as discharge appears suggests the drum has perforated and released pus. The perforation usually heals once the infection settles; recheck it if discharge persists."
    },
    {
     "h": "Pain relief comes first",
     "t": "NICE NG91: most children improve within about 3 days without antibiotics, though it can last up to a week. Offer paracetamol or ibuprofen at the dose for age or weight (BNFC). Anaesthetic ear drops (phenazone with lidocaine) are not used when the drum is perforated or the ear is discharging."
    },
    {
     "h": "The NG91 antibiotic decision",
     "t": "Immediate antibiotic for the systemically very unwell, signs of a more serious illness, or high risk of complications. For otorrhoea, or under 2 with both ears affected, consider no, back-up or immediate antibiotic — these groups benefit more. Otherwise no antibiotic or a back-up to use if not improving within 3 days or worse at any time."
    },
    {
     "h": "If an antibiotic is used",
     "t": "NICE NG91: amoxicillin for 5 to 7 days, dose by age per NG91 and BNFC. Penicillin allergy: clarithromycin. Co-amoxiclav is the second choice if symptoms worsen after 2 to 3 days of the first choice."
    },
    {
     "h": "Complications to name",
     "t": "NICE NG91: refer to hospital for a severe systemic infection or an acute complication — mastoiditis, meningitis, intracranial abscess, sinus thrombosis or facial nerve paralysis. Meningitis features follow NICE NG240; a febrile child with red features follows NICE NG143."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, thanks for calling in — and hello Theo, I can see you there. Tell me what’s been happening, from the start.",
    "dom": "rto",
    "why": "Open question to the parent, and includes the child"
   },
   {
    "who": "pt",
    "text": "He’s been pulling at his ear for a few days with a cold, then this morning there was yellow gunk all over his pillow. He’s actually brighter now it’s come out. But that’s infection, isn’t it? He needs antibiotics — I don’t want it spreading."
   },
   {
    "who": "dr",
    "text": "That sounds like a rough night, and I can see why the pillow gave you a fright. I do want to answer the antibiotic question properly. First I’d like a few questions about how he is in himself, then I’ll explain what I think is going on, and we’ll decide together. Is that alright?",
    "dom": "gs",
    "why": "Acknowledges the worry and sets a clear structure"
   },
   {
    "who": "pt",
    "text": "Yes, fine."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "You said he’s brighter. What’s he doing this morning — is he eating, drinking, playing?",
    "dom": "tasks",
    "why": "Starts the well-versus-unwell assessment with function, not the discharge"
   },
   {
    "who": "pt",
    "text": "He’s had some breakfast and he’s been playing with his cars. The pain seemed to go when the gunk came."
   },
   {
    "who": "dr",
    "text": "That pattern helps a lot. Has he had a high temperature? And is he weeing as usual, with wet nappies or trips to the toilet?",
    "dom": "tasks",
    "why": "Traffic-light features: fever and hydration"
   },
   {
    "who": "pt",
    "text": "I haven’t measured it today. He’s weeing normally."
   },
   {
    "who": "dr",
    "text": "Could you bring him close to the camera for me? … Good colour, he’s chatting, his breathing looks easy. Theo, can you show me which ear was sore? … Mum, is there any swelling, redness or tenderness behind that ear, or does the ear look pushed forward?",
    "dom": "tasks",
    "why": "Remote observation plus a targeted mastoiditis check"
   },
   {
    "who": "pt",
    "text": "No, it looks the same as the other side."
   },
   {
    "who": "dr",
    "text": "And any headache, stiff neck, being unusually sleepy, a rash, or any drooping of his face?",
    "dom": "tasks",
    "why": "Screens for meningitis and facial nerve palsy"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Does he have any other health problems, or any allergy to medicines? Nothing is recorded on his notes.",
    "dom": "tasks",
    "why": "Checks high-risk comorbidity and allergy before any prescription"
   },
   {
    "who": "pt",
    "text": "No, nothing."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You mentioned it spreading. What were you picturing when you saw the pillow?",
    "dom": "rto",
    "why": "Explores the specific fear behind the antibiotic request"
   },
   {
    "who": "pt",
    "text": "That the infection’s got so bad it’s bursting out. That it could go to his brain or something. I didn’t sleep much either."
   },
   {
    "who": "dr",
    "text": "That’s a very natural thing to think when you see it, especially after a bad night. So your main hope today is something to stop it getting worse — is that fair?",
    "dom": "rto",
    "why": "Validates and confirms the expectation"
   },
   {
    "who": "pt",
    "text": "Yes. I just want to do something."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s what I think. The cold has blocked the tube behind his eardrum and it filled with infected fluid — a middle-ear infection. The pressure built up, the drum let go a tiny bit, and the fluid came out. That’s why his pain went and he perked up. It looks dramatic, but it’s common, and the small hole almost always heals on its own.",
    "dom": "tasks",
    "why": "Explains perforation and otorrhoea in plain language"
   },
   {
    "who": "pt",
    "text": "Oh. So it’s not getting worse?"
   },
   {
    "who": "dr",
    "text": "From what I can see, he’s a well boy. I can’t look inside his ear on a video, though, and I want to do that — can you bring him in this afternoon so I can check his ears, throat and chest and take his temperature?",
    "dom": "tasks",
    "why": "Recognises the limits of video; arranges the examination the diagnosis needs"
   },
   {
    "who": "pt",
    "text": "Yes, I can do that."
   },
   {
    "who": "dr",
    "text": "On antibiotics: most ear infections get better within about three days without them. But a discharging ear is one of the situations where antibiotics help more often, so the national guidance says it’s reasonable either way — no antibiotic, one to keep in reserve, or one to start now. If the examination fits, I’m happy to start amoxicillin today, since that’s what you’d prefer. Whatever we decide, the thing that makes him comfortable is pain relief.",
    "dom": "tasks",
    "why": "Applies NG91 accurately for otorrhoea and makes it a shared decision"
   },
   {
    "who": "pt",
    "text": "I would prefer to start it, yes. What about the pain relief?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Paracetamol, or ibuprofen, at the dose on the packet for his age, given regularly while he’s sore rather than only when he cries. Keep water out of that ear — no swimming, and a cotton-wool plug smeared with Vaseline in the bath — and don’t poke anything in to clean it. Just wipe the outside.",
    "dom": "tasks",
    "why": "Analgesia as the mainstay, plus practical care of a perforated ear"
   },
   {
    "who": "pt",
    "text": "Okay. How long will the gunk keep coming?"
   },
   {
    "who": "dr",
    "text": "Usually a few days. If it keeps running once the infection has settled, or you think his hearing isn’t right once he’s better, I’ll want to look again to check the drum has healed.",
    "dom": "gs",
    "why": "Sets the expected course and a follow-up trigger"
   },
   {
    "who": "pt",
    "text": "That makes sense."
   },
   {
    "who": "dr",
    "text": "Can I check it makes sense to you too? When someone at home asks what the doctor said, what will you tell them?",
    "dom": "rto",
    "why": "Teach-back without assuming family details"
   },
   {
    "who": "pt",
    "text": "That his eardrum burst to let the pressure out, which is why he’s better, and it’ll heal. Regular Calpol or ibuprofen, keep it dry, and maybe antibiotics after you’ve looked."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Perfect. Now the important part. Call 999 or go to A&E if he becomes very drowsy or hard to wake, has a stiff neck, a rash that doesn’t fade under a glass, or is struggling to breathe. Come back the same day if a swelling or redness appears behind the ear or the ear sticks out, his face droops, he has a high temperature that won’t settle, or he stops drinking.",
    "dom": "gs",
    "why": "Specific plain-language red flags for meningitis, mastoiditis and facial palsy"
   },
   {
    "who": "pt",
    "text": "Behind the ear, stiff neck, rash, face — got it."
   },
   {
    "who": "dr",
    "text": "And if the antibiotic has been started and he’s not getting better after two or three days, ring us. You did the right thing calling. I’ll see you both this afternoon — anything else before we finish?",
    "dom": "rto",
    "why": "Affirms the parent and closes with a clear plan"
   },
   {
    "who": "pt",
    "text": "No, that’s really helpful. Thank you."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question to mother; noticed the child on screen; let her describe the pillow, the few days of earache and the antibiotic request in her own words.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Bad night, parental exhaustion and the wish to “do something”; can she attend in person today.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “he’s brighter now” as the key clinical cue and “I don’t want it spreading” as the key emotional cue, and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (running ear = spreading infection); concern (it reaching his brain); expectation (antibiotics today).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "NG143 traffic-light features by video, then face-to-face otoscopy, throat, chest and temperature; no swab needed routinely.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "AOM with perforation versus otitis externa, and complications (mastoiditis, meningitis, facial palsy).",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Checked behind the ear, neck stiffness, drowsiness, rash, facial weakness, hydration and breathing.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Acute otitis media with probable perforation in a systemically well child, confirmed on examination.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "NG91 options for otorrhoea explained; shared decision on amoxicillin 5 to 7 days if confirmed; regular analgesia; keep the ear dry.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Checked allergy and high-risk conditions before prescribing; no decongestants, antihistamines or anaesthetic drops with a perforation.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 features, same-day features, review if not improving in 2 to 3 days, and recheck the drum if discharge persists.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Theo Marsh",
    "age": "4 years · male",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Urgent video slot booked by mother: earache and cold for a few days; ear discharge overnight. No previous ear problems recorded.",
    "reason": "“His ear’s been running all night — he needs antibiotics, doesn’t he?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "Let mother tell the story. The clinical gift is in her opening: “he’s brighter now the gunk’s come out”."
    },
    {
     "t": "1–4",
     "h": "Well or unwell",
     "d": "Eating, drinking, playing, weeing, temperature, breathing, colour on camera. Behind the ear, stiff neck, rash, drowsiness, facial droop. Allergy and comorbidity."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "What did she picture when she saw the pillow? Name the fear of spread before you explain anything."
    },
    {
     "t": "6–10",
     "h": "Explain and decide",
     "d": "Perforation explains the discharge and the relief. Arrange face-to-face otoscopy. NG91 options for otorrhoea as a shared decision. Pain relief and dry-ear advice."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 and same-day features in plain words; review if not improving; recheck if discharge persists. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes over video without any well/unwell assessment, or refuses flatly and lectures on resistance; never explains the discharge; no pain-relief advice; no mention of mastoiditis or meningitis; mother leaves still believing the infection is “bursting out”.",
    "pass": "Assesses the child’s function and red flags, arranges examination, explains that the discharge means a perforation, makes an NG91-consistent antibiotic decision, advises regular analgesia and gives a basic safety-net.",
    "exc": "All of the above, plus: uses “he’s brighter” to reassure; states accurately that otorrhoea is a group where no, back-up or immediate antibiotic are all reasonable and lets mother share the choice; recognises what video cannot do; gives specific, memorable red flags and a clear review point; mother feels heard, not judged."
   },
   "avoid": [
    {
     "dont": "“Antibiotics don’t work for ear infections — they get better on their own.”",
     "instead": "“Most ear infections settle by themselves, but a discharging ear is one where antibiotics help more often — so let’s decide together once I’ve looked.”",
     "why": "A blanket refusal is both confrontational and inaccurate for otorrhoea under NICE NG91."
    },
    {
     "dont": "“Pus coming out means a nasty infection, so we’ll start antibiotics straight away.”",
     "instead": "“The discharge usually means the eardrum has released the pressure — that’s why he feels better.”",
     "why": "It confirms the mother’s fear and skips the assessment that the prescription should rest on."
    },
    {
     "dont": "“Any problems, just come back.”",
     "instead": "“Swelling behind the ear, a stiff neck, a rash that doesn’t fade, or very drowsy — that’s urgent.”",
     "why": "Non-specific safety-netting earns no credit; named complications do."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Parental worry and sleep",
     "t": "A frightening night drives the request. Acknowledging exhaustion and the wish to act builds trust faster than facts alone."
    },
    {
     "h": "Nursery and practical care",
     "t": "Keeping the ear dry (no swimming, care at bath time) and not cleaning inside the canal are practical points parents often miss."
    }
   ],
   "legal": [
    {
     "h": "Remote prescribing",
     "t": "GMC Good practice in proposing, prescribing, providing and managing medicines and devices (2021): prescribe remotely only when you have enough information to do so safely; otherwise arrange an examination."
    }
   ],
   "professional": [
    {
     "h": "Antimicrobial stewardship",
     "t": "NICE NG91 sets out when antibiotics help in acute otitis media. Following it — and explaining it — is good practice rather than rationing."
    },
    {
     "h": "Shared decision-making",
     "t": "GMC Decision making and consent (2020): where more than one option is reasonable, share the choice with the parent and record the discussion and safety-net."
    }
   ],
   "community": [
    {
     "h": "Community pharmacy",
     "t": "Pharmacists can advise on paracetamol and ibuprofen dosing for age and weight, and on when to seek further help."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Swelling, redness or tenderness behind the ear, or the ear pushed forward (mastoiditis) — hospital",
     "Drowsiness, neck stiffness, non-blanching rash, very unwell (meningitis) — 999",
     "Facial weakness, or NG143 red traffic-light features in a febrile child under 5"
    ],
    "psychosocial": [
     "A disturbed night for the whole family and an exhausted parent",
     "Practical ability to attend today for examination",
     "Past experience that may have taught her that discharge means antibiotics"
    ],
    "ice": [
     "Idea: “A running ear means the infection is bursting out”",
     "Concern: “It could spread to his brain”",
     "Expectation: antibiotics today"
    ]
   },
   "diagnosis": "Acute otitis media with a probable perforated eardrum in a systemically well child. Confirm with otoscopy; NICE NG91 lists otorrhoea as a group where no, back-up or immediate antibiotic are all reasonable.",
   "diagnosisLay": "“The cold blocked the tube behind his eardrum and it filled with infected fluid. The pressure made a tiny hole in the drum, the fluid came out, and that’s why the pain eased. The hole almost always heals by itself.”",
   "management": {
    "reflectIce": "“You were worried it was spreading — actually the discharge is his ear letting the pressure out, which is why he perked up. We’ll still keep a close eye for the rare signs that it is spreading.”",
    "psychosocial": "Acknowledge the bad night and the wish to do something; make the antibiotic decision together so mother leaves with a plan she owns, and arrange a convenient time for the examination.",
    "sharedPlan": [
     "Face-to-face examination today: otoscopy, throat, chest, temperature",
     "NG91 shared decision — amoxicillin 5 to 7 days if confirmed and chosen (dose by age per BNFC)",
     "Regular paracetamol or ibuprofen; keep the ear dry; nothing inside the canal"
    ],
    "safetyNet": [
     "999: drowsy, stiff neck, non-blanching rash, breathing difficulty",
     "Same day: swelling behind the ear, facial droop, persistent high fever, not drinking",
     "Review if not improving in 2 to 3 days, or discharge or hearing concern persists"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Otitis media and otitis externa",
    "s": "Protocol · NICE NG91 antibiotic tiers",
    "href": "management/otitis-media-externa.html"
   },
   {
    "ic": "🗺️",
    "t": "Otalgia pathway",
    "s": "Visual algorithm · the painful ear",
    "href": "algorithms/otalgia.html"
   },
   {
    "ic": "🗺️",
    "t": "Fever in children",
    "s": "Visual algorithm · NICE NG143 traffic light",
    "href": "algorithms/fever-children.html"
   },
   {
    "ic": "📋",
    "t": "Hearing loss",
    "s": "Case walkthrough · persistent perforation or hearing concern",
    "href": "../cases/hearing-loss.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you can make an evidence-based antibiotic decision with a worried parent, not whether you know amoxicillin. Candidates fail it by refusing, by prescribing reflexively, or by forgetting that a video call cannot look inside an ear.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Telling mother that antibiotics are never needed for ear infections.",
     "why": "NICE NG91 names otorrhoea as a group where antibiotics are more likely to help. A flat refusal is inaccurate management as well as poor relating.",
     "fix": "State the nuance: “Most ear infections settle alone, but with a discharging ear an antibiotic is a reasonable choice — let’s decide together.”"
    },
    {
     "dom": "tasks",
     "fail": "Prescribing on the strength of “yellow gunk” without asking how the child is or arranging an examination.",
     "why": "“Did not assess the severity of illness” and “inadequate data gathering” are standard failing statements. Otitis externa and complications look different on examination.",
     "fix": "Ask about eating, drinking, playing and weeing, observe on camera, check behind the ear, then arrange same-day otoscopy."
    },
    {
     "dom": "rto",
     "fail": "Treating “I don’t want it spreading” as a demand and answering it with statistics.",
     "why": "The fear of spread is the emotional hinge. Unexplored, it resurfaces as persistent requests however good the explanation.",
     "fix": "“What were you picturing when you saw the pillow?” — then explain the perforation as the answer to that fear."
    },
    {
     "dom": "tasks",
     "fail": "No pain-relief advice, or advising anaesthetic ear drops for a discharging ear.",
     "why": "NICE NG91 puts analgesia first, and phenazone with lidocaine drops are only for an intact drum without otorrhoea.",
     "fix": "Regular paracetamol or ibuprofen at the dose for age, dry-ear advice, nothing inside the canal."
    },
    {
     "dom": "gs",
     "fail": "Closing with “come back if he gets worse”.",
     "why": "Non-specific safety-netting fails the Global Skills domain; mastoiditis and meningitis are the complications examiners expect you to name.",
     "fix": "Name the signs: swelling behind the ear, a stiff neck, a rash that doesn’t fade, very drowsy, a drooping face — and give a review point at 2 to 3 days."
    },
    {
     "dom": "gs",
     "fail": "Spending eight minutes on ear history and never reaching the decision.",
     "why": "“Management plan insufficiently developed” is the commonest reason for failing a station.",
     "fix": "Have the well/unwell picture by minute 4 and be explaining by minute 6."
    }
   ]
  }
 },
 "child-enuresis": {
  "stem": {
   "name": "Rory Vaughan",
   "age": "7-year-old boy",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "None recorded",
   "recent": "Wets the bed most nights. Family has tried lifting him at night, telling him off and cutting down drinks, without success.",
   "reason": "Mother asking whether something is wrong with him; bedwetting is causing rows at home."
  },
  "knowledge": {
   "guideline": "NICE CG111 (2010) — Bedwetting in under 19s · NICE CG89 — Child maltreatment: when to suspect · NICE NG18 — Diabetes (type 1 and type 2) in children and young people · BNFC",
   "summary": "Bedwetting at 7 is common, involuntary and treatable. Remove the blame, look for contributors (constipation, daytime symptoms, UTI, diabetes, stressors), then choose an alarm for lasting cure or desmopressin for rapid, short-term control.",
   "points": [
    {
     "h": "Not his fault",
     "t": "NICE CG111: reassure that bedwetting is not the child’s fault and punitive measures should not be used. Do not exclude younger children from management on the basis of age alone."
    },
    {
     "h": "History that shapes treatment",
     "t": "NICE CG111: primary (never dry) or secondary (wetting after a period of being dry), frequency, daytime symptoms, fluid intake, constipation and soiling, developmental or emotional problems, family pressures, and the impact on the child."
    },
    {
     "h": "Tests only when indicated",
     "t": "NICE CG111: urinalysis is not routine. Test the urine if the wetting started in the last few days or weeks, there are daytime symptoms, signs of ill health, or symptoms of UTI or diabetes. New thirst, polyuria or weight loss needs a same-day glucose check (NICE NG18)."
    },
    {
     "h": "Basics first",
     "t": "NICE CG111: adequate drinks spread through the day, avoid caffeine, regular toileting including before bed, treat constipation. Lifting or waking may help in the short term but does not promote long-term dryness."
    },
    {
     "h": "Alarm or desmopressin",
     "t": "NICE CG111: an alarm is first-line for a motivated family when advice has not worked; review at 4 weeks and continue until at least 2 weeks of uninterrupted dry nights. Desmopressin when rapid or short-term control is the priority, or an alarm is unsuitable (dose per BNFC)."
    },
    {
     "h": "Desmopressin safety",
     "t": "BNFC: restrict fluid from 1 hour before to 8 hours after the dose because of the risk of hyponatraemia; omit the dose if the child is vomiting or has diarrhoea. Rewards for agreed behaviours, not for dry nights (NICE CG111)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Vaughan, and hello Rory. Thanks for coming on together. What would you like to talk about today?",
    "dom": "rto",
    "why": "Greets and includes the child from the start"
   },
   {
    "who": "pt",
    "text": "Rory’s 7 and still wetting the bed most nights. His dad says he’s far too old and should know better. We’ve tried lifting him, telling him off, taking away drinks — nothing works. Is there something wrong with him? It’s causing rows."
   },
   {
    "who": "dr",
    "text": "Thank you. Before anything else, Rory — lots of children your age wet the bed. It is not your fault, and it isn’t something you’re doing on purpose. Is it okay if I ask some questions, and some of them to you?",
    "dom": "rto",
    "why": "De-shames the child directly before gathering data"
   },
   {
    "who": "pt",
    "text": "(Rory nods.)"
   },
   {
    "who": "dr",
    "text": "Then I’ll explain what I think is going on, and we’ll make a plan that works for your family.",
    "dom": "gs",
    "why": "Sets the agenda"
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Has Rory ever been dry at night for a good stretch, say six months, or has it always been like this?",
    "dom": "tasks",
    "why": "Primary versus secondary enuresis"
   },
   {
    "who": "pt",
    "text": "He’s never really been dry at night."
   },
   {
    "who": "dr",
    "text": "Rory, in the daytime, do you ever have to rush to the toilet, or have little accidents?",
    "dom": "tasks",
    "why": "Daytime symptoms asked of the child"
   },
   {
    "who": "pt",
    "text": "(Rory) No."
   },
   {
    "who": "dr",
    "text": "And your poos — are they ever hard, or do they hurt?",
    "dom": "tasks",
    "why": "Constipation screen, a common reversible contributor"
   },
   {
    "who": "pt",
    "text": "(Rory shrugs.) Mum: I don’t really know — he goes on his own now."
   },
   {
    "who": "dr",
    "text": "That’s fine — we can keep a note for a week or two. Has he been extra thirsty lately, weeing a lot in the day, losing weight, or seeming tired and unwell?",
    "dom": "tasks",
    "why": "Diabetes screen"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "What does he usually drink in the day, and when? And has anything changed or been difficult for him recently — at school or at home?",
    "dom": "tasks",
    "why": "Fluids and psychosocial stressors"
   },
   {
    "who": "pt",
    "text": "We cut his drinks after tea. Nothing’s changed — apart from the arguing about this."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Rory, how does it make you feel?",
    "dom": "rto",
    "why": "Explores the impact on the child directly"
   },
   {
    "who": "pt",
    "text": "(Rory, quietly) Embarrassed. I don’t want anyone to know."
   },
   {
    "who": "dr",
    "text": "That makes sense, and thank you for telling me. It stays between us and your family. Mrs Vaughan, what’s been worrying you most?",
    "dom": "rto",
    "why": "Validates the child and moves to the parent’s concern"
   },
   {
    "who": "pt",
    "text": "That something’s wrong with him. And the rows — his dad gets so cross. I just want it to stop."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Nothing you’ve told me suggests anything serious. Bedwetting at 7 is common. Usually the body makes a lot of wee at night and the bladder signal isn’t yet strong enough to wake him. He’s asleep — he can’t choose to be dry, so telling off doesn’t help and can make it harder.",
    "dom": "tasks",
    "why": "Explains the mechanism and stops punitive measures"
   },
   {
    "who": "pt",
    "text": "So it really isn’t him being lazy?"
   },
   {
    "who": "dr",
    "text": "It really isn’t. There’s no need for a urine test today, because there are no daytime problems or signs of infection or diabetes. What I would like is a two-week diary — drinks, wees, poos and wet or dry nights. If the diary shows constipation, treating that sometimes fixes the wetting on its own.",
    "dom": "tasks",
    "why": "CG111-consistent testing and a diary to look for contributors"
   },
   {
    "who": "pt",
    "text": "We can do that."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The basics: plenty of drinks spread through the day rather than cutting them, avoid fizzy or caffeine drinks, a wee before bed, and stop lifting him. Lifting can give a dry sheet but doesn’t teach his body to wake.",
    "dom": "tasks",
    "why": "CG111 basic advice, replacing counterproductive measures"
   },
   {
    "who": "pt",
    "text": "Okay. And if that doesn’t work?"
   },
   {
    "who": "dr",
    "text": "Then there are two good options. A bedwetting alarm that goes off at the first drop and gradually teaches his brain to wake — it has the best long-term success but takes several weeks of teamwork. Or a tablet at bedtime called desmopressin that reduces the wee made overnight — quick, and useful for sleepovers, but it often comes back when stopped. With the tablet, he mustn’t drink from an hour before until the morning, because too much fluid with it can be dangerous.",
    "dom": "tasks",
    "why": "Alarm versus desmopressin by goal, with the key fluid safety rule"
   },
   {
    "who": "pt",
    "text": "Rory, what do you think?"
   },
   {
    "who": "pt",
    "text": "(Rory) The alarm. But not if it wakes everyone up."
   },
   {
    "who": "dr",
    "text": "Good thinking — we’ll talk about that at review. And a reward chart, Rory, but for the things you can do: drinking well in the day, a wee before bed, helping change the sheets. Not for dry nights, because they’ll come later. You’re the captain of this plan.",
    "dom": "rto",
    "why": "Rewards behaviours not outcomes; makes the child the owner"
   },
   {
    "who": "pt",
    "text": "(Rory smiles.)"
   },
   {
    "who": "dr",
    "text": "Mrs Vaughan, would it help if I wrote a short note for Rory’s dad explaining that this isn’t Rory’s fault and that telling off makes it harder? Encouragement at home matters as much as the alarm.",
    "dom": "rto",
    "why": "Addresses the family conflict without blaming the absent parent"
   },
   {
    "who": "pt",
    "text": "Yes, please. He might listen to a doctor."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Let’s review with the diary in two to three weeks. Contact us sooner if he becomes very thirsty, is weeing much more in the day, loses weight or seems unwell — that needs a same-day check. Also if he starts wetting in the day, or it hurts to wee.",
    "dom": "gs",
    "why": "Specific safety-net for diabetes and UTI with a defined review"
   },
   {
    "who": "pt",
    "text": "Thirsty, weight loss, daytime wetting. Got it."
   },
   {
    "who": "dr",
    "text": "Rory, what are you going to tell your dad about why this happens?",
    "dom": "rto",
    "why": "Teach-back from the child"
   },
   {
    "who": "pt",
    "text": "(Rory) That my body is still learning to wake up. And it’s not my fault."
   },
   {
    "who": "dr",
    "text": "Perfect. That’s exactly it.",
    "dom": "gs",
    "why": "Reinforces the key message and closes"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question to mother and child; let the mother describe what has been tried and the rows at home.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Father’s frustration, family conflict, punitive responses, school and home stressors, impact on Rory.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the child’s embarrassment and the mother’s “is there something wrong with him?”, and responded to both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (too old, should know better); concern (something wrong, family rows); expectation (make it stop).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Two-week bladder and bowel diary; urinalysis and glucose only when CG111 or NG18 features are present; examine if constipation or neurological concern.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Primary monosymptomatic enuresis versus daytime bladder dysfunction, constipation, UTI, diabetes and emotional triggers.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about thirst, polyuria, weight loss, daytime symptoms and secondary onset; safeguarding awareness given punitive responses.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Primary nocturnal enuresis without daytime symptoms, explained without blame.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "CG111 basics; stop lifting and punishment; alarm first-line if basics fail; desmopressin as an option with the fluid restriction explained.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Constipation looked for and treated if found; fluids spread through the day; father’s response addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review with diary in two to three weeks; same-day review for thirst, polyuria, weight loss; alarm review at 4 weeks if started.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people"
   ],
   "stem": {
    "name": "Rory Vaughan",
    "age": "7 years · male",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "None recorded",
    "recent": "Video appointment booked by mother; Rory attending with her. No previous consultations about continence recorded.",
    "reason": "“He’s still wetting the bed at 7 — his dad says he’s too old for this.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and de-shame",
     "d": "Say “not your fault” to Rory in the first minute. It changes the whole consultation."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Primary or secondary; daytime symptoms; poos; thirst, weight loss, polyuria; drinks; stressors. Ask Rory some questions directly."
    },
    {
     "t": "4–6",
     "h": "ICE from both",
     "d": "How Rory feels; what worries mum; the father’s frustration and the rows."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Why it happens; no test unless indicated; diary. Basics, stop lifting and punishment. Alarm versus desmopressin by goal. Rewards for behaviours."
    },
    {
     "t": "10–12",
     "h": "Safety-net and teach-back",
     "d": "Thirst, weight loss, daytime wetting. Review with diary. Rory explains it back."
    }
   ],
   "wordPics": {
    "fail": "Talks only to the mother; accepts the “too old” framing or offers no reassurance; misses the diabetes screen; prescribes desmopressin without the fluid rule; rewards dry nights; no follow-up.",
    "pass": "De-shames, takes a focused history including constipation and diabetes, gives CG111 basic advice, offers alarm or desmopressin appropriately and arranges review.",
    "exc": "All of the above, plus: speaks to Rory directly and early; lets him choose; rewards behaviours; explains desmopressin safety in plain words; tests only when indicated; gives the family a way to bring dad on side; Rory leaves less ashamed."
   },
   "avoid": [
    {
     "dont": "“He should be dry by now — let’s get to the bottom of it.”",
     "instead": "“Lots of children his age wet the bed. It isn’t his fault, and it’s very treatable.”",
     "why": "Reinforces the blame that is already harming him."
    },
    {
     "dont": "“Keep cutting his drinks in the evening.”",
     "instead": "“Plenty of drinks spread through the day, avoid fizzy or caffeine drinks, and a wee before bed.”",
     "why": "NICE CG111 advice centres on adequate daytime fluid, not restriction."
    },
    {
     "dont": "“Give him a sticker every dry night.”",
     "instead": "“Stickers for the things he can do — drinking well, a wee before bed, helping with the sheets.”",
     "why": "Rewarding dry nights punishes what he cannot yet control."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family conflict",
     "t": "Frustration and blame at home increase shame and can worsen wetting. Offering the family a clear explanation to share helps bring all carers on side."
    },
    {
     "h": "Sleepovers and school trips",
     "t": "Fear of discovery limits friendships. Desmopressin is useful for short-term control around these events."
    }
   ],
   "legal": [
    {
     "h": "Safeguarding awareness",
     "t": "NICE CG89: consider child maltreatment if a child is punished for wetting despite professional advice that it is involuntary. Advise clearly that it is involuntary and record that advice."
    }
   ],
   "professional": [
    {
     "h": "Involving the child",
     "t": "GMC 0–18 years guidance: involve children in decisions about their care at a level they understand. Let Rory help choose between options."
    },
    {
     "h": "Absent parent",
     "t": "Address the father’s view respectfully without criticising him in front of the child; offer written information for the family."
    }
   ],
   "community": [
    {
     "h": "Continence support",
     "t": "School nurse and local children’s continence services provide alarms and support. ERIC, The Children’s Bowel and Bladder Charity, has family and child resources."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Thirst, polyuria, weight loss or tiredness — same-day glucose for new type 1 diabetes",
     "Secondary onset, daytime wetting, dysuria — UTI, bladder dysfunction or emotional trigger",
     "Punitive responses or other concerns about the child’s welfare (NICE CG89)"
    ],
    "psychosocial": [
     "Father’s frustration and rows at home",
     "Rory’s embarrassment and fear of others knowing",
     "What has already been tried, and how motivated the family is for an alarm"
    ],
    "ice": [
     "Idea: “He’s too old for this and should know better”",
     "Concern: “Is there something wrong with him?”; the family rows",
     "Expectation: a way to make it stop"
    ]
   },
   "diagnosis": "Primary nocturnal enuresis without daytime symptoms. No features of UTI or diabetes, so no tests today; a bladder and bowel diary looks for constipation and fluid patterns.",
   "diagnosisLay": "“At night his body makes quite a lot of wee, and the signal from his bladder isn’t yet strong enough to wake him. He’s fast asleep — he can’t choose to be dry.”",
   "management": {
    "reflectIce": "“You asked whether something’s wrong with him — nothing you’ve told me suggests that. And Rory, being embarrassed makes total sense, but lots of children in your class will be dealing with the same thing.”",
    "psychosocial": "Stop punishment and lifting; give the family an explanation to share with Rory’s father; make Rory the owner of the plan and reward behaviours he controls.",
    "sharedPlan": [
     "Two-week diary; drinks spread through the day; avoid caffeine; wee before bed",
     "Treat constipation if the diary or examination suggests it",
     "Alarm first-line if the basics fail; desmopressin for rapid or short-term control, with the fluid restriction"
    ],
    "safetyNet": [
     "Same-day review for thirst, polyuria, weight loss or feeling unwell",
     "Review with the diary in two to three weeks; alarm review at 4 weeks if started"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Nocturnal enuresis",
    "s": "Case walkthrough · NICE CG111",
    "href": "../cases/enuresis.html"
   },
   {
    "ic": "💠",
    "t": "Nocturnal enuresis protocol",
    "s": "Alarm or desmopressin · fluid rules",
    "href": "management/nocturnal-enuresis.html"
   },
   {
    "ic": "🗺️",
    "t": "Daytime wetting in children",
    "s": "Visual algorithm · bladder dysfunction",
    "href": "algorithms/daytime-urinary-incontinence-children.html"
   },
   {
    "ic": "🗺️",
    "t": "Suspected diabetes in children",
    "s": "Visual algorithm · same-day glucose",
    "href": "algorithms/suspected-diabetes-children.html"
   }
  ],
  "pitfalls": {
   "intro": "This station rewards a consultation that removes shame from a child. Candidates know about alarms; they fail by talking over the child, missing diabetes, or giving desmopressin without its safety rule.",
   "items": [
    {
     "dom": "rto",
     "fail": "Talking only to the mother while Rory sits silently.",
     "why": "“Did not involve the child” is a recurring failing statement; the child’s shame is the centre of the case.",
     "fix": "Tell Rory it isn’t his fault in the first minute, ask him some questions directly, and let him help choose the plan."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about thirst, polyuria or weight loss.",
     "why": "New-onset type 1 diabetes can present with wetting; missing it is a serious-disease fail.",
     "fix": "One question covers it — and a same-day glucose if any are present."
    },
    {
     "dom": "tasks",
     "fail": "Endorsing evening fluid restriction and lifting.",
     "why": "NICE CG111 advises adequate drinks through the day and notes that lifting does not promote long-term dryness.",
     "fix": "“Drinks spread through the day, avoid caffeine, a wee before bed, and stop lifting.”"
    },
    {
     "dom": "tasks",
     "fail": "Offering desmopressin without the fluid restriction.",
     "why": "Hyponatraemia is the key safety issue with desmopressin; examiners expect it named in plain words.",
     "fix": "“No drinks from an hour before the tablet until the morning, and skip it if he’s being sick or has diarrhoea.”"
    },
    {
     "dom": "rto",
     "fail": "Criticising the father, or ignoring him entirely.",
     "why": "Blaming an absent parent in front of the child adds conflict; ignoring him leaves the punitive dynamic untouched.",
     "fix": "Offer an explanation the family can share: “It isn’t Rory’s fault, and encouragement works better than telling off.”"
    },
    {
     "dom": "gs",
     "fail": "Ending with “come back if it doesn’t get better”.",
     "why": "Vague follow-up and safety-netting fail Global Skills.",
     "fix": "Diary review in two to three weeks, alarm review at 4 weeks, and named same-day symptoms."
    }
   ]
  }
 },
 "child-obesity": {
  "stem": {
   "name": "Kai Pyle",
   "age": "9-year-old boy",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "None recorded",
   "recent": "Letter from the school measurement programme describing Kai’s weight as very overweight. Mother, Mrs Donna Pyle, booked the appointment; Kai is with her.",
   "reason": "Mother upset by the letter; wants to discuss it."
  },
  "knowledge": {
   "guideline": "NICE NG246 (2025) — Overweight and obesity management · NICE CG89 — Child maltreatment: when to suspect · National Child Measurement Programme (Office for Health Improvement and Disparities)",
   "summary": "In children, weight is judged by BMI centile for age and sex, not adult cut-offs. Most childhood obesity reflects family-wide habits; secondary causes are rare and usually come with short stature or developmental delay. The management is family-based, positive and free of blame.",
   "points": [
    {
     "h": "Measure on the right chart",
     "t": "NICE NG246: use BMI centiles on UK90 charts in children, not adult BMI. Overweight is at or above the 91st centile; obesity at or above the 98th centile. Plot height and weight and look at the trajectory."
    },
    {
     "h": "Look for a cause only when the pattern suggests one",
     "t": "Short stature or slowing height velocity, developmental delay, dysmorphic features, or very early-onset severe obesity suggest an endocrine or genetic cause and need paediatric assessment. A child who is growing along or above his height centile is reassuring."
    },
    {
     "h": "Comorbidity",
     "t": "NICE NG246: consider assessing comorbidities at or above the 98th centile — blood pressure, glucose and lipids, snoring and sleep apnoea, joint problems, acanthosis nigricans, and psychological wellbeing including bullying and low self-esteem."
    },
    {
     "h": "Family-based change",
     "t": "NICE NG246: family-based, multicomponent lifestyle interventions — diet, physical activity and behaviour change — are the core. For many growing children the aim is to slow weight gain while height catches up, not to diet."
    },
    {
     "h": "Language",
     "t": "Use neutral, person-first language focused on health; avoid blame and avoid words that stigmatise, especially with the child present. Ask permission before discussing weight."
    },
    {
     "h": "Wider concerns",
     "t": "Weight alone is not a safeguarding issue. NICE CG89 applies only where there are wider concerns about neglect, such as failure to engage with care for serious obesity-related harm."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Pyle, and hello Kai. Thanks for coming. What would you like to talk about today?",
    "dom": "rto",
    "why": "Open question, greets the child"
   },
   {
    "who": "pt",
    "text": "I’ll be honest, I’m fuming. The school sent this letter saying Kai’s obese — obese! He’s just a growing boy. I feel like they’re calling me a bad mother, and now he’s upset. I almost didn’t come. What are you going to say — put a 9-year-old on a diet?"
   },
   {
    "who": "dr",
    "text": "I can see that letter has really upset you both, and I’m glad you came anyway. Let me say straight away: I don’t think you’re a bad mum, and I’m not going to put Kai on a diet. Would it be okay to talk about what the letter means and whether there’s anything that would help Kai feel his best?",
    "dom": "rto",
    "why": "Defuses, removes blame, answers the diet fear and asks permission"
   },
   {
    "who": "pt",
    "text": "Fine. As long as nobody’s having a go."
   },
   {
    "who": "dr",
    "text": "Nobody is. I’ll ask a few questions about how Kai is and your family’s routines, then explain how we look at growth in children, and we’ll decide together what, if anything, to do.",
    "dom": "gs",
    "why": "Clear, non-threatening agenda"
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Kai, how are you doing in yourself? Is anyone giving you a hard time at school?",
    "dom": "rto",
    "why": "Checks the child’s wellbeing and bullying first"
   },
   {
    "who": "pt",
    "text": "(Kai, looking down) Sometimes. A couple of kids."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me, Kai. That’s not okay, and we’ll come back to it. Mrs Pyle, has he had any health problems — snoring or stopping breathing at night, sore knees or hips, or being very tired?",
    "dom": "tasks",
    "why": "Acknowledges bullying, then screens comorbidity"
   },
   {
    "who": "pt",
    "text": "Not that I’ve noticed."
   },
   {
    "who": "dr",
    "text": "And how has he grown over the years — is he tall for his age, or has his height ever slowed down? Any worries about his development or learning?",
    "dom": "tasks",
    "why": "Screens for red flags of a secondary cause"
   },
   {
    "who": "pt",
    "text": "He’s always been one of the taller ones. No problems at school with his work."
   },
   {
    "who": "dr",
    "text": "That’s helpful. Could you talk me through a normal day for the family — meals, drinks, how you get about, screens, bedtime? I ask everyone this; it’s about understanding, not judging.",
    "dom": "tasks",
    "why": "Whole-family lifestyle history framed without blame"
   },
   {
    "who": "pt",
    "text": "We’re busy. Everyone’s at work or school, we eat what’s quick, he’s on his tablet a fair bit. We drive most places. It’s not like we live on chips."
   },
   {
    "who": "dr",
    "text": "That sounds like most busy families. Is there anything he really enjoys doing that gets him moving?",
    "dom": "rto",
    "why": "Normalises and looks for positive levers"
   },
   {
    "who": "pt",
    "text": "(Kai) Football. I like football."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Mrs Pyle, when you read that letter, what went through your mind?",
    "dom": "rto",
    "why": "Explores the feelings under the anger"
   },
   {
    "who": "pt",
    "text": "That I’ve failed him. That everyone’s judging me. I just want him to be happy — I don’t want him obsessing about food."
   },
   {
    "who": "dr",
    "text": "Wanting him to be happy and relaxed about food is exactly the right goal, and it’s one we share. So what would you like to get out of today?",
    "dom": "rto",
    "why": "Allies with the mother’s values and elicits expectations"
   },
   {
    "who": "pt",
    "text": "I suppose to know if he’s actually alright."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "For children we don’t use the adult measure. We plot height and weight on a chart for his age and see how he’s tracking over time. I’d like the nurse to measure him properly this week, check his blood pressure, and plot it all so we’re working from facts rather than a label in a letter.",
    "dom": "tasks",
    "why": "BMI centile, objective measurement and BP — arranged face to face"
   },
   {
    "who": "pt",
    "text": "So the letter might be wrong?"
   },
   {
    "who": "dr",
    "text": "The school measurement is usually accurate, but it’s a single snapshot. What matters is the pattern. And if he’s tall and growing well along his height line, that reassures me there isn’t a hidden medical cause. Depending on the numbers, I may suggest a blood test too.",
    "dom": "tasks",
    "why": "Explains secondary-cause reasoning and conditional tests"
   },
   {
    "who": "pt",
    "text": "Okay. That seems fair."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The goal isn’t a diet. For a growing boy, it’s about habits the whole family shares, so that he grows into his weight and has more energy. What’s one or two small changes that would feel easy for your family?",
    "dom": "rto",
    "why": "Family-based framing and shared goal-setting"
   },
   {
    "who": "pt",
    "text": "Maybe water instead of fizzy drinks. And he could do football after school more."
   },
   {
    "who": "dr",
    "text": "Those are brilliant. Kai, how does more football sound?",
    "dom": "rto",
    "why": "Involves the child positively"
   },
   {
    "who": "pt",
    "text": "(Kai) Good."
   },
   {
    "who": "dr",
    "text": "There’s also a local family programme — it’s fun, active and for the whole family, not a weight class. Would you like me to refer you? And I’d like to speak to school about the teasing, with your permission, and the school nurse can support Kai too.",
    "dom": "tasks",
    "why": "Signposts family weight-management support and addresses bullying"
   },
   {
    "who": "pt",
    "text": "Yes to both. I didn’t know school had a nurse who’d help."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "So: the nurse measures Kai and checks his blood pressure this week, we look at the chart together, water instead of fizzy drinks and more football, the family programme, and school about the teasing. Does that sound right?",
    "dom": "gs",
    "why": "Summarises a concrete plan"
   },
   {
    "who": "pt",
    "text": "Yes. It’s a lot better than I expected."
   },
   {
    "who": "dr",
    "text": "Please come back sooner if Kai starts snoring loudly or stopping breathing at night, gets very thirsty or tired, or has pain in his hips or knees or starts limping. And Kai — if the teasing gets worse or you feel down about it, tell your mum or tell me. That matters just as much.",
    "dom": "gs",
    "why": "Specific safety-net for comorbidity and emotional harm"
   },
   {
    "who": "pt",
    "text": "(Kai nods.) Mum: Thank you. I came in ready for a fight."
   },
   {
    "who": "dr",
    "text": "You came in because you care about him. We’re on the same side.",
    "dom": "rto",
    "why": "Closes by reaffirming the alliance"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let the mother vent about the letter; acknowledged the child in the room.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Busy family routines, screen time, transport, cost and time barriers, bullying at school, the mother’s feelings of judgement.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “now he’s upset” and Kai’s “sometimes” about teasing, and the mother’s fear of him obsessing about food.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (he’s just a growing boy); concern (judged as a bad mother, a child on a diet); expectation (to know if he is alright).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Height, weight and BMI centile on UK90 charts; blood pressure; bloods only if the centile or history warrants.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Lifestyle-related obesity versus endocrine or genetic causes (short stature, delay, dysmorphism) and comorbidities.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Snoring and apnoeas, hip or knee pain and limp, thirst and tiredness, growth pattern, mood and bullying.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Probable overweight or obesity on the school measurement, to be confirmed by centile and trajectory; no features of a secondary cause.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Family-chosen small changes; family-based programme referral per NICE NG246; no restrictive diet; review with measurements.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Bullying addressed with school and school nurse; comorbidity assessment if at or above the 98th centile.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Nurse measurement this week and review; named symptoms for sleep apnoea, SUFE, diabetes and low mood.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Long-term conditions & cancer",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Kai Pyle",
    "age": "9 years · male",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "None recorded",
    "recent": "School measurement programme letter received by family. No recent height or weight recorded in the practice notes.",
    "reason": "“The school sent a letter saying my son is obese — I’m furious and embarrassed.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Defuse",
     "d": "Let her vent. Then, early and clearly: not a bad mum, no diet. Ask permission to talk about it."
    },
    {
     "t": "1–4",
     "h": "Child first, then history",
     "d": "Ask Kai about school and teasing. Snoring, joints, tiredness. Height pattern and development. A normal family day, without judgement."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "What went through her mind at the letter; what she wants from today."
    },
    {
     "t": "6–10",
     "h": "Explain and co-create",
     "d": "Centiles, not adult BMI. Measure and BP this week. Family’s own one or two changes. Family programme. School and school nurse about bullying."
    },
    {
     "t": "10–12",
     "h": "Summarise and safety-net",
     "d": "Recap; snoring, limp, thirst, low mood. Reaffirm the alliance."
    }
   ],
   "wordPics": {
    "fail": "Uses the word “fat” or lectures about diet in front of Kai; applies adult BMI; blames the mother; gives a calorie target; never asks Kai how he is or about bullying; no plan or follow-up.",
    "pass": "Removes blame, explains centiles, arranges measurement and blood pressure, screens for secondary causes and comorbidity, and agrees family-based changes with a follow-up.",
    "exc": "All of the above, plus: turns anger into alliance by naming her goal for Kai’s happiness; asks Kai directly about teasing and acts on it; lets the family choose the changes; uses Kai’s love of football; signposts a family programme without the word “diet”; both leave hopeful."
   },
   "avoid": [
    {
     "dont": "“Kai is obese and needs to lose weight.”",
     "instead": "“Let’s look at how Kai is growing on a chart for his age, and think about what helps him feel his best.”",
     "why": "Labels and weight-loss targets in front of a child shame him and end engagement."
    },
    {
     "dont": "“He needs to cut out snacks and eat less.”",
     "instead": "“What’s one change the whole family could try that would feel easy?”",
     "why": "Individual restriction for a child is not the NICE NG246 approach; family-based change is."
    },
    {
     "dont": "“Don’t worry, lots of kids are big at this age.”",
     "instead": "“The letter is a snapshot — let’s measure him properly and look at the pattern.”",
     "why": "False reassurance avoids the conversation the family came to have."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Weight stigma and bullying",
     "t": "Children living with obesity are often teased. Bullying harms mental health and reduces activity; it deserves its own plan with school."
    },
    {
     "h": "Family circumstances",
     "t": "Time pressure, cost of food and activities, and access to safe places to play shape what is achievable. Ask, and fit the plan to the family."
    }
   ],
   "legal": [
    {
     "h": "Safeguarding threshold",
     "t": "NICE CG89: obesity alone is not a safeguarding concern. Consider neglect only where there are wider concerns, such as persistent failure to engage with care for serious obesity-related harm."
    }
   ],
   "professional": [
    {
     "h": "Consent to share with school",
     "t": "GMC Confidentiality (2017): ask the parent’s agreement before contacting school about bullying, and share only what is needed."
    },
    {
     "h": "Non-stigmatising care",
     "t": "Person-first, health-focused language and asking permission to discuss weight are part of treating patients with respect (GMC Good medical practice, 2024)."
    }
   ],
   "community": [
    {
     "h": "Family weight-management services",
     "t": "Local family-based child weight-management programmes (tier 2) and the school nurse; the National Child Measurement Programme letter usually lists local support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Short stature, falling height centile, developmental delay or dysmorphism — endocrine or genetic cause, paediatric assessment",
     "Loud snoring with apnoeas, hip or knee pain with a limp (SUFE), thirst and polyuria",
     "Low mood, bullying, self-harm or disordered eating"
    ],
    "psychosocial": [
     "Family routines: meals, drinks, screens, transport, sleep",
     "Time, cost and access barriers",
     "Kai’s experience at school and his self-esteem"
    ],
    "ice": [
     "Idea: “He’s just a growing boy — the letter is wrong”",
     "Concern: being judged as a bad mother; Kai being put on a diet or obsessing about food",
     "Expectation: to know whether he is actually alright"
    ]
   },
   "diagnosis": "Possible overweight or obesity on a school measurement, to be confirmed by BMI centile on UK90 charts with height trajectory. No features of a secondary cause; comorbidity assessment if at or above the 98th centile.",
   "diagnosisLay": "“For children we don’t use the adult measure. We plot height and weight on a chart for his age, and what matters is how he’s tracking over time — not one number in a letter.”",
   "management": {
    "reflectIce": "“You want Kai to be happy and relaxed about food — that’s exactly our goal too. Nobody here is judging you as a mum.”",
    "psychosocial": "Build the plan around the family’s time and budget, Kai’s love of football, and the bullying, which needs its own action with school.",
    "sharedPlan": [
     "Nurse appointment: height, weight, BMI centile on UK90 charts, blood pressure",
     "One or two family-chosen changes (water instead of fizzy drinks; more football)",
     "Referral to a family weight-management programme; school and school nurse about teasing"
    ],
    "safetyNet": [
     "Snoring with pauses in breathing, limp or hip or knee pain, thirst or tiredness — come back sooner",
     "Low mood or worsening bullying — tell us; review after the measurements"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Obesity",
    "s": "Case walkthrough · NICE NG246",
    "href": "../cases/obesity.html"
   },
   {
    "ic": "💠",
    "t": "Obesity protocol",
    "s": "Assessment · comorbidity · referral",
    "href": "management/obesity.html"
   },
   {
    "ic": "🗺️",
    "t": "Weight gain",
    "s": "Visual algorithm · secondary causes",
    "href": "algorithms/weight-gain.html"
   },
   {
    "ic": "🗺️",
    "t": "Sleep problems in children",
    "s": "Visual algorithm · snoring and apnoea",
    "href": "algorithms/sleep-problems-children.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed on words, not knowledge. A candidate who knows the centile thresholds still fails if the mother feels blamed or Kai hears himself described as fat.",
   "items": [
    {
     "dom": "rto",
     "fail": "Arguing with the mother about whether the letter is right.",
     "why": "Defending the school puts you on the opposite side; the anger is shame and fear of judgement.",
     "fix": "Name her feelings, say clearly she is not a bad mum, and ask permission to talk about it."
    },
    {
     "dom": "rto",
     "fail": "Talking about Kai’s weight in the third person while he sits there.",
     "why": "“Did not involve the child” and stigmatising language are both failing statements.",
     "fix": "Speak to Kai first — how he is, whether anyone teases him — and use health-focused words."
    },
    {
     "dom": "tasks",
     "fail": "Calculating an adult BMI or quoting adult cut-offs.",
     "why": "NICE NG246 uses BMI centiles on UK90 charts for children; adult thresholds are wrong.",
     "fix": "“We plot him on a chart for his age” — and arrange a proper measurement."
    },
    {
     "dom": "tasks",
     "fail": "No screen for secondary causes or comorbidity.",
     "why": "Examiners expect you to ask about height pattern, development, snoring, joints and mood.",
     "fix": "Four quick questions: height and growth, development, snoring, joints — then blood pressure at the nurse visit."
    },
    {
     "dom": "tasks",
     "fail": "Giving a diet sheet or calorie target for a 9-year-old.",
     "why": "NICE NG246 favours family-based, multicomponent change; restricting one child reinforces shame.",
     "fix": "Let the family choose one or two small changes, and refer to a family programme."
    },
    {
     "dom": "gs",
     "fail": "Ignoring Kai’s “sometimes” about teasing.",
     "why": "Bullying is a harm in its own right and a barrier to activity; missing it is a missed cue.",
     "fix": "Acknowledge it at once, return to it in the plan, and offer to contact school with consent."
    }
   ]
  }
 },
 "copd-advanced-ceiling": {
  "stem": {
   "name": "Albert Finch",
   "age": "74-year-old man",
   "pmh": [
    "Severe COPD: FEV1 below 30% predicted, MRC dyspnoea grade 5",
    "Multiple hospital admissions with exacerbations this year"
   ],
   "meds": [
    "Triple inhaled therapy (LABA/LAMA/ICS)",
    "Home oxygen"
   ],
   "allergy": "None recorded",
   "recent": "Recent frightening admission with an exacerbation. Breathless at rest; breathlessness-related panic.",
   "reason": "Video consultation: wants to talk about “what happens from here”."
  },
  "knowledge": {
   "guideline": "[1] NICE NG115 (COPD in over 16s, 2018, updated 2019; reviewed July 2026) · [2] NICE NG142 (end of life care for adults: service delivery, 2019) · [3] Resuscitation Council UK, ReSPECT process · [4] GMC Treatment and care towards the end of life (2010) · [5] Mental Capacity Act 2005 · [6] BNF",
   "summary": "He has opened the door to advance care planning. Explore what matters to him, separate the kinds of “machine”, record his wishes in a shareable plan, and treat the breathlessness-panic cycle actively with non-drug measures, low-dose opioids and palliative-care input.",
   "points": [
    {
     "h": "Recognise the stage",
     "t": "Severe COPD with MRC grade 5, home oxygen and repeated admissions is advanced disease with an uncertain but limited prognosis. NICE NG142 [2]: identify people likely to be approaching the end of life and offer advance care planning, with information shared across services."
    },
    {
     "h": "Advance care planning",
     "t": "Explore his understanding, values, fears and wishes at his pace (GMC [4]). Separate the options: hospital admission, non-invasive ventilation (a mask, often used in exacerbations and easy to stop), intubation and intensive care, and CPR. Record the outcome in a ReSPECT plan [3] or local equivalent, and share it with ambulance and out-of-hours services."
    },
    {
     "h": "Legal tools",
     "t": "Mental Capacity Act 2005 [5]: an advance decision to refuse life-sustaining treatment must be written, signed, witnessed and state that it applies even if life is at risk. He can also appoint a health and welfare lasting power of attorney. A ReSPECT form records recommendations, not a legally binding refusal."
    },
    {
     "h": "Breathlessness-panic cycle",
     "t": "Breathlessness triggers fear, fear speeds breathing, and breathing becomes less efficient. Naming the cycle and giving tools breaks it: handheld fan to the face, pursed-lip and controlled breathing, forward-lean positions, pacing, a written crisis plan, and psychological support."
    },
    {
     "h": "Drug treatment",
     "t": "NICE NG115 [1]: use opioids, when appropriate, to palliate breathlessness in end-stage COPD unresponsive to other medical therapy; benzodiazepines, tricyclic antidepressants, major tranquillisers and oxygen may also be used when appropriate. Start low-dose oral morphine and titrate (dose per BNF [6]); warn about constipation and drowsiness."
    },
    {
     "h": "Palliative care and carers",
     "t": "NICE NG115 [1]: people with COPD and their families should have access to palliative care services, including hospice care. Involve the community palliative team early, add him to the practice palliative-care register, and offer a carer’s assessment to anyone who supports him."
    },
    {
     "h": "Home oxygen safety",
     "t": "Review fire risk at every oxygen review: no smoking or naked flames near oxygen, and smoke alarms fitted. NICE NG115 [1] advises a structured risk assessment for home oxygen."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Albert, I’m Dr Ahmed. Take your time — there’s no rush. What would you like to talk about today?",
    "dom": "rto",
    "why": "Unhurried open start"
   },
   {
    "who": "pt",
    "text": "That last admission really shook me. When I can’t catch my breath I think I’m dying, and the panic makes it worse. I don’t want to end up on machines in intensive care. But I’m terrified of suffocating. I want to talk about what happens from here."
   },
   {
    "who": "dr",
    "text": "Thank you for raising it. That took courage. We can go as far as you want today and come back to it another time. Would it help to start with what happened in hospital, then talk about your wishes, and then what we can do for the breathlessness and panic?",
    "dom": "gs",
    "why": "Agrees a paced agenda with permission"
   },
   {
    "who": "pt",
    "text": "Yes. That’s what I want."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "What was the most frightening part of that admission?",
    "dom": "rto",
    "why": "Explores his experience"
   },
   {
    "who": "pt",
    "text": "Not being able to breathe. Thinking that was it."
   },
   {
    "who": "dr",
    "text": "And now at home, how is your breathing day to day?",
    "dom": "tasks",
    "why": "Assesses current symptom burden"
   },
   {
    "who": "pt",
    "text": "Breathless even sitting here. Any little thing sets it off, then the panic comes."
   },
   {
    "who": "dr",
    "text": "When the panic comes, what do you do?",
    "dom": "tasks",
    "why": "Explores current coping and the anxiety cycle"
   },
   {
    "who": "pt",
    "text": "Put the oxygen up and hope it passes."
   },
   {
    "who": "dr",
    "text": "How is your mood generally, and your sleep?",
    "dom": "tasks",
    "why": "Screens for depression and anxiety"
   },
   {
    "who": "pt",
    "text": "Worried all the time, if I’m honest."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. Is there someone close to you who you’d want involved in these conversations?",
    "dom": "rto",
    "why": "Explores support without assuming"
   },
   {
    "who": "pt",
    "text": "I’ll think about that."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "What’s your understanding of where things are with your lungs?",
    "dom": "rto",
    "why": "Checks understanding before sharing information"
   },
   {
    "who": "pt",
    "text": "They’re not getting better. I know that."
   },
   {
    "who": "dr",
    "text": "That’s right, and I’m sorry. What matters most to you from here?",
    "dom": "rto",
    "why": "Elicits values"
   },
   {
    "who": "pt",
    "text": "Being at home. Not being hooked up to things. And not dying fighting for breath."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Can I explain the different things people mean by “machines”, so your wishes are clear? One is a breathing tube in intensive care, where you’re put to sleep. Another is a tight mask that helps your breathing during a bad flare, used on a ward, and it can be stopped whenever you want. And then there’s resuscitation if your heart stops.",
    "dom": "tasks",
    "why": "Separates ITU, NIV and CPR"
   },
   {
    "who": "pt",
    "text": "I didn’t know the mask was different. The tube, no. The mask — maybe."
   },
   {
    "who": "dr",
    "text": "That’s a really helpful distinction, and you don’t have to decide everything today. About resuscitation: with lungs as damaged as yours, it very rarely works, and it would mean the intensive care you don’t want. How do you feel about that?",
    "dom": "tasks",
    "why": "Honest, gentle CPR discussion"
   },
   {
    "who": "pt",
    "text": "Then I wouldn’t want it. I’d rather be comfortable."
   },
   {
    "who": "dr",
    "text": "Thank you. I’ll write that into a plan called ReSPECT, which ambulance crews and hospital doctors can see. You can change it any time.",
    "dom": "tasks",
    "why": "Documents a shareable, revisable escalation plan"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Now your biggest fear, suffocating. I want to be clear: we have good ways to ease breathlessness, and the aim is that you are comfortable. You won’t be left to struggle.",
    "dom": "rto",
    "why": "Addresses the core fear directly"
   },
   {
    "who": "pt",
    "text": "How?"
   },
   {
    "who": "dr",
    "text": "Some things help straight away: a small handheld fan on your face, sitting forward with your arms resting, breathing out slowly through pursed lips. And a very small dose of morphine liquid can ease the feeling of breathlessness itself and calm the panic. At low doses it’s safe and we adjust it carefully.",
    "dom": "tasks",
    "why": "Non-drug measures and low-dose opioid"
   },
   {
    "who": "pt",
    "text": "Morphine? I thought that was for the end."
   },
   {
    "who": "dr",
    "text": "Many people think that. At this dose it’s used to help breathing for months or years. It can cause constipation and some sleepiness at first, so I’ll give you something for the bowels and we’ll review it within a week.",
    "dom": "rto",
    "why": "Corrects a misconception and explains side effects"
   },
   {
    "who": "dr",
    "text": "I’d also like to involve the palliative care team. They’re not only for the last days — they’re experts in breathlessness and support people and their families for a long time. And I’ll ask them about talking therapy for the panic.",
    "dom": "tasks",
    "why": "Early palliative and psychological support"
   },
   {
    "who": "pt",
    "text": "If it helps, yes."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Let’s write a crisis plan together: fan, position, breathing, your morphine dose, and a number for the palliative team or out-of-hours. If that doesn’t settle things, 999 is still there for you, and the crews will see your plan.",
    "dom": "gs",
    "why": "Crisis plan that respects his wishes"
   },
   {
    "who": "pt",
    "text": "That makes me feel less trapped."
   },
   {
    "who": "dr",
    "text": "Can you tell me what we’ve agreed, so I know I’ve explained it well?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "No tube or resuscitation, maybe the mask, a fan and breathing tricks, a bit of morphine, the palliative team, and a crisis plan."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. I’ll call you in a week to see how the morphine is going, and we can talk again about anything you’ve thought about.",
    "dom": "gs",
    "why": "Defined follow-up and open door"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Unhurried open start; asked permission and paced the agenda to him.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Home situation and who he wants involved, mood, sleep, and how crises play out at home.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “machines” versus “suffocating” and the panic that drives his crises.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (disease is progressing), concern (suffocation and ITU), expectation (to plan for the future).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Symptom review, mood screen, record of admissions; bowel and sedation review after starting morphine.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Breathlessness-panic cycle, depression and anxiety, reversible contributors to breathlessness.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Recognised advanced disease; checked for a crisis pattern and mood; no coercion in escalation decisions.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named advanced COPD honestly and separated ITU, NIV and CPR.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "ReSPECT plan documented and shared; fan, breathing and positioning; low-dose opioid titrated; palliative referral.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Mood and anxiety support, laxative with opioid, oxygen safety, carer’s assessment offered.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Written crisis plan; 999 still available; review call in a week; plan revisitable.",
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
    "name": "Albert Finch",
    "age": "74 years · male",
    "pmh": [
     "Severe COPD (FEV1 <30%, MRC 5)",
     "Multiple admissions this year"
    ],
    "meds": [
     "Triple inhaled therapy",
     "Home oxygen"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Recent admission with an exacerbation. No advance care plan or ReSPECT form on the record.",
    "reason": "“I want to talk about what happens from here.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and pace",
     "d": "Thank him for raising it. Agree what to cover today and that it can continue."
    },
    {
     "t": "1–4",
     "h": "Experience and symptoms",
     "d": "The admission, breathlessness now, the panic, what he does in a crisis, mood and sleep, who he wants involved."
    },
    {
     "t": "4–6",
     "h": "Understanding and values",
     "d": "What he knows about his lungs, what matters most: home, no tube, not dying breathless."
    },
    {
     "t": "6–10",
     "h": "Clarify and plan",
     "d": "ITU versus NIV versus CPR; ReSPECT. Fan, positions, breathing, low-dose morphine with laxative, palliative team, talking therapy."
    },
    {
     "t": "10–12",
     "h": "Crisis plan and close",
     "d": "Written crisis plan, teach-back, review call in a week, door left open."
    }
   ],
   "wordPics": {
    "fail": "Rushes to a DNACPR form or avoids the subject entirely; lumps all “machines” together; offers only more inhalers or oxygen; no plan for the panic; false reassurance or bleak fatalism.",
    "pass": "Explores his wishes, discusses resuscitation and ventilation, documents a plan, offers non-drug breathlessness measures and considers low-dose opioids, and refers to palliative care.",
    "exc": "All of the above, plus: paces the conversation to him; separates ITU, NIV and CPR so his choice is informed; addresses the suffocation fear directly; corrects the “morphine means the end” belief; builds a written crisis plan; checks mood; teach-back and a review date."
   },
   "avoid": [
    {
     "dont": "“So shall we put a DNR on your notes?”",
     "instead": "“Can I explain the different things people mean by machines, so your wishes are clear?”",
     "why": "A form-first approach feels like withdrawal of care; values come first."
    },
    {
     "dont": "“Don’t worry, you’ve got plenty of time.”",
     "instead": "“Your lungs aren’t getting better, and that’s why planning now is so valuable.”",
     "why": "False reassurance blocks the conversation he came to have."
    },
    {
     "dont": "“There’s nothing more we can do for your breathing.”",
     "instead": "“There’s a lot we can do to make the breathlessness easier and keep you comfortable.”",
     "why": "Palliation is active treatment; fatalism worsens the panic."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Carers and home",
     "t": "Ask who supports him rather than assuming. Offer a carer’s assessment (Care Act 2014) and involve people only with his consent."
    },
    {
     "h": "Mood",
     "t": "Low mood and anxiety are common in advanced COPD and worsen breathlessness; screen and offer support."
    }
   ],
   "legal": [
    {
     "h": "Advance decisions and LPA",
     "t": "Mental Capacity Act 2005: an advance decision refusing life-sustaining treatment must be written, signed, witnessed and state it applies even if life is at risk. A health and welfare LPA lets a trusted person decide if he loses capacity."
    },
    {
     "h": "ReSPECT and DNACPR",
     "t": "A ReSPECT plan records recommendations for emergencies. CPR decisions must be discussed with the patient unless this would cause physical or psychological harm (Tracey judgment, 2014)."
    }
   ],
   "professional": [
    {
     "h": "End-of-life communication",
     "t": "GMC Treatment and care towards the end of life: explore wishes, share information honestly at the patient’s pace, and review decisions as things change."
    },
    {
     "h": "Coordination",
     "t": "NICE NG142: share the advance care plan with out-of-hours, ambulance and hospital services; add him to the palliative-care register for multidisciplinary review."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Community palliative care and hospice services, breathlessness services where available, Asthma + Lung UK, and Marie Curie support for non-cancer conditions."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Escalating panic-driven crises and admissions",
     "Low mood or hopelessness",
     "Oxygen fire risk (smoking or naked flames near oxygen)"
    ],
    "psychosocial": [
     "Who he wants involved, and carer strain",
     "What matters most: home, comfort, no intensive care",
     "Mood, sleep and fear"
    ],
    "ice": [
     "Idea: “My lungs aren’t getting better.”",
     "Concern: suffocating, and being kept alive on machines",
     "Expectation: to talk honestly about what happens next"
    ]
   },
   "diagnosis": "“Your COPD is at an advanced stage. It’s unlikely to get better, but there’s a great deal we can do to keep you comfortable and to make sure your wishes are known.”",
   "diagnosisLay": "“Think of the panic as an alarm that’s set too sensitive. The breathlessness trips it, and the alarm makes the breathing worse. The fan, the positions and a small dose of morphine turn the alarm down.”",
   "management": {
    "reflectIce": "“You’ve told me two fears: machines, and suffocating. We’ve written down what you don’t want, and we’ll make sure you’re not left struggling for breath.”",
    "psychosocial": "Pace the conversation; involve people only as he chooses; treat mood and panic as part of the plan.",
    "sharedPlan": [
     "ReSPECT plan with his wishes on ITU, NIV and CPR, shared with ambulance and out-of-hours",
     "Fan, positions, pursed-lip breathing; low-dose oral morphine with laxative, review within a week",
     "Community palliative care referral; psychological support; carer’s assessment offered"
    ],
    "safetyNet": [
     "Written crisis plan with palliative and out-of-hours numbers; 999 still available",
     "Review call in a week; plan revisited at every contact"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Palliative care",
    "s": "Case walkthrough · advance care planning",
    "href": "../cases/palliative-care.html"
   },
   {
    "ic": "💠",
    "t": "Palliative breathlessness",
    "s": "Protocol · fan, opioids, crisis plan",
    "href": "management/palliative-breathlessness.html"
   },
   {
    "ic": "💠",
    "t": "Palliative anxiety and depression",
    "s": "Protocol · panic and low mood",
    "href": "management/palliative-anxiety-depression.html"
   },
   {
    "ic": "📋",
    "t": "COPD",
    "s": "Case walkthrough · NICE NG115",
    "href": "../cases/copd.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is about a conversation, not a form. Candidates fail by rushing to DNACPR, by avoiding the subject, or by leaving the fear of suffocation unanswered.",
   "items": [
    {
     "dom": "rto",
     "fail": "Opening with “Have you thought about resuscitation?”",
     "why": "“Does not explore the patient’s agenda.” He came with fears to be heard first.",
     "fix": "“What was the most frightening part of that admission?”"
    },
    {
     "dom": "tasks",
     "fail": "Treating “no machines” as a refusal of all ventilation.",
     "why": "NIV is often appropriate and reversible; an unclarified refusal may deny him treatment he would accept.",
     "fix": "Explain ITU, NIV and CPR separately and record each wish."
    },
    {
     "dom": "tasks",
     "fail": "Offering only more oxygen or another inhaler for the breathlessness.",
     "why": "NICE NG115 supports opioids and other palliative measures for refractory breathlessness; missing them is a Tasks gap.",
     "fix": "Fan, positions, breathing, and low-dose morphine with a laxative and review."
    },
    {
     "dom": "rto",
     "fail": "False reassurance — “you’ve got plenty of time” — or bleak fatalism.",
     "why": "Both close the conversation; examiners look for honesty with compassion.",
     "fix": "“Your lungs aren’t getting better, and there’s a lot we can do to keep you comfortable.”"
    },
    {
     "dom": "tasks",
     "fail": "Not referring to palliative care because “it isn’t cancer”.",
     "why": "NICE NG115 says people with COPD should have access to palliative and hospice care.",
     "fix": "“They’re experts in breathlessness, not only in the last days.”"
    },
    {
     "dom": "gs",
     "fail": "Ending without a crisis plan or a record that others can see.",
     "why": "His wishes are only protected if ambulance and out-of-hours clinicians know them.",
     "fix": "ReSPECT plan shared, written crisis plan, review call in a week."
    }
   ]
  }
 },
 "copd-flare-smoker": {
  "stem": {
   "name": "Frank Dolan",
   "age": "61-year-old man",
   "pmh": [
    "COPD, FEV1 about 45% predicted",
    "Current smoker, about 40 pack-years"
   ],
   "meds": [
    "COPD inhalers as on the repeat list, including a short-acting reliever",
    "Previous rescue courses of steroid and antibiotic"
   ],
   "allergy": "Check the record before prescribing",
   "recent": "Four days of more breathlessness, more cough and green sputum. No fever, pleuritic pain or haemoptysis reported.",
   "reason": "Video consultation: “I just need the steroids and antibiotics I usually get.”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG115 (COPD in over 16s, 2018, updated 2019; reviewed July 2026) · [2] NICE NG114 (COPD exacerbation: antimicrobial prescribing, 2018) · [3] NICE NG12 (updated April 2026) · [4] NICE NG209 (tobacco: preventing uptake, promoting quitting, 2021) · [5] NCSCT Very Brief Advice on smoking · [6] BNF",
   "summary": "Grade the flare and exclude its mimics, then treat: more reliever, prednisolone 30 mg for 5 days, and an antibiotic on the NG114 judgement. Use the flare as the moment to offer stop-smoking help, briefly and without a lecture.",
   "points": [
    {
     "h": "Grade and exclude",
     "t": "Breathlessness at rest, speech, drowsiness or confusion, cyanosis, and oxygen saturation if it can be measured. Exclude pneumonia (fever, focal signs), PE (sudden onset, pleuritic pain, calf swelling), heart failure (orthopnoea, oedema) and pneumothorax (sudden severe breathlessness). NICE NG115 [1] lists factors favouring hospital treatment, including severe breathlessness, confusion, cyanosis, poor general condition and poor social support."
    },
    {
     "h": "Steroid",
     "t": "NICE NG115 [1]: oral prednisolone 30 mg once daily for 5 days for an exacerbation with a significant increase in breathlessness that interferes with daily activities. Warn about sleep, mood and blood glucose effects."
    },
    {
     "h": "Antibiotic judgement",
     "t": "NICE NG114 [2]: weigh severity (sputum colour change with increased volume or thickness), previous exacerbations and admissions, risk of complications, previous sputum results and resistance risk. First choices are amoxicillin, doxycycline or clarithromycin, for 5 days (doses per BNF [6]). His purulent, increased sputum supports an antibiotic this time."
    },
    {
     "h": "Rescue pack",
     "t": "NICE NG115 [1]: offer a rescue pack of steroid and antibiotic to people who have had an exacerbation in the last year, understand when to use it and are confident to do so, with an instruction to tell the practice each time it is used. Frequent use is a trigger for review, not just re-supply."
    },
    {
     "h": "Lung cancer awareness",
     "t": "NICE NG12 (updated April 2026) [3]: urgent chest X-ray within 2 weeks for people aged 40 and over who have ever smoked with 1 or more unexplained symptoms (cough, fatigue, breathlessness, chest pain, weight loss, appetite loss); suspected cancer pathway referral for unexplained haemoptysis at 40 and over. A flare that does not settle, or any haemoptysis or weight loss, needs imaging."
    },
    {
     "h": "Very Brief Advice",
     "t": "NCSCT [5]: Ask, Advise, Act in under a minute. NICE NG209 [4]: offer behavioural support with varenicline, combination NRT or nicotine-containing e-cigarettes; refer to a stop-smoking service. NICE NG115 [1]: helping people with COPD who smoke to stop is one of the most important parts of their care, at every stage."
    },
    {
     "h": "After the flare",
     "t": "Review once settled: inhaler technique and treatment step, rescue-pack plan, vaccinations and pulmonary rehabilitation if functionally limited (NICE NG115 [1])."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Morning Frank, Dr Singh here. Sounds like your chest is playing up. Tell me how it’s been.",
    "dom": "rto",
    "why": "Open start on his agenda"
   },
   {
    "who": "pt",
    "text": "More puffed than usual, coughing more, phlegm’s gone green. I know the drill — steroids and antibiotics like last time. And please don’t start on about the smoking."
   },
   {
    "who": "dr",
    "text": "Understood. Let’s get your chest sorted first. I need a few quick questions so I’m treating the right thing, then we’ll agree the plan. Okay?",
    "dom": "gs",
    "why": "Acknowledges his request and sets a clear structure"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "How long has this been going on, and how breathless are you now — just walking about, or sitting still too?",
    "dom": "tasks",
    "why": "Grades severity"
   },
   {
    "who": "pt",
    "text": "Four days. Worse walking. I’m alright sitting."
   },
   {
    "who": "dr",
    "text": "You’re talking to me in full sentences, which is good. Any fever or shivers?",
    "dom": "tasks",
    "why": "Screens for pneumonia and notes speech"
   },
   {
    "who": "pt",
    "text": "No."
   },
   {
    "who": "dr",
    "text": "Any sharp pain in the chest when you breathe in, a sudden change in your breathing, or a swollen, painful calf?",
    "dom": "tasks",
    "why": "Excludes PE and pneumothorax"
   },
   {
    "who": "pt",
    "text": "None of that."
   },
   {
    "who": "dr",
    "text": "Any coughing up blood, or weight dropping off without trying?",
    "dom": "tasks",
    "why": "Screens NICE NG12 (updated April 2026) lung red flags"
   },
   {
    "who": "pt",
    "text": "No blood. Not that I’ve noticed with the weight."
   },
   {
    "who": "dr",
    "text": "Ankles swelling, or needing extra pillows to breathe at night? And any drowsiness or muddled thinking?",
    "dom": "tasks",
    "why": "Screens for heart failure and CO2 retention"
   },
   {
    "who": "pt",
    "text": "No, no."
   },
   {
    "who": "dr",
    "text": "And how much more phlegm is there, as well as the colour?",
    "dom": "tasks",
    "why": "Gathers the NG114 antibiotic criteria"
   },
   {
    "who": "pt",
    "text": "Loads more. Thick and green."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "What do you think is going on this time?",
    "dom": "rto",
    "why": "Elicits ideas"
   },
   {
    "who": "pt",
    "text": "Same as always. My chest. It’s what happens."
   },
   {
    "who": "dr",
    "text": "And you’re hoping for the usual course. Is anything worrying you about it?",
    "dom": "rto",
    "why": "Checks expectations and concerns"
   },
   {
    "who": "pt",
    "text": "Just want it sorted. And not the lecture."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "From what you’ve told me this sounds like a flare of your COPD from a chest infection, and nothing points to pneumonia, a clot or your heart. Because your phlegm has changed colour and there’s much more of it, an antibiotic is the right call this time, along with steroid tablets.",
    "dom": "tasks",
    "why": "Shares a working diagnosis and a reasoned antibiotic decision"
   },
   {
    "who": "pt",
    "text": "Told you."
   },
   {
    "who": "dr",
    "text": "You did. So: prednisolone 30 milligrams once a day for five days, and a five-day antibiotic — I’ll check your allergy record before I choose it. Use your blue inhaler more often as you need it. I’d also like someone to check your oxygen level and listen to your chest today if you can come in.",
    "dom": "tasks",
    "why": "Correct NG115/NG114 treatment and a face-to-face check"
   },
   {
    "who": "pt",
    "text": "I can pop in."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Can I mention the smoking just once? I promise I’ll keep it short, and it’s your call.",
    "dom": "rto",
    "why": "Asks permission — the first step of Very Brief Advice"
   },
   {
    "who": "pt",
    "text": "Go on. You will anyway."
   },
   {
    "who": "dr",
    "text": "I won’t lecture. The one thing that changes how your lungs do from here is stopping, and it helps even at this stage. The best way to do it is with stop-smoking support plus a treatment — patches with a quick-acting nicotine product, a tablet called varenicline, or a vape. That roughly triples your chances compared with willpower alone.",
    "dom": "tasks",
    "why": "Advise and Act: states benefit and offers evidence-based help"
   },
   {
    "who": "pt",
    "text": "It’s too late now. And it’s the only thing I enjoy."
   },
   {
    "who": "dr",
    "text": "That’s honest, and I hear it. It’s not too late — your lungs would lose function more slowly from the day you stop. And a vape could keep some of what you enjoy without the smoke. I’m not asking you to decide now. Can I send you the stop-smoking service details so they’re there when you want them?",
    "dom": "rto",
    "why": "Addresses fatalism with respect and leaves the offer open"
   },
   {
    "who": "pt",
    "text": "Send them. No promises."
   },
   {
    "who": "dr",
    "text": "That’s fair. I’d also like to see you once you’ve recovered to check your inhalers, your rescue-pack plan and your jabs.",
    "dom": "tasks",
    "why": "Plans post-exacerbation review"
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you get breathless sitting still, can’t finish a sentence, become drowsy or confused, or your lips go blue, call 999. If you get a fever, cough up blood, or you’re not improving in a couple of days, contact us the same day.",
    "dom": "gs",
    "why": "Specific red flags and time frame"
   },
   {
    "who": "pt",
    "text": "Right."
   },
   {
    "who": "dr",
    "text": "And if this doesn’t settle, I’ll arrange a chest X-ray — because you smoke, I never want to put something else down to your usual chest. Can you tell me back the plan?",
    "dom": "gs",
    "why": "NICE NG12 (updated April 2026) awareness and teach-back"
   },
   {
    "who": "pt",
    "text": "Steroids five days, antibiotic, more blue inhaler, pop in today, 999 if I can’t talk or get drowsy, X-ray if it doesn’t clear."
   },
   {
    "who": "dr",
    "text": "Perfect. The nurse will see you later, and I’ll book your review.",
    "dom": "gs",
    "why": "Closes with defined follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; acknowledged his request and his “no lecture” request before structuring.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Impact on daily activity, support at home, and smoking, raised only with permission.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the fatalism (“too late”, “only thing I enjoy”) and answered it.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (usual chest flare), concern (being lectured), expectation (usual rescue course).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Oxygen saturation and chest examination today; chest X-ray if not settling or red flags; allergy check before antibiotic.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Infective exacerbation versus pneumonia, PE, heart failure, pneumothorax and lung cancer.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about fever, pleuritic pain, calf swelling, haemoptysis, weight loss, drowsiness and breathlessness at rest.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named an infective COPD exacerbation and explained why an antibiotic is justified this time.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Prednisolone 30 mg for 5 days, 5-day NG114 antibiotic, increased reliever; Very Brief Advice with a real offer.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Smoking cessation offer (varenicline, combination NRT, vape, service); rescue-pack plan and vaccinations at review.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 and same-day triggers named; review booked; chest X-ray if non-resolving.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Frank Dolan",
    "age": "61 years · male",
    "pmh": [
     "COPD (FEV1 about 45% predicted)",
     "Current smoker, about 40 pack-years"
    ],
    "meds": [
     "COPD inhalers per repeat list",
     "Previous steroid and antibiotic rescue courses"
    ],
    "allergy": "Check record",
    "recent": "⚠ Four days of more breathlessness, more cough and green sputum. Wants his usual steroids and antibiotics.",
    "reason": "“I just need the steroids and antibiotics I usually get — don’t start on about the smoking.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and accept",
     "d": "Acknowledge the request and the “no lecture” line. Promise to treat his chest first."
    },
    {
     "t": "1–4",
     "h": "Grade and exclude",
     "d": "Breathlessness at rest, speech, fever, pleuritic pain, calf, haemoptysis, weight, orthopnoea, drowsiness, sputum volume and colour."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "“Same as always”, fear of being lectured. Keep it brief."
    },
    {
     "t": "6–9",
     "h": "Treat",
     "d": "Working diagnosis; prednisolone 30 mg for 5 days; 5-day antibiotic per NG114; more reliever; face-to-face obs today."
    },
    {
     "t": "9–12",
     "h": "Offer, safety-net, close",
     "d": "Ask permission, advise, offer help; answer “too late”. 999 and same-day triggers, X-ray if not settling, review booked, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Issues the rescue course without asking a single exclusion question; either avoids smoking entirely or delivers a lecture; prescribes a 14-day steroid course; no safety-net.",
    "pass": "Grades the flare and excludes mimics, treats with prednisolone 30 mg for 5 days and a justified antibiotic, makes a brief cessation offer, and safety-nets with a review.",
    "exc": "All of the above, plus: asks permission before raising smoking and answers “it’s too late” with specific benefit; offers varenicline, combination NRT or a vape with a service referral; states the NICE NG12 (updated April 2026) X-ray trigger honestly; teach-back and a post-flare review."
   },
   "avoid": [
    {
     "dont": "“You really need to stop smoking or this will keep happening.”",
     "instead": "“Can I mention the smoking just once, briefly? It’s your call.”",
     "why": "Permission turns a lecture into an offer and keeps him listening."
    },
    {
     "dont": "“Here’s your usual rescue pack.” (with no questions)",
     "instead": "“A few quick questions so I’m treating the right thing.”",
     "why": "Skipping the exclusion of pneumonia, PE and heart failure is unsafe."
    },
    {
     "dont": "“It’s never too late, you know.” (and moving on)",
     "instead": "“Your lungs would lose function more slowly from the day you stop — and a vape could keep some of what you enjoy.”",
     "why": "A cliché does not answer his fatalism; a specific benefit and option do."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Smoking and identity",
     "t": "For many long-term smokers, smoking is pleasure, routine and stress relief. Fatalism (“too late”) and shame drive defensiveness; respect it and leave the offer open."
    },
    {
     "h": "Support at home",
     "t": "Poor social support is one of the NICE NG115 factors favouring hospital treatment of an exacerbation."
    }
   ],
   "legal": [
    {
     "h": "Fit note",
     "t": "If his work is affected, a fit note may be needed during the flare; he can self-certify for the first 7 days."
    }
   ],
   "professional": [
    {
     "h": "Antimicrobial stewardship",
     "t": "NICE NG114: document why an antibiotic was or was not given. Reflex antibiotics for every flare drive resistance."
    },
    {
     "h": "Respecting autonomy",
     "t": "GMC Decision making and consent (2020): give balanced information and respect his choice about smoking without withdrawing care."
    }
   ],
   "community": [
    {
     "h": "Stop-smoking services",
     "t": "Local NHS stop-smoking service, community pharmacy stop-smoking support, and the NHS Quit Smoking app."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Breathlessness at rest, unable to complete sentences, cyanosis",
     "Drowsiness or confusion (possible CO2 retention)",
     "Fever or pleuritic pain (pneumonia), sudden onset or calf swelling (PE)",
     "Haemoptysis or weight loss in a smoker"
    ],
    "psychosocial": [
     "Support at home and ability to manage",
     "Smoking: pleasure, habit, previous attempts — with permission",
     "Work and daily activities affected"
    ],
    "ice": [
     "Idea: “It’s my chest again, same as always.”",
     "Concern: being lectured about smoking",
     "Expectation: the usual steroid and antibiotic"
    ]
   },
   "diagnosis": "“This is a flare of your COPD, most likely from a chest infection. Nothing you’ve told me suggests pneumonia, a clot or your heart, and because your phlegm has changed and increased, an antibiotic is right this time.”",
   "diagnosisLay": "“Your airways are like narrowed pipes. An infection makes the lining swell and fill with phlegm, so the steroid calms the swelling and the antibiotic tackles the infection.”",
   "management": {
    "reflectIce": "“You asked me not to lecture you, and I won’t. I’ll mention the smoking once, and it’s your call.”",
    "psychosocial": "Very Brief Advice with permission; answer the fatalism with a specific benefit; offer a vape as harm reduction; leave the service details with him.",
    "sharedPlan": [
     "Prednisolone 30 mg once daily for 5 days; 5-day antibiotic per NG114 (amoxicillin, doxycycline or clarithromycin; dose per BNF); more reliever",
     "Face-to-face oxygen saturation and chest check today",
     "Post-flare review: inhalers, rescue-pack plan, vaccines, pulmonary rehabilitation if limited; cessation offer open"
    ],
    "safetyNet": [
     "999: breathless at rest, cannot finish sentences, drowsy or confused, blue lips",
     "Same day: fever, haemoptysis, or not improving in 2 days; chest X-ray if not settling"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "COPD",
    "s": "Case walkthrough · NICE NG115",
    "href": "../cases/copd.html"
   },
   {
    "ic": "💠",
    "t": "COPD protocol",
    "s": "Exacerbations · NG114 antibiotics · rescue packs",
    "href": "management/copd.html"
   },
   {
    "ic": "💠",
    "t": "Smoking cessation",
    "s": "Protocol · Very Brief Advice · pharmacotherapy",
    "href": "management/smoking-cessation.html"
   },
   {
    "ic": "🗺️",
    "t": "Breathlessness pathway",
    "s": "Visual algorithm · mimics to exclude",
    "href": "algorithms/breathlessness.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests two things at once: safe flare management and a smoking conversation that is neither avoided nor preached. Most candidates get one right and lose the other.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Handing over the rescue course with no severity or exclusion questions because he “knows the drill”.",
     "why": "“Fails to exclude serious alternatives.” Pneumonia, PE and heart failure can all present as “my chest again”.",
     "fix": "Sixty seconds of targeted questions, said aloud: “so I’m treating the right thing.”"
    },
    {
     "dom": "tasks",
     "fail": "Prednisolone 40 mg for 7 to 14 days, or antibiotics for 7 days by habit.",
     "why": "NICE NG115 says 30 mg for 5 days; NICE NG114 says 5 days of antibiotic.",
     "fix": "State the dose and duration plainly: “30 milligrams once a day for five days.”"
    },
    {
     "dom": "rto",
     "fail": "Colluding — never mentioning smoking because he asked you not to.",
     "why": "Missing the teachable moment loses Tasks marks; examiners expect Very Brief Advice.",
     "fix": "Ask permission: “Can I mention it once, briefly?” Then advise and offer."
    },
    {
     "dom": "rto",
     "fail": "Lecturing: listing smoking harms and telling him he must stop.",
     "why": "“Does not respect the patient’s autonomy.” Defensiveness hardens and the offer is lost.",
     "fix": "One benefit, one offer, then leave the door open."
    },
    {
     "dom": "tasks",
     "fail": "No chest X-ray plan for a 40-pack-year smoker whose flares keep recurring.",
     "why": "NICE NG12 (updated April 2026) sets a low threshold for ever-smokers aged 40 and over.",
     "fix": "“If this doesn’t settle, or you cough up blood or lose weight, I’ll arrange an X-ray.”"
    },
    {
     "dom": "gs",
     "fail": "“Come back if you’re worse” as the only safety-net.",
     "why": "Non-specific safety-netting is a standard failing feedback statement.",
     "fix": "Name the 999 signs and the same-day signs, give a time frame, and book the review."
    }
   ]
  }
 },
 "copd-poor-control": {
  "stem": {
   "name": "Coralie Beaumont",
   "age": "67-year-old woman",
   "pmh": [
    "COPD",
    "Ex-smoker"
   ],
   "meds": [
    "LABA/LAMA combination inhaler (maintenance)",
    "Short-acting reliever as on the repeat list"
   ],
   "allergy": "None recorded",
   "recent": "Persistent breathlessness and repeated chest infections despite LABA/LAMA. Asking for “something stronger”.",
   "reason": "Video COPD review: “My inhalers just aren’t working any more.”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG115 (COPD in over 16s, 2018, updated 2019; reviewed July 2026 with a new biological-therapy section) · [2] NICE TA1142 (dupilumab for uncontrolled COPD with raised blood eosinophils) · [3] NICE NG12 (updated April 2026) · [4] UKHSA Green Book · [5] BNF",
   "summary": "Before escalating, check technique, adherence, the diagnosis and the non-drug treatments, especially pulmonary rehabilitation. Then apply the NG115 step to triple therapy on its stated criteria, with the pneumonia trade-off discussed and a planned review.",
   "points": [
    {
     "h": "Basics before escalation",
     "t": "NICE NG115 [1]: check inhaler technique and adherence before starting or changing inhaled therapy, and at each review. Ask her to demonstrate; consider a spacer or a better-matched device."
    },
    {
     "h": "Confirm and contributors",
     "t": "Confirm the record holds post-bronchodilator spirometry (FEV1/FVC below 0.7). Look for asthmatic features (NICE NG115 [1]: previous asthma or atopy, higher blood eosinophil count, FEV1 variation of at least 400 ml, diurnal PEF variation of at least 20%) and for heart failure, anaemia, anxiety or depression, and deconditioning."
    },
    {
     "h": "Pulmonary rehabilitation",
     "t": "NICE NG115 [1]: offer pulmonary rehabilitation to people who see themselves as functionally disabled by COPD (usually MRC grade 3 and above). It improves breathlessness, exercise capacity and quality of life."
    },
    {
     "h": "Step to triple therapy",
     "t": "NICE NG115 [1], on LABA+LAMA: consider LABA+LAMA+ICS after a severe exacerbation (needing hospital) or 2 moderate exacerbations within a year. If day-to-day symptoms still affect quality of life, consider a 3-month trial of LABA+LAMA+ICS and return to LABA+LAMA if there is no improvement."
    },
    {
     "h": "ICS trade-off",
     "t": "NICE NG115 [1]: discuss and document the increased risk of pneumonia with inhaled corticosteroids. A single combined inhaler is simpler to use; review the benefit."
    },
    {
     "h": "Beyond triple therapy",
     "t": "Specialist options for continued exacerbations include azithromycin prophylaxis in non-smokers after optimisation (NICE NG115 [1], with CT, sputum culture, ECG and LFT checks first) and, since 2026, biological therapy: dupilumab per NICE TA1142 [2] for uncontrolled COPD with raised blood eosinophils despite maximal inhaled therapy."
    },
    {
     "h": "Vaccines and cancer awareness",
     "t": "Annual influenza and pneumococcal vaccination; COVID-19 and RSV per current UKHSA Green Book [4] eligibility. NICE NG12 (updated April 2026) [3]: ever-smokers aged 40 and over with an unexplained symptom such as cough, breathlessness, weight loss or chest pain need an urgent chest X-ray; a change from her usual pattern should not be put down to COPD."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Coralie, I’m Dr Hughes. I understand your breathing’s been getting you down. Tell me about it.",
    "dom": "rto",
    "why": "Open start"
   },
   {
    "who": "pt",
    "text": "These inhalers just aren’t doing anything any more. I’m as breathless as ever and I keep getting chest infections. Can I have something stronger — one of those triple inhalers I’ve read about? I feel like I’m going backwards."
   },
   {
    "who": "dr",
    "text": "That sounds really frustrating, and I’m glad you’ve looked into it. Triple inhalers are definitely on the table. Can we look at how things are going first, then decide together what’s most likely to help?",
    "dom": "gs",
    "why": "Validates, keeps her option open and agrees an agenda"
   },
   {
    "who": "pt",
    "text": "Alright."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "What can’t you do now that you want to be able to do?",
    "dom": "rto",
    "why": "Explores the impact in her terms"
   },
   {
    "who": "pt",
    "text": "I have to stop more than I used to when I’m out walking. It’s getting me down."
   },
   {
    "who": "dr",
    "text": "And the chest infections — how many have needed steroids or antibiotics in the last year, and did any put you in hospital?",
    "dom": "tasks",
    "why": "Counts exacerbations for the NG115 escalation criteria"
   },
   {
    "who": "pt",
    "text": "More than once this year, I know that. I’d have to check about hospital."
   },
   {
    "who": "dr",
    "text": "I can check your record for that. Could you get your inhaler and show me exactly how you take it, as if I weren’t here?",
    "dom": "tasks",
    "why": "Asks for a technique demonstration"
   },
   {
    "who": "pt",
    "text": "Like this…"
   },
   {
    "who": "dr",
    "text": "Thank you. I can see a couple of things we can improve in how you breathe in with it — that’s really common, and it means less medicine reaches your lungs. Let me show you, and I’ll ask the nurse to check it with you in person.",
    "dom": "tasks",
    "why": "Identifies and corrects technique errors"
   },
   {
    "who": "pt",
    "text": "Nobody’s ever watched me do it."
   },
   {
    "who": "dr",
    "text": "Then this is worth doing. Honestly, how many days a week do you manage to use it?",
    "dom": "tasks",
    "why": "Non-judgemental adherence check"
   },
   {
    "who": "pt",
    "text": "Most days. Sometimes I forget if I’m feeling alright."
   },
   {
    "who": "dr",
    "text": "Thanks for being honest. Any coughing up blood, weight loss, ankle swelling or needing more pillows at night?",
    "dom": "tasks",
    "why": "Screens NICE NG12 (updated April 2026) red flags and heart failure"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said you feel like you’re going backwards. What worries you most about that?",
    "dom": "rto",
    "why": "Explores the cue"
   },
   {
    "who": "pt",
    "text": "Ending up stuck indoors. Not being able to manage on my own."
   },
   {
    "who": "dr",
    "text": "That’s a very real worry, and it’s exactly what I want to help you avoid. What were you hoping for from today?",
    "dom": "rto",
    "why": "Validates the fear and elicits expectations"
   },
   {
    "who": "pt",
    "text": "A stronger inhaler, I suppose."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s what I think. Some of this is likely the technique and missed days — a stronger inhaler taken the same way often disappoints. The treatment with the best evidence for breathlessness isn’t a drug at all: pulmonary rehabilitation, a supervised exercise and education course.",
    "dom": "tasks",
    "why": "Explains basics and offers pulmonary rehab"
   },
   {
    "who": "pt",
    "text": "Exercise? I can barely walk."
   },
   {
    "who": "dr",
    "text": "It’s designed for exactly that, with people at your level, and most people find they can do more afterwards. It’s one of the best ways to stay independent.",
    "dom": "rto",
    "why": "Links rehab to her concern about independence"
   },
   {
    "who": "pt",
    "text": "Alright, I’ll try it."
   },
   {
    "who": "dr",
    "text": "About the triple inhaler: it adds a steroid inhaler. With repeated flares it’s a reasonable step, and it can cut down flares. The trade-off is a slightly higher risk of pneumonia, so I want to be sure you’d benefit.",
    "dom": "tasks",
    "why": "NG115 escalation logic and ICS pneumonia trade-off"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "So here’s my suggestion. Today: sort the technique, a reminder to use it daily, and a blood count, which includes a type of white cell that helps us judge whether a steroid inhaler is likely to help. I’ll check your spirometry and flare history in the record, and refer you to pulmonary rehab.",
    "dom": "tasks",
    "why": "Shared plan: technique, FBC with eosinophils, record check, rehab"
   },
   {
    "who": "dr",
    "text": "If your record shows the flares meet the threshold, I’ll switch you to a single triple inhaler now rather than make you wait. If not, we review in a few weeks, and if you’re still struggling we try triple for three months and go back if it doesn’t help. Does that feel fair?",
    "dom": "rto",
    "why": "Negotiates a conditional, time-limited escalation"
   },
   {
    "who": "pt",
    "text": "Yes. That feels like a proper plan."
   },
   {
    "who": "dr",
    "text": "And your flu and pneumonia jabs — I’ll check they’re up to date, and whether you’re due any others. I’ll also update your rescue-pack plan so you can start treatment quickly.",
    "dom": "tasks",
    "why": "Vaccinations and self-management plan"
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you get much more breathless, drowsy or confused, call 999. If you cough up blood, lose weight without trying, or your cough changes, tell me — I wouldn’t want that put down to your COPD.",
    "dom": "gs",
    "why": "Specific safety-net including NICE NG12 (updated April 2026) awareness"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "Can you tell me the plan back?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Fix how I take it, use it every day, blood test, rehab, jabs, and a triple inhaler if my record shows the flares — otherwise review in a few weeks."
   },
   {
    "who": "dr",
    "text": "Exactly. The nurse will check your technique in person, and I’ll see you in four to six weeks.",
    "dom": "gs",
    "why": "Defined follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; acknowledged frustration and her research without dismissing the request.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Daily activity, independence, and the effect of breathlessness on mood and life at home.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “going backwards” and the missed doses when well.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (inhalers have stopped working), concern (losing independence), expectation (triple inhaler).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Technique demonstration, adherence, spirometry in the record, FBC with eosinophils, exacerbation count.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Poor technique and adherence, deconditioning, asthmatic features, heart failure, anaemia, anxiety, lung cancer.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about haemoptysis, weight loss, oedema and orthopnoea; NICE NG12 (updated April 2026) low threshold for ever-smokers.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Explained inadequate control of COPD with fixable contributors, and where triple therapy fits.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Technique and adherence fixed; pulmonary rehab; triple therapy on NG115 criteria with pneumonia trade-off and review.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Vaccinations, rescue-pack plan, and screening of cardiac, haematological and mood contributors.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 and red-flag symptoms named; nurse technique check; review in 4 to 6 weeks.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Older adults"
   ],
   "stem": {
    "name": "Coralie Beaumont",
    "age": "67 years · female",
    "pmh": [
     "COPD",
     "Ex-smoker"
    ],
    "meds": [
     "LABA/LAMA combination inhaler",
     "Short-acting reliever"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Repeated chest infections this year. Still breathless on LABA/LAMA. Inhaler technique not recorded as checked.",
    "reason": "“My inhalers just aren’t working any more — I need something stronger.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and validate",
     "d": "Acknowledge frustration and her research. Keep triple therapy on the table."
    },
    {
     "t": "1–4",
     "h": "Check the basics",
     "d": "Impact, exacerbation count, technique demonstration, adherence, red flags and heart failure screen."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "“Going backwards” = fear of losing independence. Name it."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Technique and adherence, pulmonary rehab, then NG115 triple-therapy criteria with the pneumonia trade-off. FBC, record check, vaccines, rescue plan."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 signs, NICE NG12 (updated April 2026) red flags, teach-back, nurse technique check, review in 4 to 6 weeks."
    }
   ],
   "wordPics": {
    "fail": "Prescribes a triple inhaler on request without watching her use her current one; no pulmonary rehab; no mention of pneumonia risk; or refuses outright and leaves her feeling dismissed.",
    "pass": "Checks technique and adherence, refers to pulmonary rehab, explains when triple therapy is appropriate with the pneumonia risk, and arranges review.",
    "exc": "All of the above, plus: applies the exact NG115 criteria (exacerbation count, 3-month trial for symptoms), links rehab to her fear of losing independence, checks the record for spirometry and asthmatic features, uses teach-back for technique, and sets a conditional plan so she is not made to wait unnecessarily."
   },
   "avoid": [
    {
     "dont": "“I’ll just switch you to the triple inhaler.”",
     "instead": "“Could you show me how you take your current one first?”",
     "why": "Escalating without a technique check is the core failure in this station."
    },
    {
     "dont": "“You don’t need a stronger inhaler, you need to use this one properly.”",
     "instead": "“A couple of small changes in how you breathe in could make a real difference — that’s very common.”",
     "why": "Blame damages the relationship; normalising errors keeps her engaged."
    },
    {
     "dont": "“The steroid inhaler is stronger, so it should work better.”",
     "instead": "“It can cut down flares, but it slightly raises the risk of pneumonia, so we’ll check it’s helping.”",
     "why": "NICE NG115 asks you to discuss and document the pneumonia risk."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Independence and mood",
     "t": "Breathlessness restricts activity, which leads to deconditioning, isolation and low mood. Pulmonary rehabilitation addresses all three."
    },
    {
     "h": "Practical barriers",
     "t": "Dexterity, device type, cost of prescriptions and remembering doses all affect adherence; a single combined inhaler helps."
    }
   ],
   "legal": [
    {
     "h": "Blue Badge and benefits",
     "t": "If breathlessness limits her mobility, she may be eligible for a Blue Badge or disability benefits; signpost where appropriate."
    }
   ],
   "professional": [
    {
     "h": "Shared decision-making",
     "t": "NICE NG197 (shared decision making, 2021): discuss benefits and risks, including the ICS pneumonia risk, and document the discussion."
    },
    {
     "h": "Inhaler review and prescribing",
     "t": "Check technique at every review. The practice nurse or community pharmacist (New Medicine Service when a new inhaler starts) can reinforce it."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Pulmonary rehabilitation, Asthma + Lung UK information and Breathe Easy support groups."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Haemoptysis, weight loss or change in cough in an ex-smoker",
     "Orthopnoea or ankle swelling (heart failure)",
     "Breathlessness at rest, drowsiness or confusion"
    ],
    "psychosocial": [
     "What she can no longer do, and her fear of losing independence",
     "Adherence pattern and practical barriers",
     "Mood and isolation"
    ],
    "ice": [
     "Idea: “The inhalers have stopped working.”",
     "Concern: going backwards and losing independence",
     "Expectation: a triple inhaler"
    ]
   },
   "diagnosis": "“Your COPD isn’t as well controlled as it could be. Part of that is likely how the inhaler is taken and missed days, and part is the flares. There’s a lot we can improve before and alongside a new inhaler.”",
   "diagnosisLay": "“An inhaler is like a key: the right key only works if you turn it the right way. Let’s get the turning right, and build up your fitness, and then see if you need a different key.”",
   "management": {
    "reflectIce": "“You told me you’re frightened of being stuck indoors. Pulmonary rehab is one of the best ways to keep you getting out, and that’s why I’m keen on it.”",
    "psychosocial": "Normalise technique errors; negotiate daily use; frame rehab around independence.",
    "sharedPlan": [
     "Correct technique; nurse check in person; daily use",
     "Pulmonary rehabilitation referral; vaccinations; rescue-pack plan",
     "FBC and record check; LABA+LAMA+ICS on NG115 criteria, or a 3-month trial for persistent symptoms, with pneumonia risk documented"
    ],
    "safetyNet": [
     "999: breathless at rest, drowsy or confused",
     "Report haemoptysis, weight loss or change in cough; review in 4 to 6 weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "COPD",
    "s": "Case walkthrough · NICE NG115",
    "href": "../cases/copd.html"
   },
   {
    "ic": "💠",
    "t": "COPD protocol",
    "s": "Inhaler pathway · triple therapy · rehab",
    "href": "management/copd.html"
   },
   {
    "ic": "🗺️",
    "t": "Breathlessness pathway",
    "s": "Visual algorithm · contributors",
    "href": "algorithms/breathlessness.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is passed by candidates who watch the patient use her inhaler. It is failed by those who escalate on request, or who refuse and leave her feeling unheard.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Switching to a triple inhaler without watching her use the current one.",
     "why": "NICE NG115 asks for a technique and adherence check before any change. “Management not in line with guidance.”",
     "fix": "“Could you show me exactly how you take it?” — then correct and teach back."
    },
    {
     "dom": "tasks",
     "fail": "No mention of pulmonary rehabilitation.",
     "why": "It is one of the most effective treatments for breathlessness; omitting it is a Tasks gap.",
     "fix": "Offer it early and link it to what she wants back."
    },
    {
     "dom": "tasks",
     "fail": "Adding ICS “because she wants stronger”, with no pneumonia discussion or review plan.",
     "why": "NICE NG115 sets exacerbation criteria, a 3-month trial for symptoms, and asks for the pneumonia risk to be discussed and documented.",
     "fix": "State the criteria and the trade-off, and set a review date."
    },
    {
     "dom": "rto",
     "fail": "“You just need to use it properly.”",
     "why": "Blame reads as dismissive and loses Relating marks.",
     "fix": "“That’s really common — a couple of small changes could help a lot.”"
    },
    {
     "dom": "rto",
     "fail": "Missing “I feel like I’m going backwards.”",
     "why": "“Does not explore the patient’s concerns.” Her fear of losing independence is the hinge of the plan.",
     "fix": "“What worries you most about going backwards?”"
    },
    {
     "dom": "gs",
     "fail": "A plan that ends with “we’ll see how you get on”.",
     "why": "No defined review or escalation point leaves her where she started.",
     "fix": "A conditional plan with a date: triple now if criteria met, otherwise review in 4 to 6 weeks."
    }
   ]
  }
 },
 "eczema-steroid-phobia": {
  "stem": {
   "name": "Anaya Sandhu",
   "age": "2-year-old girl (mother, Mrs Priya Sandhu, attending)",
   "pmh": [
    "Atopic eczema"
   ],
   "meds": [
    "Topical corticosteroid cream (issued previously)",
    "Emollient (moisturiser)"
   ],
   "allergy": "None recorded",
   "recent": "Eczema flare. Topical steroid issued at a previous consultation; mother reports she has not been using it.",
   "reason": "Video consultation: eczema worse, scratching at night, family not sleeping."
  },
  "knowledge": {
   "guideline": "NICE CG57 (2007, updated 2023) · NICE TA81 · NICE NG190 · MHRA Drug Safety Update (September 2021; May 2024) · BAD topical corticosteroids leaflet (2024)",
   "summary": "Emollients are the base of care, and a topical steroid of the right strength used for short bursts treats flares safely. Under-treatment through fear of steroids is the common harm.",
   "points": [
    {
     "h": "Emollients in quantity",
     "t": "NICE CG57: leave-on emollients for all children with atopic eczema, used even when the skin is clear and as a soap substitute; children commonly need 250–500 g a week. Do not offer emollient bath additives (2023 update)."
    },
    {
     "h": "Potency by site and severity",
     "t": "NICE CG57: mild potency for the face and neck (moderate for 3–5 days only in severe facial flares); moderate or potent for 7–14 days only in vulnerable sites such as the axillae and groin; no very potent steroid in children without specialist advice; no potent steroid under 12 months without specialist advice. Apply once or twice daily only (NICE TA81)."
    },
    {
     "h": "How much",
     "t": "One fingertip unit (from the tip of an adult index finger to the first crease) covers an area the size of two adult hands (BAD leaflet, 2024). Apply to active eczema only, until the flare settles, then stop."
    },
    {
     "h": "Safety facts for the steroid-phobic parent",
     "t": "NICE CG57: the benefits of topical steroids outweigh the risks when they are used correctly. MHRA (September 2021) links topical steroid withdrawal reactions to long-term, frequent or inappropriate use, mainly of moderate to high potency products. Packs are being relabelled with their potency (MHRA, May 2024)."
    },
    {
     "h": "Itch and sleep",
     "t": "NICE CG57: do not use antihistamines routinely. A 7–14-day trial of a sedating antihistamine can be offered to children aged 6 months and over during a flare with significant sleep disturbance; dose per BNFC."
    },
    {
     "h": "Infection and referral",
     "t": "Eczema herpeticum (clustered punched-out erosions or vesicles, rapid worsening, unwell): immediate systemic aciclovir and same-day referral (NICE CG57). Bacterial infection: NICE NG190 — no routine antibiotic if not systemically unwell; oral flucloxacillin when needed, dose per BNFC. Urgent referral for severe eczema not responding to optimal topical treatment after 1 week (NICE CG57)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, Mrs Sandhu, I’m Dr Evans. I can see Anaya’s eczema has been giving you all a hard time. Tell me what’s been happening.",
    "dom": "rto",
    "why": "Open question that acknowledges the family’s distress"
   },
   {
    "who": "pt",
    "text": "It’s really bad again. She’s scratching all night and none of us are sleeping. The doctor gave us a steroid cream, but I looked it up and I’m scared of steroids. Won’t they thin her skin or get into her body? I’ve just been using moisturiser, but it’s not enough."
   },
   {
    "who": "dr",
    "text": "Thank you for being so honest about that. Your worry is really important, and I want to answer it properly. Can I first ask a few questions and have a look at her skin on camera, then we’ll talk about the cream and make a plan you’re comfortable with?",
    "dom": "gs",
    "why": "Validates the fear early and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Yes, okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Where on her body is it worst, and how long has this flare been going on?",
    "dom": "tasks",
    "why": "Establishes extent and duration of the flare"
   },
   {
    "who": "pt",
    "text": "It’s all red and sore. It’s been bad for a while now and it just keeps getting worse."
   },
   {
    "who": "dr",
    "text": "You said nobody is sleeping. How many times is she waking, and is the itch stopping her playing or eating during the day?",
    "dom": "tasks",
    "why": "Uses sleep and daytime impact as markers of severity"
   },
   {
    "who": "pt",
    "text": "She wakes up scratching most of the night. In the day she’s grumpy and scratching."
   },
   {
    "who": "dr",
    "text": "Two important checks. Is any of the skin weeping, crusted or yellow? And have you seen clusters of little blisters or punched-out sores, or has she been feverish or unwell in herself?",
    "dom": "tasks",
    "why": "Screens for bacterial infection and eczema herpeticum"
   },
   {
    "who": "pt",
    "text": "Not that I’ve noticed. She’s not been poorly, just itchy."
   },
   {
    "who": "dr",
    "text": "That’s reassuring. Could you show me her skin on the camera, including any areas that look different?",
    "dom": "tasks",
    "why": "Examines what is possible on video; would convert to face to face if unclear"
   },
   {
    "who": "pt",
    "text": "(Shows the affected skin.) This is what it looks like."
   },
   {
    "who": "dr",
    "text": "Thank you. How much moisturiser are you getting through, how often do you put it on, and what do you wash her with?",
    "dom": "tasks",
    "why": "Checks actual treatment use and irritants"
   },
   {
    "who": "pt",
    "text": "I use it, but it’s not enough. I’d have to check what we wash her with."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "Tell me a bit more about what you read about steroids. What worries you most?",
    "dom": "rto",
    "why": "Explores the specific fear rather than assuming it"
   },
   {
    "who": "pt",
    "text": "That they thin the skin and get into the body. She’s so small. I don’t want to be the one who damages her skin."
   },
   {
    "who": "dr",
    "text": "That’s a loving reason to be careful, and a lot of what’s online is frightening and confusing. What were you hoping we could do today?",
    "dom": "rto",
    "why": "Validates the protective motive and elicits expectations"
   },
   {
    "who": "pt",
    "text": "Something safe that isn’t a steroid, I suppose. I just want her to sleep."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "Can I share the facts, and then you decide? The skin-thinning problems come from strong steroids used for long periods in the wrong places. The cream for a flare in a child is a milder strength, used once or twice a day on the red patches only, for a short burst until it settles, then stopped. Used like that, the benefits clearly outweigh the risks.",
    "dom": "tasks",
    "why": "Corrects the misconception with accurate potency and duration facts"
   },
   {
    "who": "pt",
    "text": "So it’s not like using it forever?"
   },
   {
    "who": "dr",
    "text": "Exactly. And there’s another side: leaving the eczema untreated isn’t risk-free either. The itch, the lost sleep and the broken skin, which lets infection in, are harms too. I’ll check your record to confirm the strength of the cream you were given, so we’re sure it’s the right one for where you’ll use it.",
    "dom": "tasks",
    "why": "Explains the harm of under-treatment and checks potency against site"
   },
   {
    "who": "pt",
    "text": "I hadn’t thought of it like that."
   },
   {
    "who": "dr",
    "text": "Here’s how much to use: squeeze a line from the tip of your finger to the first crease. That amount covers an area the size of two of your hands. Most flares settle within a week or two, and then you stop.",
    "dom": "tasks",
    "why": "Teaches the fingertip unit and a clear stop point"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "The moisturiser is the most important part and you can use lots: several times a day, as her soap too, and carry on when her skin is clear. I’ll prescribe big tubs so you don’t run out. Put it on first, wait about half an hour, then the steroid on the red areas.",
    "dom": "tasks",
    "why": "Emollients as the cornerstone, prescribed in quantity, with application order"
   },
   {
    "who": "pt",
    "text": "I can do that. What about the nights?"
   },
   {
    "who": "dr",
    "text": "Keep her nails short, cotton clothes, and swap the bubble bath for the moisturiser. If sleep is still very bad during this flare, a short course of a sleepy antihistamine for a week or two is an option. Would you like me to write all of this down as a plan?",
    "dom": "rto",
    "why": "Addresses sleep and triggers, offers a written plan"
   },
   {
    "who": "pt",
    "text": "Yes please. I think I can use the cream now that I understand it."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If the skin starts weeping or crusting yellow, call us. If you see clusters of blisters or sores that look punched out, or she becomes feverish or unwell, that needs to be seen the same day, because it can be a herpes infection that needs treatment straight away.",
    "dom": "gs",
    "why": "Specific infection safety-net including eczema herpeticum"
   },
   {
    "who": "pt",
    "text": "Okay, blisters or unwell means same day."
   },
   {
    "who": "dr",
    "text": "Just so I know I’ve explained it well, how will you use the two creams tonight?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Lots of moisturiser, then half an hour later a fingertip of the steroid on the red bits, once or twice a day, and stop when it settles."
   },
   {
    "who": "dr",
    "text": "That’s exactly right. I’ll see you both in a week, or sooner if it isn’t improving, and if it hasn’t settled with all this we can step up or ask a skin specialist.",
    "dom": "gs",
    "why": "Defined follow-up and escalation route"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let the mother describe the flare, the sleepless nights and her fear of steroids in her own words.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored the whole family’s sleep loss, daytime impact on Anaya, and the mother’s online research.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I’m scared of steroids” and “none of us are sleeping” and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (steroids thin the skin and enter the body), concern (harming her child), expectation (a safe non-steroid option, sleep).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Video inspection of affected skin with a low threshold for face-to-face review; checked the potency on record; asked about emollient quantity and soaps.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Flare of atopic eczema vs secondary bacterial infection vs eczema herpeticum; irritant triggers; possible under-treatment.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for eczema herpeticum and systemic illness; knew immediate aciclovir and same-day referral are needed.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named an under-treated flare of atopic eczema and explained it in plain language.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Emollients 250–500 g a week, soap substitute; mild or moderate steroid by site, once or twice daily, short burst, fingertip units; written plan.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Sleep and itch (nails, clothing, sedating antihistamine option), irritants, parental exhaustion.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review in a week; same-day advice for blisters or unwell; step up or refer if not settling.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Anaya Sandhu",
    "age": "2 years · female",
    "pmh": [
     "Atopic eczema"
    ],
    "meds": [
     "Topical corticosteroid (issued, not used)",
     "Emollient"
    ],
    "allergy": "None recorded",
    "recent": "Current flare of eczema. Steroid issued previously; mother declined to use it.",
    "reason": "Mother booked: \"Her eczema is really bad again and none of us are sleeping.\""
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and validate",
     "d": "Let her voice the steroid fear. Acknowledge it before any facts."
    },
    {
     "t": "1–5",
     "h": "Flare and infection",
     "d": "Extent, sleep, daytime impact, weeping or crusting, blisters, fever. See the skin on camera. What is actually being used?"
    },
    {
     "t": "5–7",
     "h": "ICE",
     "d": "Pin down exactly what she read and fears, and what she wants."
    },
    {
     "t": "7–10",
     "h": "Facts and plan",
     "d": "Potency, duration, fingertip units, harm of under-treatment; emollients in quantity; triggers and sleep; written plan."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Eczema herpeticum same day; bacterial signs; teach-back; review in a week."
    }
   ],
   "wordPics": {
    "fail": "Dismisses the fear (“steroids are perfectly safe, just use them”) or goes along with it and gives only moisturiser; no check for infection; no quantities or instructions; mother leaves still unwilling to treat.",
    "pass": "Acknowledges the worry; explains correct potency and short bursts; prescribes plenty of emollient; checks for infection; gives a basic safety-net and follow-up.",
    "exc": "All of the above, plus: explores exactly what she read; balances steroid risks against the harm of untreated eczema; teaches fingertip units and order of application; addresses sleep; names eczema herpeticum clearly; gives a written plan and confirms with teach-back that she will now use it."
   },
   "avoid": [
    {
     "dont": "\"Steroid creams are completely safe — there’s nothing to worry about.\"",
     "instead": "\"Used at the right strength for short bursts, the benefits clearly outweigh the risks. Let me explain where the thinning worry comes from.\"",
     "why": "Blanket reassurance sounds dismissive and is not accurate; honest facts build trust."
    },
    {
     "dont": "\"Just use it thinly.\"",
     "instead": "\"Use a fingertip’s worth for an area the size of two of your hands.\"",
     "why": "“Thinly” leads to under-dosing; the fingertip unit gives a clear amount."
    },
    {
     "dont": "\"Carry on with the moisturiser and see how it goes.\"",
     "instead": "\"Moisturiser is the base, and this flare also needs the steroid for a short burst.\"",
     "why": "Colluding with the fear leaves the child itchy and sleepless, which is the real harm."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family impact",
     "t": "Broken sleep affects the whole household. Ask how the parents are coping; a named plan reduces helplessness."
    },
    {
     "h": "Nursery",
     "t": "NICE CG57 advises a supply of emollient at nursery or school so it can be applied during the day."
    }
   ],
   "legal": [
    {
     "h": "Consent for a young child",
     "t": "The parent consents on Anaya’s behalf; share information clearly so the decision is truly informed (GMC Decision making and consent, 2020)."
    }
   ],
   "professional": [
    {
     "h": "Medicines safety",
     "t": "MHRA (September 2021): tell patients to use topical steroids at the right potency and for the right duration; withdrawal reactions relate to long-term inappropriate use. Check the potency issued matches the site."
    },
    {
     "h": "Written information",
     "t": "NICE CG57: give verbal and written information with a demonstration of how to apply treatments."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "National Eczema Society for parent information; the community pharmacist can reinforce technique and quantities."
    },
    {
     "h": "Health visitor",
     "t": "The health visitor can support with sleep and treatment routines for under-5s."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Clustered punched-out erosions or vesicles, rapid worsening, fever or an unwell child — possible eczema herpeticum, same-day",
     "Weeping, crusting or spreading infection with systemic upset",
     "Severe eczema not responding after 1 week of optimal topical treatment — urgent referral",
     "Faltering growth or concerns about care"
    ],
    "psychosocial": [
     "Sleep loss for the child and parents",
     "Where the steroid fear came from and how strongly it is held",
     "Nursery, routines and who applies the treatment"
    ],
    "ice": [
     "Idea: “Steroids will thin her skin or get into her body”",
     "Concern: being the one who harms her child; nobody sleeping",
     "Expectation: a safe option that isn’t a steroid"
    ]
   },
   "diagnosis": "“This is a flare of atopic eczema that isn’t being fully treated. I don’t see signs of infection from what you’ve told me, and we’ll keep watching for them.”",
   "diagnosisLay": "“Think of her skin as a leaky wall. The moisturiser patches the wall every day. The steroid is the fire extinguisher for a flare — a short, controlled burst, then you put it away.”",
   "management": {
    "reflectIce": "“You’ve held back the steroid because you want to protect her. Using it the right way, for a short time, is also protecting her — from the itch and the sleepless nights.”",
    "psychosocial": "Plan around bedtime: nails, cotton clothing, emollient routine, and a short sedating antihistamine course if sleep stays very poor during the flare.",
    "sharedPlan": [
     "Emollient generously several times a day and as soap substitute; large tubs prescribed",
     "Topical steroid of the right potency for the site, once or twice daily, fingertip units, until settled then stop",
     "Written step-up and step-down plan"
    ],
    "safetyNet": [
     "Blisters, punched-out sores, fever or unwell — same-day review",
     "Weeping or crusting — contact the practice; review in a week, refer if not settling"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Eczema",
    "s": "Case walkthrough · NICE CG57",
    "href": "../cases/eczema.html"
   },
   {
    "ic": "💠",
    "t": "Eczema protocol",
    "s": "Potency ladder · fingertip units",
    "href": "management/eczema.html"
   },
   {
    "ic": "🗺️",
    "t": "Widespread itch",
    "s": "Visual algorithm · causes of itch",
    "href": "algorithms/widespread-itch.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is about trust. Candidates fail when they either brush the fear aside or give in to it, and when they forget to check for infection.",
   "items": [
    {
     "dom": "rto",
     "fail": "Telling her steroids are “completely safe” before asking what she read.",
     "why": "The fear is the hidden agenda. Dismissing it leads to a parent who agrees in the room and doesn’t use the cream at home.",
     "fix": "Ask “What worries you most?” then answer that specific worry with accurate facts."
    },
    {
     "dom": "tasks",
     "fail": "Giving more moisturiser only, because the mother prefers it.",
     "why": "NICE CG57 uses stepped care; a flare needs a topical steroid. Under-treatment prolongs itch and sleep loss.",
     "fix": "Explain that emollient is the base and the steroid is a short burst for flares."
    },
    {
     "dom": "tasks",
     "fail": "No check for eczema herpeticum or bacterial infection.",
     "why": "Missing eczema herpeticum is a safety failure; it needs immediate aciclovir and same-day referral.",
     "fix": "Ask about blisters, punched-out sores, weeping, crusting and fever in every flare."
    },
    {
     "dom": "tasks",
     "fail": "Vague instructions: “apply thinly when needed”.",
     "why": "Vague advice leads to under-dosing and stop-start use.",
     "fix": "Fingertip units, once or twice daily, to red areas only, until settled, and plenty of emollient."
    },
    {
     "dom": "gs",
     "fail": "No written plan and no check that she understood.",
     "why": "NICE CG57 advises verbal and written information with demonstration.",
     "fix": "Offer a written plan and use teach-back: “How will you use the creams tonight?”"
    },
    {
     "dom": "gs",
     "fail": "Ignoring the sleep problem.",
     "why": "Sleep loss is what brought her in. Leaving it out misses her real agenda.",
     "fix": "Address night-time itch directly and mention the short sedating antihistamine option."
    }
   ]
  }
 },
 "fgm-abroad": {
  "stem": {
   "name": "Halima Yusuf",
   "age": "34-year-old woman",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "None recorded",
   "recent": "No recent consultations.",
   "reason": "Video consultation booked with no reason given: \"Personal — would like to speak to a doctor.\""
  },
  "knowledge": {
   "guideline": "FGM Act 2003 (as amended by the Serious Crime Act 2015) · Multi-agency statutory guidance on FGM (Home Office, updated July 2020) · Mandatory reporting of FGM: procedural information (Home Office/DH) · FGM risk and safeguarding guidance for professionals (DH) · Working Together to Safeguard Children (HM Government, 2023)",
   "summary": "A girl at risk of FGM is a child at risk of significant harm. The GP acts on it the same day through a safeguarding referral; the mandatory police-reporting duty is for known FGM in under-18s, not risk.",
   "points": [
    {
     "h": "The offences",
     "t": "FGM Act 2003: performing FGM, or aiding or procuring it, is an offence with a maximum of 14 years’ imprisonment. Since the 2015 amendments the law covers acts done abroad by or to UK nationals or people habitually resident in the UK, so taking a girl abroad for FGM is an offence."
    },
    {
     "h": "Failing to protect",
     "t": "Section 3A (added 2015): a person responsible for a girl under 16 when FGM is committed against her can be guilty of failing to protect her (maximum 7 years). Responsibility can include relatives looking after her over a holiday."
    },
    {
     "h": "FGM Protection Orders",
     "t": "A civil court order to protect a girl at risk. It can require surrender of passports and ban travel. The girl, a local authority (without the court’s leave) or any other person with the court’s leave can apply. Breach is a criminal offence (maximum 5 years)."
    },
    {
     "h": "Mandatory reporting — know its limits",
     "t": "Regulated health and social care professionals and teachers in England and Wales must report to the police (usually 101) when a girl under 18 discloses FGM or they see physical signs of it. Report within one month, and best practice is by the end of the next working day. The duty does not cover girls at risk or suspected cases: those go through local safeguarding procedures."
    },
    {
     "h": "At-risk child: what to do",
     "t": "Multi-agency statutory guidance: refer to children’s social care (and police if there is immediate danger, via 999) following local safeguarding procedures; involve the practice safeguarding lead; do not approach the family yourself. Imminent travel makes it urgent."
    },
    {
     "h": "The adult who discloses her own FGM",
     "t": "An adult woman with FGM is not reported to the police. Record it in her notes and submit to the FGM Enhanced Dataset, which is mandatory for GP practices; consent is not needed, but explain it to her. Offer referral to specialist FGM services."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, Ms Yusuf, I’m Dr Patel. Are you somewhere you can talk privately? Take your time and tell me what’s on your mind.",
    "dom": "rto",
    "why": "Checks privacy on video and opens gently"
   },
   {
    "who": "pt",
    "text": "I need to tell someone, and I don’t know if I’m doing the right thing. My brother’s daughter, my niece, she’s 7. They’re taking her ‘back home’ for the summer. In our family, that’s when girls are… cut. I went through it myself. I can’t let it happen to her, but I don’t want to destroy my family. What do I do?"
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That took real courage, and you are doing the right thing by her. I’m going to help you with this, and you won’t be carrying it on your own.",
    "dom": "rto",
    "why": "Acknowledges courage and relieves her of the burden"
   },
   {
    "who": "pt",
    "text": "I’ve been sick with worry about it."
   },
   {
    "who": "dr",
    "text": "I can hear that. I want to be honest with you from the start: what you’ve described is a child at risk of serious harm, and I have a duty to act to protect her. I’ll explain everything as we go. First I need to understand the details. Is that okay?",
    "dom": "gs",
    "why": "Honest about the duty early, and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Yes. I knew you might have to do something."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Can you tell me her name, her parents’ names and where they live?",
    "dom": "tasks",
    "why": "Gathers the identifying details the referral needs"
   },
   {
    "who": "pt",
    "text": "Yes, I can give you all that."
   },
   {
    "who": "dr",
    "text": "When are they planning to travel, and where to? Do you know if tickets are booked?",
    "dom": "tasks",
    "why": "Establishes timing, as imminent travel changes the urgency"
   },
   {
    "who": "pt",
    "text": "They said the summer holidays. I don’t know the exact date or if they’ve booked yet."
   },
   {
    "who": "dr",
    "text": "What makes you think she will be cut on this trip? Has anyone said so?",
    "dom": "tasks",
    "why": "Clarifies the specific risk indicators without investigating"
   },
   {
    "who": "pt",
    "text": "It’s what happens in our family at that age. It’s what happened to me when I was taken back."
   },
   {
    "who": "dr",
    "text": "Are there other girls in the family, here or anywhere else, who might also be at risk?",
    "dom": "tasks",
    "why": "Considers siblings and other girls"
   },
   {
    "who": "pt",
    "text": "I don’t know about everyone. I’d have to think."
   },
   {
    "who": "dr",
    "text": "That’s fine; social care will ask about that too. And are you safe yourself? Could telling me put you at risk from anyone in the family?",
    "dom": "tasks",
    "why": "Checks the discloser’s own safety"
   },
   {
    "who": "pt",
    "text": "I don’t think they’d hurt me. But they’d never speak to me again."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "That’s a painful thing to face. What’s your biggest worry about what happens next?",
    "dom": "rto",
    "why": "Explores her fear of family breakdown"
   },
   {
    "who": "pt",
    "text": "That my brother goes to prison and the family blames me. And that nobody believes me and she gets cut anyway."
   },
   {
    "who": "dr",
    "text": "Both of those make sense. What were you hoping I could do?",
    "dom": "rto",
    "why": "Elicits her expectations"
   },
   {
    "who": "pt",
    "text": "I don’t know. Stop it happening. Without it all being my fault."
   },
   {
    "phase": "Explanation",
    "clock": "6–9 min",
    "who": "dr",
    "text": "I understand this is your family, and I’m not judging you or your community. But cutting a girl is illegal in this country and is harm to a child, whatever the tradition. It is also illegal to take a girl abroad to have it done. Protecting her has to come first.",
    "dom": "tasks",
    "why": "Culturally sensitive, clear on the law, no collusion"
   },
   {
    "who": "pt",
    "text": "I know. That’s why I came."
   },
   {
    "who": "dr",
    "text": "So I’ll make a referral to children’s social care today, and I’ll involve our practice safeguarding lead. Their job is to protect her. They can work with the police, and if needed they can apply to a court for a protection order, which can stop her being taken abroad, including handing in passports.",
    "dom": "tasks",
    "why": "Same-day safeguarding referral and explains FGM Protection Orders"
   },
   {
    "who": "pt",
    "text": "Will they tell my brother it was me?"
   },
   {
    "who": "dr",
    "text": "I can’t promise nobody will work it out, but I will tell them you’re worried about your safety and your family, and they will think about how they approach this. I won’t go to your brother myself. You haven’t done anything wrong: you’re protecting her.",
    "dom": "rto",
    "why": "Honest about confidentiality limits and supports her"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "You also said you went through this yourself. I’d like to record that in your notes, which we do for every woman who has had FGM, and it is sent to a national NHS dataset that is only published as anonymous figures. That is not a police report — you’re not in any trouble. Would you like me to refer you to a specialist FGM clinic, or to someone to talk to?",
    "dom": "tasks",
    "why": "Records her own FGM, explains recording is not reporting, and offers survivor support"
   },
   {
    "who": "pt",
    "text": "Maybe later. I’ve never talked about it."
   },
   {
    "who": "dr",
    "text": "The offer stays open. If you learn the travel date, or that it has been brought forward, tell me or the police straight away — if she is about to be taken, call 999. Can I have a number that’s safe to call you on?",
    "dom": "gs",
    "why": "Specific urgent safety-net and safe contact"
   },
   {
    "who": "pt",
    "text": "Yes, this mobile is fine."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Let me check we’re clear. What will happen after this call?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "You’re telling social care today, they may involve the police and a court order, and I call 999 if she’s about to go."
   },
   {
    "who": "dr",
    "text": "That’s right. I’ll document everything carefully and call you in the next few days to see how you are. You did the right thing today.",
    "dom": "gs",
    "why": "Documentation and planned follow-up for the discloser"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Checked privacy on video; open question; let her disclose at her own pace.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Family context, her fear of blame and breakdown, her own history and her safety.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I went through it myself” and “I don’t want to destroy my family” and responded to both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (the trip is for cutting), concern (family blame, not being believed), expectation (stop it without it being her fault).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Gathered name, parents, address, travel dates and destination, and other girls at risk; did not investigate further.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Risk indicators: family tradition, age, planned trip to a practising community in the summer, and an affected close relative.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Recognised significant harm to a child; considered imminent travel (999) and the aunt’s own safety.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated clearly: a child at risk of FGM, a safeguarding concern requiring referral, not mandatory reporting.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day referral to children’s social care with the safeguarding lead; FGM Protection Order explained; no approach to the family.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Recorded the aunt’s own FGM and the Enhanced Dataset; offered FGM clinic and psychological support.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Safe contact number; call 999 if travel imminent; documented; follow-up call arranged.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Ethnicity, culture & diversity",
    "Children & young people",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Halima Yusuf",
    "age": "34 years · female",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "None"
    ],
    "allergy": "None recorded",
    "recent": "No recent attendances.",
    "reason": "Booked video call: \"Personal — would like to speak to a doctor.\""
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Privacy and listen",
     "d": "Check she can talk safely. Let her disclose. Thank her."
    },
    {
     "t": "1–4",
     "h": "Proportionate facts",
     "d": "Name, parents, address, when and where, other girls, her own safety. Don’t interrogate."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "Fear of blame and family breakdown, fear of not being believed."
    },
    {
     "t": "6–10",
     "h": "Law and action",
     "d": "Illegal including abroad; referral to children’s social care today; safeguarding lead; FGM Protection Order; limits of confidentiality."
    },
    {
     "t": "10–12",
     "h": "Her needs and close",
     "d": "Record her own FGM; offer support; 999 if travel imminent; safe number; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Keeps it confidential or tells her to talk to her brother; says the GP must “report it to the police under mandatory reporting” for a girl not yet cut, or does nothing; no referral; judges the family or colludes with “it’s their culture”.",
    "pass": "Recognises a child at risk; makes a prompt referral to children’s social care; explains that FGM is illegal including abroad; is kind to the aunt; gives some safety-net.",
    "exc": "All of the above, plus: gathers exactly what the referral needs; checks for other girls and for the aunt’s safety; explains FGM Protection Orders; correctly separates mandatory reporting (known FGM under 18) from at-risk referral; records the aunt’s own FGM and offers her support; is honest about confidentiality; gives a 999 plan for imminent travel."
   },
   "avoid": [
    {
     "dont": "\"Let’s keep this between us for now and see what happens.\"",
     "instead": "\"I can’t keep this just between us, because a child could be seriously harmed. I’ll make a referral today and explain every step.\"",
     "why": "Delay can mean the child is taken abroad and cut."
    },
    {
     "dont": "\"I have to report this to the police under the mandatory reporting law.\"",
     "instead": "\"I need to refer this to children’s social care today; they work with the police to protect her.\"",
     "why": "Mandatory reporting covers known FGM in a girl under 18. A child at risk goes through safeguarding referral."
    },
    {
     "dont": "\"Why don’t you talk to your brother and try to change his mind?\"",
     "instead": "\"Please don’t confront anyone. Leave that to the professionals, who can do it safely.\"",
     "why": "Alerting the family can bring travel forward and put the aunt at risk."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family and community",
     "t": "FGM is often upheld by family pressure and a belief that it protects the girl. The discloser may lose family relationships; offer ongoing support."
    },
    {
     "h": "The survivor’s own needs",
     "t": "Disclosure may bring up her own trauma. Offer referral to specialist FGM services and psychological support at her pace."
    }
   ],
   "legal": [
    {
     "h": "FGM Act 2003 (as amended 2015)",
     "t": "Offences apply abroad for UK nationals and residents; failing to protect a girl under 16 is an offence; victims have lifelong anonymity; FGM Protection Orders can prevent travel."
    },
    {
     "h": "Mandatory reporting duty",
     "t": "Known FGM in a girl under 18 (disclosed or seen) must be reported to the police by the regulated professional personally, within one month and ideally by the end of the next working day. It does not apply to girls at risk."
    },
    {
     "h": "Safeguarding",
     "t": "Working Together to Safeguard Children (2023) and the multi-agency statutory guidance on FGM (2020): refer at-risk girls to children’s social care; call 999 if the danger is immediate."
    }
   ],
   "professional": [
    {
     "h": "Confidentiality",
     "t": "GMC Confidentiality (2017): disclosure without consent is justified where it is necessary to protect a child from serious harm. Tell her what you will share and why."
    },
    {
     "h": "Protecting children",
     "t": "GMC Protecting children and young people (2012): all doctors must act on concerns about a child, including children who are not their patients."
    },
    {
     "h": "Records",
     "t": "Record the disclosure, what you did and who you told. Record her own FGM and submit to the FGM Enhanced Dataset."
    }
   ],
   "community": [
    {
     "h": "Resources",
     "t": "The Home Office “Statement opposing FGM” can be given to families to take abroad. The NSPCC FGM helpline and specialist FGM clinics support families and survivors."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Travel booked or imminent — 999 and urgent social care referral",
     "Other girls in the family at the same age or younger",
     "Threats to the discloser or signs of honour-based abuse",
     "Any sign the niece has already been cut — this becomes a mandatory police report"
    ],
    "psychosocial": [
     "Her position in the family and fear of being blamed",
     "Her own experience of FGM and its effects on her",
     "Safe ways to contact her"
    ],
    "ice": [
     "Idea: “The summer trip is when girls in our family are cut”",
     "Concern: destroying the family, being blamed, not being believed",
     "Expectation: to stop it happening without it being her fault"
    ]
   },
   "diagnosis": "“What you’ve told me means your niece is at risk of serious harm. That is a safeguarding concern I must act on today.”",
   "diagnosisLay": "“You’ve raised the alarm. Now the people whose job it is to protect children take over, so the weight isn’t on your shoulders any more.”",
   "management": {
    "reflectIce": "“You’re afraid of losing your family and being blamed. Protecting her is not betraying them. You are doing what the law and she both need.”",
    "psychosocial": "Plan safe contact, don’t let her confront the family, and offer her own FGM support when she is ready.",
    "sharedPlan": [
     "Referral to children’s social care today; involve the practice safeguarding lead",
     "Social care and police can seek an FGM Protection Order to stop travel",
     "Record her own FGM in her notes and the Enhanced Dataset; offer FGM clinic referral"
    ],
    "safetyNet": [
     "Travel imminent or brought forward — call 999",
     "Follow-up call in a few days; document everything"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Safeguarding",
    "s": "Case walkthrough · children at risk",
    "href": "../cases/safeguarding.html"
   },
   {
    "ic": "🧭",
    "t": "Consultation spine",
    "s": "Structure for difficult disclosures",
    "href": "consultation-spine.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed on law and on action. Candidates mix up mandatory reporting with safeguarding referral, delay, or ask the aunt to handle it herself.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Saying the mandatory reporting duty applies and that you will “report it to the police” as the only action.",
     "why": "The duty covers known FGM in a girl under 18. For a girl at risk, the statutory guidance route is a safeguarding referral to children’s social care.",
     "fix": "“I’m referring her to children’s social care today; they work with the police and can apply for a protection order.”"
    },
    {
     "dom": "tasks",
     "fail": "Agreeing to wait until she finds out more, or advising her to talk to her brother.",
     "why": "Delay and alerting the family can lead to the girl being taken abroad sooner.",
     "fix": "Act today, and ask her not to confront anyone."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about other girls in the family or the travel date.",
     "why": "The referral needs these facts, and siblings may be at the same risk.",
     "fix": "Ask who, when, where, and whether any other girls could be affected."
    },
    {
     "dom": "rto",
     "fail": "Talking about “your culture” in a way that sounds judgemental, or accepting it as a reason to hold back.",
     "why": "Both lose marks: judging alienates her, and collusion fails the child.",
     "fix": "“I’m not judging your family. But no tradition can make harming a child acceptable.”"
    },
    {
     "dom": "rto",
     "fail": "Promising complete confidentiality or that nobody will know it was her.",
     "why": "False promises break trust later.",
     "fix": "Be honest about what you share and why, and tell social care about her safety concerns."
    },
    {
     "dom": "gs",
     "fail": "Forgetting that she disclosed her own FGM.",
     "why": "She is a survivor with her own health needs, and recording is required.",
     "fix": "Record it, explain that recording is not reporting, and offer specialist support."
    }
   ]
  }
 },
 "fgm-at-smear": {
  "stem": {
   "name": "Amara Conteh",
   "age": "29-year-old woman",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "None recorded",
   "recent": "Recent cervical screening with the practice nurse. Nurse’s note: appearance consistent with female genital mutilation; patient asked to see a GP to discuss.",
   "reason": "Video consultation following the nurse’s request."
  },
  "knowledge": {
   "guideline": "FGM Act 2003 (as amended by the Serious Crime Act 2015) · Mandatory reporting of FGM: procedural information (Home Office/DH) · FGM Enhanced Dataset (NHS England) · FGM risk and safeguarding guidance for professionals (DH) · RCOG Green-top Guideline No. 53 (2015) · NICE NG116",
   "summary": "An adult with FGM done in childhood is a survivor, not an offender. She is not reported to the police; her FGM is recorded, girls in her family are risk-assessed, and she is offered care.",
   "points": [
    {
     "h": "No police report for an adult",
     "t": "The mandatory reporting duty applies only when a girl under 18 discloses FGM or physical signs are seen in a girl under 18. It does not apply to women aged 18 and over, or to girls at risk (Home Office procedural information)."
    },
    {
     "h": "Record it",
     "t": "Recording FGM is mandatory for GP practices, acute trusts and mental health trusts. Record it in her notes and submit to the FGM Enhanced Dataset each time FGM is identified or treated. Her consent is not required, but explain the dataset to her; published data are anonymous."
    },
    {
     "h": "Assess the risk to girls",
     "t": "When an adult woman is found to have FGM, ask whether she has daughters or other girls under 18 in her family and assess their risk (DH risk and safeguarding guidance; RCOG GTG 53). A girl under 18 with a family history of FGM can be flagged on the national FGM Information Sharing system (FGM-IS). Refer to children’s social care if any girl is at risk."
    },
    {
     "h": "Types",
     "t": "WHO classification (international): type 1 clitoridectomy, type 2 excision, type 3 infibulation (narrowing of the vaginal opening with a covering seal), type 4 other harmful procedures."
    },
    {
     "h": "Physical care",
     "t": "Ask about urinary symptoms and infections, painful or prolonged periods, pain with sex and future pregnancy. RCOG GTG 53: offer referral to a specialist FGM service; deinfibulation can be offered for type 3, ideally before pregnancy or antenatally."
    },
    {
     "h": "Psychological care",
     "t": "Ask about flashbacks, avoidance and low mood. NICE NG116: offer trauma-focused psychological therapy for clinically important PTSD symptoms."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, Ms Conteh, I’m Dr Okafor. Thank you for coming back to talk to me. Are you somewhere private? Tell me how you’re feeling about today.",
    "dom": "rto",
    "why": "Checks privacy and opens with her feelings"
   },
   {
    "who": "pt",
    "text": "The nurse said she’d noticed something during my smear, about the cutting I had as a little girl back home. Am I in trouble? Are you going to report me to the police? I didn’t choose it — it was done to me when I was 6. Please don’t make this a big thing."
   },
   {
    "who": "dr",
    "text": "Let me answer that straight away: you are not in trouble, and I am not reporting you to the police. This was done to you as a child. You haven’t done anything wrong.",
    "dom": "tasks",
    "why": "Corrects the police fear immediately and accurately"
   },
   {
    "who": "pt",
    "text": "(Exhales.) Okay. I was so scared."
   },
   {
    "who": "dr",
    "text": "I’m sorry you’ve been frightened. I’d like to explain what happens now, check how you are in yourself, and see whether there’s anything we can help with. Is that all right?",
    "dom": "gs",
    "why": "Sets a clear, gentle agenda"
   },
   {
    "who": "pt",
    "text": "Yes."
   },
   {
    "phase": "Explaining the duties",
    "clock": "1–3 min",
    "who": "dr",
    "text": "I want to be open with you about two things. First, I write it in your medical record, as we do for every woman who has had FGM, and some of that information goes to an NHS dataset. The published figures never name anyone. That is recording, not reporting to the police — they’re completely different.",
    "dom": "tasks",
    "why": "Explains the recording duty and the Enhanced Dataset honestly"
   },
   {
    "who": "pt",
    "text": "So the police won’t see it?"
   },
   {
    "who": "dr",
    "text": "No. The law only asks us to tell the police when a girl under 18 has had FGM. You’re an adult, so that doesn’t apply to you.",
    "dom": "tasks",
    "why": "States the scope of mandatory reporting correctly"
   },
   {
    "who": "pt",
    "text": "What’s the second thing?"
   },
   {
    "who": "dr",
    "text": "The second is about protecting girls. Because it happened in your family, we ask every woman in your situation whether there are daughters, sisters or nieces under 18 who might be at risk. It’s not about blaming you. Is that something you’d be willing to talk about?",
    "dom": "tasks",
    "why": "Introduces the safeguarding risk assessment for girls"
   },
   {
    "who": "pt",
    "text": "Why do you need to know? I’d never let anyone do that to a child."
   },
   {
    "who": "dr",
    "text": "I believe you, and I can hear how strongly you feel. We ask everyone, because sometimes it’s other relatives who decide. If you have a daughter, we would note the family history in her record so that the people caring for her know to support you in protecting her.",
    "dom": "rto",
    "why": "Explains the purpose without accusation"
   },
   {
    "who": "pt",
    "text": "I’d need to think about who you mean. I don’t want anyone getting into trouble."
   },
   {
    "who": "dr",
    "text": "That’s fair. Let’s come back to it before we finish. If any girl were at risk, I would share that with children’s social care to protect her — and I’d tell you first.",
    "dom": "tasks",
    "why": "Is honest about when a referral would follow"
   },
   {
    "phase": "Her health",
    "clock": "3–7 min",
    "who": "dr",
    "text": "Now, this is also a chance to help you. Some women have problems they’ve never mentioned: trouble passing urine, infections, painful or heavy periods, or pain during sex. Do any of those happen to you?",
    "dom": "tasks",
    "why": "Screens for physical complications"
   },
   {
    "who": "pt",
    "text": "I’ve never really talked about any of that with anyone."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me — you can talk about as much or as little as you like. Is pregnancy something you’re thinking about, now or in the future? Some types of cutting need planning ahead of pregnancy and birth.",
    "dom": "tasks",
    "why": "Checks obstetric relevance sensitively"
   },
   {
    "who": "pt",
    "text": "Would it be a problem?"
   },
   {
    "who": "dr",
    "text": "It depends on the type. Where the opening has been narrowed, there’s a small operation called deinfibulation that opens it, which can make periods, passing urine, sex and birth easier. It’s best done before a pregnancy. A specialist FGM clinic, where the staff see this every day, can examine you and talk it through.",
    "dom": "tasks",
    "why": "Explains deinfibulation and specialist referral"
   },
   {
    "who": "pt",
    "text": "I didn’t know that was possible."
   },
   {
    "who": "dr",
    "text": "And how has it affected you emotionally? Some women get memories coming back, nightmares, or feel anxious around smears or being examined.",
    "dom": "tasks",
    "why": "Screens for psychological impact"
   },
   {
    "who": "pt",
    "text": "I don’t like thinking about it."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "7–9 min",
    "who": "dr",
    "text": "That makes a lot of sense. Before today, what did you think would happen?",
    "dom": "rto",
    "why": "Explores her original ideas and concerns"
   },
   {
    "who": "pt",
    "text": "That I’d be reported and my family would be in trouble. That people would look at me differently."
   },
   {
    "who": "dr",
    "text": "I’m glad we’ve cleared that up. What would be most helpful for you now?",
    "dom": "rto",
    "why": "Elicits her expectations"
   },
   {
    "who": "pt",
    "text": "Maybe the clinic. I want to understand what my options are."
   },
   {
    "phase": "Shared plan",
    "clock": "9–11 min",
    "who": "dr",
    "text": "Then let’s do this: I’ll refer you to the specialist FGM clinic. For your next smear, we can book a longer appointment with a nurse you know, and you can stop at any time. If you’d like, I can also refer you for talking therapy — that’s your choice.",
    "dom": "tasks",
    "why": "Shared plan with specialist, trauma-informed screening and psychological support"
   },
   {
    "who": "pt",
    "text": "The clinic yes. The talking I’ll think about."
   },
   {
    "who": "dr",
    "text": "That’s completely fine. And about girls in your family — would you be willing to come back and talk that through, or do it now?",
    "dom": "tasks",
    "why": "Returns to the risk assessment rather than dropping it"
   },
   {
    "who": "pt",
    "text": "I’ll come back. I understand why you ask."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Thank you. If you have fever, severe pain, or can’t pass urine, get seen the same day. And if you ever hear of a girl who might be taken to be cut, tell me or call the police straight away. Can you tell me what we’ve agreed?",
    "dom": "gs",
    "why": "Safety-net plus teach-back"
   },
   {
    "who": "pt",
    "text": "No police for me. You record it. I go to the FGM clinic, we talk about the girls in my family next time, and I call if anything is urgent."
   },
   {
    "who": "dr",
    "text": "That’s right. I’ll book you back in two weeks. You’ve done nothing wrong by coming today.",
    "dom": "gs",
    "why": "Defined follow-up and closes with dignity"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Checked privacy; responded first to her question about the police before any agenda.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored her fears about family and being judged, and her feelings around examinations.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “please don’t make this a big thing” and “I don’t like thinking about it” and responded.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (she will be reported), concern (family in trouble, being judged), expectation (reassurance, not a big deal).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Offered specialist FGM clinic examination; planned a trauma-informed approach to future screening; no examination forced.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Type of FGM unknown; urinary, menstrual, sexual and obstetric complications; psychological trauma; girls at risk.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for urinary retention, infection and PTSD symptoms; considered risk to any girls under 18.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Adult survivor of childhood FGM: not a police matter; recording and safeguarding assessment apply.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Record and Enhanced Dataset explained; FGM-IS for daughters; specialist FGM referral; deinfibulation discussed; psychological therapy offered.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Psychological impact and future pregnancy planning addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review in two weeks to complete the risk assessment; urgent symptoms and at-risk girls safety-net.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Ethnicity, culture & diversity",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Amara Conteh",
    "age": "29 years · female",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "None"
    ],
    "allergy": "None recorded",
    "recent": "Cervical screening by practice nurse: appearance suggests FGM. Nurse asked patient to book with GP.",
    "reason": "Follow-up after cervical screening at the nurse’s request."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Answer the fear",
     "d": "She asks if she will be reported. Say no, clearly, in the first minute."
    },
    {
     "t": "1–3",
     "h": "Be open about duties",
     "d": "Recording and the dataset (not reporting); mandatory reporting is for under-18s only."
    },
    {
     "t": "3–7",
     "h": "Her health",
     "d": "Urinary, periods, sex, pregnancy plans, emotional impact. Deinfibulation and specialist clinic."
    },
    {
     "t": "7–9",
     "h": "ICE",
     "d": "Her fears about family and judgement; what she wants now."
    },
    {
     "t": "9–12",
     "h": "Plan and close",
     "d": "FGM clinic, talking therapy offer, gentler smears; return to the girls-at-risk question; safety-net; review."
    }
   ],
   "wordPics": {
    "fail": "Tells her the police must be informed, or says nothing is needed and does not record it; never asks about girls in the family; ignores her health needs; interrogates or judges her.",
    "pass": "Reassures her she is not reported; mentions recording; asks about daughters; offers a specialist referral; is kind and non-judgemental.",
    "exc": "All of the above, plus: explains the difference between recording and reporting in plain words; explains FGM-IS and when a referral would follow; asks about urinary, menstrual, sexual, obstetric and psychological effects; explains deinfibulation; offers a trauma-informed plan for future screening; returns to the risk question rather than dropping it; uses teach-back."
   },
   "avoid": [
    {
     "dont": "\"I have a legal duty to report FGM to the police.\"",
     "instead": "\"You’re not in trouble and I’m not reporting you. That law is about girls under 18.\"",
     "why": "Wrong for an adult, and it would retraumatise her and destroy trust."
    },
    {
     "dont": "\"Do your daughters live with you? Have they been cut?\"",
     "instead": "\"We ask every woman who has been through this whether there are girls in the family we can help protect.\"",
     "why": "An accusatory question feels like an interrogation; a routine framing gets an honest answer."
    },
    {
     "dont": "\"It’s all in the past, so there’s nothing to do.\"",
     "instead": "\"This is a chance to help you — some women have problems they’ve never mentioned.\"",
     "why": "It misses her health needs and the recording and safeguarding duties."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Community and family",
     "t": "Fear of her family being blamed may stop her engaging. Keep the focus on her care and on protecting girls, not on blame."
    },
    {
     "h": "Interpreters",
     "t": "If an interpreter is needed, use a professional one, not a relative or community member."
    }
   ],
   "legal": [
    {
     "h": "Mandatory reporting",
     "t": "FGM Act 2003 section 5B (added 2015): applies only to girls under 18 who disclose FGM or have physical signs of it. Not to adults."
    },
    {
     "h": "Recording",
     "t": "FGM Enhanced Dataset: mandatory submission by GP practices each time FGM is identified or treated; no consent needed, but explain it."
    },
    {
     "h": "Girls at risk",
     "t": "Refer to children’s social care under local safeguarding procedures; FGM Protection Orders can prevent travel if a girl is at risk abroad."
    }
   ],
   "professional": [
    {
     "h": "Chaperones and examination",
     "t": "GMC Intimate examinations and chaperones (2024): explain, offer a chaperone and get consent; she can stop an examination at any time."
    },
    {
     "h": "Honesty",
     "t": "Tell her what you will record and when you would share information, before she tells you anything about girls in her family."
    }
   ],
   "community": [
    {
     "h": "Services",
     "t": "NHS specialist FGM clinics (including self-referral in many areas) and FGM survivor support organisations."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Urinary retention, fever or severe pelvic pain — same-day assessment",
     "Pregnancy with type 3 FGM — urgent specialist antenatal referral",
     "A girl under 18 at risk or already cut — safeguarding referral or mandatory police report",
     "Suicidal thoughts or severe PTSD symptoms"
    ],
    "psychosocial": [
     "Fear of the police and of family being blamed",
     "Emotional impact, flashbacks and fear of examination",
     "Relationships, sex and pregnancy plans"
    ],
    "ice": [
     "Idea: “Being found with FGM means I’ll be reported”",
     "Concern: her family getting into trouble; being judged",
     "Expectation: reassurance and for it not to become “a big thing”"
    ]
   },
   "diagnosis": "“The nurse saw signs of the cutting that was done to you as a child. You’re not in trouble. I need to record it, think about any girls in the family, and offer you help.”",
   "diagnosisLay": "“Writing it in your notes is like writing down an operation you had as a child — it helps the people who care for you. It isn’t a police report.”",
   "management": {
    "reflectIce": "“You came in scared you’d be reported. You won’t be. What we can do is help with anything it has left you with.”",
    "psychosocial": "Go at her pace, make future smears gentler, and offer talking therapy without pressure.",
    "sharedPlan": [
     "Record in notes and submit to the FGM Enhanced Dataset, explained to her",
     "Risk assessment for any girls under 18; FGM-IS flag for daughters; referral if at risk",
     "Specialist FGM clinic referral, including deinfibulation discussion; psychological therapy offered"
    ],
    "safetyNet": [
     "Urinary retention, fever or severe pain — same day",
     "Review in two weeks to complete the risk conversation"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Safeguarding",
    "s": "Case walkthrough · children at risk",
    "href": "../cases/safeguarding.html"
   },
   {
    "ic": "📋",
    "t": "Cervical screening",
    "s": "Case walkthrough · screening",
    "href": "../cases/cervical-screening.html"
   },
   {
    "ic": "📋",
    "t": "PTSD",
    "s": "Case walkthrough · NICE NG116",
    "href": "../cases/ptsd.html"
   },
   {
    "ic": "🗺️",
    "t": "Dyspareunia",
    "s": "Visual algorithm · pain with sex",
    "href": "algorithms/dyspareunia.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you know which duty applies to whom. Candidates fail by threatening the police, by skipping the question about girls, or by forgetting that she is a patient with needs of her own.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Telling her FGM must be reported to the police.",
     "why": "The mandatory duty applies to girls under 18 only. Getting this wrong frightens a survivor and is factually incorrect.",
     "fix": "“You’re not being reported. That law is about girls under 18.”"
    },
    {
     "dom": "tasks",
     "fail": "Not recording it, because she asked you not to make it a big thing.",
     "why": "Recording and the Enhanced Dataset submission are mandatory for GP practices.",
     "fix": "Explain that recording is not reporting, and that published figures don’t name anyone."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about daughters or other girls in the family.",
     "why": "The safeguarding focus is on girls at risk. This is the key action examiners look for.",
     "fix": "Ask routinely, explain FGM-IS, and be honest about when you would refer."
    },
    {
     "dom": "rto",
     "fail": "Interrogating her about the girls in a way that feels like blame.",
     "why": "She will close down, and the risk goes unassessed.",
     "fix": "Normalise it: “We ask every woman who has been through this.”"
    },
    {
     "dom": "tasks",
     "fail": "Ignoring urinary, menstrual, sexual, obstetric and emotional effects.",
     "why": "Identifying FGM is meant to lead to care. Missing deinfibulation before pregnancy is a clinical gap.",
     "fix": "Ask about each and refer to a specialist FGM clinic."
    },
    {
     "dom": "gs",
     "fail": "Dropping the risk question when she says she needs to think.",
     "why": "An unfinished safeguarding assessment is unsafe.",
     "fix": "Agree a date to return to it and document the plan."
    }
   ]
  }
 },
 "hiv-test-teen": {
  "stem": {
   "name": "Jordan Mescal",
   "age": "17-year-old young man",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded",
   "recent": "No recent attendances. No previous HIV or STI tests on record.",
   "reason": "Video consultation: “I need an HIV test.”"
  },
  "knowledge": {
   "guideline": "BHIVA/BASHH UK guideline for the use of HIV post-exposure prophylaxis (2021) · BHIVA/BASHH/BIA adult HIV testing guidelines (2020) · BHIVA/BASHH PrEP guideline (2025) · UKHSA Green Book chapter 18 (hepatitis B) · GMC 0–18 years (2007, updated 2018) · BASHH and Brook Spotting the Signs proforma (2014)",
   "summary": "Time comes first: PEP only works if started within 72 hours, so establish exactly when the exposure was. Then explain honestly that a test today cannot give a final answer, arrange testing now and after the window, and keep a young person’s care confidential and non-judgemental.",
   "points": [
    {
     "h": "PEP is time-critical",
     "t": "Start PEP as soon as possible, preferably within 24 hours, and not beyond 72 hours after exposure [1]. It is a 28-day course. It is not recommended for every exposure: the decision depends on the type of sex and the partner’s likely HIV status, and PEP is not needed if the partner is known to be on treatment with an undetectable viral load [1]. Send him the same day to a sexual-health clinic or, out of hours, the emergency department."
    },
    {
     "h": "The window period",
     "t": "A fourth-generation laboratory (antigen and antibody) test detects about 95% of infections by 4 weeks and 99% by 45 days; a negative result at 45 days or later excludes HIV from that exposure [2]. A test sooner can be falsely negative, so test at baseline and repeat after the window. Antibody-only point-of-care and self-tests have a longer window. After PEP, the follow-up test is timed from the end of the course [1]."
    },
    {
     "h": "Full sexual-health screen",
     "t": "Offer chlamydia and gonorrhoea NAATs (sites by exposure), syphilis and HIV serology, and hepatitis B testing. Hepatitis C testing is targeted by risk. Offer hepatitis B vaccination to those at risk [4]. Repeat syphilis testing at about 12 weeks to cover its window [1]."
    },
    {
     "h": "Put the risk in proportion",
     "t": "The chance of HIV from a single exposure is low in most situations, and varies with the type of sex and whether the partner has untreated HIV. Say this without dismissing his fear."
    },
    {
     "h": "Confidentiality and safeguarding at 17",
     "t": "He can consent to his own tests and treatment, and his confidentiality is his; encourage, but do not require, family involvement [5]. Under 18 is still a child for safeguarding, so ask about consent, pressure, alcohol or drugs, payment or gifts, and an older partner. Sexual-health services use a structured CSE screen for all under-18s [6]."
    },
    {
     "h": "Prevention going forward",
     "t": "Condoms, a discussion of PrEP for anyone at ongoing risk (available free through sexual-health clinics) [3], and hepatitis B vaccination. A clear plan helps contain the fear."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Jordan, I’m Dr Lee. You did the right thing getting in touch. There’s no judgement here at all — let’s sort this out together. Tell me what’s happened.",
    "dom": "rto",
    "why": "Non-judgemental opening that addresses shame straight away"
   },
   {
    "who": "pt",
    "text": "I need an HIV test. I did something stupid a few days ago — unprotected — and I’ve been reading stuff online and I’m terrified. Can you test me today and not tell anyone, especially my parents? Will it tell me for sure right now?"
   },
   {
    "who": "dr",
    "text": "I’ll answer all of that. First: this is confidential. At 17 you can agree to your own tests, and I won’t tell your parents. The only exception would be if I thought you were being harmed, and I’d talk to you first.",
    "dom": "tasks",
    "why": "Confidentiality and competence clarified early, with the safeguarding limit"
   },
   {
    "who": "pt",
    "text": "Okay. Thanks."
   },
   {
    "phase": "Data gathering — timing first",
    "clock": "1–4 min",
    "who": "dr",
    "text": "The most important question: exactly when did this happen — which day, and roughly what time?",
    "dom": "tasks",
    "why": "Establishes timing first, because PEP depends on it"
   },
   {
    "who": "pt",
    "text": "I’d have to work it out. A few days. Maybe three?"
   },
   {
    "who": "dr",
    "text": "That might be right at the edge. There’s a medicine called PEP that can stop HIV taking hold, but it only works if it’s started within 72 hours — and the sooner the better. So I’m not going to guess. While we’re talking, I’ll arrange for the sexual-health clinic to see you today. If you’re still inside the window, they’ll decide whether you need it.",
    "dom": "tasks",
    "why": "Acts on possible PEP eligibility immediately with a same-day referral"
   },
   {
    "who": "pt",
    "text": "Today? Okay. I didn’t know that existed."
   },
   {
    "who": "dr",
    "text": "The clinic will need to know what kind of sex it was and a bit about the other person, because that decides whether the medicine is recommended. Are you able to tell me anything about them?",
    "dom": "tasks",
    "why": "Focused risk history, explained so it doesn’t feel intrusive"
   },
   {
    "who": "pt",
    "text": "Someone I didn’t really know. I don’t know if they’ve got anything. I’d rather tell the clinic the rest."
   },
   {
    "who": "dr",
    "text": "That’s fine. Can I ask a few things I ask everyone your age? Was everything that happened something you wanted? Had you been drinking or taken anything? Was the other person much older, or was there any money or gifts involved?",
    "dom": "tasks",
    "why": "Safeguarding screen: consent, substances, age gap, exchange"
   },
   {
    "who": "pt",
    "text": "Yeah, I wanted to. I’d had a couple of drinks, that’s all. Nothing like that."
   },
   {
    "who": "dr",
    "text": "Thanks for being honest. Any symptoms since — sore throat, rash, fever, discharge or pain passing urine?",
    "dom": "tasks",
    "why": "Screens for STI and seroconversion-type symptoms"
   },
   {
    "who": "pt",
    "text": "No. Just can’t sleep."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "You said the reading online has terrified you. What’s been going through your mind?",
    "dom": "rto",
    "why": "Explores the fear behind the request"
   },
   {
    "who": "pt",
    "text": "That I’ve definitely got it. That my life’s over. And my parents finding out."
   },
   {
    "who": "dr",
    "text": "That’s a frightening place to be, and it makes sense you can’t sleep. Let me give you the facts, because they’re much less scary than what you’ve read.",
    "dom": "rto",
    "why": "Validates fear and signals a shift to accurate information"
   },
   {
    "phase": "Explanation",
    "clock": "5–8 min",
    "who": "dr",
    "text": "First, the chance of catching HIV from one encounter is usually low. It depends on the type of sex and whether the other person has untreated HIV — but for most single encounters it’s small. We still test properly rather than guess.",
    "dom": "tasks",
    "why": "Calibrates realistic risk without dismissing"
   },
   {
    "who": "pt",
    "text": "So the test today will tell me?"
   },
   {
    "who": "dr",
    "text": "Honestly, not for certain yet. HIV takes a while to show up. The lab test we use picks up most infections by four weeks, and a negative result 45 days after the encounter means you’re clear. So we test now, and again after 45 days. If you take PEP, the clinic will time the repeat test from when you finish it.",
    "dom": "tasks",
    "why": "Explains the window period accurately and sets expectations"
   },
   {
    "who": "pt",
    "text": "So I have to wait six weeks to know?"
   },
   {
    "who": "dr",
    "text": "For a final answer, yes, but you won’t be waiting on your own. And the home finger-prick kits online take longer to become reliable, so the clinic or a blood test here is better.",
    "dom": "rto",
    "why": "Acknowledges the hard wait and steers him from less reliable self-tests"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s the plan. Today, the sexual-health clinic assesses you for PEP and does a full check — HIV, syphilis, hepatitis B, chlamydia and gonorrhoea. Some tests need repeating later because they have their own windows, like syphilis at about 12 weeks. They can also vaccinate you against hepatitis B.",
    "dom": "tasks",
    "why": "Full screen with repeat testing and hepatitis B vaccination"
   },
   {
    "who": "pt",
    "text": "Will they tell my parents?"
   },
   {
    "who": "dr",
    "text": "No. Sexual-health clinics are confidential, and they see people your age every day. They may ask some of the same safety questions I did — that’s routine.",
    "dom": "rto",
    "why": "Reassures on confidentiality and prepares him for the clinic’s own screen"
   },
   {
    "who": "dr",
    "text": "Going forward, condoms protect against HIV and most other infections. And there’s a daily or event-based tablet called PrEP that prevents HIV, free from the clinic, if you think you might be at risk again. Would that be useful to talk about there?",
    "dom": "tasks",
    "why": "Risk reduction and PrEP offered without moralising"
   },
   {
    "who": "pt",
    "text": "Yeah. I didn’t know any of this."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If the clinic can’t fit you in today, go to A&E — they can start PEP. In the next few weeks, a flu-like illness with a rash, fever or sore throat needs a check, so tell the clinic or me. And if the worry is stopping you sleeping or getting on with life, come back and we’ll talk.",
    "dom": "gs",
    "why": "Fallback route for PEP, seroconversion symptoms and emotional safety-net"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "Just to check it’s clear — what are you going to do after this call?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Go to the clinic today about PEP and tests, or A&E if they can’t see me. Test again after 45 days. Ask about PrEP. And it’s private."
   },
   {
    "who": "dr",
    "text": "Perfect. You’re handling this really responsibly. Anything else you want to ask?",
    "dom": "rto",
    "why": "Affirms him and shares the floor"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Non-judgemental open question; hears his three questions (test today, secrecy, certainty) and answers each.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Alcohol or drugs, relationship context, family worries, sleep and anxiety, online reading.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up “a few days ago” (PEP window), “will it tell me for sure?” and “especially not my parents”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: he has probably caught HIV; concern: his life is over and his parents finding out; expectation: a secret, definitive test today.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Fourth-generation HIV test at baseline and 45 days; syphilis at baseline and about 12 weeks; chlamydia and gonorrhoea NAATs; hepatitis B; hepatitis C by risk.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "HIV exposure risk by act and partner; other STIs; anxiety driven by online reading; safeguarding concerns.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Establishes timing for PEP eligibility; screens for seroconversion symptoms; screens for exploitation or non-consent.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Possible HIV exposure a few days ago, near the 72-hour PEP limit, needing same-day assessment; low but real risk.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day sexual-health or A&E for PEP assessment; honest window-period explanation; full STI screen; hepatitis B vaccination; confidentiality kept.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Alcohol and risk-taking discussed without moralising; condoms; PrEP; anxiety addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "A&E fallback for PEP; seroconversion symptoms; repeat tests at 45 days and about 12 weeks; return if anxiety persists.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Children & young people",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Jordan Mescal",
    "age": "17 years · male",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "⚠ Self-booked urgent video appointment. No previous sexual-health tests on record.",
    "reason": "“I need an HIV test — and I don’t want my parents told.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Calm and confidential",
     "d": "No judgement. Confidentiality at 17, and its safeguarding limit."
    },
    {
     "t": "1–4",
     "h": "When, what, who",
     "d": "Exact timing first — within 72 hours means same-day PEP assessment. Type of exposure, partner, consent, substances, symptoms."
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "Online-driven terror, fear for his future, fear of parents finding out."
    },
    {
     "t": "5–10",
     "h": "Facts and plan",
     "d": "Realistic risk. Window period: 4th-generation test, repeat at 45 days. Full STI screen, hepatitis B vaccine, condoms, PrEP."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "A&E if the clinic can’t see him today; seroconversion symptoms; repeat tests; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Takes a blood test and says “we’ll ring you with the result” without asking when the exposure was; implies a negative today means he is clear; moralises; tells him his parents should know.",
    "pass": "Asks timing first and recognises the PEP window; explains the window period; arranges a full STI screen; keeps it confidential; safety-nets.",
    "exc": "All of the above, plus: acts on uncertain timing by arranging same-day assessment rather than guessing; knows PEP is not for every exposure; gives accurate numbers (45 days) in plain words; screens safeguarding as routine; offers hepatitis B vaccination and PrEP; turns terror into a plan he can repeat back."
   },
   "avoid": [
    {
     "dont": "“We’ll do a test today and if it’s negative you’re fine.”",
     "instead": "“A test today can’t give a final answer. We test now and again at 45 days.”",
     "why": "False reassurance from a test inside the window period is a safety error."
    },
    {
     "dont": "“Let’s book you in next week for bloods.”",
     "instead": "“If this was within 72 hours, there’s a medicine that can help, so I want you seen today.”",
     "why": "Missing the PEP window cannot be undone."
    },
    {
     "dont": "“You really should have used a condom.”",
     "instead": "“You’ve done the right thing coming in. Let’s talk about what protects you next time.”",
     "why": "Moralising adds shame and makes him less likely to return for repeat testing."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Fear, shame and the internet",
     "t": "Online searching often inflates risk. Shame and fear of parents can stop young people coming back for repeat tests; a non-judgemental first contact matters."
    },
    {
     "h": "Alcohol and risk-taking",
     "t": "Alcohol commonly accompanies unplanned sex in young people. Discuss it without lecturing, as part of risk reduction."
    }
   ],
   "legal": [
    {
     "h": "Consent at 17",
     "t": "Family Law Reform Act 1969 s8: a 16- or 17-year-old can consent to his own treatment. Gillick applies only to under-16s."
    },
    {
     "h": "Confidentiality and safeguarding",
     "t": "Confidential sexual-health care is essential for young people (GMC 0–18 years). Under 18 is still a child (Working Together to Safeguard Children 2026); share information if there are signs of exploitation or abuse."
    }
   ],
   "professional": [
    {
     "h": "Know your local route",
     "t": "Know how to get same-day PEP locally — sexual-health clinic in hours, emergency department out of hours — and do not delay by booking a routine GP test instead."
    },
    {
     "h": "Records",
     "t": "Sexual-health clinic records are held separately from GP records, which many young people find reassuring. Record the GP consultation accurately and without judgement."
    }
   ],
   "community": [
    {
     "h": "Services",
     "t": "Local sexual-health clinics (walk-in or same-day), young people’s services such as Brook, free condoms schemes, and PrEP through sexual-health clinics."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Exposure within 72 hours — same-day PEP assessment",
     "Non-consensual sex, an older partner, payment, drugs or coercion — safeguarding (and a sexual assault referral centre if assault is disclosed)",
     "Seroconversion-type illness: fever, rash, sore throat, swollen glands"
    ],
    "psychosocial": [
     "Alcohol or drugs at the time; other recent partners",
     "Family relationships and fear of disclosure",
     "Sleep, anxiety and the effect of online reading"
    ],
    "ice": [
     "Idea: “I’ve probably caught HIV”",
     "Concern: his life being over; his parents finding out",
     "Expectation: a secret test today that gives a definite answer"
    ]
   },
   "diagnosis": "“You’ve had a possible exposure, and the chance of HIV is usually low. Because it might still be inside 72 hours, I want you assessed today for a medicine that can prevent it. A test now can’t give a final answer; a negative at 45 days can.”",
   "diagnosisLay": "“HIV tests are like a smoke alarm that needs a little time for smoke to build up. Test too early and it may stay quiet even if there’s a fire. After 45 days, the alarm is reliable.”",
   "management": {
    "reflectIce": "“The internet has convinced you your life is over. Let’s replace that with facts: the risk is usually low, there may be a medicine that helps, and in six or seven weeks you’ll have a definite answer.”",
    "psychosocial": "Confidential, non-judgemental care; routine safeguarding questions; alcohol and condoms discussed without moralising; support for anxiety while he waits.",
    "sharedPlan": [
     "Same-day sexual-health clinic (or A&E) for PEP assessment",
     "Baseline HIV, syphilis, hepatitis B, chlamydia and gonorrhoea tests; repeat HIV at 45 days and syphilis at about 12 weeks",
     "Hepatitis B vaccination; condoms; PrEP discussion"
    ],
    "safetyNet": [
     "A&E if the clinic cannot see him today",
     "Fever, rash or sore throat in the coming weeks, or worsening anxiety — contact the clinic or practice"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "HIV",
    "s": "Case walkthrough · testing and PEP",
    "href": "../cases/hiv.html"
   },
   {
    "ic": "💠",
    "t": "HIV protocol",
    "s": "Management · window periods",
    "href": "management/hiv.html"
   },
   {
    "ic": "💠",
    "t": "Chlamydia",
    "s": "Management · STI screening",
    "href": "management/chlamydia.html"
   },
   {
    "ic": "💠",
    "t": "Gonorrhoea",
    "s": "Management · STI screening",
    "href": "management/gonorrhoea.html"
   }
  ],
  "pitfalls": {
   "intro": "Most candidates know what an HIV test is. The station is failed on timing — missing the PEP window — and on false reassurance about a test done too early, delivered to a frightened teenager who needs both facts and calm.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Booking a routine blood test without asking exactly when the exposure happened.",
     "why": "PEP must start within 72 hours, preferably within 24 (BHIVA/BASHH 2021). A delay here is irreversible.",
     "fix": "Ask the exact day and time first; if it could be within 72 hours, arrange same-day assessment."
    },
    {
     "dom": "tasks",
     "fail": "“If today’s test is negative, you’re in the clear.”",
     "why": "A fourth-generation test is conclusive only from 45 days (BHIVA/BASHH/BIA 2020). False reassurance may stop him retesting.",
     "fix": "“We test now, and a negative at 45 days means you’re clear.”"
    },
    {
     "dom": "tasks",
     "fail": "Telling him PEP is automatic for any unprotected sex, or prescribing it yourself.",
     "why": "PEP is recommended or considered depending on the act and the partner’s likely status, and is started by sexual-health or emergency services.",
     "fix": "Explain that the clinic decides, and get him there today."
    },
    {
     "dom": "rto",
     "fail": "Lecturing about condoms or alcohol, or suggesting he tells his parents.",
     "why": "“Appeared judgemental”; at 17 he can consent and is entitled to confidentiality.",
     "fix": "Affirm that he came in, and discuss prevention as options for the future."
    },
    {
     "dom": "tasks",
     "fail": "Skipping the safeguarding questions because he is nearly 18 and male.",
     "why": "Under 18 is a child for safeguarding; exploitation affects boys too.",
     "fix": "Ask about consent, substances, age gap and payment, framed as routine."
    },
    {
     "dom": "gs",
     "fail": "Ending with “we’ll let you know the results” and no plan for repeat tests or PEP out of hours.",
     "why": "Incomplete safety-netting and follow-up.",
     "fix": "A&E if the clinic can’t see him, repeat HIV at 45 days, syphilis at about 12 weeks, and seroconversion symptoms named."
    }
   ]
  }
 },
 "infant-reflux": {
  "stem": {
   "name": "Alfie",
   "age": "3-month-old boy",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "None recorded",
   "recent": "Video appointment booked by his mother: brings milk back after most feeds, cries and arches his back. Mother reports being up all night.",
   "reason": "Mother asking for “something to stop it”; a friend’s baby was prescribed a reflux medicine."
  },
  "knowledge": {
   "guideline": "NICE NG1 (2015, updated 2019) — Gastro-oesophageal reflux disease in children and young people · NICE CG116 — Food allergy in under 19s · NICE CG192 — Antenatal and postnatal mental health · BNFC",
   "summary": "Regurgitation in a thriving, well baby is gastro-oesophageal reflux, not disease. Assess feeding, growth and red flags, then reassure and adjust feeds. Acid suppression is not for regurgitation alone. The exhausted parent is part of the consultation.",
   "points": [
    {
     "h": "Normal and common",
     "t": "NICE NG1: regurgitation affects about 40% of infants, usually starts before 8 weeks, becomes less frequent with time and resolves in about 90% before 1 year. It does not usually need investigation or treatment."
    },
    {
     "h": "Red flags that change the diagnosis",
     "t": "NICE NG1: bile-stained (green) or blood-stained vomit, projectile vomiting in the first 2 months (pyloric stenosis), abdominal distension, onset after 6 months, bulging fontanelle, fever or systemic illness, blood in the stool, faltering growth."
    },
    {
     "h": "Formula-fed: step by step",
     "t": "NICE NG1: review the feeding history; reduce volumes only if excessive for weight; try smaller, more frequent feeds with the same total daily amount; then a thickened formula; then stop the thickener and try an alginate for 1 to 2 weeks."
    },
    {
     "h": "Breastfed",
     "t": "NICE NG1: a breastfeeding assessment by someone with the right training first; consider an alginate trial for 1 to 2 weeks if distress continues. Do not use a thickener and an alginate together."
    },
    {
     "h": "Acid suppression",
     "t": "NICE NG1: do not offer a PPI or H2 receptor antagonist for overt regurgitation alone. Consider a 4-week trial only with unexplained feeding difficulty, distressed behaviour or faltering growth, and stop it if there is no response. Do not advise positional management for sleeping infants — back to sleep."
    },
    {
     "h": "Allergy and the parent",
     "t": "NICE CG116: consider non-IgE-mediated cow’s milk allergy if there is eczema, diarrhoea or blood or mucus in the stool alongside reflux. NICE CG192: ask about the parent’s mood using the depression identification questions."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, and hello Alfie. Thank you for calling — you look worn out. Tell me what’s been happening.",
    "dom": "rto",
    "why": "Open question that notices the parent’s state"
   },
   {
    "who": "pt",
    "text": "He brings his milk back after nearly every feed, sometimes loads, then he cries and arches his back. I’m up all night. My friend’s baby got a reflux medicine. Please can you give him something? I can’t keep doing this."
   },
   {
    "who": "dr",
    "text": "That sounds really hard, and you’ve done the right thing calling. I want to make sure Alfie’s alright and that you get some help too. Can I ask some questions about his feeding and growth, then we’ll talk about what will help?",
    "dom": "gs",
    "why": "Validates, and sets an agenda that includes the mother"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about his feeds — how often, how much, and how you wind him.",
    "dom": "tasks",
    "why": "Feeding history comes first in NG1"
   },
   {
    "who": "pt",
    "text": "Every few hours, day and night. I wind him but it doesn’t seem to make much difference."
   },
   {
    "who": "dr",
    "text": "When the milk comes up, does it just flow out of his mouth, or is it forceful — shooting across the room? Has it ever been green, or had blood in it?",
    "dom": "tasks",
    "why": "Screens for pyloric stenosis, obstruction and haematemesis"
   },
   {
    "who": "pt",
    "text": "It just comes up — never shooting, never green. No blood."
   },
   {
    "who": "dr",
    "text": "Does he feed willingly, or has he started refusing feeds? And what are his nappies like — plenty of wet ones, and any blood or mucus in his poo?",
    "dom": "tasks",
    "why": "Feeding aversion, hydration and cow’s milk allergy features"
   },
   {
    "who": "pt",
    "text": "He feeds fine, he’s hungry. Loads of wet nappies. Nothing odd in his poo."
   },
   {
    "who": "dr",
    "text": "Any rashes or dry, itchy patches of skin? Any fevers, or times he’s floppy or hard to wake?",
    "dom": "tasks",
    "why": "Eczema as an allergy cue and signs of serious illness"
   },
   {
    "who": "pt",
    "text": "No, his skin’s fine. He’s never been ill."
   },
   {
    "who": "dr",
    "text": "Have you got his red book? I’d like to see his recent weights so we can check how he’s growing.",
    "dom": "tasks",
    "why": "Growth trajectory is the key discriminator between GOR and GORD"
   },
   {
    "who": "pt",
    "text": "Here — the health visitor’s been weighing him."
   },
   {
    "who": "dr",
    "text": "Thank you. … He’s following his line nicely. That really matters — it tells me he’s getting plenty of milk despite what comes back.",
    "dom": "tasks",
    "why": "Confirms thriving before offering reassurance"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "What’s been worrying you most about it?",
    "dom": "rto",
    "why": "Open exploration of concern"
   },
   {
    "who": "pt",
    "text": "That he’s in pain and I’m not helping him. That I’m doing something wrong. Everyone else seems to cope."
   },
   {
    "who": "dr",
    "text": "You’re not doing anything wrong — lots of parents feel exactly this. Can I ask about you for a moment? Over the last month, have you often felt down, depressed or hopeless, or had little interest or pleasure in doing things?",
    "dom": "rto",
    "why": "Responds to the cue of failure and screens maternal mood (CG192 questions)"
   },
   {
    "who": "pt",
    "text": "Mostly I’m just so tired. I don’t know if it’s more than that."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. I’d like to come back to that properly, because you matter here too. Do you have anyone helping at home at the moment?",
    "dom": "rto",
    "why": "Takes the mood answer seriously and explores support"
   },
   {
    "who": "pt",
    "text": "Not as much as I need."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s what I think. Alfie has reflux — the valve at the top of his stomach is still immature, so milk comes back up. Around four in ten babies do this. He’s growing well, feeding well, and none of the worrying signs are there. It usually gets better over the coming months, and most babies are through it by their first birthday.",
    "dom": "tasks",
    "why": "Explains physiological GOR with the NG1 natural history"
   },
   {
    "who": "pt",
    "text": "But what about the medicine my friend’s baby had?"
   },
   {
    "who": "dr",
    "text": "I understand why you’d want that. The acid medicines don’t stop milk coming back up — they only change how acidic it is — and the national guidance says not to use them for bringing up milk on its own, because they have side effects without helping. If he were refusing feeds, very distressed despite the other changes, or not growing, we’d think again.",
    "dom": "tasks",
    "why": "Declines the PPI with a clear reason and a conditional plan"
   },
   {
    "who": "pt",
    "text": "So there’s nothing?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "There’s quite a lot. If he’s on bottles, we try smaller feeds more often, keeping the total the same, and if that doesn’t help, a thickened feed. If he’s breastfed, I’d like the health visitor or a feeding specialist to watch a feed. And if he stays very unsettled after that, a short trial of an alginate like Gaviscon Infant is reasonable — just not together with a thickener.",
    "dom": "tasks",
    "why": "NG1 stepwise plan for both feeding methods without inventing which applies"
   },
   {
    "who": "pt",
    "text": "Okay. That sounds more doable than I thought."
   },
   {
    "who": "dr",
    "text": "Good. We’ll start with the feed review and smaller, more frequent feeds. Keep putting him down to sleep on his back — raising the cot or sleeping him on his front isn’t safe and doesn’t help.",
    "dom": "tasks",
    "why": "Safe sleep advice; avoids positional treatment in sleep"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "And for you: I’d like the health visitor to visit this week, and I’d like to see you — just you — in a couple of weeks to talk about how you’re sleeping and feeling. If you ever feel you can’t cope, or have thoughts of harming yourself or Alfie, call us or 111 straight away.",
    "dom": "rto",
    "why": "Treats the mother as a patient too, with a specific safety-net"
   },
   {
    "who": "pt",
    "text": "That would help. Thank you."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "For Alfie, call 999 if he’s floppy, hard to wake or struggling to breathe. Contact us the same day if the vomit becomes forceful or green, there’s blood, he refuses feeds, has far fewer wet nappies, or has a fever. And bring him back if he stops following his growth line.",
    "dom": "gs",
    "why": "Specific red flags for obstruction, pyloric stenosis, dehydration and illness"
   },
   {
    "who": "pt",
    "text": "Forceful, green, blood, not feeding, dry nappies."
   },
   {
    "who": "dr",
    "text": "Exactly. So: it’s common reflux, he’s thriving, we adjust feeds rather than use acid medicine, the health visitor comes this week, and I see you in two weeks. Does that feel like a plan you can manage?",
    "dom": "rto",
    "why": "Summarises and checks acceptability"
   },
   {
    "who": "pt",
    "text": "Yes. I feel a bit less like I’m failing him."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; noticed the exhausted parent on screen; let her describe the feeds, crying and back-arching.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Sleep deprivation, support at home, comparison with a friend’s baby, feeling of failing.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I can’t keep doing this” and “I’m doing something wrong” and moved to the mother’s mood.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (reflux needs medicine); concern (he is in pain, she is failing); expectation (a prescription).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Red-book weights plotted; observed on video; face-to-face review if any doubt; no investigations for uncomplicated reflux.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "GOR versus GORD, pyloric stenosis, obstruction, cow’s milk allergy, infection and overfeeding.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Projectile, bilious or bloody vomit, feed refusal, hydration, fever, faltering growth, eczema or blood in stools.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Physiological gastro-oesophageal reflux in a thriving infant; possible maternal exhaustion or low mood to explore.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "NG1 stepwise feeding measures, alginate only after that and not with a thickener, no PPI for regurgitation alone, back-to-sleep advice.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Maternal mood screened with CG192 questions; health-visitor involvement; separate appointment for the mother.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 and same-day features named; growth monitoring; review for the mother in two weeks; crisis advice.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Alfie",
    "age": "3 months · male",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "None recorded",
    "recent": "Video appointment booked by mother: regurgitation after most feeds, crying and back-arching. No previous consultations about feeding recorded.",
    "reason": "“He brings up his milk and screams — I’m exhausted, please give him something.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and notice her",
     "d": "Let her finish. “I can’t keep doing this” is the second patient speaking."
    },
    {
     "t": "1–4",
     "h": "Feeding, red flags, growth",
     "d": "Frequency, volume, winding. Projectile, green, blood. Feed refusal, wet nappies, stool, skin, fever. Red-book weights."
    },
    {
     "t": "4–6",
     "h": "ICE and her mood",
     "d": "What worries her most; the two mood questions; support at home."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Normal reflux in a thriving baby. Why no acid medicine. NG1 feeding steps; alginate later, never with a thickener. Back to sleep."
    },
    {
     "t": "10–12",
     "h": "Safety-net both",
     "d": "Baby red flags in plain words; health visitor this week; appointment for her."
    }
   ],
   "wordPics": {
    "fail": "Prescribes a PPI to satisfy the request, or dismisses her with “it’s just reflux”; no growth check; no red-flag questions; never asks how the mother is; no safety-net.",
    "pass": "Takes a feeding history, checks growth and red flags, explains normal reflux, gives NG1 feeding advice, avoids acid suppression and gives a safety-net.",
    "exc": "All of the above, plus: treats the exhausted mother as a patient, screens her mood and arranges her own follow-up; explains why acid medicine will not help; gives a stepwise plan covering breast and bottle; safe-sleep advice; she leaves feeling capable rather than dismissed."
   },
   "avoid": [
    {
     "dont": "“It’s just reflux — all babies do it.”",
     "instead": "“It is very common, and he’s thriving — but I can see how hard it is for you, so let’s make a plan for both of you.”",
     "why": "Accurate reassurance delivered as dismissal fails the relating domain."
    },
    {
     "dont": "“I’ll give him omeprazole to settle it.”",
     "instead": "“Acid medicines don’t stop milk coming up, and they’re not recommended for this on its own.”",
     "why": "NICE NG1 advises against acid suppression for regurgitation alone."
    },
    {
     "dont": "“Try raising the head of his cot.”",
     "instead": "“Keep putting him down on his back to sleep, on a flat mattress.”",
     "why": "Positional treatment in sleep is not advised in NICE NG1 and conflicts with safe-sleep advice."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Sleep deprivation and support",
     "t": "Exhaustion reduces a parent’s ability to cope and raises risk; practical support at home and from the health visitor is part of the treatment."
    },
    {
     "h": "Comparison pressure",
     "t": "Friends’ experiences and online forums drive requests for medicine; acknowledge them rather than dismiss them."
    }
   ],
   "legal": [
    {
     "h": "Safeguarding awareness",
     "t": "A crying baby with an exhausted parent is a recognised risk situation for abusive head trauma. Ask about coping, give advice on what to do if overwhelmed, and act on any concern."
    }
   ],
   "professional": [
    {
     "h": "The parent as a patient",
     "t": "NICE CG192: at contacts in the first postnatal year, consider asking the depression identification questions. Offer her a separate appointment and record the discussion."
    },
    {
     "h": "Prescribing responsibly",
     "t": "Declining an unhelpful medicine while offering a clear alternative plan is good practice (GMC Good medical practice, 2024)."
    }
   ],
   "community": [
    {
     "h": "Health visitor and feeding support",
     "t": "The health visitor can review feeding and growth and assess maternal wellbeing; infant-feeding specialists support breastfeeding assessment. Cry-sis offers a helpline for parents of crying babies."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Projectile vomiting in the first 2 months (pyloric stenosis); bile-stained vomit (obstruction) — same-day surgical assessment",
     "Blood in vomit or stool, distension, bulging fontanelle, fever or a floppy baby",
     "Feed refusal, fewer wet nappies, faltering growth; onset after 6 months"
    ],
    "psychosocial": [
     "Sleep deprivation and support at home",
     "Maternal mood — the two depression identification questions",
     "Feelings of failure and comparison with other parents"
    ],
    "ice": [
     "Idea: “He has reflux and needs a medicine like my friend’s baby”",
     "Concern: he is in pain; she is failing him",
     "Expectation: a prescription today"
    ]
   },
   "diagnosis": "Physiological gastro-oesophageal reflux in a thriving infant with no red flags. Possible parental exhaustion or low mood needs its own follow-up.",
   "diagnosisLay": "“The valve at the top of his tummy is still immature, so milk slips back up. He’s growing well, which tells me he’s getting plenty. Most babies grow out of it by their first birthday.”",
   "management": {
    "reflectIce": "“You were worried he’s in pain and that you’re doing something wrong. You’re not — and the fact that he’s growing well is the best sign that he’s getting what he needs.”",
    "psychosocial": "Validate her exhaustion, screen her mood, arrange health-visitor support this week and a separate appointment for her; address the friend’s-baby comparison without judgement.",
    "sharedPlan": [
     "Feeding review; smaller, more frequent feeds; thickened feed if formula and no improvement",
     "Breastfeeding assessment if breastfed; alginate trial for 1 to 2 weeks only after these, never with a thickener",
     "No PPI or H2 antagonist for regurgitation alone; back to sleep on a flat surface"
    ],
    "safetyNet": [
     "999: floppy, hard to wake, breathing difficulty. Same day: forceful or green vomit, blood, feed refusal, dry nappies, fever",
     "Mother: contact us or 111 if she cannot cope or has thoughts of harm; review in two weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Reflux in infants",
    "s": "Protocol · NICE NG1 stepwise feeding",
    "href": "management/infant-reflux.html"
   },
   {
    "ic": "📋",
    "t": "CMPA and reflux in children",
    "s": "Case walkthrough · allergy versus reflux",
    "href": "../cases/cmpa-reflux.html"
   },
   {
    "ic": "🗺️",
    "t": "Vomiting in children",
    "s": "Visual algorithm · red flags",
    "href": "algorithms/vomiting-children.html"
   },
   {
    "ic": "💠",
    "t": "Postnatal depression",
    "s": "Protocol · screening and support",
    "href": "management/postnatal-depression.html"
   }
  ],
  "pitfalls": {
   "intro": "Two patients are in this station. Candidates pass the baby and fail the mother, or satisfy the mother with a prescription that NICE NG1 advises against.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing omeprazole or another acid-suppressing medicine because the mother is desperate.",
     "why": "NICE NG1 advises against acid suppression for overt regurgitation alone; “management not in line with UK guidance” is a Tasks fail.",
     "fix": "Explain why it will not help, then give the stepwise feeding plan and the conditions under which you would reconsider."
    },
    {
     "dom": "tasks",
     "fail": "Reassuring without checking growth or asking about projectile, green or bloody vomit.",
     "why": "Reassurance without assessment is unsafe; examiners expect the red flags and the growth trajectory.",
     "fix": "Ask the red-flag questions and look at the red-book weights before you say “normal”."
    },
    {
     "dom": "rto",
     "fail": "Never asking how the mother is.",
     "why": "“I can’t keep doing this” is a cue; missing maternal mood is the commonest failing statement in this station.",
     "fix": "“Can I ask about you for a moment?” — then the two mood questions and a plan for her."
    },
    {
     "dom": "tasks",
     "fail": "Advising a thickener and Gaviscon together, or raising the cot.",
     "why": "NICE NG1 sequences these and advises against positional management in sleep.",
     "fix": "Feeds first, thickener if formula, then alginate alone; always back to sleep."
    },
    {
     "dom": "gs",
     "fail": "Using clinical words — “GORD”, “alginate”, “pyloric stenosis” — without explaining them.",
     "why": "Unexplained jargon to an exhausted parent fails the Global Skills domain.",
     "fix": "“The valve at the top of his tummy”; “a feed thickener”; “forceful vomiting that shoots across the room”."
    },
    {
     "dom": "gs",
     "fail": "Safety-netting only the baby.",
     "why": "The mother’s risk is part of the case; a plan with no follow-up for her is incomplete.",
     "fix": "Health visitor this week, an appointment for her, and what to do if she feels she cannot cope."
    }
   ]
  }
 },
 "lithium-toxicity": {
  "stem": {
   "name": "Frances Doyle",
   "age": "46-year-old woman",
   "pmh": [
    "Bipolar affective disorder",
    "Long-term lithium therapy (lithium monitoring recall on the practice register)"
   ],
   "meds": [
    "Lithium (long-term; preparation and dose as on the repeat record)"
   ],
   "allergy": "None recorded",
   "recent": "Several days of vomiting and diarrhoea, now shaky, unsteady and “muddled”. Her daughter has noticed confusion.",
   "reason": "Video consultation: “I’ve had a sickness bug and now I’m shaky — I’m on lithium, is that relevant?”"
  },
  "knowledge": {
   "guideline": "[1] NICE CG185 (bipolar disorder in adults, 2014, updated) · [2] NPSA Patient Safety Alert NPSA/2009/PSA005, Safer lithium therapy (December 2009) · [3] BNF lithium monographs · [4] NICE QS95 (bipolar disorder in adults)",
   "summary": "A patient on lithium who becomes confused, ataxic and coarsely tremulous after vomiting and diarrhoea has lithium toxicity until a level proves otherwise. Stop the lithium, get an urgent level and renal function, and arrange same-day hospital assessment.",
   "points": [
    {
     "h": "Narrow therapeutic range",
     "t": "NICE CG185 [1] and QS95 [4]: aim for a 12-hour post-dose plasma level of 0.6–0.8 mmol/L for most people (0.8–1.0 mmol/L after a relapse on a lower level, or with subthreshold symptoms). Small rises in level can produce toxicity, and toxicity can occur at a level within the range in an unwell patient."
    },
    {
     "h": "Why dehydration matters",
     "t": "Lithium is cleared by the kidney alongside sodium. Vomiting, diarrhoea, fever, sweating or poor intake reduce clearance and push the level up. CG185 [1]: advise people on lithium to seek medical help if they develop diarrhoea or vomiting or become acutely ill, and to keep fluids up."
    },
    {
     "h": "The toxicity picture",
     "t": "Coarse tremor (the therapeutic tremor is fine), ataxia, slurred speech, muscle twitching, drowsiness or confusion, and worsening GI upset. Severe toxicity brings seizures, arrhythmia, renal failure and coma. Her confusion and unsteadiness are neurological signs, so this is not a stay-at-home case."
    },
    {
     "h": "Same-day action",
     "t": "Stop lithium now. Arrange same-day hospital assessment for an urgent lithium level, U&E and creatinine, and fluids; severe cases may need haemodialysis. Do not wait for a routine GP blood test while she stays at home confused. Check thyroid function and calcium as part of the monitoring review once she is safe."
    },
    {
     "h": "Interacting drugs",
     "t": "BNF [3] and CG185 [1]: NSAIDs (including over-the-counter ibuprofen), ACE inhibitors, angiotensin-II receptor blockers and diuretics (especially thiazides) raise lithium levels. Ask about anything taken for the bug or for pain."
    },
    {
     "h": "Safety system",
     "t": "NPSA/2009/PSA005 [2]: patients on lithium should have monitoring in line with NICE CG185, reliable communication of results, and ongoing written information with a record book and alert card. CG185 [1]: level every 3 months for the first year, then every 6 months (3-monthly in higher-risk groups); renal and thyroid function and calcium every 6 months."
    },
    {
     "h": "Restarting",
     "t": "Once she has recovered and the level and renal function are known, restart and re-check the level with her mental-health team’s advice. Stopping lithium abruptly and long-term raises the risk of relapse, so do not end it unilaterally."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Frances, it’s Dr Patel. Thanks for calling in on video. Before anything else, tell me how you’re feeling right now.",
    "dom": "rto",
    "why": "Opens with the patient, not a checklist"
   },
   {
    "who": "pt",
    "text": "Rough. This bug’s been going a few days — sick, the runs — and now my hands are really shaky and my head feels slow. I take lithium. Is that relevant?"
   },
   {
    "who": "dr",
    "text": "Yes, it’s very relevant, and I’m glad you asked. I’d like to ask a few quick questions about how you are and what you’ve been taking, then tell you what I think needs to happen today. Is that alright?",
    "dom": "gs",
    "why": "Answers her question honestly and sets a focused agenda"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "How long have you had the sickness and diarrhoea, and have you managed to keep any fluids down?",
    "dom": "tasks",
    "why": "Quantifies the dehydration that drives the level up"
   },
   {
    "who": "pt",
    "text": "Three or four days. I’ve barely kept anything down."
   },
   {
    "who": "dr",
    "text": "And the shakiness — is it the usual fine tremor you sometimes get, or different?",
    "dom": "tasks",
    "why": "Separates a coarse toxic tremor from the therapeutic fine tremor"
   },
   {
    "who": "pt",
    "text": "Different. Much bigger, like I can’t hold a cup. And I’m wobbly when I walk."
   },
   {
    "who": "dr",
    "text": "You said your daughter thinks you seem confused. What has she noticed?",
    "dom": "rto",
    "why": "Picks up the daughter’s concern as the key cue"
   },
   {
    "who": "pt",
    "text": "She says I’m not making sense at times. I told her it’s just the bug."
   },
   {
    "who": "dr",
    "text": "I’m really glad she said something — she may be seeing more clearly than you can at the moment. Any slurred speech, jerking or twitching of your muscles, or drowsiness that’s hard to shake off?",
    "dom": "tasks",
    "why": "Screens for severe toxicity features"
   },
   {
    "who": "pt",
    "text": "My head just feels slow. I don’t know about the rest."
   },
   {
    "who": "dr",
    "text": "Have you taken anything for the bug or for aches — ibuprofen or other anti-inflammatories — or started any new tablets, water tablets or blood-pressure tablets recently?",
    "dom": "tasks",
    "why": "Checks for interacting drugs: NSAIDs, ACEi/ARB, diuretics"
   },
   {
    "who": "pt",
    "text": "Just the lithium as far as I remember. I’d have to check with my daughter what I took for the bug."
   },
   {
    "who": "dr",
    "text": "That’s fine — please bring or photograph anything you’ve taken. Have you been passing much urine?",
    "dom": "tasks",
    "why": "Screens for acute kidney injury"
   },
   {
    "who": "pt",
    "text": "I haven’t really noticed."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "What were you hoping I could do for you today?",
    "dom": "rto",
    "why": "Elicits expectations"
   },
   {
    "who": "pt",
    "text": "Something to stop the sickness, really. I thought it was only the bug."
   },
   {
    "who": "dr",
    "text": "That makes sense. Is anything else worrying you — about the lithium or about your mood?",
    "dom": "rto",
    "why": "Explores the hidden worry about her bipolar disorder"
   },
   {
    "who": "pt",
    "text": "If you take me off it, I’m scared I’ll get ill again. It took years to get settled."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That’s a real worry and I’ll come back to it, because we won’t just abandon a treatment that keeps you well.",
    "dom": "rto",
    "why": "Validates the fear of relapse before the plan"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s what I think. Lithium works in a narrow safe range. When you’re dehydrated from sickness and diarrhoea, your kidneys clear less of it and the level rises. The big shake, the wobbliness, the sleepiness and the muddled thinking are the signs I’d expect if your lithium level is now too high.",
    "dom": "tasks",
    "why": "Explains likely lithium toxicity in plain language"
   },
   {
    "who": "pt",
    "text": "So it’s not the bug?"
   },
   {
    "who": "dr",
    "text": "The bug has probably caused it, but the lithium level is now the more serious problem. Because you’re confused and unsteady, I don’t want you waiting at home for a routine blood test. You need to be seen in hospital today for an urgent lithium level, kidney tests and fluids.",
    "dom": "tasks",
    "why": "Recognises neurological signs as a red flag and arranges same-day assessment"
   },
   {
    "who": "pt",
    "text": "Hospital? Is it that bad?"
   },
   {
    "who": "dr",
    "text": "I can’t tell how high the level is without the test, and that’s exactly why. Most people recover well when it’s picked up early, but a high level can affect the kidneys and heart, so it needs checking today, not tomorrow.",
    "dom": "rto",
    "why": "Honest about uncertainty without frightening her"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Please don’t take any more lithium until the hospital team tell you it’s safe. Could your daughter take you in? I’d like someone with you, and I’ll ring ahead and send a letter explaining that I’m worried about lithium toxicity.",
    "dom": "tasks",
    "why": "Withholds lithium and organises a safe route with handover"
   },
   {
    "who": "pt",
    "text": "I’ll ask her to take me."
   },
   {
    "who": "dr",
    "text": "Good. Take your lithium record book and alert card if you have them, and anything you’ve taken this week. Sip fluids on the way if you can keep them down.",
    "dom": "gs",
    "why": "Practical, specific instructions"
   },
   {
    "who": "dr",
    "text": "And about your worry: once you’re better and the level and kidney tests are back, I’ll speak with your mental-health team about restarting the lithium safely and re-checking the level. Stopping for a few days to clear it is very different from stopping for good.",
    "dom": "rto",
    "why": "Addresses the relapse fear and plans psychiatric input"
   },
   {
    "who": "pt",
    "text": "That’s a relief."
   },
   {
    "who": "dr",
    "text": "When you’re home, I’d like to go through the sick-day rules: if you’re vomiting, have diarrhoea or a fever, or can’t drink, keep fluids up and contact us early; avoid ibuprofen-type painkillers; and check with a pharmacist before any new medicine.",
    "dom": "tasks",
    "why": "Plans lithium sick-day and interaction education"
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If before you reach hospital you become very drowsy, hard to wake, have a fit, or your heart races or feels irregular, call 999 straight away.",
    "dom": "gs",
    "why": "Named 999 triggers"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "Can you or your daughter tell me back the three things you’re doing now?",
    "dom": "rto",
    "why": "Teach-back, involving the daughter"
   },
   {
    "who": "pt",
    "text": "No more lithium, go to the hospital today with my book and card, and 999 if I get more sleepy or have a fit."
   },
   {
    "who": "dr",
    "text": "Exactly right. I’ll ring the hospital now and call you tomorrow to see how you are and book a review once you’re home.",
    "dom": "gs",
    "why": "Summarises and books follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; took “is the lithium relevant?” seriously and let her describe the tremor, unsteadiness and slowed thinking.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Who is with her, whether she can get to hospital safely, and how the illness is affecting her at home.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Acted on the daughter’s report of confusion and on the new, coarse character of the tremor.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (“just the bug”), concern (relapse if lithium stops), expectation (something for the sickness).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Urgent lithium level (12 hours post-dose where possible, but not delayed for timing), U&E and creatinine; thyroid function and calcium at review; drug and fluid history.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Lithium toxicity versus gastroenteritis alone, AKI, sepsis or other causes of acute confusion.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for drowsiness, seizures, arrhythmia symptoms and reduced urine output; recognised neurological signs as a same-day emergency.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named likely lithium toxicity precipitated by dehydration, in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Stopped lithium, arranged same-day hospital assessment with handover, and kept the daughter involved.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Asked about NSAIDs, ACE inhibitors, ARBs and diuretics; planned to restart lithium with the mental-health team’s advice.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 triggers named; follow-up call booked; sick-day rules and alert card reinforced.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "Urgent & unscheduled care",
    "Investigations & results"
   ],
   "stem": {
    "name": "Frances Doyle",
    "age": "46 years · female",
    "pmh": [
     "Bipolar affective disorder",
     "On lithium monitoring register"
    ],
    "meds": [
     "Lithium (long-term)"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Video request today: several days of vomiting and diarrhoea, now shaky and muddled. Daughter concerned about confusion.",
    "reason": "“I’ve had a sickness bug and now I’m shaky and muddled — I’m on lithium.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and answer",
     "d": "She asks if lithium is relevant. Say yes, then agree a short agenda: a few questions, then a plan for today."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Duration of D&V and fluid intake, character of the tremor, unsteadiness, confusion (daughter’s view), drowsiness, seizures, urine output, NSAIDs, ACEi/ARB, diuretics."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "“Just the bug”, and the fear of relapse if lithium is stopped. Name the fear before the plan."
    },
    {
     "t": "6–10",
     "h": "Explain and act",
     "d": "Likely lithium toxicity from dehydration. Stop lithium, same-day hospital assessment for level, U&E and fluids, ring ahead. Promise safe restart with the mental-health team."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 for worsening drowsiness, fits or palpitations. Teach-back with her daughter. Follow-up call booked and sick-day rules planned."
    }
   ],
   "wordPics": {
    "fail": "Treats the gastroenteritis and says to carry on the lithium; ignores the daughter’s report of confusion; books a routine blood test for next week; no question about NSAIDs or other drugs; no safety-net.",
    "pass": "Recognises possible lithium toxicity, stops the lithium, arranges an urgent level and renal function with hospital assessment, asks about interacting drugs, and gives a basic safety-net.",
    "exc": "All of the above, plus: explains the dehydration mechanism in plain words; uses the daughter as an ally and for teach-back; addresses the fear of relapse with a clear plan to restart through the mental-health team; rings ahead; plans sick-day and alert-card education."
   },
   "avoid": [
    {
     "dont": "“It sounds like a tummy bug — keep taking your tablets and drink plenty.”",
     "instead": "“Your lithium is very relevant. The sickness can push its level up, and your shakiness and muddled thinking may be the sign.”",
     "why": "Continuing lithium through toxicity is the key safety failure in this station."
    },
    {
     "dont": "“We’ll book a lithium level for next week.”",
     "instead": "“Because you’re confused and unsteady, you need an urgent level and kidney tests in hospital today.”",
     "why": "Neurological signs make this a same-day emergency, not routine monitoring."
    },
    {
     "dont": "“You’d better come off lithium altogether after this.”",
     "instead": "“We’ll stop it for now and restart it safely with your mental-health team once you’re well.”",
     "why": "Abrupt long-term withdrawal risks relapse and ignores her main concern."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Support at home",
     "t": "A confused patient on video may not give a reliable history. With her consent, involve the daughter who raised the concern, and check she can get to hospital safely."
    },
    {
     "h": "Living with bipolar disorder",
     "t": "Fear of relapse can make patients reluctant to stop lithium even briefly; name it and give a clear plan for restarting."
    }
   ],
   "legal": [
    {
     "h": "Capacity",
     "t": "Acute confusion may affect her capacity to decide about going to hospital. Assess capacity for that decision (Mental Capacity Act 2005) if she declines; here she agrees."
    },
    {
     "h": "DVLA",
     "t": "She should not drive while confused and unwell. Bipolar disorder has its own DVLA notification rules; check current DVLA guidance at review rather than today."
    }
   ],
   "professional": [
    {
     "h": "Safe prescribing systems",
     "t": "NPSA/2009/PSA005: lithium monitoring, reliable result communication, and patient information with a record book and alert card. Review the practice recall once she recovers."
    },
    {
     "h": "Communication across teams",
     "t": "Ring ahead to the hospital and later inform the mental-health team; record the episode, precipitant and restart plan clearly (GMC Good medical practice)."
    }
   ],
   "community": [
    {
     "h": "Pharmacy and resources",
     "t": "Community pharmacists can check interactions before over-the-counter purchases. Bipolar UK offers peer support and information."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Confusion, drowsiness, ataxia or coarse tremor in a patient on lithium",
     "Seizures, palpitations or collapse",
     "Reduced urine output or inability to keep fluids down"
    ],
    "psychosocial": [
     "Who is at home and can take her to hospital",
     "Her daughter’s observations, with consent",
     "Her fear of relapse if lithium is stopped"
    ],
    "ice": [
     "Idea: “It’s just the sickness bug.”",
     "Concern: coming off lithium and becoming unwell again",
     "Expectation: something for the sickness"
    ]
   },
   "diagnosis": "“I think your lithium level has probably gone too high because the bug has dehydrated you. The shakiness, wobbliness and muddled thinking fit that, and it needs checking in hospital today.”",
   "diagnosisLay": "“Lithium is like water in a bath with the plug partly out: your kidneys are the plug. When you’re dehydrated, the plug closes a bit and the level rises. We need to stop filling the bath and measure how high it is.”",
   "management": {
    "reflectIce": "“You were worried that stopping lithium means getting ill again. Stopping it for a few days to let the level fall is different, and we’ll restart it safely with your mental-health team.”",
    "psychosocial": "Involve her daughter in getting her to hospital and in the teach-back, and give written sick-day rules once she is home.",
    "sharedPlan": [
     "Stop lithium now; same-day hospital assessment for lithium level, U&E, creatinine and fluids",
     "Review drugs that raise lithium (NSAIDs, ACEi, ARBs, diuretics)",
     "Restart with the mental-health team once recovered; re-check level; reinforce record book and alert card"
    ],
    "safetyNet": [
     "999 for worsening drowsiness, fits, palpitations or collapse",
     "GP follow-up call the next day and review after discharge"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Tremors",
    "s": "Case walkthrough · drug-induced tremor",
    "href": "../cases/tremor.html"
   },
   {
    "ic": "🗺️",
    "t": "Confusion pathway",
    "s": "Visual algorithm · acute confusion",
    "href": "algorithms/confusion.html"
   },
   {
    "ic": "💠",
    "t": "Sick day rules",
    "s": "Protocol · lithium and narrow-margin drugs",
    "href": "management/sick-day-rules.html"
   },
   {
    "ic": "🗺️",
    "t": "Tremors pathway",
    "s": "Visual algorithm · coarse vs fine tremor",
    "href": "algorithms/tremors.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed when the candidate treats the bug and misses the drug. The patient hands you the diagnosis in her first minute; the marks are for acting on it safely and keeping her engaged with her mental-health care.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Answering “is the lithium relevant?” with “probably not” and prescribing an antiemetic.",
     "why": "“Fails to recognise a serious condition.” New coarse tremor, ataxia and confusion on lithium after D&V is toxicity until proved otherwise (NICE CG185).",
     "fix": "“Yes, very relevant. Dehydration can push your lithium up, and your symptoms fit that.”"
    },
    {
     "dom": "tasks",
     "fail": "Stopping the lithium but booking a routine blood test for tomorrow while she stays at home confused.",
     "why": "Neurological signs mean possible severe toxicity; a delayed result leaves a confused patient unsupervised. “Management not safe” is the feedback statement.",
     "fix": "Same-day hospital assessment for level, U&E and fluids, with a phone handover."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about ibuprofen, ACE inhibitors, ARBs or diuretics.",
     "why": "Missing the interacting drug means the next episode is likely. BNF and CG185 both list them.",
     "fix": "One direct question: “Have you taken anything for pain or started any water or blood-pressure tablets?”"
    },
    {
     "dom": "rto",
     "fail": "Talking over the daughter’s observation because the patient says she is fine.",
     "why": "“Does not identify or respond to cues.” The daughter’s account of confusion is the key cue.",
     "fix": "“Your daughter may see more clearly than you can right now. What has she noticed?”"
    },
    {
     "dom": "rto",
     "fail": "Telling her she should come off lithium for good after this.",
     "why": "Ignores her main concern and risks relapse; restarting needs the mental-health team.",
     "fix": "“We’re stopping it for now, and we’ll restart it safely with your team once you’re better.”"
    },
    {
     "dom": "gs",
     "fail": "Jargon — “narrow therapeutic index, reduced renal clearance” — to a muddled patient.",
     "why": "“Language not easily understood.” A confused patient needs short, concrete instructions.",
     "fix": "Three clear actions and teach-back: no more lithium, hospital today with your book and card, 999 if more drowsy."
    },
    {
     "dom": "gs",
     "fail": "No safety-net and no follow-up once she is sent to hospital.",
     "why": "Care ends at the referral; the restart plan and sick-day education are lost.",
     "fix": "Name 999 triggers, ring ahead, and book a follow-up call and a post-discharge review."
    }
   ]
  }
 },
 "pregnant-at-15": {
  "stem": {
   "name": "Caitlin Brophy",
   "age": "15-year-old girl",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded",
   "recent": "Positive home pregnancy test. Gestation not known. Attending alone.",
   "reason": "Video consultation: “I think I’m pregnant and I want to know my options.”"
  },
  "knowledge": {
   "guideline": "Sexual Offences Act 2003 · GMC 0–18 years (2007, updated 2018) · Working Together to Safeguard Children 2026 · Gillick v West Norfolk and Wisbech AHA (1985) · Abortion Act 1967 · NICE NG140 (abortion care, 2019) · BASHH and Brook Spotting the Signs proforma (2014)",
   "summary": "A 15-year-old with a 22-year-old partner is a child-protection matter that must be shared, and it is also a young person who needs kind, non-judgemental pregnancy care. Do both: be honest about confidentiality, refer through safeguarding, and support her choices.",
   "points": [
    {
     "h": "The law",
     "t": "Sexual activity by an adult aged 18 or over with a child under 16 is an offence (Sexual Offences Act 2003 s9); the child’s agreement is not a defence [1]. Under 13, a child cannot consent at all [1]."
    },
    {
     "h": "When to share",
     "t": "GMC guidance says doctors should usually share information about sexual activity that is abusive or seriously harmful — including where there is a big difference in age, maturity or power, pressure, gifts or payment, or drugs or alcohol [2]. A 22-year-old partner of a 15-year-old meets this. Share even without her consent, telling her first unless that would increase the risk."
    },
    {
     "h": "How to share",
     "t": "Discuss with the practice safeguarding lead and refer the same day to children’s social care; police involvement is decided through the multi-agency process [3]. Do not warn or contact the partner. Consider siblings and any other children he has contact with."
    },
    {
     "h": "Competence for her own decisions",
     "t": "Gillick competence is assessed for each decision, including abortion [4]. The Fraser guidelines are the narrower test for giving contraception to under-16s without parental knowledge. Encourage her to involve a parent or trusted adult, but a competent 15-year-old can consent to abortion herself."
    },
    {
     "h": "Pregnancy options without delay",
     "t": "Give non-directive information on continuing, adoption and abortion. Women can self-refer to abortion services [6], and the legal ground is set by two doctors under the Abortion Act [5]. Safeguarding must not delay her access to care. Services use a structured CSE screen for all under-18s [7]."
    },
    {
     "h": "Holistic care",
     "t": "Offer STI testing and discuss future contraception. Confirm the pregnancy and date it; one-sided pain or bleeding needs same-day assessment for ectopic pregnancy."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Caitlin, I’m Dr Lee. Thanks for getting in touch — you’ve done the right thing. Are you somewhere private where you can talk?",
    "dom": "rto",
    "why": "Warm welcome and a privacy check before sensitive questions"
   },
   {
    "who": "pt",
    "text": "Yeah. I think I’m pregnant — I did a test at home. Please don’t make a big thing of it. My boyfriend’s a bit older, he’s 22, but he loves me — it’s not like that. I just want to know my options. Can you keep it between us?"
   },
   {
    "who": "dr",
    "text": "You’re not in trouble, and I’m going to help you with your options. Before you tell me more, I want to be honest about one thing, because I don’t want to go behind your back: I keep things private wherever I can, but if I think someone your age might be at risk, I have to share that with people whose job is keeping young people safe. I’d always tell you first.",
    "dom": "tasks",
    "why": "Explains the limit of confidentiality before further disclosure, without promising secrecy"
   },
   {
    "who": "pt",
    "text": "So you’re going to report him?"
   },
   {
    "who": "dr",
    "text": "I’m not here to get anyone in trouble — I’m here for you. Let’s talk it through together, and I’ll be straight with you at every step. Is that okay?",
    "dom": "rto",
    "why": "Keeps her engaged after the confidentiality warning"
   },
   {
    "who": "pt",
    "text": "I suppose."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "First, you. When was your last period, roughly? Any pain in your tummy or bleeding?",
    "dom": "tasks",
    "why": "Dates the pregnancy and screens for ectopic symptoms"
   },
   {
    "who": "pt",
    "text": "I’m not sure exactly. No pain or bleeding."
   },
   {
    "who": "dr",
    "text": "Thanks. Tell me about your boyfriend — how did you meet, and how are things between you?",
    "dom": "tasks",
    "why": "Open exploration of the relationship"
   },
   {
    "who": "pt",
    "text": "Does it matter? He’s good to me."
   },
   {
    "who": "dr",
    "text": "It does, and I’m not judging you. At 15 the law sees you as a child, and part of my job is making sure nobody older is taking advantage — even when it doesn’t feel like that. Does he ever buy you things, give you alcohol or anything else, tell you to keep the relationship secret, or get angry if you see friends?",
    "dom": "tasks",
    "why": "Explains why, then screens CSE indicators: gifts, substances, secrecy, control"
   },
   {
    "who": "pt",
    "text": "No… not really. He just says people wouldn’t understand."
   },
   {
    "who": "dr",
    "text": "Thank you for being honest. Has anything sexual ever happened that you didn’t want, or felt you couldn’t say no to? And do you know if he’s in contact with any other girls your age?",
    "dom": "tasks",
    "why": "Screens consent and wider risk to other children"
   },
   {
    "who": "pt",
    "text": "No. I don’t know. I don’t think so."
   },
   {
    "who": "dr",
    "text": "And at home — who do you live with, and do you feel safe there?",
    "dom": "tasks",
    "why": "Home safety and support, and any siblings"
   },
   {
    "who": "pt",
    "text": "I’m safe. They just can’t find out. They’d be so upset."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What worries you most right now?",
    "dom": "rto",
    "why": "Elicits her concerns in her own words"
   },
   {
    "who": "pt",
    "text": "That he gets in trouble. That my family finds out. And I don’t know what to do about the baby."
   },
   {
    "who": "dr",
    "text": "That’s a lot to carry on your own. I’ll help with all three. Let’s start with the part that’s about what you want.",
    "dom": "rto",
    "why": "Validates and signals that her choices matter"
   },
   {
    "phase": "Options",
    "clock": "6–8 min",
    "who": "dr",
    "text": "You have three options: continuing the pregnancy, continuing and adoption, or ending the pregnancy. You don’t have to decide today, but time does matter, so I’d like to get you a proper scan and a specialist appointment quickly. Is there an option you’re leaning towards, or would you like to talk them through?",
    "dom": "tasks",
    "why": "Non-directive options with appropriate urgency"
   },
   {
    "who": "pt",
    "text": "I don’t know yet. Can I decide by myself?"
   },
   {
    "who": "dr",
    "text": "If you understand what each option involves — and you’re clearly thinking carefully — then yes, you can make this decision yourself, even at 15. I’d gently encourage having an adult you trust with you, because it’s a lot to go through alone. Is there anyone?",
    "dom": "tasks",
    "why": "Addresses Gillick competence and encourages, without forcing, a trusted adult"
   },
   {
    "who": "pt",
    "text": "Maybe. I need to think."
   },
   {
    "phase": "Safeguarding and plan",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Now the hard part, and I promised to be honest. Because you’re 15 and he’s 22, I have to share this with our safeguarding lead and children’s social care today. It isn’t to punish you — you’ve done nothing wrong. It’s so someone can make sure you’re safe and supported.",
    "dom": "tasks",
    "why": "Names the duty clearly and kindly, and tells her before acting"
   },
   {
    "who": "pt",
    "text": "(Upset.) You said you wouldn’t get him in trouble."
   },
   {
    "who": "dr",
    "text": "I said I’m here for you, and that I’d be straight with you, and I am. I can hear you care about him. The law is there because relationships with a big age gap can be unfair even when they feel loving. I won’t contact him. Who would you want to hear from, and how?",
    "dom": "rto",
    "why": "Responds to minimisation with warmth, without colluding, and gives her some control"
   },
   {
    "who": "pt",
    "text": "My mobile. Not at home."
   },
   {
    "who": "dr",
    "text": "Okay. I’ll pass that on. I’ll also arrange a confidential appointment with the pregnancy advice service, and when you’re ready, a check for infections and a chat about contraception. You’ll have me and a named person on your side.",
    "dom": "gs",
    "why": "Keeps pregnancy care moving in parallel with safeguarding; safe contact route"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you get strong pain on one side, heavy bleeding or feel faint, go to A&E or call 999. If you ever feel unsafe, or someone pressures you about what to do, call 999 in an emergency, or me. I’ll ring you tomorrow to tell you what’s happened.",
    "dom": "gs",
    "why": "Ectopic and safety red flags with a named, time-bound follow-up"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "Can you tell me what happens next, so I know I’ve explained it properly?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "You talk to the safety people, they ring my mobile, I get a scan and an appointment about the baby, and you call me tomorrow."
   },
   {
    "who": "dr",
    "text": "Exactly. You were really brave today. Anything you want to ask me?",
    "dom": "rto",
    "why": "Affirms her and shares the floor"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Warm opening; privacy check; lets her explain; states confidentiality limits before further disclosure.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Relationship, home, school, siblings, support network, and fears about family and the boyfriend.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up “it’s not like that”, “keep it between us” and “people wouldn’t understand”, and explores them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: a loving relationship and a private matter; concern: trouble for him and her family finding out; expectation: confidential options and no fuss.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Confirm and date the pregnancy (scan via the pregnancy service); STI testing; ectopic screen.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Child sexual abuse or exploitation (age gap, secrecy, gifts, control); risk to other children; home safety.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Ectopic symptoms; immediate danger; coercion over the pregnancy decision.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Pregnancy in a 15-year-old with a 22-year-old partner — a child-protection concern requiring referral, alongside a pregnancy decision she is entitled to make.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day safeguarding referral, explained to her first; non-directive options; prompt pregnancy-service appointment; Gillick competence assessed; trusted adult encouraged.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "STI testing; contraception planning; emotional support; no contact with the partner.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Ectopic red flags; 999 if unsafe; safe contact route; call back the next day; documentation.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Gender, reproductive & sexual health",
    "Professional & ethical dilemmas",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Caitlin Brophy",
    "age": "15 years · female",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "⚠ Self-booked video appointment. Positive home pregnancy test. Attending alone.",
    "reason": "“I want to know my options. Can you keep it between us?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Welcome and honesty",
     "d": "Privacy check. “You’re not in trouble.” State confidentiality limits before she tells you more."
    },
    {
     "t": "1–5",
     "h": "Her, him, home",
     "d": "Dates and ectopic screen. Relationship, gifts, substances, secrecy, control, consent, other children, home safety."
    },
    {
     "t": "5–8",
     "h": "ICE and options",
     "d": "Her fears. Non-directive options, Gillick competence, trusted adult encouraged."
    },
    {
     "t": "8–11",
     "h": "Safeguarding and plan",
     "d": "Name the duty kindly; same-day referral via safeguarding lead; safe contact; pregnancy service; STI and contraception."
    },
    {
     "t": "11–12",
     "h": "Safety-net and close",
     "d": "Ectopic and safety red flags; call tomorrow; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Promises to keep it secret; accepts “it’s not like that” and makes no referral; or launches into child-protection process so bluntly that she hangs up; ignores her pregnancy options.",
    "pass": "Explains confidentiality limits; recognises the age gap as a child-protection issue and refers; gives options and arranges pregnancy care; safety-nets.",
    "exc": "All of the above, plus: limits of confidentiality explained before disclosure; CSE indicators screened with a reason given; the referral explained to her first with a safe contact route; pregnancy care kept moving in parallel; Gillick competence addressed; she ends the call still trusting the doctor."
   },
   "avoid": [
    {
     "dont": "“Don’t worry, this stays between us.”",
     "instead": "“I keep things private wherever I can, but if you might be at risk I have to share it — and I’ll always tell you first.”",
     "why": "A promise you cannot keep destroys trust later."
    },
    {
     "dont": "“He’s committed a crime and I have to report him to the police.”",
     "instead": "“Because of your age and his, I need to share this with people whose job is keeping you safe. It isn’t to punish you.”",
     "why": "Leading with the offence makes her defend him and disengage."
    },
    {
     "dont": "“We’ll sort out the safeguarding first, then talk about the pregnancy.”",
     "instead": "“Let’s get you the right appointment for the pregnancy now, alongside keeping you safe.”",
     "why": "Pregnancy options are time-critical; safeguarding must not delay care."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Normalised relationships",
     "t": "Young people groomed by older partners often see the relationship as loving and defend the partner. Secrecy (“people wouldn’t understand”) is itself a warning sign."
    },
    {
     "h": "Family and school",
     "t": "Fear of family reaction is common. Explore who could support her; the school nurse or designated safeguarding lead may already know her."
    }
   ],
   "legal": [
    {
     "h": "Sexual Offences Act 2003",
     "t": "An adult aged 18 or over commits an offence by sexual activity with a child under 16 (s9); under-13s cannot consent (s5)."
    },
    {
     "h": "Competence and consent",
     "t": "Gillick (1985) applies decision by decision; a competent under-16 can consent to abortion. Fraser guidelines apply to contraception advice without parental knowledge."
    },
    {
     "h": "Information sharing",
     "t": "GMC 0–18 years and Working Together to Safeguard Children 2026: share where abuse or exploitation is suspected; seek consent where safe, but do not let lack of consent delay protection."
    }
   ],
   "professional": [
    {
     "h": "Honesty about confidentiality",
     "t": "Explain limits early, never promise secrecy, and tell her what you are doing and why unless that would put her or others at greater risk."
    },
    {
     "h": "Record and follow through",
     "t": "Document her words, the risk indicators, the discussion with the safeguarding lead, the referral and the plan. Follow up the referral outcome."
    }
   ],
   "community": [
    {
     "h": "Services",
     "t": "Children’s social care or the local multi-agency safeguarding hub; young people’s sexual-health services (for example Brook); pregnancy advice and abortion services; school nurse."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Adult partner, secrecy, gifts, drugs or alcohol, control, or other young people involved — CSE indicators",
     "Sex she did not want or could not refuse; pressure about the pregnancy decision",
     "One-sided pain, bleeding or fainting — possible ectopic pregnancy"
    ],
    "psychosocial": [
     "How the relationship started and how he treats her",
     "Who she lives with, whether she feels safe, siblings, school",
     "Who she could lean on; her emotional state"
    ],
    "ice": [
     "Idea: “It’s a loving relationship — it’s not like that”",
     "Concern: trouble for him and her family finding out; not knowing what to do",
     "Expectation: private advice on options, no fuss"
    ]
   },
   "diagnosis": "“You’re pregnant, and you have real choices about what happens next. Because you’re 15 and your boyfriend is 22, I also have a duty to make sure you’re safe, and that means sharing this with the safeguarding team.”",
   "diagnosisLay": "“The law sets an age of 16 to protect young people from relationships where the older person has more power — even when it feels loving. It’s about keeping you safe, not about blaming you.”",
   "management": {
    "reflectIce": "“You’re worried about him getting in trouble and your family finding out. I’ll be honest with you about every step, and I’ll help you through it — you won’t be on your own.”",
    "psychosocial": "Keep her trust: explain first, give her choices about contact, do not contact the partner, encourage (not force) a trusted adult, and keep pregnancy care moving.",
    "sharedPlan": [
     "Same-day discussion with the safeguarding lead and referral to children’s social care",
     "Non-directive options; prompt appointment with the pregnancy advice or abortion service; Gillick competence assessed",
     "STI testing and contraception when she is ready"
    ],
    "safetyNet": [
     "One-sided pain, heavy bleeding or fainting — A&E or 999; 999 if in danger",
     "Phone call the next day; safe mobile contact agreed"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Safeguarding",
    "s": "Case walkthrough · child sexual exploitation",
    "href": "../cases/safeguarding.html"
   },
   {
    "ic": "📋",
    "t": "Contraception",
    "s": "Case walkthrough · Fraser guidelines",
    "href": "../cases/contraception.html"
   },
   {
    "ic": "💠",
    "t": "Chlamydia",
    "s": "Management · STI testing",
    "href": "management/chlamydia.html"
   },
   {
    "ic": "🗺️",
    "t": "Bleeding in early pregnancy",
    "s": "Visual algorithm · ectopic safety-net",
    "href": "algorithms/vaginal-bleeding-pregnancy.html"
   }
  ],
  "pitfalls": {
   "intro": "This station fails candidates in two opposite directions: those who keep the secret to keep her happy, and those who deliver child-protection process so bluntly that a frightened 15-year-old disengages. The marks are in doing both jobs.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Agreeing to keep it between you, or accepting “it’s not like that” and making no referral.",
     "why": "A 22-year-old with a 15-year-old is a child-protection concern that should be shared (Sexual Offences Act 2003 s9; GMC 0–18 years; Working Together 2026).",
     "fix": "Explain limits early and refer the same day through the safeguarding lead."
    },
    {
     "dom": "rto",
     "fail": "Leading with “this is a crime and I must report him”.",
     "why": "She defends him, stops talking, and may not return — the risk is then unmanaged.",
     "fix": "Frame the duty around her safety: “It isn’t to punish you — it’s so you’re safe and supported.”"
    },
    {
     "dom": "tasks",
     "fail": "Promising confidentiality at the start, then breaking it later.",
     "why": "“Did not explain the limits of confidentiality” — and it breaks trust at the moment she needs it most.",
     "fix": "State the limit before she tells you more, and tell her before you share."
    },
    {
     "dom": "tasks",
     "fail": "Focusing on safeguarding and forgetting the pregnancy.",
     "why": "Options are time-critical; delay removes choices. “Management plan insufficiently developed.”",
     "fix": "Give non-directive options and book the pregnancy-service appointment in the same consultation."
    },
    {
     "dom": "tasks",
     "fail": "Saying she needs a parent’s permission, or applying the Fraser guidelines to abortion.",
     "why": "Gillick competence applies to her decision about the pregnancy; Fraser is for contraception advice.",
     "fix": "Assess understanding and tell her she can decide if she understands; encourage a trusted adult."
    },
    {
     "dom": "gs",
     "fail": "No safe contact plan, or contacting the boyfriend to “hear his side”.",
     "why": "Alerting a possible abuser can increase risk and hinder investigation.",
     "fix": "Agree a safe number, never contact the partner, and call her the next day."
    }
   ]
  }
 },
 "red-s-stress-fractures": {
  "stem": {
   "name": "Orla Devine",
   "age": "23-year-old woman",
   "pmh": [
    "Two stress fractures in the past 12 months",
    "Keen distance runner, competing"
   ],
   "meds": [
    "Current medication and contraception not recorded on the summary"
   ],
   "allergy": "Not recorded",
   "recent": "Walk-in centre attendance this week: suspected stress fracture of the foot, advised to see her GP. This would be her third stress fracture in a year. No bone-density scan or bone bloods on file.",
   "reason": "Video consultation booked: “My foot again — I need it sorted so I can keep training.”"
  },
  "knowledge": {
   "guideline": "IOC consensus statement on REDs 2023 (international) · NICE NG69 (eating disorders, 2017, updated 2020) · RCPsych MEED CR233 (2022)",
   "summary": "Three stress fractures in a year in a young woman who runs is a systemic warning, not bad luck. Screen for low energy availability, disordered eating and menstrual disturbance, look for low bone density, and treat the cause with a team, not just the bone.",
   "points": [
    {
     "h": "Recurrent bone stress injury is the red flag",
     "t": "One stress fracture can follow a jump in training load. Repeated ones point to low energy availability and poor bone health. Relative Energy Deficiency in Sport (REDs) is wider than the old female athlete triad: it affects men too, and reaches bone, hormones, mood, immunity, heart and performance [1]."
    },
    {
     "h": "Screen eating by conversation, not a score",
     "t": "Ask about intake against training, restriction, food rules, weight and shape worries, purging, laxatives and over-exercise. A tool such as SCOFF can prompt the conversation but must not be the only way you decide whether an eating disorder is present [2]. If you suspect one, refer immediately to the community eating-disorder service [2]."
    },
    {
     "h": "Periods are a vital sign, and the pill can hide them",
     "t": "Absent or infrequent periods in an athlete are a sign of low energy availability, not a normal effect of running. Withdrawal bleeds on a combined pill mask this, so ask what she takes. Always do a pregnancy test first in amenorrhoea, then LH, FSH, oestradiol, prolactin and TFTs."
    },
    {
     "h": "Investigate the bone and the cause",
     "t": "Confirm the fracture (MRI is the most sensitive test; X-ray is often normal early). Bloods: FBC, ferritin, U and E, bone profile, vitamin D, TFTs, coeliac serology. Consider DXA: NICE NG69 advises DXA earlier than usual when there are recurrent fractures [2]. A fracture at a high-risk site (for example the navicular or the base of the fifth metatarsal) needs an urgent orthopaedic or sports-medicine opinion."
    },
    {
     "h": "Check physical risk before assuming she is well",
     "t": "If eating is significantly restricted, assess medical risk in person: weight and BMI, lying and standing pulse and BP, temperature, the sit-up–squat–stand test and an ECG and electrolytes if indicated [3]. A video call cannot do this."
    },
    {
     "h": "Treat the energy deficit, not the fracture alone",
     "t": "Relative rest from impact, more fuel, and a team: sports and exercise medicine, a sports dietitian, and eating-disorder or psychology input where needed. Correct vitamin D deficiency (dose per BNF). The combined pill is not advised to protect bone in hypothalamic amenorrhoea; if hormone therapy is needed, specialists use transdermal oestradiol with cyclical progesterone [1]."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Orla, I’m Dr Lee. I’ve seen the walk-in note about your foot. I’m sorry — I can hear how frustrating this is. Tell me what’s happened, and what you’re hoping we can do today.",
    "dom": "rto",
    "why": "Opens with her story and her expectations, not a checklist"
   },
   {
    "who": "pt",
    "text": "It’s my foot again. They think it’s another stress fracture — third one this year. I’ve got races coming up, so I just need it sorted. A boot or whatever, so I can get back to training fast."
   },
   {
    "who": "dr",
    "text": "Getting you back running is exactly what I want too. I’ll make sure the foot is properly looked after. But I’d also like to understand why this keeps happening, because three in a year tells me something. Can we cover both today?",
    "dom": "gs",
    "why": "Agrees a shared agenda that includes the systemic question"
   },
   {
    "who": "pt",
    "text": "I suppose. I just thought it was bad luck."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Talk me through the foot first — where is the pain, and is it there when you walk, or only when you run?",
    "dom": "tasks",
    "why": "Focused fracture history to judge severity and site"
   },
   {
    "who": "pt",
    "text": "It hurts walking now. It started as just a niggle on long runs and I kept going."
   },
   {
    "who": "dr",
    "text": "Thanks. And what does a normal week of training look like at the moment — has anything changed in the last few months?",
    "dom": "tasks",
    "why": "Establishes training load, the other half of the energy balance"
   },
   {
    "who": "pt",
    "text": "I’ve been building my mileage for the season. I train most days."
   },
   {
    "who": "dr",
    "text": "That’s a big load. Repeated stress fractures in runners often come down to the body not getting enough fuel for the training — often without anyone meaning it to. Could you walk me through what you’d eat on a typical training day?",
    "dom": "rto",
    "why": "Explains why before asking a sensitive question, so it lands as curiosity not accusation"
   },
   {
    "who": "pt",
    "text": "I eat healthily. I’m careful, that’s all — you have to be at my level."
   },
   {
    "who": "dr",
    "text": "Lots of athletes say that. Can I ask a bit more — do you ever skip meals, have rules about what you will or won’t eat, or feel guilty if you eat more than planned? Any making yourself sick or using laxatives? There’s no judgement here; I ask everyone who has bones breaking like this.",
    "dom": "tasks",
    "why": "Screens restriction, food rules and compensatory behaviours in a normalised way"
   },
   {
    "who": "pt",
    "text": "I don’t really want to get into all that. I’m not ill. I just watch what I eat."
   },
   {
    "who": "dr",
    "text": "That’s fair, and you don’t have to answer everything today. I’ll leave the door open. Can I ask about your periods — are they regular, and are you on any contraception?",
    "dom": "tasks",
    "why": "Respects her pace and moves to the key clue: menstrual history and the pill"
   },
   {
    "who": "pt",
    "text": "I don’t really keep track. Isn’t that normal for runners anyway?"
   },
   {
    "who": "dr",
    "text": "It’s common, but it isn’t normal or harmless — it’s one of the clearest signs the body is running low on energy, and it weakens bone. And if someone is on the combined pill, the monthly bleed can hide the problem completely, so I’ll check exactly what you take.",
    "dom": "tasks",
    "why": "Corrects the myth and names the masking effect of the pill"
   },
   {
    "who": "dr",
    "text": "How are you in yourself — energy, mood, sleep, picking up lots of colds, or feeling your running has stalled even though you train harder?",
    "dom": "tasks",
    "why": "Screens the wider effects of low energy availability"
   },
   {
    "who": "pt",
    "text": "I’m tired, but everyone’s tired. I do get stressed about races."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You’ve said a few times you don’t want to lose fitness. What would it mean for you if you had to step back from running for a while?",
    "dom": "rto",
    "why": "Explores the real concern behind “just sort my foot”"
   },
   {
    "who": "pt",
    "text": "Running is basically everything. If I can’t train I don’t really know who I am. That’s what scares me."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me that. It makes complete sense that this feels threatening. My aim is the opposite of taking running away — it’s to stop your body breaking so you can keep doing it for years.",
    "dom": "rto",
    "why": "Validates the fear and reframes the doctor as an ally for her sport"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s what I think is going on. When training uses more energy than food puts back in, the body saves energy by turning down things it sees as optional — periods, hormones, bone repair. That’s called low energy availability, and it’s the commonest reason for repeated stress fractures in runners. It isn’t about willpower or blame.",
    "dom": "tasks",
    "why": "Plain-language explanation of REDs linking fractures, periods and fuel"
   },
   {
    "who": "pt",
    "text": "So you think I’m not eating enough?"
   },
   {
    "who": "dr",
    "text": "I think it’s the most likely explanation, and I’d like to check rather than guess. The upside is real: athletes who fuel properly usually get their periods back, heal better and often run faster.",
    "dom": "rto",
    "why": "Frames fuelling as the route to performance, not a punishment"
   },
   {
    "who": "pt",
    "text": "I hadn’t thought of it like that."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "For the foot: I’d like to see you in person this week to examine it, check your weight, pulse and blood pressure, and arrange the right scan. Until then, please don’t run on it. If it’s in certain higher-risk spots in the foot, it needs a bone specialist quickly.",
    "dom": "tasks",
    "why": "Arranges face-to-face assessment, imaging and relative rest; flags high-risk sites"
   },
   {
    "who": "pt",
    "text": "No running at all? Okay… if it means it heals properly."
   },
   {
    "who": "dr",
    "text": "Alongside that, some blood tests — a pregnancy test because periods are irregular, blood count, iron, vitamin D, kidney and bone salts, thyroid, coeliac and hormone levels — and a bone-density scan, because three fractures is enough reason to look.",
    "dom": "tasks",
    "why": "Pregnancy test first, then a targeted work-up and DXA"
   },
   {
    "who": "dr",
    "text": "Then I’d like to get you the right team: a sports medicine doctor and a sports dietitian who works with runners. And if food ever feels harder to manage than you’d like, there’s specialist support for that too — your choice when. How does that sound?",
    "dom": "rto",
    "why": "Multidisciplinary referral offered as a choice, keeping the eating-disorder route open without labelling"
   },
   {
    "who": "pt",
    "text": "A dietitian’s fine. The other bit… maybe. Not yet."
   },
   {
    "who": "dr",
    "text": "That’s okay. If what we find suggests an eating problem, I’ll talk to you openly before referring, because early help works best. And one question for your club or coach — would you like me to share anything with them? Only if you want me to.",
    "dom": "gs",
    "why": "Honest about the referral threshold; respects adult confidentiality"
   },
   {
    "who": "pt",
    "text": "No, keep it between us for now."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Of course. Please call us or 111 sooner if the pain becomes severe or constant at rest, you feel faint or dizzy, your heart races or feels irregular, or you notice your mood dropping badly. I’ll see you face to face this week and again when the results are back.",
    "dom": "gs",
    "why": "Specific safety-net, including physical-risk and mood symptoms, with booked follow-up"
   },
   {
    "who": "pt",
    "text": "Okay. That’s more than I expected, but it makes sense."
   },
   {
    "who": "dr",
    "text": "Can you tell me in your own words what we’re doing next, so I know I’ve explained it well?",
    "dom": "rto",
    "why": "Teach-back checks understanding"
   },
   {
    "who": "pt",
    "text": "Rest the foot, come in this week, bloods and a bone scan, see a sports doctor and dietitian. And think about the fuelling thing."
   },
   {
    "who": "dr",
    "text": "Perfect. You did the right thing getting this looked at properly. Anything else you wanted to ask?",
    "dom": "rto",
    "why": "Closes warmly and shares the floor"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; lets her explain the foot and her goal of racing; agrees an agenda that includes “why does this keep happening?”.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Training load, identity as a runner, club or coach pressure, stress about races, mood and sleep.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up “I’m careful what I eat”, “isn’t that normal for runners?” and the fear of losing fitness, and explores each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: bad luck; concern: losing running and the identity attached to it; expectation: a quick fix to keep training.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Face-to-face exam with weight, pulse, BP, temperature; imaging of the foot; pregnancy test, FBC, ferritin, U and E, bone profile, vitamin D, TFTs, coeliac, LH, FSH, oestradiol, prolactin; DXA.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Low energy availability (REDs) versus training error alone; disordered eating; other causes of amenorrhoea (pregnancy, thyroid, prolactin, PCOS); coeliac or vitamin D deficiency.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "High-risk fracture site; physical instability from restriction (bradycardia, postural drop, electrolyte disturbance); a significant eating disorder needing immediate referral.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Recurrent bone stress injury, probably from relative energy deficiency in sport, shared in plain language without blame.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Relative rest from impact; team referral (sports medicine, sports dietitian, eating-disorder service if suspected); fuelling framed as the route to performance.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Checks contraception (pill can mask amenorrhoea, and does not protect bone); vitamin D replacement if low; mood and stress.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Face-to-face review this week, results review, named red flags (fainting, palpitations, severe pain, low mood), confidentiality with her club respected.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Mental health & addiction",
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Orla Devine",
    "age": "23 years · female",
    "pmh": [
     "Stress fractures × 2 in the past year",
     "Distance runner"
    ],
    "meds": [
     "Not recorded — check contraception"
    ],
    "allergy": "Not recorded",
    "recent": "⚠ Walk-in centre this week: suspected further stress fracture of the foot (third in 12 months). No DXA, no bone bloods, no menstrual history on file.",
    "reason": "Video consultation: “Just sort my foot so I can keep training.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agree agenda",
     "d": "Hear the foot story and the race goal. Name the pattern early: “three in a year — I’d like to understand why.”"
    },
    {
     "t": "1–5",
     "h": "Fracture, fuel and periods",
     "d": "Pain at rest or walking, training load, a typical day’s eating, food rules, purging, periods and the pill, mood and fatigue."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "What running means to her. Her fear of losing it is the key to the whole consultation."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Low energy availability in plain words. Face-to-face exam, imaging, pregnancy test and bloods, DXA, sports medicine and dietitian, eating-disorder route kept open."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Rest from running, named red flags, face-to-face review this week, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Books an X-ray and a boot and discusses return to running; never asks about eating or periods; accepts “it’s normal for runners”; no DXA or bloods; or confronts her with “you have an eating disorder” and loses her.",
    "pass": "Recognises recurrent fractures as a warning sign; asks about eating and periods including the pill; arranges exam, imaging, bloods and DXA; refers to sports medicine and a dietitian; safety-nets.",
    "exc": "All of the above, plus: explains low energy availability in words she accepts; ties fuelling to her own goal of running well; does a pregnancy test first; keeps the eating-disorder door open without labelling; arranges in-person physical-risk checks; respects her confidentiality with the club."
   },
   "avoid": [
    {
     "dont": "“Missing periods is normal when you run a lot.”",
     "instead": "“It’s common in runners, but it’s a sign your body is short of energy, and it weakens bone.”",
     "why": "Normalising amenorrhoea is the exact error this station tests."
    },
    {
     "dont": "“I think you have anorexia and you need to stop running.”",
     "instead": "“Repeated fractures usually mean the body needs more fuel for the training. Can we look at that together?”",
     "why": "A label and a ban end the conversation; a shared explanation keeps her engaged."
    },
    {
     "dont": "“Let’s get you a boot and you can build back up in six weeks.”",
     "instead": "“I’ll look after the foot, and I also want to find out why this is the third one.”",
     "why": "Treating only the bone guarantees a fourth fracture."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Identity and pressure in sport",
     "t": "For a competitive athlete, running can be her identity, social world and coping strategy. Leanness culture, coach expectations and race targets can drive under-fuelling; explore them without blame."
    },
    {
     "h": "Hidden disordered eating",
     "t": "“Clean” or “careful” eating in athletes can hide restriction. Many do not see it as a problem, so aim for trust and a door left open rather than a confession today."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality with club and coach",
     "t": "She is a competent adult. Do not share information with her coach, club or governing body without her consent (GMC Confidentiality, 2017), unless there is a serious risk to life."
    },
    {
     "h": "Capacity and the Mental Health Act",
     "t": "Her decisions about training and treatment are hers while she has capacity (Mental Capacity Act 2005). Compulsory treatment only arises in severe, life-threatening eating disorders and is not the issue today."
    }
   ],
   "professional": [
    {
     "h": "Video consultation limits",
     "t": "Fracture assessment and eating-disorder physical-risk checks need an in-person review (RCPsych MEED CR233, 2022). Say so, and book it rather than examining by video."
    },
    {
     "h": "Anti-doping awareness",
     "t": "If she competes under anti-doping rules, advise her to check any new medicine against UK Anti-Doping resources before starting it."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Beat (the UK eating-disorder charity) for information and helplines; a sports dietitian registered with the HCPC; sports and exercise medicine clinics; her club’s welfare officer if she chooses to involve them."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Pain at rest or at night, or a fracture at a high-risk site (navicular, base of fifth metatarsal) — urgent orthopaedic or sports-medicine opinion",
     "Signs of physical instability from restriction: fainting, palpitations, marked fatigue, rapid weight loss — same-day in-person assessment",
     "Purging, laxative misuse or suicidal thoughts"
    ],
    "psychosocial": [
     "What running means to her, training load, race calendar, coach and club pressures",
     "Eating pattern, food rules, weight and shape worries, and how she copes with stress",
     "Mood, sleep, anxiety and perfectionism"
    ],
    "ice": [
     "Idea: “It’s just bad luck with my foot”",
     "Concern: losing fitness and losing running — “I don’t know who I am without it”",
     "Expectation: a boot and a quick return to training"
    ]
   },
   "diagnosis": "“Three stress fractures in a year isn’t bad luck. The commonest reason in runners is the body getting less fuel than the training uses, so it cuts back on periods, hormones and bone repair. That’s called relative energy deficiency in sport, and it’s very fixable.”",
   "diagnosisLay": "“Think of your body like a phone on low-power mode. When there isn’t enough charge, it switches off background apps to keep going — and periods and bone repair are the first apps it shuts down.”",
   "management": {
    "reflectIce": "“You told me running is everything to you. That’s exactly why I want to fix the cause, so you can keep running for years instead of breaking every few months.”",
    "psychosocial": "Work with her identity as an athlete: frame fuelling as performance, offer a sports dietitian first, keep the eating-disorder route open, and respect her wish to keep the club out of it.",
    "sharedPlan": [
     "Face-to-face exam this week, foot imaging, relative rest from running",
     "Pregnancy test, FBC, ferritin, U and E, bone profile, vitamin D, TFTs, coeliac serology, LH, FSH, oestradiol, prolactin; DXA",
     "Refer to sports and exercise medicine and a sports dietitian; immediate eating-disorder referral if one is suspected (NICE NG69)"
    ],
    "safetyNet": [
     "Severe or constant pain, fainting, palpitations or falling mood — contact the practice or 111 the same day",
     "Review in person this week and again with results"
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
    "ic": "📋",
    "t": "Amenorrhoea",
    "s": "Case walkthrough · pregnancy test first",
    "href": "../cases/amenorrhoea.html"
   },
   {
    "ic": "🗺️",
    "t": "Anorexia pathway",
    "s": "Visual algorithm · physical risk",
    "href": "algorithms/anorexia.html"
   },
   {
    "ic": "🗺️",
    "t": "Foot pain",
    "s": "Visual algorithm · stress fracture",
    "href": "algorithms/foot-pain.html"
   },
   {
    "ic": "💠",
    "t": "Osteoporosis",
    "s": "Management protocol · DXA and bone health",
    "href": "management/osteoporosis.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by doctors who treat the foot and miss the person. The marks sit in recognising the pattern, asking about food and periods without shaming her, and building a plan she will accept.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Arranging an X-ray and a walking boot and discussing return to running, with no question about eating, periods or bone density.",
     "why": "“Management plan not in line with current UK best practice.” Three fractures in a year needs a search for the cause (IOC REDs 2023, international; NICE NG69 on DXA with recurrent fractures).",
     "fix": "Say it out loud early: “Three in a year tells me something bigger is going on — can we look at why?”"
    },
    {
     "dom": "tasks",
     "fail": "Accepting “isn’t that normal for runners?” about irregular periods, or not asking about the pill.",
     "why": "Amenorrhoea is the key clue; withdrawal bleeds on a combined pill hide it. Missing a pregnancy test in amenorrhoea is a safety error.",
     "fix": "Ask about periods and contraception directly, explain why, and do a pregnancy test before anything else."
    },
    {
     "dom": "rto",
     "fail": "Leading with “Do you have an eating disorder?” or pushing for disclosure when she closes down.",
     "why": "“Does not respond to the patient’s cues” and “appeared judgemental”. Shame shuts the conversation for good.",
     "fix": "Explain why you ask, normalise it, accept a partial answer, and leave the door open: “You don’t have to answer everything today.”"
    },
    {
     "dom": "rto",
     "fail": "Telling her she must stop running without exploring what running means to her.",
     "why": "Her hidden fear is losing her identity. A plan that ignores it will not be followed.",
     "fix": "Ask what stepping back would mean, then frame fuelling and rest as the way to keep running long term."
    },
    {
     "dom": "gs",
     "fail": "“Examining” the foot and judging her physical state over video.",
     "why": "Unsafe assessment: fracture examination and physical-risk checks (MEED CR233, 2022) need an in-person review.",
     "fix": "Name the limit and book her in person this week, with observations and a weight."
    },
    {
     "dom": "gs",
     "fail": "Leaving without a plan for bone density, the dietitian or the eating-disorder route.",
     "why": "“Management plan insufficiently developed.” The deficit that caused the fractures is still there.",
     "fix": "Give a clear list: in-person exam, bloods and DXA, sports medicine and dietitian, and the conditions for an eating-disorder referral."
    },
    {
     "dom": "rto",
     "fail": "Sharing concerns with her coach or club “to help her”.",
     "why": "She is an adult with capacity; sharing without consent breaches GMC confidentiality guidance.",
     "fix": "Ask whether she wants anyone involved, and respect her answer."
    }
   ]
  }
 },
 "sex-after-assault": {
  "stem": {
   "name": "Leanne Forbes",
   "age": "33-year-old woman",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "No recent consultations.",
   "reason": "Video consultation: \"Personal problem — would prefer to discuss with the doctor.\""
  },
  "knowledge": {
   "guideline": "NICE NG116 (2018) · NICE PH50 (2014) · GMC Intimate examinations and chaperones (2024) · GMC Confidentiality (2017) · DSM-5 genito-pelvic pain/penetration disorder (international)",
   "summary": "Painful sex with freezing after a past sexual assault is usually a trauma and muscle-guarding response. Believe her, give her control, never push an examination, and keep physical causes in view.",
   "points": [
    {
     "h": "What it probably is",
     "t": "Involuntary tightening of the pelvic floor on attempted penetration (vaginismus; genito-pelvic pain/penetration disorder in DSM-5, international), often with pain and fear of pain. It is a recognised and treatable response to sexual trauma."
    },
    {
     "h": "Physical causes to keep in view",
     "t": "Infection (thrush, STIs), vulval skin conditions such as lichen sclerosus, vaginal dryness, and deep pain from endometriosis or pelvic inflammatory disease. Many can be assessed by history and self-taken swabs before any examination."
    },
    {
     "h": "Examination is her choice",
     "t": "GMC Intimate examinations and chaperones (2024): explain why an examination is needed and what it involves, offer a chaperone, get consent, and stop if she asks. Only examine if clinically necessary; after trauma it can be delayed until she is ready."
    },
    {
     "h": "Trauma",
     "t": "Ask about flashbacks, nightmares, avoidance and hypervigilance. NICE NG116: offer individual trauma-focused CBT for adults with PTSD or clinically important symptoms; EMDR is an option for non-combat trauma more than 3 months ago. Do not offer drug treatment to prevent PTSD."
    },
    {
     "h": "Current safety",
     "t": "NICE PH50: ask about domestic abuse in a private, safe setting. If there is current abuse, assess risk and refer to specialist domestic abuse services."
    },
    {
     "h": "Her choices about the assault",
     "t": "For an adult, whether to report to the police is her decision. Sexual assault referral centres (SARCs) and rape crisis services support people after both recent and past assaults. Confidentiality holds unless others, such as children, are at risk of serious harm (GMC Confidentiality, 2017)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, Ms Forbes, I’m Dr Ahmed. Are you somewhere private where you can talk? Take your time — what would you like to talk about today?",
    "dom": "rto",
    "why": "Checks privacy and opens gently"
   },
   {
    "who": "pt",
    "text": "This is hard to talk about. Sex has become really painful, and sometimes I just freeze, or everything tightens up and I can’t. It’s affecting my relationship. I think it might be connected to something that happened to me years ago. I’ve never really told anyone. Can you fix it?"
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. I know that can’t have been easy, especially if you’ve never told anyone. I believe you, and I’m really glad you’ve come. We’ll go entirely at your pace, and you don’t need to tell me anything you don’t want to.",
    "dom": "tasks",
    "why": "Receives the disclosure with belief and without pressing for detail"
   },
   {
    "who": "pt",
    "text": "Okay. Thank you."
   },
   {
    "who": "dr",
    "text": "I also want to say this now so you’re not worrying about it: I’m not going to ask you to have an examination today. If one is ever useful, it will be your choice, when you’re ready.",
    "dom": "tasks",
    "why": "Removes the fear of a forced examination early"
   },
   {
    "who": "pt",
    "text": "(Relieved.) That helps. I was dreading that."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Can you tell me more about the pain? Is it at the entrance when you first try, or deeper inside?",
    "dom": "tasks",
    "why": "Distinguishes superficial from deep dyspareunia"
   },
   {
    "who": "pt",
    "text": "It’s when we try. Everything just clamps shut."
   },
   {
    "who": "dr",
    "text": "That tightening is something your body does on its own, a bit like flinching. Is there any itching, soreness, discharge, bleeding, or pain at other times, like with periods or passing urine?",
    "dom": "tasks",
    "why": "Screens for infection, skin conditions and pelvic causes"
   },
   {
    "who": "pt",
    "text": "I’m not sure. I haven’t really paid attention to that."
   },
   {
    "who": "dr",
    "text": "That’s fine. We can look into those gently later. When you think about what happened, or during sex, do you get memories that come back, nightmares, or feel on edge a lot of the time?",
    "dom": "tasks",
    "why": "Screens for PTSD symptoms"
   },
   {
    "who": "pt",
    "text": "Sometimes it just comes back, when things get close."
   },
   {
    "who": "dr",
    "text": "And how has your mood been? Have you had thoughts of harming yourself or that life isn’t worth living?",
    "dom": "tasks",
    "why": "Screens for mood and suicide risk"
   },
   {
    "who": "pt",
    "text": "No, not that. Just stressed and down about it."
   },
   {
    "who": "dr",
    "text": "Thank you. I ask everyone this: is anyone hurting you now, or are you ever frightened of anyone at home?",
    "dom": "tasks",
    "why": "Routine screen for current abuse (NICE PH50)"
   },
   {
    "who": "pt",
    "text": "No. I’m safe now. It was years ago."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "What do you think is going on, in your own mind?",
    "dom": "rto",
    "why": "Elicits her idea"
   },
   {
    "who": "pt",
    "text": "That it’s because of what happened. That I’m broken somehow."
   },
   {
    "who": "dr",
    "text": "That’s a painful thought to carry. What worries you most about it?",
    "dom": "rto",
    "why": "Explores her concern"
   },
   {
    "who": "pt",
    "text": "That it won’t get better, and it’ll wreck my relationship. And that I’ll have to talk about it all in detail."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "You’re not broken. What you describe — freezing and everything tightening — is your body trying to protect you after something frightening. It’s a real, recognised response, and it’s treatable. Many people get much better.",
    "dom": "tasks",
    "why": "Validates the trauma link and gives hope"
   },
   {
    "who": "pt",
    "text": "Really? I thought it was just me."
   },
   {
    "who": "dr",
    "text": "Really. It’s also sensible to check there’s nothing physical adding to the pain, like an infection or a skin problem. Some of that can be done with swabs you take yourself, in private. An examination could come later, only if needed and only if you want it, with a chaperone, and you could stop at any moment.",
    "dom": "tasks",
    "why": "Keeps organic causes in view without overriding her pace"
   },
   {
    "who": "pt",
    "text": "Swabs myself I could do."
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "There are two kinds of help. A psychosexual therapist works on the tightening and on getting back to a sex life that feels safe, often at your own pace step by step. And trauma-focused therapy helps with the memories that come back. Which feels most important to you?",
    "dom": "tasks",
    "why": "Offers psychosexual and trauma-focused therapy and shares the decision"
   },
   {
    "who": "pt",
    "text": "Probably both. But the memories first."
   },
   {
    "who": "dr",
    "text": "Then I’ll refer you for trauma-focused talking therapy, and to psychosexual services. You don’t have to report anything to the police unless you want to — that’s your choice, now or in the future. I can also give you details of services that support people after sexual assault, to use whenever you’re ready.",
    "dom": "tasks",
    "why": "Respects her choice on reporting and signposts support"
   },
   {
    "who": "pt",
    "text": "I don’t want to go to the police. But the support sounds good."
   },
   {
    "who": "dr",
    "text": "That’s completely your decision. Would it help to have some information to share with your partner, if and when you want to?",
    "dom": "rto",
    "why": "Involves the relationship on her terms"
   },
   {
    "who": "pt",
    "text": "Maybe. I’ll think about it."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If your mood drops, if you ever have thoughts of harming yourself, or if anyone starts to hurt you, please contact us straight away, or call 999 in an emergency. And if you notice unusual discharge, sores or bleeding, let me know. Can you tell me what we’ve agreed?",
    "dom": "gs",
    "why": "Specific safety-net and teach-back"
   },
   {
    "who": "pt",
    "text": "Self-swabs, a referral for the memories and for the sex side, the support details, and no examination unless I choose."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll see you again in a few weeks, with the swab results, just to see how you’re doing. You’re in charge of the pace.",
    "dom": "gs",
    "why": "Defined follow-up with continuity"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Checked privacy; open question; let her disclose at her own pace; thanked her.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored the impact on her relationship, her stress and low mood, and her current safety.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I’ve never really told anyone” and “can you fix it?” and responded to both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (it’s because of what happened; she is “broken”), concern (it won’t improve, having to recount it), expectation (to be fixed).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "No examination today; offered self-taken swabs; examination later only if needed, with consent, a chaperone and control.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Vaginismus or trauma response vs infection, lichen sclerosus, dryness, endometriosis or pelvic infection; superficial vs deep pain.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for PTSD symptoms, suicidal thoughts and current abuse.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Explained the likely trauma-related tightening in plain words, with physical causes still to exclude.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Trauma-focused therapy and psychosexual referral; sexual-assault support services; police reporting left to her; shared decision on priorities.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Addressed mood, the relationship and possible physical contributors.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review in a few weeks with swab results; mood and safety safety-net; open door.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Leanne Forbes",
    "age": "33 years · female",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "None recorded",
    "recent": "No recent attendances.",
    "reason": "Booked video call: \"Personal problem.\""
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Receive the disclosure",
     "d": "Thank her, believe her, don’t ask for details. Tell her early there is no examination today."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Superficial vs deep pain, infection or skin symptoms, PTSD symptoms, mood and suicide risk, current safety."
    },
    {
     "t": "5–7",
     "h": "ICE",
     "d": "“I’m broken”, fear it won’t improve, fear of recounting the assault."
    },
    {
     "t": "7–10",
     "h": "Explain and plan",
     "d": "Trauma-related tightening, treatable; self-swabs; psychosexual and trauma-focused therapy; her choice on reporting."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Mood, self-harm, abuse, new physical symptoms. Teach-back and review."
    }
   ],
   "wordPics": {
    "fail": "Asks for details of the assault; says an examination is needed today; treats it as purely physical (lubricant, dilators) or purely psychological without any thought of physical causes; no safety or mood screen; pushes her to go to the police.",
    "pass": "Thanks and believes her; says any examination is her choice; screens for mood and safety; refers to psychosexual or psychological support; gives a safety-net.",
    "exc": "All of the above, plus: removes the fear of examination in the first minute; reframes the tightening as a protective response and gives hope; keeps physical causes in view with self-taken swabs; screens for PTSD symptoms; offers both trauma-focused and psychosexual help and lets her choose the order; is clear the police decision is hers; uses teach-back."
   },
   "avoid": [
    {
     "dont": "\"Can you tell me exactly what happened?\"",
     "instead": "\"You don’t need to tell me any more than you want to.\"",
     "why": "Pressing for detail can retraumatise her and is not needed for the plan."
    },
    {
     "dont": "\"I’ll need to examine you to see what’s going on.\"",
     "instead": "\"There’s no examination today. If one is ever useful, it will be your choice.\"",
     "why": "A pressured intimate examination after assault can be deeply harmful."
    },
    {
     "dont": "\"You really should report this to the police.\"",
     "instead": "\"Reporting is entirely your choice, now or later, and there’s support either way.\"",
     "why": "For an adult, taking control away repeats the harm; the decision is hers."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Relationship",
     "t": "Sexual difficulty strains relationships. Offer information she can share with her partner, on her terms."
    },
    {
     "h": "Support services",
     "t": "Rape crisis services and SARCs support people after recent and past assaults, including emotional support without a police report."
    }
   ],
   "legal": [
    {
     "h": "Reporting",
     "t": "An adult decides whether to report a sexual offence to the police. Confidentiality can be broken only where there is a risk of serious harm to others, such as children (GMC Confidentiality, 2017)."
    }
   ],
   "professional": [
    {
     "h": "Intimate examination",
     "t": "GMC Intimate examinations and chaperones (2024): explain, offer a chaperone, get consent, and stop when asked. Trauma-informed practice means offering choice and control."
    },
    {
     "h": "Domestic abuse",
     "t": "NICE PH50 (2014): ask about abuse in private; refer to specialist services if there is current abuse."
    },
    {
     "h": "Continuity",
     "t": "Offer to see the same clinician again so she does not have to repeat her story."
    }
   ],
   "community": [
    {
     "h": "Therapy routes",
     "t": "NHS Talking Therapies for trauma-focused therapy (self-referral in England); psychosexual services via sexual health or gynaecology."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Suicidal thoughts or self-harm — assess risk the same day",
     "Current abuse or coercion — risk assessment and specialist referral",
     "Postcoital or intermenstrual bleeding, or deep pain with fever — assess promptly",
     "Children in contact with the perpetrator — consider safeguarding"
    ],
    "psychosocial": [
     "Impact on her relationship and self-image",
     "Trauma symptoms: flashbacks, avoidance, hypervigilance",
     "Support network and who knows"
    ],
    "ice": [
     "Idea: “It’s because of what happened — I’m broken”",
     "Concern: it won’t improve; having to tell the story; examination",
     "Expectation: to be fixed"
    ]
   },
   "diagnosis": "“The tightening sounds like your body protecting itself after a frightening experience. It’s a recognised response and it’s treatable. We’ll also make sure nothing physical is adding to the pain.”",
   "diagnosisLay": "“It’s like a flinch. Your body learned to guard itself, and it does it automatically. With the right help, it can learn that it’s safe again.”",
   "management": {
    "reflectIce": "“You said you feel broken. You aren’t. What’s happening is your body protecting you, and that can change.”",
    "psychosocial": "Let her choose the order of help, include her partner only if she wants, and keep the door open.",
    "sharedPlan": [
     "Trauma-focused psychological therapy (NICE NG116)",
     "Psychosexual therapy referral",
     "Self-taken swabs now; examination only if needed and when she chooses"
    ],
    "safetyNet": [
     "Low mood, self-harm thoughts or current abuse — contact straight away, 999 in an emergency",
     "Review in a few weeks with results; same clinician if possible"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Dyspareunia",
    "s": "Visual algorithm · superficial vs deep pain",
    "href": "algorithms/dyspareunia.html"
   },
   {
    "ic": "📋",
    "t": "PTSD",
    "s": "Case walkthrough · NICE NG116",
    "href": "../cases/ptsd.html"
   },
   {
    "ic": "💠",
    "t": "PTSD protocol",
    "s": "Trauma-focused therapy",
    "href": "management/ptsd.html"
   },
   {
    "ic": "💠",
    "t": "Vulvar disorders",
    "s": "Protocol · lichen sclerosus and more",
    "href": "management/vulvar-disorders.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is about how you receive a disclosure. Candidates fail by asking too much, by pushing an examination, or by treating the pain as purely physical.",
   "items": [
    {
     "dom": "rto",
     "fail": "Asking for details of the assault.",
     "why": "It is not needed for the plan and can retraumatise her. Examiners look for belief and restraint.",
     "fix": "“Thank you for telling me. You don’t need to say any more than you want to.”"
    },
    {
     "dom": "tasks",
     "fail": "Saying an examination is needed today.",
     "why": "A pressured intimate examination after assault is harmful. GMC guidance requires consent and the right to stop.",
     "fix": "Say early that there is no examination today and that any future examination is her choice."
    },
    {
     "dom": "tasks",
     "fail": "Offering lubricant or dilators and nothing for the trauma.",
     "why": "It ignores the likely cause and the hidden agenda.",
     "fix": "Name the trauma link and offer trauma-focused and psychosexual help."
    },
    {
     "dom": "tasks",
     "fail": "Assuming it is all psychological and not considering infection or skin conditions.",
     "why": "Treatable physical causes can add to the pain.",
     "fix": "Ask about itch, discharge, bleeding and deep pain, and offer self-taken swabs."
    },
    {
     "dom": "tasks",
     "fail": "No question about current safety, mood or suicide risk.",
     "why": "NICE PH50 advises asking about abuse; low mood is common after trauma.",
     "fix": "Ask routinely and gently, and act on any risk."
    },
    {
     "dom": "gs",
     "fail": "Telling her she should report to the police.",
     "why": "The decision is hers as an adult; pressure takes away control.",
     "fix": "“Reporting is entirely your choice, now or later.”"
    }
   ]
  }
 },
 "sex-selective-termination": {
  "stem": {
   "name": "Anjali Sharma",
   "age": "31-year-old woman",
   "pmh": [
    "Two daughters",
    "Currently pregnant (gestation not recorded)"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded",
   "recent": "Currently pregnant. Recently told the fetus is female.",
   "reason": "Video consultation: “I need to discuss ending my pregnancy.”"
  },
  "knowledge": {
   "guideline": "Abortion Act 1967 · DHSC Guidance in relation to requirements of the Abortion Act 1967 (2014) · Crime and Policing Act 2026 s241 · NICE PH50 (domestic violence and abuse, 2014) and QS116 (2016) · Domestic Abuse Act 2021 · Serious Crime Act 2015 s76 · Working Together to Safeguard Children 2026",
   "summary": "Fetal sex alone is not a lawful ground for abortion, and you must say so honestly. But the clinical priority is the woman: “consequences” and “no choice” mean possible coercion and domestic abuse. Put her safety, her own wishes and her children’s safety first.",
   "points": [
    {
     "h": "The legal line",
     "t": "The Abortion Act has no fetal-sex ground. Two doctors must agree in good faith that a lawful ground is met, most often risk to the woman’s physical or mental health [1]. DHSC guidance states that abortion on the grounds of sex alone is illegal [2]. Some serious sex-linked conditions can meet the separate fetal-anomaly ground, which is a different situation."
    },
    {
     "h": "She is not the offender",
     "t": "Since 29 April 2026, a woman acting in relation to her own pregnancy commits no offence under the abortion laws in England and Wales [3]. The law limits what doctors may provide; it does not make her a wrongdoer. Say so."
    },
    {
     "h": "Coercion is the clinical issue",
     "t": "Pressure to end a pregnancy is reproductive coercion, a form of domestic abuse. Controlling or coercive behaviour in an intimate or family relationship is a crime [7], and the statutory definition of domestic abuse covers abuse by family members, including in-laws [6]."
    },
    {
     "h": "Ask safely",
     "t": "Ask about abuse only when she is alone and can talk freely; on video, check who is in the room and whether this is a safe time [4]. Never use a family member as an interpreter. Use a structured risk check (for example the DASH checklist) and refer to MARAC where risk is high."
    },
    {
     "h": "Children are part of the picture",
     "t": "Children who see, hear or experience the effects of domestic abuse are victims in their own right [6]. Consider her daughters and the unborn baby, and discuss with the practice safeguarding lead about a referral to children’s social care [8]."
    },
    {
     "h": "Her own wishes and mental health",
     "t": "Separate what she wants from what others demand. Assess mood, anxiety, sleep, self-harm and suicidal thoughts. If, free of pressure, she still wants a termination, she can be assessed by an abortion service, whose doctors decide honestly whether a lawful ground applies. Do not obstruct, and do not coach a “workaround”."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and safety check",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Sharma, I’m Dr Lee. Before we start — are you on your own right now, and is it a safe time to talk?",
    "dom": "tasks",
    "why": "Establishes privacy before any sensitive discussion on a video call"
   },
   {
    "who": "pt",
    "text": "Yes. I’m alone."
   },
   {
    "who": "dr",
    "text": "Thank you. If anyone comes in, just say “the pharmacy” and I’ll change the subject. Please tell me what’s going on.",
    "dom": "gs",
    "why": "Agrees a safe word, which protects her if the call is interrupted"
   },
   {
    "who": "pt",
    "text": "We found out it’s a girl. We already have two daughters. My husband’s family expect a son — they’ve made it very clear. There would be consequences. I think I have to end this pregnancy. Please, can you arrange it? I don’t have a choice."
   },
   {
    "who": "dr",
    "text": "Thank you for trusting me with this. I can hear how much pressure you’re under. Before we talk about the pregnancy, I want to understand what’s happening to you. You said there would be consequences — what are you afraid would happen?",
    "dom": "rto",
    "why": "Responds to the key cue — “consequences” — before the logistics"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "pt",
    "text": "(Pause.) I don’t want to say. It would be very bad for me. I just know I have no choice."
   },
   {
    "who": "dr",
    "text": "That’s okay — you don’t have to tell me everything today. Can I ask some questions I ask anyone who feels they have no choice? Has anyone hurt you, threatened you, or frightened you? Does anyone control where you go, who you see, your phone or your money?",
    "dom": "tasks",
    "why": "Screens physical abuse, threats and coercive control without demanding disclosure"
   },
   {
    "who": "pt",
    "text": "I can’t talk about it properly. It’s complicated."
   },
   {
    "who": "dr",
    "text": "I understand. I’m going to take what you’ve said seriously, even without details. Are you safe to go home today? And are your daughters safe?",
    "dom": "tasks",
    "why": "Assesses immediate risk to her and to the children"
   },
   {
    "who": "pt",
    "text": "Today, yes. The girls are fine."
   },
   {
    "who": "dr",
    "text": "Thank you. And how are you in yourself — sleeping, eating, low in mood? Have you had any thoughts of harming yourself, or that life isn’t worth living?",
    "dom": "tasks",
    "why": "Screens mental health and suicide risk, which rise in coercive situations and pregnancy"
   },
   {
    "who": "pt",
    "text": "I’m not sleeping. I cry a lot. But no, I wouldn’t hurt myself. I have my girls."
   },
   {
    "who": "dr",
    "text": "Do you know how many weeks pregnant you are?",
    "dom": "tasks",
    "why": "Gestation shapes every option and its timing"
   },
   {
    "who": "pt",
    "text": "I’d have to check the scan letter."
   },
   {
    "phase": "Her wishes",
    "clock": "5–7 min",
    "who": "dr",
    "text": "Can I ask something only you can answer? If the family’s wishes were taken out of it completely, and you felt safe — what would you want?",
    "dom": "rto",
    "why": "Separates her own wishes from the family’s demands"
   },
   {
    "who": "pt",
    "text": "(Quietly.) If it was only me… I think I would keep her."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That matters a lot, and your wishes deserve protecting.",
    "dom": "rto",
    "why": "Validates her own voice without pressuring her either way"
   },
   {
    "phase": "The legal position",
    "clock": "7–8 min",
    "who": "dr",
    "text": "I need to be honest with you, gently. The law doesn’t allow a termination because of a baby’s sex, so I can’t arrange one for that reason. Please hear this part too: you are not in trouble and you haven’t done anything wrong. The pressure on you is the problem, not you.",
    "dom": "tasks",
    "why": "States the legal boundary honestly while placing no blame on her"
   },
   {
    "who": "pt",
    "text": "Then what do I do? They won’t accept it."
   },
   {
    "who": "dr",
    "text": "That’s what I want to help with. You won’t be left alone with this. Whatever you decide in the end, I’ll make sure you get proper care — and my first job is your safety.",
    "dom": "rto",
    "why": "Offers a way forward rather than a closed door"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "What you’re describing — being told what to do with your pregnancy, and being afraid of what happens if you don’t — is a form of abuse, and there are people whose whole job is helping women in this situation. Would you let me put you in touch with a specialist domestic-abuse worker? They’re confidential and they understand family and community pressure.",
    "dom": "tasks",
    "why": "Names reproductive coercion as abuse and offers IDVA or specialist support with consent"
   },
   {
    "who": "pt",
    "text": "If my husband’s family found out I’d spoken to someone…"
   },
   {
    "who": "dr",
    "text": "They won’t hear it from us. I will never contact your family about this or discuss it in front of them. What’s the safest way to reach you — a number only you use, a time of day?",
    "dom": "gs",
    "why": "Safe contact arrangements; no contact or mediation with the family"
   },
   {
    "who": "pt",
    "text": "Mornings, on my mobile. Don’t leave messages."
   },
   {
    "who": "dr",
    "text": "Understood. I also need to be open with you: because your daughters live in the home, I’ll talk to our practice lead for keeping children safe about the best way to support you all. I’ll tell you what I’m doing before anything happens, and I’ll try to do it with you, not behind your back.",
    "dom": "tasks",
    "why": "Transparent about the children’s safeguarding duty while keeping her trust"
   },
   {
    "who": "pt",
    "text": "You won’t take the girls away?"
   },
   {
    "who": "dr",
    "text": "The aim is support for you and them, not punishment. You’re protecting them by talking to me. I’d also like to see you again very soon, and link you with your midwife so there’s another safe person on your side.",
    "dom": "rto",
    "why": "Addresses the fear of children’s services directly and plans continuity"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you are ever in immediate danger, call 999. If you can’t speak, stay on the line and press 55 when asked. The National Domestic Abuse Helpline is free and open all the time. And if things get worse, or your mood drops, contact me the same day.",
    "dom": "gs",
    "why": "Emergency advice including the Silent Solution, helpline and mental-health safety-net"
   },
   {
    "who": "pt",
    "text": "Okay. Thank you. I didn’t think anyone would listen."
   },
   {
    "who": "dr",
    "text": "Can you tell me what we’ve agreed, so I know it’s clear?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "You’ll call me in the morning, a support worker will contact me, I can ring the helpline or 999. And you’ll see me again soon."
   },
   {
    "who": "dr",
    "text": "Exactly. You were brave to say what you want. Is there anything else you need from me today?",
    "dom": "rto",
    "why": "Affirms her and shares the floor"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Confirms she is alone and safe to talk first; open question; hears the request without interrupting.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Family pressure, control of movement, money or phone, home safety, her daughters, cultural context without stereotyping.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up “there would be consequences” and “I don’t have a choice” and explores them before the logistics.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: she must end it because it is a girl; concern: what will happen to her (and the girls); expectation: that the doctor will arrange it. Her own wish, if free, is explored separately.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Establishes gestation; structured risk assessment (DASH); mental-health and suicide screen; face-to-face follow-up.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Reproductive coercion, domestic or honour-based abuse, perinatal depression or anxiety.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Immediate danger to her or the children; suicidal thoughts; escalation risk requiring MARAC or police.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "A request driven by coercion, with her own wishes suppressed; fetal sex alone is not a lawful ground.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Explains the legal position without blame; specialist domestic-abuse or IDVA referral with consent; safe contact route; no contact with family.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Mental health support; midwife link; safeguarding discussion about the daughters and unborn baby, done transparently.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 and the Silent Solution, the national helpline, early review, and same-day contact if risk or mood worsens.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Professional & ethical dilemmas",
    "Ethnicity, culture & diversity",
    "Gender, reproductive & sexual health",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Anjali Sharma",
    "age": "31 years · female",
    "pmh": [
     "Two daughters",
     "Currently pregnant"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "⚠ Recent scan: fetus reported as female. Gestation not documented in the record.",
    "reason": "“I need to talk about ending my pregnancy.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Privacy first",
     "d": "Is she alone? Is it safe to talk? Agree a safe word. Then an open question."
    },
    {
     "t": "1–5",
     "h": "Consequences and safety",
     "d": "What does she fear? Abuse and control questions; immediate safety for her and the girls; mood and suicide; gestation."
    },
    {
     "t": "5–8",
     "h": "Her wishes, then the law",
     "d": "What would she want if safe? Then the legal line, gently, with no blame."
    },
    {
     "t": "8–11",
     "h": "Support and safeguarding",
     "d": "Specialist domestic-abuse worker or IDVA; safe contact; no family contact; transparent children’s safeguarding discussion; midwife link."
    },
    {
     "t": "11–12",
     "h": "Safety-net and close",
     "d": "999 and 55, national helpline, early review, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Agrees to refer “for termination” without comment; or states the law coldly and ends the call; never asks what “consequences” means; asks about abuse without checking she is alone; suggests involving the husband or family.",
    "pass": "Checks privacy; explores the consequences; screens for abuse and immediate risk; explains the legal position kindly; offers domestic-abuse support and a safe contact route; considers the children.",
    "exc": "All of the above, plus: a safe word; separates her own wish from the family’s; explains she is not the wrongdoer; screens mood and suicide; handles the children’s safeguarding openly so she stays engaged; gives 999 and 55 and the helpline; books early follow-up and links the midwife."
   },
   "avoid": [
    {
     "dont": "“Sex selection is illegal, so I can’t help you.”",
     "instead": "“The law doesn’t allow it for that reason — but you’re not in trouble, and I’m not leaving you on your own with this.”",
     "why": "Cold legalism abandons a woman who may be in danger."
    },
    {
     "dont": "“Could your husband come in so we can talk it through together?”",
     "instead": "“I will never discuss this with your family or in front of them.”",
     "why": "Involving the family can escalate risk; honour-based abuse guidance warns against mediation."
    },
    {
     "dont": "“In your culture this must be very common.”",
     "instead": "“No one should be pushed into a decision like this, whatever their background.”",
     "why": "Cultural sensitivity never means accepting coercion or stereotyping her."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family and community pressure",
     "t": "Son preference, in-law expectations and fear of rejection or violence can leave a woman feeling she has no choice. Explore without stereotyping; culture never justifies abuse."
    },
    {
     "h": "Practical dependence",
     "t": "Control of money, immigration worries or isolation can trap women. Specialist services can advise on housing, finances and legal options."
    }
   ],
   "legal": [
    {
     "h": "Abortion law",
     "t": "Abortion Act 1967: no fetal-sex ground; DHSC 2014 guidance states abortion on the grounds of sex alone is illegal. Crime and Policing Act 2026 s241: a woman commits no offence in relation to her own pregnancy in England and Wales."
    },
    {
     "h": "Domestic abuse law",
     "t": "Domestic Abuse Act 2021 covers abuse by partners and family members, including coercive and economic abuse, and treats affected children as victims. Controlling or coercive behaviour is an offence (Serious Crime Act 2015 s76)."
    },
    {
     "h": "Sharing information",
     "t": "Adult confidentiality can be breached without consent where there is a risk of serious harm or a high-risk MARAC referral (GMC Confidentiality, 2017). Children’s safeguarding follows Working Together to Safeguard Children 2026."
    }
   ],
   "professional": [
    {
     "h": "Honesty without blame",
     "t": "GMC Good medical practice requires honesty about what you can and cannot do. Tell her the legal position clearly, and do not suggest ways to disguise the reason for a request."
    },
    {
     "h": "Interpreters and privacy",
     "t": "Use a professional interpreter if one is needed, never a relative. Record the discussion in a way that will not put her at risk if others see her records or app."
    }
   ],
   "community": [
    {
     "h": "Specialist support",
     "t": "IDVA services, the National Domestic Abuse Helpline, the Karma Nirvana honour-based abuse helpline, and the Forced Marriage Unit for advice. MARAC for high-risk cases."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Threats to kill, strangulation, weapons, escalating violence, or abuse in pregnancy — high risk; consider same-day MARAC or police",
     "Risk to her daughters or the unborn baby",
     "Suicidal thoughts, self-harm or severe perinatal low mood"
    ],
    "psychosocial": [
     "Who is applying the pressure, and what she fears will happen",
     "Control over money, phone, movement and contacts; isolation",
     "Her own wishes, support network and safe places"
    ],
    "ice": [
     "Idea: “It’s a girl, so I have to end it — I have no choice”",
     "Concern: the “consequences” from her husband’s family, for her and possibly the girls",
     "Expectation: that the doctor will arrange a termination"
    ]
   },
   "diagnosis": "“You’re being put under serious pressure to end a pregnancy you might want to keep. That kind of pressure is a form of abuse, and the most important thing today is your safety — and your own wishes.”",
   "diagnosisLay": "“No one else gets to decide what happens to your body or your pregnancy. The law doesn’t allow a termination just because of a baby’s sex — and it also protects you from being forced into decisions.”",
   "management": {
    "reflectIce": "“You said there would be consequences and you have no choice. I’m taking that very seriously. My first job is to help you be safe and to hear what you want.”",
    "psychosocial": "Safe contact only; never involve the family; professional interpreter if needed; specialist domestic-abuse support she chooses; transparent safeguarding for the children.",
    "sharedPlan": [
     "Explain the legal position with no blame; do not arrange a sex-selective termination",
     "Offer specialist domestic-abuse or IDVA referral; DASH risk check; MARAC if high risk",
     "Discuss the daughters and unborn baby with the safeguarding lead; midwife link; mental-health support"
    ],
    "safetyNet": [
     "999 in danger; 55 on a silent 999 call; National Domestic Abuse Helpline",
     "Early review; same-day contact if risk or mood worsens"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Safeguarding",
    "s": "Case walkthrough · children and domestic abuse",
    "href": "../cases/safeguarding.html"
   },
   {
    "ic": "📋",
    "t": "Perinatal mental health",
    "s": "Case walkthrough · mood in pregnancy",
    "href": "../cases/perinatal-mental-health.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests two things at once: honest knowledge of abortion law and the ability to see a woman at risk. Candidates fail by choosing one — cold law or uncritical collusion — and missing the woman in the middle.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Agreeing to “refer for termination” without addressing the reason given.",
     "why": "Abortion on the grounds of fetal sex alone is not lawful (Abortion Act 1967; DHSC 2014). Colluding is a serious probity failure.",
     "fix": "State the legal position gently and clearly, then move to her safety."
    },
    {
     "dom": "rto",
     "fail": "Stating the law and closing the consultation.",
     "why": "“Did not respond to the patient’s cues.” “Consequences” and “no choice” are disclosures of possible abuse.",
     "fix": "Ask what she fears would happen, and whether she and the girls are safe."
    },
    {
     "dom": "tasks",
     "fail": "Asking about abuse without checking she is alone on the video call.",
     "why": "Asking in front of a partner or relative can put her in danger (NICE PH50).",
     "fix": "First question: “Are you on your own, and is it safe to talk?” Agree a safe word."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting the daughters and the unborn baby.",
     "why": "Children affected by domestic abuse are victims (Domestic Abuse Act 2021); Working Together 2026 applies.",
     "fix": "Tell her openly you will discuss the children with the safeguarding lead, and why."
    },
    {
     "dom": "gs",
     "fail": "Suggesting a family meeting or a call to her husband to “talk it through”.",
     "why": "Mediation with the family can escalate honour-based abuse.",
     "fix": "Never contact the family. Agree a safe number and time instead."
    },
    {
     "dom": "gs",
     "fail": "Vague close: “Come back if you need anything.”",
     "why": "Non-specific safety-netting in a high-risk situation.",
     "fix": "Give 999 and the 55 silent option, the helpline, a specialist referral and a booked early review."
    }
   ]
  }
 },
 "teen-abortion-gillick": {
  "stem": {
   "name": "Erin Doyle",
   "age": "16-year-old young woman",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded",
   "recent": "Positive home pregnancy test. Approximately 7 weeks pregnant by her own dates. Attending alone.",
   "reason": "Video consultation requested: “I need help with a pregnancy and I don’t want my mum told.”"
  },
  "knowledge": {
   "guideline": "Abortion Act 1967 · NICE NG140 (abortion care, 2019) and QS199 (2021) · Family Law Reform Act 1969 s8 · GMC 0–18 years (2007, updated 2018) · Working Together to Safeguard Children 2026 · BASHH and Brook Spotting the Signs proforma (2014)",
   "summary": "At 16 she can consent to her own treatment, and her confidentiality is hers. Your job is warm, non-judgemental care, a sensitive safeguarding check, and a prompt referral, because abortion is time-critical and simpler when early.",
   "points": [
    {
     "h": "Consent at 16",
     "t": "Young people of 16 and 17 can consent to their own medical treatment (Family Law Reform Act 1969 s8), and capacity is assessed as for adults (Mental Capacity Act 2005). No parental consent is needed. Gillick competence is the test for under-16s; the Fraser guidelines are the narrower test for contraception advice [4]."
    },
    {
     "h": "Confidentiality and its limit",
     "t": "She is entitled to confidentiality. Encourage, but do not require, involving a parent or trusted adult. Share information without consent only where there is a risk of serious harm, telling her first unless that would increase the risk [4]."
    },
    {
     "h": "Safeguarding is part of routine care",
     "t": "Anyone under 18 is a child for safeguarding purposes [5]. Ask about the partner’s age and power, consent, pressure, alcohol or drugs, gifts and secrecy. Abortion and sexual-health services use a structured CSE screen such as Spotting the Signs for all under-18s [6]."
    },
    {
     "h": "The legal ground and the process",
     "t": "Two registered medical practitioners must agree, in good faith, that a lawful ground is met — most commonly that continuing the pregnancy (under 24 weeks) carries greater risk to her physical or mental health than ending it [1]. The GP does not need to sign the form to refer."
    },
    {
     "h": "Access without delay",
     "t": "Women can self-refer to abortion services [2]. Providers should offer the abortion within 1 week of assessment [3]. Early medical abortion, with both medicines taken at home, is available in England and Wales up to 9 weeks 6 days, so at about 7 weeks she has every option if seen promptly."
    },
    {
     "h": "Holistic care",
     "t": "Discuss contraception, including long-acting methods that can be started at the time of the abortion [2], and offer STI testing. Give non-directive information on all options — continuing, adoption, abortion — without steering."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Erin, I’m Dr Lee. Thank you for getting in touch — it takes courage. Before anything else: no lecture, I promise. Tell me what’s going on.",
    "dom": "rto",
    "why": "Answers her fear of judgement in the first sentence"
   },
   {
    "who": "pt",
    "text": "I’m pregnant. I did a test. I’ve thought about it loads and I want an abortion. Please don’t tell my mum. Am I too young to decide?"
   },
   {
    "who": "dr",
    "text": "Let me answer that straight away: no, you’re not too young. At 16 the law says you can make decisions about your own treatment, as long as you understand them. And I won’t tell your mum without your say-so.",
    "dom": "tasks",
    "why": "Affirms her legal right to consent at 16 and states confidentiality clearly"
   },
   {
    "who": "pt",
    "text": "Really? I thought you’d have to ring her."
   },
   {
    "who": "dr",
    "text": "No. The only time I’d ever share something is if I was worried you were in serious danger — and even then I’d talk to you first. Can I ask you some questions so I can help properly, and then we’ll make a plan together?",
    "dom": "gs",
    "why": "Explains the limit of confidentiality honestly and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When was the first day of your last period, roughly? And have you had any pain or bleeding?",
    "dom": "tasks",
    "why": "Dates the pregnancy and screens for ectopic symptoms"
   },
   {
    "who": "pt",
    "text": "About seven weeks ago, I think. No pain or bleeding."
   },
   {
    "who": "dr",
    "text": "Thanks. You’ve said you’ve thought about it a lot. How sure do you feel, and has anyone been pushing you one way or the other?",
    "dom": "tasks",
    "why": "Checks certainty and screens for pressure over the decision"
   },
   {
    "who": "pt",
    "text": "I’m sure. It’s my decision. Nobody’s making me."
   },
   {
    "who": "dr",
    "text": "That’s clear. I ask everyone under 18 a few questions about safety — it’s not about your decision. Can you tell me a bit about the person you got pregnant with? How old are they, and was everything that happened something you wanted?",
    "dom": "tasks",
    "why": "Normalised safeguarding screen: partner’s age, consent"
   },
   {
    "who": "pt",
    "text": "He’s around my age. Yeah, it was what I wanted. It’s not like that."
   },
   {
    "who": "dr",
    "text": "Thank you. And has anyone ever given you alcohol, drugs, money or gifts in connection with sex, or asked you to keep things secret? Do you feel safe at home?",
    "dom": "tasks",
    "why": "Completes the CSE indicators and checks home safety without assuming"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. Home’s fine. Mum would just go mad."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "It sounds like the thought of your mum finding out is weighing on you. What worries you most about today?",
    "dom": "rto",
    "why": "Follows the cue about her mother and elicits concerns"
   },
   {
    "who": "pt",
    "text": "That someone would say no, or make me feel like a bad person. And her finding out."
   },
   {
    "who": "dr",
    "text": "Nobody here is going to make you feel like that. You’ve come for help, which is the right thing. Some people find it helps to have one trusted adult alongside them — your mum, or someone else. That’s entirely your choice. Is there anyone like that?",
    "dom": "rto",
    "why": "Validates, and encourages without forcing a supportive adult"
   },
   {
    "who": "pt",
    "text": "Maybe. I’ll think about it."
   },
   {
    "phase": "Explanation and options",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’ll support what you’ve decided. So you have the full picture, the options are continuing the pregnancy, adoption, or an abortion — and if you want to talk through any of them, now or later, I’m happy to. No pressure either way.",
    "dom": "tasks",
    "why": "Non-directive options information without steering"
   },
   {
    "who": "pt",
    "text": "No, I want the abortion."
   },
   {
    "who": "dr",
    "text": "Then here’s how it works. The abortion service will see you, usually by phone or video first. At your stage there are two choices: tablets, which most people at seven weeks can take at home, or a short procedure. They’ll go through both. The earlier it’s done, the simpler it is.",
    "dom": "tasks",
    "why": "Explains medical and surgical options and why timing matters"
   },
   {
    "who": "pt",
    "text": "Will they tell my mum?"
   },
   {
    "who": "dr",
    "text": "No. They also keep it confidential. Like me, they’ll ask some safety questions because you’re under 18 — that’s routine. And if you take the tablets, it’s best to have someone with you at home that day — someone you choose.",
    "dom": "rto",
    "why": "Answers the repeated fear directly and prepares her for the service’s own safeguarding check"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’d like to refer you today, or I can give you the number to book yourself — whichever you prefer. They aim to offer the abortion within a week of seeing you.",
    "dom": "tasks",
    "why": "Prompt referral, with self-referral as an option"
   },
   {
    "who": "pt",
    "text": "Can you do it? I don’t want to mess it up."
   },
   {
    "who": "dr",
    "text": "Of course. I’ll do it today. What’s the safest way for them and me to contact you — your own mobile? Is it okay to leave a message?",
    "dom": "gs",
    "why": "Arranges a safe, confidential contact route"
   },
   {
    "who": "pt",
    "text": "My mobile. Text is best."
   },
   {
    "who": "dr",
    "text": "Two more things, when you’re ready. Contraception — the service can start a long-acting method, like the implant or a coil, at the same time, so you’re in control afterwards. And a free, confidential check for infections. Would you like either?",
    "dom": "tasks",
    "why": "Contraception, including LARC at the time of abortion, and STI testing"
   },
   {
    "who": "pt",
    "text": "Yeah, the implant maybe. And the test is fine."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If before your appointment you get strong pain on one side of your tummy, shoulder-tip pain, heavy bleeding or you feel faint, that’s an emergency — call 999 or go to A&E. If the service hasn’t contacted you within a few days, ring me.",
    "dom": "gs",
    "why": "Ectopic red flags named plainly, with a clear fallback if the referral stalls"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "Just so I know I’ve explained it well, what are you going to expect next?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "The clinic texts me, they talk to me about tablets or the procedure, they ask some safety stuff, and I can get the implant. And it’s private."
   },
   {
    "who": "dr",
    "text": "Exactly. You’ve handled this really sensibly. And if anything changes — how you feel, or your safety — come straight back. Anything else you wanted to ask?",
    "dom": "rto",
    "why": "Affirms her, keeps the door open and shares the floor"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Warm open question; removes the fear of a lecture; lets her state her decision in her own words.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Home situation, relationship with her mother, a possible trusted adult, school, and any pressure from anyone.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up “am I too young?”, “don’t tell my mum” and “it’s not like that”, and responds to each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: she may not be allowed to decide; concern: judgement, refusal and her mother finding out; expectation: confidential help to access abortion.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Gestation by dates, pain or bleeding (ectopic screen); STI testing offered; the service arranges any scan and further assessment.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Considers pressure or coercion over the decision, CSE indicators and home safety, as well as certainty of choice.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Ectopic pregnancy symptoms asked and safety-netted; exploitation or abuse screened and excluded as far as possible.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Early pregnancy of about 7 weeks in a competent 16-year-old with a clear, uncoerced request for abortion; no safeguarding concern identified today.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Non-directive options; same-day referral or self-referral; medical and surgical routes explained; confidentiality respected; trusted adult encouraged, not forced.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Contraception, including LARC at the time of the abortion; STI testing; emotional support.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Ectopic red flags; call back if the service does not make contact; safe contact route agreed; open door if her safety changes.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Children & young people",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Erin Doyle",
    "age": "16 years · female",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "⚠ Self-booked video appointment. Positive home pregnancy test; about 7 weeks by dates. Attending alone.",
    "reason": "“I’m pregnant and I want a termination. Please don’t tell my mum.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Safe tone",
     "d": "No lecture. Answer “am I too young?” and confidentiality in the first minute."
    },
    {
     "t": "1–5",
     "h": "Dates, certainty, safety",
     "d": "Gestation, pain or bleeding, certainty of decision, pressure from anyone, partner’s age, consent, CSE indicators, home safety."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Fear of judgement, refusal and her mother. Offer (never force) a trusted adult."
    },
    {
     "t": "6–10",
     "h": "Options and referral",
     "d": "Non-directive options. Medical at home or surgical. Refer today or self-refer; contraception including LARC; STI testing."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Ectopic red flags, what to do if the service doesn’t call, safe contact route, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Moralises or steers; says she needs a parent’s consent or must tell her mum; skips the safeguarding questions or turns them into an interrogation; delays referral “to think about it”; no ectopic safety-net.",
    "pass": "Non-judgemental; confirms she can consent at 16 and that the consultation is confidential; asks about partner’s age and consent; gives options and refers promptly; mentions contraception and STI testing; safety-nets.",
    "exc": "All of the above, plus: safeguarding questions framed as routine for every under-18; explains confidentiality’s limit honestly; agrees a safe contact route; prepares her for the service’s own safety check; offers LARC at the time of abortion; checks understanding with teach-back."
   },
   "avoid": [
    {
     "dont": "“Are you sure? Have you really thought about what this means?”",
     "instead": "“You’ve clearly thought about this. Is there anything about the options you’d like to talk through — no pressure either way?”",
     "why": "Repeated questioning of a clear decision reads as judgement and steering."
    },
    {
     "dont": "“We really ought to let your mum know.”",
     "instead": "“Some people find it helps to have a trusted adult with them. That’s your choice.”",
     "why": "At 16 she can consent and has a right to confidentiality; encourage, never pressure."
    },
    {
     "dont": "“I have to ask these questions because you might be being abused.”",
     "instead": "“I ask everyone under 18 a few safety questions — it’s not about your decision.”",
     "why": "Routine framing keeps her engaged and makes honest answers more likely."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family and support",
     "t": "Fear of a parent’s reaction is common. Explore who could support her (a relative, friend or school nurse) and practical needs such as someone at home on the day of a medical abortion."
    },
    {
     "h": "School and privacy",
     "t": "Appointments can be arranged around school. Agree a safe way to contact her so that letters or calls do not reveal the pregnancy at home."
    }
   ],
   "legal": [
    {
     "h": "Consent at 16 and 17",
     "t": "Family Law Reform Act 1969 s8 lets a 16-year-old consent to treatment; the Mental Capacity Act 2005 applies from 16. Gillick competence (1985) is the test for under-16s."
    },
    {
     "h": "Abortion law",
     "t": "Abortion Act 1967: two doctors must agree in good faith that a lawful ground is met. Since the Crime and Policing Act 2026 (s241, in force 29 April 2026), a woman acting in relation to her own pregnancy commits no offence under the abortion laws in England and Wales."
    },
    {
     "h": "Safeguarding threshold",
     "t": "Under 18 is a child (Working Together to Safeguard Children 2026). Share information if there are signs of abuse or exploitation, such as a large age or power gap, coercion, or gifts, drugs or alcohol linked to sex (GMC 0–18 years)."
    }
   ],
   "professional": [
    {
     "h": "Personal beliefs",
     "t": "A doctor with a conscientious objection must not express disapproval or obstruct access, must tell her she can see another doctor, and must make sure she can get care without delay (GMC Personal beliefs and medical practice). Referral is not participation in the abortion."
    },
    {
     "h": "Documentation",
     "t": "Record competence, her wishes about confidentiality, the safeguarding questions and answers, the referral and the safety-net."
    }
   ],
   "community": [
    {
     "h": "Services",
     "t": "NHS-funded abortion providers accept self-referral by phone or online; young people’s sexual-health services (for example Brook) offer contraception, STI testing and counselling."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Unilateral abdominal pain, shoulder-tip pain, bleeding or fainting — possible ectopic pregnancy, same-day assessment",
     "Partner much older or in a position of trust, coercion, gifts, drugs or alcohol linked to sex, secrecy — safeguarding concern",
     "Pressure from anyone to continue or end the pregnancy"
    ],
    "psychosocial": [
     "Home situation and her relationship with her mother",
     "Who could support her; school; practical arrangements for the day",
     "Emotional state and certainty of decision"
    ],
    "ice": [
     "Idea: “Am I even allowed to decide this at 16?”",
     "Concern: being judged, being refused, and her mum finding out",
     "Expectation: confidential, no-lecture help to get an abortion"
    ]
   },
   "diagnosis": "“You’re about seven weeks pregnant, you’ve made a clear decision, and you’re old enough to make it. My job is to get you seen quickly and safely, and to keep it confidential.”",
   "diagnosisLay": "“At 16 the law treats you like an adult for decisions about your own treatment. You don’t need anyone’s permission — you just need to understand what you’re agreeing to, and you clearly do.”",
   "management": {
    "reflectIce": "“You were worried someone would say no or make you feel bad. Nobody here will do that, and your mum won’t be told unless you choose to tell her.”",
    "psychosocial": "Offer, never force, a trusted adult; plan around school; agree a safe contact method; prepare her for the provider’s routine safety questions.",
    "sharedPlan": [
     "Non-directive options; referral today (or self-referral) to the abortion service",
     "Medical abortion at home (to 9 weeks 6 days) or surgical, chosen with the provider",
     "Contraception including LARC at the time of abortion; STI testing"
    ],
    "safetyNet": [
     "One-sided pain, shoulder-tip pain, heavy bleeding or fainting — 999 or A&E",
     "Contact the practice if the service has not been in touch within a few days, or if her safety changes"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Contraception",
    "s": "Case walkthrough · LARC after abortion",
    "href": "../cases/contraception.html"
   },
   {
    "ic": "💠",
    "t": "Contraception protocol",
    "s": "Management · method choice",
    "href": "management/contraception.html"
   },
   {
    "ic": "📋",
    "t": "Safeguarding",
    "s": "Case walkthrough · confidentiality limits",
    "href": "../cases/safeguarding.html"
   },
   {
    "ic": "💠",
    "t": "Chlamydia",
    "s": "Management · STI testing",
    "href": "management/chlamydia.html"
   }
  ],
  "pitfalls": {
   "intro": "Examiners are not testing your views on abortion. They are testing whether a frightened 16-year-old leaves with her rights explained, her safety checked, and a referral made — without feeling judged.",
   "items": [
    {
     "dom": "rto",
     "fail": "Questioning a clear decision again and again, or adding personal comments about her age or the choice.",
     "why": "“Appeared judgemental” and “did not respect the patient’s autonomy”. The tone is the test here.",
     "fix": "Acknowledge the decision, offer non-directive information once, and move to the referral."
    },
    {
     "dom": "tasks",
     "fail": "Telling her she needs a parent’s consent, or applying the Fraser guidelines to abortion.",
     "why": "At 16 she can consent (Family Law Reform Act 1969 s8). Gillick is for under-16s; Fraser is for contraception advice.",
     "fix": "Answer her question plainly: “You can decide this yourself.”"
    },
    {
     "dom": "tasks",
     "fail": "No safeguarding questions because “she’s 16 and it’s legal”.",
     "why": "Under 18 is a child for safeguarding. Missing a large age gap or coercion is a serious omission (GMC 0–18 years).",
     "fix": "Ask about the partner’s age, consent, pressure, gifts or drugs, and home safety — framed as routine."
    },
    {
     "dom": "tasks",
     "fail": "“Have a think and come back next week.”",
     "why": "Delay narrows options and adds risk. NICE NG140 supports self-referral and prompt access.",
     "fix": "Refer today or give the self-referral number, and tell her what to do if nobody calls."
    },
    {
     "dom": "gs",
     "fail": "Forgetting ectopic red flags because the request is “only a referral”.",
     "why": "An unscanned early pregnancy may be ectopic; safety-netting is incomplete without it.",
     "fix": "Name one-sided pain, shoulder-tip pain, bleeding and fainting as reasons for 999 or A&E."
    },
    {
     "dom": "gs",
     "fail": "Ending without contraception, STI testing or a safe way to contact her.",
     "why": "“Management plan insufficiently developed”; a letter to the family home could breach her confidentiality.",
     "fix": "Offer LARC at the time of abortion and STI testing, and agree how she wants to be contacted."
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
