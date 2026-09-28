/* ============================================================
   Reasoning GP — The Hot Seat: add-on set, batch 6
   Stem, knowledge, model consultation, scorecard tasks, extras,
   knowledge base, playbook, links and examiner pitfalls for
   20 further cases. Loaded after sca-pitfalls.js and
   before sca-practice.js; merges into the existing maps and
   attaches to the case objects exactly as those files do.
   Educational; original content; primary sources cited.
   ============================================================ */
(function(){
  var ADD = {
 "biliary-colic": {
  "stem": {
   "name": "Aisha Khan",
   "age": "41-year-old woman",
   "pmh": [
    "Overweight",
    "Recurrent “indigestion” — not previously investigated"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "Several episodes of upper abdominal pain over recent weeks. Possible family history of gallstones.",
   "reason": "Telephone request: “strong antacids for bad indigestion”."
  },
  "knowledge": {
   "guideline": "NICE CG188 (2014) — gallstone disease · NICE QS104 (2015) · NICE NG253 (updated September 2026) — suspected sepsis",
   "summary": "Recurrent severe right upper quadrant pain after fatty meals, lasting hours and radiating to the shoulder blade, is biliary colic. Today’s pain lasting more than 6 hours with fever and feeling unwell suggests acute cholecystitis — same-day hospital assessment, not antacids by phone.",
   "points": [
    {
     "h": "Recognise biliary colic",
     "t": "Episodic severe RUQ or epigastric pain, often after fatty or large meals, lasting from under an hour to several hours then settling, sometimes radiating to the right shoulder or scapula, with nausea. Antacids do not treat it."
    },
    {
     "h": "When it is no longer colic",
     "t": "Pain that persists beyond about 6 hours, or comes with fever, rigors or systemic upset, suggests acute cholecystitis; add jaundice and it may be cholangitis. Both need same-day hospital assessment. Epigastric pain radiating to the back with vomiting raises gallstone pancreatitis."
    },
    {
     "h": "Keep the differential open",
     "t": "Upper abdominal pain can be cardiac, peptic ulcer, pancreatitis, hepatitis or renal. Fever and persistence mean the patient must be examined in person — a phone consultation cannot exclude these."
    },
    {
     "h": "Sepsis risk",
     "t": "NICE NG253 (updated September 2026): consider sepsis in anyone with a possible infection who is unwell. Ask about breathlessness, confusion, mottled or ashen skin, and passing little urine; any high-risk feature → 999."
    },
    {
     "h": "Investigate the gallstones",
     "t": "NICE CG188: LFTs and abdominal ultrasound for suspected gallstone disease; MRCP or endoscopic ultrasound if the duct is dilated or LFTs are abnormal with a normal scan. Offer laparoscopic cholecystectomy for symptomatic gallbladder stones."
    },
    {
     "h": "Timing of surgery",
     "t": "NICE CG188 and QS104: for acute cholecystitis, offer laparoscopic cholecystectomy within 1 week of diagnosis. Until surgery, advise avoiding the foods and drinks that trigger symptoms."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Aisha Khan? It’s Dr Morgan from the surgery. Can you confirm your date of birth for me? … Thank you. How can I help?",
    "dom": "gs",
    "why": "Telephone identity check, then an open question"
   },
   {
    "who": "pt",
    "text": "I keep getting horrible indigestion after takeaways, under my right ribs — really intense for a couple of hours, then it goes. Could you just recommend some strong antacids? Though this time it’s been going since this morning and I feel a bit feverish and rough. But it’s just indigestion, right?"
   },
   {
    "who": "dr",
    "text": "Thank you — and I’m glad you mentioned today being different. I want to hear about the usual attacks, but first I need to ask about today. Is that okay?",
    "dom": "tasks",
    "why": "Prioritises today’s red flag over the chronic story"
   },
   {
    "who": "pt",
    "text": "Yes, okay."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When did today’s pain start, and has it eased at all?",
    "dom": "tasks",
    "why": "Duration — the key colic versus cholecystitis discriminator"
   },
   {
    "who": "pt",
    "text": "Early this morning. It hasn’t really let up. Normally it’s gone in a couple of hours."
   },
   {
    "who": "dr",
    "text": "You said feverish. Have you had shivering or shaking attacks? And have you noticed any yellowing of your eyes or skin?",
    "dom": "tasks",
    "why": "Screens for cholangitis: rigors and jaundice"
   },
   {
    "who": "pt",
    "text": "I just feel feverish and rough. I haven’t looked for yellow — I can check in the mirror."
   },
   {
    "who": "dr",
    "text": "Please do, in a moment. Are you being sick? Are you breathless, or feeling muddled or faint? And are you passing urine normally?",
    "dom": "tasks",
    "why": "Sepsis screen per NICE NG253"
   },
   {
    "who": "pt",
    "text": "I feel sick with it. I’m not muddled — just wiped out."
   },
   {
    "who": "dr",
    "text": "And the usual attacks — they come about an hour after fatty food, last a couple of hours, and go into your back or shoulder blade?",
    "dom": "tasks",
    "why": "Confirms the biliary colic pattern"
   },
   {
    "who": "pt",
    "text": "Yes, exactly. Right shoulder blade sometimes. I thought it was just rich food."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "I get the sense you’re hoping to sort this over the phone. Is something making it hard to come in?",
    "dom": "rto",
    "why": "Names the avoidance and invites the barrier"
   },
   {
    "who": "pt",
    "text": "…The kids. They’re little, my partner’s away, and I’ve got no one to have them. If I go in, everything falls apart. So I’ve just been getting on with it."
   },
   {
    "who": "dr",
    "text": "That makes complete sense, and thank you for telling me — it’s part of the plan, not a side issue. Let’s solve it together.",
    "dom": "rto",
    "why": "Validates the barrier and makes it a shared problem"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "The usual attacks sound like gallstones — little stones in the gallbladder that cause pain after fatty food. That isn’t indigestion, and antacids won’t help it.",
    "dom": "tasks",
    "why": "Reframes “indigestion” as biliary colic"
   },
   {
    "who": "pt",
    "text": "Gallstones? Oh."
   },
   {
    "who": "dr",
    "text": "But today is different. Pain that doesn’t settle, with a fever, can mean the gallbladder has become inflamed or infected. That needs examining and treating today, in hospital — I can’t safely manage it over the phone.",
    "dom": "tasks",
    "why": "Explains suspected cholecystitis and why same-day assessment"
   },
   {
    "who": "pt",
    "text": "Today? I really can’t…"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I know. Let’s work it through. Is there anyone at all — family, a friend, a neighbour — who could come for a few hours? And can your partner be contacted?",
    "dom": "rto",
    "why": "Problem-solves the childcare barrier practically"
   },
   {
    "who": "pt",
    "text": "I’d have to ring round. Maybe."
   },
   {
    "who": "dr",
    "text": "Please do that straight after this call. I’ll ring the surgical team at the hospital now and refer you for assessment today. Please don’t drive yourself while you’re in this much pain. If you can’t find anyone, ring me back — we won’t leave you stuck, and we’ll find the safest way to get you seen.",
    "dom": "tasks",
    "why": "Same-day acute surgical referral with a fallback"
   },
   {
    "who": "pt",
    "text": "Okay. I’ll ring round now."
   },
   {
    "who": "dr",
    "text": "Once today is sorted, you’ll have a scan and liver tests to confirm the gallstones, and usually an operation to remove the gallbladder so the attacks stop. Until then, avoid the foods that set it off.",
    "dom": "tasks",
    "why": "Longer-term CG188 plan"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "While you’re sorting the children: if you get shaking attacks, go yellow, feel confused or faint, become breathless, or the pain gets much worse — call 999 straight away, children with you or not.",
    "dom": "gs",
    "why": "Cholangitis and sepsis 999 safety-net in plain words"
   },
   {
    "who": "pt",
    "text": "Okay. That’s scared me a bit, but I get it."
   },
   {
    "who": "dr",
    "text": "You were right to mention the fever. Tell me back the plan so I know we’re agreed.",
    "dom": "gs",
    "why": "Teach-back on a time-critical plan"
   },
   {
    "who": "pt",
    "text": "Ring round for someone to have the kids, go to the hospital today, and call 999 if I get shaky, yellow or worse. And ring you back if I can’t get cover."
   },
   {
    "who": "dr",
    "text": "Perfect. I’ll call you back within the hour to check you’ve got a plan for the children.",
    "dom": "rto",
    "why": "Follow-up call closes the loop on the barrier"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Identity check; open question; picked up that today is different before exploring the usual attacks.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Young children, partner away, no childcare cover — the reason for wanting a phone remedy.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “since this morning” and “feverish” despite the antacid request, and the reluctance to come in.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (indigestion after rich food), the concern about the children and disruption, and the wish for antacids by phone.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Same-day in-person assessment (Murphy’s sign, temperature, jaundice, observations); later LFTs and abdominal ultrasound.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Biliary colic versus cholecystitis versus cholangitis versus pancreatitis; keeps cardiac and peptic causes in mind.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Duration over 6 hours, fever, rigors, jaundice, vomiting, confusion and other sepsis features asked about.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Gallstone disease with suspected acute cholecystitis today — shared in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Same-day acute surgical referral with the childcare barrier solved; no antacids instead; longer-term ultrasound, LFTs and cholecystectomy per NICE CG188.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Trigger-food advice until surgery; weight discussed later, not today.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 features named; ring back if no cover; GP call-back to confirm she is on her way.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Aisha Khan",
    "age": "41 years · female",
    "pmh": [
     "Overweight",
     "Recurrent upper abdominal pain — no investigations on file"
    ],
    "meds": [
     "Nil recorded"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Receptionist note: “wants strong antacids — says she feels a bit feverish today.”",
    "reason": "Telephone consultation: “Bad indigestion after my takeaway — just need strong antacids.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and triage",
     "d": "She buries the fever at the end of her opening. Hear it and put today first."
    },
    {
     "t": "1–4",
     "h": "Today’s red flags",
     "d": "Duration, fever, rigors, jaundice, vomiting, sepsis features. Then confirm the classic colic pattern briefly."
    },
    {
     "t": "4–6",
     "h": "ICE and barrier",
     "d": "Why she wants a phone fix: the children. Make it a shared problem."
    },
    {
     "t": "6–10",
     "h": "Explain and act",
     "d": "Gallstones, not indigestion; today may be cholecystitis. Same-day surgical referral. Solve the childcare with her."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 features, ring back if no cover, teach-back, and a GP call-back."
    }
   ],
   "wordPics": {
    "fail": "Recommends antacids or a PPI by phone; misses or dismisses the fever and 6+ hours of pain; never asks why she won’t come in; or orders her to A&E without addressing the children, so she doesn’t go.",
    "pass": "Recognises biliary colic and that today suggests cholecystitis; arranges same-day assessment; asks about jaundice and rigors; gives a 999 safety-net; mentions ultrasound and surgery later.",
    "exc": "All of the above, plus: prioritises today from the first minute; surfaces the childcare barrier and solves it with her; screens for sepsis; keeps the differential open; uses teach-back and arranges a call-back so the plan actually happens."
   },
   "avoid": [
    {
     "dont": "“Try some strong antacids and see how you go.”",
     "instead": "“Pain that won’t settle with a fever isn’t indigestion — you need to be seen today.”",
     "why": "Remote treatment with red flags present is unsafe."
    },
    {
     "dont": "“You just need to go to A&E.”",
     "instead": "“Let’s sort out the children together, and I’ll refer you to the surgical team now.”",
     "why": "An instruction that ignores the barrier is unlikely to be followed."
    },
    {
     "dont": "“It’s probably just gallstones.”",
     "instead": "“Your usual attacks sound like gallstones — but today may be an inflamed gallbladder.”",
     "why": "“Just” undoes the urgency you need her to accept."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Childcare as a clinical barrier",
     "t": "A parent alone with young children often delays care. Treat arranging cover as part of the management plan, and have a fallback if none is found."
    },
    {
     "h": "Normalising recurrent symptoms",
     "t": "Weeks of attacks framed as “indigestion” — gently correct the label so she seeks help sooner next time."
    }
   ],
   "legal": [
    {
     "h": "Capacity and informed refusal",
     "t": "She has capacity and may decline admission. If so, explain the specific risks, offer alternatives, give a clear safety-net and document an informed decision (Mental Capacity Act 2005 principles)."
    },
    {
     "h": "Fit note",
     "t": "After an admission or cholecystectomy she may need a fit note for time off work."
    }
   ],
   "professional": [
    {
     "h": "Remote consultation limits",
     "t": "GMC Good practice in prescribing and managing medicines and devices (2021): prescribe remotely only when you have enough information to do so safely. Fever with persistent pain needs examination."
    },
    {
     "h": "Closing the loop",
     "t": "Document the referral and the call-back. If she cannot be reached, escalate rather than assume she has gone in."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Family, friends or neighbours for childcare today; if no safe cover can be found, tell the GP or hospital team so they can help plan — young children must not be left alone. Health visitor or school for ongoing family support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Pain over about 6 hours with fever or systemic upset — suspected acute cholecystitis",
     "Fever or rigors with jaundice ± confusion — possible cholangitis, emergency",
     "Sepsis features (breathless, confused, mottled, little urine) — 999 (NICE NG253)"
    ],
    "psychosocial": [
     "Young children, partner away, no childcare",
     "Weeks of normalising the attacks",
     "Fear that going in means everything falls apart"
    ],
    "ice": [
     "Idea: “It’s bad indigestion after takeaways”",
     "Concern: the children and the disruption of being assessed",
     "Expectation: strong antacids by phone"
    ]
   },
   "diagnosis": "Two messages: “Your usual attacks sound like gallstones, not indigestion. Today’s pain with a fever may mean the gallbladder is inflamed, and that needs assessing in hospital today.”",
   "diagnosisLay": "“The gallbladder is a small bag that squeezes after a fatty meal. If a stone blocks the exit, it cramps — that’s your usual attack. If it stays blocked, the bag can become inflamed or infected, which is what I’m worried about today.”",
   "management": {
    "reflectIce": "“You wanted a phone fix because of the children — that makes complete sense. Let’s sort them out together so you can be seen safely.”",
    "psychosocial": "Help her find cover now; agree a fallback if none; a GP call-back within the hour.",
    "sharedPlan": [
     "Same-day referral to the acute surgical team for suspected cholecystitis",
     "No antacids instead of assessment; don’t drive herself while in pain",
     "Later: LFTs, ultrasound and laparoscopic cholecystectomy per NICE CG188"
    ],
    "safetyNet": [
     "Rigors, jaundice, confusion, faintness, breathlessness or much worse pain → 999",
     "Ring back if no childcare; GP call-back to confirm she is on her way"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Cholecystitis and gallstones protocol",
    "s": "Colic vs cholecystitis · NICE CG188",
    "href": "management/cholecystitis.html"
   },
   {
    "ic": "🗺️",
    "t": "Abdominal pain pathway",
    "s": "Visual algorithm · red flags",
    "href": "algorithms/abdominal-pain.html"
   },
   {
    "ic": "📋",
    "t": "Abdominal pain",
    "s": "Case walkthrough",
    "href": "../cases/abdominal-pain.html"
   },
   {
    "ic": "🗺️",
    "t": "Fever in adults",
    "s": "Visual algorithm · sepsis screen",
    "href": "algorithms/fever-adults.html"
   }
  ],
  "pitfalls": {
   "intro": "The patient hides the key fact at the end of her opening and asks for antacids. Candidates fail by answering the request, or by giving the right instruction in a way she cannot follow.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Recommending antacids or a PPI by phone for “indigestion”.",
     "why": "Persistent pain with fever suggests acute cholecystitis; remote treatment misses it. “Management plan not in line with current UK best practice.”",
     "fix": "“Pain that won’t settle, with a fever, isn’t indigestion. You need to be seen today.”"
    },
    {
     "dom": "tasks",
     "fail": "Spending five minutes on the chronic pattern before reaching today’s fever.",
     "why": "Poor prioritisation in a telephone triage station; the urgent issue must come first.",
     "fix": "“I want to hear about the usual attacks, but first — tell me about today.”"
    },
    {
     "dom": "tasks",
     "fail": "Not asking about jaundice, rigors or sepsis features.",
     "why": "These separate cholecystitis from cholangitis or sepsis and decide between a same-day referral and 999.",
     "fix": "Ask directly, and if she can’t tell, ask her to check her eyes in a mirror."
    },
    {
     "dom": "rto",
     "fail": "Ordering her to A&E without asking why she wants to avoid it.",
     "why": "“Does not explore the patient’s circumstances.” An unaddressed childcare barrier means she won’t go.",
     "fix": "“Is something making it hard to come in?” Then solve it with her and agree a fallback."
    },
    {
     "dom": "rto",
     "fail": "Frightening her with “this could be sepsis” with no plan attached.",
     "why": "Fear without a route leads to paralysis or disengagement.",
     "fix": "Pair each concern with an action: “That’s why I’m ringing the surgical team now.”"
    },
    {
     "dom": "gs",
     "fail": "Ending the call without checking she knows what to do.",
     "why": "Time-critical plans fail silently without teach-back and follow-up.",
     "fix": "Teach-back, named 999 features, and a GP call-back within the hour."
    }
   ]
  }
 },
 "carehome-delirium": {
  "stem": {
   "name": "Edna Hartley",
   "age": "86-year-old woman (care-home resident)",
   "pmh": [
    "Mild dementia"
   ],
   "meds": [
    "New medication started last week (see care-home MAR chart)"
   ],
   "allergy": "Check care-home record",
   "recent": "Care home reports acute worsening of confusion and agitation over 24–48 hours.",
   "reason": "Telephone call from a care-home nurse requesting “something to settle her”."
  },
  "knowledge": {
   "guideline": "NICE CG103 (2010, updated 2023) — delirium · NICE NG97 (2018) — dementia · NICE NG253 (updated September 2026) · MHRA Drug Safety Update (December 2021)",
   "summary": "An acute, fluctuating change over 24–48 hours in a woman with mild dementia — agitation, sleeplessness, picking at the air — is delirium until proven otherwise. The task is to find and treat the cause, not to sedate the symptom.",
   "points": [
    {
     "h": "Recognise delirium on dementia",
     "t": "NICE CG103: be alert to recent changes or fluctuations in behaviour — cognition, perception (hallucinations), physical function (reduced intake, sleep disturbance) and social behaviour (agitation, withdrawal). A sudden change in someone with dementia is delirium until shown otherwise. The 4AT is a quick structured assessment."
    },
    {
     "h": "Find the cause",
     "t": "NICE CG103: identify and manage the possible underlying causes. Here: possible infection (fever, offensive urine), constipation, reduced intake and dehydration, and a medicine started last week. Also consider pain, urinary retention, hypoxia and electrolyte disturbance. Review the new drug first."
    },
    {
     "h": "Urine in the over-65s",
     "t": "UKHSA urinary tract infection diagnostic guidance: do not use urine dipsticks in people aged over 65 — asymptomatic bacteriuria is common. Base the decision on clinical features and send a urine sample for culture if infection is suspected."
    },
    {
     "h": "Non-drug measures first",
     "t": "NICE CG103: in a distressed person, first use verbal and non-verbal de-escalation. Reorientation, familiar staff, glasses and hearing aids, hydration, treating constipation and pain, daytime light and a quiet night reduce agitation without drug harms."
    },
    {
     "h": "If sedation is truly needed",
     "t": "NICE CG103: if distressed or a risk to themselves or others and de-escalation fails, consider short-term haloperidol (usually for 1 week or less), starting at the lowest clinically appropriate dose and titrating cautiously — dose per BNF. Use antipsychotics with caution or not at all in Parkinson’s disease or dementia with Lewy bodies. MHRA Drug Safety Update (December 2021) highlights the risks of haloperidol in elderly patients with delirium."
    },
    {
     "h": "Assess and escalate",
     "t": "A GP visit the same day, with observations (NEWS2) and examination. Sepsis risk judged per NICE NG253; admit if she is systemically unwell, the cause cannot be managed in the home, or she is unsafe. Do not leave a possibly septic older woman sedated and unassessed."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, this is Dr Clarke. Can I take your name and role, and the resident’s full name and date of birth? … Thank you. Tell me what’s been happening with Edna.",
    "dom": "gs",
    "why": "Identifies caller and patient, then an open question"
   },
   {
    "who": "pt",
    "text": "She’s got a bit of dementia normally, but the last day or two she’s gone really confused and agitated — up all night, picking at things, not herself at all. The staff are struggling. Could you prescribe something to settle her, a sedative or one of the antipsychotics? We just need her calmer."
   },
   {
    "who": "dr",
    "text": "Thank you for calling — it sounds like a really hard couple of days for you and the team. I want to help. Can I ask some questions first, so we treat whatever is making her like this?",
    "dom": "rto",
    "why": "Acknowledges the staff’s pressure before redirecting"
   },
   {
    "who": "pt",
    "text": "Yes, of course."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "What is Edna usually like on a good day, and how quickly did this change come on? Does it come and go?",
    "dom": "tasks",
    "why": "Baseline, acute onset and fluctuation — the core of delirium"
   },
   {
    "who": "pt",
    "text": "Normally she’s just a bit forgetful with her dementia. This came on over a day or two. Some moments she’s better, then she’s off again."
   },
   {
    "who": "dr",
    "text": "Is she eating and drinking? How are her bowels and her urine?",
    "dom": "tasks",
    "why": "Screens dehydration, constipation, infection"
   },
   {
    "who": "pt",
    "text": "She’s hardly drinking. Fewer wet pads, and it smells quite strong. And she hasn’t had her bowels open for a few days."
   },
   {
    "who": "dr",
    "text": "Have you taken her observations — temperature, pulse, blood pressure, breathing, oxygen?",
    "dom": "tasks",
    "why": "Objective data for sepsis risk (NG253 / NEWS2)"
   },
   {
    "who": "pt",
    "text": "Her temperature’s up a little. I can do a full set now."
   },
   {
    "who": "dr",
    "text": "Please do, and ring them through to me. Has anything changed with her medicines recently?",
    "dom": "tasks",
    "why": "Asks directly about the new drug"
   },
   {
    "who": "pt",
    "text": "She was started on something new last week. I’d need to check the MAR chart for the name."
   },
   {
    "who": "dr",
    "text": "That’s really important — please have the chart ready for me. Does she have Parkinson’s disease, or a diagnosis of Lewy body dementia?",
    "dom": "tasks",
    "why": "Antipsychotic contraindication check"
   },
   {
    "who": "pt",
    "text": "Just mild dementia, as far as I know."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "What’s your biggest worry at the moment, on the unit?",
    "dom": "rto",
    "why": "Explores the caller’s real concern behind the request"
   },
   {
    "who": "pt",
    "text": "Honestly, we’re short-staffed. She’s been up and down all night, and I’m worried she’ll fall. We just need her settled."
   },
   {
    "who": "dr",
    "text": "That’s a completely fair worry, and a fall would be serious. Thank you for being honest about the staffing — let’s make a plan that keeps her safe and doesn’t leave you on your own with it.",
    "dom": "rto",
    "why": "Validates the pressure without colluding"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "What you’re describing — a sudden change over a day or two, coming and going, with her picking at the air — is delirium, not her dementia getting worse. Delirium almost always means her body is unwell with something, and here there are several clues: possible infection, constipation, not drinking, and a new medicine.",
    "dom": "tasks",
    "why": "Names delirium and its likely precipitants"
   },
   {
    "who": "pt",
    "text": "So you don’t want to give her anything?"
   },
   {
    "who": "dr",
    "text": "Not as a first step. A sedative would quieten her but hide what’s wrong — and in someone her age with dementia those drugs can make confusion worse and increase the risk of falls, stroke and death. If we treat the cause, the agitation usually settles.",
    "dom": "tasks",
    "why": "Explains antipsychotic harms and the cause-first approach"
   },
   {
    "who": "pt",
    "text": "Okay. That makes sense, I suppose."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s the plan. I’ll visit her today. Before I arrive: the full set of observations, a urine sample for the lab rather than a dipstick, a fluid chart, and encouraging drinks. Please have the MAR chart ready so we can review that new medicine.",
    "dom": "tasks",
    "why": "Same-day assessment and a cause work-up"
   },
   {
    "who": "pt",
    "text": "We can do that."
   },
   {
    "who": "dr",
    "text": "Meanwhile, the things that genuinely help: a familiar member of staff with her where possible, glasses and hearing aids in, calm reassurance, a low bed or other falls measures you use, light in the day and quiet at night.",
    "dom": "tasks",
    "why": "Non-drug measures that also address falls risk"
   },
   {
    "who": "pt",
    "text": "What if she gets really distressed before you arrive?"
   },
   {
    "who": "dr",
    "text": "Ring me straight away. If she became severely distressed or a danger to herself despite all that, a small short-term dose of a calming medicine can be considered — but as a last resort, alongside treating the cause, and reviewed daily.",
    "dom": "tasks",
    "why": "Sedation positioned as a reviewed last resort per NICE CG103"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If her observations are worrying, she becomes very drowsy or hard to rouse, breathless, or stops drinking altogether, call 999 — don’t wait for me. Could you also let her next of kin know what’s happening, in line with her records?",
    "dom": "gs",
    "why": "Clear escalation triggers; involves family appropriately"
   },
   {
    "who": "pt",
    "text": "Yes. I’ll do the obs now and ring you back."
   },
   {
    "who": "dr",
    "text": "Thank you — you did exactly the right thing ringing. Just so we’re agreed: obs now, urine to the lab, fluids and bowels, MAR chart ready, non-drug measures, I visit today, and 999 if she deteriorates.",
    "dom": "gs",
    "why": "Summarises the shared plan"
   },
   {
    "who": "pt",
    "text": "Got it. Thanks, doctor."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Identifies caller and resident; open question; lets the nurse describe the change before responding to the sedation request.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Staffing pressure, falls worry, Edna’s usual baseline and who else should be informed.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “not herself”, “picking at things”, the strong-smelling urine and the new medicine.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "The home’s idea (her dementia is worse), concern (short-staffed, falls) and expectation (a sedative or antipsychotic).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Same-day visit; full observations; urine culture (no dipstick over 65); fluid and bowel charts; bloods at the visit; medication review.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Delirium versus progression of dementia; infection, constipation, dehydration, drug effect, retention, pain.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Sepsis risk via observations and NICE NG253; asked about Parkinson’s or Lewy body before any antipsychotic.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Acute delirium with several likely precipitants — explained to the nurse in plain terms.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Cause-first plan, non-drug measures, no sedative on request; short-term low-dose haloperidol only as a last resort per NICE CG103.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Reviews the new medicine; treats constipation and dehydration; falls precautions; next of kin informed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Visit today; ring back with observations; 999 triggers named; summary agreed.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Urgent & unscheduled care",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Edna Hartley",
    "age": "86 years · female · care-home resident",
    "pmh": [
     "Mild dementia"
    ],
    "meds": [
     "New medicine started last week — check MAR chart"
    ],
    "allergy": "Check care-home record",
    "recent": "⚠ Care home reports acute confusion and agitation over 24–48 hours. No observations sent.",
    "reason": "Telephone call from care-home nurse: “Can you prescribe something to settle her?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Identify and open",
     "d": "Who is calling, about whom. Let the nurse describe the change and make the request."
    },
    {
     "t": "1–5",
     "h": "Delirium history",
     "d": "Baseline, onset, fluctuation; intake, bowels, urine; observations; the new medicine; Parkinson’s or Lewy body."
    },
    {
     "t": "5–6",
     "h": "The caller’s ICE",
     "d": "Staffing and falls worries. Validate them — then redirect."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Delirium, not worse dementia. Why not sedation. Visit today, urine culture, fluids, bowels, medication review, non-drug measures."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 triggers, ring back with observations, next of kin, summary."
    }
   ],
   "wordPics": {
    "fail": "Prescribes a sedative or antipsychotic over the phone on request; accepts “her dementia is worse”; no search for infection, constipation or the new drug; no visit arranged; or lectures the nurse and loses her cooperation.",
    "pass": "Recognises delirium; asks about infection, intake, bowels and the new medicine; declines sedation as a first step; arranges assessment; gives escalation advice.",
    "exc": "All of the above, plus: supports the stretched nurse genuinely; checks for Parkinson’s or Lewy body; avoids dipstick reliance; gives specific non-drug measures that also address falls; positions haloperidol correctly as short-term last resort; summarises a plan the home can actually carry out."
   },
   "avoid": [
    {
     "dont": "“I’ll send over some haloperidol to calm her down.”",
     "instead": "“A sudden change like this is delirium — let’s find what’s making her unwell first.”",
     "why": "Sedating on request misses the cause and adds serious harms."
    },
    {
     "dont": "“We don’t use chemical restraint — you’ll have to manage.”",
     "instead": "“I can hear you’re short-staffed. Here’s what will genuinely help, and I’m coming to see her.”",
     "why": "Criticising the caller loses the partnership you need."
    },
    {
     "dont": "“Dip her urine and I’ll start antibiotics if it’s positive.”",
     "instead": "“Please send a urine sample to the lab rather than dipping it, and I’ll examine her.”",
     "why": "Dipsticks mislead over 65; delirium needs a broader cause search."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Care-home pressure",
     "t": "Short staffing and night-time disruption drive requests for sedation. Acknowledge it and offer practical support rather than judgement."
    },
    {
     "h": "Family involvement",
     "t": "Familiar faces help delirium. Next of kin should be informed of the change, in line with her records and any lasting power of attorney."
    }
   ],
   "legal": [
    {
     "h": "Mental Capacity Act 2005",
     "t": "Delirium may remove capacity for treatment decisions. Decisions are made in her best interests, consulting those close to her and any health and welfare attorney. Restraint — including chemical restraint — is lawful only if necessary to prevent harm and proportionate (section 6)."
    },
    {
     "h": "Safeguarding and regulation",
     "t": "Using medicines to control behaviour for staff convenience can amount to improper treatment. CQC regulation 13 requires care homes to protect people from unnecessary or disproportionate restraint."
    }
   ],
   "professional": [
    {
     "h": "Remote prescribing",
     "t": "GMC Good practice in prescribing and managing medicines and devices (2021): prescribe remotely only with enough information about the patient’s condition. An antipsychotic for new confusion without assessment falls short."
    },
    {
     "h": "Medication review",
     "t": "A new medicine last week is a likely contributor. Review, record any adverse reaction, and feed back to the prescriber without blame."
    }
   ],
   "community": [
    {
     "h": "Support services",
     "t": "Community frailty or care-home support teams, district nurses, and older people’s mental health services for persistent behavioural symptoms. Alzheimer’s Society resources on delirium for families and staff."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Acute, fluctuating change over hours to days — delirium, not dementia progression",
     "Fever, rising NEWS2, drowsiness, breathlessness — sepsis risk (NICE NG253), consider 999 or admission",
     "Parkinson’s or Lewy body dementia — antipsychotics with caution or not at all"
    ],
    "psychosocial": [
     "Staffing pressure and fear of falls on a busy night",
     "Edna’s baseline and who knows her best",
     "Next of kin and any lasting power of attorney"
    ],
    "ice": [
     "Idea: “Her dementia has got worse”",
     "Concern: short-staffed, worried she’ll fall",
     "Expectation: a sedative or antipsychotic to settle her"
    ]
   },
   "diagnosis": "Clear and supportive: “A sudden change over a day or two, coming and going, is delirium — it means her body is unwell with something, and there are several clues we can act on.”",
   "diagnosisLay": "“Delirium is like the brain’s warning light coming on. Covering the warning light with a sedative doesn’t fix the engine — we need to find what’s wrong underneath.”",
   "management": {
    "reflectIce": "“You’re short-staffed and worried she’ll fall — that’s a real concern. Let’s make a plan that keeps her safe and treats what’s making her like this.”",
    "psychosocial": "Give the home specific, doable tasks and a clear route to call back; recognise the staff’s effort.",
    "sharedPlan": [
     "Same-day GP visit: examination, observations, bloods; urine culture (no dipstick over 65)",
     "Review the new medicine; treat constipation; fluid chart and encourage drinks",
     "Non-drug measures first; short-term low-dose haloperidol only as a last resort per NICE CG103, dose per BNF"
    ],
    "safetyNet": [
     "Worrying observations, drowsiness, breathlessness, stopping drinking → 999",
     "Ring back with observations; ring immediately if severely distressed or unsafe"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Delirium pathway",
    "s": "Visual algorithm · 4AT · NICE CG103",
    "href": "algorithms/delirium.html"
   },
   {
    "ic": "🗺️",
    "t": "Confusion pathway",
    "s": "Visual algorithm · acute vs chronic",
    "href": "algorithms/confusion.html"
   },
   {
    "ic": "📋",
    "t": "Dementia",
    "s": "Case walkthrough · NICE NG97",
    "href": "../cases/dementia.html"
   },
   {
    "ic": "💠",
    "t": "Dementia protocol",
    "s": "Antipsychotic cautions · behaviour",
    "href": "management/dementia.html"
   },
   {
    "ic": "📋",
    "t": "Multimorbidity and polypharmacy",
    "s": "Case walkthrough · medication review",
    "href": "../cases/multimorbidity-polypharmacy.html"
   }
  ],
  "pitfalls": {
   "intro": "A third-party telephone call with a clear request: the station tests whether you treat the caller’s problem or the patient’s. It is failed on prescribing to order, and on handling the nurse badly.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing a sedative or antipsychotic over the phone because the home asked.",
     "why": "NICE CG103 requires the cause to be identified and managed; antipsychotics increase falls, stroke and mortality in older people with dementia.",
     "fix": "“Before any medicine, we need to find out why she’s changed — this sounds like delirium.”"
    },
    {
     "dom": "tasks",
     "fail": "Accepting “her dementia is worse” without asking about onset and fluctuation.",
     "why": "Acute, fluctuating change is the hallmark of delirium — the diagnosis is made in the history.",
     "fix": "“What is she like on a good day, and how fast did this come on?”"
    },
    {
     "dom": "tasks",
     "fail": "Asking for a urine dip and treating a positive result.",
     "why": "UKHSA guidance advises against dipsticks over 65; a positive dip may hide the real cause, such as the new drug or constipation.",
     "fix": "Urine culture, full observations, bowels, fluids and a medication review — then examine."
    },
    {
     "dom": "rto",
     "fail": "Lecturing the nurse about chemical restraint.",
     "why": "“Does not work in partnership.” The home carries out the plan; a defensive caller won’t.",
     "fix": "Name the pressure first — “I can hear you’re short-staffed” — then offer practical steps."
    },
    {
     "dom": "gs",
     "fail": "Advice only, with no assessment arranged.",
     "why": "A possibly septic 86-year-old needs examining; remote advice alone is unsafe.",
     "fix": "“I’m going to visit today — please have her observations and MAR chart ready.”"
    },
    {
     "dom": "gs",
     "fail": "No escalation triggers or call-back plan.",
     "why": "Non-specific safety-netting is standard failing feedback, and delirium can deteriorate quickly.",
     "fix": "Name 999 triggers, ask for the observations to be rung through, and summarise the plan."
    }
   ]
  }
 },
 "chlamydia-positive": {
  "stem": {
   "name": "Orla Devine",
   "age": "25-year-old woman",
   "pmh": [
    "No significant past medical history recorded",
    "Recent intermenstrual bleeding"
   ],
   "meds": [
    "Combined oral contraceptive pill"
   ],
   "allergy": "No known drug allergies",
   "recent": "Chlamydia NAAT taken at a pill check after intermenstrual bleeding: POSITIVE. No other STI results on file.",
   "reason": "Telephone call to give a positive chlamydia result and arrange treatment."
  },
  "knowledge": {
   "guideline": "BASHH Chlamydia trachomatis guideline 2026 · BASHH PID guideline 2018 (updated 2019) · UKHSA National Chlamydia Screening Programme (2021) · FSRH CEU drug interactions with hormonal contraception (2022)",
   "summary": "Chlamydia is common, often silent for long periods, and easily treated. Treat her, get the partner treated, screen for other infections, and assess for PID, because her intermenstrual bleeding and pelvic discomfort matter.",
   "points": [
    {
     "h": "First-line treatment",
     "t": "Doxycycline 100 mg twice daily for 7 days is the sole first-line treatment (BASHH 2026). Where doxycycline is unsuitable, including pregnancy, use the alternative per BASHH 2026 agreed with sexual health. Check for pregnancy before prescribing. Advise no sex, including with her regular partner, until both have completed treatment and symptoms have settled."
    },
    {
     "h": "Timing cannot be known",
     "t": "Chlamydia is often asymptomatic and can persist for months or longer. A positive test cannot show when or from whom it was acquired, so it is not evidence of recent infidelity. Say this honestly without offering relationship reassurance either way."
    },
    {
     "h": "Assess for PID",
     "t": "Intermenstrual bleeding with pelvic discomfort needs assessment for PID: lower abdominal pain, deep dyspareunia, abnormal discharge, fever, and cervical motion or adnexal tenderness on examination. Low threshold to treat: outpatient regimen ceftriaxone 1 g IM, then doxycycline 100 mg twice daily with metronidazole 400 mg twice daily for 14 days (BASHH PID 2019). Review at 72 hours."
    },
    {
     "h": "Partner notification and screening",
     "t": "The current partner is treated regardless of his own result, and a health adviser sets the look-back for other partners (BASHH 2026). Offer patient-led or provider-led (anonymous) notification. Offer HIV, syphilis and gonorrhoea testing."
    },
    {
     "h": "Contraception and retesting",
     "t": "Doxycycline does not reduce the effectiveness of the combined pill, so no extra precautions are needed (FSRH CEU 2022). Test of cure is not routine outside pregnancy; retest to exclude reinfection is advised, at 2–6 months for under-25s (BASHH 2026)."
    },
    {
     "h": "Fertility",
     "t": "The risk to fertility comes mainly from untreated or repeated infection causing PID and tubal damage. Prompt treatment, partner treatment and avoiding reinfection are the protective steps."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Orla? It's one of the GPs from the surgery. Before we go on, can I just check your date of birth, and is it okay to talk where you are now?",
    "dom": "gs",
    "why": "Confirms identity and privacy before a sensitive result"
   },
   {
    "who": "pt",
    "text": "Yes, I'm at home on my own. Is it my test?"
   },
   {
    "who": "dr",
    "text": "It is. Your swab has come back positive for chlamydia. I know that's not what you were expecting. The good news is that it's common and very easy to treat.",
    "dom": "tasks",
    "why": "Clear result with an early, honest anchor"
   },
   {
    "who": "pt",
    "text": "Positive? But I've been with my boyfriend two years. There's been no one else for me. So he's cheated, right? And is it serious? Can it stop me having kids?"
   },
   {
    "who": "dr",
    "text": "Those are really important questions and I will answer both properly. It's a lot to take in over the phone. Can you tell me what's going through your mind right now?",
    "dom": "rto",
    "why": "Pauses the agenda to let her feelings land"
   },
   {
    "who": "pt",
    "text": "I'm just so angry. And scared. I don't know what to think."
   },
   {
    "phase": "The cheating question",
    "clock": "1–3 min",
    "who": "dr",
    "text": "That makes complete sense. On the question of whether he's cheated, here's the honest answer: chlamydia often causes no symptoms at all and can sit in the body for months, sometimes longer. So this result can't tell either of us when it was caught, or from whom. It isn't proof that anyone's been unfaithful.",
    "dom": "tasks",
    "why": "Explains that acquisition timing is unknowable; avoids confirming infidelity"
   },
   {
    "who": "pt",
    "text": "So it could have been from before we got together?"
   },
   {
    "who": "dr",
    "text": "It's possible, and I can't tell you either way. I don't want you to reach a conclusion the test simply can't support. What happens in your relationship is yours to work through, and I'm not here to judge anyone.",
    "dom": "rto",
    "why": "Stays neutral without false relationship reassurance"
   },
   {
    "phase": "Data gathering",
    "clock": "3–5 min",
    "who": "dr",
    "text": "Can I ask a few questions to make sure we treat you properly? The notes say you've had some bleeding between periods. Any pain in your lower tummy, pain deep inside during sex, unusual discharge or a temperature?",
    "dom": "tasks",
    "why": "Screens for PID features"
   },
   {
    "who": "pt",
    "text": "A bit of bleeding, and some aching down low sometimes. No temperature. Sex has been a bit sore lately."
   },
   {
    "who": "dr",
    "text": "Thank you. Is there any chance you could be pregnant, and have you missed any pills recently?",
    "dom": "tasks",
    "why": "Pregnancy status determines antibiotic choice"
   },
   {
    "who": "pt",
    "text": "I don't think so. I take it every day."
   },
   {
    "who": "dr",
    "text": "That aching and the soreness could mean the infection has spread a little higher, to the womb and tubes. It's called pelvic inflammatory disease. I'd like you to come in today so I can examine you and do a pregnancy test. If it looks like that, the treatment is a bit longer, and it's important we catch it early.",
    "dom": "tasks",
    "why": "Acts on PID features: same-day examination and pregnancy test"
   },
   {
    "who": "pt",
    "text": "Is that what could stop me having children?"
   },
   {
    "phase": "Fertility and explanation",
    "clock": "5–7 min",
    "who": "dr",
    "text": "This is exactly why we treat it quickly. A single infection that's picked up and treated, like yours, very rarely affects fertility. The risk comes from infections left untreated for a long time or coming back again and again. What we're doing today is how we protect your fertility.",
    "dom": "tasks",
    "why": "Accurate fertility information linked to the plan"
   },
   {
    "who": "pt",
    "text": "Okay. That actually helps."
   },
   {
    "who": "dr",
    "text": "The treatment is an antibiotic called doxycycline, twice a day for a week, or a longer course if I think it's PID. Take it with plenty of water, sitting upright, and use sun protection because it can make skin sensitive. It won't stop your pill working.",
    "dom": "tasks",
    "why": "Correct first-line treatment with practical advice"
   },
   {
    "phase": "Partner notification",
    "clock": "7–10 min",
    "who": "dr",
    "text": "The next bit is often the hardest. Your boyfriend needs treating too, even if his test is negative, otherwise it can pass straight back to you. How do you feel about telling him?",
    "dom": "rto",
    "why": "Frames partner notification as health, not accusation"
   },
   {
    "who": "pt",
    "text": "I don't even know how to start that conversation. He'll think I'm accusing him."
   },
   {
    "who": "dr",
    "text": "You could put it the way I've put it to you: it's common, it can hide for ages, and you both need treating. If that feels too hard, the sexual health clinic can contact him anonymously for you. Which would suit you better?",
    "dom": "rto",
    "why": "Offers choice, including provider notification"
   },
   {
    "who": "pt",
    "text": "I think I'll tell him myself. But it's good to know there's another way."
   },
   {
    "who": "dr",
    "text": "No sex at all, even with condoms, until you've both finished treatment and any symptoms have gone. And while we're at it, I'd like to offer tests for HIV, syphilis and gonorrhoea. It's routine and confidential.",
    "dom": "tasks",
    "why": "Abstinence advice and full STI screen"
   },
   {
    "who": "pt",
    "text": "Yes, do all of them. I'd rather know."
   },
   {
    "phase": "Safety-net and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "If the tummy pain gets worse, you get a fever, feel sick or faint, or the bleeding becomes heavy, don't wait. Ring us the same day or call 111 out of hours. I'd also like you to have a repeat test in a few months to make sure it hasn't come back.",
    "dom": "gs",
    "why": "Specific PID red flags and retest plan"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "Can you tell me in your own words what we've agreed, so I know I've explained it clearly?",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Come in today to be checked, take the antibiotics, no sex till we've both finished, tell him or get the clinic to, blood tests, and ring if the pain gets worse."
   },
   {
    "who": "dr",
    "text": "Perfect. And how are you doing with it all now? The relationship side can take longer to settle than the infection.",
    "dom": "rto",
    "why": "Returns to her emotional state before closing"
   },
   {
    "who": "pt",
    "text": "Calmer. Still upset, but I'm not jumping to conclusions now."
   },
   {
    "who": "dr",
    "text": "That's completely understandable. If you want to talk it through again, for the results or anything else, just book in. I'll see you this afternoon.",
    "dom": "rto",
    "why": "Leaves an open door and confirms the next contact"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Checked identity and privacy; gave the result clearly; let her react before explaining.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Relationship, trust, shame about telling him, support at home.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up \"does this mean he's cheated?\", the fertility fear and the intermenstrual bleeding, and explored each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (proof of infidelity); concerns (relationship, fertility, telling him); expectation (answers to both).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Same-day examination for cervical motion and adnexal tenderness; pregnancy test; HIV, syphilis and gonorrhoea tests.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Uncomplicated chlamydia against PID; considers pregnancy, other STIs and pill-related bleeding.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asks about pain, deep dyspareunia, fever and pregnancy; knows the PID outpatient regimen and when to admit.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Uncomplicated chlamydia versus possible PID; explains timing of acquisition cannot be known.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Doxycycline 100 mg twice daily for 7 days (PID regimen if suspected); abstain until both treated; no extra contraception needed.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Partner treated regardless of result; patient-led or anonymous provider notification; full STI screen.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "PID red flags; retest for reinfection; results plan; open door for the relationship distress.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Investigations & results"
   ],
   "stem": {
    "name": "Orla Devine",
    "age": "25 years · female",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "Combined oral contraceptive pill"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Chlamydia NAAT (taken at pill check after IMB): POSITIVE. No HIV, syphilis or gonorrhoea results on file.",
    "reason": "Telephone: result to give. \"Please call re swab result.\""
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Identity, privacy, result",
     "d": "Confirm who and where she is. Give the result plainly with the anchor that it is common and treatable. Then stop and listen."
    },
    {
     "t": "1–3",
     "h": "The cheating question",
     "d": "Answer honestly: timing and source cannot be known. Neither confirm infidelity nor reassure about the relationship."
    },
    {
     "t": "3–5",
     "h": "PID and pregnancy",
     "d": "Pain, dyspareunia, discharge, fever, pregnancy chance. Her IMB and aching mean a same-day examination."
    },
    {
     "t": "5–10",
     "h": "Fertility, treatment, partner",
     "d": "Accurate fertility message. Doxycycline 7 days or PID regimen. Partner treated regardless; anonymous option. Full STI screen."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "PID red flags, retest, teach-back, and check how she is feeling about the relationship."
    }
   ],
   "wordPics": {
    "fail": "Tells her it \"probably means he's been sleeping around\", or brushes it off entirely; prescribes without asking about pain or pregnancy; no partner treatment plan; ignores the fertility question.",
    "pass": "Explains that the timing of infection cannot be known; prescribes doxycycline correctly; advises abstinence and partner treatment; offers an STI screen; mentions fertility and gives a safety-net.",
    "exc": "All of the above, plus: recognises that IMB with pelvic aching and dyspareunia needs same-day assessment for PID; gives specific fertility information tied to the plan; offers anonymous provider notification as a choice; checks her emotional state at the end and uses teach-back."
   },
   "avoid": [
    {
     "dont": "\"Well, you'd need to ask him where it came from.\"",
     "instead": "\"This result can't tell us when or from whom it was caught. It isn't proof that anyone's been unfaithful.\"",
     "why": "Implying infidelity goes beyond the evidence and can inflame a relationship crisis."
    },
    {
     "dont": "\"Don't worry, it definitely won't affect your fertility.\"",
     "instead": "\"A single infection treated promptly very rarely affects fertility. Treating it now is how we protect it.\"",
     "why": "Absolute reassurance is inaccurate; accurate reassurance is stronger."
    },
    {
     "dont": "\"Just pick up the antibiotics from the pharmacy.\"",
     "instead": "\"The aching and soreness you mention need me to examine you today.\"",
     "why": "Missing possible PID is a patient-safety failure."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Relationship shock",
     "t": "A positive STI result in a long-term relationship often lands as a crisis of trust. Stay neutral, and consider whether she feels safe to tell her partner; ask gently if there is any fear of his reaction."
    },
    {
     "h": "Stigma and shame",
     "t": "Shame delays partner notification and future testing. Normalise: chlamydia is the commonest bacterial STI diagnosed in England (UKHSA)."
    }
   ],
   "legal": [
    {
     "h": "Confidentiality",
     "t": "Sexual health information is confidential. Do not contact the partner without her agreement; provider notification through sexual health services keeps her identity anonymous (GMC Confidentiality 2017)."
    },
    {
     "h": "Consent for testing",
     "t": "HIV and other STI tests are offered with her informed agreement; explain how results will be given."
    }
   ],
   "professional": [
    {
     "h": "Remote consultation limits",
     "t": "A telephone result is fine for uncomplicated infection, but symptoms suggesting PID need examination. Recognise the limit of the medium and bring her in."
    },
    {
     "h": "Non-judgemental care",
     "t": "Keep personal views on relationships out of the consultation (GMC Good Medical Practice 2024)."
    }
   ],
   "community": [
    {
     "h": "Sexual health services",
     "t": "Local integrated sexual health clinics provide health-adviser partner notification, free testing and condoms; online self-sampling kits are available in many areas."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Pelvic pain with fever, vomiting or systemic illness: possible severe PID, same-day hospital assessment",
     "Positive pregnancy test with pain or tenderness: exclude ectopic pregnancy urgently",
     "Intermenstrual bleeding with deep dyspareunia or pelvic aching: examine for PID"
    ],
    "psychosocial": [
     "Two-year relationship; anger and fear about trust",
     "Shame and dread of telling her partner",
     "Any fear of her partner's reaction"
    ],
    "ice": [
     "Idea: \"A positive test means he's cheated.\"",
     "Concern: \"Can it stop me having kids?\" and what it means for the relationship",
     "Expectation: to be told whether he cheated and whether her fertility is affected"
    ]
   },
   "diagnosis": "\"Your test shows chlamydia. It's common and very treatable. Because of the aching and soreness, I also want to check it hasn't spread higher.\"",
   "diagnosisLay": "\"Chlamydia is like a quiet lodger: it can move in and stay for months without making any noise. So finding it now tells us it's there, not when it arrived.\"",
   "management": {
    "reflectIce": "\"You asked two big questions: whether he's cheated, and whether you can still have children. The test can't answer the first, and the answer to the second is very reassuring once it's treated.\"",
    "psychosocial": "Support the relationship shock without taking sides; offer her the choice of telling her partner herself or anonymous notification via the clinic.",
    "sharedPlan": [
     "Same-day examination and pregnancy test for possible PID",
     "Doxycycline 100 mg twice daily for 7 days, or the BASHH PID regimen if PID is suspected",
     "Partner treated regardless of result; no sex until both treated",
     "HIV, syphilis and gonorrhoea tests; retest for reinfection"
    ],
    "safetyNet": [
     "Worsening pain, fever, vomiting or feeling faint: same-day contact or 111",
     "Retest for reinfection in a few months; book in to talk about the relationship any time"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Chlamydia",
    "s": "Management · BASHH 2026",
    "href": "management/chlamydia.html"
   },
   {
    "ic": "💠",
    "t": "Pelvic inflammatory disease",
    "s": "Management · BASHH PID regimen",
    "href": "management/pelvic-inflammatory-disease.html"
   },
   {
    "ic": "🗺️",
    "t": "Pelvic pain in women",
    "s": "Visual algorithm · PID and ectopic",
    "href": "algorithms/pelvic-pain-women.html"
   },
   {
    "ic": "💠",
    "t": "Contraception",
    "s": "Management · drug interactions",
    "href": "management/contraception.html"
   }
  ],
  "pitfalls": {
   "intro": "The treatment here is simple. The station is won or lost on the \"has he cheated?\" question, spotting possible PID, and getting partner notification to actually happen.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Confirming or hinting at infidelity: \"It must have come from somewhere recent.\"",
     "why": "Chlamydia can persist silently for months or longer, so the result cannot date or source the infection. This is a factual error as well as a communication one.",
     "fix": "\"This test can't tell us when or from whom it was caught. It isn't proof of anything about your relationship.\""
    },
    {
     "dom": "tasks",
     "fail": "Prescribing doxycycline over the phone without asking about pain, dyspareunia, fever or pregnancy.",
     "why": "Her IMB and pelvic aching raise the possibility of PID, which needs examination and a 14-day regimen (BASHH PID 2019). Pregnancy changes the antibiotic.",
     "fix": "Ask the PID questions, check pregnancy, and bring her in the same day if any are present."
    },
    {
     "dom": "tasks",
     "fail": "Giving single-dose azithromycin, or advising extra contraception with doxycycline.",
     "why": "BASHH 2026 names doxycycline 7 days as sole first line; doxycycline does not affect the combined pill (FSRH CEU 2022).",
     "fix": "\"Doxycycline twice a day for a week. It won't affect your pill.\""
    },
    {
     "dom": "rto",
     "fail": "Telling her the partner \"must be told\" and moving on, with no discussion of how.",
     "why": "Partner notification fails when the emotional barrier is ignored, and reinfection follows.",
     "fix": "Explore how she feels about telling him and offer anonymous provider notification as a real choice."
    },
    {
     "dom": "rto",
     "fail": "Answering the fertility question with \"it'll be fine\".",
     "why": "Vague reassurance sounds dismissive and is not accurate.",
     "fix": "Explain that untreated or repeated infection is the risk, and today's plan is what protects her fertility."
    },
    {
     "dom": "gs",
     "fail": "Launching into the result before confirming identity and privacy.",
     "why": "Breaches confidentiality and starts a sensitive call badly.",
     "fix": "Check date of birth and whether she can talk freely before giving any result."
    },
    {
     "dom": "gs",
     "fail": "Ending with \"ring if you have any problems\".",
     "why": "Non-specific safety-netting is a standard failing statement.",
     "fix": "Name the red flags: worsening pain, fever, vomiting, feeling faint, heavy bleeding."
    }
   ]
  }
 },
 "coeliac-disease": {
  "stem": {
   "name": "Erin Doyle",
   "age": "32-year-old woman",
   "pmh": [
    "Long-standing “IBS” (bloating, loose stools, cramps) — clinical label, no documented work-up",
    "Chronic tiredness"
   ],
   "meds": [
    "Loperamide — bought over the counter"
   ],
   "allergy": "No known drug allergies",
   "recent": "Bloods taken for tiredness: iron-deficiency anaemia. No coeliac serology on record. Teacher.",
   "reason": "Video consultation to discuss her blood results and her bowel symptoms."
  },
  "knowledge": {
   "guideline": "NICE NG20 (2015) · NICE CG61 (2008, updated 2017) · NICE DG11 (2013) · BSG iron-deficiency anaemia guideline (2021)",
   "summary": "IBS does not cause iron-deficiency anaemia. Years of “IBS” plus iron deficiency, tiredness, mouth ulcers and a little weight loss is coeliac disease until serology says otherwise — tested correctly, while she is still eating gluten.",
   "points": [
    {
     "h": "Re-open the IBS label",
     "t": "NICE CG61: IBS is diagnosed only after the red flags and baseline tests are clear — FBC, ESR/CRP and coeliac serology. Anaemia and unexplained weight loss are among the features that call for further investigation rather than an IBS label."
    },
    {
     "h": "Who to test for coeliac disease",
     "t": "NICE NG20: offer serology to people with persistent unexplained GI symptoms, IBS-type symptoms, unexplained iron, B12 or folate deficiency, unexplained weight loss, prolonged fatigue, severe or persistent mouth ulcers, type 1 diabetes, autoimmune thyroid disease, and first-degree relatives of people with coeliac disease. A sister with type 1 diabetes adds weight to an autoimmune picture but is not in itself a testing criterion."
    },
    {
     "h": "Test correctly — on gluten",
     "t": "NICE NG20: first-line is total IgA plus IgA tissue transglutaminase (tTG-IgA); use IgG-based tests if IgA-deficient. The person must eat gluten in more than one meal every day for at least 6 weeks before testing. Advise explicitly not to cut gluten out before the diagnosis is confirmed."
    },
    {
     "h": "Confirm and refer",
     "t": "NICE NG20: positive serology → refer to gastroenterology for endoscopic duodenal biopsy, still eating gluten. Do not diagnose coeliac disease in adults on serology alone. After diagnosis: lifelong gluten-free diet, dietitian support, bone health assessment, and pneumococcal vaccination for functional hyposplenism."
    },
    {
     "h": "The anaemia in its own right",
     "t": "BSG 2021: confirm iron deficiency with ferritin, screen all adults with IDA for coeliac disease, ask about menstrual loss and diet, and treat with oral iron while the cause is sought — product and dose per BNF. In premenopausal women, GI investigation is guided by symptoms, age and family history. Faecal calprotectin (NICE DG11) helps separate IBD from IBS in adults with lower GI symptoms."
    },
    {
     "h": "Why the diagnosis matters",
     "t": "Untreated coeliac disease leads to ongoing malabsorption, anaemia, low bone density and subfertility, and rarely small-bowel lymphoma. A gluten-free diet usually settles symptoms and restores iron, so a named diagnosis is worth far more than stronger antidiarrhoeals."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Erin, I’m Dr Shah. I can see your blood results, but before I say anything about them — tell me in your own words what’s been going on.",
    "dom": "rto",
    "why": "Open question before the results or the request"
   },
   {
    "who": "pt",
    "text": "I’ve had IBS for years — bloating, running to the loo, cramps. I’ve made my peace with it. But I’m so tired lately, and the blood test says I’m anaemic. Can I just have some stronger tummy tablets and some iron? I haven’t got time to be ill."
   },
   {
    "who": "dr",
    "text": "Thank you — that’s clear, and I’ll come back to the tablets and the iron. I’d like to ask a few questions about the tummy and the tiredness, explain what I think the blood test is telling us, and agree a plan. Is that okay?",
    "dom": "gs",
    "why": "Acknowledges her request and sets a shared agenda"
   },
   {
    "who": "pt",
    "text": "Sure. As long as it’s quick."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Tell me about the tiredness. How is it affecting you, day to day?",
    "dom": "rto",
    "why": "Explores impact rather than accepting “just tired”"
   },
   {
    "who": "pt",
    "text": "Wiped out. I get home from school and just sit. I’m not the person I was, if I’m honest."
   },
   {
    "who": "dr",
    "text": "That sounds hard. With the tummy — any blood in your stools, or waking at night to open your bowels?",
    "dom": "tasks",
    "why": "Screens lower GI red flags"
   },
   {
    "who": "pt",
    "text": "No blood. Just loose, and a lot of bloating."
   },
   {
    "who": "dr",
    "text": "Has your weight changed at all? And do you get any mouth ulcers, or any itchy rash?",
    "dom": "tasks",
    "why": "Targets the coeliac cluster: weight loss, ulcers, skin"
   },
   {
    "who": "pt",
    "text": "I’ve lost a bit, but I’m busy, so… And yes, I get mouth ulcers now and then. I thought that was stress."
   },
   {
    "who": "dr",
    "text": "Does anything like coeliac disease, thyroid problems or diabetes run in the family?",
    "dom": "tasks",
    "why": "Autoimmune family history"
   },
   {
    "who": "pt",
    "text": "My sister has type 1 diabetes. Nothing else that I know of."
   },
   {
    "who": "dr",
    "text": "And your periods — would you say they’re heavy? And what’s a normal day of eating for you — plenty of bread, pasta, cereal?",
    "dom": "tasks",
    "why": "Other causes of IDA, and confirms she is currently eating gluten"
   },
   {
    "who": "pt",
    "text": "Nothing out of the ordinary with periods, I don’t think. And I eat normally — toast, sandwiches, pasta. The usual."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said you’re not the person you were. Has any part of you been wondering whether something more is going on?",
    "dom": "rto",
    "why": "Picks up the cue and gently surfaces the hidden fear"
   },
   {
    "who": "pt",
    "text": "…Honestly? Yes. I keep telling myself it’s IBS and work, but sometimes I lie awake thinking something’s really wrong with me. I just push it down."
   },
   {
    "who": "dr",
    "text": "Thank you for saying that. It makes sense after years of feeling like this — and I don’t think you’ve been making a fuss over nothing. I think your body has been telling us something.",
    "dom": "rto",
    "why": "Validates the fear and the self-sacrificing pattern"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Here’s what stands out. IBS doesn’t make people anaemic — and you are. Put that with the tummy symptoms, the tiredness, the mouth ulcers and the weight loss, and I think of a condition called coeliac disease, where the gut reacts to gluten and stops absorbing iron properly.",
    "dom": "tasks",
    "why": "IDA is a flag against IBS; names coeliac from the cluster"
   },
   {
    "who": "pt",
    "text": "Coeliac? I’ve had IBS for years. Nobody’s ever said that."
   },
   {
    "who": "dr",
    "text": "It’s common and it hides behind an IBS label for years. The good news is it’s a blood test to start with, and if it’s positive a specialist confirms it with a small sample from the gut taken during a camera test.",
    "dom": "tasks",
    "why": "Explains serology then biopsy confirmation in adults"
   },
   {
    "who": "dr",
    "text": "One thing matters more than anything else: the test only works if you keep eating gluten — bread, pasta, cereal in more than one meal every day. Please don’t cut it out before the test, or the result can come back falsely normal. Can you tell me back what I’ve asked you to do?",
    "dom": "tasks",
    "why": "The gluten instruction with teach-back"
   },
   {
    "who": "pt",
    "text": "Keep eating bread and pasta as normal, don’t go gluten-free yet, even if I want to."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Exactly. So the plan I’d suggest: the coeliac blood test with a total antibody level, iron stores and a few other checks, and a stool test that looks for gut inflammation. I’ll also start iron now, because you need it — but alongside finding out why, not instead of it. How does that sound?",
    "dom": "tasks",
    "why": "Anaemia work-up plus treatment, not iron alone"
   },
   {
    "who": "pt",
    "text": "That makes sense. What about stronger tablets for my stomach?"
   },
   {
    "who": "dr",
    "text": "I’d rather not escalate those yet — if this is coeliac disease, stronger tablets only mask it. Use your loperamide sparingly if you need it for school. If the test is positive, you’d see a gut specialist and a dietitian, and many people feel like a different person once they’re properly gluten-free.",
    "dom": "rto",
    "why": "Negotiates the request honestly and offers hope"
   },
   {
    "who": "pt",
    "text": "That would be amazing. I’d love my energy back."
   },
   {
    "who": "dr",
    "text": "And while we wait, is there anything at work that would help — even just not taking on extra this term?",
    "dom": "gs",
    "why": "Tailors the plan to her “no time to be ill” pattern"
   },
   {
    "who": "pt",
    "text": "Maybe. I always say yes to everything."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you notice blood in your stools, black stools, weight dropping further, severe pain, or feeling breathless or faint, contact us sooner rather than waiting. I’ll book a call to go through the results in about two weeks.",
    "dom": "gs",
    "why": "Specific safety-net and a booked follow-up"
   },
   {
    "who": "pt",
    "text": "Okay. Thank you — I came in for tablets and I feel like I’ve actually been listened to."
   },
   {
    "who": "dr",
    "text": "So: keep eating gluten, bloods and stool test this week, iron started, and a call in two weeks. Anything we haven’t covered?",
    "dom": "rto",
    "why": "Summarises and shares the floor"
   },
   {
    "who": "pt",
    "text": "No, that’s everything."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question first; let her describe the “IBS”, the tiredness and what the anaemia result meant to her before responding to the tablet request.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Teaching workload, the impact of exhaustion on work and identity, and the “no time to be ill” pattern.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “not the person I was”, the weight loss she dismissed and the mouth ulcers she blamed on stress.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Her idea (long-standing IBS plus work), the buried fear that something is really wrong, and her wish for stronger tablets and iron.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Total IgA plus tTG-IgA while on gluten; ferritin and haematinics; ESR/CRP; faecal calprotectin; abdominal examination at a face-to-face review.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Coeliac disease versus IBD versus menstrual or dietary iron loss; recognises that IBS does not explain iron deficiency.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about rectal bleeding, nocturnal symptoms and weight loss; clear on when this becomes urgent.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Possible coeliac disease under a long IBS label, with iron-deficiency anaemia from malabsorption — shared in plain words.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Keep eating gluten (more than one meal a day, at least 6 weeks); serology; oral iron while investigating; biopsy referral if positive; no escalation of antidiarrhoeals.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Looks for other deficiencies (B12, folate, vitamin D); plans dietitian, bone health and vaccination if coeliac is confirmed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Results review booked; GI bleeding, further weight loss, severe pain or anaemia symptoms named for earlier contact.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Investigations & results"
   ],
   "stem": {
    "name": "Erin Doyle",
    "age": "32 years · female",
    "pmh": [
     "“IBS” — long-standing, no documented work-up",
     "Tiredness"
    ],
    "meds": [
     "OTC loperamide"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Bloods for tiredness: iron-deficiency anaemia. No coeliac serology on file. No iron started.",
    "reason": "Video consultation: “I need stronger tablets for my IBS — and something for the tiredness.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "She opens with a fixed request. Let her finish, then ask about the tiredness — that is where the story is."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Red flags (blood, nocturnal symptoms, weight), coeliac cluster (ulcers, rash, family autoimmunity), periods and diet — and confirm she is eating gluten now."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "Surface the buried “something’s really wrong” fear. Validate it before you explain anything."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "IBS doesn’t cause iron deficiency. Name coeliac. The keep-eating-gluten instruction with teach-back. Serology, anaemia work-up, iron now, biopsy if positive."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "GI red flags named, results call booked, summary and a question to share the floor."
    }
   ],
   "wordPics": {
    "fail": "Relabels it as IBS, prescribes a stronger antispasmodic and iron, and closes; never connects anaemia with the bowel symptoms; advises a trial of gluten-free diet “to see if it helps” before testing; misses the exhaustion and fear.",
    "pass": "Recognises that iron deficiency doesn’t fit IBS; arranges coeliac serology with total IgA and tells her to keep eating gluten; checks for red flags; starts iron while investigating; books results follow-up.",
    "exc": "All of the above, plus: draws out the suppressed fear and the “no time to be ill” pattern and answers both; uses teach-back on the gluten instruction; explains biopsy confirmation and dietitian support; offers the genuine hope of a treatable diagnosis; she leaves feeling heard, not dismissed."
   },
   "avoid": [
    {
     "dont": "“Try cutting out gluten for a few weeks and see if you feel better.”",
     "instead": "“Please keep eating gluten in more than one meal a day until we’ve done the test — otherwise it can come back falsely normal.”",
     "why": "A gluten-free trial before serology is the classic error and can delay the diagnosis by months."
    },
    {
     "dont": "“Your IBS is flaring — let’s try a stronger tablet.”",
     "instead": "“IBS doesn’t make people anaemic, so I think there’s a findable reason for all of this.”",
     "why": "Accepting the old label is the clinical fail in this station."
    },
    {
     "dont": "“Take these iron tablets and we’ll recheck in three months.”",
     "instead": "“I’ll start iron because you need it — and at the same time find out why you’re low.”",
     "why": "Treating the number without seeking the cause misses the diagnosis."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Work and identity",
     "t": "A teacher who says yes to everything and has “no time to be ill”. Exhaustion is affecting her work and sense of self; the plan must fit a school timetable, not add guilt."
    },
    {
     "h": "Living gluten-free",
     "t": "If confirmed, a lifelong gluten-free diet affects shopping, cost, eating out and school meals. Dietitian input and label-reading skills decide whether it works."
    }
   ],
   "legal": [
    {
     "h": "Fit notes and workplace adjustments",
     "t": "If fatigue or investigations affect her work, a fit note can suggest adjustments (for example altered duties) rather than full absence. Coeliac disease can be a disability under the Equality Act 2010 where its effects are substantial and long-term — relevant only if symptoms persist."
    }
   ],
   "professional": [
    {
     "h": "Reviewing inherited labels",
     "t": "A diagnosis recorded years ago is a working hypothesis, not a fact. New results that don’t fit — iron deficiency here — are a prompt to re-examine it (GMC Good Medical Practice 2024: good clinical care)."
    },
    {
     "h": "Safe prescribing",
     "t": "Escalating antidiarrhoeals or giving iron without investigating the cause would treat numbers and symptoms, not the patient. Document the reasoning and the gluten advice."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Coeliac UK (information, food directory, local groups); community pharmacy for iron counselling; practice dietitian or local dietetic service after diagnosis. Gluten-free food on prescription varies by area."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Iron-deficiency anaemia with bowel symptoms — not explained by IBS",
     "Unintentional weight loss, rectal bleeding, nocturnal diarrhoea — investigate rather than label",
     "Symptoms of significant anaemia: breathlessness, chest pain, near-faints — earlier review"
    ],
    "psychosocial": [
     "Impact of fatigue on teaching and on how she sees herself",
     "The “no time to be ill” pattern that has kept her normalising symptoms",
     "Practical barriers to tests and to a future diet change"
    ],
    "ice": [
     "Idea: “It’s my IBS and work tiredness”",
     "Concern: a buried fear that something is really wrong, pushed down for years",
     "Expectation: stronger tummy tablets and iron, quickly"
    ]
   },
   "diagnosis": "Be honest that the label may be wrong: “IBS doesn’t cause iron deficiency. With your symptoms, the ulcers and the weight loss, I want to test for coeliac disease — and I’d like to find the cause rather than keep treating the symptoms.”",
   "diagnosisLay": "“Think of the lining of your gut as a thick carpet that soaks up iron and nutrients. In coeliac disease, gluten wears the carpet thin, so iron slips through. The blood test looks for the body’s reaction to gluten — which is why you need to keep eating it until we’ve tested.”",
   "management": {
    "reflectIce": "“You’ve been quietly worried something is really wrong and kept going anyway. I think you were right to wonder — and the good news is that what I’m looking for is very treatable.”",
    "psychosocial": "Work with her pace: one set of tests this week, iron started, a results call booked. Invite her to take something off her plate at work while this is sorted.",
    "sharedPlan": [
     "Total IgA plus tTG-IgA while eating gluten in more than one meal a day (at least 6 weeks); ferritin, B12, folate, ESR/CRP; faecal calprotectin",
     "Oral iron now, product and dose per BNF, while the cause is sought",
     "Positive serology → gastroenterology for duodenal biopsy; dietitian, bone health and vaccination review if confirmed"
    ],
    "safetyNet": [
     "Rectal bleeding or black stools, further weight loss, severe pain, breathlessness or faintness → contact the practice promptly",
     "Results review in about two weeks; do not start a gluten-free diet until told the diagnosis is confirmed"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Coeliac disease",
    "s": "Case walkthrough · NICE NG20",
    "href": "../cases/coeliac.html"
   },
   {
    "ic": "💠",
    "t": "Coeliac disease protocol",
    "s": "Test on gluten · biopsy · follow-up",
    "href": "management/coeliac-disease.html"
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
    "s": "Iron dosing · cause-finding",
    "href": "management/iron-deficiency-anaemia.html"
   },
   {
    "ic": "📋",
    "t": "Irritable bowel syndrome",
    "s": "Case walkthrough · NICE CG61",
    "href": "../cases/ibs.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by doctors who treat the request rather than the patient: a stronger tablet, some iron, and a diagnosis nobody checked. The marks sit in spotting that the numbers don’t fit the label, and in testing correctly.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting “IBS” and prescribing a stronger antispasmodic or antidiarrhoeal.",
     "why": "IBS does not cause iron-deficiency anaemia; NICE CG61 requires anaemia and weight loss to be investigated. “Management plan not in line with current UK best practice.”",
     "fix": "Say it out loud: “IBS doesn’t make people anaemic — so I want to look for a cause.” Then test for coeliac disease."
    },
    {
     "dom": "tasks",
     "fail": "Suggesting a trial of gluten-free diet before any blood test.",
     "why": "NICE NG20: the person must eat gluten in more than one meal a day for at least 6 weeks before testing; going gluten-free makes serology and biopsy unreliable.",
     "fix": "Give the instruction clearly and check it with teach-back: “Tell me what I’ve asked you to do about bread and pasta.”"
    },
    {
     "dom": "tasks",
     "fail": "Ordering tTG-IgA alone, or diagnosing coeliac disease on serology and starting the diet.",
     "why": "Total IgA is needed to avoid a false negative in IgA deficiency, and adults need biopsy confirmation (NICE NG20).",
     "fix": "“A blood test for the antibody and your total antibody level; if it’s positive, a specialist confirms it with a small sample from the gut.”"
    },
    {
     "dom": "rto",
     "fail": "Missing “I’m not the person I was” and moving straight to tests.",
     "why": "“Does not identify or respond to the patient’s cues.” Her hidden agenda is a long-suppressed fear, and it is what makes her engage with the plan.",
     "fix": "Pause: “Has part of you been wondering whether something more is going on?” Then validate before explaining."
    },
    {
     "dom": "rto",
     "fail": "Dismissing her request flatly — “No, you don’t need stronger tablets.”",
     "why": "Refusing without explanation reads as paternalistic and loses her trust in the investigation plan.",
     "fix": "Explain why: “If this is coeliac disease, stronger tablets would only hide it. Let’s find the cause — and I’ll treat your iron today.”"
    },
    {
     "dom": "gs",
     "fail": "Closing with “we’ll ring you with the results” and nothing else.",
     "why": "Non-specific safety-netting and no defined follow-up are standard failing feedback.",
     "fix": "Name the red flags (bleeding, black stools, weight loss, faintness), book the results call, and summarise the plan in one sentence."
    }
   ]
  }
 },
 "covert-medication": {
  "stem": {
   "name": "Janet Pugh",
   "age": "58-year-old woman",
   "pmh": [
    "Main carer for her mother (84, advanced dementia), who lives with her"
   ],
   "meds": [
    "Not relevant to today's call"
   ],
   "allergy": "Not recorded for this call",
   "recent": "Her mother is registered at the practice: advanced dementia; prescribed an antipsychotic and blood-pressure medicines. No capacity assessment, best-interests decision or covert-medication plan on file.",
   "reason": "Telephone call: wants to discuss her mother's tablets."
  },
  "knowledge": {
   "guideline": "Mental Capacity Act 2005 · SC1 Managing medicines in care homes (2014) · NICE NG97 (dementia) · NICE NG5 (medicines optimisation) · NICE NG150 (supporting adult carers) · Care Act 2014 · BNF",
   "summary": "Covert medication can be lawful for someone who lacks capacity, but only through a documented best-interests process with pharmacist input and regular review. Use the call to review whether each medicine is still needed and to support an exhausted carer.",
   "points": [
    {
     "h": "When covert medication is lawful",
     "t": "Only when the person lacks capacity for that specific medication decision (assessed under the Mental Capacity Act 2005), it is in their best interests, and no valid advance decision or health and welfare attorney refuses it. A person with capacity who refuses medicine must not be given it covertly."
    },
    {
     "h": "The process",
     "t": "A best-interests decision involving the prescriber, a pharmacist, carers and family, then a documented plan setting out which medicines, how they are given, and when the plan will be reviewed. SC1 (Managing medicines in care homes, 2014) sets out this process; the same principles apply at home."
    },
    {
     "h": "Pharmacist advice on crushing",
     "t": "Crushing can make some medicines unsafe or ineffective (for example modified-release or enteric-coated forms) and is often outside the product licence. A pharmacist should advise on each drug, and on alternatives such as liquids or different formulations."
    },
    {
     "h": "Review what is still needed",
     "t": "Refusal is a trigger for a structured medication review (NICE NG5). In dementia, antipsychotics should be used only for severe distress or risk of harm and reassessed at least every 6 weeks (NICE NG97); they carry increased risk of stroke and death in older people with dementia (BNF). Preventive medicines such as antihypertensives may no longer be of benefit."
    },
    {
     "h": "Why is she refusing?",
     "t": "Consider swallowing difficulty, pain, oral problems, side-effects, delirium, and the size or taste of tablets. Fixing the cause may remove the need for covert administration."
    },
    {
     "h": "Support the carer",
     "t": "Any carer who appears to have support needs is entitled to a local authority carer's assessment (Care Act 2014). NICE NG150 advises identifying carers and offering information, respite and support."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Mrs Pugh? It's one of the GPs returning your call. How can I help today?",
    "dom": "rto",
    "why": "Open question"
   },
   {
    "who": "pt",
    "text": "Doctor, I need to be honest and I hope I'm not in trouble. Mum won't take her tablets. She clamps her mouth shut, throws them. So I've been crushing them into her tea so she gets them. She needs them, don't she? That's alright, isn't it? I can't keep fighting her three times a day."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me, and no, you're not in trouble. It's clear you're doing this because you care about her. I'd like to help you get this on a safe footing. Can I ask a few questions first?",
    "dom": "rto",
    "why": "Non-judgemental response that keeps her engaged"
   },
   {
    "who": "pt",
    "text": "Yes. I've been worried sick about it."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Which tablets are you crushing, and how long has this been going on?",
    "dom": "tasks",
    "why": "Establishes which drugs are involved"
   },
   {
    "who": "pt",
    "text": "All of them. The one for her agitation and her blood pressure ones. For a while now."
   },
   {
    "who": "dr",
    "text": "When she refuses, do you have any sense why? Does she struggle to swallow, seem in pain, or is it more that she doesn't understand what they are?",
    "dom": "tasks",
    "why": "Looks for a treatable cause of refusal"
   },
   {
    "who": "pt",
    "text": "I think she just doesn't understand what they are any more."
   },
   {
    "who": "dr",
    "text": "That must be really hard. Has anything changed recently: more confused than usual, sleepier, off her food, falls?",
    "dom": "tasks",
    "why": "Screens for delirium or adverse effects"
   },
   {
    "who": "pt",
    "text": "Not that I've noticed. She's about the same."
   },
   {
    "who": "dr",
    "text": "Does anyone hold a lasting power of attorney for her health, or did she ever write down wishes about treatment?",
    "dom": "tasks",
    "why": "Checks for LPA or advance decision"
   },
   {
    "who": "pt",
    "text": "I'm not sure. I don't think so."
   },
   {
    "phase": "The carer",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said you can't keep fighting her three times a day. How are you doing yourself?",
    "dom": "rto",
    "why": "Picks up the carer-strain cue"
   },
   {
    "who": "pt",
    "text": "(voice breaks) I'm exhausted. And I feel guilty, like I'm tricking her."
   },
   {
    "who": "dr",
    "text": "That sounds like an enormous amount to carry on your own. Caring for someone with advanced dementia is one of the hardest things anyone does. Do you get any help or breaks at the moment?",
    "dom": "rto",
    "why": "Validates and explores support"
   },
   {
    "who": "pt",
    "text": "Not really. It's just me."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me explain where things stand. Giving medicine hidden in food or drink can be the right thing for someone like your mum, who can't make the decision herself. But it's not a decision a carer is allowed to make alone. The law asks for a proper process: we assess her capacity for this decision, agree together that it's in her best interests, and write down a plan.",
    "dom": "tasks",
    "why": "Explains the lawful basis and the need for a formal process"
   },
   {
    "who": "pt",
    "text": "So I've been doing it wrong."
   },
   {
    "who": "dr",
    "text": "You've been doing your best in an impossible situation. What we're adding is the safety net around it. The other important part is a pharmacist check, because some tablets become unsafe or stop working properly if they're crushed.",
    "dom": "tasks",
    "why": "Pharmacist input on crushing safety"
   },
   {
    "who": "pt",
    "text": "I didn't know that."
   },
   {
    "who": "dr",
    "text": "Most people don't. And there's a bigger question: does your mum still need all these tablets? The one for agitation can increase the risk of stroke in people with dementia, and it's meant to be reviewed regularly. Some blood-pressure tablets may not be helping her any more. If we can safely stop some, there are fewer battles for you.",
    "dom": "tasks",
    "why": "Opens deprescribing: antipsychotic risk and preventive meds"
   },
   {
    "who": "pt",
    "text": "That would make such a difference."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here's what I suggest. I'll arrange to see your mum, ideally at home, to assess her capacity and review every medicine with you. I'll involve the pharmacist about what can be crushed or swapped for a liquid. Then we'll agree a written plan together. Does that sound alright?",
    "dom": "tasks",
    "why": "Concrete plan: capacity assessment, medication review, pharmacist, documented plan"
   },
   {
    "who": "pt",
    "text": "Yes. What do I do in the meantime?"
   },
   {
    "who": "dr",
    "text": "Keep giving her the blood-pressure tablets as you have been for now, but I'll ask the pharmacist to check today whether any of them shouldn't be crushed. I'll look at the agitation medicine at the visit. If she becomes unwell, ring us straight away.",
    "dom": "gs",
    "why": "Safe interim plan without abrupt changes"
   },
   {
    "who": "dr",
    "text": "And for you: I'd like to refer you for a carer's assessment with social services. It can lead to respite, help at home and support for you. Would you be happy for me to do that?",
    "dom": "tasks",
    "why": "Carer's assessment under the Care Act 2014"
   },
   {
    "who": "pt",
    "text": "Yes, please. I didn't think I was allowed to ask."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "You're entitled to it. If your mum becomes suddenly more confused, drowsy, stops drinking, falls or seems unwell, ring us the same day, or 111 out of hours. And if you feel you can't cope, please call us. You matter here too.",
    "dom": "gs",
    "why": "Specific safety-net for patient and carer"
   },
   {
    "who": "pt",
    "text": "Thank you. I've been dreading this call."
   },
   {
    "who": "dr",
    "text": "Can you tell me what we've agreed, so I know I've explained it clearly?",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "You'll visit Mum and check she can't decide, the pharmacist will check the tablets, you'll look at stopping some, and I'll get a carer's assessment."
   },
   {
    "who": "dr",
    "text": "Exactly. I'll write this up today. You did the right thing ringing. You're not on your own with this now.",
    "dom": "rto",
    "why": "Affirms her and closes warmly"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; lets her explain fully; immediately reassures her she is not in trouble.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Carer role, exhaustion, guilt, isolation, support and breaks.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up \"I can't keep fighting her three times a day\" and the guilt, and explored carer strain.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (crushing is what's best); concern (being in trouble, exhaustion); expectation (reassurance it's fine).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Home visit for capacity assessment and structured medication review; pharmacist review of each drug's formulation.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Reasons for refusal: dementia progression, dysphagia, pain, side-effects, delirium.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screens for acute change (delirium, drowsiness, falls, poor intake); flags antipsychotic stroke and mortality risk.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Informal covert administration in a person likely lacking capacity, without a best-interests process; carer strain.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Neither endorses nor condemns; MCA process, best-interests decision, pharmacist advice, documented covert plan; safe interim plan.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Deprescribing review (antipsychotic reassessment per NICE NG97; preventive BP meds); carer's assessment and respite.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Same-day safety-net for acute change; carer crisis support; documented plan with review date; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Professional & ethical dilemmas",
    "Older adults",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Janet Pugh (caller)",
    "age": "58 years · female · carer",
    "pmh": [
     "Main carer for mother (84, advanced dementia)"
    ],
    "meds": [
     "Not relevant to call"
    ],
    "allergy": "Not recorded",
    "recent": "⚠ Mother: advanced dementia; on an antipsychotic and antihypertensives. No capacity assessment, best-interests record or covert-medication plan on file.",
    "reason": "Telephone: \"about Mum's tablets.\""
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and reassure",
     "d": "She fears being in trouble. Reassure first: \"You're not in trouble.\" Then ask to understand more."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Which drugs, how long, why she refuses, acute change or delirium, any LPA or advance decision."
    },
    {
     "t": "4–6",
     "h": "The carer",
     "d": "\"How are you doing yourself?\" Exhaustion, guilt, no support. Validate."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Lawful only via MCA best-interests process. Pharmacist on crushing. Review antipsychotic and preventive meds. Home visit. Carer's assessment."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Safe interim plan, acute-change safety-net, support for her, teach-back, documentation."
    }
   ],
   "wordPics": {
    "fail": "Tells her it's fine and carries on, or tells her she has done something illegal; no mention of capacity or a best-interests process; ignores the carer's exhaustion; no medication review.",
    "pass": "Explains that covert medication needs a capacity assessment and best-interests decision; mentions pharmacist advice; plans a medication review; offers carer support.",
    "exc": "All of the above, plus: reassures before explaining; asks why her mother refuses and checks for delirium; checks for LPA or advance decision; names the antipsychotic risk and NICE NG97 review; gives a safe interim plan; arranges a carer's assessment; the daughter leaves relieved and supported rather than judged."
   },
   "avoid": [
    {
     "dont": "\"That's fine, as long as she's getting them.\"",
     "instead": "\"It can be the right thing for your mum, but it needs a proper process around it. Let's set that up together.\"",
     "why": "Endorsing informal covert medication bypasses the Mental Capacity Act and pharmacist safety checks."
    },
    {
     "dont": "\"You can't do that. It's against the law.\"",
     "instead": "\"You're not in trouble. You've been doing your best, and now we'll make it safe and lawful.\"",
     "why": "Condemning a well-meaning carer loses her trust and her engagement."
    },
    {
     "dont": "\"Stop crushing them all today.\"",
     "instead": "\"Carry on for now while the pharmacist checks which ones are safe to crush, and I'll review them at the visit.\"",
     "why": "Abrupt changes to medicines can harm the patient; the interim plan must be safe."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Carer strain",
     "t": "Sole carer, exhausted and guilt-ridden, with little or no support. Carer breakdown is a common route to crisis admission for the person with dementia."
    },
    {
     "h": "Dignity and relationship",
     "t": "Covert administration can feel like deception to carers. Acknowledge the guilt and frame the formal process as protecting both of them."
    }
   ],
   "legal": [
    {
     "h": "Mental Capacity Act 2005",
     "t": "Capacity is decision-specific and must be assessed; decisions for a person lacking capacity must be in their best interests and the least restrictive option. Check for a lasting power of attorney for health and welfare or an advance decision."
    },
    {
     "h": "Care Act 2014",
     "t": "Any carer who appears to have support needs is entitled to a carer's assessment from the local authority. Her mother is also entitled to a needs assessment."
    },
    {
     "h": "Deprivation of liberty",
     "t": "Covert medication can form part of a deprivation of liberty. Take advice from the local MCA or safeguarding lead if the overall care arrangements are restrictive."
    }
   ],
   "professional": [
    {
     "h": "Sharing information with carers",
     "t": "When a patient lacks capacity, relevant information can be shared with those close to them where it is in the patient's best interests (GMC Confidentiality 2017)."
    },
    {
     "h": "Documentation",
     "t": "Record the capacity assessment, who was consulted, the best-interests decision, pharmacist advice and the review date."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Local authority adult social care for carer's and needs assessments; Carers UK; Dementia UK Admiral Nurses; Alzheimer's Society; community pharmacist for formulation advice."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Sudden increase in confusion, drowsiness or agitation: possible delirium, same-day review",
     "Reduced eating or drinking, choking or coughing on food or drink: dehydration, aspiration risk",
     "Falls or dizziness on blood-pressure medicines"
    ],
    "psychosocial": [
     "Sole carer with no respite",
     "Exhaustion and guilt",
     "Fear of being in trouble"
    ],
    "ice": [
     "Idea: \"Crushing them is what's best for Mum.\"",
     "Concern: being in trouble; can't keep fighting her three times a day",
     "Expectation: to be told it's alright"
    ]
   },
   "diagnosis": "\"Giving your mum her medicines hidden in tea can be the right thing, but only once we've formally agreed it's in her best interests, checked each tablet with a pharmacist and written a plan.\"",
   "diagnosisLay": "\"Think of it like a seatbelt. What you're doing may be right, but it needs the proper safety checks around it so it protects her and protects you.\"",
   "management": {
    "reflectIce": "\"You rang worried you'd done something wrong. What you've actually done is ask for help, and that's exactly the right thing.\"",
    "psychosocial": "Treat carer strain as central: carer's assessment, respite and support; acknowledge her guilt.",
    "sharedPlan": [
     "Home visit: capacity assessment for the medication decision; check LPA or advance decision",
     "Pharmacist review of each drug and formulation; liquids where possible",
     "Structured medication review: antipsychotic reassessment (NICE NG97), preventive medicines",
     "Documented best-interests covert-medication plan with review date; carer's assessment"
    ],
    "safetyNet": [
     "Sudden confusion, drowsiness, poor intake, falls: same-day contact or 111",
     "Carer crisis: contact the practice; do not stop medicines abruptly meanwhile"
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
    "s": "Antipsychotic review · carer support",
    "href": "management/dementia.html"
   },
   {
    "ic": "📋",
    "t": "Multimorbidity and polypharmacy",
    "s": "Case walkthrough · deprescribing",
    "href": "../cases/multimorbidity-polypharmacy.html"
   },
   {
    "ic": "🗺️",
    "t": "Confusion pathway",
    "s": "Visual algorithm · delirium",
    "href": "algorithms/confusion.html"
   }
  ],
  "pitfalls": {
   "intro": "The trap is binary: endorse or condemn. The marks lie in the middle, where you put a lawful process around what she is doing, review whether the drugs are needed, and support the carer.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Reassuring her that crushing the tablets into tea is fine.",
     "why": "Covert medication without a capacity assessment and best-interests decision bypasses the Mental Capacity Act 2005, and crushing may make some drugs unsafe.",
     "fix": "\"It can be right for your mum, but it needs a proper process. I'll set that up.\""
    },
    {
     "dom": "rto",
     "fail": "Telling her she has acted illegally.",
     "why": "A frightened carer who feels judged disengages; she rang for help.",
     "fix": "Lead with \"You're not in trouble,\" then explain the process as a safety net."
    },
    {
     "dom": "tasks",
     "fail": "No mention of the pharmacist.",
     "why": "Modified-release and enteric-coated forms can be unsafe or ineffective when crushed; pharmacist advice is part of the process (SC1).",
     "fix": "\"A pharmacist will check each tablet and whether a liquid would be better.\""
    },
    {
     "dom": "tasks",
     "fail": "Accepting the medicine list as fixed.",
     "why": "Refusal should trigger a medication review; antipsychotics in dementia need reassessment at least every 6 weeks (NICE NG97).",
     "fix": "\"Does she still need all of these? Let's review them together.\""
    },
    {
     "dom": "rto",
     "fail": "Missing \"I can't keep fighting her three times a day.\"",
     "why": "Carer strain is the hidden agenda; ignoring it caps the Relating domain.",
     "fix": "\"How are you doing yourself?\" and arrange a carer's assessment."
    },
    {
     "dom": "tasks",
     "fail": "Telling her to stop everything until the review.",
     "why": "Abrupt withdrawal can harm the patient.",
     "fix": "Give a safe interim plan pending pharmacist advice and the review visit."
    },
    {
     "dom": "gs",
     "fail": "Closing without a clear next step or date.",
     "why": "No follow-up and non-specific safety-netting are common failing statements.",
     "fix": "Book the home visit, name acute-change red flags, and use teach-back."
    }
   ]
  }
 },
 "dementia-aggression-carer": {
  "stem": {
   "name": "Pauline Frost",
   "age": "62-year-old woman",
   "pmh": [
    "No significant past medical history recorded",
    "Sole carer for her husband Geoff (74, dementia)"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "No recent consultations for herself. Geoff’s record: dementia, possibly mixed with frontotemporal features.",
   "reason": "Telephone call about Geoff: “he’s lashing out — can you sedate him?”"
  },
  "knowledge": {
   "guideline": "NICE NG97 — Dementia: assessment, management and support for people living with dementia and their carers (2018)",
   "summary": "Aggression in dementia is usually distress with a cause. NICE NG97 asks for a structured look for causes and non-drug measures first; antipsychotics only for severe risk or distress. The carer’s safety and breakdown are an urgent problem in their own right.",
   "points": [
    {
     "h": "Look for the cause first",
     "t": "Before any medicine, NICE NG97 advises a structured assessment of possible reasons for distress, checking for and treating clinical or environmental causes — pain, delirium (NICE CG103), constipation, urinary retention, infection, hunger, noise, unfamiliar care. A sudden change in behaviour needs a clinical review of the person with dementia."
    },
    {
     "h": "Non-drug measures",
     "t": "NICE NG97: offer psychosocial and environmental interventions to reduce distress — routine, a calm evening, activity during the day, redirection rather than confrontation — and support for the carer to use them."
    },
    {
     "h": "Antipsychotics — last resort",
     "t": "NICE NG97: only for risk of harm to self or others, or severe distress; lowest effective dose, shortest time, reassess at least every 6 weeks, with a documented discussion of benefits and harms. Antipsychotics increase stroke and death in older people with dementia (MHRA Drug Safety Update, March 2009). Risperidone is licensed only short-term (up to 6 weeks) for persistent aggression in moderate to severe Alzheimer’s (BNF); with frontotemporal features, specialist input is essential."
    },
    {
     "h": "The carer is a patient too",
     "t": "NICE NG150 (supporting adult carers, 2020) asks practices to identify carers and support them. Pauline is entitled to a carer’s assessment under the Care Act 2014. Ask directly about injuries, low mood, exhaustion and thoughts of self-harm."
    },
    {
     "h": "Safety and safeguarding",
     "t": "Being physically harmed by a partner is still harm, even when illness drives it. Make a safety plan (step away, do not restrain, 999 if in danger). Both adults may be at risk; a referral to adult social care under the Care Act 2014 (s42) may be needed if care is breaking down. NICE PH50 covers asking about and responding to domestic abuse."
    },
    {
     "h": "Urgent support",
     "t": "Refer to the older-adult community mental health or memory team (crisis team if risk is escalating), request emergency respite through adult social care, and signpost dementia specialist nursing support such as Admiral Nurses."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and immediate safety",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Pauline Frost? It’s Dr Lee. I can hear how upset you are. Before anything else — are you safe right now, this minute?",
    "dom": "tasks",
    "why": "Checks immediate safety before any agenda"
   },
   {
    "who": "pt",
    "text": "Yes… he’s in his chair now, he’s calmer. But yesterday he grabbed my wrist and pushed me. I’m frightened of my own husband. Can you just give him something to sedate him?"
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That must have been really frightening, and you did exactly the right thing ringing. I will help with Geoff — and I also want to make sure you are looked after. Is that all right?",
    "dom": "rto",
    "why": "Validates her fear and signals she is a patient too"
   },
   {
    "who": "pt",
    "text": "(crying) I’m at the end of my rope, doctor. I really am."
   },
   {
    "who": "dr",
    "text": "I can hear that. Take a moment — there’s no rush. Were you hurt yesterday? Any bruising, or anything that needs looking at?",
    "dom": "tasks",
    "why": "Asks about her physical injury"
   },
   {
    "who": "pt",
    "text": "My wrist is sore. I can move it. It’s more that I didn’t recognise him."
   },
   {
    "phase": "Data gathering — Geoff",
    "clock": "1–4 min",
    "who": "dr",
    "text": "I’d like to see your wrist, and we’ll arrange that. Tell me about the changes in Geoff — when did the lashing out start, and what tends to set it off?",
    "dom": "rto",
    "why": "Open question on the behaviour and its pattern"
   },
   {
    "who": "pt",
    "text": "It’s been getting worse. Evenings are the worst — shouting awful things. Sometimes if I try to help him get changed he just flares up."
   },
   {
    "who": "dr",
    "text": "That’s helpful. Changes like this often have a trigger he can’t tell us about. Has he seemed in pain, or been off his food, constipated, weeing more or less, feverish, or more muddled than usual during the day?",
    "dom": "tasks",
    "why": "Screens for pain, constipation, infection and delirium as triggers"
   },
   {
    "who": "pt",
    "text": "I honestly don’t know. He can’t really tell me things any more. I hadn’t thought about any of that."
   },
   {
    "who": "dr",
    "text": "That’s completely understandable — it’s our job to check. Has anything changed recently: new medicines, a change in routine, visitors, anything different at home?",
    "dom": "tasks",
    "why": "Looks for medicine and environmental triggers"
   },
   {
    "who": "pt",
    "text": "Not that I can think of. It’s just the two of us."
   },
   {
    "phase": "Pauline — the carer",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Just the two of you — so you’re doing all of this on your own. How are you, Pauline? Sleeping, eating, your mood?",
    "dom": "rto",
    "why": "Picks up the isolation cue and turns to her own wellbeing"
   },
   {
    "who": "pt",
    "text": "I don’t sleep. I’m exhausted. And I feel so guilty — he’s my husband, and I’m scared of him. He’d never have done this before."
   },
   {
    "who": "dr",
    "text": "You’re grieving the man he was while caring for the man he is now — that is one of the hardest things anyone does. Feeling frightened doesn’t make you a bad wife. Can I ask — when it gets this bad, do you ever have thoughts of harming yourself, or of not wanting to go on?",
    "dom": "tasks",
    "why": "Validates guilt and grief, then asks directly about self-harm"
   },
   {
    "who": "pt",
    "text": "No. No, never that. I just want some help. I want it to stop."
   },
   {
    "who": "dr",
    "text": "Thank you for being honest. So what you’re hoping for is for Geoff to be calmer and for you to be safe. Is that right?",
    "dom": "rto",
    "why": "Summarises and confirms her expectations"
   },
   {
    "who": "pt",
    "text": "Yes. That’s why I asked for something to sedate him."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I understand why. Let me be honest: sedating medicines in dementia carry real risks — more falls, strokes, and a shorter life — and they don’t fix the cause. The best evidence is to find what’s setting him off. Pain, constipation or an infection can make someone with dementia much more agitated, especially in the evening. So I’d like Geoff seen by a clinician, at home if needed, within the next day to check for those.",
    "dom": "tasks",
    "why": "Explains antipsychotic harms and plans a trigger assessment"
   },
   {
    "who": "pt",
    "text": "So you won’t give him anything?"
   },
   {
    "who": "dr",
    "text": "I won’t rule it out. If, after we’ve looked for causes and tried other things, he is still a serious danger, a specialist may start a medicine at a low dose and review it closely. It’s a last step, not a first — and I don’t want you to wait for that to feel safe.",
    "dom": "rto",
    "why": "Answers her request honestly without a flat refusal"
   },
   {
    "who": "pt",
    "text": "Okay. I just can’t go on like this."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "You shouldn’t have to. Today I’ll make an urgent referral to the older people’s mental health team, who specialise in exactly this. I’ll contact adult social care about emergency respite and a carer’s assessment for you. And I’ll give you details for a dementia specialist nurse service. Would that help?",
    "dom": "tasks",
    "why": "Mobilises urgent specialist, respite and carer support"
   },
   {
    "who": "pt",
    "text": "Yes. I didn’t know I could ask for any of that."
   },
   {
    "who": "dr",
    "text": "Now, for tonight. If he gets angry, don’t try to hold him or argue — step back out of reach, speak calmly, leave the room if you need to. Keep evenings quiet, lights on before dusk, familiar things around. And if you are ever in danger, ring 999. Nobody will judge you — it protects both of you. Is there someone who could come and be with you, or somewhere you could go?",
    "dom": "tasks",
    "why": "Gives a concrete safety plan and evening strategies"
   },
   {
    "who": "pt",
    "text": "There’s someone I could ring, I suppose. I’ve never wanted to bother anyone."
   },
   {
    "who": "dr",
    "text": "Please do — this is exactly the time to lean on people. I’d also like to see you myself this week, in your own appointment, to look at your wrist and see how you are. You matter in this too.",
    "dom": "gs",
    "why": "Books her own follow-up, separate from Geoff’s care"
   },
   {
    "who": "pt",
    "text": "Thank you. Nobody’s asked about me in a long time."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Can you tell me back what you’ll do tonight if he gets angry, and what happens next?",
    "dom": "rto",
    "why": "Teach-back of the safety plan"
   },
   {
    "who": "pt",
    "text": "Step away, don’t hold him, ring 999 if I’m in danger. Someone comes to check Geoff, you’re referring him to the team, and I come in to see you."
   },
   {
    "who": "dr",
    "text": "Exactly. I’ll ring you tomorrow to update you on the referrals. If Geoff becomes suddenly unwell — very drowsy, feverish, or much more confused — call us or 111 the same day. You are not on your own with this any more.",
    "dom": "gs",
    "why": "Specific follow-up call and delirium safety-net"
   },
   {
    "who": "pt",
    "text": "Thank you, doctor. Really."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Checked immediate safety first; let her describe the aggression in her own words before discussing sedation.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Sole carer, isolation, sleep, mood, guilt and grief; who could support her tonight.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “frightened of my own husband” and “end of my rope”, and asked about her injury and self-harm.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (sedation is the answer); concern (her safety and breaking down); expectation (medication today).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Clinical review of Geoff within a day for pain, constipation, retention, infection and delirium; examination of her wrist.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Distress from unmet needs, delirium, medicine effects, sundowning, disease progression.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Delirium or acute illness driving the change; carer injury; carer suicide risk; imminent danger at home.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Behavioural and psychological symptoms of dementia with possible triggers, plus carer breakdown with physical harm.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Trigger assessment and non-drug measures first (NICE NG97); antipsychotic only for severe risk, with specialist input and 6-weekly review; urgent referral, respite and carer’s assessment.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Treats Pauline’s exhaustion, mood and injury as her own consultation; considers safeguarding for both adults.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Safety plan with 999; call back next day; own appointment this week; delirium symptoms named.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "Mental health & addiction",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Pauline Frost",
    "age": "62 years · female",
    "pmh": [
     "Nil significant recorded",
     "Carer for husband Geoff (74, dementia)"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Reception note: “Wife calling about husband — he has become aggressive. Very distressed.”",
    "reason": "Telephone call about her husband. “Can you give him something to calm him down?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Safety first",
     "d": "“Are you safe right now?” Then acknowledge her fear before anything clinical."
    },
    {
     "t": "1–4",
     "h": "Geoff’s behaviour",
     "d": "Pattern, timing (evenings), triggers: pain, constipation, urine, infection, delirium, medicines, changes at home."
    },
    {
     "t": "4–6",
     "h": "Pauline as patient",
     "d": "Injury, sleep, mood, guilt, isolation; ask directly about self-harm. Summarise her ICE."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Why not sedation first; clinical review of Geoff within a day; urgent specialist referral; respite and carer’s assessment; tonight’s safety plan."
    },
    {
     "t": "10–12",
     "h": "Close",
     "d": "Teach-back of the safety plan, call-back tomorrow, her own appointment, delirium safety-net."
    }
   ],
   "wordPics": {
    "fail": "Prescribes a sedative or antipsychotic over the phone; or refuses and ends there; never asks whether she is safe or hurt; treats her only as a messenger about Geoff.",
    "pass": "Checks her safety, looks for triggers, explains why medication is not first-line, refers to the specialist team, mentions respite and a carer’s assessment, and gives 999 advice.",
    "exc": "All of the above, plus: names her grief and guilt so she feels heard; asks directly about self-harm; gives a concrete plan for tonight; arranges Geoff’s review within a day and her own appointment; calls back; she ends the call feeling someone is on her side."
   },
   "avoid": [
    {
     "dont": "“I can’t prescribe anything for Geoff without seeing him.”",
     "instead": "“I’ll get Geoff seen within a day — and right now I want to make sure you’re safe tonight.”",
     "why": "A procedural refusal leaves a frightened woman with nothing; a plan with a timeline helps her."
    },
    {
     "dont": "“Try not to take it personally, it’s the dementia.”",
     "instead": "“It is the illness — and it’s still frightening and it still hurt you. Your safety matters.”",
     "why": "Minimising the harm dismisses her fear and can stop her calling for help next time."
    },
    {
     "dont": "“Let’s start a small dose of something to calm him at night.”",
     "instead": "“Let’s find what’s setting him off first — medicine is a last step, with the specialists.”",
     "why": "Reflex antipsychotic prescribing is a Tasks fail (NICE NG97; MHRA 2009)."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Sole carer under strain",
     "t": "Isolation, broken sleep and fear at home. Carer breakdown is a leading reason for crisis admissions and care-home placement; practical respite is a clinical intervention."
    },
    {
     "h": "Benefits and practical help",
     "t": "Geoff may be eligible for Attendance Allowance; Pauline may be eligible for Carer’s Allowance depending on her circumstances. Citizens Advice and the local carers’ centre can check."
    }
   ],
   "legal": [
    {
     "h": "Care Act 2014",
     "t": "Pauline is entitled to a carer’s assessment and Geoff to a needs assessment. The local authority must make safeguarding enquiries (s42) when an adult with care and support needs is at risk of abuse or neglect."
    },
    {
     "h": "Mental Capacity Act 2005",
     "t": "If Geoff lacks capacity for decisions about his care, decisions are made in his best interests with Pauline involved. Ask whether a lasting power of attorney is in place."
    },
    {
     "h": "Confidentiality",
     "t": "Her injury, mood and risk belong in her own record. Sharing Geoff’s information with his carer is justified in his best interests where he lacks capacity (GMC, Confidentiality, 2017)."
    }
   ],
   "professional": [
    {
     "h": "Safer prescribing",
     "t": "Antipsychotics in dementia need a clear indication, a documented discussion of risks, specialist involvement and review at least every 6 weeks (NICE NG97)."
    },
    {
     "h": "Identifying carers",
     "t": "NICE NG150: identify and record carers, and offer them their own review — do not fold her needs into Geoff’s notes."
    }
   ],
   "community": [
    {
     "h": "Dementia support",
     "t": "Admiral Nurses (Dementia UK helpline), Alzheimer’s Society support, local carers’ centres and day services for Geoff to give Pauline regular breaks."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Carer in immediate danger or injured — safety plan now, 999 if in danger",
     "Sudden change in behaviour with drowsiness, fever or fluctuating confusion — delirium (NICE CG103), same-day review of Geoff",
     "Carer with hopelessness or thoughts of self-harm — assess and act on her own risk"
    ],
    "psychosocial": [
     "Sole carer, no respite, broken sleep",
     "Guilt, shame and grief for the man he was",
     "Isolation — “it’s just the two of us”"
    ],
    "ice": [
     "Idea: sedation will make him calm and her safe",
     "Concern: she is being hurt, is frightened and is close to collapse",
     "Expectation: a prescription today"
    ]
   },
   "diagnosis": "“What’s happening to Geoff is part of the dementia — distress that often has a trigger he can’t tell us about, like pain, constipation or an infection. And what’s happening to you is carer exhaustion with real risk to your safety. Both need help now.”",
   "diagnosisLay": "“Geoff’s brain can no longer tell you ‘my tummy hurts’ or ‘I’m frightened’ — so it comes out as anger. Our job is to find the hurt behind the anger, not just switch him off.”",
   "management": {
    "reflectIce": "“You asked me to sedate him because you’re frightened and exhausted — that’s completely understandable. Let me get you real help, fast, so you’re not carrying this alone.”",
    "psychosocial": "Treat her as a patient: her injury, sleep and mood; a named person she can call on tonight; respite and a carer’s assessment as urgent actions.",
    "sharedPlan": [
     "Clinical review of Geoff within a day: pain, constipation, urinary retention, infection, delirium, medicines",
     "Non-drug strategies; urgent older-adult mental health referral; antipsychotic only for severe risk with specialist input (NICE NG97)",
     "Adult social care: emergency respite and carer’s assessment (Care Act 2014); Admiral Nurse signposting"
    ],
    "safetyNet": [
     "Tonight: step back, do not restrain, 999 if in danger",
     "Call-back tomorrow; her own appointment this week; same-day contact if Geoff becomes drowsy, feverish or much more confused"
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
    "s": "Behaviour · carer support",
    "href": "management/dementia.html"
   },
   {
    "ic": "🗺️",
    "t": "Delirium",
    "s": "Visual algorithm · acute change",
    "href": "algorithms/delirium.html"
   },
   {
    "ic": "📋",
    "t": "Safeguarding",
    "s": "Case walkthrough · adults at risk",
    "href": "../cases/safeguarding.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed in two opposite ways: prescribing a sedative on request, or refusing and moving on. Both miss the frightened woman on the phone.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing an antipsychotic or sedative over the phone.",
     "why": "NICE NG97 requires a search for causes and non-drug measures first; antipsychotics raise stroke and death risk (MHRA, March 2009).",
     "fix": "Explain the risks plainly, arrange a trigger review within a day, and keep medication as a specialist-supported last step."
    },
    {
     "dom": "tasks",
     "fail": "Never asking whether she is safe or injured.",
     "why": "The carer’s safety is the most urgent issue in the call. Missing it is an unsafe consultation.",
     "fix": "First question: “Are you safe right now?” Then: “Were you hurt?”"
    },
    {
     "dom": "rto",
     "fail": "Treating Pauline only as a messenger about Geoff.",
     "why": "“Does not identify the patient’s psychosocial needs.” Her exhaustion, guilt and mood are the hidden agenda.",
     "fix": "Ask about her sleep, mood and self-harm, and book her own appointment."
    },
    {
     "dom": "tasks",
     "fail": "Ignoring possible delirium.",
     "why": "A change in behaviour can be pain, constipation, retention or infection; sedating a delirious man is dangerous.",
     "fix": "Ask about triggers and arrange a clinical review of Geoff, at home if needed."
    },
    {
     "dom": "gs",
     "fail": "Ending with “I’ll send a referral” and no plan for tonight.",
     "why": "Referrals take time; she may be at risk this evening.",
     "fix": "A specific plan: step back, don’t restrain, call someone to be with her, 999 if in danger — and a call-back tomorrow."
    },
    {
     "dom": "rto",
     "fail": "Delivering stock empathy — “I understand how you feel” — then listing services.",
     "why": "“Responses appeared rehearsed.” She needs to hear her own words reflected back.",
     "fix": "“You’re grieving the man he was while caring for the man he is now.”"
    },
    {
     "dom": "gs",
     "fail": "Using terms like “BPSD”, “antipsychotic” and “CMHT” without explanation.",
     "why": "Unexplained jargon to a distressed carer fails Global Skills.",
     "fix": "“Changes in behaviour from the dementia”, “strong calming medicines”, “the older people’s mental health team”."
    }
   ]
  }
 },
 "dont-record-this": {
  "stem": {
   "name": "Aiden Frost",
   "age": "34-year-old man",
   "pmh": [
    "No significant past medical history recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "Occupation recorded: commercial airline pilot. No recent consultations.",
   "reason": "Telephone call requested: \"wants to discuss something personal, asked for a GP call-back.\""
  },
  "knowledge": {
   "guideline": "GMC Confidentiality: good practice in handling patient information (2017) · GMC Good Medical Practice 2024 · UK CAA Part-MED MED.A.020 (decrease in medical fitness) · NICE NG222 (depression) · NICE NG225 (self-harm) · NICE CG115 (alcohol-use disorders)",
   "summary": "You cannot promise to keep relevant clinical information off the record, but you can offer real confidentiality with honest limits. The priorities are his safety, treatment, and supporting him to step back from flying and seek aeromedical advice himself.",
   "points": [
    {
     "h": "Records must be kept",
     "t": "Doctors must keep clear, accurate records of the clinical findings, decisions, information given and treatment (GMC Good Medical Practice 2024). You cannot agree to leave out clinically relevant information. The record is confidential, and that is the honest reassurance to offer."
    },
    {
     "h": "Confidentiality and its limits",
     "t": "Information is not disclosed without consent except where the law requires it or it is justified in the public interest, for example where failure to disclose may expose others to a risk of death or serious harm (GMC Confidentiality 2017). The same principles that apply to driving apply to pilots of regulated transport."
    },
    {
     "h": "The pilot's own duty",
     "t": "Under UK Part-MED (MED.A.020), licence holders must not exercise their privileges when aware of a decrease in medical fitness that might make them unable to do so safely, and must seek aeromedical advice from an AME without undue delay. Supporting him to do this himself is the first step."
    },
    {
     "h": "When a doctor may disclose",
     "t": "If he is unfit to fly, continues against advice and cannot be persuaded, the GMC permits disclosure to the regulator in the public interest. Try to persuade first, tell him before you disclose, and share only what is necessary. The CAA medical department offers confidential advice to doctors."
    },
    {
     "h": "Assess and treat",
     "t": "Ask directly about suicidal thoughts, plans, intent and protective factors, and build a safety plan; NICE NG225 advises against using risk tools or scales to predict suicide. Assess drinking with AUDIT and check for dependence before advising any reduction (NICE CG115). Treat depression per NICE NG222."
    },
    {
     "h": "Driving",
     "t": "If he drives, persistent alcohol misuse or dependence must be notified to the DVLA, as must severe depression with suicidal thoughts or significant impairment. Mild to moderate depression usually needs no notification."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Aiden? It's one of the GPs returning your call. Is now a good time, and are you somewhere you can talk privately?",
    "dom": "gs",
    "why": "Confirms identity and privacy"
   },
   {
    "who": "pt",
    "text": "Before I say anything, I need you to promise this goes no further and you won't write it in my notes. If this gets back to my licensing people, my career's finished. Promise me, or I'll just hang up."
   },
   {
    "who": "dr",
    "text": "I can hear how worried you are, and I'm really glad you've rung. I want to be honest with you from the start, because trust matters here. Can I explain exactly what I can and can't promise, and then you decide?",
    "dom": "rto",
    "why": "Acknowledges fear and asks permission rather than refusing outright"
   },
   {
    "who": "pt",
    "text": "Go on."
   },
   {
    "phase": "Confidentiality honestly",
    "clock": "1–3 min",
    "who": "dr",
    "text": "What you tell me is confidential. It stays within the team looking after you, and I won't share it with your employer or your aviation doctors without your agreement. What I can't do is leave something important out of your records. That's part of keeping you safe. And there are rare exceptions, if there were a serious risk to you or to other people.",
    "dom": "tasks",
    "why": "Explains confidentiality and its limits without making an impossible promise"
   },
   {
    "who": "pt",
    "text": "So it's not safe to tell you."
   },
   {
    "who": "dr",
    "text": "I know that's not the answer you wanted. But in almost every case, nothing leaves this surgery without the patient knowing and agreeing. If anything ever needed to, I'd talk to you first. I'd much rather help you than have you carry this alone. Will you stay on the line?",
    "dom": "rto",
    "why": "Retains him in care; honest about process"
   },
   {
    "who": "pt",
    "text": "(long pause) Okay. I've been really low for a while. And I'm drinking a lot more than I used to."
   },
   {
    "phase": "Data gathering",
    "clock": "3–6 min",
    "who": "dr",
    "text": "Thank you for trusting me with that. Tell me about the low mood. How long, and how is it affecting you day to day?",
    "dom": "rto",
    "why": "Open question to explore depression"
   },
   {
    "who": "pt",
    "text": "Months. No energy, can't sleep properly, nothing feels good. The drinking helps me switch off."
   },
   {
    "who": "dr",
    "text": "When you drink, how much, and how often? Do you ever feel you need a drink to get going, or feel shaky or sweaty if you go without?",
    "dom": "tasks",
    "why": "Quantifies alcohol and screens for dependence"
   },
   {
    "who": "pt",
    "text": "Most evenings now, more than I should. I haven't been shaky, I don't think."
   },
   {
    "who": "dr",
    "text": "Sometimes when people feel this low, they have thoughts that life isn't worth living. Has that happened for you?",
    "dom": "tasks",
    "why": "Asks directly about suicidal thoughts"
   },
   {
    "who": "pt",
    "text": "Sometimes I think I'd be better off not here. Just fleeting."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. Have you thought about how you might do it, or made any plans? What stops you acting on those thoughts?",
    "dom": "tasks",
    "why": "Explores plan, intent and protective factors"
   },
   {
    "who": "pt",
    "text": "No plans. I wouldn't. It's just a thought that comes and goes."
   },
   {
    "phase": "Fitness to fly",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I'm really glad you told me. I need to raise the hard part honestly, because you deserve that. With low mood, heavy drinking and those thoughts, I don't think it's safe for you to fly at the moment, for you or your passengers. Are you still flying?",
    "dom": "tasks",
    "why": "Names the public-safety concern clearly"
   },
   {
    "who": "pt",
    "text": "Yes. That's exactly why I can't have this on record."
   },
   {
    "who": "dr",
    "text": "I understand. As a pilot, you already have a duty to stop flying if your fitness drops and to speak to your aviation medical examiner. The best way through this is for you to do that yourself, and I'll support you. Pilots who get treated and go through the proper route often return to flying once they're well.",
    "dom": "tasks",
    "why": "Supports self-reporting and reframes honesty as protective"
   },
   {
    "who": "pt",
    "text": "And if I don't?"
   },
   {
    "who": "dr",
    "text": "I'd keep working with you to find a way you can. If someone was unfit and kept flying against advice, a doctor can have a duty to tell the regulator to protect the public. That's a last resort, and I'd tell you first. I really don't want us to get anywhere near that.",
    "dom": "tasks",
    "why": "Honest about the last-resort disclosure without threatening"
   },
   {
    "who": "pt",
    "text": "(quietly) I don't want to hurt anyone. I just can't lose this job."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "That tells me a lot about you. Hiding this is the thing most likely to cost you your health and your career. Getting well is what protects both. Can we agree you'll step back from flying from now and contact your AME this week?",
    "dom": "rto",
    "why": "Links the plan to his values and seeks commitment"
   },
   {
    "who": "pt",
    "text": "Yes. I'll call them."
   },
   {
    "who": "dr",
    "text": "Good. I'd like to see you face to face in the next few days to talk about treatment for the depression and the drinking: talking therapy, possibly medication, and alcohol support. Please don't stop drinking suddenly without talking to me first. Is there anyone you can be with, or talk to, tonight?",
    "dom": "tasks",
    "why": "Treatment plan, alcohol safety and protective factors"
   },
   {
    "who": "pt",
    "text": "There's someone I can call."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If those thoughts get stronger, or you feel you might act on them, ring 999 or go to A&E. You can also call NHS 111 and choose the mental health option, or Samaritans on 116 123, any time. And if you drive, please don't drive after drinking.",
    "dom": "gs",
    "why": "Clear crisis plan with specific routes"
   },
   {
    "who": "pt",
    "text": "Okay."
   },
   {
    "who": "dr",
    "text": "Can you tell me what we've agreed, so I'm sure I've been clear?",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "No flying, call my AME, come in to see you this week, don't stop drinking suddenly, and 999 or Samaritans if it gets bad."
   },
   {
    "who": "dr",
    "text": "That's exactly it. I'll write this up accurately and confidentially. You did something brave today by ringing. I'll see you in a few days.",
    "dom": "rto",
    "why": "Affirms, confirms honest documentation and next contact"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Checked identity and privacy; responded to the ultimatum with honesty rather than refusal; kept him on the line.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Occupation and what the career means to him; drinking pattern; sleep; support network.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the career terror, the heavy drinking and \"better off not here\", and followed each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (secrecy is the only way to get help); concern (loss of career, shame); expectation (a promise it stays off the record).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Plans a face-to-face review; AUDIT and dependence screen; PHQ-9; bloods for alcohol-related harm if indicated.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Depression with alcohol misuse; considers dependence, withdrawal risk and alcohol-induced low mood.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Direct suicide enquiry (thoughts, plans, intent, protective factors); fitness to fly as a public-safety issue.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Depression with escalating alcohol use and passive suicidal ideation, currently unfit to fly.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Honest confidentiality with limits; supports self-report to AME and stepping back from flying; treatment for mood and alcohol.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Alcohol withdrawal safety; DVLA duties if he drives; last-resort public-interest disclosure understood and explained.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Crisis plan (999, A&E, 111, Samaritans); face-to-face within days; honest documentation; teach-back.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Professional & ethical dilemmas",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Aiden Frost",
    "age": "34 years · male",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "Nil regular"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Occupation: commercial airline pilot. Call-back request: \"personal, would only speak to a GP.\"",
    "reason": "Telephone: \"wants to discuss something personal.\""
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Privacy and the ultimatum",
     "d": "He demands a promise before speaking. Do not promise; ask permission to explain what you can offer."
    },
    {
     "t": "1–3",
     "h": "Confidentiality honestly",
     "d": "Confidential within the team; records must be kept; rare exceptions for serious risk; you would talk to him first. Keep him on the line."
    },
    {
     "t": "3–6",
     "h": "Mood, alcohol, suicide",
     "d": "Depression symptoms, alcohol quantity and dependence, direct suicide enquiry with plan, intent and protective factors."
    },
    {
     "t": "6–10",
     "h": "Fitness to fly and plan",
     "d": "Name the safety issue. Support self-report to his AME and stepping back. Explain last-resort disclosure honestly. Treatment plan."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Crisis routes, no sudden alcohol stop, face-to-face in days, teach-back, honest documentation."
    }
   ],
   "wordPics": {
    "fail": "Promises total secrecy to keep him talking, or refuses bluntly so he hangs up; no suicide enquiry; ignores the flying question or threatens to report him straight away.",
    "pass": "Explains confidentiality and its limits honestly; asks about suicidal thoughts; raises fitness to fly and advises him to stop flying and contact his AME; plans treatment and a crisis safety-net.",
    "exc": "All of the above, plus: keeps a frightened man engaged through the honest answer; explores plan, intent and protective factors; checks for alcohol dependence before advising cuts; frames self-reporting as protecting his career; explains last-resort disclosure without threat; secures his commitment and a face-to-face review within days."
   },
   "avoid": [
    {
     "dont": "\"Of course, I won't write anything down.\"",
     "instead": "\"What you tell me is confidential, but I can't leave important things out of your record. Let me explain what that means.\"",
     "why": "An impossible promise is dishonest and will be broken."
    },
    {
     "dont": "\"If you're flying like this, I'll have to report you.\"",
     "instead": "\"The best route is for you to speak to your AME yourself, and I'll support you. Reporting is a last resort I want us never to reach.\"",
     "why": "A threat drives him away from care and makes concealment more likely."
    },
    {
     "dont": "\"You need to stop drinking completely from today.\"",
     "instead": "\"Please don't stop suddenly without talking to me first. We'll plan it safely.\"",
     "why": "Abrupt cessation in dependence can cause dangerous withdrawal."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Career and identity",
     "t": "For safety-critical professionals, fear of losing their licence is a major barrier to seeking help. Name it, and describe the route back to work after treatment."
    },
    {
     "h": "Alcohol and isolation",
     "t": "Drinking to cope with low mood deepens both. Ask about support at home and among friends, and involve them in the safety plan if he agrees."
    }
   ],
   "legal": [
    {
     "h": "Aviation medical duties",
     "t": "UK Part-MED MED.A.020: a licence holder must not fly when aware of a decrease in medical fitness and must seek aeromedical advice without undue delay. The GMC notes that the same principles as for driving apply to pilots, and the CAA medical department gives confidential advice to doctors."
    },
    {
     "h": "DVLA",
     "t": "If he drives: alcohol misuse or dependence and severe depression with suicidal thoughts are notifiable conditions; the duty to notify is his, with the GMC framework applying if he will not."
    }
   ],
   "professional": [
    {
     "h": "Confidentiality and records",
     "t": "GMC Confidentiality 2017: disclose without consent only where justified in the public interest, after seeking consent where practicable, telling the patient, and sharing the minimum necessary. GMC Good Medical Practice 2024: keep accurate, honest records."
    },
    {
     "h": "Seek advice",
     "t": "Discuss difficult disclosure decisions with a senior colleague, your Caldicott Guardian or your medical defence organisation, and document the reasoning."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Samaritans (116 123), NHS 111 mental health option, NHS Talking Therapies, local alcohol services; ask whether his employer offers a confidential pilot peer-support scheme."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Suicidal thoughts with a plan, intent, access to means or recent escalation: same-day crisis assessment",
     "Alcohol dependence (morning drinking, withdrawal symptoms, seizures): do not advise abrupt cessation",
     "Continuing to fly while unfit and refusing to stop"
    ],
    "psychosocial": [
     "Commercial pilot; career central to his identity",
     "Escalating alcohol use to cope with low mood",
     "Shame and fear driving secrecy; who he can talk to"
    ],
    "ice": [
     "Idea: \"If you promise to write nothing down, I can get help without losing my career.\"",
     "Concern: losing his licence and career; shame",
     "Expectation: a promise of total secrecy"
    ]
   },
   "diagnosis": "\"From what you've told me, you're going through depression, and the drinking is making it worse. Both are treatable, and many people in your job recover and return to work.\"",
   "diagnosisLay": "\"Depression is like flying with a faulty instrument: you can't trust the readings about yourself. Alcohol turns the fog up. We fix the instrument before you fly again.\"",
   "management": {
    "reflectIce": "\"You're frightened of losing the career you've built. The way to protect it is to get well through the proper route, not to hide.\"",
    "psychosocial": "Keep him engaged: honest, non-threatening, and alongside him. Involve a friend in the safety plan if he agrees.",
    "sharedPlan": [
     "Stop flying now; he contacts his AME this week",
     "Face-to-face review within days: PHQ-9, AUDIT, bloods as indicated",
     "Talking therapy with or without an antidepressant (NICE NG222); alcohol support with a safe reduction plan",
     "Written safety plan; document honestly and confidentially"
    ],
    "safetyNet": [
     "Stronger suicidal thoughts or intent: 999 or A&E; 111 mental health option; Samaritans 116 123",
     "Do not stop alcohol abruptly; do not drive after drinking"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Depression",
    "s": "Management · NICE NG222",
    "href": "management/depression.html"
   },
   {
    "ic": "💠",
    "t": "Alcohol problem drinking",
    "s": "Management · AUDIT · withdrawal",
    "href": "management/alcohol-problem-drinking.html"
   },
   {
    "ic": "📋",
    "t": "Depression",
    "s": "Case walkthrough · risk and safety planning",
    "href": "../cases/depression.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA Fitness to Drive",
    "s": "Notifiable conditions · alcohol, depression",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests honesty under pressure. The candidate who promises secrecy fails on probity; the one who recites the rules loses the patient. The marks come from keeping him engaged while being truthful about records, risk and flying.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Agreeing to \"keep it off the record\" so he will talk.",
     "why": "You cannot omit clinically relevant information (GMC Good Medical Practice 2024). Making a promise you cannot keep is dishonest.",
     "fix": "\"It's confidential, but I can't leave important things out. Let me explain exactly what that means.\""
    },
    {
     "dom": "rto",
     "fail": "Reading out the limits of confidentiality in a way that sounds like a warning, so he hangs up.",
     "why": "Disengagement is the worst outcome for his safety and the public's.",
     "fix": "Acknowledge the fear, ask permission to explain, and end with \"Will you stay on the line?\""
    },
    {
     "dom": "tasks",
     "fail": "Never asking directly about suicidal thoughts, or asking once and moving on.",
     "why": "\"Better off not here\" requires exploration of plans, intent and protective factors, and a safety plan.",
     "fix": "\"Have you thought about how? What stops you?\" Then agree who he can talk to tonight."
    },
    {
     "dom": "tasks",
     "fail": "Not raising fitness to fly because it might upset him.",
     "why": "Colluding with a pilot flying while unfit ignores a serious public-safety risk.",
     "fix": "Say it plainly and support him to stop flying and contact his AME himself."
    },
    {
     "dom": "tasks",
     "fail": "Threatening to report him to the CAA straight away.",
     "why": "The GMC expects persuasion first, telling the patient, and disclosing the minimum; an early threat drives concealment.",
     "fix": "Explain disclosure as a last resort, after he has had the chance to act himself."
    },
    {
     "dom": "tasks",
     "fail": "Advising him to stop drinking completely today.",
     "why": "Abrupt stopping in dependence risks withdrawal and seizures.",
     "fix": "Screen for dependence and plan any reduction safely."
    },
    {
     "dom": "gs",
     "fail": "Ending with \"call us if things get worse\".",
     "why": "Non-specific safety-netting for suicidal ideation is unsafe.",
     "fix": "Name 999, A&E, 111 mental health option and Samaritans, and book a face-to-face review within days."
    }
   ]
  }
 },
 "facial-palsy-bell-stroke": {
  "stem": {
   "name": "Priya Naidu",
   "age": "39-year-old woman",
   "pmh": [
    "Pregnant — 28 weeks",
    "No recorded vascular risk factors"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "Recent viral cold. Rang this morning: woke with the left side of her face drooping.",
   "reason": "Telephone call: “Half my face has dropped — is it a stroke?”"
  },
  "knowledge": {
   "guideline": "NICE NG127 (suspected neurological conditions) · NICE NG128 (stroke and TIA) · NICE NG133 (hypertension in pregnancy) · BNF",
   "summary": "Whole-hemiface weakness including the forehead, with no other neurology, points to Bell’s palsy — but sudden facial weakness still needs same-day examination. Treat early with prednisolone, protect the eye, and in pregnancy check for pre-eclampsia.",
   "points": [
    {
     "h": "The forehead clue",
     "t": "The upper face has bilateral cortical supply, so a stroke usually spares the forehead, while a lower motor neurone palsy weakens the whole side. It is a clue, not a complete test: a brainstem lesion can produce a whole-face palsy, so any other neurological sign goes to the stroke pathway (NICE NG128) whatever the forehead shows."
    },
    {
     "h": "Recognise Bell’s palsy",
     "t": "Acute unilateral lower motor neurone facial weakness developing over hours, often with ache behind the ear, altered taste or hyperacusis, after a viral illness. It is a diagnosis of exclusion: a typical story and an examination that is normal apart from the face."
    },
    {
     "h": "Early prednisolone",
     "t": "Start oral prednisolone as early as possible, ideally within 72 hours of onset; regimen per local formulary and BNF. In pregnancy, discuss with the obstetric team but do not let the discussion delay treatment. Antivirals are not routine and never used alone."
    },
    {
     "h": "Protect the eye",
     "t": "Incomplete eye closure risks exposure keratopathy. Lubricating drops by day, ointment at night, gentle taping or a moisture chamber, and sunglasses. A painful or red eye or change in vision needs same-day ophthalmology."
    },
    {
     "h": "Pregnancy",
     "t": "Bell’s palsy is more common in late pregnancy, and published case series link it with gestational hypertension and pre-eclampsia. Check blood pressure and urine for protein at the same-day review and manage per NICE NG133."
    },
    {
     "h": "Mimics and follow-up",
     "t": "Ramsay Hunt syndrome (ear or palate vesicles, severe ear pain, hearing loss, vertigo) needs antiviral plus steroid and urgent ENT input. Also consider Lyme disease, parotid masses and bilateral palsy. NICE NG127: refer if no recovery; consider specialist assessment for synkinesis from about 5 months."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Priya Naidu? It’s Dr Evans from the surgery — I understand your face has changed this morning. Tell me what’s happened.",
    "dom": "rto",
    "why": "Open question after confirming identity"
   },
   {
    "who": "pt",
    "text": "I woke up and half my face has gone. My eye won’t close properly and tea’s dribbling out. I’m pregnant and I’m terrified I’m having a stroke. My nan had one and this is exactly how she looked."
   },
   {
    "who": "dr",
    "text": "That sounds really frightening, especially after seeing what happened to your nan. I’m going to ask a few quick questions that will tell us a lot, and then I’ll explain what I think. Is that okay?",
    "dom": "gs",
    "why": "Acknowledges fear and sets a brief, purposeful structure"
   },
   {
    "who": "pt",
    "text": "Yes. Please."
   },
   {
    "phase": "Excluding stroke",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Can you lift both arms out in front of you and hold them there — does either drift down or feel weak? And any numbness, change in your vision, or trouble finding words?",
    "dom": "tasks",
    "why": "Screens for FAST features and other focal neurology"
   },
   {
    "who": "pt",
    "text": "My arms are fine. I can see fine, and I’m talking normally — it’s just my mouth feels odd."
   },
   {
    "who": "dr",
    "text": "Good. Now one really useful test: look up at the ceiling and try to raise your eyebrows and wrinkle your forehead. Does the left side of your forehead move?",
    "dom": "tasks",
    "why": "Applies the forehead discriminator by remote instruction"
   },
   {
    "who": "pt",
    "text": "No… the left side doesn’t move at all. The right side does."
   },
   {
    "who": "dr",
    "text": "Thank you. Any ache around your ear, change in taste, sounds seeming louder, or any blisters or rash in or around the ear? Any hearing loss or dizziness?",
    "dom": "tasks",
    "why": "Looks for supportive Bell’s features and screens for Ramsay Hunt"
   },
   {
    "who": "pt",
    "text": "An ache behind the ear yesterday, and tea tasted a bit strange this morning. No rash that I can feel. Hearing’s fine."
   },
   {
    "who": "dr",
    "text": "And any recent illness?"
   },
   {
    "who": "pt",
    "text": "I’ve just had a cold."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–5 min",
    "who": "dr",
    "text": "You mentioned being pregnant. Alongside the stroke worry, is there anything on your mind about the baby?",
    "dom": "rto",
    "why": "Surfaces the unspoken pregnancy fear"
   },
   {
    "who": "pt",
    "text": "That’s the thing I can’t stop thinking about. What if something’s wrong with the baby, or whatever you give me hurts it? And will my face stay like this?"
   },
   {
    "phase": "Explanation",
    "clock": "5–8 min",
    "who": "dr",
    "text": "Let me explain what I’m thinking. In a stroke the forehead usually keeps working, because it gets signals from both sides of the brain. When the whole side of the face is weak, including the forehead, and arms, speech and vision are normal, it points to a problem with the facial nerve itself — Bell’s palsy. The ear ache, taste change and your cold fit that too.",
    "dom": "tasks",
    "why": "Explains the forehead reasoning in plain language"
   },
   {
    "who": "pt",
    "text": "So it’s not a stroke?"
   },
   {
    "who": "dr",
    "text": "It looks much more like Bell’s palsy, which is reassuring. But I won’t diagnose it over the phone. Sudden facial weakness needs examining properly today, so I’d like to see you at the surgery this morning. If at any point your arm or leg goes weak or your speech changes, that’s 999 straight away.",
    "dom": "tasks",
    "why": "Balances reassurance with same-day face-to-face assessment to exclude stroke"
   },
   {
    "who": "pt",
    "text": "Okay. And the baby?"
   },
   {
    "who": "dr",
    "text": "Bell’s palsy is a bit more common in pregnancy, and it doesn’t harm the baby. When I see you I’ll also check your blood pressure and a urine sample, because in pregnancy it’s sensible to check for high blood pressure alongside this.",
    "dom": "tasks",
    "why": "Answers the baby fear and screens for pre-eclampsia"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "If it is Bell’s, the treatment that helps most is a short course of steroid tablets started within three days. It’s used in pregnancy when the benefit is clear, and I’ll check the plan with the maternity team today so you’re not left wondering. How do you feel about that?",
    "dom": "rto",
    "why": "Shared decision on steroids with obstetric input, inviting her view"
   },
   {
    "who": "pt",
    "text": "If it’s safe for the baby, I want it. I just want my face back."
   },
   {
    "who": "dr",
    "text": "Most people with Bell’s recover well, especially with early treatment. It can take weeks, sometimes a few months. The other really important thing is your eye: until it closes properly it can dry out and get damaged. Use lubricating drops through the day, ointment at night, gently tape it shut when you sleep, and wear sunglasses outside.",
    "dom": "tasks",
    "why": "Gives prognosis and essential eye-protection advice"
   },
   {
    "who": "pt",
    "text": "I wouldn’t have thought of the eye."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "So: come in this morning, and I’ll examine you, check your blood pressure and urine, and start treatment if it’s Bell’s. Call 999 for weakness in an arm or leg, slurred speech or drowsiness. Contact us the same day for blisters around the ear, a painful or red eye, or change in vision, a severe headache, or feeling unwell with swelling or visual disturbance.",
    "dom": "gs",
    "why": "Specific stroke, Ramsay Hunt, eye and pre-eclampsia safety-net"
   },
   {
    "who": "pt",
    "text": "Okay. I can get a lift in."
   },
   {
    "who": "dr",
    "text": "Just so I know I’ve explained it clearly — what’s the plan for this morning, and what would make you ring 999?",
    "dom": "rto",
    "why": "Teach-back to confirm understanding"
   },
   {
    "who": "pt",
    "text": "Come in now, protect my eye, and 999 if my arm or speech goes. And it’s probably not a stroke."
   },
   {
    "who": "dr",
    "text": "Exactly. You were right to ring. I’ll see you shortly.",
    "dom": "gs",
    "why": "Closes with a clear next step"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her describe the onset and her fear before narrowing.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Pregnancy, what she saw happen to her nan, practical ability to attend today.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I’m pregnant” and “my nan had one” and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (stroke), concerns (the baby, treatment safety, permanent disfigurement), expectation (to know what it is and what to do).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Remote forehead and FAST checks; same-day face-to-face cranial and neurological examination, ear and mouth check, blood pressure and urine protein.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Bell’s palsy versus stroke, Ramsay Hunt, Lyme, parotid lesion; pregnancy-related hypertension.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for limb, speech and visual deficits; knows a brainstem lesion can mimic a whole-face palsy; 999 route for any focal sign.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Probable Bell’s palsy, explained with the forehead reasoning, pending same-day examination.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Prednisolone within 72 hours with obstetric input, eye protection, no routine antiviral, honest prognosis.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Pregnancy: BP and urine check for pre-eclampsia, maternity-team liaison on steroids.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "999 for stroke features; same-day contact for vesicles, eye pain or visual change; review if not improving.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Urgent & unscheduled care",
    "Gender, reproductive & sexual health",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Priya Naidu",
    "age": "39 years · female",
    "pmh": [
     "Pregnant — 28 weeks",
     "No recorded vascular risk factors"
    ],
    "meds": [
     "No regular medication recorded"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Telephone request this morning: sudden left-sided facial droop on waking. Recent cold.",
    "reason": "“Half my face has dropped — I look like I’ve had a stroke.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and acknowledge",
     "d": "Let her describe it. Name the fear of stroke and her nan’s history before starting questions."
    },
    {
     "t": "1–4",
     "h": "Exclude stroke",
     "d": "Arms, speech, vision, sensation. Forehead test by instruction. Ear ache, taste, vesicles, hearing, vertigo, recent illness."
    },
    {
     "t": "4–5",
     "h": "Surface the baby fear",
     "d": "“Is there anything on your mind about the baby?” Also the fear of lasting disfigurement."
    },
    {
     "t": "5–10",
     "h": "Explain and plan",
     "d": "Forehead reasoning, same-day examination, BP and urine, prednisolone with obstetric input, eye protection, prognosis."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999 for limb or speech change. Same-day for vesicles, eye symptoms, pre-eclampsia symptoms. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Diagnoses stroke and sends to hospital without assessing, or diagnoses Bell’s by phone with no same-day examination; never checks the forehead; forgets the eye; ignores the pregnancy or refuses steroids outright; no safety-net.",
    "pass": "Screens for stroke features and checks the forehead; arranges same-day examination; plans prednisolone within 72 hours and eye protection; reassures about the baby; gives 999 red flags.",
    "exc": "All of the above, plus: explains the forehead clue in plain words while acknowledging its limits; screens for Ramsay Hunt; checks BP and urine for pre-eclampsia; involves the maternity team without delaying treatment; addresses disfigurement with an honest prognosis; confirms the plan with teach-back."
   },
   "avoid": [
    {
     "dont": "“It’s definitely not a stroke, it’s just Bell’s palsy.”",
     "instead": "“It looks much more like Bell’s palsy, which is reassuring — but I want to examine you today to be sure.”",
     "why": "Telephone certainty is unsafe; sudden facial weakness needs examination."
    },
    {
     "dont": "“We can’t give steroids because you’re pregnant.”",
     "instead": "“Steroids are used in pregnancy when the benefit is clear — I’ll agree the plan with the maternity team today.”",
     "why": "Withholding time-critical treatment on assumption harms her recovery."
    },
    {
     "dont": "“Come in when you can and we’ll have a look.”",
     "instead": "“Come in this morning — and if your arm or speech changes, call 999.”",
     "why": "Vague timing loses the 72-hour window and the stroke safety-net."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Appearance and confidence",
     "t": "Facial asymmetry, drooling and difficulty eating can be distressing and socially isolating. Acknowledge it and give a realistic recovery timeline."
    },
    {
     "h": "Family memory",
     "t": "A relative’s stroke shapes how she reads her own symptoms. Addressing that story directly reduces panic and improves engagement with the plan."
    }
   ],
   "legal": [
    {
     "h": "Driving",
     "t": "If she cannot close the eye or protect it, or her vision is affected by drops or ointment, advise her not to drive until she can do so safely and meets the DVLA eyesight standard."
    },
    {
     "h": "Work",
     "t": "If she works and needs time off, a fit note can be issued; pregnancy-related protections at work continue alongside."
    }
   ],
   "professional": [
    {
     "h": "Remote assessment limits",
     "t": "Telephone triage can guide urgency but cannot replace examination for sudden neurological symptoms. Document the questions asked, the answers, and the plan for same-day review."
    },
    {
     "h": "Prescribing in pregnancy",
     "t": "Weigh benefit and risk, check the BNF, involve the maternity team, and record the shared decision (GMC Good Medical Practice 2024)."
    }
   ],
   "community": [
    {
     "h": "Maternity care",
     "t": "Inform her midwife or maternity unit so blood pressure and fetal wellbeing are followed up at routine and additional antenatal visits."
    },
    {
     "h": "Patient support",
     "t": "Facial Palsy UK offers information on eye care, exercises and recovery, and support for people with persistent weakness."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Limb weakness, speech or visual disturbance, ataxia or sensory loss — stroke pathway, 999",
     "Vesicles in or around the ear or palate, severe ear pain, hearing loss or vertigo — Ramsay Hunt",
     "Headache, visual disturbance, swelling or raised BP in pregnancy — possible pre-eclampsia"
    ],
    "psychosocial": [
     "Pregnancy at 28 weeks and her fear for the baby",
     "Her nan’s stroke and how it shapes her fear",
     "Practical ability to attend today; eating, drinking and eye care at home"
    ],
    "ice": [
     "Idea: “I’m having a stroke, like my nan”",
     "Concern: harm to the baby from the illness or its treatment; permanent disfigurement",
     "Expectation: to know whether it’s a stroke and what to do now"
    ]
   },
   "diagnosis": "Probable Bell’s palsy: the whole left face including the forehead is weak, with no limb, speech or visual deficit — but it still needs same-day examination: “This looks much more like a facial-nerve problem than a stroke. I want to examine you today to be sure.”",
   "diagnosisLay": "“The facial nerve is like a cable from the brain to the face. In Bell’s palsy the cable itself becomes swollen and stops carrying signals to that whole side of the face — forehead included. In a stroke, the forehead usually keeps working because it gets a back-up signal from the other side of the brain.”",
   "management": {
    "reflectIce": "“You were frightened this was a stroke like your nan’s, and worried for the baby. The signs point to Bell’s palsy, which doesn’t harm the baby — and we’ll check you properly today.”",
    "psychosocial": "Make same-day attendance easy, give practical eye-care steps she can do now, and link in the maternity team so she isn’t carrying the pregnancy worry alone.",
    "sharedPlan": [
     "Same-day face-to-face examination; BP and urine protein",
     "Prednisolone within 72 hours per formulary and BNF, agreed with the maternity team",
     "Eye protection: drops, night ointment, taping, sunglasses"
    ],
    "safetyNet": [
     "999 for limb weakness, speech change or drowsiness",
     "Same-day contact for ear vesicles, eye pain or visual change, severe headache; review if no improvement"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Bell’s palsy protocol",
    "s": "Forehead clue · prednisolone · eye care",
    "href": "management/bells-palsy.html"
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
    "s": "FAST · emergency pathway",
    "href": "management/tia-stroke.html"
   },
   {
    "ic": "🤰",
    "t": "Hypertension in pregnancy protocol",
    "s": "Pre-eclampsia checks · NICE NG133",
    "href": "management/hypertension-pregnancy.html"
   }
  ],
  "pitfalls": {
   "intro": "This telephone station is about safe triage under emotional pressure: recognise the likely Bell’s palsy, still get her examined today, and deal with two fears — stroke and the baby.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Confirming Bell’s palsy on the phone and posting a prescription without examination.",
     "why": "Sudden facial weakness needs examination to exclude stroke and Ramsay Hunt. The forehead clue is not a complete test — brainstem lesions can mimic it.",
     "fix": "“It looks much more like Bell’s, but I want to examine you this morning.”"
    },
    {
     "dom": "tasks",
     "fail": "Forgetting eye protection.",
     "why": "Exposure keratopathy is a preventable complication and a commonly missed checkpoint.",
     "fix": "Drops by day, ointment and taping at night, sunglasses — and same-day review for eye pain or visual change."
    },
    {
     "dom": "tasks",
     "fail": "Refusing or delaying steroids because she is pregnant.",
     "why": "Benefit is time-dependent. Pregnancy calls for obstetric input, not automatic refusal.",
     "fix": "Offer prednisolone within 72 hours and agree it with the maternity team the same day."
    },
    {
     "dom": "tasks",
     "fail": "Treating the face in isolation and not checking blood pressure.",
     "why": "Bell’s palsy in late pregnancy has been linked with pre-eclampsia; missing it is a safety failure.",
     "fix": "BP and urine protein at the same-day review, and pre-eclampsia symptoms in the safety-net."
    },
    {
     "dom": "rto",
     "fail": "Answering only the stroke question and never asking about the baby.",
     "why": "“Does not explore the patient’s concerns.” The unspoken pregnancy fear drives her distress.",
     "fix": "“Is there anything on your mind about the baby?”"
    },
    {
     "dom": "gs",
     "fail": "Jargon — “LMN lesion”, “bilateral cortical innervation”, “exposure keratopathy”.",
     "why": "“Language not easily understood by the patient”, especially on the phone.",
     "fix": "“In a stroke the forehead usually keeps working because it gets signals from both sides of the brain.”"
    },
    {
     "dom": "gs",
     "fail": "Safety-net limited to “call back if worse”.",
     "why": "Non-specific safety-netting is standard failing feedback when stroke is on the differential.",
     "fix": "Name 999 symptoms (limb, speech, drowsiness) and same-day symptoms (ear vesicles, eye pain, visual change, severe headache)."
    }
   ]
  }
 },
 "first-seizure-dvla": {
  "stem": {
   "name": "Connor Healy",
   "age": "31-year-old man",
   "pmh": [
    "No previous episodes of collapse or seizure recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "Yesterday: witnessed episode at home (partner present) — stiffening then jerking of all four limbs for about 1 minute, bitten tongue, wet himself, confused and drowsy for about 20 minutes. Works as a delivery driver.",
   "reason": "Telephone call requested: “Just need you to confirm I’m okay to keep driving.”"
  },
  "knowledge": {
   "guideline": "NICE NG217 (epilepsies, 2022, updated August 2026) · NICE CG109 (transient loss of consciousness) · DVLA Assessing fitness to drive · GMC confidentiality guidance on fitness to drive (2017)",
   "summary": "Tonic-clonic movements, a bitten tongue, incontinence and prolonged confusion describe a generalised seizure, not a faint. He must stop driving now and notify the DVLA, and needs an epilepsy specialist within 2 weeks.",
   "points": [
    {
     "h": "Seizure, not faint",
     "t": "Features favouring a seizure: stiffening then rhythmic jerking, a bitten side of the tongue, prolonged confusion afterwards, and incontinence. Syncope is usually brief with a trigger or prodrome and rapid recovery. A witness account is the key investigation; NICE CG109 asks for a 12-lead ECG in anyone with transient loss of consciousness."
    },
    {
     "h": "Refer and investigate",
     "t": "NICE NG217: refer anyone with a suspected first seizure to an epilepsy specialist, to be seen within 2 weeks. In primary care: ECG, and bloods including glucose, electrolytes and calcium. Imaging, EEG, diagnosis and any anti-seizure medicine are specialist decisions."
    },
    {
     "h": "Driving — Group 1",
     "t": "DVLA: after a first isolated unprovoked seizure, a car or motorcycle licence is usually regained after 6 months seizure-free, or 12 months if investigations or clinical factors suggest a higher risk of recurrence. The time runs from the date of the seizure. The patient must stop driving and notify the DVLA; failing to notify can lead to a fine of up to £1,000."
    },
    {
     "h": "Driving — Group 2 and provoked seizures",
     "t": "Lorry and bus (Group 2) standards are much stricter — typically years off driving. A seizure linked to alcohol or its withdrawal may be treated by the DVLA as provoked, but the DVLA, not the GP, decides — he still stops and notifies."
    },
    {
     "h": "Provoking factors and safety",
     "t": "Explore sleep deprivation, alcohol (including stopping suddenly after heavy use) and drugs. Interim advice: no swimming or bathing alone (shower instead), no working at heights or with dangerous machinery. Call 999 if a seizure lasts 5 minutes or more, or seizures repeat without recovery (NICE NG217)."
    },
    {
     "h": "If he keeps driving",
     "t": "GMC confidentiality guidance (2017): advise the patient of the legal duty and record it. If he continues to drive when not fit, make every reasonable effort to persuade him; if he still drives, inform the DVLA medical adviser, telling him first."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Connor Healy? It’s Dr Ahmed from the surgery. You rang about something that happened yesterday — tell me about it in your own words.",
    "dom": "rto",
    "why": "Open question after confirming identity"
   },
   {
    "who": "pt",
    "text": "Bit of a funny turn. The wife says I went stiff and shook for a minute and was out of it after, but I feel totally fine now. Probably just a faint — I was tired. Main thing is, I drive for a living, so I just need you to confirm I’m okay to carry on."
   },
   {
    "who": "dr",
    "text": "I hear that the driving is the big thing for you, and I promise we’ll talk about it properly. First I need to understand what happened, so I give you the right answer. Is that okay?",
    "dom": "gs",
    "why": "Acknowledges his agenda and sets the order of the call"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "What were you doing just before, and do you remember any warning — feeling hot, sick, light-headed, or a strange feeling?",
    "dom": "tasks",
    "why": "Explores prodrome and trigger to separate syncope from seizure"
   },
   {
    "who": "pt",
    "text": "Nothing really. I don’t remember it happening. Next thing I knew I was on the floor and she was shaking me."
   },
   {
    "who": "dr",
    "text": "What did your wife say she saw, and how long were you muddled afterwards? Did you bite your tongue or wet yourself?",
    "dom": "tasks",
    "why": "Obtains the witness account and discriminating features"
   },
   {
    "who": "pt",
    "text": "She said I went stiff, then all my arms and legs jerked for about a minute. I bit the side of my tongue — still sore. And yeah, I’d wet myself. I was dopey for about twenty minutes."
   },
   {
    "who": "dr",
    "text": "Thank you for being honest about that. Has anything like this ever happened before? And how have you been sleeping, and what about alcohol lately?",
    "dom": "tasks",
    "why": "Previous events and provoking factors"
   },
   {
    "who": "pt",
    "text": "Never before. Sleep’s been rubbish. I was drinking a fair bit, then I stopped a few days ago."
   },
   {
    "who": "dr",
    "text": "Any head injury in the fall, headache now, weakness, fever or stiff neck? Any palpitations or chest pain before it?",
    "dom": "tasks",
    "why": "Screens for red flags needing emergency care and for a cardiac cause"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. Tongue’s sore, that’s all."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said it was probably a faint. What would it mean for you if it turned out to be something else?",
    "dom": "rto",
    "why": "Explores the fear behind the minimisation"
   },
   {
    "who": "pt",
    "text": "If I can’t drive, I can’t work. I’m the only one earning, there’s the mortgage. And I don’t want to be told I’ve got epilepsy."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "That’s a lot riding on this, and I’m glad you told me. I have to be straight with you: going stiff, jerking all over, biting the side of your tongue, wetting yourself and being muddled for twenty minutes — that describes a seizure, not a faint. It doesn’t mean you have epilepsy; that’s for a specialist to decide.",
    "dom": "tasks",
    "why": "Names the diagnosis honestly without premature labelling"
   },
   {
    "who": "pt",
    "text": "So what does that mean for driving?"
   },
   {
    "who": "dr",
    "text": "After a seizure, the law says you must stop driving from now and tell the DVLA yourself. For an ordinary car licence it’s usually six months without a further seizure, counted from yesterday. If you hold a lorry or bus licence, the rules are much longer. I can’t tell you you’re okay to drive — I’m sorry, because I know what that means.",
    "dom": "tasks",
    "why": "Clear, non-negotiable DVLA advice with the correct Group 1 period"
   },
   {
    "who": "pt",
    "text": "Six months? I’ll lose my job. Can’t you just not write it down?"
   },
   {
    "who": "dr",
    "text": "I understand why you’d ask, and I can hear how frightening this is. But I can’t do that. If you had another seizure at the wheel, you or someone else could be killed. What I can do is help with everything that follows.",
    "dom": "rto",
    "why": "Declines collusion firmly but with empathy"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’m referring you to a specialist first-seizure clinic to be seen within two weeks. I’d like you in today for a heart tracing — sometimes a heart rhythm problem causes collapses — and blood tests. The alcohol and poor sleep may have triggered it, so that matters for the specialist too. Would you like help with the drinking?",
    "dom": "tasks",
    "why": "NG217 referral, ECG and bloods, provoking factors, offer of alcohol support"
   },
   {
    "who": "pt",
    "text": "Maybe. I’ll think about it."
   },
   {
    "who": "dr",
    "text": "That’s fair. On work: I can give you a fit note saying you’re not fit to drive but may be fit for other duties. It’s worth talking to your employer about non-driving work. And many people do get back to driving once the seizure-free period has passed.",
    "dom": "rto",
    "why": "Practical support for the livelihood impact so honesty isn’t abandonment"
   },
   {
    "who": "pt",
    "text": "Okay. That’s something, I suppose."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Until you’re seen: shower rather than bath, don’t swim alone, avoid heights and dangerous machinery, try to keep regular sleep, and go steady with alcohol. If you have another seizure lasting five minutes or more, or one after another without waking, your wife should call 999.",
    "dom": "gs",
    "why": "Interim safety advice and the NG217 999 threshold"
   },
   {
    "who": "dr",
    "text": "Can you tell me in your own words what you’re going to do about driving?",
    "dom": "rto",
    "why": "Teach-back on the key legal advice"
   },
   {
    "who": "pt",
    "text": "Stop driving now, tell the DVLA, come in for the heart test, and wait for the clinic."
   },
   {
    "who": "dr",
    "text": "That’s right. I’ll record that we’ve discussed it, and I’ll see you today for the tracing so we can talk through the fit note together. I’m sorry this is such hard news.",
    "dom": "gs",
    "why": "Documents the advice and arranges follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; acknowledged the driving agenda but gathered the story first.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Job as a delivery driver, sole income, mortgage, sleep and alcohol.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “just a faint” and “I can’t afford time off” as minimisation driven by fear, and explored it.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (a faint from tiredness), concerns (licence, job, income, an epilepsy label), expectation (to be cleared to drive).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "12-lead ECG and bloods (glucose, electrolytes, calcium); specialist to decide on imaging and EEG.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Generalised seizure versus syncope or cardiac arrhythmia; provoked (alcohol withdrawal, sleep loss) versus unprovoked.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for head injury, focal deficit, fever or meningism, cardiac symptoms; 999 if seizure 5 minutes or more.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Stated clearly that this was a seizure, not a faint, without labelling it epilepsy.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Stop driving now and notify the DVLA; epilepsy specialist within 2 weeks; no anti-seizure medicine started in primary care.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Alcohol and sleep addressed with an offer of support; fit note and work options.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Interim safety advice, 999 threshold, documentation of driving advice, same-day review for ECG.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Professional & ethical dilemmas",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Connor Healy",
    "age": "31 years · male",
    "pmh": [
     "Nil recorded"
    ],
    "meds": [
     "No regular medication recorded"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Witnessed episode yesterday: stiff then jerking all limbs ~1 min, tongue bitten, incontinent, confused ~20 min. Occupation: delivery driver.",
    "reason": "Phone call: “Can you confirm I’m okay to keep driving?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and park the agenda",
     "d": "He opens with the driving request. Acknowledge it and promise to return to it after hearing the story."
    },
    {
     "t": "1–5",
     "h": "Witness history",
     "d": "Prodrome, what his wife saw, duration, tongue, incontinence, recovery, previous events, sleep, alcohol, red flags."
    },
    {
     "t": "5–6",
     "h": "Explore the fear",
     "d": "Job, sole income, mortgage, fear of an epilepsy label."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Seizure not faint. Stop driving, notify DVLA. Refuse collusion kindly. Epilepsy specialist within 2 weeks, ECG, bloods, alcohol support, fit note."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Bath, swimming, heights, machinery. 999 at 5 minutes. Teach-back on driving. Document."
    }
   ],
   "wordPics": {
    "fail": "Accepts “just a faint”; tells him he can keep driving or leaves driving unmentioned; agrees not to record it; no specialist referral or ECG; no safety advice.",
    "pass": "Recognises a seizure from the history; tells him clearly to stop driving and notify the DVLA; refers to an epilepsy specialist within 2 weeks; arranges ECG and bloods; gives interim safety advice.",
    "exc": "All of the above, plus: elicits his fear about income and an epilepsy label and responds to it; declines to collude while staying on his side; explores alcohol withdrawal as a trigger and offers support; offers a fit note for non-driving duties and explains that driving is often regained; uses teach-back and documents the advice."
   },
   "avoid": [
    {
     "dont": "“It was probably just a faint — see how you go.”",
     "instead": "“What your wife saw describes a seizure, not a faint, and we need to take it seriously.”",
     "why": "Colluding with the minimisation misses the diagnosis and the legal duty."
    },
    {
     "dont": "“I won’t put it in your notes, then.”",
     "instead": "“I can’t leave it out — but I can help with work, the fit note and getting you seen quickly.”",
     "why": "Concealment is dishonest and puts the public at risk."
    },
    {
     "dont": "“You’ll have to tell the DVLA. Anything else?”",
     "instead": "“I know this is a huge blow. Let’s look at what we can do about work and money.”",
     "why": "Correct but cold advice fails the Relating domain and risks non-adherence."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Livelihood",
     "t": "Loss of driving means loss of work for a delivery driver. Explore non-driving roles with his employer, and signpost benefits advice (Citizens Advice) if income stops."
    },
    {
     "h": "Alcohol and sleep",
     "t": "Heavy drinking then stopping suddenly, plus poor sleep, may have triggered the seizure. Offer brief intervention and local alcohol services without judgement."
    }
   ],
   "legal": [
    {
     "h": "DVLA duty",
     "t": "The licence holder must notify the DVLA and stop driving. Group 1: usually 6 months seizure-free after a first isolated seizure (12 months if higher recurrence risk). Group 2: much longer. Failure to notify can lead to a fine of up to £1,000."
    },
    {
     "h": "Equality Act 2010",
     "t": "If a seizure disorder is diagnosed it may count as a disability, so his employer should consider reasonable adjustments such as non-driving duties. Access to Work may help."
    }
   ],
   "professional": [
    {
     "h": "GMC confidentiality and driving",
     "t": "GMC guidance (2017): explain the duty to notify and record it. If he keeps driving against advice after reasonable efforts to persuade him, disclose to the DVLA medical adviser, telling him first."
    },
    {
     "h": "Fit note",
     "t": "A fit note can state “may be fit for work” with the adjustment “no driving”, keeping him in work where possible."
    }
   ],
   "community": [
    {
     "h": "Seizure support",
     "t": "Epilepsy Action and Epilepsy Society offer information on first aid, driving and work, and helplines for patients and families."
    },
    {
     "h": "Alcohol services",
     "t": "Local community alcohol services and mutual-aid groups if he wants help cutting down safely."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Head injury, persistent headache, focal weakness or failure to return to baseline — emergency assessment",
     "Fever, neck stiffness or photophobia — possible CNS infection, 999",
     "Palpitations, chest pain or exertional collapse — possible cardiac cause; ECG today"
    ],
    "psychosocial": [
     "Occupation: delivery driver — sole earner, mortgage",
     "Alcohol pattern (heavy then stopped) and poor sleep",
     "Fear of an epilepsy label and what it means for his future"
    ],
    "ice": [
     "Idea: “It was just a faint — I was tired”",
     "Concern: losing his licence, his job and the family income; being told he has epilepsy",
     "Expectation: to be told he can keep driving"
    ]
   },
   "diagnosis": "A first generalised tonic-clonic seizure, possibly provoked by alcohol withdrawal and sleep loss: “What your wife saw describes a seizure, not a faint. It doesn’t mean you have epilepsy — a specialist will look at that — but it does mean you must stop driving for now.”",
   "diagnosisLay": "“A seizure is like an electrical storm in the brain — for a minute the signals fire all at once, which is why you went stiff and shook, and why you were muddled afterwards while the brain reset. A faint is different: the blood supply dips for a few seconds and you come round quickly.”",
   "management": {
    "reflectIce": "“You’re worried that losing your licence means losing your job and the mortgage. That’s a real fear, and I’ll help with it — but I can’t help by pretending this was a faint.”",
    "psychosocial": "Pair the hard news with concrete help: fit note for non-driving duties, conversation with his employer, benefits advice if needed, alcohol support, and the realistic prospect of driving again.",
    "sharedPlan": [
     "Stop driving now; he notifies the DVLA; advice documented",
     "Epilepsy specialist within 2 weeks (NICE NG217); ECG and bloods today",
     "Alcohol and sleep advice with support offered; fit note"
    ],
    "safetyNet": [
     "999 if a seizure lasts 5 minutes or more, or seizures repeat without recovery",
     "No bathing or swimming alone, no heights or dangerous machinery until assessed"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Epilepsy",
    "s": "Case walkthrough · NICE NG217",
    "href": "../cases/epilepsy.html"
   },
   {
    "ic": "🗺️",
    "t": "Fits and funny turns",
    "s": "Visual algorithm · seizure or syncope",
    "href": "algorithms/fits-funny-turns.html"
   },
   {
    "ic": "💠",
    "t": "Epilepsy protocol",
    "s": "First seizure · DVLA · safety advice",
    "href": "management/epilepsy.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA Fitness to Drive",
    "s": "Seizure rules · notification",
    "href": "dvla.html"
   },
   {
    "ic": "📝",
    "t": "Fit Note Helper",
    "s": "Adjusted duties · no driving",
    "href": "fit-note.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is a test of honesty under pressure. The clinical picture is clear; candidates fail by softening the driving advice, colluding with “just a faint”, or delivering the DVLA message so coldly that the patient disengages.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting the patient’s label of “a faint” without a witness history.",
     "why": "Tongue-biting, incontinence and 20 minutes of confusion point to a seizure. Missing them is a data-gathering fail.",
     "fix": "Ask what the witness saw, how long he was muddled, and about the tongue and incontinence."
    },
    {
     "dom": "tasks",
     "fail": "Vague driving advice — “best not to drive for a bit”.",
     "why": "The DVLA rules are specific and the patient must notify. Soft advice is a management and professionalism failure.",
     "fix": "“The law says you must stop driving from now and tell the DVLA. For a car licence it’s usually six months from yesterday.”"
    },
    {
     "dom": "tasks",
     "fail": "Starting an anti-seizure medicine or ordering an MRI and EEG from primary care.",
     "why": "NICE NG217 places diagnosis and treatment with an epilepsy specialist.",
     "fix": "Refer to be seen within 2 weeks; do the ECG and bloods yourself."
    },
    {
     "dom": "rto",
     "fail": "Agreeing to “not write it down” to keep the patient onside.",
     "why": "Collusion is dishonest and unsafe; examiners mark it as a serious professionalism concern.",
     "fix": "Refuse clearly and warmly, then move straight to what you can do to help."
    },
    {
     "dom": "rto",
     "fail": "Giving the DVLA message and moving on without acknowledging the impact on his job.",
     "why": "“Does not respond to the patient’s concerns.” Cold delivery drives non-adherence.",
     "fix": "Name the blow, then offer a fit note for non-driving duties, employer discussion and benefits advice."
    },
    {
     "dom": "gs",
     "fail": "No interim safety advice or 999 threshold.",
     "why": "Drowning and injury are real risks before assessment; non-specific safety-netting is a common fail.",
     "fix": "Shower not bath, no swimming alone, no heights or machinery, 999 at 5 minutes."
    },
    {
     "dom": "gs",
     "fail": "Not documenting or confirming that the driving advice was understood.",
     "why": "The advice has legal weight; unclear understanding leaves him and the public at risk.",
     "fix": "Teach-back — “What are you going to do about driving?” — and record it."
    }
   ]
  }
 },
 "functional-symptoms": {
  "stem": {
   "name": "Carys Bevan",
   "age": "34-year-old woman",
   "pmh": [
    "Anxiety",
    "Months of fatigue, widespread pain, intermittent leg weakness and “fuzzy” episodes"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "Extensive investigation: bloods, MRI and neurology review — all normal or non-diagnostic. Several GP consultations for the same symptoms.",
   "reason": "Video consultation: wants more scans or a referral to someone who will “find what’s wrong”."
  },
  "knowledge": {
   "guideline": "NICE NG193 (chronic pain, 2021) · NICE NG127 (suspected neurological conditions) · NICE NG222 (depression in adults, 2022, updated December 2025) · NICE NG116 (PTSD, 2018)",
   "summary": "Genuinely disabling symptoms with normal, thorough investigation fit a functional neurological disorder or persistent physical symptoms. The task is a positive explanation, validation, and an active rehabilitation plan — not more tests or dismissal.",
   "points": [
    {
     "h": "Real, common, treatable",
     "t": "Functional neurological disorder is a problem with how the nervous system works, not with its structure, and it is not feigned. It is one of the commonest reasons for neurology referral. Normal tests are consistent with the diagnosis; they do not mean nothing is wrong."
    },
    {
     "h": "A positive diagnosis",
     "t": "Functional disorders are diagnosed on positive features (for example Hoover’s sign or variability with distraction in functional weakness), not only by exclusion. A clear explanation with an accessible model — “the hardware is intact, the software is misfiring” — is itself part of treatment."
    },
    {
     "h": "Avoid the investigation loop",
     "t": "Once adequate assessment is done, repeated tests and referrals rarely reassure, risk incidental findings and reinforce illness focus. Reassess only for genuinely new symptoms or signs, using NICE NG127 criteria for neurological red flags."
    },
    {
     "h": "Widespread pain",
     "t": "NICE NG193 (chronic primary pain): offer supervised group exercise and psychological therapy (CBT or ACT); consider acupuncture within limits; consider an antidepressant (amitriptyline, citalopram, duloxetine, fluoxetine, paroxetine or sertraline) after discussion, reviewed at 4 to 6 weeks. Do not start opioids, gabapentinoids, NSAIDs, benzodiazepines or paracetamol for chronic primary pain."
    },
    {
     "h": "Mind and body without blame",
     "t": "Stress, past trauma, poor sleep and anxiety can predispose to and maintain functional symptoms. Raise them as part of how the nervous system works, not as “all in your head”. Screen for depression (NICE NG222) and, if trauma symptoms are present, trauma-focused therapy (NICE NG116); ask about self-harm."
    },
    {
     "h": "Rehabilitation and continuity",
     "t": "Management is active: physiotherapy adapted for functional disorders (via neurology or local pathways), psychological therapy, sleep and pacing, and reputable self-help such as neurosymptoms.org. One named clinician and planned reviews reduce fragmentation and repeat investigation."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Carys, I’m Dr Hughes. Can you see and hear me okay? Tell me where things are for you right now.",
    "dom": "rto",
    "why": "Open question after checking the video link"
   },
   {
    "who": "pt",
    "text": "I’m at the end of my tether. Every doctor does tests, says they’re normal, and basically implies it’s in my head. I am NOT making this up. I can barely walk some days. I want a referral to someone who’ll find what’s wrong, or more scans."
   },
   {
    "who": "dr",
    "text": "Before anything else, I want to say clearly: I believe you. Your symptoms are real, and being disbelieved on top of being unwell must be exhausting. I’d like to understand what life is like for you, then talk about what might help. Is that okay?",
    "dom": "rto",
    "why": "Explicit validation first, then agrees the agenda"
   },
   {
    "who": "pt",
    "text": "…Okay. Thank you. Nobody’s said that before."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "Tell me about a typical bad day — what happens with your legs, the pain, the tiredness, and the fuzzy episodes?",
    "dom": "tasks",
    "why": "Open exploration of the symptom pattern and its impact"
   },
   {
    "who": "pt",
    "text": "My legs feel heavy and just give way sometimes. The pain’s everywhere. I’m wiped out, and some days my head goes fuzzy and I can’t think straight."
   },
   {
    "who": "dr",
    "text": "During the fuzzy spells, do you ever lose consciousness, fall, or lose time?",
    "dom": "tasks",
    "why": "Clarifies whether episodes involve loss of awareness — relevant to safety and driving"
   },
   {
    "who": "pt",
    "text": "I don’t pass out, no. I just can’t think."
   },
   {
    "who": "dr",
    "text": "Has anything genuinely new appeared recently — weight loss, fevers, changes with your bladder or bowels, or anything different from before?",
    "dom": "tasks",
    "why": "Screens for new red flags that would justify reassessment"
   },
   {
    "who": "pt",
    "text": "No. It’s the same stuff, just not getting better."
   },
   {
    "who": "dr",
    "text": "How are you sleeping, and how has all this affected your mood? Sometimes people get so low they have thoughts of harming themselves — has that happened to you?",
    "dom": "tasks",
    "why": "Sleep, mood and risk screen"
   },
   {
    "who": "pt",
    "text": "Sleep’s terrible. I’m anxious a lot. Low, but no, I wouldn’t hurt myself."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "What do you think is going on, and what worries you most?",
    "dom": "rto",
    "why": "Elicits ideas and concerns in her own words"
   },
   {
    "who": "pt",
    "text": "That something serious is being missed. And that if I say I’m stressed, everyone will say “see, it’s psychological” and stop listening."
   },
   {
    "who": "dr",
    "text": "That makes complete sense. Can I ask gently — has there been a lot of stress, or anything difficult in the past, that you’d be willing to mention? You don’t need to go into detail.",
    "dom": "rto",
    "why": "Sensitive, permission-based exploration of contributors"
   },
   {
    "who": "pt",
    "text": "Work’s been really stressful. And something happened in the past I don’t really talk about."
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "Thank you for telling me. Here’s what I think is happening. Normal tests don’t mean nothing is wrong. There’s a recognised condition called functional neurological disorder. The structure of your nerves and brain — the hardware — is healthy, but the way signals are processed — the software — is misfiring. That’s why scans look normal but your legs genuinely give way.",
    "dom": "tasks",
    "why": "Positive, accessible explanation of the functional model"
   },
   {
    "who": "pt",
    "text": "So it’s not in my head?"
   },
   {
    "who": "dr",
    "text": "It’s not imagined. Stress, poor sleep and difficult past experiences can make the nervous system more likely to misfire — not because you’re weak, but because brain and body are connected. That doesn’t make any of this less real.",
    "dom": "tasks",
    "why": "Links contributors to the mechanism without blame"
   },
   {
    "who": "pt",
    "text": "But shouldn’t you scan me again, just in case?"
   },
   {
    "who": "dr",
    "text": "I understand the pull. Honestly, you’ve had thorough tests and a neurologist’s review, and nothing new has changed. More scans are very unlikely to find something, and they can throw up harmless findings that lead to more worry. I’d rather put the effort into treatment that helps this condition.",
    "dom": "tasks",
    "why": "Declines further investigation kindly, with reasons"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "There are things that work. Specialist physiotherapy for functional symptoms, which retrains movement. A talking therapy aimed at these symptoms and at the anxiety and past experiences, when you’re ready. Help with sleep and pacing so you don’t boom and bust. For the pain, some people find a low-dose medicine helps. Which of those feels like the right place to start?",
    "dom": "rto",
    "why": "Offers a multi-part rehabilitation plan and invites her choice"
   },
   {
    "who": "pt",
    "text": "The physio, I think. That feels like doing something physical about it."
   },
   {
    "who": "dr",
    "text": "Good — I’ll arrange that referral. I’ll also send you a website called neurosymptoms.org, written by specialists, which explains this really well. And I’d like to be your regular doctor for this, so you’re not starting from scratch each time.",
    "dom": "gs",
    "why": "Acts on her choice, gives a resource, offers continuity"
   },
   {
    "who": "pt",
    "text": "That would help a lot."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "I’m not closing the door on tests. If something genuinely new happens — weakness that doesn’t come and go, losing control of your bladder or bowels, weight loss, fevers, or blackouts — tell us straight away and we’ll reassess. And if your mood drops or you feel unsafe, contact us the same day.",
    "dom": "gs",
    "why": "Proportionate safety-net for new red flags and mood"
   },
   {
    "who": "dr",
    "text": "How would you explain what we’ve agreed to someone at home?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "It’s real — the wiring’s fine but the signals are misfiring. No more scans unless something new happens. Physio first, a website to read, and you’ll be my doctor for it."
   },
   {
    "who": "dr",
    "text": "That’s it exactly. Let’s book a review in four weeks to see how you’re getting on and talk about the therapy options.",
    "dom": "gs",
    "why": "Defined follow-up"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her voice her frustration fully before responding.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Function day to day, work stress, sleep, past difficult experiences — explored with permission.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I’m not making this up” and “they’ll say it’s psychological” and responded to each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (missed disease), concern (being disbelieved or dismissed as psychological), expectation (more scans or a new specialist).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Reviews what has been done; no repeat testing without new features; mood screen.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Functional neurological disorder and chronic primary pain; comorbid anxiety or depression; trauma-related symptoms.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about new neurological, bladder or bowel, systemic features and loss of awareness; self-harm risk.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named a positive diagnosis with an accessible explanation, not “nothing is wrong”.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Functional-disorder physiotherapy, psychological therapy, sleep and pacing, NICE NG193 pain options; her choice of starting point.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Anxiety, low mood and possible trauma addressed; avoids opioids and gabapentinoids for chronic primary pain.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named clinician, 4-week review, named new red flags and a same-day route for mood crisis.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Mental health & addiction",
    "Long-term conditions & cancer",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Carys Bevan",
    "age": "34 years · female",
    "pmh": [
     "Anxiety",
     "Fatigue, widespread pain, leg weakness — extensively investigated"
    ],
    "meds": [
     "No regular medication recorded"
    ],
    "allergy": "None recorded",
    "recent": "Bloods, MRI and neurology review: normal or non-diagnostic. Multiple recent GP contacts.",
    "reason": "“I want someone to find what’s wrong — more scans or another specialist.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Listen, then believe",
     "d": "Let her finish. Say “I believe you” early and mean it."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Typical bad day, fuzzy episodes and awareness, new red flags, sleep, mood and risk."
    },
    {
     "t": "5–7",
     "h": "ICE and contributors",
     "d": "Fear of a missed disease and of being labelled psychological. Ask permission before touching stress or past trauma."
    },
    {
     "t": "7–10",
     "h": "Explain and plan",
     "d": "Positive functional diagnosis, hardware versus software, why not more scans, rehabilitation options she chooses from."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Named clinician, resource, new red flags, mood safety-net, teach-back, 4-week review."
    }
   ],
   "wordPics": {
    "fail": "Tells her the tests are normal so nothing is wrong, or suggests it is anxiety; orders more scans or another referral to placate; raises trauma as the cause; no plan, no continuity.",
    "pass": "Validates that symptoms are real; explains a functional disorder in plain terms; declines further tests with reasons; offers physiotherapy and psychological therapy; screens mood; arranges follow-up.",
    "exc": "All of the above, plus: says “I believe you” early and sincerely; explores stress and trauma with permission and without blame; lets her choose the starting treatment; applies NICE NG193 for the pain; offers a named clinician; gives specific red flags so she is not abandoned; confirms with teach-back."
   },
   "avoid": [
    {
     "dont": "“Your tests are all normal, so there’s nothing seriously wrong.”",
     "instead": "“Normal tests don’t mean nothing is wrong — they fit a real condition called functional neurological disorder.”",
     "why": "Reassurance by exclusion feels like dismissal and perpetuates the cycle."
    },
    {
     "dont": "“I think this is probably stress and anxiety.”",
     "instead": "“Stress and sleep can make the nervous system more likely to misfire — that doesn’t make it less real.”",
     "why": "Framing it as psychological confirms her fear of being disbelieved."
    },
    {
     "dont": "“Let’s do one more scan just to put your mind at rest.”",
     "instead": "“More scans are unlikely to help and can cause worry — let’s put the effort into treatment.”",
     "why": "Placating tests reinforce the investigation loop and risk harm."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Function and work",
     "t": "Explore what she can and cannot do — work, caring, daily tasks. Work stress may be both a contributor and a casualty; a fit note with adjustments or a phased return may help."
    },
    {
     "h": "Past trauma",
     "t": "Past trauma is common in functional disorders. Ask with permission, never press for detail, and offer trauma-focused therapy when she is ready (NICE NG116)."
    }
   ],
   "legal": [
    {
     "h": "Benefits",
     "t": "If symptoms limit daily living or mobility over the long term, she may be eligible for Personal Independence Payment or Universal Credit health elements; supportive factual reports describe function, not diagnosis."
    },
    {
     "h": "Equality Act 2010",
     "t": "A condition with a substantial, long-term effect on day-to-day activities can count as a disability, so her employer may need to consider reasonable adjustments."
    }
   ],
   "professional": [
    {
     "h": "Stewardship of investigations",
     "t": "Ordering tests to placate exposes patients to harm. GMC Good Medical Practice (2024): provide care based on clinical need; explain decisions openly and record them."
    },
    {
     "h": "Continuity and consistency",
     "t": "A named clinician and a shared plan in the record reduce repeated investigation by different clinicians. Record the diagnosis positively so others don’t restart the search."
    }
   ],
   "community": [
    {
     "h": "Patient resources",
     "t": "neurosymptoms.org (written by neurologists) and FND Hope UK offer explanations and peer support."
    },
    {
     "h": "Psychological and pain services",
     "t": "NHS Talking Therapies for anxiety and trauma, local pain-management programmes, and community physiotherapy for graded activity."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "New persistent focal weakness, sensory level, or bladder or bowel dysfunction — reassess",
     "Weight loss, fevers, night sweats — new systemic features",
     "Episodes with loss of awareness, or thoughts of self-harm"
    ],
    "psychosocial": [
     "Daily function, work and the impact of being disbelieved",
     "Sleep, anxiety and mood, including self-harm risk",
     "Stress and past trauma — explored only with permission"
    ],
    "ice": [
     "Idea: “Something serious is being missed”",
     "Concern: being called a hypochondriac or told it’s psychological",
     "Expectation: more scans or a specialist who will find the cause"
    ]
   },
   "diagnosis": "Functional neurological disorder with chronic primary pain and fatigue, on a background of anxiety: “Your symptoms are real. The tests show the structure is healthy; the problem is in how signals are being processed — and that can be treated.”",
   "diagnosisLay": "“Think of your body as a computer. The scans check the hardware — the wires and circuits — and they’re fine. But the software, the programs that send the signals, has developed a glitch. You can’t see a software glitch on a scan, but it can stop things working, and it can be retrained.”",
   "management": {
    "reflectIce": "“You were worried I’d dismiss you or say it’s all psychological. I believe you, and I’m not saying that — I’m saying it’s a real condition with real treatment.”",
    "psychosocial": "Let her choose where to start, raise stress and trauma only with consent, support work with a fit note or adjustments, and anchor everything to one named clinician.",
    "sharedPlan": [
     "Positive diagnosis of functional neurological disorder, recorded clearly",
     "Physiotherapy for functional symptoms; psychological therapy when ready; sleep and pacing",
     "Chronic primary pain per NICE NG193: exercise, psychological therapy, consider an antidepressant"
    ],
    "safetyNet": [
     "Genuinely new symptoms (persistent weakness, bladder or bowel change, weight loss, fevers, blackouts) — reassess",
     "Mood crisis or feeling unsafe — same-day contact; review in 4 weeks with the named GP"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Medically unexplained symptoms",
    "s": "Visual algorithm · functional disorders",
    "href": "algorithms/medically-unexplained-symptoms.html"
   },
   {
    "ic": "💠",
    "t": "Chronic primary pain protocol",
    "s": "NICE NG193 · exercise · therapy",
    "href": "management/chronic-pain.html"
   },
   {
    "ic": "📋",
    "t": "Fatigue",
    "s": "Case walkthrough · persistent fatigue",
    "href": "../cases/fatigue.html"
   },
   {
    "ic": "💠",
    "t": "Anxiety protocol",
    "s": "Stepped care · talking therapies",
    "href": "management/anxiety.html"
   },
   {
    "ic": "🗺️",
    "t": "Leg weakness",
    "s": "Visual algorithm · red flags",
    "href": "algorithms/leg-weakness.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed at the extremes: dismissing her (“the tests are normal”) or placating her (“one more scan”). The pass lies in believing her, naming a positive diagnosis and building an active plan.",
   "items": [
    {
     "dom": "rto",
     "fail": "Opening with a summary of normal results before acknowledging her distress.",
     "why": "“Does not respond to the patient’s concerns.” It repeats the experience that has damaged her trust.",
     "fix": "Say “I believe you — your symptoms are real” in the first minute."
    },
    {
     "dom": "tasks",
     "fail": "Ordering another MRI or a second neurology opinion to end the argument.",
     "why": "It reinforces the investigation loop and risks harm from incidental findings — not in line with UK practice.",
     "fix": "Explain kindly why more scans won’t help, and redirect the effort to treatment."
    },
    {
     "dom": "tasks",
     "fail": "Giving no diagnosis — “we don’t know what it is, but it isn’t anything serious”.",
     "why": "A diagnosis by exclusion leaves the patient with nothing to work on and drives further searching.",
     "fix": "Name functional neurological disorder and explain it with the hardware-software model."
    },
    {
     "dom": "rto",
     "fail": "Raising trauma or anxiety as the cause in the first minutes.",
     "why": "It confirms her fear of being labelled psychological and ruptures rapport.",
     "fix": "Ask permission, keep it optional, and frame it as affecting how the nervous system works."
    },
    {
     "dom": "tasks",
     "fail": "Starting an opioid or gabapentinoid for the widespread pain.",
     "why": "NICE NG193 advises against these for chronic primary pain.",
     "fix": "Offer exercise, psychological therapy, and consider one of the NG193 antidepressants after discussion."
    },
    {
     "dom": "gs",
     "fail": "Closing with “there’s nothing more we can do” or no follow-up.",
     "why": "Discharge without a plan is abandonment; examiners mark lack of continuity and safety-netting.",
     "fix": "Named clinician, specific new red flags, a mood safety-net and a 4-week review."
    }
   ]
  }
 },
 "iatrogenic-anticholinergic": {
  "stem": {
   "name": "Harold Inglis",
   "age": "78-year-old man",
   "pmh": [
    "Urinary urgency — oxybutynin started about 3 weeks ago",
    "Longstanding back pain — on amitriptyline"
   ],
   "meds": [
    "Oxybutynin (started about 3 weeks ago)",
    "Amitriptyline"
   ],
   "allergy": "No known drug allergies",
   "recent": "Oxybutynin started for urinary urgency about three weeks ago. Amitriptyline on repeat for back pain.",
   "reason": "Video appointment booked by his daughter: “Dad has become confused and constipated over the last few weeks.”"
  },
  "knowledge": {
   "guideline": "NICE NG97 — Dementia (2018): medicines with anticholinergic burden · NICE CG97 — Lower urinary tract symptoms in men (2010, updated 2015)",
   "summary": "New confusion, dry mouth, blurred vision, constipation and difficulty passing urine weeks after starting oxybutynin — on top of amitriptyline and a bought sedating antihistamine — is anticholinergic burden until proven otherwise. Reduce the burden, check for retention today, and reassess memory only once the drugs are out.",
   "points": [
    {
     "h": "Recognise the pattern",
     "t": "Anticholinergic effects: confusion and memory problems, drowsiness, dry mouth, blurred vision, constipation, urinary retention, fast heart rate. Several drugs together add up; older people are most sensitive. Onset over weeks after a new drug points to the drug, not dementia."
    },
    {
     "h": "NICE NG97 on anticholinergic burden",
     "t": "Be aware that some commonly prescribed medicines add to anticholinergic burden and cause cognitive impairment. Consider minimising them, and look for alternatives, when assessing whether to refer someone with suspected dementia. Validated burden scales exist; NICE NG97 does not favour one."
    },
    {
     "h": "Always ask about bought medicines",
     "t": "Sedating antihistamines sold for sleep are anticholinergic and are often not on the GP record. A full medicine review includes over-the-counter and herbal products (NICE NG5, medicines optimisation, 2015)."
    },
    {
     "h": "Deprescribe safely",
     "t": "Stop the oxybutynin and the bought antihistamine. Amitriptyline should be withdrawn gradually rather than stopped abruptly (BNF); NICE NG59 does not recommend tricyclics for low back pain, so review its purpose. STOPP/START (version 3, 2023, international) lists these combinations in older adults."
    },
    {
     "h": "Retention and delirium",
     "t": "Anticholinergics can cause urinary retention — palpable bladder, pain, dribbling or overflow. Acute painful retention needs same-day catheterisation. Subacute confusion also needs a delirium check (NICE CG103): look for infection, constipation, retention, dehydration and check bloods including U&E."
    },
    {
     "h": "Treat the urgency differently",
     "t": "For men with overactive bladder symptoms, NICE CG97 advises bladder training and assessment of the lower urinary tract (including residual volume) before drugs. If a drug is needed, mirabegron is an option (NICE TA290); it is contraindicated in severe uncontrolled hypertension, so check BP (MHRA Drug Safety Update, October 2015)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, Mr Inglis — I’m Dr Lee. Can you both see and hear me all right? And Mr Inglis, are you happy for your daughter to be part of this conversation?",
    "dom": "rto",
    "why": "Checks the video link and seeks the patient’s own consent for a third party"
   },
   {
    "who": "pt",
    "text": "(Harold) Yes, yes, she’s fine to stay. (Daughter) We’re worried about Dad. Over the last few weeks he’s got confused and forgetful, really constipated, his mouth’s bone dry, his vision’s blurry — and his waterworks are worse, he can barely go. Is this his age, or is he getting dementia? It came on so quickly."
   },
   {
    "who": "dr",
    "text": "Thank you, that’s a really clear description. I can hear that the word dementia is on your mind — we will come back to it, I promise. First, Mr Inglis, how do you feel things are?",
    "dom": "rto",
    "why": "Acknowledges the dementia fear and brings the patient in directly"
   },
   {
    "who": "pt",
    "text": "(Harold) Muddled, doctor. And I can’t pass water properly. It’s the opposite of what I went to the doctor for."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "That’s an important clue. When did all this start — before or after the new bladder tablet?",
    "dom": "tasks",
    "why": "Links timing of symptoms to the medication change"
   },
   {
    "who": "pt",
    "text": "(Daughter) After. It was about three weeks ago he started the new one, and it’s been downhill since."
   },
   {
    "who": "dr",
    "text": "Right now, Mr Inglis — are you able to pass any urine at all? Any pain or swelling low in your tummy?",
    "dom": "tasks",
    "why": "Screens for acute urinary retention"
   },
   {
    "who": "pt",
    "text": "(Harold) A bit, in dribbles. It feels full, uncomfortable, but not agony."
   },
   {
    "who": "dr",
    "text": "Thank you. Any fever, being sick, falls, or times in the day when you’re much more confused than others?",
    "dom": "tasks",
    "why": "Screens for infection, falls and fluctuating delirium"
   },
   {
    "who": "pt",
    "text": "(Daughter) No fever. He’s been a bit worse some evenings, but no falls."
   },
   {
    "who": "dr",
    "text": "Now I’d like to go through every tablet. I can see the oxybutynin and the amitriptyline on the record. Are there any others — anything from the chemist or the supermarket, for sleep, colds or allergies?",
    "dom": "tasks",
    "why": "Takes a full medication history including over-the-counter items"
   },
   {
    "who": "pt",
    "text": "(Harold, after a pause) Well… I take a sleeping tablet from the chemist. An antihistamine one. I didn’t think it counted."
   },
   {
    "who": "dr",
    "text": "I’m really glad you mentioned it — lots of people don’t realise those count, and it’s actually very helpful.",
    "dom": "rto",
    "why": "Responds to the disclosure without judgement"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "(To the daughter) You mentioned dementia. What’s been going through your mind?",
    "dom": "rto",
    "why": "Explores the unspoken dementia fear"
   },
   {
    "who": "pt",
    "text": "(Daughter) That we’re losing him. That this is the start of it and it only goes one way."
   },
   {
    "who": "dr",
    "text": "That’s a frightening thought, and it makes sense you’d worry. What were you both hoping I could do today?",
    "dom": "rto",
    "why": "Validates and elicits expectations"
   },
   {
    "who": "pt",
    "text": "(Daughter) Just to know what it is. And whether he needs a memory test."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Then here’s some genuinely hopeful news. Dementia usually creeps in over months or years. This came on over weeks, right after a new tablet. There’s a family of medicines that, especially when you take several together, cause exactly this: muddled thinking, dry mouth, blurred vision, constipation and trouble passing urine. The bladder tablet is one. The amitriptyline is another. And the chemist sleeping tablet is a third.",
    "dom": "tasks",
    "why": "Names anticholinergic burden as the likely reversible cause"
   },
   {
    "who": "pt",
    "text": "(Harold) So the tablet for my bladder has stopped my bladder working?"
   },
   {
    "who": "dr",
    "text": "That’s exactly it — it’s a known side effect, and it’s why adding more tablets would be the wrong direction. The fix is taking some away. I can’t promise, but I’d expect a real improvement over the next couple of weeks once they’re out of your system.",
    "dom": "rto",
    "why": "Honest, hopeful reframe that answers the dementia fear"
   },
   {
    "who": "pt",
    "text": "(Daughter) Oh, thank goodness. I’d already been reading about care homes."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what I suggest. Stop the oxybutynin today, and stop the chemist sleeping tablet. The amitriptyline needs to come down gradually rather than stopping suddenly — I’ll give you a simple plan. Does that sound all right to you, Mr Inglis?",
    "dom": "tasks",
    "why": "Deprescribing plan with safe amitriptyline withdrawal, agreed with the patient"
   },
   {
    "who": "pt",
    "text": "(Harold) Yes. I want my head back."
   },
   {
    "who": "dr",
    "text": "There’s one thing I can’t do on video: feel your bladder. Because it feels full and you’re only dribbling, I want you seen in person today for an examination and a bladder scan, and some blood tests including your kidneys. If your bladder is holding a lot, you may need a catheter for a while to let it recover.",
    "dom": "tasks",
    "why": "Arranges same-day face-to-face retention assessment and bloods"
   },
   {
    "who": "pt",
    "text": "(Daughter) I can bring him in this afternoon."
   },
   {
    "who": "dr",
    "text": "Thank you. For the urgency, once things settle, we’ll try bladder training first and look at other options that don’t affect thinking. For sleep and your back, we’ll find gentler approaches rather than more tablets. And I’ll report this reaction so it’s recorded.",
    "dom": "gs",
    "why": "Plans safer alternatives and Yellow Card reporting"
   },
   {
    "who": "pt",
    "text": "(Harold) That’s a relief."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Before you come in — if you can’t pass any urine at all, or the tummy becomes painful and swollen, go straight to A&E. Same if you become very drowsy, feverish or suddenly much more confused. I’ll see you again in about two weeks to check your memory and thinking once these medicines are out. If there’s still a concern then, we’ll look into it properly.",
    "dom": "gs",
    "why": "Specific retention and delirium safety-net; planned cognitive reassessment"
   },
   {
    "who": "pt",
    "text": "(Daughter) Okay. That’s clear."
   },
   {
    "who": "dr",
    "text": "Could one of you tell me back which tablets are stopping and what happens this afternoon?",
    "dom": "rto",
    "why": "Teach-back to confirm understanding"
   },
   {
    "who": "pt",
    "text": "(Daughter) Stop the bladder tablet and the chemist sleeping one, cut the amitriptyline down slowly, come in this afternoon for the bladder check and bloods, and back in two weeks."
   },
   {
    "who": "dr",
    "text": "Perfect. You were right to bring him — the speed it came on was the clue, and it’s a fixable one.",
    "dom": "rto",
    "why": "Affirms the family’s concern and closes warmly"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Sought Harold’s consent for his daughter to join; heard the full story and brought Harold in directly.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Impact on daily life, falls, the family’s fear of care homes, how he manages at home.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Followed “it came on quickly” and “opposite of what I went for”; picked up the hesitation before the OTC disclosure.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (age or dementia); concern (losing him, care homes); expectation (an explanation and maybe a memory test).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Same-day face-to-face bladder examination and scan; U&E and delirium bloods; cognitive reassessment after withdrawal.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Anticholinergic burden versus delirium from infection or retention, versus a new dementia.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Acute urinary retention, delirium, renal impairment from obstruction.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Anticholinergic toxicity from stacked drugs (oxybutynin, amitriptyline, OTC antihistamine) with urinary retention.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Stop oxybutynin and antihistamine; taper amitriptyline (BNF); bladder training then non-anticholinergic option (NICE CG97, TA290).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Reviews why amitriptyline is prescribed (NICE NG59), sleep and back pain alternatives, constipation.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "A&E for complete retention or pain; delirium symptoms named; review in about two weeks; Yellow Card report.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Older adults",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Harold Inglis",
    "age": "78 years · male",
    "pmh": [
     "Urinary urgency",
     "Chronic back pain"
    ],
    "meds": [
     "Oxybutynin — started 3 weeks ago",
     "Amitriptyline"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Oxybutynin added for urinary urgency three weeks ago. Booked by daughter: “Dad’s gone confused.”",
    "reason": "Video consultation with his daughter present: new confusion, constipation and difficulty passing urine."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and consent",
     "d": "Check the link, ask Harold if his daughter can stay, and let her give the story."
    },
    {
     "t": "1–4",
     "h": "Timeline and drugs",
     "d": "Onset after oxybutynin; retention screen; delirium and falls; full list including chemist medicines."
    },
    {
     "t": "4–6",
     "h": "ICE",
     "d": "Name the dementia fear and ask what they hoped for."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Hopeful reframe; stop oxybutynin and antihistamine; taper amitriptyline; same-day bladder check and bloods."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "A&E for complete retention; delirium symptoms; review in two weeks; teach-back."
    }
   ],
   "wordPics": {
    "fail": "Accepts “it’s his age” or refers to the memory clinic; adds laxatives or another bladder drug; never asks about chemist medicines; misses the retention.",
    "pass": "Links the symptoms to the new drug, finds the OTC antihistamine, stops the oxybutynin, plans a bladder check and reviews after withdrawal.",
    "exc": "All of the above, plus: explains the anticholinergic effect in plain words; gives the hopeful reframe while being honest about uncertainty; tapers amitriptyline safely; arranges same-day face-to-face assessment of retention; plans a non-anticholinergic route for the urgency; the family leave relieved and clear."
   },
   "avoid": [
    {
     "dont": "“At 78, some memory decline is expected — let’s refer to the memory clinic.”",
     "instead": "“This came on over weeks after a new tablet — that points to the medicine, and it’s likely to reverse.”",
     "why": "Labelling dementia before removing a reversible cause is a Tasks fail (NICE NG97)."
    },
    {
     "dont": "“Let’s add a laxative for the constipation and switch to a different bladder tablet.”",
     "instead": "“The fix is taking tablets away, not adding more.”",
     "why": "Treating side effects with more drugs is the prescribing cascade."
    },
    {
     "dont": "“Why didn’t you tell us you were taking sleeping tablets?”",
     "instead": "“I’m really glad you mentioned it — lots of people don’t realise those count.”",
     "why": "Judgement stops disclosure; gratitude keeps the review honest."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Independence and family",
     "t": "Sudden confusion threatens independence and frightens families into thinking about care homes. A reversible cause changes the whole outlook."
    },
    {
     "h": "Self-care medicines",
     "t": "Older people often buy sleep aids without seeing them as “medicines”. Pharmacists can flag anticholinergic products at the point of sale."
    }
   ],
   "legal": [
    {
     "h": "Capacity and consent",
     "t": "Confusion does not remove capacity. Seek Harold’s consent for his daughter’s involvement and for the plan; assess capacity for specific decisions only if doubt arises (Mental Capacity Act 2005)."
    }
   ],
   "professional": [
    {
     "h": "Adverse drug reaction reporting",
     "t": "Report suspected adverse drug reactions in older people via the MHRA Yellow Card scheme, and record the reaction on the record so the drug is not restarted."
    },
    {
     "h": "Structured medication review",
     "t": "NICE NG5: medicines reconciliation and structured review, including over-the-counter products, for older people on multiple medicines. Consider a practice pharmacist review."
    }
   ],
   "community": [
    {
     "h": "Community pharmacy",
     "t": "Ask his usual pharmacy to note that sedating antihistamines should be avoided for him; community pharmacists can support deprescribing."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Unable to pass urine with lower abdominal pain or swelling — acute retention, same-day catheterisation",
     "Fluctuating confusion, drowsiness or fever — delirium (NICE CG103), look for infection and retention",
     "Falls, new urinary incontinence or rising creatinine — obstruction or wider harm from the drugs"
    ],
    "psychosocial": [
     "Family fear of dementia and care homes",
     "Harold’s embarrassment about the chemist sleeping tablet",
     "Impact on his independence and daily life"
    ],
    "ice": [
     "Idea: “It’s his age, or he’s getting dementia”",
     "Concern: “We’re losing him — it only goes one way”",
     "Expectation: an explanation and perhaps a memory test"
    ]
   },
   "diagnosis": "“The pattern — muddled thinking, dry mouth, blurred vision, constipation and trouble passing urine, starting weeks after a new bladder tablet — is a side effect of a group of medicines he is taking three of. It is very likely to improve once they are reduced.”",
   "diagnosisLay": "“Think of these medicines as each turning down the same dial in the body. One on its own might be fine; three together turn it down so far that the bladder, the bowels and the brain all slow down. Turn them off, and the dial comes back up.”",
   "management": {
    "reflectIce": "“You were worried this was the start of dementia — I can’t promise, but the speed and the timing point strongly to the medicines, and that’s something we can reverse.”",
    "psychosocial": "Thank Harold for disclosing the sleeping tablet; involve his daughter with his consent; give written instructions for the amitriptyline taper.",
    "sharedPlan": [
     "Stop oxybutynin and the OTC sedating antihistamine; taper amitriptyline gradually (BNF), reviewing its purpose (NICE NG59)",
     "Same-day face-to-face bladder examination and scan; U&E and delirium bloods",
     "Bladder training for urgency; non-anticholinergic drug only if needed (NICE CG97, TA290 with BP check)"
    ],
    "safetyNet": [
     "Cannot pass urine, or painful swollen abdomen — A&E",
     "Very drowsy, feverish or suddenly more confused — same-day contact; review in about two weeks to reassess thinking"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Multimorbidity and polypharmacy",
    "s": "Case walkthrough · NICE NG5 / NG56",
    "href": "../cases/multimorbidity-polypharmacy.html"
   },
   {
    "ic": "🗺️",
    "t": "Confusion",
    "s": "Visual algorithm · reversible causes",
    "href": "algorithms/confusion.html"
   },
   {
    "ic": "🗺️",
    "t": "Delirium",
    "s": "Visual algorithm · NICE CG103",
    "href": "algorithms/delirium.html"
   },
   {
    "ic": "💠",
    "t": "Male LUTS protocol",
    "s": "Retention · overactive bladder",
    "href": "management/male-luts.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests whether you spot a reversible cause hiding behind the word “dementia”. It is failed by accepting the family’s framing, adding drugs, or missing the bladder.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Referring to the memory clinic without reviewing the medicines.",
     "why": "NICE NG97 asks clinicians to consider anticholinergic burden before referring suspected dementia. Missing a reversible cause is unsafe.",
     "fix": "Link the timeline to the new drug, reduce the burden, and reassess thinking in about two weeks."
    },
    {
     "dom": "tasks",
     "fail": "Never asking about medicines from the chemist.",
     "why": "The sedating antihistamine is the hidden third drug; without it the review is incomplete.",
     "fix": "“Anything you buy yourself — for sleep, colds, allergies?”"
    },
    {
     "dom": "tasks",
     "fail": "Treating the urinary symptoms on video without an examination.",
     "why": "Retention cannot be excluded remotely. A full bladder needs same-day assessment and possibly a catheter.",
     "fix": "Arrange same-day face-to-face examination, bladder scan and U&E; give clear A&E advice."
    },
    {
     "dom": "tasks",
     "fail": "Stopping amitriptyline abruptly along with everything else.",
     "why": "The BNF advises gradual withdrawal of tricyclics to avoid withdrawal effects.",
     "fix": "Stop oxybutynin and the antihistamine now; taper amitriptyline with a written plan."
    },
    {
     "dom": "rto",
     "fail": "Talking only to the daughter.",
     "why": "Harold is the patient and is able to take part. Speaking over him fails Relating to Others.",
     "fix": "Ask his consent for her presence, and direct questions and decisions to him."
    },
    {
     "dom": "rto",
     "fail": "Hearing “is it dementia?” and replying “don’t worry” without explanation.",
     "why": "Empty reassurance does not address the fear; a reasoned, honest reframe does.",
     "fix": "Explain why the speed and timing point to the medicines, and promise a proper recheck if concern remains."
    },
    {
     "dom": "gs",
     "fail": "Using “anticholinergic burden” and “antimuscarinic” without explanation.",
     "why": "“Language not easily understood by the patient.”",
     "fix": "“A group of medicines that dry things up and slow the bladder, bowels and brain.”"
    }
   ]
  }
 },
 "interpreter-consultation": {
  "stem": {
   "name": "Fatima Khedira",
   "age": "58-year-old woman",
   "pmh": [
    "No significant past medical history recorded",
    "Limited spoken English"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "Telephone appointment booked about abdominal pain and low mood. No interpreter requested at booking.",
   "reason": "Telephone call — her 16-year-old son is on the line “to translate”."
  },
  "knowledge": {
   "guideline": "NHS England — Guidance for commissioners: interpreting and translation services in primary care (2018) · NICE PH50 — Domestic violence and abuse (2014)",
   "summary": "Patients with limited English should have a professional interpreter; family members, and especially children, should not interpret. Seeing her alone with a professional interpreter is also the safeguarding step that makes disclosure possible.",
   "points": [
    {
     "h": "Professional interpreters",
     "t": "NHS England guidance (2018) sets out that patients should have access to professional interpreting free of charge, and that family and friends — and children in particular — should not be used to interpret except where there is no alternative in an emergency."
    },
    {
     "h": "Why not a child",
     "t": "Family interpreting risks errors and editing, breaches confidentiality, puts a burden on the child, and blocks disclosure of sensitive issues such as abuse, mental health or sexual health."
    },
    {
     "h": "Domestic abuse lens",
     "t": "Low mood, unexplained bruising and a relative who speaks for the patient are recognised warning signs. NICE PH50 and QS116 (2016): ask about abuse only when the person is alone and it is safe, and have referral routes ready (specialist domestic abuse services, IDVA, MARAC where risk is high)."
    },
    {
     "h": "Children in the household",
     "t": "Under the Domestic Abuse Act 2021, a child who sees, hears or experiences the effects of domestic abuse is a victim in their own right. If abuse is disclosed, consider the 16-year-old son and follow child safeguarding procedures."
    },
    {
     "h": "The clinical problem still matters",
     "t": "A 58-year-old woman with abdominal pain needs a proper history and examination via the interpreter. If symptoms are persistent (bloating, early satiety, pelvic or abdominal pain, urinary frequency), NICE NG12 (updated April 2026) recommends CA125, with ultrasound if ≥31 IU/mL at age 50–59. Low mood: assess using NICE NG222 (depression in adults, 2022, updated December 2025)."
    },
    {
     "h": "Emergency exception",
     "t": "Brief triage for immediate danger through a family member is acceptable when no alternative exists; the full consultation should not continue that way."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, it’s Dr Lee from the surgery. I’m calling for Mrs Fatima Khedira — who am I speaking to?",
    "dom": "gs",
    "why": "Identifies who is on the call before sharing anything"
   },
   {
    "who": "pt",
    "text": "(Son) I’m her son. She doesn’t speak much English, so I’ll translate. She’s got tummy pain and she’s been a bit down. Just tell me what you need and I’ll ask her — we do it all the time."
   },
   {
    "who": "dr",
    "text": "Thank you — it’s kind of you to help your mum, I can tell you look after her. Before we go further, could I just say hello to her myself?",
    "dom": "rto",
    "why": "Thanks the son and centres the patient"
   },
   {
    "who": "pt",
    "text": "(Mrs Khedira, quietly) Hello… doctor."
   },
   {
    "who": "dr",
    "text": "Hello, Mrs Khedira. (Slowly) I would like to get an interpreter for you. An interpreter — someone who speaks your language. Is that okay?",
    "dom": "rto",
    "why": "Seeks her own agreement in simple language"
   },
   {
    "who": "pt",
    "text": "(Mrs Khedira) Yes… yes. Interpreter. Okay."
   },
   {
    "phase": "Redirecting kindly",
    "clock": "1–3 min",
    "who": "dr",
    "text": "(To the son) Thank you. For medical conversations, we always use a trained interpreter rather than family — even a really good translator like you. It’s partly so nothing gets lost, and partly so your mum can talk about anything in private, the same as any other patient. It’s not about trusting you — it’s how we look after everyone.",
    "dom": "tasks",
    "why": "Declines family interpreting without implying mistrust"
   },
   {
    "who": "pt",
    "text": "(Son) But it’s easier this way. It’s just tummy pain."
   },
   {
    "who": "dr",
    "text": "I understand it feels easier, and I don’t want to make things harder for you. But I need to hear from your mum properly to get her care right. Can I just check one thing now so I know how quickly she needs to be seen — is the pain very severe right now, or is she being sick, bleeding, or feverish?",
    "dom": "tasks",
    "why": "Brief emergency triage only, then stops using the son"
   },
   {
    "who": "pt",
    "text": "(Son, after asking her) No, nothing like that. It comes and goes. She’s just been tired and sad. And she’s got some bruises — she says she keeps bumping into things."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That’s helpful for me to know — I’ll talk it through with her when we have the interpreter.",
    "dom": "tasks",
    "why": "Notes the bruising cue without exploring it through the child"
   },
   {
    "phase": "Arranging the right consultation",
    "clock": "3–6 min",
    "who": "dr",
    "text": "Here’s what I’d like to do. I’ll book your mum an appointment with a professional interpreter, face to face here at the surgery, so I can also examine her tummy. Which language would she like the interpreter to speak?",
    "dom": "tasks",
    "why": "Arranges a professional interpreter and a face-to-face assessment"
   },
   {
    "who": "pt",
    "text": "(Son) Her own language — I can tell the receptionist which one."
   },
   {
    "who": "dr",
    "text": "Perfect. And I’ll make sure the appointment has time for her to talk to me on her own, with just the interpreter. We do that for everyone — it gives patients privacy. Could you let her know that’s part of it?",
    "dom": "tasks",
    "why": "Plans time alone as routine practice, a safeguarding step"
   },
   {
    "who": "pt",
    "text": "(Son) She won’t mind. She’s nodding."
   },
   {
    "who": "dr",
    "text": "Thank you. Is there a number where I can reach your mum directly, in case we need to change the time?",
    "dom": "gs",
    "why": "Secures a direct and confidential contact route for the patient"
   },
   {
    "who": "pt",
    "text": "(Son) I’ll give the receptionist her number."
   },
   {
    "phase": "Supporting the son",
    "clock": "6–8 min",
    "who": "dr",
    "text": "You’re clearly doing a lot to help your mum. How are you finding things yourself? You’re welcome to talk to us any time too.",
    "dom": "rto",
    "why": "Acknowledges the child’s role and offers him support"
   },
   {
    "who": "pt",
    "text": "(Son) I’m okay. I just worry about her."
   },
   {
    "who": "dr",
    "text": "That’s natural. You’ve done the right thing ringing. The best help now is making sure she gets the interpreter appointment.",
    "dom": "rto",
    "why": "Validates his concern and gives him a clear role"
   },
   {
    "who": "pt",
    "text": "(Son) Okay. When will it be?"
   },
   {
    "phase": "Plan and safety-net",
    "clock": "8–11 min",
    "who": "dr",
    "text": "I’ll ask reception to book it within the next few days, with the interpreter already arranged. Until then — if her pain becomes severe or constant, she’s being sick, has a fever, or any bleeding, call us the same day or 111, and in an emergency 999. Interpreters are available on those lines too, so she can ask for one.",
    "dom": "gs",
    "why": "Specific safety-net and access to interpreting in urgent care"
   },
   {
    "who": "pt",
    "text": "(Son) Okay, I’ll tell her."
   },
   {
    "who": "dr",
    "text": "Could you tell me back what happens next, so I know I’ve been clear?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "(Son) You’ll book her in with an interpreter in the next few days, face to face. If the pain gets really bad or she’s sick, we ring you or 111."
   },
   {
    "phase": "Close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Exactly. (Slowly) Mrs Khedira — interpreter appointment soon. Thank you. Goodbye.",
    "dom": "rto",
    "why": "Closes directly with the patient, respecting her dignity"
   },
   {
    "who": "pt",
    "text": "(Mrs Khedira) Thank you, doctor."
   },
   {
    "who": "dr",
    "text": "(Documentation) Record: language need and interpreter flag on the record; family interpreting declined; bruising and low mood noted for exploration alone with a professional interpreter; direct contact number obtained.",
    "dom": "gs",
    "why": "Documents the need and flags it so future bookings include an interpreter"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Identified who was speaking; greeted the patient directly; sought her own agreement to an interpreter.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Family dynamics, the son’s role and burden, her access to a private phone.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Noted low mood and “bumping into things” bruising as possible abuse cues, without exploring them through the child.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Son’s idea (easier this way) and expectation (quick answers); plans to elicit the patient’s own ICE via the interpreter.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Face-to-face appointment for abdominal examination; considers NICE NG12 (updated April 2026) ovarian symptom questions and CA125 if persistent.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Abdominal causes, depression, and domestic abuse as a unifying explanation.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Brief emergency triage (severe pain, vomiting, bleeding, fever) is the only use of the son.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Undiagnosed abdominal pain and low mood with safeguarding cues; needs a professional-interpreter consultation.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Professional interpreter booked; time alone built in; direct contact number; domestic abuse pathways ready (NICE PH50).",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Considers the son’s welfare and child safeguarding if abuse is disclosed; flags language need on the record.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Appointment within days; red-flag symptoms named; interpreters available via 111 and 999.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Ethnicity, culture & diversity",
    "Health disadvantage & vulnerabilities",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Fatima Khedira",
    "age": "58 years · female",
    "pmh": [
     "Nil significant recorded"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Booked by family member: “tummy pain and feeling down”. Interpreter not requested.",
    "reason": "Telephone appointment. Son (16) says he will translate."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Who is on the line",
     "d": "Identify the speaker; greet the patient directly and seek her agreement to an interpreter."
    },
    {
     "t": "1–3",
     "h": "Redirect kindly",
     "d": "Thank the son; explain why a professional interpreter is used; emergency triage only."
    },
    {
     "t": "3–6",
     "h": "Arrange properly",
     "d": "Face-to-face with a professional interpreter; time alone built in; her own phone number."
    },
    {
     "t": "6–9",
     "h": "Support the son",
     "d": "Acknowledge his role and worry; give him a clear, limited job."
    },
    {
     "t": "9–12",
     "h": "Safety-net and document",
     "d": "Red-flag symptoms; interpreters on 111/999; teach-back; flag language need on the record."
    }
   ],
   "wordPics": {
    "fail": "Carries on the whole consultation through the son; asks about the bruises or home life through him; or refuses bluntly and ends the call without a plan.",
    "pass": "Declines family interpreting politely, arranges a professional interpreter, does a brief emergency screen, and gives a safety-net.",
    "exc": "All of the above, plus: greets the patient directly and seeks her agreement; notes the bruising without exploring it through the child; builds time alone into the booking as routine; gets her own contact number; supports the son; flags the language need on the record."
   },
   "avoid": [
    {
     "dont": "“Can you ask your mum where the bruises came from?”",
     "instead": "“Thank you — I’ll talk that through with her when the interpreter is with us.”",
     "why": "Exploring possible abuse through a child can put both at risk and silences her."
    },
    {
     "dont": "“I can’t speak to you, I need an interpreter. Goodbye.”",
     "instead": "“Thank you for helping. For medical conversations we always use a trained interpreter — here’s what happens next.”",
     "why": "A blunt refusal alienates the family and leaves no plan or safety-net."
    },
    {
     "dont": "“Why doesn’t your mum speak English?”",
     "instead": "“Which language would she like the interpreter to speak?”",
     "why": "Judgement about language damages trust and cuts against equal access (Equality Act 2010)."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Language and access",
     "t": "Limited English is linked to poorer access and outcomes. Adult children often become the family’s go-between, which can hide the parent’s needs."
    },
    {
     "h": "The young carer role",
     "t": "A 16-year-old regularly interpreting for a parent may be a young carer; the local young carers’ service can support him."
    }
   ],
   "legal": [
    {
     "h": "Equality Act 2010",
     "t": "Race (including national origin) is a protected characteristic. Services must not disadvantage patients because of language; professional interpreting supports equal access."
    },
    {
     "h": "Domestic Abuse Act 2021",
     "t": "Defines domestic abuse and recognises children affected by it as victims in their own right."
    },
    {
     "h": "Confidentiality",
     "t": "Her information is hers. Share it with family only with her consent (GMC, Confidentiality, 2017)."
    }
   ],
   "professional": [
    {
     "h": "Communication and consent",
     "t": "GMC Good medical practice (2024) and GMC decision-making and consent guidance (2020) expect doctors to make arrangements so patients can understand and take part, including interpreters."
    },
    {
     "h": "Safeguarding practice",
     "t": "Ask about abuse only when she is alone and safe; document carefully; know the local IDVA and MARAC routes (NICE PH50)."
    }
   ],
   "community": [
    {
     "h": "Support services",
     "t": "National Domestic Abuse Helpline (Refuge) and local specialist services, many with multilingual support; young carers’ services for her son."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Severe or constant abdominal pain, vomiting, bleeding or fever — same-day assessment",
     "Unexplained bruising with low mood — consider domestic abuse, explore alone with a professional interpreter",
     "A relative who insists on speaking for the patient — possible control; protect time alone"
    ],
    "psychosocial": [
     "Language barrier and reliance on her son",
     "Possible abuse or relationship distress at home",
     "The son’s burden as a young interpreter"
    ],
    "ice": [
     "Son’s idea: it’s easier if he translates",
     "Hidden concern: something at home she cannot say in front of her child",
     "Expectation: a quick answer through the son — needed: a private consultation with a professional interpreter"
    ]
   },
   "diagnosis": "“I can’t yet say what’s causing your mum’s pain or low mood. To find out properly, I need to talk with her in her own language and examine her.”",
   "diagnosisLay": "“It’s like a game of whispers — even the best translator loses a little. A trained interpreter makes sure every word from your mum reaches me, and every word from me reaches her.”",
   "management": {
    "reflectIce": "“You want to make this easy for your mum, and that’s really kind. The easiest thing for her in the long run is a proper appointment where she can talk freely.”",
    "psychosocial": "Protect her voice and privacy; support the son without making him responsible; flag language need so every future appointment has an interpreter.",
    "sharedPlan": [
     "Face-to-face appointment within days with a professional interpreter; abdominal examination",
     "Time alone with the patient as routine; ask about home safety, mood and bruising then",
     "Domestic abuse pathways ready (NICE PH50): specialist services, IDVA, MARAC; child safeguarding if disclosed"
    ],
    "safetyNet": [
     "Severe pain, vomiting, fever or bleeding — same-day, 111 or 999; interpreters available",
     "Direct contact number for the patient; interpreter flag on the record"
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
    "ic": "🗺️",
    "t": "Abdominal pain",
    "s": "Visual algorithm · red flags",
    "href": "algorithms/abdominal-pain.html"
   },
   {
    "ic": "🗺️",
    "t": "Bruising",
    "s": "Visual algorithm · unexplained bruising",
    "href": "algorithms/bruising.html"
   },
   {
    "ic": "💠",
    "t": "Depression protocol",
    "s": "Assessment · NICE NG222",
    "href": "management/depression.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is about who holds the conversation. It is failed by carrying on through the son, by exploring sensitive cues through him, or by refusing so bluntly that the family disengages.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Taking the full history through the 16-year-old son.",
     "why": "Family and child interpreting breaches confidentiality and blocks disclosure; NHS England guidance expects professional interpreters.",
     "fix": "Brief emergency triage only, then arrange a professional interpreter."
    },
    {
     "dom": "tasks",
     "fail": "Asking the son about the bruises or problems at home.",
     "why": "If abuse is present, questioning through a family member can raise the risk to both of them.",
     "fix": "Note it, say you will discuss it with her, and plan time alone with the interpreter (NICE PH50)."
    },
    {
     "dom": "rto",
     "fail": "Implying the son is not trusted.",
     "why": "It offends the family and reduces the chance she attends.",
     "fix": "“It’s how we look after every patient — it’s nothing to do with trusting you.”"
    },
    {
     "dom": "rto",
     "fail": "Never speaking to the patient herself.",
     "why": "She is the patient. Even a simple greeting and consent in plain English respects her dignity.",
     "fix": "“Hello, Mrs Khedira — an interpreter, someone who speaks your language. Is that okay?”"
    },
    {
     "dom": "gs",
     "fail": "Ending without a date, a direct contact number, or a safety-net.",
     "why": "A deferred consultation without a plan is a safety risk.",
     "fix": "Appointment within days, her own phone number, red-flag symptoms, and interpreters available on 111/999."
    },
    {
     "dom": "tasks",
     "fail": "Forgetting the abdominal pain in a 58-year-old woman.",
     "why": "The safeguarding focus should not crowd out a clinical assessment.",
     "fix": "Book face to face for examination; ask about persistent bloating and satiety (NICE NG12 (updated April 2026))."
    },
    {
     "dom": "gs",
     "fail": "Not recording the language need.",
     "why": "The next appointment will repeat the same problem.",
     "fix": "Add an interpreter flag and preferred language to the record."
    }
   ]
  }
 },
 "medication-error-candour": {
  "stem": {
   "name": "Maureen Selby",
   "age": "67-year-old woman",
   "pmh": [
    "Long-term condition treated with oral methotrexate (intended once-weekly dosing)"
   ],
   "meds": [
    "Methotrexate tablets — intended ONCE WEEKLY; most recent issue labelled as a DAILY dose"
   ],
   "allergy": "None recorded",
   "recent": "Prescribing error identified: methotrexate issued with daily instead of weekly directions. Records suggest she has taken it daily for about 6 days. No recent bloods on this issue. No contact from her reporting symptoms.",
   "reason": "Telephone call: you are ringing her to disclose the error and act on the clinical risk today."
  },
  "knowledge": {
   "guideline": "MHRA Drug Safety Update (September 2020) — methotrexate once-weekly · CQC Regulation 20 duty of candour · GMC and NMC professional duty of candour (2015) · NICE NG253 (sepsis)",
   "summary": "Daily instead of weekly methotrexate is a recognised, potentially fatal error. Stop it, get same-day bloods and specialist advice, and disclose it openly with an apology in the same call.",
   "points": [
    {
     "h": "Why daily dosing is dangerous",
     "t": "MHRA Drug Safety Update (September 2020): methotrexate for autoimmune disease is taken once a week, and fatal overdoses continue to be reported from daily dosing. Toxicity includes mucositis, diarrhoea and vomiting, bone-marrow suppression (neutropenic sepsis, bleeding), liver injury, renal impairment and pneumonitis. Symptoms may lag behind blood changes, so feeling well is not reassurance."
    },
    {
     "h": "Same-day clinical action",
     "t": "Stop methotrexate now and remove the remaining supply. Arrange same-day FBC, U&E and LFTs with clinical assessment, and seek urgent specialist advice (acute medical or rheumatology team, using TOXBASE/National Poisons Information Service guidance). Calcium folinate rescue and admission are specialist decisions — doses per BNF and specialist advice."
    },
    {
     "h": "Sepsis risk",
     "t": "Neutropenia after methotrexate overdose can present as fever or simply feeling unwell. Any fever, rigors, sore throat or feeling acutely unwell needs emergency assessment as possible neutropenic sepsis (NICE NG253 for people aged 16 and over)."
    },
    {
     "h": "Statutory duty of candour",
     "t": "CQC Regulation 20 applies to registered providers, including GP practices. For a notifiable safety incident (one that has caused, or might cause, moderate or severe harm or death) the practice must tell the person, give a true account, apologise, explain what enquiries will follow, confirm it in writing and keep a record. CQC expects the notification in person; an urgent phone call is right here, followed by an offer to meet and a written account."
    },
    {
     "h": "Professional duty and apology",
     "t": "GMC and NMC guidance on the professional duty of candour (2015) and GMC Good Medical Practice (2024): be open and honest, apologise, explain the short- and long-term effects, and put matters right. An apology is not an admission of legal liability (Compensation Act 2006, section 2; NHS Resolution “Saying sorry”, 2017)."
    },
    {
     "h": "Learning from the event",
     "t": "Record and report the incident (local reporting and the national Learn from Patient Safety Events service), hold a significant event analysis, check that no other patient has received the same directions, and fix the safeguard. MHRA advice: agree the day of the week with the patient and write it in full on the prescription."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and identity",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Mrs Maureen Selby? It’s Dr Patel from the surgery. Before I go on, could you confirm your date of birth for me, please?",
    "dom": "gs",
    "why": "Confirms identity before disclosing clinical information by phone"
   },
   {
    "who": "pt",
    "text": "Yes, that’s me. Is something wrong?"
   },
   {
    "who": "dr",
    "text": "Thank you. I’m ringing because I need to be honest with you about a mistake we’ve made with your medication, and to sort it out with you straight away. Is now an okay time, and are you somewhere you can talk?",
    "dom": "rto",
    "why": "Signals the purpose clearly and checks it is a safe moment to talk"
   },
   {
    "who": "pt",
    "text": "A mistake? What do you mean? Is it serious? I’ve been taking my tablets like it said…"
   },
   {
    "phase": "Disclosure and apology",
    "clock": "1–3 min",
    "who": "dr",
    "text": "I’m going to be completely straight with you. Your methotrexate should only ever be taken once a week. On your last prescription the instructions were wrong — they said every day — and I understand you’ve been taking it daily for about six days. That was our error, and I’m very sorry.",
    "dom": "tasks",
    "why": "Full, prompt, factual disclosure with a clear apology — the core of the duty of candour"
   },
   {
    "who": "pt",
    "text": "Oh my goodness. I did exactly what the label said. Have I done something stupid?"
   },
   {
    "who": "dr",
    "text": "No — please hear this clearly. You did nothing wrong at all. You followed the label exactly, as anyone would. The mistake was ours, not yours.",
    "dom": "rto",
    "why": "Responds to the self-blame cue immediately and lifts it"
   },
   {
    "who": "pt",
    "text": "But is it dangerous? Am I going to be alright?"
   },
   {
    "who": "dr",
    "text": "It can be serious, which is why I’m ringing today rather than writing. Taken daily, methotrexate can lower your blood counts and affect your mouth, stomach, liver and kidneys. The good news is that we’ve caught it, and there are checks and a treatment that can protect you. First, though, can I ask how you are feeling?",
    "dom": "tasks",
    "why": "Honest about risk without catastrophising, then moves to assess toxicity"
   },
   {
    "phase": "Assessing toxicity",
    "clock": "3–5 min",
    "who": "dr",
    "text": "Have you had any mouth ulcers or a sore mouth or throat, any sickness or diarrhoea, a temperature or shivers, any unusual bruising or bleeding, or a cough or breathlessness?",
    "dom": "tasks",
    "why": "Screens systematically for mucositis, GI toxicity, marrow suppression and pneumonitis"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. I feel quite well, really. That’s why I didn’t think anything was wrong."
   },
   {
    "who": "dr",
    "text": "That’s good to hear. The blood effects can show up before you feel anything, though, so we still need to act today. Do you still have the tablets with you?",
    "dom": "tasks",
    "why": "Explains why feeling well does not remove the need to act"
   },
   {
    "who": "pt",
    "text": "Yes, the box is here in the kitchen."
   },
   {
    "who": "dr",
    "text": "Please don’t take any more — stop them from now. Put the box to one side so it can be checked. Are you taking any other medicines at the moment that I should know about?",
    "dom": "tasks",
    "why": "Stops the drug, secures the supply and checks for interacting medicines"
   },
   {
    "who": "pt",
    "text": "Just what’s on my list at the surgery."
   },
   {
    "phase": "Putting it right today",
    "clock": "5–8 min",
    "who": "dr",
    "text": "Here’s what I’d like to happen today. You need blood tests this afternoon to check your blood count, kidneys and liver. I’m also going to speak to the hospital specialist team straight after this call. There’s an antidote-type treatment called folinic acid that they may want to give, and they may prefer to see you at the hospital today to be safe. Can you get there if needed?",
    "dom": "tasks",
    "why": "Same-day bloods and specialist advice; names folinic acid rescue and possible admission"
   },
   {
    "who": "pt",
    "text": "I can get there, yes. Hospital, though? That frightens me."
   },
   {
    "who": "dr",
    "text": "I understand — it sounds alarming. Going in doesn’t mean something bad has happened; it means we’re being careful because the mistake was ours and we want to catch any effect early. What’s going through your mind right now?",
    "dom": "rto",
    "why": "Acknowledges fear and invites her feelings rather than rushing on"
   },
   {
    "who": "pt",
    "text": "I just trusted you. I’m shaken, and a bit cross, honestly."
   },
   {
    "who": "dr",
    "text": "You have every right to feel cross. You trusted us and we let you down. I’m not going to make excuses — I’m going to make sure you’re safe and keep you informed at every step.",
    "dom": "rto",
    "why": "Accepts her anger without defensiveness and takes responsibility for the practice"
   },
   {
    "phase": "System response",
    "clock": "8–10 min",
    "who": "dr",
    "text": "I also want you to know what happens next on our side. We’re reporting this as a patient-safety incident, we’ll look at exactly how the wrong instructions got through, and we’re checking no one else has been affected. I’ll write to you with what we find and what we change, and I’d like to offer you a meeting in person once you’re safe.",
    "dom": "tasks",
    "why": "Commits to reporting, significant event analysis, checking other patients and written follow-up"
   },
   {
    "who": "pt",
    "text": "I’d want to know it can’t happen to anyone else."
   },
   {
    "who": "dr",
    "text": "That’s exactly what we want too, and I’ll tell you what we’ve changed. In future your prescription will state the day of the week you take it, written in full.",
    "dom": "gs",
    "why": "Links her request to a concrete safeguard"
   },
   {
    "phase": "Safety-net and close",
    "clock": "10–12 min",
    "who": "dr",
    "text": "Until you’re seen, if you get a temperature, shivers or feel suddenly unwell, a sore mouth or throat, bleeding or bruising, or breathlessness — ring 999 or go straight to A&E and tell them you’ve had extra methotrexate. I’ll give you my direct line for anything else.",
    "dom": "gs",
    "why": "Specific toxicity and sepsis red flags with a clear route"
   },
   {
    "who": "pt",
    "text": "All right. I’ll write that down."
   },
   {
    "who": "dr",
    "text": "Could you tell me back what you’re going to do this afternoon, just so I know I’ve explained it well?",
    "dom": "rto",
    "why": "Teach-back to confirm understanding"
   },
   {
    "who": "pt",
    "text": "No more tablets, blood test today, wait for your call about the hospital, and 999 if I get a temperature or bleeding."
   },
   {
    "who": "dr",
    "text": "That’s exactly right. I’ll ring you back within the hour once I’ve spoken to the specialists, and I’ll chase your results myself today. Once more, I’m truly sorry. Is there anything you’d like to ask me?",
    "dom": "gs",
    "why": "Defined follow-up with a timeframe, repeated apology, and space for questions"
   },
   {
    "who": "pt",
    "text": "No. Thank you for telling me straight. I’d rather know."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Confirmed identity, checked it was a good time to talk, and stated the purpose of the call plainly at the outset.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Ability to attend today, practical support, and how she is coping with the shock.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I took it like it said” (self-blame) and “I’m a bit cross” (anger), and responded to each.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Her understanding of the error, her fear of harm, her anger at being let down, and what she wants to happen.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Same-day FBC, U&E and LFTs with clinical assessment; tablets retained for checking.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Screens for mucositis, GI toxicity, marrow suppression, liver or renal injury and pneumonitis; asks about interacting medicines.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Recognises possible neutropenic sepsis and bleeding risk; does not accept “I feel fine” as reassurance.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "States clearly: a prescribing error with around six days of daily methotrexate, potentially serious, currently without symptoms.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Stop the drug now, same-day bloods, urgent specialist advice (folinic acid rescue, possible admission), with her agreement.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Fulfils the duty of candour: apology, true account, incident report, significant event analysis, checks other patients, written follow-up.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named red flags with 999/A&E route, direct contact number, timed call-back, and results chased the same day.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Professional & ethical dilemmas",
    "Urgent & unscheduled care",
    "Older adults"
   ],
   "stem": {
    "name": "Maureen Selby",
    "age": "67 years · female",
    "pmh": [
     "Condition treated with methotrexate (once-weekly regimen intended)"
    ],
    "meds": [
     "Methotrexate — ⚠ last issue labelled DAILY in error"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Prescribing error flagged today: daily instead of weekly directions. Estimated 6 days of daily doses taken. No blood results since the issue.",
    "reason": "Telephone call initiated by you to disclose the error and arrange urgent action."
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Identity and purpose",
     "d": "Confirm who you are speaking to. Say in the first minute that you are calling about a mistake with her medication."
    },
    {
     "t": "1–3",
     "h": "Disclose and apologise",
     "d": "Plain account: weekly drug, labelled daily, about six days taken. “That was our error and I’m sorry.” Lift the self-blame at once."
    },
    {
     "t": "3–5",
     "h": "Assess toxicity",
     "d": "Mouth ulcers, sore throat, vomiting or diarrhoea, fever, bruising or bleeding, breathlessness. Stop the tablets and keep the box."
    },
    {
     "t": "5–10",
     "h": "Act and explain",
     "d": "Same-day bloods, specialist advice, folinic acid or admission if advised. Respond to fear and anger. Explain the incident report and system fix."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "999/A&E red flags, direct line, timed call-back, teach-back, offer to meet and a written account."
    }
   ],
   "wordPics": {
    "fail": "Vague or delayed disclosure (“there may have been a small issue”); no clear apology or a defensive one; accepts that she feels fine and plans routine bloods; no mention of stopping the drug or specialist advice; ignores her self-blame and anger; no red flags or follow-up.",
    "pass": "Discloses the error clearly and apologises; stops methotrexate; arranges same-day bloods and specialist advice; screens for toxicity symptoms; tells her it was not her fault; gives red flags and a way to contact the practice.",
    "exc": "All of the above, plus: confirms identity first; explains risk honestly but calmly; names folinic acid and possible admission as protection, not punishment; welcomes her anger without defending; explains the incident report, significant event analysis and the check on other patients; offers a meeting and written account; uses teach-back and a timed call-back."
   },
   "avoid": [
    {
     "dont": "“There seems to have been a slight mix-up with the pharmacy label.”",
     "instead": "“Your prescription had the wrong instructions — daily instead of weekly. That was our error, and I’m very sorry.”",
     "why": "Minimising and shifting blame breaches the duty of candour and destroys trust."
    },
    {
     "dont": "“You should have known it was a weekly tablet.”",
     "instead": "“You followed the label exactly. This is not your fault in any way.”",
     "why": "Blaming the patient is unprofessional and adds harm to harm."
    },
    {
     "dont": "“As you feel fine, let’s check your bloods next week.”",
     "instead": "“The blood effects can come before any symptoms, so I want tests and specialist advice today.”",
     "why": "Delay on the grounds of feeling well is a clinical-management fail in a potentially fatal overdose."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Trust and relationship",
     "t": "An error by the people she relies on can shake a long-term patient’s confidence in all her care. Honest disclosure, continuity and prompt follow-up help rebuild it."
    },
    {
     "h": "Practical barriers",
     "t": "Same-day bloods or a hospital visit need transport and support. Ask what she needs to get there rather than assuming."
    }
   ],
   "legal": [
    {
     "h": "Statutory duty of candour",
     "t": "CQC Regulation 20 (Health and Social Care Act 2008 (Regulated Activities) Regulations 2014): for a notifiable safety incident the practice must notify the person, give a true account, apologise, set out further enquiries, confirm it in writing and keep records."
    },
    {
     "h": "Apology and liability",
     "t": "An apology is not an admission of negligence (Compensation Act 2006, section 2). She may raise a complaint or claim; tell her how to do so and document the conversation accurately."
    }
   ],
   "professional": [
    {
     "h": "GMC standards",
     "t": "GMC Good Medical Practice (2024) and the GMC and NMC guidance on the professional duty of candour (2015): be open, apologise, explain, and act to put matters right. Do not delay disclosure while an investigation happens."
    },
    {
     "h": "Learning and reporting",
     "t": "Report through local systems and the Learn from Patient Safety Events service, hold a significant event analysis, search for other affected patients, and apply MHRA advice (September 2020) to state the weekly day in full on prescriptions."
    }
   ],
   "community": [
    {
     "h": "Community pharmacy",
     "t": "Involve the dispensing pharmacy in the review, and use pharmacist counselling and the methotrexate patient card or booklet to reinforce weekly dosing."
    },
    {
     "h": "Independent support",
     "t": "Signpost the practice complaints process and independent patient-safety charities or advocacy if she wants support outside the practice."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Fever, rigors, sore throat or feeling suddenly unwell — possible neutropenic sepsis",
     "Mouth ulcers, vomiting or diarrhoea — mucositis and GI toxicity",
     "Bruising, bleeding, new cough or breathlessness — marrow suppression or pneumonitis"
    ],
    "psychosocial": [
     "How she can get to same-day bloods or hospital today",
     "Her emotional response: shock, fear, anger, self-blame",
     "Any interacting medicines on her list that raise toxicity risk"
    ],
    "ice": [
     "Idea: “I took it like it said — have I done something wrong?”",
     "Concern: “Is it serious? Am I going to be alright?” and anger at being let down",
     "Expectation: an honest explanation, to know she is safe, and that it won’t happen again"
    ]
   },
   "diagnosis": "A prescribing error has led to about six days of daily methotrexate, which risks serious toxicity even without symptoms: “This was our mistake. It can be serious, so we act today — stop the tablets, bloods this afternoon, and specialist advice.”",
   "diagnosisLay": "“Methotrexate is a strong medicine that the body needs a full week to clear. Taking it every day lets it build up, a bit like filling a bath faster than it can drain. We need to check how full the bath is today and, if needed, give a treatment that protects you.”",
   "management": {
    "reflectIce": "“You said you took it just as the label said — you did, and that’s exactly why this is our fault, not yours. And you’re right to be cross; you trusted us.”",
    "psychosocial": "Make the same-day plan workable for her (transport, who can help), give her one direct contact, and promise a timed call-back so she is not left waiting in fear.",
    "sharedPlan": [
     "Stop methotrexate now; keep the box for checking",
     "Same-day FBC, U&E, LFTs; urgent specialist advice on folinic acid rescue and admission",
     "Incident report, significant event analysis, check other patients; written account and offer to meet"
    ],
    "safetyNet": [
     "Fever, sore mouth or throat, bleeding, bruising, breathlessness or feeling unwell — 999 or A&E, mentioning methotrexate",
     "Call-back within the hour and results chased the same day"
    ]
   }
  },
  "links": [
   {
    "ic": "💠",
    "t": "Rheumatoid arthritis protocol",
    "s": "Methotrexate monitoring · shared care",
    "href": "management/rheumatoid-arthritis.html"
   },
   {
    "ic": "💊",
    "t": "Prescribing Guide",
    "s": "High-risk drugs · methotrexate",
    "href": "prescribing-guide.html"
   },
   {
    "ic": "🚨",
    "t": "Neutropenic sepsis protocol",
    "s": "Emergency recognition · NICE NG253",
    "href": "management/neutropenic-sepsis.html"
   },
   {
    "ic": "📞",
    "t": "Consultation types",
    "s": "Telephone consulting skills",
    "href": "consultation-types.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests two things at once: honest disclosure and urgent clinical action. Candidates fail by doing one well and the other badly — a warm apology with no same-day bloods, or a sharp toxicity plan delivered defensively.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Disclosing the error but then arranging bloods “later this week” because she feels well.",
     "why": "Methotrexate toxicity can develop before symptoms. “Management plan not in line with current UK best practice” — delay in a potentially fatal overdose is unsafe.",
     "fix": "Stop the drug, same-day bloods, and specialist advice in the same call. Say why: “The blood effects can come before you feel anything.”"
    },
    {
     "dom": "rto",
     "fail": "A defensive or passive account — “the system produced the wrong label”, “the pharmacy should have noticed”.",
     "why": "Examiners read deflection as failure to take responsibility. The duty of candour needs a true account and a sincere apology from the practice.",
     "fix": "“That was our error, and I’m sorry.” Then explain what you are doing about it."
    },
    {
     "dom": "rto",
     "fail": "Missing the self-blame cue: she says “I took it like it said” and the doctor moves straight to blood tests.",
     "why": "“Does not identify or respond to the patient’s cues.” Unresolved self-blame colours the rest of the call.",
     "fix": "Pause and say explicitly: “You did nothing wrong. You followed the label exactly.”"
    },
    {
     "dom": "tasks",
     "fail": "No toxicity screen — the doctor never asks about mouth ulcers, fever, bleeding or breathlessness.",
     "why": "Without it there is no basis for deciding urgency, and red flags already present would be missed.",
     "fix": "Ask the five: sore mouth or throat, vomiting or diarrhoea, fever, bruising or bleeding, breathlessness."
    },
    {
     "dom": "gs",
     "fail": "Jargon such as “myelosuppression”, “mucositis” and “folinic acid rescue” without explanation.",
     "why": "“Language not easily understood by the patient.” A frightened patient on the phone cannot see your face to read reassurance.",
     "fix": "“It can lower your blood counts, which fight infection and stop bleeding. There’s a treatment that protects against that.”"
    },
    {
     "dom": "gs",
     "fail": "Ending with “we’ll be in touch” — no named red flags, no direct line, no timeframe.",
     "why": "Non-specific safety-netting and follow-up are standard failing feedback, and here they are clinically dangerous.",
     "fix": "Named red flags with a 999/A&E route, a direct number, and “I’ll ring you back within the hour”."
    },
    {
     "dom": "tasks",
     "fail": "Never mentioning what the practice will do to stop it happening again.",
     "why": "Candour includes the learning. Patients consistently ask whether it could happen to someone else.",
     "fix": "Name the incident report, the significant event analysis, the check on other patients, and a written follow-up."
    }
   ]
  }
 },
 "optic-neuritis-ms": {
  "stem": {
   "name": "Robyn Carlisle",
   "age": "28-year-old woman",
   "pmh": [
    "Migraine (self-reported)"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "None recorded",
   "recent": "Booked video consultation: 3 days of blurred left eye with ache. No previous neurological consultations recorded.",
   "reason": "“My eye’s gone blurry and aches — probably a migraine. Could I have some eye drops?”"
  },
  "knowledge": {
   "guideline": "NICE NG220 (multiple sclerosis in adults, 2022, updated August 2026) · DVLA Assessing fitness to drive · Equality Act 2010",
   "summary": "Subacute loss of vision in one eye with pain on eye movement and faded colours is optic neuritis until proven otherwise. It needs urgent ophthalmology assessment; a past episode of limb numbness raises the possibility of MS.",
   "points": [
    {
     "h": "Recognise optic neuritis",
     "t": "Blurred or dim vision in one eye developing over hours to days, ache worse on eye movement, and reduced colour vision (reds look washed out), often with a relative afferent pupillary defect. Migraine aura is usually positive (zig-zags, flashing), lasts under an hour and is followed by headache."
    },
    {
     "h": "Urgent referral",
     "t": "Refer urgently to ophthalmology (eye casualty the same day or next day by local pathway) to confirm the diagnosis — acuity, colour vision, fields, pupils and fundoscopy — and exclude other causes of monocular visual loss."
    },
    {
     "h": "Link with MS",
     "t": "Optic neuritis is a common first presentation of MS. Ask about earlier transient neurological symptoms (numbness, tingling, weakness, balance or bladder problems). NICE NG220: refer people with ophthalmologist-confirmed isolated optic neuritis to a consultant neurologist; MS is diagnosed by the neurologist, not on MRI alone."
    },
    {
     "h": "Treatment and outlook",
     "t": "Vision usually improves over weeks. High-dose steroids can speed recovery but do not change the final visual outcome — a specialist decision. NICE NG220 relapse treatment for diagnosed MS is oral methylprednisolone 0.5 g daily for 5 days, specialist-led."
    },
    {
     "h": "Talking about MS",
     "t": "Be honest that MS is one possibility being investigated, without labelling it early. Disease-modifying treatments have changed the outlook; the course is highly variable and many people keep working and living independently. NICE NG220 recommends information and support at diagnosis, including a single point of contact with the MS team."
    },
    {
     "h": "Driving and work",
     "t": "DVLA: drivers must be able to read a number plate at 20 metres and meet the field standard. Advise her not to drive if her vision falls short. Under the Equality Act 2010, MS counts as a disability from the point of diagnosis."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hi Robyn, I’m Dr Morgan. Can you hear and see me okay? Tell me what’s been happening with your eye.",
    "dom": "rto",
    "why": "Checks the video link and opens with a patient-led question"
   },
   {
    "who": "pt",
    "text": "My left eye’s gone blurry over the last few days and it aches, especially when I move it. Colours look a bit faded. I get migraines, so I’m guessing it’s that, or screen strain. Could you just sort some drops?"
   },
   {
    "who": "dr",
    "text": "I can hear you’d like this to be simple, and I’ll be honest with you about what I think. Can I ask a few questions first so I get it right?",
    "dom": "gs",
    "why": "Acknowledges her request and signposts the structure"
   },
   {
    "who": "pt",
    "text": "Sure."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "How does this compare with your usual migraines — any zig-zags or flashing lights, and any headache with it?",
    "dom": "tasks",
    "why": "Tests the migraine hypothesis directly"
   },
   {
    "who": "pt",
    "text": "No, it’s not like those. No flashing, no headache. It’s just dim and blurry, and it hasn’t gone away."
   },
   {
    "who": "dr",
    "text": "Let’s try something. Cover your right eye and look at something red in the room, then swap eyes. Does the red look the same in each eye?",
    "dom": "tasks",
    "why": "Remote red-desaturation test adapted for video"
   },
   {
    "who": "pt",
    "text": "No — with the left eye it looks pinkish, washed out. That’s weird."
   },
   {
    "who": "dr",
    "text": "Thank you. Is the right eye completely normal? Any double vision, weakness, numbness, problems with balance or your bladder, now or in the past?",
    "dom": "tasks",
    "why": "Screens for other and previous neurological symptoms"
   },
   {
    "who": "pt",
    "text": "Right eye’s fine. Actually… a few months ago I had tingling and numbness in one leg for a while. It went away, so I ignored it."
   },
   {
    "who": "dr",
    "text": "I’m really glad you mentioned that. It’s something I want to take seriously alongside your eye.",
    "dom": "rto",
    "why": "Picks up and values the prior symptom cue"
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–7 min",
    "who": "dr",
    "text": "You said you were sure it was nothing serious. Has anything else crossed your mind about what this might be?",
    "dom": "rto",
    "why": "Gently opens the door to the hidden concern"
   },
   {
    "who": "pt",
    "text": "…Someone close to me has MS. When the leg thing happened I pushed it away. Now my eye… I’ve been telling myself it’s migraine because I don’t want it to be that. I keep picturing ending up in a wheelchair and losing my job."
   },
   {
    "who": "dr",
    "text": "Thank you for trusting me with that. It makes complete sense that you’d want it to be migraine. Let’s go through this together, honestly.",
    "dom": "rto",
    "why": "Validates the fear and the avoidance without judgement"
   },
   {
    "phase": "Explanation",
    "clock": "7–9 min",
    "who": "dr",
    "text": "What you describe — blurry vision in one eye over a few days, an ache when you move it, and colours looking washed out — fits inflammation of the nerve at the back of the eye, called optic neuritis, rather than migraine. Drops won’t treat it, and it needs to be checked properly and urgently.",
    "dom": "tasks",
    "why": "Names the likely diagnosis and declines the inappropriate request"
   },
   {
    "who": "pt",
    "text": "Is that MS, then?"
   },
   {
    "who": "dr",
    "text": "Optic neuritis can be the first sign of MS, and with the leg episode that’s one of the possibilities we need to look into. But I’m not telling you that you have MS — it can happen on its own. An eye specialist confirms the diagnosis, and a neurologist and a scan will tell us more.",
    "dom": "tasks",
    "why": "Honest about MS without premature labelling"
   },
   {
    "who": "pt",
    "text": "Okay. That’s scary but… I think I knew."
   },
   {
    "who": "dr",
    "text": "And the picture in your head of MS is out of date. It varies hugely, and treatments now can reduce relapses and slow it down. Many people keep working and living the lives they want. If it were MS, finding it early is what gives the best outcome.",
    "dom": "rto",
    "why": "Balanced, up-to-date information addressing the wheelchair and job fears"
   },
   {
    "phase": "Shared management",
    "clock": "9–11 min",
    "who": "dr",
    "text": "Here’s the plan. I’ll arrange for you to be seen urgently at the eye unit — today or tomorrow — to test your vision, colours, pupils and the back of the eye. If it’s confirmed, you’ll be referred to a neurologist, who will arrange an MRI scan. Vision usually improves over weeks. Does that feel manageable?",
    "dom": "tasks",
    "why": "Urgent ophthalmology, then neurology and MRI per NICE NG220"
   },
   {
    "who": "pt",
    "text": "Yes. What about work and driving?"
   },
   {
    "who": "dr",
    "text": "If your left eye is too blurry to read a number plate at twenty metres with both eyes open, please don’t drive until it’s checked. For work, I can give you a fit note if you need time off for appointments or your vision affects your job.",
    "dom": "gs",
    "why": "Practical driving and work advice"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If your vision gets much worse quickly, the other eye is affected, or you develop weakness, numbness, balance or bladder problems, contact us or the eye unit the same day — and 999 for sudden weakness or trouble speaking. I’ll call you after your eye appointment to go through the results.",
    "dom": "gs",
    "why": "Specific safety-net and planned follow-up"
   },
   {
    "who": "dr",
    "text": "Just so I know it made sense — how would you explain the plan to someone at home?",
    "dom": "rto",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "It’s probably inflammation of the eye nerve, not migraine. Eye unit urgently, then a neurologist and a scan. MS is possible but not certain. And no driving if I can’t see properly."
   },
   {
    "who": "dr",
    "text": "Exactly. You were brave to say what you were really worried about. We’ll take this a step at a time together.",
    "dom": "rto",
    "why": "Closes with support and continuity"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let her describe the eye and her own explanation first.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Work, driving, and her experience of someone close with MS.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “I’m sure it’s nothing serious” and the leg-numbness aside, and explored both.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (migraine or eye strain), concern (MS, wheelchair, losing her job), expectation (drops and reassurance).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Remote red-desaturation check; urgent ophthalmology for acuity, colour, fields, pupils and fundoscopy; neurology and MRI via the specialist.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Optic neuritis versus migraine aura, other causes of monocular visual loss; possible prior demyelinating event.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asked about the other eye, new neurology and bladder symptoms; knows rapid or bilateral loss needs same-day action.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Probable optic neuritis, with MS a possibility to be investigated — stated honestly, not as a label.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Urgent ophthalmology, then consultant neurologist per NICE NG220; no drops; steroids a specialist decision.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Migraine history considered but not allowed to explain the picture; driving and work addressed.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Named same-day and 999 symptoms; call after the eye appointment to review results.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "New & undifferentiated presentations",
    "Long-term conditions & cancer",
    "Urgent & unscheduled care"
   ],
   "stem": {
    "name": "Robyn Carlisle",
    "age": "28 years · female",
    "pmh": [
     "Migraine (self-reported)"
    ],
    "meds": [
     "No regular medication recorded"
    ],
    "allergy": "None recorded",
    "recent": "⚠ Video booking: left eye blurred for 3 days, aches on movement. Patient requests eye drops.",
    "reason": "“It’s probably just a migraine — can you sort me some drops?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open",
     "d": "Check the video link. Let her describe it and give her migraine theory."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Compare with her migraines, red-desaturation test by video, other eye, prior neurological symptoms — the leg numbness surfaces here."
    },
    {
     "t": "5–7",
     "h": "Surface the fear",
     "d": "“Has anything else crossed your mind?” Someone close has MS; fear of a wheelchair and losing work."
    },
    {
     "t": "7–10",
     "h": "Explain and plan",
     "d": "Optic neuritis, not migraine. MS is possible, not certain. Urgent eye unit, then neurologist and MRI. Balanced MS information."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Driving standard, fit note, same-day and 999 symptoms, planned call after the eye appointment, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Accepts migraine or eye strain and prescribes drops; never asks about previous neurological symptoms; either announces “you probably have MS” or dismisses the possibility; no urgent referral or safety-net.",
    "pass": "Recognises the optic neuritis features; arranges urgent ophthalmology; asks about previous neurological symptoms; mentions that further tests will look for causes including MS; gives a safety-net.",
    "exc": "All of the above, plus: tests the migraine idea with her rather than dismissing it; adapts a colour test to video; gently surfaces the hidden MS fear and validates the avoidance; gives modern, balanced MS information; covers driving and work; confirms the plan with teach-back and a planned follow-up call."
   },
   "avoid": [
    {
     "dont": "“It sounds like migraine — try some lubricating drops and rest from screens.”",
     "instead": "“This is different from migraine. It needs checking urgently at the eye unit.”",
     "why": "Colluding with the misattribution delays diagnosis of a condition that needs specialist care."
    },
    {
     "dont": "“I think this is MS.”",
     "instead": "“MS is one of the things we need to look into, but I’m not telling you that you have it.”",
     "why": "Premature labelling causes harm; the diagnosis belongs to the neurologist."
    },
    {
     "dont": "“Don’t worry about MS for now.”",
     "instead": "“The picture of MS you’re carrying is out of date — treatments now make a real difference.”",
     "why": "Brushing past the fear leaves her with the worst image and no support."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Experience of someone close",
     "t": "Having watched someone close live with MS shapes her fears and her avoidance. Ask what she has seen, and correct outdated assumptions gently."
    },
    {
     "h": "Work and independence",
     "t": "Fear of losing her job and independence is common at this age. Early, accurate information and specialist support reduce catastrophising."
    }
   ],
   "legal": [
    {
     "h": "DVLA eyesight standard",
     "t": "Drivers must read a number plate at 20 metres and meet the visual-field standard. Advise her not to drive until her vision meets it; if MS is later diagnosed, check DVLA notification requirements."
    },
    {
     "h": "Equality Act 2010",
     "t": "MS is treated as a disability from diagnosis, so employers must consider reasonable adjustments. Access to Work can fund support."
    }
   ],
   "professional": [
    {
     "h": "Honesty with uncertainty",
     "t": "Share the possibility of MS honestly without overstating it (GMC Good Medical Practice 2024: give patients the information they want or need in a way they can understand). Document what was discussed."
    },
    {
     "h": "Remote examination",
     "t": "Video limits examination; a remote colour test adds information but cannot replace acuity, pupils and fundoscopy. Refer rather than wait for a face-to-face GP slot."
    }
   ],
   "community": [
    {
     "h": "Patient organisations",
     "t": "MS Society and MS Trust provide balanced information on diagnosis, treatment and work, suitable to share if MS is confirmed or while she waits."
    },
    {
     "h": "Specialist nurses",
     "t": "If MS is diagnosed, the MS team, often through MS specialist nurses, provides a single point of contact and ongoing support (NICE NG220)."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Rapidly worsening vision or involvement of the other eye — same-day ophthalmology",
     "New weakness, numbness, balance or bladder problems — urgent neurology review",
     "Sudden painless visual loss, jaw claudication or severe headache — other emergencies to exclude"
    ],
    "psychosocial": [
     "Someone close has MS — what she has seen and fears",
     "Work, driving and independence",
     "Why she has avoided the leg symptom and the eye"
    ],
    "ice": [
     "Idea: “It’s migraine or eye strain”",
     "Concern: MS, ending up in a wheelchair, losing her job",
     "Expectation: eye drops and reassurance that it will settle"
    ]
   },
   "diagnosis": "Probable left optic neuritis, with a previous episode of leg numbness raising the possibility of MS: “This looks like inflammation of the nerve at the back of the eye rather than migraine. It needs urgent specialist checks, and they’ll look into causes including MS.”",
   "diagnosisLay": "“The optic nerve is like the cable carrying pictures from your eye to your brain. It has a coating, a bit like insulation on a wire. When that coating becomes inflamed, the picture gets dim and colours fade, and moving the eye tugs on the sore nerve — that’s the ache you feel.”",
   "management": {
    "reflectIce": "“You hoped it was migraine because the alternative frightened you — that’s completely understandable. Let’s find out properly, and I’ll be with you through it.”",
    "psychosocial": "Replace the outdated picture of MS with balanced information, cover driving and work practically, and give her a named contact so the wait for tests feels supported.",
    "sharedPlan": [
     "Urgent ophthalmology (same or next day) to confirm optic neuritis",
     "Referral to a consultant neurologist and MRI via the specialist (NICE NG220)",
     "Steroids a specialist decision; no eye drops"
    ],
    "safetyNet": [
     "Rapid worsening, other eye affected, new neurological or bladder symptoms — same-day contact; 999 for sudden weakness or speech problems",
     "GP call after the eye appointment to discuss results"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Vision loss",
    "s": "Visual algorithm · optic neuritis",
    "href": "algorithms/vision-loss.html"
   },
   {
    "ic": "🗺️",
    "t": "Blurry vision",
    "s": "Visual algorithm · RAPD · referral urgency",
    "href": "algorithms/blurry-vision.html"
   },
   {
    "ic": "🗺️",
    "t": "Paraesthesia",
    "s": "Visual algorithm · numbness and tingling",
    "href": "algorithms/paraesthesia.html"
   },
   {
    "ic": "📋",
    "t": "Migraine",
    "s": "Case walkthrough · aura features",
    "href": "../cases/migraine.html"
   },
   {
    "ic": "🚗",
    "t": "DVLA Fitness to Drive",
    "s": "Eyesight standard",
    "href": "dvla.html"
   }
  ],
  "pitfalls": {
   "intro": "The clinical recognition here is straightforward; the station is failed by accepting the patient’s migraine label, or by handling the MS possibility badly — either blurting it out or avoiding it altogether.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Accepting “migraine or eye strain” and offering drops.",
     "why": "Pain on eye movement and colour loss in one eye over days is not migraine. “Management plan not in line with current UK best practice.”",
     "fix": "Test the migraine idea with her questions, then explain why this is different and refer urgently."
    },
    {
     "dom": "tasks",
     "fail": "Not asking about previous neurological symptoms.",
     "why": "The earlier leg numbness changes the picture; missing it is a data-gathering fail.",
     "fix": "“Have you ever had numbness, tingling, weakness, balance or bladder problems that came and went?”"
    },
    {
     "dom": "rto",
     "fail": "Missing the hidden fear behind “I’m sure it’s nothing serious”.",
     "why": "“Does not identify or respond to the patient’s cues.” The MS fear drives her avoidance.",
     "fix": "“Has anything else crossed your mind about what this might be?”"
    },
    {
     "dom": "rto",
     "fail": "Announcing “this is probably MS”, or refusing to discuss it at all.",
     "why": "Premature labelling and false reassurance both damage trust.",
     "fix": "“MS is one possibility we’ll look into, but I’m not telling you that you have it.”"
    },
    {
     "dom": "gs",
     "fail": "Terms such as “demyelination”, “RAPD” and “dissemination in time and space”.",
     "why": "“Language not easily understood by the patient.”",
     "fix": "Use the insulation-on-a-wire picture and plain descriptions of the tests."
    },
    {
     "dom": "gs",
     "fail": "No advice on driving, or a safety-net limited to “come back if worse”.",
     "why": "Non-specific safety-netting and missed practical advice are common fails.",
     "fix": "Number-plate standard, named same-day and 999 symptoms, and a planned call after the eye appointment."
    }
   ]
  }
 },
 "ovarian-bloating": {
  "stem": {
   "name": "Sandra Whitlock",
   "age": "54-year-old woman",
   "pmh": [
    "Post-menopausal",
    "No previous diagnosis of IBS on record"
   ],
   "meds": [
    "No regular medication",
    "Not on HRT"
   ],
   "allergy": "No known drug allergies",
   "recent": "No recent consultations or blood tests. Family history: aunt had “ovarian trouble” (details unknown).",
   "reason": "Video consultation about bloating."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) — suspected cancer: ovarian · NICE CG61 (2008, updated 2017)",
   "summary": "Eight weeks of persistent bloating, early satiety, pelvic discomfort and urinary frequency in a 54-year-old is the ovarian-cancer symptom pattern, and new IBS-type symptoms over 50 are investigated, not labelled. Examine, check CA-125 against her age threshold, and scan if raised.",
   "points": [
    {
     "h": "The symptom pattern",
     "t": "NICE NG12 (updated April 2026): in women aged 40 and over with persistent or frequent symptoms — particularly more than 12 times a month — of abdominal distension or bloating, early satiety or loss of appetite, pelvic or abdominal pain, or increased urinary urgency or frequency, measure serum CA-125 in primary care."
    },
    {
     "h": "New IBS-type symptoms at 50+",
     "t": "NICE NG12 (updated April 2026): carry out appropriate tests for ovarian cancer in any woman aged 50 or over who has had symptoms within the last 12 months suggestive of IBS, because IBS rarely presents for the first time at this age. NICE CG61 also lists new symptoms after 50 among the features that need further assessment."
    },
    {
     "h": "Age-specific CA-125 thresholds",
     "t": "NICE NG12 (updated April 2026) replaced the single 35 IU/mL cut-off with age bands for urgent direct-access ultrasound of the abdomen and pelvis: 35 IU/mL at 40–49, 31 IU/mL at 50–59, 24 IU/mL at 60–69, 25 IU/mL at 70–79 and 31 IU/mL at 80 and over. For Sandra, at 54, the threshold is 31 IU/mL."
    },
    {
     "h": "Examination can bypass the blood test",
     "t": "NICE NG12 (updated April 2026): refer on a suspected cancer pathway if examination finds ascites and/or a pelvic or abdominal mass that is not obviously uterine fibroids. A video call cannot do this — arrange a face-to-face abdominal and pelvic examination promptly."
    },
    {
     "h": "After the tests",
     "t": "Ultrasound suggesting ovarian cancer → suspected cancer pathway referral. If CA-125 is below threshold, or the scan is normal, assess for other causes (including bowel) and ask her to return if symptoms persist or become more frequent — a normal CA-125 does not close the question on its own."
    },
    {
     "h": "Risk factors and family history",
     "t": "Age, post-menopausal status and a family history of ovarian or breast cancer raise concern but do not decide the work-up. Clarify the aunt’s diagnosis and any other family cancers; significant family history may warrant genetics referral via local pathways."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mrs Whitlock, I’m Dr Patel. Thanks for booking — how can I help today?",
    "dom": "rto",
    "why": "Open start, lets her set out the problem"
   },
   {
    "who": "pt",
    "text": "It’s a bit embarrassing. I’m bloated all the time, my tummy feels swollen, and I’m full after a few mouthfuls. It’s probably my age, or IBS — my friend has that. Could I have something for it, maybe peppermint capsules? I nearly didn’t bother coming."
   },
   {
    "who": "dr",
    "text": "Please don’t apologise — I’m really glad you came. I’d like to ask some questions, explain what I think, and agree what to do together. Is that alright?",
    "dom": "rto",
    "why": "Counters the “wasting time” worry at once and sets the agenda"
   },
   {
    "who": "pt",
    "text": "Yes, of course."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "How long has the bloating been there, and does it come and go, or is it there most days?",
    "dom": "tasks",
    "why": "Establishes persistence and frequency — the NICE NG12 (updated April 2026) criteria"
   },
   {
    "who": "pt",
    "text": "About eight weeks. It’s pretty much there all the time now, not like a bit of wind that goes."
   },
   {
    "who": "dr",
    "text": "Any pain in your tummy or pelvis? And has anything changed with your waterworks?",
    "dom": "tasks",
    "why": "Completes the ovarian symptom cluster"
   },
   {
    "who": "pt",
    "text": "A sort of low ache down below. And I’m going to the loo more often — I thought that was age too."
   },
   {
    "who": "dr",
    "text": "Have you had tummy trouble like this before, or is this new for you?",
    "dom": "tasks",
    "why": "New IBS-type symptoms over 50 are a flag"
   },
   {
    "who": "pt",
    "text": "No, it’s new. I’ve never had a dodgy stomach."
   },
   {
    "who": "dr",
    "text": "Any bleeding from the back passage? Any change in your weight or appetite?",
    "dom": "tasks",
    "why": "Screens bowel red flags and weight loss"
   },
   {
    "who": "pt",
    "text": "No bleeding from the back passage. My appetite’s less because I fill up so fast."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "Does anyone in your family have a history of bowel, ovarian or breast problems?",
    "dom": "tasks",
    "why": "Family history, which opens the door to her fear"
   },
   {
    "who": "pt",
    "text": "My aunt had… ovarian trouble. I don’t really know the details. It wasn’t talked about."
   },
   {
    "who": "dr",
    "text": "I noticed you paused there. Has it crossed your mind that this might be something like what your aunt had?",
    "dom": "rto",
    "why": "Picks up the cue and names the unspoken fear gently"
   },
   {
    "who": "pt",
    "text": "…Yes. I’ve been lying awake about it. I didn’t want to say it out loud in case you thought I was being silly."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That isn’t silly — it’s a sensible worry, and it’s exactly why I want to check properly rather than guess.",
    "dom": "rto",
    "why": "Validates the fear and her decision to come"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me be honest with you. Bloating that’s there most days, feeling full quickly, a pelvic ache and needing the loo more — especially when it starts for the first time after 50 — is a pattern we always check for the ovaries, rather than calling it IBS.",
    "dom": "tasks",
    "why": "Refuses the IBS/age framing and explains why"
   },
   {
    "who": "pt",
    "text": "So you do think it could be cancer?"
   },
   {
    "who": "dr",
    "text": "Most women with these symptoms don’t have cancer. But the pattern fits one we take seriously, so we test promptly rather than wait and see. Both things are true.",
    "dom": "rto",
    "why": "Balances honesty with reassurance, no catastrophising"
   },
   {
    "who": "pt",
    "text": "Okay. I’d rather know."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s the plan. I need to examine your tummy and pelvis in person — could you come in today or tomorrow? You’re welcome to have a chaperone. I’ll also arrange a blood test called CA-125, a urine test, and some routine bloods.",
    "dom": "tasks",
    "why": "Face-to-face examination for mass/ascites plus CA-125"
   },
   {
    "who": "pt",
    "text": "I can come tomorrow morning."
   },
   {
    "who": "dr",
    "text": "Good. For your age, if the CA-125 is 31 or above, I’ll arrange an urgent ultrasound of your tummy and pelvis. If I feel a lump or any fluid when I examine you, I’d refer you straight to the specialist team on the urgent suspected cancer pathway — without waiting for the blood test.",
    "dom": "tasks",
    "why": "NICE NG12 (updated April 2026) age-specific threshold and the direct-referral route"
   },
   {
    "who": "pt",
    "text": "And if it’s all normal?"
   },
   {
    "who": "dr",
    "text": "Then I’d look at other causes, including the bowel, and I’d still want to see you if the symptoms carry on — one normal test doesn’t mean we stop listening. I won’t give you peppermint instead of the tests, but it’s fine alongside if it helps.",
    "dom": "tasks",
    "why": "Plans for a normal result without false reassurance"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If your tummy swells quickly, you can’t keep food down, you notice weight loss or any bleeding, or you get severe pain, contact us the same day. I’ll ring you with the CA-125 result myself, so you’re not left waiting.",
    "dom": "gs",
    "why": "Specific safety-net and ownership of the result"
   },
   {
    "who": "pt",
    "text": "Thank you. I feel better for saying it out loud."
   },
   {
    "who": "dr",
    "text": "You did exactly the right thing. So — examination tomorrow, CA-125 and bloods, a scan if needed, and I’ll call you. What will you tell your family about today?",
    "dom": "gs",
    "why": "Summary and teach-back"
   },
   {
    "who": "pt",
    "text": "That I’m having it checked properly, and it’s not just my age."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; lets her describe the bloating and her own explanation before responding to the peppermint request.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Embarrassment, reluctance to “make a fuss”, and how the symptoms are affecting eating and sleep.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the pause about the aunt’s “ovarian trouble” and the minimising “just my age”.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (age or IBS), the unspoken fear of what her aunt had, and her wish for peppermint and to be sent away.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Face-to-face abdominal and pelvic examination with chaperone offered; CA-125; urinalysis; FBC and routine bloods.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Ovarian cancer versus bowel pathology versus benign causes; recognises new IBS-type symptoms at 50+ are not IBS until proven.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Established persistence and frequency; asked about bleeding, weight and appetite; knows mass or ascites triggers direct referral.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Persistent symptoms needing investigation for ovarian cancer — shared honestly, with the balance that most are not cancer.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "NICE NG12 (updated April 2026): CA-125 with her age threshold (31 IU/mL at 50–59) → urgent direct-access ultrasound; suspected cancer pathway if mass, ascites or suggestive scan.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Clarifies family history of ovarian or breast cancer and considers genetics referral if significant; plans for other causes if tests are normal.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Owns the result; named symptoms for same-day contact; review if symptoms persist despite normal tests.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Long-term conditions & cancer"
   ],
   "stem": {
    "name": "Sandra Whitlock",
    "age": "54 years · female",
    "pmh": [
     "Post-menopausal",
     "Nil else significant"
    ],
    "meds": [
     "No regular medication",
     "Not on HRT"
    ],
    "allergy": "NKDA",
    "recent": "No consultations or bloods in the last year. No previous GI diagnosis on file.",
    "reason": "Video consultation: “Something for bloating, please — I think it’s just my age.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and reassure",
     "d": "She apologises for coming. Tell her she was right to — it unlocks the rest."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Duration, persistence and frequency; early satiety, pelvic pain, urinary symptoms; new versus lifelong; bleeding and weight."
    },
    {
     "t": "5–6",
     "h": "Family history and ICE",
     "d": "The aunt’s “ovarian trouble” is the cue. Name the fear gently and validate it."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Why this isn’t labelled IBS. Examination in person; CA-125 against her age threshold; ultrasound if raised; suspected cancer referral if mass or ascites."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Named symptoms, who will give her the result, and teach-back."
    }
   ],
   "wordPics": {
    "fail": "Accepts “age or IBS”, prescribes peppermint, and closes; never asks about persistence, urinary symptoms or family history; misses the fear behind the pause; or quotes an outdated CA-125 threshold and no examination.",
    "pass": "Recognises the ovarian symptom pattern and that new IBS-type symptoms over 50 need tests; arranges examination and CA-125, with ultrasound if raised; acknowledges her worry; gives a basic safety-net.",
    "exc": "All of the above, plus: surfaces the unspoken fear about her aunt and validates it; states the age-specific threshold correctly; explains the direct route if a mass or ascites is found; balances honesty and reassurance in plain words; owns the result and plans for persistent symptoms despite a normal test."
   },
   "avoid": [
    {
     "dont": "“It’s probably IBS — try peppermint capsules and see how you go.”",
     "instead": "“New tummy symptoms after 50 are something we always check properly, rather than calling them IBS.”",
     "why": "This is the exact presentation NICE NG12 (updated April 2026) is designed to catch."
    },
    {
     "dont": "“I’m sure it’s nothing to worry about.”",
     "instead": "“Most women with these symptoms don’t have cancer — and because the pattern matters, we’ll test promptly.”",
     "why": "False reassurance before tests undermines trust if the result is abnormal."
    },
    {
     "dont": "“Your CA-125 was normal, so you’re fine.”",
     "instead": "“That result is reassuring, but if the symptoms carry on I still want to see you.”",
     "why": "CA-125 can be normal in some ovarian cancers; persistent symptoms need reassessment."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Minimisation and embarrassment",
     "t": "Many women delay with bloating because it feels trivial or embarrassing. Explicitly affirming that she was right to come makes her more likely to return if symptoms persist."
    },
    {
     "h": "Family experience",
     "t": "An aunt’s illness that “wasn’t talked about” shapes fear and silence. Invite her to find out more from relatives if she feels able to."
    }
   ],
   "legal": [
    {
     "h": "Intimate examination",
     "t": "GMC Intimate examinations and chaperones: explain why the examination is needed, get consent, offer a chaperone and record the discussion. A video consultation cannot replace it."
    }
   ],
   "professional": [
    {
     "h": "Remote consulting limits",
     "t": "Where examination could change management, arrange it face to face promptly (GMC Good Medical Practice 2024: good clinical care). Document the plan and the reason."
    },
    {
     "h": "Owning results and referrals",
     "t": "Safety-netting includes a system to ensure the CA-125 and any scan are acted on — a named person to check the result, and tracking of any suspected cancer referral."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Target Ovarian Cancer and Ovarian Cancer Action for symptom information; Macmillan if a cancer is diagnosed; local genetics service if family history is significant."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Persistent or frequent bloating, early satiety, pelvic or abdominal pain, urinary urgency or frequency at 40+ — NICE NG12 (updated April 2026)",
     "New IBS-type symptoms at 50+ — test for ovarian cancer rather than label",
     "Palpable mass or ascites — suspected cancer pathway referral"
    ],
    "psychosocial": [
     "Embarrassment and fear of “wasting the doctor’s time”",
     "Effect on eating and sleep",
     "Family silence about the aunt’s illness"
    ],
    "ice": [
     "Idea: “It’s my age, or IBS like my friend”",
     "Concern: the unspoken fear that it is what her aunt had",
     "Expectation: peppermint capsules and to be sent away"
    ]
   },
   "diagnosis": "Honest and balanced: “This pattern, starting after 50, is one we always check for the ovaries. Most women with it don’t have cancer — but we test promptly rather than wait.”",
   "diagnosisLay": "“Think of it like a smoke alarm going off — usually it’s burnt toast, but you always check the kitchen. The blood test and, if needed, a scan are how we check.”",
   "management": {
    "reflectIce": "“You’ve been worried this might be like your aunt’s illness. That’s a sensible worry, and it’s exactly why I want to check properly.”",
    "psychosocial": "Make it easy to attend: examination at a time she can manage, a chaperone offered, and a named person ringing her with the result.",
    "sharedPlan": [
     "Face-to-face abdominal and pelvic examination promptly; suspected cancer pathway referral if mass or ascites",
     "CA-125 — at 54, 31 IU/mL or above → urgent direct-access abdominal and pelvic ultrasound (NICE NG12 (updated April 2026))",
     "If tests are normal: consider other causes including bowel; review if symptoms persist"
    ],
    "safetyNet": [
     "Rapid swelling, unable to eat, weight loss, bleeding or severe pain → same-day contact",
     "Result call booked; return if symptoms persist or become more frequent despite normal tests"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Bloating pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) ovarian",
    "href": "algorithms/bloating.html"
   },
   {
    "ic": "🗺️",
    "t": "Abdominal mass pathway",
    "s": "Visual algorithm · referral routes",
    "href": "algorithms/abdominal-mass.html"
   },
   {
    "ic": "🗺️",
    "t": "Pelvic pain in women",
    "s": "Visual algorithm · gynae red flags",
    "href": "algorithms/pelvic-pain-women.html"
   },
   {
    "ic": "💠",
    "t": "IBS protocol",
    "s": "When not to label IBS · CA-125 at 50+",
    "href": "management/ibs.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is designed to catch the doctor who agrees with the patient. The clinical marks come from refusing the IBS label and knowing the current NICE NG12 (updated April 2026) pathway; the relating marks come from finding the fear she won’t say.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Prescribing peppermint or an antispasmodic for “IBS” with no tests.",
     "why": "New IBS-type symptoms at 50+ and the persistent ovarian cluster both require tests under NICE NG12 (updated April 2026).",
     "fix": "“New tummy symptoms after 50 we check properly rather than calling them IBS.” Then arrange examination and CA-125."
    },
    {
     "dom": "tasks",
     "fail": "Quoting a single CA-125 cut-off of 35 IU/mL.",
     "why": "Since April 2026, NICE NG12 (updated April 2026) uses age-specific thresholds; at 54 it is 31 IU/mL. An outdated threshold could miss a raised result.",
     "fix": "Know the band for the patient in front of you, or say “above the threshold for your age”."
    },
    {
     "dom": "tasks",
     "fail": "Arranging bloods over video and never examining her.",
     "why": "A mass or ascites on examination triggers a suspected cancer pathway referral straight away, without waiting for CA-125.",
     "fix": "“I need to examine you in person — can you come in today or tomorrow?”"
    },
    {
     "dom": "rto",
     "fail": "Hearing “my aunt had ovarian trouble” and moving on to the next question.",
     "why": "“Does not identify or respond to the patient’s cues.” The fear is her real reason for attending.",
     "fix": "“Has it crossed your mind this might be something like that?” Then validate before explaining."
    },
    {
     "dom": "rto",
     "fail": "Swinging from reassurance to alarm — “it’s probably nothing” followed by “we need to rule out cancer urgently”.",
     "why": "Inconsistent messages increase anxiety and reduce trust.",
     "fix": "Say both truths together: most women with these symptoms don’t have cancer, and the pattern means we test promptly."
    },
    {
     "dom": "gs",
     "fail": "Closing with “we’ll let you know if anything’s abnormal”.",
     "why": "Leaves no plan for persistent symptoms with a normal CA-125, and no named safety-net.",
     "fix": "Own the result, name same-day symptoms, and say what happens if tests are normal but symptoms continue."
    }
   ]
  }
 },
 "painless-jaundice": {
  "stem": {
   "name": "Roy Pemberton",
   "age": "68-year-old man",
   "pmh": [
    "Ex-smoker",
    "No liver disease recorded"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "No recent blood tests on record. Wife booked the appointment.",
   "reason": "Video consultation — “the wife says I’ve gone yellow”."
  },
  "knowledge": {
   "guideline": "NICE NG12 (updated April 2026) — suspected cancer: pancreatic · NICE CG188 (2014) · NICE NG253 (updated September 2026)",
   "summary": "Painless jaundice with dark urine, pale stools, itch and 6 kg of unintentional weight loss in a 68-year-old is obstructive jaundice until proven otherwise, and pancreatic or biliary cancer must be excluded urgently. Alcohol does not explain this pattern.",
   "points": [
    {
     "h": "The NICE NG12 (updated April 2026) criterion",
     "t": "NICE NG12 (updated April 2026), rec 1.2.4: refer people using a suspected cancer pathway referral for pancreatic cancer if they are aged 40 and over and have jaundice. Roy meets this on jaundice alone."
    },
    {
     "h": "Direct-access CT",
     "t": "NICE NG12 (updated April 2026): offer an urgent direct-access CT scan (or urgent ultrasound if CT is not available) to assess for pancreatic cancer in people aged 60 and over with weight loss and any of diarrhoea, back pain, abdominal pain, nausea, vomiting, constipation or new-onset diabetes. Many local pathways put CT first on the jaundice referral."
    },
    {
     "h": "Read the jaundice",
     "t": "Dark urine, pale stools and itch mean an obstructive (post-hepatic) pattern: bilirubin rises with a cholestatic LFT picture. Alcohol-related liver disease usually produces a hepatitic or chronic liver picture with other stigmata. A palpable, non-tender gallbladder with jaundice (Courvoisier’s sign) makes gallstones less likely."
    },
    {
     "h": "Same-day bloods",
     "t": "LFTs (bilirubin, ALP, GGT, ALT), FBC, U&E, clotting (vitamin K absorption falls with obstruction), glucose or HbA1c (new diabetes can signal pancreatic cancer), and a hepatitis screen as part of the work-up. Ask about recently started medicines that can cause cholestasis."
    },
    {
     "h": "When it is an emergency",
     "t": "Fever or rigors, right upper quadrant pain and jaundice suggest ascending cholangitis — same-day admission, not a suspected cancer referral. Confusion, low blood pressure or other sepsis features: assess using NICE NG253 and call 999 if high risk."
    },
    {
     "h": "Alcohol, proportionately",
     "t": "Take a drinking history (AUDIT-C) and offer help, but do not let it become the explanation. “Cut down and we’ll recheck” is the dangerous miss in this station."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Pemberton, I’m Dr Evans. What’s brought you in today?",
    "dom": "rto",
    "why": "Open question, patient-led start"
   },
   {
    "who": "pt",
    "text": "The wife’s been on at me — she reckons I’ve gone yellow, eyes and that. I feel okay-ish. Bit tired, off my food. I’ve enjoyed a drink over the years, so I’m guessing it’s my liver giving me a warning. Can you just reassure me it’ll sort itself out? I don’t want a load of hospital tests if it’s just the booze."
   },
   {
    "who": "dr",
    "text": "Thank you for being straight with me — and I’m glad your wife pushed you. I’d like to ask some questions, then tell you honestly what I think and what I’d suggest. Is that alright?",
    "dom": "gs",
    "why": "Acknowledges the wife’s concern and sets an agenda"
   },
   {
    "who": "pt",
    "text": "Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–5 min",
    "who": "dr",
    "text": "When did the yellowing start, and have you noticed anything about your urine or your stools?",
    "dom": "tasks",
    "why": "Characterises obstructive jaundice"
   },
   {
    "who": "pt",
    "text": "Couple of weeks. Now you mention it, my wee’s been dark like tea, and — sorry — my stools are pale. And I’m itching like mad."
   },
   {
    "who": "dr",
    "text": "That’s really helpful. Any pain in your tummy or back?",
    "dom": "tasks",
    "why": "Establishes that the jaundice is painless"
   },
   {
    "who": "pt",
    "text": "No, no pain. That’s why I wasn’t bothered."
   },
   {
    "who": "dr",
    "text": "Have you lost weight without trying? And how’s your appetite?",
    "dom": "tasks",
    "why": "Asks directly for the weight loss he hasn’t volunteered"
   },
   {
    "who": "pt",
    "text": "About six kilos, I think. Trousers are loose. Just not hungry."
   },
   {
    "who": "dr",
    "text": "Any fevers, shivering attacks or feeling muddled?",
    "dom": "tasks",
    "why": "Screens for cholangitis — would change the urgency"
   },
   {
    "who": "pt",
    "text": "No, nothing like that."
   },
   {
    "who": "dr",
    "text": "When you come in, could you bring any medicines or remedies you’ve been taking, including anything new? I’ll also go through the drinking properly when I see you — it matters, but it doesn’t change what we do first.",
    "dom": "tasks",
    "why": "Drug-induced cholestasis; alcohol kept proportionate"
   },
   {
    "who": "pt",
    "text": "Fair enough."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "5–6 min",
    "who": "dr",
    "text": "You said you’re guessing it’s the drink. What worries you most about all this?",
    "dom": "rto",
    "why": "Opens the fear behind the self-blame"
   },
   {
    "who": "pt",
    "text": "…If I’m honest, I’d rather it was the booze. That I can fix. If it’s something else, I don’t want to know. And I don’t want to be a burden on her."
   },
   {
    "who": "dr",
    "text": "That’s a very human thing to feel, and thank you for saying it. Blaming the drink feels safer because it’s something you can control. But you’re not a burden for getting this checked — you’re doing what your wife hoped you would.",
    "dom": "rto",
    "why": "Names the avoidance kindly without colluding"
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "I’ll be honest with you, because I think you’d want that. Yellowing with dark urine, pale stools and itching usually means the tube draining the liver is blocked. With weight loss and no pain, at your age, we have to check urgently for something serious in the pancreas or bile ducts.",
    "dom": "tasks",
    "why": "Explains obstructive jaundice and the concern honestly"
   },
   {
    "who": "pt",
    "text": "You mean cancer."
   },
   {
    "who": "dr",
    "text": "That’s what we need to rule out, yes. I can’t tell you it is or isn’t today. But this isn’t something I can put down to drink and recheck later — waiting would take away our chance to act.",
    "dom": "rto",
    "why": "Answers the direct question truthfully without catastrophising"
   },
   {
    "who": "pt",
    "text": "Right. Okay."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s what I’m arranging. I’d like to see you in person today to examine you and take blood tests — liver tests, blood count, kidneys, clotting and sugar. And I’m referring you today on the urgent suspected cancer pathway; the team usually arranges a CT scan quickly.",
    "dom": "tasks",
    "why": "NICE NG12 (updated April 2026) rec 1.2.4 referral plus same-day bloods and examination"
   },
   {
    "who": "pt",
    "text": "Today? That fast?"
   },
   {
    "who": "dr",
    "text": "Yes — because it matters. Would you like your wife to come with you, and would it help if I explained the plan to her too?",
    "dom": "rto",
    "why": "Involves his wife with his consent"
   },
   {
    "who": "pt",
    "text": "Yes. She’ll want to hear it from you anyway."
   },
   {
    "who": "dr",
    "text": "And the drinking — let’s talk about it when you come in and I can help you cut down. It’s good for you whatever the tests show, but it isn’t about blame.",
    "dom": "tasks",
    "why": "Addresses alcohol without letting it delay the work-up"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "One important thing: if you get a fever or shaking chills, bad tummy pain, or you become confused or very drowsy, that’s an emergency — go to A&E or call 999, because an infected blocked duct needs treating fast.",
    "dom": "gs",
    "why": "Cholangitis and sepsis safety-net in plain words"
   },
   {
    "who": "pt",
    "text": "Understood."
   },
   {
    "who": "dr",
    "text": "So: see me today for bloods and an examination, urgent referral sent today, and I’ll call you when the results are back. What will you tell your wife?",
    "dom": "gs",
    "why": "Summary with teach-back"
   },
   {
    "who": "pt",
    "text": "That it’s not just the booze, and I’m getting it checked properly. She’ll be relieved."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; let him give his own explanation and request before responding.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "The wife’s concern, his stoicism, the “burden” worry and his relationship with alcohol.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “off my food” and asked about weight; picked up the self-blame and the wish not to know.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (liver damage from drink), the fear of something worse behind the avoidance, and his wish for reassurance and no hospital tests.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination and tests",
    "d": "Same-day examination (jaundice, palpable gallbladder, mass, liver); LFTs, FBC, U&E, clotting, glucose or HbA1c.",
    "pts": 1
   },
   {
    "t": "Generates and tests hypotheses",
    "d": "Obstructive versus hepatic jaundice; pancreatic or biliary cancer versus stones versus alcohol-related liver disease versus drugs.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Established painless obstructive jaundice with weight loss; screened for cholangitis (fever, rigors, pain, confusion).",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Painless obstructive jaundice needing urgent exclusion of pancreatic or biliary cancer — shared honestly, including the direct question about cancer.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "NICE NG12 (updated April 2026) suspected cancer pathway referral today; urgent CT per pathway; same-day bloods; alcohol support without delay to the work-up.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity and contributors",
    "d": "Itch and appetite acknowledged; alcohol history and support offered; wife involved with consent.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Cholangitis and sepsis features → 999/A&E; results call; referral tracked.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Long-term conditions & cancer",
    "Older adults",
    "New & undifferentiated presentations"
   ],
   "stem": {
    "name": "Roy Pemberton",
    "age": "68 years · male",
    "pmh": [
     "Ex-smoker",
     "Nil else recorded"
    ],
    "meds": [
     "Nil recorded"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Wife rang to book: “He’s gone yellow.” No bloods on file.",
    "reason": "Video consultation: “Probably my liver from the odd drink — can you reassure me?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "He opens with an explanation and a request for reassurance. Let him finish, then thank his wife."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Urine, stools, itch; pain (absent); weight and appetite; fever, rigors, confusion; new medicines."
    },
    {
     "t": "5–6",
     "h": "ICE",
     "d": "“I’d rather it was the booze” — name the avoidance kindly and don’t collude."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "Blocked drainage tube; must exclude pancreas or bile duct cancer. Same-day bloods and examination; suspected cancer referral today."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Cholangitis features → 999. Involve his wife. Teach-back."
    }
   ],
   "wordPics": {
    "fail": "Accepts “it’s the booze”, advises cutting down and rechecking LFTs in a few weeks; never asks about stools, urine or weight; no referral; or delivers “this could be cancer” bluntly and loses him.",
    "pass": "Recognises painless obstructive jaundice with weight loss; arranges urgent bloods and a suspected cancer pathway referral; screens for cholangitis; mentions alcohol without making it the diagnosis.",
    "exc": "All of the above, plus: draws out the fear behind the self-blame and answers it with compassion; answers “you mean cancer?” honestly; involves his wife with consent; gives a plain-language cholangitis safety-net; he leaves agreeing to the same-day plan."
   },
   "avoid": [
    {
     "dont": "“Cut down on the drink and we’ll repeat your liver tests in a month.”",
     "instead": "“This pattern isn’t something I can put down to drink — I want tests today and an urgent referral.”",
     "why": "Delay is the dangerous miss; NICE NG12 (updated April 2026) is clear on jaundice at 40 and over."
    },
    {
     "dont": "“You’ve probably got pancreatic cancer.”",
     "instead": "“We need to check urgently for something serious in the pancreas or bile ducts — I can’t say today whether it is.”",
     "why": "Honest without pre-empting a diagnosis you don’t yet have."
    },
    {
     "dont": "“Well, the drinking won’t have helped.”",
     "instead": "“This isn’t about blame — it’s about finding the cause.”",
     "why": "Feeding his guilt reinforces avoidance."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Partner as the reliable signal",
     "t": "His wife noticed and booked; he minimises. With his consent, involving her helps him attend and hear the plan."
    },
    {
     "h": "Alcohol and self-blame",
     "t": "Guilt about drinking can drive avoidance. Offer non-judgemental alcohol support separately from the cancer work-up."
    }
   ],
   "legal": [
    {
     "h": "Consent and confidentiality",
     "t": "Share information with his wife only with his agreement (GMC Confidentiality 2017). He has capacity to decline tests; if he does, explain the risks clearly and record an informed decision."
    }
   ],
   "professional": [
    {
     "h": "Honesty about cancer",
     "t": "GMC Good Medical Practice 2024: be honest and open. When asked directly “is it cancer?”, say what is being ruled out and why, without claiming certainty."
    },
    {
     "h": "Tracking urgent referrals",
     "t": "Make sure the suspected cancer referral is received and the patient is seen; practice systems should flag missed appointments."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Pancreatic Cancer UK and Macmillan for information and support if a diagnosis is made; local alcohol services for help cutting down."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Jaundice at 40 and over — suspected cancer pathway referral (NICE NG12 (updated April 2026), rec 1.2.4)",
     "Weight loss at 60 and over with abdominal or back pain, nausea, vomiting, bowel change or new diabetes — urgent direct-access CT",
     "Fever, rigors, RUQ pain, confusion — possible cholangitis, emergency admission"
    ],
    "psychosocial": [
     "Stoicism and not wanting to be a burden",
     "Guilt about alcohol used as a “fixable” explanation",
     "His wife’s concern and her role in getting him seen"
    ],
    "ice": [
     "Idea: “It’s my liver from the drink”",
     "Concern: frightened it’s something worse; would rather not know",
     "Expectation: reassurance, no hospital tests"
    ]
   },
   "diagnosis": "Honest and clear: “Yellowing with dark urine, pale stools and weight loss usually means a blockage in the tube draining the liver. At your age we must check urgently for a serious cause in the pancreas or bile ducts.”",
   "diagnosisLay": "“Think of the liver draining bile through a pipe into the gut. If something squeezes the pipe, the yellow colour backs up into your blood, your wee darkens and your stools go pale. The scan shows us what’s squeezing it.”",
   "management": {
    "reflectIce": "“Blaming the drink feels safer because it’s something you can fix. I understand that — and getting checked properly is what gives us the best chance to act.”",
    "psychosocial": "Invite his wife to the appointment with his consent; offer alcohol support as help, not blame.",
    "sharedPlan": [
     "Same-day examination and bloods: LFTs, FBC, U&E, clotting, glucose or HbA1c",
     "Suspected cancer pathway referral today (NICE NG12 (updated April 2026)); urgent CT per local pathway",
     "Alcohol history and support, without delaying the work-up"
    ],
    "safetyNet": [
     "Fever, rigors, severe abdominal pain, confusion or drowsiness → 999/A&E",
     "Results call; confirm the referral appointment is made and attended"
    ]
   }
  },
  "links": [
   {
    "ic": "🗺️",
    "t": "Jaundice pathway",
    "s": "Visual algorithm · NICE NG12 (updated April 2026) pancreatic",
    "href": "algorithms/jaundice.html"
   },
   {
    "ic": "🗺️",
    "t": "Abnormal LFTs pathway",
    "s": "Visual algorithm · cholestatic vs hepatitic",
    "href": "algorithms/abnormal-lfts.html"
   },
   {
    "ic": "📋",
    "t": "Abnormal LFTs",
    "s": "Case walkthrough",
    "href": "../cases/abnormal-lfts.html"
   },
   {
    "ic": "🗺️",
    "t": "Weight loss pathway",
    "s": "Visual algorithm · suspected cancer routes",
    "href": "algorithms/weight-loss.html"
   },
   {
    "ic": "📋",
    "t": "Alcohol",
    "s": "Case walkthrough · AUDIT-C",
    "href": "../cases/alcohol.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is lost when the doctor accepts the patient’s explanation. The alcohol story is plausible and he wants it to be true; the marks come from recognising painless obstructive jaundice and acting today — kindly.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Advising him to cut down and rechecking LFTs in a few weeks.",
     "why": "NICE NG12 (updated April 2026) rec 1.2.4: jaundice at 40 and over needs a suspected cancer pathway referral. “Management plan not in line with current UK best practice.”",
     "fix": "“This pattern isn’t something I can put down to drink. I’m referring you urgently today.”"
    },
    {
     "dom": "tasks",
     "fail": "Not asking about stools, urine or weight loss.",
     "why": "These are the features that make the jaundice obstructive and sinister; he won’t volunteer them.",
     "fix": "Ask directly: “Any change in your urine or stools? Have you lost weight without trying?”"
    },
    {
     "dom": "tasks",
     "fail": "Missing the cholangitis screen and safety-net.",
     "why": "Fever, rigors, pain or confusion make this an emergency admission; the patient must know what to watch for.",
     "fix": "Ask once in the history, then safety-net in plain words: fever, shivers, bad pain, confusion → 999."
    },
    {
     "dom": "rto",
     "fail": "Colluding with the self-blame — “well, the drinking won’t have helped”.",
     "why": "Reinforces the avoidance that stops him accepting tests.",
     "fix": "“This isn’t about blame — it’s about finding the cause. We’ll talk about the drinking as help, separately.”"
    },
    {
     "dom": "rto",
     "fail": "Deflecting “You mean cancer?” with vague reassurance.",
     "why": "Evasion damages trust; examiners reward honest, compassionate answers to direct questions.",
     "fix": "“That’s what we need to rule out, yes. I can’t say today whether it is — that’s why I’m acting quickly.”"
    },
    {
     "dom": "gs",
     "fail": "A plan that relies on him booking bloods “sometime this week”.",
     "why": "A reluctant patient with a time-critical problem needs a concrete, same-day next step.",
     "fix": "Same-day appointment, referral sent today, results call booked, wife involved with his consent."
    }
   ]
  }
 },
 "pcos-named": {
  "stem": {
   "name": "Bethan Lloyd",
   "age": "27-year-old woman",
   "pmh": [
    "Infrequent periods (every 2–3 months), unwanted facial and body hair, acne",
    "BMI 31",
    "Family history of type 2 diabetes"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "Blood tests and pelvic ultrasound arranged at a previous appointment; results filed and consistent with polycystic ovary syndrome. Not yet discussed with her.",
   "reason": "Video consultation to discuss irregular periods, excess hair and difficulty losing weight."
  },
  "knowledge": {
   "guideline": "International evidence-based PCOS guideline 2023 (international) · RCOG Green-top Guideline 33 (2014) · NICE NG257 (2026) · NICE NG246 · UKMEC 2025 · MHRA Drug Safety Update (June 2013)",
   "summary": "Two of three Rotterdam features, with mimics excluded, make the diagnosis. Name it kindly, then manage the whole condition: metabolic risk, endometrial protection, symptoms, fertility and mood.",
   "points": [
    {
     "h": "Make and name the diagnosis",
     "t": "Two of three: irregular or absent ovulation, clinical or biochemical hyperandrogenism, and polycystic ovaries on ultrasound (or raised AMH in adults), after excluding thyroid disease, raised prolactin and non-classic congenital adrenal hyperplasia (international guideline 2023). A Lancet consensus (May 2026) renamed the condition PMOS; a UK guideline (GID-NG10436) is in development and not yet published."
    },
    {
     "h": "Metabolic screening",
     "t": "Check glycaemic status at diagnosis and then every 1–3 years (international guideline 2023), plus lipids and blood pressure. A family history of type 2 diabetes and a BMI of 31 raise her risk. Even modest weight loss improves cycles, hyperandrogenism and ovulation; NICE NG246 covers weight-management support."
    },
    {
     "h": "Protect the endometrium",
     "t": "With infrequent periods, aim for a withdrawal bleed at least every 3–4 months (RCOG GTG 33), using a combined pill or a cyclical progestogen (dose and duration per BNF). The combined pill is UKMEC 2 at BMI 30–34 (UKMEC 2025), so it remains an option for her."
    },
    {
     "h": "Treat the symptoms",
     "t": "The combined pill is first line for hirsutism and irregular cycles (international guideline 2023), with cosmetic measures and topical eflornithine (stop if no benefit at 4 months, per SPC). Consider anti-androgens only after at least 6 months, and always with reliable contraception. Co-cyprindiol carries a higher VTE risk and is second line (MHRA Drug Safety Update, June 2013). Acne follows the usual acne pathway."
    },
    {
     "h": "Fertility: honest reassurance",
     "t": "PCOS is a common, treatable cause of anovulation, and most women with it conceive. Weight loss can restore ovulation; letrozole is first-line ovulation induction under specialist care (international guideline 2023). NICE NG257 advises earlier referral when there is a known cause of infertility. Before conception: folic acid (higher dose with BMI 30 or more, per BNF) and a glucose check."
    },
    {
     "h": "Mood and body image",
     "t": "Screen everyone with PCOS for depression and anxiety, and be alert to disordered eating (international guideline 2023). Her \"I feel disgusting\" is a clinical cue, not small talk."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Bethan, thanks for joining. Before I say anything about your tests, I'd like to hear it in your own words. What's been going on, and what's worrying you most?",
    "dom": "rto",
    "why": "Opens with her story before the results"
   },
   {
    "who": "pt",
    "text": "My periods come every two or three months, I've got hair on my face and body, my skin's bad, and I can't shift the weight whatever I do. I feel disgusting, honestly. I read it might be polycystic ovaries. I just want a tablet to fix the weight and the hair."
   },
   {
    "who": "dr",
    "text": "That sounds exhausting to live with, and I'm sorry you've been feeling that way about yourself. You've clearly done some reading. Can I say what I'd like to cover? Your symptoms, what the tests show, what matters most to you, and then a plan together. Is that okay?",
    "dom": "gs",
    "why": "Acknowledges distress and sets a shared agenda"
   },
   {
    "who": "pt",
    "text": "Yes, fine."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me a bit more about the periods. When was the last one, and are they heavy or painful when they come?",
    "dom": "tasks",
    "why": "Clarifies the cycle and timing of the last bleed"
   },
   {
    "who": "pt",
    "text": "Every couple of months, sometimes longer. Not too bad when they do come."
   },
   {
    "who": "dr",
    "text": "And the hair, the skin and the weight: how long has this been building, and what have you tried?"
   },
   {
    "who": "pt",
    "text": "A long time. I've tried diets, exercise, the lot. The weight just doesn't move like it does for my friends."
   },
   {
    "who": "dr",
    "text": "Any milky discharge from the nipples, headaches, or changes like thinning skin or easy bruising? And anyone in the family with diabetes?",
    "dom": "tasks",
    "why": "Screens for mimics (prolactin, Cushing's) and metabolic risk"
   },
   {
    "who": "pt",
    "text": "None of that. My family have type 2 diabetes, though."
   },
   {
    "who": "dr",
    "text": "Thank you, that's useful. It matters for how we look after you."
   },
   {
    "phase": "Ideas, concerns and expectations",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said you feel disgusting. That's a strong word. How have you been in yourself, in your mood?",
    "dom": "rto",
    "why": "Picks up the body-image cue rather than moving past it"
   },
   {
    "who": "pt",
    "text": "Pretty low, if I'm honest. I hate how I look. I just got engaged and I should be happy."
   },
   {
    "who": "dr",
    "text": "Congratulations. It sounds like the engagement has brought something else up too. Is part of the worry what this might mean for having a family?",
    "dom": "rto",
    "why": "Gently surfaces the hidden fertility fear"
   },
   {
    "who": "pt",
    "text": "(quietly) I'm terrified I can't have children. I've not even said that out loud to him."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That's a big thing to carry on your own, and I'm glad we can talk about it properly today.",
    "dom": "rto",
    "why": "Validates the disclosure and the shame around it"
   },
   {
    "who": "dr",
    "text": "Can I check on the low mood: has it ever got to the point of feeling hopeless, or thoughts of harming yourself?",
    "dom": "tasks",
    "why": "Mood screen with a safety question"
   },
   {
    "who": "pt",
    "text": "No, nothing like that. Just fed up with myself."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Let me give this a name, because it helps. Your periods, the hair and skin, and your test results fit polycystic ovary syndrome, PCOS. It's very common, it's a hormone imbalance, and it is not something you've caused. The difficulty losing weight is partly the condition itself, not a lack of willpower.",
    "dom": "tasks",
    "why": "Names PCOS kindly and removes self-blame"
   },
   {
    "who": "pt",
    "text": "So it's not just me being lazy?"
   },
   {
    "who": "dr",
    "text": "Not at all. And on children, here's the honest picture: PCOS is one of the most treatable causes of difficulty getting pregnant. Many women with it conceive naturally, weight loss often brings ovulation back, and if needed there are effective treatments to help you ovulate. You are not broken.",
    "dom": "tasks",
    "why": "Accurate, reassuring fertility information"
   },
   {
    "who": "pt",
    "text": "(tearful) I really needed to hear that."
   },
   {
    "who": "dr",
    "text": "It's more than the hair and weight, though. PCOS can raise the risk of diabetes over time, especially with your family history, so I'd like a blood sugar test and cholesterol, and I'll check your blood pressure. And because your periods are infrequent, the womb lining needs to shed at least every three to four months to keep it healthy.",
    "dom": "tasks",
    "why": "Metabolic screening and endometrial protection"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "For the periods, hair and skin, a combined pill is usually the first step. It regulates bleeds, protects the lining and reduces hair and acne over several months. It's still suitable at your weight. There are also creams and hair-removal options. How does that sound?",
    "dom": "tasks",
    "why": "First-line symptom treatment with realistic timeframe and UKMEC check"
   },
   {
    "who": "pt",
    "text": "Okay, but what about the weight? Is there a tablet?"
   },
   {
    "who": "dr",
    "text": "Weight-loss injections are only for people who meet strict criteria, and I'll check honestly whether you do. What usually works best is a realistic plan and support rather than another crash diet. What would feel doable for you?",
    "dom": "rto",
    "why": "Answers the request honestly and shares the decision"
   },
   {
    "who": "pt",
    "text": "Maybe more walking. I could manage that."
   },
   {
    "who": "dr",
    "text": "That's a great start, and I'll refer you to local weight-management support too. When you and your fiancé are ready to try for a baby, come back first. We'll start folic acid, check your sugar, and plan early referral if you need help ovulating.",
    "dom": "gs",
    "why": "Pre-conception pathway linked to her concern"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If your mood drops or you ever feel unsafe, please contact us straight away, and ring 111 or 999 in a crisis. Also get in touch if you go more than three months without a bleed before we've sorted the pill. I'd like to see you in about three months to review the pill, your results and how you're feeling.",
    "dom": "gs",
    "why": "Specific safety-net and holistic follow-up"
   },
   {
    "who": "pt",
    "text": "Thank you. I came in feeling like my body was against me."
   },
   {
    "who": "dr",
    "text": "So, to recap: blood tests and a blood pressure check, starting the pill, more walking, weight support, and a plan for when you want a baby. What will you tell your fiancé tonight?",
    "dom": "rto",
    "why": "Summary with teach-back"
   },
   {
    "who": "pt",
    "text": "That it's PCOS, it's common, and we can still have a family. I think I'll actually tell him now."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question first; let her describe the symptoms and her reading on PCOS before sharing results.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Engagement, body image, previous diet attempts, support from her fiancé.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up \"I feel disgusting\" and the engagement, and explored them rather than moving straight to prescribing.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (body \"against her\", a tablet will fix it); hidden fertility fear and low mood; expectation of a quick fix.",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Reviews filed bloods/ultrasound; HbA1c or glucose status, lipids, BP; confirms mimics excluded (TSH, prolactin, 17-OHP).",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "PCOS against thyroid disease, hyperprolactinaemia, non-classic CAH and Cushing's; screens for depression.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asks about rapid virilisation or features of Cushing's; checks mood and self-harm thoughts.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Names PCOS kindly by Rotterdam criteria; explains that weight difficulty is partly the condition.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Combined pill (UKMEC 2 at BMI 31) for cycles, endometrium and hirsutism; cosmetic and topical options; realistic timeframes; honest answer on weight medicines.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Metabolic risk with family history of T2DM; endometrial protection; mood and body image; pre-conception care.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Review at about 3 months; mood safety-net; come back before trying to conceive; bleed at least every 3–4 months.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Long-term conditions & cancer",
    "Mental health & addiction"
   ],
   "stem": {
    "name": "Bethan Lloyd",
    "age": "27 years · female",
    "pmh": [
     "Oligomenorrhoea (cycle 2–3 months)",
     "Hirsutism and acne",
     "BMI 31"
    ],
    "meds": [
     "Nil regular"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Bloods and pelvic USS arranged previously: results filed, consistent with PCOS, not yet discussed. FH: type 2 diabetes. No HbA1c or lipids on file.",
    "reason": "Video appointment: \"irregular periods, excess hair, can't lose weight.\""
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and listen",
     "d": "She opens with a list and \"I feel disgusting\". Let her finish; that word is the door to the real consultation."
    },
    {
     "t": "1–4",
     "h": "Focused history",
     "d": "Cycle pattern and last period, hirsutism and acne timeline, mimic screen (galactorrhoea, Cushing's features), family history of diabetes."
    },
    {
     "t": "4–6",
     "h": "ICE and hidden agenda",
     "d": "Mood and body image, then the engagement and the fertility fear. Ask a direct safety question about mood."
    },
    {
     "t": "6–10",
     "h": "Name it and plan",
     "d": "Name PCOS kindly. Fertility reassurance. Metabolic tests. Combined pill for cycles and hair. One realistic lifestyle goal she chooses."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Mood safety-net, bleed at least every 3–4 months, pre-conception visit, review in about 3 months, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Prescribes something for the hair and gives a diet leaflet; never names PCOS or explains it; misses the fertility fear and \"I feel disgusting\"; no metabolic screening or endometrial protection; frames weight as willpower.",
    "pass": "Names PCOS and explains it; checks glucose status, lipids and BP; offers the combined pill for cycles and hirsutism; mentions fertility and mood; arranges follow-up.",
    "exc": "All of the above, plus: surfaces the fertility fear gently and answers it with honest, specific reassurance; explicitly lifts the self-blame; screens mood with a safety question; checks UKMEC at her BMI; links a pre-conception plan to the engagement; teach-back that leaves her ready to talk to her fiancé."
   },
   "avoid": [
    {
     "dont": "\"You just need to lose some weight and it will all improve.\"",
     "instead": "\"The weight is harder for you because of the condition, not a lack of effort. Let's find one change that feels doable.\"",
     "why": "Blaming language confirms her shame and loses the Relating domain."
    },
    {
     "dont": "\"Don't worry about fertility, you're young.\"",
     "instead": "\"PCOS is one of the most treatable causes of difficulty conceiving. Here's what we'd do when you're ready.\"",
     "why": "Vague reassurance dismisses the real fear; specific information treats it."
    },
    {
     "dont": "\"Here's a cream for the hair, come back if it doesn't work.\"",
     "instead": "\"The hair is one part of it. I also want to protect your womb lining and check your sugar.\"",
     "why": "Treating it as cosmetic misses the metabolic and endometrial tasks."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Body image and relationships",
     "t": "Visible symptoms such as hirsutism and acne can lead to avoidance, low self-esteem and strain in relationships. Newly engaged, she may be carrying shame she has not shared with her partner."
    },
    {
     "h": "Weight stigma",
     "t": "Weight-related shame reduces engagement with care. Use neutral language, ask permission to discuss weight, and focus on health gains rather than numbers."
    }
   ],
   "legal": [
    {
     "h": "Prescribing outside licence",
     "t": "Metformin and spironolactone for PCOS features are off-label. Explain this, record the discussion and her agreement, and follow the BNF (GMC Good Medical Practice 2024)."
    },
    {
     "h": "NHS fertility access",
     "t": "Local commissioning often sets BMI and other criteria for NHS-funded fertility treatment. Explain early, so weight goals are linked to a clear purpose."
    }
   ],
   "professional": [
    {
     "h": "Honest uncertainty on guidance",
     "t": "No UK PCOS guideline is published yet (GID-NG10436 in development). NICE NG257 removed its PCOS-specific recommendations. Say which source you are using and label the international guideline as such."
    },
    {
     "h": "Shared decision-making",
     "t": "Present the combined pill, cyclical progestogen and cosmetic options with their trade-offs, and let her choose (GMC decision-making and consent guidance 2020)."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Verity (the UK PCOS charity) for peer support and information; NHS weight-management services; NHS Talking Therapies if her mood needs support."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Rapid-onset or severe virilisation (deepening voice, clitoromegaly): possible androgen-secreting tumour, needs urgent assessment",
     "Features of Cushing's syndrome or galactorrhoea: exclude mimics before labelling PCOS",
     "Low mood with hopelessness or self-harm thoughts"
    ],
    "psychosocial": [
     "Recently engaged: the fertility question is urgent to her even if she has not said it",
     "Body image, feeling \"disgusting\"",
     "Previous diet attempts and the self-blame that followed"
    ],
    "ice": [
     "Idea: \"My body's against me; a tablet will fix the weight and the hair.\"",
     "Concern: \"I'm broken and won't be able to have children,\" plus low mood about her body",
     "Expectation: a quick fix for weight and hair"
    ]
   },
   "diagnosis": "Name it clearly: \"Your periods, the hair and skin changes and your test results fit polycystic ovary syndrome. It's common, it's hormonal, and it's manageable.\"",
   "diagnosisLay": "\"Your hormones are slightly out of balance, so your ovaries don't release an egg every month. That's why periods are irregular, and why a bit more of the 'male-type' hormone causes hair and spots. It also makes your body handle sugar less efficiently, which is why weight is harder to shift. None of that is your fault.\"",
   "management": {
    "reflectIce": "\"You told me you're frightened you can't have children. Let's deal with that honestly, because the news is much better than you fear.\"",
    "psychosocial": "Treat the mood and body image as part of the condition: validate, screen properly, and offer support. Agree one lifestyle goal she chooses rather than a lecture.",
    "sharedPlan": [
     "Glucose status (HbA1c), lipids and BP now, then glycaemic review every 1–3 years",
     "Combined pill for cycles, endometrial protection and hirsutism (UKMEC 2 at BMI 31); cosmetic and topical options; review at 3–6 months",
     "Weight-management support; honest check of eligibility for weight medicines",
     "Pre-conception visit: higher-dose folic acid (per BNF), glucose check, early referral if not ovulating"
    ],
    "safetyNet": [
     "Contact the practice if mood worsens; 111 or 999 in a crisis",
     "No bleed for more than 3 months before treatment is settled: get in touch",
     "Review in about 3 months"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Polycystic ovary syndrome",
    "s": "Case walkthrough · international guideline 2023",
    "href": "../cases/pcos.html"
   },
   {
    "ic": "💠",
    "t": "PCOS protocol",
    "s": "Metabolic screen · endometrium · fertility",
    "href": "management/pcos.html"
   },
   {
    "ic": "💠",
    "t": "Hirsutism",
    "s": "Management · COCP · eflornithine",
    "href": "management/hirsutism.html"
   },
   {
    "ic": "🗺️",
    "t": "Irregular periods pathway",
    "s": "Visual algorithm · oligomenorrhoea",
    "href": "algorithms/irregular-periods.html"
   },
   {
    "ic": "💠",
    "t": "Infertility",
    "s": "Management · NICE NG257",
    "href": "management/infertility.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed when it is treated as a cosmetic prescription. The request for \"a tablet for weight and hair\" is the entry point; the marks sit in naming PCOS kindly, the metabolic and endometrial tasks, and the fertility fear.",
   "items": [
    {
     "dom": "rto",
     "fail": "Moving past \"I feel disgusting\" to ask about hair distribution and cycle length.",
     "why": "\"Does not identify or respond to the patient's cues.\" That phrase is the emotional centre of the consultation.",
     "fix": "Reflect it back: \"That's a strong word to use about yourself. How have you been in yourself?\" Then follow where it leads."
    },
    {
     "dom": "rto",
     "fail": "Never asking about the engagement, so the fertility fear stays hidden and she leaves still believing she is \"broken\".",
     "why": "The hidden agenda is the real consultation. Missing it caps both Relating and Tasks marks.",
     "fix": "\"You mentioned you've just got engaged. Is part of the worry what this means for having a family?\""
    },
    {
     "dom": "tasks",
     "fail": "Prescribing for hirsutism with no metabolic screen and no plan for the infrequent periods.",
     "why": "\"Management plan not in line with current UK best practice.\" PCOS needs glucose status, lipids, BP and a withdrawal bleed at least every 3–4 months (RCOG GTG 33).",
     "fix": "Say the three parts aloud: symptoms, sugar and heart risk, and protecting the womb lining."
    },
    {
     "dom": "tasks",
     "fail": "Starting a combined pill without checking BMI category, BP or VTE risk, or choosing co-cyprindiol first line.",
     "why": "UKMEC 2025 sets the combined pill at UKMEC 2 for BMI 30–34 and UKMEC 3 at 35 or more; co-cyprindiol carries a higher VTE risk (MHRA, June 2013).",
     "fix": "\"At your weight the pill is still suitable. I'll check your blood pressure before we start.\""
    },
    {
     "dom": "gs",
     "fail": "\"Just lose some weight and it'll improve,\" said as a throwaway line.",
     "why": "Examiners flag judgemental language. It reinforces her self-blame and she disengages.",
     "fix": "\"The weight is harder for you because of PCOS. What's one change that feels doable?\""
    },
    {
     "dom": "gs",
     "fail": "Using \"hyperandrogenism\", \"anovulation\" and \"endometrial hyperplasia\" without explanation.",
     "why": "\"Language not easily understood by the patient.\"",
     "fix": "\"A bit more of the male-type hormone\", \"not releasing an egg every month\", \"the womb lining needs to shed regularly\"."
    },
    {
     "dom": "rto",
     "fail": "Closing with \"any questions?\" and no mention of what happens when she wants to conceive.",
     "why": "Fails to connect the plan to her concern, and misses pre-conception care.",
     "fix": "\"When you're ready for a baby, come back first: folic acid, a sugar check and a clear referral plan.\""
    }
   ]
  }
 },
 "recurrent-uti-woman": {
  "stem": {
   "name": "Carla Mendez",
   "age": "43-year-old woman",
   "pmh": [
    "Recurrent lower urinary tract infection — three treated episodes earlier this year",
    "Previous urine cultures: E. coli"
   ],
   "meds": [
    "No regular medication recorded",
    "Three acute antibiotic courses for UTI this year"
   ],
   "allergy": "No known drug allergies",
   "recent": "Three UTI episodes this year, each treated with a short antibiotic course. Previous cultures grew E. coli. No recurrent-UTI review on record.",
   "reason": "Telephone request for another course of antibiotics: “fourth water infection this year”."
  },
  "knowledge": {
   "guideline": "NICE NG112 — Urinary tract infection (recurrent): antimicrobial prescribing (2018, updated 2024)",
   "summary": "Three UTIs in a year is recurrent UTI. Treat today’s episode with a culture, then work the NICE NG112 ladder: self-care, vaginal oestrogen where menopausal atrophy is present, a single antibiotic dose after a clear trigger such as sex, then methenamine or daily prophylaxis with review.",
   "points": [
    {
     "h": "Definition and today’s episode",
     "t": "Recurrent UTI = 2 or more in 6 months, or 3 or more in 12 months (NICE NG112). Send a urine culture before antibiotics in recurrent UTI and use previous sensitivities. For a non-pregnant woman, NICE NG109 first choices are nitrofurantoin 100 mg modified-release twice daily for 3 days (if eGFR ≥45) or trimethoprim 200 mg twice daily for 3 days if resistance risk is low."
    },
    {
     "h": "Rung 1 — behaviour and self-care",
     "t": "Explain triggers and offer self-care advice: drinking enough to keep urine pale, not delaying voiding, passing urine after sex, avoiding constipation. Cranberry and D-mannose may be discussed as the woman’s choice, with honest mention that evidence is limited or uncertain (NICE NG112)."
    },
    {
     "h": "Rung 2 — vaginal oestrogen",
     "t": "NICE NG112 advises considering vaginal oestrogen for postmenopausal women with recurrent UTI when self-care alone is not enough, reviewed within 12 months. Oral HRT does not reduce UTIs. For a peri-menopausal woman with vaginal dryness, vaginal oestrogen is also a treatment for urogenital atrophy in its own right (NICE NG23, updated April 2026)."
    },
    {
     "h": "Rung 3 — single-dose prophylaxis",
     "t": "Where there is a clear trigger such as intercourse, NICE NG112 supports a single antibiotic dose taken after exposure — e.g. trimethoprim 200 mg, or nitrofurantoin (dose per BNF) — chosen by previous culture results. Review the benefit within 6 months."
    },
    {
     "h": "Rung 4 — methenamine or daily prophylaxis",
     "t": "If the earlier rungs fail: methenamine hippurate as an alternative to daily antibiotics (NICE NG112, 2024 update), or daily trimethoprim 100 mg or nitrofurantoin 50–100 mg at night. Review at 6 months. Nitrofurantoin can rarely cause lung and liver reactions — stop if pulmonary symptoms develop (MHRA Drug Safety Update, April 2023)."
    },
    {
     "h": "When to investigate or refer",
     "t": "NICE NG112: refer men, anyone with recurrent upper UTI, and recurrent lower UTI where the cause is unknown; seek advice in pregnancy. Visible haematuria that is not explained by UTI, or persists after treatment, follows NICE NG12 (updated April 2026). Fever, loin pain or vomiting suggests pyelonephritis (NICE NG111)."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and agenda",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Carla Mendez? It’s Dr Lee from the surgery. Before we go on, can you confirm your date of birth for me, and are you somewhere you can talk privately?",
    "dom": "gs",
    "why": "Identity and privacy checks on a telephone consultation"
   },
   {
    "who": "pt",
    "text": "Yes, I’m at home on my own. Sorry, it’s me again — it’s another water infection. Burning, weeing all the time. Fourth one this year. Can you just put the same antibiotics through? I want it sorted before the weekend."
   },
   {
    "who": "dr",
    "text": "No need to apologise — this sounds miserable, and I’ll make sure you’re treated today. Can I ask a few quick questions to make sure it is the usual thing, and then, if you’re willing, spend a couple of minutes on why it keeps coming back?",
    "dom": "rto",
    "why": "Acknowledges her request and agrees a shared agenda early"
   },
   {
    "who": "pt",
    "text": "Okay. I don’t really want to make it a whole thing, though."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Understood — I’ll keep it focused. Any fever or shivers, pain in your back or sides, feeling sick or being sick?",
    "dom": "tasks",
    "why": "Screens for pyelonephritis before a remote prescription"
   },
   {
    "who": "pt",
    "text": "No, none of that. Just the burning and going all the time."
   },
   {
    "who": "dr",
    "text": "Any blood in the urine, any unusual vaginal discharge, and is there any chance you could be pregnant?",
    "dom": "tasks",
    "why": "Excludes haematuria, an STI or vaginal cause, and pregnancy"
   },
   {
    "who": "pt",
    "text": "No blood, no discharge. And no, I’m not pregnant."
   },
   {
    "who": "dr",
    "text": "Thank you. The last ones grew a germ called E. coli on the lab test. When did this one start, and how are you drinking through the day?",
    "dom": "tasks",
    "why": "Uses previous culture results and asks about fluid intake"
   },
   {
    "who": "pt",
    "text": "Yesterday. And honestly I don’t drink much — a couple of coffees, that’s it."
   },
   {
    "phase": "Exploring the pattern",
    "clock": "4–6 min",
    "who": "dr",
    "text": "That helps. Can I ask something that many women find a bit awkward, but it’s one of the most useful questions I can ask? Do you notice the infections tend to start a day or two after sex?",
    "dom": "rto",
    "why": "Normalises a sensitive question before asking it"
   },
   {
    "who": "pt",
    "text": "…Yes. Pretty much every time. I didn’t want to say."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me — it’s really common and simply down to anatomy, nothing you’re doing wrong. And being in your forties, have you noticed any changes in your periods, or any vaginal dryness or soreness?",
    "dom": "tasks",
    "why": "Explores peri-menopausal atrophy as a treatable contributor"
   },
   {
    "who": "pt",
    "text": "My periods have been all over the place. And yes, dryness — sex has been uncomfortable. That’s partly why I didn’t want to get into it. It’s embarrassing."
   },
   {
    "who": "dr",
    "text": "It isn’t embarrassing to me at all, and I’m glad you said it. What worries you most about all this?",
    "dom": "rto",
    "why": "Responds to the embarrassment cue and invites her concerns"
   },
   {
    "who": "pt",
    "text": "That it’s going to keep happening. And that it’s affecting things at home. I just thought if I kept it quick nobody would ask."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "That makes complete sense. Here’s how I see it: with four in a year, this counts as recurrent infection, so we should treat today AND look at why. You’ve given me two big clues — the link with sex, and the dryness. Around the menopause the vaginal tissue thins and gets drier, and that makes infections more likely.",
    "dom": "tasks",
    "why": "Names recurrent UTI and links it to the contributors she disclosed"
   },
   {
    "who": "pt",
    "text": "So it’s not just bad luck?"
   },
   {
    "who": "dr",
    "text": "Not just bad luck — and that’s good news, because both are treatable. For today, I’ll prescribe a three-day course, chosen using your last lab results. I’d also like a urine sample dropped in before you start, so the lab can check this germ is still sensitive. Is that doable today?",
    "dom": "tasks",
    "why": "Treats the acute episode per NG109 with a culture for stewardship"
   },
   {
    "who": "pt",
    "text": "Yes, I can drop it in this afternoon."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Then there are steps to stop the cycle. First, simple things: drinking enough that your urine stays pale, not holding on, and passing urine soon after sex. Second — and this is the one often missed — a low-dose oestrogen cream or pessary used in the vagina. It helps the dryness and discomfort, and in women past the menopause it clearly reduces these infections. It’s a small local dose. How would you feel about that?",
    "dom": "tasks",
    "why": "Works the NG112 ladder, including vaginal oestrogen, honestly framed"
   },
   {
    "who": "pt",
    "text": "I didn’t know that was a thing. If it helps the dryness too… yes, I’d try it."
   },
   {
    "who": "dr",
    "text": "Good. If infections still follow sex after that, the next option is a single antibiotic tablet taken after sex, rather than full courses. And if that’s not enough, there are daily options we’d review every six months. We step up only if we need to.",
    "dom": "rto",
    "why": "Shares options as a staged plan she can choose into"
   },
   {
    "who": "pt",
    "text": "That sounds better than ringing every few months."
   },
   {
    "who": "dr",
    "text": "Exactly. I’d like to see you in person in the next couple of weeks, once this infection has settled, to look at the dryness properly and start the oestrogen. A chaperone is always available if you’d like one. Would that be okay?",
    "dom": "gs",
    "why": "Converts a reflex script into a planned review, offering a chaperone"
   },
   {
    "who": "pt",
    "text": "Yes. I’d rather do it properly now, to be honest."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Please ring us the same day, or 111 out of hours, if you get a temperature, shivers, pain in your back or side, vomiting, or blood in your urine — that can mean the infection has reached the kidney. And if you’re no better after the course, let us know so we can check the lab result.",
    "dom": "gs",
    "why": "Specific pyelonephritis safety-net and a treatment-failure plan"
   },
   {
    "who": "pt",
    "text": "Okay, I’ll watch for that."
   },
   {
    "who": "dr",
    "text": "Just so I know I’ve explained it clearly — can you tell me what the plan is from here?",
    "dom": "rto",
    "why": "Teach-back to check understanding"
   },
   {
    "who": "pt",
    "text": "Sample in today, three days of tablets, drink more and wee after sex, then come in to talk about the cream."
   },
   {
    "who": "dr",
    "text": "Perfect. Thank you for being open with me today — it’s what lets us actually fix this. Anything else you wanted to ask?",
    "dom": "rto",
    "why": "Affirms her disclosure and shares the floor"
   },
   {
    "who": "pt",
    "text": "No, that’s it. Thanks — I feel a lot less stupid about it now."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Acknowledged the request without refusing or rubber-stamping it; agreed to treat and to explore why it keeps recurring.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Impact on her relationship and sex life, low fluid intake, and the wish to keep it quick.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up “don’t make it a whole thing” and her hesitation, and asked sensitively about sex and dryness.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (same old infection); concern (it will keep happening and is affecting home life); expectation (a quick script by phone).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Urine culture before antibiotics; face-to-face review for vaginal examination with a chaperone offered.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Post-coital pattern and peri-menopausal atrophy as contributors; STI, vaginal cause and pregnancy considered.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Screened for pyelonephritis (fever, loin pain, vomiting) and visible haematuria; knows NG112 referral groups.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Named recurrent UTI (≥3 in 12 months) with post-coital and atrophic contributors.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Three-day course per NG109 guided by prior culture; NG112 ladder — self-care, vaginal oestrogen, post-coital single dose, then methenamine or daily prophylaxis.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Addressed dryness and dyspareunia as a problem in its own right, plus hydration and voiding habits.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Face-to-face review booked; pyelonephritis symptoms named; plan if not better after the course; prophylaxis reviewed at 6 months.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Investigations & results"
   ],
   "stem": {
    "name": "Carla Mendez",
    "age": "43 years · female",
    "pmh": [
     "Recurrent UTI — 3 episodes this year",
     "E. coli on previous cultures"
    ],
    "meds": [
     "No regular medication"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Three antibiotic courses for UTI this year, all issued remotely. No recurrent-UTI review recorded.",
    "reason": "Telephone call: “another water infection — can you just send the same antibiotics?”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and agree agenda",
     "d": "Identity and privacy checks. Accept that she will be treated today, then ask permission to look at why it keeps happening."
    },
    {
     "t": "1–5",
     "h": "Focused history",
     "d": "Pyelonephritis screen, haematuria, discharge, pregnancy, previous cultures, fluids. Then gently ask about sex and vaginal dryness."
    },
    {
     "t": "5–7",
     "h": "Explain and de-shame",
     "d": "“Four in a year is recurrent infection — and you’ve given me two treatable clues.”"
    },
    {
     "t": "7–10",
     "h": "Shared plan",
     "d": "Culture plus three-day course. Self-care, vaginal oestrogen, post-coital single dose, then methenamine or daily prophylaxis only if needed. Book a face-to-face review."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Kidney-infection symptoms named, plan if not better, teach-back, thank her for being open."
    }
   ],
   "wordPics": {
    "fail": "Issues another course with no questions, or refuses outright and lectures on resistance; no pyelonephritis screen; never asks about sex or dryness; no culture; no follow-up.",
    "pass": "Screens red flags, treats with a suitable three-day course and a culture, recognises recurrent UTI, gives self-care advice and mentions prophylaxis options and a review.",
    "exc": "All of the above, plus: asks about sex and dryness in a way that visibly relaxes her; offers vaginal oestrogen with an honest explanation; lays out the NG112 ladder as her choice; books a face-to-face review with a chaperone offer; she ends the call relieved rather than judged."
   },
   "avoid": [
    {
     "dont": "“I can’t keep giving you antibiotics — you’re going to become resistant.”",
     "instead": "“I’ll treat you today — and I’d like to help you stop needing these courses at all.”",
     "why": "Stewardship delivered as a scolding loses her; stewardship delivered as a better plan wins both domains."
    },
    {
     "dont": "“Are you sexually active? How many partners?” asked flatly as a checklist.",
     "instead": "“Many women notice these start a day or two after sex — is that something you’ve noticed?”",
     "why": "Normalising first makes disclosure possible; a blunt checklist confirms her fear of being judged."
    },
    {
     "dont": "“It’s just your age, I’m afraid.”",
     "instead": "“Changes around the menopause make infections more likely — and there’s a simple local treatment for that.”",
     "why": "Naming the cause without offering the fix leaves her with a problem and no plan."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Relationship and intimacy",
     "t": "Painful sex and repeated infections after intercourse affect relationships and self-esteem. Embarrassment keeps women from mentioning it; asking sensitively is part of the treatment."
    },
    {
     "h": "Work and time pressure",
     "t": "Wanting it “sorted before the weekend” reflects practical pressure. A plan that cuts future infections saves her more time than repeated calls."
    }
   ],
   "legal": [
    {
     "h": "Remote prescribing",
     "t": "GMC guidance on remote prescribing (Good practice in prescribing and managing medicines and devices, 2021) expects an adequate assessment and access to the records before prescribing — a repeat script without assessment does not meet it."
    }
   ],
   "professional": [
    {
     "h": "Antimicrobial stewardship",
     "t": "Culture-guided treatment and a structured NICE NG112 plan protect her and the wider population from resistance. Document the rationale for each course."
    },
    {
     "h": "Intimate examination",
     "t": "Offer a chaperone for vaginal examination and record the offer and her decision (GMC, Intimate examinations and chaperones, 2024)."
    }
   ],
   "community": [
    {
     "h": "Pharmacy First",
     "t": "The NHS Pharmacy First uncomplicated-UTI pathway excludes women with recurrent UTI, so her care stays with the practice; pharmacists can still support self-care advice."
    },
    {
     "h": "Menopause support",
     "t": "The British Menopause Society and NHS menopause information can help her understand genitourinary symptoms and treatment options."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Fever, rigors, loin pain, nausea or vomiting — possible pyelonephritis (NICE NG111), not a routine repeat script",
     "Visible haematuria not explained by UTI or persisting after treatment — NICE NG12 (updated April 2026) pathway",
     "Pregnancy, abnormal discharge or genital ulcers — change the diagnosis and the drug choice"
    ],
    "psychosocial": [
     "Embarrassment about the link with sex and about vaginal dryness",
     "Impact on her relationship and comfort during sex",
     "Time pressure and the wish to avoid coming in"
    ],
    "ice": [
     "Idea: “It’s the same infection, same antibiotics will fix it”",
     "Concern: it will keep happening and is affecting things at home — too embarrassing to say",
     "Expectation: a quick phone prescription without “making it a thing”"
    ]
   },
   "diagnosis": "“Four infections in a year is what we call recurrent urine infection. The link with sex and the dryness around the menopause are both making infections more likely — and both can be treated.”",
   "diagnosisLay": "“Think of the vaginal lining as the bladder’s front-line defence. Around the menopause that lining gets thinner and drier, so germs get through more easily — especially after sex. Topping up oestrogen locally rebuilds the defence.”",
   "management": {
    "reflectIce": "“You wanted this kept quick, and I understand why — it’s not an easy thing to talk about. I’m really glad you told me, because it means we can stop this happening rather than just treating each one.”",
    "psychosocial": "Normalise the post-coital pattern and the dryness; offer vaginal oestrogen as help for comfort during sex as well as infections; keep the plan practical around her time.",
    "sharedPlan": [
     "Urine culture today; three-day course per NICE NG109 guided by previous sensitivities",
     "Self-care (fluids, voiding after sex, not delaying) and vaginal oestrogen (NICE NG112 / NG23), reviewed within 12 months",
     "If still recurring: post-coital single dose, then methenamine or daily prophylaxis with 6-monthly review"
    ],
    "safetyNet": [
     "Fever, loin pain, vomiting or blood in urine — same-day contact or 111",
     "Not better after the course — call for the culture result; face-to-face review in 2 weeks"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "UTI in women",
    "s": "Case walkthrough · NICE NG109 / NG112",
    "href": "../cases/uti-women.html"
   },
   {
    "ic": "💠",
    "t": "Recurrent UTI protocol",
    "s": "Prophylaxis ladder · referral",
    "href": "management/recurrent-uti.html"
   },
   {
    "ic": "🗺️",
    "t": "Dysuria",
    "s": "Visual algorithm · differentials",
    "href": "algorithms/dysuria.html"
   },
   {
    "ic": "📋",
    "t": "Menopause",
    "s": "Case walkthrough · NICE NG23",
    "href": "../cases/menopause.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is not about antibiotic doses. It is failed by either rubber-stamping the fourth script or refusing it with a lecture, and by never reaching the two treatable contributors she is too embarrassed to raise.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Issuing “the same as last time” after a one-line history.",
     "why": "No red-flag screen, no culture and no recognition of recurrent UTI: “management not in line with current UK best practice” (NICE NG109 / NG112).",
     "fix": "Screen for kidney infection, send a culture, choose the drug by previous sensitivities, and name recurrent UTI out loud."
    },
    {
     "dom": "rto",
     "fail": "Refusing to prescribe until she comes in, and explaining antimicrobial resistance at length.",
     "why": "She has a symptomatic infection today. Withholding treatment to force a review reads as punitive and loses her trust.",
     "fix": "Treat today and invite the review as the route out: “Let’s sort this one, then stop the next.”"
    },
    {
     "dom": "tasks",
     "fail": "Never asking about sex or vaginal dryness.",
     "why": "The post-coital pattern and atrophy are the treatable causes; missing them leaves only more antibiotics.",
     "fix": "Normalise first, then ask: “Many women notice these start after sex — have you?” and “Any dryness or soreness?”"
    },
    {
     "dom": "tasks",
     "fail": "Jumping straight to daily antibiotic prophylaxis.",
     "why": "NICE NG112 orders the ladder: self-care, vaginal oestrogen, single-dose after a trigger, then methenamine or daily prophylaxis.",
     "fix": "Offer the steps in order and explain you step up only if needed, with review at 6 months."
    },
    {
     "dom": "rto",
     "fail": "Hearing “it’s embarrassing” and moving on to the next question.",
     "why": "“Does not respond to the patient’s cues.” Her embarrassment is the hidden agenda of the case.",
     "fix": "Pause and de-shame: “It isn’t embarrassing to me, and I’m glad you said it — it helps me help you.”"
    },
    {
     "dom": "gs",
     "fail": "Closing with “come back if it doesn’t get better”.",
     "why": "Vague safety-netting on a remote prescription is a standard failing statement.",
     "fix": "Name fever, loin pain, vomiting and blood in the urine; say who to call and when; book the face-to-face review."
    },
    {
     "dom": "gs",
     "fail": "Using jargon — “GSM”, “atrophic vaginitis”, “prophylaxis”.",
     "why": "“Language not easily understood by the patient.”",
     "fix": "“Dryness around the menopause”, “a single tablet after sex”, “a cream used in the vagina”."
    }
   ]
  }
 },
 "sicknote-unsupported": {
  "stem": {
   "name": "Carl Dobbs",
   "age": "44-year-old man",
   "pmh": [
    "Back strain (current episode)"
   ],
   "meds": [
    "No regular medication recorded"
   ],
   "allergy": "No known drug allergies",
   "recent": "Works as a warehouse operative. No previous fit notes on file for this episode.",
   "reason": "Video consultation requesting a fit note for back pain: \"three months off\"."
  },
  "knowledge": {
   "guideline": "DWP fit note guidance for healthcare professionals · Social Security (Medical Evidence) Regulations 1976 (as amended) · NICE NG59 (low back pain and sciatica) · GMC Good Medical Practice 2024",
   "summary": "A fit note records your honest clinical opinion of how a condition affects work. A mild, improving mechanical back strain supports at most a short note, usually \"may be fit for work\" with adjustments, not three months off.",
   "points": [
    {
     "h": "What a fit note is",
     "t": "The Statement of Fitness for Work gives two options: \"not fit for work\" or \"may be fit for work\" with suggested changes (phased return, altered hours, amended duties, workplace adaptations). Employees self-certify for the first 7 days. In the first 6 months of a condition a fit note can cover up to 3 months, so the question is clinical honesty, not the legal limit."
    },
    {
     "h": "Honesty in documents",
     "t": "Doctors must be honest and accurate in any certificate they sign and must not sign documents they believe to be false or misleading (GMC Good Medical Practice 2024). Signing to placate or to avoid confrontation is a probity failure."
    },
    {
     "h": "Assess the back",
     "t": "Screen for red flags (cauda equina symptoms, fever, weight loss, history of cancer, significant trauma, progressive neurology). With none, NICE NG59 advises no routine imaging, encouragement to stay active and return to normal activity including work, and a risk-stratification tool such as STarT Back."
    },
    {
     "h": "Staying in work helps recovery",
     "t": "NICE NG59 supports return to work as part of recovery for low back pain. A \"may be fit\" note with lighter duties or a phased return usually serves the patient better than a long absence."
    },
    {
     "h": "Look for the real driver",
     "t": "A disproportionate request often reflects something else: a workplace grievance or disciplinary, money pressure, or genuine stress and low mood. Explore it without judgement. Work-related stress or depression is a legitimate condition to assess on its own terms (NICE NG222 for depression)."
    },
    {
     "h": "Other certifiers and support",
     "t": "Since July 2022, nurses, pharmacists, physiotherapists and occupational therapists can also certify fit notes. Employer occupational health, Acas guidance on grievance and disciplinary procedures, and Citizens Advice for money problems are the right routes for the non-medical issues."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello Mr Dobbs, thanks for joining. I can see you want to talk about your back and some time off work. Tell me what's been happening.",
    "dom": "rto",
    "why": "Open question that acknowledges his request"
   },
   {
    "who": "pt",
    "text": "Right, doc, I just need you to sign me off for three months with my back. It's killing me. I don't need an examination or twenty questions. My mate's GP does it no problem."
   },
   {
    "who": "dr",
    "text": "I can hear you're fed up, and I do want to help. Anything I put on a fit note has to be based on what I find, so I need to understand what's going on. It won't take long. Is that fair?",
    "dom": "rto",
    "why": "Stays calm, explains why assessment is needed, seeks agreement"
   },
   {
    "who": "pt",
    "text": "(sighs) Go on then."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "When did it start, and what were you doing?",
    "dom": "tasks",
    "why": "Onset and mechanism"
   },
   {
    "who": "pt",
    "text": "Lifting at work. It was bad at first. It's easing a bit, to be fair."
   },
   {
    "who": "dr",
    "text": "Any pain, pins and needles or weakness down the legs? Any numbness around your bottom or between your legs, or trouble passing water or controlling your bowels?",
    "dom": "tasks",
    "why": "Screens for sciatica and cauda equina"
   },
   {
    "who": "pt",
    "text": "No, none of that."
   },
   {
    "who": "dr",
    "text": "Any fevers, weight loss, or a history of cancer?",
    "dom": "tasks",
    "why": "Completes the red-flag screen"
   },
   {
    "who": "pt",
    "text": "No."
   },
   {
    "who": "dr",
    "text": "Could you stand back from the camera for me? Bend forward as far as is comfortable, then lean back and to each side. Now walk across the room.",
    "dom": "tasks",
    "why": "Proportionate remote examination"
   },
   {
    "who": "pt",
    "text": "(moves freely, slight stiffness on bending) There. It's stiff, but I can do it."
   },
   {
    "who": "dr",
    "text": "Thank you. That's reassuring. You're moving well, there's nothing to suggest anything serious, and it sounds like a muscle strain that's already improving.",
    "dom": "tasks",
    "why": "Shares the finding honestly"
   },
   {
    "phase": "Exploring the request",
    "clock": "4–6 min",
    "who": "dr",
    "text": "Can I ask something? Three months is a long time off for a back that's getting better. I get the sense there might be more going on. Is something making work hard at the moment?",
    "dom": "rto",
    "why": "Explores the discrepancy without accusing"
   },
   {
    "who": "pt",
    "text": "(pause) There's a grievance going on. They've started a disciplinary. I can't face walking back in there."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me. That sounds really stressful. How's it affecting you, in yourself?",
    "dom": "rto",
    "why": "Validates and opens the psychosocial picture"
   },
   {
    "who": "pt",
    "text": "It's doing my head in. And if I lose this job, I don't know how I'll pay the bills."
   },
   {
    "who": "dr",
    "text": "How's your mood been, and your sleep? Have things ever felt so bad you've thought about harming yourself?",
    "dom": "tasks",
    "why": "Screens for depression and risk, since stress may be a genuine condition"
   },
   {
    "who": "pt",
    "text": "Nothing like that. Just stressed and angry."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "That makes much more sense of today, and I'm glad you've told me. I need to be straight with you about the note. A fit note is my honest medical opinion of how a condition affects your work. For a back strain that's improving, I can't honestly sign three months off. I'd be putting my name to something that isn't true.",
    "dom": "tasks",
    "why": "Declines the unsupported certificate with a clear, honest reason"
   },
   {
    "who": "pt",
    "text": "So you're not going to help me."
   },
   {
    "who": "dr",
    "text": "I am going to help, just not in that way. What I can do, honestly, is a note that says you may be fit for work with changes: lighter duties and no heavy lifting for a few weeks. People with back strains usually recover faster staying active and at work.",
    "dom": "tasks",
    "why": "Offers the clinically appropriate alternative"
   },
   {
    "who": "pt",
    "text": "And the disciplinary? Lighter duties won't fix that."
   },
   {
    "who": "dr",
    "text": "You're right, and a sick note wouldn't fix it either. It would only put it off. The grievance needs sorting properly. Acas and Citizens Advice can explain your rights and help with money worries, and if you're in a union they can support you at meetings.",
    "dom": "tasks",
    "why": "Separates the work dispute from the medical question and signposts"
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "If the stress starts to affect your sleep, mood or ability to function, that's a real health problem and I'd assess it properly, with support or a note if it's genuinely needed. I'd also suggest occupational health, if your work has it. Does that feel like a fair plan?",
    "dom": "rto",
    "why": "Leaves room for genuine stress and shares the plan"
   },
   {
    "who": "pt",
    "text": "I suppose. I thought you'd just refuse and that'd be it."
   },
   {
    "who": "dr",
    "text": "No. The three months wasn't the right answer, but you came with a real problem and I want to help with that. For the back, keep moving, use simple painkillers if you need them, and avoid heavy lifting for now.",
    "dom": "gs",
    "why": "Holds the line kindly and gives practical back advice"
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "If you develop numbness between your legs, trouble passing urine or controlling your bowels, or weakness in your legs, that's an emergency: go straight to A&E. Otherwise, book in with me in two weeks and we'll see how the back and the work situation are going.",
    "dom": "gs",
    "why": "Cauda equina safety-net and defined follow-up"
   },
   {
    "who": "pt",
    "text": "Alright."
   },
   {
    "who": "dr",
    "text": "Just to check we're on the same page: what are you going to take away from today?",
    "dom": "gs",
    "why": "Teach-back"
   },
   {
    "who": "pt",
    "text": "Lighter duties note, keep moving, ring Acas about the grievance, come back in two weeks, and A&E if I get numbness or waterworks trouble."
   },
   {
    "who": "dr",
    "text": "Spot on. I'll document what we found and why the note says what it does. Thanks for being open with me.",
    "dom": "rto",
    "why": "Documents honestly and ends on a respectful note"
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Open question; acknowledges the request without agreeing or arguing; explains why assessment matters.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Job demands, the grievance and disciplinary, money worries, stress, mood and sleep.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Picked up the mismatch between the request and an improving back, and asked what else was going on.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (entitled to a note); concern (disciplinary and bills); expectation (three months, no questions).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "Focused remote examination on camera (movement, gait); offers face-to-face if findings are unclear.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Mechanical strain against sciatica and serious causes; considers work stress and depression as separate issues.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Asks about cauda equina symptoms, fever, weight loss, cancer history and neurology.",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Mild improving mechanical back strain with no red flags; separate workplace conflict.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "\"May be fit for work\" with amended duties or phased return; honest refusal of three months; NICE NG59 advice to stay active.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Explores and screens stress and mood; occupational health; Acas, union and Citizens Advice signposting.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Cauda equina safety-net; review in two weeks; honest documentation of assessment and rationale.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Professional & ethical dilemmas",
    "Health disadvantage & vulnerabilities"
   ],
   "stem": {
    "name": "Carl Dobbs",
    "age": "44 years · male",
    "pmh": [
     "Back strain, current episode"
    ],
    "meds": [
     "Nil regular"
    ],
    "allergy": "NKDA",
    "recent": "⚠ Warehouse operative. No fit notes issued for this episode. Booking note: \"needs sick note for back.\"",
    "reason": "Video appointment: \"sick note, three months.\""
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Open and de-escalate",
     "d": "He demands three months with no questions. Stay calm; explain why you need to assess and ask for his agreement."
    },
    {
     "t": "1–4",
     "h": "Focused back assessment",
     "d": "Onset, trajectory, sciatica, cauda equina, systemic red flags. Watch him move on camera."
    },
    {
     "t": "4–6",
     "h": "Explore the mismatch",
     "d": "\"Three months is a long time for a back that's improving. Is something else going on?\" Grievance, money, mood."
    },
    {
     "t": "6–10",
     "h": "Honest note and real help",
     "d": "Decline three months with a clear reason. Offer \"may be fit\" with amended duties. Signpost Acas, union, Citizens Advice, OH."
    },
    {
     "t": "10–12",
     "h": "Safety-net and close",
     "d": "Cauda equina symptoms named. Review in two weeks. Teach-back. Document the assessment."
    }
   ],
   "wordPics": {
    "fail": "Signs three months to avoid conflict, or refuses flatly without examining or exploring; argues with him; never finds out about the grievance; no safety-net.",
    "pass": "Assesses the back and excludes red flags; declines the three-month note with a clear reason; offers a \"may be fit\" note with adjustments; asks about work; safety-nets for cauda equina.",
    "exc": "All of the above, plus: de-escalates early by seeking agreement; explores the mismatch without accusing; surfaces the grievance and money worries; screens mood; separates the workplace problem from the medical one and signposts specifically; leaves the door open for genuine stress; he ends the consultation feeling helped rather than refused."
   },
   "avoid": [
    {
     "dont": "\"I'm not signing that. Your back's fine.\"",
     "instead": "\"I can't honestly sign three months for a back that's improving, but I can do a note for lighter duties, and I'd like to help with what's really going on.\"",
     "why": "A flat refusal escalates conflict and loses the Relating domain."
    },
    {
     "dont": "\"Okay, I'll do a month and we'll see.\"",
     "instead": "\"The note has to match what I find. Here's what I can honestly offer.\"",
     "why": "A compromise certificate that the findings don't support is still dishonest."
    },
    {
     "dont": "\"Are you just trying to avoid work?\"",
     "instead": "\"Three months is a long time for a back that's settling. Is something else making work hard?\"",
     "why": "Accusation shuts down disclosure; curiosity opens it."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Workplace conflict",
     "t": "Grievance and disciplinary processes are a common, hidden driver of sickness certification requests. Avoiding them rarely helps and can worsen the outcome."
    },
    {
     "h": "Financial pressure",
     "t": "Fear of losing income shapes behaviour. Statutory Sick Pay is paid by the employer; Citizens Advice and debt advice services can help with money worries."
    }
   ],
   "legal": [
    {
     "h": "Fit note rules",
     "t": "Self-certification for the first 7 days; a fit note can cover up to 3 months in the first 6 months of a condition (Social Security (Medical Evidence) Regulations 1976, as amended). Suggested adjustments are advice; the employer decides whether it can make them."
    },
    {
     "h": "Employment rights",
     "t": "Acas Code of Practice on disciplinary and grievance procedures sets out the process; a union representative or companion can accompany him to hearings."
    }
   ],
   "professional": [
    {
     "h": "Probity",
     "t": "GMC Good Medical Practice 2024: be honest and trustworthy in documents, and do not sign anything you believe to be false or misleading. Document findings and the reasons for the note issued."
    },
    {
     "h": "Managing aggression",
     "t": "Stay calm and courteous; set limits if behaviour becomes abusive. Follow practice policy on unacceptable behaviour, but do not let pressure change clinical judgement."
    }
   ],
   "community": [
    {
     "h": "Where to get help",
     "t": "Acas helpline for workplace disputes; trade union if a member; Citizens Advice for employment and money advice; NHS Talking Therapies if stress or low mood develops; employer occupational health."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Saddle anaesthesia, bladder or bowel dysfunction, bilateral leg symptoms: suspected cauda equina, emergency referral",
     "Fever, weight loss, history of cancer, night pain, significant trauma",
     "Progressive leg weakness or neurological deficit"
    ],
    "psychosocial": [
     "Warehouse work with heavy lifting",
     "Grievance and disciplinary he is avoiding",
     "Money worries and fear of job loss; stress, mood and sleep"
    ],
    "ice": [
     "Idea: \"I'm entitled to three months off; the GP should just sign it.\"",
     "Concern: facing the disciplinary; paying the bills",
     "Expectation: a three-month note with no questions"
    ]
   },
   "diagnosis": "\"You're moving well, there are no worrying signs, and this is a muscle strain that's already getting better.\"",
   "diagnosisLay": "\"Think of it like a sprained ankle in your back. It's sore and stiff, but gentle movement helps it heal faster than rest.\"",
   "management": {
    "reflectIce": "\"It sounds like the thing that's really weighing on you is the disciplinary and the money, more than the back. That's something we can actually help with.\"",
    "psychosocial": "Separate the medical question from the workplace one. Signpost Acas, union and Citizens Advice for the dispute and finances; leave the door open to assess genuine stress.",
    "sharedPlan": [
     "Fit note: \"may be fit for work\" with amended duties, no heavy lifting, for a short period",
     "Stay active; simple analgesia; no imaging (NICE NG59)",
     "Occupational health via employer; Acas, union and Citizens Advice",
     "Assess stress and mood if they develop; review in two weeks"
    ],
    "safetyNet": [
     "Numbness between the legs, bladder or bowel problems, leg weakness: A&E immediately",
     "Worsening mood or thoughts of self-harm: contact the practice or 111"
    ]
   }
  },
  "links": [
   {
    "ic": "📝",
    "t": "Fit Note Helper",
    "s": "Med3 rules · may be fit options",
    "href": "fit-note.html"
   },
   {
    "ic": "📋",
    "t": "Low back pain",
    "s": "Case walkthrough · NICE NG59",
    "href": "../cases/low-back-pain.html"
   },
   {
    "ic": "🗺️",
    "t": "Back pain pathway",
    "s": "Visual algorithm · red flags",
    "href": "algorithms/back-pain.html"
   },
   {
    "ic": "💠",
    "t": "Depression",
    "s": "Management · NICE NG222",
    "href": "management/depression.html"
   }
  ],
  "pitfalls": {
   "intro": "This station tests probity and relationship skills under pressure. Candidates fail by giving in, by refusing without exploring, or by getting into an argument.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Signing three months, or a \"compromise\" month, to end the confrontation.",
     "why": "A fit note must reflect your honest assessment (GMC Good Medical Practice 2024). An unsupported certificate is a probity failure however it is negotiated.",
     "fix": "\"The note has to match what I find. Here's what I can honestly put.\""
    },
    {
     "dom": "tasks",
     "fail": "Refusing without examining or screening for red flags.",
     "why": "The decision must rest on assessment, and cauda equina must not be missed.",
     "fix": "Ask the red-flag questions and watch him move on camera; offer face-to-face if uncertain."
    },
    {
     "dom": "rto",
     "fail": "Arguing, lecturing about benefit fraud, or accusing him of malingering.",
     "why": "Confrontation escalates aggression and ends disclosure; the grievance never surfaces.",
     "fix": "Curiosity instead of accusation: \"Is something else making work hard at the moment?\""
    },
    {
     "dom": "tasks",
     "fail": "Declining the note and stopping there, with no alternative.",
     "why": "The \"may be fit\" option and signposting are the management plan; a bare refusal scores little.",
     "fix": "Offer amended duties or a phased return, plus Acas, union, Citizens Advice and occupational health."
    },
    {
     "dom": "tasks",
     "fail": "Ignoring the stress because the back request was unsupported.",
     "why": "Genuine work-related stress or depression is a legitimate condition that deserves assessment.",
     "fix": "Screen mood and sleep, and say you would assess stress properly if it is affecting his health."
    },
    {
     "dom": "gs",
     "fail": "Poor time use: ten minutes of arguing about the note, no safety-net.",
     "why": "\"Poor time management\" and non-specific safety-netting are common failing feedback.",
     "fix": "Be explaining the honest note by minute 6; name cauda equina symptoms before closing."
    },
    {
     "dom": "gs",
     "fail": "Failing to document the findings and the reason for the note.",
     "why": "Clear records protect the patient and you if the certificate is later questioned.",
     "fix": "Say you will record the assessment and rationale, and do it."
    }
   ]
  }
 },
 "trans-bridging": {
  "stem": {
   "name": "Robyn Achebe",
   "age": "26-year-old trans woman",
   "pmh": [
    "Gender incongruence — on gender-affirming hormones for 3 years",
    "Newly registered after moving area"
   ],
   "meds": [
    "Oestradiol — previously prescribed privately, not yet on practice repeat",
    "Anti-androgen — previously prescribed privately, not yet on practice repeat"
   ],
   "allergy": "No known drug allergies",
   "recent": "New registration. NHS gender identity clinic referral in place with a long wait. Private hormone supply has ended.",
   "reason": "Telephone call: hormones run out in a week — asking for a bridging prescription."
  },
  "knowledge": {
   "guideline": "GMC ethical guidance — Trans healthcare (bridging prescriptions) · RCGP position statement on the GP’s role in transgender care (2024) · NICE NG225 — Self-harm (2022)",
   "summary": "A GP may, but is not obliged to, issue a bridging prescription to someone established on hormones who is at risk of self-sourcing or of self-harm, after seeking gender-specialist advice and at the lowest acceptable dose. Robyn’s hint of suicidal thoughts makes this a safety consultation as well as a prescribing one.",
   "points": [
    {
     "h": "GMC on bridging",
     "t": "GMC guidance: a GP may consider a bridging prescription where a patient is already self-medicating with unregulated hormones, or is highly likely to, and it is intended to reduce the risk of self-harm or suicide. Seek gender-specialist advice and prescribe the lowest acceptable dose. It is harm reduction, not starting treatment."
    },
    {
     "h": "RCGP position",
     "t": "The RCGP (2024) does not see initiating hormones as part of the core GP role without extended expertise. Robyn is not asking for initiation — she is established on treatment. Explain openly what you can and cannot do, and do not hide behind “not my area”."
    },
    {
     "h": "Assess suicide risk",
     "t": "Ask directly about thoughts, plans, intent, previous self-harm and what keeps her safe. NICE NG225: do not use risk tools or scales to predict suicide or allocate care; assess needs and make a safety plan with the person."
    },
    {
     "h": "Prescribe safely",
     "t": "Confirm the current regimen from evidence (previous prescriptions or clinic letters). Baseline blood pressure, weight, smoking status and bloods as advised by the specialist (typically hormone levels, liver function, lipids, prolactin, and U&E if the anti-androgen is spironolactone). Oestrogen raises VTE risk; transdermal routes carry less risk than oral (BNF)."
    },
    {
     "h": "Specialist link and referral",
     "t": "Confirm the NHS gender identity clinic referral is active and record the date; seek advice from a gender specialist or endocrinologist and aim for a shared-care arrangement. Keep monitoring whether or not you prescribe."
    },
    {
     "h": "Respect and records",
     "t": "Use her name and pronouns and update the record. Gender reassignment is a protected characteristic under the Equality Act 2010. Offer screening by anatomy rather than recorded gender."
    }
   ]
  },
  "model": [
   {
    "phase": "Opening and trust",
    "clock": "0–1 min",
    "who": "dr",
    "text": "Hello, is that Robyn Achebe? It’s Dr Lee — welcome to the practice. Can I check your date of birth, and that you’re somewhere private? And which pronouns would you like me to use?",
    "dom": "rto",
    "why": "Identity and privacy checks; asks pronouns naturally"
   },
   {
    "who": "pt",
    "text": "She and her. And yes, I’m on my own. I’m honestly really anxious about this call. I’m a trans woman, I’ve been on hormones three years, my supply runs out in a week, and the clinic waiting list is years long. I’ve had GPs refuse before like it’s not their problem."
   },
   {
    "who": "dr",
    "text": "Thank you for telling me, Robyn, and I’m sorry you’ve had that experience. I want to help you, and I’ll be honest with you about how. Can we go through things together?",
    "dom": "rto",
    "why": "Acknowledges past rejection and commits to honesty"
   },
   {
    "who": "pt",
    "text": "Yes. Thank you. I didn’t expect that."
   },
   {
    "phase": "Data gathering",
    "clock": "1–4 min",
    "who": "dr",
    "text": "Tell me about your treatment so far — what you take, how, and who has been prescribing it.",
    "dom": "tasks",
    "why": "Establishes the regimen and its source"
   },
   {
    "who": "pt",
    "text": "Oestradiol and an anti-androgen. I started through a specialist service, then went private. That’s fallen through now. I should be able to find the old prescriptions and letters."
   },
   {
    "who": "dr",
    "text": "That’s really useful — could you send copies of those letters and prescriptions to the practice? I’ll need them to confirm the exact doses. And have you had any blood tests or blood-pressure checks recently?",
    "dom": "tasks",
    "why": "Seeks evidence of the regimen and monitoring history"
   },
   {
    "who": "pt",
    "text": "I’ll look them out and send them today. Bloods — not for a while."
   },
   {
    "who": "dr",
    "text": "Okay. Do you smoke, and have you or your family ever had a clot in the leg or lung?",
    "dom": "tasks",
    "why": "Screens VTE risk relevant to oestrogen"
   },
   {
    "who": "pt",
    "text": "No smoking, no clots that I know of."
   },
   {
    "phase": "Exploring distress and risk",
    "clock": "4–6 min",
    "who": "dr",
    "text": "You said you can’t go back to how you felt before. Can you tell me what you mean?",
    "dom": "rto",
    "why": "Follows the emotional cue with an open question"
   },
   {
    "who": "pt",
    "text": "Before hormones I was in a really dark place. The thought of it stopping… I don’t know if I could do it again."
   },
   {
    "who": "dr",
    "text": "Thank you for trusting me with that. I need to ask directly, because it matters as much as the prescription: have you had thoughts of ending your life, or of harming yourself?",
    "dom": "tasks",
    "why": "Asks directly about suicidal thoughts"
   },
   {
    "who": "pt",
    "text": "Sometimes. When I think about running out. I haven’t made any plans. I just don’t want to feel like that again."
   },
   {
    "who": "dr",
    "text": "I’m glad you told me. Have you ever acted on thoughts like that, and what helps keep you safe when they come?",
    "dom": "tasks",
    "why": "Explores history, intent and protective factors"
   },
   {
    "who": "pt",
    "text": "No, never acted on them. The hormones help. And knowing someone is actually helping."
   },
   {
    "who": "dr",
    "text": "And if the prescription didn’t happen, what would you do?",
    "dom": "tasks",
    "why": "Explores the self-sourcing risk"
   },
   {
    "who": "pt",
    "text": "Honestly? I’d probably buy them online. I know that’s risky."
   },
   {
    "phase": "Explanation",
    "clock": "6–8 min",
    "who": "dr",
    "text": "Thank you for being honest. Here’s where I stand. The GMC’s guidance allows a GP to give what’s called a bridging prescription — continuing hormones you’re already established on — when stopping would put you at risk, including buying them unregulated or your mental health. I’d do that with advice from a gender specialist, at the right dose, with monitoring. I can’t start new treatments or change your regimen myself, but I can help you avoid a gap.",
    "dom": "tasks",
    "why": "Explains the GMC bridging criteria honestly, including limits"
   },
   {
    "who": "pt",
    "text": "So you’ll actually do it?"
   },
   {
    "who": "dr",
    "text": "I’m going to work to make it happen before you run out. The one thing I need is the confirmed doses from your letters and a quick specialist check. Buying online would mean unknown doses and no monitoring, and that’s exactly what I want to avoid.",
    "dom": "tasks",
    "why": "Commits to a timely plan and names the harm-reduction rationale"
   },
   {
    "who": "pt",
    "text": "That’s more than I hoped for."
   },
   {
    "phase": "Shared management",
    "clock": "8–11 min",
    "who": "dr",
    "text": "Here’s the plan. Send the letters today. I’ll contact a gender specialist for advice this week. I’d like you to come in for a blood-pressure check and bloods. I’ll also confirm your clinic referral is active and note the date, and update your record with your name and pronouns. Does that work?",
    "dom": "gs",
    "why": "Concrete plan with monitoring, specialist advice, referral check and records"
   },
   {
    "who": "pt",
    "text": "Yes. That’s brilliant."
   },
   {
    "who": "dr",
    "text": "Now, let’s make a plan for those darker thoughts. If they get stronger or you start to feel unsafe, call NHS 111 and choose the mental health option, contact Samaritans on 116 123 any time, or call 999 or go to A&E if you’re in immediate danger. Is there someone you can talk to if things feel hard?",
    "dom": "gs",
    "why": "Safety plan with specific crisis routes"
   },
   {
    "who": "pt",
    "text": "There are people I can talk to. I’ll reach out."
   },
   {
    "phase": "Safety-net and close",
    "clock": "11–12 min",
    "who": "dr",
    "text": "Good. I’ll ring you in two or three days with an update, well before you run out. Could you tell me what you’re doing next, so I know I’ve been clear?",
    "dom": "rto",
    "why": "Defined follow-up and teach-back"
   },
   {
    "who": "pt",
    "text": "Send my letters, book bloods and a blood-pressure check, don’t buy online, and ring 111 or Samaritans if I feel unsafe. You’ll call me in a few days."
   },
   {
    "who": "dr",
    "text": "That’s it. You came in expecting to have to fight for this — you don’t have to fight me. Anything else before we finish?",
    "dom": "rto",
    "why": "Reflects her hidden fear and shares the floor"
   },
   {
    "who": "pt",
    "text": "No. Thank you. I can breathe again."
   }
  ],
  "scTasks": [
   {
    "t": "Opens and explores the problem",
    "d": "Checked identity and privacy; asked pronouns; let her explain the situation and her previous experiences.",
    "pts": 1
   },
   {
    "t": "Explores psychosocial context",
    "d": "Move to a new area, loss of private supply, years-long wait, support network.",
    "pts": 1
   },
   {
    "t": "Identifies and follows cues",
    "d": "Followed “I can’t go back to how I felt before” into a direct suicide question.",
    "pts": 1
   },
   {
    "t": "Discovers ICE",
    "d": "Idea (needs a bridging script); concern (refusal again, crashing, suicidal thoughts); expectation (help and respect).",
    "pts": 2
   },
   {
    "t": "Plans appropriate examination & tests",
    "d": "BP, weight, VTE risk, baseline bloods as advised by the specialist; evidence of current regimen.",
    "pts": 1
   },
   {
    "t": "Generates & tests hypotheses",
    "d": "Risk from abrupt cessation, self-sourcing, depression or suicidality, oestrogen-related VTE risk.",
    "pts": 1
   },
   {
    "t": "Rules in/out serious disease",
    "d": "Suicide risk explored (thoughts, plans, history, protective factors) without relying on a risk score (NICE NG225).",
    "pts": 2
   },
   {
    "t": "Reaches a working diagnosis",
    "d": "Established hormone treatment at risk of interruption, with suicidal ideation and self-sourcing risk — meets GMC bridging criteria.",
    "pts": 2
   },
   {
    "t": "Offers a safe, patient-centred plan",
    "d": "Bridging prescription after specialist advice at the lowest acceptable dose; monitoring; shared care aim; GIC referral confirmed.",
    "pts": 2
   },
   {
    "t": "Manages comorbidity & contributors",
    "d": "Mental health support and safety plan; record updated with name and pronouns; anatomy-based screening.",
    "pts": 1
   },
   {
    "t": "Provides follow-up and safety net",
    "d": "Call-back within days, before supply runs out; 111 mental health option, Samaritans, 999/A&E.",
    "pts": 1
   }
  ],
  "extras": {
   "ceg": [
    "Gender, reproductive & sexual health",
    "Mental health & addiction",
    "Professional & ethical dilemmas"
   ],
   "stem": {
    "name": "Robyn Achebe",
    "age": "26 years · trans woman",
    "pmh": [
     "Gender incongruence — on hormones 3 years"
    ],
    "meds": [
     "Oestradiol (private prescriber)",
     "Anti-androgen (private prescriber)"
    ],
    "allergy": "NKDA",
    "recent": "⚠ New registration. Private prescribing has ended. NHS gender identity clinic referral — long wait.",
    "reason": "Telephone: “My hormones run out next week.”"
   },
   "timeMap": [
    {
     "t": "0–1",
     "h": "Build trust",
     "d": "Identity, privacy, pronouns. Acknowledge past poor care."
    },
    {
     "t": "1–4",
     "h": "Treatment history",
     "d": "Regimen and source, evidence, monitoring history, VTE risk, smoking."
    },
    {
     "t": "4–6",
     "h": "Risk",
     "d": "Follow the cue into suicidal thoughts, history, protective factors and self-sourcing."
    },
    {
     "t": "6–10",
     "h": "Explain and plan",
     "d": "GMC bridging criteria and your limits; specialist advice; bloods and BP; referral check; record update."
    },
    {
     "t": "10–12",
     "h": "Safety plan and close",
     "d": "Crisis routes, call-back before supply ends, teach-back."
    }
   ],
   "wordPics": {
    "fail": "Refuses on “not my expertise” and signposts the waiting list; misgenders her; never asks about suicidal thoughts; or prescribes unknown doses with no advice or monitoring.",
    "pass": "Respectful; asks about suicidal thoughts; knows GMC bridging guidance; plans specialist advice and monitoring; checks the referral; gives crisis numbers.",
    "exc": "All of the above, plus: explains both the GMC position and the limits of the GP role transparently; explores self-sourcing and names it as the harm being reduced; gets the regimen evidenced; commits to a timeline before the supply runs out; safety plan co-produced; she ends the call feeling respected rather than processed."
   },
   "avoid": [
    {
     "dont": "“I’m afraid hormones aren’t something GPs can prescribe — you’ll have to wait for the clinic.”",
     "instead": "“The GMC’s guidance allows a bridging prescription in situations like yours — let’s work out how to do it safely.”",
     "why": "A flat refusal ignores GMC guidance and leaves her at risk of self-harm and self-sourcing."
    },
    {
     "dont": "“So when did you decide you were trans?”",
     "instead": "“Tell me about your treatment so far.”",
     "why": "Intrusive curiosity about identity is othering and irrelevant to the task."
    },
    {
     "dont": "“You’re not going to do anything silly, are you?”",
     "instead": "“Have you had thoughts of ending your life, or of harming yourself?”",
     "why": "A leading question invites a “no”; a direct question gets the truth."
    }
   ]
  },
  "kb": {
   "social": [
    {
     "h": "Minority stress and access",
     "t": "Trans people often meet discrimination in healthcare and face very long waits for gender services, which drives distress, disengagement and self-sourcing."
    },
    {
     "h": "Cost and supply",
     "t": "Private prescribing and monitoring are costly; when funding ends, people are pushed to unregulated online supply."
    }
   ],
   "legal": [
    {
     "h": "Equality Act 2010",
     "t": "Gender reassignment is a protected characteristic. Refusing care or treating her less favourably because she is trans may be unlawful discrimination."
    },
    {
     "h": "Records",
     "t": "Update her name and title on request. If she holds a Gender Recognition Certificate, information about her gender history is protected (Gender Recognition Act 2004, s22)."
    }
   ],
   "professional": [
    {
     "h": "GMC guidance",
     "t": "GMC Good medical practice (2024): personal beliefs must not affect care. GMC trans healthcare guidance sets out when bridging may be considered and expects specialist advice and monitoring."
    },
    {
     "h": "Prescribing responsibility",
     "t": "The prescriber takes responsibility. Confirm the regimen, seek specialist advice, document the rationale and risk discussion, and agree shared care where possible."
    }
   ],
   "community": [
    {
     "h": "Support",
     "t": "Samaritans (116 123), NHS 111 mental health option, LGBT+ helplines such as Switchboard, and local trans peer-support groups."
    }
   ]
  },
  "playbook": {
   "history": {
    "redFlags": [
     "Suicidal thoughts with a plan, intent or previous attempts — same-day mental health assessment",
     "Plans to self-source unregulated hormones — unknown doses, no monitoring",
     "Personal or family history of VTE, smoking, or high BP — affects oestrogen safety"
    ],
    "psychosocial": [
     "Recent move and new registration",
     "Past rejection by GPs and exhaustion at having to justify herself",
     "Her support network — who she can talk to"
    ],
    "ice": [
     "Idea: she needs a bridging prescription to avoid running out",
     "Concern: being refused again, “crashing”, and the return of suicidal thoughts",
     "Expectation: help and to be treated with respect"
    ]
   },
   "diagnosis": "“You’re established on hormones, the supply is about to stop, and stopping would put your mental health and your safety at risk. That is exactly the situation GMC guidance on bridging prescriptions is meant for.”",
   "diagnosisLay": "“A bridging prescription is like a temporary bridge over a gap in the road — it keeps you moving safely until the specialist service can take over again.”",
   "management": {
    "reflectIce": "“You expected another refusal and you’re frightened of going back to how you felt before. I’m not going to leave you with a gap.”",
    "psychosocial": "Affirm her identity, update the record, encourage her to use her own support network, and offer ongoing mental health support alongside the prescription.",
    "sharedPlan": [
     "Obtain evidence of the current regimen; gender-specialist advice this week; bridging prescription at the lowest acceptable dose (GMC)",
     "Baseline BP, weight and bloods as advised; VTE risk review; aim for shared care",
     "Confirm the GIC referral and date; name and pronouns updated; anatomy-based screening"
    ],
    "safetyNet": [
     "Crisis routes: NHS 111 mental health option, Samaritans 116 123, 999 or A&E if in immediate danger",
     "Call-back within 2–3 days, before the supply runs out; ongoing review"
    ]
   }
  },
  "links": [
   {
    "ic": "📋",
    "t": "Gender dysphoria",
    "s": "Case walkthrough · GMC guidance",
    "href": "../cases/gender-dysphoria.html"
   },
   {
    "ic": "💠",
    "t": "Gender dysphoria protocol",
    "s": "Bridging · monitoring · screening",
    "href": "management/gender-dysphoria.html"
   },
   {
    "ic": "📋",
    "t": "Depression",
    "s": "Case walkthrough · risk assessment",
    "href": "../cases/depression.html"
   },
   {
    "ic": "💠",
    "t": "Depression protocol",
    "s": "Assessment · NICE NG222",
    "href": "management/depression.html"
   }
  ],
  "pitfalls": {
   "intro": "This station is failed by treating it as a prescribing question alone. The marks sit in respect, a direct suicide question, and an honest, workable bridging plan.",
   "items": [
    {
     "dom": "tasks",
     "fail": "Refusing because “hormones are specialist-only” and signposting the waiting list.",
     "why": "GMC guidance allows bridging in exactly this situation. A refusal leaves her at risk of self-harm and self-sourcing.",
     "fix": "Explain the GMC position, seek specialist advice, and commit to a timeline before the supply ends."
    },
    {
     "dom": "tasks",
     "fail": "Prescribing whatever she says she takes, with no evidence, advice or monitoring.",
     "why": "The GMC expects specialist advice, the lowest acceptable dose and monitoring.",
     "fix": "Get the letters, check BP and bloods, seek advice, and document the rationale."
    },
    {
     "dom": "tasks",
     "fail": "Missing the suicide risk.",
     "why": "“I can’t go back to how I felt before” is a cue. Missing it is unsafe.",
     "fix": "Ask directly about thoughts, plans and history, and co-produce a safety plan (NICE NG225)."
    },
    {
     "dom": "rto",
     "fail": "Misgendering or asking intrusive questions about her identity.",
     "why": "It repeats the rejection she expected and breaks trust.",
     "fix": "Ask pronouns early, use her name, and keep questions relevant to her treatment."
    },
    {
     "dom": "rto",
     "fail": "Hiding behind policy — “it’s not my area”.",
     "why": "Examiners mark down defensive practice that puts the doctor’s comfort before the patient’s safety.",
     "fix": "Be honest about your limits and what you will do anyway."
    },
    {
     "dom": "gs",
     "fail": "Vague close — “we’ll be in touch”.",
     "why": "Her supply ends in a week; a deadline needs a date.",
     "fix": "“I’ll ring you in two or three days, well before you run out.”"
    },
    {
     "dom": "gs",
     "fail": "No crisis routes given.",
     "why": "Non-specific safety-netting is a standard failing statement.",
     "fix": "Name 111 mental health option, Samaritans 116 123 and 999/A&E."
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
