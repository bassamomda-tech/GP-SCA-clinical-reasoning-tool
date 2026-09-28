/* ============================================================
   Reasoning GP — The Hot Seat: add-on set, batch 14
   Stem, knowledge, model consultation, scorecard tasks, extras,
   knowledge base, playbook, links and examiner pitfalls for
   20 further cases. Loaded after sca-pitfalls.js and
   before sca-practice.js; merges into the existing maps and
   attaches to the case objects exactly as those files do.
   Educational; original content; primary sources cited.
   ============================================================ */
(function(){
  var ADD = {
 "abdominal-migraine": {
  "stem": {
   "name": "Mia",
   "age": "8-year-old girl",
   "pmh": [
    "Recurrent episodes of central abdominal pain; normal growth reported",
    "Family history: mother has migraine"
   ],
   "meds": [
    "Not specified in the case: check the repeat record"
   ],
   "allergy": "None recorded",
   "recent": "Basic tests arranged by the practice were normal. Episodes recur every few weeks; completely well in between.",
   "reason": "Telephone call from her mother: “What is it, and why do the tests keep coming back fine?”"
  },
  "knowledge": {
   "guideline": "[1] International Classification of Headache Disorders, 3rd edition, 1.6.1.2 Abdominal migraine (International Headache Society 2018, international) · [2] Rome IV childhood functional gastrointestinal disorders, Hyams et al., Gastroenterology 2016 (international) · [3] NICE NG20 Coeliac disease (2015) · [4] NICE NG224 Urinary tract infection in under 16s (2022) · [5] NICE CG99 Constipation in children and young people (2010) · [6] MHRA Drug Safety Update: domperidone (December 2019) and metoclopramide (August 2013) · [7] BNFC",
   "summary": "Stereotyped attacks of central abdominal pain lasting hours, with pallor, nausea, vomiting or anorexia, complete wellness between attacks, normal growth and a family history of migraine fit abdominal migraine. It is a clinical diagnosis made once alarm features are absent and the examination, growth and simple tests are normal; normal tests support it. On the phone, take the history and red flags, then arrange a face-to-face review to examine her, plot growth and check urine. Manage with explanation, a diary, triggers, and early simple analgesia for attacks. Antiemetics and triptans are restricted at her age, and prevention is a paediatric decision.",
   "points": [
    {
     "h": "Criteria",
     "t": "ICHD-3 [1]: at least five attacks of midline, periumbilical or poorly localised dull pain of moderate or severe intensity, with at least two of anorexia, nausea, vomiting and pallor, lasting 2–72 hours untreated, and complete freedom from symptoms between attacks. Rome IV [2] uses episodes of at least 1 hour occurring at least twice in 6 months, stereotyped and incapacitating, separated by weeks to months."
    },
    {
     "h": "Alarm features",
     "t": "Features that do not fit and need investigation [2]: weight loss or slowing of growth, gastrointestinal blood loss, significant vomiting (bilious, protracted or projectile), chronic severe diarrhoea, persistent right-sided pain, unexplained fever, pain or vomiting that wakes the child, dysuria, joint or perianal problems, family history of inflammatory bowel disease, abnormal examination, or symptoms between attacks."
    },
    {
     "h": "Mimics",
     "t": "Constipation [5], urinary tract infection [4], coeliac disease (NG20 [3]: offer serological testing to children with persistent unexplained abdominal symptoms or faltering growth), inflammatory bowel disease, intermittent obstruction such as malrotation (bilious vomiting is an emergency), intermittent pelviureteric junction obstruction (episodic flank pain and vomiting), cyclical vomiting syndrome, and functional abdominal pain."
    },
    {
     "h": "Acute attacks",
     "t": "Rest in a quiet, dark room, sips of fluid, and paracetamol or ibuprofen early in the attack, dose per BNFC [7]. Domperidone is no longer licensed for children under 12 (MHRA 2019) and metoclopramide is restricted in under-18s (MHRA 2013) [6], so antiemetics are not routine in primary care. Triptans are not licensed at her age [7]."
    },
    {
     "h": "Prevention and referral",
     "t": "Regular meals, sleep and hydration, and a diary to identify triggers. If attacks are frequent or disabling, refer to a paediatrician; preventive medicines have limited evidence in children and are a specialist decision."
    },
    {
     "h": "Course",
     "t": "Attacks often lessen with age, and many children with abdominal migraine go on to have typical migraine headaches later. Explaining this, and that normal tests support the diagnosis, reduces repeated investigation."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, it’s Dr Khan calling from the surgery. Am I speaking to Mia’s mum? Is now a good time to talk, and is Mia with you?",
    "dom": "rto",
    "why": "Confirms identity and setting on the telephone"
   },
   {
    "who": "pt",
    "text": "Yes, it’s her mum. She’s fine at the moment. I’m worried about her though. She keeps getting these attacks of really bad pain in the middle of her tummy, lasting hours. She goes pale, feels sick, sometimes vomits, and just wants to lie down. Then it passes and she’s totally back to normal for weeks. The GP did some tests and they were normal. I get migraines myself. What is it, and why do the tests keep coming back fine?"
   },
   {
    "who": "dr",
    "text": "That’s a really clear description. I’ll ask some questions to be sure nothing is being missed, and then I’ll explain what I think is going on.",
    "dom": "rto",
    "why": "Acknowledges; signposts"
   },
   {
    "phase": "History",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Can you take me through the last attack from start to finish? Where exactly is the pain, and how long does it last?",
    "dom": "tasks",
    "why": "Stereotyped pattern, site and duration"
   },
   {
    "who": "pt",
    "text": "Always around her belly button. It lasts a few hours, sometimes most of the day."
   },
   {
    "who": "dr",
    "text": "How often do they come, and are they all much the same? How much do they stop her doing things?",
    "dom": "tasks",
    "why": "Frequency, stereotypy, impact"
   },
   {
    "who": "pt",
    "text": "Every few weeks. They’re always the same. She has to lie down; she can’t do anything."
   },
   {
    "who": "dr",
    "text": "Between attacks, is she completely well? Eating normally, no tummy ache at all, normal energy?",
    "dom": "tasks",
    "why": "Complete wellness between attacks: key criterion"
   },
   {
    "who": "pt",
    "text": "Completely normal. You’d never know."
   },
   {
    "who": "dr",
    "text": "Now a few things that would make me think differently. Is the sick ever green or yellow-green? Any blood in her sick or her poo?",
    "dom": "tasks",
    "why": "Bilious vomiting and GI bleeding"
   },
   {
    "who": "pt",
    "text": "No, never green. No blood."
   },
   {
    "who": "dr",
    "text": "Has she lost weight, or dropped behind in height compared with her friends? Any fevers with the attacks? Does pain ever wake her at night?",
    "dom": "tasks",
    "why": "Growth, fever, nocturnal symptoms"
   },
   {
    "who": "pt",
    "text": "No. She’s growing fine, I think. No temperatures. It doesn’t wake her."
   },
   {
    "who": "dr",
    "text": "Is the pain ever mainly on one side or low on the right? Any pain passing urine, weeing more, diarrhoea, or problems opening her bowels?",
    "dom": "tasks",
    "why": "Localised pain, urinary and bowel symptoms: UTI, constipation, IBD"
   },
   {
    "who": "pt",
    "text": "No, it’s always in the middle. Her bowels and wee seem normal."
   },
   {
    "who": "dr",
    "text": "Any headaches, or does light bother her during an attack? Any rashes, sore joints, mouth ulcers, or anyone in the family with bowel disease or coeliac disease?",
    "dom": "tasks",
    "why": "Migraine features; systemic and family red flags"
   },
   {
    "who": "pt",
    "text": "I haven’t noticed headaches. She just wants to lie down in a quiet room. Nothing else that I know of."
   },
   {
    "who": "dr",
    "text": "Do you know which tests were done?",
    "dom": "tasks",
    "why": "Clarifies prior investigations"
   },
   {
    "who": "pt",
    "text": "I’m not sure exactly. Some blood tests, I think."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What have you been thinking it might be? And what worries you most?",
    "dom": "rto",
    "why": "Elicits ICE"
   },
   {
    "who": "pt",
    "text": "I keep thinking something’s being missed because the tests are normal. I want to know what it is."
   },
   {
    "phase": "Explanation",
    "clock": "6–9 min",
    "who": "dr",
    "text": "That’s a very natural worry. From what you’ve told me, this fits a condition called abdominal migraine. It’s a form of migraine that shows itself as tummy pain in children, often in families where a parent has migraine. It’s real, not ‘nothing’, and not in her head.",
    "dom": "tasks",
    "why": "Names the diagnosis; validates"
   },
   {
    "who": "pt",
    "text": "But why are the tests normal?"
   },
   {
    "who": "dr",
    "text": "Because there’s no blood test for migraine. We make the diagnosis from this very typical pattern, once we’ve checked there are no warning signs. So normal tests actually fit with it and are reassuring. None of the warning signs I asked about are there.",
    "dom": "tasks",
    "why": "Explains why normal tests support the diagnosis"
   },
   {
    "who": "dr",
    "text": "I can’t examine her on the phone, so I’d like to see her in person this week: to feel her tummy, check her height and weight on a growth chart, and test a urine sample. If the coeliac blood test hasn’t been done, we’ll do it then.",
    "dom": "tasks",
    "why": "Face-to-face examination, growth, urine; coeliac serology (NG20)"
   },
   {
    "who": "pt",
    "text": "Okay, that would make me feel better."
   },
   {
    "phase": "Management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "For attacks: let her rest in a quiet, dark room with sips of fluid, and give paracetamol or ibuprofen at the right dose for her age early in the attack. Anti-sickness medicines aren’t routinely used at her age, and migraine tablets aren’t licensed for children as young as eight.",
    "dom": "tasks",
    "why": "Acute treatment within licensing and MHRA advice"
   },
   {
    "who": "dr",
    "text": "Please keep a diary of each attack: the date, what she ate, sleep, school stress, anything that went before. Regular meals, good sleep and plenty of fluid help. If attacks become frequent or are stopping her going to school, I’d ask a children’s doctor about preventive treatment.",
    "dom": "tasks",
    "why": "Diary, triggers, lifestyle; referral threshold"
   },
   {
    "who": "pt",
    "text": "I can do the diary. Will she grow out of it?"
   },
   {
    "who": "dr",
    "text": "Often they settle as children get older, though some go on to have ordinary migraine headaches, like you.",
    "dom": "tasks",
    "why": "Honest prognosis"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Please get urgent help if she ever vomits green, has blood in her sick or poo, the pain stays in one place or doesn’t ease, she has a high temperature, she’s not herself between attacks, or she loses weight. Green vomit or severe pain that won’t settle means ringing 999 or going to A&E. Can you tell me the plan back?",
    "dom": "gs",
    "why": "Specific red-flag safety-net with routes; teach-back"
   },
   {
    "who": "pt",
    "text": "Bring her in this week for a check and a urine test, dark room, painkillers early, a diary, and get help straight away for green sick, blood, pain in one place, fever or if she’s unwell between attacks."
   },
   {
    "who": "dr",
    "text": "That’s it exactly. I’ll book her in now.",
    "dom": "gs",
    "why": "Arranges the face-to-face review"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Confirms identity and setting; lets the mother describe the attacks fully.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Impact on school and family; the mother’s own migraine and worry.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up maternal migraine and the need to lie down as supportive cues; clarifies which tests were done.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (something missed), concern (normal tests), expectation (a diagnosis).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Face-to-face review to examine, plot growth and test urine; coeliac serology if not done (NG20).",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Abdominal migraine versus constipation, UTI, coeliac disease, IBD, intermittent obstruction, PUJ obstruction and cyclical vomiting.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Bilious vomiting, bleeding, weight or growth loss, fever, nocturnal or localised pain, symptoms between attacks.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Abdominal migraine named, with normal tests explained as supporting it.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Dark room, fluids, early paracetamol or ibuprofen per BNFC; diary and triggers.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Antiemetic and triptan restrictions at age 8 respected; paediatric referral for frequent or disabling attacks.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Clear red flags with 999 or A&E routes; face-to-face booked; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Mia",
    "age": "8 years · female",
    "pmh": [
     "Recurrent central abdominal pain episodes",
     "Mother has migraine"
    ],
    "meds": [
     "Check repeat record"
    ],
    "allergy": "None recorded",
    "recent": "Basic tests normal. Attacks every few weeks; well in between.",
    "reason": "Telephone, mother: “Why do the tests keep coming back fine?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Confirm identity; let her describe the attacks."
    },
    {
     "t": "1–5",
     "h": "History",
     "d": "Site, duration, frequency, stereotypy, wellness between; bilious vomiting, blood, growth, fever, nocturnal or localised pain, urinary and bowel symptoms; migraine features; tests done."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Fear that something is being missed."
    },
    {
     "t": "6–11",
     "h": "Explain and plan",
     "d": "Abdominal migraine; why normal tests fit; face-to-face exam, growth and urine; coeliac serology if needed. Dark room, fluids, early analgesia; no routine antiemetic or triptan; diary; paediatric referral if frequent."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "Red flags with routes; book review; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Orders another round of tests without a clear question; dismisses it because the tests are normal; misses bilious vomiting or growth questions; prescribes an antiemetic outside MHRA advice; diagnoses without ever examining her.",
    "pass": "Recognises the stereotyped pattern, screens alarm features, explains the diagnosis, arranges an examination with growth and urine, and gives attack advice and a safety-net.",
    "exc": "All of the above, plus: explains exactly why normal tests support the diagnosis; checks which tests were done and adds coeliac serology if needed; respects antiemetic and triptan restrictions; uses a diary with a clear paediatric referral threshold; gives an honest prognosis linked to the mother’s migraine."
   },
   "avoid": [
    {
     "dont": "“The tests are normal, so there’s nothing wrong.”",
     "instead": "“There’s no test for migraine, so normal results actually fit and are reassuring.”",
     "why": "Dismissal leaves the parent feeling unheard and drives repeated attendance."
    },
    {
     "dont": "“I’ll give her something for the sickness.”",
     "instead": "“Anti-sickness medicines aren’t routinely used at her age; rest, fluids and early painkillers help most.”",
     "why": "Domperidone is not licensed under 12 and metoclopramide is restricted in under-18s (MHRA)."
    },
    {
     "dont": "“Let’s repeat all the bloods to be sure.”",
     "instead": "“I’d like to examine her and check her growth and urine, and add a coeliac test if it hasn’t been done.”",
     "why": "Targeted assessment is safer and more useful than repeating normal tests."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "School",
     "t": "Attacks can cause missed school. A short letter explaining the diagnosis and a plan for attacks at school can help."
    },
    {
     "h": "Family",
     "t": "The mother’s own migraine gives her understanding of triggers and can be used in explanation."
    }
   ],
   "legal": [
    {
     "h": "Medicines for children",
     "t": "Domperidone is licensed only for 12 and over weighing at least 35 kg (MHRA 2019). Off-label use in children is a specialist decision, made with informed consent."
    }
   ],
   "professional": [
    {
     "h": "Remote consultation",
     "t": "Abdominal pain in a child should not be diagnosed without examination; convert to face-to-face when examination is needed."
    },
    {
     "h": "Avoiding over-investigation",
     "t": "Repeated tests without a clear question increase anxiety and cost. Explain the rationale for the tests you do order."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Migraine charities provide information on childhood migraine and its variants, and school health teams can support attendance."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Bilious (green) vomiting: possible malrotation or obstruction, emergency",
     "Blood in vomit or stool",
     "Weight loss or slowing growth",
     "Fever, nocturnal waking, localised or right-sided pain",
     "Symptoms between attacks, dysuria, joint or perianal problems, family history of IBD or coeliac disease"
    ],
    "psychosocial": [
     "School attendance",
     "Mother’s own migraine",
     "Parental worry after normal tests"
    ],
    "ice": [
     "Idea: something is being missed",
     "Concern: tests normal but attacks continue",
     "Expectation: a diagnosis"
    ]
   },
   "diagnosis": "“This fits abdominal migraine: a form of migraine in children that causes attacks of tummy pain rather than headache.”",
   "diagnosisLay": "“It’s the same switch in the nervous system that causes your migraines, but in children it often shows up in the tummy. Between attacks the body is completely normal, which is why the tests are normal too.”",
   "management": {
    "reflectIce": "“You were worried something had been missed because the tests were normal. Normal tests actually fit this diagnosis.”",
    "psychosocial": "Validate her worry; support school attendance; involve the mother’s migraine experience.",
    "sharedPlan": [
     "Face-to-face review: examination, growth chart, urine test",
     "Coeliac serology if not done (NG20)",
     "Attacks: dark room, fluids, early paracetamol or ibuprofen per BNFC",
     "Symptom and trigger diary; regular meals, sleep, fluids",
     "Paediatric referral if frequent or disabling"
    ],
    "safetyNet": [
     "Green vomit or severe unrelenting pain: 999 or A&E",
     "Blood, fever, localised pain, weight loss, unwell between attacks: urgent review"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Abdominal pain in children",
    "s": "Visual algorithm · red flags",
    "href": "algorithms/abdominal-pain-children.html"
   },
   {
    "ic": "💠",
    "t": "Migraine",
    "s": "Management protocol",
    "href": "management/migraine.html"
   },
   {
    "ic": "💠",
    "t": "Coeliac disease",
    "s": "NG20 · serology",
    "href": "management/coeliac-disease.html"
   },
   {
    "ic": "📋",
    "t": "Constipation in children",
    "s": "Case walkthrough · CG99",
    "href": "../cases/constipation-children.html"
   }
  ],
  "pitfalls": {
   "intro": "A telephone case where the diagnosis is recognisable from the history. Marks go to screening alarm features, arranging an examination, explaining why normal tests fit, and treating attacks within licensing.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Diagnosing without arranging an examination.",
     "why": "Growth, abdominal findings and urine must be checked in a child.",
     "fix": "Book a face-to-face review."
    },
    {
     "dom": "tasks",
     "fail": "Missing bilious vomiting and growth questions.",
     "why": "Malrotation and organic disease must be excluded.",
     "fix": "Ask specifically about green vomit, blood, weight and growth."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing domperidone or metoclopramide.",
     "why": "MHRA restrictions in children.",
     "fix": "Rest, fluids and early simple analgesia; paediatric advice if needed."
    },
    {
     "dom": "tasks",
     "fail": "Repeating all investigations.",
     "why": "Adds anxiety without a clear question.",
     "fix": "Targeted tests: urine and coeliac serology if not done."
    },
    {
     "dom": "rto",
     "fail": "“The tests are normal, so it’s nothing.”",
     "why": "The mother feels dismissed.",
     "fix": "Explain that normal tests support abdominal migraine."
    },
    {
     "dom": "gs",
     "fail": "Generic safety-netting.",
     "why": "Parents need to know which signs are emergencies.",
     "fix": "Name green vomit, blood, fixed pain, fever and being unwell between attacks, with routes."
    }
   ]
  }
 },
 "anal-fissure": {
  "stem": {
   "name": "Hana Reyes",
   "age": "35-year-old woman",
   "pmh": [
    "Recent birth (postnatal)"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "No recent consultations recorded.",
   "reason": "Booked appointment: “Pain and bleeding when I go to the toilet.”"
  },
  "knowledge": {
   "guideline": "[1] MHRA SPC: Rectogesic 4 mg/g rectal ointment · [2] BNF: osmotic laxatives, lidocaine (topical) · [3] NICE NG12 (updated April 2026) Suspected cancer: recognition and referral (updated April 2026) · [4] NICE HTG690 Quantitative faecal immunochemical testing for suspected colorectal cancer · [5] NICE CG192 Antenatal and postnatal mental health",
   "summary": "Severe, sharp pain on passing stool with a throbbing ache afterwards and bright red blood on the paper, after postnatal constipation, is an anal fissure. The foundation is keeping stools soft; a topical sphincter relaxant is for persistent or chronic fissures, and its pregnancy and breastfeeding cautions matter in a postnatal woman.",
   "points": [
    {
     "h": "Recognise it",
     "t": "Severe pain on or after defecation, often lasting minutes to hours, with bright red blood on the paper, usually from a posterior midline tear after hard stool. Acute: under 6 weeks. Chronic: 6 weeks or more, often with a sentinel tag or indurated edges. Inspect gently; do not force a digital rectal examination when it is too painful, but arrange review if the examination is incomplete."
    },
    {
     "h": "Haemorrhoids and atypical fissures",
     "t": "Haemorrhoids usually bleed painlessly unless thrombosed. A lateral, multiple, painless, indurated, large or non-healing fissure means reconsidering the diagnosis: Crohn’s disease, HIV, TB, syphilis, malignancy or trauma."
    },
    {
     "h": "Soften the stool",
     "t": "Fluids, gradual fibre where appropriate, and an osmotic laxative if stools stay hard, titrated to soft stools (dose per BNF [2]). Fibre without enough fluid can make things worse. Avoid straining and continue after healing. Warm baths ease spasm; a short course of topical lidocaine before defecation for severe pain (BNF [2])."
    },
    {
     "h": "Topical relaxant",
     "t": "For a persistent or chronic fissure: Rectogesic (GTN 0.4%) is licensed for pain in chronic anal fissure, applied intra-anally every 12 hours for up to 8 weeks [1]. Headache is very common. Not with PDE-5 inhibitors or other nitrates; do not use in pregnancy; not recommended when breastfeeding [1]. Diltiazem 2% is an unlicensed alternative, used twice daily for about 6–8 weeks."
    },
    {
     "h": "Refer",
     "t": "Colorectal surgery if not healed after about 6–8 weeks of stool softening and topical treatment, if recurrent, or if atypical. The surgeon chooses between botulinum toxin and sphincter surgery, weighing continence and obstetric history."
    },
    {
     "h": "Colorectal red flags",
     "t": "A fissure does not exclude other pathology. Blood mixed with stool, a persistent change in bowel habit, weight loss, iron-deficiency anaemia or a mass need assessment under NICE NG12 (updated April 2026) [3], using FIT where indicated (NICE HTG690 [4]). A rectal or anal mass or unexplained anal ulceration: consider a suspected cancer pathway referral."
    },
    {
     "h": "Postnatal context",
     "t": "Postnatal constipation, fear of opening the bowels and sleep loss often coexist. NICE CG192 [5]: consider asking about low mood and anxiety in the postnatal period."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Reyes, I’m Dr Patel. How can I help today?",
    "dom": "rto",
    "why": "Open start"
   },
   {
    "who": "pt",
    "text": "This is horrible, doctor. When I open my bowels it’s an agonising sharp pain, like passing glass or razor blades, and then it throbs for ages afterwards. There’s bright red blood on the paper. I’ve been constipated since the baby. I’m almost scared to go now."
   },
   {
    "who": "dr",
    "text": "That sounds really painful, and I can see why you’re dreading it. Let me ask a few questions and then we can sort out a plan.",
    "dom": "rto",
    "why": "Acknowledges pain and fear"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "How long has the pain been going on?",
    "dom": "tasks",
    "why": "Acute versus chronic (6-week threshold)"
   },
   {
    "who": "pt",
    "text": "Since not long after the baby. I haven’t counted the weeks."
   },
   {
    "who": "dr",
    "text": "Is the blood on the paper and on the outside of the stool, or mixed in with it? Is it bright red or darker?",
    "dom": "tasks",
    "why": "Characterises bleeding"
   },
   {
    "who": "pt",
    "text": "Bright red, on the paper and a bit on the outside. Not mixed in."
   },
   {
    "who": "dr",
    "text": "Apart from the constipation, has your bowel pattern changed? Any tummy pain, diarrhoea, weight loss or tiredness beyond what a new baby brings?",
    "dom": "tasks",
    "why": "Colorectal and IBD screen"
   },
   {
    "who": "pt",
    "text": "No, just hard and not often. I’m tired, but that’s the baby."
   },
   {
    "who": "dr",
    "text": "Do you feel a lump coming down, or is it mainly pain?",
    "dom": "tasks",
    "why": "Haemorrhoid screen"
   },
   {
    "who": "pt",
    "text": "No lump. It’s the pain."
   },
   {
    "who": "dr",
    "text": "What are you drinking and eating at the moment? Have you tried anything for the constipation?",
    "dom": "tasks",
    "why": "Fluid, fibre and laxative history"
   },
   {
    "who": "pt",
    "text": "Not enough water, to be honest. I haven’t taken anything."
   },
   {
    "who": "dr",
    "text": "Are you taking any medicines, and are you breastfeeding? Both affect what I can prescribe.",
    "dom": "tasks",
    "why": "Medication and breastfeeding check before prescribing"
   },
   {
    "who": "pt",
    "text": "No regular medicines. Why does feeding matter?"
   },
   {
    "who": "dr",
    "text": "Some treatments aren’t recommended when breastfeeding, so I’ll choose with that in mind whichever way you’re feeding.",
    "dom": "tasks",
    "why": "Links feeding to prescribing safety"
   },
   {
    "phase": "Mood and ICE",
    "clock": "5–6 min",
    "who": "dr",
    "text": "Having a new baby and pain like this is a lot. How are you feeling in yourself?",
    "dom": "rto",
    "why": "Postnatal mood (NICE CG192)"
   },
   {
    "who": "pt",
    "text": "Tired and fed up with this. Otherwise okay, I think."
   },
   {
    "who": "dr",
    "text": "What worried you most about the blood?",
    "dom": "rto",
    "why": "Elicits concern"
   },
   {
    "who": "pt",
    "text": "That something’s really wrong down there."
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’d like to have a gentle look, just from the outside. I won’t put a finger inside if it’s too painful. Would you like a chaperone? (With consent: gentle parting of the buttocks shows a small posterior midline tear. No lump, no lateral or multiple tears. Examination stopped there.)",
    "dom": "tasks",
    "why": "Consent, chaperone, gentle inspection only; checks for atypical features"
   },
   {
    "who": "dr",
    "text": "You have an anal fissure, a small tear in the lining at the back of the back passage. Hard stools caused it, and the muscle there goes into spasm, which is the throbbing afterwards. The spasm and the fear of going make the stools harder, so it becomes a cycle. It’s in the usual place, and the bleeding fits, so it doesn’t look like anything more serious.",
    "dom": "tasks",
    "why": "Names the diagnosis, explains the cycle, addresses her fear"
   },
   {
    "who": "pt",
    "text": "So it’s not piles?"
   },
   {
    "who": "dr",
    "text": "Piles usually bleed without much pain. This severe pain is typical of a fissure.",
    "dom": "rto",
    "why": "Distinguishes from haemorrhoids plainly"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The most important treatment is keeping your stools soft so the tear can heal. More water, fibre built up gradually, and a laxative that softens the stool. I’ll check it suits you if you’re breastfeeding. Adjust the dose so stools are soft but not runny, and keep going even after it heals.",
    "dom": "tasks",
    "why": "Stool softening as the foundation (BNF)"
   },
   {
    "who": "pt",
    "text": "And for the pain?"
   },
   {
    "who": "dr",
    "text": "A numbing gel before you open your bowels, for a short time, and a warm bath afterwards relaxes the muscle. Most of these heal with this alone.",
    "dom": "tasks",
    "why": "Short topical anaesthetic and warm baths"
   },
   {
    "who": "pt",
    "text": "What if it doesn’t heal?"
   },
   {
    "who": "dr",
    "text": "Then there’s an ointment to relax the muscle. The usual one often gives headaches, and it isn’t used in pregnancy and isn’t recommended when breastfeeding, so we’d choose between that and an alternative together. If it still doesn’t heal, I’d refer you to the bowel surgeons.",
    "dom": "tasks",
    "why": "Stepped plan with GTN cautions in a postnatal woman"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Come back if the blood becomes mixed in with the stool or dark, if your bowels change, you lose weight, or you get a painful swelling or fever near the back passage. I’ll see you in 6 to 8 weeks, or sooner if it’s not easing. What will you do when you get home?",
    "dom": "gs",
    "why": "Specific red flags, review interval and teach-back"
   },
   {
    "who": "pt",
    "text": "Drink more, take the softener every day, use the gel before I go, and come back if the bleeding changes."
   },
   {
    "who": "dr",
    "text": "Perfect. And if your mood dips, please tell us. You don’t need to struggle on.",
    "dom": "gs",
    "why": "Mood safety-net"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; let her describe the pain, bleeding and fear of going.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "New baby, tiredness, fluid intake and postnatal mood explored.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “scared to go” and explained the pain–spasm–constipation cycle.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (something wrong down there), concern (the blood), expectation (relief and an explanation).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Chaperone; gentle external inspection without a forced DRE; atypical features looked for; review if examination incomplete.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Fissure versus haemorrhoids, atypical fissure (Crohn’s, infection, malignancy) and colorectal causes.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about blood mixed with stool, bowel change, weight loss; NICE NG12 (updated April 2026) and FIT (NICE HTG690) if these develop.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named an anal fissure, posterior midline, typical.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Stool softening with an osmotic laxative, short topical lidocaine, warm baths; topical relaxant only if persistent, with GTN cautions (MHRA SPC).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Breastfeeding status checked before prescribing; postnatal mood asked (NICE CG192).",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review at 6–8 weeks; colorectal referral if not healing; red-flag and mood safety-net.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Hana Reyes",
    "age": "35 years · female",
    "pmh": [
     "Recent birth"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "No recent consultations.",
    "reason": "“Pain and bleeding when I go to the toilet.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Let her describe the pain and bleeding. Acknowledge the dread of going."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Duration, type of bleeding, bowel change, weight loss, lump, fluids and fibre, medicines, breastfeeding."
    },
    {
     "t": "5–6",
     "h": "Mood and ICE",
     "d": "How she is coping postnatally. Name her fear that something is seriously wrong."
    },
    {
     "t": "6–8",
     "h": "Examine and explain",
     "d": "Chaperone, gentle inspection only. Name the fissure and the pain–spasm cycle."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Soften stools, lidocaine, warm baths; topical relaxant only if persistent; review 6–8 weeks; red flags; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Calls it piles; forces a rectal examination; gives GTN first without asking about breastfeeding or warning about headache; no plan for the constipation.",
    "pass": "Recognises an anal fissure, examines gently, makes stool softening the foundation with pain relief, and safety-nets for red flags.",
    "exc": "All of the above, plus: explains the pain–spasm cycle in plain words; checks breastfeeding before prescribing and knows GTN is not recommended; asks about postnatal mood; names the 6–8 week review and the colorectal route; confirms the plan by teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s just piles.”",
     "instead": "“Severe pain on going with bright blood is a small tear called a fissure.”",
     "why": "Mislabelling leads to the wrong advice and ignores the pain."
    },
    {
     "dont": "“I’ll just have a quick feel inside.”",
     "instead": "“I’ll look gently from the outside and won’t examine inside if it’s too painful.”",
     "why": "Forcing a DRE on an acute fissure is painful and unnecessary; arrange review if the examination is incomplete."
    },
    {
     "dont": "“Put this GTN ointment on twice a day.”",
     "instead": "“Softening your stools comes first. If it doesn’t heal, we’ll look at an ointment, checking it’s safe with feeding.”",
     "why": "GTN is for persistent or chronic fissures and is not recommended when breastfeeding (MHRA SPC)."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "New parent",
     "t": "Sleep loss, little time to eat and drink, and fear of pain all worsen constipation. Practical, small steps work best."
    },
    {
     "h": "Support",
     "t": "The health visitor can support her and ask about mood and feeding."
    }
   ],
   "legal": [
    {
     "h": "Unlicensed prescribing",
     "t": "Diltiazem 2% is unlicensed for anal fissure. Explain this and record the discussion (GMC good practice in prescribing)."
    },
    {
     "h": "Intimate examination",
     "t": "Explain, gain consent, offer a chaperone and record it (GMC)."
    }
   ],
   "professional": [
    {
     "h": "Prescribing in breastfeeding",
     "t": "Check the BNF for each medicine. Rectogesic is not recommended when breastfeeding and must not be used in pregnancy (MHRA SPC)."
    },
    {
     "h": "Not assuming it is benign",
     "t": "If the examination is incomplete or features are atypical, arrange review or referral rather than assuming a simple fissure."
    }
   ],
   "community": [
    {
     "h": "Pharmacy",
     "t": "Community pharmacists can advise on laxatives and simple measures, and on whether a product is suitable when breastfeeding."
    },
    {
     "h": "Postnatal check",
     "t": "The 6–8 week postnatal check is a chance to review healing, bowels and mood."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Blood mixed with stool or dark blood",
     "Persistent change in bowel habit, weight loss or iron-deficiency anaemia (NICE NG12 (updated April 2026); FIT per NICE HTG690)",
     "Lateral, multiple, painless or non-healing fissure",
     "Painful swelling, fever or discharge near the anus (abscess)"
    ],
    "psychosocial": [
     "Fear of opening her bowels",
     "New baby, tiredness and low fluid intake",
     "Postnatal mood"
    ],
    "ice": [
     "Idea: something wrong down there",
     "Concern: the bright blood and the pain",
     "Expectation: relief and an explanation"
    ]
   },
   "diagnosis": "“This is an anal fissure, a small tear at the back of the back passage, caused by hard stools.”",
   "diagnosisLay": "“The tear hurts when stool passes, then the muscle around it tightens and throbs. That makes you hold on, stools get harder, and it tears again. Soft stools break that cycle.”",
   "management": {
    "reflectIce": "“You were worried something was seriously wrong. The tear is in the typical place and the bleeding fits, which is reassuring, and I’ll review you to make sure it heals.”",
    "psychosocial": "Acknowledge the dread of going and the demands of a new baby; ask about mood.",
    "sharedPlan": [
     "Fluids, gradual fibre and an osmotic laxative titrated to soft stools (BNF); continue after healing",
     "Short course of topical lidocaine before defecation; warm baths",
     "If persistent at 6–8 weeks: topical relaxant, with GTN cautions in pregnancy and breastfeeding (MHRA SPC) or unlicensed diltiazem; colorectal referral if still not healed"
    ],
    "safetyNet": [
     "Blood mixed with stool, dark blood, bowel change or weight loss: return for assessment",
     "Painful swelling, fever or discharge near the anus: urgent review",
     "Low mood or anxiety: contact the practice or health visitor"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Anal fissure",
    "s": "Management protocol · owner-verified",
    "href": "management/anal-fissure.html"
   },
   {
    "ic": "💠",
    "t": "Haemorrhoids",
    "s": "Management protocol",
    "href": "management/haemorrhoids.html"
   },
   {
    "ic": "💠",
    "t": "Constipation in adults",
    "s": "Management protocol · laxatives",
    "href": "management/constipation-adult.html"
   },
   {
    "ic": "🗺️",
    "t": "Rectal bleeding",
    "s": "Visual algorithm · NICE NG12 (updated April 2026)",
    "href": "algorithms/rectal-bleeding.html"
   },
   {
    "ic": "🗺️",
    "t": "Anal pain",
    "s": "Visual algorithm",
    "href": "algorithms/anal-pain.html"
   },
   {
    "ic": "💠",
    "t": "Postnatal depression",
    "s": "Management protocol · NICE CG192",
    "href": "management/postnatal-depression.html"
   }
  ],
  "pitfalls": {
   "intro": "This station rewards a confident diagnosis and a stool-first plan. Marks are lost by calling it piles, by forcing an examination, and by prescribing GTN without checking breastfeeding.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Diagnosing haemorrhoids.",
     "why": "Severe pain on defecation with bright blood on the paper points to a fissure; haemorrhoids usually bleed painlessly.",
     "fix": "Name the fissure and explain the difference."
    },
    {
     "dom": "tasks",
     "fail": "Leading with GTN ointment.",
     "why": "Stool softening is the foundation; GTN is for persistent or chronic fissures, often causes headache, and is not recommended when breastfeeding (MHRA SPC).",
     "fix": "Start with an osmotic laxative, lidocaine and warm baths; review at 6–8 weeks."
    },
    {
     "dom": "tasks",
     "fail": "Forcing a digital rectal examination.",
     "why": "It is very painful with an acute fissure and gentle inspection is usually enough.",
     "fix": "Inspect gently; if incomplete, arrange review rather than assuming it is simple."
    },
    {
     "dom": "tasks",
     "fail": "Not checking for red flags or atypical features.",
     "why": "Blood mixed with stool, bowel change, weight loss or an atypical fissure change the pathway (NICE NG12 (updated April 2026)).",
     "fix": "Ask directly and safety-net with named symptoms."
    },
    {
     "dom": "rto",
     "fail": "Ignoring the fear of going and the new baby.",
     "why": "Fear drives the constipation, and postnatal mood matters (NICE CG192).",
     "fix": "Explain the cycle and ask how she is coping."
    },
    {
     "dom": "gs",
     "fail": "No review date.",
     "why": "Healing needs checking at 6–8 weeks before stepping up or referring.",
     "fix": "Book review and say when colorectal referral would follow."
    }
   ]
  }
 },
 "cannabis-hyperemesis": {
  "stem": {
   "name": "Reece Calland",
   "age": "24-year-old man",
   "pmh": [
    "Recurrent vomiting episodes: several A&E attendances, investigations reported normal"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "A&E attendances with vomiting and abdominal pain; scans and bloods normal.",
   "reason": "Booked appointment: “Keep getting bad attacks of being sick. Nobody knows why.”"
  },
  "knowledge": {
   "guideline": "[1] Rome IV criteria for functional gastrointestinal disorders: cannabinoid hyperemesis syndrome (2016) (international) · [2] NICE CG51 Drug misuse in over 16s: psychosocial interventions (2007) · [3] DVLA Assessing fitness to drive: drug misuse and dependence · [4] BNF: antiemetics",
   "summary": "Stereotyped episodes of vomiting and abdominal pain over months, repeated normal investigations, and relief from long hot showers in a regular cannabis user is cannabis hyperemesis syndrome. The diagnosis depends on asking about cannabis without judgement. Sustained cessation is the only treatment that stops the episodes.",
   "points": [
    {
     "h": "Recognise it",
     "t": "Rome IV [1] (international) describes episodes of vomiting resembling cyclic vomiting syndrome, occurring after prolonged, excessive cannabis use, and relieved by sustained cessation. Compulsive hot bathing or showering to ease symptoms is typical. Patients are often well between episodes and have had repeated normal investigations."
    },
    {
     "h": "Ask about cannabis",
     "t": "The diagnosis is missed when no one asks. Ask routinely and without judgement: how often, how much, for how long, and any recent change in strength or pattern. Ask about other drugs and alcohol."
    },
    {
     "h": "Exclude other causes",
     "t": "Check for red flags: bilious or bloody vomiting, severe or constant abdominal pain, weight loss, dysphagia, headache or neurological symptoms (raised intracranial pressure), jaundice. Consider diabetes (DKA), hypercalcaemia, adrenal insufficiency, pancreatitis, obstruction, peptic disease, cyclic vomiting syndrome and, in women, pregnancy. Previous normal results help, but reassess anything new."
    },
    {
     "h": "Acute episodes",
     "t": "Standard antiemetics often help little [4]. Dehydration and electrolyte disturbance, including acute kidney injury, can follow prolonged vomiting: seek urgent care if unable to keep fluids down. Warn that very hot water can scald."
    },
    {
     "h": "Cessation",
     "t": "Symptoms settle with sustained abstinence, which may take weeks or longer, and return with renewed use. Cannabis withdrawal (irritability, poor sleep, low appetite, low mood) can occur in the first weeks. NICE CG51 [2]: use motivational approaches and offer referral to drug treatment services."
    },
    {
     "h": "Driving",
     "t": "It is illegal to drive with cannabis in the blood above a specified limit, or while impaired. DVLA [3]: persistent misuse of, or dependence on, cannabis must be notified and the person must stop driving."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Calland, I’m Dr Evans. What’s brought you in?",
    "dom": "rto",
    "why": "Open start"
   },
   {
    "who": "pt",
    "text": "I keep getting these horrendous attacks of being sick, vomiting for a day or two with bad stomach pain, every few weeks. I’ve been to A&E loads, had scans and bloods, all normal. The weird thing is the only thing that helps is standing in a really hot shower for ages. I almost live in there during an attack. What’s wrong with me?"
   },
   {
    "who": "dr",
    "text": "That sounds exhausting, and frustrating to be told everything is normal. The shower detail is really important, so thank you for mentioning it. Can I ask some questions?",
    "dom": "rto",
    "why": "Validates frustration; flags the key cue"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Between the attacks, are you completely well?",
    "dom": "tasks",
    "why": "Episodic pattern"
   },
   {
    "who": "pt",
    "text": "Pretty much. Then it hits again."
   },
   {
    "who": "dr",
    "text": "When you vomit, is it ever green, or does it have blood in it? And is the pain ever constant and severe?",
    "dom": "tasks",
    "why": "Red flags: bilious or bloody vomiting, surgical pain"
   },
   {
    "who": "pt",
    "text": "No blood, not green. The pain’s bad but it goes with the sickness."
   },
   {
    "who": "dr",
    "text": "Any weight loss, trouble swallowing, headaches that wake you, or problems with your vision?",
    "dom": "tasks",
    "why": "Red flags: weight loss, dysphagia, raised ICP"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Do you have diabetes or any other condition, and do you take any medicines?",
    "dom": "tasks",
    "why": "Metabolic causes and medication"
   },
   {
    "who": "pt",
    "text": "No, nothing."
   },
   {
    "who": "dr",
    "text": "I ask everyone this, and there’s no judgement: do you drink alcohol or use any drugs, including cannabis?",
    "dom": "tasks",
    "why": "Non-judgemental substance history, normalised"
   },
   {
    "who": "pt",
    "text": "(pauses) I smoke weed, yeah. Most days. Have done for a while. Nobody at the hospital asked."
   },
   {
    "who": "dr",
    "text": "Thank you for being honest, that really helps. Anything else, like other drugs or alcohol?",
    "dom": "tasks",
    "why": "Other substances"
   },
   {
    "who": "pt",
    "text": "Not really."
   },
   {
    "phase": "ICE and impact",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What have you been thinking might be causing this?",
    "dom": "rto",
    "why": "Ideas"
   },
   {
    "who": "pt",
    "text": "I thought they were missing something serious. Weed helps me feel less sick, if anything."
   },
   {
    "who": "dr",
    "text": "How is it affecting work, and your mood?",
    "dom": "tasks",
    "why": "Psychosocial impact and mood"
   },
   {
    "who": "pt",
    "text": "I’ve missed a lot of days. It gets me down, but I’m okay."
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me check your pulse, blood pressure and tummy. (Examines: observations normal, abdomen soft and non-tender, no signs of dehydration.) That’s all fine today.",
    "dom": "tasks",
    "why": "Focused examination"
   },
   {
    "who": "dr",
    "text": "Here’s what I think. The pattern you describe, with attacks every few weeks, normal tests and hot showers being the only relief, fits a condition called cannabis hyperemesis syndrome. In some people who use cannabis regularly over a long time, it starts to cause these vomiting attacks. The hot-shower relief is very typical.",
    "dom": "tasks",
    "why": "Names the diagnosis with the reasoning"
   },
   {
    "who": "pt",
    "text": "But it helps me feel less sick."
   },
   {
    "who": "dr",
    "text": "That’s a very common belief, and in the short term it can seem that way. With long-term regular use, it tends to do the opposite, which is why the attacks keep coming back.",
    "dom": "rto",
    "why": "Addresses his belief respectfully"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The honest part is that the only thing that stops these attacks is stopping cannabis completely. It can take some weeks to settle, and the attacks come back if you start again. Anti-sickness tablets usually don’t help much with this.",
    "dom": "tasks",
    "why": "The cessation message, clearly and without moralising"
   },
   {
    "who": "pt",
    "text": "I don’t know if I can just stop."
   },
   {
    "who": "dr",
    "text": "That’s fair. It’s your choice, and many people find it hard. Some get irritable, sleep badly or feel low for a few weeks after stopping. The local drug and alcohol service helps with exactly this, and you can refer yourself. Would you like the details? We can also plan it together here.",
    "dom": "tasks",
    "why": "Motivational, supportive approach and referral (NICE CG51)"
   },
   {
    "who": "pt",
    "text": "Yeah, give me the details. I’ll think about it."
   },
   {
    "who": "dr",
    "text": "One more thing: it’s illegal to drive with cannabis in your system, and regular use can affect your licence, so please don’t drive after using. And be careful with very hot water; people do scald themselves.",
    "dom": "gs",
    "why": "Driving and scald safety"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "During an attack, sip fluids. If you can’t keep anything down for a day, feel dizzy or pass very little urine, or if you get green or bloody vomit or severe constant pain, get seen urgently. Can you tell me what you’re taking away?",
    "dom": "gs",
    "why": "Specific safety-net and teach-back"
   },
   {
    "who": "pt",
    "text": "It’s probably the weed, stopping is the cure, call the service, and get help if I can’t keep fluids down."
   },
   {
    "who": "dr",
    "text": "Spot on. Let’s meet again in a few weeks to see how you’re getting on, whatever you decide.",
    "dom": "gs",
    "why": "Follow-up without conditions"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; let him describe the attacks, the A&E visits and the showers.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work absence, mood and frustration explored.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the hot-shower relief as the key clue and asked about cannabis.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (something serious missed), concern (no answers), expectation (a diagnosis and cure).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Observations, hydration and abdominal examination; no repeat scans needed; bloods only if new features.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Cannabis hyperemesis versus cyclic vomiting syndrome, surgical, metabolic and intracranial causes.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened bilious or bloody vomiting, severe constant pain, weight loss, dysphagia and neurological symptoms.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named cannabis hyperemesis syndrome and explained the reasoning (Rome IV, international).",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Sustained cessation as the only definitive treatment; antiemetics of limited use; drug service referral (NICE CG51).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Withdrawal symptoms, driving law and DVLA, scald risk addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Dehydration and red-flag safety-net; teach-back; review in a few weeks.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Reece Calland",
    "age": "24 years · male",
    "pmh": [
     "Recurrent vomiting; A&E attendances; investigations normal"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "Repeated A&E attendances with vomiting and abdominal pain; scans and bloods normal.",
    "reason": "“Keep getting bad attacks of being sick. Nobody knows why.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Let him tell the whole story. Note the hot showers."
    },
    {
     "t": "1–5",
     "h": "Pattern, red flags, substances",
     "d": "Well between attacks? Bilious or bloody vomit, weight loss, headache, diabetes, medicines. Ask about cannabis without judgement."
    },
    {
     "t": "5–6",
     "h": "ICE and impact",
     "d": "His fear of something missed; work and mood."
    },
    {
     "t": "6–8",
     "h": "Examine and explain",
     "d": "Observations and abdomen. Name cannabis hyperemesis syndrome and why."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Cessation as the cure, withdrawal, drug service, driving, scalds; dehydration safety-net; teach-back; review."
    }
   ],
   "wordPics": {
    "fail": "Never asks about cannabis; orders more scans; prescribes antiemetics and reassures; or lectures him about drugs.",
    "pass": "Asks about cannabis, recognises the syndrome, screens red flags, explains that stopping is the treatment and offers support.",
    "exc": "All of the above, plus: uses the shower clue explicitly; asks without judgement and thanks him for honesty; addresses his belief that cannabis helps; warns about withdrawal; covers driving and scalds; gives a clear dehydration safety-net; offers review regardless of his decision."
   },
   "avoid": [
    {
     "dont": "“We’ll do another scan to be sure.”",
     "instead": "“Your tests have been normal several times. The pattern, especially the showers, points to a cause we can act on.”",
     "why": "Repeat investigation without asking about cannabis prolongs the cycle."
    },
    {
     "dont": "“You need to stop taking drugs.”",
     "instead": "“The only thing that stops these attacks is stopping cannabis. It’s your decision, and I can help if you want to try.”",
     "why": "Moralising loses engagement; a supportive, motivational approach keeps him coming back (NICE CG51)."
    },
    {
     "dont": "“Take these anti-sickness tablets when it starts.”",
     "instead": "“Anti-sickness tablets usually don’t help much with this. Sip fluids and get seen if you can’t keep them down.”",
     "why": "Standard antiemetics are often ineffective; the priority is hydration and cessation."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work",
     "t": "Repeated sickness absence. A fit note can be issued if needed; the long-term fix is stopping cannabis."
    },
    {
     "h": "Stigma",
     "t": "Fear of judgement stops people disclosing drug use. A routine, neutral question makes disclosure easier."
    }
   ],
   "legal": [
    {
     "h": "Drug driving",
     "t": "It is an offence to drive with cannabis in the blood above the specified limit, or while impaired by drugs."
    },
    {
     "h": "DVLA",
     "t": "Persistent misuse of or dependence on cannabis must be notified to DVLA, and the person must stop driving (DVLA Assessing fitness to drive)."
    },
    {
     "h": "Confidentiality",
     "t": "Disclosure of drug use is confidential. Record it accurately and explain who can see the record."
    }
   ],
   "professional": [
    {
     "h": "Non-judgemental care",
     "t": "GMC Good medical practice: treat patients fairly and without prejudice about their lifestyle."
    },
    {
     "h": "Diagnostic overshadowing in reverse",
     "t": "Once the label is made, still reassess new or different symptoms rather than attributing everything to cannabis."
    }
   ],
   "community": [
    {
     "h": "Drug services",
     "t": "Local drug and alcohol services usually accept self-referral and offer psychosocial support."
    },
    {
     "h": "Information",
     "t": "FRANK (talktofrank.com) gives confidential information about cannabis and stopping."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Bilious or bloody vomiting",
     "Severe constant abdominal pain or distension",
     "Weight loss or dysphagia",
     "Headache, visual or neurological symptoms",
     "Unable to keep fluids down, dizziness or little urine (dehydration, AKI)",
     "Diabetes (DKA)"
    ],
    "psychosocial": [
     "Cannabis frequency, amount and duration; other drugs and alcohol",
     "Time off work",
     "Mood and frustration with repeated normal tests"
    ],
    "ice": [
     "Idea: something serious is being missed",
     "Concern: no explanation after many tests",
     "Expectation: a diagnosis and a cure"
    ]
   },
   "diagnosis": "“This is cannabis hyperemesis syndrome: repeated vomiting attacks caused by long-term regular cannabis use.”",
   "diagnosisLay": "“In some people who use cannabis regularly for a long time, the body’s sickness controls get switched the wrong way, causing attacks of vomiting. Hot water seems to calm that down for a while, which is why the showers help.”",
   "management": {
    "reflectIce": "“You were worried something serious was being missed. Your tests being normal and the shower clue together give us the answer.”",
    "psychosocial": "Ask without judgement, respect his choice, use a motivational approach, and warn about withdrawal.",
    "sharedPlan": [
     "Explain that sustained cessation is the only treatment that stops the attacks",
     "Offer referral or self-referral to the local drug and alcohol service (NICE CG51)",
     "Advice on hydration in attacks, scald risk, and driving law and DVLA"
    ],
    "safetyNet": [
     "Unable to keep fluids down for a day, dizziness or very little urine: urgent assessment",
     "Green or bloody vomit, severe constant pain, weight loss or new neurological symptoms: return promptly",
     "Review in a few weeks whatever he decides"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Nausea and vomiting in adults",
    "s": "Visual algorithm · red flags",
    "href": "algorithms/nausea-vomiting-adults.html"
   },
   {
    "ic": "📋",
    "t": "Drug dependence",
    "s": "Case walkthrough",
    "href": "../cases/drug-dependence.html"
   },
   {
    "ic": "🗺️",
    "t": "Abdominal pain",
    "s": "Visual algorithm",
    "href": "algorithms/abdominal-pain.html"
   }
  ],
  "pitfalls": {
   "intro": "The whole station turns on one question that previous clinicians never asked. Marks are lost by not asking about cannabis, by ordering more tests, and by lecturing once he tells you.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Not asking about cannabis.",
     "why": "The syndrome is missed without a substance history, however many scans are done.",
     "fix": "Ask routinely and neutrally, prompted by the hot-shower clue."
    },
    {
     "dom": "tasks",
     "fail": "Ordering more investigations.",
     "why": "Repeated normal results with a typical pattern do not need repeating unless something new appears.",
     "fix": "Screen red flags; investigate only new features."
    },
    {
     "dom": "tasks",
     "fail": "Relying on antiemetics.",
     "why": "Standard antiemetics often give little benefit in this syndrome.",
     "fix": "Make sustained cessation the treatment and give hydration advice."
    },
    {
     "dom": "rto",
     "fail": "Moralising after disclosure.",
     "why": "Judgement ends engagement; NICE CG51 supports motivational approaches.",
     "fix": "Thank him, respect his choice and offer help."
    },
    {
     "dom": "rto",
     "fail": "Dismissing his belief that cannabis helps.",
     "why": "Unaddressed beliefs undermine the plan.",
     "fix": "Acknowledge it and explain why long-term use does the opposite."
    },
    {
     "dom": "gs",
     "fail": "No dehydration safety-net or driving advice.",
     "why": "Prolonged vomiting can cause AKI, and driving after cannabis is illegal.",
     "fix": "Give specific return advice and cover driving and DVLA."
    }
   ]
  }
 },
 "chronic-urticaria": {
  "stem": {
   "name": "Sofia Larkin",
   "age": "34-year-old woman",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "No previous consultations about a rash recorded. No allergy tests on file.",
   "reason": "Itchy raised welts most days for a couple of months, sometimes with lip or eyelid swelling. Cannot find a trigger."
  },
  "knowledge": {
   "guideline": "[1] BSACI guideline for the management of chronic urticaria and angioedema (Powell et al., Clin Exp Allergy 2015) · [2] EAACI/GA²LEN/EuroGuiDerm/APAAACI urticaria guideline (2026 update, Allergy; international) · [3] NICE TA339 (2015) omalizumab for previously treated chronic spontaneous urticaria · [4] BNF, antihistamines · [5] MHRA Drug Safety Update (April 2024), montelukast neuropsychiatric reactions",
   "summary": "Itchy weals most days for more than 6 weeks, each lasting under 24 hours and fading without a mark, with or without angioedema, and no consistent trigger, is chronic spontaneous urticaria. It is rarely allergic. Treat with a daily non-sedating antihistamine, step it up to four times the standard dose if needed, and refer if it stays uncontrolled. Give a clear airway safety-net.",
   "points": [
    {
     "h": "Recognise it",
     "t": "Chronic urticaria means weals, angioedema or both for more than 6 weeks [1][2]. In chronic spontaneous urticaria there is no specific external trigger; many cases are autoimmune. Inducible urticarias (pressure, cold, heat, friction, exercise) have a reproducible physical trigger and can coexist."
    },
    {
     "h": "The 24-hour rule",
     "t": "Individual weals that last more than 24 hours, burn or hurt rather than itch, or leave bruising or pigmentation suggest urticarial vasculitis: refer to dermatology for assessment and biopsy [1][2]. Ask about fever, joint pain and malaise alongside."
    },
    {
     "h": "Tests: few, and not allergy panels",
     "t": "Routine allergy testing is not recommended when the history does not point to an allergen [1]. Limited tests only: FBC and CRP or ESR [1][2]; further tests are guided by the history, such as thyroid tests if symptoms suggest thyroid disease. Food elimination diets rarely help chronic spontaneous urticaria."
    },
    {
     "h": "Aggravating, not causing",
     "t": "NSAIDs and aspirin, opioids, alcohol, heat, tight clothing, pressure, stress and intercurrent infection can make weals worse without being the cause [1]. Paracetamol is a safer analgesic choice. ACE inhibitors can cause or worsen angioedema and should be avoided in people with angioedema [1]."
    },
    {
     "h": "Antihistamine ladder",
     "t": "A second-generation non-sedating H1-antihistamine taken every day, not only on bad days [1][2]. If control is not achieved in 2–4 weeks, increase up to four times the standard dose [2]; above the licensed dose this is off-label and should be explained [4]. Avoid sedating antihistamines for regular use. A short course of oral steroid may be used for a severe flare only, never long term [1][2]."
    },
    {
     "h": "Pregnancy and breastfeeding",
     "t": "Ask before prescribing. BSACI [1]: in pregnancy use the lowest dose of loratadine or chlorphenamine, with cetirizine as second-line; when breastfeeding, cetirizine or loratadine at the lowest dose."
    },
    {
     "h": "Refractory disease",
     "t": "If uncontrolled on up-dosed antihistamine, refer to dermatology or immunology. Omalizumab is the preferred add-on [2]; NICE TA339 recommends it for severe disease (UAS7 of 28 or more) despite antihistamine-based treatment, in specialist care [3]. Ciclosporin is a specialist option after that [2]. Montelukast appears in older UK guidance [1]; if used, warn about neuropsychiatric effects [5]."
    },
    {
     "h": "Airway safety-net",
     "t": "Chronic spontaneous urticaria with angioedema is rarely anaphylaxis, but tongue or throat swelling, difficulty breathing or swallowing, a hoarse voice or collapse needs 999. Recurrent angioedema without weals raises ACE inhibitor-induced or hereditary (C1-inhibitor) angioedema, which do not respond to antihistamines [1]."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, Mrs Larkin, I’m Dr Shah. What’s been happening?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "For a couple of months now I keep breaking out in these itchy raised welts all over. They come up, last a few hours, then vanish and pop up somewhere else. Sometimes my lips or eyelids puff up. I’ve changed everything, food, washing powder, and I can’t find a trigger. The itch is driving me mad. What’s causing it?"
   },
   {
    "who": "dr",
    "text": "That sounds exhausting, especially changing so much and still not getting an answer. I’d like to ask a few questions, look at your skin, and then explain what I think is going on and what will help. Is that all right?",
    "dom": "rto",
    "why": "Acknowledges frustration and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Yes, please."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When a single welt comes up, how long does that one last before it fades? And does it leave any mark or bruise behind?",
    "dom": "tasks",
    "why": "The 24-hour rule for urticarial vasculitis"
   },
   {
    "who": "pt",
    "text": "A few hours at most. Then it’s gone, no mark at all."
   },
   {
    "who": "dr",
    "text": "Are they itchy, or do they burn or hurt? And do you get fevers, aching joints or feel unwell with them?",
    "dom": "tasks",
    "why": "Screens vasculitis and systemic features"
   },
   {
    "who": "pt",
    "text": "Just itchy. Really itchy. I feel fine otherwise."
   },
   {
    "who": "dr",
    "text": "How often are they coming, and how is it affecting your sleep and day?",
    "dom": "rto",
    "why": "Frequency and impact"
   },
   {
    "who": "pt",
    "text": "Most days. The itch is worst at night, so I’m not sleeping well."
   },
   {
    "who": "dr",
    "text": "When your lips or eyelids swell, has your tongue or throat ever swelled, or have you had any trouble breathing or swallowing, or felt faint?",
    "dom": "tasks",
    "why": "Airway and anaphylaxis screen"
   },
   {
    "who": "pt",
    "text": "No, never that. Just the lips and eyes, and it goes down."
   },
   {
    "who": "dr",
    "text": "Do any particular things set them off every time, like pressure from a waistband, cold, heat or exercise?",
    "dom": "tasks",
    "why": "Screens inducible urticaria"
   },
   {
    "who": "pt",
    "text": "Not that I’ve noticed. They just appear."
   },
   {
    "who": "dr",
    "text": "Do you take any tablets, including blood-pressure tablets or painkillers like ibuprofen or aspirin? And is there any chance you could be pregnant, or are you breastfeeding? That changes which medicine I’d choose.",
    "dom": "tasks",
    "why": "ACE inhibitor, NSAID aggravation and pregnancy before prescribing"
   },
   {
    "who": "pt",
    "text": "Nothing regular. And no, not pregnant, not breastfeeding."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You’ve worked really hard to find a cause. What do you think is behind it, and is anything in particular worrying you?",
    "dom": "rto",
    "why": "Explores ideas and concerns"
   },
   {
    "who": "pt",
    "text": "I thought it must be an allergy to something. I’m scared it’s a dangerous one, that one day my throat will close up. I want to find the trigger and get rid of it."
   },
   {
    "who": "dr",
    "text": "That makes complete sense. Thank you for telling me. Let me take a look at your skin and then I’ll answer that worry directly.",
    "dom": "rto",
    "why": "Validates the fear and links it to the explanation"
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Your skin looks normal in between, with no bruising or marks, which fits what you describe: they come and go. What you have is called chronic spontaneous urticaria: hives that come most days for more than six weeks, each one lasting under a day and fading without a mark, sometimes with lip or eye swelling.",
    "dom": "tasks",
    "why": "Names the diagnosis with its defining features"
   },
   {
    "who": "pt",
    "text": "So what am I allergic to?"
   },
   {
    "who": "dr",
    "text": "That’s the surprising part. In most people with this there’s no allergy behind it. The body’s own immune system keeps setting the hives off. That’s why changing your food and washing powder hasn’t worked, and why allergy tests usually don’t help. You haven’t missed anything.",
    "dom": "tasks",
    "why": "Explains non-allergic cause and why testing is unrewarding"
   },
   {
    "who": "pt",
    "text": "Really? So I can stop cutting things out?"
   },
   {
    "who": "dr",
    "text": "Yes. Some things can make it flare, like anti-inflammatory painkillers such as ibuprofen or aspirin, alcohol, heat, tight clothes and stress, so paracetamol is a better choice if you need a painkiller. But they aren’t the cause. I’d like to do a simple blood count and an inflammation test, and that’s all.",
    "dom": "tasks",
    "why": "Aggravators, limited tests only"
   },
   {
    "who": "pt",
    "text": "And the swelling? Is that dangerous?"
   },
   {
    "who": "dr",
    "text": "With this condition the lip and eye swelling is very rarely the dangerous kind of allergy. It usually settles by itself. But I’ll give you clear signs to act on, so you know exactly when it would be an emergency.",
    "dom": "rto",
    "why": "Answers her main fear honestly"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The treatment that works is a non-drowsy antihistamine, for example cetirizine, taken every single day, not just when you break out. Hives are much easier to prevent than to chase. Does taking a tablet every day sound manageable?",
    "dom": "tasks",
    "why": "Regular non-sedating antihistamine; checks acceptability"
   },
   {
    "who": "pt",
    "text": "Yes, I can do that. I’ve only been taking one when it’s bad."
   },
   {
    "who": "dr",
    "text": "If one a day isn’t controlling it after two to four weeks, we can go up, to as much as four times the usual dose. That’s higher than the leaflet says, so the leaflet may worry you, but it is standard specialist guidance and is generally well tolerated. I’ll give you a simple diary to score the hives and itch each day.",
    "dom": "tasks",
    "why": "Up-dosing to fourfold explained as off-label; symptom score"
   },
   {
    "who": "pt",
    "text": "And if that doesn’t work either?"
   },
   {
    "who": "dr",
    "text": "Then I’d refer you to the skin or allergy specialists. There are very effective treatments for stubborn cases, including an injection called omalizumab. Most people get good control, and for many it settles on its own over months to years.",
    "dom": "tasks",
    "why": "Referral route and realistic outlook"
   },
   {
    "who": "pt",
    "text": "That’s a relief. I thought I’d be itching forever."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Call 999 straight away if your tongue or throat swells, if you struggle to breathe or swallow, your voice goes hoarse or you feel faint. Please also come back if any welt lasts more than a day, hurts or leaves a bruise, and I’ll see you in about four weeks with your diary to decide whether to increase the dose.",
    "dom": "gs",
    "why": "Airway 999 advice, vasculitis features, planned review"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "Just so I know I’ve explained it well, how would you describe the plan to someone at home?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "It’s not an allergy, so stop hunting for triggers. Take the antihistamine every day, increase it if you say so, avoid ibuprofen, and 999 if my throat swells."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. You’ve done nothing wrong. We’ll get this under control together.",
    "dom": "gs",
    "why": "Confirms understanding and closes supportively"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her describe the transient itchy weals, the lip and eyelid swelling and the failed trigger hunt.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Sleep loss from night itch; the effort spent changing food and products; impact on daily life.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the swelling episodes and asked directly about tongue, throat and breathing; heard the frustration behind “I can’t find a trigger”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (an allergy), concern (a dangerous reaction, her throat closing), expectation (find and remove the trigger).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Examines the skin; checks weal duration and bruising; FBC and CRP or ESR only; no allergy panel.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Chronic spontaneous versus inducible urticaria, urticarial vasculitis, drug-induced (NSAID, ACE inhibitor) and hereditary angioedema.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for airway compromise, systemic features and weals lasting more than 24 hours.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Chronic spontaneous urticaria with angioedema, not allergic.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Daily second-generation antihistamine, up to four times the dose after 2–4 weeks if needed (off-label explained); pregnancy checked before prescribing; paracetamol rather than NSAIDs.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Stops fruitless elimination diets; addresses sleep; referral for omalizumab if refractory; short steroid course only for severe flares.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 for tongue or throat swelling or breathing difficulty; return for weals lasting over 24 hours or bruising; review in about 4 weeks with a symptom diary.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Sofia Larkin",
    "age": "34 years · female",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "Nil recorded"
    ],
    "allergy": "NKDA",
    "recent": "No previous consultations about a rash.",
    "reason": "“Itchy raised welts for months, can’t find a trigger. What’s causing it?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Opening",
     "d": "Let her tell the story: welts, swelling, the exhausting trigger hunt."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "How long each weal lasts, bruising, pain versus itch, systemic features, airway symptoms, physical triggers, ACE inhibitor or NSAIDs, pregnancy."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Allergy idea, fear of her throat closing, wish to find the trigger."
    },
    {
     "t": "6–8",
     "h": "Examine and explain",
     "d": "Name chronic spontaneous urticaria; explain it is rarely allergic, so testing and diets don’t help."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Daily antihistamine, step-up to fourfold, referral if refractory, 999 airway signs, 24-hour rule, review with diary, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Orders an allergy panel or sends her to cut out foods; prescribes an antihistamine “when needed”; never asks how long a weal lasts or about her throat; no airway safety-net.",
    "pass": "Recognises chronic spontaneous urticaria, explains it is usually not allergic, starts a daily non-sedating antihistamine with a plan to increase, and gives 999 advice for throat swelling.",
    "exc": "All of the above, plus: uses the 24-hour rule to exclude vasculitis; checks pregnancy and ACE inhibitor or NSAID use; explains fourfold up-dosing and that it is off-label; ends the trigger hunt kindly; names the referral route and omalizumab; uses a symptom diary and teach-back."
   },
   "avoid": [
    {
     "dont": "“Let’s do allergy tests to find out what you’re reacting to.”",
     "instead": "“In most people with this there isn’t an allergy behind it, so allergy tests rarely help.”",
     "why": "BSACI 2015: routine allergy testing is not recommended in chronic spontaneous urticaria without a suggestive history."
    },
    {
     "dont": "“Take an antihistamine when the hives come up.”",
     "instead": "“Take it every day, even on good days. It works by preventing them.”",
     "why": "Regular dosing is the first step of every guideline; as-needed use undertreats."
    },
    {
     "dont": "“The swelling is nothing to worry about.”",
     "instead": "“It’s rarely dangerous, but if your tongue or throat swells, or you can’t breathe or swallow, call 999.”",
     "why": "Blanket reassurance leaves no airway safety-net."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Sleep and work",
     "t": "Night itch disturbs sleep and concentration. Ask about work and home impact; a non-sedating daily dose avoids daytime drowsiness at work or when driving."
    },
    {
     "h": "Diet and money",
     "t": "Unnecessary elimination diets cost time and money and can restrict nutrition. Ending them is part of the treatment."
    }
   ],
   "legal": [
    {
     "h": "Off-label dosing",
     "t": "Up-dosing an antihistamine above the licensed dose is off-label. GMC Good practice in proposing, prescribing, providing and managing medicines and devices (2021): explain this, record the reason and the discussion."
    },
    {
     "h": "Driving",
     "t": "Sedating antihistamines can impair driving. Choose non-sedating ones and advise not to drive if drowsy after a dose increase."
    }
   ],
   "professional": [
    {
     "h": "Avoiding over-investigation",
     "t": "Allergy panels in chronic spontaneous urticaria create false positives and false leads. Explaining why you are not testing is good practice, not dismissal."
    },
    {
     "h": "Honest uncertainty",
     "t": "Say plainly that the cause is internal and the course is unpredictable, but usually improves; offer a clear review plan."
    }
   ],
   "community": [
    {
     "h": "Pharmacy and support",
     "t": "Community pharmacists can advise on antihistamine timing and interactions. Allergy UK has patient information on urticaria and angioedema."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Tongue or throat swelling, breathing or swallowing difficulty, hoarse voice, collapse (999)",
     "Weals lasting more than 24 hours, painful or leaving bruising (urticarial vasculitis)",
     "Fever, joint pain, malaise",
     "Angioedema without weals, or on an ACE inhibitor (bradykinin angioedema)"
    ],
    "psychosocial": [
     "Sleep loss from night itch",
     "Exhausting trigger hunt and restricted diet",
     "Fear of a sudden severe reaction"
    ],
    "ice": [
     "Idea: an allergy to something she eats or uses",
     "Concern: that it is dangerous and her throat will close",
     "Expectation: to find the trigger and cure it"
    ]
   },
   "diagnosis": "“This is chronic spontaneous urticaria: hives most days for over six weeks, each lasting under a day, sometimes with lip or eye swelling. It usually isn’t caused by an allergy.”",
   "diagnosisLay": "“Think of the skin’s itch cells as a smoke alarm that has become oversensitive. It goes off without any real fire. There’s nothing to find in your food or washing powder. The antihistamine turns the alarm’s sensitivity down.”",
   "management": {
    "reflectIce": "“You thought this was a dangerous allergy and have been trying hard to find the trigger. The good news is it usually isn’t an allergy, so you can stop searching. And I’ll show you exactly which swellings would be an emergency.”",
    "psychosocial": "End the elimination diets, address sleep, and make daily dosing practical; explain the off-label step-up so the leaflet doesn’t alarm her.",
    "sharedPlan": [
     "Daily second-generation non-sedating antihistamine (choice and dose per BNF; pregnancy status checked)",
     "If not controlled after 2–4 weeks, increase up to four times the standard dose (off-label, explained)",
     "FBC and CRP or ESR only; no allergy panel",
     "Paracetamol rather than NSAIDs; symptom diary",
     "Refer to dermatology or immunology if uncontrolled (omalizumab, NICE TA339)"
    ],
    "safetyNet": [
     "999 for tongue or throat swelling, breathing or swallowing difficulty, hoarse voice or faintness",
     "Return if a weal lasts more than 24 hours, hurts or bruises",
     "Review in about 4 weeks with the diary to decide on up-dosing or referral"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Urticaria protocol",
    "s": "Antihistamine ladder · UAS7 · NICE TA339",
    "href": "management/urticaria.html"
   },
   {
    "ic": "📋",
    "t": "Urticaria",
    "s": "Case walkthrough",
    "href": "../cases/urticaria.html"
   },
   {
    "ic": "💠",
    "t": "Angioedema protocol",
    "s": "ACE inhibitor and hereditary angioedema",
    "href": "management/angioedema.html"
   },
   {
    "ic": "🗺️",
    "t": "Anaphylaxis pathway",
    "s": "Visual algorithm · adrenaline first",
    "href": "algorithms/anaphylaxis.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is lost by chasing an allergy that isn’t there, by as-needed antihistamines, and by a missing airway safety-net. Each pattern below is common and fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Ordering an allergy panel or advising a strict elimination diet.",
     "why": "BSACI 2015: allergy testing is not recommended in chronic spontaneous urticaria without a suggestive history; it produces false leads.",
     "fix": "Explain why testing won’t help; FBC and CRP or ESR only."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing an antihistamine to take “when the hives come”.",
     "why": "Regular daily dosing is first-line in BSACI and international guidance.",
     "fix": "Daily dose, with a planned step-up to four times the standard dose if not controlled after 2–4 weeks."
    },
    {
     "dom": "tasks",
     "fail": "Never asking how long a single weal lasts or whether it bruises.",
     "why": "Weals over 24 hours, painful or bruising, suggest urticarial vasculitis needing dermatology.",
     "fix": "Ask the 24-hour question and include it in the safety-net."
    },
    {
     "dom": "tasks",
     "fail": "Up-dosing without checking pregnancy, or without explaining that it is off-label.",
     "why": "Drug choice changes in pregnancy (BSACI 2015) and the leaflet will contradict the plan.",
     "fix": "Ask about pregnancy and breastfeeding; explain the off-label step-up and record it."
    },
    {
     "dom": "rto",
     "fail": "Dismissing the trigger hunt: “there’s no point doing all that”.",
     "why": "She has invested a lot; dismissal loses trust.",
     "fix": "Acknowledge the effort, then explain why the cause is internal: “You haven’t missed anything.”"
    },
    {
     "dom": "gs",
     "fail": "“The swelling is harmless, don’t worry.”",
     "why": "No airway safety-net is a safety failure.",
     "fix": "999 for tongue or throat swelling, breathing or swallowing difficulty; teach-back to confirm."
    }
   ]
  }
 },
 "frontotemporal-dementia": {
  "stem": {
   "name": "Brian",
   "age": "58-year-old man",
   "pmh": [
    "No past medical history given in the case: check the record"
   ],
   "meds": [
    "Not specified in the case: check the repeat record"
   ],
   "allergy": "None recorded",
   "recent": "Wife reports one to two years of progressive change in personality and behaviour: rude, tactless remarks in public, thousands spent on “nonsense”, seems not to care about anything or anyone, eating strangely. Memory said to be fine. Others have put it down to a midlife crisis or stress.",
   "reason": "Attends with his wife: “I don’t recognise my husband any more.” Brian does not think anything is wrong."
  },
  "knowledge": {
   "guideline": "[1] NICE NG97 Dementia: assessment, management and support for people living with dementia and their carers (2018) · [2] International consensus criteria for behavioural-variant frontotemporal dementia, Rascovsky et al., Brain 2011 (international) · [3] DVLA Assessing fitness to drive: dementia · [4] GMC Confidentiality: patients’ fitness to drive and reporting concerns to the DVLA (2017) · [5] Mental Capacity Act 2005 and Care Act 2014 · [6] NICE NG150 Supporting adult carers (2020)",
   "summary": "A change in personality and conduct in a man of 58, with memory relatively spared and little insight, is behavioural-variant frontotemporal dementia until proved otherwise. It is often called a midlife crisis, stress or depression, which delays diagnosis. The GP’s job is a careful informant history, a screen for mimics (mood disorder, mania, alcohol, drugs, reversible physical causes), NG97 blood tests, and referral to a specialist dementia diagnostic service, with neurology or a young-onset service involved. A normal memory test does not exclude it. Address driving, money and safety now, raise lasting power of attorney while he may still have capacity, and support his wife as a carer.",
   "points": [
    {
     "h": "Recognition",
     "t": "Behavioural-variant FTD usually starts before 65. Consensus criteria [2] need three of six features for possible bvFTD: early disinhibition, early apathy or inertia, early loss of sympathy or empathy, perseverative or compulsive behaviour, hyperorality or dietary change, and an executive-led cognitive profile with relative sparing of memory and visuospatial skills. Insight is typically poor, so the informant history carries the diagnosis. Language variants present with progressive loss of speech or word meaning."
    },
    {
     "h": "Mimics",
     "t": "Depression, bipolar disorder or mania, late-onset psychosis, alcohol or drug misuse, medication effects, other dementias (Alzheimer’s is usually memory-led), and physical causes such as hypothyroidism, B12 deficiency, or a frontal space-occupying lesion. Ask about family history of dementia, motor neurone disease or psychiatric illness, and look for motor features: FTD can overlap with motor neurone disease."
    },
    {
     "h": "Primary care assessment",
     "t": "NG97 [1]: take a history from the person and from someone who knows him well, supplemented where possible by a structured informant tool; examine; do blood tests to exclude reversible causes (FBC, calcium, glucose, renal and liver function, thyroid function, B12 and folate). Do not rule out dementia solely because the person has a normal score on a cognitive instrument: memory screens are often normal early in bvFTD."
    },
    {
     "h": "Referral",
     "t": "Refer to a specialist dementia diagnostic service [1]; a young-onset service or cognitive neurology clinic is usually most appropriate at 58. Specialists arrange detailed neuropsychology and structural imaging, with perfusion or metabolic imaging if the diagnosis is uncertain. NG97: do not offer acetylcholinesterase inhibitors or memantine to people with frontotemporal dementia."
    },
    {
     "h": "Risk, driving and money",
     "t": "A person diagnosed with dementia must tell the DVLA [3]; the GMC [4] sets out when a doctor may inform the DVLA if a patient continues to drive when unsafe. Advise him not to drive while this is being assessed if there are concerns about judgement. Reckless spending exposes him and the household to financial harm: discuss practical protection and lasting power of attorney, which he can make only while he has capacity for that decision [5]. Consider safeguarding if he is being exploited."
    },
    {
     "h": "Carer support",
     "t": "His wife is a carer and is entitled to a carer’s assessment from the local authority under the Care Act 2014 [5]. NG150 [6] and NG97 [1] recommend identifying carers, offering information and support, and attending to their own health. Explaining that the behaviour is caused by an illness reduces blame and conflict."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and consent",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Patel. Thank you both for coming in. Brian, is it all right with you if your wife tells me what she has noticed, and then I’ll hear from you as well?",
    "dom": "rto",
    "why": "Addresses the patient first and gains consent for the collateral history"
   },
   {
    "who": "pt",
    "text": "(Brian, shrugging) If she wants. I’m fine."
   },
   {
    "who": "pt",
    "text": "(Wife) I don’t recognise my husband any more. Over the last year or two he’s become rude and tactless. He says awful things in public. He’s spent thousands on nonsense, he doesn’t seem to care about anything or anyone, and he’s eating strangely. His memory’s actually fine. People say it’s a midlife crisis or stress, but this isn’t him."
   },
   {
    "who": "dr",
    "text": "Thank you. That sounds bewildering, and you’ve described it very clearly. You know him better than anyone, and I’m taking this seriously.",
    "dom": "rto",
    "why": "Validates the informant and signals it will not be dismissed"
   },
   {
    "phase": "Informant history",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Can you give me an example of the sort of thing he says or does in public that is out of character?",
    "dom": "tasks",
    "why": "Concrete examples of disinhibition"
   },
   {
    "who": "pt",
    "text": "(Wife) Comments about people that he’d never have made before. He doesn’t seem embarrassed at all afterwards."
   },
   {
    "who": "dr",
    "text": "And the change in caring: does he respond when you or others are upset? Has he lost interest in things he used to do?",
    "dom": "tasks",
    "why": "Loss of empathy and apathy"
   },
   {
    "who": "pt",
    "text": "(Wife) He just doesn’t react. It’s as if he’s switched off."
   },
   {
    "who": "dr",
    "text": "You mentioned eating strangely. What has changed? And does he do things repetitively or in a fixed routine?",
    "dom": "tasks",
    "why": "Hyperorality and compulsive behaviour: consensus features"
   },
   {
    "who": "pt",
    "text": "(Wife) It’s hard to describe. Just not how he used to eat. And yes, some things over and over."
   },
   {
    "who": "dr",
    "text": "Has his speech changed at all: finding words, understanding words, or speaking less? And any stiffness, weakness, falls or muscle twitching?",
    "dom": "tasks",
    "why": "Language variant; parkinsonism and motor neurone disease overlap"
   },
   {
    "who": "pt",
    "text": "(Wife) Not that I’ve noticed."
   },
   {
    "who": "dr",
    "text": "I need to check other things that can change someone’s behaviour. Brian, how has your mood been? Any times of feeling unusually high, full of energy, needing little sleep?",
    "dom": "tasks",
    "why": "Depression and mania screen, asked of the patient"
   },
   {
    "who": "pt",
    "text": "(Brian) No. I’m fine. Nothing’s wrong with me."
   },
   {
    "who": "dr",
    "text": "How much alcohol do you drink in a week, and do you take any other drugs or any medicines, including ones you buy?",
    "dom": "tasks",
    "why": "Alcohol, drugs and medication as mimics"
   },
   {
    "who": "pt",
    "text": "(Brian) Not much."
   },
   {
    "who": "dr",
    "text": "Any headaches, sickness, seizures or changes in vision? And is there anyone in the family who had dementia, motor neurone disease or a mental illness?",
    "dom": "tasks",
    "why": "Structural lesion red flags; family history"
   },
   {
    "who": "pt",
    "text": "(Wife) No headaches or anything like that. I don’t know of anything in the family."
   },
   {
    "phase": "Risk",
    "clock": "5–7 min",
    "who": "dr",
    "text": "A few important safety questions. Does Brian drive? And how is the money side: is the spending putting you under pressure, or has anyone taken advantage of him?",
    "dom": "tasks",
    "why": "Driving, financial harm, exploitation"
   },
   {
    "who": "pt",
    "text": "(Wife) The money really worries me. I haven’t known what to do about it."
   },
   {
    "who": "dr",
    "text": "Has anything happened that has put him or anyone else at risk, or made you feel unsafe at home?",
    "dom": "tasks",
    "why": "Behavioural risk and the carer’s safety"
   },
   {
    "who": "pt",
    "text": "(Wife) No, not like that. It’s just the way he is with people, and the money."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "7–8 min",
    "who": "dr",
    "text": "What have you been thinking this might be? And what worries you most?",
    "dom": "rto",
    "why": "ICE from the informant"
   },
   {
    "who": "pt",
    "text": "(Wife) Everyone keeps saying stress. I think something is actually wrong with him. I’m frightened of what it is, and of what’s happening to us."
   },
   {
    "phase": "Explanation",
    "clock": "8–10 min",
    "who": "dr",
    "text": "I don’t think this is a midlife crisis. A real change in personality over a year or two, at Brian’s age, with memory still good, can be caused by a condition affecting the front parts of the brain, called frontotemporal dementia. I can’t diagnose it today, and other things can look similar, but it needs a specialist assessment rather than being put down to stress.",
    "dom": "tasks",
    "why": "Names the possibility honestly without over-committing"
   },
   {
    "who": "pt",
    "text": "(Wife) Dementia? But his memory’s fine."
   },
   {
    "who": "dr",
    "text": "That’s why it is so often missed. This type usually affects behaviour, judgement and empathy first, and memory tests can be normal early on. Brian, I know you feel well in yourself. I’d still like to do some checks, because your wife has noticed real changes. Would you be willing?",
    "dom": "rto",
    "why": "Explains why normal memory fits; seeks the patient’s agreement despite poor insight"
   },
   {
    "who": "pt",
    "text": "(Brian) If it keeps her happy."
   },
   {
    "phase": "Plan",
    "clock": "10–11 min",
    "who": "dr",
    "text": "Today I’ll examine you, and we’ll do blood tests to look for treatable causes: thyroid, vitamin levels, blood count, kidney, liver, calcium and sugar. I’ll refer you to a specialist memory and young-onset dementia service, with neurology input, for detailed thinking tests and a brain scan.",
    "dom": "tasks",
    "why": "NG97 bloods; examination; specialist diagnostic referral"
   },
   {
    "who": "dr",
    "text": "Two practical things now. Until the assessment is done, please don’t drive. If a diagnosis is made, there is a legal duty to tell the DVLA. And on money: it would be sensible to talk about protecting your joint finances, and about lasting power of attorney, which Brian can only set up while he is able to make that decision himself.",
    "dom": "tasks",
    "why": "Driving and DVLA; financial protection; LPA while capacity lasts"
   },
   {
    "who": "dr",
    "text": "And how are you coping? This is not his fault and not yours: if it is this illness, the behaviour comes from the brain changes. You are entitled to a carer’s assessment, and I can put you in touch with carer support.",
    "dom": "rto",
    "why": "Carer welfare, removes blame, signposts carer support"
   },
   {
    "who": "pt",
    "text": "(Wife) Honestly, I’ve been struggling. It helps to hear someone say it isn’t just me."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If things change quickly, if he becomes unwell with headaches, confusion or weakness, or if anyone is at risk or you can’t cope, contact us the same day. Otherwise I’ll see you both once the blood results are back, and chase the referral. Can you tell me what we’ve agreed?",
    "dom": "gs",
    "why": "Safety-net for rapid change and risk; review; teach-back"
   },
   {
    "who": "pt",
    "text": "(Wife) Blood tests, a referral to the specialist, no driving for now, sort out the money and the power of attorney, and support for me."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll record our conversation and I’ll book a double appointment for you both in two weeks.",
    "dom": "gs",
    "why": "Follow-up arranged; documentation"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Consent from Brian for his wife to speak; lets her give the story uninterrupted.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Impact on the marriage and household finances; the carer’s own coping.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up poor insight, preserved memory and the “midlife crisis” label as cues rather than reassurance.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Wife’s idea (something is medically wrong), concern (what it is; money; the family), expectation (help and an explanation).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Examination including neurological and motor signs; NG97 bloods; recognises a normal memory screen does not exclude dementia.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "bvFTD versus depression, mania, psychosis, alcohol or drugs, other dementias and structural or endocrine causes.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Headache, seizures, focal signs, rapid progression; motor neurone disease overlap; risk to self, others and finances.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Possible frontotemporal dementia named honestly as needing specialist assessment, not stress.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Referral to a specialist dementia diagnostic or young-onset service with neurology; tests explained; Brian’s agreement sought.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Driving stopped pending assessment and DVLA duty explained; financial protection and LPA while capacity lasts; carer’s assessment.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day contact for rapid change or risk; review with results; referral chased; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Mental health & addiction",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Brian",
    "age": "58 years · male",
    "pmh": [
     "Not stated in the case"
    ],
    "meds": [
     "Check repeat record"
    ],
    "allergy": "None recorded",
    "recent": "1–2 years of personality change reported by wife: tactless, reckless spending, uncaring, altered eating. Memory said to be fine.",
    "reason": "Wife: “I don’t recognise my husband any more.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Consent from Brian for the collateral history; let his wife speak."
    },
    {
     "t": "1–5",
     "h": "Informant history",
     "d": "Examples of disinhibition, empathy, apathy, eating, compulsions; speech and motor symptoms; mood, mania, alcohol, drugs, medicines; headache and family history."
    },
    {
     "t": "5–8",
     "h": "Risk and ICE",
     "d": "Driving, money, exploitation, safety at home. What she thinks it is and fears."
    },
    {
     "t": "8–11",
     "h": "Explain and plan",
     "d": "Not a midlife crisis; possible FTD; normal memory fits. Examination, NG97 bloods, specialist referral. No driving pending assessment; DVLA duty; money and LPA; carer’s assessment."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "Same-day contact for rapid change or risk; review with results; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Accepts the stress or midlife-crisis explanation, or starts an antidepressant without a collateral history; is reassured by good memory; ignores driving and money; talks only to the wife as if Brian were not there.",
    "pass": "Takes a structured informant history, screens mood, alcohol and physical causes, orders NG97 bloods, refers to a specialist dementia service, and raises driving and finances.",
    "exc": "All of the above, plus: gains Brian’s consent and keeps him involved despite poor insight; explains why a normal memory test does not exclude FTD; raises LPA while capacity remains; offers a carer’s assessment and removes blame; asks about motor neurone disease features and family history."
   },
   "avoid": [
    {
     "dont": "“It sounds like stress. Try to take some time off together.”",
     "instead": "“A real change in personality at his age needs a proper medical assessment.”",
     "why": "Misattribution to stress or midlife crisis is the main cause of delayed diagnosis."
    },
    {
     "dont": "“His memory is fine, so it isn’t dementia.”",
     "instead": "“This type often affects behaviour and judgement first, and memory tests can be normal early on.”",
     "why": "NG97: do not rule out dementia on a normal cognitive score alone."
    },
    {
     "dont": "“We’ll sort out the paperwork once there’s a diagnosis.”",
     "instead": "“Lasting power of attorney is best discussed now, while Brian can make that decision himself.”",
     "why": "An LPA can only be made while the person has capacity to make it."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Household finances",
     "t": "Impulsive spending can cause serious debt. Practical steps include reviewing joint accounts, and the bank may offer support for vulnerable customers."
    },
    {
     "h": "Work and income",
     "t": "If Brian is working, his behaviour may put his job at risk. A diagnosis can open access to benefits and to employer adjustments or ill-health retirement."
    }
   ],
   "legal": [
    {
     "h": "DVLA",
     "t": "A person diagnosed with dementia must notify the DVLA. If he continues to drive when unsafe, GMC guidance (2017) sets out when a doctor may inform the DVLA."
    },
    {
     "h": "Capacity and LPA",
     "t": "Under the Mental Capacity Act 2005, capacity is decision-specific and assumed unless shown otherwise. Lasting power of attorney for property and finance, and for health and welfare, needs capacity at the time it is made."
    },
    {
     "h": "Safeguarding adults",
     "t": "If he is being financially exploited, a safeguarding concern can be raised with the local authority under the Care Act 2014."
    }
   ],
   "professional": [
    {
     "h": "Confidentiality and collateral",
     "t": "Seek Brian’s agreement to involve his wife; listening to an informant does not breach confidentiality, and sharing is guided by his consent and best interests."
    },
    {
     "h": "Diagnostic overshadowing",
     "t": "Behavioural presentations are easily labelled psychiatric or relational. Keeping an organic cause in mind is part of safe practice."
    }
   ],
   "community": [
    {
     "h": "Carer support",
     "t": "Carer’s assessment from the local authority; national and local young-onset and frontotemporal dementia support groups; admiral nurses where available."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Rapid progression, headache, seizures, vomiting or focal signs: structural lesion, urgent imaging",
     "Weakness, wasting, fasciculation, swallowing or speech problems: FTD with motor neurone disease",
     "Suicidal ideation, psychosis or mania: urgent mental health assessment",
     "Financial exploitation or risk to others: safeguarding",
     "Driving with impaired judgement"
    ],
    "psychosocial": [
     "Marriage under strain; wife as carer",
     "Money and possible debt",
     "Work and income"
    ],
    "ice": [
     "Idea (wife): something medically wrong, not a midlife crisis",
     "Concern: what it is; money; the family",
     "Expectation: an explanation and help"
    ]
   },
   "diagnosis": "“This could be frontotemporal dementia, a condition affecting the front of the brain, which needs a specialist assessment.”",
   "diagnosisLay": "“The front parts of the brain act like the brakes and the conscience: they stop us saying what we think and help us sense how others feel. If those parts are affected, a person can become tactless, impulsive and seem not to care, even though his memory is still good.”",
   "management": {
    "reflectIce": "“You felt this wasn’t really him, and I agree it needs looking into properly, not putting down to stress.”",
    "psychosocial": "Keep Brian involved and respected; support his wife as a carer; protect the household finances.",
    "sharedPlan": [
     "Examination and NG97 blood tests for reversible causes",
     "Referral to a specialist dementia diagnostic or young-onset service with neurology",
     "No driving pending assessment; DVLA duty if diagnosed",
     "Financial protection and LPA while capacity lasts",
     "Carer’s assessment and support"
    ],
    "safetyNet": [
     "Rapid change, headache, seizures or weakness: same-day contact",
     "Risk to Brian, others or finances, or carer not coping: contact the practice; review with results"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Dementia protocol",
    "s": "NG97 · subtypes, DVLA, carers",
    "href": "management/dementia.html"
   },
   {
    "ic": "🗺️",
    "t": "Memory deficit",
    "s": "Visual algorithm · reversible causes",
    "href": "algorithms/memory-deficit.html"
   },
   {
    "ic": "📋",
    "t": "Dementia",
    "s": "Case walkthrough",
    "href": "../cases/dementia.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA guide",
    "s": "Fitness to drive",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "The history comes from his wife, and the trap is the “stress” label. Marks go to recognising a behaviour-led dementia with preserved memory, screening mimics, referring, and handling driving, money and the carer.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting stress, midlife crisis or depression without a collateral history.",
     "why": "This is the commonest reason FTD is diagnosed late.",
     "fix": "Take a structured informant history and screen mimics before labelling."
    },
    {
     "dom": "tasks",
     "fail": "Being reassured by good memory or a normal cognitive screen.",
     "why": "bvFTD spares memory early; NG97 warns against ruling out dementia on a normal score.",
     "fix": "Refer on the behavioural history."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting driving and money.",
     "why": "Impaired judgement puts him and others at risk; LPA needs capacity.",
     "fix": "Advise no driving pending assessment; explain the DVLA duty; raise LPA now."
    },
    {
     "dom": "rto",
     "fail": "Talking about Brian as if he were not in the room.",
     "why": "He is the patient; ignoring him damages trust and consent.",
     "fix": "Ask his permission, address him directly, and seek his agreement to tests."
    },
    {
     "dom": "rto",
     "fail": "Not asking how his wife is coping.",
     "why": "Carer strain is high and she is entitled to support.",
     "fix": "Ask directly, remove blame, offer a carer’s assessment."
    },
    {
     "dom": "gs",
     "fail": "Starting a cognitive enhancer or antidepressant as the plan.",
     "why": "NG97: acetylcholinesterase inhibitors and memantine are not offered in FTD; the priority is diagnosis.",
     "fix": "Bloods, specialist referral, risk plan, review."
    }
   ]
  }
 },
 "frozen-shoulder": {
  "stem": {
   "name": "Denise Falk",
   "age": "54-year-old woman",
   "pmh": [
    "Type 2 diabetes (on metformin)"
   ],
   "meds": [
    "Metformin (type 2 diabetes)"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "No previous consultations about her shoulder recorded.",
   "reason": "Several months of a progressively stiff, painful right shoulder, worse at night. No injury."
  },
  "knowledge": {
   "guideline": "[1] BESS patient care pathway: frozen shoulder (Rupani, Gwilym et al., Shoulder & Elbow 2025) · [2] BESS/BOA patient care pathway: frozen shoulder (2015) · [3] UK FROST trial (Rangan et al., Lancet 2020) · [4] BNF, corticosteroids (hyperglycaemia) · [5] NICE NG226 (osteoarthritis in over 16s)",
   "summary": "Pain and progressive stiffness with loss of both active and passive movement, most marked in external rotation, in a middle-aged person with diabetes and no injury, is frozen shoulder. It is a clinical diagnosis; an X-ray helps exclude glenohumeral arthritis. Treat pain, keep moving, consider an intra-articular steroid injection early, look after glucose, and be honest that recovery takes a long time.",
   "points": [
    {
     "h": "Recognise it",
     "t": "Gradual-onset shoulder pain, often severe at night, with progressive stiffness. On examination, active and passive movement are both restricted, with passive external rotation the most reduced [1][2]. Strength is preserved within the available range."
    },
    {
     "h": "Associations",
     "t": "Commoner between about 40 and 60 and in women. Diabetes is the strongest association and is linked with more severe, longer-lasting and bilateral disease; thyroid disease is also associated [1][2]."
    },
    {
     "h": "Differential",
     "t": "Rotator cuff disease: painful arc and weakness, with passive movement better preserved than active. Glenohumeral osteoarthritis: older, crepitus, loss of passive external rotation too, so X-ray is used to tell them apart [2][5]. Also consider referred pain from the neck, and cardiac, lung-apex or subdiaphragmatic causes when the history fits."
    },
    {
     "h": "Imaging",
     "t": "Frozen shoulder is a clinical diagnosis. A plain X-ray is normal in frozen shoulder and is used to exclude arthritis or other bony causes before labelling it [1][2]."
    },
    {
     "h": "Natural history",
     "t": "Classically a painful phase, then a stiff phase, then gradual recovery. Improvement often takes 1–3 years, and some people keep a degree of stiffness [2]. Honest timelines reduce frustration."
    },
    {
     "h": "Primary-care treatment",
     "t": "Analgesia; gentle exercises within the limits of pain; physiotherapy. An intra-articular glucocorticoid injection gives short-term benefit and can be given in primary care; long-term benefit beyond about 3 months is not shown [1]. Physiotherapy after injection may add short-term benefit [1]."
    },
    {
     "h": "Injection and diabetes",
     "t": "Corticosteroids can raise blood glucose [4]. Before injecting, warn people with diabetes to monitor glucose more closely for several days and to know what to do if it rises. Record the discussion."
    },
    {
     "h": "Refer",
     "t": "Refer to secondary care if symptoms are not improving despite primary-care treatment, or if the diagnosis is uncertain [1][2]. Specialist options include hydrodilatation, manipulation under anaesthesia and arthroscopic capsular release. In UK FROST, early structured physiotherapy with steroid injection, manipulation and capsular release gave similar outcomes at 12 months; none was clearly superior in a clinically important way [3]."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, Mrs Falk, I’m Dr Patel. How can I help?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "My right shoulder’s been getting stiffer and more painful over the last few months. I can’t reach behind my back to do my bra up or get my arm into a coat, and it aches badly at night so I can’t sleep on it. I didn’t injure it, it just came on. I’m diabetic, if that matters. Will it get better?"
   },
   {
    "who": "dr",
    "text": "It does matter, thank you for mentioning it, and I’ll come back to your question about getting better. Not sleeping and struggling to dress sounds really wearing. Can I ask a few questions, examine the shoulder, and then explain?",
    "dom": "rto",
    "why": "Acknowledges impact and signposts"
   },
   {
    "who": "pt",
    "text": "Yes, of course."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Did it start with pain, stiffness, or both? And is it still getting worse, or has it levelled off?",
    "dom": "tasks",
    "why": "Onset and phase"
   },
   {
    "who": "pt",
    "text": "Pain first, then it got stiffer and stiffer. It’s still getting worse, I think."
   },
   {
    "who": "dr",
    "text": "Any pain or stiffness in the neck, or tingling down the arm? And any chest pain or breathlessness when you exert yourself?",
    "dom": "tasks",
    "why": "Referred pain from neck or heart"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Have you felt generally unwell, had fevers, lost weight without trying, or noticed any lump or swelling around the shoulder?",
    "dom": "tasks",
    "why": "Red flags for infection or tumour"
   },
   {
    "who": "pt",
    "text": "No, I’m well otherwise."
   },
   {
    "who": "dr",
    "text": "How is your diabetes at the moment? Do you check your sugars, and when was your last diabetes review?",
    "dom": "tasks",
    "why": "Diabetes control, relevant to outcome and injection"
   },
   {
    "who": "pt",
    "text": "I’m not sure it’s perfect. I haven’t been in for a while."
   },
   {
    "who": "dr",
    "text": "And how is this affecting you day to day, apart from dressing and sleeping?",
    "dom": "rto",
    "why": "Functional impact"
   },
   {
    "who": "pt",
    "text": "Everything takes longer. I’m tired all the time from not sleeping."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What do you think might be going on? Has anything been worrying you about it?",
    "dom": "rto",
    "why": "Explores ideas and concerns"
   },
   {
    "who": "pt",
    "text": "I thought maybe I’d damaged it somehow. I’m worried it won’t come back, and I just want to know how long it will last."
   },
   {
    "who": "dr",
    "text": "That’s a fair question, and I’ll give you an honest answer once I’ve examined you.",
    "dom": "rto",
    "why": "Commits to answer her concern"
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me look at both shoulders and your neck … Now lift your arm as far as you can, and turn it out. And now let me move it for you, relax … Both when you move it and when I move it, it’s stiff, and turning outwards is the most limited.",
    "dom": "tasks",
    "why": "Active and passive range; external rotation"
   },
   {
    "who": "pt",
    "text": "Yes, that’s exactly where it catches."
   },
   {
    "who": "dr",
    "text": "That pattern tells me this is a frozen shoulder. The lining of the joint becomes inflamed and then thick and tight, so the joint can’t move fully whichever way it’s moved. It isn’t damage you’ve caused, and it isn’t wear and tear. It’s commoner in people with diabetes.",
    "dom": "tasks",
    "why": "Names the diagnosis, the diabetes link, and distinguishes from wear and tear"
   },
   {
    "who": "pt",
    "text": "So will it get better?"
   },
   {
    "who": "dr",
    "text": "Yes, in most people it does, but I want to be honest that it is slow. It tends to go through a painful stage, then a stiff stage, and then gradually loosens. That often takes one to three years, and some people keep a little stiffness. Knowing that from the start helps. You’re not doing anything wrong if it’s gradual.",
    "dom": "rto",
    "why": "Honest, realistic timeline"
   },
   {
    "who": "pt",
    "text": "That’s longer than I hoped, but at least I know."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’d like an X-ray, mainly to make sure there’s no arthritis in the joint, which can look similar. For the pain, regular painkillers, and gentle stretches within what’s comfortable. I’ll refer you to physiotherapy to guide the exercises.",
    "dom": "tasks",
    "why": "X-ray to exclude OA; analgesia; physiotherapy"
   },
   {
    "who": "pt",
    "text": "Is there anything for the night pain?"
   },
   {
    "who": "dr",
    "text": "A steroid injection into the joint can really help the pain in this early painful stage, for a few months. Because you have diabetes, it can push your sugars up for several days, so you’d check them more often and we’d agree what to do if they rise. What do you think?",
    "dom": "tasks",
    "why": "Steroid injection with diabetes-specific counselling; shared decision"
   },
   {
    "who": "pt",
    "text": "I’d like to try it."
   },
   {
    "who": "dr",
    "text": "Good. I’d also like a diabetes blood test and a thyroid test, because better sugar control helps both your health and this shoulder. If things aren’t improving despite all this, I’ll refer you to the shoulder specialists, who have other options such as stretching the joint with fluid or a small operation. Most people don’t need them.",
    "dom": "tasks",
    "why": "HbA1c and thyroid; referral if not improving"
   },
   {
    "who": "pt",
    "text": "Okay, that makes sense."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Please come back sooner if the pain becomes unmanageable, you get fever, redness or swelling in the joint, especially after an injection, or any weakness or numbness in the arm. Otherwise I’ll see you after the X-ray and bloods. Can you tell me what you’ll take away from today?",
    "dom": "gs",
    "why": "Specific safety-net including post-injection infection; teach-back"
   },
   {
    "who": "pt",
    "text": "It’s a frozen shoulder, it will get better but slowly. Painkillers, stretches and physio, an injection and checking my sugars afterwards, and a diabetes check."
   },
   {
    "who": "dr",
    "text": "That’s it exactly. It will get there, and we’ll support you along the way.",
    "dom": "gs",
    "why": "Confirms understanding; supportive close"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; heard dressing, night pain, no injury and her diabetes; acknowledged her question “will it get better?”.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Sleep loss and fatigue; daily tasks taking longer; how she will cope over a long course.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the diabetes mention and returned to it; heard “will it get better?” as the key concern.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (damage), concern (it won’t recover), expectation (how long it will last).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Active and passive range of both shoulders, especially external rotation; neck; X-ray to exclude OA; HbA1c and thyroid tests.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Frozen shoulder versus rotator cuff disease, glenohumeral OA and referred pain.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened fever, weight loss, mass, neck and cardiac symptoms; post-injection infection in the safety-net.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Frozen shoulder (adhesive capsulitis), painful phase, associated with diabetes.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Analgesia, gentle exercises, physiotherapy, intra-articular steroid injection with glucose monitoring advice; honest 1–3-year timeline.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Diabetes review and optimisation; thyroid check; referral to secondary care if not improving.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Return for unmanageable pain, hot swollen joint or fever after injection, arm weakness or numbness; review after X-ray and bloods; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Denise Falk",
    "age": "54 years · female",
    "pmh": [
     "Type 2 diabetes"
    ],
    "meds": [
     "Metformin (type 2 diabetes)"
    ],
    "allergy": "NKDA",
    "recent": "No previous shoulder consultations.",
    "reason": "“My shoulder’s become stiff and painful and it’s getting worse. Will it get better?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Opening",
     "d": "Let her describe dressing, night pain and no injury; note the diabetes."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Onset and phase, neck and cardiac symptoms, systemic red flags, diabetes control, daily impact."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Thinks she damaged it; fears it won’t recover; wants a timeline."
    },
    {
     "t": "6–8",
     "h": "Examine and explain",
     "d": "Active and passive range, external rotation most limited; name frozen shoulder and the diabetes link; honest timeline."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "X-ray, analgesia, exercises, physio, injection with glucose advice, HbA1c and thyroid, refer if not improving, safety-net, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Calls it wear and tear or a rotator cuff problem without testing passive movement; promises it will settle in weeks; gives a steroid injection with no glucose advice; ignores the diabetes.",
    "pass": "Examines active and passive range, diagnoses frozen shoulder, links it to diabetes, offers analgesia, physio and an injection, and gives a realistic timeline.",
    "exc": "All of the above, plus: explains the phases in plain words; uses an X-ray to exclude arthritis; counsels glucose monitoring after injection; checks HbA1c and thyroid; sets a clear referral trigger; addresses her sleep and her fear it won’t recover; teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s just wear and tear, it’ll settle in a few weeks.”",
     "instead": "“It’s a frozen shoulder. It does get better, but slowly, often over one to three years.”",
     "why": "Wrong diagnosis and false timelines lead to frustration and loss of trust."
    },
    {
     "dont": "“I’ll give you a steroid injection, that should sort it.”",
     "instead": "“An injection can help the pain for a few months; because of your diabetes, check your sugars more often for several days afterwards.”",
     "why": "Steroids can raise glucose; benefit is short-term."
    },
    {
     "dont": "“Rest it until the pain goes.”",
     "instead": "“Keep it moving gently within comfort, and physio will guide you.”",
     "why": "Guidance supports keeping movement, not prolonged rest."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Daily living",
     "t": "Dressing, washing hair, reaching and sleeping are all affected. Ask about work, caring roles and driving; practical aids and occupational therapy advice can help."
    },
    {
     "h": "Sleep and mood",
     "t": "Months of night pain cause exhaustion and low mood; ask, and include this in the plan."
    }
   ],
   "legal": [
    {
     "h": "Fit notes",
     "t": "If her work involves overhead or heavy use of the arm, a fit note with adjustments (altered duties, reduced lifting) may help her stay in work."
    },
    {
     "h": "Driving",
     "t": "She should only drive if she can control the vehicle safely, including steering and emergency manoeuvres. If restricted movement stops her driving safely she should not drive; check current DVLA guidance on musculoskeletal disability if the restriction is lasting."
    }
   ],
   "professional": [
    {
     "h": "Consent for injection",
     "t": "GMC Decision making and consent (2020): discuss benefits (short-term pain relief), risks (infection, flare, skin changes, glucose rise in diabetes) and alternatives, and record them."
    },
    {
     "h": "Honest prognosis",
     "t": "Realistic timelines are part of good care; over-promising undermines trust and adherence."
    }
   ],
   "community": [
    {
     "h": "Physiotherapy access",
     "t": "Many areas offer self-referral to MSK physiotherapy. Diabetes structured education can support better glucose control."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Fever, hot swollen joint, especially after injection (septic arthritis)",
     "Unexplained weight loss, history of cancer, mass or deformity",
     "Trauma with sudden loss of movement (dislocation or fracture)",
     "Weakness or numbness in the arm, neck symptoms",
     "Pain on exertion with breathlessness (referred cardiac pain)"
    ],
    "psychosocial": [
     "Night pain and exhaustion",
     "Dressing and daily tasks",
     "Frustration with slow recovery"
    ],
    "ice": [
     "Idea: she has damaged the shoulder",
     "Concern: that it won’t recover",
     "Expectation: a diagnosis and how long it will last"
    ]
   },
   "diagnosis": "“This is a frozen shoulder. The lining of the joint has become inflamed and tight, so it’s stiff whether you move it or I move it, and turning the arm outwards is the most affected.”",
   "diagnosisLay": "“Think of the joint lining as a stretchy bag around the ball of the shoulder. In a frozen shoulder the bag gets inflamed and then shrinks and stiffens, like a jumper washed too hot. Over time it slowly stretches out again.”",
   "management": {
    "reflectIce": "“You wondered if you’d damaged it and you’re worried it won’t come back. You haven’t caused this, and it does recover, but slowly, and I’d rather be honest about that now.”",
    "psychosocial": "Address sleep and daily tasks; give an honest timeline; link diabetes care to her shoulder so it feels relevant.",
    "sharedPlan": [
     "X-ray to exclude glenohumeral arthritis",
     "Analgesia and gentle exercises within comfort; physiotherapy referral",
     "Intra-articular steroid injection in the painful phase, with glucose monitoring advice",
     "HbA1c, thyroid tests and diabetes review",
     "Refer to secondary care if not improving (hydrodilatation, manipulation, capsular release)"
    ],
    "safetyNet": [
     "Unmanageable pain",
     "Fever, redness or swelling of the joint, especially after injection",
     "New weakness or numbness in the arm",
     "Review after X-ray and bloods"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Shoulder pain pathway",
    "s": "Visual algorithm · active versus passive",
    "href": "algorithms/shoulder-pain.html"
   },
   {
    "ic": "📋",
    "t": "Shoulder pain",
    "s": "Case walkthrough · BESS pathways",
    "href": "../cases/shoulder-pain.html"
   },
   {
    "ic": "💠",
    "t": "Musculoskeletal protocols",
    "s": "Management by condition",
    "href": "management.html?cat=musculoskeletal-and-rheumatology"
   }
  ],
  "pitfalls": {
   "intro": "This station is lost by mislabelling it, by skipping the passive examination, and by promising a quick fix. Each pattern below is common and fixable.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Testing only active movement and calling it a rotator cuff problem.",
     "why": "Loss of passive movement, especially external rotation, is what defines frozen shoulder.",
     "fix": "Always compare active with passive range and name what you find."
    },
    {
     "dom": "tasks",
     "fail": "Ignoring the diabetes she volunteered.",
     "why": "Diabetes is the strongest association and matters for injection safety and outcome.",
     "fix": "Ask about control, check HbA1c, and link it to the plan."
    },
    {
     "dom": "tasks",
     "fail": "Steroid injection without glucose advice.",
     "why": "Corticosteroids can raise blood glucose (BNF).",
     "fix": "Advise closer glucose monitoring for several days and what to do if it rises."
    },
    {
     "dom": "tasks",
     "fail": "No X-ray and no referral trigger.",
     "why": "BESS pathways use X-ray to exclude arthritis and refer when not improving.",
     "fix": "Arrange an X-ray; state when you would refer to secondary care."
    },
    {
     "dom": "rto",
     "fail": "Promising it will settle in weeks.",
     "why": "Recovery often takes 1–3 years; false hope damages trust.",
     "fix": "Give the honest timeline and frame it as expected, not failure."
    },
    {
     "dom": "gs",
     "fail": "Vague “come back if it’s no better”.",
     "why": "Non-specific safety-netting is common failing feedback.",
     "fix": "Named red flags, especially a hot swollen joint after injection, and a set review point."
    }
   ]
  }
 },
 "hyperhidrosis-primary": {
  "stem": {
   "name": "Theo Marsh",
   "age": "25-year-old man",
   "pmh": [
    "No significant history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "Excessive sweating of the palms, soles and armpits since his teens: symmetrical, even when cool and calm, not during sleep. Soaks paperwork and shirts; dreads handshakes. Affecting work and confidence.",
   "reason": "“Is there anything that helps?”"
  },
  "knowledge": {
   "guideline": "[1] BNF aluminium chloride hexahydrate monograph · [2] BNF botulinum toxin type A monograph (severe axillary hyperhidrosis, specialist use) · [3] BNF propantheline bromide and other antimuscarinic monographs · [4] NICE HTG339 (formerly IPG487): endoscopic thoracic sympathectomy for primary hyperhidrosis of the upper limb (2014) · [5] International Hyperhidrosis Society (Hyperhidrosis Disease Severity Scale) (international)",
   "summary": "Symmetrical sweating of the palms, soles and armpits since adolescence, even when cool, but not during sleep, is primary focal hyperhidrosis. It is common, harmless and treatable, but it can hurt confidence, work and relationships. Check for the features of secondary sweating, score severity, start aluminium chloride with the right technique, and step up to iontophoresis, antimuscarinics or botulinum toxin, with dermatology referral for severe or resistant disease.",
   "points": [
    {
     "h": "Recognise primary focal hyperhidrosis",
     "t": "Focal, visible, excessive sweating for at least six months, typically bilateral and symmetrical, affecting palms, soles, armpits or face. It starts in childhood or adolescence, often runs in families, and stops during sleep. It is not a hygiene problem."
    },
    {
     "h": "Secondary sweating: red flags",
     "t": "Generalised or one-sided sweating, night sweats, onset in later adulthood, weight loss, fever, lymphadenopathy, palpitations or tremor. Consider hyperthyroidism, infection including TB, lymphoma and other cancers, diabetes and hypoglycaemia, menopause, phaeochromocytoma, and drugs such as antidepressants. These need a targeted work-up; primary focal disease does not need routine tests."
    },
    {
     "h": "Score severity",
     "t": "The Hyperhidrosis Disease Severity Scale grades impact from 1 (never noticeable) to 4 (intolerable, always interferes) [5]. A score of 3 or 4 means severe disease and helps decide on escalation and referral."
    },
    {
     "h": "First line: aluminium chloride",
     "t": "Aluminium chloride hexahydrate 20% applied to completely dry skin at night and washed off in the morning, initially nightly, then less often as it works [1]. Irritation is the common problem: apply only to dry skin, reduce frequency and avoid shaving just before use."
    },
    {
     "h": "Next steps",
     "t": "Tap-water iontophoresis for palms and soles (usually via dermatology or physiotherapy, or a home device). Oral antimuscarinics such as propantheline for widespread or multi-site sweating; dry mouth, blurred vision and constipation limit use (BNF [3]; dose per BNF). Botulinum toxin A for severe axillary disease, given by a specialist [2]."
    },
    {
     "h": "Referral and surgery",
     "t": "Refer to dermatology if topical treatment fails or disease is severe. Endoscopic thoracic sympathectomy is for severe upper-limb disease after other treatments. NICE HTG339 supports it, but patients must understand that compensatory sweating elsewhere is usual and can be severe [4]."
    },
    {
     "h": "Impact",
     "t": "Anxiety, social avoidance and low mood are common. Validate the burden, ask what matters most to him, and screen for social anxiety, which may need its own help."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Marsh, I’m Dr Singh. What can I help with today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "This is embarrassing, doctor, but my hands and armpits just drip with sweat, even when I’m cool and calm. My palms are so wet I ruin paperwork and dread shaking hands, and my shirts are soaked. It’s been like this since school. It’s really knocking my confidence at work. Is there anything that helps?"
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. Lots of people find this hard to bring up, and it’s a real medical problem. I’ll ask some questions, have a quick look, and then we’ll go through the treatments. Is that all right?",
    "dom": "rto",
    "why": "Normalises and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Yes, thanks."
   },
   {
    "phase": "Focused history",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Where exactly do you sweat, and is it the same on both sides?",
    "dom": "tasks",
    "why": "Distribution and symmetry"
   },
   {
    "who": "pt",
    "text": "Palms, feet and armpits. Both sides equally."
   },
   {
    "who": "dr",
    "text": "Does it happen at night? Do you ever wake up drenched?",
    "dom": "tasks",
    "why": "Night sweats: key discriminator"
   },
   {
    "who": "pt",
    "text": "No. It’s fine when I’m asleep. It’s the daytime."
   },
   {
    "who": "dr",
    "text": "Any weight loss, fevers, lumps in your neck or armpits, racing heart, shakiness, or feeling hot all the time?",
    "dom": "tasks",
    "why": "Screens secondary causes"
   },
   {
    "who": "pt",
    "text": "No, none of that."
   },
   {
    "who": "dr",
    "text": "Do you take any medicines or supplements, and does anyone in your family have the same thing?",
    "dom": "tasks",
    "why": "Drugs and family history"
   },
   {
    "who": "pt",
    "text": "No regular medicines. I’m not sure about the family."
   },
   {
    "who": "dr",
    "text": "What have you tried so far?",
    "dom": "tasks",
    "why": "Previous treatment"
   },
   {
    "who": "pt",
    "text": "Just ordinary antiperspirants."
   },
   {
    "phase": "Impact and ICE",
    "clock": "5–7 min",
    "who": "dr",
    "text": "You said it’s knocking your confidence. How does it affect your day?",
    "dom": "tasks",
    "why": "Explores impact"
   },
   {
    "who": "pt",
    "text": "I avoid shaking hands, I worry about my shirts all day, and I don’t go out as much as I used to."
   },
   {
    "who": "dr",
    "text": "On a scale where 1 is never noticeable and 4 is intolerable and always interferes, where would you put it?",
    "dom": "tasks",
    "why": "HDSS severity score"
   },
   {
    "who": "pt",
    "text": "Three, I’d say."
   },
   {
    "who": "dr",
    "text": "That’s a lot to carry. What did you think was going on?",
    "dom": "rto",
    "why": "Elicits ideas"
   },
   {
    "who": "pt",
    "text": "I just thought I’m a sweaty person and nothing could be done."
   },
   {
    "who": "dr",
    "text": "Does it make you feel anxious or low?",
    "dom": "tasks",
    "why": "Screens mood and social anxiety"
   },
   {
    "who": "pt",
    "text": "Anxious sometimes. Not depressed, just fed up."
   },
   {
    "who": "dr",
    "text": "If treatment worked, what would be different for you?",
    "dom": "rto",
    "why": "Explores what a good outcome means to him"
   },
   {
    "who": "pt",
    "text": "Shaking hands without thinking about it. Not ruining paperwork."
   },
   {
    "phase": "Examination and explanation",
    "clock": "7–8 min",
    "who": "dr",
    "text": "Can I look at your hands and feel your neck and armpits for glands, and check your pulse?",
    "dom": "tasks",
    "why": "Targeted examination"
   },
   {
    "who": "pt",
    "text": "Sure."
   },
   {
    "who": "dr",
    "text": "Your palms are visibly wet, and there are no enlarged glands, your thyroid feels normal and your pulse is steady. This is called primary hyperhidrosis. The sweat glands are overactive in certain areas. It’s common, it often starts in the teens, it isn’t harmful, and it isn’t anything to do with hygiene. It’s treatable.",
    "dom": "tasks",
    "why": "Names the condition and reassures"
   },
   {
    "who": "pt",
    "text": "I wish I’d asked years ago."
   },
   {
    "phase": "Stepwise management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The first step is a strong antiperspirant, aluminium chloride. The trick is to put it on completely dry skin at bedtime and wash it off in the morning. Use it every night at first, then less often once it’s working. It can sting, so don’t put it on straight after shaving.",
    "dom": "tasks",
    "why": "First-line treatment with technique"
   },
   {
    "who": "pt",
    "text": "Does it work on hands?"
   },
   {
    "who": "dr",
    "text": "It works best on armpits, and can help hands and feet. If it isn’t enough for your hands, a treatment called iontophoresis, where you put your hands in water with a mild electric current, works well for palms and soles. I can refer you to dermatology for that.",
    "dom": "tasks",
    "why": "Explains site-specific options"
   },
   {
    "who": "pt",
    "text": "And my armpits if the cream doesn’t work?"
   },
   {
    "who": "dr",
    "text": "Specialists can give botulinum toxin injections, which work well for armpits and last several months. There are also tablets that reduce sweating, but they can cause a dry mouth and blurred vision, so we’d weigh that up. An operation exists for severe hand sweating, but it often causes heavy sweating elsewhere, so it’s very much a last resort.",
    "dom": "tasks",
    "why": "Escalation options with honest risks"
   },
   {
    "who": "pt",
    "text": "Okay. I’ll start with the cream."
   },
   {
    "who": "dr",
    "text": "Good. In the meantime, loose cotton or moisture-wicking shirts, undershirts or sweat pads, and carrying a small towel can help at work.",
    "dom": "tasks",
    "why": "Practical advice"
   },
   {
    "phase": "Safety net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Come back if you start sweating at night, all over, or on one side only, or notice weight loss, fevers or lumps, because that would need checking differently. Otherwise, let’s review in about six weeks, and I’ll refer you if the cream isn’t enough. Can you tell me the plan?",
    "dom": "gs",
    "why": "Specific red flags, review and teach-back"
   },
   {
    "who": "pt",
    "text": "Cream on dry skin at night, wash off in the morning. Back in six weeks, or sooner if I get night sweats, weight loss or lumps. Then maybe iontophoresis or injections."
   },
   {
    "who": "dr",
    "text": "Spot on. And if the anxiety keeps holding you back, tell me. There’s help for that too.",
    "dom": "gs",
    "why": "Leaves the door open for psychological support"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; normalised his embarrassment and let him describe the sweating and its impact.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored work, meetings, handshakes, social life and confidence.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the pattern (symmetrical, teenage onset, spares sleep) and the belief that nothing could be done.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: just a sweaty person. Concern: work, handshakes, confidence. Expectation: something that helps.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Looked at hands; checked lymph nodes, thyroid and pulse; no routine tests for primary focal disease; HDSS scored.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Primary focal hyperhidrosis versus secondary causes: hyperthyroidism, infection, lymphoma, diabetes, drugs, phaeochromocytoma.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about night sweats, generalised or one-sided sweating, weight loss, fevers, lumps and palpitations.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Primary focal hyperhidrosis (palmar, plantar and axillary), severe (HDSS 3).",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Aluminium chloride with correct technique; iontophoresis for palms and soles; botulinum toxin for axillae; antimuscarinics; sympathectomy last resort; practical advice.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Screened for social anxiety and low mood; offered further help.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Return for secondary red flags; review at about six weeks; dermatology referral if first-line fails.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Theo Marsh",
    "age": "25 years · male",
    "pmh": [
     "Nil significant"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "None recorded",
    "recent": "Palm, sole and armpit sweating since his teens; symmetrical; spares sleep; affecting work and confidence.",
    "reason": "“Is there anything that helps?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and normalise",
     "d": "Acknowledge the embarrassment; let him describe it."
    },
    {
     "t": "1–5",
     "h": "Primary or secondary?",
     "d": "Sites, symmetry, night sweats, weight loss, lumps, thyroid symptoms, drugs, family history."
    },
    {
     "t": "5–7",
     "h": "Impact and ICE",
     "d": "Work and social impact; HDSS; belief that nothing helps; what success looks like."
    },
    {
     "t": "7–8",
     "h": "Examine and name it",
     "d": "Hands, nodes, thyroid, pulse; primary hyperhidrosis explained."
    },
    {
     "t": "8–11",
     "h": "Stepwise plan",
     "d": "Aluminium chloride technique; iontophoresis; botulinum toxin; antimuscarinics; surgery last."
    },
    {
     "t": "11–12",
     "h": "Safety net",
     "d": "Secondary red flags; review at six weeks; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Treats it as trivial or a hygiene issue; tells him to buy a stronger deodorant; no screen for secondary causes; no escalation plan.",
    "pass": "Recognises primary focal hyperhidrosis, excludes red flags, starts aluminium chloride and outlines escalation.",
    "exc": "All of that, plus: explains the application technique; scores severity; tailors options by site; honest about sympathectomy; practical work tips; screens social anxiety; clear review and teach-back."
   },
   "avoid": [
    {
     "dont": "“Everyone sweats. Just use a stronger deodorant.”",
     "instead": "“This is a recognised medical condition, and there are treatments that work.”",
     "why": "Dismissal adds to the shame and ignores a treatable problem."
    },
    {
     "dont": "“Put it on in the morning.”",
     "instead": "“Put it on completely dry skin at bedtime and wash it off in the morning.”",
     "why": "Wrong technique causes irritation and treatment failure (BNF)."
    },
    {
     "dont": "“You could have an operation to cure it.”",
     "instead": "“There’s an operation for severe hand sweating, but most people get heavy sweating elsewhere afterwards.”",
     "why": "Compensatory sweating is usual and can be severe (NICE HTG339)."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work",
     "t": "Wet paperwork and handshakes affect professional confidence. Practical tips (towel, absorbent fabrics, spare shirt) help while treatment takes effect."
    },
    {
     "h": "Relationships and confidence",
     "t": "Social avoidance is common. Ask directly and offer help for social anxiety if it persists."
    }
   ],
   "legal": [
    {
     "h": "Work adjustments",
     "t": "Most people manage without formal adjustments. If severe disease has a substantial, long-term effect on daily activities, the Equality Act 2010 may apply; this is decided case by case."
    }
   ],
   "professional": [
    {
     "h": "Taking ‘minor’ problems seriously",
     "t": "Embarrassing symptoms are often presented late. A respectful, non-judgemental approach builds trust (GMC Good medical practice)."
    },
    {
     "h": "Prescribing",
     "t": "Check the BNF and local formulary for antimuscarinic doses and cautions, and for local funding rules for botulinum toxin and iontophoresis."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Hyperhidrosis UK offers patient information and peer support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Night sweats",
     "Generalised or one-sided sweating",
     "Weight loss, fever or lymphadenopathy",
     "Palpitations, tremor or heat intolerance; onset in later adulthood"
    ],
    "psychosocial": [
     "Embarrassment and confidence",
     "Work: paperwork and handshakes",
     "Social avoidance and anxiety"
    ],
    "ice": [
     "Idea: just a sweaty person",
     "Concern: work, handshakes, confidence",
     "Expectation: something that helps"
    ]
   },
   "diagnosis": "Primary focal hyperhidrosis (palmar, plantar and axillary), severe (HDSS 3): symmetrical, onset in adolescence, sleep-sparing, no features of a secondary cause.",
   "diagnosisLay": "“This is primary hyperhidrosis. The sweat glands in your hands, feet and armpits are overactive. It’s common, it isn’t harmful and it isn’t about hygiene, and there are treatments that work.”",
   "management": {
    "reflectIce": "“You thought you were just a sweaty person and nothing could be done. It’s a recognised condition and we have a clear step-by-step plan.”",
    "psychosocial": "Validate the impact; practical work tips; screen for and support social anxiety.",
    "sharedPlan": [
     "Aluminium chloride hexahydrate 20% to dry skin at night, washed off in the morning (BNF)",
     "Dermatology referral for iontophoresis (palms and soles) or botulinum toxin (axillae) if first-line fails",
     "Antimuscarinics such as propantheline considered, dose per BNF",
     "Sympathectomy only for severe resistant upper-limb disease after counselling (NICE HTG339)"
    ],
    "safetyNet": [
     "Return for night sweats, generalised or one-sided sweating, weight loss, fever or lumps",
     "Review at about six weeks",
     "Return if anxiety or mood worsens"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Hyperhidrosis",
    "s": "Protocol · stepwise treatment ladder",
    "href": "management/hyperhidrosis.html"
   },
   {
    "ic": "🗺️",
    "t": "Night sweats",
    "s": "Visual algorithm · secondary causes",
    "href": "algorithms/night-sweats.html"
   },
   {
    "ic": "💠",
    "t": "Hyperthyroidism",
    "s": "Protocol · a key mimic",
    "href": "management/hyperthyroidism.html"
   },
   {
    "ic": "💠",
    "t": "Anxiety",
    "s": "Protocol · social anxiety and avoidance",
    "href": "management/anxiety.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by treating the problem as trivial. The marks are for recognising a real condition, ruling out the serious look-alikes, and giving a plan that works.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Not asking about night sweats.",
     "why": "Sweating that continues in sleep points to a secondary cause.",
     "fix": "Ask directly and document it."
    },
    {
     "dom": "tasks",
     "fail": "Ordering a battery of tests for classic primary disease.",
     "why": "Primary focal hyperhidrosis needs no routine tests.",
     "fix": "Test only when red flags are present."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing aluminium chloride without explaining technique.",
     "why": "Morning use on damp skin causes irritation and failure.",
     "fix": "Dry skin, bedtime, wash off in the morning."
    },
    {
     "dom": "tasks",
     "fail": "Offering surgery as a quick cure.",
     "why": "Compensatory sweating is usual and can be severe.",
     "fix": "Present it as a last resort after full counselling."
    },
    {
     "dom": "rto",
     "fail": "Treating it as a hygiene issue.",
     "why": "It deepens the shame he already feels.",
     "fix": "Name it as a medical condition and acknowledge the impact."
    },
    {
     "dom": "gs",
     "fail": "No review plan.",
     "why": "Many people need to step up treatment.",
     "fix": "Review at about six weeks with clear escalation."
    }
   ]
  }
 },
 "infantile-colic": {
  "stem": {
   "name": "Noah Lowther",
   "age": "6-week-old boy",
   "pmh": [
    "No problems recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "No recent consultations recorded.",
   "reason": "Booked by his mother, Hannah Lowther: “Crying for hours every evening. Nothing settles him.”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG143 Fever in under 5s: assessment and initial management (2019) · [2] NICE NG254 Suspected sepsis in under 16s (2025) · [3] NICE NG1 Gastro-oesophageal reflux disease in children and young people (2015) · [4] NICE CG116 Food allergy in under 19s: assessment and diagnosis (2011) · [5] NICE CG192 Antenatal and postnatal mental health · [6] ICON: Babies cry, you can cope (UK programme) · [7] DfE Working Together to Safeguard Children (2023)",
   "summary": "Long bouts of evening crying with legs drawn up in a 6-week-old who is feeding, gaining weight and otherwise well is infantile colic, a diagnosis made only after a full examination excludes other causes. The real work is reassurance and supporting an exhausted parent, including the never-shake message.",
   "points": [
    {
     "h": "Recognise it",
     "t": "Prolonged, hard-to-soothe crying in a well, thriving baby, usually starting in the first weeks, often worse in the evenings, and settling by about 3–4 months. Wessel’s ‘rule of three’ (over 3 hours a day, 3 days a week, for 3 weeks) is a research definition; the Rome IV criteria (international) do not require a set number of hours. It is a diagnosis of exclusion."
    },
    {
     "h": "Exclude other causes",
     "t": "Ask about feeding, weight, vomiting (bilious = obstruction), stools and blood, fever, breathing, rash and drowsiness. Examine fully undressed: temperature, weight on the chart, fontanelle, abdomen, hernial orifices and testes, fingers, toes and penis for a hair tourniquet, eyes, skin for bruising. NICE NG143 [1]: a temperature of 38 °C or more under 3 months is a red feature needing same-day paediatric assessment; use NICE NG254 [2] if sepsis is possible."
    },
    {
     "h": "Reflux and allergy",
     "t": "Crying alone is not a reason to treat reflux: NICE NG1 [3] advises against acid-suppressing drugs for regurgitation as an isolated symptom in an otherwise healthy infant, and reserves a trial for regurgitation with other features. Consider cow’s milk allergy only with other features such as eczema, vomiting, diarrhoea, blood in stool or faltering growth, assessed per NICE CG116 [4]."
    },
    {
     "h": "Reassure and soothe",
     "t": "Explain that colic is common, not harmful and not caused by anything the parent has done. Holding, gentle movement, white noise, a calm room and winding may help. Evidence for over-the-counter remedies and formula changes is limited; avoid routine formula changes without a specific reason."
    },
    {
     "h": "Support the parent",
     "t": "Persistent crying is exhausting and is linked with parental low mood. NICE CG192 [5]: consider asking about depression and anxiety. Involve the health visitor and family support."
    },
    {
     "h": "Never shake",
     "t": "Crying is a recognised trigger for abusive head trauma. Give the ICON [6] message: crying is normal, comforting helps, it is okay to put the baby down safely and walk away for a few minutes, and never shake a baby. Any unexplained bruise in a non-mobile baby needs safeguarding action [7]."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Khan. You must be Noah’s mum — Hannah, is it? And this must be Noah. What’s been happening?",
    "dom": "rto",
    "why": "Open start, greets parent and baby"
   },
   {
    "who": "pt",
    "text": "I’m at my wits’ end, doctor. Noah screams inconsolably for hours, mostly in the evenings, going red and pulling his legs up, and nothing settles him. He’s six weeks old. He feeds and is gaining weight, but I’m exhausted and terrified there’s something seriously wrong with him."
   },
   {
    "who": "dr",
    "text": "You’ve done the right thing bringing him. I’ll ask some questions, examine him properly, and then we’ll talk about him and about you.",
    "dom": "gs",
    "why": "Agenda that includes the parent"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "How long has this been going on, and how much of the day is he crying?",
    "dom": "tasks",
    "why": "Pattern and duration"
   },
   {
    "who": "pt",
    "text": "A few weeks. Several hours most days, worst in the evening."
   },
   {
    "who": "dr",
    "text": "Between those spells, is he his usual self, alert and feeding well?",
    "dom": "tasks",
    "why": "Well between episodes"
   },
   {
    "who": "pt",
    "text": "Yes, he feeds well and he’s gaining weight."
   },
   {
    "who": "dr",
    "text": "Has he had a temperature, been sick, especially anything green, or had any blood in his nappy?",
    "dom": "tasks",
    "why": "Red flags: fever, bilious vomiting, blood in stool"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. Normal nappies."
   },
   {
    "who": "dr",
    "text": "Has he been floppy or unusually sleepy, had any breathing problems, or a rash or dry skin patches?",
    "dom": "tasks",
    "why": "Red flags: lethargy, respiratory, atopy (CMPA)"
   },
   {
    "who": "pt",
    "text": "No. His skin’s fine."
   },
   {
    "who": "dr",
    "text": "Does the cry ever sound different, high-pitched or weak?",
    "dom": "tasks",
    "why": "Screens neurological or serious illness"
   },
   {
    "who": "pt",
    "text": "No, just loud."
   },
   {
    "phase": "The parent",
    "clock": "5–6 min",
    "who": "dr",
    "text": "Now, how are you doing? This sounds really hard.",
    "dom": "rto",
    "why": "Turns to the parent’s wellbeing"
   },
   {
    "who": "pt",
    "text": "(tearful) I’m shattered. I feel like I’m failing him."
   },
   {
    "who": "dr",
    "text": "You’re not failing him. You’re looking after him and you brought him in. Over the last month, have you often felt down or hopeless, or lost interest in things? And have you felt nervous or unable to stop worrying?",
    "dom": "tasks",
    "why": "Depression and anxiety identification questions (NICE CG192)"
   },
   {
    "who": "pt",
    "text": "Worried, yes, all the time. Down sometimes, when he won’t stop."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. When he’s screaming and you’re exhausted, have you ever felt so overwhelmed that you worried you might hurt him?",
    "dom": "tasks",
    "why": "Asks directly and safely about risk"
   },
   {
    "who": "pt",
    "text": "No, never. I just cry with him."
   },
   {
    "who": "dr",
    "text": "Who’s around to help you at the moment?",
    "dom": "rto",
    "why": "Support network"
   },
   {
    "who": "pt",
    "text": "Not as much as I’d like."
   },
   {
    "phase": "Examination",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me examine Noah fully undressed. (Weighs and plots him, checks temperature, fontanelle, heart and chest, abdomen, groins and testes, hips, eyes, skin, and fingers, toes and penis for a hair tourniquet.) Temperature is normal, he’s following his weight line, his tummy is soft, no hernia, his skin is clear and there’s nothing wrapped round his fingers or toes.",
    "dom": "tasks",
    "why": "Full examination to exclude other causes"
   },
   {
    "who": "dr",
    "text": "Noah is a healthy, thriving baby. What you’re describing is colic. It’s very common, it isn’t harmful, and it isn’t caused by anything you’re doing. It usually eases by around three to four months.",
    "dom": "tasks",
    "why": "Names colic after exclusion; reassures"
   },
   {
    "who": "pt",
    "text": "Should I change his milk or get some drops?"
   },
   {
    "who": "dr",
    "text": "There isn’t good evidence that drops or changing milk help colic, and nothing today suggests a milk allergy. Holding him close, gentle rocking, a car or pram ride, white noise and a dim, quiet room can all help.",
    "dom": "tasks",
    "why": "Practical soothing; avoids routine remedies or formula change"
   },
   {
    "phase": "Support and safety",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The most important thing I’ll say today: if you feel yourself getting overwhelmed, it is completely okay to put him down safely on his back in his cot, close the door, and take a few minutes to calm down. Crying won’t hurt him. And never shake a baby, even gently, because it can cause serious brain injury.",
    "dom": "tasks",
    "why": "ICON and never-shake advice"
   },
   {
    "who": "pt",
    "text": "I didn’t know it was okay to walk away."
   },
   {
    "who": "dr",
    "text": "It is. I’d also like the health visitor to visit you this week, and I’ll give you the ICON information. Because you’ve been feeling low and worried, I’d like to see you again to talk about how you are.",
    "dom": "tasks",
    "why": "Health visitor, written information, mood follow-up"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Bring him back urgently or call 111 if he has a temperature of 38 or more, stops feeding, is sick green, has blood in his nappy, becomes floppy or very sleepy, or his cry changes. What will you do tonight if the crying gets too much?",
    "dom": "gs",
    "why": "Specific safety-net and teach-back of the coping plan"
   },
   {
    "who": "pt",
    "text": "Put him in his cot safely, step out for a few minutes, then go back. And ring if he gets a temperature or goes floppy."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll see you in two weeks, sooner if you need.",
    "dom": "gs",
    "why": "Defined follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; greeted parent and baby; let her describe the crying and her fear.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Her exhaustion, support at home and sense of failing explored.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “exhausted and terrified” and turned the consultation to her wellbeing.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (something wrong), concern (a serious illness and her coping), expectation (reassurance and help).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Full undressed examination: temperature, weight plotted, fontanelle, abdomen, hernias, testes, hair tourniquet, skin.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Colic versus infection, obstruction, hernia or torsion, hair tourniquet, reflux, cow’s milk allergy and injury.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about fever, bilious vomiting, blood in stool, lethargy and cry; NICE NG143 fever threshold under 3 months.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named infantile colic only after examination.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Reassurance; practical soothing; no routine drops or formula change (NICE NG1, NICE CG116 if allergy features).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Parental mood and anxiety asked (NICE CG192); health visitor; ICON never-shake advice.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Red-flag safety-net; teach-back of the coping plan; review in 2 weeks.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Noah Lowther",
    "age": "6 weeks · male",
    "pmh": [
     "No problems recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "No recent consultations.",
    "reason": "Mother: “Crying for hours every evening. Nothing settles him.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Greet both. Let her tell the story and name her fear."
    },
    {
     "t": "1–5",
     "h": "Red flags",
     "d": "Pattern, feeding, weight, fever, vomiting, stools, lethargy, rash, cry."
    },
    {
     "t": "5–6",
     "h": "The parent",
     "d": "Mood and anxiety questions; ask about overwhelm and support."
    },
    {
     "t": "6–8",
     "h": "Examine and explain",
     "d": "Full undressed examination including hair tourniquet. Name colic and reassure."
    },
    {
     "t": "8–12",
     "h": "Support and close",
     "d": "Soothing; no routine remedies; ICON and never shake; health visitor; red-flag safety-net; teach-back; review."
    }
   ],
   "wordPics": {
    "fail": "Calls it colic without examining; prescribes drops or changes formula; never asks how the mother is; no never-shake advice.",
    "pass": "Screens red flags, examines fully, names colic and reassures, gives soothing advice and safety-nets.",
    "exc": "All of the above, plus: asks about her mood and anxiety and about feeling overwhelmed; gives the never-shake and walk-away message clearly; involves the health visitor; teaches back a coping plan; books her own follow-up."
   },
   "avoid": [
    {
     "dont": "“All babies cry, he’ll grow out of it.”",
     "instead": "“I’ve examined him fully and he’s healthy. This is colic, it’s common and it isn’t your fault.”",
     "why": "Reassurance lands only after proper examination, and dismissal leaves her alone with the strain."
    },
    {
     "dont": "“Let’s try a different formula.”",
     "instead": "“Changing milk doesn’t usually help colic, and nothing suggests an allergy.”",
     "why": "Formula changes without allergy features add cost and worry without evidence (NICE CG116)."
    },
    {
     "dont": "“Just try to stay calm.”",
     "instead": "“If it gets too much, put him down safely in his cot and take a few minutes. Never shake him.”",
     "why": "Explicit permission to walk away and the never-shake message protect the baby (ICON)."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Sleep deprivation",
     "t": "Evening crying and night feeds leave parents exhausted; practical help and rest breaks matter."
    },
    {
     "h": "Isolation",
     "t": "Ask who can help. Family, friends and local parent groups can take turns."
    }
   ],
   "legal": [
    {
     "h": "Safeguarding",
     "t": "Crying is a trigger for abusive head trauma. Any bruise or unexplained injury in a non-mobile baby needs referral under local safeguarding procedures (Working Together to Safeguard Children 2023)."
    },
    {
     "h": "Parental responsibility",
     "t": "Confirm that the adult attending has parental responsibility or consent to bring the baby."
    }
   ],
   "professional": [
    {
     "h": "Think family",
     "t": "The consultation is about the baby and the parent. Record the parent’s mood and any support arranged (NICE CG192)."
    },
    {
     "h": "Avoid medicalising",
     "t": "Avoid prescribing for normal crying; crying without regurgitation and other features is not an indication for acid suppression (NICE NG1)."
    }
   ],
   "community": [
    {
     "h": "Health visitor",
     "t": "Can visit, weigh, support feeding and screen mood."
    },
    {
     "h": "ICON",
     "t": "ICON: Babies cry, you can cope (iconcope.org) gives parents simple coping messages."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Temperature 38 °C or more under 3 months (NICE NG143)",
     "Bilious vomiting, blood in stool or a distended abdomen",
     "Poor feeding, faltering weight, floppiness or drowsiness",
     "High-pitched or weak cry, bulging fontanelle",
     "Groin or scrotal swelling; hair tourniquet",
     "Bruising or unexplained injury (safeguarding)"
    ],
    "psychosocial": [
     "Parental exhaustion and sense of failure",
     "Low mood and anxiety",
     "Support at home",
     "Feeling overwhelmed"
    ],
    "ice": [
     "Idea: something is seriously wrong",
     "Concern: a missed illness and her own coping",
     "Expectation: reassurance and help"
    ]
   },
   "diagnosis": "“Noah has colic. I’ve examined him fully and he’s a healthy, thriving baby.”",
   "diagnosisLay": "“Colic means long bouts of crying in a well baby. We don’t fully know why it happens, but it isn’t harmful, it isn’t anything you’ve done, and it usually settles by three to four months.”",
   "management": {
    "reflectIce": "“You were terrified something serious was wrong. I’ve checked him from head to toe, and he’s well. Now I want to make sure you’re okay too.”",
    "psychosocial": "Validate her exhaustion; ask about mood and anxiety; explicit permission to put him down safely.",
    "sharedPlan": [
     "Reassurance and soothing strategies; no routine drops or formula changes",
     "ICON information; never-shake and walk-away advice",
     "Health visitor visit; review of parental mood (NICE CG192)"
    ],
    "safetyNet": [
     "Temperature 38 °C or more, poor feeding, green vomit, blood in nappy, floppiness or change in cry: urgent review or 111",
     "Feeling unable to cope or low mood: contact the practice or health visitor the same day",
     "Review in 2 weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Unsettled baby",
    "s": "Visual algorithm · red flags and colic",
    "href": "algorithms/unsettled-baby.html"
   },
   {
    "ic": "🗺️",
    "t": "Fever in children",
    "s": "Visual algorithm · NICE NG143",
    "href": "algorithms/fever-children.html"
   },
   {
    "ic": "💠",
    "t": "Infant reflux",
    "s": "Management protocol · NICE NG1",
    "href": "management/infant-reflux.html"
   },
   {
    "ic": "📋",
    "t": "Cow’s milk allergy and reflux",
    "s": "Case walkthrough",
    "href": "../cases/cmpa-reflux.html"
   },
   {
    "ic": "💠",
    "t": "Postnatal depression",
    "s": "Management protocol · NICE CG192",
    "href": "management/postnatal-depression.html"
   },
   {
    "ic": "📋",
    "t": "Safeguarding",
    "s": "Case walkthrough",
    "href": "../cases/safeguarding.html"
   }
  ],
  "pitfalls": {
   "intro": "The diagnosis is easy; the marks are in how safely you reach it and how well you look after the parent. Candidates fail by skipping the examination, by medicalising crying, and by never asking about the mother.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Diagnosing colic without examining.",
     "why": "Colic is a diagnosis of exclusion; infection, hernia, torsion and hair tourniquet must be ruled out.",
     "fix": "Examine fully undressed and plot the weight."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing drops, reflux medicine or a new formula.",
     "why": "Evidence is limited, and crying alone is not an indication for acid suppression (NICE NG1).",
     "fix": "Reassure and give soothing strategies; consider allergy only with other features (NICE CG116)."
    },
    {
     "dom": "tasks",
     "fail": "No never-shake advice.",
     "why": "Crying is a recognised trigger for abusive head trauma.",
     "fix": "Give the ICON message, including permission to walk away safely."
    },
    {
     "dom": "rto",
     "fail": "Ignoring the mother’s distress.",
     "why": "Her exhaustion and anxiety are the hidden agenda, and postnatal mood matters (NICE CG192).",
     "fix": "Ask how she is, screen mood and anxiety, and arrange support."
    },
    {
     "dom": "rto",
     "fail": "Reassuring before examining.",
     "why": "Early reassurance sounds dismissive and may be wrong.",
     "fix": "Examine first, then reassure with the findings."
    },
    {
     "dom": "gs",
     "fail": "Vague safety-net.",
     "why": "A febrile baby under 3 months needs same-day assessment (NICE NG143).",
     "fix": "Name the red flags and the 38 °C threshold, and book review."
    }
   ]
  }
 },
 "narcolepsy": {
  "stem": {
   "name": "Orla Hennessy",
   "age": "22-year-old woman",
   "pmh": [
    "No significant history recorded",
    "Student"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "Months to years of overwhelming daytime sleepiness with sudden sleep attacks, even mid-conversation and in lectures. Brief episodes of her knees buckling and face going slack when she laughs or is startled. Frightening episodes of being unable to move as she falls asleep. Studies and mood affected.",
   "reason": "“I can’t stay awake in the day, and people think I’m just lazy.”"
  },
  "knowledge": {
   "guideline": "[1] DVLA Assessing fitness to drive: a guide for medical professionals (current online version), section on primary/central hypersomnias including narcolepsy · [2] NICE TA758 (solriamfetol for excessive daytime sleepiness caused by narcolepsy, 2022) · [3] BNF modafinil monograph · [4] MHRA Drug Safety Update (November 2020): modafinil and the risk of congenital malformations · [5] GMC Confidentiality: patients’ fitness to drive and reporting concerns to the DVLA (2017) · [6] Equality Act 2010",
   "summary": "Irresistible daytime sleep attacks with cataplexy (brief loss of muscle tone set off by laughter or surprise, with full awareness), sleep paralysis and vivid hallucinations at sleep onset make narcolepsy type 1 the working diagnosis. The GP’s job is to recognise the pattern, rule out common causes of sleepiness, measure sleepiness with the Epworth scale, refer to a specialist sleep service, and deal with driving and safety on the day. Treatment is specialist-led. A person with narcolepsy must stop driving and tell the DVLA.",
   "points": [
    {
     "h": "Recognise it",
     "t": "Persistent excessive daytime sleepiness with sleep attacks that feel irresistible, often with short naps that refresh for a while. Look for REM-intrusion features: sleep paralysis, hypnagogic or hypnopompic hallucinations and broken night sleep. Onset is usually in the teens or twenties, and diagnosis is often delayed by years."
    },
    {
     "h": "Cataplexy is the key clue",
     "t": "Sudden, brief weakness set off by strong emotion, usually laughter: knees buckling, jaw or face going slack, head dropping. The person stays fully aware and remembers the episode. That separates it from syncope and seizures. Cataplexy points to narcolepsy type 1 (orexin deficiency)."
    },
    {
     "h": "Rule out the common causes",
     "t": "Too little or irregular sleep, obstructive sleep apnoea (snoring, witnessed apnoeas, raised BMI), depression, alcohol, cannabis and other drugs, sedating medicines, shift work, and medical causes such as hypothyroidism or anaemia. A two-week sleep diary and the Epworth Sleepiness Scale (a score above 10 suggests excessive sleepiness) are useful before referral."
    },
    {
     "h": "Refer to a sleep service",
     "t": "Diagnosis needs a specialist sleep or neurology service: overnight polysomnography followed by a Multiple Sleep Latency Test, sometimes CSF orexin. Refer when narcolepsy is suspected; do not start wake-promoting drugs in primary care before the diagnosis."
    },
    {
     "h": "Treatment is specialist-led",
     "t": "Regular sleep times and short planned naps. Modafinil is the usual first drug for sleepiness (BNF [3]). It can harm an unborn baby and it lowers the effect of hormonal contraception, so effective contraception is needed (MHRA [4]). Solriamfetol is an option if modafinil and dexamfetamine or methylphenidate have not worked well enough or are not suitable (NICE TA758 [2]). Cataplexy has its own treatments, chosen by the specialist."
    },
    {
     "h": "Driving",
     "t": "Under current DVLA standards for primary/central hypersomnias, including narcolepsy, a Group 1 driver must stop driving and tell the DVLA. Relicensing is considered only after satisfactory symptom control, for at least 3 months, confirmed by the specialist. Group 2 (lorry and bus) licensing is much stricter and needs specialist assessment [1]. If she keeps driving against advice, the GMC allows the doctor to tell the DVLA after telling her first [5]."
    },
    {
     "h": "Impact and support",
     "t": "Narcolepsy is likely to count as a disability under the Equality Act 2010 [6], so her university must consider reasonable adjustments (extra time, rest breaks, recorded lectures). Screen for low mood, which is common. Give safety advice about cooking, bathing, swimming and heights while cataplexy is untreated."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Orla, I’m Dr Patel. What’s brought you in today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "I can’t stay awake in the day. I fall asleep without warning, even in the middle of a conversation or in lectures, however much I sleep at night. And when I laugh hard or get a fright, my knees buckle and my face goes slack for a few seconds. People think I’m just lazy. It’s wrecking my studies."
   },
   {
    "who": "dr",
    "text": "That sounds exhausting, and hard to live with when people misjudge you. I’d like to hear more about the sleepiness and those episodes, then I’ll explain what I think is going on. Is that okay?",
    "dom": "gs",
    "why": "Acknowledges the impact and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Yes, please."
   },
   {
    "phase": "Focused history",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When you fall asleep in the day, what is it like? Can you fight it?",
    "dom": "tasks",
    "why": "Characterises the sleep attacks"
   },
   {
    "who": "pt",
    "text": "Not really. It just comes over me. I might nap for a bit and feel better, then it comes back."
   },
   {
    "who": "dr",
    "text": "Tell me about the knees buckling. When it happens, are you aware of what’s going on around you?",
    "dom": "tasks",
    "why": "Checks for preserved awareness to separate cataplexy from syncope or seizure"
   },
   {
    "who": "pt",
    "text": "Yes, completely. I can hear everything, I just can’t hold myself up for a few seconds. Laughing sets it off most."
   },
   {
    "who": "dr",
    "text": "Have you ever bitten your tongue, wet yourself, or been confused afterwards?",
    "dom": "tasks",
    "why": "Screens for seizure features"
   },
   {
    "who": "pt",
    "text": "No, never."
   },
   {
    "who": "dr",
    "text": "You mentioned something happens as you fall asleep. Can you tell me about that?",
    "dom": "tasks",
    "why": "Follows the cue about night-time symptoms"
   },
   {
    "who": "pt",
    "text": "I wake up and can’t move, and sometimes I see things in the room that aren’t there. It’s terrifying."
   },
   {
    "who": "dr",
    "text": "That must be frightening. What time do you usually go to bed and get up, and how is your sleep at night?",
    "dom": "tasks",
    "why": "Checks for insufficient sleep"
   },
   {
    "who": "pt",
    "text": "I go to bed at a normal time and I’m in bed long enough, but I wake up a lot."
   },
   {
    "who": "dr",
    "text": "Has anyone said you snore loudly or stop breathing in your sleep?",
    "dom": "tasks",
    "why": "Screens for obstructive sleep apnoea"
   },
   {
    "who": "pt",
    "text": "Not that anyone’s said."
   },
   {
    "who": "dr",
    "text": "Some other things can cause sleepiness, so I ask everyone. How much alcohol, caffeine or cannabis do you use, and do you take any medicines, including anything bought over the counter?",
    "dom": "tasks",
    "why": "Screens substances and drugs"
   },
   {
    "who": "pt",
    "text": "Nothing much, no."
   },
   {
    "who": "dr",
    "text": "And how has your mood been through all this?",
    "dom": "tasks",
    "why": "Screens for depression"
   },
   {
    "who": "pt",
    "text": "Low sometimes, because I’m falling behind and people think I don’t care. But I’m not depressed like that. I want to get on with things."
   },
   {
    "who": "dr",
    "text": "Have you ever had thoughts of harming yourself?",
    "dom": "tasks",
    "why": "Brief risk check"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What have you been thinking might be going on?",
    "dom": "rto",
    "why": "Elicits ideas"
   },
   {
    "who": "pt",
    "text": "I honestly don’t know. I started to wonder if they’re right and I’m lazy."
   },
   {
    "who": "dr",
    "text": "You’re not lazy. What you describe is something real. What worries you most about it?",
    "dom": "rto",
    "why": "Validates and explores concern"
   },
   {
    "who": "pt",
    "text": "Failing my course. And the episodes. I don’t know what they are."
   },
   {
    "who": "dr",
    "text": "And what were you hoping I could do today?",
    "dom": "rto",
    "why": "Elicits expectations"
   },
   {
    "who": "pt",
    "text": "Find out what it is, and get some help."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I think this is probably a condition called narcolepsy. It’s a problem with how the brain controls sleep and wakefulness. The sleep attacks, being unable to move as you fall asleep, and seeing things at that time all fit. The knee-buckling when you laugh, while you stay fully aware, has a name, cataplexy. It’s quite specific for narcolepsy, and it isn’t fainting or a fit.",
    "dom": "tasks",
    "why": "Names the likely diagnosis and explains cataplexy"
   },
   {
    "who": "pt",
    "text": "So it’s a real thing? Not me?"
   },
   {
    "who": "dr",
    "text": "It’s a real neurological condition, and it’s treatable. I’m going to ask you to fill in a short sleepiness score now, and keep a sleep diary for two weeks. I’ll also check some bloods to rule out things like thyroid problems or anaemia that can add to tiredness.",
    "dom": "tasks",
    "why": "Epworth score, sleep diary and bloods for contributors"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Referral, driving and safety",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The diagnosis is confirmed by a specialist sleep service with an overnight sleep study and a daytime nap test. I’ll refer you. Treatment usually means regular sleep times, short planned naps, and medicine for the sleepiness and for the cataplexy, all started by the specialist.",
    "dom": "tasks",
    "why": "Specialist referral and outline of treatment"
   },
   {
    "who": "pt",
    "text": "That’s a relief, honestly."
   },
   {
    "who": "dr",
    "text": "There’s one important thing I have to raise. Do you drive?",
    "dom": "tasks",
    "why": "Opens the driving discussion"
   },
   {
    "who": "pt",
    "text": "I do, yes."
   },
   {
    "who": "dr",
    "text": "With sleep attacks like these, driving isn’t safe at the moment. The DVLA rules say you must stop driving now and tell them yourself. Once the specialist has your symptoms well controlled for at least three months, you can apply to have your licence back.",
    "dom": "tasks",
    "why": "Clear DVLA advice using current standards"
   },
   {
    "who": "pt",
    "text": "Stop completely? I need the car to get around."
   },
   {
    "who": "dr",
    "text": "I know that’s a big thing to hear, and I’m sorry. Falling asleep at the wheel could kill you or someone else. Could we look at other ways to get to university while this is sorted out?",
    "dom": "rto",
    "why": "Acknowledges the loss while staying clear on safety"
   },
   {
    "who": "pt",
    "text": "I suppose I can get the bus. I didn’t realise."
   },
   {
    "who": "dr",
    "text": "Until the cataplexy is treated, take care with things like hot pans, baths, swimming and heights, because you could drop suddenly. And your university should offer support, such as extra time or recorded lectures. I can write a letter confirming this is a medical condition.",
    "dom": "gs",
    "why": "Practical safety advice and educational support"
   },
   {
    "who": "pt",
    "text": "That would really help."
   },
   {
    "phase": "Safety net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If your mood drops a lot, or you have any thoughts of harming yourself, come back straight away. Come back too if the episodes change, for example if you lose awareness, or if you haven’t heard about the referral in a few weeks. Can you tell me what you’ll do from today?",
    "dom": "gs",
    "why": "Specific safety net and teach-back"
   },
   {
    "who": "pt",
    "text": "Stop driving and tell the DVLA. Do the sleep diary and bloods. Wait for the sleep clinic. Be careful in the bath and kitchen. Come back if my mood gets bad."
   },
   {
    "who": "dr",
    "text": "Exactly right. Let’s book a review in two to three weeks to go through the diary and bloods.",
    "dom": "gs",
    "why": "Defined follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her describe the sleep attacks, the knee-buckling and the night-time episodes before narrowing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored the effect on her studies, mood and self-image, and whether she drives.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the emotion-triggered weakness with preserved awareness as cataplexy, and the ‘lazy’ label as a source of distress.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: maybe she is lazy. Concern: failing her course and the unexplained episodes. Expectation: a diagnosis and help.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Epworth Sleepiness Scale, two-week sleep diary, and bloods (FBC, TFT and others) for contributors; no specialist tests in primary care.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Narcolepsy type 1 versus insufficient sleep, OSA, depression, drugs, other hypersomnias; cataplexy versus syncope and seizure.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Checked seizure features, snoring and apnoeas, substances and medicines, and screened mood and self-harm risk.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Suspected narcolepsy with cataplexy (type 1), pending specialist confirmation.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Referral to a specialist sleep service; sleep routine and planned naps explained; medicines left to the specialist; safety advice while cataplexy is untreated.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Stop driving and tell the DVLA now; university letter and reasonable adjustments; mood support.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Return for low mood, self-harm thoughts or changed episodes; chase the referral if no news; review in 2–3 weeks with the diary and bloods.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Orla Hennessy",
    "age": "22 years · female",
    "pmh": [
     "Student",
     "No significant history"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "None recorded",
    "recent": "Months to years of daytime sleep attacks; knees buckle when she laughs; frightening episodes of being unable to move at sleep onset.",
    "reason": "“People think I’m just lazy.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "Let her describe the sleep attacks and the laughter-triggered weakness in full."
    },
    {
     "t": "1–5",
     "h": "Pattern and exclusions",
     "d": "Awareness during episodes, seizure features, sleep paralysis and hallucinations, sleep hours, snoring, substances, mood and risk."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "The fear that she really is lazy; failing her course; wanting answers."
    },
    {
     "t": "6–8",
     "h": "Name it",
     "d": "Narcolepsy and cataplexy in plain words; Epworth score, sleep diary, bloods."
    },
    {
     "t": "8–11",
     "h": "Refer, drive, stay safe",
     "d": "Sleep service referral; stop driving and tell the DVLA; safety at home; university support."
    },
    {
     "t": "11–12",
     "h": "Safety net",
     "d": "Mood, changed episodes, referral chase; review booked; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Tells her to sleep more and cut out caffeine, or labels it depression; misses cataplexy; never asks about driving; no referral.",
    "pass": "Recognises the sleepiness and cataplexy pattern, excludes common causes, refers to a sleep service, and advises her to stop driving and tell the DVLA.",
    "exc": "All of that, plus: explicitly lifts the ‘lazy’ label; explains cataplexy clearly; handles the driving news with empathy and practical alternatives; gives safety advice and university support; screens mood and risk; clear teach-back and follow-up."
   },
   "avoid": [
    {
     "dont": "“You probably just need a better sleep routine.”",
     "instead": "“You’re not lazy. This sounds like narcolepsy, a real neurological condition, and I’m referring you to find out.”",
     "why": "Years of dismissal are the usual story; recognising the pattern is the key task."
    },
    {
     "dont": "“Maybe cut down on driving for a bit.”",
     "instead": "“You must stop driving now and tell the DVLA. You can reapply once the specialist has your symptoms controlled.”",
     "why": "The DVLA standard is to stop, not to cut down. Vague advice is unsafe."
    },
    {
     "dont": "“I’ll start you on modafinil to see if it helps.”",
     "instead": "“The sleep specialist will confirm it and start the right treatment.”",
     "why": "Diagnosis needs specialist testing, and modafinil carries pregnancy and contraception risks (MHRA, November 2020)."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Education",
     "t": "Falling behind and being judged hurts self-esteem. A letter confirming a medical condition helps her ask the university for adjustments and, where eligible, Disabled Students’ Allowance support."
    },
    {
     "h": "Transport and independence",
     "t": "Losing the car affects independence. Plan other ways to travel before she leaves the room."
    }
   ],
   "legal": [
    {
     "h": "DVLA",
     "t": "Current DVLA standards for narcolepsy: Group 1 drivers must stop driving and notify the DVLA; relicensing is considered after satisfactory symptom control for at least 3 months, confirmed by the specialist. Group 2 licensing needs specialist assessment and is much stricter."
    },
    {
     "h": "Equality Act 2010",
     "t": "Narcolepsy is likely to meet the definition of disability, so education providers and employers must consider reasonable adjustments."
    }
   ],
   "professional": [
    {
     "h": "Fitness to drive and confidentiality",
     "t": "Record the driving advice. If she keeps driving against advice, GMC guidance (Confidentiality: patients’ fitness to drive, 2017) allows the doctor to tell the DVLA, after telling her first."
    },
    {
     "h": "Prescribing",
     "t": "Wake-promoting medicines are specialist-initiated. If modafinil is started, check contraception and pregnancy plans (MHRA Drug Safety Update, November 2020; BNF)."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Narcolepsy UK offers patient information, including on driving and education."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Sleep attacks while driving or operating machinery",
     "Loss of awareness, tongue biting, incontinence or confusion after episodes: think seizure",
     "Low mood with self-harm thoughts",
     "Loud snoring or witnessed apnoeas: OSA"
    ],
    "psychosocial": [
     "Studies suffering; labelled lazy",
     "Driving and independence",
     "Low mood and confidence"
    ],
    "ice": [
     "Idea: maybe she is lazy",
     "Concern: failing her course; the unexplained episodes",
     "Expectation: a diagnosis and help"
    ]
   },
   "diagnosis": "Suspected narcolepsy type 1: excessive daytime sleepiness with sleep attacks, cataplexy with preserved awareness, sleep paralysis and hypnagogic hallucinations. Needs specialist confirmation after exclusion of insufficient sleep, OSA, depression and substance effects.",
   "diagnosisLay": "“I think you have narcolepsy. It’s a condition where the brain doesn’t control sleep and wakefulness properly. It explains the sleep attacks, the paralysis at night and your knees giving way when you laugh. It’s real, it isn’t laziness, and it can be treated.”",
   "management": {
    "reflectIce": "“You came in half-believing people who say you’re lazy. What you’ve told me points to a real neurological condition, and we’ll get it properly diagnosed.”",
    "psychosocial": "University letter and adjustments; travel plans without the car; mood support.",
    "sharedPlan": [
     "Epworth Sleepiness Scale and two-week sleep diary",
     "Bloods for contributors (FBC, TFT and others as indicated)",
     "Referral to a specialist sleep service for polysomnography and MSLT",
     "Stop driving now and notify the DVLA (current DVLA standards)",
     "Safety advice while cataplexy is untreated; medicines left to the specialist"
    ],
    "safetyNet": [
     "Return urgently for self-harm thoughts or much lower mood",
     "Return if episodes change, such as loss of awareness",
     "Chase the referral if no appointment within a few weeks",
     "Review in 2–3 weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Obstructive sleep apnoea",
    "s": "Case walkthrough · a key alternative cause of sleepiness",
    "href": "../cases/osa.html"
   },
   {
    "ic": "🗺️",
    "t": "Fatigue",
    "s": "Visual algorithm · tiredness versus sleepiness",
    "href": "algorithms/fatigue.html"
   },
   {
    "ic": "🗺️",
    "t": "Hallucinations",
    "s": "Visual algorithm · hypnagogic hallucinations",
    "href": "algorithms/hallucinations.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA fitness to drive",
    "s": "Driving rules for sleep disorders",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by treating a neurological illness as a lifestyle problem, and by forgetting the car keys in her pocket.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Calling it poor sleep habits or depression.",
     "why": "Sleep attacks with cataplexy and REM-intrusion features are narcolepsy until proven otherwise.",
     "fix": "Ask about cataplexy, sleep paralysis and hallucinations in every sleepy young adult."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about driving.",
     "why": "Sleep attacks at the wheel can be fatal, and the DVLA requires her to stop and notify.",
     "fix": "Ask ‘Do you drive?’ and give clear, current DVLA advice."
    },
    {
     "dom": "tasks",
     "fail": "Mistaking cataplexy for fainting or seizures.",
     "why": "Preserved awareness with an emotional trigger is the key feature.",
     "fix": "Ask whether she is aware during episodes and what sets them off."
    },
    {
     "dom": "tasks",
     "fail": "Starting modafinil in primary care.",
     "why": "Diagnosis needs specialist tests; modafinil carries pregnancy and contraception risks.",
     "fix": "Refer to a sleep service and leave medicines to the specialist."
    },
    {
     "dom": "rto",
     "fail": "Ignoring the ‘lazy’ label.",
     "why": "It is the hurt she brought, and lifting it builds trust.",
     "fix": "Say clearly that this is a real condition, not laziness."
    },
    {
     "dom": "gs",
     "fail": "No safety advice or follow-up.",
     "why": "Untreated cataplexy risks injury, and mood often suffers.",
     "fix": "Give home safety advice, a mood safety net and a review date."
    }
   ]
  }
 },
 "phaeochromocytoma": {
  "stem": {
   "name": "Dominic Vasquez",
   "age": "39-year-old man",
   "pmh": [
    "Raised, variable blood pressure readings at recent nurse checks",
    "No hypertension diagnosis confirmed"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "Recurrent sudden attacks of pounding headache, racing heart, drenching sweats, pallor, shaking and a sense of dread, lasting minutes. Nurse readings high and erratic. Previously told it is anxiety.",
   "reason": "“People keep saying it’s anxiety, but it doesn’t feel like that.”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG136 (hypertension in adults, 2019, current version) · [2] Endocrine Society clinical practice guideline on phaeochromocytoma and paraganglioma (2014) (international) · [3] BNF propranolol and other beta-blocker monographs (contraindications) · [4] BNF phenoxybenzamine and doxazosin monographs · [5] British and Irish Hypertension Society position statement on young-onset hypertension (2024)",
   "summary": "Sudden attacks of headache, palpitations and sweating, with pallor and high, swinging blood pressure in a man under 40, should make you think of phaeochromocytoma before calling it anxiety. It is rare but curable, and dangerous if missed. Test plasma free or 24-hour urinary metanephrines, check for mimics, and refer to endocrinology. Do not start a beta-blocker. Arrange same-day assessment if blood pressure is very high with symptoms of a crisis.",
   "points": [
    {
     "h": "Recognise the pattern",
     "t": "Episodes of headache, palpitations and sweating are the classic triad, often with pallor, tremor and a sense of doom, lasting minutes. Blood pressure may be high only during attacks or all the time, and is often labile. Many patients have only some of these features."
    },
    {
     "h": "When to think of it",
     "t": "Paroxysmal symptoms with hypertension, hypertension under 40, resistant hypertension, a severe rise with anaesthesia or certain drugs, an adrenal incidentaloma, or a family history of a hereditary syndrome. NICE NG136 advises considering specialist evaluation for secondary causes in adults under 40 with hypertension [1], and the British and Irish Hypertension Society sets out a structured work-up for young-onset hypertension [5]."
    },
    {
     "h": "Mimics",
     "t": "Panic disorder, hyperthyroidism, arrhythmia, hypoglycaemia, stimulants and drugs (including cocaine, amfetamines and decongestants), alcohol withdrawal and carcinoid. Anxiety remains a diagnosis of exclusion when the blood pressure is objectively labile."
    },
    {
     "h": "Test",
     "t": "Plasma free metanephrines or 24-hour urinary fractionated metanephrines are the first-line tests [2]; use whichever your laboratory offers. Some medicines, such as tricyclic antidepressants, can cause false positives. Add TFTs, U&E, glucose or HbA1c and an ECG. Imaging is arranged by the specialist only after positive biochemistry."
    },
    {
     "h": "Alpha before beta",
     "t": "A beta-blocker given alone can leave alpha-driven vasoconstriction unopposed and trigger a hypertensive crisis. The BNF lists phaeochromocytoma as a contraindication to beta-blockers unless an alpha-blocker is already in place [3]. The specialist starts alpha-blockade first, for example phenoxybenzamine or doxazosin [4], before surgery."
    },
    {
     "h": "Urgent situations",
     "t": "Refer for same-day specialist assessment if clinic BP is 180/120 mmHg or higher with suspected phaeochromocytoma, for example labile or postural hypotension, headache, palpitations, pallor, abdominal pain or sweating (NICE NG136 [1]). Chest pain, confusion, severe headache or breathlessness during an attack need 999."
    },
    {
     "h": "Outcome and genetics",
     "t": "Surgical removal after preparation cures most people, but lifelong follow-up is needed because tumours can recur and a minority are malignant. A large share are hereditary (MEN2, von Hippel–Lindau, NF1, SDH genes), so genetic testing is usually offered and relatives may need screening [2]."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Vasquez, I’m Dr Evans. What would you like to talk about today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "I keep getting these frightening attacks out of nowhere. A pounding headache, my heart races, I pour with sweat, go pale and shaky, with an awful sense of dread. They last a few minutes then pass. And the nurse keeps getting really high blood pressure readings that are all over the place. I’m only 39. People keep saying it’s anxiety, but it doesn’t feel like that."
   },
   {
    "who": "dr",
    "text": "That sounds really frightening, and I can hear you’re fed up with being told it’s anxiety. I’d like to go through the attacks in detail, check your blood pressure, and then talk about what I think we should do. Is that okay?",
    "dom": "gs",
    "why": "Validates and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Yes. That’s what I want."
   },
   {
    "phase": "Focused history",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Talk me through the last attack from start to finish.",
    "dom": "tasks",
    "why": "Detailed description of an episode"
   },
   {
    "who": "pt",
    "text": "It came out of the blue. The headache is like my head’s pounding, my heart thumps, I’m soaked in sweat and people tell me I go white. Then it passes and I feel washed out."
   },
   {
    "who": "dr",
    "text": "Is there anything that sets them off, such as exercise, bending, straining, certain foods or medicines?",
    "dom": "tasks",
    "why": "Explores triggers"
   },
   {
    "who": "pt",
    "text": "Not that I’ve noticed. They just come."
   },
   {
    "who": "dr",
    "text": "Before an attack, do you notice worry building up, or does it start with the physical symptoms?",
    "dom": "tasks",
    "why": "Separates panic from a physical cause"
   },
   {
    "who": "pt",
    "text": "The physical stuff comes first. The dread is part of it, not before it."
   },
   {
    "who": "dr",
    "text": "Have you had any chest pain, fainting, or feeling dizzy when you stand up?",
    "dom": "tasks",
    "why": "Screens cardiac symptoms and postural hypotension"
   },
   {
    "who": "pt",
    "text": "No, not really."
   },
   {
    "who": "dr",
    "text": "Any weight loss, feeling hot all the time, tremor between attacks, or changes in your bowels?",
    "dom": "tasks",
    "why": "Screens hyperthyroidism and other mimics"
   },
   {
    "who": "pt",
    "text": "No, I’m fine in between."
   },
   {
    "who": "dr",
    "text": "Do you take any medicines, supplements or anything bought over the counter, or use caffeine, energy drinks or recreational drugs?",
    "dom": "tasks",
    "why": "Screens drug and stimulant causes"
   },
   {
    "who": "pt",
    "text": "Nothing I can think of."
   },
   {
    "who": "dr",
    "text": "Does anyone in your family have blood pressure problems at a young age, adrenal or thyroid tumours, or conditions that run in families?",
    "dom": "tasks",
    "why": "Screens hereditary syndromes"
   },
   {
    "who": "pt",
    "text": "Not that I know of."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What do you think might be causing this?",
    "dom": "rto",
    "why": "Elicits ideas"
   },
   {
    "who": "pt",
    "text": "I don’t know. Something physical. It just doesn’t feel like nerves."
   },
   {
    "who": "dr",
    "text": "What worries you most?",
    "dom": "rto",
    "why": "Explores concern"
   },
   {
    "who": "pt",
    "text": "That something’s being missed. And my blood pressure. My heart feels like it’ll burst."
   },
   {
    "who": "dr",
    "text": "And what were you hoping we would do?",
    "dom": "rto",
    "why": "Elicits expectations"
   },
   {
    "who": "pt",
    "text": "Look for the cause properly."
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’ll check your pulse and blood pressure sitting and standing, listen to your heart, feel your neck for your thyroid and look at the back of your eyes.",
    "dom": "tasks",
    "why": "Targeted examination"
   },
   {
    "who": "pt",
    "text": "Go ahead."
   },
   {
    "who": "dr",
    "text": "I’ll check your blood pressure over time as well. I think you’re right to question the anxiety label. Sudden attacks of headache, racing heart and sweating, with pallor and swinging blood pressure at your age, can be caused by a rare growth on the adrenal gland called a phaeochromocytoma. It releases bursts of adrenaline-like hormones.",
    "dom": "tasks",
    "why": "Names the possibility clearly"
   },
   {
    "who": "pt",
    "text": "A growth? Is it cancer?"
   },
   {
    "who": "dr",
    "text": "It’s usually not cancer, and it’s rare, so this may well turn out to be something else. But it’s important to check for, because it can be cured with an operation, and it can be dangerous if missed. That’s why I want to test rather than reassure.",
    "dom": "rto",
    "why": "Answers the fear honestly and proportionately"
   },
   {
    "who": "pt",
    "text": "Okay. That makes sense."
   },
   {
    "phase": "Investigation and plan",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The key test measures breakdown products of these hormones, called metanephrines, either in a blood test or a 24-hour urine collection. I’ll also check your thyroid, kidneys and sugar, and do a heart tracing today, because those can cause similar attacks.",
    "dom": "tasks",
    "why": "Metanephrines plus mimic screen"
   },
   {
    "who": "pt",
    "text": "And if it’s positive?"
   },
   {
    "who": "dr",
    "text": "Then you’d see the hormone specialists, who arrange a scan to find it. Before any operation they start a particular type of blood pressure tablet first to keep you safe. That’s why I won’t start a beta-blocker today, even though your heart races. On its own it could make things worse if this is the cause.",
    "dom": "tasks",
    "why": "Explains alpha-before-beta and avoids a beta-blocker"
   },
   {
    "who": "pt",
    "text": "So no tablets for now?"
   },
   {
    "who": "dr",
    "text": "Not until we know more, unless your pressure is dangerously high. I’d like you to use a home blood pressure monitor twice a day, and also during an attack if you can, and write down what happened. That helps the specialist too.",
    "dom": "tasks",
    "why": "Home monitoring with a symptom diary"
   },
   {
    "who": "pt",
    "text": "I can do that."
   },
   {
    "phase": "Safety net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you get a severe headache that doesn’t settle, chest pain, breathlessness, confusion, weakness or problems with your vision during an attack, call 999. If home readings are 180 over 120 or higher, contact us or NHS 111 the same day. Can you tell me the plan in your own words?",
    "dom": "gs",
    "why": "Specific safety net with thresholds and teach-back"
   },
   {
    "who": "pt",
    "text": "Blood or urine test for these hormones, thyroid and kidney bloods, heart tracing, home BP with a diary. No beta-blocker. 999 for a severe headache or chest pain."
   },
   {
    "who": "dr",
    "text": "That’s it exactly. I’ll call you with the results and see you in two weeks, sooner if needed.",
    "dom": "gs",
    "why": "Clear results plan and follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him describe the attacks and his frustration at the anxiety label before narrowing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored his fear of something being missed and the effect of the attacks; asked about stimulants and recreational drugs.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the classic triad, pallor and labile BP at 39, and that physical symptoms come before the dread.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: something physical, not nerves. Concern: being dismissed; his blood pressure. Expectation: a proper search for the cause.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Lying and standing BP, pulse, heart, thyroid and fundi; plasma free or 24-hour urinary metanephrines, TFTs, U&E, glucose or HbA1c, ECG; home BP with symptom diary.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Phaeochromocytoma versus panic disorder, hyperthyroidism, arrhythmia, hypoglycaemia, drugs and stimulants.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened chest pain, syncope and postural symptoms; applied NICE NG136 same-day criteria.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Possible phaeochromocytoma; anxiety not assumed.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Metanephrine testing and endocrinology referral; no beta-blocker; explained the alpha-before-beta principle; home monitoring.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Considered hereditary syndromes and family screening; honest, proportionate answer about cancer.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 for crisis symptoms; same-day contact if BP 180/120 or higher; results call and review in two weeks.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Investigations & results"
   ],
   "stem": {
    "name": "Dominic Vasquez",
    "age": "39 years · male",
    "pmh": [
     "Labile raised BP at nurse checks"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "None recorded",
    "recent": "Recurrent attacks of headache, palpitations, sweating and pallor for minutes; told it is anxiety.",
    "reason": "“It doesn’t feel like anxiety.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "Let him describe the attacks and the anxiety label in full."
    },
    {
     "t": "1–5",
     "h": "Characterise the attacks",
     "d": "Sequence, triggers, physical-first or worry-first, postural symptoms, thyroid features, drugs, family history."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Something physical; fear of being dismissed; wants a proper search."
    },
    {
     "t": "6–8",
     "h": "Examine and name it",
     "d": "Lying and standing BP, heart, thyroid, fundi; phaeochromocytoma explained honestly."
    },
    {
     "t": "8–11",
     "h": "Test and protect",
     "d": "Metanephrines, mimic screen, ECG; no beta-blocker; home BP diary; endocrinology route."
    },
    {
     "t": "11–12",
     "h": "Safety net",
     "d": "999 symptoms, same-day BP threshold, results call, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Labels it anxiety and starts propranolol or refers for talking therapy; no metanephrines; no safety net for a crisis.",
    "pass": "Thinks of phaeochromocytoma, orders metanephrines, screens mimics, refers to endocrinology and safety-nets.",
    "exc": "All of that, plus: validates his experience without dismissing anxiety as a later possibility; explains why a beta-blocker is avoided; honest answer about cancer; home BP diary; clear thresholds for same-day and 999 help; teach-back."
   },
   "avoid": [
    {
     "dont": "“It sounds like panic attacks. Let’s try propranolol.”",
     "instead": "“I want to test for a rare hormone cause first, and I won’t start a beta-blocker until we know.”",
     "why": "A beta-blocker alone in phaeochromocytoma can precipitate a hypertensive crisis (BNF)."
    },
    {
     "dont": "“Your tests are probably normal, so don’t worry.”",
     "instead": "“It may well be something else, but it is worth ruling out because it is curable.”",
     "why": "Premature reassurance repeats the dismissal he came in with."
    },
    {
     "dont": "“It’s a tumour.”",
     "instead": "“It’s a growth that is usually not cancer, and it can be removed.”",
     "why": "Frightening language without context raises anxiety and damages trust."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Being dismissed",
     "t": "Repeated anxiety labels erode trust. Taking the physical story seriously rebuilds the relationship, whatever the tests show."
    },
    {
     "h": "Work and daily life",
     "t": "Unpredictable attacks can affect work and activities. Explore this and offer a fit note if he cannot work safely while investigated."
    }
   ],
   "legal": [
    {
     "h": "Driving",
     "t": "Hypertension alone does not require a Group 1 driver to notify the DVLA. If attacks cause dizziness or impaired awareness, advise him not to drive during symptoms, and check DVLA guidance if he holds a Group 2 licence."
    }
   ],
   "professional": [
    {
     "h": "Diagnostic momentum",
     "t": "Earlier labels can stop fresh thinking. Reconsidering the diagnosis when the story does not fit is part of safe practice (GMC Good medical practice)."
    },
    {
     "h": "Results",
     "t": "Agree who checks the metanephrine result and how he will hear about it; abnormal results need prompt endocrinology referral."
    }
   ],
   "community": [
    {
     "h": "Information",
     "t": "Charity patient information on phaeochromocytoma and paraganglioma, and genetic counselling services for families if a hereditary cause is found."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Severe headache, chest pain, breathlessness, confusion or visual loss during an attack",
     "Clinic BP 180/120 or higher with suspected phaeochromocytoma: same-day referral (NICE NG136)",
     "Postural hypotension or syncope",
     "Family history of MEN2, von Hippel–Lindau or NF1"
    ],
    "psychosocial": [
     "Frustration at the anxiety label",
     "Fear that something is being missed",
     "Effect of unpredictable attacks"
    ],
    "ice": [
     "Idea: something physical, not nerves",
     "Concern: being dismissed; his blood pressure",
     "Expectation: a proper search for the cause"
    ]
   },
   "diagnosis": "Possible phaeochromocytoma: paroxysms of headache, palpitations and sweating with pallor and labile hypertension at 39. Mimics (panic disorder, hyperthyroidism, arrhythmia, drugs) to be excluded.",
   "diagnosisLay": "“Your attacks could be caused by a rare growth on the adrenal gland that releases bursts of adrenaline. It’s usually not cancer and it can be cured with an operation. A blood or urine test will tell us whether we need to look further.”",
   "management": {
    "reflectIce": "“You told me this doesn’t feel like anxiety, and your blood pressure backs you up. So we’ll look for a physical cause properly.”",
    "psychosocial": "Validate his experience; fit note if needed; clear communication of results.",
    "sharedPlan": [
     "Plasma free or 24-hour urinary metanephrines",
     "TFTs, U&E, glucose or HbA1c, ECG",
     "Home BP twice daily and during attacks, with a symptom diary",
     "No beta-blocker; endocrinology referral if positive; specialist starts alpha-blockade first"
    ],
    "safetyNet": [
     "999 for severe headache, chest pain, breathlessness or confusion",
     "Same-day contact if BP 180/120 or higher",
     "Results call and review in two weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Hypertension",
    "s": "Case walkthrough · NICE NG136",
    "href": "../cases/hypertension.html"
   },
   {
    "ic": "💠",
    "t": "Hypertension",
    "s": "Protocol · secondary causes and same-day referral",
    "href": "management/hypertension.html"
   },
   {
    "ic": "🗺️",
    "t": "Palpitations",
    "s": "Visual algorithm · paroxysmal symptoms",
    "href": "algorithms/palpitations.html"
   },
   {
    "ic": "💠",
    "t": "Anxiety",
    "s": "Protocol · organic mimics to exclude",
    "href": "management/anxiety.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by agreeing with everyone who came before. The marks are for thinking again when the story doesn’t fit.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting the anxiety label.",
     "why": "The triad with labile BP at 39 needs a secondary cause excluded.",
     "fix": "Name phaeochromocytoma and test metanephrines."
    },
    {
     "dom": "tasks",
     "fail": "Starting propranolol for the palpitations.",
     "why": "Unopposed alpha stimulation can cause a hypertensive crisis.",
     "fix": "Avoid beta-blockers until phaeochromocytoma is excluded."
    },
    {
     "dom": "tasks",
     "fail": "Not screening mimics.",
     "why": "Hyperthyroidism, arrhythmia and drugs are commoner.",
     "fix": "TFTs, ECG and a drug and stimulant history."
    },
    {
     "dom": "tasks",
     "fail": "No same-day threshold.",
     "why": "A crisis can cause stroke or heart damage.",
     "fix": "Give BP and symptom thresholds for urgent help (NICE NG136)."
    },
    {
     "dom": "rto",
     "fail": "Dismissing his frustration, or saying ‘tumour’ without context.",
     "why": "It repeats the harm and frightens him.",
     "fix": "Validate, then explain honestly and proportionately."
    },
    {
     "dom": "gs",
     "fail": "No results plan.",
     "why": "A positive test needs prompt referral.",
     "fix": "Agree how results are given and book a review."
    }
   ]
  }
 },
 "pilonidal-sinus": {
  "stem": {
   "name": "Jordan Reilly",
   "age": "26-year-old man",
   "pmh": [
    "No relevant history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "No recent consultations recorded.",
   "reason": "Booked appointment: “Painful swelling at the top of my bum, leaking. Can’t sit down.”"
  },
  "knowledge": {
   "guideline": "[1] European Society of Coloproctology guidelines for the management of pilonidal disease, BJS 2024;111(10):znae237 (international) · [2] NICE NG141 Cellulitis and erysipelas: antimicrobial prescribing (2019) · [3] NICE NG253 Suspected sepsis in people aged 16 or over (2025) · [4] BNF: paracetamol, ibuprofen",
   "summary": "A tender, fluctuant, discharging swelling in the midline natal cleft of a young hairy man with a history of on-off discharge is an acute pilonidal abscess on a chronic sinus. The abscess needs incision and drainage, not antibiotics alone; definitive treatment of the sinus is planned once the inflammation has settled.",
   "points": [
    {
     "h": "Recognise it",
     "t": "Pilonidal disease is a chronic sinus in the natal cleft, usually with one or more midline pits containing hair. It is commonest in young men, with hirsutism, prolonged sitting and a raised BMI as associations. It may be asymptomatic, cause recurrent discharge, or present as an acute abscess."
    },
    {
     "h": "Acute abscess",
     "t": "A painful, red, swollen, fluctuant lump in the cleft, sometimes discharging pus. ESCP [1]: manage the acute abscess by incision and drainage, usually through an incision placed off the midline, and defer definitive surgery until the inflammation has settled. In most areas this is done through same-day surgical assessment."
    },
    {
     "h": "Antibiotics",
     "t": "Antibiotics do not replace drainage. Consider them only for spreading cellulitis around the abscess or systemic features, choosing the agent and dose from NICE NG141 [2] and the BNF, and reassess if not improving."
    },
    {
     "h": "Sepsis screen",
     "t": "Check temperature, pulse, blood pressure, respiratory rate and mental state. Use NICE NG253 [3] to decide the urgency of assessment if he is systemically unwell. Ask about diabetes or immunosuppression, which raise the threshold for urgent referral."
    },
    {
     "h": "Differentials",
     "t": "Perianal abscess or fistula-in-ano (nearer the anal verge, with pain on defecation), hidradenitis suppurativa (recurrent nodules and tracts in the axillae, groins or perineum), an infected epidermoid cyst, and a boil. Midline pits are the discriminating sign for pilonidal disease."
    },
    {
     "h": "Definitive care and prevention",
     "t": "Refer routinely to general or colorectal surgery for the chronic sinus once the abscess has settled; recurrence after drainage alone is common and the surgeon chooses between minimally invasive and excisional options [1]. Asymptomatic pits need no operation. Keeping the cleft clean and dry and removing hair from the area are widely advised; the evidence for hair removal is limited."
    },
    {
     "h": "Analgesia",
     "t": "Paracetamol and, if suitable, ibuprofen at BNF [4] doses while awaiting drainage. Check for contraindications to NSAIDs."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Reilly, I’m Dr Shah. Come in, and sit or stand, whichever is more comfortable. What’s been happening?",
    "dom": "rto",
    "why": "Open start, notices he cannot sit"
   },
   {
    "who": "pt",
    "text": "I’ve got this really painful swelling right at the top of my bum crease. It’s red, hot and now it’s started leaking a bit of fluid. I can’t sit down properly, and it’s been building up over a few days. I’ve had a bit of discharge there on and off before. What is it?"
   },
   {
    "who": "dr",
    "text": "That sounds very sore. I’ll ask a few questions, have a look if that’s okay, and then we’ll work out what it is and how to get you comfortable.",
    "dom": "gs",
    "why": "Sets a clear agenda"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When you say you’ve had discharge there before, what was that like?",
    "dom": "tasks",
    "why": "Follows the cue of previous discharge"
   },
   {
    "who": "pt",
    "text": "Every so often it gets a bit damp and there’s a mark on my boxers. It never hurt like this though."
   },
   {
    "who": "dr",
    "text": "Is the swelling right in the middle of the crease, or closer to your back passage?",
    "dom": "tasks",
    "why": "Separates pilonidal from perianal abscess"
   },
   {
    "who": "pt",
    "text": "Right at the top, where the crease starts. Nowhere near my backside."
   },
   {
    "who": "dr",
    "text": "Any pain when you open your bowels, or any bleeding or change in your bowels?",
    "dom": "tasks",
    "why": "Screens for perianal abscess or fistula"
   },
   {
    "who": "pt",
    "text": "No, that’s all normal."
   },
   {
    "who": "dr",
    "text": "Have you had fevers, shivers, or felt generally unwell?",
    "dom": "tasks",
    "why": "Systemic features and sepsis screen"
   },
   {
    "who": "pt",
    "text": "Not that I’ve noticed. It’s just really sore."
   },
   {
    "who": "dr",
    "text": "Do you get painful lumps anywhere else, like your armpits or groin?",
    "dom": "tasks",
    "why": "Screens for hidradenitis suppurativa"
   },
   {
    "who": "pt",
    "text": "No, just this."
   },
   {
    "who": "dr",
    "text": "Do you have diabetes or any condition or medicine that lowers your immunity? And any allergies to medicines?",
    "dom": "tasks",
    "why": "Risk factors for severe infection; allergy before any prescription"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. No allergies I know of."
   },
   {
    "phase": "Context and ICE",
    "clock": "5–6 min",
    "who": "dr",
    "text": "How is this affecting work and day-to-day life?",
    "dom": "rto",
    "why": "Psychosocial impact"
   },
   {
    "who": "pt",
    "text": "I sit at a desk and drive a lot for work. I just can’t do either at the moment."
   },
   {
    "who": "dr",
    "text": "What have you been thinking it might be? And is anything worrying you about it?",
    "dom": "rto",
    "why": "Ideas and concerns"
   },
   {
    "who": "pt",
    "text": "Some kind of abscess, I guess. Honestly it’s a bit embarrassing. I just want it sorted, and I don’t want it coming back."
   },
   {
    "phase": "Examination",
    "clock": "6–7 min",
    "who": "dr",
    "text": "Thank you for telling me. It’s a very common problem and nothing to be embarrassed about. I need to look at the area. Would you like a chaperone? (Examines with consent: temperature, pulse and blood pressure normal. Tender, red, fluctuant swelling just off the midline at the top of the natal cleft, a little discharge, and small midline pits. The redness is limited to the swelling, and the perianal area looks normal.)",
    "dom": "tasks",
    "why": "Chaperone, observations and focused examination including the perianal area"
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "This is a pilonidal abscess. There’s a small channel under the skin in the crease, called a pilonidal sinus, which forms around trapped hairs. That explains the on-off discharge. Now it has become infected and filled with pus.",
    "dom": "tasks",
    "why": "Names the diagnosis and links it to his history"
   },
   {
    "who": "pt",
    "text": "Can I just have antibiotics?"
   },
   {
    "who": "dr",
    "text": "Antibiotics on their own won’t clear a collection of pus like this. It needs a small cut to let the pus out, and that is what gets rid of the pain. The redness isn’t spreading and you’re not feverish, so antibiotics aren’t needed at the moment.",
    "dom": "tasks",
    "why": "Drainage, not antibiotics alone; antibiotics only for cellulitis or systemic features"
   },
   {
    "who": "pt",
    "text": "A cut? Today?"
   },
   {
    "who": "dr",
    "text": "Yes. I’ll speak to the surgical team today so it can be drained, usually under local anaesthetic. They’ll explain how to look after the wound.",
    "dom": "tasks",
    "why": "Arranges same-day incision and drainage"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "Until then, regular paracetamol and ibuprofen, if it suits you, will take the edge off. Once it has healed, I’ll refer you to the surgeons in clinic to treat the channel itself, because otherwise these often come back. There are several options and they’ll go through them with you.",
    "dom": "tasks",
    "why": "Analgesia and routine referral for definitive care"
   },
   {
    "who": "pt",
    "text": "Is there anything I can do so it doesn’t happen again?"
   },
   {
    "who": "dr",
    "text": "Keeping the area clean and dry helps, and many people remove the hair around the crease, although the evidence for that is limited. Breaking up long spells of sitting may help too. For work, you can self-certify for the first week and I can give you a fit note after that if you need it. Please don’t drive if the pain stops you from driving safely.",
    "dom": "gs",
    "why": "Prevention advice without blame; work and driving"
   },
   {
    "who": "pt",
    "text": "That’s useful, thanks."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If the redness spreads, you get a fever or shivers, or you feel unwell before you’re seen, ring 111 or go to A&E. So, what’s the plan in your own words?",
    "dom": "gs",
    "why": "Specific safety-net and teach-back"
   },
   {
    "who": "pt",
    "text": "Get it drained today, painkillers, then the surgeons for the channel. Come back if it spreads or I get a fever."
   },
   {
    "who": "dr",
    "text": "Exactly right. I’ll see you after the drainage to check the wound and make the clinic referral.",
    "dom": "gs",
    "why": "Follow-up plan"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; noticed he could not sit and let him describe the swelling and past discharge.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Desk job and driving for work, impact on daily life, embarrassment.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the previous on-off discharge as the clue to an underlying sinus.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (an abscess), concern (embarrassment and recurrence), expectation (to have it sorted).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Chaperone offered; observations; inspection of the cleft for pits, fluctuance and cellulitis; perianal area checked.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Pilonidal abscess versus perianal abscess or fistula, hidradenitis suppurativa and an infected cyst.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for spreading cellulitis, fever and systemic illness, and for diabetes or immunosuppression (NICE NG253 if unwell).",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named an acute pilonidal abscess on a chronic pilonidal sinus.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day incision and drainage; analgesia; no antibiotics without cellulitis or systemic features (NICE NG141 if needed).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Routine surgical referral for the sinus once settled; hygiene and hair advice; work and driving addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Clear safety-net for spreading redness or fever; teach-back; review after drainage.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Jordan Reilly",
    "age": "26 years · male",
    "pmh": [
     "No relevant history recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "No recent consultations.",
    "reason": "“Painful swelling at the top of my bum, leaking. Can’t sit down.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Let him describe the swelling and the past discharge. Notice he cannot sit."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Site relative to the anus, bowel symptoms, fever, lumps elsewhere, diabetes or immunosuppression, allergy."
    },
    {
     "t": "5–6",
     "h": "Context and ICE",
     "d": "Work and driving; name the embarrassment and the fear of recurrence."
    },
    {
     "t": "6–7",
     "h": "Examine",
     "d": "Chaperone, observations, pits, fluctuance, cellulitis, perianal area."
    },
    {
     "t": "7–12",
     "h": "Explain and plan",
     "d": "Pilonidal abscess; drainage today, not antibiotics alone; analgesia; later surgical referral; prevention; fit note; safety-net and teach-back."
    }
   ],
   "wordPics": {
    "fail": "Gives a course of antibiotics and sends him home; does not examine or check observations; misses the underlying sinus; no plan for definitive care.",
    "pass": "Recognises a pilonidal abscess, examines with a chaperone, arranges drainage, gives analgesia, refers for the sinus later and safety-nets.",
    "exc": "All of the above, plus: uses the history of on-off discharge to explain the sinus; distinguishes it from a perianal abscess by site and bowel symptoms; explains clearly why antibiotics are not the treatment; handles embarrassment warmly; covers work and driving; checks the plan by teach-back."
   },
   "avoid": [
    {
     "dont": "“Take these antibiotics and it should settle.”",
     "instead": "“Pus needs to be let out. Antibiotics alone won’t clear it, so I’m arranging for it to be drained today.”",
     "why": "An undrained abscess does not resolve on antibiotics and delays relief."
    },
    {
     "dont": "“It’s because you’re overweight and hairy.”",
     "instead": "“It forms around trapped hairs in the crease. Keeping the area clean, dry and free of hair may help stop it coming back.”",
     "why": "Blaming language damages rapport; the same advice can be given neutrally."
    },
    {
     "dont": "“Once it’s drained, that’s it.”",
     "instead": "“Drainage treats the abscess. The channel underneath often causes more trouble, so I’ll refer you to have that treated.”",
     "why": "Recurrence after drainage alone is common, so definitive care needs planning."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work",
     "t": "Sitting and driving are both painful. He can self-certify for up to 7 days; a fit note can cover the period after drainage or surgery."
    },
    {
     "h": "Embarrassment",
     "t": "Many people delay seeking help for problems near the buttocks. Normalise it and offer a chaperone."
    }
   ],
   "legal": [
    {
     "h": "Driving",
     "t": "No DVLA notification is needed. Advise him not to drive while pain or strong analgesia affects his ability to control the vehicle, including an emergency stop."
    },
    {
     "h": "Intimate examination",
     "t": "GMC guidance on intimate examinations: explain, gain consent, offer a chaperone and record who was present."
    }
   ],
   "professional": [
    {
     "h": "Antimicrobial stewardship",
     "t": "Prescribing antibiotics instead of drainage is poor care and adds to resistance. Record why antibiotics were or were not given (NICE NG141)."
    },
    {
     "h": "Scope of practice",
     "t": "Drain in primary care only if competent, equipped and the abscess is suitable; otherwise refer to same-day surgical assessment."
    }
   ],
   "community": [
    {
     "h": "Wound care",
     "t": "After drainage the wound is usually packed or dressed; practice or community nurses often continue the dressings."
    },
    {
     "h": "Referral routes",
     "t": "Local same-day emergency care (SDEC) or on-call surgical team for drainage; routine general or colorectal surgical clinic for the sinus."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Spreading cellulitis around the abscess",
     "Fever, rigors, tachycardia or feeling very unwell (NICE NG253)",
     "Diabetes or immunosuppression",
     "Swelling near the anal verge or pain on defecation, suggesting a perianal abscess or fistula"
    ],
    "psychosocial": [
     "Desk work and driving for work",
     "Embarrassment about the site",
     "Worry about recurrence"
    ],
    "ice": [
     "Idea: some kind of abscess",
     "Concern: embarrassment and it coming back",
     "Expectation: to have it sorted"
    ]
   },
   "diagnosis": "“This is a pilonidal abscess: an infected pocket at the top of the buttock crease, sitting on a small channel that has been there a while.”",
   "diagnosisLay": "“Hairs get trapped in the skin of the crease and form a little tunnel. That explains the on-off leaking. Now it has become infected and filled with pus, which is why it hurts so much.”",
   "management": {
    "reflectIce": "“You said it’s embarrassing and you don’t want it back. It’s very common, and the plan deals with both today’s abscess and the channel underneath.”",
    "psychosocial": "Offer a chaperone, avoid blaming language about weight or hair, and cover work and driving.",
    "sharedPlan": [
     "Same-day incision and drainage via the surgical team (or in primary care only if competent and suitable)",
     "Paracetamol and ibuprofen at BNF doses; antibiotics only for spreading cellulitis or systemic features (NICE NG141)",
     "Routine general or colorectal surgical referral for the sinus once settled; hygiene and hair advice"
    ],
    "safetyNet": [
     "Spreading redness, fever, rigors or feeling unwell: 111 or A&E the same day",
     "Review after drainage to check the wound and make the surgical referral",
     "Return if discharge or swelling recurs"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Cellulitis",
    "s": "Management protocol · NICE NG141",
    "href": "management/cellulitis.html"
   },
   {
    "ic": "🗺️",
    "t": "Subcutaneous lumps",
    "s": "Visual algorithm · cysts and abscesses",
    "href": "algorithms/subcutaneous-lumps.html"
   },
   {
    "ic": "🗺️",
    "t": "Anal lumps",
    "s": "Visual algorithm · perianal differentials",
    "href": "algorithms/anal-lumps.html"
   },
   {
    "ic": "🗺️",
    "t": "Anal pain",
    "s": "Visual algorithm · abscess and fistula",
    "href": "algorithms/anal-pain.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is about one clear decision: an abscess needs draining. Candidates lose marks by prescribing antibiotics alone, by not examining, and by forgetting the sinus that caused it.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Treating the abscess with antibiotics alone.",
     "why": "A collection of pus needs incision and drainage (ESCP 2024, international); antibiotics are for spreading cellulitis or systemic features.",
     "fix": "Arrange same-day drainage and explain why."
    },
    {
     "dom": "tasks",
     "fail": "Not examining, or not checking observations.",
     "why": "Fluctuance, cellulitis, the pits and systemic signs decide the plan and the urgency.",
     "fix": "Offer a chaperone, check observations and inspect the cleft and perianal area."
    },
    {
     "dom": "tasks",
     "fail": "Missing the underlying sinus.",
     "why": "The history of on-off discharge shows a chronic sinus; drainage alone often leads to recurrence.",
     "fix": "Refer for definitive treatment once the abscess settles."
    },
    {
     "dom": "tasks",
     "fail": "Calling it a perianal abscess.",
     "why": "A perianal abscess or fistula lies near the anal verge and has a different surgical pathway.",
     "fix": "Ask about site and bowel symptoms and examine the perianal area."
    },
    {
     "dom": "rto",
     "fail": "Blaming his weight or body hair.",
     "why": "He already feels embarrassed; blame closes the conversation.",
     "fix": "Normalise it and give prevention advice neutrally."
    },
    {
     "dom": "gs",
     "fail": "Vague safety-net with no plan for work.",
     "why": "He cannot sit or drive, and infection can spread.",
     "fix": "Name spreading redness and fever, cover self-certification and driving, and book review."
    }
   ]
  }
 },
 "precocious-puberty": {
  "stem": {
   "name": "Maya Carrick",
   "age": "6-year-old girl",
   "pmh": [
    "No relevant history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "No recent consultations recorded.",
   "reason": "Booked by her mother: “Worried she’s developing too early.”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG12 (updated April 2026) Suspected cancer: recognition and referral (updated April 2026) · [2] Endocrine Society clinical practice guideline on central precocious puberty (2026) (international) · [3] MHRA Drug Safety Update (January 2023): topical testosterone and harm to children from accidental exposure · [4] BNFC: gonadorelin analogues · [5] RCPCH UK-WHO growth charts · [6] DfE Working Together to Safeguard Children (2023)",
   "summary": "Breast development and pubic hair with a growth spurt in a 6-year-old girl is precocious puberty until proved otherwise. The GP’s job is a focused history and examination, prompt referral to paediatric endocrinology, and clear, calm support for the parent and child.",
   "points": [
    {
     "h": "Definition",
     "t": "Signs of puberty before 8 years in girls or 9 years in boys. The first sign is usually breast development in girls and testicular enlargement in boys. Accelerated growth alongside pubertal signs suggests progressive puberty rather than a benign variant."
    },
    {
     "h": "Central, peripheral or a variant",
     "t": "Central (gonadotrophin-dependent): early activation of the normal axis, usually idiopathic in girls; CNS causes such as tumours or hydrocephalus are commoner in boys. Peripheral (gonadotrophin-independent): ovarian or adrenal sources, congenital adrenal hyperplasia, McCune-Albright syndrome or exogenous sex hormones. Benign variants: premature thelarche (isolated breast development, no growth spurt) and premature adrenarche (pubic or axillary hair and body odour only). Having both breast development and pubic hair with a growth spurt is not an isolated variant."
    },
    {
     "h": "History and examination",
     "t": "Onset and progression, growth, headaches, visual symptoms, vomiting, behaviour change, vaginal bleeding, and exposure to hormone creams or gels in the household (MHRA [3]: accidental transfer of testosterone gel). Plot height and weight on the RCPCH UK-WHO chart [5] with any previous measurements and parental heights. Pubertal staging with a parent present; document it and do not photograph. Check for café-au-lait patches, abdominal masses, blood pressure, fundi, visual fields and neurological signs."
    },
    {
     "h": "NICE NG12 (updated April 2026) and urgent features",
     "t": "NICE NG12 (updated April 2026) [1]: consider a very urgent referral (within 48 hours) for a child with newly abnormal cerebellar or other central neurological function. Signs of raised intracranial pressure need same-day assessment. Virilisation in a girl, rapid progression, or vaginal bleeding without breast development also need urgent specialist advice."
    },
    {
     "h": "Refer",
     "t": "Refer every child with suspected precocious puberty to paediatric endocrinology. Specialists arrange bone age, LH, FSH and oestradiol, sometimes a GnRH stimulation test, pelvic ultrasound, and brain MRI where indicated; the Endocrine Society 2026 [2] (international) suggests MRI need not be routine in girls aged 6–8 without neurological findings, which is a specialist decision. Do not delay referral waiting for GP blood tests."
    },
    {
     "h": "Treatment and support",
     "t": "Central precocious puberty that is progressing may be treated with a GnRH analogue (BNFC [4]) to pause puberty, protect adult height and allow age-appropriate development; doses follow the specialist. Early puberty can bring teasing, distress and vulnerability; unexplained vaginal bleeding or signs of harm need safeguarding consideration [6]."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Morgan. Hi Maya. (to mother) What’s been worrying you?",
    "dom": "rto",
    "why": "Greets parent and child"
   },
   {
    "who": "pt",
    "text": "Doctor, I’m worried about Maya. She’s only six but over the last few months she’s started developing little breasts and I’ve noticed some pubic hair, and she seems to have shot up in height. Isn’t she far too young for all this? Is something wrong?"
   },
   {
    "who": "dr",
    "text": "You’re right to bring her in. Those changes are earlier than expected at six, so I’ll ask some questions, examine her with you here, and then explain what happens next.",
    "dom": "gs",
    "why": "Validates concern and sets agenda"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Which came first, the breasts or the hair, and has it been getting more noticeable month by month?",
    "dom": "tasks",
    "why": "Sequence and progression"
   },
   {
    "who": "pt",
    "text": "The breasts first I think, then the hair. It’s definitely more obvious now."
   },
   {
    "who": "dr",
    "text": "You said she’s shot up. Is she growing out of clothes faster than usual?",
    "dom": "tasks",
    "why": "Growth acceleration"
   },
   {
    "who": "pt",
    "text": "Yes, a lot faster."
   },
   {
    "who": "dr",
    "text": "Has Maya had any headaches, problems with her eyesight, being sick, clumsiness, or changes in her behaviour?",
    "dom": "tasks",
    "why": "CNS symptoms (NICE NG12 (updated April 2026))"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Any bleeding from the vagina, spots, or a stronger body odour?",
    "dom": "tasks",
    "why": "Menarche, androgen signs"
   },
   {
    "who": "pt",
    "text": "No bleeding. I’m not sure about the smell."
   },
   {
    "who": "dr",
    "text": "Does anyone at home use hormone creams, gels or patches, for example testosterone or HRT? Children can pick it up from skin contact.",
    "dom": "tasks",
    "why": "Exogenous hormone exposure (MHRA DSU January 2023)"
   },
   {
    "who": "pt",
    "text": "Not that I know of."
   },
   {
    "who": "dr",
    "text": "Is Maya on any medicines, and has she had any illnesses or head injuries in the past?",
    "dom": "tasks",
    "why": "Past history and medication"
   },
   {
    "who": "pt",
    "text": "No, she’s always been healthy."
   },
   {
    "phase": "ICE and the child",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What has been going through your mind about what might be causing this?",
    "dom": "rto",
    "why": "Ideas"
   },
   {
    "who": "pt",
    "text": "I’ve been reading online. I’m scared it’s a tumour."
   },
   {
    "who": "dr",
    "text": "That’s a very understandable fear, and I’ll come back to it. Maya, has anyone said anything about your body at school?",
    "dom": "rto",
    "why": "Concern named; includes the child"
   },
   {
    "who": "pt",
    "text": "(Maya shakes her head.) (Mother) She hasn’t mentioned anything."
   },
   {
    "phase": "Examination",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’d like to measure and weigh Maya, check her tummy, eyes and nerves, look at her skin, and look briefly at her chest and the pubic area, with you here. Maya, is that okay? (Measures height and weight and plots them; asks about previous measurements in the red book; checks blood pressure, skin for café-au-lait patches, abdomen, fundi, visual fields and neurological examination; assesses pubertal stage with mother present, recording findings without photographs.) I’ve plotted her height and I’ll compare it with the earlier red book measurements for the specialists. She has early breast development and some pubic hair, and her nerve and eye examination is normal.",
    "dom": "tasks",
    "why": "Growth plotting, pubertal staging with consent, neuro and skin examination"
   },
   {
    "phase": "Explanation",
    "clock": "8–10 min",
    "who": "dr",
    "text": "This is called precocious puberty, which means puberty starting early. In girls the most common reason is that the body’s puberty switch has simply turned on too soon, without any serious cause. Occasionally there is a cause in the brain or in the hormone glands, and that’s why specialists check carefully. Her nerves and eyes are normal today, which is reassuring.",
    "dom": "tasks",
    "why": "Names the condition and addresses tumour fear honestly"
   },
   {
    "who": "pt",
    "text": "Why does it matter if it’s early?"
   },
   {
    "who": "dr",
    "text": "Three reasons. Early puberty makes the bones mature faster, so she could end up shorter as an adult. It can be hard for a young child emotionally. And we want to be sure there’s no underlying cause.",
    "dom": "tasks",
    "why": "Why assessment matters"
   },
   {
    "who": "pt",
    "text": "So what happens now?"
   },
   {
    "who": "dr",
    "text": "I’ll refer her to the children’s hormone specialists. They usually do an X-ray of the hand to check bone age, blood tests, sometimes an ultrasound or a brain scan. If needed there is a treatment that pauses puberty until a more usual age.",
    "dom": "tasks",
    "why": "Paediatric endocrinology referral and what to expect"
   },
   {
    "phase": "Safety-net and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "Please bring her back straight away if she gets headaches, especially in the morning, vomiting, problems with her eyes, clumsiness or any bleeding. Can you tell me what you’ll look out for while we wait?",
    "dom": "gs",
    "why": "NICE NG12 (updated April 2026)-linked safety-net and teach-back"
   },
   {
    "who": "pt",
    "text": "Headaches, being sick, eyesight, clumsiness or bleeding, and come straight back."
   },
   {
    "who": "dr",
    "text": "That’s right. I’ll send the referral today and see you both in a few weeks, or sooner if you’re worried. Keep answering Maya’s questions simply and honestly.",
    "dom": "gs",
    "why": "Follow-up and support for the child"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; greeted Maya and her mother; let the mother describe the changes.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Maya’s experience at school and how the family is coping.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the growth spurt and the mother’s fear of a tumour.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (too young), concern (a tumour), expectation (an explanation and help).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Height and weight plotted with previous measurements; pubertal staging with parent present, no photographs; BP, skin, abdomen, fundi, fields, neurology.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Central versus peripheral precocious puberty versus premature thelarche or adrenarche.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about headaches, visual symptoms, vomiting, behaviour change and bleeding; NICE NG12 (updated April 2026) 48-hour route for new neurology.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named precocious puberty, not an isolated benign variant.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Paediatric endocrinology referral without waiting for GP bloods; explained bone age, tests and GnRH analogue treatment (BNFC).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Exogenous hormones asked about (MHRA DSU January 2023); emotional impact on Maya considered.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Neurological safety-net; teach-back; review in a few weeks.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Maya Carrick",
    "age": "6 years · female",
    "pmh": [
     "No relevant history recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "No recent consultations.",
    "reason": "Mother: “Worried she’s developing too early.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Greet both. Let the mother list the changes."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Sequence and progression, growth, CNS symptoms, bleeding, body odour, hormone creams at home, past history."
    },
    {
     "t": "5–6",
     "h": "ICE and the child",
     "d": "Name the fear of a tumour; ask Maya about school."
    },
    {
     "t": "6–8",
     "h": "Examine",
     "d": "Plot growth; staging with parent present; BP, skin, abdomen, fundi, fields, neurology."
    },
    {
     "t": "8–12",
     "h": "Explain, refer, close",
     "d": "Precocious puberty; why it matters; paediatric endocrinology; what tests to expect; safety-net; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Reassures that some girls develop early and does not refer; does not plot growth or examine; misses asking about headaches or hormone creams.",
    "pass": "Recognises precocious puberty, takes a focused history, examines and plots growth, and refers to paediatric endocrinology with a safety-net.",
    "exc": "All of the above, plus: addresses the fear of a tumour honestly; explains central, peripheral and benign patterns in plain words; asks about hormone gels at home; includes Maya; explains why height matters; teaches back the neurological warning signs."
   },
   "avoid": [
    {
     "dont": "“Some girls just develop early, let’s wait and see.”",
     "instead": "“At six this is earlier than expected, so I’m referring her to the children’s hormone team.”",
     "why": "Breast development with pubic hair and a growth spurt at 6 needs specialist assessment."
    },
    {
     "dont": "“It’s probably a tumour, so we need a scan.”",
     "instead": "“In girls it’s usually the puberty switch turning on early. The specialists check carefully for rarer causes.”",
     "why": "Honest, calibrated information avoids needless fear."
    },
    {
     "dont": "“I’ll do some blood tests first and then decide.”",
     "instead": "“I’ll refer now. The specialists will do the right tests.”",
     "why": "Random GP hormone tests should not delay referral."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "School and peers",
     "t": "Early development can lead to teasing and distress. Talk with the family about what to tell Maya and, if they wish, the school nurse."
    },
    {
     "h": "Practical preparation",
     "t": "If periods are possible, age-appropriate preparation helps her feel less frightened."
    }
   ],
   "legal": [
    {
     "h": "Consent and dignity",
     "t": "Examine the child’s body only with the parent present and the child’s agreement. Document staging; do not photograph intimate areas (GMC)."
    },
    {
     "h": "Safeguarding",
     "t": "Vaginal bleeding without breast development, or signs of harm, need safeguarding consideration (Working Together to Safeguard Children 2023)."
    }
   ],
   "professional": [
    {
     "h": "Calibrated reassurance",
     "t": "Explain that idiopathic central puberty is common in girls without promising there is no cause."
    },
    {
     "h": "Referral letter",
     "t": "Include the sequence of changes, growth measurements, parental heights if known, examination findings and any hormone exposure."
    }
   ],
   "community": [
    {
     "h": "Red book and school nurse",
     "t": "Previous height records help calculate growth velocity."
    },
    {
     "h": "Shared care",
     "t": "If GnRH analogue treatment starts, practices often administer injections under a shared-care agreement."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Headache, vomiting, visual disturbance or new neurological signs (NICE NG12 (updated April 2026): consider 48-hour referral; same day if raised ICP)",
     "Rapid progression",
     "Virilisation in a girl",
     "Vaginal bleeding without breast development",
     "Abdominal mass or café-au-lait patches",
     "Exposure to hormone creams or gels"
    ],
    "psychosocial": [
     "The child’s understanding and experience at school",
     "Parental anxiety",
     "Vulnerability of a child who looks older"
    ],
    "ice": [
     "Idea: she is far too young",
     "Concern: a tumour",
     "Expectation: an explanation and help"
    ]
   },
   "diagnosis": "“This is precocious puberty, meaning puberty has started early. In girls it usually has no serious cause, but it needs a specialist assessment.”",
   "diagnosisLay": "“The body has a switch in the brain that turns puberty on. In Maya it seems to have switched on a few years early. Specialists will check why, and whether to pause it.”",
   "management": {
    "reflectIce": "“You were scared about a tumour. In girls that’s uncommon, her nerves and eyes are normal today, and the specialists will check carefully.”",
    "psychosocial": "Include Maya; explain simply; consider school and emotional impact.",
    "sharedPlan": [
     "Plot growth and record pubertal stage",
     "Refer to paediatric endocrinology now; no need to wait for GP bloods",
     "Explain likely tests (bone age, hormones, imaging if indicated) and GnRH analogue treatment (BNFC)"
    ],
    "safetyNet": [
     "Headaches, vomiting, visual change, clumsiness: return urgently (NICE NG12 (updated April 2026))",
     "Any vaginal bleeding: contact the practice",
     "Review in a few weeks while awaiting the appointment"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Precocious puberty",
    "s": "Management protocol · NICE NG12 (updated April 2026)",
    "href": "management/precocious-puberty.html"
   },
   {
    "ic": "🗺️",
    "t": "Short stature",
    "s": "Visual algorithm · growth charts",
    "href": "algorithms/short-stature.html"
   },
   {
    "ic": "📋",
    "t": "Safeguarding",
    "s": "Case walkthrough",
    "href": "../cases/safeguarding.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by false reassurance or by frightening the parent. The marks are for recognising the threshold, examining properly, referring promptly, and explaining calmly.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Watchful waiting in primary care.",
     "why": "Pubertal signs before 8 in a girl, with a growth spurt, need specialist assessment.",
     "fix": "Refer to paediatric endocrinology."
    },
    {
     "dom": "tasks",
     "fail": "Not plotting growth.",
     "why": "Growth acceleration separates progressive puberty from benign variants.",
     "fix": "Measure, plot and use previous records."
    },
    {
     "dom": "tasks",
     "fail": "Skipping neurological questions and examination.",
     "why": "NICE NG12 (updated April 2026): new central neurological signs in a child warrant a very urgent (48-hour) referral.",
     "fix": "Ask about headache, vomiting and vision; examine fundi, fields and neurology."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting exogenous hormones.",
     "why": "Accidental transfer of testosterone or other hormone gels causes early puberty (MHRA DSU January 2023).",
     "fix": "Ask about hormone products in the household."
    },
    {
     "dom": "rto",
     "fail": "Leaving the tumour fear unaddressed or feeding it.",
     "why": "The mother’s fear drives the consultation.",
     "fix": "Name it and give calibrated information."
    },
    {
     "dom": "rto",
     "fail": "Talking over the child.",
     "why": "Maya is present and may be anxious or teased.",
     "fix": "Include her, gain her agreement to examination and explain simply."
    }
   ]
  }
 },
 "premature-ejaculation": {
  "stem": {
   "name": "Ravi Anand",
   "age": "28-year-old man",
   "pmh": [
    "No past medical history given in the case: check the record"
   ],
   "meds": [
    "Not specified in the case: check the repeat record"
   ],
   "allergy": "None recorded",
   "recent": "No recent consultations recorded in the case.",
   "reason": "Booked “for antidepressants to feel better”."
  },
  "knowledge": {
   "guideline": "[1] EAU Guidelines on Sexual and Reproductive Health (2024, international) · [2] ISSM definition of premature ejaculation, Serefoglu et al., J Sex Med 2014 (international) · [3] BNF: dapoxetine; lidocaine with prilocaine · [4] NICE NG222 Depression in adults (2022, updated December 2025) · [5] BSSM guidelines on the management of erectile dysfunction (Hackett et al., 2018)",
   "summary": "A request for antidepressants can hide a sexual problem. Here the real agenda is premature ejaculation causing distress and relationship strain. Make it safe to talk, then confirm PE against the ISSM definition, classify lifelong versus acquired (acquired needs a cause looked for), and check for erectile dysfunction, which is treated first if present. Screen mood properly rather than prescribing for ‘feeling low’. Offer behavioural techniques, a topical anaesthetic spray and, if wanted, on-demand dapoxetine or an off-label daily SSRI, with partner involvement and psychosexual therapy where relationship or anxiety factors dominate.",
   "points": [
    {
     "h": "Definition",
     "t": "ISSM [2]: lifelong PE is ejaculation that always or nearly always occurs before or within about 1 minute of vaginal penetration; acquired PE is a clinically significant, bothersome reduction in latency, often to about 3 minutes or less. Both need an inability to delay on all or nearly all occasions and negative personal consequences such as distress or avoidance. The EAU [1] also describes variable and subjective PE, which are managed mainly with reassurance and education."
    },
    {
     "h": "Acquired PE",
     "t": "Look for a cause [1]: erectile dysfunction, performance anxiety or relationship problems, prostatitis, hyperthyroidism, and drug use or withdrawal. Treat the cause first. Examine the genitals and check blood pressure; thyroid function where features suggest it."
    },
    {
     "h": "Erectile dysfunction",
     "t": "ED commonly coexists. Rushing to ejaculate for fear of losing the erection can drive PE, so treat ED first with a PDE5 inhibitor and cardiovascular risk assessment [1,5]; PE may then improve."
    },
    {
     "h": "Mood",
     "t": "He booked for antidepressants. Assess depression properly (NG222 [4]), including risk. If he has depression needing an SSRI, a daily SSRI may also delay ejaculation; dapoxetine must not be combined with another SSRI or serotonergic drug [3]."
    },
    {
     "h": "Treatment",
     "t": "Behavioural techniques (stop-start, squeeze) with his partner, and psychosexual therapy for anxiety or relationship factors; combining behavioural and drug treatment is more effective than either alone [1]. Topical lidocaine with prilocaine spray, licensed for lifelong PE, applied before intercourse, dose per BNF [3]; excess is wiped off to avoid numbness in the partner. Dapoxetine, licensed for men aged 18–64: 30 mg 1–3 hours before sex, no more than once in 24 hours; check for orthostatic hypotension first and avoid alcohol [3]. Daily SSRIs are off-label."
    },
    {
     "h": "Follow-up",
     "t": "Review response and side effects within weeks; re-screen mood; refer to psychosexual services if treatment fails or relationship factors dominate."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and hidden agenda",
    "clock": "0–2 min",
    "who": "dr",
    "text": "Hello Mr Anand, I’m Dr Evans. What can I do for you today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "So… I said I wanted some antidepressants to feel better, and I have been a bit down. But honestly, that’s not really why I’m here. It’s… this is embarrassing. I finish way too quickly when I’m with my girlfriend, almost straight away, and it’s killing my confidence and causing arguments. I didn’t know how to bring it up."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That took courage, and it’s something doctors help with often. It’s common and it’s treatable. Shall we look at it properly, and I’ll come back to how you’ve been feeling in yourself too?",
    "dom": "rto",
    "why": "Normalises; agrees both agendas"
   },
   {
    "who": "pt",
    "text": "Yes. Thanks."
   },
   {
    "phase": "Sexual history",
    "clock": "2–5 min",
    "who": "dr",
    "text": "When you say straight away, roughly how long is it from penetration until you ejaculate? And does it happen every time?",
    "dom": "tasks",
    "why": "Latency and consistency: ISSM definition"
   },
   {
    "who": "pt",
    "text": "Almost straight away. Nearly every time."
   },
   {
    "who": "dr",
    "text": "Has it always been this way since you first had sex, or is it a change from how things used to be?",
    "dom": "tasks",
    "why": "Lifelong versus acquired"
   },
   {
    "who": "pt",
    "text": "I’m not sure. It’s been a problem for a while."
   },
   {
    "who": "dr",
    "text": "That’s fine. It helps to know because if it has changed, we look for a cause. How are your erections: firm enough, and do they last?",
    "dom": "tasks",
    "why": "Screens coexisting ED"
   },
   {
    "who": "pt",
    "text": "They’re fine. It’s just the finishing."
   },
   {
    "who": "dr",
    "text": "Any pain in the pelvis or when ejaculating, burning when you pass urine, or discharge? Any weight loss, shaking, palpitations or feeling hot all the time?",
    "dom": "tasks",
    "why": "Prostatitis and hyperthyroidism as causes of acquired PE"
   },
   {
    "who": "pt",
    "text": "No, none of that."
   },
   {
    "who": "dr",
    "text": "Any medicines, recreational drugs or alcohol that I should know about?",
    "dom": "tasks",
    "why": "Drug causes"
   },
   {
    "who": "pt",
    "text": "Nothing really."
   },
   {
    "phase": "Mood and relationship",
    "clock": "5–7 min",
    "who": "dr",
    "text": "You said you’ve been a bit down. How much of that is this problem, and how much is there on its own? How are sleep, energy and enjoyment? Have you had any thoughts of harming yourself?",
    "dom": "tasks",
    "why": "Depression screen and risk (NG222)"
   },
   {
    "who": "pt",
    "text": "It’s mostly this. I’m worried about it all the time. No, nothing like harming myself."
   },
   {
    "who": "dr",
    "text": "How is it affecting things with your girlfriend? Does she know you’re here?",
    "dom": "rto",
    "why": "Relationship impact; partner involvement"
   },
   {
    "who": "pt",
    "text": "We argue about it. I haven’t told her I was coming."
   },
   {
    "who": "dr",
    "text": "What were you hoping I could do? And what worries you most?",
    "dom": "rto",
    "why": "ICE"
   },
   {
    "who": "pt",
    "text": "I thought maybe tablets. I’m worried she’ll leave, and I just want to feel normal."
   },
   {
    "phase": "Examination",
    "clock": "7–8 min",
    "who": "dr",
    "text": "I’d like to check your blood pressure and, with a chaperone, briefly examine your genitals to make sure there’s nothing physical. Is that okay?",
    "dom": "tasks",
    "why": "Offers examination with chaperone and consent"
   },
   {
    "who": "dr",
    "text": "Everything looks normal.",
    "dom": "tasks",
    "why": "Normal examination reassures"
   },
   {
    "phase": "Explanation and options",
    "clock": "8–11 min",
    "who": "dr",
    "text": "This is premature ejaculation. It’s one of the commonest sexual problems in men. Anxiety makes it worse, and it makes anxiety worse, which is the cycle you’re in. The low mood sounds mainly driven by this, so I don’t think a daily antidepressant just for feeling low is the answer today.",
    "dom": "tasks",
    "why": "Names the diagnosis; addresses the stated request honestly"
   },
   {
    "who": "dr",
    "text": "There are three kinds of help, and they work best together. First, techniques: the stop-start and squeeze methods, ideally practised with your girlfriend. I’ll give you written instructions. Second, a numbing spray for the tip of the penis a few minutes before sex; wipe off any excess so she doesn’t feel numb.",
    "dom": "tasks",
    "why": "Behavioural techniques and topical anaesthetic"
   },
   {
    "who": "dr",
    "text": "Third, a tablet called dapoxetine, taken one to three hours before sex. It’s related to antidepressants but short-acting and made for this. It can cause dizziness or fainting, so I’d check your blood pressure standing up, and you’d avoid alcohol with it. Some men take a daily antidepressant instead, which is off-licence.",
    "dom": "tasks",
    "why": "Dapoxetine with safety checks; daily SSRI off-label"
   },
   {
    "who": "pt",
    "text": "I think I’ll try the techniques and the spray first. Maybe the tablet later."
   },
   {
    "who": "dr",
    "text": "That’s a sensible start. If the worry or the relationship tension is a big part of it, a psychosexual therapist can help you both. Would you consider telling your girlfriend? It often takes the pressure off.",
    "dom": "rto",
    "why": "Respects his choice; psychosexual therapy; partner involvement"
   },
   {
    "who": "pt",
    "text": "Yes. I think it would help if she knew it’s a medical thing."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Let’s review in about four weeks to see how it’s going and check your mood again. If your mood gets worse, or you have any thoughts of harming yourself, contact us straight away. What will you take away from today?",
    "dom": "gs",
    "why": "Review, mood safety-net, teach-back"
   },
   {
    "who": "pt",
    "text": "It’s common and treatable. Stop-start and squeeze, the spray before sex, maybe the tablet later, talk to my girlfriend, and come back in a month."
   },
   {
    "who": "dr",
    "text": "That’s it. Well done for bringing it up.",
    "dom": "rto",
    "why": "Positive close"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; notices the shift from “antidepressants” to the real concern and makes it safe.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Relationship strain, arguments, confidence; whether his girlfriend knows.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up the embarrassment and the stated request as a cover for the real problem.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (tablets), concern (girlfriend may leave; feeling abnormal), expectation (antidepressants).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Blood pressure and genital examination with chaperone and consent; thyroid function only if acquired or features.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "PE versus ED, prostatitis, hyperthyroidism, drug causes; lifelong versus acquired; depression.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Depression and suicide risk screened; ED excluded before treating PE.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Premature ejaculation named, with the anxiety cycle explained.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Behavioural techniques, topical spray, dapoxetine with orthostatic and alcohol advice; his choice respected.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "No SSRI for ‘feeling low’ without depression; interaction rule with other SSRIs; psychosexual therapy and partner involvement.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review in about four weeks; mood safety-net; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Ravi Anand",
    "age": "28 years · male",
    "pmh": [
     "Not stated in the case"
    ],
    "meds": [
     "Check repeat record"
    ],
    "allergy": "None recorded",
    "recent": "No recent consultations recorded.",
    "reason": "“Antidepressants to feel better.”"
   },
   "timeMap": [
    {
     "t": "0–2",
     "h": "Open",
     "d": "Notice the hesitancy; make it safe; agree both agendas."
    },
    {
     "t": "2–5",
     "h": "Sexual history",
     "d": "Latency, consistency, lifelong or acquired, erections, prostatitis and thyroid symptoms, drugs."
    },
    {
     "t": "5–8",
     "h": "Mood, ICE, examination",
     "d": "Depression and risk; relationship; hopes and fears. BP and genital examination with chaperone."
    },
    {
     "t": "8–11",
     "h": "Explain and options",
     "d": "Name PE and the anxiety cycle; techniques, spray, dapoxetine with safety checks; his choice; psychosexual therapy; partner."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "Review in four weeks; mood safety-net; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes an antidepressant for low mood without exploring why he came; shows embarrassment; does not ask about erections; prescribes dapoxetine alongside another SSRI or without safety advice.",
    "pass": "Surfaces the real concern sensitively, classifies PE, checks for ED, screens mood, and offers behavioural, topical and drug options with follow-up.",
    "exc": "All of the above, plus: uses the ISSM definition and explains why lifelong versus acquired matters; addresses the antidepressant request honestly; gives dapoxetine’s orthostatic and alcohol precautions; combines treatments and involves the partner; offers psychosexual therapy; safety-nets mood."
   },
   "avoid": [
    {
     "dont": "“Let’s start you on an antidepressant and see how you feel.”",
     "instead": "“Your low mood sounds driven by this problem, so let’s treat the problem itself.”",
     "why": "Prescribing for the cover story misses the real issue."
    },
    {
     "dont": "“Just try to think about something else during sex.”",
     "instead": "“The stop-start and squeeze methods are proven techniques, and I’ll give you instructions.”",
     "why": "Distraction advice is unhelpful and dismissive."
    },
    {
     "dont": "“Take the tablet whenever you need it.”",
     "instead": "“Take it one to three hours before sex, no more than once a day, and avoid alcohol with it.”",
     "why": "Dapoxetine carries a risk of syncope; BNF dosing limits apply."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Relationship",
     "t": "PE commonly causes relationship strain. Involving the partner improves outcomes and reduces blame."
    },
    {
     "h": "Confidence",
     "t": "Performance anxiety can generalise to avoidance of intimacy and low self-esteem."
    }
   ],
   "legal": [
    {
     "h": "Chaperone and consent",
     "t": "GMC guidance on intimate examinations and chaperones: explain why the examination is needed, get consent, and offer a chaperone, recording the discussion."
    }
   ],
   "professional": [
    {
     "h": "Hidden agenda",
     "t": "Patients often present a more acceptable reason first. Responding to cues rather than the stated request is core consulting skill."
    },
    {
     "h": "Off-label prescribing",
     "t": "Daily SSRIs for PE are off-label: explain this and record the discussion."
    }
   ],
   "community": [
    {
     "h": "Psychosexual therapy",
     "t": "NHS psychosexual services and accredited sexual and relationship therapists offer couple or individual work."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Suicidal thoughts or significant depression",
     "Pelvic pain, dysuria or discharge: prostatitis or STI",
     "Weight loss, tremor, palpitations: hyperthyroidism",
     "New neurological symptoms",
     "Coexisting ED: cardiovascular risk"
    ],
    "psychosocial": [
     "Relationship arguments",
     "Low confidence and anxiety",
     "Girlfriend unaware of the appointment"
    ],
    "ice": [
     "Idea: tablets might help",
     "Concern: girlfriend may leave; feeling abnormal",
     "Expectation: antidepressants"
    ]
   },
   "diagnosis": "“This is premature ejaculation, and anxiety about it is keeping the problem going.”",
   "diagnosisLay": "“Ejaculation is a reflex. When you’re anxious, the reflex fires sooner, which makes you more anxious next time. The techniques, spray and tablet all help retrain or slow that reflex.”",
   "management": {
    "reflectIce": "“You came asking for antidepressants. What you really need is treatment for this, and I think your mood will lift with it.”",
    "psychosocial": "Encourage partner involvement; psychosexual therapy if anxiety or relationship factors dominate.",
    "sharedPlan": [
     "Stop-start and squeeze techniques with written instructions",
     "Topical lidocaine with prilocaine spray, dose per BNF",
     "Dapoxetine 30 mg 1–3 hours before sex if chosen, after orthostatic check; no alcohol",
     "Treat ED first if present",
     "Psychosexual therapy; review in about four weeks"
    ],
    "safetyNet": [
     "Worsening mood or thoughts of self-harm: contact the practice urgently",
     "Dizziness or fainting with dapoxetine: stop and seek review"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Premature ejaculation",
    "s": "Protocol · EAU, ISSM, dapoxetine",
    "href": "management/premature-ejaculation.html"
   },
   {
    "ic": "💠",
    "t": "Erectile dysfunction",
    "s": "Treat ED first",
    "href": "management/erectile-dysfunction.html"
   },
   {
    "ic": "💠",
    "t": "Depression",
    "s": "NG222 · assessment and risk",
    "href": "management/depression.html"
   },
   {
    "ic": "💠",
    "t": "Prostatitis",
    "s": "Cause of acquired PE",
    "href": "management/prostatitis.html"
   }
  ],
  "pitfalls": {
   "intro": "The case hinges on the hidden agenda. Marks go to picking up the cue, classifying PE, checking for ED and mood, and offering real treatment instead of an antidepressant for ‘feeling low’.",
   "items": [
    {
     "dom": "rto",
     "fail": "Taking the antidepressant request at face value.",
     "why": "The real concern is missed.",
     "fix": "Respond to his hesitancy and invite the real issue."
    },
    {
     "dom": "rto",
     "fail": "Appearing embarrassed or rushing.",
     "why": "He will stop disclosing.",
     "fix": "Normalise, use plain language and take a matter-of-fact history."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about erections.",
     "why": "ED is common, drives PE and is treated first.",
     "fix": "Ask directly and treat ED first if present."
    },
    {
     "dom": "tasks",
     "fail": "Not classifying lifelong versus acquired.",
     "why": "Acquired PE needs a cause looked for.",
     "fix": "Ask when it started; screen prostatitis, thyroid and drugs."
    },
    {
     "dom": "tasks",
     "fail": "Dapoxetine without precautions.",
     "why": "Syncope risk; interaction with SSRIs; alcohol.",
     "fix": "Orthostatic check, BNF dosing, no other serotonergic drugs, avoid alcohol."
    },
    {
     "dom": "gs",
     "fail": "No mood follow-up.",
     "why": "He reported low mood; risk must be reviewed.",
     "fix": "Screen risk now and review in about four weeks."
    }
   ]
  }
 },
 "recurrent-epistaxis": {
  "stem": {
   "name": "Walter Penn",
   "age": "68-year-old man",
   "pmh": [
    "Hypertension",
    "Atrial fibrillation — anticoagulated with apixaban"
   ],
   "meds": [
    "Apixaban (“blood thinner”) — for atrial fibrillation",
    "Amlodipine — for hypertension"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "No previous consultations about nosebleeds recorded.",
   "reason": "Several nosebleeds over the past few weeks; the latest took about twenty minutes to stop."
  },
  "knowledge": {
   "guideline": "[1] BNF — anticoagulants (warfarin INR monitoring; DOACs) and chlorhexidine with neomycin nasal cream · [2] NICE NG136 (hypertension in adults) · [3] Curaçao criteria for hereditary haemorrhagic telangiectasia (Shovlin et al., 2000, international) · [4] Second international HHT guidelines (Faughnan et al., Ann Intern Med 2020, international)",
   "summary": "Most recurrent nosebleeds come from Little’s area at the front of the septum and are benign, but anticoagulation makes them last longer. Teach first aid properly, review the anticoagulant and blood pressure without stopping the anticoagulant on impulse, treat a visible anterior vessel, and know when to send to hospital. Keep one-sided bleeding with obstruction, and HHT, in mind.",
   "points": [
    {
     "h": "First aid done properly",
     "t": "Sit up and lean forward, mouth open. Pinch the soft, fleshy part of the nose (not the bony bridge) firmly and continuously for 10–15 minutes without letting go to check. Spit out blood rather than swallow it. A cold pack on the bridge may help. Afterwards avoid blowing, picking, straining, heavy lifting and hot drinks for a day or so."
    },
    {
     "h": "Where it comes from",
     "t": "The large majority arise anteriorly from Little’s area. Triggers include dryness, picking, trauma and colds. Posterior bleeds are more likely in older people, those on anticoagulants and those with hypertension: blood pouring down the throat, bleeding from both nostrils, or no visible anterior source."
    },
    {
     "h": "Send to hospital",
     "t": "Same-day emergency care (999 if unwell) if bleeding continues despite 10–15 minutes of correct pressure repeated once, is heavy or posterior, or there are signs of shock: pallor, sweating, dizziness, faintness, fast pulse, low blood pressure. A low threshold applies when anticoagulated."
    },
    {
     "h": "Review the anticoagulant, don’t just stop it",
     "t": "Check the indication and whether it is still needed, the dose against current weight and renal function (DOACs), interacting drugs (antiplatelets, NSAIDs), and INR if on warfarin [1]. Stopping or pausing an anticoagulant is a shared decision with the prescriber or specialist, weighed against stroke or clot risk."
    },
    {
     "h": "Blood pressure",
     "t": "Measure BP. Hypertension is associated with epistaxis severity; optimise control per NICE NG136 [2]. A very high reading during a bleed may partly reflect distress; recheck."
    },
    {
     "h": "Primary-care treatment",
     "t": "If a bleeding point is visible anteriorly and the clinician is trained, silver nitrate cautery to one side of the septum. Chlorhexidine with neomycin nasal cream reduces crusting and re-bleeding (dose per BNF [1]). Refer to ENT when bleeds keep recurring despite this, or no source is seen."
    },
    {
     "h": "Red flags for another cause",
     "t": "Persistent one-sided bleeding with nasal obstruction, blood-stained discharge, facial pain or swelling, or a visible mass: refer urgently to ENT to exclude a sinonasal tumour. Easy bruising or other bleeding: FBC and clotting. HHT: recurrent spontaneous nosebleeds, telangiectasia on lips, tongue or fingers, and a first-degree relative with HHT [3][4]."
    },
    {
     "h": "Prevention",
     "t": "Treat dryness (saline spray, a thin smear of petroleum jelly or emollient inside the nostril, humidifying the room), stop picking and forceful blowing, and address contributing medicines such as NSAIDs."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, Mr Penn, I’m Dr Clarke. What can I do for you today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "I keep getting nosebleeds, doctor. Several over the past few weeks. The last one was a real worry, it wouldn’t stop for a good twenty minutes and there was a fair bit of blood. I’m on a blood thinner, apixaban, for my irregular heartbeat — atrial fibrillation — and I take tablets for blood pressure. Should I be concerned?"
   },
   {
    "who": "dr",
    "text": "That sounds frightening, especially the last one. I’d like to ask a few questions, look in your nose and check your blood pressure, then we’ll make a plan together. First, are you bleeding at all now, and do you feel faint or dizzy?",
    "dom": "tasks",
    "why": "Checks for active bleeding and shock first"
   },
   {
    "who": "pt",
    "text": "No, it’s stopped. I feel fine now."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When it bleeds, does it come from one side or both? And does blood run down the back of your throat?",
    "dom": "tasks",
    "why": "Anterior versus posterior; side"
   },
   {
    "who": "pt",
    "text": "Both sides at different times. Some went down my throat, but I had my head back."
   },
   {
    "who": "dr",
    "text": "What did you do to stop it?",
    "dom": "tasks",
    "why": "Checks current first-aid technique"
   },
   {
    "who": "pt",
    "text": "I tipped my head back and held the top of my nose. I kept letting go to see if it had stopped."
   },
   {
    "who": "dr",
    "text": "Do you ever feel your nose blocked on one side, get blood-stained discharge, or pain or swelling in your face?",
    "dom": "tasks",
    "why": "Screens for sinonasal tumour"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Any bleeding elsewhere, like your gums, bruising easily, or blood in your urine or stools? And do you or anyone in your family have small red spots on the lips or fingers, or a family history of nosebleeds?",
    "dom": "tasks",
    "why": "Bleeding tendency and HHT screen"
   },
   {
    "who": "pt",
    "text": "No. Nothing like that in the family either."
   },
   {
    "who": "dr",
    "text": "Which blood thinner are you on? Is it warfarin with INR checks, or one of the newer ones? And do you take aspirin or anti-inflammatory painkillers as well?",
    "dom": "tasks",
    "why": "Identifies anticoagulant type and interacting drugs"
   },
   {
    "who": "pt",
    "text": "Apixaban — the one without the blood tests. It’s for my atrial fibrillation. Nothing else on top."
   },
   {
    "who": "dr",
    "text": "That’s fine, I’ll look on your record. Have the bleeds made you stop taking it, or miss any doses?",
    "dom": "tasks",
    "why": "Checks for unsafe self-discontinuation"
   },
   {
    "who": "pt",
    "text": "No, I’ve kept taking it. I didn’t know if I should."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What’s been going through your mind about these bleeds?",
    "dom": "rto",
    "why": "Explores ideas and concerns"
   },
   {
    "who": "pt",
    "text": "I worry it means something’s wrong inside. And with the thinners, I worry one day it won’t stop."
   },
   {
    "who": "dr",
    "text": "Those are sensible worries. What were you hoping we’d do today?",
    "dom": "rto",
    "why": "Elicits expectations"
   },
   {
    "who": "pt",
    "text": "Just to know whether I should worry, and how to stop them."
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me check your pulse and blood pressure, then look inside the front of your nose with a light … There’s no bleeding right now. I’m looking for a small blood vessel at the front of the middle wall of the nose, which is where most nosebleeds come from.",
    "dom": "tasks",
    "why": "Observations and anterior rhinoscopy"
   },
   {
    "who": "pt",
    "text": "So is it serious?"
   },
   {
    "who": "dr",
    "text": "Most nosebleeds, even on blood thinners, come from that area at the front and aren’t dangerous. The thinner doesn’t cause them, but it makes them last longer. So the plan is to stop them happening, stop them faster when they do, and check your medicines and blood pressure.",
    "dom": "tasks",
    "why": "Explains anterior source and anticoagulant effect proportionately"
   },
   {
    "who": "pt",
    "text": "That’s a relief."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The first thing is first aid, because the way most people are taught is wrong. Sit up and lean forward, not back. Pinch the soft part of your nose, here below the bone, firmly for a full 10 to 15 minutes by the clock, without letting go to check. Spit out any blood. Could you show me how you’d do it?",
    "dom": "tasks",
    "why": "Teaches correct first aid and checks by demonstration"
   },
   {
    "who": "pt",
    "text": "Like this? Lean forward, pinch here, don’t let go."
   },
   {
    "who": "dr",
    "text": "Perfect. If it’s still bleeding after that, do it once more. If it won’t stop after that second go, or blood pours down your throat, or you feel faint or sweaty, go to A&E, and call 999 if you feel unwell. On a blood thinner we don’t wait around.",
    "dom": "tasks",
    "why": "Escalation criteria in plain language"
   },
   {
    "who": "pt",
    "text": "Should I stop the blood thinner?"
   },
   {
    "who": "dr",
    "text": "Please don’t stop it yourself. It protects you from something serious. I’ll review why you’re on it — your atrial fibrillation — and check the apixaban dose against your age, kidney tests and weight; it doesn’t need INR checks like warfarin. If we need to change anything, I’ll discuss it with whoever looks after your heart.",
    "dom": "tasks",
    "why": "Anticoagulant review without unsafe discontinuation"
   },
   {
    "who": "pt",
    "text": "Okay. And my blood pressure?"
   },
   {
    "who": "dr",
    "text": "I’ll use today’s reading and a few home readings to see if it needs adjusting, because higher pressure can make bleeds worse. For the recurrences, if I can see a vessel at the front I can seal it with a special stick, and an antiseptic cream inside the nostril helps it heal. Keep the inside of your nose moist with saline spray or a smear of petroleum jelly, and avoid picking or blowing hard. If they carry on despite that, I’ll refer you to the ENT team.",
    "dom": "tasks",
    "why": "BP, cautery, nasal cream, prevention and ENT referral"
   },
   {
    "who": "pt",
    "text": "That all sounds sensible."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Come back sooner if the bleeds become one-sided with a blocked nose, you notice bruising or bleeding elsewhere, or they keep coming despite all this. I’ll see you in two weeks with your blood pressure readings and results. Can you tell me the plan in your own words?",
    "dom": "gs",
    "why": "Red flags, follow-up and teach-back"
   },
   {
    "who": "pt",
    "text": "Lean forward, pinch the soft bit for 15 minutes without peeking, A&E if it won’t stop or I feel faint. Keep taking the thinner. Cream and saline, and back in two weeks."
   },
   {
    "who": "dr",
    "text": "That’s exactly right. You were right to take it seriously.",
    "dom": "rto",
    "why": "Confirms and validates"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; checked straight away for active bleeding and faintness; let him describe the twenty-minute bleed.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Worry about the blood thinner and whether he should keep taking it; how the bleeds affect him.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “wouldn’t stop for twenty minutes” and blood down the throat as possible severity markers; corrected the head-back technique.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (something wrong inside), concern (a bleed that won’t stop on thinners), expectation (whether to worry, how to stop them).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Pulse and BP; anterior rhinoscopy for a bleeding point; FBC and renal function (apixaban dosing) as indicated; INR only if on warfarin.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Anterior Little’s area bleed versus posterior bleed, anticoagulant effect, hypertension, bleeding disorder, HHT, sinonasal tumour.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened shock, one-sided obstruction or discharge, bleeding elsewhere and HHT features.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Recurrent anterior epistaxis made more prolonged by anticoagulation, with hypertension as a contributor.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Correct first aid taught and demonstrated; escalation criteria; cautery and antiseptic cream; prevention; ENT if recurrent.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Anticoagulant reviewed (indication, dose, INR if warfarin, interactions) without advising him to stop; BP optimisation per NICE NG136.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "A&E or 999 for uncontrolled bleeding or faintness; return for one-sided symptoms or bleeding elsewhere; review in two weeks; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Long-term conditions & cancer",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Walter Penn",
    "age": "68 years · male",
    "pmh": [
     "Hypertension",
     "Atrial fibrillation on apixaban"
    ],
    "meds": [
     "Apixaban (atrial fibrillation)",
     "Amlodipine (hypertension)"
    ],
    "allergy": "NKDA",
    "recent": "No previous nosebleed consultations.",
    "reason": "“Several nosebleeds; the last took twenty minutes to stop. I’m on blood thinners. Should I be concerned?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Opening",
     "d": "Open question, then check he is not bleeding or faint now."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Side, blood down the throat, current first-aid technique, one-sided obstruction, bleeding elsewhere, HHT, which anticoagulant, antiplatelets or NSAIDs, missed doses."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Fear something is wrong inside and that a bleed won’t stop."
    },
    {
     "t": "6–8",
     "h": "Examine and explain",
     "d": "Pulse, BP, anterior rhinoscopy; most bleeds are anterior; thinners prolong, don’t cause."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Teach and check first aid, escalation, anticoagulant and BP review, cautery or cream, prevention, ENT if recurrent, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Tells him to stop his anticoagulant; never corrects the head-back, bony-bridge technique; no criteria for when to go to hospital; ignores his blood pressure.",
    "pass": "Teaches correct first aid, reviews the anticoagulant and BP, gives clear A&E criteria, and offers cream or cautery with ENT referral if bleeds recur.",
    "exc": "All of the above, plus: asks him to demonstrate the technique; checks for one-sided obstruction, bleeding elsewhere and HHT; identifies the anticoagulant, INR if warfarin, and interacting drugs; reassures proportionately about his fear; uses teach-back."
   },
   "avoid": [
    {
     "dont": "“Stop your blood thinner until the nosebleeds settle.”",
     "instead": "“Please keep taking it. I’ll review it and discuss any change with your heart team.”",
     "why": "Stopping an anticoagulant without review exposes him to stroke or clot risk."
    },
    {
     "dont": "“Tip your head back and pinch the top of your nose.”",
     "instead": "“Lean forward and pinch the soft part for a full 10 to 15 minutes without letting go.”",
     "why": "Head-back and bony-bridge pinching are ineffective and make him swallow blood."
    },
    {
     "dont": "“Come back if it happens again.”",
     "instead": "“If it won’t stop after two rounds of proper pressure, runs down your throat, or you feel faint, go to A&E.”",
     "why": "Vague safety-netting leaves an anticoagulated man without escalation criteria."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Living alone or with support",
     "t": "Ask who is around if a big bleed happens and whether he could get to A&E. Anxiety about bleeds can make people stop medicines secretly."
    },
    {
     "h": "Home environment",
     "t": "Central heating and dry air worsen crusting; simple humidification and nasal moisturisers help."
    }
   ],
   "legal": [
    {
     "h": "Shared prescribing",
     "t": "If a specialist started the anticoagulant, changes should be agreed with them. Document the discussion, the bleeding history and the risk-benefit reasoning."
    },
    {
     "h": "Consent for cautery",
     "t": "GMC Decision making and consent (2020): explain benefits and risks of nasal cautery (discomfort, rarely septal perforation with repeated bilateral cautery) before proceeding."
    }
   ],
   "professional": [
    {
     "h": "Medicines review",
     "t": "Recurrent bleeding on an anticoagulant is a trigger for a structured medication review: indication, dose, renal function, interactions, adherence."
    },
    {
     "h": "Competence",
     "t": "Only perform cautery if trained and the bleeding point is visible; otherwise refer to ENT."
    }
   ],
   "community": [
    {
     "h": "Pharmacy and anticoagulation services",
     "t": "Community pharmacists can check for interacting over-the-counter medicines such as NSAIDs; anticoagulation clinics manage INR if on warfarin."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Bleeding not controlled by two rounds of correct pressure",
     "Posterior bleed: blood down the throat, both nostrils, no anterior source",
     "Faintness, pallor, sweating, fast pulse (shock)",
     "Persistent one-sided bleeding with nasal obstruction, discharge, facial pain or mass (sinonasal tumour)",
     "Bleeding elsewhere or easy bruising; telangiectasia or family history (HHT)"
    ],
    "psychosocial": [
     "Fear that a bleed on thinners won’t stop",
     "Uncertainty about whether to keep taking the anticoagulant",
     "Who is at home to help"
    ],
    "ice": [
     "Idea: something is wrong inside",
     "Concern: a bleed that won’t stop on blood thinners",
     "Expectation: to know whether to worry and how to stop them"
    ]
   },
   "diagnosis": "“These are recurrent nosebleeds from the front of the nose. Your blood thinner makes them last longer, and blood pressure may add to it, but they’re usually not a sign of something sinister.”",
   "diagnosisLay": "“Just inside the front of the nose there’s a spot where lots of tiny blood vessels meet, close to the surface. When the lining dries and cracks, one breaks. The blood thinner doesn’t cause the crack, it just slows the plug forming, so pressing properly for long enough gives it time to seal.”",
   "management": {
    "reflectIce": "“You were worried this means something serious inside and that a bleed might not stop. Most come from the front of the nose and aren’t dangerous, and I’ll give you the exact steps and the exact point to go to hospital.”",
    "psychosocial": "Correct the technique by demonstration; reassure that continuing the anticoagulant is right while it is reviewed; check he could get help quickly.",
    "sharedPlan": [
     "Correct first aid, demonstrated back",
     "Anticoagulant review: indication, dose, renal function, INR if warfarin, interacting drugs; no self-stopping",
     "BP check and home readings; optimise per NICE NG136",
     "Cautery if a visible anterior vessel and trained; antiseptic nasal cream (per BNF); saline or petroleum jelly for dryness",
     "ENT referral if recurrent despite treatment"
    ],
    "safetyNet": [
     "A&E if not stopped after two rounds of 10–15 minutes’ pressure, blood pouring down the throat, or faintness; 999 if unwell",
     "Urgent review for one-sided obstruction, discharge or facial swelling, or bleeding elsewhere",
     "Review in two weeks with BP readings and results"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Epistaxis pathway",
    "s": "Visual algorithm · first aid and escalation",
    "href": "algorithms/epistaxis.html"
   },
   {
    "ic": "💠",
    "t": "Antiplatelets and anticoagulants",
    "s": "Protocol · bleeding and review",
    "href": "management/antiplatelets-anticoagulants.html"
   },
   {
    "ic": "💠",
    "t": "Hypertension protocol",
    "s": "NICE NG136 · targets and steps",
    "href": "management/hypertension.html"
   },
   {
    "ic": "🗺️",
    "t": "Nasal congestion pathway",
    "s": "One-sided obstruction red flags",
    "href": "algorithms/nasal-congestion.html"
   }
  ],
  "pitfalls": {
   "intro": "The dangerous mistakes here are stopping the anticoagulant, leaving poor first aid uncorrected, and giving no clear point to go to hospital.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Advising him to stop or pause the anticoagulant.",
     "why": "The bleeding is usually anterior and manageable; stopping exposes him to stroke or clot risk.",
     "fix": "Keep taking it; review indication, dose, renal function, INR if warfarin and interactions; agree any change with the prescriber."
    },
    {
     "dom": "tasks",
     "fail": "Describing first aid without checking what he actually does.",
     "why": "He tips his head back and lets go to check, which is why bleeds last.",
     "fix": "Ask him to show you, then correct it: lean forward, soft part, 10–15 minutes by the clock."
    },
    {
     "dom": "tasks",
     "fail": "No escalation criteria.",
     "why": "An anticoagulated man with a prolonged bleed needs a clear threshold for A&E.",
     "fix": "Two rounds of correct pressure, blood down the throat, or faintness means A&E; 999 if unwell."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about one-sided obstruction, bleeding elsewhere or HHT features.",
     "why": "These change the diagnosis to sinonasal tumour, a bleeding disorder or HHT.",
     "fix": "Three quick questions and a look at the lips and fingers."
    },
    {
     "dom": "rto",
     "fail": "“Nosebleeds are nothing to worry about.”",
     "why": "He had a frightening bleed; brisk reassurance ignores his concern.",
     "fix": "Acknowledge the fear, then explain why most are anterior and what makes them safer."
    },
    {
     "dom": "gs",
     "fail": "Ending without a check that he understood the technique or the plan.",
     "why": "Non-specific closure is common failing feedback.",
     "fix": "Teach-back of first aid, the A&E trigger and the follow-up date."
    }
   ]
  }
 },
 "teen-substance-misuse": {
  "stem": {
   "name": "Kai",
   "age": "15-year-old boy",
   "pmh": [
    "No past medical history given in the case: check the record"
   ],
   "meds": [
    "Not specified in the case: check the repeat record"
   ],
   "allergy": "None recorded",
   "recent": "A friend’s mother found vapes and some pills in his bag. He has attended reluctantly.",
   "reason": "“It’s no big deal, everyone does it. You won’t tell my parents, right?”"
  },
  "knowledge": {
   "guideline": "[1] GMC 0–18 years: guidance for all doctors (2007, updated 2018) · [2] NICE NG64 Drug misuse prevention: targeted interventions (2017) · [3] HM Government Working Together to Safeguard Children (2023) · [4] Home Office Criminal exploitation of children and vulnerable adults: county lines guidance (2018) · [5] NICE NG225 Self-harm: assessment, management and preventing recurrence (2022) · [6] Gillick v West Norfolk and Wisbech AHA (1985)",
   "summary": "A 15-year-old caught with vapes and unknown pills needs an adolescent consultation, not a lecture. Explain confidentiality honestly at the start, see him on his own, and use a HEADSS framework to understand his life and his use. Screen actively for exploitation (county lines, debt, older suppliers), abuse, self-harm and dependence. Assess and record his competence. Give honest harm-reduction information, offer a confidential young people’s substance service, encourage a trusted adult, and share information without consent only when there is a risk of serious harm, telling him first where safe.",
   "points": [
    {
     "h": "Confidentiality",
     "t": "Young people are owed the same duty of confidentiality as adults [1]. Information can be shared without consent where it is needed to protect the young person or others from a risk of serious harm, such as abuse or exploitation [1,3]. Say this at the start rather than promising secrecy, and tell him before sharing unless that would increase the risk."
    },
    {
     "h": "Competence",
     "t": "A young person under 16 can consent to advice and treatment if they understand what is involved (Gillick competence [6]). Assess and record it. Encourage involvement of parents or another trusted adult, but do not make it a condition of help [1]."
    },
    {
     "h": "HEADSS",
     "t": "Home, Education or employment, Activities, Drugs (what, how much, how often, route, where, who with, how it is paid for; alcohol, vaping and tobacco), Sexuality and relationships, Suicide, self-harm, mood and Safety. It places substance use in the context of his whole life and uncovers risk."
    },
    {
     "h": "Exploitation and safeguarding",
     "t": "County lines guidance [4]: warning signs include unexplained money, phones or clothes, older ‘friends’, going missing, being asked to carry or sell, and owing money. Also consider abuse, neglect and sexual exploitation. Act through the practice safeguarding lead and local children’s social care where there is a concern [3]."
    },
    {
     "h": "Harm reduction",
     "t": "Pills bought illicitly may not contain what the seller claims: UK public health alerts have described counterfeit benzodiazepine tablets containing potent synthetic opioids (nitazenes). Advise against using alone or mixing with alcohol or other drugs, and to call 999 if someone cannot be woken. Sale of vapes to under-18s is illegal in the UK and unregulated vapes may contain other substances. Screen mood and self-harm [5]."
    },
    {
     "h": "Targeted support",
     "t": "NG64 [2] recommends assessing vulnerability to drug misuse during routine GP contacts and offering targeted support, such as referral to specialist young people’s services, for those at risk or already experimenting. Arrange follow-up rather than a single conversation."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and confidentiality",
    "clock": "0–2 min",
    "who": "dr",
    "text": "Hi Kai, I’m Dr Morgan. Thanks for coming in, even though it sounds like it wasn’t your idea. I’m not here to tell you off. I’d like to hear your side.",
    "dom": "rto",
    "why": "Acknowledges reluctance; non-judgemental opening"
   },
   {
    "who": "pt",
    "text": "My mate’s mum found some vapes and a few pills in my bag and made a massive deal of it. Honestly, it’s nothing. Everyone at school does it. You’re not going to tell my parents or get me in trouble, are you?"
   },
   {
    "who": "dr",
    "text": "Fair question, so I’ll be straight with you. What you tell me stays between us, and I won’t ring your parents after you leave. The one exception is if I’m worried that you or someone else is at risk of serious harm. Then I might need to involve other people to keep you safe, and I’d talk to you first. Does that make sense?",
    "dom": "rto",
    "why": "Honest confidentiality with its limit, stated before disclosure"
   },
   {
    "who": "pt",
    "text": "I suppose."
   },
   {
    "phase": "HEADSS",
    "clock": "2–6 min",
    "who": "dr",
    "text": "Can I get a picture of your life generally first? How are things at home?",
    "dom": "tasks",
    "why": "HEADSS: Home"
   },
   {
    "who": "pt",
    "text": "Fine. Normal."
   },
   {
    "who": "dr",
    "text": "And school: how’s it going, and what do you do outside school, who do you hang around with?",
    "dom": "tasks",
    "why": "Education and Activities"
   },
   {
    "who": "pt",
    "text": "School’s all right. I just hang out with my mates."
   },
   {
    "who": "dr",
    "text": "Tell me about the vapes and the pills. How often do you vape? And the pills: do you know what they are?",
    "dom": "tasks",
    "why": "Drugs: what and how often"
   },
   {
    "who": "pt",
    "text": "I vape most days, like everyone. The pills were just something going round. I don’t really know what they are."
   },
   {
    "who": "dr",
    "text": "Have you taken any? How many, how often, and with anything else, like alcohol or weed?",
    "dom": "tasks",
    "why": "Frequency, amount, poly-substance use"
   },
   {
    "who": "pt",
    "text": "Only a couple of times. Maybe with a drink."
   },
   {
    "who": "dr",
    "text": "Where do they come from, and how are they paid for? Has anyone older given them to you, asked you to carry or sell things, or said you owe them?",
    "dom": "tasks",
    "why": "Actively screens criminal exploitation and debt (county lines)"
   },
   {
    "who": "pt",
    "text": "No. It’s not like that."
   },
   {
    "who": "dr",
    "text": "Okay. If that ever changes, you can tell me and it won’t get you in trouble with me. Has anyone ever pressured you into anything sexual, or hurt you?",
    "dom": "tasks",
    "why": "Sexual exploitation and abuse screen"
   },
   {
    "who": "pt",
    "text": "No."
   },
   {
    "who": "dr",
    "text": "How has your mood been lately? Have you ever felt so low you’ve hurt yourself or thought about ending your life?",
    "dom": "tasks",
    "why": "Mood, self-harm and suicide (NG225)"
   },
   {
    "who": "pt",
    "text": "No, I’m all right."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "6–7 min",
    "who": "dr",
    "text": "What do you make of it all? What’s the bit that worries you most about today?",
    "dom": "rto",
    "why": "Explores his perspective"
   },
   {
    "who": "pt",
    "text": "That it turns into a massive thing and my parents find out. I don’t think it’s a big deal."
   },
   {
    "phase": "Harm reduction",
    "clock": "7–10 min",
    "who": "dr",
    "text": "Thanks for being honest, that helps. Can I tell you a couple of facts, and you decide what you do with them?",
    "dom": "rto",
    "why": "Asks permission; motivational rather than lecturing"
   },
   {
    "who": "pt",
    "text": "Go on."
   },
   {
    "who": "dr",
    "text": "The pills are the part that worries me. When pills aren’t from a pharmacy, nobody knows what’s in them. Some fake tablets sold as things like Xanax in the UK have turned out to contain very strong opioids, and young people have died. So if you’re ever around them: don’t take them alone, don’t mix them with drink, and if a friend can’t be woken, call 999 straight away.",
    "dom": "tasks",
    "why": "Honest, specific harm reduction without scare tactics"
   },
   {
    "who": "dr",
    "text": "With vaping, the ones sold to under-18s aren’t legal, so they’re not checked, and some have had other things in them. What would you want to change, if anything?",
    "dom": "tasks",
    "why": "Vaping information; elicits his goals"
   },
   {
    "who": "pt",
    "text": "Maybe the pills. I didn’t know that about them. The vaping’s fine."
   },
   {
    "who": "dr",
    "text": "That’s a good call. There’s a young people’s service locally that’s confidential and doesn’t lecture. I can refer you, or give you the details to contact them yourself. Which would you prefer?",
    "dom": "tasks",
    "why": "Offers youth substance service; his choice"
   },
   {
    "who": "pt",
    "text": "Give me the details. I’ll think about it."
   },
   {
    "phase": "Competence, trusted adult and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "You’ve clearly understood what we’ve talked about, so you can make these decisions with me. Is there an adult you trust who you could talk to about this? I won’t tell your parents, but having someone on your side helps.",
    "dom": "tasks",
    "why": "Gillick competence assessed and recorded; encourages a trusted adult without coercion"
   },
   {
    "who": "pt",
    "text": "Maybe. I’ll see."
   },
   {
    "who": "dr",
    "text": "Fair enough. Come back and see me in a couple of weeks, just to catch up. Before then, if you feel really low, if anyone pressures you or says you owe them, or if something goes wrong after taking something, get help straight away: call 999 in an emergency, or come to us. Can you tell me the main things you’ll take away?",
    "dom": "gs",
    "why": "Follow-up; safety-net for mood, exploitation and overdose; teach-back"
   },
   {
    "who": "pt",
    "text": "Don’t take pills you don’t know, not on my own, not with drink. Call 999 if someone won’t wake up. Check out that service. Come back in two weeks."
   },
   {
    "who": "dr",
    "text": "Spot on. Thanks for talking to me, Kai. You’re not in trouble with me.",
    "dom": "rto",
    "why": "Ends on trust to keep the door open"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Acknowledges he was made to come; open, non-judgemental invitation to give his side.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "HEADSS: home, school, activities, friends, sexual relationships, mood and safety.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up “I don’t know what they are” and “maybe with a drink” as risk cues.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "His idea (no big deal), concern (parents told; trouble), expectation (secrecy).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "No examination needed; considers vital signs or examination only if he were intoxicated or unwell.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Experimental use versus regular or dependent use; linked mental health problems; exploitation.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Exploitation, debt, abuse, self-harm and suicide risk screened; overdose risk from unknown pills.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Occasional use of unknown pills and daily vaping, with no disclosed safeguarding concern today.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Honest harm reduction; young people’s substance service offered as his choice; trusted adult encouraged.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Confidentiality and its limit explained up front; Gillick competence assessed and recorded; safeguarding lead if concern emerges.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Follow-up in about two weeks; safety-net for low mood, exploitation and overdose; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Mental health & addiction",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Kai",
    "age": "15 years · male",
    "pmh": [
     "Not stated in the case"
    ],
    "meds": [
     "Check repeat record"
    ],
    "allergy": "None recorded",
    "recent": "Vapes and some pills found in his bag by a friend’s mother. Attends reluctantly.",
    "reason": "“You won’t tell my parents, right?”"
   },
   "timeMap": [
    {
     "t": "0–2",
     "h": "Open",
     "d": "Acknowledge reluctance; explain confidentiality and its limit before he discloses."
    },
    {
     "t": "2–6",
     "h": "HEADSS",
     "d": "Home, school, activities, then the vapes and pills: what, how often, with what, where from, how paid for. Exploitation, abuse, mood and self-harm."
    },
    {
     "t": "6–7",
     "h": "ICE",
     "d": "His view and his fear of his parents finding out."
    },
    {
     "t": "7–10",
     "h": "Harm reduction",
     "d": "Permission first; unknown pills and nitazenes; not alone, not with alcohol, 999; vapes; his own goals; youth service offered."
    },
    {
     "t": "10–12",
     "h": "Close",
     "d": "Competence recorded; trusted adult; review in two weeks; safety-net; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Lectures him about drugs; promises total secrecy, or says his parents must be told; never asks where the pills came from; misses mood and self-harm.",
    "pass": "Explains confidentiality honestly, takes a HEADSS history, screens exploitation and self-harm, gives harm-reduction advice and signposts a young people’s service.",
    "exc": "All of the above, plus: asks permission before giving information; gives specific, credible advice about counterfeit pills and overdose; lets him choose the next step; assesses and records competence; encourages a trusted adult without coercion; arranges follow-up to build the relationship."
   },
   "avoid": [
    {
     "dont": "“Don’t worry, nothing you say leaves this room.”",
     "instead": "“It stays between us unless I’m worried about serious harm, and then I’d talk to you first.”",
     "why": "Blanket secrecy cannot be kept and breaks trust later [GMC 0–18]."
    },
    {
     "dont": "“Drugs will ruin your life. You need to stop.”",
     "instead": "“Can I share a couple of facts, and you decide what to do with them?”",
     "why": "Lecturing disengages teenagers; motivational, honest information works better."
    },
    {
     "dont": "“I’ll have to let your parents know about this.”",
     "instead": "“Is there an adult you trust who you could talk to? I won’t tell them without your say-so unless you’re at serious risk.”",
     "why": "A competent 15-year-old is owed confidentiality; parents are involved by consent unless there is a risk of serious harm."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Peer and school context",
     "t": "Normalisation (“everyone does it”) is common. School and friendship pressures shape use; education staff may be part of support if he agrees."
    },
    {
     "h": "Family",
     "t": "Involving a trusted adult improves safety, but the choice of whom rests with him unless there is a safeguarding need."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality and Gillick",
     "t": "Gillick competence allows a young person under 16 to consent to advice and treatment. GMC 0–18 years guidance supports confidentiality, with disclosure where there is a risk of serious harm."
    },
    {
     "h": "Safeguarding",
     "t": "Working Together to Safeguard Children (2023): concerns about abuse or exploitation, including county lines, are referred to local children’s social care, usually via the practice safeguarding lead."
    },
    {
     "h": "Vapes",
     "t": "Selling nicotine vapes to under-18s is illegal in the UK."
    }
   ],
   "professional": [
    {
     "h": "Documentation",
     "t": "Record the competence assessment, the advice given, and the reasons for any decision to share or not share information."
    },
    {
     "h": "Seeking advice",
     "t": "If uncertain whether a concern meets the threshold, discuss with the practice safeguarding lead without delay."
    }
   ],
   "community": [
    {
     "h": "Young people’s substance services",
     "t": "Local young people’s drug and alcohol services are confidential and accept self-referral. School nurses and youth services can also support him."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Owing money, older suppliers, carrying or selling, unexplained cash or phones, going missing: criminal exploitation",
     "Sexual pressure or abuse",
     "Low mood, self-harm or suicidal thoughts (NG225)",
     "Unknown pills, use alone or with alcohol: overdose risk",
     "Daily or escalating use, withdrawal: dependence"
    ],
    "psychosocial": [
     "Peer normalisation",
     "Relationship with parents",
     "School and activities"
    ],
    "ice": [
     "Idea: no big deal, everyone does it",
     "Concern: parents told; getting into trouble",
     "Expectation: that it will be kept secret"
    ]
   },
   "diagnosis": "“Occasional use of unknown pills and regular vaping, with no safeguarding concern disclosed today, which needs harm reduction and follow-up.”",
   "diagnosisLay": "“The vaping is mainly a nicotine habit. The pills are the bigger risk: when they don’t come from a pharmacy, nobody knows what’s in them, so one bad batch can be dangerous.”",
   "management": {
    "reflectIce": "“You were worried I’d tell your parents. I won’t, unless I’m worried about serious harm, and I’d talk to you first.”",
    "psychosocial": "Keep the relationship; give him choices; encourage a trusted adult.",
    "sharedPlan": [
     "Confidentiality and its limit explained; competence recorded",
     "Harm reduction: unknown pills, not alone, not with alcohol, 999",
     "Vaping information",
     "Young people’s substance service details (NG64)",
     "Review in about two weeks"
    ],
    "safetyNet": [
     "Low mood, self-harm thoughts, pressure or debt: contact the practice or 999 in an emergency",
     "Someone unrousable after taking something: 999"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Safeguarding",
    "s": "Case walkthrough · thresholds and sharing",
    "href": "../cases/safeguarding.html"
   },
   {
    "ic": "📋",
    "t": "Drug dependence",
    "s": "Case walkthrough",
    "href": "../cases/drug-dependence.html"
   },
   {
    "ic": "💠",
    "t": "Alcohol and problem drinking",
    "s": "Screening and brief intervention",
    "href": "management/alcohol-problem-drinking.html"
   },
   {
    "ic": "💠",
    "t": "Smoking cessation",
    "s": "Nicotine and vaping",
    "href": "management/smoking-cessation.html"
   }
  ],
  "pitfalls": {
   "intro": "The marks sit in relating to a reluctant teenager: honest confidentiality, no lecture, and still asking the hard questions about exploitation and self-harm.",
   "items": [
    {
     "dom": "rto",
     "fail": "Promising total secrecy, or threatening to tell his parents.",
     "why": "Both are inaccurate and damage trust.",
     "fix": "State confidentiality and its serious-harm limit at the start."
    },
    {
     "dom": "rto",
     "fail": "Lecturing about drugs.",
     "why": "He disengages and stops disclosing.",
     "fix": "Ask permission, give specific facts, and ask what he wants to change."
    },
    {
     "dom": "tasks",
     "fail": "Not asking where the pills came from or whether he owes anyone.",
     "why": "County lines exploitation is easily missed.",
     "fix": "Ask about suppliers, carrying, selling and debt."
    },
    {
     "dom": "tasks",
     "fail": "Skipping mood and self-harm.",
     "why": "Substance use and self-harm often coexist.",
     "fix": "Ask directly and follow NG225 if positive."
    },
    {
     "dom": "tasks",
     "fail": "Vague harm reduction.",
     "why": "Generic warnings lack credibility.",
     "fix": "Explain counterfeit pills, not using alone or with alcohol, and calling 999."
    },
    {
     "dom": "gs",
     "fail": "Treating it as a one-off conversation.",
     "why": "Trust and change build over time.",
     "fix": "Offer a service and a review in about two weeks; record competence."
    }
   ]
  }
 },
 "tennis-elbow": {
  "stem": {
   "name": "Greg Holloway",
   "age": "46-year-old man",
   "pmh": [
    "No past medical history given in the case: check the record"
   ],
   "meds": [
    "Not specified in the case: check the repeat record"
   ],
   "allergy": "None recorded",
   "recent": "Pain on the outer side of the right elbow for a few weeks, no injury. Worse gripping, lifting the kettle and shaking hands. Does a lot of repetitive work with his hands.",
   "reason": "“What is it, and will it settle?”"
  },
  "knowledge": {
   "guideline": "[1] BESS patient care pathway: tennis elbow, Singh et al., Shoulder Elbow 2023 · [2] Coombes et al., JAMA 2013 · [3] Smidt et al., Lancet 2002 · [4] Ikonen et al., Clin Orthop Relat Res 2022 · [5] NICE HTG201 Extracorporeal shockwave therapy for refractory tennis elbow (2009) · [6] NICE HTG299 Autologous blood injection for tendinopathy (2013) · [7] BNF",
   "summary": "Lateral elbow pain after repetitive gripping, with tenderness at the lateral epicondyle and pain on resisted wrist extension, is tennis elbow (lateral elbow tendinopathy). It is a clinical diagnosis and imaging is not needed. Most people improve within a year. Explain the natural history, adjust load at work and home without stopping activity, and use progressive loading exercises through physiotherapy. Topical NSAIDs help short-term; a strap may help some. Corticosteroid injection gives short-term relief but worse outcomes at a year and more recurrence, and BESS advises against it. Reassess for neck, nerve or joint causes if atypical.",
   "points": [
    {
     "h": "Diagnosis",
     "t": "Pain and tenderness at or just distal to the lateral epicondyle, reproduced by gripping and resisted wrist or middle-finger extension. History and examination are enough; plain X-ray only if the diagnosis is uncertain, for example suspected fracture, arthritis or loose bodies [1]. Peak age is 45–54."
    },
    {
     "h": "Differential",
     "t": "Cervical radiculopathy (neck pain, arm paraesthesia, reflex or myotomal change), radial tunnel syndrome or posterior interosseous nerve entrapment (tenderness distal to the epicondyle; finger-drop weakness is urgent), elbow osteoarthritis or loose bodies (stiffness, locking), and inflammatory or septic arthritis (hot, swollen joint)."
    },
    {
     "h": "Natural history",
     "t": "In trials, about 89% of people given no active treatment reported improvement within the first year [4]. Wait-and-see achieved success in 83% at 52 weeks [3]. Recurrence is more likely with symptoms beyond 12 months, acute pain at onset, previous steroid injection and poor adherence [1]."
    },
    {
     "h": "First-line care",
     "t": "Education and load adjustment: reduce provoking gripping and lifting (palm-up lifting, thicker tool handles, spreading tasks) without complete rest. Physiotherapy with progressive extensor loading and stretching is strongly recommended [1]. A counterforce strap may be offered but may not help [1]. Topical NSAIDs relieve pain for up to about 4 weeks; oral NSAID evidence is conflicting; check risk and dose per BNF [7]."
    },
    {
     "h": "Injections",
     "t": "Corticosteroid injection gives short-term relief but worse longer-term outcomes. At one year, recovery was 83% with injection against 96% with placebo, and recurrence 54% against 12% [2]. Against physiotherapy, success at 52 weeks was 69% with injection versus 91% [3]. BESS advises against steroid injection and against autologous blood injection [1,6]."
    },
    {
     "h": "Refractory",
     "t": "If disabling symptoms persist after several months of well-done exercise-based care, review the diagnosis and refer to MSK or orthopaedic services. Shockwave therapy is available only with special arrangements for governance, consent and audit (NICE HTG201 [5]). Surgery is a secondary-care decision for a small minority."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Holloway, I’m Dr Shah. What’s brought you in?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "The outside of my right elbow’s been sore for a few weeks now. It really hurts when I grip things, lift the kettle, or even shake hands. I didn’t injure it; it just came on. I do a lot of repetitive work with my hands. What is it, and will it settle?"
   },
   {
    "who": "dr",
    "text": "Thanks, that’s a helpful description. I’ll ask a few questions and examine your elbow and neck, and then we’ll talk about what it is and how to get it better.",
    "dom": "rto",
    "why": "Acknowledges; signposts"
   },
   {
    "phase": "History",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Can you point to where it hurts most? Does the pain spread anywhere?",
    "dom": "tasks",
    "why": "Localises pain; radiation"
   },
   {
    "who": "pt",
    "text": "Just here on the outside bony bit. Sometimes a bit down the forearm."
   },
   {
    "who": "dr",
    "text": "Tell me about your work. What movements do you do most, and how is it coping?",
    "dom": "rto",
    "why": "Explores occupation and impact"
   },
   {
    "who": "pt",
    "text": "A lot of gripping and repetitive movements. It’s getting harder to do my job properly."
   },
   {
    "who": "dr",
    "text": "Any neck pain, or pins and needles, numbness or weakness in the arm or hand? Any trouble straightening your fingers?",
    "dom": "tasks",
    "why": "Cervical radiculopathy and posterior interosseous nerve screen"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Does the elbow swell, lock or catch, or get stiff so you can’t straighten it? Any fevers, or feeling unwell?",
    "dom": "tasks",
    "why": "Joint pathology, loose bodies, septic arthritis"
   },
   {
    "who": "pt",
    "text": "No. It’s just sore."
   },
   {
    "who": "dr",
    "text": "Any other joints painful or swollen, back stiffness in the mornings, or skin rashes like psoriasis?",
    "dom": "tasks",
    "why": "Inflammatory arthritis and enthesitis"
   },
   {
    "who": "pt",
    "text": "No."
   },
   {
    "who": "dr",
    "text": "What have you taken for it so far? Any stomach, kidney or heart problems?",
    "dom": "tasks",
    "why": "Analgesia and NSAID safety"
   },
   {
    "who": "pt",
    "text": "Nothing much. No problems like that."
   },
   {
    "phase": "Examination",
    "clock": "4–6 min",
    "who": "dr",
    "text": "I’ll check your neck and both elbows. … Your neck moves freely without bringing on arm symptoms. The elbow looks normal and moves fully. You’re tender just here on the outer bony point, and pushing your wrist back against my hand brings on the pain. Grip is painful but strong, and power, feeling and reflexes in the arm are normal.",
    "dom": "tasks",
    "why": "Neck, elbow, resisted extension, neurological examination"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "6–7 min",
    "who": "dr",
    "text": "What did you think it might be? And what worries you most?",
    "dom": "rto",
    "why": "Elicits ICE"
   },
   {
    "who": "pt",
    "text": "I thought it was the work. I’m worried about how long it’ll last and whether I can keep working."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "You’re right that the work has a lot to do with it. This is tennis elbow: the tendons that pull your wrist back attach to that bony point, and repeated gripping has overloaded them. It’s not serious and you don’t need an X-ray.",
    "dom": "tasks",
    "why": "Names diagnosis; links to load; no imaging"
   },
   {
    "who": "pt",
    "text": "How long will it take?"
   },
   {
    "who": "dr",
    "text": "Honestly, it can be slow. It usually takes months rather than weeks, but around nine in ten people have improved within a year, and exercises can help it along.",
    "dom": "tasks",
    "why": "Honest, sourced timescale"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "The key is managing the load, not resting it completely. Where you can, grip less tightly, lift with your palm facing up, use thicker handles, and break up repetitive tasks. I’ll refer you to physio for a programme of gradually strengthening exercises, which is the most helpful treatment.",
    "dom": "tasks",
    "why": "Load adjustment and physiotherapy loading programme"
   },
   {
    "who": "dr",
    "text": "An anti-inflammatory gel can ease the pain for the first few weeks. Some people find a forearm strap helps, though it doesn’t work for everyone.",
    "dom": "tasks",
    "why": "Topical NSAID and strap, with honest caveats"
   },
   {
    "who": "pt",
    "text": "What about an injection? I’ve heard about those."
   },
   {
    "who": "dr",
    "text": "A steroid injection can ease the pain for a few weeks, but studies show people who have one are less likely to have recovered at a year and more likely to have it come back. So I don’t recommend it.",
    "dom": "tasks",
    "why": "Evidence-based counselling against steroid injection"
   },
   {
    "who": "pt",
    "text": "Right. I’d rather do it properly then."
   },
   {
    "who": "dr",
    "text": "If work is hard to manage, I can give you a fit note suggesting adjusted duties, so you can keep working while it recovers.",
    "dom": "rto",
    "why": "Addresses work concern; fit note for amended duties"
   },
   {
    "who": "pt",
    "text": "That might help, yes."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Come back sooner if you get numbness, pins and needles or weakness, trouble straightening your fingers, a hot swollen elbow or fever. Otherwise, if it isn’t improving after a few months of the exercises, we’ll review and think about a specialist opinion. Can you tell me the plan?",
    "dom": "gs",
    "why": "Red flags; review threshold; teach-back"
   },
   {
    "who": "pt",
    "text": "Ease the gripping, physio exercises, gel for now, maybe a strap, no injection, a fit note if I need it, and back if I get numbness or weakness or it’s not improving."
   },
   {
    "who": "dr",
    "text": "Perfect. The physio referral will go today.",
    "dom": "gs",
    "why": "Actions confirmed"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; lets him describe onset, provoking movements and his question.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Repetitive manual work, effect on the job, his worry about working.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picks up the work link and his concern about time off.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (work caused it), concern (duration; keeping working), expectation (diagnosis and a fix).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Neck, both elbows, resisted wrist extension, grip and neurological examination; no imaging.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Lateral elbow tendinopathy versus cervical radiculopathy, radial tunnel or PIN entrapment, OA or loose bodies, inflammatory or septic arthritis.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Neurological symptoms, finger-drop weakness, locking, hot swollen joint, fever screened.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Tennis elbow named and linked to load.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Load adjustment, physiotherapy loading programme, topical NSAID, optional strap; steroid injection advised against with figures.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "NSAID safety checked; work adjustments and fit note for amended duties.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Nerve and infection red flags; review if not improving after months; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Greg Holloway",
    "age": "46 years · male",
    "pmh": [
     "Not stated in the case"
    ],
    "meds": [
     "Check repeat record"
    ],
    "allergy": "None recorded",
    "recent": "Weeks of right lateral elbow pain; worse gripping. Repetitive manual work.",
    "reason": "“Will it settle?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Let him describe the pain and his question."
    },
    {
     "t": "1–4",
     "h": "History",
     "d": "Site, work tasks, neck and nerve symptoms, locking, swelling, fever, other joints, analgesia and NSAID safety."
    },
    {
     "t": "4–7",
     "h": "Examine and ICE",
     "d": "Neck, elbow, resisted extension, neurology. Worry about duration and work."
    },
    {
     "t": "7–11",
     "h": "Explain and plan",
     "d": "Tennis elbow; no X-ray; about 9 in 10 improved within a year. Load adjustment, physio, topical NSAID, optional strap; no steroid injection; fit note for amended duties."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "Nerve and infection red flags; review if not improving; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Orders an X-ray; offers a steroid injection as first-line; tells him to stop work and rest completely; skips the neck and nerve examination.",
    "pass": "Recognises tennis elbow clinically, excludes neck and nerve causes, advises load adjustment, physiotherapy and topical NSAID, sets a realistic timescale and safety-nets.",
    "exc": "All of the above, plus: explains the natural history with figures; counsels against steroid injection with the one-year evidence; tailors load advice to his work; offers a fit note for amended duties; gives the strap an honest caveat."
   },
   "avoid": [
    {
     "dont": "“A steroid injection will sort it out.”",
     "instead": "“An injection helps for a few weeks, but people who have one do worse at a year, so I don’t recommend it.”",
     "why": "Coombes 2013: lower recovery and more recurrence at one year."
    },
    {
     "dont": "“Rest it completely until it stops hurting.”",
     "instead": "“Ease the gripping where you can, and we’ll build strength gradually with physio.”",
     "why": "Progressive loading is the recommended treatment; rest deconditions the tendon."
    },
    {
     "dont": "“This brace will fix it.”",
     "instead": "“A strap helps some people, but not everyone.”",
     "why": "BESS: an orthosis may be offered but may not provide benefit."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work",
     "t": "Repetitive gripping drives symptoms. Task rotation, tool changes and pacing reduce load while he keeps working."
    },
    {
     "h": "Home tasks",
     "t": "Lifting kettles and shopping bags palm-up, and using both hands, reduce strain."
    }
   ],
   "legal": [
    {
     "h": "Fit note",
     "t": "A fit note can say he may be fit for work with amended duties or workplace adaptations, rather than signing him off."
    }
   ],
   "professional": [
    {
     "h": "Evidence-based counselling",
     "t": "Explaining why a requested injection is not recommended, with figures, supports shared decision-making."
    },
    {
     "h": "Avoiding low-value care",
     "t": "Routine imaging and steroid injection add cost and harm in a typical case."
    }
   ],
   "community": [
    {
     "h": "MSK physiotherapy",
     "t": "Many areas offer self-referral to MSK physiotherapy; occupational health may help with workplace adjustments."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Finger-drop or wrist-drop weakness: posterior interosseous or radial nerve lesion, urgent",
     "Neck pain with arm paraesthesia or weakness: cervical radiculopathy",
     "Hot, swollen elbow or fever: septic arthritis",
     "Locking or loss of extension: loose body or arthritis",
     "Unexplained bone pain or growing lump: NICE NG12 (updated April 2026) sarcoma pathways"
    ],
    "psychosocial": [
     "Repetitive manual work",
     "Worry about keeping his job",
     "Everyday grip tasks"
    ],
    "ice": [
     "Idea: work caused it",
     "Concern: how long; whether he can keep working",
     "Expectation: a diagnosis and treatment"
    ]
   },
   "diagnosis": "“This is tennis elbow: the tendons on the outside of the elbow are overloaded where they attach to the bone.”",
   "diagnosisLay": "“Think of a rope tied to a post. Pull on it thousands of times a day and it starts to fray where it’s tied. Rest alone doesn’t strengthen it, but building up the load gradually does.”",
   "management": {
    "reflectIce": "“You were worried about how long it would take and about work. Most people get better within a year, and we can adjust your duties so you can keep working.”",
    "psychosocial": "Keep him working with adjusted tasks; offer a fit note if needed.",
    "sharedPlan": [
     "Explanation; no imaging",
     "Load adjustment at work and home",
     "Physiotherapy with progressive extensor loading (BESS)",
     "Topical NSAID for up to about 4 weeks; strap optional",
     "No steroid injection (BESS; Coombes 2013)"
    ],
    "safetyNet": [
     "Numbness, weakness or finger-drop, hot swollen elbow or fever: urgent review",
     "Not improving after several months of exercise: review and consider referral"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Tennis elbow",
    "s": "Protocol · BESS, HTG201",
    "href": "management/tennis-elbow.html"
   },
   {
    "ic": "🗺️",
    "t": "Elbow pain",
    "s": "Visual algorithm · differential",
    "href": "algorithms/elbow-pain.html"
   },
   {
    "ic": "🗺️",
    "t": "Neck pain",
    "s": "Visual algorithm · radiculopathy",
    "href": "algorithms/neck-pain.html"
   },
   {
    "ic": "📝",
    "t": "Fit note guide",
    "s": "Amended duties",
    "href": "fit-note.html"
   }
  ],
  "pitfalls": {
   "intro": "A common, clinically obvious diagnosis. Marks go to excluding neck and nerve causes, giving evidence-based advice on load and exercise, handling the injection question, and supporting him at work.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Not examining the neck and nerves.",
     "why": "Cervical radiculopathy and nerve entrapment mimic tennis elbow.",
     "fix": "Screen neck movement, power, sensation and reflexes."
    },
    {
     "dom": "tasks",
     "fail": "Ordering an X-ray.",
     "why": "Diagnosis is clinical; imaging only if uncertain.",
     "fix": "Explain the clinical findings."
    },
    {
     "dom": "tasks",
     "fail": "Offering a steroid injection first.",
     "why": "Worse outcomes and more recurrence at one year.",
     "fix": "Explain the evidence and recommend loading exercises."
    },
    {
     "dom": "tasks",
     "fail": "Advising complete rest.",
     "why": "Progressive loading is the effective treatment.",
     "fix": "Adjust load and refer to physiotherapy."
    },
    {
     "dom": "rto",
     "fail": "Ignoring his work.",
     "why": "Work drives symptoms and his main worry is his job.",
     "fix": "Tailor advice; offer a fit note for amended duties."
    },
    {
     "dom": "gs",
     "fail": "Promising a quick fix.",
     "why": "Recovery usually takes months.",
     "fix": "Give honest figures and a review plan."
    }
   ]
  }
 },
 "tics-tourettes": {
  "stem": {
   "name": "Finn (surname not given)",
   "age": "9-year-old boy",
   "pmh": [
    "Developing normally",
    "No significant history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "Several months of blinking, face-scrunching, shoulder shrugging, throat-clearing and sniffing. Can hold them in briefly, then has to do them. Worse when tired or excited. Attends with his mother.",
   "reason": "(Mother) “Is it just a habit, or something serious like Tourette’s?”"
  },
  "knowledge": {
   "guideline": "[1] European clinical guidelines for Tourette syndrome and other tic disorders, version 2.0 (European Society for the Study of Tourette Syndrome, 2021) (international) · [2] NICE NG87 (attention deficit hyperactivity disorder, 2018) · [3] NICE CG31 (obsessive-compulsive disorder and body dysmorphic disorder, 2005) · [4] BNFC (specialist-initiated medicines for tics) · [5] Equality Act 2010 and the SEND Code of Practice (2015)",
   "summary": "Blinking, grimacing and shrugging with throat-clearing and sniffing, which come and go, are briefly suppressible, follow an urge and worsen with tiredness or excitement, are tics. Tics are common in children and usually mild. Tourette syndrome means several motor tics and at least one vocal tic for more than a year, starting in childhood. After a few months Finn does not yet meet that definition. The GP’s job is to recognise tics, check for red flags, ask about impact and common co-occurring conditions (ADHD, OCD, anxiety), reassure with good information, and refer only if tics are impairing or something else needs help.",
   "points": [
    {
     "h": "Recognise tics",
     "t": "Sudden, rapid, repeated movements or sounds. Simple motor tics: blinking, grimacing, shrugging. Simple vocal tics: sniffing, throat-clearing, grunting. They wax and wane, change over time, can be held back briefly at the cost of a building urge, and worsen with stress, excitement and tiredness. They often lessen during focused activity."
    },
    {
     "h": "Tourette syndrome and other tic disorders",
     "t": "Tourette syndrome: multiple motor tics plus at least one vocal tic, present for more than a year, starting before 18. Tics lasting less than a year are a provisional (transient) tic disorder. Only a small minority have coprolalia. Tics usually peak around 10 to 12 years and lessen in the late teens for most."
    },
    {
     "h": "Red flags",
     "t": "Sudden explosive onset, loss of skills, abnormal neurological signs, movements that are not typical tics (such as chorea, or staring spells that could be absences), self-injurious tics, or severe distress. These need paediatric assessment."
    },
    {
     "h": "Look for what comes with tics",
     "t": "ADHD, OCD, anxiety, learning difficulties, sleep problems and low mood are common and often cause more difficulty than the tics. Ask about concentration, worries, repeated rituals and school. ADHD and OCD have their own guidance (NICE NG87 [2], NICE CG31 [3])."
    },
    {
     "h": "Psychoeducation first",
     "t": "Explain what tics are and that they are not deliberate. Advise family and school not to comment on or tell him off for tics, which tends to make them worse. Good sleep and managing stress help. Written information and school awareness are part of treatment [1]."
    },
    {
     "h": "When to refer and what helps",
     "t": "If tics cause distress, pain, social or school problems, refer (paediatrics or CAMHS, per local pathway) for behavioural therapy: habit reversal training or CBIT, and exposure with response prevention are first-line [1]. Medication is specialist-only, for severe tics; aripiprazole is the usual first choice, with clonidine considered where ADHD co-exists [1, 4]."
    },
    {
     "h": "School and rights",
     "t": "If tics or co-occurring conditions affect learning, the school’s SENCo can put support in place. A long-term tic disorder can meet the definition of disability under the Equality Act 2010 [5]. Watch for bullying."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Morgan. Hi Finn. What’s brought you both in today?",
    "dom": "rto",
    "why": "Greets the child and parent; open question"
   },
   {
    "who": "pt",
    "text": "Mum: I’m a bit worried about Finn. For the last few months he keeps blinking a lot, scrunching his face, shrugging his shoulders, and making these throat-clearing and sniffing noises. He says he can hold them in for a bit but then has to do them. It’s worse when he’s tired or excited. Is it just a habit, or is it something serious like Tourette’s?"
   },
   {
    "who": "dr",
    "text": "Thank you, that’s a really clear description. I’ll ask a few questions, including some for Finn, have a look at him, and then explain what I think. Is that okay?",
    "dom": "gs",
    "why": "Sets the agenda"
   },
   {
    "who": "pt",
    "text": "Mum: Yes, please."
   },
   {
    "phase": "Focused history",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Finn, when you blink or clear your throat, what does it feel like just before?",
    "dom": "tasks",
    "why": "Asks the child directly about the premonitory urge"
   },
   {
    "who": "pt",
    "text": "Finn: Like an itch I have to scratch. If I do it, it goes away."
   },
   {
    "who": "dr",
    "text": "That’s a really good way to describe it. Mum, have the movements changed over the months, and does anything make them better?",
    "dom": "tasks",
    "why": "Waxing and waning; relief with focus"
   },
   {
    "who": "pt",
    "text": "Mum: They come and go. When he’s really concentrating on something, they almost stop."
   },
   {
    "who": "dr",
    "text": "Did they start suddenly, all at once, or gradually? And has he lost any skills, or had any clumsiness, weakness or odd staring spells?",
    "dom": "tasks",
    "why": "Screens red flags"
   },
   {
    "who": "pt",
    "text": "Mum: Gradually. No, nothing like that. He’s doing fine otherwise."
   },
   {
    "who": "dr",
    "text": "How is school going, and has anyone said anything about the tics?",
    "dom": "tasks",
    "why": "Explores impact and bullying"
   },
   {
    "who": "pt",
    "text": "Mum: Fine, as far as I know. I just worry he’ll get teased."
   },
   {
    "who": "dr",
    "text": "Finn, is anyone unkind about it at school?",
    "dom": "tasks",
    "why": "Checks directly with the child"
   },
   {
    "who": "pt",
    "text": "Finn: Not really."
   },
   {
    "who": "dr",
    "text": "Good. If that ever changes, tell your mum or your teacher. Some children with tics also find it hard to concentrate or sit still, or get lots of worries, or feel they have to do things in a certain way. Have you noticed anything like that?",
    "dom": "tasks",
    "why": "Screens ADHD, anxiety and OCD"
   },
   {
    "who": "pt",
    "text": "Mum: Not that I’ve noticed."
   },
   {
    "who": "dr",
    "text": "And how is he sleeping?",
    "dom": "tasks",
    "why": "Screens sleep"
   },
   {
    "who": "pt",
    "text": "Mum: Fine, mostly."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You mentioned Tourette’s. What do you know about it?",
    "dom": "rto",
    "why": "Explores the mother’s idea"
   },
   {
    "who": "pt",
    "text": "Mum: Only what’s on TV. People swearing and shouting. I’m scared that’s where it’s going."
   },
   {
    "who": "dr",
    "text": "That’s a very common worry. What are you hoping for from today?",
    "dom": "rto",
    "why": "Normalises and elicits expectations"
   },
   {
    "who": "pt",
    "text": "Mum: To know what it is, and whether I should be doing something."
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Can I watch Finn for a minute and do a quick check of his eyes, movements, coordination and walking?",
    "dom": "tasks",
    "why": "Observation and focused neurological examination"
   },
   {
    "who": "pt",
    "text": "Mum: Of course."
   },
   {
    "who": "dr",
    "text": "Everything I’ve examined is normal. What you’ve described are tics. The feeling before, being able to hold them in for a bit, getting better when he’s concentrating and worse when he’s tired, are all typical. Tics are very common in children his age, and most are mild and settle a lot by the late teens.",
    "dom": "tasks",
    "why": "Names tics and reassures with specifics"
   },
   {
    "who": "pt",
    "text": "Mum: So is it Tourette’s?"
   },
   {
    "who": "dr",
    "text": "Tourette’s is a name we use when a child has several movement tics and at least one sound tic for more than a year. Finn’s have been there for a few months, so it’s too early to say. The swearing you see on TV is rare. And even if it did become Tourette’s, that’s not dangerous and doesn’t harm his brain or his intelligence.",
    "dom": "rto",
    "why": "Explains the criteria and addresses the specific fear"
   },
   {
    "who": "pt",
    "text": "Mum: That’s a relief. What should I do when he’s doing them?"
   },
   {
    "phase": "Management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The most helpful thing is not to comment on them or ask him to stop. Drawing attention to tics usually makes them worse. Good sleep and keeping stress down help. I’ll give you some written information, and it would help to share it with his teacher.",
    "dom": "tasks",
    "why": "Practical psychoeducation"
   },
   {
    "who": "pt",
    "text": "Mum: And if he does get teased?"
   },
   {
    "who": "dr",
    "text": "Then it’s worth speaking to his teacher. Schools can help classmates understand tics, and they should act on unkind behaviour. Finn, you’re not doing anything wrong. These are just something your body does.",
    "dom": "rto",
    "why": "Addresses bullying and speaks directly to the child"
   },
   {
    "who": "pt",
    "text": "Finn: Okay."
   },
   {
    "who": "dr",
    "text": "At the moment the tics are mild and he’s coping, so there’s no need for medicine. If they start to bother him, hurt, or get in the way at school, there’s a helpful type of therapy called habit reversal training, which teaches him to manage the urge. I’d refer him then.",
    "dom": "tasks",
    "why": "Proportionate plan with a clear threshold for referral"
   },
   {
    "who": "pt",
    "text": "Mum: That makes sense."
   },
   {
    "phase": "Safety net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Come back if the tics suddenly get much worse, cause pain or injury, if he loses any skills or seems unwell, if he’s very upset or struggling at school, or if concentration, worries or rituals start to cause problems. Can you tell me what you’ll do now?",
    "dom": "gs",
    "why": "Specific safety net and teach-back"
   },
   {
    "who": "pt",
    "text": "Mum: Try not to mention them, get him sleeping well, talk to his teacher and share the leaflet. Come back if they get worse, cause problems, or anything changes."
   },
   {
    "who": "dr",
    "text": "Perfect. Let’s review in about three months to see how he’s getting on, or sooner if you need.",
    "dom": "gs",
    "why": "Defined follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question to both; let the mother describe the tics fully and asked Finn about the urge in his own words.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored school, the worry about teasing (asked Finn directly), and his sleep.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the premonitory urge, suppressibility and improvement with focus as typical of tics, and the fear of Tourette’s from TV.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: habit or Tourette’s. Concern: that it will turn into swearing and shouting; teasing. Expectation: to know what it is and what to do.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Observed the tics and did a focused neurological examination; no tests needed.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Tics versus other movement disorders (chorea, myoclonus), absences and compulsions; provisional tic disorder versus Tourette syndrome.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Checked for sudden onset, regression, neurological signs and staring spells.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Provisional tic disorder, with motor and vocal tics for a few months; Tourette syndrome only if they persist beyond a year.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Psychoeducation, avoid drawing attention, sleep and stress, written information for school; no medication; habit reversal training if impairing.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Screened ADHD, OCD and anxiety; planned for teasing; involved school.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Return for worsening, pain, regression, distress or co-occurring problems; review in about three months.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Finn",
    "age": "9 years · male",
    "pmh": [
     "Developing normally"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "None recorded",
    "recent": "Months of blinking, grimacing, shrugging, throat-clearing and sniffing; briefly suppressible; worse when tired or excited.",
    "reason": "“Is it a habit, or Tourette’s?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "Greet Finn and his mother; hear the full description."
    },
    {
     "t": "1–5",
     "h": "Tic features and impact",
     "d": "Urge, suppression, waxing and waning, red flags, school, teasing, ADHD, OCD, anxiety, sleep."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "What she knows about Tourette’s; the fear of swearing; what she hopes for."
    },
    {
     "t": "6–8",
     "h": "Examine and name it",
     "d": "Observe; neurological check; tics named; Tourette criteria explained."
    },
    {
     "t": "8–11",
     "h": "Plan",
     "d": "Don’t comment on tics; sleep and stress; school involvement; habit reversal if impairing."
    },
    {
     "t": "11–12",
     "h": "Safety net",
     "d": "Worsening, regression, distress, co-occurring problems; review; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Dismisses it as a habit and tells Finn to stop, or labels it Tourette’s on day one; misses teasing and co-occurring conditions; refers for medication.",
    "pass": "Recognises tics, explains Tourette criteria, screens red flags and co-occurring conditions, reassures and safety-nets.",
    "exc": "All of that, plus: talks directly to Finn; addresses the TV image of Tourette’s; practical advice for home and school; plans for teasing; clear threshold for habit reversal referral; teach-back."
   },
   "avoid": [
    {
     "dont": "“He needs to try harder to stop.”",
     "instead": "“He can hold them in briefly, but it’s like holding in a sneeze. Please don’t comment on them.”",
     "why": "Pressure and attention make tics worse and blame the child."
    },
    {
     "dont": "“Yes, it’s Tourette’s.”",
     "instead": "“They’re tics. Tourette’s means tics for more than a year, so it’s too early to say.”",
     "why": "The diagnosis needs at least a year of tics."
    },
    {
     "dont": "“Let’s start a tablet to calm them.”",
     "instead": "“Mild tics don’t need medicine. If they start to cause problems, a behavioural therapy helps.”",
     "why": "Behavioural therapy is first-line; medication is specialist-only for severe tics (ESSTS 2021, international)."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "School and peers",
     "t": "Copying and teasing can hurt self-esteem. School awareness sessions and a named contact help. Tics often lessen during absorbing activities, which children can use."
    },
    {
     "h": "Family",
     "t": "Parents often feel they should correct tics. Explaining why not to reduces family tension."
    }
   ],
   "legal": [
    {
     "h": "Equality Act 2010 and SEND",
     "t": "A persistent tic disorder or Tourette syndrome can count as a disability. If it affects learning, the school’s SENCo can arrange support under the SEND Code of Practice."
    }
   ],
   "professional": [
    {
     "h": "Talking to the child",
     "t": "Involve Finn directly, in words he understands. Children describe the urge well and feel respected when asked."
    },
    {
     "h": "Proportionate care",
     "t": "Avoid over-medicalising mild tics, but refer promptly when tics or co-occurring conditions impair daily life."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Tourettes Action provides information for families and schools."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Sudden explosive onset",
     "Loss of skills or developmental regression",
     "Abnormal neurological signs or staring spells",
     "Self-injurious or painful tics; severe distress"
    ],
    "psychosocial": [
     "School and the worry about teasing",
     "Mother’s fear from TV portrayals",
     "Screen for anxiety, ADHD and OCD"
    ],
    "ice": [
     "Idea: habit or Tourette’s",
     "Concern: swearing and shouting; teasing",
     "Expectation: to know what it is and what to do"
    ]
   },
   "diagnosis": "Provisional tic disorder: several months of simple motor and vocal tics with a premonitory urge, brief suppressibility and waxing and waning, in a developmentally normal 9-year-old. No red flags. Tourette syndrome only if tics persist beyond a year.",
   "diagnosisLay": "“These are tics. They’re very common in children, they’re not his fault, and most get much better by the late teens. Tourette’s is only diagnosed when tics last more than a year, and even then it isn’t dangerous.”",
   "management": {
    "reflectIce": "“You were worried this was the start of the shouting and swearing you’ve seen on TV. That’s rare, and what Finn has at the moment is mild.”",
    "psychosocial": "Advice not to comment on tics; school involvement; plan for teasing; watch for anxiety.",
    "sharedPlan": [
     "Explain tics; written information for family and school",
     "Don’t draw attention to tics; good sleep; manage stress",
     "Talk to the teacher about tic awareness and any teasing",
     "Refer for habit reversal training or CBIT if impairing; medication only by a specialist"
    ],
    "safetyNet": [
     "Return for sudden worsening, pain, regression or new neurological symptoms",
     "Return if concentration, worries or rituals cause problems",
     "Review in about three months"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "ADHD",
    "s": "Case walkthrough · a common co-occurring condition",
    "href": "../cases/adhd.html"
   },
   {
    "ic": "💠",
    "t": "ADHD",
    "s": "Protocol · NICE NG87",
    "href": "management/adhd.html"
   },
   {
    "ic": "📋",
    "t": "OCD",
    "s": "Case walkthrough · compulsions versus tics",
    "href": "../cases/ocd.html"
   },
   {
    "ic": "💠",
    "t": "OCD",
    "s": "Protocol · NICE CG31",
    "href": "management/ocd.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by either brushing tics off or over-treating them. The marks are for recognising them, calming the fear and seeing the whole child.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Calling it a bad habit and telling him to stop.",
     "why": "Tics are involuntary; pressure makes them worse.",
     "fix": "Explain the urge and suppressibility."
    },
    {
     "dom": "tasks",
     "fail": "Diagnosing Tourette’s at a few months.",
     "why": "The definition requires more than a year of tics.",
     "fix": "Say ‘tics’ now and explain when Tourette’s would apply."
    },
    {
     "dom": "tasks",
     "fail": "Missing ADHD, OCD or anxiety.",
     "why": "They often cause more difficulty than the tics.",
     "fix": "Ask about concentration, worries and rituals."
    },
    {
     "dom": "tasks",
     "fail": "Offering medication for mild tics.",
     "why": "Behavioural therapy is first-line; drugs are specialist-only.",
     "fix": "Psychoeducation now; habit reversal if impairing."
    },
    {
     "dom": "rto",
     "fail": "Talking only to the parent.",
     "why": "Finn can describe the urge and the teasing himself.",
     "fix": "Ask Finn directly and reassure him."
    },
    {
     "dom": "gs",
     "fail": "No red flags or review.",
     "why": "Sudden change or regression needs assessment.",
     "fix": "Give specific return reasons and a review date."
    }
   ]
  }
 },
 "transgender-health": {
  "stem": {
   "name": "Sam (he/him)",
   "age": "26-year-old trans man",
   "pmh": [
    "Gender incongruence; on the NHS gender dysphoria clinic waiting list (nearly four years)"
   ],
   "meds": [
    "Testosterone — prescribed by a private gender service; not on the practice repeat list"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "No letters from the private service on file. No monitoring bloods on record.",
   "reason": "Asking the practice to take over testosterone monitoring and, ideally, prescribing."
  },
  "knowledge": {
   "guideline": "[1] GMC ethical hub: trans healthcare (bridging prescriptions, shared care) · [2] RCGP position statement: the role of the GP in transgender care (2024) · [3] NHS England service specification: gender dysphoria services, non-surgical interventions for adults (current version) and NHS England operational and delivery review of adult gender dysphoria clinics (Levy review, December 2025) · [4] NHS Cervical Screening Programme: operational guidance for transgender and non-binary opt-in (gov.uk) · [5] FSRH CEU statement: contraceptive choices and sexual health for transgender and non-binary people (2017) · [6] Equality Act 2010; Gender Recognition Act 2004",
   "summary": "An adult on privately prescribed testosterone asking the GP to take over is a question about shared care with a private provider, not about whether he deserves care. Be respectful and use his name and pronouns. Be honest about what the practice can and cannot take on, and why. Check the private prescriber’s credentials. Keep him safe in the meantime with monitoring and advice. Look after the rest of his health: mood, contraception and screening based on anatomy.",
   "points": [
    {
     "h": "Respect and records",
     "t": "Use his chosen name and pronouns. Update the record with his consent. Gender reassignment is a protected characteristic under the Equality Act 2010; refusing care because someone is trans is not acceptable [1][6]. Information about gender recognition is specially protected [6]."
    },
    {
     "h": "The GP role",
     "t": "RCGP 2024 [2]: the core GP role is to liaise with specialist gender services as with any other specialty, including considering prescribing under a collaborative or shared-care arrangement once a specialist has assessed the patient. For GPs without extra expertise, the role does not include starting hormones before specialist assessment, and shared care with private providers is not part of most GPs’ role."
    },
    {
     "h": "Private providers",
     "t": "Before agreeing to shared care with a private service, the practice should be assured that a suitably qualified, GMC-registered specialist has made an assessment equivalent to an NHS one. It should also check that the service is UK-regulated, and it should have the service’s assessment and monitoring plan in writing [1][2]. A practice may decline if it is not assured, but should not leave the patient at significant clinical risk. Explain the reasons and the alternatives."
    },
    {
     "h": "Bridging prescriptions",
     "t": "GMC [1]: a bridging prescription is a harm-reduction measure. A GP may consider one when a person is already self-medicating, or is very likely to, with hormones from an unregulated source, while waiting for a specialist service, and after seeking advice from an experienced gender specialist. It is not a routine alternative to specialist care [2]. Sam has a private prescriber, so the first question is continuity from that service, not bridging."
    },
    {
     "h": "National picture",
     "t": "NHS England’s adult clinics have waits measured in years. The Levy review (December 2025) led NHS England to announce a single national waiting list and an updated adult service specification [3]. Confirm he is on the NHS list."
    },
    {
     "h": "Monitoring for safety",
     "t": "On testosterone: FBC with haematocrit, liver function, lipids, testosterone level, blood pressure and weight, on the schedule set by the prescribing specialist. Raised haematocrit (secondary polycythaemia) is the key risk to look for. Share results with the prescriber."
    },
    {
     "h": "Contraception and fertility",
     "t": "FSRH [5]: testosterone is not a contraceptive and is contraindicated in pregnancy. If he has sex that could lead to pregnancy, discuss contraception. Fertility may be affected; discuss it and refer for advice if he wishes."
    },
    {
     "h": "Whole-person care",
     "t": "Ask directly about mood, self-harm and suicidal thoughts; trans people report higher rates of distress, often linked to waiting and discrimination. Screen by anatomy: a person registered as male with a cervix is not invited automatically, but can opt in to cervical screening [4]. Include smoking, alcohol and cardiovascular risk."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Rahman. How would you like me to address you?",
    "dom": "rto",
    "why": "Asks rather than assumes name and pronouns"
   },
   {
    "who": "pt",
    "text": "Thanks for seeing me. I’m a trans man. I go by Sam, he/him. I’ve been waiting nearly four years for the NHS gender clinic, so I started testosterone through a private service because I couldn’t cope waiting. I’m doing well on it. Can you do my blood monitoring and ideally take over the prescription? I’m worried I’ll be judged or turned away."
   },
   {
    "who": "dr",
    "text": "Thank you, Sam. You won’t be turned away. I want to help you stay safe and well on your treatment. I’ll also be honest about what I can do today and what needs checking first. Is it okay if I ask some questions?",
    "dom": "rto",
    "why": "Addresses the fear of refusal directly; sets honest expectations"
   },
   {
    "who": "pt",
    "text": "Yes, of course."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Can you tell me about the private service: who assessed you, and do you have their letters, your dose and how you take it?",
    "dom": "tasks",
    "why": "Establishes prescriber, assessment and regimen"
   },
   {
    "who": "pt",
    "text": "It’s a UK online service. I had an assessment with them. I can forward the letters, they’re in my email."
   },
   {
    "who": "dr",
    "text": "That would really help. Have you had any blood tests since starting, and are you getting the testosterone only through them, not from anywhere else?",
    "dom": "tasks",
    "why": "Monitoring to date; checks for unregulated sourcing"
   },
   {
    "who": "pt",
    "text": "Only through them. I had bloods at the start, I think. Nothing recent."
   },
   {
    "who": "dr",
    "text": "Thanks. I’d like to ask about the rest of your health too. How has your mood been, through the wait and now?",
    "dom": "tasks",
    "why": "Mental-health screen"
   },
   {
    "who": "pt",
    "text": "Waiting was really hard. It’s better since starting."
   },
   {
    "who": "dr",
    "text": "I’m glad it’s better. I ask everyone this: have you had thoughts of harming yourself or ending your life, either then or now?",
    "dom": "tasks",
    "why": "Direct, normalised self-harm and suicide question"
   },
   {
    "who": "pt",
    "text": "Not now. It was dark while I was waiting, but not now."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. Do you smoke, and how much alcohol do you drink?",
    "dom": "tasks",
    "why": "Cardiovascular risk"
   },
   {
    "who": "pt",
    "text": "I don’t smoke. I drink a bit at weekends."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said you were worried about being judged. What were you expecting today?",
    "dom": "rto",
    "why": "Explores concern and expectations"
   },
   {
    "who": "pt",
    "text": "Honestly, that you’d say it’s not your job, or that I should stop. Other people I know have been turned away. I want to be safe and not have to fight for everything."
   },
   {
    "who": "dr",
    "text": "That sounds exhausting, and I’m sorry that’s been people’s experience. Please don’t stop your testosterone suddenly. Let me explain what I can do.",
    "dom": "rto",
    "why": "Validates, and gives safety advice early"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "There are two separate things: monitoring and prescribing. Monitoring I can arrange now, because keeping you safe matters whoever prescribes. That means a blood count, as testosterone can thicken the blood, liver tests, cholesterol, your testosterone level, blood pressure and weight.",
    "dom": "tasks",
    "why": "Separates monitoring from prescribing; names monitoring and the haematocrit risk"
   },
   {
    "who": "pt",
    "text": "That would be great."
   },
   {
    "who": "dr",
    "text": "Taking over the prescription from a private service is a shared-care decision for the practice. Professional guidance asks us to check first that you were assessed by a suitably qualified, GMC-registered specialist, and that the service is UK-regulated. We also need a clear plan in writing. So I can’t promise the prescription today, but I will look at it properly and quickly, and I won’t leave you without treatment.",
    "dom": "tasks",
    "why": "Honest about shared-care conditions and limits, without refusal"
   },
   {
    "who": "pt",
    "text": "Okay. That’s fairer than I expected."
   },
   {
    "who": "dr",
    "text": "Can I also check you’re still on the NHS clinic list? NHS England is moving to a single national waiting list, and I want to make sure you don’t lose your place.",
    "dom": "tasks",
    "why": "Protects his NHS pathway"
   },
   {
    "who": "pt",
    "text": "I think so. I’m not sure since they changed it."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’ll check it for you. Two more health points, and tell me if either doesn’t apply. Testosterone isn’t a contraceptive and isn’t safe in pregnancy. So if you have sex that could lead to a pregnancy, we should talk about contraception. And if you still have a cervix, you won’t be invited for cervical screening automatically if you’re registered as male, but you can opt in. We can do that in a way that feels okay for you.",
    "dom": "tasks",
    "why": "Contraception and anatomy-based screening, sensitively"
   },
   {
    "who": "pt",
    "text": "I hadn’t thought about the screening. I’d want to talk about how that would work."
   },
   {
    "who": "dr",
    "text": "Of course, we can plan that together at another appointment. Is the name and gender on your record how you want it?",
    "dom": "rto",
    "why": "Offers record update with consent"
   },
   {
    "who": "pt",
    "text": "My name’s right, but it still says female in places."
   },
   {
    "who": "dr",
    "text": "I’ll help you update it today if you’d like, and I’ll explain what it means for screening invitations so nothing is missed. There are also peer support groups and national trans support organisations. I can give you details.",
    "dom": "rto",
    "why": "Record update with consent; signposting"
   },
   {
    "who": "pt",
    "text": "Yes, please."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Please book the bloods and blood-pressure check this week, and send me the private service’s letters. I’ll review them, seek specialist advice if needed, and ring you with the practice’s decision and the reasons. If your mood drops or those dark thoughts return, contact us the same day, or call 999 or NHS 111 in a crisis. Headaches, chest pain or a red, swollen leg also need urgent help. What will you do next?",
    "dom": "gs",
    "why": "Concrete plan, feedback route and specific safety-net; teach-back"
   },
   {
    "who": "pt",
    "text": "Bloods this week, send the letters, keep taking my testosterone as prescribed, and you’ll call me. And get help quickly if my mood crashes."
   },
   {
    "who": "dr",
    "text": "That’s it. Thank you for coming in, Sam. You shouldn’t have to fight to be looked after, and we’ll keep seeing you through this.",
    "dom": "gs",
    "why": "Confirms understanding and continuity"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Asked how he wishes to be addressed; open question; let him state his request and his fear of refusal.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "The long wait and its toll; experiences of discrimination; alcohol and smoking.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I’m worried I’ll be judged or turned away” and “couldn’t cope waiting” and explored both, including mood.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (GP can take over), concern (judgement, refusal, having to fight), expectation (monitoring and prescribing).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "FBC with haematocrit, LFTs, lipids, testosterone level, BP, weight; obtain the private service’s assessment and plan.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Safety of current regimen; secondary polycythaemia; mood disorder or self-harm risk; contraceptive need; screening gaps from registered gender.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked directly about self-harm and suicidal thoughts; checked for hormones from unregulated sources; clot and polycythaemia symptoms in the safety-net.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Adult trans man on privately prescribed testosterone requesting shared care, awaiting NHS gender clinic assessment.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Monitoring now; honest shared-care decision after checking the private prescriber (GMC-registered specialist, UK-regulated service); do not stop testosterone; specialist advice if needed.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Mental-health support; contraception advice (testosterone is not a contraceptive); cervical screening opt-in if a cervix is present; record update with consent; confirm NHS list position.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Bloods this week; decision and reasons fed back by phone; same-day contact for low mood or suicidal thoughts, 999 or 111 in crisis; urgent symptoms named; teach-back and continuity offered.",
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
    "name": "Sam (he/him)",
    "age": "26 years · trans man",
    "pmh": [
     "Gender incongruence; on NHS gender clinic waiting list"
    ],
    "meds": [
     "Testosterone via private gender service"
    ],
    "allergy": "NKDA",
    "recent": "No private service letters on file. No monitoring bloods recorded.",
    "reason": "“Will you do my monitoring and take over the prescription? I’m worried I’ll be judged.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Opening",
     "d": "Ask how he wishes to be addressed; hear the request and the fear of refusal."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Private prescriber and assessment, dose, monitoring to date, any unregulated sourcing, mood and self-harm, smoking and alcohol."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Fear of being judged or turned away; wants safety and not to have to fight."
    },
    {
     "t": "6–8",
     "h": "Explain",
     "d": "Monitoring now; prescribing is a shared-care decision after checking the private prescriber; don’t stop testosterone; NHS list."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Contraception, cervical screening opt-in, record update, signposting, decision fed back, mood safety-net, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Misgenders him or avoids his name; refuses involvement outright or tells him to stop testosterone; lectures about private providers; no monitoring and no mood question.",
    "pass": "Uses his name and pronouns, arranges monitoring, explains that shared care depends on checking the private prescriber, asks about mood, and agrees a follow-up.",
    "exc": "All of the above, plus: separates monitoring from prescribing clearly; explains the GMC and RCGP position in plain words without moralising; advises not to stop suddenly; covers contraception and cervical screening opt-in sensitively; offers a record update; protects his NHS list place; names a route and timescale for the decision; teach-back."
   },
   "avoid": [
    {
     "dont": "“GPs don’t prescribe hormones. You’ll have to wait for the clinic.”",
     "instead": "“I can arrange your monitoring now, and I’ll look properly at taking over the prescription once I’ve checked the private service.”",
     "why": "A flat refusal is not in line with GMC guidance and leaves him unsafe; honest conditions are."
    },
    {
     "dont": "“You shouldn’t have started without the NHS.”",
     "instead": "“The wait has been very long. Let’s focus on keeping you safe now.”",
     "why": "Moralising damages trust and adds nothing clinically."
    },
    {
     "dont": "“Stop the testosterone until we sort this out.”",
     "instead": "“Please keep taking it as prescribed while we work this out.”",
     "why": "Abrupt stopping can cause harm and distress; continuity is safer."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Waiting and wellbeing",
     "t": "Adult gender clinic waits run to years. Isolation, discrimination and cost of private care all affect wellbeing; ask about support, work and money."
    },
    {
     "h": "Cost of private care",
     "t": "Private prescriptions and tests are expensive; this can drive people to unregulated sources. Ask, without judgement."
    }
   ],
   "legal": [
    {
     "h": "Equality Act 2010",
     "t": "Gender reassignment is a protected characteristic. Refusing or providing worse care because someone is trans is unlawful discrimination."
    },
    {
     "h": "Confidentiality",
     "t": "Gender Recognition Act 2004 section 22 protects information about a person’s gender recognition application or history when it is acquired in an official capacity. Share gender history only with consent or where clinically necessary."
    },
    {
     "h": "Records",
     "t": "A patient can ask to change name and gender on their NHS record. Explain the effect on screening invitations and put reminders in place."
    }
   ],
   "professional": [
    {
     "h": "GMC and RCGP positions",
     "t": "GMC: treat trans patients with dignity and consider harm reduction, including bridging, with specialist advice. RCGP 2024: shared care with NHS specialist services is core; starting hormones or shared care with private providers is not part of most GPs’ role without extra expertise."
    },
    {
     "h": "Competence and honesty",
     "t": "Work within your competence, seek specialist advice, explain decisions and reasons, and never leave a patient without a plan (GMC Good medical practice 2024)."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Signpost national trans support and peer groups, local LGBT+ services, and mental-health support including NHS Talking Therapies."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Current suicidal thoughts or recent self-harm",
     "Hormones from unregulated sources or at unknown doses",
     "Headache, chest pain, breathlessness or a swollen leg (polycythaemia or clot)",
     "Possible pregnancy while on testosterone"
    ],
    "psychosocial": [
     "Years on the waiting list",
     "Experience or fear of discrimination",
     "Cost of private care",
     "Support network"
    ],
    "ice": [
     "Idea: the GP can take over monitoring and prescribing",
     "Concern: being judged, turned away or having to fight",
     "Expectation: monitoring, ideally prescribing, and support"
    ]
   },
   "diagnosis": "“You’re an adult trans man on testosterone from a private service, waiting for the NHS clinic. My job is to keep you safe on it, look after the rest of your health, and decide properly whether the practice can share your prescribing.”",
   "diagnosisLay": "“Think of it as two jobs. Checking your bloods is a safety job I can start now. Taking over the prescription is like taking a patient from another hospital: I need their notes and plan first, so I know I’m continuing it safely.”",
   "management": {
    "reflectIce": "“You were worried I’d judge you or turn you away. I won’t. I’ll arrange your monitoring now, and I’ll be straight with you about what we need before taking over the prescription.”",
    "psychosocial": "Acknowledge the wait and the fear of refusal; ask about mood and support; offer continuity and a clear decision timeline.",
    "sharedPlan": [
     "Monitoring bloods (FBC with haematocrit, LFTs, lipids, testosterone), BP and weight now; share results with the prescriber",
     "Obtain the private service’s assessment and plan; check the specialist is GMC-registered and the service UK-regulated; practice shared-care decision with reasons; specialist advice if needed",
     "Keep taking testosterone as prescribed; do not stop suddenly",
     "Confirm his place on the NHS waiting list",
     "Contraception advice; cervical screening opt-in if a cervix is present; record update with consent; signposting"
    ],
    "safetyNet": [
     "Same-day contact for low mood or suicidal thoughts; 999 or NHS 111 in a crisis",
     "Urgent help for chest pain, breathlessness, severe headache or a red, swollen leg",
     "Phone call with the shared-care decision and reasons"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Gender dysphoria protocol",
    "s": "Affirming care · bridging · monitoring",
    "href": "management/gender-dysphoria.html"
   },
   {
    "ic": "📋",
    "t": "Gender dysphoria",
    "s": "Case walkthrough",
    "href": "../cases/gender-dysphoria.html"
   },
   {
    "ic": "📋",
    "t": "Cervical screening",
    "s": "Case walkthrough · screening by anatomy",
    "href": "../cases/cervical-screening.html"
   },
   {
    "ic": "🗺️",
    "t": "Polycythaemia pathway",
    "s": "Raised haematocrit on testosterone",
    "href": "algorithms/polycythaemia.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you can give respectful, safe care while being honest about professional limits. It is failed by refusal, moralising or vagueness, not by admitting that checks are needed.",
   "items": [
    {
     "dom": "rto",
     "fail": "Avoiding his name or pronouns, or getting them wrong and moving on.",
     "why": "The basics of respect frame the whole consultation; he came fearing judgement.",
     "fix": "Ask at the start, use his name, and offer to update the record."
    },
    {
     "dom": "tasks",
     "fail": "A flat “GPs can’t prescribe this” with no alternative.",
     "why": "GMC guidance does not support refusing care because a patient is trans; the RCGP sets out a role in shared care.",
     "fix": "Separate monitoring (now) from prescribing (after checks), and give a timescale for the decision."
    },
    {
     "dom": "tasks",
     "fail": "Agreeing to take over prescribing on the spot, without knowing who assessed him.",
     "why": "Shared care with a private provider needs assurance about the specialist and the service.",
     "fix": "Obtain the letters, check GMC registration and regulation, and seek specialist advice if needed."
    },
    {
     "dom": "tasks",
     "fail": "No monitoring bloods, or forgetting haematocrit.",
     "why": "Secondary polycythaemia is the main testosterone risk.",
     "fix": "FBC with haematocrit, LFTs, lipids, testosterone level, BP and weight."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about mood or self-harm.",
     "why": "He describes a very difficult wait; distress and self-harm rates are higher.",
     "fix": "Ask directly and kindly; safety-net with a same-day route."
    },
    {
     "dom": "gs",
     "fail": "Missing contraception and cervical screening.",
     "why": "Testosterone is not contraceptive (FSRH 2017); a person registered as male is not invited for screening automatically.",
     "fix": "Raise both sensitively and offer the opt-in."
    }
   ]
  }
 },
 "undescended-testis": {
  "stem": {
   "name": "Rory (attends with his mother)",
   "age": "8-week-old boy",
   "pmh": [
    "Newborn and 6–8-week checks: one testis not palpable in the scrotum; other testis in the scrotum"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "6–8-week infant physical examination: unilateral empty scrotum noted. No referral yet recorded.",
   "reason": "Mother anxious after being told one testicle is “not in the right place”."
  },
  "knowledge": {
   "guideline": "[1] NHS Newborn and Infant Physical Examination (NIPE) screening programme · [2] EAU/ESPU guidelines on paediatric urology (2026, international) · [3] NICE NG12 (updated April 2026), testicular cancer criteria in adults · [4] GIRFT/BAUS children and young people testicular torsion pathway (2026) · [5] Pettersson et al., NEJM 2007 (orchidopexy age and testicular cancer risk)",
   "summary": "A testis still not in the scrotum at the 6–8-week check should be referred to paediatric surgery or urology now, so orchidopexy can be done ideally at 6–12 months and by 18 months at the latest. Examine properly to separate a retractile testis, screen for the urgent presentations, do not request an ultrasound, and counsel honestly about fertility and later testicular awareness.",
   "points": [
    {
     "h": "Screen for the urgent presentations",
     "t": "Bilateral undescended testes at the newborn check: senior paediatric review within 24 hours [1]. Any undescended testis with hypospadias, micropenis, bifid scrotum or atypical genitalia: same-day paediatrics for possible disorder of sex development, including congenital adrenal hyperplasia [1][2]. Acute groin or abdominal pain with an undescended testis: possible torsion, immediate emergency surgical assessment [4]."
    },
    {
     "h": "Examine properly",
     "t": "Warm room, warm hands, relaxed child, supine and then frog-legged. Sweep from the groin down. Note whether the testis is palpable, the other testis, the penis and urethral opening, the scrotum, and any hernia."
    },
    {
     "h": "The mobility test",
     "t": "Can the testis be brought to the bottom of the scrotum without tension, and does it stay at least briefly? Yes: retractile, no surgery, review yearly because some ascend. No, or springs straight back: undescended. If unsure, refer [2]."
    },
    {
     "h": "Refer on the NIPE timetable",
     "t": "Unilateral at the newborn check: re-examine at 6–8 weeks. Still undescended at 6–8 weeks, or found later: refer to paediatric surgery or urology per the local NIPE pathway [1]. Spontaneous descent after about 6 months (corrected age) is uncommon [2]."
    },
    {
     "h": "Orchidopexy timing",
     "t": "Ideally at 6–12 months, and by 18 months at the latest [2]. Earlier surgery gives the testis the best chance for later fertility, and orchidopexy before puberty is associated with a lower testicular cancer risk than later surgery [5]."
    },
    {
     "h": "No ultrasound first",
     "t": "Imaging does not reliably find a non-palpable testis and does not change the need for surgical assessment. Refer directly; a scan request can delay treatment [2]. A non-palpable testis is assessed by the surgeon, often with laparoscopy."
    },
    {
     "h": "Ascending testis",
     "t": "A testis that was in the scrotum can ascend with growth. Treat it as undescended and refer when found."
    },
    {
     "h": "Long-term counselling",
     "t": "A history of undescended testis raises the risk of subfertility and testicular cancer; orchidopexy reduces but does not remove the cancer risk. From puberty he should know how his testes normally feel and report any change. In adults, NICE NG12 (updated April 2026) testicular criteria apply [3]."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Morgan. And this must be Rory. What’s been happening?",
    "dom": "rto",
    "why": "Warm open question"
   },
   {
    "who": "pt",
    "text": "The midwife and then the doctor at his check said one of Rory’s testicles isn’t where it should be. It’s not in the sac. I’ve been really worried. Is it serious? Does he need an operation? Will it affect him having children one day? I just want to know he’ll be okay."
   },
   {
    "who": "dr",
    "text": "Those are really important questions and I’ll answer each of them. First, this is common and very treatable. Can I ask a few things, examine him gently, and then we’ll go through what happens next?",
    "dom": "rto",
    "why": "Early proportionate reassurance and agenda"
   },
   {
    "who": "pt",
    "text": "Yes, please."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Was he born around his due date or early? Babies born early can take a bit longer for the testicles to come down.",
    "dom": "tasks",
    "why": "Prematurity affects timing"
   },
   {
    "who": "pt",
    "text": "I’m not sure of the exact weeks. It’s in his red book."
   },
   {
    "who": "dr",
    "text": "Thank you, I’ll check. Did they mention anything else at his checks, for example about where his wee comes out, or the other side?",
    "dom": "tasks",
    "why": "Screens hypospadias and the other testis"
   },
   {
    "who": "pt",
    "text": "They said the other side was fine. Nothing else."
   },
   {
    "who": "dr",
    "text": "Has he seemed in pain, cried a lot when his nappy is changed, or have you seen any swelling in his groin?",
    "dom": "tasks",
    "why": "Screens torsion and hernia"
   },
   {
    "who": "pt",
    "text": "No, he’s been fine. Feeding well."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "What’s been going through your mind since they told you?",
    "dom": "rto",
    "why": "Explores ideas and concerns"
   },
   {
    "who": "pt",
    "text": "I keep thinking something’s wrong with him, that he’ll need an operation, and that he won’t be able to have children."
   },
   {
    "who": "dr",
    "text": "That’s a lot to carry, especially with a new baby. What would help most today?",
    "dom": "rto",
    "why": "Validates and elicits expectations"
   },
   {
    "who": "pt",
    "text": "Knowing what it is and what happens next."
   },
   {
    "phase": "Examination and explanation",
    "clock": "5–8 min",
    "who": "dr",
    "text": "I’ll warm my hands and examine him while he’s relaxed, because cold or crying can make a testicle pop up out of the sac … His penis looks normal and the opening is in the right place. The other testicle is down in the sac. On the other side, I’m gently trying to bring it down to the bottom of the sac and see if it stays.",
    "dom": "tasks",
    "why": "Warm, relaxed examination; genitalia; mobility test"
   },
   {
    "who": "pt",
    "text": "And?"
   },
   {
    "who": "dr",
    "text": "It isn’t coming down and staying in the sac today. There are two possibilities with this. Sometimes a testicle is just pulled up by a muscle and can be brought down and stays, which we call retractile, and that doesn’t need an operation. Today it isn’t behaving like that, so it’s what we call an undescended testicle: it hasn’t finished its journey down before birth.",
    "dom": "tasks",
    "why": "Explains retractile versus undescended"
   },
   {
    "who": "pt",
    "text": "Is that serious?"
   },
   {
    "who": "dr",
    "text": "It’s common and it isn’t dangerous for him now. The reassuring things are that his other testicle is down and everything else looks normal. If both couldn’t be felt, or there were other differences, we’d want a specialist to see him urgently. That isn’t the case.",
    "dom": "tasks",
    "why": "Bilateral or atypical genitalia red flag, stated as absent"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Because it’s still up at his eight-week check, the guidance is to refer him now to the children’s surgeons, rather than wait. Some do come down in the first few months, and the surgeons will check again. If it’s still up, they do a small operation called an orchidopexy to bring it down and fix it in the sac, ideally between six months and his first birthday.",
    "dom": "tasks",
    "why": "Refers now on the NIPE timetable; orchidopexy timing"
   },
   {
    "who": "pt",
    "text": "Does he need a scan first?"
   },
   {
    "who": "dr",
    "text": "No. Scans aren’t good at finding these and they don’t change what the surgeon needs to do, so a scan would only delay things. The surgeon will examine him and decide.",
    "dom": "tasks",
    "why": "No imaging before referral"
   },
   {
    "who": "pt",
    "text": "And having children, is that affected?"
   },
   {
    "who": "dr",
    "text": "An honest answer: a testicle left up long-term can affect fertility, and it slightly raises the chance of a testicular problem, including cancer, later in life. That’s exactly why we treat it in good time. With the operation in the first year, the outlook is good. When he’s older, we’ll teach him to check himself, as all young men should.",
    "dom": "tasks",
    "why": "Balanced fertility and cancer counselling; later self-examination"
   },
   {
    "who": "pt",
    "text": "What does the operation involve? He’s so small."
   },
   {
    "who": "dr",
    "text": "It’s usually a day-case operation under a general anaesthetic, through a small cut in the groin or scrotum, and most babies go home the same day. The surgeons will explain it fully and answer your questions before anything is decided.",
    "dom": "rto",
    "why": "Explains the operation simply and defers detail to the specialist"
   },
   {
    "who": "pt",
    "text": "And could it come down by itself before then?"
   },
   {
    "who": "dr",
    "text": "It can in the first few months, and if it does the surgeons will simply discharge him. Referring now doesn’t commit him to an operation; it makes sure he’s seen in time if it doesn’t come down.",
    "dom": "tasks",
    "why": "Explains that referral now protects the surgical window"
   },
   {
    "who": "pt",
    "text": "Okay. That actually makes me feel better, knowing there’s a plan."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "One important thing: if he ever seems in sudden pain, is inconsolable, or you see a swelling or redness in his groin or scrotum, take him to A&E straight away, because a testicle that hasn’t come down can occasionally twist. Also, if you notice a change on the other side, let us know. I’ll send the referral today. Can you tell me what you’ll tell anyone at home tonight?",
    "dom": "gs",
    "why": "Torsion safety-net, referral today and teach-back"
   },
   {
    "who": "pt",
    "text": "It’s common, one hasn’t come down, he’s being referred to the children’s surgeons for a small operation in his first year, no scan needed, and A&E if he’s in sudden pain or there’s swelling."
   },
   {
    "who": "dr",
    "text": "Perfect. You did exactly the right thing bringing him. If you haven’t heard about the appointment in a few weeks, call us and we’ll chase it.",
    "dom": "gs",
    "why": "Confirms understanding; closes the referral loop"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let the mother voice all her questions before starting; early proportionate reassurance.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Maternal anxiety with a new baby; who else she will share the plan with.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “will it affect him having children” and returned to answer it directly.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (something is wrong), concern (operation, fertility), expectation (to know what it is and what happens next).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Warm, relaxed examination; both sides; mobility test; penis, urethral opening and scrotum; groin for hernia. No ultrasound.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "True undescended versus retractile, ascending or absent testis; DSD if bilateral or atypical genitalia; hernia.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Bilateral impalpable and atypical genitalia excluded; torsion and hernia symptoms screened.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Unilateral undescended testis, still present at the 6–8-week check.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Refer now to paediatric surgery or urology per the NIPE pathway; orchidopexy ideally at 6–12 months, by 18 months at the latest; no scan.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Balanced counselling on fertility and later testicular cancer risk; later self-examination; maternal reassurance.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "A&E for sudden pain, inconsolable crying or groin swelling; report changes on the other side; chase the referral if no appointment; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Rory, with his mother",
    "age": "8 weeks · male",
    "pmh": [
     "Unilateral empty scrotum noted at infant checks"
    ],
    "meds": [
     "Nil"
    ],
    "allergy": "NKDA",
    "recent": "6–8-week infant physical examination: one testis not in the scrotum. No referral recorded.",
    "reason": "“One of his testicles isn’t in the right place. Is it serious? Will he be okay?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Opening",
     "d": "Let her ask all her questions; reassure early that it is common and treatable."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Gestation, what was said at the checks, the other side, urethral opening, pain, crying, groin swelling."
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "Something wrong, an operation, future fertility; wants to know what happens next."
    },
    {
     "t": "5–8",
     "h": "Examine and explain",
     "d": "Warm hands, mobility test, genitalia; retractile versus undescended; red flags absent."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Refer now, orchidopexy at 6–12 months, no scan, honest fertility and cancer counselling, torsion safety-net, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Examines a cold, crying baby and makes no mobility test; says “wait and see until he’s one”; requests an ultrasound; either dismisses the fertility question or alarms her about cancer.",
    "pass": "Examines properly, distinguishes retractile from undescended, checks the genitalia, refers to paediatric surgery on the NIPE timetable, and counsels about fertility.",
    "exc": "All of the above, plus: names the red flags and states they are absent; explains why no scan; gives orchidopexy timing with the reason; answers fertility and cancer questions honestly without precise-sounding numbers; torsion safety-net; teach-back and a plan to chase the referral."
   },
   "avoid": [
    {
     "dont": "“Let’s wait and see until his first birthday.”",
     "instead": "“Because it’s still up at his eight-week check, I’ll refer him to the children’s surgeons now.”",
     "why": "NIPE: still undescended at 6–8 weeks means referral, so surgery can be done at 6–12 months."
    },
    {
     "dont": "“I’ll send him for an ultrasound to find it.”",
     "instead": "“A scan won’t help find it or change what the surgeon does, so we’ll refer directly.”",
     "why": "EAU/ESPU advise against imaging before referral; it delays treatment."
    },
    {
     "dont": "“It means he’ll be infertile and could get cancer.”",
     "instead": "“Left untreated it can affect fertility and slightly raise later risks, which is exactly why we treat it early.”",
     "why": "Honest, proportionate counselling informs without frightening."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Parental anxiety",
     "t": "New parents often fear the worst after screening findings. Clear explanation, a named plan and a way to chase the referral reduce anxiety."
    },
    {
     "h": "Practicalities",
     "t": "Day-case surgery in the first year; explain that the surgical team will give instructions on feeding, pain relief and follow-up."
    }
   ],
   "legal": [
    {
     "h": "Consent for a child",
     "t": "A person with parental responsibility consents to surgery for an infant. GMC 0–18 years (2007, updated 2018): involve parents in decisions and act in the child’s best interests."
    },
    {
     "h": "Screening duties",
     "t": "The NIPE programme sets referral standards; record the examination findings and the referral clearly."
    }
   ],
   "professional": [
    {
     "h": "Referral follow-through",
     "t": "Missed or delayed referrals are a known cause of late orchidopexy. Use a safety-netting system to confirm the appointment is made."
    },
    {
     "h": "Balanced communication",
     "t": "Answer fertility and cancer questions honestly without precise-sounding numbers; avoid both false reassurance and alarm."
    }
   ],
   "community": [
    {
     "h": "Health visitor",
     "t": "The health visitor can support the family, reinforce the plan and check the referral has progressed."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Bilateral impalpable testes (senior paediatric review; possible DSD or CAH)",
     "Hypospadias, micropenis, bifid scrotum or atypical genitalia (same-day paediatrics)",
     "Sudden groin or abdominal pain, inconsolable crying, groin or scrotal swelling (possible torsion: A&E)",
     "Testis previously down now not (ascending testis: refer)"
    ],
    "psychosocial": [
     "Maternal anxiety with a new baby",
     "Fear of surgery",
     "Worries about his future fertility"
    ],
    "ice": [
     "Idea: something is wrong with him",
     "Concern: an operation and his future fertility",
     "Expectation: to know what it is and what happens next"
    ]
   },
   "diagnosis": "“One of Rory’s testicles hasn’t finished coming down into the sac. It’s called an undescended testicle. It’s common and treatable, and everything else looks normal.”",
   "diagnosisLay": "“Before birth, each testicle travels from the tummy down into the sac. Sometimes one stops partway. It isn’t dangerous now, but it works best in the cooler sac, which is why the surgeons bring it down in his first year.”",
   "management": {
    "reflectIce": "“You were worried something was wrong and about his fertility. This is common, his other testicle and everything else look normal, and treating it in his first year gives him the best outlook.”",
    "psychosocial": "Acknowledge a new parent’s anxiety; give a clear, named next step; offer a way to chase the referral; involve the health visitor.",
    "sharedPlan": [
     "Refer now to paediatric surgery or urology per the local NIPE pathway",
     "Orchidopexy ideally at 6–12 months, by 18 months at the latest",
     "No ultrasound before referral",
     "If a retractile testis is found later, yearly review until puberty",
     "Later: testicular self-awareness from puberty"
    ],
    "safetyNet": [
     "A&E for sudden pain, inconsolable crying, groin or scrotal swelling or redness",
     "Tell us if the other side changes",
     "Call if no appointment within a few weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Undescended testis protocol",
    "s": "NIPE timetable · mobility test · no imaging",
    "href": "management/undescended-testis.html"
   },
   {
    "ic": "🗺️",
    "t": "Scrotal pain pathway",
    "s": "Torsion red flags",
    "href": "algorithms/scrotal-pain.html"
   },
   {
    "ic": "🗺️",
    "t": "Testicular lump pathway",
    "s": "Later-life awareness · NICE NG12 (updated April 2026)",
    "href": "algorithms/testicular-lump.html"
   }
  ],
  "pitfalls": {
   "intro": "The marks here sit in a proper examination, the right referral at the right time, and honest counselling that calms rather than frightens.",
   "items": [
    {
     "dom": "tasks",
     "fail": "“Wait and see until he’s one.”",
     "why": "NIPE and the site’s undescended testis protocol: still undescended at 6–8 weeks means refer now, so surgery happens at 6–12 months.",
     "fix": "Refer to paediatric surgery or urology today and explain the timing."
    },
    {
     "dom": "tasks",
     "fail": "Requesting an ultrasound before referral.",
     "why": "EAU/ESPU: imaging doesn’t reliably locate the testis and delays treatment.",
     "fix": "Refer directly and explain why no scan is needed."
    },
    {
     "dom": "tasks",
     "fail": "No mobility test, or examining a cold, crying baby.",
     "why": "A retractile testis can be mislabelled as undescended, or the reverse.",
     "fix": "Warm hands, relaxed baby, bring it down and see whether it stays."
    },
    {
     "dom": "tasks",
     "fail": "Not looking at the penis and the other side.",
     "why": "Bilateral impalpable testes or hypospadias change the urgency (possible DSD or CAH).",
     "fix": "Examine the whole genitalia and state that the red flags are absent."
    },
    {
     "dom": "rto",
     "fail": "Dodging the fertility question, or answering it with alarming figures.",
     "why": "She asked directly; evasion or fear both lose marks.",
     "fix": "Honest and proportionate: why early surgery helps, and later self-examination."
    },
    {
     "dom": "gs",
     "fail": "No torsion safety-net and no plan to chase the referral.",
     "why": "Torsion of an undescended testis is easily missed, and referrals get lost.",
     "fix": "A&E for sudden pain or swelling; call if no appointment arrives."
    }
   ]
  }
 },
 "wilsons-disease": {
  "stem": {
   "name": "Adam (surname not given)",
   "age": "19-year-old man",
   "pmh": [
    "Recent blood tests: abnormal liver function",
    "Low alcohol intake reported by family"
   ],
   "meds": [
    "Check the record for current medication"
   ],
   "allergy": "None recorded",
   "recent": "Over several months: new hand tremor, intermittently slurred speech, and withdrawal, moodiness and falling college performance. Attends with a parent.",
   "reason": "(Parent) “Could it all be connected?”"
  },
  "knowledge": {
   "guideline": "[1] EASL–ERN Clinical Practice Guidelines on Wilson’s disease (2025) (international) · [2] AASLD practice guidance on Wilson disease (2022) (international) · [3] British Society of Gastroenterology guideline on the management of abnormal liver blood tests (2018) · [4] BNF penicillamine, trientine and zinc acetate monographs · [5] GMC Confidentiality: good practice in handling patient information (2017)",
   "summary": "A young man with abnormal liver tests, a new tremor, slurred speech and a change in mood and behaviour should make you think of Wilson’s disease. It is an inherited disorder of copper build-up in the liver and brain: rare, treatable, and devastating if missed. Check caeruloplasmin and liver tests, refer urgently to hepatology (and neurology) for copper studies and a slit-lamp eye examination, and plan family screening. Adam is an adult, so ask him about his parent being present, and see him alone for part of the consultation.",
   "points": [
    {
     "h": "The combination is the clue",
     "t": "Unexplained liver disease together with neurological signs (tremor, dysarthria, dystonia, clumsiness, parkinsonism) or psychiatric change (mood, personality, behaviour, falling school or work performance) in a child or young adult. Consider it in anyone with unexplained liver disease, especially under about 40 [1]."
    },
    {
     "h": "Why it matters",
     "t": "Treatment stops progression and can reverse much of the damage. Untreated, it leads to cirrhosis, acute liver failure (often with haemolysis) and permanent neurological harm. Do not put the tremor down to anxiety, or the mood change to adolescence."
    },
    {
     "h": "Tests",
     "t": "A low serum caeruloplasmin supports it, but a normal level does not exclude it. The specialist adds 24-hour urinary copper, a slit-lamp examination for Kayser–Fleischer rings (present in most people with neurological disease), genetic testing (ATP7B) and sometimes liver copper. Combined scoring systems such as the Leipzig score are used [1]."
    },
    {
     "h": "Primary care work-up",
     "t": "Repeat LFTs with a full liver aetiology screen [3]: FBC (haemolysis), clotting, albumin, U&E, hepatitis B and C serology, autoantibodies and immunoglobulins, ferritin and transferrin saturation, caeruloplasmin, and a liver ultrasound. Ask about alcohol, drugs and supplements directly with Adam."
    },
    {
     "h": "Referral",
     "t": "Refer urgently to hepatology, and to neurology for the movement and speech symptoms. Arrange same-day assessment for jaundice, confusion, drowsiness, bleeding or bruising, or vomiting blood, which suggest liver failure."
    },
    {
     "h": "Treatment",
     "t": "Specialist-led and lifelong: chelation with penicillamine or trientine, or zinc to block absorption; chelators are preferred for significant liver disease [1, 2, 4]. Neurological symptoms can briefly worsen when treatment starts. Stopping treatment can cause fatal liver failure, so adherence is vital. Liver transplant is used for acute liver failure or end-stage disease."
    },
    {
     "h": "Family and mental health",
     "t": "Inheritance is autosomal recessive, so brothers and sisters have a 1 in 4 chance of being affected and should be screened. Psychiatric symptoms need assessment and support in their own right, including a risk check."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and consent",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Ahmed. Adam, it’s good to meet you. Are you happy for your parent to stay while we talk?",
    "dom": "rto",
    "why": "Addresses the adult patient first and checks consent"
   },
   {
    "who": "pt",
    "text": "Adam: Yeah, that’s fine."
   },
   {
    "who": "dr",
    "text": "Thank you. What’s been happening?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "Parent: We’re worried about Adam. His blood tests showed his liver’s not right, but he doesn’t drink much. Over the last several months his hands have started shaking, his speech is a bit slurred sometimes, and he’s become really withdrawn and moody. His college work’s fallen apart. Could it all be connected?"
   },
   {
    "who": "dr",
    "text": "That’s a really good question, and I’ll come back to it. Adam, how does it seem from your side?",
    "dom": "rto",
    "why": "Brings the patient back into the conversation"
   },
   {
    "who": "pt",
    "text": "Adam: I don’t know. My hands shake and it’s hard to write. I just feel flat."
   },
   {
    "phase": "Focused history",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When did you first notice the shaking, and is it there at rest, or when you use your hands?",
    "dom": "tasks",
    "why": "Characterises the tremor"
   },
   {
    "who": "pt",
    "text": "Adam: A few months ago. It makes writing hard."
   },
   {
    "who": "dr",
    "text": "Any stiffness, clumsiness, trouble swallowing, or drooling?",
    "dom": "tasks",
    "why": "Screens for other neurological features"
   },
   {
    "who": "pt",
    "text": "Adam: Not really. Just the shaking and my speech sometimes."
   },
   {
    "who": "dr",
    "text": "Have you noticed yellowing of your eyes or skin, dark urine, itching, swelling of your tummy or legs, or easy bruising?",
    "dom": "tasks",
    "why": "Screens for liver decompensation"
   },
   {
    "who": "pt",
    "text": "Adam: No, none of that."
   },
   {
    "who": "dr",
    "text": "Adam, I’d like to ask you a few questions on your own, which I do with all young adults. Would that be all right?",
    "dom": "tasks",
    "why": "Creates space for a confidential history"
   },
   {
    "who": "pt",
    "text": "Parent: Of course, I’ll wait outside."
   },
   {
    "who": "dr",
    "text": "Thanks, Adam. How much do you really drink, and do you use any drugs, supplements or anything from the gym or the internet?",
    "dom": "tasks",
    "why": "Confidential alcohol, drug and supplement history"
   },
   {
    "who": "pt",
    "text": "Adam: Honestly, barely anything. No drugs."
   },
   {
    "who": "dr",
    "text": "You said you feel flat. Have you had thoughts that life isn’t worth living, or of harming yourself?",
    "dom": "tasks",
    "why": "Risk assessment"
   },
   {
    "who": "pt",
    "text": "Adam: No. I just can’t concentrate and I’ve stopped seeing people."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. Shall we ask your parent back in?",
    "dom": "rto",
    "why": "Respects his choice"
   },
   {
    "who": "pt",
    "text": "Adam: Yeah."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You both wondered if it’s all connected. What have you been thinking it might be?",
    "dom": "rto",
    "why": "Elicits ideas"
   },
   {
    "who": "pt",
    "text": "Parent: We didn’t know. People said teenage moods, but the shaking doesn’t fit that."
   },
   {
    "who": "dr",
    "text": "What worries you most?",
    "dom": "rto",
    "why": "Explores concern"
   },
   {
    "who": "pt",
    "text": "Parent: That something serious is being missed."
   },
   {
    "who": "dr",
    "text": "And Adam, what would you like from today?",
    "dom": "rto",
    "why": "Elicits the patient’s own expectations"
   },
   {
    "who": "pt",
    "text": "Adam: To know what’s wrong, I suppose."
   },
   {
    "phase": "Examination and explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’d like to examine you: your eyes, your tummy for the liver and spleen, your hands and the tremor, your speech, walking and coordination.",
    "dom": "tasks",
    "why": "Targeted liver and neurological examination"
   },
   {
    "who": "pt",
    "text": "Adam: Okay."
   },
   {
    "who": "dr",
    "text": "You were right to ask whether it’s connected. When a young person has a liver problem together with a new tremor, slurred speech and a change in mood, we must think about a condition called Wilson’s disease. The body can’t get rid of copper properly, so it builds up in the liver and the brain.",
    "dom": "tasks",
    "why": "Names Wilson’s disease and links the features"
   },
   {
    "who": "pt",
    "text": "Parent: Is that serious?"
   },
   {
    "who": "dr",
    "text": "It’s rare, and it may not be what Adam has. But it’s important to check for because it’s treatable, and treatment can stop it and often improve symptoms. If it were missed it could cause lasting damage, so I want it looked at quickly.",
    "dom": "rto",
    "why": "Honest, proportionate explanation"
   },
   {
    "who": "pt",
    "text": "Adam: So the mood stuff might be part of it?"
   },
   {
    "who": "dr",
    "text": "It could be. Copper can affect mood, concentration and behaviour. It isn’t you being difficult.",
    "dom": "rto",
    "why": "Validates the psychiatric symptoms as part of the illness"
   },
   {
    "phase": "Investigations and referral",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’ll repeat the liver tests today with a full set of liver checks, including a blood test called caeruloplasmin, a blood count, clotting and a liver scan. I’m also referring you urgently to the liver specialists, who will do copper tests and have an eye specialist look for copper deposits at the edge of the cornea. I’ll ask neurology to see you too.",
    "dom": "tasks",
    "why": "Aetiology screen, caeruloplasmin and urgent specialist referral"
   },
   {
    "who": "pt",
    "text": "Parent: And if it is Wilson’s?"
   },
   {
    "who": "dr",
    "text": "Treatment is with tablets that remove copper or stop it being absorbed, taken for life and supervised by the specialists. Because it runs in families, any brothers or sisters would need checking, as treating early prevents problems.",
    "dom": "tasks",
    "why": "Outlines treatment and family screening"
   },
   {
    "who": "pt",
    "text": "Adam: What about college?"
   },
   {
    "who": "dr",
    "text": "I can write to college to explain there’s a medical problem being investigated, so they can give you some slack. And I’d like to keep an eye on your mood as we go.",
    "dom": "gs",
    "why": "Practical support and mental health follow-up"
   },
   {
    "phase": "Safety net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Please get seen the same day if Adam goes yellow, becomes confused or unusually drowsy, bruises or bleeds easily, vomits blood, or if his mood drops or he has any thoughts of harming himself. What will you take away from today?",
    "dom": "gs",
    "why": "Specific safety net and teach-back"
   },
   {
    "who": "pt",
    "text": "Adam: Bloods and a scan, urgent liver and neurology referral, maybe an eye test. Come back quickly if I go yellow or confused, or feel worse in myself."
   },
   {
    "who": "dr",
    "text": "That’s right. I’ll call you with the blood results this week and see you again in two weeks.",
    "dom": "gs",
    "why": "Clear results plan and follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Checked Adam’s consent for his parent to stay; open question; heard both the parent’s concern and Adam’s own account.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored college, social withdrawal and mood; took a confidential alcohol, drug and supplement history alone with Adam.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up ‘could it all be connected?’ as the key cue linking the liver, tremor, speech and mood.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: teenage moods did not fit. Concern: something serious being missed. Expectation: to know what is wrong.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Examined for jaundice, liver and spleen, tremor, speech, gait and coordination; LFTs, liver aetiology screen with caeruloplasmin, FBC, clotting, liver ultrasound.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Wilson’s disease versus alcohol or drug-related liver injury, viral or autoimmune hepatitis, primary psychiatric illness and other tremors.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for liver failure and haemolysis; risk assessment for self-harm.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Possible Wilson’s disease, needing urgent specialist confirmation.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Urgent hepatology referral for copper studies and slit-lamp examination; neurology referral; lifelong treatment outlined.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Family screening explained; mood support; college letter.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day help for jaundice, confusion, drowsiness, bleeding or self-harm thoughts; results this week; review in two weeks.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Investigations & results"
   ],
   "stem": {
    "name": "Adam",
    "age": "19 years · male",
    "pmh": [
     "Abnormal liver tests"
    ],
    "meds": [
     "Check the record"
    ],
    "allergy": "None recorded",
    "recent": "Months of tremor, slurred speech, withdrawal and falling college work. Attends with a parent.",
    "reason": "“Could it all be connected?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Consent and open",
     "d": "Check Adam is happy for his parent to stay; hear both accounts."
    },
    {
     "t": "1–5",
     "h": "History",
     "d": "Tremor, speech, other neurology, liver symptoms; alone with Adam for alcohol, drugs and risk."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "‘Is it connected?’; fear of something missed; wanting answers."
    },
    {
     "t": "6–8",
     "h": "Examine and explain",
     "d": "Liver and neurological examination; Wilson’s disease named honestly."
    },
    {
     "t": "8–11",
     "h": "Tests and referral",
     "d": "Liver screen with caeruloplasmin, ultrasound; urgent hepatology and neurology; family screening; college letter."
    },
    {
     "t": "11–12",
     "h": "Safety net",
     "d": "Liver failure and mood red flags; results call; review; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Treats the LFTs as alcohol and the mood as adolescence; talks only to the parent; no caeruloplasmin; routine or no referral.",
    "pass": "Thinks of Wilson’s disease from the combination, checks caeruloplasmin and LFTs, refers to hepatology and mentions family screening.",
    "exc": "All of that, plus: checks Adam’s consent and sees him alone; screens risk; explains that mood change can be part of the illness; urgent referral with neurology input; clear liver-failure safety net; practical college support; teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s probably just teenage moods and a bit of drinking.”",
     "instead": "“The liver, the tremor and the mood change together make me think of a treatable condition we must check for.”",
     "why": "Separating the problems misses the diagnosis."
    },
    {
     "dont": "Talking only to the parent.",
     "instead": "“Adam, how does it seem from your side?”",
     "why": "He is an adult patient; his account and consent matter."
    },
    {
     "dont": "“Normal caeruloplasmin, so it’s not Wilson’s.”",
     "instead": "“The specialists will do copper tests and an eye examination as well.”",
     "why": "A normal caeruloplasmin does not exclude it (EASL–ERN 2025, international)."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Education",
     "t": "Falling grades are part of the picture. A letter to college helps him get extensions and support while he is investigated."
    },
    {
     "h": "Family",
     "t": "Parents often feel guilt about missing signs, or about passing on a gene. Acknowledge this if the diagnosis is confirmed."
    }
   ],
   "legal": [
    {
     "h": "Consent and confidentiality",
     "t": "At 19, Adam is an adult. He decides who is present and what is shared. Seeing him alone for part of the consultation respects his confidentiality (GMC Confidentiality, 2017)."
    },
    {
     "h": "Capacity",
     "t": "If cognitive or psychiatric change became severe, assess capacity for specific decisions under the Mental Capacity Act 2005."
    }
   ],
   "professional": [
    {
     "h": "Diagnostic overshadowing",
     "t": "Labelling neuropsychiatric change as adolescence or mental illness can delay the diagnosis. Consider physical causes when features do not fit."
    },
    {
     "h": "Genetics",
     "t": "Screening relatives needs Adam’s consent to share his diagnosis. Discuss this with him and the specialist team."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Patient support organisations for Wilson’s disease and for liver conditions, such as the British Liver Trust, offer information for families."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Jaundice, confusion, drowsiness, bleeding or bruising: possible acute liver failure",
     "Dark urine or pallor: haemolysis",
     "Rapidly worsening speech, swallowing or walking",
     "Self-harm thoughts or severe mood change"
    ],
    "psychosocial": [
     "Social withdrawal and falling college work",
     "Parental worry",
     "His autonomy as an adult"
    ],
    "ice": [
     "Idea: not just teenage moods",
     "Concern: something serious being missed",
     "Expectation: to know what is wrong"
    ]
   },
   "diagnosis": "Possible Wilson’s disease: abnormal liver tests with an action tremor, dysarthria and neuropsychiatric change in a 19-year-old. Other liver causes and a primary psychiatric illness to be considered.",
   "diagnosisLay": "“There’s a rare condition called Wilson’s disease, where copper builds up in the liver and brain. It could explain the liver tests, the shaking, the speech and the mood. It’s treatable, so we need to check for it quickly.”",
   "management": {
    "reflectIce": "“You asked whether it’s all connected. It may well be, and that’s exactly why we’re checking for Wilson’s disease.”",
    "psychosocial": "Adam’s consent and confidential time; college letter; mood follow-up.",
    "sharedPlan": [
     "Repeat LFTs with liver aetiology screen, caeruloplasmin, FBC, clotting, liver ultrasound",
     "Urgent hepatology referral for copper studies, slit-lamp examination and genetics",
     "Neurology referral for tremor and dysarthria",
     "Family screening if confirmed; lifelong specialist treatment"
    ],
    "safetyNet": [
     "Same-day assessment for jaundice, confusion, drowsiness, bleeding or vomiting blood",
     "Urgent help for self-harm thoughts",
     "Results this week; review in two weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Abnormal LFTs",
    "s": "Case walkthrough · liver aetiology screen",
    "href": "../cases/abnormal-lfts.html"
   },
   {
    "ic": "🗺️",
    "t": "Abnormal LFTs",
    "s": "Visual algorithm · includes Wilson’s disease",
    "href": "algorithms/abnormal-lfts.html"
   },
   {
    "ic": "🗺️",
    "t": "Tremor",
    "s": "Visual algorithm · young-onset tremor",
    "href": "algorithms/tremors.html"
   },
   {
    "ic": "🗺️",
    "t": "Jaundice",
    "s": "Visual algorithm · when to act the same day",
    "href": "algorithms/jaundice.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by solving three small problems instead of one big one. The marks are for joining the dots and getting the right specialist quickly.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Treating the liver, tremor and mood as separate problems.",
     "why": "The combination in a young person is the prompt for Wilson’s disease.",
     "fix": "Ask yourself what single diagnosis links them."
    },
    {
     "dom": "tasks",
     "fail": "Blaming alcohol without a confidential history.",
     "why": "He may not speak freely in front of a parent, and it may not be alcohol.",
     "fix": "See him alone and take a full alcohol, drug and supplement history."
    },
    {
     "dom": "tasks",
     "fail": "No caeruloplasmin or referral.",
     "why": "Delay risks liver failure and permanent neurological damage.",
     "fix": "Caeruloplasmin with a liver screen, then urgent hepatology referral."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting family screening.",
     "why": "Siblings have a 1 in 4 risk and benefit from early treatment.",
     "fix": "Mention screening of brothers and sisters."
    },
    {
     "dom": "rto",
     "fail": "Speaking only to the parent.",
     "why": "Adam is an adult and the patient.",
     "fix": "Check his consent and address him directly."
    },
    {
     "dom": "gs",
     "fail": "No liver-failure or mood safety net.",
     "why": "Acute liver failure and self-harm are the dangerous outcomes.",
     "fix": "Give specific red flags and a review date."
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
