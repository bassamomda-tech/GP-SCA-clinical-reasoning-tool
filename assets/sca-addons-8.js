/* ============================================================
   Reasoning GP — The Hot Seat: add-on set, batch 8
   Stem, knowledge, model consultation, scorecard tasks, extras,
   knowledge base, playbook, links and examiner pitfalls for
   20 further cases. Loaded after sca-pitfalls.js and
   before sca-practice.js; merges into the existing maps and
   attaches to the case objects exactly as those files do.
   Educational; original content; primary sources cited.
   ============================================================ */
(function(){
  var ADD = {
 "blood-donor-anaemia": {
  "stem": {
   "name": "Geoffrey Aldous",
   "age": "61-year-old man",
   "pmh": [
    "Knee pain — takes ibuprofen regularly",
    "Long-standing blood donor"
   ],
   "meds": [
    "Ibuprofen (regular use for knees)"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "Letter from the blood donation service: deferred from donating because of low haemoglobin, advised to see GP. Repeat FBC arranged by the practice confirms iron-deficiency anaemia (low Hb, low MCV, low ferritin). No FIT or coeliac serology on record.",
   "reason": "Video consultation to discuss his blood results and the donor letter."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) — colorectal and upper GI cancer · NICE HTG690 (2023, formerly DG56) — FIT in primary care · BSG iron-deficiency anaemia guideline (2021) · NICE NG20 (2015) — coeliac disease · BNF (NSAIDs, oral iron)",
   "summary": "Iron-deficiency anaemia in a 61-year-old man is gastrointestinal blood loss until proven otherwise, however well he feels. The GP owns a result another service found: FIT, coeliac serology, lower and upper GI investigation, an NSAID review, and iron alongside — not instead of — investigation.",
   "points": [
    {
     "h": "Own the incidental result",
     "t": "A result from the blood service is now the GP’s to act on. Feeling well does not change the work-up: a confirmed iron-deficiency anaemia gets the same investigation as if he had come in with symptoms."
    },
    {
     "h": "Men don’t lose iron without a reason",
     "t": "BSG 2021: in men and postmenopausal women with iron-deficiency anaemia, gastroscopy and colonoscopy are the first-line GI investigations. Right-sided colon cancer often bleeds invisibly and presents as anaemia. Regular donation can contribute to low iron, but it is not an explanation to accept without investigation."
    },
    {
     "h": "FIT and the NICE NG12 (updated April 2026) threshold",
     "t": "NICE HTG690 recommends quantitative FIT to guide referral in adults with iron-deficiency anaemia or a change in bowel habit. NICE NG12 (updated April 2026): refer on a suspected cancer pathway for colorectal cancer if FIT is at least 10 µg Hb/g faeces. A low FIT does not close the case in unexplained iron-deficiency anaemia — the upper GI tract still needs looking at, and HTG690 says not to delay referral if strong clinical concern persists."
    },
    {
     "h": "Coeliac serology",
     "t": "BSG 2021: screen adults with iron-deficiency anaemia for coeliac disease. NICE NG20: IgA tTG with total IgA as first choice, while he is still eating gluten."
    },
    {
     "h": "The ibuprofen",
     "t": "Regular NSAIDs cause GI blood loss and ulcers (BNF). Review it, offer alternatives for the knees, and consider a PPI if an NSAID must continue — but never let the NSAID become the whole explanation; it can coexist with a cancer."
    },
    {
     "h": "Iron alongside investigation",
     "t": "BSG 2021: one tablet of oral iron once daily (alternate days if not tolerated); product and strength per BNF. Recheck the FBC within about 4 weeks. Warn that iron darkens stools — and note that his darker stools came before any iron. Black, tarry stools with dizziness or collapse need same-day assessment."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Morning Mr Aldous, I’m Dr Lee. Can you see and hear me all right? … Good. You’ve had a letter from the blood service — tell me what’s happened.",
    "dom": "rto",
    "why": "Checks the video and opens with his account"
   },
   {
    "who": "pt",
    "text": "Bit of a non-event, I think. They turned me away because my iron was low and told me to see you. I feel completely fine. Can you just give me some iron tablets so I can get back to donating? I’ve given 60-odd times — I don’t want to stop over nothing."
   },
   {
    "who": "dr",
    "text": "Sixty donations is a real achievement, and I can hear how much it matters to you. I do want to talk about iron. I’d also like to understand why it’s low, because that’s what gets you back to donating safely. Can I ask some questions first, then we’ll agree a plan?",
    "dom": "gs",
    "why": "Honours the donor identity and sets an agenda that includes the cause"
   },
   {
    "who": "pt",
    "text": "Fair enough. Fire away."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "The repeat test we did confirms your iron is low and it’s affecting your blood count. Have you noticed any change in your bowels over the last few months?",
    "dom": "tasks",
    "why": "Owns the result and starts the targeted GI history"
   },
   {
    "who": "pt",
    "text": "Now you mention it, a bit looser than they used to be. A few months, maybe. I put it down to getting older."
   },
   {
    "who": "dr",
    "text": "And the colour of your stools — any blood, or have they looked darker or black?",
    "dom": "tasks",
    "why": "Asks about rectal bleeding and melaena"
   },
   {
    "who": "pt",
    "text": "No blood. Maybe a bit darker now and then. I wouldn’t call it black."
   },
   {
    "who": "dr",
    "text": "That’s helpful — I’ll come back to that. Any tummy pain, indigestion, heartburn or trouble swallowing?",
    "dom": "tasks",
    "why": "Screens upper GI symptoms"
   },
   {
    "who": "pt",
    "text": "No, none of that. Stomach’s fine."
   },
   {
    "who": "dr",
    "text": "Have you lost any weight without trying, or noticed your appetite change?",
    "dom": "tasks",
    "why": "Asks about weight loss without assuming the answer"
   },
   {
    "who": "pt",
    "text": "Not that I’ve noticed. I haven’t weighed myself."
   },
   {
    "who": "dr",
    "text": "We can check that when you come in. Do you take anything for pain, or any blood thinners?",
    "dom": "tasks",
    "why": "Medicine history — NSAIDs and anticoagulants"
   },
   {
    "who": "pt",
    "text": "Ibuprofen for my knees. Most days, if I’m honest."
   },
   {
    "who": "dr",
    "text": "Thank you. And your diet — do you eat a reasonable range of food?",
    "dom": "tasks",
    "why": "Excludes dietary deficiency as the whole story"
   },
   {
    "who": "pt",
    "text": "Yes, I eat pretty well. Nothing unusual."
   },
   {
    "who": "dr",
    "text": "And has anyone in your family had bowel cancer or other bowel problems?",
    "dom": "tasks",
    "why": "Family history"
   },
   {
    "who": "pt",
    "text": "Not that I know of."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What did you think when the letter said your iron was low?",
    "dom": "rto",
    "why": "Explores his idea behind “non-event”"
   },
   {
    "who": "pt",
    "text": "Honestly? That I’ve given too much blood and I need topping up. Though it did rattle me a bit, being sent away."
   },
   {
    "who": "dr",
    "text": "That sounds like it knocked you more than you’ve let on. Is there anything about it that’s worried you?",
    "dom": "rto",
    "why": "Picks up the cue that he was unsettled"
   },
   {
    "who": "pt",
    "text": "I suppose I just don’t like being a patient. I’d rather be the one giving."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "That makes sense. Can I be honest with you about my thinking? Women can lose iron through periods; men don’t. So when a man’s iron is low, we need to find where it’s going — and the commonest place is slowly from the gut, often without any visible blood. Most causes are harmless, like an irritated stomach from ibuprofen. But one we must rule out is a growth in the bowel that bleeds quietly.",
    "dom": "tasks",
    "why": "Explains why IDA in a man means GI loss until proven otherwise"
   },
   {
    "who": "pt",
    "text": "A growth? You mean cancer? I feel fine."
   },
   {
    "who": "dr",
    "text": "I know, and I’m not saying you have cancer. Bowel problems that cause anaemia often don’t make people feel ill at first — that’s exactly why the blood service flagging this is useful. Your looser bowels and slightly darker stools are things I have to take seriously alongside the low iron.",
    "dom": "rto",
    "why": "Holds honesty and reassurance together; links his cues to the plan"
   },
   {
    "who": "pt",
    "text": "Right. So what happens?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what I suggest. A stool test called FIT, which looks for hidden blood. A blood test for coeliac disease, which can stop you absorbing iron — keep eating bread and pasta as normal until it’s done. And I’m referring you on the urgent pathway for camera tests of your bowel and your stomach, to find the source.",
    "dom": "tasks",
    "why": "FIT, coeliac serology and urgent bidirectional endoscopy"
   },
   {
    "who": "pt",
    "text": "Both ends? That sounds like a lot."
   },
   {
    "who": "dr",
    "text": "It is two tests, often on the same day, with sedation offered. They tell us far more than any blood test. The urgent pathway aims to have an answer within about four weeks.",
    "dom": "rto",
    "why": "Explains what to expect in plain language"
   },
   {
    "who": "pt",
    "text": "And the iron?"
   },
   {
    "who": "dr",
    "text": "I’ll start you on iron tablets today — one a day — to rebuild your blood, alongside the tests, not instead of them. They’ll turn your stools dark or black, so if they become tarry and sticky, or you feel faint, ring us that day.",
    "dom": "tasks",
    "why": "Iron alongside investigation and warns about stool colour"
   },
   {
    "who": "dr",
    "text": "The ibuprofen is probably not helping — it can make the stomach bleed. Would you be willing to stop it and try a gel on the knees, or paracetamol, while we sort this out?",
    "dom": "tasks",
    "why": "Reviews the NSAID without blaming it for everything"
   },
   {
    "who": "pt",
    "text": "I can try the gel."
   },
   {
    "who": "dr",
    "text": "And donating — I respect that it matters to you. The blood service will decide when you can go back once we know the cause and your iron is recovered. Getting you well is the route back.",
    "dom": "rto",
    "why": "Does not collude with “clear me to donate”"
   },
   {
    "who": "pt",
    "text": "Fair enough. I’d rather know."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you notice fresh blood, black tarry stools, feel dizzy or faint, get breathless or lose weight without trying, contact us the same day. If you collapse or vomit blood, call 999. I’d like to see you in person this week to examine you, weigh you and do the bloods, and I’ll go through every result with you.",
    "dom": "gs",
    "why": "Specific safety-net and follow-up"
   },
   {
    "who": "pt",
    "text": "Okay. Not what I came in for, but I get it."
   },
   {
    "who": "dr",
    "text": "Just so I know I’ve explained it well — if someone at home asks what the doctor said, what will you tell them?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "That men shouldn’t be low on iron, so they’re checking my bowel and stomach with a camera, a stool test and a coeliac test. Iron tablets meanwhile, gel instead of ibuprofen, and no donating till it’s sorted."
   },
   {
    "who": "dr",
    "text": "Spot on. You did the right thing coming in. Anything else before we finish?",
    "dom": "gs",
    "why": "Closes and shares the floor"
   },
   {
    "who": "pt",
    "text": "No. Thanks, doctor."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question about the letter; did not jump to prescribing iron; noted “non-event” and the donor pride.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Donor identity, dislike of being a patient, what donating means to him, practical impact of endoscopy.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up looser stools, darker stools and daily ibuprofen, and the fact that being deferred rattled him.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (given too much blood, needs topping up); concern (being made a patient, losing his donor role); expectation (iron and clearance to donate).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "FIT; coeliac serology (IgA tTG with total IgA); urgent lower and upper GI endoscopy; in-person examination, weight and FBC recheck on iron.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Colorectal or gastric cancer vs NSAID gastropathy vs coeliac vs angiodysplasia vs donation-related iron loss vs dietary.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about bleeding, melaena, weight loss, dysphagia, family history; recognised IDA in a man as GI loss until proven otherwise (BSG 2021; NICE NG12 (updated April 2026)).",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Confirmed iron-deficiency anaemia of GI origin until proven otherwise, with bowel-habit change as a positive cue.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "FIT and urgent referral for bidirectional endoscopy; iron alongside; stop ibuprofen with an alternative; donation decision follows the results.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "NSAID stopped or gastroprotected; knee pain managed; coeliac excluded; iron response checked.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day symptoms (tarry stools, dizziness, fresh blood); 999 for collapse or haematemesis; in-person review this week; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Investigations & results",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Geoffrey Aldous",
    "age": "61 years · male",
    "pmh": [
     "Knee pain",
     "Regular blood donor (60+ donations)"
    ],
    "meds": [
     "Ibuprofen — takes most days (not on repeat)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Blood service letter: deferred, low Hb, “see your GP”. Practice FBC: low Hb, low MCV, low ferritin — iron-deficiency anaemia confirmed. No FIT, coeliac serology or endoscopy on record.",
    "reason": "Discuss results. “Just top me up with iron so I can donate.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and honour",
     "d": "He calls it a non-event and asks for iron. Acknowledge 60 donations, then agree to look at why the iron is low."
    },
    {
     "t": "1–5",
     "h": "Targeted GI history",
     "d": "Bowel habit, blood, dark or black stools, weight, dyspepsia, swallowing, NSAIDs, anticoagulants, diet, family history."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "He thinks he has given too much blood; being turned away rattled him; he dislikes being a patient."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Men don’t lose iron without a reason. FIT, coeliac serology, urgent camera tests of both ends. Iron alongside. Stop ibuprofen, offer a gel."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Tarry stools, dizziness, fresh blood — same day; collapse — 999. See him in person this week. Donation follows the results. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes iron and tells him to go back to donating when his count recovers; accepts “I feel fine”; attributes everything to ibuprofen or to donating; no FIT, no endoscopy, no coeliac test; ignores the looser and darker stools.",
    "pass": "Recognises IDA in a man needs GI investigation; arranges FIT and urgent referral with coeliac serology; starts iron alongside; reviews the ibuprofen; basic safety-net.",
    "exc": "All of the above, plus: explains the “men don’t have periods” logic in words he repeats; turns his darker stools and looser habit into reasons rather than footnotes; warns that iron darkens stools; honours his donor identity while holding the line; picks up that being deferred rattled him; teach-back and an in-person review booked."
   },
   "avoid": [
    {
     "dont": "“You’ve probably just donated too often — here’s some iron.”",
     "instead": "“Donating can lower iron, but in a man I always need to check the gut too — that’s how we make sure it’s safe.”",
     "why": "Accepting donation or NSAIDs as the cause is the trap that delays a bowel cancer diagnosis."
    },
    {
     "dont": "“We need to rule out bowel cancer urgently.”",
     "instead": "“Most causes are harmless, but one we must rule out is a growth that bleeds quietly — the camera tests will tell us.”",
     "why": "Leading with cancer frightens and loses him; honest context keeps him on the pathway."
    },
    {
     "dont": "“Once your iron’s back up you can donate again.”",
     "instead": "“The blood service will decide once we know the cause and you’ve recovered.”",
     "why": "Clearing him to donate before investigation colludes with the quick fix and is outside your role."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Donor identity",
     "t": "Decades of donating can be central to how someone sees themselves. Being turned away can feel like a loss; framing investigation as the route back engages rather than threatens."
    },
    {
     "h": "Reluctant patient",
     "t": "“I don’t like being a patient” can mean missed appointments. Explain what the tests involve and what to expect so he stays on the pathway."
    }
   ],
   "legal": [
    {
     "h": "Driving after sedation",
     "t": "If he has sedation for endoscopy he must not drive home and needs someone to collect him; the unit will say how long to avoid driving. No DVLA notification is needed for the investigation itself."
    }
   ],
   "professional": [
    {
     "h": "Incidental results from other services",
     "t": "GMC Good Medical Practice (2024): act on results you receive. A blood-service letter is a clinical result; document the plan, the referral and his agreement."
    },
    {
     "h": "Safe prescribing",
     "t": "Prescribing iron without investigating the cause falls short of good clinical care. Iron and investigation go together."
    }
   ],
   "community": [
    {
     "h": "Support and information",
     "t": "Bowel Cancer UK and Guts UK for information on FIT and endoscopy; NHS Blood and Transplant for questions about returning to donate once cleared."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Change to looser stools over months and occasional darker stools — act on them",
     "Black, tarry stools with dizziness or collapse, or haematemesis — same-day or emergency",
     "Weight loss, dysphagia, upper abdominal pain — upper GI criteria in NICE NG12 (updated April 2026)",
     "Family history of bowel cancer"
    ],
    "psychosocial": [
     "Proud 60-time donor — honour the identity",
     "Dislikes being a patient; mild avoidance",
     "Knee pain that drives daily ibuprofen"
    ],
    "ice": [
     "Idea: “I’ve given too much blood and just need topping up”",
     "Concern: being made a patient; being turned away rattled him",
     "Expectation: iron tablets and clearance to donate"
    ]
   },
   "diagnosis": "Confirmed iron-deficiency anaemia in a 61-year-old man with looser stools for months, occasional darker stools and daily ibuprofen. GI blood loss until proven otherwise — colorectal or gastric cancer must be excluded, alongside NSAID-related bleeding and coeliac disease.",
   "diagnosisLay": "“Your blood is short of iron. Women can lose iron through periods; men don’t. So in a man, low iron usually means a small amount of blood is slowly being lost somewhere in the gut, often without you seeing it. Most causes are harmless, but we have to find it — that’s what the tests are for.”",
   "management": {
    "reflectIce": "“You thought you’d just given too much blood, and you’d like to get back to donating. I want that too — and finding out why your iron is low is how we get you there safely.”",
    "psychosocial": "Use his donor identity as the motivation: investigation is the route back. Explain the tests plainly so he doesn’t drop out of the pathway.",
    "sharedPlan": [
     "FIT; coeliac serology (IgA tTG with total IgA) while eating gluten; urgent referral for colonoscopy and gastroscopy",
     "Oral iron once daily alongside investigation; recheck FBC in about 4 weeks",
     "Stop ibuprofen; topical NSAID gel or paracetamol for the knees; PPI if an oral NSAID is unavoidable",
     "Return to donation decided by the blood service after the cause is found and treated"
    ],
    "safetyNet": [
     "Same day: black tarry stools, fresh blood, dizziness, faintness or breathlessness; 999 for collapse or vomiting blood",
     "In-person review this week (examination, weight, bloods); GP goes through all results with him"
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
    "ic": "💠",
    "t": "Iron-deficiency anaemia",
    "s": "Protocol · iron dosing, FIT and referral",
    "href": "management/iron-deficiency-anaemia.html"
   },
   {
    "ic": "🗺️",
    "t": "Anaemia pathway",
    "s": "Visual algorithm · low Hb",
    "href": "algorithms/anaemia.html"
   },
   {
    "ic": "🗺️",
    "t": "Rectal bleeding",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) FIT threshold",
    "href": "algorithms/rectal-bleeding.html"
   }
  ],
  "pitfalls": {
   "intro": "Everyone knows iron-deficiency anaemia in a man needs investigating. This station is failed when a pleasant, well patient talks the doctor into the quick fix, or when the doctor explains the risk so bluntly that the patient disengages.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing iron and telling him to return to donating.",
     "why": "Treats the number, masks occult bleeding and can delay a colorectal cancer diagnosis by months — a clear clinical-management fail.",
     "fix": "Iron alongside, never instead of, FIT and bidirectional endoscopy."
    },
    {
     "dom": "tasks",
     "fail": "Blaming the ibuprofen or the donations and stopping there.",
     "why": "Both can contribute, but neither excludes a cancer. BSG 2021 still recommends upper and lower GI investigation in men with IDA.",
     "fix": "“The ibuprofen may be part of it, but I can’t assume it’s the whole story.”"
    },
    {
     "dom": "tasks",
     "fail": "Relying on a negative FIT to avoid referral.",
     "why": "In unexplained IDA a low FIT does not exclude an upper GI source, and NICE HTG690 says not to delay referral if concern persists.",
     "fix": "Arrange FIT and refer for bidirectional endoscopy; the FIT result supports rather than replaces the plan."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting coeliac serology.",
     "why": "Coeliac disease is a common, treatable cause of IDA (BSG 2021; NICE NG20).",
     "fix": "IgA tTG with total IgA while he is still eating gluten."
    },
    {
     "dom": "rto",
     "fail": "Brushing past “I don’t want to stop donating” as irrelevant.",
     "why": "It is his hidden agenda. Ignoring it loses rapport and risks him not attending.",
     "fix": "Acknowledge the 60 donations and frame investigation as the route back."
    },
    {
     "dom": "gs",
     "fail": "Not warning that iron turns stools black.",
     "why": "He already reports darker stools. Without the warning, he can’t tell expected iron effect from melaena.",
     "fix": "“Iron makes stools dark; if they become tarry and sticky, or you feel faint, ring us that day.”"
    }
   ]
  }
 },
 "breast-lump-2ww": {
  "stem": {
   "name": "Priya Kaushal",
   "age": "34-year-old woman",
   "pmh": [
    "Two previous pregnancies; has breastfed, not currently feeding",
    "No breast problems recorded"
   ],
   "meds": [
    "None recorded"
   ],
   "allergy": "No allergies recorded",
   "recent": "No recent consultations. Booked herself a video appointment: “lump in right breast”.",
   "reason": "Found a lump in her right breast about 3 weeks ago; wants it checked."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · GMC Good medical practice (2024) · GMC Intimate examinations and chaperones · NHS England Faster Diagnosis Standard",
   "summary": "Any unexplained breast lump at 30 or over goes on a suspected cancer pathway referral, whatever the examination feels like. Pain, age and a benign feel do not change that.",
   "points": [
    {
     "h": "The NICE NG12 (updated April 2026) breast criteria",
     "t": "NICE NG12 (updated April 2026): refer using a suspected cancer pathway referral (appointment within 2 weeks) for breast cancer if aged 30 and over with an unexplained breast lump, with or without pain; or aged 50 and over with discharge, retraction or other changes of concern in one nipple only."
    },
    {
     "h": "Consider criteria",
     "t": "NICE NG12 (updated April 2026): consider a suspected cancer pathway referral for skin changes suggestive of breast cancer, or aged 30 and over with an unexplained lump in the axilla. Under 30 with an unexplained breast lump: consider a non-urgent referral."
    },
    {
     "h": "Triple assessment",
     "t": "The breast clinic combines clinical examination, imaging (ultrasound, with mammography depending on age and findings) and needle biopsy if needed, usually in one visit. Most people referred do not have cancer."
    },
    {
     "h": "Examine in person",
     "t": "A lump cannot be examined over video. Arrange a face-to-face examination of both breasts, axillae and supraclavicular fossae with a chaperone offered and the offer recorded (GMC Intimate examinations and chaperones). The referral does not wait for, or depend on, the examination."
    },
    {
     "h": "Myths to correct",
     "t": "Most breast cancers present as a painless lump, and being in her thirties lowers the risk but does not remove it — that is why the NICE NG12 (updated April 2026) threshold is 30, not 50."
    },
    {
     "h": "Timescales",
     "t": "NHS England Faster Diagnosis Standard: people referred with suspected cancer should have cancer ruled out or diagnosed within 28 days of referral. Tell her roughly what to expect and when."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Priya, I’m Dr Hughes. Thanks for booking in. Tell me what’s been happening, in your own words.",
    "dom": "rto",
    "why": "Open question; lets her lead"
   },
   {
    "who": "pt",
    "text": "I found a lump in my right breast a few weeks ago. It’s probably nothing, isn’t it? I’m only 34, and it doesn’t hurt. I’m sure it’s a cyst. I just want you to tell me it’s fine — I don’t want a big fuss or hospitals."
   },
   {
    "who": "dr",
    "text": "I can hear how much you want this to be nothing, and I’m really glad you came rather than sitting on it. I’d like to ask a few questions, then talk about what happens next and what’s worrying you. Is that all right?",
    "dom": "gs",
    "why": "Acknowledges the wish without colluding; sets the agenda"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Where exactly is it, and how did you find it?",
    "dom": "tasks",
    "why": "Characterises the lump"
   },
   {
    "who": "pt",
    "text": "Upper outer part of my right breast, towards my armpit. I felt it in the shower about three weeks ago. It feels firm."
   },
   {
    "who": "dr",
    "text": "Has it changed at all since you found it?",
    "dom": "tasks",
    "why": "Asks about growth — a key feature"
   },
   {
    "who": "pt",
    "text": "I think it might be a bit bigger. I keep checking it, so maybe I’m imagining it."
   },
   {
    "who": "dr",
    "text": "You know your body — I’ll take that seriously. Have you noticed any change in the skin, like dimpling or redness, or anything from the nipple — discharge, or it pulling in? Any lumps in your armpit?",
    "dom": "tasks",
    "why": "Screens skin, nipple and axillary features"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. No pain at all."
   },
   {
    "who": "dr",
    "text": "Are you breastfeeding at the moment, or recently?",
    "dom": "tasks",
    "why": "Excludes a lactation-related cause"
   },
   {
    "who": "pt",
    "text": "No, not for a while now. I’ve two kids, I fed them both."
   },
   {
    "who": "dr",
    "text": "And has anyone in your family, or anyone close to you, had breast problems?",
    "dom": "tasks",
    "why": "Family history and possible driver of her fear"
   },
   {
    "who": "pt",
    "text": "Can we not go there right now? I just want to know about mine."
   },
   {
    "who": "dr",
    "text": "Of course. We can come back to it whenever you’re ready — it’s useful for the specialists to know, but it doesn’t change what I’m going to suggest today.",
    "dom": "rto",
    "why": "Respects her boundary; leaves the door open"
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said you’re sure it’s a cyst and you don’t want hospitals. Can I gently ask what the worry is underneath that?",
    "dom": "rto",
    "why": "Reads reassurance-seeking as fear and names it"
   },
   {
    "who": "pt",
    "text": "(Pause.) That it’s cancer. I’ve got two little ones. I can’t even say the word without feeling sick. If you tell me it’s a cyst, I don’t have to think about it."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That’s a completely understandable fear, especially with your children — and it’s the reason I want to give you a proper answer rather than a guess.",
    "dom": "rto",
    "why": "Validates the fear and links it to the plan"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Two things I want to be honest about, because lots of people believe them. Being 34 doesn’t mean a lump can’t be important, and most breast lumps that turn out to matter don’t hurt. So ‘young and painless’ can’t reassure either of us.",
    "dom": "tasks",
    "why": "Corrects the misconceptions accurately"
   },
   {
    "who": "pt",
    "text": "Oh. I really thought pain was the bad sign."
   },
   {
    "who": "dr",
    "text": "It’s a very common belief. So here’s the plan: for anyone aged 30 or over with a new lump like this, the NICE NG12 (updated April 2026) cancer-referral guideline is to refer to the breast clinic on the urgent cancer pathway, with an appointment within two weeks. That’s true however it feels to me.",
    "dom": "tasks",
    "why": "Applies the NICE NG12 (updated April 2026) threshold; exam will not override it"
   },
   {
    "who": "pt",
    "text": "So you think it’s cancer?"
   },
   {
    "who": "dr",
    "text": "No — this is a check, not a diagnosis. Most people sent this way turn out to have something harmless, often a cyst or a benign lump. At the clinic they examine you, do a scan, and take a small sample with a needle only if needed — usually all in one visit.",
    "dom": "tasks",
    "why": "Explains triple assessment and the realistic odds"
   },
   {
    "who": "dr",
    "text": "I also need to examine you properly, and I can’t do that on a screen. Could you come into the surgery today? I’ll check both breasts and under your arms, a chaperone will be with us, and you can stop me at any point.",
    "dom": "tasks",
    "why": "Face-to-face exam with chaperone; not done over video"
   },
   {
    "who": "pt",
    "text": "I suppose so. I hate being examined."
   },
   {
    "who": "dr",
    "text": "That’s okay to say. I’ll explain each step before I do it, and if you’d prefer a female doctor for the examination I can arrange that.",
    "dom": "rto",
    "why": "Consent and dignity; offers choice"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "What would make it easier to get to the clinic — childcare, work?",
    "dom": "rto",
    "why": "Addresses practical barriers to attendance"
   },
   {
    "who": "pt",
    "text": "I’d need to sort the kids. But I’ll do it. I’d rather know than keep poking at it every night."
   },
   {
    "who": "dr",
    "text": "That’s a brave decision. The clinic may take a few hours, so plan for that, and bring someone with you if you’d like. The aim is that you have an answer within about four weeks of today.",
    "dom": "gs",
    "why": "Sets expectations and timescale (Faster Diagnosis Standard)"
   },
   {
    "who": "pt",
    "text": "Okay. That’s actually less scary than wondering."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "I’ll send the referral today. If you haven’t heard from the clinic within a week, ring us and we’ll chase it. If the lump grows quickly, or you notice skin or nipple changes before then, contact us sooner. And I’ll look at the result and speak with you afterwards.",
    "dom": "gs",
    "why": "Specific safety-net, fail-safe and follow-up"
   },
   {
    "who": "dr",
    "text": "Just so I know I’ve explained it well — what will you tell your partner or a friend about the plan tonight?",
    "dom": "rto",
    "why": "Checks understanding without assuming who is at home"
   },
   {
    "who": "pt",
    "text": "That I’m being examined today and seen at the breast clinic within two weeks for a scan, and that most of these are nothing. And to call if I don’t hear."
   },
   {
    "who": "dr",
    "text": "Exactly right. You did the right thing coming in. See you this afternoon.",
    "dom": "rto",
    "why": "Affirms and closes warmly"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her finish the opening, including “just tell me it’s fine”, before narrowing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Two young children, work and childcare as practical barriers to attending the breast clinic.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Heard “it might be bigger” and “don’t want hospitals” and explored them rather than moving on.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a cyst; young and painless means safe), concern (cancer and her children), expectation (to be told it is fine).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Face-to-face examination of both breasts, axillae and supraclavicular nodes with a chaperone offered and recorded; no tests needed before referral.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Cyst, fibroadenoma and other benign causes versus breast cancer; checked skin, nipple and axillary features and lactation.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Recognised that cancer cannot be excluded by age, lack of pain or a benign feel — only by triple assessment.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Unexplained breast lump at 34 meeting the NICE NG12 (updated April 2026) suspected cancer pathway criterion.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Suspected cancer pathway referral today; triple assessment explained; misconceptions corrected; examination with a chaperone and choice of examiner.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Planned around childcare and work; left the door open for any family history she wants to share later.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Chase if no appointment within a week, changes that need sooner contact, result reviewed with her.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Priya Kaushal",
    "age": "34-year-old woman",
    "pmh": [
     "Two previous pregnancies; has breastfed, not currently feeding",
     "No breast problems recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "No allergies recorded",
    "recent": "No recent consultations. Booked herself a video appointment: “lump in right breast”.",
    "reason": "Found a lump in her right breast about 3 weeks ago; wants it checked."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & listen",
     "d": "She opens by asking to be told it is fine. Let her finish, acknowledge the wish, don’t agree with it."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Site, duration, growth, skin, nipple, axilla, lactation, family history (respect her if she won’t go there)."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "Name the fear under the “it’s a cyst”: cancer and her two children."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Correct the myths, state the NICE NG12 (updated April 2026) age-30 criterion, explain triple assessment, arrange an in-person exam with a chaperone, plan around childcare."
    },
    {
     "t": "10–12",
     "h": "Safety-net & close",
     "d": "Referral today, chase if no date in a week, what changes need sooner contact, teach-back, result review."
    }
   ],
   "wordPics": {
    "fail": "Tells her it sounds like a cyst and to come back if it grows; or “examines” over video; or refers without explaining, leaving her terrified and unlikely to attend; no chaperone mentioned.",
    "pass": "Takes a focused history, applies the NICE NG12 (updated April 2026) age-30 criterion, arranges a face-to-face examination with a chaperone, explains the breast clinic and safety-nets.",
    "exc": "All of that, plus: names the fear about her children and uses it to motivate the plan; corrects both myths in plain words; makes clear the exam won’t change the referral; removes practical barriers; checks understanding and owns the follow-up."
   },
   "avoid": [
    {
     "dont": "“It sounds like a cyst — let’s see if it goes after your next period.”",
     "instead": "“At 30 or over, any new lump goes to the breast clinic within two weeks — most turn out to be harmless, but that’s how we know.”",
     "why": "Watchful waiting for an unexplained lump at 34 is outside NICE NG12 (updated April 2026) and is the key Tasks fail."
    },
    {
     "dont": "“It feels smooth and mobile, so I’m not worried.”",
     "instead": "“Whatever it feels like to me, the right step is the clinic scan.”",
     "why": "A benign-feeling examination does not override the referral criterion."
    },
    {
     "dont": "“We have to rule out cancer, so I’m sending you urgently.” (and nothing more)",
     "instead": "“This is a check, not a diagnosis. Most people sent this way have something harmless.”",
     "why": "Cold delivery to a frightened patient risks non-attendance and loses Relating marks."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Children and work",
     "t": "A mother of two young children with a demanding job may struggle to attend a clinic that can take several hours. Planning childcare and time off is part of making the referral work."
    },
    {
     "h": "Fear and avoidance",
     "t": "Fear of cancer and hospitals is a common reason for delayed presentation and missed appointments. Naming it and pairing honesty with realistic reassurance improves attendance."
    }
   ],
   "legal": [
    {
     "h": "Consent and chaperones",
     "t": "Explain why a breast examination is needed, get consent, offer a chaperone and record the offer and her response (GMC Intimate examinations and chaperones). She can ask to stop at any time."
    },
    {
     "h": "Informed refusal",
     "t": "An adult with capacity may decline referral. If she did, explain the risk in plain terms, record the discussion, and keep the door open to referral later."
    }
   ],
   "professional": [
    {
     "h": "Honesty over comfort",
     "t": "Reassuring her to spare distress would fall short of GMC Good medical practice (2024). Be honest, give information in a way she can use, and support her through it."
    },
    {
     "h": "Referral safety-netting",
     "t": "Track suspected cancer referrals so none are lost, and make sure the result reaches the patient."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Breast Cancer Now helpline and information on breast clinics; Macmillan Cancer Support if a diagnosis is made."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Unexplained breast lump at 30 or over (with or without pain) — suspected cancer pathway referral",
     "Skin changes, a lump in the axilla, or one-sided nipple change",
     "Increase in size since she found it"
    ],
    "psychosocial": [
     "Two young children — childcare for appointments",
     "Work pressures and time off",
     "Fear of examination and hospitals"
    ],
    "ice": [
     "Idea: “It’s just a cyst — I’m too young and it doesn’t hurt”",
     "Concern: cancer, and what it would mean for her children",
     "Expectation: to be told it is fine with no fuss"
    ]
   },
   "diagnosis": "An unexplained right breast lump in a 34-year-old woman, possibly enlarging: this meets the NICE NG12 (updated April 2026) criterion for a suspected cancer pathway referral for triple assessment. The likeliest causes are benign, but that can only be confirmed at the clinic.",
   "diagnosisLay": "“A new lump at your age is usually something harmless like a cyst. But the only way to be sure is a scan at the breast clinic, and at 30 or over we send everyone within two weeks — it’s a check, not a verdict.”",
   "management": {
    "reflectIce": "“You told me the real fear is what this could mean for your children. That’s exactly why I want you to get a proper answer quickly, not a guess from me.”",
    "psychosocial": "Plan childcare and time off; offer choice of examiner and a chaperone; encourage her to bring someone to clinic.",
    "sharedPlan": [
     "Suspected cancer pathway breast referral sent today",
     "Face-to-face examination today with a chaperone",
     "Explain triple assessment and the Faster Diagnosis Standard timescale"
    ],
    "safetyNet": [
     "Ring if no appointment within a week",
     "Contact sooner if the lump grows or skin or nipple changes appear",
     "GP reviews the result with her"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Breast cancer",
    "s": "Case walkthrough · NICE NG12 (updated April 2026)",
    "href": "../cases/breast-cancer.html"
   },
   {
    "ic": "📋",
    "t": "Breast disorders",
    "s": "Case walkthrough · benign lumps",
    "href": "../cases/breast-disorders.html"
   },
   {
    "ic": "💠",
    "t": "Breast cancer protocol",
    "s": "Referral · follow-up",
    "href": "management/breast-cancer.html"
   },
   {
    "ic": "💠",
    "t": "Breast disorders protocol",
    "s": "Cysts · fibroadenoma · mastalgia",
    "href": "management/breast-disorders.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you apply the NICE NG12 (updated April 2026) age-30 breast criterion without being talked out of it, while handling a frightened patient kindly. The common fails are clinical collusion and cold delivery.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Agreeing it is probably a cyst and reviewing after her next period.",
     "why": "NICE NG12 (updated April 2026): an unexplained breast lump at 30 or over is a suspected cancer pathway referral. “Watch and wait” is a management plan not in line with UK practice.",
     "fix": "State the criterion plainly and refer today, however benign it sounds."
    },
    {
     "dom": "tasks",
     "fail": "Performing or describing an “examination” over video, or letting the planned exam decide whether to refer.",
     "why": "A breast cannot be examined on a screen, and a benign feel does not remove the referral criterion.",
     "fix": "Arrange an in-person exam with a chaperone, and say clearly that the referral goes regardless."
    },
    {
     "dom": "rto",
     "fail": "Taking “just tell me it’s fine” at face value and never exploring the fear.",
     "why": "Missing the hidden agenda (cancer and her children) forfeits Relating marks and weakens her engagement with the plan.",
     "fix": "“Can I gently ask what the worry is underneath this?” — then link the answer to the plan."
    },
    {
     "dom": "rto",
     "fail": "Correcting her myths in a way that frightens her: “Actually, lots of young women get breast cancer.”",
     "why": "Accurate but alarming delivery drives avoidance.",
     "fix": "Correct both myths, then balance: most people referred have something harmless."
    },
    {
     "dom": "gs",
     "fail": "Jargon — “2WW”, “triple assessment”, “FNA” — without explanation.",
     "why": "Language the patient cannot follow is a standard Global Skills feedback statement.",
     "fix": "“An examination, a scan and a small needle sample if needed, usually in one visit.”"
    },
    {
     "dom": "gs",
     "fail": "Closing with “you’ll hear from the hospital” and no fail-safe.",
     "why": "Non-specific safety-netting and no ownership of the result.",
     "fix": "Chase if no date within a week, named changes to report, and GP follow-up of the result."
    }
   ]
  }
 },
 "child-petechiae-leukaemia": {
  "stem": {
   "name": "Leo Whitfield",
   "age": "3-year-old boy (attends with his mother, Hayley)",
   "pmh": [
    "Nothing significant recorded",
    "Attends nursery"
   ],
   "meds": [
    "None recorded"
   ],
   "allergy": "No allergies recorded",
   "recent": "No recent consultations. Video appointment booked by mother today: “spots and bruises, not himself”.",
   "reason": "About 2 weeks of small red-purple spots, unexplained bruises, pallor, tiredness and a couple of temperatures."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · NICE NG143 (fever in under 5s) · NICE NG254 (sepsis, under 16s) · NICE NG240 (meningitis and meningococcal disease, 2024) · NICE CG89 (child maltreatment)",
   "summary": "A child with a non-blanching rash is seen face to face today. Exclude meningococcal disease first; unexplained petechiae then mean immediate specialist assessment for leukaemia.",
   "points": [
    {
     "h": "Safety first",
     "t": "A non-blanching rash is a red feature in NICE NG143. With fever or any sign of being unwell (drowsy, floppy, mottled, cold hands and feet, fast breathing, rapidly spreading rash), treat as possible meningococcal disease or sepsis: emergency transfer by 999 (NICE NG240, NICE NG254). Give parenteral antibiotics before transfer only as NICE NG240 directs; dose per BNFC."
    },
    {
     "h": "Leukaemia — immediate",
     "t": "NICE NG12 (updated April 2026): refer children and young people for immediate specialist assessment for leukaemia if they have unexplained petechiae or hepatosplenomegaly. Leo’s petechiae alone meet this — same day, not a routine review."
    },
    {
     "h": "Leukaemia — very urgent FBC",
     "t": "NICE NG12 (updated April 2026): offer a very urgent FBC (within 48 hours) for children and young people with pallor, persistent fatigue, unexplained fever, unexplained persistent infection, generalised lymphadenopathy, persistent or unexplained bone pain, unexplained bruising or unexplained bleeding. He has several; with petechiae, the paediatric team does this today."
    },
    {
     "h": "Video is not enough",
     "t": "The rash, nodes, liver and spleen cannot be examined on a screen. Ask the parent to do the glass test on camera and look at the child, then arrange same-day face-to-face paediatric assessment."
    },
    {
     "h": "Differential",
     "t": "Leukaemia, immune thrombocytopenia (often a well child with bruising and petechiae), IgA vasculitis (palpable purpura on legs and buttocks), meningococcal disease, other infections, and non-accidental injury. The FBC and film separate most of these."
    },
    {
     "h": "Safeguarding without assumption",
     "t": "NICE CG89: consider maltreatment when bruising is unexplained or doesn’t fit the history or the child’s mobility. Here a medical cause is likely and must be investigated first; record the bruise pattern and keep an open mind."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Hughes. You must be Hayley, and this is Leo. Tell me what’s been happening.",
    "dom": "rto",
    "why": "Open question to the parent"
   },
   {
    "who": "pt",
    "text": "I’m probably overreacting, but he’s got these little red spots all over his legs, and bruises I can’t explain — he hasn’t banged himself. He’s so pale, shattered, off his food, not himself. He’s had a couple of temperatures. My mum says it’s just a virus from nursery. Is it?"
   },
   {
    "who": "dr",
    "text": "You’re not overreacting — you know Leo best, and ‘not himself’ is one of the most important things a parent can tell me. I’m going to check a few urgent things first, then explain what I think. Okay?",
    "dom": "rto",
    "why": "Validates her instinct; sets a safety-first agenda"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Data gathering — safety first",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Have you got a clear glass? Press it firmly on some of the spots and hold the camera close. Do they fade under the glass?",
    "dom": "tasks",
    "why": "Glass test guided on camera"
   },
   {
    "who": "pt",
    "text": "No… they’re still there. They don’t fade."
   },
   {
    "who": "dr",
    "text": "Thank you. Right now, is he hot? Is he drowsy or floppy, hard to wake, or are his hands and feet cold? Is he breathing fast?",
    "dom": "tasks",
    "why": "Screens for meningococcal disease and sepsis"
   },
   {
    "who": "pt",
    "text": "He’s awake — he’s here on my lap, just clingy and grizzly. He’s pale. He doesn’t feel hot right now."
   },
   {
    "who": "dr",
    "text": "Are the spots spreading quickly today, or have they come up gradually over the last couple of weeks?",
    "dom": "tasks",
    "why": "Separates acute purpura from a subacute picture"
   },
   {
    "who": "pt",
    "text": "Gradually. Over about two weeks. And the bruises too."
   },
   {
    "who": "dr",
    "text": "Where are the bruises? And has he had any nosebleeds or bleeding gums, or complained of his legs or bones hurting?",
    "dom": "tasks",
    "why": "Bleeding, bruise distribution and bone pain"
   },
   {
    "who": "pt",
    "text": "On his legs and his tummy. He hasn’t said anything about pain, he’s just miserable."
   },
   {
    "who": "dr",
    "text": "Has he been eating and drinking, and passing wee?",
    "dom": "tasks",
    "why": "Hydration and traffic-light assessment"
   },
   {
    "who": "pt",
    "text": "Off his food. He’s drinking a bit."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "What’s been going through your mind while you’ve been watching this?",
    "dom": "rto",
    "why": "Opens her ideas and concerns"
   },
   {
    "who": "pt",
    "text": "Everyone keeps saying virus. But he’s not right. I’ve been lying awake. I couldn’t settle until I’d asked someone."
   },
   {
    "who": "dr",
    "text": "Thank you. Your instinct brought him here, and it was the right call.",
    "dom": "rto",
    "why": "Affirms the mother and counters the dismissal"
   },
   {
    "phase": "Explanation",
    "clock": "5–7 min",
    "who": "dr",
    "text": "I’m going to be honest and calm with you. Spots that don’t fade under a glass, with bruises, paleness and tiredness, are something we never wait on in a child. I don’t think this is just a virus.",
    "dom": "tasks",
    "why": "Rejects the viral label honestly"
   },
   {
    "who": "pt",
    "text": "What do you think it is?"
   },
   {
    "who": "dr",
    "text": "There are several possibilities. Sometimes the body uses up its clotting cells after an infection, which often gets better by itself. But it can also be a problem with how the blood cells are made, and we must check that today with a blood test and a specialist examination.",
    "dom": "tasks",
    "why": "Explains the differential including leukaemia without the word forced on her"
   },
   {
    "who": "pt",
    "text": "You mean leukaemia?"
   },
   {
    "who": "dr",
    "text": "That’s one of the things the children’s doctors will want to rule out, yes. I’m not saying that’s what it is. But that’s why he needs to be seen today, not in a few days.",
    "dom": "rto",
    "why": "Answers her direct question honestly without catastrophising"
   },
   {
    "phase": "Shared management",
    "clock": "7–10 min",
    "who": "dr",
    "text": "Here’s the plan. I’m ringing the children’s assessment unit at the hospital now to say Leo needs to be seen straight away. They’ll examine him fully, check his glands, tummy, liver and spleen, and do a blood count today.",
    "dom": "tasks",
    "why": "Immediate specialist assessment per NICE NG12 (updated April 2026), with the FBC"
   },
   {
    "who": "pt",
    "text": "Today? Right now?"
   },
   {
    "who": "dr",
    "text": "Yes, now. Can you get him there straight away? If there’s any difficulty, or if at any point he seems worse, we’ll send an ambulance instead.",
    "dom": "gs",
    "why": "Confirms transport; escalation route"
   },
   {
    "who": "pt",
    "text": "Yes, I can get him there now."
   },
   {
    "who": "dr",
    "text": "Is there someone who can be with you, or look after anything at home?",
    "dom": "rto",
    "why": "Checks her support"
   },
   {
    "who": "pt",
    "text": "I’ll ring my mum."
   },
   {
    "phase": "Safety-net & close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "On the way, or at any point: if he becomes drowsy or floppy, the spots spread quickly, he gets a high temperature, cold hands and feet, or you’re frightened by any change — call 999 and say he has a rash that doesn’t fade.",
    "dom": "gs",
    "why": "Explicit meningococcal red flags and 999 route"
   },
   {
    "who": "dr",
    "text": "So I know I’ve explained it clearly — what are you going to do when we finish?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Take him straight to the children’s unit. They’re expecting us. If he gets floppy or the spots spread, 999."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll send them my notes now, and I’ll ring you tomorrow to see how he’s getting on. You’ve done everything right.",
    "dom": "gs",
    "why": "Handover, documentation and GP follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question to the mother; let her give the whole story including “am I overreacting?”.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Nursery, family advice that it is a virus, her exhaustion, who can support her today.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “not himself” and “bruises I can’t explain” and acted on both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (virus, per grandmother), concern (something serious; being seen as overreacting), expectation (to know if it is serious).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Glass test on camera; observation; same-day face-to-face paediatric examination including nodes, liver and spleen; FBC and film.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Meningococcal disease, leukaemia, ITP, IgA vasculitis, infection, non-accidental injury — without fixing early.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened fever, drowsiness, perfusion, breathing and rash spread first; defined when to call 999.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Unexplained non-blanching petechiae with pallor, fatigue, fever and bruising: NICE NG12 (updated April 2026) trigger for immediate specialist assessment for leukaemia.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Direct call to the paediatric assessment unit, seen today, transport confirmed, ambulance if any deterioration.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Bruise pattern recorded and safeguarding kept in mind without accusation; mother’s support arranged.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named 999 symptoms, written handover, GP call the next day.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Urgent & unscheduled care",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Leo Whitfield",
    "age": "3-year-old boy (attends with his mother, Hayley)",
    "pmh": [
     "Nothing significant recorded",
     "Attends nursery"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "No allergies recorded",
    "recent": "No recent consultations. Video appointment booked by mother today: “spots and bruises, not himself”.",
    "reason": "About 2 weeks of small red-purple spots, unexplained bruises, pallor, tiredness and a couple of temperatures."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & validate",
     "d": "Let her finish, then say plainly she is not overreacting."
    },
    {
     "t": "1–4",
     "h": "Safety first",
     "d": "Glass test on camera; fever, drowsiness, perfusion, breathing, rash spread; bleeding and bone pain; feeding."
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "Her fear and the family telling her it is a virus."
    },
    {
     "t": "5–10",
     "h": "Explain and act",
     "d": "Not a virus; possibilities including a blood problem; ring the paediatric unit now; transport; support."
    },
    {
     "t": "10–12",
     "h": "Safety-net & close",
     "d": "999 symptoms, teach-back, handover, GP follow-up call."
    }
   ],
   "wordPics": {
    "fail": "Calls it a viral rash and reviews in a few days; or tries to manage entirely over video; or frightens the mother with “this could be leukaemia or meningitis” and no clear plan.",
    "pass": "Does the glass test, screens for sepsis, recognises unexplained petechiae as an NICE NG12 (updated April 2026) immediate-referral trigger, arranges same-day paediatric assessment and gives 999 advice.",
    "exc": "All of that, plus: validates the mother first; answers “leukaemia?” honestly and calmly; confirms transport and support; holds the differential including safeguarding without accusation; teach-back and a next-day call."
   },
   "avoid": [
    {
     "dont": "“It’s probably a virus — let’s see him again if it’s not better in a few days.”",
     "instead": "“Spots that don’t fade under a glass in a child who isn’t himself need to be seen today.”",
     "why": "Unexplained petechiae in a child are an NICE NG12 (updated April 2026) trigger for immediate specialist assessment."
    },
    {
     "dont": "“How did he get these bruises?” (asked flatly, as an accusation)",
     "instead": "“Where are the bruises, and has he had any bleeding from his nose or gums?”",
     "why": "Gather the pattern clinically; safeguarding stays in mind without alienating a frightened parent."
    },
    {
     "dont": "“I’m worried he has leukaemia.”",
     "instead": "“It could be a problem with how the blood cells are made, which we must check today — I’m not saying that’s what it is.”",
     "why": "Honest without delivering a diagnosis you do not have."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Parent under strain",
     "t": "An exhausted mother told by family she is overreacting may doubt herself. Validation keeps her engaged and makes her safety-netting reliable."
    },
    {
     "h": "Nursery",
     "t": "Nursery can be told he is unwell and being assessed; no exclusion decision is needed until a diagnosis is known."
    }
   ],
   "legal": [
    {
     "h": "Safeguarding",
     "t": "NICE CG89: unexplained bruising in a young child prompts consideration of maltreatment, alongside medical causes. Record the pattern and the history; if concerns remain after medical assessment, follow local safeguarding procedures."
    },
    {
     "h": "Parental responsibility and consent",
     "t": "His mother gives consent for examination and tests. Explain what will happen and why."
    }
   ],
   "professional": [
    {
     "h": "Remote consulting limits",
     "t": "Know when video is not enough. A child with a non-blanching rash must be seen in person the same day; document why and how you arranged it."
    },
    {
     "h": "Handover",
     "t": "Speak directly to the paediatric team and send a written summary so nothing is lost at the front door."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "If a blood disorder is found, the paediatric team links families to specialist nurses and charities such as Young Lives vs Cancer or ITP Support Association as relevant."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Non-blanching rash with fever or an unwell child — possible meningococcal disease, 999",
     "Unexplained petechiae or hepatosplenomegaly — immediate specialist assessment (NICE NG12 (updated April 2026))",
     "Pallor, fatigue, fever, bruising, bleeding, bone pain, generalised lymphadenopathy"
    ],
    "psychosocial": [
     "Mother exhausted, doubting herself after family said it’s a virus",
     "Who can support her today",
     "Nursery attendance"
    ],
    "ice": [
     "Idea: “My mum says it’s just a virus from nursery”",
     "Concern: something is seriously wrong; being seen as overreacting",
     "Expectation: to be told whether it is serious"
    ]
   },
   "diagnosis": "A 3-year-old with two weeks of non-blanching petechiae, unexplained bruising, pallor, fatigue and intermittent fever. No features of acute meningococcal disease on video, but he needs same-day face-to-face assessment. Unexplained petechiae meet the NICE NG12 (updated April 2026) criterion for immediate specialist assessment for leukaemia; ITP and other causes are also possible.",
   "diagnosisLay": "“These little spots that don’t fade under a glass, with the bruises and him being pale and tired, mean his blood needs checking today. There are a few possible causes, some that settle on their own, and one we must rule out is a problem with how blood cells are made.”",
   "management": {
    "reflectIce": "“Everyone’s been telling you it’s a virus, but you knew he wasn’t right. You were right to bring him — and that’s exactly why I want him seen today.”",
    "psychosocial": "Confirm transport and someone to support her; keep language calm and honest; follow up personally.",
    "sharedPlan": [
     "Phone the paediatric assessment unit now: immediate specialist assessment",
     "FBC and film today at the hospital",
     "Ambulance instead if any deterioration or transport problem"
    ],
    "safetyNet": [
     "Drowsy, floppy, spreading spots, high fever, cold hands and feet — 999, say “rash that doesn’t fade”",
     "Written handover to the paediatric team",
     "GP phone call the next day"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Purpura and petechiae",
    "s": "Visual algorithm · non-blanching rash",
    "href": "algorithms/purpura-petechiae.html"
   },
   {
    "ic": "🗺️",
    "t": "Paediatric cancer referral",
    "s": "Visual algorithm · NICE NG12 (updated April 2026)",
    "href": "algorithms/paediatric-cancer-referral.html"
   },
   {
    "ic": "🗺️",
    "t": "Fever in children",
    "s": "Visual algorithm · NICE NG143 traffic light",
    "href": "algorithms/fever-children.html"
   },
   {
    "ic": "📋",
    "t": "Safeguarding",
    "s": "Case walkthrough · children",
    "href": "../cases/safeguarding.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests two things in order: exclude meningococcal disease, then act on unexplained petechiae. Communication with a frightened, dismissed mother is the second half of the marks.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Labelling it a viral rash and reviewing in a few days.",
     "why": "NICE NG12 (updated April 2026): unexplained petechiae in a child mean immediate specialist assessment for leukaemia.",
     "fix": "Same-day paediatric assessment, arranged by you, today."
    },
    {
     "dom": "tasks",
     "fail": "Going straight to the leukaemia discussion without screening for sepsis or meningococcal disease.",
     "why": "A non-blanching rash is a NICE NG143 red feature; the acute emergency must be excluded first.",
     "fix": "Glass test, fever, drowsiness, perfusion, breathing and rash spread in the first minutes."
    },
    {
     "dom": "tasks",
     "fail": "Trying to finish the assessment on video, or booking a routine face-to-face appointment.",
     "why": "Nodes, liver, spleen and the rash cannot be examined on a screen, and the timeframe is immediate.",
     "fix": "Use video for the glass test and observation, then phone the paediatric unit."
    },
    {
     "dom": "rto",
     "fail": "Agreeing she might be overreacting, or ignoring the family’s “it’s a virus”.",
     "why": "Dismissing parental concern loses Relating marks and weakens her safety-netting.",
     "fix": "“You’re not overreacting — ‘not himself’ is one of the most important things you can tell me.”"
    },
    {
     "dom": "rto",
     "fail": "Dodging “Is it leukaemia?” or answering with alarm.",
     "why": "Evasion erodes trust; blunt confirmation of an unproven diagnosis is also wrong.",
     "fix": "“That’s one thing they’ll want to rule out. I’m not saying it is. That’s why today.”"
    },
    {
     "dom": "gs",
     "fail": "Vague safety-netting — “go to A&E if worried”.",
     "why": "Non-specific safety-nets are standard failing feedback.",
     "fix": "Named signs, the 999 route and the phrase “rash that doesn’t fade”, plus teach-back."
    }
   ]
  }
 },
 "faltering-growth": {
  "stem": {
   "name": "Noah",
   "age": "5-month-old boy",
   "pmh": [
    "None recorded"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "None recorded",
   "recent": "Health visitor weight check: weight has crossed down two centile spaces on the UK-WHO chart. Breastfed. Health visitor has asked for a GP review.",
   "reason": "Video consultation with his mother: “The health visitor says he’s dropped centiles.”"
  },
  "knowledge": {
   "guideline": "NICE NG75 — Faltering growth · UK-WHO growth charts (RCPCH) · NICE CG192 — Antenatal and postnatal mental health",
   "summary": "Faltering growth needs a structured, non-blaming assessment: feeding history, an observed feed, examination and careful plotting over time. Most cases relate to feeding and settle with support. Look for red flags, and look after the mother.",
   "points": [
    {
     "h": "Definition",
     "t": "NICE NG75 thresholds depend on birthweight centile: a fall across 1 or more centile spaces if birthweight was below the 9th centile, 2 or more if between the 9th and 91st, 3 or more if above the 91st, or current weight below the 2nd centile. Check Noah’s birthweight centile before labelling."
    },
    {
     "h": "Plot properly",
     "t": "Use the UK-WHO chart, correct for prematurity, and read the trend across several weights. Measure length too. NICE NG75: weigh no more than weekly between 1 and 6 months — more frequent weighing adds noise and anxiety."
    },
    {
     "h": "Assess feeding",
     "t": "Frequency and length of feeds, attachment and positioning, signs of milk transfer, posseting or vomiting, stools and wet nappies. NICE NG75: observe a feed and involve trained infant-feeding support. Consider supplementation only after breastfeeding has been assessed and supported."
    },
    {
     "h": "Red flags and referral",
     "t": "NICE NG75 refers when there are signs of an underlying disorder, primary care interventions have failed, linear growth is slow, there is rapid weight loss or severe undernutrition, or there is a safeguarding concern. Examples: forceful or bilious vomiting, chronic diarrhoea, recurrent infections, dysmorphism, developmental concerns."
    },
    {
     "h": "Tests only when indicated",
     "t": "Routine blood tests aren’t needed if feeding explains the picture. NICE NG75 suggests urine testing for UTI (per NICE NG224) and coeliac testing only once gluten is in the diet (NICE NG20)."
    },
    {
     "h": "Maternal mental health",
     "t": "NICE CG192: ask about depression and anxiety using the Whooley questions and GAD-2. Guilt, exhaustion and low mood affect feeding confidence and are part of this consultation."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, I’m Dr Rahman. Can you hear and see me okay? And can I check Noah’s date of birth? … Thank you. I can see you’re upset — take your time and tell me what’s happened.",
    "dom": "rto",
    "why": "Video checks, then responds to visible distress before any agenda"
   },
   {
    "who": "pt",
    "text": "The health visitor weighed him and said he’s dropped down the lines. Am I starving my own baby? Maybe I haven’t got enough milk. I feel like such a failure. Please just tell me what I’m doing wrong."
   },
   {
    "who": "dr",
    "text": "Before anything else: nothing you’ve said makes me think you’re starving Noah, and you are not a failure. Lots of babies cross lines on the chart, and it’s usually about feeding needing some support, not a parent doing something wrong. Let’s work it out together.",
    "dom": "rto",
    "why": "Relieves guilt explicitly and early"
   },
   {
    "who": "pt",
    "text": "(Crying.) Sorry. I’ve just been so worried."
   },
   {
    "who": "dr",
    "text": "Please don’t apologise. I’d like to hear about his feeding, how he is generally, and how you are — then we’ll make a plan. Is that okay?",
    "dom": "gs",
    "why": "Sets a clear agenda that includes the mother"
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Tell me about a typical day of feeding.",
    "dom": "tasks",
    "why": "Open feeding history"
   },
   {
    "who": "pt",
    "text": "He feeds a lot, but little and often. He brings some back after most feeds."
   },
   {
    "who": "dr",
    "text": "When he brings milk back, is it a small posset, or forceful vomiting that shoots out? And is it ever green?",
    "dom": "tasks",
    "why": "Distinguishes posseting from red-flag vomiting"
   },
   {
    "who": "pt",
    "text": "Just small amounts dribbling out. Never green, never shooting."
   },
   {
    "who": "dr",
    "text": "That’s helpful. What are his nappies like — wet ones through the day, and his poos?",
    "dom": "tasks",
    "why": "Hydration and stool screen for malabsorption"
   },
   {
    "who": "pt",
    "text": "I think they’re normal. I’ve not noticed anything strange."
   },
   {
    "who": "dr",
    "text": "And in himself — alert, smiling, doing the things you’d expect? Any coughs, chest infections or illnesses?",
    "dom": "tasks",
    "why": "Screens development and recurrent infections"
   },
   {
    "who": "pt",
    "text": "He’s alert and smiley. No illnesses I can think of."
   },
   {
    "who": "dr",
    "text": "Good. Do you know roughly what centile he was born on, and was he born around his due date?",
    "dom": "tasks",
    "why": "Birthweight centile and prematurity change how the drop is interpreted"
   },
   {
    "who": "pt",
    "text": "I’d need to check his red book."
   },
   {
    "who": "dr",
    "text": "No problem — I’ll look at the red book and the health visitor’s plotting with you. Could you hold Noah up so I can see him? … He looks alert and comfortable on camera. I’ll still need to examine him properly in person.",
    "dom": "tasks",
    "why": "Uses the video for observation but recognises its limits"
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "Can I ask how you are? You said you feel like a failure. How has your mood been over the last few weeks?",
    "dom": "tasks",
    "why": "Opens a maternal mental-health screen"
   },
   {
    "who": "pt",
    "text": "Exhausted. I cry a lot. I thought breastfeeding was going okay, and now I don’t trust myself at all."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. Over the past month, have you often felt down or hopeless, or had little interest or pleasure in doing things? And have you felt nervous or on edge, or unable to stop worrying?",
    "dom": "tasks",
    "why": "Whooley questions and GAD-2 (NICE CG192)"
   },
   {
    "who": "pt",
    "text": "The worrying, yes, all the time. Down some days. I still want to do things with him."
   },
   {
    "who": "dr",
    "text": "Any thoughts of harming yourself, or that he’d be better off without you?",
    "dom": "tasks",
    "why": "Direct risk question"
   },
   {
    "who": "pt",
    "text": "No. Never that. I just want to get it right for him."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "From what you’ve told me, Noah is alert, has no worrying vomiting, normal nappies and no illnesses. That makes it very likely this is about feeding — possibly how well milk is getting through at each feed — rather than anything serious. And none of this means you’ve done anything wrong.",
    "dom": "tasks",
    "why": "Shares a working analysis based on the red-flag screen"
   },
   {
    "who": "pt",
    "text": "So it’s not something wrong with him?"
   },
   {
    "who": "dr",
    "text": "Nothing so far points that way, but I want to examine him properly to be sure, and look carefully at the chart over time. One weight can wobble; the trend tells us more.",
    "dom": "gs",
    "why": "Honest reassurance with appropriate caution"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "Here’s what I suggest. I see Noah in person this week to examine him and plot everything carefully. I ask an infant-feeding specialist to watch a feed with you — small changes to latch can make a big difference. Your health visitor weighs him once a week, not more. Does that sound manageable?",
    "dom": "tasks",
    "why": "Structured plan: examination, observed feed, feeding support, measured monitoring"
   },
   {
    "who": "pt",
    "text": "Yes. Should I be giving him formula?"
   },
   {
    "who": "dr",
    "text": "Let’s get the feeding assessed first. If top-ups turn out to be needed, we’ll plan them with the feeding team so they support your breastfeeding rather than replace it — that’s your choice to make with us.",
    "dom": "rto",
    "why": "Shared decision on supplementation, in line with NICE NG75"
   },
   {
    "who": "pt",
    "text": "Okay. That feels better than guessing."
   },
   {
    "who": "dr",
    "text": "And for you: I’d like to see you again in two weeks to see how your mood is. Your health visitor can support you in between. If things feel heavier, you can talk to someone sooner.",
    "dom": "tasks",
    "why": "Maternal mental-health follow-up built into the plan"
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Contact us the same day if Noah vomits forcefully or brings up anything green, has far fewer wet nappies, becomes floppy or unusually sleepy, or you’re very worried. And if you ever have thoughts of harming yourself, please call us or NHS 111 straight away. When someone at home asks what the doctor said, what will you tell them?",
    "dom": "gs",
    "why": "Specific safety-net for both and teach-back"
   },
   {
    "who": "pt",
    "text": "That I’m not starving him. The doctor will check him this week, someone will watch a feed, and I’ll come back about me."
   },
   {
    "who": "dr",
    "text": "That’s it. You’re clearly a caring, attentive mum — that’s why you noticed and why you’re here. We’ll do this together.",
    "dom": "rto",
    "why": "Closes on partnership and affirmation"
   },
   {
    "who": "pt",
    "text": "Thank you. I feel like I can breathe again."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Responded to tears first; open question; let her explain the health visitor’s concern in her own words.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Exhaustion, support at home, breastfeeding confidence, and how the weight news affected her.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I feel like a failure” and “am I starving him” and explored mood and guilt.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea of not enough milk; fear of serious illness and of failing; expectation to be told what she’s doing wrong.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Face-to-face examination, length and weight plotted on UK-WHO chart, birthweight centile, observed feed; tests only if indicated.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Feeding-related (milk transfer, attachment) vs reflux, malabsorption, infection or other organic cause.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened forceful or bilious vomiting, stools, nappies, recurrent infections, development; maternal self-harm risk.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Explained probable feeding-related faltering growth without blame, pending examination and plotting.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Infant-feeding support, weekly weights at most, supplementation only after feeding assessment, referral criteria per NICE NG75.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Maternal mood screened with Whooley and GAD-2; follow-up and health visitor support for her.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review this week, mood review in two weeks, specific red flags for Noah and crisis routes for her.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Noah",
    "age": "5 months · male",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "None"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Health visitor: weight crossed down two centile spaces (UK-WHO chart). Breastfed. GP review requested.",
    "reason": "Video consultation with mother re weight concern."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Respond to distress",
     "d": "She opens in tears asking if she’s starving him. Answer that first — no blame."
    },
    {
     "t": "1–5",
     "h": "Feeding and red flags",
     "d": "Feed pattern, posseting vs vomiting, nappies, illnesses, development, birthweight centile. Observe Noah on camera."
    },
    {
     "t": "5–7",
     "h": "Mother’s mental health",
     "d": "Whooley and GAD-2, self-harm question. Validate the exhaustion."
    },
    {
     "t": "7–9",
     "h": "Explain",
     "d": "Likely feeding-related, not her fault; the trend matters more than one weight; examine in person."
    },
    {
     "t": "9–12",
     "h": "Plan and safety-net",
     "d": "Examination this week, observed feed, weekly weights, top-ups only after assessment, mood follow-up, red flags."
    }
   ],
   "wordPics": {
    "fail": "Launches into a feeding checklist while she cries; implies the milk supply is the problem or suggests switching to formula; no red-flag screen; no plan to examine; never asks how she is.",
    "pass": "Reassures her it isn’t her fault; takes a feeding history and screens red flags; plans examination, plotting and feeding support; asks about her mood; arranges review.",
    "exc": "All of the above, plus: relieves guilt in the first minute; checks birthweight centile before labelling; uses NICE CG192 questions naturally; protects breastfeeding in the supplementation discussion; plans follow-up for mother and baby; she leaves feeling like a partner, not a suspect."
   },
   "avoid": [
    {
     "dont": "“He’s not getting enough milk, so you’ll need to start formula top-ups.”",
     "instead": "“Let’s get the feeding looked at properly first — then decide together if top-ups would help.”",
     "why": "Jumping to formula confirms her fear of failing and bypasses NICE NG75."
    },
    {
     "dont": "“Don’t worry, lots of babies drop centiles.”",
     "instead": "“You’re not failing — and I want to look at his whole picture carefully so we know exactly what’s going on.”",
     "why": "Blanket reassurance without assessment is unsafe and doesn’t address her guilt."
    },
    {
     "dont": "“Let’s weigh him every couple of days to keep an eye.”",
     "instead": "“Once a week is enough — more often just adds worry without telling us more.”",
     "why": "Over-frequent weighing is noisy and fuels maternal anxiety; NICE NG75 limits it."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Exhaustion and isolation",
     "t": "Frequent feeds and broken nights wear parents down. Ask who helps at home and what support is available."
    },
    {
     "h": "Breastfeeding confidence",
     "t": "Weight concerns often lead to early stopping. Practical infant-feeding support protects breastfeeding if she wants to continue."
    }
   ],
   "legal": [
    {
     "h": "Safeguarding — proportionate",
     "t": "Faltering growth is rarely neglect. NICE NG75 lists safeguarding concern as a referral trigger, but consider it only when there are genuine indicators; nothing in this history suggests it."
    }
   ],
   "professional": [
    {
     "h": "Working with the health visitor",
     "t": "Agree who weighs, how often and who reviews the chart. Shared records reduce conflicting advice to an anxious parent."
    },
    {
     "h": "Limits of video",
     "t": "Observation on video helps, but examination and accurate measurement need a face-to-face appointment. Document why it is arranged."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Infant-feeding specialist or lactation service, local breastfeeding groups, the National Breastfeeding Helpline, and perinatal mental-health support via the GP or health visitor."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Forceful or bilious vomiting, blood in stools, chronic diarrhoea",
     "Recurrent infections, dysmorphism, developmental concerns, floppiness",
     "Rapid weight loss or severe undernutrition; maternal thoughts of self-harm"
    ],
    "psychosocial": [
     "Mother’s mood, sleep and support at home",
     "Breastfeeding confidence and her own feeding goals",
     "Relationship with the health visitor and the advice she has had"
    ],
    "ice": [
     "Idea: “I haven’t got enough milk — I’m starving him.”",
     "Concern: failing as a mother, or something seriously wrong with Noah",
     "Expectation: to be told what she’s doing wrong"
    ]
   },
   "diagnosis": "Frame it without blame: “From everything you’ve told me, this is most likely about feeding needing some support — how much milk gets through at each feed — not you doing anything wrong. I’ll examine him and look at the chart over time to be sure.”",
   "diagnosisLay": "“Growth charts are like a road with several lanes. Noah has drifted across a couple of lanes. That tells us to look, not that something is badly wrong — and most babies drift back once feeding is sorted.”",
   "management": {
    "reflectIce": "“You asked if you’re starving him. You’re not — and the fact you’re this worried shows how much you care.”",
    "psychosocial": "Build the plan around her: an observed feed with a specialist, weekly weights at most, and a follow-up for her mood as well as Noah’s weight.",
    "sharedPlan": [
     "Face-to-face examination and careful plotting this week, including birthweight centile",
     "Infant-feeding assessment with an observed feed; top-ups only after assessment",
     "Weekly weights with the health visitor; paediatric referral if NICE NG75 triggers appear"
    ],
    "safetyNet": [
     "Same-day contact for forceful or green vomiting, fewer wet nappies, floppiness or unusual sleepiness",
     "Mood review in two weeks; call the surgery or NHS 111 urgently if thoughts of self-harm"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Faltered growth",
    "s": "Visual algorithm · NICE NG75",
    "href": "algorithms/faltered-growth.html"
   },
   {
    "ic": "📋",
    "t": "Perinatal mental health",
    "s": "Case walkthrough · NICE CG192",
    "href": "../cases/perinatal-mental-health.html"
   },
   {
    "ic": "💠",
    "t": "Postnatal depression",
    "s": "Management protocol · screening and support",
    "href": "management/postnatal-depression.html"
   },
   {
    "ic": "💠",
    "t": "Infant reflux",
    "s": "Management protocol · posseting vs red flags",
    "href": "management/infant-reflux.html"
   }
  ],
  "pitfalls": {
   "intro": "This station has two patients. Candidates who produce a perfect feeding plan while ignoring a tearful, exhausted mother fail the Relating domain; candidates who only comfort her miss the structured assessment.",
   "items": [
    {
     "dom": "rto",
     "fail": "Starting the feeding history while she is still asking if she’s starving her baby.",
     "why": "“Did not respond to the patient’s emotions.” She won’t take in anything until the guilt is addressed.",
     "fix": "First sentence: “You are not starving him, and you’re not failing.” Then the history."
    },
    {
     "dom": "tasks",
     "fail": "Calling it faltering growth without checking birthweight centile or prematurity.",
     "why": "NICE NG75 thresholds depend on birthweight centile; a two-space drop may or may not meet the definition.",
     "fix": "Ask for the red book and look at the plotted trend with her."
    },
    {
     "dom": "tasks",
     "fail": "Suggesting formula straight away.",
     "why": "“Management not in line with current guidance.” NICE NG75 puts breastfeeding assessment and support first.",
     "fix": "Arrange an observed feed and specialist feeding support, then decide on top-ups together."
    },
    {
     "dom": "tasks",
     "fail": "No red-flag screen, or ordering a battery of blood tests.",
     "why": "Either misses organic disease or over-investigates a likely feeding problem.",
     "fix": "Ask about vomiting, stools, infections and development; test only when indicated."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about her mood.",
     "why": "Postnatal depression and anxiety are common and affect feeding. Omitting it misses half the station.",
     "fix": "Use the Whooley and GAD-2 questions naturally, and ask directly about self-harm."
    },
    {
     "dom": "gs",
     "fail": "Relying on the video view and not arranging an in-person examination.",
     "why": "“Examination not adequately planned.” Accurate weight, length and examination can’t be done on camera.",
     "fix": "“He looks well on screen, but I want to examine him properly this week.”"
    }
   ]
  }
 },
 "fatigue-lfts-vitd": {
  "stem": {
   "name": "Paul Cresswell",
   "age": "48-year-old man",
   "pmh": [
    "No significant past medical history",
    "BMI 33"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "Tiredness blood panel (patient-requested): ALT 88 (about twice the upper limit), bilirubin normal, ALP near-normal; HbA1c in the pre-diabetes range; triglycerides raised; vitamin D low. Alcohol recorded as about 20 units a week. Office manager, mostly sedentary.",
   "reason": "Video consultation to discuss his blood results."
  },
  "knowledge": {
   "guideline": "NICE NG49 (MASLD, formerly NAFLD; updated July 2026) · BSG/BASL abnormal liver blood tests guideline (Newsome et al., 2018) · NICE PH38 (type 2 diabetes: prevention in people at high risk, 2012) · NICE NG238 (cardiovascular disease: risk assessment and reduction, 2023) · Royal Osteoporosis Society vitamin D guideline (2018) · UK Chief Medical Officers’ low-risk drinking guidelines (2016)",
   "summary": "A raised ALT with normal bilirubin and ALP, BMI 33, pre-diabetic HbA1c and raised triglycerides is most likely fatty liver disease driven by metabolism (NAFLD, now also called MASLD). Complete a liver screen, assess fibrosis rather than the ALT, treat the metabolic drivers and alcohol, and replace the vitamin D in proportion. No NICE NG12 (updated April 2026) cancer criterion applies.",
   "points": [
    {
     "h": "Read the pattern",
     "t": "A raised ALT with normal bilirubin and near-normal ALP is a hepatocellular pattern. Set in a metabolic cluster — obesity, pre-diabetes, raised triglycerides — the commonest cause is fatty liver disease linked to insulin resistance."
    },
    {
     "h": "Liver screen before labelling",
     "t": "BSG/BASL 2018: an abnormal liver test warrants a standard aetiology screen — hepatitis B surface antigen, hepatitis C antibody, ferritin and transferrin saturation, autoantibodies and immunoglobulins — plus an ultrasound. Record alcohol accurately: his 20 units a week is above the UK CMO (2016) low-risk limit of 14 and may be contributing."
    },
    {
     "h": "Fibrosis, not ALT",
     "t": "The ALT doesn’t measure scarring. BSG/BASL 2018: use FIB-4 (age, AST, ALT, platelets) first; a score above 3.25 suggests advanced fibrosis. NICE NG49: offer the ELF test to people with NAFLD; ELF 10.51 or above means refer to a hepatologist, and if lower, retest adults every 3 years."
    },
    {
     "h": "The metabolic picture",
     "t": "HbA1c 42–47 mmol/mol is high risk of type 2 diabetes: offer an intensive lifestyle programme and recheck at least yearly (NICE PH38). Calculate QRISK3 and offer atorvastatin 20 mg if 10% or more (NICE NG238). NG238: do not exclude people from statins because transaminases are raised but less than 3 times the upper limit."
    },
    {
     "h": "Vitamin D in proportion",
     "t": "Replace a genuinely low vitamin D: the Royal Osteoporosis Society (2018) uses a loading regimen for deficiency then maintenance, with doses per BNF depending on the level. Fatigue is rarely explained by vitamin D alone — sleep, activity, mood and the metabolic state matter more."
    },
    {
     "h": "No invented cancer pathway",
     "t": "A mildly raised ALT in a metabolic picture is not a NICE NG12 (updated April 2026) criterion. Jaundice, weight loss, a mass or a rising ALT despite lifestyle change would change the assessment."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Paul, I’m Dr Lee. Can you see and hear me okay? … Good. Your results are back — before I go through them, what have you made of them so far?",
    "dom": "rto",
    "why": "Checks the set-up and starts from his understanding"
   },
   {
    "who": "pt",
    "text": "The website said my vitamin D is low, and that explains the tiredness, right? I’ve read it makes you knackered. Can you just prescribe a strong one and I’ll be sorted? I haven’t got time for a rabbit hole."
   },
   {
    "who": "dr",
    "text": "You’re right that it’s low, and I’ll sort that today. I promise not to send you down a rabbit hole. The panel shows a couple of other things that I think matter more for your energy and your health, and I’d like five minutes to go through them with you. Is that okay?",
    "dom": "gs",
    "why": "Validates, then sets an agenda that includes the whole panel"
   },
   {
    "who": "pt",
    "text": "Go on then. What else?"
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about the tiredness first. How long, and what’s it like?",
    "dom": "tasks",
    "why": "Characterises the presenting symptom"
   },
   {
    "who": "pt",
    "text": "Months. I’m flat by mid-afternoon. I sit at a desk all day, then I’m on the sofa all evening."
   },
   {
    "who": "dr",
    "text": "How’s your sleep — do you wake refreshed? And has anyone mentioned snoring or you stopping breathing at night?",
    "dom": "tasks",
    "why": "Screens sleep and OSA without assuming"
   },
   {
    "who": "pt",
    "text": "Not really refreshed, no. I don’t know about snoring — nobody’s complained."
   },
   {
    "who": "dr",
    "text": "How’s your mood been — any low patches, stress, losing interest in things?",
    "dom": "tasks",
    "why": "Screens mood as a cause of fatigue"
   },
   {
    "who": "pt",
    "text": "Work’s busy but I’m fine. Just tired."
   },
   {
    "who": "dr",
    "text": "Any yellowing of your eyes or skin, dark urine, itching, tummy pain or swelling, or weight loss?",
    "dom": "tasks",
    "why": "Screens liver red flags"
   },
   {
    "who": "pt",
    "text": "No, none of that."
   },
   {
    "who": "dr",
    "text": "The nurse recorded about 20 units a week. Does that sound right — what does a typical week look like?",
    "dom": "tasks",
    "why": "Quantifies alcohol without judgement"
   },
   {
    "who": "pt",
    "text": "About right, yeah."
   },
   {
    "who": "dr",
    "text": "Thanks for being straightforward. Any medicines, supplements or anything from the gym or online?",
    "dom": "tasks",
    "why": "Drug and supplement causes of raised ALT"
   },
   {
    "who": "pt",
    "text": "Nothing."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said you haven’t got time for a rabbit hole. What’s behind that?",
    "dom": "rto",
    "why": "Follows the avoidance cue"
   },
   {
    "who": "pt",
    "text": "Honestly, I just want to feel normal again. I know I should lose weight. I don’t need a lecture."
   },
   {
    "who": "dr",
    "text": "No lecture, I promise. What were you hoping to leave with today?",
    "dom": "rto",
    "why": "Elicits expectations"
   },
   {
    "who": "pt",
    "text": "A prescription. And to hear I’m basically fine."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s the fuller picture. Your liver test is raised, in a pattern that means the liver cells themselves are irritated. With your sugar level in the pre-diabetes range and high blood fats, the likeliest cause is fatty liver — the liver storing extra fat, often because the body is struggling to handle sugar. It’s very common, it’s usually reversible, and it’s one of the reasons you may feel flat.",
    "dom": "tasks",
    "why": "Interprets the panel as a whole; working diagnosis in plain words"
   },
   {
    "who": "pt",
    "text": "Fatty liver? I thought that was drinkers."
   },
   {
    "who": "dr",
    "text": "It can be both. Most fatty liver is from weight and blood sugar, but your 20 units a week is above the recommended 14 and adds to the strain. I don’t want to assume, though — I’d like a routine liver screen to check for viruses, iron overload and immune causes, and an ultrasound scan.",
    "dom": "tasks",
    "why": "Liver aetiology screen; alcohol honestly placed"
   },
   {
    "who": "pt",
    "text": "Is it serious?"
   },
   {
    "who": "dr",
    "text": "The ALT number doesn’t tell us that. What matters is whether there’s any scarring. There’s a simple score from a blood test — FIB-4 — and if it’s not clearly low, a second test called ELF or a scan. Most people are low risk and manage this with us. A few need a liver specialist, and those are the ones we want to find.",
    "dom": "tasks",
    "why": "Fibrosis risk stratification and honest proportion"
   },
   {
    "who": "pt",
    "text": "Right. And the vitamin D?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’ll prescribe it today — it is low and worth fixing. But honestly, I’d be surprised if it’s the whole story for your tiredness. Sleep, activity, the sugar and the liver are more likely to be doing most of it.",
    "dom": "rto",
    "why": "Gives the vitamin D proportionately and honestly"
   },
   {
    "who": "pt",
    "text": "So what do I actually do?"
   },
   {
    "who": "dr",
    "text": "Losing some weight is the single best treatment for a fatty liver, and it also brings the sugar and blood fats down. You don’t have to overhaul everything. If you picked one change that would stick, what would it be?",
    "dom": "rto",
    "why": "Negotiates one owned goal"
   },
   {
    "who": "pt",
    "text": "Probably cutting the drinking back a bit. And walking at lunch, maybe."
   },
   {
    "who": "dr",
    "text": "Great — both help your liver directly. There’s also a free NHS programme for people with sugar levels like yours, to help avoid diabetes; can I refer you? I’ll also work out your heart risk score, because fatty liver and heart risk travel together.",
    "dom": "tasks",
    "why": "Pre-diabetes programme and cardiovascular risk"
   },
   {
    "who": "pt",
    "text": "Yeah, go on."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you ever notice yellow eyes or skin, very dark urine, your tummy or legs swelling, vomiting blood or black stools, contact us the same day. That isn’t what I expect — it’s just what would change things.",
    "dom": "gs",
    "why": "Specific safety-net"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "To check I’ve explained it well — what will you tell someone at home about today?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Vitamin D’s low so I’m taking that, but it’s probably not the main thing. My liver’s fatty from weight and sugar and a bit the drink. More bloods and a scan to check for scarring, cut back the drinking, walk at lunch."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll book you in with the results in a few weeks, and we’ll look at the scarring score and your heart risk together. Anything else?",
    "dom": "gs",
    "why": "Follow-up and shares the floor"
   },
   {
    "who": "pt",
    "text": "No — that’s more useful than I expected. Cheers."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Started from his reading of the results; did not hand over the vitamin D and close.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Sedentary office job, evenings on the sofa, alcohol pattern, time pressure, what “normal” means to him.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “no time for a rabbit hole” and “I don’t need a lecture” as avoidance, and explored them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (vitamin D explains the tiredness); concern (a lecture, a long process); expectation (a strong vitamin D prescription and to be told he’s fine).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Liver screen (hepatitis B and C, ferritin and transferrin saturation, autoantibodies, immunoglobulins), ultrasound, FIB-4 then ELF if needed, QRISK3.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "NAFLD/MASLD vs alcohol-related vs viral vs haemochromatosis vs autoimmune vs drugs; fatigue from sleep, mood, activity and metabolic state.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened jaundice, weight loss, abdominal symptoms; knew no NICE NG12 (updated April 2026) criterion applies and did not invent one; fibrosis assessed, not assumed.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Likely fatty liver disease within a metabolic cluster; vitamin D deficiency present but not the whole explanation.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Vitamin D replaced (Royal Osteoporosis Society 2018, dose per BNF); one owned lifestyle goal; alcohol within 14 units; diabetes prevention referral.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Pre-diabetes (NICE PH38); cardiovascular risk and statin not withheld for ALT below 3× ULN (NICE NG238); sleep and mood considered.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named liver warning signs; review with fibrosis score and QRISK; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Investigations & results",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Paul Cresswell",
    "age": "48 years · male",
    "pmh": [
     "Nil significant",
     "BMI 33"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Tiredness panel: ALT 88 (≈2× ULN), bilirubin normal, ALP near-normal; HbA1c pre-diabetes range; triglycerides raised; vitamin D low. Alcohol ≈20 units/week. No liver screen, FIB-4 or QRISK on file.",
    "reason": "Results. “Just give me the vitamin D and I’ll be right.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and reframe",
     "d": "He wants vitamin D and no rabbit hole. Agree to treat it, then ask permission to go through the rest of the panel."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Tiredness pattern, sleep and possible OSA, mood, liver symptoms, alcohol in units, medicines and supplements."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "He wants to feel normal and fears a lecture. Name the avoidance gently."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Hepatocellular pattern in a metabolic cluster = likely fatty liver. Liver screen and ultrasound, FIB-4 then ELF, QRISK3. Vitamin D in proportion. One owned goal; diabetes prevention referral."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Jaundice, dark urine, swelling, GI bleeding — same day. Review with results. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes vitamin D and agrees it explains the tiredness; ignores or merely “repeats” the ALT; no liver screen or fibrosis assessment; either lectures on weight and alcohol or avoids the subject; invents a cancer referral.",
    "pass": "Interprets the ALT with the metabolic results as likely NAFLD; arranges a liver screen and FIB-4; addresses alcohol and weight; replaces vitamin D; books follow-up.",
    "exc": "All of the above, plus: engages a quick-fix patient without a lecture by negotiating one change he owns; explains that fibrosis, not ALT, is what matters; links the liver to diabetes and heart risk (PH38 programme, QRISK3); keeps vitamin D in honest proportion; knows statins aren’t withheld for a mildly raised ALT; teach-back."
   },
   "avoid": [
    {
     "dont": "“Yes, low vitamin D will explain your tiredness.”",
     "instead": "“It is low and I’ll treat it — but I don’t think it’s the whole story. Can I show you what else the tests found?”",
     "why": "Colluding with one googled number misses the liver and metabolic picture."
    },
    {
     "dont": "“You need to lose weight and cut down your drinking.”",
     "instead": "“If you picked one change that would stick, what would it be?”",
     "why": "He has already told you he doesn’t want a lecture; a negotiated goal scores, a list doesn’t."
    },
    {
     "dont": "“Your liver test is only mildly raised — we’ll repeat it in six months.”",
     "instead": "“The number doesn’t tell us about scarring. A simple score and a screen will.”",
     "why": "Repeating the ALT alone answers nothing about fibrosis and leaves other causes unexcluded."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work and routine",
     "t": "A desk-bound job, alcohol above the low-risk limit and evenings on the sofa drive the metabolic picture. Plan changes around his working day, not against it."
    },
    {
     "h": "Stigma of “liver”",
     "t": "Many people link liver disease only with heavy drinking. Explaining the metabolic cause reduces defensiveness while still addressing his alcohol honestly."
    }
   ],
   "legal": [
    {
     "h": "Driving and work",
     "t": "No DVLA notification or fitness-for-work issue arises from fatty liver or pre-diabetes at this stage."
    }
   ],
   "professional": [
    {
     "h": "Results governance",
     "t": "An abnormal ALT needs a documented plan — liver screen, fibrosis assessment and review — not a filed “repeat in 6 months”. GMC Good Medical Practice (2024): follow up results you request."
    },
    {
     "h": "Respectful weight conversations",
     "t": "Discuss weight with consent and without stigmatising language, and offer practical support rather than instructions."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "NHS Diabetes Prevention Programme; local weight-management services; British Liver Trust patient information; Drinkaware or local alcohol services if he wants support to cut down."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Jaundice, dark urine, pale stools, itching",
     "Abdominal swelling, leg swelling, confusion, GI bleeding — decompensated liver disease",
     "Unexplained weight loss or a mass — changes the assessment",
     "Alcohol intake above 14 units a week — quantify honestly"
    ],
    "psychosocial": [
     "Sedentary office job, evenings on the sofa",
     "Wants a quick fix; “no time for a rabbit hole”",
     "Sleep quality and mood as causes of tiredness"
    ],
    "ice": [
     "Idea: low vitamin D explains the tiredness",
     "Concern: a lecture, a long process",
     "Expectation: a strong vitamin D prescription and to be told he’s fine"
    ]
   },
   "diagnosis": "A hepatocellular pattern (ALT about twice the upper limit, normal bilirubin and near-normal ALP) with BMI 33, pre-diabetic HbA1c and raised triglycerides — most likely fatty liver disease linked to insulin resistance, with alcohol at 20 units a week as a possible contributor. Vitamin D deficiency is present but unlikely to explain the fatigue on its own.",
   "diagnosisLay": "“Your liver is storing extra fat — very common when blood sugar and weight are creeping up. It irritates the liver cells, which is why that test is raised. The important question is whether it has caused any scarring, and a simple blood score will tell us. It’s usually reversible.”",
   "management": {
    "reflectIce": "“You came for vitamin D and I’m giving you that. I’ve also shown you why I think your energy is more tied to your liver and blood sugar — and that’s good news, because it’s something you can change.”",
    "psychosocial": "Respect his time pressure: one negotiated change (cutting back alcohol, a lunchtime walk) and a referral that does the work for him, rather than a lecture.",
    "sharedPlan": [
     "Liver screen (hepatitis B and C, ferritin and transferrin saturation, autoantibodies, immunoglobulins) and ultrasound (BSG/BASL 2018)",
     "FIB-4, then ELF if not low; refer to hepatology if ELF ≥10.51 (NICE NG49)",
     "Diabetes prevention programme and HbA1c recheck at least yearly (NICE PH38); QRISK3 and statin if ≥10% (NICE NG238)",
     "Vitamin D replacement (Royal Osteoporosis Society 2018; dose per BNF); alcohol within 14 units a week"
    ],
    "safetyNet": [
     "Same-day contact: yellow eyes or skin, very dark urine, abdominal or leg swelling, vomiting blood, black stools",
     "Review in a few weeks with the liver screen, fibrosis score and QRISK3"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Fatty liver",
    "s": "Protocol · NICE NG49",
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
    "ic": "🗺️",
    "t": "Vitamin D deficiency",
    "s": "Visual algorithm · testing and replacement",
    "href": "algorithms/vitamin-d-deficiency.html"
   },
   {
    "ic": "🧮",
    "t": "QRISK3",
    "s": "Medical Calculators",
    "href": "calculators.html"
   }
  ],
  "pitfalls": {
   "intro": "Interpreting a results panel is examined as a reasoning task. Candidates fail when they answer the patient’s question rather than the clinical one, or when they turn a metabolic conversation into a lecture.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Treating the vitamin D and filing the rest.",
     "why": "The raised ALT, HbA1c and triglycerides are the real findings. Missing the gestalt is a data-interpretation fail.",
     "fix": "Name all the abnormal results and how they fit together before prescribing."
    },
    {
     "dom": "tasks",
     "fail": "Labelling it fatty liver without a liver screen.",
     "why": "BSG/BASL 2018 expects viral, iron, autoimmune and drug causes to be excluded; alcohol must be quantified.",
     "fix": "Hepatitis B and C, ferritin and transferrin saturation, autoantibodies, immunoglobulins and an ultrasound."
    },
    {
     "dom": "tasks",
     "fail": "Planning to repeat the ALT in 6 months as the whole plan.",
     "why": "ALT does not reflect fibrosis. The prognostic question goes unanswered.",
     "fix": "FIB-4, then ELF if needed (NICE NG49: refer if ELF ≥10.51)."
    },
    {
     "dom": "tasks",
     "fail": "Inventing a cancer referral or withholding a statin because of the liver test.",
     "why": "No NICE NG12 (updated April 2026) criterion applies; NICE NG238 advises not to exclude people from statins for transaminases below 3× ULN.",
     "fix": "Keep the plan proportionate: fibrosis, diabetes risk and QRISK3."
    },
    {
     "dom": "rto",
     "fail": "A lecture on weight and alcohol.",
     "why": "He signalled avoidance and asked for no lecture. Examiners mark down lists of instructions.",
     "fix": "Ask what one change he would make, and build on it."
    },
    {
     "dom": "gs",
     "fail": "Using “transaminases”, “hepatocellular” and “fibrosis” without explanation.",
     "why": "Jargon loses a patient who already wants to disengage.",
     "fix": "“Liver cells irritated”, “storing extra fat”, “any scarring” — then check understanding."
    }
   ]
  }
 },
 "febrile-young-infant": {
  "stem": {
   "name": "Lily",
   "age": "7-week-old girl",
   "pmh": [
    "None recorded"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "None recorded",
   "recent": "8-week immunisations not yet due.",
   "reason": "Mother calling: temperature 38.2°C, sleepier than usual, feeding less today."
  },
  "knowledge": {
   "guideline": "NICE NG143 — Fever in under 5s (2019) · NICE NG254 — Suspected sepsis in under 16s (2025) · NICE NG224 — Urinary tract infection in under 16s (2022) · BNFC",
   "summary": "A temperature of 38°C or more in a baby under 3 months is a NICE NG143 red feature on its own. Lily needs urgent face-to-face paediatric assessment today, not paracetamol and watching at home.",
   "points": [
    {
     "h": "The age rule",
     "t": "NICE NG143: temperature ≥38°C in an infant under 3 months is a red (high-risk) feature. Young infants can have serious bacterial infection with few signs, and a well-looking baby does not exclude it."
    },
    {
     "h": "Remote assessment",
     "t": "NICE NG143: a child with any red feature who is not in immediate danger should be assessed face to face within 2 hours; an immediately life-threatening picture needs an emergency ambulance. In practice a febrile infant under 3 months goes straight to the paediatric team."
    },
    {
     "h": "Other traffic-light features",
     "t": "Colour (pale, mottled, blue), activity (hard to wake, weak or high-pitched cry, not responding normally), breathing (fast, grunting, recession), hydration (reduced feeds, fewer wet nappies) and a non-blanching rash. Reduced feeding and sleepiness add to the concern."
    },
    {
     "h": "What secondary care does",
     "t": "NICE NG143 for infants under 3 months with fever: observations, FBC, CRP, blood culture and urine testing, with lumbar puncture and parenteral antibiotics depending on age, how unwell the baby looks and the white cell count. A febrile infant under 3 months with possible UTI is referred immediately to paediatric specialist care (NICE NG224)."
    },
    {
     "h": "Antipyretics",
     "t": "NICE NG143: don’t use antipyretics with the sole aim of reducing body temperature, and don’t rely on a fall or lack of fall in temperature at 1 to 2 hours to judge whether illness is serious; paracetamol or ibuprofen can be considered for a febrile child who appears distressed. Paracetamol for an infant this young only per BNFC and the assessing clinician."
    },
    {
     "h": "Sepsis",
     "t": "Assess for sepsis using NICE NG254 in under 16s. A parent’s concern that the baby is not themselves is itself an important warning sign."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, it’s Dr Adeyemi from the surgery. You’re calling about Lily — can you confirm her date of birth, and that you’re her mum?",
    "dom": "gs",
    "why": "Confirms identity and parental responsibility by phone"
   },
   {
    "who": "pt",
    "text": "Yes, I’m her mum. Sorry, I’m probably overreacting. She’s seven weeks, she feels hot and her temperature is 38.2. She’s sleepier than usual and not feeding as well. Can I just give her Calpol and keep an eye on her?"
   },
   {
    "who": "dr",
    "text": "You are not overreacting — ringing was exactly the right thing to do. I need to ask a few quick questions and then I’ll tell you clearly what we need to do. Is Lily with you now?",
    "dom": "rto",
    "why": "Validates her instinct immediately and sets a short, clear agenda"
   },
   {
    "who": "pt",
    "text": "Yes, she’s in my arms."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "How did you take her temperature, and when?",
    "dom": "tasks",
    "why": "Confirms the reading is genuine"
   },
   {
    "who": "pt",
    "text": "With our thermometer, just before I rang."
   },
   {
    "who": "dr",
    "text": "Thank you. Looking at her now: is she waking up and looking at you, or is she hard to rouse?",
    "dom": "tasks",
    "why": "Assesses responsiveness, a key red feature"
   },
   {
    "who": "pt",
    "text": "She opens her eyes, but she’s dozier than normal."
   },
   {
    "who": "dr",
    "text": "What’s her colour like — pink as usual, or pale, blotchy or bluish? And her breathing — fast, noisy, or can you see her tummy or ribs pulling in?",
    "dom": "tasks",
    "why": "Screens colour and respiratory red features"
   },
   {
    "who": "pt",
    "text": "I haven’t noticed anything like that. I don’t really know what I’m looking for."
   },
   {
    "who": "dr",
    "text": "That’s fine — that’s what we’re here for. How many wet nappies today, and has she been sick at all?",
    "dom": "tasks",
    "why": "Hydration screen"
   },
   {
    "who": "pt",
    "text": "I haven’t been counting. I’m not sure."
   },
   {
    "who": "dr",
    "text": "And any rash anywhere, especially spots that don’t fade when pressed?",
    "dom": "tasks",
    "why": "Screens for a non-blanching rash"
   },
   {
    "who": "pt",
    "text": "I haven’t seen one."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "You said you don’t want to drag her to hospital if it’s just a cold. What’s worrying you most right now?",
    "dom": "rto",
    "why": "Surfaces the fear under the minimisation"
   },
   {
    "who": "pt",
    "text": "That something’s really wrong and I won’t know. She’s so tiny. But I don’t want to waste anyone’s time."
   },
   {
    "phase": "Explanation",
    "clock": "5–7 min",
    "who": "dr",
    "text": "You’re not wasting anyone’s time. Here’s the important rule: any baby under three months with a temperature of 38 or more needs to be seen in person today by the children’s team. Babies this young can have an infection without showing many signs, so we never manage a fever at this age at home.",
    "dom": "tasks",
    "why": "States the NG143 red-flag rule clearly and without ambiguity"
   },
   {
    "who": "pt",
    "text": "Even if she seems okay between feeds?"
   },
   {
    "who": "dr",
    "text": "Even then. Calpol would bring the number down, but it wouldn’t tell us what’s causing it or make her safe. Her age and the temperature together are the reason — and you’ve also noticed she’s sleepier and feeding less, which makes me want her seen quickly.",
    "dom": "tasks",
    "why": "Explains why antipyretics and watchful waiting are unsafe here"
   },
   {
    "who": "pt",
    "text": "Okay. That’s frightening."
   },
   {
    "who": "dr",
    "text": "I understand. Most babies who are checked turn out to have something minor, but the only safe way to know is for the team to examine her and do some tests, usually a urine test and blood tests. You’re doing exactly what a good mum does.",
    "dom": "rto",
    "why": "Acknowledges fear and gives honest, proportionate reassurance"
   },
   {
    "phase": "Shared management",
    "clock": "7–10 min",
    "who": "dr",
    "text": "So here’s the plan. I’m going to ring the children’s assessment unit now so they’re expecting Lily, and I need you to take her there straight away. Can you get there now, and is anyone able to come with you?",
    "dom": "tasks",
    "why": "Arranges urgent assessment and checks practical barriers"
   },
   {
    "who": "pt",
    "text": "I can get there. I’ll see who can come with me."
   },
   {
    "who": "dr",
    "text": "Good. Bring her red book and a feed. Keep her in light clothes — don’t wrap her up tightly. If there’s any problem getting there quickly, call 999 rather than waiting.",
    "dom": "gs",
    "why": "Practical, doable instructions and a fallback"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Safety-net & close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "On the way, call 999 straight away if she becomes hard to wake, her breathing looks fast or she’s struggling, she goes pale, blotchy or blue, she has a fit, or you see a rash that doesn’t fade under a glass. Can you tell me back what you’re going to do?",
    "dom": "gs",
    "why": "Explicit 999 criteria with teach-back"
   },
   {
    "who": "pt",
    "text": "Go to the children’s unit now. If she’s hard to wake, struggling to breathe, goes blue or blotchy, has a fit or a rash that doesn’t fade, I ring 999."
   },
   {
    "who": "dr",
    "text": "Exactly. I’m calling them as soon as we hang up, and I’ll check in with the team later today. You trusted your instinct, and that’s the most important thing you could have done for her.",
    "dom": "rto",
    "why": "Confirms handover and follow-up, and closes by affirming the parent"
   },
   {
    "who": "pt",
    "text": "Thank you. We’re going now."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Identity and parental responsibility confirmed; let her describe the problem; confirmed the baby was with her.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "First-time mother, fear of wasting time, practical access to hospital and someone to go with her.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “sleepier” and “feeding less”, and “probably overreacting” as a sign of hidden fear.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea of a cold; fear that something serious is being missed; hope to manage at home with Calpol.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Urgent face-to-face paediatric assessment today for examination, observations, urine and blood tests.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Serious bacterial infection including sepsis, meningitis and UTI vs a viral illness — not distinguishable by phone.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened responsiveness, colour, breathing, hydration and non-blanching rash; recognised age plus fever as red regardless.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated clearly that a fever at 7 weeks is a red flag needing assessment today.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Did not advise Calpol-and-wait; phoned ahead to paediatrics; practical instructions for getting there.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Addressed transport, a companion, feeding and clothing on the way.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Explicit 999 criteria, teach-back, handover to the paediatric team and a check later that day.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Lily",
    "age": "7 weeks · female",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "None"
    ],
    "allergy": "None recorded",
    "recent": "⚠ 7 weeks old. 8-week immunisations not yet given.",
    "reason": "Mother requesting telephone advice: “Temperature 38.2 — can I just give Calpol?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and validate",
     "d": "Confirm who’s calling and that the baby is with her. Tell her immediately that ringing was right."
    },
    {
     "t": "1–4",
     "h": "Rapid traffic-light screen",
     "d": "How the temperature was taken, responsiveness, colour, breathing, wet nappies, rash."
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "Behind “I’m overreacting” is fear something serious will be missed."
    },
    {
     "t": "5–8",
     "h": "Clear message",
     "d": "Under 3 months plus 38°C = seen today. Why Calpol doesn’t make her safe."
    },
    {
     "t": "8–12",
     "h": "Arrange and safety-net",
     "d": "Phone paediatrics, transport and companion, 999 criteria, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Advises Calpol and watching at home, or books a routine appointment; is reassured because the baby “seems okay”; no 999 criteria; makes the mother feel she overreacted.",
    "pass": "Recognises fever under 3 months as a red flag; arranges same-day paediatric assessment; asks about key red features; gives 999 criteria.",
    "exc": "All of the above, plus: validates the mother from the first sentence; explains why antipyretics don’t make the baby safe; phones ahead; solves transport; uses teach-back; the mother goes promptly and feels supported rather than frightened."
   },
   "avoid": [
    {
     "dont": "“Give her some Calpol and ring back if she gets worse.”",
     "instead": "“At seven weeks, any temperature of 38 or more needs to be seen in person today.”",
     "why": "Home management of a febrile infant under 3 months is unsafe and an automatic Tasks fail."
    },
    {
     "dont": "“It’s probably just a virus, but let’s get her checked to be safe.”",
     "instead": "“Most babies turn out to be fine, but at this age the only safe way to know is for the children’s team to examine her.”",
     "why": "“Probably just a virus” invites her not to go."
    },
    {
     "dont": "“Keep an eye out for anything worrying.”",
     "instead": "“Call 999 if she’s hard to wake, struggling to breathe, blotchy or blue, has a fit or a rash that doesn’t fade.”",
     "why": "Non-specific safety-netting is a recurring failing feedback statement."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "First-time parent",
     "t": "Fear of being seen as over-anxious leads parents to minimise. Say explicitly that calling was right, so she calls again next time."
    },
    {
     "h": "Practical barriers",
     "t": "Transport, other children and being alone with a sick baby delay attendance. Ask, and give 999 as the fallback."
    }
   ],
   "legal": [
    {
     "h": "Parental responsibility and consent",
     "t": "Confirm you are speaking to someone with parental responsibility. Decisions about Lily’s care are made with her parent in Lily’s best interests."
    }
   ],
   "professional": [
    {
     "h": "Remote consulting safety",
     "t": "Telephone assessment cannot exclude serious illness in a young infant. Document the red feature, the advice given, the handover to paediatrics and the safety-net (GMC Good Medical Practice 2024)."
    },
    {
     "h": "Closing the loop",
     "t": "Phone ahead to the paediatric team and check later that she arrived. A referral nobody acts on is not a safe plan."
    }
   ],
   "community": [
    {
     "h": "Follow-up support",
     "t": "Health visitor for support after discharge. Parent information on spotting a seriously ill child from NHS sources and the paediatric team."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Age under 3 months with temperature ≥38°C — red on its own (NICE NG143)",
     "Hard to rouse, weak or high-pitched cry, pale/mottled/blue, grunting or fast breathing",
     "Non-blanching rash, seizure, reduced wet nappies or poor feeding"
    ],
    "psychosocial": [
     "First-time mother minimising to avoid being a nuisance",
     "Who can go with her, and how she will get there",
     "Any other children needing care"
    ],
    "ice": [
     "Idea: “It’s probably just a cold.”",
     "Concern: something serious being missed in a tiny baby",
     "Expectation: permission to give Calpol and watch at home"
    ]
   },
   "diagnosis": "Be unambiguous: “Any baby under three months with a temperature of 38 or more needs to be seen in person today. That’s the rule, and it applies to Lily whatever she seems like between feeds.”",
   "diagnosisLay": "“A tiny baby’s body is like a smoke alarm that doesn’t go off until the fire is big. The temperature is the only early warning we get, so we act on it straight away.”",
   "management": {
    "reflectIce": "“You said you’re probably overreacting. You’re not — you noticed she wasn’t herself and you rang. That’s exactly what she needed you to do.”",
    "psychosocial": "Solve getting there: someone to go with her, the red book and a feed, and 999 if transport is a problem or she worsens.",
    "sharedPlan": [
     "Urgent same-day face-to-face paediatric assessment — phone ahead",
     "No home management with antipyretics",
     "Practical instructions for the journey"
    ],
    "safetyNet": [
     "999 if hard to wake, breathing difficulty, pale/mottled/blue, seizure or non-blanching rash",
     "GP to check with the paediatric team later that day"
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
    "ic": "💠",
    "t": "UTI in children",
    "s": "Management protocol · NICE NG224",
    "href": "management/uti-children.html"
   }
  ],
  "pitfalls": {
   "intro": "This station has one non-negotiable: a febrile baby under 3 months is seen today. Candidates fail by being talked down by a calm parent, or by getting the rule right but frightening the mother so much that she can’t take in the plan.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Agreeing to Calpol and a call back if she worsens.",
     "why": "“Unsafe management.” NICE NG143 makes fever under 3 months a red feature on its own.",
     "fix": "State the rule in the first half of the call and don’t negotiate on it."
    },
    {
     "dom": "tasks",
     "fail": "Being reassured because the baby “seems okay between feeds”.",
     "why": "Young infants can have serious infection with few signs; appearance on the phone is unreliable.",
     "fix": "“Even if she seems okay, her age and the temperature are the reason she needs to be seen.”"
    },
    {
     "dom": "tasks",
     "fail": "Spending most of the call on a detailed history.",
     "why": "The decision is already made at the opening sentence. Time spent after that delays the baby.",
     "fix": "A two-minute traffic-light screen, then act."
    },
    {
     "dom": "rto",
     "fail": "Telling her it could be meningitis or sepsis without context.",
     "why": "“Did not respond to the patient’s concerns.” Panic can stop a parent taking in the practical steps.",
     "fix": "Calm and honest: “Most babies turn out fine, but this is how we keep babies this small safe.”"
    },
    {
     "dom": "gs",
     "fail": "Saying “go to A&E” and ending the call.",
     "why": "“Follow-up not arranged.” No handover, no check she can get there, no 999 criteria.",
     "fix": "Phone ahead, ask about transport and a companion, give specific 999 triggers, use teach-back."
    },
    {
     "dom": "rto",
     "fail": "Letting “sorry, I’m probably overreacting” pass without comment.",
     "why": "Parents who feel foolish delay calling next time.",
     "fix": "“You’re not overreacting — ringing was exactly right.” Say it early and again at the close."
    }
   ]
  }
 },
 "flight-anxiety-diazepam": {
  "stem": {
   "name": "Bianca Foster",
   "age": "38-year-old woman",
   "pmh": [
    "No significant past medical history recorded",
    "Moved from a previous practice"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "None recorded",
   "recent": "Reports that her previous GP gave her a few diazepam before flights. No other recent contact.",
   "reason": "Telephone request: “A few diazepam for a long-haul flight in two weeks.”"
  },
  "knowledge": {
   "guideline": "BNF — benzodiazepines (anxiolytics) · NICE CG113 — Generalised anxiety disorder and panic disorder in adults · GOV.UK — travelling with medicine containing controlled drugs · GMC prescribing guidance (2021)",
   "summary": "Fear of flying is a specific phobia, and benzodiazepines don’t treat it. Decline kindly with clear reasons (sedation, clot risk when immobile, slower reactions in an emergency, legal problems abroad, dependence), then offer things that work: a fear-of-flying course, CBT-based self-help, and breathing techniques. Check for wider anxiety.",
   "points": [
    {
     "h": "What benzodiazepines are licensed for",
     "t": "BNF: benzodiazepines are for short-term relief (2–4 weeks only) of anxiety that is severe, disabling or causing unacceptable distress. They do not treat a phobia. The previous GP’s prescribing does not make a new prescription appropriate."
    },
    {
     "h": "The safety reasons",
     "t": "Sedation and occasional paradoxical agitation or disinhibition; sitting still and drowsy for hours on a long flight adds to clot risk; reduced alertness makes it harder to follow crew instructions or evacuate; interaction with alcohol taken on board; tolerance and dependence."
    },
    {
     "h": "Legal issues abroad",
     "t": "Diazepam is a UK controlled drug. GOV.UK advises checking the destination country’s rules with its embassy before travelling with controlled drugs, and some countries restrict or ban them. Diazepam is also covered by UK drug-driving law if she drives soon after landing."
    },
    {
     "h": "They maintain the fear",
     "t": "Sedating through a flight works as a safety behaviour: she never learns that she can cope, so the fear persists. Exposure-based approaches reduce it over time."
    },
    {
     "h": "What works",
     "t": "Fear-of-flying courses (several airlines run one-day courses combining pilot explanation with psychological techniques), CBT-based self-help, controlled breathing and grounding. NHS Talking Therapies accepts self-referral for anxiety problems, including specific phobias."
    },
    {
     "h": "Look for wider anxiety",
     "t": "Ask whether anxiety affects other areas of life. NICE CG113: do not offer benzodiazepines for generalised anxiety disorder except short term during a crisis, and do not prescribe them for panic disorder; offer stepped psychological care first."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Bianca Foster? It’s Dr Okafor from the surgery. Can you confirm your date of birth? … Thanks. I understand you’d like to talk about an upcoming flight — tell me what’s going on.",
    "dom": "gs",
    "why": "Identity check and open start on the phone"
   },
   {
    "who": "pt",
    "text": "I’ve got a long-haul flight in a couple of weeks and I’m terrified. My old GP always gave me a few diazepam and it really helped. Could you just do me about five? It’s only for the flight."
   },
   {
    "who": "dr",
    "text": "Thank you for being so clear. Before we get to the tablets, I’d like to understand what flying is like for you. Would that be okay?",
    "dom": "rto",
    "why": "Acknowledges the request without an instant yes or no; explores first"
   },
   {
    "who": "pt",
    "text": "I suppose. It’s the only thing that gets me on the plane."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "What happens for you when you think about the flight, or when you’re on the plane?",
    "dom": "rto",
    "why": "Open question about her experience of the fear"
   },
   {
    "who": "pt",
    "text": "My heart races, I feel sick, I’m convinced something’s going to go wrong. Even thinking about it now I feel it."
   },
   {
    "who": "dr",
    "text": "That sounds really horrible. Is it only flying that makes you feel like that, or does anxiety show up in other parts of your life too — work, sleep, being out and about?",
    "dom": "tasks",
    "why": "Screens for a wider anxiety disorder behind the phobia"
   },
   {
    "who": "pt",
    "text": "I’ve not really thought about it that way. Flying is the thing that floors me."
   },
   {
    "who": "dr",
    "text": "Okay. And when you took the diazepam before, how did you feel on the flight — and did you have alcohol with it?",
    "dom": "tasks",
    "why": "Checks prior effects and the alcohol interaction"
   },
   {
    "who": "pt",
    "text": "It took the edge off, I think. I can’t really remember whether I had a drink."
   },
   {
    "who": "dr",
    "text": "That’s helpful. Do you have any other health conditions, or take anything regularly, and is there anything like a clot in the past in you or your family?",
    "dom": "tasks",
    "why": "Brief safety screen including VTE risk"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. I’m pretty healthy."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "Can I ask what this trip means to you? You said diazepam is the only thing that gets you on the plane.",
    "dom": "rto",
    "why": "Follows the cue about the stakes of the trip"
   },
   {
    "who": "pt",
    "text": "It’s important. I can’t not go. I’m honestly scared that without something I just won’t get on."
   },
   {
    "who": "dr",
    "text": "Thank you — so the real worry is being unable to travel to something that matters. That makes complete sense, and I want to help you get on that plane.",
    "dom": "rto",
    "why": "Names the hidden concern and aligns with her goal"
   },
   {
    "phase": "Explanation",
    "clock": "5–8 min",
    "who": "dr",
    "text": "I’m going to be honest with you about the diazepam, because you deserve the reasons rather than just a no. GPs have moved away from prescribing it for flights, and it isn’t me being awkward.",
    "dom": "rto",
    "why": "Signposts a difficult message respectfully"
   },
   {
    "who": "pt",
    "text": "Oh. My old GP never had a problem with it."
   },
   {
    "who": "dr",
    "text": "I understand, and I’m not criticising them. The reasons are about your safety. It makes you drowsy, and now and then it does the opposite and makes people agitated. Sitting still and sleepy for hours on a long flight raises the chance of a clot in the leg. If there were an emergency on board, you’d be slower to react. And some countries restrict it, so carrying it can cause problems at the other end.",
    "dom": "tasks",
    "why": "Gives the specific safety and legal reasons for declining"
   },
   {
    "who": "pt",
    "text": "I didn’t know about the clot thing, or the countries."
   },
   {
    "who": "dr",
    "text": "And the biggest reason: it doesn’t treat the fear. It gets you through one flight, but the fear is still there next time — sometimes stronger, because you never find out you can manage without it.",
    "dom": "tasks",
    "why": "Explains that benzodiazepines maintain rather than treat the phobia"
   },
   {
    "who": "pt",
    "text": "So what am I supposed to do? I can’t just not go."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "You won’t have to. There are things that work better. Several airlines run one-day fear-of-flying courses with a pilot explaining what’s happening and a psychologist teaching coping skills — some people finish with a short flight. There are good self-help programmes based on CBT, and I can teach you a breathing technique now. Which of those sounds most doable in two weeks?",
    "dom": "tasks",
    "why": "Offers effective alternatives and involves her in choosing"
   },
   {
    "who": "pt",
    "text": "The course might be good if I can get on one. And the breathing, definitely."
   },
   {
    "who": "dr",
    "text": "Let’s try it now. Breathe in gently through your nose for a count of four, and out slowly through your mouth for a count of six. The longer out-breath calms your body down. Practise a few minutes twice a day before the trip, so it’s automatic on the plane.",
    "dom": "tasks",
    "why": "Teaches a practical technique during the consultation"
   },
   {
    "who": "pt",
    "text": "That actually helps a bit, even now."
   },
   {
    "who": "dr",
    "text": "Good. I’ll message you links to fear-of-flying courses and a CBT self-help programme. And if you’d like longer-term help, you can refer yourself to NHS Talking Therapies — they treat phobias like this properly. For the flight itself: move around the cabin, drink water, go easy on alcohol.",
    "dom": "gs",
    "why": "Concrete, tailored plan with written follow-up and travel advice"
   },
   {
    "who": "pt",
    "text": "Okay. I’m a bit disappointed, but I get it."
   },
   {
    "who": "dr",
    "text": "That’s completely fair — you rang expecting one thing and I’ve offered something else. I’d rather give you tools that work this time and every time than something that just papers over it.",
    "dom": "rto",
    "why": "Acknowledges her disappointment and holds the boundary kindly"
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Could you tell me back what you’re going to do over the next two weeks, so I know I’ve explained it well?",
    "dom": "gs",
    "why": "Teach-back to check understanding"
   },
   {
    "who": "pt",
    "text": "Look at the courses, try the self-help, practise the breathing twice a day, and walk about and drink water on the flight."
   },
   {
    "who": "dr",
    "text": "Exactly. If the anxiety starts spilling into other parts of your life, or you want to talk it through again before you go, ring and book in with me. And I’d love to hear how the flight went.",
    "dom": "rto",
    "why": "Leaves a route back and offers continuity"
   },
   {
    "who": "pt",
    "text": "Thanks. I’ll let you know."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Did not answer the prescription request straight away; explored what flying is like for her in her own words.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "What the trip means, previous experience with diazepam, alcohol use when flying, how anxiety affects daily life.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “it’s the only thing that gets me on the plane” and the fear of not being able to travel.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea that diazepam is the answer; concern about missing an important trip; expectation of a small prescription.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "No tests needed; brief safety screen (health conditions, regular medicines, clot history) and screen for wider anxiety.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Specific phobia of flying vs part of generalised anxiety or panic disorder.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Considered clot risk factors and alcohol co-use; asked whether anxiety extends beyond flying.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named it as a common, treatable fear of flying (specific phobia) and explained it in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Declined diazepam with clear reasons; offered a fear-of-flying course, CBT self-help, a breathing technique and NHS Talking Therapies.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Addressed alcohol on flights and in-flight clot prevention; offered assessment if anxiety is wider.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Written links sent, route back before travel, teach-back, and review if anxiety spreads to daily life.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Bianca Foster",
    "age": "38 years · female",
    "pmh": [
     "Nil significant"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "None recorded",
    "recent": "⚠ States previous GP issued a few diazepam before flights. Flight in two weeks.",
    "reason": "Telephone request for “a few diazepam” before a long-haul flight in two weeks."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Let her make the request in full. Don’t say yes or no yet — ask what flying is like for her."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Symptoms of the fear, previous diazepam effects, alcohol, health and clot risk, wider anxiety."
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "What the trip means and the fear of not being able to go."
    },
    {
     "t": "5–8",
     "h": "Kind decline with reasons",
     "d": "Sedation, clot risk, emergency response, legal issues abroad, dependence — and that it doesn’t treat the fear."
    },
    {
     "t": "8–12",
     "h": "Alternatives and close",
     "d": "Course, CBT self-help, breathing technique practised now, Talking Therapies; teach-back and route back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes because the previous GP did, or refuses flatly (“we don’t do that”) with no reasons or alternatives; never explores what the trip means or whether anxiety is wider; she ends the call feeling judged and stuck.",
    "pass": "Declines with the main safety reasons; validates the fear; offers a fear-of-flying course and self-help; checks for wider anxiety; offers a route back.",
    "exc": "All of the above, plus: explores the stakes of the trip before giving the decision; teaches a breathing technique on the call; turns the decline into a better offer; acknowledges her disappointment honestly; she leaves with a concrete two-week plan she chose."
   },
   "avoid": [
    {
     "dont": "“We don’t prescribe diazepam for flying — practice policy.”",
     "instead": "“I’d like to explain why, because the reasons are about your safety, and then find something that works better.”",
     "why": "Hiding behind policy reads as dismissive and loses Relating marks."
    },
    {
     "dont": "“Fine, just this once, since your old GP did.”",
     "instead": "“I’m not criticising your old GP, but I’m not able to prescribe it safely — here’s what I can offer instead.”",
     "why": "Collusion is unsafe prescribing and a Tasks fail."
    },
    {
     "dont": "“Just try to relax, you’ll be fine.”",
     "instead": "“Let’s practise a breathing technique right now so you have something that works on the plane.”",
     "why": "Empty reassurance gives her nothing to use."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "What the trip means",
     "t": "The stakes of the journey shape how hard a refusal lands. Ask, don’t assume, and link the plan to getting her there."
    },
    {
     "h": "Alcohol on flights",
     "t": "People with flying anxiety often drink to cope. Alcohol plus a sedative adds to drowsiness and immobility."
    }
   ],
   "legal": [
    {
     "h": "Controlled drugs abroad",
     "t": "GOV.UK advises checking with the destination country’s embassy before travelling with medicine containing a controlled drug; some countries restrict benzodiazepines and possession can lead to fines or detention."
    },
    {
     "h": "Drug driving",
     "t": "Diazepam is one of the medicines covered by UK drug-driving law. It is an offence to drive if impaired, which matters if she drives after landing or on return."
    }
   ],
   "professional": [
    {
     "h": "Prescribing responsibility",
     "t": "GMC prescribing guidance (2021): you are responsible for prescriptions you sign and should prescribe only when satisfied the medicine serves the patient’s needs. A previous doctor’s practice does not transfer that responsibility."
    },
    {
     "h": "Declining respectfully",
     "t": "Explain the reasons, offer alternatives, and tell her she can seek a second opinion. Document the discussion and what was offered."
    }
   ],
   "community": [
    {
     "h": "Resources",
     "t": "Airline-run fear-of-flying courses, CBT-based self-help programmes, and NHS Talking Therapies by self-referral."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Anxiety spilling into daily life — possible generalised anxiety or panic disorder",
     "Heavy alcohol use to cope with flying or anxiety",
     "Personal or family history of clots before a long-haul flight"
    ],
    "psychosocial": [
     "What the trip is for and what missing it would mean",
     "How she coped on previous flights, including alcohol",
     "Time available before travel for a course or self-help"
    ],
    "ice": [
     "Idea: “A few diazepam got me through before.”",
     "Concern: not being able to get on the plane for a trip that matters",
     "Expectation: a small prescription today"
    ]
   },
   "diagnosis": "Frame it as a common, treatable fear: “What you’re describing is a fear of flying — a specific phobia. It’s very common, and there are proper treatments that shrink it rather than just sedating you through it.”",
   "diagnosisLay": "“Diazepam is like switching off a smoke alarm for one night — it goes quiet, but the alarm is still set too sensitive for next time. The courses and techniques recalibrate the alarm.”",
   "management": {
    "reflectIce": "“You told me the real fear is not being able to go. Everything I’m suggesting is about getting you on that plane.”",
    "psychosocial": "Fit the plan into two weeks: a one-day course if one is available, daily breathing practice, a self-help programme, and a route back before she flies.",
    "sharedPlan": [
     "Decline diazepam with the safety, legal and efficacy reasons",
     "Fear-of-flying course, CBT self-help, breathing technique practised now",
     "Offer NHS Talking Therapies self-referral and review if anxiety is wider"
    ],
    "safetyNet": [
     "Book in before travel if the anxiety worsens or spreads to daily life",
     "On the flight: move around, drink water, limit alcohol"
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
    "t": "Benzodiazepines and Z-drugs",
    "s": "Management protocol · safe prescribing",
    "href": "management/benzodiazepines-z-drugs.html"
   },
   {
    "ic": "💠",
    "t": "Anxiety management",
    "s": "Management protocol · stepped care",
    "href": "management/anxiety.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests how you say no. Candidates fail either by giving in to a reasonable-sounding request or by refusing so bluntly that the patient leaves with nothing.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing five diazepam because the previous GP did and the patient is otherwise well.",
     "why": "“Management not in line with current UK practice.” The request is outside the BNF indication and carries real safety and legal risks.",
     "fix": "Decline, give the reasons, and make a better offer in the same breath."
    },
    {
     "dom": "rto",
     "fail": "Opening with “We don’t prescribe that for flights” before hearing anything about her.",
     "why": "“Did not explore the patient’s agenda.” She hears a door closing and stops listening.",
     "fix": "Explore first: what flying is like, what the trip means. Then the decline lands as care."
    },
    {
     "dom": "tasks",
     "fail": "Listing the risks but offering no alternative.",
     "why": "A refusal without a plan leaves the problem unmanaged and scores poorly on Tasks.",
     "fix": "Name at least two things that work — a course and CBT-based self-help — and teach a breathing technique on the call."
    },
    {
     "dom": "tasks",
     "fail": "Never asking whether anxiety affects the rest of her life.",
     "why": "A wider anxiety or panic disorder would change management and is an easy miss.",
     "fix": "“Is it just flying, or does anxiety show up anywhere else?”"
    },
    {
     "dom": "gs",
     "fail": "Jargon — “specific phobia”, “safety behaviour”, “VTE” — without explanation.",
     "why": "“Language not easily understood by the patient.”",
     "fix": "Plain words: “a clot in the leg”, “it gets you through once but keeps the fear going”."
    },
    {
     "dom": "rto",
     "fail": "Ignoring her disappointment and ending the call abruptly.",
     "why": "“Did not respond to the patient’s feelings.” She may simply ring another service for a prescription.",
     "fix": "Name it: “You rang expecting something different — that’s disappointing.” Then check understanding and leave a route back."
    }
   ]
  }
 },
 "hair-loss-young-woman": {
  "stem": {
   "name": "Carys Hughes",
   "age": "28-year-old woman",
   "pmh": [
    "No significant past medical history recorded",
    "Vegetarian"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "No bloods on file in the last two years. Occupation: teacher.",
   "reason": "Video appointment booked: “hair falling out — very worried”."
  },
  "knowledge": {
   "guideline": "PCDS Hair Loss Pathway (Nov 2024) · BAD patient information: telogen effluvium (Oct 2025) · BSG iron deficiency anaemia guideline 2021 · NICE NG88 · NICE NG145 · NICE NG222",
   "summary": "Diffuse shedding a few months after a trigger is telogen effluvium: reactive and reversible. Check FBC, ferritin and TFTs, look for patterned, patchy or scarring loss, and treat the distress as part of the problem.",
   "points": [
    {
     "h": "Recognise telogen effluvium",
     "t": "Diffuse, non-scarring shedding all over the scalp, starting 2–6 months after a trigger and usually settling by 6–9 months (PCDS Hair Loss Pathway 2024). Triggers include febrile illness, childbirth, surgery, crash dieting, severe stress and some drugs. A gentle hair-pull test is often positive."
    },
    {
     "h": "Baseline tests",
     "t": "PCDS advises FBC, ferritin and thyroid function for diffuse hair loss. Ferritin is the single most useful marker of iron deficiency (BSG 2021). Heavy periods warrant an FBC in their own right (NICE NG88)."
    },
    {
     "h": "Treat what you find",
     "t": "Replace iron if deficient and look for the cause — here heavy periods and a restricted diet. Oral iron dose per BNF. Manage abnormal thyroid function per NICE NG145."
    },
    {
     "h": "Know the look-alikes",
     "t": "Androgenetic (female pattern) loss: widening central parting, frontal hairline kept. Alopecia areata: discrete smooth patches with exclamation-mark hairs. Scarring alopecia: loss of follicle openings, redness, scale or pain — refer urgently to dermatology to prevent permanent loss (PCDS 2024)."
    },
    {
     "h": "The distress is clinical",
     "t": "Hair loss commonly causes low mood, anxiety and social withdrawal. Ask about mood and, where low, assess and support per NICE NG222 (depression in adults)."
    },
    {
     "h": "Honest timeline",
     "t": "Shedding eases over the following months and regrowth is gradual; short new hairs at the hairline are a good sign. Topical minoxidil is not a routine treatment for telogen effluvium."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Carys, I’m Dr Lee. I can see from your note you’re really worried about your hair. Tell me what’s been happening, from the start.",
    "dom": "rto",
    "why": "Open question; acknowledges the distress in the booking note"
   },
   {
    "who": "pt",
    "text": "It’s coming out in handfuls in the shower, it’s all over my pillow, and it just looks thinner everywhere. I’m 28 — I’m terrified I’m going bald. I just need it to stop."
   },
   {
    "who": "dr",
    "text": "That sounds frightening, and I can hear how upset you are. I want to understand exactly what’s going on, have a look, and then agree a plan with you. Is that okay?",
    "dom": "gs",
    "why": "Acknowledges emotion and sets an agenda"
   },
   {
    "who": "pt",
    "text": "Yes. Sorry, I’ve been crying about it all week."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "No need to apologise at all. When did you first notice it, and is it thinning all over, or are there any bald patches?",
    "dom": "tasks",
    "why": "Pattern and timing — diffuse versus patchy"
   },
   {
    "who": "pt",
    "text": "About three months ago. It’s everywhere, not patches."
   },
   {
    "who": "dr",
    "text": "Think back to a few months before that — anything big happen? Illness, stress, changes in eating?",
    "dom": "tasks",
    "why": "Looks for the trigger 2–6 months earlier"
   },
   {
    "who": "pt",
    "text": "Loads, actually. We moved house, which was a nightmare, then I had a flu-type thing and was in bed for a week. And I did a really strict diet to lose weight."
   },
   {
    "who": "dr",
    "text": "That’s really helpful. What sort of diet — and are you vegetarian?",
    "dom": "tasks",
    "why": "Nutritional contributors to iron deficiency"
   },
   {
    "who": "pt",
    "text": "I’m vegetarian anyway, and I cut right down on everything for a couple of months."
   },
   {
    "who": "dr",
    "text": "And your periods — are they heavy at all? Flooding, or needing to change very often?",
    "dom": "tasks",
    "why": "Iron loss from heavy menstrual bleeding"
   },
   {
    "who": "pt",
    "text": "They’re really heavy. I’ve always had heavy ones."
   },
   {
    "who": "dr",
    "text": "Is there any chance you could be pregnant, and are you taking any medicines, supplements or anything new?",
    "dom": "tasks",
    "why": "Pregnancy and drug causes"
   },
   {
    "who": "pt",
    "text": "No, not pregnant. No medicines."
   },
   {
    "who": "dr",
    "text": "Any feeling tired, cold or hot all the time, palpitations, or weight change you didn’t intend?",
    "dom": "tasks",
    "why": "Thyroid and anaemia screen"
   },
   {
    "who": "pt",
    "text": "I’m exhausted, but I thought that was the stress."
   },
   {
    "who": "dr",
    "text": "Does your scalp itch, burn or feel sore anywhere, or have you seen redness or scaly areas?",
    "dom": "tasks",
    "why": "Screens for scarring alopecia"
   },
   {
    "who": "pt",
    "text": "No, the scalp feels normal."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "You said you’ve been crying all week. What does losing your hair mean for you?",
    "dom": "rto",
    "why": "Explores meaning and identity rather than just the symptom"
   },
   {
    "who": "pt",
    "text": "It’s silly, but it’s me — it’s how I feel like myself. I’ve stopped going out. I keep thinking something serious is wrong with me."
   },
   {
    "who": "dr",
    "text": "It isn’t silly at all. How has your mood been generally — are you still enjoying things, sleeping, managing at work?",
    "dom": "tasks",
    "why": "Mood screen prompted by social withdrawal"
   },
   {
    "who": "pt",
    "text": "I get through work. But evenings I just feel low and check my hair constantly."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me that. What were you hoping we could do today?",
    "dom": "rto",
    "why": "Elicits expectations"
   },
   {
    "who": "pt",
    "text": "Something to make it stop. And to know it’s not something awful."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "Could you show me the top of your head and your parting on the camera? … Thank you. That looks like even thinning, the hairline is intact, and I can’t see patches or any redness. I’d still like to see you in person to look more closely.",
    "dom": "tasks",
    "why": "Examination adapted to video, with a face-to-face offer"
   },
   {
    "who": "dr",
    "text": "From everything you’ve told me, this sounds very much like telogen effluvium. A shock to the body — your illness, the move, the strict diet — makes lots of hairs switch into their resting phase together, and a couple of months later they all fall out at once. It’s alarming, but it’s reactive and it recovers. You are not going bald.",
    "dom": "tasks",
    "why": "Names the diagnosis with a reasoned mechanism"
   },
   {
    "who": "pt",
    "text": "So it’ll grow back?"
   },
   {
    "who": "dr",
    "text": "Yes. I’ll be honest about timing: the shedding usually eases over the next few months, and regrowth is gradual, so it takes a while to see the thickness return. Look for short new hairs at the front — that’s a good sign.",
    "dom": "tasks",
    "why": "Honest timeline rather than a brush-off"
   },
   {
    "who": "pt",
    "text": "Months though… that’s hard."
   },
   {
    "who": "dr",
    "text": "It is, and I won’t pretend otherwise. What I can do is make sure nothing is keeping it going. With heavy periods, being vegetarian and that diet, you may be low in iron — and the tiredness fits. So I’d like a blood count, iron stores and thyroid test.",
    "dom": "tasks",
    "why": "Targets reversible contributors: ferritin, FBC, TFTs"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "If your iron is low, we’ll treat it, and look at the heavy periods too — there are good treatments for those. What do you think?",
    "dom": "rto",
    "why": "Shares the plan and links it to her other symptoms"
   },
   {
    "who": "pt",
    "text": "Yes. I didn’t know periods could do this."
   },
   {
    "who": "dr",
    "text": "And the low evenings — would it help to talk more about that? There’s support available, and I’d like to see how you are when we go through the results.",
    "dom": "tasks",
    "why": "Offers mood support and follow-up"
   },
   {
    "who": "pt",
    "text": "Maybe. It helps just saying it out loud."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you see a smooth bald patch, redness, scaling or soreness on the scalp, or it’s still shedding heavily in six months, tell me — those need a different approach. And if your mood gets worse or you have any thoughts of harming yourself, contact us the same day.",
    "dom": "gs",
    "why": "Specific safety-net for scarring or patchy loss and mood"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "So what will you tell a friend tonight about what’s happening?",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "That it’s a shed after a rough few months, it grows back, and I’m getting my iron and thyroid checked."
   },
   {
    "who": "dr",
    "text": "Exactly right. Book the blood test this week and a face-to-face with me in two weeks. Anything else before we finish?",
    "dom": "rto",
    "why": "Confirms follow-up and shares the floor"
   },
   {
    "who": "pt",
    "text": "No. Thank you — I feel less mad."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; acknowledged the distress in the booking note and let her describe the shedding fully.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work as a teacher, the house move, strict dieting, vegetarian diet, and social withdrawal.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “crying all week” and “I’ve stopped going out”, and the tiredness, and explored each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (going bald, something serious); concern (identity, social withdrawal, low evenings); expectation (make it stop).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Video look at the scalp with a face-to-face offer; FBC, ferritin and TFTs; asked about pregnancy and drugs.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Telogen effluvium versus female pattern loss, alopecia areata, scarring alopecia, iron deficiency and thyroid disease.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for scarring alopecia (itch, pain, redness, scale) and asked directly about low mood and risk.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named telogen effluvium with the trigger and mechanism, and an honest recovery timeline.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Tests for contributors, iron replacement if low (dose per BNF), attention to heavy periods, mood support; no minoxidil for telogen effluvium.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Heavy menstrual bleeding and restricted diet as the likely cause of iron deficiency; low mood addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named triggers for review (patches, scalp changes, no improvement at 6 months, worsening mood) and booked follow-up with results.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Gender, reproductive & sexual health",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Carys Hughes",
    "age": "28 years · female",
    "pmh": [
     "Nil significant recorded",
     "Vegetarian"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "NKDA",
    "recent": "No blood tests in the last two years. Teacher.",
    "reason": "Video consultation. “Hair falling out — very worried.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and acknowledge",
     "d": "She arrives tearful. Acknowledge it before the history — “you’ve been crying all week” is your cue."
    },
    {
     "t": "1–5",
     "h": "Pattern, trigger, contributors",
     "d": "Diffuse or patchy; timing; trigger 2–6 months earlier (illness, move, diet); periods, diet, pregnancy, drugs, thyroid symptoms; scalp symptoms."
    },
    {
     "t": "5–7",
     "h": "Meaning and mood",
     "d": "What her hair means to her, the social withdrawal, and a direct mood question."
    },
    {
     "t": "7–10",
     "h": "Look, name it, test",
     "d": "Scalp on camera, face-to-face offer. Telogen effluvium with mechanism and honest timeline. FBC, ferritin, TFTs; heavy periods."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Patches, scalp changes, no recovery, worsening mood. Teach-back. Results and review in two weeks."
    }
   ],
   "wordPics": {
    "fail": "“Don’t worry, it’ll grow back” with no history of triggers or bloods; or prescribes minoxidil; never asks about periods or diet; never asks about mood despite tears and withdrawal.",
    "pass": "Identifies telogen effluvium and its trigger, checks FBC, ferritin and TFTs, excludes patchy and scarring loss, acknowledges her distress and arranges follow-up.",
    "exc": "All of the above, plus: explains the mechanism so the reassurance is believable; gives an honest timeline; links heavy periods and diet to iron and her tiredness; explores what her hair means and screens mood; examines by video and offers a proper look in person; she leaves hopeful."
   },
   "avoid": [
    {
     "dont": "“It’s only hair — it’ll grow back.”",
     "instead": "“I can see how much this matters to you. The good news, with reasons, is that this type does grow back.”",
     "why": "Minimising the distress loses Relating marks even when the reassurance is correct."
    },
    {
     "dont": "“Let’s start you on minoxidil.”",
     "instead": "“The priority is finding anything keeping the shed going — iron and thyroid — and treating that.”",
     "why": "Minoxidil is not a routine treatment for telogen effluvium and misses the contributors."
    },
    {
     "dont": "“It’s probably just stress.”",
     "instead": "“Your illness, the move and the diet together are a classic trigger — and I want to check your iron too.”",
     "why": "Labelling it stress ignores the treatable iron-deficiency picture."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Identity and social withdrawal",
     "t": "Hair is closely tied to self-image; avoiding social events and constant checking are signs of real distress and possible low mood."
    },
    {
     "h": "Diet",
     "t": "A vegetarian diet plus a recent crash diet raises iron and nutritional risk — explore without judgement and consider dietitian input if restriction continues."
    }
   ],
   "legal": [
    {
     "h": "Fit for work",
     "t": "She is managing at work; no fit note is needed. If low mood worsens and affects work, a fit note can be considered."
    }
   ],
   "professional": [
    {
     "h": "Remote examination",
     "t": "A video look at the scalp is useful but limited; offering a face-to-face examination to exclude scarring or patchy loss reflects GMC Good Medical Practice (2024)."
    },
    {
     "h": "Avoid unproven treatments",
     "t": "Explain why supplements beyond correcting a proven deficiency, and minoxidil, are not indicated for telogen effluvium."
    }
   ],
   "community": [
    {
     "h": "Patient information and support",
     "t": "British Association of Dermatologists patient information leaflet on telogen effluvium; Alopecia UK for peer support; NHS Talking Therapies self-referral if mood is low."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Scalp redness, scale, pain, burning or loss of follicle openings — possible scarring alopecia, urgent dermatology",
     "Discrete smooth patches — alopecia areata",
     "Symptoms of anaemia or thyroid disease; heavy menstrual bleeding",
     "Low mood, withdrawal, any thoughts of self-harm"
    ],
    "psychosocial": [
     "Teacher, managing at work but withdrawing socially",
     "Recent stressful house move and strict dieting",
     "What her hair means to her identity"
    ],
    "ice": [
     "Idea: “I’m going bald — something is seriously wrong.”",
     "Concern: losing part of herself; avoiding friends; feeling low",
     "Expectation: “Something to make it stop.”"
    ]
   },
   "diagnosis": "“This is telogen effluvium — a delayed shed after a shock to the system. It looks alarming, but it’s reactive and it recovers once the trigger has passed and anything like low iron is corrected.”",
   "diagnosisLay": "“Think of your hairs as a crowd that normally leaves a few at a time. A big shock — illness, stress, dieting — makes lots of them head for the exit together a couple of months later. Once the crowd has left, new ones come back in, but it takes months.”",
   "management": {
    "reflectIce": "“You told me your hair is how you feel like yourself — that’s exactly why I want to find and fix anything slowing its recovery.”",
    "psychosocial": "Acknowledge the withdrawal and low evenings, offer support, and agree a realistic timeline so she isn’t checking daily for change.",
    "sharedPlan": [
     "FBC, ferritin, TFTs; face-to-face scalp examination",
     "Treat iron deficiency (dose per BNF) and address heavy periods",
     "Mood support and review with results"
    ],
    "safetyNet": [
     "Patches, scalp redness or soreness, or no improvement by 6 months — review and consider dermatology",
     "Worsening mood or thoughts of self-harm — contact the same day"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Hair loss pathway",
    "s": "Visual algorithm · diffuse versus patchy",
    "href": "algorithms/hair-loss.html"
   },
   {
    "ic": "💠",
    "t": "Female pattern hair loss",
    "s": "Protocol · look-alikes · PCDS 2024",
    "href": "management/female-pattern-hair-loss.html"
   },
   {
    "ic": "💠",
    "t": "Iron-deficiency anaemia protocol",
    "s": "Iron dosing · BSG 2021",
    "href": "management/iron-deficiency-anaemia.html"
   },
   {
    "ic": "📋",
    "t": "Anaemia",
    "s": "Case walkthrough · ferritin",
    "href": "../cases/anaemia.html"
   },
   {
    "ic": "📋",
    "t": "Depression",
    "s": "Case walkthrough · NICE NG222",
    "href": "../cases/depression.html"
   }
  ],
  "pitfalls": {
   "intro": "Candidates usually know telogen effluvium. The station is failed on how the reassurance is delivered, on missing the iron picture, and on ignoring what the hair loss is doing to her.",
   "items": [
    {
     "dom": "rto",
     "fail": "“It’ll grow back, don’t worry” within the first three minutes.",
     "why": "Reassurance before understanding reads as dismissal: “Does not take the patient’s concerns seriously.”",
     "fix": "Hear the history and the meaning first, then explain the mechanism so the reassurance is earned."
    },
    {
     "dom": "tasks",
     "fail": "No question about periods or diet.",
     "why": "Heavy periods, a vegetarian diet and crash dieting are the treatable contributors; missing them is incomplete data gathering.",
     "fix": "Ask directly and check FBC, ferritin and TFTs, as PCDS advises for diffuse hair loss."
    },
    {
     "dom": "tasks",
     "fail": "Offering minoxidil or supplements as the fix.",
     "why": "Neither treats telogen effluvium; it signals a management plan not based on the diagnosis.",
     "fix": "Treat proven deficiencies and give an honest recovery timeline."
    },
    {
     "dom": "tasks",
     "fail": "Not looking at the scalp or asking about scalp symptoms.",
     "why": "Scarring alopecia needs urgent referral and can be missed without asking about pain, redness or scale.",
     "fix": "Look on camera, ask the scalp questions, and offer a face-to-face examination."
    },
    {
     "dom": "rto",
     "fail": "Ignoring “I’ve stopped going out” and the tears.",
     "why": "“Does not identify or respond to cues.” The social withdrawal is the emotional core of the case.",
     "fix": "“You said you’ve stopped going out — how has your mood been?”"
    },
    {
     "dom": "gs",
     "fail": "Closing without saying when to come back or what would change the plan.",
     "why": "Non-specific safety-netting and no follow-up are standard failing feedback.",
     "fix": "Name patches, scalp changes, no improvement by six months and worsening mood; book the results review."
    }
   ]
  }
 },
 "low-platelets-young": {
  "stem": {
   "name": "Chloe Fenner",
   "age": "27-year-old woman",
   "pmh": [
    "Heavy periods and tiredness (reason for recent blood test)",
    "Baby born 8 months ago"
   ],
   "meds": [
    "No regular medication on record"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "FBC last week for heavy periods and tiredness: platelets 38 × 10⁹/L. Haemoglobin normal, white cell count normal, no blasts flagged by the lab. No previous platelet count on record. Text sent asking her to book.",
   "reason": "Video consultation to discuss an abnormal blood count."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) — haematological cancers · International consensus report on immune thrombocytopenia (Provan et al., Blood Advances 2019) (international) · BNF (NSAIDs and bleeding risk) · GMC Good Medical Practice (2024)",
   "summary": "A platelet count of 38 with a normal haemoglobin and white count, in a well 27-year-old, is an isolated thrombocytopenia — most often immune thrombocytopenia (ITP), not leukaemia. Confirm it with a film, screen for red flags, examine her in person, and get prompt haematology advice because she has mucosal bleeding.",
   "points": [
    {
     "h": "Read the pattern first",
     "t": "Only one cell line is low. Leukaemia usually disturbs more than one line or shows abnormal cells on the film. Isolated thrombocytopenia in a well young adult is most often ITP, which is a diagnosis of exclusion (Provan et al. 2019, international)."
    },
    {
     "h": "Make sure the number is real",
     "t": "EDTA can make platelets clump and read falsely low (pseudothrombocytopenia). A blood film, and a repeat in a citrate tube if clumping is seen, confirms a true low count and looks for blasts, red-cell fragments and giant platelets."
    },
    {
     "h": "NICE NG12 (updated April 2026) and leukaemia",
     "t": "NICE NG12 (updated April 2026): in adults, consider a very urgent FBC (within 48 hours) to assess for leukaemia if there is pallor, persistent fatigue, unexplained fever, persistent or recurrent infection, generalised lymphadenopathy, unexplained bruising, bleeding or petechiae, or hepatosplenomegaly. She already has the count; the film and examination are the next step. A film suggesting acute leukaemia needs same-day discussion with haematology (clinical practice; NICE NG12 (updated April 2026)’s immediate-specialist-assessment recommendation for unexplained petechiae or hepatosplenomegaly applies to children and young people)."
    },
    {
     "h": "Urgency by count and bleeding",
     "t": "In usual haematology practice, a count below 20, active or significant bleeding, blasts or fragments on the film, or a systemically unwell patient means same-day assessment. A count of 20–50 with minor mucosal bleeding, as here, needs urgent haematology advice rather than a routine wait. Local pathways set the exact thresholds."
    },
    {
     "h": "Work the differential",
     "t": "Recent viral illness, medicines (including over-the-counter and herbal), alcohol, pregnancy, autoimmune disease (joint pain, rashes), and infections that cause ITP such as HIV and hepatitis C, which the international consensus advises testing for in adults. Her heavy periods may be a result of the low platelets rather than a separate problem."
    },
    {
     "h": "Bleeding precautions",
     "t": "Avoid NSAIDs and aspirin, which impair platelet function (BNF). Avoid contact sport. Heavy bleeding that won’t stop, blood in urine or stool, black stools, a severe headache or new neurological symptoms need emergency care."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Chloe, I’m Dr Lee. Can you see and hear me okay, and is now a good time to talk? … You said in your message you’re worried. Tell me what’s been going on.",
    "dom": "rto",
    "why": "Checks the video set-up and opens with her agenda"
   },
   {
    "who": "pt",
    "text": "I got a text saying my blood test was abnormal. Then I googled low platelets at 2am with the baby and now I’m convinced it’s leukaemia. I’ve been bruising on my legs and my gums bled. Please just tell me straight — is it cancer?"
   },
   {
    "who": "dr",
    "text": "I will be straight with you, I promise. The short answer first: your platelets are low, but the rest of your blood count is normal, and that pattern is much more often a treatable immune problem than leukaemia. I want to check a few things to be sure. Is it okay if I ask some questions and then we plan together?",
    "dom": "rto",
    "why": "Answers the direct question honestly and early, without blanket reassurance"
   },
   {
    "who": "pt",
    "text": "Okay. Yes. Sorry, I’m just scared."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "There’s nothing to be sorry for. Tell me about the bruising and the gums.",
    "dom": "tasks",
    "why": "Opens the bleeding history"
   },
   {
    "who": "pt",
    "text": "The bruises are on my shins — I don’t remember knocking them. The gums bled once when I was brushing."
   },
   {
    "who": "dr",
    "text": "Any tiny red or purple pinprick spots on your skin, nosebleeds, blood in your wee or your poo, or black stools?",
    "dom": "tasks",
    "why": "Screens for petechiae and more significant bleeding"
   },
   {
    "who": "pt",
    "text": "No, none of that. Just the bruises and the gums that one time."
   },
   {
    "who": "dr",
    "text": "And the periods — the test was done for heavy periods. How heavy, and have you been flooding or passing clots?",
    "dom": "tasks",
    "why": "Links the heavy periods to the low platelets"
   },
   {
    "who": "pt",
    "text": "They’re heavy — that’s why I had the test. I didn’t think much of it."
   },
   {
    "who": "dr",
    "text": "That may well be connected — low platelets can make periods heavier. Now some questions to make sure we’re not missing anything more serious: any night sweats that soak the sheets, fevers, weight loss you can’t explain, bone pain, lumps in your neck, armpits or groin, or lots of infections?",
    "dom": "tasks",
    "why": "Screens the red flags for leukaemia and lymphoma"
   },
   {
    "who": "pt",
    "text": "No. I’m tired, but I’ve got an eight-month-old."
   },
   {
    "who": "dr",
    "text": "Any recent cold, flu or tummy bug? And could you be pregnant at all?",
    "dom": "tasks",
    "why": "Explores post-viral and pregnancy causes"
   },
   {
    "who": "pt",
    "text": "Nothing I can think of. I don’t think I’m pregnant, but I suppose I can’t be completely sure."
   },
   {
    "who": "dr",
    "text": "That’s fine — we can check. I’ll also go through any medicines, remedies or supplements with you, including anything bought over the counter, because some can lower platelets. We’ll talk about alcohol too — it can affect platelets.",
    "dom": "tasks",
    "why": "Covers drugs and alcohol without inventing an answer"
   },
   {
    "who": "pt",
    "text": "Okay, that’s fine."
   },
   {
    "who": "dr",
    "text": "Can you show me the bruises on your shins on the camera? … Thank you. They look like ordinary bruises, but a camera can’t replace an examination — I want to see you in person to look properly for glands, check your tummy and examine your skin.",
    "dom": "tasks",
    "why": "Uses the video usefully and recognises its limits"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What was it you read at 2am that frightened you most?",
    "dom": "rto",
    "why": "Explores the idea behind the fear"
   },
   {
    "who": "pt",
    "text": "That low platelets and bruising are the first sign of leukaemia. And then I just kept thinking, who’d look after her?"
   },
   {
    "who": "dr",
    "text": "That’s a terrifying thought to have alone in the middle of the night with a baby. Thank you for telling me. What were you hoping I’d do today?",
    "dom": "rto",
    "why": "Acknowledges the emotion and elicits expectations"
   },
   {
    "who": "pt",
    "text": "Tell me it’s not cancer. Or if it is, tell me now."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s what I know. Leukaemia almost always affects the other parts of the blood too — the red cells and the infection-fighting cells — and yours are normal, and the lab saw no abnormal cells. You have no night sweats, weight loss, fevers or bone pain. So leukaemia is unlikely. The most likely cause is immune thrombocytopenia — your immune system clearing platelets too quickly, sometimes after a virus. I can’t promise anything until the film and the specialists have looked, and I won’t pretend otherwise.",
    "dom": "tasks",
    "why": "Gives a working diagnosis and honest probability"
   },
   {
    "who": "pt",
    "text": "So it’s probably not leukaemia?"
   },
   {
    "who": "dr",
    "text": "Probably not, on everything we have. But because your count is 38 and your gums have bled, I don’t want to simply watch and wait. I’ll ring the haematology team today for advice, and I’d like a repeat count and a blood film done today or tomorrow — the film lets the lab look at the cells under a microscope and check the low number isn’t just clumping in the tube.",
    "dom": "tasks",
    "why": "Sets urgency by count and bleeding; confirms the count is genuine"
   },
   {
    "who": "pt",
    "text": "Today? Is that because it’s serious?"
   },
   {
    "who": "dr",
    "text": "It’s because it matters, not because I think it’s cancer. At this level you’re unlikely to have a serious bleed, but I want the specialists involved promptly so we get an answer quickly. They’ll probably also check things like a virus screen, including HIV and hepatitis C — that’s routine for anyone with this result, not a judgement.",
    "dom": "rto",
    "why": "Explains urgency without alarming and normalises routine tests"
   },
   {
    "who": "pt",
    "text": "Okay. That makes sense."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Can you come in to the surgery today so I can examine you and we take the bloods at the same time? Is there someone who can have the baby, or would you like to bring her?",
    "dom": "rto",
    "why": "Arranges the in-person examination and problem-solves childcare"
   },
   {
    "who": "pt",
    "text": "I can bring her — she’ll probably sleep in the pram."
   },
   {
    "who": "dr",
    "text": "Perfect. Until we know more: no ibuprofen or aspirin — paracetamol is fine for pain. Avoid anything rough-and-tumble. Brush your teeth with a soft brush. And a pregnancy test when you come in.",
    "dom": "tasks",
    "why": "Bleeding precautions and pregnancy check"
   },
   {
    "who": "pt",
    "text": "Okay. What about my periods — they’re heavy."
   },
   {
    "who": "dr",
    "text": "Good question. I’ll ask haematology about that when I call, as there are treatments that help and some are better than others when platelets are low. If you soak through a pad or tampon every hour for a couple of hours, that needs urgent help.",
    "dom": "tasks",
    "why": "Addresses the heavy periods as linked to thrombocytopenia"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Now the important part. If you get bleeding that won’t stop after ten minutes of pressure, blood in your wee or poo, black stools, vomiting blood, a sudden severe headache, confusion or weakness, or a rash of tiny red spots spreading — call 999 or go straight to A&E, and say your platelets are low.",
    "dom": "gs",
    "why": "Specific emergency safety-net in plain language"
   },
   {
    "who": "pt",
    "text": "Okay. That’s scary but I get it."
   },
   {
    "who": "dr",
    "text": "It is unlikely, but I want you to know exactly what to do. Just so I know I’ve explained it well, if you were explaining this to someone at home tonight, what would you say?",
    "dom": "rto",
    "why": "Checks understanding with teach-back, neutral about who is at home"
   },
   {
    "who": "pt",
    "text": "That my platelets are low but the rest of my blood is normal, so it’s probably an immune thing, not leukaemia. I’m coming in today for an examination and more tests, the doctor is calling the specialists, and no ibuprofen."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. I’ll phone you myself with the film result and what haematology say, and I’ll stay involved until we have an answer. Please don’t google at 2am — ring us instead. Anything else you wanted to ask?",
    "dom": "gs",
    "why": "Owns the result, sets follow-up and shares the floor"
   },
   {
    "who": "pt",
    "text": "No. Thank you — I actually feel like I can breathe."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her voice the leukaemia fear; answered “is it cancer?” honestly early rather than deferring it to the end.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Eight-month-old baby, sleep deprivation, childcare for an in-person visit, who is at home to support her.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the bruising and gum bleeding, the heavy periods and the 2am search, and explored each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (leukaemia from an online search); concern (not being there for her baby); expectation (a straight answer today).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Blood film and repeat (citrate if clumping); in-person examination for nodes, spleen, liver and skin; pregnancy test; haematology to guide further tests such as HIV and hepatitis C.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "ITP vs pseudothrombocytopenia vs post-viral vs drugs or alcohol vs pregnancy vs autoimmune vs marrow disease; heavy periods as a consequence, not a separate problem.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened B symptoms, bone pain, lymphadenopathy, infections, petechiae and significant bleeding; knew other cytopenias or blasts would change the plan (NICE NG12 (updated April 2026) leukaemia criteria).",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Isolated thrombocytopenia, most likely ITP; leukaemia unlikely but not excluded until the film and specialist review.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day haematology advice given the count and mucosal bleeding; film and repeat today or tomorrow; avoid NSAIDs and aspirin; honest, not blanket, reassurance.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Heavy periods managed with haematology input; medicines and supplements reviewed; pregnancy excluded.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named emergency symptoms (uncontrolled bleeding, blood in urine or stool, severe headache, neurology); GP phones back with results; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Investigations & results",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Chloe Fenner",
    "age": "27 years · female",
    "pmh": [
     "Heavy periods, tiredness",
     "Postnatal — baby 8 months old"
    ],
    "meds": [
     "None on repeat"
    ],
    "allergy": "NKDA",
    "recent": "⚠ FBC last week: platelets 38 × 10⁹/L (isolated). Hb and WCC normal. No blasts flagged. No film comment yet. No previous platelet count on file.",
    "reason": "Booked after an ‘abnormal result’ text. “Please tell me straight — is it cancer?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and answer",
     "d": "She asks “is it cancer?” in her first breath. Give an honest headline early: platelets low, the rest of the count normal — more likely an immune cause. Then ask permission to take a history."
    },
    {
     "t": "1–5",
     "h": "Bleeding and red flags",
     "d": "Bruising, gums, petechiae, blood in urine or stool, heavy periods. B symptoms, bone pain, nodes, infections. Viral illness, medicines, alcohol, pregnancy. Look at the bruises on camera."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "What she read at 2am and the fear for her baby. Name it before explaining."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Isolated pattern, most likely ITP. Film and repeat, in-person examination today, haematology advice today because of count 38 plus gum bleeding. No NSAIDs or aspirin."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Emergency symptoms in plain words. Teach-back. You will phone her with the film and haematology plan."
    }
   ],
   "wordPics": {
    "fail": "Either feeds the fear (“we need to rule out leukaemia urgently”) without explaining the isolated pattern, or dismisses it (“it’s nothing, we’ll repeat in a month”); no film; no red-flag screen; watchful waiting despite a count of 38 with gum bleeding; no bleeding precautions or emergency advice.",
    "pass": "Recognises an isolated thrombocytopenia and likely ITP; arranges a film and repeat; screens B symptoms and bleeding; seeks prompt haematology advice; advises avoiding NSAIDs; gives a basic safety-net and acknowledges her fear.",
    "exc": "All of the above, plus: answers “is it cancer?” honestly in the first minute; explains why leukaemia is unlikely in words she can repeat; recognises the video can’t replace an examination and gets her seen today; links the heavy periods to the low platelets; problem-solves bringing the baby; teach-back; owns the result by phoning her back personally."
   },
   "avoid": [
    {
     "dont": "“Don’t worry, it’s definitely not leukaemia.”",
     "instead": "“Everything we have points away from leukaemia — the rest of your blood is normal — and I’m doing the tests that will confirm that.”",
     "why": "Blanket reassurance before the film and examination is unsafe and she will sense it."
    },
    {
     "dont": "“We’ll just repeat it in a few weeks and see.”",
     "instead": "“With a count of 38 and your gums bleeding, I want the specialists’ advice today and a film done straight away.”",
     "why": "Watchful waiting alone is the wrong urgency for this count with mucosal bleeding."
    },
    {
     "dont": "“You’ve got idiopathic thrombocytopenic purpura, we’ll need to exclude pseudothrombocytopenia.”",
     "instead": "“Your immune system may be clearing platelets too fast. I also want to check the machine didn’t miscount because they clumped in the tube.”",
     "why": "Jargon increases fear and loses Relating to Others marks."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "New mother",
     "t": "Sleep deprivation with a young baby and a 2am online search amplify fear. Practical help — bringing the baby to appointments, who can support her — makes the plan workable."
    },
    {
     "h": "Health information online",
     "t": "She found worst-case content first. Offer reliable sources and a direct route back to the practice so she isn’t left searching alone."
    }
   ],
   "legal": [
    {
     "h": "Consent and information sharing",
     "t": "Seeking haematology advice and making a referral share her data for direct care; explain this and record her agreement. She can bring a companion to appointments."
    }
   ],
   "professional": [
    {
     "h": "Owning the result",
     "t": "GMC Good Medical Practice (2024): follow up results you request and act on them. A text asking her to book is not a plan — make sure the film, haematology advice and follow-up actually happen and are recorded."
    },
    {
     "h": "Limits of remote consulting",
     "t": "An examination for lymphadenopathy, hepatosplenomegaly and petechiae cannot be done on video. Recognise it and arrange a face-to-face assessment promptly."
    }
   ],
   "community": [
    {
     "h": "Patient support",
     "t": "The ITP Support Association provides patient information once a diagnosis is confirmed; health visitor and family support for the practicalities of appointments with a baby."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Other cytopenias or blasts on the film — suspected leukaemia; immediate referral",
     "Drenching night sweats, fevers, weight loss, bone pain, lymphadenopathy, hepatosplenomegaly, recurrent infections",
     "Significant bleeding (not stopping, blood in urine or stool, melaena), severe headache or new neurology — emergency",
     "Count below 20, or systemically unwell — same-day assessment"
    ],
    "psychosocial": [
     "Eight-month-old baby — sleep, support at home, childcare for appointments",
     "The 2am search and the fear it produced",
     "Heavy periods adding to tiredness"
    ],
    "ice": [
     "Idea: “Low platelets and bruising mean leukaemia”",
     "Concern: not being there for her baby",
     "Expectation: a straight answer today — is it cancer?"
    ]
   },
   "diagnosis": "An isolated thrombocytopenia (platelets 38, haemoglobin and white cells normal, no blasts flagged) in a well young woman — most likely immune thrombocytopenia. Leukaemia is unlikely but not excluded until the film and haematology review.",
   "diagnosisLay": "“Platelets are the tiny cells that help blood clot. Yours are low, but your red cells and infection-fighting cells are normal. When only platelets are low like this, the usual cause is the immune system clearing them too quickly — it’s treatable. Leukaemia nearly always upsets the other cells too.”",
   "management": {
    "reflectIce": "“You were up at 2am thinking about who would look after your little girl. I want to give you real answers quickly, which is why I’m acting today.”",
    "psychosocial": "Make the plan work with a baby: bring her to the appointment, one visit for examination and bloods, and a named person (you) phoning back so she isn’t left waiting and searching.",
    "sharedPlan": [
     "Blood film and repeat count today or tomorrow (citrate tube if clumping); pregnancy test",
     "Face-to-face examination today for nodes, liver, spleen and skin",
     "Haematology advice today because of count 38 with gum bleeding; further tests (such as HIV and hepatitis C) as they advise",
     "Avoid NSAIDs, aspirin and contact sport; paracetamol if needed; ask haematology about treating the heavy periods"
    ],
    "safetyNet": [
     "999 or A&E: bleeding that won’t stop, blood in urine or stool, black stools, vomiting blood, severe headache, confusion or weakness",
     "GP phones back with the film and haematology plan; follow up until a diagnosis is made"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Thrombocytopenia",
    "s": "Visual algorithm · isolated low platelets",
    "href": "algorithms/thrombocytopenia.html"
   },
   {
    "ic": "🗺️",
    "t": "Bruising",
    "s": "Visual algorithm · easy bruising in adults",
    "href": "algorithms/bruising.html"
   },
   {
    "ic": "📋",
    "t": "Haematological cancers",
    "s": "Case walkthrough · NICE NG12 (updated April 2026)",
    "href": "../cases/haematological-cancers.html"
   },
   {
    "ic": "💠",
    "t": "Haematological cancers",
    "s": "Protocol · when to refer",
    "href": "management/haematological-cancers.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you can interpret a result safely and tell a frightened patient the truth. Candidates fail by alarming her, by dismissing her, or by choosing the wrong urgency for a count of 38 with bleeding.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Treating any low platelet count as possible leukaemia and saying so first.",
     "why": "Ignores the pattern. Normal haemoglobin and white cells with no blasts makes ITP far more likely; leading with leukaemia confirms her 2am fear.",
     "fix": "Read the whole count aloud in plain words — “only the platelets are low” — and say what that pattern usually means."
    },
    {
     "dom": "tasks",
     "fail": "Planning a repeat FBC in a month and nothing else.",
     "why": "A count of 38 with gum bleeding needs prompt haematology advice and a film. Watchful waiting alone is unsafe.",
     "fix": "Film and repeat now, haematology advice today, and bleeding precautions while waiting."
    },
    {
     "dom": "tasks",
     "fail": "Doing the “examination” on video and declaring no lymphadenopathy or splenomegaly.",
     "why": "You can’t palpate nodes or a spleen through a camera. Examiners mark down claims that can’t be true.",
     "fix": "Look at the bruises on screen, then say you need to examine her in person today — and arrange it."
    },
    {
     "dom": "rto",
     "fail": "“It’s definitely nothing to worry about.”",
     "why": "False blanket reassurance before the film and examination. It is unsafe and patients recognise it.",
     "fix": "Honest probability: “Everything so far points away from leukaemia, and here is how we’ll confirm that.”"
    },
    {
     "dom": "rto",
     "fail": "Brushing past the baby and the 2am search to get to the questions.",
     "why": "The fear for her baby is the hidden agenda. Missing it costs Relating to Others marks and she won’t hear your explanation.",
     "fix": "“What did you read that frightened you most?” — then name the fear before you explain."
    },
    {
     "dom": "gs",
     "fail": "Safety-netting with “come back if you’re worried.”",
     "why": "Non-specific. With platelets of 38 she needs to know exactly which bleeding symptoms are an emergency.",
     "fix": "Name them: bleeding that won’t stop, blood in urine or stool, black stools, severe headache, confusion or weakness — 999 or A&E."
    },
    {
     "dom": "gs",
     "fail": "Forgetting the heavy periods that prompted the test.",
     "why": "Low platelets may be causing them, and they are a bleeding risk. Missing the link looks like a checklist history.",
     "fix": "Ask about flooding and clots, link it to the platelets, and ask haematology how best to treat it."
    }
   ]
  }
 },
 "neck-lump-2ww": {
  "stem": {
   "name": "Derek Mahoney",
   "age": "49-year-old man",
   "pmh": [
    "Current smoker — 25 pack-years",
    "Alcohol: recorded as heavy drinker"
   ],
   "meds": [
    "None recorded"
   ],
   "allergy": "No allergies recorded",
   "recent": "Rarely attends. Self-employed publican. Appointment booked by his wife: “lump in neck”.",
   "reason": "Lump on the right side of his neck for about 5 weeks."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · NICE NG209 (tobacco, 2021) · NICE PH24 (alcohol brief interventions, 2010) · NICE CG115 (alcohol dependence, 2011)",
   "summary": "A neck lump that has not settled after several weeks is unexplained. In a smoker and heavy drinker aged 49 with hoarseness, it goes on a head and neck suspected cancer pathway referral.",
   "points": [
    {
     "h": "Head and neck criteria",
     "t": "NICE NG12 (updated April 2026): consider a suspected cancer pathway referral (appointment within 2 weeks) for laryngeal cancer in people aged 45 and over with persistent unexplained hoarseness or an unexplained lump in the neck. Consider one for oral cancer with a persistent and unexplained lump in the neck. He meets both on two counts."
    },
    {
     "h": "Thyroid",
     "t": "NICE NG12 (updated April 2026): consider a suspected cancer pathway referral for thyroid cancer in people with an unexplained thyroid lump. Examination decides whether the lump is thyroid or nodal."
    },
    {
     "h": "Lymphoma",
     "t": "NICE NG12 (updated April 2026): consider a suspected cancer pathway referral for Hodgkin lymphoma in adults with unexplained lymphadenopathy, taking into account fever, night sweats, shortness of breath, pruritus, weight loss or alcohol-induced lymph node pain; for non-Hodgkin lymphoma, unexplained lymphadenopathy or splenomegaly, taking into account the same symptoms except alcohol-induced pain. An FBC is a reasonable clinical baseline, not an NICE NG12 (updated April 2026) requirement."
    },
    {
     "h": "Chest X-ray",
     "t": "NICE NG12 (updated April 2026): consider an urgent direct-access chest X-ray (within 2 weeks) to assess for lung cancer in people aged 40 and over with persistent cervical lymphadenopathy (or supraclavicular lymphadenopathy, persistent or recurrent chest infection, finger clubbing, chest signs consistent with lung cancer or thrombocytosis). At 49 with a persistent neck node he meets it whatever his smoking history; the 25 pack-years add to the concern."
    },
    {
     "h": "Risk factors",
     "t": "Smoking and alcohol multiply each other’s risk for head and neck cancer. Offer very brief advice and referral to stop-smoking support (NICE NG209) and an alcohol brief intervention using AUDIT (NICE PH24), without delaying the referral."
    },
    {
     "h": "Don’t stop alcohol abruptly",
     "t": "If he is alcohol-dependent, sudden cessation risks withdrawal seizures and delirium; planned withdrawal is needed (NICE CG115). Ask before advising him to stop."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Morning Derek, I’m Dr Hughes. What can I do for you?",
    "dom": "rto",
    "why": "Open start"
   },
   {
    "who": "pt",
    "text": "It’s probably nothing. I’ve got a lump on me neck, here on the right. Just a gland up from a cold, I reckon. The wife made me ring. I haven’t got time to be poked about — can you just tell me it’s nothing?"
   },
   {
    "who": "dr",
    "text": "I’m glad she did. I’ll be quick and straight with you. I want to ask a few questions, tell you what I think, and agree what we do. Fair?",
    "dom": "gs",
    "why": "Brief agenda suited to a reluctant attender"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "How long has it been there, and has it changed?",
    "dom": "tasks",
    "why": "Duration and growth"
   },
   {
    "who": "pt",
    "text": "Five weeks, maybe. It hasn’t gone down. If anything it’s a bit bigger. Doesn’t hurt though. Feels hard."
   },
   {
    "who": "dr",
    "text": "A gland from a cold usually settles within a couple of weeks, so one that’s been there five weeks and grown is one I need to look into. Has your voice changed at all — husky or hoarse?",
    "dom": "tasks",
    "why": "Rejects “just a gland”; elicits hoarseness"
   },
   {
    "who": "pt",
    "text": "Now you mention it, it’s been a bit rough for a few weeks. I put it down to shouting last orders. Throat’s been a bit uncomfortable too."
   },
   {
    "who": "dr",
    "text": "Any trouble swallowing, ulcers in your mouth that won’t heal, or earache on that side?",
    "dom": "tasks",
    "why": "Head and neck red flags"
   },
   {
    "who": "pt",
    "text": "Not really. Just the throat feeling a bit raw."
   },
   {
    "who": "dr",
    "text": "Have you had night sweats, fevers, itching, lost weight without trying, or any pain in the lump after a drink?",
    "dom": "tasks",
    "why": "Lymphoma features including alcohol-induced node pain"
   },
   {
    "who": "pt",
    "text": "Not that I’ve noticed."
   },
   {
    "who": "dr",
    "text": "Your notes say you smoke. How much now? And how much do you drink in a typical week — honestly, I’m not here to judge.",
    "dom": "tasks",
    "why": "Quantifies the key risk factors non-judgementally"
   },
   {
    "who": "pt",
    "text": "About twenty a day, since I was a lad. Drink — more than I should. Comes with the job."
   },
   {
    "who": "dr",
    "text": "Thank you for being straight. If you went a day without a drink, would you get shaky or sweaty?",
    "dom": "tasks",
    "why": "Screens for dependence before advising change"
   },
   {
    "who": "pt",
    "text": "Never tried, to be honest."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said you haven’t time to be poked about. What would it mean for you if this needed hospital tests?",
    "dom": "rto",
    "why": "Explores the avoidance and its reasons"
   },
   {
    "who": "pt",
    "text": "The pub doesn’t run itself. I’m self-employed — no work, no money. And I don’t do doctors. Never have."
   },
   {
    "who": "dr",
    "text": "That’s a real pressure. And your wife pushing you to ring — what do you think she’s worried about?",
    "dom": "rto",
    "why": "Uses the spouse’s push to surface the unspoken fear"
   },
   {
    "who": "pt",
    "text": "(Pause.) Same as me, probably. Cancer. With the smoking. I’d rather not know, if I’m honest."
   },
   {
    "who": "dr",
    "text": "I understand that. But not knowing doesn’t change what it is — it only changes how early we can act. And early is what matters most.",
    "dom": "rto",
    "why": "Acknowledges fear; declines to collude"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s my honest view. A lump that’s stayed five weeks, a hoarse voice for weeks, and twenty a day with a fair bit of drink — that’s a combination I can’t call a gland. It could be something in the voice box or throat, and it needs a specialist to check quickly.",
    "dom": "tasks",
    "why": "Names the high-risk picture honestly"
   },
   {
    "who": "pt",
    "text": "So it is cancer."
   },
   {
    "who": "dr",
    "text": "I don’t know that, and you don’t either. There are other causes — infections, the thyroid gland, harmless lumps. But the guidance for someone your age with these symptoms is an urgent referral to the ear, nose and throat team, seen within two weeks.",
    "dom": "tasks",
    "why": "Holds the differential; applies NICE NG12 (updated April 2026)"
   },
   {
    "who": "dr",
    "text": "I also need to examine you in person — your neck, your mouth and throat, your thyroid, and other glands. And I’d like a blood count and a chest X-ray, because a neck gland can sometimes come from the chest or the blood.",
    "dom": "tasks",
    "why": "Face-to-face exam; FBC as a clinical baseline and CXR per NICE NG12 (updated April 2026) (40 and over with persistent cervical lymphadenopathy)"
   },
   {
    "who": "pt",
    "text": "When?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Can you come in today? It’s ten minutes. I’ll send the referral today whatever I find, and the blood test and X-ray can be done this week. What cover can you get for the pub?",
    "dom": "rto",
    "why": "Plans around his business"
   },
   {
    "who": "pt",
    "text": "The wife can run it for a day or two. She’ll be glad I’m doing something."
   },
   {
    "who": "dr",
    "text": "On the smoking and the drink — this isn’t a lecture. Stopping smoking now genuinely helps whatever this turns out to be, and there’s free support that doubles your chances. Would you like me to refer you?",
    "dom": "tasks",
    "why": "Very brief advice and offer of support"
   },
   {
    "who": "pt",
    "text": "Maybe. Let me get this sorted first."
   },
   {
    "who": "dr",
    "text": "Fair enough — I’ll put the offer in writing. Please don’t suddenly stop drinking altogether without talking to us first, because that can make you unwell. We’ll look at cutting down safely together.",
    "dom": "gs",
    "why": "Safe alcohol advice; respects his pace"
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you haven’t heard from the hospital within a week, ring us. If you struggle to swallow, your breathing gets noisy or difficult, or you cough up blood, get seen that day — and for breathing trouble, call 999.",
    "dom": "gs",
    "why": "Specific red flags, including airway"
   },
   {
    "who": "dr",
    "text": "What will you tell your wife tonight?",
    "dom": "rto",
    "why": "Teach-back using his own frame"
   },
   {
    "who": "pt",
    "text": "That it’s not just a gland, I’m being checked quick by the throat people, bloods and an X-ray, and I’ll think about the fags."
   },
   {
    "who": "dr",
    "text": "Spot on. I’ll see you this afternoon and I’ll go through the results with you. You did the right thing ringing.",
    "dom": "rto",
    "why": "Ownership of follow-up; affirms"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; let him make his case for “just a gland” before narrowing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Self-employed publican, no sick pay, avoids doctors; smoking and alcohol quantified without judgement.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the wife’s push and the downplayed hoarse voice, and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a post-viral gland), concern (cancer, losing the business), expectation (to be told it is nothing).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Face-to-face exam of neck, mouth, oropharynx, thyroid and other node sites; FBC; chest X-ray.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Head and neck cancer, lymphoma, thyroid, reactive node, benign lumps; asked about B symptoms and alcohol-induced node pain.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about dysphagia, mouth ulcers, earache and weight loss; gave airway red flags.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Persistent unexplained neck lump with hoarseness at 49 meeting NICE NG12 (updated April 2026) head and neck criteria.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Head and neck suspected cancer pathway referral today, exam, FBC and CXR, planned around the pub.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Very brief advice on smoking with an offer of support; alcohol brief intervention; screened for dependence and warned against abrupt stopping.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Chase if no date in a week; same-day and 999 symptoms; GP reviews results with him.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Derek Mahoney",
    "age": "49-year-old man",
    "pmh": [
     "Current smoker — 25 pack-years",
     "Alcohol: recorded as heavy drinker"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "No allergies recorded",
    "recent": "Rarely attends. Self-employed publican. Appointment booked by his wife: “lump in neck”.",
    "reason": "Lump on the right side of his neck for about 5 weeks."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & listen",
     "d": "He wants a quick “it’s nothing”. Keep the agenda short and business-like."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Duration, growth, hardness, hoarseness, swallowing, mouth ulcers, earache, B symptoms, smoking, alcohol and dependence."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "Use the wife’s push to surface the fear of cancer and of losing the pub."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Name the high-risk combination, refer on the head and neck pathway, exam in person today, FBC and CXR, offer smoking and alcohol support."
    },
    {
     "t": "10–12",
     "h": "Safety-net & close",
     "d": "Chase if no date, airway and swallowing red flags, teach-back, results reviewed."
    }
   ],
   "wordPics": {
    "fail": "Accepts “a gland from a cold”, offers antibiotics or review in a month; never asks about the voice; lectures on smoking and drinking; no referral.",
    "pass": "Recognises a persistent unexplained neck lump, finds the hoarseness, refers on the NICE NG12 (updated April 2026) head and neck pathway, arranges an in-person exam and gives a safety-net.",
    "exc": "All of that, plus: surfaces the fear through the wife’s push; adds FBC and CXR with reasons; offers smoking and alcohol support without a lecture and checks dependence; plans around the pub; teach-back and owned follow-up."
   },
   "avoid": [
    {
     "dont": "“Let’s give it another few weeks and see if it goes down.”",
     "instead": "“A gland from a cold settles in a couple of weeks. Five weeks and growing needs a specialist to look.”",
     "why": "Delaying a persistent unexplained neck lump in a high-risk man is the core Tasks fail."
    },
    {
     "dont": "“You really need to stop smoking and drinking right now.”",
     "instead": "“Stopping smoking helps whatever this turns out to be — want me to set up support? And don’t stop drinking suddenly without talking to us.”",
     "why": "A lecture loses him; abrupt alcohol withdrawal can be dangerous."
    },
    {
     "dont": "“I’m worried this is throat cancer.”",
     "instead": "“This combination needs checking quickly to rule out a problem in the voice box or throat.”",
     "why": "Honest without delivering a diagnosis you do not have."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Self-employment",
     "t": "Self-employed people are not entitled to Statutory Sick Pay. If investigations or treatment stop him working, he may be able to claim New Style Employment and Support Allowance or Universal Credit; Citizens Advice can help."
    },
    {
     "h": "Drinking culture at work",
     "t": "Running a pub normalises heavy drinking and makes cutting down harder. Acknowledge this rather than moralise."
    }
   ],
   "legal": [
    {
     "h": "Capacity and refusal",
     "t": "If he declined referral, he is entitled to, provided he has capacity. Explain the risks clearly, record it, and keep the offer open."
    }
   ],
   "professional": [
    {
     "h": "Not colluding",
     "t": "GMC Good medical practice (2024): be honest and give patients the information they need. Reassuring him to keep him happy would be unsafe."
    },
    {
     "h": "Referral tracking",
     "t": "Track suspected cancer referrals and pending FBC and CXR results so none are lost, especially in a patient likely to disengage."
    }
   ],
   "community": [
    {
     "h": "Support services",
     "t": "Local NHS stop-smoking service; community alcohol services; Macmillan Cancer Support if a diagnosis is made."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Neck lump persisting beyond a few weeks, hard and enlarging",
     "Persistent hoarseness at 45 or over",
     "Dysphagia, stridor, haemoptysis, weight loss, night sweats"
    ],
    "psychosocial": [
     "Self-employed publican — no sick pay, fears for the business",
     "Smoking 20 a day and heavy drinking; screen for dependence",
     "Avoids doctors; wife prompted the call"
    ],
    "ice": [
     "Idea: “Just a gland up from a cold”",
     "Concern: cancer, and the pub going under",
     "Expectation: to be told it is nothing without being examined"
    ]
   },
   "diagnosis": "Persistent unexplained right neck lump with several weeks of hoarseness in a 49-year-old smoker and heavy drinker: meets NICE NG12 (updated April 2026) criteria for a head and neck suspected cancer pathway referral. Differential includes lymphoma, thyroid, reactive and benign causes.",
   "diagnosisLay": "“A gland from a cold goes down in a couple of weeks. Yours hasn’t, and with the hoarse voice and the smoking, I need a throat specialist to check it quickly. It might be something simple, but we need to know.”",
   "management": {
    "reflectIce": "“You said you’d rather not know. I get that. But knowing early is what gives you the most options — and it’s what your wife was hoping for too.”",
    "psychosocial": "Plan cover for the pub; offer smoking and alcohol support at his pace; signpost benefits advice if work stops.",
    "sharedPlan": [
     "Head and neck suspected cancer pathway referral today",
     "Face-to-face exam of neck, mouth, throat and thyroid today",
     "FBC and chest X-ray this week",
     "Very brief advice on smoking; alcohol brief intervention; no abrupt stopping"
    ],
    "safetyNet": [
     "Breathing difficulty or noisy breathing — 999",
     "Trouble swallowing or coughing blood — same-day review",
     "Ring if no appointment within a week; GP reviews results"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Neck lump pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026)",
    "href": "algorithms/neck-lump.html"
   },
   {
    "ic": "🗺️",
    "t": "Hoarseness pathway",
    "s": "Visual algorithm · laryngeal criteria",
    "href": "algorithms/hoarseness.html"
   },
   {
    "ic": "🗺️",
    "t": "Lymphadenopathy pathway",
    "s": "Visual algorithm · lymphoma features",
    "href": "algorithms/lymphadenopathy.html"
   },
   {
    "ic": "💠",
    "t": "Smoking cessation",
    "s": "Protocol · very brief advice",
    "href": "management/smoking-cessation.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by accepting the patient’s explanation. The lump, the voice and the risk factors together are the test; the reluctant man is the communication challenge.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting “a gland from a cold” and reviewing in a few weeks, or giving antibiotics.",
     "why": "NICE NG12 (updated April 2026): an unexplained lump in the neck at 45 or over means considering a laryngeal suspected cancer pathway referral (and a persistent unexplained neck lump at any age, one for oral cancer). A persistent lump is not reactive by default.",
     "fix": "State the time course — a reactive gland settles in weeks — and refer."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about the voice, swallowing or mouth, so the hoarseness is missed.",
     "why": "He will not volunteer it. Persistent hoarseness at 45 or over is itself an NICE NG12 (updated April 2026) criterion.",
     "fix": "Ask directly about voice, swallowing, ulcers and earache."
    },
    {
     "dom": "tasks",
     "fail": "Referring but forgetting the FBC and chest X-ray.",
     "why": "Neck nodes can reflect lymphoma or lung disease; NICE NG12 (updated April 2026) advises considering an urgent CXR at 40 or over with persistent cervical lymphadenopathy.",
     "fix": "Add FBC and CXR, and explain why in plain words."
    },
    {
     "dom": "rto",
     "fail": "A lecture on smoking and alcohol that makes him defensive.",
     "why": "Judgemental delivery loses the patient and Relating marks.",
     "fix": "Very brief advice, an offer of support, and respect for his timing."
    },
    {
     "dom": "rto",
     "fail": "Missing the fear behind “no time” and “the wife made me”.",
     "why": "Avoidance is the hidden agenda; unaddressed, he may not attend.",
     "fix": "“What do you think she’s worried about?” — then answer that fear honestly."
    },
    {
     "dom": "gs",
     "fail": "Advising him to stop drinking immediately.",
     "why": "If he is dependent, abrupt stopping risks withdrawal seizures (NICE CG115).",
     "fix": "Screen for dependence first; plan any reduction safely."
    }
   ]
  }
 },
 "neonatal-sticky-eye": {
  "stem": {
   "name": "Kai (baby) — mother calling",
   "age": "12-day-old boy",
   "pmh": [
    "Newborn — no problems recorded on the practice record",
    "Birth and newborn check details not yet on the GP record"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Newly registered baby. Telephone call booked by his mother via reception: “sticky eye, is it a blocked tear duct?”",
   "reason": "Mother requesting advice on a gunky, swollen eye in her 12-day-old son."
  },
  "knowledge": {
   "guideline": "BASHH gonorrhoea 2025 · BASHH chlamydia 2026 · College of Optometrists Clinical Management Guidelines (ophthalmia neonatorum) · NICE NG143 · NICE NG254",
   "summary": "A sticky eye in the first 28 days is ophthalmia neonatorum until triaged otherwise. Copious pus with lid swelling needs same-day specialist assessment, swabs for gonococcus and chlamydia, and systemic treatment — not more bathing.",
   "points": [
    {
     "h": "Blocked duct versus infection",
     "t": "A blocked nasolacrimal duct gives a watery eye with mild stickiness and a white, quiet eye; most settle in the first year with cleaning and gentle massage over the tear sac. Heavy yellow-green discharge, lid swelling or a red eye in a baby under 28 days points to conjunctivitis — ophthalmia neonatorum."
    },
    {
     "h": "Gonococcal infection is an eye emergency",
     "t": "Hyperacute, profuse pus with tense lid swelling suggests Neisseria gonorrhoeae, which can ulcerate and perforate the cornea within days. Same-day ophthalmology or paediatric assessment; systemic treatment is given by the specialist team, dose per BNFC. BASHH gonorrhoea 2025 advises systemic plus topical treatment for eye infection."
    },
    {
     "h": "Chlamydia is now the commonest cause",
     "t": "The College of Optometrists guidance notes chlamydia has overtaken gonorrhoea as the commonest cause of ophthalmia neonatorum. It is usually less acute, but needs systemic (not topical-only) antibiotics per BNFC, because the baby can also develop chlamydial pneumonitis."
    },
    {
     "h": "Swab before treatment",
     "t": "Conjunctival swabs for bacterial culture (gonococcus needs culture for sensitivities) and a chlamydia NAAT swab, ideally before antibiotics. The receiving team usually takes these; a GP should not start topical drops alone and wait."
    },
    {
     "h": "The mother is a patient too",
     "t": "A gonococcal or chlamydial result means the mother (and any sexual partner) needs testing and treatment through sexual health services — BASHH chlamydia 2026 and gonorrhoea 2025 set partner notification. Raise it without blame; her results are confidential to her."
    },
    {
     "h": "The unwell neonate",
     "t": "Any baby under 3 months with a temperature of 38°C or higher is high risk (NICE NG143); poor feeding, floppiness or mottling should prompt sepsis assessment under NICE NG254. Ophthalmia neonatorum stopped being a statutorily notifiable disease in England in April 2010 (Health Protection (Notification) Regulations 2010)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, it’s Dr Lee from the surgery, returning your call about Kai. Before anything else — is Kai with you, and is he feeding and settled right now?",
    "dom": "gs",
    "why": "Confirms identity and checks the baby is safe before discussing the eye"
   },
   {
    "who": "pt",
    "text": "Yes, he’s here, he fed about an hour ago. It’s just this eye — there’s yellowy stuff and it’s a bit swollen. My mum says it’s just a blocked tear duct."
   },
   {
    "who": "dr",
    "text": "Thank you. Tell me about it in your own words — what have you noticed, and what made you ring today?",
    "dom": "rto",
    "why": "Open question to hear her story before narrowing"
   },
   {
    "who": "pt",
    "text": "It keeps getting gunky. I clean it with cooled boiled water like mum said, and ten minutes later it’s full of yellow stuff again. I don’t want to overreact over a sticky eye."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "That’s really useful. You said it fills up again within minutes — can you describe the discharge? Is it watery, or thick and yellow or green?",
    "dom": "tasks",
    "why": "Characterises discharge — the key discriminator between a blocked duct and infection"
   },
   {
    "who": "pt",
    "text": "Thick and yellow. There’s loads of it. His lashes are stuck together in the morning."
   },
   {
    "who": "dr",
    "text": "And the swelling — are the eyelids puffy, and is the white of the eye red, if you can see it?",
    "dom": "tasks",
    "why": "Asks about lid swelling and redness — the red flags for ophthalmia neonatorum"
   },
   {
    "who": "pt",
    "text": "The lids are quite puffy, it’s hard to open. What I can see looks a bit pink."
   },
   {
    "who": "dr",
    "text": "When did you first notice it, and has it changed since?",
    "dom": "tasks",
    "why": "Establishes onset and tempo — hyperacute change suggests gonococcal infection"
   },
   {
    "who": "pt",
    "text": "It’s been building up. It’s definitely worse today than yesterday."
   },
   {
    "who": "dr",
    "text": "Is it one eye or both? And in himself — any temperature, is he feeding as normal, is he as alert and wriggly as usual?",
    "dom": "tasks",
    "why": "Screens for systemic illness in a neonate"
   },
   {
    "who": "pt",
    "text": "Just the one eye. No temperature that I’ve noticed, and he’s feeding fine. He’s himself apart from the eye."
   },
   {
    "who": "dr",
    "text": "Good, that’s reassuring. Any cough, fast breathing or noisy breathing?",
    "dom": "tasks",
    "why": "Screens for chlamydial pneumonitis"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "How are you doing yourself, twelve days in? Who have you got around you at the moment?",
    "dom": "rto",
    "why": "Explores context and support for a new mother"
   },
   {
    "who": "pt",
    "text": "Tired, but okay. Mum’s been helping loads — she had four of us, so she knows what she’s talking about."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "It sounds like she’s been a real help. You said you don’t want to overreact — but you still rang. What was it that made you pick up the phone?",
    "dom": "rto",
    "why": "Explores the niggling worry behind the minimising"
   },
   {
    "who": "pt",
    "text": "Honestly? It just seems like a lot of gunk. Mum says bathe it and it’ll go. I suppose I wanted someone to say that’s fine."
   },
   {
    "who": "dr",
    "text": "That’s a very good instinct. What were you hoping I’d say today?",
    "dom": "rto",
    "why": "Elicits expectations"
   },
   {
    "who": "pt",
    "text": "That I can just keep cleaning it."
   },
   {
    "phase": "Explanation",
    "clock": "6–9 min",
    "who": "dr",
    "text": "Your mum is right that most sticky eyes in newborns are a blocked tear duct — she’s not wrong in general. But what you’re describing — thick yellow pus that refills in minutes, and puffy lids that are hard to open — is more than a blocked duct. In a baby under four weeks, that picture can be an eye infection that needs checking and treating today.",
    "dom": "tasks",
    "why": "Validates family wisdom for the common case, then names why this picture differs"
   },
   {
    "who": "pt",
    "text": "Today? Is it serious?"
   },
   {
    "who": "dr",
    "text": "It may well be a straightforward infection. But a small number of these are caused by germs that can damage the front of the eye quickly if they aren’t treated, so we never watch and wait with this kind of discharge in a new baby. I’d rather he’s seen today and it turns out mild, than wait.",
    "dom": "tasks",
    "why": "Explains the sight-threatening possibility (gonococcal) proportionately"
   },
   {
    "who": "pt",
    "text": "Okay. Where does he need to go?"
   },
   {
    "who": "dr",
    "text": "I’m going to phone the on-call eye team at the hospital now and arrange for him to be seen this afternoon. They’ll examine his eye properly, take small swabs to find out exactly which germ it is, and start the right treatment — often that’s medicine by mouth or injection, not just drops.",
    "dom": "tasks",
    "why": "Same-day specialist assessment, swabs before treatment, systemic therapy"
   },
   {
    "who": "pt",
    "text": "Should I still bathe it before we go?"
   },
   {
    "who": "dr",
    "text": "Yes, gently wipe away the discharge from the inner corner outwards with cooled boiled water and a fresh piece of cotton wool each time, and wash your hands after. Don’t put any drops in before he’s seen — the swabs work best first.",
    "dom": "tasks",
    "why": "Practical interim advice and hand hygiene"
   },
   {
    "phase": "The sensitive conversation",
    "clock": "9–10 min",
    "who": "dr",
    "text": "There’s one more thing I want to mention gently, and it’s nothing to feel bad about. Some of these newborn eye infections are caused by very common germs that can pass to a baby during birth, often without the mum ever having had symptoms. If the swab shows one of those, we’d offer you a simple check too — confidentially, and without any blame.",
    "dom": "rto",
    "why": "Raises the maternal STI implication sensitively and without blame"
   },
   {
    "who": "pt",
    "text": "Oh. I didn’t have any symptoms. Does that mean I’ve got something?"
   },
   {
    "who": "dr",
    "text": "Not necessarily — we won’t know until the swab result. Lots of people carry these germs with no symptoms at all. If it is one of them, it’s easily treated, and the sexual health clinic can also help any partner get checked. That conversation is yours and it stays private.",
    "dom": "rto",
    "why": "Reassures, normalises and addresses confidentiality"
   },
   {
    "who": "pt",
    "text": "Okay. That’s a bit of a shock, but I’d rather know."
   },
   {
    "phase": "Safety-net & close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "Until he’s seen: if he gets a temperature of 38 or more, stops feeding, becomes floppy or hard to wake, has a rash, or the eye looks cloudy or the swelling spreads, call 999 or go straight to A&E — don’t wait for the appointment.",
    "dom": "gs",
    "why": "Specific neonatal safety-net including fever in under-3-month-olds and corneal clouding"
   },
   {
    "who": "pt",
    "text": "Right. Temperature, feeding, floppy, cloudy eye."
   },
   {
    "who": "dr",
    "text": "Exactly. When your mum asks what the doctor said, what will you tell her?",
    "dom": "gs",
    "why": "Teach-back, including how to explain to her mother"
   },
   {
    "who": "pt",
    "text": "That she was right it’s usually a blocked duct, but this one’s got too much pus, so it needs checking today."
   },
   {
    "who": "dr",
    "text": "Perfect — that’s exactly it. I’ll ring the eye team now and call you back within the hour with a time. I’ll follow up the swab results, and let your health visitor know. You didn’t overreact — you noticed it was more than usual, and you were right.",
    "dom": "rto",
    "why": "Commits to call back, follows up results and affirms her instinct"
   },
   {
    "who": "pt",
    "text": "Thank you. I feel better that someone’s actually looking at it."
   },
   {
    "who": "dr",
    "text": "Is there anything else you wanted to ask before I make that call?",
    "dom": "rto",
    "why": "Shares the floor before closing"
   },
   {
    "who": "pt",
    "text": "No, that’s everything. Thank you."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Opened by checking Kai was safe and feeding, then let his mother describe the eye in her own words before narrowing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Asked how she was coping twelve days postpartum, who was helping, and the role of her mother’s advice.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “a lot of gunk” and “I don’t want to overreact” as her own worry, and followed the lid-swelling cue.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Her idea (blocked duct, per her mother); concern (a lot of discharge, and later the STI implication); expectation (permission to keep bathing).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Recognised a neonatal eye cannot be examined by phone; arranged same-day face-to-face assessment with conjunctival swabs for culture and chlamydia NAAT before treatment.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Blocked nasolacrimal duct versus bacterial, chlamydial or gonococcal ophthalmia neonatorum; screened for systemic illness and pneumonitis.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Treated hyperacute pus with lid swelling as possible gonococcal infection needing same-day ophthalmology; screened for fever, poor feeding and floppiness.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated clearly this is likely ophthalmia neonatorum, not a simple blocked duct, and explained why in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day eye or paediatric assessment arranged by the GP, swabs first, systemic treatment by the specialist team, interim cleaning and hygiene advice.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Raised the maternal and partner sexual-health follow-up sensitively and confidentially; informed the health visitor.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named 999/A&E triggers (fever 38°C or more, poor feeding, floppiness, rash, cloudy eye), a promised call-back time and follow-up of swab results.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Children & young people",
    "Urgent & unscheduled care",
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Kai (mother on the phone)",
    "age": "12 days · male",
    "pmh": [
     "Newborn — nothing recorded yet",
     "Newborn check not yet on the GP record"
    ],
    "meds": [
     "None"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Reception note: “Mum says baby’s eye is gunky and a bit swollen — grandma says blocked tear duct. Wants advice.” Telephone slot.",
    "reason": "Telephone advice about a sticky eye. “I don’t want to overreact.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Safety first, then listen",
     "d": "Confirm Kai is with her, feeding and responsive. Then an open question — let her describe the discharge before you narrow."
    },
    {
     "t": "1–5",
     "h": "Triage the eye",
     "d": "Discharge (watery or thick pus, how fast it refills), lid swelling, redness, one or both eyes, onset and tempo. Systemic screen: fever, feeding, alertness, breathing."
    },
    {
     "t": "5–6",
     "h": "ICE and the family dynamic",
     "d": "Why she rang despite “don’t want to overreact”. Name her mother’s help respectfully before disagreeing with the conclusion."
    },
    {
     "t": "6–10",
     "h": "Explain and act",
     "d": "Validate the common case, then why THIS picture needs same-day assessment. Arrange it yourself. Swabs before treatment. Raise the maternal-infection angle gently."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999/A&E triggers in plain words, teach-back (“what will you tell your mum?”), call-back time, results follow-up, health visitor informed."
    }
   ],
   "wordPics": {
    "fail": "Accepts “blocked tear duct” and advises bathing and massage; never asks about the amount of pus or lid swelling; no same-day assessment; or prescribes chloramphenicol drops by phone and closes; no fever or feeding screen; no safety-net.",
    "pass": "Recognises copious pus with lid swelling in a 12-day-old as possible ophthalmia neonatorum; arranges same-day assessment with swabs; screens for systemic illness; gives a clear safety-net.",
    "exc": "All of the above, plus: validates the grandmother’s wisdom before explaining why this differs; arranges the referral personally with a call-back time; explains swabs before treatment and systemic therapy; raises the maternal sexual-health implication gently, confidentially and without blame; teach-back framed around what she’ll tell her mother."
   },
   "avoid": [
    {
     "dont": "“Your mum’s right, it’s a blocked tear duct — keep bathing it and massage the corner.”",
     "instead": "“Your mum’s right that it usually is — but the amount of pus and the swelling are why I want him seen today.”",
     "why": "Colluding with the family explanation misses a possibly sight-threatening infection."
    },
    {
     "dont": "“I’ll send some chloramphenicol drops to the chemist.”",
     "instead": "“He needs examining and swabbing today, and the treatment for this kind of infection is usually by mouth or injection.”",
     "why": "Topical-only treatment without swabs can mask gonococcal or chlamydial infection."
    },
    {
     "dont": "“This could be a sexually transmitted infection from you.”",
     "instead": "“Some of these infections come from very common germs that can pass on at birth, often without symptoms — if so, we’d offer you a quick, private check.”",
     "why": "Blunt or blaming language damages trust and can stop her engaging with her own care."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "New mother and family advice",
     "t": "Twelve days postpartum, tired, and supported by an experienced grandmother whose advice she trusts. Respecting that relationship makes it easier for her to accept a different plan."
    },
    {
     "h": "Getting to hospital",
     "t": "A same-day appointment with a newborn is a practical challenge — check she can get there (transport, car seat, someone to go with her) when you arrange it."
    }
   ],
   "legal": [
    {
     "h": "Parental responsibility and consent",
     "t": "His mother has parental responsibility and can consent to examination, swabs and treatment for Kai."
    },
    {
     "h": "Notification status",
     "t": "Ophthalmia neonatorum was removed from the list of statutorily notifiable diseases in England in April 2010 (Health Protection (Notification) Regulations 2010). Laboratory reporting of gonorrhoea and chlamydia still happens through surveillance."
    }
   ],
   "professional": [
    {
     "h": "Remote consultation limits",
     "t": "A neonatal eye with pus and swelling cannot be assessed safely by phone. GMC Good Medical Practice (2024) and GMC Good practice in prescribing and managing medicines and devices (2021): arrange face-to-face assessment rather than prescribing blind."
    },
    {
     "h": "Confidentiality",
     "t": "Any result showing a sexually transmitted infection in the mother is her confidential information (GMC Confidentiality, 2017). Partner notification is done through sexual health services with her consent."
    }
   ],
   "community": [
    {
     "h": "Health visitor and sexual health services",
     "t": "The health visitor’s new-birth visit falls around 10–14 days — let them know. Local sexual health clinics offer confidential testing, treatment and partner notification. NHS 111 out of hours."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Copious thick pus refilling within minutes, with lid swelling or redness, in a baby under 28 days",
     "Hyperacute onset or rapid worsening — possible gonococcal infection, sight-threatening",
     "Systemic signs: fever 38°C or more under 3 months, poor feeding, floppiness, rash (NICE NG143, NG254)",
     "Cough or fast breathing — possible chlamydial pneumonitis"
    ],
    "psychosocial": [
     "Twelve days postpartum, tired, reliant on her mother’s experience",
     "Minimising (“don’t want to overreact”) while quietly worried",
     "Possible shock or shame if a maternal infection is raised"
    ],
    "ice": [
     "Idea: “It’s a blocked tear duct — Mum says bathe it.”",
     "Concern: “It seems like a lot of gunk” — and later, whether she has an infection",
     "Expectation: permission to keep cleaning it at home"
    ]
   },
   "diagnosis": "“This is more than a blocked tear duct. Thick pus that keeps coming back, with swollen lids, in a baby under four weeks, is an eye infection until proven otherwise — and a few types can harm the eye quickly, so he needs checking today.”",
   "diagnosisLay": "“A blocked tear duct is like a blocked drain — the eye waters and gets a bit crusty. What Kai has is more like an infection in the eye itself: lots of pus and swelling. That needs a proper look and the right medicine, not just cleaning.”",
   "management": {
    "reflectIce": "“Your mum is right about most sticky eyes, and you were right to ring — the amount of discharge is exactly what made me want him seen.”",
    "psychosocial": "Respect the grandmother’s experience, check the practicalities of getting to hospital today, and raise any maternal infection gently, privately and without blame.",
    "sharedPlan": [
     "GP arranges same-day ophthalmology or paediatric assessment and calls back with a time",
     "Swabs for culture and chlamydia NAAT before treatment; systemic treatment by the specialist team, dose per BNFC",
     "If positive: confidential sexual health testing and treatment for mother and any partner"
    ],
    "safetyNet": [
     "999/A&E: fever 38°C or more, poor feeding, floppiness, rash, cloudy eye or spreading swelling",
     "GP follows up swab results and informs the health visitor"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Watery eye pathway",
    "s": "Visual algorithm · blocked duct versus infection",
    "href": "algorithms/watery-eye.html"
   },
   {
    "ic": "🗺️",
    "t": "Red eye pathway",
    "s": "Visual algorithm · sight-threatening causes",
    "href": "algorithms/red-eye.html"
   },
   {
    "ic": "🗺️",
    "t": "Fever in children",
    "s": "Visual algorithm · NICE NG143",
    "href": "algorithms/fever-children.html"
   },
   {
    "ic": "💠",
    "t": "Chlamydia protocol",
    "s": "BASHH 2026 · partner notification",
    "href": "management/chlamydia.html"
   },
   {
    "ic": "💠",
    "t": "Gonorrhoea protocol",
    "s": "BASHH 2025 · eye infection",
    "href": "management/gonorrhoea.html"
   }
  ],
  "pitfalls": {
   "intro": "This telephone station is failed by accepting the offered diagnosis. The mother gives you the blocked-duct label; the marks are for triaging the eye, acting the same day, and handling the maternal-infection angle kindly.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Agreeing it is a blocked tear duct and advising bathing and massage, without asking how much pus there is or whether the lids are swollen.",
     "why": "“Does not gather sufficient information to identify serious disease.” Pus with lid swelling in a neonate is possible ophthalmia neonatorum, and gonococcal infection threatens sight.",
     "fix": "Two questions change everything: “Is it watery, or thick yellow pus?” and “Are the lids swollen?” Then act on the answers."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing chloramphenicol drops over the phone and closing.",
     "why": "Topical-only treatment without swabs misses gonococcal and chlamydial infection, which need systemic treatment. A newborn eye with pus cannot be assessed remotely.",
     "fix": "“He needs to be seen and swabbed today — the treatment is often by mouth or injection, not just drops.” Arrange it yourself."
    },
    {
     "dom": "rto",
     "fail": "Dismissing the grandmother’s advice (“your mum is wrong”) — or deferring to it.",
     "why": "Belittling family advice loses the mother; deferring to it is unsafe. Both show poor handling of the family dynamic.",
     "fix": "“Your mum’s right that most sticky eyes are a blocked duct. What’s different about Kai is the amount of pus and the swelling.”"
    },
    {
     "dom": "rto",
     "fail": "Announcing “this could be an STI you passed on” — or leaving the maternal implication out entirely.",
     "why": "Blame causes shame and disengagement; silence leaves the mother untreated and risks reinfection.",
     "fix": "Normalise and keep it conditional: “If the swab shows one of these common germs, we’d offer you a private check too — no blame at all.”"
    },
    {
     "dom": "gs",
     "fail": "Vague safety-net: “ring back if it gets worse.”",
     "why": "Non-specific safety-netting is a standard failing statement, and a febrile neonate is a different level of urgency.",
     "fix": "Name them: temperature of 38 or more, not feeding, floppy, rash, cloudy eye — 999 or A&E."
    },
    {
     "dom": "gs",
     "fail": "Telling her to “go to eye casualty” with no arrangement, time or follow-up.",
     "why": "An unarranged referral from a telephone call often fails. “The management plan was insufficiently developed.”",
     "fix": "Ring the on-call team yourself, give a call-back time, and say who will follow up the swab results."
    }
   ]
  }
 },
 "night-sweats-young": {
  "stem": {
   "name": "Tomas Vidal",
   "age": "26-year-old man",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "No consultations in the last two years. No blood tests on file.",
   "reason": "Video appointment: “night sweats, can’t sleep”."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · NICE NG60 HIV testing (2016) · NICE NG33 Tuberculosis (2016) · NICE NG145 Thyroid disease (2019)",
   "summary": "Drenching night sweats for weeks need a structured work-up, not a sleep aid. With weight loss, itch and a lump, examine the nodes and abdomen, send urgent bloods, and refer on the suspected cancer pathway for lymphoma under NICE NG12 (updated April 2026), whose trigger is the unexplained lump, with the symptoms taken into account.",
   "points": [
    {
     "h": "Take drenching sweats seriously",
     "t": "Soaking nightclothes or sheets for weeks is a symptom to investigate. Ask about weight loss, fever, itch, lumps, cough, travel and TB contacts, HIV risk, alcohol and drugs, and thyroid symptoms. Stress or anxiety is a diagnosis of exclusion."
    },
    {
     "h": "Lymphoma — NICE NG12 (updated April 2026)",
     "t": "Consider a suspected cancer pathway referral for Hodgkin lymphoma in adults with unexplained lymphadenopathy; when deciding, take into account associated symptoms, particularly fever, night sweats, shortness of breath, pruritus, weight loss or alcohol-induced lymph node pain. For non-Hodgkin lymphoma, the trigger is unexplained lymphadenopathy or splenomegaly, with the same associated symptoms (except alcohol-induced pain)."
    },
    {
     "h": "Leukaemia overlap",
     "t": "NICE NG12 (updated April 2026): consider a very urgent FBC (within 48 hours) in adults with features that could suggest leukaemia, including persistent fatigue, unexplained fever, generalised lymphadenopathy and hepatosplenomegaly."
    },
    {
     "h": "Examine and investigate",
     "t": "Examine cervical, supraclavicular, axillary and inguinal nodes, liver and spleen. Bloods: FBC and film, ESR or CRP, U&E, LFTs, LDH, TFTs and an HIV test. Consider a chest X-ray (mediastinal nodes, TB)."
    },
    {
     "h": "Infection and thyroid",
     "t": "Lymphadenopathy with systemic symptoms is an HIV indicator condition — offer a test (NICE NG60). Cough, weight loss and sweats raise TB — sputum samples and chest X-ray per NICE NG33. Hyperthyroidism causes sweats and weight loss (NICE NG145)."
    },
    {
     "h": "Communicating a cancer referral",
     "t": "Explain why the referral is being made, that most people referred do not have cancer, what will happen and when; give written information and confirm how to reach the practice if the appointment does not arrive (NICE NG12 (updated April 2026) recommendations on information for people referred)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Tomas, I’m Dr Lee. What can I do for you today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "This is a bit embarrassing. I keep waking up drenched — soaking the sheets — most nights for over a month. It’s probably stress, work’s been mad, or maybe my room’s too warm. Could you give me something to help me sleep?"
   },
   {
    "who": "dr",
    "text": "It isn’t embarrassing at all, and I’m glad you came. Soaking the sheets most nights for over a month is something I want to understand properly before we talk about sleep. Can I ask you some questions first?",
    "dom": "gs",
    "why": "Takes the symptom seriously and sets the agenda without colluding"
   },
   {
    "who": "pt",
    "text": "Sure."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When you say drenched — do you need to change your clothes or sheets?",
    "dom": "tasks",
    "why": "Characterises true drenching sweats"
   },
   {
    "who": "pt",
    "text": "Yes, both, sometimes twice a night."
   },
   {
    "who": "dr",
    "text": "Have you lost any weight without trying?",
    "dom": "tasks",
    "why": "B-symptom screen: weight loss"
   },
   {
    "who": "pt",
    "text": "Yeah, actually. My clothes are looser. I thought it was the stress."
   },
   {
    "who": "dr",
    "text": "Any fevers or shivers, or itching of your skin?",
    "dom": "tasks",
    "why": "B-symptom screen: fever and pruritus"
   },
   {
    "who": "pt",
    "text": "I haven’t measured a temperature. But I’ve been really itchy, all over, for a few weeks."
   },
   {
    "who": "dr",
    "text": "Have you noticed any lumps or swellings anywhere — your neck, armpits or groin?",
    "dom": "tasks",
    "why": "Asks directly about lymphadenopathy"
   },
   {
    "who": "pt",
    "text": "…There is a lump in my neck. I didn’t really want to mention it."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me — that’s important. How long has it been there, is it painful, and does it hurt after alcohol?",
    "dom": "tasks",
    "why": "Characterises the node, including alcohol-induced pain"
   },
   {
    "who": "pt",
    "text": "A few weeks. It doesn’t hurt. I haven’t noticed anything with drinking."
   },
   {
    "who": "dr",
    "text": "Any cough, breathlessness, or chest pain? Any travel abroad or contact with anyone with TB?",
    "dom": "tasks",
    "why": "Screens chest symptoms and TB risk"
   },
   {
    "who": "pt",
    "text": "No cough. Not that I know of."
   },
   {
    "who": "dr",
    "text": "Any palpitations, tremor, or feeling hot all the time? And any medicines, recreational drugs or heavy drinking?",
    "dom": "tasks",
    "why": "Screens thyroid, drug and alcohol causes"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "As part of checking for causes of sweats, I offer everyone an HIV test — is that okay?",
    "dom": "tasks",
    "why": "Normalises HIV testing (NICE NG60)"
   },
   {
    "who": "pt",
    "text": "Yeah, fine. Test whatever you need."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "You said you didn’t want to mention the lump. What’s been going through your mind about it?",
    "dom": "rto",
    "why": "Surfaces the avoidance gently"
   },
   {
    "who": "pt",
    "text": "I googled it at three in the morning. Night sweats and a lump — it says cancer. I didn’t want it to be that, so I told myself it was stress."
   },
   {
    "who": "dr",
    "text": "That makes complete sense — it’s a frightening thing to read alone at night. What were you hoping for today?",
    "dom": "rto",
    "why": "Validates fear and elicits expectations"
   },
   {
    "who": "pt",
    "text": "Honestly, for you to say it’s nothing and give me sleeping tablets."
   },
   {
    "phase": "Explanation",
    "clock": "7–10 min",
    "who": "dr",
    "text": "I’m going to be straight with you, because I think part of you already knows this needs checking. Drenching sweats, weight loss, itching and a lump together are a combination I have to look into quickly. One possibility is a problem with the lymph glands, including lymphoma. I’m not saying that’s what it is — infections and other conditions can do this too — but it needs ruling out fast.",
    "dom": "tasks",
    "why": "Honest, proportionate naming of lymphoma"
   },
   {
    "who": "pt",
    "text": "Right. So it could be cancer."
   },
   {
    "who": "dr",
    "text": "It could be, and it could be something else. If it were lymphoma, it’s one of the more treatable cancers, and finding it early helps. I’d rather check quickly than guess.",
    "dom": "rto",
    "why": "Balances honesty with calm, accurate reassurance"
   },
   {
    "who": "pt",
    "text": "Okay. What happens now?"
   },
   {
    "who": "dr",
    "text": "I need to examine you in person — your glands and your tummy — so I’d like you to come in today. I’ll arrange blood tests: a blood count and film, inflammation markers, liver and kidney tests, a test called LDH, thyroid and HIV. Probably a chest X-ray too.",
    "dom": "tasks",
    "why": "Face-to-face examination and targeted urgent bloods"
   },
   {
    "who": "dr",
    "text": "Because of the lump with these symptoms, I’m going to refer you on the urgent suspected cancer pathway so a specialist sees you quickly, usually within two weeks. Most people referred this way don’t have cancer, but it’s the fastest route to an answer.",
    "dom": "tasks",
    "why": "Suspected cancer pathway referral per NICE NG12 (updated April 2026)"
   },
   {
    "who": "pt",
    "text": "And the sleeping tablets?"
   },
   {
    "who": "dr",
    "text": "I’d rather not add a sleeping tablet — it won’t fix the cause and might mask how you are. Cooler bedding and a towel by the bed for now, and let’s treat the reason.",
    "dom": "tasks",
    "why": "Declines a sleep aid in place of work-up and explains why"
   },
   {
    "phase": "Safety-net & close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "If you get high fevers, feel very unwell, get breathless, notice swelling in your face or neck, or new lumps, contact us the same day or 111. If you haven’t heard about the hospital appointment within a week, ring me.",
    "dom": "gs",
    "why": "Specific safety-net and referral tracking"
   },
   {
    "who": "pt",
    "text": "Okay. Within a week."
   },
   {
    "who": "dr",
    "text": "Can you tell me what we’ve agreed, so I know I’ve explained it well?",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Come in today to be examined, bloods and maybe an X-ray, urgent referral about the lump, and ring if I get worse or don’t hear."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. I’ll go through the results with you as soon as they’re back. You did the right thing coming, even if it started as a sleep question. Is there anyone you can talk to about this?",
    "dom": "rto",
    "why": "Acknowledges fear, commits to follow-up, checks support"
   },
   {
    "who": "pt",
    "text": "I’ll think about it. Thanks — I feel better knowing something’s happening."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; took drenching sweats seriously and deferred the sleep request until the history was taken.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work stress, alcohol and drugs, TB contacts and travel, HIV risk offered routinely, and who he can talk to.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Noticed “I didn’t really want to mention it” about the lump and explored it; picked up the 3 a.m. internet search.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (stress, warm room); concern (cancer, from his search); expectation (reassurance and sleeping tablets).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Same-day face-to-face examination of all node areas, liver and spleen; FBC and film, ESR or CRP, U&E, LFTs, LDH, TFTs, HIV; consider chest X-ray.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Lymphoma versus TB, HIV and other infection, hyperthyroidism, drugs and alcohol; anxiety only after exclusion.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about all B symptoms, itch, lumps and alcohol-induced node pain; screened chest symptoms.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Explained that the pattern needs lymphoma ruled out urgently, without over-committing to the diagnosis.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Suspected cancer pathway referral per NICE NG12 (updated April 2026), urgent bloods, no sleep aid in place of work-up.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "HIV and TB considered and tested; thyroid checked; fear and support addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named same-day triggers, a one-week check on the referral, and follow-up of results.",
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
    "name": "Tomas Vidal",
    "age": "26 years · male",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "NKDA",
    "recent": "No consultations or blood tests in the last two years.",
    "reason": "Video consultation. “Night sweats, can’t sleep.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and hold the sleep request",
     "d": "He asks for sleeping tablets. Acknowledge, then ask to understand the sweats first."
    },
    {
     "t": "1–5",
     "h": "Structured screen",
     "d": "True drenching? Weight loss, fever, itch, lumps (ask directly), alcohol-induced pain, chest symptoms, TB, HIV, thyroid, drugs."
    },
    {
     "t": "5–7",
     "h": "Surface the fear",
     "d": "“You didn’t want to mention the lump” — the internet search, cancer fear, what he hoped for."
    },
    {
     "t": "7–10",
     "h": "Honest explanation and action",
     "d": "Name lymphoma as one possibility, balanced. Same-day examination, urgent bloods, HIV, chest X-ray, NICE NG12 (updated April 2026) suspected cancer referral."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Same-day triggers, chase the referral in a week, teach-back, support."
    }
   ],
   "wordPics": {
    "fail": "Accepts stress, gives sleep hygiene or a hypnotic; never asks about weight loss or lumps; no examination, bloods or referral.",
    "pass": "Screens B symptoms and finds the lump; arranges examination and urgent bloods; refers on the suspected cancer pathway; safety-nets.",
    "exc": "All of the above, plus: surfaces the avoided lump and his fear gently; names lymphoma honestly and proportionately; includes HIV, TB and thyroid in the work-up; explains why no sleeping tablet; tells him what to do if the appointment doesn’t come; he leaves informed rather than frightened."
   },
   "avoid": [
    {
     "dont": "“It sounds like stress — try some sleep hygiene.”",
     "instead": "“Soaking the sheets for a month is something I want to look into properly first.”",
     "why": "Anchoring on stress misses a possible lymphoma."
    },
    {
     "dont": "“This could be cancer.” (then moving on)",
     "instead": "“One possibility is lymphoma — I’m not saying it is, but it needs checking quickly, and if it were, it’s one of the more treatable cancers.”",
     "why": "Blunt naming without context or support frightens without helping."
    },
    {
     "dont": "“I’ll give you something to help you sleep while we wait.”",
     "instead": "“A sleeping tablet won’t fix the cause — let’s find it.”",
     "why": "A hypnotic in place of assessment colludes with avoidance."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Fear and avoidance",
     "t": "He searched his symptoms at night, hid the lump and framed it as a sleep problem. Explore who he can talk to and check he can attend quickly."
    },
    {
     "h": "Work",
     "t": "Work has been “mad”. He may need time off for tests and appointments."
    }
   ],
   "legal": [
    {
     "h": "Fit notes",
     "t": "A fit note can cover time off for investigation or treatment if he is unfit for work; not needed for appointments alone."
    },
    {
     "h": "Equality Act 2010",
     "t": "If cancer is diagnosed, he is protected as disabled from the point of diagnosis, including the right to reasonable adjustments at work."
    }
   ],
   "professional": [
    {
     "h": "Referral tracking",
     "t": "The practice should have a system to check suspected cancer referrals are received and attended; tell him what to do if he hears nothing (GMC Good Medical Practice 2024)."
    },
    {
     "h": "Consent for HIV testing",
     "t": "Offer HIV testing as a routine part of the work-up, explaining why, with his agreement recorded (NICE NG60)."
    }
   ],
   "community": [
    {
     "h": "Information and support",
     "t": "Lymphoma Action and Macmillan provide information and support if lymphoma is confirmed; written information about the urgent referral."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Drenching night sweats with weight loss, itch and a lump — lymphoma until proven otherwise",
     "Unexplained lymphadenopathy or splenomegaly — NICE NG12 (updated April 2026) suspected cancer pathway",
     "Breathlessness, facial or neck swelling — possible mediastinal mass, same-day assessment",
     "Cough, weight loss, TB contacts or travel — TB work-up"
    ],
    "psychosocial": [
     "Busy job, blames stress",
     "Internet search at night, fear of cancer",
     "Avoidance: presents with a sleep request"
    ],
    "ice": [
     "Idea: stress or a warm bedroom",
     "Concern: “Night sweats and a lump — it says cancer.”",
     "Expectation: reassurance and sleeping tablets"
    ]
   },
   "diagnosis": "“Drenching sweats, weight loss, itch and a lump together need checking quickly. One possibility is lymphoma; infections and other conditions can do this too. We need to examine you, do blood tests, and get a specialist to look at the lump urgently.”",
   "diagnosisLay": "“Lymph glands are the body’s filter stations. When one swells and you also have sweats, weight loss and itch, we need to find out why — sometimes it’s an infection, sometimes it’s the glands themselves. The quickest way to know is to test and get it looked at.”",
   "management": {
    "reflectIce": "“You told yourself it was stress because the alternative was frightening. That’s very human — and coming in was the right thing.”",
    "psychosocial": "Acknowledge the fear, check support, explain every step and what to do if the appointment doesn’t arrive.",
    "sharedPlan": [
     "Same-day examination; FBC and film, ESR or CRP, U&E, LFTs, LDH, TFTs, HIV; consider chest X-ray",
     "Suspected cancer pathway referral per NICE NG12 (updated April 2026)",
     "No hypnotic; practical measures for sweats; results follow-up"
    ],
    "safetyNet": [
     "Same day or 111: high fevers, feeling very unwell, breathlessness, facial or neck swelling, new lumps",
     "Ring if no appointment within a week"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Night sweats pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) lymphoma",
    "href": "algorithms/night-sweats.html"
   },
   {
    "ic": "🗺️",
    "t": "Lymphadenopathy pathway",
    "s": "Visual algorithm · when to refer",
    "href": "algorithms/lymphadenopathy.html"
   },
   {
    "ic": "🗺️",
    "t": "Neck lump pathway",
    "s": "Visual algorithm · suspected cancer",
    "href": "algorithms/neck-lump.html"
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
    "s": "Bloods · referral",
    "href": "management/haematological-cancers.html"
   }
  ],
  "pitfalls": {
   "intro": "The patient offers you stress and a sleeping tablet. The station tests whether you take drenching sweats seriously, ask directly about lumps, and act on NICE NG12 (updated April 2026) — while handling a frightened young man well.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting stress and offering sleep hygiene or a hypnotic.",
     "why": "“Fails to consider serious causes.” The B symptoms and lump make lymphoma the priority.",
     "fix": "“Before we talk about sleep, I want to understand these sweats.”"
    },
    {
     "dom": "tasks",
     "fail": "Not asking directly about lumps, weight loss and itch.",
     "why": "He will not volunteer the lump; open questions alone miss it.",
     "fix": "Ask each B symptom and “any lumps in your neck, armpits or groin?”"
    },
    {
     "dom": "tasks",
     "fail": "Ordering bloods and reviewing in a month.",
     "why": "Unexplained lymphadenopathy with these symptoms taken into account meets NICE NG12 (updated April 2026) for considering a suspected cancer pathway referral.",
     "fix": "Examine today, send urgent bloods and make the referral now."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting HIV and TB.",
     "why": "Both cause sweats, weight loss and lymphadenopathy; HIV testing is recommended in this situation (NICE NG60).",
     "fix": "Offer HIV testing routinely and screen TB risk."
    },
    {
     "dom": "rto",
     "fail": "Saying “it could be cancer” with no context, or avoiding the word entirely when he asks.",
     "why": "Either frightens or evades; he has already searched it.",
     "fix": "Name lymphoma as a possibility, add that it may be something else and is often treatable, and explain the next steps."
    },
    {
     "dom": "gs",
     "fail": "No plan for a lost referral or worsening symptoms.",
     "why": "Safety-netting for suspected cancer includes tracking the referral.",
     "fix": "“If you haven’t heard within a week, ring me” and name the same-day symptoms."
    }
   ]
  }
 },
 "obstetric-cholestasis": {
  "stem": {
   "name": "Priya Anand",
   "age": "31-year-old woman",
   "pmh": [
    "Currently 34 weeks pregnant — first ongoing pregnancy",
    "Under shared antenatal care with the local maternity unit"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "Routine antenatal care to date. No recent GP contact.",
   "reason": "Telephone call: “Itching on my hands and feet — can you recommend a moisturiser?”"
  },
  "knowledge": {
   "guideline": "RCOG Green-top Guideline No. 43 — Intrahepatic cholestasis of pregnancy (2022) · RCOG Green-top Guideline No. 57 — Reduced fetal movements (2011)",
   "summary": "Itch without a rash, worst on palms and soles and at night, in the third trimester is intrahepatic cholestasis of pregnancy until proved otherwise. Check bile acids and LFTs promptly and refer to the maternity team, because very high bile acids raise stillbirth risk. Moisturiser is for comfort, not the plan.",
   "points": [
    {
     "h": "Recognise the pattern",
     "t": "Pruritus with no primary rash, typically palms and soles and worse at night, in the second half of pregnancy. Scratch marks may be present. Itch can come before the blood tests change."
    },
    {
     "h": "Investigate",
     "t": "Non-fasting serum bile acids and LFTs. RCOG GTG 43 (2022) supports the diagnosis with itch plus bile acids of 19 µmol/L or more. If the first result is normal and itching continues, repeat the tests. The maternity team excludes other causes of abnormal LFTs."
    },
    {
     "h": "Why bile acids matter",
     "t": "Stillbirth risk rises with the peak bile acid level and is clearly increased at 100 µmol/L or more. RCOG GTG 43 links timing of birth to peak level: planned birth at 35–36 weeks at 100 µmol/L or more; by 38–39 weeks at 40–99 µmol/L without other risk factors; for 19–39 µmol/L without other risk factors (stillbirth risk similar to background), planned birth by 40 weeks or routine antenatal care."
    },
    {
     "h": "Treatment",
     "t": "Emollients and menthol-based creams for comfort. Ursodeoxycholic acid is a maternity-team decision; RCOG GTG 43 notes it has not been shown to improve perinatal outcomes and should not be offered routinely for that purpose. Dose per BNF if used."
    },
    {
     "h": "Differentials to keep in mind",
     "t": "A visible rash points elsewhere (polymorphic eruption of pregnancy, pemphigoid gestationis, eczema, scabies). Headache, visual disturbance, epigastric pain or raised BP with abnormal LFTs suggest pre-eclampsia or HELLP — same-day maternity assessment."
    },
    {
     "h": "Fetal movements",
     "t": "Every woman with suspected cholestasis should know to contact the maternity unit straight away, day or night, if movements reduce or change (RCOG GTG 57). Don’t wait for the next appointment."
    },
    {
     "h": "After birth",
     "t": "Symptoms usually settle after delivery. Check LFTs after birth as advised by the maternity team; recurrence in future pregnancies is common."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Priya Anand? It’s Dr Hughes from the surgery. Could you confirm your date of birth? … Thank you. How can I help today?",
    "dom": "gs",
    "why": "Telephone identity check and open start"
   },
   {
    "who": "pt",
    "text": "Sorry to bother you. I’ve got this maddening itch, mostly my hands and feet, and it’s worse at night — I’m barely sleeping. There’s no rash. I’m sure it’s dry skin or hormones. Could you just recommend a moisturiser or an antihistamine?"
   },
   {
    "who": "dr",
    "text": "You’re not bothering me at all — I’m glad you rang. Not sleeping at 34 weeks is miserable. Can I ask a few questions about the itch first, so I give you the right advice?",
    "dom": "rto",
    "why": "Counters “sorry to bother you” and sets up focused questioning"
   },
   {
    "who": "pt",
    "text": "Of course."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "How long has it been going on, and where exactly is it worst?",
    "dom": "tasks",
    "why": "Establishes timing and distribution"
   },
   {
    "who": "pt",
    "text": "About a week. Palms and soles mostly. At night it drives me mad."
   },
   {
    "who": "dr",
    "text": "And just to be sure — no spots, blisters or raised patches anywhere, including round your tummy button or on your bump? Only scratch marks, if anything?",
    "dom": "tasks",
    "why": "Actively excludes a primary rash, which would point to other diagnoses"
   },
   {
    "who": "pt",
    "text": "Nothing. That’s why I thought it was just dry skin."
   },
   {
    "who": "dr",
    "text": "Have you noticed dark urine, pale poo, or any yellowing of your eyes or skin?",
    "dom": "tasks",
    "why": "Screens for cholestatic features"
   },
   {
    "who": "pt",
    "text": "I don’t think so. I haven’t really looked."
   },
   {
    "who": "dr",
    "text": "Any headaches, blurred vision, pain under your ribs, or swelling of your face or hands?",
    "dom": "tasks",
    "why": "Screens for pre-eclampsia and HELLP, which can also affect the liver"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "And how is the baby moving — the same pattern as usual?",
    "dom": "tasks",
    "why": "Checks fetal movements early in a potentially high-risk presentation"
   },
   {
    "who": "pt",
    "text": "Yes, the baby’s been kicking away. I hadn’t thought the itch had anything to do with her."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "You said you don’t want to make a fuss. Is anything worrying you about it, even a little?",
    "dom": "rto",
    "why": "Gently explores the minimisation to find the hidden worry"
   },
   {
    "who": "pt",
    "text": "Honestly, it just feels odd. It’s relentless. I didn’t want to be one of those anxious first-time mums ringing about everything."
   },
   {
    "who": "dr",
    "text": "I’m really glad you did ring, because your instinct that it feels odd is worth listening to.",
    "dom": "rto",
    "why": "Validates her instinct without alarming her"
   },
   {
    "phase": "Explanation",
    "clock": "5–8 min",
    "who": "dr",
    "text": "Itching with no rash, on the palms and soles, worse at night, in late pregnancy, can be a sign of a liver condition of pregnancy called obstetric cholestasis. It isn’t a skin problem — it’s to do with how the liver handles bile acids.",
    "dom": "tasks",
    "why": "Names the likely diagnosis in plain language"
   },
   {
    "who": "pt",
    "text": "Oh. Is it serious?"
   },
   {
    "who": "dr",
    "text": "For you it mainly causes the itch. The reason we take it seriously is the baby: if the bile acid level goes very high, there’s a higher risk of problems, including stillbirth. That’s why, when it’s confirmed, the maternity team keep a close eye and sometimes plan the birth a bit earlier. It’s very manageable once we know.",
    "dom": "rto",
    "why": "Honest, calm explanation of fetal risk that links the itch to the baby"
   },
   {
    "who": "pt",
    "text": "I had no idea an itch could matter like that."
   },
   {
    "who": "dr",
    "text": "Most people don’t. So I’d like two blood tests today — bile acids and liver tests. I’ll also speak to the maternity unit so they can check you and the baby and follow up the results.",
    "dom": "tasks",
    "why": "Arranges bile acids and LFTs promptly, with maternity involvement"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Can you get to the surgery this afternoon for the bloods, or would the maternity unit be easier for you?",
    "dom": "rto",
    "why": "Shares the practical decision about where testing happens"
   },
   {
    "who": "pt",
    "text": "I can come in this afternoon."
   },
   {
    "who": "dr",
    "text": "Great. For the itch meanwhile, a plain emollient and a cooling menthol cream can help, and cool showers before bed. If it is cholestasis, the maternity team may offer a medicine too — but the tests and their review are what really matter.",
    "dom": "tasks",
    "why": "Symptom relief framed as secondary to investigation"
   },
   {
    "who": "pt",
    "text": "Okay, that makes sense."
   },
   {
    "who": "dr",
    "text": "I’ll ring you with the results as soon as they’re back, and the maternity team will plan any extra monitoring from there. Even if the first result is normal, if the itch carries on we’ll repeat it.",
    "dom": "gs",
    "why": "Clear results pathway and repeat testing if symptoms persist"
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "The most important thing: if the baby’s movements slow down or change at all, ring the maternity unit straight away, day or night — don’t wait for the results. The same if you go yellow, feel unwell, or get a bad headache or vision problems. Could you tell me back what you’ll do?",
    "dom": "gs",
    "why": "Fetal-movement safety-net with teach-back"
   },
   {
    "who": "pt",
    "text": "Bloods this afternoon. If the baby moves less, or I go yellow or get a headache, I ring the maternity unit straight away."
   },
   {
    "who": "dr",
    "text": "Exactly right. You weren’t making a fuss — this was exactly the right call. Is there anything else you’d like to ask?",
    "dom": "rto",
    "why": "Reframes her call positively and shares the floor"
   },
   {
    "who": "pt",
    "text": "No, thank you. I’m glad I rang now."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; let her describe the itch fully before responding to the moisturiser request.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Sleep loss, how she is coping at 34 weeks, reluctance to “make a fuss” as a first-time mother.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “no rash”, “palms and soles”, “worse at night” and “it feels odd”, and explored them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea of dry skin or hormones; quiet worry that something isn’t right; expectation of moisturiser advice.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Non-fasting bile acids and LFTs today; maternity assessment including fetal monitoring; repeat if normal and itch persists.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Intrahepatic cholestasis of pregnancy vs pregnancy rashes, eczema, scabies, pre-eclampsia/HELLP.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about jaundice, dark urine, pale stools, pre-eclampsia symptoms and fetal movements.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named suspected obstetric cholestasis clearly and explained why it matters for the baby.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Bloods today, maternity referral, emollient and menthol for comfort, UDCA left to the maternity team.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Addressed sleep disruption and practical access to testing today.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Results call, maternity follow-up, and immediate contact for reduced fetal movements, jaundice or pre-eclampsia symptoms.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Investigations & results"
   ],
   "stem": {
    "name": "Priya Anand",
    "age": "31 years · female",
    "pmh": [
     "Pregnant — 34 weeks (first ongoing pregnancy)"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "None recorded",
    "recent": "⚠ 34 weeks pregnant. Routine antenatal care with the maternity unit to date.",
    "reason": "Telephone request for advice on itching. “Probably just dry skin.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Let her finish. She gives the key pattern in her opening — palms, soles, night, no rash."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Duration, distribution, no rash, jaundice features, pre-eclampsia symptoms, fetal movements."
    },
    {
     "t": "4–5",
     "h": "ICE",
     "d": "Behind “don’t want to fuss” is a sense something is odd. Validate it."
    },
    {
     "t": "5–9",
     "h": "Explain and plan",
     "d": "Name cholestasis in plain words, link honestly to the baby, bloods today, maternity involvement."
    },
    {
     "t": "9–12",
     "h": "Safety-net and close",
     "d": "Reduced fetal movements → maternity unit straight away. Results call. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Recommends moisturiser and an antihistamine; never asks about a rash, jaundice or fetal movements; no bile acids or LFTs; no maternity involvement; no fetal-movement safety-net.",
    "pass": "Recognises the pattern; arranges bile acids and LFTs; refers to maternity; gives symptom relief; safety-nets reduced fetal movements.",
    "exc": "All of the above, plus: explicitly excludes a rash and screens for pre-eclampsia; explains fetal risk honestly but calmly; turns her “don’t want to fuss” into “you were right to ring”; gets bloods done the same day; confirms understanding with teach-back."
   },
   "avoid": [
    {
     "dont": "“Itching is really common in pregnancy — try a good moisturiser.”",
     "instead": "“Itching without a rash on the hands and feet is something I always test for, because it can be a liver condition of pregnancy.”",
     "why": "Collusion with “dry skin” is the dangerous miss in this station."
    },
    {
     "dont": "“This condition can cause stillbirth, so we need to act fast.”",
     "instead": "“If the level goes very high it can affect the baby, which is why we check and monitor closely — it’s very manageable once we know.”",
     "why": "Blunt risk statements without context cause panic; honest and calm framing earns Relating marks."
    },
    {
     "dont": "“We’ll see what the bloods show and go from there.”",
     "instead": "“If the baby’s movements slow down or change, ring the maternity unit straight away — don’t wait for results.”",
     "why": "A vague close misses the most important safety-net."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Sleep and exhaustion",
     "t": "Night-time itch at 34 weeks wrecks sleep. Acknowledge it — it is often why women finally ring."
    },
    {
     "h": "First pregnancy and minimising",
     "t": "Fear of being “an anxious first-time mum” delays help-seeking. Reward the call explicitly."
    }
   ],
   "legal": [
    {
     "h": "Maternity rights",
     "t": "Pregnant employees are entitled to paid time off for antenatal care, including extra monitoring appointments (Employment Rights Act 1996)."
    }
   ],
   "professional": [
    {
     "h": "Shared care with maternity",
     "t": "The GP starts the investigation, but management and delivery planning sit with the obstetric team. Communicate directly and make sure results are followed up by a named person."
    },
    {
     "h": "Results responsibility",
     "t": "If you order the tests, you own the result until it is handed over. Agree who will contact her (GMC Good Medical Practice 2024)."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "The charity ICP Support gives information for women and families. Community midwife for continuity and fetal-movement advice."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Reduced or changed fetal movements — same-day maternity assessment",
     "Jaundice, dark urine, pale stools, or feeling unwell",
     "Headache, visual disturbance, epigastric pain or swelling — possible pre-eclampsia/HELLP"
    ],
    "psychosocial": [
     "Sleep loss and exhaustion in late pregnancy",
     "Worry about being seen as over-anxious",
     "Practical access to same-day blood tests"
    ],
    "ice": [
     "Idea: “It’s just dry skin or hormones.”",
     "Concern: the itch feels odd and relentless; she hasn’t linked it to the baby",
     "Expectation: moisturiser or antihistamine advice"
    ]
   },
   "diagnosis": "Be clear and calm: “This pattern of itching — no rash, hands and feet, worse at night — can be a liver condition of pregnancy called obstetric cholestasis. We test for it because it can affect the baby, and it’s very manageable once we know.”",
   "diagnosisLay": "“Your liver normally moves bile acids along like a busy conveyor belt. In late pregnancy the belt can slow down, and the bile acids spill into the blood. That’s what makes you itch. We measure how much is spilling, because very high levels matter for the baby.”",
   "management": {
    "reflectIce": "“You thought this was just dry skin, and you didn’t want to make a fuss. You were right to ring — your sense that it felt odd was spot on.”",
    "psychosocial": "Make testing easy (same-day slot at the surgery or the maternity unit), help her sleep with practical comfort measures, and give her a named route for results.",
    "sharedPlan": [
     "Non-fasting bile acids and LFTs today",
     "Maternity referral for assessment, fetal monitoring and birth planning",
     "Emollient and menthol cream for comfort; UDCA per the maternity team"
    ],
    "safetyNet": [
     "Reduced or changed fetal movements → maternity unit immediately, day or night",
     "Jaundice, feeling unwell, headache or visual disturbance → same-day maternity assessment; repeat bloods if itch persists with normal results"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Itchiness in pregnancy",
    "s": "Visual algorithm · RCOG GTG 43",
    "href": "algorithms/pruritus-pregnancy.html"
   },
   {
    "ic": "📋",
    "t": "Itch (pruritus)",
    "s": "Case walkthrough · causes of itch",
    "href": "../cases/pruritus.html"
   },
   {
    "ic": "🗺️",
    "t": "Abnormal LFTs",
    "s": "Visual algorithm · interpreting results",
    "href": "algorithms/abnormal-lfts.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by agreeing with the patient. She offers a harmless explanation and a simple request; the pattern she describes is the whole case.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting “dry skin” and advising moisturiser and an antihistamine.",
     "why": "“Failed to recognise a significant diagnosis.” Itch without a rash on palms and soles in the third trimester needs bile acids and LFTs.",
     "fix": "Recognise the pattern out loud and arrange bloods the same day."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about fetal movements.",
     "why": "Fetal risk is the reason this condition matters. Omitting movements is an unsafe gap.",
     "fix": "Ask during data gathering and make it the headline of the safety-net."
    },
    {
     "dom": "tasks",
     "fail": "Not excluding a rash or pre-eclampsia symptoms.",
     "why": "“Did not consider important differentials.” A rash changes the diagnosis; pre-eclampsia changes the urgency.",
     "fix": "Two quick questions: any spots or blisters? Any headache, visual change or pain under the ribs?"
    },
    {
     "dom": "rto",
     "fail": "Stating the stillbirth risk bluntly, then moving on.",
     "why": "“Did not respond to the patient’s emotions.” A frightened patient may not take in the plan.",
     "fix": "Pause after explaining, invite her reaction, and pair the risk with what monitoring achieves."
    },
    {
     "dom": "gs",
     "fail": "Ordering bloods with no plan for who acts on the result.",
     "why": "“Follow-up not arranged.” Results can sit unseen while bile acids climb.",
     "fix": "“I’ll ring you with the result, and I’m letting the maternity unit know today.”"
    },
    {
     "dom": "rto",
     "fail": "Letting “sorry to bother you” pass without comment.",
     "why": "Minimisers under-report next time too — including reduced movements.",
     "fix": "“You’re not bothering me. Ringing about this was exactly the right thing to do.”"
    }
   ]
  }
 },
 "pleural-effusion-cxr": {
  "stem": {
   "name": "Brian Tulloch",
   "age": "64-year-old man",
   "pmh": [
    "Ex-smoker — 10 pack-years, stopped 15 years ago",
    "Retired builder and plasterer"
   ],
   "meds": [
    "None recorded"
   ],
   "allergy": "No allergies recorded",
   "recent": "Seen by a colleague 3 weeks ago: 6 weeks of breathlessness and right-sided chest discomfort, ?slow-resolving chest infection; chest X-ray requested. ⚠ CXR report: moderate right-sided pleural effusion; no consolidation.",
   "reason": "Booked to get his chest X-ray result."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · BTS Guideline for pleural disease (2023) · GMC Good medical practice (2024) · NHS England Faster Diagnosis Standard",
   "summary": "A unilateral pleural effusion with weight loss in an asbestos-exposed ex-smoker is malignancy until proven otherwise. Tell him honestly and refer urgently to respiratory.",
   "points": [
    {
     "h": "Lung cancer criterion",
     "t": "NICE NG12 (updated April 2026): refer using a suspected cancer pathway referral for lung cancer if chest X-ray findings suggest lung cancer, or at 40 and over with unexplained haemoptysis. Whether an unexplained unilateral effusion counts as a finding suggesting cancer is a clinical judgement; at 64 with weight loss and asbestos exposure it is reasonable to treat it as one, and to discuss with respiratory the same day if unsure."
    },
    {
     "h": "Mesothelioma",
     "t": "NICE NG12 (updated April 2026): refer using a suspected cancer pathway referral for mesothelioma if chest X-ray findings suggest mesothelioma. It also advises offering an urgent direct-access chest X-ray to assess for mesothelioma in people aged 40 and over with 2 or more unexplained symptoms (cough, fatigue, shortness of breath, chest pain, weight loss, appetite loss), or with 1 or more of them if they have ever smoked or have been exposed to asbestos — he met that when first seen."
    },
    {
     "h": "Unilateral versus bilateral",
     "t": "Bilateral effusions usually reflect systemic causes such as heart failure or low albumin. A unilateral effusion needs a cause found: malignancy (lung, mesothelioma, metastatic), parapneumonic effusion or empyema, TB and pulmonary embolism are the main considerations."
    },
    {
     "h": "What respiratory will do",
     "t": "BTS Guideline for pleural disease (2023): thoracic ultrasound, diagnostic pleural aspiration and CT are the usual first steps for an undiagnosed unilateral effusion, with pleural biopsy if needed. Prepare him for this."
    },
    {
     "h": "Asbestos history",
     "t": "Ask when, where, in what job and for how long, and record it. It raises suspicion of mesothelioma and other asbestos-related disease, and supports any later claim for industrial injuries benefit or compensation."
    },
    {
     "h": "Same-day action",
     "t": "Breathlessness at rest, rapidly worsening breathlessness, chest pain with collapse, fever with rigors (possible empyema) or haemoptysis need same-day assessment rather than waiting for clinic."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Brian, I’m Dr Hughes. You’ve come for your X-ray result. Before I go through it, how have you been since you saw my colleague?",
    "dom": "rto",
    "why": "Opens with his perspective and current state"
   },
   {
    "who": "pt",
    "text": "It’ll be fine, won’t it? Just the tail end of that chest infection. I’m a bit puffed on the stairs, but that’s age. We’ve a cruise booked next month — if you can give me something to clear it up, I’ll be on my way."
   },
   {
    "who": "dr",
    "text": "I can hear you’re really looking forward to that cruise. Can I check what you were told about why the X-ray was done?",
    "dom": "rto",
    "why": "Checks prior understanding before breaking news"
   },
   {
    "who": "pt",
    "text": "The other doctor thought it was a slow chest infection. Just to be sure, she said."
   },
   {
    "phase": "Breaking the news",
    "clock": "1–3 min",
    "who": "dr",
    "text": "Thank you. I need to be straight with you: the X-ray didn’t show quite what we hoped. Is it all right if I go through it now?",
    "dom": "tasks",
    "why": "Warning shot and permission"
   },
   {
    "who": "pt",
    "text": "(Pause.) Go on."
   },
   {
    "who": "dr",
    "text": "It shows a collection of fluid around your right lung. We call it a pleural effusion. There’s no sign of an infection in the lung itself. Fluid on one side like this isn’t something an infection usually leaves behind, so we need to find out why it’s there.",
    "dom": "tasks",
    "why": "Names the finding plainly; separates it from infection"
   },
   {
    "who": "pt",
    "text": "Fluid? So what’s causing it?"
   },
   {
    "who": "dr",
    "text": "That’s what we need to find out. Can I ask a few more questions first — they’ll help me get you to the right place quickly.",
    "dom": "gs",
    "why": "Chunks information; moves to targeted history"
   },
   {
    "phase": "Data gathering",
    "clock": "3–5 min",
    "who": "dr",
    "text": "How is your breathing now — are you breathless sitting still, or only when you’re moving about?",
    "dom": "tasks",
    "why": "Severity and need for same-day care"
   },
   {
    "who": "pt",
    "text": "Only when I’m doing something. Stairs, the garden."
   },
   {
    "who": "dr",
    "text": "Have you lost weight, gone off your food, had sweats or fevers, or coughed up any blood?",
    "dom": "tasks",
    "why": "Weight loss, systemic and infective features, haemoptysis"
   },
   {
    "who": "pt",
    "text": "Trousers are a bit looser. No blood, no fevers."
   },
   {
    "who": "dr",
    "text": "You were a builder and plasterer. Did you ever work with asbestos — sheeting, lagging, cutting boards?",
    "dom": "tasks",
    "why": "Takes the occupational asbestos history"
   },
   {
    "who": "pt",
    "text": "Years of it, back in the eighties. Everyone did. No masks, nothing."
   },
   {
    "who": "dr",
    "text": "Thank you — that’s important, and I’m writing it in your notes in detail, because it matters for your care and possibly for other reasons later. And you smoked for a while, I see?",
    "dom": "tasks",
    "why": "Documents exposure; confirms smoking history"
   },
   {
    "who": "pt",
    "text": "About ten years’ worth. Stopped fifteen years ago."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "When I mentioned asbestos, you went quiet for a second. What’s going through your mind?",
    "dom": "rto",
    "why": "Picks up the non-verbal cue and surfaces the fear"
   },
   {
    "who": "pt",
    "text": "Every builder knows what asbestos does. I suppose I’ve been telling myself it’s the infection because I didn’t want to think about the other thing."
   },
   {
    "who": "dr",
    "text": "That’s a very human thing to do. I want to be honest with you. Fluid on one side, with some weight loss and that asbestos history, means we have to check urgently for a problem in the lung or its lining, including cancer. I’m not saying that’s what it is — there are other causes — but it would be wrong to treat it as an infection.",
    "dom": "tasks",
    "why": "Honest about malignancy without asserting a diagnosis"
   },
   {
    "who": "pt",
    "text": "Right. (Pause.) So no antibiotics then."
   },
   {
    "who": "dr",
    "text": "No — antibiotics wouldn’t help this, and they’d only delay finding the answer.",
    "dom": "tasks",
    "why": "Declines inappropriate antibiotics"
   },
   {
    "phase": "Shared management",
    "clock": "7–10 min",
    "who": "dr",
    "text": "Here’s the plan. I’m referring you urgently to the chest specialists today, to be seen within two weeks. They’ll usually do an ultrasound of the chest, take a sample of the fluid with a needle, and arrange a detailed CT scan. Draining some fluid often eases the breathing too.",
    "dom": "tasks",
    "why": "NICE NG12 (updated April 2026) suspected cancer pathway referral; explains the next steps"
   },
   {
    "who": "pt",
    "text": "And the cruise?"
   },
   {
    "who": "dr",
    "text": "I know this is rotten timing. My honest advice is to get the tests done first — the specialists should be able to give you a much clearer picture within a few weeks. Let’s not cancel anything today; tell your travel insurer about the tests, and decide once you know more.",
    "dom": "rto",
    "why": "Reframes the cruise around the tests without dismissing it"
   },
   {
    "who": "pt",
    "text": "Fair enough. I’d rather know before I go."
   },
   {
    "who": "dr",
    "text": "Is there someone you’d like with you at the hospital appointments?",
    "dom": "rto",
    "why": "Support for difficult news ahead"
   },
   {
    "who": "pt",
    "text": "I’ll have company. I’ll tell them tonight."
   },
   {
    "phase": "Safety-net & close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "If you become breathless at rest, much more breathless quickly, cough up blood, get a high temperature with shivers, or have chest pain that won’t settle, don’t wait for the appointment — ring us the same day, or 999 if it’s severe.",
    "dom": "gs",
    "why": "Specific red flags and escalation"
   },
   {
    "who": "dr",
    "text": "It’s a lot to take in. What will you tell them tonight about what I’ve said?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "There’s fluid on my lung, it’s not the infection, and I’m seeing the chest doctors within two weeks for a scan and a needle test — maybe because of the asbestos. And the cruise waits till we know."
   },
   {
    "who": "dr",
    "text": "That’s right. If you’ve not heard within a week, ring us. I’ll book a call with you after the clinic so we can go through what they find together.",
    "dom": "gs",
    "why": "Fail-safe and ownership of the result"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Asked how he was and what he understood before giving the result.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "The cruise, his working life, who will support him through tests.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the pause at “asbestos” and the hopeful minimisation, and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (tail end of an infection), concern (asbestos, cancer), expectation (antibiotics and the cruise).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Urgent respiratory referral for thoracic ultrasound, pleural aspiration and CT; in-person review if breathlessness worsens.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Lung cancer, mesothelioma, metastatic disease, parapneumonic effusion or empyema, TB, PE; bilateral systemic causes less likely.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Assessed breathlessness at rest, weight loss, fever and haemoptysis; defined same-day triggers.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Unexplained unilateral effusion in an asbestos-exposed ex-smoker with weight loss — suspected malignancy, NICE NG12 (updated April 2026) suspected cancer pathway.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Urgent referral today, no antibiotics, cruise decision deferred until results, support arranged.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Asbestos exposure documented in detail for clinical and later benefit purposes.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named red flags and 999 route, chase if no date in a week, GP call after clinic.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Investigations & results"
   ],
   "stem": {
    "name": "Brian Tulloch",
    "age": "64-year-old man",
    "pmh": [
     "Ex-smoker — 10 pack-years, stopped 15 years ago",
     "Retired builder and plasterer"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "No allergies recorded",
    "recent": "Seen by a colleague 3 weeks ago: 6 weeks of breathlessness and right-sided chest discomfort, ?slow-resolving chest infection; chest X-ray requested. ⚠ CXR report: moderate right-sided pleural effusion; no consolidation.",
    "reason": "Booked to get his chest X-ray result."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & check understanding",
     "d": "He expects a clear film and antibiotics. Find out what he was told before you speak."
    },
    {
     "t": "1–3",
     "h": "Break the news",
     "d": "Warning shot, permission, name the effusion plainly, separate it from infection."
    },
    {
     "t": "3–5",
     "h": "Targeted history",
     "d": "Breathlessness at rest, weight, fevers, haemoptysis, asbestos exposure in detail, smoking."
    },
    {
     "t": "5–10",
     "h": "ICE and plan",
     "d": "Surface the asbestos fear; be honest about cancer as a possibility; urgent respiratory referral; explain tests; reframe the cruise."
    },
    {
     "t": "10–12",
     "h": "Safety-net & close",
     "d": "Same-day and 999 triggers, teach-back, fail-safe, GP call after clinic."
    }
   ],
   "wordPics": {
    "fail": "Calls it “a bit of fluid from the infection” and prescribes antibiotics; or delivers “this could be mesothelioma” bluntly with no plan; never asks about asbestos.",
    "pass": "Breaks the news with a warning shot, recognises a unilateral effusion as needing urgent investigation, takes the asbestos history and refers urgently with a safety-net.",
    "exc": "All of that, plus: checks prior understanding first; responds to the pause at “asbestos”; is honest about cancer without asserting it; explains what respiratory will do; handles the cruise with empathy; documents exposure for later; teach-back and owned follow-up."
   },
   "avoid": [
    {
     "dont": "“It’s just a bit of fluid left over from the infection — let’s try another course of antibiotics.”",
     "instead": "“Fluid on one side isn’t something an infection usually leaves behind, so we need to find out why it’s there.”",
     "why": "Minimising a unilateral effusion and treating empirically delays diagnosis."
    },
    {
     "dont": "“You’ve got fluid on the lung and with your asbestos it’s probably mesothelioma.”",
     "instead": "“We have to check urgently for a problem in the lung or its lining, including cancer. I’m not saying that’s what it is.”",
     "why": "Honest without delivering an unproven diagnosis."
    },
    {
     "dont": "“You’ll have to cancel the cruise.”",
     "instead": "“My honest advice is tests first — let’s decide about the cruise once we know more.”",
     "why": "Dismissing his plans coldly loses rapport; reframing keeps him engaged."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Plans and travel",
     "t": "A booked cruise is a real loss. Advise him to tell his travel insurer about pending investigations; decisions about travel are best made once results are known."
    },
    {
     "h": "Support",
     "t": "Bad news and invasive tests are easier with someone present. Offer written information and encourage him to bring a companion."
    }
   ],
   "legal": [
    {
     "h": "Asbestos-related disease and benefits",
     "t": "If mesothelioma or another asbestos-related disease is diagnosed, he may be entitled to Industrial Injuries Disablement Benefit and other government compensation schemes, and to a civil claim. A detailed, dated occupational history in the notes supports this."
    }
   ],
   "professional": [
    {
     "h": "Results handling",
     "t": "An abnormal CXR requested for suspected infection must be acted on promptly by whoever receives it, not left for the patient to book. GMC Good medical practice (2024): follow up results and act on them."
    },
    {
     "h": "Honesty",
     "t": "Share the finding and its significance honestly, at a pace the patient can manage; do not collude with “it’s just the infection”."
    }
   ],
   "community": [
    {
     "h": "Support organisations",
     "t": "Asthma + Lung UK helpline; Mesothelioma UK and local asbestos support groups if mesothelioma is diagnosed; Macmillan Cancer Support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Unilateral pleural effusion — investigate, not treat as infection",
     "Weight loss, haemoptysis, persistent chest pain",
     "Breathlessness at rest or rapidly worsening; fever with rigors (empyema)"
    ],
    "psychosocial": [
     "Retired builder and plasterer — asbestos exposure in the 1970s and 1980s",
     "Cruise booked next month",
     "Support for hospital appointments"
    ],
    "ice": [
     "Idea: “Just the tail end of that chest infection”",
     "Concern: what asbestos might mean — unspoken at first",
     "Expectation: a clear X-ray, antibiotics and the cruise"
    ]
   },
   "diagnosis": "Moderate right unilateral pleural effusion without consolidation in a 64-year-old asbestos-exposed ex-smoker with 6 weeks of breathlessness, chest discomfort and weight loss. Malignancy (lung cancer or mesothelioma) must be excluded urgently: suspected cancer pathway referral to respiratory under NICE NG12 (updated April 2026).",
   "diagnosisLay": "“There’s fluid around your right lung. Infections don’t usually leave fluid on one side like this, so we need to find the cause. With your weight loss and asbestos work, that includes checking the lung and its lining for cancer — quickly.”",
   "management": {
    "reflectIce": "“You’ve been hoping it was the infection, partly because you didn’t want to think about asbestos. That’s understandable — and it’s why I want you seen quickly, so you’re not left wondering.”",
    "psychosocial": "Defer the cruise decision until results; advise telling the travel insurer; encourage a companion at appointments; record the asbestos history.",
    "sharedPlan": [
     "Suspected cancer pathway referral to respiratory today",
     "Explain thoracic ultrasound, pleural aspiration and CT",
     "No antibiotics",
     "Detailed occupational history documented"
    ],
    "safetyNet": [
     "Breathless at rest, rapid worsening, haemoptysis, fever with rigors — same day; 999 if severe",
     "Ring if no appointment within a week",
     "GP call after the clinic visit"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Breathlessness pathway",
    "s": "Visual algorithm · effusion · NICE NG12 (updated April 2026)",
    "href": "algorithms/breathlessness.html"
   },
   {
    "ic": "📋",
    "t": "Breathlessness",
    "s": "Case walkthrough",
    "href": "../cases/breathlessness.html"
   },
   {
    "ic": "🗺️",
    "t": "Chest pain pathway",
    "s": "Visual algorithm · pleuritic and chest wall pain",
    "href": "algorithms/chest-pain.html"
   },
   {
    "ic": "🗺️",
    "t": "Weight loss pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026)",
    "href": "algorithms/weight-loss.html"
   }
  ],
  "pitfalls": {
   "intro": "This is a results station that becomes a breaking-bad-news station. Candidates fail by minimising the finding, by missing the occupational history, or by delivering the word cancer without care.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Calling it fluid from the infection and prescribing antibiotics.",
     "why": "A unilateral effusion without consolidation needs a cause found; NICE NG12 (updated April 2026) supports a suspected cancer pathway referral for chest X-ray findings that suggest lung cancer or mesothelioma (the effusion itself is not a named criterion).",
     "fix": "Name it, explain why it isn’t the infection, refer urgently."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about asbestos.",
     "why": "The occupational history is the key cue for mesothelioma and must be documented.",
     "fix": "Ask directly about sheeting, lagging, boards; record dates and duration."
    },
    {
     "dom": "tasks",
     "fail": "Missing features that need same-day care.",
     "why": "Breathlessness at rest or fever with rigors changes the timescale.",
     "fix": "Ask about breathlessness at rest, fever and haemoptysis before planning."
    },
    {
     "dom": "rto",
     "fail": "Giving the result before checking what he understands or expects.",
     "why": "Breaking news without a warning shot or check of understanding is a common Relating fail.",
     "fix": "“What were you told about why the X-ray was done?” then a warning shot."
    },
    {
     "dom": "rto",
     "fail": "Ignoring or dismissing the cruise.",
     "why": "His plans matter to him; brushing past them loses rapport.",
     "fix": "Acknowledge the timing, advise tests first, defer the decision, mention insurance."
    },
    {
     "dom": "gs",
     "fail": "Ending with “the hospital will be in touch”.",
     "why": "No safety-net, no fail-safe and no ownership of the result.",
     "fix": "Named red flags, chase if no date, and a booked GP call after the clinic."
    }
   ]
  }
 },
 "postpartum-hair-loss": {
  "stem": {
   "name": "Lauren Mbeki",
   "age": "33-year-old woman",
   "pmh": [
    "First baby born 4 months ago",
    "No other significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "No blood tests since delivery on the record.",
   "reason": "Video appointment: “hair falling out since the baby”."
  },
  "knowledge": {
   "guideline": "PCDS Hair Loss Pathway (Nov 2024) · NICE CG192 · NICE NG194 · NICE NG145 · BSG iron deficiency anaemia guideline 2021",
   "summary": "Hair shedding a few months after birth is postpartum telogen effluvium: common, benign and self-limiting. Check ferritin and thyroid function, but the real task is the exhausted mother — ask about mood and risk, and support her.",
   "points": [
    {
     "h": "Postpartum telogen effluvium",
     "t": "After delivery, many hairs held in the growth phase during pregnancy enter shedding together, typically starting 2–6 months after the trigger and settling by 6–9 months (PCDS Hair Loss Pathway 2024). Shedding is often most visible at the hairline and temples. Full regrowth is gradual."
    },
    {
     "h": "Proportionate tests",
     "t": "FBC and ferritin (blood loss at delivery; ferritin is the most useful iron marker, BSG 2021) and thyroid function — postpartum thyroiditis can cause fatigue, low mood and hair change (manage per NICE NG145). No further investigation is needed for a typical picture."
    },
    {
     "h": "Treatment",
     "t": "Reassurance and time. The Regaine for Women (minoxidil) product licence excludes hair loss due to childbirth, and it is not advised when breastfeeding. Replace iron if deficient, dose per BNF."
    },
    {
     "h": "Ask about mood — every time",
     "t": "NICE CG192: at contact in the postnatal period, consider the depression identification (Whooley) questions and the GAD-2 for anxiety; if positive, assess further and ask directly about thoughts of self-harm and harm to the baby."
    },
    {
     "h": "Support by severity",
     "t": "Mild to moderate postnatal depression or anxiety: facilitated self-help or psychological therapy via NHS Talking Therapies, where perinatal referrals are prioritised; health visitor support. Severe symptoms, rapid deterioration or significant risk: urgent perinatal mental health team referral (NICE CG192)."
    },
    {
     "h": "Red flags",
     "t": "Thoughts of suicide or self-harm, thoughts of harming the baby, new confusion or psychotic symptoms, or rapid change in mental state in the postnatal period need same-day assessment (NICE CG192)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Lauren, I’m Dr Lee. Thanks for booking in — how can I help today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "I know this probably sounds trivial with everything going on, but my hair is falling out in clumps since the baby. My hairline’s thin and I look awful. It’s the last straw. I’m exhausted, I feel like I’m falling apart, and nothing about my body feels like mine any more."
   },
   {
    "who": "dr",
    "text": "It doesn’t sound trivial at all — and you’ve just told me a lot more than hair. Can we talk about the hair, and also about how you’re doing yourself? Then we’ll make a plan together.",
    "dom": "gs",
    "why": "Refuses the “trivial” framing and sets a two-part agenda"
   },
   {
    "who": "pt",
    "text": "Okay. Yes."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about the hair first. When did it start, and where is it thinnest?",
    "dom": "tasks",
    "why": "Timing and pattern"
   },
   {
    "who": "pt",
    "text": "A few weeks ago. Clumps in the brush and in the shower. It’s thinnest at the front and the sides."
   },
   {
    "who": "dr",
    "text": "Any bald patches, soreness, redness or itching of the scalp?",
    "dom": "tasks",
    "why": "Screens for patchy or scarring alopecia"
   },
   {
    "who": "pt",
    "text": "No, just thin all over at the front."
   },
   {
    "who": "dr",
    "text": "How was the birth — any heavy bleeding afterwards? And how are you feeding the baby?",
    "dom": "tasks",
    "why": "Iron-loss risk and breastfeeding status, relevant to tests and treatment"
   },
   {
    "who": "pt",
    "text": "I’m honestly not sure how much I lost. Feeding’s been hard work."
   },
   {
    "who": "dr",
    "text": "Any palpitations, feeling very hot or cold, shaky, or weight change?",
    "dom": "tasks",
    "why": "Thyroid screen for postpartum thyroiditis"
   },
   {
    "who": "pt",
    "text": "I’m tired all the time. I can’t tell what’s normal tiredness with a baby."
   },
   {
    "phase": "The mother behind the hair",
    "clock": "4–8 min",
    "who": "dr",
    "text": "You said you feel like you’re falling apart. Tell me more about that.",
    "dom": "rto",
    "why": "Follows the key cue"
   },
   {
    "who": "pt",
    "text": "I just feel… not me. Everyone says it’s the best time of your life, and I’m just getting through each day."
   },
   {
    "who": "dr",
    "text": "Over the last month, have you often felt down, low or hopeless? And have you lost interest or pleasure in doing things?",
    "dom": "tasks",
    "why": "Depression identification questions (NICE CG192)"
   },
   {
    "who": "pt",
    "text": "Yes to both, honestly. I don’t really enjoy anything. I love the baby, I do, but I feel flat."
   },
   {
    "who": "dr",
    "text": "Thank you for being honest. And have you felt nervous, anxious or on edge, or unable to stop worrying?",
    "dom": "tasks",
    "why": "GAD-2 anxiety screen"
   },
   {
    "who": "pt",
    "text": "Worrying all the time. Whether I’m doing it right. Whether something will happen to the baby."
   },
   {
    "who": "dr",
    "text": "I need to ask everyone this, because it matters: have you had any thoughts of harming yourself, or that life isn’t worth living? Or any thoughts of harming the baby?",
    "dom": "tasks",
    "why": "Directly assesses risk to self and baby"
   },
   {
    "who": "pt",
    "text": "No. Nothing like that. I just want to sleep."
   },
   {
    "who": "dr",
    "text": "I’m glad you told me. Who is around to help you?",
    "dom": "rto",
    "why": "Explores support"
   },
   {
    "who": "pt",
    "text": "Not as much as I’d like. I don’t want to be a burden."
   },
   {
    "who": "dr",
    "text": "You mentioned your body not feeling like yours. What has that been like?",
    "dom": "rto",
    "why": "Validates body image and identity"
   },
   {
    "who": "pt",
    "text": "Everything’s changed. And now the hair. I don’t recognise myself."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "8–9 min",
    "who": "dr",
    "text": "What were you hoping I could do today?",
    "dom": "rto",
    "why": "Elicits expectations"
   },
   {
    "who": "pt",
    "text": "Tell me if the hair will stop. And… I suppose I needed to say the rest to someone."
   },
   {
    "phase": "Explanation & plan",
    "clock": "9–11 min",
    "who": "dr",
    "text": "The hair first, because it’s good news: shedding a few months after a baby is extremely common. In pregnancy your hair stays in its growing phase; afterwards lots of it sheds together. It settles and grows back over the coming months. You aren’t going bald.",
    "dom": "tasks",
    "why": "Reasoned reassurance with mechanism"
   },
   {
    "who": "pt",
    "text": "Really? That’s a relief."
   },
   {
    "who": "dr",
    "text": "Because any blood loss at delivery can lower your iron, and you’re so tired, I’d like a blood count, iron level and thyroid test. The thyroid can wobble after a baby and affect energy, mood and hair.",
    "dom": "tasks",
    "why": "FBC, ferritin and TFTs for postpartum contributors"
   },
   {
    "who": "dr",
    "text": "And the rest — what you’re describing, the flatness, not enjoying things and worrying all the time, sounds like more than tiredness. It sounds like postnatal depression and anxiety. It’s common, it isn’t your fault, and it gets better with support.",
    "dom": "tasks",
    "why": "Names the working diagnosis honestly"
   },
   {
    "who": "pt",
    "text": "I didn’t want to say it. I thought I’d be judged."
   },
   {
    "who": "dr",
    "text": "No judgement at all. I’d suggest talking therapy — you can refer yourself to NHS Talking Therapies, and new mums are seen quickly — and I’d like to let your health visitor know so she can support you too. Is that okay with you?",
    "dom": "rto",
    "why": "Shares the plan and seeks consent before involving the health visitor"
   },
   {
    "who": "pt",
    "text": "Yes. That would help."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you ever have thoughts of harming yourself or the baby, feel suddenly very different or confused, or can’t cope, call us the same day, or 111 or 999 out of hours. I’ll see you again in two weeks with the blood results to see how you’re doing.",
    "dom": "gs",
    "why": "Specific risk safety-net and booked review"
   },
   {
    "who": "pt",
    "text": "Okay. Two weeks."
   },
   {
    "who": "dr",
    "text": "What will you take away from today?",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "The hair will come back, bloods for iron and thyroid, and that it’s okay to not be okay — I’m getting help."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. You came about your hair, but I’m glad we looked after you too.",
    "dom": "rto",
    "why": "Closes warmly, centring the mother"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; refused the “trivial” framing and set an agenda covering both the hair and her wellbeing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Birth and blood loss, feeding (relevant to prescribing), support at home, reluctance to be a burden, body image and loss of identity.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Followed “falling apart”, “last straw” and “nothing about my body feels like mine”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (hair loss is trivial but distressing); concern (falling apart, not recognising herself); expectation (will it stop — and to be heard).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Scalp symptoms asked; FBC, ferritin and TFTs for delivery blood loss and postpartum thyroiditis; no over-investigation.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Postpartum telogen effluvium versus patchy or scarring loss; iron deficiency, postpartum thyroiditis; postnatal depression and anxiety.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Whooley and GAD-2 questions, then direct questions about thoughts of self-harm and harm to the baby (NICE CG192).",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named postpartum telogen effluvium and probable postnatal depression and anxiety, both clearly and without blame.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Reassurance with timeline; tests; NHS Talking Therapies self-referral; health visitor involvement with consent.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Feeding status considered in treatment choices (no minoxidil); iron replacement if deficient; thyroid follow-up.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day, 111 and 999 routes for risk or rapid change; review in two weeks with results and mood.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "Gender, reproductive & sexual health"
   ],
   "stem": {
    "name": "Lauren Mbeki",
    "age": "33 years · female",
    "pmh": [
     "First baby 4 months ago",
     "Nil else significant"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "NKDA",
    "recent": "No bloods since delivery.",
    "reason": "Video consultation. “Hair falling out since the baby.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and hear the ticket",
     "d": "She calls the hair trivial and then says she is falling apart. Name both and set a two-part agenda."
    },
    {
     "t": "1–4",
     "h": "The hair",
     "d": "Timing, pattern, scalp symptoms, delivery blood loss, feeding, thyroid symptoms."
    },
    {
     "t": "4–8",
     "h": "The mother",
     "d": "Follow “falling apart”. Whooley and GAD-2, then risk to self and baby. Support, body image."
    },
    {
     "t": "8–11",
     "h": "Explain both",
     "d": "Postpartum shed with mechanism and timeline. FBC, ferritin, TFTs. Name postnatal depression and anxiety; Talking Therapies, health visitor with consent."
    },
    {
     "t": "11–12",
     "h": "Safety-net and close",
     "d": "Same-day, 111, 999 routes. Review in two weeks. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Reassures about the hair and ends the consultation; never asks about mood despite “falling apart”; no thyroid or iron check; or suggests minoxidil while breastfeeding.",
    "pass": "Reassures accurately about postpartum shedding, checks FBC, ferritin and TFTs, asks the mood questions including risk, and arranges support and follow-up.",
    "exc": "All of the above, plus: refuses the “trivial” framing at the start; screens mood with the Whooley and GAD-2 questions and asks directly about harm to self and baby; validates body-image change without judgement; seeks consent to involve the health visitor; names what she has in plain words; she leaves feeling looked after as a person."
   },
   "avoid": [
    {
     "dont": "“Oh, that’s completely normal after a baby — it’ll grow back.” (end of consultation)",
     "instead": "“The hair will grow back — and I heard you say you’re falling apart. Can we talk about you?”",
     "why": "Reassuring the ticket and closing misses the real case."
    },
    {
     "dont": "“All new mums are tired.”",
     "instead": "“You said you don’t enjoy anything and worry all the time — that sounds like more than tiredness.”",
     "why": "Normalising dismisses symptoms of postnatal depression and anxiety."
    },
    {
     "dont": "“Try some minoxidil.”",
     "instead": "“This type of shed recovers by itself; let’s check your iron and thyroid.”",
     "why": "Not indicated for postpartum shedding and not advised when breastfeeding."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Support at home",
     "t": "She feels she lacks help and doesn’t want to be a burden. Explore who could help, and local mother and baby support."
    },
    {
     "h": "Identity and body image",
     "t": "Postnatal body changes and loss of the old sense of self are common drivers of distress; name them as valid."
    }
   ],
   "legal": [
    {
     "h": "Maternity rights",
     "t": "If she is employed and on maternity leave, return-to-work timing can be discussed; a fit note is only relevant if illness affects work after leave ends."
    },
    {
     "h": "Safeguarding",
     "t": "No current risk to the baby is disclosed. Asking about thoughts of harm is routine; significant risk would need same-day action and liaison with the health visitor and perinatal team."
    }
   ],
   "professional": [
    {
     "h": "Consent to share",
     "t": "Seek her agreement before informing the health visitor (GMC Confidentiality, 2017); explain it is for support, not surveillance."
    },
    {
     "h": "Prescribing when breastfeeding",
     "t": "Check any medicine against the BNF for breastfeeding before prescribing, including antidepressants if later needed."
    }
   ],
   "community": [
    {
     "h": "Services",
     "t": "NHS Talking Therapies (self-referral, perinatal priority), health visitor, perinatal mental health team for severe illness, PANDAS Foundation and Mind for peer support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Thoughts of suicide, self-harm or harming the baby",
     "Rapid change in mental state, confusion or psychotic symptoms postnatally",
     "Scalp redness, soreness or patches — not typical postpartum shedding",
     "Symptoms of anaemia or thyroid dysfunction"
    ],
    "psychosocial": [
     "First baby, 4 months, exhausted; feeding hard work",
     "Feels unsupported and fears being a burden",
     "Body image and loss of identity"
    ],
    "ice": [
     "Idea: “It probably sounds trivial.”",
     "Concern: falling apart; not recognising herself",
     "Expectation: to know if the hair will stop — and to be heard"
    ]
   },
   "diagnosis": "“The hair loss is the normal shed that happens after a baby, and it recovers. What worries me more is how low and anxious you’ve been — that sounds like postnatal depression and anxiety, which is common and treatable.”",
   "diagnosisLay": "“During pregnancy your hair gets a ‘pause’ on falling out. After the birth the pause ends and months of hair fall together. It’s a catch-up, not baldness.”",
   "management": {
    "reflectIce": "“You called it the last straw — so let’s deal with the hair, and then with everything underneath it.”",
    "psychosocial": "Validate exhaustion and body-image change; look for practical support; involve the health visitor with consent.",
    "sharedPlan": [
     "Reassurance with timeline for postpartum telogen effluvium",
     "FBC, ferritin, TFTs; treat deficiency, dose per BNF",
     "NHS Talking Therapies self-referral and health visitor support; perinatal team if severe"
    ],
    "safetyNet": [
     "Same-day contact, 111 or 999 for thoughts of harm, sudden change or confusion",
     "Review in two weeks with results and mood"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Hair loss pathway",
    "s": "Visual algorithm · telogen effluvium",
    "href": "algorithms/hair-loss.html"
   },
   {
    "ic": "💠",
    "t": "Postnatal depression",
    "s": "Protocol · NICE CG192",
    "href": "management/postnatal-depression.html"
   },
   {
    "ic": "📋",
    "t": "Perinatal mental health",
    "s": "Case walkthrough · risk and referral",
    "href": "../cases/perinatal-mental-health.html"
   },
   {
    "ic": "💠",
    "t": "Postnatal disorders",
    "s": "Protocol · postpartum thyroiditis",
    "href": "management/postnatal-disorders.html"
   },
   {
    "ic": "💠",
    "t": "Thyroid disease in pregnancy",
    "s": "Protocol · postpartum thyroid",
    "href": "management/thyroid-pregnancy.html"
   }
  ],
  "pitfalls": {
   "intro": "The hair is a ticket. Most candidates handle it well and then close the consultation, missing the postnatal depression and anxiety she has been waiting to be asked about.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Reassuring about postpartum shedding and ending there.",
     "why": "“Does not identify the patient’s underlying agenda.” The mood symptoms are the case.",
     "fix": "Follow “falling apart” with the Whooley and GAD-2 questions."
    },
    {
     "dom": "tasks",
     "fail": "Asking about mood but not about thoughts of harm to herself or the baby.",
     "why": "NICE CG192 expects direct risk questions once mood symptoms are present; omitting them is unsafe.",
     "fix": "“I ask everyone this: any thoughts of harming yourself or the baby?”"
    },
    {
     "dom": "tasks",
     "fail": "No blood tests, or a large unfocused panel.",
     "why": "Delivery blood loss and postpartum thyroiditis are real contributors; over-investigation is not.",
     "fix": "FBC, ferritin and TFTs — and explain why each."
    },
    {
     "dom": "rto",
     "fail": "“All new mums feel like this.”",
     "why": "Normalising dismisses her; she already fears judgement.",
     "fix": "“Lots of mums do feel this — and it’s treatable, so let’s get you support.”"
    },
    {
     "dom": "rto",
     "fail": "Informing the health visitor without asking her.",
     "why": "Acting without consent undermines trust at the moment she has disclosed.",
     "fix": "Explain the purpose and ask: “Would it be okay if I let your health visitor know?”"
    },
    {
     "dom": "gs",
     "fail": "No clear route for help if things get worse.",
     "why": "Non-specific safety-netting is a standard failing statement.",
     "fix": "Name thoughts of harm, sudden change or confusion; same day, 111, 999; review in two weeks."
    }
   ]
  }
 },
 "prison-release-continuity": {
  "stem": {
   "name": "Lee Marwood",
   "age": "41-year-old man",
   "pmh": [
    "New registration — previous records not yet received",
    "Patient reports: psychotic illness, epilepsy, opioid dependence on opioid substitution treatment in custody"
   ],
   "meds": [
    "None in his possession",
    "Reported in custody: an antipsychotic, an antiepileptic and methadone — names and doses unconfirmed"
   ],
   "allergy": "Not yet recorded",
   "recent": "Released from prison yesterday. Registered with the practice this morning. No fixed address recorded.",
   "reason": "Telephone call: “They stopped all my medication at the gate — I’ve got nothing.”"
  },
  "knowledge": {
   "guideline": "NICE NG57 — Physical health of people in prison · NICE QS156 · NICE NG66 · NICE NG217 · NICE CG178 · DHSC Drug misuse and dependence: UK guidelines on clinical management (2017)",
   "summary": "The weeks after release carry a sharply raised risk of death, mostly drug overdose from lost tolerance. Close the medication gap today: verify with prison healthcare, restart the antiepileptic and antipsychotic, route methadone through the drug service, give naloxone and overdose advice, and start housing and money support.",
   "points": [
    {
     "h": "Why this is urgent",
     "t": "Mortality is markedly raised in the first weeks after release, driven by drug-related overdose after tolerance falls in custody, with raised suicide, relapse and mental-health crisis. Treat a medication gap in a recently released person as same-day work."
    },
    {
     "h": "What should have happened at the gate",
     "t": "NICE NG57 and QS156 (statement 5): people leaving prison should go with at least 7 days of prescribed medicines or an FP10 prescription, and complex needs should be planned before release. Leaving with nothing is a care gap to fix, not his fault."
    },
    {
     "h": "Verify, then continue",
     "t": "Phone the releasing prison’s healthcare team today for the medication record, last-dose times and the release summary. Once confirmed, prescribe the antiepileptic (NICE NG217: abrupt withdrawal risks seizures and status) and the antipsychotic (NICE CG178: stopping risks relapse). Doses per BNF and the prison record."
    },
    {
     "h": "Opioid substitution — never blind",
     "t": "Confirm the methadone dose and the time of the last supervised dose with the prison, then hand over the same day to the community drug service (or a GP working under shared care). Missed doses lower tolerance quickly, so restarting at the old dose without checking can be fatal. NICE TA114 supports methadone or buprenorphine as maintenance options."
    },
    {
     "h": "Harm reduction",
     "t": "Explain lost tolerance in plain words: using what he used before could kill him. Make sure he has take-home naloxone (drug services and many pharmacies can supply it without a prescription) and knows not to use alone or mix with alcohol, benzodiazepines or gabapentinoids."
    },
    {
     "h": "Risk assessment",
     "t": "Ask directly about mood, suicidal thoughts, self-harm, voices or paranoia and cravings. NICE NG66 covers mental health for adults in contact with the criminal justice system: continuity of care and liaison with probation and community mental health teams."
    },
    {
     "h": "The social emergency",
     "t": "Homelessness and no money raise every clinical risk. Refer to the local authority housing options team (Homelessness Reduction Act 2017), signpost Universal Credit with an advance, and use care-after-custody services such as NHS England RECONNECT where available."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Lee, it’s Dr Patel from the surgery. Before anything else — can you confirm your date of birth for me, and are you somewhere you can talk?",
    "dom": "gs",
    "why": "Telephone identity check and privacy before a sensitive call"
   },
   {
    "who": "pt",
    "text": "Yeah, I can talk. I got out yesterday and they’ve stopped all my meds. I’ve got nothing, and I’m starting to feel rough."
   },
   {
    "who": "dr",
    "text": "I’m really glad you rang, and you’ve done exactly the right thing. The first days after getting out are when people most need looking after, so I’m treating this as urgent today. Can you tell me what you were taking inside?",
    "dom": "rto",
    "why": "Meets him with respect and urgency, not as a difficult registration"
   },
   {
    "who": "pt",
    "text": "Tablets for my head, tablets for my fits, and a methadone script. I don’t know the names. Nobody gave me anything when I walked out."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "That’s fine — I’ll get the exact names and doses from the prison healthcare team. When did you last have each of them?",
    "dom": "tasks",
    "why": "Establishes last doses to judge seizure, relapse and tolerance risk"
   },
   {
    "who": "pt",
    "text": "Yesterday morning, before I left. I’ve had nothing since."
   },
   {
    "who": "dr",
    "text": "Thank you. The fits tablets first — have you had any fits, jerks or strange turns since yesterday?",
    "dom": "tasks",
    "why": "Screens for early seizure risk from abrupt antiepileptic withdrawal"
   },
   {
    "who": "pt",
    "text": "No. Just shaky and sweaty, and I can’t settle."
   },
   {
    "who": "dr",
    "text": "That sounds like it could be coming off the methadone. Has anyone offered you anything on the street, or have you used since you got out?",
    "dom": "tasks",
    "why": "Recognises withdrawal and asks about use without judgement"
   },
   {
    "who": "pt",
    "text": "Not yet. But I’m not going to lie, it’s in my head. I don’t want to end up back where I was."
   },
   {
    "who": "dr",
    "text": "I really respect you telling me that. Can I ask how you are in yourself — your mood, and whether you’ve had any thoughts of harming yourself or ending your life?",
    "dom": "tasks",
    "why": "Direct suicide and self-harm risk question"
   },
   {
    "who": "pt",
    "text": "I’m scared, and I don’t know what I’m doing. I’m not going to do anything stupid."
   },
   {
    "who": "dr",
    "text": "And the illness your head tablets are for — any voices, or feeling people are against you, since you stopped?",
    "dom": "tasks",
    "why": "Screens for early psychotic relapse"
   },
   {
    "who": "pt",
    "text": "Not right now, no."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said you don’t want to end up back where you were. What worries you most about the next few days?",
    "dom": "rto",
    "why": "Follows the key cue into his fear of relapse"
   },
   {
    "who": "pt",
    "text": "That I’ll get turned away everywhere, end up using, and it all goes wrong again. People look at you different when you’ve been inside."
   },
   {
    "who": "dr",
    "text": "I hear that, and I want you to know you’re not being judged here. You rang for help, and you’re going to get it. You also said you’ve nowhere proper to stay and no money — where are you sleeping tonight?",
    "dom": "rto",
    "why": "Counters the expectation of rejection and moves to the social emergency"
   },
   {
    "who": "pt",
    "text": "I don’t know yet. Nowhere proper."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s how I see it. Three medicines, and none of them should just stop. The fits tablet can’t stop suddenly, because that can bring on seizures. The tablet for your head protects you from getting unwell again. So as soon as the prison confirms the doses — I’m ringing them straight after this call — I’ll get both prescribed today.",
    "dom": "tasks",
    "why": "Triages the antiepileptic and antipsychotic for same-day continuation after verification"
   },
   {
    "who": "pt",
    "text": "And the methadone?"
   },
   {
    "who": "dr",
    "text": "I have to do the methadone the safe way, which means confirming your exact dose and handing you over to the local drug service today, so they can restart it properly. I’m not fobbing you off — getting it wrong is how people die, and I want you around.",
    "dom": "rto",
    "why": "Holds the OST boundary while showing care, so he stays engaged"
   },
   {
    "who": "pt",
    "text": "Fair enough. As long as it’s today."
   },
   {
    "who": "dr",
    "text": "One really important safety thing. Your tolerance will have dropped inside, so using the amount you used before could stop your breathing. Please don’t use — and if you do, never alone, and never with drink or other tablets. I’m going to make sure you have a naloxone kit today. Do you know what that is?",
    "dom": "tasks",
    "why": "Harm reduction: lost tolerance, not using alone, naloxone"
   },
   {
    "who": "pt",
    "text": "I think so — the stuff that brings you round?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Exactly. So here’s my plan, and tell me if it works for you. One: I ring the prison now and prescribe your fits and head tablets to a pharmacy near you. Two: I refer you to the drug service today for the methadone and a naloxone kit. Three: I refer you to the council’s housing team and give you the number for Universal Credit, including an advance payment. Four: I ask the care-after-custody team to contact you. Which pharmacy is easiest?",
    "dom": "tasks",
    "why": "Concrete same-day wrap-around plan: medicines, OST, housing, money, liaison"
   },
   {
    "who": "pt",
    "text": "There’s one near where I am."
   },
   {
    "who": "dr",
    "text": "Good. Is this the best number to reach you on? I’ll ring you back this afternoon once I’ve spoken to the prison, so you’re not left wondering.",
    "dom": "gs",
    "why": "Secures a contact route for a patient with no fixed address"
   },
   {
    "who": "pt",
    "text": "Yeah, keep it on me. Thanks."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you have a fit, or someone you’re with won’t wake up or is breathing strangely, that’s 999. If your head gets bad, or you start thinking about harming yourself, ring NHS 111 and choose the mental health option, or come straight here. Can you tell me back what’s happening today?",
    "dom": "gs",
    "why": "Specific safety-net with crisis routes and teach-back"
   },
   {
    "who": "pt",
    "text": "You call the prison, sort my tablets at the chemist, drug team for the methadone and the naloxone, housing and the money. And 999 if I fit."
   },
   {
    "who": "dr",
    "text": "Perfect. I’d also like to see you in person in the next few days, so we can go through everything properly. You rang frightened of ending up back where you were — my job is to help make sure you don’t.",
    "dom": "rto",
    "why": "Books close follow-up and closes on his own words"
   },
   {
    "who": "pt",
    "text": "Nobody’s said that to me in a long time. Cheers, doc."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Checked identity and privacy by phone; open question; let him list what he was taking without rushing to a registration script.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Where he will sleep tonight, money, phone contact, drug use since release, support from anyone.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “feeling rough” (withdrawal) and “don’t want to end up back where I was” (relapse fear), and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea that he just needs his meds back; fear of relapse and of being turned away; expectation of help today.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Same-day call to prison healthcare for the medication record and last doses; face-to-face review within days.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Opioid withdrawal vs other illness; risk of seizure from antiepileptic withdrawal; early psychotic relapse; low mood.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked directly about suicidal thoughts, self-harm, voices or paranoia, seizures since release, and use since release.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named the problem clearly: an unsafe medication gap in the highest-risk weeks after release, with a social emergency on top.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Verify, then continue antiepileptic and antipsychotic today; methadone via the drug service, never blind; naloxone and overdose advice.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Housing options referral, Universal Credit with advance, care-after-custody liaison, mental-health support.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Call-back the same afternoon, face-to-face review within days, 999 for fit or overdose, crisis line for mental-health deterioration.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Health disadvantage & vulnerabilities",
    "Mental health & addiction",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Lee Marwood",
    "age": "41 years · male",
    "pmh": [
     "New patient — GP2GP and prison records awaited",
     "Self-reported: psychotic illness, epilepsy, opioid dependence (on OST in custody)"
    ],
    "meds": [
     "None held — reported antipsychotic, antiepileptic and methadone (unconfirmed)"
    ],
    "allergy": "Not recorded",
    "recent": "⚠ Released from prison yesterday. Registered today. No fixed address. No discharge summary or medication supply received.",
    "reason": "Telephone call requested: “Left with no medication.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and reassure",
     "d": "Identity and privacy check. Tell him early that you’re treating this as urgent — it buys his trust for the rest of the call."
    },
    {
     "t": "1–5",
     "h": "Triage medicines and risk",
     "d": "Last doses of each medicine; any seizures; withdrawal; use since release; mood, suicide, voices. Where he sleeps tonight."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Follow “I don’t want to end up back where I was” — fear of relapse and of being turned away."
    },
    {
     "t": "6–10",
     "h": "Shared plan",
     "d": "Ring prison today; restart antiepileptic and antipsychotic once verified; drug service for methadone; naloxone; housing, money, care-after-custody."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 for fits or overdose, crisis line, call-back this afternoon, face-to-face in days, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Treats it as a routine registration or books him in next week; prescribes methadone blind or refuses all medication until records arrive; never asks about suicide, use since release or where he sleeps; no naloxone or overdose warning; no call-back.",
    "pass": "Recognises the urgency; verifies with the prison and restarts the antiepileptic and antipsychotic promptly; routes methadone via the drug service; asks about risk; gives overdose advice; signposts housing and benefits; arranges follow-up.",
    "exc": "All of the above, plus: explains the lost-tolerance risk in plain words and secures naloxone; holds the methadone boundary so warmly that he stays engaged; sets a same-day call-back on a working number; links him to care-after-custody support; closes on his own fear and he leaves feeling someone is on his side."
   },
   "avoid": [
    {
     "dont": "“You’ll need to book a new-patient check first, and we can’t do anything until your records come through.”",
     "instead": "“I’m ringing the prison straight after this call so we can get your tablets going today.”",
     "why": "A routine delay in the highest-risk window after release is a safety failure."
    },
    {
     "dont": "“I’ll just write you the same methadone dose you were on.”",
     "instead": "“I’ll confirm your exact dose and get the drug service to restart it with you today — that’s how we keep you safe.”",
     "why": "Prescribing OST blind with falling tolerance risks a fatal overdose."
    },
    {
     "dont": "“Housing isn’t really something the GP can help with.”",
     "instead": "“Where you sleep tonight is part of your health, so I’m referring you to the housing team now.”",
     "why": "The social emergency drives the clinical risk; ignoring it loses Tasks and Relating marks."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Homelessness and destitution",
     "t": "No fixed address and no money make missed doses, drug use and crisis far more likely. Housing, Universal Credit (an advance can be requested) and a working phone number are part of the treatment."
    },
    {
     "h": "Stigma and trust",
     "t": "People leaving prison often expect to be judged or turned away. A respectful, practical first call is what keeps him engaged with services."
    }
   ],
   "legal": [
    {
     "h": "Homelessness Reduction Act 2017",
     "t": "Local authorities must help people who are homeless or threatened with homelessness, and certain public bodies, including prisons and probation, have a duty to refer. The GP can signpost or refer to the housing options team."
    },
    {
     "h": "Controlled drugs",
     "t": "Methadone is a Schedule 2 controlled drug (Misuse of Drugs Regulations 2001). Instalment and supervised dispensing is arranged by the prescribing service; verify the regimen before any prescription."
    },
    {
     "h": "Naloxone supply",
     "t": "Since 2015, UK regulations allow drug services to supply naloxone without a prescription for use in an emergency. Make sure he leaves with a kit or knows where to get one today."
    }
   ],
   "professional": [
    {
     "h": "Registration and continuity",
     "t": "GP registration does not need proof of address. GMC Good Medical Practice 2024: treat patients fairly, without discrimination, and make sure care continues when responsibility passes between services."
    },
    {
     "h": "Safe prescribing",
     "t": "GMC prescribing guidance: prescribe only when you have enough information about the patient’s current medicines. That is the reason to verify with the prison today, not a reason to wait."
    }
   ],
   "community": [
    {
     "h": "Services",
     "t": "Community drug and alcohol service, care-after-custody liaison (NHS England RECONNECT where commissioned), probation, community mental health team, homeless health services and local charities."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Seizures, jerks or funny turns since the antiepileptic stopped",
     "Suicidal thoughts, self-harm, voices or paranoia returning",
     "Use of opioids or other drugs since release — overdose risk from lost tolerance"
    ],
    "psychosocial": [
     "Where he is sleeping tonight, money, and a working phone number",
     "Who else is involved: probation, drug service, anyone supportive",
     "Cravings, withdrawal and what he has been offered since release"
    ],
    "ice": [
     "Idea: “I just need my meds back.”",
     "Concern: relapse, “ending up back where I was”, and being turned away",
     "Expectation: help today, not another queue"
    ]
   },
   "diagnosis": "Name it plainly: “You’ve been left without three medicines that can’t safely stop, at the time people are most at risk after release. That’s urgent, and we’re fixing it today.”",
   "diagnosisLay": "“Think of the first weeks out as walking a narrow bridge. Your medicines, somewhere to stay and people on your side are the handrails. Right now you’ve got none, so we’re putting them back up today.”",
   "management": {
    "reflectIce": "“You told me you don’t want to end up back where you were. Everything in this plan is aimed at exactly that.”",
    "psychosocial": "Housing options referral, Universal Credit with an advance, care-after-custody liaison, and a call-back to the number he gives — he has nowhere fixed to receive letters.",
    "sharedPlan": [
     "Ring prison healthcare today for the medication record and last doses",
     "Prescribe the antiepileptic and antipsychotic once verified; methadone via the drug service, never blind",
     "Naloxone kit and lost-tolerance advice; mental-health risk plan"
    ],
    "safetyNet": [
     "999 for a seizure, or if someone is unrousable or breathing abnormally",
     "NHS 111 mental health option or the surgery for low mood, suicidal thoughts or relapse; call-back this afternoon and review within days"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Drug dependence",
    "s": "Case walkthrough · opioid substitution",
    "href": "../cases/drug-dependence.html"
   },
   {
    "ic": "💠",
    "t": "Opioid dependence",
    "s": "Management protocol · OST and naloxone",
    "href": "management/opioid-dependence.html"
   },
   {
    "ic": "📋",
    "t": "Epilepsy",
    "s": "Case walkthrough · NICE NG217",
    "href": "../cases/epilepsy.html"
   },
   {
    "ic": "🗺️",
    "t": "Psychosis",
    "s": "Visual algorithm · relapse risk",
    "href": "algorithms/psychosis.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is not about knowing drug names. It is failed by treating a life-threatening gap as routine admin, by prescribing unsafely under pressure, or by ignoring the homelessness that drives the risk.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Booking a routine new-patient check and waiting for records to arrive by post.",
     "why": "“Did not recognise the urgency of the presentation.” Overdose deaths cluster in the first weeks after release; a seizure can follow abrupt antiepileptic withdrawal.",
     "fix": "Say it and do it: “I’m ringing the prison now and I’ll call you back this afternoon.” Same-day verification, same-day prescribing."
    },
    {
     "dom": "tasks",
     "fail": "Writing the methadone at the dose he remembers to be helpful.",
     "why": "Unverified OST with falling tolerance can kill. Examiners mark this as unsafe management however kind the intent.",
     "fix": "Verify the dose and last-dose time with the prison and hand over to the drug service today. Explain why, so the boundary reads as care."
    },
    {
     "dom": "tasks",
     "fail": "No question about suicide, voices or drug use since release.",
     "why": "“Did not assess risk.” He has a psychotic illness, has stopped treatment and is homeless — all risk multipliers.",
     "fix": "Ask directly and kindly: “Any thoughts of harming yourself? Anything telling you people are against you? Have you used since you got out?”"
    },
    {
     "dom": "tasks",
     "fail": "Never mentioning naloxone or lost tolerance.",
     "why": "Harm reduction is a core management point in this station and one of the simplest life-saving actions available.",
     "fix": "“Your tolerance has dropped — the old amount could stop your breathing. Never use alone, and let’s get you a naloxone kit today.”"
    },
    {
     "dom": "rto",
     "fail": "A guarded, procedural tone — “we have policies about controlled drugs” — that confirms his fear of being judged.",
     "why": "“Did not respond to the patient’s concerns.” If he disengages today, he may use tonight.",
     "fix": "Lead with warmth: “You’ve done the right thing ringing, and you’re not being judged.” Then explain the safety steps as care for him."
    },
    {
     "dom": "gs",
     "fail": "Ending the call with no working contact route for a man with no address.",
     "why": "“Follow-up not arranged.” A plan that depends on a letter or an unanswered number will not happen.",
     "fix": "Confirm the phone number, the pharmacy he can reach, a call-back time today, and a face-to-face review within days."
    }
   ]
  }
 },
 "reflux-ppi-exit": {
  "stem": {
   "name": "Trevor Nash",
   "age": "57-year-old man",
   "pmh": [
    "Reflux — on omeprazole for about 8 years (started by a previous GP)"
   ],
   "meds": [
    "Omeprazole 20 mg daily (repeat prescription)"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "Repeat request for omeprazole flagged for medication review — no documented PPI review, endoscopy or H. pylori test on record. Occupation: lorry driver.",
   "reason": "Video medication review, booked reluctantly. “Just need my repeat.”"
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) — oesophageal and stomach cancer · NICE CG184 (2014, updated 2019) — GORD and dyspepsia in adults · MHRA Drug Safety Update (April 2012; September 2015) — PPIs · NHS England Faster Diagnosis Standard (October 2023)",
   "summary": "A long-term PPI repeat is a review, not a rubber stamp — and the first job of the review is to screen for alarm features. New food sticking and unintentional weight loss at 57 meet NICE NG12 (updated April 2026) for a suspected cancer pathway referral for oesophageal cancer (since the 2025 NICE NG12 (updated April 2026) amendment this replaces the urgent direct-access endoscopy route for these features). Keep the PPI going and refer now; step-down belongs to later.",
   "points": [
    {
     "h": "The NICE NG12 (updated April 2026) criterion",
     "t": "NICE NG12 (updated April 2026), recommendation 1.2.1 as amended in the 2025 update: refer people using a suspected cancer pathway referral for oesophageal cancer if they have dysphagia, or are aged 55 and over with weight loss and any of upper abdominal pain, reflux or dyspepsia (before the 2025 amendment this was urgent direct-access endoscopy). Mr Nash meets both limbs. The non-urgent direct-access endoscopy criteria are separate: haematemesis at any age, and, at 55 or over, treatment-resistant dyspepsia, upper abdominal pain with low haemoglobin, or raised platelet count with nausea or vomiting."
    },
    {
     "h": "Ask the alarm questions directly",
     "t": "Dysphagia, weight loss, upper abdominal pain or mass, persistent vomiting, haematemesis or melaena, and anaemia. People on long-term acid suppression often adapt to symptoms — cutting food smaller, eating slowly — and don’t volunteer them."
    },
    {
     "h": "Long-term PPI review",
     "t": "NICE CG184: offer people on long-term treatment for dyspepsia symptoms an annual review, encouraging them to step down or stop where appropriate, and use the lowest effective dose or as-needed use. Long-standing reflux is also a risk factor for Barrett’s oesophagus."
    },
    {
     "h": "PPI safety",
     "t": "MHRA Drug Safety Update April 2012: hypomagnesaemia with long-term use and a small increased risk of fracture; September 2015: a very low risk of subacute cutaneous lupus. These justify review — but never before alarm features are excluded."
    },
    {
     "h": "H. pylori and the PPI now",
     "t": "NICE CG184: H. pylori breath or stool testing needs a 2-week PPI washout. With a suspected cancer referral and endoscopy pending, keep the PPI going — the endoscopy team can test for H. pylori — and don’t delay the referral for a washout."
    },
    {
     "h": "What the pathway means",
     "t": "Suspected cancer pathway referral (still widely called the two-week wait). The NHS England Faster Diagnosis Standard (October 2023) aims for cancer to be diagnosed or ruled out within 28 days of referral."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Morning Mr Nash, I’m Dr Lee. Can you see and hear me okay, and are you somewhere you can talk? … Great. What would you like from today?",
    "dom": "rto",
    "why": "Checks the set-up and opens with his agenda"
   },
   {
    "who": "pt",
    "text": "Look, I know it’s a review, but I just need my omeprazole renewed. I’ve been on it for years, it works, I don’t want a song and dance. I’ve got a delivery window."
   },
   {
    "who": "dr",
    "text": "I hear you — you’re busy and the tablet has worked. I will sort your prescription today, so you won’t run out. I do need a few minutes to check it’s still the right thing after eight years. Can we keep it quick and focused?",
    "dom": "gs",
    "why": "Reassures about supply, then agrees a focused review"
   },
   {
    "who": "pt",
    "text": "Go on. Quick as you can."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "What was it first started for, and how is the reflux now?",
    "dom": "tasks",
    "why": "Establishes indication and current control"
   },
   {
    "who": "pt",
    "text": "Heartburn, years back. Another doctor started it. It’s mostly fine now."
   },
   {
    "who": "dr",
    "text": "Any trouble swallowing — food sticking on the way down, or needing a drink to wash it through?",
    "dom": "tasks",
    "why": "Asks the dysphagia question directly"
   },
   {
    "who": "pt",
    "text": "…Funny you ask. The last few weeks, bread and meat sometimes feel like they stick. I just take smaller bites. It’s nothing."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me — that’s important. Is it getting worse, and is it solids, liquids, or both?",
    "dom": "tasks",
    "why": "Characterises the dysphagia"
   },
   {
    "who": "pt",
    "text": "Mostly solids. Maybe a bit worse. Drinks are fine."
   },
   {
    "who": "dr",
    "text": "Have you lost any weight without trying?",
    "dom": "tasks",
    "why": "Screens weight loss"
   },
   {
    "who": "pt",
    "text": "Trousers are a bit looser. I’ve not weighed myself. I hadn’t really thought about it."
   },
   {
    "who": "dr",
    "text": "Any vomiting, vomiting blood, black stools, or pain in your upper tummy?",
    "dom": "tasks",
    "why": "Screens other alarm features"
   },
   {
    "who": "pt",
    "text": "No. None of that."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said “it’s nothing” — but you mentioned it quickly when I asked. What’s been going through your mind about it?",
    "dom": "rto",
    "why": "Gently surfaces the minimised symptom"
   },
   {
    "who": "pt",
    "text": "I don’t know. I suppose I didn’t want to think about it. I can’t afford time off. If I’m off the road, I lose money."
   },
   {
    "who": "dr",
    "text": "That’s a real pressure, and I’m glad you’ve told me. What were you hoping would happen today?",
    "dom": "rto",
    "why": "Acknowledges the financial fear and elicits expectations"
   },
   {
    "who": "pt",
    "text": "Just the repeat, honestly. And back to work."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s my honest view. Food sticking that’s new over a few weeks, with some weight loss, needs a camera test of your gullet and stomach. Most of the time it’s something like a narrowing from years of reflux, which can be treated. But it can occasionally be a cancer, and the guidelines are clear that anyone with swallowing problems should have that test urgently.",
    "dom": "tasks",
    "why": "Applies NICE NG12 (updated April 2026) and explains honestly"
   },
   {
    "who": "pt",
    "text": "Cancer? I only came for a prescription."
   },
   {
    "who": "dr",
    "text": "I know, and I’m sorry it’s turned into more than that. I’m not saying you have cancer. I’m saying this is the kind of symptom we never sit on. The test is a thin camera down the throat, usually one morning, and you should be contacted soon about an appointment. The aim is to have an answer within four weeks.",
    "dom": "rto",
    "why": "Conveys urgency without catastrophising"
   },
   {
    "who": "pt",
    "text": "One morning? I can maybe swap a shift."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "That would help. If you have sedation, you can’t drive afterwards, including your lorry, so you’d need a lift home and the rest of that day off — the unit will tell you exactly. You’d usually self-certify for a short absence; if you need a fit note beyond that, we’ll do one.",
    "dom": "rto",
    "why": "Problem-solves work barriers honestly"
   },
   {
    "who": "pt",
    "text": "Right. And my omeprazole?"
   },
   {
    "who": "dr",
    "text": "Keep taking it exactly as now — I’m renewing it today. This isn’t the moment to stop or reduce it. The endoscopy team can check for a stomach bug called H. pylori during the test, so there’s no need to come off it first.",
    "dom": "tasks",
    "why": "Continues the PPI and does not delay for washout"
   },
   {
    "who": "dr",
    "text": "Once we have the result, we’ll do the proper review of whether you still need it long term, the dose, and the checks that go with it — like a magnesium level, because long-term use can lower it.",
    "dom": "tasks",
    "why": "Signals the stewardship plan for later"
   },
   {
    "who": "pt",
    "text": "Okay. That makes sense."
   },
   {
    "who": "dr",
    "text": "I’d also like your weight checked properly and a blood count — could you pop in to the nurse this week at a time that suits your shifts?",
    "dom": "tasks",
    "why": "Arranges weight and FBC face to face"
   },
   {
    "who": "pt",
    "text": "Early morning, maybe. Before I start."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "We’ll find you one. Now the important bit: if food completely sticks and won’t go down, you can’t swallow your own saliva, you vomit blood, or pass black, tarry stools — that’s A&E or 999, not waiting for the appointment.",
    "dom": "gs",
    "why": "Specific emergency safety-net"
   },
   {
    "who": "pt",
    "text": "Got it."
   },
   {
    "who": "dr",
    "text": "And if you haven’t heard about the appointment within a week, ring us and we’ll chase it. To check I’ve explained it well — what will you tell someone at home tonight?",
    "dom": "rto",
    "why": "Closes the referral loop and checks understanding"
   },
   {
    "who": "pt",
    "text": "That the food sticking needs a camera test soon, probably not cancer but they have to check. Keep taking the omeprazole, get weighed this week, and if I can’t swallow at all or there’s blood, go to A&E."
   },
   {
    "who": "dr",
    "text": "Perfect. You did the right thing telling me. Anything else before you get back on the road?",
    "dom": "gs",
    "why": "Shares the floor"
   },
   {
    "who": "pt",
    "text": "No. Thanks, doc. Not what I expected, but thanks."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Acknowledged the wish for a quick repeat and his time pressure; agreed a focused review rather than rubber-stamping.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Lorry driver, delivery windows, what time off means financially, practicalities of attending.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Heard the hesitation (“funny you ask”, “it’s nothing”) and followed it to dysphagia and weight loss.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (the tablet works, review is a formality); concern (time off work, not wanting to think about it); expectation (a repeat and back to work).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Suspected cancer pathway referral for oesophageal cancer (usually straight to endoscopy); in-person weight and FBC; H. pylori at endoscopy; magnesium when reviewing long-term PPI.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Peptic stricture vs oesophageal or gastric cancer vs motility disorder; uncomplicated GORD only once alarm features excluded.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked dysphagia, weight loss, vomiting, bleeding, upper abdominal pain; applied NICE NG12 (updated April 2026): dysphagia at any age or 55+ with weight loss and reflux → suspected cancer pathway referral (replaced urgent direct-access endoscopy in the 2025 NICE NG12 (updated April 2026) amendment).",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "New progressive solid dysphagia with weight loss on a background of long-standing reflux — suspected cancer pathway referral and endoscopy needed.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Referral made now; PPI continued and prescribed; no washout delay; work barriers problem-solved; step-down deferred until results.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Long-term PPI stewardship (NICE CG184 annual review; MHRA April 2012 and September 2015 advice) planned for after the endoscopy.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Complete dysphagia, haematemesis, melaena → A&E or 999; chase if no appointment in a week; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Trevor Nash",
    "age": "57 years · male",
    "pmh": [
     "Reflux (≈8 years)"
    ],
    "meds": [
     "Omeprazole 20 mg OD — repeat, no review recorded"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Omeprazole repeat flagged for medication review. No endoscopy, H. pylori test or PPI review on file. Lorry driver.",
    "reason": "Medication review. “Just sort the repeat — I’ve got a delivery window.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Reassure and focus",
     "d": "He wants the repeat and has a delivery window. Promise the prescription won’t lapse, then ask for a few focused minutes."
    },
    {
     "t": "1–4",
     "h": "Alarm features first",
     "d": "Indication and current control, then ask directly about swallowing, weight loss, vomiting, bleeding and upper abdominal pain."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "He has been minimising the food sticking; time off costs him money. Name both."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Dysphagia plus weight loss at 57 = suspected cancer pathway referral for oesophageal cancer (NICE NG12 (updated April 2026)). Keep the PPI. Sedation and driving, time off, fit note. Weight and FBC this week."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Complete dysphagia, blood, black stools — A&E or 999. Chase if no appointment in a week. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Renews the omeprazole without asking about alarm features; or lectures on PPI risks and stops the PPI; misses the dysphagia and weight loss; delays referral for an H. pylori washout or a “trial of higher dose”.",
    "pass": "Screens alarm features, elicits dysphagia and weight loss, makes a suspected cancer pathway referral (usually straight to endoscopy), continues the PPI and safety-nets.",
    "exc": "All of the above, plus: hears the hesitation and gently surfaces the fear he has been avoiding; explains urgency honestly without saying “cancer” as a verdict; solves the work barrier (sedation and driving, fit note, early appointments); signals the long-term PPI review for after the result; closes the referral loop; teach-back."
   },
   "avoid": [
    {
     "dont": "“Right, I’ll just renew that for you.”",
     "instead": "“I’ll make sure you don’t run out — and I need a few minutes to check it’s still right after eight years.”",
     "why": "Rubber-stamping is exactly how the dysphagia gets missed."
    },
    {
     "dont": "“We should stop the omeprazole — long-term PPIs cause osteoporosis.”",
     "instead": "“Keep taking it as now. We’ll look at the long-term plan once we have the camera result.”",
     "why": "Stopping or stepping down now confuses the picture and leaves him symptomatic; stewardship comes after the alarm is dealt with."
    },
    {
     "dont": "“It could be cancer, so I’m referring you on the cancer pathway.”",
     "instead": "“Most causes are treatable, like a narrowing from reflux, but swallowing problems always get a camera test quickly.”",
     "why": "Honest but proportionate framing keeps a frightened man engaged."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Can’t afford time off",
     "t": "A lorry driver who loses money when off the road may avoid appointments. Offer early slots, give notice of what the endoscopy day involves, and discuss fit notes."
    },
    {
     "h": "Minimisation",
     "t": "Adapting to symptoms (taking smaller bites) is common in men who don’t want to be ill. Ask directly and non-judgementally."
    }
   ],
   "legal": [
    {
     "h": "Driving after sedation",
     "t": "If he has sedation he must not drive — including his lorry — for the period the unit advises. No DVLA notification is needed for the investigation itself."
    },
    {
     "h": "Fit notes",
     "t": "Employees self-certify for the first 7 days of sickness absence; a fit note is needed after that."
    }
   ],
   "professional": [
    {
     "h": "Repeat prescribing governance",
     "t": "Eight years of an unreviewed repeat is a systems issue. GMC Good Medical Practice (2024): prescribe safely and review regularly. Record the review, the alarm features and the referral."
    },
    {
     "h": "Safety-netting the referral",
     "t": "Tell him when to expect contact and to ring if he hasn’t heard; the practice should check the referral was received."
    }
   ],
   "community": [
    {
     "h": "Information and support",
     "t": "Guts UK for patient information on endoscopy; Heartburn Cancer UK for information on swallowing problems and Barrett’s; Citizens Advice if time off affects income."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Dysphagia at any age — suspected cancer pathway referral for oesophageal cancer (NICE NG12 (updated April 2026))",
     "55 and over with weight loss plus upper abdominal pain, reflux or dyspepsia — suspected cancer pathway referral",
     "Complete dysphagia, unable to swallow saliva, haematemesis, melaena — same-day or emergency",
     "Persistent vomiting, anaemia, upper abdominal mass"
    ],
    "psychosocial": [
     "Lorry driver who can’t afford time off; delivery windows",
     "Minimising symptoms; not wanting to think about them",
     "Practicalities of an endoscopy day"
    ],
    "ice": [
     "Idea: the tablet works; the review is a formality",
     "Concern: time off work and income; unspoken fear about the swallowing",
     "Expectation: a quick repeat and back on the road"
    ]
   },
   "diagnosis": "New, progressive solid-food dysphagia over a few weeks with unintentional weight loss in a 57-year-old man with 8 years of reflux. Oesophageal or gastric cancer must be excluded; peptic stricture is a common alternative. Meets NICE NG12 (updated April 2026) for a suspected cancer pathway referral for oesophageal cancer (usually straight-to-test endoscopy).",
   "diagnosisLay": "“Food sticking that’s new, with some weight loss, means we need to look inside your gullet with a camera. Often it’s a narrowing from years of acid, which can be stretched or treated. Sometimes it’s something more serious, and that’s why we check quickly rather than wait.”",
   "management": {
    "reflectIce": "“You came for a repeat and you’re worried about time off. I’ve renewed the tablet, and I’ll help you fit the test around work — but I can’t let the swallowing go unchecked.”",
    "psychosocial": "Make it workable: early nurse appointment for weight and bloods, clear information about the endoscopy morning, a lift home after sedation, and a fit note if needed.",
    "sharedPlan": [
     "Suspected cancer pathway referral for oesophageal cancer today (NICE NG12 (updated April 2026)), usually straight to endoscopy",
     "Continue omeprazole at the current dose; no washout — H. pylori can be tested at endoscopy",
     "Weight and FBC this week",
     "Long-term PPI review after the result: indication, step-down, magnesium (NICE CG184; MHRA DSU April 2012)"
    ],
    "safetyNet": [
     "Food completely stuck, can’t swallow saliva, vomiting blood, black tarry stools — A&E or 999",
     "Ring if no appointment within a week; review with the endoscopy result"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Dysphagia",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) upper GI referral",
    "href": "algorithms/dysphagia.html"
   },
   {
    "ic": "💠",
    "t": "PPI prescribing",
    "s": "Protocol · review and step-down",
    "href": "management/ppi-prescribing.html"
   },
   {
    "ic": "💠",
    "t": "GORD",
    "s": "Protocol · reflux and when to scope",
    "href": "management/gord.html"
   },
   {
    "ic": "📋",
    "t": "Dyspepsia",
    "s": "Case walkthrough · NICE CG184 and NICE NG12 (updated April 2026)",
    "href": "../cases/dyspepsia.html"
   }
  ],
  "pitfalls": {
   "intro": "This looks like a medication review and is really a cancer-safety station. Candidates either rubber-stamp the repeat, or spend the time on PPI side effects and miss the swallowing.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Renewing the repeat without asking about swallowing or weight.",
     "why": "The patient won’t volunteer the dysphagia. Missing it is a serious clinical-management fail.",
     "fix": "Ask the alarm questions directly in every PPI review: swallowing, weight, vomiting, bleeding, pain."
    },
    {
     "dom": "tasks",
     "fail": "Stopping or stepping down the PPI today.",
     "why": "Stewardship is correct in principle but wrong now — it leaves him symptomatic and distracts from the urgent referral.",
     "fix": "Continue the PPI, refer, and review long-term use after the result."
    },
    {
     "dom": "tasks",
     "fail": "Arranging an H. pylori test with a 2-week washout first.",
     "why": "Delays an urgent referral. NICE CG184 test-and-treat applies to uninvestigated dyspepsia without alarm features.",
     "fix": "Refer now; H. pylori can be tested at endoscopy."
    },
    {
     "dom": "rto",
     "fail": "Accepting “it’s nothing” and moving on.",
     "why": "His minimisation is the hidden agenda. Examiners look for the cue being followed.",
     "fix": "“You mentioned it quickly when I asked — what’s been going through your mind?”"
    },
    {
     "dom": "rto",
     "fail": "Ignoring the delivery window and income worry.",
     "why": "A plan he can’t attend isn’t a plan; dismissing it loses rapport.",
     "fix": "Early appointments, sedation and driving advice, fit note if needed."
    },
    {
     "dom": "gs",
     "fail": "Referring without telling him what to watch for or when to chase.",
     "why": "Non-specific safety-netting and no closed loop are standard failing feedback.",
     "fix": "Name complete dysphagia, haematemesis and melaena; “ring us if you haven’t heard within a week”."
    }
   ]
  }
 },
 "soft-tissue-sarcoma-lump": {
  "stem": {
   "name": "Connor Bates",
   "age": "42-year-old man",
   "pmh": [
    "Nothing significant recorded"
   ],
   "meds": [
    "None recorded"
   ],
   "allergy": "No allergies recorded",
   "recent": "No recent consultations. Warehouse supervisor. Video appointment: “lump on thigh”.",
   "reason": "Lump on the front of his right thigh for about 4 months; has got bigger."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · British Sarcoma Group UK soft tissue sarcoma guideline (2024) · GMC Good medical practice (2024)",
   "summary": "An unexplained lump that is increasing in size in an adult should be considered for an urgent direct-access ultrasound within 2 weeks (NICE NG12 (updated April 2026)), with a suspected cancer pathway referral if the scan suggests sarcoma or is uncertain with ongoing concern. Don’t call it a lipoma from the chair.",
   "points": [
    {
     "h": "The NICE NG12 (updated April 2026) criterion",
     "t": "NICE NG12 (updated April 2026): consider an urgent direct-access ultrasound (within 2 weeks) to assess for soft-tissue sarcoma in adults with an unexplained lump that is increasing in size."
    },
    {
     "h": "After the scan",
     "t": "NICE NG12 (updated April 2026): consider a suspected cancer pathway referral (appointment within 2 weeks) for adults if the ultrasound suggests soft-tissue sarcoma, or if the findings are uncertain and clinical concern persists."
    },
    {
     "h": "Children are different",
     "t": "NICE NG12 (updated April 2026): in children and young people, consider a very urgent direct-access ultrasound (within 48 hours) for an unexplained lump that is increasing in size. The very urgent (48-hour) X-ray for unexplained bone swelling or pain is also a children and young people recommendation; in adults, NICE NG12 (updated April 2026) advises a suspected cancer pathway referral if an X-ray suggests bone sarcoma."
    },
    {
     "h": "Features that add suspicion",
     "t": "Lipomas are usually soft, superficial, mobile, small and stable. Growth is the NICE NG12 (updated April 2026) trigger; the British Sarcoma Group guideline (2024) adds size over 5 cm, deep to the deep fascia, pain and recurrence after excision as suspicious features. Absence of pain does not reassure."
    },
    {
     "h": "Examine in person",
     "t": "Size, depth, consistency and mobility cannot be judged on video. Arrange a face-to-face examination and measure the lump — a recorded size gives a baseline for comparison. Do not let the examination delay the scan request."
    },
    {
     "h": "Don’t cut it out in the surgery",
     "t": "An enlarging deep lump should not be excised or biopsied in primary care; an unplanned excision of a sarcoma can compromise later surgery. Image first."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Connor, I’m Dr Hughes. What’s brought you in today?",
    "dom": "rto",
    "why": "Open start"
   },
   {
    "who": "pt",
    "text": "I’ve got a lump on me thigh. It’s just a fatty lump, isn’t it? My mate’s got loads. Doesn’t hurt. It has got a bit bigger over the last few months, I’ll admit. Can you just tell me it’s harmless so my missus stops going on? Don’t want to waste your time."
   },
   {
    "who": "dr",
    "text": "You’re not wasting my time. You’ve told me something important already — that it’s got bigger. Can I ask a few questions about it, then we’ll decide what to do together?",
    "dom": "gs",
    "why": "Picks up the key cue; sets the agenda"
   },
   {
    "who": "pt",
    "text": "Go on."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Where exactly is it, and when did you first notice it?",
    "dom": "tasks",
    "why": "Site and duration"
   },
   {
    "who": "pt",
    "text": "Front of my right thigh. About four months ago."
   },
   {
    "who": "dr",
    "text": "How much bigger has it got? Roughly how big is it now — compared with, say, a golf ball?",
    "dom": "tasks",
    "why": "Quantifies growth and size"
   },
   {
    "who": "pt",
    "text": "It’s definitely grown. I’d say it’s about that now, maybe a bit more."
   },
   {
    "who": "dr",
    "text": "When you press on it, is it soft and squashy, or firm? Does it move around under the skin, or feel stuck down deeper?",
    "dom": "tasks",
    "why": "Consistency and depth — lipoma versus sarcoma features"
   },
   {
    "who": "pt",
    "text": "Firm. And it doesn’t really move. It feels quite deep."
   },
   {
    "who": "dr",
    "text": "Any injury there before it appeared? Any other lumps anywhere, weight loss, night sweats or feeling unwell?",
    "dom": "tasks",
    "why": "Alternative causes and systemic features"
   },
   {
    "who": "pt",
    "text": "No knock I can think of. Nothing else. I feel fine."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said your partner keeps going on about it. What do you think she’s worried about?",
    "dom": "rto",
    "why": "Uses the partner’s concern to surface his own"
   },
   {
    "who": "pt",
    "text": "She reckons it shouldn’t be growing. (Pause.) To be fair, it’s been bugging me too. I just didn’t want a fuss."
   },
   {
    "who": "dr",
    "text": "That makes sense — nobody wants a fuss. What were you hoping I’d do today?",
    "dom": "rto",
    "why": "Explores expectations"
   },
   {
    "who": "pt",
    "text": "Tell me it’s a fatty lump and that’s that."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’ll be honest with you. Most lumps like this are fatty lumps. But the ones that sit just under the skin are usually soft, small and move about. Yours is firm, deep, doesn’t move, and it’s growing. I can’t tell from here, or even by feeling it, which it is.",
    "dom": "tasks",
    "why": "Explains the discriminating features; no diagnosis from the chair"
   },
   {
    "who": "pt",
    "text": "So what could it be?"
   },
   {
    "who": "dr",
    "text": "Most likely still something harmless. But rarely a growing lump like this is a type of tumour in the soft tissues, which can look just like a fatty lump from the outside. The only safe way to tell is a scan.",
    "dom": "tasks",
    "why": "Honest, proportionate explanation of the concern"
   },
   {
    "who": "dr",
    "text": "So the NICE NG12 (updated April 2026) cancer-referral guideline says that when a lump like this is growing, we arrange an ultrasound scan urgently, within two weeks. If it’s reassuring, you and your partner can relax. If there’s any doubt, you go straight to the specialist team.",
    "dom": "tasks",
    "why": "Applies NICE NG12 (updated April 2026): urgent direct-access USS and onward pathway"
   },
   {
    "who": "pt",
    "text": "Two weeks. Right. Can’t you just cut it out here?"
   },
   {
    "who": "dr",
    "text": "Good question, but no — if it were the rarer kind, cutting it out here could make the specialists’ job harder. Scan first is the safe order.",
    "dom": "tasks",
    "why": "Avoids unplanned excision"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’d also like to see you in person to examine and measure it, so we have an exact size on record. Could you come in this week? The scan request goes today either way.",
    "dom": "tasks",
    "why": "Face-to-face exam without delaying imaging"
   },
   {
    "who": "pt",
    "text": "I can pop in after my shift."
   },
   {
    "who": "dr",
    "text": "Great. Will the scan appointment be a problem with work?",
    "dom": "rto",
    "why": "Practical barriers to attendance"
   },
   {
    "who": "pt",
    "text": "I’ll sort it. I’m a supervisor, I can swap a shift."
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you haven’t had a scan date within a week, ring us. If it grows quickly, becomes painful, or you notice other lumps before then, get in touch sooner. When the result comes back, I’ll go through it with you.",
    "dom": "gs",
    "why": "Specific safety-net and owned follow-up"
   },
   {
    "who": "dr",
    "text": "What will you tell your partner tonight?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "That the doc didn’t say it’s a fatty lump — she wants it scanned within two weeks because it’s growing, and it’s probably fine but we’ll know."
   },
   {
    "who": "dr",
    "text": "Exactly. And tell her she was right to nudge you. See you after your shift.",
    "dom": "rto",
    "why": "Affirms; closes warmly"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; noticed the growth in his opening and made it the focus.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Warehouse work and shifts, reluctance to make a fuss, partner’s concern.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "“It has got a bit bigger” and “my missus going on” both explored.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a lipoma like his mate’s), concern (quietly worried it is growing), expectation (to be told it is harmless).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Urgent direct-access ultrasound within 2 weeks; in-person exam with measurement.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Lipoma, other benign lumps, haematoma, lymphadenopathy versus soft-tissue sarcoma; asked about size, depth, firmness, mobility, trauma and systemic features.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Recognised growth as the NICE NG12 (updated April 2026) trigger and that painlessness does not reassure.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Unexplained enlarging, firm, deep thigh lump meeting NICE NG12 (updated April 2026) criterion for urgent ultrasound.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Scan requested today; onward suspected cancer pathway referral if suspicious or uncertain; no excision in primary care.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Planned around shifts; involved his partner’s view without colluding.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Chase if no scan date in a week, changes to report, result reviewed with him.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Connor Bates",
    "age": "42-year-old man",
    "pmh": [
     "Nothing significant recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "No allergies recorded",
    "recent": "No recent consultations. Warehouse supervisor. Video appointment: “lump on thigh”.",
    "reason": "Lump on the front of his right thigh for about 4 months; has got bigger."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open & listen",
     "d": "He buries the key fact — “it’s got bigger” — inside a request for reassurance. Pick it up."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Site, duration, growth, size, consistency, depth, mobility, trauma, other lumps, systemic features."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "Use the partner’s nagging to reach his own quiet worry."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Why you can’t call it a lipoma; urgent ultrasound within 2 weeks; no excision; in-person exam and measurement."
    },
    {
     "t": "10–12",
     "h": "Safety-net & close",
     "d": "Chase if no date, changes to report, teach-back, result review."
    }
   ],
   "wordPics": {
    "fail": "Calls it a lipoma on video and says to keep an eye on it; or offers to remove it in the surgery; or frightens him with “it could be cancer” and no plan.",
    "pass": "Establishes growth, depth and firmness, applies the NICE NG12 (updated April 2026) urgent-ultrasound criterion, arranges examination and safety-nets.",
    "exc": "All of that, plus: surfaces his quiet worry through the partner; explains why a scan beats a hopeful guess; explains why not to cut it out; plans around shifts; teach-back and owned follow-up."
   },
   "avoid": [
    {
     "dont": "“Sounds like a lipoma — keep an eye on it and come back if it changes.”",
     "instead": "“Because it’s growing, I want a scan within two weeks rather than guess.”",
     "why": "It has already changed; watchful waiting for an enlarging lump is outside NICE NG12 (updated April 2026)."
    },
    {
     "dont": "“We can book you in to have it cut out here.”",
     "instead": "“Scan first — if it’s the rarer kind, cutting it out here could make the specialists’ job harder.”",
     "why": "Unplanned excision of a sarcoma can compromise definitive surgery."
    },
    {
     "dont": "“This could be a sarcoma, which is a cancer.”",
     "instead": "“Most likely it’s harmless, but a growing lump needs a scan to be sure.”",
     "why": "Honest without delivering a diagnosis you do not have."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work",
     "t": "A warehouse supervisor on shifts may struggle to attend appointments; he can usually swap shifts. If he later needs surgery on the thigh, heavy lifting and time off will need planning."
    },
    {
     "h": "Masculine minimisation",
     "t": "Men who “don’t want a fuss” often present late. The partner’s concern is a lever, not a nuisance."
    }
   ],
   "legal": [
    {
     "h": "Fit notes",
     "t": "Not needed now. If investigation or treatment stops him working for more than 7 days, a fit note can be issued, including advice on adjusted or lighter duties."
    }
   ],
   "professional": [
    {
     "h": "Honesty",
     "t": "GMC Good medical practice (2024): do not give false reassurance to please a patient; share uncertainty and a plan to resolve it."
    },
    {
     "h": "Remote consulting limits",
     "t": "A lump’s size, depth and mobility need an in-person examination. Document why imaging was requested before examination and arrange it promptly."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Sarcoma UK provides information and a support line if a sarcoma is suspected or diagnosed."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Lump increasing in size — NICE NG12 (updated April 2026) urgent ultrasound trigger",
     "Larger than about 5 cm, deep, firm or fixed",
     "Recurrence after previous excision"
    ],
    "psychosocial": [
     "Warehouse supervisor on shifts",
     "Reluctant to make a fuss; partner prompted attendance",
     "Quietly worried about the growth"
    ],
    "ice": [
     "Idea: “Just a fatty lump, like my mate’s”",
     "Concern: it’s been growing, and that bothers him too",
     "Expectation: to be told it’s harmless"
    ]
   },
   "diagnosis": "An unexplained, enlarging, firm, deep lump on the right anterior thigh for 4 months in a 42-year-old man. Most likely benign, but it meets the NICE NG12 (updated April 2026) criterion for an urgent direct-access ultrasound within 2 weeks to assess for soft-tissue sarcoma.",
   "diagnosisLay": "“Most lumps like this are fatty lumps. But yours is firm, deep and growing, and a few lumps like that are something else that can look the same from outside. A scan is the only way to tell them apart.”",
   "management": {
    "reflectIce": "“You said it’s been bugging you too. That’s a good instinct — and a scan is how we get you a proper answer instead of a guess.”",
    "psychosocial": "Fit appointments around shifts; involve his partner; frame the scan as precaution, not alarm.",
    "sharedPlan": [
     "Urgent direct-access ultrasound requested today (within 2 weeks)",
     "Face-to-face exam and measurement this week",
     "Suspected cancer pathway referral if the scan is suspicious or uncertain",
     "No excision in primary care"
    ],
    "safetyNet": [
     "Ring if no scan date within a week",
     "Contact sooner if rapid growth, pain or new lumps",
     "GP reviews the result with him"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Subcutaneous lumps",
    "s": "Visual algorithm · lipoma or sarcoma · NICE NG12 (updated April 2026)",
    "href": "algorithms/subcutaneous-lumps.html"
   },
   {
    "ic": "🗺️",
    "t": "Thigh pain",
    "s": "Visual algorithm · thigh masses",
    "href": "algorithms/thigh-pain.html"
   }
  ],
  "pitfalls": {
   "intro": "The station hinges on one word in his opening — “bigger”. Candidates fail by reassuring a lipoma from the chair, or by offering to cut it out.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Diagnosing a lipoma on video and advising watchful waiting.",
     "why": "NICE NG12 (updated April 2026): consider an urgent direct-access ultrasound within 2 weeks for an adult with an unexplained lump increasing in size.",
     "fix": "Request the ultrasound today and explain why."
    },
    {
     "dom": "tasks",
     "fail": "Offering minor surgery to remove it.",
     "why": "Unplanned excision of a sarcoma can compromise the specialist operation.",
     "fix": "Image first; excision only after specialist assessment."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about depth, firmness, mobility and size.",
     "why": "These features, with growth, separate a likely lipoma from a lump that needs imaging.",
     "fix": "Ask on video, then examine and measure in person."
    },
    {
     "dom": "rto",
     "fail": "Treating his partner’s concern as nagging and joining in the joke.",
     "why": "Collusion with minimisation loses the hidden agenda and Relating marks.",
     "fix": "“What do you think she’s worried about?” — then acknowledge his own worry."
    },
    {
     "dom": "rto",
     "fail": "Using the word sarcoma or cancer abruptly, then moving on.",
     "why": "Alarm without context drives avoidance.",
     "fix": "Most likely harmless; a scan is how we know; here is the plan."
    },
    {
     "dom": "gs",
     "fail": "Ending with “the hospital will contact you” and no fail-safe.",
     "why": "Non-specific safety-netting and no ownership of the result.",
     "fix": "Chase if no date in a week, named changes, GP review of the result."
    }
   ]
  }
 },
 "uc-flare-phone": {
  "stem": {
   "name": "Aisha Rahman",
   "age": "29-year-old woman",
   "pmh": [
    "Ulcerative colitis (left-sided) — usually well controlled"
   ],
   "meds": [
    "Mesalazine"
   ],
   "allergy": "No known drug allergies recorded",
   "recent": "Telephone call-back request, Monday morning: “colitis flare, wants steroids calling in to the chemist.” Has a young child.",
   "reason": "Telephone consultation — UC flare."
  },
  "knowledge": {
   "guideline": "NICE NG130 (ulcerative colitis, 2019) · BSG guidelines on inflammatory bowel disease in adults (2025) · Truelove and Witts criteria (BMJ 1955) · NICE CG118 (colonoscopic surveillance, 2011, updated 2022)",
   "summary": "Ten bloody stools a day, nocturnal stools, abdominal pain and feeling feverish in a woman with UC is acute severe colitis until proven otherwise. It needs same-day hospital assessment for IV steroids, bloods and specialist care — not oral steroids phoned in to a pharmacy.",
   "points": [
    {
     "h": "Score the flare",
     "t": "Ask for numbers: stools per day, how much blood, nocturnal stools, urgency, pain, fever, how unwell she feels. A “flare” described in words alone cannot be triaged."
    },
    {
     "h": "Truelove and Witts",
     "t": "Acute severe UC: 6 or more bloody stools a day plus at least one sign of systemic toxicity — temperature above 37.8°C, pulse above 90, haemoglobin below 105 g/L, or ESR above 30 (CRP is often used instead). BSG 2025 uses these criteria to define acute severe colitis. Her symptoms meet the stool limb, and feeling feverish points to the systemic limb."
    },
    {
     "h": "An emergency",
     "t": "Acute severe UC carries risks of toxic megacolon, perforation and venous thromboembolism. NICE NG130: in hospital, offer IV corticosteroids and involve gastroenterology and colorectal surgery. Hospital work-up includes FBC, CRP, U&E, albumin, stool culture and C. difficile, and imaging if dilatation is suspected."
    },
    {
     "h": "What the phone can and can’t do",
     "t": "A phone call can score severity, check danger signs, and arrange the right place of care the same day — via the IBD team, on-call gastroenterology, the acute medical unit or A&E, per local pathway. It cannot take a pulse or bloods. Avoid antidiarrhoeals, opioids and NSAIDs in a severe flare."
    },
    {
     "h": "Mild flare for contrast",
     "t": "A genuinely mild flare with no systemic features can be stepped up in primary care or by the IBD nurse (for example optimising mesalazine), with close review. That option is closed once the picture is severe."
    },
    {
     "h": "Surveillance — later, not today",
     "t": "NICE CG118: offer colonoscopic surveillance to people with UC starting 10 years after symptom onset, at intervals set by risk. Worth confirming at follow-up; it is not an NICE NG12 (updated April 2026) suspected-cancer issue and has no place in today’s triage."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Aisha Rahman? It’s Dr Lee from the surgery. Can I just check your date of birth? … Thanks. Is it okay to talk now? Tell me what’s happening.",
    "dom": "rto",
    "why": "Confirms identity on the phone and opens openly"
   },
   {
    "who": "pt",
    "text": "Hiya, sorry to bother you. My colitis has flared — I’m going to the toilet about ten times a day and there’s blood, and I’m up in the night with it. I’m shattered and a bit shivery. Can you just call some steroids in to the chemist? I can’t come in — work, the little one, and I hate hospitals."
   },
   {
    "who": "dr",
    "text": "You’re not bothering me at all — I’m glad you rang. I hear that you want to manage this at home, and I’ll keep that in mind. First I need to ask some quick, specific questions so I can work out how bad this flare is. Is that okay?",
    "dom": "gs",
    "why": "Acknowledges her request and sets the agenda for severity assessment"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "How many days has this been going on, and how many times did you open your bowels in the last 24 hours?",
    "dom": "tasks",
    "why": "Quantifies duration and stool frequency"
   },
   {
    "who": "pt",
    "text": "About five days, getting worse. Yesterday it was about ten."
   },
   {
    "who": "dr",
    "text": "Is there blood every time, or just some of the time? And roughly how much?",
    "dom": "tasks",
    "why": "Quantifies bleeding"
   },
   {
    "who": "pt",
    "text": "Pretty much every time now."
   },
   {
    "who": "dr",
    "text": "And how many times in the night?",
    "dom": "tasks",
    "why": "Nocturnal stools as a marker of activity"
   },
   {
    "who": "pt",
    "text": "I’ve been up with it every night."
   },
   {
    "who": "dr",
    "text": "Any tummy pain — and is your tummy swollen or tight? Any vomiting?",
    "dom": "tasks",
    "why": "Screens for toxic dilatation and vomiting"
   },
   {
    "who": "pt",
    "text": "Crampy pain, on and off. Not swollen, I don’t think. No sick."
   },
   {
    "who": "dr",
    "text": "You said shivery. Have you checked your temperature? And do you feel your heart racing, or dizzy when you stand?",
    "dom": "tasks",
    "why": "Screens systemic toxicity and dehydration"
   },
   {
    "who": "pt",
    "text": "I haven’t checked. I just feel shivery and wiped out."
   },
   {
    "who": "dr",
    "text": "Are you managing to drink and pass urine normally? Any pain or swelling in your calf, or breathlessness?",
    "dom": "tasks",
    "why": "Hydration and VTE screen"
   },
   {
    "who": "pt",
    "text": "I’m drinking okay, I think. No calf pain."
   },
   {
    "who": "dr",
    "text": "Have you taken anything for it — like loperamide, codeine or ibuprofen? And have you had antibiotics recently or been around anyone with a tummy bug?",
    "dom": "tasks",
    "why": "Excludes harmful self-treatment and infection triggers"
   },
   {
    "who": "pt",
    "text": "No, nothing. Just my mesalazine."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said you hate hospitals. Can you tell me a bit about that?",
    "dom": "rto",
    "why": "Explores the barrier behind the request"
   },
   {
    "who": "pt",
    "text": "I’ve been in before with it. It was horrible. And I’m scared they’ll say I need an operation. Plus who’d have my little one?"
   },
   {
    "who": "dr",
    "text": "That’s completely understandable — a bad previous stay, a fear of surgery and a child to look after. Thank you for telling me. What were you hoping I’d do?",
    "dom": "rto",
    "why": "Validates the fears and elicits expectations"
   },
   {
    "who": "pt",
    "text": "Steroids at the chemist. Sort it at home."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’m going to be honest with you, because you deserve that. Ten bloody stools a day, getting up at night, feeling shivery and exhausted — that’s the pattern of a severe flare. With a flare this severe, tablets at home aren’t safe enough. It needs checking in hospital today: your pulse, temperature and blood tests, and usually steroids through a drip, which work faster and more reliably.",
    "dom": "tasks",
    "why": "Recognises acute severe UC and explains why a phone script is unsafe"
   },
   {
    "who": "pt",
    "text": "Today? Can’t it wait till I sort childcare?"
   },
   {
    "who": "dr",
    "text": "I don’t think it should wait. Severe flares can get dangerous quickly — the bowel can swell up, and there’s a higher risk of blood clots. Going in today means it’s more likely to settle with medicine. Leaving it makes an operation more likely, not less.",
    "dom": "rto",
    "why": "Conveys seriousness calmly and addresses the surgery fear directly"
   },
   {
    "who": "pt",
    "text": "Oh. I didn’t think of it like that."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Let’s solve the practical bits together. Is there anyone who could have your little one today, or take you in?",
    "dom": "rto",
    "why": "Problem-solves childcare and transport"
   },
   {
    "who": "pt",
    "text": "There’s someone I can ask. I’ll ring them."
   },
   {
    "who": "dr",
    "text": "Good. I’m going to ring the gastroenterology team now and arrange for you to be assessed today — they’ll tell us exactly where to go. I’ll call you back within the hour. Please don’t drive yourself; get a lift, or a taxi if needed.",
    "dom": "tasks",
    "why": "Arranges same-day specialist assessment via the correct pathway"
   },
   {
    "who": "pt",
    "text": "Okay. And the steroids?"
   },
   {
    "who": "dr",
    "text": "The hospital team will decide on those after they’ve seen you and done bloods — they may give them through a drip. Keep taking your mesalazine, keep drinking, and please don’t take loperamide, codeine or ibuprofen, as they can make a severe flare more dangerous.",
    "dom": "tasks",
    "why": "Avoids a phoned-in steroid; advises on harmful medicines"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If before you get there your tummy becomes very swollen or much more painful, you start vomiting, you feel faint or confused, or you get chest pain, breathlessness or a painful swollen leg — call 999.",
    "dom": "gs",
    "why": "Explicit 999 safety-net"
   },
   {
    "who": "pt",
    "text": "Okay. That’s scary."
   },
   {
    "who": "dr",
    "text": "It is, and I’m sorry this is happening. Can you tell me back what the plan is, so I know I’ve explained it properly?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "It’s a bad flare, so I need to be seen at hospital today. You’re ringing the gut team and calling me back within the hour. I sort someone for the little one, I get a lift, keep the mesalazine, no loperamide or ibuprofen, and 999 if my tummy swells or I feel faint."
   },
   {
    "who": "dr",
    "text": "Exactly right. I’ll document all of this and follow up once you’re home. When you’re better, we’ll also check you’re on the bowel check-up programme people with colitis need. Anything else?",
    "dom": "gs",
    "why": "Documents, follows up and notes surveillance for later"
   },
   {
    "who": "pt",
    "text": "No. Thank you — honestly, I’m glad you didn’t just send the steroids."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Confirmed identity; open question; acknowledged the steroid request without agreeing to it before assessing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Young child, work, previous hospital experience, who can help today, transport.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “shivery”, “exhausted” and “hate hospitals”, and explored each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a flare to ride out with steroids); concern (another admission, surgery, childcare); expectation (steroids at the chemist, stay home).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Recognised that pulse, temperature, FBC, CRP, U&E, albumin and stool culture including C. difficile are needed today — and can’t be done by phone.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Acute severe UC vs moderate flare vs infective colitis (C. difficile, other pathogens); complications (toxic megacolon, VTE, dehydration).",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Scored stool frequency, blood, nocturnal stools, pain, distension, fever, dizziness, urine output, VTE symptoms; applied Truelove and Witts (BSG 2025).",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Acute severe ulcerative colitis until proven otherwise — needs same-day hospital assessment.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day gastroenterology assessment arranged; no phoned-in oral steroid; mesalazine continued; avoid antidiarrhoeals, opioids and NSAIDs; IV steroids in hospital (NICE NG130).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Childcare and transport solved; hydration advice; colonoscopic surveillance (NICE CG118) flagged for later, not today.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 for distension, severe pain, vomiting, faintness, chest pain, breathlessness or leg swelling; call-back within the hour; teach-back; documentation.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Aisha Rahman",
    "age": "29 years · female",
    "pmh": [
     "Ulcerative colitis — left-sided"
    ],
    "meds": [
     "Mesalazine"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Telephone request (Monday a.m.): “UC flare — please call steroids in to chemist.” No recent bloods on file.",
    "reason": "Phone call-back. “Can you just call something in?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Identity and open",
     "d": "Confirm who you’re speaking to. Let her describe the flare; note ‘ten a day, blood, at night, shivery’."
    },
    {
     "t": "1–5",
     "h": "Score the severity",
     "d": "Stools per 24 hours, blood each time, nocturnal stools, pain, distension, vomiting, fever, dizziness, urine output, calf pain. Self-treatment and infection triggers."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Previous bad admission, fear of surgery, childcare. Name them."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Severe flare = hospital today, not steroids at the chemist. Surgery is less likely if treated early. Childcare and lift; ring gastroenterology; call her back."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 symptoms. Keep mesalazine, avoid loperamide, codeine, NSAIDs. Teach-back. Document the score."
    }
   ],
   "wordPics": {
    "fail": "Phones in oral prednisolone after a vague history; never counts stools or asks about nocturnal symptoms or fever; accepts that she can’t come in; no safety-net; or bullies her into A&E without addressing her fears.",
    "pass": "Quantifies the flare, recognises acute severe colitis, arranges same-day hospital assessment rather than prescribing, and gives a safety-net.",
    "exc": "All of the above, plus: scores the flare against Truelove and Witts in the history; explores the previous admission and fear of surgery and reframes it (early treatment makes surgery less likely); solves childcare and transport; rings the gastroenterology team and commits to a call-back; advises against antidiarrhoeals and NSAIDs; teach-back; flags surveillance for later without clouding today."
   },
   "avoid": [
    {
     "dont": "“I’ll send some prednisolone to the chemist and see how you go.”",
     "instead": "“With a flare this severe, tablets at home aren’t safe enough — you need checking in hospital today.”",
     "why": "A phoned-in steroid for acute severe colitis is a serious safety failure."
    },
    {
     "dont": "“You have to go to A&E now.”",
     "instead": "“I know hospital is hard for you. Let’s work out who can have your little one and how you’ll get there.”",
     "why": "An order without addressing barriers risks her not going at all."
    },
    {
     "dont": "“You might need your bowel removed if you don’t go.”",
     "instead": "“Treating it early makes it more likely to settle with medicine.”",
     "why": "Threats increase fear; honest framing addresses the surgery worry and motivates."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Childcare and work",
     "t": "A young child and a job are real barriers to same-day hospital care. Helping identify a carer and transport is part of safe triage, not an extra."
    },
    {
     "h": "Previous admissions",
     "t": "A bad hospital experience and fear of surgery drive avoidance in IBD. Acknowledge them and give an honest reason why going today is in her interest."
    }
   ],
   "legal": [
    {
     "h": "Fit notes",
     "t": "Employees self-certify for the first 7 days of sickness absence; a fit note is needed after that, which the hospital or practice can issue."
    },
    {
     "h": "Capacity and refusal",
     "t": "If she declines hospital assessment, check she has capacity for this decision (Mental Capacity Act 2005), explain the risks clearly, document it, and agree a safety-net and early re-contact."
    }
   ],
   "professional": [
    {
     "h": "Remote prescribing",
     "t": "GMC Good practice in prescribing and managing medicines and devices (2021): prescribe remotely only when you have enough information to do so safely. Here you do not — a severe flare needs examination and bloods."
    },
    {
     "h": "Documentation",
     "t": "Record stool frequency, blood, nocturnal symptoms, systemic features, the advice given, the disposition and the call-back."
    }
   ],
   "community": [
    {
     "h": "IBD support",
     "t": "IBD nurse advice line (per local service); Crohn’s and Colitis UK for information and support, including advice on work and education."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "6 or more bloody stools a day plus fever, tachycardia, anaemia or raised inflammatory markers — acute severe UC (Truelove and Witts)",
     "Abdominal distension or severe pain — toxic megacolon",
     "Faintness, reduced urine output, vomiting — dehydration",
     "Calf pain or swelling, chest pain, breathlessness — VTE"
    ],
    "psychosocial": [
     "Young child — who can help today",
     "Work pressure",
     "Previous admission and fear of surgery"
    ],
    "ice": [
     "Idea: a flare she can ride out with steroids",
     "Concern: another admission, surgery, childcare",
     "Expectation: steroids called in to the chemist and staying at home"
    ]
   },
   "diagnosis": "Acute severe ulcerative colitis until proven otherwise: about ten bloody stools a day, nocturnal stools, crampy pain, feeling feverish and exhausted after five days of worsening symptoms, in a woman with left-sided UC on mesalazine.",
   "diagnosisLay": "“This is a severe flare of your colitis. The bowel is very inflamed — that’s why you’re going so often, with blood, and feel shivery. Flares this bad need hospital treatment the same day, usually steroids through a drip, because they can get dangerous quickly.”",
   "management": {
    "reflectIce": "“You had a horrible time in hospital before and you’re scared of an operation. Going in today is the best way to avoid one.”",
    "psychosocial": "Help her find childcare and a lift, explain what will happen at hospital, and commit to a call-back so she isn’t left to organise it alone.",
    "sharedPlan": [
     "Same-day assessment arranged by phoning gastroenterology (or local acute pathway)",
     "Hospital: observations, FBC, CRP, U&E, albumin, stool culture and C. difficile; IV steroids if confirmed severe (NICE NG130)",
     "Continue mesalazine; avoid loperamide, codeine and NSAIDs; keep drinking",
     "Later: confirm colonoscopic surveillance (NICE CG118)"
    ],
    "safetyNet": [
     "999: abdominal swelling or severe pain, vomiting, faintness or confusion, chest pain, breathlessness, painful swollen leg",
     "GP calls back within the hour with where to go; follow up after discharge"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Ulcerative colitis",
    "s": "Protocol · NICE NG130",
    "href": "management/ulcerative-colitis.html"
   },
   {
    "ic": "📋",
    "t": "Ulcerative colitis",
    "s": "Case walkthrough · NICE CG118 surveillance",
    "href": "../cases/ulcerative-colitis.html"
   },
   {
    "ic": "🗺️",
    "t": "Rectal bleeding",
    "s": "Visual algorithm · blood in the stool",
    "href": "algorithms/rectal-bleeding.html"
   },
   {
    "ic": "🗺️",
    "t": "Chronic diarrhoea",
    "s": "Visual algorithm · bloody diarrhoea",
    "href": "algorithms/chronic-diarrhoea.html"
   }
  ],
  "pitfalls": {
   "intro": "Telephone IBD stations test whether you can triage objectively and resist a reasonable-sounding request. Candidates fail by prescribing on a vague history, or by ordering a reluctant patient to hospital without addressing why she doesn’t want to go.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Phoning in oral prednisolone after hearing “flare”.",
     "why": "Ten bloody stools a day with systemic symptoms is acute severe colitis; oral steroids at home are unsafe and delay IV treatment.",
     "fix": "Score first: stools per day, blood, nocturnal stools, fever, pulse symptoms. If severe, same-day hospital."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about nocturnal stools, fever or dizziness.",
     "why": "These separate mild from severe. Without them you can’t triage, and examiners mark the gap.",
     "fix": "Ask for numbers and systemic symptoms explicitly; remember her pulse and temperature can’t be observed by phone."
    },
    {
     "dom": "tasks",
     "fail": "Suggesting loperamide or codeine for the frequency.",
     "why": "Antimotility drugs and opioids can precipitate toxic dilatation in severe colitis.",
     "fix": "Advise avoiding loperamide, codeine and NSAIDs; hospital will manage symptoms."
    },
    {
     "dom": "tasks",
     "fail": "Discussing cancer surveillance or a suspected cancer pathway referral today.",
     "why": "It isn’t relevant to the emergency and uses up time. NICE NG12 (updated April 2026) has no role here.",
     "fix": "Mention surveillance briefly for later follow-up (NICE CG118), after the disposition is agreed."
    },
    {
     "dom": "rto",
     "fail": "“You need to go to A&E” — and nothing about her fears or childcare.",
     "why": "Ignoring the barrier risks non-attendance and costs Relating to Others marks.",
     "fix": "Explore the previous admission and surgery fear; reframe; solve childcare and transport together."
    },
    {
     "dom": "gs",
     "fail": "Ending with “go to hospital” and no call-back or safety-net.",
     "why": "Remote triage must close the loop. Non-specific advice is a standard failing statement.",
     "fix": "Ring gastroenterology, call her back within a set time, name the 999 symptoms, and use teach-back."
    }
   ]
  }
 },
 "vitiligo-meaning": {
  "stem": {
   "name": "Anand Sharma",
   "age": "24-year-old man",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "No previous consultations about skin. No blood tests on file.",
   "reason": "Video appointment: “white patches on skin spreading”."
  },
  "knowledge": {
   "guideline": "British Association of Dermatologists guidelines for the management of people with vitiligo 2021 · NICE NG222",
   "summary": "Well-demarcated milk-white patches on the hands and around the eyes and mouth in a well young adult is vitiligo. Say clearly it is not contagious, screen thyroid, offer realistic treatment and camouflage, and treat the psychosocial impact as the main problem.",
   "points": [
    {
     "h": "Recognise vitiligo",
     "t": "Acquired, sharply defined, depigmented (milk-white) macules and patches, often symmetrical, favouring the hands, face around the eyes and mouth, and friction sites; new patches can appear at sites of injury. A Wood’s lamp accentuates depigmentation. Differentials include pityriasis versicolor, post-inflammatory hypopigmentation and pityriasis alba."
    },
    {
     "h": "Not contagious, not dangerous",
     "t": "Vitiligo is an autoimmune loss of pigment cells. It cannot be caught, is not caused by hygiene or diet, and does not harm physical health. Stating this plainly is itself a treatment."
    },
    {
     "h": "Screen for thyroid disease",
     "t": "BAD 2021 recommends checking thyroid function and thyroid antibodies to identify people more likely to develop autoimmune thyroid disease. Be alert to other autoimmune conditions if symptoms suggest them."
    },
    {
     "h": "Treatment options",
     "t": "BAD 2021: a potent or very potent topical corticosteroid for limited non-facial disease; topical tacrolimus 0.1% ointment twice daily as an alternative, particularly on the face (unlicensed use, dose per BNF). Narrowband UVB phototherapy through dermatology for more extensive or active disease. Response is slow and variable; hands and lips respond poorly."
    },
    {
     "h": "Camouflage and sun protection",
     "t": "Skin camouflage matched to the patient’s skin tone is effective and available through specialist camouflage services. Depigmented skin burns easily; high-factor sunscreen on patches."
    },
    {
     "h": "Psychological impact",
     "t": "BAD 2021 highlights the psychological burden of vitiligo, which is often greater where contrast with skin tone is high and where stigma exists. Ask about mood and, where low, assess and support per NICE NG222; signpost peer support."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening & agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Anand, I’m Dr Lee. Tell me what’s been going on.",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "These white patches keep appearing and spreading — my hands, round my eyes and mouth. People stare, they ask what’s wrong with me, some won’t shake my hand. My family are worried what people will say. I feel like a freak. I want to know what it is, whether it’s catching, and can you make it go away?"
   },
   {
    "who": "dr",
    "text": "That’s a lot to be carrying, and I’m sorry people have reacted like that. I’ll answer all three of your questions. First I’d like to understand the patches and have a look, then talk about how it’s affecting you, and then agree a plan. Is that okay?",
    "dom": "gs",
    "why": "Acknowledges impact and sets an agenda that covers his three questions"
   },
   {
    "who": "pt",
    "text": "Yes, fine."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When did you first notice them, and how quickly have they spread?",
    "dom": "tasks",
    "why": "Onset and tempo of spread"
   },
   {
    "who": "pt",
    "text": "A few months ago, on my hands. Then round my eyes and mouth. They’re getting bigger."
   },
   {
    "who": "dr",
    "text": "Are they completely white, or paler than your normal skin? Any itch, scale, redness or numbness?",
    "dom": "tasks",
    "why": "Depigmentation versus hypopigmentation; excludes fungal, inflammatory and anaesthetic lesions"
   },
   {
    "who": "pt",
    "text": "Completely white. They don’t itch or feel different."
   },
   {
    "who": "dr",
    "text": "Could you hold your hands up to the camera? … And your face? … Thank you. These are sharply edged, milk-white patches, on both hands and around your eyes and mouth. I’d like to see you in person to look more closely, but this looks typical of vitiligo.",
    "dom": "tasks",
    "why": "Examination adapted to video with face-to-face follow-up"
   },
   {
    "who": "dr",
    "text": "Any tiredness, weight change, feeling hot or cold, palpitations, or thirst?",
    "dom": "tasks",
    "why": "Screens for associated thyroid disease and diabetes"
   },
   {
    "who": "pt",
    "text": "No, I feel fine in myself."
   },
   {
    "who": "dr",
    "text": "Does anyone in your family have vitiligo, thyroid problems or other immune conditions?",
    "dom": "tasks",
    "why": "Family history of autoimmunity"
   },
   {
    "who": "pt",
    "text": "Not that I know of."
   },
   {
    "phase": "Ideas, concerns & expectations",
    "clock": "4–7 min",
    "who": "dr",
    "text": "You said you feel like a freak. What has this been like day to day?",
    "dom": "rto",
    "why": "Follows the strongest emotional cue"
   },
   {
    "who": "pt",
    "text": "I hide my hands. I don’t want to meet people. When someone won’t shake my hand I just want to disappear."
   },
   {
    "who": "dr",
    "text": "That sounds really painful. How has your mood been — are you still enjoying things, sleeping, seeing friends?",
    "dom": "tasks",
    "why": "Mood screen"
   },
   {
    "who": "pt",
    "text": "I’m avoiding people. I feel low, but I’m not going to do anything stupid."
   },
   {
    "who": "dr",
    "text": "Thank you for saying that. And your family — what are they worried about?",
    "dom": "rto",
    "why": "Explores family and cultural context"
   },
   {
    "who": "pt",
    "text": "What people will say. None of us really know what it is."
   },
   {
    "who": "dr",
    "text": "What did you think it might be before today?",
    "dom": "rto",
    "why": "Elicits his ideas"
   },
   {
    "who": "pt",
    "text": "I didn’t know. I was scared it was catching, or something serious."
   },
   {
    "phase": "Explanation",
    "clock": "7–10 min",
    "who": "dr",
    "text": "Let me answer your first two questions straight away. This is vitiligo. The immune system stops the cells that make skin colour from working in those areas. It is not catching — no one can get it from you, and shaking hands is completely safe. It isn’t dangerous to your health, and nothing you did caused it.",
    "dom": "tasks",
    "why": "Confident diagnosis and firm correction of the contagion myth"
   },
   {
    "who": "pt",
    "text": "So it’s not an infection?"
   },
   {
    "who": "dr",
    "text": "No. It’s common, including in people of South Asian heritage. If it would help, I can give you written information from the skin specialists to show your family.",
    "dom": "rto",
    "why": "Equips him to counter stigma at home"
   },
   {
    "who": "pt",
    "text": "That would help. They’d believe it from a doctor."
   },
   {
    "who": "dr",
    "text": "Because vitiligo is linked with thyroid problems, I’d like a blood test for thyroid function and thyroid antibodies.",
    "dom": "tasks",
    "why": "Thyroid screen per BAD 2021"
   },
   {
    "who": "dr",
    "text": "On making it go away, I’ll be honest rather than over-promise. There are treatments that can bring colour back or stop spread — a strong steroid cream, or a different ointment for the face — and light treatment through the skin specialists. They work slowly and unevenly, and hands respond less well than the face.",
    "dom": "tasks",
    "why": "Realistic treatment options and honest expectations"
   },
   {
    "who": "pt",
    "text": "So it might not come back."
   },
   {
    "who": "dr",
    "text": "It may partly come back, and treatment can slow it down. There’s also skin camouflage — specialist make-up matched to your skin tone — which many people find really good. And the white skin burns easily, so sunscreen on the patches matters.",
    "dom": "tasks",
    "why": "Camouflage and sun protection"
   },
   {
    "phase": "Shared management",
    "clock": "10–11 min",
    "who": "dr",
    "text": "Given how fast it’s spreading, how visible it is and how it’s affecting you, I’d like to refer you to dermatology to discuss treatment, including light treatment. Would you like that?",
    "dom": "rto",
    "why": "Shared decision on referral"
   },
   {
    "who": "pt",
    "text": "Yes, please."
   },
   {
    "who": "dr",
    "text": "And the low mood — there are support groups of people with vitiligo, and talking therapy if you’d like it. You don’t need to face the staring on your own.",
    "dom": "tasks",
    "why": "Psychological and peer support"
   },
   {
    "phase": "Safety-net & close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If your mood gets worse, or you have any thoughts of harming yourself, contact us the same day. I’ll see you in person in two weeks with the thyroid result, and we’ll go through the referral.",
    "dom": "gs",
    "why": "Safety-net on mood and booked follow-up"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "If someone says it’s catching, what will you tell them?",
    "dom": "gs",
    "why": "Teach-back focused on the contagion myth"
   },
   {
    "who": "pt",
    "text": "That it’s vitiligo, it’s an immune thing, it can’t be caught and it isn’t my fault."
   },
   {
    "who": "dr",
    "text": "Exactly. Is there anything else you wanted to ask?",
    "dom": "rto",
    "why": "Shares the floor before closing"
   },
   {
    "who": "pt",
    "text": "No. That’s the first time I’ve felt normal about it."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him list his three questions and acknowledged the staring and refused hand-shakes before narrowing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Social avoidance, family and cultural worry about “what people will say”, and uncertainty at home about what it is.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Followed “I feel like a freak”, the refused hand-shakes and the family’s worry.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (catching or serious); concern (stigma, identity, family); expectation (a name, is it catching, a cure).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Video look at hands and face with face-to-face offer; thyroid function and thyroid antibodies (BAD 2021).",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Vitiligo versus pityriasis versicolor, post-inflammatory hypopigmentation and other causes; screened for associated autoimmunity.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about thyroid and diabetes symptoms, and asked directly about mood and self-harm.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named vitiligo confidently and stated plainly: not contagious, not dangerous, not his fault.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Realistic treatment (topical steroid or tacrolimus, phototherapy via dermatology), camouflage, sunscreen, dermatology referral by agreement.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Low mood addressed with peer support and talking therapy; written information for his family.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Mood safety-net, thyroid result and referral review in two weeks, teach-back on the contagion myth.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Ethnicity, culture & diversity",
    "Mental health & addiction",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Anand Sharma",
    "age": "24 years · male",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "None recorded"
    ],
    "allergy": "NKDA",
    "recent": "No previous skin consultations. No bloods on file.",
    "reason": "Video consultation. “White patches on skin spreading.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and acknowledge",
     "d": "He asks three questions: what is it, is it catching, can it go away. Promise to answer all three."
    },
    {
     "t": "1–4",
     "h": "Characterise and look",
     "d": "Onset and spread, completely white or paler, itch or scale, sites. Look on camera; offer face-to-face. Thyroid and diabetes symptoms."
    },
    {
     "t": "4–7",
     "h": "Meaning and stigma",
     "d": "Refused hand-shakes, avoidance, mood, family and cultural beliefs."
    },
    {
     "t": "7–10",
     "h": "Name it and kill the myth",
     "d": "Vitiligo; not catching, not dangerous, not his fault. Thyroid tests. Honest treatment options, camouflage, sunscreen."
    },
    {
     "t": "10–12",
     "h": "Plan and close",
     "d": "Dermatology referral by agreement, peer support, mood safety-net, review in two weeks, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Diagnoses vitiligo and prescribes a steroid cream with no mention of contagion, thyroid or mood; or promises a cure; treats it as purely cosmetic.",
    "pass": "Diagnoses vitiligo, says it is not contagious, checks thyroid, discusses treatment options with realistic expectations, refers to dermatology and asks about mood.",
    "exc": "All of the above, plus: answers his three questions explicitly; gives him words and written information to counter the contagion myth; explores the refused hand-shakes and cultural stigma with warmth; offers camouflage and peer support; he leaves with more agency than he arrived with."
   },
   "avoid": [
    {
     "dont": "“It’s only cosmetic.”",
     "instead": "“It doesn’t harm your health, but I can see it’s having a big effect on your life — and that matters.”",
     "why": "Minimising the impact ignores the main problem."
    },
    {
     "dont": "“This cream should get rid of it.”",
     "instead": "“Treatment can help and slow it, but it’s slow and uneven — let me be honest about what to expect.”",
     "why": "Over-promising leads to disappointment and loss of trust."
    },
    {
     "dont": "“Your family shouldn’t worry about what people think.”",
     "instead": "“Would written information from the skin specialists help you explain it to them?”",
     "why": "Dismissing cultural concerns alienates; equipping him helps."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Stigma and culture",
     "t": "Visible patches on darker skin, the common belief that it is catching, and worry about what the community will say all add to the burden. Address beliefs respectfully."
    },
    {
     "h": "Social withdrawal",
     "t": "Hiding his hands and avoiding people after refused hand-shakes — explore work and relationships and the effect on confidence."
    }
   ],
   "legal": [
    {
     "h": "Equality Act 2010",
     "t": "A severe disfigurement is treated as having a substantial adverse effect under the Equality Act 2010, so extensive visible vitiligo may count as a disability. This could matter if he faces discrimination at work."
    }
   ],
   "professional": [
    {
     "h": "Unlicensed use",
     "t": "Topical tacrolimus for vitiligo is off-label; explain this and record the discussion (GMC Good practice in prescribing and managing medicines and devices, 2021)."
    },
    {
     "h": "Cultural competence",
     "t": "Recognise how skin tone changes the visibility and meaning of vitiligo; avoid assumptions and ask what it means to him (GMC Good Medical Practice 2024)."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Vitiligo Support UK for peer support, Changing Faces for skin camouflage and support with visible difference, BAD patient information leaflet, NHS Talking Therapies self-referral."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Rapid spread or new patches at injury sites — active disease, earlier specialist input",
     "Symptoms of thyroid disease, diabetes or other autoimmunity",
     "Low mood, withdrawal or thoughts of self-harm",
     "Itch, scale, numbness or inflammation — reconsider the diagnosis"
    ],
    "psychosocial": [
     "Hides his hands, avoids people; some refuse to shake his hand",
     "Family and cultural worry about what people will say",
     "Identity: “I feel like a freak”"
    ],
    "ice": [
     "Idea: catching or something serious",
     "Concern: stigma, rejection and family reputation",
     "Expectation: a name, whether it’s catching, and a cure"
    ]
   },
   "diagnosis": "“This is vitiligo — your immune system has switched off the colour-making cells in those patches. It isn’t catching, isn’t dangerous and isn’t your fault.”",
   "diagnosisLay": "“Your skin has cells that make its colour, like painters. In vitiligo the immune system tells some painters to stop in certain patches. Nothing has got in from outside — so no one can catch it.”",
   "management": {
    "reflectIce": "“You asked three things: what it is, whether it’s catching, and whether it can go away. It’s vitiligo, it can’t be caught, and treatment can help but I’ll be honest that it’s slow.”",
    "psychosocial": "Validate the stigma, give him words and written information for his family, and offer camouflage and peer support.",
    "sharedPlan": [
     "Thyroid function and thyroid antibodies",
     "Dermatology referral for treatment options including phototherapy; topical treatment per BAD 2021",
     "Skin camouflage, sunscreen on patches, peer and psychological support"
    ],
    "safetyNet": [
     "Worsening mood or thoughts of self-harm — contact the same day",
     "Review in two weeks with results"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Hypothyroidism",
    "s": "Case walkthrough · autoimmune thyroid",
    "href": "../cases/hypothyroidism.html"
   },
   {
    "ic": "💠",
    "t": "Pityriasis versicolor",
    "s": "Protocol · pale patches differential",
    "href": "management/pityriasis-versicolor.html"
   },
   {
    "ic": "📋",
    "t": "Depression",
    "s": "Case walkthrough · NICE NG222",
    "href": "../cases/depression.html"
   },
   {
    "ic": "💠",
    "t": "Hypothyroidism protocol",
    "s": "Thyroid tests · NICE NG145",
    "href": "management/hypothyroidism.html"
   }
  ],
  "pitfalls": {
   "intro": "The dermatology here is simple. The station is failed by treating the skin and missing the person: the contagion myth, the stigma and his low mood.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Not saying clearly that vitiligo is not contagious.",
     "why": "He asked directly, and the contagion myth drives the stigma he faces. An unanswered question is a missed ICE item.",
     "fix": "“It is not catching — shaking hands is completely safe.” Then give written information."
    },
    {
     "dom": "tasks",
     "fail": "No thyroid tests.",
     "why": "BAD 2021 recommends thyroid function and antibodies; omission is incomplete management.",
     "fix": "Explain the link and arrange the tests."
    },
    {
     "dom": "tasks",
     "fail": "Promising a cure, or saying nothing works.",
     "why": "Both are inaccurate and damage trust.",
     "fix": "Describe topical treatment and phototherapy honestly: helpful, slow, variable, hands respond poorly."
    },
    {
     "dom": "rto",
     "fail": "Moving past “I feel like a freak” to ask about symptoms.",
     "why": "“Does not respond to cues.” The psychosocial impact is the heart of the station.",
     "fix": "“You said you feel like a freak — tell me what that’s been like.”"
    },
    {
     "dom": "rto",
     "fail": "Dismissing the family’s concerns.",
     "why": "Cultural beliefs shape how he lives with vitiligo; dismissal alienates.",
     "fix": "Respect the worry and help him explain it to them."
    },
    {
     "dom": "gs",
     "fail": "No mood safety-net or follow-up.",
     "why": "He reports low mood and withdrawal; a missing safety-net is unsafe.",
     "fix": "Name same-day contact for thoughts of self-harm and book review with results."
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
