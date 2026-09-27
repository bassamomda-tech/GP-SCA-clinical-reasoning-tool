/* ============================================================
   Reasoning GP — The Hot Seat: add-on set, batch 1
   Stem, knowledge, model consultation, scorecard tasks, extras,
   knowledge base, playbook, links and examiner pitfalls for
   20 further cases. Loaded after sca-pitfalls.js and
   before sca-practice.js; merges into the existing maps and
   attaches to the case objects exactly as those files do.
   Educational; original content; primary sources cited.
   ============================================================ */
(function(){
  var ADD = {
 "anaemia-ida": {
  "stem": {
   "name": "Sheila Drummond",
   "age": "68-year-old woman",
   "pmh": [
    "Hypertension",
    "Registered carer for her husband (Parkinson’s disease)"
   ],
   "meds": [
    "Amlodipine",
    "Over-the-counter multivitamin with iron (self-bought, not on repeat)"
   ],
   "allergy": "No known drug allergies",
   "recent": "Bloods last week for tiredness: Hb 96 g/L, MCV 72 fl, ferritin 9 µg/L. No previous FBC abnormality on record. Nurse note: “patient expects iron tablets”.",
   "reason": "Recalled by video to discuss blood results."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · NICE HTG690 (2023, formerly DG56) · BSG iron-deficiency anaemia guideline (2021)",
   "summary": "Iron-deficiency anaemia in a 68-year-old woman is gastrointestinal blood loss until proven otherwise. Investigate the cause and treat with iron at the same time.",
   "points": [
    {
     "h": "Read the pattern",
     "t": "Low Hb, low MCV and a low ferritin confirm iron deficiency. In men and postmenopausal women, BSG 2021 advises gastroscopy and colonoscopy as the first-line GI investigations; about a third have an underlying cause, most often in the GI tract."
    },
    {
     "h": "FIT",
     "t": "NICE HTG690 recommends quantitative FIT to guide referral in adults with iron-deficiency anaemia. NICE NG12 (updated April 2026): refer on a suspected cancer pathway for colorectal cancer if FIT is at least 10 µg Hb/g faeces. A negative FIT does not close the case when IDA is unexplained and upper GI symptoms are present."
    },
    {
     "h": "Upper GI criterion",
     "t": "NICE NG12 (updated April 2026): aged 55 and over with weight loss and upper abdominal pain, reflux or dyspepsia — suspected cancer pathway referral for oesophageal or stomach cancer. Her dyspepsia and possible weight loss meet this if the weight loss is confirmed."
    },
    {
     "h": "Coeliac and drugs",
     "t": "BSG 2021: screen all adults with IDA for coeliac disease serologically (tTG-IgA). Ask about aspirin, NSAIDs and anticoagulants."
    },
    {
     "h": "Iron treatment",
     "t": "BSG 2021: one tablet of oral iron once daily (consider alternate days if not tolerated); products and strengths per BNF. Recheck FBC within 4 weeks and continue for about 3 months after Hb normalises to replenish stores. Iron darkens stools — warn her, and ask about tarry or sticky stools specifically."
    },
    {
     "h": "Same-day action",
     "t": "Melaena with haemodynamic symptoms, haematemesis, syncope, chest pain or breathlessness at rest needs same-day hospital assessment."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Drummond, I’m Dr Lee. Thank you for joining. Before anything else — you mentioned Brian’s on his own. Is he safe for the next ten minutes or so?",
    "dom": "rto",
    "why": "Hears the carer constraint in the first breath and deals with it"
   },
   {
    "who": "pt",
    "text": "He’s fine with the snooker for a bit. I know it’s low iron — the nurse hinted. I barely eat red meat now, so if you pop some tablets through I’ll get back to him."
   },
   {
    "who": "dr",
    "text": "I’ll be quick and I’ll be clear. Iron is part of today, yes. But I’d like a few minutes to understand how you’ve been and what might be behind the result, then we’ll agree a plan that works around Brian. Is that fair?",
    "dom": "gs",
    "why": "Sets an agenda that respects her time without accepting her conclusion"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about the tiredness. When did you first notice it, and what does it stop you doing?",
    "dom": "rto",
    "why": "Open question about the symptom that brought her"
   },
   {
    "who": "pt",
    "text": "Six months maybe. Stairs, the shopping, my legs feel like lead. But I’m up twice a night turning Brian, so what do you expect?"
   },
   {
    "who": "dr",
    "text": "That’s a lot to carry. Can I ask about your diet properly — on a normal day, what do you eat?",
    "dom": "tasks",
    "why": "Tests her explanation with facts rather than accepting it"
   },
   {
    "who": "pt",
    "text": "Chicken, fish, an egg most mornings. Just not much red meat."
   },
   {
    "who": "dr",
    "text": "And your stomach and appetite — any discomfort, indigestion, eating less, weight change?",
    "dom": "tasks",
    "why": "Targets the upper GI history her framing was hiding"
   },
   {
    "who": "pt",
    "text": "Well… my stomach’s been off a while. Up here. I’m eating a bit less. Maybe a few pounds down."
   },
   {
    "who": "dr",
    "text": "Thank you — that matters. I’m going to ask the question nobody enjoys. Have your stools changed at all — darker, black, sticky like tar, even on and off?",
    "dom": "tasks",
    "why": "Asks directly and kindly about melaena, the buried red flag"
   },
   {
    "who": "pt",
    "text": "(Pause.) They have been darker. Two or three months. I thought it was the multivitamin with iron in it."
   },
   {
    "who": "dr",
    "text": "That’s really important, and I’m glad you told me. Any blood you’ve vomited, dizziness or fainting, chest pain or breathlessness at rest? And do you take aspirin, ibuprofen or anything similar?",
    "dom": "tasks",
    "why": "Screens for active bleeding and NSAID or aspirin use"
   },
   {
    "who": "pt",
    "text": "No to all of that. Paracetamol now and then. Nothing else."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You’ve mentioned Brian a few times. When you noticed the darker stools, what went through your mind?",
    "dom": "rto",
    "why": "Follows the cue to her real fear"
   },
   {
    "who": "pt",
    "text": "Honestly? That it could be something. And that if it’s something, they’ll want me in hospital. And then who turns Brian? Our daughter’s in Australia. There’s nobody."
   },
   {
    "who": "dr",
    "text": "So the diet explanation has been doing a job for you — it was the answer that didn’t need a hospital. That makes complete sense. Can we talk about the other answer, and how we’d handle it without leaving Brian stranded?",
    "dom": "rto",
    "why": "Names the pre-built story kindly and links it to her concern"
   },
   {
    "who": "pt",
    "text": "(Quietly.) Yes. I suppose I knew."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Your blood shows three things: you’re anaemic, the red cells are small, and your iron stores are almost empty. With chicken, fish and eggs every day, that isn’t your diet. At 68, it usually means iron is being lost slowly from the gut — often something simple like an ulcer or inflammation, but we must rule out a growth.",
    "dom": "tasks",
    "why": "Interprets the pattern and states it is a find-the-bleed problem"
   },
   {
    "who": "pt",
    "text": "A growth. You mean cancer."
   },
   {
    "who": "dr",
    "text": "It’s one of the things we check for, and I won’t hide that. Most people with this pattern turn out to have something else. The point of testing quickly is that anything found early is usually far easier to treat.",
    "dom": "rto",
    "why": "Honest, proportionate answer without false reassurance"
   },
   {
    "who": "dr",
    "text": "Here’s what I’d suggest. A stool test kit you do at home. A blood test for coeliac disease. And, because of the stomach symptoms and the weight, an urgent referral for camera tests of the stomach and bowel on the suspected cancer pathway. These are day procedures — you go home the same day.",
    "dom": "tasks",
    "why": "FIT, coeliac serology and urgent upper and lower GI assessment in line with NICE NG12 (updated April 2026) and HTG690"
   },
   {
    "who": "pt",
    "text": "A day? Not an overnight stay?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "A day. And I’d like to plan around Brian properly, not leave you to juggle. You’re entitled to a carer’s assessment from the council, and there are sitting services for exactly these mornings. Would you let me refer you, and could your daughter help organise from Australia?",
    "dom": "rto",
    "why": "Treats the carer constraint as part of the plan"
   },
   {
    "who": "pt",
    "text": "I’ve never asked for help. But… yes. My daughter’s always saying I should."
   },
   {
    "who": "dr",
    "text": "Good. I will also start iron today — one tablet once a day, taken with orange juice or vitamin C if you can, and please stop the multivitamin so we’re not doubling up. The tablets turn stools dark, so if they ever become tarry, sticky or smell different, that’s new and you tell us. I’ll recheck your blood count within four weeks.",
    "dom": "tasks",
    "why": "Iron as treatment alongside, not instead of, investigation"
   },
   {
    "who": "pt",
    "text": "So the tablets aren’t the answer, they’re the meantime."
   },
   {
    "who": "dr",
    "text": "Exactly that. The thing most likely to take you away from Brian isn’t a morning in the endoscopy unit — it’s a bleed nobody found until it made you collapse. Finding it early is how you stay his carer.",
    "dom": "rto",
    "why": "Reframes investigation around her own priority"
   },
   {
    "who": "pt",
    "text": "I hadn’t thought of it like that."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Before you go back to him: black tarry stools, vomiting blood, feeling faint, chest pain or breathlessness — that’s 999, even if Brian is on his own; the ambulance crew will help arrange cover. Otherwise, the stool kit goes back this week, and I’ll ring you myself with every result.",
    "dom": "gs",
    "why": "Specific 999 triggers, dated actions and a named follow-up"
   },
   {
    "who": "pt",
    "text": "All right. Thank you, doctor."
   },
   {
    "who": "dr",
    "text": "When your daughter rings this week and asks what the doctor said, what will you tell her?",
    "dom": "rto",
    "why": "Teach-back to check understanding"
   },
   {
    "who": "pt",
    "text": "That it’s not my diet, I need tests — day ones — iron in the meantime, and she needs to help me sort a sitter."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question about the tiredness; acknowledged the result and Brian without letting her close the consultation on “just iron”.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Sole carer, broken nights, no care package, daughter abroad; practical barriers to attending tests.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “my stomach’s been off” and “anything that puts me in”, and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (diet), concern (what the dark stools mean and leaving Brian), expectation (tablets and no tests).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "FIT, coeliac serology (tTG-IgA with total IgA), U&E and LFTs; abdominal examination at a face-to-face visit; FBC recheck within 4 weeks of iron.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Upper GI loss (ulcer, oesophagitis, cancer) vs colorectal cancer vs coeliac; tested the diet explanation and excluded NSAID or aspirin use.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about melaena, haematemesis, faintness and chest pain; weight loss with dyspepsia at 68 recognised as an NICE NG12 (updated April 2026) upper GI criterion.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated iron-deficiency anaemia with probable GI blood loss, cause not yet known, in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Urgent referral for upper and lower GI investigation on the suspected cancer pathway, FIT, coeliac serology, and oral iron started alongside.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Carer’s assessment and sitting service arranged; multivitamin stopped; amlodipine unaffected.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 triggers named; FIT returned this week; FBC in 4 weeks; the GP phones with each result.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Sheila Drummond",
    "age": "68 years · female",
    "pmh": [
     "Hypertension",
     "Carer flag: sole carer for husband (Parkinson’s)"
    ],
    "meds": [
     "Amlodipine",
     "OTC multivitamin with iron (patient-reported)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ FBC last week for tiredness: Hb 96 g/L, MCV 72 fl, ferritin 9 µg/L. No prior anaemia on file. No FIT or coeliac serology on record.",
    "reason": "Recalled to discuss blood results. “I just need iron tablets.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and settle",
     "d": "She opens with her answer and a deadline (Brian). Acknowledge both, then agree an agenda that includes the result, not only the prescription."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Diet facts (chicken, fish, eggs), dyspepsia, weight, stool colour, haematemesis, faintness, NSAID or aspirin use. The dark stools only surface if asked directly and kindly."
    },
    {
     "t": "4–6",
     "h": "ICE and the hidden agenda",
     "d": "Why the diet story matters to her: hospital means leaving Brian. Name it gently before explaining anything."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "IDA at 68 means finding the bleed. FIT, coeliac serology, urgent upper and lower GI referral, iron alongside. Carer’s assessment and sitting service built into the plan."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 triggers in plain words, dated FIT return, FBC in 4 weeks, GP call with results. Teach-back: “What will you tell your daughter?”"
    }
   ],
   "wordPics": {
    "fail": "Prescribes iron and ends the call; never asks about stools, weight or indigestion; accepts the diet story; ignores Brian or treats him as an obstacle; no referral and no safety-net.",
    "pass": "Explains IDA needs investigation at her age; asks about GI symptoms and finds the dark stools; arranges FIT, coeliac serology and referral; starts iron alongside; gives basic safety-netting and follow-up.",
    "exc": "All of the above, plus: names the diet story as a shield kindly; builds the carer’s assessment and sitting service into the plan so the tests actually happen; frames investigation as how she stays Brian’s carer; dated actions and teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s just low iron — I’ll send some tablets through.”",
     "instead": "“Iron is part of today, but at 68 an empty iron store means we find out where it’s going.”",
     "why": "Treating IDA without investigating the cause is the classic Tasks fail in this station."
    },
    {
     "dont": "“You really need to put your own health first and not worry about your husband.”",
     "instead": "“Let’s plan around Brian properly — a sitting service and a carer’s assessment, so the tests can happen.”",
     "why": "Dismissing the constraint loses her; solving it earns Relating marks and gets the tests done."
    },
    {
     "dont": "“Any change in bowel habit?”",
     "instead": "“Have your stools been darker, black or sticky like tar, even on and off?”",
     "why": "A vague question gets a vague “no”; the specific one finds the melaena history."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Carer strain",
     "t": "Sole carer for a husband with Parkinson’s, broken nights, no package of care and a daughter abroad. Carer burden hides symptoms and blocks attendance — it must be planned for, not noted."
    },
    {
     "h": "Practical barriers",
     "t": "Bowel preparation, sedation and an escort home after endoscopy all need Brian covered for a day. Raise it now so appointments are not cancelled."
    }
   ],
   "legal": [
    {
     "h": "Care Act 2014 carer’s assessment",
     "t": "Any carer who appears to have support needs is entitled to a local authority carer’s assessment, regardless of the cared-for person’s finances. Brian can also have a needs assessment."
    },
    {
     "h": "Benefits",
     "t": "Brian may qualify for Attendance Allowance; she can check her position on Carer’s Allowance via Citizens Advice, as state pension affects payment."
    }
   ],
   "professional": [
    {
     "h": "Safe prescribing",
     "t": "Prescribing iron without investigating the cause falls short of good clinical care (GMC Good Medical Practice 2024). Document the discussion, the referral and her agreement."
    },
    {
     "h": "Shared decision-making",
     "t": "She may decline scopes. Explain the risks of not investigating, offer alternatives (for example CT colonography where appropriate), and record an informed decision if she declines."
    }
   ],
   "community": [
    {
     "h": "Support for carers",
     "t": "Local carers’ centre, Carers UK, and Parkinson’s UK (nurse and helpline); crossroads-type sitting services for appointment days."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Melaena (black, tarry, sticky stools), haematemesis, syncope, chest pain or breathlessness at rest — same-day assessment",
     "Unintentional weight loss with dyspepsia or upper abdominal pain at 55+ — NICE NG12 (updated April 2026) upper GI suspected cancer referral",
     "Aspirin, NSAID or anticoagulant use; change in bowel habit; rectal bleeding"
    ],
    "psychosocial": [
     "Sole carer: who looks after Brian during tests, and what happens if she is unwell",
     "Sleep deprivation and exhaustion masking symptoms",
     "Isolation: daughter in Australia, no care package"
    ],
    "ice": [
     "Idea: “It’s my diet — I hardly eat red meat.”",
     "Concern: the dark stools, and that any diagnosis means hospital and leaving Brian",
     "Expectation: iron tablets and no tests"
    ]
   },
   "diagnosis": "Iron-deficiency anaemia (Hb 96, MCV 72, ferritin 9) in a 68-year-old with dyspepsia, possible weight loss and darker stools: presumed gastrointestinal blood loss until proven otherwise; diet is not an adequate explanation.",
   "diagnosisLay": "“Your blood is low because your iron store is empty. With the food you eat, that doesn’t come from your plate — at your age it usually means a small amount of blood is being lost from the gut without you seeing it. We need to find where.”",
   "management": {
    "reflectIce": "“You’ve been holding on to the diet explanation because the other one might mean hospital and leaving Brian. Let’s make a plan where the tests happen and he’s looked after.”",
    "psychosocial": "Carer’s assessment and sitting service referral today; involve the daughter by phone; book procedures as day cases with Brian’s cover arranged in advance.",
    "sharedPlan": [
     "FIT this week (NICE HTG690); coeliac serology; urgent upper and lower GI investigation on the suspected cancer pathway (NICE NG12 (updated April 2026), BSG 2021)",
     "Oral iron once daily with vitamin C; stop the iron-containing multivitamin; FBC within 4 weeks",
     "Carer’s assessment and sitting service so appointments can be kept"
    ],
    "safetyNet": [
     "999 for tarry stools, vomiting blood, faintness, chest pain or breathlessness",
     "GP phones with each result; FBC recheck booked; review if iron is not tolerated"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Anaemia",
    "s": "Case walkthrough · BSG 2021",
    "href": "../cases/anaemia.html"
   },
   {
    "ic": "🗺️",
    "t": "Anaemia pathway",
    "s": "Visual algorithm · low Hb",
    "href": "algorithms/anaemia.html"
   },
   {
    "ic": "💠",
    "t": "Iron-deficiency anaemia protocol",
    "s": "Iron dosing · FIT · referral",
    "href": "management/iron-deficiency-anaemia.html"
   },
   {
    "ic": "🗺️",
    "t": "Dyspepsia pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) upper GI",
    "href": "algorithms/dyspepsia.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed on one move: treating the number and not the cause. The second trap is Brian — the candidate who ignores him loses her, and the candidate who plans around him gets the tests done.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing iron and closing the call because she asked for it and the story fits.",
     "why": "“Management plan not in line with current UK best practice.” IDA at 68 needs investigation for GI loss (BSG 2021; NICE HTG690; NICE NG12 (updated April 2026)).",
     "fix": "Say it plainly: “Iron is the meantime, not the answer.” Then FIT, coeliac serology and urgent referral."
    },
    {
     "dom": "tasks",
     "fail": "Asking “any bowel problems?” and accepting “no”.",
     "why": "“Does not gather sufficient information to make a safe assessment.” The darker stools only surface with a direct, specific question.",
     "fix": "“Have your stools been darker, black or sticky like tar, even on and off?” Then ask about vomiting blood, faintness and weight."
    },
    {
     "dom": "rto",
     "fail": "Treating Brian as a distraction — “we’ll be quick” — and never returning to him.",
     "why": "“Does not identify or respond to the patient’s cues.” Every refusal she makes routes through Brian.",
     "fix": "Make him part of the plan: carer’s assessment, sitting service, the daughter by phone, day-case framing."
    },
    {
     "dom": "rto",
     "fail": "Contradicting the diet story bluntly: “that’s not it, you need scopes.”",
     "why": "Correct but confrontational; she disengages and cancels the appointments.",
     "fix": "Use her own facts: “chicken, fish and eggs every day doesn’t empty an iron store” — then name what the story was protecting her from."
    },
    {
     "dom": "gs",
     "fail": "Jargon: “We’ll do a FIT, tTG, and bidirectional endoscopy on the 2WW.”",
     "why": "“Language not easily understood by the patient.”",
     "fix": "“A stool kit you do at home, a blood test for coeliac disease, a reaction to gluten, and camera tests of the stomach and bowel — day visits.”"
    },
    {
     "dom": "gs",
     "fail": "“Come back if you’re worried” as the only safety-net, with no dates.",
     "why": "Non-specific safety-netting is a standard failing feedback statement, and she will not come back unprompted.",
     "fix": "Name the 999 symptoms, date the FIT return and FBC recheck, and promise the GP will ring with results."
    }
   ]
  }
 },
 "angry-apology": {
  "stem": {
   "name": "Geoffrey Lam",
   "age": "61-year-old man",
   "pmh": [
    "No significant past medical history",
    "Family history: father — bowel cancer, died at 66"
   ],
   "meds": [
    "No regular medication (no NSAIDs or aspirin)"
   ],
   "allergy": "No known drug allergies",
   "recent": "11 January: Hb 108 g/L (microcytic), ferritin 9 µg/L — filed “normal — no action” by a locum GP who has since left. Re-attended 2 April with worsening fatigue: Hb 96 g/L, ferritin 6 µg/L. Suspected cancer pathway referral made for colonoscopy and OGD; FIT requested. Significant event logged by the practice manager.",
   "reason": "Practice-booked video call: duty GP to explain the missed result."
  },
  "knowledge": {
   "guideline": "Duty of candour (CQC Regulation 20) · NICE NG12 (updated April 2026) · BSG 2021 iron deficiency anaemia guideline",
   "summary": "Two problems in one call: an unexplained iron-deficiency anaemia in a 61-year-old man needing urgent GI investigation, and a candour event. Apologise plainly, give a precise account, answer the delay question honestly, and describe the concrete system fix.",
   "points": [
    {
     "h": "Candour: what a real apology contains",
     "t": "CQC Regulation 20 and the GMC/NMC guidance on openness and honesty when things go wrong: tell the patient what happened, apologise, explain what happens next, and follow up in writing. Under the Compensation Act 2006 (s2), an apology is not in itself an admission of negligence. Say “sorry”. It is the practice’s error; don’t blame the locum."
    },
    {
     "h": "The anaemia: current referral criteria",
     "t": "NICE NG12 (updated April 2026): offer FIT to adults with iron-deficiency anaemia, and refer on a suspected colorectal cancer pathway if FIT is 10 µg Hb/g or more. BSG 2021: men with iron-deficiency anaemia should have bidirectional endoscopy (OGD and colonoscopy), so a negative FIT does not end the investigation. His urgent referral stands."
    },
    {
     "h": "Complete the work-up",
     "t": "Coeliac serology (tTG) for unexplained iron deficiency (NICE NG20). Take a history of diet, blood donation, NSAIDs and aspirin, and ask about bleeding. The differential includes peptic ulcer, angiodysplasia, coeliac disease and colorectal or gastric cancer. Iron deficiency at his age is frequently benign, but it needs investigating."
    },
    {
     "h": "Iron replacement",
     "t": "BSG 2021: one tablet of oral iron once daily (alternate-day dosing is an option if it’s poorly tolerated); dose per BNF. Check Hb within about 4 weeks. A poor response suggests malabsorption, non-adherence or ongoing loss. Continue for about 3 months after Hb normalises, to replenish stores."
    },
    {
     "h": "The 91-days question",
     "t": "Answer honestly in two parts: colorectal cancers usually grow over years, and a delay of a few months rarely changes stage. The only real answer is the scope, so expedite it and say so. Keep benign causes in view. Don’t invent survival figures."
    },
    {
     "h": "The system fix",
     "t": "Significant-event analysis with the outcome shared in writing. Name a concrete change, such as abnormal results can’t be filed without a documented action. Give the complaints route (practice or ICB, then the Parliamentary and Health Service Ombudsman) as his right, without pushing or deflecting."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and candour",
    "clock": "0–2 min",
    "who": "dr",
    "text": "Mr Lam, I’m Dr Ansari, the duty GP. Thank you for being so clear. You asked for an explanation and an apology, so here they are. In January your blood test showed iron-deficiency anaemia. It was abnormal, and it was filed as normal. That was our error as a practice, and I am sorry.",
    "dom": "tasks",
    "why": "States the error plainly and says sorry without qualification"
   },
   {
    "who": "pt",
    "text": "Thank you. That’s the first time anyone has actually said it. Who filed it?"
   },
   {
    "who": "dr",
    "text": "A locum doctor who has since left. But I’m not going to put it on one person. Our system let an abnormal result be filed without any action, and the practice is responsible for that.",
    "dom": "tasks",
    "why": "Takes practice responsibility rather than scapegoating"
   },
   {
    "who": "pt",
    "text": "Fine. Go on."
   },
   {
    "phase": "The account and data gathering",
    "clock": "2–5 min",
    "who": "dr",
    "text": "What should have happened in January: the result confirmed as iron deficiency, a stool test called FIT, a coeliac blood test, and an urgent referral for camera tests of the bowel and stomach — the same referral you have now. That should have started in the week of the fourteenth.",
    "dom": "tasks",
    "why": "Precise factual account in his register"
   },
   {
    "who": "pt",
    "text": "Ninety-one days late."
   },
   {
    "who": "dr",
    "text": "Yes. Before I say more, can I check how you are now? Any blood in your stools, black stools, change in bowel habit, weight loss, tummy pain or indigestion?",
    "dom": "tasks",
    "why": "Screens for red flags that change urgency"
   },
   {
    "who": "pt",
    "text": "None of those. Tired, and breathless on the second flight of stairs. Appetite fine. No painkillers. No aspirin."
   },
   {
    "who": "dr",
    "text": "Thank you. May I ask something your folder may not cover? What made you ask for blood tests for tiredness in January?",
    "dom": "rto",
    "why": "Looks for the reason behind the precision"
   },
   {
    "who": "pt",
    "text": "(pause) My father died of bowel cancer at sixty-six. Six months from diagnosis to funeral. I’ve been expecting this for thirty years. I keep doing the sum: his six months, minus three."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "So for thirty years part of you has been waiting for this letter, and then we lost you three months. I understand why you keep doing that sum.",
    "dom": "rto",
    "why": "Acknowledges the dread before giving statistics"
   },
   {
    "who": "pt",
    "text": "I need to know whether those ninety-one days will cost me my life."
   },
   {
    "who": "dr",
    "text": "Here is the honest answer, in two parts. First, bowel cancers, when they are cancers, usually grow over years; a three-month delay rarely changes the stage they’re found at. Second, I won’t hide behind “rarely”: the real answer comes from the camera, so I’ve asked for your test to be expedited, with the delay recorded as the reason.",
    "dom": "tasks",
    "why": "Honest answer to the delay question, without false reassurance"
   },
   {
    "who": "pt",
    "text": "And if it isn’t cancer?"
   },
   {
    "who": "dr",
    "text": "That’s a real possibility. Iron deficiency at your age is often caused by something benign: an ulcer, small fragile blood vessels in the bowel, or coeliac disease. We’re looking properly so we know which. Your father’s cancer was found late. We’re looking at the very start of yours, if it even is that.",
    "dom": "tasks",
    "why": "Keeps the benign differential in view"
   },
   {
    "phase": "The plan and the system fix",
    "clock": "7–10 min",
    "who": "dr",
    "text": "Today: the FIT kit and the coeliac blood test go out, and I’ll start iron, one tablet a day. We’ll recheck your blood count in four weeks. The urgent referral is in and has been chased.",
    "dom": "tasks",
    "why": "Concrete clinical plan with dates"
   },
   {
    "who": "pt",
    "text": "And what stops this happening to the next person?"
   },
   {
    "who": "dr",
    "text": "It’s logged as a significant event, which means a formal review. The change is already agreed: abnormal results can’t be filed here without a documented action. You’ll get the review’s outcome in writing. And your complaint is your right. The details go to you today, and whether you send your letter is your decision. It won’t affect your care either way.",
    "dom": "tasks",
    "why": "System fix, SEA in writing, complaint respected"
   },
   {
    "who": "pt",
    "text": "I appreciate that you haven’t tried to talk me out of it."
   },
   {
    "who": "dr",
    "text": "You’ve carried this precisely and, I suspect, without much sleep. Who knows about the missed result?",
    "dom": "rto",
    "why": "Opens the carrying-it-alone question"
   },
   {
    "who": "pt",
    "text": "Nobody. Not my wife. She’d be furious, and I need to think clearly."
   },
   {
    "who": "dr",
    "text": "That’s your call. The last three months were ours to carry. The next few weeks shouldn’t be yours alone. If it would help, I’m happy to talk to you both together.",
    "dom": "rto",
    "why": "Offers practical help with telling his wife, without pressure"
   },
   {
    "phase": "Safety-net and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "Before the scope: if you see blood or black stools, get abdominal pain with bloating, or your bowels stop working, or you become much more breathless, call the same day. And whatever the camera shows, I’ll ring you myself with the result. Can I check what you’re taking away?",
    "dom": "gs",
    "why": "Named escalation symptoms, personal follow-up, teach-back"
   },
   {
    "who": "pt",
    "text": "An error, admitted. Scope expedited. FIT and coeliac test, iron daily, bloods in four weeks. Review outcome in writing. And you’ll ring me."
   },
   {
    "who": "dr",
    "text": "Exactly. Here is my direct line. I’m sorry again, Mr Lam.",
    "dom": "rto",
    "why": "Closes with continuity and the apology repeated"
   },
   {
    "who": "pt",
    "text": "Thank you, doctor. That was the conversation I needed."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Answered his three questions directly; apology and plain account inside the first two minutes.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work, his father’s death, carrying it alone, the undecided complaint letter.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "The folder and dates; “that partly depends on this conversation”; the “six months minus three” arithmetic.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (91 days lost, nobody accountable); concern (his father’s late cancer; his own survival); expectation (a real apology and honest facts).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "FIT, tTG, urgent bidirectional endoscopy expedited, Hb recheck at about 4 weeks.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Colorectal or gastric cancer vs peptic ulcer, angiodysplasia, coeliac disease; drug and diet history.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about bleeding, black stools, weight loss, bowel change, obstruction and breathlessness.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Unexplained iron-deficiency anaemia needing urgent GI investigation; a candour event acknowledged.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Unqualified apology, practice responsibility, oral iron once daily, expedited referral, SEA outcome in writing, complaint route as his right.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Family history noted; acknowledged sleep and isolation; offered help talking to his wife.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day triggers named, Hb recheck dated, personal call after the scope whatever the result.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Professional & ethical dilemmas",
    "Investigations & results"
   ],
   "stem": {
    "name": "Geoffrey Lam",
    "age": "61 years · male",
    "pmh": [
     "Nil significant",
     "FH: father — bowel cancer, died at 66"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ 11 Jan: Hb 108, ferritin 9 — filed “normal, no action”. 2 Apr: Hb 96, ferritin 6. Suspected cancer pathway colonoscopy and OGD referral sent; FIT requested; significant event logged.",
    "reason": "Practice-booked video call: duty GP to explain the missed result."
   },
   "timeMap": [
    {
     "t": "0–2",
     "h": "Candour first",
     "d": "He asks three questions. Answer the first two straight away: what happened, and “I am sorry”. No preamble, no “regret any distress”."
    },
    {
     "t": "2–5",
     "h": "Account and history",
     "d": "Precise timeline: what should have happened in January. Red-flag symptoms, drugs and diet. Ask why tiredness prompted bloods; the father emerges."
    },
    {
     "t": "5–7",
     "h": "The 91 days",
     "d": "Acknowledge the thirty-year dread first. Then the two-part honest answer, plus the benign differential."
    },
    {
     "t": "7–10",
     "h": "Plan and system fix",
     "d": "FIT, tTG, iron once daily, Hb in 4 weeks, referral expedited. SEA in writing, the concrete protocol change, the complaint as his right. His wife."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Same-day triggers, your personal call after the scope, direct line, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Hedged non-apology (“we regret any distress”); blames the locum; vague about what went wrong; either promises the delay made no difference or implies it was fatal; discourages the complaint; misses his father; no dated plan.",
    "pass": "Says sorry plainly, explains the error and what should have happened, confirms the urgent referral and tests, answers the delay question reasonably, mentions the review, and gives a safety-net.",
    "exc": "All of the above, plus: matches his precision with dates; takes practice responsibility; gives the two-part honest answer with the benign differential; finds the father and acknowledges the dread before any statistics; names a concrete system fix and the SEA outcome in writing; respects the complaint as his decision; offers help telling his wife; promises a personal call after the scope."
   },
   "avoid": [
    {
     "dont": "“We regret any distress this may have caused.”",
     "instead": "“The result was abnormal and it was filed as normal. That was our error, and I am sorry.”",
     "why": "A hedged apology fails duty of candour and pushes him towards the complaint."
    },
    {
     "dont": "“The locum who filed it has left, so it’s hard to know what happened.”",
     "instead": "“It was our system that allowed it. The practice is responsible.”",
     "why": "Scapegoating a departed colleague reads as evasion."
    },
    {
     "dont": "“Three months won’t have made any difference.”",
     "instead": "“A three-month delay rarely changes the stage, but only the camera can tell us, so I’ve pushed the date.”",
     "why": "Reassurance that outruns the evidence damages trust if the result is bad."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Control as coping",
     "t": "An accountant with a folder and exact dates: precision is how he manages fear. Match it rather than soothing him."
    },
    {
     "h": "Isolation",
     "t": "He hasn’t told his wife about the error. The coming weeks of tests and waiting are easier shared; offer help without pressure."
    }
   ],
   "legal": [
    {
     "h": "Statutory duty of candour",
     "t": "CQC Regulation 20: for a notifiable safety incident, tell the patient in person, apologise, give an account and what happens next, and follow up in writing. The Compensation Act 2006 (s2): an apology is not in itself an admission of negligence."
    },
    {
     "h": "Complaints",
     "t": "NHS complaints regulations (2009): complain to the practice or the ICB within 12 months; acknowledgement within 3 working days; the Parliamentary and Health Service Ombudsman after local resolution."
    }
   ],
   "professional": [
    {
     "h": "Professional duty of candour",
     "t": "GMC/NMC Openness and honesty when things go wrong: be open, apologise, explain, and support the patient. Report the incident and take part in the review."
    },
    {
     "h": "Results governance",
     "t": "Significant-event analysis with shared learning; a results-handling protocol that doesn’t allow abnormal results to be filed without an action; locum induction covering results workflow."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Bowel Cancer UK and Guts UK for information while waiting; NHS complaints advocacy (free, independent) if he pursues the complaint."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Rectal bleeding or black stools; change in bowel habit; weight loss",
     "Obstructive symptoms: colicky pain, bloating, absolute constipation — same-day",
     "Worsening breathlessness or chest pain with anaemia"
    ],
    "psychosocial": [
     "Father died of bowel cancer at 66, six months after diagnosis — a thirty-year dread",
     "Carrying the error alone; his wife doesn’t know",
     "A drafted complaint letter; “that partly depends on this conversation”"
    ],
    "ice": [
     "Idea: a result was misfiled and 91 days of head start were lost",
     "Concern: “my father’s six months, minus three”; nobody accountable",
     "Expectation: the word sorry, a precise account, the system fix, the honest prognosis answer"
    ]
   },
   "diagnosis": "Unexplained iron-deficiency anaemia (Hb 96 g/L, ferritin 6 µg/L) in a 61-year-old man needing urgent upper and lower GI investigation. Colorectal cancer is one possibility among several, alongside a candour event requiring a full apology and account.",
   "diagnosisLay": "“Your blood is low in iron. At your age we always look for where it’s going, usually a slow leak somewhere in the gut. Sometimes that’s a cancer; often it’s an ulcer, small fragile blood vessels, or coeliac disease. The cameras will tell us which.”",
   "management": {
    "reflectIce": "“You’ve been waiting thirty years for this letter, and we cost you three months. I understand the arithmetic you’re doing. Let’s get you numbers that are your own.”",
    "psychosocial": "Match his precision; offer to meet with his wife; respect the complaint decision as his; give him a direct line.",
    "sharedPlan": [
     "Urgent bidirectional endoscopy (BSG 2021) expedited with the delay documented; FIT (NICE NG12 (updated April 2026))",
     "tTG (NICE NG20); oral iron once daily (BSG 2021, dose per BNF); Hb recheck at about 4 weeks",
     "Significant-event analysis with outcome in writing; results-filing protocol changed; complaint details given"
    ],
    "safetyNet": [
     "Same-day contact for bleeding, black stools, obstructive symptoms or worsening breathlessness",
     "Personal GP call after the scope whatever the result"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Anaemia",
    "s": "Case walkthrough · NICE NG12 (updated April 2026)",
    "href": "../cases/anaemia.html"
   },
   {
    "ic": "💠",
    "t": "Iron-deficiency anaemia protocol",
    "s": "Investigation · oral iron · review",
    "href": "management/iron-deficiency-anaemia.html"
   },
   {
    "ic": "🗺️",
    "t": "Low ferritin",
    "s": "Visual algorithm · finding the source",
    "href": "algorithms/low-ferritin.html"
   },
   {
    "ic": "📋",
    "t": "Coeliac disease",
    "s": "Case walkthrough · NICE NG20",
    "href": "../cases/coeliac.html"
   }
  ],
  "pitfalls": {
   "intro": "Candour stations are failed in the first two minutes (a hedged or delayed apology) and in the prognosis answer (false reassurance or panic). The patient’s precision is a test of yours.",
   "items": [
    {
     "dom": "tasks",
     "fail": "“We regret any distress,” or a long preamble before the apology.",
     "why": "Duty of candour needs a plain account and an apology. Hedging reads as defensive and pushes him to complain.",
     "fix": "In the first minute: “It was abnormal, it was filed as normal, that was our error, and I am sorry.”"
    },
    {
     "dom": "tasks",
     "fail": "Blaming the departed locum.",
     "why": "It looks like evasion. Candour sits with the organisation.",
     "fix": "“Our system allowed it; the practice is responsible.” Then describe the fix."
    },
    {
     "dom": "tasks",
     "fail": "“Three months won’t make a difference,” or the reverse: silence when he asks if it will cost his life.",
     "why": "False reassurance and evasion both fail. He asked a direct question.",
     "fix": "Two parts: delays of a few months rarely change stage; the camera is the real answer and it has been expedited. Add the benign differential."
    },
    {
     "dom": "rto",
     "fail": "Soothing and empathy lines to a man who has asked for numbers.",
     "why": "“Did not adapt to the patient.” Mismatched register loses trust.",
     "fix": "Dates, results and mechanisms first; feeling follows once he raises his father."
    },
    {
     "dom": "rto",
     "fail": "Never asking why tiredness prompted blood tests.",
     "why": "Misses the hidden agenda: his father’s late bowel cancer and thirty years of dread.",
     "fix": "“What does bowel cancer mean in your life?” Acknowledge the dread before any statistics."
    },
    {
     "dom": "gs",
     "fail": "Discouraging the complaint (“I hope that won’t be necessary”) or pushing it at him.",
     "why": "Either one takes the decision away from him.",
     "fix": "Give the route, say it’s his decision, and confirm it won’t affect his care."
    }
   ]
  }
 },
 "angry-complaint": {
  "stem": {
   "name": "Pauline Drake",
   "age": "54-year-old woman",
   "pmh": [
    "Frozen shoulder — seen 10 days ago (Dr Mensah): examination documented, analgesia, physiotherapy referral, safety-net recorded"
   ],
   "meds": [
    "Analgesia as prescribed for shoulder"
   ],
   "allergy": "No known drug allergies",
   "recent": "Husband Colin, 58, is also registered here: admitted 5 days ago with an inferior MI, stented, now home. Reception note: “VERY unhappy — wants to complain about Dr Mensah, will only speak to a doctor.”",
   "reason": "Urgent telephone slot requested to make a complaint about another GP."
  },
  "knowledge": {
   "guideline": "NHS complaints procedure · GMC Good Medical Practice (2024) · NICE NG185 (acute coronary syndromes, including secondary prevention)",
   "summary": "Give the complaints route promptly and without defensiveness, neither defend nor condemn the colleague, respect Colin’s confidentiality, and then turn to the living clinical work: Colin’s recovery, and Pauline as a witness to a cardiac arrest.",
   "points": [
    {
     "h": "The complaints route",
     "t": "Under the Local Authority Social Services and National Health Service Complaints (England) Regulations 2009, complain to the practice or to the commissioner (the ICB), not both. Acknowledgement within 3 working days, and complaints are normally made within 12 months. If local resolution fails, the next stage is the Parliamentary and Health Service Ombudsman. Free NHS complaints advocacy is available. Concerns about a doctor’s fitness to practise can also go straight to the GMC."
    },
    {
     "h": "Confidentiality and consent",
     "t": "The consultation she is complaining about is Colin’s. Anyone complaining on another person’s behalf needs that person’s consent, and his record can’t be discussed with Pauline without it (GMC Confidentiality, 2017). General facts about how heart disease presents are fine to share."
    },
    {
     "h": "The colleague: the professional line",
     "t": "GMC Good Medical Practice: respond to complaints honestly and promptly, and don’t comment unfairly on colleagues. Don’t judge a consultation you weren’t in. Commit to a significant-event analysis, which is appropriate after an MI soon after a consultation. It is fair to say reflux-type symptoms without exertional features can genuinely look like reflux."
    },
    {
     "h": "Colin: living clinical work",
     "t": "NICE NG185: offer cardiac rehabilitation, secondary-prevention drugs, and advice on activity, sex and return to work, and check mood. Cardiac rehabilitation reduces cardiovascular mortality by around a fifth to a quarter. DVLA Group 1: no driving for 1 week after successful PCI, or 4 weeks if not treated by PCI (no need to notify). NICE CG126: GTN, repeat after 5 minutes, and call 999 if pain persists 5 minutes after the second dose."
    },
    {
     "h": "Pauline: acute stress after a witnessed arrest",
     "t": "Intrusive replays and insomnia five days after watching her husband’s arrest are an acute stress reaction. NICE NG116: active monitoring and a review within a month; don’t offer psychologically focused debriefing. Offer trauma-focused CBT if she has acute stress disorder or clinically important symptoms, including within the first month, or if symptoms persist."
    },
    {
     "h": "Guilt: meet it, don’t confirm or dismiss",
     "t": "“I gave him my Gaviscon” is guilt looking for a target. Explain that burning after meals eased by antacid looks like reflux to anyone; her fortnight isn’t knowable as the cause. Don’t call it “nothing” either: acknowledge how loud it is at 3am."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–2 min",
    "who": "dr",
    "text": "Mrs Drake, it’s Dr Whitaker. I’m so sorry about what’s happened to Colin. You’ve asked how to make a complaint, and I’ll give you that. First, please tell me everything. I’m listening.",
    "dom": "rto",
    "why": "Lets the anger discharge without defending or interrupting"
   },
   {
    "who": "pt",
    "text": "She saw him six weeks ago with chest trouble and gave him an indigestion tablet. Last Tuesday he collapsed in the garden centre car park. I watched them shock — no. I’m not doing tears. I want to know how to report her."
   },
   {
    "who": "dr",
    "text": "Then that comes first. You can complain to our practice manager in writing or by phone, or to the ICB instead if you’d prefer someone outside the practice. You’ll get an acknowledgement within three working days, a proper investigation and a written response. If you’re not satisfied, the Health Service Ombudsman is independent. You can also contact the GMC directly. I’ll email or post all of this today.",
    "dom": "tasks",
    "why": "Gives the full complaints route first, as she asked"
   },
   {
    "who": "pt",
    "text": "Right. Good. At least someone’s giving me a straight answer."
   },
   {
    "who": "dr",
    "text": "And complaining won’t change how anyone here treats you or Colin. Can I ask one thing: does Colin know you’re ringing, and does he want the complaint made?",
    "dom": "tasks",
    "why": "Addresses consent for a complaint about another patient’s care"
   },
   {
    "who": "pt",
    "text": "He doesn’t want to talk about any of it. But he wouldn’t stop me."
   },
   {
    "phase": "Data gathering",
    "clock": "2–5 min",
    "who": "dr",
    "text": "I’ll be honest with you. Colin’s records are his, so I can’t go through his consultation with you without his permission. If he agrees, the review can look at everything and share the findings with you both. What I can promise is that it will be reviewed formally as a significant event. That happens whenever someone has a heart attack after being seen recently.",
    "dom": "tasks",
    "why": "Respects confidentiality and commits to SEA without defending or condemning"
   },
   {
    "who": "pt",
    "text": "She was thorough with me, you know, with my shoulder. That’s what makes it worse, somehow."
   },
   {
    "who": "dr",
    "text": "That sounds confusing: a doctor who was careful with you. You started to tell me about the car park. Would you tell me what happened?",
    "dom": "rto",
    "why": "Returns to the slammed-shut trauma cue"
   },
   {
    "who": "pt",
    "text": "He went grey. A stranger was kneeling on his chest. I just stood there holding the bedding plants. I can’t stop seeing it. I haven’t slept properly since."
   },
   {
    "who": "dr",
    "text": "That’s a terrible thing to watch. Everyone has been looking after Colin. Who’s been looking after the woman holding the bedding plants?",
    "dom": "rto",
    "why": "Recognises her as a patient in her own right"
   },
   {
    "who": "pt",
    "text": "Nobody. And the worst of it — I told him it was indigestion. For a fortnight before he went. I gave him my Gaviscon and told him to stop fussing."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "I imagine that sentence plays at 3am as loudly as the car park does. Burning after meals that settles with an antacid looks like indigestion to any sensible, loving person. You did what almost anyone would do. What you’re torturing yourself with isn’t something you could have known.",
    "dom": "rto",
    "why": "Meets the guilt without confirming or dismissing it"
   },
   {
    "who": "pt",
    "text": "(quietly) I think that’s why I’m so angry."
   },
   {
    "who": "dr",
    "text": "That makes a lot of sense. How is Colin doing now he’s home? What worries you most?",
    "dom": "rto",
    "why": "Elicits her current fear and expectations"
   },
   {
    "who": "pt",
    "text": "He just sits in the chair, waiting for the next one. Won’t do his exercises. I’m terrified of losing him."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "That fear is understandable. Some heart attacks give very little fair warning, and the review will look at what could have been known. The part we can really change now is Colin’s recovery. Cardiac rehab reduces the chance of dying from heart disease by around a fifth to a quarter, and it helps with exactly that fear of the next one.",
    "dom": "tasks",
    "why": "Honest context, then turns to secondary prevention"
   },
   {
    "who": "pt",
    "text": "He won’t go. He says there’s no point."
   },
   {
    "who": "dr",
    "text": "Feeling low and frightened after a heart attack is common and treatable. I’d like to see Colin myself this week: his tablets, the rehab, when he can drive, anything he won’t say out loud. Would he come if I rang and invited him?",
    "dom": "tasks",
    "why": "Offers Colin a dedicated post-MI review including mood"
   },
   {
    "who": "pt",
    "text": "He might, if it came from you."
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "And you. What you’re describing — the replays, not sleeping — is a normal reaction to something abnormal, and it often settles over a few weeks. I’d like to see you too, and keep an eye on it. If it’s still bad after a month, there is specific therapy that works. I wouldn’t start sleeping tablets.",
    "dom": "tasks",
    "why": "Acute stress reaction: active monitoring, no reflex prescription"
   },
   {
    "who": "pt",
    "text": "I suppose I could come in. I didn’t think it was about me."
   },
   {
    "who": "dr",
    "text": "It is about you as well. So: complaint details to you today, the significant event review, Colin’s appointment, and yours. Does that cover what you need?",
    "dom": "gs",
    "why": "Summarises all layers of the plan"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "One more thing for the house. If Colin gets chest pain, he uses his GTN spray. If it isn’t better five minutes after a second dose, or he looks unwell at any point, you ring 999. Could you tell me back what you’d do?",
    "dom": "gs",
    "why": "Household 999 coaching with teach-back"
   },
   {
    "who": "pt",
    "text": "Spray, wait five minutes, spray again, and if it’s not gone five minutes later, 999."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll ring you on Friday to see how you both are. Whatever you decide about the complaint, it won’t affect your care.",
    "dom": "rto",
    "why": "Dated follow-up; complaint left respected as her choice"
   },
   {
    "who": "pt",
    "text": "Thank you. I didn’t expect to end up talking about me."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let the anger run without interrupting or defending; gave the complaints route early because she asked for it.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "The witnessed arrest, her sleep, Colin withdrawn at home, fear of being widowed.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "“I’m not doing tears”, “she was thorough with ME”, and the Gaviscon confession; each followed up.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a missed heart attack); concerns (the replayed arrest, her own guilt, losing Colin); expectation (a complaint route today).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Colin: post-MI review (drugs, rehab, mood screen, driving). Pauline: own appointment to assess acute stress and sleep.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Acute stress reaction vs emerging PTSD or depression in Pauline; post-MI anxiety or depression in Colin.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened Pauline’s mood and safety; gave household chest-pain and GTN rules with 999 triggers.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named the anger, trauma and guilt as linked; named acute stress reaction in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Complaint details in writing today, SEA committed, Colin’s confidentiality respected, both appointments booked, no reflex hypnotic.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Cardiac rehab uptake, secondary prevention, DVLA advice for Colin; sleep and trauma follow-up for Pauline.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "GTN rule and 999 triggers checked by teach-back; follow-up call dated; therapy if symptoms persist beyond a month.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Professional & ethical dilemmas",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Pauline Drake",
    "age": "54 years · female",
    "pmh": [
     "Frozen shoulder (10 days ago)"
    ],
    "meds": [
     "Analgesia for shoulder"
    ],
    "allergy": "NKDA",
    "recent": "Seen 10 days ago by Dr Mensah — shoulder, thorough note. Husband Colin (also our patient): inferior MI 5 days ago, stented, home.",
    "reason": "⚠ Urgent telephone: “wants to complain about Dr Mensah, will only speak to a doctor.”"
   },
   "timeMap": [
    {
     "t": "0–2",
     "h": "Let it land",
     "d": "Two minutes of listening. Don’t defend, correct or interrupt. Then give the complaints route straight away; she asked for it."
    },
    {
     "t": "2–5",
     "h": "Consent and cues",
     "d": "Colin’s records are his; ask about his consent. Commit to SEA. Return to the car park and to “she was thorough with ME”."
    },
    {
     "t": "5–7",
     "h": "Guilt and fear",
     "d": "The Gaviscon confession: meet it. Then ask how Colin is now and what she fears most."
    },
    {
     "t": "7–10",
     "h": "The living work",
     "d": "Colin: rehab, tablets, mood, driving, with his own appointment. Pauline: acute stress, her own appointment, no reflex hypnotic."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "GTN rule and 999, checked with teach-back. Complaint details today. Friday phone call."
    }
   ],
   "wordPics": {
    "fail": "Defends Dr Mensah or agrees she missed it; withholds or delays the complaints route; discusses Colin’s record without his consent; never finds the car park or the Gaviscon; ends with no plan for Colin or for Pauline.",
    "pass": "Lets her speak, gives the complaints route without defensiveness, commits to a review without judging the colleague, acknowledges her distress, and offers Colin a post-MI review with basic 999 advice.",
    "exc": "All of the above, plus: raises Colin’s consent and confidentiality tactfully; returns to the slammed-shut tears; meets the Gaviscon guilt with honest context; recognises her acute stress reaction and books her in; checks the GTN rule by teach-back; dates the follow-up call, and she ends up talking about herself."
   },
   "avoid": [
    {
     "dont": "“I’m sure Dr Mensah did everything correctly.”",
     "instead": "“I wasn’t in that consultation, so I won’t defend or judge it. It will be reviewed properly.”",
     "why": "Reflex defence reads as a closed shop and makes the anger worse."
    },
    {
     "dont": "“That does sound like it was missed.”",
     "instead": "“The review will look at what could have been known. Some heart attacks give very little fair warning.”",
     "why": "Judging a colleague’s consultation you didn’t see is unfair and unprofessional."
    },
    {
     "dont": "“Let me pull up Colin’s notes and go through what she wrote.”",
     "instead": "“Colin’s records are his. With his permission the review can share everything with you both.”",
     "why": "Disclosing another patient’s record without consent is a confidentiality breach."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "A household in shock",
     "t": "A spouse who witnessed a cardiac arrest, a husband withdrawn after MI, and guilt on both sides. Sleep, work, driving and intimacy are all affected and rarely raised unprompted."
    }
   ],
   "legal": [
    {
     "h": "NHS complaints regulations (2009)",
     "t": "Complain to the practice or the ICB; acknowledgement within 3 working days; normally within 12 months; Parliamentary and Health Service Ombudsman after local resolution. A complaint on someone else’s behalf needs their consent."
    },
    {
     "h": "Confidentiality",
     "t": "GMC Confidentiality (2017): Colin’s consultation details can’t be shared with his wife without his consent, however close they are."
    },
    {
     "h": "DVLA — after MI",
     "t": "Group 1: stop driving for 1 week after successful PCI (4 weeks if not treated by PCI); no need to notify DVLA. Group 2: 6 weeks and notify."
    }
   ],
   "professional": [
    {
     "h": "Responding to complaints",
     "t": "GMC Good Medical Practice: respond promptly, fully and honestly; a complaint must not affect the patient’s care. Don’t make unfair comments about colleagues."
    },
    {
     "h": "Significant-event analysis",
     "t": "An MI soon after a GP consultation for chest symptoms should be reviewed as a significant event, whether or not anyone complains, with learning shared."
    },
    {
     "h": "Supporting colleagues",
     "t": "Dr Mensah is entitled to fair process. Neither protecting nor condemning her keeps the review honest."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "NHS complaints advocacy (free, independent), the British Heart Foundation’s support for families after a heart attack, cardiac rehabilitation, and NHS Talking Therapies if her symptoms persist."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Colin: chest pain not settling after GTN, breathlessness, collapse — 999",
     "Pauline: intrusive replays and insomnia persisting beyond a month, or low mood with hopelessness — reassess and refer",
     "Colin “waiting for the next one”: post-MI depression and anxiety screen needed"
    ],
    "psychosocial": [
     "She witnessed the arrest and has not slept properly since",
     "Colin withdrawn, not doing his exercises; she fears being widowed",
     "Guilt: two weeks of telling him it was indigestion"
    ],
    "ice": [
     "Idea: Dr Mensah missed a heart attack and fobbed him off",
     "Concern: the replayed arrest; her own guilt; losing Colin",
     "Expectation: the complaints route today, and to be taken seriously"
    ]
   },
   "diagnosis": "Anger carrying two hidden layers: an acute stress reaction after witnessing her husband’s cardiac arrest, and guilt about her own reassurance. The complaint is legitimate and must be handled properly; the clinical work is Colin’s recovery and Pauline’s care.",
   "diagnosisLay": "“What you’re going through — seeing it again and again, not sleeping — is the mind trying to process something terrifying. It usually eases over weeks, and if it doesn’t, there’s treatment that works.”",
   "management": {
    "reflectIce": "“You asked how to complain, so you have that. And I think underneath there’s a woman who watched her husband nearly die and has been blaming herself ever since.”",
    "psychosocial": "Complaints route in writing today; Colin’s consent sought for the review to share findings; Colin invited for his own review; Pauline booked in for acute stress follow-up.",
    "sharedPlan": [
     "Complaints details today; significant-event review committed; complaint left as her decision",
     "Colin: post-MI review (NICE NG185 drugs, cardiac rehab, mood, DVLA, activity and sex)",
     "Pauline: active monitoring of acute stress (NICE NG116), sleep advice, trauma-focused CBT if symptoms are clinically important or persist"
    ],
    "safetyNet": [
     "GTN rule: repeat after 5 minutes; 999 if pain persists 5 minutes after the second dose",
     "Follow-up call Friday; earlier contact if her mood worsens"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "MI secondary prevention",
    "s": "Case walkthrough · NICE NG185",
    "href": "../cases/mi-secondary-prevention.html"
   },
   {
    "ic": "💠",
    "t": "MI secondary prevention protocol",
    "s": "Drugs · rehab · monitoring",
    "href": "management/mi-secondary-prevention.html"
   },
   {
    "ic": "📋",
    "t": "PTSD",
    "s": "Case walkthrough · NICE NG116",
    "href": "../cases/ptsd.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA fitness to drive",
    "s": "Driving after MI and PCI",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "Complaint stations are failed through defensiveness, breaches of confidentiality, and stopping at the complaint. The complaint route is the entry ticket; the marks are in the trauma, the guilt and the living patients.",
   "items": [
    {
     "dom": "rto",
     "fail": "Interrupting the opening anger to correct details or explain the colleague’s reasoning.",
     "why": "“Did not allow the patient to express her concerns.” Arguing with anger escalates it.",
     "fix": "Two minutes of listening, then: “You asked how to complain, so let me answer that first.”"
    },
    {
     "dom": "tasks",
     "fail": "Holding back the complaints route (“let’s see if we can sort it out first”).",
     "why": "It reads as obstruction, and she has a right to the route.",
     "fix": "Give it early and completely: practice manager or ICB, timescales, the Ombudsman, the GMC, and details in writing today."
    },
    {
     "dom": "tasks",
     "fail": "Opening Colin’s record and discussing Dr Mensah’s notes with Pauline.",
     "why": "A confidentiality breach, however sympathetic the listener.",
     "fix": "“Colin’s records are his. With his permission the review can share everything with you both.”"
    },
    {
     "dom": "rto",
     "fail": "Missing “I’m not doing tears” and the Gaviscon confession.",
     "why": "“Did not respond to cues.” The trauma and the guilt are the hidden agenda.",
     "fix": "“You started to tell me what you watched. Would you tell me?” Then meet the guilt with honest context."
    },
    {
     "dom": "tasks",
     "fail": "Ending once the complaint is logged, with no plan for Colin or Pauline.",
     "why": "The living clinical work (rehab, mood, acute stress) is where Tasks marks sit.",
     "fix": "Book Colin’s post-MI review and Pauline’s own appointment before the call ends."
    },
    {
     "dom": "gs",
     "fail": "“Ring 999 if he has chest pain” with no GTN rule and no check.",
     "why": "Non-specific safety-netting in a household five days after an MI.",
     "fix": "Give the GTN rule and ask her to repeat it back."
    }
   ]
  }
 },
 "angry-frequent": {
  "stem": {
   "name": "Stephen Cobb",
   "age": "44-year-old man",
   "pmh": [
    "Recurrent chest tightness, palpitations, head pressure and tingling hands — 14 months",
    "No cardiac diagnosis"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "11 contacts this year (4 GPs, 2 ED visits, 1 ambulance call-out). Three normal ECGs; normal bloods twice (troponin, TFT, FBC); normal 24-hour ECG; BP normal. Last note (3 weeks ago): “reassured, discharged, declined talking-therapy suggestion angrily.”",
   "reason": "Telephone. Booking note: “wants cardiology referral — says he’ll go private / make a complaint if refused again.”"
  },
  "knowledge": {
   "guideline": "NICE CG113 — Generalised anxiety disorder and panic disorder in adults",
   "summary": "The angry frequent attender with normal tests needs three things, in order: the legitimate grievance conceded, a clear account of what has been excluded and what would reopen it, and a positive diagnosis with its mechanism, with continuity as the treatment.",
   "points": [
    {
     "h": "Diagnose panic positively",
     "t": "Sudden surges peaking within minutes: palpitations, chest tightness, tingling in both hands, light-headedness, a sense of doom, exhaustion afterwards. Night-time attacks are common and feel the most “cardiac”. Tingling in both hands fits over-breathing; one-sided symptoms point elsewhere."
    },
    {
     "h": "What has been excluded",
     "t": "At 44, with three normal ECGs, a normal 24-hour tape, a normal troponin, normal bloods and BP, and no symptoms on exertion, the dangerous causes have been properly looked for. NICE CG95 (chest pain of recent onset) supports an assessment based on the history and these results; more testing adds false positives and incidental findings."
    },
    {
     "h": "What would reopen the heart question",
     "t": "Chest pain brought on by exertion, collapse (especially during exercise), symptoms at peak effort, a family history of sudden cardiac death at a young age, or new ECG changes. Give him this list: honest targets let a frightened patient stop watching everything."
    },
    {
     "h": "Treatment (NICE CG113)",
     "t": "Offer CBT for panic disorder (typically 7–14 hours in total), or guided self-help based on CBT; NHS Talking Therapies accepts self-referral. If drug treatment is wanted, offer an SSRI licensed for panic disorder. Don’t prescribe benzodiazepines for panic disorder. Cutting down safety behaviours (pulse checks, watch alarms, avoiding the gym) is part of treatment."
    },
    {
     "h": "Repairing the relationship",
     "t": "Concede specific failures (“you were dismissed, and that was wrong”) rather than “sorry you feel that way”. Read the whole record before the call and say so. Answer “I am not mad” directly. Park the referral openly behind a dated plan, rather than refusing it or giving in."
    },
    {
     "h": "Continuity is the intervention",
     "t": "One named GP, a booked review in two weeks, and the agreement that “if this plan changes nothing, we look at everything again together”. That is what makes deferring the referral acceptable. He can still see someone privately; his NHS care continues either way."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and repair",
    "clock": "0–2 min",
    "who": "dr",
    "text": "Mr Cobb, it’s Dr Rahman. Before I say anything about your heart: I’ve read all eleven contacts properly this morning. A doctor sighing down the phone, a six-minute appointment, counselling suggested before anyone examined you that day — you were dismissed, and that was wrong. I’m sorry.",
    "dom": "rto",
    "why": "Concedes the specific grievance first, without defensiveness"
   },
   {
    "who": "pt",
    "text": "(silence) Right. Well. Nobody’s said that before."
   },
   {
    "who": "dr",
    "text": "You’ve asked for a cardiology referral, and we’ll come to that honestly. First, can I hear about the episodes as if I’d never read a word? Then I’ll tell you what I think, and we’ll decide together.",
    "dom": "gs",
    "why": "Sets the agenda and promises to address the request"
   },
   {
    "who": "pt",
    "text": "Fine. But I’m not mad."
   },
   {
    "phase": "Data gathering",
    "clock": "2–5 min",
    "who": "dr",
    "text": "Walk me through one. Where are you, what comes first, what’s the worst moment, and how does it end?",
    "dom": "tasks",
    "why": "Retakes the history as if for the first time"
   },
   {
    "who": "pt",
    "text": "It comes in a wave. Chest goes tight, heart racing, both hands tingle, my head feels full, and I think this is it. It peaks in a few minutes. After, I’m wiped out."
   },
   {
    "who": "dr",
    "text": "When do they happen? At work, during exercise, at night?",
    "dom": "tasks",
    "why": "Establishes the timing pattern and exertional link"
   },
   {
    "who": "pt",
    "text": "Worst at two to four in the morning, and Sunday nights. Never on the warehouse floor. I’ve stopped the gym in case it happens on the treadmill."
   },
   {
    "who": "dr",
    "text": "Any blackouts? Pain that comes on when you exert yourself? Anyone in the family die suddenly young?",
    "dom": "tasks",
    "why": "Screens the cardiac red flags directly"
   },
   {
    "who": "pt",
    "text": "No. None of that."
   },
   {
    "who": "dr",
    "text": "When did this all start? Was anything going on around then?",
    "dom": "tasks",
    "why": "Maps the timeline"
   },
   {
    "who": "pt",
    "text": "Fourteen months ago. There were redundancies at work. I kept my job. My mate Dave didn’t."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "What happened to Dave?",
    "dom": "rto",
    "why": "Follows the cue towards the hidden agenda"
   },
   {
    "who": "pt",
    "text": "Heart attack in October. Forty-four. Same age as me. I carried his coffin."
   },
   {
    "who": "dr",
    "text": "I’m so sorry. I noticed your first 999 call was eleven days after the funeral. What do you think is going on with your heart?",
    "dom": "rto",
    "why": "Maps the timeline and elicits his idea, letting him make the link"
   },
   {
    "who": "pt",
    "text": "Something the tests keep missing. Nobody catches it in the act. And I check my pulse thirty, forty times a day. My watch alarms at night. My wife’s past sympathy."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "Let me be straight about your heart. Three ECGs, a 24-hour tape, a troponin during pain, normal blood pressure, no symptoms on exertion: at 44 that’s a properly checked heart. More tests wouldn’t make you safer. They’d turn up harmless findings to chase and keep you frightened.",
    "dom": "tasks",
    "why": "States the exclusion honestly, with the harm of over-testing"
   },
   {
    "who": "pt",
    "text": "So what is it then? Because it’s real."
   },
   {
    "who": "dr",
    "text": "It is real. I think these are panic attacks. Adrenaline surges, you breathe faster without noticing, and that lowers the carbon dioxide in your blood. That gives the tingling in both hands and the light head. The chest muscles tighten, and your brain reads all of it as dying. Every symptom has a mechanism. You’re not mad, Stephen. Your alarm system is stuck on.",
    "dom": "tasks",
    "why": "Positive diagnosis with mechanism; answers “I am not mad”"
   },
   {
    "who": "pt",
    "text": "(pause) Eleven days after the funeral."
   },
   {
    "who": "dr",
    "text": "Yes. I’m not saying “it’s grief, off you go”. A body can stand guard over a heart it has decided is next. Does that fit anything for you?",
    "dom": "rto",
    "why": "Offers the connection as physiology and lets him make it"
   },
   {
    "who": "pt",
    "text": "I’ve been waiting for mine to stop. Ever since."
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "Here’s what I suggest instead of a referral today. One: a slow-breathing technique, which I’ll teach you now — breathe out for longer than you breathe in. It reverses the mechanism, and you can use it at 2am. Two: a panic course with NHS Talking Therapies. It’s skills training for the alarm, not tea and sympathy. Three: we cut down the pulse checks and the watch alarms, because they keep the alarm rehearsing.",
    "dom": "tasks",
    "why": "Plan fitted to the diagnosis: a skill now, CBT reframed, safety behaviours"
   },
   {
    "who": "pt",
    "text": "And if it doesn’t work, I get my referral?"
   },
   {
    "who": "dr",
    "text": "Four: you see me, not a stranger, in two weeks. I’ll book it now. If the plan has changed nothing by then, everything goes back on the table, together. And you’re free to see someone privately; your care here doesn’t change.",
    "dom": "rto",
    "why": "Parks the referral openly with continuity"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "What would change my mind straight away: chest pain that comes on with exertion, blacking out, or symptoms at the peak of exercise. Any of those, ring the same day. Pain that won’t settle, with sweating or breathlessness, is 999. What will you do at 2am tonight if it starts?",
    "dom": "gs",
    "why": "Honest re-entry criteria and teach-back of the plan"
   },
   {
    "who": "pt",
    "text": "Breathe out longer than in. Don’t check the watch. Ring if it’s ever on exertion."
   },
   {
    "who": "dr",
    "text": "Exactly. Two weeks today, with me.",
    "dom": "rto",
    "why": "Confirms continuity"
   },
   {
    "who": "pt",
    "text": "…Thanks. You’re the first one who actually listened."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Conceded the grievance first, then took the episodes from the top as if hearing them for the first time.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Redundancy, the next restructure, Dave’s death, sleeping apart, stopping the gym, strain on his marriage.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "“I know what’s written about me”, the 2am and never-mid-shift pattern, and “I am not mad”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a missed heart problem); concern (Dave’s coffin, being written off); expectation (a cardiology referral today).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Reviewed prior tests explicitly; judged further cardiac testing unnecessary and explained why.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Panic disorder vs arrhythmia or ischaemia; thyroid (checked); caffeine or alcohol; low mood.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about exertional pain, syncope and family history of sudden death; stated what would reopen assessment.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Positive diagnosis of panic attacks with a mechanism that explains each symptom.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Breathing skill taught in the call, CBT for panic reframed (NICE CG113), safety-behaviour taper, SSRI option, no benzodiazepine.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Grief, work insecurity, sleep, caffeine and exercise avoidance addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Re-entry criteria named; same-doctor review in 2 weeks booked; the referral question left open.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Stephen Cobb",
    "age": "44 years · male",
    "pmh": [
     "Recurrent chest tightness and palpitations (14 months) — no cardiac diagnosis"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "11 contacts this year (4 GPs, 2 ED, 1 ambulance). ECG ×3, 24-hour tape, troponin, TFT, FBC — all normal. Last note: “reassured, discharged, declined talking therapy angrily.”",
    "reason": "⚠ Telephone, self-listed “urgent”: wants cardiology referral or will go private and complain."
   },
   "timeMap": [
    {
     "t": "0–2",
     "h": "Concede first",
     "d": "Name the specific failures (the sigh, six minutes, counselling before examination) and say you’ve read the whole record. Nothing new lands until this has."
    },
    {
     "t": "2–5",
     "h": "Retake the history",
     "d": "Full anatomy of an episode, timing (2am, Sundays, never mid-shift), cardiac red flags, and the timeline: redundancies, Dave."
    },
    {
     "t": "5–7",
     "h": "ICE and Dave",
     "d": "What happened to Dave? The first 999 call eleven days after the funeral. His idea: something the tests keep missing."
    },
    {
     "t": "7–10",
     "h": "Explain and plan",
     "d": "Honest exclusion, then a positive diagnosis with mechanism. “You’re not mad.” Breathing taught now, CBT for panic, fewer pulse checks, same-doctor review."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "What would reopen the heart question. 999 triggers. “What will you do at 2am tonight?”"
    }
   ],
   "wordPics": {
    "fail": "Refers to end the call, or refuses flatly and repeats “all your tests are normal”; defends colleagues; never asks about the timeline or Dave; offers “counselling” again with no explanation; no named follow-up.",
    "pass": "Acknowledges his frustration, retakes the history, explains that serious heart disease has been excluded, diagnoses panic attacks, offers CBT, and books a review with a safety-net.",
    "exc": "All of the above, plus: concedes the specific failures first; answers “I am not mad” directly; explains the mechanism symptom by symptom; lets him connect Dave to the timeline; teaches a skill during the call; parks the referral openly behind a dated same-doctor review; gives honest re-entry criteria so he can stop watching everything."
   },
   "avoid": [
    {
     "dont": "“All your tests are normal, so there’s nothing wrong with your heart.”",
     "instead": "“Your heart has been properly checked. Here is what I think your symptoms ARE, and how they happen.”",
     "why": "A diagnosis by exclusion leaves him with frightening symptoms and no explanation."
    },
    {
     "dont": "“I think this is probably anxiety — have you considered counselling?”",
     "instead": "“These are panic attacks: a real body reaction with a mechanism. The treatment is skills training for the alarm.”",
     "why": "That is word for word what he was told before, and it confirms he’s been written off."
    },
    {
     "dont": "“Fine, I’ll refer you to cardiology if that’s what you want.”",
     "instead": "“More tests would make you more frightened, not safer. Here’s what would change my mind, and we review in two weeks.”",
     "why": "Referring to end the call reinforces the belief that something has been missed."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work and loss",
     "t": "Survived a redundancy round, another restructure announced, and his friend and colleague died at 44. Job insecurity and grief drive his symptoms."
    },
    {
     "h": "Home",
     "t": "Sleeping in the spare room, stopped the gym, his wife “past sympathy”. Safety behaviours are costing him his relationships and fitness."
    }
   ],
   "legal": [
    {
     "h": "Complaints",
     "t": "He has the right to complain (practice or ICB, then the Parliamentary and Health Service Ombudsman). Saying so openly takes the heat out of the threat."
    },
    {
     "h": "Private care",
     "t": "He can see a cardiologist privately. His NHS care continues, and the GP isn’t obliged to act on private recommendations they judge inappropriate. Explain this neutrally, not as a threat."
    }
   ],
   "professional": [
    {
     "h": "Diagnostic overshadowing",
     "t": "GMC Good Medical Practice: assess each presentation on its merits. Reading the notes instead of the patient is how real disease is missed in frequent attenders, and how trust is lost."
    },
    {
     "h": "Stewardship and honesty",
     "t": "Declining a low-value referral is legitimate when explained with the reasons and a way to revisit it. It shouldn’t be a power struggle."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "NHS Talking Therapies (self-referral) for CBT for panic; Cruse Bereavement Support for grief; occupational health or an employee assistance programme through work, if available."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Chest pain on exertion or at peak effort",
     "Syncope, especially during exercise",
     "Family history of sudden cardiac death at a young age; new ECG changes"
    ],
    "psychosocial": [
     "Redundancies at work; the next restructure announced in January",
     "Dave: same age and job, died of an MI; Stephen carried the coffin",
     "Pulse checks 30–40 times a day, watch alarms, no gym, sleeping apart"
    ],
    "ice": [
     "Idea: a heart problem the tests keep missing",
     "Concern: being written off as “mad”; waiting for his heart to stop like Dave’s",
     "Expectation: cardiology referral today, or private care and a complaint"
    ]
   },
   "diagnosis": "Panic attacks, likely panic disorder, triggered around a friend’s sudden cardiac death and job insecurity, with safety behaviours keeping it going. Serious cardiac disease has been reasonably excluded.",
   "diagnosisLay": "“Your body’s alarm system is stuck on. Adrenaline makes your heart race, you breathe faster without noticing, and that causes the tingling hands, the light head and the tight chest. It’s real, it has a mechanism, and it can be treated.”",
   "management": {
    "reflectIce": "“You’ve been worried your heart would stop like Dave’s, and every time you were told the tests were normal it felt like nobody was looking. I have looked, and I can tell you what this is.”",
    "psychosocial": "Concede the dismissive care; name one doctor for continuity; involve his wife if he wishes; bereavement support for Dave; work pressures acknowledged.",
    "sharedPlan": [
     "Slow-breathing technique taught during the call for use tonight",
     "CBT for panic disorder via NHS Talking Therapies (NICE CG113); SSRI if he prefers medication; no benzodiazepines",
     "Gradually cut pulse checks and watch alarms; graded return to the gym; review caffeine and sleep"
    ],
    "safetyNet": [
     "Same-day contact for exertional pain, syncope or symptoms at peak effort; 999 for pain at rest with sweating or breathlessness",
     "Same-doctor review in 2 weeks; everything reconsidered together if nothing has changed"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Anxiety disorders protocol",
    "s": "Panic disorder · NICE CG113",
    "href": "management/anxiety.html"
   },
   {
    "ic": "🗺️",
    "t": "Medically unexplained symptoms",
    "s": "Visual algorithm · positive explanation",
    "href": "algorithms/medically-unexplained-symptoms.html"
   },
   {
    "ic": "🗺️",
    "t": "Palpitations",
    "s": "Visual algorithm · red flags",
    "href": "algorithms/palpitations.html"
   },
   {
    "ic": "📋",
    "t": "Chest pain",
    "s": "Case walkthrough · NICE CG95",
    "href": "../cases/chest-pain.html"
   }
  ],
  "pitfalls": {
   "intro": "The frequent attender station is failed by repeating what the previous ten contacts did: reassurance by exclusion, “counselling”, and either capitulation or refusal on the referral. The marks are for repairing the relationship and giving a positive diagnosis.",
   "items": [
    {
     "dom": "rto",
     "fail": "Opening with “I can see you’ve been seen many times and everything’s been normal.”",
     "why": "It confirms his belief that doctors read his notes, not him. “Did not establish rapport.”",
     "fix": "Concede the specific failures first, and say you’ve read the whole record."
    },
    {
     "dom": "tasks",
     "fail": "“Your tests are normal,” with no explanation of what the symptoms are.",
     "why": "A diagnosis by exclusion is not a diagnosis. Tasks marks need a positive working diagnosis.",
     "fix": "Name panic attacks and explain the mechanism symptom by symptom."
    },
    {
     "dom": "tasks",
     "fail": "Referring to cardiology to end the conflict.",
     "why": "Low-value testing reinforces illness belief and risks incidental findings. “Plan not in line with good practice.”",
     "fix": "Explain why more tests won’t help, give the re-entry criteria, and date a review."
    },
    {
     "dom": "rto",
     "fail": "Missing Dave, or telling him “it’s just grief”.",
     "why": "The first misses the hidden agenda; the second dismisses him again.",
     "fix": "Map the timeline out loud and let him make the connection, framed as a body standing guard."
    },
    {
     "dom": "tasks",
     "fail": "Offering “counselling” again, unexplained, or prescribing a benzodiazepine.",
     "why": "He has already refused the first. NICE CG113 advises against benzodiazepines in panic disorder.",
     "fix": "Present CBT as skills training for panic, teach a breathing technique during the call, and offer an SSRI if he wants medication."
    },
    {
     "dom": "gs",
     "fail": "“See whoever’s free if it happens again.”",
     "why": "Discontinuity is how he got to eleven contacts.",
     "fix": "Book a review with yourself in two weeks before the call ends."
    }
   ]
  }
 },
 "back-pain-myeloma": {
  "stem": {
   "name": "Gordon Pryce",
   "age": "72-year-old man",
   "pmh": [
    "Mechanical low back pain (lumbago) in the past",
    "Widower — wife Eileen died of metastatic cancer three years ago"
   ],
   "meds": [
    "No regular prescribed medication",
    "Over-the-counter ibuprofen and paracetamol (patient-reported)"
   ],
   "allergy": "No known drug allergies",
   "recent": "Locum review last week for three months of back pain. Bloods: Hb 108 g/L, ESR 88 mm/h, adjusted calcium 2.68 mmol/L, creatinine 128 µmol/L (eGFR 48; 72 a year ago).",
   "reason": "Telephone call-back to discuss blood results flagged for review."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) — myeloma · NICE NG234 (2023) spinal metastases and MSCC · NICE NG253 sepsis",
   "summary": "Persistent back pain at 60+ with anaemia, raised ESR, raised calcium or renal decline needs the NICE NG12 (updated April 2026) myeloma panel now. Screen cord compression and stop NSAIDs on the same call.",
   "points": [
    {
     "h": "Recognise the pattern",
     "t": "Constant, night-dominant back pain unlike his old lumbago, with Hb 108, ESR 88, adjusted calcium 2.68 and eGFR 72 → 48. Myeloma’s CRAB features (calcium, renal, anaemia, bone) are all present."
    },
    {
     "h": "NICE NG12 (updated April 2026) myeloma tests",
     "t": "NICE NG12 (updated April 2026), recs 1.10.4–1.10.5: aged 60 and over with persistent bone pain, particularly back pain, or unexplained fracture — offer FBC, calcium, ESR or plasma viscosity, serum protein electrophoresis and serum free light chains (urine Bence Jones if free light chains are unavailable). Refer on a suspected cancer pathway if results suggest myeloma."
    },
    {
     "h": "Cord compression",
     "t": "Leg weakness, saddle numbness or sphincter change needs emergency assessment. NICE NG234 (2023): MRI within 24 hours for suspected MSCC with neurological symptoms or signs."
    },
    {
     "h": "Calcium and kidneys",
     "t": "Adjusted calcium 2.68 with thirst: repeat promptly and assess face to face; confusion, vomiting, drowsiness, dehydration or a rising creatinine needs same-day assessment. Stop NSAIDs in renal impairment (BNF) and encourage fluids."
    },
    {
     "h": "Analgesia",
     "t": "Regular paracetamol; consider a short course of a weak opioid with a laxative in an older adult with reduced eGFR, doses per BNF; review within days."
    },
    {
     "h": "Infection risk",
     "t": "Myeloma suppresses normal antibodies; a six-week chest infection fits. Safety-net fever, rigors and feeling very unwell as possible sepsis (NICE NG253)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Good evening Mr Pryce, it’s Dr Lee from the surgery. Can I just check I’m speaking to Gordon Pryce, and that you’re somewhere you can talk?",
    "dom": "gs",
    "why": "Confirms identity and privacy on the telephone"
   },
   {
    "who": "pt",
    "text": "You are, and I can. Before you start, I’d rather have it straight, whatever it is. No flannel. So what do the tests tell us?"
   },
   {
    "who": "dr",
    "text": "Straight it is. I’ll tell you what the bloods show, what I’m concerned about and exactly what happens next. First I need two or three minutes on how you are, because it changes what I do tonight. All right?",
    "dom": "rto",
    "why": "Honours his instruction and sets a clear structure"
   },
   {
    "who": "pt",
    "text": "Fair enough."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about the back pain — where it is and what it’s like at night.",
    "dom": "tasks",
    "why": "Open question focused on non-mechanical features"
   },
   {
    "who": "pt",
    "text": "Middle to low back, constant. Worse at night. I sleep in the armchair now. It’s nothing like my old lumbago — lying down doesn’t help."
   },
   {
    "who": "dr",
    "text": "Any weakness or numbness in your legs, numbness between your legs or around your bottom, or any change in your waterworks or bowels?",
    "dom": "tasks",
    "why": "Screens for spinal cord compression tonight"
   },
   {
    "who": "pt",
    "text": "No. Waterworks a bit slower, but that’s been years. Bowels normal."
   },
   {
    "who": "dr",
    "text": "Have you been more tired, thirsty, lost weight, or had infections that hung around?",
    "dom": "tasks",
    "why": "Systemic features of myeloma and hypercalcaemia"
   },
   {
    "who": "pt",
    "text": "More tired than I let on. A stone gone this year without trying. Thirsty lately. And a chest infection in the winter that took six weeks to shift."
   },
   {
    "who": "dr",
    "text": "Any confusion, being sick, or feeling drowsy in the day? And what are you taking for the pain?",
    "dom": "tasks",
    "why": "Screens symptomatic hypercalcaemia and self-medication"
   },
   {
    "who": "pt",
    "text": "No confusion. Ibuprofen three or four times a day from the supermarket, and paracetamol. I know I shouldn’t really."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Thank you. The results show three things together: you’re a little anaemic, an inflammation marker is very high, and your kidneys are working less well than a year ago. With night-time back pain, I have to rule out a blood condition called myeloma, properly and fast. That’s the headline.",
    "dom": "rto",
    "why": "Delivers the finding straight, as he asked, with a warning shot built in"
   },
   {
    "who": "pt",
    "text": "(Long exhale.) Eileen’s started in her back, you know."
   },
   {
    "who": "dr",
    "text": "I know, it’s in your notes. I’m sorry. Can I ask what you’ve been thinking these three months?",
    "dom": "rto",
    "why": "Responds to the cue and explores his idea"
   },
   {
    "who": "pt",
    "text": "Same as her. I’ve had a good sort-out — garage, paperwork, the files she kept. Got things in order."
   },
   {
    "who": "dr",
    "text": "Gordon, the garage and the paperwork — I think you decided months ago how this ends, and you’ve been getting ready for it instead of ringing us. Am I close?",
    "dom": "rto",
    "why": "Names the hidden agenda without flinching"
   },
   {
    "who": "pt",
    "text": "(Pause.) Close enough. I watched her go. The long bit in the middle. I’m not doing that."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s the honest difference. What you watched was a cancer found at the end of its story. If this is myeloma, we’d be finding it near the start, and it’s a condition people are treated for and live with, often for years. I can’t promise outcomes. I can tell you it isn’t her script, and I don’t know yet that it’s myeloma at all.",
    "dom": "rto",
    "why": "Answers the real fear with honest asymmetry, not soothing"
   },
   {
    "who": "pt",
    "text": "Right. I can live with ‘don’t know yet’ if it’s the truth."
   },
   {
    "who": "dr",
    "text": "It is. The next step is one set of bloods that look for myeloma’s fingerprint — a protein test and a light-chain test — plus a repeat of your calcium and kidneys. I want those tomorrow morning. If they point to myeloma, you’re referred to the blood specialists on the urgent suspected cancer pathway.",
    "dom": "tasks",
    "why": "Completes the NICE NG12 (updated April 2026) myeloma panel promptly and names the referral route"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The ibuprofen stops tonight. With your kidneys under strain it’s doing damage, and if this is myeloma it’s the worst tablet in the house. I’ll prescribe regular paracetamol and a short course of a stronger painkiller with a laxative, and review it when I see you.",
    "dom": "tasks",
    "why": "Stops the NSAID with the reason and replaces analgesia"
   },
   {
    "who": "pt",
    "text": "Fine by me. It wasn’t touching it anyway."
   },
   {
    "who": "dr",
    "text": "Drink plenty of water, too — it helps the calcium and the kidneys. I’d also like to see you when you come in for bloods, to examine your back and check you over. Who’s around you these days, now Eileen’s gone?",
    "dom": "rto",
    "why": "Face-to-face review and checks his support"
   },
   {
    "who": "pt",
    "text": "Nobody much since Eileen. I keep myself to myself."
   },
   {
    "who": "dr",
    "text": "Is there anyone — family, a friend — you’d want told this week? You sorted the garage alone. You don’t need to sit in a specialist clinic alone as well.",
    "dom": "rto",
    "why": "Addresses isolation and support without pressure"
   },
   {
    "who": "pt",
    "text": "There’s family I could ring. They’ll only fuss. But I’ll think on it."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Tonight’s rules, straight: weakness or numbness in the legs, numbness around the saddle area, trouble passing urine or controlling your bowels — that’s 999. Same for confusion, repeated vomiting, or a fever with shivering and feeling very unwell. The bloods are tomorrow, and I ring you with the results. You don’t chase anyone.",
    "dom": "gs",
    "why": "Explicit 999 triggers for cord compression, hypercalcaemia and sepsis; named follow-up"
   },
   {
    "who": "pt",
    "text": "Understood. Thank you for not dressing it up."
   },
   {
    "who": "dr",
    "text": "Tell me back what happens next, so I know I’ve been clear.",
    "dom": "rto",
    "why": "Teach-back to confirm understanding"
   },
   {
    "who": "pt",
    "text": "No ibuprofen. Bloods and see you tomorrow. 999 if my legs or waterworks go, or I get muddled. You ring me. And I think about who comes with me."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Confirmed identity; accepted his “straight” instruction and structured the call around it.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Bereavement, living alone, little support, three months of self-management with supermarket ibuprofen.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Heard “Eileen’s started in her back” and “got things in order”, and explored what they meant.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (same as Eileen), concern (the drawn-out middle), expectation (straight answers).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Serum protein electrophoresis and serum free light chains (NICE NG12 (updated April 2026)), repeat bone profile and U&E, FBC and film; face-to-face examination including neurology.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Myeloma vs metastatic bone disease vs NSAID-related kidney injury; mechanical pain excluded by history.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened cord compression, symptomatic hypercalcaemia and sepsis on the same call.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Said plainly that myeloma must be excluded, and that it is not yet known.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Bloods tomorrow, suspected cancer pathway referral to haematology if results suggest myeloma, ibuprofen stopped, analgesia replaced.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Renal protection (stop NSAID, fluids), laxative with opioid, who could support him at appointments.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 triggers named; seen tomorrow; GP rings with results on a named day.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Gordon Pryce",
    "age": "72 years · male",
    "pmh": [
     "Lumbago (historical)",
     "Retired postman, widower"
    ],
    "meds": [
     "No repeat prescriptions",
     "OTC ibuprofen and paracetamol (patient-reported)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Locum bloods: Hb 108, ESR 88, adjusted Ca 2.68, creatinine 128, eGFR 48 (72 last year). No electrophoresis or light chains sent. Note: wife died of metastatic cancer 3 years ago.",
    "reason": "Telephone call-back with results. “I’d rather have it straight.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Identity and instruction",
     "d": "Confirm identity and privacy. He tells you how to consult: straight. Agree the structure out loud."
    },
    {
     "t": "1–4",
     "h": "Targeted history",
     "d": "Night pain, neurology and sphincters, systemic symptoms (weight, thirst, infections), confusion or vomiting, ibuprofen use."
    },
    {
     "t": "4–6",
     "h": "Headline and hidden agenda",
     "d": "Give the headline, then hear Eileen and the garage. Name that he has been preparing to die."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Honest difference from Eileen’s story. Myeloma bloods tomorrow, referral route named, ibuprofen stopped, analgesia replaced, support identified."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 for legs, saddle, sphincters, confusion, vomiting, fever with rigors. Named results call. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Treats it as mechanical back pain; suggests physiotherapy or more ibuprofen; does not send myeloma tests; no cord compression screen; soothes him when he asked for straight talk; misses the garage cue.",
    "pass": "Recognises the myeloma pattern, sends electrophoresis and light chains, stops ibuprofen, screens cord compression and hypercalcaemia, and safety-nets with a follow-up.",
    "exc": "All of the above, plus: consults exactly as he asked; names the “getting things in order” cue; contrasts Eileen’s late diagnosis honestly without promising outcomes; asks who could support him; dated plan with teach-back."
   },
   "avoid": [
    {
     "dont": "“Try not to worry, it’s probably just wear and tear.”",
     "instead": "“Straight, as you asked: these results need a blood condition called myeloma ruling out, fast.”",
     "why": "False reassurance breaks his one instruction and misses the diagnosis."
    },
    {
     "dont": "“Carry on with the ibuprofen for now until the tests are back.”",
     "instead": "“The ibuprofen stops tonight — it’s harming your kidneys — and I’m giving you something better.”",
     "why": "NSAIDs with falling eGFR and possible myeloma kidney cause active harm."
    },
    {
     "dont": "“It’s nothing like what happened to your wife.”",
     "instead": "“What you watched was found at the end. If this is myeloma, we’re finding it near the start.”",
     "why": "An unprovable promise loses his trust; an honest contrast keeps it."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Bereavement and isolation",
     "t": "A widower living alone who watched his wife’s late cancer diagnosis. Fear has delayed help-seeking; support at clinic visits needs planning."
    },
    {
     "h": "Self-medication",
     "t": "Supermarket ibuprofen “round the clock” for three months — ask about all over-the-counter medicines in older adults."
    }
   ],
   "legal": [
    {
     "h": "Future planning",
     "t": "He is already “putting things in order”. If he wishes, signpost a Lasting Power of Attorney (Office of the Public Guardian) and advance care planning — as choices, not as a verdict."
    }
   ],
   "professional": [
    {
     "h": "Test results and safety",
     "t": "Abnormal results flagged by a locum need a named clinician to own them and close the loop (GMC Good Medical Practice 2024). Document who rings him and when."
    },
    {
     "h": "Honest communication",
     "t": "Share uncertainty truthfully and avoid false reassurance; he has asked for directness and is entitled to it (GMC Decision making and consent, 2020)."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Myeloma UK information and helpline if the diagnosis is confirmed; Cruse Bereavement Support; Age UK befriending."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Aged 60+ with persistent bone pain, particularly back pain — NICE NG12 (updated April 2026) myeloma tests",
     "Leg weakness, saddle numbness, bladder or bowel change — suspected spinal cord compression, 999 or same-day (NICE NG234)",
     "Confusion, vomiting, drowsiness or dehydration with raised calcium; fever or rigors after recurrent infection — same-day"
    ],
    "psychosocial": [
     "Lives alone since Eileen’s death; little support",
     "Three months of “getting things in order” instead of seeking help",
     "Self-medicating with NSAIDs"
    ],
    "ice": [
     "Idea: “It’s what Eileen had.”",
     "Concern: the long, drawn-out middle he watched her go through",
     "Expectation: straight answers and whether it’s worth fighting"
    ]
   },
   "diagnosis": "Suspected myeloma: persistent non-mechanical back pain at 72 with anaemia, very raised ESR, mildly raised calcium and falling eGFR. NSAID use is adding kidney harm. Needs serum protein electrophoresis and free light chains now.",
   "diagnosisLay": "“Myeloma is a condition of the bone marrow, where one type of blood cell grows too much. It can cause back pain, tiredness, thirst and strain on the kidneys — which is exactly the picture I’m seeing. A blood test for its fingerprint tells us if it’s there.”",
   "management": {
    "reflectIce": "“You’ve been preparing for Eileen’s story. I don’t know yet what this is, but if it’s myeloma, it’s a different condition found at a different point.”",
    "psychosocial": "Encourage him to tell someone close and bring them to haematology; check how he’s coping alone; offer bereavement support.",
    "sharedPlan": [
     "Serum protein electrophoresis and serum free light chains, repeat bone profile, U&E, FBC and film tomorrow (NICE NG12 (updated April 2026))",
     "Suspected cancer pathway referral to haematology if results suggest myeloma",
     "Stop ibuprofen; regular paracetamol and a short weak opioid with laxative, doses per BNF; fluids"
    ],
    "safetyNet": [
     "999 for leg weakness, saddle numbness, bladder or bowel change, confusion, vomiting, fever with rigors",
     "Face-to-face review with bloods; GP phones with results on a named day"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Back pain",
    "s": "Case walkthrough · red flags",
    "href": "../cases/back-pain.html"
   },
   {
    "ic": "🗺️",
    "t": "Back pain pathway",
    "s": "Visual algorithm · cord compression",
    "href": "algorithms/back-pain.html"
   },
   {
    "ic": "📋",
    "t": "Haematological cancers",
    "s": "Case walkthrough · NICE NG12 (updated April 2026)",
    "href": "../cases/haematological-cancers.html"
   },
   {
    "ic": "💠",
    "t": "Haematological cancers protocol",
    "s": "Myeloma tests · referral",
    "href": "management/haematological-cancers.html"
   },
   {
    "ic": "🗺️",
    "t": "Abnormal bone profile",
    "s": "Visual algorithm · raised calcium",
    "href": "algorithms/abnormal-bone-profile.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by treating it as another back pain call, and by soothing a man who asked not to be soothed. Both mistakes are fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Labelling it mechanical back pain and offering physiotherapy or stronger NSAIDs.",
     "why": "“Fails to recognise a serious condition.” Night pain at 72 with anaemia, raised ESR, calcium and falling eGFR is myeloma until excluded.",
     "fix": "State the pattern and send serum protein electrophoresis and free light chains (NICE NG12 (updated April 2026))."
    },
    {
     "dom": "tasks",
     "fail": "Sending electrophoresis but forgetting to screen cord compression and hypercalcaemia.",
     "why": "“Does not gather sufficient information to make a safe assessment.” Tonight’s emergencies must be screened on this call.",
     "fix": "Ask about legs, saddle, sphincters, confusion, vomiting and drowsiness, then name them as 999 triggers."
    },
    {
     "dom": "tasks",
     "fail": "Leaving the ibuprofen running until the results are back.",
     "why": "NSAIDs with falling eGFR, and possibly myeloma kidney, cause further harm.",
     "fix": "Stop it tonight, explain why, and replace it with a proper analgesic plan."
    },
    {
     "dom": "rto",
     "fail": "“Try not to worry, it’s probably nothing like your wife’s illness.”",
     "why": "“Does not respond to the patient’s agenda.” He asked for straight talk; unprovable reassurance breaks trust.",
     "fix": "Give the honest contrast: found late versus found near the start, with no promises."
    },
    {
     "dom": "rto",
     "fail": "Missing “got things in order” as small talk.",
     "why": "“Does not identify or respond to the patient’s cues.” It is the hidden agenda.",
     "fix": "“The garage and the paperwork — were you getting ready for bad news?”"
    },
    {
     "dom": "gs",
     "fail": "Ending with “we’ll be in touch” and no date.",
     "why": "Unclear follow-up is a common failing statement, and he will not chase.",
     "fix": "“Bloods and review tomorrow. I ring you with the results. 999 if your legs, waterworks or thinking change.”"
    }
   ]
  }
 },
 "bruising-da": {
  "stem": {
   "name": "Kayleigh Morton",
   "age": "31-year-old woman",
   "pmh": [
    "No significant past medical history",
    "A&E attendance 4 months ago: facial bruising, “fell against a door frame”"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Three appointments booked then cancelled within hours this year. Online midwife self-referral started 3 weeks ago (pharmacy pregnancy test positive) and not completed.",
   "reason": "Video appointment booked for “tiredness and headaches”."
  },
  "knowledge": {
   "guideline": "NICE PH50 (2014) domestic violence and abuse · NICE QS116 (2016) · NICE NG201 (2021) antenatal care · Domestic Abuse Act 2021",
   "summary": "Headaches and tiredness can be the ticket to disclosure. Make it safe to talk, ask directly, believe, assess risk, and offer help the patient controls — with the honest limit that pregnancy brings.",
   "points": [
    {
     "h": "Safe to talk",
     "t": "On video or phone, confirm the patient is alone before asking about abuse, and agree a code phrase to end or switch the conversation. Never raise abuse if the partner may be present."
    },
    {
     "h": "Ask directly",
     "t": "NICE PH50 and QS116: staff should be trained to ask about domestic abuse in a private discussion and respond appropriately. Clues here: repeated cancellations, an implausible injury explanation, long sleeves, control of her phone and money."
    },
    {
     "h": "High-risk markers",
     "t": "Non-fatal strangulation, escalation and pregnancy are high-risk markers on the SafeLives DASH risk checklist. Non-fatal strangulation is a specific offence under the Domestic Abuse Act 2021."
    },
    {
     "h": "Refer and plan",
     "t": "Offer IDVA referral with consent; National Domestic Abuse Helpline 0808 2000 247. High-risk cases go to MARAC. Antenatal booking with a midwife who knows; a pre-birth referral to children’s social care may be needed (Working Together to Safeguard Children 2026)."
    },
    {
     "h": "Headache in pregnancy",
     "t": "Tension-type headache (NICE CG150): simple analgesia; in pregnancy paracetamol is preferred and NSAIDs are avoided, doses per BNF. Folic acid per BNF; book antenatal care promptly."
    },
    {
     "h": "Safety-net without a trail",
     "t": "999, and 55 if unable to speak (Silent Solution). No letters, texts or calls to the home; secure, coded documentation; follow-up under a routine reason."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and safety to talk",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Kayleigh, I’m Dr Lee — yes, it’s working, I can hear you fine. Before we start, is it all right to talk where you are? Is anyone else in the room or likely to walk in?",
    "dom": "tasks",
    "why": "Checks it is safe to talk before anything else on video"
   },
   {
    "who": "pt",
    "text": "(Glances off-screen.) Just me. Dean’s back soon though. He doesn’t like me wasting doctors’ time. It’s just headaches and I’m tired all the time."
   },
   {
    "who": "dr",
    "text": "You’re not wasting my time. If anyone comes in, say “about my prescription” and I’ll switch straight to headaches. You’re in charge of this call. Tell me about the headaches.",
    "dom": "rto",
    "why": "Agrees a code phrase and hands her control"
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "pt",
    "text": "Across my forehead, like a band. Months. Worse when things are tense at home."
   },
   {
    "who": "dr",
    "text": "Any headaches that wake you, come on suddenly and severely, or come with weakness, vision change or being sick? Any blow to the head?",
    "dom": "tasks",
    "why": "Excludes headache red flags, including head injury"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "You said it’s worse when things are tense at home. Can you tell me a bit about home?",
    "dom": "rto",
    "why": "Follows her own cue rather than a checklist"
   },
   {
    "who": "pt",
    "text": "It’s… Dean likes things a certain way. He checks my phone, sorts the money. He doesn’t like my sister coming round."
   },
   {
    "who": "dr",
    "text": "Kayleigh, I ask lots of people this, and I’m asking because of what you’ve just said, not to catch you out. Are you ever frightened of Dean? Has he ever hurt you?",
    "dom": "tasks",
    "why": "Asks directly and gently once it is safe"
   },
   {
    "who": "pt",
    "text": "(Long pause.) He grabs me. Shakes me. Last month he held me against the wall. By my throat. He’s sorry after. It’s not all the time."
   },
   {
    "phase": "Believe and assess",
    "clock": "4–7 min",
    "who": "dr",
    "text": "Thank you for telling me. I believe you. And none of this is your fault — none of it.",
    "dom": "rto",
    "why": "Believes out loud and removes blame"
   },
   {
    "who": "pt",
    "text": "(Crying.) The door frame at A&E. That was him. And my arms — I’ve got marks under these sleeves."
   },
   {
    "who": "dr",
    "text": "I’m so sorry. I need to be honest about one thing: being held by the throat is the sign we take most seriously of all, because it’s the strongest warning that things can become very dangerous. It doesn’t mean police cars tonight. It means we plan properly now. Is it getting worse, or more often?",
    "dom": "tasks",
    "why": "Names non-fatal strangulation as a high-risk marker and assesses escalation"
   },
   {
    "who": "pt",
    "text": "It’s got worse this year. And… I’m pregnant. About twelve weeks. He doesn’t know. Is it true stress and being shaken about can hurt a baby?"
   },
   {
    "who": "dr",
    "text": "That’s a really important question. The kindest true answer: the baby is most likely fine right now. The biggest risk to both of you isn’t stress — it’s this carrying on, because it often gets worse in pregnancy. Any tummy pain or bleeding since?",
    "dom": "rto",
    "why": "Answers the question she came with honestly, and checks obstetric symptoms"
   },
   {
    "who": "pt",
    "text": "No. No bleeding."
   },
   {
    "phase": "Safety plan",
    "clock": "7–10 min",
    "who": "dr",
    "text": "Is it safe for you to be at home tonight? If it wasn’t, where could you go?",
    "dom": "tasks",
    "why": "Assesses immediate safety concretely"
   },
   {
    "who": "pt",
    "text": "I think tonight’s okay. My sister in Chesterfield. She’d have me. I just don’t want police at the door. I don’t want it all taken out of my hands."
   },
   {
    "who": "dr",
    "text": "You stay in control of the speed. There are specialist domestic abuse workers called IDVAs who help women plan safely — would you let me refer you? And there’s a 24-hour helpline, 0808 2000 247. Save it in your phone under a different name, like a hair salon.",
    "dom": "tasks",
    "why": "Offers IDVA referral and helpline with safe storage"
   },
   {
    "who": "pt",
    "text": "Salon. Okay. Yes, you can refer me, if they don’t ring the house."
   },
   {
    "who": "dr",
    "text": "I’ll make sure they use a safe number and times you choose. One honest thing, so there are no surprises: because you’re pregnant, the midwife needs to know about this so she can support you both. I’ll tell you before anything is shared, never behind your back. Is that all right?",
    "dom": "rto",
    "why": "States the honest limit on confidentiality in advance"
   },
   {
    "who": "pt",
    "text": "If it helps the baby. Yes."
   },
   {
    "phase": "Safety-net and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "Here’s the plan that leaves no trace. I’ll book you in next week for “pregnancy bloods” — that’s our next talk, in person, alone, and I can look at your arms then. Nothing gets posted or texted to you. If you’re ever in danger: 999. If you can’t speak, press 55 when they answer. Tummy pain or bleeding — contact the maternity unit the same day.",
    "dom": "gs",
    "why": "Disguised follow-up, silent-call advice and obstetric safety-net"
   },
   {
    "who": "pt",
    "text": "Pregnancy bloods. He’d not question that."
   },
   {
    "who": "dr",
    "text": "Just so I know it’s clear — what will you do if things get dangerous before next week?",
    "dom": "rto",
    "why": "Teach-back on the emergency plan"
   },
   {
    "who": "pt",
    "text": "999, and 55 if I can’t talk. Or get to my sister. And the salon number."
   },
   {
    "who": "dr",
    "text": "Exactly. You did something brave today. I’ll record this securely so no one rings the house.",
    "dom": "gs",
    "why": "Closes warmly and confirms secure documentation"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Checked she was alone and safe to talk, agreed a code phrase, then an open question on the headaches.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Control of phone and money, isolation from her sister, pregnancy concealed from her partner.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Sleeves in July, glances off-screen, “he doesn’t like me wasting doctors’ time”, the sideways baby question.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (stress), concern (the baby, being reported and losing control), expectation (information without police).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "No examination on video; in-person review under a routine pretext to document injuries and book antenatal care.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Tension-type headache confirmed; red-flag headache and head injury excluded; recognised the booking reason as a route to disclosure.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Identified strangulation, escalation and pregnancy as high-risk markers; checked tonight’s safety and obstetric symptoms.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Domestic abuse with high-risk features in early pregnancy; tension-type headache secondary to it.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "IDVA referral with consent, helpline stored safely, midwife booking with safeguarding awareness, MARAC considered, her pace respected.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Paracetamol for headache in pregnancy; folic acid and antenatal booking; emotional support.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 and 55; maternity unit for pain or bleeding; disguised follow-up next week; secure documentation.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Health disadvantage & vulnerabilities",
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Kayleigh Morton",
    "age": "31 years · female",
    "pmh": [
     "Nil significant",
     "A&E 4 months ago: facial bruising (“door frame”)"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ 3 appointments booked and cancelled this year. Incomplete online midwife self-referral 3 weeks ago (positive pharmacy pregnancy test).",
    "reason": "Video appointment: “tiredness and headaches”."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Safe to talk?",
     "d": "Before any history: alone? likely interruptions? agree a code phrase. On video the room itself may not be safe."
    },
    {
     "t": "1–4",
     "h": "Headache, then home",
     "d": "Brief headache red flags, then follow “worse when things are tense at home”. Ask directly and gently about fear and harm."
    },
    {
     "t": "4–7",
     "h": "Believe and assess",
     "d": "“I believe you. It’s not your fault.” Name strangulation as high risk, ask about escalation, answer the baby question honestly."
    },
    {
     "t": "7–10",
     "h": "Safety plan at her pace",
     "d": "Tonight’s safety, the sister, IDVA referral, helpline saved under a disguise, midwife and the honest limit on confidentiality."
    },
    {
     "t": "10–12",
     "h": "Invisible safety-net",
     "d": "999 and 55; maternity unit for pain or bleeding; “pregnancy bloods” next week; secure records. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Treats the headache and ends the call; never asks about home; asks “why don’t you leave?”; promises total confidentiality; sends a text or letter home; misses the pregnancy.",
    "pass": "Checks she is alone, asks directly about abuse, believes her, recognises the strangulation risk, offers the helpline and IDVA referral, arranges follow-up and safety-netting.",
    "exc": "All of the above, plus: code phrase before any history; names strangulation, escalation and pregnancy as a high-risk cluster; answers the baby question honestly; states the midwife limit in advance; builds a disguised, no-trace follow-up and 55 silent-call advice; she leaves feeling in control."
   },
   "avoid": [
    {
     "dont": "“Why don’t you just leave him?”",
     "instead": "“I believe you, and none of this is your fault. Let’s plan what keeps you safe, at your pace.”",
     "why": "Blames the victim and ignores that leaving is often the most dangerous time."
    },
    {
     "dont": "“Everything you tell me is completely confidential.”",
     "instead": "“Mostly, yes — but because you’re pregnant the midwife needs to know, and I’ll tell you before anything is shared.”",
     "why": "A promise you can’t keep destroys trust when it is broken."
    },
    {
     "dont": "“I’ll send you a text with some useful numbers.”",
     "instead": "“Let’s save the helpline in your phone as a hair salon, right now.”",
     "why": "Anything he can find increases her risk."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Coercive control",
     "t": "Phone checking, controlling money and isolating her from her sister are coercive control, a criminal offence (Serious Crime Act 2015, s76). Economic abuse limits her ability to leave."
    },
    {
     "h": "Pregnancy and abuse",
     "t": "Abuse often starts or escalates in pregnancy. Midwives ask about domestic abuse at booking (NICE NG201, 2021); women with complex social factors need tailored antenatal care (NICE CG110, 2010)."
    }
   ],
   "legal": [
    {
     "h": "Domestic Abuse Act 2021",
     "t": "Statutory definition includes physical, emotional, economic abuse and controlling behaviour. The Act created a specific offence of non-fatal strangulation."
    },
    {
     "h": "Confidentiality and disclosure",
     "t": "An adult with capacity decides about police involvement. Disclosure without consent can be justified to prevent serious harm or where a child is at risk — tell her first where safe (GMC Confidentiality, 2017)."
    },
    {
     "h": "Unborn child",
     "t": "Where there is risk to an unborn baby, a pre-birth referral to children’s social care may be needed (Working Together to Safeguard Children 2026). Explain this to her before it happens."
    }
   ],
   "professional": [
    {
     "h": "Risk assessment and MARAC",
     "t": "Use the SafeLives DASH risk checklist; strangulation, escalation and pregnancy are high-risk markers. High-risk cases go to MARAC, and information can be shared without consent where risk is high — tell her if this is planned."
    },
    {
     "h": "Secure records",
     "t": "Code the record, restrict online record access for third-party and sensitive entries, and flag that the practice must not phone the home or send letters (NICE PH50, 2014)."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "National Domestic Abuse Helpline 0808 2000 247 (24 hours); IDVA services; refuges; Silent Solution (999 then 55 on a mobile); the Domestic Violence Disclosure Scheme (Clare’s Law)."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Non-fatal strangulation (held by the throat) — strongest single risk marker",
     "Escalation in frequency or severity, especially since pregnancy",
     "Pregnancy with abdominal pain or bleeding after assault — same-day maternity assessment"
    ],
    "psychosocial": [
     "Control of phone and money; isolation from her sister",
     "Pregnancy concealed from her partner",
     "Fear of police involvement and losing control"
    ],
    "ice": [
     "Idea: the headaches are “probably stress”",
     "Concern: the baby, and being reported without her say",
     "Expectation: information and a route to help she controls, with nothing he can find"
    ]
   },
   "diagnosis": "Domestic abuse with high-risk features (non-fatal strangulation, escalation, pregnancy) presenting as tension-type headache and tiredness in a woman about 12 weeks pregnant.",
   "diagnosisLay": "“What you’re describing is domestic abuse. The headaches are real, and they’re linked to what’s happening at home. Being held by the throat is the warning sign we take most seriously, so let’s plan to keep you and the baby safe.”",
   "management": {
    "reflectIce": "“You came to find out if the baby is all right and whether you can get help without police at the door. The baby is most likely fine, and yes — there’s help you control.”",
    "psychosocial": "Her pace, her controls: IDVA referral with consent, the sister as a safe place, helpline disguised in her phone, and a follow-up he has no reason to question.",
    "sharedPlan": [
     "IDVA referral with consent; DASH risk assessment; MARAC if high risk, telling her first",
     "Antenatal booking with a midwife, sharing the concern so she and the baby are supported",
     "In-person review next week under a routine reason to document injuries"
    ],
    "safetyNet": [
     "999 if in danger; press 55 if unable to speak",
     "Abdominal pain or bleeding — same-day maternity assessment; nothing posted, texted or phoned home"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Safeguarding",
    "s": "Case walkthrough · domestic abuse",
    "href": "../cases/safeguarding.html"
   },
   {
    "ic": "📋",
    "t": "Perinatal mental health",
    "s": "Case walkthrough · pregnancy",
    "href": "../cases/perinatal-mental-health.html"
   },
   {
    "ic": "📋",
    "t": "Headache",
    "s": "Case walkthrough · red flags",
    "href": "../cases/headache.html"
   },
   {
    "ic": "💠",
    "t": "Tension-type headache protocol",
    "s": "Analgesia · NICE CG150",
    "href": "management/tension-headache.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by consulting on the headache the patient booked, not the danger she is in — or by rescuing her too fast. Safety to talk, belief, risk markers and her control are what score.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Asking about abuse before checking she is alone on the video call.",
     "why": "Unsafe practice; if the partner overhears, her risk rises immediately.",
     "fix": "“Before anything else — are you alone? If someone comes in, say ‘my prescription’.”"
    },
    {
     "dom": "tasks",
     "fail": "Missing or minimising “held by the throat”.",
     "why": "“Fails to recognise a serious risk.” Non-fatal strangulation is a high-risk marker.",
     "fix": "Name it: “That’s the sign we take most seriously of all.” Then ask about escalation and pregnancy."
    },
    {
     "dom": "rto",
     "fail": "“Why do you stay?” or “You need to leave him.”",
     "why": "“Judgemental.” Blaming questions end disclosure.",
     "fix": "“I believe you. None of this is your fault.” Then plan at her pace."
    },
    {
     "dom": "rto",
     "fail": "Promising total confidentiality, or sharing with the midwife without telling her.",
     "why": "Both break trust; the unborn baby means information will be shared.",
     "fix": "State the limit before it applies: “The midwife needs to know, and I’ll tell you before anything is shared.”"
    },
    {
     "dom": "gs",
     "fail": "Texting the helpline number or posting a leaflet home.",
     "why": "Creates evidence the abuser can find.",
     "fix": "Save the number under a disguised name during the call; follow up under a routine reason."
    },
    {
     "dom": "gs",
     "fail": "No emergency plan before the call ends.",
     "why": "Safety-netting inadequate for a high-risk situation.",
     "fix": "999, 55 if she can’t speak, the sister as a safe place, maternity unit for pain or bleeding — then teach-back."
    }
   ]
  }
 },
 "carer-neglect": {
  "stem": {
   "name": "Doris Whitmore",
   "age": "89-year-old woman",
   "pmh": [
    "Hip fracture last year — housebound since",
    "Weight loss over the last 3 months (per niece)"
   ],
   "meds": [
    "Regular medicines dispensed weekly in a blister pack",
    "Oral nutritional supplement drinks"
   ],
   "allergy": "No known drug allergies",
   "recent": "Twice-daily private agency home care, 15-minute visits. Niece Susan (58) holds registered health-and-welfare and property-and-finance lasting powers of attorney and lives 90 minutes away. Not seen at the surgery since the hip fracture.",
   "reason": "Telephone call-back requested by her niece: “a few things weren’t right when I visited on Sunday.”"
  },
  "knowledge": {
   "guideline": "Care Act 2014 s42 · NICE NG21 (home care) · NICE CG179 (pressure ulcers) · NICE NG253 (sepsis)",
   "summary": "Untouched food and medicines, weight loss, an untreated weeping sacral sore and “all care given” logs that the evidence contradicts is suspected neglect by a care provider: a same-day clinical visit plus a Care Act s42 safeguarding referral to the local authority, with Doris’s own views sought.",
   "points": [
    {
     "h": "Name the pattern",
     "t": "Neglect and acts of omission, and organisational abuse, are categories of abuse in the Care and Support Statutory Guidance to the Care Act 2014. Film-wrapped meals, near-full blister packs, binned supplements, weight loss and a sore that nobody reported, against a log reading “all care given”, is a safeguarding concern, not a service-quality complaint."
    },
    {
     "h": "The sore makes it today",
     "t": "A weeping sacral pressure ulcer in a drowsy, poorly-eating 89-year-old needs same-day assessment. NICE CG179: assess and categorise the ulcer, involve district nursing/tissue viability, and assess nutrition and hydration. Keep infection and sepsis in mind (NICE NG253) and consider dehydration and delirium as causes of the new drowsiness."
    },
    {
     "h": "Care Act s42 duty",
     "t": "The local authority must make enquiries when an adult with care and support needs is experiencing, or at risk of, abuse or neglect and cannot protect themselves. The GP’s job is to refer, with facts: dates, what was seen, the log entries that do not match."
    },
    {
     "h": "Consent and capacity",
     "t": "Seek Doris’s own view (Making Safeguarding Personal) and assess her capacity for the decision at the visit (Mental Capacity Act 2005). If a paid provider may be failing other clients too, or she is at serious risk, information can be shared without consent — tell her that you are doing so and why."
    },
    {
     "h": "Visit length",
     "t": "NICE NG21: home care visits shorter than half an hour should be made only if the worker is known to the person, the visit is part of a wider package, and there is enough time for the specified tasks. Different faces daily and 15 minutes for meals, medicines and pressure care falls outside this."
    },
    {
     "h": "Medicines",
     "t": "Reconcile what has actually been missed (the blister packs are the evidence — ask the niece to keep them), check with the community pharmacy, and review whether any missed or restarted medicine needs a safety check before it is resumed."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Susan? It’s Dr Lee from the surgery, returning your call about your aunt, Doris Whitmore. Before we start, could you confirm her date of birth for me — and I see on her record that you hold her lasting powers of attorney?",
    "dom": "tasks",
    "why": "Confirms identity and the caller’s authority before discussing Doris"
   },
   {
    "who": "pt",
    "text": "That’s right, both of them. Oh doctor, thank you for ringing — I’m probably fussing over nothing, and I don’t want to get anyone into trouble. The carers are lovely girls, always rushing. It’s just… Sunday. A few things weren’t right."
   },
   {
    "who": "dr",
    "text": "You’ve driven up, looked properly, and picked up the phone — that’s not fussing. Tell me what you found, in whatever order it comes.",
    "dom": "rto",
    "why": "Validates the call and gives an open start"
   },
   {
    "who": "pt",
    "text": "Her lunch was still in the fridge with the film on at four o’clock. Sunday morning’s tablets were still in the pack. And when I helped her change, there was a sore at the bottom of her back — the size of a two-pound coin, weeping through her nightie."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Thank you — that’s exactly the detail I need. The sore first: is the skin broken, is it smelly, is the skin around it red or hot?",
    "dom": "tasks",
    "why": "Characterises the pressure ulcer and looks for infection"
   },
   {
    "who": "pt",
    "text": "It’s open, like a graze gone deep. A bit pink round the edge. I didn’t notice a smell."
   },
   {
    "who": "dr",
    "text": "And how has she been in herself — sleepier, muddled, hot or shivery, passing water as usual?",
    "dom": "tasks",
    "why": "Screens for sepsis, dehydration and delirium"
   },
   {
    "who": "pt",
    "text": "Drowsier. On the phone she drifts off mid-sentence, which isn’t her. I don’t think she’s been hot. I honestly don’t know about the toilet — the carers do that."
   },
   {
    "who": "dr",
    "text": "What about her eating and her weight over the last few months?"
   },
   {
    "who": "pt",
    "text": "Her rings spin on her fingers now. And the kitchen bin was full of those supplement drinks — unopened. Last week’s blister pack was barely started."
   },
   {
    "who": "dr",
    "text": "Tell me about the agency — how long are the visits, and what does their log say?",
    "dom": "tasks",
    "why": "Establishes the care arrangement and the documentary evidence"
   },
   {
    "who": "pt",
    "text": "Fifteen minutes, twice a day. A different girl most days. Two times nobody came that I know of — ‘car broke down’. The book says ‘all care given, no concerns’ every single day. Their complaints number goes to voicemail."
   },
   {
    "who": "dr",
    "text": "And Doris herself — what does she say about it all?",
    "dom": "rto",
    "why": "Brings the patient’s own voice into a third-party call"
   },
   {
    "who": "pt",
    "text": "‘The girls are run off their feet, dear.’ She’d hate a fuss. What she’d hate far more is being put in a home."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You’ve said a couple of times you don’t want to get anyone into trouble. Can I ask — who are you most worried about getting into trouble?",
    "dom": "rto",
    "why": "Picks up the repeated cue and explores it"
   },
   {
    "who": "pt",
    "text": "(pause) Me, I suppose. I chose them. They were the cheapest of three — her money has to last, I’m managing it all. If I’d paid for the better one… And if you report it, isn’t that saying I neglected her?"
   },
   {
    "who": "dr",
    "text": "Thank you for telling me that — I can hear how heavy it’s been. So let me be clear: choosing affordable care in good faith so her savings last is exactly what an attorney is meant to do. What’s gone wrong is that a paid agency wrote ‘all care given’ when the evidence says it wasn’t. A safeguarding referral looks at the care she was paid for — and you’re the person who noticed.",
    "dom": "rto",
    "why": "Absolves the guilt accurately rather than with blanket reassurance"
   },
   {
    "who": "pt",
    "text": "I thought safeguarding meant police, and social workers taking her away."
   },
   {
    "who": "dr",
    "text": "That’s a common fear. What were you hoping I’d do when you rang today?",
    "dom": "rto",
    "why": "Elicits expectations before explaining"
   },
   {
    "who": "pt",
    "text": "I suppose… for someone with authority to go and see her. I can’t decide all this on my own from ninety minutes away."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Then here’s my honest view. Any one of these alone might have an innocent explanation. Together — food and tablets untouched, weight going, a weeping sore nobody reported, and a log that doesn’t match — it’s a picture of care not being delivered. That’s called neglect, and there’s a proper process for it.",
    "dom": "tasks",
    "why": "Names the pattern as suspected neglect in plain language"
   },
   {
    "who": "pt",
    "text": "Neglect. Oh, that’s a horrible word."
   },
   {
    "who": "dr",
    "text": "It is, and it’s about the agency, not you. The sore is what makes this urgent today: an open sore at the base of the spine in someone who’s drowsy and not eating can get worse or infected quickly, and the drowsiness itself could be infection or dehydration. So I want her seen this afternoon.",
    "dom": "tasks",
    "why": "Explains the clinical urgency and the differential for drowsiness"
   },
   {
    "who": "dr",
    "text": "And the safeguarding team’s job is to make the care safe — very often so the person can stay in their own home. Keeping her at home is exactly what I’ll write as her wish, if that’s what she tells me.",
    "dom": "rto",
    "why": "Answers the “home” fear honestly and keeps Doris’s wishes central"
   },
   {
    "who": "pt",
    "text": "That’s what she’d want. More than anything."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s the plan — tell me if anything doesn’t work. I’ll visit her this afternoon: look at the sore, check her temperature, fluids and how alert she is, and ask Doris herself what she wants. I’m asking the district nurses to start dressing and pressure care, today or first thing tomorrow depending on what I find. Is there a key safe, and can you give me the code?",
    "dom": "tasks",
    "why": "Same-day visit with district nursing; practical access arranged"
   },
   {
    "who": "pt",
    "text": "Yes — I’ll text it to the surgery. Should I ring the agency?"
   },
   {
    "who": "dr",
    "text": "Put your concerns to them in writing, with dates — and please keep the blister packs and take photos of the log pages. I’ll make the safeguarding referral to the council’s adult safeguarding team today, and I’d like to put your name on it alongside mine as the person who raised it. I’ll ask Doris for her view first, but because an agency may be letting other people down too, it goes in either way — and I’ll tell her that.",
    "dom": "tasks",
    "why": "Makes the s42 referral today; addresses consent and evidence"
   },
   {
    "who": "pt",
    "text": "With my name on it. Yes. I think I can do that now."
   },
   {
    "who": "dr",
    "text": "I’ll also check with her pharmacy what she’s actually missed, and ask social services for an urgent review of her care — fifteen-minute visits aren’t enough time to feed someone, give tablets and turn them. And Susan — you’re carrying a lot. You’re entitled to a carer’s assessment for yourself too.",
    "dom": "gs",
    "why": "Covers medicines, care reassessment and carer support"
   },
   {
    "who": "pt",
    "text": "I didn’t know that. Thank you."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Until I get there: if she becomes hot or shivery, can’t be woken properly, is breathless, or the sore looks angrier or spreading — ring 999, don’t wait for me. I expect to be with her by four, and I’ll ring you back this evening with what I found. Can you tell me the plan back, so I know I’ve explained it well?",
    "dom": "gs",
    "why": "Specific 999 triggers, timed visit and call-back, teach-back"
   },
   {
    "who": "pt",
    "text": "You’re seeing her this afternoon, the nurses start on the sore, you’re making the referral with my name on it, I write to the agency and keep the packs, and if she’s hot or I can’t wake her it’s 999. And you ring me tonight."
   },
   {
    "who": "dr",
    "text": "Exactly right. You did the right thing ringing — you’re not on your own with this any more. Anything else before I go?",
    "dom": "rto",
    "why": "Closes supportively and shares the floor"
   },
   {
    "who": "pt",
    "text": "No. Just — thank you. I feel I can breathe."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Confirmed identity and LPA; open question first; let Susan give the Sunday findings without interruption.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Care arrangement (15-minute visits, changing staff, no-shows), who funds and manages it, Susan’s distance, Doris’s own view and fear of a care home.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I don’t want to get anyone into trouble” and the aside about choosing the cheaper agency, and explored them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (something is wrong with the care); the hidden concern (the referral would accuse her); expectation (someone with authority to see Doris and take charge).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Same-day visit: ulcer assessment and categorisation, temperature and observations, hydration, weight, 4AT, capacity; urine and bloods if unwell.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Neglect by provider versus refusal of care; drowsiness from sepsis, dehydration, delirium or missed or accumulated medicines.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for sepsis (fever, rigors, drowsiness, breathlessness, urine output) and infected ulcer; recognised same-day need.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named suspected neglect (Care Act category) plus a pressure ulcer needing same-day assessment — not a service-quality grumble.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Visit today, district nursing, s42 referral to the local authority today, care reassessment, medicines reconciliation, evidence kept, Doris’s wishes sought.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Nutrition (weight loss, unused supplements), missed medicines, frailty after hip fracture, carer strain (carer’s assessment).",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named 999 triggers, visit time given, same-evening call-back promised, named owner for the referral.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Doris Whitmore",
    "age": "89 years · female",
    "pmh": [
     "Hip fracture last year — housebound",
     "Weight loss reported by family"
    ],
    "meds": [
     "Regular medicines in weekly blister pack",
     "Oral nutritional supplements"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Private agency home care twice daily (15-minute visits). LPA (health and welfare, property and finance) held by niece Susan — registered. No GP contact since hip fracture.",
    "reason": "Telephone call-back to niece. “A few things weren’t right on Sunday — probably nothing.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Identify and listen",
     "d": "Confirm who Susan is and her LPA. Then let her tell Sunday — she will apologise; don’t let the apologies shrink the story."
    },
    {
     "t": "1–4",
     "h": "Collateral history",
     "d": "The sore (open, red, smell), drowsiness, fever, urine, intake and weight, missed tablets, the agency and the log, Doris’s own view."
    },
    {
     "t": "4–6",
     "h": "Find the guilt",
     "d": "“Who are you most worried about getting into trouble?” — she chose the cheap agency. Absolve it accurately."
    },
    {
     "t": "6–10",
     "h": "Name it and plan",
     "d": "Suspected neglect. Visit today plus district nurses. s42 referral today with her name alongside yours. Care reassessment, pharmacy check, evidence kept."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 triggers in plain words. Visit time and evening call-back. Teach-back. Carer’s assessment offered."
    }
   ],
   "wordPics": {
    "fail": "Accepts “probably fussing” and suggests she ring the agency; no same-day visit for the sore; never mentions safeguarding, or mentions it in a way that frightens her off; never finds the guilt; ignores Doris’s own wishes; no safety-net.",
    "pass": "Recognises suspected neglect and makes a safeguarding referral; arranges same-day review of the sore; screens for sepsis; acknowledges Susan’s worry; gives basic 999 advice and a follow-up.",
    "exc": "All of the above, plus: finds and accurately absolves the LPA-budget guilt; answers the “care home” fear with safeguarding’s real goal; plans to seek Doris’s views and capacity at the visit; tells Susan to keep the blister packs and log; offers a carer’s assessment; times the visit and promises the evening call."
   },
   "avoid": [
    {
     "dont": "“I’m sure the carers are doing their best — maybe have a word with the agency.”",
     "instead": "“You were right to ring. Together, what you found is a picture of care not being given, and there’s a proper process for that.”",
     "why": "Downgrading neglect to a customer complaint is the commonest fail in this station."
    },
    {
     "dont": "“I’ll have to report this to safeguarding.”",
     "instead": "“A safeguarding referral looks at the care she was paid for — and I’d like your name on it beside mine, as the person who noticed.”",
     "why": "Said flatly, it confirms her fear that she is being accused; framed properly, she becomes an ally."
    },
    {
     "dont": "“If she can’t cope at home, we may need to think about a care home.”",
     "instead": "“The aim of all this is to make the care safe — very often so she can stay in her own home.”",
     "why": "Both women fear “a home” more than the sore; raising it unprompted closes the conversation."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Care arrangements and cost",
     "t": "Self-funded agency care chosen on price, 15-minute visits and changing staff. A family managing dwindling savings under an LPA may feel they caused the failure — explore it, don’t assume it."
    },
    {
     "h": "Carer strain",
     "t": "A niece 90 minutes away holding both LPAs carries decisions alone. She is entitled to a carer’s assessment from the local authority under the Care Act 2014."
    }
   ],
   "legal": [
    {
     "h": "Care Act 2014 s42",
     "t": "The local authority must make safeguarding enquiries for an adult with care and support needs who is at risk of abuse or neglect and cannot protect themselves. Neglect and organisational abuse are named categories in the statutory guidance."
    },
    {
     "h": "Mental Capacity Act 2005 and LPA",
     "t": "Doris is presumed to have capacity; her fluctuating drowsiness means assessing it for each decision at the visit. The health-and-welfare LPA can be used only for decisions she lacks capacity to make."
    },
    {
     "h": "Sharing without consent",
     "t": "Information can be shared without consent where others may be at risk (a provider failing several clients) or there is a risk of serious harm; record the reasoning and tell the person (GMC confidentiality guidance, 2017)."
    }
   ],
   "professional": [
    {
     "h": "GMC Good medical practice (2024)",
     "t": "Doctors must consider the needs and welfare of vulnerable people and act promptly when a patient’s safety may be at risk. “Keep an eye on it” is not an option once the pattern is recognised."
    },
    {
     "h": "Documentation",
     "t": "Record facts, not adjectives: dates, what was seen, log entries against evidence, who was told and when. The local authority and CQC act on specifics."
    }
   ],
   "community": [
    {
     "h": "Services",
     "t": "Local authority adult safeguarding team and adult social care (urgent care-needs reassessment), district nursing and tissue viability, community pharmacy, CQC (regulates home-care agencies), Age UK for advice and advocacy."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Sepsis or infected ulcer: fever, rigors, new or worse drowsiness, breathlessness, reduced urine, spreading redness",
     "Dehydration and delirium: minimal intake, drowsy, “less herself”",
     "Missed medicines: which ones, for how long, and any risk from stopping or restarting"
    ],
    "psychosocial": [
     "The care arrangement: visit length, staff continuity, no-shows, the log",
     "Who manages money and decisions — the LPA and the pressure of stretching savings",
     "Doris’s own voice: minimising, “hate a fuss”, fear of a care home"
    ],
    "ice": [
     "Idea: “Something’s wrong with her care — but I’m probably fussing”",
     "Concern: a safeguarding referral would accuse her, because she chose the cheapest agency",
     "Expectation: someone with authority to see Doris and carry the decision with her"
    ]
   },
   "diagnosis": "“Taken together — food and tablets untouched, weight falling, a weeping sore nobody reported, and a log saying all care was given — this is a picture of care not being delivered. That is called neglect, it is about the agency, and it needs a same-day visit and a safeguarding referral.”",
   "diagnosisLay": "“Think of the log book as the agency’s receipt. The fridge, the tablets and the sore are what was actually delivered. When the receipt and the delivery don’t match, someone independent needs to look — that’s what safeguarding is.”",
   "management": {
    "reflectIce": "“You’re worried the referral points at you. It doesn’t — choosing affordable care so her money lasts is doing your job as her attorney. The referral looks at care that was paid for and not given.”",
    "psychosocial": "Keep Doris at the centre: ask her view and assess her capacity at the visit, name her wish to stay at home as the goal, and offer Susan a carer’s assessment.",
    "sharedPlan": [
     "GP visit this afternoon; district nursing for the ulcer; observations, hydration and 4AT",
     "Care Act s42 referral to the local authority today, with Susan’s name beside the GP’s",
     "Urgent care-needs reassessment, pharmacy medicines check, blister packs and log kept as evidence"
    ],
    "safetyNet": [
     "999 if hot or shivery, unrousable, breathless, or the sore spreads",
     "Visit time given; GP rings Susan the same evening; named owner for the referral"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Safeguarding",
    "s": "Case walkthrough · Care Act 2014",
    "href": "../cases/safeguarding.html"
   },
   {
    "ic": "🗺️",
    "t": "Delirium pathway",
    "s": "Visual algorithm · drowsiness in older adults",
    "href": "algorithms/delirium.html"
   },
   {
    "ic": "🗺️",
    "t": "Unintentional weight loss",
    "s": "Visual algorithm",
    "href": "algorithms/weight-loss.html"
   },
   {
    "ic": "💠",
    "t": "Malnutrition",
    "s": "Management protocol · supplements · MUST",
    "href": "management/malnutrition.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by doctors who treat a safeguarding case as a complaint about carers, or who make the referral in a way that frightens the caller off. The clinical urgency of the sore and the caller’s hidden guilt both have to be found.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Advising Susan to “raise it with the agency” or “keep an eye on things”.",
     "why": "Maps to “management plan not in line with current UK practice”. The Care Act gives the local authority a duty to enquire; the GP’s job is to refer.",
     "fix": "Name suspected neglect and make the s42 referral today, with the facts: dates, what was seen, log entries against evidence."
    },
    {
     "dom": "tasks",
     "fail": "Treating it purely as a social problem and booking a routine review.",
     "why": "A weeping sacral ulcer in a drowsy, poorly-eating 89-year-old is a same-day clinical problem; sepsis and dehydration must be considered.",
     "fix": "Visit today, involve district nursing, and give specific 999 triggers until you arrive."
    },
    {
     "dom": "rto",
     "fail": "Hearing “I don’t want to get anyone into trouble” three times and replying “don’t worry” each time.",
     "why": "“Does not identify or respond to cues.” The repeated phrase hides her guilt about choosing the cheap agency, which is what is stopping the referral.",
     "fix": "“Who are you most worried about getting into trouble?” — then absolve accurately."
    },
    {
     "dom": "rto",
     "fail": "Planning everything with the niece and never mentioning what Doris wants.",
     "why": "Making Safeguarding Personal and the Mental Capacity Act put the adult at the centre; examiners look for her voice.",
     "fix": "Ask what Doris says, and plan to seek her view and assess capacity at the visit. Name her wish to stay home as the goal."
    },
    {
     "dom": "gs",
     "fail": "“I’ll have to report this to safeguarding” said early and flatly.",
     "why": "It sounds like an accusation, confirms her fear, and can end her cooperation.",
     "fix": "Explain what safeguarding does and who it examines, then invite her name onto the referral."
    },
    {
     "dom": "gs",
     "fail": "Closing with “I’ll sort it out” and no times, owners or call-back.",
     "why": "Non-specific safety-netting and no follow-up are standard failing feedback.",
     "fix": "Visit time, referral today, evening call-back, 999 triggers, and teach-back."
    }
   ]
  }
 },
 "dementia-night": {
  "stem": {
   "name": "Joan Tully",
   "age": "81-year-old woman",
   "pmh": [
    "Alzheimer’s disease — diagnosed 3 years ago",
    "Osteoarthritis of both knees"
   ],
   "meds": [
    "Donepezil 10 mg daily",
    "Paracetamol — when required"
   ],
   "allergy": "No known drug allergies",
   "recent": "Last review: “grimaces on standing”. Lives at home with her husband Frank, 83, her sole carer. Frank is also registered here: BP raised at last check; one attendance in 5 years.",
   "reason": "Husband Frank is calling about six weeks of night-time waking. He is asking for “something to make her sleep”."
  },
  "knowledge": {
   "guideline": "NICE NG97 — Dementia: assessment, management and support",
   "summary": "Night waking in dementia is a search for causes, not a prescription. Hunt the drivers (pain, naps, caffeine, light, inactivity, medication timing), avoid hypnotics and antipsychotics, and treat the carer as the second patient.",
   "points": [
    {
     "h": "Find the drivers",
     "t": "Untreated pain she cannot report, two daytime naps, afternoon tea, a streetlit room, evening TV, less daytime activity, and a cholinesterase inhibitor that can cause insomnia and abnormal dreams. Rule out delirium if the change is sudden (infection, constipation, urinary retention, new drugs)."
    },
    {
     "h": "Pain in someone who can’t say it hurts",
     "t": "NICE NG97: assess pain with a structured observational tool when the person cannot self-report, and consider pain as a cause of distress. For knee OA, NICE NG226 favours topical NSAIDs and exercise; a regular scheduled analgesic trial, reviewed, suits someone who cannot ask for PRN doses."
    },
    {
     "h": "Sleep: non-drug first",
     "t": "NICE NG97 advises a personalised, multicomponent sleep plan: sleep-hygiene education, daylight exposure, exercise and personalised activities. BNF: donepezil is usually taken at bedtime; if sleep is disturbed, discuss moving it to the morning with the prescriber (an off-label timing change)."
    },
    {
     "h": "Why not a sleeping tablet",
     "t": "Benzodiazepines and Z-drugs in older people with dementia bring falls, fractures and worse confusion. Antipsychotics increase stroke risk and mortality in dementia (BNF). Risperidone is licensed only short-term, up to 6 weeks, for persistent aggression in moderate to severe Alzheimer’s. If ever used, NICE NG97 asks for review at least every 6 weeks."
    },
    {
     "h": "The carer’s disclosure: proportionate safeguarding",
     "t": "A carer-strain incident disclosed by the carer himself. Document it factually, examine Joan, and judge whether it is a single exhaustion-driven event or a pattern. Respond with support straight away: carer’s assessment and respite (Care Act 2014), night-sitting, day centre, Admiral Nurse. Escalate to a Care Act s42 safeguarding referral if there is a pattern, injury beyond what was described, or support is refused."
    },
    {
     "h": "The carer’s chest",
     "t": "New exertional chest tightness at 83 needs assessment this week under NICE CG95 (chest pain of recent onset). Tell him to call 999 for pain at rest, pain lasting over 15 minutes, or pain with sweating or breathlessness. NICE NG150 (supporting adult carers): identify carers and look after their own health."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Mr Tully, it’s Dr Hughes. That sounds exhausting. Before anything else: is Joan safe right now, and are you somewhere you can talk?",
    "dom": "rto",
    "why": "Acknowledges him and checks immediate safety on a phone call"
   },
   {
    "who": "pt",
    "text": "She’s asleep in the chair. Of course she is, in the daytime. I’m in the kitchen."
   },
   {
    "who": "dr",
    "text": "Right. I heard you: you need something for the nights, and you can’t keep doing them. I want to understand what’s driving the waking, and how you are too, and then we’ll make a plan today. Is that all right?",
    "dom": "gs",
    "why": "Reflects both problems and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about her days. When does she sleep, what does she drink, how much does she get about?",
    "dom": "tasks",
    "why": "Hunts the sleep-pattern drivers"
   },
   {
    "who": "pt",
    "text": "She naps eleven till one, then again after tea. I let her; it’s the only peace I get. Tea and biscuits all afternoon. Telly till ten. She walks less since her knees got bad."
   },
   {
    "who": "dr",
    "text": "Her knees. Does she seem in pain?",
    "dom": "tasks",
    "why": "Follows the pain cue in someone who cannot self-report"
   },
   {
    "who": "pt",
    "text": "She grimaces getting up. Rubs them at night. Paracetamol now and then, when I remember."
   },
   {
    "who": "dr",
    "text": "And when does she take her donepezil? Anything new, like a temperature, waterworks trouble or constipation?",
    "dom": "tasks",
    "why": "Checks medication timing and screens for delirium"
   },
   {
    "who": "pt",
    "text": "At bedtime. Nothing new like that. It’s been getting worse for six weeks."
   },
   {
    "who": "dr",
    "text": "And you, Frank? How are you holding up?",
    "dom": "rto",
    "why": "Treats the carer as the second patient"
   },
   {
    "who": "pt",
    "text": "Two, three hours, in bits. No day off in two years. The lad’s in Plymouth. My chest’s been tight on the stairs a couple of times. Just tired."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "I’ll come back to that chest, because it matters. Is there anything else about the nights you haven’t told me yet?",
    "dom": "rto",
    "why": "Flags the chest and leaves room for the hidden agenda"
   },
   {
    "who": "pt",
    "text": "(long pause) Last Tuesday, at the door, I grabbed her arm. Hard. There’s a mark. Sixty years, and I left a mark on her. I frightened myself. That’s really why I’m ringing."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me, Frank. That took courage. You’ve had two years without a proper night’s sleep and nobody sharing the nights. That’s the dangerous part, and by ringing me you’ve already started to change it.",
    "dom": "rto",
    "why": "Receives the confession without flinching or minimising"
   },
   {
    "who": "pt",
    "text": "Am I a danger to her?"
   },
   {
    "who": "dr",
    "text": "Has anything like that happened before, or since?",
    "dom": "tasks",
    "why": "Establishes single event versus pattern"
   },
   {
    "who": "pt",
    "text": "Never. Not once in sixty years."
   },
   {
    "who": "dr",
    "text": "I’ll be honest about what happens next, and I want you to hear it as help. I’ll write down what you’ve told me. I’d like to visit tomorrow to see Joan — her knees, her arm, her tablets. And we get you proper help this week. What were you hoping I’d do when you rang?",
    "dom": "rto",
    "why": "Honest about documentation and review; elicits expectations"
   },
   {
    "who": "pt",
    "text": "A tablet to make her sleep. So I can sleep."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I understand. Straight answer: sleeping tablets in dementia cause falls, broken hips and more confusion, and the stronger calming drugs carry a risk of stroke. They’d make one night quieter and the rest of the year worse. But I’m not leaving you with nothing.",
    "dom": "tasks",
    "why": "Declines sedation with the honest reason"
   },
   {
    "who": "pt",
    "text": "Then what?"
   },
   {
    "who": "dr",
    "text": "Her knees first. Joan can’t tell you it hurts any more, so pain may be what wakes her. Regular painkillers at set times, not only when she seems sore, and I’ll look at her knees tomorrow.",
    "dom": "tasks",
    "why": "Scheduled analgesia for pain she cannot report"
   },
   {
    "who": "dr",
    "text": "Then the day: one short nap before lunch instead of two, decaf after lunchtime, ten minutes outside in the morning light, blackout lining for the curtains. And her donepezil can disturb sleep; I’ll look at moving it to the morning.",
    "dom": "tasks",
    "why": "Multicomponent sleep plan and medication timing"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "And you need nights off. Joan refused carers three years ago, but nobody’s asked again. Could we start with a carer’s assessment from the council, a night-sitting service, a day centre two days a week, and an Admiral Nurse? I’ll start the referrals today.",
    "dom": "rto",
    "why": "Remakes the refused offer and makes it concrete"
   },
   {
    "who": "pt",
    "text": "She might go to a day centre if I’m with her the first time."
   },
   {
    "who": "dr",
    "text": "That’s a good start. Now your chest. Tightness on the stairs at eighty-three isn’t just tiredness. I want you seen this week. I’ll book it before we finish.",
    "dom": "tasks",
    "why": "Frank’s exertional chest pain treated as its own urgent problem"
   },
   {
    "who": "pt",
    "text": "Who’ll watch Joan?"
   },
   {
    "who": "dr",
    "text": "We’ll fit it around the visit, and the carer help is part of the answer. If the chest pain comes on at rest, lasts more than fifteen minutes, or comes with sweating or breathlessness, ring 999 and tell them about Joan.",
    "dom": "gs",
    "why": "Clear 999 triggers for the carer"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "So: I visit tomorrow; regular painkillers; one nap, decaf, morning light, blackout lining; carer referrals today; you seen this week. If there’s another night when you feel you might lose control, walk away, make sure she’s safe, and ring the dementia support line or 111. Can you tell me back the plan?",
    "dom": "gs",
    "why": "Summary, crisis plan and teach-back"
   },
   {
    "who": "pt",
    "text": "You’re coming tomorrow. Tablets regular. One nap. Help for nights. And my chest this week."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll ring you on Friday as well. You don’t have to carry another Tuesday on your own.",
    "dom": "rto",
    "why": "Dated follow-up; ends with support, not blame"
   },
   {
    "who": "pt",
    "text": "Thank you, doctor. I thought you’d think I was a monster."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let Frank describe the nights fully; checked Joan’s immediate safety; didn’t argue about the tablet at the start.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Frank’s sleep, no day off in two years, son far away, carers refused and never re-offered, his own health.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "“I can’t keep doing nights”, the chest tightness dropped in passing, and the long pause before the confession.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a tablet will fix it); concern (the grabbed arm, fear he is dangerous); expectation (a prescription tonight).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Home visit: knees, arm mark, weight, bowels and bladder, delirium screen; structured pain assessment; Frank examined and ECG this week.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Pain, napping, caffeine, light, inactivity, donepezil timing, delirium, disease progression.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for delirium in Joan; identified Frank’s new exertional chest pain and gave 999 triggers.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Night-time disturbance in dementia with treatable drivers, plus severe carer strain with a disclosed incident.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "No hypnotic or antipsychotic; scheduled analgesia; sleep plan; donepezil timing reviewed; respite and carer support this week.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Proportionate safeguarding: documented, Joan examined, support first, escalation criteria clear; Frank’s BP and chest.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Visit tomorrow, Frank seen this week, crisis plan for another bad night, 999 triggers, follow-up call dated.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Joan Tully",
    "age": "81 years · female",
    "pmh": [
     "Alzheimer’s disease (3 years)",
     "Knee osteoarthritis"
    ],
    "meds": [
     "Donepezil 10 mg daily",
     "Paracetamol PRN"
    ],
    "allergy": "NKDA",
    "recent": "Last review: “grimaces on standing”. Carer: husband Frank, 83 (also our patient — BP raised at last check, rarely attends). Carers declined 3 years ago; no carer’s assessment recorded.",
    "reason": "⚠ Telephone: Frank asking for “something to make her sleep”."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "Let him get it all out. Check Joan is safe now. Note “I’m eighty-three, I can’t keep doing nights”: that sentence is his own presenting complaint."
    },
    {
     "t": "1–5",
     "h": "Focused history and ICE",
     "d": "Naps, caffeine, light, activity, knees, donepezil timing, delirium screen. Ask how he is. Leave space; the confession arrives if you haven’t judged him."
    },
    {
     "t": "5–6",
     "h": "Summarise and share",
     "d": "Receive the grabbed arm calmly. Single event or pattern? Be honest: it gets written down, Joan gets seen, and help arrives."
    },
    {
     "t": "6–10",
     "h": "Shared management",
     "d": "Decline the tablet with the reason. Pain, naps, decaf, daylight, blackout lining, donepezil timing. Respite, night-sitting, day centre, Admiral Nurse. Frank’s chest this week."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Home visit tomorrow, 999 triggers for Frank, a plan for another bad night, follow-up call dated, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes a hypnotic or antipsychotic to end the call, or refuses and offers nothing; never asks about pain, naps or light; misses Frank’s chest pain; never hears the confession, or hears it and turns punitive, or minimises it and does nothing.",
    "pass": "Declines sedation with a reason, looks for drivers including pain and naps, offers practical sleep measures and carer support, notes Frank’s chest pain and books him in, and responds to the disclosure with documentation and a visit.",
    "exc": "All of the above, plus: scheduled analgesia framed as “she can’t ask”; donepezil timing reviewed; receives the confession warmly and honestly (single event, document, examine, support first, escalation criteria clear); remakes the carers offer concretely this week; 999 triggers for Frank; the call ends with a dated follow-up and a plan for the next bad night."
   },
   "avoid": [
    {
     "dont": "“I can give her something mild to help her settle at night.”",
     "instead": "“Sleeping tablets make dementia worse. Falls, confusion, faster decline. Let’s fix what’s waking her.”",
     "why": "Sedation in dementia causes harm and leaves the real drivers untreated."
    },
    {
     "dont": "“I’m afraid I have to report this to social services.”",
     "instead": "“I’ll write down what you’ve told me, see Joan tomorrow, and get you proper help this week. Telling me was the right thing.”",
     "why": "Leading with a threat shuts down the disclosure. Proportionate action starts with support, and escalation stays available."
    },
    {
     "dont": "“Don’t worry, anyone would have done the same.”",
     "instead": "“You were exhausted and alone, and that’s what we change now. I’ll still need to see Joan’s arm.”",
     "why": "Minimising the incident fails the safeguarding duty to Joan."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Carer breakdown",
     "t": "An 83-year-old sole carer: broken sleep, no respite for two years, a son far away, and help refused once and never re-offered. His exhaustion is the main risk to both of them."
    },
    {
     "h": "Benefits and practical help",
     "t": "Attendance Allowance for Joan (not means-tested); council tax reduction for severe mental impairment; blackout lining and door sensors through the council’s occupational therapy or assistive technology service."
    }
   ],
   "legal": [
    {
     "h": "Care Act 2014",
     "t": "Frank has a right to a carer’s assessment (s10). The local authority must make enquiries under s42 when an adult with care needs is, or may be, at risk of abuse. Use this if the incident is part of a pattern or support is refused."
    },
    {
     "h": "Mental Capacity Act 2005",
     "t": "Joan probably can’t consent to day care or sharing information herself. Decisions are made in her best interests, involving Frank. Ask whether a health and welfare LPA exists."
    },
    {
     "h": "Confidentiality",
     "t": "Frank’s chest pain is his own consultation: record it in his notes and book him separately. Sharing Joan’s information with her carer is justified in her best interests."
    }
   ],
   "professional": [
    {
     "h": "Safeguarding with compassion",
     "t": "GMC Good Medical Practice: protect the vulnerable patient and treat the carer fairly. Documenting and examining are not accusations; say so."
    },
    {
     "h": "Prescribing safely",
     "t": "Declining a requested hypnotic is good prescribing, not obstruction. Explain the harms and offer an alternative plan."
    }
   ],
   "community": [
    {
     "h": "Dementia support",
     "t": "Admiral Nurses (Dementia UK helpline), Alzheimer’s Society, local carers’ centre, day centres and night-sitting services; NICE NG150 on identifying and supporting adult carers."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Frank: new exertional chest tightness at 83 — assess this week; 999 for pain at rest, over 15 minutes, or with sweating",
     "Joan: sudden change over days (delirium: infection, retention, constipation, new drugs)",
     "A disclosed injury: examine, document, and establish single event versus pattern"
    ],
    "psychosocial": [
     "Frank sleeping 2–3 hours in bits; no day off in two years; son in Plymouth",
     "Carers refused three years ago and never re-offered",
     "Joan cannot report pain; less walking; long daytime naps"
    ],
    "ice": [
     "Idea: “There must be a tablet to make her sleep.”",
     "Concern: he grabbed her arm and left a mark, and fears he is becoming dangerous",
     "Expectation: a prescription tonight; underneath, someone to take the nights off him"
    ]
   },
   "diagnosis": "Night-time disturbance in Alzheimer’s disease with treatable drivers (probable untreated OA pain, daytime napping, caffeine, light, donepezil timing), alongside severe carer strain with a single disclosed incident and new exertional chest pain in the carer.",
   "diagnosisLay": "“Joan’s body clock has been knocked about. Long naps, tea in the afternoon, a bright room and sore knees she can’t tell you about. Put together, they wake her at two in the morning. And you’re running on empty, which is the most urgent part.”",
   "management": {
    "reflectIce": "“You rang for a tablet, but what you really needed to tell me was Tuesday. You’ve done the hardest part. Now let’s make sure you’re not on your own at 3am.”",
    "psychosocial": "Carer’s assessment, night-sitting, day centre and Admiral Nurse referrals started today; proportionate safeguarding (document, examine, support, escalate if a pattern emerges); Frank booked for his own chest pain and BP.",
    "sharedPlan": [
     "No hypnotic or antipsychotic; explain why (BNF stroke and mortality warning; falls)",
     "Scheduled analgesia after a structured pain assessment; topical NSAID for knees (NICE NG226); consider moving donepezil to the morning",
     "Sleep plan: one short nap, decaf after lunch, morning daylight, blackout lining, evening wind-down"
    ],
    "safetyNet": [
     "Home visit tomorrow; Frank seen this week; 999 triggers for chest pain",
     "Crisis plan for another bad night (step away, keep Joan safe, call the helpline or 111); GP call on Friday"
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
    "s": "Behaviour, sleep and antipsychotic cautions",
    "href": "management/dementia.html"
   },
   {
    "ic": "📋",
    "t": "Safeguarding",
    "s": "Case walkthrough · adults at risk",
    "href": "../cases/safeguarding.html"
   },
   {
    "ic": "🗺️",
    "t": "Chest pain",
    "s": "Visual algorithm · NICE CG95",
    "href": "algorithms/chest-pain.html"
   }
  ],
  "pitfalls": {
   "intro": "This telephone station hides two patients and a confession behind a prescription request. Candidates fail by arguing about the tablet, missing the carer’s chest pain, or mishandling the disclosure in either direction.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing zopiclone, lorazepam or low-dose quetiapine “just for a few nights”.",
     "why": "Sedatives in dementia cause falls, fractures and worse confusion, and antipsychotics carry stroke and mortality warnings. “Management not in line with UK practice.”",
     "fix": "Decline with the reason, then offer a real plan: pain, naps, caffeine, light, donepezil timing, respite."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about Joan’s knees or pain.",
     "why": "Pain in someone who can’t report it is a leading cause of night-time distress. PRN analgesia doesn’t work if she can’t ask for it.",
     "fix": "“Does she seem sore?” Then scheduled analgesia and a structured pain assessment at the visit."
    },
    {
     "dom": "tasks",
     "fail": "Letting “my chest’s been tight on the stairs” pass as tiredness.",
     "why": "New exertional chest pain at 83 needs its own urgent assessment. Missing it is a safety failure.",
     "fix": "Name it, book him this week, and give 999 triggers."
    },
    {
     "dom": "rto",
     "fail": "Responding to the confession with alarm (“I’ll have to report you”) or with dismissal (“don’t worry about it”).",
     "why": "The first ends honest disclosure; the second fails Joan. Both lose the Relating domain.",
     "fix": "Thank him, check single event or pattern, explain honestly that it is documented and Joan is examined, and lead with support."
    },
    {
     "dom": "rto",
     "fail": "Treating Frank only as a messenger for Joan’s problem.",
     "why": "“Did not explore the impact on the carer.” His exhaustion is the presenting complaint.",
     "fix": "“And how are you, Frank?” early on, then a concrete respite plan."
    },
    {
     "dom": "gs",
     "fail": "“I’ll ask social services to get in touch” as the whole support plan.",
     "why": "Vague signposting after two years of no help won’t change the next night.",
     "fix": "Name each service, start the referrals today, and date your own follow-up call."
    }
   ]
  }
 },
 "dnacpr-request": {
  "stem": {
   "name": "Stanley Kerr",
   "age": "79-year-old man",
   "pmh": [
    "Severe COPD — FEV1 28% predicted, home nebulisers, two admissions last winter",
    "Moderate heart failure"
   ],
   "meds": [
    "Inhaled and nebulised COPD treatment (see repeat list)",
    "Heart failure medication (see repeat list)"
   ],
   "allergy": "No known drug allergies",
   "recent": "Widowed, lives independently. Son Michael (52) visits on Sundays. No ReSPECT or DNACPR record on file.",
   "reason": "Telephone appointment booked by the patient: “wants to discuss resuscitation paperwork — asked to speak to the doctor.”"
  },
  "knowledge": {
   "guideline": "Mental Capacity Act 2005 · GMC Treatment and care towards the end of life (2010) · BMA, Resuscitation Council UK and RCN Decisions relating to CPR (2016) · NICE NG115 (COPD) · NICE NG222 (depression)",
   "summary": "A patient with capacity who does not want CPR is entitled to refuse it, and his family cannot overturn that. Confirm capacity, screen mood, correct the belief that DNACPR stops other treatment, and turn a secret form into a shared conversation.",
   "points": [
    {
     "h": "Capacity",
     "t": "Mental Capacity Act 2005: presume capacity; he must be able to understand, retain, use and weigh the information, and communicate a decision. This is usually demonstrable in the conversation itself — say so and record it."
    },
    {
     "h": "Mood",
     "t": "Distinguish a values-based refusal from depression: ask about sleep, appetite, enjoyment, hopelessness and thoughts of ending life (NICE NG222). Future plans and intact pleasures point away from depression."
    },
    {
     "h": "Scope",
     "t": "A DNACPR decision is about cardiopulmonary resuscitation only. Antibiotics, nebulisers, admission, non-invasive ventilation and all other treatment continue unless separately decided. ReSPECT records the wider picture in the patient’s own words."
    },
    {
     "h": "The law on refusal",
     "t": "A capacitous patient’s refusal of CPR must be respected; relatives are not decision-makers and cannot overturn it. Tracey (2014) requires patients to be involved in DNACPR decisions; Winspear (2015) requires consulting those close to a patient who lacks capacity. Sharing with family needs his consent."
    },
    {
     "h": "If he later loses capacity",
     "t": "The recorded decision guides clinicians. A legally binding refusal of life-sustaining treatment for a future loss of capacity is an advance decision (MCA 2005 ss24–26): written, signed, witnessed, and stating it applies even if life is at risk."
    },
    {
     "h": "Honest outcomes",
     "t": "Survival after out-of-hospital cardiac arrest is low in general and poorer with severe lung and heart disease; survivors may have lasting harm. Give this as information, not persuasion."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Kerr, it’s Dr Lee. I understand you wanted to talk to me about resuscitation. I’m listening — go ahead.",
    "dom": "rto",
    "why": "Open start that lets him set out his request"
   },
   {
    "who": "pt",
    "text": "I’ll come straight to it, I’ve rehearsed this twice in the mirror. I want one of those do-not-resuscitate forms. The proper one, signed, in the house. And I want to know whether my son can have it torn up. Because he’ll try, doctor. He’ll try."
   },
   {
    "who": "dr",
    "text": "Thank you for being so clear — I can tell this matters a great deal. I’ll answer both questions properly. First, can I understand what’s led you to this, and what you know about it already? Then we’ll talk about how to do it properly and about your son.",
    "dom": "gs",
    "why": "Matches the weight of the request and sets an agenda"
   },
   {
    "who": "pt",
    "text": "Fair enough."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me what’s brought you to this decision.",
    "dom": "rto",
    "why": "Open question on his reasoning"
   },
   {
    "who": "pt",
    "text": "Two winters in hospital. Each time a little less of me comes home. I’m not done living — I’m done being dragged back."
   },
   {
    "who": "dr",
    "text": "And why now? Has something happened recently?",
    "dom": "rto",
    "why": "Explores the timing, which reveals the driver"
   },
   {
    "who": "pt",
    "text": "My brother Walter. February. His heart stopped, they got it going in A&E, then three weeks in intensive care with a tube down his throat and his hands tied so he wouldn’t pull it out. Died anyway. Looked like a crash test dummy. Nobody asked Walter. I’m asking for me while I still can."
   },
   {
    "who": "dr",
    "text": "I’m so sorry. That sounds a terrible thing to watch, day after day. Thank you for telling me — it helps me understand.",
    "dom": "rto",
    "why": "Acknowledges the brother’s death with empathy"
   },
   {
    "who": "dr",
    "text": "Can I ask a few questions I ask everyone in this situation? How are you in yourself — sleep, appetite, the things you enjoy? Have you felt low, or had thoughts that life isn’t worth living?",
    "dom": "tasks",
    "why": "Screens mood to distinguish values-based refusal from depression"
   },
   {
    "who": "pt",
    "text": "I sleep well, eat well. I’ve got my pigeons, I laugh at the snooker. My granddaughter graduates in July and I’ll be there. I want more life, doctor — just not THAT ending."
   },
   {
    "who": "dr",
    "text": "That’s clear. And what do you understand a do-not-resuscitate decision covers?",
    "dom": "tasks",
    "why": "Checks his understanding before explaining"
   },
   {
    "who": "pt",
    "text": "No resuscitation. But I worry once it’s on file, they’ll stop trying altogether. That’s what’s stopped me ringing for a year."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said your son will try to tear it up. Tell me about him.",
    "dom": "rto",
    "why": "Explores the Michael cue from the opening"
   },
   {
    "who": "pt",
    "text": "Michael. He’s a solicitor. Loving, but he fights everything — it’s how he grieves before it happens. He’s already said, ‘Don’t you dare sign anything, Dad.’ I wasn’t going to tell him. Just keep it in a drawer."
   },
   {
    "who": "dr",
    "text": "How do you think he’d feel if he found it afterwards?",
    "dom": "rto",
    "why": "Gently tests the secrecy plan"
   },
   {
    "who": "pt",
    "text": "(pause) It would break him. Worse than if I told him. I know that. I just don’t know how to have that conversation."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me answer your questions. You clearly understand this, you’ve weighed it up, and you can tell me your decision — so this is yours to make. Michael cannot overturn it. Families are told, with your permission, but they don’t get a vote on your own chest.",
    "dom": "tasks",
    "why": "States capacity and the legal position plainly"
   },
   {
    "who": "pt",
    "text": "Good. That’s what I needed to hear."
   },
   {
    "who": "dr",
    "text": "Now the part that’s cost you a year. The decision covers one thing only: chest compressions and shocks if your heart stops. Everything else carries on — antibiotics, nebulisers, going into hospital if you want to. Nobody stops trying. And to be honest with you, when the heart stops in someone with lungs and a heart like yours, the chance of getting home afterwards is small, and many who survive are left more unwell.",
    "dom": "tasks",
    "why": "Corrects the scope and gives honest outcome information"
   },
   {
    "who": "pt",
    "text": "So they’d still treat a chest infection?"
   },
   {
    "who": "dr",
    "text": "Absolutely. What you watched with Walter — nobody asked him. You’re asking for yourself while you can. That isn’t giving up.",
    "dom": "rto",
    "why": "Honours the driver and reframes the decision"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’d like to do this properly, face to face, this week. There’s a form called ReSPECT that records in your own words what matters to you — not just resuscitation, but when you would want hospital. We fill it in together, a copy stays in your house where it can be found, and it’s flagged on your record and to the ambulance and out-of-hours services.",
    "dom": "tasks",
    "why": "Proposes ReSPECT, face-to-face, visible copy and flagging"
   },
   {
    "who": "pt",
    "text": "Visible. Not a drawer."
   },
   {
    "who": "dr",
    "text": "About Michael — I won’t tell him anything without your say-so. But I’d offer you this: bring him to that appointment. You hold the decision, I explain it and take the difficult questions. He doesn’t get a vote, but he hears it from you now rather than from paperwork later. How does that sound?",
    "dom": "rto",
    "why": "Respects confidentiality and offers a supported three-way conversation"
   },
   {
    "who": "pt",
    "text": "(long pause) He’d come if I asked. Yes. I think that’s what I really rang for."
   },
   {
    "who": "dr",
    "text": "While you’re in, we’ll look at your winter plan too — your rescue medicines, and when you would want to go into hospital. And if you ever feel low, or change your mind about any of this, you ring me. The form follows your wishes, and you can change it at any time.",
    "dom": "gs",
    "why": "Links to COPD self-management, mood follow-up and reversibility"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Just so we’re clear: until the form is done, if you’re unwell with your chest, you get help exactly as before — 999 if you’re very breathless or have chest pain. Can you tell me the plan back, in your own words?",
    "dom": "gs",
    "why": "Clarifies the interim position and checks understanding"
   },
   {
    "who": "pt",
    "text": "Face to face this week, Michael with me if he’ll come. The form covers the restart only — everything else carries on. Copy where it can be seen, flagged to the ambulance people. I can change my mind any time."
   },
   {
    "who": "dr",
    "text": "Exactly right. Reception will ring you today with a double appointment. Is there anything else you wanted to ask?",
    "dom": "rto",
    "why": "Books follow-up and shares the floor"
   },
   {
    "who": "pt",
    "text": "No. Thank you, doctor. I’ve been carrying that for a year."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let him make the request in full; acknowledged its weight; set an agenda that included his son.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Independence, widowhood, pigeons and family, the relationship with Michael, two winter admissions.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "“He’ll try”, “rehearsed in the mirror” and “a little less of me comes home”; asked what lay behind the timing.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (form in a drawer; doctors stop trying); concern (Walter’s ICU death; Michael overturning it); expectation (a signed form, legal certainty, help telling Michael).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Face-to-face review this week; mood assessment; review of COPD and heart failure plans.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Values-based decision versus depression or coercion; understanding of scope.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Mood screen including hopelessness and thoughts of ending life; interim safety-net for chest deterioration.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated he has capacity and that the request is a considered, values-based decision.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "ReSPECT completed face to face; visible copy; record and ambulance flag; correct law on family; confidentiality respected; three-way conversation offered.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "COPD winter plan and rescue medicines, heart failure review, bereavement.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Appointment booked; reversible at any time; 999 for acute deterioration meanwhile; open door if low.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Stanley Kerr",
    "age": "79 years · male",
    "pmh": [
     "Severe COPD (FEV1 28%), home nebulisers",
     "Moderate heart failure"
    ],
    "meds": [
     "COPD inhalers and nebulisers",
     "Heart failure medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Two COPD admissions last winter. No ReSPECT or DNACPR on file. Widowed, lives alone. Son Michael visits Sundays.",
    "reason": "Booked by patient: “Resuscitation paperwork — wants the doctor, not the nurse.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Let him say it",
     "d": "He has rehearsed it. Let him finish, then acknowledge its weight and name both questions."
    },
    {
     "t": "1–4",
     "h": "Reasoning and mood",
     "d": "Why now? — Walter. Mood screen: sleep, appetite, enjoyment, hopelessness, thoughts of ending life. What he thinks DNACPR covers."
    },
    {
     "t": "4–6",
     "h": "The Michael problem",
     "d": "Ask about his son; test the drawer plan: “How would he feel finding it afterwards?”"
    },
    {
     "t": "6–10",
     "h": "Answer and plan",
     "d": "Capacity stated; Michael can’t overturn it; CPR only; honest outcomes; ReSPECT face to face; offer the three-way conversation."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Interim 999 advice, reversible any time, appointment booked, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Tries to talk him out of it, or agrees without checking capacity or mood; states the law wrongly (e.g. the family must agree); never corrects the belief that other treatment stops; misses Walter and the plan to keep it secret.",
    "pass": "Confirms capacity and mood, explains that DNACPR covers CPR only, states that Michael cannot overturn it, and arranges a face-to-face ReSPECT discussion.",
    "exc": "All of the above, plus: finds Walter and honours the story, gives honest outcome information without persuading, challenges the secrecy kindly, offers to lead a three-way conversation with Michael while protecting confidentiality, and stresses the decision can be changed at any time."
   },
   "avoid": [
    {
     "dont": "“You’re still quite well — are you sure you want to give up?”",
     "instead": "“You’ve thought about this carefully. It isn’t giving up — it’s deciding for yourself while you can.”",
     "why": "Judging his decision undermines autonomy and loses his trust."
    },
    {
     "dont": "“We’d need to discuss it with your son first.”",
     "instead": "“This is your decision. I won’t tell Michael anything without your permission — but I can help you tell him.”",
     "why": "Relatives are not decision-makers for a capacitous patient, and disclosure needs consent."
    },
    {
     "dont": "“Once it’s signed, we’ll focus on keeping you comfortable.”",
     "instead": "“This covers restarting your heart only. Everything else — antibiotics, nebulisers, hospital — carries on.”",
     "why": "It confirms the very misunderstanding that delayed his call by a year."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family and bereavement",
     "t": "His brother’s ICU death drives the timing; his son’s fear shows as control. Name both, and offer support for the family conversation."
    },
    {
     "h": "Independence",
     "t": "A widower living alone with pigeons and a granddaughter’s graduation ahead: the decision is about the manner of dying, not a wish to die."
    }
   ],
   "legal": [
    {
     "h": "Mental Capacity Act 2005",
     "t": "Capacity is presumed and decision-specific. A capacitous refusal of CPR must be respected; relatives cannot overturn it. An advance decision to refuse treatment (ss24–26) makes a future refusal of life-sustaining treatment legally binding if it meets the formal requirements."
    },
    {
     "h": "Case law",
     "t": "Tracey v Cambridge University Hospitals (2014): patients must be involved in DNACPR decisions. Winspear v City Hospitals Sunderland (2015): those close to a patient who lacks capacity must be consulted."
    },
    {
     "h": "Confidentiality",
     "t": "GMC Confidentiality (2017): do not share with his son without his consent."
    }
   ],
   "professional": [
    {
     "h": "GMC Treatment and care towards the end of life (2010)",
     "t": "Discuss CPR sensitively, give honest information about likely outcomes, and record decisions so they can be found by others."
    },
    {
     "h": "Communicating the decision",
     "t": "A decision is only useful if it can be found: copy in the house, flagged on the GP record, and shared with out-of-hours and ambulance services."
    }
   ],
   "community": [
    {
     "h": "Resources",
     "t": "ReSPECT patient information (Resuscitation Council UK), Compassion in Dying for advance decisions, Asthma and Lung UK for COPD support, Cruse for bereavement."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Low mood, hopelessness, anhedonia or thoughts of ending life — assess before accepting the request",
     "Pressure or coercion from others",
     "Current chest deterioration needing assessment today"
    ],
    "psychosocial": [
     "Walter’s death and what he witnessed",
     "His relationship with Michael and the plan to keep the form secret",
     "What gives his life meaning now"
    ],
    "ice": [
     "Idea: a form kept “in a drawer like a will”; doctors will stop trying once it exists",
     "Concern: dying like Walter; Michael overturning his decision",
     "Expectation: the form, legal certainty, and help telling his son"
    ]
   },
   "diagnosis": "“You understand this, you’ve weighed it up and you can tell me your decision — so it’s yours. It covers restarting your heart only; everything else carries on. Michael can’t overturn it.”",
   "diagnosisLay": "“Think of it as switching off one specific thing — the chest-pumping restart at the very end — while all the other switches stay on.”",
   "management": {
    "reflectIce": "“Nobody asked Walter. You’re asking for yourself while you can — that isn’t giving up.”",
    "psychosocial": "Challenge the secrecy kindly and offer a three-way conversation with Michael, with Stanley holding the decision.",
    "sharedPlan": [
     "Face-to-face ReSPECT discussion this week; DNACPR recorded",
     "Copy visible at home; GP record, out-of-hours and ambulance services flagged",
     "Michael invited with Stanley’s consent; COPD winter plan reviewed"
    ],
    "safetyNet": [
     "Until then, treatment as before — 999 for severe breathlessness or chest pain",
     "Decision reversible at any time; ring if mood drops"
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
    "ic": "📋",
    "t": "Palliative care",
    "s": "Case walkthrough · advance care planning",
    "href": "../cases/palliative-care.html"
   },
   {
    "ic": "📋",
    "t": "Heart failure",
    "s": "Case walkthrough · NICE NG106",
    "href": "../cases/heart-failure.html"
   },
   {
    "ic": "📋",
    "t": "Depression",
    "s": "Case walkthrough · mood screening",
    "href": "../cases/depression.html"
   }
  ],
  "pitfalls": {
   "intro": "The form is the easy half of this station. It is failed on wrong law, missed mood screening, and a doctor who either argues with the decision or accepts it without finding Walter and the plan to keep it secret.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Telling him his family must agree, or that a doctor decides for him.",
     "why": "A capacitous patient’s refusal of CPR stands; relatives are not decision-makers. Wrong law is a Tasks fail.",
     "fix": "“This is yours to decide. Michael cannot overturn it. Families are told with your permission.”"
    },
    {
     "dom": "tasks",
     "fail": "Agreeing to the form without screening mood or confirming capacity.",
     "why": "A treatment refusal can be a sign of depression; examiners expect you to check and say so.",
     "fix": "Brief mood screen (sleep, enjoyment, hopelessness, thoughts of ending life) and state capacity aloud."
    },
    {
     "dom": "tasks",
     "fail": "Not correcting the belief that DNACPR stops all treatment.",
     "why": "It has delayed his request for a year and would affect his future choices.",
     "fix": "Explain CPR only; everything else continues. Offer ReSPECT for the wider picture."
    },
    {
     "dom": "rto",
     "fail": "Never asking “why now?”",
     "why": "Walter’s ICU death is the driver; missing it loses the emotional core.",
     "fix": "Ask about the timing and let him tell the story."
    },
    {
     "dom": "rto",
     "fail": "Colluding with the drawer plan, or phoning Michael yourself.",
     "why": "One risks lasting harm to the family; the other breaches confidentiality.",
     "fix": "Test the plan with a question and offer a supported three-way conversation, with his consent."
    },
    {
     "dom": "gs",
     "fail": "Completing everything by phone and ending with “I’ll send you the form.”",
     "why": "A decision the ambulance service cannot see does not protect him.",
     "fix": "Face-to-face appointment, visible copy, record and ambulance flags, and reversibility stated."
    }
   ]
  }
 },
 "dysuria-sti": {
  "stem": {
   "name": "Jordan Walsh",
   "age": "24-year-old man",
   "pmh": [
    "No significant past medical history",
    "No previous urinary tract infections"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "No consultations in the past year. Reception note: asked for “antibiotics for a water infection” — five days of burning on passing urine — and whether the prescription could go to a pharmacy near his work rather than the local one.",
   "reason": "Telephone appointment requesting antibiotics for a suspected urine infection."
  },
  "knowledge": {
   "guideline": "BASHH non-gonococcal urethritis guideline (2026) · BASHH chlamydia guideline (2026) · BASHH gonorrhoea guideline (2025) · BHIVA/BASHH/BIA adult HIV testing guidelines (2020)",
   "summary": "Dysuria with a urethral discharge in a 24-year-old man is urethritis, most often a sexually transmitted infection, until proven otherwise. Test before treating, take a full sexual history without judgement, offer HIV and syphilis testing with honest window periods, and plan partner notification.",
   "points": [
    {
     "h": "Think urethritis, not UTI",
     "t": "UTI is uncommon in young men; dysuria with discharge is urethritis until proven otherwise. Chlamydia and Mycoplasma genitalium are the commonest organisms in non-gonococcal urethritis; gonorrhoea must be excluded (BASHH NGU 2026)."
    },
    {
     "h": "Test before treating",
     "t": "First-void urine NAAT for chlamydia and gonorrhoea — the first part of the stream, ideally at least an hour after last passing urine — plus HIV and syphilis serology. A sexual health clinic can add urethral microscopy and same-day treatment. Blind antibiotics risk the wrong drug, a masked diagnosis and an untreated partner."
    },
    {
     "h": "Window periods",
     "t": "He is symptomatic, so test now. A fourth-generation HIV test detects 99% of infections by 45 days after exposure (BHIVA/BASHH/BIA 2020), so a negative test before then needs repeating after the window. Ten days after exposure, HIV post-exposure prophylaxis is no longer an option."
    },
    {
     "h": "Treatment once diagnosed",
     "t": "NGU or chlamydia: doxycycline 100 mg twice daily for 7 days (BASHH NGU 2026). Gonorrhoea: ceftriaxone 1 g IM, given in sexual health (BASHH gonorrhoea 2025). Avoid sex until he and his partners have completed treatment and follow-up and symptoms have resolved."
    },
    {
     "h": "Partner notification",
     "t": "For urethral chlamydia, contacts since and in the 4 weeks before symptom onset are notified (BASHH chlamydia 2026) — that may include his regular partner. Sexual health services can notify contacts anonymously."
    },
    {
     "h": "Complications",
     "t": "Testicular pain or swelling suggests epididymo-orchitis — same-day assessment; typical STI-related treatment is ceftriaxone 1 g IM plus doxycycline 100 mg twice daily for 14 days (BASHH epididymo-orchitis 2020)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Jordan Walsh? It’s Dr Patel from the surgery. Can I check your date of birth, and are you somewhere private to talk?",
    "dom": "gs",
    "why": "Identity and privacy check on the phone"
   },
   {
    "who": "pt",
    "text": "Yeah, I’m in the car at work. Nothing major, I think it’s just a water infection. Burning when I pee, few days now. Could you send some antibiotics over? Oh — and could it go to the Boots near my work, not the one by the flat? Easier to collect."
   },
   {
    "who": "dr",
    "text": "Thanks, Jordan. I’d like to understand what’s going on first so we get the right treatment, and then we’ll sort out where anything goes. Is that okay?",
    "dom": "gs",
    "why": "Agenda: understanding before prescribing"
   },
   {
    "who": "pt",
    "text": "Sure."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about the burning — when it started and what you’ve noticed.",
    "dom": "rto",
    "why": "Open question first"
   },
   {
    "who": "pt",
    "text": "Five days. Worst first thing in the morning. It stings when I go."
   },
   {
    "who": "dr",
    "text": "Any discharge from the tip of the penis, even a little on your underwear? Any blood, fever, pain in your back or in your testicles?",
    "dom": "tasks",
    "why": "Discharge and red flags for epididymo-orchitis or upper tract infection"
   },
   {
    "who": "pt",
    "text": "Actually… a bit of clear, whitish stuff on my boxers. No blood, no fever. Nothing down there hurts."
   },
   {
    "who": "dr",
    "text": "That’s really helpful. At 24, with no history of water infections, burning with a bit of discharge usually isn’t a urine infection at all — it’s more often an infection of the water pipe itself, the kind that can be passed on through sex. So I need to ask some personal questions. They’re ones I ask everyone, and what you tell me stays between us.",
    "dom": "tasks",
    "why": "Reframes to urethritis calmly and prepares for a sexual history"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "Do you have a regular partner?",
    "dom": "tasks",
    "why": "Starts the sexual history in a neutral, matter-of-fact way"
   },
   {
    "who": "pt",
    "text": "Megan, my girlfriend. Two years. We live together."
   },
   {
    "who": "dr",
    "text": "And in the last few months, any other partners?",
    "dom": "tasks",
    "why": "Asks directly about other partners"
   },
   {
    "who": "pt",
    "text": "(Long silence.)"
   },
   {
    "who": "dr",
    "text": "Take your time. Whatever the answer is, it changes which tests I suggest — not what I think of you.",
    "dom": "rto",
    "why": "Lets the silence finish and removes judgement"
   },
   {
    "who": "pt",
    "text": "…Stag do in Leeds, ten days ago. One night. Someone I met. No condom. I’ve felt sick about it ever since. And me and Megan haven’t — not since then. I keep saying I’ve got a headache."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me — I know that wasn’t easy. Was that vaginal sex only, and do you know anything about her?",
    "dom": "tasks",
    "why": "Completes exposure details: site, contact"
   },
   {
    "who": "pt",
    "text": "Just vaginal. I don’t even know her surname."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Earlier you asked for the prescription to go near work rather than home. I’m not judging that — but I wonder if it’s about Megan finding out?",
    "dom": "rto",
    "why": "Names the pharmacy-swap cue kindly"
   },
   {
    "who": "pt",
    "text": "Yeah. I just wanted it sorted quietly. No tests, nothing she could see."
   },
   {
    "who": "dr",
    "text": "That makes sense. So you know: this conversation is confidential, including from Megan. I won’t contact anyone at home, and results come to you. What’s been worrying you most?",
    "dom": "rto",
    "why": "States confidentiality explicitly, then invites the deeper worry"
   },
   {
    "who": "pt",
    "text": "How long would something take to show up in a test… hypothetically? Even the serious stuff?"
   },
   {
    "who": "dr",
    "text": "When you say the serious stuff — are you thinking about HIV?",
    "dom": "rto",
    "why": "Surfaces the disguised HIV fear"
   },
   {
    "who": "pt",
    "text": "(Quietly.) I’ve been googling at three in the morning. Yeah."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let’s deal with that properly. The chance of HIV from one encounter is genuinely low. A standard blood test can be done now, and it’s reliable from about six weeks after the encounter, so we’d repeat it then if the first is negative. Testing is how the three-in-the-morning worry stops.",
    "dom": "rto",
    "why": "Answers the HIV question honestly with the window period"
   },
   {
    "who": "pt",
    "text": "Okay. That’s… better than I thought."
   },
   {
    "who": "dr",
    "text": "The burning itself is most likely chlamydia or a similar infection, and gonorrhoea is possible. I could send antibiotics blind — but if it’s the wrong one, you stay infectious, we never know what it was, and if Megan is at risk she wouldn’t get treated. A urine sample and a blood test give you an answer instead of a guess.",
    "dom": "tasks",
    "why": "Test-before-treat with reasons that matter to him"
   },
   {
    "who": "pt",
    "text": "Can’t you just treat it? I don’t want it on my record."
   },
   {
    "who": "dr",
    "text": "The quickest and most private option is the sexual health clinic. They see people the same week, often the same day, do all the tests, can usually treat you there and then, and it’s free. Their notes are kept separately and they won’t tell us or anyone else without your permission. Or I can do the urine and blood tests here — your choice.",
    "dom": "tasks",
    "why": "Offers GUM as the discreet fast lane, with a GP option"
   },
   {
    "who": "pt",
    "text": "The clinic sounds better, to be honest."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Good. There are two more things. Until you’ve been tested and treated, and any partners have too, please don’t have sex. And the harder one: if an infection is confirmed, the clinic will talk about who needs to be told — that can include Megan, because some infections are traced back a few weeks before symptoms. They can tell people anonymously, and they’ll help you think it through.",
    "dom": "tasks",
    "why": "Abstinence and honest partner notification"
   },
   {
    "who": "pt",
    "text": "(Pause.) I know. I think I have to tell her anyway. I just don’t know how."
   },
   {
    "who": "dr",
    "text": "That’s your decision to make, in your own time, and the clinic can support you with it. You’ve done the hard part by being honest today.",
    "dom": "rto",
    "why": "Supports without moralising"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you get pain or swelling in a testicle, or a fever, that needs seeing the same day — ring us or go to the clinic. I’ll send you the clinic’s details by text to this number now. If you can’t get an appointment within a few days, ring me and I’ll do the tests here.",
    "dom": "gs",
    "why": "Epididymo-orchitis safety-net and a fallback plan"
   },
   {
    "who": "pt",
    "text": "Okay. Thanks, doctor."
   },
   {
    "who": "dr",
    "text": "Just so I know I’ve explained it clearly — what’s your plan from here?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Book the clinic this week, full tests including HIV, no sex till it’s sorted, repeat the HIV test at six weeks, and ring you if I get pain down there or can’t get seen."
   },
   {
    "who": "dr",
    "text": "Exactly right. Anything else on your mind before we finish?",
    "dom": "rto",
    "why": "Shares the floor"
   },
   {
    "who": "pt",
    "text": "No. Honestly, I feel better than I have all week."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Identity and privacy checked; open question about the symptoms before addressing the prescription request.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Relationship with Megan, living together, the stag weekend, his guilt and fear of discovery.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the pharmacy swap, let the silence finish, and decoded the “hypothetical” testing question.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: a water infection; concern: Megan finding out, and HIV; expectation: a quiet prescription with no tests.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "First-void urine NAAT for chlamydia and gonorrhoea; HIV and syphilis serology; repeat HIV after the 45-day window; GUM for microscopy.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Chlamydia, gonorrhoea, M. genitalium, NGU vs UTI (uncommon at his age); asked about discharge, fever and testicular pain.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for epididymo-orchitis and systemic illness; addressed HIV risk directly.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Urethritis, probably sexually acquired, after unprotected sex ten days ago.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Test before treat; sexual health clinic as the discreet fast route or GP testing; treatment per BASHH once diagnosed.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Abstinence until treated; partner notification including his regular partner where indicated; condom advice.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day review for testicular pain, swelling or fever; clinic details sent; GP fallback; HIV repeat at the window.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Jordan Walsh",
    "age": "24-year-old man",
    "pmh": [
     "No significant past medical history",
     "No previous urinary tract infections"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "No known drug allergies",
    "recent": "No consultations in the past year. Reception note: asked for “antibiotics for a water infection” — five days of burning on passing urine — and whether the prescription could go to a pharmacy near his work rather than the local one.",
    "reason": "Telephone appointment requesting antibiotics for a suspected urine infection."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Identity and agenda",
     "d": "Confirm identity and privacy. He asks for antibiotics and a pharmacy near work — note the second request and set an agenda of understanding first."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Symptoms, discharge, red flags. Reframe to urethritis, then a matter-of-fact sexual history. Let the silence after “other partners?” finish."
    },
    {
     "t": "4–6",
     "h": "ICE and hidden agenda",
     "d": "Name the pharmacy swap kindly; state confidentiality; decode the “hypothetical” question into the HIV fear."
    },
    {
     "t": "6–10",
     "h": "Explain and share",
     "d": "HIV risk and the 45-day window; test before treat; sexual health clinic as the discreet route; abstinence and honest partner notification."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Testicular pain, swelling or fever — same day; clinic details by text; GP fallback; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes trimethoprim or nitrofurantoin for a “UTI” without a sexual history or tests; or takes a sexual history that sounds like an interrogation; misses the pharmacy cue and the HIV fear; no partner notification or safety-net.",
    "pass": "Recognises urethritis, takes a sexual history, arranges chlamydia and gonorrhoea NAAT with HIV and syphilis tests or refers to sexual health, advises abstinence, and safety-nets for epididymo-orchitis.",
    "exc": "All of the above, plus: states confidentiality early; lets the silence finish; finds and answers the HIV fear with the correct window period; frames the sexual health clinic as the discreet fast lane; handles partner notification honestly without moralising; closes with teach-back."
   },
   "avoid": [
    {
     "dont": "“You cheated on your girlfriend, so you need to tell her.”",
     "instead": "“If an infection is confirmed, the clinic will talk about who needs to know — they can do it anonymously and help you think it through.”",
     "why": "Moral judgement ends honesty; the task is clinical partner notification, not a verdict."
    },
    {
     "dont": "“I’ll send some nitrofurantoin to the pharmacy near your work.”",
     "instead": "“A urine sample and a blood test give you an answer instead of a guess — and protect anyone else who might be at risk.”",
     "why": "Blind UTI treatment misses chlamydia and gonorrhoea and leaves him and partners infectious."
    },
    {
     "dont": "“Don’t worry, you won’t have HIV.”",
     "instead": "“The risk from one encounter is low, and a test from about six weeks gives you a reliable answer.”",
     "why": "False certainty doesn’t end 3am googling; an honest risk and a testing plan does."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Relationship and secrecy",
     "t": "Living with a partner of two years; the pharmacy request is secrecy dressed as convenience. Guilt and fear of discovery shape what he will say and whether he tests."
    },
    {
     "h": "Health anxiety",
     "t": "Night-time internet searching about HIV; an honest risk estimate and a testing plan are the treatment for the anxiety."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality",
     "t": "GMC Confidential: good practice in handling patient information (2017): his information is not shared with his partner or anyone else without consent. Sexual health clinics keep their records separately from the GP record."
    },
    {
     "h": "Partner notification",
     "t": "Partner notification is voluntary and can be anonymous through sexual health services; the GP does not contact partners without his consent."
    }
   ],
   "professional": [
    {
     "h": "Non-judgemental care",
     "t": "GMC Good medical practice (2024): do not let personal views about a patient’s lifestyle affect treatment. The sexual history is clinical, not moral."
    },
    {
     "h": "Antimicrobial stewardship",
     "t": "Refusing blind antibiotics is good stewardship and safer care — explain the reasons in terms that matter to him, and offer a quick route to testing."
    }
   ],
   "community": [
    {
     "h": "Sexual health services",
     "t": "Local sexual health (GUM) clinic for free, confidential testing and treatment, often same week; online postal testing kits where commissioned; condoms from sexual health services."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Testicular pain or swelling, or fever — possible epididymo-orchitis, same-day assessment",
     "Systemic illness, loin pain or visible haematuria — reconsider the diagnosis",
     "Unprotected sex with a new partner ten days ago — HIV, syphilis and STI risk"
    ],
    "psychosocial": [
     "Regular partner of two years, living together; no sex since the stag weekend",
     "Guilt and fear that his partner will find out; the pharmacy request",
     "Night-time googling and fear of HIV"
    ],
    "ice": [
     "Idea: “it’s just a water infection”",
     "Concern: his girlfriend finding out; underneath, “could it be HIV?”",
     "Expectation: a quiet prescription near work, no tests, no record"
    ]
   },
   "diagnosis": "Be clear and calm: “Burning with a bit of discharge at your age is most likely an infection of the water pipe, often passed on through sex, rather than a urine infection. The right thing is to test so we treat the right bug.”",
   "diagnosisLay": "“A urine infection is in the bladder; this is more likely in the tube you pee through. Different bug, different treatment — guessing risks using the wrong key for the lock.”",
   "management": {
    "reflectIce": "“You wanted this sorted quietly — the sexual health clinic is the most private route there is, and testing is what ends the three-in-the-morning worrying about HIV.”",
    "psychosocial": "Separate the clinical task from the relationship: confidentiality stated plainly, no moralising, and support to decide what to tell his partner in his own time.",
    "sharedPlan": [
     "Sexual health clinic (or GP) for first-void urine NAAT, HIV and syphilis serology; repeat HIV after 45 days if negative",
     "Treatment per result: doxycycline 100 mg twice daily for 7 days for NGU or chlamydia; ceftriaxone 1 g IM for gonorrhoea in sexual health",
     "No sex until he and partners are treated and followed up; partner notification, anonymous if he wishes"
    ],
    "safetyNet": [
     "Testicular pain or swelling, or fever — same-day review",
     "Clinic details sent by text; ring the GP if he cannot be seen within a few days or symptoms persist after treatment"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Urethritis in men",
    "s": "Protocol · BASHH NGU 2026",
    "href": "management/urethritis-male.html"
   },
   {
    "ic": "🗺️",
    "t": "Penile discharge",
    "s": "Visual algorithm",
    "href": "algorithms/penile-discharge.html"
   },
   {
    "ic": "💠",
    "t": "Chlamydia",
    "s": "Protocol · testing, treatment, partners",
    "href": "management/chlamydia.html"
   },
   {
    "ic": "📋",
    "t": "HIV",
    "s": "Case walkthrough · testing and window periods",
    "href": "../cases/hiv.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by answering the question he asked — “antibiotics for a water infection” — instead of the one he is carrying. The patterns below are the common failing routes, and each is fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing a UTI antibiotic without a sexual history or tests.",
     "why": "Urethritis in a young man is usually chlamydia or another STI; UTI antibiotics may not treat it, and he and his partners stay infectious.",
     "fix": "Reframe to urethritis, take the sexual history, and test before treating — first-void urine NAAT plus HIV and syphilis serology."
    },
    {
     "dom": "tasks",
     "fail": "Testing for HIV without explaining the window, or saying he is “fine” on a test taken at ten days.",
     "why": "A fourth-generation test is reliable at 45 days (BHIVA/BASHH/BIA 2020); an early negative needs repeating.",
     "fix": "Test now and again after the window, and explain why in plain words."
    },
    {
     "dom": "rto",
     "fail": "Asking “any other partners?” and immediately filling the silence or moving on.",
     "why": "The silence is the answer arriving; interrupting it loses the history and suggests discomfort or judgement.",
     "fix": "Wait. Then: “Take your time — whatever the answer, it changes the tests, not what I think of you.”"
    },
    {
     "dom": "rto",
     "fail": "Moralising about the girlfriend, or insisting he must tell her today.",
     "why": "Judgement ends honesty and makes him less likely to test or return.",
     "fix": "State confidentiality, explain partner notification as a clinical process that can be anonymous, and leave the decision to him with support."
    },
    {
     "dom": "gs",
     "fail": "Missing the pharmacy-swap cue and the “hypothetical” question.",
     "why": "These are the planted routes to the hidden agenda; missing them leaves the HIV fear unaddressed.",
     "fix": "Reflect both back gently: “You asked for a pharmacy near work…” and “When you say the serious stuff — are you thinking about HIV?”"
    },
    {
     "dom": "gs",
     "fail": "Closing without a safety-net or a route to testing.",
     "why": "Epididymo-orchitis needs same-day care, and a frightened patient may not book the clinic on his own.",
     "fix": "Name testicular pain, swelling or fever; text the clinic details; offer GP testing if he can’t be seen within a few days."
    }
   ]
  }
 },
 "fit-positive": {
  "stem": {
   "name": "Trevor Bailey",
   "age": "61-year-old man",
   "pmh": [
    "Hypertension",
    "Haemorrhoids (diagnosed in his 40s)",
    "Family history: brother died of bowel cancer aged 66"
   ],
   "meds": [
    "Antihypertensive on repeat"
   ],
   "allergy": "No known drug allergies",
   "recent": "Nurse appointment 3 weeks ago: 8 weeks of looser, more frequent stools and vague lower abdominal discomfort. FIT 47 µg Hb/g faeces (referral threshold 10). FBC: Hb 128 g/L; ferritin 18 µg/L. Two NHS bowel-screening kits not returned. Results not yet given to the patient.",
   "reason": "Telephone call-back booked by the GP to discuss results."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) — suspected colorectal cancer · NICE HTG690 (formerly DG56) — FIT in primary care · BSG iron deficiency anaemia guideline (2021)",
   "summary": "A FIT of 47 µg Hb/g in a man with an eight-week change in bowel habit, weight loss and iron deficiency anaemia meets NICE NG12 (updated April 2026) for a suspected cancer pathway (urgent) lower-GI referral, made on this call. Longstanding piles do not explain the picture.",
   "points": [
    {
     "h": "The referral threshold",
     "t": "NICE NG12 (updated April 2026): refer adults on a suspected cancer pathway for colorectal cancer if FIT is at least 10 µg Hb/g faeces. His result is 47. Do not repeat the FIT to “double-check” — a positive result is acted on."
    },
    {
     "h": "Who should have had FIT",
     "t": "NICE HTG690: FIT guides referral for people with symptoms such as a change in bowel habit, iron deficiency anaemia, or (40 and over) unexplained weight loss with abdominal pain. A low or unreturned FIT does not overrule clinical suspicion — a rectal or abdominal mass still warrants referral."
    },
    {
     "h": "Iron deficiency anaemia in a man",
     "t": "Hb 128 g/L with ferritin 18 µg/L is iron deficiency anaemia. BSG (2021): men with iron deficiency anaemia need lower and upper GI investigation — the endoscopists will plan this. Start oral iron (dose per BNF) and recheck the FBC."
    },
    {
     "h": "Piles are not the explanation",
     "t": "Haemorrhoids can explain bright-red blood on the paper; they do not explain eight weeks of looser stools, unintentional weight loss or iron deficiency. Anchoring on a known benign diagnosis is the classic delay in colorectal cancer."
    },
    {
     "h": "What the pathway means",
     "t": "Suspected cancer pathway referral (still widely called the two-week wait). Since October 2023 the NHS England Faster Diagnosis Standard aims for cancer to be diagnosed or ruled out within 28 days of referral. Usually colonoscopy (bowel preparation, sedation offered, a morning out) or CT colonography."
    },
    {
     "h": "Honest hope",
     "t": "Most people referred with a positive FIT do not have cancer, and bowel cancer found early is often curable. His brother’s late diagnosis is the reason to move quickly, not a prediction."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Mr Trevor Bailey? It’s Dr Okafor from the surgery. Can I just check your date of birth — and are you somewhere you can talk privately for ten minutes or so?",
    "dom": "gs",
    "why": "Telephone identity and privacy check before results"
   },
   {
    "who": "pt",
    "text": "Yes, that’s me — I’m in the van. Look, before you start, if this is about that sample test, I’m pretty sure it’s just my piles playing up. I’ve had them for years. I’m flat out this month, so if we can keep this quick…"
   },
   {
    "who": "dr",
    "text": "I’ll be as clear and quick as I can, and I’m glad you’re parked up. Yes, it’s about the stool test and your blood test. I’d like to give you the results, hear what you make of them, and agree what happens next. Is that alright?",
    "dom": "gs",
    "why": "Acknowledges his time pressure and sets a clear agenda"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Giving the result",
    "clock": "1–3 min",
    "who": "dr",
    "text": "The stool test looks for tiny amounts of blood you can’t see. The level at which we investigate is 10, and yours came back at 47. Your blood test also shows you’re a little anaemic and low in iron. Together with the change in your bowels, that means this needs looking into properly, and soon.",
    "dom": "tasks",
    "why": "Gives the number early and plainly, with its meaning"
   },
   {
    "who": "pt",
    "text": "(Long pause.)"
   },
   {
    "who": "dr",
    "text": "(Waits.) I know that’s not what you wanted to hear. Take your time.",
    "dom": "rto",
    "why": "Holds the silence rather than filling it"
   },
   {
    "who": "pt",
    "text": "…Right. Well. It’ll be the piles, though, won’t it? They bleed all the time."
   },
   {
    "phase": "Data gathering",
    "clock": "3–5 min",
    "who": "dr",
    "text": "They may well play a part. Can I check a few things so I’ve got the full picture? How are your bowels now compared with before all this?",
    "dom": "tasks",
    "why": "Updates the history before deciding"
   },
   {
    "who": "pt",
    "text": "Two or three times most mornings, looser. Used to be once. Bit of mucus sometimes. Nothing black."
   },
   {
    "who": "dr",
    "text": "Any weight loss, or feeling more tired than usual?",
    "dom": "tasks",
    "why": "Screens systemic features"
   },
   {
    "who": "pt",
    "text": "Belt’s a notch tighter — maybe half a stone. I put that down to being busy. And I’m wiped out in the afternoons."
   },
   {
    "who": "dr",
    "text": "Any tummy swelling, vomiting, or times you couldn’t open your bowels at all?",
    "dom": "tasks",
    "why": "Excludes obstruction needing same-day action"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. Appetite’s a bit down, that’s all."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "When you first saw the nurse, you mentioned your brother had no luck with his insides. Would you tell me what happened to him?",
    "dom": "rto",
    "why": "Follows the oblique cue to the real fear"
   },
   {
    "who": "pt",
    "text": "Raymond. Bowel cancer. By the time they found it they opened him up and closed him again. He was 66. I watched all of it. I’ve not been near a doctor much since, if I’m honest. Binned the screening kits too."
   },
   {
    "who": "dr",
    "text": "I’m so sorry — that’s a very hard thing to have watched, and it makes complete sense that you’d rather not look. Is that what’s been in the back of your mind with these results?",
    "dom": "rto",
    "why": "Validates the fear and lets it be named"
   },
   {
    "who": "pt",
    "text": "If it’s what he had, I don’t want to know. That’s the truth. I was hoping you’d say cream for the piles and that’s it."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "Thank you for being honest. Here’s my honest view back. Piles can explain blood on the paper. They don’t make you lose half a stone, they don’t drop your iron, and they don’t change your mornings for eight weeks. I’d be failing you if I put all of this down to piles.",
    "dom": "tasks",
    "why": "Dismantles the piles explanation clearly but kindly"
   },
   {
    "who": "pt",
    "text": "So you think it’s cancer."
   },
   {
    "who": "dr",
    "text": "I don’t know, and that’s exactly why we test. Most people with a result like yours turn out not to have cancer. But here is the difference from Raymond: his was found late. This test exists so that, if there is something, it’s found early — when bowel cancer is very often curable. Your story doesn’t have to be his.",
    "dom": "rto",
    "why": "Reframes the brother’s story as the reason for testing"
   },
   {
    "who": "pt",
    "text": "(Quietly.) Right."
   },
   {
    "who": "dr",
    "text": "So I’d like to refer you today on the urgent suspected cancer pathway — what people call the two-week wait. The hospital will contact you, usually within a couple of weeks, and the aim is an answer within about four weeks. The test is usually a camera examination of the bowel: you take a bowel-clearing drink the day before, you’re offered sedation, and it takes a morning.",
    "dom": "tasks",
    "why": "Urgent NICE NG12 (updated April 2026) referral on the call, with the test explained honestly"
   },
   {
    "who": "pt",
    "text": "A morning. I’ve got two lads depending on me and a roof to finish."
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "I hear that. It’s one morning, plus a quieter day before for the preparation, and you won’t be able to drive after sedation, so you’d need a lift. Could someone cover the job for that day? Your lads need you well for the next twenty years more than they need you on that roof for one morning.",
    "dom": "rto",
    "why": "Addresses the work barrier concretely"
   },
   {
    "who": "pt",
    "text": "Mick could run it for a day, I suppose. Fair enough."
   },
   {
    "who": "dr",
    "text": "Good. I’ll also start you on iron tablets for the anaemia — they can darken your stools, which is expected — and we’ll recheck your blood count. Is your mobile the best number for the hospital to reach you?",
    "dom": "tasks",
    "why": "Treats the iron deficiency and secures contact details"
   },
   {
    "who": "pt",
    "text": "Yes, the mobile. Always on me."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you haven’t heard from the hospital within a week, ring me — don’t sit on it. And if you get heavy bleeding, or severe tummy pain with swelling and you can’t open your bowels or you’re vomiting, that’s A&E the same day. I’ll ring you after the test either way.",
    "dom": "gs",
    "why": "Chase-the-letter rule, emergency triggers and a named follow-up"
   },
   {
    "who": "pt",
    "text": "Right. Thanks, doc. Wasn’t the call I was expecting."
   },
   {
    "who": "dr",
    "text": "I know. Just so I’m sure I’ve explained it well — what will you tell your wife tonight?",
    "dom": "rto",
    "why": "Teach-back that also invites him to share the news"
   },
   {
    "who": "pt",
    "text": "That the test was positive, it might not be cancer, I’m being seen quick for a camera test, iron tablets meanwhile, and if I don’t hear in a week I ring you."
   },
   {
    "who": "dr",
    "text": "Exactly right. And Trevor — ringing me back today, not binning this, is the thing Raymond didn’t get the chance to do. Anything else before I let you go?",
    "dom": "rto",
    "why": "Closes on his motivation and shares the floor"
   },
   {
    "who": "pt",
    "text": "No. Thanks. I’ll tell her tonight."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Confirmed identity and privacy; acknowledged his time pressure; gave the result early rather than burying it.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Self-employed roofer with two employees, married; avoidance of health care and screening since his brother’s death.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Held the silence after the result; followed “my brother had no luck with his insides” to Raymond; heard “keep this quick” as armour.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: it’s the piles; concern: dying as Raymond did, and not wanting to know; expectation: a quick call and some cream.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Recognises FIT, FBC and ferritin are done; no repeat FIT; referral leads to colonoscopy or CT colonography; recheck FBC on iron.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Colorectal cancer vs polyps, inflammatory bowel disease or haemorrhoids; explains why piles cannot account for weight loss and iron deficiency.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about obstruction, heavy bleeding and weight loss; identified the NICE NG12 (updated April 2026) threshold is met.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Positive FIT with change in bowel habit, weight loss and iron deficiency anaemia: suspected colorectal cancer until investigated.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Suspected cancer pathway lower-GI referral today (NICE NG12 (updated April 2026)); honest explanation of colonoscopy; practical plan around work.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Oral iron for iron deficiency anaemia; notes the missed screening kits and family history for later discussion.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Ring if no contact within a week; A&E for heavy bleeding or obstruction; GP call after the test; contact number confirmed.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Trevor Bailey",
    "age": "61-year-old man",
    "pmh": [
     "Hypertension",
     "Haemorrhoids (diagnosed in his 40s)",
     "Family history: brother died of bowel cancer aged 66"
    ],
    "meds": [
     "Antihypertensive on repeat"
    ],
    "allergy": "No known drug allergies",
    "recent": "Nurse appointment 3 weeks ago: 8 weeks of looser, more frequent stools and vague lower abdominal discomfort. FIT 47 µg Hb/g faeces (referral threshold 10). FBC: Hb 128 g/L; ferritin 18 µg/L. Two NHS bowel-screening kits not returned. Results not yet given to the patient.",
    "reason": "Telephone call-back booked by the GP to discuss results."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Identity and agenda",
     "d": "Confirm identity and privacy (he is in his van). He tries to close the call before it starts — acknowledge the time pressure and set the agenda."
    },
    {
     "t": "1–3",
     "h": "Give the result",
     "d": "The number, what the test measures and that it needs investigating — then stop and hold the silence."
    },
    {
     "t": "3–7",
     "h": "Focused history and ICE",
     "d": "Bowel habit, weight, fatigue, obstruction symptoms. Follow the brother cue to Raymond and let the fear be said."
    },
    {
     "t": "7–10",
     "h": "Explain and refer",
     "d": "Why piles don’t explain it; Raymond was found late; suspected cancer pathway referral today; what colonoscopy involves; solve the work barrier."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Iron tablets; ring if no contact in a week; A&E triggers; GP call after the test; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Delays the result behind small talk or softens it to “probably nothing”; accepts “it’s just piles”; offers a repeat FIT or routine referral; never finds Raymond; no safety-net or chase instruction.",
    "pass": "Gives the result plainly, recognises the NICE NG12 (updated April 2026) threshold is met and makes a suspected cancer pathway referral on the call, explains colonoscopy, and safety-nets with a follow-up.",
    "exc": "All of the above, plus: holds the silence after the number; finds Raymond and turns the late diagnosis into the reason for testing; explains kindly why piles cannot account for the weight loss and anaemia; solves the work problem practically; closes with teach-back and a named call after the test."
   },
   "avoid": [
    {
     "dont": "“I’m sure it’s nothing to worry about, but we’ll get it checked.”",
     "instead": "“Most people with this result don’t have cancer — but it needs looking at properly and quickly, and I want to refer you today.”",
     "why": "False reassurance undermines the urgency and gives him permission not to attend."
    },
    {
     "dont": "“It could well be the piles — let’s repeat the test to be sure.”",
     "instead": "“Piles don’t make you lose half a stone or drop your iron. Something else needs explaining.”",
     "why": "Repeating a positive FIT, or letting the anchor stand, delays a cancer diagnosis."
    },
    {
     "dont": "“With your brother’s history, you really should have done the screening kits.”",
     "instead": "“After watching what Raymond went through, it makes sense you’d rather not look. This call is the chance to make your story different.”",
     "why": "Blame hardens avoidance; understanding turns it into a reason to act."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Self-employed and the business",
     "t": "Runs a roofing firm with two employees; time off feels impossible. Plan the practicalities — cover for the procedure day, a lift home after sedation — rather than dismissing them."
    },
    {
     "h": "Bereavement and avoidance",
     "t": "Watching his brother die after a late diagnosis led to four years of avoiding health care and screening. Understanding that pattern is the key to getting him to attend."
    }
   ],
   "legal": [
    {
     "h": "Fit notes and income",
     "t": "Self-employed people do not get Statutory Sick Pay; if he needs time off later he may claim New Style ESA or Universal Credit, which need a fit note. A single procedure day does not need one."
    },
    {
     "h": "Driving after sedation",
     "t": "If he has sedation for colonoscopy he must not drive for the rest of that day — he will need a lift home."
    }
   ],
   "professional": [
    {
     "h": "Honest information",
     "t": "GMC Good medical practice (2024) and Decision making and consent (2020): share information he needs honestly, without false reassurance, while respecting his pace. If he declined referral, check understanding, document it and keep the door open."
    },
    {
     "h": "Safety-netting and results",
     "t": "Practice systems should track suspected cancer referrals to confirm he is seen. Document the result given, the referral, the safety-net and the follow-up plan."
    }
   ],
   "community": [
    {
     "h": "Patient resources",
     "t": "Bowel Cancer UK and Macmillan Cancer Support for information while waiting; the NHS Bowel Cancer Screening Programme for future home kits once this episode is settled."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "FIT 47 µg Hb/g (threshold 10) with an eight-week change in bowel habit — NICE NG12 (updated April 2026) suspected cancer pathway referral",
     "Unintentional weight loss (about half a stone) and iron deficiency anaemia (Hb 128 g/L, ferritin 18 µg/L)",
     "Obstruction symptoms (colicky pain, distension, absolute constipation, vomiting) or heavy bleeding — same-day A&E"
    ],
    "psychosocial": [
     "Self-employed roofer; two employees depend on him",
     "Brother Raymond died of late-diagnosed bowel cancer; avoided health care and two screening kits since",
     "Married with adult children — who can support him and drive him home after the procedure"
    ],
    "ice": [
     "Idea: “it’s the piles — the test picked up the piles blood”",
     "Concern: Raymond — “if it’s what he had, I don’t want to know”",
     "Expectation: a quick reassuring call, maybe a cream; not a camera test"
    ]
   },
   "diagnosis": "Be direct and honest: “Your stool test is well above the level where we investigate, and with the change in your bowels, the weight loss and low iron, I need to refer you urgently to rule out bowel cancer. Most people with this result don’t have cancer — but this is how we find out.”",
   "diagnosisLay": "“Think of the test as a smoke alarm. It’s gone off, and your bowels, weight and iron all suggest there’s some smoke. Most of the time it’s burnt toast — but you never ignore the alarm, and the sooner you look, the easier it is to put out.”",
   "management": {
    "reflectIce": "“You watched Raymond’s cancer found too late. That’s exactly why I want to move fast for you — so if there is anything, it’s found early, when it’s very often curable.”",
    "psychosocial": "Plan around the business: one morning plus preparation, a lift after sedation, someone covering the job — and name that his employees need him well for the long term.",
    "sharedPlan": [
     "Suspected cancer pathway (urgent) lower-GI referral today — NICE NG12 (updated April 2026)",
     "Colonoscopy or CT colonography explained honestly; no repeat FIT",
     "Oral iron (dose per BNF) and a repeat FBC; upper GI assessment to be planned by the endoscopy team (BSG 2021)"
    ],
    "safetyNet": [
     "Ring if no contact from the hospital within a week",
     "A&E the same day for heavy bleeding or obstruction symptoms; GP call after the test regardless of result"
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
    "ic": "💠",
    "t": "Iron deficiency anaemia",
    "s": "Protocol · investigation and iron replacement",
    "href": "management/iron-deficiency-anaemia.html"
   },
   {
    "ic": "🗺️",
    "t": "Weight loss",
    "s": "Visual algorithm · unexplained weight loss",
    "href": "algorithms/weight-loss.html"
   },
   {
    "ic": "📋",
    "t": "Anaemia",
    "s": "Case walkthrough",
    "href": "../cases/anaemia.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by kindness in the wrong place: softening the result, letting “it’s just piles” stand, or deferring the referral to spare his feelings. The patterns below are the common failing routes, and each is fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting the piles explanation and offering a cream, or a repeat FIT “to be sure”.",
     "why": "NICE NG12 (updated April 2026): FIT of at least 10 µg Hb/g warrants a suspected cancer pathway referral. Piles do not explain weight loss, iron deficiency or a changed bowel habit.",
     "fix": "Name the threshold and his result, explain kindly why piles can’t account for everything, and refer on this call."
    },
    {
     "dom": "tasks",
     "fail": "Treating the anaemia as a side issue — or starting iron and leaving it there.",
     "why": "Iron deficiency anaemia in a man always needs a GI explanation (BSG 2021); iron alone can mask the clue.",
     "fix": "Start oral iron alongside the referral, say why, and recheck the FBC."
    },
    {
     "dom": "rto",
     "fail": "Filling the silence after the result with reassurance and statistics.",
     "why": "The silence is where he absorbs the news; rushing it reads as not listening and closes the route to Raymond.",
     "fix": "Give the number, stop, and wait. Then ask what’s going through his mind."
    },
    {
     "dom": "rto",
     "fail": "Never finding Raymond, so the plan feels like the start of his brother’s story.",
     "why": "The fear of dying as Raymond did drives his avoidance; unaddressed, it makes a missed appointment likely.",
     "fix": "Follow the “no luck with his insides” cue, let him tell it, then reframe: Raymond was found late; this test is how Trevor is found early."
    },
    {
     "dom": "gs",
     "fail": "Using jargon on the phone — “your qFIT is positive, I’m doing a 2WW for a scope”.",
     "why": "Unexplained terms leave him unsure what is happening and why; on the phone there are no visual cues to show confusion.",
     "fix": "Plain language: “a test for hidden blood”, “an urgent referral to the bowel specialists”, “a camera test with sedation”."
    },
    {
     "dom": "gs",
     "fail": "Ending without a chase instruction or emergency triggers.",
     "why": "Referrals can go astray, and a man who avoids doctors will not ring to ask where his appointment is.",
     "fix": "“If you haven’t heard in a week, ring me.” Name heavy bleeding and obstruction symptoms as A&E triggers, and book your own call after the test."
    }
   ]
  }
 },
 "haematuria-2ww": {
  "stem": {
   "name": "Victor Aldridge",
   "age": "67-year-old man",
   "pmh": [
    "Hypertension",
    "Ex-smoker — 30 pack-years, stopped 5 years ago"
   ],
   "meds": [
    "Ramipril (dose as per repeat)",
    "Multivitamin (bought over the counter, recently started)"
   ],
   "allergy": "No known drug allergies",
   "recent": "No recent consultations. Not on anticoagulants or antiplatelets. Retired painter and decorator. Telephone appointment booked this morning: “pink urine last week — wife insisted I ring”.",
   "reason": "Telephone appointment about discoloured urine."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) — bladder, renal and prostate cancer · NHS England Faster Diagnosis Standard (October 2023)",
   "summary": "Unexplained visible haematuria at 45 or over, without a urinary tract infection, meets NICE NG12 (updated April 2026) for a suspected cancer pathway urology referral — made on the day, not deferred for a beetroot story, test results or a holiday. Smoking and decorating work add to his risk.",
   "points": [
    {
     "h": "The NICE NG12 (updated April 2026) thresholds",
     "t": "NICE NG12 (updated April 2026): refer on a suspected cancer pathway for bladder or renal cancer if aged 45 or over with unexplained visible haematuria without urinary tract infection, or visible haematuria that persists or recurs after successful UTI treatment. Aged 60 or over with unexplained non-visible haematuria plus dysuria or a raised white cell count: also refer."
    },
    {
     "h": "Recurrent UTI is a different route",
     "t": "NICE NG12 (updated April 2026): consider a non-urgent referral for bladder cancer in people aged 60 and over with recurrent or persistent unexplained UTI. Do not confuse this with the urgent visible-haematuria criterion."
    },
    {
     "h": "Is it really blood?",
     "t": "Beetroot, some drugs (for example rifampicin) and some foods can colour urine, but whole-stream red urine on two occasions should be treated as haematuria. A urine test for blood and a culture help; neither should delay the referral. Anticoagulants never explain visible haematuria away."
    },
    {
     "h": "Risk factors to record",
     "t": "Smoking is the leading modifiable risk factor for bladder cancer; occupational exposure to paints, dyes and solvents adds risk. Take a pack-year and occupational history."
    },
    {
     "h": "The prostate too",
     "t": "NICE NG12 (updated April 2026): consider a PSA test and digital rectal examination in men with visible haematuria, and in men with lower urinary tract symptoms. His slow stream is another reason to offer this, with PSA counselling."
    },
    {
     "h": "What happens next",
     "t": "Flexible cystoscopy under local anaesthetic, usually with upper-tract imaging such as CT urography; check U&E and eGFR before contrast. The Faster Diagnosis Standard aims for cancer to be diagnosed or ruled out within 28 days of referral. Most people referred with haematuria do not have cancer."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Mr Victor Aldridge? It’s Dr Clarke from the surgery. Could you confirm your date of birth, and are you somewhere you can talk?",
    "dom": "gs",
    "why": "Telephone identity and privacy check"
   },
   {
    "who": "pt",
    "text": "Yes, I’m in the garden. Morning, doctor — bit of a fuss over nothing, this. The wife saw a bit of colour in the bowl and won’t let it go. I’ve been having beetroot with my lunches, you see, and these new vitamin tablets. You know how the wives are. Quick once-over and we’ll say no more about it?"
   },
   {
    "who": "dr",
    "text": "I’m glad you rang, Victor. Let me ask a few questions about what you saw, then I’ll tell you honestly what I think and what I’d suggest. Is that alright?",
    "dom": "gs",
    "why": "Sets a clear agenda without accepting the deflection"
   },
   {
    "who": "pt",
    "text": "Fire away. And it’s Vic."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me exactly what you saw, Vic.",
    "dom": "rto",
    "why": "Open question about the symptom"
   },
   {
    "who": "pt",
    "text": "Twice last week. Pinkish. Gone by the next day."
   },
   {
    "who": "dr",
    "text": "Was the colour through the whole stream, or just at the start or end? Any clots, pain, burning or fever?",
    "dom": "tasks",
    "why": "Characterises the haematuria and screens for infection"
   },
   {
    "who": "pt",
    "text": "Whole stream. No pain at all, no burning, no fever. No clots. (Pause.) Well — it was red-ish. Properly red, I suppose, the second time."
   },
   {
    "who": "dr",
    "text": "Thank you, that’s important. Any injury, and do you take anything that thins the blood — aspirin, warfarin or similar?",
    "dom": "tasks",
    "why": "Trauma and anticoagulant screen"
   },
   {
    "who": "pt",
    "text": "No knocks. Just my blood pressure tablet, ramipril, and the vitamins."
   },
   {
    "who": "dr",
    "text": "How’s your stream generally, and any weight loss or getting up at night?",
    "dom": "tasks",
    "why": "LUTS and systemic symptoms"
   },
   {
    "who": "pt",
    "text": "Bit slower the last year or two. Normal at my age, isn’t it? No weight loss."
   },
   {
    "who": "dr",
    "text": "And I see you used to smoke. How much, and what work did you do?",
    "dom": "tasks",
    "why": "Pack-years and occupational exposure"
   },
   {
    "who": "pt",
    "text": "Twenty a day for thirty years; stopped five years back. Painter and decorator, forty years. Paints, thinners, the lot."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Vic, you’ve told me this is your wife’s worry — but you rang, and you remember the colour each time. Has blood in the water ever meant something to someone you knew?",
    "dom": "rto",
    "why": "Challenges the deflection gently and opens the door"
   },
   {
    "who": "pt",
    "text": "(Flat pause.) My best mate, Stan. Bladder cancer. Eighteen months from the first sign to the funeral. First sign was blood in the water. I’ve thought of nothing else since the second time."
   },
   {
    "who": "dr",
    "text": "I’m really sorry about Stan. That’s a heavy thing to be carrying — and it explains the last week. Does Pam know how worried you are?",
    "dom": "rto",
    "why": "Acknowledges the fear and explores the secret"
   },
   {
    "who": "pt",
    "text": "She saw the first one. Not the second. Straight question, doctor — is this what Stan had?"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Straight answer, since you asked straight. It’s the same symptom Stan had, and that’s exactly why we move quickly. But it isn’t the same story. Most men I refer with this don’t have cancer at all, and when it is bladder cancer found at this stage, it’s often very treatable.",
    "dom": "rto",
    "why": "Answers the real question honestly"
   },
   {
    "who": "pt",
    "text": "So what happens?"
   },
   {
    "who": "dr",
    "text": "Beetroot’s a fair thought, but proper red through the whole stream, twice, isn’t something I can put down to vegetables. The rule I follow is simple: visible blood in the urine, over 45, with no infection to explain it, gets an urgent referral to the bladder specialists. I’ll send it today.",
    "dom": "tasks",
    "why": "Retires the beetroot story and states the NICE NG12 (updated April 2026) threshold"
   },
   {
    "who": "pt",
    "text": "Today? Right."
   },
   {
    "who": "dr",
    "text": "They’ll usually do a camera test of the bladder — a thin flexible tube, with numbing gel, over in a few minutes, home the same day — and a scan of the kidneys. Before then I’d like a urine sample to check for infection, a blood test for your kidneys and blood count, and a blood pressure check. Because your stream is slower, I’d also like to discuss a prostate blood test and examination — we can talk through the pros and cons when you come in.",
    "dom": "tasks",
    "why": "Explains investigations; MSU, U&E and FBC without delaying; PSA per NICE NG12 (updated April 2026)"
   },
   {
    "who": "pt",
    "text": "The thing is… we’ve got a cruise. Golden wedding. Leaves in five weeks. Can it wait till we’re back?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Congratulations — that’s worth protecting. And five weeks actually works in your favour. The hospital should be in touch within a couple of weeks, and the aim is for an answer within four. You could board that ship knowing, instead of carrying a secret. Waiting until you’re back is the only version I’d genuinely worry about.",
    "dom": "rto",
    "why": "Solves the cruise concretely and turns it into a reason to go"
   },
   {
    "who": "pt",
    "text": "Knowing. Yes. I’d rather that."
   },
   {
    "who": "dr",
    "text": "One practical thing — tell your travel insurer about the tests; most want to know about investigations that are under way. And Pam: you’ve carried this on your own for a week. That’s your decision, but it sounds like a heavy thing to hold alone.",
    "dom": "rto",
    "why": "Practical advice and gentle encouragement to share with his wife"
   },
   {
    "who": "pt",
    "text": "You’re right. I’ll tell her tonight."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you can’t pass water at all, or it’s running heavily red with clots, that’s A&E the same day — don’t wait for the appointment. If you haven’t heard from the hospital within a week, ring me. And I’ll call you after the camera test, whatever it shows.",
    "dom": "gs",
    "why": "Clot retention and heavy bleeding triggers; chase-the-letter; named follow-up"
   },
   {
    "who": "pt",
    "text": "Right you are."
   },
   {
    "who": "dr",
    "text": "So I know I’ve explained it properly — what will you tell Pam tonight?",
    "dom": "rto",
    "why": "Teach-back framed around his real conversation"
   },
   {
    "who": "pt",
    "text": "That it was proper blood, twice. Urgent referral today — camera test, probably before the cruise. Urine and bloods this week. A&E if I can’t pee or there’s clots. And most of the time it isn’t cancer."
   },
   {
    "who": "dr",
    "text": "That’s it exactly. Anything else before we finish?",
    "dom": "rto",
    "why": "Shares the floor"
   },
   {
    "who": "pt",
    "text": "No. Thank you, doctor. I feel lighter, oddly."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Identity checked; heard the deflection without accepting it; open question about exactly what he saw.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Retired decorator, married to Pam, golden-wedding cruise in five weeks; Stan’s death.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Heard “you know how the wives are” as armour; the flat pause that brought Stan; the cruise mentioned in passing.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: beetroot and vitamins (not truly believed); concern: the same fate as Stan; expectation: that it can wait until after the cruise.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "MSU for culture and urine test for blood, U&E and eGFR, FBC, BP; PSA and DRE discussed (NICE NG12 (updated April 2026)); referral not delayed for results.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Bladder or renal cancer vs UTI, stones, prostate cause or pigment; smoking and occupational exposure recorded.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Characterised whole-stream painless visible haematuria; screened for infection, trauma, anticoagulants, clots and weight loss.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Unexplained painless visible haematuria at 67 in an ex-smoker: suspected urological cancer until investigated.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Suspected cancer pathway urology referral today (NICE NG12 (updated April 2026)); cystoscopy and imaging explained; the cruise timeline addressed.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Slow stream and PSA discussion; BP review; travel-insurance advice; encouraged honesty with Pam.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "A&E for clot retention or heavy bleeding; ring if no contact within a week; named GP call after cystoscopy.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Older adults"
   ],
   "stem": {
    "name": "Victor Aldridge",
    "age": "67-year-old man",
    "pmh": [
     "Hypertension",
     "Ex-smoker — 30 pack-years, stopped 5 years ago"
    ],
    "meds": [
     "Ramipril (dose as per repeat)",
     "Multivitamin (bought over the counter, recently started)"
    ],
    "allergy": "No known drug allergies",
    "recent": "No recent consultations. Not on anticoagulants or antiplatelets. Retired painter and decorator. Telephone appointment booked this morning: “pink urine last week — wife insisted I ring”.",
    "reason": "Telephone appointment about discoloured urine."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Identity and agenda",
     "d": "Confirm identity. He minimises (“the wife’s worry”, beetroot) — set an agenda without agreeing it’s nothing."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Whole stream, painless, twice, “properly red”; infection, trauma, anticoagulants; slow stream; pack-years and decorating work."
    },
    {
     "t": "4–6",
     "h": "ICE and hidden agenda",
     "d": "Gently challenge the deflection and find Stan. Answer “is this what Stan had?” honestly."
    },
    {
     "t": "6–10",
     "h": "Explain and share",
     "d": "Retire the beetroot story; NICE NG12 (updated April 2026) threshold; referral today; cystoscopy and imaging; MSU, bloods, PSA discussion. Solve the cruise and mention travel insurance."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Clot retention or heavy bleeding — A&E; ring if nothing in a week; call after the camera test; teach-back via what he’ll tell Pam."
    }
   ],
   "wordPics": {
    "fail": "Accepts the beetroot explanation or defers referral until after the cruise; waits for urine results before referring; never finds Stan; offers bland reassurance; no safety-net.",
    "pass": "Establishes true visible haematuria, knows the NICE NG12 (updated April 2026) threshold and refers on a suspected cancer pathway today, arranges urine and blood tests, explains cystoscopy, and safety-nets.",
    "exc": "All of the above, plus: challenges the deflection kindly and finds Stan; answers “is this what Stan had?” straight and hopefully; turns the cruise into a reason to be investigated now; discusses PSA; supports him to tell Pam; closes with teach-back and a named call."
   },
   "avoid": [
    {
     "dont": "“It’s probably the beetroot — let’s send a urine sample and see.”",
     "instead": "“Proper red through the whole stream, twice, isn’t something I can put down to vegetables — I want you seen urgently.”",
     "why": "Accepting a benign story and waiting on a sample delays a suspected cancer referral."
    },
    {
     "dont": "“Enjoy your cruise and we’ll sort it out when you’re back.”",
     "instead": "“Five weeks works in your favour — you could board that ship with an answer instead of a secret.”",
     "why": "Deferring the referral for convenience is unsafe management."
    },
    {
     "dont": "“Try not to worry — it’s almost certainly nothing.”",
     "instead": "“It’s the same symptom Stan had, which is why we move fast — but most men I refer don’t have cancer.”",
     "why": "He asked for honesty; false reassurance loses his trust and the Relating marks."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Loss and fear",
     "t": "His best friend died of bladder cancer after the same first symptom; he has been frightened alone for a week and has not told his wife about the second episode."
    },
    {
     "h": "The golden-wedding cruise",
     "t": "A long-planned anniversary cruise in five weeks is the real question behind the call; solving the timing is what makes him attend."
    }
   ],
   "legal": [
    {
     "h": "Travel insurance",
     "t": "Most travel insurers require declaration of medical conditions and investigations under way; advise him to tell his insurer about the referral before travelling."
    },
    {
     "h": "Occupational exposure",
     "t": "Record his forty years as a painter and decorator; occupational history matters clinically and may later be relevant to industrial-injury advice if a cancer were diagnosed."
    }
   ],
   "professional": [
    {
     "h": "Honesty and confidentiality",
     "t": "GMC Good medical practice (2024): be honest and open. GMC Confidential (2017): his information is not shared with his wife without his consent — encourage, don’t force, him to tell her."
    },
    {
     "h": "Tracking the referral",
     "t": "Suspected cancer referrals should be tracked by practice systems; document the NICE NG12 (updated April 2026) criterion, the safety-net and the follow-up call."
    }
   ],
   "community": [
    {
     "h": "Patient resources",
     "t": "Fight Bladder Cancer and Macmillan Cancer Support for information while waiting; NHS smoking and stop-smoking support remains relevant to his wider health."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Painless, whole-stream visible haematuria at 45 or over without UTI — NICE NG12 (updated April 2026) suspected cancer pathway referral",
     "Clots, inability to pass urine or heavy persistent bleeding — same-day A&E",
     "Risk factors: 30 pack-years smoking; forty years’ exposure to paints and solvents; slow stream (prostate)"
    ],
    "psychosocial": [
     "Retired decorator, married to Pam; golden-wedding cruise in five weeks",
     "Best friend Stan died of bladder cancer 18 months after the first sign",
     "Has not told Pam about the second episode"
    ],
    "ice": [
     "Idea: beetroot and the new vitamins — officially",
     "Concern: that this is what killed Stan",
     "Expectation: to be told it can wait until after the cruise; underneath, to be taken seriously without panic"
    ]
   },
   "diagnosis": "Be straight: “Proper red urine through the whole stream, twice, with no infection, needs urgent investigation at your age. It isn’t a diagnosis of cancer — most men referred don’t have it — but it’s the one symptom we never sit on.”",
   "diagnosisLay": "“Blood in the urine is like a warning light on the dashboard. Usually it’s something minor, but you don’t drive on for a month to find out — you get it looked at now, while it’s easy to fix.”",
   "management": {
    "reflectIce": "“You asked if this is what Stan had. It’s the same symptom — which is why I’m moving fast — but not the same story: his was found late, and yours won’t be.”",
    "psychosocial": "Make the cruise part of the plan: investigation within the five weeks, travel-insurance advice, and support to share it with Pam.",
    "sharedPlan": [
     "Suspected cancer pathway urology referral today — NICE NG12 (updated April 2026)",
     "MSU for culture and a urine test for blood, U&E and eGFR, FBC, BP — without delaying the referral",
     "PSA and DRE discussed with counselling (NICE NG12 (updated April 2026)); explanation of cystoscopy and imaging"
    ],
    "safetyNet": [
     "Unable to pass urine, clots or heavy persistent bleeding — A&E the same day",
     "Ring if no hospital contact within a week; named GP call after cystoscopy"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Haematuria",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) thresholds",
    "href": "algorithms/haematuria.html"
   },
   {
    "ic": "💠",
    "t": "Male LUTS",
    "s": "Protocol · PSA and prostate assessment",
    "href": "management/male-luts.html"
   },
   {
    "ic": "📋",
    "t": "Male LUTS",
    "s": "Case walkthrough",
    "href": "../cases/male-luts.html"
   },
   {
    "ic": "💠",
    "t": "Benign prostate enlargement",
    "s": "Protocol",
    "href": "management/benign-prostate-enlargement.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by colluding with the deflection — the beetroot, the wife, the cruise — or by being so alarmed that he disengages. The patterns below are the common failing routes, and each is fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting beetroot as the explanation, or sending a urine sample and “seeing”.",
     "why": "Whole-stream red urine twice at 67 meets NICE NG12 (updated April 2026) for a suspected cancer pathway referral; waiting on tests delays it.",
     "fix": "Establish that it was true blood, state the threshold, and refer today while arranging the MSU and bloods in parallel."
    },
    {
     "dom": "tasks",
     "fail": "Deferring the referral until after the cruise.",
     "why": "Convenience is not a reason to delay a suspected cancer pathway; the timeline actually fits before he sails.",
     "fix": "Explain the timescale and make the cruise the reason to go now."
    },
    {
     "dom": "tasks",
     "fail": "Ignoring the slow stream and the occupational history.",
     "why": "NICE NG12 (updated April 2026) advises considering PSA and DRE in men with visible haematuria or LUTS; decorating solvents and smoking add bladder risk.",
     "fix": "Ask about stream and work, record pack-years, and offer a PSA discussion."
    },
    {
     "dom": "rto",
     "fail": "Treating the call as the wife’s anxiety and never finding Stan.",
     "why": "The hidden agenda drives his avoidance; unaddressed, he is more likely to delay or miss the appointment.",
     "fix": "Challenge gently: “You rang, and you remember each time — has blood in the water meant something to someone you knew?”"
    },
    {
     "dom": "rto",
     "fail": "Answering “is this what Stan had?” with “don’t worry, it’s nothing”.",
     "why": "He asked for honesty; false reassurance loses trust and is clinically untrue at this stage.",
     "fix": "Answer straight: same symptom, not the same story; most referrals are not cancer; early bladder cancer is often very treatable."
    },
    {
     "dom": "gs",
     "fail": "No chase instruction or emergency advice.",
     "why": "Clot retention needs same-day care, and a frightened patient may not chase a missing letter.",
     "fix": "Name the A&E triggers, the one-week chase rule, and book your own call after the cystoscopy."
    }
   ]
  }
 },
 "hypercalcaemia-ca": {
  "stem": {
   "name": "Annette Boateng",
   "age": "58-year-old woman",
   "pmh": [
    "Breast cancer 4 years ago — wide local excision and radiotherapy",
    "Last oncology review 14 months ago: no evidence of recurrence"
   ],
   "meds": [
    "Anastrozole 1 mg once daily",
    "Calcium and vitamin D supplement (confirm whether still taking)"
   ],
   "allergy": "No known drug allergies",
   "recent": "Nurse appointment for tiredness, constipation and thirst. Bloods: adjusted calcium 2.82 mmol/L; FBC, U&E and LFTs otherwise unremarkable. No PTH on file.",
   "reason": "Urgent recall by video to discuss blood results."
  },
  "knowledge": {
   "guideline": "NICE NG132 (2019) primary hyperparathyroidism · Society for Endocrinology emergency guidance: acute hypercalcaemia (2016)",
   "summary": "Symptomatic hypercalcaemia in a breast cancer survivor needs same-day assessment, a paired PTH, and same-day contact with oncology. PTH separates bone recurrence from primary hyperparathyroidism.",
   "points": [
    {
     "h": "Grade the number with the symptoms",
     "t": "Adjusted calcium 3.5 mmol/L or above is an emergency; 3.0–3.5 needs same-day assessment; symptomatic hypercalcaemia below 3.0 also needs same-day assessment (Society for Endocrinology 2016). Her 2.82 with thirst, polyuria and constipation is symptomatic."
    },
    {
     "h": "PTH is the fork",
     "t": "NICE NG132: repeat the adjusted calcium if 2.6 or above, and measure PTH with a concurrent adjusted calcium. Raised or unsuppressed PTH suggests primary hyperparathyroidism; suppressed PTH points to a non-PTH cause such as bone metastases."
    },
    {
     "h": "Other bloods",
     "t": "U&E, phosphate, magnesium, ALP, 25-hydroxyvitamin D and FBC. Stop calcium and vitamin D supplements and review thiazides."
    },
    {
     "h": "Recurrence route",
     "t": "With a breast cancer history and new hip pain, phone the breast or acute oncology team the same day; they direct imaging. NICE NG12 (updated April 2026) applies to undiagnosed cancer, not suspected recurrence."
    },
    {
     "h": "Emergency line",
     "t": "Confusion, drowsiness, persistent vomiting, dehydration, AKI or calcium 3.5 or above → emergency admission for IV fluids and specialist treatment. Community IV fluids are not appropriate."
    },
    {
     "h": "Supportive care",
     "t": "Encourage oral fluids unless restricted, treat constipation, and review analgesia for the hip, doses per BNF."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Boateng, I’m Dr Lee. Thank you for joining so quickly. Are you somewhere private where you can talk?",
    "dom": "gs",
    "why": "Confirms privacy before sensitive results"
   },
   {
    "who": "pt",
    "text": "I am. Before you say anything — nobody rings the next day for something ordinary. It’s the calcium, or the cancer, or both. Don’t wrap it in ribbon. But whatever this is, it waits until the twenty-first. My daughter gets married in ten days."
   },
   {
    "who": "dr",
    "text": "No ribbon, I promise. And congratulations — I’ve heard the wedding, and I’ll plan with it in mind, not against it. Can I first ask a few questions so what I tell you is accurate?",
    "dom": "rto",
    "why": "Acknowledges both her instruction and her agenda before the clinical content"
   },
   {
    "who": "pt",
    "text": "Go on."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me what you’ve noticed over the last few weeks.",
    "dom": "rto",
    "why": "Open question to hear her account"
   },
   {
    "who": "pt",
    "text": "Six weeks of bone-deep tiredness. Constipated, which I’ve never been. Thirsty all the time, up twice a night to the loo. I’ve blamed wedding stress."
   },
   {
    "who": "dr",
    "text": "Any pain anywhere, particularly in your bones or back?",
    "dom": "tasks",
    "why": "Targets bone symptoms suggestive of metastatic disease"
   },
   {
    "who": "pt",
    "text": "A dull ache in my right hip. A few weeks."
   },
   {
    "who": "dr",
    "text": "Any confusion, being sick, feeling very drowsy, or struggling to keep fluids down? And are you still taking the calcium and vitamin D tablets alongside the anastrozole?",
    "dom": "tasks",
    "why": "Screens for severe hypercalcaemia and contributory supplements"
   },
   {
    "who": "pt",
    "text": "No sickness or confusion. Yes, I take the calcium one every day."
   },
   {
    "who": "dr",
    "text": "Thank you. Any new breast or scar changes, lumps under the arm, cough or breathlessness?",
    "dom": "tasks",
    "why": "Screens for local and other distant recurrence"
   },
   {
    "who": "pt",
    "text": "I stopped checking the scar. Checking felt like inviting it back."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "That makes sense. It sounds like you’ve been carrying a suspicion for a while. What have you been thinking this is?",
    "dom": "rto",
    "why": "Explores her idea behind the cue"
   },
   {
    "who": "pt",
    "text": "That it’s back, in the bones. I read the leaflet. I googled it at two in the morning and shut the laptop. Nobody knows — not even Kofi."
   },
   {
    "who": "dr",
    "text": "Six weeks alone with that is a heavy thing to hold, especially while organising a wedding. What matters most to you about the next ten days?",
    "dom": "rto",
    "why": "Validates and elicits the priority behind the agenda"
   },
   {
    "who": "pt",
    "text": "I will not be the diagnosis at that wedding. One day, standing straight in church. Tell me honestly — if it’s back, do ten days matter?"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Straight answer. Your calcium is 2.82. That’s raised, and high enough to explain the thirst, constipation and tiredness. It has two main causes in you. The cancer returning in bone is one, and I won’t pretend it isn’t on the list. The other is an overactive parathyroid gland, which is common, benign and treatable. One blood test, the parathyroid hormone, separates them.",
    "dom": "tasks",
    "why": "Gives the number, both differentials and the deciding test"
   },
   {
    "who": "pt",
    "text": "So it might not be the cancer."
   },
   {
    "who": "dr",
    "text": "It might not. I can’t tell you which yet, and I won’t guess. What I can tell you is what ten days cost. For the tests: nothing, because they fit inside them. For ignoring it: calcium can climb, and the version that ruins the wedding is feeling confused and being sick at the reception, not a blood test this week.",
    "dom": "rto",
    "why": "Answers her real question honestly and links it to her goal"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Because you have symptoms, I’d like to see you in person today — to check your hydration and your hip, and take repeat calcium, parathyroid hormone, kidney tests, vitamin D and a blood count. And I’ll ring your oncology team myself today, so they know before any letter does.",
    "dom": "tasks",
    "why": "Same-day assessment for symptomatic hypercalcaemia; urgent oncology contact by the GP"
   },
   {
    "who": "pt",
    "text": "Today. Fine. But I’m not going into hospital before the twenty-first."
   },
   {
    "who": "dr",
    "text": "Here’s my offer. Tests before the wedding; decisions about treatment can respect it, and the oncology team will talk that through with you. The one line I can’t move: if the repeat calcium is 3.5 or more, or you become confused, keep vomiting or can’t drink, that’s hospital the same day, wedding or not. Between 3.0 and 3.5, you’d need assessing in hospital the same day. Below that, we manage it together.",
    "dom": "tasks",
    "why": "States the escalation thresholds out loud and negotiates within them"
   },
   {
    "who": "pt",
    "text": "That’s fair. That’s a deal I can make."
   },
   {
    "who": "dr",
    "text": "Meanwhile, stop the calcium and vitamin D tablet, drink plenty of water, and I’ll give you a laxative. And Kofi — you can’t give the speech, host the family and hold this secret. Would you tell him tonight?",
    "dom": "rto",
    "why": "Stops the contributory supplement and addresses the secrecy"
   },
   {
    "who": "pt",
    "text": "(Quiet.) He’ll be hurt I didn’t say. But yes. I’ll tell him."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "The rules until the twenty-first: confusion, repeated vomiting, not keeping fluids down, or Kofi finding you hard to wake — that’s 999. See you at four today; I ring you tomorrow with the results. I’ll also book a review for the week after the wedding now, so nothing drifts.",
    "dom": "gs",
    "why": "Plain 999 triggers, dated review and a post-wedding slot"
   },
   {
    "who": "pt",
    "text": "Thank you for not treating the wedding like a nuisance."
   },
   {
    "who": "dr",
    "text": "Tell me the plan back, so I know it landed.",
    "dom": "rto",
    "why": "Teach-back to confirm understanding"
   },
   {
    "who": "pt",
    "text": "Seen at four. Bloods today. You ring oncology and ring me tomorrow. No calcium tablet, lots of water. 999 if I’m confused or can’t stop being sick. And I tell Kofi."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Checked privacy; heard “no ribbon” and the wedding before the clinical content; open question on symptoms.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Wedding in ten days, hosting and speaking; husband unaware; six weeks of hidden symptoms.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “it waits until the twenty-first”, “stopped checking the scar” and “do ten days matter?”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (bone recurrence), concern (being the diagnosis at the wedding; guilt at delay), expectation (honesty and a plan that respects the date).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Same-day review; repeat adjusted calcium with PTH (NICE NG132), U&E, phosphate, ALP, vitamin D, FBC; hydration, hip and breast examination.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Bone recurrence vs primary hyperparathyroidism vs supplement effect; avoided false certainty.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened confusion, vomiting, drowsiness, dehydration; stated the emergency thresholds.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Symptomatic hypercalcaemia, cause not yet known; PTH is the deciding test.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Tests inside ten days, same-day oncology contact by the GP, supplement stopped, fluids and laxative, decisions timed around the wedding.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Stopped the calcium and vitamin D supplement; laxative for constipation; analgesia for the hip.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 triggers in her terms; results call tomorrow; post-wedding review booked now.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Annette Boateng",
    "age": "58 years · female",
    "pmh": [
     "Breast cancer 4 years ago (WLE and radiotherapy)",
     "Oncology review 14 months ago: clear"
    ],
    "meds": [
     "Anastrozole 1 mg once daily",
     "Calcium and vitamin D supplement"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Adjusted calcium 2.82 mmol/L (FBC, U&E, LFTs unremarkable). Presented with tiredness, constipation and thirst. No PTH on file.",
    "reason": "Urgent recall to discuss blood results."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Hear the terms",
     "d": "She sets two conditions: no ribbon, and nothing before the twenty-first. Acknowledge both before any clinical content."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Hypercalcaemia symptoms, hip pain, confusion or vomiting, supplements, breast and scar changes."
    },
    {
     "t": "4–6",
     "h": "ICE and the secret",
     "d": "She has suspected recurrence for weeks and told nobody. Explore what the next ten days mean to her."
    },
    {
     "t": "6–10",
     "h": "Explain and negotiate",
     "d": "The number, the two causes, PTH as the fork. Same-day review and bloods, GP rings oncology today. State the admission line. Tests before the wedding, decisions around it."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 triggers in her words; results call tomorrow; post-wedding review booked. Kofi. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Tells her it is definitely recurrence, or reassures that it is probably nothing; fights the wedding date or defers everything past it; no PTH; no escalation thresholds; no safety-net.",
    "pass": "Explains the raised calcium and both likely causes; arranges prompt repeat bloods with PTH and oncology contact; stops the supplement; states when to go to hospital; follows up.",
    "exc": "All of the above, plus: consults exactly as she asked; fits every test inside the ten days and names what cannot be deferred; answers “do ten days matter?” honestly; gently addresses the secrecy from Kofi; books the post-wedding review now; teach-back."
   },
   "avoid": [
    {
     "dont": "“I’m afraid this almost certainly means the cancer has spread.”",
     "instead": "“It has two main causes in you, and one blood test tells us which.”",
     "why": "False certainty in either direction is inaccurate; PTH decides."
    },
    {
     "dont": "“The wedding will have to wait — your health comes first.”",
     "instead": "“Every test fits inside your ten days. Treatment decisions can respect the date.”",
     "why": "Fighting the date loses her; joining it gets every test done."
    },
    {
     "dont": "“Just drink more and we’ll recheck after the wedding.”",
     "instead": "“Because you have symptoms, I want to see you and repeat the bloods today.”",
     "why": "Symptomatic hypercalcaemia needs same-day assessment, not a deferred recheck."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family event and secrecy",
     "t": "Hosting her daughter’s wedding in ten days; husband unaware of her symptoms. Protecting others has delayed her care — name the cost gently."
    },
    {
     "h": "Cancer survivorship",
     "t": "Fear of recurrence led her to stop self-checking. Survivors often avoid follow-up when frightened; open, non-judgemental questions help."
    }
   ],
   "legal": [
    {
     "h": "Driving",
     "t": "Advise her not to drive if she becomes confused or drowsy. A new diagnosis of metastatic disease would need individual DVLA advice depending on symptoms and treatment."
    }
   ],
   "professional": [
    {
     "h": "Shared decisions and timing",
     "t": "She may choose to delay treatment decisions; respect that once she understands the risks, and document it (GMC Decision making and consent, 2020). Do not delay the diagnostic tests."
    },
    {
     "h": "Continuity with specialist teams",
     "t": "Phone the breast or acute oncology team the same day rather than sending a routine letter; record who was contacted and the advice given."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Breast Cancer Now helpline and Macmillan Cancer Support for her and her husband; the breast care nurse as a named contact."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Confusion, drowsiness, persistent vomiting, dehydration or inability to keep fluids down — emergency admission",
     "Adjusted calcium 3.5 or above — emergency; 3.0–3.5 or symptomatic below 3.0 — same-day assessment (Society for Endocrinology 2016)",
     "New bone pain (right hip) with a cancer history — possible bone metastasis or fracture risk"
    ],
    "psychosocial": [
     "Wedding in ten days: hosting, speech, dress fitted",
     "Husband unaware; six weeks of hidden symptoms",
     "Low mood masked by wedding admin"
    ],
    "ice": [
     "Idea: “The cancer is back in my bones.”",
     "Concern: being the diagnosis at the wedding; guilt that hiding it may have cost her",
     "Expectation: straight honesty and a plan that works with the date"
    ]
   },
   "diagnosis": "Symptomatic hypercalcaemia (adjusted calcium 2.82 mmol/L) in a woman treated for breast cancer, with a new hip ache. Differential: bone metastases vs primary hyperparathyroidism, with a calcium and vitamin D supplement contributing. PTH separates them.",
   "diagnosisLay": "“Your calcium is higher than it should be, which is why you’re thirsty, constipated and exhausted. It either comes from the bones — which is why I’m ringing your cancer team — or from a small gland in the neck making too much of a hormone. One blood test tells us which.”",
   "management": {
    "reflectIce": "“You want to stand straight in church and not be the diagnosis at the wedding. My plan is designed to make that more likely, not less.”",
    "psychosocial": "Fit all tests inside the ten days; let treatment decisions respect the date; support her to tell her husband; book the post-wedding review now.",
    "sharedPlan": [
     "Same-day review; repeat adjusted calcium with PTH, U&E, phosphate, ALP, vitamin D, FBC (NICE NG132)",
     "GP phones the breast or acute oncology team today; endocrine referral instead if PTH is raised or unsuppressed",
     "Stop the calcium and vitamin D supplement; fluids; laxative; analgesia for the hip"
    ],
    "safetyNet": [
     "999 for confusion, repeated vomiting, not keeping fluids down, or being hard to wake",
     "Results call tomorrow; same-day hospital assessment if calcium is 3.0 or above; post-wedding review booked"
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
    "s": "Visual algorithm · PTH fork",
    "href": "algorithms/hypercalcaemia.html"
   },
   {
    "ic": "💠",
    "t": "Malignant hypercalcaemia protocol",
    "s": "Grading · admission criteria",
    "href": "management/malignant-hypercalcaemia.html"
   },
   {
    "ic": "📋",
    "t": "Breast cancer",
    "s": "Case walkthrough · survivorship",
    "href": "../cases/breast-cancer.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed in two opposite ways: steamrolling the wedding or deferring everything past it. The pass is diagnostics inside ten days, decisions around the date, and clear admission lines.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Telling her it is definitely the cancer, or that it is probably nothing.",
     "why": "“Fails to consider an appropriate differential.” Primary hyperparathyroidism is common; PTH decides.",
     "fix": "Name both causes and the test that separates them."
    },
    {
     "dom": "tasks",
     "fail": "Rechecking the calcium after the wedding.",
     "why": "Symptomatic hypercalcaemia needs same-day assessment; delay risks confusion and admission at the worst moment.",
     "fix": "See her today, repeat bloods with PTH, and phone oncology the same day."
    },
    {
     "dom": "tasks",
     "fail": "Not stating when she must go to hospital.",
     "why": "“Safety-netting inadequate.” A patient planning to push through symptoms needs clear triggers.",
     "fix": "“Confusion, repeated vomiting, not keeping fluids down, or a calcium of 3.0 or more — same-day hospital.”"
    },
    {
     "dom": "rto",
     "fail": "“Your health has to come first — the wedding will have to wait.”",
     "why": "“Does not incorporate the patient’s beliefs and priorities into the plan.” She disengages.",
     "fix": "“Every test fits inside your ten days; treatment decisions can respect the date.”"
    },
    {
     "dom": "rto",
     "fail": "Ignoring that her husband does not know.",
     "why": "Misses the second hidden agenda and the practical risk of her becoming unwell unsupported.",
     "fix": "“You can’t give the speech, host and hold this secret. Would you tell Kofi tonight?”"
    },
    {
     "dom": "gs",
     "fail": "Soft, hedged language after she asked for no ribbon.",
     "why": "“Does not adapt communication to the patient.”",
     "fix": "Number first, then the two causes, then the plan — in that order, plainly."
    }
   ]
  }
 },
 "memory-self": {
  "stem": {
   "name": "Eleanor Voss",
   "age": "62-year-old woman",
   "pmh": [
    "No significant past medical history",
    "Menopause at 53 — HRT from 53, stopped about 18 months ago"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Last attended 3 years ago. Family history recorded 2019: mother — Alzheimer’s disease diagnosed at 68, died in a nursing home. Occupation: head teacher. No cognitive testing or bloods on file.",
   "reason": "Booked a video appointment herself for “a memory check”."
  },
  "knowledge": {
   "guideline": "NICE NG97 — Dementia: assessment, management and support",
   "summary": "Lapses the patient notices herself, recalls in detail and that nobody else has seen, with intact complex function under heavy load, point to subjective cognitive concern rather than dementia. Still assess properly: reversible-cause bloods, a validated brief test as a dated baseline, and treat the load.",
   "points": [
    {
     "h": "Who noticed?",
     "t": "The question that does most of the work. Dementia usually shows as deficits that others notice and the patient minimises or forgets. Lapses spotted and logged by the patient, with no informant concern and intact complex work, fit subjective cognitive concern, most often driven by sleep, mood, alcohol or overload."
    },
    {
     "h": "Reversible-cause bloods (NICE NG97)",
     "t": "FBC, ESR or CRP, U&E, calcium, HbA1c, LFTs, TFTs, B12 and folate. Screen for depression and anxiety, and take an alcohol history (AUDIT-C). Two glasses of wine most nights is well above the UK Chief Medical Officers’ 14 units a week (2016)."
    },
    {
     "h": "Use a validated brief test, and read it honestly",
     "t": "NICE NG97 names brief structured instruments for non-specialist settings, such as the 10-point cognitive screener (10-CS) and the 6-item cognitive impairment test (6CIT). It also warns that a normal score does not on its own rule dementia out. The baseline’s value lies in repeating it at a dated interval and comparing."
    },
    {
     "h": "When to refer",
     "t": "Refer to a specialist dementia diagnostic service when dementia is still suspected after reversible causes are excluded (NICE NG97). Change the lane if an informant notices decline, she has episodes she cannot recall, gets lost, repeats herself without knowing, her function slips, or there is focal neurology or rapid progression. At 62, any confirmed deficit is young-onset and needs specialist assessment."
    },
    {
     "h": "Familial risk, stated honestly",
     "t": "One parent with Alzheimer’s diagnosed in her late sixties raises risk modestly and decides nothing. Autosomal dominant forms (APP, PSEN1, PSEN2) are rare and usually present younger, and APOE testing has no clinical role outside research. If she wants a formal answer, a genetics referral is her choice."
    },
    {
     "h": "Menopause and sleep",
     "t": "Vasomotor symptoms and broken sleep since stopping HRT are treatable and affect concentration. NICE NG23 (updated 2024): HRT does not appear to increase dementia risk, but it should not be offered to prevent dementia. Reopen HRT for her symptoms as an individual risk–benefit discussion."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Voss, I’m Dr Okafor. You’ve been very clear, which helps. You’ve noticed three things and you’d like a proper memory test. I’ll take that seriously. Before we get to the test, can I hear a bit more about each of them?",
    "dom": "rto",
    "why": "Acknowledges her request up front so she doesn’t fear being brushed off"
   },
   {
    "who": "pt",
    "text": "Of course. I’ve written them down — dates, what I was doing, how tired I was. I like evidence."
   },
   {
    "who": "dr",
    "text": "So do I. My plan for today is to understand the episodes, look at what else is going on in your life and health, then agree the testing together. And you’ll leave with a date, not a vague promise. Does that work?",
    "dom": "gs",
    "why": "Sets the agenda and signals real assessment"
   },
   {
    "who": "pt",
    "text": "Yes. That’s exactly what I wanted."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When you lost the word in front of your deputy, did she notice? And has anyone at work or at home ever mentioned your memory?",
    "dom": "tasks",
    "why": "The informant question separates subjective concern from the dementia pattern"
   },
   {
    "who": "pt",
    "text": "No. She didn’t blink. Nobody has said anything. I notice everything myself, straight away."
   },
   {
    "who": "dr",
    "text": "And day to day, do you ever get lost, repeat a story without realising, or find budgets and paperwork harder than they were?",
    "dom": "tasks",
    "why": "Screens the functional red flags"
   },
   {
    "who": "pt",
    "text": "No. I’m in the middle of an Ofsted year. Budgets, safeguarding files, forty-two staff. I know every new child’s name by October."
   },
   {
    "who": "dr",
    "text": "That’s a huge load. How are you sleeping, and how do you wind down in the evenings?",
    "dom": "tasks",
    "why": "Looks for the treatable load"
   },
   {
    "who": "pt",
    "text": "About five hours. I wake at quarter to five with staffing going round my head. A couple of glasses of wine most nights, to switch off. Lunch is optional."
   },
   {
    "who": "dr",
    "text": "And since the menopause, any flushes or night sweats? I see you were on HRT for a while.",
    "dom": "tasks",
    "why": "Picks up the vasomotor symptoms since stopping HRT"
   },
   {
    "who": "pt",
    "text": "They came back after I stopped, about eighteen months ago. It seemed time to stop."
   },
   {
    "who": "dr",
    "text": "And your mood? Low days, or feeling constantly on edge?"
   },
   {
    "who": "pt",
    "text": "On edge, yes. Low, no."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "I can see your notebook. When did you start keeping it?",
    "dom": "rto",
    "why": "Follows the silent cue in shot"
   },
   {
    "who": "pt",
    "text": "After Mum’s funeral. Six years. Nobody believed her until it was far too late. By the end she didn’t know who I was. I’ve done that online test eleven times."
   },
   {
    "who": "dr",
    "text": "Six years of watching yourself, on your own. Nobody believed your mother, so you made sure there’d be evidence for you. That isn’t silly. It’s what someone does after watching what you watched.",
    "dom": "rto",
    "why": "Honours the vigilance rather than pathologising it"
   },
   {
    "who": "pt",
    "text": "Nobody knows. Not even my husband."
   },
   {
    "who": "dr",
    "text": "Is there anything else on your mind about this, beyond your health itself?",
    "dom": "rto",
    "why": "Opens space for the second layer of the hidden agenda"
   },
   {
    "who": "pt",
    "text": "If the governors hear “memory” and “head teacher” in the same sentence, I’m finished. They’d dress it up as concern."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me tell you what I think, and why. With dementia the person usually doesn’t notice their lapses, and everyone else does. You’re the opposite: you noticed every one, you remember each in detail, and nobody around you has seen anything. Your notebook actually points away from what you fear.",
    "dom": "tasks",
    "why": "Explains the subjective-concern pattern in plain words"
   },
   {
    "who": "pt",
    "text": "I hadn’t thought of it like that."
   },
   {
    "who": "dr",
    "text": "But I won’t just reassure you. I’d like bloods for the treatable causes: thyroid, B12, sugar, kidneys and liver, blood count. A proper validated memory test as your baseline, written into your record. And a repeat on a fixed date so we can compare. We measure; we don’t guess.",
    "dom": "tasks",
    "why": "Real assessment: bloods, validated baseline test, dated repeat"
   },
   {
    "who": "pt",
    "text": "And Mum? What does her illness mean for me?"
   },
   {
    "who": "dr",
    "text": "Honestly: a parent diagnosed in her late sixties raises your risk a little. It doesn’t decide anything. The strongly inherited forms are rare and usually start much younger. If you want the formal version, I can refer you for genetic counselling. That’s your choice.",
    "dom": "tasks",
    "why": "Honest familial-risk answer with genetic counselling offered"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "About the governors. Nothing today obliges you to tell anyone at work. Your record is confidential. An employer can only see a report from me with your written consent, and you can read it first. A normal baseline on paper protects you. What you tell work, and when, is your decision.",
    "dom": "rto",
    "why": "Answers the employment fear precisely"
   },
   {
    "who": "pt",
    "text": "That’s a relief. I thought one entry would follow me for ever."
   },
   {
    "who": "dr",
    "text": "Now the conditions your brain is working under. Five hours’ sleep, wine most nights, no lunch, the flushes back. That combination could produce your three episodes in anyone. Could we reopen the HRT conversation for the flushes and sleep, and pick one change in the evenings?",
    "dom": "tasks",
    "why": "Treats the reversible load: sleep, alcohol, HRT"
   },
   {
    "who": "pt",
    "text": "I could stop the wine on school nights. And yes, I’d like to talk about HRT again."
   },
   {
    "who": "dr",
    "text": "Good. And six years is a long time to carry this on your own. Is there any way your husband could share some of it?",
    "dom": "rto",
    "why": "Opens the husband question without forcing it"
   },
   {
    "who": "pt",
    "text": "Maybe. Once I have results to tell him about."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Let me give your watching some proper targets. Contact me sooner if someone else notices changes, if you repeat yourself without knowing, get lost somewhere familiar, or find your work slipping. Bloods this week, the baseline test booked, a repeat dated in six months, and review with me in six to eight weeks about sleep and HRT.",
    "dom": "gs",
    "why": "Specific safety-net and a dated follow-up"
   },
   {
    "who": "pt",
    "text": "So the notebook can retire?"
   },
   {
    "who": "dr",
    "text": "That’s the idea. I’ll take over the watching. Tell me what you’ll take away today, so I know I’ve explained it well.",
    "dom": "rto",
    "why": "Checks understanding with teach-back"
   },
   {
    "who": "pt",
    "text": "My lapses look like overload, not Mum’s illness. Tests to prove it. Less wine, HRT again, and I’m not alone with it."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let her give all three episodes; acknowledged the request for a “real” test at once instead of deflecting.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Headship in an Ofsted year, 5-hour sleep, nightly wine, skipped meals, no holiday, and carrying it alone.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "The notebook in shot, “eleven times”, and “they’d dress it as concern”: each explored, not passed over.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (her mother’s Alzheimer’s starting again); concerns (six years of secret testing; losing her job); expectation (a real baseline and honest risk talk).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "NICE NG97 reversible-cause bloods; validated brief cognitive test as dated baseline with a repeat; mood and alcohol screen.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Subjective cognitive concern from load vs early dementia; sleep deprivation, alcohol, menopause, anxiety, depression, thyroid, B12.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about informant concern, unrecalled episodes, getting lost, repetition, functional decline and neurology.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named the pattern as subjective concern under heavy load, explained why, and kept assessment open.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Bloods, baseline test with dated repeat, sleep and alcohol plan, HRT reopened, genetic counselling offered as her choice.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Vasomotor symptoms, alcohol above 14 units a week, sleep restriction and possible anxiety, each with an action.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named the changes that would prompt earlier review; review in 6–8 weeks; repeat test dated.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Eleanor Voss",
    "age": "62 years · female",
    "pmh": [
     "Nil significant",
     "Menopause at 53; HRT stopped about 18 months ago"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "Last seen 3 years ago. Family history (2019 note): mother — Alzheimer’s disease, diagnosed at 68. Occupation: primary head teacher. No bloods or cognitive testing on file.",
    "reason": "Self-booked video appointment: “memory check”."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "She opens with three efficient episodes and a request for the “real” test. Acknowledge it straight away. If you deflect, you become her mother’s doctors."
    },
    {
     "t": "1–5",
     "h": "Focused history and ICE",
     "d": "Who noticed? Function at work. Sleep, alcohol, meals, flushes since stopping HRT, mood. Ask about the notebook before minute 5; the mother story follows."
    },
    {
     "t": "5–6",
     "h": "Summarise and share",
     "d": "“You noticed every lapse and nobody else has. That pattern points away from dementia, and I still want to measure it.”"
    },
    {
     "t": "6–10",
     "h": "Shared management",
     "d": "Bloods plus validated baseline test with a dated repeat. Honest familial risk. Answer the governors fear. Sleep, alcohol and HRT plan: one change she picks."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Give her proper targets (others noticing, getting lost, unrecalled repetition). Review booked. The husband question seeded. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Reassures without testing (“you’re just stressed”), or does the reverse and refers to memory clinic with no thought about the load; never asks who else noticed; misses the notebook and her mother; no mention of sleep, alcohol or HRT; the employment fear never surfaces.",
    "pass": "Characterises the episodes, asks about informant concern and function, arranges reversible-cause bloods and a validated baseline, explores sleep and alcohol, acknowledges her mother, and books a review with a basic safety-net.",
    "exc": "All of the above, plus: explains the “who noticed?” pattern in plain words; honours six years of secret testing; gives an honest familial-risk answer with genetic counselling as her choice; answers the governors fear precisely (consent, access to reports); agrees one owned change; dates the repeat test and takes over the watching."
   },
   "avoid": [
    {
     "dont": "“Honestly, everyone forgets words. You’re clearly fine — you’re a head teacher.”",
     "instead": "“You’ve come with evidence, so let’s answer it properly: bloods, a validated test as your baseline, and a repeat on a set date.”",
     "why": "Reassurance without assessment is exactly what she fears happened to her mother."
    },
    {
     "dont": "“With your mother’s history I’d better refer you to the memory clinic today.”",
     "instead": "“Your pattern points away from dementia. Let’s treat the load, measure a baseline, and refer if anything objective shows up.”",
     "why": "Reflex referral confirms the catastrophe and skips the reversible causes."
    },
    {
     "dont": "“I’ll need to let occupational health know.”",
     "instead": "“Nothing today requires anyone at work to be told. What you disclose, and when, is your decision.”",
     "why": "It is untrue, and it feeds the fear she hasn’t yet voiced."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Workload and self-care",
     "t": "A head teacher in an inspection year: sleep restriction, skipped meals, nightly alcohol to switch off and no holiday. These are modifiable drivers to negotiate, not lecture about."
    },
    {
     "h": "Family and secrecy",
     "t": "Watching a mother go unheard with dementia, then six years of hidden self-testing; her husband doesn’t know. Isolation is part of the problem to address."
    }
   ],
   "legal": [
    {
     "h": "Employer access to records",
     "t": "Under the Access to Medical Reports Act 1988 an employer can get a GP report only with the patient’s written consent, and she can see it before it is sent. GMC Confidentiality (2017): disclosure to an employer without consent is not justified here."
    },
    {
     "h": "Equality Act 2010",
     "t": "If a long-term condition were ever diagnosed, it could count as a disability, with a duty on the employer to make reasonable adjustments. Worth knowing, not needed today."
    },
    {
     "h": "DVLA",
     "t": "No notification duty for subjective memory concern. A dementia diagnosis would need DVLA notification; that is not the situation now."
    }
   ],
   "professional": [
    {
     "h": "Honest uncertainty",
     "t": "GMC Good Medical Practice: take the concern seriously, investigate proportionately, and don’t give false reassurance. Share the reasoning for and against dementia openly."
    },
    {
     "h": "Recording",
     "t": "Record accurately and neutrally (for example, “subjective memory concern; baseline cognitive assessment arranged”). Explain what is recorded and who can see it."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Education Support’s helpline for school staff, Alzheimer’s Society information on inherited risk, and NHS Talking Therapies (self-referral) if anxiety persists."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Others noticing decline; episodes she cannot recall; repeating herself without awareness",
     "Getting lost somewhere familiar; function slipping at work or with finances",
     "Focal neurology, personality change, or rapid progression over weeks — refer promptly"
    ],
    "psychosocial": [
     "Inspection-year headship: 5-hour sleep, 4:45 waking, skipped lunch, no holiday",
     "Nightly wine to switch off; flushes and night sweats since stopping HRT",
     "Carrying it alone: husband unaware; fear for her job"
    ],
    "ice": [
     "Idea: “It’s starting, the way it started with Mum.”",
     "Concern: six years of secret self-testing; any record of “memory” will end her headship",
     "Expectation: a real test, a baseline on paper, an honest risk conversation, and discretion"
    ]
   },
   "diagnosis": "Most likely subjective cognitive concern driven by sleep restriction, alcohol, vasomotor symptoms and heavy workload. Say so while still assessing properly: “Your pattern points away from dementia, and I want the tests to prove it.”",
   "diagnosisLay": "“With dementia, the person usually doesn’t notice the slips and everyone else does. You noticed every one, remember them in detail, and nobody around you has seen a thing. That pattern is far more typical of an overloaded, underslept brain.”",
   "management": {
    "reflectIce": "“Nobody believed your mother until it was too late, so you made sure there would be evidence for you. I’m going to look properly, and put that evidence on paper.”",
    "psychosocial": "Answer the job fear precisely (confidentiality, consent for any employer report); agree one change she chooses (no wine on school nights); gently open the question of telling her husband.",
    "sharedPlan": [
     "NICE NG97 bloods: FBC, ESR/CRP, U&E, calcium, HbA1c, LFT, TFT, B12, folate",
     "Validated brief cognitive test as a recorded baseline, with a repeat on a set date",
     "Reopen HRT for vasomotor symptoms (NICE NG23); sleep and alcohol plan; genetic counselling if she wants it"
    ],
    "safetyNet": [
     "Earlier review if others notice changes, unrecalled repetition, getting lost, or work slipping",
     "Review in 6–8 weeks with results; repeat test dated"
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
    "ic": "🗺️",
    "t": "Memory deficit",
    "s": "Visual algorithm · reversible causes",
    "href": "algorithms/memory-deficit.html"
   },
   {
    "ic": "💠",
    "t": "Menopause and HRT prescribing",
    "s": "Protocol · NICE NG23",
    "href": "management/hrt-prescribing.html"
   },
   {
    "ic": "📋",
    "t": "Insomnia",
    "s": "Case walkthrough · sleep and load",
    "href": "../cases/insomnia.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed in two opposite ways: dismissing her or catastrophising. The marks go to the candidate who assesses properly, treats the load, and finds the notebook story and the job fear.",
   "items": [
    {
     "dom": "tasks",
     "fail": "“You’re running a school — you clearly don’t have dementia,” with no bloods and no test.",
     "why": "“Did not take the patient’s concern seriously.” Reassurance without assessment fails Tasks and confirms her worst belief about doctors.",
     "fix": "Assess properly: NICE NG97 bloods, a validated baseline, a dated repeat. Then reassurance carries weight."
    },
    {
     "dom": "tasks",
     "fail": "Straight to memory-clinic referral because of her mother, without exploring sleep, alcohol or menopause.",
     "why": "Reversible causes should be excluded first, and a referral on this history feeds the catastrophe.",
     "fix": "Name the load (five hours’ sleep, nightly wine, flushes since stopping HRT) and treat it; refer if anything objective emerges."
    },
    {
     "dom": "rto",
     "fail": "Ignoring the notebook in shot and the “eleven times”.",
     "why": "“Did not pick up on cues.” Those are six years of secret fear showing on screen.",
     "fix": "“I can see your notebook — when did you start it?” Then acknowledge why she kept it."
    },
    {
     "dom": "rto",
     "fail": "Never finding the governors fear, or answering it vaguely (“it’s all confidential”).",
     "why": "The employment terror is half the hidden agenda; a vague answer leaves it in place.",
     "fix": "Be precise: nothing is shared with work without her written consent, she can see any report first, and a normal baseline protects her."
    },
    {
     "dom": "gs",
     "fail": "Quoting ACE-III, MoCA, APOE and PSEN1 at her without explaining.",
     "why": "“Used jargon.” She is clever, but frightened.",
     "fix": "Plain words: “a proper validated memory test”, “the strongly inherited forms are rare and start younger”."
    },
    {
     "dom": "gs",
     "fail": "Ending with “come back if things get worse”.",
     "why": "Vague safety-netting leaves the notebook in charge of the watching.",
     "fix": "Name the specific changes, book the review, date the repeat test, and say you’ll take over the watching."
    }
   ]
  }
 },
 "memory-son-call": {
  "stem": {
   "name": "Grace Okafor",
   "age": "79-year-old woman",
   "pmh": [
    "Hypertension — well controlled",
    "Last seen at the practice 8 months ago"
   ],
   "meds": [
    "Antihypertensive medication (see repeat list)"
   ],
   "allergy": "No known drug allergies",
   "recent": "Widowed 2019, lives alone. Only child Daniel (47). No consent on file for sharing information with family. No lasting power of attorney recorded.",
   "reason": "Telephone call from her son Daniel, who is worried about her memory. Grace is not aware he is calling."
  },
  "knowledge": {
   "guideline": "NICE NG97 — Dementia · GMC Confidentiality (2017) · Mental Capacity Act 2005 · DVLA Assessing fitness to drive",
   "summary": "A third-party call: listen fully, share nothing about Grace. A year of gradual decline with preserved self-care points to the memory pathway, not delirium. The urgent jobs are protective — the returning scammer, driving and the LPA — and the plan must involve Grace.",
   "points": [
    {
     "h": "Confidentiality rules",
     "t": "GMC Confidentiality (2017): you should not refuse to listen to concerns from relatives, but you must not disclose information about the patient without consent. Listening breaches nothing; record what was said and that nothing was disclosed."
    },
    {
     "h": "Pattern recognition",
     "t": "Twelve months of gradual decline (repetition, missed bills, getting lost on a familiar route) with preserved washing, dressing and cooking suggests possible dementia. Sudden onset, fluctuation or rapid decline over weeks would suggest delirium or another cause needing prompt assessment."
    },
    {
     "h": "Assessment in primary care",
     "t": "NICE NG97: take a history from the person and someone who knows them, examine, review medicines, use a validated brief cognitive test, and do blood tests to exclude reversible causes before referring to a specialist diagnostic service. A normal brief test does not rule out dementia."
    },
    {
     "h": "Financial abuse",
     "t": "Doorstep fraud with a returning perpetrator is an ongoing risk. Banks have support for customers in vulnerable circumstances; report to police (101) and trading standards. If Grace cannot protect herself, the local authority safeguarding team can be involved (Care Act 2014)."
    },
    {
     "h": "Lasting power of attorney",
     "t": "An LPA can only be made while the person has capacity to make it (Mental Capacity Act 2005), and must be registered with the Office of the Public Guardian before use. If capacity is lost first, family must apply to the Court of Protection for deputyship."
    },
    {
     "h": "Driving",
     "t": "DVLA: a person diagnosed with dementia must tell DVLA. Before diagnosis, getting lost while driving is a safety concern to raise with Grace at her review. The GMC sets out when a doctor may inform DVLA if a patient continues to drive unsafely."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Okafor, it’s Dr Lee. I understand you’re worried about your mum.",
    "dom": "rto",
    "why": "Open, warm start"
   },
   {
    "who": "pt",
    "text": "Before you say you can’t talk to me, please just listen. Mum’s memory has been going for a year, properly going. Last month she gave nine hundred pounds to a man at the door. And I’m moving to Singapore on Friday. I need this sorted before I get on that plane."
   },
   {
    "who": "dr",
    "text": "I’m glad you rang, and I will listen to every word. Here’s how it works: you can tell me everything, and it’s genuinely useful. What I can’t do without your mum’s permission is share information about her. So tell me it all, and then we’ll work out a plan that gets her the right help. Is that okay?",
    "dom": "tasks",
    "why": "Sets confidentiality boundaries warmly in the first minute"
   },
   {
    "who": "pt",
    "text": "Okay. That’s fair. Thank you for not just hanging up."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about the changes you’ve noticed, from the beginning.",
    "dom": "rto",
    "why": "Open collateral history"
   },
   {
    "who": "pt",
    "text": "She asks the same question within minutes. Tells me the same story three times a visit. A red-letter gas bill — she’s missed direct debits. Boiled a saucepan dry twice. And she got lost driving back from the garden centre she’s used for thirty years."
   },
   {
    "who": "dr",
    "text": "Has it come on gradually, or were there sudden changes — days when she was suddenly much worse?",
    "dom": "tasks",
    "why": "Distinguishes gradual decline from delirium or stepwise change"
   },
   {
    "who": "pt",
    "text": "Gradual. Steady. No sudden days."
   },
   {
    "who": "dr",
    "text": "Any falls or knocks to the head, infections, new medicines, and how is her drinking? How does she manage washing, dressing, meals?",
    "dom": "tasks",
    "why": "Screens reversible causes and establishes daily function"
   },
   {
    "who": "pt",
    "text": "No falls, no infections, nothing new that I know of. A sherry at Christmas. She washes and dresses fine, cooks simple meals. Still plays bridge on Tuesdays — she loses now, which she never did."
   },
   {
    "who": "dr",
    "text": "And her mood — does she seem low or worried?",
    "dom": "tasks",
    "why": "Screens for depression as a mimic"
   },
   {
    "who": "pt",
    "text": "Cheerful. She laughs it off — ‘my age, darling’."
   },
   {
    "who": "dr",
    "text": "Tell me about the man at the door.",
    "dom": "tasks",
    "why": "Explores the financial abuse in detail"
   },
   {
    "who": "pt",
    "text": "Nine hundred pounds cash over two days for guttering. No work done, no receipt. He’s been back once since — she nearly paid him again. ‘He was ever so polite.’ I found it on her bank statement."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "What do you think is going on with your mum?",
    "dom": "rto",
    "why": "Elicits his ideas"
   },
   {
    "who": "pt",
    "text": "Dementia. I’ve read up, done an online test with her. I’m ninety per cent sure."
   },
   {
    "who": "dr",
    "text": "And you mentioned Friday. How are you feeling about going?",
    "dom": "rto",
    "why": "Picks up the Singapore cue and explores the emotion"
   },
   {
    "who": "pt",
    "text": "Terrible. She’s got nobody else — Dad died in 2019. Three years. I’m abandoning her, aren’t I? Just say it."
   },
   {
    "who": "dr",
    "text": "I won’t say it, because it isn’t true. Leaving is a fact; abandoning is a choice. Someone abandoning her wouldn’t have rung me four days before a flight. Tell me — what have you talked to her about so far?",
    "dom": "rto",
    "why": "Answers the guilt honestly and moves to what Grace knows"
   },
   {
    "who": "pt",
    "text": "Nothing. She doesn’t know I’m ringing. She’d be mortified — or laugh at me. And we never got round to the power of attorney."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s my honest view, without discussing her records. What you describe — a year of slow change, bills slipping, repeating herself, while she still looks after herself — deserves a proper memory assessment. It doesn’t sound like a sudden emergency, and that matters: Friday doesn’t have to be a cliff edge.",
    "dom": "tasks",
    "why": "Names the pattern appropriately without breaching confidentiality"
   },
   {
    "who": "pt",
    "text": "So it can’t all be sorted by Friday?"
   },
   {
    "who": "dr",
    "text": "Honestly, no. A diagnosis takes time, tests, and your mum’s agreement. But it can be started by Friday, and started properly is worth a lot. The most urgent thing isn’t medical — it’s the man at the door, because he’ll come back.",
    "dom": "rto",
    "why": "Replaces “sorted by Friday” with “started by Friday”"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "So, four things before Friday. One: talk to your mum, openly — tell her you’re worried and that you’ve spoken to me. I’ll invite her in for a check-up, and she should know why. Two: today, ring her bank — they have teams to support customers who may be vulnerable — and report him to the police on 101 and to trading standards. Tell a neighbour you trust.",
    "dom": "tasks",
    "why": "Honest route to assessment with Grace; immediate protection from fraud"
   },
   {
    "who": "pt",
    "text": "I can do the bank today. Talking to Mum… I’ll do it tomorrow."
   },
   {
    "who": "dr",
    "text": "Three: the power of attorney. It can only be made while she has the capacity to make it — so this week is the time to raise it with her, and the forms can be started online. If you wait, you may end up applying to a court instead. Four: the driving. Getting lost on a familiar road is worth her talking to me about, and I’ll cover it when I see her.",
    "dom": "tasks",
    "why": "LPA window and driving safety raised"
   },
   {
    "who": "pt",
    "text": "Mum will hate giving up the car."
   },
   {
    "who": "dr",
    "text": "That’s a conversation for her and me, done kindly. When I see her I’ll check her memory properly, do some blood tests for treatable causes, and if needed refer her to the memory service — all with her agreement. If she’s happy, I’ll ask her permission to keep you updated in Singapore. It happens with her, not to her.",
    "dom": "rto",
    "why": "Keeps Grace at the centre and plans consent for future sharing"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If she suddenly becomes much more confused over hours or days, has a fall or head injury, or can’t be woken properly — that’s urgent, same day, or 999 if she’s very unwell. Can you run through the plan for me, so I know I’ve explained it well?",
    "dom": "gs",
    "why": "Safety-net for delirium or acute change with teach-back"
   },
   {
    "who": "pt",
    "text": "Bank and police today, tell a neighbour. Talk to Mum tomorrow — she knows I spoke to you. You invite her in. Power of attorney this week. You’ll talk to her about the car. And if I’m in Singapore, you’ll ring me only if she says yes."
   },
   {
    "who": "dr",
    "text": "Exactly. Leave your Singapore number with reception so it’s ready if she agrees. You’re building a net before you go, Daniel — that’s the opposite of abandoning her.",
    "dom": "rto",
    "why": "Practical close and supportive reframe"
   },
   {
    "who": "pt",
    "text": "Thank you. I feel like I can actually get on that plane."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Set confidentiality boundaries warmly; listened fully; took a proper collateral history.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Grace living alone, widowed, bridge club, driving; Daniel as only child leaving for three years; no LPA.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "“Before you say you can’t talk to me”, “I’m abandoning her, aren’t I?” and “he’s been back once since”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (dementia, “90% sure”); concern (leaving her, the scammer returning, no LPA); expectation (all sorted by Friday).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Review with Grace: history, examination, medicines review, validated brief cognitive test, bloods for reversible causes (NICE NG97), then memory service referral.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Dementia versus delirium, depression, medication or alcohol effects, B12 or thyroid disorder.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about sudden change, falls, head injury and infection; safety-net for acute confusion.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Gradual cognitive decline with preserved self-care — needs memory assessment; not an emergency.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Grace told openly; review booked; bank, police and trading standards today; LPA while capacity remains; driving raised; no covert assessment.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Hypertension review at the same visit; kitchen safety; social isolation after Daniel leaves.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Dated plan, contact details on file, consent sought for updates, safety-net for acute change.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Grace Okafor",
    "age": "79 years · female",
    "pmh": [
     "Hypertension",
     "Last seen 8 months ago"
    ],
    "meds": [
     "Antihypertensive (repeat)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ No consent on file to share information with family. No LPA recorded. Lives alone, widowed 2019.",
    "reason": "Son Daniel on the phone: “Mum’s memory has been going for a year.” Grace unaware of the call."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Set the rails",
     "d": "Everything can come in, nothing goes out. Say it warmly, then listen."
    },
    {
     "t": "1–4",
     "h": "Collateral history",
     "d": "Onset and course, examples, daily function, falls, drugs, infection, alcohol, mood, driving, the doorstep fraud."
    },
    {
     "t": "4–6",
     "h": "Friday and the guilt",
     "d": "His idea (dementia); “I’m abandoning her” — answer it honestly; what Grace knows."
    },
    {
     "t": "6–10",
     "h": "Started, not sorted",
     "d": "Four jobs: tell Grace, bank and 101 and trading standards, LPA while she has capacity, driving at the review."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Acute confusion or falls = urgent. Contact details on file, consent for updates, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Refuses to listen because of confidentiality, or discusses Grace’s records; suggests assessing her under a pretext; misses the returning scammer; says nothing about LPA or driving; no safety-net.",
    "pass": "Listens without disclosing; recognises a memory-pathway pattern; arranges a review with Grace’s knowledge; advises on the fraud and LPA; gives a basic safety-net.",
    "exc": "All of the above, plus: answers the abandonment question honestly; turns “sorted by Friday” into four dated jobs; explains the LPA capacity window; raises driving sensitively; keeps Grace at the centre and plans consent for Daniel to be updated from abroad."
   },
   "avoid": [
    {
     "dont": "“I’m sorry, I can’t discuss your mother without her consent.”",
     "instead": "“You can tell me everything — I just can’t share information about her without her permission.”",
     "why": "Refusing to listen is wrong under GMC guidance and loses the collateral history."
    },
    {
     "dont": "“Bring her in for a blood pressure check and I’ll test her memory while she’s here.”",
     "instead": "“Talk to her openly first, so she knows why I’m inviting her in.”",
     "why": "Covert assessment undermines trust and her right to consent."
    },
    {
     "dont": "“Don’t worry, we’ll get it all sorted.”",
     "instead": "“It can’t be sorted by Friday — but it can be properly started. Here are four things.”",
     "why": "False reassurance sets him up to fail and ignores the time-critical protective jobs."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Living alone and isolation",
     "t": "An only child moving abroad leaves Grace without local family. Neighbours, bridge friends and community services become the safety net."
    },
    {
     "h": "Financial abuse",
     "t": "Doorstep fraud often recurs. Bank support for customers in vulnerable circumstances, trusted neighbours and a “no cold callers” approach reduce risk."
    }
   ],
   "legal": [
    {
     "h": "Mental Capacity Act 2005 and LPA",
     "t": "Capacity is presumed. An LPA (property and financial affairs, and health and welfare) can only be made while the person has capacity and must be registered with the Office of the Public Guardian. Otherwise, a Court of Protection deputyship is needed."
    },
    {
     "h": "DVLA",
     "t": "A driver diagnosed with dementia must tell DVLA. GMC Confidentiality (2017) guidance on reporting concerns to DVLA sets out when a doctor may inform DVLA if a patient continues to drive when unfit."
    },
    {
     "h": "Care Act 2014",
     "t": "If Grace is unable to protect herself from ongoing financial abuse, a safeguarding referral to the local authority is appropriate."
    }
   ],
   "professional": [
    {
     "h": "GMC Confidentiality (2017)",
     "t": "Listen to relatives’ concerns; don’t disclose without consent; record what was said. Seek Grace’s consent at review to share with Daniel."
    },
    {
     "h": "Patient-centred care",
     "t": "Grace is the patient. Any assessment happens with her knowledge and agreement — no pretext appointments."
    }
   ],
   "community": [
    {
     "h": "Resources",
     "t": "Alzheimer’s Society and Age UK for information and support; local memory assessment service; trading standards via the Citizens Advice consumer helpline; Office of the Public Guardian for LPA forms."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Sudden onset, fluctuating or rapidly worsening confusion — consider delirium or another acute cause",
     "Falls, head injury, new focal symptoms",
     "Ongoing financial exploitation; unsafe driving; kitchen fire risk"
    ],
    "psychosocial": [
     "Daniel’s move abroad and his guilt",
     "Grace’s independence: lives alone, drives, plays bridge",
     "What Grace knows and how she will react"
    ],
    "ice": [
     "Idea: dementia — “90% sure”",
     "Concern: abandoning her; the scammer returning; no LPA",
     "Expectation: everything sorted by Friday"
    ]
   },
   "diagnosis": "“A year of slow memory change while she still looks after herself deserves a proper memory assessment. It doesn’t sound like an emergency, but there are protective jobs to do this week.”",
   "diagnosisLay": "“Think of it as a slow puncture, not a blow-out. We need to check it properly, with your mum, but the things to protect her — the bank, the neighbour, the power of attorney — can be done now.”",
   "management": {
    "reflectIce": "“You asked if you’re abandoning her. Leaving is a fact; abandoning is a choice — and you’re building a net before you go.”",
    "psychosocial": "Turn “sorted by Friday” into “started by Friday”, keep Grace involved, and plan Daniel’s contact from abroad with her consent.",
    "sharedPlan": [
     "Daniel tells Grace openly; GP invites her for review with history, examination, brief cognitive test and bloods (NICE NG97)",
     "Bank support team, police 101 and trading standards today; trusted neighbour alerted",
     "LPA started while she has capacity; driving discussed at the review"
    ],
    "safetyNet": [
     "Sudden worsening confusion, falls or head injury: same-day assessment, or 999 if very unwell",
     "Daniel’s overseas contact details on file; updates only with Grace’s consent"
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
    "ic": "🗺️",
    "t": "Memory problems",
    "s": "Visual algorithm",
    "href": "algorithms/memory-deficit.html"
   },
   {
    "ic": "💠",
    "t": "Dementia",
    "s": "Management protocol",
    "href": "management/dementia.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA",
    "s": "Fitness to drive",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "This third-party call is failed at the confidentiality wall in the first minute, or later by a doctor who promises to “sort it” and misses the protective jobs that really are urgent.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Refusing to talk because there is no consent on file.",
     "why": "GMC guidance says you should listen to relatives; refusing loses the history and the relationship.",
     "fix": "“You can tell me everything; I can’t share anything back without her permission.”"
    },
    {
     "dom": "tasks",
     "fail": "Discussing her blood pressure, recent visits or medicines with Daniel.",
     "why": "Disclosure without consent is a probity failure.",
     "fix": "Talk about the pattern he describes and the process, not her records."
    },
    {
     "dom": "tasks",
     "fail": "Missing the returning scammer, the LPA window or the driving.",
     "why": "These are the time-critical protective jobs; examiners expect them named.",
     "fix": "Bank, 101 and trading standards today; LPA while capacity remains; driving raised at review."
    },
    {
     "dom": "rto",
     "fail": "Replying to “I’m abandoning her” with “no, no, don’t be silly”, or ignoring it.",
     "why": "Brush-off reassurance doesn’t land; the guilt is the hidden agenda.",
     "fix": "Answer honestly — leaving is a fact, abandoning is a choice — and show him the plan."
    },
    {
     "dom": "rto",
     "fail": "Suggesting she be brought in under a pretext.",
     "why": "It treats Grace as a problem, not a person, and undermines her consent.",
     "fix": "Daniel tells her openly; the GP invites her with an honest reason."
    },
    {
     "dom": "gs",
     "fail": "Ending with “we’ll get it sorted” and no dated actions.",
     "why": "Unfocused plans and no safety-net are standard failing feedback.",
     "fix": "Four dated jobs, contact details on file, a safety-net for sudden confusion, and teach-back."
    }
   ]
  }
 },
 "pall-confusion": {
  "stem": {
   "name": "Iris Caldwell",
   "age": "88-year-old woman",
   "pmh": [
    "End-stage heart failure — ejection fraction 15%, two admissions this year",
    "On the palliative care register"
   ],
   "meds": [
    "Oxycodone, low dose, for breathlessness",
    "Furosemide and ramipril stopped by the heart failure nurse one month ago"
   ],
   "allergy": "No known drug allergies",
   "recent": "ReSPECT form completed three months ago with Iris (full capacity at the time), GP and heart failure nurse: priority comfort, preferred place of death home, DNACPR. Lives with her daughter Wendy (61).",
   "reason": "Telephone call from her daughter: two days of confusion, sleepiness and very little to drink."
  },
  "knowledge": {
   "guideline": "NICE NG31 — Care of dying adults in the last days of life · NICE NG106 — Chronic heart failure · Mental Capacity Act 2005 · ReSPECT (Resuscitation Council UK)",
   "summary": "Screen for reversible causes of new confusion, but progressive drowsiness, minimal intake, restlessness and lucid moments over days in end-stage heart failure suggest she is dying. Visit today, put anticipatory medicines in place, and anchor decisions to Iris’s own recorded wishes.",
   "points": [
    {
     "h": "Recognising dying",
     "t": "NICE NG31: signs include increasing fatigue and drowsiness, reduced intake, agitation, and changes in breathing and skin. Recognise possible dying, look for reversible causes, and keep reassessing — the judgement is completed by examination."
    },
    {
     "h": "Reversible causes to screen",
     "t": "Infection, urinary retention, constipation, new drugs, opioid accumulation (oxycodone with falling renal function), hypercalcaemia, hypoxia and falls or head injury. None found on the phone here — confirm at the visit."
    },
    {
     "h": "Hydration",
     "t": "NICE NG31: support the person to drink if they wish and are able, and provide frequent mouth care. Consider a therapeutic trial of clinically assisted hydration if distressing symptoms or signs could be due to dehydration (such as thirst or delirium); monitor at least every 12 hours and stop if there is harm, such as fluid overload."
    },
    {
     "h": "Heart failure specifics",
     "t": "In end-stage heart failure, extra fluid can worsen breathlessness, secretions and oedema. Stop medicines that no longer help (NICE NG31 and NG106 palliative care recommendations)."
    },
    {
     "h": "Anticipatory medicines",
     "t": "NICE NG31: prescribe individualised anticipatory medicines for pain, breathlessness, nausea and vomiting, anxiety, agitation or delirium, and noisy respiratory secretions, with indication, dose and route written down. Doses per BNF and local palliative guidance."
    },
    {
     "h": "Decisions when capacity is lost",
     "t": "Iris now lacks capacity for these decisions. Clinicians decide in her best interests (Mental Capacity Act 2005), giving weight to her recorded wishes and consulting family. Relatives without a health-and-welfare LPA cannot demand treatment."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Wendy, it’s Dr Lee. I can hear things are very difficult. Tell me what’s been happening with your mum.",
    "dom": "rto",
    "why": "Warm open start"
   },
   {
    "who": "pt",
    "text": "She’s gone somewhere these last two days. Muddled, sleepy, hardly a sip. My brother got here last night and — Alan, I’m ON the phone — he says we’re starving her, she needs a drip. Doctor, am I doing something terrible?"
   },
   {
    "who": "dr",
    "text": "No, Wendy. From what I know of your mum, you’re doing what she asked of you, and that takes courage. I want to understand exactly what’s changed, then I’ll explain what I think is happening — and I’d like Alan to be part of this too. Could you put me on speaker?",
    "dom": "rto",
    "why": "Answers her question first and brings the brother in"
   },
   {
    "who": "pt",
    "text": "(speaker on) Alan’s here. He’s listening."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Hello Alan, thank you for being there. Wendy, tell me about the last two days — how has she changed?"
   },
   {
    "who": "pt",
    "text": "Sleeping most of the day. Muddled about time, about who’s who. Picking at the bedclothes. But this morning she knew me — she squeezed my hand. She takes sips only. Between times she’s peaceful."
   },
   {
    "who": "dr",
    "text": "I need to check for things that can cause confusion and can be put right. Has she had a temperature, a new cough, or any burning passing water? Is she passing urine at all?",
    "dom": "tasks",
    "why": "Reversibility screen: infection and urine output"
   },
   {
    "who": "pt",
    "text": "No temperature, no cough. Small amounts of dark urine. She doesn’t seem uncomfortable down there."
   },
   {
    "who": "dr",
    "text": "When did her bowels last open? Any fall or bang to the head, any new tablets, or a change in the oxycodone?",
    "dom": "tasks",
    "why": "Screens constipation, head injury, new drugs and opioid accumulation"
   },
   {
    "who": "pt",
    "text": "Two days ago. No falls. Nothing new — the heart nurse stopped the water tablet and ramipril a month ago. The oxycodone’s the same small dose."
   },
   {
    "who": "dr",
    "text": "Is she in any pain, distressed, or restless in a way that troubles her? Any noisy breathing?",
    "dom": "tasks",
    "why": "Assesses symptom burden needing treatment now"
   },
   {
    "who": "pt",
    "text": "No, she isn’t in pain. The breathing’s quiet. It’s just the picking."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Alan, you’ve travelled a long way. What do you think is going on with your mum?",
    "dom": "rto",
    "why": "Elicits the brother’s ideas directly rather than talking past him"
   },
   {
    "who": "pt",
    "text": "(Alan) She sounded fine on the phone a fortnight ago. Now she doesn’t know what day it is. She’s dehydrated — anyone can see that. Give her a drip and she’ll perk up. I wasn’t here for that form. I never agreed to any of it."
   },
   {
    "who": "dr",
    "text": "That must have been a real shock, walking in last night. It sounds like you love her very much and you want to do something. That’s completely understandable.",
    "dom": "rto",
    "why": "Acknowledges shock and reframes anger as love"
   },
   {
    "who": "pt",
    "text": "(Wendy, quietly) I promised her. At the kitchen table. I said, ‘you’ll not die in a ward, Mum, not while I’m breathing.’ Now Alan says keeping that promise is what’s killing her."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me that, Wendy. What are you both hoping I can do today?",
    "dom": "rto",
    "why": "Hears the hidden guilt and elicits expectations"
   },
   {
    "who": "pt",
    "text": "(Wendy) The truth. (Alan) Something. Anything."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Then I’ll be honest with you both. I haven’t found anything that sounds reversible. The sleepiness, the sips, the muddle with clear moments breaking through — in someone whose heart is as weak as your mum’s, this usually means she has started dying. Not from thirst, and not because of anything either of you has done. I’ll come today and examine her to be sure.",
    "dom": "tasks",
    "why": "Names the dying phase clearly while committing to examine"
   },
   {
    "who": "pt",
    "text": "(Alan, after a pause) So a drip wouldn’t help?"
   },
   {
    "who": "dr",
    "text": "It’s a fair question. At this stage a drip rarely eases thirst — regular mouth care does that better. With her heart so weak, fluid can collect in the lungs and legs and make breathing harder. If I find she’s distressed by dryness when I examine her, a trial of fluid under the skin is something we can try and stop if it causes problems. But it won’t reverse what’s happening.",
    "dom": "tasks",
    "why": "Evidence-based answer on hydration per NICE NG31, including the trial option"
   },
   {
    "who": "dr",
    "text": "Three months ago your mum sat at the kitchen table and said, in her own words, ‘No more hospitals. I want to go from my own bed, with the garden out the window.’ That was her decision, made when she was well enough to make it. Wendy, you haven’t done something terrible. You’ve kept her wishes.",
    "dom": "rto",
    "why": "Anchors decisions to Iris’s own recorded words, relieving both children"
   },
   {
    "who": "pt",
    "text": "(Wendy crying) Thank you. (Alan) I didn’t know she’d said that."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what I’ll do. I’ll visit this afternoon. I’ll ask the district nurses to bring medicines to keep in the house — for pain, breathlessness, agitation, sickness or noisy breathing — so if she needs anything, it’s there without waiting. And I’ll stop anything she no longer needs.",
    "dom": "tasks",
    "why": "Same-day visit, anticipatory medicines and district nursing (NICE NG31)"
   },
   {
    "who": "dr",
    "text": "Alan, there’s real work you can do. Keeping her mouth moist with a sponge every hour or so, playing the music she loves, sitting with her in the clear moments. The nurses will show you. Wendy, can you share that with him so you both get some rest?",
    "dom": "rto",
    "why": "Gives the brother meaningful tasks and supports the carer"
   },
   {
    "who": "pt",
    "text": "(Alan) I can do that. I want to do that."
   },
   {
    "who": "dr",
    "text": "The picking and the sleepiness are part of this — when she wakes and knows you, like this morning, that’s the time to say what matters. You may also notice her breathing change. None of it needs a blue-light ambulance.",
    "dom": "gs",
    "why": "Prepares the family for changes so they are not emergencies"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If she seems in pain, distressed, agitated, or her breathing is noisy and troubling her — ring the district nurses or the hospice line, day or night. I’ll give you the numbers again when I visit, for the fridge. When the time comes, there’s no need for 999: ring us, or 111 out of hours, and keep the ReSPECT form by her bed. Can you tell me back what you’ll do?",
    "dom": "gs",
    "why": "Specific safety-net for dying at home, with teach-back"
   },
   {
    "who": "pt",
    "text": "(Wendy) You’re coming this afternoon, nurses bring the medicines, any distress we ring the nurses or hospice. No 999 — ring you or 111. Form by the bed."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll see you both this afternoon, and I’ll ring tomorrow at nine. You’re both doing right by her.",
    "dom": "rto",
    "why": "Timed follow-up and supportive close"
   },
   {
    "who": "pt",
    "text": "(Wendy) Thank you, doctor. Really."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; answered “am I doing something terrible?” before clinical detail; invited Alan onto speaker.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Wendy as live-in carer, Alan’s absence and shock, the kitchen-table promise, the ReSPECT conversation Alan missed.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "The guilt question, Alan’s voice in the background, and the hand-squeeze as a lucid interval.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Wendy (half-knows her mother is dying; guilt about the promise; wants the truth); Alan (believes she is dehydrated; wants action).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Same-day visit: chest, bladder, bowel, hydration, signs of opioid toxicity; tests only if they would change the comfort plan.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Dying phase versus reversible delirium (infection, retention, constipation, drugs, opioid accumulation, hypercalcaemia).",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Phone-screened reversible causes and distressing symptoms; examination arranged to complete the judgement.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated clearly and kindly that Iris is probably dying from end-stage heart failure.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Anticipatory medicines, district nursing, mouth care, hydration per NICE NG31 (trial only for distressing dehydration), non-essential medicines stopped, ReSPECT and DNACPR confirmed.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Heart failure (fluid risk), oxycodone accumulation, family conflict and carer strain.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named contacts for distress; what to do at the time of death (no 999); visit today and call tomorrow.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Iris Caldwell",
    "age": "88 years · female",
    "pmh": [
     "End-stage heart failure (EF 15%)",
     "Palliative care register"
    ],
    "meds": [
     "Oxycodone (low dose) for breathlessness",
     "Furosemide and ramipril stopped 1 month ago"
    ],
    "allergy": "NKDA",
    "recent": "⚠ ReSPECT form 3 months ago: comfort focus, preferred place of death home, DNACPR. Completed with Iris (full capacity), GP and heart failure nurse. Lives with daughter Wendy.",
    "reason": "Daughter on the phone: “Mum’s gone muddled and sleepy, hardly drinking.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Answer her question",
     "d": "“Am I doing something terrible?” — answer it directly. Invite Alan onto speaker."
    },
    {
     "t": "1–4",
     "h": "Reversibility screen",
     "d": "Fever, cough, urine, bowels, falls, new drugs, oxycodone, pain, distress, breathing."
    },
    {
     "t": "4–6",
     "h": "Hear both children",
     "d": "Alan’s shock and the drip; Wendy’s promise and guilt; what each wants today."
    },
    {
     "t": "6–10",
     "h": "Name it and plan",
     "d": "She is probably dying. The honest answer on drips. Read Iris’s ReSPECT words. Visit today, anticipatory medicines, tasks for Alan."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Distress numbers, no 999 at the end, ReSPECT by the bed, call tomorrow, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Sends her to hospital or arranges a drip on demand; or labels her dying with no reversibility screen; ignores Alan; never answers Wendy’s question; no anticipatory medicines or plan for the death at home.",
    "pass": "Screens reversible causes, recognises the dying phase, explains hydration honestly, arranges a visit and anticipatory medicines, and gives a basic safety-net.",
    "exc": "All of the above, plus: answers Wendy’s guilt first, brings Alan in and gives him tasks, reads Iris’s own words so neither child carries the decision, offers a hydration trial for distress per NICE NG31, prepares them for changes, and books a timed follow-up."
   },
   "avoid": [
    {
     "dont": "“She’s on the palliative register, so there’s nothing more to do.”",
     "instead": "“There’s a lot to do — just not a drip. Let’s start with her mouth care and medicines in the house today.”",
     "why": "Families hear “nothing to do” as abandonment; there is plenty of active care."
    },
    {
     "dont": "“It’s all in the DNACPR form, so the decision’s been made.”",
     "instead": "“Your mum told us in her own words what she wanted. Let me read them to you.”",
     "why": "Quoting a form as authority antagonises the absent relative; her words bring him in."
    },
    {
     "dont": "“Alan, I need to speak to Wendy as she’s the main carer.”",
     "instead": "“Alan, thank you for being there — what do you think is going on with your mum?”",
     "why": "Excluding the angry sibling guarantees the plan collapses later that day."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family dynamics",
     "t": "The relative who has been away often arrives with shock and guilt that shows as anger. Include them, explain, and give them tasks."
    },
    {
     "h": "Carer strain",
     "t": "Wendy has been the live-in carer; offer respite support, district nursing and hospice input, and a carer’s assessment."
    }
   ],
   "legal": [
    {
     "h": "Mental Capacity Act 2005",
     "t": "Iris now lacks capacity for these decisions. Clinicians act in her best interests, taking her past wishes and beliefs into account and consulting family. Family cannot demand a treatment that is not clinically indicated."
    },
    {
     "h": "ReSPECT and DNACPR",
     "t": "The ReSPECT form records Iris’s wishes and clinical recommendations; it is not a legally binding refusal, but it carries great weight in a best-interests decision. The DNACPR decision remains in force."
    },
    {
     "h": "Expected death at home",
     "t": "An expected death does not need 999. The GP or out-of-hours service is contacted, the death is verified, and the medical certificate of cause of death completed per current process."
    }
   ],
   "professional": [
    {
     "h": "GMC Treatment and care towards the end of life (2010)",
     "t": "Share information honestly with those close to the patient, consider their views in best-interests decisions, and handle disagreement openly."
    },
    {
     "h": "Continuity",
     "t": "Update the record and out-of-hours services so the plan, anticipatory medicines and ReSPECT are visible at 3am."
    }
   ],
   "community": [
    {
     "h": "Services",
     "t": "District nursing, hospice 24-hour advice line, heart failure nursing team, Marie Curie night support where available, bereavement support afterwards."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Reversible causes: fever, cough, urinary retention, constipation, new drugs, opioid accumulation, falls",
     "Distressing symptoms needing treatment today: pain, agitation, breathlessness, noisy secretions",
     "Signs of dying: increasing drowsiness, minimal intake, restlessness, lucid intervals, dark scanty urine"
    ],
    "psychosocial": [
     "Wendy’s promise and her guilt",
     "Alan’s absence, shock and anger",
     "Who is doing the caring, and how much more they can do"
    ],
    "ice": [
     "Idea: Wendy half-knows her mother is dying; Alan thinks she is dehydrated",
     "Concern: Wendy — “am I doing something terrible?”; Alan — she is being given up on",
     "Expectation: Wendy — the truth and support; Alan — to do something"
    ]
   },
   "diagnosis": "“I haven’t found anything that sounds reversible. With her heart as weak as it is, the sleepiness, sips and muddle with clear moments usually mean she has started dying. I’ll come today to confirm.”",
   "diagnosisLay": "“Her body is slowly shutting down, the way a fire burns down to embers. She needs less, sleeps more, and drifts in and out. A drip can’t relight the fire, and in a tired heart it can make breathing harder.”",
   "management": {
    "reflectIce": "“Wendy, you asked if you’re doing something terrible. You’re not — you’re keeping her wishes. Alan, your wish to do something is love, and there is plenty to do.”",
    "psychosocial": "Bring both children into the plan, read Iris’s words, and share the care between them.",
    "sharedPlan": [
     "GP visit today to examine and confirm; district nursing involved",
     "Anticipatory medicines in the house today; non-essential medicines stopped",
     "Mouth care hourly; clinically assisted hydration only as a trial for distressing dehydration (NICE NG31)"
    ],
    "safetyNet": [
     "Distress, pain, agitation or noisy breathing: district nurse or hospice line",
     "At the time of death: no 999 — surgery or 111, ReSPECT form by the bed; GP call tomorrow"
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
    "s": "Management protocol · NICE NG31",
    "href": "management/care-of-the-dying.html"
   },
   {
    "ic": "💠",
    "t": "Palliative delirium and agitation",
    "s": "Management protocol",
    "href": "management/palliative-delirium-agitation.html"
   },
   {
    "ic": "📋",
    "t": "Heart failure",
    "s": "Case walkthrough · NICE NG106",
    "href": "../cases/heart-failure.html"
   }
  ],
  "pitfalls": {
   "intro": "Three people are on this call. The station is failed by doctors who either give in to the demand for a drip or overrule the brother, and by those who skip either the reversibility screen or the plain statement that she is dying.",
   "items": [
    {
     "dom": "rto",
     "fail": "Launching into questions about fever and urine before answering “am I doing something terrible?”",
     "why": "The question is the hidden agenda; ignoring it reads as not hearing the caller.",
     "fix": "Answer it directly in the first minute, then gather the history."
    },
    {
     "dom": "rto",
     "fail": "Talking only to Wendy while Alan shouts in the background.",
     "why": "An excluded relative undoes the plan by evening; examiners mark whether you manage the third party.",
     "fix": "Invite him onto speaker, ask his view, acknowledge his shock and give him tasks."
    },
    {
     "dom": "tasks",
     "fail": "Declaring her dying without asking about infection, retention, constipation or drugs.",
     "why": "New confusion always deserves a reversibility screen, even on the palliative register.",
     "fix": "Screen by phone, and say the visit today will complete the judgement."
    },
    {
     "dom": "tasks",
     "fail": "Either agreeing to admission for a drip, or saying “we don’t do drips in dying patients”.",
     "why": "NICE NG31 supports a therapeutic trial of clinically assisted hydration for distressing dehydration, but not as routine.",
     "fix": "Explain mouth care and the heart-failure risk, and offer a trial if dryness itself causes distress."
    },
    {
     "dom": "tasks",
     "fail": "No anticipatory medicines or plan for the death at home.",
     "why": "The wish to die at home fails without medicines in the house and clear instructions.",
     "fix": "Anticipatory medicines and district nursing today; tell them not to ring 999 at the end."
    },
    {
     "dom": "gs",
     "fail": "Using the ReSPECT form as a weapon: “it’s signed, so that’s that.”",
     "why": "It escalates conflict with the absent sibling and sounds bureaucratic.",
     "fix": "Read Iris’s own words aloud, so the decision is hers and neither child has to win."
    }
   ]
  }
 },
 "pall-pain": {
  "stem": {
   "name": "Ronald Hayes",
   "age": "71-year-old man",
   "pmh": [
    "Metastatic prostate cancer — bone metastases in spine, pelvis and both femurs",
    "On the palliative care register; hospice community team involved"
   ],
   "meds": [
    "Morphine sulfate modified-release (MST) 30 mg twice daily",
    "Oramorph (morphine oral solution) 5 mg as required",
    "Senna"
   ],
   "allergy": "No known drug allergies",
   "recent": "Hospice community team letter four days ago regarding resuscitation. Wife reports oramorph used 5–6 times daily for the last 3 days.",
   "reason": "Telephone call from his wife Brenda: “The pain’s got on top of him.”"
  },
  "knowledge": {
   "guideline": "NICE CG140 — Palliative care for adults: strong opioids · NICE NG234 — Spinal metastases and MSCC · BNF prescribing in palliative care",
   "summary": "New severe weight-bearing pain in a femur with metastases is a pathological fracture until imaged. His breakthrough dose is below the BNF range for his background morphine, and frequent PRN use means the regular dose needs review.",
   "points": [
    {
     "h": "The change in pattern is the finding",
     "t": "Chronic bone-metastasis ache that suddenly becomes severe, focal and worse on weight-bearing (he “went white” standing from the commode) suggests an impending or actual pathological fracture. Same-day assessment and imaging; no weight-bearing on that leg meanwhile."
    },
    {
     "h": "Breakthrough arithmetic",
     "t": "BNF: the breakthrough dose is usually one-tenth to one-sixth of the regular 24-hour dose, given every 2–4 hours as needed. MST 30 mg twice daily = 60 mg a day, so the PRN dose is 6–10 mg; 5 mg is below the range."
    },
    {
     "h": "When to increase the background",
     "t": "Regular need for several PRN doses a day means the background dose needs review: total the 24-hour opioid use and adjust with the palliative team, then recalculate the breakthrough dose. NICE CG140: prescribe laxatives regularly for everyone on strong opioids."
    },
    {
     "h": "Check safety before escalating",
     "t": "Ask about drowsiness, confusion, myoclonus (twitching), hallucinations and urine output; know his renal function. Opioid toxicity changes the plan."
    },
    {
     "h": "Other red flags to screen by phone",
     "t": "Spinal metastases: new back pain, leg weakness, numbness, bladder or bowel change = suspected MSCC (NICE NG234), urgent same-day discussion with the acute oncology/MSCC service. Thirst, vomiting, constipation and confusion suggest hypercalcaemia."
    },
    {
     "h": "Bone pain options",
     "t": "Adjuncts for bone pain (an NSAID or dexamethasone, dose per BNF and hospice advice), single-fraction palliative radiotherapy for localised bone pain, and orthopaedic opinion on fixation if a fracture or impending fracture is found."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Hayes, it’s Dr Lee. I’m sorry things are so hard today. Tell me what’s been happening with Ronnie.",
    "dom": "rto",
    "why": "Warm, open start that lets the caller lead"
   },
   {
    "who": "pt",
    "text": "The pain’s got on top of him, doctor. The little bottle of morphine barely touches it and he’s having it five, six times a day. Last night he cried. Forty-three years and I’ve never seen him cry. And I’m frightened of doing something wrong with all these bottles."
   },
   {
    "who": "dr",
    "text": "That must have been awful to see. I want to help with the pain and with the bottles, and I’ll make sure you have a clear plan before we finish. Is Ronnie with you — is he happy for us to talk about him, or could he come to the phone for a moment?",
    "dom": "tasks",
    "why": "Acknowledges distress, sets agenda and checks the patient’s consent"
   },
   {
    "who": "pt",
    "text": "He’s in the chair beside me. (muffled) He says yes, you talk to me, I’m better with the details."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Thank you. Where exactly is the pain, and is it the same as the pain he’s had before?",
    "dom": "tasks",
    "why": "Distinguishes new pain from chronic background pain"
   },
   {
    "who": "pt",
    "text": "It’s his right thigh. It’s different from his back. Yesterday he got off the commode, put his weight on it and went white — nearly went down. Sitting still it grumbles. If he moves, he cries out."
   },
   {
    "who": "dr",
    "text": "That’s very important, thank you. Does the leg look any different — a different shape, turned out, or shorter? And can he feel and move his feet normally?",
    "dom": "tasks",
    "why": "Screens for deformity (fracture) and neurological change (MSCC)"
   },
   {
    "who": "pt",
    "text": "It looks the same to me. He can wiggle his toes. His feet feel normal, he says."
   },
   {
    "who": "dr",
    "text": "Any change with his waterworks or bowels, any new back pain or numbness around his bottom?",
    "dom": "tasks",
    "why": "Completes the spinal cord compression screen"
   },
   {
    "who": "pt",
    "text": "No. Bowels opened yesterday. He’s passing water fine. The back is his usual ache."
   },
   {
    "who": "dr",
    "text": "And the morphine — is he sleepier than usual, muddled, seeing things, or having jerky twitches? Is he very thirsty or being sick?",
    "dom": "tasks",
    "why": "Checks opioid toxicity and hypercalcaemia before escalating"
   },
   {
    "who": "pt",
    "text": "No, his mind’s clear. He’s still Ronnie — he’s just in pain. Eating little, drinking all right, not sick."
   },
   {
    "who": "dr",
    "text": "So he takes the slow-release morphine, 30 milligrams twice a day, and the liquid 5 milligrams — how long does each dose help?"
   },
   {
    "who": "pt",
    "text": "Half an hour, maybe. Then he’s asking again."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said you’re frightened of doing something wrong with the bottles. Tell me more about that fear.",
    "dom": "rto",
    "why": "Explores the cue rather than just answering the dose question"
   },
   {
    "who": "pt",
    "text": "My mum died of cancer in 1998, screaming for help that never came. I promised myself Ronnie wouldn’t go like that. But I’ve heard it’s the morphine that finishes them at the end. So every time I give it, I think — am I helping him or…"
   },
   {
    "who": "dr",
    "text": "Thank you for telling me — that’s a lot to be carrying on your own. I want to answer that properly. Morphine given in the right dose for pain does not shorten life. What it does is control the pain. What happened to your mum sounds like pain that wasn’t treated enough — and that is exactly what we’re going to prevent for Ronnie.",
    "dom": "rto",
    "why": "Corrects the morphine myth honestly and links it to her story"
   },
   {
    "who": "pt",
    "text": "(pause) There’s a letter from the hospice we haven’t… we haven’t got round to opening. It’s about resuscitation."
   },
   {
    "who": "dr",
    "text": "Thank you for mentioning it — I’m glad you did. What do you imagine is in it?",
    "dom": "rto",
    "why": "Picks up the sideways cue and explores it"
   },
   {
    "who": "pt",
    "text": "If we open it, it’s real, isn’t it? It’s on the mantelpiece. He pretends he can’t see it. I dust round it. What I really want is someone to see him — and tell me what I can give him without getting it wrong."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’ll deal with the thigh first because it worries me most. Cancer in a thigh bone can weaken it, and pain like that on standing can mean the bone has cracked or is about to. There are good treatments if so — an operation to strengthen the bone, or a single session of radiotherapy — but he needs an X-ray today, and until then he mustn’t put weight through that leg.",
    "dom": "tasks",
    "why": "Explains suspected pathological fracture and names hopeful options"
   },
   {
    "who": "pt",
    "text": "Oh. I thought it was just the cancer getting worse."
   },
   {
    "who": "dr",
    "text": "It may be, but we check. The second thing is fixable today: his top-up dose is too small for the amount of slow-release morphine he’s on. For his dose the top-up should be larger — I’ll agree the exact amount with the hospice team this afternoon. And needing it five or six times a day tells us his background dose needs raising too.",
    "dom": "tasks",
    "why": "Explains the breakthrough mismatch and need for titration"
   },
   {
    "who": "dr",
    "text": "About the letter: I don’t know what it says, and I don’t want to guess on the phone. Letters like that are usually about making sure his wishes are known if his heart were to stop. It isn’t a decision made behind your backs, and it doesn’t change any other treatment. When I come, we can open it together, the three of us, if you both want to.",
    "dom": "rto",
    "why": "Honest about uncertainty; offers to open it together"
   },
   {
    "who": "pt",
    "text": "I’d like that. I don’t think I could open it on my own."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "So here’s the plan. I’ll visit this afternoon to examine his leg and check his kidney test results, and arrange an X-ray of the thigh today. I’ll ring the hospice team within the hour about his doses and about pain relief that helps bone pain in particular. Does that fit with your day?",
    "dom": "tasks",
    "why": "Same-day assessment, imaging and specialist input with clear timings"
   },
   {
    "who": "pt",
    "text": "Yes. We’re not going anywhere."
   },
   {
    "who": "dr",
    "text": "Until I arrive: help him with any moves — no standing on that leg. He can have his top-up now if he needs it. When I visit, I’ll write the new doses down with you, one sheet — what to give, how often, and a column to record the times. And keep the senna going every day; morphine and constipation go together.",
    "dom": "tasks",
    "why": "Handling advice, written plan and laxatives with opioid (NICE CG140)"
   },
   {
    "who": "pt",
    "text": "Written down. That’s what I need. I get muddled with all the bottles."
   },
   {
    "who": "dr",
    "text": "That’s why we’ll do it together. And Brenda — you’re doing a remarkable job. Ringing today was the right thing to do, not a sign you’re not coping.",
    "dom": "rto",
    "why": "Supports the carer and reframes the call"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If his leg suddenly looks a different shape, can’t take any weight at all, or goes numb — or he can’t pass water or his legs go weak — ring 999 and tell them about the cancer in his bones. If he becomes very sleepy, muddled or starts twitching, ring the surgery or the hospice line straight away. Can you tell me back what you’ll do?",
    "dom": "gs",
    "why": "Specific red-flag safety-net with teach-back"
   },
   {
    "who": "pt",
    "text": "No standing on the leg. You’re coming this afternoon with the X-ray sorted. Leg looks wrong or numb or he can’t wee — 999. Sleepy or twitching — ring you. And we open the letter together."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll see you this afternoon, and I’ll ring you this evening once I’ve heard about the X-ray. You’re not on your own with the bottles any more.",
    "dom": "gs",
    "why": "Confirms follow-up and closes supportively"
   },
   {
    "who": "pt",
    "text": "Thank you, doctor. Thank you."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let Brenda describe the pain and her fear; checked Ronnie’s consent to discuss him.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Brenda as sole carer, her mother’s death in pain, the burden of managing bottles, their 43-year marriage.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "“Frightened of doing something wrong” (dosing and the morphine myth); the unopened hospice letter.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Ideas (cancer in bones, morphine “stops working”); concerns (morphine shortens life, the letter); expectations (written plan, a visit, not being left alone).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Same-day visit and X-ray of the femur; renal function and calcium if toxicity or hypercalcaemia suspected.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Pathological fracture versus progression of bone pain; MSCC; opioid toxicity; hypercalcaemia.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about deformity, leg weakness, numbness, bladder and bowel, drowsiness, twitching, thirst and vomiting.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Suspected pathological fracture of the right femur with uncontrolled bone pain and an inadequate breakthrough dose.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "No weight-bearing; same-day imaging; hospice input on titration; breakthrough dose within the BNF range (one-tenth to one-sixth of the 24-hour dose); bone-pain adjuncts and radiotherapy considered.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Regular laxative with the opioid, renal function before escalation, carer support and the resuscitation letter.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 triggers (deformed or numb leg, can’t pass urine, weak legs); same-day triggers (drowsiness, twitching); visit and evening call-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Older adults"
   ],
   "stem": {
    "name": "Ronald Hayes",
    "age": "71 years · male",
    "pmh": [
     "Metastatic prostate cancer — bone metastases (spine, pelvis, femurs)",
     "Palliative care register"
    ],
    "meds": [
     "MST 30 mg BD",
     "Oramorph 5 mg PRN",
     "Senna"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Hospice community team involved. Letter from hospice re: resuscitation sent 4 days ago. Last U&E and calcium: check record.",
    "reason": "Wife Brenda on the phone: “The pain’s got on top of him.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Listen and agree roles",
     "d": "Let Brenda describe the pain and her fear. Check Ronnie is happy for you to talk to her."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "New thigh pain on weight-bearing, deformity, MSCC screen, opioid toxicity, hypercalcaemia, PRN use and effect."
    },
    {
     "t": "4–6",
     "h": "ICE and cues",
     "d": "Explore the bottles fear — her mother’s death and the morphine myth. Catch the unopened letter."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Suspected fracture — X-ray today, no weight-bearing. Breakthrough dose too low; hospice to titrate. Offer to open the letter together."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 and same-day triggers, written plan at the visit, evening call-back, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Increases morphine by phone without asking about the thigh; misses the suspected fracture or MSCC screen; no toxicity check; ignores the letter; leaves Brenda without a written plan or safety-net.",
    "pass": "Recognises the new weight-bearing pain as a possible fracture and arranges same-day assessment; corrects the breakthrough dose with hospice input; checks toxicity; gives a safety-net.",
    "exc": "All of the above, plus: answers the morphine myth with evidence and kindness, links it to her mother’s death, gently explores the unopened letter and offers to open it together, writes the plan with her, and promises and keeps a call-back."
   },
   "avoid": [
    {
     "dont": "“Just give him more of the liquid morphine whenever he needs it.”",
     "instead": "“The new pain on standing worries me — I want his thigh X-rayed today, and I’ll write down exactly what to give.”",
     "why": "Escalating opioids without assessing a possible fracture misses the diagnosis and leaves her with vague instructions."
    },
    {
     "dont": "“Don’t worry about the morphine, it’s perfectly safe.”",
     "instead": "“Morphine in the right dose for pain doesn’t shorten life — it controls the pain. What happened to your mum was pain not treated enough.”",
     "why": "Blanket reassurance ignores the specific myth and the family history behind it."
    },
    {
     "dont": "“That letter will just be the DNACPR form — you should read it.”",
     "instead": "“What do you imagine is in it? When I visit, we can open it together.”",
     "why": "Guessing its contents and telling her to open it alone misses the emotional weight of the envelope."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Carer burden",
     "t": "Brenda manages several opioid bottles alone and fears harming him. A written chart, a single named contact and the hospice line reduce that burden."
    },
    {
     "h": "Previous bereavement",
     "t": "Her mother’s death in uncontrolled pain in 1998 shapes both her vow and her fear of morphine. Naming it lets you answer the real worry."
    }
   ],
   "legal": [
    {
     "h": "Consent and third-party calls",
     "t": "Ronnie has capacity; check he is happy for his wife to speak for him and record it."
    },
    {
     "h": "DNACPR discussions",
     "t": "Tracey v Cambridge University Hospitals (2014): patients should be involved in DNACPR decisions unless this would cause physical or psychological harm. A letter that arrives without a prior conversation is worth checking with the hospice."
    },
    {
     "h": "Controlled drugs",
     "t": "Morphine is a Schedule 2 controlled drug (oral solution at low strength is Schedule 5). Keep doses written and quantities reviewed; community pharmacy can help with disposal of unused stock."
    }
   ],
   "professional": [
    {
     "h": "GMC Treatment and care towards the end of life (2010)",
     "t": "Offer patients and families honest information, including about resuscitation, at a pace they can manage; support carers."
    },
    {
     "h": "Team working",
     "t": "Contact the hospice team the same day and tell Brenda who is ringing whom and when; record the plan so out-of-hours services can see it."
    }
   ],
   "community": [
    {
     "h": "Services",
     "t": "Hospice community team and 24-hour advice line, district nursing, community pharmacy, Marie Curie and Macmillan for carer support, carer’s assessment from the local authority."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "New severe weight-bearing pain in a bone with metastases: suspected pathological fracture",
     "Back pain with leg weakness, numbness, or bladder or bowel change: suspected MSCC (NICE NG234)",
     "Drowsiness, confusion, twitching (opioid toxicity); thirst, vomiting, constipation, confusion (hypercalcaemia)"
    ],
    "psychosocial": [
     "Brenda’s capacity to manage the medicines alone",
     "Her mother’s death and the morphine myth",
     "The unopened resuscitation letter and what it means to both of them"
    ],
    "ice": [
     "Idea: “The cancer is in his bones and the morphine has stopped working”",
     "Concern: morphine “finishes them”; opening the letter makes it real",
     "Expectation: written instructions, someone to see him, not being left alone"
    ]
   },
   "diagnosis": "“The new pain in his thigh on standing may mean the bone has cracked where the cancer has weakened it. He needs an X-ray today. His top-up morphine is also too small for his regular dose.”",
   "diagnosisLay": "“His slow morphine is the steady background, and the top-up is meant to cover the peaks. At the moment the top-up is too small to reach the peak — like trying to put out a bonfire with a cup of water.”",
   "management": {
    "reflectIce": "“You made a promise that he wouldn’t die in pain like your mum. Getting the dose right is how we keep that promise — morphine used properly doesn’t shorten life.”",
    "psychosocial": "Write the plan with her, give one number to ring, and offer to open the letter together at the visit.",
    "sharedPlan": [
     "Same-day visit and X-ray of the right femur; no weight-bearing meanwhile",
     "Hospice team contacted for titration; breakthrough dose within one-tenth to one-sixth of the 24-hour dose (BNF)",
     "Bone-pain adjuncts and palliative radiotherapy considered; orthopaedic opinion if fracture; regular laxative"
    ],
    "safetyNet": [
     "999 if leg deformed, numb or useless, legs weak, or unable to pass urine",
     "Ring the same day for drowsiness, confusion or twitching; GP call-back this evening"
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
    "t": "Palliative pain",
    "s": "Management protocol · opioid titration",
    "href": "management/palliative-pain.html"
   },
   {
    "ic": "💠",
    "t": "Metastatic spinal cord compression",
    "s": "Management protocol · NICE NG234",
    "href": "management/mscc.html"
   },
   {
    "ic": "🗺️",
    "t": "Thigh pain",
    "s": "Visual algorithm",
    "href": "algorithms/thigh-pain.html"
   }
  ],
  "pitfalls": {
   "intro": "This telephone station looks like a dosing question. It is failed by doctors who answer only the dose, miss the new mechanical pain, and never reach the fear or the envelope.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Increasing the morphine by phone without asking why the pain changed.",
     "why": "New severe weight-bearing pain in a femur with metastases is a pathological fracture until imaged. Missing it is an unsafe plan.",
     "fix": "Ask what changed, advise no weight-bearing, and arrange same-day assessment and X-ray."
    },
    {
     "dom": "tasks",
     "fail": "Not noticing that the breakthrough dose is too small.",
     "why": "The BNF range is one-tenth to one-sixth of the 24-hour dose (6–10 mg on MST 30 mg twice daily). 5 mg is below it, which explains the poor response.",
     "fix": "Do the arithmetic aloud, agree the new dose with the hospice team, and put it in writing."
    },
    {
     "dom": "tasks",
     "fail": "Escalating opioids without a toxicity or MSCC screen.",
     "why": "Drowsiness, twitching or confusion change the plan; spinal metastases make MSCC a must-ask.",
     "fix": "Two quick questions each: sleepy or twitching? Legs weak, numb, bladder or bowel change?"
    },
    {
     "dom": "rto",
     "fail": "Answering “I’m frightened of doing something wrong” with a dose alone.",
     "why": "The fear contains the morphine myth and her mother’s death. Unaddressed, she will under-give.",
     "fix": "Explore the fear, then answer the myth honestly and link it to her story."
    },
    {
     "dom": "rto",
     "fail": "Letting the mention of the letter pass, or telling her what it says.",
     "why": "The unopened envelope is the hidden agenda. Guessing its contents risks being wrong and dismissive.",
     "fix": "“What do you imagine is in it?” — then offer to open it together at the visit."
    },
    {
     "dom": "gs",
     "fail": "“Ring back if it gets worse.”",
     "why": "Non-specific safety-netting and no named follow-up are standard failing feedback.",
     "fix": "Named 999 and same-day triggers, a written chart at the visit, and a timed call-back."
    }
   ]
  }
 },
 "teacher-call": {
  "stem": {
   "name": "Tyler Brooks",
   "age": "8-year-old boy",
   "pmh": [
    "Asthma",
    "Younger sibling registered at the practice"
   ],
   "meds": [
    "Asthma inhalers on repeat (review overdue)"
   ],
   "allergy": "No known drug allergies",
   "recent": "Two asthma reviews not attended. A&E 6 weeks ago: arm pain, “fell off bunk bed”, discharged. Health visitor note on sibling’s record: mother’s new partner recently moved in.",
   "reason": "Telephone call-back requested by Mrs Angela Reeve, designated safeguarding lead at Tyler’s primary school."
  },
  "knowledge": {
   "guideline": "Working Together to Safeguard Children 2026 (DfE) · Keeping Children Safe in Education 2026 (DfE) · NICE NG76 (2017) · NICE CG89 (2009) · GMC Protecting children and young people (2012)",
   "summary": "A third-party safeguarding call: receive everything, share out only as safeguarding requires, and never let a duty transfer. The DSL refers and the GP refers in parallel, today.",
   "points": [
    {
     "h": "Recognise the pattern",
     "t": "NICE CG89 lists alerting features including unexplained bruising, secondary wetting, persistent hunger and fearful or withdrawn behaviour. Individually soft; together, new this term with a new adult in the home, they meet the referral threshold."
    },
    {
     "h": "Records corroborate",
     "t": "An A&E attendance with an injury explanation, missed health appointments and a health visitor note about household change add weight. Review the whole family’s records, including the sibling."
    },
    {
     "h": "Duties do not transfer",
     "t": "Working Together to Safeguard Children 2026: each professional acts on their own concern and anyone can refer to children’s social care. KCSIE 2026 places the referral responsibility on the school’s DSL."
    },
    {
     "h": "Confidentiality both ways",
     "t": "Information can be received freely. The GP shares the child’s or family’s information only with children’s social care and other agencies as safeguarding requires, not with the caller (GMC Protecting children and young people, 2012)."
    },
    {
     "h": "What the GP does",
     "t": "Make the practice’s referral, document the call, code the records, flag siblings, and create legitimate clinical contact — not a covert examination without safeguarding advice (NICE NG76)."
    },
    {
     "h": "Same-day triggers",
     "t": "Disclosure, visible injury, or a child afraid to go home → same-day children’s social care contact; immediate danger → 999."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, it’s Dr Lee returning your call from the surgery. Can I confirm who I’m speaking to and your role at the school?",
    "dom": "gs",
    "why": "Confirms identity and role before any discussion"
   },
   {
    "who": "pt",
    "text": "Angela Reeve. I’m Tyler Brooks’s class teacher, and the designated safeguarding lead — which is rather the problem. I know the family, you see. Socially. I was hoping you could look into it from your end. Quietly?"
   },
   {
    "who": "dr",
    "text": "Thank you for calling. Let me be clear about how this works: you can tell me everything — information coming to me breaches nothing. I can’t share details about the family back with you. Then we’ll agree who does what. Is that all right?",
    "dom": "tasks",
    "why": "Sets out confidentiality in both directions at the start"
   },
   {
    "who": "pt",
    "text": "Yes. That’s fair."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me what you’ve noticed about Tyler, from the beginning.",
    "dom": "rto",
    "why": "Open question; lets her give the full account"
   },
   {
    "who": "pt",
    "text": "He arrives hungry most mornings — inhales the breakfast club toast. He’s started wetting himself again after years dry. He flinched badly when a male assistant raised his voice. There’s bruising on his shin I couldn’t make sense of. And he’s gone quiet — he was the chattiest boy in the room."
   },
   {
    "who": "dr",
    "text": "When did these changes start? Has Tyler said anything himself?",
    "dom": "tasks",
    "why": "Establishes timeline and any disclosure"
   },
   {
    "who": "pt",
    "text": "All this term. About when his mum’s new partner moved in. Tyler said once, “Gav doesn’t like noise.”"
   },
   {
    "who": "dr",
    "text": "Where are these concerns recorded, and what’s been done so far?",
    "dom": "tasks",
    "why": "Checks what action and documentation already exist"
   },
   {
    "who": "pt",
    "text": "Nothing formal. They’re in my own notebook. The head prefers things handled informally."
   },
   {
    "phase": "Exploring the hesitation",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You mentioned you know the family socially. How is that affecting all this for you?",
    "dom": "rto",
    "why": "Follows the cue in her second sentence"
   },
   {
    "who": "pt",
    "text": "His mum and I were at school together. It’s a small town. If I’m wrong, I’ve blown up a family over toast and a bruise. And if I’m right, everyone knows it was me."
   },
   {
    "who": "dr",
    "text": "That’s a real bind, and it makes sense you’ve gone back and forth. Can I ask — if another school’s teacher described this child to you, what would you advise?",
    "dom": "rto",
    "why": "Helps her reach her own professional judgement without shaming"
   },
   {
    "who": "pt",
    "text": "(Pause.) I’d have told them to refer a fortnight ago."
   },
   {
    "phase": "Sharing the assessment",
    "clock": "6–9 min",
    "who": "dr",
    "text": "I agree with you. Hunger, wetting after years dry, flinching, unexplained bruising and a quiet boy — all starting when a new adult moved in. Taken together, that crosses the line for a referral to children’s social care. Your friendship hasn’t changed what Tyler needs; it’s changed what it costs you.",
    "dom": "tasks",
    "why": "Names the pattern as meeting the referral threshold"
   },
   {
    "who": "pt",
    "text": "So you’ll refer?"
   },
   {
    "who": "dr",
    "text": "I will make the practice’s own referral today, because I have information you don’t. But your duty as safeguarding lead is yours and doesn’t transfer to me. We both refer, today, and neither waits for the other. Two referrals are stronger than one.",
    "dom": "tasks",
    "why": "Clarifies that duties do not transfer; parallel referrals"
   },
   {
    "who": "pt",
    "text": "I was hoping you’d say it could come from you."
   },
   {
    "who": "dr",
    "text": "I understand. Social care are used to handling referrals sensitively, and a professional referral doesn’t mean your name is shared with the family. Being wrong kindly is far better than being right too late — for Tyler and for you.",
    "dom": "rto",
    "why": "Addresses her fear with accurate reassurance"
   },
   {
    "phase": "Plan and safety-net",
    "clock": "9–12 min",
    "who": "dr",
    "text": "Two more things. The notebook: today those notes go onto the school’s safeguarding record, dated. And the head’s preference doesn’t override your duty — anyone can refer to children’s social care directly, and if leadership obstructs, your chair of governors is the route.",
    "dom": "rto",
    "why": "Addresses the informal culture constructively and accurately"
   },
   {
    "who": "pt",
    "text": "The chair of governors. Right. I can do that."
   },
   {
    "who": "dr",
    "text": "On my side, I’ll review the family’s records, flag his younger sibling, and offer Tyler an asthma review as a normal appointment, following safeguarding advice. If Tyler comes in injured, or says he’s scared to go home, that’s a same-day call to children’s social care — or 999 if he’s in immediate danger.",
    "dom": "gs",
    "why": "GP actions, sibling flagged, and same-day escalation triggers"
   },
   {
    "who": "pt",
    "text": "Understood."
   },
   {
    "who": "dr",
    "text": "Can you tell me back what you’ll do after this call?",
    "dom": "rto",
    "why": "Teach-back to confirm actions"
   },
   {
    "who": "pt",
    "text": "Refer to children’s social care today. Put everything on the school system. Governors if the head pushes back. Same-day call if he’s hurt or scared."
   },
   {
    "who": "dr",
    "text": "Exactly. Ring me once you’ve referred, so we both know it’s done. You’ve done right by him by calling.",
    "dom": "gs",
    "why": "Closes the loop and supports the caller"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Confirmed caller identity and role; set confidentiality rules; open question for her full account.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "New partner in the home, younger sibling, the caller’s social ties, the school’s informal culture.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "“I know the family, socially”, “my own notebook”, “another school’s child”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Her idea (something is wrong since the partner arrived), concern (being identified as referrer), expectation (the GP takes it over).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Review of the family records (A&E, DNAs, HV note); legitimate clinical contact for Tyler following safeguarding advice, not a covert examination.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Physical abuse and neglect considered; alternative explanations acknowledged without letting them delay referral.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about disclosures; same-day triggers named (injury, fear of going home, immediate danger).",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated the cluster meets the threshold for referral to children’s social care.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Parallel referrals today; formal school record; governors route if obstructed; GP record review and sibling flagged.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Overdue asthma care addressed; younger sibling considered.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Call-back once she has referred; same-day escalation named; documented the call.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Tyler Brooks",
    "age": "8 years · male",
    "pmh": [
     "Asthma",
     "Sibling registered (HV involvement)"
    ],
    "meds": [
     "Asthma inhalers (review overdue)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ 2 asthma reviews not attended. A&E 6 weeks ago: arm pain, “fell off bunk bed”. HV note (sibling): mother’s new partner moved in.",
    "reason": "Call-back to school safeguarding lead, Mrs Angela Reeve, about Tyler."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Identity and ground rules",
     "d": "Confirm who she is. Information flows in freely; family details don’t flow back."
    },
    {
     "t": "1–4",
     "h": "Her full account",
     "d": "What she has seen, timeline, any disclosure, what is recorded and where."
    },
    {
     "t": "4–6",
     "h": "The hesitation",
     "d": "Explore the friendship and the small-town fear. Reflect her own “another school’s child” judgement."
    },
    {
     "t": "6–9",
     "h": "Threshold and duties",
     "d": "Name the pattern as meeting the referral threshold. Her duty doesn’t transfer; both refer today."
    },
    {
     "t": "9–12",
     "h": "Actions and loop",
     "d": "Notebook onto the school record; governors if obstructed; GP record review, sibling flagged; same-day triggers; call-back once referred."
    }
   ],
   "wordPics": {
    "fail": "Agrees to “quietly look into it”; shares family details from the record; tells her the GP will handle the referral so she needn’t; no referral today; no escalation triggers.",
    "pass": "Takes the concerns seriously, recognises the threshold, explains confidentiality, advises her to refer and makes the practice’s own referral.",
    "exc": "All of the above, plus: explores her entanglement without shame; reflects her own professional judgement back; corrects the duty transfer clearly and kindly; addresses the notebook and the informal culture; flags the sibling; closes with dated parallel actions and a call-back."
   },
   "avoid": [
    {
     "dont": "“Leave it with me — I’ll see him at his asthma review and decide.”",
     "instead": "“This meets the threshold now. You refer today, and so will I.”",
     "why": "Delay and duty transfer are the classic failure of multi-agency safeguarding."
    },
    {
     "dont": "“Actually, the notes show he was in A&E recently with his arm.”",
     "instead": "“I’ll review our records and include what’s relevant in my own referral.”",
     "why": "Sharing the family’s records with the caller is a confidentiality breach."
    },
    {
     "dont": "“You really should have referred two weeks ago.”",
     "instead": "“You’ve already said what you’d advise another school. Let’s act on it today.”",
     "why": "Shaming the caller makes her less likely to act."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Household change",
     "t": "A new adult in the home, a younger sibling and missed health appointments are recognised contexts for maltreatment; all children in the household are considered."
    },
    {
     "h": "Small communities",
     "t": "Professional and social roles overlap. Fear of being identified is common; referrals from professionals are handled sensitively."
    }
   ],
   "legal": [
    {
     "h": "Duties do not transfer",
     "t": "Working Together to Safeguard Children 2026 (DfE): anyone with concerns can refer to local authority children’s social care, and each agency acts on its own concerns. Keeping Children Safe in Education 2026 (in force 1 September 2026) sets the DSL’s responsibilities."
    },
    {
     "h": "Information sharing",
     "t": "The GP may share information with children’s social care to safeguard a child, including without parental consent where seeking it would increase risk (GMC Protecting children and young people, 2012; Data Protection Act 2018)."
    },
    {
     "h": "Children Act 1989",
     "t": "Section 47 enquiries are led by children’s social care where there is reasonable cause to suspect significant harm; the GP contributes information."
    }
   ],
   "professional": [
    {
     "h": "Documentation",
     "t": "Record the call contemporaneously: caller, role, what was reported, advice given and actions agreed. Code the child’s record and link the sibling’s."
    },
    {
     "h": "When the LADO applies",
     "t": "The LADO handles allegations against adults who work with children. A head preferring informality is a governance issue for the governing body, not a LADO matter."
    }
   ],
   "community": [
    {
     "h": "Support and advice",
     "t": "Practice safeguarding lead and named GP for advice; local safeguarding children partnership procedures; NSPCC helpline for professionals seeking advice."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Disclosure by the child, visible injury, or a child afraid to go home — same-day children’s social care contact",
     "Immediate danger — 999",
     "Implausible injury explanation on record, missed appointments, younger sibling in the household"
    ],
    "psychosocial": [
     "New partner in the home this term",
     "Caller’s social ties to the family and fear of being identified",
     "School leadership preferring informal handling"
    ],
    "ice": [
     "Idea: something is wrong at home since “Gav” moved in",
     "Concern: being identified as the referrer in a small town, or being wrong",
     "Expectation: the GP quietly investigates and refers instead of her"
    ]
   },
   "diagnosis": "A cluster of new concerns (hunger, secondary wetting, flinching, unexplained bruising, withdrawal) coinciding with a new adult in the home, corroborated by GP records — meets the threshold for referral to children’s social care for suspected abuse or neglect.",
   "diagnosisLay": "“Any one of these on its own might have an innocent explanation. All of them together, starting at the same time, is the kind of pattern that has to be looked at properly by children’s services.”",
   "management": {
    "reflectIce": "“You’re worried about being the one who reported them. You won’t be acting alone — I’m referring too, today.”",
    "psychosocial": "Support the caller: acknowledge the bind, remove shame about the delay, reflect her own judgement, and agree a call-back.",
    "sharedPlan": [
     "School DSL refers to children’s social care today and moves notes onto the school record",
     "GP makes the practice’s own referral today, reviews the family’s records and flags the sibling",
     "Asthma review offered to Tyler as a normal appointment, following safeguarding advice"
    ],
    "safetyNet": [
     "Injury, disclosure or fear of going home — same-day children’s social care; immediate danger — 999",
     "Call-back once her referral is made; governors if leadership obstructs"
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
    "ic": "📋",
    "t": "Enuresis",
    "s": "Case walkthrough · secondary wetting",
    "href": "../cases/enuresis.html"
   },
   {
    "ic": "🗺️",
    "t": "Bruising pathway",
    "s": "Visual algorithm · unexplained bruising",
    "href": "algorithms/bruising.html"
   },
   {
    "ic": "🗺️",
    "t": "Daytime wetting in children",
    "s": "Visual algorithm",
    "href": "algorithms/daytime-urinary-incontinence-children.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests professional judgement more than clinical knowledge. It is failed by accepting the duty transfer, breaching confidentiality, or leaving without a referral in motion.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Agreeing to “look into it quietly” at the next asthma review.",
     "why": "Delays action and accepts a duty transfer the law does not allow (Working Together 2026).",
     "fix": "“This meets the threshold. You refer today, and I’ll make the practice’s referral too.”"
    },
    {
     "dom": "tasks",
     "fail": "Sharing record details with the caller — the A&E attendance, the new partner.",
     "why": "Breaches confidentiality; she is not the route for the family’s information.",
     "fix": "Receive everything; include relevant record details in your own referral to social care."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting the younger sibling.",
     "why": "Concerns about one child in the household extend to all children in it.",
     "fix": "Flag the sibling’s record and mention them in the referral."
    },
    {
     "dom": "rto",
     "fail": "Criticising her for the two-week delay.",
     "why": "“Does not show sensitivity.” Shame paralyses rather than mobilises.",
     "fix": "Reflect her own words: “You said you’d have advised another school to refer.”"
    },
    {
     "dom": "rto",
     "fail": "Ignoring the notebook and the head’s informal culture.",
     "why": "Leaves the concerns off the formal record and the barrier in place.",
     "fix": "Notes on the school system today; anyone can refer; governors if leadership obstructs."
    },
    {
     "dom": "gs",
     "fail": "Ending with “let’s both have a think”.",
     "why": "No dated actions; each professional assumes the other will act.",
     "fix": "Dated parallel actions, same-day triggers and a call-back to confirm the referral is made."
    }
   ]
  }
 },
 "uti-elderly": {
  "stem": {
   "name": "Harold Finch",
   "age": "87-year-old man",
   "pmh": [
    "Hypertension",
    "Osteoarthritis of the shoulder"
   ],
   "meds": [
    "Amlodipine 5 mg once daily",
    "Co-codamol 30/500 four times daily (started 3 weeks ago by a locum for shoulder pain)"
   ],
   "allergy": "No known drug allergies",
   "recent": "Care agency dipsticked his urine yesterday — reported “positive”. Daughter Carol reports a week of strong-smelling urine, dribbling and increased confusion in the evenings. Two weeks ago independent: crossword, walking to the paper shop. Lives at home with a care agency; Carol visits daily.",
   "reason": "Urgent video consultation requested by his daughter, who wants antibiotics started today."
  },
  "knowledge": {
   "guideline": "UKHSA Diagnosis of urinary tract infections: quick reference tools for primary care (2025) · NICE CG103 — delirium · NICE NG109 — lower UTI prescribing · NICE NG253 — sepsis",
   "summary": "Over 65, a positive dipstick does not diagnose infection. New evening confusion, dribbling and five days’ constipation after starting co-codamol point to opioid-induced constipation with urinary retention and overflow, and early delirium. Hunt the cause, examine the same day, and send a urine culture rather than treating a dipstick.",
   "points": [
    {
     "h": "Don’t dipstick over 65",
     "t": "UKHSA: urine dipsticks are not recommended in people aged 65 and over — up to half of older adults have bacteria in the urine without infection (asymptomatic bacteriuria), which does not need antibiotics. Smelly or dark urine alone is not a UTI and often reflects dehydration."
    },
    {
     "h": "Use symptoms and signs — and look for other causes",
     "t": "UKHSA over-65 tool: consider UTI with new dysuria, or two or more of new frequency or urgency, new incontinence, new or worse delirium, suprapubic pain, visible haematuria, or fever. New dribbling and new confusion overlap with retention and constipation, so exclude other causes and send a urine sample for culture before any antibiotic."
    },
    {
     "h": "Delirium means a cause-hunt",
     "t": "NICE CG103: identify and manage the possible causes of delirium. Here: a new opioid, five days’ constipation, likely retention, poor fluid intake — plus infection to exclude. A structured tool such as the 4AT helps document it."
    },
    {
     "h": "Opioid constipation and retention",
     "t": "Codeine commonly causes constipation (BNF) and can contribute to urinary retention; faecal loading can also impair bladder emptying. Retention with overflow presents as frequent dribbling of small volumes. Same-day in-person assessment: abdomen, PR examination and a bladder scan."
    },
    {
     "h": "Treat the cause",
     "t": "Stop or step down the co-codamol — regular paracetamol (dose per BNF) with a topical NSAID for the shoulder; start a laxative such as macrogol (dose per BNF); a fluid plan that answers his fear of leaking; catheterise if there is a significant residual volume, with urology follow-up. Antibiotics per NICE NG109 only if culture and clinical picture support infection."
    },
    {
     "h": "When to escalate",
     "t": "Inability to pass urine, a hard distended abdomen, or drowsiness, fever or rigors: same-day assessment, with sepsis risk judged per NICE NG253 — 999 if he appears seriously unwell."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Morgan. Is that Carol — and Mr Finch beside you? Hello, Mr Finch. Is it alright with you if we talk about how you’ve been, with Carol here?",
    "dom": "rto",
    "why": "Greets and seeks consent from the patient himself"
   },
   {
    "who": "pt",
    "text": "Harold: Harold, please. Yes, she can stay."
   },
   {
    "who": "pt",
    "text": "Carol: Thank you for calling back so fast, doctor. The carers tested his water and it’s an infection — it’s happened before and antibiotics sorted it. Can we just get them started today? I don’t want this turning into anything."
   },
   {
    "who": "dr",
    "text": "I can hear how worried you are, Carol, and I’ll make sure we have a clear plan today. I’d like to hear from Harold first, then from you, then decide together. Does that sound fair?",
    "dom": "gs",
    "why": "Agenda that includes both people and sequences them"
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Harold — never mind the test for a moment. Tell me about the waterworks in your own words. Does it burn, or is it something else?",
    "dom": "rto",
    "why": "Speaks to Harold directly, open question"
   },
   {
    "who": "pt",
    "text": "Harold: It doesn’t hurt. It just won’t come proper. Little bits, all the time. I’ve had damp patches."
   },
   {
    "who": "dr",
    "text": "That’s really helpful, thank you. And your bowels — when did you last open them?",
    "dom": "tasks",
    "why": "Targeted question that opens the constipation–retention route"
   },
   {
    "who": "pt",
    "text": "Harold: (Rubs lower belly, winces.) Not for… five days? They’ve been lazy since the new painkillers. My belly feels full."
   },
   {
    "who": "dr",
    "text": "I noticed you rubbing your tummy there. Is it sore low down, just above your private parts?",
    "dom": "tasks",
    "why": "Acts on the non-verbal cue — possible distended bladder"
   },
   {
    "who": "pt",
    "text": "Harold: A bit. Like it wants to go and can’t."
   },
   {
    "who": "dr",
    "text": "Carol, you mentioned he’s been muddled. How is he compared with two weeks ago? Any fever, shivering, falls or drowsiness?",
    "dom": "tasks",
    "why": "Establishes baseline and screens for sepsis and delirium red flags"
   },
   {
    "who": "pt",
    "text": "Carol: Two weeks ago he was doing the crossword and walking to the paper shop. Now he’s vague in the evenings. No fever, no falls, and he knows me. He’s not been right since those new painkillers, really."
   },
   {
    "who": "dr",
    "text": "That’s an important point. And how much is he drinking?",
    "dom": "tasks",
    "why": "Picks up the painkiller cue and checks hydration"
   },
   {
    "who": "pt",
    "text": "Harold: Two or three cups of tea. I don’t drink more — so I don’t leak."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Harold, that makes sense. What worries you most about the leaking?",
    "dom": "rto",
    "why": "Explores Harold’s own concern"
   },
   {
    "who": "pt",
    "text": "Harold: That it’s the end of me managing on my own."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me — I think there may be a fixable reason for it, and I’ll come to that. Carol, you said you don’t want this turning into anything. What are you most worried might happen?",
    "dom": "rto",
    "why": "Acknowledges Harold, then invites Carol’s concern"
   },
   {
    "who": "pt",
    "text": "Carol: (Voice cracks.) You hear what happens to people his age in there."
   },
   {
    "who": "dr",
    "text": "That sounded personal. Has something happened?",
    "dom": "rto",
    "why": "Notices the cracked voice and asks"
   },
   {
    "who": "pt",
    "text": "Carol: My husband, Derek. He went in with a chest in 2021 and died ten days later. I never got to sit with him. I can’t have that happen to Dad."
   },
   {
    "who": "dr",
    "text": "I’m so sorry, Carol. That explains exactly why you want this sorted at home — and I want to be clear: everything I’m about to suggest is designed to treat Harold here, at home.",
    "dom": "rto",
    "why": "Validates the loss and gives the reassurance she needs"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "About the dipstick: over 65, those sticks are unreliable — up to half of older people have some bacteria in their urine without any infection. So I’d rather go on Harold’s story. And it points somewhere else. The new painkillers contain codeine, which bungs the bowels up. Five days of a full bowel can press on the bladder so it can’t empty; it overflows in little dribbles — the damp patches — and that backed-up system, plus not drinking, can fog his evenings.",
    "dom": "tasks",
    "why": "Defuses the dipstick and names the likely mechanism"
   },
   {
    "who": "pt",
    "text": "Carol: So it isn’t an infection?"
   },
   {
    "who": "dr",
    "text": "It might not be, and antibiotics wouldn’t fix a blocked bowel or a full bladder. I can’t be sure over video, so I don’t want to guess. I’d like a doctor or nurse to see him in person this afternoon: feel his tummy, check the back passage, and scan his bladder. We’ll send a urine sample to the lab rather than rely on the stick, and do some bloods. That completes the job — it’s not sending him in.",
    "dom": "tasks",
    "why": "Names video limits; same-day exam, bladder scan, culture"
   },
   {
    "who": "pt",
    "text": "Carol: And if his bladder is full?"
   },
   {
    "who": "dr",
    "text": "Then usually a nurse can pass a small tube to drain it, often at home or in the surgery, and the relief is quick. The wrong treatment is what would make hospital more likely — the right one keeps him here.",
    "dom": "rto",
    "why": "Reframes antibiotics honestly against her fear"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Harold, the painkillers helped your shoulder but they’re causing this. I’d like to stop the co-codamol and use regular paracetamol with a rub-on anti-inflammatory gel for the shoulder instead. Would you be willing to try that?",
    "dom": "tasks",
    "why": "Acts on the drug cause with Harold’s agreement"
   },
   {
    "who": "pt",
    "text": "Harold: If it stops this, yes."
   },
   {
    "who": "dr",
    "text": "I’ll also start a laxative today to get the bowels moving. And the drinking — I know you’ve cut back to avoid leaking, but once the bladder can empty properly, drinking more should stop the dribbling, not cause it. Could we aim for a cup every couple of hours during the day, easing off in the evening?",
    "dom": "rto",
    "why": "Fluid plan that answers his leak fear"
   },
   {
    "who": "pt",
    "text": "Harold: I can try."
   },
   {
    "who": "dr",
    "text": "Carol, could you or the carers keep a note of drinks and when his bowels open? And I’ll mark the co-codamol so it doesn’t get repeated automatically.",
    "dom": "gs",
    "why": "Shares the plan and closes the prescribing loop"
   },
   {
    "who": "pt",
    "text": "Carol: Yes, I can do that."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Three things would change the plan tonight: if he can’t pass water at all, if his tummy becomes hard and swollen, or if he becomes drowsy, hot or shivery. Any of those — ring us straight away, or 111 or 999 out of hours. Otherwise I’ll ring you both tomorrow afternoon myself.",
    "dom": "gs",
    "why": "Plain-language triggers and a named follow-up"
   },
   {
    "who": "pt",
    "text": "Carol: Thank you. I really thought you’d say hospital."
   },
   {
    "who": "dr",
    "text": "Harold, can you tell me in your own words what we’re going to do?",
    "dom": "rto",
    "why": "Teach-back with the patient, not just the daughter"
   },
   {
    "who": "pt",
    "text": "Harold: Stop the new tablets, take the paracetamol, something for my bowels, drink more tea, and someone comes to feel my belly today."
   },
   {
    "who": "dr",
    "text": "Exactly that. Anything either of you wants to ask before we finish?",
    "dom": "rto",
    "why": "Shares the floor with both"
   },
   {
    "who": "pt",
    "text": "Carol: No — thank you, doctor."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Sought Harold’s consent and version first; acknowledged Carol’s request without acting on the dipstick.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Lives at home with carers and daily visits from Carol; previous independence; fear of losing it; Carol’s bereavement.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “not right since those new painkillers”, the rubbing of the lower abdomen, and Carol’s cracked voice.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Carol: dipstick means infection, fear of hospital after Derek, wants antibiotics. Harold: “my works are old”, fear of not coping alone, not to be talked over.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Same-day abdominal and PR examination, bladder scan; urine culture instead of dipstick; U&E, FBC, CRP, calcium, glucose.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Opioid-induced constipation with retention and overflow; dehydration; delirium; UTI or urosepsis; prostatic obstruction.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about fever, rigors, drowsiness, falls and inability to pass urine; baseline cognition established.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Likely urinary retention with overflow due to opioid-induced constipation and poor fluid intake, with early delirium; infection not yet excluded.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "No antibiotics on a dipstick; stop co-codamol, paracetamol and topical NSAID, laxative, fluid plan; catheter if retention confirmed.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Medication review so the opioid isn’t repeated; hydration and continence; support for Carol as carer.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day review; named call tomorrow; clear triggers for urgent contact or 999.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Harold Finch",
    "age": "87-year-old man",
    "pmh": [
     "Hypertension",
     "Osteoarthritis of the shoulder"
    ],
    "meds": [
     "Amlodipine 5 mg once daily",
     "Co-codamol 30/500 four times daily (started 3 weeks ago by a locum for shoulder pain)"
    ],
    "allergy": "No known drug allergies",
    "recent": "Care agency dipsticked his urine yesterday — reported “positive”. Daughter Carol reports a week of strong-smelling urine, dribbling and increased confusion in the evenings. Two weeks ago independent: crossword, walking to the paper shop. Lives at home with a care agency; Carol visits daily.",
    "reason": "Urgent video consultation requested by his daughter, who wants antibiotics started today."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open with both",
     "d": "Greet Harold by name and get his consent. Carol pushes for antibiotics — acknowledge her worry and set an agenda: Harold first, then Carol."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Harold’s own words (“won’t come proper”), bowels (five days), abdominal discomfort, baseline, fever and drowsiness, fluid intake. Catch “since those new painkillers”."
    },
    {
     "t": "4–6",
     "h": "ICE and hidden agendas",
     "d": "Harold’s fear of not coping alone. Carol’s cracked voice leads to Derek — say out loud that the plan is to treat him at home."
    },
    {
     "t": "6–10",
     "h": "Explain and share",
     "d": "Dipsticks are unreliable over 65; the constipation–retention mechanism; same-day exam and bladder scan with urine culture; stop co-codamol, laxative, fluid plan."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Can’t pass urine, hard swollen belly, drowsy or feverish — urgent call or 999. Named call tomorrow. Teach-back with Harold."
    }
   ],
   "wordPics": {
    "fail": "Prescribes antibiotics on the dipstick; talks only to Carol; never asks about bowels or the new painkiller; manages new confusion remotely without an examination; no safety-net.",
    "pass": "Explains that dipsticks are unreliable over 65, identifies constipation from co-codamol, arranges same-day examination and bladder scan, stops or reduces the opioid, and safety-nets.",
    "exc": "All of the above, plus: talks to Harold directly and gets the “won’t come proper” history; notices Carol’s cracked voice, finds Derek and says “we are treating him at home”; answers Harold’s leak fear with a fluid plan; closes with teach-back from Harold himself."
   },
   "avoid": [
    {
     "dont": "“The dipstick is positive, so I’ll start some trimethoprim to be safe.”",
     "instead": "“Over 65, those sticks turn positive in lots of people with nothing wrong — his story tells us more.”",
     "why": "Treating a dipstick misses the real cause and exposes him to antibiotic harms."
    },
    {
     "dont": "“Carol, how has your dad been sleeping?” (with Harold sitting there)",
     "instead": "“Harold, tell me in your own words what’s happening with the waterworks.”",
     "why": "Talking over him fails Relating to Others and misses the key history."
    },
    {
     "dont": "“If he’s confused, he really needs to go into hospital.”",
     "instead": "“Everything we’re doing today — the examination, the scan, the laxatives — is how we treat this at home.”",
     "why": "It triggers Carol’s deepest fear and is not what the clinical picture requires."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Carer and bereavement",
     "t": "Carol, 68, visits daily and is herself grieving a husband who died in hospital; her fear shapes every request. She is entitled to a carer’s assessment (Care Act 2014)."
    },
    {
     "h": "Independence and continence",
     "t": "Until two weeks ago Harold managed with carers and walked to the shop; he fears incontinence means the end of living independently. Community continence services can help once the cause is fixed."
    }
   ],
   "legal": [
    {
     "h": "Capacity and involvement",
     "t": "Mental Capacity Act 2005: assume capacity; delirium can affect it, but capacity is decision-specific and fluctuates. Involve Harold in decisions and seek his consent to discuss his care with Carol."
    },
    {
     "h": "Future planning",
     "t": "Once he is well, a gentle conversation about lasting power of attorney and his wishes about hospital care may help both of them."
    }
   ],
   "professional": [
    {
     "h": "Prescribing review",
     "t": "GMC Good practice in prescribing and managing medicines and devices (2021): review new medicines for adverse effects. Record the reaction to co-codamol and stop it being repeated automatically; feed back to the locum without blame."
    },
    {
     "h": "Remote consultation limits",
     "t": "New confusion cannot be safely assessed by video alone — arranging a same-day face-to-face examination is part of good clinical care, not escalation."
    }
   ],
   "community": [
    {
     "h": "Support services",
     "t": "Care agency (fluid and bowel chart), district or practice nurse for bladder scan and catheter care, community continence service, Carers UK and Age UK for support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Unable to pass urine, painful distended bladder or hard swollen abdomen — urgent same-day assessment",
     "Fever, rigors, drowsiness or rapid decline — possible sepsis, assess per NICE NG253",
     "New confusion — cause-hunt (drugs, constipation, retention, dehydration, infection) with a structured tool such as the 4AT"
    ],
    "psychosocial": [
     "Lives at home with carers; daughter visits daily",
     "Harold restricts fluids to avoid leaking and fears losing independence",
     "Carol’s husband died in hospital in 2021 — her fear of admission"
    ],
    "ice": [
     "Ideas: Carol — “positive dipstick means infection”; Harold — “my works are just old”",
     "Concerns: Carol — hospital, after Derek; Harold — the end of managing alone",
     "Expectations: Carol — antibiotics today, no hospital; Harold — not to be talked over"
    ]
   },
   "diagnosis": "Explain plainly: “The dipstick can’t tell us much at Harold’s age. His story points to the new painkillers — they’ve blocked his bowels, which can stop the bladder emptying so it dribbles, and that can make him muddled. We need to check that in person today.”",
   "diagnosisLay": "“Think of a blocked drain in the kitchen that makes the sink next to it back up and overflow. Unblock the drain — the bowels — and the sink — the bladder — can empty again.”",
   "management": {
    "reflectIce": "“Carol, after what happened to Derek, I understand why you want to avoid hospital. Everything we’re doing today is designed to treat your dad here, at home.”",
    "psychosocial": "Talk to Harold directly and answer his leak fear with a fluid plan; give Carol a practical role (fluid and bowel chart) and a named call tomorrow.",
    "sharedPlan": [
     "Same-day in-person assessment: abdomen, PR, bladder scan; urine culture (not dipstick); U&E, FBC, CRP, calcium, glucose",
     "Stop co-codamol; regular paracetamol and topical NSAID; laxative such as macrogol (dose per BNF); fluid plan",
     "Catheter if significant retention, with follow-up; antibiotics per NICE NG109 only if culture and signs support infection"
    ],
    "safetyNet": [
     "Can’t pass urine, hard swollen abdomen, drowsy, hot or shivery — ring urgently, 111 or 999 out of hours",
     "Named GP call tomorrow afternoon; co-codamol removed from repeats"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Delirium",
    "s": "Visual algorithm · NICE CG103",
    "href": "algorithms/delirium.html"
   },
   {
    "ic": "💠",
    "t": "UTI in men",
    "s": "Protocol · NICE NG109",
    "href": "management/uti-men.html"
   },
   {
    "ic": "💠",
    "t": "Constipation in adults",
    "s": "Protocol · laxative choice",
    "href": "management/constipation-adult.html"
   },
   {
    "ic": "💠",
    "t": "Opioid prescribing",
    "s": "Protocol · adverse effects and review",
    "href": "management/opioid-prescribing.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by the word “UTI”: it stops the candidate thinking, and the daughter’s urgency pushes towards a reflex prescription. The patterns below are the common failing routes, and each is fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Starting antibiotics because the dipstick was positive.",
     "why": "UKHSA advises against dipsticks over 65; up to half of older adults have asymptomatic bacteriuria. The prescription buries the real cause.",
     "fix": "Explain the dipstick’s limits, send urine for culture, and go on the history and examination."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about bowels or the new painkiller.",
     "why": "Opioid-induced constipation with retention and overflow is the mechanism; missing it leaves the confusion and dribbling untreated.",
     "fix": "Ask every older person with new confusion about bowels, fluids and recent medication changes — and listen for “since those new painkillers”."
    },
    {
     "dom": "tasks",
     "fail": "Managing new confusion entirely by video.",
     "why": "Retention, faecal impaction and sepsis need hands-on assessment; remote-only care is unsafe here.",
     "fix": "Name the limits of video and arrange a same-day examination and bladder scan — framed as completing the job at home."
    },
    {
     "dom": "rto",
     "fail": "Talking to Carol about Harold while he sits there.",
     "why": "It fails Relating to Others and misses his description (“it won’t come proper”) that unlocks the diagnosis.",
     "fix": "Greet him by name, ask his consent, and take his history in his own words first."
    },
    {
     "dom": "rto",
     "fail": "Brushing past Carol’s cracked voice.",
     "why": "Derek’s death in hospital drives the antibiotic demand; unaddressed, she will resist any plan that sounds like admission.",
     "fix": "“That sounded personal — has something happened?” Then say plainly: “Everything we’re doing is designed to treat him at home.”"
    },
    {
     "dom": "gs",
     "fail": "A vague close — “call if he gets worse”.",
     "why": "Carol needs specific triggers she can act on tonight, and a frail man with delirium needs a named follow-up.",
     "fix": "Three named triggers (can’t pass urine, hard swollen belly, drowsy or feverish) and a call from you tomorrow afternoon."
    }
   ]
  }
 },
 "zopiclone-fall": {
  "stem": {
   "name": "Jean Hardcastle",
   "age": "76-year-old woman",
   "pmh": [
    "Hypertension",
    "Osteoarthritis of the hands",
    "Fall at home last week — bruised hip and shoulder, X-ray normal (urgent treatment centre)"
   ],
   "meds": [
    "Amlodipine 5 mg once daily",
    "Zopiclone 7.5 mg at night (on repeat for 12 years, started after bereavement)"
   ],
   "allergy": "No known drug allergies",
   "recent": "Seen in the urgent treatment centre last week after a fall at 3am on the way to the toilet — no fracture. Zopiclone repeat requested two weeks early; flagged by reception. No medication review recorded for the zopiclone. Widowed 12 years; lives alone, daughter nearby.",
   "reason": "Video consultation (set up by her daughter) to request her zopiclone repeat."
  },
  "knowledge": {
   "guideline": "NICE TA77 (2004) — hypnotics for insomnia · NICE NG249 (2025) — falls · BNF zopiclone · NICE MTG70 (Sleepio)",
   "summary": "Twelve years of nightly zopiclone means tolerance and dependence, not insomnia needing a stronger drug. After a night-time fall, the hypnotic is part of the falls review: taper it slowly by agreement, never stop it abruptly, never escalate to temazepam, and replace it with CBT-I principles.",
   "points": [
    {
     "h": "Hypnotics are short-term drugs",
     "t": "NICE TA77: hypnotics only after non-drug measures have been considered, and only short term. There is no compelling evidence to separate z-drugs from short-acting benzodiazepines, so switching to temazepam offers nothing but a different name and a stricter controlled-drug status."
    },
    {
     "h": "Read the pattern",
     "t": "Asleep at 10.30pm, awake at 2–3am, afternoon naps, an extra half tablet at 3am and an early repeat: tolerance and dependence, with fragmented sleep driven by napping, evening alcohol, tea and TV in bed — and grief. More drug cannot fix this pattern."
    },
    {
     "h": "The fall is the red flag",
     "t": "NICE NG249: an older person who has fallen needs a multifactorial falls risk assessment, including a medication review. Here that means the hypnotic plus sherry, amlodipine and postural symptoms (lying and standing BP), vision, footwear, night-time route to the toilet and bone health."
    },
    {
     "h": "Taper, never stop abruptly",
     "t": "Withdraw gradually after long-term use; abrupt withdrawal risks rebound insomnia, anxiety and withdrawal symptoms. A natural first step is 3.75 mg — the BNF starting dose for older people — on alternate nights, then nightly, with further steps agreed with her every few weeks. Expect the process to take months."
    },
    {
     "h": "Replace the tablet with something",
     "t": "CBT-I is first-line for chronic insomnia (BAP consensus 2019): fixed rising time, bed only for sleep, get up if awake and frustrated, short or no daytime nap, caffeine only in the morning. Digital CBT-I (Sleepio) is recommended in NICE MTG70. Screen mood (NICE NG222) and name the loneliness behind the 3am waking."
    },
    {
     "h": "Alcohol and controlled drugs",
     "t": "Sherry potentiates zopiclone’s sedation and worsens night-time unsteadiness — move it earlier or stop it on tablet nights. Zopiclone is a Schedule 4 (Part 1) and temazepam a Schedule 3 controlled drug (Home Office Circular 008/2014)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Hardcastle, I’m Dr Shah. Thank you for joining — and I gather your daughter helped set up the video. Before we get to the prescription, tell me how things have been for you.",
    "dom": "rto",
    "why": "Opens with the patient, not the repeat request"
   },
   {
    "who": "pt",
    "text": "It’s just my sleeping tablets, doctor. The chemist said I had to see you. And between you and me — they’re not working like they used to. My friend Brenda gets the blue ones, temazepam. Could I try those?"
   },
   {
    "who": "dr",
    "text": "Thank you for being so straight with me — I’ll be straight with you too. I’d like to hear how your nights actually go, and I also saw a note about a fall last week, so I’d like to cover both and then decide together what to do about the tablets. Is that alright?",
    "dom": "gs",
    "why": "Agenda that holds her request and the fall together"
   },
   {
    "who": "pt",
    "text": "Oh, the fall. Yes, that was silly of me. Alright."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Walk me through a typical night, from the evening onwards.",
    "dom": "rto",
    "why": "Open question before narrowing"
   },
   {
    "who": "pt",
    "text": "Tablet at half past nine, asleep by half ten. Then I’m wide awake at two or three, just lying there. I do nod off in the chair most afternoons, I’m afraid."
   },
   {
    "who": "dr",
    "text": "And the fall — what happened?"
   },
   {
    "who": "pt",
    "text": "Tuesday, three in the morning, going to the loo. My legs just weren’t under me. Bruised my hip and shoulder; they X-rayed it and nothing was broken. I’ve felt a bit woozy at night for months, to be honest."
   },
   {
    "who": "dr",
    "text": "Did you black out at all, or feel your heart racing, or feel light-headed as you stood up? And had you taken anything extra that night?",
    "dom": "tasks",
    "why": "Screens syncope, postural symptoms and usage in one sweep"
   },
   {
    "who": "pt",
    "text": "No blackout. Light-headed getting up, maybe. (Pause.) I might have had a half extra. I do sometimes, when I can’t get back off. That’s why I’m early, isn’t it. I’m sorry."
   },
   {
    "who": "dr",
    "text": "Please don’t apologise — lots of people do exactly that. It tells me the tablet has stopped doing its job, not that you’ve done anything wrong.",
    "dom": "rto",
    "why": "Meets the shame with curiosity, not accusation"
   },
   {
    "who": "pt",
    "text": "Well. That’s a relief."
   },
   {
    "who": "dr",
    "text": "Do you have a drink in the evening, or tea later on? And what do you do when you’re lying awake?",
    "dom": "tasks",
    "why": "Alcohol, caffeine and sleep behaviours that feed the waking"
   },
   {
    "who": "pt",
    "text": "A sherry most evenings, just the one. Tea all day, one with supper. I put the telly on in bed when I can’t sleep."
   },
   {
    "who": "dr",
    "text": "And how’s your mood — are you still enjoying things?",
    "dom": "tasks",
    "why": "Screens for depression as a driver of early waking"
   },
   {
    "who": "pt",
    "text": "Oh yes. Church, bowls on Tuesdays, the grandchildren. It’s just… the house gets very quiet at nine o’clock."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "The house gets very quiet at nine. Tell me about that.",
    "dom": "rto",
    "why": "Picks up the loneliness cue word for word"
   },
   {
    "who": "pt",
    "text": "Arthur and I always had our cocoa at nine. He died twelve years ago — that’s when Dr Pearson gave me the tablets. Just for a few weeks, he said. When I wake at three, I lie there thinking about him."
   },
   {
    "who": "dr",
    "text": "Twelve years, and the nights are still the hardest part. Thank you for telling me about Arthur. What were you hoping I’d do for you today?",
    "dom": "rto",
    "why": "Acknowledges the grief, then elicits expectations"
   },
   {
    "who": "pt",
    "text": "Just the repeat, really. Something stronger if you could. And I didn’t want to be told off."
   },
   {
    "who": "dr",
    "text": "Nobody’s telling you off. Can I ask — did the fall worry you?",
    "dom": "rto",
    "why": "Opens her own concern about the fall"
   },
   {
    "who": "pt",
    "text": "It did, if I’m honest. I don’t want to end up doddery like my sister. She had a fall and never went back home."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "That matters, and I’d like to build on it. Here’s what I think is going on. After twelve years your body has got used to the tablet — it isn’t really giving you sleep any more, which is why you wake at three. What it is still doing is making your legs unsteady in the night, and the sherry adds to that. Sleeping tablets are a well-known cause of night-time falls in people your age.",
    "dom": "tasks",
    "why": "Names tolerance and links the fall to the hypnotic"
   },
   {
    "who": "pt",
    "text": "I never thought of the tablet. I thought it was just my age."
   },
   {
    "who": "dr",
    "text": "That’s a very fair thing to think. It’s also why I won’t prescribe temazepam or anything stronger: it works in the same way, it wouldn’t fix the waking, and it would make another fall more likely. After last week, I’d be letting you down if I did.",
    "dom": "tasks",
    "why": "Declines escalation with a reason tied to her"
   },
   {
    "who": "pt",
    "text": "So you’re stopping them? I’ll never sleep again."
   },
   {
    "who": "dr",
    "text": "No — I’m not taking your tablet away today. After this long, stopping suddenly isn’t safe; it makes sleep much worse and can leave you shaky and anxious. What I’d suggest is coming down slowly, at a pace you’re comfortable with, while we put something else in place for the nights.",
    "dom": "tasks",
    "why": "Explicitly warns against abrupt cessation; offers a taper"
   },
   {
    "who": "pt",
    "text": "What would that look like?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The first step would be half a tablet — which is actually the usual starting dose for someone your age — on alternate nights, then every night. We only move on when you feel ready, and I’ll check in every few weeks. It may take a few months, and that’s fine.",
    "dom": "tasks",
    "why": "Concrete, gradual, patient-paced taper"
   },
   {
    "who": "pt",
    "text": "Every other night. I could try that."
   },
   {
    "who": "dr",
    "text": "Alongside it, some changes that do more for the 3am waking than the tablet can: the same getting-up time every day, no telly in bed, keep any afternoon nap short, and decaf tea after lunch. There’s also a well-tested sleep programme you can do on a tablet or computer. Could your daughter help you set that up?",
    "dom": "tasks",
    "why": "Replaces the tablet with CBT-I principles"
   },
   {
    "who": "pt",
    "text": "She could. I’d give it a go."
   },
   {
    "who": "dr",
    "text": "And the sherry — could it move to teatime, well away from the tablet?",
    "dom": "rto",
    "why": "Negotiates one change rather than banning it"
   },
   {
    "who": "pt",
    "text": "I could have it with my tea at six instead."
   },
   {
    "who": "dr",
    "text": "Perfect. And nine o’clock — would it help to have something that’s yours in that hour? A phone call with your daughter, perhaps, and I can give you details of a bereavement charity that offers someone to talk to. The nights have been lonely for a long time.",
    "dom": "rto",
    "why": "Addresses the loneliness driving the insomnia"
   },
   {
    "who": "pt",
    "text": "Ringing my daughter at nine… she’d like that, actually."
   },
   {
    "who": "dr",
    "text": "I’d also like the nurse to check your blood pressure lying and standing, look at your blood-pressure tablet, and do a proper falls check including your bones. You said you don’t want to end up like your sister — this plan is the best thing you can do about exactly that.",
    "dom": "tasks",
    "why": "Falls review, and uses her own motivation as the lever"
   },
   {
    "who": "pt",
    "text": "Well, when you put it like that."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Two things to expect. When you first cut down, sleep may get worse for a week or two — that’s the tablet leaving, not your insomnia coming back, and it settles. Please don’t take extra to cover it; ring me instead. And at night: a lamp on, sit on the edge of the bed for a moment before standing, and keep the way to the loo clear.",
    "dom": "gs",
    "why": "Safety-nets rebound insomnia and gives falls advice"
   },
   {
    "who": "pt",
    "text": "Lamp on, sit first. Yes."
   },
   {
    "who": "dr",
    "text": "If you fall again or feel faint, ring us that day. I’ll issue enough tablets to take you to our next appointment on the plan we’ve agreed, and I’ll see you in three weeks. So I know I’ve explained it well — what will you tell your daughter we’ve agreed?",
    "dom": "gs",
    "why": "Named follow-up, controlled supply, teach-back"
   },
   {
    "who": "pt",
    "text": "Half a tablet every other night to start, no telly in bed, sherry at teatime, lamp on, ring her at nine, and back to you in three weeks."
   },
   {
    "who": "dr",
    "text": "That’s it exactly. Is there anything else you wanted to ask?",
    "dom": "rto",
    "why": "Shares the floor before closing"
   },
   {
    "who": "pt",
    "text": "No, that’s plenty. Thank you, doctor — I thought you’d be cross."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question first; let her voice the repeat and the temazepam request before steering; explored a typical night in her words.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Lives alone, widowed 12 years, daughter nearby, church and bowls; evening routine, sherry, tea, TV in bed.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “the house gets quiet at nine”, the silence over the early repeat, and “doddery like my sister”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: the tablet has stopped working and a stronger one will help; concern: nights without a tablet, grief, the fall; expectation: a repeat and no telling-off.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Lying and standing BP, falls risk assessment, medication review including amlodipine, bone-health assessment, mood screen.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Tolerance and dependence vs depression vs sleep-behaviour problems; hypnotic- and alcohol-related fall vs syncope or postural hypotension.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about blackouts, palpitations, head injury and injuries from the fall; checked for low mood and hopelessness.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Long-term hypnotic dependence with tolerance, contributing to a night-time fall; insomnia sustained by napping, alcohol and grief.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "No escalation to temazepam; gradual agreed taper starting at 3.75 mg (never abrupt); CBT-I principles and digital CBT-I; sherry moved earlier.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Falls review, postural BP and amlodipine timing, bone health; loneliness and bereavement support.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Rebound insomnia expected and temporary; do not take extra; night-time falls advice; named review in 2–4 weeks with a limited supply.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Jean Hardcastle",
    "age": "76-year-old woman",
    "pmh": [
     "Hypertension",
     "Osteoarthritis of the hands",
     "Fall at home last week — bruised hip and shoulder, X-ray normal (urgent treatment centre)"
    ],
    "meds": [
     "Amlodipine 5 mg once daily",
     "Zopiclone 7.5 mg at night (on repeat for 12 years, started after bereavement)"
    ],
    "allergy": "No known drug allergies",
    "recent": "Seen in the urgent treatment centre last week after a fall at 3am on the way to the toilet — no fracture. Zopiclone repeat requested two weeks early; flagged by reception. No medication review recorded for the zopiclone. Widowed 12 years; lives alone, daughter nearby.",
    "reason": "Video consultation (set up by her daughter) to request her zopiclone repeat."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "She opens with the repeat and Brenda’s temazepam. Let her finish, then set an agenda that includes the fall."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "A typical night, the fall (syncope, postural symptoms, the extra half tablet), sherry, tea, TV in bed, naps, mood."
    },
    {
     "t": "4–6",
     "h": "ICE and cues",
     "d": "“The house gets very quiet at nine” leads to Arthur. Ask about the fall and find her sister — the lever for change."
    },
    {
     "t": "6–10",
     "h": "Explain and share",
     "d": "Tolerance, not a need for stronger tablets; the fall link; no temazepam. Agree a slow taper from 3.75 mg alternate nights plus CBT-I changes and the sherry move."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Rebound insomnia is temporary; don’t top up; lamp on and sit before standing; falls review with the nurse; review in three weeks; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Issues the repeat unchanged or switches to temazepam; never connects the fall to the zopiclone; or stops the tablet abruptly with a lecture about addiction; misses Arthur and the quiet house; no falls review, no follow-up.",
    "pass": "Links the fall to the hypnotic, declines escalation, proposes a gradual taper with sleep-hygiene advice, arranges a falls check and review, and handles the early repeat without blame.",
    "exc": "All of the above, plus: finds the grief behind the 3am waking and offers something for nine o’clock; uses her sister as her own reason to taper; agrees a specific first step at her pace; warns about rebound insomnia so she doesn’t top up; closes with teach-back and a named review."
   },
   "avoid": [
    {
     "dont": "“You’re addicted to these, so we need to stop them.”",
     "instead": "“After twelve years your body has got used to the tablet — it isn’t giving you sleep any more, but it is making your legs unsteady.”",
     "why": "Labelling shames her and closes the door; describing tolerance invites her into the plan."
    },
    {
     "dont": "“Let’s try temazepam like your friend and see if that works better.”",
     "instead": "“Temazepam works the same way — it wouldn’t fix the waking and it would make another fall more likely.”",
     "why": "Escalating a hypnotic after a fall is the station’s unsafe-management fail."
    },
    {
     "dont": "“Why are you asking for your repeat two weeks early?”",
     "instead": "“Lots of people take an extra half at 3am — it tells me the tablet has stopped working, not that you’ve done anything wrong.”",
     "why": "An accusing question turns shame into defensiveness and hides the usage history."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Bereavement and loneliness",
     "t": "Widowed 12 years and living alone; the evening routine she shared with Arthur is the hardest hour. Loneliness drives the 3am waking as much as the tablet does — name it kindly and offer something for that hour."
    },
    {
     "h": "Family and independence",
     "t": "A nearby daughter who can help with digital CBT-I and a nightly phone call; her sister’s fall and move into care is her fear and her motivation to change."
    }
   ],
   "legal": [
    {
     "h": "Controlled-drug status",
     "t": "Zopiclone is a Class C, Schedule 4 (Part 1) controlled drug and temazepam a Schedule 3 controlled drug (Home Office Circular 008/2014). Limit supplies during a taper and record the plan."
    },
    {
     "h": "Driving",
     "t": "If she drives: zopiclone can impair next-day driving, and it is an offence to drive while impaired by any drug, prescribed or not. Advise not to drive if she feels drowsy."
    }
   ],
   "professional": [
    {
     "h": "Repeat-prescribing review",
     "t": "GMC Good practice in prescribing and managing medicines and devices (2021): repeat prescriptions must be reviewed. Twelve years without review is a system failure — handle it without blaming her or a colleague."
    },
    {
     "h": "Shared decision-making",
     "t": "GMC Decision making and consent (2020): the taper is her choice to make with clear information about benefits and risks. Document the agreed steps, the falls discussion and the review date."
    }
   ],
   "community": [
    {
     "h": "Support in the community",
     "t": "Community falls-prevention service and strength-and-balance classes; Cruse Bereavement Support; Age UK for befriending; digital CBT-I (Sleepio, NICE MTG70)."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "The night-time fall: blackout, palpitations or chest pain (possible syncope), head injury, new confusion",
     "Postural light-headedness on standing — check lying and standing BP and amlodipine timing",
     "Mood: early waking with hopelessness or loss of enjoyment would point to depression"
    ],
    "psychosocial": [
     "Widowed 12 years, lives alone; evenings are the hard part",
     "Sherry most evenings with the tablet, tea all day, TV in bed, afternoon naps",
     "What independence means to her — her sister’s fall and move into care"
    ],
    "ice": [
     "Idea: “the tablets have stopped working; a stronger one would fix the waking”",
     "Concern: nights without a tablet — “I lie there thinking about Arthur”; quietly shaken by the fall",
     "Expectation: a repeat today, ideally stronger — and not to be told off"
    ]
   },
   "diagnosis": "Be honest and kind: “After twelve years your body has got used to the tablet, so it isn’t really giving you sleep any more — but it is still making you unsteady at night, and that is very likely part of why you fell.”",
   "diagnosisLay": "“It’s like a key that’s been used so long the lock no longer turns — it doesn’t open the door to sleep any more, but it still makes the floor feel slippery at three in the morning.”",
   "management": {
    "reflectIce": "“You told me you don’t want to end up like your sister. Coming off this tablet slowly is one of the most useful things you can do to stay steady and stay in your own home.”",
    "psychosocial": "Give nine o’clock a new shape — a nightly call with her daughter, bereavement support if she wants it — and agree one or two sleep changes she chooses rather than a list of rules.",
    "sharedPlan": [
     "No temazepam or stronger hypnotic; gradual taper starting at 3.75 mg on alternate nights, then nightly, reviewed every few weeks",
     "CBT-I principles (fixed rising time, no TV in bed, short or no nap, decaf after lunch) and digital CBT-I",
     "Falls review: lying and standing BP, amlodipine review, bone health; sherry moved to teatime"
    ],
    "safetyNet": [
     "Sleep may worsen for a week or two after each step — expected and temporary; do not take extra, ring instead",
     "Lamp on, sit before standing; ring the same day after any further fall or faint; review in three weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Insomnia",
    "s": "Case walkthrough · NICE TA77",
    "href": "../cases/insomnia.html"
   },
   {
    "ic": "💠",
    "t": "Benzodiazepines and z-drugs",
    "s": "Protocol · tapering and withdrawal",
    "href": "management/benzodiazepines-z-drugs.html"
   },
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
   }
  ],
  "pitfalls": {
   "intro": "This station is not failed for lack of pharmacology — it is failed by handing over the repeat, by escalating to a stronger hypnotic, or by stopping the tablet with a lecture. The patterns below are the common failing routes, and each is fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Switching to temazepam because “the zopiclone has stopped working”.",
     "why": "NICE TA77 finds no meaningful difference between z-drugs and short-acting benzodiazepines; escalating a hypnotic a week after a night-time fall is unsafe management.",
     "fix": "Decline with a reason tied to her: “It works the same way, it wouldn’t fix the waking, and it would make another fall more likely.”"
    },
    {
     "dom": "tasks",
     "fail": "Stopping the zopiclone today because of the fall.",
     "why": "Abrupt withdrawal after 12 years risks severe rebound insomnia and withdrawal symptoms — and she will simply not engage again.",
     "fix": "Say out loud that stopping suddenly is not safe, then agree a gradual taper starting at 3.75 mg on alternate nights, reviewed every few weeks."
    },
    {
     "dom": "tasks",
     "fail": "Treating the fall and the prescription as two separate problems.",
     "why": "The link between the hypnotic, the sherry and the 3am fall is the clinical heart of the case; missing it means no falls review (NICE NG249) and no reason for her to change.",
     "fix": "Ask about the fall early, screen for syncope and postural symptoms, and name the connection plainly."
    },
    {
     "dom": "rto",
     "fail": "Asking “why are you two weeks early?” in a tone that sounds like an audit.",
     "why": "She goes quiet out of shame, not deceit; an accusing question loses the usage history and her trust.",
     "fix": "Normalise first — “lots of people take an extra half at 3am” — and she will tell you the rest."
    },
    {
     "dom": "rto",
     "fail": "Missing “the house gets very quiet at nine o’clock”.",
     "why": "The grief and loneliness are the engine of the insomnia; a plan that ignores them feels like having a comfort taken away.",
     "fix": "Reflect the cue back, let Arthur be spoken about, and offer something for that hour — a call, bereavement support, a routine."
    },
    {
     "dom": "gs",
     "fail": "Ending with “we’ll cut it down and see how you get on”, with no warning about rebound insomnia and no review date.",
     "why": "Without warning, the first bad night convinces her the plan has failed and she tops up; without follow-up the taper stalls.",
     "fix": "Warn that sleep worsens briefly after each step, ask her to ring rather than take extra, give falls advice for the night and book a named review in three weeks."
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
