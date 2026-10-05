/* ============================================================
   Reasoning GP — The Hot Seat: add-on set, batch 4
   Stem, knowledge, model consultation, scorecard tasks, extras,
   knowledge base, playbook, links and examiner pitfalls for
   20 further cases. Loaded after sca-pitfalls.js and
   before sca-practice.js; merges into the existing maps and
   attaches to the case objects exactly as those files do.
   Educational; original content; primary sources cited.
   ============================================================ */
(function(){
  var ADD = {
 "back-inflammatory": {
  "stem": {
   "name": "Aaron Kelly",
   "age": "28-year-old man",
   "pmh": [
    "No significant past medical history"
   ],
   "meds": [
    "Over-the-counter ibuprofen (self-bought)"
   ],
   "allergy": "No known drug allergies",
   "recent": "No previous consultations for back pain on record. No bloods or imaging on file. Occupation: warehouse worker.",
   "reason": "Video appointment: “back pain for most of a year — wants physio or a scan”."
  },
  "knowledge": {
   "guideline": "NICE NG65 (Spondyloarthritis in over 16s, 2017) · NICE QS170 (2018) · NICE NG59 (Low back pain and sciatica, 2016, updated July 2026) · GIRFT national suspected cauda equina syndrome pathway (2023) · NICE TA383 (2016) · BNF",
   "summary": "Nine months of back and buttock pain in a 28-year-old that is worse with rest, better with movement and wakes him in the second half of the night is inflammatory back pain. He meets NICE NG65 criteria for rheumatology referral for suspected axial spondyloarthritis — after a documented cauda equina screen.",
   "points": [
    {
     "h": "NICE NG65 referral rule",
     "t": "Low back pain that started before 45 and has lasted more than 3 months: refer to rheumatology for a spondyloarthritis assessment if 4 or more of — onset before 35; waking in the second half of the night; buttock pain; improvement with movement; improvement within 48 hours of an NSAID; a first-degree relative with spondyloarthritis; current or past arthritis, enthesitis or psoriasis. With exactly 3, test HLA-B27 and refer if positive. Aaron has at least 4."
    },
    {
     "h": "Tests do not rule it out",
     "t": "NICE NG65: do not rule out spondyloarthritis on a negative HLA-B27 or normal CRP/ESR alone. Bloods are useful at referral but must not delay it. Diagnostic imaging (MRI of the sacroiliac joints and spine when X-ray is normal or unsuitable) sits with the rheumatology team (NICE NG65; NICE QS170)."
    },
    {
     "h": "Extra-articular clues",
     "t": "Acute anterior uveitis (a painful red eye with light sensitivity), psoriasis, inflammatory bowel disease, enthesitis and dactylitis all point towards spondyloarthritis. A second-degree relative (his uncle) does not count towards the NG65 criteria but still matters to him."
    },
    {
     "h": "Cauda equina screen",
     "t": "GIRFT (2023): new bladder or bowel dysfunction, saddle or perianal numbness, sexual dysfunction, or bilateral or progressive leg weakness or sensory change needs emergency same-day assessment and MRI. Ask and document even when the story is inflammatory. Also ask about weight loss, fever, cancer history and immunosuppression (NICE NG59)."
    },
    {
     "h": "Treatment",
     "t": "NICE NG65: NSAIDs first line (dose per BNF; consider gastroprotection) and a specialist physiotherapy structured exercise programme. NICE TA383: TNF-alpha inhibitors for axial spondyloarthritis that remains active despite NSAIDs, under specialist care."
    },
    {
     "h": "Uveitis safety-net",
     "t": "Anterior uveitis can recur. A painful red eye with light sensitivity or blurred vision needs same-day eye assessment, not conjunctivitis drops."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Aaron, I’m Dr Lee. Can I just confirm your date of birth, and that you’re somewhere private? … Great. What’s been going on with your back?",
    "dom": "rto",
    "why": "Checks identity and privacy on video, then opens"
   },
   {
    "who": "pt",
    "text": "It’s just my back really, best part of a year. I lift heavy at work and I train a lot, so I’ve probably done it in. I push through. I was thinking physio, or a scan to check I haven’t slipped a disc. Weird thing is it’s worse when I rest and loosens up once I get moving — that’s just stiffness though, isn’t it?"
   },
   {
    "who": "dr",
    "text": "That last bit is actually really interesting, and I’d like to come back to it. Physio and a scan are both on the table. Can I ask some questions first, then we’ll decide together what’s best?",
    "dom": "gs",
    "why": "Flags the key cue and sets an agenda without promising a scan"
   },
   {
    "who": "pt",
    "text": "Yeah, go for it."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about a typical day with it — mornings, nights, and how it is at work.",
    "dom": "rto",
    "why": "Open question about pattern and impact"
   },
   {
    "who": "pt",
    "text": "Mornings I’m like an old man — takes me the best part of an hour to loosen up. It wakes me in the early hours and I have to get up and walk about. Once I’m moving at work it’s better."
   },
   {
    "who": "dr",
    "text": "Where exactly is the pain — just the lower back, or into the buttocks or legs?",
    "dom": "tasks",
    "why": "Characterises the pain and looks for buttock pain and sciatica"
   },
   {
    "who": "pt",
    "text": "Lower back, and my buttocks — sometimes one side, sometimes the other. Not down the legs."
   },
   {
    "who": "dr",
    "text": "I need to ask a few important safety questions I ask everyone with back pain. Any numbness around your bottom or between your legs, any change in how your bladder or bowels work, any problems with erections, or weakness or numbness in both legs?",
    "dom": "tasks",
    "why": "Explicit cauda equina screen in plain language"
   },
   {
    "who": "pt",
    "text": "No, none of that."
   },
   {
    "who": "dr",
    "text": "Good. Any weight loss, fevers or night sweats?",
    "dom": "tasks",
    "why": "Screens for other serious causes"
   },
   {
    "who": "pt",
    "text": "No. Just knackered from the sleep."
   },
   {
    "who": "dr",
    "text": "A few questions that might seem unrelated. Have you ever had a painful red eye, sore to light? Any skin rashes like psoriasis, bowel problems, or swollen joints or heels?",
    "dom": "tasks",
    "why": "Looks for extra-articular features of spondyloarthritis"
   },
   {
    "who": "pt",
    "text": "Actually — I had a really painful red eye a few months back. Couldn’t look at the light. It went on its own. Nothing else though. Is that connected?"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "It might be, and I’m glad you mentioned it. You’ve said a few times you push through. How is all this really affecting you?",
    "dom": "rto",
    "why": "Follows the minimising cue to the impact"
   },
   {
    "who": "pt",
    "text": "(Pause.) Honestly, it’s grinding me down. Tired all the time, short with everyone at home. And my uncle’s got ankylosing spondylitis — he’s all bent over now. I’ve kind of been avoiding thinking it could be that."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me — that’s a lot to carry quietly. So part of you has been worried this is what your uncle has, and what that might mean for you and your job?",
    "dom": "rto",
    "why": "Reflects the hidden fear back accurately"
   },
   {
    "who": "pt",
    "text": "Yeah. My job’s all lifting. If I can’t do that, I don’t know what I’d do."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me be straight with you. Back pain that’s worse with rest, better with movement, wakes you in the second half of the night and moves between the buttocks, starting at your age — that’s what we call inflammatory back pain. With the red eye, it makes me think of a condition called axial spondyloarthritis, the family that ankylosing spondylitis belongs to. It isn’t a gym injury.",
    "dom": "tasks",
    "why": "Names the inflammatory pattern and the working diagnosis"
   },
   {
    "who": "pt",
    "text": "So it is what my uncle’s got."
   },
   {
    "who": "dr",
    "text": "It might be in the same family, and we need a specialist to confirm it. But your story isn’t his. Things have changed a lot — there are good treatments now, and catching it early, as we might be doing, gives you the best chance of staying active and working.",
    "dom": "rto",
    "why": "Gives realistic hope without false reassurance"
   },
   {
    "who": "pt",
    "text": "Right. That’s… actually a relief, in a way. At least it’s got a name."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what I suggest. I’ll refer you to the rheumatology team — they’re the right people, rather than a disc scan. They’ll organise the scan that looks at the joints at the base of your spine. I’d also like blood tests for inflammation and a gene marker called HLA-B27 to send with the referral — though normal results wouldn’t rule it out.",
    "dom": "tasks",
    "why": "NICE NG65 referral with appropriate bloods; imaging via rheumatology"
   },
   {
    "who": "pt",
    "text": "Okay. And the pain in the meantime?"
   },
   {
    "who": "dr",
    "text": "Anti-inflammatories are the first treatment for this, taken regularly rather than now and then — I’ll prescribe one and talk about stomach protection. And your instinct to keep moving is right: I’ll refer you to physio for a proper exercise programme, which really helps this condition. Keep training — just nothing that makes things worse.",
    "dom": "tasks",
    "why": "First-line NSAIDs and structured exercise"
   },
   {
    "who": "pt",
    "text": "That’s good. I don’t want to stop the gym."
   },
   {
    "who": "dr",
    "text": "And for work — if lifting gets too much, I can do a fit note suggesting adjusted duties. You also mentioned being short with people at home. Would it help to talk more about how you’re feeling when I see you next?",
    "dom": "gs",
    "why": "Addresses work and mood as part of the plan"
   },
   {
    "who": "pt",
    "text": "Yeah, maybe. I’d rather sort the back first."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Two important things. If you ever get numbness between your legs, problems passing water or controlling your bowels, or weakness in both legs, go to A&E straight away. And if the red eye comes back — painful, sore to light — get it seen the same day by an eye service, not the chemist.",
    "dom": "gs",
    "why": "Specific cauda equina and uveitis safety-nets"
   },
   {
    "who": "pt",
    "text": "Numbness down below or bladder — A&E. Red eye — same day."
   },
   {
    "who": "dr",
    "text": "Exactly. Bloods this week, I’ll send the referral today, and let’s speak in two weeks to see how the tablets are working. Anything I’ve missed?",
    "dom": "rto",
    "why": "Dated follow-up and shares the floor"
   },
   {
    "who": "pt",
    "text": "No — thanks, doc. Glad I finally mentioned the eye."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; took his “worse when I rest” comment seriously instead of moving straight to physio or a scan.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Physical warehouse job, gym, sleep, fatigue, mood and home life; uncle with ankylosing spondylitis.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “loosens up once I get moving” and “I push through”, and returned to both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (gym or disc injury); concern (ending up like his uncle, losing his job); expectation (physio or a scan).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Recognised video limits; planned CRP/ESR and HLA-B27 without delaying referral; knew diagnostic imaging is rheumatology-led.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Inflammatory versus mechanical back pain; disc and sciatica; serious pathology (infection, malignancy).",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Documented cauda equina screen (saddle anaesthesia, bladder, bowel, sexual function, bilateral leg symptoms) and systemic red flags.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named inflammatory back pain and suspected axial spondyloarthritis in plain words, linked to the red eye.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Rheumatology referral meeting NICE NG65 criteria; regular NSAID with gastroprotection considered; physiotherapy structured exercise.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Possible past anterior uveitis identified; mood and sleep acknowledged; work adjustments offered.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Cauda equina and red-eye safety-nets in plain words; referral sent today, review in 2 weeks.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Aaron Kelly",
    "age": "28 years · male",
    "pmh": [
     "Nil significant"
    ],
    "meds": [
     "Ibuprofen (OTC, self-bought)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ No previous back-pain consultations or investigations on file. Warehouse worker.",
    "reason": "Video appointment. “My back’s had it from the gym — physio or a scan, please.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "He hands you the key clue in his opening — worse with rest, better moving. Flag it and agree the agenda before promising any scan."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Pattern (morning stiffness, second-half-of-night waking, alternating buttock pain), cauda equina screen, systemic red flags, extra-articular features — the red eye."
    },
    {
     "t": "4–6",
     "h": "ICE and hidden agenda",
     "d": "Fatigue, mood, home life, the uncle with ankylosing spondylitis and a job built on lifting. Surface the fear behind “I push through”."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Inflammatory back pain and suspected axial spondyloarthritis. NICE NG65 rheumatology referral, bloods, regular NSAID, physiotherapy, work adjustments."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Cauda equina symptoms mean A&E. A recurrent red eye means same-day eye service. Review in 2 weeks. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Accepts “gym injury”, refers to physio or requests a lumbar MRI for a disc; never asks about rest versus activity or night pain; no cauda equina screen; the red eye never comes up; the uncle and the fear stay hidden.",
    "pass": "Recognises the inflammatory pattern, screens cauda equina red flags, refers to rheumatology, starts NSAIDs and exercise, and gives a basic safety-net.",
    "exc": "All of the above, plus: counts the NICE NG65 criteria out loud; finds the past uveitis and links it; surfaces the uncle and the job worry and gives realistic hope; explains that normal bloods would not rule it out; adds a same-day red-eye safety-net and a work plan."
   },
   "avoid": [
    {
     "dont": "“It sounds like you’ve strained it lifting — I’ll refer you to physio.”",
     "instead": "“Pain that’s worse with rest and better with movement makes me think of inflammation, not a strain.”",
     "why": "Accepting the mechanical label misses the diagnosis the station is built on."
    },
    {
     "dont": "“Your bloods are normal, so it’s not ankylosing spondylitis.”",
     "instead": "“Normal blood tests don’t rule this out — the specialist will look at the whole picture.”",
     "why": "NICE NG65: do not exclude spondyloarthritis on normal CRP/ESR or a negative HLA-B27 alone."
    },
    {
     "dont": "“Don’t worry, you won’t end up like your uncle.”",
     "instead": "“Your story isn’t his — treatment has changed a lot, and catching it early helps.”",
     "why": "Honest, specific hope scores; blanket reassurance does not."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Physical work",
     "t": "A warehouse job built on lifting. Fear of losing it drives his minimising; early adjustments and a clear plan protect his income."
    },
    {
     "h": "Mood and relationships",
     "t": "Broken sleep and chronic pain are wearing him down and affecting home life. Offer to explore mood at follow-up; chronic inflammatory pain and low mood often travel together."
    }
   ],
   "legal": [
    {
     "h": "Fit note and adjustments",
     "t": "A fit note can advise “may be fit for work” with amended duties or altered hours, so he can keep working while treatment starts."
    },
    {
     "h": "Equality Act 2010",
     "t": "If confirmed, a long-term condition with a substantial effect on daily activities may meet the Act’s definition of disability, and his employer must then consider reasonable adjustments. Access to Work can help with costs."
    }
   ],
   "professional": [
    {
     "h": "Diagnostic delay",
     "t": "Axial spondyloarthritis is often diagnosed years late because young people’s back pain is assumed to be mechanical. Recognising the pattern is good clinical care (GMC Good Medical Practice 2024)."
    },
    {
     "h": "Documenting red flags",
     "t": "Record the cauda equina screen, including negatives, and the safety-net given — especially in a remote consultation."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "National Axial Spondyloarthritis Society (NASS) for information, exercise guidance and local groups; NHS Talking Therapies self-referral if low mood persists."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Saddle anaesthesia, bladder or bowel change, sexual dysfunction, bilateral or progressive leg symptoms — emergency same-day assessment",
     "Weight loss, fever, night sweats, cancer history, immunosuppression or IV drug use",
     "Painful red eye with light sensitivity — possible anterior uveitis"
    ],
    "psychosocial": [
     "Warehouse job built on lifting — fear of losing it",
     "Poor sleep, fatigue, irritability at home",
     "Uncle with ankylosing spondylitis, now stooped"
    ],
    "ice": [
     "Idea: “I’ve done my back in lifting and at the gym.”",
     "Concern: ending up like his uncle; not being able to work",
     "Expectation: physio or a scan for a slipped disc"
    ]
   },
   "diagnosis": "Be clear about the pattern: “Back pain that’s worse with rest, better with movement, wakes you in the early hours and started before 35 is inflammatory back pain. With that red eye, I think this could be axial spondyloarthritis, and a rheumatologist needs to see you.”",
   "diagnosisLay": "“A strained back is like a sprained ankle — it hurts more when you use it. Yours is the opposite: it stiffens when you rest, like a rusty hinge that frees up once it’s moving. That tells me it’s inflammation in the joints, not a strain.”",
   "management": {
    "reflectIce": "“You’ve been worried this is what your uncle has, and about your job. Getting the right diagnosis early is exactly what gives you the best chance of staying at work and active.”",
    "psychosocial": "Keep him training and working with adjusted duties if needed; offer to explore mood and sleep at review; point him to NASS.",
    "sharedPlan": [
     "Rheumatology referral (meets NICE NG65 criteria); CRP/ESR and HLA-B27 sent with it",
     "Regular NSAID, consider gastroprotection; physiotherapy structured exercise programme",
     "Fit note with amended duties if needed; review in 2 weeks"
    ],
    "safetyNet": [
     "Numbness between the legs, bladder or bowel change, weakness in both legs — A&E",
     "Painful red eye sore to light — same-day eye assessment"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Axial spondyloarthritis",
    "s": "Case walkthrough · NICE NG65",
    "href": "../cases/axial-spa.html"
   },
   {
    "ic": "💠",
    "t": "Ankylosing spondylitis protocol",
    "s": "NSAIDs · exercise · biologics",
    "href": "management/ankylosing-spondylitis.html"
   },
   {
    "ic": "🗺️",
    "t": "Back pain pathway (acute and chronic)",
    "s": "Visual algorithm · inflammatory vs mechanical",
    "href": "algorithms/back-pain.html"
   },
   {
    "ic": "💠",
    "t": "Cauda equina syndrome",
    "s": "Red flags · emergency pathway",
    "href": "management/cauda-equina.html"
   }
  ],
  "pitfalls": {
   "intro": "This station hands you the diagnosis in the opening line. It is failed by candidates who hear “gym” and “disc” instead of “worse when I rest”, and by those who forget the safety screen once they have spotted the pattern.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Agreeing to physio or a lumbar MRI for a presumed disc.",
     "why": "“Management plan not in line with current UK best practice.” He meets NICE NG65 criteria for rheumatology referral.",
     "fix": "Count the criteria aloud — onset before 35, night waking, buttock pain, better with movement — and refer."
    },
    {
     "dom": "tasks",
     "fail": "Skipping the cauda equina questions because the story sounds inflammatory.",
     "why": "“Does not rule out serious disease.” Examiners expect the screen asked and documented in every back pain case.",
     "fix": "Ask saddle numbness, bladder, bowel, sexual function and both-leg symptoms in plain words."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about eyes, skin or bowels.",
     "why": "The past red eye is the second clue; without it, the diagnosis rests on history alone.",
     "fix": "“Have you ever had a painful red eye, sore to the light?” Then link it for him."
    },
    {
     "dom": "tasks",
     "fail": "Telling him normal bloods would rule it out.",
     "why": "NICE NG65: a negative HLA-B27 or normal CRP/ESR does not exclude spondyloarthritis.",
     "fix": "Send bloods with the referral, but say clearly they don’t decide it."
    },
    {
     "dom": "rto",
     "fail": "Accepting “I push through” and moving on.",
     "why": "“Does not identify or respond to cues.” The uncle, the tiredness and the job are the hidden agenda.",
     "fix": "“How is this really affecting you?” Then reflect the fear back before explaining."
    },
    {
     "dom": "gs",
     "fail": "Safety-netting only “come back if it gets worse”.",
     "why": "Non-specific safety-netting is standard failing feedback.",
     "fix": "Name cauda equina symptoms with A&E, and a painful red eye with same-day eye care; book review."
    }
   ]
  }
 },
 "bowel-habit-fit": {
  "stem": {
   "name": "Diane Foster",
   "age": "59-year-old woman",
   "pmh": [
    "No significant past medical history",
    "No previous bowel problems recorded"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Teacher. BMI 26. No FIT, FBC or coeliac serology on record. No known family history of bowel cancer.",
   "reason": "Telephone call requested for “something for my IBS”."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) — suspected colorectal cancer · NICE HTG690 (2023, formerly DG56) — FIT in primary care · NICE CG61 (2008, updated 2017) — IBS in adults · NICE NG20 (2015) — coeliac disease",
   "summary": "A new change in bowel habit at 59, with rectal bleeding and weight loss, is not a safe IBS diagnosis. Offer FIT, bloods and an examination; FIT at least 10 µg Hb/g means a suspected cancer pathway referral.",
   "points": [
    {
     "h": "IBS is not a new diagnosis at 59 with red flags",
     "t": "NICE CG61: consider IBS when abdominal pain or discomfort, bloating or change in bowel habit has been present for at least 6 months. It lists red flags that need investigation first, including rectal bleeding, unexplained weight loss, anaemia, a mass, and a change to looser or more frequent stools for more than 6 weeks in someone over 60. Diane’s symptoms are new, 10 weeks old, with bleeding and weight loss."
    },
    {
     "h": "Who gets FIT",
     "t": "NICE HTG690: offer quantitative FIT to guide referral in adults with a change in bowel habit, or aged 50 and over with unexplained rectal bleeding, abdominal pain or weight loss. She qualifies on more than one count."
    },
    {
     "h": "The referral threshold",
     "t": "NICE NG12 (updated April 2026): refer on a suspected cancer pathway for colorectal cancer if FIT is at least 10 µg Hb/g faeces. A rectal mass, an unexplained anal mass or unexplained anal ulceration is referred without FIT."
    },
    {
     "h": "A low FIT is not an all-clear",
     "t": "NICE HTG690: if FIT is below 10 µg Hb/g, safety-net, and do not delay referral to an appropriate pathway if strong clinical concern persists because of ongoing unexplained symptoms."
    },
    {
     "h": "Baseline work-up",
     "t": "FBC and ferritin for iron deficiency; coeliac serology (NICE NG20: IgA tTG with total IgA as first choice) for persistent unexplained bowel symptoms; abdominal examination and DRE face to face. These run alongside FIT, never instead of it."
    },
    {
     "h": "Bright-red blood can still matter",
     "t": "Blood on the paper from straining or frequency is common, but at 50 and over unexplained rectal bleeding is itself a reason for FIT. Explaining it away as ‘going so often’ is the anchoring trap."
    },
    {
     "h": "What the pathway means",
     "t": "Suspected cancer pathway referral is still often called the two-week wait. The NHS England Faster Diagnosis Standard (October 2023) aims for cancer to be diagnosed or ruled out within 28 days of referral; colonoscopy is usually one morning."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Mrs Foster? It’s Dr Lee from the surgery. Can I just check your date of birth, and that you’re somewhere you can talk? … Thank you. How can I help today?",
    "dom": "gs",
    "why": "Identity and privacy check on the telephone, then an open question"
   },
   {
    "who": "pt",
    "text": "I’m after something for IBS really. My bowels have been all over the place — looser, going more often, a bit of urgency. It’s been a brutal Ofsted term, so I’m sure it’s stress. There’s been a bit of blood, but that’s probably from going so much."
   },
   {
    "who": "dr",
    "text": "That sounds like a rough few months. I’d like to understand exactly what’s been happening so we get the right answer, not just a quick one — then we’ll decide on a plan together. Is that all right?",
    "dom": "rto",
    "why": "Acknowledges the stress and agrees an agenda without accepting the label"
   },
   {
    "who": "pt",
    "text": "Yes, that’s fine."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Have you ever had bowel trouble like this before, or is this new?",
    "dom": "tasks",
    "why": "Establishes that the change is new — the pivotal fact against IBS"
   },
   {
    "who": "pt",
    "text": "No, never. It started about ten weeks ago. I’ve always been regular."
   },
   {
    "who": "dr",
    "text": "Tell me about the blood — how often, what colour, and where you see it?",
    "dom": "tasks",
    "why": "Characterises the rectal bleeding"
   },
   {
    "who": "pt",
    "text": "Bright red, on the paper. Now and then — maybe once or twice a week."
   },
   {
    "who": "dr",
    "text": "Has your weight changed without trying? And have you been more tired, or woken at night needing the toilet?",
    "dom": "tasks",
    "why": "Screens for weight loss, anaemia and nocturnal symptoms"
   },
   {
    "who": "pt",
    "text": "A few kilos off — I’ve been skipping lunch. Tired, but that’s the job. Not at night that I’ve noticed."
   },
   {
    "who": "dr",
    "text": "Any tummy pain or bloating, any lumps you’ve felt, or any bowel problems in the family?",
    "dom": "tasks",
    "why": "Pain, mass and family history"
   },
   {
    "who": "pt",
    "text": "Not really pain. Nobody in my family that I know of."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "You’ve clearly thought about this and read up on it. Can I ask — besides IBS, has anything else crossed your mind? Has anyone close to you had bowel trouble recently?",
    "dom": "rto",
    "why": "Invites the unspoken concern gently"
   },
   {
    "who": "pt",
    "text": "…A colleague. She’s about my age. Bowel cancer, a few weeks ago. I’ve been telling myself it’s stress because I can’t go there."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That must have been a shock, and it’s very human to reach for the explanation you can live with. I’m glad you rang rather than just buying something from the chemist.",
    "dom": "rto",
    "why": "Validates the fear and the self-soothing label without colluding"
   },
   {
    "who": "pt",
    "text": "So what do you think it is?"
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "Honestly, I can’t safely call this IBS. IBS usually comes and goes over years, and doesn’t cause bleeding or weight loss. Yours is new at 59, with some blood and weight coming off. That combination we always check properly.",
    "dom": "tasks",
    "why": "Explains why the picture does not fit IBS"
   },
   {
    "who": "dr",
    "text": "Most people with these symptoms turn out not to have anything serious — it could be inflammation, piles or a benign cause. But ‘probably fine’ isn’t the same as ‘checked’.",
    "dom": "rto",
    "why": "Balances honesty with realistic reassurance"
   },
   {
    "who": "dr",
    "text": "The first step is a stool test called FIT, which picks up tiny amounts of blood. If it comes back above a set level, national guidance says you’re referred on the urgent suspected cancer pathway, usually for a camera test. I’d also like a blood count, iron level and a test for coeliac disease, and to examine your tummy and back passage in person.",
    "dom": "tasks",
    "why": "FIT with the NICE NG12 (updated April 2026) threshold, bloods, coeliac serology and examination"
   },
   {
    "who": "pt",
    "text": "And if the test is fine?"
   },
   {
    "who": "dr",
    "text": "Then we don’t just stop. If your symptoms carry on and I’m still concerned, I can refer you anyway. The test guides us — it doesn’t overrule what you’re telling me.",
    "dom": "tasks",
    "why": "Safety-net for a low FIT with persisting symptoms"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "pt",
    "text": "I can’t take time off mid-term, though. We’re short as it is."
   },
   {
    "who": "dr",
    "text": "I understand. Let’s make this as light-touch as possible. You could collect the FIT kit and have your bloods and examination in one visit — before school or after? If you do need a camera test, it’s usually a single morning, and your health has to come before the timetable.",
    "dom": "rto",
    "why": "Problem-solves the work barrier while holding the priority"
   },
   {
    "who": "pt",
    "text": "I could come at eight tomorrow."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll book that. I won’t prescribe anything for IBS today — I don’t want to damp down symptoms we need to understand. We can talk about settling things once we have answers.",
    "dom": "tasks",
    "why": "Declines the antispasmodic and explains why"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If the bleeding gets heavier, you pass clots, feel faint, get severe tummy pain or can’t open your bowels at all, go to A&E. I’ll look at the FIT result myself and ring you, and if it meets the level I’ll send the referral that day.",
    "dom": "gs",
    "why": "Named emergency triggers and ownership of the result"
   },
   {
    "who": "dr",
    "text": "Before we finish — what will you take away from this call?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "That it probably isn’t IBS, and it might be nothing, but I need the stool test, bloods and an examination tomorrow, and a camera if the test is up. And A&E if it gets bad."
   },
   {
    "who": "dr",
    "text": "Exactly right. Thank you for being so open about your colleague — that took courage.",
    "dom": "rto",
    "why": "Closes warmly"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Identity and privacy checked; open question; let her explain her symptoms and her own label before narrowing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Teacher in a pressured Ofsted term, skipping meals, the difficulty of time off mid-term.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "“Probably just from going so much” and “it’s stress” picked up; the colleague’s diagnosis surfaced gently.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (stress-related IBS), hidden concern (bowel cancer like her colleague), expectation (confirmation of IBS and tablets).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "FIT; FBC, ferritin and coeliac serology; face-to-face abdominal examination and DRE.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Colorectal cancer, inflammatory bowel disease, coeliac disease, haemorrhoids, IBS; new onset at 59 weighed against the IBS pattern.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about onset, bleeding, weight, tiredness, night symptoms, pain, mass and family history; knows a mass means referral without FIT.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Explains clearly that this cannot safely be called IBS and needs investigation for a bowel cause, including cancer.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "FIT with the NICE NG12 (updated April 2026) threshold (at least 10 µg Hb/g → suspected cancer pathway); referral still possible with a low FIT and persisting concern; no antispasmodic as a substitute.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Acknowledges work stress without letting it explain the symptoms; iron deficiency and coeliac disease looked for.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "A&E triggers, dated visit, GP owns the FIT result and referral, teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Diane Foster",
    "age": "59 years · female",
    "pmh": [
     "Nil significant",
     "No previous bowel symptoms on record"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ No FIT, FBC or coeliac serology on file. BMI 26. Teacher. No known family history of bowel cancer.",
    "reason": "Telephone consultation. “Can I have something for my IBS?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Identify and open",
     "d": "Identity and privacy on the phone. She offers the IBS label and the stress. Agree to understand the symptoms first."
    },
    {
     "t": "1–5",
     "h": "Is this really IBS?",
     "d": "New or lifelong? Duration, bleeding, weight, tiredness, night symptoms, pain, family history. The ‘new at 59’ answer is the pivot."
    },
    {
     "t": "5–7",
     "h": "ICE and the hidden fear",
     "d": "Gently invite what else she has wondered. The colleague with bowel cancer surfaces; validate the self-soothing label."
    },
    {
     "t": "7–10",
     "h": "Explain and plan",
     "d": "Not safely IBS. FIT (NICE NG12 (updated April 2026): at least 10 µg Hb/g → suspected cancer pathway), bloods, coeliac serology, face-to-face exam. Low FIT is not an all-clear."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "A&E triggers, an early-morning visit that fits her timetable, GP owns the result, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Agrees it sounds like IBS and prescribes an antispasmodic; accepts the bleeding as “from going so often”; never asks if the change is new; no FIT, bloods or examination; never learns about the colleague.",
    "pass": "Recognises new altered bowel habit with bleeding and weight loss at 59 as needing investigation; arranges FIT, bloods and examination; states the referral threshold; acknowledges her worry; gives a safety-net.",
    "exc": "All of the above, plus: explains kindly why IBS does not fit; surfaces the colleague’s diagnosis and names the self-soothing label without judgement; explains that a low FIT does not override persisting symptoms; fits the plan around her school day; owns the result; teach-back."
   },
   "avoid": [
    {
     "dont": "“It does sound like IBS with all that stress — try mebeverine and see how you get on.”",
     "instead": "“I can’t safely call this IBS — it’s new, and there’s blood and weight loss. Let’s check properly first.”",
     "why": "Newly labelling IBS at 59 with red flags is the classic anchoring error this station tests."
    },
    {
     "dont": "“If the FIT is negative, you can relax — it’s not cancer.”",
     "instead": "“If the test is low but you’re still having symptoms, we keep going — the test doesn’t overrule you.”",
     "why": "NICE HTG690 asks for safety-netting and referral when strong concern persists despite a low FIT."
    },
    {
     "dont": "“You really need to stop worrying about work and put yourself first.”",
     "instead": "“Let’s fit this around your timetable — one visit before school, and a camera test is usually a single morning.”",
     "why": "Dismissing the practical barrier loses her; solving it gets the tests done."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work pressure",
     "t": "A teacher in a high-stakes inspection term may minimise symptoms to avoid time off. Offer early or late appointments and plain information about how long procedures take."
    },
    {
     "h": "A colleague’s diagnosis",
     "t": "A peer’s cancer diagnosis is a common hidden driver of both fear and denial. Naming it lets her engage with the plan rather than avoid it."
    }
   ],
   "legal": [
    {
     "h": "Fit notes",
     "t": "She self-certifies for the first 7 days of sickness absence; a single procedure day does not need a fit note. If longer absence follows, a fit note can support adjustments or time off."
    },
    {
     "h": "Driving after sedation",
     "t": "If sedation is used for colonoscopy she must not drive home and will need someone to collect her."
    }
   ],
   "professional": [
    {
     "h": "Remote consultation limits",
     "t": "GMC Good medical practice (2024): arrange an in-person assessment when a telephone consultation cannot meet the patient’s needs safely — here, abdominal examination and DRE."
    },
    {
     "h": "Intimate examination",
     "t": "GMC Intimate examinations and chaperones (2024): explain why a rectal examination is needed, offer a chaperone, obtain consent and document it."
    },
    {
     "h": "Owning results",
     "t": "The requesting clinician is responsible for acting on the FIT result. Practice systems should track suspected cancer referrals and unreturned FIT kits."
    }
   ],
   "community": [
    {
     "h": "Patient resources",
     "t": "Bowel Cancer UK and Macmillan Cancer Support for information; Coeliac UK if serology is positive; Education Support’s helpline for staff wellbeing in schools."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "New change in bowel habit at 59 — looser, more frequent, urgency — for about 10 weeks",
     "Rectal bleeding (bright red on the paper) and unintended weight loss",
     "Ask about tiredness, night symptoms, pain, a mass and family history"
    ],
    "psychosocial": [
     "Teacher in a stressful Ofsted term; skipping meals",
     "Cannot face time off mid-term",
     "A colleague of similar age recently diagnosed with bowel cancer"
    ],
    "ice": [
     "Idea: “It’s IBS brought on by stress”",
     "Concern: that she has bowel cancer like her colleague",
     "Expectation: IBS confirmed and tablets to settle it"
    ]
   },
   "diagnosis": "Be honest that IBS does not fit: “IBS usually comes and goes over years and doesn’t cause bleeding or weight loss. A new change at 59 with blood and weight loss needs checking for a bowel cause, including cancer — most people turn out fine, but we check.”",
   "diagnosisLay": "“IBS is like a car that has always made a certain noise. Yours has suddenly started making a new one, with a warning light on — so we look under the bonnet before deciding it’s the old noise.”",
   "management": {
    "reflectIce": "“After what happened to your colleague, it makes complete sense you reached for ‘stress’. The quickest way to stop the worry running the show is a proper answer.”",
    "psychosocial": "Fit the tests around her school day: one early visit for FIT kit, bloods and examination; explain that a camera test is usually a single morning.",
    "sharedPlan": [
     "FIT; NICE NG12 (updated April 2026): at least 10 µg Hb/g → suspected cancer pathway colorectal referral",
     "FBC, ferritin and coeliac serology (NICE NG20); abdominal examination and DRE with chaperone — refer without FIT if a mass is found",
     "No antispasmodic today; if FIT is low but symptoms persist and concern is strong, refer anyway (NICE HTG690)"
    ],
    "safetyNet": [
     "Heavier bleeding, clots, faintness, severe pain or unable to open bowels → A&E",
     "GP rings with the FIT result and sends any referral that day; review if symptoms persist whatever the result"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "IBS",
    "s": "Case walkthrough · NICE CG61 red flags",
    "href": "../cases/ibs.html"
   },
   {
    "ic": "🗺️",
    "t": "Rectal bleeding",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) FIT threshold",
    "href": "algorithms/rectal-bleeding.html"
   },
   {
    "ic": "🗺️",
    "t": "Chronic diarrhoea",
    "s": "Visual algorithm · change in bowel habit",
    "href": "algorithms/chronic-diarrhoea.html"
   },
   {
    "ic": "💠",
    "t": "Coeliac disease",
    "s": "Protocol · serology and diagnosis",
    "href": "management/coeliac-disease.html"
   }
  ],
  "pitfalls": {
   "intro": "The trap here is agreeing with a well-read patient. The history is quick to take; marks are lost by accepting ‘IBS and stress’, by treating a low FIT as a full stop, or by missing the colleague behind the fear.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Agreeing it sounds like IBS and prescribing an antispasmodic.",
     "why": "“Management plan not in line with current UK best practice.” NICE CG61 requires red flags to be investigated first; NICE HTG690 offers FIT for a change in bowel habit.",
     "fix": "Ask “is this new?” early, then explain kindly why IBS does not fit."
    },
    {
     "dom": "tasks",
     "fail": "Accepting the bleeding as “just from going so often”.",
     "why": "At 50 and over, unexplained rectal bleeding is itself an indication for FIT (NICE HTG690).",
     "fix": "Characterise it, then include it in your reasoning out loud: “with the blood and the weight loss, we check.”"
    },
    {
     "dom": "tasks",
     "fail": "Telling her a negative FIT means she is in the clear.",
     "why": "NICE HTG690: a low FIT needs safety-netting, and referral should not be delayed if strong concern persists.",
     "fix": "“If the test is low but you’re still unwell, we keep going.”"
    },
    {
     "dom": "rto",
     "fail": "Contradicting her self-diagnosis bluntly — “it’s definitely not IBS, you shouldn’t trust the internet”.",
     "why": "Dismissing her research damages the relationship she needs to accept the plan.",
     "fix": "Credit her reading, then explain which features make you want to check first."
    },
    {
     "dom": "rto",
     "fail": "Never asking what else she has wondered about.",
     "why": "“Does not explore the patient’s health understanding.” The colleague’s diagnosis is the hidden agenda.",
     "fix": "“Has anyone close to you had bowel trouble recently?”"
    },
    {
     "dom": "gs",
     "fail": "Offering a mid-morning appointment next week to a teacher who says she can’t get away.",
     "why": "A plan that does not fit her life will not happen; examiners reward tailoring.",
     "fix": "One early visit for FIT kit, bloods and examination."
    },
    {
     "dom": "gs",
     "fail": "Closing with “we’ll be in touch with the results”.",
     "why": "No named triggers and no owner for the result are standard failing feedback statements.",
     "fix": "Name the A&E triggers, say you will ring with the FIT result, and check understanding."
    }
   ]
  }
 },
 "carer-strain": {
  "stem": {
   "name": "Sheila Comerford",
   "age": "66-year-old woman",
   "pmh": [
    "No significant past medical history recorded",
    "Sole carer for her husband Brian (72, advancing dementia)"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "No recent consultations for herself. Brian’s record: advancing dementia, on memory medication. Their daughter lives abroad.",
   "reason": "Video appointment booked “about Brian’s tablets”."
  },
  "knowledge": {
   "guideline": "NICE NG150 (2020) · NICE NG97 (2018) · NICE NG222 (2022, updated December 2025) · NICE NG225 (2022) · Care Act 2014 · Mental Capacity Act 2005",
   "summary": "A carer who books about her husband but is tearful, exhausted and losing weight is the patient today. Give her permission to be one, assess mood, risk and the weight loss, and turn support into concrete steps: a carer’s assessment, respite and a plan for Brian’s nights.",
   "points": [
    {
     "h": "Identify the carer",
     "t": "NICE NG150: actively identify carers at every contact, including GP appointments, and tell them about their right to a carer’s assessment under the Care Act 2014. Some people do not see themselves as carers. Record the caring role with consent."
    },
    {
     "h": "Mood and risk",
     "t": "Carer strain often comes with depression. Screen mood (NICE NG222; PHQ-9 can help) and explore what “I can’t do this anymore” means: exhaustion, hopelessness or thoughts of dying. NICE NG225: do not use risk tools or a low/medium/high label; respond to what she tells you."
    },
    {
     "h": "Weight loss is not just stress",
     "t": "Unexplained weight loss at 66 needs an examination and baseline bloods before it is put down to carer strain. Ask about appetite, eating, alcohol and other symptoms."
    },
    {
     "h": "Practical support",
     "t": "Care Act 2014: carer’s assessment (s10) and a needs assessment for Brian (s9). NICE NG97: offer carers psychoeducation, skills training and information about respite and short breaks. Admiral Nurses, local carers’ services and day care make this real."
    },
    {
     "h": "Brian’s nights",
     "t": "A change in night-time confusion needs Brian’s own review: look for delirium triggers (infection, pain, constipation, retention, medicines) and use non-drug measures first (NICE NG97). Do not change his medication on a third-party report without assessing him. Antipsychotics raise stroke risk and mortality in dementia (BNF)."
    },
    {
     "h": "Safeguarding, gently",
     "t": "Carer exhaustion can put the cared-for person at risk. Ask, without accusation, whether she ever worries about how she is managing him; support is the first response, with a Care Act s42 referral only if there is a risk of harm that support does not address."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Comerford, I’m one of the GPs. What can I help with today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "It’s about Brian — his memory tablets. I wanted to check the dose. He’s been more confused at night. He’s the one who needs sorting, not me, I’m fine. I just… sorry. (composes herself) Ignore me. I’m just a bit tired. So, is the dose right, do you think?"
   },
   {
    "who": "dr",
    "text": "We’ll absolutely look at Brian, I promise. But can I pause for a moment? You’re tearful, and I don’t think you’re fine. Would it be alright if, for a few minutes, you were the person I’m looking after? You’re allowed to be.",
    "dom": "rto",
    "why": "Notices the tears and gives permission to be the patient"
   },
   {
    "who": "pt",
    "text": "(pause) I don’t want to make a fuss."
   },
   {
    "who": "dr",
    "text": "It isn’t a fuss. Let’s do both: you first, then Brian’s nights. Is that okay?",
    "dom": "gs",
    "why": "Agrees a two-part agenda"
   },
   {
    "who": "pt",
    "text": "Alright."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me what a typical day and night look like for you at the moment.",
    "dom": "tasks",
    "why": "Open question on the caring load"
   },
   {
    "who": "pt",
    "text": "He’s up several times a night, so I am too. I don’t get a break. I haven’t had one in two years. I’ve stopped seeing my friends. I don’t do anything for me any more."
   },
   {
    "who": "dr",
    "text": "That’s an enormous amount to carry alone. How has your mood been — do you still enjoy anything?",
    "dom": "tasks",
    "why": "Screens for depression"
   },
   {
    "who": "pt",
    "text": "Not really. I’m low most days. I cry when he’s asleep."
   },
   {
    "who": "dr",
    "text": "You look as if you’ve lost some weight. Have you, and how is your appetite?",
    "dom": "tasks",
    "why": "Explores the weight loss rather than assuming a cause"
   },
   {
    "who": "pt",
    "text": "My clothes are looser. I forget to eat, to be honest. There’s no time."
   },
   {
    "who": "dr",
    "text": "Is there anyone who helps — family, friends, services?",
    "dom": "tasks",
    "why": "Maps the support network"
   },
   {
    "who": "pt",
    "text": "Our daughter’s abroad. She rings. That’s it."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said earlier something like you can’t do this anymore. Can I ask what you meant — worn out, or have there been times you felt you didn’t want to be here at all?",
    "dom": "tasks",
    "why": "Explores the statement and asks directly about suicidal thoughts"
   },
   {
    "who": "pt",
    "text": "Worn out. Completely. I wouldn’t do anything."
   },
   {
    "who": "dr",
    "text": "Thank you for being honest. Have you had any thoughts of harming yourself, or that life isn’t worth living?",
    "dom": "tasks",
    "why": "Completes the direct risk question"
   },
   {
    "who": "pt",
    "text": "No. Just so tired."
   },
   {
    "who": "dr",
    "text": "I’m glad you told me. Sometimes, when people are this exhausted, they worry about how they’re coping with the person they look after. Has that ever worried you?",
    "dom": "tasks",
    "why": "Asks gently about Brian’s safety without accusation"
   },
   {
    "who": "pt",
    "text": "No — I’d never hurt him. I love him. I just miss who he was. And sometimes I resent it all, and then I hate myself for resenting it."
   },
   {
    "who": "dr",
    "text": "What you’re describing — love, grief for the man he was, resentment, then guilt — is something I hear from carers all the time. It doesn’t make you a bad wife. It makes you someone doing one of the hardest jobs there is without a break. What were you worried would happen if you told me you weren’t coping?",
    "dom": "rto",
    "why": "Normalises the guilt cycle and explores the hidden fear"
   },
   {
    "who": "pt",
    "text": "That you’d say he has to go into a home. That I’d have failed him."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’m really glad you said that. Here’s how I see it: you have carer exhaustion, and I think your mood has dropped into depression too. Both are real and both are treatable. Getting you help isn’t about taking Brian away — it’s what lets you keep caring for him at home.",
    "dom": "tasks",
    "why": "Names the diagnosis and reframes help as sustaining care"
   },
   {
    "who": "pt",
    "text": "I hadn’t thought of it like that."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what I’d suggest. First, a carer’s assessment from the council — it’s your right, and it can lead to respite, day care or sitters. Even half a day a week to yourself. Would you be willing?",
    "dom": "tasks",
    "why": "Carer’s assessment and respite"
   },
   {
    "who": "pt",
    "text": "If it doesn’t mean him going anywhere. Yes."
   },
   {
    "who": "dr",
    "text": "I’d also like to see you in person to weigh you and do some blood tests, because weight loss shouldn’t just be put down to stress. And we can talk about treatment for your mood — talking therapy, and a tablet if you’d like to consider one. There are dementia nurses and carers’ groups who support people exactly in your position.",
    "dom": "tasks",
    "why": "Weight-loss work-up, mood treatment options and carer support"
   },
   {
    "who": "dr",
    "text": "For Brian: a change in his confusion at night needs him to be seen, so I’ll arrange a review to check for things like an infection, pain or constipation, and look at his tablets and their timing then. Better nights for him mean sleep for you. And there may be money you’re both entitled to — an advice service can check.",
    "dom": "tasks",
    "why": "Brian reviewed in his own right; delirium triggers; benefits"
   },
   {
    "who": "pt",
    "text": "Thank you. I didn’t expect any of this."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "I want to see you again in two weeks, in your own name — not as part of Brian’s appointment. If your mood gets much worse, or you start having thoughts of harming yourself, contact us the same day or call NHS 111; in an emergency, 999. Can you tell me what we’ve agreed?",
    "dom": "gs",
    "why": "Dedicated follow-up, crisis routes and teach-back"
   },
   {
    "who": "pt",
    "text": "A carer’s assessment. Bloods and a check for me. Brian gets seen for his nights. Back in two weeks for me. And I’m allowed to ask for help."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; accepted Brian as her reason for booking but gently redirected when she became tearful.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Caring load, broken nights, no respite for two years, loss of friends and hobbies, daughter abroad.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the tears, “I’m just a bit tired” and “I can’t do this anymore”, and explored each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (Brian is the patient), concern (asking for help means failing him and him being taken away), expectation (a dose check).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Face-to-face weight and examination; baseline bloods for weight loss; PHQ-9; Brian reviewed separately for delirium triggers.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Carer strain vs depression vs physical cause of weight loss; Brian’s change as dementia progression vs delirium.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked directly about suicidal thoughts and self-harm; did not attribute weight loss to stress; asked gently about Brian’s safety.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Carer exhaustion with depressive symptoms and unexplained weight loss needing assessment.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Carer’s assessment, respite and day care, Admiral Nurse and carers’ service, mood treatment options, benefits check.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Brian’s night-time confusion reviewed in his own right, non-drug measures first; guilt and resentment normalised.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Two-week follow-up in her own name; same-day contact, NHS 111 or 999 if risk emerges; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Mental health & addiction",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Sheila Comerford",
    "age": "66 years · female",
    "pmh": [
     "Nil significant",
     "Carer flag: sole carer for husband (dementia)"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "No recent consultations for herself. Husband Brian, 72: advancing dementia. Daughter abroad.",
    "reason": "“It’s about Brian’s tablets.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Notice her",
     "d": "She asks about Brian and apologises for crying. Promise to cover Brian, then give her permission to be the patient."
    },
    {
     "t": "1–4",
     "h": "Her story",
     "d": "Nights, no break for two years, lost friends, low mood, weight loss, support network."
    },
    {
     "t": "4–6",
     "h": "Risk and the fear",
     "d": "What “I can’t do this anymore” means; direct suicide question; gentle check on Brian’s safety; the guilt cycle and the fear of him being taken away."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Carer exhaustion and depression, reframed. Carer’s assessment, respite, weight-loss work-up, mood treatment, Admiral Nurse, benefits, Brian’s own review."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Follow-up in her own name in two weeks, crisis routes, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Discusses Brian’s dose for twelve minutes; ignores the tears; accepts “I’m fine”; never asks about mood or risk; attributes the weight loss to stress; no carer’s assessment or follow-up for her.",
    "pass": "Redirects to her; recognises carer strain and low mood; asks about suicidal thoughts; arranges a carer’s assessment and respite; plans a review for Brian; books her follow-up.",
    "exc": "All of the above, plus: gives explicit permission to be the patient; normalises the love–resentment–guilt cycle; surfaces and dismantles the fear that help means Brian goes into a home; plans a weight-loss work-up; checks Brian’s safety without accusation; follow-up in her own name; teach-back."
   },
   "avoid": [
    {
     "dont": "“Let’s look at Brian’s tablets first and then see if there’s time for you.”",
     "instead": "“We’ll sort Brian, I promise. But for a few minutes, can you be the person I’m looking after?”",
     "why": "There is never time later; the carer is the patient today."
    },
    {
     "dont": "“Have you thought about putting him in a home?”",
     "instead": "“Getting you support is what lets you keep caring for him at home.”",
     "why": "It confirms her worst fear and ends the disclosure."
    },
    {
     "dont": "“You must look after yourself more.”",
     "instead": "“Let’s arrange a carer’s assessment so you get a regular break.”",
     "why": "Advice without practical help adds to her guilt."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Caring without respite",
     "t": "Sole carer for two years with broken nights, no breaks, lost friendships and a daughter abroad. Isolation and exhaustion are the main risks to both of them."
    },
    {
     "h": "Benefits and practical help",
     "t": "Attendance Allowance for Brian (not means-tested). Carer’s Allowance usually cannot be paid alongside the State Pension, but a claim can still create an underlying entitlement that may increase Pension Credit — Citizens Advice can check. Brian may qualify for a council tax discount for severe mental impairment."
    }
   ],
   "legal": [
    {
     "h": "Care Act 2014",
     "t": "Sheila is entitled to a carer’s assessment (s10) and Brian to a needs assessment (s9). The local authority must make safeguarding enquiries (s42) if an adult with care needs is at risk of abuse or neglect."
    },
    {
     "h": "Mental Capacity Act 2005",
     "t": "If Brian lacks capacity for decisions about his care, they are made in his best interests with Sheila involved. Ask whether a health and welfare lasting power of attorney exists."
    },
    {
     "h": "Confidentiality",
     "t": "Her mood and risk are her own consultation: record them in her notes, not Brian’s. Sharing Brian’s information with his carer is justified in his best interests if he lacks capacity."
    }
   ],
   "professional": [
    {
     "h": "Identifying carers",
     "t": "NICE NG150: identify carers at every contact and record them with consent. Book her follow-up in her own name so her needs are not folded into Brian’s care."
    },
    {
     "h": "Safeguarding with compassion",
     "t": "GMC Good Medical Practice (2024): consider the welfare of vulnerable people. Asking how she is managing with Brian is support, not accusation; escalate only if the risk is not addressed by help."
    }
   ],
   "community": [
    {
     "h": "Dementia and carer support",
     "t": "Admiral Nurses (Dementia UK helpline), Alzheimer’s Society, Carers UK and the local carers’ centre, day care and sitting services, befriending for her."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Thoughts of suicide or self-harm behind “I can’t do this anymore”",
     "Unexplained weight loss at 66 — needs examination and bloods, not just attribution to stress",
     "Risk to Brian if her exhaustion goes unsupported"
    ],
    "psychosocial": [
     "Two years without a break; up several times nightly",
     "Lost friends, hobbies and identity; daughter abroad",
     "Love, grief, resentment and guilt"
    ],
    "ice": [
     "Idea: “Brian is the patient. I’m just tired.”",
     "Concern: asking for help is selfish and means Brian will be taken away",
     "Expectation: a check of Brian’s tablet dose"
    ]
   },
   "diagnosis": "Carer strain with depressive symptoms (low mood, anhedonia, tearfulness, poor sleep) and unexplained weight loss requiring assessment; no current suicidal thoughts on direct questioning. Husband’s worsening night-time confusion needs his own review.",
   "diagnosisLay": "“You’re exhausted from two years of caring with no break, and your mood has dropped with it. That isn’t weakness — it’s what happens to anyone carrying this alone. It’s treatable, and getting help is what lets you keep going.”",
   "management": {
    "reflectIce": "“You worried that telling me would mean Brian going into a home. It means the opposite — support so you can keep caring for him.”",
    "psychosocial": "Normalise the guilt, give permission to be the patient, and turn support into dates: assessment, respite, a day that is hers.",
    "sharedPlan": [
     "Carer’s assessment and needs assessment for Brian; respite, day care or sitters",
     "Face-to-face review: weight, examination, bloods; PHQ-9; talking therapy or medication by her choice",
     "Brian reviewed for delirium triggers and medication timing; Admiral Nurse; benefits check"
    ],
    "safetyNet": [
     "Worsening mood or thoughts of self-harm — same-day contact, NHS 111; emergency 999",
     "Follow-up in her own name in two weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Dementia",
    "s": "Case walkthrough · NICE NG97",
    "href": "../cases/dementia.html"
   },
   {
    "ic": "💠",
    "t": "Dementia protocol",
    "s": "Carer support · sleep · behaviour",
    "href": "management/dementia.html"
   },
   {
    "ic": "📋",
    "t": "Depression",
    "s": "Case walkthrough · NICE NG222",
    "href": "../cases/depression.html"
   },
   {
    "ic": "🗺️",
    "t": "Delirium",
    "s": "Visual algorithm · new confusion",
    "href": "algorithms/confusion.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by candidates who answer the question they were asked. The real patient is the carer, and the marks are in noticing her, assessing her mood and risk, and making help concrete.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Spending the consultation adjusting Brian’s medication.",
     "why": "Brian is not assessed and the carer is missed; “does not identify the patient’s problem”.",
     "fix": "Promise to cover Brian, then redirect: “For a few minutes, can you be the person I’m looking after?”"
    },
    {
     "dom": "tasks",
     "fail": "Letting “I can’t do this anymore” pass as a figure of speech.",
     "why": "Failure to assess risk is a safety fail.",
     "fix": "Ask what she means, then ask directly about suicidal thoughts and self-harm."
    },
    {
     "dom": "tasks",
     "fail": "Putting her weight loss down to stress.",
     "why": "Unexplained weight loss at 66 needs assessment; premature closure is a Tasks fail.",
     "fix": "Book a face-to-face review with weight and bloods."
    },
    {
     "dom": "rto",
     "fail": "Suggesting a care home or telling her she needs to look after herself.",
     "why": "Confirms her fear or adds guilt; she closes down.",
     "fix": "Reframe help as what keeps Brian at home, and offer specific support."
    },
    {
     "dom": "rto",
     "fail": "Asking about Brian’s safety as an accusation, or not at all.",
     "why": "An accusing tone stops disclosure; skipping it misses a vulnerable adult. The proportionate first response is support.",
     "fix": "Ask gently whether she worries about how she is managing him, normalise the guilt cycle, then add support and review."
    },
    {
     "dom": "gs",
     "fail": "Folding her follow-up into Brian’s next appointment.",
     "why": "Her needs disappear again; “no clear follow-up arrangements”.",
     "fix": "Book her own review in two weeks, with named crisis routes."
    }
   ]
  }
 },
 "depression-firearms": {
  "stem": {
   "name": "Alan Foister",
   "age": "54-year-old man",
   "pmh": [
    "No significant past medical history recorded",
    "Holds a shotgun and firearm certificate (occupational, farmer)"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "No recent consultations.",
   "reason": "Video consultation about poor sleep and being “short with everyone”."
  },
  "knowledge": {
   "guideline": "NICE NG222 (depression in adults, 2022, updated December 2025) · NICE NG225 (self-harm, 2022) · GMC Confidentiality (2017) · Home Office Statutory guidance for chief officers of police on firearms licensing (2021, revised) · DVLA Assessing fitness to drive",
   "summary": "Early waking, weight loss, loss of interest and hopelessness in a stoical farmer is depression, not insomnia. Ask directly about suicide and the guns, make the firearms safe, involve the crisis team when there is a plan, and know when to inform the police firearms licensing team.",
   "points": [
    {
     "h": "Depression behind the insomnia",
     "t": "Low mood, anhedonia, early-morning waking, 6 kg weight loss, poor concentration and feeling a failure over months is a depressive episode. Men often present with sleep, irritability or drinking. Do not prescribe a hypnotic and miss it."
    },
    {
     "h": "Ask directly about suicide",
     "t": "Ask about feeling better off dead, thoughts of suicide, plans, means, preparations and what keeps him going. Asking does not increase risk. NICE NG225 advises against risk scales or low/medium/high labels to decide care; the plan follows the whole picture."
    },
    {
     "h": "Lethal means",
     "t": "Access to firearms with suicidal thoughts and hopelessness is a serious risk. Agree today that the guns and ammunition leave his control: held by a registered firearms dealer or another certificate holder, or surrendered to the police. A locked cabinet he holds the key to is not enough."
    },
    {
     "h": "Informing firearms licensing",
     "t": "GMC Confidentiality (2017): disclosure to the police may be justified in the public interest to inform decisions about fitness to hold a firearm or shotgun certificate, if not disclosing may expose the patient or others to a risk of death or serious harm. Tell him first and involve him where you can; document the reasons."
    },
    {
     "h": "Treatment",
     "t": "NICE NG222: for more severe depression, a combination of individual CBT and an antidepressant is a first-line option. When there is a risk of suicide, review within 1 week of starting an antidepressant and consider toxicity in overdose and limiting quantities. A plan involving firearms needs same-day crisis team assessment."
    },
    {
     "h": "Alcohol and bloods",
     "t": "Quantify drinking (AUDIT-C); alcohol worsens mood, sleep and impulsivity. With 6 kg weight loss, check bloods (FBC, U&E, LFTs, TFTs, HbA1c) to rule out a physical cause."
    },
    {
     "h": "Driving",
     "t": "DVLA: depression with significant memory or concentration problems, agitation, behavioural disturbance or suicidal thoughts must be notified, and he should not drive until assessed."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Foister, I’m Dr Lee. Can you hear and see me all right, and are you somewhere private? Tell me what’s been going on with the sleep.",
    "dom": "rto",
    "why": "Checks the video set-up and privacy, then opens the floor"
   },
   {
    "who": "pt",
    "text": "I’m just not sleeping. Awake at four every morning, head going. I’ve been short with everyone. I don’t need to talk about feelings, I just need something to knock me out so I can function on the farm. I’m not one of these depression types."
   },
   {
    "who": "dr",
    "text": "Fair enough, and I will help with the sleep. To do that properly I need to understand what’s keeping you awake. Can I ask some questions, and then we’ll agree a plan?",
    "dom": "gs",
    "why": "Accepts his agenda while widening it"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When you wake at four, what goes through your head?",
    "dom": "rto",
    "why": "Open question into the content of the insomnia"
   },
   {
    "who": "pt",
    "text": "The farm. Money. It’s not doing well. (Pause.) Everything, really."
   },
   {
    "who": "dr",
    "text": "How has your mood been over the last few months? Do you still enjoy the things you used to?",
    "dom": "tasks",
    "why": "Screens core depressive symptoms"
   },
   {
    "who": "pt",
    "text": "Can’t remember the last time I enjoyed anything. I’ve lost weight, about a stone. Can’t concentrate. Feel like I’ve failed."
   },
   {
    "who": "dr",
    "text": "And how much are you drinking at the moment?",
    "dom": "tasks",
    "why": "Quantifies alcohol as a contributor"
   },
   {
    "who": "pt",
    "text": "More than I should. A few drinks most nights to get off to sleep."
   },
   {
    "who": "dr",
    "text": "You mentioned the farm. Has anything else changed at home?",
    "dom": "rto",
    "why": "Follows the cue towards the social drivers"
   },
   {
    "who": "pt",
    "text": "(Long pause.) My wife’s left. A few weeks ago."
   },
   {
    "who": "dr",
    "text": "I’m sorry. Your livelihood and your marriage at the same time is a huge amount for anyone to carry.",
    "dom": "rto",
    "why": "Acknowledges the losses before moving to risk"
   },
   {
    "phase": "Risk assessment",
    "clock": "5–8 min",
    "who": "dr",
    "text": "I ask this of anyone carrying this much, and I’d like an honest answer. Have you had thoughts that you’d be better off dead, or that others would be better off without you?",
    "dom": "tasks",
    "why": "Asks directly about suicidal ideation"
   },
   {
    "who": "pt",
    "text": "(Looks away.) Sometimes. Everyone’d be better off without me."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. Have you thought about how you might do it?",
    "dom": "tasks",
    "why": "Asks about plan and method"
   },
   {
    "who": "pt",
    "text": "I’ve got the shotgun. I’ve thought about using it."
   },
   {
    "who": "dr",
    "text": "Have you done anything to prepare, like writing notes, or taking the gun out with that in mind? And what has stopped you so far?",
    "dom": "tasks",
    "why": "Preparatory acts and protective factors"
   },
   {
    "who": "pt",
    "text": "No. Nothing like that. I just think about it, mostly at night."
   },
   {
    "phase": "Explanation",
    "clock": "8–10 min",
    "who": "dr",
    "text": "Alan, what you’re describing isn’t weakness, and it isn’t just bad sleep. It’s depression, an illness that is treatable. And right now it’s telling you things about yourself that aren’t true. I’m worried about your safety, and I want to act on that today.",
    "dom": "tasks",
    "why": "Names depression and the level of concern plainly"
   },
   {
    "who": "pt",
    "text": "I didn’t want to make a fuss."
   },
   {
    "who": "dr",
    "text": "The most important thing is the guns. Would you agree to them leaving the house today, held by your dealer or another certificate holder, or handed in to the police, until you’re well?",
    "dom": "tasks",
    "why": "Lethal-means safety, negotiated"
   },
   {
    "who": "pt",
    "text": "I need them for the farm. But… yes. All right."
   },
   {
    "who": "dr",
    "text": "Thank you. I also need to be open with you. Because of the risk, I will let the police firearms licensing team know. I’d much rather do that with you than behind your back. It’s about keeping you alive, not punishing you.",
    "dom": "rto",
    "why": "Explains the justified disclosure honestly and with him"
   },
   {
    "phase": "Shared management",
    "clock": "10–11 min",
    "who": "dr",
    "text": "I’m going to ask the crisis team to see you today. Then we treat the depression properly: talking therapy and an antidepressant work best together for how low you are. No sleeping tablets on their own, and let’s cut the drinking right back, because it’s making the mood and the nights worse.",
    "dom": "tasks",
    "why": "Same-day crisis referral and NG222 treatment; addresses alcohol"
   },
   {
    "who": "pt",
    "text": "The crisis team. Today?"
   },
   {
    "who": "dr",
    "text": "Today. And there are farming charities that help with exactly the money side, so you don’t carry that alone either. I’ll arrange some bloods too because of the weight loss. Please don’t drive until you’re feeling better.",
    "dom": "gs",
    "why": "Addresses social drivers, physical causes and driving"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Is there someone who can be with you tonight? If the thoughts get stronger, call 999 or go to A&E. For support any time, NHS 111 with the mental health option, or Samaritans on 116 123. I’ll ring you tomorrow and see you within a week.",
    "dom": "gs",
    "why": "Crisis routes, company tonight and early follow-up"
   },
   {
    "who": "pt",
    "text": "I’ll ring someone."
   },
   {
    "who": "dr",
    "text": "Before we finish, can you tell me what’s happening with the guns today and what you’ll do if the thoughts come back tonight?",
    "dom": "gs",
    "why": "Teach-back of the safety plan"
   },
   {
    "who": "pt",
    "text": "Guns go to the dealer this afternoon. Crisis team will call. If it gets bad, 999."
   },
   {
    "who": "dr",
    "text": "That’s right. You came in for sleeping tablets and you’ve told me something much harder. That took courage. Anything else you want to ask?",
    "dom": "rto",
    "why": "Validates disclosure and shares the floor"
   },
   {
    "who": "pt",
    "text": "No. Thanks, doc."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Accepted “it’s just sleep” as a start and explored what keeps him awake.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "The failing farm, his wife leaving, alcohol, isolation, and male and farming stigma.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the pause after “everything, really”, the drinking and “I’ve failed”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (just insomnia); concern (shame, the farm, the marriage, thoughts of dying); expectation (sleeping tablets).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Bloods for weight loss (FBC, U&E, LFTs, TFTs, HbA1c); AUDIT-C; PHQ-9 to track severity.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Depressive episode versus primary insomnia, alcohol-related low mood, or a physical cause of weight loss.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Explicit suicide questions: ideation, plan, means (firearms), preparation, protective factors.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Names depression with suicidal thoughts and a firearms plan, in plain language.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Guns out of his control today; same-day crisis team; CBT plus antidepressant; no hypnotic alone; firearms licensing informed with him.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Alcohol reduction, farming financial support, relationship loss, driving advice.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Call tomorrow, review within a week, 999/A&E, NHS 111 mental health option, Samaritans, company tonight.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "Professional & ethical dilemmas",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Alan Foister",
    "age": "54 years · male",
    "pmh": [
     "Nil significant",
     "Firearm and shotgun certificate holder (farmer)"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "No recent consultations recorded.",
    "reason": "Video appointment: poor sleep and irritability. “I just need something to knock me out at night.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and accept his frame",
     "d": "Let him say it’s just sleep. Agree to help, and ask to understand first."
    },
    {
     "t": "1–5",
     "h": "Depression and drivers",
     "d": "What he thinks about at 4am, mood, enjoyment, weight, concentration, alcohol, the farm, his wife leaving."
    },
    {
     "t": "5–8",
     "h": "Direct risk questions",
     "d": "Better off dead, plan, the shotgun, preparation, what stops him."
    },
    {
     "t": "8–11",
     "h": "Name it and act",
     "d": "Depression is an illness. Guns out today. Firearms licensing told, with him. Crisis team today. CBT and antidepressant; alcohol."
    },
    {
     "t": "11–12",
     "h": "Safety-net and close",
     "d": "Company tonight, 999, NHS 111 mental health option, Samaritans, call tomorrow, review within a week, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes a hypnotic for insomnia; never asks about suicide or the guns; or asks and then does nothing about the firearms; lectures about drinking; leaves with routine follow-up.",
    "pass": "Recognises depression; asks directly about suicide and access to firearms; arranges for the guns to be removed; refers to the crisis team; knows the firearms disclosure duty; gives crisis numbers.",
    "exc": "All of the above, plus: engages a stoical man by accepting his frame first; uncovers the farm and the separation; negotiates the guns leaving the house today; explains the disclosure to firearms licensing honestly and with him; addresses alcohol, finances and driving; calls the next day; checks the safety plan with teach-back."
   },
   "avoid": [
    {
     "dont": "“I can give you a short course of sleeping tablets to tide you over.”",
     "instead": "“Waking at four with your mind racing is often low mood. Let’s treat what’s causing it.”",
     "why": "A hypnotic misses the depression and gives a means of overdose."
    },
    {
     "dont": "“You’re not thinking of doing anything silly, are you?”",
     "instead": "“Have you had thoughts that you’d be better off dead? Have you thought about how?”",
     "why": "A leading, minimising question invites “no”. Direct questions get honest answers."
    },
    {
     "dont": "“Just keep the gun cabinet locked.”",
     "instead": "“Would you agree to the guns leaving the house today, with your dealer or the police, until you’re well?”",
     "why": "A cabinet he holds the key to does not remove access."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Farming and isolation",
     "t": "Financial pressure on the farm, long solitary hours and a culture of coping alone. Farming charities (for example the Farming Community Network and RABI) help with money worries and practical support."
    },
    {
     "h": "Relationship breakdown",
     "t": "His wife leaving removes his main support. Ask who can be with him and who he trusts."
    }
   ],
   "legal": [
    {
     "h": "Firearms licensing",
     "t": "Home Office statutory guidance (in force from November 2021) gives GPs a role in firearms licensing. GMC Confidentiality (2017) supports disclosure to the police where a certificate holder may pose a risk of death or serious harm. Tell him, involve him, and document the reasons."
    },
    {
     "h": "Driving",
     "t": "DVLA: depression with suicidal thoughts, significant concentration problems or agitation must be notified. Advise him not to drive, including farm vehicles on the road, until reviewed."
    }
   ],
   "professional": [
    {
     "h": "Open, not covert",
     "t": "GMC Confidentiality (2017): where possible, tell the patient before disclosing and seek his agreement. A covert disclosure damages trust when he most needs it."
    },
    {
     "h": "Documentation",
     "t": "Record the direct risk questions and answers, the firearms plan, the disclosure and its justification, the crisis referral and the follow-up date."
    }
   ],
   "community": [
    {
     "h": "Crisis support",
     "t": "999 or A&E if at immediate risk; NHS 111 mental health option (24/7); Samaritans 116 123; local crisis team."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Thoughts of being better off dead with a plan involving his shotgun",
     "Hopelessness and recent losses; ask about any preparation",
     "Heavy drinking, isolation, and a high-risk occupational group"
    ],
    "psychosocial": [
     "Failing farm and money worries",
     "Wife recently left; who is around him now",
     "Alcohol each night; stigma about mental health in farming"
    ],
    "ice": [
     "Idea: it’s just insomnia and stress; he is “not the depression type”",
     "Concern: shame at not coping, the farm, the marriage, and thoughts of ending his life",
     "Expectation: something to knock him out at night"
    ]
   },
   "diagnosis": "“This isn’t just poor sleep. You have depression, it’s an illness, and it’s treatable. The thoughts about the gun worry me, and I want to act on them today.”",
   "diagnosisLay": "“Depression is like a heavy fog that changes how everything looks: the farm, your worth, the future. It isn’t a weakness. With the right treatment the fog lifts, and things look different again.”",
   "management": {
    "reflectIce": "“You came in for sleep because that felt like the acceptable thing to ask for. What you’ve told me is much harder, and I’m glad you did.”",
    "psychosocial": "Farming charity support for the finances, someone with him tonight, alcohol reduction, and a plan he agrees to for the guns.",
    "sharedPlan": [
     "Firearms out of his control today; police firearms licensing informed, with him",
     "Same-day crisis team assessment; then CBT plus an antidepressant (NICE NG222)",
     "No hypnotic alone; reduce alcohol; bloods for weight loss; no driving for now"
    ],
    "safetyNet": [
     "999 or A&E if thoughts intensify; NHS 111 mental health option; Samaritans 116 123",
     "GP call tomorrow and review within 1 week"
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
    "ic": "💠",
    "t": "Harmful drinking and alcohol dependence",
    "s": "Protocol · AUDIT-C · brief intervention",
    "href": "management/alcohol-problem-drinking.html"
   },
   {
    "ic": "📋",
    "t": "Insomnia",
    "s": "Case walkthrough · when sleep is a symptom",
    "href": "../cases/insomnia.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you can see depression and suicide risk behind a request for sleeping tablets, and whether you act on firearm access. Most failing candidates never ask about the guns.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing a hypnotic and sleep hygiene advice for “insomnia”.",
     "why": "“Did not recognise the underlying problem.” Early waking, weight loss and anhedonia are depression.",
     "fix": "Ask what he thinks about at 4am, then screen mood, enjoyment, weight and concentration."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about suicide because he seems stoical and in control.",
     "why": "“Risk not assessed.” Stoicism is part of the danger in this group.",
     "fix": "“Have you had thoughts you’d be better off dead? Have you thought about how?”"
    },
    {
     "dom": "tasks",
     "fail": "Hearing about the shotgun and moving on without a plan for it.",
     "why": "Access to lethal means is the most changeable part of the risk.",
     "fix": "Negotiate the guns leaving his control today and inform firearms licensing."
    },
    {
     "dom": "rto",
     "fail": "Informing the police without telling him, or threatening it to get compliance.",
     "why": "“Did not involve the patient in decisions.” It breaks trust at the worst moment.",
     "fix": "“I’d rather do this with you than behind your back. It’s about keeping you alive.”"
    },
    {
     "dom": "rto",
     "fail": "“So, are you depressed?” to a man who has just said he’s not the type.",
     "why": "Labels he rejects close the conversation. Examiners note the lack of rapport.",
     "fix": "Start with his words (sleep, temper, the farm), then name depression as an illness once he has told you more."
    },
    {
     "dom": "gs",
     "fail": "Routine review in four weeks with a list of numbers.",
     "why": "“Follow-up not appropriate to the level of risk.”",
     "fix": "Same-day crisis team, call tomorrow, review within a week, company tonight, and teach-back."
    }
   ]
  }
 },
 "dexa-bisphosphonate": {
  "stem": {
   "name": "Patricia Naylor",
   "age": "67-year-old woman",
   "pmh": [
    "Wrist fracture 8 weeks ago after tripping in the garden",
    "Early menopause at 44",
    "Ex-smoker"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "DXA scan: hip T-score −2.7. FRAX: high risk. Family history: mother had a hip fracture.",
   "reason": "Telephone appointment to discuss her bone scan result."
  },
  "knowledge": {
   "guideline": "NICE NG259 (July 2026; replaced CG146) · NICE TA464 (2017) · NICE TA204 (2010) · NOGG 2024 · MHRA Drug Safety Update (June 2011; July 2015) · BNF",
   "summary": "A T-score of −2.7 after a low-trauma wrist fracture is osteoporosis with a fragility fracture: treat to prevent the next, more serious fracture. Reframe “crumbling” accurately, give honest proportionate information on the rare side effects, and let her make an informed choice.",
   "points": [
    {
     "h": "Read the result",
     "t": "A T-score of −2.5 or lower is osteoporosis; with a fragility fracture it is established osteoporosis. A fragility fracture is a break from a fall at standing height or less. It means higher fracture risk, not a skeleton that is crumbling or inevitable disability."
    },
    {
     "h": "Treat on NOGG thresholds",
     "t": "NICE NG259 (July 2026; replaced CG146): estimate the 10-year fracture risk (FRAX or QFracture). NICE TA464 bases bisphosphonate eligibility on the absolute fracture risk from that NICE assessment (CG146, now NG259). NOGG 2024: oral alendronate or risedronate, or IV zoledronate, are first-line; people at very high risk are referred for consideration of anabolic treatment."
    },
    {
     "h": "Before starting",
     "t": "Check for secondary causes and treatment safety: bone profile including calcium, renal function, and vitamin D, with other tests as indicated. Correct low calcium or vitamin D first. NOGG 2024: calcium intake of at least 700 mg a day, ideally from diet, with supplements if intake is low."
    },
    {
     "h": "How to take alendronate",
     "t": "BNF: alendronic acid 70 mg once weekly, swallowed whole with a full glass of plain water on an empty stomach, at least 30 minutes before food or other medicines, staying upright for 30 minutes. Avoid in significant renal impairment (threshold per BNF)."
    },
    {
     "h": "The feared side effects, in proportion",
     "t": "MHRA Drug Safety Update (July 2015): the risk of osteonecrosis of the jaw in osteoporosis treatment is small compared with cancer doses; advise good oral hygiene, routine dental check-ups and reporting mouth problems. MHRA (June 2011): atypical femoral fractures are rare, mainly with long-term use — report thigh, hip or groin pain. Upper GI irritation is the common problem."
    },
    {
     "h": "Duration and alternatives",
     "t": "NOGG 2024: plan oral bisphosphonate for at least 5 years (IV for at least 3) and then reassess fracture risk. If oral treatment is declined or not tolerated: IV zoledronate, or denosumab (NICE TA204), which must not be stopped without a follow-on plan. NICE TA464 has a patient decision aid showing personal benefit and risk."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Naylor, I’m one of the GPs. You’re ringing about your bone scan — what have you been told so far, and how are you feeling about it?",
    "dom": "rto",
    "why": "Checks what she knows and how she feels first"
   },
   {
    "who": "pt",
    "text": "That my bones are thin. I was up half the night reading. Does it mean they’re crumbling? That I’ll end up bent over, or in a wheelchair? And those bone tablets rot your jaw, don’t they? I don’t want them. Is there anything natural? I just want to know how bad it is."
   },
   {
    "who": "dr",
    "text": "That sounds like a frightening night. Let’s take it step by step: what the scan shows, what it means for you, and then the options, including your worries about the tablets. You’ll get straight answers. Is that alright?",
    "dom": "gs",
    "why": "Acknowledges distress and sets a clear agenda"
   },
   {
    "who": "pt",
    "text": "Yes. Please."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Can I check a few things first? The wrist — how did it happen?",
    "dom": "tasks",
    "why": "Establishes the fracture mechanism"
   },
   {
    "who": "pt",
    "text": "I tripped in the garden and put my hand out. Just a normal fall."
   },
   {
    "who": "dr",
    "text": "How is it now, and have you had any back pain, loss of height or other breaks?",
    "dom": "tasks",
    "why": "Screens for vertebral fracture and other fractures"
   },
   {
    "who": "pt",
    "text": "The wrist’s mending. No back trouble that I’ve noticed."
   },
   {
    "who": "dr",
    "text": "What do you eat and drink in a day — milk, cheese, yoghurt? And do you take any vitamin D?",
    "dom": "tasks",
    "why": "Assesses calcium intake and vitamin D"
   },
   {
    "who": "pt",
    "text": "Not much dairy, to be honest. No vitamins."
   },
   {
    "who": "dr",
    "text": "Any falls apart from the garden, problems with your balance, or trouble with your teeth or gums?",
    "dom": "tasks",
    "why": "Falls risk and dental baseline before treatment"
   },
   {
    "who": "pt",
    "text": "No, just that one fall. Teeth are fine as far as I know."
   },
   {
    "who": "dr",
    "text": "And any indigestion or problems swallowing?",
    "dom": "tasks",
    "why": "Screens for upper GI problems relevant to oral bisphosphonates"
   },
   {
    "who": "pt",
    "text": "No."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said “bent over” and “wheelchair”. Is there a picture in your mind when you say that — someone you’ve seen?",
    "dom": "rto",
    "why": "Explores the image behind the catastrophising"
   },
   {
    "who": "pt",
    "text": "(pause) My mum. She broke her hip, went into a nursing home, and she was gone within a year. I keep thinking that’s me."
   },
   {
    "who": "dr",
    "text": "I’m so sorry. That must have been awful to watch, and it explains why last night felt so frightening. Is that the real fear — becoming your mum?",
    "dom": "rto",
    "why": "Names the deeper fear with empathy"
   },
   {
    "who": "pt",
    "text": "Yes. That’s it exactly."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Then let me be honest with you. Osteoporosis means your bones are less dense than they should be, so they break more easily. It doesn’t mean they’re crumbling, and it doesn’t mean a wheelchair. It means there’s a risk we can see and act on.",
    "dom": "tasks",
    "why": "Accurate reframing of the result"
   },
   {
    "who": "dr",
    "text": "Your wrist was what we call a fragility fracture — a break from a fall that strong bone would have coped with. Together with your scan, your early menopause and your mum’s hip, your risk of a more serious break, like a hip, is high enough that treatment is well worth it. The whole aim is to stop the next one.",
    "dom": "tasks",
    "why": "Explains why the fracture puts her in the treatment group"
   },
   {
    "who": "pt",
    "text": "So treatment would stop me ending up like Mum?"
   },
   {
    "who": "dr",
    "text": "It lowers that risk, together with keeping you strong and steady on your feet. That’s exactly how we avoid her story.",
    "dom": "rto",
    "why": "Links treatment to her concern without over-promising"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Now the jaw. It’s a real side effect, but rare, and much rarer at bone-strength doses than at the high doses used for cancer. The thigh-bone fracture you may have read about is rare too, mainly after many years. The common problem is indigestion, and taking it the right way helps. I can go through a decision aid with you that shows, out of 100 women like you, how many fractures are prevented.",
    "dom": "tasks",
    "why": "Balanced, proportionate risk information with a decision aid"
   },
   {
    "who": "pt",
    "text": "I didn’t realise it was that rare. What about something natural?"
   },
   {
    "who": "dr",
    "text": "Some natural things really help, alongside a tablet rather than instead of it: more calcium in your diet or a supplement, vitamin D, weight-bearing and strength exercise, and staying off cigarettes. On their own they won’t lower your risk enough after a fracture like yours.",
    "dom": "tasks",
    "why": "Calcium, vitamin D, exercise and smoking in context"
   },
   {
    "who": "dr",
    "text": "If you chose the tablet, it would be alendronate once a week: first thing, with a full glass of water, then stay upright for half an hour before breakfast. Keep up dental check-ups. If a weekly tablet doesn’t suit you, there’s a once-a-year drip or an injection. Before any of it, I’d like a blood test for calcium, kidneys and vitamin D.",
    "dom": "tasks",
    "why": "Administration, alternatives and pre-treatment bloods"
   },
   {
    "who": "pt",
    "text": "Can I think about it for a few days?"
   },
   {
    "who": "dr",
    "text": "Of course. It’s your decision, and I’d rather you chose with the facts than with last night’s reading. My recommendation is to treat. Shall I book the blood test and send you the decision aid?",
    "dom": "rto",
    "why": "Respects autonomy while giving a clear recommendation"
   },
   {
    "who": "pt",
    "text": "Yes, please do."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you do start, tell us about jaw or mouth pain, new thigh or groin pain, or heartburn or pain on swallowing. And any sudden back pain, or another fall, let us know. I’ll call you in a week with the bloods and your decision. What will you say to anyone who asks what the doctor said?",
    "dom": "gs",
    "why": "Specific warning symptoms, dated follow-up and teach-back"
   },
   {
    "who": "pt",
    "text": "That my bones are thinner but not crumbling, there’s a tablet that cuts the risk, and the jaw thing is rare. And to eat more cheese."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Checked what she understood and how she felt before explaining; let her voice the fear of the tablets.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Diet, calcium intake, smoking history, activity and independence; what her mother’s decline means to her.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “bent over, wheelchair” and explored the picture behind it; heard “something natural” as a wish for permission to decline.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (bones crumbling, tablets poison), concern (becoming her mother), expectation (to avoid the tablets).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Bone profile with calcium, renal function, vitamin D and other secondary-cause tests as indicated; dental status; FRAX already done.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Primary postmenopausal osteoporosis vs secondary causes; asked about vertebral symptoms and further fractures.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for back pain or height loss (vertebral fracture), dysphagia or reflux, and falls; renal function before alendronate.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Osteoporosis with a fragility fracture, high fracture risk, low calcium intake — explained as fracture risk, not disability.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Oral bisphosphonate recommended with correct administration; calcium and vitamin D; exercise; alternatives offered; informed choice with the NICE TA464 decision aid.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Falls prevention, smoking status, dental care; upper GI tolerability considered.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named warning symptoms; bloods and decision call in a week; review of tolerance and reassessment after 5 years of oral treatment.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Investigations & results"
   ],
   "stem": {
    "name": "Patricia Naylor",
    "age": "67 years · female",
    "pmh": [
     "Wrist fracture 8 weeks ago (fall from standing)",
     "Early menopause (44)",
     "Ex-smoker"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ DXA: hip T-score −2.7. FRAX high. Mother: hip fracture. No bone-protection treatment on file.",
    "reason": "“I want to know how bad my bone scan is.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and settle",
     "d": "She arrives frightened and armed with internet stories. Acknowledge the night she has had and set a three-part agenda."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Fracture mechanism, back pain or height loss, other fractures, falls, calcium and vitamin D, teeth, reflux or swallowing."
    },
    {
     "t": "4–6",
     "h": "The picture behind the fear",
     "d": "“Bent over, in a wheelchair” is her mother. Name the fear of becoming her before explaining anything."
    },
    {
     "t": "6–10",
     "h": "Reframe and share the decision",
     "d": "Osteoporosis as fracture risk; why the wrist fracture matters; rare side effects in proportion; decision aid; calcium, vitamin D and exercise; alendronate technique; alternatives."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Warning symptoms, bloods, a call in a week with her decision, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Either tells her not to worry and offers only calcium, or insists on alendronate and dismisses the jaw fear; never explains what the T-score means; misses her mother; no follow-up.",
    "pass": "Explains osteoporosis and the significance of the fragility fracture; gives accurate information that ONJ and atypical fractures are rare; covers calcium, vitamin D and exercise; explains administration; offers alternatives and follow-up.",
    "exc": "All of the above, plus: surfaces the fear of becoming her mother and uses it to frame treatment as protecting independence; offers the NICE TA464 decision aid for personal numbers; supports a genuine informed choice with a clear recommendation; checks bloods before starting; teach-back."
   },
   "avoid": [
    {
     "dont": "“Don’t believe what you read online — the jaw thing is nonsense.”",
     "instead": "“The jaw problem is real, but rare at bone doses, and here’s how we reduce the risk further.”",
     "why": "Dismissing a real side effect costs trust; honest proportion wins it."
    },
    {
     "dont": "“Your bones are very thin, so you really must take this.”",
     "instead": "“Your bones break more easily than they should, and treatment lowers that risk. The choice is yours, and I’d recommend it.”",
     "why": "Fear and pressure worsen catastrophising and undermine an informed decision."
    },
    {
     "dont": "“Calcium and vitamin D should do the trick.”",
     "instead": "“Calcium and vitamin D help, but after a fracture like yours they aren’t enough on their own.”",
     "why": "Offering only supplements under-treats a high-risk patient with a fragility fracture."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family experience",
     "t": "Her mother’s hip fracture led to a nursing home and death within a year. This memory drives both the catastrophising and the reluctance to take treatment."
    },
    {
     "h": "Health information online",
     "t": "Night-time searching produced frightening but inaccurate pictures. Offer reliable sources and a decision aid rather than dismissing what she read."
    }
   ],
   "legal": [
    {
     "h": "Informed consent",
     "t": "GMC Decision making and consent (2020): share the information she needs to decide, including the risks she cares about, and respect her choice. If she declines, record the discussion and offer to revisit it."
    }
   ],
   "professional": [
    {
     "h": "Shared decision-making",
     "t": "Give a clear recommendation and personalised numbers (NICE TA464 patient decision aid), then let her decide. Neither steamroll nor accept a refusal based on misinformation."
    },
    {
     "h": "Fracture liaison",
     "t": "A fragility fracture should prompt bone-health assessment; confirm the fracture liaison service or practice has a plan for treatment, adherence and reassessment."
    }
   ],
   "community": [
    {
     "h": "Support and information",
     "t": "Royal Osteoporosis Society helpline and leaflets; local strength-and-balance or exercise classes; NHS Smokefree support if needed; dentist for routine check-ups."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "New back pain or height loss — possible vertebral fracture",
     "Further low-trauma fractures or falls",
     "Dysphagia or active upper GI disease — caution with oral bisphosphonates"
    ],
    "psychosocial": [
     "Her mother’s hip fracture, nursing home and death",
     "Independence and activity; smoking history",
     "Diet and calcium intake; health anxiety after online searching"
    ],
    "ice": [
     "Idea: “My bones are crumbling and the tablets are poison.”",
     "Concern: becoming her mother — a hip fracture, a care home, an early death",
     "Expectation: to know how bad it is and to avoid the tablets"
    ]
   },
   "diagnosis": "Postmenopausal osteoporosis (hip T-score −2.7) with a fragility wrist fracture and high FRAX risk; risk factors early menopause, maternal hip fracture and past smoking; low calcium intake.",
   "diagnosisLay": "“Your bones are less dense than they should be, so they break more easily — that’s what happened to your wrist. They’re not crumbling. It’s a risk we can measure and lower.”",
   "management": {
    "reflectIce": "“You’re frightened of ending up like your mum. Treating your bones and keeping you steady is exactly how we try to stop that happening.”",
    "psychosocial": "Replace the internet picture with accurate information and a decision aid; give her time to decide with the facts.",
    "sharedPlan": [
     "Bloods first: bone profile with calcium, renal function, vitamin D and secondary-cause tests as indicated",
     "Recommend alendronate once weekly with correct technique; alternatives IV zoledronate or denosumab",
     "Calcium at least 700 mg a day, vitamin D, weight-bearing and strength exercise, dental check-ups, falls prevention"
    ],
    "safetyNet": [
     "Report jaw or mouth pain, thigh or groin pain, heartburn or painful swallowing, new back pain",
     "Call in a week with bloods and decision; review tolerance and reassess after 5 years of oral treatment"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Osteoporosis",
    "s": "Case walkthrough · NOGG 2024",
    "href": "../cases/osteoporosis.html"
   },
   {
    "ic": "💠",
    "t": "Osteoporosis protocol",
    "s": "Bisphosphonates · monitoring",
    "href": "management/osteoporosis.html"
   },
   {
    "ic": "🗺️",
    "t": "Fractures",
    "s": "Visual algorithm · fragility fractures",
    "href": "algorithms/fractures.html"
   },
   {
    "ic": "🧮",
    "t": "FRAX and QFracture",
    "s": "Medical Calculators",
    "href": "calculators.html"
   }
  ],
  "pitfalls": {
   "intro": "This telephone station is about risk communication. Candidates fail by leaving the fear untouched, by dismissing the side effects she has read about, or by giving a plan she cannot follow.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Not explaining what the T-score means, or saying “your bones are very thin”.",
     "why": "Unclear explanation feeds the catastrophising; “explanation not tailored to the patient”.",
     "fix": "Osteoporosis means bones break more easily than they should — a risk, not a crumbling skeleton."
    },
    {
     "dom": "tasks",
     "fail": "Treating the wrist as incidental and offering calcium only.",
     "why": "A fragility fracture with osteoporosis is a treatment indication; NOGG 2024 puts bisphosphonates first-line.",
     "fix": "Explain that the wrist is the reason to treat, and that the aim is to prevent the next fracture."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing alendronate without bloods, technique or dental advice.",
     "why": "Hypocalcaemia, low vitamin D or renal impairment must be checked first; poor technique causes oesophageal harm.",
     "fix": "Bloods first, clear technique, dental check-ups, and named warning symptoms."
    },
    {
     "dom": "rto",
     "fail": "Brushing off the jaw fear as internet nonsense.",
     "why": "“Does not respond to the patient’s concerns”; she will decline treatment and stop listening.",
     "fix": "Acknowledge it is real, put it in proportion (MHRA), and offer the decision aid."
    },
    {
     "dom": "rto",
     "fail": "Never finding out about her mother.",
     "why": "The hidden agenda drives both fear and refusal; the Relating domain depends on it.",
     "fix": "Ask what “bent over, in a wheelchair” brings to mind, then connect treatment to avoiding that outcome."
    },
    {
     "dom": "gs",
     "fail": "Ending with “have a think and let us know”.",
     "why": "No follow-up plan means no decision; “poor follow-up arrangements”.",
     "fix": "Book the bloods, send the decision aid, and agree a call in a week."
    }
   ]
  }
 },
 "diazepam-request": {
  "stem": {
   "name": "Donna Preadon",
   "age": "46-year-old woman",
   "pmh": [
    "Anxiety (patient-reported; previous records not yet received)"
   ],
   "meds": [
    "Diazepam, reported by the patient (dose and prescribing history not yet confirmed)"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "Newly registered after moving to the area. Previous GP records have not arrived.",
   "reason": "Telephone request for a diazepam prescription: “My old doctor always gave me a few.”"
  },
  "knowledge": {
   "guideline": "NICE NG215 (medicines associated with dependence or withdrawal symptoms, 2022) · NICE CG113 (generalised anxiety disorder and panic disorder, 2011, updated 2020) · NICE CG115 (alcohol-use disorders, 2011) · BNF · MHRA Drug Safety Update March 2020 · DVLA Assessing fitness to drive",
   "summary": "Years of diazepam, a rising dose, withdrawal symptoms and online top-ups is benzodiazepine dependence. Do not stop it suddenly and do not simply continue it. Verify, bridge safely, address alcohol, plan a gradual taper, and treat the anxiety and what is driving it.",
   "points": [
    {
     "h": "Recognise dependence",
     "t": "Long-term use, tolerance with dose creep, withdrawal symptoms when supplies run low (shaking, sweating, rebound anxiety, insomnia) and buying extra online. This is physical dependence, and a new patient asking for a routine repeat may not say so unless asked kindly."
    },
    {
     "h": "Neither refuse nor rubber-stamp",
     "t": "Stopping long-term benzodiazepines abruptly risks withdrawal seizures and delirium, and drives people to illicit supply of unknown content. Continuing on demand entrenches dependence. The safe path: verify the dose, bridge with a short supply, and agree a plan."
    },
    {
     "h": "Verify before prescribing",
     "t": "Check the Summary Care Record or contact the previous practice to confirm dose and duration before issuing. Diazepam is a Schedule 4 (Part 1) controlled drug; issue small, dated supplies with a named prescriber while the plan is set up."
    },
    {
     "h": "Gradual taper",
     "t": "NICE NG215: agree a gradual, individualised reduction with the patient, with regular review and support; do not stop abruptly. Step size and pace per BNF, slowed near the end or held if withdrawal symptoms flare. High-dose or multi-source use may need the specialist drug service."
    },
    {
     "h": "Dangerous combinations",
     "t": "Benzodiazepines with alcohol cause additive sedation and respiratory depression. MHRA Drug Safety Update (March 2020): benzodiazepines with opioids risk potentially fatal respiratory depression. Quantify alcohol with AUDIT-C (NICE CG115)."
    },
    {
     "h": "Treat the anxiety properly",
     "t": "NICE CG113: benzodiazepines only short term during a crisis. Offer stepped care for GAD: psychological treatment (CBT, guided self-help via NHS Talking Therapies) and an SSRI, with sertraline considered first. Explore what has made things worse recently and assess mood and risk."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Ms Preadon, it’s Dr Lee. Welcome to the practice. I understand you’re calling about your diazepam. Tell me about it.",
    "dom": "rto",
    "why": "Warm welcome and open question"
   },
   {
    "who": "pt",
    "text": "I take it for my anxiety. My old doctor always sorted me a few. I’ve nearly run out and I get really bad without them. I’ve been on them years. Can you just put it through so I don’t have to go through it all again?"
   },
   {
    "who": "dr",
    "text": "I can hear you’re worried about running out, and I’m not going to leave you without. I do need to understand your situation, because your records haven’t reached us yet. Then we’ll agree a plan. Is that OK?",
    "dom": "gs",
    "why": "Defuses fear of being cut off and sets the agenda"
   },
   {
    "who": "pt",
    "text": "I suppose. As long as I’m not left with nothing."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "How long have you been taking it, and how much do you take in a usual day now?",
    "dom": "tasks",
    "why": "Establishes duration and current dose"
   },
   {
    "who": "pt",
    "text": "Years. Every day. It’s crept up; I take more now than when I started."
   },
   {
    "who": "dr",
    "text": "What happens when you run low?",
    "dom": "tasks",
    "why": "Screens for withdrawal symptoms"
   },
   {
    "who": "pt",
    "text": "I shake, I sweat, the anxiety goes through the roof. I can’t sleep."
   },
   {
    "who": "dr",
    "text": "When prescriptions have run short before, how have you managed? Lots of people in your position find other ways, and I’m asking so I can keep you safe, not to judge.",
    "dom": "rto",
    "why": "Normalises to allow honest disclosure about sourcing"
   },
   {
    "who": "pt",
    "text": "(Pause.) I’ve bought some online. Just to get by."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. Tablets bought online can contain something different or much stronger, so that’s important. Do you drink alcohol, or take any painkillers or other medicines?",
    "dom": "tasks",
    "why": "Checks alcohol and opioids for combined risk"
   },
   {
    "who": "pt",
    "text": "A few drinks in the evenings. No painkillers."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "You said the anxiety has been bad. Has something made it worse recently?",
    "dom": "rto",
    "why": "Opens the door to the hidden driver"
   },
   {
    "who": "pt",
    "text": "(Quiet.) My child’s been diagnosed with something serious. I can’t switch off."
   },
   {
    "who": "dr",
    "text": "I’m so sorry. That’s an enormous thing to carry, on top of a move. Of course you’ve been reaching for whatever takes the edge off. How low has your mood got? Have you had any thoughts of harming yourself?",
    "dom": "tasks",
    "why": "Acknowledges the stressor and screens mood and risk"
   },
   {
    "who": "pt",
    "text": "No, never that. I’ve got to be there for them. I’m just scared you’ll think I’m an addict and stop them."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "I don’t think that. What you describe, needing more over time and feeling ill when you run low, means your body has become dependent on diazepam. That’s very common after years on it, it’s a medical problem, and it’s treatable. You’re not in trouble.",
    "dom": "tasks",
    "why": "Names dependence without judgement"
   },
   {
    "who": "dr",
    "text": "Two safety points. Stopping suddenly can cause fits, so we never do that. And diazepam with alcohol can slow your breathing, so the evening drinking needs to come down while you’re on it.",
    "dom": "tasks",
    "why": "Explains withdrawal seizure and alcohol risks plainly"
   },
   {
    "who": "pt",
    "text": "So you’ll still give me some?"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "Yes. Today I’ll check your dose with your old surgery and the national record, and then issue a short supply, a week at a time, so you’re not in withdrawal and you don’t need to buy online. Could you promise me you won’t use the online ones?",
    "dom": "tasks",
    "why": "Safe bridging after verification; stops illicit supply"
   },
   {
    "who": "pt",
    "text": "Yes. If I’ve got my own, I won’t need them."
   },
   {
    "who": "dr",
    "text": "Then I’d like to see you this week to plan a slow reduction, at a pace you have a say in. And to treat the anxiety itself: talking therapy, and an antidepressant that helps anxiety and isn’t addictive. What do you think?",
    "dom": "rto",
    "why": "Shared decision on taper and CG113 treatment"
   },
   {
    "who": "pt",
    "text": "Slowly is OK. I’ve always wondered if I could come off them."
   },
   {
    "who": "dr",
    "text": "I think you can. There’s also support for parents going through a child’s serious illness, and I’d like to talk about that when I see you.",
    "dom": "gs",
    "why": "Addresses the driver and plans holistic support"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you get severe shaking, confusion, see or hear things that aren’t there, or have a fit, call 999. If you run short or feel worse, ring me rather than buying tablets. And please don’t drive if you feel drowsy.",
    "dom": "gs",
    "why": "Withdrawal red flags and driving advice"
   },
   {
    "who": "dr",
    "text": "Can you tell me in your own words what happens next?",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "You check my dose, I get a week’s worth, no online ones, cut down the drinking, and I see you this week to plan coming down slowly."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll be your doctor for this, so you won’t have to explain it all again. Anything else you want to ask?",
    "dom": "rto",
    "why": "Continuity addresses her fear of starting over"
   },
   {
    "who": "pt",
    "text": "No. Thank you. I was dreading this call."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Welcomed her as a new patient; let her state the request; reassured she would not be cut off before asking questions.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Recent move, her child’s serious illness, alcohol, her fear of being judged.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I get really bad without them”, the pause about sourcing, and the recent worsening.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (diazepam is what works); concern (being labelled an addict and cut off); expectation (a prescription today).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Verify dose via previous practice and Summary Care Record; AUDIT-C; GAD-7 and mood assessment at the follow-up.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Benzodiazepine dependence; untreated GAD; depression; harmful drinking.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Withdrawal symptoms, alcohol and opioid co-use, online supply, suicidal thoughts.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Names benzodiazepine dependence kindly and explains what it means.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Verified short bridging supply; no abrupt stop; planned gradual taper (NICE NG215); CBT and SSRI for anxiety (NICE CG113).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Alcohol reduction; support for her child’s illness; stopping online purchase.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Appointment this week, withdrawal red flags to 999, ring rather than buy online, driving advice.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Donna Preadon",
    "age": "46 years · female",
    "pmh": [
     "Anxiety (patient-reported)"
    ],
    "meds": [
     "Diazepam (patient-reported; dose not confirmed)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ New registration. Previous records not received. No prescriptions issued by this practice.",
    "reason": "Telephone: “I just need you to put my diazepam through. My old doctor always gave me a few.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Defuse",
     "d": "Welcome her; reassure she won’t be left without while you work out a safe plan."
    },
    {
     "t": "1–5",
     "h": "Dependence history",
     "d": "Duration, dose creep, withdrawal symptoms, online purchase, alcohol, opioids."
    },
    {
     "t": "5–7",
     "h": "The driver",
     "d": "What has made it worse? Her child’s illness. Mood and risk."
    },
    {
     "t": "7–11",
     "h": "Name it and plan",
     "d": "Dependence as medical, not moral. Seizure and alcohol risks. Verify dose, weekly bridging, taper plan, CBT and SSRI."
    },
    {
     "t": "11–12",
     "h": "Safety-net and close",
     "d": "Withdrawal red flags, no online tablets, driving, appointment this week, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Issues a month’s supply on request without checking; or refuses flatly with “we don’t prescribe benzodiazepines”; never asks about online supply or alcohol; lectures about addiction.",
    "pass": "Recognises dependence; avoids abrupt stop; gives a short supply; warns about alcohol; plans a taper and anxiety treatment; books follow-up.",
    "exc": "All of the above, plus: verifies the dose before prescribing; draws out the online purchase without judgement; uncovers her child’s illness and addresses it; names dependence as a medical problem; involves her in the pace of the taper; offers continuity; checks understanding."
   },
   "avoid": [
    {
     "dont": "“Our practice doesn’t prescribe diazepam, I’m afraid.”",
     "instead": "“I won’t leave you without, and I won’t just keep it going without a plan either.”",
     "why": "A flat refusal risks withdrawal seizures and pushes her to online supply."
    },
    {
     "dont": "“It sounds like you’re addicted.”",
     "instead": "“Your body has become dependent on it. That’s common after years, and it’s treatable.”",
     "why": "“Addict” confirms her fear and shuts down honesty."
    },
    {
     "dont": "“I’ll do a month’s supply and we’ll look at it when your notes arrive.”",
     "instead": "“I’ll check your dose today and give you a week at a time while we plan.”",
     "why": "Large unverified supplies of a controlled drug, with alcohol use, are unsafe."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "A child’s serious illness",
     "t": "Caring for a seriously ill child is a major stressor. Ask what support she has; the child’s treating team and charities can often offer family and carer support."
    },
    {
     "h": "New to the area",
     "t": "A recent move means lost support networks and a new practice. Continuity with one clinician matters."
    }
   ],
   "legal": [
    {
     "h": "Controlled drug",
     "t": "Diazepam is a Schedule 4 (Part 1) controlled drug. Prescriptions are valid for 28 days. Buying prescription-only medicines online from unregulated sellers carries the risk of counterfeit or different drugs."
    },
    {
     "h": "Driving",
     "t": "DVLA: non-prescribed benzodiazepine use, or doses above BNF guidance, counts as misuse or dependence for licensing; the licence is refused or revoked for at least 1 year. If she drives, advise her of her duty to notify. It is also an offence to drive while impaired by any drug."
    }
   ],
   "professional": [
    {
     "h": "Prescribing for a new patient",
     "t": "GMC Good practice in prescribing and managing medicines and devices (2021): prescribe only when you have adequate knowledge of the patient’s health and medicines. Verify through the previous practice or Summary Care Record."
    },
    {
     "h": "Documentation",
     "t": "Record the verified dose, the online use, alcohol, the bridging quantity, the agreed taper plan and the review date."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "NHS Talking Therapies (self-referral) for anxiety; local drug and alcohol service if dose is high or supply is from several sources."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Previous withdrawal seizures or confusion when supplies ran out",
     "Heavy alcohol use or opioid use alongside diazepam",
     "Suicidal thoughts or overdose risk; high-dose or multi-source supply"
    ],
    "psychosocial": [
     "Recent move and new practice",
     "Her child’s serious illness",
     "Evening drinking; fear of being judged"
    ],
    "ice": [
     "Idea: diazepam works and the old GP just kept it going",
     "Concern: being labelled an addict and cut off cold",
     "Expectation: a prescription today without going over it all again"
    ]
   },
   "diagnosis": "“Your body has become dependent on diazepam. That’s common after years of use, it’s a medical problem and it’s treatable. It means we mustn’t stop suddenly, and we also shouldn’t just carry on without a plan.”",
   "diagnosisLay": "“Your body has adjusted to having diazepam every day, so it protests when the level drops. That’s the shaking and panic when you run low. Coming down slowly lets it adjust back, step by step.”",
   "management": {
    "reflectIce": "“You were worried I’d label you and stop them. I won’t. What I want is a plan that keeps you safe and actually treats the anxiety.”",
    "psychosocial": "Support around her child’s illness, continuity with one clinician, alcohol reduction, and no more online supply.",
    "sharedPlan": [
     "Verify dose; short weekly bridging supply; no abrupt stop",
     "Gradual taper agreed with her (NICE NG215; step size per BNF)",
     "CBT or guided self-help and an SSRI for anxiety (NICE CG113); reduce alcohol"
    ],
    "safetyNet": [
     "999 for fits, confusion, hallucinations or severe shaking",
     "Ring the practice rather than buying online; appointment this week"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Benzodiazepines and z-drugs",
    "s": "Protocol · tapering and withdrawal",
    "href": "management/benzodiazepines-z-drugs.html"
   },
   {
    "ic": "📋",
    "t": "Anxiety",
    "s": "Case walkthrough · NICE CG113",
    "href": "../cases/anxiety.html"
   },
   {
    "ic": "📋",
    "t": "Drug dependence",
    "s": "Case walkthrough · prescribed and illicit",
    "href": "../cases/drug-dependence.html"
   },
   {
    "ic": "💠",
    "t": "Harmful drinking and alcohol dependence",
    "s": "Protocol · AUDIT-C",
    "href": "management/alcohol-problem-drinking.html"
   }
  ],
  "pitfalls": {
   "intro": "The benzodiazepine request is a fork: prescribe on demand or refuse flatly, and you fail either way. The marks go to the safe middle path, delivered without judgement.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Issuing a month’s supply because “she’s been on it for years”.",
     "why": "“Unsafe prescribing.” The dose is unverified, she is drinking and buying online.",
     "fix": "Verify the dose, issue a short supply, and plan review this week."
    },
    {
     "dom": "tasks",
     "fail": "“We don’t prescribe benzodiazepines here.”",
     "why": "Abrupt withdrawal after long-term use risks seizures and pushes her to illicit supply.",
     "fix": "Bridge safely and explain why sudden stopping is dangerous."
    },
    {
     "dom": "tasks",
     "fail": "Never asking how she has managed when scripts ran short.",
     "why": "The online supply and alcohol are the biggest safety issues. Missing them misses the risk.",
     "fix": "Ask kindly: “Lots of people find other ways. How have you managed?”"
    },
    {
     "dom": "rto",
     "fail": "Using the word “addict” or a lecture on the dangers of benzodiazepines.",
     "why": "“Judgemental approach.” She came in expecting exactly that, and will disengage.",
     "fix": "Name dependence as a medical problem that is common and treatable."
    },
    {
     "dom": "rto",
     "fail": "Focusing only on the drug and never asking what has made things worse.",
     "why": "Her child’s illness is the hidden driver; missing it leaves the anxiety untreated.",
     "fix": "“Has something made the anxiety worse recently?”"
    },
    {
     "dom": "gs",
     "fail": "No plan beyond “we’ll review when your notes come”.",
     "why": "“Follow-up not arranged” and “safety-netting absent.”",
     "fix": "Appointment this week, withdrawal red flags, ring rather than buy online, teach-back."
    }
   ]
  }
 },
 "dyspepsia-alarm": {
  "stem": {
   "name": "Paul Mercer",
   "age": "58-year-old man",
   "pmh": [
    "Back pain",
    "Dyspepsia (long-standing)",
    "Current smoker"
   ],
   "meds": [
    "Omeprazole (repeat)"
   ],
   "allergy": "No known drug allergies",
   "recent": "Warehouse supervisor. H. pylori never tested. No endoscopy on record. No recent FBC.",
   "reason": "Telephone request to increase his omeprazole — “indigestion worse than usual”."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) — oesophageal and stomach cancer · NICE CG184 (2014, updated 2019) — GORD and dyspepsia in adults · NICE CG141 (2012, updated 2016) — acute upper GI bleeding · NICE NG59 (2016, updated 2026) — low back pain · BNF (NSAIDs)",
   "summary": "Dyspepsia that has changed and persists despite a PPI, with 5 kg weight loss, early satiety and black stools, in a 58-year-old on daily ibuprofen, needs same-day assessment for bleeding and a suspected cancer pathway referral (often straight to endoscopy) — not a bigger PPI dose over the phone.",
   "points": [
    {
     "h": "The NICE NG12 (updated April 2026) criterion",
     "t": "NICE NG12 (updated April 2026), recommendations 1.2.1 and 1.2.7 (amended 2025): refer people using a suspected cancer pathway referral for oesophageal or stomach cancer if they have dysphagia, or are aged 55 and over with weight loss and any of upper abdominal pain, reflux or dyspepsia. This replaced the earlier urgent direct-access endoscopy route. Paul meets the second limb."
    },
    {
     "h": "Black stools change the timetable",
     "t": "Black, tarry stools suggest upper GI bleeding — from an NSAID ulcer or a tumour. He needs to be seen in person today: pulse, blood pressure, abdomen, and an urgent FBC and U&E. Ongoing melaena, haematemesis, dizziness, collapse or a fast pulse means emergency admission. In hospital, NICE CG141 uses the Glasgow-Blatchford score at first assessment."
    },
    {
     "h": "Not a test-and-treat case",
     "t": "NICE CG184 manages uninvestigated dyspepsia without alarm features with lifestyle and medicine review, a 4-week full-dose PPI or H. pylori test and treat. That pathway does not apply once weight loss, bleeding or persistent symptoms despite a PPI appear."
    },
    {
     "h": "Find and stop the NSAID",
     "t": "Over-the-counter ibuprofen taken most days, not on his record, is a major cause of peptic ulcer and GI bleeding (BNF: NSAIDs carry a risk of serious GI adverse effects). Stop it today and record it. Ask every dyspeptic patient about bought medicines."
    },
    {
     "h": "H. pylori testing",
     "t": "NICE CG184: breath or stool antigen testing needs a 2-week washout from PPIs. With a possible bleed, keep the PPI going and let the endoscopy team test for H. pylori at endoscopy."
    },
    {
     "h": "The back pain still needs a plan",
     "t": "NICE NG59: do not offer paracetamol alone for low back pain; exercise-based care is central, and NSAIDs are not an option while an ulcer or bleed is possible. Offer a review for the back once the GI picture is clear."
    },
    {
     "h": "What the pathway means",
     "t": "Suspected cancer pathway (still called the two-week wait) endoscopy is usually one morning. The NHS England Faster Diagnosis Standard (October 2023) aims for cancer to be diagnosed or ruled out within 28 days of referral."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Mr Mercer? It’s Dr Lee. Can I just confirm your date of birth, and that you can talk freely? … Thanks. I see you’re after more omeprazole — tell me what’s been happening.",
    "dom": "gs",
    "why": "Identity and privacy check, then an open question"
   },
   {
    "who": "pt",
    "text": "My indigestion’s been worse the last few weeks and the normal dose isn’t touching it. I’ve had a dodgy stomach for years. Can you just put a stronger script through? I haven’t got time to come in — we’re short-staffed."
   },
   {
    "who": "dr",
    "text": "I hear you’re pushed for time, and I’ll be efficient. Before I change any tablets I need a few minutes to understand what’s different this time — then we’ll decide together. Okay?",
    "dom": "rto",
    "why": "Acknowledges his constraint and agrees an agenda without promising the prescription"
   },
   {
    "who": "pt",
    "text": "Yeah, go on."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "You say it’s worse — how is it different from your usual indigestion, and how long has it been like this?",
    "dom": "tasks",
    "why": "Establishes a change in a long-standing symptom"
   },
   {
    "who": "pt",
    "text": "About six weeks. It’s there all the time now, not just after food. And I get full after a few mouthfuls."
   },
   {
    "who": "dr",
    "text": "Has your weight changed without trying?",
    "dom": "tasks",
    "why": "Screens for weight loss — a NICE NG12 (updated April 2026) criterion at 55 and over"
   },
   {
    "who": "pt",
    "text": "About five kilos, yeah. Thought it was the job."
   },
   {
    "who": "dr",
    "text": "I need to ask you something directly, because people often don’t mention it. Have your stools been black, tarry or sticky at all? Or have you vomited blood, or anything like coffee grounds?",
    "dom": "tasks",
    "why": "Asks specifically about melaena and haematemesis"
   },
   {
    "who": "pt",
    "text": "…Black, once or twice. I didn’t think much of it. No sick."
   },
   {
    "who": "dr",
    "text": "Thank you — that’s really important. Right now, do you feel dizzy or faint when you stand, or is your heart racing? Any more black stools today?",
    "dom": "tasks",
    "why": "Assesses acuity to decide between emergency and same-day care"
   },
   {
    "who": "pt",
    "text": "No, I’m all right in myself. Not today."
   },
   {
    "who": "dr",
    "text": "And are you taking anything else — anything from the chemist, for pain or anything?",
    "dom": "tasks",
    "why": "Hunts for unrecorded over-the-counter NSAIDs"
   },
   {
    "who": "pt",
    "text": "Ibuprofen for my back. Most days, if I’m honest."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "That helps a lot. Can I ask what you’ve made of it all yourself — the weight and the black stools?",
    "dom": "rto",
    "why": "Invites his own interpretation"
   },
   {
    "who": "pt",
    "text": "Honestly? It’s frightened me a bit. But if I come in it’s tests and time off, and they’re already on at us at work. I can’t afford to be the one who’s off."
   },
   {
    "who": "dr",
    "text": "That’s a lot to be carrying — worried about what it is, and worried about work at the same time. Thank you for being straight with me. Let me be straight back.",
    "dom": "rto",
    "why": "Names both the fear and the work pressure"
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "What you’re describing isn’t a bad patch of the old indigestion. Pain that’s changed and isn’t responding, feeling full quickly, weight loss and black stools — that combination needs looking at properly. A stronger tablet could hide it.",
    "dom": "tasks",
    "why": "Declines the dose increase and names the alarm features"
   },
   {
    "who": "dr",
    "text": "Black stools can mean bleeding from the stomach — often an ulcer, and ibuprofen is a common cause. So I’d like you to stop the ibuprofen from today, and I need to see you in person today to check your pulse, blood pressure and tummy, and do a blood count.",
    "dom": "tasks",
    "why": "Stops the NSAID and arranges same-day assessment for possible bleeding"
   },
   {
    "who": "dr",
    "text": "Alongside that, I’m referring you on the urgent suspected cancer pathway, which usually means a quick camera test of your gullet and stomach — at your age, with weight loss and indigestion, that’s what national guidance says. It’s to find the cause, which is very often an ulcer that heals, not a verdict.",
    "dom": "tasks",
    "why": "States the NICE NG12 (updated April 2026) criterion with honest balance"
   },
   {
    "who": "pt",
    "text": "Right. That’s… a lot. But okay."
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "What would help you get here today? I can give you a time at the end of your shift if that’s easier — but it does need to be today.",
    "dom": "rto",
    "why": "Problem-solves the work barrier without negotiating on urgency"
   },
   {
    "who": "pt",
    "text": "I could get there straight after my shift."
   },
   {
    "who": "dr",
    "text": "Good, I’ll book you in for then. The camera test is usually one morning. If you need time off, you can self-certify for a week, and I can give you a fit note if it’s longer. Keep taking the omeprazole as you are. The endoscopy team can test for the stomach bug H. pylori at the same time. And we’ll sort your back without ibuprofen once we know what’s going on.",
    "dom": "gs",
    "why": "Practical plan: time off, PPI, H. pylori and the back pain"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Until I see you — if you pass more black stools, vomit blood or anything like coffee grounds, feel dizzy, faint or your heart races, call 999 or go straight to A&E. Don’t wait for me.",
    "dom": "gs",
    "why": "Clear emergency triggers for an upper GI bleed"
   },
   {
    "who": "dr",
    "text": "Can you tell me back what we’ve agreed, so I know I’ve been clear?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "No ibuprofen, keep the omeprazole, see you after my shift for bloods and a check, camera test in the next two weeks. And 999 if I bring up blood or feel faint."
   },
   {
    "who": "dr",
    "text": "Spot on. You did the right thing ringing. See you this afternoon.",
    "dom": "rto",
    "why": "Closes warmly and reinforces attendance"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Identity and privacy checked; open question on what has changed; did not issue the prescription before assessing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Warehouse supervisor, short-staffed and worried about being seen as unreliable; smoker; back pain driving daily ibuprofen.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "“Worse than usual” and “no time to come in” explored; the black stools drawn out by direct questioning.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a bad patch of old indigestion), concern (fear about the weight and black stools, and about work), expectation (a stronger PPI with no visit).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Same-day pulse, BP and abdominal examination; urgent FBC and U&E; suspected cancer pathway referral under NICE NG12 (updated April 2026), often straight to OGD, with H. pylori testing at endoscopy.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "NSAID peptic ulcer with bleeding, gastric or oesophageal cancer, gastritis; persistent symptoms despite a PPI weighed against uncomplicated dyspepsia.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about melaena, haematemesis, dizziness and palpitations to judge whether he needs an ambulance now or same-day review.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Alarm-feature dyspepsia with possible upper GI bleeding, likely NSAID-related, cancer to be excluded — explained in plain language.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Stops ibuprofen; same-day assessment; NICE NG12 (updated April 2026) suspected cancer pathway referral (55+ with weight loss and dyspepsia); PPI continued; no test-and-treat instead.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Back pain plan without NSAIDs; smoking noted with support offered later; ibuprofen added to the record.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 triggers for bleeding, a timed same-day appointment, self-certification and fit note explained, teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Paul Mercer",
    "age": "58 years · male",
    "pmh": [
     "Back pain",
     "Dyspepsia — long-standing",
     "Smoker"
    ],
    "meds": [
     "Omeprazole (repeat)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Requests a higher omeprazole dose by phone. H. pylori never tested. No FBC this year. No endoscopy on record.",
    "reason": "Telephone consultation. “Can you bump up my omeprazole?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Identify and open",
     "d": "Identity and privacy. He wants a script and no visit. Agree to understand what has changed before prescribing."
    },
    {
     "t": "1–5",
     "h": "Hunt the alarm features",
     "d": "What’s different, duration, weight, early satiety. Ask directly about black stools and vomiting blood — he won’t volunteer them. Current dizziness. Bought medicines: the ibuprofen."
    },
    {
     "t": "5–7",
     "h": "ICE",
     "d": "His quiet fear about the weight and stools, and the work pressure driving avoidance."
    },
    {
     "t": "7–10",
     "h": "Explain and plan",
     "d": "Not a dose issue. Stop ibuprofen. Same-day face-to-face check and FBC. NICE NG12 (updated April 2026): 55+ with weight loss and dyspepsia → suspected cancer pathway referral. Keep the PPI."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 for more black stools, haematemesis, dizziness or collapse. Timed appointment after his shift. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Doubles the omeprazole over the phone; never asks about black stools or bought medicines; offers H. pylori test and treat; no same-day assessment and no bleeding safety-net.",
    "pass": "Recognises the alarm features and asks about melaena; stops the ibuprofen; refers on the suspected cancer pathway under NICE NG12 (updated April 2026); arranges bloods; gives a bleeding safety-net.",
    "exc": "All of the above, plus: judges acuity on the call and arranges a same-day face-to-face review; explains why a stronger PPI could hide the problem; names his fear and the work pressure; fits the visit around his shift without conceding urgency; plans the back pain without NSAIDs; teach-back."
   },
   "avoid": [
    {
     "dont": "“No problem — I’ll double your omeprazole and review in a month.”",
     "instead": "“A stronger tablet could hide what’s going on. With weight loss and black stools we need to look properly.”",
     "why": "Escalating acid suppression for alarm-feature dyspepsia delays diagnosis and misses a possible bleed."
    },
    {
     "dont": "“Let’s do an H. pylori test first and treat that.”",
     "instead": "“You need a camera test urgently — they can check for H. pylori at the same time.”",
     "why": "Test and treat is for dyspepsia without alarm features (NICE CG184)."
    },
    {
     "dont": "“If work’s that busy, come in next week when you can.”",
     "instead": "“I can see you at the end of your shift, but it does need to be today.”",
     "why": "Possible GI bleeding cannot wait for a convenient slot; tailor the time, not the urgency."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work pressure and avoidance",
     "t": "A supervisor in a short-staffed warehouse fears being seen as unreliable. Offer a slot after his shift and explain how short the endoscopy is; this turns a refusal into attendance."
    },
    {
     "h": "Smoking",
     "t": "Smoking adds to ulcer and cancer risk. Note it and offer stop-smoking support at a later contact (NICE NG209, 2021) — not in the middle of a possible bleed."
    }
   ],
   "legal": [
    {
     "h": "Fit notes",
     "t": "Employees self-certify for the first 7 days of sickness absence; a fit note is needed after that. A single endoscopy morning rarely needs one."
    },
    {
     "h": "Driving after sedation",
     "t": "If he has sedation for endoscopy he must not drive home and needs someone to collect him."
    }
   ],
   "professional": [
    {
     "h": "Remote prescribing",
     "t": "GMC Good practice in prescribing and managing medicines and devices (2021): prescribe remotely only when you have enough information to do so safely. Alarm features and possible bleeding mean he must be assessed in person."
    },
    {
     "h": "Complete medication record",
     "t": "Record over-the-counter ibuprofen on his notes so future prescribers see it; this is a patient-safety issue, not just good housekeeping."
    },
    {
     "h": "Tracking the referral",
     "t": "Suspected cancer referrals and urgent blood results should be tracked; the doctor who refers owns the follow-up."
    }
   ],
   "community": [
    {
     "h": "Patient resources",
     "t": "Guts UK and Macmillan Cancer Support for information; the community pharmacist for advice on safer over-the-counter pain relief; local stop-smoking service."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Dyspepsia that has changed and persists despite a PPI; early satiety",
     "About 5 kg unintended weight loss at 58",
     "Black stools once or twice — ask about haematemesis, dizziness, palpitations and collapse now"
    ],
    "psychosocial": [
     "Short-staffed warehouse; fears being seen as unreliable",
     "Daily over-the-counter ibuprofen for back pain, not on his record",
     "Smoker; H. pylori never tested"
    ],
    "ice": [
     "Idea: “It’s just a bad patch of my usual indigestion”",
     "Concern: frightened by the weight loss and black stools, and by time off work",
     "Expectation: a stronger omeprazole script with no visit"
    ]
   },
   "diagnosis": "Be honest: “This isn’t your usual indigestion. With weight loss, feeling full quickly and black stools, I’m worried about bleeding in the stomach — often an ulcer from ibuprofen — and I need to rule out anything more serious with an urgent camera test.”",
   "diagnosisLay": "“Your stomach has been sending the same message for years. Now it’s sending a different one — and the black stools are like finding oil under the car. We don’t just top up the oil; we find the leak.”",
   "management": {
    "reflectIce": "“You’ve been worried about this and about work at the same time — that’s hard. Getting seen today is the quickest way back to feeling in control.”",
    "psychosocial": "Offer a same-day slot after his shift; explain self-certification and fit notes; reassure that endoscopy is usually a single morning.",
    "sharedPlan": [
     "Stop ibuprofen today; continue omeprazole; same-day face-to-face check with urgent FBC and U&E",
     "NICE NG12 (updated April 2026): suspected cancer pathway referral for oesophageal or stomach cancer (55+ with weight loss and dyspepsia), often straight to endoscopy; H. pylori tested at endoscopy",
     "Back pain managed without NSAIDs (NICE NG59); stop-smoking support later"
    ],
    "safetyNet": [
     "More black stools, vomiting blood or coffee grounds, dizziness, faintness or racing heart → 999 or A&E",
     "Follow-up of bloods and endoscopy result; confirm the hospital date arrives"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Dyspepsia",
    "s": "Case walkthrough · NICE CG184 and NICE NG12 (updated April 2026)",
    "href": "../cases/dyspepsia.html"
   },
   {
    "ic": "🗺️",
    "t": "Dyspepsia",
    "s": "Visual algorithm · alarm features",
    "href": "algorithms/dyspepsia.html"
   },
   {
    "ic": "🗺️",
    "t": "Haematemesis",
    "s": "Visual algorithm · upper GI bleeding and melaena",
    "href": "algorithms/haematemesis.html"
   },
   {
    "ic": "💠",
    "t": "GORD",
    "s": "Protocol · PPIs and H. pylori testing",
    "href": "management/gord.html"
   }
  ],
  "pitfalls": {
   "intro": "This telephone station is built to tempt a quick prescription. It is passed by asking two direct questions — about black stools and bought medicines — and failed by answering the request instead of the patient.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Increasing the omeprazole over the phone as requested.",
     "why": "“Management plan not in line with current UK best practice.” Weight loss with dyspepsia at 55 and over meets NICE NG12 (updated April 2026) for a suspected cancer pathway referral; a higher PPI dose masks the picture.",
     "fix": "Ask what has changed, find the alarm features, then explain why a stronger tablet is the wrong kindness."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about black stools or vomiting blood.",
     "why": "Patients rarely volunteer melaena; missing it misses the most urgent part of the case.",
     "fix": "“I need to ask directly — have your stools been black, tarry or sticky?”"
    },
    {
     "dom": "tasks",
     "fail": "Missing the over-the-counter ibuprofen because it is not on the record.",
     "why": "Unrecorded NSAIDs are a leading cause of ulcers and bleeding; stopping them is part of the treatment.",
     "fix": "“Anything from the chemist, for pain or anything else?” Then stop it and record it."
    },
    {
     "dom": "tasks",
     "fail": "Referring for endoscopy but leaving possible bleeding to wait two weeks.",
     "why": "Black stools need same-day assessment of pulse, blood pressure and Hb; an unstable patient needs emergency admission.",
     "fix": "Judge acuity on the call, then see him today and send the urgent referral."
    },
    {
     "dom": "rto",
     "fail": "Arguing with him about work or telling him his job doesn’t matter.",
     "why": "Dismissing his real constraint loses him; examiners reward negotiation that keeps the clinical line.",
     "fix": "Tailor the time — after his shift — but not the urgency."
    },
    {
     "dom": "gs",
     "fail": "A vague “ring back if it gets worse” close.",
     "why": "Non-specific safety-netting is a standard failing feedback statement, and here it is dangerous.",
     "fix": "Name the 999 triggers — more black stools, vomiting blood, dizziness, racing heart — and use teach-back."
    }
   ]
  }
 },
 "dysphagia-2ww": {
  "stem": {
   "name": "Brian Halloran",
   "age": "66-year-old man",
   "pmh": [
    "Gastro-oesophageal reflux (long-standing)",
    "Ex-smoker — 30 pack-years"
   ],
   "meds": [
    "Over-the-counter antacids (self-bought, not on repeat)"
   ],
   "allergy": "No known drug allergies",
   "recent": "Long reflux history, self-managed with over-the-counter antacids. Retired publican. Alcohol about 30 units a week. No recent bloods or weight on file.",
   "reason": "Video appointment — “swallowing a bit off, wants something stronger for reflux”."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) — oesophageal and stomach cancer · NICE CG184 (2014, updated 2019) — GORD and dyspepsia in adults · UK Chief Medical Officers’ low-risk drinking guidelines (2016)",
   "summary": "Six weeks of progressive difficulty swallowing solids with 7 kg unintended weight loss is oesophageal cancer until proven otherwise. NICE NG12 (updated April 2026) calls for a suspected cancer pathway referral for dysphagia at any age — no PPI trial first, and not stronger antacids.",
   "points": [
    {
     "h": "The NICE NG12 (updated April 2026) criterion",
     "t": "NICE NG12 (updated April 2026), recommendations 1.2.1 and 1.2.7 (amended 2025): refer people using a suspected cancer pathway referral for oesophageal or stomach cancer if they have dysphagia, or are aged 55 and over with weight loss and any of upper abdominal pain, reflux or dyspepsia. This replaced the earlier urgent direct-access endoscopy route. Brian meets both limbs."
    },
    {
     "h": "Characterise the swallow",
     "t": "Food sticking that has worsened from solids over weeks points to a mechanical narrowing — tumour or peptic stricture. Intermittent difficulty with both solids and liquids from the start suggests a motility problem. Ask about level, pain on swallowing, regurgitation, cough on swallowing and liquids."
    },
    {
     "h": "Risk factors stack up",
     "t": "Long-standing reflux (Barrett’s oesophagus and adenocarcinoma), 30 pack-years of smoking and heavy drinking (squamous cell carcinoma), male sex and age. Their presence adds urgency; their absence would not remove it."
    },
    {
     "h": "Do not treat it as reflux",
     "t": "NICE CG184 manages uncomplicated dyspepsia and reflux with lifestyle advice, a PPI trial and H. pylori testing. That pathway does not apply once dysphagia is present — escalating acid suppression delays the diagnosis."
    },
    {
     "h": "Examine and check bloods",
     "t": "In person: weight and BMI, hydration, neck and supraclavicular nodes, epigastric mass. FBC for anaemia, U&E if intake is poor, LFTs. None of this should hold up the endoscopy request."
    },
    {
     "h": "When it becomes an emergency",
     "t": "Unable to swallow saliva, food stuck and not passing, vomiting blood or significant dehydration — same-day emergency assessment, not the 2-week pathway."
    },
    {
     "h": "Alcohol without shaming",
     "t": "UK CMOs (2016): regular drinking should stay at or below 14 units a week. Record intake accurately and offer support later; a lecture now risks losing a frightened man from the pathway."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Morning Mr Halloran, I’m Dr Lee. Can you see and hear me all right, and are you somewhere you can talk? … Lovely. Tell me about the swallowing.",
    "dom": "rto",
    "why": "Checks the video set-up then opens on his main symptom"
   },
   {
    "who": "pt",
    "text": "Food sticks going down — bread, a bit of steak. I’ve started cutting it small. It’s my reflux, or getting old. I just want something stronger than the chemist’s stuff. Lost a bit of weight too, but I could do with losing it, ha."
   },
   {
    "who": "dr",
    "text": "I’ll come to the tablets, I promise. Can I spend a few minutes understanding the swallowing properly first, then we’ll decide together what’s best? And I noticed the weight — I’d like to come back to that too.",
    "dom": "gs",
    "why": "Agrees an agenda and flags the weight loss he joked away"
   },
   {
    "who": "pt",
    "text": "Go on, then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When did you first notice food sticking, and has it stayed the same or got worse?",
    "dom": "tasks",
    "why": "Establishes onset and progression"
   },
   {
    "who": "pt",
    "text": "About six weeks. It’s definitely worse. Started with bread, now meat too. Soup’s fine."
   },
   {
    "who": "dr",
    "text": "Where do you feel it stick — point to it for me? And is it painful when it goes down, or does food ever come back up?",
    "dom": "tasks",
    "why": "Level, odynophagia and regurgitation"
   },
   {
    "who": "pt",
    "text": "Round here, behind the breastbone. A bit uncomfortable sometimes. It doesn’t come back up."
   },
   {
    "who": "dr",
    "text": "Can you still swallow drinks and your own saliva without trouble?",
    "dom": "tasks",
    "why": "Screens for complete obstruction — an emergency"
   },
   {
    "who": "pt",
    "text": "Yes, drinks are fine."
   },
   {
    "who": "dr",
    "text": "And the weight — roughly how much, over what time? Any vomiting blood, or black stools?",
    "dom": "tasks",
    "why": "Quantifies weight loss and screens for bleeding"
   },
   {
    "who": "pt",
    "text": "Seven kilos, maybe — my trousers are loose. No blood. Bit more tired."
   },
   {
    "who": "dr",
    "text": "Thank you. Tell me a bit about day-to-day life — do you smoke or drink these days?",
    "dom": "tasks",
    "why": "Risk factors, asked neutrally"
   },
   {
    "who": "pt",
    "text": "Gave up the fags years ago — thirty years of them, mind. I ran a pub. I still like a drink. About thirty units a week, I reckon. I know, I know."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "You don’t need to apologise to me. I noticed you laughed about the weight — can I ask, has anything in particular been worrying you about all this?",
    "dom": "rto",
    "why": "Removes blame and reads the humour as a cue"
   },
   {
    "who": "pt",
    "text": "…A mate of mine. Throat cancer. Died not long ago. His started with food sticking. I keep telling myself mine’s just reflux."
   },
   {
    "who": "dr",
    "text": "I’m so sorry about your friend. That makes complete sense of why reflux felt like the safer word. It must have been sitting heavily on you.",
    "dom": "rto",
    "why": "Validates the fear behind the minimising"
   },
   {
    "who": "pt",
    "text": "It has. And I suppose if it is something, it’s my own fault, isn’t it? The pub, the smoking."
   },
   {
    "who": "dr",
    "text": "I’m not here to blame you for anything. What matters today is getting you seen quickly.",
    "dom": "rto",
    "why": "Addresses guilt without a lecture"
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "So I’ll be honest with you. Food sticking that’s getting steadily worse, plus seven kilos gone without trying, isn’t ordinary reflux or age. Stronger antacids would just cover it up. What you need is a camera test of your gullet and stomach — an endoscopy.",
    "dom": "tasks",
    "why": "Declines the reflux reframe and names the investigation"
   },
   {
    "who": "pt",
    "text": "So it is what I thought."
   },
   {
    "who": "dr",
    "text": "It might not be. Narrowing from years of acid is common and treatable, and so is inflammation. But national guidance is clear: anyone with swallowing trouble gets an urgent referral on the suspected cancer pathway, which usually means a quick camera test — that’s about being sure quickly, not a verdict.",
    "dom": "tasks",
    "why": "States the NICE NG12 (updated April 2026) dysphagia criterion (a suspected cancer pathway referral) and what happens next, balanced honestly"
   },
   {
    "who": "dr",
    "text": "I’d also like to see you in person — to weigh you, feel your tummy and neck — and take a blood count and some routine bloods. None of that will hold up the referral; I’ll send it today.",
    "dom": "tasks",
    "why": "Examination and bloods alongside, not instead of, the referral"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "How are you managing with meals at the moment, day to day?",
    "dom": "rto",
    "why": "Explores the practical and nutritional impact"
   },
   {
    "who": "pt",
    "text": "Since the wife passed I mostly eat on my own. Easier to skip it, if I’m honest."
   },
   {
    "who": "dr",
    "text": "That’s useful to know. Until the test, go for softer, moist food — soups, stews, mash, yoghurt — little and often, and take your time. If the weight keeps dropping we can get dietitian advice. And the drink — we can talk about cutting down another day, when you’re ready. Today is about the test.",
    "dom": "gs",
    "why": "Practical interim plan; defers the alcohol conversation without ignoring it"
   },
   {
    "who": "pt",
    "text": "That’s fair. I’d rather know than keep guessing."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If food gets stuck and won’t go down, you can’t swallow your own spit, or you vomit blood — go to A&E straight away, don’t wait for the appointment. The hospital will phone you with a date; if you haven’t heard within a week, ring me.",
    "dom": "gs",
    "why": "Emergency triggers and a clear fallback if the appointment doesn’t come"
   },
   {
    "who": "dr",
    "text": "Can you tell me in your own words what we’ve agreed, so I know I’ve explained it properly?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Camera test in the next two weeks, bloods and a check-up with you, soft food meantime, and A&E if it all gets stuck or I bring up blood."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll go through the result with you myself. Thank you for telling me about your friend — it helps.",
    "dom": "rto",
    "why": "Commits to follow-up and closes with warmth"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question on the swallowing; did not jump to prescribing; noted the joked-about weight loss for later.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Retired publican, smoking and alcohol history asked without blame, eating alone as a widower, how meals are going.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "The laugh about weight, “it’s my own fault”, and the friend who died — each explored rather than passed over.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (reflux or ageing), the hidden concern (the same throat cancer as his friend, and guilt), expectation of stronger antacids.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Face-to-face weight, abdominal and neck examination; FBC, U&E, LFTs; suspected cancer pathway referral (often straight to OGD).",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Oesophageal or gastric cancer, peptic stricture, oesophagitis, motility disorder; progressive solid-food dysphagia weighed as mechanical.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Checked liquids and saliva, level, odynophagia, regurgitation, weight, bleeding; knows complete obstruction or haematemesis means same-day care.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "States a suspected upper GI cancer picture needing an urgent suspected cancer pathway referral, not reflux, in plain language and without false certainty.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "NICE NG12 (updated April 2026): dysphagia at any age → suspected cancer pathway referral for oesophageal or stomach cancer; no PPI trial first; referral sent today.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Soft diet, weight monitoring and dietitian if needed; alcohol recorded and support offered later without shaming.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "A&E triggers named, ring if no hospital date within a week, GP reviews the result, teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Older adults"
   ],
   "stem": {
    "name": "Brian Halloran",
    "age": "66 years · male",
    "pmh": [
     "GORD (long-standing)",
     "Ex-smoker, 30 pack-years"
    ],
    "meds": [
     "OTC antacids (patient-reported)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Alcohol ~30 units/week recorded. No recent weight or bloods on file.",
    "reason": "Video consultation. “My swallowing’s a bit off — can I have something stronger for my reflux?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agree agenda",
     "d": "He opens with reflux, age and stronger tablets, and jokes about the weight. Agree to explore the swallow first; flag the weight."
    },
    {
     "t": "1–5",
     "h": "Characterise the dysphagia",
     "d": "Onset, progression, solids versus liquids, level, pain, regurgitation, saliva, weight, bleeding. Smoking and alcohol asked neutrally."
    },
    {
     "t": "5–7",
     "h": "ICE and the hidden fear",
     "d": "Read the humour as a shield. The friend who died of throat cancer; guilt about the pub years. No blame."
    },
    {
     "t": "7–10",
     "h": "Explain and plan",
     "d": "Not reflux. NICE NG12 (updated April 2026): dysphagia → suspected cancer pathway referral (often straight to OGD), referral today. Face-to-face exam and bloods alongside. Soft diet."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Can’t swallow saliva, food stuck, vomiting blood → A&E. Ring if no date in a week. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes a PPI or stronger antacid and reviews in a month; never characterises the swallow; lets the weight-loss joke pass; lectures about drink and smoking; no safety-net for complete obstruction.",
    "pass": "Recognises progressive dysphagia with weight loss as a red flag; refers on the suspected cancer pathway under NICE NG12 (updated April 2026); asks about the key features and bleeding; acknowledges his worry; gives a basic safety-net.",
    "exc": "All of the above, plus: reads the humour as fear and surfaces his friend’s death; takes the guilt away rather than adding to it; explains why stronger tablets would be the wrong kindness; practical soft-diet plan for a man eating alone; clear fallback if the hospital date does not arrive; teach-back."
   },
   "avoid": [
    {
     "dont": "“Let’s try a stronger acid tablet for a month and see if the swallowing improves.”",
     "instead": "“Stronger tablets could cover this up. With swallowing trouble, the right step is an urgent referral for a camera test.”",
     "why": "NICE NG12 (updated April 2026) does not require a PPI trial before referring dysphagia; a trial is a recognised cause of delayed diagnosis."
    },
    {
     "dont": "“Well, with thirty years of smoking and all that drinking, this isn’t a surprise.”",
     "instead": "“I’m not here to blame you. What matters today is getting you seen quickly.”",
     "why": "Shaming a frightened man with guilt already on his mind risks him not attending."
    },
    {
     "dont": "“Don’t worry, it’s probably just a narrowing from the acid.”",
     "instead": "“It could well be something treatable — and because I can’t tell which, we check quickly.”",
     "why": "False reassurance undermines the urgency and the honesty the station rewards."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Bereaved and eating alone",
     "t": "A widower who now eats alone and skips meals is at risk of further weight loss and dehydration while he waits; give simple soft-diet advice and watch his weight."
    },
    {
     "h": "Alcohol and identity",
     "t": "A lifetime in the pub trade shapes how he sees his drinking. Record units accurately, avoid blame, and offer brief intervention or support when he is ready (UK CMOs 2016: no more than 14 units a week)."
    }
   ],
   "legal": [
    {
     "h": "Driving after sedation",
     "t": "If sedation is used for the endoscopy he must not drive home; the unit will say how long to avoid driving. There is no DVLA notification for the investigation itself."
    }
   ],
   "professional": [
    {
     "h": "Remote consultation limits",
     "t": "GMC Good medical practice (2024): see the patient in person when remote assessment cannot meet their needs safely — weight and examination here — without letting it delay the referral."
    },
    {
     "h": "Honest information",
     "t": "GMC Decision making and consent (2020): share what he needs to know honestly and at his pace, without false reassurance. Document the red flags, the referral and the safety-net."
    },
    {
     "h": "Tracking the referral",
     "t": "Practice systems should track suspected cancer referrals to confirm he is seen; the doctor who refers owns the follow-up of the result."
    }
   ],
   "community": [
    {
     "h": "Patient resources",
     "t": "Macmillan Cancer Support and Guts UK for information while waiting; local alcohol support services when he is ready; bereavement support such as Cruse."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Progressive dysphagia to solids over six weeks — food sticking behind the sternum",
     "About 7 kg unintended weight loss and tiredness",
     "Check for complete obstruction (saliva), food bolus, haematemesis or melaena — same-day if present"
    ],
    "psychosocial": [
     "Retired publican; 30 pack-years (ex-smoker) and about 30 units a week",
     "Widower eating alone and skipping meals",
     "Guilt that his lifestyle may have caused this"
    ],
    "ice": [
     "Idea: “It’s my reflux, or just getting older”",
     "Concern: a friend died of throat cancer that started with food sticking",
     "Expectation: stronger indigestion tablets"
    ]
   },
   "diagnosis": "Be honest that this is not simple reflux: “Food sticking that’s getting worse, with weight loss, needs a camera test urgently to find the cause — it may be a treatable narrowing, but it could be a cancer, and we need to know quickly.”",
   "diagnosisLay": "“Think of your gullet as a pipe. Food catching more and more, week by week, tells me something may be narrowing it. Stronger antacids would be like putting a sign on the pipe — the camera lets us look inside and fix it.”",
   "management": {
    "reflectIce": "“After losing your friend the way you did, of course ‘reflux’ felt safer to say. Getting you seen quickly is how we replace the guessing with an answer.”",
    "psychosocial": "No blame for the smoking or drinking today; a soft-diet plan for a man eating alone; alcohol support offered later, when he is ready.",
    "sharedPlan": [
     "NICE NG12 (updated April 2026): suspected cancer pathway referral for oesophageal or stomach cancer because of the dysphagia — referral sent today",
     "Face-to-face weight, abdominal and neck examination; FBC, U&E, LFTs — without delaying the referral",
     "Soft, moist food little and often; dietitian if weight keeps falling"
    ],
    "safetyNet": [
     "Food stuck and not passing, cannot swallow saliva, vomiting blood → A&E",
     "Ring the surgery if no hospital date within a week; GP reviews the result with him"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Dysphagia",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) suspected cancer pathway referral",
    "href": "algorithms/dysphagia.html"
   },
   {
    "ic": "💠",
    "t": "GORD",
    "s": "Protocol · reflux and when to scope",
    "href": "management/gord.html"
   },
   {
    "ic": "🗺️",
    "t": "Weight loss",
    "s": "Visual algorithm · unexplained weight loss",
    "href": "algorithms/weight-loss.html"
   },
   {
    "ic": "💠",
    "t": "Problem drinking",
    "s": "Protocol · alcohol brief intervention",
    "href": "management/alcohol-problem-drinking.html"
   }
  ],
  "pitfalls": {
   "intro": "Candidates rarely miss that dysphagia is a red flag once they hear it described — they lose marks by accepting “reflux” too early, by lecturing about alcohol, or by failing to hear the fear behind the jokes.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing a PPI and reviewing in four weeks because he has a long reflux history.",
     "why": "“Management plan not in line with current UK best practice.” NICE NG12 (updated April 2026) calls for a suspected cancer pathway referral for dysphagia at any age; the CG184 reflux pathway no longer applies.",
     "fix": "“Stronger tablets could hide this. Swallowing trouble means an urgent referral for a camera test — I’ll send it today.”"
    },
    {
     "dom": "tasks",
     "fail": "Never asking whether he can swallow liquids or saliva, or about vomiting blood.",
     "why": "Complete obstruction and bleeding change the pathway to same-day care; examiners look for this screen.",
     "fix": "Two quick questions: “Can you still drink and swallow your own saliva? Any blood?”"
    },
    {
     "dom": "tasks",
     "fail": "Waiting for bloods or an examination before sending the referral.",
     "why": "The referral criterion is met on history alone; tests are supportive and must not add delay.",
     "fix": "Send the referral today and book the examination and bloods alongside."
    },
    {
     "dom": "rto",
     "fail": "Laughing along with “I could do with losing it”.",
     "why": "“Does not identify or respond to the patient’s cues.” The humour hides fear and unintended weight loss is a red flag.",
     "fix": "“You laughed about the weight — has anything in particular been worrying you?”"
    },
    {
     "dom": "rto",
     "fail": "A lecture on alcohol units and smoking in the middle of the explanation.",
     "why": "He already feels it is his fault; shaming reduces engagement and wastes time the plan needs.",
     "fix": "Record the history neutrally, remove the blame, and offer support at a later appointment."
    },
    {
     "dom": "gs",
     "fail": "Leaving no plan for how he eats while he waits.",
     "why": "A widower skipping meals with dysphagia can lose weight and fluid quickly; a tailored plan scores.",
     "fix": "Soft, moist food little and often, weight check at the examination, dietitian if needed."
    },
    {
     "dom": "gs",
     "fail": "Ending with “the hospital will be in touch” and no named emergency triggers.",
     "why": "Non-specific safety-netting and no fallback for a lost referral are standard failing feedback.",
     "fix": "Name A&E triggers, “ring me if no date within a week”, and teach-back."
    }
   ]
  }
 },
 "gambling-insomnia": {
  "stem": {
   "name": "Ryan Doherty",
   "age": "33-year-old man",
   "pmh": [
    "No significant past medical history recorded",
    "No previous mental health contact recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "No consultations on record for sleep or mood. Works as a warehouse team leader. Partner is pregnant.",
   "reason": "Video appointment booked: “can’t sleep — wants something to help”."
  },
  "knowledge": {
   "guideline": "NICE NG248 (2025) · NICE NG225 (2022) · NICE TA77 · NICE NG222 (2022, updated December 2025) · BNF",
   "summary": "“Give me something to sleep, I don’t want the why” is a request to look for the why. Here it is gambling harm with concealed debt and suicidal thinking. Ask about gambling and suicide directly, respond to risk the same day, and treat the gambling as a health problem with specialist help.",
   "points": [
    {
     "h": "Insomnia is the symptom",
     "t": "NICE TA77: hypnotics only after non-drug measures have been considered, for severe insomnia, and for short periods only. A new hypnotic for a man who is drinking more and thinking about dying adds sedation and a stock of tablets, and treats nothing."
    },
    {
     "h": "Ask about gambling",
     "t": "NICE NG248: use a person-centred, empathic and non-judgemental approach, mindful of the shame, fear and stigma of disclosure. Gambling harm hides behind sleep problems, low mood, alcohol and money worries. The PGSI (Problem Gambling Severity Index) scores 0–27; 8 or more suggests the person, or those close to them, are likely experiencing gambling-related harm."
    },
    {
     "h": "Suicide: ask directly",
     "t": "NICE NG248: gambling harm includes suicidal thoughts; ask about them directly. Explore thoughts, plans, intent, preparation (looking at a life-insurance policy counts), access to means, alcohol and protective factors. Asking does not plant the idea."
    },
    {
     "h": "No risk scores",
     "t": "NICE NG225: do not use risk assessment tools or a low/medium/high label to predict suicide or decide who gets care. Base the response on his needs and what he tells you: hopelessness, debt, shame, alcohol and a preparatory act justify same-day mental health crisis involvement."
    },
    {
     "h": "Treating gambling harm",
     "t": "NICE NG248: group CBT is the first psychological treatment. NHS specialist gambling services and the National Gambling Support Network take referrals, including self-referral via the National Gambling Helpline (0808 8020 133, 24 hours). Naltrexone is only considered by a specialist if psychological therapy has not worked (off-label)."
    },
    {
     "h": "Practical harm reduction",
     "t": "Blocking and self-exclusion: GamStop (online operators licensed in Great Britain, for 6 months, 1 year or 5 years) and bank gambling blocks. Free debt advice: StepChange, National Debtline, Citizens Advice. Alcohol: AUDIT-C, and the UK CMO low-risk limit of 14 units a week. Screen mood (NICE NG222)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Ryan, I’m one of the GPs. You look shattered — tell me what the nights have been like.",
    "dom": "rto",
    "why": "Opens with his experience rather than the prescription"
   },
   {
    "who": "pt",
    "text": "Rubbish. My head won’t switch off. I lie there racing, then I’m wrecked at work. It’s just stress — the job’s full on. Could you give me something to help me sleep? I don’t really want to get into all the why."
   },
   {
    "who": "dr",
    "text": "I can hear how exhausted you are, and I do want to help you sleep. I’ll be honest with you, though: if I give you tablets without understanding what’s keeping you awake, I could miss the thing that actually needs sorting. Can we spend a few minutes on that first, then talk about sleep? No judgement here.",
    "dom": "gs",
    "why": "Names the request, explains why the cause matters and agrees an agenda"
   },
   {
    "who": "pt",
    "text": "I suppose. It’s just work, though."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When your head is racing at three in the morning, what is it racing about?",
    "dom": "tasks",
    "why": "Targeted open question aimed at the driver of the insomnia"
   },
   {
    "who": "pt",
    "text": "Everything. Money. Work. The baby coming."
   },
   {
    "who": "dr",
    "text": "Money is one of the commonest things that keeps people awake. Sometimes it’s bills, sometimes it’s drinking or betting that’s got out of hand. Is any of that in the mix for you?",
    "dom": "tasks",
    "why": "Asks about gambling directly and normalises it"
   },
   {
    "who": "pt",
    "text": "(long pause) …The betting. It’s got out of hand. Online. I keep trying to win it back. There’s about forty grand on cards and loans now. My partner doesn’t know. She’s pregnant."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That took real courage. Gambling that has spiralled like this is a recognised health problem, not a character flaw — these apps are built to hook people. It is also something we can help with.",
    "dom": "rto",
    "why": "Receives the disclosure without judgement and reframes it as treatable"
   },
   {
    "who": "dr",
    "text": "You mentioned drinking more — how much are you drinking in a typical week now?",
    "dom": "tasks",
    "why": "Quantifies alcohol as a risk multiplier"
   },
   {
    "who": "pt",
    "text": "More than I should. Most nights, to knock myself out."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "When things are this heavy, and secret, some people start to feel that everyone would be better off without them. Has anything like that crossed your mind?",
    "dom": "tasks",
    "why": "Asks explicitly about suicidal thoughts"
   },
   {
    "who": "pt",
    "text": "(quietly) Sometimes I think they’d be better off with the life insurance. I looked at the policy last week. I haven’t done anything. I just feel trapped."
   },
   {
    "who": "dr",
    "text": "I’m really glad you told me, Ryan, and I’m taking it seriously, because you matter far more than any debt. Can I ask a bit more — how often do these thoughts come, and have you thought about how you might do it?",
    "dom": "tasks",
    "why": "Explores frequency, plan and preparation after a preparatory act"
   },
   {
    "who": "pt",
    "text": "Most nights now. I haven’t got that far. I just don’t see a way out."
   },
   {
    "who": "dr",
    "text": "What keeps you going when it’s at its worst?",
    "dom": "tasks",
    "why": "Identifies protective factors"
   },
   {
    "who": "pt",
    "text": "The baby. And her. That’s why I can’t tell her."
   },
   {
    "who": "dr",
    "text": "So the thing you most want to protect is also the thing you feel you can’t face. That makes a lot of sense. What did you hope I’d do today?",
    "dom": "rto",
    "why": "Reflects the dilemma and checks his expectations"
   },
   {
    "who": "pt",
    "text": "Honestly? Knock me out so I stop thinking. I didn’t plan on saying any of this."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s what I think is going on. The sleep problem is real, but it’s the smoke, not the fire. The fire is gambling that has become an addiction, a debt you’re carrying alone, and thoughts of dying that are coming most nights. I want to deal with all three, starting with keeping you safe.",
    "dom": "tasks",
    "why": "Gives a clear working formulation in plain words"
   },
   {
    "who": "dr",
    "text": "About the insurance thought — the debt is lying to you. Your partner and your baby need you, not a payout. Forty thousand pounds is a problem that people get through with the right help. Losing you is not.",
    "dom": "rto",
    "why": "Challenges the ‘better off without me’ belief with compassion"
   },
   {
    "who": "pt",
    "text": "It doesn’t feel fixable at three in the morning."
   },
   {
    "who": "dr",
    "text": "No, and that’s exactly why I don’t want to give you sleeping tablets today. With the drinking and these thoughts, a box of tablets at home is a risk, not a help. Instead, I’d like the mental health crisis team to speak to you today. Would you be okay with me calling them now, while we’re talking?",
    "dom": "tasks",
    "why": "Declines the hypnotic for safety and arranges same-day crisis involvement"
   },
   {
    "who": "pt",
    "text": "Today? …Okay. If you think so."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Then there’s the gambling itself. There are free NHS and national services that treat this — group therapy works well. The National Gambling Helpline is open 24 hours and can link you in, and I’ll refer you too. You can also block the betting sites today with GamStop and turn on a gambling block with your bank.",
    "dom": "tasks",
    "why": "Specialist treatment, self-exclusion and blocking made concrete"
   },
   {
    "who": "pt",
    "text": "I didn’t know you could block them all."
   },
   {
    "who": "dr",
    "text": "And the debt: free debt charities negotiate with lenders every day and can often freeze the pressure. Would you be willing to ring one this week? Meanwhile, could we agree the drinking stays down while the crisis team works with you?",
    "dom": "rto",
    "why": "Shares decisions on debt advice and alcohol reduction"
   },
   {
    "who": "pt",
    "text": "Yeah. I can try to cut the drinking."
   },
   {
    "who": "dr",
    "text": "About your partner — that’s your decision and your timing. Many people find the secret is heavier than the debt. If and when you want to tell her, I or the gambling service can help you plan how, and there’s support for partners too.",
    "dom": "rto",
    "why": "Supports disclosure at his pace without pressure"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Let’s write a safety plan together now: what sets the thoughts off, what helps, who you can call. If you ever feel you might act on these thoughts, call 999 or go to A&E, or call NHS 111 and choose the mental health option. I’ll see you again within a couple of days. Does that feel doable?",
    "dom": "gs",
    "why": "Safety plan, explicit crisis routes and early follow-up"
   },
   {
    "who": "pt",
    "text": "Yeah. It feels a bit less like I’m drowning."
   },
   {
    "who": "dr",
    "text": "Can you tell me in your own words what happens after this call, so I know I’ve explained it well?",
    "dom": "gs",
    "why": "Checks understanding with teach-back"
   },
   {
    "who": "pt",
    "text": "Crisis team rings me today. I call the gambling helpline and block the sites. Debt charity this week. See you in two days. And if it gets bad, 999 or A&E."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question about the nights; acknowledged the sleep request without prescribing on it; let him explain before narrowing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work, pregnant partner, money worries, drinking to sleep, secrecy and shame.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I don’t want the why”, “money” and “drinking more”, and explored each gently.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (work stress), concern (the secret debt and his partner finding out), expectation (sleeping tablets, no questions).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Face-to-face review if needed; PHQ-9 and AUDIT-C; PGSI to measure gambling severity; physical health only as indicated.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Primary insomnia vs depression vs anxiety vs alcohol vs gambling harm; tested the stress explanation.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked directly about suicidal thoughts, frequency, plan, preparation (life-insurance policy), means, alcohol and protective factors.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Gambling harm with concealed debt, secondary insomnia, increasing alcohol use and suicidal thoughts with a preparatory act, stated plainly.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Declined a hypnotic for safety; same-day crisis team contact; specialist gambling referral; GamStop and bank block; debt advice.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Alcohol reduction agreed; mood screen; partner support offered at his pace.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Written safety plan; 999, A&E and NHS 111 mental health option named; review within two days; risk documented.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Ryan Doherty",
    "age": "33 years · male",
    "pmh": [
     "Nil significant",
     "No previous mental health contact"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "No previous sleep or mood consultations. Warehouse team leader. Partner pregnant.",
    "reason": "“I just need something to help me sleep.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agree the agenda",
     "d": "He asks for tablets and closes the door on “the why”. Acknowledge the exhaustion, then explain kindly why you need the cause first."
    },
    {
     "t": "1–4",
     "h": "What is the head racing about?",
     "d": "Money, alcohol and gambling asked about directly and normalised. The gambling and £40k debt surface only with a non-judgemental question."
    },
    {
     "t": "4–6",
     "h": "Suicide, asked explicitly",
     "d": "Thoughts, frequency, plan, the insurance policy, means, alcohol, protective factors. Then his expectation: “knock me out”."
    },
    {
     "t": "6–10",
     "h": "Formulate and plan",
     "d": "Sleep is the smoke; gambling harm, debt and suicidal thoughts are the fire. No hypnotic. Same-day crisis team, gambling referral, GamStop, debt advice, alcohol."
    },
    {
     "t": "10–12",
     "h": "Safety plan and close",
     "d": "Written safety plan, named crisis routes, review within two days, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes zopiclone for “work stress” and ends the call; never asks about money, alcohol or gambling; if gambling surfaces, moralises or skips the suicide question; no crisis route and no follow-up.",
    "pass": "Explores the cause of the insomnia and finds the gambling; asks directly about suicidal thoughts; declines a hypnotic; signposts gambling support and debt advice; arranges early follow-up with crisis numbers.",
    "exc": "All of the above, plus: makes disclosure feel safe; explores the insurance thought as a preparatory act and arranges same-day crisis contact with his agreement; dismantles “they’re better off without me”; makes blocking and debt help concrete today; supports telling his partner at his pace; teach-back."
   },
   "avoid": [
    {
     "dont": "“Sounds like stress — I’ll give you a week of sleeping tablets.”",
     "instead": "“A head that won’t switch off is usually racing about something. Can we look at what, before we talk tablets?”",
     "why": "Prescribing on the request misses a life-threatening situation and hands a stock of tablets to someone at risk."
    },
    {
     "dont": "“Forty thousand pounds? How did you let it get that far?”",
     "instead": "“Thank you for telling me. Gambling that spirals like this is an addiction, and it’s treatable.”",
     "why": "Moralising ends disclosure; NICE NG248 asks for an empathic, non-judgemental approach."
    },
    {
     "dont": "“You’re not thinking of doing anything silly, are you?”",
     "instead": "“Have you had thoughts that your family would be better off without you?”",
     "why": "A leading, minimising question invites “no”. Ask directly and neutrally."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Debt and secrecy",
     "t": "Around £40,000 on cards and loans, hidden from a pregnant partner. Shame and fear of discovery drive the concealment, the drinking and the suicidal thinking; debt advice is part of the treatment, not an add-on."
    },
    {
     "h": "Work and alcohol",
     "t": "Exhausted at work as a team leader and drinking most nights to sleep. Alcohol raises impulsivity and suicide risk and worsens sleep."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality",
     "t": "His gambling and debt are confidential, including from his partner (GMC Confidentiality 2017). Disclosure without consent is justified only to prevent a risk of death or serious harm, and involving crisis services here is done with his agreement."
    },
    {
     "h": "Mental Health Act 1983",
     "t": "Not a first step. If risk escalated and he refused help, the crisis team would assess whether a Mental Health Act assessment is needed."
    },
    {
     "h": "Debt respite",
     "t": "The Breathing Space (Debt Respite Scheme) in England and Wales gives legal protection from creditor action; a mental health crisis version exists for people receiving crisis treatment. Debt advisers can apply for it."
    }
   ],
   "professional": [
    {
     "h": "Safe prescribing",
     "t": "Declining a hypnotic is good prescribing: NICE TA77 limits hypnotics to short periods after non-drug measures, and tablets are a means of overdose. Explain the reason and offer a better plan (GMC Good Medical Practice 2024)."
    },
    {
     "h": "Documentation",
     "t": "Record his words about the insurance policy, frequency of thoughts, protective factors, alcohol, the safety plan, who was contacted and when, and the follow-up date."
    }
   ],
   "community": [
    {
     "h": "Gambling support",
     "t": "National Gambling Helpline 0808 8020 133 (24 hours), National Gambling Support Network and NHS gambling clinics; GamStop self-exclusion; Gamblers Anonymous; support for affected partners and families."
    },
    {
     "h": "Crisis and debt",
     "t": "Local crisis team, NHS 111 mental health option, Samaritans (116 123); StepChange, National Debtline and Citizens Advice for free debt advice."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Suicidal thoughts most nights with a preparatory act (looking at the life-insurance policy) — same-day crisis assessment",
     "Rising alcohol use to sleep — raises impulsivity and overdose risk",
     "Hopelessness and feeling trapped by concealed debt"
    ],
    "psychosocial": [
     "Gambling: type, frequency, chasing losses, borrowing, secrecy",
     "Debt size and creditors; any pressure from lenders",
     "Pregnant partner who does not know; work performance; alcohol"
    ],
    "ice": [
     "Idea: “It’s just work stress keeping me awake.”",
     "Concern: the secret debt, his partner finding out, and a sense that his family would be better off with the insurance",
     "Expectation: sleeping tablets and no questions"
    ]
   },
   "diagnosis": "Gambling harm (likely gambling disorder) with around £40,000 of concealed debt, secondary insomnia, increasing alcohol use and frequent suicidal thoughts with a preparatory act. Protective factors: his partner and the coming baby.",
   "diagnosisLay": "“Your sleep problem is the smoke, not the fire. The fire is gambling that has turned into an addiction, a debt you’ve carried alone, and dark thoughts that come most nights. All three are treatable, and we start today.”",
   "management": {
    "reflectIce": "“You came in wanting to be knocked out so you could stop thinking. I understand why. What I’d like instead is to take away the things you’re lying awake about.”",
    "psychosocial": "Treat the shame as part of the illness: no judgement, debt advice as a health intervention, and support to tell his partner when he chooses.",
    "sharedPlan": [
     "No hypnotic; same-day mental health crisis team contact with his agreement",
     "Specialist gambling referral (NHS service or National Gambling Support Network); GamStop and bank gambling block today",
     "Free debt advice this week; agreed alcohol reduction; mood screen and review"
    ],
    "safetyNet": [
     "Written safety plan; 999 or A&E if he feels he might act; NHS 111 mental health option; Samaritans 116 123",
     "GP review within two days; risk and plan documented"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Depression",
    "s": "Case walkthrough · NICE NG222 · NICE NG225",
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
    "t": "Insomnia",
    "s": "Case walkthrough · NICE TA77",
    "href": "../cases/insomnia.html"
   },
   {
    "ic": "💠",
    "t": "Alcohol: problem drinking",
    "s": "Protocol · AUDIT-C · brief intervention",
    "href": "management/alcohol-problem-drinking.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by candidates who treat the request (sleeping tablets) instead of the person. The disclosure only happens in a non-judgemental space, and once gambling surfaces the suicide question is mandatory.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing zopiclone for “work stress” after a two-minute sleep history.",
     "why": "“Management plan not in line with current UK best practice” and unsafe: NICE TA77 limits hypnotics, and tablets are a means of overdose in someone at risk.",
     "fix": "Say out loud why you want the cause first, then ask what the head is racing about."
    },
    {
     "dom": "tasks",
     "fail": "Asking about stress and work, but never about money, alcohol or gambling.",
     "why": "The engine of the case stays hidden. NICE NG248 expects gambling to be asked about when the picture fits.",
     "fix": "“Sometimes it’s money, drinking or betting that’s got out of hand — any of that in the mix?”"
    },
    {
     "dom": "tasks",
     "fail": "Hearing about £40,000 of secret debt and moving straight to debt advice without asking about suicide.",
     "why": "Gambling harm carries a high suicide risk; missing the direct question is a safety fail.",
     "fix": "“Has it got so heavy you’ve thought your family would be better off without you?” Then plan, preparation, means and protective factors."
    },
    {
     "dom": "rto",
     "fail": "Reacting to the debt with surprise or a lecture about responsibility.",
     "why": "“Does not respond to the patient’s emotional cues”; shame shuts him down and he withholds the suicidal thoughts.",
     "fix": "Thank him, name the courage, and frame gambling as a treatable addiction."
    },
    {
     "dom": "rto",
     "fail": "Insisting he tells his partner today.",
     "why": "Pushing disclosure before safety damages trust and can raise risk.",
     "fix": "Offer help with telling her when he chooses; keep today’s focus on safety and support."
    },
    {
     "dom": "gs",
     "fail": "Ending with “ring us if you feel worse” and a routine review in a month.",
     "why": "Non-specific safety-netting for a man with frequent suicidal thoughts and a preparatory act is a clear fail.",
     "fix": "Same-day crisis contact, written safety plan, named routes (999, A&E, NHS 111 mental health option), review within two days, teach-back."
    }
   ]
  }
 },
 "gout-flare": {
  "stem": {
   "name": "Tony Briggs",
   "age": "49-year-old man",
   "pmh": [
    "Nil recorded",
    "Previous episode of big-toe pain earlier this year (self-reported gout)"
   ],
   "meds": [
    "Occasional over-the-counter ibuprofen"
   ],
   "allergy": "No known drug allergies",
   "recent": "Last BP check borderline high. BMI 31. Alcohol recorded as about 40 units a week. No urate, renal function or lipids on record.",
   "reason": "Telephone call: painful, swollen left big toe since the early hours; asking for “the strong anti-inflammatories”."
  },
  "knowledge": {
   "guideline": "NICE NG219 (Gout, 2022) · MHRA Drug Safety Update (July 2019, febuxostat) · UK Chief Medical Officers’ low-risk drinking guidelines (2016) · NICE NG136 (2019, updated 2023) · BNF",
   "summary": "A second classic flare of first MTP gout in a year: treat the flare with a drug chosen for his risks, keep septic arthritis in mind, and offer treat-to-target urate-lowering therapy once it settles. Use the flare to check his cardiovascular and renal risk.",
   "points": [
    {
     "h": "Treat the flare",
     "t": "NICE NG219: offer an NSAID, colchicine or a short course of an oral corticosteroid, chosen by comorbidities, co-prescriptions and preference; consider adding a PPI with an NSAID. If these are contraindicated or ineffective, consider an intra-articular or intramuscular corticosteroid. Doses per BNF. Rest, elevate and cool the joint."
    },
    {
     "h": "Think septic arthritis",
     "t": "A hot, swollen single joint can be infected. Fever, feeling unwell, an atypical joint, a prosthetic joint or failure to settle needs same-day assessment and aspiration rather than more anti-inflammatories."
    },
    {
     "h": "Offer urate-lowering therapy",
     "t": "NICE NG219: offer treat-to-target ULT to people with multiple or troublesome flares (and to those with CKD stages 3–5, diuretic use, tophi or chronic gouty arthritis). Allopurinol or febuxostat first line; allopurinol first line with major cardiovascular disease (MHRA DSU July 2019: febuxostat and cardiovascular death)."
    },
    {
     "h": "Treat to target",
     "t": "NICE NG219: aim for serum urate below 360 µmol/L (consider below 300 µmol/L with tophi, chronic gouty arthritis or ongoing flares). Start ULT at least 2–4 weeks after the flare settles (earlier if flares are frequent), start low and titrate against urate; offer colchicine to prevent flares while titrating."
    },
    {
     "h": "Lifestyle, honestly",
     "t": "NICE NG219: there is not enough evidence that any specific diet prevents flares — advise a healthy balanced diet — but excess weight and excess alcohol may make flares worse. UK CMOs (2016): no more than 14 units a week, spread over 3 or more days."
    },
    {
     "h": "Look at the whole person",
     "t": "Gout clusters with hypertension, obesity, diabetes, dyslipidaemia and CKD. Check BP (NICE NG136), U&E/eGFR, HbA1c, lipids and QRISK, LFTs given his alcohol intake, and serum urate once the flare has settled (a level taken during a flare can be falsely low)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Mr Briggs? It’s Dr Lee. Can I confirm your date of birth? … Thanks. Sounds like you’re in a lot of pain — tell me what’s happened.",
    "dom": "rto",
    "why": "Identity check and an open question on the phone"
   },
   {
    "who": "pt",
    "text": "The gout’s back, doc. Big toe, came on in the night, can’t even have the duvet on it. Had it a few months back too. I just need the strong anti-inflammatories so I can get back on site — I’m self-employed, every day off is money. None of the lifestyle lecture if that’s alright."
   },
   {
    "who": "dr",
    "text": "Fair enough — no lecture, I promise. Let’s get the pain sorted first. I need a few quick questions so I pick the safest tablet for you, and then, if you’ll give me two minutes, I’d like to talk about stopping these attacks coming back. Deal?",
    "dom": "gs",
    "why": "Agrees an agenda that respects his request and includes prevention"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Is it just the one joint? Any fever, shivers, or feeling unwell in yourself? Any cut or injury to the foot?",
    "dom": "tasks",
    "why": "Screens for septic arthritis before assuming gout"
   },
   {
    "who": "pt",
    "text": "Just the toe. No fever, I feel fine apart from wanting to cut my foot off. No injury."
   },
   {
    "who": "dr",
    "text": "Good. Any stomach ulcers or indigestion, kidney problems, asthma, or heart trouble? And are you taking anything besides the odd ibuprofen?",
    "dom": "tasks",
    "why": "Checks contraindications to NSAIDs and colchicine"
   },
   {
    "who": "pt",
    "text": "None of that. Just ibuprofen now and then. They said my blood pressure was a bit high last time."
   },
   {
    "who": "dr",
    "text": "Thanks, that’s useful. And how much do you drink in a usual week, roughly?",
    "dom": "tasks",
    "why": "Asks about alcohol plainly and without judgement"
   },
   {
    "who": "pt",
    "text": "(Pause.) Probably too much. The nurse worked it out at about forty units a week."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Thanks for being straight with me. You said every day off is money — how much have these attacks been costing you?",
    "dom": "rto",
    "why": "Follows the livelihood cue"
   },
   {
    "who": "pt",
    "text": "I can’t get up a ladder like this. Every attack is days without pay."
   },
   {
    "who": "dr",
    "text": "That’s a real worry. You also said “the gout” like it’s an old enemy. Has anyone in the family had it?",
    "dom": "rto",
    "why": "Gently opens the family story behind the bravado"
   },
   {
    "who": "pt",
    "text": "My dad. His was terrible. By the end he could barely walk. He drank a lot too. (Pause.) I suppose I don’t want to end up like him."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That makes a lot of sense of why you want this sorted — and the good news is that gout today is very treatable. You don’t have to go the way your dad did.",
    "dom": "rto",
    "why": "Names the fear and gives honest hope"
   },
   {
    "phase": "Explanation and acute treatment",
    "clock": "6–8 min",
    "who": "dr",
    "text": "This sounds like a classic gout flare. For the pain, I can offer an anti-inflammatory like naproxen with a stomach-protecting tablet, or a different tablet called colchicine, or a short course of steroid tablets. With your blood pressure I’d like to keep the anti-inflammatory short. Which would you prefer?",
    "dom": "tasks",
    "why": "Offers NICE NG219 flare options tailored to his risks and shares the choice"
   },
   {
    "who": "pt",
    "text": "Whatever works fastest. The naproxen, I suppose."
   },
   {
    "who": "dr",
    "text": "Okay — naproxen with a stomach protector, and stop the ibuprofen while you’re on it, don’t take both. Rest the foot up, a cold pack wrapped in a towel helps. The dose will be on the label.",
    "dom": "tasks",
    "why": "Safe prescribing: no double NSAIDs, practical advice"
   },
   {
    "phase": "Prevention and shared plan",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Now my two minutes. This is your second attack this year. There’s a daily tablet that lowers the uric acid causing this, and if we get the level low enough, the attacks mostly stop. It’s started once this flare settles, with some cover so it doesn’t set one off. I know you said no tablets for life — I’d see it as the thing that keeps you up the ladder.",
    "dom": "tasks",
    "why": "Offers treat-to-target ULT for multiple flares and frames it around his goal"
   },
   {
    "who": "pt",
    "text": "Hmm. My dad was never on anything like that. What would it involve?"
   },
   {
    "who": "dr",
    "text": "A blood test to check your uric acid, kidneys, sugar, cholesterol and liver in a couple of weeks when the toe’s settled, and a blood pressure check. Gout often travels with blood pressure and heart risk, so it’s a chance to check the lot. Then we’d decide together.",
    "dom": "tasks",
    "why": "Uses gout as a cardiometabolic flag and plans tests at the right time"
   },
   {
    "who": "pt",
    "text": "Alright. That seems sensible."
   },
   {
    "who": "dr",
    "text": "And the drinking — no lecture. Alcohol can make flares more likely, and it’s not helping your blood pressure. If you ever wanted help cutting down, I’d be glad to help. What do you think?",
    "dom": "rto",
    "why": "Raises alcohol without shaming and leaves the choice with him"
   },
   {
    "who": "pt",
    "text": "Maybe. Let’s see how the toe goes first. But yeah, I know."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you get a fever, feel shivery or unwell, another joint flares, or it’s not clearly better in a few days, ring us the same day — very occasionally a hot joint is an infection, and that needs checking quickly. Any black stools or bad stomach pain on the naproxen, stop it and call.",
    "dom": "gs",
    "why": "Specific safety-net for sepsis and NSAID harm"
   },
   {
    "who": "pt",
    "text": "Got it."
   },
   {
    "who": "dr",
    "text": "I’ll book you in for two to three weeks — bloods, blood pressure, and the prevention chat. So what’s the plan, in your words?",
    "dom": "rto",
    "why": "Books follow-up and checks understanding with teach-back"
   },
   {
    "who": "pt",
    "text": "Naproxen and the stomach one, no ibuprofen, feet up. Ring if I get a temperature. Bloods and the uric acid tablet chat in a couple of weeks."
   },
   {
    "who": "dr",
    "text": "Spot on. You came for strong tablets — what I’m hoping to give you is fewer mornings like this one.",
    "dom": "rto",
    "why": "Closes by linking the plan to his agenda"
   },
   {
    "who": "pt",
    "text": "Cheers, doc. Appreciate it."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question after identity check; heard the request and the “no lecture” condition without arguing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Self-employed builder, lost earnings, alcohol intake, father’s gout and drinking.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “every day off is money” and “the gout” as a family story, and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (it just needs strong tablets); concern (money, becoming his father); expectation (NSAIDs and no lecture).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "No examination possible by phone — recognised the limit; planned U&E/eGFR, urate after the flare, HbA1c, lipids, LFT, BP and QRISK.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Gout versus septic arthritis; considered cellulitis and trauma; considered other contributors (alcohol, weight).",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about fever, systemic upset and injury; clear route for same-day aspiration if atypical or not settling.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named recurrent gout and explained it plainly, including why urate matters.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "NSAID with a PPI (or colchicine or steroid) chosen with him; stop OTC ibuprofen; treat-to-target ULT offered for multiple flares.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "BP, renal function, cardiovascular risk and alcohol addressed as part of gout care; febuxostat caution with cardiovascular disease known.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Septic-joint and NSAID safety-net in plain words; follow-up booked in 2–3 weeks for bloods and ULT discussion.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Tony Briggs",
    "age": "49 years · male",
    "pmh": [
     "Nil significant recorded",
     "Self-reported gout attack earlier this year"
    ],
    "meds": [
     "Ibuprofen (OTC, occasional)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ BP last check borderline high — no follow-up recorded. BMI 31. Alcohol about 40 units/week. No urate, U&E or lipids on file.",
    "reason": "Telephone appointment. “Gout again — just need the strong anti-inflammatories.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agree terms",
     "d": "He sets the agenda: tablets, no lecture. Agree to treat the pain first and ask for two minutes on prevention later."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "One joint or more, fever or systemic upset, injury; ulcer, renal, asthma and cardiac history; current medicines; alcohol in numbers."
    },
    {
     "t": "4–6",
     "h": "ICE and hidden agenda",
     "d": "Lost earnings, and his father disabled by gout who drank heavily. Surface the fear behind the bravado."
    },
    {
     "t": "6–10",
     "h": "Treat and pivot",
     "d": "Flare options by risk (NSAID plus PPI, colchicine or steroid). Then the prevention pivot: ULT for multiple flares, bloods after the flare, BP and heart risk."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Fever or not settling means same-day review. NSAID warning signs. Follow-up in 2–3 weeks. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Sends “the strong ones” without checking stomach, kidney or BP risk, leaves him taking ibuprofen alongside; never considers septic arthritis; never mentions prevention despite a second flare; or delivers a lecture on beer and red meat that ends the conversation.",
    "pass": "Treats the flare with an appropriate option and a PPI where needed; asks about fever and systemic features; offers urate-lowering therapy for recurrent attacks and plans bloods; mentions alcohol and BP with a follow-up.",
    "exc": "All of the above, plus: honours the “no lecture” request while still getting to prevention; surfaces the father’s story and uses it to motivate rather than frighten; frames ULT as what keeps him working; checks cardiovascular risk; offers alcohol support as a choice; closes with teach-back."
   },
   "avoid": [
    {
     "dont": "“You really need to cut out the beer and red meat or this will keep happening.”",
     "instead": "“Alcohol can make flares more likely — if you ever want help cutting down, I’m here.”",
     "why": "Shaming ends engagement, and NICE NG219 finds no evidence for any specific diet."
    },
    {
     "dont": "“Let’s start allopurinol today to stop this happening again.”",
     "instead": "“Once this flare settles, there’s a tablet that stops them coming back — let’s talk about it at your blood test.”",
     "why": "NICE NG219: start ULT after the flare settles, with flare prophylaxis, unless flares are frequent."
    },
    {
     "dont": "“It’s definitely gout, you know the drill.”",
     "instead": "“It sounds like gout — but if you get a fever or it’s not settling, I need to see it that day.”",
     "why": "Anchoring on gout without a septic-joint safety-net is a safety fail."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Self-employment and income",
     "t": "No sick pay, and a physical job on ladders and roofs. Lost days mean lost income, which drives the request for a quick fix and is the best argument for prevention."
    },
    {
     "h": "Alcohol",
     "t": "About 40 units a week. Use a structured tool (AUDIT-C, then AUDIT) at follow-up and offer brief intervention and support rather than judgement."
    }
   ],
   "legal": [
    {
     "h": "Fit notes and self-employment",
     "t": "He can self-certify for the first 7 days. A fit note can still be issued to a self-employed person and may support an insurance claim or New Style ESA if eligible."
    },
    {
     "h": "Working at height",
     "t": "Advise him not to climb ladders or work at height while he cannot bear weight safely — a fit note can say “may be fit for work” with amended duties."
    }
   ],
   "professional": [
    {
     "h": "Shared decisions on long-term medicine",
     "t": "ULT is offered, not imposed. Explain benefits and burdens, respect a decision to wait, and record the discussion (GMC decision-making and consent guidance, 2020)."
    },
    {
     "h": "Remote prescribing",
     "t": "Check contraindications, current medicines and OTC NSAIDs before prescribing by phone, and make the safety-net specific."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "UK Gout Society for patient information; local alcohol service or community pharmacy support; community pharmacy BP checks between appointments."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Fever, rigors, feeling unwell or a prosthetic joint — possible septic arthritis",
     "More than one joint, or a joint that is not settling after a few days of treatment",
     "Dyspepsia, GI bleeding, renal disease, asthma or heart failure — changes the flare drug"
    ],
    "psychosocial": [
     "Self-employed builder — lost income and working at height",
     "Alcohol about 40 units a week; shame sits behind the joke",
     "Father disabled by gout who drank heavily — fear of the same path"
    ],
    "ice": [
     "Idea: “It’s just gout, I need the strong anti-inflammatories.”",
     "Concern: losing work and money; becoming like his father",
     "Expectation: tablets and no lifestyle lecture"
    ]
   },
   "diagnosis": "Name it and its pattern: “This is a classic gout flare, and it’s your second this year. That tells me the uric acid level is running high, and it’s worth treating the cause, not just the toe.”",
   "diagnosisLay": "“Uric acid is like sugar in tea — when there’s too much it can’t dissolve and forms sharp crystals in the joint. The anti-inflammatory calms the flare; the daily tablet lowers the level so crystals stop forming.”",
   "management": {
    "reflectIce": "“You told me every day off costs you, and you don’t want to end up like your dad. Getting the uric acid down is what stops both of those.”",
    "psychosocial": "Keep prevention framed around staying on the tools; offer alcohol support as a choice; discuss fit note options and amended duties while he cannot climb.",
    "sharedPlan": [
     "Flare: NSAID with PPI, colchicine or short oral steroid, chosen with him; stop OTC ibuprofen",
     "Bloods and BP in 2–3 weeks: urate, U&E/eGFR, HbA1c, lipids, LFT, QRISK",
     "Offer treat-to-target ULT with colchicine cover once the flare settles"
    ],
    "safetyNet": [
     "Fever, feeling unwell, another joint or not settling — same-day review",
     "Black stools or severe stomach pain on the NSAID — stop and call"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Gout",
    "s": "Case walkthrough · NICE NG219",
    "href": "../cases/gout.html"
   },
   {
    "ic": "💠",
    "t": "Gout protocol",
    "s": "Flare treatment · treat-to-target ULT",
    "href": "management/gout.html"
   },
   {
    "ic": "🗺️",
    "t": "Toe pain pathway",
    "s": "Visual algorithm · hot joint",
    "href": "algorithms/toe-pain.html"
   },
   {
    "ic": "🧮",
    "t": "QRISK3",
    "s": "Medical Calculators",
    "href": "calculators.html"
   }
  ],
  "pitfalls": {
   "intro": "Two failures dominate this station: prescribing on demand without tailoring or safety-netting, and missing the prevention conversation — or ruining it with a lecture.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing “the strong ones” without asking about stomach, kidney, asthma or heart problems, and leaving him on OTC ibuprofen too.",
     "why": "“Prescribing not safe or appropriate.” NICE NG219 asks for the flare drug to be chosen by comorbidities and co-prescriptions.",
     "fix": "Thirty seconds of contraindication questions, a PPI with the NSAID, and “stop the ibuprofen while you take this”."
    },
    {
     "dom": "tasks",
     "fail": "No mention of septic arthritis.",
     "why": "“Does not rule out serious disease.” A hot single joint is infected until the story says otherwise.",
     "fix": "Ask about fever and feeling unwell, and safety-net: “If you get a temperature or it isn’t settling, I need to see it the same day.”"
    },
    {
     "dom": "tasks",
     "fail": "Treating the flare and closing, despite a second attack in a year.",
     "why": "NICE NG219: offer treat-to-target ULT for multiple or troublesome flares. Missing it is a management fail.",
     "fix": "Ask permission for two minutes on prevention and frame ULT around his goal of staying at work."
    },
    {
     "dom": "rto",
     "fail": "A beer-and-red-meat lecture after he asked for none.",
     "why": "“Does not respond to the patient’s agenda.” It shames him, and NICE NG219 finds no evidence for a specific gout diet.",
     "fix": "Name the link with alcohol once, offer help as a choice, and move on."
    },
    {
     "dom": "rto",
     "fail": "Missing the father’s story behind “the gout’s back”.",
     "why": "The hidden agenda is fear of becoming his father; without it, ULT is just another tablet he doesn’t want.",
     "fix": "“Has anyone in the family had it?” Then use the answer: “You don’t have to go the way he did.”"
    },
    {
     "dom": "gs",
     "fail": "Ending with “come back if it doesn’t settle” and no plan for bloods or review.",
     "why": "Non-specific follow-up means the prevention conversation never happens.",
     "fix": "Book bloods and BP in 2–3 weeks, name the septic and NSAID warning signs, and ask for teach-back."
    }
   ]
  }
 },
 "melanoma-2ww": {
  "stem": {
   "name": "Keith Donnelly",
   "age": "54-year-old man",
   "pmh": [
    "No significant past medical history"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "No previous skin consultations on record. Occupation: roofer (self-employed).",
   "reason": "Video appointment booked at his wife’s request: “a mole on my back that’s changed”."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · NICE NG14 (Melanoma: assessment and management, 2015, updated 2022) · NICE NG34 (Sunlight exposure: risks and benefits, 2016) · NHS England Faster Diagnosis Standard",
   "summary": "A pigmented lesion that has grown over 4 months, with an irregular outline, uneven colour, itch and bleeding, scores well above 3 on the weighted 7-point checklist. That meets NICE NG12 (updated April 2026) for a suspected cancer pathway referral for melanoma — whatever the photo looks like.",
   "points": [
    {
     "h": "NICE NG12 (updated April 2026) — melanoma",
     "t": "NICE NG12 (updated April 2026): refer using a suspected cancer pathway referral for melanoma if a suspicious pigmented skin lesion has a weighted 7-point checklist score of 3 or more, or if dermoscopy suggests melanoma. Consider referral for a pigmented or non-pigmented lesion that suggests nodular melanoma."
    },
    {
     "h": "Weighted 7-point checklist",
     "t": "Major features, 2 points each: change in size, irregular shape, irregular colour. Minor features, 1 point each: largest diameter 7 mm or more, inflammation, oozing, change in sensation. Keith: size 2 + shape 2 + colour 2 + diameter about 8 mm 1 + bleeding 1 + itch 1 = 9."
    },
    {
     "h": "Photos and video",
     "t": "A photo can support the referral but cannot exclude melanoma. Arrange an in-person look (whole-skin check, regional lymph nodes, dermoscopy if trained) — but do not let that step delay a referral the history already justifies."
    },
    {
     "h": "Leave it for the specialist",
     "t": "Do not shave, biopsy or remove a suspected melanoma in primary care; the specialist team plans complete excision with margins for accurate staging (clinical practice; NICE NG14 covers staging and treatment)."
    },
    {
     "h": "Faster Diagnosis Standard",
     "t": "NHS England: people referred on a suspected cancer pathway should have cancer diagnosed or ruled out within 28 days. Tell him when to expect contact and what to do if he hears nothing."
    },
    {
     "h": "Prevention without blame",
     "t": "NICE NG34: give clear sun-protection advice (shade, clothing, hat, sunscreen) tailored to risk. Fair skin, sunburns, many moles and outdoor work put him in a higher-risk group; teach self-examination for new or changing lesions."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Donnelly, I’m Dr Lee. Can I confirm your date of birth? … Thanks. What would you like to talk about today?",
    "dom": "rto",
    "why": "Identity check and an open question"
   },
   {
    "who": "pt",
    "text": "Afternoon. My wife’s been on at me about a mole on my back — says it’s bigger and looks different. I think she’s fussing. I’ve got loads of moles and I’m outside all day, they all change a bit. I’ve got a photo. I really just want you to tell me it’s nothing so she’ll stop worrying, and I can get back to the job."
   },
   {
    "who": "dr",
    "text": "Thank you for coming on — it sounds like she knows your back better than you do. I’ll look at the photo, ask a few questions, and give you an honest answer. Is that all right?",
    "dom": "gs",
    "why": "Treats the wife’s observation as useful and sets an honest agenda"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When did she first notice it changing, and what has changed — size, shape, colour?",
    "dom": "tasks",
    "why": "Asks about change, the strongest feature on the checklist"
   },
   {
    "who": "pt",
    "text": "Four months, maybe. She says it’s bigger. It’s gone a funny shape, and it’s a few colours now — browny, and a black bit."
   },
   {
    "who": "dr",
    "text": "Has it been itchy, sore, or bled at all?",
    "dom": "tasks",
    "why": "Asks about the minor checklist features"
   },
   {
    "who": "pt",
    "text": "Itches now and then. It bled once, a little, when I caught it."
   },
   {
    "who": "dr",
    "text": "Can you hold the photo up to the camera? … Thank you. How big would you say it is — if you had a ruler?",
    "dom": "tasks",
    "why": "Uses the photo to support, not replace, the assessment"
   },
   {
    "who": "pt",
    "text": "About eight millimetres, I reckon."
   },
   {
    "who": "dr",
    "text": "And your skin in general — do you burn easily? Many sunburns over the years? Do you use sun cream at work?",
    "dom": "tasks",
    "why": "Establishes risk factors"
   },
   {
    "who": "pt",
    "text": "Fair as anything. Burnt loads as a kid and on the roofs. Never bothered with cream, to be honest."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said you want me to tell you it’s nothing. Has any part of you wondered whether it might be something?",
    "dom": "rto",
    "why": "Gently tests the bravado"
   },
   {
    "who": "pt",
    "text": "(Pause.) A lad I worked with — he had a melanoma. It spread everywhere. That was a couple of years back. I try not to think about it."
   },
   {
    "who": "dr",
    "text": "I’m really sorry. That must have been awful, and it makes complete sense that this has been sitting at the back of your mind.",
    "dom": "rto",
    "why": "Acknowledges the fear behind the minimising"
   },
   {
    "who": "pt",
    "text": "And I’m self-employed. No work, no money. Mortgage, kids. I can’t be ill."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That’s a lot of pressure. Let’s make a plan that deals with this properly and quickly — that’s the best protection for your family too.",
    "dom": "rto",
    "why": "Names the breadwinner pressure and ties the plan to it"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’ll be honest with you. Most changing moles turn out not to be cancer. But this one has grown, changed shape and colour, is over seven millimetres, itches and has bled. We use a checklist for moles, and yours scores well above the level where the guidance says it should be seen urgently by a skin specialist to check for melanoma.",
    "dom": "tasks",
    "why": "Applies the 7-point checklist and states the NICE NG12 (updated April 2026) threshold plainly"
   },
   {
    "who": "pt",
    "text": "So you think it is one."
   },
   {
    "who": "dr",
    "text": "I can’t tell from a photo, and neither could anyone. What I can say is that it needs checking quickly. If it is a melanoma, finding it at this stage — on the skin, before it’s spread — is exactly when treatment works best. Your wife did you a real favour.",
    "dom": "rto",
    "why": "Balances honesty with hope and credits the wife"
   },
   {
    "who": "pt",
    "text": "Right. (Pause.) Okay."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s the plan. I’m making an urgent suspected cancer referral to dermatology today. The aim is that you’ll know one way or the other within 28 days. I’d also like to see you in person in the next day or two to look at it properly, check the rest of your skin and feel for glands — but the referral goes today regardless.",
    "dom": "tasks",
    "why": "Refers today on the suspected cancer pathway and arranges an in-person skin and node check"
   },
   {
    "who": "pt",
    "text": "What will they do?"
   },
   {
    "who": "dr",
    "text": "Usually they look at it under a special magnifier, and if it needs to come off they’ll remove it under local anaesthetic and send it to the lab. Please don’t try to deal with it yourself or let anyone else remove it — it needs to be done properly by them.",
    "dom": "tasks",
    "why": "Explains what to expect and avoids primary-care removal"
   },
   {
    "who": "pt",
    "text": "And the time off?"
   },
   {
    "who": "dr",
    "text": "Most appointments are short, and a small removal usually means a short break from heavy work. If you do need time off, there’s help for self-employed people, and I can give you a fit note. We’ll deal with that as it comes.",
    "dom": "gs",
    "why": "Addresses the practical income worry"
   },
   {
    "who": "dr",
    "text": "And for the future — no lecture — but on the roofs, a hat, a shirt with sleeves and sun cream on the bits that are out will make a real difference. Would you be up for that?",
    "dom": "rto",
    "why": "Sun-safety advice without blame, with his agreement"
   },
   {
    "who": "pt",
    "text": "Yeah. She’ll make sure I do."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you haven’t heard from the hospital within a week, ring us and we’ll chase it. If it bleeds a lot, grows quickly, or you find a new lump in your armpit or neck, get in touch sooner. Can you tell me back what’s happening next?",
    "dom": "gs",
    "why": "Specific safety-net and teach-back"
   },
   {
    "who": "pt",
    "text": "Referral today, you see me in a couple of days, the hospital should call within a week — if not, I ring you. And sun cream."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll follow up the result with you. Would it help if your wife joined next time?",
    "dom": "rto",
    "why": "Offers to include the family and commits to follow-up"
   },
   {
    "who": "pt",
    "text": "Maybe. Thanks, doc."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him state his wish for reassurance; treated his wife’s concern as information, not fuss.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Self-employed roofer, sole earner, mortgage and children; sun exposure at work.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “tell me it’s nothing” and tested it gently, which surfaced the workmate’s death.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a normal mole, she’s fussing); concern (melanoma like his workmate, not being able to provide); expectation (reassurance).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "History against the weighted 7-point checklist; photo used as support only; in-person whole-skin, node and dermoscopy check arranged.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Benign naevus, seborrhoeic keratosis and melanoma considered; did not anchor on “they all change”.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Scored the lesion (9) against the NICE NG12 (updated April 2026) threshold of 3 and acted on it; did not reassure from a photo.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Told him plainly the lesion needs urgent checking for melanoma, without claiming certainty either way.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Suspected cancer pathway referral today; no removal in primary care; what to expect explained; sun-safety advice agreed.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Income worry addressed (fit note, self-employed support); risk factors and self-examination covered.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Chase if no contact within a week; bleeding, rapid growth or new lumps in armpit or neck to report; result followed up.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Keith Donnelly",
    "age": "54 years · male",
    "pmh": [
     "Nil significant"
    ],
    "meds": [
     "None"
    ],
    "allergy": "NKDA",
    "recent": "⚠ No skin lesion history on file. Occupation: roofer, self-employed.",
    "reason": "Video appointment. “My wife nagged me to get this mole looked at.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "He wants reassurance for his wife. Take her observation seriously and promise an honest answer, not a quick one."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Change in size, shape and colour; diameter; itch, bleeding, inflammation; skin type, sunburns, sun protection, number of moles. Use the photo as support."
    },
    {
     "t": "4–6",
     "h": "ICE and hidden agenda",
     "d": "The workmate who died of melanoma; sole earner, self-employed. Let the bravado drop before you explain."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Checklist score well above 3: suspected cancer pathway referral today (NICE NG12 (updated April 2026)). In-person skin and node check. No removal in primary care. Sun safety without blame. Income support."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Chase if no contact within a week; bleeding, rapid growth or new lumps to report. Teach-back. Offer to include his wife."
    }
   ],
   "wordPics": {
    "fail": "Looks at the photo and says it looks like an ordinary mole; or books a routine review in a few months; or offers to remove it at the surgery; never asks about change, itch or bleeding; misses the workmate and the money worry.",
    "pass": "Takes a structured history, recognises a suspicious changing lesion, makes a suspected cancer pathway referral, arranges an in-person check and gives sun-safety advice and a basic safety-net.",
    "exc": "All of the above, plus: scores the checklist aloud against the NICE NG12 (updated April 2026) threshold; credits his wife; surfaces the workmate and his fears as a provider; balances honesty with the reason for hope; covers income support and a chase-up plan; closes with teach-back."
   },
   "avoid": [
    {
     "dont": "“From the photo it looks like a normal mole — keep an eye on it.”",
     "instead": "“A photo can’t rule this out, and the changes you describe mean it needs urgent checking.”",
     "why": "Reassurance from a photo in a lesion scoring 9 is the dangerous fail here."
    },
    {
     "dont": "“You really should have been wearing sun cream all these years.”",
     "instead": "“From now on, a hat, sleeves and sun cream on the roofs will make a real difference.”",
     "why": "Blame adds to the guilt he already carries and shuts the conversation down."
    },
    {
     "dont": "“It’s probably cancer, but they can treat it.”",
     "instead": "“Most changing moles aren’t cancer — but this one needs checking quickly to be sure.”",
     "why": "Overstating certainty either way is inaccurate and frightening."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Sole earner, self-employed",
     "t": "No sick pay, a mortgage and children. The thought of cancer is the thought of not providing, which drives the minimising and could lead to missed appointments."
    },
    {
     "h": "Outdoor work",
     "t": "Roofing means chronic sun exposure. Practical protection on site (hat, sleeves, shade, sunscreen) is more useful than general advice."
    }
   ],
   "legal": [
    {
     "h": "Income support",
     "t": "Self-employed people cannot get Statutory Sick Pay. New Style ESA may apply depending on National Insurance contributions, and Universal Credit depending on household income. A fit note can be issued if he needs time off."
    },
    {
     "h": "Occupational sun safety",
     "t": "HSE publishes sun-protection advice for outdoor workers; as self-employed, he is responsible for his own protection on site."
    }
   ],
   "professional": [
    {
     "h": "Remote assessment limits",
     "t": "Video and photos cannot exclude melanoma. Refer on the history and arrange an in-person examination; document the lesion description and checklist score (GMC Good Medical Practice 2024)."
    },
    {
     "h": "Safety-netting referrals",
     "t": "Tell him when to expect contact and to ring if he hears nothing; the practice should track the referral and the result."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Macmillan Cancer Support for financial and emotional support if needed; Melanoma Focus for patient information; British Association of Dermatologists sun-awareness resources."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Change in size, shape or colour of a pigmented lesion — major checklist features",
     "Diameter 7 mm or more, itch, bleeding or inflammation — minor features",
     "New lumps in the armpit or neck; a raised, firm, fast-growing lesion (nodular melanoma)"
    ],
    "psychosocial": [
     "Workmate died of melanoma a couple of years ago",
     "Self-employed sole earner — mortgage and children",
     "Guilt about years without sun protection"
    ],
    "ice": [
     "Idea: “It’s just one of my moles — they all change.”",
     "Concern: melanoma like his workmate; not being able to provide",
     "Expectation: reassurance so his wife stops worrying"
    ]
   },
   "diagnosis": "Be honest and specific: “This mole has grown, changed shape and colour, is over seven millimetres, itches and has bled. That’s enough to need an urgent specialist check for melanoma — most turn out not to be, but we must be sure.”",
   "diagnosisLay": "“Think of an ordinary mole as a car parked in the same spot for years. This one has been moving and changing colour. That doesn’t mean it’s dangerous, but it means someone expert needs to look at it quickly.”",
   "management": {
    "reflectIce": "“After what happened to your workmate, I can see why you’d rather not think about it. Acting quickly now is the best way to protect you and your family.”",
    "psychosocial": "Plan around his work — short appointments, fit note if needed, self-employed income support; invite his wife to the next appointment if he wishes.",
    "sharedPlan": [
     "Suspected cancer pathway referral to dermatology today (NICE NG12 (updated April 2026): score 3 or more)",
     "In-person whole-skin, node and dermoscopy check within a day or two",
     "No removal in primary care; sun protection at work agreed"
    ],
    "safetyNet": [
     "Ring if no contact from the hospital within a week",
     "Report heavy bleeding, rapid growth or new lumps in the armpit or neck"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Pigmented skin lesions",
    "s": "Visual algorithm · 7-point checklist · NICE NG12 (updated April 2026)",
    "href": "algorithms/pigmented-skin-lesions.html"
   },
   {
    "ic": "💠",
    "t": "Actinic keratosis",
    "s": "Management protocol · sun damage and protection",
    "href": "management/actinic-keratosis.html"
   },
   {
    "ic": "📝",
    "t": "Fit notes",
    "s": "Fit note guidance · amended duties",
    "href": "fit-note.html"
   }
  ],
  "pitfalls": {
   "intro": "The clinical answer here is simple — the checklist score makes the referral. The station is failed on being talked out of it by a patient who wants reassurance, and on missing the fear he brings.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Reassuring from the photo, or booking a review in a few months.",
     "why": "“Management plan not in line with current UK best practice.” NICE NG12 (updated April 2026): refer if the weighted 7-point checklist score is 3 or more.",
     "fix": "Score it aloud — change in size, shape and colour, 8 mm, itch, bleeding — and refer today."
    },
    {
     "dom": "tasks",
     "fail": "Offering to shave or remove it at the surgery.",
     "why": "Partial or unplanned removal of a melanoma compromises diagnosis and staging.",
     "fix": "“The specialist team will remove it properly and send it to the lab.”"
    },
    {
     "dom": "tasks",
     "fail": "Relying on the video and never arranging an in-person look.",
     "why": "“Does not gather sufficient information.” A whole-skin check and node examination are part of the assessment.",
     "fix": "Refer today on the history, and see him in person within a day or two."
    },
    {
     "dom": "rto",
     "fail": "Agreeing that his wife is fussing.",
     "why": "Colluding with minimising undermines the referral he needs to accept.",
     "fix": "“She’s noticed something important — she’s done you a favour.”"
    },
    {
     "dom": "rto",
     "fail": "Missing the workmate and the money worry.",
     "why": "“Does not identify the patient’s concerns.” Without them, the risk of non-attendance stays hidden.",
     "fix": "“Has any part of you wondered if it might be something?” Then address income directly."
    },
    {
     "dom": "gs",
     "fail": "No plan for what happens if the hospital doesn’t call.",
     "why": "Referrals get lost; safety-netting must cover the system as well as symptoms.",
     "fix": "“If you haven’t heard within a week, ring us and we’ll chase it.” Then teach-back."
    }
   ]
  }
 },
 "pagets-incidental": {
  "stem": {
   "name": "Gordon Pyle",
   "age": "71-year-old man",
   "pmh": [
    "No significant past medical history recorded",
    "Retired joiner"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "Pelvis and hip X-ray for hip ache: changes consistent with Paget’s disease of bone (cortical thickening, coarse trabeculae, bony expansion); no aggressive or destructive features. Bloods: raised ALP, calcium normal. Result visible to him on the patient app before any clinician contact.",
   "reason": "Video appointment: “worried about my X-ray result”."
  },
  "knowledge": {
   "guideline": "Paget’s Association clinical guideline (Ralston et al., JBMR 2019) · MHRA Drug Safety Update (July 2015) · BNF · GMC Good Medical Practice (2024)",
   "summary": "Typical radiology with an isolated raised ALP and normal calcium is Paget’s disease of bone: common, benign and treatable. Answer “is it cancer?” clearly and early, explain his own symptoms with it, and plan confirmation, symptom-led treatment and monitoring.",
   "points": [
    {
     "h": "What Paget’s is",
     "t": "A focal disorder of overactive, disorganised bone remodelling in older adults. Affected bone is enlarged and thickened but structurally weaker. Common sites are the pelvis, spine, skull, femur and tibia. Often found incidentally on an X-ray or a raised ALP."
    },
    {
     "h": "Why this is not cancer",
     "t": "The report describes the characteristic pattern (cortical thickening, coarse trabeculae, expansion) with no aggressive or destructive features, and calcium is normal. Metastases and primary bone tumours look and behave differently. Where the picture is not typical, the specialist decides on further imaging."
    },
    {
     "h": "Confirm and map",
     "t": "Paget’s Association guideline (2019): total ALP with liver function tests as the first-line biochemical test (a normal GGT supports a bone source), and a radionuclide bone scan with targeted X-rays to define the extent of active disease. Check calcium and vitamin D before any bisphosphonate."
    },
    {
     "h": "Treat symptoms, not numbers",
     "t": "Paget’s Association guideline (2019): bisphosphonates are recommended for bone pain due to Paget’s, with zoledronic acid the most likely to give a good pain response; symptom-directed treatment is preferred over treating to normalise ALP. Simple analgesia for pain; secondary osteoarthritis may need its own treatment."
    },
    {
     "h": "Complications, in proportion",
     "t": "Hearing loss when the skull is involved, bone deformity, fracture, secondary osteoarthritis and, rarely, nerve compression. Sarcomatous change is rare; new, rapidly worsening pain or a swelling at an affected site needs prompt review."
    },
    {
     "h": "Before zoledronic acid",
     "t": "Correct low vitamin D and calcium first to reduce post-infusion hypocalcaemia. A transient flu-like reaction is common after the first infusion. MHRA Drug Safety Update (July 2015): IV bisphosphonates carry a risk of osteonecrosis of the jaw — patient reminder card, dental check-ups and good oral hygiene."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Pyle, I’m one of the GPs. I can see you’ve been worried about your X-ray. Tell me what you’ve seen and what’s been going through your mind.",
    "dom": "rto",
    "why": "Invites his understanding and emotion first"
   },
   {
    "who": "pt",
    "text": "I saw “abnormal bone” on the app. My brother had cancer that went to his bones, and that’s all I can think about. Be straight with me — have I got bone cancer?"
   },
   {
    "who": "dr",
    "text": "I will be completely straight with you, and I’ll answer that first. No — this is not bone cancer, and it is not cancer that has spread. Your X-ray shows a condition called Paget’s disease of bone. It’s common at your age, it’s benign, and it’s treatable.",
    "dom": "rto",
    "why": "Answers the real question clearly and early"
   },
   {
    "who": "pt",
    "text": "(exhales) You’re sure?"
   },
   {
    "who": "dr",
    "text": "The report describes the typical pattern of Paget’s and specifically no features of anything aggressive, and your calcium is normal. I’ll explain it properly, then ask you a few questions and agree a plan. Is that alright?",
    "dom": "gs",
    "why": "Gives the basis for confidence and sets the agenda"
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about the hip ache — where is it, and what’s it like?",
    "dom": "tasks",
    "why": "Characterises the presenting symptom"
   },
   {
    "who": "pt",
    "text": "A dull ache in the hip, on and off. It’s what sent me for the X-ray."
   },
   {
    "who": "dr",
    "text": "Anything else you’ve noticed? Headaches, changes in your hearing, anything feeling different in shape?",
    "dom": "tasks",
    "why": "Asks about skull involvement and deformity"
   },
   {
    "who": "pt",
    "text": "Odd headache. And my hat feels tighter than it used to — I thought I was imagining it."
   },
   {
    "who": "dr",
    "text": "Any weight loss, night sweats, pain that wakes you at night, or new lumps anywhere?",
    "dom": "tasks",
    "why": "Screens for features that would suggest malignancy"
   },
   {
    "who": "pt",
    "text": "No weight loss. Nothing like that."
   },
   {
    "who": "dr",
    "text": "With the headaches, any tenderness of your scalp, pain in the jaw when chewing, or change in your vision?",
    "dom": "tasks",
    "why": "Excludes giant cell arteritis as a cause of new headache at 71"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You mentioned your brother. Would you tell me about him?",
    "dom": "rto",
    "why": "Follows the key cue"
   },
   {
    "who": "pt",
    "text": "His cancer went to his bones. The pain at the end… When I saw “abnormal bone”, I thought, that’s it, that’s me next."
   },
   {
    "who": "dr",
    "text": "I’m very sorry you lost him, and that you went through that. It makes complete sense your mind went straight there. Have you been carrying this on your own?",
    "dom": "rto",
    "why": "Acknowledges grief and probes for the unspoken"
   },
   {
    "who": "pt",
    "text": "I haven’t told my wife I saw it. I didn’t want to frighten her until I knew."
   },
   {
    "who": "dr",
    "text": "That’s a lot to hold. I’m sorry the app showed you those words before anyone could explain them — they’re written for doctors, and read cold they sound far worse than they are. “Abnormal” here just means “not the usual pattern”.",
    "dom": "tasks",
    "why": "Addresses the portal misreading directly"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "In Paget’s, the bone renews itself too fast and in a disorganised way, so it becomes thicker and a bit larger. That explains your hip ache, your headaches and your hat feeling tighter — the skull can be involved too. These aren’t signs of cancer; they’re the condition itself.",
    "dom": "tasks",
    "why": "Uses his own symptoms to make the benign diagnosis make sense"
   },
   {
    "who": "pt",
    "text": "So the hat thing is part of it? That’s almost a relief."
   },
   {
    "who": "dr",
    "text": "Exactly. It needs keeping an eye on — sometimes it can affect hearing if it’s in the skull, or make a bone more likely to break — which is why we monitor it. Very rarely it changes in a way that needs checking, so a new, rapidly worsening pain or a lump is something I’d want to know about. But the outlook for most people is very good.",
    "dom": "tasks",
    "why": "Mentions complications proportionately"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what I’d suggest. A blood test to confirm the ALP is from bone and to check your calcium and vitamin D. I’d also refer you to the bone specialists, who often do a bone scan to see which bones are involved.",
    "dom": "tasks",
    "why": "Confirmation bloods and specialist assessment"
   },
   {
    "who": "pt",
    "text": "And treatment?"
   },
   {
    "who": "dr",
    "text": "If it’s causing pain, there’s an effective treatment — usually a drip of a bone-strengthening medicine, often just once — plus simple painkillers meanwhile. The specialists will decide on that with you. I’d also like your hearing checked if you notice any change.",
    "dom": "tasks",
    "why": "Symptom-led treatment plan and hearing surveillance"
   },
   {
    "who": "pt",
    "text": "That’s a lot less frightening than what I’d imagined."
   },
   {
    "who": "dr",
    "text": "Would it help to have your wife with you when we go through the bloods? You don’t need to carry the scare, or the good news, on your own.",
    "dom": "rto",
    "why": "Offers to involve his wife"
   },
   {
    "who": "pt",
    "text": "Yes. I think I’ll tell her tonight."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Contact us if your hearing changes, the pain gets much worse quickly, you notice a lump over a bone, or you have a fall and think you’ve broken something. Otherwise, bloods this week and I’ll see you both with the results. When you tell your wife tonight, what will you say?",
    "dom": "gs",
    "why": "Specific safety-net, dated follow-up and teach-back"
   },
   {
    "who": "pt",
    "text": "That it’s not cancer. It’s Paget’s — the bone renews too fast. Bloods, a scan, maybe a drip. And we come back together."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Invited his account of the app result and his fears before explaining; answered the cancer question early.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Retired joiner; brother’s death from bone metastases; not yet told his wife.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the brother, the “abnormal bone” phrase and the tighter hat, and used each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (bone cancer or spread), concern (the same death as his brother), expectation (a straight answer).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "ALP with LFTs (GGT), calcium, vitamin D, renal function; specialist referral for radionuclide bone scan; hearing assessment if symptoms.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Paget’s vs metastases vs primary bone tumour vs osteoarthritis; GCA considered for new headache.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about weight loss, night pain, lumps and GCA symptoms; noted the report excluded aggressive features and calcium is normal.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Paget’s disease of the pelvis, with probable skull involvement given the headache and enlarging hat size; benign.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Confirmation bloods, specialist referral, symptom-led bisphosphonate (zoledronic acid) with analgesia; calcium and vitamin D checked first.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Hearing, secondary osteoarthritis, fracture risk and his grief addressed; wife involved with consent.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Report hearing change, rapidly worsening pain, a lump or a fracture; review with results; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Investigations & results"
   ],
   "stem": {
    "name": "Gordon Pyle",
    "age": "71 years · male",
    "pmh": [
     "Nil significant",
     "Retired joiner"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ X-ray pelvis/hip: changes consistent with Paget’s disease; no aggressive features. ALP raised, calcium normal. Viewed on the patient app before contact.",
    "reason": "“Have I got bone cancer?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Answer the question",
     "d": "He asks directly about cancer. Say no, clearly, name Paget’s, and give the reason for your confidence."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Hip ache, headache, the tighter hat, hearing; weight loss, night pain, lumps; GCA symptoms for new headache."
    },
    {
     "t": "4–6",
     "h": "The brother and the app",
     "d": "His brother’s bone metastases, the result read alone, the wife not told. Acknowledge grief and the portal shock."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Paget’s explained through his own symptoms; complications in proportion; bloods, specialist referral, bone scan, symptom-led zoledronic acid."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Hearing change, rapid pain, lump, fracture. Offer to see him with his wife. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Hedges on the cancer question (“we can’t rule anything out yet”) or leads with osteosarcoma risk; never asks about the brother; offers bloods with no explanation of Paget’s; no plan or safety-net.",
    "pass": "States clearly it is Paget’s, not cancer; explains what Paget’s is; plans bloods and referral; mentions monitoring and gives a safety-net.",
    "exc": "All of the above, plus: answers the cancer question within the first minute with the reason; links the hat, headache and hip ache to the diagnosis; acknowledges the brother’s death and the app shock; puts complications in proportion; offers to involve his wife; teach-back."
   },
   "avoid": [
    {
     "dont": "“We can’t say for certain it isn’t cancer until we’ve done more tests.”",
     "instead": "“No, this is not cancer. The report shows the typical pattern of Paget’s disease and nothing aggressive.”",
     "why": "Hedging leaves him half-reassured when the evidence supports a clear answer."
    },
    {
     "dont": "“Paget’s can turn into bone cancer, so we’ll need to watch it.”",
     "instead": "“We monitor it, and a new rapidly worsening pain or lump is something I’d want to know about. That’s rare.”",
     "why": "Leading with a rare complication rebuilds the fear you have just taken apart."
    },
    {
     "dont": "“You shouldn’t read results on the app before we’ve explained them.”",
     "instead": "“I’m sorry you saw those words before anyone could explain them.”",
     "why": "Blaming him for using his record access adds shame to fear."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Bereavement",
     "t": "His brother’s death from cancer that spread to bone shapes how he reads every result. Acknowledging the loss is part of the reassurance."
    },
    {
     "h": "Keeping it from his wife",
     "t": "He has not told his wife he saw the result. Offer a joint follow-up so neither the scare nor the reassurance is carried alone."
    }
   ],
   "legal": [
    {
     "h": "Record access",
     "t": "Patients can see results and letters through online record access, often before a clinician has explained them. Practices should have a process for results that are likely to cause alarm."
    }
   ],
   "professional": [
    {
     "h": "Communicating results",
     "t": "GMC Good Medical Practice (2024): give information in a way the patient can understand, and be honest about uncertainty without creating false alarm. Here the uncertainty is small and should be described as such."
    },
    {
     "h": "Documentation",
     "t": "Record the explanation given, his concerns about cancer, the plan for bloods and referral, and the safety-net."
    }
   ],
   "community": [
    {
     "h": "Information and support",
     "t": "Paget’s Association (patient information and helpline); Cruse Bereavement Support if grief for his brother resurfaces."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "New, rapidly worsening bone pain or a swelling over affected bone — rare sarcomatous change",
     "Weight loss, night pain or new lumps — reconsider malignancy",
     "New headache at 71 with scalp tenderness, jaw claudication or visual change — giant cell arteritis"
    ],
    "psychosocial": [
     "Brother died of cancer spread to bone",
     "Saw the result alone on the app; has not told his wife",
     "Retired joiner — activity and function with hip pain"
    ],
    "ice": [
     "Idea: “Abnormal bone” means bone cancer or cancer that has spread",
     "Concern: dying the way his brother did",
     "Expectation: a straight answer"
    ]
   },
   "diagnosis": "Paget’s disease of bone affecting the pelvis, with raised bone-source ALP and normal calcium; headache and a tighter hat suggest skull involvement. Benign; no radiological features of malignancy.",
   "diagnosisLay": "“It’s not cancer. It’s Paget’s disease — the bone renews itself too fast and a bit untidily, so it gets thicker and larger. That’s why your hip aches and your hat feels tighter. It’s treatable and we keep an eye on it.”",
   "management": {
    "reflectIce": "“You were afraid this was what happened to your brother. I can tell you with confidence it isn’t.”",
    "psychosocial": "Acknowledge his grief, apologise for the unexplained app result, and offer to see him with his wife.",
    "sharedPlan": [
     "Bloods: ALP with LFTs (GGT), calcium, vitamin D, renal function",
     "Referral to the bone specialists; radionuclide bone scan to map active disease",
     "Symptom-led treatment: zoledronic acid for bone pain after calcium and vitamin D are replete; simple analgesia meanwhile"
    ],
    "safetyNet": [
     "Report hearing change, rapidly worsening pain, a lump over bone, or a suspected fracture",
     "Review with results, with his wife if he wishes"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Abnormal bone profile",
    "s": "Visual algorithm · raised ALP · Paget’s",
    "href": "algorithms/abnormal-bone-profile.html"
   },
   {
    "ic": "🗺️",
    "t": "Abnormal LFTs",
    "s": "Visual algorithm · isolated raised ALP",
    "href": "algorithms/abnormal-lfts.html"
   },
   {
    "ic": "📋",
    "t": "Hip pain",
    "s": "Case walkthrough · older adults",
    "href": "../cases/hip-pain.html"
   },
   {
    "ic": "🗺️",
    "t": "Hearing loss",
    "s": "Visual algorithm · assessment",
    "href": "algorithms/hearing-loss.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests results communication. The diagnosis is benign and the evidence is clear, so candidates fail by hedging, by frightening him with rare complications, or by never reaching his brother.",
   "items": [
    {
     "dom": "rto",
     "fail": "Gathering a full history before answering “is it cancer?”.",
     "why": "He cannot listen until the question is answered; “does not respond to the patient’s agenda”.",
     "fix": "Answer in the first minute: “No, it isn’t cancer — it’s Paget’s disease”, then explain."
    },
    {
     "dom": "tasks",
     "fail": "Hedging: “we can’t rule anything out until the scan”.",
     "why": "The report and bloods support a confident benign diagnosis; hedging leaves him half-reassured.",
     "fix": "Give the basis for confidence: typical pattern, no aggressive features, normal calcium."
    },
    {
     "dom": "tasks",
     "fail": "Leading with osteosarcoma and fracture risk.",
     "why": "Rare complications eclipse the reassurance and rebuild the fear.",
     "fix": "Mention complications as reasons for monitoring, after the benign explanation."
    },
    {
     "dom": "tasks",
     "fail": "Treating to normalise ALP, or starting treatment without checking calcium and vitamin D.",
     "why": "The Paget’s Association guideline (2019) favours symptom-led treatment; low vitamin D raises the risk of hypocalcaemia after zoledronic acid.",
     "fix": "Bloods first, specialist referral, bisphosphonate for bone pain."
    },
    {
     "dom": "rto",
     "fail": "Never exploring the brother or the wife.",
     "why": "The hidden agenda is grief and secrecy; missing it loses the Relating domain.",
     "fix": "“You mentioned your brother — would you tell me about him?” Then offer a joint follow-up."
    },
    {
     "dom": "gs",
     "fail": "Using jargon: “isolated raised ALP, pagetic changes, sclerotic lesions”.",
     "why": "“Language not easily understood by the patient.”",
     "fix": "Plain words: “the bone renews itself too fast and a bit untidily”."
    }
   ]
  }
 },
 "pmr-gca": {
  "stem": {
   "name": "Eleanor Vance",
   "age": "72-year-old woman",
   "pmh": [
    "Hypertension",
    "Carer for her husband (dementia)"
   ],
   "meds": [
    "Amlodipine"
   ],
   "allergy": "No known drug allergies",
   "recent": "No recent bloods on record. No previous steroid prescriptions. Telephone request via reception: “something for the stiffness”.",
   "reason": "Telephone call: about 6 weeks of shoulder and hip stiffness; asking for a course of steroids."
  },
  "knowledge": {
   "guideline": "BSR GCA guideline (Mackie et al., 2020) · BSR/BHPR PMR guideline (Dasgupta et al., 2010) · NOGG 2024 · NatPSA/2020/005 Steroid Emergency Card · NICE NG243 (2024) · BNF",
   "summary": "Girdle pain and long morning stiffness at 72 fits polymyalgia, but a new headache, scalp tenderness and jaw pain on chewing mean suspected giant cell arteritis. Start high-dose prednisolone today and refer on the GCA fast-track pathway; tests must not delay treatment.",
   "points": [
    {
     "h": "PMR picture",
     "t": "BSR/BHPR 2010: age over 50, bilateral shoulder and/or pelvic girdle aching with inflammatory morning stiffness for 2 weeks or more and raised inflammatory markers. Baseline bloods before steroids: FBC, ESR or CRP, U&E, LFT, bone profile, protein electrophoresis, TSH, CK, rheumatoid factor and urine dipstick. Isolated PMR starts at prednisolone 15 mg daily."
    },
    {
     "h": "Always ask the GCA questions",
     "t": "PMR and GCA overlap. Ask every patient with PMR symptoms about new headache (often temporal, one-sided), scalp tenderness, jaw or tongue claudication, visual disturbance and systemic upset. Jaw claudication is a high-risk feature."
    },
    {
     "h": "Treat on suspicion",
     "t": "BSR 2020: suspected GCA without visual loss — prednisolone 40–60 mg once daily, started by the GP the same day. Acute or intermittent visual loss — IV methylprednisolone (500 mg–1 g daily for up to 3 days) via same-day ophthalmology; do not delay oral steroid if IV is not immediately possible."
    },
    {
     "h": "Fast-track pathway",
     "t": "BSR 2020: refer urgently to the local GCA fast-track service — specialist review ideally the same working day and in all cases within 3 working days. Ultrasound of the temporal and axillary arteries (ideally before or within 72 hours of the first dose) and/or temporal artery biopsy (at least 1 cm), arranged urgently through the pathway, because steroids reduce test sensitivity. Tests must never delay treatment."
    },
    {
     "h": "Steroid safety",
     "t": "NOGG 2024: starting prednisolone 7.5 mg/day or more for 3 months or longer in a postmenopausal woman — start bone protection at the same time, without waiting for DXA. BSR 2020: gastroprotection according to GI risk, not routinely. NatPSA/2020/005: Steroid Emergency Card for 5 mg or more for 4 weeks or longer; sick-day rules per NICE NG243. Monitor glucose and BP. Never stop suddenly."
    },
    {
     "h": "The long course",
     "t": "BSR 2020: hold the starting dose until symptoms and inflammatory markers have settled, then taper slowly to an individualised plan; the course commonly lasts 12–24 months. Symptoms usually respond within 1–7 days; no response should prompt a rethink."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Mrs Vance? It’s Dr Lee from the surgery. Can I just check your date of birth? … Thank you. Is now a good time to talk? … You’ve had a rough few weeks by the sound of it — tell me what’s been going on.",
    "dom": "rto",
    "why": "Confirms identity on the phone and opens with the patient’s story"
   },
   {
    "who": "pt",
    "text": "Oh, it’s this stiffness, doctor. Shoulders and hips, for about six weeks. Mornings are dreadful — a couple of hours before I can lift my arms to brush my hair. My friend had polymyalgia and steroids sorted her right out. Could I have a course of those? Oh, and I’ve had a bit of a headache this week, but that’s neither here nor there."
   },
   {
    "who": "dr",
    "text": "That sounds really hard, and you may well be right about polymyalgia. I do want to get you something that helps. Before I prescribe, I’d like to ask a few questions — including about that headache — and then we’ll agree a plan. Is that all right?",
    "dom": "gs",
    "why": "Accepts her idea as plausible but keeps the headache on the agenda"
   },
   {
    "who": "pt",
    "text": "Yes, of course."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about the stiffness first. Is it both sides? And do you feel unwell in yourself — any weight loss, fevers or sweats?",
    "dom": "tasks",
    "why": "Confirms the girdle pattern and screens systemic features"
   },
   {
    "who": "pt",
    "text": "Both sides, yes. Getting out of bed is a performance. I’ve been tired, but I put that down to everything."
   },
   {
    "who": "dr",
    "text": "Now that headache — you brushed it off, but I’d like to hear about it. Where is it, and is it new for you?",
    "dom": "rto",
    "why": "Picks up the dismissed cue rather than letting it pass"
   },
   {
    "who": "pt",
    "text": "It’s on this side, by my temple. It’s new — I don’t really get headaches."
   },
   {
    "who": "dr",
    "text": "Thank you. A few specific questions. Is your scalp tender — say when you brush your hair or lay your head on the pillow? And does your jaw ache when you chew, easing when you stop?",
    "dom": "tasks",
    "why": "Asks directly about scalp tenderness and jaw claudication"
   },
   {
    "who": "pt",
    "text": "Now you mention it, yes — the pillow is sore on that side. And my jaw aches halfway through a meal. I thought it was my teeth."
   },
   {
    "who": "dr",
    "text": "That’s really important, I’m glad you told me. Any change at all in your eyesight — blurring, double vision, or a patch or curtain of vision going, even briefly?",
    "dom": "tasks",
    "why": "Screens for visual symptoms, which change the urgency"
   },
   {
    "who": "pt",
    "text": "No, my eyes are fine. So that’s good, isn’t it?"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "It’s good that your sight is fine — and I’ll explain why that matters in a moment. You mentioned wanting a course of steroids. What have you heard about them?",
    "dom": "rto",
    "why": "Explores her expectation and what sits behind it"
   },
   {
    "who": "pt",
    "text": "Well, my friend said a short course. But I’ve heard about the weight, the moon face, the bones. I don’t want to be on them for ages. And I look after my husband — he has dementia — so I really can’t be ill."
   },
   {
    "who": "dr",
    "text": "That’s a lot to be holding, and it makes sense you want this over quickly. Thank you for telling me about your husband — I’ll make sure the plan works around him.",
    "dom": "rto",
    "why": "Names the steroid fear and the carer pressure before the explanation"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s my honest view. The stiffness does sound like polymyalgia. But a new headache on one side, a tender scalp and jaw ache when you chew point to a related condition called giant cell arteritis — inflammation in the blood vessels around the temple. Untreated, it can cause sudden and permanent loss of sight. Your eyesight being fine now is exactly why we act today — to keep it that way.",
    "dom": "tasks",
    "why": "Explains GCA and reframes normal vision as the window to protect it"
   },
   {
    "who": "pt",
    "text": "Goodness. I had no idea. I thought it was just a headache."
   },
   {
    "who": "dr",
    "text": "That’s why I asked. So I don’t want to wait for tests. I’m going to prescribe steroid tablets today at a much higher dose than your friend had — that’s what protects the eyes. I’ll send it to your pharmacy now, and I’d like you to start it as soon as you collect it.",
    "dom": "tasks",
    "why": "Starts high-dose prednisolone the same day without waiting for results"
   },
   {
    "who": "pt",
    "text": "Today? But what about the side effects?"
   },
   {
    "who": "dr",
    "text": "It’s a fair question. There are downsides on a longer course and I won’t pretend otherwise. But here the balance is clear — your sight comes first. I’ll protect your bones and stomach, check your sugar and blood pressure, and give you a steroid card. We’ll bring the dose down slowly once things settle — not all at once.",
    "dom": "rto",
    "why": "Addresses the steroid fear honestly and weighs it against sight"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’m also referring you today to the hospital’s rapid-access service for this condition. They aim to see people within a few days, often the same day, and they’ll arrange a scan or a small biopsy of the artery to confirm it. I’d like bloods today as well. Can you get to the surgery this afternoon?",
    "dom": "tasks",
    "why": "Arranges fast-track referral and same-day bloods alongside treatment"
   },
   {
    "who": "pt",
    "text": "I’d need someone to sit with my husband. I’m not sure who."
   },
   {
    "who": "dr",
    "text": "Let’s solve that together. Our team can look at who could help for the appointments, and I’d like to arrange a carer’s assessment so you have support if you’re unwell. Would that be okay?",
    "dom": "gs",
    "why": "Builds the carer constraint into the plan so it happens"
   },
   {
    "who": "pt",
    "text": "Yes. I hadn’t thought about what happens if I’m the one who’s poorly."
   },
   {
    "who": "dr",
    "text": "That’s exactly why it matters. Staying well and keeping your sight is how you keep looking after him.",
    "dom": "rto",
    "why": "Frames treatment as protecting her role as a carer"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "The most important thing I’ll say today: if you get any change in your vision — blurring, double vision, or part of your sight going, even for a few minutes — that is an emergency. Call 999 or go straight to A&E and say you’re being treated for giant cell arteritis. Don’t wait to see if it passes.",
    "dom": "gs",
    "why": "Specific visual safety-net with an action and a phrase to use"
   },
   {
    "who": "pt",
    "text": "I understand. Any change in my eyes, 999."
   },
   {
    "who": "dr",
    "text": "Exactly. Never stop the steroid suddenly, and carry the card. I’ll ring you tomorrow to check you’ve started and to go through the bloods. Can you tell me back the three things you’re doing today?",
    "dom": "rto",
    "why": "Teach-back and a dated follow-up"
   },
   {
    "who": "pt",
    "text": "Start the tablets, bloods this afternoon, and 999 if my eyes change. And the hospital will call."
   },
   {
    "who": "dr",
    "text": "Perfect. You did the right thing ringing. Anything else you wanted to ask?",
    "dom": "rto",
    "why": "Checks understanding and shares the floor"
   },
   {
    "who": "pt",
    "text": "No, thank you, doctor. I’m glad I mentioned the headache now."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question on the phone after an identity check; let her give the whole story, including the headache she dismissed.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Caring role for her husband with dementia; who covers him for appointments; the impact of the stiffness on daily tasks.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “a bit of a headache, neither here nor there” and turned it into specific GCA questions.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (polymyalgia like her friend); concern (steroid side effects, being unable to care for her husband); expectation (a short course).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Same-day bloods (FBC, ESR/CRP, U&E, LFT, bone profile, glucose) without delaying steroids; fast-track referral for ultrasound or biopsy.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "PMR alone versus PMR with GCA; PMR mimics (myeloma, other inflammatory arthritis) kept in mind.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked directly about scalp tenderness, jaw claudication and visual symptoms; knew visual loss means same-day ophthalmology and IV steroid.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated suspected GCA with PMR and explained it in plain words — sight is at risk, normal vision now is the window.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Prednisolone 40–60 mg started today (not the PMR dose), fast-track referral, bone protection, Steroid Emergency Card and a slow taper explained.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Hypertension and glucose monitoring on steroids; bone protection per NOGG 2024; gastroprotection considered; carer’s assessment offered.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named visual symptoms as a 999 emergency, never stop steroids suddenly, and a GP call the next day.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Eleanor Vance",
    "age": "72 years · female",
    "pmh": [
     "Hypertension",
     "Carer for husband (dementia)"
    ],
    "meds": [
     "Amlodipine"
    ],
    "allergy": "NKDA",
    "recent": "⚠ No bloods in the last 12 months. No steroid history. Reception note: “wants something for the stiffness — friend had polymyalgia”.",
    "reason": "Telephone appointment. “Stiff every morning — could I have a course of steroids?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "She opens with the diagnosis and the request, and throws away the headache. Note it and agree an agenda that includes it."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Girdle pattern and morning stiffness, systemic features, then the GCA questions: temporal headache, scalp tenderness, jaw claudication, any visual symptoms."
    },
    {
     "t": "4–6",
     "h": "ICE and hidden agenda",
     "d": "Steroid fear (weight, bones, moon face) and her husband with dementia. Name both before you explain anything."
    },
    {
     "t": "6–10",
     "h": "Explain and act",
     "d": "Suspected GCA — sight at risk. Prednisolone 40–60 mg today, fast-track referral, same-day bloods, bone and stomach protection, steroid card. Solve who sits with her husband."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Any visual change is a 999 call. Never stop steroids suddenly. GP call tomorrow. Teach-back of the three actions for today."
    }
   ],
   "wordPics": {
    "fail": "Accepts the PMR label and prescribes 15 mg, or a short course, without asking about the headache; or asks about GCA but then waits for blood results before treating; no visual safety-net; the steroid fear and the husband are never mentioned.",
    "pass": "Asks the GCA questions and recognises the red flags; starts high-dose prednisolone today and refers on the fast-track pathway; arranges bloods; gives a clear visual-loss safety-net and mentions steroid side effects.",
    "exc": "All of the above, plus: turns her dismissed headache into the key finding without alarming her; explains why normal eyesight is the reason to act now; weighs steroid fears honestly with bone protection and a steroid card; builds her husband’s care into the plan with a carer’s assessment; closes with teach-back and a next-day call."
   },
   "avoid": [
    {
     "dont": "“It sounds like polymyalgia — I’ll send you some steroids like your friend had.”",
     "instead": "“Before I prescribe, tell me more about that headache — is your scalp sore, and does your jaw ache when you chew?”",
     "why": "Treating GCA at the PMR dose, or missing it, is the dangerous fail in this station."
    },
    {
     "dont": "“Let’s get some bloods first and I’ll decide on steroids when they’re back.”",
     "instead": "“I don’t want to wait for tests — the steroid starts today, and the tests follow.”",
     "why": "BSR 2020: tests must never delay treatment in suspected GCA."
    },
    {
     "dont": "“Don’t worry about the side effects, it’s only for a short while.”",
     "instead": "“This will be a longer course, and I’ll protect your bones and stomach — but your sight comes first.”",
     "why": "False reassurance about duration undermines trust when the taper takes a year or more."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Carer responsibilities",
     "t": "She cares for her husband with dementia. Appointments, a possible biopsy and feeling unwell on treatment all need cover for him — plan it now or she will not attend."
    },
    {
     "h": "Living with steroids",
     "t": "Weight, mood, sleep and appetite change on high doses. Practical support and honest expectations improve adherence over a long taper."
    }
   ],
   "legal": [
    {
     "h": "Care Act 2014 carer’s assessment",
     "t": "Any carer who appears to have support needs is entitled to a local authority carer’s assessment. Her husband can have a needs assessment and contingency planning if she becomes unwell."
    },
    {
     "h": "Driving and vision",
     "t": "No action needed while vision is normal. If GCA causes visual loss or a visual field defect, she must tell the DVLA and meet the Group 1 eyesight standard before driving."
    }
   ],
   "professional": [
    {
     "h": "Acting on suspicion",
     "t": "Starting high-dose steroid before confirmation is correct practice here (BSR 2020). Document the red flags, the dose, the referral and the safety-net advice given (GMC Good Medical Practice 2024)."
    },
    {
     "h": "Remote consultation limits",
     "t": "A phone call cannot examine the temporal artery or check acuity. Recognise the limit and bring examination and bloods forward the same day rather than deferring treatment."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "PMRGCAuk (patient charity) for information and peer support; local carers’ centre and Carers UK; Dementia UK Admiral Nurses for her husband’s care planning."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "New one-sided headache, scalp tenderness, jaw or tongue claudication — suspected GCA",
     "Any visual symptom (transient blurring, double vision, field loss) — same-day ophthalmology and IV steroid",
     "Weight loss, night sweats, bone pain — consider PMR mimics such as myeloma"
    ],
    "psychosocial": [
     "Sole carer for a husband with dementia — who covers him for appointments and if she is unwell",
     "Steroid fears drawn from a friend’s experience and what she has read",
     "Impact of the stiffness on dressing, washing and caring tasks"
    ],
    "ice": [
     "Idea: “It’s polymyalgia, like my friend had.”",
     "Concern: steroid side effects, and not being able to look after her husband",
     "Expectation: a short course of steroids for the stiffness"
    ]
   },
   "diagnosis": "Be clear that this is suspected giant cell arteritis alongside polymyalgia: “The stiffness fits polymyalgia, but the headache, tender scalp and jaw ache point to inflammation in the arteries that can threaten your sight — so we treat it today.”",
   "diagnosisLay": "“Think of the blood vessels to your eye as a hosepipe that’s getting inflamed and narrowed. At the moment water is still getting through — your sight is fine. The steroid calms the inflammation before the hose is squeezed shut.”",
   "management": {
    "reflectIce": "“You were hoping for a short course, and you need to stay well for your husband. Treating this properly now is exactly what keeps you able to look after him.”",
    "psychosocial": "Arrange cover for her husband for the bloods and the specialist visit; offer a carer’s assessment and a contingency plan; give written steroid information to take away.",
    "sharedPlan": [
     "Prednisolone 40–60 mg daily started today; fast-track GCA referral; same-day bloods",
     "Bone protection, consider a PPI, Steroid Emergency Card, glucose and BP monitoring",
     "Slow taper led by the specialist team; carer’s assessment and cover for appointments"
    ],
    "safetyNet": [
     "Any visual change — 999 or A&E, say “giant cell arteritis”",
     "Never stop steroids suddenly; sick-day rules; GP call tomorrow"
    ]
   }
  },
  "links": [
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
    "t": "Headache pathway",
    "s": "Visual algorithm · red flags",
    "href": "algorithms/headache.html"
   },
   {
    "ic": "🗺️",
    "t": "Vision loss pathway",
    "s": "Visual algorithm · same-day triage",
    "href": "algorithms/vision-loss.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is not about knowing that GCA exists. It is failed on accepting the patient’s label, delaying steroids for tests, and ignoring the two things she is really worried about.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting “it’s polymyalgia” and prescribing 15 mg without asking about the headache.",
     "why": "“Does not gather sufficient information to make a safe assessment.” She mentioned the headache once, then dismissed it — that is the test.",
     "fix": "Go back to it explicitly: side, newness, scalp tenderness, jaw claudication, visual symptoms."
    },
    {
     "dom": "tasks",
     "fail": "Recognising GCA but waiting for ESR and CRP before starting steroids.",
     "why": "BSR 2020: start prednisolone 40–60 mg on clinical suspicion; tests must not delay treatment.",
     "fix": "“The steroid starts today; the tests follow.” Bloods the same day, and a fast-track referral."
    },
    {
     "dom": "tasks",
     "fail": "Starting high-dose steroid with no bone protection, steroid card or taper plan.",
     "why": "“Management plan not in line with current UK best practice.” NOGG 2024 advises bone protection from the start in this group; NatPSA/2020/005 requires a Steroid Emergency Card.",
     "fix": "Name bone protection, consider a PPI, give the card, and say the dose comes down slowly."
    },
    {
     "dom": "rto",
     "fail": "Saying “don’t worry about side effects” when she raises moon face and bones.",
     "why": "“Does not respond to the patient’s concerns.” Brushing off an informed fear loses the trust needed for a year-long course.",
     "fix": "Acknowledge the downsides honestly, then weigh them openly against permanent loss of sight."
    },
    {
     "dom": "rto",
     "fail": "Never returning to her husband after she mentions his dementia.",
     "why": "The carer role is why she is minimising. If nobody can sit with him, she will not attend.",
     "fix": "“Who could be with your husband this afternoon?” Offer a carer’s assessment and help with cover."
    },
    {
     "dom": "gs",
     "fail": "A vague close — “ring us if things get worse”.",
     "why": "Non-specific safety-netting is standard failing feedback, and here it risks her sight.",
     "fix": "“Any change in your vision, even brief — 999 or A&E, and say giant cell arteritis.” Then teach-back and a dated call."
    }
   ]
  }
 },
 "ptsd-veteran": {
  "stem": {
   "name": "Craig Mullen",
   "age": "39-year-old man",
   "pmh": [
    "Chronic back pain",
    "Army veteran (two operational tours)"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "Works as a security guard. No recent consultations recorded.",
   "reason": "Telephone appointment: back pain, poor sleep and “a short fuse”. Wants something for the pain and the sleep."
  },
  "knowledge": {
   "guideline": "NICE NG116 (post-traumatic stress disorder, 2018) · NICE NG59 (low back pain and sciatica, 2016, updated 2026) · NICE CG115 (alcohol-use disorders, 2011) · NICE NG225 (self-harm, 2022) · Op COURAGE (NHS England veterans’ mental health service)",
   "summary": "Nightmares, flashbacks, hypervigilance, avoidance and anger since leaving the Army, presenting as back pain and insomnia, is probable PTSD. Assess risk, offer trauma-focused therapy through Op COURAGE, treat the drinking, and avoid dependence-forming drugs.",
   "points": [
    {
     "h": "PTSD in a physical mask",
     "t": "Re-experiencing (nightmares, flashbacks), avoidance (crowds, news), hyperarousal (hypervigilance, startle, irritability, poor sleep) and emotional numbing after trauma. Veterans often present with pain, sleep, anger or alcohol and avoid “mental health” words."
    },
    {
     "h": "Trauma-focused therapy first",
     "t": "NICE NG116: offer individual trauma-focused CBT to adults with PTSD. EMDR is recommended for PTSD after non-combat-related trauma; NG116 does not recommend it for combat-related trauma, where the evidence did not show benefit."
    },
    {
     "h": "Medication",
     "t": "NICE NG116: consider venlafaxine or an SSRI such as sertraline if the person prefers drug treatment. NG116 advises against drug treatments, including benzodiazepines, to prevent PTSD. Hypnotics and opioids do not treat PTSD and add dependence risk."
    },
    {
     "h": "Veteran-specific service",
     "t": "Op COURAGE is the NHS mental health service for veterans in England. Veterans can self-refer or be referred by their GP. Record veteran status on the notes."
    },
    {
     "h": "Risk",
     "t": "Ask directly about suicidal thoughts, plans and means, and about the risk of harm to others given the escalating anger, including any contact with his children. Heavy drinking raises impulsivity. NICE NG225 advises against risk scales to decide care."
    },
    {
     "h": "The back and the drink",
     "t": "Screen back pain red flags. NICE NG59: do not offer opioids for chronic low back pain; consider an oral NSAID at the lowest dose for the shortest time, with exercise. Quantify alcohol with AUDIT-C; NICE CG115 for assessment and specialist referral if dependent."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Mullen, it’s Dr Lee. Thanks for calling. Tell me what’s going on.",
    "dom": "rto",
    "why": "Brief, open start for a man who wants it kept simple"
   },
   {
    "who": "pt",
    "text": "I’m not one for phone calls about feelings, so I’ll keep it simple. My back’s wrecked, I’m not sleeping, and my temper’s gone. I nearly lost it with a bloke at work and I’m on a warning. I just need something for the pain and the sleep. I’ve had enough of being passed around."
   },
   {
    "who": "dr",
    "text": "Understood, and I won’t pass you around. Let’s be practical. I’ll ask about the back, then the sleep and the temper, and then we’ll agree what helps. Fair?",
    "dom": "gs",
    "why": "Accepts his terms and sets a clear structure"
   },
   {
    "who": "pt",
    "text": "Fair."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "The back first. Any numbness between your legs, trouble passing water or controlling your bowels, weakness in the legs, fevers or weight loss?",
    "dom": "tasks",
    "why": "Back pain red flags covered quickly"
   },
   {
    "who": "pt",
    "text": "No. It just aches, all the time."
   },
   {
    "who": "dr",
    "text": "And the sleep. When you wake, what wakes you?",
    "dom": "rto",
    "why": "Open question into the content of the insomnia"
   },
   {
    "who": "pt",
    "text": "(Pause.) Dreams. Bad ones."
   },
   {
    "who": "dr",
    "text": "Can I ask a couple of straight questions? You’ve served. Do the dreams take you back there? Do you ever get moments in the day where it feels like it’s happening again?",
    "dom": "tasks",
    "why": "Gently screens for re-experiencing"
   },
   {
    "who": "pt",
    "text": "Yeah. Both. Since I came out."
   },
   {
    "who": "dr",
    "text": "Do you find yourself on guard, sitting with your back to the wall, jumping at noises, keeping away from crowds?",
    "dom": "tasks",
    "why": "Screens hyperarousal and avoidance"
   },
   {
    "who": "pt",
    "text": "Always back to the wall. Can’t do crowds. Don’t watch the news."
   },
   {
    "who": "dr",
    "text": "And how much are you drinking to get to sleep?",
    "dom": "tasks",
    "why": "Quantifies alcohol"
   },
   {
    "who": "pt",
    "text": "Too much. Most nights. It’s the only way I switch off."
   },
   {
    "phase": "Ideas, concerns and risk",
    "clock": "5–8 min",
    "who": "dr",
    "text": "What you’re describing, the dreams, the flashbacks, being on guard, the temper, is a very common reaction to what people see on tours. It’s got a name, PTSD, and it’s an injury, not a weakness. How does that sit with you?",
    "dom": "rto",
    "why": "Names PTSD as an injury and checks his reaction"
   },
   {
    "who": "pt",
    "text": "Sounds like you’re saying I’m broken. Soldiers deal with it."
   },
   {
    "who": "dr",
    "text": "I’m saying you’ve been dealing with it on your own for a long time, and it’s costing you. Asking for help with it is the same as getting a wound seen to.",
    "dom": "rto",
    "why": "Addresses the shame and identity barrier"
   },
   {
    "who": "dr",
    "text": "I ask this of anyone this worn down. Have you had thoughts of ending your life, or of seriously hurting someone else?",
    "dom": "tasks",
    "why": "Direct questions about risk to self and others"
   },
   {
    "who": "pt",
    "text": "(Pause.) Not ending it. The temper scares me though."
   },
   {
    "who": "dr",
    "text": "You mentioned things are difficult with your kids. Is keeping away from them partly about that temper?",
    "dom": "rto",
    "why": "Follows the cue about his children, gently"
   },
   {
    "who": "pt",
    "text": "(Quiet.) I don’t trust myself round them. So I stay away."
   },
   {
    "who": "dr",
    "text": "That tells me you’re trying to protect them, at a cost to yourself. That isn’t a bad dad. With treatment the temper settles, and that’s something we can work towards.",
    "dom": "rto",
    "why": "Reframes self-removal and offers hope"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what I suggest. There’s an NHS service just for veterans, Op COURAGE. They offer trauma-focused therapy that works for combat-related PTSD. I can refer you today, or you can call them yourself.",
    "dom": "tasks",
    "why": "Veteran-specific referral and NG116 therapy"
   },
   {
    "who": "pt",
    "text": "Veterans only? Not some bloke who’s never been anywhere?"
   },
   {
    "who": "dr",
    "text": "Veterans only. They understand forces life. For the sleep I won’t give you sleeping tablets, because they don’t fix the dreams and they’re easy to get hooked on. If you want medication alongside therapy, there’s an antidepressant that helps PTSD symptoms and isn’t addictive.",
    "dom": "tasks",
    "why": "Avoids hypnotics; offers NG116 drug option"
   },
   {
    "who": "dr",
    "text": "For the back, keep moving, and an anti-inflammatory for short spells can help, not strong painkillers long term. And the drink: would you be willing to cut back, with some support? It’s feeding the temper and the dreams.",
    "dom": "tasks",
    "why": "NG59 back advice and alcohol negotiated"
   },
   {
    "who": "pt",
    "text": "I can try. Referral’s fine. Do it."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If the dark thoughts come, or you feel you might lose control with someone, call 999, or NHS 111 with the mental health option. Combat Stress also has a 24-hour helpline for veterans. I’ll call you in two weeks myself.",
    "dom": "gs",
    "why": "Crisis routes and named follow-up"
   },
   {
    "who": "dr",
    "text": "So I know we’re on the same page, what are you taking away from this call?",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Op COURAGE referral. Cut back the drink. No sleeping pills. Ring if it gets bad. You ring me in two weeks."
   },
   {
    "who": "dr",
    "text": "Spot on. And you won’t be passed around; I’m your point of contact. Anything else?",
    "dom": "rto",
    "why": "Continuity answers his main frustration"
   },
   {
    "who": "pt",
    "text": "No. Cheers, doc."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Accepted his practical framing and his wish not to be passed around; open question into the sleep.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work warning, relationship breakdown, estrangement from his children, alcohol, military identity.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “bad dreams”, the pause, and the comment about his kids, and explored each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (physical problems needing tablets); concern (being “broken”, his anger around his children); expectation (painkillers and sleeping tablets).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Back red flags; AUDIT-C; a validated PTSD screen can support the referral; face-to-face back examination if red flags or new features.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "PTSD; depression; alcohol use disorder; mechanical back pain versus serious spinal pathology.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Suicide and harm to others asked directly; back red flags excluded.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Names probable PTSD as an injury, not weakness, and links the sleep, anger and drinking to it.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Op COURAGE and trauma-focused CBT; no hypnotics or opioids; optional SSRI or venlafaxine; NG59 back advice.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Alcohol reduction with support; work pressures; family relationships.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999, NHS 111 mental health option, Combat Stress helpline, GP call in two weeks, named contact.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "Health disadvantage & vulnerabilities",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Craig Mullen",
    "age": "39 years · male",
    "pmh": [
     "Chronic back pain",
     "Veteran: Army, two operational tours"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Security guard. Chronic back pain on the problem list. Veteran status recorded. No recent consultations.",
    "reason": "Telephone: back pain, poor sleep, short temper. “I just need something for the pain and the sleep.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Accept his terms",
     "d": "Short, practical, no feelings talk. Promise not to pass him around."
    },
    {
     "t": "1–5",
     "h": "Back, then sleep",
     "d": "Back red flags. What wakes him? Nightmares, flashbacks, hypervigilance, avoidance, alcohol."
    },
    {
     "t": "5–8",
     "h": "Name it and ask about risk",
     "d": "PTSD as an injury. Suicide and harm to others. The children, gently."
    },
    {
     "t": "8–11",
     "h": "Plan",
     "d": "Op COURAGE, trauma-focused CBT, no hypnotics or opioids, optional antidepressant, back advice, alcohol."
    },
    {
     "t": "11–12",
     "h": "Safety-net and close",
     "d": "999, NHS 111 mental health option, Combat Stress, GP call in two weeks, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes codeine and zopiclone; never asks about nightmares or service; no risk questions; or pushes “mental health” early and loses him.",
    "pass": "Recognises PTSD; asks about suicide and harm to others; refers to Op COURAGE or talking therapy; avoids hypnotics; addresses alcohol; safety-nets.",
    "exc": "All of the above, plus: engages him on his own terms; reframes PTSD as an injury; gently uncovers why he stays away from his children; knows trauma-focused CBT is the NG116 therapy for combat trauma; offers continuity so he isn’t passed around; checks understanding."
   },
   "avoid": [
    {
     "dont": "“It sounds like you need to see a psychiatrist.”",
     "instead": "“There’s an NHS service just for veterans. They get this, and their therapy works.”",
     "why": "“Psychiatrist” lands as “you’re broken”; a veteran service lands as respect."
    },
    {
     "dont": "“I’ll give you some sleeping tablets to break the cycle.”",
     "instead": "“Sleeping tablets won’t stop the dreams and they’re easy to get hooked on. Let’s treat what’s waking you.”",
     "why": "Hypnotics do not treat PTSD and add dependence risk, especially with alcohol."
    },
    {
     "dont": "“You need to stop drinking.”",
     "instead": "“It sounds like the drink is how you switch off. Would you be willing to cut back, with some help?”",
     "why": "An order invites resistance; a negotiated step is more likely to happen."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Leaving the forces",
     "t": "Loss of structure, identity and comradeship after service. Veterans’ organisations (for example Combat Stress and Veterans’ Gateway) offer peer and practical support."
    },
    {
     "h": "Work and family",
     "t": "A warning at work and estrangement from his children. Treatment of the anger protects both; family contact can be rebuilt over time."
    }
   ],
   "legal": [
    {
     "h": "Equality Act 2010",
     "t": "PTSD can count as a disability if it has a substantial, long-term effect on day-to-day activities. His employer must then consider reasonable adjustments; a fit note can suggest them."
    },
    {
     "h": "Driving",
     "t": "If his symptoms or drinking affect safe driving, he must notify the DVLA (DVLA Assessing fitness to drive). Advise him not to drive after drinking or when exhausted."
    },
    {
     "h": "Children",
     "t": "If he describes a risk of harm to his children, follow local safeguarding procedures (Working Together to Safeguard Children 2026, DfE)."
    }
   ],
   "professional": [
    {
     "h": "Armed Forces Covenant",
     "t": "Veterans should face no disadvantage in accessing NHS care. Record veteran status so services such as Op COURAGE can be offered."
    },
    {
     "h": "Continuity",
     "t": "Being “passed around” drives disengagement. Name a clinician and book the follow-up before the call ends."
    }
   ],
   "community": [
    {
     "h": "Support routes",
     "t": "Op COURAGE (self-referral or GP referral); Combat Stress 24-hour helpline; NHS 111 mental health option; local alcohol service."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Suicidal thoughts, plans or access to means",
     "Risk of harm to others, including his children, from escalating anger",
     "Back pain red flags: saddle numbness, bladder or bowel change, leg weakness, fever, weight loss"
    ],
    "psychosocial": [
     "Warning at work; relationship breakdown; estranged from his children",
     "Heavy drinking to sleep",
     "Military identity and distrust of services"
    ],
    "ice": [
     "Idea: his problems are physical and fixable with tablets",
     "Concern: needing help means he is “broken”; fear of his own anger around his kids",
     "Expectation: painkillers and sleeping tablets, without being passed on again"
    ]
   },
   "diagnosis": "“The dreams, the flashbacks, being on guard and the temper fit PTSD. It’s a common reaction to what you went through on tour, and it’s treatable.”",
   "diagnosisLay": "“Think of it as your alarm system stuck on. It kept you alive on tour, but it hasn’t switched off since you came home. That’s why you can’t sleep and your fuse is short. Therapy helps reset it.”",
   "management": {
    "reflectIce": "“You wanted something practical and you didn’t want to be passed around. So: one referral to the right people, and I stay your contact.”",
    "psychosocial": "Alcohol reduction with support, a fit note or employer adjustments if needed, and a long-term aim of safe contact with his children.",
    "sharedPlan": [
     "Op COURAGE referral for trauma-focused CBT (NICE NG116)",
     "No hypnotics or opioids; sertraline or venlafaxine if he wants medication",
     "Back: keep active, short NSAID courses if suitable (NICE NG59); cut back alcohol"
    ],
    "safetyNet": [
     "999 or NHS 111 mental health option if suicidal or at risk of harming someone; Combat Stress helpline",
     "GP call in two weeks; face-to-face if back red flags develop"
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
    "t": "Harmful drinking and alcohol dependence",
    "s": "Protocol · AUDIT-C · referral",
    "href": "management/alcohol-problem-drinking.html"
   },
   {
    "ic": "📋",
    "t": "Low back pain",
    "s": "Case walkthrough · NICE NG59",
    "href": "../cases/low-back-pain.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is lost by treating the back and the sleep at face value, or by rushing a guarded veteran into “mental health” talk before earning his trust.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing codeine for the back and zopiclone for sleep.",
     "why": "“Did not identify the underlying problem” and “prescribing not in line with guidance” (NICE NG59; NICE NG116).",
     "fix": "Ask what wakes him; screen for nightmares, flashbacks and hypervigilance."
    },
    {
     "dom": "tasks",
     "fail": "Offering EMDR for combat-related PTSD.",
     "why": "NICE NG116 recommends EMDR for non-combat-related trauma, not combat-related trauma.",
     "fix": "Offer trauma-focused CBT via Op COURAGE."
    },
    {
     "dom": "tasks",
     "fail": "No questions about suicide or harm to others.",
     "why": "“Risk not assessed.” Veterans with anger and heavy drinking need both asked directly.",
     "fix": "“Have you had thoughts of ending your life, or of seriously hurting someone?”"
    },
    {
     "dom": "rto",
     "fail": "“I think you have a mental health problem” in the first two minutes.",
     "why": "He has told you he distrusts “head stuff”. Pushing early loses him and the Relating marks.",
     "fix": "Start with the back and sleep, earn trust, then name PTSD as an injury."
    },
    {
     "dom": "rto",
     "fail": "Not following up the comment about his children.",
     "why": "“Did not respond to cues.” It is the heart of his hidden agenda.",
     "fix": "“Is keeping away from them partly about the temper?” Then reframe it as protecting them."
    },
    {
     "dom": "gs",
     "fail": "“The veterans service will be in touch” and nothing more.",
     "why": "He has been passed around before; a vague handover repeats it.",
     "fix": "A named contact, a set call-back date, crisis routes and teach-back."
    }
   ]
  }
 },
 "rectal-bleeding-2ww": {
  "stem": {
   "name": "Gary Underwood",
   "age": "52-year-old man",
   "pmh": [
    "No significant past medical history",
    "Small external haemorrhoids noted some years ago"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Booked a video appointment online, reason given as “haemorrhoid cream”. Occupation: lorry driver. BMI 28. No FBC or FIT on record. Family history on file: father — bowel cancer, died aged 60.",
   "reason": "Requesting a prescription for haemorrhoid cream."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) — suspected colorectal cancer · NICE HTG690 (2023, formerly DG56) — FIT in primary care · BSG iron deficiency anaemia guideline (2021) · BSG/ACPGBI/UKCGG hereditary colorectal cancer guideline (2019)",
   "summary": "Eight weeks of blood mixed with the stool, looser and more frequent motions and unintended weight loss at 52 is a suspected colorectal cancer picture until tested, not a piles flare. Offer FIT, examine in person and check an FBC; FIT at least 10 µg Hb/g means a suspected cancer pathway referral.",
   "points": [
    {
     "h": "Who gets FIT",
     "t": "NICE HTG690: offer quantitative FIT to guide referral in adults with a change in bowel habit, or aged 50 and over with unexplained rectal bleeding, abdominal pain or weight loss. Gary meets it three ways. A previous negative screening FIT does not stop a symptomatic FIT being offered."
    },
    {
     "h": "The referral threshold",
     "t": "NICE NG12 (updated April 2026): refer on a suspected cancer pathway for colorectal cancer if FIT is at least 10 µg Hb/g faeces. A rectal mass, an unexplained anal mass or unexplained anal ulceration does not need FIT first — refer on examination findings."
    },
    {
     "h": "A low FIT does not close the case",
     "t": "NICE HTG690: if FIT is below 10 µg Hb/g, safety-net and do not delay referral to an appropriate secondary care pathway when there is strong clinical concern from ongoing unexplained symptoms. Help people who may struggle to return the sample."
    },
    {
     "h": "Piles do not explain this",
     "t": "Haemorrhoids cause bright-red blood on the paper or dripping into the pan. They do not explain dark blood mixed with the motion, eight weeks of altered habit or weight loss, and visible piles can sit alongside a cancer. Anchoring on a known benign label is a classic cause of delay."
    },
    {
     "h": "Examine and check bloods",
     "t": "Abdominal examination, anal inspection and digital rectal examination are part of the assessment and need a face-to-face appointment. Check FBC and ferritin: BSG (2021) advises lower and upper GI investigation for iron deficiency anaemia in men."
    },
    {
     "h": "The family history, accurately",
     "t": "BSG/ACPGBI/UKCGG (2019): one first-degree relative diagnosed under 50, or two first-degree relatives at any age, is moderate risk with a one-off colonoscopy at 55. A father diagnosed at 60 alone does not reach that bar — it raises the emotional stakes here, but his symptoms are what drive the referral."
    },
    {
     "h": "What the pathway means",
     "t": "Suspected cancer pathway referral is still widely called the two-week wait. The NHS England Faster Diagnosis Standard (October 2023) aims for cancer to be diagnosed or ruled out within 28 days of referral. Usually colonoscopy or CT colonography."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Underwood, I’m Dr Lee. Can I just check you’re somewhere private where you can talk freely? … Great. I can see you’ve asked about some cream for piles — tell me what’s been going on.",
    "dom": "rto",
    "why": "Confirms privacy on video and opens with his story, not the prescription"
   },
   {
    "who": "pt",
    "text": "Yeah, the piles are back. I’m bleeding when I go. Last time it sorted itself, so if you can send some cream to the chemist I’ll get back on the road. Don’t want a load of fuss or examinations."
   },
   {
    "who": "dr",
    "text": "Fair enough — I’ll keep this as quick as I can. I do want to understand the bleeding properly first so I give you the right thing, not just a thing. Then we’ll agree a plan. Is that okay?",
    "dom": "gs",
    "why": "Sets an agenda without agreeing to the cream in advance"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When you say bleeding — how long has it been going on, and what does the blood look like? Is it bright red on the paper, or is it mixed in with the motion itself?",
    "dom": "tasks",
    "why": "Characterises the bleeding — the single most discriminating question"
   },
   {
    "who": "pt",
    "text": "About eight weeks. Mostly every time I go. Sometimes it’s darker… sort of mixed in. It’s not really like last time, if I’m honest."
   },
   {
    "who": "dr",
    "text": "Thank you, that’s really helpful. And have your bowels themselves changed at all — looser, more often, or harder to go?",
    "dom": "tasks",
    "why": "Asks directly about change in bowel habit"
   },
   {
    "who": "pt",
    "text": "Looser, yeah. Going more often, for a couple of months. I put it down to eating rubbish on the road."
   },
   {
    "who": "dr",
    "text": "Any weight loss you haven’t been trying for, or feeling more tired than usual? Any tummy pain, or feeling you haven’t finished after you’ve been?",
    "dom": "tasks",
    "why": "Screens for weight loss, anaemia symptoms and tenesmus"
   },
   {
    "who": "pt",
    "text": "Maybe half a stone off. I’ve been busy, not eating much. Bit more tired. No real pain."
   },
   {
    "who": "dr",
    "text": "And any heavy bleeding — clots, or feeling faint or dizzy when it happens?",
    "dom": "tasks",
    "why": "Excludes a same-day bleed before planning a routine-urgent pathway"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Is there anyone in the family who’s had bowel problems?",
    "dom": "tasks",
    "why": "Takes the family history"
   },
   {
    "who": "pt",
    "text": "My dad. Bowel cancer. He was sixty."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "I’m sorry — that must have been a hard thing to go through. Can I ask gently, with your dad in mind, what’s been going through your head these last few weeks?",
    "dom": "rto",
    "why": "Picks up the bereavement cue and opens the hidden fear"
   },
   {
    "who": "pt",
    "text": "…I watched him go downhill. I’ve got kids. I keep telling myself it’s piles because if it isn’t, I don’t know what I’d do. That’s why I booked a video, if I’m honest."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me that — it takes a lot to say. It makes complete sense that ‘piles and some cream’ felt easier to ask for. I’d rather we face it together than you carry it on your own in the cab.",
    "dom": "rto",
    "why": "Validates the avoidance as fear without colluding with it"
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "So let me be straight with you. Blood mixed in with the motion, looser bowels for two months and weight coming off — together, at 52, that isn’t a simple piles story, and cream wouldn’t be the right answer. It needs checking properly and quickly.",
    "dom": "tasks",
    "why": "Declines the self-diagnosis and names the red-flag cluster in plain words"
   },
   {
    "who": "pt",
    "text": "So you think it’s cancer."
   },
   {
    "who": "dr",
    "text": "I’m not saying that. Most bleeding from the back passage turns out to be something benign. But with your symptoms we don’t guess — we check. Both of those are true at the same time.",
    "dom": "rto",
    "why": "Balances honesty with realistic reassurance"
   },
   {
    "who": "dr",
    "text": "There are three parts. A simple stool test called FIT, which measures tiny amounts of blood — if it’s above a set level, national guidance says you go on the urgent suspected cancer pathway to the bowel team, usually for a camera test. A blood count, to check for anaemia. And I need to examine your tummy and back passage in person — even if I find piles, piles can sit alongside something else.",
    "dom": "tasks",
    "why": "FIT with the NICE NG12 (updated April 2026) threshold, FBC and face-to-face examination"
   },
   {
    "who": "pt",
    "text": "The examination’s the bit I was dodging."
   },
   {
    "who": "dr",
    "text": "I know. It takes a minute or two, you can have a chaperone, and I’ll stop the moment you ask. And if I felt anything on examination, I’d refer you straight away without waiting for the stool test.",
    "dom": "rto",
    "why": "Gives him control over the examination and explains its purpose"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "What would make this workable for you, with the driving and the work?",
    "dom": "rto",
    "why": "Invites his practical barriers into the plan"
   },
   {
    "who": "pt",
    "text": "I’m self-employed. No work, no money. I can’t be off for weeks."
   },
   {
    "who": "dr",
    "text": "Then let’s be efficient. Could you come in today or tomorrow, early or late, for the examination and bloods, and pick up the FIT kit at the same visit? If the hospital does a camera test, it’s usually one morning, and they’ll give you the date in advance so you can plan your runs.",
    "dom": "gs",
    "why": "Tailors timing to a self-employed driver so the plan actually happens"
   },
   {
    "who": "pt",
    "text": "Tomorrow first thing I could do."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Good. Meanwhile — if you get heavy bleeding, clots, feel faint, get bad tummy pain or can’t pass anything, go to A&E. I’ll check the FIT result myself as soon as it’s back and ring you, and if it meets the level I’ll send the referral that day.",
    "dom": "gs",
    "why": "Specific safety-net and a named owner for the result"
   },
   {
    "who": "dr",
    "text": "Just so I know I’ve explained it well — what will you say at home about today?",
    "dom": "rto",
    "why": "Checks understanding with teach-back"
   },
   {
    "who": "pt",
    "text": "That it might not be piles, that I’m getting a stool test and bloods, you’re examining me tomorrow, and if the test is up I get the camera quick. And that it’s probably nothing, but we’re checking."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. You did the right thing booking in, even if it was for cream. See you tomorrow.",
    "dom": "rto",
    "why": "Closes warmly and reinforces attendance"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question on the bleeding rather than writing the cream; confirmed privacy on video; let him give his own account first.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Self-employed lorry driver and sole earner, children at home, what time off means financially, and the video booking as avoidance.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "“It’s not like last time”, the father’s bowel cancer, and “no examinations” — each picked up and explored rather than passed over.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (piles flare), the hidden concern (the same cancer as his father; leaving his children), and his expectation of cream with no examination.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Face-to-face abdominal examination, anal inspection and DRE with chaperone; FIT; FBC and ferritin.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Colorectal cancer, haemorrhoids, fissure, inflammatory bowel disease; blood mixed in the stool and altered habit weighed against a piles pattern.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about weight loss, tiredness, tenesmus, pain, heavy bleeding and faintness; knows a rectal mass means referral without waiting for FIT.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "States a suspected colorectal cancer picture needing FIT and likely urgent referral, not a haemorrhoid flare, in plain language.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "FIT with the NICE NG12 (updated April 2026) threshold (at least 10 µg Hb/g → suspected cancer pathway), examination and bloods booked around his work; no cream as a substitute.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Iron deficiency acted on if found; family history recorded accurately; practical and financial barriers addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named A&E triggers, dated examination, GP owns the FIT result and referral, teach-back of the plan.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Gary Underwood",
    "age": "52 years · male",
    "pmh": [
     "Nil significant",
     "External haemorrhoids (historical)"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Online booking reason: “haemorrhoid cream”. Lorry driver. BMI 28. No FBC or FIT on file. FH: father — bowel cancer, died aged 60.",
    "reason": "Video consultation. “My piles are back — can you send some cream?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agree agenda",
     "d": "He opens with cream and ‘no examinations’. Acknowledge, then agree to understand the bleeding before deciding anything."
    },
    {
     "t": "1–5",
     "h": "Characterise the bleed",
     "d": "Duration, blood on the paper or mixed in, bowel habit, weight, tiredness, pain, heavy bleeding. Family history — the father will surface."
    },
    {
     "t": "5–7",
     "h": "ICE and the hidden fear",
     "d": "Open the father’s death gently. Name the video booking as understandable avoidance, not a failing."
    },
    {
     "t": "7–10",
     "h": "Explain and plan",
     "d": "Not a piles story. FIT (NICE NG12 (updated April 2026): at least 10 µg Hb/g → suspected cancer pathway), FBC, face-to-face exam with chaperone. Fit it around his driving."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "A&E triggers in plain words. GP owns the FIT result. Teach-back: “What will you say at home?”"
    }
   ],
   "wordPics": {
    "fail": "Prescribes haemorrhoid cream on the video; never asks whether the blood is mixed in or about bowel habit and weight; skips examination because he booked remotely; never learns about the father; vague “come back if it doesn’t settle”.",
    "pass": "Recognises the red-flag cluster; arranges FIT, FBC and a face-to-face examination; states the FIT threshold for referral; acknowledges his worry; gives a basic safety-net and follow-up.",
    "exc": "All of the above, plus: surfaces the father’s death and the avoidance behind the video booking with warmth; balances ‘most bleeding is benign’ with ‘we check, not guess’; gives him control over the examination; builds the plan around a self-employed driver’s day; owns the result; teach-back confirms he will attend."
   },
   "avoid": [
    {
     "dont": "“It does sound like your piles — I’ll send some cream and see how you go.”",
     "instead": "“Blood mixed in with the motion, looser bowels and weight loss isn’t a piles pattern. Cream wouldn’t be the right answer — let’s check properly.”",
     "why": "Accepting the self-label for a red-flag cluster is the core Tasks fail in this station."
    },
    {
     "dont": "“Because your dad had bowel cancer, you’re at high risk of getting it too.”",
     "instead": "“With your symptoms, and knowing what happened to your dad, I want us to get a clear answer quickly.”",
     "why": "Overstates inherited risk and frightens a man already close to disengaging; the symptoms drive the referral."
    },
    {
     "dont": "“I can’t do anything until I’ve examined you.”",
     "instead": "“Let’s get the stool test and bloods moving now, and see you tomorrow for the examination.”",
     "why": "A remote booking still allows action today; stalling wastes the consultation and his trust."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Self-employed sole earner",
     "t": "Time off the road is lost income. Plan appointments at the edges of his day and give dates early so he can schedule runs; this is what turns a referral into attendance."
    },
    {
     "h": "Bereavement and avoidance",
     "t": "Watching his father die of bowel cancer drives the minimising and the remote booking. Naming it kindly, and framing checking as protecting his children, is what brings him in."
    }
   ],
   "legal": [
    {
     "h": "Driving after sedation",
     "t": "If he has sedation for colonoscopy he must not drive home and will be told by the unit how long to avoid driving afterwards — relevant to a lorry driver planning work. Investigation itself is not something he needs to notify DVLA about."
    },
    {
     "h": "Income if he needs time off",
     "t": "Self-employed people cannot get Statutory Sick Pay; if longer time off is needed later, New Style ESA or Universal Credit may apply and need a fit note."
    }
   ],
   "professional": [
    {
     "h": "Remote consultation limits",
     "t": "GMC Good medical practice (2024): if a remote consultation cannot meet the patient’s needs safely, arrange to see them in person. An examination that is needed is not skipped because of the booking type."
    },
    {
     "h": "Intimate examination",
     "t": "GMC Intimate examinations and chaperones (2024): explain why the examination is needed, offer a chaperone, get consent, and stop if asked. Document the offer and the outcome."
    },
    {
     "h": "Tracking the result",
     "t": "The requesting clinician owns the FIT result. Practice systems should track suspected cancer referrals and confirm the appointment happens."
    }
   ],
   "community": [
    {
     "h": "Patient resources",
     "t": "Bowel Cancer UK and Macmillan Cancer Support for information while he waits; the NHS Bowel Cancer Screening Programme for future home kits once this episode is settled."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Blood mixed with the stool rather than only on the paper",
     "Change in bowel habit — looser and more frequent for about two months",
     "Unintended weight loss and tiredness (possible anaemia); ask about heavy bleeding, faintness, pain and obstruction"
    ],
    "psychosocial": [
     "Self-employed lorry driver and sole earner — time off means lost income",
     "Children at home; the fear of leaving them as his father left him",
     "Booked a video and asked for cream to avoid being examined"
    ],
    "ice": [
     "Idea: “It’s my old piles again — cream sorted it last time”",
     "Concern: his father died of bowel cancer at 60 and he dreads the same",
     "Expectation: a prescription and no examination"
    ]
   },
   "diagnosis": "Be honest that this is not a piles picture: “Blood mixed in with the motion, looser bowels for two months and weight loss at 52 need checking for a bowel cause, including cancer — most people turn out fine, but we check rather than guess.”",
   "diagnosisLay": "“Piles usually give bright blood on the paper and nothing else. What you’re describing is more than that — like a warning light that could be something minor, but we need to lift the bonnet and look rather than just put tape over it.”",
   "management": {
    "reflectIce": "“You watched your dad go through this, and you’ve got kids of your own — no wonder cream felt easier to ask for. Getting a quick, clear answer is the best thing you can do for them.”",
    "psychosocial": "Build the plan around a self-employed driver: early or late appointment for the examination and bloods, FIT kit at the same visit, hospital dates given in advance so he can plan runs.",
    "sharedPlan": [
     "FIT now; NICE NG12 (updated April 2026): at least 10 µg Hb/g → suspected cancer pathway colorectal referral",
     "Face-to-face abdominal examination, anal inspection and DRE with chaperone; refer without waiting for FIT if a mass is found",
     "FBC and ferritin; if FIT is low but symptoms persist and concern is strong, refer anyway (NICE HTG690)"
    ],
    "safetyNet": [
     "Heavy bleeding, clots, faintness, severe pain or inability to pass anything → A&E",
     "GP rings with the FIT result and sends any referral the same day; confirm the hospital appointment is received"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Rectal bleeding",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) FIT threshold",
    "href": "algorithms/rectal-bleeding.html"
   },
   {
    "ic": "🗺️",
    "t": "Weight loss",
    "s": "Visual algorithm · unexplained weight loss",
    "href": "algorithms/weight-loss.html"
   },
   {
    "ic": "💠",
    "t": "Iron deficiency anaemia",
    "s": "Protocol · investigation and iron replacement",
    "href": "management/iron-deficiency-anaemia.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA fitness to drive",
    "s": "Group 2 drivers · when to notify",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by accepting the patient’s label. The history is easy to take if you ask the right two questions; the marks are lost when the cream goes out, the examination is skipped because the booking was remote, or the father’s death is never heard.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing haemorrhoid cream because he has had piles before and asked for it.",
     "why": "“Management plan not in line with current UK best practice.” Change in bowel habit and rectal bleeding at 50+ meet NICE HTG690 for FIT; a known benign diagnosis does not explain blood in the stool, altered habit and weight loss.",
     "fix": "Ask the discriminating questions — blood on the paper or mixed in, bowel habit, weight — then say plainly that cream is not the answer and why."
    },
    {
     "dom": "tasks",
     "fail": "Referring on symptoms alone without FIT, or quoting the old symptom-only two-week-wait criteria.",
     "why": "NICE NG12 (updated April 2026) makes FIT at least 10 µg Hb/g the referral trigger for most colorectal presentations; examiners expect the current pathway and the threshold stated.",
     "fix": "“The stool test decides the urgent referral — above 10 and you’re on the suspected cancer pathway. If I feel a lump on examination, I refer straight away.”"
    },
    {
     "dom": "tasks",
     "fail": "Skipping the examination because the consultation is by video.",
     "why": "A rectal mass changes the pathway immediately, and GMC guidance expects an in-person assessment when remote care cannot meet the need.",
     "fix": "Book a face-to-face examination with a chaperone within a day or two, and explain exactly why it matters."
    },
    {
     "dom": "rto",
     "fail": "Hearing “my dad had bowel cancer” and moving straight on to the plan.",
     "why": "“Does not identify or respond to the patient’s cues.” The father’s death is the hidden agenda and the reason he is avoiding examination.",
     "fix": "Pause: “With your dad in mind, what’s been going through your head?” Then use his answer to shape the plan."
    },
    {
     "dom": "rto",
     "fail": "Frightening him with “this could well be cancer” or overstating his inherited risk.",
     "why": "Catastrophising in a man already avoiding care risks disengagement; a single first-degree relative at 60 does not meet moderate-risk criteria (BSG/ACPGBI/UKCGG 2019).",
     "fix": "Hold both truths: most bleeding is benign, and with these symptoms we check quickly."
    },
    {
     "dom": "gs",
     "fail": "Ignoring the self-employed driver’s real constraints and offering a mid-morning slot next week.",
     "why": "A plan that does not fit his life will not happen — examiners mark whether the plan is tailored to the patient.",
     "fix": "Offer an early or late slot, FIT kit and bloods at the same visit, and hospital dates in advance."
    },
    {
     "dom": "gs",
     "fail": "Closing with “we’ll let you know the results” and no named safety-net.",
     "why": "Non-specific safety-netting and no owner for the result are standard failing feedback statements.",
     "fix": "“Heavy bleeding, faintness, bad pain or can’t pass anything — A&E. I’ll ring you with the FIT result myself.” Then teach-back."
    }
   ]
  }
 },
 "recurrent-falls-review": {
  "stem": {
   "name": "Eunice Barley",
   "age": "79-year-old woman",
   "pmh": [
    "Hypertension",
    "Cataracts — awaiting surgery",
    "Lives alone"
   ],
   "meds": [
    "Amlodipine",
    "Indapamide",
    "Amitriptyline (started some years ago for sleep)",
    "Zopiclone as required"
   ],
   "allergy": "No known drug allergies",
   "recent": "Three falls in the last three months; the most recent left a bruised hip and she was on the floor for about 40 minutes before help came. BMI 21. No falls assessment or bone-health assessment on record.",
   "reason": "Telephone appointment. Her daughter asked her to call about the falls."
  },
  "knowledge": {
   "guideline": "NICE NG249 (2025) · NICE NG5 (2015) · NICE NG259 (July 2026; replaced CG146) · NICE NG136 (updated 2023) · NOGG 2024 · BNF",
   "summary": "Three falls in three months with a long lie is not “the carpets”. It needs a comprehensive falls assessment in which the medication review is the highest-yield step, plus bone health and a plan for getting help after a fall — all framed around keeping her at home.",
   "points": [
    {
     "h": "She qualifies for a full assessment",
     "t": "NICE NG249: offer a comprehensive falls assessment to people who have fallen in the last year and who are living with frailty, have had 2 or more falls, had an injury needing treatment, lost consciousness, or were unable to get up on their own. She meets at least two of these. NG249 advises against using falls risk prediction tools to decide this."
    },
    {
     "h": "Medicines first",
     "t": "NICE NG249 and NICE NG5: structured medication review to find medicines that raise falls risk. Here: a diuretic plus amlodipine (postural drop, low sodium), amitriptyline (sedating, anticholinergic, postural hypotension) and zopiclone (sedation, unsteadiness). Withdraw amitriptyline gradually rather than abruptly (BNF), and taper zopiclone if used regularly."
    },
    {
     "h": "Postural BP",
     "t": "NICE NG136: measure BP lying or seated, then after standing for at least 1 minute; a systolic fall of 20 mmHg or more is significant — review medication and measure later readings standing. Falls on standing up make this the key examination, which needs a face-to-face review."
    },
    {
     "h": "The rest of the assessment",
     "t": "Gait, balance and strength (falls service or physiotherapy), vision (cataracts — ask the eye service about priority), continence and night-time toileting, cognition and mood, feet and footwear, and a home hazard assessment by occupational therapy. Check U&E (thiazide-related hyponatraemia) and consider an ECG if any fall suggests a blackout."
    },
    {
     "h": "Bone health",
     "t": "NICE NG259: assess fracture risk (FRAX or QFracture) in women aged 65 and over, and treat according to NOGG 2024 thresholds; DXA where the result would change management. A fall with a bruised hip at 79 must also be checked for a missed fracture if she cannot weight-bear or pain worsens."
    },
    {
     "h": "The long lie",
     "t": "Being unable to get up risks pressure damage, dehydration, hypothermia and muscle breakdown, and feeds fear of falling. Offer a personal alarm or telecare, teach how to get up or stay warm, and treat fear of falling (NICE NG249)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Mrs Barley? I’m one of the GPs — thank you for ringing. Tell me what’s been happening.",
    "dom": "rto",
    "why": "Open question, letting her tell it her way"
   },
   {
    "who": "pt",
    "text": "Honestly, I don’t know why my daughter’s made such a fuss. I caught my foot on the carpet, that’s all. I’m perfectly capable. I don’t want a load of people traipsing through my house deciding I can’t cope. Can you just tell her I’m fine?"
   },
   {
    "who": "dr",
    "text": "I can hear you value your independence, and I want to protect that too. I’m not in the business of deciding people can’t cope. Could we go through the falls together, so I can see if anything is making them more likely? Then we’ll talk about what would actually help.",
    "dom": "gs",
    "why": "Acknowledges her priority and sets a shared agenda"
   },
   {
    "who": "pt",
    "text": "Well, if we must."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "How many times have you fallen in the last few months?",
    "dom": "tasks",
    "why": "Establishes the number of falls"
   },
   {
    "who": "pt",
    "text": "Three, I suppose. Since the summer."
   },
   {
    "who": "dr",
    "text": "Can you tell me about them — what were you doing just before each one? Were any when you’d just stood up?",
    "dom": "tasks",
    "why": "Explores circumstances, including falls on standing"
   },
   {
    "who": "pt",
    "text": "One was the carpet. The others… I’d got up out of the chair and went a bit woozy, then I was down."
   },
   {
    "who": "dr",
    "text": "Did you black out at all, or have any chest pain or a racing heart beforehand?",
    "dom": "tasks",
    "why": "Screens for syncope and a cardiac cause"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. Just woozy."
   },
   {
    "who": "dr",
    "text": "And the last time — how long were you on the floor, and how is the hip now?",
    "dom": "tasks",
    "why": "Asks about the long lie and the injury"
   },
   {
    "who": "pt",
    "text": "About forty minutes. I couldn’t get up. It’s bruised, but I’m walking on it."
   },
   {
    "who": "dr",
    "text": "Forty minutes on the floor must have been frightening. What went through your mind while you were lying there?",
    "dom": "rto",
    "why": "Names the long lie and invites the emotion"
   },
   {
    "who": "pt",
    "text": "(quiet) That nobody would come. I’ve not been out much since. I’m scared of going down in the street."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me that. Can I check your tablets? I have amlodipine and indapamide for blood pressure, amitriptyline for sleep, and zopiclone when you need it. Is that right, and how often do you take the zopiclone?",
    "dom": "tasks",
    "why": "Medication reconciliation, focused on falls-risk drugs"
   },
   {
    "who": "pt",
    "text": "That’s right. The zopiclone when I can’t settle."
   },
   {
    "who": "dr",
    "text": "And how’s your eyesight, your waterworks at night, your memory, and how much are you drinking day to day?",
    "dom": "tasks",
    "why": "Covers vision, continence, cognition and intake"
   },
   {
    "who": "pt",
    "text": "Eyes are poor — I’m waiting for the cataract operation. Nothing else to speak of. I don’t drink much of anything."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "I wonder whether part of the worry about people coming round is what it might lead to. What are you most afraid of?",
    "dom": "rto",
    "why": "Gently explores the hidden fear"
   },
   {
    "who": "pt",
    "text": "Being put in a home. Once they decide you can’t cope, that’s it."
   },
   {
    "who": "dr",
    "text": "That makes complete sense, and I’m glad you said it. Can I tell you what I think is going on, and why I see this differently?",
    "dom": "rto",
    "why": "Validates the fear before explaining"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Three falls, two of them when you felt woozy after standing, usually aren’t about the carpet. Some of your tablets can drop your blood pressure when you stand, and the sleeping tablets make people unsteady. The cataracts don’t help. The good news is that these are the fixable parts.",
    "dom": "tasks",
    "why": "Explains the multifactorial picture in plain words"
   },
   {
    "who": "dr",
    "text": "The thing that worries me most is the forty minutes on the floor. Next time, I want help to reach you in minutes, not an hour.",
    "dom": "tasks",
    "why": "Flags the long lie as a priority"
   },
   {
    "who": "pt",
    "text": "I hadn’t thought of it like that."
   },
   {
    "who": "dr",
    "text": "And about the home — this assessment is the opposite of that. Everything I’m suggesting is about keeping your front door yours.",
    "dom": "rto",
    "why": "Reframes the assessment as protecting independence"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what I’d suggest. I’d like to see you this week to check your blood pressure lying and standing and look at the hip, with a blood test for your salts and kidneys. Then we can start trimming the tablets — the sleeping ones slowly, not all at once. How does that sound?",
    "dom": "tasks",
    "why": "Face-to-face assessment and a planned deprescribing"
   },
   {
    "who": "pt",
    "text": "I’ve had the amitriptyline for years. I won’t sleep."
   },
   {
    "who": "dr",
    "text": "That’s a fair worry. We’d reduce it gradually and look at other ways to help your sleep, and if it’s not working, we’ll talk again. You stay in charge of the pace.",
    "dom": "rto",
    "why": "Shares the decision and addresses her concern"
   },
   {
    "who": "dr",
    "text": "I’d also like to refer you to the falls team for balance and strength work, ask an occupational therapist to look at the house, check your bone strength, and ask the eye clinic about your cataract date. And a personal alarm you wear, so help comes quickly.",
    "dom": "tasks",
    "why": "Falls service, OT, bone health, cataracts and alarm"
   },
   {
    "who": "pt",
    "text": "An alarm… I suppose that’s better than lying there. Will you tell my daughter all this?"
   },
   {
    "who": "dr",
    "text": "Only what you’re happy for me to share. It might help to have her there next time — would you like that?",
    "dom": "rto",
    "why": "Respects confidentiality and offers to involve her daughter"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Until I see you: stand up slowly and sit on the bed edge for a moment first. If you fall and can’t get up, or hurt yourself badly, that’s a 999 call — not a wait. And if the hip gets more painful or you can’t put weight on it, ring us the same day. What will you tell your daughter tonight?",
    "dom": "gs",
    "why": "Specific safety-net and teach-back"
   },
   {
    "who": "pt",
    "text": "That the doctor’s sorting my tablets and getting me an alarm, and it’s to keep me at home."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; accepted the carpet story as part of the history without stopping there; let her set out her worries.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Lives alone, stopped going out, daughter’s role, sleep habits and fear of care-home placement.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “woozy after standing”, the 40-minute long lie and “I’ve not been out much since”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (the carpet), concern (being put in a home), expectation (reassurance to pass to her daughter).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Face-to-face lying and standing BP, hip examination, gait and balance; U&E; ECG if blackout suspected; FRAX or QFracture with DXA as indicated.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Postural hypotension from medicines vs sedation vs visual impairment vs syncope vs environmental trip.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for blackout, chest pain and palpitations; checked she can weight-bear; recognised the long lie as a red flag.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Recurrent falls, likely multifactorial: medicine-related postural drop and sedation, impaired vision, fear of falling.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Planned deprescribing with a gradual amitriptyline and zopiclone taper; falls service, OT, bone health, cataract priority and personal alarm.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Indapamide and amlodipine reviewed against standing BP and sodium; fear of falling and isolation addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 if unable to get up; same-day contact if hip pain worsens; face-to-face review this week; daughter involved with consent.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Eunice Barley",
    "age": "79 years · female",
    "pmh": [
     "Hypertension",
     "Cataracts (awaiting surgery)",
     "Lives alone"
    ],
    "meds": [
     "Amlodipine",
     "Indapamide",
     "Amitriptyline (for sleep)",
     "Zopiclone PRN"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Third fall in three months; bruised hip; on the floor about 40 minutes. BMI 21. No falls or bone-health assessment on file.",
    "reason": "“My daughter made me ring. I just tripped on the carpet.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agree the agenda",
     "d": "She wants you to tell her daughter she’s fine. Acknowledge her independence and agree to go through the falls together."
    },
    {
     "t": "1–4",
     "h": "The falls history",
     "d": "Number, circumstances (woozy on standing), blackout, the long lie, the hip, all four falls-risk medicines, vision, continence, cognition, intake."
    },
    {
     "t": "4–6",
     "h": "The fear underneath",
     "d": "Isolation since the long lie and the fear of being “put in a home”. Name it before explaining."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Fixable causes, the long-lie priority, face-to-face postural BP, gradual deprescribing, falls team, OT, bone health, cataracts, personal alarm."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Stand slowly; 999 if she can’t get up; same-day if the hip worsens; review this week; teach-back about her daughter."
    }
   ],
   "wordPics": {
    "fail": "Accepts “the carpet”, suggests a new rug and ends the call; never reviews the medicines; misses the long lie and the hip; tells the daughter “she’s fine” or ignores her; no follow-up.",
    "pass": "Recognises recurrent falls needing a full assessment; identifies the falls-risk medicines and plans a review; arranges postural BP; refers to the falls service; mentions bone health and an alarm; safety-nets.",
    "exc": "All of the above, plus: draws out the fear of a care home and the isolation, and reframes every step as protecting her independence; plans a gradual, agreed taper of amitriptyline and zopiclone; checks the hip and the long lie properly; offers to involve her daughter with consent; teach-back."
   },
   "avoid": [
    {
     "dont": "“Let’s get those rugs taped down and see how you go.”",
     "instead": "“The rugs are worth sorting, but three falls usually means several small things adding up, and most are fixable.”",
     "why": "Accepting a single external cause misses the medicines and the postural drop."
    },
    {
     "dont": "“We need to think about whether you’re safe living alone.”",
     "instead": "“Everything I’m suggesting is about keeping you safe in your own home.”",
     "why": "It confirms her worst fear and she will stop reporting falls."
    },
    {
     "dont": "“Stop the amitriptyline and zopiclone from today.”",
     "instead": "“We’ll bring the sleeping tablets down gradually, at a pace you’re comfortable with.”",
     "why": "Abrupt withdrawal causes rebound and withdrawal symptoms, and imposing it loses her agreement."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Isolation and fear of falling",
     "t": "Living alone and no longer going out since the long lie. Fear of falling leads to inactivity, weakness and loneliness, which raise falls risk further."
    },
    {
     "h": "Family",
     "t": "Her daughter prompted the call and is a reliable second source, but Eunice decides what is shared."
    }
   ],
   "legal": [
    {
     "h": "Mental Capacity Act 2005",
     "t": "Presume capacity. She can decline an alarm or a home visit; an unwise decision is not proof of incapacity. Assess capacity only if there is a reason to doubt it for a specific decision."
    },
    {
     "h": "Care Act 2014",
     "t": "She can have a local authority needs assessment for equipment, adaptations and support; community alarm and telecare schemes are usually arranged locally."
    }
   ],
   "professional": [
    {
     "h": "Confidentiality with family",
     "t": "Ask her permission before sharing the plan with her daughter (GMC Confidentiality 2017). Listening to the daughter’s concerns is always allowed."
    },
    {
     "h": "Medicines optimisation",
     "t": "Structured medication review with shared decisions (NICE NG5); involve the practice pharmacist and document the reason for each change and the taper plan."
    }
   ],
   "community": [
    {
     "h": "Support at home",
     "t": "Community falls service and strength-and-balance classes, occupational therapy home hazard assessment, personal alarm or telecare, Age UK for befriending and practical help."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Long lie — 40 minutes unable to get up",
     "Bruised hip after a fall at 79 — unable to weight-bear or worsening pain needs same-day assessment for fracture",
     "Any blackout, chest pain or palpitations before a fall — consider cardiac syncope"
    ],
    "psychosocial": [
     "Lives alone; stopped going out through fear of falling",
     "Daughter worried; fear of losing independence",
     "Sleep habits and reliance on sleeping tablets"
    ],
    "ice": [
     "Idea: “I just caught my foot on the carpet.”",
     "Concern: being “put in a home” if she admits she is falling",
     "Expectation: to be told she’s fine so her daughter stops worrying"
    ]
   },
   "diagnosis": "Recurrent falls, likely multifactorial: probable medicine-related postural hypotension (amlodipine, indapamide, amitriptyline), sedation (amitriptyline, zopiclone), impaired vision from cataracts and fear of falling, with a long lie and a soft-tissue hip injury.",
   "diagnosisLay": "“These falls aren’t really about the carpet. Some of your tablets can make your blood pressure dip when you stand up, the sleeping tablets make you unsteady, and your eyes aren’t helping. Those are all things we can change.”",
   "management": {
    "reflectIce": "“You’re worried that admitting to the falls means losing your home. My aim is the opposite — to keep you on your feet and in your own house.”",
    "psychosocial": "Build confidence back step by step: falls team exercise, an alarm so she feels safe going out, and her daughter involved only as she wishes.",
    "sharedPlan": [
     "Face-to-face this week: lying and standing BP, hip examination, U&E",
     "Gradual taper of amitriptyline and zopiclone; review indapamide and amlodipine against standing BP",
     "Falls service, OT home assessment, FRAX or QFracture with DXA as indicated, cataract priority, personal alarm"
    ],
    "safetyNet": [
     "Fall and unable to get up, or a serious injury — 999",
     "Worsening hip pain or unable to weight-bear — same-day contact; review within a week"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Falls",
    "s": "Visual algorithm · NICE NG249",
    "href": "algorithms/falls.html"
   },
   {
    "ic": "📋",
    "t": "Multimorbidity and polypharmacy",
    "s": "Case walkthrough · medication review",
    "href": "../cases/multimorbidity-polypharmacy.html"
   },
   {
    "ic": "💠",
    "t": "Benzodiazepines and z-drugs",
    "s": "Protocol · tapering",
    "href": "management/benzodiazepines-z-drugs.html"
   },
   {
    "ic": "💠",
    "t": "Osteoporosis protocol",
    "s": "Fracture risk after a fall",
    "href": "management/osteoporosis.html"
   }
  ],
  "pitfalls": {
   "intro": "This telephone station tests whether you can see past a plausible single cause and a patient who minimises. Candidates fail by colluding with “the carpet”, by missing the medicines, or by making her feel she is being assessed for a care home.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting the carpet as the cause and advising on rugs only.",
     "why": "Recurrent falls need a comprehensive assessment under NICE NG249; “management not in line with UK best practice”.",
     "fix": "Ask about each fall, especially the ones after standing up, and say that three falls usually have several causes."
    },
    {
     "dom": "tasks",
     "fail": "Never looking at the medicines, or stopping them all at once.",
     "why": "The medication review is the highest-yield intervention; abrupt withdrawal of amitriptyline or zopiclone causes rebound and withdrawal symptoms.",
     "fix": "Name the falls-risk drugs and plan a gradual, agreed taper with a postural BP check."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting the hip, bone health and the long lie.",
     "why": "A missed fracture or a second long lie is the serious outcome in this case.",
     "fix": "Check weight-bearing, plan fracture risk assessment, and arrange a personal alarm."
    },
    {
     "dom": "rto",
     "fail": "Talking about safety at home as if a move is being considered.",
     "why": "It confirms her fear, and she will hide future falls.",
     "fix": "Name the fear and reframe: “Everything here is about keeping you in your own home.”"
    },
    {
     "dom": "rto",
     "fail": "Agreeing to report back to her daughter, or ignoring the daughter entirely.",
     "why": "Either breaches her confidentiality or loses a reliable ally.",
     "fix": "Ask what she is happy to share and offer to include her daughter next time."
    },
    {
     "dom": "gs",
     "fail": "Doing the whole plan by phone with no face-to-face review.",
     "why": "Postural BP and a hip examination cannot be done by telephone; the plan is incomplete.",
     "fix": "Book a face-to-face review this week and give a specific 999 and same-day safety-net."
    }
   ]
  }
 },
 "red-eye-triage": {
  "stem": {
   "name": "Rosa Iqbal",
   "age": "31-year-old woman",
   "pmh": [
    "No significant past medical history",
    "Daily soft contact lens wearer"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "No previous eye consultations on record.",
   "reason": "Telephone call: red, sore left eye since yesterday; asking for antibiotic drops for conjunctivitis."
  },
  "knowledge": {
   "guideline": "College of Optometrists Clinical Management Guidelines: microbial keratitis (bacterial, fungal), Acanthamoeba keratitis, contact lens-associated infiltrative keratitis · RCOphth angle-closure glaucoma guideline (2022) · BNF",
   "summary": "A painful red eye with marked photophobia and blurred vision in a contact lens wearer who has slept in her lenses is microbial keratitis until proven otherwise. She needs same-day ophthalmology assessment, lenses out, and no drops prescribed over the phone.",
   "points": [
    {
     "h": "Red flags in a red eye",
     "t": "True pain (not grittiness), photophobia, reduced vision, a unilateral red eye, a corneal opacity or an abnormal pupil suggest a sight-threatening cause. Simple conjunctivitis causes discharge and grittiness with normal vision and no true photophobia."
    },
    {
     "h": "Contact lenses change the triage",
     "t": "College of Optometrists: microbial keratitis is a sight-threatening emergency; more serious cases need same-day ophthalmology, and suspected Acanthamoeba keratitis needs emergency same-day referral. Overnight wear, poor lens hygiene and water exposure raise the risk."
    },
    {
     "h": "Lens advice",
     "t": "Remove lenses now and do not wear them again until cleared by the eye team. Bring the lenses and case to the assessment, as they may be cultured."
    },
    {
     "h": "No blind drops",
     "t": "Do not diagnose conjunctivitis or prescribe antibiotic drops remotely for this picture. Never give topical steroid without slit-lamp examination — it can make herpetic or microbial keratitis much worse."
    },
    {
     "h": "The wider differential",
     "t": "Anterior uveitis (pain, photophobia, small pupil), scleritis (severe boring pain), corneal abrasion or foreign body, and acute angle closure (severe pain, headache, nausea or vomiting, haloes, hazy cornea, mid-dilated pupil — RCOphth 2022). All need same-day eye assessment; angle closure is an emergency."
    },
    {
     "h": "Why the phone is not enough",
     "t": "Visual acuity, fluorescein staining and slit-lamp examination decide the diagnosis. A GP cannot complete that by phone, so triage straight to the eye service rather than to a routine GP appointment."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Rosa Iqbal? It’s Dr Lee from the surgery. Can I check your date of birth? … Thanks. I gather your eye is bothering you — tell me what’s happened.",
    "dom": "rto",
    "why": "Identity check and open question"
   },
   {
    "who": "pt",
    "text": "Hi, sorry — I think I’ve got conjunctivitis. My left eye’s gone really red and sore since yesterday. It’s watering loads, the light’s killing me, and it’s a bit blurry. Could you just send some antibiotic drops to the chemist? I’ve got a big deadline. I wear contacts — I might’ve slept in them a couple of times this week, but that’s normal, right?"
   },
   {
    "who": "dr",
    "text": "I can hear it’s really uncomfortable, and I know the deadline is pressing. You’ve told me some important things there. Let me ask a few quick questions so I get this right for your eye, and then we’ll agree what to do. Okay?",
    "dom": "gs",
    "why": "Acknowledges pressure and sets an agenda without agreeing to drops"
   },
   {
    "who": "pt",
    "text": "Okay, but quickly if you can."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Is it actual pain, or more gritty and irritated? And how bad is the light sensitivity — can you look at a window?",
    "dom": "tasks",
    "why": "Separates true pain and photophobia from conjunctivitis"
   },
   {
    "who": "pt",
    "text": "It’s proper pain. And no, I’m squinting at everything, I’ve got the blinds shut."
   },
   {
    "who": "dr",
    "text": "You said blurry. If you cover your right eye, can you read something across the room, compared with the other eye?",
    "dom": "tasks",
    "why": "Rough check of acuity by phone"
   },
   {
    "who": "pt",
    "text": "(Pause.) It’s worse. Like looking through smeared glass."
   },
   {
    "who": "dr",
    "text": "Is it just the left eye? Any sticky discharge in the morning? Any chance something went in it, or you scratched it?",
    "dom": "tasks",
    "why": "Checks laterality, discharge and trauma"
   },
   {
    "who": "pt",
    "text": "Just the left. Watery, not really sticky. Nothing went in that I remember."
   },
   {
    "who": "dr",
    "text": "Any headache, feeling sick or being sick, or seeing rainbow rings around lights?",
    "dom": "tasks",
    "why": "Screens for acute angle closure"
   },
   {
    "who": "pt",
    "text": "No, none of that. Just the eye."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Thank you. You mentioned sleeping in your lenses — I’m not going to tell you off, I promise. Can you tell me a bit more about how you’ve been wearing them this week?",
    "dom": "rto",
    "why": "Invites the lens history without shaming"
   },
   {
    "who": "pt",
    "text": "(Sighs.) I know I shouldn’t. I’ve been working late and just crashed with them in, twice. I’ve probably been wearing them too long generally. I didn’t want to get a lecture."
   },
   {
    "who": "dr",
    "text": "Honestly, that’s really common, and I’m glad you told me — it helps me more than anything else you’ve said. What were you most hoping I’d do today?",
    "dom": "rto",
    "why": "Normalises, thanks her and explores expectation"
   },
   {
    "who": "pt",
    "text": "Just drops, so I don’t have to go anywhere. I can’t lose a day right now."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I understand. Here’s my honest view. Conjunctivitis doesn’t usually cause real pain, strong light sensitivity or blurred vision. With those three together, in someone who wears lenses and has slept in them, I’m worried about an infection on the surface of the eye itself — the cornea. That can damage sight if it isn’t treated quickly and properly.",
    "dom": "tasks",
    "why": "Explains why this is not conjunctivitis and names keratitis in plain words"
   },
   {
    "who": "pt",
    "text": "Oh. I didn’t realise it could be that serious."
   },
   {
    "who": "dr",
    "text": "It may turn out to be something milder, but this needs looking at today with a special microscope and dye, which I can’t do over the phone. Antibiotic drops from the chemist could be the wrong treatment and delay the right one.",
    "dom": "tasks",
    "why": "Declines phone drops and explains the need for slit-lamp examination"
   },
   {
    "who": "pt",
    "text": "So I have to go in today?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Yes — today. I’m going to arrange for you to be seen at the eye emergency service this afternoon. Can you get there? I’d rather you didn’t drive with the eye this blurred and painful.",
    "dom": "tasks",
    "why": "Arranges same-day ophthalmology and practical travel advice"
   },
   {
    "who": "pt",
    "text": "I can get a taxi, I suppose. What about my work?"
   },
   {
    "who": "dr",
    "text": "I know the deadline matters. But a few hours today could save weeks of trouble — and your eyes are your job. Could you let them know you’ll be on it later or tomorrow?",
    "dom": "rto",
    "why": "Weighs the deadline against sight, linked to her work"
   },
   {
    "who": "pt",
    "text": "Yeah… you’re right. I’d be useless like this anyway."
   },
   {
    "who": "dr",
    "text": "Three things before you go. Take the lens out now if it’s in, and don’t put any lenses back in until the eye team says so. Bring the lenses and the case with you — they may test them. And don’t use any old drops you’ve got at home. Paracetamol is fine for the pain.",
    "dom": "tasks",
    "why": "Lenses out, bring lenses and case, no leftover drops, analgesia"
   },
   {
    "who": "pt",
    "text": "Okay. Lens out, and I’ll bring the case."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If the pain gets much worse, your vision drops further, or you get a headache with vomiting before you’re seen, go straight to A&E or ring 999. Can you tell me back what you’re doing now?",
    "dom": "gs",
    "why": "Escalation safety-net and teach-back"
   },
   {
    "who": "pt",
    "text": "Taxi to eye emergency this afternoon, bring the lenses and case, no lenses back in, no old drops. A&E if it gets worse."
   },
   {
    "who": "dr",
    "text": "Exactly right. I’ll ring the eye team with your details now, and I’ll call you tomorrow to see how you got on. And when things settle, we can talk about lens habits that fit your hours — no lecture, I promise.",
    "dom": "rto",
    "why": "Confirms handover, follow-up and defers lens advice kindly"
   },
   {
    "who": "pt",
    "text": "Thank you. Sorry for pushing for the drops."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question after identity check; heard the request for drops and the deadline without agreeing to either.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Deadline and work pressure, evening working, embarrassment about lens habits, how she will get to an appointment.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “that’s normal, right?” about sleeping in lenses and invited the full lens history without judgement.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (conjunctivitis); concern (losing work time, being told off about her lenses); expectation (drops by phone).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Recognised that acuity, fluorescein and slit-lamp are needed and cannot be done by phone; lenses and case brought for culture.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Conjunctivitis versus microbial keratitis, abrasion or foreign body, anterior uveitis, scleritis and acute angle closure.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about true pain, photophobia, vision, discharge, trauma and angle-closure symptoms; recognised the triad as sight-threatening.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated possible contact lens-related keratitis in plain words and why conjunctivitis does not fit.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day eye emergency referral; lenses out and not re-worn; no antibiotic or steroid drops blind; analgesia; not driving.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Work pressure addressed; lens habits deferred to a non-judgemental follow-up conversation.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Escalation signs (worse pain, worse vision, headache with vomiting) with A&E or 999; handover to eye team; call next day.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Rosa Iqbal",
    "age": "31 years · female",
    "pmh": [
     "Nil significant",
     "Contact lens wearer (daily soft lenses)"
    ],
    "meds": [
     "None"
    ],
    "allergy": "NKDA",
    "recent": "⚠ No previous eye problems recorded.",
    "reason": "Telephone appointment. “Red, sore eye — can you send antibiotic drops for conjunctivitis?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "She gives you pain, photophobia, blurring and sleeping in lenses in one breath — and asks for drops. Note all four and agree an agenda."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "True pain or grittiness, photophobia, a rough acuity comparison, one or both eyes, discharge, trauma, angle-closure symptoms."
    },
    {
     "t": "4–6",
     "h": "ICE and hidden agenda",
     "d": "The lens history she is glossing, and the deadline. Promise no lecture and mean it."
    },
    {
     "t": "6–10",
     "h": "Explain and act",
     "d": "Not conjunctivitis — possible keratitis. Same-day eye emergency service, lenses out, bring lenses and case, no old drops, no driving."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Worse pain, worse vision or headache with vomiting — A&E or 999. Handover to the eye team, call tomorrow, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Diagnoses conjunctivitis and sends chloramphenicol, or books a routine GP appointment; never explores the lens wear; lectures her about sleeping in lenses so she shuts down; no escalation advice.",
    "pass": "Recognises pain, photophobia and blurred vision as red flags, refers the same day to the eye service, advises lens removal and gives a basic safety-net.",
    "exc": "All of the above, plus: gets the full lens history by promising no lecture; screens for angle closure; explains why phone drops could delay the right treatment; asks her to bring lenses and case; weighs the deadline honestly against sight; hands over to the eye team and follows up."
   },
   "avoid": [
    {
     "dont": "“It sounds like conjunctivitis — I’ll send chloramphenicol drops to your chemist.”",
     "instead": "“Real pain, light sensitivity and blurred vision aren’t typical of conjunctivitis — this needs checking today.”",
     "why": "Phone drops for possible keratitis is the classic dangerous error in this station."
    },
    {
     "dont": "“You should never sleep in your lenses — that’s how people lose their sight.”",
     "instead": "“That’s really common, and I’m glad you told me — it helps me get this right.”",
     "why": "Shaming makes patients hide the history that matters most."
    },
    {
     "dont": "“Come in to see me tomorrow and I’ll have a look.”",
     "instead": "“You need the eye team today — they have the equipment to examine the cornea properly.”",
     "why": "A delayed GP review cannot do slit-lamp or fluorescein examination and loses time."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work pressure",
     "t": "A graphic designer with a deadline and late nights — the reason she wants remote care and the reason she slept in her lenses. Her eyesight is also her livelihood."
    },
    {
     "h": "Getting there",
     "t": "She should not drive with a painful, blurred, photophobic eye. Help her plan transport to the eye service."
    }
   ],
   "legal": [
    {
     "h": "Driving",
     "t": "Drivers must be able to meet the eyesight standard at all times. Advise her not to drive until her vision has recovered and the eye team is happy."
    },
    {
     "h": "Time off work",
     "t": "She can self-certify for up to 7 days if she needs time off; a fit note is not needed for a short absence."
    }
   ],
   "professional": [
    {
     "h": "Remote consultation safety",
     "t": "Recognise what cannot be assessed by phone and escalate rather than prescribe. Document the red flags, the advice and the referral (GMC Good Medical Practice 2024)."
    },
    {
     "h": "Handover",
     "t": "Speak to or send details to the eye service so she is expected, and follow up to confirm she attended."
    }
   ],
   "community": [
    {
     "h": "Eye services",
     "t": "Local urgent eye care services (often via community optometrists) and hospital eye casualty; her optometrist or lens supplier for lens-care advice once she has recovered."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "True pain, marked photophobia and reduced vision — sight-threatening until proven otherwise",
     "Contact lens wear with overnight use — microbial keratitis risk",
     "Headache, nausea or vomiting, haloes — acute angle closure"
    ],
    "psychosocial": [
     "Work deadline and late nights",
     "Embarrassment about lens habits — fear of a lecture",
     "Practicalities of getting to an eye service today"
    ],
    "ice": [
     "Idea: “It’s conjunctivitis.”",
     "Concern: losing work time; being told off about her lenses",
     "Expectation: antibiotic drops sent to the chemist, no appointment"
    ]
   },
   "diagnosis": "Be direct and calm: “With real pain, light sensitivity and blurred vision in someone who has slept in lenses, I’m worried about an infection of the cornea rather than conjunctivitis. That needs examining today.”",
   "diagnosisLay": "“Conjunctivitis is like a cold on the white of the eye — uncomfortable but harmless. What worries me is a sore on the clear window at the front of the eye. If that scars, it can blur your sight for good, so it needs the right drops from the eye team, today.”",
   "management": {
    "reflectIce": "“I know you can’t lose a day — and your eyes are what you work with. A few hours today protects them.”",
    "psychosocial": "Help her tell work she will be delayed; arrange transport rather than driving; revisit lens habits later without judgement.",
    "sharedPlan": [
     "Same-day eye emergency service assessment; GP handover",
     "Lenses out and not re-worn until cleared; bring lenses and case",
     "No antibiotic or steroid drops from the surgery; paracetamol for pain"
    ],
    "safetyNet": [
     "Worse pain, worse vision, headache with vomiting — A&E or 999",
     "GP call the next day to confirm she was seen"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Red eye",
    "s": "Case walkthrough · red-flag triage",
    "href": "../cases/red-eye.html"
   },
   {
    "ic": "🗺️",
    "t": "Red eye pathway",
    "s": "Visual algorithm · same-day referral",
    "href": "algorithms/red-eye.html"
   },
   {
    "ic": "🗺️",
    "t": "Foreign body in the eye",
    "s": "Visual algorithm · abrasion",
    "href": "algorithms/foreign-body-eye.html"
   },
   {
    "ic": "💠",
    "t": "Uveitis",
    "s": "Management protocol · painful red eye",
    "href": "management/uveitis.html"
   }
  ],
  "pitfalls": {
   "intro": "The clinical trap is obvious once you know it: pain, photophobia and blurred vision are not conjunctivitis. The station is failed by candidates who give her what she asks for, and by those who get it right but shame her on the way.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Sending chloramphenicol for “conjunctivitis”.",
     "why": "“Management plan unsafe.” College of Optometrists: microbial keratitis is a sight-threatening emergency needing same-day ophthalmology.",
     "fix": "Name the triad — pain, light sensitivity, blurred vision — and refer the same day."
    },
    {
     "dom": "tasks",
     "fail": "Booking a GP appointment for tomorrow.",
     "why": "Delay, and a GP cannot do slit-lamp or fluorescein examination.",
     "fix": "Go straight to the eye emergency service today, with a handover."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting the lens advice.",
     "why": "Continued lens wear worsens infection, and the lenses and case may identify the organism.",
     "fix": "Lenses out, none back in until cleared, bring the lenses and case."
    },
    {
     "dom": "rto",
     "fail": "Lecturing her about sleeping in lenses.",
     "why": "“Does not respond to the patient’s concerns.” Shame makes patients hide exactly the history you need.",
     "fix": "“I’m not going to tell you off — it’s really common, and it helps me get this right.”"
    },
    {
     "dom": "rto",
     "fail": "Dismissing the deadline.",
     "why": "Ignoring her real constraint makes non-attendance likely.",
     "fix": "Acknowledge it, then weigh it openly: “Your eyes are your job — a few hours today protects them.”"
    },
    {
     "dom": "gs",
     "fail": "Ending with “go to eye casualty” and nothing else.",
     "why": "No escalation advice, no teach-back and no follow-up are standard failing feedback.",
     "fix": "Name worse pain, worse vision or headache with vomiting as A&E triggers; teach-back; call tomorrow."
    }
   ]
  }
 },
 "septic-arthritis": {
  "stem": {
   "name": "Stan Whitcombe",
   "age": "67-year-old man",
   "pmh": [
    "Osteoarthritis — both knees",
    "Type 2 diabetes"
   ],
   "meds": [
    "Metformin",
    "Ibuprofen (occasional)"
   ],
   "allergy": "No known drug allergies",
   "recent": "Intra-articular steroid injection, right knee, 10 days ago. Retired joiner. Recently bereaved (wife).",
   "reason": "Telephone request — “knee has blown up, wants stronger painkillers”."
  },
  "knowledge": {
   "guideline": "BSR/BHPR, BOA, RCGP and BSAC guideline for the management of the hot swollen joint in adults (2006; BSR update in development, scope 2025) · NICE NG253 (updated September 2026) — suspected sepsis in people aged 16 or over · BNF (metformin, NSAIDs)",
   "summary": "A single hot, red, swollen knee he cannot bear weight on, developing over 36 hours, 10 days after a steroid injection, in a man with diabetes who feels shivery, is septic arthritis until proven otherwise. He needs same-day hospital assessment for joint aspiration before antibiotics — not stronger painkillers.",
   "points": [
    {
     "h": "Septic until proven otherwise",
     "t": "BSR/BHPR 2006: a short history of a hot, swollen, tender joint with restricted movement should be regarded as septic arthritis until proven otherwise. It can destroy a joint quickly and carries a real mortality, especially in older people."
    },
    {
     "h": "Aspirate before antibiotics",
     "t": "BSR/BHPR 2006: synovial fluid should be aspirated, Gram-stained and cultured before antibiotics are started, with crystal microscopy. That needs a hospital team the same day — it cannot be done or excluded by telephone."
    },
    {
     "h": "Risk factors in this man",
     "t": "Recent intra-articular injection, pre-existing joint disease, diabetes and older age all increase the risk. A recent steroid injection raises concern rather than explaining the swelling."
    },
    {
     "h": "Fever is not required",
     "t": "BSR/BHPR 2006: if clinical suspicion is high, treat as septic arthritis even without fever. Normal-looking systemic observations do not exclude it."
    },
    {
     "h": "Screen for sepsis",
     "t": "NICE NG253 (updated September 2026): assess anyone with suspected infection for sepsis. High-risk features include new confusion or altered mental state, respiratory rate 25 or more and heart rate over 130. By phone, ask about confusion, breathlessness, mottled or ashen skin and passing urine — any of these means a 999 ambulance."
    },
    {
     "h": "Crystals and OA do not exclude infection",
     "t": "Gout, pseudogout and an OA flare can mimic sepsis and can coexist with it. Only aspiration separates them; a known arthritis history is not a diagnosis."
    },
    {
     "h": "Diabetes while acutely unwell",
     "t": "Infection pushes blood glucose up and dehydration adds risk with metformin (BNF: risk of lactic acidosis in conditions such as dehydration or severe infection). Ask him to bring his meter and medicines; the admitting team will decide on metformin."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Mr Whitcombe? It’s Dr Lee. Can I check your date of birth? … Thank you. What’s been happening with the knee?",
    "dom": "gs",
    "why": "Identity check and an open question"
   },
   {
    "who": "pt",
    "text": "Sorry to bother you. It’s my arthritis knee — it’s blown up like a balloon over the last day or so, red hot, and I can’t put weight on it. Had a steroid jab in it last week. I just need stronger painkillers and I’ll rest it. Don’t want to make a fuss."
   },
   {
    "who": "dr",
    "text": "You’re not making a fuss at all — I’m glad you rang. I need to ask you some specific questions, because what you’re describing may need more than painkillers. Then we’ll decide together. Is that all right?",
    "dom": "rto",
    "why": "Validates the call and signals concern early without alarming"
   },
   {
    "who": "pt",
    "text": "Go on."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Is it just the one knee? And is this different from your usual arthritis flare-ups?",
    "dom": "tasks",
    "why": "Establishes a single joint and a change from baseline"
   },
   {
    "who": "pt",
    "text": "Just the right one. It’s never been like this — can’t bend it at all, can’t stand on it."
   },
   {
    "who": "dr",
    "text": "How do you feel in yourself? Any shivers, sweats, feeling hot and cold? Have you checked your temperature?",
    "dom": "tasks",
    "why": "Screens for systemic infection"
   },
   {
    "who": "pt",
    "text": "Bit shivery, bit rough. I thought that was the pain. Haven’t got a thermometer."
   },
   {
    "who": "dr",
    "text": "Any confusion or muddled thinking, trouble breathing, going pale or blotchy, or passing much less urine?",
    "dom": "tasks",
    "why": "Checks for NICE NG253 high-risk features that would need a 999 ambulance"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. Sugars have been all over the place, mind."
   },
   {
    "who": "dr",
    "text": "Thank you. Any cuts or skin infection near the knee, or any other joints swollen?",
    "dom": "tasks",
    "why": "Other portals of entry and polyarticular disease"
   },
   {
    "who": "pt",
    "text": "No, just that one."
   },
   {
    "phase": "Explanation",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Stan, I’m going to be honest because it matters. A single knee that’s suddenly hot, red, swollen and won’t take your weight — with you feeling shivery — isn’t a normal arthritis flare. It could be an infection inside the joint.",
    "dom": "tasks",
    "why": "Names septic arthritis as the working concern"
   },
   {
    "who": "dr",
    "text": "And the injection — I know it feels like the knee’s been seen to, but any injection into a joint can very occasionally let infection in. With diabetes too, your body finds infection harder to fight. Those make me more worried, not less.",
    "dom": "tasks",
    "why": "Reframes the injection and diabetes as risk factors"
   },
   {
    "who": "dr",
    "text": "An infected joint can be damaged within days, and the infection can spread into the blood. The only way to tell is for the hospital to draw some fluid off the knee with a needle — before any antibiotics — and treat it quickly if it’s infected. So this needs to be today.",
    "dom": "tasks",
    "why": "Explains aspiration before antibiotics and why same-day"
   },
   {
    "who": "pt",
    "text": "Hospital. No. I’d rather just sit it out here."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "6–8 min",
    "who": "dr",
    "text": "That sounded like a big ‘no’. Can I ask what going into hospital means for you right now?",
    "dom": "rto",
    "why": "Explores the resistance rather than overriding it"
   },
   {
    "who": "pt",
    "text": "…My wife went in after a fall. She never came out. People don’t come out of there."
   },
   {
    "who": "dr",
    "text": "I’m so sorry, Stan. That’s a terrible loss, and so recent. Of course the thought of going in is frightening — anyone would feel that after what you’ve been through.",
    "dom": "rto",
    "why": "Acknowledges grief with compassion before persuading"
   },
   {
    "who": "pt",
    "text": "I just keep thinking about her in that bed."
   },
   {
    "who": "dr",
    "text": "I understand. What I can tell you is that this is different: it’s one knee, you’re well enough to talk to me now, and going today is exactly what keeps it that way. The danger is in waiting. I wouldn’t be pushing if I didn’t think it mattered.",
    "dom": "rto",
    "why": "Uses his fear honestly to bring him to assessment, without false promises"
   },
   {
    "who": "pt",
    "text": "…All right. If you really think so."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Thank you. I’ll phone the hospital team now so they’re expecting you and you won’t be sitting in a queue wondering. Is there someone who can take you? You mustn’t drive with that knee.",
    "dom": "gs",
    "why": "Direct referral, transport and driving safety"
   },
   {
    "who": "pt",
    "text": "I’ll try to find someone. If not, I don’t know."
   },
   {
    "who": "dr",
    "text": "If nobody can take you within the hour, ring me back and I’ll arrange transport. Bring your tablets and your sugar meter. Don’t take any ibuprofen for now — paracetamol is fine for the pain until you’re seen. Keep sipping water.",
    "dom": "tasks",
    "why": "Practical preparation; avoids NSAIDs; supports hydration with diabetes and metformin"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If before you get there you become confused, very breathless, go blotchy or clammy, or feel much worse — call 999, don’t wait for a lift.",
    "dom": "gs",
    "why": "Sepsis 999 triggers in plain words"
   },
   {
    "who": "dr",
    "text": "Can you tell me what you’re going to do after we hang up?",
    "dom": "rto",
    "why": "Teach-back confirms he will go"
   },
   {
    "who": "pt",
    "text": "Find a lift, get to the hospital today with my tablets and meter. No ibuprofen. Ring you if I can’t get a lift, 999 if I get muddled or worse."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll ring the hospital this afternoon to check you’ve arrived. And when this is sorted, I’d like to talk with you about how you’re coping since your wife died — you shouldn’t be carrying that alone.",
    "dom": "rto",
    "why": "Commits to follow-up and returns to the grief"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Identity checked; open question; told him he was right to call rather than letting “don’t want to fuss” shape the plan.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Recent bereavement, stoicism, fear of hospital, transport and who can take him.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "“Don’t want to make a fuss”, “shivery and rough” and the firm refusal of hospital each explored; the wife’s death surfaced gently.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (an arthritis flare), hidden concern (hospital after his wife died there), expectation (stronger painkillers and rest at home).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Same-day hospital assessment for joint aspiration (Gram stain, culture, crystals) before antibiotics, with bloods and blood glucose.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Septic arthritis, gout or pseudogout, OA flare, post-injection reaction; knows crystals and OA can coexist with infection.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Single joint, non-weight-bearing, systemic symptoms, NICE NG253 high-risk features asked (confusion, breathing, skin, urine).",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "States possible septic arthritis as the working diagnosis in plain language and explains why the injection and diabetes raise concern.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day hospital assessment, arranged by the GP; no antibiotics before aspiration; no painkiller-and-wait plan.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Diabetes: bring meter and medicines, keep hydrated; ibuprofen avoided; grief acknowledged with a plan to return to it.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 sepsis triggers, fallback if no lift, GP checks he arrived, teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Older adults"
   ],
   "stem": {
    "name": "Stan Whitcombe",
    "age": "67 years · male",
    "pmh": [
     "OA both knees",
     "Type 2 diabetes"
    ],
    "meds": [
     "Metformin",
     "Ibuprofen (occasional)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Steroid injection, right knee, 10 days ago. Recently bereaved — wife died in hospital.",
    "reason": "Telephone consultation. “My knee’s blown up — can I have stronger painkillers?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Identify and open",
     "d": "Identity check. He apologises and asks for painkillers. Tell him he was right to ring; agree to ask some specific questions."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "One joint or several, change from usual, weight-bearing, shivers, sweats, NG253 high-risk features, glucose, skin breaks. The injection 10 days ago."
    },
    {
     "t": "4–6",
     "h": "Explain the concern",
     "d": "Possible infected joint; the injection and diabetes raise the risk; aspiration before antibiotics, today."
    },
    {
     "t": "6–9",
     "h": "Hear the refusal",
     "d": "Explore “no” — his wife died in hospital. Acknowledge the grief, then use it honestly to bring him to assessment."
    },
    {
     "t": "9–12",
     "h": "Arrange and safety-net",
     "d": "GP phones the hospital team; transport; bring meter and tablets; no ibuprofen. 999 triggers. Teach-back; GP checks he arrived."
    }
   ],
   "wordPics": {
    "fail": "Prescribes stronger painkillers and advises rest; accepts “just arthritis”; treats the injection as reassuring; never asks about systemic symptoms; lets his refusal stand without exploring it; or starts antibiotics by phone.",
    "pass": "Recognises possible septic arthritis; weights the injection and diabetes; asks about systemic upset; arranges same-day hospital assessment for aspiration; gives a sepsis safety-net.",
    "exc": "All of the above, plus: explores the refusal and hears his wife’s death with real compassion before persuading; is honest without false promises; arranges the referral and transport himself; practical diabetes advice; confirms he has arrived and plans to return to the grief."
   },
   "avoid": [
    {
     "dont": "“It sounds like a flare after the injection — rest it and take some stronger painkillers.”",
     "instead": "“A single hot, swollen knee you can’t stand on isn’t a normal flare. It could be an infection, and that needs checking today.”",
     "why": "Treating a possible septic joint as a flare is the dangerous error the station tests."
    },
    {
     "dont": "“I’ll send some antibiotics to the pharmacy to be on the safe side.”",
     "instead": "“The hospital needs to draw fluid off the knee first, so they can find the germ and give the right treatment.”",
     "why": "BSR/BHPR 2006: aspirate before antibiotics; blind antibiotics can mask the diagnosis."
    },
    {
     "dont": "“You have to go in — there’s no choice.”",
     "instead": "“Can I ask what going into hospital means for you right now?”",
     "why": "Overriding him ignores his grief and makes refusal more likely; exploring it brings him with you."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Recent bereavement",
     "t": "His wife’s death in hospital shapes how he sees admission. Acknowledge it, and plan a later conversation about grief, mood and support at home."
    },
    {
     "h": "Getting there",
     "t": "He cannot weight-bear or drive safely. Check who can take him and arrange hospital transport if no one can."
    }
   ],
   "legal": [
    {
     "h": "Capacity and refusal",
     "t": "Mental Capacity Act 2005: adults are presumed to have capacity and may make unwise decisions. If he still refused, check he understands and can weigh the risks, document it, keep the door open, and safety-net clearly."
    },
    {
     "h": "Driving",
     "t": "He should not drive while unable to bend or bear weight on the knee — he may not be able to control the vehicle safely."
    }
   ],
   "professional": [
    {
     "h": "Remote assessment limits",
     "t": "GMC Good medical practice (2024): when remote assessment cannot meet a patient’s needs safely, arrange appropriate in-person care. Here that is same-day hospital assessment, not a GP visit next week."
    },
    {
     "h": "Following up",
     "t": "Phoning the hospital team, confirming he arrived and documenting the advice given are part of safe care for an urgent referral."
    },
    {
     "h": "Learning from the injection",
     "t": "If the injection was given in the practice, record the possible complication and consider a significant event review of the procedure — without assuming fault."
    }
   ],
   "community": [
    {
     "h": "Support after bereavement",
     "t": "Cruse Bereavement Support and local bereavement services; Age UK for practical help at home during recovery."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Single acutely hot, red, swollen knee over 36 hours; unable to weight-bear or bend it",
     "Intra-articular steroid injection 10 days ago; type 2 diabetes; age 67",
     "Shivery and unwell with erratic glucose — screen for sepsis (confusion, breathlessness, mottled skin, reduced urine)"
    ],
    "psychosocial": [
     "Recently widowed; his wife died in hospital after a fall",
     "Stoical: “don’t want to make a fuss”",
     "Cannot drive or weight-bear — transport needed"
    ],
    "ice": [
     "Idea: “It’s just my arthritis flaring after the injection”",
     "Concern: hospital — “people don’t come out of there”",
     "Expectation: stronger painkillers and resting it at home"
    ]
   },
   "diagnosis": "Be honest: “A single knee that’s suddenly hot, swollen and won’t take your weight, with you feeling shivery after an injection, could be an infection in the joint. That can damage the knee within days, so it needs checking in hospital today.”",
   "diagnosisLay": "“Your knee is like a sealed room. If germs have got in, they can do a lot of damage quickly. The hospital needs to take a little fluid out with a needle to see what’s in there, and then treat it properly.”",
   "management": {
    "reflectIce": "“After what happened to your wife, it makes complete sense that hospital feels like the last place you want to be. I’m asking you to go precisely so that this stays a knee problem and nothing more.”",
    "psychosocial": "Arrange transport, tell him the team will be expecting him, and promise a follow-up conversation about his grief.",
    "sharedPlan": [
     "Same-day hospital assessment for joint aspiration before antibiotics (BSR/BHPR 2006), arranged by the GP",
     "No antibiotics or stronger painkillers as a substitute; avoid ibuprofen; paracetamol for pain meanwhile",
     "Bring medicines and glucose meter; keep drinking fluids"
    ],
    "safetyNet": [
     "Confusion, breathlessness, mottled or clammy skin, feeling much worse → 999 (new confusion is a NICE NG253 high-risk feature)",
     "Ring back if no lift within the hour; GP checks he has arrived and follows up the grief afterwards"
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
    "s": "Visual algorithm · red flags",
    "href": "algorithms/knee-pain.html"
   },
   {
    "ic": "🗺️",
    "t": "Fever in adults",
    "s": "Visual algorithm · sepsis screening",
    "href": "algorithms/fever-adults.html"
   },
   {
    "ic": "💠",
    "t": "Osteoarthritis",
    "s": "Protocol · injections and flares",
    "href": "management/osteoarthritis.html"
   }
  ],
  "pitfalls": {
   "intro": "This is an urgent-care station disguised as a painkiller request. It is failed by accepting the patient’s framing, by treating remotely, or by winning the argument about hospital without ever hearing why he is refusing.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing stronger analgesia and advising rest for an “OA flare”.",
     "why": "“Management plan not in line with current UK best practice.” BSR/BHPR 2006: a hot, swollen, restricted joint is septic until proven otherwise.",
     "fix": "Name the concern out loud and arrange same-day hospital assessment."
    },
    {
     "dom": "tasks",
     "fail": "Seeing the recent steroid injection as the explanation.",
     "why": "Intra-articular injection is a recognised route for infection; it raises, not lowers, concern.",
     "fix": "“The injection makes me more worried, not less.”"
    },
    {
     "dom": "tasks",
     "fail": "Starting oral antibiotics by phone to “cover it”.",
     "why": "Antibiotics before aspiration can prevent the organism being found and leave a joint half-treated.",
     "fix": "Explain that the hospital draws fluid off first, then treats."
    },
    {
     "dom": "tasks",
     "fail": "Not screening for sepsis because he “sounds all right”.",
     "why": "NICE NG253 asks for a sepsis assessment in suspected infection; high-risk features change the plan to 999.",
     "fix": "Ask about confusion, breathlessness, mottled skin and urine output, and give clear 999 triggers."
    },
    {
     "dom": "rto",
     "fail": "Answering “I’d rather sit it out” with more facts and more pressure.",
     "why": "“Does not identify or respond to the patient’s cues.” His refusal is about his wife’s death; arguing past it rarely works.",
     "fix": "“Can I ask what going into hospital means for you right now?” — then acknowledge before persuading."
    },
    {
     "dom": "gs",
     "fail": "Telling him to go to A&E and ending the call.",
     "why": "A frightened, grieving man with no transport may simply not go; the plan must be workable.",
     "fix": "Phone the team, sort transport, give a fallback, and confirm he has arrived."
    }
   ]
  }
 },
 "teen-first-psychosis": {
  "stem": {
   "name": "Daniel",
   "age": "17-year-old young man",
   "pmh": [
    "No significant past medical history recorded",
    "No previous mental health contact"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "No recent consultations recorded. Lives at home with his mother. Was attending college.",
   "reason": "Telephone call from his mother, who is worried about a sudden change in his behaviour over recent weeks. Daniel is at home but will not come to the phone."
  },
  "knowledge": {
   "guideline": "NICE CG155 (psychosis and schizophrenia in children and young people, 2013, updated 2016) · NICE CG178 (2014) · NICE QS80 (2015) · Mental Health Act 1983 · GMC 0–18 years (2007, updated 2018)",
   "summary": "Weeks of voices, feeling watched, messages from the TV, withdrawal and barricading in a 17-year-old is probable first-episode psychosis. Assess risk through his mother, and refer urgently to the early intervention in psychosis service or CAMHS, today if risk is raised.",
   "points": [
    {
     "h": "Recognise it from the collateral history",
     "t": "Hallucinations, persecutory and referential delusions, social withdrawal, insomnia and a fall in function over weeks point to psychosis. A frightened young person who barricades himself is usually acting on fear. Ask about other drugs, head injury, fever or confusion, which suggest an organic or toxic cause."
    },
    {
     "h": "Urgent specialist referral",
     "t": "NICE CG155: a first presentation of sustained psychotic symptoms (4 weeks or more) should be referred urgently to a specialist mental health service, either CAMHS or an early intervention in psychosis (EIP) service for those aged 14 and over. Where risk is raised, the crisis team or on-call CAMHS assesses the same day."
    },
    {
     "h": "Do not start antipsychotics in primary care",
     "t": "NICE CG155: do not start antipsychotic medication for a first presentation of sustained psychotic symptoms in primary care unless it is done in consultation with a consultant psychiatrist with training in child and adolescent mental health."
    },
    {
     "h": "Assess risk, do not score it",
     "t": "Through his mother: thoughts or acts of self-harm or suicide, threats or aggression, voices telling him to act, access to weapons or means, eating and drinking, and her own safety. NICE NG225 (2022) advises against using risk tools or low/medium/high labels to decide care; use the whole picture."
    },
    {
     "h": "Cannabis: part of the story, not the verdict",
     "t": "Heavy and high-potency cannabis use is associated with a higher risk of psychosis. It does not change the need for urgent assessment, and the EIP team treats both. Blame closes doors for the young person and the family."
    },
    {
     "h": "If he will not engage",
     "t": "Crisis and EIP teams can assess at home. If there is immediate danger, call 999. If he refuses assessment and the risk is serious, a Mental Health Act 1983 assessment is arranged through an approved mental health professional (AMHP). At 16 or 17, a parent cannot consent to informal admission on behalf of a young person with capacity who refuses (Mental Health Act 1983, s131)."
    },
    {
     "h": "Hopeful, honest information",
     "t": "NHS England’s EIP access standard (NICE QS80) expects treatment to start within 2 weeks of referral. Most young people with a first episode are treated in the community, with family intervention and CBT alongside medication (NICE CG155), and many recover well."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, it’s Dr Lee from the surgery, returning your call about Daniel. Before anything else, are you somewhere you can talk, and is everyone in the house safe right now?",
    "dom": "tasks",
    "why": "Checks immediate safety before gathering the story"
   },
   {
    "who": "pt",
    "text": "(Lowered voice.) Yes, I’m downstairs. He’s in his room. He’s pushed the wardrobe against the door. Doctor, he’s saying people are watching him through the telly. Is he on drugs? Is he having a breakdown? I don’t know who to call."
   },
   {
    "who": "dr",
    "text": "You’ve done exactly the right thing by ringing. I can hear how frightened you are. I’d like to understand what’s been happening, check he and you are safe, and then agree what happens today. Is that all right?",
    "dom": "gs",
    "why": "Acknowledges fear and sets a clear agenda"
   },
   {
    "who": "pt",
    "text": "Yes. Please."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Tell me about the change in him, from when you first noticed something was different.",
    "dom": "rto",
    "why": "Open question lets her tell the story in her own order"
   },
   {
    "who": "pt",
    "text": "A few weeks ago he stopped going to college. He’s up all night. He hardly comes out. Then he started saying he could hear people talking about him, and that the TV is sending him messages. Today he barricaded the door."
   },
   {
    "who": "dr",
    "text": "Has he said what the voices say? Do they ever tell him to do things, like hurt himself or someone else?",
    "dom": "tasks",
    "why": "Asks about command hallucinations"
   },
   {
    "who": "pt",
    "text": "He says they talk about him, say he’s being watched. He’s never said they tell him to do anything."
   },
   {
    "who": "dr",
    "text": "Has he said or done anything to suggest he wants to harm himself, or talked about not wanting to be here? And has he been aggressive or threatening to anyone?",
    "dom": "tasks",
    "why": "Explicit risk to self and others through the collateral history"
   },
   {
    "who": "pt",
    "text": "No. He’s not violent. He just seems terrified."
   },
   {
    "who": "dr",
    "text": "Is he eating and drinking? And is there anything in his room he could hurt himself with, or any tablets he could get to?",
    "dom": "tasks",
    "why": "Self-care and access to means"
   },
   {
    "who": "pt",
    "text": "I think he’s eating something. I don’t think there’s anything in there… I’m not sure."
   },
   {
    "who": "dr",
    "text": "Has he been using any drugs or alcohol that you know of, and has he had a head injury, a fever or seemed confused?",
    "dom": "tasks",
    "why": "Screens for substances and organic causes"
   },
   {
    "who": "pt",
    "text": "Cannabis. A lot, this last year. No injury, no fever. (Pause.) Is it the drugs? Is it my fault? I should have stopped it sooner."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "Can I stop on that, because it matters. This is not your fault. Cannabis can play a part in this, yes, but what Daniel is going through is an illness, not a failure of parenting. You noticing and ringing is exactly what he needs.",
    "dom": "rto",
    "why": "Responds directly to the guilt cue"
   },
   {
    "who": "pt",
    "text": "(Crying.) I just keep thinking I missed it."
   },
   {
    "who": "dr",
    "text": "You’re carrying a lot. I wonder if there’s a bigger fear underneath. Is there anything in the family that this reminds you of?",
    "dom": "rto",
    "why": "Opens the door to the unspoken family-history fear"
   },
   {
    "who": "pt",
    "text": "His dad had a breakdown. I’m scared Daniel’s got the same thing, and they’ll lock him away forever."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That fear makes complete sense. Let me be honest and hopeful: most young people with this are treated at home, with a specialist team, and many recover well, especially when help starts early, as it is today. Being locked away forever is not what happens.",
    "dom": "rto",
    "why": "Addresses the hidden agenda with honest, hopeful information"
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "From what you describe, Daniel may be having what we call psychosis. It means the mind is struggling to tell what’s real, so voices and feeling watched seem completely true to him. It’s a recognised illness, it’s treatable, and the sooner specialists see him, the better it tends to go.",
    "dom": "tasks",
    "why": "Names probable first-episode psychosis in plain language"
   },
   {
    "who": "pt",
    "text": "So it’s not just the drugs?"
   },
   {
    "who": "dr",
    "text": "The cannabis may have been a trigger, and the team will help him with it. But either way, this needs the same urgent assessment. It isn’t something to wait and see about.",
    "dom": "tasks",
    "why": "Places cannabis correctly without making it the whole story"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "Here’s the plan. As soon as we finish, I’ll contact the crisis team and the early intervention team, who specialise in young people with this, and ask for an assessment today. They can come to the house, so you won’t have to get him out.",
    "dom": "tasks",
    "why": "Urgent same-day referral via the right pathway, with home assessment"
   },
   {
    "who": "pt",
    "text": "What if he won’t open the door?"
   },
   {
    "who": "dr",
    "text": "They’re used to that. Until they arrive, keep things calm. Don’t argue with what he believes, but don’t pretend to agree either. Tell him you’re worried, you love him and help is coming. Don’t try to force the door.",
    "dom": "tasks",
    "why": "Practical de-escalation advice for the parent"
   },
   {
    "who": "dr",
    "text": "And you matter in this too. Is there someone who can be with you today? Once things are settled, the team can support you as a family, and there are carers’ groups for parents going through exactly this.",
    "dom": "rto",
    "why": "Supports the exhausted parent as well as the patient"
   },
   {
    "who": "pt",
    "text": "I can ring someone to come over."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Good. If at any point he tries to hurt himself or anyone, or you feel unsafe, ring 999 and say it’s a mental health emergency. If you’re worried but it’s not an emergency, call NHS 111 and choose the mental health option. I’ll ring you back within the hour to confirm the assessment time.",
    "dom": "gs",
    "why": "Clear escalation routes and a timed call-back"
   },
   {
    "who": "pt",
    "text": "Thank you. I didn’t know any of this existed."
   },
   {
    "who": "dr",
    "text": "So we’re clear, can you tell me what you’ll do if things get worse before the team arrives?",
    "dom": "gs",
    "why": "Checks understanding with teach-back"
   },
   {
    "who": "pt",
    "text": "Call 999 if he tries to hurt himself or me. Otherwise wait for you to ring back, and keep calm with him."
   },
   {
    "who": "dr",
    "text": "Exactly right. I’ll document everything, and we won’t leave you on your own with this. Is there anything else you want to ask before I make those calls?",
    "dom": "rto",
    "why": "Summarises, shares the floor and commits to continuity"
   },
   {
    "who": "pt",
    "text": "No. Just please ring me back."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Checked immediate safety, then let the mother describe the weeks of change in her own words before narrowing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "College, sleep, cannabis, who is at home, the mother’s exhaustion and who can support her today.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “is it my fault?” and the hesitation about the family, and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (drugs or a breakdown); concern (guilt, his father’s illness, “locked away forever”); expectation (to know who to call).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Collateral mental state picture; asks about other drugs, head injury, fever or confusion; physical checks and bloods are left to the specialist assessment.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "First-episode psychosis; substance-induced psychosis; mood disorder with psychotic features; organic or toxic cause.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Self-harm, suicide, command voices, aggression, eating and drinking, access to means, and the mother’s safety asked explicitly.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Names probable first-episode psychosis in plain words, as a treatable illness needing urgent assessment.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day crisis or EIP/CAMHS assessment at home; no antipsychotic started in primary care; calm, non-confrontational advice for home.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Cannabis handled as a contributor without blame; the mother’s wellbeing and support addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 for immediate danger, NHS 111 mental health option, timed call-back, documentation.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Mental health & addiction",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Daniel",
    "age": "17 years · male",
    "pmh": [
     "Nil significant",
     "No previous mental health contact"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Telephone call-back requested by his mother: “He’s changed completely and I’m frightened.” Daniel is at home and will not come to the phone. No previous consultations about mood or behaviour.",
    "reason": "Mother asking for advice about her son’s behaviour. “Is he on drugs? Is he having a breakdown?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Safety first",
     "d": "Is she somewhere she can talk, and is everyone safe right now? Then let her tell it."
    },
    {
     "t": "1–5",
     "h": "Collateral history and risk",
     "d": "Timeline, voices, beliefs, sleep, college, cannabis and other drugs, organic clues. Self-harm, aggression, command voices, eating, means."
    },
    {
     "t": "5–7",
     "h": "ICE and the hidden agenda",
     "d": "Lift the guilt. Ask about the family; meet the “locked away forever” fear with honest hope."
    },
    {
     "t": "7–11",
     "h": "Explain and act",
     "d": "Name probable psychosis. Same-day crisis or EIP assessment at home. How to be with him until they arrive. Support for her."
    },
    {
     "t": "11–12",
     "h": "Safety-net and close",
     "d": "999 for danger, NHS 111 mental health option, call-back time, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Treats it as “just cannabis” or a teenage phase; offers a routine appointment for when he’ll come in; no risk questions; blames or lectures the mother; leaves her with a list of numbers and no plan.",
    "pass": "Recognises probable psychosis; asks about self-harm, aggression and command voices; arranges urgent specialist assessment; gives 999 advice; reassures that it is not her fault.",
    "exc": "All of the above, plus: checks immediate safety at the start; surfaces the father’s illness and the “locked away forever” fear and answers it with honest hope; arranges a home assessment today and a timed call-back; gives practical advice on staying calm with him; makes sure she has support; checks understanding."
   },
   "avoid": [
    {
     "dont": "“It sounds like the cannabis. If he stops smoking it he’ll probably settle down.”",
     "instead": "“Cannabis may have played a part, but this needs a specialist to see him today, whatever the cause.”",
     "why": "Reducing it to drugs delays urgent assessment and blames the young person."
    },
    {
     "dont": "“Can you bring him in to see me next week?”",
     "instead": "“He doesn’t need to come to us. I’ll ask the crisis team to come to him today.”",
     "why": "A barricaded young person with psychosis won’t attend; the plan has to fit the reality."
    },
    {
     "dont": "“Don’t worry, lots of teenagers go through phases.”",
     "instead": "“What you’re describing is a recognised illness, and it’s treatable. Getting help early really helps.”",
     "why": "False reassurance ignores serious symptoms and her real fear."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family strain",
     "t": "A frightened, exhausted parent managing a young person who won’t engage. Ask who can be with her and signpost carer support (for example Rethink Mental Illness or the YoungMinds parents helpline)."
    },
    {
     "h": "Education",
     "t": "He has stopped college. Once he is under the EIP team, education and occupational support is part of recovery; the college can be involved with his consent."
    }
   ],
   "legal": [
    {
     "h": "Consent and capacity at 17",
     "t": "At 16 and 17 a young person is presumed to have capacity (Mental Capacity Act 2005) and can consent to treatment (Family Law Reform Act 1969, s8). A parent cannot consent to informal admission for a 16- or 17-year-old with capacity who refuses (Mental Health Act 1983, s131)."
    },
    {
     "h": "Mental Health Act assessment",
     "t": "If he refuses assessment and there is serious risk, an AMHP coordinates a Mental Health Act 1983 assessment. Police cannot use s136 inside a private home; entry to a home needs a s135 warrant."
    },
    {
     "h": "Driving",
     "t": "If he holds a licence, including a provisional one, an acute psychotic episode must be notified to the DVLA and he should not drive (DVLA Assessing fitness to drive)."
    }
   ],
   "professional": [
    {
     "h": "Talking to a parent",
     "t": "GMC 0–18 years: listening to a parent’s concerns and giving general information does not breach his confidentiality. Share his information with her proportionately, in his best interests and with his agreement where possible."
    },
    {
     "h": "Documentation and continuity",
     "t": "Record the collateral history, the risk questions and answers, who was contacted and when, and the call-back. Name a clinician for follow-up."
    }
   ],
   "community": [
    {
     "h": "Crisis routes",
     "t": "NHS 111 mental health option (24/7) for urgent advice; 999 when there is immediate danger. Local crisis and EIP teams can assess at home."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Voices telling him to harm himself or others, or plans to act on persecutory beliefs",
     "Talk of suicide, self-harm, or access to weapons, tablets or other means",
     "Not eating or drinking, confusion, fever or head injury (consider an organic cause)"
    ],
    "psychosocial": [
     "College dropped, social withdrawal, heavy cannabis use over the last year",
     "Mother frightened and exhausted: who can support her today?",
     "Family history (his father’s “breakdown”) as a sensitive factor, raised gently"
    ],
    "ice": [
     "Idea: “Is he on drugs, or having a breakdown?”",
     "Concern: guilt that she missed the cannabis; fear he has his father’s illness and will be “locked away forever”",
     "Expectation: to be told what it is and who to call"
    ]
   },
   "diagnosis": "“From what you’re telling me, Daniel may be having a first episode of psychosis. It’s a recognised and treatable illness, and it needs a specialist assessment today rather than waiting.”",
   "diagnosisLay": "“Psychosis is when the mind struggles to tell what’s real and what isn’t. To Daniel, the voices and being watched feel completely real, which is why he’s so frightened. With the right help, most young people get much better.”",
   "management": {
    "reflectIce": "“You asked if this is your fault. It isn’t. And I know you’re scared it’s what happened to his dad, and that he’ll be locked away. Most young people are treated at home, and many recover well.”",
    "psychosocial": "Support the mother: someone with her today, carer support, and a named person at the practice. Advise calm, gentle contact without arguing with his beliefs.",
    "sharedPlan": [
     "Urgent same-day assessment via the crisis team and EIP/CAMHS, at home if needed",
     "No antipsychotic started in primary care; specialist team leads treatment",
     "Cannabis addressed by the specialist team as part of care, not as blame"
    ],
    "safetyNet": [
     "999 and “mental health emergency” if he tries to harm himself or others or she feels unsafe",
     "NHS 111 mental health option for urgent advice; GP call-back at an agreed time"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Psychosis and schizophrenia",
    "s": "Case walkthrough · NICE CG178 · CG155",
    "href": "../cases/psychosis-schizophrenia.html"
   },
   {
    "ic": "🗺️",
    "t": "Psychosis pathway",
    "s": "Visual algorithm · first episode",
    "href": "algorithms/psychosis.html"
   },
   {
    "ic": "💠",
    "t": "Psychosis and schizophrenia protocol",
    "s": "EIP referral · monitoring",
    "href": "management/psychosis-schizophrenia.html"
   },
   {
    "ic": "🗺️",
    "t": "Hallucinations pathway",
    "s": "Visual algorithm · causes and risk",
    "href": "algorithms/hallucinations.html"
   }
  ],
  "pitfalls": {
   "intro": "This telephone station is failed by treating a first episode of psychosis as a drug problem or a routine referral, and by missing the mother’s guilt and fear. The patterns below come up again and again in examiner feedback.",
   "items": [
    {
     "dom": "tasks",
     "fail": "“It’s probably the cannabis. Get him to stop and bring him in if he’s no better.”",
     "why": "“Management plan not in line with current UK practice.” NICE CG155 calls for urgent specialist referral for sustained psychotic symptoms.",
     "fix": "Name probable psychosis and arrange same-day crisis or EIP assessment, whatever the role of cannabis."
    },
    {
     "dom": "tasks",
     "fail": "No risk questions because the mother says he isn’t violent.",
     "why": "“Does not assess risk adequately.” Command voices, suicidal thoughts, means and self-care must be asked about directly.",
     "fix": "Ask about voices telling him to act, self-harm, aggression, eating and drinking, means, and her own safety."
    },
    {
     "dom": "tasks",
     "fail": "Booking him into surgery next week, or suggesting she brings him in.",
     "why": "A barricaded young person won’t attend. A plan that can’t happen scores nothing.",
     "fix": "“The team can come to him today.” Explain what to do if he won’t open the door."
    },
    {
     "dom": "rto",
     "fail": "Hearing “is it my fault?” and moving straight on to questions.",
     "why": "“Does not identify or respond to cues.” Her guilt shapes everything she hears next.",
     "fix": "Stop and answer it: “It is not your fault.” Then ask gently about the family."
    },
    {
     "dom": "rto",
     "fail": "Never finding out about his father, so the “locked away forever” fear is left unanswered.",
     "why": "The hidden agenda carries the Relating marks in this station.",
     "fix": "“Is there anything in the family this reminds you of?” Then give honest, hopeful information about community treatment."
    },
    {
     "dom": "gs",
     "fail": "Reading out a list of phone numbers and ending the call.",
     "why": "“Safety-netting not specific” and “no follow-up arranged” are common failing statements.",
     "fix": "Specific triggers for 999, the NHS 111 mental health option, a timed call-back, and teach-back."
    }
   ]
  }
 },
 "teen-thirdparty-cannabis": {
  "stem": {
   "name": "Jacob",
   "age": "16-year-old boy",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Registered patient. No consent on file to share his information with a parent. Jacob is not on the call and does not know his mother has rung.",
   "reason": "Telephone call from his mother, aged 42, who found cannabis in his room this morning and wants the practice to “do something”."
  },
  "knowledge": {
   "guideline": "GMC 0–18 years (2007, updated 2018) · GMC Confidentiality (2017) · Family Law Reform Act 1969 s8 and Mental Capacity Act 2005 · Working Together to Safeguard Children 2026 (DfE) · NICE NG64 (drug misuse prevention, 2017)",
   "summary": "A 16-year-old has the same right to confidentiality as an adult. You cannot share his record, test him or treat him on his mother’s request. You can listen, screen for real risk, give general information, open a door for him, and support her.",
   "points": [
    {
     "h": "Consent at 16",
     "t": "At 16 a young person can consent to treatment (Family Law Reform Act 1969, s8) and is presumed to have capacity (Mental Capacity Act 2005). Gillick competence applies to under-16s, not to Jacob. A drug test or examination needs his consent."
    },
    {
     "h": "Confidentiality",
     "t": "GMC 0–18 years and GMC Confidentiality (2017): do not disclose a young person’s information to a parent without consent unless it is justified in the public interest or needed to protect him or others from a risk of death or serious harm. Do not confirm or deny what he has discussed with the practice."
    },
    {
     "h": "Listening is not a breach",
     "t": "You can listen to a parent’s concerns and give general, non-patient-specific information without breaching confidentiality. Record the call on his notes."
    },
    {
     "h": "Screen for real risk",
     "t": "Escalating or daily use, other drugs, a change in mood or behaviour, unusual thoughts, school refusal, unexplained money, phones or older contacts (child criminal exploitation, county lines), self-harm. Genuine risk of significant harm makes it a safeguarding matter under Working Together to Safeguard Children 2026."
    },
    {
     "h": "What helps",
     "t": "Offer Jacob a confidential appointment he books himself; signpost local young people’s drug and alcohol services and FRANK for information. NICE NG64 targets drug misuse prevention at young people most at risk and suggests skills training for families alongside."
    },
    {
     "h": "The caller is a patient too",
     "t": "A demand to “fix him” often hides the parent’s own distress. Here: a recent divorce and a sense of losing control. Ask how she is, screen her mood, and offer her an appointment in her own right."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, it’s Dr Lee from the surgery. I understand you’re calling about your son, Jacob. Tell me what’s happened.",
    "dom": "rto",
    "why": "Open question; lets her vent before any boundary"
   },
   {
    "who": "pt",
    "text": "I found a bag of cannabis in his room this morning. I want you to get him in and drug-test him. And I want to know what he’s been telling you, because I’m his mother and I have a right to know. You have to fix this."
   },
   {
    "who": "dr",
    "text": "That must have been a horrible shock, and I can hear how worried you are about him. I do want to help you both. Can I ask a few things first, then be honest about what I can and can’t do, and then work out a plan together?",
    "dom": "gs",
    "why": "Validates before setting the agenda"
   },
   {
    "who": "pt",
    "text": "Fine. But I want something done."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Is this the first sign you’ve had, or have you been worried about him for a while?",
    "dom": "tasks",
    "why": "Starts the risk screen with the timeline"
   },
   {
    "who": "pt",
    "text": "He’s been moody and staying out late. But this is the first time I’ve found anything."
   },
   {
    "who": "dr",
    "text": "Have you noticed anything else, like other drugs, money or phones you can’t account for, or older people he’s spending time with that you don’t know?",
    "dom": "tasks",
    "why": "Screens for exploitation and escalation"
   },
   {
    "who": "pt",
    "text": "No. Nothing like that. Just the bag. And he’s grumpy."
   },
   {
    "who": "dr",
    "text": "And how is he in himself? Going to school, sleeping, eating? Has he ever said anything that made you worry he might hurt himself, or said anything strange or out of character?",
    "dom": "tasks",
    "why": "Screens for mental health change and risk to self"
   },
   {
    "who": "pt",
    "text": "He goes to school. He eats. He hasn’t said anything like that."
   },
   {
    "phase": "The boundary",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Thank you, that helps. Here’s the hard part. At 16 the law treats Jacob as able to make his own health decisions. That means I can’t share anything from his records, even whether he’s been in, and I can’t call him in for a drug test without his agreement.",
    "dom": "tasks",
    "why": "Explains the confidentiality and consent boundary clearly"
   },
   {
    "who": "pt",
    "text": "That’s ridiculous. I’m his mother."
   },
   {
    "who": "dr",
    "text": "I understand why it feels that way. The reason matters, though. If teenagers thought we’d tell their parents, most wouldn’t come to us at all, including when they’re in real trouble. That privacy is what keeps the door open for him.",
    "dom": "rto",
    "why": "Gives the reason so the boundary lands as care"
   },
   {
    "who": "dr",
    "text": "What I can say is this: if I ever had reason to think he was at serious risk, that would change what I can do. From what you’ve told me, that doesn’t sound like where things are today.",
    "dom": "tasks",
    "why": "Names the safeguarding exception and what would trigger it"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Can I ask how you are in all this? You sound like you’ve got a lot on your shoulders.",
    "dom": "rto",
    "why": "Turns to the caller’s own needs"
   },
   {
    "who": "pt",
    "text": "(Pause.) I’ve just been through a divorce. It’s been awful. And now I feel like I’m losing him too. Like I’m failing."
   },
   {
    "who": "dr",
    "text": "That’s a lot to carry on your own. Finding that bag must have felt like proof of everything you were afraid of. But ringing today tells me you’re a mother fighting for her son, not failing him. How has your own mood been, and your sleep?",
    "dom": "rto",
    "why": "Validates, reframes, and screens her mood"
   },
   {
    "who": "pt",
    "text": "Not great. I don’t sleep. I cry a lot."
   },
   {
    "who": "dr",
    "text": "I’d like to see you properly about that, in your own right. Would you book an appointment with me this week?",
    "dom": "tasks",
    "why": "Offers care to the caller as a patient"
   },
   {
    "who": "pt",
    "text": "Maybe. Yes. But what do I do about Jacob?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what I can do. I can tell you about cannabis and young people in general, and send you the local young people’s drug service and FRANK, which has good information for parents. And I can make it really easy for Jacob to come and talk to us himself, in confidence.",
    "dom": "tasks",
    "why": "Turns the refused demands into what can be done"
   },
   {
    "who": "pt",
    "text": "So I shouldn’t scare him straight?"
   },
   {
    "who": "dr",
    "text": "Shouting or threats usually push young people away. A calm conversation tends to work better: “I found this, I’m worried, I’m not going anywhere, and you can talk to the GP on your own if you’d rather.” Would you be willing to try that?",
    "dom": "rto",
    "why": "Enlists her as an ally and negotiates one step"
   },
   {
    "who": "pt",
    "text": "I can try. When he’s calmer."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you see signs he’s in real danger, like harder drugs, threats, someone using him to carry things, or talk of hurting himself, ring us straight away and we will act. If he is ever in immediate danger, call 999. I’ll note this call on his record.",
    "dom": "gs",
    "why": "Specific triggers and a clear statement of when the practice would act"
   },
   {
    "who": "dr",
    "text": "Just so I know I’ve explained it well, what will you do when you get off the phone?",
    "dom": "gs",
    "why": "Checks understanding with teach-back"
   },
   {
    "who": "pt",
    "text": "Look at the links you send, talk to him calmly, tell him he can see you on his own. And book in for me."
   },
   {
    "who": "dr",
    "text": "That’s it exactly. You’re not on your own with this. Anything else before we finish?",
    "dom": "rto",
    "why": "Summarises and shares the floor"
   },
   {
    "who": "pt",
    "text": "No. Thank you. I’m sorry I shouted."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let her say everything first; acknowledged the shock before any boundary.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Home situation, the divorce, school, and her support and coping.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “you have to fix this” and “I feel like I’m losing him”, and explored her distress.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a parent can see his records and have him tested); concern (losing him, failing as a parent); expectation (test him, scare him).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Explains that no test or examination can happen without Jacob’s consent; offers him a confidential appointment; screens the mother’s mood.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Experimental use versus escalating use, exploitation, or a mental health change; the mother’s own low mood.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Other drugs, unexplained money or phones, older contacts, mood change, unusual thoughts, self-harm.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "States that nothing reported meets a safeguarding threshold today, and names what would change that.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Confidentiality held kindly; general information; FRANK and local young people’s service; a calm conversation plan; a door open for Jacob.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Addresses the divorce and the mother’s low mood with an appointment for her.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named triggers to ring back, 999 for immediate danger, documentation of the third-party call.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Professional & ethical dilemmas",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Jacob",
    "age": "16 years · male",
    "pmh": [
     "Nil significant"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Call-back requested by his mother. Jacob is not present and is not aware of the call. No consent on file to share information with a parent.",
    "reason": "Mother: “I found cannabis in his room. I want him tested and I want to know what he’s told you.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Let her vent",
     "d": "She’s angry and frightened. Listen, then acknowledge the shock."
    },
    {
     "t": "1–4",
     "h": "Risk screen",
     "d": "Timeline, other drugs, money, phones, older contacts, mood, school, self-harm."
    },
    {
     "t": "4–6",
     "h": "The boundary, kindly",
     "d": "No records, no test, no treatment without his consent, and why. Name when the practice would act."
    },
    {
     "t": "6–8",
     "h": "Her agenda",
     "d": "The divorce, feeling she’s failing. Screen her mood; offer her an appointment."
    },
    {
     "t": "8–12",
     "h": "Plan and safety-net",
     "d": "General information, FRANK, local YP service, calm conversation, a door open for Jacob. Triggers to ring back; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Shares or confirms record details, or agrees to call him in for a test; alternatively refuses coldly and ends the call; no risk screen; never asks about the mother.",
    "pass": "Holds confidentiality and explains it; screens for risk; signposts services; offers Jacob a confidential appointment; basic safety-net.",
    "exc": "All of the above, plus: validates before the boundary so it lands as care; names what would trigger safeguarding action; uncovers the divorce and her low mood and offers her care; enlists her as an ally with a specific plan for a calm conversation; checks understanding."
   },
   "avoid": [
    {
     "dont": "“I’m afraid I can’t discuss your son. Is there anything else?”",
     "instead": "“I can’t share his records, but I can listen, help you think it through, and make it easy for him to see us.”",
     "why": "A bare refusal holds the law but loses the relationship and the Relating marks."
    },
    {
     "dont": "“He hasn’t been in to see us about drugs, if that helps.”",
     "instead": "“I can’t say whether he has or hasn’t been in. That applies to every young person here.”",
     "why": "Confirming or denying contact is itself a disclosure."
    },
    {
     "dont": "“Bring him in and I’ll have a word with him about the dangers.”",
     "instead": "“He can book in himself, in confidence. That tends to go much better than being brought in.”",
     "why": "A consultation arranged to scare a competent 16-year-old is not consented care and usually backfires."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family breakdown",
     "t": "A recent divorce and a teenager pulling away. Her distress drives the anger; addressing it helps both of them."
    },
    {
     "h": "Adolescent cannabis use",
     "t": "Experimental use is common. Escalation, other drugs, falling school attendance or a change in mental state are what raise concern."
    }
   ],
   "legal": [
    {
     "h": "Consent at 16",
     "t": "Family Law Reform Act 1969, s8: a 16-year-old can consent to medical treatment. Mental Capacity Act 2005: presumed to have capacity. Testing without consent would be an assault."
    },
    {
     "h": "Confidentiality and its limits",
     "t": "GMC Confidentiality (2017) and GMC 0–18 years: disclosure without consent only where justified in the public interest or needed to protect him or others from serious harm, and usually after telling him."
    },
    {
     "h": "Safeguarding",
     "t": "Working Together to Safeguard Children 2026 (DfE): signs of child criminal exploitation or county lines, or other risk of significant harm, mean a referral to children’s social care."
    }
   ],
   "professional": [
    {
     "h": "Documentation",
     "t": "Record the third-party call on Jacob’s notes: who rang, what was said, the risk screen, the advice given and that no information was disclosed."
    },
    {
     "h": "Two patients, one call",
     "t": "The mother is also a patient. Offer her an appointment in her own right; do not blur the two records."
    }
   ],
   "community": [
    {
     "h": "Services",
     "t": "FRANK (national drugs information and helpline); local young people’s drug and alcohol service; parenting and family support; relationship support after separation."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Other drugs, dealing, unexplained money or phones, older controlling contacts (exploitation)",
     "Change in mental state, unusual beliefs, self-harm or suicidal talk",
     "Stopping school, going missing, violence at home"
    ],
    "psychosocial": [
     "Recent divorce and its effect on her and on Jacob",
     "Her mood, sleep and support",
     "How she and Jacob communicate at the moment"
    ],
    "ice": [
     "Idea: as his mother she can see his records and have him tested",
     "Concern: she is losing him and failing as a parent",
     "Expectation: the GP will test him, tell her everything and scare him straight"
    ]
   },
   "diagnosis": "“From what you’ve told me, nothing suggests Jacob is in immediate danger today. That could change, and if it did, we would act.”",
   "diagnosisLay": "“Confidentiality is like a door we keep open for teenagers. If they think we’ll tell their parents, they stop coming, even when they really need help. Keeping it private is how we keep Jacob safe in the long run.”",
   "management": {
    "reflectIce": "“You want to protect him, and it feels like you’re losing him. That comes through loud and clear. Let’s put that energy where it will actually help.”",
    "psychosocial": "Offer the mother her own appointment for her mood and the effects of the divorce; signpost parenting and relationship support.",
    "sharedPlan": [
     "Hold confidentiality; no test or appointment without Jacob’s consent",
     "General cannabis information, FRANK and the local young people’s service",
     "A calm conversation at home and an open invitation for Jacob to book in himself"
    ],
    "safetyNet": [
     "Ring the practice if signs of exploitation, other drugs, or self-harm appear; 999 if immediate danger",
     "Document the call; follow up the mother at her appointment"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Safeguarding",
    "s": "Case walkthrough · children and young people",
    "href": "../cases/safeguarding.html"
   },
   {
    "ic": "📋",
    "t": "Drug dependence",
    "s": "Case walkthrough · substance use",
    "href": "../cases/drug-dependence.html"
   },
   {
    "ic": "💠",
    "t": "Depression protocol",
    "s": "For the mother · screening and options",
    "href": "management/depression.html"
   }
  ],
  "pitfalls": {
   "intro": "This is a confidentiality station dressed as a drug problem. Candidates fail by giving in to the demand, by refusing coldly, or by forgetting that the angry caller needs care too.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Agreeing to call Jacob in for a drug test, or confirming whether he has been seen.",
     "why": "“Did not respect confidentiality or consent.” A competent 16-year-old’s information and body are his own.",
     "fix": "Explain that you can’t share or test without his consent, and why, then say what you can do."
    },
    {
     "dom": "rto",
     "fail": "Opening with the rules: “I can’t discuss another patient.”",
     "why": "“Did not respond to the patient’s emotions.” The boundary then feels like a door slammed shut.",
     "fix": "Validate first: “That must have been a horrible shock.” Then set out the limits."
    },
    {
     "dom": "tasks",
     "fail": "No questions about risk because “it’s only cannabis”.",
     "why": "Exploitation, other drugs or a mental health change would change the safeguarding picture.",
     "fix": "Ask about other drugs, money, phones, older contacts, mood, school and self-harm."
    },
    {
     "dom": "tasks",
     "fail": "Quoting Gillick competence for a 16-year-old.",
     "why": "Gillick applies to under-16s. At 16, consent rests on the Family Law Reform Act 1969 and the Mental Capacity Act 2005.",
     "fix": "“At 16 the law treats him as able to make his own health decisions.”"
    },
    {
     "dom": "rto",
     "fail": "Never asking how the mother is, so the divorce and her low mood stay hidden.",
     "why": "The hidden agenda is hers. Missing it loses the ICE and Relating marks.",
     "fix": "“How are you in all this?” Then offer her an appointment in her own right."
    },
    {
     "dom": "gs",
     "fail": "Ending with “ring back if you’re worried”.",
     "why": "“Safety-netting non-specific.”",
     "fix": "Name the signs that would make you act, give 999 for immediate danger, and check she knows what she’ll do next."
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
