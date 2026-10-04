/* ============================================================
   Reasoning GP — The Hot Seat: add-on set, batch 12
   Stem, knowledge, model consultation, scorecard tasks, extras,
   knowledge base, playbook, links and examiner pitfalls for
   20 further cases. Loaded after sca-pitfalls.js and
   before sca-practice.js; merges into the existing maps and
   attaches to the case objects exactly as those files do.
   Educational; original content; primary sources cited.
   ============================================================ */
(function(){
  var ADD = {
 "abnormal-cervical-screening": {
  "stem": {
   "name": "Carla Nunez",
   "age": "29-year-old woman",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "Cervical screening result: high-risk HPV positive with borderline or low-grade dyskaryosis. Letter says she will be invited to colposcopy.",
   "reason": "Video consultation: frightened by the letter; asking whether she has cancer."
  },
  "knowledge": {
   "guideline": "[1] GOV.UK Cervical screening: programme and colposcopy management (NHS Cervical Screening Programme) · [2] NHS England: cervical screening changes from 1 July 2025 · [3] UKHSA Green Book, chapter 18a (HPV, June 2023) · [4] NICE NG12 (updated April 2026) · [5] NHS Digital Cervical Screening Programme, England, colposcopy standards",
   "summary": "An HPV-positive result with low-grade cell changes is a screening finding, not a cancer diagnosis. Colposcopy looks closer and treats any significant area to prevent cancer. Lead with that, explain HPV without blame, and make sure she attends.",
   "points": [
    {
     "h": "How screening works now",
     "t": "England uses HPV primary screening: the sample is tested for high-risk HPV first, and only HPV-positive samples are examined for cell changes (cytology). HPV positive with no cell changes: repeat test in 12 months. HPV positive with any cell changes (borderline, low-grade or high-grade dyskaryosis): direct referral to colposcopy [1][2]."
    },
    {
     "h": "2025 interval change",
     "t": "NHS England [2]: from 1 July 2025, people aged 25–49 who test HPV negative are recalled every 5 years instead of 3 (50–64 already 5-yearly). Anyone HPV positive within the previous 5 years without a follow-up negative HPV test is recalled sooner before moving to the 5-year interval."
    },
    {
     "h": "What the result means",
     "t": "High-risk HPV is very common and usually cleared by the immune system within a couple of years. Dyskaryosis means abnormal cells, not cancer. Low-grade changes often return to normal without treatment. Persistent high-risk HPV is what drives the slow development of pre-cancer (CIN) over years, which is why the programme catches it early."
    },
    {
     "h": "Colposcopy",
     "t": "A clinic examination with a magnifying lens after a speculum is inserted; dilute solutions show abnormal areas, and a small biopsy may be taken. Urgency standard: high-grade referrals are offered an appointment within 2 weeks [5]; low-grade referrals are routine."
    },
    {
     "h": "After colposcopy",
     "t": "NHSCSP [1]: low-grade referral with a normal colposcopy returns to routine recall; biopsy-proven or colposcopic CIN1 has a repeat screening test in the community at 12 months. CIN2 or worse is usually treated, most often by large loop excision of the transformation zone (LLETZ), with a test of cure about 6 months after treatment."
    },
    {
     "h": "HPV vaccine",
     "t": "Green Book chapter 18a [3]: people who missed the school HPV vaccine remain eligible until their 25th birthday (one dose if under 25). At 29 she is outside routine eligibility. The vaccine prevents new infection and does not treat an existing one, so it does not change her current plan."
    },
    {
     "h": "Symptoms change the pathway",
     "t": "NICE NG12 (updated April 2026) [4]: consider a suspected cancer pathway referral if, on examination, the appearance of the cervix is consistent with cervical cancer. Post-coital or intermenstrual bleeding or unusual discharge need examination in their own right, whatever the screening history."
    },
    {
     "h": "Relationships and blame",
     "t": "HPV can stay undetectable for years before being picked up, so a positive result cannot show when or from whom it came. It is not evidence of infidelity. Condoms reduce but do not eliminate transmission; there is no routine HPV test for male partners."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Miss Nunez, I’m Dr Clarke. Can you hear me okay, and are you somewhere private? … Thank you. What’s been happening?",
    "dom": "rto",
    "why": "Checks privacy; open question"
   },
   {
    "who": "pt",
    "text": "I got this letter about my smear test. It says something about HPV and abnormal cells and that I need a colposcopy. I’ve been in bits since it arrived. Do I have cancer? What does it all mean? And does the HPV thing mean my partner’s cheated, or that I’ve done something?"
   },
   {
    "who": "dr",
    "text": "I can see how frightening that letter has been. Let me answer the biggest question straight away: this result does not mean you have cancer. I’ll explain exactly what it does mean, and I’ll come back to your partner too. Is that okay?",
    "dom": "rto",
    "why": "Leads with the key reassurance; acknowledges all her questions"
   },
   {
    "who": "pt",
    "text": "Yes. Please."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Can you read me the exact wording on the letter, so I explain your result and not someone else’s?",
    "dom": "tasks",
    "why": "Confirms the actual result before explaining"
   },
   {
    "who": "pt",
    "text": "It says “high-risk HPV found” and “borderline or low-grade changes” and that I’ll be invited to colposcopy."
   },
   {
    "who": "dr",
    "text": "Thank you, that matches what I see in your record. Have you had any bleeding between periods or after sex, or any unusual discharge or pain?",
    "dom": "tasks",
    "why": "Screens symptoms that would change the pathway"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "Have you had an abnormal result before, or been to colposcopy?",
    "dom": "tasks",
    "why": "Screening history"
   },
   {
    "who": "pt",
    "text": "Not that I remember."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "When you read the letter, what went through your mind?",
    "dom": "rto",
    "why": "Explores her ideas"
   },
   {
    "who": "pt",
    "text": "Cancer. Straight away. And then that someone must have given me something."
   },
   {
    "who": "dr",
    "text": "That’s a very common reaction, and understandable. What would you most like to leave today knowing?",
    "dom": "rto",
    "why": "Elicits expectation"
   },
   {
    "who": "pt",
    "text": "Whether I’m going to be okay. And what to say to my partner."
   },
   {
    "phase": "Explanation",
    "clock": "5–9 min",
    "who": "dr",
    "text": "The screening test looks first for a virus called HPV. Only if HPV is found does the lab look at the cells. In your sample they found HPV and some mild changes in the cells. Mild changes are not cancer. They’re early changes that often go back to normal by themselves. The whole point of screening is to find them years before anything could become cancer.",
    "dom": "tasks",
    "why": "Explains HPV primary screening and low-grade changes accurately"
   },
   {
    "who": "pt",
    "text": "So why do I need this colposcopy thing?"
   },
   {
    "who": "dr",
    "text": "Because the virus and the changes are both there, the rules are to have a closer look rather than just repeat the test. At colposcopy, a nurse or doctor uses a speculum like a smear, then looks at the cervix through a magnifier. They may take a tiny sample. You’re awake, and it doesn’t usually take long. It’s a preventive check.",
    "dom": "tasks",
    "why": "Demystifies colposcopy; explains why referral follows"
   },
   {
    "who": "pt",
    "text": "And if they find something?"
   },
   {
    "who": "dr",
    "text": "If there’s an area that needs treatment, it’s usually removed with a thin wire loop under local anaesthetic, often at the same or a later visit. Then you’d have a check about six months later. If it’s only mild, they’ll usually just repeat your test in a year. Either way, this is the system catching things early.",
    "dom": "tasks",
    "why": "Outlines outcomes: LLETZ with test of cure, or 12-month repeat"
   },
   {
    "who": "pt",
    "text": "Okay. And my partner?"
   },
   {
    "who": "dr",
    "text": "HPV is extremely common. Most people who have ever had sex will catch it at some point, usually without knowing. It can stay silent for years before a test picks it up, so this result can’t tell us when you caught it or who from. It isn’t a sign that your partner has cheated, or that you’ve done anything wrong.",
    "dom": "tasks",
    "why": "Explains HPV latency and removes blame"
   },
   {
    "who": "pt",
    "text": "That’s a huge relief. I didn’t know what to think."
   },
   {
    "who": "dr",
    "text": "If it helps, you could tell your partner exactly that: it’s a very common virus that can be carried for years, and the screening is doing its job.",
    "dom": "rto",
    "why": "Offers words for a difficult conversation"
   },
   {
    "phase": "Plan",
    "clock": "9–11 min",
    "who": "dr",
    "text": "The most important thing is going to the colposcopy appointment. The hospital will contact you directly. If you haven’t heard within a few weeks, ring us and we’ll chase it. Can I ask: is there anything that might make it hard to go?",
    "dom": "tasks",
    "why": "Stresses attendance; offers to chase; explores barriers"
   },
   {
    "who": "pt",
    "text": "Just nerves, really."
   },
   {
    "who": "dr",
    "text": "That’s normal. You can take someone with you, and you can ask them to stop at any point. The hospital leaflet explains each step as well. One more thing you might read about is the HPV vaccine. It prevents new infections but doesn’t treat an existing one, so it doesn’t change your plan now.",
    "dom": "tasks",
    "why": "Practical support; accurate HPV vaccine message"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If before your appointment you notice bleeding after sex or between periods, or an unusual discharge, contact us so we can examine you. Could you tell me in your own words what the result means?",
    "dom": "gs",
    "why": "Specific symptom safety-net; teach-back"
   },
   {
    "who": "pt",
    "text": "It’s not cancer. I’ve got HPV and mild changes. Colposcopy is a closer look and maybe a small treatment. It doesn’t mean anyone cheated. I need to go."
   },
   {
    "who": "dr",
    "text": "Perfect. And if more questions come up after we finish, which they often do, book back in with me.",
    "dom": "gs",
    "why": "Open door for later questions"
   },
   {
    "who": "pt",
    "text": "Thank you. I feel so much better."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Checked privacy; open question; let her voice all three questions.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Relationship worry and distress since the letter explored without judgement.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “does the HPV thing mean my partner’s cheated?” and returned to it.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (cancer; someone gave her something), concern (being okay; the relationship), expectation (to understand and know what to say to her partner).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Confirmed the exact result wording; screening history; symptom check for bleeding or discharge.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Screening abnormality vs symptomatic disease; knows NICE NG12 (updated April 2026) applies only to a suspicious-looking cervix.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened post-coital and intermenstrual bleeding and discharge; knows high-grade referrals are seen within 2 weeks.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "High-risk HPV with low-grade changes: screening abnormality, not cancer.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Colposcopy explained; LLETZ and test of cure or 12-month repeat outlined; offer to chase the appointment.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Barriers to attending explored; partner conversation supported; accurate HPV vaccine message at 29.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Symptom safety-net before colposcopy; chase if no appointment; open door for later questions.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Investigations & results"
   ],
   "stem": {
    "name": "Carla Nunez",
    "age": "29 years · female",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "Nil recorded"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Cervical screening: hrHPV positive; cytology borderline or low-grade dyskaryosis. Direct referral to colposcopy by the programme.",
    "reason": "Video consultation: “worried about my smear letter”."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Lead with the answer",
     "d": "She asks if she has cancer. Answer that first, then promise to return to her other questions."
    },
    {
     "t": "1–4",
     "h": "Confirm and screen",
     "d": "Exact letter wording, bleeding or discharge, previous abnormal results."
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "Cancer fear, the relationship worry, what she wants to leave knowing."
    },
    {
     "t": "5–9",
     "h": "Explain",
     "d": "HPV primary screening, mild changes, why colposcopy, what happens there, possible outcomes, HPV and blame."
    },
    {
     "t": "9–12",
     "h": "Plan and close",
     "d": "Attendance, chasing, barriers, HPV vaccine accuracy, symptom safety-net, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Explains pathology jargon without first answering “do I have cancer?”; implies HPV reflects sexual behaviour; tells her to get the HPV vaccine now; no emphasis on attending colposcopy.",
    "pass": "Reassures that this is not cancer, explains HPV and low-grade changes, describes colposcopy, stresses attending and safety-nets for bleeding.",
    "exc": "All of the above, plus: answers the cancer question in the first minute; explains how HPV primary screening works; addresses the partner question with HPV latency and gives her words to use; outlines LLETZ, test of cure and 12-month repeat; knows the 2025 interval change and vaccine eligibility; offers to chase the appointment; teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s probably nothing.”",
     "instead": "“It isn’t cancer. It’s an early change that the screening is designed to catch, and the next step is a closer look.”",
     "why": "Vague reassurance may lead her to skip colposcopy."
    },
    {
     "dont": "“HPV is a sexually transmitted infection, so you’ll need to talk to your partner.”",
     "instead": "“HPV is extremely common and can stay silent for years, so this can’t show when you caught it or from whom.”",
     "why": "Framing HPV as a recent STI fuels blame and relationship harm."
    },
    {
     "dont": "“You should get the HPV jab now.”",
     "instead": "“The vaccine prevents new infections but doesn’t treat an existing one, so it doesn’t change your plan now.”",
     "why": "She is outside NHS eligibility (to 25th birthday) and it would not treat her current infection."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Relationship strain",
     "t": "HPV results often trigger suspicion of infidelity. Accurate information about latency prevents avoidable harm."
    },
    {
     "h": "Fear and avoidance",
     "t": "Anxiety and embarrassment are common reasons for missing colposcopy. Explore barriers and offer practical support."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality",
     "t": "Her result is confidential. She chooses what to tell her partner; the GP does not contact partners about HPV."
    },
    {
     "h": "Chaperones",
     "t": "GMC Intimate examinations and chaperones (2024): offer a chaperone if she needs a speculum examination for symptoms."
    }
   ],
   "professional": [
    {
     "h": "Failsafe",
     "t": "The practice should be able to confirm the colposcopy referral has happened; offer to chase if she hears nothing."
    },
    {
     "h": "Up-to-date advice",
     "t": "Screening intervals changed on 1 July 2025 for 25–49s who test HPV negative. Out-of-date advice creates confusion at recall."
    }
   ],
   "community": [
    {
     "h": "Screening uptake",
     "t": "A well-handled abnormal result supports future attendance, for her and for others she talks to."
    },
    {
     "h": "Support",
     "t": "The NHS cervical screening pages and cervical cancer charities provide plain-language information about HPV and colposcopy."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Post-coital or intermenstrual bleeding",
     "Persistent unusual or bloodstained discharge",
     "Pelvic pain",
     "Cervix that looks suspicious on examination (NICE NG12 (updated April 2026): consider suspected cancer pathway referral)"
    ],
    "psychosocial": [
     "Fear of cancer since the letter arrived",
     "Worry that HPV means infidelity",
     "Nerves about the procedure and attending"
    ],
    "ice": [
     "Idea: abnormal smear means cancer; HPV means someone gave her something",
     "Concern: whether she will be okay; the relationship",
     "Expectation: understand the letter and know what to say to her partner"
    ]
   },
   "diagnosis": "“Your test found HPV, a very common virus, and some mild changes in the cells of the cervix. This is not cancer. It’s an early change that screening is designed to find.”",
   "diagnosisLay": "“Think of screening as a smoke alarm that goes off at the first whiff of toast, long before any fire. Colposcopy is someone coming to check the kitchen. Most of the time it’s just toast.”",
   "management": {
    "reflectIce": "“You thought straight away that this meant cancer, and wondered whether your partner had cheated. Neither is what this result shows.”",
    "psychosocial": "Give her words for the partner conversation; address nerves about colposcopy; open door for questions after she has read the leaflet.",
    "sharedPlan": [
     "Attend colposcopy: the hospital will invite her directly; practice will chase if no contact",
     "Colposcopy: closer look ± small biopsy; LLETZ if CIN2 or worse, then test of cure at about 6 months",
     "If only mild changes: repeat screening test at 12 months",
     "HPV vaccine not indicated now at 29 and does not treat current infection"
    ],
    "safetyNet": [
     "Contact the practice for bleeding after sex or between periods, or unusual discharge",
     "Ring if no colposcopy appointment arrives",
     "Book back for further questions"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Cervical screening",
    "s": "Case walkthrough · HPV primary screening",
    "href": "../cases/cervical-screening.html"
   },
   {
    "ic": "💠",
    "t": "UK screening programmes",
    "s": "Protocol · NHS screening",
    "href": "management/screening-programmes.html"
   },
   {
    "ic": "🗺️",
    "t": "Vaginal bleeding pathway",
    "s": "Visual algorithm · post-coital and intermenstrual bleeding",
    "href": "algorithms/vaginal-bleeding.html"
   },
   {
    "ic": "💠",
    "t": "Contraception protocol",
    "s": "Health promotion · screening intervals",
    "href": "management/contraception.html"
   }
  ],
  "pitfalls": {
   "intro": "The trap is explaining the science before answering her real question. Marks sit in answering “is it cancer?” first, explaining HPV without blame, and securing attendance.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Starting with the biology of HPV and CIN before answering “do I have cancer?”",
     "why": "She cannot absorb anything while that question is unanswered.",
     "fix": "“This result does not mean you have cancer.” Then explain."
    },
    {
     "dom": "tasks",
     "fail": "Describing the old smear-first system.",
     "why": "England uses HPV primary screening; cytology is only read when HPV is found.",
     "fix": "“The test looks for HPV first, then at the cells.”"
    },
    {
     "dom": "tasks",
     "fail": "Advising the HPV vaccine as treatment.",
     "why": "She is outside NHS eligibility at 29 and the vaccine doesn’t clear an existing infection.",
     "fix": "Explain that it prevents new infections only."
    },
    {
     "dom": "rto",
     "fail": "Ignoring or rushing the partner question.",
     "why": "It is her hidden agenda and a source of real harm.",
     "fix": "Explain HPV latency and offer words she can use."
    },
    {
     "dom": "rto",
     "fail": "Minimising (“it’s nothing”).",
     "why": "She may not attend colposcopy.",
     "fix": "Reassure accurately and stress that attending is what keeps her safe."
    },
    {
     "dom": "gs",
     "fail": "No plan if the appointment doesn’t arrive, and no symptom safety-net.",
     "why": "Lost referrals and new symptoms are the real risks.",
     "fix": "Offer to chase; name post-coital and intermenstrual bleeding."
    }
   ]
  }
 },
 "aki-sick-day": {
  "stem": {
   "name": "Pauline Drake",
   "age": "72-year-old woman",
   "pmh": [
    "Hypertension",
    "Type 2 diabetes"
   ],
   "meds": [
    "Ramipril",
    "SGLT2 inhibitor (as on repeat list)",
    "Metformin",
    "Ibuprofen — bought, taking recently for aches"
   ],
   "allergy": "None recorded",
   "recent": "4 days of diarrhoea and vomiting. Blood test taken by the practice nurse: creatinine risen from her previous result — acute kidney injury flagged. Check potassium and the previous baseline on the record.",
   "reason": "Video consultation. “A blood test says my kidneys are off — should I be worried?”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG148 (acute kidney injury: prevention, detection and management, 2019) · [2] Think Kidneys (NHS England programme) sick day guidance (2018) · [3] MHRA Drug Safety Update March 2020 (SGLT2 inhibitors: monitor ketones in blood during treatment interruption for surgical procedures or acute serious medical illness) · [4] NICE NG28 (type 2 diabetes in adults, updated) · [5] NICE NG253 (suspected sepsis in people aged 16 and over, 2025) · [6] BNF monographs for ramipril, metformin, SGLT2 inhibitors and ibuprofen",
   "summary": "Four days of diarrhoea and vomiting, barely keeping fluids down, dizziness on standing and a rise in creatinine, in a 72-year-old on ramipril, metformin, an SGLT2 inhibitor and ibuprofen: this is acute kidney injury from volume depletion made worse by her medicines. Stop the ibuprofen, pause the ramipril, metformin and SGLT2 inhibitor, and — because she cannot keep fluids down, is older, diabetic and on an SGLT2 inhibitor — arrange same-day hospital assessment rather than a trial at home. Then make sure the held drugs are restarted safely and she has a sick-day plan.",
   "points": [
    {
     "h": "Detecting AKI",
     "t": "NICE NG148 [1] uses a rise in serum creatinine of 26 micromol/L or more within 48 hours, a 50% or greater rise within the past 7 days, or urine output below 0.5 ml/kg/hour for more than 6 hours. Compare with her previous result — without a baseline you cannot stage it."
    },
    {
     "h": "Her risk factors",
     "t": "NICE NG148 [1] risk factors present here: age 65 or over, diabetes, hypovolaemia from diarrhoea and vomiting, and nephrotoxic or risk drugs (ACE inhibitor, NSAID). An ACE inhibitor or ARB with an NSAID during a dehydrating illness is a classic route to AKI [1][2]."
    },
    {
     "h": "Assess severity",
     "t": "Ask about urine output, postural dizziness, drowsiness or confusion, breathlessness, palpitations, fever and whether any fluid stays down. Check potassium on the result. Consider sepsis (NICE NG253 [5]). NICE NG148 [1]: urine dipstick for blood, protein, leucocytes, nitrites and glucose in everyone with suspected AKI."
    },
    {
     "h": "Disposition",
     "t": "She cannot keep fluids down, is 72, has postural symptoms, diabetes and an SGLT2 inhibitor: she needs same-day hospital assessment for IV fluids, repeat U&E and potassium, ketones and monitoring. Home management is reserved for a well patient with mild AKI who can drink, with a recheck within 48 hours. Hyperkalaemia, anuria, confusion or signs of sepsis mean emergency admission."
    },
    {
     "h": "Medicines to pause",
     "t": "Think Kidneys [2]: during a dehydrating illness temporarily stop ACE inhibitors and ARBs, diuretics, NSAIDs, metformin, SGLT2 inhibitors and sulfonylureas, and restart after 24–48 hours of eating and drinking normally. NICE NG148 [1]: stop nephrotoxic drugs in AKI and review them before restarting. After AKI, restart the ramipril only once kidney function has recovered."
    },
    {
     "h": "SGLT2 inhibitors",
     "t": "MHRA March 2020 [3]: diabetic ketoacidosis can occur with near-normal glucose on an SGLT2 inhibitor. Interrupt treatment in acute serious illness, check blood ketones, and restart only when ketones are normal and she is stable."
    },
    {
     "h": "Metformin",
     "t": "Metformin accumulates when kidney function falls, raising the risk of lactic acidosis. Pause during the illness; restart when eGFR has recovered, with dose adjusted to eGFR per BNF [6]."
    },
    {
     "h": "After recovery",
     "t": "Recheck U&E before restarting held drugs; avoid NSAIDs in future (paracetamol instead); give a written sick-day card; code the AKI and monitor for CKD afterwards [1]. The ramipril must not be dropped by accident — restarting is as important as stopping."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Drake, I’m Dr Morgan. Can you hear and see me all right? I’m sorry you’ve been so unwell. Tell me what’s been happening.",
    "dom": "rto",
    "why": "Checks the video link and opens with empathy"
   },
   {
    "who": "pt",
    "text": "I’ve had this awful tummy bug for four days — diarrhoea and being sick — and I can hardly keep anything down. I feel weak and a bit dizzy when I stand. The nurse did a blood test and said my kidneys aren’t happy. I’ve been taking ibuprofen for the aches. Should I be worried?"
   },
   {
    "who": "dr",
    "text": "That’s a fair question and I’ll answer it honestly. I have your result in front of me. Can I ask a few quick questions first, then explain what it means and what we need to do today?",
    "dom": "gs",
    "why": "Sets an agenda and signals urgency without alarm"
   },
   {
    "who": "pt",
    "text": "Yes, please."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Over the last day, how much have you managed to keep down? And how often are you passing water — less than usual?",
    "dom": "tasks",
    "why": "Assesses oral intake and urine output"
   },
   {
    "who": "pt",
    "text": "Only little sips, and sometimes they come back up. I’ve hardly been to the toilet."
   },
   {
    "who": "dr",
    "text": "When you stand, do you feel faint or need to hold on? Have you felt drowsy or muddled, had a racing or irregular heartbeat, any breathlessness, or a temperature or shivers?",
    "dom": "tasks",
    "why": "Screens postural hypovolaemia, confusion, hyperkalaemia symptoms, sepsis"
   },
   {
    "who": "pt",
    "text": "Dizzy when I stand, yes. Not muddled, I don’t think."
   },
   {
    "who": "dr",
    "text": "Any blood in the diarrhoea or vomit, or bad tummy pain? And do you have a way of checking your sugar or ketones at home?",
    "dom": "tasks",
    "why": "Screens complications and SGLT2-related ketoacidosis risk"
   },
   {
    "who": "pt",
    "text": "No blood. I don’t check anything at home."
   },
   {
    "who": "dr",
    "text": "And your tablets — are you still taking the ramipril, the metformin and the diabetes tablet that makes you pass sugar in the urine, alongside the ibuprofen?",
    "dom": "tasks",
    "why": "Confirms each risk drug is still being taken"
   },
   {
    "who": "pt",
    "text": "Yes, I’ve been trying to keep them all down."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "What have you been thinking this blood test means?",
    "dom": "rto",
    "why": "Explores her ideas"
   },
   {
    "who": "pt",
    "text": "I thought it was just the bug. I didn’t know why my kidneys would be involved. I’d hoped you’d give me something to stop the sickness."
   },
   {
    "phase": "Explanation",
    "clock": "5–7 min",
    "who": "dr",
    "text": "It makes complete sense to think it’s just the bug. What’s happened is that the bug has dried you out, and some tablets — the ramipril and the ibuprofen especially — make it harder for dry kidneys to keep working. Together they’ve caused what we call an acute kidney injury. It’s common, and it usually recovers when the fluids and tablets are sorted out.",
    "dom": "tasks",
    "why": "Explains the illness–drug link in plain words"
   },
   {
    "who": "pt",
    "text": "So should I be worried?"
   },
   {
    "who": "dr",
    "text": "I’m concerned enough that I want you seen in hospital today. You can’t keep fluids down, you’re dizzy when you stand and passing very little urine. At this stage you need a drip, repeat blood tests including your potassium, and a check for a build-up of acid in the blood that your diabetes tablet can cause even when the sugar isn’t high. I can’t check any of that safely over video.",
    "dom": "tasks",
    "why": "Clear same-day hospital disposition with reasons"
   },
   {
    "who": "pt",
    "text": "Hospital? I was hoping to stay at home."
   },
   {
    "who": "dr",
    "text": "I understand — nobody wants to go in. If you could drink and were only mildly affected, we’d manage it at home with a recheck in a day or two. But with this much fluid loss, I’d be taking a risk with your kidneys to keep you home. Most people with this recover well once they’re rehydrated. Is that all right with you?",
    "dom": "rto",
    "why": "Acknowledges reluctance, explains the threshold, seeks agreement"
   },
   {
    "who": "pt",
    "text": "If you think it’s needed. Yes."
   },
   {
    "phase": "Plan",
    "clock": "7–10 min",
    "who": "dr",
    "text": "Thank you. Until you’re seen, stop the ibuprofen completely, and don’t take the ramipril, the metformin or the SGLT2 tablet. Keep sipping fluids if you can. I’ll speak to the medical team at the hospital now and send them a letter with your results and the tablets we’ve stopped. Can someone take you, or shall we arrange transport?",
    "dom": "tasks",
    "why": "Sick-day holds, handover to the acute team, practical transport"
   },
   {
    "who": "pt",
    "text": "I’ll sort out getting there."
   },
   {
    "who": "dr",
    "text": "When you’re better, the hospital or I will recheck your kidney test before restarting the tablets — they’re important for your blood pressure and diabetes, so we won’t just leave them off. For aches in future, use paracetamol rather than ibuprofen. And I’ll give you a sick-day card: whenever you have vomiting, diarrhoea or can’t eat and drink, pause these tablets and ring us.",
    "dom": "tasks",
    "why": "Restart plan, NSAID avoidance, future sick-day rules (Think Kidneys)"
   },
   {
    "who": "pt",
    "text": "I never knew the tablets could do that."
   },
   {
    "phase": "Safety net and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "Could you tell me back which tablets you’re stopping and what happens next?",
    "dom": "gs",
    "why": "Teach-back on the medication holds"
   },
   {
    "who": "pt",
    "text": "Stop the ibuprofen, the ramipril, the metformin and the sugar tablet. Go to the hospital today. Kidney test before restarting."
   },
   {
    "who": "dr",
    "text": "Exactly. If before you get there you become drowsy or confused, faint, feel your heart racing or fluttering, or become breathless, call 999. I’ll follow up after you’re discharged to restart your tablets safely. Is there anything else worrying you?",
    "dom": "gs",
    "why": "Specific 999 triggers and a defined follow-up"
   },
   {
    "who": "pt",
    "text": "No. Thank you for explaining it — I’d never have connected it."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question after checking the video link; let her describe the illness and ask ‘should I be worried?’",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored her wish to stay home and how she will get to hospital; checked what she thought the result meant.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up ‘hardly keep anything down’, ‘dizzy when I stand’ and ibuprofen use as the key cues.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: just the bug. Concern: whether it’s serious. Expectation: something to stop the sickness.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Checked the previous creatinine and potassium on the record; stated what video cannot assess; hospital to do U&E, ketones, urine dip, obs.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Pre-renal AKI from volume depletion with ACE inhibitor and NSAID; considered sepsis, ketoacidosis on SGLT2 inhibitor and hyperkalaemia.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened urine output, postural symptoms, confusion, palpitations, breathlessness, fever, blood in stool.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "AKI (NICE NG148 criteria) in a 72-year-old with diabetes, unable to maintain oral fluids.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day hospital assessment with handover; stop ibuprofen; pause ramipril, metformin and SGLT2 inhibitor (Think Kidneys; MHRA 2020).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Planned restart after recheck so ramipril and diabetes treatment are not lost; NSAID avoidance; sick-day card.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 triggers before arrival; teach-back of the holds; GP follow-up after discharge.",
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
    "name": "Pauline Drake",
    "age": "72 years · female",
    "pmh": [
     "Hypertension",
     "Type 2 diabetes"
    ],
    "meds": [
     "Ramipril",
     "SGLT2 inhibitor",
     "Metformin",
     "Ibuprofen (bought)"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Creatinine risen from previous — AKI flagged. 4 days D and V.",
    "reason": "Video call. “My kidneys are off — should I be worried?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Check the link. Let her tell the story; note ‘can hardly keep anything down’ and ‘dizzy when I stand’."
    },
    {
     "t": "1–4",
     "h": "Severity",
     "d": "Intake, urine output, postural symptoms, confusion, palpitations, fever; each risk drug; ketone risk on the SGLT2 inhibitor."
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "She thinks it’s just the bug and wants something for the sickness."
    },
    {
     "t": "5–10",
     "h": "Explain and act",
     "d": "Bug plus tablets caused AKI; same-day hospital assessment; stop ibuprofen; pause ramipril, metformin, SGLT2 inhibitor; handover."
    },
    {
     "t": "10–12",
     "h": "Close",
     "d": "Teach-back of holds; 999 triggers; restart after recheck; sick-day card; follow-up after discharge."
    }
   ],
   "wordPics": {
    "fail": "Prescribes an antiemetic and says ‘push fluids’; leaves her on ramipril and ibuprofen; ignores the SGLT2 inhibitor; keeps a 72-year-old who cannot keep fluids down at home; no recheck; claims to assess hydration over video.",
    "pass": "Recognises AKI from dehydration plus drugs; stops ibuprofen and pauses ramipril, metformin and the SGLT2 inhibitor; arranges hospital assessment; safety-nets.",
    "exc": "All of that, plus: asks about urine output and postural symptoms; names ketoacidosis risk on the SGLT2 inhibitor; checks potassium and the baseline; hands over to the acute team; explains the link in words she can repeat; plans the restart so ramipril is not lost; sick-day card and NSAID avoidance; teach-back; she understands why hospital is needed."
   },
   "avoid": [
    {
     "dont": "“Just push the fluids and take an anti-sickness tablet.”",
     "instead": "“You can’t keep fluids down and your kidneys are struggling — you need a drip in hospital today.”",
     "why": "An older patient with AKI who cannot maintain oral intake needs IV fluids and monitoring."
    },
    {
     "dont": "“Stop all your tablets.”",
     "instead": "“Stop the ibuprofen, and pause the ramipril, metformin and SGLT2 tablet until you’re better.”",
     "why": "Sick-day rules are targeted; stopping everything can cause harm."
    },
    {
     "dont": "“Don’t take the ramipril any more.”",
     "instead": "“We’ll restart it once your kidney test has recovered.”",
     "why": "A held ACE inhibitor that is never restarted is a common medicines-safety error."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Reluctance to go to hospital",
     "t": "Older patients often resist admission. Explain the specific reason and what would make home management safe, so the decision is shared rather than imposed."
    },
    {
     "h": "Over-the-counter NSAIDs",
     "t": "Bought ibuprofen is easily missed. Ask about over-the-counter and pharmacy medicines at every review; community pharmacists can reinforce avoidance."
    }
   ],
   "legal": [
    {
     "h": "Consent to admission",
     "t": "She has capacity to accept or decline admission. If she declines, explain the risks clearly, document the discussion, agree a close safety net and a recheck, and review early."
    }
   ],
   "professional": [
    {
     "h": "Handover and medicines reconciliation",
     "t": "Tell the acute team which drugs were paused and why. After discharge, reconcile the list so held drugs are restarted appropriately (NICE NG148: review nephrotoxic drugs after AKI)."
    },
    {
     "h": "Coding and follow-up",
     "t": "Record the AKI episode and arrange follow-up of kidney function, since AKI raises the risk of later CKD (NICE NG148)."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Think Kidneys sick-day guidance cards; community pharmacy medicines review; Kidney Care UK patient information."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Cannot keep fluids down, passing very little urine, postural dizziness — same-day hospital assessment",
     "Drowsiness, confusion, palpitations, breathlessness — possible hyperkalaemia, sepsis or ketoacidosis: 999",
     "Fever, rigors or blood in stool — sepsis or complicated gastroenteritis"
    ],
    "psychosocial": [
     "Wish to stay at home",
     "How she will get to hospital",
     "Understanding of which tablets to pause"
    ],
    "ice": [
     "Idea: it’s just the tummy bug",
     "Concern: whether the kidney result is serious",
     "Expectation: something to stop the sickness"
    ]
   },
   "diagnosis": "Acute kidney injury (NICE NG148) from volume depletion after 4 days of diarrhoea and vomiting, worsened by ramipril and ibuprofen, in a 72-year-old with type 2 diabetes on metformin and an SGLT2 inhibitor. Unable to maintain oral intake, with postural symptoms: same-day hospital assessment.",
   "diagnosisLay": "“The bug has dried you out, and some of your tablets make it harder for dry kidneys to cope. Together they’ve strained your kidneys. It usually recovers once you’re rehydrated and the tablets are paused.”",
   "management": {
    "reflectIce": "“You thought it was just the bug — and the bug started it. But with your tablets, it’s now affecting your kidneys, which is why we act today.”",
    "psychosocial": "Acknowledge her reluctance; explain the threshold for home care; confirm how she will get there.",
    "sharedPlan": [
     "Same-day hospital assessment with verbal and written handover",
     "Stop ibuprofen; pause ramipril, metformin and SGLT2 inhibitor (Think Kidneys; MHRA March 2020)",
     "Restart after recovery and a repeat U&E; ramipril only once kidney function has recovered",
     "Future: paracetamol not NSAIDs; written sick-day card; follow-up of kidney function after AKI"
    ],
    "safetyNet": [
     "Drowsy, confused, faint, palpitations or breathless before reaching hospital — 999",
     "GP review after discharge to reconcile and restart medicines"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Sick day rules",
    "s": "Protocol · which drugs to pause and when to restart",
    "href": "management/sick-day-rules.html"
   },
   {
    "ic": "💠",
    "t": "Acute kidney injury",
    "s": "Protocol · NICE NG148 detection and staging",
    "href": "management/aki.html"
   },
   {
    "ic": "📋",
    "t": "AKI",
    "s": "Case walkthrough",
    "href": "../cases/aki.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by treating the tummy bug and missing the kidneys, or by recognising the AKI and still keeping an older patient at home who cannot drink.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Antiemetic and ‘push fluids’ with no medicine changes.",
     "why": "Continuing ramipril and ibuprofen during dehydration worsens AKI.",
     "fix": "Stop the NSAID and pause the ACE inhibitor, metformin and SGLT2 inhibitor."
    },
    {
     "dom": "tasks",
     "fail": "Managing at home when she cannot keep fluids down.",
     "why": "She is 72, diabetic, on an SGLT2 inhibitor, with postural symptoms and AKI.",
     "fix": "Same-day hospital assessment with a handover."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting ketoacidosis on the SGLT2 inhibitor.",
     "why": "MHRA March 2020: ketoacidosis can occur with near-normal glucose.",
     "fix": "Pause it and make sure ketones are checked."
    },
    {
     "dom": "tasks",
     "fail": "No restart plan.",
     "why": "Held ACE inhibitors are often never restarted.",
     "fix": "Recheck U&E and restart deliberately; reconcile medicines after discharge."
    },
    {
     "dom": "rto",
     "fail": "Insisting on admission without explaining why.",
     "why": "She wanted to stay home; an unexplained order undermines trust.",
     "fix": "Give the specific reasons and what would have made home safe."
    },
    {
     "dom": "gs",
     "fail": "Claiming to assess hydration over video.",
     "why": "Postural BP, mucosa and urine output cannot be examined remotely.",
     "fix": "Use history, name the limits, and send her for assessment."
    },
    {
     "dom": "gs",
     "fail": "No future sick-day advice.",
     "why": "The next bug will cause the same injury.",
     "fix": "Written sick-day card, paracetamol not NSAIDs, and a clear ‘pause and ring us’ rule."
    }
   ]
  }
 },
 "childhood-squint-leukocoria": {
  "stem": {
   "name": "Aria Mensah",
   "age": "2-year-old girl",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "Video consultation booked by her mother, who will join with Aria.",
   "reason": "Mother: “Her eye turns in sometimes, and in some photos one eye looks white instead of red. Is that anything?”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG12 (updated April 2026) Suspected cancer: recognition and referral (updated April 2026), children and young people: retinoblastoma · [2] NICE NG127 Suspected neurological conditions: recognition and referral (2019), children: new-onset squint · [3] NHS Newborn and Infant Physical Examination (NIPE) screening programme: eye examination at birth and 6 to 8 weeks · [4] UK National Screening Committee: child vision screening (orthoptist-led, age 4 to 5)",
   "summary": "A white pupil in flash photographs (leukocoria) in a toddler is a retinoblastoma warning sign until an eye specialist says otherwise. Take the mother’s observation seriously, look at the photos, arrange for the red reflex to be checked face to face, and refer to ophthalmology: an absent fundal reflex needs a suspected cancer pathway referral (NICE NG12 (updated April 2026)), and a new squint with loss of the red reflex needs an immediate referral (NG127). The squint needs specialist assessment in its own right because of the amblyopia risk. “She’ll grow out of it” is not safe advice here.",
   "points": [
    {
     "h": "Leukocoria means look now",
     "t": "A white, pale or “cat’s eye” reflection in one pupil on flash photos, or an absent or abnormal red reflex on examination, can be caused by retinoblastoma, congenital cataract, Coats’ disease or other serious eye disease. Parents often notice it in photos first. The report alone is enough to act on."
    },
    {
     "h": "NICE NG12 (updated April 2026): absent fundal reflex",
     "t": "NICE NG12 (updated April 2026) [1]: consider a suspected cancer pathway referral to ophthalmology for retinoblastoma in a child with an absent fundal (“red”) reflex. NICE NG12 (updated April 2026) now says “fundal” reflex because the normal reflex can look a different colour in children with darker skin."
    },
    {
     "h": "NG127: squint plus loss of red reflex",
     "t": "NICE NG127 [2]: refer immediately to ophthalmology a child with a new-onset squint together with loss of the fundal (“red”) reflex in one or both eyes (seen within a few hours). It can signal retinoblastoma, other progressive eye disease or raised intracranial pressure. A new squint with headache, vomiting or ataxia needs immediate referral to acute paediatrics."
    },
    {
     "h": "Why the squint matters too",
     "t": "A persisting squint in a toddler is not something to wait on: the brain can suppress the turning eye and amblyopia (“lazy eye”) develops, which responds best to early glasses, patching or other treatment. In UK practice any squint beyond early infancy (about 3 months of age) is referred for orthoptic and ophthalmology assessment. A squint can also be the first sign of poor vision in that eye, including from retinoblastoma."
    },
    {
     "h": "The examination",
     "t": "Face to face: red reflex of each eye separately and then both together from about an arm’s length in a dim room, comparing colour, brightness and symmetry; corneal light reflex and cover test; fixing and following; eyelids and pupils. On video: look at the photos, watch for the turn, and ask about vision, headache, vomiting and unsteadiness."
    },
    {
     "h": "Screening context",
     "t": "The red reflex is checked at the newborn and 6 to 8 week NIPE examinations [3], and orthoptist-led vision screening happens at 4 to 5 years [4]. A normal baby check does not rule out later disease, so a new parental concern overrides earlier reassurance."
    },
    {
     "h": "Communication",
     "t": "Validate the mother’s instinct, explain honestly that the white reflex is the reason for urgency, say that most causes are not cancer but that this must be checked quickly, and avoid both false reassurance and frightening language. Confirm she knows when and where Aria will be seen."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Osei. Can you hear and see me all right? And is that Aria with you? Tell me what’s been happening.",
    "dom": "rto",
    "why": "Checks the video link and opens openly"
   },
   {
    "who": "pt",
    "text": "(Mother) Yes, she’s on my lap. Her right eye turns inwards sometimes, mostly when she’s tired. My mum says all babies do it and she’ll grow out of it. But what’s been bothering me is that in a few flash photos that same eye looks white in the middle, not red like the other one. Is that anything, or am I being daft?"
   },
   {
    "who": "dr",
    "text": "You’re not being daft at all. You’ve mentioned two things, the eye turning in and the white look in photos, and I want to go through both properly. Is that all right?",
    "dom": "gs",
    "why": "Names both problems and agrees the agenda"
   },
   {
    "who": "pt",
    "text": "Yes, please."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Let’s start with the photos. Could you show me one on your screen, or send it through to the practice?",
    "dom": "tasks",
    "why": "Asks to see the photographs"
   },
   {
    "who": "pt",
    "text": "Here, this one from last week. See, her left eye is red but the right one is sort of white."
   },
   {
    "who": "dr",
    "text": "Thank you, that’s really helpful. I can see what you mean. How many photos show it, and do you ever notice it in normal light, for example a pale glint in her eye?",
    "dom": "tasks",
    "why": "Clarifies how often and whether it is seen outside photos"
   },
   {
    "who": "pt",
    "text": "Three or four photos. I’m not sure I’ve seen it otherwise."
   },
   {
    "who": "dr",
    "text": "And the turning in: when did you first notice it, and is it there all the time or does it come and go?",
    "dom": "tasks",
    "why": "Onset and pattern of the squint"
   },
   {
    "who": "pt",
    "text": "It comes and goes. I honestly can’t say exactly when it started."
   },
   {
    "who": "dr",
    "text": "That’s fine. Does she seem to see well? For example, does she bump into things on one side, tilt her head, or get upset if you cover one eye?",
    "dom": "tasks",
    "why": "Screens for reduced vision"
   },
   {
    "who": "pt",
    "text": "Nothing I’ve noticed. She plays normally."
   },
   {
    "who": "dr",
    "text": "Has she had headaches, been sick in the mornings, been unsteady on her feet or more sleepy than usual? Any redness, pain or a change in the size of the eye?",
    "dom": "tasks",
    "why": "Screens for NG127 features and other eye disease"
   },
   {
    "who": "pt",
    "text": "No, none of that. She’s herself."
   },
   {
    "who": "dr",
    "text": "Has anyone in the family had an eye problem as a child, or had an eye removed or treated for a tumour?",
    "dom": "tasks",
    "why": "Family history relevant to retinoblastoma"
   },
   {
    "who": "pt",
    "text": "Not that I know of."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "When you saw that white eye in the photo, what went through your mind?",
    "dom": "rto",
    "why": "Explores the mother’s idea and fear"
   },
   {
    "who": "pt",
    "text": "I googled it and scared myself. Then my mum said I’m overreacting and I felt silly for booking."
   },
   {
    "who": "dr",
    "text": "You did exactly the right thing booking. Noticing that in a photo is often how these things are found, and I’m glad you didn’t leave it. What were you hoping I could do today?",
    "dom": "rto",
    "why": "Validates her instinct and asks her expectation"
   },
   {
    "who": "pt",
    "text": "Tell me if it matters, I suppose."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "It does matter, and I’ll be honest with you. The white look means light isn’t bouncing back off the back of that eye in the normal way. Most of the time that turns out to be something like a cloudy lens or another eye condition that can be treated, but occasionally it’s a rare eye tumour called retinoblastoma. That’s why we never wait on it. Eye specialists need to look at the back of her eye soon.",
    "dom": "tasks",
    "why": "Explains leukocoria honestly, names the serious cause without catastrophising"
   },
   {
    "who": "pt",
    "text": "(quietly) A tumour… in her eye?"
   },
   {
    "who": "dr",
    "text": "I know that’s a frightening word to hear. I’m not saying she has it. I’m saying it needs to be ruled out quickly, and if it were found, it’s one of the childhood cancers that’s treated most successfully when it’s caught early. Checking quickly is the careful thing to do.",
    "dom": "rto",
    "why": "Responds to distress with honesty and hope"
   },
   {
    "who": "pt",
    "text": "Okay. And the turning eye?"
   },
   {
    "who": "dr",
    "text": "The squint needs the specialists too. If an eye keeps turning, the brain can start ignoring it and it becomes a lazy eye, which is much easier to treat when she’s young. So “she’ll grow out of it” isn’t safe for Aria. The same eye team can look at both.",
    "dom": "tasks",
    "why": "Explains amblyopia risk and why the squint needs referral"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I can’t check the red reflex properly over video, so I’d like to see her in person today, in a dim room with my ophthalmoscope. I’ll also phone the eye doctors at the hospital today. If the reflex is missing in that eye with the squint, they’ll want to see her within hours. Otherwise I’ll send an urgent referral on the fast-track pathway for suspected eye cancer, which means an appointment within two weeks. Either way, the referral goes today.",
    "dom": "tasks",
    "why": "Face-to-face red reflex, same-day ophthalmology discussion, NG127 immediate or NICE NG12 (updated April 2026) suspected cancer pathway"
   },
   {
    "who": "pt",
    "text": "Today? Yes, I can bring her this afternoon."
   },
   {
    "who": "dr",
    "text": "Good, we’ll book a time this afternoon. Please bring the photos on your phone, because the specialists find them helpful. Would it help to have someone with you?",
    "dom": "rto",
    "why": "Practical support for attending"
   },
   {
    "who": "pt",
    "text": "I’ll see who can come with me."
   },
   {
    "who": "dr",
    "text": "Good. Is there anything you’d like me to say differently to your mum? Some families find it helps to hear that the doctor asked for this, not that you overreacted.",
    "dom": "rto",
    "why": "Addresses the family pressure respectfully"
   },
   {
    "who": "pt",
    "text": "Yes. I’ll tell her the doctor said it needs checking."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Can you tell me in your own words what we’ve agreed, so I know I’ve explained it well?",
    "dom": "gs",
    "why": "Checks understanding with teach-back"
   },
   {
    "who": "pt",
    "text": "Bring her in this afternoon to check the red reflex and bring the photos. You’ll ring the eye doctors today, and she’ll be seen either very quickly or within two weeks. The squint gets checked too."
   },
   {
    "who": "dr",
    "text": "That’s exactly right. If you haven’t heard about the eye appointment within a few days, ring me and I’ll chase it. Before then, if she gets headaches, morning vomiting, becomes unsteady or drowsy, or the eye becomes red, painful or looks bigger, call us straight away or take her to A&E. I’ll also check with the hospital that she was seen.",
    "dom": "gs",
    "why": "Timed follow-up, specific safety-net and ownership of the referral"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start by video; heard both concerns; named the squint and the white reflex as separate items.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Family pressure (“she’ll grow out of it”), who can support the mother, practical barriers to attending today.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “white, not red” in photos and “am I being daft” and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (grandmother: normal), concern (a tumour after searching online, fear of overreacting), expectation (to know if it matters).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Asked to see the photos; arranged face-to-face red reflex, corneal light reflex and cover test, fixation and following.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Retinoblastoma, congenital cataract and other retinal disease versus benign squint; amblyopia risk.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about headache, vomiting, unsteadiness, drowsiness, eye pain or redness, reduced vision and family history.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named leukocoria as a warning sign needing urgent specialist eye assessment; explained the squint risk.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day phone call to ophthalmology; NG127 immediate if new squint with loss of red reflex, otherwise NICE NG12 (updated April 2026) suspected cancer pathway referral; squint assessed by the same team.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Supported the mother, offered support for attending, helped her explain the plan to the family.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Teach-back; chase if no appointment in a few days; red flags for same-day review; practice confirms attendance.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Long-term conditions & cancer",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Aria Mensah",
    "age": "2 years · female",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "⚠ Mother reports a white reflex in one eye on flash photos.",
    "reason": "“Her eye turns in sometimes. Is the white in the photos anything?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agree",
     "d": "Hear both problems: the intermittent squint and the white reflex in photos. Agree to go through both."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "See the photos. Onset and pattern of the squint, vision, headache, vomiting, unsteadiness, eye pain or redness, family history."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Fear of a tumour after searching online; feeling silly because the family dismissed it. Validate her."
    },
    {
     "t": "6–9",
     "h": "Explain honestly",
     "d": "Leukocoria must be ruled out quickly; retinoblastoma named calmly with the good outlook; amblyopia risk from the squint."
    },
    {
     "t": "9–12",
     "h": "Act and close",
     "d": "Face-to-face red reflex today; call ophthalmology; NG127 or NICE NG12 (updated April 2026) route; bring photos; teach-back; chase the appointment; safety-net."
    }
   ],
   "wordPics": {
    "fail": "Agrees she will grow out of it or plans to review in a few months; never asks to see the photos; says the red reflex cannot be checked on video and stops there; no referral.",
    "pass": "Recognises leukocoria as a red flag, arranges a red reflex check, refers to ophthalmology urgently and refers the squint, with a basic safety-net.",
    "exc": "All of the above, plus: looks at the photos; knows the NICE NG12 (updated April 2026) suspected cancer pathway for an absent fundal reflex and the NG127 immediate route for a new squint with loss of the red reflex; phones ophthalmology the same day; names retinoblastoma honestly with its good prognosis; supports the mother against family pressure; owns and chases the referral."
   },
   "avoid": [
    {
     "dont": "“Lots of toddlers’ eyes wander. Let’s see how she is in a few months.”",
     "instead": "“The white reflex in the photos is something we always check quickly, and the squint needs the eye team too.”",
     "why": "Watchful waiting risks delaying a retinoblastoma diagnosis and missing the window for amblyopia treatment."
    },
    {
     "dont": "“Flash photos are unreliable, I wouldn’t worry.”",
     "instead": "“Photos are often how this is first spotted. Can you show me?”",
     "why": "A parental report of leukocoria is a recognised presentation and should be acted on."
    },
    {
     "dont": "“This could be eye cancer.” (said first, with no context)",
     "instead": "“Most causes are treatable eye conditions, but a rare tumour must be ruled out, so we check quickly.”",
     "why": "Honesty with context keeps a frightened parent engaged without causing panic."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family pressure",
     "t": "Relatives saying “she’ll grow out of it” can make a parent doubt herself. Give her words to use at home and credit her for noticing."
    },
    {
     "h": "Getting there",
     "t": "Urgent eye appointments may be at a specialist centre some distance away. Ask about transport, childcare and work, and signpost support."
    }
   ],
   "legal": [
    {
     "h": "Consent and parental responsibility",
     "t": "A person with parental responsibility consents to examination and referral for a 2-year-old. Record who attended and what was agreed."
    },
    {
     "h": "Remote consultation limits",
     "t": "If an essential examination such as the red reflex cannot be done on video, arrange it face to face promptly rather than deferring the decision."
    }
   ],
   "professional": [
    {
     "h": "Owning the referral",
     "t": "Safety-net properly: confirm the referral was received and the child was seen. Missed or delayed suspected cancer referrals in children are a recognised source of harm."
    },
    {
     "h": "Parental concern",
     "t": "NICE NG12 (updated April 2026) asks clinicians to take persistent parental concern seriously and consider referral. Here there is a specific red flag as well."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "The Childhood Eye Cancer Trust (CHECT) gives family information on retinoblastoma. Health visitors can support follow-up and later orthoptic care."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "White or absent red reflex, including in flash photos",
     "New squint with loss of the red reflex (NG127: immediate referral)",
     "New squint with headache, vomiting or unsteadiness (immediate paediatric referral)",
     "Reduced vision, a painful red eye or a change in eye size"
    ],
    "psychosocial": [
     "Grandmother’s view that she will grow out of it",
     "Mother’s fear after searching online and fear of overreacting",
     "Practical barriers to attending urgently"
    ],
    "ice": [
     "Idea: grandmother thinks it is normal; mother fears it is “something”",
     "Concern: a tumour; being thought silly",
     "Expectation: to know whether it matters"
    ]
   },
   "diagnosis": "“The white look in the photos is a warning sign that the eye specialists need to check quickly, to rule out a problem at the back of the eye, including a rare tumour. The turning eye also needs checking so it doesn’t become lazy.”",
   "diagnosisLay": "“Normally a camera flash lights up the back of the eye and it looks red, like a red glow. If one eye looks white, something is stopping the light reaching or reflecting from the back of that eye, and we need specialists to find out what.”",
   "management": {
    "reflectIce": "“Your mum’s right that lots of squints are harmless, but you were right that the white in the photos is different. That’s exactly why we act on it today.”",
    "psychosocial": "Credit the mother, offer someone to come with her, give her words for the family, and plan around transport.",
    "sharedPlan": [
     "Face-to-face red reflex, corneal light reflex and cover test today",
     "Same-day call to ophthalmology: immediate if new squint with loss of red reflex (NICE NG127); otherwise suspected cancer pathway referral (NICE NG12 (updated April 2026))",
     "Squint and amblyopia assessed by the eye team; bring the photos"
    ],
    "safetyNet": [
     "Headache, vomiting, unsteadiness, drowsiness, a red or painful eye: same day",
     "Ring if no appointment within a few days; practice checks she was seen",
     "Review after the specialist assessment"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Suspected cancer in children",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) and NG127",
    "href": "algorithms/paediatric-cancer-referral.html"
   },
   {
    "ic": "🗺️",
    "t": "Vision loss",
    "s": "Visual algorithm · urgent eye referral",
    "href": "algorithms/vision-loss.html"
   },
   {
    "ic": "🗺️",
    "t": "Blurry vision",
    "s": "Visual algorithm · eye assessment",
    "href": "algorithms/blurry-vision.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you act on a parent’s photo of a white pupil. Candidates often focus on the squint, reassure, and forget that the red reflex cannot be checked on video.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Reassuring that she will grow out of the squint.",
     "why": "A persisting squint in a toddler risks amblyopia and can be the first sign of eye disease, including retinoblastoma.",
     "fix": "Refer the squint for orthoptic and ophthalmology assessment."
    },
    {
     "dom": "tasks",
     "fail": "Not asking to see the photographs.",
     "why": "The photos are the key evidence of leukocoria and help the specialists.",
     "fix": "“Can you show me the photo, or send it to the practice?”"
    },
    {
     "dom": "tasks",
     "fail": "Giving the wrong urgency.",
     "why": "NICE NG127: new squint with loss of the red reflex → immediate referral. NICE NG12 (updated April 2026): absent fundal reflex → suspected cancer pathway referral. A routine referral or review in months is unsafe.",
     "fix": "Check the reflex face to face today and phone ophthalmology to agree the route."
    },
    {
     "dom": "tasks",
     "fail": "Accepting that the red reflex cannot be examined on video and moving on.",
     "why": "An essential examination that cannot be done remotely must be arranged, not skipped.",
     "fix": "Bring her in the same day, and refer on the history even if the reflex looks equivocal."
    },
    {
     "dom": "rto",
     "fail": "Saying “cancer” bluntly, or avoiding any mention of why it is urgent.",
     "why": "Either panic or unexplained urgency damages trust and engagement.",
     "fix": "Name the rare serious cause calmly, with the common treatable causes and the good outcome of early treatment."
    },
    {
     "dom": "gs",
     "fail": "No plan to confirm the appointment happens.",
     "why": "Referral safety-netting is expected of the referring GP.",
     "fix": "“If you haven’t heard in a few days, ring me, and we’ll check she was seen.”"
    }
   ]
  }
 },
 "chronic-plaque-psoriasis": {
  "stem": {
   "name": "Daniel Okafor",
   "age": "38-year-old man",
   "pmh": [
    "Chronic plaque psoriasis for years: elbows, knees and scalp",
    "No other history recorded in the case"
   ],
   "meds": [
    "Topical treatments for psoriasis: products not specified in the case, check the repeat record"
   ],
   "allergy": "None recorded",
   "recent": "Video consultation. Plaques flaring and worse than ever despite creams; new morning stiffness in fingers and lower back.",
   "reason": "“The creams barely touch it and it’s wrecking my confidence. Can you give me something stronger?”"
  },
  "knowledge": {
   "guideline": "[1] NICE CG153 Psoriasis: assessment and management (2012, updated 2017) · [2] NICE QS40 Psoriasis (2013) · [3] NICE NG65 Spondyloarthritis in over 16s (2017) · [4] MHRA Drug Safety Update December 2018 (emollients and fire risk) · [5] MHRA Drug Safety Update September 2021 (topical corticosteroid withdrawal reactions) · [6] BNF",
   "summary": "Chronic plaque psoriasis with a big impact on confidence, now with inflammatory-sounding joint and back symptoms. Optimise topicals using the CG153 sequence, assess severity and impact, screen for psoriatic arthritis and refer to rheumatology, consider dermatology referral for major impact on wellbeing, and look at mood and cardiovascular risk.",
   "points": [
    {
     "h": "Assess severity and impact",
     "t": "CG153 [1] asks for a static Physician’s Global Assessment and body surface area, nail and difficult-site involvement, and the impact on physical, psychological and social wellbeing (DLQI in adults), plus assessment for depression. QS40 [2] sets severity and impact assessment as a quality statement."
    },
    {
     "h": "Trunk and limbs: the topical sequence",
     "t": "CG153 [1]: start with a potent corticosteroid once daily plus a vitamin D preparation once daily, applied separately (one in the morning, one in the evening), for up to 4 weeks. If not controlled after a maximum of 8 weeks, switch to vitamin D twice daily; if still not controlled after 8–12 weeks, a potent corticosteroid twice daily for up to 4 weeks, or coal tar. A combined calcipotriol and betamethasone product once daily for up to 4 weeks is for people who cannot use separate applications. Review 4 weeks after starting a new topical in adults."
    },
    {
     "h": "Scalp, face and flexures",
     "t": "Scalp: a potent corticosteroid once daily for up to 4 weeks first, with a descaling agent or emollient beforehand if scale is thick [1]. Face, flexures and genitals: a mild or moderate corticosteroid for no longer than 2 weeks; do not use potent or very potent steroids there [1]. Aim for a break of at least 4 weeks between courses of potent or very potent steroids at one site."
    },
    {
     "h": "Psoriatic arthritis",
     "t": "CG153 [1] advises annual screening with the PEST questionnaire (it does not detect axial disease) and referral to a rheumatologist as soon as psoriatic arthritis is suspected. NG65 [3] refers adults with back pain that started before 45 and has lasted over 3 months if 4 or more features are present, and psoriasis is one of them. His finger stiffness and lower back symptoms need assessment now."
    },
    {
     "h": "When to refer to dermatology",
     "t": "CG153 [1]: same-day referral for generalised pustular psoriasis or erythroderma. Refer when the diagnosis is uncertain, psoriasis is extensive (for example more than 10% of body surface area), it cannot be controlled with topical therapy, nail disease has a major impact, or any type has a major impact on physical, psychological or social wellbeing."
    },
    {
     "h": "The whole person",
     "t": "Assess and treat depression and anxiety. CG153 [1] offers a cardiovascular risk assessment to adults with severe psoriasis at presentation and at least every 5 years. Ask about smoking, alcohol and weight, and about drugs that can worsen psoriasis. Paraffin and other emollients soaked into fabric are a fire hazard [4]."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Daniel, it’s Dr Patel. Thanks for booking. Tell me what’s been going on with your skin.",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "These scaly patches on my elbows, knees and scalp. I’ve had them for years, they flare up, the creams barely touch them, and now they’re worse than ever. It’s wrecking my confidence, I cover up even in summer. And lately my fingers and lower back are stiff and achy in the mornings. Can you give me something stronger?"
   },
   {
    "who": "dr",
    "text": "That sounds really frustrating, and the effect on your confidence matters to me as much as the skin. You’ve also mentioned the stiffness, which I want to come back to. Can we look at the skin, the joints, and how it’s affecting you, and then decide on a plan together?",
    "dom": "gs",
    "why": "Acknowledges impact and sets an agenda that includes the joints"
   },
   {
    "who": "pt",
    "text": "Yes, fine."
   },
   {
    "phase": "Skin history and remote look",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Could you show me the elbows and knees on camera, in good light? And tell me which creams you’ve used and how you put them on.",
    "dom": "tasks",
    "why": "Remote look and treatment history"
   },
   {
    "who": "pt",
    "text": "These are the elbows. I’ve had a few creams. I use them when it flares and stop when it calms down. They’re greasy."
   },
   {
    "who": "dr",
    "text": "Thank you. The patches are well defined, red with silvery scale, which fits psoriasis. Is the scalp itchy or flaky under the hair? Any patches in the skin folds or groin? And have you noticed pitting or lifting of your nails?",
    "dom": "tasks",
    "why": "Checks difficult sites and nails"
   },
   {
    "who": "pt",
    "text": "Scalp’s bad, flaky all the time. Nails, maybe a few little dents."
   },
   {
    "who": "dr",
    "text": "Has anything set off this flare, such as stress, an illness, sore throat, or any new tablets?",
    "dom": "tasks",
    "why": "Checks triggers including drugs and infection"
   },
   {
    "who": "pt",
    "text": "Not that I know of. No new tablets."
   },
   {
    "phase": "Joints",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Now the stiffness. How long does it last in the morning? Does it ease with moving or get worse? Any swollen fingers or toes, or pain at the heel?",
    "dom": "tasks",
    "why": "Screens for inflammatory arthritis, dactylitis and enthesitis"
   },
   {
    "who": "pt",
    "text": "A while. It gets better once I’m moving. Not sure about swelling."
   },
   {
    "who": "dr",
    "text": "And the back: when did that start, and does it wake you in the second half of the night or improve with exercise?",
    "dom": "tasks",
    "why": "Checks inflammatory back pain features (NG65)"
   },
   {
    "who": "pt",
    "text": "It’s been a while now. It does get better when I move about."
   },
   {
    "who": "dr",
    "text": "Morning stiffness that eases with movement, in someone with psoriasis and nail changes, can be psoriatic arthritis. It’s important because early treatment protects the joints. I’ll ask you to fill in a short questionnaire, and I’d like to examine your hands, feet and back in person this week.",
    "dom": "tasks",
    "why": "Names PsA risk; PEST and face-to-face joint examination"
   },
   {
    "who": "pt",
    "text": "I didn’t know the two were linked."
   },
   {
    "phase": "Impact and ICE",
    "clock": "6–7 min",
    "who": "dr",
    "text": "You said it’s wrecking your confidence. How is it affecting you day to day, and how has your mood been?",
    "dom": "rto",
    "why": "Explores psychosocial impact and screens mood"
   },
   {
    "who": "pt",
    "text": "I dread summer. I don’t wear short sleeves. It gets me down, not all the time, but it does."
   },
   {
    "who": "dr",
    "text": "Thank you for being open. Has it ever got so low that you’ve had thoughts of harming yourself?",
    "dom": "tasks",
    "why": "Safely completes the mood screen"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "What were you hoping a stronger cream would do?",
    "dom": "rto",
    "why": "Explores expectation"
   },
   {
    "who": "pt",
    "text": "Clear it, so I can stop hiding."
   },
   {
    "phase": "Explanation and plan",
    "clock": "7–11 min",
    "who": "dr",
    "text": "Creams often seem not to work because they’re used only in flares or not long enough, and that’s really common. There is no cure, but good control is realistic. I’d like to set you up with a clear routine: a strong steroid once a day and a vitamin D cream once a day, one in the morning and one at night, for four weeks, with a moisturiser as well. If the two separately don’t fit your day, there’s a combined gel once a day.",
    "dom": "tasks",
    "why": "Explains CG153 sequence and addresses adherence"
   },
   {
    "who": "pt",
    "text": "One thing at night would be easier for me."
   },
   {
    "who": "dr",
    "text": "Then we’ll use the combined one at night. For the scalp, a steroid scalp application once a day for four weeks, softening the scale first. I’ll review you in four weeks.",
    "dom": "tasks",
    "why": "Site-appropriate scalp treatment and review"
   },
   {
    "who": "dr",
    "text": "Because it’s having such a big effect on you, I’d also like to refer you to dermatology. They can offer light treatment, tablets or injections if the creams aren’t enough. And I’ll refer you to rheumatology about the joints once I’ve examined you.",
    "dom": "tasks",
    "why": "Dermatology referral for major impact; rheumatology for suspected PsA"
   },
   {
    "who": "pt",
    "text": "That would be good. I didn’t think I’d qualify."
   },
   {
    "who": "dr",
    "text": "Psoriasis is linked with heart and circulation risk too, so when you come in I’ll check your blood pressure and weight and arrange cholesterol and sugar tests. We can also talk about smoking and alcohol, which can make psoriasis worse.",
    "dom": "tasks",
    "why": "Addresses cardiometabolic comorbidity"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "One safety point: moisturisers soaked into clothes or bedding can catch fire easily, so keep away from flames. If your skin becomes red all over, you get pus spots across it, or you feel unwell with it, that needs same-day care. And if your mood drops, please tell me. What will you do differently from tonight?",
    "dom": "gs",
    "why": "Emollient fire risk, emergency red flags, mood safety-net, teach-back"
   },
   {
    "who": "pt",
    "text": "Combined gel every night for four weeks, not just when it’s bad, scalp stuff daily, moisturiser, and come in this week for the joints."
   },
   {
    "who": "dr",
    "text": "Spot on. I’ll send you the questionnaire and book the examination this week, then review in four weeks.",
    "dom": "gs",
    "why": "Clear follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let him describe the skin, the impact and the joints before narrowing; acknowledged frustration.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work and routine, covering up, summer avoidance, smoking and alcohol flagged for review.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the morning stiffness and “wrecking my confidence” and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (creams don’t work, needs stronger), concern (confidence, joints), expectation (to clear it and stop hiding).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Camera look at plaques, scalp and nails; PEST; face-to-face joint and back examination; BP, weight, lipids, HbA1c.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Plaque psoriasis with suboptimal topical use; psoriatic arthritis; axial spondyloarthritis; triggers.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for erythroderma and pustular psoriasis, and for low mood and self-harm.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named chronic plaque psoriasis, likely under-treated, with possible psoriatic arthritis.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "CG153 topical sequence with a combined product for adherence, scalp treatment, dermatology referral for major impact.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Rheumatology referral if PsA confirmed on examination; cardiovascular risk and mood addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review at 4 weeks, same-day triggers, emollient fire safety, mood safety-net.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Daniel Okafor",
    "age": "38 years · male",
    "pmh": [
     "Chronic plaque psoriasis (elbows, knees, scalp)"
    ],
    "meds": [
     "Topical psoriasis treatments (check record)"
    ],
    "allergy": "None recorded",
    "recent": "Video request: psoriasis flaring despite creams; new morning stiffness in fingers and lower back.",
    "reason": "“Can you give me something stronger that actually works?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Let him list the skin, the confidence and the stiffness. Agree to cover all three."
    },
    {
     "t": "1–4",
     "h": "Skin",
     "d": "Camera look; how creams were used; scalp, flexures, nails; triggers and drugs."
    },
    {
     "t": "4–7",
     "h": "Joints and impact",
     "d": "Inflammatory features, dactylitis, enthesitis, back pain pattern. Mood, avoidance, self-harm screen. What he hoped for."
    },
    {
     "t": "7–11",
     "h": "Plan",
     "d": "CG153 topical routine he can follow, scalp treatment, dermatology referral for impact, joint exam and rheumatology, cardiovascular checks."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "Same-day red flags, fire safety, mood, teach-back, 4-week review."
    }
   ],
   "wordPics": {
    "fail": "Prescribes a stronger steroid without asking how creams were used; ignores the joint symptoms; treats the confidence issue as cosmetic; no review.",
    "pass": "Recognises plaque psoriasis, optimises the topical routine with review, screens for psoriatic arthritis and refers, and asks about mood.",
    "exc": "All of the above, plus: finds the intermittent use and fits the routine to his day; uses the CG153 sequence; refers to dermatology because of the major impact on wellbeing; picks up inflammatory back pain; addresses cardiovascular risk; gives emollient fire advice and same-day red flags; uses teach-back."
   },
   "avoid": [
    {
     "dont": "“Here’s a stronger steroid, use it when it flares.”",
     "instead": "“Let’s use the treatment every day for four weeks, then review, rather than only in flares.”",
     "why": "Intermittent use is the commonest reason creams seem to fail; a stronger steroid alone adds side-effects."
    },
    {
     "dont": "“The stiffness is probably just your age.”",
     "instead": "“Stiffness that eases with movement can be arthritis linked to psoriasis, so I want to examine you.”",
     "why": "Missing psoriatic arthritis allows joint damage."
    },
    {
     "dont": "“It’s only skin, lots of people have it.”",
     "instead": "“It’s clearly affecting how you live, and that matters to me.”",
     "why": "Minimising the impact loses Relating to Others marks and misses low mood."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Visible disease and stigma",
     "t": "Covering up and avoiding summer are forms of social withdrawal. Ask about work, relationships and activities he avoids."
    },
    {
     "h": "Treatment routine",
     "t": "Greasy treatments are hard to use before work. Choosing times and products that fit his day improves adherence."
    }
   ],
   "legal": [
    {
     "h": "Equality Act 2010",
     "t": "Psoriasis or psoriatic arthritis with a substantial, long-term effect on daily activities may count as a disability, giving a right to reasonable adjustments at work."
    },
    {
     "h": "Fit notes",
     "t": "If joint symptoms or a severe flare affect his work, a fit note can suggest adjustments such as altered duties."
    }
   ],
   "professional": [
    {
     "h": "Remote assessment limits",
     "t": "A camera view can show plaques but not joints. Arrange a face-to-face examination rather than referring or reassuring on the video alone."
    },
    {
     "h": "Safe prescribing",
     "t": "State the site, potency, frequency and duration of each steroid, and plan a break between courses. Warn about emollient fire risk (MHRA December 2018)."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "The Psoriasis Association and the Psoriasis and Psoriatic Arthritis Alliance (PAPAA) offer information and peer support; talking therapies if mood is affected."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Skin red all over (erythroderma) or widespread pustules: same day",
     "Feeling unwell or feverish with a severe flare",
     "Inflammatory joint symptoms, dactylitis or enthesitis",
     "Low mood with thoughts of self-harm"
    ],
    "psychosocial": [
     "Covering up, avoiding summer, effect on work and relationships",
     "How and when he uses his creams",
     "Smoking, alcohol and weight"
    ],
    "ice": [
     "Idea: the creams don’t work, so he needs something stronger",
     "Concern: confidence, and new joint stiffness",
     "Expectation: to clear it so he can stop hiding"
    ]
   },
   "diagnosis": "“This is plaque psoriasis. The creams haven’t had a fair chance because they’ve been used only in flares. The stiffness may be a linked arthritis that we need to check properly.”",
   "diagnosisLay": "“In psoriasis, the skin renews itself far faster than normal, so cells pile up as thick scaly patches. The immune system drives it, and the same process can inflame joints. Daily treatment keeps it calm, like a thermostat, rather than only firefighting.”",
   "management": {
    "reflectIce": "“You wanted something stronger so you could stop hiding. Using the right treatment every day, plus a specialist opinion, gives you the best chance of that.”",
    "psychosocial": "Fit the routine to his day (combined product at night), refer to dermatology because of the impact on wellbeing, and support his mood.",
    "sharedPlan": [
     "CG153 topical sequence: combined calcipotriol and betamethasone once daily at night for up to 4 weeks, as separate applications don’t suit him",
     "Scalp: potent steroid scalp application once daily for up to 4 weeks, after softening scale",
     "Emollient daily",
     "PEST, face-to-face joint examination, rheumatology referral if psoriatic arthritis suspected",
     "Dermatology referral; BP, weight, lipids, HbA1c"
    ],
    "safetyNet": [
     "Same-day care for widespread redness, pustules or feeling unwell",
     "Return if mood worsens",
     "Review at 4 weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Psoriasis protocol",
    "s": "CG153 topical ladder · referral criteria",
    "href": "management/psoriasis.html"
   },
   {
    "ic": "🗺️",
    "t": "Joint pain pathway",
    "s": "Inflammatory versus mechanical",
    "href": "algorithms/joint-pain.html"
   },
   {
    "ic": "📋",
    "t": "Axial spondyloarthritis",
    "s": "Case walkthrough · NG65 referral",
    "href": "../cases/axial-spa.html"
   },
   {
    "ic": "🧮",
    "t": "QRISK3",
    "s": "Medical Calculators",
    "href": "calculators.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is not about naming the strongest cream. It tests whether you find the adherence problem, catch the joints, and take the psychological impact seriously.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Stepping up to a very potent steroid on request.",
     "why": "CG153 keeps very potent steroids for specialist settings on the trunk and limbs; the problem here is intermittent use.",
     "fix": "Ask how the creams were used, then give the CG153 routine with a 4-week review."
    },
    {
     "dom": "tasks",
     "fail": "Ignoring the morning stiffness.",
     "why": "Psoriatic arthritis can damage joints if treatment is delayed; CG153 advises referral as soon as it is suspected.",
     "fix": "Ask about duration, relief with movement, dactylitis, enthesitis and back pain; examine face to face."
    },
    {
     "dom": "tasks",
     "fail": "Using PEST alone for the back pain.",
     "why": "PEST does not detect axial disease.",
     "fix": "Ask the NG65 inflammatory back pain questions too."
    },
    {
     "dom": "rto",
     "fail": "Treating the confidence issue as cosmetic.",
     "why": "CG153 asks for assessment of impact and depression; major impact is itself a referral criterion.",
     "fix": "Ask about mood and daily impact, and let the answer shape the plan."
    },
    {
     "dom": "gs",
     "fail": "No review date or safety-net.",
     "why": "Topical plans need a 4-week review; erythroderma and pustular psoriasis need same-day care.",
     "fix": "Book the review and name the red flags."
    },
    {
     "dom": "gs",
     "fail": "Jargon: “calcipotriol, PASI, DLQI”.",
     "why": "The patient needs a routine he understands.",
     "fix": "“One gel every night for four weeks, then we check.”"
    }
   ]
  }
 },
 "community-pneumonia": {
  "stem": {
   "name": "Derek Halloran",
   "age": "71-year-old man",
   "pmh": [
    "COPD",
    "Ex-smoker"
   ],
   "meds": [
    "Medication list not given in the booking note (check COPD inhalers)"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "Wife reports he has been confused and “not himself”.",
   "reason": "Video consultation: “Just a chest infection. Can you call in some antibiotics so I can stay at home?”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG250 Pneumonia: diagnosis and management (2025) · [2] NICE NG253 Suspected sepsis in people aged 16 or over (2025) · [3] NICE NG115 COPD in over 16s · [4] NICE NG12 (updated April 2026) Suspected cancer: recognition and referral (updated April 2026): lung · [5] British Thoracic Society guideline for the management of community acquired pneumonia in adults (2009) · [6] Mental Capacity Act 2005 Code of Practice",
   "summary": "Cough, fever, pleuritic pain and breathlessness in a 71-year-old with COPD who is newly confused is suspected pneumonia with a CRB65 score of at least 2 before respiratory rate or blood pressure are even measured. NICE NG250 says consider hospital referral at a score of 2 or more and refer if sepsis or cardiorespiratory failure is suspected; new confusion also needs sepsis assessment (NG253). The skill is making and explaining that disposition decision kindly, checking he can weigh it up, and planning a follow-up chest X-ray because he is an older ex-smoker.",
   "points": [
    {
     "h": "CRB65",
     "t": "NICE NG250 [1]: one point each for confusion (AMT 8 or less, or new disorientation in person, place or time), respiratory rate 30 or more a minute, blood pressure systolic below 90 or diastolic 60 or less, and age 65 or over. Use it with clinical judgement, bearing in mind comorbidities."
    },
    {
     "h": "Place of care",
     "t": "NICE NG250 [1]: score 0, primary care with safety-netting; score 1, primary care with safety-netting or referral to a virtual ward, same-day emergency care, hospital at home or hospital; score 2 or more, consider hospital referral. Refer anyone with signs of a more serious illness such as sepsis or cardiorespiratory failure."
    },
    {
     "h": "Sepsis lens",
     "t": "NICE NG253 [2]: in a person with suspected infection, new confusion or altered mental state is a warning sign. Assess face to face with full observations (respiratory rate, oxygen saturation, blood pressure, heart rate, temperature, level of consciousness) and use NEWS2; high-risk findings need emergency transfer."
    },
    {
     "h": "COPD matters",
     "t": "Underlying COPD reduces reserve and makes hypoxia more likely. Hospital teams target oxygen saturations of 88 to 92% in people at risk of hypercapnia. NICE NG115 [3] covers exacerbation management if this proves to be an exacerbation rather than pneumonia."
    },
    {
     "h": "Antibiotics",
     "t": "NICE NG250 [1]: low-severity community-acquired pneumonia is treated with amoxicillin for 5 days (dose per BNF), with alternatives for penicillin allergy. Moderate and high severity is treated per NG250 and local guidance, usually in hospital. Do not delay transfer to start oral antibiotics at home if he needs admission."
    },
    {
     "h": "Follow-up chest X-ray",
     "t": "NICE NG250 [1] does not support routine follow-up X-rays for everyone, but the committee noted their value for people at higher risk of lung cancer such as smokers and those over 50. BTS 2009 [5] advises a chest X-ray at about 6 weeks for persisting symptoms or signs or higher malignancy risk. NICE NG12 (updated April 2026) [4]: consider an urgent chest X-ray in people aged 40 and over with persistent or recurrent chest infection, and offer one to people aged 40 and over with 2 or more unexplained symptoms from cough, fatigue, breathlessness, chest pain, weight loss and appetite loss, or 1 or more if they have ever smoked."
    },
    {
     "h": "Refusal and capacity",
     "t": "A confused patient refusing admission needs a decision-specific capacity assessment (Mental Capacity Act 2005 [6]): can he understand, retain and weigh the information and communicate a choice? If he has capacity, respect the decision, make the best alternative plan and document. If not, act in his best interests, involving his wife."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Halloran, I’m Dr Singh. I can see you’re not feeling great. Tell me what’s been happening.",
    "dom": "rto",
    "why": "Open start"
   },
   {
    "who": "pt",
    "text": "It’s just a chest infection, doctor. Cough, bringing up green stuff, bit of a fever and my chest hurts when I breathe in. The wife says I’ve been a bit muddled. Can you just call in some antibiotics so I can fight it off at home? I don’t want to be sent into hospital."
   },
   {
    "who": "dr",
    "text": "I hear that you want to stay at home, and I’ll keep that in mind. Can I ask some questions first, and perhaps speak to your wife as well, so we get the plan right?",
    "dom": "gs",
    "why": "Acknowledges his wish and agrees the agenda, including a collateral history"
   },
   {
    "who": "pt",
    "text": "Go on then. She’s here."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "How long has this been going on, and how is your breathing compared with your usual COPD?",
    "dom": "tasks",
    "why": "Onset and breathlessness against baseline"
   },
   {
    "who": "pt",
    "text": "Four days. Breathing’s worse than normal. I’m puffed just getting to the loo."
   },
   {
    "who": "dr",
    "text": "Mrs Halloran, what have you noticed about him being muddled?",
    "dom": "tasks",
    "why": "Collateral history of new confusion"
   },
   {
    "who": "pt",
    "text": "(Wife) He’s not himself. He got the day wrong this morning and he keeps repeating things. That’s not like him."
   },
   {
    "who": "dr",
    "text": "Thank you. Mr Halloran, do you know what day it is today, and where you are?",
    "dom": "tasks",
    "why": "Brief orientation check for CRB65 confusion"
   },
   {
    "who": "pt",
    "text": "(pause) Tuesday? No… I’m not sure. I’m at home."
   },
   {
    "who": "dr",
    "text": "That’s okay. Have you coughed up any blood? Any shivering fits, dizziness when you stand, or passing much less urine?",
    "dom": "tasks",
    "why": "Haemoptysis and sepsis features"
   },
   {
    "who": "pt",
    "text": "No blood. I’ve been shivery. Not been to the loo much."
   },
   {
    "who": "dr",
    "text": "Are you managing to drink? And have you used any extra inhalers or a rescue pack for your chest?",
    "dom": "tasks",
    "why": "Hydration and COPD treatment so far"
   },
   {
    "who": "pt",
    "text": "Not drinking much. Just my usual inhalers."
   },
   {
    "who": "dr",
    "text": "Do you have anything at home to check your oxygen or blood pressure? And any allergies to antibiotics?",
    "dom": "tasks",
    "why": "Remote observations and allergy"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. No allergies."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said you don’t want to go into hospital. Can you tell me what worries you about that?",
    "dom": "rto",
    "why": "Explores the fear behind the refusal"
   },
   {
    "who": "pt",
    "text": "You go in and you don’t come out the same. I want my own bed."
   },
   {
    "who": "dr",
    "text": "That’s a very understandable fear, and I’m glad you told me. I want to be honest with you about what I’m seeing.",
    "dom": "rto",
    "why": "Validates the fear and signals honesty"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "With the cough, fever and pain on breathing, I think you may have pneumonia, an infection deeper in the lung. We use a score to judge how serious it is. You score a point for being over 65, and another for the new muddle. That already puts you in the group where we usually want hospital assessment, and I can’t measure your breathing rate, blood pressure or oxygen over video.",
    "dom": "tasks",
    "why": "Explains suspected pneumonia and CRB65 out loud (NICE NG250)"
   },
   {
    "who": "pt",
    "text": "It’s only a bit of confusion."
   },
   {
    "who": "dr",
    "text": "In someone your age, new confusion with an infection can mean the infection is affecting the whole body, which we call sepsis. Along with your COPD, being more breathless and not passing much water, that worries me. Antibiotic tablets at home may not be enough or quick enough.",
    "dom": "tasks",
    "why": "Sepsis lens (NICE NG253), COPD and hydration inform disposition"
   },
   {
    "who": "pt",
    "text": "So you want me to go in."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I do. I’d like the hospital team to check your oxygen and blood pressure, do a chest X-ray and bloods, and start the right antibiotics, possibly into a vein, and oxygen if you need it. With the confusion and breathlessness I’ll arrange an ambulance rather than you going by car. Many people with pneumonia go home within a few days once it’s under control. Could you tell me in your own words why I’m suggesting hospital?",
    "dom": "tasks",
    "why": "Clear disposition with rationale; begins a capacity check"
   },
   {
    "who": "pt",
    "text": "Because I might have pneumonia, and with the muddle and my chest it could get worse quickly at home."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. What do you think about going?",
    "dom": "rto",
    "why": "Checks he can weigh the information and invites his decision"
   },
   {
    "who": "pt",
    "text": "(to wife) What do you think? … All right. If it gets me home sooner."
   },
   {
    "who": "dr",
    "text": "Thank you, I know that wasn’t easy. I’ll ring the ambulance and send the hospital a summary now. Mrs Halloran, please pack his inhalers and a list of his medicines. Is someone able to be with you both?",
    "dom": "rto",
    "why": "Practical support and involves his wife"
   },
   {
    "who": "pt",
    "text": "(Wife) I’ll go with him."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "While you wait, sit him upright and give sips of water. If he gets much more breathless, drowsy or hard to wake, his lips go blue, or he collapses, call 999 straight away and say it’s urgent.",
    "dom": "gs",
    "why": "Safety-net while awaiting transfer"
   },
   {
    "who": "pt",
    "text": "(Wife) Okay."
   },
   {
    "who": "dr",
    "text": "One more thing for later. Because you used to smoke, once you’ve recovered I’d like a repeat chest X-ray in about six weeks to make sure it has fully cleared. Sometimes an infection hides something else in the lung, and we want to be sure. If you ever cough up blood or lose weight, tell me. I’ll check in with you after you’re discharged.",
    "dom": "gs",
    "why": "Follow-up chest X-ray and review (NICE NG250, BTS, NICE NG12 (updated April 2026))"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; acknowledged his wish to stay at home before exploring.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Wife’s observations, fear of hospital, fluid intake, who can support him.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “the wife says I’ve been muddled” and explored it with a collateral history and orientation check.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (just a chest infection), concern (going into hospital and not coming out the same), expectation (oral antibiotics at home).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Recognised that respiratory rate, BP and saturations cannot be measured on video; hospital assessment with observations, NEWS2, chest X-ray and bloods.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Pneumonia versus COPD exacerbation; sepsis; older ex-smoker so underlying lung cancer in mind.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "New confusion, breathlessness beyond baseline, rigors, reduced urine and haemoptysis screened.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named suspected pneumonia with CRB65 of at least 2 (new confusion, age 65 or over) and a sepsis concern.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Hospital referral by ambulance (NICE NG250 CRB65 2 or more; NICE NG253 sepsis assessment); no delay for oral antibiotics.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "COPD taken into account; his fear addressed; capacity to decide checked through teach-back and his reasoning; wife involved.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Safety-net while waiting; follow-up chest X-ray at about 6 weeks as an ex-smoker; review after discharge.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Urgent & unscheduled care",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Derek Halloran",
    "age": "71 years · male",
    "pmh": [
     "COPD",
     "Ex-smoker"
    ],
    "meds": [
     "Not listed (inhalers)"
    ],
    "allergy": "Not recorded",
    "recent": "⚠ Wife reports new confusion.",
    "reason": "“Just a chest infection. Antibiotics so I can stay home?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agree",
     "d": "Acknowledge his wish to stay home; ask to include his wife."
    },
    {
     "t": "1–5",
     "h": "Severity history",
     "d": "Duration, breathlessness against baseline, collateral history of confusion, orientation, rigors, urine output, fluids, haemoptysis, allergies."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Fear of hospital and of not coming home the same. Name it."
    },
    {
     "t": "6–9",
     "h": "Explain",
     "d": "Suspected pneumonia; CRB65 out loud; sepsis concern; why video cannot measure what matters."
    },
    {
     "t": "9–12",
     "h": "Decide and close",
     "d": "Hospital by ambulance; check his reasoning; wife’s support; safety-net while waiting; 6-week chest X-ray; review."
    }
   ],
   "wordPics": {
    "fail": "Prescribes oral antibiotics by phone and says “carry on”; never asks about the confusion; no severity assessment; no safety-net or follow-up X-ray.",
    "pass": "Recognises suspected pneumonia, uses CRB65, identifies new confusion and age as reasons for hospital assessment, arranges it, and safety-nets.",
    "exc": "All of the above, plus: takes a collateral history and checks orientation; states the CRB65 score and sepsis concern out loud; weighs COPD and hydration; explores the fear of hospital; checks he can understand and weigh the decision; arranges an ambulance with a handover; plans the 6-week chest X-ray as an ex-smoker."
   },
   "avoid": [
    {
     "dont": "“I’ll send some amoxicillin to the chemist. Carry on at home.”",
     "instead": "“With new muddle and worse breathing, I need your oxygen and blood pressure checked today in hospital.”",
     "why": "CRB65 of 2 or more with possible sepsis needs hospital assessment (NICE NG250, NG253)."
    },
    {
     "dont": "“You have to go in, there’s no choice.”",
     "instead": "“Can you tell me in your own words why I’m suggesting hospital? What do you think?”",
     "why": "Coercion damages trust; a capacity-respecting conversation usually reaches agreement."
    },
    {
     "dont": "“You’re just a bit confused because of the fever.”",
     "instead": "“New confusion with an infection can be a sign it’s affecting the whole body.”",
     "why": "Explaining away confusion misses sepsis."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Fear of hospital",
     "t": "Older people often fear losing independence in hospital. Name it, explain the aim is to get him home safely, and involve his wife."
    },
    {
     "h": "Carer",
     "t": "His wife is carrying worry and practical tasks. Check she has support and knows the plan."
    }
   ],
   "legal": [
    {
     "h": "Mental capacity",
     "t": "Mental Capacity Act 2005: capacity is presumed but must be assessed when there is reason to doubt it, such as new confusion. The test is decision-specific. If he lacks capacity and refuses, act in his best interests, consulting his wife."
    },
    {
     "h": "Documentation",
     "t": "Record the CRB65 elements, the confusion history, the options discussed, his decision and the capacity assessment."
    }
   ],
   "professional": [
    {
     "h": "Remote consultation limits",
     "t": "Video cannot measure respiratory rate, saturations or blood pressure reliably. If the decision depends on them, arrange face-to-face or hospital assessment."
    },
    {
     "h": "Handover",
     "t": "Send a clear summary to the admitting team with the history, CRB65, COPD and allergy status."
    }
   ],
   "community": [
    {
     "h": "After discharge",
     "t": "Community respiratory or virtual ward teams can support early discharge. Offer pneumococcal and seasonal vaccines per the Green Book once recovered, and pulmonary rehabilitation for COPD if appropriate."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "New confusion (CRB65; sepsis warning sign)",
     "Breathlessness at rest or much worse than baseline",
     "Reduced urine output, rigors",
     "Cyanosis, drowsiness",
     "Haemoptysis or weight loss (lung cancer)"
    ],
    "psychosocial": [
     "Fear of hospital and losing independence",
     "Wife’s worry and caring load",
     "Minimising (“just a chest infection”)"
    ],
    "ice": [
     "Idea: just a chest infection needing tablets",
     "Concern: going into hospital and not coming out the same",
     "Expectation: oral antibiotics and to stay at home"
    ]
   },
   "diagnosis": "“I think you may have pneumonia, and because you’re newly confused and over 65, it scores as serious enough that you need checking in hospital today.”",
   "diagnosisLay": "“Pneumonia is an infection deep in the small air sacs of the lung, so less oxygen gets into your blood. When the infection makes someone muddled, it’s a sign it’s affecting the whole body, not just the chest.”",
   "management": {
    "reflectIce": "“You want your own bed, and I want you back in it as soon as possible. Getting the right treatment today is the fastest way to do that.”",
    "psychosocial": "Name the fear of hospital; involve his wife; check his understanding and reasoning to support a capacitous decision.",
    "sharedPlan": [
     "Hospital assessment by ambulance: CRB65 2 or more (NICE NG250) and sepsis concern (NICE NG253)",
     "Observations, NEWS2, chest X-ray, bloods; antibiotics by severity; oxygen targets for COPD",
     "Follow-up chest X-ray at about 6 weeks as an older ex-smoker (BTS 2009; NICE NG250)"
    ],
    "safetyNet": [
     "Worse breathing, drowsiness, blue lips or collapse while waiting: 999",
     "Haemoptysis or weight loss later: tell the GP (NICE NG12 (updated April 2026))",
     "Review after discharge"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Chest infections",
    "s": "Case walkthrough · NICE NG250",
    "href": "../cases/chest-infections.html"
   },
   {
    "ic": "💠",
    "t": "Chest infections protocol",
    "s": "CRB65 and antibiotic choice",
    "href": "management/chest-infections.html"
   },
   {
    "ic": "🗺️",
    "t": "Acute cough",
    "s": "Visual algorithm · CRB65",
    "href": "algorithms/acute-cough.html"
   },
   {
    "ic": "🗺️",
    "t": "Acute confusion",
    "s": "Visual algorithm · infection as a cause",
    "href": "algorithms/confusion.html"
   },
   {
    "ic": "💠",
    "t": "COPD",
    "s": "Management protocol · NICE NG115",
    "href": "management/copd.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you let the patient’s framing (“just a chest infection”) override a severity assessment. The confusion is the cue most candidates underplay.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing oral antibiotics by phone without a severity assessment.",
     "why": "New confusion and age 65 or over give CRB65 of at least 2: NICE NG250 says consider hospital referral.",
     "fix": "Score CRB65 out loud and arrange hospital assessment."
    },
    {
     "dom": "tasks",
     "fail": "Explaining away the confusion.",
     "why": "New confusion with infection is a sepsis warning sign (NICE NG253).",
     "fix": "Take a collateral history and check orientation."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting that video cannot measure the observations that decide the plan.",
     "why": "Respiratory rate, blood pressure and saturations are needed; guessing is unsafe.",
     "fix": "Arrange same-day face-to-face or hospital assessment."
    },
    {
     "dom": "tasks",
     "fail": "No follow-up chest X-ray plan for an older ex-smoker.",
     "why": "Non-resolving consolidation can hide lung cancer (NICE NG250 committee discussion; BTS 2009; NICE NG12 (updated April 2026)).",
     "fix": "Plan a chest X-ray at about 6 weeks and review."
    },
    {
     "dom": "rto",
     "fail": "Overriding his refusal without exploring it, or colluding with it.",
     "why": "Both fail the patient. Capacity must be considered when a confused patient refuses.",
     "fix": "Explore the fear, explain, ask him to reason it back, and document."
    },
    {
     "dom": "gs",
     "fail": "No safety-net while he waits for transport.",
     "why": "Deterioration can happen within hours.",
     "fix": "Tell his wife exactly when to call 999."
    }
   ]
  }
 },
 "eupd-crisis": {
  "stem": {
   "name": "Robyn Easton",
   "age": "26-year-old woman",
   "pmh": [
    "Emotionally unstable (borderline) personality disorder",
    "Recurrent self-harm (cutting)"
   ],
   "meds": [
    "Not specified in the case: check the repeat record"
   ],
   "allergy": "None recorded",
   "recent": "Video consultation requested today. She reports cutting again after her relationship ended, and says she cannot cope.",
   "reason": "“I can’t cope, I’ve been hurting myself, and you’re my last hope. You have to fix this now.”"
  },
  "knowledge": {
   "guideline": "[1] NICE CG78 Borderline personality disorder: recognition and management (2009) · [2] NICE NG225 Self-harm: assessment, management and preventing recurrence (2022) · [3] NICE QS88 Personality disorders: borderline and antisocial (2015) · [4] GMC Good medical practice (2024) · [5] Mental Capacity Act 2005",
   "summary": "A woman with known EUPD in crisis after a loss, with recent self-harm and an ambiguous threat (“I don’t know what I’ll do”). The GP must validate, ask directly about suicidal thoughts, act in proportion to what she says, hold a kind boundary against being the sole rescuer, and agree a written safety plan with a named next contact.",
   "points": [
    {
     "h": "The crisis consultation in primary care",
     "t": "When someone with borderline personality disorder presents in crisis, CG78 [1] asks the GP to assess the current risk to self and others, ask about previous episodes and what helped then, help her manage her immediate distress, identify small achievable changes, and offer a follow-up at an agreed time. Refer urgently to the community mental health or crisis team if distress or risk has risen."
    },
    {
     "h": "Ask about suicide directly",
     "t": "Ask about the method and intent of the recent self-harm, current suicidal thoughts, plans, preparations and access to means, and what has kept her going. Asking does not increase risk. NG225 [2] says do not use risk tools or scales, or low, medium or high labels, to predict suicide or decide who gets care; base decisions on her needs and the whole picture."
    },
    {
     "h": "Proportion, not panic or dismissal",
     "t": "Recurrent self-harm is often a way of coping with unbearable feelings, but each episode is assessed on its own merits. “She always does this” misses rising risk; reflex admission or new sedatives can reinforce the crisis cycle. Decide the response from what she says today: intent, plan, means, and whether she can agree a plan."
    },
    {
     "h": "Medication",
     "t": "CG78 [1]: do not use drug treatment specifically for borderline personality disorder or its individual symptoms. Short-term sedative medication may be considered cautiously in a crisis, for no longer than 1 week, with a drug that is relatively safe in overdose. NG225 [2]: do not offer drugs specifically to reduce self-harm. Treat comorbid depression or anxiety on their own terms."
    },
    {
     "h": "Psychological treatment",
     "t": "Structured psychological therapy through the mental health service is the mainstay. CG78 [1] advises considering a comprehensive dialectical behaviour therapy (DBT) programme for women for whom reducing recurrent self-harm is a priority, and advises against brief psychological interventions (under 3 months) for the disorder itself. QS88 [3] sets structured psychological therapy as a quality standard."
    },
    {
     "h": "Boundaries and continuity",
     "t": "Idealisation (“you’re the only one who understands”) can flip to feeling abandoned. Consistent, kind limits, a predictable follow-up, and one plan shared with the team protect her better than open-ended promises. Offer a named clinician or regular appointments where the practice can sustain them."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and containment",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Robyn, it’s Dr Okoye. I can see you’re really upset. I’m here with you now, and I’d like to hear what’s happened.",
    "dom": "rto",
    "why": "Calm, warm opening that contains distress"
   },
   {
    "who": "pt",
    "text": "You’re the only one who actually listens. Everyone else has given up on me. My partner’s left, I feel completely empty, and I’ve been cutting again. I need you to fix this today. If you can’t help me I don’t know what I’ll do."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me all of that. It sounds unbearable right now, and I’m really glad you reached out instead of staying alone with it. I want to understand it properly, and then we’ll work out together what happens today. Is that okay?",
    "dom": "rto",
    "why": "Validates before any agenda; sets a shared structure"
   },
   {
    "who": "pt",
    "text": "Okay. I just can’t keep feeling like this."
   },
   {
    "phase": "Understanding and risk",
    "clock": "1–5 min",
    "who": "dr",
    "text": "You said you’ve been cutting again. Can you tell me about the most recent time: when it was, and how bad the cuts are?",
    "dom": "tasks",
    "why": "Starts risk assessment with the recent self-harm"
   },
   {
    "who": "pt",
    "text": "Last night. My arm. They’re not deep, I cleaned them."
   },
   {
    "who": "dr",
    "text": "Thank you. I’d like you to show me on camera in a moment, so I know whether they need any care. When you cut last night, was it to cope with the feelings, or were you trying to end your life?",
    "dom": "tasks",
    "why": "Distinguishes self-harm to cope from suicidal intent"
   },
   {
    "who": "pt",
    "text": "To make the feeling stop. It’s the only thing that works."
   },
   {
    "who": "dr",
    "text": "You said earlier, if I can’t help you, you don’t know what you’ll do. I need to ask you directly, and it’s okay to be honest: are you having thoughts of ending your life at the moment?",
    "dom": "tasks",
    "why": "Explores the ambiguous statement with direct suicide questioning"
   },
   {
    "who": "pt",
    "text": "Sometimes I think everyone would be better off. I don’t actually have a plan. I just want it to stop."
   },
   {
    "who": "dr",
    "text": "I’m glad you told me. Have you thought about how, or got anything ready, like saved-up tablets? And is there anything you use to cut that’s near you now?",
    "dom": "tasks",
    "why": "Asks about plans, preparation and access to means"
   },
   {
    "who": "pt",
    "text": "No plan. I haven’t saved anything. The blade’s in the bathroom."
   },
   {
    "who": "dr",
    "text": "When things have felt this bad before, what’s helped you get through, even a little? And what’s kept you going so far?",
    "dom": "tasks",
    "why": "Asks about past coping and protective factors"
   },
   {
    "who": "pt",
    "text": "Talking to someone helps, if they don’t judge me. And I suppose part of me still wants things to get better."
   },
   {
    "who": "dr",
    "text": "That part of you matters, and it’s the part I want to work with. Are you on your own at the moment?",
    "dom": "rto",
    "why": "Reflects the protective factor back; checks immediate support"
   },
   {
    "who": "pt",
    "text": "Yes. He’s gone, so it’s just me."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said you need me to fix it today. What would fixing it look like for you?",
    "dom": "rto",
    "why": "Explores the expectation behind “fix this now”"
   },
   {
    "who": "pt",
    "text": "I don’t know. I just need someone not to give up on me. Everyone gets fed up with me."
   },
   {
    "who": "dr",
    "text": "So underneath it is a fear of being dropped, on top of losing your partner. That makes a lot of sense of how desperate today feels.",
    "dom": "rto",
    "why": "Names the hidden agenda: fear of abandonment"
   },
   {
    "phase": "Honest boundary and shared understanding",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I want to be honest with you, because you deserve that. I can’t make these feelings go away today, and it wouldn’t be fair to you if I tried to be the only person helping. That’s not me giving up. It’s me wanting a proper team around you, so help doesn’t depend on one person being available.",
    "dom": "tasks",
    "why": "Compassionate boundary: no instant fix, not the sole rescuer"
   },
   {
    "who": "pt",
    "text": "So you’re passing me on, like everyone else."
   },
   {
    "who": "dr",
    "text": "No. I’m staying involved, and I’m adding people, not swapping. I’ll speak to you again at a time we agree, and I’ll still be your GP. What I can do today is make sure you’re safe tonight and get the mental health team involved.",
    "dom": "rto",
    "why": "Responds to feared rejection without over-promising; models reliability"
   },
   {
    "who": "pt",
    "text": "Okay. As long as you’re not dropping me."
   },
   {
    "who": "dr",
    "text": "The feelings you describe, the emptiness, the fear of people leaving, and cutting to make it stop, fit with the diagnosis you already have. The treatment that helps most in the long run is a structured talking therapy, such as DBT, through the mental health team. Tablets don’t treat this condition itself, so I won’t be starting something new today just because it’s a crisis.",
    "dom": "tasks",
    "why": "Explains EUPD without stigma; psychological therapy first; avoids reflex prescribing"
   },
   {
    "who": "pt",
    "text": "I thought you might give me something to knock me out."
   },
   {
    "who": "dr",
    "text": "I understand why. Sedating tablets can leave you feeling worse, and they’re risky at home when you feel like this. Let’s put the effort into a plan that gets you through tonight.",
    "dom": "gs",
    "why": "Explains the reasoning in plain language"
   },
   {
    "phase": "Safety plan and team",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Because you cut last night, you’re alone tonight and you’ve had thoughts of not being here, I’d like the crisis team to contact you today. They can see you or call you. Would you agree to me referring you now?",
    "dom": "tasks",
    "why": "Proportionate escalation, based on what she has said"
   },
   {
    "who": "pt",
    "text": "Yes. If they actually call."
   },
   {
    "who": "dr",
    "text": "I’ll phone them myself after we finish. Now let’s write your plan together. What are the warning signs that things are getting worse for you?",
    "dom": "tasks",
    "why": "Collaborative safety plan: triggers"
   },
   {
    "who": "pt",
    "text": "When I start going over and over it at night, and I can’t stop crying."
   },
   {
    "who": "dr",
    "text": "And what could you do then, before cutting? You said talking helps.",
    "dom": "tasks",
    "why": "Coping strategies drawn from her own experience"
   },
   {
    "who": "pt",
    "text": "Ring someone. Or go out for a walk. Or hold ice in my hand."
   },
   {
    "who": "dr",
    "text": "Those are good. Could you put the blade somewhere hard to get to, or give it to someone, for now? And if the feelings get stronger, the numbers go on the plan: the crisis team, NHS 111 with the mental health option, and Samaritans on 116 123, any time. If you feel you can’t keep yourself safe, call 999 or go to A&E.",
    "dom": "tasks",
    "why": "Means safety and named crisis contacts"
   },
   {
    "who": "pt",
    "text": "I can put it in the bin outside."
   },
   {
    "phase": "Close and continuity",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Could you tell me the plan back, so I know I’ve explained it well?",
    "dom": "rto",
    "why": "Teach-back of the safety plan"
   },
   {
    "who": "pt",
    "text": "Crisis team calls today. Blade in the outside bin. If it gets bad, ring someone, go for a walk, or ice. If I can’t stay safe, 111, Samaritans or 999."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. I’ll send you the plan in writing. Please show me the cuts on camera now so I can check them. I’ll call you tomorrow afternoon to see how you are, and I’ll book a regular appointment with me. You’re not a burden, Robyn.",
    "dom": "gs",
    "why": "Written plan, wound check, fixed follow-up and continuity"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let her speak first; stayed calm; acknowledged her distress and her courage in asking for help.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Relationship ending, being alone tonight, support network, what has helped before.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I don’t know what I’ll do” and “everyone gives up on me” and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (the GP can fix it now), concern (being abandoned), expectation (rescue today).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Recent self-harm: method, depth and wound care (checked on camera); suicidal thoughts, plans, preparation, means; protective factors.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Crisis in EUPD after a loss, versus a depressive episode or rising suicidal intent; asked without using a risk score.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked directly about suicide and means; decided on escalation from her answers, not from a label.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Linked her feelings to her known diagnosis without stigma; explained why therapy, not tablets, treats it.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day crisis team referral with GP-to-team phone call; written safety plan; means reduction.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "No reflex sedative or new drug in crisis (CG78, NG225); comorbid depression or anxiety to be assessed on its own terms.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named crisis contacts, 999 or A&E if unsafe, GP call next day, and a regular appointment for continuity.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Robyn Easton",
    "age": "26 years · female",
    "pmh": [
     "Emotionally unstable (borderline) personality disorder",
     "Recurrent self-harm"
    ],
    "meds": [
     "Check repeat record"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Video request today: cutting again after relationship breakdown; “I can’t cope”.",
    "reason": "“You’re my last hope. You have to fix this now.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Contain",
     "d": "Let her speak. Validate the pain and agree a shared structure before any questions."
    },
    {
     "t": "1–5",
     "h": "Risk, directly",
     "d": "Last self-harm: when, how, intent. Suicidal thoughts, plan, preparation, means. Past coping and reasons to keep going. Is she alone?"
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "What would “fixing it” look like? Name the fear of being dropped."
    },
    {
     "t": "6–8",
     "h": "Kind boundary",
     "d": "No instant fix, not the only helper, but staying involved. Therapy is the treatment; no reflex sedation."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Crisis team today, written safety plan, means reduction, crisis numbers, teach-back, wound check, call tomorrow, regular appointment."
    }
   ],
   "wordPics": {
    "fail": "Dismisses her as attention-seeking or lectures her; never asks directly about suicide; or panics into an ambulance without assessing; promises to fix everything or be available any time; prescribes a sedative to end the call.",
    "pass": "Validates her distress, asks directly about self-harm and suicidal thoughts, agrees a safety plan with crisis contacts, explains that therapy is the treatment, and arranges follow-up.",
    "exc": "All of the above, plus: explores “I don’t know what I’ll do” and the fear of abandonment; holds a warm, honest boundary without her feeling rejected; builds the plan from her own coping strategies; reduces access to means; refers to the crisis team in proportion to what she says; checks understanding and fixes a named follow-up."
   },
   "avoid": [
    {
     "dont": "“You’ve done this before, you know it passes.”",
     "instead": "“Every time matters. Tell me about last night, and whether you’re thinking of ending your life now.”",
     "why": "Dismissal misses rising risk and confirms her fear that nobody takes her seriously."
    },
    {
     "dont": "“I’ll always be here for you, call me whenever you need.”",
     "instead": "“I’ll stay involved and speak to you at a time we agree, and I’m adding a team so help doesn’t rely on one person.”",
     "why": "Promises that cannot be kept set up the next abandonment."
    },
    {
     "dont": "“Let me give you something to calm you down tonight.”",
     "instead": "“Tablets don’t treat this, and they’re risky when you feel this way. Let’s make a plan for tonight together.”",
     "why": "CG78 advises against drug treatment for the disorder itself; sedatives add overdose risk."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Loss and isolation",
     "t": "A relationship ending is a classic trigger for abandonment fear. She is alone tonight, so practical support, contact with the crisis team and a set call-back time matter."
    },
    {
     "h": "Stigma",
     "t": "People with this diagnosis often report being dismissed by services. A non-judgemental response in primary care makes it more likely she will ask for help next time instead of hurting herself."
    }
   ],
   "legal": [
    {
     "h": "Capacity and consent",
     "t": "Assume capacity (Mental Capacity Act 2005). She consents to the crisis referral here. If she refused help while at high immediate risk, capacity to make that decision would need assessing, and emergency services could be involved."
    },
    {
     "h": "Confidentiality",
     "t": "Sharing with the crisis team is part of her care and she agrees. If there were a serious and immediate risk to her life and she refused, GMC confidentiality guidance allows disclosure to protect her."
    }
   ],
   "professional": [
    {
     "h": "Boundaries and continuity",
     "t": "GMC Good medical practice (2024) expects honest communication and continuity. A consistent plan shared with the team protects her better than an unsustainable special relationship with one GP."
    },
    {
     "h": "Documentation and self-care",
     "t": "Record what she said about intent, plans and means, the safety plan and the referral. Emotionally demanding consultations are a reason to use supervision or peer support, not to avoid the patient."
    }
   ],
   "community": [
    {
     "h": "Crisis and support contacts",
     "t": "Local crisis resolution team, NHS 111 (mental health option in England), Samaritans 116 123, and local crisis cafés or safe havens where available. Mind has information for people with this diagnosis."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Current suicidal intent or a plan, preparations or saved tablets",
     "Escalating self-harm: deeper wounds, new methods, harm needing medical care",
     "Alone, with access to means, and unable to agree a safety plan",
     "Intoxication, or new psychotic or severe depressive symptoms"
    ],
    "psychosocial": [
     "Relationship ending and being alone tonight",
     "Previous crises and what helped",
     "Her experience of services and fear of being given up on"
    ],
    "ice": [
     "Idea: the GP can fix this now",
     "Concern: being abandoned, as she feels everyone else has done",
     "Expectation: an immediate rescue"
    ]
   },
   "diagnosis": "“What you’re feeling now, the emptiness, the fear of people leaving, and cutting to make the pain stop, fits with the condition you already have. It’s a crisis, and crises pass, but you need proper support to get through this one safely.”",
   "diagnosisLay": "“Some people feel emotions much more intensely and for longer than others, like a volume dial stuck on high. When something painful happens, like a break-up, the feelings can become overwhelming. Therapy teaches ways to turn that dial down.”",
   "management": {
    "reflectIce": "“You wanted me to fix it today. I can’t make the feelings disappear, but I can make sure you’re not facing tonight on your own and that help keeps going after today.”",
    "psychosocial": "She is alone after her partner left, so contact with the crisis team today, a GP call-back and a regular appointment give her structure.",
    "sharedPlan": [
     "Same-day crisis team referral, with a GP phone call",
     "Written safety plan: warning signs, her own coping strategies, people to contact, crisis numbers",
     "Blade removed from the home",
     "No new sedative or other drug for the disorder; therapy (for example DBT) through the mental health team",
     "Wound check on camera; face-to-face review if the cuts need care"
    ],
    "safetyNet": [
     "Crisis team, NHS 111 mental health option or Samaritans 116 123 if distress rises",
     "999 or A&E if she cannot keep herself safe",
     "GP call tomorrow and a regular booked appointment"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Depression",
    "s": "Case walkthrough · mood, risk and safety planning",
    "href": "../cases/depression.html"
   },
   {
    "ic": "💠",
    "t": "Depression protocol",
    "s": "Assessment · suicide risk · follow-up",
    "href": "management/depression.html"
   },
   {
    "ic": "📋",
    "t": "Anxiety",
    "s": "Case walkthrough · comorbid anxiety",
    "href": "../cases/anxiety.html"
   },
   {
    "ic": "🧭",
    "t": "SCA consultation guide",
    "s": "Structure for high-emotion consultations",
    "href": "sca-consultation-guide.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by candidates who either rescue or reject. The marks go to a calm, warm consultation that asks directly about suicide, acts in proportion to what she says, and holds a kind boundary with a real plan.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Never asking directly about suicidal thoughts, plans or means.",
     "why": "“I don’t know what I’ll do” is an ambiguous threat. Without direct questions the plan has no basis.",
     "fix": "“Are you having thoughts of ending your life? Any plan? Anything saved up or to hand?”"
    },
    {
     "dom": "tasks",
     "fail": "Calling an ambulance or arranging admission as a reflex, or prescribing a sedative to end the call.",
     "why": "Over-reaction can reinforce the crisis cycle. CG78 advises against drug treatment for the disorder itself; NG225 advises against drugs to reduce self-harm.",
     "fix": "Decide from her answers. Here, same-day crisis team contact and a safety plan fit what she says."
    },
    {
     "dom": "tasks",
     "fail": "Assigning a “low risk” label and closing.",
     "why": "NG225 advises against low, medium or high risk labels to decide care.",
     "fix": "Base the plan on her needs: alone tonight, cut last night, passive suicidal thoughts."
    },
    {
     "dom": "rto",
     "fail": "Promising to always be available, or agreeing that everyone else has failed her.",
     "why": "It feeds splitting and sets up the next abandonment.",
     "fix": "“I’ll stay involved, and I want a team around you too.”"
    },
    {
     "dom": "rto",
     "fail": "A cold boundary: “I can’t fix this, you need the mental health team.”",
     "why": "Limits without warmth feel like rejection to someone afraid of being dropped.",
     "fix": "Say what you can do today and when you will next speak."
    },
    {
     "dom": "gs",
     "fail": "A vague safety-net: “ring if things get worse.”",
     "why": "She needs names, numbers and steps she can follow at 2 am.",
     "fix": "A written plan built from her own coping strategies, with crisis numbers, and teach-back."
    },
    {
     "dom": "gs",
     "fail": "Forgetting the wounds.",
     "why": "Recent cuts may need care, and the video view is limited.",
     "fix": "Look on camera and arrange face-to-face review if needed."
    }
   ]
  }
 },
 "gestational-diabetes": {
  "stem": {
   "name": "Aisha Rahman",
   "age": "31-year-old woman",
   "pmh": [
    "Pregnant, 27 weeks",
    "BMI 32",
    "Family history of type 2 diabetes"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "Oral glucose tolerance test in this pregnancy consistent with gestational diabetes (maternity result).",
   "reason": "Video consultation: frightened by the result; asking whether her baby is in danger."
  },
  "knowledge": {
   "guideline": "[1] NICE NG3 (diabetes in pregnancy, 2015, updated 2020) · [2] NICE QS109 (diabetes in pregnancy) · [3] NICE NG133 (hypertension in pregnancy, 2019) · [4] BNF",
   "summary": "Gestational diabetes raises risks for mother and baby, but good glucose control reduces them. Refer to the joint diabetes and antenatal clinic within a week, start monitoring, diet and activity, add metformin or insulin if targets are not met, and plan postnatal testing and lifelong screening.",
   "points": [
    {
     "h": "Diagnosis",
     "t": "NICE NG3 [1]: gestational diabetes if fasting plasma glucose is 5.6 mmol/L or more, or 2-hour plasma glucose is 7.8 mmol/L or more on a 75 g OGTT. Risk factors include BMI above 30, a first-degree relative with diabetes, a previous macrosomic baby, previous gestational diabetes, and family origin with a high prevalence of diabetes. Check HbA1c at diagnosis to identify pre-existing type 2 diabetes."
    },
    {
     "h": "Why it matters",
     "t": "Higher risks of a large-for-gestational-age baby, shoulder dystocia and birth trauma, induction and caesarean birth, neonatal hypoglycaemia, polyhydramnios and pre-eclampsia, with a higher later risk of type 2 diabetes for the mother. Good control reduces these risks; that is the anchor message."
    },
    {
     "h": "Referral and targets",
     "t": "NICE NG3 [1]: joint diabetes and antenatal clinic within 1 week of diagnosis. Self-monitoring targets: fasting below 5.3 mmol/L, and 1 hour after meals below 7.8 or 2 hours after meals below 6.4 mmol/L; keep above 4 mmol/L if on insulin or glibenclamide."
    },
    {
     "h": "Treatment steps",
     "t": "NICE NG3 [1]: if fasting glucose is below 7.0 at diagnosis, offer diet and exercise; add metformin if targets are not met within 1–2 weeks; add insulin if still not met, or if metformin is contraindicated or unacceptable. If fasting glucose is 7.0 or more at diagnosis, offer immediate insulin with or without metformin; consider it at 6.0–6.9 with macrosomia or hydramnios. Glibenclamide only if metformin fails and insulin is declined, or metformin is not tolerated. Doses per BNF [4]."
    },
    {
     "h": "Monitoring and birth",
     "t": "NICE NG3 [1]: ultrasound of fetal growth and amniotic fluid every 4 weeks from 28 to 36 weeks. Advise women with uncomplicated gestational diabetes to give birth no later than 40+6 weeks, offering elective birth if not delivered by then; earlier if there are maternal or fetal complications."
    },
    {
     "h": "After the birth",
     "t": "NICE NG3 [1]: stop glucose-lowering treatment immediately after birth and check glucose before transfer to community care. Fasting plasma glucose at 6–13 weeks after birth (after 13 weeks: fasting glucose, or HbA1c if a fasting test is not possible). FPG below 6.0 means low probability of diabetes; HbA1c 39–47 means high risk. Annual HbA1c thereafter if the test is negative (QS109 [2])."
    },
    {
     "h": "Next pregnancy",
     "t": "NICE NG3 [1]: offer early self-monitoring of blood glucose, or an OGTT as soon as possible after booking with a further OGTT at 24–28 weeks if the first is normal."
    },
    {
     "h": "Safety-net",
     "t": "Urgent maternity assessment for reduced fetal movements, and for pre-eclampsia symptoms: severe headache, visual disturbance, severe pain below the ribs, vomiting, or sudden swelling of the face, hands or feet (NICE NG133 [3])."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Rahman, I’m Dr Evans. Can you hear me clearly, and is now a good time to talk? … What would you like to talk about today?",
    "dom": "rto",
    "why": "Checks connection; open question"
   },
   {
    "who": "pt",
    "text": "I had that glucose drink test and they’ve told me I’ve got diabetes in pregnancy. I’m really frightened. Does this mean my baby’s in danger? Have I done something wrong? I don’t really understand what it means or what happens now."
   },
   {
    "who": "dr",
    "text": "I can hear how worried you are, and I’m glad you called. I’ll answer all three of those questions, starting with whether your baby is in danger. Can I first check a few things?",
    "dom": "rto",
    "why": "Acknowledges fear; commits to answering her questions"
   },
   {
    "who": "pt",
    "text": "Yes, okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "What have you been told so far, and by whom?",
    "dom": "tasks",
    "why": "Establishes existing information before explaining"
   },
   {
    "who": "pt",
    "text": "Just a phone call saying the test was high and someone would be in touch. Then I started reading online."
   },
   {
    "who": "dr",
    "text": "How are you feeling in yourself? Is the baby moving as normal for you?",
    "dom": "tasks",
    "why": "Checks current wellbeing and fetal movements"
   },
   {
    "who": "pt",
    "text": "I feel fine. Yes, the baby’s moving as usual."
   },
   {
    "who": "dr",
    "text": "Any headaches, problems with your vision, or swelling in your face or hands?",
    "dom": "tasks",
    "why": "Screens pre-eclampsia symptoms"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "And are you very thirsty or passing lots of urine?",
    "dom": "tasks",
    "why": "Screens marked hyperglycaemia"
   },
   {
    "who": "pt",
    "text": "No, not really."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "You asked whether you’d done something wrong. What’s made you think that?",
    "dom": "rto",
    "why": "Explores self-blame explicitly"
   },
   {
    "who": "pt",
    "text": "My weight, I suppose. And diabetes runs in my family. I keep thinking I’ve caused this."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. What’s your biggest fear about the baby?",
    "dom": "rto",
    "why": "Elicits the core concern"
   },
   {
    "who": "pt",
    "text": "That something will go wrong at the birth, or the baby will be born ill."
   },
   {
    "phase": "Explanation",
    "clock": "5–8 min",
    "who": "dr",
    "text": "First, you haven’t done anything wrong. During pregnancy the placenta makes hormones that make it harder for your body to control sugar. Some women, especially with a family history, can’t keep up, so the sugar rises. That’s gestational diabetes. Weight and family history make it more likely, but it isn’t something you caused, and it usually goes away after the birth.",
    "dom": "tasks",
    "why": "Explains the mechanism and removes blame"
   },
   {
    "who": "pt",
    "text": "So it’s not my fault?"
   },
   {
    "who": "dr",
    "text": "No. Now your main question. If the sugar stays high, the baby can grow larger than usual, which can make the birth harder, and the baby may need sugar checks after birth. There’s also a higher chance of high blood pressure in pregnancy. But keeping your sugar in the target range greatly reduces those risks. So your baby is not in danger now, and what we do next protects the baby.",
    "dom": "tasks",
    "why": "Honest risks balanced with the controllable message"
   },
   {
    "who": "pt",
    "text": "That’s a relief. What do I actually do?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "You’ll be seen in a joint clinic with a diabetes team and the maternity team, ideally within a week. They’ll teach you to check your sugar with a finger-prick, before breakfast and after meals, against targets. You’ll see a dietitian, and a walk after meals helps a lot.",
    "dom": "tasks",
    "why": "NG3 joint clinic within a week, monitoring, diet and activity"
   },
   {
    "who": "pt",
    "text": "And if that doesn’t work?"
   },
   {
    "who": "dr",
    "text": "If the numbers aren’t on target within a week or two, the next step is a tablet called metformin, and some women need insulin. Both are used widely in pregnancy. Needing them isn’t failing; it just means the pregnancy hormones are strong.",
    "dom": "tasks",
    "why": "NG3 escalation; reassures about safety; reframes treatment"
   },
   {
    "who": "pt",
    "text": "Will I need a caesarean?"
   },
   {
    "who": "dr",
    "text": "Not necessarily. You’ll have extra scans to check the baby’s growth and the fluid around the baby, every four weeks from 28 weeks. The team will talk with you about when and how to have the baby, and if all is going well that’s by 40 weeks and 6 days at the latest, earlier if needed. Many women with gestational diabetes have a vaginal birth.",
    "dom": "tasks",
    "why": "NG3 scans every 4 weeks from 28 to 36; birth planning"
   },
   {
    "who": "pt",
    "text": "And afterwards?"
   },
   {
    "who": "dr",
    "text": "Usually the sugar goes back to normal straight after birth. We’ll do a fasting blood test here between 6 and 13 weeks after the birth. Because this raises your chance of type 2 diabetes later, we’ll check a blood test every year. If you have another pregnancy, we’d test you early.",
    "dom": "tasks",
    "why": "NG3 postnatal FPG, annual HbA1c, early testing next pregnancy"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Contact the maternity unit straight away if the baby’s movements slow down or change, or if you get a bad headache, problems with your vision, pain under your ribs, vomiting or sudden swelling. Can you tell me in your own words what happens now?",
    "dom": "gs",
    "why": "Specific safety-net: reduced movements, pre-eclampsia symptoms; teach-back"
   },
   {
    "who": "pt",
    "text": "It’s not my fault. Control the sugar and the risks go down. Joint clinic this week, finger-pricks, dietitian, maybe metformin. Scans. Blood test after the birth and every year."
   },
   {
    "who": "dr",
    "text": "Exactly right. I’ll make sure the clinic referral has gone, and let’s speak again after your first appointment.",
    "dom": "gs",
    "why": "Checks the referral; arranges follow-up"
   },
   {
    "who": "pt",
    "text": "Thank you. I feel like I can breathe again."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her voice all three fears before explaining.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Self-blame about weight and family history explored; emotional impact acknowledged.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “have I done something wrong?” and answered it explicitly.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (her baby is in danger and she caused it), concern (problems at birth, baby born ill), expectation (to understand and know what happens next).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Fetal movements, pre-eclampsia symptoms and symptomatic hyperglycaemia checked; HbA1c at diagnosis via the team.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Gestational diabetes vs possible pre-existing type 2 diabetes (HbA1c at diagnosis).",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened reduced fetal movements and pre-eclampsia; knows fasting glucose 7.0 or more means immediate insulin.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Gestational diabetes at 27 weeks.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Joint clinic within 1 week, self-monitoring targets, diet and activity, metformin then insulin, growth scans, birth planning.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Blame removed; long-term type 2 risk; next-pregnancy testing; follow-up after first clinic.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Reduced movements and pre-eclampsia symptoms to maternity urgently; postnatal FPG at 6–13 weeks; annual HbA1c.",
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
    "name": "Aisha Rahman",
    "age": "31 years · female",
    "pmh": [
     "Pregnant, 27 weeks",
     "BMI 32",
     "FH type 2 diabetes"
    ],
    "meds": [
     "Nil recorded"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Maternity result: OGTT consistent with gestational diabetes. Letter to GP; joint clinic to contact.",
    "reason": "Video consultation: “worried about my sugar test result”."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and acknowledge",
     "d": "She arrives frightened with three questions. Promise to answer each."
    },
    {
     "t": "1–4",
     "h": "Focused checks",
     "d": "What she has been told, fetal movements, pre-eclampsia symptoms, thirst and polyuria."
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "Self-blame about weight and family history; fear about the birth."
    },
    {
     "t": "5–8",
     "h": "Explain honestly",
     "d": "Hormone mechanism, not her fault; risks named plainly, anchored on control reducing them."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Joint clinic within a week, targets, diet, metformin or insulin, scans, birth timing, postnatal test, annual HbA1c. Safety-net and teach-back."
    }
   ],
   "wordPics": {
    "fail": "Lists complications without reassurance, or says “it’s nothing to worry about”; no joint-clinic referral; never addresses self-blame; no postnatal or lifelong screening plan; no safety-net for fetal movements.",
    "pass": "Explains gestational diabetes, names the main risks with the message that control reduces them, outlines joint clinic, monitoring, diet and escalation, and mentions the postnatal test.",
    "exc": "All of the above, plus: explores and removes self-blame explicitly; answers each of her three questions in order; gives NG3 specifics (1-week clinic, 4-weekly scans, 6–13-week fasting glucose, annual HbA1c); reframes insulin as not failure; screens pre-eclampsia and movements; teach-back shows she can repeat the plan."
   },
   "avoid": [
    {
     "dont": "“Your weight will have caused this.”",
     "instead": "“Pregnancy hormones cause this. Weight and family history make it more likely, but it isn’t something you did.”",
     "why": "Blame increases distress and harms engagement."
    },
    {
     "dont": "“There’s a risk of stillbirth, shoulder dystocia, pre-eclampsia …”",
     "instead": "“If sugars stay high, the baby can grow larger. Keeping them on target greatly reduces that.”",
     "why": "A list of complications without the control message terrifies without helping."
    },
    {
     "dont": "“If diet fails you’ll have to go on insulin.”",
     "instead": "“Some women need metformin or insulin because the hormones are strong. It isn’t failing.”",
     "why": "Framing treatment as failure adds guilt."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Guilt and stigma",
     "t": "Weight and diabetes carry stigma; pregnant women often blame themselves. Address it directly and without judgement."
    },
    {
     "h": "Practical load",
     "t": "Frequent finger-prick testing, clinic visits and diet change add to pregnancy demands. Ask what support she has, without assuming."
    }
   ],
   "legal": [
    {
     "h": "Maternity exemption",
     "t": "Pregnant women and those who have had a baby in the previous 12 months are entitled to free NHS prescriptions with a valid maternity exemption certificate."
    },
    {
     "h": "Time off for antenatal care",
     "t": "Employees are entitled to reasonable paid time off for antenatal appointments, including the joint clinic."
    }
   ],
   "professional": [
    {
     "h": "Continuity across teams",
     "t": "The GP’s role is to confirm the joint-clinic referral, support understanding, and record gestational diabetes so the postnatal test and annual HbA1c recall happen."
    },
    {
     "h": "Honest risk communication",
     "t": "GMC Decision making and consent (2020): share risk information in a way the patient can understand, balanced and without undue alarm."
    }
   ],
   "community": [
    {
     "h": "Support after birth",
     "t": "Record the diagnosis for recall; the NHS Diabetes Prevention Programme can support women at high risk of type 2 diabetes if eligible."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Reduced or changed fetal movements",
     "Severe headache, visual disturbance, pain below the ribs, vomiting or sudden swelling (pre-eclampsia)",
     "Marked thirst, polyuria or feeling unwell (significant hyperglycaemia)",
     "Fasting glucose 7.0 or more at diagnosis (immediate insulin)"
    ],
    "psychosocial": [
     "Self-blame about weight and family history",
     "Fear for the baby and the birth",
     "Information overload from online reading"
    ],
    "ice": [
     "Idea: her baby is in danger and she caused it",
     "Concern: something going wrong at birth or the baby born ill",
     "Expectation: to understand the result and what happens next"
    ]
   },
   "diagnosis": "“The test shows gestational diabetes: pregnancy hormones are making it harder for your body to control sugar. It usually goes away after the birth.”",
   "diagnosisLay": "“The placenta makes hormones that act like a brake on insulin. In most women the body presses harder on the accelerator to keep up. In some, it can’t quite, so sugar rises. We help it keep up.”",
   "management": {
    "reflectIce": "“You asked if your baby is in danger and whether you caused this. You didn’t cause it, and keeping your sugar on target is exactly what protects your baby.”",
    "psychosocial": "Remove blame; slow the information down; follow-up call after the first clinic; signpost reliable information instead of online searching.",
    "sharedPlan": [
     "Joint diabetes and antenatal clinic within 1 week (NG3)",
     "Self-monitoring: fasting below 5.3; 1 hour below 7.8 or 2 hours below 6.4 mmol/L",
     "Diet with dietitian support and activity, such as walking after meals",
     "Metformin if targets not met in 1–2 weeks; insulin if still not met",
     "Growth and fluid scans every 4 weeks from 28 to 36 weeks; birth planning, by 40+6 if uncomplicated",
     "Fasting plasma glucose 6–13 weeks after birth; annual HbA1c; early testing next pregnancy"
    ],
    "safetyNet": [
     "Maternity unit immediately for reduced or changed fetal movements",
     "Maternity unit urgently for headache, visual change, pain below the ribs, vomiting or sudden swelling",
     "Follow-up call after the first joint clinic"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Gestational diabetes protocol",
    "s": "NICE NG3 · targets · postnatal",
    "href": "management/gestational-diabetes.html"
   },
   {
    "ic": "💠",
    "t": "Hypertension in pregnancy protocol",
    "s": "NICE NG133 · pre-eclampsia",
    "href": "management/hypertension-pregnancy.html"
   },
   {
    "ic": "💠",
    "t": "Type 2 diabetes protocol",
    "s": "Annual HbA1c · prevention",
    "href": "management/type-2-diabetes.html"
   }
  ],
  "pitfalls": {
   "intro": "The trap is either frightening her with a list of complications or falsely reassuring her. The marks sit in honest risk anchored on control, removing blame, and a concrete plan she can repeat.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Listing complications with no reassuring message.",
     "why": "She leaves more frightened and less able to engage.",
     "fix": "Name the main risks, then: “Keeping your sugar on target greatly reduces them.”"
    },
    {
     "dom": "tasks",
     "fail": "No mention of the joint clinic or its timing.",
     "why": "NG3 asks for review in a joint diabetes and antenatal clinic within 1 week.",
     "fix": "Confirm the referral and the timescale."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting life after the birth.",
     "why": "The postnatal fasting glucose at 6–13 weeks and annual HbA1c are commonly missed.",
     "fix": "“A fasting blood test 6 to 13 weeks after the birth, then every year.”"
    },
    {
     "dom": "rto",
     "fail": "Answering the medical questions but ignoring “Have I done something wrong?”",
     "why": "Self-blame is her hidden agenda.",
     "fix": "“You haven’t done anything wrong. Pregnancy hormones cause this.”"
    },
    {
     "dom": "rto",
     "fail": "Presenting insulin as a failure.",
     "why": "Adds guilt and may reduce acceptance later.",
     "fix": "“Needing metformin or insulin just means the hormones are strong.”"
    },
    {
     "dom": "gs",
     "fail": "No safety-net for fetal movements or pre-eclampsia.",
     "why": "Pregnancy safety-netting must be specific.",
     "fix": "Name reduced movements and pre-eclampsia symptoms, and who to call."
    }
   ]
  }
 },
 "glandular-fever": {
  "stem": {
   "name": "Theo Larkin",
   "age": "19-year-old man",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "University student. Sore throat for over a week.",
   "reason": "Video consultation: “Sore throat and wiped out. Can I have antibiotics so I can play rugby on Saturday?”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG84 Sore throat (acute): antimicrobial prescribing (2018) · [2] Amoxicillin summary of product characteristics, section 4.4 (avoid if infectious mononucleosis suspected) · [3] BNF: phenoxymethylpenicillin, paracetamol, ibuprofen · [4] Ebell MH et al. JAMA 2016 (diagnosis of infectious mononucleosis) · [5] Sylvester JE et al. Sports Health 2019 (splenic rupture timing) · [6] BHIVA/BASHH/BIA Adult HIV testing guidelines (2020) · [7] NICE NG12 Suspected cancer (updated April 2026): lymphoma · [8] NICE NG206 ME/CFS (2021)",
   "summary": "A young adult with more than a week of severe sore throat, fever, marked fatigue and posterior as well as anterior neck nodes most likely has glandular fever (EBV). Confirm with FBC, a heterophile antibody (Monospot) test and LFTs. It is viral: antibiotics will not help, and amoxicillin causes a florid rash. The key safety message is the spleen: no contact sport or heavy lifting for at least 4 weeks and until reviewed, so no rugby on Saturday. Safety-net for airway obstruction and splenic rupture.",
   "points": [
    {
     "h": "Recognise it",
     "t": "Prolonged sore throat, fever, tonsillar exudate, marked fatigue, and tender posterior cervical nodes are typical of infectious mononucleosis in teenagers and young adults. Palatal petechiae, splenomegaly and mild hepatitis support it. Ebell (JAMA 2016) [4]: posterior cervical, axillary or inguinal nodes, palatal petechiae and splenomegaly make it more likely."
    },
    {
     "h": "Tests",
     "t": "FBC and film (lymphocytosis with atypical lymphocytes), heterophile antibody (Monospot) test and LFTs. The heterophile test is about 87% sensitive and 91% specific but can be negative in the first week [4]; repeat it or request EBV serology if negative and suspicion remains. If negative with a mononucleosis-like illness, offer an HIV test: BHIVA/BASHH/BIA 2020 [6] lists mononucleosis-like syndrome as an indicator condition."
    },
    {
     "h": "No antibiotics, no amoxicillin",
     "t": "EBV is viral and antibiotics do not shorten it. Amoxicillin (and ampicillin) cause a widespread maculopapular rash in most people with glandular fever; the SPC [2] advises avoiding it when infectious mononucleosis is suspected. If a separate bacterial tonsillitis needed treating, NICE NG84 [1] first choice is phenoxymethylpenicillin for 5 to 10 days (dose per BNF [3])."
    },
    {
     "h": "Supportive care",
     "t": "Rest as needed, fluids, paracetamol or ibuprofen for pain and fever (dose per BNF [3]), saltwater gargles. Avoid alcohol while unwell and until liver tests settle. Most people feel better within 2 to 4 weeks, but tiredness can last longer."
    },
    {
     "h": "The spleen and sport",
     "t": "Splenic rupture is rare (about 0.1 to 0.5%) but serious; most happen in the first 3 to 4 weeks, and around 90% by day 31 [5]. Advise no contact or collision sport and no heavy lifting for at least 4 weeks from the start of symptoms, and longer while the spleen is enlarged or he is unwell. Many UK NHS services advise about 8 weeks before full contact sport. Agree the return at review, not by guesswork."
    },
    {
     "h": "Red flags",
     "t": "Airway: drooling, inability to swallow fluids, noisy breathing or breathlessness → emergency. Splenic rupture: sudden severe left upper abdominal pain, left shoulder-tip pain, faintness → 999. Also severe dehydration, jaundice or bleeding."
    },
    {
     "h": "If it doesn’t settle",
     "t": "Persistent or enlarging nodes, night sweats, weight loss or splenomegaly without explanation need reassessment: NICE NG12 (updated April 2026) [7] lymphoma criteria. Fatigue beyond 6 weeks with post-exertional symptoms: consider ME/CFS assessment per NICE NG206 [8]."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Theo, I’m Dr Hughes. What’s been going on?",
    "dom": "rto",
    "why": "Open start"
   },
   {
    "who": "pt",
    "text": "I’ve had an awful sore throat for over a week, I’m running temperatures, my neck glands are up and I’m absolutely wiped. I can barely get to lectures. My mate said I need antibiotics. Can you just prescribe some so I can get back to rugby? We’ve got a big match Saturday."
   },
   {
    "who": "dr",
    "text": "That sounds really rough, and I can hear the match matters. Let me ask a few questions and have a look on camera, then we’ll talk about antibiotics and rugby properly. Okay?",
    "dom": "gs",
    "why": "Acknowledges the request and agrees an agenda"
   },
   {
    "who": "pt",
    "text": "Yeah, go on."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Can you swallow fluids and your own saliva all right? Any drooling, noisy breathing or trouble breathing?",
    "dom": "tasks",
    "why": "Airway red flags first"
   },
   {
    "who": "pt",
    "text": "It kills to swallow, but I’m getting drinks down. Breathing’s fine."
   },
   {
    "who": "dr",
    "text": "Good. Could you open wide and point the camera at your throat, then run your fingers down the sides and back of your neck and show me where the glands are?",
    "dom": "tasks",
    "why": "Remote look at the tonsils and node distribution"
   },
   {
    "who": "pt",
    "text": "Here… they’re up at the front and down the back of my neck."
   },
   {
    "who": "dr",
    "text": "Your tonsils look big with white patches, and the glands at the back of the neck matter. How tired are you compared to a normal cold?",
    "dom": "tasks",
    "why": "Notes posterior nodes and quantifies fatigue"
   },
   {
    "who": "pt",
    "text": "Way worse. I sleep all afternoon and still feel flattened."
   },
   {
    "who": "dr",
    "text": "Any pain in your tummy, especially the upper left side, or yellow eyes or skin? Any rashes, or small spots on the roof of your mouth?",
    "dom": "tasks",
    "why": "Spleen, liver and petechiae"
   },
   {
    "who": "pt",
    "text": "Tummy’s fine. No rash. Haven’t looked at the roof of my mouth."
   },
   {
    "who": "dr",
    "text": "Have you taken any antibiotics already, or any other medicines? And any allergies?",
    "dom": "tasks",
    "why": "Checks for prior amoxicillin and allergies"
   },
   {
    "who": "pt",
    "text": "Just paracetamol. No allergies."
   },
   {
    "who": "dr",
    "text": "How are you managing with eating, drinking and your course? Anyone around to help if you get worse?",
    "dom": "tasks",
    "why": "Hydration and support at university"
   },
   {
    "who": "pt",
    "text": "There are people around at uni. Missing lectures is stressing me out."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What do you think is going on, and what worries you most?",
    "dom": "rto",
    "why": "Explores ideas and concerns"
   },
   {
    "who": "pt",
    "text": "Tonsillitis, I reckon. I just need to be fit for Saturday. It’s a big one."
   },
   {
    "who": "dr",
    "text": "So it’s the match and falling behind with lectures. That makes sense. Let me tell you what I think.",
    "dom": "rto",
    "why": "Summarises concerns in his words"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I think this is most likely glandular fever rather than ordinary tonsillitis. The week-plus of sore throat, the fevers, the glands at the back of your neck and being this exhausted fit it well. It’s caused by a virus, so antibiotics won’t help. One of the common ones, amoxicillin, gives people with glandular fever a nasty rash, so we specifically avoid it.",
    "dom": "tasks",
    "why": "Names glandular fever, explains no antibiotics and the amoxicillin rash"
   },
   {
    "who": "pt",
    "text": "So no antibiotics at all? My mate got them."
   },
   {
    "who": "dr",
    "text": "Not for this. If a blood test showed something different we’d rethink, but antibiotics would give you the side-effects without the benefit. What will help is rest, fluids, and regular paracetamol or ibuprofen, plus salty water gargles.",
    "dom": "tasks",
    "why": "Resists the request with a clear reason and gives supportive care"
   },
   {
    "who": "pt",
    "text": "Right. And Saturday?"
   },
   {
    "who": "dr",
    "text": "This is the important bit, and I’m sorry. Glandular fever often swells the spleen, an organ under your left ribs. A swollen spleen can tear with a knock or a tackle, which is rare but can be life-threatening. So no rugby Saturday, no contact sport and no heavy gym lifting for at least four weeks from when this started, and longer if your spleen is still big or you’re still unwell.",
    "dom": "tasks",
    "why": "Splenic rupture risk and the sport rule"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "pt",
    "text": "That’s gutting. Could I just play half?"
   },
   {
    "who": "dr",
    "text": "I get how frustrating that is. The risk is highest in these first weeks, and it only takes one tackle. I’d rather you miss one match than risk your spleen. When we review, I’ll check your tummy and we’ll decide together when it’s safe to get back to contact, rather than guessing. Many people are back to light training sooner than they fear.",
    "dom": "rto",
    "why": "Empathy while holding the safety line, with a route back"
   },
   {
    "who": "pt",
    "text": "Okay. What about tests?"
   },
   {
    "who": "dr",
    "text": "I’d like you to come in today or tomorrow for a quick blood test, a blood count, the glandular fever test and liver tests, and I’ll feel your tummy for the spleen at the same time. If the glandular fever test is negative, I may repeat it or do other tests, including an HIV test, which we offer routinely for this kind of illness.",
    "dom": "tasks",
    "why": "FBC, Monospot, LFTs, face-to-face spleen check; repeat or HIV test if negative"
   },
   {
    "who": "pt",
    "text": "Fine. Can you do me a note for uni?"
   },
   {
    "who": "dr",
    "text": "I can explain what the diagnosis is once the test is back. Most universities have their own process for missed work when you’re ill, so let your tutor or student support know now. Pace yourself, as the tiredness can take a few weeks to lift.",
    "dom": "rto",
    "why": "Practical support for his studies with realistic expectations"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Just so I know I’ve explained it well, what are you going to do?",
    "dom": "gs",
    "why": "Checks understanding with teach-back"
   },
   {
    "who": "pt",
    "text": "No antibiotics. Paracetamol or ibuprofen, fluids, rest. Blood test and tummy check. No rugby or weights for at least four weeks until you say it’s okay."
   },
   {
    "who": "dr",
    "text": "Spot on. Call 999 if you get sudden bad pain in the upper left of your tummy or the tip of your left shoulder, or feel faint. Go to A&E if you start drooling, can’t swallow fluids or your breathing gets noisy or hard. Let someone near you know about these signs too. I’ll see you with the results, and again before any return to contact sport.",
    "dom": "gs",
    "why": "Specific safety-net for spleen and airway; planned review and return-to-sport check"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; heard the antibiotic and rugby requests without dismissing them.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "University pressures, who is around to help, missed lectures, sport as identity.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “wiped out for weeks” and the big match, and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (tonsillitis needing antibiotics), concern (the big match, falling behind), expectation (antibiotics and clearance to play).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Remote throat and neck-node look; face-to-face spleen check; FBC, Monospot and LFTs; repeat or EBV serology and HIV test if negative.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Glandular fever versus streptococcal tonsillitis, HIV seroconversion and, if persistent, lymphoma.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Airway compromise, splenic enlargement or rupture, jaundice, dehydration screened.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named glandular fever and explained why antibiotics do not help.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "No antibiotics; amoxicillin specifically avoided; analgesia and fluids; no contact sport or heavy lifting for at least 4 weeks and until reviewed.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Support with university process; realistic fatigue expectations; alcohol advice while LFTs pending.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Teach-back; 999 and A&E triggers for spleen and airway; results review; return-to-sport review.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "New & undifferentiated presentations",
    "Investigations & results"
   ],
   "stem": {
    "name": "Theo Larkin",
    "age": "19 years · male",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "University student. ⚠ Sore throat for over a week with marked fatigue.",
    "reason": "“Just give me antibiotics so I can play rugby Saturday.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agree",
     "d": "Acknowledge the antibiotic and rugby requests. Agree to assess first."
    },
    {
     "t": "1–5",
     "h": "Assess",
     "d": "Airway first; throat and neck nodes on camera; fatigue; spleen, jaundice, petechiae; prior antibiotics and allergies; who is around to help."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Thinks tonsillitis; the big match; falling behind at university."
    },
    {
     "t": "6–9",
     "h": "Explain",
     "d": "Likely glandular fever; viral; no antibiotics; amoxicillin rash; the spleen and the sport rule."
    },
    {
     "t": "9–12",
     "h": "Plan and close",
     "d": "Bloods and spleen check; supportive care; university process; teach-back; 999 and A&E triggers; review before contact sport."
    }
   ],
   "wordPics": {
    "fail": "Prescribes antibiotics, especially amoxicillin; or refuses antibiotics without explanation; never mentions the spleen, so he plays on Saturday; no safety-net.",
    "pass": "Recognises likely glandular fever, arranges confirmatory bloods, explains no antibiotics, advises no contact sport for several weeks, and safety-nets for splenic rupture.",
    "exc": "All of the above, plus: checks the airway first; uses the camera to look at the throat and node distribution and arranges a face-to-face spleen check; names the amoxicillin rash; explains the Monospot false-negative and offers HIV testing; holds the sport line kindly with a clear review route back to rugby; supports his studies."
   },
   "avoid": [
    {
     "dont": "“I’ll give you some amoxicillin just in case.”",
     "instead": "“This looks viral, so antibiotics won’t help, and amoxicillin in particular causes a nasty rash with glandular fever.”",
     "why": "Amoxicillin causes a florid rash in EBV infection and antibiotics bring harm without benefit."
    },
    {
     "dont": "“You should be fine to play if you feel up to it.”",
     "instead": "“No contact sport for at least four weeks, and we’ll check your spleen before you go back.”",
     "why": "Splenic rupture risk is highest in the first weeks and does not depend on how well he feels."
    },
    {
     "dont": "“It’s just a virus, it’ll pass.”",
     "instead": "“It’s a virus, so the treatment is rest and pain relief, but it can take a few weeks and there are two warning signs I need you to know.”",
     "why": "Dismissive reassurance loses the safety messages and his trust."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "University life",
     "t": "Missed lectures and assessments cause stress. Point him to student support and his university’s process for illness; tell him fatigue may affect study for weeks."
    },
    {
     "h": "Sport and identity",
     "t": "Missing a big match is a real loss for a young sportsman. Acknowledge it and give a clear, reviewed route back."
    }
   ],
   "legal": [
    {
     "h": "Sickness certification",
     "t": "Fit notes relate to fitness for work. For study, universities use their own processes; a GP may provide a factual letter, which can carry a fee."
    },
    {
     "h": "Consent and confidentiality",
     "t": "At 19 he is an adult; results and advice are shared with others, such as coaches or family, only with his consent."
    }
   ],
   "professional": [
    {
     "h": "Antibiotic stewardship",
     "t": "Declining an unnecessary antibiotic, with a clear explanation, is good practice under NICE NG84 and avoids harm from amoxicillin in EBV infection."
    },
    {
     "h": "Remote consultation",
     "t": "Video allows a look at the throat and nodes, but the spleen needs a face-to-face check before advising on return to contact sport."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Student health and wellbeing services; club physiotherapists or coaches for a graded return once cleared at review."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Drooling, difficulty swallowing fluids, stridor or breathlessness",
     "Sudden left upper abdominal or left shoulder-tip pain, faintness",
     "Jaundice, bleeding or severe dehydration",
     "Persistent or enlarging nodes, night sweats or weight loss"
    ],
    "psychosocial": [
     "The big match and sporting identity",
     "Missed lectures and assessment pressure",
     "Who is around to notice if he deteriorates"
    ],
    "ice": [
     "Idea: tonsillitis that needs antibiotics",
     "Concern: missing Saturday’s match and falling behind",
     "Expectation: antibiotics and clearance to play"
    ]
   },
   "diagnosis": "“This is most likely glandular fever, a viral infection. Antibiotics won’t help, and the main risk to manage is your spleen.”",
   "diagnosisLay": "“The glandular fever virus makes your immune system work overtime. Your glands, tonsils and often your spleen swell up while it fights. The spleen sits just under your left ribs, and while it’s swollen, a hard knock can tear it.”",
   "management": {
    "reflectIce": "“You came for antibiotics to make Saturday. I know that’s not the answer you wanted, but missing one match protects you from a rare but serious injury.”",
    "psychosocial": "Validate the loss of the match; give a reviewed route back to rugby; help with university processes; share the warning signs with people around him, with his agreement.",
    "sharedPlan": [
     "FBC, Monospot and LFTs with a face-to-face spleen check; repeat or EBV serology and HIV test if negative",
     "No antibiotics; avoid amoxicillin; paracetamol or ibuprofen (dose per BNF), fluids, gargles",
     "No contact sport or heavy lifting for at least 4 weeks and until reviewed"
    ],
    "safetyNet": [
     "Sudden left upper abdominal or shoulder-tip pain, faintness: 999",
     "Drooling, cannot swallow fluids, noisy or difficult breathing: A&E",
     "Review with results and before return to contact sport; persistent nodes or weight loss: reassess"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Glandular fever",
    "s": "Management protocol · spleen and sport",
    "href": "management/glandular-fever.html"
   },
   {
    "ic": "🗺️",
    "t": "Sore throat",
    "s": "Visual algorithm · NICE NG84",
    "href": "algorithms/sore-throat.html"
   },
   {
    "ic": "🗺️",
    "t": "Lymphadenopathy",
    "s": "Visual algorithm · when to refer",
    "href": "algorithms/lymphadenopathy.html"
   },
   {
    "ic": "🗺️",
    "t": "Lymphocytosis",
    "s": "Visual algorithm · atypical lymphocytes",
    "href": "algorithms/lymphocytosis.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you give the spleen advice to a young rugby player who wants antibiotics. Many candidates recognise glandular fever but forget the sport rule, or prescribe amoxicillin under pressure.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing amoxicillin or another antibiotic to satisfy the request.",
     "why": "EBV is viral; amoxicillin causes a florid rash; the SPC advises avoiding it when glandular fever is suspected.",
     "fix": "Explain the virus and the rash, and offer effective symptom relief."
    },
    {
     "dom": "tasks",
     "fail": "No advice about contact sport.",
     "why": "Splenic rupture is rare but most cases occur in the first 3 to 4 weeks.",
     "fix": "No contact sport or heavy lifting for at least 4 weeks, and until reviewed."
    },
    {
     "dom": "tasks",
     "fail": "Taking a negative Monospot as the final answer.",
     "why": "The heterophile test can be negative early and misses some cases (Ebell, JAMA 2016).",
     "fix": "Repeat or request EBV serology, and offer an HIV test (BHIVA/BASHH/BIA 2020)."
    },
    {
     "dom": "tasks",
     "fail": "Never checking the airway or the spleen.",
     "why": "Airway obstruction and splenic enlargement are the dangerous complications.",
     "fix": "Ask about drooling and breathing first; arrange a face-to-face abdominal check."
    },
    {
     "dom": "rto",
     "fail": "Flatly refusing antibiotics and rugby with no empathy.",
     "why": "He leaves feeling dismissed and may ignore the safety advice.",
     "fix": "Name the loss of the match, explain the reason and give a route back."
    },
    {
     "dom": "gs",
     "fail": "Vague safety-net.",
     "why": "Splenic rupture needs 999, and the patient must recognise it.",
     "fix": "“Sudden pain under your left ribs or in your left shoulder tip, or feeling faint: call 999.”"
    }
   ]
  }
 },
 "leg-ulcer": {
  "stem": {
   "name": "Glenys Hart",
   "age": "71-year-old woman",
   "pmh": [
    "Obesity",
    "Varicose veins",
    "Reduced mobility"
   ],
   "meds": [
    "Not specified in the case: check the repeat record"
   ],
   "allergy": "None recorded",
   "recent": "Weeping sore over the inner ankle for several weeks, not healing. Leg swelling and itch around it.",
   "reason": "“My neighbour had hers bandaged up tight and it sorted it. Can you just do that for me?”"
  },
  "knowledge": {
   "guideline": "[1] National Wound Care Strategy Programme (NWCSP) Leg ulcer recommendations (2020, updated 2023) · [2] NICE CG168 Varicose veins: diagnosis and management (2013) · [3] NICE NG152 Leg ulcer infection: antimicrobial prescribing (2020) · [4] NICE NG12 (updated April 2026) Suspected cancer: recognition and referral (updated April 2026) · [5] NICE CG147 Peripheral arterial disease (2012, updated 2020)",
   "summary": "A classic venous leg ulcer in the gaiter area. Compression heals it, but strong compression must wait for an ABPI to exclude arterial disease. Mild compression can start now if there are no red flags. Refer to the vascular service, treat infection only if present, and keep malignancy in mind if it does not heal.",
   "points": [
    {
     "h": "Venous or arterial?",
     "t": "Venous: medial gaiter area, shallow, sloping edges, exudate, haemosiderin staining, varicose eczema, oedema, often less painful. Arterial: distal or over pressure points, punched out, deep, painful especially at night or on elevation and eased by hanging the leg down, cold pale foot, weak or absent pulses. Neuropathic: pressure points in people with diabetes, often painless."
    },
    {
     "h": "Compression and the ABPI",
     "t": "NWCSP [1]: if there are no red flags and no signs of arterial disease, start mild graduated compression (20 mmHg or less at the ankle) straight away, and complete a full assessment including ABPI, normally within 14 days. Strong, full compression, which is what “bandaged tight” means, is applied only after the ABPI. If the ABPI is below 0.8 or above 1.3, get specialist advice before compression."
    },
    {
     "h": "Why the ABPI matters",
     "t": "Strong compression on a leg with poor arterial supply can cause ischaemia, necrosis and limb loss. Pulses alone are unreliable, especially with oedema and obesity. In diabetes, ABPI can be falsely normal or raised because the arteries are stiff [5]."
    },
    {
     "h": "Refer to vascular",
     "t": "CG168 [2]: refer people with a venous leg ulcer (a break in the skin below the knee that has not healed within 2 weeks) or a healed venous leg ulcer to a vascular service for duplex assessment and treatment of the underlying veins."
    },
    {
     "h": "Infection",
     "t": "NG152 [3]: most leg ulcers are colonised and few are infected. Offer an antibiotic only if there are symptoms or signs of infection, such as redness or swelling spreading beyond the ulcer, local warmth, increased pain or fever. Do not swab routinely."
    },
    {
     "h": "Atypical or non-healing",
     "t": "Rolled or everted edges, overgrown tissue, bleeding, an unusual site, or failure to heal despite good treatment should prompt reassessment and biopsy. NICE NG12 (updated April 2026) [4]: consider a suspected cancer pathway referral for a skin lesion that raises the suspicion of squamous cell carcinoma."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Hart, I’m Dr Evans. What can I do for you today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "I’ve had this sore on the inside of my ankle for a few weeks now. It weeps and it just won’t heal. My neighbour had hers bandaged up tight and it sorted it, so can you just do that for me? My leg’s swollen and a bit itchy round it too."
   },
   {
    "who": "dr",
    "text": "It sounds like it’s been a real nuisance for weeks. Your neighbour may well be right that a bandage is the answer, and I want to make sure it’s the right one for your leg. Can I ask a few questions and have a look?",
    "dom": "rto",
    "why": "Takes the request seriously; signals a plan"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "History",
    "clock": "1–4 min",
    "who": "dr",
    "text": "How did it start, and has it changed at all: bigger, bleeding, or looking different at the edges?",
    "dom": "tasks",
    "why": "History of the ulcer, including atypical features"
   },
   {
    "who": "pt",
    "text": "It just broke down. It’s about the same, just wet all the time. No bleeding."
   },
   {
    "who": "dr",
    "text": "Is it painful? Does your foot or calf hurt at night in bed, or when you put the leg up, and feel better hanging the leg over the side?",
    "dom": "tasks",
    "why": "Screens for arterial rest pain"
   },
   {
    "who": "pt",
    "text": "Not really painful. Sore when the dressing sticks. No, not at night."
   },
   {
    "who": "dr",
    "text": "Any pain in your calves when you walk that makes you stop? And do you have diabetes, or has anyone mentioned your circulation before?",
    "dom": "tasks",
    "why": "Claudication, diabetes and known arterial disease"
   },
   {
    "who": "pt",
    "text": "I don’t walk far. I don’t have diabetes that I know of."
   },
   {
    "who": "dr",
    "text": "Has the area become hot, redder, or more painful, or have you felt feverish?",
    "dom": "tasks",
    "why": "Screens for infection"
   },
   {
    "who": "pt",
    "text": "No. Just itchy around it."
   },
   {
    "phase": "Examination",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Let me look at both legs and feel the pulses in your feet. I’ll also check the feeling in your feet.",
    "dom": "tasks",
    "why": "Examines both legs, pulses and sensation"
   },
   {
    "who": "dr",
    "text": "The sore is shallow, just above the inside ankle bone, with brown staining and dry, itchy skin around it, and your ankle is swollen. That fits a venous ulcer, where the leg veins don’t drain properly. The edges look flat, which is reassuring. I can feel the pulses, but swelling makes them hard to judge.",
    "dom": "tasks",
    "why": "Describes venous features; notes the limits of pulse palpation"
   },
   {
    "who": "pt",
    "text": "So I can have the bandage?"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "6–7 min",
    "who": "dr",
    "text": "We’re getting there. Before I explain, what worries you most about it?",
    "dom": "rto",
    "why": "Elicits concerns"
   },
   {
    "who": "pt",
    "text": "That it’ll never heal. And it’s so wet, it’s embarrassing."
   },
   {
    "who": "dr",
    "text": "That makes sense. With the right treatment most of these do heal, although it takes time.",
    "dom": "rto",
    "why": "Validates and gives realistic hope"
   },
   {
    "phase": "Explanation and plan",
    "clock": "7–11 min",
    "who": "dr",
    "text": "Firm bandaging is the main treatment for this kind of ulcer. But a tight bandage squeezes the leg, and if the arteries bringing blood to the foot are narrowed, it can cut off the blood supply and do real harm. So first we measure the blood pressure at your ankles and arms and compare them. It’s called an ABPI.",
    "dom": "tasks",
    "why": "Explains why ABPI must precede strong compression"
   },
   {
    "who": "pt",
    "text": "So you can’t do it today?"
   },
   {
    "who": "dr",
    "text": "The nurse can put on a light support bandage from today, which is safe because you don’t have signs of circulation problems. The proper tight bandaging starts once the test confirms the blood supply is good. I’ll book the test in the next week or two.",
    "dom": "tasks",
    "why": "Mild compression now, full compression after ABPI (NWCSP)"
   },
   {
    "who": "pt",
    "text": "That’s better than nothing."
   },
   {
    "who": "dr",
    "text": "I’d also like to refer you to the vascular team to look at your veins with a scan, as treating them can help the ulcer heal and stop it coming back. The nurses will do the dressings, and I’ll suggest a moisturiser for the itchy skin.",
    "dom": "tasks",
    "why": "Vascular referral (CG168), wound care, varicose eczema"
   },
   {
    "who": "pt",
    "text": "I don’t need antibiotics?"
   },
   {
    "who": "dr",
    "text": "Not at the moment. Almost all ulcers have germs on the surface, but antibiotics only help if it becomes infected: spreading redness, heat, more pain or fever.",
    "dom": "tasks",
    "why": "Antibiotic stewardship (NG152)"
   },
   {
    "who": "dr",
    "text": "Raising your leg when you sit, and gentle ankle movements help the swelling. If you ever want support with weight, we can help with that too. How does that sound?",
    "dom": "rto",
    "why": "Lifestyle advice offered, not imposed; checks agreement"
   },
   {
    "who": "pt",
    "text": "I can put my feet up more."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If the foot goes cold, pale or blue, or becomes very painful under the bandage, take the bandage off and contact us the same day. The same applies if the area goes red and hot or you feel feverish. If it’s not getting smaller after a few weeks, or the edges change or it bleeds, we’ll take a small sample to check the cause. Can you tell me what the plan is?",
    "dom": "gs",
    "why": "Compression and infection safety-net; malignancy awareness; teach-back"
   },
   {
    "who": "pt",
    "text": "Light bandage now, the ankle test soon, then the tight one. Legs up. Take it off and ring if my foot goes cold or it hurts badly."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll see you after the test to go through the result.",
    "dom": "gs",
    "why": "Follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let her explain and took the neighbour’s bandage request seriously.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Mobility, weight, how she manages dressings and the embarrassment of exudate.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “bandaged tight” as the key safety issue, and the worry that it will never heal.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (tight bandage will cure it), concern (never healing, embarrassment), expectation (bandage today).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Examined both legs, pulses, sensation and the wound; planned ABPI; considered bloods including HbA1c.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Venous versus arterial, mixed, neuropathic and malignant ulcers.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for arterial rest pain, claudication, infection and atypical features.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named a venous leg ulcer and explained why pulses alone cannot clear her for strong compression.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Mild compression now if no red flags; strong compression after ABPI; leg-ulcer nursing and vascular referral.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Antibiotics only if infected; emollient for varicose eczema; weight and mobility support offered.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Remove bandage and call for a cold, pale or painful foot; infection signs; biopsy if not healing; review after ABPI.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Glenys Hart",
    "age": "71 years · female",
    "pmh": [
     "Obesity",
     "Varicose veins",
     "Reduced mobility"
    ],
    "meds": [
     "Check repeat record"
    ],
    "allergy": "None recorded",
    "recent": "Non-healing weeping sore, inner ankle, several weeks; leg swelling and itch.",
    "reason": "“Can you just bandage it up tight?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Let her make the bandage request; acknowledge it rather than dismiss it."
    },
    {
     "t": "1–4",
     "h": "History",
     "d": "Duration and change, pain at night or on elevation, claudication, diabetes, infection signs, atypical features."
    },
    {
     "t": "4–7",
     "h": "Examine and ICE",
     "d": "Both legs, ulcer, pulses, sensation. Her worry that it will never heal."
    },
    {
     "t": "7–11",
     "h": "Plan",
     "d": "Why ABPI first; mild compression now if no red flags; strong compression after ABPI; vascular referral; no antibiotics unless infected; elevation."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "Remove bandage if foot cold or painful; infection; biopsy if not healing; teach-back and review."
    }
   ],
   "wordPics": {
    "fail": "Applies tight compression on request without an ABPI, or refuses any bandage without explanation; prescribes antibiotics for a colonised ulcer; does not examine pulses; no safety-net.",
    "pass": "Recognises a venous ulcer, explains that ABPI is needed before strong compression, refers to the leg-ulcer nurses, and safety-nets for infection and ischaemia.",
    "exc": "All of the above, plus: explains the risk in plain words; offers safe mild compression now in line with NWCSP; refers to vascular per CG168; applies NG152 stewardship; keeps malignancy in mind; sets realistic healing expectations; checks understanding with teach-back."
   },
   "avoid": [
    {
     "dont": "“Nurse, bandage it up tight please.”",
     "instead": "“Tight bandaging is the right treatment once we’ve checked your circulation with an ankle test.”",
     "why": "Strong compression on an arterial leg can cause necrosis."
    },
    {
     "dont": "“Let’s do a swab and start antibiotics.”",
     "instead": "“Antibiotics only help if it becomes infected. Here’s what to look for.”",
     "why": "NG152: most ulcers are colonised, not infected."
    },
    {
     "dont": "“It’ll be healed in a couple of weeks.”",
     "instead": "“Most heal with the right treatment, but it usually takes weeks to months.”",
     "why": "False expectations damage trust and adherence."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Mobility and self-care",
     "t": "Reduced mobility and weight make elevation, calf exercise and dressing changes harder. Ask what help she has at home and whether she can reach the leg-ulcer clinic or needs district nurses."
    },
    {
     "h": "Dignity",
     "t": "Leaking exudate is embarrassing and isolating. Good dressings and compression reduce it."
    }
   ],
   "legal": [
    {
     "h": "Consent to compression",
     "t": "Explain the benefits and risks of compression, including what to do if the foot becomes cold or painful, and record her consent."
    }
   ],
   "professional": [
    {
     "h": "Team working",
     "t": "Practice nurses, district nurses, the tissue viability team and the vascular service share care. A clear referral and a documented ABPI keep the plan safe."
    },
    {
     "h": "Antimicrobial stewardship",
     "t": "Apply NICE NG152: treat infection, not colonisation, and avoid routine swabs."
    }
   ],
   "community": [
    {
     "h": "Leg clubs and support",
     "t": "Community leg-ulcer clinics or leg clubs, where available, offer treatment and social contact. Legs Matter provides patient information."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Rest pain at night or on elevation, cold or pale foot: arterial disease",
     "Spreading redness, warmth, increasing pain or fever: infection",
     "Rolled or everted edges, bleeding, overgrowth or failure to heal: possible SCC",
     "Diabetes: neuropathic ulcer and unreliable ABPI"
    ],
    "psychosocial": [
     "Mobility and help at home",
     "Weight",
     "Embarrassment from exudate"
    ],
    "ice": [
     "Idea: a tight bandage will cure it, as it did for her neighbour",
     "Concern: that it will never heal",
     "Expectation: to be bandaged today"
    ]
   },
   "diagnosis": "“This is a venous leg ulcer. The veins in your leg aren’t pushing blood back up efficiently, so the pressure in the skin near the ankle is high and it breaks down.”",
   "diagnosisLay": "“Imagine the veins as a pipe with one-way valves. When the valves are leaky, fluid pools at the ankle like water at the bottom of a hose. The bandage squeezes it back up. But we must check the supply pipe, the arteries, is open before we squeeze hard.”",
   "management": {
    "reflectIce": "“You’re right that a firm bandage is the treatment. We’re doing it safely: a light one now, and the full one once the test shows your circulation can take it.”",
    "psychosocial": "Arrange nursing care she can reach, support elevation and mobility, and offer weight support if she wants it.",
    "sharedPlan": [
     "Mild compression now (no red flags), ABPI within 14 days (NWCSP)",
     "Strong compression if ABPI 0.8–1.3; specialist advice otherwise",
     "Vascular referral for venous assessment (CG168)",
     "Dressings, emollient for varicose eczema, elevation",
     "Antibiotics only if infected (NG152); consider HbA1c"
    ],
    "safetyNet": [
     "Remove bandage and call same day for a cold, pale, blue or very painful foot",
     "Call for spreading redness, heat or fever",
     "Biopsy if not healing or atypical; review after ABPI"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Leg ulcers pathway",
    "s": "Visual algorithm · venous or arterial",
    "href": "algorithms/leg-ulcers.html"
   },
   {
    "ic": "💠",
    "t": "Varicose veins protocol",
    "s": "CG168 · vascular referral",
    "href": "management/varicose-veins.html"
   },
   {
    "ic": "💠",
    "t": "Peripheral arterial disease",
    "s": "ABPI · CG147",
    "href": "management/peripheral-arterial-disease.html"
   },
   {
    "ic": "📋",
    "t": "Peripheral arterial disease",
    "s": "Case walkthrough",
    "href": "../cases/peripheral-arterial-disease.html"
   }
  ],
  "pitfalls": {
   "intro": "This station hinges on one safety step. Candidates fail by bandaging on request or by refusing without explaining. The marks go to a safe compression plan, clear reasons, and stewardship.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Applying strong compression without an ABPI.",
     "why": "Compression on a leg with arterial disease can cause necrosis.",
     "fix": "Mild compression now if no red flags; strong compression after the ABPI."
    },
    {
     "dom": "tasks",
     "fail": "Relying on palpable pulses.",
     "why": "Oedema and obesity make pulses unreliable, and ABPI quantifies supply.",
     "fix": "Arrange ABPI and ask about rest pain and claudication."
    },
    {
     "dom": "tasks",
     "fail": "Antibiotics for a weepy ulcer.",
     "why": "NG152: offer antibiotics only for signs of infection.",
     "fix": "Explain colonisation and give infection signs."
    },
    {
     "dom": "tasks",
     "fail": "No vascular referral.",
     "why": "CG168 recommends referral for an ulcer not healed within 2 weeks.",
     "fix": "Refer for duplex and venous treatment."
    },
    {
     "dom": "rto",
     "fail": "Refusing the bandage bluntly.",
     "why": "She hears “no” and loses trust.",
     "fix": "Agree that compression is the treatment and explain the safe order."
    },
    {
     "dom": "gs",
     "fail": "No advice on what to do if the bandage causes problems.",
     "why": "Ischaemia under compression needs immediate action.",
     "fix": "“If the foot goes cold, pale or very painful, take it off and call us.”"
    }
   ]
  }
 },
 "lyme-disease": {
  "stem": {
   "name": "Alan Crowther",
   "age": "41-year-old man",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "Returned from a walking holiday in the Scottish Highlands about 10 days ago.",
   "reason": "Video consultation: “A spreading round rash on my calf. Is it ringworm?”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG95 Lyme disease (2018) · [2] NICE QS186 Lyme disease (2019) · [3] BNF: doxycycline (photosensitivity, oesophageal irritation) · [4] UKHSA Tick awareness and tick removal guidance",
   "summary": "A slowly expanding red rash, with or without central clearing, appearing days to weeks after time in tick habitat, is erythema migrans until proved otherwise. NICE NG95 says diagnose and treat Lyme disease on the rash alone: no blood test. Doxycycline first line, tick-bite prevention, and a safety-net for the uncommon later features of disseminated disease.",
   "points": [
    {
     "h": "Recognise erythema migrans",
     "t": "NICE NG95 [1]: a red rash that increases in size and may have central clearing, usually not itchy, hot or painful, typically appearing 1 to 4 weeks after a tick bite (range 3 days to 3 months) and lasting several weeks. Many people do not remember a bite, so its absence does not exclude Lyme. The Scottish Highlands are a recognised area for infected ticks."
    },
    {
     "h": "Treat on the rash, no test",
     "t": "NICE NG95 [1] and QS186 [2]: diagnose and treat Lyme disease without laboratory testing in people with erythema migrans. Serology is often negative early and delays treatment. Testing is for suspected Lyme without erythema migrans."
    },
    {
     "h": "Antibiotics",
     "t": "NICE NG95 [1]: doxycycline 100 mg twice a day for 21 days first line for erythema migrans; amoxicillin for 21 days if doxycycline is contraindicated (for example pregnancy), and azithromycin as a further alternative (doses per BNF). BNF [3]: warn about photosensitivity and take with plenty of water, sitting or standing, to avoid oesophageal irritation."
    },
    {
     "h": "Not ringworm, not cellulitis",
     "t": "Tinea corporis has a scaly, raised, itchy advancing edge and grows slowly over weeks. Cellulitis is hot, tender, spreading and often with fever. A tick-bite reaction is small, early and does not keep expanding. Size, slow spread, lack of itch and the exposure history point to erythema migrans."
    },
    {
     "h": "Later features to safety-net",
     "t": "Disseminated Lyme disease can cause facial or other cranial nerve palsy, radicular pain, meningitis (severe headache, neck stiffness), carditis (palpitations, dizziness, fainting, breathlessness, chest pain) and arthritis (a swollen joint, often a knee). These need prompt review; carditis with heart block needs same-day assessment."
    },
    {
     "h": "Tick prevention and removal",
     "t": "UKHSA [4]: cover skin and use repellent in tick areas, check skin after walks, and remove ticks promptly with fine-tipped tweezers or a tick-removal tool, gripping close to the skin and pulling steadily without crushing, then clean the area. NICE NG95 [1]: do not give antibiotics after a tick bite in a person with no symptoms."
    },
    {
     "h": "Recovery",
     "t": "Most people treated early recover fully. Some have tiredness or aches that settle over weeks. If symptoms persist after treatment, review; NICE NG95 [1] allows a second course with an alternative antibiotic and specialist advice when needed."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Crowther, I’m Dr Patel. How can I help today?",
    "dom": "rto",
    "why": "Open start"
   },
   {
    "who": "pt",
    "text": "Doc, I got back from a walking holiday in the Highlands about ten days ago and I’ve got this odd rash on my calf. It started small and it’s slowly spread into a big circle, gone a bit clear in the middle, like a target. It’s not that itchy. I wondered if it’s ringworm? I don’t remember any bite."
   },
   {
    "who": "dr",
    "text": "Thanks, that’s a really clear description. I’d like to ask a few questions, have a look at the rash on the camera, and then we’ll decide together what it is and what to do. Is that okay?",
    "dom": "gs",
    "why": "Agrees an agenda including a remote look at the rash"
   },
   {
    "who": "pt",
    "text": "Sure."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Could you point the camera at your calf, with something next to it for size, maybe a coin or a ruler?",
    "dom": "tasks",
    "why": "Remote examination with a size reference"
   },
   {
    "who": "pt",
    "text": "Here. It’s about the size of my palm now."
   },
   {
    "who": "dr",
    "text": "I can see a large round red patch with a paler centre. Is the edge scaly or raised, and is it hot or tender to touch?",
    "dom": "tasks",
    "why": "Discriminates from tinea and cellulitis"
   },
   {
    "who": "pt",
    "text": "Not scaly. Maybe a bit warm, but not sore."
   },
   {
    "who": "dr",
    "text": "When did you first notice it, and how fast has it grown?",
    "dom": "tasks",
    "why": "Timing and rate of spread"
   },
   {
    "who": "pt",
    "text": "About a week ago. Maybe a bit bigger each day."
   },
   {
    "who": "dr",
    "text": "On the walk, were you in long grass, bracken, woodland or around deer or sheep?",
    "dom": "tasks",
    "why": "Tick-habitat exposure"
   },
   {
    "who": "pt",
    "text": "All of that, really. Long grass most days, and there were deer about."
   },
   {
    "who": "dr",
    "text": "Have you had fevers, aches, headaches or felt run down? Any drooping of your face, a stiff neck, palpitations or dizzy turns, or a swollen joint?",
    "dom": "tasks",
    "why": "Screens for systemic and disseminated features"
   },
   {
    "who": "pt",
    "text": "Bit tired, maybe achy. Nothing like that otherwise."
   },
   {
    "who": "dr",
    "text": "Any other rashes elsewhere? Do you take any medicines, have any allergies, or have any reason you couldn’t take an antibiotic?",
    "dom": "tasks",
    "why": "Other lesions and prescribing safety"
   },
   {
    "who": "pt",
    "text": "Just this one. No medicines, no allergies that I know of."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You wondered about ringworm. Was anything else on your mind?",
    "dom": "rto",
    "why": "Explores the idea and hidden concerns"
   },
   {
    "who": "pt",
    "text": "Honestly, once I searched it, “Lyme disease” came up, and I’ve read horror stories online about people ill for years. I was hoping it was just a fungus and I could get a cream."
   },
   {
    "who": "dr",
    "text": "That’s a very natural worry, and I’m glad you’ve said it. Let me tell you what I think, and why the news is actually good.",
    "dom": "rto",
    "why": "Acknowledges the fear and signals a clear answer"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I don’t think this is ringworm. A ringworm patch usually has a scaly, itchy edge. A big, slowly spreading red ring that isn’t very itchy, coming up a week or two after walking through tick country, is the typical rash of early Lyme disease. It’s called erythema migrans. Ticks are tiny, so most people never notice the bite.",
    "dom": "tasks",
    "why": "Names erythema migrans and explains the discriminating features"
   },
   {
    "who": "pt",
    "text": "So you think it is Lyme? Don’t I need a blood test?"
   },
   {
    "who": "dr",
    "text": "Good question. With this rash, the national guidance says we diagnose and treat it on what we see. Blood tests are often negative this early, so waiting for one would only delay treatment. The good news is that caught at this stage, Lyme disease responds very well to antibiotics, and most people get completely better.",
    "dom": "tasks",
    "why": "Clinical diagnosis without serology (NICE NG95) with proportionate reassurance"
   },
   {
    "who": "pt",
    "text": "That’s a relief. What about the horror stories?"
   },
   {
    "who": "dr",
    "text": "Those usually come from people whose infection wasn’t recognised early. You’re in the best position: we’ve spotted it and we’re treating it now.",
    "dom": "rto",
    "why": "Addresses media-driven anxiety proportionately"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’ll prescribe doxycycline, one tablet twice a day for 21 days. Take it with a full glass of water and stay upright for a while afterwards, as it can irritate the gullet. It also makes skin burn easily in the sun, so cover up or use sunscreen. Try to finish the whole course.",
    "dom": "tasks",
    "why": "Doxycycline per NICE NG95 with BNF counselling"
   },
   {
    "who": "pt",
    "text": "Three weeks. Okay. Should I do anything about the walking?"
   },
   {
    "who": "dr",
    "text": "Keep walking, just be tick-aware. Long trousers tucked into socks, insect repellent, and check your skin when you get home, especially the backs of the knees, groin and waistband. If you find a tick, take it off quickly with fine tweezers or a tick tool, gripping close to the skin and pulling steadily, without squeezing it, then clean the spot.",
    "dom": "tasks",
    "why": "Prevention and removal advice (UKHSA)"
   },
   {
    "who": "pt",
    "text": "Good to know."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Can you tell me back the plan, so I know I’ve explained it well?",
    "dom": "gs",
    "why": "Checks understanding with teach-back"
   },
   {
    "who": "pt",
    "text": "It’s probably Lyme from a tick I never saw. Doxycycline twice a day for three weeks with water, careful in the sun. No blood test needed. Check for ticks next time."
   },
   {
    "who": "dr",
    "text": "Perfect. The rash may take a little while to fade. Contact us urgently if one side of your face droops, you get a severe headache or stiff neck, palpitations, dizzy spells or fainting, chest pain or breathlessness, or later a swollen joint. If the rash keeps spreading after a few days of treatment, or you’re not better when the course finishes, book to see me and we’ll review.",
    "dom": "gs",
    "why": "Specific safety-net for disseminated disease and planned review"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; let him describe the rash and the trip fully before questions.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Walking hobby and future exposure; online stories feeding worry; practical ability to take a 21-day course.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I don’t remember any bite” and the Highlands trip and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (ringworm), concern (Lyme “horror stories”), expectation (an antifungal cream).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Remote look at the rash with a size reference; edge, scale, warmth, tenderness; no blood test needed with erythema migrans.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Erythema migrans versus tinea, cellulitis, tick-bite reaction and insect bite.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about facial palsy, meningism, palpitations, dizziness, fainting, joint swelling and systemic illness.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named erythema migrans as early Lyme disease and explained why no test is needed.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Doxycycline 100 mg twice a day for 21 days (NICE NG95) with BNF counselling; allergy and contraindications checked.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Tick prevention and removal advice; encouraged to keep walking safely; supported his worry with a clear plan if symptoms persist.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Teach-back; red flags for disseminated disease; review if the rash spreads on treatment or symptoms persist.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Investigations & results"
   ],
   "stem": {
    "name": "Alan Crowther",
    "age": "41 years · male",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "⚠ Walking holiday in the Scottish Highlands about 10 days ago.",
    "reason": "“Spreading round rash on my calf. Ringworm?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agree",
     "d": "Let him describe the target rash and the trip. Agree to look on camera."
    },
    {
     "t": "1–5",
     "h": "Assess",
     "d": "Size with a reference, edge, scale, warmth, timing, habitat exposure, systemic and disseminated features, allergies."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Ringworm idea, fear from Lyme stories online, hope for a cream."
    },
    {
     "t": "6–9",
     "h": "Explain",
     "d": "Erythema migrans; diagnosed on the rash; no blood test; good outlook when treated early."
    },
    {
     "t": "9–12",
     "h": "Treat and close",
     "d": "Doxycycline 21 days with counselling; tick prevention and removal; teach-back; safety-net and review."
    }
   ],
   "wordPics": {
    "fail": "Diagnoses ringworm and prescribes an antifungal; or suspects Lyme but sends blood tests and waits for results before treating; no safety-net.",
    "pass": "Recognises erythema migrans, treats with doxycycline without testing, and gives basic tick advice and a safety-net.",
    "exc": "All of the above, plus: uses the camera well with a size reference; explains the discriminating features against tinea and cellulitis; gives the correct NG95 regimen with BNF counselling; responds to the online horror stories honestly and proportionately; safety-nets facial palsy, meningism, carditis and arthritis specifically."
   },
   "avoid": [
    {
     "dont": "“It looks like ringworm, try an antifungal cream.”",
     "instead": "“A big spreading ring that isn’t itchy, after walking in tick country, is typical of early Lyme disease.”",
     "why": "Mislabelling erythema migrans delays treatment and risks disseminated disease."
    },
    {
     "dont": "“Let’s do a Lyme blood test and treat if it comes back positive.”",
     "instead": "“With this rash we diagnose and treat straight away. Blood tests are often negative this early.”",
     "why": "NICE NG95 advises treatment without testing when erythema migrans is present."
    },
    {
     "dont": "“Lyme disease can be really serious and hard to treat.”",
     "instead": "“Caught at this stage it responds very well to antibiotics, and most people recover fully.”",
     "why": "Proportionate, accurate reassurance reduces anxiety and supports adherence."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Outdoor activity",
     "t": "Walking is good for health. The aim is tick awareness, not avoiding the countryside."
    },
    {
     "h": "Online information",
     "t": "Online stories about chronic Lyme can drive anxiety. Offer reliable information and a clear plan for what happens if symptoms persist."
    }
   ],
   "legal": [
    {
     "h": "Prescribing safety",
     "t": "Check allergies, pregnancy where relevant and interacting medicines before prescribing doxycycline, and document counselling on photosensitivity and how to take it."
    }
   ],
   "professional": [
    {
     "h": "Remote examination",
     "t": "A skin lesion can often be assessed well on video or with a photo sent to the practice. Record what was seen, with a size reference, and bring the patient in if the image is not clear enough."
    },
    {
     "h": "Test stewardship",
     "t": "Sending serology when erythema migrans is present adds delay and false reassurance. Follow NICE NG95: treat on the rash."
    }
   ],
   "community": [
    {
     "h": "Information",
     "t": "UKHSA tick awareness materials cover prevention and safe removal. Countryside and walking organisations often share them for walkers."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Facial or other cranial nerve palsy",
     "Severe headache or neck stiffness",
     "Palpitations, dizziness, fainting, breathlessness or chest pain (carditis)",
     "A swollen joint later",
     "Multiple rashes or a rash still spreading on treatment"
    ],
    "psychosocial": [
     "Worry from online stories about chronic Lyme",
     "Hobby walker likely to be exposed again",
     "Practicalities of a 21-day course"
    ],
    "ice": [
     "Idea: ringworm; no bite, so not from the trip",
     "Concern: “What if it’s Lyme disease?”",
     "Expectation: an antifungal cream"
    ]
   },
   "diagnosis": "“This is erythema migrans, the rash of early Lyme disease, caught from a tick bite you didn’t notice. We diagnose it on the rash and treat it straight away.”",
   "diagnosisLay": "“A tiny tick, smaller than a poppy seed, can pass on a germ when it bites. The germ spreads out slowly in the skin, which is why the red ring keeps getting bigger with a paler middle. Antibiotics clear it.”",
   "management": {
    "reflectIce": "“You thought ringworm and hoped for a cream, and you were worried by the stories online. It’s Lyme, but the early, very treatable kind.”",
    "psychosocial": "Reassure honestly about prognosis; keep him walking safely; give a clear route back if symptoms persist.",
    "sharedPlan": [
     "Doxycycline 100 mg twice a day for 21 days (NICE NG95); with water, upright, sun protection (BNF)",
     "No serology while erythema migrans is present",
     "Tick prevention and removal advice (UKHSA)"
    ],
    "safetyNet": [
     "Facial droop, severe headache or stiff neck, palpitations, dizziness or fainting, chest pain: urgent review",
     "Rash still spreading after a few days of treatment, or symptoms after the course: review",
     "Later swollen joint: review"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Lyme disease",
    "s": "Management protocol · NICE NG95",
    "href": "management/lyme-disease.html"
   },
   {
    "ic": "📋",
    "t": "Fungal skin infections",
    "s": "Case walkthrough · tinea differential",
    "href": "../cases/fungal-infections.html"
   },
   {
    "ic": "💠",
    "t": "Cellulitis",
    "s": "Management protocol · differential",
    "href": "management/cellulitis.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you recognise erythema migrans and treat it on the rash. Many candidates accept the patient’s ringworm label, or order a Lyme test and wait.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Agreeing it is ringworm and prescribing an antifungal.",
     "why": "Erythema migrans is expanding, usually not itchy or scaly, and follows tick exposure. Missing it delays treatment.",
     "fix": "Ask about the edge, itch, timing and where he walked."
    },
    {
     "dom": "tasks",
     "fail": "Sending serology and waiting to treat.",
     "why": "NICE NG95: diagnose and treat without laboratory testing when erythema migrans is present. Early serology is often negative.",
     "fix": "“With this rash, I treat today, no blood test needed.”"
    },
    {
     "dom": "tasks",
     "fail": "Ruling out Lyme because he does not remember a bite.",
     "why": "Many patients never notice the tick.",
     "fix": "Ask about tick habitat instead."
    },
    {
     "dom": "tasks",
     "fail": "Wrong antibiotic course, or no counselling.",
     "why": "NICE NG95: doxycycline 100 mg twice a day for 21 days first line. Photosensitivity and oesophageal irritation are common avoidable problems (BNF).",
     "fix": "Give the full regimen and how to take it."
    },
    {
     "dom": "rto",
     "fail": "Ignoring or amplifying his fear from online stories.",
     "why": "Unaddressed anxiety undermines trust; catastrophising is inaccurate for early treated disease.",
     "fix": "Ask what he has read, then give the honest, good prognosis."
    },
    {
     "dom": "gs",
     "fail": "A generic “come back if worse”.",
     "why": "The later features of Lyme disease are specific and time-critical, such as carditis and facial palsy.",
     "fix": "Name facial droop, severe headache, palpitations, fainting and joint swelling."
    }
   ]
  }
 },
 "migraine-moh": {
  "stem": {
   "name": "Rowena Page",
   "age": "34-year-old woman",
   "pmh": [
    "Migraine for many years (episodic until recently)"
   ],
   "meds": [
    "Co-codamol — taking most days",
    "Triptan (acute migraine treatment) — taking most days"
   ],
   "allergy": "None recorded",
   "recent": "Headache now nearly every day. Frequent requests for co-codamol and triptan on the repeat record. No headache diary on file.",
   "reason": "Face-to-face. “Nothing touches it — can I have something stronger?”"
  },
  "knowledge": {
   "guideline": "[1] NICE CG150 (headaches in over 12s: diagnosis and management, 2012, updated June 2025) · [2] MHRA Drug Safety Update June 2024 (topiramate: pregnancy prevention programme) · [3] British Association for the Study of Headache (BASH) National headache management system for adults (2019) · [4] UK Medical Eligibility Criteria for Contraceptive Use (CoSRH UKMEC 2025) · [5] BNF monographs for propranolol, amitriptyline and topiramate",
   "summary": "Long-standing migraine that has become near-daily, with co-codamol and a triptan taken on most days, is medication-overuse headache on top of migraine until proved otherwise. The painkillers are now keeping the headache going, so ‘something stronger’ would make it worse. Exclude secondary headache, then withdraw the overused drugs with a warning about the short-term worsening, start a preventer, and review.",
   "points": [
    {
     "h": "Red flags first",
     "t": "NICE CG150 [1] lists features needing further investigation or referral, including: sudden onset reaching maximum within 5 minutes; new neurological deficit or cognitive change; personality change; impaired consciousness; headache with fever; headache triggered by cough, Valsalva, sneeze or exercise; orthostatic headache; symptoms of giant cell arteritis or acute angle-closure glaucoma; head injury in the last 3 months; and a substantial change in the character of the headache. Check blood pressure and fundi."
    },
    {
     "h": "Medication-overuse headache",
     "t": "NICE CG150 [1]: be alert to medication-overuse headache in people with headache on 15 days a month or more who have taken triptans, opioids, ergots or combination analgesics on 10 days a month or more, or paracetamol, aspirin or an NSAID on 15 days a month or more, for 3 months or more. Co-codamol counts as an opioid and a combination analgesic."
    },
    {
     "h": "Withdrawal",
     "t": "NICE CG150 [1]: explain that it is treated by withdrawing the overused medication; advise stopping all overused acute headache drugs for at least 1 month, abruptly rather than gradually; warn that headache is likely to get worse in the short term and that withdrawal symptoms may occur; provide close follow-up; consider specialist referral for people using strong opioids or with relevant comorbidities. Review the diagnosis and management 4–8 weeks after withdrawal starts."
    },
    {
     "h": "Opioids in migraine",
     "t": "NICE CG150 [1]: do not offer ergots or opioids for the acute treatment of migraine. After withdrawal, the acute plan is a triptan with or without an NSAID or paracetamol, limited to fewer than 10 days a month."
    },
    {
     "h": "Prevention",
     "t": "NICE CG150 [1] and BASH [3]: consider a preventer when attacks are frequent or disabling. Options include propranolol, amitriptyline and topiramate; candesartan is used off-label (BASH [3]). Titrate to an effective dose and judge after an adequate trial. CG150 [1] also advises that riboflavin 400 mg once a day may reduce frequency and intensity for some people. Doses per BNF [5]."
    },
    {
     "h": "Topiramate",
     "t": "MHRA Drug Safety Update June 2024 [2]: topiramate is teratogenic and must not be used for migraine prevention in pregnancy, nor in women who could become pregnant unless the pregnancy prevention programme conditions are met. It can reduce the effectiveness of hormonal contraception, so ask about contraception and pregnancy plans before choosing any preventer."
    },
    {
     "h": "Aura and contraception",
     "t": "UKMEC [4]: migraine with aura is UKMEC 4 for combined hormonal contraception at any age. Ask about aura and current contraception at a headache review."
    },
    {
     "h": "When to refer",
     "t": "Refer if red flags, diagnostic doubt, strong-opioid use, failure of withdrawal, or failure of adequate trials of preventers. Specialist-only options include botulinum toxin type A for chronic migraine (NICE TA260) and CGRP monoclonal antibodies after three failed preventers (for example NICE TA764, fremanezumab)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Miss Page, I’m Dr Evans. Come and sit down. What’s been happening?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "I’ve had migraines for years, but now I’ve got a headache nearly every single day and the painkillers aren’t working any more. I’m taking co-codamol most days and my migraine tablets too. Can you give me something stronger? I’m at the end of my tether."
   },
   {
    "who": "dr",
    "text": "That sounds exhausting — a headache nearly every day would wear anyone down. I do want to help you get out of this. Can I ask some questions first, check a few things, and then we’ll work out a plan together?",
    "dom": "gs",
    "why": "Empathy first, then a clear agenda"
   },
   {
    "who": "pt",
    "text": "Please. Anything."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Tell me about the headaches now compared with your usual migraines. Is it the same kind of headache, just more often, or something new?",
    "dom": "tasks",
    "why": "Establishes the change in pattern"
   },
   {
    "who": "pt",
    "text": "The bad ones still feel like migraines. In between it’s a duller headache that’s just always there."
   },
   {
    "who": "dr",
    "text": "How long has it been nearly every day? And roughly how many days a month do you take co-codamol, and how many the migraine tablets?",
    "dom": "tasks",
    "why": "Counts headache days and acute-medication days against the CG150 thresholds"
   },
   {
    "who": "pt",
    "text": "A few months now. Co-codamol most days. The migraine tablets most days as well."
   },
   {
    "who": "dr",
    "text": "Thank you — that helps a lot. Some safety questions I ask everyone. Has any headache come on suddenly, like a thunderclap? Is it worse lying down or in the morning, or with coughing or straining? Any weakness, numbness, changes in vision or speech, fever, or feeling muddled?",
    "dom": "tasks",
    "why": "Screens the CG150 red flags"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. Same pattern, just all the time."
   },
   {
    "who": "dr",
    "text": "Good. I’d like to check your blood pressure, look at the backs of your eyes and do a quick check of your nerves — is that all right?",
    "dom": "tasks",
    "why": "Blood pressure, fundoscopy and neurological examination"
   },
   {
    "who": "pt",
    "text": "Yes, fine."
   },
   {
    "who": "dr",
    "text": "(after examining) Your blood pressure is fine, the backs of your eyes look healthy and your nerves are working normally. That’s reassuring.",
    "dom": "tasks",
    "why": "Shares normal findings to support a primary headache diagnosis"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What have you been thinking is going on? And what worries you most?",
    "dom": "rto",
    "why": "Elicits ideas and concerns"
   },
   {
    "who": "pt",
    "text": "That my migraines have got worse and I need something stronger. I’m scared it’ll never stop. It’s taking over my life."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I can hear how much this is costing you. I’m going to say something that sounds back to front, so bear with me. I think your daily headache is now being caused by the painkillers themselves. It’s called medication-overuse headache. When codeine or migraine tablets are taken on most days for months, the brain becomes more sensitive and a daily headache sets in.",
    "dom": "tasks",
    "why": "Names medication-overuse headache and explains the mechanism simply"
   },
   {
    "who": "pt",
    "text": "So the tablets are making it worse? But they’re the only thing that helps."
   },
   {
    "who": "dr",
    "text": "They give a little relief for a few hours, and then the headache comes back, so you take more. That’s the cycle. Something stronger would deepen it. The way out is to stop the tablets that are being overused. I know that’s frightening to hear when you’re in pain.",
    "dom": "rto",
    "why": "Explains why ‘stronger’ would harm, without dismissing her"
   },
   {
    "who": "pt",
    "text": "(quietly) I really don’t know if I can do that."
   },
   {
    "who": "dr",
    "text": "You won’t be doing it alone. Let me show you what the plan looks like, and you tell me what feels possible.",
    "dom": "rto",
    "why": "Responds to her fear and invites partnership"
   },
   {
    "phase": "Shared plan",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The advice is to stop both the co-codamol and the migraine tablets completely for at least a month — all at once rather than slowly. I must be honest: for a week or two the headache usually gets worse, and you may feel a bit rough, before it gets better. That’s the medicine clearing, not a sign it’s failing.",
    "dom": "tasks",
    "why": "NICE CG150 withdrawal advice with an honest warning about short-term worsening"
   },
   {
    "who": "pt",
    "text": "A worse headache for two weeks? How do I get through that?"
   },
   {
    "who": "dr",
    "text": "We start a daily preventer now so it’s working underneath. Propranolol or amitriptyline are the usual first choices — both reduce how often migraines come. Before we pick, I need to check a few things: any asthma, and your contraception and pregnancy plans, because some preventers aren’t safe in pregnancy. And we’ll keep a headache diary so we can both see progress.",
    "dom": "tasks",
    "why": "Starts prophylaxis, checks contraindications and contraception, uses a diary"
   },
   {
    "who": "pt",
    "text": "Okay. And after the month?"
   },
   {
    "who": "dr",
    "text": "Then we rebuild a proper plan for migraine attacks — a triptan, maybe with an anti-inflammatory, used early, but on fewer than ten days a month. Codeine isn’t a good migraine treatment, so we’ll take it off your repeat. I’ll see you in two weeks to see how you’re coping, and again at around six weeks to review everything.",
    "dom": "tasks",
    "why": "Acute plan within limits; opioid removed; follow-up within the CG150 4–8 week review window"
   },
   {
    "who": "pt",
    "text": "That’s more than I expected. I thought you’d just give me a prescription."
   },
   {
    "phase": "Safety net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Can you tell me back the plan in your own words, so I know I’ve explained it well?",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Stop the co-codamol and migraine tablets for a month. It’ll be worse for a week or two. Start a preventer. Keep a diary. Back in two weeks."
   },
   {
    "who": "dr",
    "text": "Perfect. If you get a sudden, severe headache that peaks within minutes, weakness, numbness, trouble speaking or seeing, fever with a stiff neck, or feel confused, seek urgent help the same day — 999 for the sudden severe one. And if you’re struggling before two weeks, call us.",
    "dom": "gs",
    "why": "Specific red-flag safety net and an open door"
   },
   {
    "who": "pt",
    "text": "Thank you. I actually feel hopeful for once."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her finish the request for ‘something stronger’ and acknowledged the toll first.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored the impact on her life and her fear it will never stop; checked what matters before planning.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up ‘nothing touches it’ and daily use of two acute drugs as the cue to count medication days.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: migraines worse, needs stronger drug. Concern: it will never stop. Expectation: stronger painkiller.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Blood pressure, fundoscopy and neurological examination; headache and medication diary.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Migraine with superimposed medication-overuse headache versus secondary headache; tested with the CG150 red-flag list.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened thunderclap, raised-pressure features, neurological deficit, fever, cough or exertion triggers; normal examination.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Medication-overuse headache: opioid or combination analgesic and triptan on most days for months (CG150 thresholds).",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Abrupt withdrawal of all overused drugs for at least 1 month with warning; preventer started; opioid off repeat; acute plan under 10 days a month.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Checked asthma before propranolol, contraception and pregnancy plans before any preventer (topiramate MHRA 2024).",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review at 2 weeks and within 4–8 weeks of starting withdrawal; teach-back; specific red flags.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Rowena Page",
    "age": "34 years · female",
    "pmh": [
     "Migraine (long-standing)"
    ],
    "meds": [
     "Co-codamol — most days",
     "Triptan — most days"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Frequent co-codamol and triptan requests on repeat record. No headache diary.",
    "reason": "Daily headache. “Can I have something stronger?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "Let her ask for ‘something stronger’ in full. Acknowledge the exhaustion before anything else."
    },
    {
     "t": "1–5",
     "h": "Count and screen",
     "d": "Pattern change; headache days; acute-medication days; CG150 red flags; BP, fundi, neuro exam."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Her idea (stronger drug), her fear (it will never stop), her expectation (a prescription)."
    },
    {
     "t": "6–11",
     "h": "Explain and plan",
     "d": "Name medication-overuse headache; abrupt withdrawal for at least a month; warn of worsening; start a preventer; check contraception; diary."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "Teach-back; red-flag safety net; review at 2 weeks and 4–8 weeks."
    }
   ],
   "wordPics": {
    "fail": "Prescribes a stronger opioid or another triptan; never counts medication days; skips red flags; tells her to ‘cut down’ with no plan or warning; starts topiramate without asking about contraception.",
    "pass": "Excludes red flags, examines, diagnoses medication-overuse headache, advises withdrawal with a warning of short-term worsening, starts a preventer and books follow-up.",
    "exc": "All of that, plus: counts the numbers against the CG150 thresholds; explains the cycle so she agrees rather than submits; knows CG150 says stop abruptly for at least a month and not to use opioids for migraine; checks asthma, contraception and pregnancy plans before choosing a preventer; plans a 2-week check-in and a 4–8 week review; she leaves hopeful."
   },
   "avoid": [
    {
     "dont": "“You’re taking far too many painkillers.”",
     "instead": "“The painkillers have started causing the daily headache — it’s a known trap, not your fault.”",
     "why": "Blame provokes defensiveness; an explanation earns agreement."
    },
    {
     "dont": "“Let’s try tramadol instead.”",
     "instead": "“A stronger painkiller would deepen the cycle. The way out is to stop the overused ones.”",
     "why": "NICE CG150: do not offer opioids for migraine, and escalation worsens medication-overuse headache."
    },
    {
     "dont": "“Just cut down gradually.”",
     "instead": "“The advice is to stop them completely for at least a month, and I’ll support you through it.”",
     "why": "NICE CG150 advises abrupt withdrawal of all overused drugs for at least 1 month, with close follow-up."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Impact of daily headache",
     "t": "Chronic daily headache affects work, sleep and mood. Ask about low mood and how she is coping; amitriptyline may suit if sleep is poor, but treat any depression in its own right."
    },
    {
     "h": "Dependence",
     "t": "Daily codeine for months can cause withdrawal symptoms. Explain this openly and without judgement, and offer more support if stopping proves hard."
    }
   ],
   "legal": [
    {
     "h": "Equality Act 2010",
     "t": "Migraine that has a substantial and long-term effect on day-to-day activities can count as a disability, giving a right to reasonable adjustments at work. A fit note can advise adjustments if work is affected."
    }
   ],
   "professional": [
    {
     "h": "Opioid prescribing",
     "t": "Review repeat opioid prescriptions and remove co-codamol from repeat for migraine (NICE CG150: do not offer opioids for acute migraine). Document the reason and the plan."
    },
    {
     "h": "Teratogenic medicines",
     "t": "MHRA Drug Safety Update June 2024: topiramate for migraine prevention requires the pregnancy prevention programme in anyone who could become pregnant. Record the discussion if it is ever chosen."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "The Migraine Trust and National Migraine Centre offer information and headache diaries; community pharmacists can reinforce the medication-day limits."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Thunderclap onset, new neurological deficit, confusion, fever with neck stiffness — same-day assessment",
     "Headache worse lying down or on waking with vomiting, or triggered by cough or exertion",
     "Substantial change in headache character, or symptoms of GCA or angle-closure glaucoma"
    ],
    "psychosocial": [
     "Impact on work, sleep, mood and daily life",
     "Fear it will never stop; exhaustion",
     "Contraception, pregnancy plans, asthma — shape the preventer choice"
    ],
    "ice": [
     "Idea: migraines have worsened; needs something stronger",
     "Concern: a headache that never stops; being out of control",
     "Expectation: a stronger painkiller today"
    ]
   },
   "diagnosis": "Medication-overuse headache superimposed on long-standing migraine: near-daily headache for months with co-codamol and triptan on most days (above the NICE CG150 threshold of 10 days a month). No red flags; examination normal.",
   "diagnosisLay": "“The painkillers and migraine tablets, taken on most days, have started causing a daily headache of their own. Stopping them breaks the cycle — it gets worse for a short time, then much better.”",
   "management": {
    "reflectIce": "“You came for something stronger because you’re desperate. I understand — but stronger would keep you stuck, and there is a way out.”",
    "psychosocial": "Support her through withdrawal with early contact; ask about mood and work; involve her in choosing the preventer.",
    "sharedPlan": [
     "Stop co-codamol and triptan abruptly for at least 1 month; warn of 1–2 weeks of worsening (NICE CG150)",
     "Start a preventer (propranolol or amitriptyline first, after checking asthma, contraception and pregnancy plans); headache diary",
     "After withdrawal: triptan with or without NSAID, early in an attack, on fewer than 10 days a month; no opioids",
     "Review at 2 weeks and again 4–8 weeks after withdrawal starts"
    ],
    "safetyNet": [
     "Sudden severe headache, weakness, speech or vision change, fever with stiff neck, confusion — urgent same-day help, 999 for thunderclap",
     "Call before the review if she cannot cope with withdrawal"
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
    "s": "Medication-overuse headache · prevention · referral",
    "href": "management/migraine.html"
   },
   {
    "ic": "🧭",
    "t": "Headache algorithm",
    "s": "Red flags and secondary headache",
    "href": "algorithms/headache.html"
   }
  ],
  "pitfalls": {
   "intro": "This station rewards the doctor who turns down the request for a stronger drug and still leaves the patient feeling helped. It is failed by prescribing, by preaching, or by a withdrawal plan with no support.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing a stronger opioid or an extra triptan.",
     "why": "Escalation deepens medication-overuse headache; NICE CG150 advises against opioids for migraine.",
     "fix": "Diagnose medication-overuse headache and plan withdrawal."
    },
    {
     "dom": "tasks",
     "fail": "Diagnosing medication-overuse headache without a red-flag screen or examination.",
     "why": "Secondary headache must be excluded first.",
     "fix": "Run the CG150 red-flag questions and check BP, fundi and neurology."
    },
    {
     "dom": "tasks",
     "fail": "“Try to cut down the co-codamol slowly.”",
     "why": "NICE CG150 advises stopping all overused drugs abruptly for at least a month; specialist referral is for strong opioids.",
     "fix": "Stop both overused drugs, warn about worsening, and follow up closely."
    },
    {
     "dom": "tasks",
     "fail": "Starting topiramate with no contraception or pregnancy discussion.",
     "why": "MHRA June 2024: topiramate needs the pregnancy prevention programme and reduces hormonal contraceptive effect.",
     "fix": "Ask first; propranolol or amitriptyline are usual first choices."
    },
    {
     "dom": "rto",
     "fail": "Telling her she is ‘addicted’ or ‘taking far too many tablets’.",
     "why": "Blame makes her defensive and less likely to succeed.",
     "fix": "Explain the cycle as a common trap and offer support."
    },
    {
     "dom": "gs",
     "fail": "No warning that the headache will worsen before it improves.",
     "why": "Without the warning she will restart the tablets in the first week.",
     "fix": "Warn clearly and book an early check-in."
    },
    {
     "dom": "gs",
     "fail": "No follow-up date.",
     "why": "CG150 asks for review 4–8 weeks after withdrawal starts.",
     "fix": "Book a 2-week contact and a 4–8 week review."
    }
   ]
  }
 },
 "motor-neurone-disease": {
  "stem": {
   "name": "Douglas Pereira",
   "age": "63-year-old man",
   "pmh": [
    "No past history recorded in the case"
   ],
   "meds": [
    "Not specified in the case: check the repeat record"
   ],
   "allergy": "None recorded",
   "recent": "Several months of slurred speech, some difficulty swallowing, a weak and wasted right hand with twitching, and tripping. No pain, no numbness.",
   "reason": "“Something’s not right, doctor. What’s going on?”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG42 Motor neurone disease: assessment and management (2016, updated 2019) · [2] NICE TA20 Riluzole for motor neurone disease (2001) · [3] DVLA Assessing fitness to drive: a guide for medical professionals (neurological disorders) · [4] GMC Decision making and consent (2020)",
   "summary": "Progressive, painless, purely motor weakness with wasting, fasciculations and bulbar symptoms is MND until a neurologist says otherwise. Examine for mixed upper and lower motor neurone signs with normal sensation, refer without delay naming the possible diagnosis, and be honest if he asks, without giving a firm diagnosis.",
   "points": [
    {
     "h": "The pattern",
     "t": "Progressive painless weakness, muscle wasting, fasciculations, slurred speech, swallowing difficulty, foot drop or tripping, with no sensory loss. Eye movements and sphincters are usually spared early. A mix of lower motor neurone signs (wasting, fasciculations, weakness) and upper motor neurone signs (brisk reflexes, spasticity, upgoing plantars) across different regions is characteristic."
    },
    {
     "h": "Mimics",
     "t": "Cervical myelopathy or radiculopathy (usually with sensory signs or neck pain), multifocal motor neuropathy, myasthenia gravis (fatigable, no wasting or fasciculations), stroke (sudden onset), thyroid disease, and benign fasciculations (no weakness or wasting). The neurologist confirms the diagnosis, usually with neurophysiology and tests to exclude mimics."
    },
    {
     "h": "Referral",
     "t": "NG42 [1]: if you suspect MND, refer the person without delay, and specify the possible diagnosis in the referral letter. Contact the consultant neurologist directly if you think the person needs to be seen urgently. Routine blood tests can be done at the same time but should not delay the referral."
    },
    {
     "h": "Who gives the diagnosis",
     "t": "NG42 [1]: information about the diagnosis, prognosis and management should be given by a consultant neurologist with experience of MND, unless it is clinically necessary to give it urgently. Provide information and support throughout the diagnostic process, especially during uncertainty."
    },
    {
     "h": "After diagnosis",
     "t": "Care is coordinated by a specialist multidisciplinary team: respiratory assessment and non-invasive ventilation, nutrition and gastrostomy decisions, speech and language therapy and communication aids, physiotherapy, occupational therapy, and palliative care with advance care planning [1]. Riluzole is recommended by NICE TA20 [2] and started by a specialist."
    },
    {
     "h": "Safety now",
     "t": "Ask about choking, chest infections, weight loss, breathlessness lying flat, morning headaches and daytime sleepiness, which suggest bulbar or respiratory involvement needing faster action. Falls and hand weakness affect safety at home and in the car. Once MND is diagnosed, he must tell the DVLA [3]."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Pereira, I’m Dr Ahmed. Come and have a seat. What’s been happening?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "Something’s not right, doctor. Over the last few months my speech has got a bit slurred, people notice. My right hand’s gone weak and a bit wasted, with this odd twitching under the skin. I keep tripping too. The strange thing is there’s no pain at all and I can feel everything normally. What’s going on?"
   },
   {
    "who": "dr",
    "text": "Thank you for explaining it so clearly. You’ve noticed a lot of changes, and I can hear it’s unsettling. I’d like to ask a few questions and then examine you, and after that I’ll tell you honestly what I think. Is that okay?",
    "dom": "gs",
    "why": "Structures the consultation and promises honesty"
   },
   {
    "who": "pt",
    "text": "Yes, please."
   },
   {
    "phase": "History",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Has it come on gradually, or were there sudden changes at any point?",
    "dom": "tasks",
    "why": "Distinguishes progressive from sudden (stroke)"
   },
   {
    "who": "pt",
    "text": "Gradually. Bit by bit over months."
   },
   {
    "who": "dr",
    "text": "Does the weakness get worse as the day goes on or with repeated use, and better with rest? Any double vision or drooping eyelids?",
    "dom": "tasks",
    "why": "Screens for myasthenia"
   },
   {
    "who": "pt",
    "text": "No, it’s the same all day. My eyes are fine."
   },
   {
    "who": "dr",
    "text": "Any neck pain, or pins and needles or numbness anywhere? Any problems with your bladder or bowels?",
    "dom": "tasks",
    "why": "Screens for myelopathy and sphincter involvement"
   },
   {
    "who": "pt",
    "text": "None of that."
   },
   {
    "who": "dr",
    "text": "You mentioned swallowing. Do you cough or choke when you eat or drink?",
    "dom": "tasks",
    "why": "Assesses bulbar safety"
   },
   {
    "who": "pt",
    "text": "Sometimes with drinks, I have to be careful."
   },
   {
    "who": "dr",
    "text": "Have you lost weight, had chest infections, or felt breathless lying flat, or woken with headaches?",
    "dom": "tasks",
    "why": "Screens for nutritional and respiratory involvement"
   },
   {
    "who": "pt",
    "text": "I haven’t weighed myself. Breathing seems fine."
   },
   {
    "phase": "Examination",
    "clock": "4–6 min",
    "who": "dr",
    "text": "I’m going to examine your arms and legs, your speech and tongue, and your sensation. Please tell me if anything is uncomfortable.",
    "dom": "tasks",
    "why": "Explains a focused neurological examination"
   },
   {
    "who": "dr",
    "text": "The muscles in your right hand are thinner, and I can see the twitching you described. I’m testing your strength, tone and reflexes in all four limbs and looking at your tongue. Your sensation is normal everywhere I’ve tested.",
    "dom": "tasks",
    "why": "Looks for combined UMN and LMN signs; confirms intact sensation"
   },
   {
    "who": "pt",
    "text": "Is that good or bad?"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "6–7 min",
    "who": "dr",
    "text": "Before I answer, what have you been thinking it might be?",
    "dom": "rto",
    "why": "Elicits ideas before explaining"
   },
   {
    "who": "pt",
    "text": "I’ve been worried it’s something serious. Weakness with no pain just seems odd. It’s been on my mind constantly."
   },
   {
    "who": "dr",
    "text": "I’m sorry you’ve been carrying that on your own. What were you hoping to get from today?",
    "dom": "rto",
    "why": "Acknowledges worry; elicits expectation"
   },
   {
    "who": "pt",
    "text": "An explanation. Even if it’s bad news."
   },
   {
    "phase": "Honest explanation",
    "clock": "7–10 min",
    "who": "dr",
    "text": "I’ll be honest with you. The pattern you have, weakness and thinning of muscles with twitching, slurred speech, and no pain or numbness, points to a problem with the nerves that control the muscles, rather than a trapped nerve or anything in the joints. It isn’t something I can diagnose here. It needs a neurologist, and I want you seen urgently.",
    "dom": "tasks",
    "why": "Honest about significance; no premature label; urgent referral"
   },
   {
    "who": "pt",
    "text": "Are you talking about something like motor neurone disease?"
   },
   {
    "who": "dr",
    "text": "I won’t dodge that. Motor neurone disease is one of the conditions the neurologist will be looking for, and I’ll say so in my letter. There are other conditions that can look like this, and some are treatable, so I can’t tell you it is MND. What I can promise is that you’ll be seen quickly and not left waiting in the dark.",
    "dom": "rto",
    "why": "Answers a direct question honestly without confirming an unconfirmed diagnosis"
   },
   {
    "who": "pt",
    "text": "That’s a lot to take in."
   },
   {
    "who": "dr",
    "text": "It is. Take a moment. Would you like me to go over anything again, or is there someone you’d like with you when you see the specialist?",
    "dom": "rto",
    "why": "Allows silence; offers support"
   },
   {
    "who": "pt",
    "text": "I’ll bring someone. What happens next?"
   },
   {
    "phase": "Plan",
    "clock": "10–11 min",
    "who": "dr",
    "text": "I’ll refer you to the neurologist today and phone them to ask for an urgent appointment. They’ll do nerve tests and other checks. Whatever it turns out to be, early specialist care means treatment and support start sooner. In the meantime, take small sips and sit upright to drink, and with the tripping and your hand, please don’t drive until the specialist has seen you and advised.",
    "dom": "tasks",
    "why": "Urgent neurology with direct contact (NG42); practical safety"
   },
   {
    "who": "pt",
    "text": "Okay. I’ll get lifts."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you start choking on food, get chest infections, feel short of breath, or things get worse quickly, contact us straight away. Book to see me after the neurology appointment and we’ll go through what they found together. Can you tell me what we’ve agreed?",
    "dom": "gs",
    "why": "Specific safety-net, continuity and teach-back"
   },
   {
    "who": "pt",
    "text": "Urgent neurologist, you’ll phone them. Careful with drinks, no driving for now, and come back if swallowing or breathing get worse."
   },
   {
    "who": "dr",
    "text": "Exactly. I’m here if anything comes up before then.",
    "dom": "rto",
    "why": "Ongoing support"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let him give the full story; acknowledged the uncertainty he has been living with.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Who can come with him, driving, worry, practical support.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up swallowing and “no pain at all” as significant cues and explored them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (something serious), concern (a serious cause), expectation (an explanation, even bad news).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Focused neurological examination: wasting, fasciculations, tone, reflexes, plantars, tongue, speech and sensation.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "MND versus cervical myelopathy, myasthenia, multifocal motor neuropathy, stroke and benign fasciculations.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for choking, weight loss, chest infections and respiratory symptoms.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated that the pattern is serious and neurological without giving a diagnosis he cannot confirm.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Referral without delay, naming the possible diagnosis, with direct contact with the neurologist (NG42).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Swallow safety advice and driving advice; bloods not allowed to delay referral.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Clear triggers for faster review; follow-up after neurology; support offered.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Douglas Pereira",
    "age": "63 years · male",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "Check repeat record"
    ],
    "allergy": "None recorded",
    "recent": "Months of slurred speech, swallowing difficulty, weak wasted right hand with twitching, tripping. No pain or numbness.",
    "reason": "“Something’s not right. What’s going on?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Let him list all the symptoms; promise honesty."
    },
    {
     "t": "1–4",
     "h": "Discriminating history",
     "d": "Gradual versus sudden, fatigability, eyes, sensory and sphincter symptoms, choking, weight, breathing."
    },
    {
     "t": "4–7",
     "h": "Examine and ICE",
     "d": "Mixed UMN and LMN signs, tongue, sensation. What he fears and wants."
    },
    {
     "t": "7–10",
     "h": "Honest explanation",
     "d": "A serious nerve problem needing urgent neurology; if asked about MND, say it is being looked for, without confirming."
    },
    {
     "t": "10–12",
     "h": "Plan and close",
     "d": "Referral today plus phone call, swallow safety, driving, safety-net, follow-up after neurology."
    }
   ],
   "wordPics": {
    "fail": "Reassures that it is probably a trapped nerve or age; routine referral or watch and wait; or announces “you have MND” as fact; avoids the question when he asks directly.",
    "pass": "Recognises the progressive painless motor pattern, examines for UMN and LMN signs, refers urgently to neurology, and is honest that it is serious.",
    "exc": "All of the above, plus: rules out mimics in the history; asks about swallow and breathing; answers the direct question honestly without confirming; names the possible diagnosis in the referral and phones the neurologist; allows silence; gives swallow and driving advice; arranges follow-up."
   },
   "avoid": [
    {
     "dont": "“It’s probably just a trapped nerve in your neck.”",
     "instead": "“The weakness with no pain or numbness needs a neurologist to look at it urgently.”",
     "why": "False reassurance delays diagnosis and support."
    },
    {
     "dont": "“I’m afraid you have motor neurone disease.”",
     "instead": "“MND is one of the things the neurologist will be looking for. I can’t confirm it here.”",
     "why": "NG42: the diagnosis should be given by a neurologist, and mimics must be excluded."
    },
    {
     "dont": "“Let’s not worry about labels today.”",
     "instead": "“I won’t dodge your question.”",
     "why": "Evasion when asked directly breaks trust."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Support through uncertainty",
     "t": "He has been worrying on his own. Offer to include someone he trusts, and give him a way to reach the practice before the appointment."
    },
    {
     "h": "Daily function",
     "t": "Hand weakness and tripping affect work, driving and safety at home; occupational therapy and physiotherapy will be part of specialist care."
    }
   ],
   "legal": [
    {
     "h": "Driving",
     "t": "Once MND is diagnosed, he must tell the DVLA; Group 1 drivers may keep driving if safe control is maintained, with licences reviewed periodically (DVLA). Until assessed, advise him not to drive if weakness affects safe control."
    },
    {
     "h": "Advance care planning",
     "t": "If MND is confirmed, advance decisions to refuse treatment and lasting power of attorney (Mental Capacity Act 2005) should be discussed early, while he can communicate easily."
    }
   ],
   "professional": [
    {
     "h": "Honesty and consent",
     "t": "GMC Decision making and consent (2020) supports sharing information patients want. Answer direct questions honestly, and let the neurologist confirm the diagnosis (NG42)."
    },
    {
     "h": "Continuity",
     "t": "Offer a follow-up after the neurology appointment, and code the suspected diagnosis so colleagues know the context."
    }
   ],
   "community": [
    {
     "h": "Support organisations",
     "t": "The MND Association offers information and support for people being investigated, as well as after diagnosis."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Choking on food or drink, weight loss, chest infections",
     "Breathlessness lying flat, morning headaches, daytime sleepiness",
     "Rapid progression over weeks",
     "Falls with injury"
    ],
    "psychosocial": [
     "Worry and how he is coping",
     "Who can support him",
     "Work, driving and safety at home"
    ],
    "ice": [
     "Idea: something serious, since weakness without pain seems odd",
     "Concern: fear of a serious cause",
     "Expectation: an explanation, even if it is bad news"
    ]
   },
   "diagnosis": "“The weakness, muscle thinning and twitching, with slurred speech and no pain or numbness, point to a problem with the nerves that control the muscles. It needs a neurologist urgently to find the cause.”",
   "diagnosisLay": "“Think of the nerves to your muscles as electrical wiring from the brain and spinal cord. The wiring for movement seems affected, while the wiring for feeling is working normally. A specialist needs to test the wiring to find out why.”",
   "management": {
    "reflectIce": "“You wanted an honest explanation. This is serious enough that I want a specialist to see you quickly, and I’ll tell them exactly what we’re looking for.”",
    "psychosocial": "Offer support, invite someone to the appointment, and advise on driving and swallowing safety.",
    "sharedPlan": [
     "Neurology referral today naming the possible diagnosis, plus a phone call for urgency (NG42)",
     "Routine bloods if needed, without delaying referral",
     "Swallow safety: upright, small sips",
     "No driving until assessed"
    ],
    "safetyNet": [
     "Contact the practice at once for choking, chest infection, breathlessness or rapid worsening",
     "Follow-up after neurology"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Leg weakness pathway",
    "s": "Visual algorithm · UMN or LMN",
    "href": "algorithms/leg-weakness.html"
   },
   {
    "ic": "🗺️",
    "t": "Dysphagia pathway",
    "s": "Bulbar and oropharyngeal causes",
    "href": "algorithms/dysphagia.html"
   },
   {
    "ic": "📋",
    "t": "Palliative care",
    "s": "Case walkthrough · advance care planning",
    "href": "../cases/palliative-care.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA guide",
    "s": "Neurological conditions and driving",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you recognise a red-flag pattern without the usual cancer signs, and whether you can be honest under uncertainty. Candidates fail by reassuring, by delaying, or by announcing a diagnosis they cannot confirm.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Attributing the symptoms to a trapped nerve, age or anxiety.",
     "why": "Progressive painless motor weakness with fasciculations and bulbar symptoms is a red flag.",
     "fix": "Name the pattern and refer urgently."
    },
    {
     "dom": "tasks",
     "fail": "Ordering tests and reviewing in a month before referring.",
     "why": "NG42: refer without delay; tests must not hold up referral.",
     "fix": "Refer today and phone the neurologist."
    },
    {
     "dom": "tasks",
     "fail": "Skipping the swallow and breathing questions.",
     "why": "Choking and respiratory weakness need faster action.",
     "fix": "Ask about choking, weight, chest infections, orthopnoea and morning headaches."
    },
    {
     "dom": "rto",
     "fail": "Dodging the direct question about MND.",
     "why": "Evasion breaks trust and increases fear.",
     "fix": "“It’s one of the things being looked for. I can’t confirm it, and you’ll be seen quickly.”"
    },
    {
     "dom": "rto",
     "fail": "Stating “you have MND”.",
     "why": "NG42: the diagnosis should come from a neurologist, and mimics exist.",
     "fix": "Be honest about seriousness, not certain about the label."
    },
    {
     "dom": "gs",
     "fail": "No driving or safety advice.",
     "why": "Hand weakness and tripping affect safe driving and falls.",
     "fix": "Advise no driving until assessed, and DVLA notification if diagnosed."
    }
   ]
  }
 },
 "normal-pressure-hydrocephalus": {
  "stem": {
   "name": "Harold Friske",
   "age": "76-year-old man",
   "pmh": [
    "No dementia diagnosis recorded",
    "Falls — reported by family (not previously assessed)"
   ],
   "meds": [
    "Check repeat list — review for sedatives and anticholinergics"
   ],
   "allergy": "None recorded",
   "recent": "No recent bloods, cognitive assessment or imaging on file.",
   "reason": "Video consultation with his son. Months of unsteady shuffling walk with falls, forgetfulness and slowing, and new urinary incontinence. Family think it is ‘just dementia’."
  },
  "knowledge": {
   "guideline": "[1] NICE NG97 (dementia: assessment, management and support for people living with dementia and their carers, 2018) · [2] NICE NG249 (falls: assessment and prevention in older people and in people 50 and over at higher risk, 2025) · [3] NICE CG97 (lower urinary tract symptoms in men, 2010, updated 2015) · [4] NICE NG150 (supporting adult carers, 2020) · [5] Japanese Society of Normal Pressure Hydrocephalus, guidelines for idiopathic normal pressure hydrocephalus, 3rd edition (2021) (international) · [6] Mental Capacity Act 2005 · [7] Care Act 2014",
   "summary": "A 76-year-old whose walking went first — shuffling, feet ‘stuck to the floor’, falls — followed by slowed thinking and urinary incontinence has the classic triad of normal-pressure hydrocephalus. It is uncommon but potentially treatable, so ‘just dementia’ must not be accepted. Do the usual reversible-cause work-up, see him face to face, refer for imaging and specialist assessment, and support the family while this happens.",
   "points": [
    {
     "h": "The triad",
     "t": "Gait disturbance, cognitive impairment and urinary urgency or incontinence. Gait usually comes first and dominates: slow, short steps, wide base, feet that seem stuck to the floor, poor turning and falls [5]. When walking leads the story, think beyond Alzheimer’s disease."
    },
    {
     "h": "Why it matters",
     "t": "Selected patients improve after CSF shunting, with gait responding best and cognition least. Suitability is decided by specialists, often after a CSF tap test [5]. Not all improve, and other pathology often coexists — say so honestly."
    },
    {
     "h": "Reversible-cause work-up",
     "t": "NICE NG97 [1]: take a history from the person and someone who knows them; review medicines that may impair cognition (anticholinergic burden, sedatives); bloods — FBC, ESR or CRP, U&E, calcium, HbA1c, LFTs, TFTs, B12 and folate; urine testing if delirium is possible. Screen for depression and for delirium from infection."
    },
    {
     "h": "Imaging",
     "t": "NICE NG97 [1]: offer structural imaging to rule out reversible causes of cognitive decline and to help with subtype diagnosis. In normal-pressure hydrocephalus it shows ventricular enlargement out of proportion to atrophy [5]. Route per local pathway — neurology or the memory service."
    },
    {
     "h": "Falls",
     "t": "NICE NG249 [2]: ask about falls; offer a comprehensive multifactorial assessment when criteria are met (for example injury, frailty or being unable to get up); use gait, balance and mobility tests rather than prediction tools; review medicines; offer strength and balance work."
    },
    {
     "h": "Continence in an older man",
     "t": "NICE CG97 [3]: assess lower urinary tract symptoms — urine dipstick, frequency-volume chart, examination including abdomen and prostate, and check for retention. Overflow from prostatic enlargement and UTI are common mimics of ‘NPH incontinence’. Refer to the continence service for containment products meanwhile."
    },
    {
     "h": "Capacity and the carer",
     "t": "Speak to Mr Friske directly and ask his permission before discussing him with his son; presume capacity unless assessment shows otherwise (Mental Capacity Act 2005 [6]). Offer the son a carer’s assessment (Care Act 2014 [7]) and information and support (NICE NG150 [4])."
    },
    {
     "h": "Remote limits",
     "t": "On video you can watch him walk and talk, but a neurological examination, lying and standing blood pressure, a cognitive assessment and a continence examination need a face-to-face appointment or home visit."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Patel. Can I check who I’m speaking to? … Mr Friske, it’s good to see you — are you happy for your son to be with you and to talk about your health today?",
    "dom": "rto",
    "why": "Addresses the patient first and seeks his consent for the son to share"
   },
   {
    "who": "pt",
    "text": "(Mr Friske) Yes, that’s fine."
   },
   {
    "who": "pt",
    "text": "(Son) Honestly, we think Dad’s just got dementia like Mum did — he’s forgetful and slow. But what’s really changed is his walking: he’s gone really unsteady, shuffling like his feet are stuck to the floor, and he’s had a couple of falls. And now — it’s upsetting — he’s started wetting himself. The family keep saying it’s just old age. Is there any point even looking into it?"
   },
   {
    "who": "dr",
    "text": "Thank you both. There is a point, and I’ll explain why. First, can I ask some questions — Mr Friske, some to you and some to your son?",
    "dom": "gs",
    "why": "Answers the headline question briefly and sets an inclusive agenda"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Mr Friske, how do you find your walking?",
    "dom": "rto",
    "why": "Engages the patient directly"
   },
   {
    "who": "pt",
    "text": "(Mr Friske) My feet don’t want to go. I have to think about every step."
   },
   {
    "who": "dr",
    "text": "(to son) Which came first — the walking, the memory, or the wetting? And over how long?",
    "dom": "tasks",
    "why": "Establishes that gait led, and the time course over months"
   },
   {
    "who": "pt",
    "text": "(Son) The walking, definitely. Over months. The memory and the accidents came after."
   },
   {
    "who": "dr",
    "text": "Could you both stand up and let me watch Mr Friske walk across the room and turn, if it’s safe with someone beside him? … Thank you. Those are short, slow steps with his feet close to the floor, and turning looks hard.",
    "dom": "tasks",
    "why": "Uses video to observe gait safely; describes what is seen without over-claiming"
   },
   {
    "who": "dr",
    "text": "Has anything changed suddenly — a sudden turn for the worse, being very muddled one day and better the next, a fever or burning when passing water? Did he hit his head in the falls? Any tremor?",
    "dom": "tasks",
    "why": "Screens for delirium, UTI, subdural haematoma after falls and parkinsonism"
   },
   {
    "who": "pt",
    "text": "(Son) No, it’s been gradual. No tremor that I’ve seen."
   },
   {
    "who": "dr",
    "text": "With the waterworks, does it come on as a sudden rush that he can’t hold, or is he dribbling all the time? Is he passing water often or feeling he hasn’t emptied?",
    "dom": "tasks",
    "why": "Distinguishes urgency from overflow or retention"
   },
   {
    "who": "pt",
    "text": "(Mr Friske) Hard to say. I just don’t get there in time."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "(to son) You asked if there’s any point. What worries you most at the moment?",
    "dom": "rto",
    "why": "Explores the fatalism and the carer’s worry"
   },
   {
    "who": "pt",
    "text": "(Son) That he’ll fall and break something. And the wetting — it’s undignified for him. We just assumed nothing could be done."
   },
   {
    "who": "dr",
    "text": "Mr Friske, how do you feel about all this?",
    "dom": "rto",
    "why": "Keeps the patient at the centre"
   },
   {
    "who": "pt",
    "text": "(Mr Friske) Fed up. I don’t want to be a nuisance."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "You’re not a nuisance at all. Here’s why this is worth looking into. The combination you describe — the walking going first and badly, then the memory, then the bladder — can be caused by a build-up of fluid in the brain called normal-pressure hydrocephalus. Unlike most types of dementia, it can sometimes be improved, especially the walking.",
    "dom": "tasks",
    "why": "Names the NPH triad as potentially treatable and challenges ‘just dementia’"
   },
   {
    "who": "pt",
    "text": "(Son) So it might not be dementia at all?"
   },
   {
    "who": "dr",
    "text": "It might not, or there might be more than one thing going on. I want to be honest: not everyone with this improves. But it would be wrong not to look, when there’s a real chance of helping.",
    "dom": "rto",
    "why": "Balances hope with realistic expectations"
   },
   {
    "phase": "Shared plan",
    "clock": "8–11 min",
    "who": "dr",
    "text": "So, the plan. I’d like to see you in person, Mr Friske — at the surgery or at home — to examine your nerves and balance, check your blood pressure lying and standing, test your urine, check your bladder is emptying and your prostate, and do some memory questions. I’ll also go through your medicines, as some can affect memory and balance.",
    "dom": "tasks",
    "why": "Face-to-face examination, continence assessment and medication review"
   },
   {
    "who": "pt",
    "text": "(Son) We can do that."
   },
   {
    "who": "dr",
    "text": "I’ll arrange blood tests for vitamins, thyroid, calcium, kidneys and sugar, which can cause similar problems. And I’ll refer you for a brain scan and a specialist opinion. If it is this condition, the specialist may test whether draining a little fluid helps, and some people then have a small operation to drain it permanently.",
    "dom": "tasks",
    "why": "NG97 reversible-cause bloods, imaging and specialist referral"
   },
   {
    "who": "pt",
    "text": "(Mr Friske) An operation? At my age?"
   },
   {
    "who": "dr",
    "text": "It would be your decision, with the specialist, and only if tests suggest it would help. Nothing is decided today. Meanwhile, I’ll refer you to the falls team for balance work and home safety, and to the continence service for practical help. (to son) And how are you and the family coping? You can have a carer’s assessment from the council, which can bring more support.",
    "dom": "tasks",
    "why": "Interim falls and continence support, patient autonomy, carer’s assessment"
   },
   {
    "who": "pt",
    "text": "(Son) That would help. It’s been a lot."
   },
   {
    "phase": "Safety net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If he has a fall with a head injury, especially if he becomes drowsy, has a headache or is sick, or if he becomes suddenly much more confused, call 111 or 999 the same day. Could one of you tell me the plan?",
    "dom": "gs",
    "why": "Specific safety net for head injury and acute confusion; teach-back"
   },
   {
    "who": "pt",
    "text": "(Son) You see Dad in person, bloods, a brain scan and specialist, falls team, continence help, carer’s assessment. Call if he falls and hits his head or gets suddenly worse."
   },
   {
    "who": "dr",
    "text": "That’s it exactly. I’ll book the visit this week and review everything once the results are in. Thank you for bringing him — you were right to ask.",
    "dom": "gs",
    "why": "Defined follow-up; validates the son"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Addressed Mr Friske first, gained consent for the son; let the son tell the story in full.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored falls impact, dignity, family fatalism and carer strain; kept Mr Friske in the conversation.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up ‘the walking changed first’ and ‘is there any point?’ as the diagnostic and emotional cues.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: just dementia or old age. Concern: falls, loss of dignity. Expectation: nothing can be done.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Observed gait on video; arranged face-to-face neuro, lying/standing BP, cognition, urine dip, bladder emptying, prostate; NG97 bloods.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "NPH versus Alzheimer’s, vascular disease, parkinsonism, depression, delirium, UTI, overflow incontinence, subdural after falls.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about sudden change, head injury in falls and infection; knew when same-day assessment was needed.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Probable NPH triad with gait-led onset; potentially reversible; coexisting pathology possible.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Brain imaging and specialist referral; medication review; falls service (NICE NG249); continence service; realistic shunt information.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Considered prostate, UTI and medicines as contributors; carer’s assessment (Care Act 2014).",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Head injury and acute confusion safety net; face-to-face visit this week; results review; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Harold Friske",
    "age": "76 years · male",
    "pmh": [
     "No dementia diagnosis",
     "Falls (family report)"
    ],
    "meds": [
     "See repeat list"
    ],
    "allergy": "None recorded",
    "recent": "⚠ No bloods, cognitive test or imaging on file.",
    "reason": "Video call with son. Unsteady shuffling walk, falls, forgetfulness, new incontinence."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and consent",
     "d": "Speak to Mr Friske first; confirm he is happy for his son to join; let the son finish."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Which came first; time course; watch him walk on video; sudden change, head injury, infection, tremor; urgency versus overflow."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Son: falls, dignity, ‘any point?’. Patient: ‘don’t want to be a nuisance’."
    },
    {
     "t": "6–11",
     "h": "Explain and plan",
     "d": "NPH triad as potentially treatable; honest expectations; face-to-face exam; NG97 bloods; imaging and specialist; falls, continence, carer support."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "Head injury and acute confusion safety net; teach-back; visit this week."
    }
   ],
   "wordPics": {
    "fail": "Agrees it is ‘just dementia’ or old age; refers to the memory clinic without noticing that gait came first; talks only to the son; claims to examine over video; no falls or continence help; uses a flippant mnemonic in front of the family.",
    "pass": "Recognises the triad, explains it may be treatable, arranges bloods, examination, imaging and specialist referral, and offers falls and continence support.",
    "exc": "All of that, plus: establishes that walking came first; engages Mr Friske directly and seeks his consent; screens for delirium, UTI, overflow and subdural; is honest that not all improve; leaves any operation decision with him; offers the son a carer’s assessment; teach-back; the family leave with hope and a plan."
   },
   "avoid": [
    {
     "dont": "“At 76, some of this is just ageing.”",
     "instead": "“This particular pattern can have a treatable cause, so it’s worth looking into.”",
     "why": "Accepting the fatalistic framing loses a potentially reversible diagnosis."
    },
    {
     "dont": "“It’s the wet, wobbly and wacky triad.”",
     "instead": "“Walking, memory and bladder changes together can have one cause.”",
     "why": "A student mnemonic is disrespectful when spoken to a patient and his family."
    },
    {
     "dont": "“An operation will sort this out.”",
     "instead": "“Some people improve after treatment, especially their walking — not everyone does.”",
     "why": "Over-promising damages trust and ignores coexisting pathology."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Dignity and incontinence",
     "t": "Incontinence is often the hardest symptom for families and the reason care arrangements break down. Practical help from the continence service improves dignity quickly."
    },
    {
     "h": "Family history of dementia",
     "t": "The family’s earlier experience of dementia (‘like Mum did’) may shape their fatalism. Acknowledge it without assuming the same diagnosis."
    }
   ],
   "legal": [
    {
     "h": "Mental Capacity Act 2005",
     "t": "Presume capacity; involve him in every decision, including any referral or future surgery. Assess capacity for a specific decision only if there is doubt. Suggest he considers lasting power of attorney while he can."
    },
    {
     "h": "Care Act 2014",
     "t": "His son is entitled to a carer’s assessment from the local authority; Mr Friske may be entitled to a needs assessment."
    }
   ],
   "professional": [
    {
     "h": "Confidentiality",
     "t": "Seek his agreement before discussing him with his son (GMC Confidentiality, 2017). Talk to him, not about him."
    },
    {
     "h": "Driving",
     "t": "If he drives, a condition affecting cognition or mobility may need DVLA notification (DVLA Assessing fitness to drive). Ask at the face-to-face review."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Community falls service, continence service, local authority adult social care, Carers UK, and Hydrocephalus charity information (Shine) for patients and families."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Fall with head injury, then drowsiness, headache or vomiting — possible subdural: same-day assessment",
     "Sudden or fluctuating confusion — delirium (infection, drugs, retention)",
     "Urinary retention or overflow; fever or dysuria"
    ],
    "psychosocial": [
     "Family fatalism shaped by earlier experience of dementia (‘like Mum did’)",
     "Dignity, falls fear, carer strain",
     "His own wishes and capacity"
    ],
    "ice": [
     "Idea (family): just dementia or old age",
     "Concern: falls and the distress of incontinence",
     "Expectation: nothing can be done"
    ]
   },
   "diagnosis": "Probable normal-pressure hydrocephalus: gait-led triad over months (magnetic, shuffling gait with falls; cognitive slowing; urinary incontinence) in a 76-year-old. Differential and contributors: Alzheimer’s or vascular dementia, parkinsonism, depression, delirium or UTI, overflow from prostatic enlargement, medicines, subdural haematoma after falls.",
   "diagnosisLay": "“Sometimes fluid builds up inside the brain and presses on the areas that control walking, the bladder and thinking. A scan can show it, and some people improve with treatment — especially their walking.”",
   "management": {
    "reflectIce": "“You thought nothing could be done. This pattern is worth looking into, because some of it may be treatable.”",
    "psychosocial": "Engage Mr Friske directly; respect his decisions; offer the son a carer’s assessment and support.",
    "sharedPlan": [
     "Face-to-face review this week: neuro exam, gait, lying/standing BP, cognition, urine dip, bladder emptying, prostate, medication review",
     "NICE NG97 bloods: FBC, ESR or CRP, U&E, calcium, HbA1c, LFTs, TFTs, B12 and folate",
     "Brain imaging and specialist referral (neurology or memory service per local pathway)",
     "Falls service (NICE NG249), continence service, carer’s assessment (Care Act 2014)"
    ],
    "safetyNet": [
     "Fall with head injury then drowsiness, headache or vomiting, or sudden confusion — 111 or 999 the same day",
     "Review after the visit and results"
    ]
   }
  },
  "links": [
   {
    "ic": "🧭",
    "t": "Falls",
    "s": "Algorithm · NICE NG249 · NPH in the differential",
    "href": "algorithms/falls.html"
   },
   {
    "ic": "💠",
    "t": "Dementia protocol",
    "s": "Reversible causes · NICE NG97",
    "href": "management/dementia.html"
   },
   {
    "ic": "📋",
    "t": "Dementia",
    "s": "Case walkthrough",
    "href": "../cases/dementia.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you will challenge ‘just dementia’. The candidate who agrees with the family, or who talks only to the son, fails even with perfect knowledge.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting ‘just dementia’ and referring to the memory clinic without comment.",
     "why": "A gait-led triad suggests a potentially reversible cause.",
     "fix": "Name the triad, explain why it matters and request imaging with specialist review."
    },
    {
     "dom": "tasks",
     "fail": "Skipping the reversible-cause bloods and medication review once NPH is suspected.",
     "why": "NICE NG97 work-up still applies, and several causes may coexist.",
     "fix": "Order the NG97 bloods and review anticholinergics and sedatives."
    },
    {
     "dom": "tasks",
     "fail": "Assuming the incontinence is part of NPH.",
     "why": "Overflow from prostatic enlargement and UTI are common in older men.",
     "fix": "Urine dip, bladder emptying and prostate examination (NICE CG97)."
    },
    {
     "dom": "rto",
     "fail": "Talking about Mr Friske in the third person throughout.",
     "why": "It removes his dignity and ignores his capacity and consent.",
     "fix": "Address him first, ask his permission, ask his view."
    },
    {
     "dom": "rto",
     "fail": "Promising that a shunt will fix it.",
     "why": "Not all improve and other pathology often coexists.",
     "fix": "Offer realistic hope: worth investigating, outcome uncertain."
    },
    {
     "dom": "gs",
     "fail": "Claiming a neurological examination over video.",
     "why": "Remote findings are limited and examiners notice over-claiming.",
     "fix": "Observe gait on screen, then arrange a face-to-face review."
    },
    {
     "dom": "gs",
     "fail": "No interim help for falls, continence or the carer.",
     "why": "Investigation takes weeks; harm happens meanwhile.",
     "fix": "Falls and continence referrals and a carer’s assessment now."
    }
   ]
  }
 },
 "overactive-bladder": {
  "stem": {
   "name": "Diane Foster",
   "age": "55-year-old woman",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "No previous consultations for urinary symptoms.",
   "reason": "Video consultation: urgency, frequency day and night and occasional leaking; asking for a tablet to stop it."
  },
  "knowledge": {
   "guideline": "[1] NICE NG123 (urinary incontinence and pelvic organ prolapse in women, 2019) · [2] NICE QS77 (urinary incontinence in women) · [3] NICE TA290 (mirabegron) · [4] MHRA Drug Safety Update, mirabegron (October 2015) · [5] NICE NG12 (updated April 2026) · [6] BNF",
   "summary": "Urgency, frequency, nocturia and urge leakage suggest overactive bladder. Exclude infection, haematuria and other causes, confirm the type of incontinence, and start with a bladder diary, lifestyle change and at least 6 weeks of bladder training before medication.",
   "points": [
    {
     "h": "Assess first",
     "t": "NICE NG123 [1]: history to categorise stress, urgency (OAB) or mixed incontinence; urine dipstick for blood, glucose, protein, leucocytes and nitrites, with culture if infection is suspected; ask about medicines, fluid and caffeine intake. Examine in person (abdomen, pelvic examination for prolapse and atrophy, pelvic floor contraction)."
    },
    {
     "h": "Bladder diary",
     "t": "NICE NG123 [1] and QS77 [2]: a bladder diary for at least 3 days, covering both working and leisure days, at initial assessment. It shows frequency, volumes, fluid and caffeine intake and leak episodes."
    },
    {
     "h": "NICE NG12 (updated April 2026) routes",
     "t": "NICE NG12 (updated April 2026) [5]: aged 45 and over with unexplained visible haematuria without UTI, or visible haematuria that persists or recurs after successful UTI treatment → suspected cancer pathway referral (bladder and kidney). Persistent or frequent increased urinary urgency or frequency is also an ovarian cancer symptom in NICE NG12 (updated April 2026): in women aged 40 and over, measure CA125; at 50–59, arrange urgent direct-access pelvic and abdominal ultrasound if CA125 is 31 IU/mL or more. Ask about bloating, early satiety, pelvic pain and weight loss."
    },
    {
     "h": "Conservative first",
     "t": "NICE NG123 [1]: recommend a trial of caffeine reduction; consider advising modification of high or low fluid intake; advise weight loss if BMI is over 30. Offer bladder training lasting for a minimum of 6 weeks as first-line treatment for urgency or mixed incontinence; supervised pelvic floor muscle training for at least 3 months if there is a stress component."
    },
    {
     "h": "Medication next",
     "t": "NICE NG123 [1]: if bladder training is ineffective, offer an antimuscarinic after discussing benefits and adverse effects, taking account of total anticholinergic burden. Do not offer immediate-release oxybutynin to older women who may be at higher risk of sudden deterioration in physical or mental health. Review 4 weeks after starting a new OAB medicine. Mirabegron is an option where antimuscarinics are contraindicated, ineffective or not tolerated (NICE TA290 [3]). Doses per BNF [6]."
    },
    {
     "h": "Mirabegron and BP",
     "t": "MHRA DSU October 2015 [4]: mirabegron is contraindicated in severe uncontrolled hypertension (systolic 180 or more, or diastolic 110 or more); measure BP before starting and regularly during treatment."
    },
    {
     "h": "Vaginal oestrogen",
     "t": "NICE NG123 [1]: offer intravaginal oestrogen for OAB symptoms in postmenopausal women with vaginal atrophy. Systemic HRT is not a treatment for incontinence."
    },
    {
     "h": "Refer",
     "t": "Refer to specialist services if OAB does not respond to conservative and drug treatment (further options include botulinum toxin A and nerve stimulation), or earlier for haematuria, a palpable bladder after voiding, suspected neurological disease, recurrent UTI or symptomatic prolapse."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Foster, I’m Dr Patel. Can you hear me okay, and are you somewhere private? … Good. What can I help with today?",
    "dom": "rto",
    "why": "Checks privacy; open question"
   },
   {
    "who": "pt",
    "text": "It’s so embarrassing. I’m bursting for the loo all the time, day and night, and sometimes I just don’t make it. I’ve started avoiding going out and I’m exhausted from getting up at night. Can you just give me a tablet to stop it? My friend takes something for hers."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. This is very common and you’re right to come; it’s clearly taking a lot out of you, stopping you going out and wrecking your sleep. I do want to help you get it under control. Can I ask some questions so we treat the right problem?",
    "dom": "rto",
    "why": "Normalises, reflects impact, sets agenda"
   },
   {
    "who": "pt",
    "text": "Yes, go on."
   },
   {
    "phase": "Data gathering and red flags",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When you leak, is it that you get a sudden, desperate urge and can’t get there in time, or does it happen when you cough, sneeze or lift something?",
    "dom": "tasks",
    "why": "Distinguishes urge from stress incontinence"
   },
   {
    "who": "pt",
    "text": "It’s the urge. I suddenly have to go and I don’t make it. Not really when I cough."
   },
   {
    "who": "dr",
    "text": "Roughly how often do you go in the day, and how many times do you get up at night?",
    "dom": "tasks",
    "why": "Quantifies frequency and nocturia"
   },
   {
    "who": "pt",
    "text": "I’ve never counted. It feels like all the time, and I’m up more than once every night."
   },
   {
    "who": "dr",
    "text": "Have you seen any blood in your urine, or had burning or stinging when you go?",
    "dom": "tasks",
    "why": "Screens NICE NG12 (updated April 2026) visible haematuria and infection"
   },
   {
    "who": "pt",
    "text": "No blood, no burning."
   },
   {
    "who": "dr",
    "text": "Have you been unusually thirsty, or lost weight without trying? And any bloating, feeling full quickly, or pain low in your tummy?",
    "dom": "tasks",
    "why": "Screens diabetes and NICE NG12 (updated April 2026) ovarian symptoms"
   },
   {
    "who": "pt",
    "text": "Not that I’ve noticed."
   },
   {
    "who": "dr",
    "text": "Any numbness or weakness in your legs, back problems, or change in your bowels?",
    "dom": "tasks",
    "why": "Screens neurological causes"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "What do you tend to drink through the day: tea, coffee, fizzy drinks, alcohol? And are you taking any tablets or medicines from anywhere?",
    "dom": "tasks",
    "why": "Fluid, caffeine and medication contributors"
   },
   {
    "who": "pt",
    "text": "Nothing unusual, I don’t think. No medicines."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You mentioned your friend’s tablet. What do you know about it, and what are you hoping it would do?",
    "dom": "rto",
    "why": "Explores the idea behind the request"
   },
   {
    "who": "pt",
    "text": "Just that it stopped her rushing. I want my life back. I’m scared to go anywhere without knowing where the loo is."
   },
   {
    "who": "dr",
    "text": "That sounds really isolating. Is there anything else you’re worried this might be?",
    "dom": "rto",
    "why": "Checks for hidden fears"
   },
   {
    "who": "pt",
    "text": "Not really. It’s more the embarrassment."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "From what you describe, this sounds like an overactive bladder. The bladder muscle squeezes before it’s full, which gives that sudden urge. It’s very common and very treatable. You haven’t mentioned blood or anything worrying, which is reassuring, but I’ll still check a urine sample.",
    "dom": "tasks",
    "why": "Working diagnosis in plain words; proportionate reassurance"
   },
   {
    "who": "pt",
    "text": "So can I have the tablet?"
   },
   {
    "who": "dr",
    "text": "Tablets are an option, and I’m not ruling them out. But the steps that work best come first, and tablets are added if those aren’t enough. The first steps often work well, and tablets can cause dry mouth, constipation and, for some, fuzziness. Would it be okay if I explain the plan?",
    "dom": "rto",
    "why": "Validates the request while explaining conservative-first"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "First, a bladder diary for at least three days, including a work day and a day off if that applies: what you drink, when you go and roughly how much, and any leaks. Second, caffeine in tea, coffee and fizzy drinks irritates the bladder, so it’s worth trying decaf versions for a few weeks. And don’t cut back on fluids overall, because very concentrated urine irritates the bladder too.",
    "dom": "tasks",
    "why": "NG123 diary for at least 3 days; caffeine reduction; sensible fluid intake"
   },
   {
    "who": "pt",
    "text": "I could try decaf. I hadn’t thought about not cutting back."
   },
   {
    "who": "dr",
    "text": "A lot of people do cut back, so it’s worth knowing. Third, bladder training: when the urge comes, you hold on a little longer, using squeezes of your pelvic floor muscles, and gradually stretch the time between visits. It takes at least six weeks to work, so it needs patience, but most people improve. I can refer you to the continence service to support you.",
    "dom": "tasks",
    "why": "NG123 bladder training for at least 6 weeks; continence service"
   },
   {
    "who": "pt",
    "text": "And if it doesn’t work?"
   },
   {
    "who": "dr",
    "text": "Then we add a tablet. There are two main types, and I’d go through the side effects and check your blood pressure before one of them. I’d also like you to come in for a urine test and a quick examination, to check for anything like a prolapse or dryness that we could treat directly.",
    "dom": "tasks",
    "why": "Medication as next step, BP before mirabegron, in-person examination"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Please let me know promptly if you see any blood in your urine, get burning or a fever, notice bloating or tummy pain that doesn’t go away, or any numbness or weakness. Can you tell me back what we’re going to do?",
    "dom": "gs",
    "why": "Specific safety-net: haematuria, infection, ovarian and neurological symptoms"
   },
   {
    "who": "pt",
    "text": "Urine sample and an appointment. Three-day diary. Decaf and not cutting back fluids. Bladder training for six weeks. Tablet if that’s not enough."
   },
   {
    "who": "dr",
    "text": "Perfect. Let’s review your diary together in a few weeks. The continence service can advise on pads for now, so you can get out and about again while this starts working.",
    "dom": "gs",
    "why": "Review booked; containment products while treatment starts"
   },
   {
    "who": "pt",
    "text": "Thank you. I feel less silly about it now."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Checked privacy; open question; let her describe urgency, leakage and the impact on going out and sleep.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Social withdrawal, embarrassment and exhaustion from nocturia explored.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “avoiding going out” and “my friend takes something” and used both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a tablet will stop it, like her friend), concern (embarrassment, being caught short), expectation (a prescription today).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Urine dipstick and culture if indicated; in-person abdominal and pelvic examination; bladder diary for at least 3 days.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "OAB vs stress or mixed incontinence, UTI, diabetes, neurological causes, medicines, caffeine and fluid habits.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened visible haematuria (NICE NG12 (updated April 2026) bladder at 45+), NICE NG12 (updated April 2026) ovarian symptoms, diabetes and neurological red flags.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Urgency-predominant incontinence consistent with overactive bladder.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Caffeine reduction, fluid advice, bladder training for at least 6 weeks, continence service; antimuscarinic or mirabegron as the next step.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Advice not to restrict fluids; anticholinergic burden and BP considered before medication; containment products meanwhile.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Clear return triggers (haematuria, infection, bloating or pain, neurology); diary review booked.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Diane Foster",
    "age": "55 years · female",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "Nil recorded"
    ],
    "allergy": "NKDA",
    "recent": "No previous consultations for bladder symptoms.",
    "reason": "Video consultation booked online: “bladder problem, embarrassing”."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Privacy and opening",
     "d": "Normalise the embarrassment early and name the impact she describes."
    },
    {
     "t": "1–5",
     "h": "Characterise and exclude",
     "d": "Urge vs stress, frequency and nocturia, haematuria, infection, thirst, ovarian symptoms, neurology, caffeine, fluids, medicines."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "The friend’s tablet, the fear of going out, the embarrassment."
    },
    {
     "t": "6–8",
     "h": "Name it and reframe the pill",
     "d": "Overactive bladder in plain words; tablets are a later step, not a refusal."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Diary for 3 days, decaf trial, fluids, bladder training for 6 weeks, continence referral, urine and examination. Safety-net and review."
    }
   ],
   "wordPics": {
    "fail": "Prescribes oxybutynin on request without a urine test, haematuria question or type of incontinence; or refuses a tablet flatly with no plan; ignores the social impact.",
    "pass": "Distinguishes urge from stress, checks urine and haematuria, starts caffeine reduction and bladder training, and offers medication as the next step with a review.",
    "exc": "All of the above, plus: explores the friend’s tablet and her isolation; warns against restricting fluids; screens NICE NG12 (updated April 2026) ovarian symptoms as well as haematuria; explains the 3-day diary and 6-week timescale so she persists; mentions BP before mirabegron and anticholinergic effects; arranges containment support meanwhile; teach-back."
   },
   "avoid": [
    {
     "dont": "“Here’s a prescription for oxybutynin, see how you get on.”",
     "instead": "“Tablets are an option, but the steps that work best come first. Let me check a few things and explain the plan.”",
     "why": "Skips assessment and the NG123 conservative-first pathway."
    },
    {
     "dont": "“You don’t need tablets, just drink less.”",
     "instead": "“Cutting back fluids can make urine more irritating. Swapping to decaf is more likely to help.”",
     "why": "Fluid restriction worsens symptoms; NG123 advises modifying only high or low intake."
    },
    {
     "dont": "“Lots of women your age leak, it’s just part of life.”",
     "instead": "“This is very common and very treatable.”",
     "why": "Normalising without treating is dismissive and loses relating marks."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Isolation and sleep",
     "t": "Urgency often leads to avoiding outings and to broken sleep. Naming this validates her and makes the case for treatment."
    },
    {
     "h": "Embarrassment",
     "t": "Bladder symptoms are often hidden for years. An early, matter-of-fact tone makes the history easier."
    }
   ],
   "legal": [
    {
     "h": "Chaperones",
     "t": "GMC Intimate examinations and chaperones (2024): offer a chaperone for the pelvic examination and record the offer and response."
    }
   ],
   "professional": [
    {
     "h": "Shared decision on medication",
     "t": "NICE NG123: discuss the benefits and adverse effects of antimuscarinics, including anticholinergic burden, before prescribing, and review 4 weeks after starting a new medicine."
    },
    {
     "h": "Deprescribing culture",
     "t": "Starting an anticholinergic can add to later cognitive and falls risk; record the discussion and review regularly."
    }
   ],
   "community": [
    {
     "h": "Continence services",
     "t": "NHS continence services provide bladder training support and assessment for containment products."
    },
    {
     "h": "Patient support",
     "t": "Bladder Health UK and the Bladder and Bowel Community offer information and support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Visible haematuria at 45 or over (NICE NG12 (updated April 2026) bladder)",
     "Persistent bloating, early satiety, pelvic pain or urinary urgency and frequency at 40 or over (NICE NG12 (updated April 2026) ovarian: CA125)",
     "Leg weakness, numbness or new back pain (neurological cause)",
     "Thirst, weight loss (diabetes)",
     "Recurrent UTI or a palpable bladder after voiding"
    ],
    "psychosocial": [
     "Avoiding going out; fear of being caught short",
     "Exhaustion from nocturia",
     "Embarrassment; comparison with a friend’s treatment"
    ],
    "ice": [
     "Idea: a tablet will stop it, as it did for her friend",
     "Concern: embarrassment and losing her social life",
     "Expectation: a prescription today"
    ]
   },
   "diagnosis": "“This sounds like an overactive bladder: the bladder muscle squeezes before it’s full, which causes that sudden urge. It’s very common and very treatable.”",
   "diagnosisLay": "“Think of the bladder as a balloon with a jumpy alarm. The alarm goes off long before the balloon is full. Bladder training teaches the alarm to wait.”",
   "management": {
    "reflectIce": "“You told me you’re avoiding going out and hoped for a tablet like your friend’s. I want to get your life back too. The first steps often work well, and a tablet is ready as the next step if they don’t.”",
    "psychosocial": "Validate the isolation and sleep loss; continence service and containment products so she can go out meanwhile.",
    "sharedPlan": [
     "Urine dipstick (culture if infection suspected); in-person abdominal and pelvic examination with chaperone offered",
     "Bladder diary for at least 3 days",
     "Caffeine reduction trial; avoid restricting fluids",
     "Bladder training for at least 6 weeks with continence service support",
     "If ineffective: antimuscarinic (consider anticholinergic burden) or mirabegron (BP first); review 4 weeks after starting",
     "Intravaginal oestrogen if postmenopausal with vaginal atrophy"
    ],
    "safetyNet": [
     "Visible blood in the urine: see us promptly (NICE NG12 (updated April 2026))",
     "Burning, fever, persistent bloating or pelvic pain, leg weakness or numbness: return",
     "Review the diary and progress in a few weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Urinary incontinence",
    "s": "Case walkthrough · NICE NG123",
    "href": "../cases/urinary-incontinence.html"
   },
   {
    "ic": "💠",
    "t": "Female urinary incontinence protocol",
    "s": "Bladder training · drugs · NICE NG12 (updated April 2026)",
    "href": "management/female-urinary-incontinence.html"
   },
   {
    "ic": "🗺️",
    "t": "Haematuria pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) urology",
    "href": "algorithms/haematuria.html"
   },
   {
    "ic": "💠",
    "t": "Pelvic organ prolapse protocol",
    "s": "Examination · pessaries · referral",
    "href": "management/pelvic-organ-prolapse.html"
   }
  ],
  "pitfalls": {
   "intro": "The trap is either giving the tablet on request or refusing it flatly. The marks sit in excluding red flags, conservative-first management explained well, and taking the impact seriously.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing an antimuscarinic at the first consultation without a urine test or type of incontinence.",
     "why": "NG123 puts assessment, a bladder diary and bladder training first.",
     "fix": "Characterise urge vs stress, dip the urine, start the diary."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about blood in the urine.",
     "why": "Visible haematuria at 45 or over is an NICE NG12 (updated April 2026) suspected cancer pathway criterion.",
     "fix": "“Have you seen any blood in your urine?”"
    },
    {
     "dom": "tasks",
     "fail": "Missing that urgency and frequency are also NICE NG12 (updated April 2026) ovarian symptoms.",
     "why": "At 40 or over, persistent symptoms warrant a CA125 test.",
     "fix": "Ask about bloating, early satiety and pelvic pain."
    },
    {
     "dom": "tasks",
     "fail": "Telling her to drink less.",
     "why": "Concentrated urine irritates the bladder; NG123 advises modifying only high or low intake, and a caffeine reduction trial.",
     "fix": "“Keep drinking normally, and swap to decaf.”"
    },
    {
     "dom": "rto",
     "fail": "“It’s just part of getting older.”",
     "why": "Dismisses a treatable condition and her distress.",
     "fix": "“This is very common and very treatable, and it matters because it’s stopping you going out.”"
    },
    {
     "dom": "gs",
     "fail": "No timescale for bladder training.",
     "why": "Without the 6-week message she may stop after a week and feel it failed.",
     "fix": "“It takes at least six weeks. Let’s review your diary in a few weeks.”"
    }
   ]
  }
 },
 "peripheral-neuropathy": {
  "stem": {
   "name": "Vincent Oyelaran",
   "age": "58-year-old man",
   "pmh": [
    "Overweight",
    "Alcohol: heavy drinking noted (intake not quantified)"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "No recent blood tests on file. No HbA1c recorded.",
   "reason": "Face-to-face. Several months of numbness and tingling in both feet, spreading up the legs and now in the fingertips."
  },
  "knowledge": {
   "guideline": "[1] NICE NG239 (vitamin B12 deficiency in over 16s, 2024) · [2] NICE NG28 (type 2 diabetes in adults, updated) · [3] NICE NG19 (diabetic foot problems, 2015, updated) · [4] NICE CG115 (alcohol-use disorders: diagnosis, assessment and management of harmful drinking and alcohol dependence, 2011) · [5] NICE CG100 (alcohol-use disorders: physical complications, 2010, updated) · [6] NICE CG173 (neuropathic pain in adults: pharmacological management in non-specialist settings, 2013, updated 2020) · [7] UK Chief Medical Officers’ low-risk drinking guidelines (2016) · [8] DVLA Assessing fitness to drive: a guide for medical professionals (current edition)",
   "summary": "Symmetrical numbness and tingling that starts in the feet, climbs the legs and then reaches the fingertips is a length-dependent sensory polyneuropathy — the glove-and-stocking pattern. The label is the easy part. The station is about finding the cause (diabetes, alcohol, B12 or folate deficiency, thyroid, kidney or liver disease, drugs, paraprotein), screening for the rare emergency (Guillain–Barré), protecting his numb feet, and talking about alcohol without judgement.",
   "points": [
    {
     "h": "The pattern",
     "t": "Distal, symmetrical, feet before hands, slowly progressive over months, sensory more than motor: a length-dependent polyneuropathy. Features that do not fit — marked asymmetry, weakness out of proportion, rapid progression, autonomic or cranial involvement — suggest another diagnosis and need neurology."
    },
    {
     "h": "Causes to test for",
     "t": "Diabetes and non-diabetic hyperglycaemia; alcohol; vitamin B12 or folate deficiency; hypothyroidism; chronic kidney or liver disease; drugs and toxins; paraproteinaemia; less often vasculitis, inflammatory (CIDP) or hereditary neuropathy. Heavy alcohol use and excess weight make alcohol and diabetes the first two to test here."
    },
    {
     "h": "First-line tests",
     "t": "HbA1c (48 mmol/mol or more is the diagnostic threshold for diabetes, WHO 2011 (international); 42–47 mmol/mol is non-diabetic hyperglycaemia, NICE PH38; management per NICE NG28 [2]); vitamin B12 and folate (NICE NG239 [1]: test when symptoms include neurological features; do not wait for anaemia); FBC and MCV; U&E and eGFR; LFTs including GGT; TFTs; ESR or CRP; serum protein electrophoresis. Neurology and nerve conduction studies if the cause is unclear, the pattern is atypical or it keeps progressing."
    },
    {
     "h": "Emergency features",
     "t": "Rapidly ascending weakness over days, difficulty walking, breathlessness, swallowing difficulty or facial weakness suggests Guillain–Barré syndrome — same-day hospital assessment, not outpatient nerve studies. Neurological signs with B12 deficiency need prompt treatment (NICE NG239 [1])."
    },
    {
     "h": "Alcohol",
     "t": "Ask about quantity with AUDIT (NICE CG115 [4]); low-risk guidance is no more than 14 units a week spread over 3 or more days (UK CMOs [7]). Do not advise a dependent drinker to stop suddenly — assess for dependence and plan assisted withdrawal (CG115 [4]). NICE CG100 [5]: offer prophylactic oral thiamine to harmful or dependent drinkers who are malnourished or at risk of malnutrition, have decompensated liver disease, or are in acute or planned withdrawal (dose per BNF)."
    },
    {
     "h": "Feet",
     "t": "Reduced sensation means injuries, burns and ulcers go unnoticed — his stubbed toe proves it. Daily foot checks, well-fitting footwear, testing bath water by hand or thermometer, and podiatry. If diabetes is confirmed, risk-stratify and refer per NICE NG19 [3]."
    },
    {
     "h": "Pain, if it develops",
     "t": "NICE CG173 [6]: offer a choice of amitriptyline, duloxetine, gabapentin or pregabalin for neuropathic pain; if the first is not effective or tolerated, offer one of the remaining three. Take care with sedating drugs and alcohol together."
    },
    {
     "h": "Driving",
     "t": "DVLA [8]: he must tell the DVLA if a condition affects his ability to drive safely. If assessment confirms alcohol misuse or dependence, DVLA notification is required under the alcohol standards."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Oyelaran, I’m Dr Clarke. What’s brought you in today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "For the last few months my feet have felt numb and tingly, like walking on cotton wool, and it’s creeping up my legs. Now the tips of my fingers are starting too. Both sides. I stubbed my toe badly last week and barely felt it. What’s causing it, doc?"
   },
   {
    "who": "dr",
    "text": "That sounds unsettling — especially not feeling that toe. I want to find out why. Can I ask some questions, examine you, and then we’ll plan the tests together?",
    "dom": "gs",
    "why": "Acknowledges the concern and sets an agenda"
   },
   {
    "who": "pt",
    "text": "Yes, go on."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Has it been slowly spreading over months, or has anything changed quickly in the last few days? Any actual weakness — tripping, dropping things, trouble with stairs?",
    "dom": "tasks",
    "why": "Tempo and motor involvement — screens for Guillain–Barré and atypical features"
   },
   {
    "who": "pt",
    "text": "Slowly. Months. No weakness, just the numbness."
   },
   {
    "who": "dr",
    "text": "Any trouble with breathing, swallowing or your face? Any problems with your bladder, bowels, or dizziness when you stand?",
    "dom": "tasks",
    "why": "Screens bulbar, respiratory and autonomic red flags"
   },
   {
    "who": "pt",
    "text": "No, none of that."
   },
   {
    "who": "dr",
    "text": "Good. Some of the common causes are to do with blood sugar, vitamins, the thyroid, and alcohol, so I ask everyone about them. Have you ever been told your sugar was high? Do you take any tablets or remedies?",
    "dom": "tasks",
    "why": "Starts a systematic cause search"
   },
   {
    "who": "pt",
    "text": "Never had it checked. No tablets."
   },
   {
    "who": "dr",
    "text": "And alcohol — I’m asking because it can affect nerves, not to tell you off. What would you drink in a typical week?",
    "dom": "rto",
    "why": "Raises alcohol honestly and without judgement"
   },
   {
    "who": "pt",
    "text": "(pause) More than I should, if I’m honest. Most days."
   },
   {
    "who": "dr",
    "text": "Thank you for being straight with me — that really helps. I’ll ask a few more questions about drinking in a moment, because it matters for how we cut down safely. Does anyone in your family have nerve problems like this?",
    "dom": "tasks",
    "why": "Acknowledges honesty; plans AUDIT and dependence check; family history"
   },
   {
    "who": "pt",
    "text": "Not that I know of."
   },
   {
    "phase": "Examination",
    "clock": "5–6 min",
    "who": "dr",
    "text": "(after examining) The feeling is reduced in both feet and lower legs, and a little in your fingertips, in the same pattern on both sides. Your ankle reflexes are weaker, but your strength is normal. I’ve had a good look at your feet, including that toe. This fits a nerve problem called a peripheral neuropathy.",
    "dom": "tasks",
    "why": "Examination supports a symmetrical length-dependent sensory neuropathy with no motor weakness"
   },
   {
    "who": "pt",
    "text": "So what’s causing it?"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "6–7 min",
    "who": "dr",
    "text": "That’s the key question. Before I answer — what have you been wondering yourself? Is there anything you’re worried it might be?",
    "dom": "rto",
    "why": "Elicits ideas and concerns before explaining"
   },
   {
    "who": "pt",
    "text": "I wondered if it was the drink. And I’m worried it’ll keep spreading and I’ll end up in a wheelchair."
   },
   {
    "phase": "Explanation and plan",
    "clock": "7–11 min",
    "who": "dr",
    "text": "Those are fair worries. Alcohol is one possible cause, but not the only one. High blood sugar is the commonest cause of this pattern, and low vitamin B12 or an underactive thyroid can do the same. Several of these are treatable, and treating the cause often stops it spreading. The slow, sensation-only pattern you have is the common kind, not the kind that leads quickly to weakness.",
    "dom": "tasks",
    "why": "Explains the differential and addresses the wheelchair fear honestly"
   },
   {
    "who": "pt",
    "text": "So what tests?"
   },
   {
    "who": "dr",
    "text": "A blood test for sugar, B12 and folate, thyroid, kidneys and liver, a blood count, an inflammation marker, and a protein test that picks up a rarer cause. If the results don’t explain it, or it keeps spreading, I’ll refer you to neurology for nerve conduction tests.",
    "dom": "tasks",
    "why": "Targeted investigations with a clear referral threshold"
   },
   {
    "who": "pt",
    "text": "And the drinking?"
   },
   {
    "who": "dr",
    "text": "Cutting down is one of the most useful things you can do for your nerves. But if you drink every day, stopping suddenly can be dangerous, so let’s go through a short questionnaire and agree a safe plan together — there’s help available if you want it. I’d also like to start a vitamin called thiamine, which nerves need.",
    "dom": "tasks",
    "why": "Safe alcohol plan (AUDIT, avoid abrupt withdrawal if dependent) and thiamine"
   },
   {
    "who": "pt",
    "text": "Okay. I didn’t know you could stop too fast."
   },
   {
    "who": "dr",
    "text": "Meanwhile, protect your feet. Check them every day for cuts or blisters, wear shoes that fit well, and test bath water with your hand or a thermometer, not your feet. I’ll ask a podiatrist to see you too.",
    "dom": "tasks",
    "why": "Foot protection and podiatry"
   },
   {
    "phase": "Safety net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you develop weakness that spreads over days, trouble walking, breathing or swallowing, or your face goes weak, go to A&E or call 999 — that would be a different, urgent problem. Can you tell me back what we’ve agreed?",
    "dom": "gs",
    "why": "Specific Guillain–Barré safety net, then teach-back"
   },
   {
    "who": "pt",
    "text": "Bloods this week. Check my feet every day. Thiamine. Cut down the drink safely — we’ll talk about it. A&E if I get weak or can’t breathe."
   },
   {
    "who": "dr",
    "text": "Exactly. Let’s book a review in two weeks for the results and the drinking plan. You did the right thing coming in.",
    "dom": "gs",
    "why": "Defined follow-up and a supportive close"
   },
   {
    "who": "pt",
    "text": "Thanks, doc. That’s less scary than I thought."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him describe the pattern and the stubbed toe in his own words.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Explored alcohol (non-judgemental, with AUDIT planned), weight, medication and family history.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up ‘barely felt it’ as a foot-safety cue and ‘what’s causing it’ as his main agenda.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: maybe the drink. Concern: spreading to a wheelchair. Expectation: a cause and a fix.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Sensation (touch, pinprick, vibration, proprioception), reflexes, power, gait and Romberg, feet; targeted bloods.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Length-dependent sensory polyneuropathy; tested against mononeuropathy, radiculopathy, central causes and Guillain–Barré.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about tempo, weakness, bulbar, respiratory and autonomic symptoms; knew GBS needs same-day assessment.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Symmetrical glove-and-stocking sensory neuropathy; cause to be found — diabetes and alcohol lead.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "HbA1c, B12/folate, FBC, U&E, LFT/GGT, TFT, ESR/CRP, protein electrophoresis; thiamine; neurology if unclear or progressing.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Addressed alcohol safely (dependence check, no abrupt stop if dependent) and weight; foot care and podiatry.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999/A&E for spreading weakness, breathing or swallowing problems; review in 2 weeks; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Vincent Oyelaran",
    "age": "58 years · male",
    "pmh": [
     "Overweight",
     "Heavy alcohol use noted"
    ],
    "meds": [
     "None"
    ],
    "allergy": "None recorded",
    "recent": "⚠ No bloods or HbA1c on file.",
    "reason": "Numb, tingling feet for months, spreading up; fingertips now affected."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "Let him describe the spread and the stubbed toe. His question is ‘what’s causing it?’"
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Tempo, weakness, bulbar and autonomic symptoms; diabetes, drugs, diet, family history; alcohol without judgement."
    },
    {
     "t": "5–7",
     "h": "Examine and ICE",
     "d": "Sensation, reflexes, power, gait, feet. His fear: the wheelchair. His idea: the drink."
    },
    {
     "t": "7–11",
     "h": "Explain and plan",
     "d": "Causes; targeted bloods; thiamine; safe alcohol reduction; foot care; neurology threshold."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "Guillain–Barré safety net; teach-back; results review in 2 weeks."
    }
   ],
   "wordPics": {
    "fail": "Labels it ‘neuropathy’ and stops; orders a random set of tests or none; never asks about alcohol, or lectures about it; misses the red flags for Guillain–Barré; no foot-care advice after he describes an unnoticed injury.",
    "pass": "Recognises the glove-and-stocking pattern, examines, orders HbA1c, B12, folate, TFT, U&E, LFTs and FBC, asks about alcohol, gives foot-care advice and safety-nets for weakness.",
    "exc": "All of that, plus: includes protein electrophoresis and a clear neurology threshold; handles alcohol with curiosity and warns against sudden withdrawal if dependent; offers thiamine; answers the wheelchair fear honestly; specific GBS safety net; teach-back; he leaves feeling helped, not judged."
   },
   "avoid": [
    {
     "dont": "“It’s probably the drink.”",
     "instead": "“Alcohol is one possible cause, but so are blood sugar, B12 and thyroid — let’s check them all.”",
     "why": "Premature closure misses treatable causes such as diabetes and B12 deficiency."
    },
    {
     "dont": "“You need to stop drinking completely, starting today.”",
     "instead": "“Cutting down will help your nerves — let’s work out a safe way to do it.”",
     "why": "Sudden withdrawal in a dependent drinker can cause seizures (NICE CG115)."
    },
    {
     "dont": "“There’s not much we can do for nerve damage.”",
     "instead": "“Several causes are treatable, and treating the cause often stops it spreading.”",
     "why": "Nihilism is inaccurate and removes his motivation to change."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Alcohol and stigma",
     "t": "People often under-report drinking when they expect judgement. A curious, non-blaming approach gets more accurate information and better engagement."
    },
    {
     "h": "Work and safety",
     "t": "Numb feet and poor balance raise the risk of falls and injury at work and at home. Ask what his day involves once the cause is clearer."
    }
   ],
   "legal": [
    {
     "h": "DVLA",
     "t": "He must notify the DVLA if a condition affects his ability to drive safely. If alcohol misuse or dependence is confirmed, notification is required under the DVLA alcohol standards (DVLA Assessing fitness to drive)."
    }
   ],
   "professional": [
    {
     "h": "Safe alcohol advice",
     "t": "NICE CG115: assess dependence (AUDIT) before advising reduction; dependent drinkers need planned, assisted withdrawal rather than a sudden stop."
    },
    {
     "h": "Following up results",
     "t": "A cause search only works if abnormal results are acted on. Book the review before he leaves and document the neurology threshold."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Local NHS alcohol services (self-referral), Drinkline, and community podiatry for foot protection."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Weakness spreading over days, difficulty walking — possible Guillain–Barré: same-day assessment",
     "Breathing or swallowing difficulty, facial weakness, autonomic symptoms",
     "Marked asymmetry, motor-predominant or rapidly progressive features — neurology"
    ],
    "psychosocial": [
     "Alcohol intake, dependence and readiness to change",
     "Weight and diabetes risk",
     "Falls and injury risk at home and work; foot care"
    ],
    "ice": [
     "Idea: it might be the drink",
     "Concern: it will spread and put him in a wheelchair",
     "Expectation: a cause and a fix"
    ]
   },
   "diagnosis": "Symmetrical, length-dependent sensory polyneuropathy (glove-and-stocking) over months, without weakness or red flags. Cause not yet known: diabetes and alcohol lead the differential, with B12/folate deficiency, hypothyroidism, renal or liver disease and paraproteinaemia to exclude.",
   "diagnosisLay": "“The long nerves to your feet and hands aren’t working properly, which is why they feel numb. Something is affecting them — often blood sugar, alcohol or a vitamin — and finding which one tells us how to stop it getting worse.”",
   "management": {
    "reflectIce": "“You wondered about the drink, and you’re worried about a wheelchair. Let’s find the actual cause — several are treatable.”",
    "psychosocial": "Alcohol discussed without judgement; dependence assessed; safe reduction plan with support; foot safety at home.",
    "sharedPlan": [
     "HbA1c, B12 and folate, FBC, U&E, LFT and GGT, TFT, ESR or CRP, serum protein electrophoresis",
     "AUDIT and dependence check; thiamine; safe reduction or assisted withdrawal (NICE CG115, CG100)",
     "Daily foot checks, footwear, water temperature, podiatry; NICE NG19 foot risk if diabetes confirmed",
     "Neurology and nerve conduction if cause unclear, atypical or progressing"
    ],
    "safetyNet": [
     "Spreading weakness, trouble walking, breathing or swallowing, facial weakness — A&E or 999",
     "Results and alcohol plan review in 2 weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "🧭",
    "t": "Sensory neuropathy",
    "s": "Algorithm · causes, tests, red flags",
    "href": "algorithms/sensory-neuropathy.html"
   },
   {
    "ic": "🧭",
    "t": "Vitamin B12 deficiency",
    "s": "Algorithm · NICE NG239",
    "href": "algorithms/vitamin-b12-deficiency.html"
   },
   {
    "ic": "💠",
    "t": "Alcohol and problem drinking",
    "s": "Protocol · AUDIT · withdrawal · thiamine",
    "href": "management/alcohol-problem-drinking.html"
   },
   {
    "ic": "💠",
    "t": "Neuropathic pain",
    "s": "Protocol · NICE CG173",
    "href": "management/neuropathic-pain.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is passed by a systematic hunt for the cause and failed by stopping at the label. Alcohol is the obvious lead; the examiner is watching whether you test for the others and raise it well.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Diagnosing ‘neuropathy’ with no cause search.",
     "why": "The treatable causes — diabetes, B12, thyroid — are the point of the station.",
     "fix": "Order the targeted bloods, including HbA1c, B12/folate and protein electrophoresis."
    },
    {
     "dom": "tasks",
     "fail": "Blaming alcohol and testing nothing else.",
     "why": "Anchoring on the obvious misses diabetes, the commonest cause.",
     "fix": "Keep alcohol as one hypothesis and test for the others."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about weakness, breathing or swallowing.",
     "why": "Guillain–Barré is rare but an emergency.",
     "fix": "Screen tempo and motor, bulbar and autonomic symptoms."
    },
    {
     "dom": "tasks",
     "fail": "Telling a daily drinker to stop at once.",
     "why": "Sudden withdrawal in dependence can cause seizures (NICE CG115).",
     "fix": "Assess dependence and plan a safe reduction or assisted withdrawal."
    },
    {
     "dom": "rto",
     "fail": "Moralising about drinking.",
     "why": "Judgement shuts down disclosure.",
     "fix": "Explain why you ask, thank him for honesty, and offer help."
    },
    {
     "dom": "gs",
     "fail": "No foot advice after he mentions an unfelt injury.",
     "why": "Missed ulcers and burns are the commonest harm.",
     "fix": "Daily checks, footwear, water temperature, podiatry."
    },
    {
     "dom": "gs",
     "fail": "“We’ll see what the bloods show.”",
     "why": "No follow-up or referral threshold is unsafe.",
     "fix": "Book the review and state when you would refer to neurology."
    }
   ]
  }
 },
 "prostatitis": {
  "stem": {
   "name": "Owen Beckett",
   "age": "44-year-old man",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "No recent consultations for urinary symptoms.",
   "reason": "Video consultation: several days of pain “down below”, burning on passing urine and feeling feverish; asking for antibiotics for a water infection."
  },
  "knowledge": {
   "guideline": "[1] NICE NG110 (prostatitis, acute: antimicrobial prescribing, 2018) · [2] MHRA Drug Safety Update, fluoroquinolones (January 2024) · [3] NICE NG253 (suspected sepsis, 16 and over) · [4] NICE NG109 (lower UTI: antimicrobial prescribing, 2018) · [5] UKHSA Prostate Cancer Risk Management Programme: advising well men about the PSA test · [6] EAU Chronic Pelvic Pain guideline (2025, international)",
   "summary": "Perineal pain, urinary symptoms, painful ejaculation and fever in a man point to acute bacterial prostatitis, not simple cystitis. Assess for sepsis and retention the same day, send urine before antibiotics, and treat for 14 days with a review, not a 3-day course.",
   "points": [
    {
     "h": "Recognise it",
     "t": "Acute prostatitis presents with perineal, pelvic, suprapubic or low back pain, dysuria, frequency, urgency or hesitancy, sometimes painful ejaculation, and fever or malaise. The prostate is typically very tender on a gentle rectal examination; prostatic massage is avoided in the acute phase (EAU, international). A video call cannot replace observations or examination, so arrange a same-day face-to-face assessment."
    },
    {
     "h": "Urine first",
     "t": "NICE NG110 [1]: send a midstream urine sample for culture before starting antibiotics. Ask a sexual history and offer chlamydia and gonorrhoea testing where there is any risk, because STIs can present similarly. NICE NG109 [4] is for lower UTI in men and uses a 7-day course; it does not cover prostatitis."
    },
    {
     "h": "Refer the same day",
     "t": "NICE NG110 [1]: refer to hospital if he has symptoms or signs of a more serious illness or condition such as sepsis, acute urinary retention or a prostatic abscess. Assess sepsis risk with NICE NG253 [3] (heart rate, respiratory rate, blood pressure, temperature, oxygen saturation, mental state). Retention in acute prostatitis is a hospital problem; the route of catheterisation is a specialist decision."
    },
    {
     "h": "Antibiotic choice",
     "t": "NICE NG110 [1] first choices: ciprofloxacin 500 mg twice daily or ofloxacin 200 mg twice daily for 14 days; if a fluoroquinolone is not appropriate, trimethoprim 200 mg twice daily for 14 days. MHRA Drug Safety Update (January 2024) [2]: systemic fluoroquinolones must only be used when other commonly recommended antibiotics are inappropriate. Weigh this for the individual man, take local microbiology advice where available, record the reason for the choice, and adjust to culture."
    },
    {
     "h": "Fluoroquinolone counselling",
     "t": "If a fluoroquinolone is used, MHRA [2] advice is to tell him to stop and seek help at the first sign of tendon pain or swelling, muscle or joint pain, numbness or tingling, or changes in mood or thinking; extra caution with corticosteroids, age over 60 and renal impairment."
    },
    {
     "h": "Review",
     "t": "NICE NG110 [1]: symptoms should improve within 48 hours; refer to hospital if they do not, or if he gets worse at any time. At 14 days, review and either stop or continue for a further 14 days if needed. Analgesia: paracetamol, with or without a low-dose weak opioid, or ibuprofen."
    },
    {
     "h": "No PSA now",
     "t": "UKHSA PCRMP [5]: do not measure PSA during an active urinary infection; defer for at least 6 weeks. A PSA taken now would be falsely raised and could trigger an unnecessary referral."
    },
    {
     "h": "Chronic prostatitis is different",
     "t": "Chronic prostatitis or chronic pelvic pain syndrome means pelvic or perineal pain for at least 3 of the previous 6 months, usually without fever. It is managed differently (EAU 2025 [6], international: alpha-blocker if under 1 year, pain-focused and psychological approaches). MHRA advises against fluoroquinolones for non-bacterial chronic prostatitis."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Beckett, I’m Dr Shah. Can you hear and see me clearly, and are you somewhere you can talk privately? … Good. What’s been going on?",
    "dom": "rto",
    "why": "Checks connection and privacy before an intimate history"
   },
   {
    "who": "pt",
    "text": "For the last few days I’ve had this ache low down, sort of between my legs and in my back. It burns when I wee, I’m going all the time, and it even hurts when I ejaculate. I feel feverish and rough too. Is it just a water infection? Can I get some antibiotics?"
   },
   {
    "who": "dr",
    "text": "Thank you for being so clear, I know some of that isn’t easy to say. You sound quite unwell with it. I’ll definitely help you get treated. Can I ask some questions first, so we get the right treatment for the right length of time?",
    "dom": "rto",
    "why": "Acknowledges embarrassment and illness; signposts the plan"
   },
   {
    "who": "pt",
    "text": "Yes, fine."
   },
   {
    "phase": "Data gathering and red flags",
    "clock": "1–5 min",
    "who": "dr",
    "text": "First, the most important one: are you able to pass urine at the moment, or are you straining, or feel you can’t empty?",
    "dom": "tasks",
    "why": "Screens acute urinary retention first"
   },
   {
    "who": "pt",
    "text": "I can go. It’s slow and it stings, but it comes."
   },
   {
    "who": "dr",
    "text": "And the fever: have you had shaking chills, or felt faint, confused or breathless? Have you been able to check your temperature?",
    "dom": "tasks",
    "why": "Screens sepsis features (NICE NG253)"
   },
   {
    "who": "pt",
    "text": "I’ve felt hot and cold. I haven’t got a thermometer. I’m not confused or anything."
   },
   {
    "who": "dr",
    "text": "Any blood in the urine, pain in your testicles or scrotum, or discharge from the penis?",
    "dom": "tasks",
    "why": "Screens haematuria, epididymo-orchitis and urethritis"
   },
   {
    "who": "pt",
    "text": "No blood, no discharge. The ache is behind, not in my testicles."
   },
   {
    "who": "dr",
    "text": "Have you had anything like this before, or any pelvic pain lasting months?",
    "dom": "tasks",
    "why": "Separates acute from chronic prostatitis"
   },
   {
    "who": "pt",
    "text": "No, this came on over a few days."
   },
   {
    "who": "dr",
    "text": "I ask everyone this with these symptoms, because some infections caught through sex look very similar: is there any chance of a sexually transmitted infection?",
    "dom": "tasks",
    "why": "Non-judgemental sexual history to decide on STI testing"
   },
   {
    "who": "pt",
    "text": "I don’t think so, but test me if it helps."
   },
   {
    "who": "dr",
    "text": "Any medical problems, regular medicines or allergies to antibiotics?",
    "dom": "tasks",
    "why": "Checks allergies and interactions before prescribing"
   },
   {
    "who": "pt",
    "text": "No, nothing."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You mentioned a water infection. What were you expecting today?",
    "dom": "rto",
    "why": "Explores expectation behind the request"
   },
   {
    "who": "pt",
    "text": "A few days of tablets. I just want it sorted quickly."
   },
   {
    "who": "dr",
    "text": "That makes sense. Is anything else worrying you about it, for example the pain when you ejaculate?",
    "dom": "rto",
    "why": "Gently opens the embarrassing concern"
   },
   {
    "who": "pt",
    "text": "A bit. I didn’t know if that meant something serious."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s what I think. The pain between your legs and in your back, the burning, going often, pain on ejaculating and the fever all fit an infection of the prostate gland, called acute prostatitis. It explains the ejaculation pain, so that isn’t a separate worry. It’s more than a simple water infection, and it needs a longer course of treatment than cystitis would.",
    "dom": "tasks",
    "why": "Clear working diagnosis linked to his symptoms and concern"
   },
   {
    "who": "pt",
    "text": "Longer? How long?"
   },
   {
    "who": "dr",
    "text": "Usually two weeks, and then we review. The prostate is harder for antibiotics to reach, and stopping early risks it coming back or grumbling on.",
    "dom": "tasks",
    "why": "Explains NG110 14-day course and why"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Because you have a fever I need to check you properly today, not just over video. I’d like you to come in this afternoon so we can check your temperature, pulse and blood pressure, feel your tummy, and gently examine the prostate with a chaperone offered. Please bring a urine sample so we can send it to the lab before you start antibiotics.",
    "dom": "tasks",
    "why": "Same-day face-to-face: observations, examination, MSU before antibiotics"
   },
   {
    "who": "pt",
    "text": "Can you not just send the prescription?"
   },
   {
    "who": "dr",
    "text": "I understand you wanted to avoid a trip in. The honest reason is that if your observations show the infection is spreading into your blood, you’d need hospital treatment through a drip, and I can’t tell that on a screen. If everything is stable, you’ll go home with tablets today.",
    "dom": "rto",
    "why": "Negotiates the visit with a transparent reason"
   },
   {
    "who": "pt",
    "text": "Okay, I can get there."
   },
   {
    "who": "dr",
    "text": "For the antibiotic, there are two main options. One group, like ciprofloxacin, gets into the prostate well, but the medicines regulator now asks us to use it only when other antibiotics aren’t suitable, because of rare but serious side effects on tendons, nerves and mood. The other option is trimethoprim. I’ll choose with you when I’ve seen you and the urine test, and we can switch if the lab result points elsewhere.",
    "dom": "tasks",
    "why": "NG110 options with MHRA January 2024 restriction; culture-guided"
   },
   {
    "who": "pt",
    "text": "I didn’t know antibiotics could do that."
   },
   {
    "who": "dr",
    "text": "It’s uncommon, and I’ll tell you exactly what to watch for if you do need it. Paracetamol or ibuprofen will help the pain. I’ll also send the test for chlamydia and gonorrhoea. One thing I won’t do now is a PSA prostate blood test: infection pushes it up and it would give a misleading result.",
    "dom": "tasks",
    "why": "Analgesia, STI test, avoids PSA in acute infection"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Two things mean go straight to A&E: if you can’t pass urine at all, or you get shaking, feel faint, confused or much more unwell. You should feel better within two days of starting antibiotics. If not, ring us that day, as that would also mean hospital. Can you tell me back the plan?",
    "dom": "gs",
    "why": "Specific safety-net: retention, sepsis, no improvement at 48 hours"
   },
   {
    "who": "pt",
    "text": "Come in this afternoon with a wee sample. Two weeks of tablets. A&E if I can’t wee or get really poorly, call if I’m not better in two days."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll ring you with the urine result and see you again at two weeks to decide whether to stop or carry on. If the pain were to carry on for months afterwards, that’s a different condition we’d manage differently, so do come back.",
    "dom": "gs",
    "why": "Results, 14-day review, chronic pelvic pain signposted"
   },
   {
    "who": "pt",
    "text": "Thanks, doctor. Glad I didn’t just get three days of tablets."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Private setting checked; open question; let him describe the pain, urinary symptoms and fever fully.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "The wish for a quick fix; embarrassment about ejaculatory pain; sexual history asked without judgement.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “feverish and rough” and “hurts when I ejaculate” and linked both to prostatitis.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a simple water infection), concern (painful ejaculation meaning something serious), expectation (a few days of tablets).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Same-day face-to-face: observations, abdominal and gentle prostate examination with chaperone; MSU before antibiotics; STI NAAT; no PSA.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Acute prostatitis vs lower UTI, urethritis or STI, epididymo-orchitis, chronic pelvic pain syndrome.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened retention, sepsis (NG253 features) and haematuria; recognised that hospital referral applies to sepsis, retention or abscess.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Acute bacterial prostatitis, more than simple cystitis.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "14-day course per NG110; fluoroquinolone only if other options inappropriate (MHRA January 2024), counselling if used; analgesia; culture-guided.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Allergies and medicines checked; the wish to avoid a visit acknowledged; plan for chronic symptoms if they follow.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "A&E for retention or sepsis signs; ring if not improving by 48 hours; results call; review at 14 days to stop or extend.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Owen Beckett",
    "age": "44 years · male",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "Nil recorded"
    ],
    "allergy": "NKDA",
    "recent": "No previous consultations for urinary or sexual health problems.",
    "reason": "Video consultation booked this morning: “water infection, need antibiotics, feel rough”."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Privacy and opening",
     "d": "Check he can talk freely. Acknowledge that he sounds unwell and that some symptoms are hard to say."
    },
    {
     "t": "1–5",
     "h": "Red flags first",
     "d": "Retention, sepsis features, haematuria, testicular pain, discharge, chronic pain, sexual history, allergies."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "His “water infection” model, the ejaculatory pain worry, and his wish for quick tablets."
    },
    {
     "t": "6–8",
     "h": "Name it",
     "d": "Acute prostatitis, more than simple cystitis; why two weeks rather than a few days."
    },
    {
     "t": "8–12",
     "h": "Plan and close",
     "d": "Same-day face-to-face with observations and urine. NG110 options with the MHRA restriction. No PSA. Specific A&E triggers, 48-hour check, 14-day review."
    }
   ],
   "wordPics": {
    "fail": "Prescribes three days of trimethoprim or nitrofurantoin over video without urine culture or observations; never asks about retention or sepsis features; orders a PSA; no specific safety-net.",
    "pass": "Recognises acute prostatitis, arranges same-day observations and urine culture, prescribes a 14-day course per NG110, screens retention and sepsis, and tells him when to go to A&E.",
    "exc": "All of the above, plus: explains why video is not enough and negotiates the visit; weighs NG110 first choices against the MHRA January 2024 fluoroquinolone restriction and counsels accordingly; links the ejaculatory pain to the diagnosis to relieve his worry; defers PSA with a reason; teach-back; 48-hour and 14-day review points."
   },
   "avoid": [
    {
     "dont": "“Sounds like a water infection, I’ll send three days of antibiotics to the pharmacy.”",
     "instead": "“This fits an infection of the prostate. It needs a check today and a two-week course.”",
     "why": "Undertreats a prostatic infection and skips the sepsis and retention assessment."
    },
    {
     "dont": "“Cipro is the best one, it gets into the prostate.”",
     "instead": "“The regulator asks us to use that group only when other antibiotics aren’t suitable. I’ll choose with you after seeing the urine result.”",
     "why": "Ignores the MHRA January 2024 restriction and the counselling duty."
    },
    {
     "dont": "“Let’s check your PSA while we’re at it.”",
     "instead": "“I won’t do a PSA now: infection pushes it up and gives a misleading result.”",
     "why": "A falsely raised PSA leads to unnecessary anxiety and referral."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Wanting a quick fix",
     "t": "Wanting tablets without a visit is common. A same-day visit and a clear two-week plan are easier to accept when the reason is explained."
    },
    {
     "h": "Embarrassment",
     "t": "Ejaculatory pain and perineal symptoms are often under-reported. Asking gently and linking them to the diagnosis relieves an unspoken worry."
    }
   ],
   "legal": [
    {
     "h": "Chaperones",
     "t": "GMC Intimate examinations and chaperones (2024): offer a chaperone for the rectal examination and record the offer and his response."
    },
    {
     "h": "Remote prescribing",
     "t": "GMC Good practice in proposing, prescribing, providing and managing medicines and devices (2021): prescribe remotely only when you have enough information to do so safely. A febrile man with possible prostatitis needs observations first."
    }
   ],
   "professional": [
    {
     "h": "Antimicrobial stewardship and drug safety",
     "t": "Follow NICE NG110 for choice and duration; apply the MHRA January 2024 fluoroquinolone restriction and record why a fluoroquinolone was or was not used."
    },
    {
     "h": "Fit note",
     "t": "If he works and is unfit to, he can self-certify for the first 7 days; a fit note can be issued after that if needed."
    }
   ],
   "community": [
    {
     "h": "Sexual health services",
     "t": "Local sexual health clinics offer confidential STI testing and partner notification if a test is positive."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Unable to pass urine or a painful distended bladder (acute retention)",
     "Rigors, fainting, confusion, breathlessness or very high fever (possible sepsis)",
     "Not improving 48 hours after starting antibiotics",
     "Testicular pain or swelling",
     "Visible haematuria"
    ],
    "psychosocial": [
     "The wish for a quick prescription without a visit",
     "Embarrassment about ejaculatory pain",
     "Sexual health context, asked routinely and without judgement"
    ],
    "ice": [
     "Idea: “just a water infection”",
     "Concern: whether painful ejaculation means something serious",
     "Expectation: a few days of antibiotics without having to come in"
    ]
   },
   "diagnosis": "“The pain between your legs and in your back, the burning, going often, pain on ejaculating and the fever point to an infection of the prostate gland, called acute prostatitis. It’s more than a simple water infection.”",
   "diagnosisLay": "“The prostate is a small gland tucked under the bladder, like a sponge around the water pipe. When it’s infected it swells and aches, and antibiotics find it harder to soak into, which is why the course is longer.”",
   "management": {
    "reflectIce": "“You expected a few days of tablets like a water infection. This is a bit different, so I want to check you today and give you a proper two-week course. The pain when you ejaculate is part of the same infection.”",
    "psychosocial": "Acknowledge that he wanted to avoid a visit; offer a same-day slot that suits him; fit note if needed; address the embarrassment by explaining the symptom.",
    "sharedPlan": [
     "Same-day face-to-face: observations with NG253 risk assessment, abdominal and gentle prostate examination (chaperone offered)",
     "MSU for culture before antibiotics; chlamydia and gonorrhoea NAAT",
     "NICE NG110 14-day course: ciprofloxacin or ofloxacin, or trimethoprim if a fluoroquinolone is not appropriate; fluoroquinolone only when other options are inappropriate (MHRA January 2024), with counselling",
     "Paracetamol with or without low-dose weak opioid, or ibuprofen",
     "No PSA now; defer at least 6 weeks if indicated later"
    ],
    "safetyNet": [
     "A&E if unable to pass urine, rigors, faintness, confusion or rapid worsening",
     "Ring the same day if not improving 48 hours after starting antibiotics",
     "Results call; review at 14 days to stop or continue a further 14 days",
     "Return if pelvic pain persists for months after the infection"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Prostatitis protocol",
    "s": "NICE NG110 · MHRA fluoroquinolone advice",
    "href": "management/prostatitis.html"
   },
   {
    "ic": "💠",
    "t": "UTI in men protocol",
    "s": "NICE NG109 · when it is not simple cystitis",
    "href": "management/uti-men.html"
   },
   {
    "ic": "🗺️",
    "t": "Fever in adults pathway",
    "s": "Visual algorithm · sepsis risk",
    "href": "algorithms/fever-adults.html"
   },
   {
    "ic": "🗺️",
    "t": "Scrotal pain pathway",
    "s": "Visual algorithm · epididymo-orchitis",
    "href": "algorithms/scrotal-pain.html"
   },
   {
    "ic": "💠",
    "t": "Chlamydia protocol",
    "s": "Testing · treatment · partner notification",
    "href": "management/chlamydia.html"
   }
  ],
  "pitfalls": {
   "intro": "The trap is agreeing to his framing. A febrile man with perineal pain is not a three-day cystitis prescription over video. Marks sit in the red-flag screen, the same-day assessment and an evidence-based course.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing a 3-day or 7-day lower-UTI course.",
     "why": "NG110 treats acute prostatitis for 14 days with review; a short course risks relapse or chronic infection.",
     "fix": "“This needs a two-week course and a review.”"
    },
    {
     "dom": "tasks",
     "fail": "Never asking whether he can pass urine or about rigors and faintness.",
     "why": "Retention and sepsis are the reasons for hospital referral in NG110 and must be screened.",
     "fix": "Ask retention first, then sepsis features, out loud."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing remotely with no observations or urine culture.",
     "why": "A fever needs NG253 observations; NG110 asks for an MSU before antibiotics.",
     "fix": "Arrange a same-day face-to-face and ask him to bring urine."
    },
    {
     "dom": "tasks",
     "fail": "Choosing ciprofloxacin reflexively with no counselling.",
     "why": "MHRA January 2024: fluoroquinolones only when other recommended antibiotics are inappropriate; patients must know what to report.",
     "fix": "Discuss both NG110 options, record the reason, and counsel on tendon, nerve and mood effects if used."
    },
    {
     "dom": "rto",
     "fail": "Ignoring the painful ejaculation because it is awkward.",
     "why": "It is his hidden worry and part of the diagnosis.",
     "fix": "“That pain is part of the same prostate infection, not a separate problem.”"
    },
    {
     "dom": "gs",
     "fail": "“Come back if it’s not better.”",
     "why": "Vague safety-netting is standard failing feedback.",
     "fix": "A&E for retention or sepsis signs; ring if not better by 48 hours; review at 14 days."
    }
   ]
  }
 },
 "renal-colic": {
  "stem": {
   "name": "Niall Hennessy",
   "age": "43-year-old man",
   "pmh": [
    "No past history recorded in the case",
    "No previous similar episodes"
   ],
   "meds": [
    "Not specified in the case: check the repeat record"
   ],
   "allergy": "None recorded",
   "recent": "Urgent video request today: sudden severe colicky left loin pain radiating to the groin, nausea and vomiting, possible blood in the urine.",
   "reason": "“It’s agony, it comes in waves and shoots down to my groin. I can’t keep still.”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG118 Renal and ureteric stones: assessment and management (2019) · [2] NICE QS195 Renal and ureteric stones (2020) · [3] NICE NG253 Suspected sepsis in people aged 16 and over · [4] MHRA Drug Safety Update June 2013 (diclofenac: new contraindications and warnings) · [5] BNF",
   "summary": "Classic left ureteric colic in a restless man with haematuria and vomiting. Relieve pain with an NSAID by any route, arrange low-dose non-contrast CT within 24 hours, and ask actively about fever and vascular disease so an infected obstructed kidney or a leaking aneurysm is not missed. Vomiting with uncontrolled pain means he needs same-day hospital assessment.",
   "points": [
    {
     "h": "The pattern",
     "t": "Sudden severe colicky loin pain radiating to the groin, restlessness (people with peritonitis lie still), nausea or vomiting and haematuria. A normal urine dip does not exclude a stone. Ask about fever, previous stones, a single or transplanted kidney, and urine output."
    },
    {
     "h": "Pain relief",
     "t": "NG118 [1]: offer an NSAID by any route as first-line analgesia for suspected renal colic. Offer intravenous paracetamol if NSAIDs are contraindicated or not enough, and consider opioids if both are contraindicated or not enough. Do not offer antispasmodics. Diclofenac is contraindicated in established ischaemic heart disease, peripheral arterial disease, cerebrovascular disease and congestive heart failure [4]; check NSAID cautions in the BNF [5]."
    },
    {
     "h": "Imaging",
     "t": "NG118 [1]: urgent low-dose non-contrast CT within 24 hours of presentation for adults with suspected renal colic; ultrasound instead in pregnancy, and first-line in children and young people. QS195 [2] sets CT within 24 hours as a quality statement. Check renal function, FBC and CRP."
    },
    {
     "h": "Must not miss",
     "t": "A leaking abdominal aortic aneurysm can present as loin or back pain, especially in older people with vascular risk factors: think of it with collapse, hypotension or a pulsatile mass. Fever or rigors with an obstructed kidney is a urological emergency needing urgent decompression; assess for sepsis using NG253 [3]. In women, always consider ectopic pregnancy."
    },
    {
     "h": "Same-day hospital referral",
     "t": "Refer when pain is not controlled or vomiting stops oral treatment, with any sign of infection or sepsis, reduced kidney function, a single or transplanted kidney, suspected bilateral obstruction, or diagnostic doubt. Otherwise, many small stones pass with analgesia and follow-up. NG118 [1]: consider an alpha-blocker for distal ureteric stones under 10 mm (off-label)."
    },
    {
     "h": "Prevention",
     "t": "NG118 [1]: advise adults with stones to drink 2.5 to 3 litres of water a day and keep a normal calcium intake rather than restricting it. Stone analysis guides further prevention."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Niall, it’s Dr Morgan. I can see you’re in a lot of pain. Tell me what’s happening.",
    "dom": "rto",
    "why": "Acknowledges pain and opens"
   },
   {
    "who": "pt",
    "text": "This came on suddenly in my left side and it’s agony. It comes in waves and shoots down to my groin. I can’t keep still, I’m pacing. I feel sick, and I think there was blood in my wee. I’ve never had anything like it."
   },
   {
    "who": "dr",
    "text": "I’m sorry, that sounds awful. I’ll keep this quick and focused so we can get you pain relief. Is that okay?",
    "dom": "gs",
    "why": "Prioritises; keeps consultation brief and targeted"
   },
   {
    "who": "pt",
    "text": "Please."
   },
   {
    "phase": "Focused history",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When did it start, and have you been sick?",
    "dom": "tasks",
    "why": "Onset and vomiting"
   },
   {
    "who": "pt",
    "text": "A few hours ago. I’ve been sick, and I can’t keep anything down."
   },
   {
    "who": "dr",
    "text": "Have you felt hot or shivery, or had shaking attacks?",
    "dom": "tasks",
    "why": "Screens for infection with obstruction"
   },
   {
    "who": "pt",
    "text": "No shivers. I don’t think I’m hot."
   },
   {
    "who": "dr",
    "text": "Are you still passing urine? Any burning?",
    "dom": "tasks",
    "why": "Checks urine output and infection symptoms"
   },
   {
    "who": "pt",
    "text": "Yes, a bit. No burning. It looked pinkish."
   },
   {
    "who": "dr",
    "text": "Has any doctor told you that you have one kidney, kidney problems, or problems with your heart or circulation? Any asthma or stomach ulcers?",
    "dom": "tasks",
    "why": "Single kidney, vascular history, NSAID contraindications"
   },
   {
    "who": "pt",
    "text": "No, nothing like that that I know of."
   },
   {
    "who": "dr",
    "text": "Is the pain in your tummy or back as well, or have you felt faint or collapsed at any point?",
    "dom": "tasks",
    "why": "Screens for a leaking aneurysm and peritonism"
   },
   {
    "who": "pt",
    "text": "No, it’s the side and down to the groin. Not faint, just awful."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What have you been thinking this might be?",
    "dom": "rto",
    "why": "Elicits ideas"
   },
   {
    "who": "pt",
    "text": "I wondered if it’s a kidney stone. But the blood scared me. I just want the pain to stop and to know what it is."
   },
   {
    "who": "dr",
    "text": "That’s understandable. Blood in the urine is common with a stone, but I’ll make sure it gets properly checked.",
    "dom": "rto",
    "why": "Responds to the specific concern"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I think you’re most likely passing a kidney stone down the tube from the kidney to the bladder. The waves of pain, not being able to keep still, and the blood all fit. Other conditions can look similar, and your answers make those less likely, but I can’t examine you on video, so you need to be seen in person.",
    "dom": "tasks",
    "why": "Names the likely diagnosis, notes mimics considered and the limits of video"
   },
   {
    "who": "pt",
    "text": "So what happens now?"
   },
   {
    "who": "dr",
    "text": "The best painkiller for this is an anti-inflammatory, and because you can’t keep tablets down it needs to go in by injection or suppository. You also need a special scan within 24 hours to see the stone and whether it’s blocking the kidney.",
    "dom": "tasks",
    "why": "NSAID by non-oral route (NG118) and CT within 24 hours"
   },
   {
    "who": "pt",
    "text": "Can’t I just have something at home?"
   },
   {
    "who": "dr",
    "text": "Not today, I’m afraid. Because you’re being sick, the pain isn’t controlled, and you need the scan quickly, the safest place is the hospital’s same-day team. They can give strong pain relief, check your kidneys and blood, and do the scan.",
    "dom": "tasks",
    "why": "Recognises referral criteria: uncontrolled pain and vomiting"
   },
   {
    "who": "pt",
    "text": "Okay. That makes sense."
   },
   {
    "phase": "Arranging care",
    "clock": "8–10 min",
    "who": "dr",
    "text": "I’ll call the hospital team now and send them my notes. Please don’t drive. Is there someone who can take you straight away? If not, I’ll arrange transport.",
    "dom": "gs",
    "why": "Handover and safe transport"
   },
   {
    "who": "pt",
    "text": "I’ll find someone to take me now."
   },
   {
    "who": "dr",
    "text": "Good. Take a list of any medicines you take, and if you can, collect a urine sample in a clean container.",
    "dom": "gs",
    "why": "Practical preparation"
   },
   {
    "phase": "Safety-net and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "If before you get there you develop a fever or shivering, the pain moves into your back or tummy and you feel faint, or you collapse, call 999 straight away.",
    "dom": "tasks",
    "why": "Specific safety-net for sepsis and aneurysm"
   },
   {
    "who": "pt",
    "text": "Right."
   },
   {
    "who": "dr",
    "text": "Many stones pass on their own over a few days to weeks. Once this is over, drinking two and a half to three litres of water a day helps prevent more, and if you catch the stone, we can send it for analysis. Can you tell me what you’re going to do now?",
    "dom": "rto",
    "why": "Realistic expectations, prevention, teach-back"
   },
   {
    "who": "pt",
    "text": "Get someone to take me to hospital now, don’t drive, bring a urine sample, and call 999 if I get a fever or feel faint."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll call you tomorrow to see how you got on and what the scan showed.",
    "dom": "gs",
    "why": "Follow-up arranged"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let him describe the pain; acknowledged how severe it was; kept the consultation focused.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Who can take him, not driving, practical barriers to getting to hospital.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the vomiting (cannot take oral analgesia) and the blood in the urine as a worry.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (kidney stone), concern (the blood), expectation (pain relief and an answer).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Honest about video limits; urine sample; CT within 24 hours; renal function, FBC and CRP arranged through hospital.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Ureteric colic versus leaking AAA, infected obstructed kidney, pyelonephritis, other acute abdomen.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about fever, rigors, collapse, back or abdominal pain, single kidney and vascular history.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named likely ureteric stone and explained why the other causes are less likely.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "NSAID by a non-oral route as first-line (NG118); same-day hospital assessment because of vomiting and uncontrolled pain.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Checked NSAID contraindications and cardiovascular history (MHRA June 2013 for diclofenac).",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 triggers for fever, faintness or collapse; call next day; hydration and stone analysis for prevention.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Niall Hennessy",
    "age": "43 years · male",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "Check repeat record"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Urgent video request: sudden severe left loin-to-groin pain, vomiting, possible haematuria.",
    "reason": "“It’s agony. I can’t keep still.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Acknowledge",
     "d": "Recognise severe pain; agree a short, focused consultation."
    },
    {
     "t": "1–5",
     "h": "Discriminating history",
     "d": "Onset, vomiting, fever or rigors, urine output, single kidney, vascular history, NSAID contraindications, faintness or back and abdominal pain."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Stone idea, worry about blood, wants pain relief and an answer."
    },
    {
     "t": "6–10",
     "h": "Explain and act",
     "d": "Likely stone; NSAID by non-oral route; CT within 24 hours; same-day hospital as vomiting and uncontrolled pain; handover; no driving."
    },
    {
     "t": "10–12",
     "h": "Close",
     "d": "999 triggers, stone passage, prevention, teach-back, call tomorrow."
    }
   ],
   "wordPics": {
    "fail": "Anchors on a stone without asking about fever or collapse; prescribes oral tablets to a vomiting patient; claims to examine the abdomen on video; no imaging plan; vague safety-net.",
    "pass": "Recognises ureteric colic, knows NSAID is first-line, arranges same-day assessment and CT, and safety-nets for fever.",
    "exc": "All of the above, plus: explicitly screens for sepsis and a leaking aneurysm; checks NSAID contraindications; explains why hospital is needed today (vomiting, pain, scan within 24 hours); is honest about video limits; hands over; gives prevention advice and teach-back."
   },
   "avoid": [
    {
     "dont": "“I’ll send some co-codamol and an anti-sickness tablet to the pharmacy.”",
     "instead": "“You can’t keep tablets down, so you need pain relief by injection or suppository and a scan today.”",
     "why": "Oral treatment fails in a vomiting patient, and NG118 makes an NSAID first-line."
    },
    {
     "dont": "“It’s definitely a kidney stone.”",
     "instead": "“A stone is most likely. I’ve asked about fever and fainting because other conditions can look similar.”",
     "why": "Anchoring risks missing an infected obstructed kidney or aneurysm."
    },
    {
     "dont": "“Your tummy feels soft.”",
     "instead": "“I can’t examine you on video, so I want you seen in person.”",
     "why": "Over-claiming a remote examination is unsafe."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Getting there",
     "t": "He is in severe pain and vomiting. He must not drive; arrange a lift or transport."
    },
    {
     "h": "Work",
     "t": "Time off while a stone passes may be needed; self-certification covers the first 7 days, then a fit note."
    }
   ],
   "legal": [
    {
     "h": "Fit notes",
     "t": "A fit note can be issued after 7 days if he is still unfit for work, including by the hospital team."
    }
   ],
   "professional": [
    {
     "h": "Remote assessment",
     "t": "Be honest about what video cannot assess (abdomen, pulses, vital signs). Document the negative answers to fever, collapse and vascular history and the reason for same-day referral."
    },
    {
     "h": "Safe prescribing",
     "t": "Check NSAID contraindications and cardiovascular risk before any NSAID (MHRA June 2013 for diclofenac). Opioids are not first-line (NG118)."
    }
   ],
   "community": [
    {
     "h": "Prevention",
     "t": "Hydration advice (NG118) and stone analysis after passage; community pharmacy can support with analgesia questions."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Fever, rigors or feeling very unwell: infected obstructed kidney",
     "Collapse, faintness, back or abdominal pain, especially with vascular risk: leaking aneurysm",
     "Reduced urine output or known single kidney",
     "Vomiting preventing oral analgesia; pain not controlled"
    ],
    "psychosocial": [
     "Who can take him to hospital",
     "Work and time off"
    ],
    "ice": [
     "Idea: a kidney stone",
     "Concern: the blood in his urine",
     "Expectation: pain relief and a diagnosis"
    ]
   },
   "diagnosis": "“The pain coming in waves from your side to your groin, not being able to keep still, and blood in the urine fit a kidney stone moving down the tube to the bladder.”",
   "diagnosisLay": "“A stone is like a small grit trying to squeeze down a narrow straw. Each squeeze of the tube gives a wave of pain. Most small stones get through on their own.”",
   "management": {
    "reflectIce": "“You wanted the pain stopped and to know what it is. Hospital today can do both: proper pain relief and a scan to see the stone.”",
    "psychosocial": "Arrange a lift, not driving, and a follow-up call.",
    "sharedPlan": [
     "Same-day hospital assessment: NSAID by injection or suppository, antiemetic",
     "Low-dose non-contrast CT within 24 hours (NG118)",
     "Renal function, FBC, CRP, urine",
     "Prevention: 2.5 to 3 litres of water a day; stone analysis"
    ],
    "safetyNet": [
     "999 for fever with rigors, faintness, collapse or new back or abdominal pain",
     "GP call next day"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Renal colic pathway",
    "s": "Visual algorithm · NG118",
    "href": "algorithms/renal-colic.html"
   },
   {
    "ic": "🗺️",
    "t": "Haematuria pathway",
    "s": "Visible and non-visible blood",
    "href": "algorithms/haematuria.html"
   },
   {
    "ic": "🗺️",
    "t": "Abdominal pain pathway",
    "s": "Acute abdomen · mimics",
    "href": "algorithms/abdominal-pain.html"
   },
   {
    "ic": "📋",
    "t": "Analgesia in primary care",
    "s": "Case walkthrough · NSAID safety",
    "href": "../cases/analgesia-primary-care.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by candidates who anchor on “kidney stone” and send oral tablets. The marks go to screening for the dangerous mimics, choosing the right analgesia route, and arranging CT within 24 hours.",
   "items": [
    {
     "dom": "tasks",
     "fail": "No question about fever or rigors.",
     "why": "An infected obstructed kidney is an emergency needing decompression.",
     "fix": "Ask directly and put fever in the safety-net."
    },
    {
     "dom": "tasks",
     "fail": "Not considering a leaking aneurysm.",
     "why": "It can mimic loin pain and is rapidly fatal, more so in older people with vascular risk.",
     "fix": "Ask about collapse, faintness, back or abdominal pain and vascular history."
    },
    {
     "dom": "tasks",
     "fail": "Oral analgesia for a vomiting patient, or opioid first.",
     "why": "NG118: NSAID by any route first-line; the route must work.",
     "fix": "Non-oral NSAID and same-day assessment."
    },
    {
     "dom": "tasks",
     "fail": "Routine ultrasound or no imaging plan.",
     "why": "NG118: low-dose non-contrast CT within 24 hours in adults.",
     "fix": "Name the scan and the timeframe."
    },
    {
     "dom": "gs",
     "fail": "Claiming findings on video.",
     "why": "Examination is not possible remotely.",
     "fix": "Say what you cannot assess and act on the history."
    },
    {
     "dom": "rto",
     "fail": "Ignoring his worry about the blood.",
     "why": "Unanswered concerns undermine the plan.",
     "fix": "Acknowledge it and say it will be checked."
    }
   ]
  }
 },
 "sore-throat-stewardship": {
  "stem": {
   "name": "Aaron Pryce",
   "age": "29-year-old man",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "Not recorded in the booking note",
   "recent": "No recent consultations recorded in the booking note.",
   "reason": "Video consultation: “Sore throat for three days. I always need antibiotics for these.”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG84 Sore throat (acute): antimicrobial prescribing (2018) · [2] BNF: phenoxymethylpenicillin, clarithromycin, paracetamol, ibuprofen · [3] NICE NG15 Antimicrobial stewardship: systems and processes (2015) · [4] NICE NG253 Suspected sepsis in people aged 16 or over (2025) · [5] GOV.UK: employee self-certification for the first 7 days of sickness",
   "summary": "A 3-day sore throat with mild fever and cough or cold symptoms in a well adult is most likely viral and will settle in about a week. Screen for red flags, score it with FeverPAIN or Centor, and use NICE NG84 to decide between no antibiotic, a back-up prescription or an immediate course. The core skill is a respectful negotiation that leaves him informed, comfortable and safe, whatever the outcome.",
   "points": [
    {
     "h": "Score it",
     "t": "FeverPAIN: 1 point each for Fever in the past 24 hours, Purulence, Attended rapidly (3 days or less), severely Inflamed tonsils and No cough or coryza. Centor: 1 point each for tonsillar exudate, tender anterior cervical nodes or lymphadenitis, history of fever over 38°C and absence of cough."
    },
    {
     "h": "What NG84 advises",
     "t": "NICE NG84 [1]: FeverPAIN 0 or 1, or Centor 0 to 2: no antibiotic. FeverPAIN 2 or 3: consider no antibiotic or a back-up prescription. FeverPAIN 4 or 5, or Centor 3 or 4: consider an immediate antibiotic or a back-up prescription. A back-up prescription is used if symptoms have not started to improve within 3 to 5 days or get significantly worse."
    },
    {
     "h": "Natural course",
     "t": "NICE NG84 [1]: acute sore throat usually lasts about a week, and most people get better in that time without antibiotics. Antibiotics make little difference to how long symptoms last, and they bring side-effects and resistance."
    },
    {
     "h": "Self-care",
     "t": "NICE NG84 [1]: paracetamol or ibuprofen for pain or fever (dose per BNF [2]), adequate fluids, and medicated lozenges containing a local anaesthetic, an NSAID or an antiseptic may help a little. There is no evidence for non-medicated lozenges or mouthwashes."
    },
    {
     "h": "If an antibiotic is needed",
     "t": "NICE NG84 [1]: phenoxymethylpenicillin for 5 to 10 days first choice; clarithromycin (or erythromycin in pregnancy) for penicillin allergy. Doses per BNF [2]."
    },
    {
     "h": "Red flags",
     "t": "Drooling, inability to swallow saliva, stridor or breathing difficulty (epiglottitis or airway compromise); trismus, unilateral swelling, uvular deviation or muffled voice (quinsy); severe systemic illness (NICE NG253 [4]); a sore throat on carbimazole, clozapine, DMARDs or chemotherapy (check FBC for neutropenia). NICE NG84 [1]: refer to hospital for severe systemic infection or severe suppurative complications."
    },
    {
     "h": "Work",
     "t": "GOV.UK [5]: employees can self-certify for the first 7 days of sickness; a fit note is needed after that. Antibiotics are not a return-to-work ticket. NICE NG15 [3] supports explaining the reasons for not prescribing and giving written information."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Pryce, I’m Dr Ahmed. What can I do for you today?",
    "dom": "rto",
    "why": "Open start"
   },
   {
    "who": "pt",
    "text": "I’ve got a sore throat again, had it three days. I always end up needing antibiotics for these, so can you just write me a course? I’ve got a busy week and I need to get back to work. I can’t be hanging around being ill."
   },
   {
    "who": "dr",
    "text": "Sounds miserable, especially with a busy week. I’d like to check a few things and have a look at your throat on camera, then we’ll decide together what will help most. Is that okay?",
    "dom": "gs",
    "why": "Acknowledges the request and agrees an agenda"
   },
   {
    "who": "pt",
    "text": "Yeah, fine."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "First, a few safety questions. Can you swallow your own saliva, and are you drooling at all? Any noisy breathing or trouble breathing?",
    "dom": "tasks",
    "why": "Airway red flags first"
   },
   {
    "who": "pt",
    "text": "No, I can swallow. It’s just sore."
   },
   {
    "who": "dr",
    "text": "Is it much worse on one side, any trouble opening your mouth, or has your voice gone muffled?",
    "dom": "tasks",
    "why": "Quinsy features"
   },
   {
    "who": "pt",
    "text": "No, both sides the same. Voice is fine."
   },
   {
    "who": "dr",
    "text": "Have you had a temperature? And any cough, runny nose or cold symptoms?",
    "dom": "tasks",
    "why": "FeverPAIN and Centor items"
   },
   {
    "who": "pt",
    "text": "Bit feverish last night. I’ve got a cough and a bit of a runny nose."
   },
   {
    "who": "dr",
    "text": "Could you open wide and point your camera at your throat with the torch on?",
    "dom": "tasks",
    "why": "Remote look for purulence and inflamed tonsils"
   },
   {
    "who": "pt",
    "text": "Like this?"
   },
   {
    "who": "dr",
    "text": "Perfect. It looks red, but I can’t see pus or very swollen tonsils. Are you eating and drinking okay? Do you take any regular medicines, or have any illness that affects your immune system? Any allergies?",
    "dom": "tasks",
    "why": "Hydration, immunosuppression and agranulocytosis risk, allergies"
   },
   {
    "who": "pt",
    "text": "Eating a bit less, drinking fine. No medicines, no allergies."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said you always end up needing antibiotics. Tell me what’s happened before, and what you’re hoping they’ll do this time.",
    "dom": "rto",
    "why": "Explores the belief and expectation"
   },
   {
    "who": "pt",
    "text": "I’ve had them before and I got better. I need to be at work this week. I can’t afford to be off."
   },
   {
    "who": "dr",
    "text": "So the real worry is work and getting better fast. That makes complete sense. Let me tell you what I’m finding.",
    "dom": "rto",
    "why": "Reflects the concern behind the request"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "The good news is there’s nothing dangerous going on. We use a score called FeverPAIN to judge how likely a bacterial infection is. You get a point for the fever and one for coming in early, but the cough and runny nose, and no pus on your tonsils, point towards a virus. Your score is 2, which is on the low side.",
    "dom": "tasks",
    "why": "Explains the score out loud (NICE NG84)"
   },
   {
    "who": "pt",
    "text": "But the antibiotics worked last time."
   },
   {
    "who": "dr",
    "text": "It may feel like that, but most sore throats get better within about a week whether or not you take antibiotics. For a throat like this they make very little difference to how quickly you feel better, and they can cause diarrhoea, thrush and rashes, and make future infections harder to treat. I’m not trying to hold anything back. I just want what will actually help.",
    "dom": "tasks",
    "why": "Natural course, limited benefit and harms, framed without lecturing"
   },
   {
    "who": "pt",
    "text": "So what am I meant to do?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Two things. First, feeling better now: paracetamol or ibuprofen, taken regularly as the pack says, plenty of fluids, and a medicated lozenge can take the edge off. Second, because your score is in the middle range, I could give you a back-up prescription for penicillin. You’d only collect it if you’re not starting to improve in 3 to 5 days, or if you get significantly worse. What do you think?",
    "dom": "tasks",
    "why": "Self-care per NG84 and a negotiated back-up prescription"
   },
   {
    "who": "pt",
    "text": "That’s fair, I suppose. At least I’ve got it if I need it."
   },
   {
    "who": "dr",
    "text": "Exactly. If you do use it, it’s penicillin four times a day, and take the whole course. On work, you can self-certify for up to seven days if you need time off, so you don’t need a note from me. Good pain relief will help you judge how you’re feeling day to day.",
    "dom": "tasks",
    "why": "Back-up instructions and honest work advice"
   },
   {
    "who": "pt",
    "text": "Okay. I was expecting to leave with a course, but I get it."
   },
   {
    "who": "dr",
    "text": "I appreciate you hearing me out. Is there anything about this plan that doesn’t sit right with you?",
    "dom": "rto",
    "why": "Checks for residual dissatisfaction respectfully"
   },
   {
    "who": "pt",
    "text": "No, it’s fine."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Can you tell me when you would use the back-up prescription and when you’d need to be seen sooner?",
    "dom": "gs",
    "why": "Teach-back of the back-up plan"
   },
   {
    "who": "pt",
    "text": "Only if I’m not getting better in 3 to 5 days or I get a lot worse. Paracetamol or ibuprofen and fluids till then."
   },
   {
    "who": "dr",
    "text": "Spot on. Get urgent help if you can’t swallow your saliva, start drooling, have trouble breathing, get severe pain on one side with trouble opening your mouth, or feel very unwell with shivering or confusion. If it isn’t settling after about a week, book to see us. I’ll send a leaflet with this plan to your phone.",
    "dom": "gs",
    "why": "Specific red flags, one-week review point and written information (NICE NG15)"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; acknowledged the request and the busy week before assessing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work pressure and money, past experiences with antibiotics, eating and drinking.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I always need antibiotics” and “can’t be off work” and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (antibiotics always cure it), concern (missing work), expectation (an immediate course).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Remote throat look for purulence and tonsil swelling; FeverPAIN scored out loud; no tests needed.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Viral versus streptococcal pharyngitis; quinsy, epiglottitis and neutropenia considered.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about saliva, drooling, breathing, trismus, unilateral pain, voice, systemic illness, immunosuppressing drugs.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named a likely viral sore throat with FeverPAIN 2.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Self-care per NICE NG84; back-up phenoxymethylpenicillin offered as FeverPAIN 2 to 3 allows; allergies checked.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Work concern addressed honestly with self-certification; dissatisfaction checked respectfully.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Teach-back of when to use the back-up script; red flags; review if not settling in about a week; written information.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Aaron Pryce",
    "age": "29 years · male",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "Not recorded",
    "recent": "Sore throat for 3 days, mild fever, cough and runny nose.",
    "reason": "“Just write me a course so I can get back to work.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agree",
     "d": "Acknowledge the request and the busy week; agree to assess first."
    },
    {
     "t": "1–5",
     "h": "Screen and score",
     "d": "Airway and quinsy red flags; fever, cough, coryza; camera look at the tonsils; medicines, immunosuppression, allergies."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Belief that antibiotics always work; worry about missing work."
    },
    {
     "t": "6–9",
     "h": "Explain",
     "d": "FeverPAIN out loud; likely viral; about a week either way; harms of antibiotics."
    },
    {
     "t": "9–12",
     "h": "Negotiate and close",
     "d": "Self-care; back-up prescription if he wants it; self-certification; teach-back; red flags; written information."
    }
   ],
   "wordPics": {
    "fail": "Prescribes an immediate course on request; or refuses flatly with a lecture; no red-flag screen; no scoring; no safety-net.",
    "pass": "Screens for red flags, uses FeverPAIN or Centor, explains that it is probably viral, offers self-care, and gives a safety-net.",
    "exc": "All of the above, plus: explores why he expects antibiotics and the work pressure behind it; scores out loud using a camera look at the throat; applies NG84 correctly (back-up for FeverPAIN 2 to 3); negotiates rather than refuses; gives accurate self-care and self-certification advice; checks for residual dissatisfaction; uses teach-back and written information."
   },
   "avoid": [
    {
     "dont": "“You don’t need antibiotics, it’s a virus.”",
     "instead": "“Your score is 2, which points to a virus. Here’s what will help, and here’s a back-up if you’re not improving.”",
     "why": "A flat refusal without explanation leaves him dissatisfied and likely to seek antibiotics elsewhere."
    },
    {
     "dont": "“Antibiotics will get you back to work quicker.”",
     "instead": "“For a throat like this they make very little difference to how fast you recover.”",
     "why": "Inaccurate for a likely viral sore throat and reinforces the belief (NICE NG84)."
    },
    {
     "dont": "“Take some throat spray and lozenges.”",
     "instead": "“Paracetamol or ibuprofen, fluids, and a medicated lozenge may help a little.”",
     "why": "NICE NG84 found evidence only for medicated lozenges, not for non-medicated products."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work pressure",
     "t": "Fear of lost pay or letting colleagues down drives antibiotic requests. Acknowledge it and give practical options such as symptom control and self-certification."
    },
    {
     "h": "Health beliefs",
     "t": "Past recovery after antibiotics reinforces the belief that they worked. Explore it rather than dismiss it."
    }
   ],
   "legal": [
    {
     "h": "Self-certification",
     "t": "Employees can self-certify for the first 7 days of sickness (GOV.UK). A fit note is only needed for sickness lasting more than 7 calendar days."
    },
    {
     "h": "Prescribing responsibility",
     "t": "The prescriber is responsible for any antibiotic issued, including a back-up prescription. Record the score, red-flag screen and the reason for the decision."
    }
   ],
   "professional": [
    {
     "h": "Antimicrobial stewardship",
     "t": "NICE NG15 supports shared decisions about antibiotics, explaining reasons and giving written information. Stewardship is part of good clinical care, not rationing."
    },
    {
     "h": "Patient satisfaction",
     "t": "Satisfaction depends more on feeling heard and having a clear plan than on getting a prescription."
    }
   ],
   "community": [
    {
     "h": "Community pharmacy",
     "t": "Pharmacists can advise on pain relief and medicated lozenges, and in England Pharmacy First includes sore throat for eligible adults (per NHS England service criteria)."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Drooling, cannot swallow saliva, stridor or breathing difficulty",
     "Trismus, unilateral swelling, uvular deviation or muffled voice",
     "Severe systemic illness or signs of sepsis",
     "Immunosuppression or drugs that can cause agranulocytosis"
    ],
    "psychosocial": [
     "Work pressure and lost pay",
     "Past experience of antibiotics shaping expectations",
     "Eating less; hydration"
    ],
    "ice": [
     "Idea: antibiotics always sort his throat out",
     "Concern: missing work in a busy week",
     "Expectation: an immediate antibiotic course"
    ]
   },
   "diagnosis": "“This looks like a viral sore throat. Your FeverPAIN score is 2, and the cough and runny nose point that way too.”",
   "diagnosisLay": "“Most sore throats are caused by the same viruses as colds. Your body clears them in about a week. Antibiotics only work on bacteria, so they can’t speed up a virus.”",
   "management": {
    "reflectIce": "“You need to get back to work, and I want you to feel better fast too. Good pain relief will do more for that this week than antibiotics.”",
    "psychosocial": "Respect his time pressure; offer self-certification; check he is not leaving dissatisfied.",
    "sharedPlan": [
     "Paracetamol or ibuprofen (dose per BNF), fluids, medicated lozenges (NICE NG84)",
     "Back-up phenoxymethylpenicillin, to use only if not improving in 3 to 5 days or significantly worse (NICE NG84; dose per BNF)",
     "Self-certify if time off is needed"
    ],
    "safetyNet": [
     "Drooling, cannot swallow saliva, breathing difficulty: urgent help",
     "Severe one-sided pain, trismus, very unwell: same-day review",
     "Not settling after about a week: book review; written information given"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Sore throat",
    "s": "Visual algorithm · NICE NG84",
    "href": "algorithms/sore-throat.html"
   },
   {
    "ic": "📝",
    "t": "Fit notes",
    "s": "Self-certification and fit note rules",
    "href": "fit-note.html"
   },
   {
    "ic": "🗺️",
    "t": "Fever in adults",
    "s": "Visual algorithm · red flags",
    "href": "algorithms/fever-adults.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you can negotiate an antibiotic request respectfully. The trap is either giving in to the demand or refusing so bluntly that the patient leaves unhappy and unsafe.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Not using FeverPAIN or Centor.",
     "why": "NICE NG84 bases the decision on a validated score.",
     "fix": "Ask about fever, cough and coryza, look at the tonsils on camera, and say the score out loud."
    },
    {
     "dom": "tasks",
     "fail": "Skipping the red-flag screen.",
     "why": "Epiglottitis, quinsy and neutropenic sepsis are rare but dangerous.",
     "fix": "Ask about saliva, breathing, one-sided pain, trismus and immunosuppressing medicines first."
    },
    {
     "dom": "tasks",
     "fail": "Refusing a back-up prescription that NG84 allows, or giving an immediate course on demand.",
     "why": "NICE NG84: FeverPAIN 2 or 3, consider no antibiotic or a back-up prescription.",
     "fix": "Offer the back-up option with clear instructions."
    },
    {
     "dom": "tasks",
     "fail": "Inaccurate self-care advice.",
     "why": "NICE NG84 supports paracetamol or ibuprofen and medicated lozenges; there is no evidence for non-medicated products.",
     "fix": "Give specific, evidence-based self-care."
    },
    {
     "dom": "rto",
     "fail": "Lecturing about resistance without hearing his reasons.",
     "why": "He feels judged and dismissed.",
     "fix": "Explore past experience and the work pressure, then explain."
    },
    {
     "dom": "gs",
     "fail": "No clear rule for when to use the back-up prescription.",
     "why": "Unclear instructions lead to immediate use.",
     "fix": "“Only if you’re not starting to improve in 3 to 5 days, or you get much worse.”"
    }
   ]
  }
 },
 "tia-resolved": {
  "stem": {
   "name": "Bernard Cole",
   "age": "69-year-old man",
   "pmh": [
    "Hypertension",
    "Ex-smoker"
   ],
   "meds": [
    "Antihypertensive treatment as on repeat list — check for any anticoagulant or antiplatelet before advising aspirin"
   ],
   "allergy": "None recorded — confirm before aspirin",
   "recent": "Yesterday: right arm weakness and slurred speech for about 30 minutes, fully resolved. Attending at his wife’s insistence. No contact about this episode before today.",
   "reason": "Video consultation. “My wife made me book — it’s passed now, so no harm done?”"
  },
  "knowledge": {
   "guideline": "[1] NICE NG128 (stroke and transient ischaemic attack in over 16s: diagnosis and initial management, 2019, updated 2022) · [2] National Clinical Guideline for Stroke for the UK and Ireland (ICSWP, 2023) · [3] NICE NG238 (cardiovascular disease: risk assessment and reduction, 2023) · [4] NICE NG196 (atrial fibrillation, 2021) · [5] DVLA Assessing fitness to drive: a guide for medical professionals (current edition) · [6] GMC Confidentiality: patients’ fitness to drive and reporting concerns to the DVLA or DVA (2017) · [7] BNF aspirin monograph",
   "summary": "Sudden right arm weakness with slurred speech lasting about 30 minutes and fully resolving, in a 69-year-old hypertensive ex-smoker, is a suspected TIA until a specialist says otherwise. Recovery is the reason to act, not a reason to relax: the stroke risk is highest in the first days. The GP’s job is aspirin 300 mg now unless contraindicated, a same-day referral to be seen within 24 hours of onset, clear no-driving advice and a firm 999 safety net.",
   "points": [
    {
     "h": "Recognise it",
     "t": "A sudden focal deficit (unilateral weakness, speech disturbance, facial droop, monocular visual loss) that fully resolves is a suspected TIA. Arm weakness plus dysarthria or dysphasia points to the anterior circulation. Mimics — hypoglycaemia, focal seizure with Todd’s paresis, migraine aura, syncope — are considered, but the default is to treat as TIA [1]."
    },
    {
     "h": "Aspirin now",
     "t": "NICE NG128 [1]: offer aspirin 300 mg immediately to people with suspected TIA unless contraindicated. If he already takes an anticoagulant, or has a bleeding disorder or aspirin hypersensitivity, do not give it and discuss with the TIA service [1][7]."
    },
    {
     "h": "Refer the same day",
     "t": "NICE NG128 [1]: refer immediately to be seen by a stroke specialist within 24 hours of symptom onset. If the TIA was more than a week ago, the target is within 7 days. NG128 says do not use scoring systems such as ABCD2 to decide urgency — every suspected TIA gets the urgent route. Symptoms that return and persist mean 999, not the clinic."
    },
    {
     "h": "Imaging is specialist-led",
     "t": "NICE NG128 [1]: do not offer CT brain to people with suspected TIA unless an alternative diagnosis that CT could detect is suspected. The specialist decides on MRI (diffusion-weighted) and arranges urgent carotid imaging. Carotid endarterectomy is considered for 50–99% symptomatic stenosis (NASCET), ideally within a week of onset."
    },
    {
     "h": "Secondary prevention",
     "t": "Delivered by the TIA service and continued in general practice: long-term clopidogrel in most people, with short specialist-started dual antiplatelet therapy for selected high-risk TIA [2]; anticoagulation instead if AF is found (NICE NG196 [4]); atorvastatin 80 mg unless there is a reason for a lower dose (NICE NG238 [3]); blood pressure target of systolic below 130 mmHg [2]; staying off tobacco; diabetes and lipid checks."
    },
    {
     "h": "Driving",
     "t": "DVLA [5]: Group 1 (car, motorcycle) — must not drive for 1 month. No need to notify DVLA if fully recovered at 1 month with no residual deficit. Multiple TIAs over a short period: 3 months free of attacks and DVLA must be told. Group 2 (bus, coach, lorry): stop driving and notify; relicensing needs 1 year. Record the advice in the notes [6]."
    },
    {
     "h": "Video consultation limits",
     "t": "On video you can watch speech and face and ask about symptoms, but you cannot take a blood pressure, feel the pulse for AF or listen for a bruit. Say so, and make sure the TIA clinic does the examination, ECG and bloods the same day."
    },
    {
     "h": "The minimiser",
     "t": "‘It’s passed, so no harm done’ is a common reason for dangerous delay. Name it kindly, credit the person who pushed him to come, and explain that the warning is the chance to prevent a stroke."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Cole, I’m Dr Ahmed. Thank you for joining the video call. Can I just check you’re somewhere private, and that I can see and hear you clearly? What’s been happening?",
    "dom": "rto",
    "why": "Confirms the video set-up and opens with an open question"
   },
   {
    "who": "pt",
    "text": "Yes, I’m at home. My wife made me book, to be honest. Yesterday my right arm went weak and my words came out slurred for maybe half an hour, then it cleared up completely. So no harm done, is there? I don’t need to do anything now it’s passed?"
   },
   {
    "who": "dr",
    "text": "I’m really glad your wife pushed you, and I want to take this seriously with you. Can I ask a few quick questions about exactly what happened, and then tell you honestly what I think?",
    "dom": "gs",
    "why": "Validates the wife’s prompt and sets a clear, brief agenda"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Focused history",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When it started, was it sudden? And was it only the right arm, or the face or leg too? When you say slurred — was it that your words were thick, or that you couldn’t find or understand the words?",
    "dom": "tasks",
    "why": "Characterises onset, distribution and type of speech disturbance"
   },
   {
    "who": "pt",
    "text": "Sudden. Just the arm, I think. My words sounded wrong. It all came back after about half an hour."
   },
   {
    "who": "dr",
    "text": "Has it gone completely — the arm strong, the speech normal, no numbness left? Any loss of vision in one eye, double vision, headache, or jerking before or after?",
    "dom": "tasks",
    "why": "Confirms full resolution; screens for amaurosis fugax and mimics such as seizure or migraine"
   },
   {
    "who": "pt",
    "text": "All back to normal. No headache or anything like that."
   },
   {
    "who": "dr",
    "text": "Your speech sounds clear to me now, and your face looks even on the screen. Could you hold both arms straight out in front of you with your eyes closed for ten seconds? … That looks steady. I can’t check your pulse or blood pressure over video, so the clinic will do that today.",
    "dom": "tasks",
    "why": "Uses what video allows and names what it cannot do"
   },
   {
    "who": "pt",
    "text": "Right."
   },
   {
    "who": "dr",
    "text": "Have you had anything like this before? Any fluttering or racing heartbeat? And do you take any blood thinners, or have any problem with aspirin or bleeding?",
    "dom": "tasks",
    "why": "Asks about previous episodes, symptoms of AF and aspirin contraindications"
   },
   {
    "who": "pt",
    "text": "Nothing like that. Just my blood pressure tablets."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "You said ‘no harm done’. What went through your mind while it was happening?",
    "dom": "rto",
    "why": "Explores the fear behind the minimisation"
   },
   {
    "who": "pt",
    "text": "(pause) I suppose I thought it was a stroke. Then it went, so I told myself I’d imagined it."
   },
   {
    "who": "dr",
    "text": "That must have been frightening, and it’s very human to want it to be nothing. Thank you for telling me.",
    "dom": "rto",
    "why": "Acknowledges the unspoken fear with empathy"
   },
   {
    "phase": "Explanation",
    "clock": "5–7 min",
    "who": "dr",
    "text": "I think this was a TIA — a mini-stroke. A blood vessel to the brain was briefly blocked, then cleared. The fact it cleared is good news, but it’s also a warning: the risk of a full stroke is highest in the next few days. That’s why we act today, not next week.",
    "dom": "tasks",
    "why": "Names TIA and explains why resolution means urgency, in plain words"
   },
   {
    "who": "pt",
    "text": "Today? I feel absolutely fine."
   },
   {
    "who": "dr",
    "text": "I know, and that’s exactly the point — this is the chance to prevent a stroke before it happens. Treatment started early greatly reduces that risk.",
    "dom": "rto",
    "why": "Firm but supportive correction of the minimisation"
   },
   {
    "phase": "Plan",
    "clock": "7–10 min",
    "who": "dr",
    "text": "Two things now. First, unless there’s a reason not to, take 300 milligrams of aspirin today. Do you have aspirin in the house? If not, I’ll send a prescription to your pharmacy straight away.",
    "dom": "tasks",
    "why": "Aspirin 300 mg immediately, having checked for contraindications (NICE NG128)"
   },
   {
    "who": "pt",
    "text": "I think there’s some in the cupboard."
   },
   {
    "who": "dr",
    "text": "Check the strength on the pack before you take it — I’ll stay on while you do if you like. Second, I’m referring you now to the stroke team’s TIA clinic, to be seen within 24 hours of when it started. They’ll check your heart rhythm and blood pressure, do bloods and a heart tracing, scan the arteries in your neck, and decide if you need a brain scan.",
    "dom": "tasks",
    "why": "Immediate referral to be seen within 24 hours of onset; no ABCD2 delay"
   },
   {
    "who": "pt",
    "text": "And after that?"
   },
   {
    "who": "dr",
    "text": "They’ll usually start a blood-thinning tablet for the long term, a strong cholesterol tablet, and tighten up your blood pressure. If they find an irregular heartbeat, the treatment changes to an anticoagulant. And staying off cigarettes, as you have, really helps.",
    "dom": "tasks",
    "why": "Outlines the secondary-prevention package"
   },
   {
    "who": "pt",
    "text": "Fine. I’ll drive over when they ring."
   },
   {
    "who": "dr",
    "text": "This is the part you may not like: you must not drive for at least a month after a TIA. That’s the DVLA rule, not just my advice. If you’ve fully recovered at a month you don’t have to tell the DVLA, but if you have another episode the rules become stricter. If you ever drive a bus or lorry, tell me, because then you must stop and inform the DVLA. Could someone else take you to the clinic?",
    "dom": "tasks",
    "why": "Correct DVLA Group 1 and Group 2 rules; advice documented"
   },
   {
    "who": "pt",
    "text": "I’ll sort out a lift. I didn’t know that about driving."
   },
   {
    "phase": "Safety net and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "If any weakness, face droop, slurred speech or loss of vision comes back, even for a few minutes, call 999 straight away — don’t wait for the clinic, and don’t wait to see if it passes. Could you tell me back what you’re going to do today?",
    "dom": "gs",
    "why": "Specific 999 advice, then teach-back"
   },
   {
    "who": "pt",
    "text": "Aspirin 300 now. Wait for the stroke clinic to ring today. No driving for a month. 999 if it comes back."
   },
   {
    "who": "dr",
    "text": "Exactly right. If you haven’t heard from the clinic by this afternoon, ring the surgery and we’ll chase it. I’ll record our conversation, including the driving advice, and see you after the clinic to carry on the prevention. Thank your wife for me.",
    "dom": "gs",
    "why": "Closes the loop on the referral and documents the plan"
   },
   {
    "who": "pt",
    "text": "I will. Thank you — I was going to ignore it."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him give the full story and his ‘no harm done’ view before questioning.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Acknowledged the wife’s role; explored his fear of stroke; asked about driving and who could take him to clinic.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up ‘it’s passed’ as minimisation and the hidden fear behind it; explored rather than argued.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea: resolved means harmless. Concern: unspoken fear of stroke. Expectation: permission to ignore it.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Used video to observe speech, face and arm drift; stated that BP, pulse, bruits, ECG and bloods need the TIA clinic today.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Considered mimics (hypoglycaemia, seizure, migraine aura, syncope) and amaurosis fugax; kept TIA as the working diagnosis.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Checked for persisting deficit (999 if present) and for anticoagulant, bleeding risk and aspirin allergy.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Suspected anterior-circulation TIA; explained as a mini-stroke and a warning with the highest risk in the next few days.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Aspirin 300 mg now; immediate referral to be seen within 24 hours of onset; no ABCD2 triage; outlined clopidogrel, statin, BP and AF plan.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Linked hypertension and smoking history to prevention; AF to be sought; driving advice with DVLA rules documented.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 for any recurrence; chase the clinic if no call today; review after clinic; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Older adults"
   ],
   "stem": {
    "name": "Bernard Cole",
    "age": "69 years · male",
    "pmh": [
     "Hypertension",
     "Ex-smoker"
    ],
    "meds": [
     "Antihypertensive (see repeat list)"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Yesterday: ~30 min right arm weakness and slurred speech, fully resolved. Not yet assessed.",
    "reason": "Video call. “My wife made me come — it’s passed, so no harm done?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "Check the video set-up. Let him say ‘no harm done’ in full, and thank the wife for pushing him."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Onset, side, speech type, full resolution, vision, mimics, previous episodes, palpitations, anticoagulants and aspirin allergy. Observe speech, face and arm drift on screen."
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "Ask what he thought while it was happening — the fear of stroke usually surfaces."
    },
    {
     "t": "5–10",
     "h": "Explain and act",
     "d": "TIA as a warning; aspirin 300 mg now; refer to be seen within 24 hours of onset; prevention outline; no driving for a month."
    },
    {
     "t": "10–12",
     "h": "Safety net and close",
     "d": "999 if symptoms return; chase if no call today; teach-back; document the driving advice."
    }
   ],
   "wordPics": {
    "fail": "Reassured because it resolved; books a routine appointment or bloods; uses an ABCD2 score to justify waiting; forgets aspirin or gives it without asking about anticoagulants; claims to examine him over video; never mentions driving.",
    "pass": "Recognises a suspected TIA; gives aspirin 300 mg; refers to be seen within 24 hours; says he must not drive; gives 999 advice for recurrence.",
    "exc": "All of that, plus: surfaces his fear of stroke and handles the minimisation without lecturing; is honest about what video cannot assess; gets the DVLA detail right for Group 1 and Group 2; outlines the prevention package in plain words; closes the loop on the referral; teach-back; he leaves grateful his wife pushed him."
   },
   "avoid": [
    {
     "dont": "“Well, it’s all gone now, so that’s good news.”",
     "instead": "“It clearing up is good, but it’s also a warning — the next few days are when a stroke is most likely, so we act today.”",
     "why": "Reassurance from recovery is the exact error NICE NG128 is designed to prevent."
    },
    {
     "dont": "“Your ABCD2 score is low, so the clinic can see you next week.”",
     "instead": "“I’m referring you now to be seen within 24 hours.”",
     "why": "NICE NG128 advises against scoring systems to set urgency; every suspected TIA is seen within 24 hours."
    },
    {
     "dont": "“You should probably avoid driving for a bit.”",
     "instead": "“You must not drive for at least a month — that’s the DVLA rule.”",
     "why": "Vague advice is unsafe and does not meet the duty to advise and document."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Minimising symptoms",
     "t": "Men of his age often delay care after transient symptoms. The family member who prompted attendance is an ally — involve them in transport, aspirin and 999 advice if he agrees."
    },
    {
     "h": "Transport",
     "t": "He cannot drive to the TIA clinic. Check how he will get there today; do not let transport become the reason for delay."
    }
   ],
   "legal": [
    {
     "h": "DVLA — Group 1",
     "t": "Must not drive for 1 month after a TIA. No need to notify if fully recovered at 1 month with no residual deficit. Multiple TIAs over a short period: 3 months free of attacks and notify DVLA (DVLA Assessing fitness to drive)."
    },
    {
     "h": "DVLA — Group 2",
     "t": "Bus, coach or lorry licence: stop driving and notify DVLA; relicensing requires 1 year and meeting the functional standards (DVLA Assessing fitness to drive)."
    }
   ],
   "professional": [
    {
     "h": "Advising on driving",
     "t": "GMC Confidentiality: patients’ fitness to drive and reporting concerns to the DVLA or DVA (2017): the doctor explains the effect on driving and the patient’s duty to inform the DVLA where required, and documents the advice."
    },
    {
     "h": "Remote consulting",
     "t": "Examination that video cannot provide must be arranged, not assumed. Record which findings were observed on screen and which were deferred to the TIA clinic."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Stroke Association information on TIA and stroke prevention; NHS Smokefree support if he ever needs help staying stopped."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Symptoms persisting or returning now — 999, not the TIA clinic",
     "Already on an anticoagulant or bleeding risk — no aspirin; discuss with the TIA service",
     "Monocular visual loss (amaurosis fugax), palpitations suggesting AF, more than one episode"
    ],
    "psychosocial": [
     "Attended only because his wife insisted",
     "Hidden fear of stroke behind ‘no harm done’",
     "Driving, transport to clinic today"
    ],
    "ice": [
     "Idea: it resolved, so no harm done",
     "Concern: unspoken fear it was a stroke",
     "Expectation: to be told he can ignore it"
    ]
   },
   "diagnosis": "Suspected TIA (anterior circulation: right arm weakness with speech disturbance, fully resolved after about 30 minutes) in a 69-year-old with hypertension and a smoking history. Mimics considered but the default is TIA (NICE NG128).",
   "diagnosisLay": "“A blood vessel to your brain was briefly blocked, then cleared. It’s called a mini-stroke. It’s a warning that a bigger stroke could follow, especially in the next few days — and treatment now can stop that happening.”",
   "management": {
    "reflectIce": "“You hoped it was nothing because it passed. I understand — but the fact it passed is our chance to prevent a stroke.”",
    "psychosocial": "Credit his wife; arrange someone else to drive him; keep the tone firm but kind, not frightening.",
    "sharedPlan": [
     "Aspirin 300 mg now unless contraindicated (NICE NG128)",
     "Immediate referral to be seen by a stroke specialist within 24 hours of onset; no scoring-based delay",
     "Must not drive for at least 1 month (DVLA Group 1); Group 2 stop and notify; documented",
     "Specialist-led secondary prevention continued in practice: antiplatelet or anticoagulant if AF, atorvastatin, BP target, smoking status"
    ],
    "safetyNet": [
     "999 immediately if any weakness, face droop, speech or vision change returns, even briefly",
     "Ring the surgery if the TIA clinic has not called today; GP review after clinic"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "TIA and stroke",
    "s": "Case walkthrough · NICE NG128",
    "href": "../cases/tia-stroke.html"
   },
   {
    "ic": "💠",
    "t": "Stroke and TIA protocol",
    "s": "Aspirin · 24-hour referral · prevention · DVLA",
    "href": "management/tia-stroke.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by reassurance. The candidate who is comforted by full recovery, or who lets the patient’s calm set the pace, misses the whole point of a TIA.",
   "items": [
    {
     "dom": "tasks",
     "fail": "“It’s resolved — let’s do some bloods and review next week.”",
     "why": "The stroke risk is highest in the first days; NICE NG128 wants specialist assessment within 24 hours of onset.",
     "fix": "Refer immediately and make sure he is seen today."
    },
    {
     "dom": "tasks",
     "fail": "Using an ABCD2 score to decide the referral can wait.",
     "why": "NICE NG128 advises against scoring systems to set urgency.",
     "fix": "Treat every suspected TIA as urgent."
    },
    {
     "dom": "tasks",
     "fail": "Advising aspirin without asking about anticoagulants or aspirin allergy.",
     "why": "Aspirin is contraindicated in some patients and anticoagulated patients need specialist advice.",
     "fix": "Ask first, then give 300 mg immediately if safe."
    },
    {
     "dom": "tasks",
     "fail": "Saying “avoid driving for a bit” or giving the Group 2 rule to a car driver.",
     "why": "The DVLA rules are specific and the advice must be documented.",
     "fix": "Group 1: 1 month, notify only if not fully recovered or multiple TIAs; Group 2: stop, notify, 1 year."
    },
    {
     "dom": "rto",
     "fail": "Scolding him for waiting a day, or frightening him into agreement.",
     "why": "Fear or blame reduces engagement with long-term prevention.",
     "fix": "Acknowledge the fear, credit his wife, and present the plan as prevention."
    },
    {
     "dom": "gs",
     "fail": "Claiming to check pulse, BP or carotids over video.",
     "why": "Examiners mark down findings that cannot be obtained remotely.",
     "fix": "Observe what you can, and state that the TIA clinic will examine him today."
    },
    {
     "dom": "gs",
     "fail": "“Come back if you’re worried.”",
     "why": "Recurrence needs 999, not a GP appointment.",
     "fix": "Name the symptoms, say 999, and check with teach-back."
    }
   ]
  }
 },
 "vaccine-hesitancy-mmr": {
  "stem": {
   "name": "Lauren Hill",
   "age": "32-year-old woman (attending about her daughter Mia, 13 months)",
   "pmh": [
    "Nothing relevant recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "Mia’s 12-month vaccinations are due; Mia has not yet had her first dose against measles, mumps and rubella.",
   "reason": "Video consultation: unsure about Mia’s MMR after reading about autism and “overloading” the immune system online."
  },
  "knowledge": {
   "guideline": "[1] UKHSA Green Book, chapter 21 (measles) · [2] UKHSA: changes to the routine childhood vaccination schedule from 1 July 2025 and 1 January 2026 · [3] The Lancet, retraction of Wakefield et al. (2010) · [4] Hviid A et al., Annals of Internal Medicine 2019 (MMR and autism, Danish cohort) · [5] GMC Decision making and consent (2020) · [6] UKHSA Green Book, chapter 2 (consent)",
   "summary": "A hesitant parent is best helped by exploring her concerns first, then giving accurate, balanced information and a clear recommendation, respecting her decision and keeping the door open. Mia is now due MMRV, which adds chickenpox protection to MMR.",
   "points": [
    {
     "h": "The current schedule",
     "t": "UKHSA [2]: from 1 January 2026, MMRV (measles, mumps, rubella and varicella) replaced MMR in the routine schedule. Children born on or after 1 January 2025 receive MMRV at 12 months and 18 months. For children born on or after 1 July 2024 the second dose moved from 3 years 4 months to the new 18-month appointment. At 13 months in 2026, Mia is due her first MMRV dose."
    },
    {
     "h": "Explore first",
     "t": "Ask what she has read, where, and what worries her most, before giving information. Reflect the underlying motive: she wants to protect her child. An approach that elicits and responds to concerns keeps trust; lecturing or shaming tends to entrench hesitancy."
    },
    {
     "h": "The autism claim",
     "t": "The 1998 Lancet paper suggesting a link was fully retracted by The Lancet in 2010 [3], and its lead author was struck off the UK medical register the same year. Large studies since have found no link: a Danish cohort of over 650,000 children found no increased autism risk after MMR, including in children with an autistic sibling [4]."
    },
    {
     "h": "The “overload” worry",
     "t": "Children encounter vast numbers of antigens every day from food, skin and gut bacteria and common infections. Combined vaccines add a tiny fraction of this and mean fewer injections. Combining is not a strain on the immune system."
    },
    {
     "h": "The diseases",
     "t": "UKHSA Green Book [1]: measles can cause otitis media, pneumonia, encephalitis and death, and rarely subacute sclerosing panencephalitis years later; mumps can cause meningitis and orchitis; rubella in pregnancy can cause congenital rubella syndrome. Measles is highly infectious, so falling uptake leads to outbreaks that also endanger infants too young to be vaccinated and immunosuppressed people."
    },
    {
     "h": "Consent and autonomy",
     "t": "Consent for a young child comes from a person with parental responsibility (Green Book chapter 2 [6]). GMC [5]: share information in a balanced way the person can understand, give your recommendation, and respect their decision. Consent must be voluntary: no pressure or coercion."
    },
    {
     "h": "If she declines today",
     "t": "Record the discussion and her decision, offer reliable written information (NHS vaccination pages, UKHSA leaflets), arrange a follow-up conversation, and make clear that missed doses can be caught up at any time. Mention the new 18-month appointment."
    },
    {
     "h": "Genuine contraindications",
     "t": "Check for real contraindications per the Green Book [1] (for example severe immunosuppression or a previous severe allergic reaction to a component) rather than dismissing all concern; this also shows her questions are taken seriously."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Hill, I’m Dr Morgan. Can you hear me okay? … Thanks for booking to talk this through. What would you like to discuss?",
    "dom": "rto",
    "why": "Welcomes the discussion; open question"
   },
   {
    "who": "pt",
    "text": "I’ve come about Mia’s jabs, but honestly I’m not sure about the MMR. I’ve read quite a bit online. There’s stuff about it being linked to autism, and about overloading their little immune systems with so many vaccines. I’m not anti-vaccine or anything, I just want to do the right thing for her. What do you think?"
   },
   {
    "who": "dr",
    "text": "I’m really glad you’re asking rather than just deciding either way. You clearly care about getting this right for Mia. I will tell you what I think, but it would help me to understand your worries properly first. Is that okay?",
    "dom": "rto",
    "why": "Affirms her motive; asks permission to explore before informing"
   },
   {
    "who": "pt",
    "text": "Yes, of course."
   },
   {
    "phase": "Exploring concerns",
    "clock": "1–5 min",
    "who": "dr",
    "text": "What have you read, and where did you come across it?",
    "dom": "tasks",
    "why": "Elicits specific concerns and sources"
   },
   {
    "who": "pt",
    "text": "Just things online. Articles and posts people share."
   },
   {
    "who": "dr",
    "text": "That must be really unsettling to read when you’re the one deciding. Which worry sits heaviest with you: autism, or the number of vaccines?",
    "dom": "rto",
    "why": "Empathy; prioritises her concerns"
   },
   {
    "who": "pt",
    "text": "The autism one. I couldn’t forgive myself."
   },
   {
    "who": "dr",
    "text": "I understand that. It sounds like you’re worried about harming her whichever way you choose. Is that fair?",
    "dom": "rto",
    "why": "Names the underlying fear of making the wrong choice"
   },
   {
    "who": "pt",
    "text": "Yes. Exactly that."
   },
   {
    "who": "dr",
    "text": "Is Mia well at the moment? Any medical conditions, treatments that affect her immunity, or a serious reaction to a vaccine before?",
    "dom": "tasks",
    "why": "Checks for genuine contraindications"
   },
   {
    "who": "pt",
    "text": "No, she’s well. Nothing like that."
   },
   {
    "who": "dr",
    "text": "And what do you already know about measles and the other illnesses the jab protects against?",
    "dom": "tasks",
    "why": "Elicits her understanding of disease risk"
   },
   {
    "who": "pt",
    "text": "Not much, really."
   },
   {
    "phase": "Sharing information",
    "clock": "5–9 min",
    "who": "dr",
    "text": "Let me start with autism, since it matters most to you. The idea came from one small study in 1998. It was later found to be dishonest and was withdrawn by the journal, and the doctor behind it was struck off. Since then, studies of hundreds of thousands of children, including one in Denmark of over 650,000, found no link at all, even in children with an autistic brother or sister.",
    "dom": "tasks",
    "why": "Accurate, non-defensive account of the autism evidence"
   },
   {
    "who": "pt",
    "text": "Then why do so many people still say it?"
   },
   {
    "who": "dr",
    "text": "That’s a fair question. Signs of autism often become noticeable in the second year, which is also when this jab is given, so the timing can look connected even though it isn’t. Parents who notice those signs after a jab are describing something real; the cause just isn’t the vaccine.",
    "dom": "tasks",
    "why": "Explains coincidence of timing respectfully"
   },
   {
    "who": "pt",
    "text": "I hadn’t thought of that."
   },
   {
    "who": "dr",
    "text": "On overloading: every day Mia’s immune system meets huge numbers of germs from food, toys and other children. A vaccine adds a tiny amount. One more thing to mention: since January the jab at this age is called MMRV, which also protects against chickenpox. It’s still one injection.",
    "dom": "tasks",
    "why": "Addresses overload; explains the current MMRV schedule"
   },
   {
    "who": "pt",
    "text": "So it’s four in one now? Is that too much?"
   },
   {
    "who": "dr",
    "text": "It’s the same idea: a tiny amount for her immune system, and protection from chickenpox as well. The second dose is now at 18 months.",
    "dom": "tasks",
    "why": "Responds to the concern without dismissing it"
   },
   {
    "who": "dr",
    "text": "About measles: it isn’t just a rash. It can cause ear and chest infections, and sometimes swelling of the brain, and it can kill. Mumps can cause meningitis, and rubella in pregnancy can harm an unborn baby. We’ve seen outbreaks in the UK as fewer children are vaccinated. So it’s a very small risk from the vaccine against a real risk from the disease.",
    "dom": "tasks",
    "why": "Balances with real disease risks and outbreaks"
   },
   {
    "who": "pt",
    "text": "I didn’t realise it could be that serious."
   },
   {
    "phase": "Recommendation and decision",
    "clock": "9–11 min",
    "who": "dr",
    "text": "My honest recommendation is that Mia has the vaccine. But it’s your decision, and I won’t pressure you. What are you thinking now?",
    "dom": "rto",
    "why": "Clear recommendation; respects autonomy"
   },
   {
    "who": "pt",
    "text": "I feel better about it. But I’d like a day or two to read something reliable before I book."
   },
   {
    "who": "dr",
    "text": "That’s completely reasonable. I’ll send you the NHS and UKHSA information, and the nurse can book her in whenever you’re ready. If you have more questions, we can talk again. If you decide to wait, she can still have it later.",
    "dom": "tasks",
    "why": "Written information, follow-up, catch-up available"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "While she isn’t protected, if Mia has a high temperature with a spreading rash, or contact with someone who has measles, ring us before coming in, so we can protect other patients. Can I check what you’re taking away from today?",
    "dom": "gs",
    "why": "Safety-net for measles exposure; teach-back"
   },
   {
    "who": "pt",
    "text": "The autism study was false and big studies show no link. Her immune system copes easily. Measles can be serious. Read the leaflets and book when I’m ready."
   },
   {
    "who": "dr",
    "text": "That’s it exactly. I’ll note our conversation so whoever you see next knows where we got to. Thank you for asking these questions.",
    "dom": "gs",
    "why": "Documents the discussion; ends warmly with the door open"
   },
   {
    "who": "pt",
    "text": "Thank you for not making me feel stupid."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; welcomed the discussion; asked permission to explore before advising.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Online articles and posts as the source; fear of harming her child either way explored.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I just want to do the right thing” and “what do you think?” and answered both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (MMR may cause autism, immune overload), concern (being responsible for harm), expectation (trustworthy guidance).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Checked Mia’s health, immunosuppression and previous vaccine reactions (genuine contraindications).",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Separated evidence-based concerns from misinformation; explained coincidental timing of autism signs.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Real disease risks named: measles complications, mumps, congenital rubella; outbreaks.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Vaccine hesitancy in a caring parent; Mia due MMRV under the January 2026 schedule.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Clear recommendation, reliable written information, time to decide, easy booking, catch-up available.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Trust preserved; discussion documented; 18-month second dose mentioned.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Measles exposure and rash advice; follow-up conversation offered; door left open.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Lauren Hill",
    "age": "32 years · female (re: Mia Hill, 13 months)",
    "pmh": [
     "Nil relevant"
    ],
    "meds": [
     "Nil recorded"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Child health record: Mia’s 12-month vaccinations outstanding. Mother has asked to discuss before booking.",
    "reason": "Video consultation: “questions about Mia’s MMR”."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and affirm",
     "d": "Welcome the question. Ask permission to understand her concerns before advising."
    },
    {
     "t": "1–5",
     "h": "Explore",
     "d": "Sources, the heaviest worry, fear of harm either way, Mia’s health and contraindications, her understanding of the diseases."
    },
    {
     "t": "5–9",
     "h": "Inform",
     "d": "Autism evidence, timing coincidence, overload, MMRV and the 18-month dose, disease risks and outbreaks."
    },
    {
     "t": "9–11",
     "h": "Recommend and respect",
     "d": "Clear recommendation; her decision; information and time; catch-up available."
    },
    {
     "t": "11–12",
     "h": "Close",
     "d": "Rash or exposure advice, teach-back, documentation, open door."
    }
   ],
   "wordPics": {
    "fail": "Launches into a lecture, dismisses online sources as nonsense, pressures her to book today, or accepts refusal without offering information; never checks what she knows about measles; states outdated schedule information.",
    "pass": "Explores her concerns, explains the autism evidence and the overload myth accurately, describes the disease risks, gives a recommendation and respects her decision.",
    "exc": "All of the above, plus: names her fear of harm either way; explains why the timing of autism signs misleads; knows Mia is due MMRV under the January 2026 schedule; checks genuine contraindications; offers reliable reading, easy booking and catch-up; documents; she leaves feeling respected."
   },
   "avoid": [
    {
     "dont": "“That study was nonsense and anyone who believes it is being silly.”",
     "instead": "“The worry is understandable. The study was later found to be dishonest and withdrawn, and large studies since show no link.”",
     "why": "Shaming entrenches hesitancy and loses trust."
    },
    {
     "dont": "“If you don’t vaccinate, you’re putting other children at risk.”",
     "instead": "“Measles spreads very easily, so vaccinating also protects babies too young for the jab.”",
     "why": "Blame provokes defensiveness; the same fact framed as protection persuades."
    },
    {
     "dont": "“We really need to do it today.”",
     "instead": "“It’s your decision. Take the information home, and the nurse can book her in whenever you’re ready.”",
     "why": "Pressure undermines voluntary consent (GMC 2020)."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Online information",
     "t": "Shared articles and social media are powerful sources. Ask what she has read and offer trusted alternatives rather than dismissing her sources."
    },
    {
     "h": "Parental anxiety",
     "t": "Hesitant parents usually fear harming their child by action more than by inaction. Naming this helps."
    }
   ],
   "legal": [
    {
     "h": "Consent for a child",
     "t": "Green Book chapter 2: consent for a young child is given by a person with parental responsibility. It must be informed and voluntary; one person with parental responsibility can consent, but disagreement between parents needs care."
    },
    {
     "h": "No compulsion",
     "t": "Childhood vaccination is not compulsory in the UK. Declining must not affect the family’s care or registration."
    }
   ],
   "professional": [
    {
     "h": "Balanced information",
     "t": "GMC Decision making and consent (2020): give a clear recommendation while respecting the decision; record the discussion and any decision to decline."
    },
    {
     "h": "Keeping up to date",
     "t": "The childhood schedule changed in July 2025 and January 2026 (MMRV, 18-month appointment). Out-of-date advice undermines trust."
    }
   ],
   "community": [
    {
     "h": "Herd protection",
     "t": "High uptake protects babies too young to be vaccinated, pregnant women and immunosuppressed people; outbreaks follow when coverage falls."
    },
    {
     "h": "Trusted information",
     "t": "NHS vaccination pages and UKHSA leaflets for parents on MMRV; health visitors can continue the conversation."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Genuine contraindication: severe immunosuppression or previous severe allergic reaction to a vaccine component",
     "Mia currently unwell with a high fever (postpone, not cancel)",
     "Recent measles contact or fever with a spreading rash"
    ],
    "psychosocial": [
     "Online articles and posts as the main source",
     "Fear of causing harm either way",
     "Wanting a trusted opinion without judgement"
    ],
    "ice": [
     "Idea: MMR might cause autism; many vaccines might overload the immune system",
     "Concern: being responsible for harming Mia",
     "Expectation: an honest opinion from the doctor"
    ]
   },
   "diagnosis": "“You’re a careful parent weighing up conflicting information. The evidence is clear that the vaccine doesn’t cause autism, and the diseases it prevents can be serious.”",
   "diagnosisLay": "“Mia’s immune system is like a huge library that adds new books every day from everything she touches and eats. A vaccine adds a few pages. It teaches her body what measles looks like before she ever meets it.”",
   "management": {
    "reflectIce": "“You said you just want to do the right thing for Mia and you couldn’t forgive yourself if the jab harmed her. Let me share what the evidence shows, and then it’s your decision.”",
    "psychosocial": "Affirm her care; offer trusted sources alongside what she has read online; follow-up conversation available with the GP or health visitor.",
    "sharedPlan": [
     "Explore concerns first, then address autism and overload with accurate evidence",
     "Explain the January 2026 schedule: MMRV at 12 and 18 months",
     "Clear recommendation; respect her decision",
     "Written NHS and UKHSA information; nurse appointment whenever she is ready",
     "Document the discussion and decision; catch-up possible at any age"
    ],
    "safetyNet": [
     "Ring before attending if Mia has fever with a spreading rash or measles contact",
     "Follow-up conversation offered",
     "Door left open at every future contact"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Maculopapular rash pathway",
    "s": "Visual algorithm · measles recognition",
    "href": "algorithms/maculopapular-rash.html"
   },
   {
    "ic": "🗺️",
    "t": "Fever in children pathway",
    "s": "Visual algorithm · NICE NG143",
    "href": "algorithms/fever-children.html"
   },
   {
    "ic": "🏘️",
    "t": "Community orientation",
    "s": "Population health · uptake",
    "href": "community-orientation.html"
   },
   {
    "ic": "💬",
    "t": "Consultation Conversation Lab",
    "s": "Practising difficult conversations",
    "href": "sca-comms-lab.html"
   }
  ],
  "pitfalls": {
   "intro": "The trap is winning the argument and losing the parent. Marks sit in exploring first, accurate information delivered warmly, and respecting her decision with the door open.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Giving the evidence before finding out what she has read and fears.",
     "why": "Information that misses her actual concern doesn’t land.",
     "fix": "“Tell me what you’ve read and what worries you most.”"
    },
    {
     "dom": "tasks",
     "fail": "Vague reassurance (“it’s perfectly safe”) without the evidence.",
     "why": "She needs a credible reason to trust you over what she has read.",
     "fix": "Retracted study, author struck off, large studies with no link."
    },
    {
     "dom": "tasks",
     "fail": "Talking about MMR at 3 years 4 months as the second dose.",
     "why": "The schedule changed: MMRV at 12 and 18 months for children born from 2025.",
     "fix": "Know the current UKHSA schedule."
    },
    {
     "dom": "rto",
     "fail": "Mocking what she has read online.",
     "why": "Dismissing her sources dismisses her.",
     "fix": "“It’s understandable that worried you. Let me share what the large studies found.”"
    },
    {
     "dom": "rto",
     "fail": "Pushing for a decision today.",
     "why": "Pressure breaks trust and makes consent involuntary.",
     "fix": "“It’s your decision. Take the information home; book whenever you’re ready.”"
    },
    {
     "dom": "gs",
     "fail": "No plan if she declines.",
     "why": "A closed door lowers future uptake.",
     "fix": "Document, offer follow-up, remind her catch-up is possible."
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
