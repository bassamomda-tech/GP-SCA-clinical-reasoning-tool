/* ============================================================
   Reasoning GP — The Hot Seat: add-on set, batch 2
   Stem, knowledge, model consultation, scorecard tasks, extras,
   knowledge base, playbook, links and examiner pitfalls for
   20 further cases. Loaded after sca-pitfalls.js and
   before sca-practice.js; merges into the existing maps and
   attaches to the case objects exactly as those files do.
   Educational; original content; primary sources cited.
   ============================================================ */
(function(){
  var ADD = {
 "af-incidental": {
  "stem": {
   "name": "Sylvia Beech",
   "age": "72-year-old woman",
   "pmh": [
    "Hypertension",
    "Atrial fibrillation, new (ECG last week)"
   ],
   "meds": [
    "Amlodipine"
   ],
   "allergy": "No known drug allergies",
   "recent": "Smartwatch alerts for irregular rhythm. Practice 12-lead ECG last week: atrial fibrillation, rate 88. BP 138/82. No diabetes, no previous stroke or TIA. Widowed 2021 (husband Gordon, on warfarin for a metallic valve, died of an intracranial bleed after a fall).",
   "reason": "Telephone call to discuss the ECG result."
  },
  "knowledge": {
   "guideline": "NICE NG196 (atrial fibrillation) · BNF (direct-acting oral anticoagulants) · DVLA Assessing fitness to drive",
   "summary": "Asymptomatic AF found by a wearable and confirmed on ECG is a stroke-prevention decision. Her CHA₂DS₂-VASc is 3, so anticoagulation with a DOAC should be offered; aspirin is not an alternative.",
   "points": [
    {
     "h": "Confirm and assess",
     "t": "A wearable alert needs ECG confirmation, which she has. Rate 88 at rest with no symptoms means rate control is not the pressing issue; stroke risk is. Baseline FBC, U&E with creatinine clearance, LFTs and thyroid function."
    },
    {
     "h": "Stroke risk",
     "t": "NICE NG196: use CHA₂DS₂-VASc. Hers is 3 (age 65–74, female, hypertension). Offer anticoagulation at a score of 2 or more; consider it for men with a score of 1. AF-related strokes tend to be large and disabling."
    },
    {
     "h": "Bleeding risk",
     "t": "NICE NG196: assess bleeding risk with ORBIT and address modifiable factors (uncontrolled BP, NSAIDs, alcohol, anaemia). Do not withhold anticoagulation solely because of age or risk of falls."
    },
    {
     "h": "Aspirin",
     "t": "NICE NG196: do not offer aspirin monotherapy solely for stroke prevention in AF. It gives little protection and still causes bleeding."
    },
    {
     "h": "DOAC, not warfarin",
     "t": "NICE NG196 recommends a DOAC (apixaban, dabigatran, edoxaban or rivaroxaban) first-line. No INR monitoring, few food interactions, and lower rates of intracranial bleeding than warfarin in trials. DOACs are not used with mechanical heart valves (BNF), which is why Gordon was on warfarin."
    },
    {
     "h": "Driving and review",
     "t": "DVLA Group 1: she can drive and need not notify unless AF causes incapacitating symptoms. Review anticoagulation, renal function and bleeding risk at least annually."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Beech, it’s Dr Lee. Thank you for taking the call. Is now a good time, and are you somewhere you can talk?",
    "dom": "rto",
    "why": "Checks privacy and readiness on the telephone"
   },
   {
    "who": "pt",
    "text": "Perfectly. And before you start, I feel completely well. The only thing wrong with me is a watch my grandson set up that keeps tutting at me. A wobbly tick at my age, whose isn’t?"
   },
   {
    "who": "dr",
    "text": "I’m very glad you feel well, and that matters. I’d like to explain what the tracing showed, hear what you make of it, and decide together what, if anything, to do. Does that sound all right?",
    "dom": "gs",
    "why": "Clear agenda that includes her view and her choice"
   },
   {
    "who": "pt",
    "text": "Go ahead."
   },
   {
    "phase": "Data gathering",
    "clock": "1–3 min",
    "who": "dr",
    "text": "Have you noticed anything at all: fluttering, breathlessness, dizziness, chest pain or blackouts?",
    "dom": "tasks",
    "why": "Screens for symptoms and haemodynamic effect"
   },
   {
    "who": "pt",
    "text": "Nothing. I walk the dog forty minutes a day, do the garden, drive to the garden centre."
   },
   {
    "who": "dr",
    "text": "Any bleeding problems, falls, kidney trouble, or do you take ibuprofen or aspirin? And how much alcohol, roughly?",
    "dom": "tasks",
    "why": "Bleeding-risk screen before any anticoagulation discussion"
   },
   {
    "who": "pt",
    "text": "None of that. A sherry at Christmas. Steady as a rock on my feet."
   },
   {
    "phase": "Explanation",
    "clock": "3–5 min",
    "who": "dr",
    "text": "Then here’s what the watch found. The top chambers of your heart aren’t beating in step; they’re quivering. Blood in a small pouch up there moves sluggishly, and still blood can clot. If a clot breaks off, it can travel to the brain and cause a stroke. You can feel perfectly well through all of that, which is why the watch caught it and you didn’t.",
    "dom": "tasks",
    "why": "Plain picture of AF and why feeling well and being at risk coexist"
   },
   {
    "who": "pt",
    "text": "I see. So what do you want to do about it?"
   },
   {
    "who": "dr",
    "text": "The usual treatment is a blood thinner, to stop clots forming.",
    "dom": "tasks",
    "why": "Introduces anticoagulation"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "pt",
    "text": "(Silence.) No. I don’t think so, doctor."
   },
   {
    "who": "dr",
    "text": "You went quiet when I said blood thinner. Can I ask what that brought up?",
    "dom": "rto",
    "why": "Names the temperature drop and invites the story"
   },
   {
    "who": "pt",
    "text": "My husband Gordon was on warfarin. For his valve. He slipped on the ice outside the butcher’s, a silly little fall, didn’t even break his glasses. Three days later he was dead. A bleed on the brain. The blood thinner killed him. And now you want to put me on it."
   },
   {
    "who": "dr",
    "text": "I’m so sorry. Three days, from a fall that didn’t break his glasses. I can understand completely why the tablet is the villain in that story, and on the ice that day it did play its part. Thank you for telling me.",
    "dom": "rto",
    "why": "Receives the grief fully before any pharmacology"
   },
   {
    "who": "pt",
    "text": "I’ll take an aspirin if it makes you happy. My neighbour Eileen says her cardiologist swears by it."
   },
   {
    "phase": "Shared understanding",
    "clock": "7–10 min",
    "who": "dr",
    "text": "May I tell you what’s different between Gordon and you? Three things. First, he had a metal valve. For that, warfarin is the only option, even now. The newer tablets can’t be used. He had no choice.",
    "dom": "rto",
    "why": "Honours the story while correcting its categories"
   },
   {
    "who": "dr",
    "text": "Second, the tablets we use for AF now are different drugs from warfarin. No blood-test clinics, fewer food rules, and in the big trials they caused fewer bleeds into the brain than warfarin. Third, your own bleeding risk is low: no falls, good health, no ibuprofen, and I’ll keep your blood pressure well controlled.",
    "dom": "tasks",
    "why": "Distinguishes DOAC from warfarin and personalises bleeding risk"
   },
   {
    "who": "dr",
    "text": "On aspirin, I have to be honest with you. For this kind of clot it gives very little protection, but it still makes you bleed more easily. National guidance says not to use it for AF. I’d be giving you the risk without the benefit.",
    "dom": "tasks",
    "why": "Retires the aspirin compromise kindly and explicitly"
   },
   {
    "who": "pt",
    "text": "So what are my actual chances, without anything?"
   },
   {
    "who": "dr",
    "text": "We score it from your age, being a woman, and your blood pressure. Your score is three, which puts you in the group where a blood thinner is recommended. Each year without treatment carries a real chance of a stroke, and strokes from AF tend to be the big ones that take speech or movement. Treatment reduces that risk a great deal.",
    "dom": "tasks",
    "why": "Makes the CHA₂DS₂-VASc score personal and honest without false precision"
   },
   {
    "who": "pt",
    "text": "I don’t want to decide on the phone."
   },
   {
    "who": "dr",
    "text": "You don’t have to. This is your decision. I’ll post you written information, we’ll do some baseline blood tests so the option stays open, and we’ll speak again next week. Your grandson is welcome on that call if you’d like a second pair of ears.",
    "dom": "rto",
    "why": "Hands the decision back with structure, not pressure"
   },
   {
    "phase": "Safety-net and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "Whatever you decide, one thing holds: if your face droops, an arm goes weak, or your words come out jumbled, that’s 999 straight away. And if you get palpitations, breathlessness or feel faint, ring us the same day.",
    "dom": "gs",
    "why": "FAST safety-net regardless of her decision"
   },
   {
    "who": "pt",
    "text": "Face, arm, speech, 999. I know that one from the adverts."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll book the call for Tuesday. And keep the watch on; it did you a favour.",
    "dom": "gs",
    "why": "Dated follow-up and a positive reframe of the watch"
   },
   {
    "who": "pt",
    "text": "(Small laugh.) I’ll tell him you said so. Tuesday, then."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let her state her view (“a wobbly tick”) and agreed an agenda that included her choice.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Active, independent, widowed, dog walking and driving; the grandson and neighbour as influences.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Noticed the silence at “blood thinner” and invited Gordon’s story; took the aspirin offer as a cue, not a solution.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (normal ageing, a fussy watch), concern (warfarin killed Gordon), expectation (decline politely, perhaps aspirin).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Baseline FBC, U&E with creatinine clearance, LFTs, thyroid function; BP check; pulse and symptom review.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Asymptomatic AF with controlled rate; screened for symptoms, bleeding history, falls, NSAIDs and alcohol.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "No syncope, chest pain, breathlessness or previous stroke or TIA; stroke risk quantified with CHA₂DS₂-VASc and bleeding with ORBIT.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Explained AF and the clot mechanism in plain words, and why feeling well does not mean low risk.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "DOAC offered per NICE NG196; aspirin explicitly not recommended; decision time with written information and a booked follow-up.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "BP optimised; NSAIDs avoided; Gordon’s mechanical-valve warfarin distinguished from her situation.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "FAST symptoms mean 999; palpitations, breathlessness or faintness mean a same-day call; next call dated.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Investigations & results"
   ],
   "stem": {
    "name": "Sylvia Beech",
    "age": "72 years · female",
    "pmh": [
     "Hypertension",
     "AF (new, ECG last week)"
    ],
    "meds": [
     "Amlodipine"
    ],
    "allergy": "NKDA",
    "recent": "⚠ 12-lead ECG: atrial fibrillation, rate 88. BP 138/82. No stroke or TIA, no diabetes. Record: husband died 2021, intracranial bleed on warfarin after a fall.",
    "reason": "Results call. Smartwatch flagged an irregular rhythm."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agree",
     "d": "She opens with “I feel perfectly well”. Accept it, then agree to explain the result and decide together."
    },
    {
     "t": "1–3",
     "h": "Symptoms and bleeding",
     "d": "Palpitations, breathlessness, dizziness, chest pain; falls, bleeding, NSAIDs, alcohol."
    },
    {
     "t": "3–7",
     "h": "Explain, then stop",
     "d": "Quivering chambers, still blood, clots. When she goes quiet at “blood thinner”, ask. Hear Gordon in full."
    },
    {
     "t": "7–10",
     "h": "Distinguish and inform",
     "d": "Metal valve versus AF; DOAC versus warfarin; her low bleeding risk; aspirin retired kindly; CHA₂DS₂-VASc 3."
    },
    {
     "t": "10–12",
     "h": "Hand it back",
     "d": "Written information, baseline bloods, grandson invited, call booked. FAST 999 whatever she decides."
    }
   ],
   "wordPics": {
    "fail": "Prescribes a DOAC over her objection or accepts aspirin as a compromise; talks pharmacology through the silence and never hears about Gordon; no stroke-risk explanation; no FAST safety-net.",
    "pass": "Explains AF and stroke risk, recommends a DOAC, says aspirin is not appropriate, listens to her concern about Gordon, offers time and follow-up with basic safety-netting.",
    "exc": "All of the above, plus: stops at the silence and hears Gordon before any drug facts; separates the metal valve and warfarin from her situation point by point; screens and optimises bleeding risk out loud; hands the decision back with written information, the grandson invited and a dated call."
   },
   "avoid": [
    {
     "dont": "“Aspirin is better than nothing, so let’s start that for now.”",
     "instead": "“For this kind of clot aspirin gives very little protection but still makes you bleed more. I’d be giving you the risk without the benefit.”",
     "why": "NICE NG196 advises against aspirin monotherapy for stroke prevention in AF."
    },
    {
     "dont": "“The new tablets are completely safe, nothing like warfarin.”",
     "instead": "“They do carry some bleeding risk, but less bleeding into the brain than warfarin, and yours is low.”",
     "why": "Overselling destroys trust with someone who has lived through a fatal bleed."
    },
    {
     "dont": "“You really need to start this today.”",
     "instead": "“This is your decision. Take the week, read the information, and we’ll talk on Tuesday.”",
     "why": "Pressure produces a firm no; structured time produces a considered choice."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Bereavement",
     "t": "A spouse’s death on an anticoagulant makes the drug the villain of the family story. Grief must be heard before information can land."
    },
    {
     "h": "Independence",
     "t": "She values her dog, garden and driving. Stroke is the real threat to that independence, which is a useful frame if she chooses it."
    }
   ],
   "legal": [
    {
     "h": "DVLA",
     "t": "Group 1: AF does not need to be reported unless it causes symptoms that may distract or incapacitate the driver (DVLA Assessing fitness to drive)."
    },
    {
     "h": "Capacity and choice",
     "t": "She has capacity and may decline. An informed refusal is recorded as today’s decision, with the offer repeated at review."
    }
   ],
   "professional": [
    {
     "h": "Shared decision-making",
     "t": "Present benefits and risks in terms she understands, respect her choice and record the discussion (GMC Decision making and consent 2020)."
    },
    {
     "h": "Honest risk",
     "t": "Do not oversell DOAC safety or understate stroke risk; balanced information is part of valid consent."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Arrhythmia Alliance and Stroke Association information; bereavement support if Gordon’s death is still raw; community pharmacy New Medicine Service if a DOAC is started."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Syncope, chest pain or breathlessness with AF: same-day assessment",
     "Face drooping, arm weakness or speech disturbance: 999",
     "Bleeding history, anaemia, NSAID use or uncontrolled BP: address before or alongside anticoagulation"
    ],
    "psychosocial": [
     "Widowed; husband died of an intracranial bleed on warfarin after a fall",
     "Independent, active, drives, lives with her dog",
     "Grandson and neighbour influencing her views"
    ],
    "ice": [
     "Idea: “A wobbly tick at my age, a fussy watch.”",
     "Concern: the blood thinner that she believes killed Gordon",
     "Expectation: decline politely, perhaps take aspirin"
    ]
   },
   "diagnosis": "New asymptomatic atrial fibrillation, rate 88, confirmed on 12-lead ECG. CHA₂DS₂-VASc 3 (age 65–74, female, hypertension): anticoagulation indicated per NICE NG196. Bleeding risk appears low.",
   "diagnosisLay": "“The top chambers of your heart are quivering rather than beating. That doesn’t make you feel ill, but blood can pool and clot there, and a clot can travel to the brain and cause a stroke. The treatment is about preventing that.”",
   "management": {
    "reflectIce": "“The blood thinner is tied up with losing Gordon, and I’m not going to argue with your grief. Can I show you what’s different about his situation and yours?”",
    "psychosocial": "Give time and written information; invite the grandson to the next call; offer bereavement support if wanted.",
    "sharedPlan": [
     "Offer a DOAC per NICE NG196; explain the difference from warfarin and why aspirin is not recommended",
     "Baseline FBC, U&E with creatinine clearance, LFTs, thyroid function; BP optimised; avoid NSAIDs",
     "Follow-up call booked for next week; decision hers"
    ],
    "safetyNet": [
     "FAST symptoms: 999 whatever she decides",
     "Palpitations, breathlessness or faintness: same-day call; annual AF review"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Atrial fibrillation",
    "s": "Case walkthrough · NICE NG196",
    "href": "../cases/atrial-fibrillation.html"
   },
   {
    "ic": "🗺️",
    "t": "Palpitations pathway",
    "s": "Visual algorithm · irregular rhythm",
    "href": "algorithms/palpitations.html"
   },
   {
    "ic": "💠",
    "t": "Atrial fibrillation protocol",
    "s": "CHA₂DS₂-VASc · ORBIT · DOAC choice",
    "href": "management/atrial-fibrillation.html"
   },
   {
    "ic": "💠",
    "t": "Antiplatelets and anticoagulants",
    "s": "DOAC dosing · monitoring",
    "href": "management/antiplatelets-anticoagulants.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by talking pharmacology through a silence. Gordon arrives before his name does; hear him first, then separate his story from hers.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting aspirin as a reasonable compromise.",
     "why": "“Management plan not in line with current UK best practice.” NICE NG196 advises against aspirin monotherapy for AF stroke prevention.",
     "fix": "Say it plainly and kindly: little protection, real bleeding risk, not recommended."
    },
    {
     "dom": "tasks",
     "fail": "Reassuring her that asymptomatic AF needs nothing because she feels well.",
     "why": "Symptoms do not predict stroke risk; CHA₂DS₂-VASc does, and hers is 3.",
     "fix": "Explain the still-blood mechanism and why the watch caught what she could not feel."
    },
    {
     "dom": "tasks",
     "fail": "Skipping the bleeding-risk screen.",
     "why": "NICE NG196 asks for bleeding assessment (ORBIT) and management of modifiable risks; it is also what reassures a frightened patient.",
     "fix": "Ask about falls, bleeding, NSAIDs and alcohol, and say out loud what you will optimise."
    },
    {
     "dom": "rto",
     "fail": "Carrying on with DOAC facts after she goes quiet.",
     "why": "“Does not identify or respond to the patient’s cues.” The silence is Gordon.",
     "fix": "“You went quiet when I said blood thinner. What did that bring up?”"
    },
    {
     "dom": "rto",
     "fail": "Pressing for a decision on the call.",
     "why": "Pressure turns hesitation into a lasting refusal and fails the shared-decision marks.",
     "fix": "Written information, the grandson invited, a dated follow-up call, and a record that the door stays open."
    },
    {
     "dom": "gs",
     "fail": "No safety-net because she has declined treatment.",
     "why": "Non-specific or absent safety-netting is a standard failing statement, and her stroke risk is unchanged by her decision.",
     "fix": "FAST means 999 whatever she decides; palpitations or breathlessness mean a same-day call."
    }
   ]
  }
 },
 "angina-builder": {
  "stem": {
   "name": "Marek Dolan",
   "age": "47-year-old man",
   "pmh": [
    "No significant past medical history on file",
    "Current smoker, 15 a day"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Attended twice in 15 years. No blood pressure recorded for 6 years. No lipids or HbA1c on file. Self-employed builder.",
   "reason": "Video appointment booked for a “pulled chest muscle”."
  },
  "knowledge": {
   "guideline": "NICE CG95 (recent-onset chest pain of suspected cardiac origin) · NICE CG126 (stable angina) · NICE NG238 (cardiovascular disease risk and lipid modification)",
   "summary": "Constricting chest discomfort brought on by exertion and eased by rest within minutes is typical angina until proven otherwise. A falling exertional threshold makes it more urgent. Treatment and safety rules start in this consultation.",
   "points": [
    {
     "h": "Typical angina",
     "t": "NICE CG95: typical angina has all three of constricting discomfort in the chest, neck, shoulders, jaw or arms; brought on by physical exertion; relieved by rest or GTN within about 5 minutes. He has all three, plus smoking and a father with an MI at 52."
    },
    {
     "h": "Is it unstable?",
     "t": "Pain at rest, prolonged pain, or new angina that is quickly getting worse suggests an acute coronary syndrome. NICE CG95: if ACS is suspected and the last pain was within 12 hours, refer as an emergency (or same-day if the ECG is normal and pain-free); 12 to 72 hours ago, urgent same-day assessment. His falling threshold needs a same-day ECG and a low threshold for same-day cardiology advice."
    },
    {
     "h": "Investigation",
     "t": "NICE CG95: offer CT coronary angiography when clinical assessment suggests typical or atypical angina; in practice via the rapid-access chest pain clinic. In primary care: 12-lead ECG, BP, lipids, HbA1c, FBC, U&E and weight."
    },
    {
     "h": "GTN rules",
     "t": "NICE CG126: offer a short-acting nitrate. Teach: sit down, use the spray; if not better after 5 minutes, repeat; if the pain has not gone 5 minutes after the second dose, call 999. Warn about headache and dizziness."
    },
    {
     "h": "Drug treatment",
     "t": "NICE CG126: a beta-blocker or calcium-channel blocker as first-line anti-anginal; consider aspirin 75 mg daily. Statin per NICE NG238 (atorvastatin 80 mg for established cardiovascular disease). Offer smoking cessation support (NICE NG209)."
    },
    {
     "h": "Work and driving",
     "t": "Stop heavy loaded stair carries until assessed. DVLA Group 1: he must not drive when angina occurs at rest, with emotion or at the wheel; he need not tell the DVLA if symptoms are controlled."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Marek, I’m Dr Lee. I can see you’re on site, so I’ll be efficient. Tell me about this chest.",
    "dom": "rto",
    "why": "Respects his time and opens with his story"
   },
   {
    "who": "pt",
    "text": "Pulled something carrying plasterboard up three floors. Gets tight across here on the stairs with a load, goes off when I have a breather. Three weeks. Just tell me what to rub on it."
   },
   {
    "who": "dr",
    "text": "I’ll give you a straight answer. To do that, I need a few minutes on exactly how it behaves. Then we’ll agree a plan that works with the job. Fair?",
    "dom": "gs",
    "why": "Agenda that accepts his constraint without accepting his diagnosis"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Put your hand on the spot where it hurts and press hard. Does that bring it on? And does it catch when you twist or take a deep breath?",
    "dom": "tasks",
    "why": "Tests the muscle explanation properly and visibly"
   },
   {
    "who": "pt",
    "text": "(Presses.) No. Nothing. Doesn’t catch on breathing either. It’s more of a tight band. Sometimes a heaviness up in my throat."
   },
   {
    "who": "dr",
    "text": "Does it ever come when you’re resting, sitting in the van, or in bed? And how long does it last?",
    "dom": "tasks",
    "why": "Asks the rest-pain question that changes the lane"
   },
   {
    "who": "pt",
    "text": "Never sat down. Two, three minutes, then it goes. Cold mornings are worse. Used to take three flights to bring it on. Now it’s one and a bit."
   },
   {
    "who": "dr",
    "text": "That last bit is important. When did you last have it?",
    "dom": "tasks",
    "why": "Picks up the falling threshold and times the last episode"
   },
   {
    "who": "pt",
    "text": "This morning, on the stairs. Gone in a couple of minutes."
   },
   {
    "who": "dr",
    "text": "Any sweating or feeling sick with it, or feeling faint? And tell me about smoking, blood pressure, and your family’s hearts.",
    "dom": "tasks",
    "why": "Autonomic features and risk factors"
   },
   {
    "who": "pt",
    "text": "No sweating. Fifteen a day since I was fifteen. Never had my blood pressure done in years. My dad had a heart attack at fifty-two."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Your dad. What happened to him after that?",
    "dom": "rto",
    "why": "Follows the family cue to its meaning"
   },
   {
    "who": "pt",
    "text": "I was eighteen. He became an armchair. Dead at sixty-one. (Pause.) I’m forty-seven. You do the maths on every staircase. I called it a strain because I wanted you to agree with me."
   },
   {
    "who": "dr",
    "text": "Thank you for being that honest. That’s a heavy thing to carry up the stairs every morning. What would it mean for you if it was your heart?",
    "dom": "rto",
    "why": "Receives the confession and explores the consequence"
   },
   {
    "who": "pt",
    "text": "Signed off. Two lads I pay every Friday, a client already moaning. If I stop, three families don’t eat."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Then here’s the honest answer. Tightness that comes with effort, goes with rest, with no sore spot and no catch on breathing, isn’t a strain. It’s very likely angina: the heart asking for more blood than a narrowed artery can give. The good part of that sentence is that it’s a warning, before any damage.",
    "dom": "tasks",
    "why": "Earned reframe to angina with the reasoning shown"
   },
   {
    "who": "dr",
    "text": "Your dad’s generation found out on the day of the heart attack. You’re finding out at the warning. The tests and tablets exist so forty-seven doesn’t become fifty-two.",
    "dom": "rto",
    "why": "Answers the father’s story with the warning-versus-damage difference"
   },
   {
    "who": "pt",
    "text": "(Long breath.) Right. So what now?"
   },
   {
    "who": "dr",
    "text": "Because it’s coming on more easily, I don’t want to wait. I’d like you in this afternoon for a heart tracing, blood pressure and bloods. I’ll speak to the heart team today about how quickly they see you. If the tracing or their advice says today, it’s today.",
    "dom": "tasks",
    "why": "Weighs the falling threshold and lowers the bar for urgency"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Treatment starts today. A GTN spray under the tongue for attacks, a tablet to protect the heart from angina, a low-dose aspirin and a cholesterol tablet. I’ll go through each one with you this afternoon.",
    "dom": "tasks",
    "why": "Starts treatment in line with NICE CG126"
   },
   {
    "who": "dr",
    "text": "And work. I’m not signing you off. I’m redeploying you. The lads carry the boards and push the barrow; you run the job from the ground floor until the clinic has seen you. Can that work?",
    "dom": "rto",
    "why": "A work prescription built around his economics"
   },
   {
    "who": "pt",
    "text": "They’ll moan, but yeah. I can point. That I can do."
   },
   {
    "who": "dr",
    "text": "About the spray. If the tightness comes: stop, sit down, one spray. Not better in five minutes, a second spray. Still there five minutes after the second, ring 999, wherever you are.",
    "dom": "tasks",
    "why": "GTN teaching with the NICE CG126 999 rule"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "And 999 straight away for pain at rest, pain lasting more than a few minutes that the spray doesn’t shift, or pain with sweating or sickness. Don’t drive if it comes on at the wheel. Tell me back the spray rule.",
    "dom": "gs",
    "why": "Specific red flags and teach-back"
   },
   {
    "who": "pt",
    "text": "Sit, spray, five minutes, spray again, five more, then 999. And no driving if it’s bad."
   },
   {
    "who": "dr",
    "text": "Spot on. See you at four for the tracing. When the results are back we’ll have the smoking conversation properly; I suspect you’re more ready for it than you were this morning.",
    "dom": "gs",
    "why": "Dated follow-up and planned cessation discussion"
   },
   {
    "who": "pt",
    "text": "Yeah. I think I am. Cheers, doc."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him give the whole “pulled muscle” story before examining it.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Self-employed, two labourers paid weekly, no income protection, a client complaining; smoking and diet.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “eases off when I have a breather”, “three flights to one and a bit” and the father, and explored each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (strain), concern (father’s MI at 52 and three families’ income), expectation (something to rub on and carry on).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Self-palpation and positional check on video; same-day ECG, BP, weight; lipids, HbA1c, FBC, U&E; rapid-access chest pain clinic for CT coronary angiography.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Angina versus musculoskeletal pain versus reflux; tested the muscle story rather than dismissing it.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about rest pain, duration, autonomic features and timing of the last episode; recognised the falling threshold as a warning of instability.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named probable angina clearly and explained why it is not a strain.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day ECG and cardiology advice; GTN with teaching; beta-blocker or CCB; aspirin 75 mg; statin; a specific work plan instead of a sick note.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Smoking cessation offered at the right moment; BP and diabetes screening; DVLA Group 1 angina advice.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 rules for rest pain and GTN failure; afternoon appointment; results review with the smoking conversation booked.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Marek Dolan",
    "age": "47 years · male",
    "pmh": [
     "Nil on file",
     "Smoker 15/day"
    ],
    "meds": [
     "None"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Two attendances in 15 years. BP not recorded for 6 years. No lipids or HbA1c on record. Reception note: “wants a quick one, on a job”.",
    "reason": "Video slot booked for a “pulled chest muscle”."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agree",
     "d": "He wants liniment and to get back to work. Agree to be quick and straight, then ask how it behaves."
    },
    {
     "t": "1–4",
     "h": "Test the muscle story",
     "d": "Press the spot, twist, deep breath. Rest pain, duration, last episode, the falling threshold, sweating, risk factors."
    },
    {
     "t": "4–6",
     "h": "The father and the money",
     "d": "MI at 52, “became an armchair”. Then what being signed off would mean for three families."
    },
    {
     "t": "6–10",
     "h": "Name it and plan",
     "d": "Probable angina, warning before damage. Same-day ECG and cardiology advice; GTN, anti-anginal, aspirin, statin; redeploy him rather than sign him off."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "GTN rule with 999 after the second dose, rest pain 999, no driving with symptoms. Teach-back and a dated review."
    }
   ],
   "wordPics": {
    "fail": "Agrees it is a muscle strain and advises ibuprofen gel; never asks about rest pain or the falling threshold; no ECG, referral or GTN; ignores the father and the business; no safety-net.",
    "pass": "Identifies typical angina, refers to the chest pain clinic, arranges ECG and bloods, prescribes GTN with basic instructions, gives 999 advice and some work advice.",
    "exc": "All of the above, plus: earns the reframe by testing the muscle story first; recognises the falling threshold and arranges same-day ECG and cardiology advice; answers the father’s story with warning versus damage; redeploys him so the crew keeps working; teaches the GTN rule with teach-back."
   },
   "avoid": [
    {
     "dont": "“It sounds muscular, try some anti-inflammatory gel.”",
     "instead": "“There’s no sore spot and no catch on breathing, so I don’t think this is a strain. It behaves like angina.”",
     "why": "Colluding with the label is the single fastest way to fail this station."
    },
    {
     "dont": "“You need to stop working until this is sorted.”",
     "instead": "“I’m not signing you off, I’m redeploying you: the lads carry, you run the job from the ground floor.”",
     "why": "A plan he cannot afford is a plan he won’t follow."
    },
    {
     "dont": "“Here’s a GTN spray, use it when you get the pain.”",
     "instead": "“Sit, one spray, five minutes; again if needed; still there five minutes later, 999.”",
     "why": "GTN without the rule can delay a call for help in an evolving heart attack."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Self-employed income",
     "t": "No sick pay or income protection, and two labourers depend on his invoices. Work advice must keep the business running to be followed."
    },
    {
     "h": "Family history as fear",
     "t": "Watching a father become disabled after an MI at 52 shapes how a man reads his own chest pain, often towards denial."
    }
   ],
   "legal": [
    {
     "h": "DVLA and angina",
     "t": "Group 1: he must not drive when symptoms occur at rest, with emotion or at the wheel; he need not tell the DVLA if symptoms are controlled. Group 2 rules are stricter and would apply if he drives a large goods vehicle."
    },
    {
     "h": "Fit note",
     "t": "A fit note can advise “may be fit for work” with amended duties (no heavy lifting or loaded stair carries) rather than “not fit”, if he needs one for a client or insurer."
    }
   ],
   "professional": [
    {
     "h": "Honest diagnosis",
     "t": "Agreeing with a patient’s label to keep the mood pleasant falls short of good clinical care (GMC Good Medical Practice 2024). Explain the reasoning and document it."
    },
    {
     "h": "Shared decisions",
     "t": "Treatment and work adjustments are offered with their reasons; his choices and the safety advice given are recorded."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Local NHS stop smoking service, British Heart Foundation information on angina, and cardiac rehabilitation if coronary disease is confirmed."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Pain at rest, pain lasting more than 15 minutes, or pain with sweating or nausea: 999",
     "Rapidly falling exertional threshold: possible unstable angina, same-day assessment",
     "Last episode within 72 hours with suspected ACS: NICE CG95 same-day or emergency pathway"
    ],
    "psychosocial": [
     "Self-employed builder with two labourers and no income protection",
     "Heavy smoker, poor diet, no health checks for years",
     "Father’s MI at 52 and early death shaping his denial"
    ],
    "ice": [
     "Idea: “I’ve pulled something carrying plasterboard.”",
     "Concern: the father’s heart attack at 52, and three families losing income",
     "Expectation: something to rub on and permission to carry on"
    ]
   },
   "diagnosis": "Probable typical angina (constricting, exertional, relieved by rest within minutes) with a falling exertional threshold over three weeks, in a 47-year-old smoker with a father who had an MI at 52. Not musculoskeletal.",
   "diagnosisLay": "“Your heart is a muscle that needs more blood when you work hard. If one of its pipes has narrowed, it can’t get enough on the stairs, and that’s the tightness. When you rest, the demand drops and it eases. That’s angina, and it’s a warning, not the damage itself.”",
   "management": {
    "reflectIce": "“You called it a strain because you wanted me to agree, and because of what you watched happen to your dad. Finding it at the warning stage is exactly how you avoid his story.”",
    "psychosocial": "Redeploy, don’t sign off: he supervises from the ground floor while the labourers carry. Smoking conversation at the results review, when he is receptive.",
    "sharedPlan": [
     "Same-day ECG, BP and bloods (lipids, HbA1c, FBC, U&E); cardiology advice today because the threshold is falling; rapid-access chest pain clinic (NICE CG95)",
     "GTN with teaching; beta-blocker or CCB; aspirin 75 mg; statin per NICE NG238 (NICE CG126)",
     "No loaded stair carries until assessed; smoking cessation support"
    ],
    "safetyNet": [
     "999 if pain at rest, pain with sweating or sickness, or pain still present 5 minutes after a second GTN dose",
     "Do not drive if symptoms occur at rest, with emotion or at the wheel; review with results"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Angina",
    "s": "Case walkthrough · NICE CG126",
    "href": "../cases/angina.html"
   },
   {
    "ic": "🗺️",
    "t": "Chest pain pathway",
    "s": "Visual algorithm · NICE CG95",
    "href": "algorithms/chest-pain.html"
   },
   {
    "ic": "💠",
    "t": "Stable angina protocol",
    "s": "GTN · anti-anginals · secondary prevention",
    "href": "management/stable-angina.html"
   },
   {
    "ic": "💠",
    "t": "Smoking cessation",
    "s": "Treatment options · NICE NG209",
    "href": "management/smoking-cessation.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by agreeing with the patient’s label. It is passed by testing the muscle story honestly, naming angina, and building a plan he can afford to follow.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting “pulled muscle” because he is a builder and it started with lifting.",
     "why": "“Does not gather sufficient information to make a safe assessment.” Exertional discomfort relieved by rest within minutes is typical angina (NICE CG95).",
     "fix": "Test it: press the spot, twist, deep breath. Then ask whether it ever comes at rest."
    },
    {
     "dom": "tasks",
     "fail": "Missing “three flights, now one and a bit”.",
     "why": "A falling threshold suggests instability and changes how fast he needs assessment.",
     "fix": "Ask when it last happened and arrange a same-day ECG and cardiology advice."
    },
    {
     "dom": "tasks",
     "fail": "Giving GTN without the instructions, or with the wrong 999 rule.",
     "why": "NICE CG126: if the pain has not gone 5 minutes after the second dose, call 999.",
     "fix": "Sit, one spray, 5 minutes, second spray, 5 minutes, then 999. Get him to say it back."
    },
    {
     "dom": "rto",
     "fail": "Hearing about the father and moving straight on to cholesterol.",
     "why": "“Does not identify or respond to the patient’s cues.” The father’s MI is why he mislabelled the pain.",
     "fix": "Ask what happened to his dad after the heart attack, and let the confession come."
    },
    {
     "dom": "rto",
     "fail": "Signing him off work as the default.",
     "why": "He will refuse or ignore it; adherence depends on keeping his crew paid.",
     "fix": "A specific work prescription: no loaded stairs, supervise from the ground floor."
    },
    {
     "dom": "gs",
     "fail": "Jargon: “We’ll refer you to RACPC for CTCA and start a beta-blocker and a high-intensity statin.”",
     "why": "“Language not easily understood by the patient.”",
     "fix": "“A clinic that scans the heart’s pipes, a tablet to calm the heart on the stairs, and one to lower cholesterol.”"
    }
   ]
  }
 },
 "chest-acute-hgv": {
  "stem": {
   "name": "Barry Quinn",
   "age": "58-year-old man",
   "pmh": [
    "Type 2 diabetes (8 years)",
    "Current smoker, 20 a day",
    "Obesity (BMI 33)"
   ],
   "meds": [
    "Metformin"
   ],
   "allergy": "No known drug allergies",
   "recent": "Last seen 11 months ago. Occupation: HGV driver. Urgent telephone slot booked 40 minutes ago for “bad indigestion, wants something strong”. Reception note: sounded breathless, parked in a layby on the A38.",
   "reason": "Urgent same-day telephone call requested for indigestion."
  },
  "knowledge": {
   "guideline": "NICE CG95 (recent-onset chest pain of suspected cardiac origin) · NICE NG185 (acute coronary syndromes) · DVLA Assessing fitness to drive (cardiovascular disorders)",
   "summary": "Ongoing central heavy chest pain for an hour, with radiation, sweating and nausea, in a diabetic smoker is an acute coronary syndrome until proven otherwise. The call ends with an ambulance on its way, aspirin taken and nobody driving.",
   "points": [
    {
     "h": "Diagnose by ear",
     "t": "Heavy or tight central pain with spread to the arm or jaw, sweating and nausea points to ACS whatever word the patient uses. NICE CG95: do not use response to GTN or to antacids to make the diagnosis. A fortnight of exertional episodes settling with rest, now followed by pain at rest, is a crescendo pattern."
    },
    {
     "h": "Disposition",
     "t": "NICE CG95: current chest pain with suspected ACS is an emergency referral. From a telephone call that means 999 now, with his exact location. He must not drive himself to hospital or anywhere else."
    },
    {
     "h": "Aspirin",
     "t": "NICE CG95: give a single loading dose of 300 mg aspirin as soon as possible unless there is clear evidence of allergy, and make sure the ambulance crew know it has been given and when. Check the strength of the tablets he actually has."
    },
    {
     "h": "DVLA Group 2 after ACS",
     "t": "DVLA: a Group 2 (lorry and bus) licence is refused or revoked after an acute coronary syndrome, and he must tell the DVLA. Relicensing can be considered from at least 6 weeks after the event if he is symptom-free, meets the exercise or functional test requirements and has an LV ejection fraction of at least 40%. It is a pause with a defined route back, not the automatic end of a career. The Group 1 (car) rules are shorter."
    },
    {
     "h": "Clear the blockers",
     "t": "The delivery deadline, the load and the lorry are the real reasons he is minimising. Naming them and making the dispatcher responsible, in the call, is what gets him to accept the ambulance."
    },
    {
     "h": "After the event",
     "t": "NICE NG185: after an MI, offer cardiac rehabilitation and secondary prevention. The smoking and diabetes conversation belongs to the follow-up, not to the layby."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and first read",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Barry, it’s Dr Lee from the surgery. Thanks for waiting. Before anything else: are you parked up safely with the handbrake on, and is the pain there right now?",
    "dom": "tasks",
    "why": "Establishes safety and whether pain is ongoing in the first breath"
   },
   {
    "who": "pt",
    "text": "Yeah, I’m in a layby, I’m not going anywhere. It’s still there. Six out of ten, maybe. It’s heartburn, doc, I just need something stronger than Rennies. I’ve got Plymouth by four."
   },
   {
    "who": "dr",
    "text": "I hear you about Plymouth, and we’ll come back to it, I promise. Tell me what the pain feels like, in your own words.",
    "dom": "rto",
    "why": "Acknowledges his agenda without letting it steer the call"
   },
   {
    "who": "pt",
    "text": "Heavy. Like a strap pulled tight across the middle. Came on winding the trailer legs down, about an hour ago."
   },
   {
    "phase": "Focused triage",
    "clock": "1–3 min",
    "who": "dr",
    "text": "Does it go anywhere, into your arm, neck or jaw? And are you sweaty or sick with it?",
    "dom": "tasks",
    "why": "Targets radiation and autonomic features"
   },
   {
    "who": "pt",
    "text": "Bit down the left arm. Jaw, if I think about it. I’m sweating, but it’s warm in the cab. Feel a bit sick."
   },
   {
    "who": "dr",
    "text": "Have you had anything like this before, maybe when you were lifting or climbing up into the cab?",
    "dom": "tasks",
    "why": "Harvests the crescendo history"
   },
   {
    "who": "pt",
    "text": "Now you say it, three or four times in the last fortnight. Always when I was loading. Went off after a few minutes sat down. I never said anything."
   },
   {
    "who": "dr",
    "text": "Barry, I’m going to be straight with you, because I think you’d see through anything else. Heavy pain like a strap, into your arm and jaw, with sweating and sickness, in a man with diabetes who smokes, is not heartburn. I think your heart is short of blood right now, and those two weeks of turns were it warning you. This needs an ambulance to you now.",
    "dom": "tasks",
    "why": "Names ACS plainly and links the fortnight to today"
   },
   {
    "phase": "The resistance",
    "clock": "3–5 min",
    "who": "pt",
    "text": "(Silence, engine noise.) If I ring 999 from a layby, that’s me finished, isn’t it?"
   },
   {
    "who": "dr",
    "text": "Finished how? What are you picturing?",
    "dom": "rto",
    "why": "Hears the resistance as fear and explores it"
   },
   {
    "who": "pt",
    "text": "My mate Tony had a stent. DVLA had his HGV licence off him for months. I’ve got a mortgage, two car loans, my daughter’s back home going through a divorce. The wheel pays for all of it."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That’s a lot riding on you, and it explains why you’d rather this was indigestion. Can I give you the real rules, not Tony’s version?",
    "dom": "rto",
    "why": "Validates the fear and asks permission before informing"
   },
   {
    "who": "pt",
    "text": "Go on."
   },
   {
    "who": "dr",
    "text": "After a heart attack the DVLA pauses a lorry licence, yes. But there’s a route back: from six weeks onwards, if you’ve no symptoms, pass an exercise test and the heart is pumping well, you can apply to get it back. It’s a pause, not a full stop. The thing that ends a driving career for good is a big heart attack that nobody treated in time.",
    "dom": "rto",
    "why": "Answers the licence fear with honest DVLA specifics"
   },
   {
    "phase": "Action on the call",
    "clock": "5–8 min",
    "who": "dr",
    "text": "So here’s what happens now, and I’ll stay with you. I’m going to call 999 for you on the other line while you stay on with me. Tell me exactly where you are: road, direction, anything the crew will see.",
    "dom": "tasks",
    "why": "999 arranged from this call with the location pinned"
   },
   {
    "who": "pt",
    "text": "A38 southbound, layby after the Chudleigh turn. White Scania, blue trailer."
   },
   {
    "who": "dr",
    "text": "Got it. Next: turn the engine off, unlock the cab door, and sit upright; don’t lie flat. You said there’s aspirin in the glove box. Read me what the packet says.",
    "dom": "tasks",
    "why": "Practical instructions and checks the aspirin strength"
   },
   {
    "who": "pt",
    "text": "Aspirin 300 milligram, dispersible."
   },
   {
    "who": "dr",
    "text": "Perfect. Chew one whole tablet now, don’t just swallow it. It’s now … 1:52. The crew will want that time. Are you allergic to aspirin at all?",
    "dom": "tasks",
    "why": "Aspirin 300 mg chewed with allergy check and time logged"
   },
   {
    "who": "pt",
    "text": "No. Done. Tastes horrible. But what about the load? They’ll go mad."
   },
   {
    "who": "dr",
    "text": "The load is now your dispatcher’s problem, not yours. It takes one sentence: “Driver taken ill, lorry secure in a layby on the A38 southbound.” Would you like me to ring them, or will you do it once the ambulance is booked?",
    "dom": "tasks",
    "why": "Solves the practical chain that is blocking consent"
   },
   {
    "who": "pt",
    "text": "I’ll text them. Number’s right here. So nobody’s coming to shout at me about Plymouth."
   },
   {
    "who": "dr",
    "text": "No. And nobody drives that lorry until someone from the firm comes for it. Not you, today or tomorrow.",
    "dom": "tasks",
    "why": "Makes explicit that he does not drive"
   },
   {
    "phase": "Waiting and safety-net",
    "clock": "8–11 min",
    "who": "dr",
    "text": "The ambulance is booked and on its way. While we wait: if the pain gets worse, you feel faint, or you get more breathless, tell me straight away, and if we get cut off, ring 999 yourself. Keep the phone in your hand.",
    "dom": "gs",
    "why": "Concrete escalation plan for the minutes before the crew arrive"
   },
   {
    "who": "pt",
    "text": "All right. I feel a bit daft, calling it indigestion."
   },
   {
    "who": "dr",
    "text": "You’re not daft. You rang someone, and that matters. The smoking, the sugar and those two weeks of warnings are a conversation for when you’re home, and I want us to have it. Not today.",
    "dom": "rto",
    "why": "Defers the lifestyle conversation deliberately and kindly"
   },
   {
    "who": "pt",
    "text": "Fair enough."
   },
   {
    "who": "dr",
    "text": "Before the crew get there, tell me back what you’ll say to them.",
    "dom": "rto",
    "why": "Teach-back under pressure"
   },
   {
    "who": "pt",
    "text": "Pain for an hour, into the arm, chewed a 300 aspirin at ten to two. And turns for two weeks when I was loading."
   },
   {
    "phase": "Handover and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Exactly right. I’ll put a note on your record that I’ve spoken to you, and when you’re discharged I’ll ring you. We’ll talk about the licence paperwork, a fit note and getting you back on the road properly. I can hear the siren. Stay sat where you are.",
    "dom": "gs",
    "why": "Documents, commits to follow-up and closes safely"
   },
   {
    "who": "pt",
    "text": "Yeah, I can see the lights. Cheers, doc. Honestly."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Checked he was parked safely and whether pain was present now; let him describe the pain in his own words before challenging the heartburn label.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "HGV driver, Group 2 licence, mortgage and finance, daughter living at home; the delivery deadline and the dispatcher as the practical pressure.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Heard “heavy like a strap”, the sweating and “that’s me finished, isn’t it?” and explored each rather than moving past them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (heartburn), concern (losing the HGV licence after Tony’s stent), expectation (a stronger antacid and Plymouth by four).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Recognised that no remote assessment is adequate: emergency admission for ECG and troponin, not a prescription or a same-day surgery visit.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "ACS versus reflux, weighed on the character of the pain, radiation, autonomic features and risk factors; did not use antacid failure or success as a test.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Established ongoing pain for an hour with radiation, sweating and nausea, plus a two-week crescendo; treated it as ACS.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Told him plainly that this is probably his heart, not heartburn, and why.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "999 from the call with location pinned; aspirin 300 mg chewed with the time logged; engine off, door unlocked, upright; no driving; dispatcher told.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Diabetes and smoking recognised as risk; the lifestyle conversation deliberately deferred to follow-up; DVLA duties explained honestly.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "What to do if the pain worsens or the call drops; stayed on the line until the crew arrived; post-discharge call promised.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Barry Quinn",
    "age": "58 years · male",
    "pmh": [
     "Type 2 diabetes",
     "Smoker 20/day",
     "BMI 33"
    ],
    "meds": [
     "Metformin"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Reception note: “sounded breathless, said he’s parked up in a layby on the A38”. Occupation: HGV driver. Last contact 11 months ago.",
    "reason": "Urgent telephone slot: “bad indigestion, wants something strong.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Safety first",
     "d": "Is he parked safely, and is the pain there now? Two questions before any rapport-building, because the answer decides the call."
    },
    {
     "t": "1–3",
     "h": "Diagnose by ear",
     "d": "Character, radiation, sweating, nausea, the fortnight of exertional turns. Name ACS by minute three."
    },
    {
     "t": "3–5",
     "h": "Find the resistance",
     "d": "“That’s me finished” opens Tony and the licence. Give the real DVLA rules: a pause with a route back."
    },
    {
     "t": "5–8",
     "h": "Act on the call",
     "d": "999 with exact location, aspirin 300 mg chewed and timed, engine off, door unlocked, sit upright, dispatcher told, nobody drives."
    },
    {
     "t": "8–12",
     "h": "Wait with him",
     "d": "Escalation if worse or cut off, teach-back for the crew, lifestyle deferred on purpose, post-discharge call promised."
    }
   ],
   "wordPics": {
    "fail": "Prescribes a PPI or antacid; advises him to go to A&E or to drive to the surgery; never asks about radiation or sweating; misses the fortnight of exertional episodes; argues with the licence fear or ignores it; no aspirin and no 999.",
    "pass": "Recognises probable ACS, arranges 999 from the call, advises aspirin 300 mg, tells him not to drive, and gives a basic explanation of the DVLA position.",
    "exc": "All of the above, plus: pins his exact location, checks the aspirin strength and logs the time, solves the dispatcher and the load in one sentence, answers Tony’s story with accurate Group 2 rules, stays on the line, uses teach-back for the crew handover and defers the lifestyle talk on purpose."
   },
   "avoid": [
    {
     "dont": "“Try a stronger antacid and see if it settles, and ring back if it doesn’t.”",
     "instead": "“This doesn’t sound like heartburn to me. I think it’s your heart, and I want an ambulance to you now.”",
     "why": "A trial of treatment for ongoing possible ACS wastes the hour that matters most."
    },
    {
     "dont": "“Can you get yourself to A&E?”",
     "instead": "“You don’t drive anywhere. I’m calling 999 to your layby while you stay on the line.”",
     "why": "A man having a heart attack at the wheel of a lorry is a danger to himself and everyone on the A38."
    },
    {
     "dont": "“Don’t worry about your licence right now.”",
     "instead": "“After a heart event the DVLA pauses a lorry licence, and from six weeks there’s a route back if the tests are good.”",
     "why": "The licence is why he is refusing; only an honest, specific answer removes the block."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Livelihood and debt",
     "t": "His income, mortgage and a daughter’s return home all depend on the Group 2 licence. Economic fear is the main driver of minimising symptoms in professional drivers."
    },
    {
     "h": "Work pressure",
     "t": "Delivery slots and penalty points on late loads push drivers to keep going. Making the employer responsible for the load is part of safe care."
    }
   ],
   "legal": [
    {
     "h": "DVLA Group 2 after ACS",
     "t": "He must notify the DVLA and stop lorry driving. Relicensing can be considered from at least 6 weeks after the event if he is symptom-free, meets the functional test requirements and has an LV ejection fraction of at least 40% (DVLA Assessing fitness to drive)."
    },
    {
     "h": "Fit note and sick pay",
     "t": "He will need a fit note after discharge. If he is an employee, Statutory Sick Pay applies; the fit note can suggest adjusted or non-driving duties while the licence is suspended."
    }
   ],
   "professional": [
    {
     "h": "Duty over the phone",
     "t": "A remote consultation carries the same duty of care. When the history suggests ACS, arranging emergency help from the call and documenting the advice is good clinical care (GMC Good Medical Practice 2024)."
    },
    {
     "h": "Confidentiality and the DVLA",
     "t": "The duty to tell the DVLA is his. GMC guidance (Confidentiality: patients’ fitness to drive and reporting concerns to the DVLA) allows disclosure without consent only if he continues to drive against advice and cannot be persuaded to stop."
    }
   ],
   "community": [
    {
     "h": "After discharge",
     "t": "Cardiac rehabilitation (NICE NG185), local NHS stop smoking service, British Heart Foundation information on driving and returning to work."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Ongoing central heavy pain for more than 15 minutes with radiation to arm or jaw, sweating or nausea: 999 now",
     "New exertional episodes over recent weeks, then pain at rest: crescendo pattern",
     "Breathlessness, faintness or collapse while waiting: tell 999 immediately"
    ],
    "psychosocial": [
     "HGV driver whose household finances depend on his Group 2 licence",
     "Delivery deadline and dispatcher pressure deciding for him",
     "Alone in a cab in a layby: location, access and the lorry’s security"
    ],
    "ice": [
     "Idea: “It’s just heartburn, a bad one.”",
     "Concern: losing the lorry licence like Tony did after his stent",
     "Expectation: a stronger antacid sent to a chemist and Plymouth by four"
    ]
   },
   "diagnosis": "Suspected acute coronary syndrome: ongoing central heavy chest pain for an hour with radiation to arm and jaw, sweating and nausea, after a fortnight of exertional episodes, in a diabetic smoker. Emergency admission required.",
   "diagnosisLay": "“The pain you’re describing sounds like your heart isn’t getting enough blood, probably from a narrowed or blocked artery. The turns you’ve had loading up were the warning. It needs a hospital today, and quickly.”",
   "management": {
    "reflectIce": "“You’ve been calling this heartburn because the other word puts your licence and your family’s money at risk. Let me tell you what really happens with the DVLA, so it isn’t Tony’s story deciding for you.”",
    "psychosocial": "Dispatcher told in one message; the lorry left secure for the firm to collect; honest DVLA route back; fit note and follow-up call after discharge.",
    "sharedPlan": [
     "999 from this call with exact location; stay on the line",
     "Aspirin 300 mg chewed now, time recorded for the crew (NICE CG95)",
     "Engine off, door unlocked, sit upright, no driving"
    ],
    "safetyNet": [
     "Worse pain, faintness or breathlessness before the crew arrive, or the call drops: ring 999 again at once",
     "GP call after discharge for DVLA, fit note, cardiac rehabilitation and smoking support"
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
    "t": "Chest pain pathway",
    "s": "Visual algorithm · triage and referral",
    "href": "algorithms/chest-pain.html"
   },
   {
    "ic": "💠",
    "t": "MI secondary prevention",
    "s": "After ACS · NICE NG185",
    "href": "management/mi-secondary-prevention.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA",
    "s": "Group 1 and Group 2 standards",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by taking the patient’s label at face value, or by getting the clinical steps right and never finding out why he is refusing them. The licence is the lock; honest DVLA facts are the key.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting “heartburn” and sending a PPI or antacid prescription, or advising a trial to see if it settles.",
     "why": "“Does not gather sufficient information to make a safe assessment.” The description is classic for ACS, and NICE CG95 says not to use response to treatment to diagnose.",
     "fix": "Ask about character, radiation, sweating and nausea in the first two minutes, then say what you think out loud."
    },
    {
     "dom": "tasks",
     "fail": "Advising him to “get to A&E” or to come to the surgery.",
     "why": "“Management plan not in line with current UK best practice.” Ongoing pain means an emergency ambulance, and he must not drive.",
     "fix": "Arrange 999 from the call, pin the location, and say plainly that nobody drives the lorry."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting aspirin, or not checking the tablets he has.",
     "why": "NICE CG95 recommends 300 mg aspirin as soon as possible unless allergic; a 75 mg tablet swallowed whole is not the same thing.",
     "fix": "Ask him to read the packet, check allergy, have him chew 300 mg and note the time for the crew."
    },
    {
     "dom": "rto",
     "fail": "Repeating “you need an ambulance” louder each time he says no.",
     "why": "“Does not identify or respond to the patient’s cues.” The refusal is fear about the licence, not ignorance.",
     "fix": "Ask “finished how?” and let Tony’s story come out, then answer it with the real Group 2 rules."
    },
    {
     "dom": "rto",
     "fail": "Lecturing about smoking and diabetes while he is in pain in a layby.",
     "why": "Mistimed advice reads as blame and costs his trust at the moment you need his agreement.",
     "fix": "Name it for later: “That’s a conversation for when you’re home, and I want us to have it.”"
    },
    {
     "dom": "gs",
     "fail": "Hanging up once the ambulance is called, with no plan if things change.",
     "why": "Non-specific safety-netting is a standard failing statement; he is alone and may deteriorate.",
     "fix": "Stay on the line, tell him what to do if the pain worsens or the call drops, and use teach-back for the crew handover."
    }
   ]
  }
 },
 "cough-older-cxr": {
  "stem": {
   "name": "Derek Halloran",
   "age": "64-year-old man",
   "pmh": [
    "Ex-smoker: stopped 8 years ago, 40 pack-year history",
    "Cough for 11 weeks, under investigation"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "Chest X-ray requested for an 11-week cough: reported as normal. Weight on record steady. No haemoptysis documented. Retired; previous occupation not recorded.",
   "reason": "Telephone appointment for his chest X-ray result."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) · BTS clinical statement on chronic cough in adults (2023) · NICE NG115 (COPD)",
   "summary": "A normal chest X-ray does not close the case. An 11-week cough in a 64-year-old ex-smoker with asbestos exposure, hoarseness, possible haemoptysis and possible weight loss needs a face-to-face review and onward referral, not an all-clear.",
   "points": [
    {
     "h": "What the X-ray was for",
     "t": "NICE NG12 (updated April 2026): offer an urgent direct-access chest X-ray to assess for lung cancer or mesothelioma at 40 and over with 2 or more unexplained symptoms (cough, fatigue, breathlessness, chest pain, weight loss, appetite loss), or 1 or more if the person has ever smoked or (for mesothelioma) been exposed to asbestos. Derek met this, and the film was done. A plain film can miss both cancers, so persisting symptoms need reassessment."
    },
    {
     "h": "Haemoptysis overrides the film",
     "t": "NICE NG12 (updated April 2026): refer on a suspected cancer pathway for lung cancer if aged 40 and over with unexplained haemoptysis. “Maybe a fleck once” must be clarified, not accepted as a bitten cheek."
    },
    {
     "h": "Hoarseness",
     "t": "NICE NG12 (updated April 2026): consider a suspected cancer pathway referral for laryngeal cancer at 45 and over with persistent unexplained hoarseness. In a smoker it can also reflect recurrent laryngeal nerve involvement from chest disease."
    },
    {
     "h": "Weight loss",
     "t": "NICE NG12 (updated April 2026): at 60 and over with unexplained weight loss of more than 5% within 6 months, assess for other symptoms and offer urgent investigation, a suspected cancer pathway referral, or a non-specific symptoms pathway referral. Weigh him; don’t rely on “a notch looser”."
    },
    {
     "h": "Asbestos and the occupational history",
     "t": "Pipe lagging and boiler insulation work before the 1990s is significant asbestos exposure. Latency for mesothelioma and asbestos-related lung cancer is decades. It is on no template; ask “what work did you do?”. Where symptoms persist after a normal film, NICE NG12 (updated April 2026) safety-netting applies: arrange review and discuss with the local respiratory or lung cancer team, who will usually go to CT."
    },
    {
     "h": "Other causes still count",
     "t": "Chronic cough is one lasting over 8 weeks (BTS 2023). Consider COPD (spirometry; NICE NG115) given 40 pack-years and exertional breathlessness, reflux, rhinitis, and asbestos-related pleural or interstitial disease. None of these can be assumed until cancer is properly excluded."
    },
    {
     "h": "Same-day action",
     "t": "Frank or large-volume haemoptysis, breathlessness at rest, stridor, or chest pain with breathlessness needs same-day assessment."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Morning Mr Halloran, it’s Dr Lee from the surgery. Can I just check I’m speaking to Derek, and that you’re somewhere you can talk for ten minutes or so?",
    "dom": "gs",
    "why": "Identity and privacy checks on a telephone consultation"
   },
   {
    "who": "pt",
    "text": "That’s me. The lady said the X-ray was clear, so that’s good, isn’t it? Mind you, the cough’s no better. Eleven weeks now. But if the picture’s clean, I’ll stop bothering you."
   },
   {
    "who": "dr",
    "text": "You’re not bothering me at all. I can confirm the X-ray didn’t show anything obvious. You also said the cough’s no better, and I don’t want to skip past that. Can I ask a few questions about it before we decide what the result means for you?",
    "dom": "rto",
    "why": "Gives the result honestly without granting an all-clear, and picks up the afterthought cue"
   },
   {
    "who": "pt",
    "text": "Go on, then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Tell me about the cough itself. How has it been over these eleven weeks?",
    "dom": "rto",
    "why": "Open question before narrowing"
   },
   {
    "who": "pt",
    "text": "Dry, tickly, there most of the day. Not getting worse exactly, just not going. I’m a bit more puffed on the golf course than last year, but I’m 64."
   },
   {
    "who": "dr",
    "text": "When you say more puffed, is that new since the cough started, or has it been creeping up? And has your voice changed at all?",
    "dom": "tasks",
    "why": "Re-screens the symptoms he minimises: breathlessness and hoarseness"
   },
   {
    "who": "pt",
    "text": "Creeping, I’d say. And yes, now you mention it, I’m hoarse most mornings. My wife says I sound like a frog."
   },
   {
    "who": "dr",
    "text": "Have you ever coughed up any blood, even a streak or a fleck?",
    "dom": "tasks",
    "why": "Asks directly about haemoptysis, an NICE NG12 (updated April 2026) referral criterion"
   },
   {
    "who": "pt",
    "text": "Maybe a fleck once, a couple of weeks back. I probably bit my cheek."
   },
   {
    "who": "dr",
    "text": "Was it mixed in with what you coughed up, or in your mouth before you coughed? And how about your weight and appetite?",
    "dom": "tasks",
    "why": "Clarifies the fleck rather than accepting the explanation, and asks about weight"
   },
   {
    "who": "pt",
    "text": "It was in the phlegm, to be honest. Appetite’s fine. Trousers are a notch looser, but I’ve been trying."
   },
   {
    "who": "dr",
    "text": "Thank you. Can I ask something the forms never do: what work did you do over the years?",
    "dom": "tasks",
    "why": "Takes the occupational history no template prompts"
   },
   {
    "who": "pt",
    "text": "Thirty years lagging pipes. Stripping old boiler insulation in the seventies and eighties. Blue asbestos, we had snowball fights with it. Nobody told us."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "That matters a great deal, and I’m glad you told me. I get the sense that X-ray result meant a lot to you. What were you hoping it would tell you?",
    "dom": "rto",
    "why": "Responds to the exposure and explores what the all-clear means to him"
   },
   {
    "who": "pt",
    "text": "My mate Tommy, same crew. Died of mesothelioma three years ago. Eighteen months, horrible. I’ve been waiting for my turn ever since. I thought the X-ray meant I could stop."
   },
   {
    "who": "dr",
    "text": "I’m so sorry about Tommy. Three years of carrying that on your own is a lot. It makes complete sense that you wanted this call to end the worry.",
    "dom": "rto",
    "why": "Names and validates the hidden fear without feeding or dismissing it"
   },
   {
    "who": "pt",
    "text": "So you’re saying it isn’t the all-clear."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "I’m saying I owe you the honest version. An X-ray is a good first look, but it can miss things. You have a cough that won’t settle, a hoarse voice, some weight off, a fleck of blood in the phlegm, and your smoking and asbestos history. Any one of those alone would be small. Together, national guidance says I should refer you urgently for a proper look, even with a normal X-ray.",
    "dom": "tasks",
    "why": "Explains why the normal CXR does not exclude cancer and states the NICE NG12 (updated April 2026) basis"
   },
   {
    "who": "pt",
    "text": "So you think it’s cancer."
   },
   {
    "who": "dr",
    "text": "I don’t know, and I’m not telling you it is. There are other causes: smoking damage to the lungs, reflux, asbestos scarring that isn’t cancer. What I am telling you is that I’d be failing you if I didn’t look properly. The next step is usually a CT scan, which sees far more than an X-ray.",
    "dom": "tasks",
    "why": "Honest differential without false reassurance or catastrophising"
   },
   {
    "who": "pt",
    "text": "Right. That’s fair, I suppose."
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "Here’s what I suggest. I’d like to see you in person this week to examine your chest and neck, weigh you properly and check a breathing test. I’m sending an urgent referral to the lung team today, and they’ll usually arrange the CT within a couple of weeks. If the voice is still hoarse, it gets looked at too. How does that sit with you?",
    "dom": "tasks",
    "why": "Suspected cancer pathway referral, examination and weight, shared decision"
   },
   {
    "who": "pt",
    "text": "Better to know, I suppose. Tommy left it too late."
   },
   {
    "who": "dr",
    "text": "Getting on with it now is the right choice, whatever it shows. Is there anyone at home you’d want to talk this through with?",
    "dom": "rto",
    "why": "Checks support before closing"
   },
   {
    "who": "pt",
    "text": "My wife. I’ve never told her how much Tommy’s been on my mind."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "It might help to tell her. If you cough up more than a fleck of blood, get suddenly more breathless, or have chest pain, ring us the same day, or 999 if it’s severe. The hospital will contact you within two weeks. If you haven’t heard in a week, ring me, and I’ll call you when the results are back.",
    "dom": "gs",
    "why": "Specific safety-net, timescales, and the surgery owns the follow-up"
   },
   {
    "who": "pt",
    "text": "Right. Thanks, doctor. Not what I rang for, but thanks."
   },
   {
    "who": "dr",
    "text": "Just so I know I’ve explained it well, what will you tell your wife tonight?",
    "dom": "rto",
    "why": "Teach-back to check understanding"
   },
   {
    "who": "pt",
    "text": "That the X-ray was clear but it isn’t the end of it. I’m getting a scan and I’m seeing you this week."
   },
   {
    "who": "dr",
    "text": "That’s exactly it. You’ve done the right thing, Derek. I’ll see you on Thursday.",
    "dom": "gs",
    "why": "Confirms the plan and a dated follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Gave the result honestly, then opened up the ongoing cough instead of letting him close the call on “it’s clear”.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Occupational history (30 years of asbestos lagging), smoking history, retirement and golf, who is at home.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “the cough’s no better”, “that’s good, isn’t it?” and the fleck he explained away, and explored each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (clear X-ray means all clear), concern (Tommy’s death from mesothelioma), expectation (to be discharged).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Face-to-face review this week: chest, clubbing, neck nodes, measured weight, spirometry; urgent CT via the lung team.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Lung cancer and mesothelioma vs COPD, reflux, rhinitis and benign asbestos-related disease; clarified whether the blood was coughed up.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Recognised haemoptysis at 40+, persistent hoarseness at 45+ and possible weight loss at 60+ as NICE NG12 (updated April 2026) criteria despite the normal film.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated plainly: persistent cough with red flags, cancer not excluded by the X-ray, cause not yet known.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Suspected cancer pathway referral to the lung team the same day, CT expected; hoarseness followed up; honest framing, no false reassurance.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Considered COPD (spirometry) and asbestos-related disease; involved his wife as support.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day triggers named; referral timescale given; surgery chases; dated review and a results call.",
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
    "name": "Derek Halloran",
    "age": "64 years · male",
    "pmh": [
     "Ex-smoker, 40 pack-years (stopped 8 years ago)",
     "Cough 11 weeks"
    ],
    "meds": [
     "Nil regular"
    ],
    "allergy": "NKDA",
    "recent": "⚠ CXR for 11-week cough: reported NORMAL. Weight on record steady. No haemoptysis documented. Occupation: retired (previous job not recorded).",
    "reason": "Telephone call for X-ray result. “I just want to hear it from a doctor.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Result, but not the all-clear",
     "d": "Give the result truthfully and pick up “the cough’s no better” straight away. Don’t let “that’s good, isn’t it?” end the call."
    },
    {
     "t": "1–5",
     "h": "Re-screen and ask about work",
     "d": "Breathlessness, hoarseness, the fleck of blood, weight. Then the one question no template asks: “What work did you do?”"
    },
    {
     "t": "5–7",
     "h": "ICE and Tommy",
     "d": "Ask what he hoped the X-ray would say. The workmate’s mesothelioma surfaces; name it and acknowledge three years of private dread."
    },
    {
     "t": "7–10",
     "h": "Explain and refer",
     "d": "Why a normal film doesn’t exclude cancer; the NICE NG12 (updated April 2026) features he has; urgent referral to the lung team and a face-to-face this week."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Same-day triggers, the two-week timescale, who chases, teach-back: “What will you tell your wife?”"
    }
   ],
   "wordPics": {
    "fail": "Reads out “the X-ray is normal” and closes; never asks about work; accepts “probably bit my cheek”; no referral; or frightens him with “it could be cancer” and no plan.",
    "pass": "Explains that a normal X-ray does not exclude cancer; finds the asbestos history and the red flags; arranges urgent referral and a face-to-face review; gives a basic safety-net.",
    "exc": "All of the above, plus: clarifies the haemoptysis precisely; names Tommy and the three-year dread with warmth; frames the scan as looking properly, not confirming doom; the surgery owns the chase; teach-back and support from his wife."
   },
   "avoid": [
    {
     "dont": "“Good news, your X-ray is clear, so nothing to worry about.”",
     "instead": "“The X-ray didn’t show anything obvious. But it can miss things, and your cough hasn’t settled, so we’re not stopping here.”",
     "why": "A false all-clear on a normal film is the error the station is built to catch."
    },
    {
     "dont": "“Any other symptoms?”",
     "instead": "“Have you coughed up any blood at all, even a fleck, and was it in the phlegm?”",
     "why": "Vague questions let him minimise; the specific question finds an NICE NG12 (updated April 2026) criterion."
    },
    {
     "dont": "“I’m worried this could be cancer, like your friend’s.”",
     "instead": "“I don’t know what’s causing it, and I’m not saying it’s cancer. I’d be failing you if I didn’t look properly.”",
     "why": "Catastrophising confirms his worst fear; honest uncertainty with a plan does not."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Occupational exposure",
     "t": "Thirty years of pipe lagging and boiler stripping is significant asbestos exposure. It is rarely recorded; ask about work in every chronic chest presentation."
    },
    {
     "h": "Grief and health anxiety",
     "t": "A workmate’s death from mesothelioma has shaped three years of silent dread. He has not told his wife. Involving her supports him through the referral."
    }
   ],
   "legal": [
    {
     "h": "Industrial disease, if diagnosed",
     "t": "If an asbestos-related cancer is later confirmed, he may be entitled to Industrial Injuries Disablement Benefit and other compensation schemes. Record the exposure history carefully now."
    }
   ],
   "professional": [
    {
     "h": "Honesty and good clinical care",
     "t": "GMC Good medical practice (2024): give honest information and act on concerns. Reassuring him on a normal film while red flags persist would fall short of good clinical care."
    },
    {
     "h": "Shared decisions",
     "t": "GMC Decision making and consent (2020): explain why referral is recommended, what the tests involve, and record his agreement and the safety-netting given."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Mesothelioma UK, Roy Castle Lung Cancer Foundation, Asthma + Lung UK, and Macmillan for information and emotional support while waiting for results."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Haemoptysis at 40+ — NICE NG12 (updated April 2026) suspected lung cancer pathway referral, whatever the X-ray showed",
     "Persistent unexplained hoarseness at 45+ — consider a suspected cancer pathway referral for laryngeal cancer (NICE NG12 (updated April 2026))",
     "Unexplained weight loss over 5% in 6 months at 60+ — NICE NG12 (updated April 2026) 1.13.2; asbestos exposure; progressive breathlessness"
    ],
    "psychosocial": [
     "What work did you do? Asbestos history, dates and protection",
     "The workmate’s death and three years of silent fear",
     "Who is at home; whether his wife knows how worried he is"
    ],
    "ice": [
     "Idea: “The X-ray was clear, so that’s the all-clear.”",
     "Concern: ending up like Tommy, who died of mesothelioma",
     "Expectation: to be told he’s fine and stop “bothering” the surgery"
    ]
   },
   "diagnosis": "Persistent cough for 11 weeks with hoarseness, possible haemoptysis and probable weight loss in a 64-year-old ex-smoker with heavy asbestos exposure: lung cancer or mesothelioma not excluded by a normal chest X-ray; meets NICE NG12 (updated April 2026) referral criteria.",
   "diagnosisLay": "“An X-ray is like a quick photo from across the room. It catches a lot, but it can miss things. Because your cough hasn’t settled and you’ve got those other changes, I want the detailed scan, which looks at the chest in slices.”",
   "management": {
    "reflectIce": "“You hoped this call would end three years of worrying since Tommy died. I can’t give you that today, but I can make sure we look properly and quickly, so you’re not left guessing.”",
    "psychosocial": "Invite him to involve his wife; acknowledge the grief for Tommy; make the surgery responsible for chasing so the waiting is shorter and less lonely.",
    "sharedPlan": [
     "Suspected cancer pathway referral to the lung team today (NICE NG12 (updated April 2026)); CT usually arranged by the team",
     "Face-to-face this week: examination, measured weight, spirometry; hoarseness followed up if it persists",
     "Record the asbestos exposure; consider COPD and other causes once cancer is excluded"
    ],
    "safetyNet": [
     "Same day for more than a fleck of blood, worsening breathlessness or chest pain; 999 if severe",
     "Ring if no hospital contact within a week; GP calls with results"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Chronic cough pathway",
    "s": "Visual algorithm · cough over 8 weeks",
    "href": "algorithms/chronic-cough.html"
   },
   {
    "ic": "🗺️",
    "t": "Hoarseness pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) laryngeal",
    "href": "algorithms/hoarseness.html"
   },
   {
    "ic": "🗺️",
    "t": "Weight loss pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) 1.13.2",
    "href": "algorithms/weight-loss.html"
   },
   {
    "ic": "📋",
    "t": "Breathlessness",
    "s": "Case walkthrough",
    "href": "../cases/breathlessness.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by one sentence: “Your X-ray is clear.” The second trap is the template. The asbestos history sits behind a single question that no form prompts.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Reading out the normal result and closing the call because he asked to be discharged.",
     "why": "“Management plan not in line with current UK best practice.” A plain film does not exclude lung cancer or mesothelioma, and his symptoms persist.",
     "fix": "“The X-ray didn’t show anything obvious, but your cough hasn’t settled, so we’re not stopping here.”"
    },
    {
     "dom": "tasks",
     "fail": "Never asking about his job.",
     "why": "“Does not gather sufficient information to make a safe assessment.” Thirty years of asbestos changes the risk completely.",
     "fix": "Ask every older patient with a chronic chest symptom: “What work did you do over the years?”"
    },
    {
     "dom": "tasks",
     "fail": "Accepting “probably bit my cheek” for the fleck of blood.",
     "why": "Unexplained haemoptysis at 40+ is a NICE NG12 (updated April 2026) suspected cancer pathway criterion by itself.",
     "fix": "“Was it in what you coughed up, or in your mouth?” Then act on the answer."
    },
    {
     "dom": "rto",
     "fail": "Missing the reason he wants the all-clear so badly.",
     "why": "“Does not identify or respond to the patient’s cues.” Tommy’s death is why he may downplay symptoms and resist referral.",
     "fix": "“That result seemed to matter a lot to you. What were you hoping it would tell you?”"
    },
    {
     "dom": "gs",
     "fail": "Swinging to catastrophe: “this could well be mesothelioma like your friend’s.”",
     "why": "“Language not easily understood” or frightening; he disengages or panics.",
     "fix": "Honest uncertainty: “I don’t know, and I’m not saying it’s cancer. I want to look properly.”"
    },
    {
     "dom": "gs",
     "fail": "“Ring us if you’re worried” with no timescale.",
     "why": "Non-specific safety-netting is a standard failing feedback statement.",
     "fix": "Name the triggers, give the two-week timescale, say who chases, and book the face-to-face."
    }
   ]
  }
 },
 "cough-young-asthma": {
  "stem": {
   "name": "Amara Okafor",
   "age": "29-year-old woman",
   "pmh": [
    "Childhood eczema",
    "Allergic rhinitis (hay fever)"
   ],
   "meds": [
    "Cetirizine as required"
   ],
   "allergy": "No known drug allergies",
   "recent": "Telephone contact 4 weeks ago with a locum: delayed antibiotic prescription for cough, taken, no improvement. Recorded as non-smoker. Primary-school teacher.",
   "reason": "Video appointment: cough for 10 weeks, waking at night, requesting antibiotics."
  },
  "knowledge": {
   "guideline": "NICE NG245 (asthma: diagnosis, monitoring and chronic management, 2024, joint with BTS and SIGN) · NICE NG209 (tobacco, updated February 2025) · NICE NG247 (maternal and child nutrition, 2025) · UKHSA Green Book chapter 24 (pertussis)",
   "summary": "A 10-week dry cough, worse at night and with cold air, laughter and exercise, in an atopic woman with childhood asthma is probably cough-variant asthma, not infection. Confirm objectively, treat with an inhaler, and remember that asthma treatment is safe in pregnancy while uncontrolled asthma is not.",
   "points": [
    {
     "h": "Pattern",
     "t": "Chronic dry cough with nocturnal waking and triggers such as cold air, exercise and laughter, on a background of childhood asthma, eczema, hay fever and family history, suggests asthma presenting as cough. Wheeze may be absent. A second antibiotic has no role."
    },
    {
     "h": "Objective diagnosis",
     "t": "NICE NG245 (adults): measure blood eosinophils or FeNO first; asthma is diagnosed if eosinophils are above the reference range or FeNO is 50 ppb or more. If not confirmed, spirometry with bronchodilator reversibility (FEV1 up by 12% or more and 200 ml or more), then peak-flow variability or further testing. Test before starting inhaled steroids where possible, because they lower FeNO."
    },
    {
     "h": "Treatment",
     "t": "NICE NG245: for newly diagnosed asthma in adults, offer as-needed low-dose ICS/formoterol (AIR); do not offer a SABA alone. Use inhaled corticosteroids as normal in pregnancy; offer oral steroids for exacerbations if needed, as benefits outweigh risks."
    },
    {
     "h": "Differential and red flags",
     "t": "Reflux (worse lying flat, acid brash), post-infective cough, pertussis (paroxysms, whoop, vomiting after coughing; notifiable), and vaping as an airway irritant. Haemoptysis, weight loss, fever or focal signs change the plan."
    },
    {
     "h": "Pregnancy essentials",
     "t": "NICE NG247: folic acid 400 micrograms daily until 12 weeks (5 mg if higher risk). Refer to the midwife for booking. Pertussis vaccine is offered from 16 weeks, ideally around 20 weeks (Green Book chapter 24). Review cetirizine per BNF."
    },
    {
     "h": "Vaping",
     "t": "NICE NG209 lists nicotine-containing e-cigarettes among options for stopping smoking, and in pregnancy it is far safer than returning to cigarettes. Refer to a stop smoking service for help to stop vaping without relapsing to smoking."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Amara, I’m Dr Lee. Ten weeks is a long time to be coughing through lessons. Tell me about it from the start.",
    "dom": "rto",
    "why": "Open question that acknowledges the impact"
   },
   {
    "who": "pt",
    "text": "It started after a cold the whole class had. The cold went, the cough stayed. I’m up at two and three coughing, and the kids do impressions of me. The antibiotics did nothing. I just need something that actually works."
   },
   {
    "who": "dr",
    "text": "Let’s find something that works. If this were the kind of cough antibiotics fix, the first course would have fixed it, so I’d like to work out what it really is. A few questions first, then a plan. All right?",
    "dom": "gs",
    "why": "Resists the antibiotic request and sets an agenda"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Is it dry or bringing anything up? And what sets it off?",
    "dom": "tasks",
    "why": "Characterises the cough and triggers"
   },
   {
    "who": "pt",
    "text": "Dry. Night-time, cold air walking to school, when I laugh, after PE with the class. Sometimes my chest feels tight."
   },
   {
    "who": "dr",
    "text": "Did you have asthma as a child, or eczema or hay fever? Anyone in the family?",
    "dom": "tasks",
    "why": "Explores the atopic background"
   },
   {
    "who": "pt",
    "text": "Asthma as a kid, grew out of it. Eczema, hay fever every summer. Mum and my brother have asthma."
   },
   {
    "who": "dr",
    "text": "Any blood in what you cough, weight loss, fevers, chest pain? Heartburn, or worse lying flat? Coughing fits that end in a whoop or being sick?",
    "dom": "tasks",
    "why": "Screens red flags, reflux and pertussis"
   },
   {
    "who": "pt",
    "text": "No to all of those."
   },
   {
    "who": "dr",
    "text": "Two questions I ask everyone with a cough, with no judgement at all. Do you smoke, or vape?",
    "dom": "tasks",
    "why": "Asks about vaping openly and safely"
   },
   {
    "who": "pt",
    "text": "(Pause.) I vape. I started to stop smoking, eighteen months ago. Everyone said it was the healthy option. Probably more than I should. In bed too."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. Stopping cigarettes was a real achievement. Vaping can irritate exactly the airways we’re talking about, so it’s part of the picture, not a telling-off.",
    "dom": "rto",
    "why": "Receives the disclosure without shame"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Before we talk about a plan, is there anything else on your mind with all this? Sometimes a cough that won’t go carries a bigger worry.",
    "dom": "rto",
    "why": "Creates space for the hidden agenda"
   },
   {
    "who": "pt",
    "text": "(Long pause.) I’m pregnant. Seven weeks. I found out four days ago. I haven’t told anyone, not even him. I keep lying awake thinking the coughing, or the vaping, or whatever you give me, will hurt the baby."
   },
   {
    "who": "dr",
    "text": "Thank you for trusting me with that. Congratulations, if that feels like the right word. It doesn’t change what the cough is, but it matters a lot for how we treat it, so I’m glad you said. What’s worrying you most?",
    "dom": "rto",
    "why": "Receives the disclosure as entrusted and checks her feelings"
   },
   {
    "who": "pt",
    "text": "That I’ve already done damage. And that I can’t take anything now."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me explain what I think this is. A dry cough, worse at night, in cold air and when you laugh, with your childhood asthma and hay fever, isn’t an infection hanging on. Your airways have become twitchy again. It’s called cough-variant asthma, and it’s very treatable, with an inhaler rather than antibiotics.",
    "dom": "tasks",
    "why": "Names the diagnosis and the reasoning"
   },
   {
    "who": "dr",
    "text": "And the thing that will help you sleep: in pregnancy the danger isn’t the inhaler, it’s asthma that isn’t controlled. The baby needs a mum who can breathe well. The inhalers we use are well studied in pregnancy and recommended to continue.",
    "dom": "tasks",
    "why": "Delivers the key safety fact about asthma treatment in pregnancy"
   },
   {
    "who": "pt",
    "text": "Really? I thought I should avoid everything."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s the plan. This week, a quick breath test and a blood test to confirm asthma, ideally before you start the inhaler. Then one inhaler that combines a low-dose steroid with a reliever, used when you need it. I’ll show you how. If the tests are delayed and nights are bad, we can start sooner.",
    "dom": "tasks",
    "why": "Objective testing and AIR per NICE NG245"
   },
   {
    "who": "dr",
    "text": "For the pregnancy: start folic acid 400 micrograms a day today, and I’ll help you book with the midwife. On vaping, it’s much safer than going back to cigarettes. The stop smoking service can help you come off it properly. Would you like a referral?",
    "dom": "tasks",
    "why": "Proportionate pregnancy care and supportive cessation"
   },
   {
    "who": "pt",
    "text": "Yes. I want to stop. I just didn’t want to be judged."
   },
   {
    "who": "dr",
    "text": "Nobody’s judging. And who you tell, and when, is up to you. That includes him. If you want to talk it through, we can.",
    "dom": "rto",
    "why": "Respects confidentiality and autonomy"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you get properly breathless, wheezy, can’t finish sentences, cough blood or have a fever, contact us the same day, or 999 if you’re struggling to breathe. Any bleeding or pain in the pregnancy, call us or the early pregnancy unit. I’ll see you in two weeks for the cough and to see how you’re doing.",
    "dom": "gs",
    "why": "Clear escalation for asthma and early pregnancy, dated follow-up"
   },
   {
    "who": "dr",
    "text": "What will you take away from today?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "It’s asthma, not an infection. The inhaler is safe for the baby, not having it isn’t. Folic acid today, midwife, help with the vape. Back in two weeks."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; acknowledged the impact on her teaching; did not open with the antibiotic request.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Teacher, sleep loss, embarrassment in class; vaping since stopping smoking; the newly known pregnancy and who she has told.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “the antibiotics did nothing”, the hesitation about vaping and the worry beneath the request, and explored each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (infection needing stronger antibiotics), concern (harm to the pregnancy from the cough, vaping or treatment), expectation (something that works and is safe).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "FeNO or blood eosinophils first, then spirometry with reversibility or peak-flow variability (NICE NG245); chest examination at a face-to-face visit.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Cough-variant asthma versus reflux, post-infective cough, pertussis and vaping-related irritation.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about haemoptysis, weight loss, fever, chest pain and paroxysms; none present.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Explained cough-variant asthma in plain words and why antibiotics will not help.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "AIR inhaler (as-needed low-dose ICS/formoterol) per NICE NG245, with objective testing; clear statement that asthma treatment is safe in pregnancy.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Folic acid 400 micrograms, midwife booking, stop smoking service for vaping, cetirizine reviewed; confidentiality respected.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named asthma and early-pregnancy triggers; two-week review covering both the cough and the pregnancy.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Amara Okafor",
    "age": "29 years · female",
    "pmh": [
     "Childhood eczema",
     "Hay fever"
    ],
    "meds": [
     "Cetirizine PRN"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Locum telephone contact 4 weeks ago: delayed antibiotic for cough, taken, no better. Recorded non-smoker. Primary-school teacher.",
    "reason": "“Cough 10 weeks, kept awake at night, wants antibiotics — it’s affecting my teaching.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and reset",
     "d": "She wants stronger antibiotics. Acknowledge the ten weeks, then agree to find out what it really is."
    },
    {
     "t": "1–4",
     "h": "Pattern and exposures",
     "d": "Dry, nocturnal, cold air, laughing, PE. Childhood asthma and atopy. Red flags, reflux, pertussis. Smoking and vaping asked without judgement."
    },
    {
     "t": "4–6",
     "h": "The bigger worry",
     "d": "“Is there anything else on your mind?” The seven-week pregnancy she hasn’t told anyone about."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Cough-variant asthma. Treatment is safe in pregnancy; uncontrolled asthma is not. FeNO or eosinophils, then AIR. Folic acid, midwife, stop smoking service."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Breathlessness, wheeze, blood, fever; pregnancy bleeding or pain. Teach-back. Review in two weeks."
    }
   ],
   "wordPics": {
    "fail": "Prescribes another antibiotic; misses the asthma pattern; never asks about vaping; never creates space for the pregnancy, or withholds inhalers because she is pregnant; no follow-up.",
    "pass": "Recognises cough-variant asthma, avoids antibiotics, arranges objective testing and an inhaler, asks about smoking and vaping, and handles the pregnancy with folic acid and midwife referral.",
    "exc": "All of the above, plus: makes vaping disclosure safe; opens the door that lets the pregnancy emerge and receives it warmly; states clearly that uncontrolled asthma, not the inhaler, is the risk; offers cessation as support; respects confidentiality about the father; dated review holding both issues."
   },
   "avoid": [
    {
     "dont": "“Let’s try a stronger antibiotic this time.”",
     "instead": "“If antibiotics were going to fix this, the first course would have. Let’s find out what it really is.”",
     "why": "A second antibiotic for a non-infective pattern is poor stewardship and misses the diagnosis."
    },
    {
     "dont": "“You shouldn’t be vaping, especially now you’re pregnant.”",
     "instead": "“Stopping cigarettes was a real achievement. Let’s get you proper help to come off the vape too.”",
     "why": "Shame shuts down disclosure; support gets her to a stop smoking service."
    },
    {
     "dont": "“Best to avoid medicines in the first trimester, so let’s hold off.”",
     "instead": "“The inhaler is safe and recommended in pregnancy. Asthma that isn’t controlled is the real risk.”",
     "why": "Withholding asthma treatment in pregnancy is the unsafe choice."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work impact",
     "t": "A teacher coughing through lessons and losing sleep; pupils mimicking her. Effective treatment matters to her job and confidence."
    },
    {
     "h": "Unplanned pregnancy and secrecy",
     "t": "Pregnancy known four days, told to no one. Offer time and support; explore how she feels about the pregnancy without assumptions."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality",
     "t": "She decides who is told about the pregnancy, including the father and her employer (GMC Confidentiality 2017)."
    },
    {
     "h": "Work and pregnancy",
     "t": "Once she tells her employer in writing, a workplace risk assessment is required. As a primary-school teacher, she should report any contact with chickenpox, measles or slapped cheek to her GP or midwife promptly."
    }
   ],
   "professional": [
    {
     "h": "Antimicrobial stewardship",
     "t": "Declining a second antibiotic with a clear explanation and an alternative plan is good practice; document the reasoning."
    },
    {
     "h": "Non-judgemental history",
     "t": "Ask about vaping and smoking routinely and without judgement; the record’s “non-smoker” can miss current exposures."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Local NHS stop smoking service, midwife self-referral, Asthma and Lung UK information on asthma in pregnancy."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Haemoptysis, weight loss, fever or focal chest signs: investigate further (chest X-ray)",
     "Paroxysms, whoop or vomiting after coughing: consider pertussis (notifiable)",
     "Breathlessness at rest or unable to complete sentences: urgent assessment"
    ],
    "psychosocial": [
     "Teacher losing sleep; embarrassment in class",
     "Vaping since stopping smoking, including in bed; shame about it",
     "Seven-week pregnancy, told to no one"
    ],
    "ice": [
     "Idea: a chest infection that needs stronger antibiotics",
     "Concern: harm to the pregnancy from the cough, vaping or treatment",
     "Expectation: something that works, and is safe"
    ]
   },
   "diagnosis": "Probable cough-variant asthma: 10-week dry nocturnal cough triggered by cold air, laughter and exercise, with childhood asthma, atopy and family history, and vaping as an airway irritant. No red flags. Seven weeks pregnant.",
   "diagnosisLay": "“Your airways have become sensitive again, like when you were a child. Instead of wheezing, they make you cough, especially at night and in cold air. It’s a form of asthma, and an inhaler treats it; antibiotics don’t.”",
   "management": {
    "reflectIce": "“You’ve been lying awake worrying that anything you do will hurt the baby. The reassuring truth is that treating your asthma protects the baby.”",
    "psychosocial": "Non-judgemental support to stop vaping; she decides who to tell about the pregnancy and when; offer to talk it through.",
    "sharedPlan": [
     "FeNO or blood eosinophils, then spirometry with reversibility if needed (NICE NG245)",
     "AIR inhaler (as-needed low-dose ICS/formoterol) with technique check; safe in pregnancy (NICE NG245)",
     "Folic acid 400 micrograms daily (NICE NG247); midwife booking; stop smoking service (NICE NG209)"
    ],
    "safetyNet": [
     "Breathlessness, wheeze, haemoptysis or fever: same day; struggling to breathe: 999",
     "Pregnancy bleeding or pain: GP or early pregnancy unit; review in two weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Asthma",
    "s": "Case walkthrough · NICE NG245",
    "href": "../cases/asthma.html"
   },
   {
    "ic": "🗺️",
    "t": "Chronic cough pathway",
    "s": "Visual algorithm · cough over 8 weeks",
    "href": "algorithms/chronic-cough.html"
   },
   {
    "ic": "💠",
    "t": "Asthma protocol",
    "s": "Diagnosis · AIR and MART",
    "href": "management/asthma.html"
   },
   {
    "ic": "💠",
    "t": "Smoking cessation",
    "s": "Vaping and pregnancy · NICE NG209",
    "href": "management/smoking-cessation.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by prescribing into the antibiotic request, and passed by finding the pregnancy and telling her the truth that treating her asthma is what protects the baby.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Issuing a second antibiotic for a 10-week dry cough.",
     "why": "“Management plan not in line with current UK best practice.” The pattern is non-infective, and antibiotics already failed.",
     "fix": "Name the asthma pattern and arrange objective testing per NICE NG245."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing a salbutamol inhaler alone.",
     "why": "NICE NG245 advises against SABA without ICS; new adult asthma starts with as-needed low-dose ICS/formoterol.",
     "fix": "Offer an AIR inhaler and check technique."
    },
    {
     "dom": "tasks",
     "fail": "Holding back asthma treatment because she is pregnant.",
     "why": "NICE NG245 advises using inhaled steroids as normal in pregnancy; uncontrolled asthma is the risk.",
     "fix": "Say it plainly: the inhaler is safe, and not treating is the danger."
    },
    {
     "dom": "rto",
     "fail": "Accepting “non-smoker” from the record, or asking about vaping in a judging tone.",
     "why": "“Does not gather sufficient information.” Shame closes disclosure, and vaping is relevant.",
     "fix": "“Two questions I ask everyone: do you smoke, or vape?” Then thank her."
    },
    {
     "dom": "rto",
     "fail": "Never asking what else is on her mind.",
     "why": "“Does not identify or respond to the patient’s cues.” The pregnancy is the real reason for her fear.",
     "fix": "“Is there anything else on your mind with all this?” and wait."
    },
    {
     "dom": "gs",
     "fail": "Turning the consultation into a full antenatal booking.",
     "why": "Poor time management leaves the cough plan underdeveloped.",
     "fix": "Folic acid, midwife, stop smoking service in one sentence each; keep the cough as the main plan."
    }
   ]
  }
 },
 "haemoptysis-palliative": {
  "stem": {
   "name": "Stanley Pike",
   "age": "70-year-old man",
   "pmh": [
    "Metastatic non-small-cell lung cancer — best supportive care",
    "DNACPR in place",
    "Community palliative care team involved"
   ],
   "meds": [
    "Symptom-control medicines as per palliative team letters",
    "Anticoagulant or antiplatelet use: not clear from the record — to confirm"
   ],
   "allergy": "No known drug allergies",
   "recent": "Palliative oncology letter: no further anti-cancer treatment planned; best supportive care. No record on the GP system of just-in-case medicines being issued. Lives with his wife, Edith.",
   "reason": "Telephone call: has coughed up small amounts of bright-red blood three times since yesterday."
  },
  "knowledge": {
   "guideline": "NICE NG31 (care of dying adults in the last days of life) · NICE NG142 (end of life care services) · Scottish Palliative Care Guidelines (bleeding; haemoptysis) · Resuscitation Council UK ReSPECT",
   "summary": "Small-volume haemoptysis in advanced lung cancer is a planning consultation, not an emergency admission. Assess proportionately, treat what is reversible within his goals, and put a crisis plan and medicines in the house today.",
   "points": [
    {
     "h": "Assess proportionately",
     "t": "Volume, frequency, colour, trend, breathing against his usual, light-headedness, fever or purulent sputum. A teaspoon or two with stable breathing is small-volume haemoptysis. Small bleeds can precede a larger one, so treat this as the prompt to prepare."
    },
    {
     "h": "Decide within the agreed ceiling of care",
     "t": "DNACPR means no CPR; it does not mean no treatment. Ask what he wants if bleeding increases. Most people in his position want care at home, and the plan should say so and be shared with out-of-hours and the ambulance service (NICE NG142: coordinated care and shared records)."
    },
    {
     "h": "Look for what is reversible",
     "t": "Chest infection, anticoagulants or antiplatelets (review and usually stop), and low platelets. Oral tranexamic acid is an option for haemoptysis (Scottish Palliative Care Guidelines; dose per BNF), and palliative radiotherapy can reduce bleeding — discuss with oncology or the palliative team."
    },
    {
     "h": "Anticipatory medicines",
     "t": "NICE NG31: prescribe anticipatory medicines for people likely to need symptom control, with clear instructions. For bleeding, the crisis sedative is usually midazolam, prescribed by the team (dose per BNF). In a major bleed the patient is shut down peripherally, so a fast route (buccal, intramuscular or intravenous) is needed, not subcutaneous."
    },
    {
     "h": "The crisis plan",
     "t": "Scottish Palliative Care Guidelines: in a massive bleed, staying with the person and non-drug measures matter more than getting a sedative in; consciousness is usually lost quickly. Dark towels to absorb and hide blood, lie him on his side (bleeding side down if known), one number to ring, and someone present."
    },
    {
     "h": "Answer the unspoken question",
     "t": "Many patients fear drowning and a loved one watching. The honest answer: a large bleed is possible but not certain; if it happens it is usually quick; he will not be left without help. Say it plainly."
    },
    {
     "h": "Care for the carer",
     "t": "Brief Edith directly: what to do, who to ring, that her job is to stay close. Offer a Care Act 2014 carer’s assessment and support afterwards."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Pike, it’s Dr Lee from the surgery. Can I check I’m speaking to Stanley, and are you sitting somewhere comfortable to talk?",
    "dom": "gs",
    "why": "Identity and setting checks on the phone"
   },
   {
    "who": "pt",
    "text": "Yes, it’s me. Sorry to trouble you. It’s probably nothing. I’ve coughed up a bit of blood, yesterday and again this morning, a teaspoon or so. I just wanted to know what it means and what I’m meant to do if it happens again."
   },
   {
    "who": "dr",
    "text": "You’re not troubling me, and I don’t think it’s nothing. You sound very calm about something that would unsettle anyone. I’d like to ask some practical questions first, then answer both of those questions properly. Is that all right?",
    "dom": "rto",
    "why": "Declines the minimising and sets an agenda that includes his questions"
   },
   {
    "who": "pt",
    "text": "That’s fine."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about each time. How much was there, what did it look like, and has it been getting more or less?",
    "dom": "tasks",
    "why": "Characterises volume, colour and trend"
   },
   {
    "who": "pt",
    "text": "Three times since yesterday. Bright red, a teaspoon, maybe two. Into my hanky. Not getting bigger, as far as I can tell."
   },
   {
    "who": "dr",
    "text": "And your breathing right now, is it any worse than your usual? Any dizziness, chest pain, fever, or changes in your phlegm?",
    "dom": "tasks",
    "why": "Screens for haemodynamic compromise and infection"
   },
   {
    "who": "pt",
    "text": "Breathing’s no worse than normal. No dizziness. No temperature. Phlegm’s the same, apart from the blood."
   },
   {
    "who": "dr",
    "text": "Are you taking any blood thinners, like aspirin, apixaban or anything similar?",
    "dom": "tasks",
    "why": "Checks for a reversible contributor"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. Just the pain medicines the nurses sorted."
   },
   {
    "who": "dr",
    "text": "Thank you. That all tells me this is a small bleed and not an emergency this minute. Can I ask, who’s with you at home?",
    "dom": "tasks",
    "why": "Proportionate interpretation and moves to context"
   },
   {
    "who": "pt",
    "text": "Edith, my wife. She’s in the next room, putting a brave face on."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–7 min",
    "who": "dr",
    "text": "You asked what to do if it happens again. I wonder whether you’ve been reading about this and worrying about something bigger. Would it help to tell me what’s on your mind?",
    "dom": "rto",
    "why": "Opens the door to the hidden fear"
   },
   {
    "who": "pt",
    "text": "I looked it up. It said massive haemoptysis, catastrophic bleed. The teaspoon doesn’t frighten me. That does."
   },
   {
    "who": "dr",
    "text": "Can I ask you the question you haven’t quite asked me? Are you frightened this is how it ends, with a big bleed, and that Edith would have to see it?",
    "dom": "rto",
    "why": "Names the unspoken fear gently"
   },
   {
    "who": "pt",
    "text": "Yes. That’s it exactly. I don’t want her on her own with that."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "Then I’ll be honest with you. A larger bleed is possible. It isn’t certain, and many people never have one. If it did happen, it is usually quick, not a long struggle. And the part that matters most: we plan for it now, so neither of you is ever alone with it, not knowing what to do.",
    "dom": "rto",
    "why": "Answers the question honestly and promises non-abandonment"
   },
   {
    "who": "pt",
    "text": "Thank you. Nobody’s said it straight."
   },
   {
    "who": "dr",
    "text": "Because you’re comfortable at home and we’ve agreed that’s what you want, I don’t think you need to go into hospital today. We’ll manage this with your palliative team. There is a tablet that can help reduce small bleeds, and sometimes a short course of radiotherapy helps too. I’ll ask the team about both.",
    "dom": "tasks",
    "why": "Management matched to his ceiling of care, with treatable options"
   },
   {
    "who": "pt",
    "text": "I’d rather stay home. Definitely."
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "Here’s what I’ll put in place today. I’ll ring your palliative team straight after this, and the district nurse will visit. They’ll make sure there’s medicine in the house that calms you quickly if a big bleed ever came. Keep dark towels by the bed and your chair, not white ones. And one number, day or night: the palliative line, not 999.",
    "dom": "tasks",
    "why": "Activates the team, anticipatory medicines and a concrete crisis plan"
   },
   {
    "who": "pt",
    "text": "Dark towels. I wouldn’t have thought of that."
   },
   {
    "who": "dr",
    "text": "They make it far less frightening to see. If it happened, Edith’s job is simple: help you onto your side, stay with you, hold your hand, and ring the number. That’s all anyone would ask of her. Would you like me to speak to her too, now or this evening?",
    "dom": "rto",
    "why": "Addresses Edith directly and offers to include her"
   },
   {
    "who": "pt",
    "text": "Could you? This evening. I’ll tell her we’ve spoken."
   },
   {
    "who": "dr",
    "text": "Of course. I’ll also update your plan on the record that out-of-hours doctors and the ambulance service can see, so anyone who comes knows you want to stay at home and be kept comfortable.",
    "dom": "tasks",
    "why": "Shares the plan with out-of-hours and ambulance services"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If the bleeding gets heavier, you get breathless, or you develop a fever, ring the palliative line or us straight away. I’ll ring you both at six this evening to check the nurse has been and the medicines are in the house. Can you tell me back what you’ll do if it happens again?",
    "dom": "gs",
    "why": "Specific safety-net, a dated follow-up call and teach-back"
   },
   {
    "who": "pt",
    "text": "Dark towels, lie on my side, Edith stays with me and rings the palliative number. You’re ringing at six."
   },
   {
    "who": "dr",
    "text": "That’s it exactly. You rang to ask what to do. The answer is: nothing on your own. We’ve got you both.",
    "dom": "rto",
    "why": "Closes with a clear promise of support"
   },
   {
    "who": "pt",
    "text": "Thank you, doctor. I feel steadier than I did."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open start; did not accept “probably nothing”; agreed to answer his actual question after the assessment.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Who is at home, Edith’s coping, what he has read, his wish to stay at home.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the minimising, “what I’m meant to do if it happens again” and the internet search, and explored them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (nothing to fuss about, but maybe the beginning of the end), concern (a drowning bleed with Edith alone), expectation (a plan).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Proportionate phone assessment; district nurse visit today; no investigations that would not change care.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Tumour bleeding vs infection vs anticoagulant effect; small-volume vs herald of a larger bleed.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened breathing, dizziness, chest pain and fever; recognised that small bleeds can precede a major one.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Small-volume haemoptysis from known lung cancer, manageable at home, with a risk of a larger bleed.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Palliative team contacted today; crisis medicine in the house; dark towels, positioning, one number; tranexamic acid or radiotherapy discussed with the team.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Confirmed no anticoagulant; screened for infection; plan shared with out-of-hours and ambulance services.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named triggers, the palliative line, a call at six this evening, and a conversation with Edith.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Stanley Pike",
    "age": "70 years · male",
    "pmh": [
     "Metastatic NSCLC — best supportive care",
     "DNACPR in place",
     "Community palliative team involved"
    ],
    "meds": [
     "Palliative symptom-control medicines (see team letters)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ No record of just-in-case medicines being issued. Lives with wife, Edith. Palliative oncology: no further anti-cancer treatment.",
    "reason": "Telephone: “coughed up a bit of blood, just a teaspoon”. Three episodes in 24 hours."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and decline the minimising",
     "d": "“It’s probably nothing” invites you to agree. Don’t. Promise to answer his real question after a quick assessment."
    },
    {
     "t": "1–4",
     "h": "Proportionate assessment",
     "d": "Volume, colour, trend, breathing against usual, dizziness, fever, anticoagulants. Decide: small bleed, not an emergency now."
    },
    {
     "t": "4–7",
     "h": "The hidden question",
     "d": "Ask what he has read. Name the fear of a big bleed and Edith witnessing it."
    },
    {
     "t": "7–10",
     "h": "Honest answer and crisis plan",
     "d": "Possible, not certain, usually quick, never alone. Palliative team today, crisis medicine in the house, dark towels, positioning, one number."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Triggers to ring, the shared record, a call this evening, a conversation with Edith, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Sends him to hospital by reflex or reassures “it’s only a small amount”; never asks what he fears; no crisis plan; forgets Edith; or tells him “you’ll be fine” when he may not be.",
    "pass": "Assesses the bleed sensibly; manages at home in line with his wishes; contacts the palliative team; talks about medicines and what to do if it recurs; basic safety-net.",
    "exc": "All of the above, plus: names the drowning fear and answers it honestly; a concrete crisis plan with dark towels, positioning and one number; checks for reversible causes; shares the plan with out-of-hours; includes Edith; a dated follow-up call and teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s only a teaspoon, I wouldn’t worry.”",
     "instead": "“It’s a small bleed, and it’s right that you called. Let’s plan properly for what might come next.”",
     "why": "Colluding with the minimising closes the door to his real fear."
    },
    {
     "dont": "“If it happens again, call 999 straight away.”",
     "instead": "“Ring the palliative line, day or night. They know you and your wishes.”",
     "why": "A reflex 999 can mean an unwanted admission or resuscitation attempt, against his agreed plan."
    },
    {
     "dont": "“Let’s not think about the worst.”",
     "instead": "“A big bleed is possible, not certain. If it came, it would be quick, and you wouldn’t be alone.”",
     "why": "Avoiding the question leaves him and Edith to face it unprepared."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Carer at home",
     "t": "Edith is coping outwardly and has not been told what he has read. Her readiness is part of his care. Ask how she is and involve her in the plan."
    },
    {
     "h": "Preferred place of care",
     "t": "He wants to stay at home. Make sure equipment, district nurse visits and night support are in place, so a crisis does not become an admission by default."
    }
   ],
   "legal": [
    {
     "h": "DNACPR and advance care planning",
     "t": "A DNACPR decision covers CPR only. Record his wider wishes (for example with ReSPECT) and share them with out-of-hours and ambulance services so they are followed at 3 am."
    },
    {
     "h": "Benefits and carer rights",
     "t": "Attendance Allowance can be claimed under the special rules for end of life (SR1 form from a clinician). Edith is entitled to a carer’s assessment under the Care Act 2014."
    }
   ],
   "professional": [
    {
     "h": "Honest conversations at the end of life",
     "t": "GMC Treatment and care towards the end of life (2010): share information honestly and sensitively, and plan ahead for likely complications with the patient and those close to him."
    },
    {
     "h": "Continuity and coordination",
     "t": "NICE NG142: people approaching the end of life should have care coordinated across services and records shared. Handover to out-of-hours is part of the consultation."
    }
   ],
   "community": [
    {
     "h": "Support at home",
     "t": "Community palliative team and district nurses, local hospice at home, Marie Curie and Macmillan for night support, and carer support for Edith now and in bereavement."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Increasing volume, clots, or a bleed larger than a few teaspoons — may herald a major bleed",
     "Breathlessness worse than usual, dizziness or collapse — haemodynamic compromise",
     "Fever or purulent sputum (infection); anticoagulant or antiplatelet use (reversible contributors)"
    ],
    "psychosocial": [
     "Who is at home and how Edith is coping",
     "What he has read and what he fears",
     "His preferred place of care and death"
    ],
    "ice": [
     "Idea: “It’s probably nothing to fuss about.”",
     "Concern: a catastrophic bleed, drowning, and Edith alone and helpless",
     "Expectation: to know what it means and what to do next time"
    ]
   },
   "diagnosis": "Small-volume haemoptysis from known metastatic non-small-cell lung cancer, haemodynamically stable, no evidence of infection or anticoagulant effect; manage at home within his agreed ceiling of care, with a risk of a larger bleed that must be planned for.",
   "diagnosisLay": "“The cancer in your lung has a delicate surface, and small blood vessels there can leak. That’s what you’re seeing. It’s small now. We can’t promise it won’t get bigger, so we’re going to be ready.”",
   "management": {
    "reflectIce": "“Your worry isn’t really the teaspoon. It’s whether this ends with a big bleed and Edith on her own. Let’s make sure that never happens without help.”",
    "psychosocial": "Brief Edith directly and offer a call this evening; carer’s assessment; the plan on the shared record; hospice or night support if needed.",
    "sharedPlan": [
     "Palliative team and district nurse today; crisis medicine prescribed and physically in the house (NICE NG31)",
     "Dark towels, positioning on his side, one 24-hour number; tranexamic acid or palliative radiotherapy discussed with the team",
     "Plan and wishes shared with out-of-hours and ambulance services (NICE NG142)"
    ],
    "safetyNet": [
     "Ring the palliative line or surgery for heavier bleeding, breathlessness or fever",
     "GP call at six this evening to confirm the visit and medicines; talk with Edith"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Terminal haemorrhage",
    "s": "Crisis plan · medicines · dark towels",
    "href": "management/terminal-haemorrhage.html"
   },
   {
    "ic": "💠",
    "t": "Care of the dying",
    "s": "Anticipatory medicines · NICE NG31",
    "href": "management/care-of-the-dying.html"
   },
   {
    "ic": "📋",
    "t": "Palliative care",
    "s": "Case walkthrough",
    "href": "../cases/palliative-care.html"
   },
   {
    "ic": "💠",
    "t": "Palliative breathlessness",
    "s": "Symptom control protocol",
    "href": "management/palliative-breathlessness.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is not failed on haemoptysis knowledge. It is failed on two reflexes: sending a dying man to hospital, and answering the small question while missing the big one.",
   "items": [
    {
     "dom": "tasks",
     "fail": "“Call 999” or a same-day admission for a teaspoon of blood in a man with an agreed palliative plan.",
     "why": "“Management plan not appropriate for the patient’s circumstances.” It ignores his ceiling of care and his wish to stay home.",
     "fix": "Assess proportionately, then manage at home with the palliative team."
    },
    {
     "dom": "tasks",
     "fail": "No crisis plan: “ring us if it happens again.”",
     "why": "“Does not develop a safe management plan.” A major bleed at night needs medicine in the house and a plan the family can follow.",
     "fix": "Palliative team today, crisis medicine in the house, dark towels, positioning, one number."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting reversible causes.",
     "why": "Infection and anticoagulants are treatable even at the end of life.",
     "fix": "Ask about fever, sputum change and blood thinners; mention tranexamic acid and radiotherapy."
    },
    {
     "dom": "rto",
     "fail": "Agreeing that “it’s probably nothing”.",
     "why": "“Does not identify or respond to the patient’s cues.” His real question stays unanswered.",
     "fix": "“I don’t think it’s nothing. Can I ask what’s worrying you most?”"
    },
    {
     "dom": "rto",
     "fail": "Never mentioning Edith.",
     "why": "Protecting her is his main concern; ignoring her misses the point of the call.",
     "fix": "Tell him exactly what Edith would do, and offer to speak to her."
    },
    {
     "dom": "gs",
     "fail": "Vague, soothing language: “let’s not worry about that now.”",
     "why": "Avoidance reads as abandonment and leaves the family unprepared.",
     "fix": "Honest, plain words: possible, not certain, usually quick, never alone."
    }
   ]
  }
 },
 "hf-four-pillars": {
  "stem": {
   "name": "Trevor Mott",
   "age": "66-year-old man",
   "pmh": [
    "Heart failure with reduced ejection fraction, new (LVEF 33% on echo last week)"
   ],
   "meds": [
    "Ramipril 2.5 mg daily (started at triage)",
    "Furosemide 40 mg daily"
   ],
   "allergy": "No known drug allergies",
   "recent": "Six weeks of breathlessness and ankle swelling; raised NT-proBNP; echo LVEF 33%. Cardiology letter: GP to start and titrate standard therapy; refer to community heart failure nurse. Retired postman. Wife Lynne usually attends with him.",
   "reason": "Booked review to discuss the diagnosis and treatment plan."
  },
  "knowledge": {
   "guideline": "NICE NG106 (chronic heart failure in adults, updated September 2025) · NICE TA679 and TA773 (SGLT2 inhibitors in HFrEF) · DVLA Assessing fitness to drive",
   "summary": "New HFrEF is treatable, and the heart can recover some function with treatment. Four drug classes each improve survival; build them up with the heart failure nurse, and answer the prognosis question honestly without a made-up number.",
   "points": [
    {
     "h": "Four core treatments",
     "t": "NICE NG106: offer an ACE inhibitor (or ARB if not tolerated), a beta-blocker licensed for heart failure, a mineralocorticoid receptor antagonist and an SGLT2 inhibitor (dapagliflozin or empagliflozin, NICE TA679 and TA773) to people with HFrEF. Sacubitril valsartan replaces the ACE inhibitor on specialist advice."
    },
    {
     "h": "Start low, build up",
     "t": "Introduce and titrate one step at a time. NICE NG106: check sodium, potassium and renal function before and after starting an ACE inhibitor or MRA and after each dose increase. Check pulse and BP with beta-blocker titration."
    },
    {
     "h": "Loop diuretic",
     "t": "Furosemide treats congestion and symptoms; it is not one of the survival treatments. Adjust to the lowest dose that keeps him dry."
    },
    {
     "h": "Prognosis, honestly",
     "t": "Avoid numbers. Outcomes on full treatment are much better than untreated; ejection fraction often improves after titration, and a repeat echo shows which course he is on."
    },
    {
     "h": "Living with it",
     "t": "NICE NG106: offer a personalised, exercise-based cardiac rehabilitation programme; annual flu vaccination and one-off pneumococcal vaccination. Daily weights: ESC 2021 advises acting on a rise of more than 2 kg in 3 days. DVLA Group 1: he may drive and need not notify unless symptoms distract him."
    },
    {
     "h": "Red flags",
     "t": "Breathlessness at rest, new orthopnoea or paroxysmal nocturnal breathlessness, rapid weight gain, syncope: same-day review. Chest pain: 999. New palpitations: ECG, as AF changes management."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Good afternoon Mr Mott, I’m Dr Lee. I see you’ve joined early and you’ve got notes ready. What would you like to get out of today?",
    "dom": "rto",
    "why": "Opens with his agenda and notices his preparation"
   },
   {
    "who": "pt",
    "text": "Lynne doesn’t know I’m on this call alone, and I’d like to keep it between us. I’ve read the letter. Heart failure. I know what failure means. So, man to man: how long have I got? There are things I need to organise."
   },
   {
    "who": "dr",
    "text": "That’s a fair question and I’ll answer it honestly, I promise. What we say stays between us unless you choose otherwise. First, can I understand how you are, and what “organising” means for you?",
    "dom": "gs",
    "why": "Commits to the question, confirms confidentiality, structures the consultation"
   },
   {
    "who": "pt",
    "text": "Fine."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "How’s the breathing now? What can you manage, and how many pillows?",
    "dom": "tasks",
    "why": "Establishes functional class and congestion"
   },
   {
    "who": "pt",
    "text": "Second flight of stairs, and the slope on the bowling green. Two pillows, used to be one. The ankles are better since the water tablet. No chest pain, no blackouts."
   },
   {
    "who": "dr",
    "text": "And sleep?",
    "dom": "tasks",
    "why": "Distinguishes breathlessness from worry at night"
   },
   {
    "who": "pt",
    "text": "Poor. But that’s the thinking at three in the morning, not the breathing."
   },
   {
    "who": "dr",
    "text": "You said there are things to organise. What have you already done?",
    "dom": "rto",
    "why": "Follows the cue to the shutdown behind the admin language"
   },
   {
    "who": "pt",
    "text": "Cancelled the caravan. Scotland in September, our ruby anniversary. Asked my brother to take the allotment. Started a folder of passwords for Lynne. I was pricing funeral plans on Tuesday."
   },
   {
    "who": "dr",
    "text": "That’s a lot to carry by yourself at three in the morning. Can I ask gently: has it got so dark that you’ve thought about harming yourself?",
    "dom": "tasks",
    "why": "Proportionate mood and risk check given the closing-down behaviour"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. I just want things tidy for her."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "What made you so sure it was a matter of months?",
    "dom": "rto",
    "why": "Explores the source of his belief"
   },
   {
    "who": "pt",
    "text": "Des, at the sorting office. Heart failure, retired at Christmas, dead by Easter. And the word. Failure means the engine’s gone. You don’t un-fail."
   },
   {
    "who": "dr",
    "text": "And Lynne thinks it’s…?",
    "dom": "rto",
    "why": "Opens the withheld part"
   },
   {
    "who": "pt",
    "text": "A bit of fluid. Forty years she’s worried about me on the rounds in the ice. I’m not handing her a death sentence with her tea."
   },
   {
    "phase": "Explanation",
    "clock": "6–9 min",
    "who": "dr",
    "text": "Let’s start with the word, because it’s done you harm this week. “Heart failure” means the pump is under-performing, not finished. Yours pushes out about a third of its blood each beat instead of more than half. With the right treatment, many hearts like yours get stronger again. We can see that on repeat scans.",
    "dom": "tasks",
    "why": "Dismantles “failure” and introduces recovery"
   },
   {
    "who": "dr",
    "text": "The plan is four types of medicine, each shown on its own to help people live longer and keep out of hospital. One you’re on: the ramipril. We add a beta-blocker, a tablet called spironolactone that protects the heart muscle, and one originally used for diabetes that protects the heart and kidneys. We start them low and build up over weeks, with blood tests and a heart failure nurse whose job is you. The water tablet eases symptoms; the four are what rebuild.",
    "dom": "tasks",
    "why": "Explains the four pillars in lay terms and separates furosemide"
   },
   {
    "who": "pt",
    "text": "So how long, then?"
   },
   {
    "who": "dr",
    "text": "I won’t give you a number of months, because any number would be a guess. What I can say honestly: untreated, this is serious. You won’t be untreated. On full treatment, many people with a scan like yours live for years, and plenty see their pump improve. We repeat the scan after the build-up, and then we’ll know your course rather than Des’s.",
    "dom": "tasks",
    "why": "Answers prognosis honestly without a false number"
   },
   {
    "who": "dr",
    "text": "About Des: you don’t know his scan, how long he’d had it, or whether he ever had these four medicines. Christmas to Easter sounds like something found late. Yours was found early, by a blood test and a scan, in a man still bowling.",
    "dom": "rto",
    "why": "Distinguishes Des specifically"
   },
   {
    "who": "pt",
    "text": "(Pause.) I hadn’t thought of it that way."
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "So, September. I’d like you to un-cancel the caravan. On everything in front of me, it’s a realistic goal, and I’d like us to build the treatment around it, with a review in August as a checkpoint. Would you do that?",
    "dom": "rto",
    "why": "Reinstates a concrete future goal as part of treatment"
   },
   {
    "who": "pt",
    "text": "I could ring them tomorrow."
   },
   {
    "who": "dr",
    "text": "And Lynne. It’s your decision and I’ll respect it. But she’s worrying about “a bit of fluid” while you price funerals alone. If you’d like, she joins our next call and I do the explaining. You just hold her hand while she hears that this is being treated.",
    "dom": "rto",
    "why": "Addresses the secret at his pace with a practical offer"
   },
   {
    "who": "pt",
    "text": "(Quietly.) That would help. I didn’t know how to start."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Practical things. Weigh yourself each morning after the toilet, before breakfast. If you go up more than 2 kg in 3 days, get breathless at rest or need more pillows, ring us that day. Chest pain is 999. I’ll refer you to the heart failure nurse and cardiac rehab, bloods next week, and I’ll see you both in two weeks.",
    "dom": "gs",
    "why": "Specific triggers, named referrals and a dated review"
   },
   {
    "who": "dr",
    "text": "When Lynne asks tonight how it went, what will you tell her?",
    "dom": "rto",
    "why": "Teach-back that also rehearses the disclosure"
   },
   {
    "who": "pt",
    "text": "That it’s my heart, it’s weak but it can get better, there are four tablets to build up, and the doctor wants to talk to her. And that we’re going to Scotland."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Let him ask his question first, promised an honest answer, and agreed confidentiality and an agenda.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Retired postman, married 40 years, bowls, allotment; the cancelled caravan and the plans he has been quietly making.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “things I need to organise”, joining alone and early, and the Lynne secret, and explored each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (failure means finished, based on Des), concern (months to live and protecting Lynne), expectation (a private number).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "U&E before and after each titration step, BP and pulse, weight; repeat echo after titration; NT-proBNP trend as advised.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Checked current congestion and function (NYHA class, orthopnoea) and separated sleeplessness from breathlessness.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about chest pain, syncope and rest breathlessness; checked mood and self-harm given the closing-down behaviour.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Explained HFrEF as an under-performing pump that can improve, not a finished one.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Four core drug classes per NICE NG106, started low and titrated with the heart failure nurse; furosemide explained as symptom relief; caravan set as a goal.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Cardiac rehabilitation, flu and pneumococcal vaccination, activity encouraged, driving advice; the Lynne conversation offered.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Daily weights with a threshold, same-day triggers, chest pain 999, bloods booked, two-week review with Lynne invited.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Investigations & results"
   ],
   "stem": {
    "name": "Trevor Mott",
    "age": "66 years · male",
    "pmh": [
     "HFrEF, new: LVEF 33%"
    ],
    "meds": [
     "Ramipril 2.5 mg OD",
     "Furosemide 40 mg OD"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Echo last week: LVEF 33%. Cardiology letter: GP to initiate and titrate standard HFrEF therapy; community HF nurse referral requested. Usually attends with wife Lynne.",
    "reason": "Review to discuss the diagnosis and plan. Logged on 15 minutes early, alone."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "His question first",
     "d": "“How long have I got?” Promise an honest answer, confirm confidentiality, then ask what “organising” means."
    },
    {
     "t": "1–4",
     "h": "Function and the shutdown",
     "d": "Stairs, pillows, ankles, chest pain, syncope. Then the caravan, allotment, folder, funeral plans, and a brief mood check."
    },
    {
     "t": "4–6",
     "h": "Des and Lynne",
     "d": "Where the belief came from, and what Lynne has been told."
    },
    {
     "t": "6–10",
     "h": "Word, pillars, prognosis",
     "d": "Under-performing, not finished. Four medicines built up with the nurse. No fake number; measured, not guessed. Des distinguished."
    },
    {
     "t": "10–12",
     "h": "Goal, Lynne, safety-net",
     "d": "Un-cancel the caravan, August checkpoint. Offer to explain to Lynne. Daily weights, triggers, referrals, dated review."
    }
   ],
   "wordPics": {
    "fail": "Gives a number of months or refuses the question; lists drug names without explaining the purpose; never finds the cancelled caravan or the secret from Lynne; no titration or monitoring plan; no safety-net.",
    "pass": "Explains HFrEF and that treatment improves outlook, outlines the four drug classes with titration and blood monitoring, refers to the heart failure nurse, answers prognosis without a number and gives basic safety-netting.",
    "exc": "All of the above, plus: dismantles the word “failure”; finds and gently reverses the shutdown; distinguishes Des with specifics; sets the caravan as a clinical goal with an August checkpoint; offers to explain to Lynne on the next call; checks mood; uses teach-back that rehearses the disclosure."
   },
   "avoid": [
    {
     "dont": "“Around half of people with heart failure die within five years.”",
     "instead": "“I won’t guess a number. Untreated this is serious; you won’t be untreated, and your scan will tell us your course.”",
     "why": "Population statistics from before modern treatment are neither accurate for him nor helpful."
    },
    {
     "dont": "“You really must tell your wife.”",
     "instead": "“It’s your decision. If you’d like, she joins the next call and I do the explaining.”",
     "why": "Pressure breaches his autonomy; a practical offer makes disclosure possible."
    },
    {
     "dont": "“We’ll start bisoprolol, spironolactone and dapagliflozin.”",
     "instead": "“Four types of medicine, each shown to help people live longer, built up slowly with a nurse whose job is you.”",
     "why": "Drug names without meaning do nothing for a man who thinks treatment only eases the descent."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Protecting a spouse",
     "t": "Withholding a diagnosis to protect a partner leaves the patient carrying it alone and the partner excluded. Offer to help with disclosure; do not force it."
    },
    {
     "h": "Anticipatory grief",
     "t": "Cancelling plans, giving away hobbies and arranging paperwork can reflect despair built on a mistaken prognosis. Correcting the belief is part of treatment."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality",
     "t": "He is entitled to decide who is told about his diagnosis (GMC Confidentiality 2017). Record his wishes and any later consent to share with Lynne."
    },
    {
     "h": "DVLA",
     "t": "Group 1: heart failure need not be reported unless symptoms may distract the driver. Group 2 rules differ (LVEF below 40% is a bar)."
    }
   ],
   "professional": [
    {
     "h": "Honest prognosis",
     "t": "Answer the prognosis question truthfully without false precision or false reassurance (GMC Good Medical Practice 2024)."
    },
    {
     "h": "Shared care",
     "t": "Cardiology has asked the GP to initiate and titrate. Agree responsibilities with the heart failure nurse and document the titration plan."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Community heart failure nurse, cardiac rehabilitation, British Heart Foundation information for patients and partners, and the Pumping Marvellous Foundation for peer support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Breathlessness at rest, new orthopnoea or paroxysmal nocturnal breathlessness: same-day review",
     "Rapid weight gain, syncope, new palpitations: same-day review and ECG",
     "Chest pain: 999"
    ],
    "psychosocial": [
     "Closing-down behaviour: caravan cancelled, allotment given away, funeral plans; check mood",
     "Keeping the diagnosis from his wife of 40 years",
     "Belief drawn from a colleague’s death"
    ],
    "ice": [
     "Idea: “Failure means the engine’s gone. You don’t un-fail.”",
     "Concern: months to live, and protecting Lynne from the news",
     "Expectation: a private number of months to plan around"
    ]
   },
   "diagnosis": "Newly diagnosed heart failure with reduced ejection fraction (LVEF 33%), symptomatic on moderate exertion, congestion improved on furosemide; on low-dose ramipril. Significant distress based on a mistaken belief about prognosis.",
   "diagnosisLay": "“Your heart’s pump is weaker than it should be. It isn’t finished, it’s under-performing. The medicines we build up over the next few weeks help it work better and often help it recover some strength.”",
   "management": {
    "reflectIce": "“You’ve been planning for a timeline you took from Des and from one frightening word. Let’s plan for your heart instead, starting with Scotland in September.”",
    "psychosocial": "Reinstate the caravan with an August checkpoint; offer a joint call with Lynne where the GP explains; check mood again at review.",
    "sharedPlan": [
     "Add beta-blocker, MRA and SGLT2 inhibitor to the ACE inhibitor, one step at a time (NICE NG106, TA679, TA773)",
     "U&E before and after each step; BP and pulse; heart failure nurse and cardiac rehabilitation referrals",
     "Flu and pneumococcal vaccination; daily weights; stay active"
    ],
    "safetyNet": [
     "Weight up more than 2 kg in 3 days, breathless at rest or more pillows: same-day call; chest pain: 999",
     "Bloods next week; GP review in two weeks with Lynne invited; repeat echo after titration"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Heart failure",
    "s": "Case walkthrough · NICE NG106",
    "href": "../cases/heart-failure.html"
   },
   {
    "ic": "🗺️",
    "t": "Breathlessness pathway",
    "s": "Visual algorithm · NT-proBNP to echo",
    "href": "algorithms/breathlessness.html"
   },
   {
    "ic": "💠",
    "t": "Heart failure protocol",
    "s": "Four core drugs · titration · monitoring",
    "href": "management/heart-failure.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA",
    "s": "Group 1 and Group 2 standards",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "This station looks like a medication review and is really a prognosis conversation. It is failed by ignoring his question, answering it with a number, or never finding what he has already cancelled.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Listing drug names and doses without explaining that they change the heart.",
     "why": "He believes treatment only eases decline; an unexplained list will not be taken as intended.",
     "fix": "Explain the four classes as the rebuild, furosemide as symptom relief, and the titration with the nurse."
    },
    {
     "dom": "tasks",
     "fail": "No monitoring plan for titration.",
     "why": "“Management plan not in line with current UK best practice.” NICE NG106 requires renal function and potassium checks around ACE inhibitor and MRA changes.",
     "fix": "Bloods before and after each step, BP and pulse, and a named nurse."
    },
    {
     "dom": "rto",
     "fail": "Giving a number of months, or deflecting the question entirely.",
     "why": "A number is false precision; deflection feels like confirmation of the worst.",
     "fix": "Answer honestly: serious if untreated, much better on treatment, measured by repeat scan rather than guessed."
    },
    {
     "dom": "rto",
     "fail": "Missing “things I need to organise”.",
     "why": "“Does not identify or respond to the patient’s cues.” It hides the cancelled caravan and funeral planning.",
     "fix": "Ask what he has already done, then reverse it: un-cancel the caravan with an August checkpoint."
    },
    {
     "dom": "rto",
     "fail": "Telling him he must tell Lynne, or not mentioning her at all.",
     "why": "Pressure breaches his autonomy; silence leaves the secret costing him sleep.",
     "fix": "Offer a joint call where the GP explains, at his pace."
    },
    {
     "dom": "gs",
     "fail": "“Come back if you get worse.”",
     "why": "Non-specific safety-netting is a standard failing statement in heart failure, where early decompensation is detectable.",
     "fix": "Daily weights with a threshold, named same-day triggers, chest pain 999, dated bloods and review."
    }
   ]
  }
 },
 "liver-deteriorating-drinker": {
  "stem": {
   "name": "Sean Doherty",
   "age": "47-year-old man",
   "pmh": [
    "Alcohol excess (long-standing, recently escalating)",
    "Abnormal LFTs, raised MCV and low platelets on bloods months ago",
    "Previous seizure during an unsupported attempt to stop drinking (patient-reported)"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Last bloods (several months ago): MCV high, ALT and AST raised, platelets low. Did not attend follow-up. Off work as a scaffolder for 3 months.",
   "reason": "Booked online: “Need help cutting down the drink.”"
  },
  "knowledge": {
   "guideline": "NICE CG141 · NICE CG100 · NICE CG115 · NICE NG50 · BSG variceal haemorrhage guideline (2015) · NICE NG225 · DVLA Assessing fitness to drive",
   "summary": "Haematemesis and melaena in a heavy drinker with probable cirrhosis is a possible variceal bleed and needs emergency admission today. In physical dependence with a previous withdrawal seizure, abrupt unsupported stopping is dangerous; withdrawal must be medically managed.",
   "points": [
    {
     "h": "The emergency under the agenda",
     "t": "Coffee-ground or fresh haematemesis with black, tarry stools means upper GI bleeding. Low platelets, raised MCV and deranged LFTs in a heavy drinker suggest cirrhosis and portal hypertension, so varices are likely. Arrange emergency admission by ambulance. In hospital: risk scoring, terlipressin and prophylactic antibiotics for suspected variceal bleeding, and endoscopy within 24 hours, or immediately after resuscitation if unstable (NICE CG141; BSG 2015)."
    },
    {
     "h": "Physical dependence",
     "t": "Relief drinking for morning shakes and sweats, rising tolerance and a previous withdrawal seizure mean physical dependence. NICE CG100: offer hospital admission for medically assisted withdrawal to people in acute withdrawal, or at high risk of withdrawal seizures or delirium tremens."
    },
    {
     "h": "Setting for withdrawal",
     "t": "NICE CG115: consider inpatient or residential assisted withdrawal for a SADQ score above 30, a history of withdrawal seizures or delirium tremens, or significant physical comorbidity such as chronic liver disease. Sean meets more than one criterion; community detox would be unsafe."
    },
    {
     "h": "Medication and thiamine",
     "t": "Benzodiazepine regimen for withdrawal, chosen and dosed by the treating team with his liver function in mind (dose per BNF). NICE CG100: thiamine for people at high risk of Wernicke’s encephalopathy, including those with decompensated liver disease or in acute withdrawal; parenteral at the upper end of the BNF range if Wernicke’s is suspected. There is no tablet for willpower; relapse-prevention drugs come after withdrawal."
    },
    {
     "h": "Decompensation",
     "t": "Jaundice, abdominal swelling (ascites), ankle oedema and new vagueness or confusion (hepatic encephalopathy) suggest decompensated cirrhosis. With a bleed, encephalopathy can worsen quickly. After recovery, NICE NG50 covers cirrhosis assessment and surveillance."
    },
    {
     "h": "Mood and risk",
     "t": "Alcohol dependence carries a high suicide risk. Ask directly about hopelessness and thoughts of suicide, and respond to what he says (NICE NG225). Shame, a threatened break-up and 3 months off work are all risk factors."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Sean, I’m Dr Lee. Thanks for booking in. It takes guts to ask about drink. Tell me where things are at.",
    "dom": "rto",
    "why": "Validates the step of asking for help and opens"
   },
   {
    "who": "pt",
    "text": "I’ll not waste your time. The drink’s out of hand. Monday, I’m stopping dead, on my own. I just wanted to tell someone official. Unless there’s a tablet for willpower?"
   },
   {
    "who": "dr",
    "text": "I’m really glad you want to stop, and I want to help you do it. So that we make a plan that works, can I ask some questions about the drinking and how your body is doing? You don’t look well to me today, and I’d like to understand why.",
    "dom": "gs",
    "why": "Supports his motivation while setting an agenda that includes his physical state"
   },
   {
    "who": "pt",
    "text": "Aye, fair enough."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Walk me through a normal day’s drinking. When’s the first drink?",
    "dom": "tasks",
    "why": "Quantifies drinking and screens for relief drinking"
   },
   {
    "who": "pt",
    "text": "First thing, to stop the shakes. Half a bottle of vodka over the day, and cans. This morning I was shaking and sweating till I had one."
   },
   {
    "who": "dr",
    "text": "Have you tried stopping before? What happened?",
    "dom": "tasks",
    "why": "Asks about previous withdrawal complications"
   },
   {
    "who": "pt",
    "text": "Couple of years back. I had a fit on day two. Ended up in A&E."
   },
   {
    "who": "dr",
    "text": "Thank you, that’s very important. I’ll come back to it. How has your body been lately? Any vomiting, and any change in your stools?",
    "dom": "tasks",
    "why": "Asks directly about bleeding symptoms"
   },
   {
    "who": "pt",
    "text": "I brought up some dark stuff twice this week. Bit of red in it. And my poo’s gone black and sticky. It’s probably nothing."
   },
   {
    "who": "dr",
    "text": "Sean, I’m going to stop you there, because that matters more than anything else today. Dark vomit with blood and black, sticky stools can mean bleeding inside. When was the last time, and do you feel faint or dizzy when you stand?",
    "dom": "tasks",
    "why": "Recognises the red flag and assesses current severity"
   },
   {
    "who": "pt",
    "text": "Last night. Not dizzy, just washed out."
   },
   {
    "who": "dr",
    "text": "Have you noticed your eyes going yellow, your tummy swelling, or your ankles? And has anyone said you’ve seemed muddled?",
    "dom": "tasks",
    "why": "Screens for decompensated liver disease and encephalopathy"
   },
   {
    "who": "pt",
    "text": "The yellow, yeah. Tummy’s bloated, ankles are puffy. My partner says I’ve been vague this week."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You called the bleeding ‘probably nothing’, but you mentioned it. What have you been thinking it might be?",
    "dom": "rto",
    "why": "Explores the fear behind the concealment"
   },
   {
    "who": "pt",
    "text": "Cancer. Or that I’m dying inside. That’s why I’ve not told anyone. If I stop drinking, maybe it goes away."
   },
   {
    "who": "dr",
    "text": "That’s a frightening thing to carry on your own. Things sound hard at home too. When people are this low, sometimes they think everyone would be better off without them. Has anything like that crossed your mind?",
    "dom": "tasks",
    "why": "Sensitive, direct suicide risk question"
   },
   {
    "who": "pt",
    "text": "Now and then. I wouldn’t do anything. I’ve not got a plan. It’s just a thought when I’m low."
   },
   {
    "who": "dr",
    "text": "Thank you for being honest. That thought is common when things are this bad, and we’ll take it seriously and get you support. You’re not a burden.",
    "dom": "rto",
    "why": "Responds with compassion and commits to follow it up"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’ll be straight with you, because it could save your life. The black stools and the blood mean you may be bleeding from swollen veins in your gullet, which happens when the liver is scarred. That needs hospital today. Not Monday: now.",
    "dom": "tasks",
    "why": "Explains the probable variceal bleed and the urgency plainly"
   },
   {
    "who": "pt",
    "text": "Today? I can’t just…"
   },
   {
    "who": "dr",
    "text": "I know it’s a shock. It can be treated, but it has to be done in hospital. The yellow, the swelling and being vague tell me your liver is struggling too. Is it cancer? I can’t say yet, but bleeding like this in someone who drinks heavily is much more often from those veins, and that’s treatable.",
    "dom": "rto",
    "why": "Answers the cancer fear honestly without false reassurance"
   },
   {
    "who": "pt",
    "text": "Right."
   },
   {
    "who": "dr",
    "text": "And about Monday: your wish to stop is exactly right. But with your body this used to alcohol, and a fit last time, stopping dead on your own could cause another fit or a dangerous confused state. We don’t cancel your plan; we make it safe. In hospital they’ll cover the withdrawal with medication and give you vitamin B1 to protect your brain.",
    "dom": "tasks",
    "why": "Refuses to endorse unsafe self-detox while keeping his motivation"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what I’d like to do now. I’m going to call an ambulance while we’re on this call. Is someone with you? Please don’t drive, and don’t have any more to drink or eat for now.",
    "dom": "tasks",
    "why": "Immediate action: ambulance, checks he is not alone, practical instructions"
   },
   {
    "who": "pt",
    "text": "My partner’s downstairs. Okay. I’ll go."
   },
   {
    "who": "dr",
    "text": "Thank you. That’s the brave choice. Can you put her on for a moment so she knows what to watch for until they arrive? I’ll also write to the hospital today, and once you’re out I’ll link you with the alcohol service for support to stay stopped.",
    "dom": "gs",
    "why": "Involves the partner with consent and coordinates care beyond discharge"
   },
   {
    "who": "pt",
    "text": "Aye. She’ll be relieved, to be honest."
   },
   {
    "who": "dr",
    "text": "I’ll make sure your mood is part of the plan too. I’ll phone you after discharge. If the low thoughts get stronger at any point, tell the ward staff, or ring 111 option 2 or the Samaritans on 116 123.",
    "dom": "gs",
    "why": "Builds the mood follow-up and crisis contacts into the plan"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "While you wait, if you vomit more blood, feel faint, become more confused or have a fit, your partner should ring 999 again and tell them. Lie on your side if you feel faint.",
    "dom": "gs",
    "why": "Specific safety-net for the minutes before the ambulance"
   },
   {
    "who": "pt",
    "text": "Got it."
   },
   {
    "who": "dr",
    "text": "Just so I know we’re on the same page, what’s happening next?",
    "dom": "rto",
    "why": "Teach-back on the emergency plan"
   },
   {
    "who": "pt",
    "text": "Ambulance, hospital for the bleeding, and they’ll help me come off the drink safely. Not doing it on my own Monday."
   },
   {
    "who": "dr",
    "text": "Exactly. You came to tell someone you’re done with drink. I’m going to make sure you get through it safely.",
    "dom": "rto",
    "why": "Closes by honouring his decision"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; welcomed his decision without endorsing the method; noticed he looked unwell.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Off work 3 months, partner threatening to leave, shame, who is at home today.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the passing mention of black stools and blood, and ‘stopping dead on my own’, and acted on both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (willpower and stopping Monday), concern (cancer, dying), expectation (a willpower tablet).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Postural symptoms asked on video; hospital assessment, bloods and endoscopy arranged through admission.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Variceal vs peptic bleed; decompensated cirrhosis; withdrawal risk; mood disorder.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Recognised a probable upper GI bleed, decompensation and encephalopathy; asked directly about suicidal thoughts.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Probable variceal bleed with decompensated alcohol-related liver disease and physical dependence, in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Ambulance now; medically assisted withdrawal and thiamine in hospital (NICE CG100, CG115); no unsupported stopping.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Mood and suicide risk followed up; alcohol service after discharge; partner involved with consent.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 triggers while waiting; crisis numbers; GP phone call after discharge.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Sean Doherty",
    "age": "47 years · male",
    "pmh": [
     "Alcohol excess",
     "Deranged LFTs, macrocytosis, thrombocytopenia (months ago, not followed up)"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Last bloods: MCV high, ALT/AST raised, platelets low. DNA follow-up. Off work 3 months (scaffolder).",
    "reason": "E-booking: “Need help cutting down the drink.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and notice",
     "d": "He announces a plan to stop dead on Monday. Welcome the decision, not the method. Note he looks jaundiced and tremulous."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Amount, relief drinking, previous withdrawal fit, vomiting and stool colour, postural symptoms, jaundice, swelling, confusion."
    },
    {
     "t": "4–6",
     "h": "ICE and risk",
     "d": "Why he hid the bleeding (cancer fear). Ask directly about suicidal thoughts."
    },
    {
     "t": "6–10",
     "h": "Explain and act",
     "d": "Probable variceal bleed: ambulance now. Explain why stopping alone is dangerous. Partner involved. Alcohol service and mood follow-up planned."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 triggers while waiting, recovery position, crisis numbers, GP call after discharge. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Praises the plan to stop on Monday; never asks about vomiting or stools; offers a routine alcohol referral or a leaflet; no suicide question; the patient leaves to detox alone at home.",
    "pass": "Finds the haematemesis and melaena and arranges emergency admission; explains that abrupt stopping is dangerous and withdrawal needs medical support; asks about mood; gives basic safety-netting.",
    "exc": "All of the above, plus: keeps his motivation intact while redirecting the method; answers the cancer fear honestly; calls the ambulance during the consultation and involves his partner; builds alcohol service, thiamine and mood follow-up into a coordinated plan; teach-back."
   },
   "avoid": [
    {
     "dont": "“Good for you — stopping on Monday is a great plan.”",
     "instead": "“Your decision to stop is exactly right. Doing it suddenly on your own could cause a fit, so let’s make it safe.”",
     "why": "Endorsing unsupported withdrawal after a previous seizure is a patient-safety fail."
    },
    {
     "dont": "“I’ll refer you to the alcohol team and we’ll review in a couple of weeks.”",
     "instead": "“The bleeding means hospital today. I’m calling an ambulance while we’re talking.”",
     "why": "A routine plan for a probable variceal bleed is unsafe."
    },
    {
     "dont": "“You need to take responsibility for your drinking.”",
     "instead": "“Needing a drink to stop the shakes isn’t weak willpower. It’s your body being dependent, and that’s something we treat.”",
     "why": "Judgement increases shame and makes him refuse admission."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Relationship and work",
     "t": "Partner threatening to leave and 3 months off work. Involve his partner with consent; she is also the person who can call for help. Fit note and benefits advice after discharge."
    },
    {
     "h": "Shame",
     "t": "Shame drives concealment of the bleed and delays help. A non-judgemental stance is what gets him into the ambulance."
    }
   ],
   "legal": [
    {
     "h": "DVLA",
     "t": "Alcohol dependence is a notifiable condition for drivers. Group 1: licence refused or revoked until a year free of dependence (DVLA Assessing fitness to drive). If he drives, advise him of his duty to tell DVLA; GMC Confidentiality 2017 sets out what to do if he continues to drive against advice."
    },
    {
     "h": "Capacity",
     "t": "If he became confused and refused admission, assess capacity for that decision under the Mental Capacity Act 2005; encephalopathy can impair it. Act in his best interests if he lacks capacity."
    }
   ],
   "professional": [
    {
     "h": "Not colluding",
     "t": "Supporting his autonomy does not mean endorsing an unsafe plan. Explain the risk clearly and document the advice and his decision (GMC Good Medical Practice 2024)."
    },
    {
     "h": "Handover",
     "t": "Phone the admitting team, send a summary including the previous withdrawal seizure and suicidal thoughts, and follow up after discharge."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Local community alcohol service after discharge; mutual-aid groups such as Alcoholics Anonymous or SMART Recovery; Al-Anon for his partner; Samaritans 116 123 and NHS 111 option 2 for mental health crisis."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Haematemesis (coffee-ground or fresh) and melaena: emergency admission by ambulance",
     "Previous withdrawal seizure, morning tremor and relief drinking: high risk of seizures and delirium tremens if he stops abruptly",
     "Jaundice, ascites, oedema and new confusion: decompensated liver disease and possible encephalopathy",
     "Suicidal thoughts in the context of dependence, shame and relationship crisis"
    ],
    "psychosocial": [
     "Partner threatening to leave; who is at home now",
     "Off work 3 months; money and identity",
     "Shame and fear driving concealment"
    ],
    "ice": [
     "Idea: “Willpower is all I need. I’ll stop dead on Monday.”",
     "Concern: the blood means cancer or that he is dying inside",
     "Expectation: to be told to go ahead, and perhaps a willpower tablet"
    ]
   },
   "diagnosis": "Probable acute upper GI bleed, likely variceal, with decompensated alcohol-related liver disease (jaundice, ascites, oedema, possible early encephalopathy) in a man with physical alcohol dependence and a previous withdrawal seizure; passive suicidal thoughts without a plan.",
   "diagnosisLay": "“The black stools and the blood mean you’re probably bleeding from swollen veins in your gullet, which happens when drink has scarred the liver. That needs treating in hospital today. And because your body depends on alcohol, stopping suddenly on your own could cause a fit, so the hospital will help you stop safely.”",
   "management": {
    "reflectIce": "“You’ve been hiding the bleeding because you were scared it meant cancer. Telling me was the right thing, and it’s treatable.”",
    "psychosocial": "Involve his partner with consent; mood and suicide risk followed up; alcohol service and fit note after discharge.",
    "sharedPlan": [
     "Ambulance now for probable upper GI bleed (NICE CG141); do not drive, nothing further to drink",
     "Medically assisted withdrawal with benzodiazepines and thiamine in hospital (NICE CG100; NICE CG115)",
     "Community alcohol service, cirrhosis follow-up (NICE NG50) and mood support after discharge"
    ],
    "safetyNet": [
     "Partner to call 999 again for more blood, fainting, worsening confusion or a fit before the ambulance arrives",
     "Crisis numbers for suicidal thoughts; GP phone call after discharge"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Haematemesis",
    "s": "Visual algorithm · upper GI bleed",
    "href": "algorithms/haematemesis.html"
   },
   {
    "ic": "💠",
    "t": "Harmful drinking and alcohol dependence",
    "s": "Assisted withdrawal · thiamine · NICE CG115",
    "href": "management/alcohol-problem-drinking.html"
   },
   {
    "ic": "📋",
    "t": "Alcohol",
    "s": "Case walkthrough · problem drinking",
    "href": "../cases/alcohol.html"
   },
   {
    "ic": "💠",
    "t": "Depression protocol",
    "s": "Risk assessment · follow-up",
    "href": "management/depression.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA fitness to drive",
    "s": "Alcohol dependence rules",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "This station hides two emergencies under a request that sounds routine. It is failed by the candidate who praises the plan, misses the bleed, and ends with a leaflet.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Missing the haematemesis and melaena because he mentions them as an aside, or never asking.",
     "why": "“Does not gather sufficient information to make a safe assessment.” A probable variceal bleed needs admission today (NICE CG141).",
     "fix": "Ask every heavy drinker: “Any vomiting of blood or dark material? Have your stools gone black or sticky?”"
    },
    {
     "dom": "tasks",
     "fail": "Endorsing ‘stopping dead on Monday’ as a positive step.",
     "why": "With a previous withdrawal seizure he is at high risk of seizures and delirium tremens; NICE CG100 advises admission for medically assisted withdrawal.",
     "fix": "Welcome the decision, redirect the method: “We don’t cancel your plan; we make it safe.”"
    },
    {
     "dom": "tasks",
     "fail": "Arranging a community detox.",
     "why": "NICE CG115 criteria for inpatient withdrawal are met: previous withdrawal seizure and chronic liver disease, before even counting the bleed.",
     "fix": "State that withdrawal will be managed in hospital, with thiamine."
    },
    {
     "dom": "rto",
     "fail": "Delivering the emergency coldly, so he refuses to go.",
     "why": "His fear of cancer is why he concealed it; a blunt order can make him disengage.",
     "fix": "Answer the fear honestly: bleeding like this is more often from treatable veins than cancer, and hospital is how it gets treated."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about suicidal thoughts.",
     "why": "Dependence, shame and a relationship crisis raise suicide risk; omitting the question is unsafe (NICE NG225).",
     "fix": "Ask directly and kindly, then build mood follow-up and crisis numbers into the plan."
    },
    {
     "dom": "gs",
     "fail": "Telling him to get himself to A&E and ending the call.",
     "why": "He may still be bleeding and may be encephalopathic; he may drive, or not go at all.",
     "fix": "Call the ambulance during the consultation, check who is with him, brief his partner and phone the admitting team."
    }
   ]
  }
 },
 "liver-haemochromatosis": {
  "stem": {
   "name": "Iwan Pryce",
   "age": "52-year-old man",
   "pmh": [
    "Joint aches in the hands",
    "Fatigue under investigation"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Bloods for fatigue and joint aches: ferritin 1180 µg/L, fasting transferrin saturation 78%, ALT mildly raised, HbA1c 47 mmol/mol, FBC and CRP normal. HFE genotype sent and pending. Alcohol recorded as about 20 units a week.",
   "reason": "Booked by video to discuss “the iron result”."
  },
  "knowledge": {
   "guideline": "British Society for Haematology haemochromatosis guideline (2018) · EASL haemochromatosis guidelines (2022) · NICE NG50 · NICE PH38 · UK CMO low-risk drinking guidelines (2016)",
   "summary": "A high ferritin with a high fasting transferrin saturation means iron overload; in a man of Welsh descent this is most likely HFE haemochromatosis. It is treatable with venesection, organ damage must be assessed, and first-degree relatives should be offered testing.",
   "points": [
    {
     "h": "Transferrin saturation is the discriminator",
     "t": "Ferritin rises with inflammation, alcohol, fatty liver and malignancy, so it is not specific. A raised fasting transferrin saturation shows true iron loading. A ferritin of 1180 with a saturation of 78% needs HFE genotyping; C282Y homozygosity is the commonest cause in people of northern European and Celtic descent (EASL 2022)."
    },
    {
     "h": "The hidden constellation",
     "t": "Fatigue, arthropathy of the 2nd and 3rd MCP joints, skin pigmentation, low libido and erectile dysfunction, raised glucose and abnormal LFTs. These are often put down to age or alcohol for years. His HbA1c of 47 is in the non-diabetic hyperglycaemia range (42–47, NICE PH38), not diabetes, and needs monitoring."
    },
    {
     "h": "Assess the liver",
     "t": "EASL 2022: a ferritin above 1000 µg/L, especially with raised transaminases, marks a higher risk of advanced fibrosis or cirrhosis and needs formal fibrosis assessment. If cirrhosis is found, offer hepatocellular carcinoma surveillance with ultrasound, with or without AFP, every 6 months (NICE NG50)."
    },
    {
     "h": "Venesection",
     "t": "Regular venesection until iron stores are depleted, then maintenance, under a specialist to the ferritin and transferrin-saturation targets in BSH 2018. It improves fatigue and skin pigmentation and prevents progression; established cirrhosis and arthropathy may not fully reverse."
    },
    {
     "h": "Genetics and the cascade",
     "t": "HFE haemochromatosis is autosomal recessive. If he is a C282Y homozygote, each child carries at least one copy; whether they are affected depends on their mother’s genes. A brother has a 1 in 4 chance of the same genotype. Offer first-degree relatives HFE testing and iron studies (EASL 2022)."
    },
    {
     "h": "Alcohol and diet",
     "t": "Alcohol adds to iron-related liver injury: advise cutting right down, and stopping if fibrosis is significant. His 20 units a week is above the UK CMO 2016 low-risk limit of 14. Avoid iron and vitamin C supplements and raw shellfish."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Pryce, I’m Dr Lee. Thanks for joining. I know you’ve had the result and you’ve been reading about it. Before I explain anything, tell me what’s on your mind.",
    "dom": "rto",
    "why": "Invites his agenda before delivering information"
   },
   {
    "who": "pt",
    "text": "Call me Iwan. The nurse said my iron’s sky high. I read it can be an iron disease that runs in families. That’s what’s getting me. My son’s 24. Have I given it to him without knowing?"
   },
   {
    "who": "dr",
    "text": "That’s a big question and I promise we’ll answer it properly today. So I get it right for you, can I ask a little about how you’ve been, explain what the result means, then talk about your children? Does that work?",
    "dom": "gs",
    "why": "Commits to the key concern and sets a structure"
   },
   {
    "who": "pt",
    "text": "Aye, fine."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "The bloods were done for tiredness and aching joints. Tell me about those.",
    "dom": "rto",
    "why": "Open question on the presenting symptoms"
   },
   {
    "who": "pt",
    "text": "Tired a couple of years. My knuckles ache, these two on each hand. I put it down to the building work and getting older."
   },
   {
    "who": "dr",
    "text": "Have you noticed any change in your skin colour?",
    "dom": "tasks",
    "why": "Targets pigmentation from the haemochromatosis constellation"
   },
   {
    "who": "pt",
    "text": "Funny you say that. I tan even in a Welsh winter. The wife jokes about it."
   },
   {
    "who": "dr",
    "text": "Too much iron can affect hormones as well. Some men notice a lower sex drive or difficulty with erections. Is that something that’s happened to you?",
    "dom": "rto",
    "why": "Normalises and asks directly about an embarrassing symptom"
   },
   {
    "who": "pt",
    "text": "…Yes, to be honest. For a year or so. I haven’t said anything to anyone."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. It’s common, and it may well be part of this. Any thirst or passing more urine, breathlessness, swollen ankles or yellowing of the eyes?",
    "dom": "tasks",
    "why": "Screens for diabetes, cardiac involvement and liver decompensation"
   },
   {
    "who": "pt",
    "text": "No, none of that."
   },
   {
    "who": "dr",
    "text": "And roughly how much do you drink in a week?",
    "dom": "tasks",
    "why": "Quantifies alcohol, which adds to liver injury"
   },
   {
    "who": "pt",
    "text": "Not much. Few pints at the weekend. Maybe twenty units if I’m honest. Everyone said my dad’s problem was drink, so I watch it."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You mentioned your dad. Tell me what happened to him.",
    "dom": "rto",
    "why": "Follows the cue to the family story"
   },
   {
    "who": "pt",
    "text": "Diabetes, heart failure, went a bronze sort of colour. Died at 60. Liver trouble, they said, from the drink. Now I’m wondering if it was this all along, and I never twigged."
   },
   {
    "who": "dr",
    "text": "That’s a lot to be sitting with: worry for your children, and wondering about your dad. What were you hoping I could tell you today?",
    "dom": "rto",
    "why": "Names both strands of guilt and elicits expectations"
   },
   {
    "who": "pt",
    "text": "Whether it can be treated. Whether the kids are alright. Whether I’m going the same way as him."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me take those in turn. Your body is storing too much iron. The most likely reason is a condition called haemochromatosis, and the gene test we’ve sent will confirm it. It is common in people with Welsh and Celtic roots, it is not cancer, and it is very treatable.",
    "dom": "tasks",
    "why": "Names the diagnosis, frames it accurately and defuses fear"
   },
   {
    "who": "pt",
    "text": "Treatable how?"
   },
   {
    "who": "dr",
    "text": "By taking blood off regularly, a bit like giving blood, until the iron comes down, then less often to keep it down. It often helps the tiredness and the skin, and it stops further damage. The joints and the bedroom side can improve too, though not always completely, and there are other treatments for those if needed.",
    "dom": "tasks",
    "why": "Explains venesection honestly, including what may not reverse"
   },
   {
    "who": "pt",
    "text": "And the kids?"
   },
   {
    "who": "dr",
    "text": "It runs in families, so your son, your daughter and your brother should each be offered a simple blood and gene test. To be affected you need two copies of the gene, one from each parent, so your children’s risk depends on their mum’s genes too. And hear this: you couldn’t have known. Because it has been found in you, they can be checked early, before it ever harms them.",
    "dom": "tasks",
    "why": "Accurate recessive inheritance, cascade testing, and reframes the guilt"
   },
   {
    "who": "pt",
    "text": "So I’ve not doomed them."
   },
   {
    "who": "dr",
    "text": "No. You may well have protected them. And your dad could have had this at a time when nobody tested for it. That isn’t something you missed.",
    "dom": "rto",
    "why": "Addresses the father’s story without blame"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s the plan. I’ll chase the gene test and refer you to the liver team, because with your iron this high they’ll want a scan to see how your liver is coping. They’ll organise the blood removal. I’ll repeat your sugar test, because it’s on the high side of normal.",
    "dom": "tasks",
    "why": "Specialist referral, fibrosis assessment and glucose monitoring"
   },
   {
    "who": "pt",
    "text": "Right. That makes sense."
   },
   {
    "who": "dr",
    "text": "About drink: this isn’t your dad’s story being repeated. Iron and alcohol both put strain on the liver, so the less you drink, the better it copes. What would be realistic for you?",
    "dom": "rto",
    "why": "Alcohol advice that avoids echoing the family’s blame, and negotiates"
   },
   {
    "who": "pt",
    "text": "I could stop in the week. Keep it to a couple at the weekend."
   },
   {
    "who": "dr",
    "text": "That’s a good start, and the liver team may advise more once they’ve seen the scan. Avoid iron or vitamin C tablets and raw shellfish too. I’ll give you a letter for your children and brother to take to their GP.",
    "dom": "gs",
    "why": "Practical advice and a concrete cascade tool"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you notice yellowing, a swollen tummy, vomiting blood, black stools, or new breathlessness or swollen ankles, ring us the same day. I’ll call you with the gene result, and I’ll see you again once you’ve met the specialist.",
    "dom": "gs",
    "why": "Specific red flags and a defined review"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "When you speak to your son tonight, what will you tell him?",
    "dom": "rto",
    "why": "Teach-back on the cascade message"
   },
   {
    "who": "pt",
    "text": "That I’ve likely got a treatable iron condition, it runs in families, and he should get a blood test from his GP with the letter. And that it’s nobody’s fault."
   },
   {
    "who": "dr",
    "text": "That’s exactly right. You came in thinking you’d harmed them. Today is the day you started protecting them.",
    "dom": "rto",
    "why": "Closes by reframing the emotional core"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question first; allowed the worry about his son to surface before any iron physiology.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Builder, family structure (two children, brother), the father’s death and the family’s alcohol narrative, his drinking.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “have I given it to him?”, the father’s ‘bronze’ skin and the embarrassment around libido, and explored each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (inherited iron disease), concern (guilt about the children, repeating his father), expectation (treatable, children protected).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "HFE genotype; fibrosis assessment via hepatology; repeat HbA1c; ECG if any cardiac symptom; abdominal examination at a face-to-face visit.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "HFE haemochromatosis vs reactive ferritin (alcohol, fatty liver, inflammation); transferrin saturation used to discriminate.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about jaundice, abdominal swelling, cardiac and diabetic symptoms; recognised ferritin above 1000 with raised ALT as a fibrosis risk.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Iron overload, most likely hereditary haemochromatosis, with the genetic test pending, in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Hepatology referral for fibrosis assessment and venesection; cascade testing for children and brother; negotiated alcohol reduction.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Non-diabetic hyperglycaemia monitored; erectile dysfunction acknowledged with a plan; supplements and raw shellfish avoided.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Liver and cardiac red flags named; gene result phoned; review after specialist; HCC surveillance if cirrhosis found.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Investigations & results",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Iwan Pryce",
    "age": "52 years · male",
    "pmh": [
     "Arthralgia of the hands",
     "Fatigue"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Ferritin 1180 µg/L, fasting transferrin saturation 78%, ALT mildly raised, HbA1c 47. FBC and CRP normal. HFE genotype pending. Alcohol ~20 units/week.",
    "reason": "To discuss the iron result. “Is it something I’ve passed on?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "He opens with guilt about his son. Acknowledge it and promise to answer it, then agree a structure."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Fatigue, MCP joints, skin colour, libido and erections (ask directly and kindly), diabetes, heart and liver symptoms, alcohol."
    },
    {
     "t": "4–6",
     "h": "ICE and the father",
     "d": "The father’s bronze skin, diabetes and heart failure, blamed on drink. Name both strands of guilt."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Probable haemochromatosis, treatable with venesection. Recessive inheritance explained accurately. Cascade letter, hepatology referral, alcohol negotiated."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Liver and heart red flags, gene result call, review. Teach-back: “What will you tell your son?”"
    }
   ],
   "wordPics": {
    "fail": "Explains ferritin physiology at length and never answers the question about his children; reduces the diagnosis to his drinking; no cascade testing; no liver assessment despite a ferritin above 1000.",
    "pass": "Explains probable haemochromatosis and that it is treatable; arranges genetic confirmation and specialist referral; advises testing for first-degree relatives; gives alcohol advice and basic safety-netting.",
    "exc": "All of the above, plus: answers the guilt first and reframes diagnosis as protection; explains recessive inheritance accurately, including the mother’s role; finds the hidden symptoms, including erectile dysfunction; handles the father’s story without blame; gives a cascade letter and uses teach-back."
   },
   "avoid": [
    {
     "dont": "“Your son will definitely have it too.”",
     "instead": "“To be affected you need two copies of the gene, so his risk depends on his mum’s genes as well. A simple test will tell us.”",
     "why": "Inaccurate genetics deepens the guilt and misleads the family."
    },
    {
     "dont": "“The main thing is to stop drinking.”",
     "instead": "“Iron and alcohol both strain the liver, so less alcohol helps it cope. This isn’t your dad’s story repeating.”",
     "why": "Making it an alcohol consultation echoes the family’s wrong label and loses him."
    },
    {
     "dont": "“Don’t feel guilty, it’s just genetics.”",
     "instead": "“You couldn’t have known. Because it’s been found in you, your children can be checked early and protected.”",
     "why": "Brushing past guilt earns nothing; reframing it earns Relating marks."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family and work",
     "t": "A builder with physical symptoms blamed on the job; two adult children and a brother who each need information. Offer a letter for relatives to take to their own GP."
    },
    {
     "h": "Family narrative",
     "t": "The family blamed his father’s illness on drink. Handle alcohol advice so it protects his liver without repeating that stigma."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality in the cascade",
     "t": "His result is confidential. Relatives are informed through him, with his agreement, usually by a family letter (GMC Confidentiality 2017). He is an adult and his children are adults, so each decides about testing."
    },
    {
     "h": "Insurance",
     "t": "Under the UK Code on Genetic Testing and Insurance, predictive genetic test results need not be disclosed for most policies (Huntington’s disease is the listed exception for large life cover). A diagnostic result, such as his, may need to be disclosed."
    }
   ],
   "professional": [
    {
     "h": "Shared decision-making",
     "t": "Give honest information about what venesection can and cannot reverse, and let him choose his alcohol goal (GMC Decision making and consent 2020)."
    },
    {
     "h": "Continuity",
     "t": "Coordinate the gene result, hepatology referral, HbA1c recheck and any HCC surveillance so nothing falls between services."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Haemochromatosis UK for patient and family information; some NHS Blood and Transplant centres accept people with haemochromatosis as donors during maintenance, per their eligibility rules."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Jaundice, ascites, haematemesis or melaena: decompensated liver disease, urgent assessment",
     "Breathlessness, oedema or palpitations: iron-related cardiomyopathy or arrhythmia",
     "Ferritin above 1000 µg/L with raised ALT: higher risk of advanced fibrosis (EASL 2022)"
    ],
    "psychosocial": [
     "Guilt about passing it to his children and brother",
     "His father’s death at 60 and the family’s alcohol narrative",
     "Embarrassment about libido and erections"
    ],
    "ice": [
     "Idea: “An iron disease that runs in families.”",
     "Concern: “Have I done that to my son?” and repeating his father’s illness",
     "Expectation: to hear it is treatable and that his children can be protected"
    ]
   },
   "diagnosis": "Iron overload (ferritin 1180 µg/L, transferrin saturation 78%) with arthropathy, pigmentation, probable hypogonadism, non-diabetic hyperglycaemia and mildly raised ALT: probable HFE haemochromatosis, genotype pending; fibrosis assessment needed.",
   "diagnosisLay": "“Your body absorbs and stores more iron than it needs, and over the years it builds up in places like the liver, joints and hormone glands. It’s a common inherited condition, it isn’t cancer, and taking off blood regularly brings the iron down.”",
   "management": {
    "reflectIce": "“You came in afraid you’d harmed your children. Because we’ve found this in you, they can be tested early and never get ill from it.”",
    "psychosocial": "Family letter for his children and brother; handle alcohol without blame; invite a later appointment about erectile dysfunction if it persists after treatment.",
    "sharedPlan": [
     "Chase HFE genotype; hepatology referral for fibrosis assessment and venesection to BSH 2018 targets",
     "Cascade HFE testing and iron studies for first-degree relatives (EASL 2022)",
     "Alcohol reduction he has chosen; avoid iron or vitamin C supplements and raw shellfish; repeat HbA1c"
    ],
    "safetyNet": [
     "Same-day contact for jaundice, abdominal swelling, vomiting blood, black stools, breathlessness or ankle swelling",
     "HCC surveillance with 6-monthly ultrasound, with or without AFP, if cirrhosis is found (NICE NG50)"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "High ferritin",
    "s": "Visual algorithm · transferrin saturation · cascade",
    "href": "algorithms/high-ferritin.html"
   },
   {
    "ic": "📋",
    "t": "Abnormal LFTs",
    "s": "Case walkthrough · liver screen",
    "href": "../cases/abnormal-lfts.html"
   },
   {
    "ic": "🗺️",
    "t": "Abnormal LFTs pathway",
    "s": "Visual algorithm · fibrosis assessment",
    "href": "algorithms/abnormal-lfts.html"
   },
   {
    "ic": "💠",
    "t": "Erectile dysfunction protocol",
    "s": "Assessment · hormones · treatment",
    "href": "management/erectile-dysfunction.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is not failed on iron studies. It is failed by a candidate who explains the physiology and never answers the question he walked in with, or who turns it into an alcohol consultation that repeats the family’s mistake about his father.",
   "items": [
    {
     "dom": "rto",
     "fail": "Launching into ferritin and transferrin physiology while his question about his son hangs unanswered.",
     "why": "“Does not identify or respond to the patient’s cues.” The inheritance guilt is the emotional core.",
     "fix": "Acknowledge it in the first minute and promise to answer it; then answer it clearly before the end of minute 8."
    },
    {
     "dom": "tasks",
     "fail": "Telling him his children will definitely have it, or that they don’t need testing.",
     "why": "Inaccurate genetics. HFE haemochromatosis is autosomal recessive; first-degree relatives should be offered testing (EASL 2022).",
     "fix": "“You need two copies to be affected, so their risk depends on their mum’s genes too. A simple test will tell us.”"
    },
    {
     "dom": "tasks",
     "fail": "Managing a ferritin of 1180 with venesection alone and no liver assessment.",
     "why": "Ferritin above 1000 with raised ALT marks a higher fibrosis risk; cirrhosis changes follow-up, including HCC surveillance (NICE NG50).",
     "fix": "Refer to hepatology for fibrosis assessment as part of the plan."
    },
    {
     "dom": "tasks",
     "fail": "Calling HbA1c 47 diabetes.",
     "why": "47 mmol/mol is non-diabetic hyperglycaemia (NICE PH38); a diagnosis of diabetes needs 48 or more.",
     "fix": "“Your sugar is on the high side of normal; we’ll recheck it and it may improve as the iron comes down.”"
    },
    {
     "dom": "rto",
     "fail": "Making alcohol the headline: “this is why you need to stop drinking.”",
     "why": "It mirrors the family’s false story about his father and he disengages.",
     "fix": "Frame it as liver protection and negotiate a goal he chooses."
    },
    {
     "dom": "gs",
     "fail": "Missing the erectile dysfunction because he never raises it.",
     "why": "Incomplete data gathering; hypogonadism is part of the picture and he is too embarrassed to volunteer it.",
     "fix": "Normalise and ask: “Some men notice a lower sex drive or difficulty with erections. Has that happened to you?”"
    }
   ]
  }
 },
 "liver-jaundice-traveller": {
  "stem": {
   "name": "Jay Mistry",
   "age": "26-year-old man",
   "pmh": [
    "No significant past medical history",
    "Chef in a busy restaurant"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Returned 12 days ago from a month backpacking in India and South-East Asia. E-consult this week: yellow eyes for 4 days, dark urine, pale stools. Bloods today: ALT 1840 U/L, AST 1100 U/L, bilirubin 96 µmol/L, ALP mildly raised, INR normal. No viral serology on file.",
   "reason": "Video consultation to discuss jaundice and his blood results."
  },
  "knowledge": {
   "guideline": "UKHSA Public health control and management of hepatitis A (2024) · UKHSA Green Book ch.17 (2024) · Health Protection (Notification) Regulations 2010 · NICE NG60 · BHIVA/BASHH/BIA HIV testing guidelines (2020) · BSG abnormal liver blood tests guideline (2018) · NICE NG12 (updated April 2026)",
   "summary": "Jaundice with ALT in the thousands in a returning traveller is acute viral hepatitis until proven otherwise, most often A or E. Check synthetic function, test the full viral and blood-borne panel with consent, notify on suspicion, and exclude a food handler from work.",
   "points": [
    {
     "h": "Read the pattern",
     "t": "Transaminases in the thousands with a modest ALP rise is a hepatocellular picture: viral, drug or toxin, ischaemic or autoimmune hepatitis. A normal INR is reassuring about synthetic function today; it must be repeated because it is the earliest marker of liver failure. BSG 2018: refer urgently if there is synthetic failure or marked derangement."
    },
    {
     "h": "Test broadly",
     "t": "Hepatitis A IgM, hepatitis B surface antigen and core IgM, hepatitis C antibody (with RNA if positive), hepatitis E, and an HIV test with consent (NICE NG60). BSG 2018 advises HEV testing when A, B and C are negative; test it up front in a returning traveller. Malaria films if there has been any fever after travel to an endemic area."
    },
    {
     "h": "Testing windows",
     "t": "BHIVA/BASHH/BIA 2020: a fourth-generation HIV test excludes infection only from 45 days after the last exposure, so an early negative needs repeating. Hepatitis C antibody can take weeks to months to appear; RNA testing detects it earlier. Tell him plainly that one clear set of results may not be the last word."
    },
    {
     "h": "Notification and exclusion",
     "t": "Acute infectious hepatitis is notifiable on clinical suspicion (Health Protection (Notification) Regulations 2010): written notice to the proper officer within 3 days, by phone if urgent. UKHSA 2024: exclude hepatitis A cases, including food handlers, until 7 days after the onset of jaundice; the health protection team advises on return and on hepatitis E."
    },
    {
     "h": "Contacts",
     "t": "Hepatitis A is infectious from about 2 weeks before symptoms to 1 week after jaundice. UKHSA 2024: hepatitis A vaccine within 14 days of exposure for healthy close contacts aged 1 and over; the health protection team arranges it, adding immunoglobulin for higher-risk contacts. Household and sexual contacts, including his girlfriend, need assessing."
    },
    {
     "h": "Acute liver failure and age",
     "t": "Confusion, drowsiness, bruising or bleeding, persistent vomiting, a rising INR or deepening jaundice mean same-day hospital assessment. Avoid alcohol; paracetamol at standard doses only, avoiding large doses (BNF). For contrast: NICE NG12 (updated April 2026) refers people aged 40 and over with jaundice on a suspected pancreatic cancer pathway, which does not apply to Jay at 26."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Jay, I’m Dr Lee. Thanks for coming on video, and I can see what you mean about the colour. Before we get to results, tell me how you’re feeling in yourself today.",
    "dom": "rto",
    "why": "Acknowledges his joke and the visible jaundice, then opens with his experience"
   },
   {
    "who": "pt",
    "text": "Rotten, honestly. Yellow eyes, wee like Coke, no appetite. I reckon I caught a bug travelling. I mainly need to know how long till it clears so I can get back in the kitchen. Is there a tablet that speeds it up?"
   },
   {
    "who": "dr",
    "text": "Those are fair questions and I’ll answer both. So that I give you real answers rather than guesses, can I ask about the illness and the trip first, then explain the blood test and agree a plan? Your work is definitely on the list.",
    "dom": "gs",
    "why": "Agrees an agenda that includes his work question without jumping to it"
   },
   {
    "who": "pt",
    "text": "Yeah, go for it."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Take me back to when this started. What came first?",
    "dom": "rto",
    "why": "Open question to get the timeline in his words"
   },
   {
    "who": "pt",
    "text": "A couple of weeks ago I had a temperature, felt sick and achy. I thought it was flu. Then four days ago the yellow started, the wee went dark and my poo went pale. Sore just under my right ribs."
   },
   {
    "who": "dr",
    "text": "Any confusion or drowsiness, bruising or bleeding from your gums, or vomiting so much you can’t keep fluids down? And has the fever come back at all?",
    "dom": "tasks",
    "why": "Screens for acute liver failure and for fever that would need malaria films"
   },
   {
    "who": "pt",
    "text": "No, none of that. No fever since. Just tired and off my food."
   },
   {
    "who": "dr",
    "text": "Good. Tell me about the food and water out there.",
    "dom": "tasks",
    "why": "Covers the faeco-oral route for hepatitis A and E"
   },
   {
    "who": "pt",
    "text": "Street food every day, salads, ice in drinks, sometimes tap water. It’s a bug from the food, right?"
   },
   {
    "who": "dr",
    "text": "That’s the most likely route. Everyone I see with this gets the same full set of questions, with no judgement, because the answer changes which tests we do. On the trip, any new sexual partners, any tattoos or piercings, and any injections, medical or dental treatment?",
    "dom": "tasks",
    "why": "Normalises the question and covers the blood-borne and sexual routes"
   },
   {
    "who": "pt",
    "text": "…Yeah. A couple of girls, no condoms. And I got a tattoo in a hostel town. I wasn’t thinking."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That is genuinely useful, and it isn’t something to feel ashamed about here. Any drugs by injection, and any alcohol or medicines recently, including paracetamol?",
    "dom": "rto",
    "why": "Rewards the disclosure without moralising and completes the toxin history"
   },
   {
    "who": "pt",
    "text": "Never injected anything. A few beers out there, nothing since I got ill. Couple of paracetamol for the ache."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You went quiet before you told me about the trip. I wonder whether the thing keeping you awake isn’t the yellow at all.",
    "dom": "rto",
    "why": "Names the cue behind the pause and invites the hidden concern"
   },
   {
    "who": "pt",
    "text": "My girlfriend. We’ve been together two years. That trip was meant to be the lads’ thing before we settle down. If this is hepatitis B or HIV, I have to tell her. And what if I’ve already given it to her?"
   },
   {
    "who": "dr",
    "text": "That’s a lot to have been carrying on your own. So the real hope today is to find out whether this is a food bug or something caught through sex, and whether she’s at risk?",
    "dom": "rto",
    "why": "Reflects the concern and confirms the real expectation"
   },
   {
    "who": "pt",
    "text": "Yeah. That’s it."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s what I think. Your liver is inflamed, which is why you’re yellow. The pattern in your blood test, after a month of street food, most likely fits hepatitis A or E, which come from food and water. They usually settle by themselves over a few weeks, and your clotting test is normal, which tells me the liver is still doing its main jobs.",
    "dom": "tasks",
    "why": "Explains acute hepatocellular hepatitis in plain words, with its likely cause"
   },
   {
    "who": "pt",
    "text": "So it probably is the food?"
   },
   {
    "who": "dr",
    "text": "Probably, but I won’t guess. I’d like one blood sample today that checks for hepatitis A, B, C and E, and, with your agreement, HIV. I’ll repeat the liver and clotting tests too. I should be honest that HIV and hepatitis C can take several weeks to show, so if the first results are clear we may repeat them later to be sure.",
    "dom": "tasks",
    "why": "Full viral and blood-borne panel with consent, and honest testing windows"
   },
   {
    "who": "pt",
    "text": "Yeah, test for all of it. I’d rather know."
   },
   {
    "who": "dr",
    "text": "Now the part you didn’t expect. Hepatitis from food spreads through food. As a chef, you mustn’t work in the kitchen until you’re cleared: at least a week from when the yellow started, and the public health team advises on your return. I have a legal duty to notify them, and they will also check whether people close to you need a vaccine.",
    "dom": "tasks",
    "why": "States the food-handler exclusion and the statutory notification"
   },
   {
    "who": "pt",
    "text": "A week off? I can’t afford that."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I know it hits your wages. I’ll give you a fit note, and the public health team can confirm the exclusion in writing for your employer, which also protects your job. Is money going to be a real problem?",
    "dom": "rto",
    "why": "Acknowledges the financial impact and offers practical help"
   },
   {
    "who": "pt",
    "text": "I’ll manage if I get sick pay. The boss is alright."
   },
   {
    "who": "dr",
    "text": "About your girlfriend: condoms, or no sex, until your results are back. If she has been close to you since you got home, the public health team may offer her a hepatitis A vaccine, and the sexual health clinic can test her confidentially. When and how you tell her is your decision, and I’m happy to help you plan it.",
    "dom": "rto",
    "why": "Protects the partner and supports disclosure without taking control from him"
   },
   {
    "who": "pt",
    "text": "Okay. I think I do need to tell her. Just not before I know what it is."
   },
   {
    "who": "dr",
    "text": "That’s a reasonable plan. While you recover: no alcohol at all, eat what you can, drink plenty, and paracetamol only at normal doses. No herbal remedies. And there isn’t a tablet to speed up this kind of hepatitis; rest is the treatment.",
    "dom": "tasks",
    "why": "Hepatotoxin advice and an honest answer to his tablet question"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Please go straight to A&E, or call 999 if you can’t get there, if you become confused or very sleepy, bruise or bleed easily, can’t keep fluids down, or go more yellow. I’ll ring you with the results in a few days, and we’ll book a repeat test for later.",
    "dom": "gs",
    "why": "Named acute liver failure red flags and dated follow-up"
   },
   {
    "who": "pt",
    "text": "Got it."
   },
   {
    "who": "dr",
    "text": "So I know I’ve explained it properly, what will you tell your boss tomorrow?",
    "dom": "rto",
    "why": "Teach-back on the point he most needs to act on"
   },
   {
    "who": "pt",
    "text": "That I’ve got hepatitis, probably from food, and I can’t cook until public health clears me. And I’ll get a sick note."
   },
   {
    "who": "dr",
    "text": "Exactly. You did the right thing by telling me everything today.",
    "dom": "gs",
    "why": "Closes warmly and reinforces the disclosure"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question about how he feels; heard the work and ‘quick fix’ questions without letting them set the agenda.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Chef and food handler, income worries, relationship of two years, alcohol use.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the pause about the trip and the over-firm ‘travel bug’ and opened the sexual and tattoo history safely.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (food bug), concern (blood-borne infection and his girlfriend), expectation (return-to-work date and a tablet).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Hepatitis A, B, C and E serology; HIV with consent; repeat LFTs and INR; malaria films if febrile; repeat tests after the window period.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Hepatitis A or E vs acute hepatitis B vs drug or toxin injury; tested with food, sexual, tattoo, injecting and medication history.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about confusion, drowsiness, bleeding and vomiting; normal INR noted and repeated; same-day admission criteria known.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Acute viral hepatitis, most likely A or E, explained in plain words with the cause still to confirm.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Notification on suspicion; food-handler exclusion for at least 7 days from jaundice onset per UKHSA; fit note; no alcohol, standard paracetamol doses.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Partner protection and testing, contact vaccination via the health protection team, sexual health signposting.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Liver failure red flags named; results phoned; repeat HIV and hepatitis C testing timed after the window period.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "New & undifferentiated presentations",
    "Investigations & results"
   ],
   "stem": {
    "name": "Jay Mistry",
    "age": "26 years · male",
    "pmh": [
     "Nil significant",
     "Occupation: chef"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Back 12 days from a month in India and South-East Asia. Jaundiced 4 days. Bloods today: ALT 1840, AST 1100, bilirubin 96, ALP mildly up, INR normal. No hepatitis or HIV serology on file.",
    "reason": "Video consultation: “I’ve gone yellow, I need to get back to work.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agree agenda",
     "d": "He opens with the quick-fix question. Acknowledge it, then agree to cover the illness, the cause and his work in that order."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Timeline, liver failure red flags, fever, food and water, then the full non-judgemental risk history: sex, tattoo, injections, medicines, alcohol."
    },
    {
     "t": "4–6",
     "h": "ICE and the hidden agenda",
     "d": "Name the pause. The real fear is a blood-borne infection and what it means for his girlfriend."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Probable hepatitis A or E. Full panel with HIV consent and honest windows. Notification, kitchen exclusion, fit note, partner protection."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Liver failure red flags, results call, repeat testing date. Teach-back: “What will you tell your boss?”"
    }
   ],
   "wordPics": {
    "fail": "Accepts ‘travel bug’ and tells him it will settle; no sexual or tattoo history; no HIV or hepatitis B and C testing; misses that a chef must not handle food; no notification; no liver failure safety-net.",
    "pass": "Recognises acute viral hepatitis; takes a full exposure history and finds the sex and tattoo; orders the viral panel and HIV with consent; excludes him from food handling and notifies; gives red-flag safety-netting.",
    "exc": "All of the above, plus: names the unspoken fear about his girlfriend kindly; explains testing windows honestly; plans partner protection and testing while leaving disclosure to him; fit note and written exclusion so the plan works for his income; teach-back on the work message."
   },
   "avoid": [
    {
     "dont": "“It’s just a travel bug, it’ll clear in a few weeks.”",
     "instead": "“Food is the most likely route, but I ask everyone the full set of questions because the cause changes the plan.”",
     "why": "Premature reassurance closes the door on the hidden exposures and the blood-borne tests."
    },
    {
     "dont": "“You really should have used condoms.”",
     "instead": "“Thank you for telling me. That’s useful, and it isn’t something to feel ashamed about here.”",
     "why": "Moralising costs Relating marks and makes further disclosure less likely."
    },
    {
     "dont": "“You can go back to work when you feel better.”",
     "instead": "“As a chef you mustn’t handle food until public health clear you, at least a week from when the yellow started.”",
     "why": "Missing the food-handler exclusion is a patient-safety and public-health fail."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work and income",
     "t": "A chef paid by the shift faces lost income from exclusion. Offer a fit note and written confirmation of exclusion from the health protection team; he is likely to be eligible for Statutory Sick Pay."
    },
    {
     "h": "Relationship",
     "t": "Guilt about sex outside the relationship drives both the concealment and the anxiety. Support disclosure at his pace while making sure his partner is protected and can be tested."
    }
   ],
   "legal": [
    {
     "h": "Statutory notification",
     "t": "Acute infectious hepatitis is notifiable on clinical suspicion under the Health Protection (Notification) Regulations 2010: written notice to the proper officer within 3 days, or by phone if urgent. Do not wait for laboratory confirmation."
    },
    {
     "h": "Food-handler exclusion",
     "t": "UKHSA 2024: hepatitis A cases, including food handlers, are excluded until 7 days after the onset of jaundice. The health protection team advises on the individual case and on return to work."
    }
   ],
   "professional": [
    {
     "h": "Consent for HIV testing",
     "t": "Offer HIV testing as routine and obtain verbal consent (NICE NG60; BHIVA/BASHH/BIA 2020). Explain window periods rather than giving false reassurance."
    },
    {
     "h": "Confidentiality and partners",
     "t": "His sexual history is confidential (GMC Confidentiality 2017). Partner notification is best done through the sexual health clinic, with his agreement. Disclosure without consent is for serious risk of harm only and would not arise from these facts alone."
    }
   ],
   "community": [
    {
     "h": "Services",
     "t": "Local sexual health clinic for confidential partner testing and notification; UKHSA health protection team for contact vaccination; travel health advice, including hepatitis A vaccination, before future trips."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Confusion, drowsiness, bruising or bleeding, persistent vomiting, rising INR or deepening jaundice: acute liver failure, same-day hospital",
     "Fever after travel to a malaria-endemic area: same-day malaria films",
     "Jaundice aged 40 and over without an infective cause: NICE NG12 (updated April 2026) suspected pancreatic cancer pathway (not applicable at 26)"
    ],
    "psychosocial": [
     "Chef and food handler: exclusion, income and fit note",
     "Two-year relationship and guilt about new partners on the trip",
     "Alcohol use and self-medication with paracetamol"
    ],
    "ice": [
     "Idea: “A bug I picked up from the food travelling.”",
     "Concern: hepatitis B, C or HIV caught through sex or the tattoo, and having to tell or having infected his girlfriend",
     "Expectation: a return-to-work date and a tablet to speed recovery"
    ]
   },
   "diagnosis": "Acute hepatitis (ALT 1840, bilirubin 96, normal INR) in a returning traveller: most likely acute viral hepatitis A or E, with acute hepatitis B and other blood-borne infection to exclude given unprotected sex and an unsterile tattoo. No features of acute liver failure today.",
   "diagnosisLay": "“Your liver is inflamed, which is why you’ve gone yellow. The most likely cause is a virus from food or water that usually clears on its own in a few weeks. Because of the other things you told me, we’ll test for the viruses that spread through sex and blood too, so you know for certain.”",
   "management": {
    "reflectIce": "“You’ve been hoping this is a food bug because the other possibility means talking to your girlfriend. Let’s find out properly, and whatever it is, there’s a plan.”",
    "psychosocial": "Fit note and written exclusion to protect his income and job; support to plan disclosure in his own time; sexual health clinic for confidential partner testing.",
    "sharedPlan": [
     "Hepatitis A, B, C and E serology, HIV with consent, repeat LFTs and INR; repeat HIV and hepatitis C after the window period (BHIVA/BASHH/BIA 2020)",
     "Notify on suspicion; no food handling until cleared, at least 7 days from jaundice onset (UKHSA 2024); contacts assessed for vaccine",
     "No alcohol, paracetamol at standard doses only, no herbal remedies; condoms or no sex until results"
    ],
    "safetyNet": [
     "A&E or 999 for confusion, drowsiness, bleeding, persistent vomiting or deepening jaundice",
     "GP phones with results; repeat LFTs and INR booked; review at each result"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Jaundice in adults",
    "s": "Visual algorithm · hepatocellular vs obstructive",
    "href": "algorithms/jaundice.html"
   },
   {
    "ic": "💠",
    "t": "Hepatitis A protocol",
    "s": "Notification · exclusion · contacts",
    "href": "management/hepatitis-a.html"
   },
   {
    "ic": "💠",
    "t": "HIV in primary care",
    "s": "Testing · consent · NICE NG60",
    "href": "management/hiv.html"
   },
   {
    "ic": "🗺️",
    "t": "Abnormal LFTs",
    "s": "Visual algorithm · BSG 2018",
    "href": "algorithms/abnormal-lfts.html"
   },
   {
    "ic": "📝",
    "t": "Fit note helper",
    "s": "Med3 wording · exclusion",
    "href": "fit-note.html"
   }
  ],
  "pitfalls": {
   "intro": "The diagnosis here is easy. The station is failed on what surrounds it: a risk history that never goes beyond food, a chef sent back to the kitchen, and a frightened young man left alone with the question he came to ask.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Taking only a food and water history and accepting ‘travel bug’.",
     "why": "“Does not gather sufficient information to make a safe assessment.” Sexual and tattoo exposure change the test panel and the partner plan.",
     "fix": "Normalise it: “I ask everyone the same questions, no judgement: new partners, tattoos or piercings, injections or procedures?”"
    },
    {
     "dom": "tasks",
     "fail": "Telling a chef he can go back to work when he feels better.",
     "why": "“Management plan not in line with current UK best practice.” UKHSA 2024 excludes hepatitis A cases, including food handlers, until 7 days after jaundice onset, and notification is a statutory duty.",
     "fix": "State the exclusion, notify on suspicion, and give a fit note so the plan is workable."
    },
    {
     "dom": "tasks",
     "fail": "Telling him a clear HIV test today means he is fine.",
     "why": "False reassurance: a fourth-generation test excludes HIV only from 45 days after exposure (BHIVA/BASHH/BIA 2020).",
     "fix": "“Some tests take weeks to turn positive, so we’ll repeat them later to be certain.”"
    },
    {
     "dom": "rto",
     "fail": "Reacting to the disclosure with a lecture about condoms or fidelity.",
     "why": "Judgemental responses are a recurring Relating fail and shut down further disclosure.",
     "fix": "Thank him, then move to what it means for his tests and his partner."
    },
    {
     "dom": "rto",
     "fail": "Telling him he must inform his girlfriend today.",
     "why": "Takes control away from the patient; he disengages from testing.",
     "fix": "Protect her in the meantime (condoms or no sex, clinic testing) and offer help planning the conversation when he is ready."
    },
    {
     "dom": "gs",
     "fail": "Closing with “come back if you get worse”.",
     "why": "Non-specific safety-netting misses the features of acute liver failure.",
     "fix": "Name confusion, drowsiness, bleeding, vomiting and deepening jaundice, and give dated results and repeat testing."
    }
   ]
  }
 },
 "syncope-cardiac-fh": {
  "stem": {
   "name": "Deniz Aydin",
   "age": "19-year-old man",
   "pmh": [
    "No significant past medical history",
    "Semi-professional footballer"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Two witnessed collapses during matches last season, both attributed to heat and dehydration at the time; not previously assessed. No ECG on record. Appointment booked by his mother.",
   "reason": "Video consultation about collapses on the pitch. Wants to be “signed off” before an academy trial."
  },
  "knowledge": {
   "guideline": "NICE CG109 (updated 2023) · NICE QS71 · ESC syncope guidelines (2018) · DVLA Assessing fitness to drive (updated September 2025) · GMC Confidentiality (2017)",
   "summary": "Collapse during exercise is a cardinal cardiac red flag. With palpitations before one episode and a family history of sudden death at 23, he needs an ECG now and specialist cardiovascular assessment within 24 hours, and must stop high-intensity sport until assessed.",
   "points": [
    {
     "h": "Exertional syncope",
     "t": "Loss of consciousness during exercise, rather than after it, suggests a structural or arrhythmic cause. Palpitations immediately before collapse and little or no prodrome add to the concern. Heat and dehydration are a diagnosis of exclusion here, not a reassurance."
    },
    {
     "h": "The 24-hour rule",
     "t": "NICE CG109: refer within 24 hours for specialist cardiovascular assessment anyone with TLoC and any of: an ECG abnormality, heart failure, TLoC during exertion, a family history of sudden cardiac death under 40 and/or an inherited cardiac condition, new or unexplained breathlessness, or a heart murmur. Deniz meets at least two criteria. NICE QS71 sets the same 24-hour standard."
    },
    {
     "h": "ECG for everyone",
     "t": "NICE CG109: record a 12-lead ECG for everyone with TLoC. Look for QT prolongation, a Brugada pattern, pre-excitation, left ventricular hypertrophy or abnormal T waves. A normal ECG does not remove the need for the 24-hour referral when exertional syncope or the family history is present."
    },
    {
     "h": "What it could be",
     "t": "Inherited conditions that cause exertional collapse and sudden death in young athletes include hypertrophic cardiomyopathy, arrhythmogenic cardiomyopathy, long QT syndrome, catecholaminergic polymorphic VT and Brugada syndrome. An uncle with a pacemaker at a young age raises the possibility of inherited conduction disease."
    },
    {
     "h": "Stop the trigger",
     "t": "Until specialist assessment, advise no competitive sport or high-intensity training. Ask relatives and teammates to call 999 and start CPR if he collapses and is unresponsive. The specialist, not the GP, decides return to play."
    },
    {
     "h": "Family and driving",
     "t": "Sudden death of a young relative may prompt family screening through an inherited cardiac conditions service; the specialist decides which relatives to test. Syncope during exertion is not a simple faint, so the DVLA reflex-syncope exemption does not apply: advise him not to drive until assessed, and apply the DVLA standard for the cause found."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Deniz, I’m Dr Lee. Your mum booked this, but I’d like to hear it from you. What’s been going on?",
    "dom": "rto",
    "why": "Addresses the adult patient directly and opens"
   },
   {
    "who": "pt",
    "text": "Honestly, Mum’s overreacting. I went down a couple of times on the pitch, but it was boiling and I hadn’t drunk enough. Happens to loads of lads. I’ve got an academy trial coming up, so I just need you to say I’m fine."
   },
   {
    "who": "dr",
    "text": "I can hear how much the trial matters. I’ll be honest with you whatever I find, because I think that’s what you’d want. Can I ask about the two episodes properly, then tell you what I think and what we do next?",
    "dom": "gs",
    "why": "Acknowledges his goal without promising the outcome and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Go on."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Take me through the first one. What were you doing at the exact moment you went down?",
    "dom": "tasks",
    "why": "Establishes whether syncope was during or after exertion"
   },
   {
    "who": "pt",
    "text": "Chasing a ball down the wing, flat out. Next thing I’m on the grass with the physio over me."
   },
   {
    "who": "dr",
    "text": "Any warning at all? Feeling hot, sick, vision going grey?",
    "dom": "tasks",
    "why": "Checks for a reflex prodrome"
   },
   {
    "who": "pt",
    "text": "Not really. Just gone."
   },
   {
    "who": "dr",
    "text": "And the second time?",
    "dom": "tasks",
    "why": "Explores the second episode for palpitations"
   },
   {
    "who": "pt",
    "text": "Mid-match again. My heart went mad, like really fast and thumping, then I went down. Came round quickly both times."
   },
   {
    "who": "dr",
    "text": "Any chest pain or breathlessness when you train, any jerking, tongue-biting or confusion afterwards?",
    "dom": "tasks",
    "why": "Screens for structural heart symptoms and seizure features"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. No fits or anything."
   },
   {
    "who": "dr",
    "text": "Has anyone in your family died suddenly or young, or had heart problems or a pacemaker young?",
    "dom": "tasks",
    "why": "Family history of sudden cardiac death and inherited cardiac disease"
   },
   {
    "who": "pt",
    "text": "…My cousin, on Dad’s side. Died in his sleep at 23. A heart thing, nobody really explained. And my uncle’s had a pacemaker since he was young."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Thank you for telling me that. I noticed you paused before you said it. Has your cousin been on your mind with all this?",
    "dom": "rto",
    "why": "Follows the pause to the buried fear"
   },
   {
    "who": "pt",
    "text": "Yeah. Course it has. But I can’t let it be that. Not now. Football’s everything. If a doctor starts poking around, they’ll pull me from the squad."
   },
   {
    "who": "dr",
    "text": "So you’ve been frightened about your heart, and more frightened that finding out will take football away?",
    "dom": "rto",
    "why": "Reflects both fears accurately"
   },
   {
    "who": "pt",
    "text": "Pretty much."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I respect you for being straight with me, so I’ll be straight back. What worries me isn’t that you fainted. It’s when. You went down while running flat out, once with your heart racing first, and with hardly any warning. Collapsing during exercise is the one kind of faint doctors never put down to heat.",
    "dom": "tasks",
    "why": "Refuses the heat reframe and explains exertional syncope"
   },
   {
    "who": "pt",
    "text": "It could still be the heat though."
   },
   {
    "who": "dr",
    "text": "It could, and I hope it is. But put together with your cousin and your uncle, it could be a heart rhythm condition that runs in families. They often show up exactly like this in fit young players. If that’s what it is, the next sprint could stop your heart. So I can’t sign you off today, and I don’t think you’d really want me to.",
    "dom": "tasks",
    "why": "Weights the family history and holds the professional line honestly"
   },
   {
    "who": "pt",
    "text": "So that’s it. Career over."
   },
   {
    "who": "dr",
    "text": "No. This is how you protect it. Many of these conditions can be treated, and some players get back to sport after specialist assessment. A heart that’s checked has a future in football. One that’s ignored may not get the chance.",
    "dom": "rto",
    "why": "Takes his career seriously and reframes assessment as the route back"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s the plan. I’d like you to come in today for a heart tracing. And I’m referring you to the heart specialists to be seen within 24 hours, for a scan of your heart and rhythm tests. Can you get here this afternoon?",
    "dom": "tasks",
    "why": "Same-day ECG and specialist cardiovascular assessment within 24 hours (NICE CG109)"
   },
   {
    "who": "pt",
    "text": "Yeah, I can get a lift."
   },
   {
    "who": "dr",
    "text": "Good, and a lift is right: please don’t drive until you’ve been seen. Until the specialist clears you, no matches and no flat-out training. I know that’s the hardest thing I could say. What would help with the club?",
    "dom": "rto",
    "why": "Clear activity and driving advice, then invites his priorities"
   },
   {
    "who": "pt",
    "text": "If I just go missing they’ll think I’m not bothered."
   },
   {
    "who": "dr",
    "text": "Nothing goes to the club without your say-so; you’re 19 and it’s your information. If you want, I can write a letter saying you’re under urgent medical assessment and can’t play for now, without details. A proper medical reason, handled well, isn’t the end of a career.",
    "dom": "gs",
    "why": "Respects confidentiality and offers practical help with the trial"
   },
   {
    "who": "pt",
    "text": "Yeah. That would help."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you collapse again, or get chest pain or your heart racing that doesn’t settle, anyone with you calls 999 straight away and starts CPR if you’re not responding. Please tell your mum and your teammates that. I’ll chase the appointment myself and ring you tomorrow.",
    "dom": "gs",
    "why": "Emphatic safety-net including bystander CPR and GP follow-up"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "Would you like me to speak to your mum as well, or would you rather tell her yourself? And when you do, what will you tell her?",
    "dom": "rto",
    "why": "Consent for family involvement and teach-back"
   },
   {
    "who": "pt",
    "text": "I’ll tell her. Heart test today, specialist tomorrow, no football till they say so, and if I go down again she rings 999. She’ll be relieved someone listened."
   },
   {
    "who": "dr",
    "text": "Exactly. You wanted me to say you’re fine. I’m trying to make sure you get to be.",
    "dom": "rto",
    "why": "Closes by linking the plan to his goal"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Addressed the 19-year-old directly; heard the request for sign-off without agreeing to it.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Football as identity and income, imminent academy trial, mother’s involvement, driving.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the pause before the family history and ‘they’ll pull me from the squad’, and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (heat and dehydration), concern (losing football, and the buried fear about his cousin), expectation (to be signed off today).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "12-lead ECG today; cardiovascular examination at the same visit; echo, exercise and rhythm testing via the specialist.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Inherited arrhythmia or cardiomyopathy vs reflex syncope vs seizure; timing, prodrome and palpitations used to discriminate.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Recognised exertional syncope, palpitations before collapse and family history of sudden death under 40 as NICE CG109 red flags.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Exertional syncope with suspected inherited cardiac condition, explained in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Specialist cardiovascular assessment within 24 hours; no competitive sport or high-intensity training; no driving until assessed; no false clearance.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Club letter with his consent and without clinical detail; family screening implications raised; mother involved as he wishes.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 and bystander CPR if he collapses; GP chases the referral and phones tomorrow.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Deniz Aydin",
    "age": "19 years · male",
    "pmh": [
     "Nil significant",
     "Semi-professional footballer"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Two witnessed collapses during matches last season, attributed to heat. No ECG on file. Booked by mother.",
    "reason": "“I need you to say I’m fine to play.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and set expectations",
     "d": "He wants sign-off. Acknowledge the trial, promise honesty, and agree to take the history first."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "During or after exertion? Prodrome? Palpitations? Chest pain, breathlessness, seizure features. Family history of sudden death, pacemakers, inherited heart disease."
    },
    {
     "t": "4–6",
     "h": "ICE and the buried fear",
     "d": "The cousin at 23. The fear that investigation ends his career."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Exertional syncope is a red flag. No sign-off. ECG today, specialist within 24 hours, no competitive or high-intensity sport, no driving. Club letter with consent."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 and CPR if he collapses; GP chases the referral. Teach-back on what he will tell his mum."
    }
   ],
   "wordPics": {
    "fail": "Accepts heat and dehydration; signs him off or says “see how you go”; misses the family history; routine cardiology referral with no timescale; no advice to stop sport.",
    "pass": "Recognises exertional syncope and the family history as red flags; declines to clear him; arranges an ECG and urgent cardiology referral; advises stopping competitive sport; basic safety-net.",
    "exc": "All of the above, plus: specialist assessment within 24 hours per NICE CG109; reaches the fear about his cousin; frames assessment as protecting his career; offers a confidential club letter with consent; driving advice; bystander CPR message; teach-back."
   },
   "avoid": [
    {
     "dont": "“It was probably the heat. Drink more and see how you get on.”",
     "instead": "“The worry isn’t that you fainted, it’s when: during flat-out running. Doctors never put that down to heat.”",
     "why": "Accepting the reframe for exertional syncope is a potentially fatal error."
    },
    {
     "dont": "“I can’t stop you playing, it’s your choice.”",
     "instead": "“Until the specialist has seen you, no matches and no flat-out training. The next sprint could be the dangerous one.”",
     "why": "Clear advice is required; vague neutrality leaves him at risk."
    },
    {
     "dont": "“I’ll let the club know you need tests.”",
     "instead": "“Nothing goes to the club without your say-so. If you want, I’ll write a letter without details.”",
     "why": "Disclosure without consent breaches confidentiality and loses his trust."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Identity and income",
     "t": "Football is his identity, his route forward and possibly his income. Losing the trial feels like losing everything, which drives the minimising."
    },
    {
     "h": "Family",
     "t": "His mother booked the appointment. A cousin’s death and an uncle’s pacemaker on his father’s side mean the wider family may be affected; the specialist service advises on who to screen."
    }
   ],
   "legal": [
    {
     "h": "DVLA",
     "t": "Exertional syncope is not a simple faint, so the reflex-syncope exemption does not apply. Advise no driving until specialist assessment, then apply the DVLA standard for the cause found (DVLA Assessing fitness to drive, updated September 2025)."
    },
    {
     "h": "Confidentiality",
     "t": "At 19 he is an adult. Share information with his mother or club only with his consent (GMC Confidentiality 2017). A letter to the club can confirm medical unfitness to play without giving clinical details."
    }
   ],
   "professional": [
    {
     "h": "No false clearance",
     "t": "Signing him fit to play under pressure would be unsafe and dishonest (GMC Good Medical Practice 2024). Document the history, the advice given and his understanding."
    },
    {
     "h": "Fit note",
     "t": "If he is paid to play, a fit note can state he is not fit for sport pending cardiology assessment."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Cardiac Risk in the Young (CRY) supports families after young sudden cardiac death; Arrhythmia Alliance for patient information; encourage family and teammates to learn CPR."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Syncope during exertion, little or no prodrome, palpitations immediately before collapse",
     "Family history of sudden cardiac death under 40 or inherited cardiac condition; young relative with a pacemaker",
     "Any of these with TLoC: specialist cardiovascular assessment within 24 hours (NICE CG109)"
    ],
    "psychosocial": [
     "Football as identity and income; imminent academy trial",
     "Mother’s involvement and his autonomy at 19",
     "Buried fear after his cousin’s death"
    ],
    "ice": [
     "Idea: “It was the heat and I hadn’t drunk enough.”",
     "Concern: investigation will end his career; underneath, it might be what killed his cousin",
     "Expectation: to be signed off fit to play today"
    ]
   },
   "diagnosis": "Recurrent exertional syncope, one episode preceded by palpitations, with a family history of sudden unexplained death at 23 and a young relative with a pacemaker: suspected inherited arrhythmia or cardiomyopathy until proven otherwise.",
   "diagnosisLay": "“Fainting while you’re sprinting, with your heart racing first, can mean the heart’s rhythm is going wrong under strain. With what happened to your cousin, we need to check whether you have a heart condition that runs in families. Many can be treated, but only once we know.”",
   "management": {
    "reflectIce": "“You’ve been scared this is what happened to your cousin, and more scared that finding out ends football. Getting checked is how you protect both your life and your career.”",
    "psychosocial": "Confidential club letter with consent; involve his mother as he chooses; acknowledge the loss of the trial and offer follow-up support.",
    "sharedPlan": [
     "12-lead ECG today; specialist cardiovascular assessment within 24 hours (NICE CG109; NICE QS71)",
     "No competitive sport or high-intensity training until the specialist advises; no driving until assessed",
     "Family screening implications discussed; specialist to advise which relatives are tested"
    ],
    "safetyNet": [
     "999 and bystander CPR if he collapses; 999 for chest pain or sustained palpitations",
     "GP chases the referral and phones tomorrow"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Transient loss of consciousness",
    "s": "Visual algorithm · 24-hour red flags",
    "href": "algorithms/tloc.html"
   },
   {
    "ic": "📋",
    "t": "Blackouts and syncope",
    "s": "Case walkthrough · NICE CG109",
    "href": "../cases/blackouts.html"
   },
   {
    "ic": "🗺️",
    "t": "Palpitations",
    "s": "Visual algorithm · ECG clues",
    "href": "algorithms/palpitations.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA fitness to drive",
    "s": "Syncope rules",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is built around pressure to collude. It is failed by the candidate who accepts the heat story to keep him happy, and by the one who is right but so blunt that he walks away from the plan.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting heat and dehydration and advising fluids.",
     "why": "Exertional syncope is a NICE CG109 red flag; missing it can be fatal.",
     "fix": "Establish timing precisely: “What were you doing at the exact moment you went down?”"
    },
    {
     "dom": "tasks",
     "fail": "Routine cardiology referral with no timescale.",
     "why": "“Management plan not in line with current UK best practice.” NICE CG109 requires specialist cardiovascular assessment within 24 hours.",
     "fix": "ECG today and a referral to be seen within 24 hours, with the GP chasing it."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about family history, or asking only about parents.",
     "why": "The cousin’s sudden death at 23 and the uncle’s pacemaker are decisive and only come out if asked broadly.",
     "fix": "“Has anyone in the family died suddenly or young, or had a pacemaker or heart problem young?”"
    },
    {
     "dom": "rto",
     "fail": "“You can’t play football any more.”",
     "why": "Overstated and crushing; he disengages and plays anyway.",
     "fix": "“No matches until the specialist has seen you. Many of these conditions can be treated, and this is how you protect your career.”"
    },
    {
     "dom": "rto",
     "fail": "Talking to his mother about the plan without asking him.",
     "why": "He is 19; it breaches confidentiality and undermines his autonomy.",
     "fix": "Ask whether he wants his mother involved, and how."
    },
    {
     "dom": "gs",
     "fail": "Safety-netting with “come back if it happens again”.",
     "why": "A further episode may be cardiac arrest; he will not be the one to come back.",
     "fix": "Tell him and those around him: 999 and CPR if he collapses and is unresponsive."
    }
   ]
  }
 },
 "syncope-vasovagal": {
  "stem": {
   "name": "Casey Doyle",
   "age": "24-year-old woman",
   "pmh": [
    "No significant past medical history",
    "Junior nurse"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Three faints in 4 months: giving blood, standing at a hot ward handover, and rising quickly from bed during a viral illness. 12-lead ECG last week: normal. Lying and standing BP in clinic: normal.",
   "reason": "Video consultation about recurrent fainting. Requesting a brain scan."
  },
  "knowledge": {
   "guideline": "NICE CG109 (updated 2023) · ESC syncope guidelines (2018) · DVLA Assessing fitness to drive (updated September 2025) · NICE CG113 · NICE CG123 (withdrawn May 2024)",
   "summary": "Vasovagal syncope is a positive diagnosis made from the history: posture, a provoking factor and a prodrome, with rapid full recovery. With a normal ECG and no red flags she needs no further tests; the health anxiety is the problem to treat.",
   "points": [
    {
     "h": "Make the diagnosis from the story",
     "t": "NICE CG109: diagnose uncomplicated faint when there are no features suggesting another diagnosis and the ‘3 Ps’ are present: posture (prolonged standing, or episodes prevented by lying down), provoking factors (such as pain or a medical procedure) and prodromal symptoms (such as sweating or feeling hot). If there is nothing else to raise clinical or social concern, no further immediate management is needed."
    },
    {
     "h": "Every TLoC needs an ECG",
     "t": "NICE CG109 recommends a 12-lead ECG for everyone with transient loss of consciousness. Hers is normal, which removes a major reason for referral."
    },
    {
     "h": "Red flags to exclude out loud",
     "t": "NICE CG109: refer within 24 hours for specialist cardiovascular assessment if there is an ECG abnormality, heart failure, TLoC during exertion, a family history of sudden cardiac death under 40 or an inherited cardiac condition, new or unexplained breathlessness, or a heart murmur. Seizure pointers include a bitten tongue, head-turning, unusual posturing, prolonged jerking, and confusion afterwards."
    },
    {
     "h": "Why not scan",
     "t": "A typical reflex faint needs no neuroimaging. CG109 advises against routine EEG, and ESC 2018 advises against brain imaging for uncomplicated syncope. An incidental finding would feed the anxiety."
    },
    {
     "h": "Self-management",
     "t": "ESC 2018: education and reassurance, recognising the prodrome, physical counter-pressure manoeuvres (leg crossing, hand grip, arm tensing) and lying down, avoiding triggers, and good fluid and salt intake. Lie down for procedures such as venepuncture."
    },
    {
     "h": "Health anxiety and driving",
     "t": "Checking, reassurance-seeking and avoidance maintain health anxiety. Offer psychoeducation and self-referral to NHS Talking Therapies for CBT (stepped care; NICE CG113 if generalised anxiety; CG123 withdrawn 2024). DVLA (September 2025): typical vasovagal syncope with an avoidable trigger, occurring when standing, lets a Group 1 driver continue without notifying DVLA."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Casey, I’m Dr Lee. Thanks for joining. You look tense. Tell me what’s been happening.",
    "dom": "rto",
    "why": "Notices her distress and opens"
   },
   {
    "who": "pt",
    "text": "I’ve fainted three times and I’ve convinced myself something’s seriously wrong. A brain tumour, or my heart stopping. I’m a nurse, so I know just enough to scare myself. I think I need a brain scan."
   },
   {
    "who": "dr",
    "text": "I can hear how frightened you are, and I want to give you a proper answer, not a brush-off. Can I go through each faint in detail first? That will tell us more than anything else. Then I’ll explain what I think and we’ll talk about the scan.",
    "dom": "gs",
    "why": "Takes the fear seriously and sets an agenda that includes the scan request"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Take me through the first one. Where were you, and what did you feel just before?",
    "dom": "tasks",
    "why": "Episode-by-episode history for the 3 Ps"
   },
   {
    "who": "pt",
    "text": "Giving blood. I went hot and sweaty, felt sick, my vision went grey from the edges, then I was on the floor. I was back with it in seconds."
   },
   {
    "who": "dr",
    "text": "And the other two?",
    "dom": "tasks",
    "why": "Checks the pattern is consistent across episodes"
   },
   {
    "who": "pt",
    "text": "Standing through a long handover on a boiling ward. Same warning. And getting out of bed fast when I had a virus. Same again."
   },
   {
    "who": "dr",
    "text": "Have you ever fainted during exercise, while lying down, or with no warning at all? Any racing or pounding heart before you went?",
    "dom": "tasks",
    "why": "Excludes cardiac red flags"
   },
   {
    "who": "pt",
    "text": "No. Never. Always the hot, sick feeling first."
   },
   {
    "who": "dr",
    "text": "Did anyone see you jerk for a long time, did you bite the side of your tongue, wet yourself, or feel muddled for a long time afterwards?",
    "dom": "tasks",
    "why": "Excludes seizure features"
   },
   {
    "who": "pt",
    "text": "No. Colleagues said I was out for a few seconds and then just embarrassed."
   },
   {
    "who": "dr",
    "text": "Has anyone in your family died suddenly or unexpectedly young, or had a heart condition that runs in families?",
    "dom": "tasks",
    "why": "Family history of sudden cardiac death"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said a brain tumour. What made you think of that in particular?",
    "dom": "rto",
    "why": "Explores the specific fear behind the scan request"
   },
   {
    "who": "pt",
    "text": "There’s a woman on my ward, my age. Her brain tumour started with funny turns. I can’t stop thinking it’s me next."
   },
   {
    "who": "dr",
    "text": "That makes complete sense. You’ve seen how it went for her, and your mind has put you into her story. How has the worry been affecting your life?",
    "dom": "rto",
    "why": "Validates the fear and explores its impact"
   },
   {
    "who": "pt",
    "text": "I’ve stopped driving. I’ve stopped the gym. I check my pulse constantly and I’m awake at three Googling."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I want to give you the answer first, because you’ve been carrying the question at three in the morning. This is a simple faint, called vasovagal syncope. I’m not saying that to be kind. Your story fits it exactly.",
    "dom": "tasks",
    "why": "Confident positive diagnosis"
   },
   {
    "who": "pt",
    "text": "How can you be sure without a scan?"
   },
   {
    "who": "dr",
    "text": "Every faint had a trigger: a needle, standing in heat, getting up fast when unwell. Every one had the warning and a quick recovery. The faints that worry doctors are the opposite: no warning, during exercise, lying down, or a racing heart first. You’ve had none of those, your heart tracing is normal and there’s no sudden death in your family. I looked for the dangerous version and it isn’t there.",
    "dom": "tasks",
    "why": "Shows the reasoning and states the excluded red flags"
   },
   {
    "who": "pt",
    "text": "But the patient on my ward…"
   },
   {
    "who": "dr",
    "text": "Brain tumours don’t cause faints with a warning and a trigger like yours. A scan wouldn’t change the diagnosis, and scans often show small harmless things that would give you something new to worry about. As one clinician to another: your story is the test, and it’s reassuring.",
    "dom": "tasks",
    "why": "Explains why a scan is not indicated without dismissing her"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "For the faints themselves: when the hot, grey feeling starts, get down straight away. Sit or lie, cross your legs and squeeze, or grip your hands together. Drink plenty, don’t skip meals, take a bit more salt, and don’t spring out of bed. Lie down when you give blood.",
    "dom": "tasks",
    "why": "Practical self-management and counter-pressure manoeuvres"
   },
   {
    "who": "pt",
    "text": "And driving? I’ve been too scared."
   },
   {
    "who": "dr",
    "text": "For a simple faint like yours, with a clear trigger and warning when you’re standing, you can drive and you don’t need to tell the DVLA. If you ever felt that warning at the wheel, you’d pull over safely.",
    "dom": "tasks",
    "why": "Accurate DVLA advice for reflex syncope"
   },
   {
    "who": "pt",
    "text": "That’s a relief, actually."
   },
   {
    "who": "dr",
    "text": "The bigger thing, I think, is the worry. The faints are harmless, but the fear has taken your driving, the gym and your sleep. That’s health anxiety. It’s common and very treatable, and the pulse-checking and Googling keep it going. Would you be open to talking therapy? You can refer yourself, and I’d like to see you in a few weeks to see how you are.",
    "dom": "rto",
    "why": "Names the health anxiety and agrees a plan for it"
   },
   {
    "who": "pt",
    "text": "Yes. I think I need that more than a scan, if I’m honest."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "What would change my mind and bring you back quickly: a faint with no warning, during exercise or while lying down, a racing heart before you go, or a faint where you injure yourself. Any of those, contact us the same day.",
    "dom": "gs",
    "why": "Precise safety-net that keeps reassurance safe"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "If a colleague asked you tomorrow what the GP said, what would you tell them?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "That they’re simple faints, the story proves it, I don’t need a scan, and I get down when I feel it coming. And I’m sorting out the anxiety."
   },
   {
    "who": "dr",
    "text": "Perfect. Let’s get your life back.",
    "dom": "gs",
    "why": "Closes with a clear, hopeful message"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; acknowledged the fear and the scan request without agreeing to it or dismissing it.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Nurse on a busy ward; avoidance of driving and the gym; poor sleep; checking and Googling.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I know just enough to scare myself” and the patient ‘her age’, and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (brain tumour or heart stopping), concern (the ward patient’s story), expectation (a brain scan).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Reviewed the normal ECG and lying and standing BP; explained no scan or EEG is indicated (NICE CG109).",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Reflex syncope vs orthostatic vs cardiac arrhythmia vs seizure; tested each with targeted questions.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Exertional, supine and no-warning syncope, palpitations, family history of young sudden death, and seizure features all asked and excluded out loud.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Confident positive diagnosis of vasovagal syncope, with health anxiety named as the main problem.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Counter-pressure manoeuvres, fluids and salt, trigger avoidance; accurate DVLA advice; talking therapy for health anxiety.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Health anxiety, sleep and avoidance addressed; lying down for venepuncture; hydration on long shifts.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named the features that would need same-day review; follow-up booked in a few weeks for the anxiety.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Casey Doyle",
    "age": "24 years · female",
    "pmh": [
     "Nil significant",
     "Occupation: nurse"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Three faints in 4 months (blood donation, hot handover, rising fast when unwell). ECG last week: normal. Lying/standing BP normal.",
    "reason": "Recurrent fainting. “I think I need a brain scan.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and settle",
     "d": "She opens with the scan request and her fear. Acknowledge both and agree to take the history before deciding."
    },
    {
     "t": "1–4",
     "h": "Episode history",
     "d": "Each faint: posture, trigger, prodrome, recovery. Then red flags: exertion, lying down, no warning, palpitations, seizure features, family history."
    },
    {
     "t": "4–6",
     "h": "ICE and impact",
     "d": "The ward patient her age. The avoidance: no driving, no gym, pulse-checking, sleepless nights."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Confident diagnosis with the reasoning shown. Why no scan. Counter-pressure manoeuvres and fluids. DVLA. Name the health anxiety and offer talking therapy."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "What would change the picture. Follow-up booked. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Orders a brain scan to settle her, or says “it’s just a faint” without showing any reasoning; never asks about exertional or supine syncope or family history; ignores the anxiety and the avoidance.",
    "pass": "Makes a clear diagnosis of vasovagal syncope from the history, asks about the red flags, explains why a scan is not needed, gives self-management advice and a safety-net.",
    "exc": "All of the above, plus: states the excluded red flags out loud so the reassurance is credible; finds the ward patient and addresses that fear directly; names the health anxiety and agrees a plan for it; accurate DVLA advice that lets her drive again; teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s just a faint, nothing to worry about.”",
     "instead": "“Here’s why I’m sure: every faint had a trigger and a warning, and none had the features that worry doctors.”",
     "why": "Flat reassurance without reasoning does not land with an anxious clinician."
    },
    {
     "dont": "“I’ll request a scan just to put your mind at rest.”",
     "instead": "“A scan wouldn’t change the diagnosis and might find something harmless that worries you more. Your story is the test.”",
     "why": "Unnecessary investigation reinforces health anxiety and is not in line with guidance."
    },
    {
     "dont": "“You shouldn’t drive until this is sorted.”",
     "instead": "“For a simple faint like yours, you can drive and don’t need to tell the DVLA.”",
     "why": "Incorrect driving advice adds to her avoidance."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Avoidance",
     "t": "Stopped driving and the gym, sleeping badly, checking her pulse. The life shrinking around the fear is the main harm."
    },
    {
     "h": "Work",
     "t": "Long shifts on hot wards without breaks or fluids are triggers. Hydration, eating and sitting when possible help; occupational health can advise if faints at work continue."
    }
   ],
   "legal": [
    {
     "h": "DVLA",
     "t": "DVLA Assessing fitness to drive (updated September 2025): typical vasovagal syncope with an avoidable trigger, occurring when standing, lets a Group 1 driver continue without notifying DVLA. Syncope without warning, while sitting, or while driving needs the relevant DVLA standard."
    }
   ],
   "professional": [
    {
     "h": "Treating a colleague",
     "t": "She is a patient first. Avoid shortcuts because she is a nurse, and give the same full history, explanation and safety-net as for anyone else."
    },
    {
     "h": "Stewardship",
     "t": "Declining a scan that is not indicated is good practice when explained with reasons and alternatives (GMC Good Medical Practice 2024; GMC Decision making and consent 2020). Document the discussion."
    }
   ],
   "community": [
    {
     "h": "Resources",
     "t": "NHS Talking Therapies (self-referral) for health anxiety; STARS (Syncope Trust and Reflex Anoxic Seizures) for patient information on reflex syncope."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Syncope during exertion, while lying down, or with no warning: cardiac cause until proven otherwise",
     "Palpitations before collapse, abnormal ECG, heart murmur, new breathlessness, family history of sudden death under 40: specialist cardiovascular assessment within 24 hours (NICE CG109)",
     "Tongue-biting, prolonged jerking, head-turning or prolonged confusion: consider epilepsy"
    ],
    "psychosocial": [
     "Nurse who ‘knows enough to scare herself’",
     "Avoidance of driving and exercise; poor sleep",
     "Pulse-checking and Googling as maintaining behaviours"
    ],
    "ice": [
     "Idea: a brain tumour or her heart stopping",
     "Concern: a ward patient her age whose tumour started with funny turns",
     "Expectation: a brain scan and to be told she is not dying"
    ]
   },
   "diagnosis": "Recurrent vasovagal (reflex) syncope: typical triggers (venepuncture, prolonged standing in heat, postural during illness), prodrome and rapid recovery, normal ECG and lying and standing BP, no red flags. Significant health anxiety with avoidance.",
   "diagnosisLay": "“A simple faint is your body’s reflex overreacting: your heart slows and blood vessels widen for a moment, so less blood reaches your brain and you go down. Lying flat fixes it, which is why you came round in seconds. It isn’t dangerous and it isn’t a sign of anything in your brain.”",
   "management": {
    "reflectIce": "“You’ve seen what happened to the patient on your ward, and your mind put you in her story. Your faints are a different thing, and I can show you why.”",
    "psychosocial": "Name the health anxiety; self-referral to NHS Talking Therapies; plan to return to driving and the gym; reduce checking and Googling.",
    "sharedPlan": [
     "Confident diagnosis of vasovagal syncope; no scan or further tests (NICE CG109)",
     "Counter-pressure manoeuvres, lying down at the prodrome, fluids and salt, lie down for venepuncture (ESC 2018)",
     "May drive without notifying DVLA (DVLA, September 2025); talking therapy for health anxiety"
    ],
    "safetyNet": [
     "Same-day review for faints with no warning, on exertion, lying down, with palpitations, or with injury",
     "Follow-up in a few weeks for the anxiety"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Vasovagal syncope protocol",
    "s": "Counter-manoeuvres · DVLA · red flags",
    "href": "management/vasovagal-syncope.html"
   },
   {
    "ic": "🗺️",
    "t": "Transient loss of consciousness",
    "s": "Visual algorithm · NICE CG109",
    "href": "algorithms/tloc.html"
   },
   {
    "ic": "📋",
    "t": "Blackouts and syncope",
    "s": "Case walkthrough · 3 Ps",
    "href": "../cases/blackouts.html"
   },
   {
    "ic": "💠",
    "t": "Anxiety disorders protocol",
    "s": "Stepped care · talking therapies",
    "href": "management/anxiety.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA fitness to drive",
    "s": "Syncope rules",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether reassurance can be delivered as a clinical skill. It is failed both by the candidate who orders a scan to calm her and by the one who says “it’s just a faint” and moves on.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Ordering a CT or MRI head to put her mind at rest.",
     "why": "Not indicated for uncomplicated faint (NICE CG109; ESC 2018), and it reinforces health anxiety.",
     "fix": "Explain why the story is the test and what a scan could and could not tell her."
    },
    {
     "dom": "tasks",
     "fail": "Diagnosing vasovagal syncope without asking about exertion, lying down, palpitations or family history.",
     "why": "“Does not gather sufficient information to make a safe assessment.” The reassurance is only safe if the red flags are excluded.",
     "fix": "Ask each red flag and then say out loud which ones you checked."
    },
    {
     "dom": "rto",
     "fail": "“You’re a nurse, you know it’s just a faint.”",
     "why": "Dismissive; it ignores the specific fear and the ward patient.",
     "fix": "Ask what made her think of a tumour, then address that story directly."
    },
    {
     "dom": "tasks",
     "fail": "Telling her not to drive, or to inform the DVLA.",
     "why": "Incorrect: DVLA (September 2025) allows a Group 1 driver with typical vasovagal syncope and an avoidable trigger when standing to drive without notifying.",
     "fix": "Give the correct rule and what would change it."
    },
    {
     "dom": "rto",
     "fail": "Ignoring the anxiety because the faints are benign.",
     "why": "The avoidance and sleeplessness are the real morbidity; leaving them misses her agenda.",
     "fix": "Name health anxiety, explain how checking maintains it, and offer talking therapy and follow-up."
    },
    {
     "dom": "gs",
     "fail": "Safety-netting with “come back if it happens again”.",
     "why": "It will happen again; that advice brings her straight back into the anxiety cycle.",
     "fix": "Name what would change the picture: no warning, exertion, lying down, palpitations, injury."
    }
   ]
  }
 },
 "t2dm-complications": {
  "stem": {
   "name": "Salma Iqbal",
   "age": "57-year-old woman",
   "pmh": [
    "Type 2 diabetes (9 years)",
    "Raised urine ACR — early diabetic kidney disease",
    "Background diabetic retinopathy (recent screening)"
   ],
   "meds": [
    "Metformin",
    "Gliclazide (added last year)",
    "Ramipril",
    "Atorvastatin"
   ],
   "allergy": "No known drug allergies",
   "recent": "Annual review: HbA1c 75 mmol/mol (58 a year ago). Urine ACR raised. BP 150/92 mmHg. Retinal screening: background retinopathy. Results letter sent last week.",
   "reason": "Booked after receiving a letter about “kidney changes” and “changes at the back of the eyes”."
  },
  "knowledge": {
   "guideline": "NICE NG28 (updated February 2026) · NICE NG203 · NICE NG136 · NICE NG238 · NICE CG76 · NHS Diabetic Eye Screening Programme",
   "summary": "Raised ACR and background retinopathy are early, monitored and modifiable. A rise from 58 to 75 mmol/mol means something changed: find out why before adding drugs, then build the kidney and heart protection package.",
   "points": [
    {
     "h": "Read the letter accurately",
     "t": "Background retinopathy is the earliest grade on screening and is monitored, not treated. Raised ACR is the earliest marker of diabetic kidney disease; NICE NG203 recommends confirming an ACR between 3 and 70 mg/mmol with an early-morning sample and checking eGFR. Neither means dialysis or blindness is coming."
    },
    {
     "h": "Why did control slip?",
     "t": "About a third to a half of medicines prescribed for long-term conditions are not taken as recommended (NICE CG76). Ask permissively about side effects and missed doses before intensifying. Metformin gastrointestinal intolerance is common; modified-release metformin is the NICE NG28 option."
    },
    {
     "h": "SGLT2 inhibitor",
     "t": "NICE NG28 (updated February 2026): offer an SGLT2 inhibitor to adults with type 2 diabetes and CKD on the highest tolerated ACE inhibitor or ARB if ACR is over 30 mg/mmol, and consider it if ACR is 3–30 mg/mmol; the February 2026 update also recommends an SGLT2 inhibitor alongside metformin for most adults. Check eGFR thresholds in the BNF."
    },
    {
     "h": "Blood pressure and ACE inhibitor",
     "t": "Titrate ramipril to the highest tolerated dose (per BNF). NICE NG203 targets: clinic BP below 140/90 (systolic 120–139); if ACR is 70 mg/mmol or more, systolic below 130 (120–129) and diastolic below 80. Check U&E and potassium before and 1–2 weeks after each dose increase."
    },
    {
     "h": "Lipids and glucose",
     "t": "Continue atorvastatin (NICE NG238). Individualise the HbA1c target; on gliclazide, warn about hypoglycaemia and the DVLA requirement to monitor glucose at times relevant to driving. Review metformin dose if eGFR falls below 45 and stop below 30 (BNF)."
    },
    {
     "h": "Surveillance",
     "t": "Continue annual retinal screening; report any change in vision promptly. ACR, eGFR and potassium monitoring frequency set by CKD stage (NICE NG203)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Iqbal, I’m Dr Lee. I can see you’re upset, and I know the letter is why you’ve come. Would you tell me what you took from it?",
    "dom": "rto",
    "why": "Opens with her understanding and names the distress"
   },
   {
    "who": "pt",
    "text": "It says my kidneys are being affected and my eyes. So it’s started. My aunt was on dialysis three times a week until she died. I’ve done everything you tell me and it’s happening anyway. What’s even the point?"
   },
   {
    "who": "dr",
    "text": "Thank you for telling me straight away. I want to go through what the letter actually means, because I don’t think it means what you fear. Then I’d like to understand how things have been for you this year, and make a plan together. Is that okay?",
    "dom": "gs",
    "why": "Signals a different reading of the letter and sets an agenda"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about your aunt — what happened to her?",
    "dom": "rto",
    "why": "Explores the source of the catastrophic interpretation"
   },
   {
    "who": "pt",
    "text": "Diabetes for years. Kidneys failed. Dialysis, then she went blind in one eye. She died at 66."
   },
   {
    "who": "dr",
    "text": "I’m sorry. That would frighten anyone reading ‘kidneys’ and ‘eyes’ in a letter. Have you noticed any problems with your vision, any swelling of your ankles, or passing urine differently?",
    "dom": "tasks",
    "why": "Screens for symptomatic complications"
   },
   {
    "who": "pt",
    "text": "No. My eyes are fine. Nothing like that."
   },
   {
    "who": "dr",
    "text": "Your sugar test went up quite a bit this year, from 58 to 75. That usually means something changed. Lots of people find tablets hard to take or get side effects they don’t mention. No judgement at all — how have you really been getting on with them?",
    "dom": "tasks",
    "why": "Explores adherence permissively, prompted by the HbA1c rise"
   },
   {
    "who": "pt",
    "text": "(Long pause.) I stopped the metformin. About eight months ago. It gave me terrible diarrhoea, all the time. I was too embarrassed to say. I didn’t want to be a nuisance."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me that. Really. Diarrhoea with metformin is miserable and very common, and stopping it is a completely human thing to do. If anything, we should have asked you sooner. You’re not in trouble.",
    "dom": "rto",
    "why": "Receives the disclosure warmly and removes blame"
   },
   {
    "who": "pt",
    "text": "I thought you’d be cross. I thought this was my punishment."
   },
   {
    "who": "dr",
    "text": "Are you taking the others — the gliclazide, ramipril and the cholesterol tablet? And any low sugar episodes, shaky or sweaty spells?",
    "dom": "tasks",
    "why": "Completes the medication and hypoglycaemia history"
   },
   {
    "who": "pt",
    "text": "Those I take. No shaky spells."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said ‘punishment’. What else has been going through your mind since the letter?",
    "dom": "rto",
    "why": "Follows the shame cue"
   },
   {
    "who": "pt",
    "text": "That I’ve done this to myself. That I’ll end up like her. I haven’t slept. I haven’t told anyone at home about the tablets."
   },
   {
    "who": "dr",
    "text": "That’s a lot to be carrying alone. What were you hoping I’d say today?",
    "dom": "rto",
    "why": "Elicits her expectation"
   },
   {
    "who": "pt",
    "text": "I don’t know. Whether I’m going blind. Whether it’s too late."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Then let me answer that. ‘Background retinopathy’ is the very earliest change the eye screening can see. It doesn’t affect your vision and it isn’t treated — it’s watched. The kidney result is a small leak of protein in the urine, the earliest sign we can measure. Your aunt had the end of the road. You’re at the very beginning, with time to change it.",
    "dom": "tasks",
    "why": "Accurately reframes early complications"
   },
   {
    "who": "pt",
    "text": "So I’m not going blind?"
   },
   {
    "who": "dr",
    "text": "Not from this, and the aim now is to keep it that way. And here’s the hopeful part: a big chunk of this year’s rise is the missing tablet, not your body giving up. That’s fixable.",
    "dom": "tasks",
    "why": "Links the HbA1c rise to the stopped drug and restores agency"
   },
   {
    "who": "pt",
    "text": "That’s… actually a relief."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what I’d suggest. There’s a slow-release metformin that is much gentler on the stomach — we’d start low and build up. And a newer tablet, an SGLT2 inhibitor, which protects the kidneys and heart as well as lowering sugar. Given the letter, that’s the one I most want you on.",
    "dom": "tasks",
    "why": "Side-effect-aware plan: MR metformin and SGLT2 inhibitor per NICE NG28"
   },
   {
    "who": "pt",
    "text": "Will it upset my stomach?"
   },
   {
    "who": "dr",
    "text": "Not usually. It can cause thrush, so keep things clean and tell me if it happens. If you’re ever unwell with vomiting or can’t keep fluids down, stop it for a day or two and ring us. The blood pressure is also higher than we want, and it guards both kidneys and eyes, so I’d like to increase the ramipril and check your kidney blood test one to two weeks after.",
    "dom": "tasks",
    "why": "SGLT2 counselling, ramipril titration and U&E monitoring per NICE NG203"
   },
   {
    "who": "pt",
    "text": "Okay. That makes sense."
   },
   {
    "who": "dr",
    "text": "I’d also like a repeat early-morning urine sample to confirm the kidney result. And if anything doesn’t agree with you, I want you to tell me — you won’t be a nuisance. Deal?",
    "dom": "rto",
    "why": "Confirms the ACR and rebuilds the partnership for honest reporting"
   },
   {
    "who": "pt",
    "text": "Deal."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If your vision changes suddenly — blurring, a shadow, or lots of new floaters — ring us that day. With the gliclazide, if you ever feel shaky, sweaty or confused, have something sugary. I’ll see you in four weeks with the bloods and your blood pressure, and see how the new tablets are going.",
    "dom": "gs",
    "why": "Specific safety-net for eyes, hypoglycaemia and a dated review"
   },
   {
    "who": "pt",
    "text": "Four weeks. Thank you, doctor. I thought I was coming to hear the end."
   },
   {
    "who": "dr",
    "text": "When you tell your family about today, what will you say?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "That it’s early. That I stopped a tablet and it’s not my fault, there’s a gentler one and one that protects my kidneys. Blood pressure tablet going up, blood test in two weeks, back in four. And I’ll tell them about the metformin."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Opened with what she took from the letter; acknowledged distress before any numbers.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Aunt’s dialysis and death; shame about the stopped tablet; not sleeping; family unaware; fear of being “a nuisance”.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Followed “what’s the point”, “I’ve done everything” and “punishment”, and the HbA1c jump from 58 to 75.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (complications have started and are unstoppable), concerns (dialysis, blindness, being blamed), expectation (to hear whether it is too late).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Repeat early-morning ACR and eGFR (NICE NG203); U&E and potassium 1–2 weeks after ramipril increase; BP recheck; annual retinal screening continued.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Adherence vs disease progression vs intercurrent illness as the reason for the HbA1c rise; diabetic kidney disease vs other causes of albuminuria.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about visual symptoms, oedema and urinary change; hypoglycaemia on gliclazide; sudden visual change safety-netted.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated: early diabetic kidney disease and background retinopathy, with worsening control mainly from stopped metformin.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "MR metformin reintroduced slowly; SGLT2 inhibitor for kidney and heart protection (NICE NG28); ramipril titrated to BP target (NICE NG203); statin continued.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Hypoglycaemia advice with gliclazide; SGLT2 inhibitor sick-day and thrush counselling; metformin dose by eGFR.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Sudden visual change and hypoglycaemia advice; bloods at 1–2 weeks; review in 4 weeks; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Investigations & results"
   ],
   "stem": {
    "name": "Salma Iqbal",
    "age": "57 years · female",
    "pmh": [
     "T2DM (9 yrs)",
     "Raised urine ACR",
     "Background retinopathy (screening)"
    ],
    "meds": [
     "Metformin",
     "Gliclazide",
     "Ramipril",
     "Atorvastatin"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Annual review: HbA1c 75 (58 last year). ACR raised. BP 150/92. Retinal screening: background retinopathy. Repeats (including metformin) collected as usual.",
    "reason": "Video consultation after results letter. Reception note: “very upset about her kidneys”."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and hear",
     "d": "She opens with “it’s started… what’s the point?”. Let her finish, then promise to explain what the letter really means."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Aunt’s story, visual and renal symptoms, then a permissive adherence question prompted by the HbA1c rise. The metformin disclosure comes here if you make it safe."
    },
    {
     "t": "4–6",
     "h": "ICE and shame",
     "d": "“Punishment”, sleeplessness, family not told. Ask what she hoped to hear."
    },
    {
     "t": "6–10",
     "h": "Reframe and plan",
     "d": "Early grades explained; the missing tablet as good news; MR metformin, SGLT2 inhibitor, ramipril titration, repeat ACR."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Sudden visual change, hypoglycaemia, sick-day advice; bloods in 1–2 weeks; review in 4 weeks; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Starts with a medication review and adds a drug without asking why control slipped; confirms her fear by listing complications; or reacts to the metformin disclosure with disappointment; no follow-up plan.",
    "pass": "Explains that the findings are early, explores adherence and finds the stopped metformin, starts an appropriate plan including kidney protection and BP control, and arranges bloods and review.",
    "exc": "All of the above, plus: treats the despair first; receives the confession warmly and takes shared responsibility; reframes the stopped tablet as fixable good news; explains each drug as protection; she leaves hopeful and willing to be honest next time."
   },
   "avoid": [
    {
     "dont": "“Your sugars are very high — why haven’t you been taking your metformin?”",
     "instead": "“Lots of people get side effects they don’t mention. How have you really been getting on with the tablets?”",
     "why": "Accusation guarantees concealment; a permissive question opens the disclosure."
    },
    {
     "dont": "“If we don’t get this under control, you could end up on dialysis.”",
     "instead": "“This is the earliest change we can measure — the opposite end from your aunt.”",
     "why": "Fear feeds her hopelessness and disengagement."
    },
    {
     "dont": "“I’ll add another tablet to bring your sugar down.”",
     "instead": "“Most of this rise is the missing tablet. Let’s find one that suits you, and one that protects your kidneys.”",
     "why": "Intensifying without finding the cause misses the real problem."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Shame and concealment",
     "t": "She has been collecting prescriptions she does not take and hiding it from clinicians and her family. Removing blame is the treatment that makes every other treatment work."
    },
    {
     "h": "Culture and faith",
     "t": "Ask, don’t assume, about diet, family expectations and fasting (for example during Ramadan). Fasting changes hypoglycaemia risk with gliclazide and dehydration risk with SGLT2 inhibitors, and needs planning ahead if relevant."
    }
   ],
   "legal": [
    {
     "h": "DVLA",
     "t": "Group 1 drivers on a sulfonylurea do not normally need to notify the DVLA, but must monitor glucose at times relevant to driving and must notify if they have severe hypoglycaemia as defined by the DVLA. Background retinopathy does not affect driving unless visual acuity or fields are affected."
    },
    {
     "h": "Free prescriptions",
     "t": "In England, diabetes treated with medication qualifies for a medical exemption certificate — worth checking she has one."
    }
   ],
   "professional": [
    {
     "h": "Shared responsibility and candour",
     "t": "GMC Good Medical Practice (2024): be open and honest. Acknowledging that the practice did not ask about side effects supports trust. Update the record and stop issuing medicines she is not taking."
    },
    {
     "h": "Medicines adherence",
     "t": "NICE CG76: non-adherence is common and often intentional; explore beliefs and side effects without blame, and agree the plan with the patient."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Community pharmacy New Medicine Service when the SGLT2 inhibitor starts; Diabetes UK and Kidney Care UK for plain-language information; structured education refresher; NHS Diabetic Eye Screening Programme for annual review."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Sudden visual loss, new shadow or shower of floaters — same-day ophthalmology assessment",
     "Falling eGFR, rising potassium or ACR 70 mg/mmol or more — review and consider nephrology referral (NICE NG203)",
     "Hopelessness with low mood — screen for depression; ask about self-harm if indicated"
    ],
    "psychosocial": [
     "Aunt’s dialysis and death shaping her reading of the letter",
     "Shame and fear of being “a nuisance”; family unaware",
     "Sleeplessness since the letter"
    ],
    "ice": [
     "Idea: “It’s started — it’s working its way in, and nothing I do matters.”",
     "Concern: dialysis and blindness like her aunt; being blamed for stopping metformin",
     "Expectation: to find out if it’s too late — and not to be told off"
    ]
   },
   "diagnosis": "Type 2 diabetes with early diabetic kidney disease (raised ACR, to be confirmed) and background retinopathy; deteriorating glycaemic control (HbA1c 58 to 75 mmol/mol) mainly due to metformin stopped for gastrointestinal side effects; BP above target.",
   "diagnosisLay": "“The letter shows the very earliest changes — a tiny leak of protein from the kidneys and early marks at the back of the eye that don’t affect your sight. These are warning lights, not damage. And most of this year’s rise in sugar is the tablet that upset your stomach, which we can fix.”",
   "management": {
    "reflectIce": "“You thought this was the start of your aunt’s road, and a punishment. It’s neither. It’s early, and you’ve just told me the missing piece.”",
    "psychosocial": "Blame-free adherence conversation; invite her to be honest about side effects; support telling her family; check mood and sleep at review.",
    "sharedPlan": [
     "MR metformin reintroduced at a low dose; SGLT2 inhibitor for kidney and heart protection (NICE NG28)",
     "Ramipril titrated to the NICE NG203 BP target; U&E and potassium 1–2 weeks after; repeat early-morning ACR and eGFR",
     "Atorvastatin continued; annual retinal screening; individualised HbA1c target"
    ],
    "safetyNet": [
     "Sudden visual change — same-day contact; hypoglycaemia symptoms — treat and report",
     "Stop the SGLT2 inhibitor if vomiting or dehydrated; review in 4 weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Type 2 diabetes",
    "s": "Case walkthrough · NICE NG28",
    "href": "../cases/type-2-diabetes.html"
   },
   {
    "ic": "📋",
    "t": "Chronic kidney disease",
    "s": "Case walkthrough · NICE NG203",
    "href": "../cases/ckd.html"
   },
   {
    "ic": "💠",
    "t": "CKD protocol",
    "s": "ACEi · SGLT2 inhibitors · BP targets",
    "href": "management/ckd.html"
   },
   {
    "ic": "🗺️",
    "t": "Proteinuria",
    "s": "Visual algorithm · ACR",
    "href": "algorithms/proteinuria.html"
   },
   {
    "ic": "💠",
    "t": "Type 2 diabetes protocol",
    "s": "Drug choice · intolerance · monitoring",
    "href": "management/type-2-diabetes.html"
   }
  ],
  "pitfalls": {
   "intro": "This station hides its key fact in a blood result: an HbA1c that jumped. Candidates who explore why find the stopped metformin; candidates who don’t just add another drug and miss the patient.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Adding a new drug to “bring the HbA1c down” without asking why it rose.",
     "why": "“Does not gather sufficient information.” A sudden rise signals a change; here it is a stopped medicine.",
     "fix": "Ask permissively: “Lots of people get side effects they don’t mention — how have you really been getting on?”"
    },
    {
     "dom": "rto",
     "fail": "Responding to the disclosure with “you really should have told us”.",
     "why": "“Does not respond appropriately to the patient’s emotions.” Shame ensures she will conceal again.",
     "fix": "Thank her, normalise it, take shared responsibility: “We should have asked sooner.”"
    },
    {
     "dom": "tasks",
     "fail": "Leaving her thinking retinopathy and kidney changes mean blindness and dialysis.",
     "why": "Inaccurate framing drives hopelessness and disengagement.",
     "fix": "Explain the earliest grades plainly and contrast them with her aunt’s end-stage disease."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting renal protection: no SGLT2 inhibitor, no ACE inhibitor titration, no BP target.",
     "why": "“Management plan not in line with current UK best practice.” NICE NG28 and NG203 set out the kidney protection package.",
     "fix": "SGLT2 inhibitor, ramipril to highest tolerated dose, BP target, U&E at 1–2 weeks, repeat ACR."
    },
    {
     "dom": "gs",
     "fail": "Medical terms: microalbuminuria, NPDR, eGFR, SGLT2.",
     "why": "“Language not easily understood by the patient.”",
     "fix": "“A tiny protein leak”, “earliest marks at the back of the eye”, “a tablet that protects the kidneys”."
    },
    {
     "dom": "gs",
     "fail": "No dated follow-up and no invitation to report side effects.",
     "why": "She stopped a drug silently once; without explicit permission she will again.",
     "fix": "Book bloods and review, and say: “If anything doesn’t agree with you, tell me — you’re not a nuisance.”"
    }
   ]
  }
 },
 "t2dm-foot": {
  "stem": {
   "name": "Derek Hollis",
   "age": "63-year-old man",
   "pmh": [
    "Type 2 diabetes (11 years)",
    "Gout",
    "Peripheral neuropathy (reduced monofilament sensation at last foot check)",
    "Carer for his wife (advanced multiple sclerosis)"
   ],
   "meds": [
    "Metformin",
    "Gliclazide",
    "Allopurinol",
    "Atorvastatin"
   ],
   "allergy": "No known drug allergies",
   "recent": "Last HbA1c 74 mmol/mol. Previous gout flare treated with colchicine. Foot check last year: neuropathy, foot risk raised.",
   "reason": "Telephone request for colchicine: “gout’s back in my foot”."
  },
  "knowledge": {
   "guideline": "NICE NG19 · NICE NG141 · NICE NG219 · NICE NG253 · Care Act 2014",
   "summary": "A red, hot, swollen foot in a person with diabetes and neuropathy is a diabetic foot problem until proven otherwise. With a possible break in the skin and systemic upset, NICE NG19 calls for immediate referral to acute services, not a remote gout prescription.",
   "points": [
    {
     "h": "Diabetic foot urgency",
     "t": "NICE NG19: refer immediately to acute services, and inform the multidisciplinary foot care service, for a limb- or life-threatening problem — for example ulceration with fever or any signs of sepsis, ulceration with limb ischaemia, suspected deep soft tissue or bone infection, or gangrene. Other active foot problems, including suspected Charcot foot, go to the multidisciplinary service within 1 working day."
    },
    {
     "h": "Differential",
     "t": "Cellulitis or diabetic foot infection from an unseen ulcer, osteomyelitis, septic arthritis, Charcot foot and gout. NICE NG219: consider septic arthritis in a hot swollen joint, especially if unwell. The foot has to be seen."
    },
    {
     "h": "Neuropathy hides severity",
     "t": "Reduced protective sensation means a serious infection or ulcer may hurt less than expected. “Not as painful as usual” is not reassurance in a neuropathic foot. Ask about skin breaks he cannot see or feel, and barefoot walking."
    },
    {
     "h": "Sepsis",
     "t": "NICE NG253 (16 and over): shivering, feeling very unwell, new confusion, breathlessness or mottled skin need face-to-face assessment and escalation. By phone, any high-risk feature means 999."
    },
    {
     "h": "Glucose and medicines",
     "t": "Infection drives hyperglycaemia; ask for a capillary glucose if he can check it. If he becomes dehydrated or is vomiting, sick-day rules apply to metformin; gliclazide can cause hypoglycaemia if he stops eating. Do not start colchicine unseen; with atorvastatin, the BNF advises caution because of myotoxicity."
    },
    {
     "h": "The carer barrier",
     "t": "Sole carers minimise their own emergencies. Solving cover for the dependant — family, neighbour, adult social care emergency or respite support — is part of the clinical plan. Under the Care Act 2014 he is entitled to a carer’s assessment."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Hollis, it’s Dr Lee from the surgery. I’ve got your message about the colchicine. Is now a good time to talk for a few minutes?",
    "dom": "rto",
    "why": "Checks it is a safe time to talk on a telephone consultation"
   },
   {
    "who": "pt",
    "text": "Yes, but I don’t want to take up your time. Gout’s back, big toe area. Colchicine sorted it last time. If you pop a script through, the neighbour will fetch it. I can’t really come in — I’ve got Sheila to see to."
   },
   {
    "who": "dr",
    "text": "I will be quick, I promise, and I’ve heard that Sheila needs you. Before I prescribe anything I need to understand the foot properly, because with diabetes a hot foot isn’t always gout. Then we’ll make a plan that works for both of you. All right?",
    "dom": "gs",
    "why": "Sets an agenda that respects his constraint without accepting his diagnosis"
   },
   {
    "who": "pt",
    "text": "Fair enough."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Describe the foot for me. Where exactly is the redness and swelling, and how long has it been going on?",
    "dom": "tasks",
    "why": "Open, specific description of the foot"
   },
   {
    "who": "pt",
    "text": "Three days. The toe and a fair bit of the front of the foot. Hot and puffy. It’s not as sore as the gout usually is, to be fair."
   },
   {
    "who": "dr",
    "text": "That’s important. Is there any break in the skin — a blister, a graze, anything underneath, any fluid or smell?",
    "dom": "tasks",
    "why": "Looks for an ulcer or portal of infection"
   },
   {
    "who": "pt",
    "text": "There’s a bit of wet on the sock. Could be a blister underneath. I can’t really see under there."
   },
   {
    "who": "dr",
    "text": "Do you walk barefoot at home at all? And do you remember knocking it or standing on anything?",
    "dom": "tasks",
    "why": "Explores mechanism of an unnoticed injury"
   },
   {
    "who": "pt",
    "text": "Barefoot round the house, yes. Don’t remember anything."
   },
   {
    "who": "dr",
    "text": "How are you in yourself? Any fever, shivering, sweats, feeling muddled? Have you checked your sugars?",
    "dom": "tasks",
    "why": "Screens for sepsis and hyperglycaemia"
   },
   {
    "who": "pt",
    "text": "Shivery last night, a bit run down. I haven’t checked the sugars, they’ve been all over anyway."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Thank you. You said you can’t come in because of Sheila. Tell me about her and what a normal day looks like for you.",
    "dom": "rto",
    "why": "Follows the carer cue"
   },
   {
    "who": "pt",
    "text": "MS. She can’t be left. I do everything — washing, meals, turning her. There’s nobody else really."
   },
   {
    "who": "dr",
    "text": "That’s an enormous amount to carry on your own. Can I ask what’s been going through your mind about the foot, if you’re honest with yourself?",
    "dom": "rto",
    "why": "Gently explores the buried fear"
   },
   {
    "who": "pt",
    "text": "(Pause.) My brother-in-law lost his leg. Diabetes. I keep telling myself it’s the gout because it has to be."
   },
   {
    "who": "dr",
    "text": "That makes complete sense — it has to be gout, because the other thing would mean hospital and leaving Sheila. And you were hoping for a prescription and no fuss.",
    "dom": "rto",
    "why": "Names the hidden agenda and his expectation without judgement"
   },
   {
    "who": "pt",
    "text": "That’s about it."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’m going to be straight with you. A red, hot, swollen foot in someone with diabetes and numb feet, with some wetness under it and shivers, is not something I can safely call gout over the phone. It could be an infection coming from a sore you can’t see, and those can spread quickly. It needs to be seen today, at the hospital.",
    "dom": "tasks",
    "why": "Recognises a limb-threatening diabetic foot problem and states the plan clearly"
   },
   {
    "who": "pt",
    "text": "Hospital? I can’t. It doesn’t even hurt that much."
   },
   {
    "who": "dr",
    "text": "That’s exactly the worry. The diabetes has dulled the nerves, so a serious problem can feel mild. The shivering tells me your body is fighting something. And about your brother-in-law — feet are lost when these are left. They’re saved when they’re seen early. Going today is how you keep your foot.",
    "dom": "rto",
    "why": "Explains why low pain is falsely reassuring and meets the amputation fear honestly"
   },
   {
    "who": "pt",
    "text": "(Quiet.) Right."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "So let’s solve Sheila first, because that’s the real problem. Who could sit with her for a few hours — the neighbour who was going to fetch the prescription?",
    "dom": "tasks",
    "why": "Treats the caring barrier as a clinical task"
   },
   {
    "who": "pt",
    "text": "Pat might. She’s done an afternoon before."
   },
   {
    "who": "dr",
    "text": "Good. Ring Pat after this. If Pat can’t, I will ring the council’s adult social care team now — they can arrange emergency cover, and if you’re kept in, they’ll make sure Sheila is looked after. I’ll also let her MS nurse know. Is that all right?",
    "dom": "tasks",
    "why": "Arranges emergency carer cover with a fallback"
   },
   {
    "who": "pt",
    "text": "Yes. Thank you. I didn’t know they did that."
   },
   {
    "who": "dr",
    "text": "I’m referring you to the hospital team now, and letting the diabetic foot team know. Please don’t drive yourself — ask Pat or a taxi, or I can help arrange transport. Keep off the foot as much as you can and don’t walk barefoot. If you have a meter, check your sugar before you go and take your tablets and the box with you.",
    "dom": "tasks",
    "why": "Immediate acute referral and MDT notification per NICE NG19, with practical advice"
   },
   {
    "who": "pt",
    "text": "And no colchicine?"
   },
   {
    "who": "dr",
    "text": "Not today. If it does turn out to be gout, the hospital can treat it once they’ve looked. Colchicine also doesn’t always mix well with your cholesterol tablet, so I’d rather they decide.",
    "dom": "tasks",
    "why": "Explains why the requested drug is withheld"
   },
   {
    "who": "pt",
    "text": "Fair enough."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If before you get there you feel much worse — shaking you can’t stop, confused or very drowsy, breathless, or the redness racing up your leg — that’s 999. Tell them Sheila is at home alone so they can help.",
    "dom": "gs",
    "why": "Specific sepsis safety-net, including what to say about the dependant"
   },
   {
    "who": "pt",
    "text": "Right."
   },
   {
    "who": "dr",
    "text": "I’ll ring you at four o’clock to check you’ve got there and Sheila’s covered. Can you tell me the plan back, so I know I’ve explained it well?",
    "dom": "rto",
    "why": "Teach-back and a timed call-back"
   },
   {
    "who": "pt",
    "text": "Ring Pat, you ring the council if she can’t. Hospital today, not driving. Stay off the foot. 999 if I get worse. You ring at four."
   },
   {
    "who": "dr",
    "text": "That’s it exactly. You did the right thing ringing.",
    "dom": "rto",
    "why": "Validates help-seeking and closes warmly"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Acknowledged the request and Sheila, but did not let the call close on a prescription; asked him to describe the foot openly.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Sole carer for a wife with advanced MS, no other help at home, barefoot at home, own health neglected.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Followed “it’s not as sore as usual”, “bit of wet on the sock” and “I’ve got Sheila to see to”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (gout again), concern (leaving Sheila; buried amputation fear after his brother-in-law), expectation (phone script, no visit).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Recognised the foot must be examined today; asked for a capillary glucose; hospital will need bloods, wound swab or tissue sample and imaging for osteomyelitis.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Diabetic foot infection or cellulitis from an unseen ulcer vs osteomyelitis vs septic arthritis vs Charcot foot vs gout.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about skin break, spread, fever, rigors, confusion and glucose; applied NICE NG19 limb-threatening criteria and NICE NG253 sepsis red flags.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated: possible infected diabetic foot with systemic features — not safe to treat as gout by phone.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Immediate referral to acute services with MDT foot team informed (NICE NG19); no colchicine; offloading; transport that does not involve him driving.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Emergency carer cover arranged with a fallback via adult social care; MS nurse informed; sick-day and glucose advice for metformin and gliclazide.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 triggers for sepsis and rapid spread; timed call-back at four o’clock; teach-back confirmed.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Derek Hollis",
    "age": "63 years · male",
    "pmh": [
     "T2DM (11 yrs) — HbA1c 74",
     "Gout",
     "Peripheral neuropathy — high-risk foot",
     "Carer flag: sole carer for wife (MS)"
    ],
    "meds": [
     "Metformin",
     "Gliclazide",
     "Allopurinol",
     "Atorvastatin"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Foot check last year: reduced monofilament sensation both feet. Previous gout flare treated with colchicine.",
    "reason": "Telephone: “Needs colchicine for gout flare, can’t come in.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and hold",
     "d": "He wants a script in 30 seconds. Acknowledge Sheila, then agree to understand the foot first."
    },
    {
     "t": "1–4",
     "h": "Foot and systemic history",
     "d": "Extent of redness, skin break, wetness, barefoot walking, pain lower than usual, shivers, glucose."
    },
    {
     "t": "4–6",
     "h": "ICE and the barrier",
     "d": "Sheila’s care needs, the brother-in-law’s amputation, why it “has to be gout”."
    },
    {
     "t": "6–10",
     "h": "Explain and solve",
     "d": "Why this is not gout by phone; neuropathy hides pain; hospital today. Solve the cover for Sheila first, then the referral and transport."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 triggers, tell the ambulance about Sheila, timed call-back, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Sends colchicine to the pharmacy; never asks about skin breaks or fever; accepts low pain as reassuring; or orders him to hospital without asking who will look after Sheila; no safety-net.",
    "pass": "Declines the remote prescription, identifies a possible diabetic foot infection with systemic features, arranges same-day hospital assessment, asks about Sheila and gives sepsis safety-netting.",
    "exc": "All of the above, plus: explains why neuropathy makes low pain dangerous; names and meets the amputation fear; solves emergency cover for Sheila with a fallback; stops him driving; informs the foot team; books a timed call-back and checks understanding."
   },
   "avoid": [
    {
     "dont": "“It sounds like gout — I’ll send the colchicine to the chemist.”",
     "instead": "“With diabetes and numb feet, a hot swollen foot needs seeing today. I can’t safely call it gout over the phone.”",
     "why": "A remote gout prescription for a possible diabetic foot infection is an unsafe Tasks fail."
    },
    {
     "dont": "“You need to go to A&E now — someone else will have to look after your wife.”",
     "instead": "“Let’s sort Sheila first. Who could sit with her? If no one, I’ll ring social care now.”",
     "why": "Ignoring the barrier means the plan fails; solving it earns Relating and Tasks marks together."
    },
    {
     "dont": "“Good that it’s not too painful.”",
     "instead": "“The diabetes has dulled the nerves, so a serious problem can feel mild. That’s why I’m worried.”",
     "why": "Low pain in a neuropathic foot is a red flag, not reassurance."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Carer strain",
     "t": "Sole carer for a wife with advanced MS, no other help at home. Carers routinely delay their own care; ask what happens to Sheila if he is admitted, and plan for it."
    },
    {
     "h": "Home foot safety",
     "t": "Barefoot walking with neuropathy is a common cause of unnoticed injury. Footwear advice and podiatry follow-up belong in the longer-term plan."
    }
   ],
   "legal": [
    {
     "h": "Care Act 2014",
     "t": "The local authority must assess a carer who appears to have support needs, and assess Sheila’s needs; adult social care can arrange emergency or respite cover when a carer is suddenly unable to care."
    },
    {
     "h": "Capacity and refusal",
     "t": "If he declines hospital despite a clear explanation, he is presumed to have capacity (Mental Capacity Act 2005). Document the risks explained, keep the door open, and offer the safest alternative, such as a same-day face-to-face assessment."
    }
   ],
   "professional": [
    {
     "h": "Remote prescribing",
     "t": "GMC Good practice in prescribing and managing medicines and devices (2021): prescribe remotely only when you have enough information to do so safely. A hot diabetic foot cannot be assessed by phone."
    },
    {
     "h": "Continuity and handover",
     "t": "Inform the multidisciplinary foot service, record the referral and the carer plan, and complete the call-back. Good Medical Practice (2024) expects follow-through on plans you make."
    }
   ],
   "community": [
    {
     "h": "Carer support",
     "t": "Local carers’ centre and Carers UK; carer emergency plan schemes; MS Society and Sheila’s MS specialist nurse; Diabetes UK foot care information; community podiatry after recovery."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Ulcer or skin break with fever or signs of sepsis — immediate referral to acute services (NICE NG19)",
     "Rigors, confusion, breathlessness, mottled skin or rapidly spreading redness — 999 (NICE NG253)",
     "Cold, pale or pulseless foot, or black skin — ischaemia or gangrene, immediate referral"
    ],
    "psychosocial": [
     "Sole carer: who looks after Sheila today, and if he is admitted",
     "Buried fear of amputation after his brother-in-law’s experience",
     "Neglect of his own health; glucose not monitored"
    ],
    "ice": [
     "Idea: “It’s my gout again — colchicine will sort it.”",
     "Concern: leaving Sheila, and that this is “the start of” losing his foot",
     "Expectation: a phone prescription with no visit"
    ]
   },
   "diagnosis": "Suspected diabetic foot infection (possible unseen plantar ulcer with cellulitis) in a neuropathic foot, with systemic features (rigors, malaise) raising concern for sepsis or deep infection. Gout, septic arthritis, osteomyelitis and Charcot foot are in the differential; none can be excluded by phone.",
   "diagnosisLay": "“Your foot might have an infection that started from a sore you can’t feel, because the diabetes has numbed the nerves. That’s why it hurts less than gout. The shivers mean it could be spreading, so it needs seeing today.”",
   "management": {
    "reflectIce": "“You’ve needed this to be gout because the alternative means leaving Sheila. Let’s sort her cover first, then get your foot seen — that’s how you keep your foot.”",
    "psychosocial": "Neighbour or family cover first; if not available, adult social care emergency cover and the MS nurse; plan for Sheila if he is admitted; carer’s assessment afterwards.",
    "sharedPlan": [
     "Immediate referral to acute services and inform the multidisciplinary foot service (NICE NG19)",
     "No colchicine; offload the foot; no driving; take glucose meter and medicines",
     "Emergency carer cover arranged with a fallback; follow-up podiatry and diabetes review after discharge"
    ],
    "safetyNet": [
     "999 for uncontrollable shaking, confusion, drowsiness, breathlessness or rapidly spreading redness — tell them Sheila is alone",
     "GP call-back at a set time today to confirm he was seen and Sheila is covered"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Foot pain",
    "s": "Visual algorithm · diabetic foot red flags",
    "href": "algorithms/foot-pain.html"
   },
   {
    "ic": "📋",
    "t": "Type 2 diabetes",
    "s": "Case walkthrough · NICE NG28 · NG19",
    "href": "../cases/type-2-diabetes.html"
   },
   {
    "ic": "💠",
    "t": "Cellulitis",
    "s": "Protocol · NICE NG141",
    "href": "management/cellulitis.html"
   },
   {
    "ic": "📋",
    "t": "Gout",
    "s": "Case walkthrough · NICE NG219",
    "href": "../cases/gout.html"
   },
   {
    "ic": "💠",
    "t": "Sick day rules",
    "s": "Protocol · metformin and sulfonylureas when unwell",
    "href": "management/sick-day-rules.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is built to tempt you into a two-minute prescription. It is failed by treating the request, and passed by treating the foot and the obstacle behind the request.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Issuing colchicine because he has a gout history and asked for it.",
     "why": "“Management plan not in line with current UK best practice.” NICE NG19 requires immediate acute referral for a possibly infected diabetic foot with systemic features.",
     "fix": "Say plainly why you won’t prescribe, and what happens instead today."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about skin breaks, fever or glucose.",
     "why": "“Does not gather sufficient information to make a safe assessment.” The wet sock and shivers only emerge if asked.",
     "fix": "Ask about blisters, wetness, smell, barefoot walking, shivers, confusion and sugars."
    },
    {
     "dom": "tasks",
     "fail": "Accepting “it’s not that sore” as reassuring.",
     "why": "Neuropathy masks pain; low pain in a hot diabetic foot is a warning sign.",
     "fix": "Explain it to him: “The nerves are numbed, so this can feel milder than it is.”"
    },
    {
     "dom": "rto",
     "fail": "Telling him to go to A&E without asking about Sheila.",
     "why": "“Does not identify or respond to the patient’s cues.” He will not go, and the safe plan fails.",
     "fix": "Solve cover first: neighbour, family, then adult social care, with a fallback that you arrange."
    },
    {
     "dom": "rto",
     "fail": "Missing the amputation fear behind “it has to be gout”.",
     "why": "Unaddressed, the fear keeps him minimising.",
     "fix": "Name it gently and reframe: early assessment is how feet are saved."
    },
    {
     "dom": "gs",
     "fail": "Ending with “go to hospital if it gets worse”.",
     "why": "Non-specific safety-netting for possible sepsis, with no follow-through.",
     "fix": "Name the 999 triggers, tell him what to say about Sheila, and book a timed call-back."
    }
   ]
  }
 },
 "t2dm-lada": {
  "stem": {
   "name": "Tomasz Wójcik",
   "age": "38-year-old man",
   "pmh": [
    "“Type 2 diabetes” diagnosed 4 months ago (HbA1c 79 mmol/mol)",
    "Viral illness shortly before diagnosis"
   ],
   "meds": [
    "Metformin",
    "Gliclazide (added recently)"
   ],
   "allergy": "No known drug allergies",
   "recent": "BMI 23 at diagnosis. No family history of type 2 diabetes recorded. No ketone, GAD antibody or C-peptide results on file. Weight today by his report about 6 kg lower than at diagnosis.",
   "reason": "Telephone call: “sugars still high, tablets not working”."
  },
  "knowledge": {
   "guideline": "NICE NG17 · NICE NG28 (updated February 2026) · JBDS-IP DKA guideline · DVLA Assessing fitness to drive (diabetes)",
   "summary": "A slim adult under 50, losing weight, with marked osmotic symptoms and oral treatment failing within months, has type 1 diabetes (including latent autoimmune diabetes in adults) until proven otherwise. The first task is safety: ketones and same-day specialist care.",
   "points": [
    {
     "h": "Question the label",
     "t": "NICE NG17: type 1 diabetes is diagnosed clinically; typical features include ketosis, rapid weight loss, age under 50, BMI below 25 and personal or family history of autoimmune disease. HbA1c confirms diabetes but not its type."
    },
    {
     "h": "Antibodies and C-peptide",
     "t": "NICE NG17: do not measure C-peptide or antibodies routinely; consider them when the type is uncertain or features are atypical. Here they help settle a disputed label, but insulin must never wait for the results."
    },
    {
     "h": "DKA — safety first",
     "t": "Thirst, polyuria, weight loss, nausea, ketotic breath, abdominal pain, vomiting, rapid breathing or drowsiness suggest ketosis. JBDS-IP defines DKA by ketonaemia of 3.0 mmol/L or more (or significant ketonuria), glucose above 11.0 mmol/L or known diabetes, and bicarbonate below 15.0 mmol/L and/or venous pH below 7.3. Vomiting, abdominal pain, drowsiness or breathlessness means emergency admission."
    },
    {
     "h": "Same-day specialist care",
     "t": "Suspected new type 1 diabetes with ketosis symptoms needs capillary glucose and blood ketones today and same-day discussion with the diabetes team or acute medicine. Do not add another oral agent or tighten the diet; insulin is the likely treatment."
    },
    {
     "h": "Stop the restriction",
     "t": "Food restriction in insulin deficiency worsens catabolism and ketosis. Tell him clearly to eat normally and keep drinking sugar-free fluids. An SGLT2 inhibitor is not a fix here — it raises DKA risk in insulin deficiency (BNF)."
    },
    {
     "h": "DVLA once on insulin",
     "t": "Group 1: notify the DVLA if insulin treatment will last more than 3 months; check glucose no more than 2 hours before driving and every 2 hours while driving; do not drive if glucose is below 5.0 mmol/L. Group 2 has stricter rules."
    },
    {
     "h": "After the acute phase",
     "t": "NICE NG17: structured education (for example DAFNE) 6–12 months after diagnosis, offer of continuous glucose monitoring, and ongoing specialist care."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Wójcik, it’s Dr Lee. I’ve read your message. Before we start — are you somewhere you can talk, and how are you feeling right this minute?",
    "dom": "gs",
    "why": "Checks setting and immediate wellbeing on the phone"
   },
   {
    "who": "pt",
    "text": "I’m at home. I don’t get it. I take the tablets exactly as told, I’ve cut out sugar, bread, everything. I’m drinking gallons, weeing all the time and still losing weight. My family say I must be sneaking food. But I barely eat now."
   },
   {
    "who": "dr",
    "text": "Thank you — that’s really clear, and I believe you. I want to ask some questions to understand what’s going on, because what you describe matters. Then we’ll agree what to do today. All right?",
    "dom": "rto",
    "why": "Believes him explicitly and sets an agenda"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "How much weight have you lost, and over how long?",
    "dom": "tasks",
    "why": "Quantifies weight loss"
   },
   {
    "who": "pt",
    "text": "About six kilos since diagnosis. Four months. I wasn’t big to start with."
   },
   {
    "who": "dr",
    "text": "Have you had any nausea or vomiting, tummy pain, or noticed a sweet or fruity smell on your breath? Any breathlessness or feeling drowsy?",
    "dom": "tasks",
    "why": "Screens directly for DKA features"
   },
   {
    "who": "pt",
    "text": "Bit sick in the mornings. I’ve noticed my breath smells funny, sort of fruity. No vomiting. Tired all the time."
   },
   {
    "who": "dr",
    "text": "Do you have a glucose meter at home? Any recent readings?",
    "dom": "tasks",
    "why": "Seeks objective data"
   },
   {
    "who": "pt",
    "text": "The nurse gave me one. It says 19, 22. Sometimes just ‘high’."
   },
   {
    "who": "dr",
    "text": "Does anyone in your family have diabetes, or conditions like thyroid disease or coeliac disease? And were you unwell before you were diagnosed?",
    "dom": "tasks",
    "why": "Tests the type 1 hypothesis: family history, autoimmunity, viral prodrome"
   },
   {
    "who": "pt",
    "text": "No, nobody in the family has diabetes. I had a bad virus just before all this started."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You mentioned your family say you must be sneaking food. How has that been for you?",
    "dom": "rto",
    "why": "Follows the blame cue"
   },
   {
    "who": "pt",
    "text": "Awful. I don’t eat with them anymore. When I was diagnosed I felt like it was my fault — eating wrong. So I stopped eating. And it’s still getting worse. So it must be me."
   },
   {
    "who": "dr",
    "text": "So you’ve been punishing yourself for something you believe you caused. What were you hoping I’d do today?",
    "dom": "rto",
    "why": "Names the self-blame and asks his expectation"
   },
   {
    "who": "pt",
    "text": "Stronger tablets, I suppose. Or tell me what I’m doing wrong."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’m going to be very clear: you are not doing anything wrong. Someone slim, your age, losing weight this fast, with sugars climbing on two tablets — I don’t think this is type 2 diabetes. I think it’s a different kind, where the immune system stops the body making insulin. It’s not caused by food. Nobody gets it from bread or sugar.",
    "dom": "tasks",
    "why": "Reframes the diagnosis and lifts the blame explicitly"
   },
   {
    "who": "pt",
    "text": "(Silence.) So it wasn’t me?"
   },
   {
    "who": "dr",
    "text": "It wasn’t you. The weight loss and the thirst are the illness, not you failing. Your family meant well, but they had it wrong — and I’m sorry to say the first label was probably wrong too.",
    "dom": "rto",
    "why": "Repeats the absolution and acknowledges the mislabelling honestly"
   },
   {
    "who": "pt",
    "text": "I don’t know whether to laugh or cry."
   },
   {
    "who": "dr",
    "text": "Either is fine. But the pear-drop smell and the sickness worry me today. They can mean your body is short of insulin and making ketones, which can tip into a serious condition called DKA. I need you checked today — a finger-prick test for sugar and ketones.",
    "dom": "tasks",
    "why": "Prioritises acute safety: possible evolving DKA"
   },
   {
    "who": "pt",
    "text": "Today? I feel all right, just tired."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’d like you at the surgery within the hour. The nurse will check your sugar and ketones and I’ll speak to the hospital diabetes team straight away. If the ketones are raised, you’ll go to hospital today, and they’ll most likely start insulin. Can someone drive you?",
    "dom": "tasks",
    "why": "Same-day ketone testing and specialist contact; arranges safe transport"
   },
   {
    "who": "pt",
    "text": "Someone at home can. Insulin — that’s injections?"
   },
   {
    "who": "dr",
    "text": "Yes. It replaces what your body has stopped making. The team will teach you everything, and people do very well on it. There’s also a blood test for antibodies that can confirm the type, but we won’t wait for that to treat you.",
    "dom": "tasks",
    "why": "Explains insulin and confirmatory tests without delaying treatment"
   },
   {
    "who": "pt",
    "text": "I drive for work. Will I lose my licence?"
   },
   {
    "who": "dr",
    "text": "Not for having diabetes. On insulin there are DVLA rules — checking your sugar before and during driving, and telling them if it’s long term — and the team will go through them. For today, please don’t drive yourself.",
    "dom": "tasks",
    "why": "Accurate DVLA reassurance and same-day driving advice"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "And from now, please eat normally. Cutting food makes this more dangerous, not less. Keep drinking water. Don’t change your tablets yourself until the team sees you.",
    "dom": "tasks",
    "why": "Stops self-starvation and gives interim medicines advice"
   },
   {
    "who": "pt",
    "text": "Eat normally. Right."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If before you get here you start vomiting, get tummy pain, feel drowsy or your breathing speeds up, call 999 — don’t wait for us. I’ll ring the nurse now so she’s expecting you, and I’ll call you back this afternoon with the plan.",
    "dom": "gs",
    "why": "Precise DKA safety-net and a defined call-back"
   },
   {
    "who": "pt",
    "text": "Thank you. Nobody’s said any of this before."
   },
   {
    "who": "dr",
    "text": "Can you tell me what you’re going to do now, and what you’ll tell your family tonight?",
    "dom": "rto",
    "why": "Teach-back including the family narrative"
   },
   {
    "who": "pt",
    "text": "Get a lift in now. Finger-prick test. Maybe hospital, probably insulin. Eat normally. 999 if I’m sick or drowsy. And I’ll tell them it’s not my fault — it’s my immune system."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Believed him from the first minute; asked how he felt now before exploring; set a clear agenda on the phone.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Stopped eating with his family; blame from relatives; self-restriction; drives for work.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “fruity breath” and nausea, the weight loss in a slim man, and “it must be me”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (he caused it by eating wrong), concern (shame, relentless weight loss), expectation (stronger tablets or to be told what he is doing wrong).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Capillary glucose and blood ketones today; same-day diabetes team or acute assessment; GAD antibodies and C-peptide to confirm type, without delaying insulin (NICE NG17).",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Type 1 diabetes or latent autoimmune diabetes vs type 2; tested with age, BMI, weight loss, family and autoimmune history and viral prodrome.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for DKA features (vomiting, abdominal pain, drowsiness, breathlessness, ketotic breath); low threshold for admission.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated: likely autoimmune (type 1) diabetes misclassified as type 2, with possible ketosis — not his fault.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Seen within the hour; specialist contacted; insulin anticipated; no extra oral agents; stop dietary restriction; someone else drives him.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Asked about personal and family autoimmune disease; DVLA advice for insulin; interim medicines advice; family narrative addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 for vomiting, abdominal pain, drowsiness or rapid breathing; nurse pre-warned; afternoon call-back; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Tomasz Wójcik",
    "age": "38 years · male",
    "pmh": [
     "“T2DM” — diagnosed 4 months ago (HbA1c 79)",
     "BMI 23 at diagnosis"
    ],
    "meds": [
     "Metformin",
     "Gliclazide"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Coded as type 2 diabetes on HbA1c alone. No ketones, GAD antibodies or C-peptide on file. Gliclazide added for rising glucose.",
    "reason": "Telephone: “Sugars still high despite tablets — wants stronger medication.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and believe",
     "d": "He expects to be disbelieved. Say you believe him and ask how he is right now."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Weight loss, osmotic symptoms, nausea, breath, meter readings, family and autoimmune history, viral illness."
    },
    {
     "t": "4–6",
     "h": "ICE and the blame",
     "d": "Family comments, eating alone, self-starvation. Ask what he hoped for."
    },
    {
     "t": "6–10",
     "h": "Reframe and act",
     "d": "Probably not type 2; not his fault; possible ketosis; seen within the hour, ketones, same-day specialist, insulin likely; eat normally; no driving today."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Precise DKA triggers for 999, nurse pre-warned, call-back, teach-back including what he’ll tell his family."
    }
   ],
   "wordPics": {
    "fail": "Adds a third oral agent or tells him to cut carbohydrates further; never questions the type 2 label; misses the ketotic breath and nausea; leaves the family’s blame unchallenged; no same-day assessment.",
    "pass": "Recognises the atypical features and suspects type 1, checks for DKA symptoms, arranges same-day glucose and ketone testing with specialist input, and tells him it is not his fault.",
    "exc": "All of the above, plus: believes him from the first line; explains the immune cause in plain words so he can tell his family; stops the self-starvation explicitly; answers the licence worry; confirms safe transport; precise 999 triggers and a call-back."
   },
   "avoid": [
    {
     "dont": "“Let’s add another tablet and see a dietitian to tighten your diet.”",
     "instead": "“I don’t think this is type 2. You need checking today, and you’ll most likely need insulin.”",
     "why": "Intensifying oral treatment in insulin deficiency delays the right treatment and risks DKA."
    },
    {
     "dont": "“Are you sure you’re sticking to the diet?”",
     "instead": "“I believe you. What you’re describing isn’t a willpower problem.”",
     "why": "It repeats the blame he is already drowning in."
    },
    {
     "dont": "“Book in with the nurse next week for bloods.”",
     "instead": "“I’d like you here within the hour for a sugar and ketone check.”",
     "why": "Ketotic breath and nausea need same-day assessment, not routine bloods."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Family blame and isolation",
     "t": "Relatives have framed the illness as his fault; he now eats alone and restricts food. Give him words to explain autoimmune diabetes at home and offer to see him with his wife."
    },
    {
     "h": "Work",
     "t": "He drives for work. Time off for admission and insulin starting, and a fit note if needed; later, a plan for glucose checks around driving."
    }
   ],
   "legal": [
    {
     "h": "DVLA and insulin",
     "t": "Group 1: notify if insulin will be needed for more than 3 months; glucose check within 2 hours before driving and every 2 hours while driving; do not drive below 5.0 mmol/L. Group 2 (lorry, bus) has additional requirements. Ask what he drives."
    },
    {
     "h": "Equality Act 2010",
     "t": "Insulin-treated diabetes may meet the definition of disability, giving a right to reasonable adjustments at work, such as breaks for glucose checks and injections."
    }
   ],
   "professional": [
    {
     "h": "Diagnostic error and candour",
     "t": "GMC Good Medical Practice (2024) and the professional duty of candour: explain honestly that the original classification was probably wrong, without blaming colleagues, and record the revised working diagnosis and the plan."
    },
    {
     "h": "Significant event review",
     "t": "A slim adult coded as type 2 on HbA1c alone, with no ketone check, is a learning opportunity for the practice: review how diabetes type is assigned at diagnosis."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Diabetes UK and Breakthrough T1D for newly diagnosed adults; structured education (for example DAFNE) via the diabetes team; peer support groups for adults diagnosed with type 1 later in life."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Vomiting, abdominal pain, drowsiness, rapid or deep breathing — possible DKA, 999 or emergency admission",
     "Ketotic (pear-drop) breath, nausea, marked thirst and polyuria with weight loss — same-day ketones and glucose",
     "Slim, under 50, rapid failure of oral treatment, no family history of type 2 — suspect type 1 or latent autoimmune diabetes (NICE NG17)"
    ],
    "psychosocial": [
     "Blame from family; eating alone; deliberate food restriction",
     "Shame absorbed from the original diagnosis",
     "Drives for work — licence and income worries"
    ],
    "ice": [
     "Idea: “The tablets aren’t working because I’m eating wrong — it must be me.”",
     "Concern: shame, family judgement and frightening weight loss",
     "Expectation: stronger tablets, or to be told what he’s doing wrong"
    ]
   },
   "diagnosis": "Probable autoimmune (type 1) diabetes, possibly latent autoimmune diabetes in adults, misclassified as type 2: slim, 38, 6 kg weight loss, marked osmotic symptoms, rapid failure of metformin and gliclazide, no family history of type 2 diabetes, preceding viral illness. Symptoms suggest ketosis — DKA must be excluded today.",
   "diagnosisLay": "“I think your immune system has damaged the cells that make insulin. That’s a different kind of diabetes from the one you were told, and it isn’t caused by food. Without enough insulin your body burns itself for fuel — that’s the weight loss and the funny-smelling breath — and the fix is insulin.”",
   "management": {
    "reflectIce": "“You’ve been punishing yourself for something you didn’t cause. This isn’t about eating wrong, and stronger tablets won’t help — insulin will.”",
    "psychosocial": "Stop the food restriction today; give him the words for his family; offer a joint conversation with a family member if he wishes; address work and driving.",
    "sharedPlan": [
     "Seen within the hour: capillary glucose and blood ketones; same-day diabetes team or acute medicine discussion",
     "Insulin via the specialist team; GAD antibodies and C-peptide if the type remains uncertain (NICE NG17) — not delaying treatment",
     "Eat normally, drink sugar-free fluids, no driving today, no self-adjustment of tablets"
    ],
    "safetyNet": [
     "Vomiting, abdominal pain, drowsiness or rapid breathing — 999",
     "Nurse pre-warned; GP call-back this afternoon; follow-up once the specialist plan is in place"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Type 1 diabetes",
    "s": "Case walkthrough · NICE NG17",
    "href": "../cases/type-1-diabetes.html"
   },
   {
    "ic": "💠",
    "t": "DKA",
    "s": "Protocol · recognition and referral",
    "href": "management/dka.html"
   },
   {
    "ic": "💠",
    "t": "Type 1 diabetes protocol",
    "s": "Diagnosis · antibodies · insulin",
    "href": "management/type-1-diabetes.html"
   },
   {
    "ic": "🗺️",
    "t": "Unintentional weight loss",
    "s": "Visual algorithm",
    "href": "algorithms/weight-loss.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA fitness to drive",
    "s": "Insulin-treated diabetes",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "The trap is in the title of his records: “type 2”. The station is failed by treating the label and passed by treating the patient — a slim young man in insulin deficiency who thinks it is his fault.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Adding a third oral agent or advising stricter carbohydrate restriction.",
     "why": "“Management plan not in line with current UK best practice.” NICE NG17 features point to type 1; insulin, not more tablets, is needed.",
     "fix": "Say you doubt the type 2 label and arrange same-day specialist input."
    },
    {
     "dom": "tasks",
     "fail": "Missing the ketotic breath and nausea.",
     "why": "“Does not rule out serious disease.” Evolving DKA must be excluded today.",
     "fix": "Ask directly about vomiting, abdominal pain, breath and drowsiness; check ketones within the hour."
    },
    {
     "dom": "tasks",
     "fail": "Waiting for GAD antibodies before acting.",
     "why": "Antibodies help classify, but NICE NG17 treats type 1 as a clinical diagnosis; delay risks DKA.",
     "fix": "“We’ll do the antibody test, but we won’t wait for it to treat you.”"
    },
    {
     "dom": "rto",
     "fail": "Letting “my family say I’m sneaking food” pass.",
     "why": "“Does not identify or respond to the patient’s cues.” The blame is the hidden agenda and is driving self-starvation.",
     "fix": "Say explicitly: “You didn’t cause this. It’s your immune system, not food.”"
    },
    {
     "dom": "rto",
     "fail": "Delivering the new diagnosis without acknowledging the earlier mislabelling.",
     "why": "He will not trust the new plan if the old one is defended.",
     "fix": "Be honest and non-blaming: “I think the first label was probably wrong.”"
    },
    {
     "dom": "gs",
     "fail": "Vague safety-netting and letting him drive himself in.",
     "why": "Non-specific advice in possible DKA is unsafe.",
     "fix": "Name the 999 triggers, arrange a driver, pre-warn the nurse and book a call-back."
    }
   ]
  }
 },
 "t2dm-new-diagnosis": {
  "stem": {
   "name": "Errol Bennett",
   "age": "49-year-old man",
   "pmh": [
    "No significant past medical history",
    "Smoker, 10 cigarettes a day"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Bloods for tiredness: HbA1c 71 mmol/mol; repeat HbA1c 69 mmol/mol. Total cholesterol 5.9 mmol/L. eGFR and urine ACR normal. BMI 32. Clinic BP 142/88 mmHg. Self-employed delivery driver.",
   "reason": "Booked by reception to discuss results."
  },
  "knowledge": {
   "guideline": "NICE NG28 (updated February 2026) · NICE NG19 · NICE NG238 · NICE NG136 · NICE NG209 · DVLA Assessing fitness to drive (diabetes)",
   "summary": "Two HbA1c results of 48 mmol/mol or more confirm type 2 diabetes. The first consultation sets engagement for years: treat the fatalism, answer the licence fear, then build a plan around his working day.",
   "points": [
    {
     "h": "Diagnosis",
     "t": "HbA1c of 48 mmol/mol or more on two occasions confirms diabetes in an asymptomatic adult. Ask about osmotic symptoms and weight loss, which would change urgency."
    },
    {
     "h": "Glucose-lowering drugs",
     "t": "NICE NG28 (updated February 2026): for most adults, offer modified-release metformin with an SGLT2 inhibitor from diagnosis, introduced stepwise — metformin first to check tolerability, then the SGLT2 inhibitor. Doses per BNF. Set an individualised HbA1c target and review at 3–6 months."
    },
    {
     "h": "Cardiovascular risk",
     "t": "Calculate QRISK3; NICE NG238 recommends atorvastatin 20 mg for primary prevention if QRISK3 is 10% or more. Confirm the BP with home or ambulatory readings (NICE NG136). Stopping smoking is the single largest risk reduction: behavioural support plus varenicline, cytisinicline or NRT, or a nicotine vape (NICE NG209)."
    },
    {
     "h": "Remission",
     "t": "The NHS Type 2 Diabetes Path to Remission Programme (England) offers total diet replacement to adults aged 18–65 diagnosed within the last 6 years with BMI 27 or more (25 or more for people from Black, Asian or other ethnic minority backgrounds). Remission is a realistic goal to offer, not a promise."
    },
    {
     "h": "DVLA",
     "t": "Car and van licence (Group 1): no need to tell the DVLA if treated by diet or tablets that do not cause hypoglycaemia, such as metformin and SGLT2 inhibitors. Lorry or bus licence (Group 2): the driver must tell the DVLA if treated with tablets. Insulin must be notified for both groups (Group 1 only if longer than 3 months). Ask what he drives."
    },
    {
     "h": "Care processes",
     "t": "Structured education at diagnosis (NICE NG28); foot risk assessment at diagnosis and at least annually (NICE NG19); referral to the NHS Diabetic Eye Screening Programme; U&E, ACR, lipids and BP at annual review."
    },
    {
     "h": "Safety-net",
     "t": "Report marked thirst, passing large volumes of urine, weight loss, vomiting or drowsiness. SGLT2 inhibitors: stop when acutely unwell or dehydrated (sick-day rules) and seek help for vomiting, abdominal pain or breathlessness."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Errol, I’m Dr Lee. Thanks for making time between drops. You’ve already guessed why we asked you in — before I say anything, tell me what’s going through your mind.",
    "dom": "rto",
    "why": "Opens with his perspective, not the result"
   },
   {
    "who": "pt",
    "text": "It’s diabetes, isn’t it. My dad had it. Eyes, then his leg, then his heart at sixty-one. So I’ve made my peace with where this goes. Just give me the tablets and I’ll get on with it."
   },
   {
    "who": "dr",
    "text": "Yes, the two blood tests do confirm type 2 diabetes. I’m sorry about your dad — that’s a lot to have watched. I don’t want to just hand you a prescription today. Can we spend a few minutes on you, what this means, and a plan that fits your life?",
    "dom": "gs",
    "why": "Confirms the diagnosis honestly and sets an agenda beyond tablets"
   },
   {
    "who": "pt",
    "text": "Go on. I’ve got till half past."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me more about what happened with your dad.",
    "dom": "rto",
    "why": "Follows the dominant cue first"
   },
   {
    "who": "pt",
    "text": "Diagnosed in his forties. Never did anything about it — kept smoking, never went to the clinic. Blind in one eye, lost his leg below the knee at 58, heart attack at 61. I looked after him at the end."
   },
   {
    "who": "dr",
    "text": "Thank you. That tells me a lot. Have you had any symptoms yourself — very thirsty, up at night to pass water, losing weight without trying, blurred vision, sores that won’t heal?",
    "dom": "tasks",
    "why": "Screens for symptomatic hyperglycaemia and complications"
   },
   {
    "who": "pt",
    "text": "Tired, that’s why I came. Nothing else really."
   },
   {
    "who": "dr",
    "text": "Talk me through a normal working day — food, drink, how much you’re sitting.",
    "dom": "rto",
    "why": "Open, non-judgemental lifestyle history"
   },
   {
    "who": "pt",
    "text": "In the van eleven hours. Garage food — pasties, meal deals. Energy drinks to keep going. Ten fags a day. No time for exercise with this job."
   },
   {
    "who": "dr",
    "text": "That sounds like the job is running you, rather than you being lazy. What do you drive — a van, or anything over three and a half tonnes?",
    "dom": "tasks",
    "why": "Establishes licence group for the DVLA advice"
   },
   {
    "who": "pt",
    "text": "Just a Transit. Why?"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "I’ll come to that. Can I ask — has anything about this diagnosis worried you that you haven’t said yet?",
    "dom": "rto",
    "why": "Invites the unspoken concern"
   },
   {
    "who": "pt",
    "text": "(Pause.) My mate said they take your licence off you if you go on insulin. I’m self-employed. No van, no money."
   },
   {
    "who": "dr",
    "text": "I’m really glad you said that. So there are two worries: that you’re on your dad’s path whatever you do, and that this could cost you your living. What were you hoping for today?",
    "dom": "rto",
    "why": "Summarises both hidden concerns and checks expectations"
   },
   {
    "who": "pt",
    "text": "Honestly? Tablets and not much fuss. There’s no point pretending I’m going to be a gym bloke."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me answer the licence first. On a van licence, with diet or the tablets I’d suggest, you don’t even need to tell the DVLA. You keep driving and you keep earning. Insulin has extra rules, but they’re manageable, and we’re nowhere near that.",
    "dom": "tasks",
    "why": "Accurate, proactive DVLA advice for Group 1"
   },
   {
    "who": "pt",
    "text": "Right. That’s a weight off, honestly."
   },
   {
    "who": "dr",
    "text": "Now your dad. What happened to him came from years of high sugar, high blood pressure and smoking left untreated, in a different era. You’ve been caught early, with no symptoms, kidneys and eyes working. The eyes, feet and heart can largely be protected if we control those things. That’s a very different starting line.",
    "dom": "tasks",
    "why": "Reframes fatalism with accurate information on modifiable risk"
   },
   {
    "who": "pt",
    "text": "He never went to a single check-up."
   },
   {
    "who": "dr",
    "text": "And you’re here. The biggest thing for your heart isn’t the sugar — it’s the cigarettes. Would you be open to help with stopping, not today necessarily, but properly?",
    "dom": "tasks",
    "why": "Prioritises smoking cessation as the highest-yield action"
   },
   {
    "who": "pt",
    "text": "I’ve thought about it. Since Dad. Maybe."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Then here’s what I suggest, and tell me what fits. A tablet called metformin, the slow-release kind, starting now; once it’s settled, a second tablet that also protects the heart and kidneys. A cholesterol check with your heart-risk score, and a home blood pressure monitor for a week, because today’s reading is borderline.",
    "dom": "tasks",
    "why": "Stepwise MR metformin then SGLT2 inhibitor (NICE NG28 2026), QRISK3 and BP confirmation"
   },
   {
    "who": "pt",
    "text": "Two tablets? I thought it was just the one."
   },
   {
    "who": "dr",
    "text": "The newer guidance starts both early because they protect more than the sugar. And there’s something your dad was never offered: with your weight and an early diagnosis, type 2 can sometimes go into remission — sugar back to normal off medication. There’s an NHS programme for that. Would you want me to refer you?",
    "dom": "tasks",
    "why": "Offers remission via the NHS Path to Remission Programme"
   },
   {
    "who": "pt",
    "text": "Remission? I didn’t know that was a thing. Yeah, go on."
   },
   {
    "who": "dr",
    "text": "Good. And one small change you choose for this week — not a list from me. What could you realistically do on the road?",
    "dom": "rto",
    "why": "Negotiates a single achievable goal"
   },
   {
    "who": "pt",
    "text": "Swap the energy drinks for water. I could do that."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll also book a diabetes education course, eye screening and a foot check — they catch problems years before they matter. The stop-smoking team will ring you if you’re happy for me to refer.",
    "dom": "gs",
    "why": "Arranges care processes and follow-through"
   },
   {
    "who": "pt",
    "text": "Fine. Refer me."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you get very thirsty, are passing lots of urine, lose weight, or once you’re on the second tablet feel very unwell with vomiting or tummy pain, stop that tablet and ring us the same day, or 111 out of hours. I’ll see you in two weeks with the blood pressure readings.",
    "dom": "gs",
    "why": "Specific safety-net including SGLT2 inhibitor sick-day advice"
   },
   {
    "who": "pt",
    "text": "Two weeks. Okay."
   },
   {
    "who": "dr",
    "text": "When you get home and someone asks what the doctor said, what will you tell them?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "It’s diabetes but it’s early. I keep my licence. Tablets, water not energy drinks, a course, and they’ll help me pack in the fags. And I’m not my dad."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Opened with his thoughts before the result; confirmed the diagnosis without either minimising or dwelling on complications.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Eleven-hour days in the van, garage food, energy drinks, smoking, self-employed with no sick pay, caring for his father at the end.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “made my peace with where this goes” and “give me the tablets”, and the unspoken licence worry.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (father’s path is fixed), concerns (early death, losing his licence and income), expectation (tablets and no fuss).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Confirmed two diagnostic HbA1c values; QRISK3 and lipids; HBPM or ABPM to confirm BP; U&E, ACR; eye screening and foot check.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Type 2 diabetes vs other types (slow onset, BMI 32, asymptomatic); asked what he drives to place him in the right DVLA group.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about osmotic symptoms, weight loss and visual change; no features of hyperglycaemic emergency.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated: type 2 diabetes, early and asymptomatic, with modifiable cardiovascular risk from smoking, BP and cholesterol.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Stepwise MR metformin then SGLT2 inhibitor (NICE NG28, February 2026); remission programme; structured education; one negotiated lifestyle goal.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Smoking cessation referral (NICE NG209); statin if QRISK3 10% or more (NICE NG238); BP confirmation (NICE NG136).",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named osmotic and SGLT2 inhibitor sick-day warning symptoms; 2-week review with BP readings; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Investigations & results"
   ],
   "stem": {
    "name": "Errol Bennett",
    "age": "49 years · male",
    "pmh": [
     "Nil significant",
     "Current smoker — 10/day"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ HbA1c 71 then 69 mmol/mol (tiredness screen). TC 5.9. eGFR and ACR normal. BMI 32. BP 142/88. No QRISK3, retinal screening or foot check on file.",
    "reason": "Video consultation to discuss blood results. Occupation: self-employed delivery driver."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and confirm",
     "d": "He diagnoses himself and closes the door: “just give me the tablets”. Confirm the result, then agree to do more than prescribe."
    },
    {
     "t": "1–4",
     "h": "Father and lifestyle",
     "d": "His father’s story, symptoms, a normal working day, smoking. Ask what he drives."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "Draw out the licence fear and name the fatalism. Hear his expectation before explaining."
    },
    {
     "t": "6–10",
     "h": "Reframe and plan",
     "d": "DVLA answer first, then father’s era vs his, smoking as the top priority, stepwise MR metformin then SGLT2 inhibitor, remission referral, one chosen goal."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Osmotic and sick-day symptoms, 2-week review with home BP, education, eye and foot screening booked, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes metformin and a leaflet; recites complications; never asks about his father or his job; wrong or no DVLA advice; lifestyle lecture unrelated to his day; no cardiovascular risk plan and no follow-up.",
    "pass": "Confirms the diagnosis, explores his father’s story, gives correct Group 1 DVLA advice, starts treatment in line with NICE NG28, addresses smoking and cardiovascular risk, arranges education, screening and review.",
    "exc": "All of the above, plus: treats the fatalism as the main problem; answers the licence fear before he has to ask twice; checks the licence group; offers remission as a real goal; negotiates one change he owns; he leaves with agency rather than a sentence."
   },
   "avoid": [
    {
     "dont": "“If we don’t control this you could lose your sight or your feet, like your dad.”",
     "instead": "“What happened to your dad came from years untreated. You’re here early — that changes the story.”",
     "why": "Fear feeds his fatalism; accurate hope earns engagement."
    },
    {
     "dont": "“You need to eat healthily, exercise for 150 minutes a week and stop smoking.”",
     "instead": "“What’s one change you could actually make on the road this week?”",
     "why": "A lecture that ignores an eleven-hour van day changes nothing and scores nothing."
    },
    {
     "dont": "“You’ll need to let the DVLA know about your diabetes.”",
     "instead": "“On a van licence, with these tablets, you don’t need to tell the DVLA. You keep driving.”",
     "why": "Wrong advice for Group 1 on non-hypoglycaemic tablets, and it deepens his livelihood fear."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work pattern",
     "t": "Self-employed, no sick pay, eleven hours a day in the van. Plans must fit the road: garage food swaps, short walks at drops, appointments he can make."
    },
    {
     "h": "Family experience",
     "t": "He nursed his father through complications and death. Bereavement and anticipatory fear shape how he hears every sentence about diabetes."
    }
   ],
   "legal": [
    {
     "h": "DVLA",
     "t": "Group 1 (car or van up to 3.5 tonnes): no notification if treated by diet or tablets not carrying hypoglycaemia risk. Group 2 (lorry or bus): must notify if treated with tablets. Insulin: must notify (Group 1 only if treatment will last over 3 months). Sulfonylureas bring glucose monitoring requirements."
    },
    {
     "h": "Free prescriptions",
     "t": "In England, diabetes treated with medication qualifies for a medical exemption certificate, so his tablets would be free once he applies."
    }
   ],
   "professional": [
    {
     "h": "Informed shared decisions",
     "t": "GMC Good Medical Practice (2024) and NICE NG197: explain the options, including remission and the reasons for dual therapy, and agree the plan with him rather than for him."
    },
    {
     "h": "Smoking",
     "t": "NICE NG209: advise stopping at every opportunity and offer referral to stop-smoking services with behavioural support and medicines or a nicotine vape. Record his decision."
    }
   ],
   "community": [
    {
     "h": "Programmes and support",
     "t": "NHS Type 2 Diabetes Path to Remission Programme; local structured education (for example DESMOND); NHS Stop Smoking services and community pharmacy; Diabetes UK for plain-language information."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Marked thirst, polyuria, rapid weight loss, vomiting or drowsiness — possible hyperglycaemic emergency, same-day assessment",
     "Slim build, rapid onset or ketosis — question whether this is type 2",
     "Visual loss, foot ulcer or chest pain — complications needing urgent assessment"
    ],
    "psychosocial": [
     "Fatalism from watching his father’s decline and death",
     "Self-employed driver: fear of losing his licence and income",
     "Diet, energy drinks and inactivity shaped by long days in the van; smoking"
    ],
    "ice": [
     "Idea: “Diabetes took my dad’s eyes, leg and heart — it’ll do the same to me.”",
     "Concern: early death, and that the diagnosis will cost him his licence and living",
     "Expectation: tablets with no fuss — underneath, to hear that his father’s ending isn’t fixed"
    ]
   },
   "diagnosis": "Type 2 diabetes (HbA1c 71 then 69 mmol/mol), asymptomatic, with obesity (BMI 32), current smoking, borderline BP needing confirmation and a cholesterol needing QRISK3 assessment. No evidence of renal disease on current tests.",
   "diagnosisLay": "“Your blood sugar has been running too high for a while — that’s type 2 diabetes. It’s early, you have no damage we know of, and the things that hurt your dad — sugar, blood pressure, cholesterol and smoking — are all things we can change.”",
   "management": {
    "reflectIce": "“You’ve told me you’ve made your peace with your dad’s ending. I don’t think it’s yours. And your licence is safe with these tablets.”",
    "psychosocial": "Build every step around the van: one chosen swap (water for energy drinks), walking at drops, appointments he can make; smoking support when he’s ready.",
    "sharedPlan": [
     "MR metformin now, SGLT2 inhibitor added once tolerated (NICE NG28, February 2026); structured education",
     "QRISK3 and statin discussion (NICE NG238); home BP readings (NICE NG136); smoking cessation referral (NICE NG209)",
     "Path to Remission Programme referral; eye screening and foot check booked (NICE NG19)"
    ],
    "safetyNet": [
     "Thirst, polyuria, weight loss, vomiting, abdominal pain or drowsiness — same-day contact, 111 out of hours",
     "Stop the SGLT2 inhibitor if acutely unwell or dehydrated; review in 2 weeks with BP readings"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Type 2 diabetes",
    "s": "Case walkthrough · NICE NG28",
    "href": "../cases/type-2-diabetes.html"
   },
   {
    "ic": "💠",
    "t": "Type 2 diabetes protocol",
    "s": "Drug choice · targets · monitoring",
    "href": "management/type-2-diabetes.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA fitness to drive",
    "s": "Diabetes · Group 1 and Group 2",
    "href": "dvla.html"
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
   }
  ],
  "pitfalls": {
   "intro": "Almost every candidate can prescribe metformin. This station is passed or failed on whether you hear the fatalism and the licence fear under “just give me the tablets”.",
   "items": [
    {
     "dom": "rto",
     "fail": "Taking “just give me the tablets” at face value and prescribing.",
     "why": "“Does not identify or respond to the patient’s cues.” His father’s death is the engine of the consultation; a prescription into despair changes nothing.",
     "fix": "Ask about his father first: “Tell me what happened to him.” Then reframe with facts."
    },
    {
     "dom": "tasks",
     "fail": "Giving no DVLA advice, or telling him he must inform the DVLA.",
     "why": "Wrong advice for a Group 1 driver on non-hypoglycaemic tablets, and it leaves his main hidden fear unaddressed.",
     "fix": "Ask what he drives, then say clearly: van licence, these tablets, no notification needed."
    },
    {
     "dom": "tasks",
     "fail": "Focusing only on HbA1c and ignoring smoking, BP and cholesterol.",
     "why": "“Management plan not in line with current UK best practice.” Cardiovascular disease is the main threat; NICE NG238, NG136 and NG209 all apply.",
     "fix": "Name smoking as the biggest single step, calculate QRISK3, and confirm the BP with home readings."
    },
    {
     "dom": "tasks",
     "fail": "Metformin alone with no mention of the updated NICE NG28 approach.",
     "why": "NICE NG28 (updated February 2026) recommends MR metformin plus an SGLT2 inhibitor for most adults, introduced stepwise.",
     "fix": "Explain the two-step plan simply and why the second tablet protects the heart and kidneys."
    },
    {
     "dom": "gs",
     "fail": "A generic lifestyle lecture: salmon, gyms and 150 minutes a week.",
     "why": "“Advice not tailored to the patient’s circumstances.” He sits in a van eleven hours a day.",
     "fix": "Ask him to choose one change that works on the road, and build from there at review."
    },
    {
     "dom": "gs",
     "fail": "No safety-net and no booked review.",
     "why": "Non-specific safety-netting is a standard failing statement; new SGLT2 inhibitor users need sick-day advice.",
     "fix": "Name osmotic symptoms and the SGLT2 inhibitor sick-day rule, and book review in two weeks."
    }
   ]
  }
 },
 "thyroid-hyper": {
  "stem": {
   "name": "Priya Sundaram",
   "age": "27-year-old woman",
   "pmh": [
    "No significant past medical history"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Seen by a colleague for palpitations and tremor: resting pulse 104, regular. Bloods: TSH <0.01 mU/L, free T4 38 pmol/L (high), free T3 high, TRAb positive. Note: about 9 kg weight loss over 4 months “without trying”.",
   "reason": "Video appointment to discuss thyroid results."
  },
  "knowledge": {
   "guideline": "NICE NG145 (thyroid disease) · BNF · MHRA Drug Safety Update (February 2019, carbimazole) · NICE NG196 (atrial fibrillation) · NICE NG69 (eating disorders)",
   "summary": "Overt hyperthyroidism from Graves’ disease. The weight loss is part of the illness, not a bonus. Control symptoms, check the rhythm, arrange specialist treatment, and give the carbimazole safety rules.",
   "points": [
    {
     "h": "Diagnose the cause",
     "t": "Suppressed TSH with raised free T4 and T3 is overt hyperthyroidism. NICE NG145: measure TRAb to confirm Graves’ disease; hers is positive. Gritty eyes and a stare suggest thyroid eye disease."
    },
    {
     "h": "Control symptoms and check the heart",
     "t": "A beta-blocker such as propranolol eases palpitations and tremor (BNF: 10–40 mg three or four times daily; check for asthma first). Resting tachycardia with “skippy” beats needs an ECG; if AF is found, assess rate control and stroke risk (NICE NG196)."
    },
    {
     "h": "Definitive treatment",
     "t": "NICE NG145: consider an antithyroid drug with supportive treatment while waiting for specialist assessment. Carbimazole is the usual drug. Radioactive iodine is first-line definitive treatment for Graves’ unless an antithyroid drug is likely to give remission; surgery is an alternative."
    },
    {
     "h": "Carbimazole safety",
     "t": "BNF: warn about agranulocytosis — sore throat, mouth ulcers, fever or other infection means stop and get an urgent same-day blood count. MHRA (February 2019): risk of congenital malformations, so women who could become pregnant need effective contraception; and a risk of acute pancreatitis."
    },
    {
     "h": "Eyes and emergencies",
     "t": "Eye pain, double vision, reduced or colour-faded vision need urgent ophthalmology review. Smoking worsens eye disease. Thyroid storm (high fever, marked tachycardia, agitation, confusion, vomiting) is an emergency."
    },
    {
     "h": "The body-image trap",
     "t": "Patients praised for weight loss may resist treatment. Validate the feeling, be clear that this is catabolism affecting the heart and muscle, and set realistic expectations: weight tends to return towards her own baseline. Ask sensitively about eating and compensatory behaviours; if an eating disorder is suspected, follow NICE NG69."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Priya, I’m Dr Lee. Can you see and hear me OK? Before I go into the results, tell me how things have been.",
    "dom": "rto",
    "why": "Opens with her experience before the numbers"
   },
   {
    "who": "pt",
    "text": "My heart pounds, especially at night, and my hands shake so much a partner asked if I was hungover. The upside is I’ve dropped nearly a stone. Everyone says I look amazing. So is there a way to just sort the heart and leave the rest?"
   },
   {
    "who": "dr",
    "text": "I’ll answer that properly, I promise. Can I ask a few questions first, then explain the results and agree a plan together?",
    "dom": "gs",
    "why": "Acknowledges the request and sets a structure"
   },
   {
    "who": "pt",
    "text": "Sure."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me more about the pounding. Is it regular, or does it skip or flutter? Any chest pain, fainting or breathlessness?",
    "dom": "tasks",
    "why": "Screens for arrhythmia and cardiac compromise"
   },
   {
    "who": "pt",
    "text": "Sometimes it feels skippy at night. No chest pain, never fainted, not breathless."
   },
   {
    "who": "dr",
    "text": "What else has changed: heat, sweating, bowels, sleep, periods, mood?",
    "dom": "tasks",
    "why": "Completes the thyrotoxic symptom review"
   },
   {
    "who": "pt",
    "text": "Always hot, sweaty, loose stools, can’t sleep, snapping at everyone. Periods are lighter."
   },
   {
    "who": "dr",
    "text": "And your eyes? Any grittiness, pain, double vision or change in your sight? Do you smoke?",
    "dom": "tasks",
    "why": "Checks for thyroid eye disease and a modifiable risk"
   },
   {
    "who": "pt",
    "text": "Gritty, yes. No double vision. I don’t smoke."
   },
   {
    "who": "dr",
    "text": "Do you have asthma? And are you using any contraception at the moment?",
    "dom": "tasks",
    "why": "Checks before a beta-blocker and before carbimazole (MHRA 2019)"
   },
   {
    "who": "pt",
    "text": "No asthma. I’m on the pill."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said leave the rest. Can I ask what the weight loss has meant to you?",
    "dom": "rto",
    "why": "Explores the cue at the centre of the case"
   },
   {
    "who": "pt",
    "text": "I’ve fought my weight for years. For the first time people are complimenting me. I don’t want it all to come back."
   },
   {
    "who": "dr",
    "text": "That makes sense, and I’m not going to brush it aside. After a long fight, those compliments matter. Is anything about the heart side worrying you?",
    "dom": "rto",
    "why": "Validates without judgement and elicits her concern"
   },
   {
    "who": "pt",
    "text": "Honestly, yes. A colleague my age collapsed recently. The pounding at night scares me."
   },
   {
    "who": "dr",
    "text": "Thank you for being honest about both. Can I ask gently: over the years, have you ever skipped meals, made yourself sick, or used anything to control your weight?",
    "dom": "tasks",
    "why": "Screens sensitively for disordered eating before treatment"
   },
   {
    "who": "pt",
    "text": "I’ve done a lot of miserable diets. Never been sick or anything like that. I’m eating more than ever right now."
   },
   {
    "who": "dr",
    "text": "That fits with an overactive thyroid: eating more but still losing weight. I’m glad you told me about the diets, because it helps me understand why this part is hard.",
    "dom": "rto",
    "why": "Links her answer to the diagnosis and validates"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Your thyroid is in overdrive. It’s an immune condition called Graves’ disease. The racing heart and the weight loss are the same problem: your body is burning fuel far too fast, including muscle, and the heart is working flat out. So I can’t treat one and leave the other.",
    "dom": "tasks",
    "why": "Names Graves’ and reframes the weight loss as part of the illness"
   },
   {
    "who": "pt",
    "text": "I suppose I knew that, deep down."
   },
   {
    "who": "dr",
    "text": "Treating it won’t make you balloon. Your weight tends to settle back towards your own normal, gradually, and I’ll support you with that. I won’t pretend it isn’t a loss for you. But your heart matters more than the compliments.",
    "dom": "rto",
    "why": "Holds the line kindly and addresses the regain fear realistically"
   },
   {
    "who": "pt",
    "text": "OK. What happens now?"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Three things. First, an ECG in the next day or two to check the rhythm, and a tablet called propranolol today to slow your heart and settle the shaking. Second, an urgent referral to the thyroid specialists. Third, I’ll speak to them about starting carbimazole, which switches the overdrive off. Does that sound reasonable?",
    "dom": "tasks",
    "why": "ECG, beta-blocker, specialist referral and antithyroid drug (NICE NG145)"
   },
   {
    "who": "pt",
    "text": "Yes. Is carbimazole safe?"
   },
   {
    "who": "dr",
    "text": "Mostly, but two rules matter. Rarely it lowers the cells that fight infection, so a sore throat, mouth ulcers or fever means stop it and get a same-day blood test. And it can harm a baby, so keep taking your pill reliably and tell us straight away if you might be pregnant.",
    "dom": "tasks",
    "why": "Agranulocytosis rule and MHRA contraception advice"
   },
   {
    "who": "pt",
    "text": "Got it. Sore throat, stop and blood test."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you get chest pain, fainting, a very fast heartbeat with fever or confusion, call 999. For eye pain, double vision or blurred sight, contact us the same day. I’ll send the carbimazole rules in writing and see you in two weeks.",
    "dom": "gs",
    "why": "Named emergency triggers, eye red flags, written advice and dated follow-up"
   },
   {
    "who": "pt",
    "text": "Thanks. That’s more than I came in for."
   },
   {
    "who": "dr",
    "text": "When I see you, I want to hear about the heart and the shakes, and also how you’re feeling about your weight. Both matter. Can you tell me back the two rules for carbimazole?",
    "dom": "rto",
    "why": "Commits to follow up the body-image cost and checks understanding"
   },
   {
    "who": "pt",
    "text": "Sore throat or fever, stop and get a blood test. Keep taking the pill and tell you if I might be pregnant."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; heard the request to “leave the rest” without agreeing to it.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work as a solicitor, body-image history, the effect of compliments, a colleague’s collapse.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “leave the rest” and “everyone says I look amazing”, and explored them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (something overactive), concern (losing the weight loss; the heart), expectation (fix the heart only).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "ECG within days; eye symptoms checked; pregnancy status and contraception confirmed.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Graves’ disease (TRAb positive, eye signs) vs other causes; AF vs sinus tachycardia; possible disordered eating.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for AF, chest pain, syncope, thyroid storm and sight-threatening eye disease.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated Graves’ hyperthyroidism and that the weight loss is part of it, in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Propranolol after checking for asthma; urgent specialist referral; carbimazole discussed per NICE NG145 with MHRA safety advice.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Contraception reviewed for carbimazole; body-image distress acknowledged and followed up.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Agranulocytosis rule in writing, 999 triggers, eye red flags, review in two weeks.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Investigations & results",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Priya Sundaram",
    "age": "27 years · female",
    "pmh": [
     "Nil significant"
    ],
    "meds": [
     "Nil regular"
    ],
    "allergy": "NKDA",
    "recent": "⚠ TSH <0.01, FT4 38 pmol/L (high), FT3 high, TRAb positive. Resting pulse 104 regular. ~9 kg weight loss over 4 months “without trying”.",
    "reason": "Results follow-up. “Can we just sort the heart bit?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agenda",
     "d": "She opens with the bargain: fix the heart, keep the weight loss. Note it, don’t answer it yet."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Rhythm, chest pain, syncope, heat, bowels, sleep, periods, mood, eyes, smoking, asthma, contraception."
    },
    {
     "t": "4–6",
     "h": "ICE and body image",
     "d": "Ask what the weight loss means to her. Validate it. Find the fear about her heart."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Graves’; weight loss is part of the illness. ECG, propranolol, urgent referral, carbimazole with its safety rules."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 triggers, eye red flags, written carbimazole rules, review in two weeks including how she feels about her weight."
    }
   ],
   "wordPics": {
    "fail": "Treats only the palpitations; congratulates or ignores the weight loss; no ECG; no carbimazole warnings; never asks about contraception or eyes; or lectures her about vanity.",
    "pass": "Explains Graves’; offers a beta-blocker and ECG; refers to endocrinology; warns about sore throat on carbimazole; acknowledges her weight concern.",
    "exc": "All of the above, plus: reframes the weight loss as the illness without shaming; realistic reassurance about regain; checks asthma and contraception; eye and storm red flags; written advice; follow-up that includes her body image."
   },
   "avoid": [
    {
     "dont": "“Well, at least the weight loss is a silver lining.”",
     "instead": "“The weight loss and the racing heart are the same problem. Your body is burning itself too fast.”",
     "why": "Colluding makes treatment harder to accept and misses the danger."
    },
    {
     "dont": "“You shouldn’t care about your weight when your heart’s at risk.”",
     "instead": "“After years of fighting your weight, those compliments matter. I get that. Let’s protect your heart and I’ll help with the weight side too.”",
     "why": "Shaming loses her; validation brings her with you."
    },
    {
     "dont": "“Carbimazole is very safe, don’t worry.”",
     "instead": "“If you get a sore throat, ulcers or fever, stop it and get a same-day blood test.”",
     "why": "Omitting the agranulocytosis warning is a safety failure."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Body image",
     "t": "Years of dieting and weight struggle make the illness feel like a reward. Name it, don’t judge it, and follow it up; ask about eating behaviour if there are concerns."
    },
    {
     "h": "Work pressure",
     "t": "A junior solicitor embarrassed by tremor in meetings. Symptoms should settle within days of a beta-blocker; a short fit note is possible if she cannot work safely."
    }
   ],
   "legal": [
    {
     "h": "Driving",
     "t": "Whether she must tell the DVLA depends on complications, such as double vision from eye disease or an arrhythmia causing incapacity. Check DVLA Assessing fitness to drive if either develops."
    }
   ],
   "professional": [
    {
     "h": "Safe prescribing",
     "t": "MHRA (February 2019): carbimazole needs effective contraception in women who could become pregnant. Document the agranulocytosis warning and the written information given."
    },
    {
     "h": "Respecting autonomy",
     "t": "GMC Decision making and consent (2020): explain risks of not treating clearly; if she hesitates, keep the door open and document the discussion."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "British Thyroid Foundation, Thyroid Eye Disease Charitable Trust, and Beat if disordered eating is a concern."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Irregular palpitations, chest pain, syncope or breathlessness — ECG for AF or heart failure",
     "Fever, marked tachycardia, confusion, vomiting — possible thyroid storm, emergency",
     "Eye pain, double vision, reduced or colour-faded vision — urgent ophthalmology"
    ],
    "psychosocial": [
     "Body-image history and what the weight loss means to her",
     "Eating behaviour and any compensatory behaviours",
     "Work impact and stress; contraception and pregnancy plans"
    ],
    "ice": [
     "Idea: something is overactive and causing the heart symptoms",
     "Concern: losing the weight loss she values; underneath, fear for her heart",
     "Expectation: treat the heart, leave the rest"
    ]
   },
   "diagnosis": "Overt hyperthyroidism due to Graves’ disease (suppressed TSH, raised free T4 and T3, TRAb positive, eye symptoms) with resting tachycardia and 9 kg weight loss.",
   "diagnosisLay": "“Your thyroid is like an accelerator stuck to the floor. Everything runs too fast: heart, bowels, temper, and it burns through your body’s stores, including muscle. We need to take your foot off the pedal.”",
   "management": {
    "reflectIce": "“I can hear how much the compliments mean after years of fighting your weight. I won’t wave that away. But the weight loss and the racing heart are one problem, so we treat both.”",
    "psychosocial": "Validate the body-image loss; set realistic expectations about weight; follow up how she feels; ask about eating if concerned.",
    "sharedPlan": [
     "ECG within days; propranolol after checking for asthma (dose per BNF)",
     "Urgent endocrinology referral; carbimazole with supportive treatment while waiting (NICE NG145)",
     "Carbimazole counselling: agranulocytosis rule, contraception and pancreatitis (MHRA February 2019)"
    ],
    "safetyNet": [
     "999 for chest pain, fainting, or fast heart with fever or confusion; same day for eye pain or visual change",
     "Written carbimazole rules; review in two weeks including weight and mood"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Hyperthyroidism",
    "s": "Case walkthrough · NICE NG145",
    "href": "../cases/hyperthyroidism.html"
   },
   {
    "ic": "💠",
    "t": "Hyperthyroidism protocol",
    "s": "Carbimazole · beta-blocker · safety",
    "href": "management/hyperthyroidism.html"
   },
   {
    "ic": "🗺️",
    "t": "Palpitations pathway",
    "s": "Visual algorithm · ECG and red flags",
    "href": "algorithms/palpitations.html"
   },
   {
    "ic": "💠",
    "t": "Eating disorders",
    "s": "Recognition · NICE NG69",
    "href": "management/eating-disorders.html"
   }
  ],
  "pitfalls": {
   "intro": "The endocrinology here is standard. The station is failed by agreeing to “just sort the heart”, and by forgetting the carbimazole safety rules.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing propranolol and stopping there.",
     "why": "“Management plan not in line with current UK best practice.” Graves’ needs specialist referral and definitive treatment.",
     "fix": "Beta-blocker plus urgent referral, and discuss carbimazole in line with NICE NG145."
    },
    {
     "dom": "tasks",
     "fail": "No agranulocytosis warning or contraception check with carbimazole.",
     "why": "BNF and MHRA (February 2019) safety advice is mandatory.",
     "fix": "“Sore throat, ulcers or fever: stop and get a same-day blood test. Keep your contraception reliable.”"
    },
    {
     "dom": "tasks",
     "fail": "Missing the ECG despite “skippy” palpitations and a pulse of 104.",
     "why": "AF in thyrotoxicosis changes management and stroke risk.",
     "fix": "ECG within days; act on AF per NICE NG196."
    },
    {
     "dom": "rto",
     "fail": "Ignoring “leave the rest” or treating it as vanity.",
     "why": "“Does not identify or respond to the patient’s cues.” Her reluctance is the central problem.",
     "fix": "“What has the weight loss meant to you?” Validate before explaining."
    },
    {
     "dom": "rto",
     "fail": "Bargaining treatment away to keep her happy.",
     "why": "Unsafe; colluding with the illness puts her heart at risk.",
     "fix": "Hold the line kindly and offer support with the weight change."
    },
    {
     "dom": "gs",
     "fail": "Safety-net limited to “come back if it gets worse”.",
     "why": "Non-specific safety-netting is a standard failing feedback statement.",
     "fix": "Name storm, cardiac and eye triggers; give written carbimazole rules; book review."
    }
   ]
  }
 },
 "thyroid-hypo-young": {
  "stem": {
   "name": "Hana Yilmaz",
   "age": "31-year-old woman",
   "pmh": [
    "No significant past medical history"
   ],
   "meds": [
    "No regular medication",
    "Not using contraception"
   ],
   "allergy": "No known drug allergies",
   "recent": "Seen three weeks ago for tiredness, weight gain and cold intolerance. Bloods: TSH 22 mU/L, free T4 7.1 pmol/L (low), TPO antibodies strongly positive. FBC, ferritin, B12, coeliac screen and glucose normal.",
   "reason": "Video appointment to discuss blood results."
  },
  "knowledge": {
   "guideline": "NICE NG145 (thyroid disease) · RCOG Green-top Guideline: thyroid disorders in pregnancy (2025) · NICE NG247 (maternal and child nutrition) · NICE NG257 (fertility problems) · BNF",
   "summary": "Overt autoimmune hypothyroidism in a fit 31-year-old: start full weight-based levothyroxine. The consultation is really about 14 months of trying to conceive, so plan for pregnancy from day one.",
   "points": [
    {
     "h": "Name the diagnosis",
     "t": "Raised TSH with low free T4 is overt primary hypothyroidism. Positive TPO antibodies point to autoimmune (Hashimoto’s) thyroiditis. It explains the tiredness, weight gain, cold intolerance, constipation and heavier periods."
    },
    {
     "h": "Start at the right dose",
     "t": "NICE NG145: for adults under 65 with no history of cardiovascular disease, consider starting levothyroxine at 1.6 micrograms/kg/day, rounded to the nearest 25 micrograms. Low-and-slow starting is for older people or those with heart disease."
    },
    {
     "h": "How to take it",
     "t": "BNF: take once daily on an empty stomach, usually 30 minutes before breakfast. Iron and calcium supplements reduce absorption, so keep them several hours apart; this includes pregnancy multivitamins containing iron."
    },
    {
     "h": "Monitoring",
     "t": "NICE NG145: measure TSH every 3 months until stable (2 similar results in range 3 months apart), then yearly. TSH can take up to 6 months to settle after a very high level. Because she is trying to conceive, an earlier check to speed up titration is reasonable clinical judgement."
    },
    {
     "h": "Pregnancy planning",
     "t": "NICE NG145 does not cover pregnancy. RCOG 2025: a TSH of 0.5–2.5 mU/L is a reasonable target for women with hypothyroidism on levothyroxine; on a positive pregnancy test, increase the dose by 20–30% (or double the dose on two days each week) and check thyroid function promptly. Untreated hypothyroidism reduces fertility and harms pregnancy, so finding it is good news."
    },
    {
     "h": "Pre-conception care",
     "t": "NICE NG247: 400 micrograms folic acid daily when planning pregnancy and until 12 weeks. NICE NG257: after 1 year of unprotected intercourse without conception, offer both partners clinical assessment and investigation. At 14 months she qualifies now."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Hana, I’m Dr Lee. Can you hear and see me all right? I know the receptionist mentioned your thyroid. Before I go through the results, what have you made of it so far?",
    "dom": "rto",
    "why": "Starts with her understanding before giving information"
   },
   {
    "who": "pt",
    "text": "I googled it, so I’m half expecting you to say it explains why I feel like I’m wading through treacle. I just want to know whether there’s a tablet that gives me my life back."
   },
   {
    "who": "dr",
    "text": "That’s a good place to start. I’ll explain the results, talk about treatment, and make sure we cover anything else on your mind. Is there anything you want to be sure we get to?",
    "dom": "gs",
    "why": "Sets the agenda and invites other concerns early"
   },
   {
    "who": "pt",
    "text": "No, just that really."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me how things have been over the last few months.",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "Exhausted, all the time. I’ve put on five kilos without eating any differently. I wear a coat in the office. My skin’s dry, I’m constipated, and my brain’s just foggy."
   },
   {
    "who": "dr",
    "text": "How have your periods been, and your mood?",
    "dom": "tasks",
    "why": "Completes the hypothyroid symptom review and opens a door"
   },
   {
    "who": "pt",
    "text": "Heavier. And my mood’s been low. It’s… there’s just a lot going on."
   },
   {
    "who": "dr",
    "text": "You said you want your life back. I had a feeling there might be more riding on this than the tiredness. Is there something else you’re hoping it explains?",
    "dom": "rto",
    "why": "Picks up the cue behind “life back” and the pause"
   },
   {
    "who": "pt",
    "text": "We’ve been trying for a baby for fourteen months. Nothing. I’ve decided it’s me. Look at the state of me."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Thank you for telling me. That changes what today is about. What have you read about the thyroid and pregnancy?",
    "dom": "rto",
    "why": "Receives the disclosure as the main agenda and explores her ideas"
   },
   {
    "who": "pt",
    "text": "Forums. That it stops you getting pregnant, and even if you do, it causes miscarriages. I haven’t told my husband how much this is eating me. I cry in the car."
   },
   {
    "who": "dr",
    "text": "That’s a lot to carry on your own. What would you most like to come out of today?",
    "dom": "rto",
    "why": "Acknowledges the burden and elicits expectations"
   },
   {
    "who": "pt",
    "text": "To know if this is why. And whether it’s my fault."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Your thyroid, the gland in your neck that sets your body’s pace, is running slow because your immune system has been attacking it. It’s called Hashimoto’s. It’s common, and it’s very treatable with a daily tablet that replaces the missing hormone.",
    "dom": "tasks",
    "why": "Clear, jargon-free explanation of autoimmune hypothyroidism"
   },
   {
    "who": "pt",
    "text": "So is it why I’m not pregnant?"
   },
   {
    "who": "dr",
    "text": "It may well be part of it. An underactive thyroid can make conceiving harder and can affect a pregnancy. That’s why this is good news: we’ve found something real and fixable. It isn’t your fault, and it isn’t your body being broken. It’s a hormone level, and we can correct it.",
    "dom": "tasks",
    "why": "Links hypothyroidism to fertility honestly and reframes the self-blame"
   },
   {
    "who": "pt",
    "text": "I didn’t expect to feel relieved."
   },
   {
    "who": "dr",
    "text": "Can I check you’re not pregnant at the moment, as far as you know? When was your last period?",
    "dom": "tasks",
    "why": "Checks current pregnancy status before planning the dose"
   },
   {
    "who": "pt",
    "text": "Two weeks ago. I did a test last week anyway. Negative. I always do."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’d like to start levothyroxine today at a full dose based on your weight. Take it first thing on an empty stomach, half an hour before breakfast, and keep it apart from any iron or calcium. The fog and the cold should ease over a few weeks, not overnight. I’ll check your level in about six weeks so we can adjust it quickly, because you’re planning a pregnancy.",
    "dom": "tasks",
    "why": "Correct starting dose, administration, realistic timescale and early review"
   },
   {
    "who": "pt",
    "text": "OK. And do I stop trying until it’s sorted?"
   },
   {
    "who": "dr",
    "text": "Ideally we get the level into range first, and we can talk about that together. What matters most is this: the moment you have a positive test, ring us that day. We’ll increase the dose straight away and check your bloods, because a baby needs more thyroid hormone early on. Start folic acid today too.",
    "dom": "tasks",
    "why": "Pregnancy dose-increase rule and folic acid"
   },
   {
    "who": "pt",
    "text": "I can do that."
   },
   {
    "who": "dr",
    "text": "Fourteen months is also long enough for you and your husband to have fertility checks, alongside treating the thyroid. I can start those. And I wonder whether he’d want to share some of this with you.",
    "dom": "rto",
    "why": "Offers fertility assessment and gently addresses sharing the load"
   },
   {
    "who": "pt",
    "text": "He would. I’ve just been putting a brave face on. I’ll tell him tonight."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you get palpitations, shakiness or chest pain after starting, let me know, as the dose may be too high. I’ll book your blood test and a review, and send the fertility test forms. Can you tell me back the main points, so I know I’ve explained well?",
    "dom": "gs",
    "why": "Safety-net for over-replacement, dated follow-up and teach-back"
   },
   {
    "who": "pt",
    "text": "Tablet every morning before breakfast, folic acid, bloods in six weeks. Positive test, I ring you the same day. And tests for both of us."
   },
   {
    "who": "dr",
    "text": "Perfect. You came in for a tablet, and you’re leaving with a plan for the thing that matters most to you.",
    "dom": "rto",
    "why": "Summarises and ties the plan to her agenda"
   },
   {
    "who": "pt",
    "text": "Thank you. Honestly."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Asked what she already understood; invited other concerns early.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work, relationship, 14 months trying to conceive, crying alone, what she has not told her husband.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “give me my life back”, the pause and “look at the state of me”, and explored them.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (thyroid explains everything, maybe infertility), concern (it’s her fault, miscarriage), expectation (a tablet).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Repeat TSH to titrate, earlier because she is trying to conceive; fertility assessment for both partners (NICE NG257).",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Autoimmune primary hypothyroidism; other causes of fatigue already excluded (FBC, ferritin, B12, coeliac, glucose).",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about mood; recognised the pregnancy risk of untreated hypothyroidism.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated Hashimoto’s hypothyroidism in plain words, linked to her symptoms and fertility.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Full weight-based levothyroxine (NICE NG145); how to take it; folic acid; dose increase and bloods on a positive test (RCOG 2025).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Fertility assessment for both partners; iron-containing supplements kept apart from levothyroxine.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Blood test and review booked; over-replacement symptoms; ring the same day on a positive test.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Investigations & results"
   ],
   "stem": {
    "name": "Hana Yilmaz",
    "age": "31 years · female",
    "pmh": [
     "Nil significant"
    ],
    "meds": [
     "Nil regular",
     "No contraception"
    ],
    "allergy": "NKDA",
    "recent": "⚠ TSH 22 mU/L, FT4 7.1 pmol/L (low), TPO antibodies strongly positive. FBC, ferritin, B12, coeliac, glucose normal.",
    "reason": "Results follow-up. “Is there a tablet that gives me my life back?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agenda",
     "d": "Ask what she has made of the result. Invite anything else she wants to cover."
    },
    {
     "t": "1–4",
     "h": "Symptoms and the cue",
     "d": "Tiredness, weight, cold, periods, mood. “Give me my life back” carries more weight; ask what else it might explain."
    },
    {
     "t": "4–6",
     "h": "ICE and self-blame",
     "d": "Fourteen months trying, forum fears, crying alone. Receive it as the real consultation."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Hashimoto’s, treatable; good news for fertility. Full-dose levothyroxine, how to take it, folic acid, positive-test rule, fertility checks for both."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Blood test booked, over-replacement symptoms, same-day call on a positive test, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes 25 micrograms and closes; never asks why she is so desperate for her life back; misses the conception story; no pregnancy advice; or lectures on fertility statistics without addressing her self-blame.",
    "pass": "Explains Hashimoto’s; starts levothyroxine correctly with a follow-up test; finds the conception agenda; advises folic acid and to contact the surgery if pregnant.",
    "exc": "All of the above, plus: reframes the diagnosis as fixable good news for fertility; lifts the blame; clear positive-test rule with dose increase; fertility assessment for both partners; encourages her to share the load with her husband; teach-back."
   },
   "avoid": [
    {
     "dont": "“Your thyroid’s a bit underactive. I’ll start a small dose and we’ll see.”",
     "instead": "“This is Hashimoto’s. It’s common and very treatable. I’ll start a full dose based on your weight.”",
     "why": "Low-and-slow starting is for older or cardiac patients; it delays her recovery and her pregnancy plans."
    },
    {
     "dont": "“Don’t worry about fertility, lots of people take a while.”",
     "instead": "“This may well be part of why. That’s good news, because it’s fixable, and it isn’t your fault.”",
     "why": "Generic reassurance ignores the self-blame she came in carrying."
    },
    {
     "dont": "“Come back when you’re pregnant.”",
     "instead": "“The moment you have a positive test, ring us that day. We’ll increase the dose and check your bloods.”",
     "why": "Delay in increasing the dose in early pregnancy is the key safety failure."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Hidden infertility distress",
     "t": "Fourteen months of trying, self-blame and crying alone. Relationship strain and low mood are common; ask about both and encourage shared support."
    },
    {
     "h": "Work",
     "t": "An accounts manager with brain fog. Recovery is gradual; she may want to adjust workload for a few weeks while treatment takes effect."
    }
   ],
   "legal": [
    {
     "h": "Prescription charges",
     "t": "In England, hypothyroidism needing thyroid hormone replacement qualifies for a medical exemption certificate. Pregnancy brings a separate maternity exemption."
    }
   ],
   "professional": [
    {
     "h": "Shared decisions",
     "t": "GMC Decision making and consent (2020): discuss the choice about trying to conceive while the dose is being optimised, and record her decision."
    },
    {
     "h": "Evidence-based reassurance",
     "t": "Give facts that answer her fear: autoimmune thyroid disease is not caused by anything she did, and treatment improves fertility and pregnancy outcomes."
    }
   ],
   "community": [
    {
     "h": "Patient resources",
     "t": "British Thyroid Foundation for information on levothyroxine and pregnancy; Fertility Network UK for support; NHS Talking Therapies if low mood persists."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Possible pregnancy now — needs same-day dose increase and thyroid function tests",
     "Chest pain or known heart disease — would change the starting dose",
     "Marked low mood or hopelessness — screen, given the infertility distress"
    ],
    "psychosocial": [
     "Trying to conceive for 14 months; self-blame and forum fears",
     "What she has shared with her husband",
     "Impact of fog and fatigue on work"
    ],
    "ice": [
     "Idea: her thyroid explains the exhaustion and maybe why she isn’t pregnant",
     "Concern: it’s her fault; infertility or miscarriage even once treated",
     "Expectation: a tablet to give her life back"
    ]
   },
   "diagnosis": "Overt primary hypothyroidism due to autoimmune (Hashimoto’s) thyroiditis — TSH 22 mU/L, free T4 low, TPO antibodies positive — in a woman trying to conceive for 14 months.",
   "diagnosisLay": "“Your thyroid is like the thermostat for your body’s engine. Your immune system has turned it down. A daily tablet turns it back up. And getting it right helps your chances of pregnancy too.”",
   "management": {
    "reflectIce": "“You’ve been blaming yourself for not getting pregnant. This is your immune system, not anything you did, and it’s one of the most fixable things we find.”",
    "psychosocial": "Encourage her to share the worry with her husband; offer fertility assessment for both partners; check mood at review.",
    "sharedPlan": [
     "Levothyroxine 1.6 micrograms/kg/day rounded to 25 micrograms (NICE NG145), taken fasting, apart from iron and calcium",
     "Folic acid 400 micrograms daily (NICE NG247); positive test: increase dose 20–30% and urgent TFTs (RCOG 2025)",
     "Fertility assessment and investigation for both partners (NICE NG257)"
    ],
    "safetyNet": [
     "Palpitations, tremor or chest pain after starting: contact the surgery",
     "TSH check booked (earlier than the routine 3 months while trying to conceive); ring the same day on a positive test"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Hypothyroidism",
    "s": "Case walkthrough · NICE NG145",
    "href": "../cases/hypothyroidism.html"
   },
   {
    "ic": "💠",
    "t": "Hypothyroidism protocol",
    "s": "Levothyroxine dosing · monitoring",
    "href": "management/hypothyroidism.html"
   },
   {
    "ic": "💠",
    "t": "Thyroid disease in pregnancy",
    "s": "Pre-conception · dose increase",
    "href": "management/thyroid-pregnancy.html"
   },
   {
    "ic": "💠",
    "t": "Infertility",
    "s": "Assessment · referral",
    "href": "management/infertility.html"
   }
  ],
  "pitfalls": {
   "intro": "The thyroid part of this station is easy. It is failed by treating a tiredness appointment as just that, and by missing the pregnancy safety rule.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Starting 25 micrograms “to be safe” in a fit 31-year-old.",
     "why": "NICE NG145 recommends a full weight-based starting dose in adults under 65 without heart disease.",
     "fix": "1.6 micrograms/kg/day, rounded to the nearest 25 micrograms."
    },
    {
     "dom": "tasks",
     "fail": "No advice about what to do if she becomes pregnant.",
     "why": "“Management plan not in line with current UK best practice.” Thyroid hormone need rises early in pregnancy.",
     "fix": "“Positive test: ring us that day. We’ll increase the dose and check your bloods.”"
    },
    {
     "dom": "tasks",
     "fail": "Ignoring 14 months of trying to conceive once it is disclosed.",
     "why": "NICE NG257: after 1 year, offer both partners assessment and investigation.",
     "fix": "Offer fertility tests for both partners now, alongside treating the thyroid."
    },
    {
     "dom": "rto",
     "fail": "Handing over a prescription without asking what “give me my life back” means.",
     "why": "“Does not identify or respond to the patient’s cues.” The real agenda stays hidden.",
     "fix": "“It sounds like there’s more riding on this. Is there anything else you hope it explains?”"
    },
    {
     "dom": "rto",
     "fail": "Brushing past “look at the state of me”.",
     "why": "Self-blame drives her distress; leaving it unaddressed loses Relating marks.",
     "fix": "“This is your immune system, not your fault.”"
    },
    {
     "dom": "gs",
     "fail": "Jargon: “TPO-positive autoimmune thyroiditis with TSH 22; we’ll titrate to a target.”",
     "why": "“Language not easily understood by the patient.”",
     "fix": "“Your immune system has slowed your thyroid. A daily tablet replaces what it isn’t making.”"
    }
   ]
  }
 },
 "thyroid-subclin-preg": {
  "stem": {
   "name": "Aoife Brennan",
   "age": "34-year-old woman",
   "pmh": [
    "Currently about 6 weeks pregnant (spontaneous conception)",
    "Two previous first-trimester miscarriages (8 and 10 weeks), not investigated"
   ],
   "meds": [
    "Pregnancy multivitamin with folic acid (over the counter)"
   ],
   "allergy": "No known drug allergies",
   "recent": "Booking bloods: TSH 5.8 mU/L, free T4 11.9 pmol/L (low end of normal), TPO antibodies positive. No previous thyroid tests on record. Midwife letter sent advising GP review.",
   "reason": "Telephone call requested today. Reception note: “very upset about thyroid result”."
  },
  "knowledge": {
   "guideline": "RCOG Green-top Guideline No. 76 (2025, thyroid disorders in pregnancy) · RCOG Green-top Guideline No. 17 (2023, recurrent miscarriage) · NICE NG126 · NICE CG192",
   "summary": "A TSH above 4.0 mU/L in the first trimester with positive TPO antibodies is mild subclinical hypothyroidism. Confirm it quickly, involve the antenatal thyroid team, and expect to offer levothyroxine. NICE NG145 does not cover thyroid disease in pregnancy, so non-pregnant rules do not apply.",
   "points": [
    {
     "h": "Pregnancy thresholds",
     "t": "RCOG GTG 76 (2025): use the laboratory’s pregnancy range; where there is none, take 4.0 mU/L as the upper limit of TSH. Her TSH of 5.8 with a normal free T4 is mild subclinical hypothyroidism (TSH below 10)."
    },
    {
     "h": "Confirm, then consider treatment",
     "t": "RCOG GTG 76 (2025): for mild subclinical hypothyroidism found in the first trimester, repeat TFTs within 3 weeks, because many results normalise. If it is confirmed, levothyroxine can be considered, especially when TPO antibodies are positive, aiming for TSH 2.5 mU/L or less. TSH above 10 mU/L in pregnancy is a clear indication to treat."
    },
    {
     "h": "Monitoring",
     "t": "RCOG GTG 76 (2025): check TSH and free T4 every 4–6 weeks until 20 weeks in women taking levothyroxine. Dose per BNF, agreed with the antenatal endocrine or obstetric medicine team. Levothyroxine should be taken apart from iron- or calcium-containing supplements, which reduce absorption (BNF)."
    },
    {
     "h": "Miscarriage: what can honestly be said",
     "t": "Thyroid autoimmunity is associated with miscarriage, but past losses cannot be attributed to it after the event. RCOG GTG 76 (2025) does not recommend levothyroxine for euthyroid TPO-positive women with recurrent miscarriage, so treatment here is for her subclinical hypothyroidism, not a guaranteed protection against loss."
    },
    {
     "h": "Two previous losses",
     "t": "RCOG GTG 17 (2023) defines recurrent miscarriage as three or more first-trimester losses, but supports further evaluation after two where clinically appropriate. She should be told this, offered early pregnancy support, and referred for assessment rather than told it was “bad luck”."
    },
    {
     "h": "Bleeding in this pregnancy",
     "t": "NICE NG126: refer to the early pregnancy assessment service for bleeding or pain. Women with vaginal bleeding and a previous miscarriage, once an intrauterine pregnancy is confirmed on scan, are offered vaginal micronised progesterone 400 mg twice daily, continued to 16 completed weeks if a heartbeat is seen."
    },
    {
     "h": "Her mental health",
     "t": "NICE CG192: ask about depression and anxiety at the first contact in pregnancy (Whooley questions and GAD-2). Guilt, catastrophising and sleeplessness after previous losses need a plan of their own."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Aoife? It’s Dr Lee from the surgery. I can hear you’re really upset. Before anything else — are you somewhere you can talk for ten minutes, and is anyone with you?",
    "dom": "rto",
    "why": "Checks safety and privacy on the phone and names the distress first"
   },
   {
    "who": "pt",
    "text": "I’m at home. Sorry. The letter said my thyroid isn’t right and I read that it causes miscarriage and I’ve lost two already — did my thyroid kill them? Is it happening again?"
   },
   {
    "who": "dr",
    "text": "You don’t need to apologise. You’ve been up all night with a frightening letter and two losses behind you. I promise I’ll answer that question properly. Can I ask a few things first, so my answer is honest and about you, and then we’ll make a clear plan together?",
    "dom": "gs",
    "why": "Holds the question, sets an agenda and signals the plan"
   },
   {
    "who": "pt",
    "text": "Okay. Yes."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "First, how are you right now in the pregnancy — any bleeding, any tummy or pelvic pain?",
    "dom": "tasks",
    "why": "Excludes an acute early-pregnancy problem before anything else"
   },
   {
    "who": "pt",
    "text": "No. Nothing like that. Just tired, and a bit sick in the mornings."
   },
   {
    "who": "dr",
    "text": "That’s good to hear. And before this pregnancy, did you ever feel particularly cold, sluggish, put on weight or have dry skin? Has anyone in your family had thyroid problems, or conditions like type 1 diabetes or coeliac disease?",
    "dom": "tasks",
    "why": "Screens for overt hypothyroidism and autoimmune clustering"
   },
   {
    "who": "pt",
    "text": "Not really. Not that I know of in the family."
   },
   {
    "who": "dr",
    "text": "Thank you. Can you tell me a little about the two miscarriages? When they happened and what you were told?",
    "dom": "rto",
    "why": "Invites her story of the losses, not just dates"
   },
   {
    "who": "pt",
    "text": "Eight weeks, then ten weeks, about a year apart. They just said it was bad luck, it’s common. Nobody tested anything."
   },
   {
    "who": "dr",
    "text": "And what vitamins or tablets are you taking at the moment?"
   },
   {
    "who": "pt",
    "text": "Just the pregnancy multivitamin with folic acid."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said a moment ago ‘did my thyroid kill them’. That’s a heavy question to have been carrying. What’s been going through your mind overnight?",
    "dom": "rto",
    "why": "Follows the guilt cue explicitly"
   },
   {
    "who": "pt",
    "text": "(Crying.) Everyone says these things just happen. But two? That’s not luck, that’s me. My body keeps failing them. And now it’s going to fail this one too."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me that. Can I ask — have you been able to say any of this to your husband?",
    "dom": "rto",
    "why": "Explores support and the private weight of self-blame"
   },
   {
    "who": "pt",
    "text": "Not really. He’s just so happy. I didn’t want to spoil it."
   },
   {
    "who": "dr",
    "text": "So you’ve been holding this on your own. And what were you hoping I could do for you today?",
    "dom": "rto",
    "why": "Elicits her expectation before explaining"
   },
   {
    "who": "pt",
    "text": "Tell me what to do. I’ll do anything. I just want this baby to be okay."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me take your real question first. I can’t look back and tell you what caused losses a year or two ago — nobody honestly can, and I won’t pretend. What I can tell you is that miscarriage is very common and is almost never caused by anything a woman did. And a thyroid that runs a bit slow is your immune system, not a failing and not a choice. This is not you.",
    "dom": "tasks",
    "why": "Answers the causation question honestly and dismantles self-blame"
   },
   {
    "who": "pt",
    "text": "(Quiet.) Okay."
   },
   {
    "who": "dr",
    "text": "Now the result. Pregnancy changes the numbers. Outside pregnancy, your level would be called borderline and we’d often just watch it. In early pregnancy we want the thyroid working a bit harder, and your antibodies are positive — so yours is a result we take seriously and act on.",
    "dom": "tasks",
    "why": "Interprets the result in pregnancy context, not by non-pregnant thresholds"
   },
   {
    "who": "pt",
    "text": "So it’s bad?"
   },
   {
    "who": "dr",
    "text": "It’s mild, and it’s treatable. The guidance for pregnancy is to repeat the test quickly first, because sometimes a single result settles on its own. So I’d like you to have the repeat blood test tomorrow morning. I’ll also speak to the antenatal thyroid team at the hospital today. If the repeat confirms it, which I think is likely, the usual step is a small daily thyroid tablet called levothyroxine, which is safe in pregnancy.",
    "dom": "tasks",
    "why": "Confirms within days and involves the antenatal endocrine team, per RCOG GTG 76"
   },
   {
    "who": "pt",
    "text": "Why not just start it today? I don’t want to wait."
   },
   {
    "who": "dr",
    "text": "That’s a fair question. We’re talking days, not weeks, and at six weeks that short wait makes no difference to the baby. It just makes sure we’re treating a real result. If the tablet starts, we recheck your levels every four to six weeks and adjust, so it stays where this pregnancy needs it.",
    "dom": "rto",
    "why": "Explains the reason for waiting and addresses the urge for action"
   },
   {
    "who": "pt",
    "text": "Okay. If it’s only a few days."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "There’s something else I want to do. Two losses deserve more than ‘bad luck’. I’ll refer you to the early pregnancy team so you have a named place to call, and ask the specialists about further assessment of the previous miscarriages. Would that feel helpful?",
    "dom": "tasks",
    "why": "Takes the two previous losses seriously and plans assessment"
   },
   {
    "who": "pt",
    "text": "Yes. Nobody’s ever offered that."
   },
   {
    "who": "dr",
    "text": "One practical thing: if the tablet starts, take it on its own first thing, and keep your pregnancy vitamin for later in the day, because the iron in it stops the thyroid tablet being absorbed properly.",
    "dom": "tasks",
    "why": "Practical prescribing advice on absorption"
   },
   {
    "who": "pt",
    "text": "Right. I’ll write that down."
   },
   {
    "who": "dr",
    "text": "And Aoife — how are you sleeping and coping generally? Over the last month, have you felt down or hopeless, or unable to stop worrying?",
    "dom": "tasks",
    "why": "Screens for perinatal anxiety and depression (NICE CG192)"
   },
   {
    "who": "pt",
    "text": "Worried all the time. Not hopeless. Just scared."
   },
   {
    "who": "dr",
    "text": "That makes sense after what you’ve been through. I’d like to talk to you again next week with the results, and the midwife can link you to support if the worry keeps you from sleeping. Would you consider telling your husband some of what you told me? You don’t have to carry this alone.",
    "dom": "rto",
    "why": "Plans support and gently encourages sharing with her partner"
   },
   {
    "who": "pt",
    "text": "Maybe. I think I will."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Before we finish: if you get bleeding, or pain low in your tummy or in your shoulder tip, ring the early pregnancy unit — I’ll text you the number now. Heavy bleeding, feeling faint or severe pain is 999. I’ll ring you myself with the repeat result.",
    "dom": "gs",
    "why": "Specific safety-net with named routes and a promised call-back"
   },
   {
    "who": "pt",
    "text": "Thank you. I feel like I can breathe a bit."
   },
   {
    "who": "dr",
    "text": "When your husband asks tonight what the doctor said, what will you tell him?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "That it wasn’t my fault. Blood test tomorrow, probably a tablet, the pregnancy team will see me, and ring them if I bleed."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Slowed the call, acknowledged her distress and the two losses, and held the causation question until she had been heard.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Husband unaware of her guilt; sleep, isolation and catastrophising; family history of thyroid disease; much-wanted pregnancy.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Followed “did my thyroid kill them?” and “that’s not luck, that’s me”, and returned to both explicitly.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (her thyroid caused the losses), concern (guilt and fear of a third loss), expectation (to be told what to do, and absolution).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Repeat TFTs within days (within 3 weeks per RCOG GTG 76); no examination needed by phone; current bleeding or pain checked; mood screen (NICE CG192).",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Mild subclinical hypothyroidism vs transient result vs evolving overt hypothyroidism; thyroid autoimmunity; other causes of recurrent loss.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about bleeding and pain now; gave EPAU and 999 routes; noted TSH above 10 would change urgency.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named it plainly: mild underactive thyroid in pregnancy with positive antibodies, mild and treatable, not a cause of past losses that can be proven.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Repeat TFTs, same-day discussion with the antenatal thyroid team, levothyroxine if confirmed with TSH aim 2.5 or less, TFTs every 4–6 weeks.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Advised separating levothyroxine from the iron-containing vitamin; referral to early pregnancy services and assessment of previous losses.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "EPAU number for bleeding or pain; 999 for heavy bleeding, faintness or severe pain; GP call with results next week; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Aoife Brennan",
    "age": "34 years · female",
    "pmh": [
     "Pregnant — about 6 weeks (booking completed)",
     "Miscarriage ×2 (8 and 10 weeks), no investigations recorded"
    ],
    "meds": [
     "Pregnancy multivitamin with folic acid (OTC)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Booking bloods: TSH 5.8 mU/L, free T4 11.9 pmol/L, TPO antibodies positive. No previous TFTs on file. Midwife letter asks GP to review.",
    "reason": "Telephone appointment. Reception note: “crying, wants to know about her thyroid”."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Settle the call",
     "d": "She opens in tears with “did my thyroid kill them?”. Slow down, check she can talk, promise to answer it, set a short agenda."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Bleeding or pain now, thyroid symptoms, family history of thyroid disease, the story of the two losses, current supplements."
    },
    {
     "t": "4–6",
     "h": "ICE and the guilt",
     "d": "Let her say “that’s not luck, that’s me”. Ask about her husband and what she hopes for. Do not explain yet."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Honest causation answer, lift the blame, pregnancy thresholds, repeat TFTs within days, antenatal thyroid team, levothyroxine if confirmed, assessment of previous losses."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "EPAU for bleeding or pain, 999 for heavy bleeding or collapse, GP call with results, mood follow-up, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Leads with numbers at a sobbing patient; applies non-pregnant rules (“borderline, we’ll recheck in six months”); or confirms her fear (“yes, thyroid problems cause miscarriage”); no bleeding check, no pregnancy-specific plan, no safety-net.",
    "pass": "Acknowledges the distress, recognises the result means something different in pregnancy, arranges prompt repeat TFTs and specialist input with levothyroxine likely, gives EPAU advice and follow-up.",
    "exc": "All of the above, plus: answers “did my thyroid kill them?” with careful honesty; lifts the self-blame explicitly; plans assessment of the previous losses; screens her mood; explains why a few days’ wait is safe; she leaves with a concrete plan and the words to tell her husband."
   },
   "avoid": [
    {
     "dont": "“Yes, an underactive thyroid can cause miscarriage, so that may explain your losses.”",
     "instead": "“Nobody can look back and say what caused those losses. What we can do is treat what we’ve found in this pregnancy.”",
     "why": "It confirms her guilt with a causal claim the evidence does not support."
    },
    {
     "dont": "“It’s only borderline — we’ll recheck in a few months.”",
     "instead": "“In pregnancy we aim lower, and your antibodies are positive, so we’ll repeat it this week and act on it.”",
     "why": "Non-pregnant thresholds do not apply; NICE NG145 does not cover pregnancy."
    },
    {
     "dont": "“Try not to worry, most pregnancies are fine.”",
     "instead": "“I can’t promise you this pregnancy, but I can promise you won’t go through it guessing or alone.”",
     "why": "Generic reassurance ignores two losses and sounds dismissive; honest partnership lands."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Grief, guilt and isolation",
     "t": "Previous losses leave unresolved grief that resurfaces in the next pregnancy. She is hiding her self-blame from her husband; naming it and encouraging her to share it reduces isolation."
    },
    {
     "h": "Work and appointments",
     "t": "Extra blood tests and early pregnancy visits need time off. Explore her work situation so monitoring every 4–6 weeks is realistic."
    }
   ],
   "legal": [
    {
     "h": "Antenatal time off",
     "t": "Pregnant employees have a statutory right to reasonable paid time off for antenatal care (Employment Rights Act 1996), which covers appointments made on medical advice."
    },
    {
     "h": "Free prescriptions",
     "t": "In England, pregnant women can apply for a maternity exemption certificate (via the midwife or GP), so levothyroxine and other prescriptions are free during pregnancy and for 12 months after the birth."
    }
   ],
   "professional": [
    {
     "h": "Honesty without false reassurance",
     "t": "GMC Good Medical Practice (2024): be honest and give information patients can understand. Do not overclaim that treatment will prevent miscarriage, and do not confirm a causal link that cannot be proven."
    },
    {
     "h": "Prescribing outside your usual range",
     "t": "Thyroid treatment in pregnancy is usually agreed with the antenatal endocrine or obstetric medicine team. Seek advice the same day and document the plan, the result and who is responsible for monitoring."
    }
   ],
   "community": [
    {
     "h": "Support after pregnancy loss",
     "t": "The Miscarriage Association and Tommy’s offer helplines and information on pregnancy after loss; the British Thyroid Foundation has information on thyroid disease in pregnancy. Early pregnancy units provide direct access for bleeding or pain."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Vaginal bleeding, lower abdominal or shoulder-tip pain in early pregnancy — EPAU, or 999 if heavy bleeding, faintness or severe pain (NICE NG126)",
     "Symptoms of overt hypothyroidism, or TSH above 10 mU/L — treat without delay (RCOG GTG 76, 2025)",
     "Hopelessness, inability to function or thoughts of self-harm — urgent perinatal mental health assessment (NICE CG192)"
    ],
    "psychosocial": [
     "Carrying self-blame alone; husband unaware of how she feels",
     "Sleep deprivation and catastrophising after reading online",
     "Two previous losses never discussed or investigated"
    ],
    "ice": [
     "Idea: “My thyroid killed my babies, and it’s happening again.”",
     "Concern: guilt that her body has failed two babies, and terror of a third loss",
     "Expectation: to be told what to do today — and, underneath, that it is not her fault"
    ]
   },
   "diagnosis": "Mild subclinical hypothyroidism in the first trimester (TSH 5.8 mU/L above the RCOG pregnancy threshold of 4.0, normal free T4) with positive TPO antibodies, to be confirmed by repeat TFTs within 3 weeks; two previous first-trimester miscarriages not yet assessed; significant pregnancy-related anxiety and self-blame.",
   "diagnosisLay": "“Your thyroid is running a little slow, and your immune system is the reason. Pregnancy asks the thyroid to work harder, so we want your level lower than usual. It’s mild, it’s treatable, and it is not something you did.”",
   "management": {
    "reflectIce": "“You asked if your thyroid killed your babies, and you said ‘that’s not luck, that’s me’. It isn’t you. Nobody can say what caused those losses, but we can act on what we’ve found now.”",
    "psychosocial": "Encourage her to share the fear with her husband; mood screen (Whooley and GAD-2); link to the midwife and Miscarriage Association; a named person to call.",
    "sharedPlan": [
     "Repeat TFTs this week; same-day advice from the antenatal endocrine or obstetric medicine team (RCOG GTG 76, 2025)",
     "Levothyroxine if confirmed, aiming for TSH 2.5 mU/L or less; TFTs every 4–6 weeks to 20 weeks; take apart from the iron-containing vitamin",
     "Early pregnancy support and referral for assessment of the previous losses (RCOG GTG 17, 2023)"
    ],
    "safetyNet": [
     "Bleeding or pain — EPAU (number given); heavy bleeding, faintness or severe pain — 999",
     "GP phones with the repeat result; review of mood and coping next week"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Thyroid disease in pregnancy",
    "s": "Protocol · RCOG GTG 76",
    "href": "management/thyroid-pregnancy.html"
   },
   {
    "ic": "💠",
    "t": "Hypothyroidism and subclinical hypothyroidism",
    "s": "Protocol · outside pregnancy (NICE NG145)",
    "href": "management/hypothyroidism.html"
   },
   {
    "ic": "📋",
    "t": "Hypothyroidism",
    "s": "Case walkthrough · NICE NG145",
    "href": "../cases/hypothyroidism.html"
   },
   {
    "ic": "🗺️",
    "t": "Vaginal bleeding in pregnancy",
    "s": "Visual algorithm · NICE NG126",
    "href": "algorithms/vaginal-bleeding-pregnancy.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed in two opposite ways: treating it as a routine borderline TSH, or answering her grief with endocrinology. The marks sit in reading the result in pregnancy and in meeting the guilt honestly.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Applying non-pregnant rules: “TSH under 10, no treatment, recheck in three months.”",
     "why": "“Management plan not in line with current UK best practice.” NICE NG145 does not cover pregnancy; RCOG GTG 76 (2025) uses a 4.0 mU/L threshold and supports treatment when confirmed, especially with positive antibodies.",
     "fix": "Say out loud that pregnancy changes the numbers, repeat TFTs within days, and get antenatal thyroid advice the same day."
    },
    {
     "dom": "tasks",
     "fail": "Telling her the thyroid probably caused her miscarriages, or that levothyroxine will stop another.",
     "why": "It overclaims the evidence and confirms her guilt. Past losses cannot be attributed after the event, and treatment is not a guarantee.",
     "fix": "“Nobody can say what caused those losses. What we can do is treat what we’ve found now, and make sure you’re properly looked after.”"
    },
    {
     "dom": "rto",
     "fail": "Launching into TSH and antibodies while she is still sobbing.",
     "why": "“Does not respond to the patient’s emotional state.” She cannot take in numbers until she feels heard.",
     "fix": "Slow the call, check she is safe to talk, name the losses and the frightening letter, then agree an agenda."
    },
    {
     "dom": "rto",
     "fail": "Hearing “that’s not luck, that’s me” and moving on.",
     "why": "“Does not identify or respond to the patient’s cues.” The self-blame is the hidden agenda of the station.",
     "fix": "Address it directly: “This is not you. Miscarriage is common and almost never caused by anything a woman did.”"
    },
    {
     "dom": "tasks",
     "fail": "Ignoring the two previous miscarriages because the question was about the thyroid.",
     "why": "Missing the wider picture. RCOG GTG 17 (2023) supports assessment after two losses where clinically appropriate.",
     "fix": "Offer early pregnancy support and referral for assessment, and explain why."
    },
    {
     "dom": "gs",
     "fail": "Closing with “any problems, get in touch”.",
     "why": "Non-specific safety-netting. In early pregnancy after two losses she needs named routes.",
     "fix": "EPAU number for bleeding or pain, 999 for heavy bleeding or collapse, and a promised call with results."
    }
   ]
  }
 },
 "thyroid-subclinical": {
  "stem": {
   "name": "Lorna Petrie",
   "age": "52-year-old woman",
   "pmh": [
    "No significant past medical history"
   ],
   "meds": [
    "No regular medication"
   ],
   "allergy": "No known drug allergies",
   "recent": "Patient-requested thyroid bloods: TSH 6.4 mU/L, free T4 13.8 pmol/L (normal), TPO antibodies negative. Repeat 4 weeks later: TSH 5.9 mU/L, free T4 normal. FBC, ferritin, B12, HbA1c and glucose normal.",
   "reason": "Telephone call: requesting levothyroxine."
  },
  "knowledge": {
   "guideline": "NICE NG145 (thyroid disease) · NICE NG23 (menopause, updated April 2026) · NICE NG222 (depression in adults)",
   "summary": "A mildly raised TSH with normal T4 is subclinical hypothyroidism. Confirm it properly, be honest about what levothyroxine can and cannot do, and look for the likelier causes: perimenopause and low mood after her marriage ended.",
   "points": [
    {
     "h": "Define and confirm",
     "t": "Subclinical hypothyroidism is a TSH above the reference range with a normal free T4. NICE NG145: if TSH is raised and free T4 normal, consider repeating both after 3 months. Her repeat at 4 weeks was earlier than this, so the diagnosis is not yet confirmed on NG145 terms."
    },
    {
     "h": "When to treat",
     "t": "NICE NG145: consider levothyroxine if TSH is 10 mU/L or higher on 2 tests 3 months apart. For adults under 65 with symptoms and a TSH above range but below 10 on 2 tests 3 months apart, consider a 6-month trial; if symptoms persist once TSH is in range, consider stopping."
    },
    {
     "h": "If untreated",
     "t": "NICE NG145: with no features of underlying thyroid disease (for example negative TPO antibodies), consider measuring TSH every 2 to 3 years. Many mild rises settle or never progress."
    },
    {
     "h": "Perimenopause is the likelier cause",
     "t": "NICE NG23: diagnose perimenopause in women over 45 from vasomotor symptoms and irregular periods, without an FSH test. Treatment options include HRT and, for low mood and vasomotor symptoms, menopause-specific CBT."
    },
    {
     "h": "Low mood behind a physical label",
     "t": "A marriage ended 8 months ago. Ask about mood, sleep, enjoyment and self-harm. NICE NG222: offer treatment matched to severity and her preference, including guided self-help and talking therapies."
    },
    {
     "h": "Communication",
     "t": "A flat “your thyroid is fine” confirms her fear of being dismissed. Believe the symptoms, explain the result honestly, keep a trial on the table, and widen the lens."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Petrie, it’s Dr Lee. Can I check I’m speaking to Lorna, and that it’s a good time to talk?",
    "dom": "gs",
    "why": "Identity and privacy on the phone"
   },
   {
    "who": "pt",
    "text": "Yes. I’ll save us both time. I know my thyroid’s underactive. I’m shattered, I’ve put on weight, my memory’s like a sieve. I just need the tablets. My friend was exactly the same and levothyroxine changed her life."
   },
   {
    "who": "dr",
    "text": "I can hear you feel genuinely awful, and I’m not going to fob you off. I’d like to go through your results with you, understand everything that’s been going on, and then agree what will actually help. Is that OK?",
    "dom": "rto",
    "why": "Believes her first and sets a shared agenda"
   },
   {
    "who": "pt",
    "text": "As long as it ends with the tablets."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about a typical day at the moment.",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "I drag myself to work, can’t concentrate, come home and collapse. I wake at three and can’t get back to sleep."
   },
   {
    "who": "dr",
    "text": "Can I ask about your periods, and whether you’re getting any hot flushes or night sweats?",
    "dom": "tasks",
    "why": "Screens for perimenopause"
   },
   {
    "who": "pt",
    "text": "Periods are all over the place, months apart. I get flushes and I soak the sheets some nights. But that’s just my age, isn’t it?"
   },
   {
    "who": "dr",
    "text": "It may be, and it could explain a lot. How has your mood been? Are you still enjoying things?",
    "dom": "tasks",
    "why": "Screens for low mood"
   },
   {
    "who": "pt",
    "text": "Flat, I suppose. Not much fun."
   },
   {
    "who": "dr",
    "text": "And your weight and appetite, any change there? Drinking a bit more than usual to cope?",
    "dom": "tasks",
    "why": "Completes the differential and screens alcohol"
   },
   {
    "who": "pt",
    "text": "Half a stone on. A glass of wine most nights, maybe two. Nothing mad."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–7 min",
    "who": "dr",
    "text": "Blood tests aside, what has life been like these past months?",
    "dom": "rto",
    "why": "Opens space for the hidden agenda"
   },
   {
    "who": "pt",
    "text": "My husband moved out eight months ago. Twenty-four years. I tell people it’s my thyroid. I can’t say the other thing out loud."
   },
   {
    "who": "dr",
    "text": "I’m so sorry. That’s a huge loss, and very recent. Thank you for telling me. Can I ask, have you had any thoughts of harming yourself, or that life isn’t worth living?",
    "dom": "tasks",
    "why": "Responds with empathy and assesses risk"
   },
   {
    "who": "pt",
    "text": "No. Nothing like that. I’ve got my mum and my job. I just feel like I’m falling apart."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "Here’s what your results show. Your thyroid-stimulating level is a little high, but the thyroid hormone itself is normal and the antibody test is negative. We call that subclinical: a mild, borderline change. It is different from a truly underactive thyroid.",
    "dom": "tasks",
    "why": "Explains subclinical hypothyroidism honestly"
   },
   {
    "who": "pt",
    "text": "So you’re saying no."
   },
   {
    "who": "dr",
    "text": "No, I’m saying not yet, and not blindly. National guidance says to repeat the test three months after the first one to be sure. If it’s still raised, a six-month trial of levothyroxine is something we can try together, and stop it if it doesn’t help. But at this level it often doesn’t fix tiredness, and I don’t want it to be the only thing we do.",
    "dom": "tasks",
    "why": "NICE NG145-concordant plan; keeps a trial on the table"
   },
   {
    "who": "pt",
    "text": "Because of the menopause, you mean."
   },
   {
    "who": "dr",
    "text": "Partly. At 52, with periods spacing out, flushes and night sweats, the perimenopause is very likely, and it causes exactly this: poor sleep, fog, low mood, weight change. It’s very treatable. And after what’s happened in your marriage, anyone would feel flattened. Both deserve help as much as your thyroid does.",
    "dom": "tasks",
    "why": "Names perimenopause and low mood as likely drivers"
   },
   {
    "who": "pt",
    "text": "I hadn’t put it together like that."
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "Here’s what I’d suggest. A face-to-face appointment next week to talk properly about menopause treatment, including HRT, which can help the sweats, sleep and mood. I’ll give you the number for NHS Talking Therapies, which you can call yourself. And a repeat thyroid test in about two months, three months after your first one. What do you think?",
    "dom": "gs",
    "why": "Shared plan with concrete options and a dated repeat test"
   },
   {
    "who": "pt",
    "text": "That sounds like actual help. I thought you’d just say no."
   },
   {
    "who": "dr",
    "text": "Your friend’s tablet helped her, and I’m glad. Her thyroid may have been very different. I want the treatment that fits you.",
    "dom": "rto",
    "why": "Respects the friend’s story without arguing"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If your mood drops, or you ever have thoughts of harming yourself, ring us the same day or call 111. Tell me back what we’ve agreed so I know I’ve explained it clearly.",
    "dom": "gs",
    "why": "Mood safety-net and teach-back"
   },
   {
    "who": "pt",
    "text": "Menopause appointment next week, call the talking therapies, thyroid test in two months, and a trial if it’s still high."
   },
   {
    "who": "dr",
    "text": "Exactly. You came for one tablet, and you’re leaving with a plan for all of it. I’ll see you next week.",
    "dom": "rto",
    "why": "Summarises and confirms follow-up"
   },
   {
    "who": "pt",
    "text": "Thank you, doctor. I mean it."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Believed her symptoms first; did not open with the result or a refusal.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work, sleep, the end of a 24-year marriage, support from her mother, what she tells people.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “that explains everything”, flushes brushed off as “just my age”, and the flat mood.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (thyroid explains everything), concern (being dismissed; grief she cannot name), expectation (levothyroxine).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Repeat TSH and free T4 3 months after the first test (NICE NG145); no FSH needed at 52 (NICE NG23).",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Subclinical hypothyroidism vs perimenopause vs low mood or depression; anaemia, B12 and diabetes already excluded.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked directly about self-harm and suicidal thoughts.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Borderline thyroid result not yet confirmed; perimenopause and grief-related low mood likely.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Repeat TFTs, 6-month trial if still raised (NICE NG145); HRT discussion (NICE NG23); talking therapies (NICE NG222).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Addressed the perimenopause and low mood rather than attributing everything to the thyroid.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Face-to-face next week, dated blood test, mood safety-net, teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Mental health & addiction",
    "Investigations & results"
   ],
   "stem": {
    "name": "Lorna Petrie",
    "age": "52 years · female",
    "pmh": [
     "Nil significant"
    ],
    "meds": [
     "Nil regular"
    ],
    "allergy": "NKDA",
    "recent": "⚠ TSH 6.4 → 5.9 mU/L (4 weeks apart), FT4 normal, TPO antibodies negative. FBC, ferritin, B12, HbA1c normal.",
    "reason": "Telephone. “I just need you to start me on the thyroid tablets.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Believe her",
     "d": "She opens with her diagnosis and her demand. Acknowledge how unwell she feels before any result."
    },
    {
     "t": "1–4",
     "h": "Widen the history",
     "d": "Typical day, sleep, periods, flushes, night sweats, mood."
    },
    {
     "t": "4–7",
     "h": "The hidden agenda",
     "d": "Ask what life has been like. The separation emerges. Respond, then ask about self-harm."
    },
    {
     "t": "7–10",
     "h": "Explain honestly",
     "d": "Subclinical, not yet confirmed; repeat at 3 months; a trial is possible if still raised. Perimenopause and grief as likely drivers."
    },
    {
     "t": "10–12",
     "h": "Plan and close",
     "d": "Menopause appointment, talking therapies, dated blood test, mood safety-net, teach-back."
    }
   ],
   "wordPics": {
    "fail": "“Your thyroid is fine, there’s nothing wrong”; or prescribes levothyroxine on request; never asks about periods, flushes or mood; misses the separation; no risk assessment.",
    "pass": "Explains subclinical hypothyroidism; plans a repeat test; recognises perimenopause; asks about mood; offers a follow-up.",
    "exc": "All of the above, plus: follows NICE NG145 exactly (repeat at 3 months, trial if persistent and symptomatic); names the grief with warmth; asks about self-harm; concrete menopause and mood options; respects the friend’s story; teach-back."
   },
   "avoid": [
    {
     "dont": "“Your thyroid is basically normal, so it can’t be causing this.”",
     "instead": "“You feel genuinely unwell, and I want to find out why. The thyroid result is borderline, and there may be more going on.”",
     "why": "Dismissal confirms her fear and ends engagement."
    },
    {
     "dont": "“Levothyroxine won’t help you, so I won’t prescribe it.”",
     "instead": "“If the repeat test is still raised, we can try it for six months and stop if it doesn’t help.”",
     "why": "NICE NG145 allows a trial in symptomatic under-65s; a flat refusal is neither accurate nor kind."
    },
    {
     "dont": "“Your friend probably had a different condition.”",
     "instead": "“I’m glad it helped her. I want the treatment that fits you.”",
     "why": "Correcting the anchor wins the argument and loses the patient."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Separation and grief",
     "t": "A 24-year marriage ended 8 months ago. A physical label feels safer to say at work and to family. Make room for the grief without forcing disclosure."
    },
    {
     "h": "Work",
     "t": "Poor concentration at work. Workplace adjustments or a fit note may help while symptoms are treated."
    }
   ],
   "legal": [
    {
     "h": "Menopause at work",
     "t": "Equality and Human Rights Commission guidance (2024): menopause symptoms can amount to a disability under the Equality Act 2010, and employers should make reasonable adjustments."
    },
    {
     "h": "HRT costs",
     "t": "In England, an HRT prescription prepayment certificate covers eligible HRT items for 12 months."
    }
   ],
   "professional": [
    {
     "h": "Evidence-based prescribing",
     "t": "GMC Good medical practice (2024): prescribe on clinical need, not request alone. Explain the reasoning and offer alternatives; don’t simply refuse."
    },
    {
     "h": "Shared decisions",
     "t": "GMC Decision making and consent (2020): set out the options (monitoring, a time-limited trial, menopause treatment, talking therapy) and record her preferences."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "NHS Talking Therapies (self-referral), Women’s Health Concern and the British Menopause Society patient pages, Relate for relationship breakdown."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Thoughts of self-harm or suicide — assess directly given the recent loss",
     "Very high TSH (10 or more) or low free T4 on repeat — changes management",
     "Heavy or post-coital bleeding, or bleeding after 12 months without periods — needs separate assessment"
    ],
    "psychosocial": [
     "Separation 8 months ago; who knows; support from her mother",
     "Sleep, concentration and work",
     "Why a thyroid diagnosis feels safer to say"
    ],
    "ice": [
     "Idea: her thyroid is underactive and explains everything",
     "Concern: being dismissed; grief and low mood she can’t yet name",
     "Expectation: levothyroxine, like her friend"
    ]
   },
   "diagnosis": "Mildly raised TSH with normal free T4 and negative antibodies — subclinical hypothyroidism, not yet confirmed at the NICE NG145 3-month interval — with symptoms more likely explained by perimenopause and low mood after a recent separation.",
   "diagnosisLay": "“Your thyroid is sending a slightly louder ‘work harder’ signal, but it’s still making the right amount of hormone. That’s why it’s called borderline. The sweats, broken sleep and fog fit the menopause very well, and what you’ve been through would flatten anyone.”",
   "management": {
    "reflectIce": "“You’ve been carrying a lot, and saying ‘it’s my thyroid’ is easier than saying ‘my marriage ended’. Both are real, and both deserve help.”",
    "psychosocial": "Acknowledge the separation; offer talking therapy; involve support from her mother if she wishes; workplace adjustments.",
    "sharedPlan": [
     "Repeat TSH and free T4 3 months after the first test; if still above range and symptomatic, consider a 6-month levothyroxine trial (NICE NG145)",
     "Face-to-face menopause review with HRT and non-hormonal options (NICE NG23)",
     "Mood assessment and NHS Talking Therapies self-referral (NICE NG222)"
    ],
    "safetyNet": [
     "Same day, or 111, if mood worsens or thoughts of self-harm appear",
     "Face-to-face next week; dated thyroid blood test"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Hypothyroidism",
    "s": "Case walkthrough · subclinical · NICE NG145",
    "href": "../cases/hypothyroidism.html"
   },
   {
    "ic": "🗺️",
    "t": "Abnormal thyroid function tests",
    "s": "Visual algorithm · interpreting TFTs",
    "href": "algorithms/abnormal-tfts.html"
   },
   {
    "ic": "💠",
    "t": "HRT prescribing",
    "s": "Perimenopause · NICE NG23",
    "href": "management/hrt-prescribing.html"
   },
   {
    "ic": "💠",
    "t": "Depression",
    "s": "Assessment · NICE NG222",
    "href": "management/depression.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed at both extremes: prescribing on demand, or saying “your thyroid’s fine” and closing. The marks sit in the middle ground and in the history she brushes off.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Starting levothyroxine on request after two readings four weeks apart.",
     "why": "“Management plan not in line with current UK best practice.” NICE NG145 repeats the test at 3 months before deciding.",
     "fix": "Repeat TSH and free T4 at 3 months; discuss a 6-month trial if still raised."
    },
    {
     "dom": "tasks",
     "fail": "Refusing levothyroxine outright as if it can never help.",
     "why": "NICE NG145 allows a 6-month trial for symptomatic adults under 65 with TSH above range but below 10.",
     "fix": "Keep the trial on the table while treating the likelier causes."
    },
    {
     "dom": "tasks",
     "fail": "Missing the perimenopause.",
     "why": "Erratic periods, flushes and sweats at 52 meet NICE NG23’s clinical diagnosis.",
     "fix": "Ask directly about periods and flushes, name it, and offer treatment."
    },
    {
     "dom": "rto",
     "fail": "“Your thyroid is fine, there’s nothing wrong.”",
     "why": "“Does not respond to the patient’s concerns.” It confirms her fear of being dismissed.",
     "fix": "“You feel genuinely unwell. Let’s find out why.”"
    },
    {
     "dom": "rto",
     "fail": "Never asking about life beyond the symptoms.",
     "why": "The separation is the hidden agenda; missing it loses both Relating and Tasks marks.",
     "fix": "“Blood tests aside, what has life been like these past months?”"
    },
    {
     "dom": "gs",
     "fail": "No mood safety-net after a disclosure of low mood.",
     "why": "Unsafe; non-specific safety-netting is a standard failing statement.",
     "fix": "Ask about self-harm, give a same-day route, and book follow-up."
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
